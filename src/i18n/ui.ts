// Shared interface strings. Page copy lives in src/data/.
import { getRelativeLocaleUrl } from 'astro:i18n';
import type { Locale } from '../config/site';

export type L = Record<Locale, string>;

/** Same-slug URL for a locale, e.g. href('en', 'services/babysitting') → /en/services/babysitting/ */
export const href = (lang: Locale, path = '') => getRelativeLocaleUrl(lang, path);

export const other = (lang: Locale): Locale => (lang === 'ar' ? 'en' : 'ar');

export const ui = {
  nav: {
    home: { ar: 'الرئيسية', en: 'Home' },
    services: { ar: 'الخدمات', en: 'Services' },
    packages: { ar: 'الباقات', en: 'Packages' },
    offers: { ar: 'العروض', en: 'Offers' },
    faq: { ar: 'الأسئلة الشائعة', en: 'FAQ' },
    privacy: { ar: 'سياسة الخصوصية', en: 'Privacy policy' },
    about: { ar: 'من نحن', en: 'About us' },
    aboutShort: { ar: 'من نحن', en: 'About' }, // nav ribbon, where space is tight
    contact: { ar: 'تواصلوا معنا', en: 'Contact' },
  },
  callUs: { ar: 'اتصلوا بنا', en: 'Call us' },
  langName: { ar: 'العربية', en: 'English' },
  switchTo: { ar: 'Switch to English', en: 'التبديل إلى العربية' },
  mainNav: { ar: 'التنقل الرئيسي', en: 'Main navigation' },
  bookWhatsApp: { ar: 'احجزوا عبر واتساب', en: 'Book on WhatsApp' },
  chatWhatsApp: { ar: 'تواصلوا معنا عبر واتساب', en: 'Chat with us on WhatsApp' },
  askPrice: { ar: 'اسألوا عن السعر', en: 'Ask for a price' },
  priceConfirmed: { ar: 'السعر يُؤكَّد على واتساب', en: 'Price confirmed on WhatsApp' }, // REVIEW-AR
  viewOffer: { ar: 'تفاصيل العرض', en: 'See the offer' },
  seePackages: { ar: 'تصفّحوا الباقات', en: 'See packages' },
  learnMore: { ar: 'اعرفوا المزيد', en: 'Learn more' },
  breadcrumb: { ar: 'مسار التنقل', en: 'Breadcrumb' },
  sar: { ar: 'ر.س', en: 'SAR' },
  was: { ar: 'بدلاً من', en: 'was' },
  perHour: { ar: 'للساعة', en: 'per hour' },
  from: { ar: 'تبدأ من', en: 'From' },
  draftPrice: { ar: 'سعر مبدئي', en: 'Draft price' },
  endsIn: { ar: 'ينتهي خلال', en: 'Ends in' },
  days: { ar: 'يوم', en: 'days' },
  hours: { ar: 'ساعة', en: 'hrs' },
  minutes: { ar: 'دقيقة', en: 'min' },
  expected: { ar: 'متوقع', en: 'expected' },
  comingNext: { ar: 'قريباً', en: 'Coming soon' },
  footerServices: { ar: 'خدماتنا', en: 'Our services' },
  footerExplore: { ar: 'تصفّحوا', en: 'Explore' },
  footerContact: { ar: 'التواصل', en: 'Contact' },
  serving: { ar: 'نخدم العائلات في الرياض', en: 'Serving families in Riyadh' },
  rights: { ar: 'جميع الحقوق محفوظة', en: 'All rights reserved' },
} satisfies Record<string, L>;

/** Western digits with thousands separators in both languages (see docs/build/packages-and-pricing.md). */
export const money = (n: number) => n.toLocaleString('en-US', { maximumFractionDigits: 2 });
// Hourly rates: whole numbers stay whole, fractions always show two digits (35.70, not 35.7), as on the reference page.
export const rate = (n: number) =>
  n.toLocaleString('en-US', { minimumFractionDigits: Number.isInteger(n) ? 0 : 2, maximumFractionDigits: 2 });
