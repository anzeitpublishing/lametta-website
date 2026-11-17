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
        <p class="hand-note">So kann eine Marke im Magazin aussehen.</p>
      </div>
    </div>
    <div class="placement-collage">
      <figure class="placement-card placement-card--tall">
        <img src="assets/images/placements/lametta-2025-page-4.webp" alt="Redaktionelle LAMETTA!-Platzierung mit Hama und Soundcore" loading="lazy" width="1400" height="1843">
        <figcaption>Produkt trifft Persönlichkeit</figcaption>
      </figure>
      <figure class="placement-card placement-card--offset">
        <img src="assets/images/placements/lametta-2025-page-5.webp" alt="LAMETTA!-Produktseite mit Mind Games, Diogenes und Sonoro" loading="lazy" width="1400" height="1843">
        <figcaption>Luxus, Kultur und Design</figcaption>
      </figure>
      <figure class="placement-card placement-card--wide">
        <img src="assets/images/placements/lametta-2025-page-7.webp" alt="LAMETTA!-Produktseite mit Beauty- und Lifestyle-Produkten" loading="lazy" width="1400" height="1843">
        <figcaption>Kuratiert statt katalogisiert</figcaption>
      </figure>
    </div>
    <div class="product-stage" aria-label="Ausgewählte Produktfreisteller aus LAMETTA! 2025">
      <img class="product-float product-float--1" src="assets/images/products/soundcore-aeroclips.png" alt="Soundcore AeroClips" loading="lazy">
      <img class="product-float product-float--2" src="assets/images/products/sonoro-avaton.png" alt="Sonoro AVATON" loading="lazy">
      <div class="product-stage-copy"><span class="hand-note">Freigestellt.</span><strong>Und trotzdem mitten in der Geschichte.</strong></div>
      <img class="product-float product-float--3" src="assets/images/products/hama-smartwatch-8900.png" alt="Hama Smartwatch 8900" loading="lazy">
      <img class="product-float product-float--4" src="assets/images/products/thoma-serum.png" alt="Thoma Naturkosmetik Serum" loading="lazy">
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
  const cards = issues.map(([year, cover, pdf]) => `
    <article class="archive-card">
      <a href="${pdf}" target="_blank" rel="noopener" aria-label="LAMETTA! ${year} als PDF öffnen">
        <img src="${cover}" alt="Cover der LAMETTA!-Ausgabe ${year}" loading="lazy" width="720" height="948">
      </a>
      <h3>LAMETTA! ${year}</h3>
      <a class="archive-link" href="${pdf}" target="_blank" rel="noopener">Ausgabe öffnen ↗</a>
    </article>`).join('');

  archive.innerHTML = `
    <div class="eyebrow">Das LAMETTA!-Archiv</div>
    <h2>Alle Ausgaben.</h2>
    <p>Acht Jahre Geschenkideen, redaktionelle Geschichten und besondere Markeninszenierungen – vollständig zum Blättern.</p>
    <div class="archive-grid">${cards}</div>`;
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
