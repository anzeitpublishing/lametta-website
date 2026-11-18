const issues = [
  ['2025', 'assets/images/covers/lametta-2025.webp', 'https://lametta-mag.de/lametta-2025'],
  ['2024', 'assets/images/covers/lametta-2024.webp', 'assets/documents/2024_ANZ_Lametta_RZ_digital_150dpi_ES_optimiert_e.pdf'],
  ['2023', 'assets/images/covers/lametta-2023.webp', 'assets/documents/ePaper_Lametta_23_Einzelseiten_korr.pdf'],
  ['2022', 'assets/images/covers/lametta-2022.webp', 'assets/documents/ANZ_Lametta_2911_22_Doppelseiten_medium.pdf'],
  ['2021', 'assets/images/covers/lametta-2021.webp', 'assets/documents/Lametta_21_DS_PDFLink.pdf'],
  ['2020', 'assets/images/covers/lametta-2020.webp', 'assets/documents/2020_ANZ_Lametta_RZ_DS_150dpi_V4.pdf'],
  ['2019', 'assets/images/covers/lametta-2019.webp', 'assets/documents/2019_ANZ_Lametta_RZ_DS_medium_res.pdf'],
  ['2018', 'assets/images/covers/lametta-2018.webp', 'assets/documents/181204_ANZEIT_Lametta_final_190x250mm_print.pdf']
];

const productSpotlights = [
  ['Soundcore', 'AeroClips', 'assets/images/products/soundcore-aeroclips-cutout.png'],
  ['Sonoro', 'AVATON', 'assets/images/products/sonoro-avaton.png'],
  ['Hama', 'Smartwatch 8900', 'assets/images/products/hama-smartwatch-8900-cutout.png'],
  ['Thoma Naturkosmetik', 'Serum', 'assets/images/products/thoma-serum.png'],
  ['Lechuza', 'CANTO Stone', 'assets/images/products/lechuza-canto-cutout.png'],
  ['Playmobil', 'Sky Trails', 'assets/images/products/playmobil-sky-trails.png']
];

const featuredBrands = [
  'Hama', 'Soundcore', 'Mind Games', 'Diogenes', 'Sonoro', 'Trinny London',
  'L’Occitane', 'Sage', 'Bosch', 'De’Longhi', 'Sonos', 'Eufy', 'Lechuza',
  'Playmobil', 'Ravensburger', 'Carrera', 'Feiler', 'Muck Boot'
];

const prizeHighlights = [
  ['De’Longhi', 'La Specialista Touch', '850 €', 'assets/images/products/delonghi-la-specialista.png'],
  ['Eufy', 'Rasenmähroboter E15', '1.500 €', 'assets/images/products/eufy-e15.png'],
  ['Sonos', 'Beam Gen 2', '500 €', 'assets/images/products/sonos-beam.png'],
  ['Lechuza', 'CANTO Stone Set', '240 €', 'assets/images/products/lechuza-canto.png'],
  ['Hama', 'Smartwatch 8900', '150 €', 'assets/images/products/hama-smartwatch-8900.png'],
  ['Carrera', 'Hybrid Devil Drivers', '300 €', 'assets/images/products/carrera-hybrid-set.png'],
  ['Playmobil', 'Sky Trails Starter Kit', 'je 80 €', 'assets/images/products/playmobil-sky-trails.png'],
  ['Muck Boot', 'Arctic Ice Vibram', '270 €', 'assets/images/products/muck-boot-arctic-ice.png']
];

function renderBrandReferences() {
  const ticker = document.querySelector('.brandticker');
  if (!ticker) return;
  const names = [...featuredBrands, ...featuredBrands]
    .map((brand) => `<span>${brand}</span>`)
    .join('');
  ticker.innerHTML = `
    <div class="label">Ausgewählte Marken und Produkte in LAMETTA! 2025</div>
    <div class="brandtrack">${names}</div>`;
}

