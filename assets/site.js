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

const issuePreviews = {
  '2025': ['assets/images/placements/lametta-2025-page-4.webp', 'assets/images/placements/lametta-2025-page-5.webp'],
  '2024': ['assets/images/archive-previews/2024-04.jpg', 'assets/images/archive-previews/2024-05.jpg'],
  '2023': ['assets/images/archive-previews/2023-04.jpg', 'assets/images/archive-previews/2023-05.jpg'],
  '2022': ['assets/images/archive-previews/2022-04.jpg', 'assets/images/archive-previews/2022-05.jpg'],
  '2021': ['assets/images/archive-previews/2021-04.jpg', 'assets/images/archive-previews/2021-05.jpg'],
  '2020': ['assets/images/archive-previews/2020-04.jpg', 'assets/images/archive-previews/2020-05.jpg'],
  '2019': ['assets/images/archive-previews/2019-04.jpg', 'assets/images/archive-previews/2019-05.jpg'],
  '2018': ['assets/images/archive-previews/2018-04.jpg', 'assets/images/archive-previews/2018-05.jpg']
};

const productSpotlights = [
  ['Soundcore', 'AeroClips', 'assets/images/products/soundcore-aeroclips-cutout.png'],
  ['Sonoro', 'AVATON', 'assets/images/products/sonoro-avaton.png'],
  ['Hama', 'Smartwatch 8900', 'assets/images/products/hama-smartwatch-8900-cutout.png'],
  ['Thoma Naturkosmetik', 'Serum', 'assets/images/products/thoma-serum.png'],
  ['Lechuza', 'CANTO Stone', 'assets/images/products/lechuza-canto-cutout.png'],
  ['Playmobil', 'Sky Trails', 'assets/images/products/playmobil-sky-trails.png']
];

const archiveBrands = [
  'Anker', 'Benecos', 'Beyer & Söhne', 'BookBeat', 'Bosch', 'Brandgut',
  'Carrera', 'De’Longhi', 'DigitalSpecialist', 'Diogenes', 'Dyson', 'dōTERRA', 'Eufy',
  'Everdrop', 'Faber-Castell', 'Feiler', 'Freixenet', 'Fürst Bismarck', 'Hama',
  'i+m Naturkosmetik', 'J.F. Schwarzlose Berlin', 'Jägermeister', 'Juvia',
  'LDM', 'Lechuza', 'Leuchtturm1917', 'Logitech',
  'Louis Poulsen', 'Mampe', 'MediaMarkt', 'Mey & Edlich', 'Mind Games',
  'Modulor', 'Motorola', 'Muck Boot', 'Nespresso', 'Oral-B', 'Playmobil',
  'Ravensburger', 'Remarkable Regional Malts', 'Rosenthal',
  'Samsung', 'Seiko', 'Sky', 'Sonoro', 'Sonos', 'Sospiro', 'Soundcore',
  'Tchibo', 'This Place', 'Thoma Naturkosmetik', 'Tolino', 'Trinny London',
  'Ultimate Ears', 'Ulbrich Spiele', 'Und Gretel', 'Urban Sports Club',
  'Verso', 'Villeroy & Boch', 'Weleda', 'Zuru'
];

