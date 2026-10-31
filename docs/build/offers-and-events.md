# Offers & events

Data: `src/content-data/offers.json` (read through `src/data/offers.ts`, edited from the admin panel). Seasonal offers layer a discount on top of the packages.

## Calendar (from Oct 2026)
| Event | Arabic | Date | Type |
| --- | --- | --- | --- |
| White Friday | الجمعة البيضاء | late Nov 2026 | Commercial |
| Ramadan 1448 | رمضان | ~8 Feb 2027* | Religious |
| Saudi Founding Day | يوم التأسيس | 22 Feb | National |
| Eid al-Fitr | عيد الفطر | ~10 Mar 2027* | Religious |
| Eid al-Adha | عيد الأضحى | ~16 May 2027* | Religious |
| Back to school | العودة للمدارس | Aug | Commercial |
| Saudi National Day | اليوم الوطني | 23 Sep | National |

\* Hijri dates depend on moon sighting; always label them "expected".

## Rules
- Exactly one offer has `featured: true`. It shows in the announcement bar, the hero card and the offers panel. Switch it by moving the flag.
- Offers panel layout (client request, Oct 2026): notification-style bars, not big cards. The live (featured) offer is one compact bar with its photo, event, date, text, included services, countdown and CTA; a slim welcome-offer bar follows; then a "Coming soon" row of smaller bars (about half the height) that scrolls sideways at every width.
- `endsAt` (ISO date) drives the countdown. Once it has passed, the countdown hides itself.
- `startDate` (ISO date) is when an offer goes live and takes the `featured` flag. Set it before the event: Ramadan 2027 starts on 1 Feb, a week ahead, because hourly-help searches peak just before Ramadan and the Eids.
- Discounts stay `[DISCOUNT]` until the client sends real numbers.
- Motifs (SVG, brand colours): crescent for Ramadan & the Eids, palm for Founding/National Day, tag for White Friday, pencil for back to school.
- No other religious occasions.
