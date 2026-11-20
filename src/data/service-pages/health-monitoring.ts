// Health Monitoring. Keyword: متابعة الحالة الصحية في المنزل (secondary: قياس الضغط والسكر في المنزل).
// Priced on WhatsApp: no pricing.json entry. REVIEW-AR
import type { ServicePage } from '../services';
import { business } from '../business';

const { day, night } = business.shifts;

const page: ServicePage = {
  slug: 'health-monitoring',
  tier: 'more',
  icon: 'pulse',
  intro: {
    title: { ar: 'قراءات يومية، وعين ساهرة على من تحبون', en: 'Daily readings, and a watchful eye on your loved one' },
    text: [
      {
        ar: 'متابعة الحالة الصحية في المنزل بالرياض: شخص من فريق أمان يقيس الضغط والسكر والحرارة والنبض والأكسجين بأجهزتكم المنزلية في أوقات ثابتة، ويسجّلها في دفتر يومي، ويرسلها لكم ولطبيبكم عند الحاجة.',
        en: 'Health monitoring at home in Riyadh: someone from the Aman team checks blood pressure, blood sugar, temperature, pulse and oxygen with your home devices at set times, keeps a daily record, and shares it with you and your doctor when needed.',
      },
      {
        ar: 'القراءات المنتظمة تكشف التغيّر مبكراً. إذا ارتفع الضغط أو انخفض السكر عن الحدود التي حددها الطبيب، نتصل بكم فوراً، فلا تفاجئكم مشكلة كان يمكن ملاحظتها.',
        en: "Regular readings catch changes early. If blood pressure rises or sugar drops outside the limits the doctor set, we call you at once, so a problem never takes you by surprise.",
      },
    ],
  },
  who: {
    title: { ar: 'لمن تناسب متابعة الحالة الصحية؟', en: 'Who health monitoring is for' },
    items: [
      {
        title: { ar: 'مرضى الضغط والسكري', en: 'Blood pressure and diabetes' },
        text: { ar: 'طبيبهم يريد قراءات منتظمة، ولا أحد في البيت يقيسها كل يوم.', en: 'Their doctor wants regular readings, and nobody at home takes them every day.' },
      },
      {
        title: { ar: 'العودة من المستشفى', en: 'Home from hospital' },
        text: { ar: 'الأيام الأولى بعد الخروج تحتاج متابعة قريبة.', en: 'The first days after discharge need close watching.' },
      },
      {
        title: { ar: 'والدان يعيشان وحدهما', en: 'Parents living alone' },
        text: { ar: 'تريدون أن تعرفوا كل يوم كيف حالهم، بالأرقام لا بالتخمين.', en: 'You want to know how they are every day, in numbers, not guesses.' },
      },
    ],
  },
  included: {
    title: { ar: 'ما تشمله متابعة الحالة الصحية', en: 'What health monitoring includes' },
    items: [
      { ar: 'قياس ضغط الدم والنبض', en: 'Blood pressure and pulse' },
      { ar: 'قياس السكر في الدم', en: 'Blood sugar checks' },
      { ar: 'قياس الحرارة ونسبة الأكسجين', en: 'Temperature and oxygen level' },
      { ar: 'متابعة الوزن وشرب الماء والأكل', en: 'Weight, fluids and meals' },
      { ar: 'دفتر يومي للقراءات يُرسل لكم على واتساب', en: 'A daily record of readings, sent to you on WhatsApp' },
      { ar: 'اتصال فوري بكم عند أي قراءة خارج الحدود', en: 'An immediate call to you if any reading is out of range' },
    ],
  },
  notIncluded: [
    { ar: 'التشخيص أو قرارات العلاج: تبقى مع الطبيب', en: 'Diagnosis or treatment decisions: these stay with the doctor' },
    { ar: 'الحقن والمحاليل والتضميد', en: 'Injections, drips and wound dressing' },
    { ar: 'توفير الأجهزة الطبية؛ نستخدم أجهزتكم المنزلية', en: 'Supplying medical devices; we use your home devices' },
  ],
  shifts: {
    title: { ar: 'زيارة يومية أو متابعة مستمرة', en: 'A daily visit or round-the-clock watching' },
    text: {
      ar: `زيارة صباحية أو مسائية لأخذ القراءات، أو حضور في ${day.label.ar} (${day.time.ar}) أو ${night.label.ar} (${night.time.ar})، أو إقامة لمن يحتاج متابعة على مدار اليوم.`,
      en: `A morning or evening visit for the readings, or someone there for the day shift (${day.time.en}) or night shift (${night.time.en}), or live-in when watching is needed around the clock.`,
    },
    options: ['hourly', 'day', 'night', 'live-in', 'weekly', 'monthly'],
  },
  steps: {
    title: { ar: 'كيف نبدأ المتابعة', en: 'How we start' },
    items: [
      {
        title: { ar: 'أخبرونا بما يطلبه الطبيب', en: "Tell us what the doctor wants" },
        text: { ar: 'على واتساب: القراءات المطلوبة، وأوقاتها، والحدود التي حددها الطبيب.', en: 'On WhatsApp: which readings, how often, and the limits the doctor set.' },
      },
      {
        title: { ar: 'نرتب الزيارات', en: 'We plan the visits' },
        text: { ar: 'نتفق معكم على عدد الزيارات أو الساعات، ونؤكد السعر قبل البدء.', en: 'We agree the number of visits or hours with you and confirm the price before we start.' },
      },
      {
        title: { ar: 'تقرير يومي', en: 'A daily report' },
        text: { ar: 'تصلكم القراءات كل يوم، ويمكنكم مشاركتها مع الطبيب في الموعد القادم.', en: 'The readings reach you every day, ready to share with the doctor at the next appointment.' },
      },
    ],
  },
  why: {
    title: { ar: 'لماذا تختار العائلات أمان لمتابعة صحة والديها؟', en: "Why families choose Aman to watch over their parents' health" },
    text: {
      ar: 'لأن الأرقام وحدها لا تكفي؛ تحتاجون من يلاحظ ويتصرف. فريقنا خضع للتحقق من الخلفية، ويسجّل كل قراءة بدقة، ويتصل بكم عند أول علامة تقلقه.',
      en: "Because numbers alone are not enough; you need someone who notices and acts. Our team is background-checked, records every reading carefully, and calls you at the first sign of concern.",
    },
  },
  packages: {
    title: { ar: 'سعر متابعة الحالة الصحية', en: 'Health monitoring prices' },
    text: { ar: 'يعتمد السعر على عدد الزيارات والقراءات. أخبرونا بما تحتاجونه على واتساب ونرسل لكم السعر.', en: 'The price depends on the number of visits and readings. Tell us what you need on WhatsApp and we send you a price.' },
    ids: [],
  },
  riyadh: {
    title: { ar: 'متابعة صحية في كل أحياء الرياض', en: 'Health monitoring anywhere in Riyadh' },
    text: {
      ar: 'نزور والديكم في أي حي من الرياض في الأوقات التي حددها الطبيب، صباحاً أو مساءً.',
      en: 'We visit your parents in any part of Riyadh at the times the doctor set, morning or evening.',
    },
  },
  faqTitle: { ar: 'أسئلة عن متابعة الحالة الصحية', en: 'Questions about health monitoring' },
  faq: [
    {
      q: { ar: 'كم سعر متابعة الحالة الصحية في المنزل؟', en: 'How much does health monitoring cost?' },
      a: { ar: 'يعتمد على عدد الزيارات والقراءات في اليوم. أرسلوا التفاصيل على واتساب ونؤكد السعر قبل البدء.', en: 'It depends on the number of visits and readings a day. Send us the details on WhatsApp and we confirm the price before we start.' },
    },
    {
      q: { ar: 'هل تحضرون أجهزة القياس؟', en: 'Do you bring the devices?' },
      a: { ar: 'نستخدم أجهزتكم المنزلية: جهاز الضغط والسكر والحرارة والأكسجين. وإن لم تكن لديكم ننصحكم بما تشترونه.', en: "We use your home devices for blood pressure, sugar, temperature and oxygen. If you don't have them, we tell you what to buy." },
    },
    {
      q: { ar: 'ماذا تفعلون إن كانت القراءة غير طبيعية؟', en: 'What do you do if a reading is abnormal?' },
      a: { ar: 'نعيد القياس، ثم نتصل بكم فوراً. وفي الحالات الطارئة نتصل بالإسعاف على 997 ثم بكم.', en: 'We take it again, then call you at once. In an emergency we call an ambulance on 997, then you.' },
    },
    {
      q: { ar: 'هل يمكن مشاركة القراءات مع الطبيب؟', en: 'Can the readings go to our doctor?' },
      a: { ar: 'نعم، نرسل لكم سجلاً مرتباً يمكنكم مشاركته مع الطبيب، أو نرسله له مباشرة إن طلبتم.', en: 'Yes. We send you a tidy record to share with the doctor, or send it to them directly if you ask.' },
    },
    {
      q: { ar: 'هل يمكن جمعها مع متابعة الأدوية؟', en: 'Can we combine it with medication support?' },
      a: { ar: 'نعم، وهذا الأكثر طلباً: الشخص نفسه يعطي الدواء ويأخذ القراءات في الزيارة نفسها.', en: 'Yes, and most families do: the same person gives the medicine and takes the readings on the same visit.' },
    },
    {
      q: { ar: 'هل نختار أن يكون المتابع رجلاً أو امرأة؟', en: 'Can we choose a man or a woman?' },
      a: { ar: 'نعم، الاختيار دائماً لكم.', en: 'Yes, the choice is always yours.' },
    },
  ],
  relatedTitle: { ar: 'خدمات تُجمع مع المتابعة الصحية', en: 'Services that go with health monitoring' },
  related: ['medication-support', 'elderly-companionship', 'personal-care'],
  whatsapp: { ar: 'السلام عليكم، أرغب بحجز متابعة الحالة الصحية في المنزل.', en: 'Hello, I would like to book health monitoring at home.' },
  booking: 'health-monitoring',
  hub: {
    bestFor: { ar: 'قراءات يومية للضغط والسكر', en: 'Daily blood pressure and sugar readings' },
    shifts: { ar: 'زيارات، نهاري، ليلي، إقامة', en: 'Visits, day, night, live-in' },
    combine: ['medication-support', 'elderly-companionship'],
  },
};

export default page;
