(function () {
  const html = document.documentElement;
  const langToggle = document.getElementById('lang-toggle');
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const copy = {
    en: {
      tag: 'Site information',
      title: 'Privacy, terms<br /><span class="accent-text">and service notes.</span>',
      lede: 'A plain-language overview of how this personal site handles messages, local storage, and its small hosted services.',
      updated: 'Last updated: 7 November 2026',
      privacy_title: 'Privacy notice',
      cookies_title: 'Cookies and local storage',
      terms_title: 'Terms of use',
      sla_title: 'Service level information',
      nav_privacy: 'Privacy',
      nav_cookies: 'Cookies',
      nav_terms: 'Terms',
      nav_sla: 'SLA',
      back: 'Back to the site',
      privacy: '<p><strong>Operator.</strong> The operator of this personal site is <strong>mrzsomi</strong>. hello@mrzsomi.top, Hungary, Budapest</p><p><strong>Contact form.</strong> When you send a message, the site receives the name, email address, subject, message, and the consent record included in the form. The purpose is to answer the message and keep a short communication history. The form is delivered through Formspree, which processes the submission as a service provider. Do not send passwords, payment details, health information, or other sensitive information.</p><p><strong>Legal basis and retention.</strong> The message is processed to respond to your request and, where required, on the basis of your explicit form acknowledgment. Keep messages only as long as needed for communication or to establish, exercise, or defend legal claims, then delete them. The operator should set a concrete retention period after reviewing the mailbox and Formspree settings.</p><p><strong>Your rights.</strong> Subject to applicable law, you may request access, correction, deletion, restriction, portability, or object to processing. Contact the operator using the site’s contact form. You may also complain to the competent data protection authority in your country.</p>',
      cookies: '<p>This site does not use advertising, analytics, tracking, or marketing cookies. It uses browser local storage for the selected language, selected theme, contact-form rate limiting, and your consent choice. These values stay in your browser and are not sent to the operator as a profile.</p><p>The contact form is sent to Formspree only after you submit it. Formspree may process the submission under its own privacy and cookie information. Review its current terms before using the form for production or business communications.</p><p>You can clear these values from your browser settings at any time. Choosing “Continue” in the notice dismisses the notice for this browser; it does not enable tracking.</p>',
      terms: '<p><strong>Scope.</strong> mrzsomi.top is a personal portfolio and contact site. Content is provided for information and personal communication. You may view and link to public pages, but do not copy, scrape, disrupt, or misuse the site or its hosted services.</p><p><strong>Projects and external links.</strong> Project descriptions, availability, external links, and hosted resources may change without notice. Third-party services are governed by their own terms.</p><p><strong>Contact requests.</strong> A contact-form submission is a request to communicate, not an offer, order, employment commitment, or service contract. No paid service is created through the form unless a separate written agreement says so.</p><p><strong>Responsibility.</strong> The operator takes reasonable care but cannot guarantee uninterrupted availability, completeness, or suitability for a particular purpose. Mandatory consumer and data-protection rights remain unaffected.</p>',
      sla: '<p><strong>Personal service, no commercial guarantee.</strong> The public portfolio, project pages, and linked personal services are provided on a best-effort basis. This page is an information note, not a promise of commercial uptime.</p><p><strong>Target.</strong> I aim to keep the site available and address reported outages when practical. Maintenance, provider outages, DNS issues, repository changes, abuse, force majeure, and security work may interrupt service.</p><p><strong>Reporting.</strong> Report a broken page or service through the contact form or the linked status page where one exists. Include the affected URL, time, and a short description. No response-time or restoration-time guarantee is made unless a separate written agreement says so.</p>'
    },
    hu: {
      tag: 'Oldalinformáció',
      title: 'Adatvédelem, feltételek<br /><span class="accent-text">és szolgáltatási jegyzetek.</span>',
      lede: 'Közérthető összefoglaló arról, hogyan kezeli ez a személyes oldal az üzeneteket, a helyi tárolást és a kisebb hosztolt szolgáltatásokat.',
      updated: 'Utolsó frissítés: 2026. november 7.',
      privacy_title: 'Adatkezelési tájékoztató',
      cookies_title: 'Sütik és helyi tárolás',
      terms_title: 'Felhasználási feltételek / ÁSZF',
      sla_title: 'Szolgáltatási információk',
      nav_privacy: 'Adatvédelem',
      nav_cookies: 'Sütik',
      nav_terms: 'Feltételek / ÁSZF',
      nav_sla: 'SLA',
      back: 'Vissza az oldalra',
      privacy: '<p><strong>Üzemeltető.</strong> A személyes oldal üzemeltetője <strong>mrzsomi</strong>. hello@mrzsomi.top, Magyarország, Budapest</p><p><strong>Kapcsolati űrlap.</strong> Üzenet küldésekor az oldal megkapja a nevet, e-mail-címet, tárgyat, üzenetet és az űrlapban rögzített hozzájárulást. A cél az üzenet megválaszolása és a rövid kommunikációs előzmény megőrzése. A beküldést a Formspree szolgáltatása továbbítja és dolgozza fel. Ne küldj jelszót, fizetési adatot, egészségügyi adatot vagy más érzékeny információt.</p><p><strong>Jogalap és megőrzés.</strong> Az üzenetet a megkeresés megválaszolása, valamint szükség esetén a kifejezett űrlap-nyilatkozat alapján kezeljük. Az üzeneteket csak a kommunikációhoz, illetve jogi igények előkészítéséhez, érvényesítéséhez vagy védelméhez szükséges ideig őrizd meg, majd töröld. A konkrét megőrzési időt az üzemeltetőnek a postafiók és a Formspree beállításainak áttekintése után kell rögzítenie.</p><p><strong>Érintetti jogok.</strong> A vonatkozó jogszabályok szerint kérheted a hozzáférést, helyesbítést, törlést, korlátozást, adathordozhatóságot, illetve tiltakozhatsz az adatkezelés ellen. Az üzemeltetőt a kapcsolati űrlapon keresztül érheted el. Panasszal a hatáskörrel rendelkező adatvédelmi hatósághoz is fordulhatsz.</p>',
      cookies: '<p>Az oldal nem használ reklám-, analitikai, követő- vagy marketing sütiket. A böngésző helyi tárolóját használja a választott nyelv, téma, kapcsolati űrlap-korlátozás és a hozzájárulás állapotának tárolására. Ezek az értékek a böngésződben maradnak, és nem alkotnak az üzemeltető számára küldött profilt.</p><p>A kapcsolati űrlap csak elküldés után kerül a Formspree-hez. A Formspree a saját adatvédelmi és süti-tájékoztatója szerint dolgozhatja fel a beküldést. Üzleti vagy éles használat előtt ellenőrizd az aktuális feltételeit.</p><p>Ezeket az értékeket bármikor törölheted a böngésző beállításaiban. A „Folytatás” választása csak ezen a böngészőn rejti el a tájékoztatót; nem kapcsol be követést.</p>',
      terms: '<p><strong>Hatály.</strong> A mrzsomi.top személyes portfólió- és kapcsolati oldal. A tartalom tájékoztató és személyes kommunikációs célú. A nyilvános oldalakat megtekintheted és hivatkozhatsz rájuk, de ne másold, ne scrape-eld, ne zavard meg és ne használd visszaélésszerűen az oldalt vagy a hosztolt szolgáltatásokat.</p><p><strong>Projektek és külső linkek.</strong> A projektek leírása, elérhetősége, a külső linkek és a hosztolt erőforrások előzetes értesítés nélkül változhatnak. A külső szolgáltatásokra azok saját feltételei vonatkoznak.</p><p><strong>Kapcsolati megkeresések.</strong> A kapcsolati űrlap elküldése kommunikációs megkeresés, nem ajánlat, megrendelés, munkaviszony vagy szolgáltatási kötelezettség. Fizetős szolgáltatás csak külön írásbeli megállapodással jön létre.</p><p><strong>Felelősség.</strong> Az üzemeltető ésszerű gondossággal jár el, de nem garantálja a folyamatos elérhetőséget, teljességet vagy adott célra való alkalmasságot. A kötelező fogyasztóvédelmi és adatvédelmi jogok változatlanul megilletnek.</p>',
      sla: '<p><strong>Személyes szolgáltatás, nem kereskedelmi garancia.</strong> A nyilvános portfólió, a projektek és a kapcsolódó személyes szolgáltatások legjobb tudás szerinti alapon működnek. Ez az oldal tájékoztató, nem kereskedelmi rendelkezésreállási ígéret.</p><p><strong>Cél.</strong> Törekszem az oldal elérhetőségére és a jelzett hibák ésszerű időn belüli kezelésére. Karbantartás, szolgáltatói hiba, DNS-probléma, repository-változás, visszaélés, vis maior és biztonsági munka megszakíthatja a szolgáltatást.</p><p><strong>Hibajelzés.</strong> Hibás oldalt vagy szolgáltatást a kapcsolati űrlapon, illetve ahol van, a kapcsolódó státuszoldalon jelezhetsz. Add meg az érintett URL-t, az időpontot és röviden a hibát. Válasz- vagy helyreállítási időre nincs garancia, kivéve külön írásbeli megállapodás esetén.</p>'
    }
  };

  function apply(lang) {
    const t = copy[lang];
    html.lang = lang;
    localStorage.setItem('lang', lang);
    langToggle.textContent = lang === 'hu' ? 'HU' : 'EN';
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      if (t[element.dataset.i18n]) element.textContent = t[element.dataset.i18n];
    });
    document.querySelectorAll('[data-i18n-html]').forEach((element) => {
      if (t[element.dataset.i18nHtml]) element.innerHTML = t[element.dataset.i18nHtml];
    });
    themeIcon.textContent = html.dataset.theme === 'dark' ? (lang === 'hu' ? 'világos' : 'light') : (lang === 'hu' ? 'sötét' : 'dark');
    window.dispatchEvent(new CustomEvent('languagechange', { detail: lang }));
  }

  let lang = localStorage.getItem('lang') === 'hu' ? 'hu' : 'en';
  const theme = localStorage.getItem('theme') || 'light';
  html.dataset.theme = theme;
  apply(lang);
  langToggle.addEventListener('click', () => { lang = lang === 'hu' ? 'en' : 'hu'; apply(lang); });
  themeToggle.addEventListener('click', () => {
    html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', html.dataset.theme);
    apply(lang);
  });
})();
