# 🌐 mrzsomi.top — Personal website / portfólió

This repository contains the static source for https://mrzsomi.top — a bilingual (EN / HU) personal portfolio built with vanilla HTML/CSS/JS and deployed on GitHub Pages.

---

## Live

- Demo: https://mrzsomi.top

---

## What’s in this repo

- index.html — main layout and content
- assets/ — CSS, JS, images and fonts
- projects.en.json, projects.hu.json — project data (edit here to add/update projects)
- README.md — this file

---

## Quickstart — local preview

1. Clone the repo:

   git clone https://github.com/SajtosZsomle/web.git
   cd web

2. Preview locally (static server):

   # Python 3
   python -m http.server 8000
   # then open http://localhost:8000

   # or use a lightweight dev server
   npx serve .

Notes: The site is static — no build step is required. Editing HTML/CSS/JS and refreshing the browser shows changes.

---

## Editing content

- Projects: update `projects.en.json` and `projects.hu.json` in parallel (keep IDs and keys consistent). The site supports multiple link types: github, web, discord, documentation, live-demo.
- Translations: the inlined i18n strings live in `assets/js/script.js`. For larger changes consider extracting them to JSON and loading dynamically.
- Images: place optimized assets in `assets/img`. Use responsive images (srcset) and modern formats (WebP/AVIF) if adding new images.

---

## Accessibility & UX notes

- The site respects `prefers-reduced-motion` to disable heavy animations.
- A prominent `<noscript>` message appears if JavaScript is disabled — many features require JS to function.
- Use semantic headings and alt text when adding images.

---

## Deployment (GitHub Pages)

- This repository is configured for GitHub Pages: push to `main` and Pages serves the static site from the repository root.
- Recommended: enable Cloudflare in front of Pages if you need caching, Brotli/GZIP, or custom headers.

---

## Contribution guidelines

- Keep changes small and focused. Open a PR for non-trivial changes.
- For content changes (projects/translations), update both English and Hungarian files together.
- Follow existing code style (vanilla JS, minimal deps). If adding build tooling, include a GitHub Actions workflow and document the steps here.

---

## Troubleshooting

- If projects don’t appear, check `projects.en.json` / `projects.hu.json` for valid JSON (IDs must be unique).
- If the activity feed fails, the site falls back to a link to the GitHub profile (rate limits or network errors).
- If the nav highlighting behaves oddly, clear cache or test in an incognito tab — layout shifts can affect active detection.

---

## License & Copyright

All rights reserved unless otherwise noted. Please contact via the website if you need reuse permission.

---

## Kapcsolat (HU)

A honlapon lévő űrlapon keresztül vagy a repository Issue-ján keresztül érhetsz el.

---

Készítette: mrzsomi — © 2026
