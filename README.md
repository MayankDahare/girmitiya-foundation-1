# Girmitiya Foundation — Homepage

A pixel-fidelity React implementation of the approved Girmitiya Foundation
homepage design (screenshot-driven build). Built as a frontend for a future
MERN stack (Node/Express/MongoDB) so it can later plug into a CMS, dynamic
programs, blog, gallery, and donation/contact APIs.

## Tech stack

- React 19 + JavaScript
- Vite 8
- Tailwind CSS v4 (CSS-first `@theme` tokens, no `tailwind.config.js` needed)
- Framer Motion (subtle entrance/reveal animation, respects `prefers-reduced-motion`)
- lucide-react (icon set)

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/
    Navbar/       Sticky/transparent-over-hero nav with mobile menu
    Hero/         "Reconnecting Generations With Their Roots" hero + pillar icons
    Intro/        "Welcome to Girmitiya Foundation" section + seal
    Programs/     "What We Do" 6-card grid
    ProgramCard/  Reusable card used by Programs
    Impact/       Statistics band with count-up animation (Counter.jsx)
    GlobalFamily/ World map + diaspora country markers
    Gallery/      "Greetings Message" scrollable document gallery
    CTA/          "Be a Part of This Journey" band
    Footer/       4-column footer, contact info, social links, map
  data/
    homepage.js   All copy/content and nav/footer link arrays (data-driven)
  assets/
    images/       Section imagery (placeholders — see below)
    logos/        Foundation logo + seal (placeholders — see below)
    documents/    Greeting message scans (placeholders — see below)
  pages/Home/     Assembles all sections in the approved order
  App.jsx
  main.jsx
  index.css       Design tokens (@theme) + global styles
```

## Assets that need to be replaced with real files

Every image in `src/assets/` is currently a labeled SVG placeholder sized to
the same aspect ratio as the approved design, so you can drop in the real
files without touching any component code — just keep the same filename and
extension, or update the `import` path in the relevant component.

| Placeholder path | Replace with | Approx. size |
|---|---|---|
| `assets/logos/foundation-logo.svg` | Official circular logo mark | 200×200 |
| `assets/logos/foundation-seal.svg` | "Reconnect to your roots" emblem/seal | 400×400 |
| `assets/images/hero.svg` | Ship + Fiji High Commission ceremony photo | 1920×900 |
| `assets/images/program-social-welfare.svg` | Social Welfare program photo | 600×450 |
| `assets/images/program-education.svg` | Education & Skill program photo | 600×450 |
| `assets/images/program-women.svg` | Women Empowerment program photo | 600×450 |
| `assets/images/program-health.svg` | Children & Health program photo | 600×450 |
| `assets/images/program-culture.svg` | Culture & Literature program photo | 600×450 |
| `assets/images/program-ancestral.svg` | Ancestral Connection program photo | 600×450 |
| `assets/images/world-map.svg` | World map graphic for the diaspora section | 900×500 |
| `assets/images/cta-hands.svg` | Hands-together photo for the CTA band | 600×500 |
| `assets/images/footer-map.svg` | Static map/embed for the office location | 400×200 |
| `assets/documents/greeting-01.svg` … `greeting-06.svg` | Scanned greeting letters | 420×560 |

None of the statistics, program descriptions, contact details, or navigation
labels are placeholders — that copy was transcribed directly from the
approved design and is wired through `src/data/homepage.js`.

## Notes on fidelity choices

- Colors, type pairing (Playfair Display for headings / Inter for body),
  section order, card layout, and copy all follow the supplied design
  image directly — no new sections or redesign decisions were introduced.
- The world map markers, greeting gallery, and stat counters are built as
  data-driven, so they're easy to wire up to a future CMS/API without
  touching layout code.
- Animations are limited to entrance reveals, hover states, and the counter
  count-up, matching what the static design implies; `prefers-reduced-motion`
  disables all of it.

## Next steps toward the MERN stack

- `src/data/homepage.js` is the seam to swap for API calls (e.g. `GET /api/programs`,
  `GET /api/greetings`, `GET /api/stats`) once the Express/MongoDB backend exists.
- The Donate/Contact CTAs are wired to in-page anchors (`#donate`, `#contact`) —
  point them at real routes/forms once those pages exist.
