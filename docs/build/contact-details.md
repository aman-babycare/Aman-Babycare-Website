# Contact details

All business facts live in `src/content-data/business.json` (read through `src/data/business.ts`, edited from the admin panel) (site settings stay in `src/config/site.ts`).

| Email, privacy email, address | Where they appear once set (hidden while they are placeholders) |
| --- | --- |
| `email` | Footer and Contact page (`mailto:` link); LocalBusiness JSON-LD `email` on every page. |
| `privacyEmail` | Privacy page: the "use your rights" line and the contact list (both languages). Requests go via WhatsApp until it is set. |
| `address.en` / `address.ar` | "Address" row of Company details on the About and Contact pages; LocalBusiness JSON-LD `address.streetAddress` on every page (city and country are always there). |

| Fact | Status |
| --- | --- |
| Brand | **Set**: "Aman Babycare & Home Services" (always "Babycare", one word) / «أمان لرعاية المواليد والخدمات المنزلية». |
| Legal name, CR number | **Set** from the CR certificate of 28/02/2026: «شركة هوسول ألمستقبل» (Arabic exactly as on the certificate), "Husool Almustaquil Company" (English as on the company stamp), CR 7053786815. Shown in the footer, About/Contact company details, Privacy (data controller) and LocalBusiness `legalName`/`identifier`. |
| Header company name | `headerName` { text, show }: «شركة هوسول ألمستقبل», shown. See header-and-navigation.md. |
| About company text | `aboutCompany` (AR/EN, multiline). Empty: nothing renders. When set, it shows at the top of the About page's company details. |
| Company stamp | `src/assets/company-stamp.png`, made by `scripts/process-stamp.mjs` from `brand_assets/stamp/company-stamp-source.jpg`; on the About page beside the H1, tilted −6°. |
| WhatsApp number | **Set** in `whatsapp`. Any format works (spaces and `+` are stripped). |
| Booking hours | **Set**: 08:00–20:00 (office hours, not service hours). |
| Area served, caregiver languages | **Set**: Riyadh; English and basic Arabic. |
| Phone | **Set**: +966 59 500 2539 (same as WhatsApp). "Call us" links in the header (desktop), footer and Contact page use `telUrl()`. |
| Email, privacy email | Placeholders (`[EMAIL]` etc.), hidden from the UI until set. |
| Address | `""` (AR/EN, multiline). Empty: no row, label or space anywhere and no `streetAddress`. When set: footer contact column, Contact and About company details, LocalBusiness `streetAddress`. |
| business.sa badge | `businessSaBadge: null`; the footer shows it once set. |
| Social links | `social` (Instagram, Facebook, X, Snapchat, TikTok, YouTube, LinkedIn), `""` until set in the admin. The schema only accepts https links on the platform's own domain. Footer and Contact show all 7 icons: inactive (muted, no href, `aria-disabled`) until set, then a normal link in a new tab. Only set links go into `sameAs`. |

Blank values and `[PLACEHOLDER]`s are both "not set" (`isPlaceholder()` in `src/config/site.ts`) and never render.