function renderPlacements() {
  const section = document.querySelector('#beispiele');
  if (!section) return;
  section.innerHTML = `
    <div class="placement-intro">
      <div>
        <div class="eyebrow">Echte Platzierungen · Ausgabe 2025</div>
        <h2>Nicht einfach<br>platziert.<br><i>Editorial inszeniert.</i></h2>
      </div>
      <div>
        <p>Produkte stehen bei LAMETTA! nicht in einem austauschbaren Shop-Raster. Sie werden Teil einer redaktionellen Weihnachtswelt – mit eigenem Rhythmus, überraschenden Nachbarschaften und viel Raum für ihre Geschichte.</p>
        <p class="placement-note">So kann eine Marke im Magazin aussehen.</p>
      </div>
    </div>
    <div class="spread-showcase">
      <figure class="spread-pair spread-pair--left">
        <div class="spread-pages">
          <img src="assets/images/placements/lametta-2025-page-4.webp" alt="Linke Seite einer LAMETTA!-Doppelseite mit Hama und Soundcore" loading="lazy">
          <img src="assets/images/placements/lametta-2025-page-5.webp" alt="Rechte Seite einer LAMETTA!-Doppelseite mit Mind Games, Diogenes und Sonoro" loading="lazy">
        </div>
        <figcaption>Produkt trifft Persönlichkeit</figcaption>
      </figure>
      <figure class="spread-pair spread-pair--right">
        <div class="spread-pages">
          <img src="assets/images/placements/lametta-2025-page-7.webp" alt="Linke Seite einer LAMETTA!-Doppelseite mit Beauty- und Lifestyle-Produkten" loading="lazy">
          <img src="assets/images/placements/lametta-2025-page-8.webp" alt="Rechte Seite einer LAMETTA!-Doppelseite" loading="lazy">
        </div>
        <figcaption>Kuratiert statt katalogisiert</figcaption>
      </figure>
      <figure class="spread-pair spread-pair--center">
        <div class="spread-pages">
          <img src="assets/images/placements/lametta-2025-page-22.webp" alt="Linke Seite einer weiteren LAMETTA!-Doppelseite" loading="lazy">
          <img src="assets/images/placements/lametta-2025-page-23.webp" alt="Rechte Seite einer weiteren LAMETTA!-Doppelseite" loading="lazy">
        </div>
        <figcaption>Editorial gedacht. Als Doppelseite inszeniert.</figcaption>
      </figure>
    </div>
    <div class="product-stage" aria-label="Wechselnde Produktinszenierung aus LAMETTA! 2025">
      <div class="product-orbit" aria-live="polite">
        <img class="product-spotlight" src="${productSpotlights[0][2]}" alt="${productSpotlights[0][0]} ${productSpotlights[0][1]}" loading="lazy">
        <div class="product-caption"><span>${productSpotlights[0][0]}</span><strong>${productSpotlights[0][1]}</strong></div>
      </div>
      <div class="product-stage-copy"><span class="hand-note">Immer neu inszeniert.</span><strong>Ein Produkt.<br>Eine eigene Bühne.</strong></div>
      <div class="product-dots" aria-label="Produkt auswählen"></div>
    </div>`;

  const image = section.querySelector('.product-spotlight');
  const caption = section.querySelector('.product-caption');
  const dots = section.querySelector('.product-dots');
  let active = 0;
  productSpotlights.forEach((item, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('aria-label', `${item[0]} ${item[1]} zeigen`);
    button.addEventListener('click', () => showProduct(index));
    dots.appendChild(button);
  });
  function showProduct(index) {
    active = index;
    const [brand, product, src] = productSpotlights[index];
    image.classList.add('is-changing');
    window.setTimeout(() => {
      image.src = src;
      image.alt = `${brand} ${product}`;
      caption.innerHTML = `<span>${brand}</span><strong>${product}</strong>`;
      image.classList.remove('is-changing');
    }, 180);
    [...dots.children].forEach((dot, dotIndex) => dot.classList.toggle('is-active', dotIndex === index));
  }
  showProduct(0);
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.setInterval(() => showProduct((active + 1) % productSpotlights.length), 4200);
  }
}

