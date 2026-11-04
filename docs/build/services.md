# Services

The site's services are the **"Other services"** block of `brand_assets/reference-homepage-mockup.jpeg`. Source of truth: `mainServices` in `src/config/site.ts`; page content in `src/data/services.ts`.

| Tier | Slug | English | Arabic |
| --- | --- | --- | --- |
| featured | `newborn-care` | Newborn & Mother Care | رعاية المواليد والأمهات |
| core | `babysitting` | Babysitting | رعاية الأطفال |
| core | `elderly-companionship` | Elderly Companionship | مرافقة كبار السن |
| core | `home-cleaning` | Home Cleaning | تنظيف المنازل |
| more | `errands` | Errands & Personal Assistance | المشتريات والمساعدة الشخصية |
| more | `pick-up-drop-off` | Pick-up & Drop-off | التوصيل والاستقبال |
| more | `pet-sitting` | Dog & Cat Sitting | رعاية الكلاب والقطط |
| (card only) | | And more | والمزيد → opens WhatsApp to ask |

- **Order and tiers are client-approved** (Oct 2026): the three core services lead as large cards; the other three sit in a smaller "More help at home" row (`tier` in `src/data/services.ts`). The mock-up's "Other services" row repeats "More services", so it is not built twice.
- Each service has its own page at `/services/<slug>/` (English) and `/ar/services/<slug>/`.
- One caregiver can combine several services; this is sold through bundles and the Book Your Service card.
- **Newborn & Mother Care** (client request, Oct 2026) is the mock-up's top "Newborn Care at Home" block: one combined page with its sub-services (newborn care at home, feeding support, baby bathing & hygiene, sleep & comfort, mother & baby support, baby shower & welcoming guests) listed in `subservices`. It shows as a wide featured card above the core row. Help and companionship only: never call it nursing, medical or clinical care.
