<p align="center"><img src="assets/img/og-image.png" alt="mrzsomi.top preview" width="800"></p>

# mrzsomi.top

[English](#english) · [Magyar](#magyar)

## English

### What this is

This is the personal site and project notebook of **mrzsomi**, a Hungarian student interested in electronics and many other things. It brings together embedded systems, firmware experiments, small web tools, self-hosted infrastructure and whatever I am currently learning. The visual language is intentionally editorial and calm: strong type, a restrained terracotta-and-sage palette, small interface details, and motion that stays out of the way of the content.

### What you can find here

- A bilingual portfolio in English and Hungarian
- A focused homepage plus a separate searchable project archive
- Project notes covering Arduino, ESP32, motion control, PCB work, Java services and homelab infrastructure
- Links to live sites, source repositories and documentation where they exist
- Public GitHub activity, with graceful fallback when the API is unavailable
- A responsive, static layout with light and dark themes
- A contact form powered by Formspree
- A small set of local, editable SVG illustrations instead of repeated stock photography
- Basic client-side contact protection with a honeypot and one-minute cooldown

### Technical notes

The site is deliberately framework-free: semantic HTML, CSS and browser JavaScript are served as static files through GitHub Pages. The design takes cues from UI Watermelon, Realtime Colors, Recent Design and React Bits, while using CSS transitions and the browser's native animation APIs instead of a runtime animation library. This keeps the site fast, public-repository friendly, and deployable without a build step. Project content lives in `projects.en.json` and `projects.hu.json`, so new work can be added without changing the page structure. The homepage shows four starred projects with no filtering, while `projects.html` provides the complete archive with filters and expandable notes. The featured IDs are easy to change in `assets/js/script.js`. Cloudflare sits in front of the site, while GitHub provides the project and activity links.

The visual artwork lives in `assets/img/illustrations/` as plain SVG files. Edit those files directly to change the circuit board, code window, or server rack artwork without needing a design tool or build step.

The contact form includes a hidden honeypot, a three-second minimum completion time, duplicate-submit protection, and a one-minute browser cooldown after a successful send. These controls reduce casual spam, but they are not a server-side security boundary because the site is static. Formspree remains responsible for server-side filtering and delivery limits.

### GitHub Pages deployment

There is no server or build process to maintain. Publish the repository root with GitHub Pages (or use the existing custom domain in `CNAME`), and the relative asset paths work for both a custom domain and a project site. The GitHub activity panel is progressive enhancement: if the public API is unavailable or rate-limited, the page links back to the profile instead of failing the rest of the site.

### Editing locally

Open `index.html` directly for a quick preview, or serve the repository root with any static file server when testing JSON fetches:

```bash
python3 -m http.server 8000
```

Project copy belongs in both JSON files. Shared structure lives in `index.html`, visual styles in `assets/css/styles.css`, and interactions/translations in `assets/js/script.js`.

### Links

- Website: https://mrzsomi.top
- GitHub: https://github.com/SajtosZsomle
- English project data: https://mrzsomi.top/projects.en.json
- Hungarian project data: https://mrzsomi.top/projects.hu.json

This is a personal repository rather than a collaborative project. Suggestions are welcome through the contact form, but external pull requests are not part of the current workflow.

## Magyar

### Mi ez?

Ez **mrzsomi** személyes weboldala és projekt-naplója. Magyar diákként az elektronika és még sok minden más érdekel; itt gyűjtöm össze a beágyazott rendszerekkel, firmware-kísérletekkel, elektronikával, kisebb webes eszközökkel és saját üzemeltetésű infrastruktúrával kapcsolatos munkáimat. A cél nem a technológiák felsorolása, hanem annak bemutatása, hogy az egyes projektek mit oldanak meg és miért készültek.

### Mit találsz az oldalon?

- Angol és magyar nyelvű, kétnyelvű portfóliót
- Arduino-, ESP32-, mozgásvezérlési, NYÁK-tervezési, Java- és homelab-projekteket
- Forráskód-, élő oldal- és dokumentációs hivatkozásokat, ahol rendelkezésre állnak
- Nyilvános GitHub-aktivitást, tartalék megjelenítéssel API-hiba esetére
- Reszponzív felületet világos és sötét témával
- Formspree-alapú kapcsolatfelvételi űrlapot

### Technikai háttér

Az oldal szándékosan nem használ frameworköt: szemantikus HTML, CSS és böngészőben futó JavaScript alkotja, statikus fájlként GitHub Pages szolgálja ki. A projektek tartalma a `projects.en.json` és `projects.hu.json` fájlokban található, így új munka hozzáadásához nem kell a HTML szerkezetét módosítani. A webhely előtt Cloudflare működik, a projekt- és aktivitáslinkek pedig GitHubhoz kapcsolódnak.

### Linkek

- Weboldal: https://mrzsomi.top
- GitHub: https://github.com/SajtosZsomle
- Angol projektadatok: https://mrzsomi.top/projects.en.json
- Magyar projektadatok: https://mrzsomi.top/projects.hu.json

Ez egy személyes repository, nem közös fejlesztésre szánt projekt. Észrevételeket a kapcsolatfelvételi űrlapon keresztül szívesen fogadok, de külső pull requestek kezelése jelenleg nem része a munkafolyamatnak.

---

© 2026 mrzsomi. Minden jog fenntartva.
