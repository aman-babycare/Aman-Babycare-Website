# CLAUDE.md — Aman Babycare & Home Services Website

## Project
Bilingual (Arabic-first) marketing website for "Aman Babycare & Home Services" (أمان لرعاية المواليد والخدمات المنزلية), a home-care company in Riyadh, KSA.
Goal: rank on Google for Riyadh home-care searches and turn visitors into WhatsApp bookings.
Status: **live** at https://amancareservices.com and indexed by search engines (since Nov 2026). Every push to `main` deploys to production (`.github/workflows/deploy.yml`), so `npm run build`, `npm test` and `npm run seo-check` must pass before pushing. Mark later work with `// PHASE 2`.

## Always Do First
- Read `src/content-data/business.json` (all business facts, read through `src/data/business.ts`), `src/config/site.ts` (site settings) and this file before any change.
- Do not start any design work until the `frontend-design` skill is installed and activated. Invoke it before writing UI code.
- Check `brand_assets/` for logo, colors, and images. Use real assets over placeholders. Style references live in `brand_assets/references/`.
- Read the matching rules file in `docs/build/` (index: `docs/build/README.md`) before working on that area: design system, brand/logo, culture & copy, imagery, services, service pages, packages, offers, header, engagement, visual QA, contact details.

## Stack (do not change)
- Astro (static output) + Tailwind CSS (installed via npm, never the CDN script) + TypeScript.
- Astro i18n: `en` default at `/` (client request, first impression in English), `ar` at `/ar/`. Same English slugs in both languages.
- Fonts self-hosted with @fontsource: IBM Plex Sans Arabic (Arabic), a serif display + clean sans for English headings/body. Preload the main Arabic weight only.
- Images through Astro `<Image>` / `<Picture>` (AVIF/WebP), with width/height set.
- Ship zero JavaScript by default. Use small islands only where interaction is needed (menu, Book Your Service card, cookie banner).
- Host: Cloudflare Pages.

## Business Facts (never invent)
- Every fact comes from `src/content-data/business.json` (via `src/data/business.ts`). Unknown values stay empty (`""`, e.g. the address and social links) or as placeholders like `[PHONE]`, `[PRICE]` in the data, but are never rendered raw: hide the line or show words such as "Price on WhatsApp".
- Do NOT write: licensed, certified, nurse, nursing, medical, hospital-grade, MOH, 24/7, "500+ families", or any number/credential not in `business.ts`.
- Prices come only from `src/content-data/pricing.json`, pricing rules from `src/data/pricing.ts` (engine: `src/lib/pricing.ts`, `npm test`); offers from `src/content-data/offers.json`. Everything in `src/content-data/` is edited by the admin panel (separate project in `../The admin panel`) and must keep matching `src/lib/content-schema.ts`; change the schema in both projects together. Prices are live (client confirmed, Nov 2026; `draft: false` on every service); a service set back to draft in the admin shows a "Draft prices" note. Missing numbers stay `null` + `TODO(client)` and show "Price on WhatsApp".
- Allowed trust claim: staff are background-checked.
- Never invent reviews, testimonials, ratings, or star icons. Only real, consented reviews go in `src/data/reviews.ts`; the Reviews section shows once 3+ have `consent: true`. Until then the honest "Be among our first families" block carries the page.
- No Review or AggregateRating schema.

## Services (one caregiver can combine several; sold as bundles)
Main: Babysitting, Home Cleaning, Elderly Companionship, Dog & Cat Sitting, Pick-up & Drop-off, Errands & Personal Assistance.
Newborn & Mother Care (one combined page at /services/newborn-care/, featured first): Newborn Care at Home, Feeding Support, Baby Bathing & Hygiene, Sleep & Comfort, Mother & Baby Support, Baby Shower & Welcoming Guests. Help and support only, never nursing or medical care. Personalized Care Plans live on the Packages page.

## SEO Rules (every page)
- One unique `<title>` (≤60 chars) and meta description (≤155 chars), in the page's language.
- Exactly one H1; H2/H3 in logical order; no repeated headings.
- Canonical URL, hreflang `ar` + `en` + `x-default` (→ English), Open Graph + Twitter tags with an image.
- JSON-LD: LocalBusiness on all pages; Service on service pages; FAQPage where an FAQ block exists; BreadcrumbList on inner pages.
- Internal links: every service page links to Packages, Book Your Service (`/packages/?service=<slug>#booking`), and 2–3 related services. No dead-end pages.
- Each page has unique content. Never duplicate a section across pages or within a page.
- Bilingual, descriptive alt text on every meaningful image; empty `alt=""` for decorative ones.
- Indexing: `site.isLive` comes from `PUBLIC_INDEXING`, set to `"true"` as a GitHub repo variable for the production build. Production is indexable (robots.txt allows all, sitemap listed); local, preview and any other build stay `noindex, nofollow` with a robots.txt that disallows all. The 404 page is always `noindex`. Never turn indexing off in production without the client's say.
- All canonical, hreflang, sitemap, Open Graph and JSON-LD URLs use the apex domain `https://amancareservices.com` (www redirects to it).
- Keep sitemap, robots.txt, and 404 working after every change.