function renderGiveaway() {
  const section = document.querySelector('#gewinnspiel');
  if (!section) return;
  const cards = prizeHighlights.map(([brand, product, value, image]) => `
    <article class="prize-card">
      <div class="prize-image"><img src="${image}" alt="${brand} ${product}" loading="lazy"></div>
      <div class="prize-brand">${brand}</div>
      <strong>${product}</strong>
      <span>Wert: ${value}</span>
    </article>`).join('');
  section.innerHTML = `
    <div class="giveaway-heading">
      <div>
        <div class="eyebrow">LAMETTA!-Gewinnspiel 2025</div>
        <h2>Große Freude.<br><i>Große Bühne.</i></h2>
      </div>
      <div class="giveaway-stat"><strong>17</strong><span>Gewinnpakete</span></div>
      <div class="giveaway-stat"><strong>5.900 €+</strong><span>Gesamtwert</span></div>
    </div>
    <p class="giveaway-lead">Das Gewinnspiel verlängert die Produktinszenierung über das Magazin hinaus: mit aufmerksamkeitsstarken Preisen, E-Paper, Website, Newsletter und Social Media.</p>
    <div class="prize-window">
      <div class="prize-track">${cards}${cards}</div>
    </div>
    <div class="giveaway-bottom">
      <p class="hand-note">Eine Auswahl der Preise aus 2025.</p>
      <a class="cta" href="#kontakt">Gewinnspiel-Kooperation besprechen ↗</a>
    </div>`;
}

function renderArchive() {
  const archive = document.querySelector('#archiv');
  if (!archive) return;
  const cards = issues.map(([year, cover, document]) => `
    <article class="archive-card">
      <button class="archive-cover" type="button" data-document="${document}" data-year="${year}" aria-label="LAMETTA! ${year} ansehen">
      <img src="${cover}" alt="Cover der LAMETTA!-Ausgabe ${year}" loading="lazy" width="720" height="948">
      </button>
      <h3>LAMETTA! ${year}</h3>
      <button class="archive-link" type="button" data-document="${document}" data-year="${year}">Ausgabe ansehen ↗</button>
    </article>`).join('');

  archive.innerHTML = `
    <div class="eyebrow">Das LAMETTA!-Archiv</div>
    <h2>Alle Ausgaben.</h2>
    <p>Acht Jahre Geschenkideen, redaktionelle Geschichten und besondere Markeninszenierungen – direkt auf der Website ansehen, ohne einen Download starten zu müssen.</p>
    <div class="archive-grid">${cards}</div>
    <div class="issue-viewer" role="dialog" aria-modal="true" aria-labelledby="issue-viewer-title" hidden>
      <div class="issue-viewer-bar">
        <strong id="issue-viewer-title">LAMETTA! ansehen</strong>
        <button type="button" class="issue-viewer-close" aria-label="Ansicht schließen">×</button>
      </div>
      <iframe title="LAMETTA!-Ausgabe" loading="lazy"></iframe>
    </div>`;

  const viewer = archive.querySelector('.issue-viewer');
  const frame = viewer.querySelector('iframe');
  const title = viewer.querySelector('#issue-viewer-title');
  archive.querySelectorAll('[data-document]').forEach((button) => {
    button.addEventListener('click', () => {
      title.textContent = `LAMETTA! ${button.dataset.year}`;
      frame.src = button.dataset.document.startsWith('http')
        ? button.dataset.document
        : `${button.dataset.document}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`;
      viewer.hidden = false;
      document.body.classList.add('viewer-open');
    });
  });
  viewer.querySelector('.issue-viewer-close').addEventListener('click', () => {
    viewer.hidden = true;
    frame.src = 'about:blank';
    document.body.classList.remove('viewer-open');
  });
}

