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
      footer: '© 2026 mrzsomi · Budapest / online',
      loading: 'Loading projects...',
      error: 'Projects could not be loaded.'
    },
    hu: {
      title: 'Projektek | mrzsomi',
      description: 'Elektronikai, firmware-, webes és otthoni szerveres projektek válogatása.',
      nav: ['Rólam', 'Eszköztár', 'Projektek', 'Kapcsolat'],
      tag: 'Projektjeim',
      titleHtml: 'Amiket építek<br /><span class="accent-text">és amiből tanulok.</span>',
      lede: 'Hardver, kód, szerverek és a közben felmerülő kísérletek.',
      footer: '© 2026 mrzsomi · Budapest / online',
      loading: 'Projektek betöltése…',
      error: 'Nem sikerült betölteni a projekteket.'
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

  function iconFor(project) {
    if (project.tags.includes('infra')) return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v4H4zM4 11h16v4H4zM4 17h16v2H4z"/><path d="M7 7h.01M7 13h.01M7 18h.01"/></svg>';
    if (project.tags.some(tag => ['web', 'java', 'backend'].includes(tag))) return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/></svg>';
    return '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="7" cy="7" r="2"/><circle cx="17" cy="17" r="2"/><path d="M8.5 8.5 15.5 15.5"/></svg>';
  }

  function render(tag = 'all') {
    const visible = tag === 'all' ? projects : projects.filter(project => project.tags.includes(tag));
    const statusLabels = language === 'hu'
      ? { completed: 'Kész', 'in-progress': 'Készül', ongoing: 'Folyamatban' }
      : { completed: 'Completed', 'in-progress': 'In progress', ongoing: 'Ongoing' };
    const copy = language === 'hu'
      ? { note: 'Bővebben', project: 'projekt', build: 'munka' }
      : { note: 'Read the note', project: 'project', build: 'build' };
    grid.innerHTML = visible.map(project => `
      <article class="archive-card">
        <div class="archive-icon" aria-hidden="true">${iconFor(project)}</div>
        <div class="archive-card-top"><span>${statusLabels[project.status] || project.status || copy.project}</span><span>${project.tags[0] || copy.build}</span></div>
        <h2>${project.title}</h2>
        <p>${project.short}</p>
        <details><summary>${copy.note}</summary><p>${project.full || project.short}</p></details>
        <div class="archive-links">${Object.entries(project.links || {}).filter(([, url]) => url).map(([name, url]) => `<a href="${url}" target="_blank" rel="noopener">${name} ↗</a>`).join('')}</div>
      </article>`).join('');
  }

  function buildFilters() {
    const tags = ['all', ...new Set(projects.flatMap(project => project.tags || []))];
    filters.innerHTML = tags.map(tag => `<button class="filter-chip${tag === 'all' ? ' active' : ''}" data-tag="${tag}">${tag}</button>`).join('');
    filters.addEventListener('click', event => {
      const button = event.target.closest('button');
      if (!button) return;
      filters.querySelectorAll('button').forEach(item => item.classList.remove('active'));
      button.classList.add('active');
      render(button.dataset.tag);
    });
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
