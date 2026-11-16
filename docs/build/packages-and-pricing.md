# Packages & pricing

Per-service prices, hourly rates and packages (schedule, price, card name and detail): `src/content-data/pricing.json`, the only place to edit a price, edited from the admin panel and checked against `src/lib/content-schema.ts` at build time. Global pricing rules (timings, weeks per month, VAT, multi-service rule) and the client decisions behind the JSON: `src/data/pricing.ts`. Engine: `src/lib/pricing.ts`, tested by `npm test`. The Packages page cards (`src/data/packages.ts`) are built from the same JSON.

- The structure is modelled on the client-supplied Valeo Riyadh babysitting page (https://feelvaleo.com/en-sa/riyadh/babysitting).
- **Prices are live** (Nov 2026, client confirmed with the site going live): `draft: false` on every service in `pricing.json`. A service can be set back to draft from the admin; while a service is draft, its package cards and any booking total that includes it say "Draft prices". `showPrice: false` on a service hides all its figures (cards, booking card, Service schema offers).
- Packages are added, edited, hidden (`active: false`: off the cards, the booking card and the Service schema) and deleted from the admin's Packages page. Optional `features` (up to six, Arabic + English) show as ticks under the card's detail.
- Elderly plans are named **companionship**, never "care" or "nursing".
- Groups: On-demand (hourly, weekly, pet sitting, cleaning), Newborn care (weekly, monthly, live-out), Monthly babysitting (5/6/7 days, stay-in), Monthly elderly companionship (5/6/7 days, live-in, live-out), Welcome offer.
- Currency: «ر.س» in Arabic, "SAR" in English. Prices use Western digits in both languages with thousands separators ("SAR 5,143" / "5,143 ر.س").
- No discount wording anywhere: no "save", "OFF", «خصم», strike-through. A strike-through (the package's regular price) and a "Save SAR" badge render only while a running offer in `offers.json` lists an offer price for that package (`prices`, below the regular price) and has a `discountLicence` (Ministry of Commerce discount licence number); the card then shows the offer price. The lowest such price wins. The schema rejects a real `discount` without a licence. The booking card applies the same offer prices (see the engine, step 6). Tiered rates are shown as plain prices.
- Never label a package "most popular" (that's a claim). "Lowest hourly rate" is allowed only when the maths shows it.
- Never invent a price or rule. Anything missing is `null` + `TODO(client)`; the booking card then shows "Price on WhatsApp" / «السعر عبر واتساب» for that service only. Raw placeholders never reach the page.

## Pricing engine (Book Your Service)
1. Money is integer halalas; derived rates are exact fractions. Each line is rounded once, half-up, to a whole SAR. Total = sum of lines (+ a VAT line when `VAT_RATE` is set), under `MULTI_SERVICE_RULE` (`sum`, or `highestPlusAddon` with `ADDON_PERCENT`).
2. Rate per tier (one-time / weekly / monthly): `hourlyRateOverride[tier]`, else the tier's reference package with the most hours (price ÷ hours/day × days/week × weeks). A tier never borrows another tier's rate.
3. Exact match first: a selection equal to a reference package (tier, timing, hours/day, days/week, weeks, one person) is charged the listed price × periods.
4. Otherwise rate × hours/day × days, then in order: `timingPercent`, `extraPersonPercent` × (people − 1), `homeSizePercent`. A needed rule that is null makes the line unpriced. `minHours` raises short hourly bookings.
6. Offers (running): a selection equal to a package with an offer price is charged the offer price; any other selection of the same service, tier and shift gets that package's percentage off (the deepest one if several). The card shows the regular price struck through, a gold "<offer> offer · save X%" badge, an "offer saving" row above the total, and the WhatsApp message says "SAR 280 (instead of SAR 320, White Friday)" plus the saving. The price sent to the admin is the offer price.
5. Hours/day: hourly = chosen hours; full day 8; day shift 12; night 12; 24 hours 24; live-in 12; half day from `TIMINGS` (hidden while null). Days: one-time = days; weekly = days/week × weeks; monthly = days/week × `WEEKS_PER_MONTH` × months.

## Current rates
| Service | One-time | Weekly | Monthly |
| --- | --- | --- | --- |
| Newborn care | 39 | 39 | 35 |
| Babysitting (follows newborn care) | 39 | 39 | 35 |
| Mother care (follows newborn care) | 39 | 39 | 35 |
| Elderly companionship | 39 | 39 | 39 |
| Dog & cat sitting | Price on WhatsApp | 40 | Price on WhatsApp |
| Home cleaning (apartment or villa) | 50 | 50 | Price on WhatsApp |
| Errands | 50 | Price on WhatsApp | Price on WhatsApp |

SAR per hour. Night shift, 24 hours and live-in are billed at the same hourly rate (client: "all is the same"). The packages are exact matches at their listed price. Pick-up & drop-off is off the website (client, Nov 2026). No VAT.

Client answers (Nov 2026), as entered in `pricing.json`:
- Newborn care: weekly 5 days × 8 h = 1,560; monthly 8 h a day with 4 days off a month = 7,280 (26 days × 8 h × 35; listed as 6 days × 4 weeks, the closest the schedule fields allow); live-out up to 12 h = 10,500 and live-in 12 h = 11,200 a month, both 7 days a week. Days off depend on the family and lower the price, agreed on WhatsApp.
- Babysitting follows the newborn prices: hourly 8 h = 312, weekly 5 days = 1,560, monthly 6 days = 7,280, live-out 10,500, live-in 11,200. Its 6-day weekly and 5-/7-day monthly plans had no newborn price and were taken off. Mother care has the newborn rates for the booking card and no packages.
- Elderly companionship: 39 an hour throughout. One day 8 h = 312; weekly 1,560 (8 h × 5), 2,808 (12 h × 6), 3,276 (12 h × 7); monthly 6,240 / 7,488 / 8,736 (8 h × 5 / 6 / 7 days), 9,360 (12 h × 5); live-out 10,500 and live-in 11,200 (12 h × 7 days, days off by agreement).
- Dog & cat sitting: 40 an hour, 6 h a day × 6 days = 1,440 a week. No hourly or single-visit price.
- Home cleaning: 50 an hour, the same for an apartment or a villa (`homeSizePercent` 0); 600 = 3 visits a week of 4 hours.
- Errands: 50 an hour.

A package with hours per day needs its `timing` (the shift those hours belong to): `full-day` for 8 hours, `day-shift` for 12, `hourly` for an hourly booking or a set number of hours (cleaning visits, pet sitting). `npm test` fails the build otherwise, because the booking card couldn't reproduce the listed price. The admin panel's Packages page picks the shift and checks this on save.

## TODO(client)
`extraPersonPercent` (extra child, baby, elder or pet: unpriced until set); newborn care minimum hours (8 kept); monthly prices for pets, cleaning and errands; weekly errands; newborn/babysitting 6-/7-day weekly and 5-/6-day monthly prices; half-day hours; live-in billable hours; `WEEKS_PER_MONTH`; `MULTI_SERVICE_RULE` and `ADDON_PERCENT`.

## Page layout
- A glass-ribbon bar (`GlassRibbon`, `current="location"`) sticks under the nav with links to `#on-demand`, `#newborn`, `#monthly`, `#elderly` and `#booking` (Book Your Service). All sections stay on the page; the glass follows the section you scroll through, and tapping an item scrolls to it (client request: not tabs).
- Book Your Service (`BookingCard.astro`): pick services, then one question per screen per service (config in `src/data/booking.ts`, logic in `src/lib/booking.ts`), then "Your Package" with each line's spec, calculation and price, and an estimated total. The WhatsApp message stays under 1,500 characters by shortening specs, never prices.
