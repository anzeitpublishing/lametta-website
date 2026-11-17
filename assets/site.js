const issues = [
  ['2025', 'assets/images/covers/lametta-2025.webp', 'assets/documents/2025_ANZ_Lametta_digital_150dpi_ES_Stern.pdf'],
  ['2024', 'assets/images/covers/lametta-2024.webp', 'assets/documents/2024_ANZ_Lametta_RZ_digital_150dpi_ES_optimiert_e.pdf'],
  ['2023', 'assets/images/covers/lametta-2023.webp', 'assets/documents/ePaper_Lametta_23_Einzelseiten_korr.pdf'],
  ['2022', 'assets/images/covers/lametta-2022.webp', 'assets/documents/ANZ_Lametta_2911_22_Doppelseiten_medium.pdf'],
  ['2021', 'assets/images/covers/lametta-2021.webp', 'assets/documents/Lametta_21_DS_PDFLink.pdf'],
  ['2020', 'assets/images/covers/lametta-2020.webp', 'assets/documents/2020_ANZ_Lametta_RZ_DS_150dpi_V4.pdf'],
  ['2019', 'assets/images/covers/lametta-2019.webp', 'assets/documents/2019_ANZ_Lametta_RZ_DS_medium_res.pdf'],
  ['2018', 'assets/images/covers/lametta-2018.webp', 'assets/documents/181204_ANZEIT_Lametta_final_190x250mm_print.pdf']
];

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
renderContact();
cleanPrototypeNotes();
renderFooter();
