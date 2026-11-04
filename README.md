# Aman Baby Care & Home Services — website

Bilingual (Arabic-first) Astro + Tailwind site. See `CLAUDE.md` for the rules and `src/config/site.ts` for business facts.

## Setup
```sh
npm install
cp .env.example .env            # fill in PUBLIC_SITE_URL and analytics IDs
npx playwright install chromium # for screenshots
```

## Commands
| Command | Action |
| --- | --- |
| `npm run dev` | Dev server at http://localhost:4321 (`/` English, `/ar/` Arabic) |
| `npm run build` | Static build to `dist/` |
| `npm run preview` | Preview the build |
| `node scripts/screenshot.mjs <url> <label>` | 375px + 1440px screenshots into `screenshots/` |
