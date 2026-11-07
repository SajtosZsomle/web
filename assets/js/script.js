(function() {
  const translations = {
    en: {
      about_tag: "Hi, I’m mrzsomi",
      hero_title: 'I’m learning by <span class="accent-text">making things.</span>',
      hero_paragraph: "I’m a student from Hungary, exploring code, hardware, and whatever I’m curious about.",
      hero_index_label: "Right now",
      hero_index_intro: "A few things on my desk.",
      hero_index_hardware: "Boards & sensors",
      hero_index_hardware_detail: "ESP32s, motors, small experiments",
      hero_index_software: "Small software",
      hero_index_software_detail: "Firmware, scripts, useful little tools",
      hero_index_infra: "Stuff that stays up",
      hero_index_infra_detail: "My servers, websites, and monitoring",
      view_projects: "See the projects",
      get_in_touch: "Get in touch",
      name_origin: "mrzsomi started as a Hungarian Minecraft username and stayed because it felt right.",
      skills_tag: "What I’m learning",
      skills_title: "What I reach for",
      skills_lede: "The tools I use",
      hardware_title: "At the desk",
      software_title: "In the editor",
      engineering_title: "At home",
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
      projects_tag: "Projects",
      projects_title: "Things I’ve made.",
      projects_lede: "A few builds, experiments, and sites I keep coming back to.",
      view_all_projects: "Open archive",
      activity_tag: "GitHub",
      activity_title: "The latest things.",
      contact_tag: "Contact",
      contact_title: "Want to build something?",
      contact_paragraph: "Send me a message. I like figuring out tricky things.",
      form_name: "Name",
      form_name_placeholder: "Your name",
      form_subject: "Subject",
      form_subject_placeholder: "What’s this about…",
      form_email: "Email",
      form_email_placeholder: "you@example.com",
      form_message: "Message",
      form_message_placeholder: "Your message…",
      form_submit: "Send message",
      form_wait: "Please wait a moment before sending another message.",
      form_slow_down: "Please complete the form before sending.",
      form_error: "Something went wrong. Please try again.",
      form_consent: 'I have read the <a href="legal.html#privacy">privacy notice</a> and agree to the processing of this message.',
      footer_privacy: "Privacy & cookies",
      footer_terms: "Terms / ÁSZF",
      footer_sla: "SLA",
      footer_text: "© 2026 mrzsomi",
      nav_about: "About",
      nav_skills: "Tools",
      nav_projects: "Projects",
      nav_activity: "Log",
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
      view_github: "View GitHub profile",
      social_github: "GitHub profile",
      social_discord: "Discord",
      selected_project: "Selected project",
      aria_language: "Switch language",
      aria_theme: "Toggle theme",
      aria_current_work: "Current work",
      aria_build: "Press the board button",
      aria_build_active: "Release the board button",
      theme_light: "light",
      theme_dark: "dark"
    },
    hu: {
      about_tag: "Szia, mrzsomi vagyok",
      hero_title: 'Építve <span class="accent-text">tanulok.</span>',
      hero_paragraph: "Magyar diák vagyok, akit érdekel a kód, a hardver és minden új ötlet.",
      hero_index_label: "Mostanában",
      hero_index_intro: "Az asztalomról",
      hero_index_hardware: "Panelek és szenzorok",
      hero_index_hardware_detail: "ESP32-k, motorok, apró kísérletek",
      hero_index_software: "Kis szoftverek",
      hero_index_software_detail: "Firmware, scriptek, hasznos eszközök",
      hero_index_infra: "Ami otthon fut",
      hero_index_infra_detail: "Szerverek, oldalak és monitorozás",
      view_projects: "Nézd meg a projektjeimet",
      get_in_touch: "Írj nekem",
      name_origin: "A mrzsomi egy régi magyar Minecraft-felhasználónévből maradt meg.",
      skills_tag: "Amit tanulok",
      skills_title: "Amihez nyúlok",
      skills_lede: "Az eszközeim",
      hardware_title: "Az asztalon",
      software_title: "A szerkesztőben",
      engineering_title: "Otthon",
      skills_hardware: [
        "ESP32 / ATmega328",
        "NYÁK-tervezés (EasyEDA)",
        "3D-nyomtatás (Creality)",
        "Forrasztás és javítás",
        "Otthoni szerverek (Proxmox)"
      ],
      skills_software: [
        "Beágyazott C/C++",
        "Java / Kotlin",
        "Python / JavaScript",
        "OTA-frissítés és aszinkron szerverek",
        "ISR-alapú állapotgépek"
      ],
      skills_engineering: [
        "RF-hibakeresés és elemzés",
        "Cloudflare / Proxmox",
        "IntelliJ / VSCodium",
        "Figma (UI/UX)",
        "Git és CI/CD folyamatok"
      ],
      filter_all: "Összes",
      projects_tag: "Projektek",
      projects_title: "Válogatott projektek",
      projects_lede: "Hardver, kód és szerverek",
      view_all_projects: "Archívum megnyitása",
      activity_tag: "GitHub",
      activity_title: "Friss munkák",
      contact_tag: "Kapcsolat",
      contact_title: "Építsünk valamit?",
      contact_paragraph: "Ötletek, kérdések, közös építés.",
      form_name: "Név",
      form_name_placeholder: "A neved",
      form_subject: "Tárgy",
      form_subject_placeholder: "Miben segíthetek…",
      form_email: "E-mail",
      form_email_placeholder: "te@gmail.com",
      form_message: "Üzenet",
      form_message_placeholder: "Írd le röviden, miről lenne szó…",
      form_submit: "Üzenet küldése",
      form_wait: "Már küldtél egy üzenetet. Próbáld meg később.",
      form_slow_down: "Küldés előtt töltsd ki az űrlap minden mezőjét.",
      form_error: "Nem sikerült elküldeni. Próbáld meg újra.",
      form_consent: 'Elolvastam az <a href="legal.html#privacy">adatkezelési tájékoztatót</a>, és hozzájárulok az üzenetem kezeléséhez.',
      footer_privacy: "Adatvédelem és sütik",
      footer_terms: "Feltételek / ÁSZF",
      footer_sla: "SLA",
      footer_text: "© 2026 mrzsomi",
      nav_about: "Rólam",
      nav_skills: "Eszközök",
      nav_projects: "Projektek",
      nav_activity: "Napló",
      nav_contact: "Kapcsolat",
      loading_projects: "Projektek betöltése…",
      error_projects: "Nem sikerült betölteni a projekteket.",
      no_projects: "Nincs ilyen projekt.",
      link_github: "GitHub",
      link_web: "Weboldal",
      link_discord: "Discord",
      link_documentation: "Dokumentáció",
      link_live_demo: "Élő demó",
      no_activity: "Most nincs új nyilvános frissítés.",
      view_github: "GitHub-profil",
      social_github: "GitHub-profil",
      social_discord: "Discord",
      selected_project: "Kiválasztott projekt",
      aria_language: "Nyelv váltása",
      aria_theme: "Téma váltása",
      aria_current_work: "Amivel most dolgozom",
      aria_build: "Nyomd meg a panel gombját",
      aria_build_active: "Engedd fel a panel gombját",
      theme_light: "világos",
      theme_dark: "sötét"
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
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (t[key]) el.setAttribute('aria-label', t[key]);
    });
    if (typeof themeIcon !== 'undefined') {
      themeIcon.textContent = html.getAttribute('data-theme') === 'dark' ? t.theme_light : t.theme_dark;
    }
    updateBuildDemoLabel();
    document.querySelectorAll('[data-i18n-nav]').forEach(el => {
      const key = el.getAttribute('data-i18n-nav');
      if (t['nav_'+key]) el.textContent = t['nav_'+key];
    });
    renderSkills();
    loadProjects();
    fetchGitHubActivity();
    window.dispatchEvent(new CustomEvent('languagechange', { detail: lang }));
  }

  // ── Theme ──
  const html = document.documentElement;
  const themeBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const themeColorMeta = document.getElementById('theme-color-meta');
  const savedTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', savedTheme);
  if (themeColorMeta) themeColorMeta.content = savedTheme === 'dark' ? '#0c0c0c' : '#f4f4f1';
  themeIcon.textContent = html.getAttribute('data-theme') === 'dark'
    ? translations[currentLang].theme_light
    : translations[currentLang].theme_dark;
  themeBtn.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next); localStorage.setItem('theme', next);
    if (themeColorMeta) themeColorMeta.content = next === 'dark' ? '#0c0c0c' : '#f4f4f1';
    themeIcon.textContent = next === 'dark' ? translations[currentLang].theme_light : translations[currentLang].theme_dark;
  });

  // ── Language toggle ──
  langToggle.addEventListener('click', () => {
    applyLanguage(currentLang === 'en' ? 'hu' : 'en');
  });

  const buildDemo = document.getElementById('build-demo');
  function updateBuildDemoLabel() {
    if (!buildDemo) return;
    const key = buildDemo.classList.contains('is-active') ? 'aria_build_active' : 'aria_build';
    buildDemo.setAttribute('aria-label', translations[currentLang][key]);
  }
  buildDemo?.addEventListener('click', () => {
    const active = buildDemo.classList.toggle('is-active');
    buildDemo.setAttribute('aria-pressed', String(active));
    updateBuildDemoLabel();
  });

  // ── Skills rendering ──
  const skillsContainer = document.getElementById('skills-container');
  function renderSkills() {
    const t = translations[currentLang];
    const categories = [
      {
        title: t.hardware_title,
        items: t.skills_hardware,
        icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="5" width="14" height="14" rx="1"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/><path d="M9 9h6v6H9z"/></svg>'
      },
      {
        title: t.software_title,
        items: t.skills_software,
        icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/></svg>'
      },
      {
        title: t.engineering_title,
        items: t.skills_engineering,
        icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="12" rx="1"/><path d="M8 21h8M12 17v4M7 9h.01M10 9h.01M13 9h.01M16 9h.01M7 13h10"/></svg>'
      }
    ];
    skillsContainer.innerHTML = categories.map(cat => {
      return `
        <div class="skill-card">
          <div class="skill-heading"><span class="skill-icon">${cat.icon}</span><h3>${cat.title}</h3></div>
          <ul>
            ${cat.items.map(item => `<li><span class="skill-mark" aria-hidden="true"></span><span>${item}</span></li>`).join('')}
          </ul>
        </div>
      `;
    }).join('');
  }

  // ── Projects ──
  const listContainer = document.getElementById('project-list');
  const detailPanel = document.getElementById('project-detail');
  const featuredProjectIds = ['p1', 'p4', 'p7', 'p10'];
  let allProjects = [];
  let activeProjectId = null;

  async function loadProjects() {
    try {
      const res = await fetch(`projects.${currentLang}.json`);
      if (!res.ok) throw new Error('Failed to load projects');
      allProjects = await res.json();
      renderProjects();
    } catch (err) {
      listContainer.innerHTML = `<div class="loader" style="color: var(--accent);">${translations[currentLang].error_projects || 'Failed to load projects.'}</div>`;
    }
  }

  function renderProjects() {
    const filtered = featuredProjectIds
      .map(id => allProjects.find(project => project.id === id))
      .filter(Boolean);
    listContainer.innerHTML = '';
    if (!filtered.length) {
      listContainer.innerHTML = `<div class="loader">${translations[currentLang].no_projects}</div>`;
      detailPanel.classList.remove('visible');
      return;
    }
    filtered.forEach(project => {
      const item = document.createElement('button');
      item.type = 'button';
      item.className = 'project-item project-row' + (project.id === activeProjectId ? ' active' : '');
      item.setAttribute('data-id', project.id);
      item.setAttribute('aria-label', `${project.title}. View project details`);
      item.setAttribute('aria-expanded', project.id === activeProjectId ? 'true' : 'false');
      const tagsHtml = (project.tags || []).map(t => `<span class="tag">${t}</span>`).join('');
      const statusLabels = { completed: currentLang === "hu" ? "Elkészült" : "Completed", "in-progress": currentLang === "hu" ? "Folyamatban" : "In progress", ongoing: currentLang === "hu" ? "Folyamatosan alakul" : "Ongoing" };
      const statusHtml = project.status ? `<span class="status">${statusLabels[project.status] || project.status}</span>` : '';
      item.innerHTML = `
        <span class="project-row-index">${String(featuredProjectIds.indexOf(project.id) + 1).padStart(2, '0')}</span>
        <span class="project-info">
          <span class="project-title">${project.title}</span>
          <span class="project-description">${project.short}</span>
          <span class="project-meta">${statusHtml}${tagsHtml}</span>
        </span>
      `;
      item.addEventListener('click', () => {
        document.querySelectorAll('.project-item').forEach(el => {
          el.classList.remove('active');
          el.setAttribute('aria-expanded', 'false');
        });
        item.classList.add('active');
        item.setAttribute('aria-expanded', 'true');
        activeProjectId = project.id;
        showDetail(project);
      });
      listContainer.appendChild(item);
    });
    if (!activeProjectId && filtered.length) {
      showDetail(filtered[0]);
      const firstItem = listContainer.querySelector('.project-item');
      firstItem?.classList.add('active');
      firstItem?.setAttribute('aria-expanded', 'true');
      activeProjectId = filtered[0].id;
    }
    else if (activeProjectId && filtered.some(p => p.id === activeProjectId)) {
      const active = filtered.find(p => p.id === activeProjectId);
      showDetail(active);
      listContainer.querySelector(`[data-id="${activeProjectId}"]`)?.classList.add('active');
    } else {
      showDetail(filtered[0]);
      const firstItem = listContainer.querySelector('.project-item');
      firstItem?.classList.add('active');
      firstItem?.setAttribute('aria-expanded', 'true');
      activeProjectId = filtered[0].id;
    }
  }

  function showDetail(project) {
    let html = project.full || project.short || '';
    // Render links if available
    const links = project.links || (project.github ? { github: project.github } : null);
    if (links) {
      const linkIcons = {
        github: { labelKey: 'link_github', icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 19c-3 1-3-1-4-1m8 3v-3.5c0-1 .1-1.4-.5-2C9.5 16 7 15.5 7 12.5c0-.9.3-1.7.9-2.3-.1-.2-.4-1.1.1-2.2 0 0 .7-.2 2.3.9a8 8 0 0 1 4.2 0c1.6-1.1 2.3-.9 2.3-.9.5 1.1.2 2 .1 2.2.6.6.9 1.4.9 2.3 0 3-2.5 3.5-4.5 4 .6.5.5 1.3.5 2V21"/></svg>' },
        web: { labelKey: 'link_web', icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>' },
        discord: { labelKey: 'link_discord', icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.5 5.2A16 16 0 0 0 16 4l-.4.8a14.5 14.5 0 0 0-7.2 0L8 4a16 16 0 0 0-3.5 1.2C2.3 8.6 1.7 12 2 15.4a15.8 15.8 0 0 0 4.3 2.2l1-1.4a9.5 9.5 0 0 1-1.5-.7l.4-.3a11 11 0 0 0 9.6 0l.4.3a9.5 9.5 0 0 1-1.5.7l1 1.4a15.8 15.8 0 0 0 4.3-2.2c.3-3.4-.3-6.8-2.5-10.2Z"/></svg>' },
        documentation: { labelKey: 'link_documentation', icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 0-3 0V4Zm0 0v16m3 0h11"/></svg>' },
        'live-demo': { labelKey: 'link_live_demo', icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9"/><path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5"/></svg>' }
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
            html += `<a href="${url}" target="_blank" rel="noopener" class="project-link" data-platform="${key}" style="--platform-color: ${color}; --platform-color-rgb: ${colorRgb};" title="${label}">${linkInfo.icon}<span>${label}</span></a>`;
          }
        });
        html += '</div>';
      }
    }
    
    detailPanel.innerHTML = `<span class="detail-kicker">${translations[currentLang].selected_project}</span>${html}`;
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
      renderActivityEmpty();
    }
  }
  const activityIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 19c-3 1-3-1-4-1m8 3v-3.5c0-1 .1-1.4-.5-2C9.5 16 7 15.5 7 12.5c0-.9.3-1.7.9-2.3-.1-.2-.4-1.1.1-2.2 0 0 .7-.2 2.3.9a8 8 0 0 1 4.2 0c1.6-1.1 2.3-.9 2.3-.9.5 1.1.2 2 .1 2.2.6.6.9 1.4.9 2.3 0 3-2.5 3.5-4.5 4 .6.5.5 1.3.5 2V21"/></svg>';
  function renderActivityEmpty() {
    const t = translations[currentLang];
    document.getElementById("activity-feed").innerHTML = `<div class="activity-empty"><span class="activity-empty-icon">${activityIcon}</span><p>${t.no_activity} <a href="https://github.com/SajtosZsomle" target="_blank" rel="noopener">${t.view_github}</a></p></div>`;
  }
  function renderActivity(events) {
    const feed = document.getElementById("activity-feed");
    feed.innerHTML = "";
    if (!events.length) {
      renderActivityEmpty();
      return;
    }
    events.forEach(e => {
      const item = document.createElement("article"); item.className = "activity-item";
      const icon = document.createElement("span");
      icon.className = "activity-icon";
      icon.innerHTML = activityIcon;
      item.appendChild(icon);
      const repo = e.repo?.name || "";
      const date = e.created_at ? new Date(e.created_at).toLocaleDateString(currentLang === "hu" ? "hu-HU" : "en-GB", { day: "numeric", month: "short" }) : "";
      const typeLabels = { PushEvent: currentLang === "hu" ? "Feltöltés" : "Push", CreateEvent: currentLang === "hu" ? "Létrehozás" : "Create", IssuesEvent: currentLang === "hu" ? "Issue" : "Issue", PullRequestEvent: currentLang === "hu" ? "Pull request" : "Pull request", WatchEvent: currentLang === "hu" ? "Csillagozás" : "Star" };
      const type = typeLabels[e.type] || e.type?.replace("Event", "") || "";
      let action = "";
      if (e.type === "PushEvent") action = currentLang === "hu" ? `feltöltés a(z) ${e.payload.ref?.replace("refs/heads/", "") || "main"} ágra` : `pushed to ${e.payload.ref?.replace("refs/heads/", "") || "main"}`;
      else if (e.type === "CreateEvent") action = currentLang === "hu" ? `${e.payload.ref_type} létrehozása` : `created ${e.payload.ref_type}`;
      else if (e.type === "IssuesEvent") action = currentLang === "hu" ? `${e.payload.action} issue` : `${e.payload.action} issue`;
      else if (e.type === "PullRequestEvent") action = currentLang === "hu" ? `${e.payload.action} pull request` : `${e.payload.action} pull request`;
      else if (e.type === "WatchEvent") action = currentLang === "hu" ? "csillagozta" : "starred";
      else action = e.type;
      const content = document.createElement("div");
      content.className = "activity-content";
      const summary = document.createElement("p");
      const repoName = document.createElement("strong");
      repoName.textContent = repo;
      summary.append(repoName, `: ${action}`);
      const meta = document.createElement("small");
      meta.textContent = `${type} / ${date}`;
      content.append(summary, meta);
      item.appendChild(content);
      feed.appendChild(item);
    });
  }
  fetchGitHubActivity();

  // ── Contact form ──
  const form = document.getElementById('contact-form');
  const statusEl = document.getElementById('form-status');
  const submitBtn = document.getElementById('submit-btn');
  const formStartedAt = Date.now();
  const formRateLimitKey = 'mrzsomi-contact-last-submit';
  const formRateLimitMs = 60 * 1000;
  let formSubmitting = false;

  function getLastSubmitTime() {
    try {
      const value = Number.parseInt(localStorage.getItem(formRateLimitKey) || '', 10);
      return Number.isFinite(value) ? value : 0;
    } catch (error) {
      console.warn('Contact form rate-limit storage is unavailable.', error);
      return 0;
    }
  }

  function setLastSubmitTime() {
    try {
      localStorage.setItem(formRateLimitKey, String(Date.now()));
    } catch (error) {
      console.warn('Contact form rate-limit storage is unavailable.', error);
    }
  }

  function setFormStatus(message, type) {
    statusEl.textContent = message;
    statusEl.className = `form-status ${type}`;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (formSubmitting) return;
    const t = translations[currentLang];
    const honeypot = form.querySelector('#website');
    const elapsed = Date.now() - formStartedAt;
    const remaining = formRateLimitMs - (Date.now() - getLastSubmitTime());
    if (honeypot.value.trim() || elapsed < 3000) {
      setFormStatus(t.form_slow_down, 'error');
      return;
    }
    if (remaining > 0) {
      setFormStatus(`${t.form_wait} (${Math.ceil(remaining / 1000)}s)`, 'error');
      return;
    }

    formSubmitting = true;
    submitBtn.disabled = true; submitBtn.textContent = currentLang === 'hu' ? 'Küldés…' : 'Sending…';
    statusEl.textContent = ''; statusEl.className = 'form-status';
    try {
      const res = await fetch(form.action, { method:'POST', body: new FormData(form), headers: {'Accept':'application/json'} });
      if (res.ok) {
        setLastSubmitTime();
        statusEl.textContent = currentLang === 'hu' ? '✓ Üzenet elküldve!' : '✓ Message sent!';
        statusEl.className = 'form-status success'; form.reset();
      } else {
        const data = await res.json().catch(()=>({}));
        setFormStatus('⚠ ' + (data.error || t.form_error), 'error');
      }
    } catch (error) {
      console.error('Contact form submission failed.', error);
      setFormStatus('⚠ Network error.', 'error');
    } finally {
      formSubmitting = false;
      submitBtn.disabled = false; submitBtn.textContent = translations[currentLang].form_submit;
    }
  });

  // ── Smooth scroll + active nav ──
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const navOffset = 72;

  window.addEventListener('scroll', () => {
    let current = '';

    // Read live positions because project/activity content changes section heights after load.
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= navOffset + 18) {
        current = section.id;
      }
    }
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8) {
      current = sections[sections.length - 1]?.id || current;
    }

    document.querySelectorAll('.nav-links a').forEach(a => {
      a.classList.remove('active');
      const target = a.dataset.section || a.getAttribute('href')?.slice(1);
      if (target === current) a.classList.add('active');
    });
  });

  document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        const scrollY = window.scrollY || window.pageYOffset;
        const top = target.getBoundingClientRect().top + scrollY - navOffset;
        window.scrollTo({ top, behavior:'smooth' });
        window.location.hash = link.getAttribute('href').substring(1);
      }
    });
  });

  // Handle hash change (direct URL navigation)
  function updateNavFromHash() {
    const hash = window.location.hash.substring(1);
    if (hash) {
      const link = Array.from(document.querySelectorAll('.nav-links a')).find(a => {
        return a.dataset.section === hash || a.getAttribute('href') === `#${hash}`;
      });
      if (link) {
        document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
        link.classList.add('active');
        const target = document.querySelector(`#${hash}`);
        if (target) {
          const scrollY = window.scrollY || window.pageYOffset;
          const top = target.getBoundingClientRect().top + scrollY - navOffset;
          window.scrollTo({ top, behavior:'smooth' });
        }
      }
    }
  }

  window.addEventListener('hashchange', updateNavFromHash);
  
  // Initialize active nav on page load
  if (window.location.hash) {
    setTimeout(updateNavFromHash, 100);
  } else {
    window.dispatchEvent(new Event('scroll'));
  }

  // ── Init ──
  applyLanguage(currentLang);

})();