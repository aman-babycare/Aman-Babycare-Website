// Medication Support. Keyword: متابعة الأدوية في المنزل (secondary: إعطاء الأدوية لكبار السن). Priced on
// WhatsApp: no pricing.json entry, so the page shows the "ask for a price" box. REVIEW-AR
import type { ServicePage } from '../services';
import { business } from '../business';

const { day, night } = business.shifts;

const page: ServicePage = {
  slug: 'medication-support',
  tier: 'more',
  icon: 'pill',
  intro: {
    title: { ar: 'كل دواء في وقته، وأنتم مطمئنون', en: 'Every dose on time, and you can relax' },
    text: [
      {
        ar: 'متابعة الأدوية في المنزل بالرياض: شخص من فريق أمان يعطي والديكم أو من تحبون أدويتهم في مواعيدها حسب وصفة الطبيب وجدولكم، ويرتّب علب الأدوية الأسبوعية، ويسجّل كل جرعة ويخبركم بها.',
        en: "Medication support at home in Riyadh: someone from the Aman team gives your parents or loved one their medicines on time, following the doctor's prescription and your schedule, sets up the weekly pill boxes, and logs every dose so you always know.",
      },
      {
        ar: 'حين تتعدد الأدوية وتختلف أوقاتها، يسهل أن تُنسى جرعة أو تتكرر. نحن نتابعها بدقة، ونلاحظ أي تغيّر بعد الدواء، ونذكّركم قبل أن ينفد شيء لتجديد الوصفة.',
        en: "When there are many medicines at different times, it is easy for a dose to be missed or taken twice. We keep track carefully, notice any change after a dose, and remind you before anything runs out so the prescription can be renewed.",
      },
    ],
  },
  who: {
    title: { ar: 'لمن تناسب متابعة الأدوية؟', en: 'Who medication support is for' },
    items: [
      {
        title: { ar: 'كبار السن وأدوية كثيرة', en: 'Older parents on several medicines' },
        text: { ar: 'ضغط وسكر وقلب، وكل دواء في وقت مختلف من اليوم.', en: 'Blood pressure, diabetes, heart: each medicine at a different time of day.' },
      },
      {
        title: { ar: 'بعد العملية أو المستشفى', en: 'After surgery or a hospital stay' },
        text: { ar: 'خطة علاج جديدة لأسابيع، وتحتاجون من يلتزم بها بدقة.', en: 'A new treatment plan for a few weeks, and you need someone to follow it exactly.' },
      },
      {
        title: { ar: 'الأبناء في دوامهم', en: 'Children at work all day' },
        text: { ar: 'لا تستطيعون أن تكونوا في البيت عند جرعة الظهر، وتريدون أن تطمئنوا.', en: "You can't be home for the midday dose, and you want peace of mind." },
      },
      {
        title: { ar: 'ضعف الذاكرة', en: 'Memory that slips' },
        text: { ar: 'والدكم أو والدتكم ينسى إن كان أخذ الدواء أم لا.', en: "Your mother or father forgets whether they've taken their medicine." },
      },
    ],
  },
  included: {
    title: { ar: 'ما تشمله متابعة الأدوية', en: 'What medication support includes' },
    items: [
      { ar: 'إعطاء الأدوية في مواعيدها حسب الوصفة وجدولكم المكتوب', en: 'Giving medicines on time, following the prescription and your written schedule' },
      { ar: 'ترتيب علب الأدوية الأسبوعية', en: 'Setting up the weekly pill organiser' },
      { ar: 'سجل يومي لكل جرعة يُرسل لكم على واتساب', en: 'A daily log of every dose, sent to you on WhatsApp' },
      { ar: 'ملاحظة أي تغيّر بعد الدواء وإبلاغكم فوراً', en: 'Watching for any change after a dose and telling you straight away' },
      { ar: 'تذكيركم قبل نفاد الأدوية، واستلامها من الصيدلية', en: 'Reminding you before medicines run out, and collecting them from the pharmacy' },
      { ar: 'التأكد من أخذ الدواء مع الطعام أو الماء كما هو مطلوب', en: 'Making sure each medicine is taken with food or water as directed' },
    ],
  },
  notIncluded: [
    { ar: 'وصف الأدوية أو تغيير الجرعات: ذلك قرار الطبيب وحده', en: "Prescribing medicine or changing a dose: that is the doctor's decision alone" },
    { ar: 'الحقن والمحاليل الوريدية', en: 'Injections and IV drips' },
    { ar: 'شراء أدوية بلا وصفة نيابة عنكم', en: 'Buying prescription-only medicine without a prescription' },
  ],
  shifts: {
    title: { ar: 'زيارة عند كل جرعة، أو حضور طوال اليوم', en: 'A visit for each dose, or someone there all day' },
    text: {
      ar: `نرتب الزيارات حول مواعيد الدواء، أو نكون معكم في ${day.label.ar} (${day.time.ar}) أو ${night.label.ar} (${night.time.ar})، أو بإقامة لمن يحتاج متابعة على مدار اليوم.`,
      en: `We plan visits around the dose times, or stay with your family for the day shift (${day.time.en}) or the night shift (${night.time.en}), or live in when doses run around the clock.`,
    },
    options: ['hourly', 'day', 'night', 'live-in', 'weekly', 'monthly'],
  },
  steps: {
    title: { ar: 'كيف نبدأ متابعة الأدوية', en: 'How we start' },
    items: [
      {
        title: { ar: 'أرسلوا الوصفة والجدول', en: 'Send the prescription and schedule' },
        text: { ar: 'على واتساب: صورة الوصفة، وأسماء الأدوية، وأوقاتها.', en: 'On WhatsApp: a photo of the prescription, the medicine names and their times.' },
      },
      {
        title: { ar: 'نرتب الزيارات معكم', en: 'We plan the visits with you' },
        text: { ar: 'نقترح عدد الزيارات أو الساعات المناسبة، ونؤكد السعر قبل البدء.', en: 'We suggest the right number of visits or hours and confirm the price before we start.' },
      },
      {
        title: { ar: 'سجل يصلكم كل يوم', en: 'A log reaches you every day' },
        text: { ar: 'بعد كل جرعة تصلكم رسالة قصيرة، فتعرفون أن كل شيء في وقته.', en: 'After each dose you get a short message, so you know everything is on time.' },
      },
    ],
  },
  why: {
    title: { ar: 'لماذا تثق العائلات بأمان في أدوية والديها؟', en: 'Why families trust Aman with their medicines' },
    text: {
      ar: 'لأن الدقة هنا ليست تفصيلاً. فريقنا خضع للتحقق من الخلفية، ويتبع الوصفة كما كُتبت، ويسجّل كل جرعة، ولا يتردد في الاتصال بكم عند أي شك.',
      en: "Because precision here is not a detail. Our team is background-checked, follows the prescription exactly as written, logs every dose, and never hesitates to call you if something seems off.",
    },
  },
  packages: {
    title: { ar: 'سعر متابعة الأدوية', en: 'Medication support prices' },
    text: { ar: 'يعتمد السعر على عدد الجرعات والزيارات في اليوم. أرسلوا لنا الجدول على واتساب ونرسل لكم السعر.', en: 'The price depends on how many doses and visits a day. Send us the schedule on WhatsApp and we send you a price.' },
    ids: [],
  },
  riyadh: {
    title: { ar: 'متابعة الأدوية في كل أحياء الرياض', en: 'Medication support anywhere in Riyadh' },
    text: {
      ar: 'نصل إلى بيت والديكم في أي حي من الرياض، ونرتب الزيارات بحيث لا تتأخر جرعة واحدة، حتى في أيام الزحام.',
      en: 'We reach your parents anywhere in Riyadh and plan visits so that not a single dose is late, even on busy traffic days.',
    },
  },
  faqTitle: { ar: 'أسئلة عن متابعة الأدوية', en: 'Questions about medication support' },
  faq: [
    {
      q: { ar: 'كم سعر متابعة الأدوية في المنزل؟', en: 'How much does medication support cost?' },
      a: { ar: 'يعتمد على عدد الجرعات والزيارات. أرسلوا لنا الجدول على واتساب، ونؤكد السعر قبل البدء.', en: 'It depends on the number of doses and visits. Send us the schedule on WhatsApp and we confirm the price before we start.' },
    },
    {
      q: { ar: 'هل تعطون الدواء أم تذكّرون به فقط؟', en: 'Do you give the medicine, or only remind?' },
      a: { ar: 'نعطي الدواء في وقته حسب الوصفة وجدولكم، ونتأكد أنه أُخذ، ونسجّله.', en: 'We give the medicine on time according to the prescription and your schedule, make sure it is taken, and log it.' },
    },
    {
      q: { ar: 'ماذا لو رفض والدي الدواء؟', en: 'What if my father refuses his medicine?' },
      a: { ar: 'نحاول بلطف وصبر، ولا نُجبر أحداً. إن تكرر الرفض نخبركم فوراً لتقرروا مع الطبيب.', en: "We try gently and patiently, and never force anyone. If it keeps happening we tell you at once, so you can decide with the doctor." },
    },
    {
      q: { ar: 'هل تستلمون الأدوية من الصيدلية؟', en: 'Can you collect medicines from the pharmacy?' },
      a: { ar: 'نعم، بالوصفة التي تعطوننا إياها، ونذكّركم قبل نفاد أي دواء.', en: 'Yes, with the prescription you give us, and we remind you before anything runs out.' },
    },
    {
      q: { ar: 'ماذا يحدث إن لاحظتم شيئاً غير طبيعي؟', en: 'What happens if you notice something unusual?' },
      a: { ar: 'نتصل بكم فوراً. وفي الحالات الطارئة نتصل بالإسعاف على 997 ثم بكم.', en: 'We call you straight away. In an emergency we call an ambulance on 997, then you.' },
    },
    {
      q: { ar: 'هل نختار أن يكون من يتابع الأدوية رجلاً أو امرأة؟', en: 'Can we choose a man or a woman?' },
      a: { ar: 'نعم، الاختيار دائماً لكم.', en: 'Yes, the choice is always yours.' },
    },
  ],
  relatedTitle: { ar: 'خدمات تُجمع مع متابعة الأدوية', en: 'Services that go with medication support' },
  related: ['health-monitoring', 'elderly-companionship', 'personal-care'],
  whatsapp: { ar: 'السلام عليكم، أرغب بحجز متابعة الأدوية في المنزل.', en: 'Hello, I would like to book medication support at home.' },
  booking: 'medication-support',
  hub: {
    bestFor: { ar: 'من يأخذ أدوية كثيرة في أوقات مختلفة', en: 'Several medicines at different times of day' },
    shifts: { ar: 'زيارات، نهاري، ليلي، إقامة', en: 'Visits, day, night, live-in' },
    combine: ['health-monitoring', 'elderly-companionship'],
  },
};

export default page;
