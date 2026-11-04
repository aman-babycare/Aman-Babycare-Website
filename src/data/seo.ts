// Keyword map: each page's title (≤60 chars), meta description (≤155), H1 and keyword anchor text.
//
// Research summary (Google Trends, Saudi Arabia, last 12 months; client brief of 30 Oct 2026):
// - Saudis search for household workers (عاملة منزلية، عاملات بالساعة), not for "care services".
// - "شركة تنظيف" means specialist deep cleaning (tanks, sofas, AC). That is not what Aman does, so it is
//   never targeted; Aman is everyday home help.
// - Babysitting, elderly, newborn and pet terms have low volume but high intent: they get focused pages.
// - Expats search "maid riyadh", not "nanny riyadh" or "babysitter riyadh", so English titles lead with "maid".
// - Hourly-help searches peak just before Ramadan and the Eids (blog and offer timing follow this).
//
// Two keyword sets:
// - "care" (default): care and home-help wording.
// - "worker": household-worker wording, used only when business.domesticWorkerKeywords is true, i.e. once
//   the client confirms the CR/licence covers supplying hourly/monthly domestic workers.
// A value written as { care, worker } switches with the mode; a plain value is used in both modes.
// Always «عاملة منزلية», never «خادمة». REVIEW-AR: all Arabic below.
import type { Locale } from '../config/site';
import type { L } from '../i18n/ui';
import { business } from './business';

export type KeywordMode = 'care' | 'worker';
export const keywordMode: KeywordMode = business.domesticWorkerKeywords ? 'worker' : 'care';
export const workerMode = keywordMode === 'worker';

export type Moded<T> = T | { care: T; worker: T };
const isModed = <T>(v: Moded<T>): v is { care: T; worker: T } => typeof v === 'object' && v !== null && 'care' in v && 'worker' in v;
/** The value for the current keyword mode. */
export const moded = <T>(v: Moded<T>): T => (isModed(v) ? v[keywordMode] : v);
/** Shorthand: a moded string pair in one language. */
export const tr = (v: Moded<L>, lang: Locale) => moded(v)[lang];

export interface PageSeo {
  title: Moded<L>;
  description: Moded<L>;
  h1: Moded<L>;
  /** Keyword-led link text other pages use when they link here. */
  anchor?: Moded<L>;
}

