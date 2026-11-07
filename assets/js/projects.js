(function () {
  const grid = document.getElementById('archive-grid');
  const filters = document.getElementById('archive-filters');
  const themeButton = document.getElementById('theme-toggle');
  const languageButton = document.getElementById('lang-toggle');
  let projects = [];
  let language = localStorage.getItem('lang') || 'en';
  const pageCopy = {
    en: {
      title: 'mrzsomi | Projects',
      description: 'Projects by mrzsomi, a Hungarian student learning by building software, hardware, and small web experiments.',
      nav: ['About', 'Tools', 'Projects', 'Log', 'Contact'],
      tag: 'Archive',
      titleHtml: 'Stuff I’ve made<br /><span class="accent-text">and kept useful.</span>',
      lede: 'Things I’m learning by making.',
      footer: '© 2026 mrzsomi',
      loading: 'Loading projects…',
      error: 'Projects could not be loaded.',
      filterAll: 'All',
      note: 'Read the note',
      status: { completed: 'Completed', 'in-progress': 'In progress', ongoing: 'Ongoing' },
      tags: { arduino: 'Arduino', cnc: 'CNC', motion: 'Motion', pcb: 'PCB', diy: 'DIY', workshop: 'Workshop', esp32: 'ESP32', iot: 'IoT', web: 'Web', firmware: 'Firmware', java: 'Java', minecraft: 'Minecraft', backend: 'Backend', infra: 'Infrastructure', 'self-hosted': 'Self-hosted', prototype: 'Prototype', easyeda: 'EasyEDA', portfolio: 'Portfolio', game: 'Game', 'github-pages': 'GitHub Pages', monitoring: 'Monitoring', 'github-actions': 'GitHub Actions' },
      links: { github: 'GitHub', web: 'Website', discord: 'Discord', documentation: 'Docs', 'live-demo': 'Live demo' },
      themeLight: 'light',
      themeDark: 'dark'
    },
    hu: {
      title: 'mrzsomi | Projects',
      description: 'mrzsomi projektjei, amelyeken diákként kódolva, építve és kísérletezve tanulok.',
      nav: ['Rólam', 'Eszközök', 'Projektek', 'Napló', 'Kapcsolat'],
      tag: 'Archívum',
      titleHtml: 'Válogatott projektek',
      lede: 'Amin keresztül tanulok.',
      footer: '© 2026 mrzsomi',
      loading: 'Projektek betöltése…',
      error: 'Nem sikerült betölteni a projekteket.',
      filterAll: 'Összes',
      note: 'Bővebben',
      status: { completed: 'Elkészült', 'in-progress': 'Folyamatban', ongoing: 'Alakul' },
      tags: { arduino: 'Arduino', cnc: 'CNC', motion: 'Mozgatás', pcb: 'NYÁK', diy: 'Saját építés', workshop: 'Műhely', esp32: 'ESP32', iot: 'IoT', web: 'Web', firmware: 'Firmware', java: 'Java', minecraft: 'Minecraft', backend: 'Backend', infra: 'Infrastruktúra', 'self-hosted': 'Önüzemelt', prototype: 'Prototípus', easyeda: 'EasyEDA', portfolio: 'Portfólió', game: 'Játék', 'github-pages': 'GitHub Pages', monitoring: 'Monitorozás', 'github-actions': 'GitHub Actions' },
      links: { github: 'GitHub', web: 'Weboldal', discord: 'Discord', documentation: 'Dokumentáció', 'live-demo': 'Élő demó' },
      ariaLanguage: 'Nyelv váltása',
      ariaTheme: 'Téma váltása',
      themeLight: 'világos',
      themeDark: 'sötét'
    }
  };

  function applyPageCopy() {
    const copy = pageCopy[language];
    document.documentElement.lang = language;
    document.getElementById('page-title').textContent = copy.title;
    document.getElementById('page-description').content = copy.description;
    ['about', 'skills', 'projects', 'activity', 'contact'].forEach((key, index) => {
      document.getElementById(`nav-${key}`).textContent = copy.nav[index];
    });
    document.getElementById('archive-title').innerHTML = copy.titleHtml;
    document.getElementById('archive-lede').textContent = copy.lede;
    document.getElementById('footer-text').textContent = copy.footer;
    document.getElementById('lang-toggle').setAttribute('aria-label', language === 'hu' ? copy.ariaLanguage : 'Switch language');
    document.getElementById('theme-toggle').setAttribute('aria-label', language === 'hu' ? copy.ariaTheme : 'Toggle theme');
  }

  const themeColorMeta = document.getElementById('theme-color-meta');
  function syncThemeColor() {
    if (themeColorMeta) themeColorMeta.content = document.documentElement.dataset.theme === 'dark' ? '#0c0c0c' : '#f4f4f1';
  }
  syncThemeColor();

  themeButton.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('theme', next);
    syncThemeColor();
    themeButton.textContent = next === 'dark' ? pageCopy[language].themeLight : pageCopy[language].themeDark;
  });
  languageButton.addEventListener('click', () => {
    language = language === 'en' ? 'hu' : 'en';
    localStorage.setItem('lang', language);
    load();
  });

  function render(tag = 'all') {
    const visible = tag === 'all' ? projects : projects.filter(project => project.tags.includes(tag));
    const copy = pageCopy[language];
    grid.innerHTML = visible.map((project, index) => `
      <article class="archive-row">
        <span class="archive-row-index">${String(index + 1).padStart(2, '0')}</span>
        <div class="archive-row-main">
          <div class="archive-row-meta"><span>${copy.status[project.status] || project.status || ''}</span><span>${copy.tags[project.tags[0]] || project.tags[0] || ''}</span></div>
          <h2>${project.title}</h2>
          <p>${project.short}</p>
          <details><summary>${copy.note}</summary><p>${project.full || project.short}</p></details>
          <div class="archive-links">${Object.entries(project.links || {}).filter(([, url]) => url).map(([name, url]) => `<a href="${url}" target="_blank" rel="noopener">${copy.links[name] || name}</a>`).join('')}</div>
        </div>
      </article>`).join('');
  }

  function buildFilters() {
    const tags = ['all', ...new Set(projects.flatMap(project => project.tags || []))];
    const copy = pageCopy[language];
    filters.innerHTML = tags.map(tag => `<button class="filter-chip${tag === 'all' ? ' active' : ''}" data-tag="${tag}">${tag === 'all' ? copy.filterAll : copy.tags[tag] || tag}</button>`).join('');
    filters.onclick = event => {
      const button = event.target.closest('button');
      if (!button) return;
      filters.querySelectorAll('button').forEach(item => item.classList.remove('active'));
      button.classList.add('active');
      render(button.dataset.tag);
    };
  }

  async function load() {
    applyPageCopy();
    const response = await fetch(`projects.${language}.json`);
    projects = await response.json();
    const copy = pageCopy[language];
    languageButton.textContent = language.toUpperCase();
    themeButton.textContent = document.documentElement.dataset.theme === 'dark' ? copy.themeLight : copy.themeDark;
    buildFilters();
    render();
  }
  load().catch(() => { grid.innerHTML = `<p class="loader">${pageCopy[language].error}</p>`; });
})();
