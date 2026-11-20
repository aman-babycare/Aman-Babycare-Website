// Daily Household Support. Keyword: مساعدة منزلية يومية (secondary: مساعدة في أعمال البيت). Priced on
// WhatsApp: no pricing.json entry. The everyday running of the home; cleaning-focused visits are Home
// Cleaning. REVIEW-AR
import type { ServicePage } from '../services';
import { business } from '../business';

const { day } = business.shifts;

const page: ServicePage = {
  slug: 'household-support',
  tier: 'more',
  icon: 'hanger',
  intro: {
    title: { ar: 'يد ثابتة لأعمال البيت اليومية', en: 'A steady hand with the daily running of your home' },
    text: [
      {
        ar: 'مساعدة منزلية يومية في الرياض: شخص من فريق أمان يأتي إليكم في أيام ثابتة ليتولى روتين البيت: الغسيل والكوي، والأطباق، وترتيب الغرف، واستلام الطلبات، وسقي النباتات، وتحضير وجبة بسيطة، حتى يبقى البيت يسير بهدوء.',
        en: 'Daily household support in Riyadh: someone from the Aman team comes on set days to take care of the home\'s routine: laundry and ironing, dishes, tidying the rooms, receiving deliveries, watering the plants and making a simple meal, so the house keeps running calmly.',
      },
      {
        ar: 'الفرق عن تنظيف المنزل أن هذه الخدمة لا تقتصر على التنظيف: هي من يتابع ما يحتاجه البيت كل يوم، ويعرف أين يوضع كل شيء، ويخبركم بما ينقص.',
        en: "Unlike home cleaning, this isn't only about cleaning: it's someone who keeps up with what the home needs each day, knows where everything goes, and tells you what is running low.",
      },
    ],
  },
  who: {
    title: { ar: 'لمن تناسب المساعدة المنزلية اليومية؟', en: 'Who daily household support is for' },
    items: [
      {
        title: { ar: 'والدان يعملان', en: 'Two working parents' },
        text: { ar: 'البيت يحتاج متابعة يومية، والوقت لا يكفي.', en: "The house needs daily attention, and there isn't time." },
      },
      {
        title: { ar: 'عائلة كبيرة', en: 'A big family' },
        text: { ar: 'غسيل لا ينتهي وأطباق وغرف كثيرة.', en: 'Endless laundry, dishes and many rooms.' },
      },
      {
        title: { ar: 'كبار السن في بيتهم', en: 'Older parents in their own home' },
        text: { ar: 'يريدون البقاء في بيتهم، ويحتاجون من يساعدهم في أعماله.', en: 'They want to stay in their own home and need help keeping it running.' },
      },
    ],
  },
  included: {
    title: { ar: 'ما تشمله المساعدة المنزلية اليومية', en: 'What daily household support includes' },
    items: [
      { ar: 'الغسيل والكوي وترتيب الملابس في الخزائن', en: 'Laundry, ironing and putting clothes away' },
      { ar: 'غسل الأطباق وترتيب المطبخ', en: 'Washing up and keeping the kitchen in order' },
      { ar: 'ترتيب الغرف والأسرّة يومياً', en: 'Tidying rooms and making beds every day' },
      { ar: 'استلام الطلبات والتوصيلات', en: 'Receiving orders and deliveries' },
      { ar: 'سقي النباتات وإخراج النفايات', en: 'Watering plants and taking out the rubbish' },
      { ar: 'تحضير وجبة بسيطة أو مشروبات', en: 'Making a simple meal or drinks' },
      { ar: 'قائمة بما ينقص في البيت', en: 'A list of what the home is running low on' },
    ],
  },
  notIncluded: [
    { ar: 'التنظيف العميق الشامل: احجزوا له تنظيف المنزل', en: 'A full deep clean: book Home Cleaning for that' },
    { ar: 'الإصلاحات والصيانة', en: 'Repairs and maintenance' },
    { ar: 'نقل الأثاث الثقيل', en: 'Moving heavy furniture' },
  ],
  shifts: {
    title: { ar: 'أيام ثابتة كل أسبوع، أو كل يوم', en: 'Set days each week, or every day' },
    text: {
      ar: `أغلب العائلات تحجز ساعات في ${day.label.ar} (${day.time.ar}) لأيام ثابتة كل أسبوع، أو مساعدة يومية بدوام كامل أو بإقامة.`,
      en: `Most families book hours in the day shift (${day.time.en}) on set days each week, or daily help, full-time or live-in.`,
    },
    options: ['hourly', 'day', 'weekly', 'monthly', 'live-out', 'live-in'],
  },
  steps: {
    title: { ar: 'كيف تحجزون المساعدة المنزلية', en: 'How to book household support' },
    items: [
      {
        title: { ar: 'أخبرونا بروتين بيتكم', en: "Tell us your home's routine" },
        text: { ar: 'على واتساب: حجم البيت، وعدد الأفراد، والأعمال التي تحتاجونها، والأيام.', en: 'On WhatsApp: the size of the home, how many people, the tasks and the days.' },
      },
      {
        title: { ar: 'نؤكد الخطة والسعر', en: 'We confirm the plan and price' },
        text: { ar: 'نقترح عدد الساعات والأيام المناسب، ونؤكد السعر قبل البدء.', en: 'We suggest the right hours and days and confirm the price before we start.' },
      },
      {
        title: { ar: 'الشخص نفسه كل مرة', en: 'The same person each time' },
        text: { ar: 'في الخطط الثابتة يأتي الشخص نفسه، فيتعلم طريقة بيتكم.', en: 'On a regular plan the same person comes, and learns how your home works.' },
      },
    ],
  },
  why: {
    title: { ar: 'لماذا تختار العائلات أمان لأعمال البيت؟', en: 'Why families choose Aman for household support' },
    text: {
      ar: 'لأن من يدخل بيتكم كل يوم يجب أن يكون أهلاً للثقة. فريقنا خضع للتحقق من الخلفية، ويحترم خصوصية البيت، ويمكن أن يجمع أعمال البيت مع رعاية الأطفال أو كبار السن.',
      en: 'Because anyone in your home every day must be worthy of trust. Our team is background-checked, respects the privacy of your home, and can combine housework with babysitting or elderly care.',
    },
  },
  packages: {
    title: { ar: 'سعر المساعدة المنزلية اليومية', en: 'Household support prices' },
    text: { ar: 'يعتمد السعر على الساعات والأيام في الأسبوع. أرسلوا لنا ما تحتاجونه على واتساب ونرسل لكم السعر.', en: 'The price depends on the hours and days a week. Send us what you need on WhatsApp and we send you a price.' },
    ids: [],
  },
  riyadh: {
    title: { ar: 'مساعدة منزلية في كل أحياء الرياض', en: 'Household support anywhere in Riyadh' },
    text: {
      ar: 'من الشقق إلى الفلل، نصل إلى بيتكم في أي حي من الرياض، في الأيام والأوقات التي تناسبكم.',
      en: 'From apartments to villas, we reach your home in any part of Riyadh, on the days and times that suit you.',
    },
  },
  faqTitle: { ar: 'أسئلة عن المساعدة المنزلية اليومية', en: 'Questions about daily household support' },
  faq: [
    {
      q: { ar: 'كم سعر المساعدة المنزلية اليومية؟', en: 'How much does household support cost?' },
      a: { ar: 'يعتمد على الساعات والأيام في الأسبوع. أرسلوا التفاصيل على واتساب ونؤكد السعر قبل البدء.', en: 'It depends on the hours and days a week. Send us the details on WhatsApp and we confirm the price before we start.' },
    },
    {
      q: { ar: 'ما الفرق بينها وبين تنظيف المنزل؟', en: 'How is this different from home cleaning?' },
      a: { ar: 'تنظيف المنزل زيارة مركزة على التنظيف. المساعدة اليومية تتولى روتين البيت كله: الغسيل والكوي والأطباق والطلبات والترتيب.', en: 'Home cleaning is a visit focused on cleaning. Household support takes on the whole routine: laundry, ironing, dishes, deliveries and tidying.' },
    },
    {
      q: { ar: 'هل يأتي الشخص نفسه كل مرة؟', en: 'Does the same person come each time?' },
      a: { ar: 'في الخطط الأسبوعية والشهرية نعم، وإن احتجنا بديلاً نخبركم مسبقاً.', en: 'On weekly and monthly plans, yes. If we ever need a substitute, we tell you in advance.' },
    },
    {
      q: { ar: 'هل يمكن أن نطلب امرأة؟', en: 'Can we ask for a woman?' },
      a: { ar: 'نعم، تختارون مقدّماً أو مقدّمة للخدمة حسب ما يناسب بيتكم.', en: 'Yes. You choose a male or female team member, whichever suits your home.' },
    },
    {
      q: { ar: 'هل تتوفر مساعدة مقيمة؟', en: 'Is live-in help available?' },
      a: { ar: 'نعم، لمن يحتاج مساعدة في البيت طوال اليوم.', en: 'Yes, for families who need help at home all day.' },
    },
  ],
  relatedTitle: { ar: 'خدمات تريحكم أكثر في البيت', en: 'More help around the home' },
  related: ['home-cleaning', 'meal-preparation', 'errands'],
  whatsapp: { ar: 'السلام عليكم، أرغب بحجز مساعدة منزلية يومية.', en: 'Hello, I would like to book daily household support.' },
  booking: 'household-support',
  hub: {
    bestFor: { ar: 'روتين البيت: غسيل وكوي وترتيب', en: 'The home routine: laundry, ironing, tidying' },
    shifts: { ar: 'بالساعة، نهاري، أسبوعي، شهري، إقامة', en: 'Hourly, day, weekly, monthly, live-in' },
    combine: ['home-cleaning', 'meal-preparation'],
  },
};

export default page;
