# Packages & pricing

Per-service prices, hourly rates and packages (schedule, price, card name and detail): `src/content-data/pricing.json`, the only place to edit a price, edited from the admin panel and checked against `src/lib/content-schema.ts` at build time. Global pricing rules (timings, weeks per month, VAT, multi-service rule) and the client decisions behind the JSON: `src/data/pricing.ts`. Engine: `src/lib/pricing.ts`, tested by `npm test`. The Packages page cards (`src/data/packages.ts`) are built from the same JSON.

- The structure is modelled on the client-supplied Valeo Riyadh babysitting page (https://feelvaleo.com/en-sa/riyadh/babysitting).
- **All prices are DRAFT** (`draft: true` on every service in `pricing.json`), copied from that page as a starting point. The client must confirm or replace them before `site.isLive` becomes true. While a service is draft, its package cards and any booking total that includes it say "Draft prices". `showPrice: false` on a service hides all its figures (cards, booking card, Service schema offers).
- Elderly plans are named **companionship**, never "care" or "nursing".
- Groups: On-demand (hourly, weekly), Monthly babysitting (5/6/7 days, stay-in), Monthly elderly companionship (5/6/7 days), Welcome offer.
- Currency: «ر.س» in Arabic, "SAR" in English. Prices use Western digits in both languages with thousands separators ("SAR 5,143" / "5,143 ر.س").
- No discount wording anywhere: no "save", "OFF", «خصم», strike-through. `SHOW_DISCOUNTS` in `src/config/site.ts` stays `false`. Tiered rates are shown as plain prices.
- Never label a package "most popular" (that's a claim). "Lowest hourly rate" is allowed only when the maths shows it.
- Never invent a price or rule. Anything missing is `null` + `TODO(client)`; the booking card then shows "Price on WhatsApp" / «السعر عبر واتساب» for that service only. Raw placeholders never reach the page.

## Pricing engine (Book Your Service)
1. Money is integer halalas; derived rates are exact fractions. Each line is rounded once, half-up, to a whole SAR. Total = sum of lines (+ a VAT line when `VAT_RATE` is set), under `MULTI_SERVICE_RULE` (`sum`, or `highestPlusAddon` with `ADDON_PERCENT`).
2. Rate per tier (one-time / weekly / monthly): `hourlyRateOverride[tier]`, else the tier's reference package with the most hours (price ÷ hours/day × days/week × weeks). A tier never borrows another tier's rate.
3. Exact match first: a selection equal to a reference package (tier, timing, hours/day, days/week, weeks, one person) is charged the listed price × periods.
4. Otherwise rate × hours/day × days, then in order: `timingPercent`, `extraPersonPercent` × (people − 1), `homeSizePercent`. A needed rule that is null makes the line unpriced. `minHours` raises short hourly bookings.
5. Hours/day: hourly = chosen hours; day shift 12; night 12; 24 hours 24; live-in 12; half/full day from `TIMINGS` (hidden while null). Days: one-time = days; weekly = days/week × weeks; monthly = days/week × `WEEKS_PER_MONTH` × months.

## Current draft rates (Oct 2026, client-approved)
| Service | One-time | Weekly | Monthly |
| --- | --- | --- | --- |
| Babysitting | 45 | 39.29 | 33.82 |
| Newborn care, Mother & baby support | 45 (babysitting rate) | 39.29 | 33.82 |
| Elderly companionship | 36 | Price on WhatsApp | 36 |
| Cleaning, Pets, Pick-up, Errands | Price on WhatsApp | Price on WhatsApp | Price on WhatsApp |

SAR per hour, from the Packages page's "From X SAR per hour" figures. Night shift, 24 hours and live-in are billed at the same hourly rate. The stay-in package (12 h × 6 days × 4 weeks, one child) is still an exact match at SAR 8,500 per month.

## TODO(client)
Hours per day for every reference package except stay-in; `minHours`; `extraPersonPercent` (extra child, baby, elder or pet: unpriced until set); `homeSizePercent`; half-day / full-day hours; live-in billable hours; `WEEKS_PER_MONTH`; `VAT_RATE`; `MULTI_SERVICE_RULE` and `ADDON_PERCENT`; own price lists for newborn care and mother & baby support; price lists for cleaning, pets, pick-up (and whether it's driving or accompanying; never "driver" wording) and errands. The reference "as low as" rates don't reconcile with the package prices (e.g. 6 days × 4 weeks at 33.82/hr × 12 h = 9,740 vs the 8,500 stay-in package), and weekly uses 39.29 although the 6-day plan lists 39.

## Page layout
- A glass-ribbon bar (`GlassRibbon`, `current="location"`) sticks under the nav with links to `#on-demand`, `#monthly`, `#elderly` and `#booking` (Book Your Service). All sections stay on the page; the glass follows the section you scroll through, and tapping an item scrolls to it (client request: not tabs).
- Book Your Service (`BookingCard.astro`): pick services, then one question per screen per service (config in `src/data/booking.ts`, logic in `src/lib/booking.ts`), then "Your Package" with each line's spec, calculation and price, and an estimated total. The WhatsApp message stays under 1,500 characters by shortening specs, never prices.