function renderContact() {
  const contact = document.querySelector('#kontakt');
  if (!contact) return;
  contact.innerHTML = `
    <div class="contact-inner">
      <div class="contact-copy">
        <div class="eyebrow">Let's talk</div>
        <h2>Gute Ideen<br>beginnen mit<br><i>einem Gespräch.</i></h2>
        <p>Sie möchten Ihre Marke in der nächsten LAMETTA!-Ausgabe präsentieren? Lassen Sie uns über die passende Kooperation sprechen. Mediadaten mit Formaten, technischen Angaben und Preisen senden wir gern persönlich auf Anfrage.</p>
        <div class="contact-actions">
          <a class="cta" href="mailto:info@lametta-mag.de?subject=Gespr%C3%A4ch%20zu%20LAMETTA!%202026">Gespräch vereinbaren ↗</a>
          <a class="cta cta-secondary" href="mailto:info@lametta-mag.de?subject=Mediadaten%20LAMETTA!%202026">Mediadaten anfragen ↗</a>
        </div>
      </div>
      <figure class="contact-portrait">
        <img src="assets/images/optimized/contact-portrait.webp" alt="Persönliche Ansprechpartnerin für LAMETTA!" loading="lazy" width="1600" height="1067">
        <figcaption>Persönlich, direkt und mit Freude an guten Ideen.</figcaption>
      </figure>
    </div>`;
}

function renderEpaper() {
  const epaper = document.querySelector('#epaper');
  if (!epaper) return;
  epaper.innerHTML = `
    <div class="epaper-inner">
      <div class="epaper-cover">
        <img src="assets/images/covers/lametta-2025.webp" alt="Cover der LAMETTA!-Ausgabe 2025" width="1440" height="1895">
      </div>
      <div class="epaper-copy">
        <div class="eyebrow">Ein Blick in LAMETTA!</div>
        <h2>Das Magazin<br>zum Blättern.</h2>
        <p>Entdecken Sie die vollständige Ausgabe 2025 im interaktiven E-Paper – ohne Download und bequem im Browser.</p>
        <a class="cta" href="https://lametta-mag.de/lametta-2025" target="_blank" rel="noopener">E-Paper 2025 öffnen ↗</a>
        <p class="epaper-note">Das E-Paper öffnet sich in einem neuen Tab.</p>
      </div>
    </div>`;
}

function upgradeHeroCover() {
  const cover = document.querySelector('.heroart img');
  if (!cover) return;
  cover.src = 'assets/images/covers/lametta-2025.webp';
  cover.width = 1440;
  cover.height = 1895;
}

function upgradeHeroCopy() {
  const title = document.querySelector('.herotxt h1');
  const copy = document.querySelector('.herotxt p');
  if (title) title.innerHTML = 'Wo Marken zu<br><i>Weihnachts-<wbr>geschichten</i><br>werden.';
  if (copy) copy.textContent = 'LAMETTA! bringt besondere Produkte in ein inspirierendes redaktionelles Umfeld – überraschend inszeniert, hochwertig erzählt und sichtbar über Print und E-Paper.';
}

function cleanPrototypeNotes() {
  document.querySelector('#beispiele .note')?.remove();
  const factNote = document.querySelector('#fakten .note');
  if (factNote) factNote.textContent = '* Proportionale Modellrechnung, keine separat gemessene LAMETTA!-Reichweite.';
}

function renderFooter() {
  const footer = document.querySelector('footer');
  if (!footer) return;
  footer.innerHTML = `
    <img class="site-footer-logo" src="assets/logos/lametta/Anzeit_Wort-Bildmarke_rgb_positiv.svg" alt="anzeit publishing">
    <div class="footer-copy">
      <p>© anzeit publishing · LAMETTA! Christmas Gift Guide</p>
      <p>KI-Transparenz: Diese Website wurde unter redaktioneller Verantwortung von anzeit publishing mit Unterstützung KI-gestützter Werkzeuge konzipiert und umgesetzt. Inhalte, Angaben und Gestaltung wurden redaktionell geprüft.</p>
    </div>`;
}

renderArchive();
renderBrandReferences();
renderPlacements();
renderGiveaway();
renderEpaper();
renderContact();
cleanPrototypeNotes();
renderFooter();
upgradeHeroCover();
upgradeHeroCopy();
