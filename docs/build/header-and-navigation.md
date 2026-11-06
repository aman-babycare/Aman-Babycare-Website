# Header & navigation

Self-contained component: `src/components/Header.astro`. The ribbon is `src/components/GlassRibbon.astro` (also used for the Packages tabs).

- Order: announcement bar (featured offer) → header.
- **Logo lockup** mirrors `brand_assets/Logo.png`: logo mark, the short name with a small gold heart, then "Babycare & Home Services" and the Arabic line. Text comes from `site.name` / `site.shortName`. Never show the short name alone.
- **Navigation is a glass ribbon, never a hidden menu** (client request, Oct 2026): Home · Services · **Offers** (middle, gold, so it stands out) · Packages · About (client request, Nov 2026: About replaced FAQ; FAQ moved to the footer). Only link pages that exist.
  - Phones and tablets: a 28px strip with the Arabic company name (when shown), the logo row, then the ribbon full width (icon over label). The header uses a negative sticky top, so the strip and logo row scroll away and only the ribbon stays stuck.
  - Desktop: one sticky row: logo, ribbon in the middle (icon beside label), language toggle, phone, then the Arabic company name in the slot the "Book on WhatsApp" button used to have (client request, Nov 2026). With the name on, the phone icon shows from 1280px (no room at 1024–1279px).
- **Company name**: `business.json` `headerName` { text, show }, edited in the admin (Business settings). Plex Arabic regular (already loaded on every page, so no extra font download), `lang="ar" dir="rtl"` on both languages. Hidden or blank renders nothing and the header stays complete.
  - The glass pill sits on the current page. It moves by `transform` only, with a short squish, and must always travel straight to the tapped item.
  - Tapping another page: the pill slides first (260ms), then the page changes. No cross-document View Transitions: they made the pill drop in from above and the page blink.
  - On the home page the pill follows the scroll through the matching sections (Services, Packages). While a tapped link is scrolling the page, scroll-follow is paused so the pill never detours.
  - Arriving on `/#offers` or `/#faq` from another page, an inline script places the pill before first paint.
- The language toggle links to the same page in the other language, with `hreflang` and `lang` set.
- Sticky WhatsApp button on mobile (floating level), prefilled per page and language. Hidden on desktop, which has no header WhatsApp button since Nov 2026; the hero and section CTAs carry WhatsApp there.
