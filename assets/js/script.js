(function() {
  // ── i18n ──
  const translations = {
    en: {
      about_tag: "Hello, I'm Mr. Zsomi",
      hero_title: 'I build <span class="accent-text">embedded systems</span> and the tools around them.',
      hero_paragraph: "Firmware, PCB design, RF experiments, and infrastructure — based in Hungary. I work with microcontrollers, write code in C/C++, Python, Java and JavaScript, and enjoy creating things that actually work.",
      stat1: '<strong>30+</strong> projects shipped',
      stat2: '<strong>Embedded · Web · Infra</strong>',
      stat3: '<strong>Hungary</strong>',
      view_projects: "View projects",
      get_in_touch: "Get in touch",
      name_origin: "The nickname started in Minecraft, where I first called myself \"sajtoszsömlé\" (cheese bun). Over time it shortened to \"mrzsomi\" (Mr. Zsömi). It's a nod to the Hungarian word \"zsömle\" (a type of bun), not a reference to the name Zsombor.",
      skills_tag: "Expertise",
      skills_title: "Skills & tools",
      hardware_title: "Hardware",
      software_title: "Software",
      engineering_title: "Engineering",
      skills_hardware: [
        "ESP32 / ATmega328",
        "PCB Design (EasyEDA)",
        "3D Printing (Creality)",
        "Soldering & Rework",
        "Home Server (Proxmox)"
      ],
      skills_software: [
        "Embedded C/C++",
        "Java / Kotlin",
        "Python / JavaScript",
        "OTA / Async Servers",
        "ISR State Machines"
      ],
      skills_engineering: [
        "RF Debugging & Analysis",
        "Cloudflare / Proxmox",
        "IntelliJ / VSCodium",
        "Figma (UI/UX)",
        "Git / CI/CD"
      ],
      filter_all: "All",
      projects_tag: "Portfolio",
      projects_title: "Selected projects",
      activity_tag: "Live",
      activity_title: "Recent GitHub activity",
      contact_tag: "Let's talk",
      contact_title: "Contact",
      form_name: "Name",
      form_name_placeholder: "Your name",
      form_subject: "Subject",
      form_subject_placeholder: "What's this about?",
      form_email: "Email",
      form_email_placeholder: "you@example.com",
      form_message: "Message",
      form_message_placeholder: "Your message…",
      form_submit: "Send message",
      footer_text: "REV_2026.06 · MRZSOMI.TOP",
      available: "Available",
      nav_about: "About",
      nav_skills: "Skills",
      nav_projects: "Projects",
      nav_activity: "Activity",
      nav_contact: "Contact",
      loading_projects: "Loading projects…",
      no_projects: "No projects match this filter."
    },
    hu: {
      about_tag: "Üdv, Mr. Zsomi vagyok",
      hero_title: '<span class="accent-text">Beágyazott rendszereket</span> és a hozzájuk tartozó eszközöket építek.',
      hero_paragraph: "Firmware, PCB tervezés, RF kísérletek és infrastruktúra — Magyarországról. Mikrokontrollerekkel dolgozom, C/C++, Python, Java és JavaScript nyelveken írok kódot, és szeretek működő dolgokat létrehozni.",
      stat1: '<strong>30+</strong> projekt teljesítve',
      stat2: '<strong>Embedded · Web · Infra</strong>',
      stat3: '<strong>Magyarország</strong>',
      view_projects: "Projektek",
      get_in_touch: "Kapcsolat",
      name_origin: "A név a Minecraftban született: először \"sajtoszsömlé\"-nek neveztem magam, ami aztán lerövidült \"mrzsomi\"-ra (Mr. Zsömi). A név a zsömlére (péksütemény) utal, nem a Zsombor névre.",
      skills_tag: "Szakértelem",
      skills_title: "Készségek & eszközök",
      hardware_title: "Hardver",
      software_title: "Szoftver",
      engineering_title: "Mérnökség",
      skills_hardware: [
        "ESP32 / ATmega328",
        "PCB tervezés (EasyEDA)",
        "3D nyomtatás (Creality)",
        "Forrasztás & újraöntés",
        "Otthoni szerver (Proxmox)"
      ],
      skills_software: [
        "Beágyazott C/C++",
        "Java / Kotlin",
        "Python / JavaScript",
        "OTA / Async szerverek",
        "ISR állapotgépek"
      ],
      skills_engineering: [
        "RF hibakeresés & elemzés",
        "Cloudflare / Proxmox",
        "IntelliJ / VSCodium",
        "Figma (UI/UX)",
        "Git / CI/CD"
      ],
      filter_all: "Összes",
      projects_tag: "Portfólió",
      projects_title: "Válogatott projektek",
      activity_tag: "Élő",
      activity_title: "Legutóbbi GitHub aktivitás",
      contact_tag: "Beszéljünk",
      contact_title: "Kapcsolat",
      form_name: "Név",
      form_name_placeholder: "A neved",
      form_subject: "Tárgy",
      form_subject_placeholder: "Miről van szó?",
      form_email: "Email",
      form_email_placeholder: "te@gmail.com",
      form_message: "Üzenet",
      form_message_placeholder: "Üzeneted…",
      form_submit: "Küldés",
      footer_text: "REV_2026.06 · MRZSOMI.TOP",
      available: "Elérhető",
      nav_about: "Rólam",
      nav_skills: "Készségek",
      nav_projects: "Projektek",
      nav_activity: "Aktivitás",
      nav_contact: "Kapcsolat",
      loading_projects: "Projektek betöltése…",
      no_projects: "Nincs találat erre a szűrőre."
    }
  };

  let currentLang = localStorage.getItem('lang') || 'en';
  const langToggle = document.getElementById('lang-toggle');

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    langToggle.textContent = lang === 'hu' ? 'HU' : 'EN';
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (t[key]) el.innerHTML = t[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key]) el.placeholder = t[key];
    });
    document.querySelectorAll('[data-i18n-nav]').forEach(el => {
      const key = el.getAttribute('data-i18n-nav');
      if (t['nav_'+key]) el.textContent = t['nav_'+key];
    });
    renderSkills();
    loadProjects();
  }

  // ── Particles ──
  const canvas = document.getElementById('particle-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  window.addEventListener('resize', resizeCanvas); resizeCanvas();
  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.2; this.vy = (Math.random() - 0.5) * 0.2;
      this.radius = Math.random() * 1.5 + 0.5;
    }
    update() {
      this.x += this.vx; this.y += this.vy;
      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }
    draw() {
      ctx.beginPath(); ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#ff8a3d';
      ctx.fill();
    }
  }
  for (let i = 0; i < 50; i++) particles.push(new Particle());
  function animateParticles() { ctx.clearRect(0, 0, canvas.width, canvas.height); particles.forEach(p => { p.update(); p.draw(); }); requestAnimationFrame(animateParticles); }
  animateParticles();

  // ── Clock ──
  const clockEl = document.getElementById('live-clock');
  function tick() { const now = new Date(); clockEl.textContent = now.toLocaleTimeString('en-GB', { hour:'2-digit', minute:'2-digit' }); }
  tick(); setInterval(tick, 1000);

  // ── Theme ──
  const html = document.documentElement;
  const themeBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const savedTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', savedTheme);
  themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
  themeBtn.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next); localStorage.setItem('theme', next);
    themeIcon.textContent = next === 'dark' ? '☀️' : '🌙';
  });

  // ── Language toggle ──
  langToggle.addEventListener('click', () => {
    applyLanguage(currentLang === 'en' ? 'hu' : 'en');
  });

  // ── Skills rendering ──
  const skillsContainer = document.getElementById('skills-container');
  const skillPercentages = {
    hardware: [95, 85, 80, 90, 75],
    software: [90, 85, 80, 85, 88],
    engineering: [70, 80, 95, 60, 75]
  };
  function renderSkills() {
    const t = translations[currentLang];
    const categories = [
      { title: t.hardware_title, items: t.skills_hardware, percents: skillPercentages.hardware },
      { title: t.software_title, items: t.skills_software, percents: skillPercentages.software },
      { title: t.engineering_title, items: t.skills_engineering, percents: skillPercentages.engineering }
    ];
    skillsContainer.innerHTML = categories.map(cat => `
      <div class="skill-card">
        <h3>${cat.title}</h3>
        <ul>
          ${cat.items.map((item, i) => `
            <li>${item} <span class="progress-bar"><span class="progress-fill" style="width: ${cat.percents[i]}%"></span></span></li>
          `).join('')}
        </ul>
      </div>
    `).join('');
  }

  // ── Projects ──
  const listContainer = document.getElementById('project-list');
  const detailPanel = document.getElementById('project-detail');
  const filterBar = document.getElementById('filter-bar');
  let allProjects = [];
  let currentFilter = 'all';
  let activeProjectId = null;

  async function loadProjects() {
    try {
      const res = await fetch(`projects.${currentLang}.json`);
      if (!res.ok) throw new Error('Failed to load projects');
      allProjects = await res.json();
      buildFilters();
      renderProjects();
    } catch (err) {
      listContainer.innerHTML = `<div class="loader">${translations[currentLang].loading_projects}</div>`;
    }
  }

  function buildFilters() {
    filterBar.innerHTML = `<button class="filter-chip active" data-filter="all" data-i18n="filter_all">${translations[currentLang].filter_all}</button>`;
    const tags = new Set();
    allProjects.forEach(p => p.tags?.forEach(t => tags.add(t)));
    Array.from(tags).sort().forEach(tag => {
      const btn = document.createElement('button');
      btn.className = 'filter-chip'; btn.textContent = tag; btn.setAttribute('data-filter', tag);
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-chip').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = tag; renderProjects();
      });
      filterBar.appendChild(btn);
    });
    document.querySelector('[data-filter="all"]').addEventListener('click', () => {
      document.querySelectorAll('.filter-chip').forEach(b => b.classList.remove('active'));
      document.querySelector('[data-filter="all"]').classList.add('active');
      currentFilter = 'all'; renderProjects();
    });
  }

  function renderProjects() {
    const filtered = currentFilter === 'all' ? allProjects : allProjects.filter(p => p.tags?.includes(currentFilter));
    listContainer.innerHTML = '';
    if (!filtered.length) {
      listContainer.innerHTML = `<div class="loader">${translations[currentLang].no_projects}</div>`;
      detailPanel.classList.remove('visible');
      return;
    }
    filtered.forEach(project => {
      const item = document.createElement('div');
      item.className = 'project-item' + (project.id === activeProjectId ? ' active' : '');
      item.setAttribute('data-id', project.id);
      const tagsHtml = (project.tags || []).map(t => `<span class="tag">${t}</span>`).join('');
      const statusHtml = project.status ? `<span class="status">${project.status}</span>` : '';
      item.innerHTML = `
        <div class="project-info">
          <h3>${project.title}</h3>
          <p>${project.short}</p>
          <div class="project-meta">${statusHtml}${tagsHtml}</div>
        </div>
        <span class="project-arrow">→</span>
      `;
      item.addEventListener('click', () => {
        document.querySelectorAll('.project-item').forEach(el => el.classList.remove('active'));
        item.classList.add('active');
        activeProjectId = project.id;
        showDetail(project);
      });
      listContainer.appendChild(item);
    });
    if (!activeProjectId && filtered.length) { showDetail(filtered[0]); listContainer.querySelector('.project-item')?.classList.add('active'); activeProjectId = filtered[0].id; }
    else if (activeProjectId && filtered.some(p => p.id === activeProjectId)) {
      const active = filtered.find(p => p.id === activeProjectId);
      showDetail(active);
      listContainer.querySelector(`[data-id="${activeProjectId}"]`)?.classList.add('active');
    } else { showDetail(filtered[0]); listContainer.querySelector('.project-item')?.classList.add('active'); activeProjectId = filtered[0].id; }
  }

  function showDetail(project) {
    let html = project.full || project.short || '';
    if (project.github) {
      html += `<br><a class="github-link-btn" href="${project.github}" target="_blank" rel="noopener">🔗 GitHub →</a>`;
    }
    detailPanel.innerHTML = html;
    detailPanel.classList.add('visible');
  }

  // ── GitHub Activity ──
  async function fetchGitHubActivity() {
    try {
      const res = await fetch('https://api.github.com/users/SajtosZsomle/events/public');
      if (!res.ok) throw new Error('limit');
      const events = await res.json();
      renderActivity(events.slice(0, 6));
    } catch { document.getElementById('activity-feed').innerHTML = '<div class="loader">No recent activity.</div>'; }
  }
  function renderActivity(events) {
    const feed = document.getElementById('activity-feed');
    feed.innerHTML = '';
    if (!events.length) { feed.innerHTML = '<div class="loader">No recent public activity.</div>'; return; }
    events.forEach(e => {
      const item = document.createElement('div'); item.className = 'activity-item';
      const avatar = e.actor?.avatar_url || '';
      const repo = e.repo?.name || '';
      const type = e.type?.replace('Event','') || '';
      const date = new Date(e.created_at).toLocaleDateString('en-US', { month:'short', day:'numeric' });
      let action = '';
      if (e.type === 'PushEvent') action = `Pushed ${e.payload.commits?.length || 0} commits`;
      else if (e.type === 'CreateEvent') action = `Created ${e.payload.ref_type}`;
      else if (e.type === 'IssuesEvent') action = `${e.payload.action} issue`;
      else if (e.type === 'PullRequestEvent') action = `${e.payload.action} PR`;
      else if (e.type === 'WatchEvent') action = 'Starred';
      else action = e.type;
      item.innerHTML = `<img class="activity-avatar" src="${avatar}" onerror="this.style.display='none'"><div class="activity-content"><p><strong>${repo}</strong>: ${action}</p><small>${type} · ${date}</small></div>`;
      feed.appendChild(item);
    });
  }
  fetchGitHubActivity();

  // ── Contact form ──
  const form = document.getElementById('contact-form');
  const statusEl = document.getElementById('form-status');
  const submitBtn = document.getElementById('submit-btn');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.disabled = true; submitBtn.textContent = currentLang === 'hu' ? 'Küldés…' : 'Sending…';
    statusEl.textContent = ''; statusEl.className = 'form-status';
    try {
      const res = await fetch(form.action, { method:'POST', body: new FormData(form), headers: {'Accept':'application/json'} });
      if (res.ok) {
        statusEl.textContent = currentLang === 'hu' ? '✓ Üzenet elküldve!' : '✓ Message sent!';
        statusEl.className = 'form-status success'; form.reset();
      } else {
        const data = await res.json().catch(()=>({}));
        statusEl.textContent = '⚠ ' + (data.error || 'Something went wrong.');
        statusEl.className = 'form-status error';
      }
    } catch { statusEl.textContent = '⚠ Network error.'; statusEl.className = 'form-status error'; }
    finally { submitBtn.disabled = false; submitBtn.textContent = translations[currentLang].form_submit; }
  });

  // ── Smooth scroll + active nav ──
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(s => { if (window.pageYOffset >= s.offsetTop - 120) current = s.id; });
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href') === `#${current}`) a.classList.add('active');
    });
  });
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top, behavior:'smooth' });
      }
    });
  });

  // ── Init ──
  applyLanguage(currentLang);
})();