(function() {
  // ── i18n ──
  const translations = {
    en: {
      about_tag: "Hi, I’m mrzsomi",
      build_notes: "A few current interests",
      hero_title: 'I’m into <span class="accent-text">a little bit of everything.</span>',
      hero_paragraph: "Electronics is one of my main interests, but I also like software, websites, games, and picking up random new hobbies. I’m a Hungarian student, and this is where I share some of the things I build and try.",
      view_projects: "View projects",
      get_in_touch: "Get in touch",
      name_origin: "The name started with an old Minecraft username: sajtoszsömle, meaning cheese bun in Hungarian. I used it for a long time before shortening it to mrzsomi (Mr. Bun). It is a small reminder of where the name came from, even though the things I am interested in have changed quite a bit since then.",
      skills_tag: "A few things I use",
      skills_title: "Things I enjoy working with",
      hardware_title: "Hardware",
      software_title: "Software",
      engineering_title: "Projects & practice",
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
      projects_tag: "Selected work",
      projects_title: "Things I’ve made",
      activity_tag: "What I’m up to",
      activity_title: "Recent bits and pieces",
      contact_tag: "Have a project in mind?",
      contact_title: "Let’s talk",
      form_name: "Name",
      form_name_placeholder: "Your name",
      form_subject: "Subject",
      form_subject_placeholder: "What's this about?",
      form_email: "Email",
      form_email_placeholder: "you@example.com",
      form_message: "Message",
      form_message_placeholder: "Your message…",
      form_submit: "Send message",
      footer_text: "© 2026 mrzsomi · Budapest / online",
      available: "Available",
      nav_about: "About",
      nav_skills: "Skills",
      nav_projects: "Projects",
      nav_activity: "Activity",
      nav_contact: "Contact",
      loading_projects: "Loading projects…",
      error_projects: "Failed to load projects.",
      no_projects: "No projects match this filter.",
      link_github: "GitHub",
      link_web: "Website",
      link_discord: "Discord",
      link_documentation: "Docs",
      link_live_demo: "Live Demo",
      no_activity: "No recent public activity.",
      view_github: "View GitHub profile"
    },
    hu: {
      about_tag: "Szia, mrzsomi vagyok",
      build_notes: "Néhány aktuális érdeklődés",
      hero_title: '<span class="accent-text">Egy kicsit</span> minden érdekel.',
      hero_paragraph: "Az elektronika az egyik fő érdeklődési területem, de a szoftverek, weboldalak, játékok és az új hobbik kipróbálása is érdekel. Magyar diákként ezen az oldalon néhány dolgot mutatok meg, amit megépítek és kipróbálok.",
      get_in_touch: "Kapcsolatfelvétel",
      name_origin: "A név egy régi Minecraft-os felhasználónévből indult: sajtoszsomle0821, vagyis sajtos zsömle. Sokáig ezt használtam (valahol még most is), később pedig mrzsomi-ra (Mr. Zsömi) rövidítettem. Jó emlékeztető arra, honnan jött a név, még akkor is, ha azóta sok minden más is elkezdett érdekelni.",
      skills_tag: "Amikkel foglalkozom",
      skills_title: "Amit szívesen használok",
      hardware_title: "Hardver",
      software_title: "Szoftver",
      engineering_title: "Projektek és gyakorlat",
      skills_hardware: [
        "ESP32 / ATmega328",
        "PCB tervezés (EasyEDA)",
        "3D nyomtatás (Creality)",
        "Forrasztás és SMD javítás (rework)",
        "Otthoni szerver (Proxmox)"
      ],
      skills_software: [
        "Beágyazott C/C++",
        "Java / Kotlin",
        "Python / JavaScript",
        "OTA frissítések és aszinkron szerverek",
        "ISR alapú állapotgépek"
      ],
      skills_engineering: [
        "RF diagnosztika és mérés",
        "Cloudflare / Proxmox",
        "IntelliJ / VSCodium",
        "Figma (UI/UX)",
        "Git és CI/CD folyamatok"
      ],
      filter_all: "Összes",
      projects_tag: "Válogatott munkák",
      projects_title: "Amit készítettem",
      activity_tag: "Amin most dolgozom",
      activity_title: "Friss dolgok és kísérletek",
      contact_tag: "Van egy ötleted?",
      contact_title: "Beszéljünk",
      form_name: "Név",
      form_name_placeholder: "A neved",
      form_subject: "Tárgy",
      form_subject_placeholder: "Miről van szó?",
      form_email: "Email",
      form_email_placeholder: "te@gmail.com",
      form_message: "Üzenet",
      form_message_placeholder: "Üzeneted…",
      form_submit: "Küldés",
      footer_text: "© 2026 mrzsomi · Budapest / online",
      available: "Elérhető",
      nav_about: "Rólam",
      nav_skills: "Készségek",
      nav_projects: "Projektek",
      nav_activity: "Aktivitás",
      nav_contact: "Kapcsolat",
      loading_projects: "Projektek betöltése…",
      error_projects: "Hiba történt a projektek betöltése során.",
      no_projects: "Nincs a szűrésnek megfelelő projekt.",
      link_github: "GitHub",
      link_web: "Weboldal",
      link_discord: "Discord",
      link_documentation: "Dokumentáció",
      link_live_demo: "Élő bemutató",
      no_activity: "Nincs friss nyilvános aktivitás.",
      view_github: "GitHub-profil megnyitása"
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
    fetchGitHubActivity();
  }

  // ── Particles ──
  const canvas = document.getElementById('particle-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  window.addEventListener('resize', resizeCanvas); resizeCanvas();

  // Cache accent color to prevent layout thrashing (reflow) on every frame
  let accentColor = '#ff8a3d';
  function updateParticleColor() {
    accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#ff8a3d';
  }
  updateParticleColor();
  window.addEventListener('load', updateParticleColor);

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
      ctx.fillStyle = accentColor;
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
    updateParticleColor();
  });

  // ── Language toggle ──
  langToggle.addEventListener('click', () => {
    applyLanguage(currentLang === 'en' ? 'hu' : 'en');
  });

  // ── Skills rendering ──
  const skillsContainer = document.getElementById('skills-container');
  const skillPercentages = {
    // Hardware
    "ESP32 / ATmega328": 76,
    "PCB Design (EasyEDA)": 65,
    "3D Printing (Creality)": 80,
    "Soldering & Rework": 72,
    "Home Server (Proxmox)": 82,

    // Software
    "Embedded C/C++": 70,
    "Java / Kotlin": 77,
    "Python / JavaScript": 88,
    "OTA / Async Servers": 74,
    "ISR State Machines": 65,

    // Projects and practice
    "RF Debugging & Analysis": 64,
    "Cloudflare / Proxmox": 82,
    "IntelliJ / VSCodium": 85,
    "Figma (UI/UX)": 75,
    "Git / CI/CD": 85
  };
  function renderSkills() {
    const t = translations[currentLang];
    const en = translations.en;
    const categories = [
      { title: t.hardware_title, items: t.skills_hardware, enItems: en.skills_hardware },
      { title: t.software_title, items: t.skills_software, enItems: en.skills_software },
      { title: t.engineering_title, items: t.skills_engineering, enItems: en.skills_engineering }
    ];
    skillsContainer.innerHTML = categories.map(cat => {
      // Zip translated items with their English counterparts, look up their percentage, then sort descending
      const sortedSkills = cat.items.map((item, idx) => {
        const enName = cat.enItems[idx];
        const percent = skillPercentages[enName] || 0;
        return { name: item, percent };
      }).sort((a, b) => b.percent - a.percent);


      return `
        <div class="skill-card">
          <h3>${cat.title}</h3>
          <ul>
            ${sortedSkills.map(item => `
              <li>
                <div class="skill-info">
                  <span class="skill-name">${item.name}</span>
                  <span class="skill-percent">${item.percent}%</span>
                </div>
                <div class="progress-bar">
                  <div class="progress-fill" data-percent="${item.percent}" style="width: 0%"></div>
                </div>
              </li>
            `).join('')}
          </ul>
        </div>
      `;
    }).join('');

    // Trigger slide-in animation after rendering to allow CSS transitions to execute
    setTimeout(() => {
      document.querySelectorAll('.progress-fill').forEach(fill => {
        const pct = fill.getAttribute('data-percent');
        fill.style.width = pct + '%';
      });
    }, 100);
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
      listContainer.innerHTML = `<div class="loader" style="color: var(--accent);">${translations[currentLang].error_projects || 'Failed to load projects.'}</div>`;
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
      const statusLabels = { completed: currentLang === "hu" ? "Elkészült" : "Completed", "in-progress": currentLang === "hu" ? "Folyamatban" : "In progress", ongoing: currentLang === "hu" ? "Folyamatosan alakul" : "Ongoing" };
      const statusHtml = project.status ? `<span class="status">${statusLabels[project.status] || project.status}</span>` : '';
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
    
    // Render links if available
    const links = project.links || (project.github ? { github: project.github } : null);
    if (links) {
      const linkIcons = {
        github: { icon: '🐙', labelKey: 'link_github', color: '#666666', colorDark: '#a0a0a0', colorRgb: '102, 102, 102', colorRgbDark: '160, 160, 160' },
        web: { icon: '🌐', labelKey: 'link_web', color: '#4285f4', colorRgb: '66, 133, 244' },
        discord: { icon: '💬', labelKey: 'link_discord', color: '#5865f2', colorRgb: '88, 101, 242' },
        documentation: { icon: '📚', labelKey: 'link_documentation', color: '#0969da', colorRgb: '9, 105, 218' },
        'live-demo': { icon: '🎯', labelKey: 'link_live_demo', color: '#22c55e', colorRgb: '34, 197, 94' }
      };
      
      const activeLinks = Object.entries(links).filter(([key, value]) => value !== false && value !== null);
      if (activeLinks.length > 0) {
        html += '<div class="project-links">';
        activeLinks.forEach(([key, url]) => {
          const linkInfo = linkIcons[key];
          if (linkInfo) {
            const isDarkTheme = document.documentElement.getAttribute('data-theme') === 'dark';
            const color = key === 'github' && isDarkTheme ? linkInfo.colorDark : linkInfo.color;
            const colorRgb = key === 'github' && isDarkTheme ? linkInfo.colorRgbDark : linkInfo.colorRgb;
            const label = translations[currentLang][linkInfo.labelKey] || linkInfo.labelKey;
            html += `<a href="${url}" target="_blank" rel="noopener" class="project-link" data-platform="${key}" style="--platform-color: ${color}; --platform-color-rgb: ${colorRgb};" title="${label}">
              <span class="link-icon">${linkInfo.icon}</span>
              <span class="link-label">${label}</span>
            </a>`;
          }
        });
        html += '</div>';
      }
    }
    
    detailPanel.innerHTML = html;
    detailPanel.classList.add('visible');
  }

  // ── GitHub Activity ──
  async function fetchGitHubActivity() {
    try {
      const res = await fetch("https://api.github.com/users/SajtosZsomle/events/public");
      if (!res.ok) throw new Error("limit");
      const events = await res.json();
      renderActivity(events.slice(0, 6));
    } catch {
      const t = translations[currentLang];
      document.getElementById("activity-feed").innerHTML = `<div class="loader">${t.no_activity} <a href="https://github.com/SajtosZsomle" target="_blank" rel="noopener">${t.view_github} ↗</a></div>`;
    }
  }
  function renderActivity(events) {
    const feed = document.getElementById("activity-feed");
    feed.innerHTML = "";
    if (!events.length) {
      const t = translations[currentLang];
      feed.innerHTML = `<div class="loader">${t.no_activity} <a href="https://github.com/SajtosZsomle" target="_blank" rel="noopener">${t.view_github} ↗</a></div>`;
      return;
    }
    events.forEach(e => {
      const item = document.createElement("div"); item.className = "activity-item";
      const avatar = e.actor?.avatar_url || "";
      const repo = e.repo?.name || "";
      const typeLabels = { PushEvent: currentLang === "hu" ? "Feltöltés" : "Push", CreateEvent: currentLang === "hu" ? "Létrehozás" : "Create", IssuesEvent: currentLang === "hu" ? "Issue" : "Issue", PullRequestEvent: currentLang === "hu" ? "Pull request" : "Pull request", WatchEvent: currentLang === "hu" ? "Csillagozás" : "Star" };
      const type = typeLabels[e.type] || e.type?.replace("Event", "") || "";
      let action = "";
      if (e.type === "PushEvent") action = currentLang === "hu" ? `feltöltés a(z) ${e.payload.ref?.replace("refs/heads/", "") || "main"} ágra` : `pushed to ${e.payload.ref?.replace("refs/heads/", "") || "main"}`;
      else if (e.type === "CreateEvent") action = currentLang === "hu" ? `${e.payload.ref_type} létrehozása` : `created ${e.payload.ref_type}`;
      else if (e.type === "IssuesEvent") action = currentLang === "hu" ? `${e.payload.action} issue` : `${e.payload.action} issue`;
      else if (e.type === "PullRequestEvent") action = currentLang === "hu" ? `${e.payload.action} pull request` : `${e.payload.action} pull request`;
      else if (e.type === "WatchEvent") action = currentLang === "hu" ? "csillagozta" : "starred";
      else action = e.type;
      item.innerHTML = `<img class="activity-avatar" src="${avatar}" alt=""><div class="activity-content"><p><strong>${repo}</strong>: ${action}</p><small>${type} · ${date}</small></div>`;
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
  const sections = Array.from(document.querySelectorAll('section[id]'));
  let sectionOffsets = [];

  function updateOffsets() {
    const scrollY = window.scrollY || window.pageYOffset;
    sectionOffsets = sections.map(s => ({
      id: s.id,
      top: s.getBoundingClientRect().top + scrollY
    }));
  }

  // Update offsets initially, on load, and on window resize
  window.addEventListener('resize', updateOffsets);
  window.addEventListener('load', updateOffsets);
  updateOffsets();

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || window.pageYOffset;
    let current = '';
    
    // Find the current active section using cached offsets to prevent layout thrashing
    for (let i = 0; i < sectionOffsets.length; i++) {
      if (scrollY >= sectionOffsets[i].top - 120) {
        current = sectionOffsets[i].id;
      }
    }

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
        const scrollY = window.scrollY || window.pageYOffset;
        const top = target.getBoundingClientRect().top + scrollY - 80;
        window.scrollTo({ top, behavior:'smooth' });
        window.location.hash = link.getAttribute('href').substring(1);
      }
    });
  });

  // Handle hash change (direct URL navigation)
  function updateNavFromHash() {
    const hash = window.location.hash.substring(1);
    if (hash) {
      const link = document.querySelector(`.nav-links a[href="#${hash}"]`);
      if (link) {
        document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
        link.classList.add('active');
        const target = document.querySelector(`#${hash}`);
        if (target) {
          const scrollY = window.scrollY || window.pageYOffset;
          const top = target.getBoundingClientRect().top + scrollY - 80;
          window.scrollTo({ top, behavior:'smooth' });
        }
      }
    }
  }

  window.addEventListener('hashchange', updateNavFromHash);
  
  // Initialize active nav on page load
  updateOffsets();
  if (window.location.hash) {
    setTimeout(updateNavFromHash, 100);
  } else {
    window.dispatchEvent(new Event('scroll'));
  }

  // ── Terminal animation ──
  const trmBody = document.getElementById('trm-body');
  const trmCursor = document.getElementById('trm-cursor');
  const TRM_MAX = 9;
  const trmLines = {
    en: [
      { type: "info", text: "Trying out a new idea..." },
      { type: "ok", text: "A small project is taking shape" },
      { type: "info", text: "Learning something new..." },
      { type: "ok", text: "Making progress" },
      { type: "val", text: "Electronics, code, and a bit of patience" },
      { type: "info", text: "Taking a break, then back to it" },
      { type: "ok", text: "Another little problem solved" },
      { type: "val", text: "Ideas saved for later" },
      { type: "info", text: "Looking for the next interesting thing..." },
      { type: "ok", text: "It works well enough for today" },
      { type: "val", text: "One step at a time" },
      { type: "info", text: "Trying a different approach..." },
      { type: "ok", text: "Something useful came out of it" },
      { type: "val", text: "A little tinkering never hurts" },
      { type: "info", text: "Saving notes for later..." },
      { type: "ok", text: "Back to the real world" },
      { type: "val", text: "Still curious" },
      { type: "info", text: "More to come..." },
      { type: "ok", text: "Done for now" },
      { type: "info", text: "See you around" }
    ],
    hu: [
      { type: "info", text: "Kipróbálok egy új ötletet..." },
      { type: "ok", text: "Alakul egy új kis projekt" },
      { type: "info", text: "Tanulok valami újat..." },
      { type: "ok", text: "Lassan haladok vele" },
      { type: "val", text: "Elektronika, kód és egy kis türelem" },
      { type: "info", text: "Tartok egy kis szünetet" },
      { type: "ok", text: "Újabb apró probléma megoldva" },
      { type: "val", text: "Ötletek későbbre elmentve" },
      { type: "info", text: "Keresem a következő érdekes dolgot..." },
      { type: "ok", text: "Mára ennyi pont elég" },
      { type: "val", text: "Lépésről lépésre" },
      { type: "info", text: "Kipróbálok egy másik megközelítést..." },
      { type: "ok", text: "Valami hasznos azért született belőle" },
      { type: "val", text: "Egy kis barkácsolás még belefér" },
      { type: "info", text: "Jegyzeteket írok későbbre..." },
      { type: "ok", text: "Ideje visszatérni a valósághoz" },
      { type: "val", text: "Továbbra is érdekel" },
      { type: "info", text: "Folytatás később..." },
      { type: "ok", text: "Mára kész" },
      { type: "info", text: "Találkozunk még" }
    ]
  };
  let trmIdx = 0;
  let trmTimeout = null;
  const trmStart = Date.now();

  function addTrmLine() {
    if (!trmBody || !trmCursor) return;
    const entry = (trmLines[currentLang] || trmLines.en)[trmIdx % (trmLines[currentLang] || trmLines.en).length];
    trmIdx++;
    const elapsed = ((Date.now() - trmStart) / 1000).toFixed(3);

    const el = document.createElement('div');
    el.className = 't-line';
    el.innerHTML = `<span class="t-ts">[${elapsed}]</span> <span class="t-${entry.type}">${entry.text}</span>`;

    if (trmCursor.parentNode) trmCursor.parentNode.removeChild(trmCursor);
    trmBody.appendChild(el);
    trmBody.appendChild(trmCursor);

    const allLines = trmBody.querySelectorAll('.t-line');
    if (allLines.length > TRM_MAX) allLines[0].remove();

    requestAnimationFrame(() => el.classList.add('t-visible'));

    trmTimeout = setTimeout(addTrmLine, 900 + Math.random() * 900);
  }

  setTimeout(addTrmLine, 500);

  // ── Init ──
  applyLanguage(currentLang);
})();