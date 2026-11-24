const sharp = require('sharp');

async function make(source, target, crop, masks = []) {
  const { data, info } = await sharp(source)
    .extract(crop)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    const lo = Math.min(r, g, b), hi = Math.max(r, g, b), chroma = hi - lo;
    if (lo >= 246 && chroma <= 9) data[i + 3] = 0;
    else if (lo >= 220 && chroma <= 14) data[i + 3] = Math.max(0, Math.min(255, (246 - lo) * 10));
  }

  const w = info.width, h = info.height, seen = new Uint8Array(w * h);
  const components = [];
  for (let p = 0; p < w * h; p++) {
    if (seen[p] || data[p * 4 + 3] < 24) continue;
    const stack = [p], pixels = []; seen[p] = 1;
    while (stack.length) {
      const q = stack.pop(); pixels.push(q);
      const x = q % w, y = (q / w) | 0;
      for (const n of [x ? q - 1 : -1, x + 1 < w ? q + 1 : -1, y ? q - w : -1, y + 1 < h ? q + w : -1]) {
        if (n >= 0 && !seen[n] && data[n * 4 + 3] >= 24) { seen[n] = 1; stack.push(n); }
      }
    }
    components.push(pixels);
  }
  for (const component of components) {
    if (component.length >= 160) continue;
    for (const p of component) data[p * 4 + 3] = 0;
  }

  for (const mask of masks) {
    for (let y = mask.top; y < mask.top + mask.height; y++) {
      for (let x = mask.left; x < mask.left + mask.width; x++) data[(y * w + x) * 4 + 3] = 0;
    }
  }

  // The Zuru source sits on a faint grey page-shadow. Remove the remaining
  // neutral rectangular strip below the upper plush without touching its
  // warm beige product pixels or the coloured product tag.
  if (target.includes('zuru-')) {
    for (let y = 138; y < 164; y++) {
      for (let x = 35; x < 192; x++) {
        const i = (y * w + x) * 4;
        const r = data[i], g = data[i + 1], b = data[i + 2];
        const lo = Math.min(r, g, b), hi = Math.max(r, g, b);
        if (lo >= 185 && hi - lo <= 12) data[i + 3] = 0;
      }
    }
  }

  let output = sharp(data, { raw: { width: w, height: h, channels: 4 } });
  if (target.includes('zuru-')) {
    output = output.extend({ top: 30, right: 30, bottom: 30, left: 30, background: { r: 0, g: 0, b: 0, alpha: 0 } });
  }
  await output.png({ compressionLevel: 9 }).toFile(target);
}

Promise.all([
  make('assets/images/placements/lametta-2025-page-23.webp', 'assets/images/products/zuru-hug-a-lumps-cutout.png', { left: 20, top: 70, width: 330, height: 310 }, [{ left: 0, top: 198, width: 42, height: 48 }]),
  make('assets/images/placements/lametta-2025-page-22.webp', 'assets/images/products/vetain-set-cutout.png', { left: 800, top: 570, width: 300, height: 270 }, [{ left: 122, top: 190, width: 44, height: 50 }])
]).catch((error) => { console.error(error); process.exit(1); });
