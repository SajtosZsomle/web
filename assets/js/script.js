(function() {
  const translations = {
    en: {
      about_tag: "Hi, I’m mrzsomi",
      hero_title: 'I build <span class="accent-text">useful things</span> close to the metal.',
      hero_paragraph: "Firmware, web tools and infrastructure for the things I want to understand and make useful.",
      hero_index_label: "Field notes",
      hero_index_intro: "A short list of what I’m working on.",
      hero_index_hardware: "Embedded hardware",
      hero_index_hardware_detail: "Sensors, motion and boards",
      hero_index_software: "Useful software",
      hero_index_software_detail: "Firmware, tools and interfaces",
      hero_index_infra: "Infrastructure",
      hero_index_infra_detail: "Self-hosting, monitoring and deployment",
      view_projects: "Browse the project index",
      get_in_touch: "Start a conversation",
      name_origin: "mrzsomi started as a Hungarian Minecraft username and stayed because it felt right.",
      skills_tag: "Working set",
      skills_title: "Tools for making things real",
      skills_lede: "A practical mix of bench work, code and systems work.",
      hardware_title: "On the bench",
      software_title: "In the editor",
      engineering_title: "Around the system",
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
      projects_title: "A working index, not a showcase.",
      projects_lede: "Hardware, software and infrastructure projects.",
      view_all_projects: "Open archive",
      activity_tag: "Activity",
      activity_title: "Notes from the build log.",
      contact_tag: "Contact",
      contact_title: "Have something worth making?",
      contact_paragraph: "Tell me what you are trying to make, fix or understand.",
      form_name: "Name",
      form_name_placeholder: "Your name",
      form_subject: "Subject",
      form_subject_placeholder: "What's this about?",
      form_email: "Email",
      form_email_placeholder: "you@example.com",
      form_message: "Message",
      form_message_placeholder: "Your message…",
      form_submit: "Send message",
      form_wait: "Please wait before sending another message.",
      form_slow_down: "Please take a moment to complete the form.",
      form_error: "Something went wrong. Please try again.",
      footer_text: "© 2026 mrzsomi",
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
      view_github: "View GitHub profile",
      social_github: "GitHub profile",
      social_discord: "Discord",
      selected_project: "Selected project"
    },
    hu: {
      about_tag: "Szia, mrzsomi vagyok",
      hero_title: 'Hasznos dolgokat építek, <span class="accent-text">közel a vashoz.</span>',
      hero_paragraph: "Firmware, webes eszközök és infrastruktúra ahhoz, amit meg akarok érteni és hasznossá tenni.",
      hero_index_label: "Jegyzetek",
      hero_index_intro: "Röviden arról, amin most dolgozom.",
      hero_index_hardware: "Beágyazott hardver",
      hero_index_hardware_detail: "Szenzorok, mozgatás és áramkörök",
      hero_index_software: "Hasznos szoftver",
      hero_index_software_detail: "Firmware, eszközök és felületek",
      hero_index_infra: "Infrastruktúra",
      hero_index_infra_detail: "Önüzemeltetés, monitorozás és kiadás",
      get_in_touch: "Beszéljünk",
      name_origin: "A mrzsomi egy régi magyar Minecraft-felhasználónévből maradt meg.",
      skills_tag: "Amikkel dolgozom",
      skills_title: "Eszközök, amikkel működő dolgok születnek",
      skills_lede: "Gyakorlati keverék a műhelyből, a kódból és a rendszerekből.",
      hardware_title: "A padon",
      software_title: "A szerkesztőben",
      engineering_title: "A rendszer körül",
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
      projects_tag: "Projektek",
      projects_title: "Munkajegyzék, nem kirakat.",
      projects_lede: "Hardveres, szoftveres és infrastruktúra-projektek.",
      view_all_projects: "Archívum megnyitása",
      activity_tag: "Aktivitás",
      activity_title: "Jegyzetek a build naplóból.",
      contact_tag: "Kapcsolat",
      contact_title: "Van valami, amit érdemes megépíteni?",
      contact_paragraph: "Írd le, mit szeretnél elkészíteni, megjavítani vagy megérteni.",
      form_name: "Név",
      form_name_placeholder: "A neved",
      form_subject: "Tárgy",
      form_subject_placeholder: "Miben segíthetek?",
      form_email: "Email",
      form_email_placeholder: "te@gmail.com",
      form_message: "Üzenet",
      form_message_placeholder: "Írd le röviden, miről lenne szó…",
      form_submit: "Üzenet küldése",
      form_wait: "Már küldtél egy üzenetet. Próbáld meg később.",
      form_slow_down: "Töltsd ki egy kicsit lassabban az űrlapot.",
      form_error: "Nem sikerült elküldeni. Próbáld meg újra.",
      footer_text: "© 2026 mrzsomi",
      nav_about: "Rólam",
      nav_skills: "Eszköztár",
      nav_projects: "Projektek",
      nav_activity: "Friss dolgok",
      nav_contact: "Kapcsolat",
      loading_projects: "Projektek betöltése…",
      error_projects: "Nem sikerült betölteni a projekteket.",
      no_projects: "Nincs ilyen projekt.",
      link_github: "GitHub",
      link_web: "Weboldal",
      link_discord: "Discord",
      link_documentation: "Leírás",
      link_live_demo: "Élő oldal",
      no_activity: "Most nincs új nyilvános frissítés.",
      view_github: "GitHub-profil",
      social_github: "GitHub-profil",
      social_discord: "Discord",
      selected_project: "Kiválasztott projekt"
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

  // ── Theme ──
  const html = document.documentElement;
  const themeBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const savedTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', savedTheme);
  themeIcon.textContent = savedTheme === 'dark' ? 'light' : 'dark';
  themeBtn.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next); localStorage.setItem('theme', next);
    themeIcon.textContent = next === 'dark' ? 'light' : 'dark';
  });

  // ── Language toggle ──
  langToggle.addEventListener('click', () => {
    applyLanguage(currentLang === 'en' ? 'hu' : 'en');
  });

  // ── Skills rendering ──
  const skillsContainer = document.getElementById('skills-container');
  function renderSkills() {
    const t = translations[currentLang];
    const categories = [
      { title: t.hardware_title, items: t.skills_hardware },
      { title: t.software_title, items: t.skills_software },
      { title: t.engineering_title, items: t.skills_engineering }
    ];
    skillsContainer.innerHTML = categories.map(cat => {
      return `
        <div class="skill-card">
          <h3>${cat.title}</h3>
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
        github: { labelKey: 'link_github', color: '#666666', colorDark: '#a0a0a0', colorRgb: '102, 102, 102', colorRgbDark: '160, 160, 160' },
        web: { labelKey: 'link_web', color: '#4285f4', colorRgb: '66, 133, 244' },
        discord: { labelKey: 'link_discord', color: '#5865f2', colorRgb: '88, 101, 242' },
        documentation: { labelKey: 'link_documentation', color: '#0969da', colorRgb: '9, 105, 218' },
        'live-demo': { labelKey: 'link_live_demo', color: '#22c55e', colorRgb: '34, 197, 94' }
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
            html += `<a href="${url}" target="_blank" rel="noopener" class="project-link" data-platform="${key}" style="--platform-color: ${color}; --platform-color-rgb: ${colorRgb};" title="${label}">${label}</a>`;
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
      const t = translations[currentLang];
      document.getElementById("activity-feed").innerHTML = `<div class="loader">${t.no_activity} <a href="https://github.com/SajtosZsomle" target="_blank" rel="noopener">${t.view_github}</a></div>`;
    }
  }
  function renderActivity(events) {
    const feed = document.getElementById("activity-feed");
    feed.innerHTML = "";
    if (!events.length) {
      const t = translations[currentLang];
      feed.innerHTML = `<div class="loader">${t.no_activity} <a href="https://github.com/SajtosZsomle" target="_blank" rel="noopener">${t.view_github}</a></div>`;
      return;
    }
    events.forEach(e => {
      const item = document.createElement("div"); item.className = "activity-item";
      const avatar = e.actor?.avatar_url || "";
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
      item.innerHTML = `<img class="activity-avatar" src="${avatar}" alt="" width="34" height="34"><div class="activity-content"><p><strong>${repo}</strong>: ${action}</p><small>${type} / ${date}</small></div>`;
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

  // ── Init ──
  applyLanguage(currentLang);

})();