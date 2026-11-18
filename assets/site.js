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

const featuredBrands = [
  'Hama', 'Soundcore', 'Mind Games', 'Diogenes', 'Sonoro', 'Trinny London',
  'Thoma Naturkosmetik', 'Feiler', 'Mampe', 'Bosch', 'De’Longhi', 'Brandgut',
  'Sonos', 'Louis Poulsen', 'Lechuza', 'Playmobil', 'Zuru', 'Ulbrich Spiele',
  'Carrera', 'Benecos', 'Tolino', 'Ravensburger'
];

const prizeHighlights = [
  ['De’Longhi', 'La Specialista Touch', '850 €', 'assets/images/products/delonghi-la-specialista.png'],
  ['Eufy', 'Rasenmähroboter E15', '1.500 €', 'assets/images/products/eufy-e15.png'],
  ['Sonos', 'Beam Gen 2', '500 €', 'assets/images/products/sonos-beam-cutout.png'],
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
          <img src="assets/images/placements/lametta-2025-page-8.webp" alt="Linke Seite der Koch-Doppelseite mit Produkten und Rotkohl-Rouladen" loading="lazy">
          <img src="assets/images/placements/lametta-2025-page-9.jpg" alt="Rechte Seite der Koch-Doppelseite mit Küchenprodukten" loading="lazy">
        </div>
        <figcaption>Produkte, Genuss und Redaktion verbunden</figcaption>
      </figure>
      <figure class="spread-pair spread-pair--center">
        <div class="spread-pages">
          <img src="assets/images/placements/lametta-2025-page-7.webp" alt="LAMETTA!-Seite 7 mit Beauty- und Lifestyle-Produkten" loading="lazy">
          <img src="assets/images/placements/lametta-2025-page-17.jpg" alt="LAMETTA!-Seite 17 mit Sonos, Lechuza und Bosch" loading="lazy">
        </div>
        <figcaption>Vielfalt redaktionell inszeniert</figcaption>
      </figure>
    </div>`;
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
  const cards = issues.map(([year, cover]) => `
    <article class="archive-card">
      <button class="archive-cover" type="button" data-preview-year="${year}" aria-label="Vorschau der LAMETTA!-Ausgabe ${year} öffnen">
      <img src="${cover}" alt="Cover der LAMETTA!-Ausgabe ${year}" loading="lazy" width="720" height="948">
      </button>
      <h3>LAMETTA! ${year}</h3>
      <button class="archive-link" type="button" data-preview-year="${year}">Vorschau ansehen ↗</button>
      ${year === '2025' ? '<a class="archive-status" href="https://lametta-mag.de/lametta-2025" target="_blank" rel="noopener">Vollständiges E-Paper 2025 ↗</a>' : ''}
    </article>`).join('');

  archive.innerHTML = `
    <div class="eyebrow">Das LAMETTA!-Archiv</div>
    <h2>Alle Ausgaben.</h2>
    <p>Die Cover dokumentieren alle bisherigen Ausgaben. Zu jedem Jahr gibt es eine ausgewählte Leseprobe im geschützten Vorschaumodus – ohne öffentlich verlinkte PDF-Datei und ohne Downloadbutton.</p>
    <div class="archive-grid">${cards}</div>
    <div class="preview-reader" role="dialog" aria-modal="true" aria-labelledby="preview-reader-title" hidden>
      <div class="preview-reader-bar">
        <strong id="preview-reader-title">LAMETTA!-Vorschau</strong>
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
      readerTitle.textContent = `LAMETTA! ${year} · Leseprobe`;
      readerPages.innerHTML = issuePreviews[year]
        .map((src, index) => `<img src="${src}" alt="Vorschauseite ${index + 1} der LAMETTA!-Ausgabe ${year}">`)
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
        <p>Sie möchten Ihre Marke in der nächsten LAMETTA!-Ausgabe präsentieren? Lassen Sie uns über die passende Kooperation sprechen. Mediadaten mit Formaten, technischen Angaben und Preisen senden wir gern persönlich auf Anfrage.</p>
        <div class="contact-actions">
          <a class="cta" href="mailto:hallo@lametta-mag.de?subject=Gespr%C3%A4ch%20zu%20LAMETTA!%202026">Gespräch vereinbaren ↗</a>
          <a class="cta cta-secondary" href="mailto:hallo@lametta-mag.de?subject=Mediadaten%20LAMETTA!%202026">Mediadaten anfragen ↗</a>
        </div>
      </div>
      <figure class="contact-portrait contact-portrait--large">
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
  if (title) title.innerHTML = 'Wo Marken zu<br><i>Weihnachtsgeschichten</i><br>werden.';
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
    <div class="gold-dust" aria-hidden="true">${Array.from({ length: 22 }, (_, index) => `<span style="--i:${index};--x:${(index * 47) % 100};--size:${3 + (index % 3) * 2}px;--drift:${(index % 5) * 7 - 14}px"></span>`).join('')}</div>
    <img class="site-footer-logo" src="assets/logos/lametta/Anzeit_Wort-Bildmarke_rgb_positiv.svg" alt="anzeit publishing">
    <div class="footer-copy">
      <div class="footer-socials">
        <a href="https://open.spotify.com/playlist/2qutKgi03L5rDq4FLyBhnq" target="_blank" rel="noopener" aria-label="LAMETTA! Weihnachtsplaylist auf Spotify öffnen"><span class="social-icon social-icon--spotify">●</span><span><strong>Christmas Playlist</strong><small>Weihnachtsmusik auf Spotify ↗</small></span></a>
        <a href="https://www.instagram.com/lametta_xmas/" target="_blank" rel="noopener" aria-label="LAMETTA! auf Instagram öffnen"><span class="social-icon social-icon--instagram">◎</span><span><strong>Instagram</strong><small>@lametta_xmas ↗</small></span></a>
      </div>
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
