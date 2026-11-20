# Services

The site's services are the **"Other services"** block of `brand_assets/reference-homepage-mockup.jpeg`. Source of truth: `mainServices` in `src/config/site.ts`; page content in `src/data/services.ts`.

| Tier | Slug | English | Arabic |
| --- | --- | --- | --- |
| featured | `newborn-care` | Newborn Care | رعاية المواليد |
| featured | `mother-care` | Mother Care | رعاية الأم |
| core | `babysitting` | Babysitting | رعاية الأطفال |
| core | `elderly-companionship` | Elderly Companionship | مرافقة كبار السن |
| core | `home-cleaning` | Home Cleaning | تنظيف المنازل |
| more | `errands` | Errands & Personal Assistance | المشتريات والمساعدة الشخصية |
| more | `pick-up-drop-off` | Pick-up & Drop-off (switched off, client Nov 2026) | التوصيل والاستقبال |
| more | `pet-sitting` | Dog & Cat Sitting | رعاية الكلاب والقطط |
| more | `medication-support` | Medication Support (client request, Nov 2026; priced on WhatsApp) | متابعة الأدوية |
| more | `personal-care` | Personal Care (Nov 2026; priced on WhatsApp) | العناية الشخصية |
| more | `health-monitoring` | Health Monitoring (Nov 2026; priced on WhatsApp) | متابعة الحالة الصحية |
| more | `meal-preparation` | Meal Preparation (Nov 2026; priced on WhatsApp) | تحضير الوجبات |
| more | `household-support` | Daily Household Support (Nov 2026; priced on WhatsApp) | المساعدة المنزلية اليومية |
| (card only) | | And more | والمزيد → opens WhatsApp to ask |

- **Order and tiers are client-approved** (Oct 2026): the three core services lead as large cards; the other three sit in a smaller "More help at home" row (`tier` in `src/data/services.ts`). The mock-up's "Other services" row repeats "More services", so it is not built twice.
- Each service has its own page at `/services/<slug>/` (English) and `/ar/services/<slug>/`.
- One caregiver can combine several services; this is sold through bundles and the Book Your Service card.
- **Newborn Care and Mother Care** are two separate services (client request, Nov 2026; until then one combined "Newborn & Mother Care" page). Each has its own page, wide featured card, booking-card service, price entry (`pricing.json`: `newborn-care`, `mother-care`) and job on the Careers page. Newborn Care covers the baby (care at home, feeding support, bathing & hygiene, sleep & comfort); Mother Care covers the mother (rest & recovery, help at feeding times, light meals, light housework, welcoming guests). Help and companionship only: never call either nursing, medical or clinical care.