const prizeHighlights = [
  ['De’Longhi', 'La Specialista Touch', '850 €', 'assets/images/products/delonghi-la-specialista.png'],
  ['Sonos', 'Beam Gen 2', '500 €', 'assets/images/products/sonos-beam-cutout.png'],
  ['Louis Poulsen', 'Panthella 250 Portable', '365 €', 'assets/images/products/Panthella-250-Portable-Lamp-Opaque-Burgundy-Off.jpg'],
  ['Eufy', 'Rasenmähroboter E15', '1.500 €', 'assets/images/products/eufy-e15.png'],
  ['Sonoro', 'STREAM', '270 €', 'assets/images/products/sonoro-stream.png'],
  ['Lechuza', 'CANTO Stone Set', '240 €', 'assets/images/products/lechuza-canto.png'],
  ['Modulor', 'Tischgestell X', '255 €', 'assets/images/products/modulor-table.png'],
  ['Tolino', 'Vision Color', '200 €', 'assets/images/products/white_vision-color_Splash_Rechts_Buecher (1).png'],
  ['Feiler', 'WILD LEO Set', '300 €', 'assets/images/products/feiler-set-raffle.png'],
  ['Muck Boot', 'Arctic Ice Vibram', '270 €', 'assets/images/products/muck-boot-arctic-ice.png'],
  ['Hama', 'Smartwatch 8900', '150 €', 'assets/images/products/hama-smartwatch-8900.png'],
  ['Vetain', 'Vegan Protein Spekulatius Set', '80 €', 'assets/images/placements/lametta-2025-page-22.webp', 'prize-image--crop', '--zoom:4.2;--origin-x:70%;--origin-y:41%'],
  ['Thoma Naturkosmetik', 'Serum mit Ceramiden', 'je 30 €', 'assets/images/products/thoma-serum.png'],
  ['Playmobil', 'Sky Trails Starter Kit', 'je 80 €', 'assets/images/products/playmobil-sky-trails.png'],
  ['Ravensburger', 'Wer stiehlt mir die Show?', '35 €', 'assets/images/products/Wer-stiehlt-mir-die-Show_Freisteller.jpg'],
  ['Zuru', 'Hug-A-Lumps', 'je 20 €', 'assets/images/placements/lametta-2025-page-23.webp', 'prize-image--crop', '--zoom:3.8;--origin-x:10%;--origin-y:10%'],
  ['Carrera', 'Hybrid Devil Drivers', '300 €', 'assets/images/products/carrera-hybrid-set.png']
];

