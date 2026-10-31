# Contact details

All business facts live in `src/content-data/business.json` (read through `src/data/business.ts`, edited from the admin panel) (site settings such as `isLive` stay in `src/config/site.ts`).

| Fact | Status |
| --- | --- |
| Brand | **Set**: "Aman Babycare & Home Services" (always "Babycare", one word) / «أمان لرعاية المواليد والخدمات المنزلية». |
| Legal name, CR number | **Set**, from the CR certificate in `brand_assets/Certifications and business docs/`. |
| WhatsApp number | **Set** in `whatsapp`. Any format works (spaces and `+` are stripped). |
| Booking hours | **Set**: 08:00–20:00 (office hours, not service hours). |
| Area served, caregiver languages | **Set**: Riyadh; English and basic Arabic. |
| Phone | **Set**: +966 59 500 2539 (same as WhatsApp). "Call us" links in the header (desktop), footer and Contact page use `telUrl()`. |
| Email, privacy email, address | Placeholders (`[EMAIL]` etc.), hidden from the UI until set. |
| business.sa badge | `businessSaBadge: null`; the footer shows it once set. |
| Social links | Empty; icons only render when a URL is set. |