## Arabic & RTL
- `<html lang="ar" dir="rtl">` for Arabic, `lang="en" dir="ltr"` for English.
- Use logical utilities only (`ms-`, `me-`, `ps-`, `pe-`, `start-`, `end-`, `text-start`). Never hard-code left/right.
- Flip directional icons (arrows, chevrons) in RTL.
- Arabic copy: natural Saudi-friendly Modern Standard Arabic, not word-for-word translation. Mark any machine-translated text with `<!-- REVIEW-AR -->`.
- Address visitors in the respectful plural (احجزوا، اسألونا); no singular imperatives. Use «مقدّم/ة الرعاية» or «فريق الرعاية» where the caregiver's gender is not specific.
- The language toggle links to the same page in the other language. No splash screen, no auto-redirect, no Google Translate.

## Culture & Imagery
- Modest imagery: women in hijab, Saudi/Gulf home interiors, no immodest clothing, no alcohol, no music or party imagery.
- Seasonal content (Ramadan, Eid al-Fitr, Eid al-Adha) is welcome. Do not add other religious occasions unless instructed. National occasions (Saudi Founding Day, Saudi National Day) and commercial ones (White Friday, back to school) are approved for offers.
- Warm, respectful, family-first tone.

## Conversion
- Sticky WhatsApp button on mobile; prefilled message per page and per language, built from `business.ts`.
- Above the fold: benefit headline, 3 trust points, one primary CTA.
- A CTA after every 2–3 sections on long pages.
- Forms (if any) need a PDPL consent checkbox linking to the privacy page.
- Analytics scripts (GA4, Meta, Snapchat) load only after cookie consent and only if their IDs are set. The IDs are GitHub repo variables (`PUBLIC_GA4_ID`, `PUBLIC_META_PIXEL_ID`, `PUBLIC_SNAP_PIXEL_ID`) read by `site.analytics`; never hard-code them.

## Design Guardrails
- Colors: only the brand tokens in `tailwind.config` (green primary, muted gold accent, cream base, soft pink tint + neutrals), matching the logo. Premium and minimalist: no gradients, no shiny gold. Never default Tailwind blue/indigo.
- Shadows: soft, layered, green-tinted, low opacity. No flat `shadow-md`.
- Type: headings tracking `-0.02em` (English only; never add letter-spacing to Arabic), body line-height 1.7 (1.8 for Arabic).
- Spacing: use a consistent scale (e.g. 4/8/12/16/24/32/48/64/96). No random values.
- Depth: base → elevated card → floating (sticky button, menu).
- Animation: only `transform` and `opacity`, gentle easing, respect `prefers-reduced-motion`. Never `transition-all`. No autoplay sliders or blocking popups.
- Images: keep photos bright and warm. Use overlays only behind text on hero images, never on service card photos.
- Every clickable element has hover, focus-visible, and active states. Tap targets ≥ 44px.

## Reference Designs
- A reference image or site guides style (colors, card shapes, spacing, mood), not structure.
- Do not copy duplicate sections, unverified claims, or fake reviews from any reference.

## Verify Before Saying Done
1. `npm run build` passes with no errors or warnings.
2. Run the dev server (`npm run dev`, http://localhost:4321) in the background; do not start a second instance.
3. Screenshot with `node scripts/screenshot.mjs <url> <label>` (Playwright; create the script if missing). Check mobile (375px), tablet (768px) and desktop (1440px), in Arabic and English. Screenshots are saved in `screenshots/` at the project root (gitignored); the client may ask to clear that folder at any time.
4. Read each screenshot and fix spacing, alignment, RTL mirroring, overflow, and contrast issues. Repeat the screenshot → review → fix loop until nothing is left to fix (minimum 2 rounds).
5. Run Lighthouse on mobile for the changed pages; target 95+ in Performance, Accessibility, Best Practices, and SEO.
6. Report what changed, what is still a placeholder, and any `REVIEW-AR` items.

## Commit After Every Change
Commit every change to the project as soon as `npm run build` passes, one commit per change, so any step can be undone on its own. Never batch several changes into one commit, and never leave work uncommitted at the end of a task.

1. Check what changed: `git status --short`.
2. Stage it: `git add -A`. Before committing, read the staged list; leave out secrets, `.env` files, and anything unrelated to the change (for example new files the client is still dropping into `brand_assets/`): `git restore --staged <path>`.
3. Commit with a one-line summary of what changed and why:
   `git commit -m "<Area>: <what changed>"` (e.g. `git commit -m "Packages: glass bar follows the scroll"`).
4. Confirm: `git log --oneline -1`.

## Hard Rules
- Never invent business facts, credentials, reviews, or statistics.
- Never use the Tailwind CDN or a single-file `index.html` build.
- Never break the Arabic/English page pairs or the hreflang links.
- Never hard-code left/right spacing.
- Never use `transition-all`.