function renderBrandReferences() {
  const ticker = document.querySelector('.brandticker');
  if (!ticker) return;
  const brands = [...archiveBrands, ...archiveBrands]
    .map((brand) => `<span>${brand}</span>`)
    .join('');
  ticker.setAttribute('aria-label', 'Marken aus allen bisherigen Lametta Ausgaben');
  ticker.innerHTML = `
    <div class="label">Marken aus allen Lametta Ausgaben</div>
    <div class="brandtrack">${brands}</div>`;
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
        <p>Produkte stehen bei Lametta nicht in einem austauschbaren Shop-Raster. Sie werden Teil einer redaktionellen Weihnachtswelt – mit eigenem Rhythmus, überraschenden Nachbarschaften und viel Raum für ihre Geschichte.</p>
        <p class="placement-note">So kann eine Marke im Magazin aussehen.</p>
      </div>
    </div>
    <div class="spread-showcase">
      <figure class="spread-pair spread-pair--left">
        <div class="spread-pages">
          <img src="assets/images/placements/lametta-2025-page-4.webp" alt="Linke Seite einer Lametta Doppelseite mit Hama und Soundcore" loading="lazy">
          <img src="assets/images/placements/lametta-2025-page-5.webp" alt="Rechte Seite einer Lametta Doppelseite mit Mind Games, Diogenes und Sonoro" loading="lazy">
        </div>
        <figcaption>Produkt trifft Persönlichkeit</figcaption>
      </figure>
      <figure class="spread-pair spread-pair--right">
        <div class="spread-pages">
          <img src="assets/images/placements/lametta-2025-page-8.webp" alt="Linke Seite der Koch-Doppelseite mit Produkten und Rotkohl-Rouladen" loading="lazy">
          <img src="assets/images/placements/lametta-2025-page-9.jpg" alt="Rechte Seite der Koch-Doppelseite mit Küchenprodukten" loading="lazy">
        </div>
        <figcaption>Produkte, Genuss und Redaktion verbunden</figcaption>
      </figure>
      <figure class="spread-pair spread-pair--center">
        <div class="spread-pages">
          <img src="assets/images/placements/lametta-2025-page-7.webp" alt="Lametta Seite 7 mit Beauty- und Lifestyle-Produkten" loading="lazy">
          <img src="assets/images/placements/lametta-2025-page-17.jpg" alt="Lametta Seite 17 mit Sonos, Lechuza und Bosch" loading="lazy">
        </div>
        <figcaption>Vielfalt redaktionell inszeniert</figcaption>
      </figure>
    </div>`;
}

function renderGiveaway() {
  const section = document.querySelector('#gewinnspiel');
  if (!section) return;
  const cards = prizeHighlights.map(([brand, product, value, image, imageClass = '', imageStyle = '']) => `
    <article class="prize-card">
      <div class="prize-image ${imageClass}" style="${imageStyle}"><img src="${image}" alt="${brand} ${product}" loading="lazy"></div>
      <div class="prize-brand">${brand}</div>
      <strong>${product}</strong>
      <span>Wert: ${value}</span>
    </article>`).join('');
  section.innerHTML = `
    <div class="giveaway-heading">
      <div>
        <div class="eyebrow">Lametta Gewinnspiel 2025</div>
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
      <p class="hand-note">Alle 17 Preise aus 2025.</p>
      <a class="cta" href="#kontakt">Gewinnspiel-Kooperation besprechen ↗</a>
    </div>`;
}

function renderArchive() {
  const archive = document.querySelector('#archiv');
  if (!archive) return;
  const cards = issues.map(([year, cover]) => `
    <article class="archive-card">
      <button class="archive-cover" type="button" data-preview-year="${year}" aria-label="Vorschau der Lametta Ausgabe ${year} öffnen">
      <img src="${cover}" alt="Cover der Lametta Ausgabe ${year}" loading="lazy" width="720" height="948">
      </button>
      <h3>Lametta ${year}</h3>
      <button class="archive-link" type="button" data-preview-year="${year}">Vorschau ansehen ↗</button>
      ${year === '2025' ? '<a class="archive-status" href="https://lametta-mag.de/lametta-2025" target="_blank" rel="noopener">Vollständiges E-Paper 2025 ↗</a>' : ''}
    </article>`).join('');

  archive.innerHTML = `
    <div class="eyebrow">Das Lametta Archiv</div>
    <h2>Alle Ausgaben.</h2>
    <p>Die Cover dokumentieren alle bisherigen Ausgaben. Zu jedem Jahr gibt es eine ausgewählte Leseprobe im geschützten Vorschaumodus – ohne öffentlich verlinkte PDF-Datei und ohne Downloadbutton.</p>
    <div class="archive-grid">${cards}</div>
    <div class="preview-reader" role="dialog" aria-modal="true" aria-labelledby="preview-reader-title" hidden>
      <div class="preview-reader-bar">
        <strong id="preview-reader-title">Lametta Vorschau</strong>
        <button type="button" class="preview-reader-close" aria-label="Vorschau schließen">×</button>
      </div>
      <div class="preview-reader-pages"></div>
    </div>`;

  const reader = archive.querySelector('.preview-reader');
  const readerTitle = reader.querySelector('#preview-reader-title');
  const readerPages = reader.querySelector('.preview-reader-pages');
  archive.querySelectorAll('[data-preview-year]').forEach((button) => {
    button.addEventListener('click', () => {
      const year = button.dataset.previewYear;
      readerTitle.textContent = `Lametta ${year} · Leseprobe`;
      readerPages.innerHTML = issuePreviews[year]
        .map((src, index) => `<img src="${src}" alt="Vorschauseite ${index + 1} der Lametta Ausgabe ${year}">`)
        .join('');
      reader.hidden = false;
      document.body.classList.add('viewer-open');
    });
  });
  reader.querySelector('.preview-reader-close').addEventListener('click', () => {
    reader.hidden = true;
    readerPages.innerHTML = '';
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
        <p>Sie möchten Ihre Marke in der nächsten Lametta Ausgabe präsentieren? Lassen Sie uns über die passende Kooperation sprechen. Mediadaten mit Formaten, technischen Angaben und Preisen senden wir gern persönlich auf Anfrage.</p>
        <div class="contact-actions">
          <a class="cta" href="mailto:hallo@lametta-mag.de?subject=Gespr%C3%A4ch%20zu%20Lametta%202026">Gespräch vereinbaren ↗</a>
          <a class="cta cta-secondary" href="mailto:hallo@lametta-mag.de?subject=Mediadaten%20Lametta%202026">Mediadaten anfragen ↗</a>
        </div>
      </div>
      <figure class="contact-portrait contact-portrait--large">
        <img src="assets/images/optimized/contact-portrait.webp" alt="Persönliche Ansprechpartnerin für Lametta" loading="lazy" width="1600" height="1067">
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
        <img src="assets/images/covers/lametta-2025.webp" alt="Cover der Lametta Ausgabe 2025" width="1440" height="1895">
      </div>
      <div class="epaper-copy">
        <div class="eyebrow">Ein Blick in Lametta</div>
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
  cover.alt = 'Cover der Lametta Ausgabe 2025 – E-Paper öffnen';

  const heroArt = cover.closest('.heroart');
  if (!heroArt || heroArt.querySelector('.hero-cover-link')) return;

  const coverLink = document.createElement('a');
  coverLink.className = 'hero-cover-link';
  coverLink.href = 'https://lametta-mag.de/lametta-2025';
  coverLink.target = '_blank';
  coverLink.rel = 'noopener';
  coverLink.setAttribute('aria-label', 'E-Paper der Lametta Ausgabe 2025 öffnen');
  cover.parentNode.insertBefore(coverLink, cover);
  coverLink.appendChild(cover);
  coverLink.insertAdjacentHTML('beforeend', '<span class="hero-epaper-cta">E-Paper öffnen</span>');

  const facts = document.createElement('div');
  facts.className = 'hero-quick-facts';
  facts.setAttribute('aria-label', 'Auflage und Reichweite');
  facts.innerHTML = `
    <div><strong>bis zu 100.000</strong><span>Exemplare</span></div>
    <div><strong>ca. 1,04 Mio.</strong><span>potenzielles Lesepublikum*</span></div>`;
  coverLink.insertAdjacentElement('afterend', facts);
}

function upgradeHeroCopy() {
  const title = document.querySelector('.herotxt h1');
  const copy = document.querySelector('.herotxt p');
  const cta = document.querySelector('.herotxt .cta');
  const coverClaim = document.querySelector('.cover-claim');
  if (title) title.innerHTML = 'Wo Marken zu<br><i>Weihnachtsgeschichten</i><br>werden.';
  if (copy) copy.textContent = 'Lametta bringt besondere Produkte in ein inspirierendes redaktionelles Umfeld – überraschend inszeniert, hochwertig erzählt und sichtbar über Print und E-Paper.';
  if (cta) cta.textContent = 'Lametta entdecken ↗';
  if (coverClaim) coverClaim.textContent = 'Geschenke und andere Besonderheiten für die Liebsten und mich.';
}

function cleanPrototypeNotes() {
  document.querySelector('#beispiele .note')?.remove();
  const facts = document.querySelectorAll('#fakten .fact');
  if (facts[1]) {
    facts[1].querySelector('strong').textContent = 'bis zu 100.000';
    facts[1].querySelector('span').textContent = 'Auflage';
  }
  if (facts[2]) {
    facts[2].querySelector('strong').textContent = 'ca. 1,04 Mio.';
    facts[2].querySelector('span').textContent = 'Rechnerisches potenzielles Lesepublikum*';
  }
  const factNote = document.querySelector('#fakten .note');
  if (factNote) factNote.textContent = '* Proportionale Modellrechnung auf Basis einer Auflage von bis zu 100.000 Exemplaren; keine separat gemessene Lametta Reichweite.';
}

function renderFooter() {
  const footer = document.querySelector('footer');
  if (!footer) return;
  footer.innerHTML = `
    <div class="gold-dust" aria-hidden="true">${Array.from({ length: 22 }, (_, index) => `<span style="--i:${index};--x:${(index * 47) % 100};--size:${3 + (index % 3) * 2}px;--drift:${(index % 5) * 7 - 14}px"></span>`).join('')}</div>
    <img class="site-footer-logo" src="assets/logos/lametta/Anzeit_Wort-Bildmarke_rgb_positiv.svg" alt="anzeit publishing">
    <div class="footer-copy">
      <div class="footer-socials">
        <a href="https://open.spotify.com/playlist/2qutKgi03L5rDq4FLyBhnq" target="_blank" rel="noopener" aria-label="Lametta Weihnachtsplaylist auf Spotify öffnen"><span class="social-icon social-icon--spotify">●</span><span><strong>Christmas Playlist</strong><small>Weihnachtsmusik auf Spotify ↗</small></span></a>
        <a href="https://www.instagram.com/lametta_xmas/" target="_blank" rel="noopener" aria-label="Lametta auf Instagram öffnen"><span class="social-icon social-icon--instagram">◎</span><span><strong>Instagram</strong><small>@lametta_xmas ↗</small></span></a>
      </div>
      <p>© anzeit publishing · Lametta Christmas Gift Guide</p>
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
