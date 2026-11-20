// Meal Preparation. Keyword: طبخ وتحضير الوجبات في المنزل (secondary: طباخة بالساعة). Priced on WhatsApp:
// no pricing.json entry. Home cooking in the family's kitchen, not catering. REVIEW-AR
import type { ServicePage } from '../services';
import { business } from '../business';

const { day } = business.shifts;

const page: ServicePage = {
  slug: 'meal-preparation',
  tier: 'more',
  icon: 'meal',
  intro: {
    title: { ar: 'أكل البيت، جاهز حين تعودون', en: 'Home-cooked food, ready when you get home' },
    text: [
      {
        ar: 'طبخ وتحضير الوجبات في المنزل بالرياض: يأتي إليكم شخص من فريق أمان ليطبخ في مطبخكم أطباقكم المفضلة، من الكبسة والمرقوق إلى الشوربات والسلطات، أو يحضّر وجبات الأسبوع كله ويرتبها في الثلاجة.',
        en: 'Meal preparation at home in Riyadh: someone from the Aman team comes to cook your favourite dishes in your own kitchen, from kabsa and marqooq to soups and salads, or prepares the whole week\'s meals and stores them in the fridge.',
      },
      {
        ar: 'نطبخ كما تحبون: بملح أقل لمرضى الضغط، وبلا سكر لمرضى السكري حسب قائمة الطبيب، وطعام لين لكبار السن، ووجبات صحية للأطفال. ونترك المطبخ نظيفاً كما وجدناه.',
        en: "We cook the way you like: less salt for blood pressure, no sugar for diabetes following the doctor's list, soft food for older parents and healthy meals for children. And we leave the kitchen as clean as we found it.",
      },
    ],
  },
  who: {
    title: { ar: 'لمن يناسب تحضير الوجبات؟', en: 'Who meal preparation is for' },
    items: [
      {
        title: { ar: 'عائلات بدوام طويل', en: 'Busy working families' },
        text: { ar: 'تعودون متعبين، وتريدون عشاء بيتياً لا طلبات توصيل.', en: 'You come home tired and want a home-cooked dinner, not another delivery.' },
      },
      {
        title: { ar: 'كبار السن', en: 'Older parents' },
        text: { ar: 'يحتاجون طعاماً صحياً طازجاً بنظام غذائي محدد.', en: 'They need fresh, healthy food that follows a set diet.' },
      },
      {
        title: { ar: 'الأم بعد الولادة', en: 'A new mother' },
        text: { ar: 'أكلات النفاس التقليدية ووجبات مغذية في أسابيع التعافي.', en: 'Traditional postpartum dishes and nourishing meals during the recovery weeks.' },
      },
      {
        title: { ar: 'قبل الضيوف', en: 'Before guests' },
        text: { ar: 'عزيمة صغيرة في البيت، وتحتاجون يداً في المطبخ.', en: 'A small gathering at home, and you need a hand in the kitchen.' },
      },
    ],
  },
  included: {
    title: { ar: 'ما يشمله تحضير الوجبات', en: 'What meal preparation includes' },
    items: [
      { ar: 'طبخ وجبات اليوم في مطبخكم', en: "Cooking the day's meals in your kitchen" },
      { ar: 'تحضير وجبات الأسبوع وتغليفها في الثلاجة', en: "Preparing the week's meals and storing them in the fridge" },
      { ar: 'وجبات بنظام غذائي خاص حسب تعليماتكم', en: 'Meals for a special diet, following your instructions' },
      { ar: 'لانش بوكس المدرسة للأطفال', en: "Children's school lunchboxes" },
      { ar: 'الغسيل والتنظيف بعد الطبخ', en: 'Washing up and cleaning after cooking' },
      { ar: 'قائمة بما ينقص من المقاضي', en: 'A list of groceries that are running low' },
    ],
  },
  notIncluded: [
    { ar: 'تموين الحفلات والمناسبات الكبيرة', en: 'Catering for parties and large events' },
    { ar: 'شراء المقاضي، إلا إن جمعتموها مع خدمة المقاضي', en: 'Buying the groceries, unless you add our errands service' },
    { ar: 'الطبخ خارج بيتكم', en: 'Cooking anywhere but your home' },
  ],
  shifts: {
    title: { ar: 'زيارة للطبخ، أو تحضير الأسبوع في يوم', en: 'A cooking visit, or the whole week in one day' },
    text: {
      ar: `أغلب زيارات الطبخ في ${day.label.ar} (${day.time.ar}): ساعات قليلة لوجبة اليوم، أو يوم كامل لتحضير وجبات الأسبوع، أو أيام ثابتة كل أسبوع.`,
      en: `Most cooking visits happen during the day shift (${day.time.en}): a few hours for the day's meal, a full day to prepare the week, or set days every week.`,
    },
    options: ['hourly', 'day', 'weekly', 'monthly', 'live-out'],
  },
  steps: {
    title: { ar: 'كيف تحجزون تحضير الوجبات', en: 'How to book meal preparation' },
    items: [
      {
        title: { ar: 'أرسلوا قائمتكم', en: 'Send us your menu' },
        text: { ar: 'على واتساب: الأطباق، وعدد الأشخاص، وأي نظام غذائي خاص.', en: 'On WhatsApp: the dishes, how many people, and any special diet.' },
      },
      {
        title: { ar: 'نؤكد الموعد والسعر', en: 'We confirm the time and price' },
        text: { ar: 'نقترح عدد الساعات المناسب، ونخبركم بالمقاضي المطلوبة قبل الزيارة.', en: 'We suggest the right number of hours and tell you which groceries to have ready.' },
      },
      {
        title: { ar: 'الأكل جاهز', en: 'The food is ready' },
        text: { ar: 'نطبخ ونرتب ونغسل، وتجدون الوجبات جاهزة ومرتبة.', en: 'We cook, store and wash up, and you find the meals ready and labelled.' },
      },
    ],
  },
  why: {
    title: { ar: 'لماذا تختار العائلات أمان للطبخ في البيت؟', en: 'Why families choose Aman for home cooking' },
    text: {
      ar: 'لأن مطبخكم جزء من بيتكم. فريقنا خضع للتحقق من الخلفية، ويحافظ على النظافة والحلال وطريقتكم في الطبخ، ويمكن أن يجمع الطبخ مع رعاية الأطفال أو كبار السن في الزيارة نفسها.',
      en: 'Because your kitchen is part of your home. Our team is background-checked, keeps things clean, halal and the way you cook, and can combine cooking with babysitting or elderly care on the same visit.',
    },
  },
  packages: {
    title: { ar: 'سعر تحضير الوجبات', en: 'Meal preparation prices' },
    text: { ar: 'يعتمد السعر على عدد الساعات والأشخاص. أرسلوا لنا ما تحتاجونه على واتساب ونرسل لكم السعر.', en: 'The price depends on the hours and the number of people. Send us what you need on WhatsApp and we send you a price.' },
    ids: [],
  },
  riyadh: {
    title: { ar: 'طبخ في البيت في كل أحياء الرياض', en: 'Home cooking anywhere in Riyadh' },
    text: {
      ar: 'نصل إلى مطبخكم في أي حي من الرياض، ونرتب الموعد بحيث يكون الأكل جاهزاً قبل الغداء أو العشاء.',
      en: 'We reach your kitchen anywhere in Riyadh and time the visit so the food is ready before lunch or dinner.',
    },
  },
  faqTitle: { ar: 'أسئلة عن تحضير الوجبات', en: 'Questions about meal preparation' },
  faq: [
    {
      q: { ar: 'كم سعر الطبخ في المنزل؟', en: 'How much does meal preparation cost?' },
      a: { ar: 'يعتمد على عدد الساعات والأشخاص. أرسلوا التفاصيل على واتساب ونؤكد السعر قبل الزيارة.', en: 'It depends on the hours and the number of people. Send us the details on WhatsApp and we confirm the price before the visit.' },
    },
    {
      q: { ar: 'هل تطبخون الأكل السعودي؟', en: 'Do you cook Saudi dishes?' },
      a: { ar: 'نعم، الأكلات السعودية والعربية والأطباق اليومية، وأخبرونا بما تحبون.', en: 'Yes: Saudi and Arabic dishes and everyday meals. Tell us what you like.' },
    },
    {
      q: { ar: 'من يشتري المقاضي؟', en: 'Who buys the groceries?' },
      a: { ar: 'نرسل لكم القائمة قبل الزيارة. ويمكنكم إضافة خدمة المقاضي فنشتريها نحن.', en: 'We send you the list before the visit. You can also add our errands service and we buy them for you.' },
    },
    {
      q: { ar: 'هل تطبخون لنظام غذائي خاص؟', en: 'Can you cook for a special diet?' },
      a: { ar: 'نعم، حسب قائمة الطبيب أو أخصائي التغذية التي ترسلونها لنا.', en: 'Yes, following the list from your doctor or dietitian.' },
    },
    {
      q: { ar: 'هل يمكن تحضير وجبات الأسبوع كله مرة واحدة؟', en: 'Can you prepare the whole week at once?' },
      a: { ar: 'نعم، في يوم واحد نطبخ ونغلّف ونكتب على كل علبة اسم الوجبة ويومها.', en: 'Yes. In one day we cook, pack and label each box with the meal and the day.' },
    },
    {
      q: { ar: 'هل يمكن الجمع بين الطبخ ورعاية الأطفال؟', en: 'Can one visit cover cooking and babysitting?' },
      a: { ar: 'نعم حسب أعمار الأطفال وحجم الطبخ، ونتفق على التفاصيل معكم.', en: "Yes, depending on the children's ages and how much cooking there is. We agree the details with you." },
    },
  ],
  relatedTitle: { ar: 'خدمات تُجمع مع الطبخ', en: 'Services that go with meal preparation' },
  related: ['errands', 'household-support', 'elderly-companionship'],
  whatsapp: { ar: 'السلام عليكم، أرغب بحجز طبخ وتحضير الوجبات في المنزل.', en: 'Hello, I would like to book meal preparation at home.' },
  booking: 'meal-preparation',
  hub: {
    bestFor: { ar: 'وجبات بيتية يومية أو أسبوعية', en: 'Home-cooked meals, daily or for the week' },
    shifts: { ar: 'بالساعة، نهاري، أسبوعي، شهري', en: 'Hourly, day, weekly, monthly' },
    combine: ['errands', 'household-support'],
  },
};

export default page;