export const seo = {
  home: {
    title: {
      care: { ar: 'رعاية الأطفال والخدمات المنزلية في الرياض | أمان', en: 'Aman Babycare & Home Services | Riyadh Home Care' },
      worker: { ar: 'عاملات بالساعة ورعاية أطفال في الرياض | أمان', en: 'Aman Babycare & Home Services | Riyadh Home Care' },
    },
    description: {
      care: {
        ar: 'رعاية أطفال ومواليد، وتنظيف المنزل، ومرافقة كبار السن في الرياض، بالساعة أو بالشهر، مع فريق خضع للتحقق من الخلفية. احجزوا عبر واتساب.',
        en: 'Hourly and monthly maids, nannies, newborn care and elderly companionship across Riyadh. Background-checked team. Book on WhatsApp.',
      },
      worker: {
        ar: 'عاملات منزليات بالساعة وبالشهر، وجليسات أطفال، ومرافقة كبار السن في الرياض. فريق خضع للتحقق من الخلفية. احجزوا عبر واتساب.',
        en: 'Hourly and monthly maids, nannies, newborn care and elderly companionship across Riyadh. Background-checked team. Book on WhatsApp.',
      },
    },
    // The home H1 keeps the emotional promise; the keyword line sits under it (HomePage.astro).
    h1: { ar: 'يدٌ أمينة في بيتكم، لكل من تحبون', en: 'A trusted pair of hands at home, for everyone you love' },
  },
  services: {
    title: {
      care: { ar: 'خدمات منزلية في الرياض: أطفال وتنظيف وكبار السن | أمان', en: 'Home Services in Riyadh: Maid, Nanny & Care | Aman' },
      worker: { ar: 'عاملات بالساعة وخدمات منزلية في الرياض | أمان', en: 'Home Services in Riyadh: Maid, Nanny & Care | Aman' },
    },
    description: {
      care: {
        ar: 'خدمات منزلية في الرياض: جليسة أطفال، رعاية المولود والأم، تنظيف المنزل بالساعة، مرافقة كبار السن، ورعاية القطط والكلاب. احجزوا عبر واتساب.',
        en: 'Home services in Riyadh: babysitters and nannies, newborn care, hourly home cleaning, elderly companionship and pet sitting. Book on WhatsApp.',
      },
      worker: {
        ar: 'عاملات بالساعة وخدمات منزلية في الرياض: جليسة أطفال، رعاية المولود، تنظيف المنزل، ومرافقة كبار السن. احجزوا عبر واتساب.',
        en: 'Home services in Riyadh: babysitters and nannies, newborn care, hourly home cleaning, elderly companionship and pet sitting. Book on WhatsApp.',
      },
    },
    h1: {
      care: { ar: 'خدمات منزلية في الرياض', en: 'Home Services in Riyadh' },
      worker: { ar: 'عاملات بالساعة وخدمات منزلية في الرياض', en: 'Home Services in Riyadh' },
    },
  },
  packages: {
    title: {
      care: { ar: 'باقات وأسعار رعاية الأطفال والخدمات المنزلية | أمان', en: 'Hourly & Monthly Maid and Nanny Packages | Aman' },
      worker: { ar: 'أسعار عاملات بالساعة وبالشهر في الرياض | أمان', en: 'Hourly & Monthly Maid and Nanny Packages | Aman' },
    },
    description: {
      care: {
        ar: 'باقات رعاية بالساعة أو بالشهر في الرياض: جليسة أطفال، مربية مقيمة، ومرافقة كبار السن، مع أسعار واضحة وحجز عبر واتساب.',
        en: 'Hourly, weekly and monthly nanny, live-in and elderly companionship packages in Riyadh, with clear prices and booking on WhatsApp.',
      },
      worker: {
        ar: 'عاملة منزلية بالساعة أو بالشهر في الرياض: باقات رعاية الأطفال والإقامة ومرافقة كبار السن، بأسعار واضحة وحجز عبر واتساب.',
        en: 'Hourly, weekly and monthly nanny, live-in and elderly companionship packages in Riyadh, with clear prices and booking on WhatsApp.',
      },
    },
    h1: {
      care: { ar: 'باقات رعاية الأطفال والخدمات المنزلية في الرياض', en: 'Nanny & Home Help Packages in Riyadh' },
      worker: { ar: 'باقات عاملات منزليات بالساعة وبالشهر في الرياض', en: 'Nanny & Home Help Packages in Riyadh' },
    },
  },

  // Service pages. Slugs stay as they are (same English slug in both languages).
  'newborn-care': {
    title: { ar: 'رعاية المولود والأم في المنزل بالرياض | أمان', en: 'Newborn & Mother Care at Home in Riyadh | Aman' },
    description: {
      ar: 'رعاية المولود والأم في المنزل بالرياض بعد الولادة وفي فترة النفاس: استحمام المولود، تجهيز الرضّاعات، النوم، وراحة الأم. احجزوا عبر واتساب.',
      en: 'Newborn and mother care at home in Riyadh: bathing, bottles, sleep and rest for mum in the weeks after birth. Day, night or live-in. Book on WhatsApp.',
    },
    h1: { ar: 'رعاية المولود والأم في المنزل بالرياض', en: 'Newborn & Mother Care at Home in Riyadh' },
    anchor: { ar: 'رعاية المولود والأم في المنزل', en: 'Newborn and mother care at home' },
  },
  babysitting: {
    title: { ar: 'جليسة أطفال ومربية أطفال في المنزل بالرياض | أمان', en: 'Babysitter & Nanny at Home in Riyadh | Aman' },
    description: {
      ar: 'جليسة أطفال في المنزل بالرياض، بالساعة أو بخطة شهرية، أو مربية أطفال مقيمة. فريق خضع للتحقق من الخلفية. احجزوا عبر واتساب.',
      en: 'A babysitter or nanny at home in Riyadh, by the hour or on a monthly plan, live-in or live-out. Background-checked team. Book on WhatsApp.',
    },
    h1: { ar: 'جليسة أطفال في المنزل بالرياض', en: 'Babysitter & Nanny at Home in Riyadh' },
    anchor: { ar: 'جليسة أطفال بالساعة', en: 'Babysitter by the hour' },
  },
  'elderly-companionship': {
    title: { ar: 'مرافقة كبار السن في المنزل بالرياض | أمان', en: 'Elderly Companionship at Home in Riyadh | Aman' },
    description: {
      ar: 'مرافقة كبار السن في المنزل بالرياض: صحبة يومية، ووجبات خفيفة، ومرافقة الوالدين إلى مواعيدهم. خدمة غير طبية، بالساعة أو بالشهر. احجزوا عبر واتساب.',
      en: 'Elderly companionship at home in Riyadh: daily company, light meals and someone by their side at appointments. Non-medical. Book on WhatsApp.',
    },
    h1: { ar: 'مرافقة كبار السن في المنزل بالرياض', en: 'Elderly Companionship at Home in Riyadh' },
    anchor: { ar: 'مرافقة كبار السن في المنزل', en: 'Elderly companionship at home' },
  },
  'home-cleaning': {
    title: {
      care: { ar: 'تنظيف وترتيب المنزل بالساعة في الرياض | أمان', en: 'Hourly Maid & Home Cleaning in Riyadh | Aman' },
      worker: { ar: 'عاملات نظافة بالساعة في الرياض | أمان', en: 'Hourly Maid & Home Cleaning in Riyadh | Aman' },
    },
    description: {
      care: {
        ar: 'تنظيف وترتيب المنزل بالساعة في الرياض: تنظيف شقق وفلل، المطبخ ودورات المياه، وتجهيز البيت قبل الضيوف. احجزوا عبر واتساب.',
        en: 'An hourly maid for everyday home cleaning in Riyadh: apartments and villas, kitchens, bathrooms and a tidy home before guests. Book on WhatsApp.',
      },
      worker: {
        ar: 'عاملات نظافة بالساعة في الرياض: عاملة منزلية بالساعة لتنظيف الشقق والفلل وترتيب البيت قبل الضيوف. احجزوا عبر واتساب.',
        en: 'An hourly maid for everyday home cleaning in Riyadh: apartments and villas, kitchens, bathrooms and a tidy home before guests. Book on WhatsApp.',
      },
    },
    h1: {
      care: { ar: 'تنظيف وترتيب المنزل بالساعة في الرياض', en: 'Hourly Maid & Home Cleaning in Riyadh' },
      worker: { ar: 'عاملات نظافة بالساعة في الرياض', en: 'Hourly Maid & Home Cleaning in Riyadh' },
    },
    anchor: {
      care: { ar: 'تنظيف المنزل بالساعة', en: 'Hourly home cleaning' },
      worker: { ar: 'عاملة نظافة بالساعة', en: 'Hourly maid for cleaning' },
    },
  },
  errands: {
    title: { ar: 'مساعدة شخصية ومقاضي البيت في الرياض | أمان', en: 'Errands & Personal Assistance in Riyadh | Aman' },
    description: {
      ar: 'مساعدة شخصية ومقاضي البيت في الرياض: تسوق البقالة، استلام الطلبات، وترتيب المخزن وتجهيزات العيد. احجزوا بالساعة عبر واتساب.',
      en: 'Errands and personal assistance in Riyadh: grocery shopping, collecting orders, sorting the pantry and getting ready for Eid. Book on WhatsApp.',
    },
    h1: { ar: 'مساعدة شخصية ومقاضي البيت في الرياض', en: 'Errands & Personal Assistance in Riyadh' },
    anchor: { ar: 'مساعدة في مقاضي البيت', en: 'Help with errands and groceries' },
  },
  // TODO(client): do caregivers drive? Until confirmed: accompanying the child only, no driver wording.
  'pick-up-drop-off': {
    title: { ar: 'مرافقة الأطفال في مشاوير المدرسة بالرياض | أمان', en: 'School & Family Pick-up and Drop-off in Riyadh | Aman' },
    description: {
      ar: 'مرافقة الأطفال في مشاوير المدرسة والنادي بالرياض: شخص موثوق يستلم طفلكم ويرافقه ويسلّمه، مع رسالة عند كل وصول. احجزوا عبر واتساب.',
      en: 'School and family pick-up and drop-off in Riyadh: a trusted caregiver collects your child, stays by their side and messages you on arrival.',
    },
    h1: { ar: 'مرافقة الأطفال في مشاوير المدرسة بالرياض', en: 'School & Family Pick-up and Drop-off in Riyadh' },
    anchor: { ar: 'مرافقة الأطفال إلى المدرسة', en: 'School pick-up and drop-off' },
  },
  'pet-sitting': {
    title: { ar: 'رعاية القطط والكلاب في المنزل بالرياض | أمان', en: 'Cat & Dog Sitting at Home in Riyadh | Aman' },
    description: {
      ar: 'رعاية القطط والكلاب في المنزل بالرياض أثناء سفركم أو انشغالكم: إطعام، ولعب، وتنظيف، وصور على واتساب. احجزوا عبر واتساب.',
      en: 'Cat and dog sitting at home in Riyadh while you travel or work: feeding, play, a clean litter box and photos on WhatsApp. Book on WhatsApp.',
    },
    h1: { ar: 'رعاية القطط والكلاب في المنزل بالرياض', en: 'Cat & Dog Sitting at Home in Riyadh' },
    anchor: { ar: 'رعاية القطط والكلاب في المنزل', en: 'Cat and dog sitting at home' },
  },
  'night-nanny': {
    title: { ar: 'مربية ليلية للمولود في الرياض | أمان', en: 'Night Nanny for Newborns in Riyadh | Aman' },
    description: {
      ar: 'مربية ليلية للمولود في الرياض من 8 مساءً حتى 8 صباحاً: تهدئة ونوم، ومساعدة في الرضعات حسب تعليمات الأم، لتنام العائلة. احجزوا عبر واتساب.',
      en: "A night nanny for your newborn in Riyadh, 8pm to 8am: settling, sleep and feeds by mum's instructions, so you can rest. Book on WhatsApp.",
    },
    h1: { ar: 'مربية ليلية للمولود في الرياض', en: 'Night Nanny for Newborns in Riyadh' },
    anchor: { ar: 'مربية ليلية للمولود', en: 'Night nanny for newborns' },
  },
  'live-in-nanny': {
    title: { ar: 'مربية مقيمة في الرياض | أمان', en: 'Live-in Nanny in Riyadh | Aman' },
    description: {
      ar: 'مربية مقيمة في الرياض تعيش مع عائلتكم وتعمل 12 ساعة يومياً، أو مربية تأتي وتعود يومياً. قارنوا بين الخيارين واحجزوا عبر واتساب.',
      en: 'A live-in nanny in Riyadh who stays with your family and works 12 hours a day, or a live-out nanny. Compare both and book on WhatsApp.',
    },
    h1: { ar: 'مربية مقيمة في الرياض', en: 'Live-in Nanny in Riyadh' },
    anchor: { ar: 'مربية مقيمة', en: 'Live-in nanny' },
  },
  '40-days': {
    title: { ar: 'باقة الأربعين: رعاية الأم والمولود في الرياض | أمان', en: 'The 40-Day Package: Mother & Newborn Care | Aman' },
    description: {
      ar: 'باقة الأربعين في الرياض: رعاية الأم والمولود في البيت طوال فترة النفاس، نهاراً أو ليلاً أو بالإقامة. احجزوا عبر واتساب.',
      en: 'The 40-day package in Riyadh: care for mother and newborn at home through the weeks after birth, by day, night or live-in. Book on WhatsApp.',
    },
    h1: { ar: 'باقة الأربعين: رعاية الأم والمولود', en: 'The 40-Day Package: Mother & Newborn Care' },
  },
} satisfies Record<string, PageSeo>;

export type SeoKey = keyof typeof seo;
export const pageSeo = (key: SeoKey): PageSeo => seo[key];

/** Keyword anchor for links to a service page, falling back to the service name. */
export const anchorFor = (slug: string, lang: Locale, fallback: string) => {
  const entry = (seo as Record<string, PageSeo>)[slug];
  return entry?.anchor ? tr(entry.anchor, lang) : fallback;
};

// Under the home H1.
export const homeKeywordLine: Moded<L> = {
  care: { ar: 'رعاية أطفال وخدمات منزلية مرنة بالساعة أو بالشهر في الرياض', en: 'Hourly & monthly maids, nannies and home help in Riyadh' },
  worker: { ar: 'عاملات بالساعة وبالشهر، وجليسات أطفال، وخدمات منزلية في الرياض', en: 'Hourly & monthly maids, nannies and home help in Riyadh' },
};

// Packages page H2.
export const packagesKeywordH2: Moded<L> = {
  care: { ar: 'رعاية بالساعة أو بالشهر', en: 'Hourly or Monthly Maid & Nanny Plans' },
  worker: { ar: 'عاملة منزلية بالساعة أو بالشهر', en: 'Hourly or Monthly Maid & Nanny Plans' },
};
