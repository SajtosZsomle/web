(function () {
  const grid = document.getElementById('archive-grid');
  const filters = document.getElementById('archive-filters');
  const themeButton = document.getElementById('theme-toggle');
  const languageButton = document.getElementById('lang-toggle');
  let projects = [];
  let language = localStorage.getItem('lang') || 'en';

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
    grid.innerHTML = visible.map(project => `
      <article class="archive-card">
        <div class="archive-icon" aria-hidden="true">${iconFor(project)}</div>
        <div class="archive-card-top"><span>${project.status || 'project'}</span><span>${project.tags[0] || 'build'}</span></div>
        <h2>${project.title}</h2>
        <p>${project.short}</p>
        <details><summary>Read the note</summary><p>${project.full || project.short}</p></details>
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
  load().catch(() => { grid.innerHTML = '<p class="loader">Projects could not be loaded.</p>'; });
})();
