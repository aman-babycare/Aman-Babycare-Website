// Home page FAQ (general questions; service-specific ones live in services.ts).
// The home page shows the first HOME_FAQ_COUNT questions; order them by importance.
// REVIEW-AR: Arabic is a first draft.
import type { L } from '../i18n/ui';
import { business } from './business';

export const homeFaq: { q: L; a: L }[] = [
  {
    q: { ar: 'في أي مناطق تقدمون خدماتكم؟', en: 'Which areas do you cover?' },
    a: {
      ar: 'نخدم العائلات في الرياض. أرسلوا لنا الحي على واتساب ونؤكد لكم التوفر.',
      en: 'We serve families in Riyadh. Send us your neighbourhood on WhatsApp and we will confirm availability.',
    },
  },
  {
    q: { ar: 'كيف أحجز؟', en: 'How do I book?' },
    a: {
      ar: 'كل الحجوزات عبر واتساب: أخبرونا بالخدمة والموعد، ونؤكد لكم فريق الرعاية والسعر.',
      en: 'All bookings happen on WhatsApp: tell us the service and time, and we confirm the caregiver and price.',
    },
  },
  {
    q: { ar: 'هل الأفضل الحجز بالساعة أم بالشهر؟', en: 'Is it better to book hourly or monthly?' },
    a: {
      ar: 'الحجز بالساعة يناسب حاجة عابرة: مناسبة، أو مشوار، أو يوم تنظيف قبل الضيوف. والخطة الشهرية تناسب من يحتاج رعاية أو مساعدة ثابتة كل أسبوع، مع الشخص نفسه وبسعر أقل للساعة.',
      en: 'Hourly suits a one-off: an occasion, an errand, or a clean before guests. A monthly plan suits regular care or help every week, with the same person and a lower hourly rate.',
    },
  },
  {
    q: { ar: 'هل يمكن لشخص واحد من فريق الرعاية تقديم أكثر من خدمة؟', en: 'Can one caregiver do more than one service?' },
    a: {
      ar: 'نعم، هذا ما يميز أمان. يمكن جمع رعاية الأطفال مع ترتيب البيت مثلاً، حسب حجم العمل. اختاروا خدماتكم في «احجزوا خدمتكم» لتروا ذلك.',
      en: 'Yes, that is what makes Aman different. For example, babysitting can be combined with light housework, depending on the workload. Pick your services in Book Your Service to see how.',
    },
  },
  {
    q: { ar: 'ما اللغات التي يتحدثها مقدّمو الرعاية؟', en: 'What languages do your caregivers speak?' },
    a: {
      ar: `مقدّمو الرعاية يتحدثون ${business.languages.ar}.`,
      en: `Caregivers speak ${business.languages.en}.`,
    },
  },
  {
    q: { ar: 'هل فريقكم موثوق؟', en: 'Can I trust your team?' },
    a: {
      ar: 'كل فرد في الفريق يخضع للتحقق من الخلفية قبل العمل مع أي عائلة.',
      en: 'Everyone on the team is background-checked before working with any family.',
    },
  },
  {
    q: { ar: 'هل أسعار الباقات نهائية؟', en: 'Are the package prices final?' },
    a: {
      // REVIEW-AR
      ar: 'نعم، الأسعار المعروضة هي أسعارنا الحالية. نؤكد معكم تفاصيل الحجز والإجمالي على واتساب قبل البدء.',
      en: 'Yes, the prices shown are our current prices. We confirm the booking details and total with you on WhatsApp before you start.',
    },
  },
];

export const HOME_FAQ_COUNT = 5;
// The nationality question appears only once business.ts answers it (TODO(client)).
const nationality = business.caregiverNationalityChoice;
export const homeFaqShown = [
  ...homeFaq.slice(0, HOME_FAQ_COUNT),
  ...(nationality ? [{ q: { ar: 'هل يمكن اختيار جنسية مقدّم/ة الرعاية؟', en: "Can we choose the caregiver's nationality?" }, a: nationality }] : []),
];
