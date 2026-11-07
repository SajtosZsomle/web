(function () {
  const grid = document.getElementById('archive-grid');
  const filters = document.getElementById('archive-filters');
  const themeButton = document.getElementById('theme-toggle');
  const languageButton = document.getElementById('lang-toggle');
  let projects = [];
  let language = localStorage.getItem('lang') || 'en';
  const pageCopy = {
    en: {
      title: 'Projects | mrzsomi',
      description: 'A curated archive of electronics, firmware, web, and infrastructure projects by mrzsomi.',
      nav: ['About', 'Toolkit', 'Projects', 'Contact'],
      tag: 'Project archive',
      titleHtml: 'Things I build<br /><span class="accent-text">and learn from.</span>',
      lede: 'Hardware, code, servers, and the experiments between them.',
      footer: '© 2026 mrzsomi. Budapest / online',
      loading: 'Loading projects…',
      error: 'Projects could not be loaded.',
      filterAll: 'All',
      note: 'Read the note',
      status: { completed: 'Completed', 'in-progress': 'In progress', ongoing: 'Ongoing' },
      tags: { arduino: 'Arduino', cnc: 'CNC', motion: 'Motion', pcb: 'PCB', diy: 'DIY', workshop: 'Workshop', esp32: 'ESP32', iot: 'IoT', web: 'Web', firmware: 'Firmware', java: 'Java', minecraft: 'Minecraft', backend: 'Backend', infra: 'Infrastructure', 'self-hosted': 'Self-hosted', prototype: 'Prototype', easyeda: 'EasyEDA', portfolio: 'Portfolio', game: 'Game', 'github-pages': 'GitHub Pages', monitoring: 'Monitoring', 'github-actions': 'GitHub Actions' },
      links: { github: 'GitHub', web: 'Website', discord: 'Discord', documentation: 'Docs', 'live-demo': 'Live demo' }
    },
    hu: {
      title: 'Projektek | mrzsomi',
      description: 'Elektronikai, firmware-, webes és otthoni szerveres projektek válogatása.',
      nav: ['Rólam', 'Eszköztár', 'Projektek', 'Kapcsolat'],
      tag: 'Projektjeim',
      titleHtml: 'Amiket építek<br /><span class="accent-text">és amiből tanulok.</span>',
      lede: 'Hardver, kód, szerverek és a közben felmerülő kísérletek.',
      footer: '© 2026 mrzsomi. Budapest / online',
      loading: 'Projektek betöltése…',
      error: 'Nem sikerült betölteni a projekteket.',
      filterAll: 'Összes',
      note: 'Bővebben',
      status: { completed: 'Kész', 'in-progress': 'Folyamatban', ongoing: 'Folyamatosan alakul' },
      tags: { arduino: 'Arduino', cnc: 'CNC', motion: 'Mozgatás', pcb: 'NYÁK', diy: 'DIY', workshop: 'Műhely', esp32: 'ESP32', iot: 'IoT', web: 'Web', firmware: 'Firmware', java: 'Java', minecraft: 'Minecraft', backend: 'Backend', infra: 'Infrastruktúra', 'self-hosted': 'Önüzemelt', prototype: 'Prototípus', easyeda: 'EasyEDA', portfolio: 'Portfólió', game: 'Játék', 'github-pages': 'GitHub Pages', monitoring: 'Monitorozás', 'github-actions': 'GitHub Actions' },
      links: { github: 'GitHub', web: 'Weboldal', discord: 'Discord', documentation: 'Leírás', 'live-demo': 'Élő oldal' }
    }
  };

  function applyPageCopy() {
    const copy = pageCopy[language];
    document.documentElement.lang = language;
    document.getElementById('page-title').textContent = copy.title;
    document.getElementById('page-description').content = copy.description;
    ['about', 'skills', 'projects', 'contact'].forEach((key, index) => {
      document.getElementById(`nav-${key}`).textContent = copy.nav[index];
    });
    document.getElementById('archive-tag').textContent = copy.tag;
    document.getElementById('archive-title').innerHTML = copy.titleHtml;
    document.getElementById('archive-lede').textContent = copy.lede;
    document.getElementById('footer-text').textContent = copy.footer;
  }

  themeButton.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('theme', next);
  });
  languageButton.addEventListener('click', () => {
    language = language === 'en' ? 'hu' : 'en';
    localStorage.setItem('lang', language);
    load();
  });

  function render(tag = 'all') {
    const visible = tag === 'all' ? projects : projects.filter(project => project.tags.includes(tag));
    const copy = pageCopy[language];
    grid.innerHTML = visible.map(project => `
      <article class="archive-card">
        <div class="archive-card-top"><span>${copy.status[project.status] || project.status || ''}</span><span>${copy.tags[project.tags[0]] || project.tags[0] || ''}</span></div>
        <h2>${project.title}</h2>
        <p>${project.short}</p>
        <details><summary>${copy.note}</summary><p>${project.full || project.short}</p></details>
        <div class="archive-links">${Object.entries(project.links || {}).filter(([, url]) => url).map(([name, url]) => `<a href="${url}" target="_blank" rel="noopener">${copy.links[name] || name}</a>`).join('')}</div>
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
    languageButton.textContent = language.toUpperCase();
    buildFilters();
    render();
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.archive-card').forEach((card, index) => {
        card.style.setProperty('--delay', `${index * 55}ms`);
        card.classList.add('reveal', 'is-visible');
      });
    }
  }
  load().catch(() => { grid.innerHTML = `<p class="loader">${pageCopy[language].error}</p>`; });
})();
