// Live-in Nanny. Keyword: مربية مقيمة. 12 working hours a day (pricing.ts TIMINGS['stay-in'],
// TODO(client): confirm 12 billable hours/day). Shows the stay-in package; booking preselects Babysitting.
// TODO(client): confirm what live-in families provide (room, meals, weekly day off). REVIEW-AR
import type { ServicePage } from '../services';
import { business } from '../business';

const { day, night } = business.shifts;

const page: ServicePage = {
  slug: 'live-in-nanny',
  tier: 'more',
  icon: 'home',
  photo: 'babysitting',
  photoAlt: { ar: 'مربية مقيمة تبني بيتاً من المكعبات الخشبية مع طفل صغير في بيت العائلة بالرياض', en: 'A live-in nanny building a wooden block house with a toddler in a Riyadh family home' },
  intro: {
    title: { ar: 'المربية المقيمة: رعاية يومية دون مواعيد وصول', en: 'A live-in nanny: daily care without the commute' },
    text: [
      {
        ar: 'مربية مقيمة في الرياض تعيش مع عائلتكم في البيت وتعمل 12 ساعة يومياً، فتكون حاضرة حين يستيقظ الأطفال وحين يعودون من المدرسة وحين يحين موعد نومهم. خيار للعائلات التي تحتاج رعاية يومية طويلة وثابتة.',
        en: 'A live-in nanny in Riyadh stays with your family and works 12 hours a day, so they are there when the children wake, when they come home from school and at bedtime. It suits families who need long, steady care every day.',
      },
      {
        ar: 'الفرق بين المربية المقيمة والمربية بدوام يومي ليس في المهام بل في الإيقاع: لا انتظار لوصول أحد، ولا قلق من زحمة الطريق، والأطفال يعرفون أن الوجه نفسه سيكون معهم كل صباح.',
        en: "The difference between a live-in and a live-out nanny isn't the tasks but the rhythm: no waiting for anyone to arrive, no worrying about traffic, and the children know the same face will be there every morning.",
      },
      {
        ar: 'وقد لا تحتاجون إقامة كاملة؛ فالمربية بدوام يومي تأتي للفترة المتفق عليها ثم تعود إلى بيتها. قارنوا بين الخيارين في الجدول أدناه، واختاروا ما يناسب بيتكم.',
        en: "You may not need someone living in: a live-out nanny comes for the agreed shift, then goes home. Compare the two in the table below and choose what suits your home.",
      },
    ],
  },
  who: {
    title: { ar: 'لمن تناسب المربية المقيمة؟', en: 'Who a live-in nanny suits' },
    items: [
      { title: { ar: 'والدان بدوام كامل', en: 'Two full-time working parents' }, text: { ar: 'يخرجان مبكراً ويعودان متأخرين، ويحتاج الأطفال من يرافق يومهم كله.', en: 'They leave early and get home late, and the children need someone with them all day.' } },
      { title: { ar: 'عائلة كبيرة', en: 'A large family' }, text: { ar: 'أطفال بأعمار مختلفة، ومواعيد مدرسة ونوم وطعام لا تنتهي.', en: 'Children of different ages, and school, sleep and meal times that never stop.' } },
      { title: { ar: 'مولود مع إخوة صغار', en: 'A newborn with little siblings' }, text: { ar: 'الأم تحتاج من يساعدها مع الصغار وهي مع المولود.', en: 'Mum needs help with the little ones while she is with the baby.' } },
      { title: { ar: 'بيت بعيد أو مواعيد غير ثابتة', en: 'Irregular hours' }, text: { ar: 'نوبات عمل متغيرة تجعل المربية اليومية صعبة الترتيب.', en: 'Changing work shifts make a daily nanny hard to schedule.' } },
    ],
  },
  included: {
    title: { ar: 'ما تقدمه المربية المقيمة', en: 'What a live-in nanny does' },
    items: [
      { ar: 'رعاية الأطفال ولعبهم وروتينهم اليومي', en: "Children's care, play and daily routine" },
      { ar: 'تجهيز وجبات الأطفال وإطعامهم', en: "Preparing the children's meals and feeding them" },
      { ar: 'الاستحمام والملابس وموعد النوم', en: 'Bath time, clothes and bedtime' },
      { ar: 'متابعة الواجبات المدرسية', en: 'Keeping up with homework' },
      { ar: 'ترتيب غرف الأطفال وغسل ملابسهم', en: "Tidying the children's rooms and doing their laundry" },
      { ar: 'رعاية المولود إن وُجد، حسب تعليماتكم', en: 'Caring for a newborn, if you have one, as you instruct' },
    ],
  },
  notIncluded: [
    { ar: 'العمل أكثر من 12 ساعة في اليوم', en: 'Working more than 12 hours a day' },
    { ar: 'أي رعاية صحية أو إعطاء أدوية دون تعليماتكم المكتوبة', en: 'Any health care, or medicine without your written instructions' },
    { ar: 'أعمال البيت الثقيلة كلها إلى جانب رعاية الأطفال', en: 'All the heavy housework on top of childcare' },
    { ar: 'السفر بالأطفال دون اتفاق مسبق', en: 'Travelling with the children without prior agreement' },
  ],
  shifts: {
    title: { ar: 'إقامة كاملة أو دوام يومي', en: 'Live-in or live-out' },
    text: {
      ar: `المربية المقيمة تعمل 12 ساعة يومياً، ستة أيام في الأسبوع في باقة الإقامة. ولمن يفضّل دواماً يومياً: ${day.label.ar} ${day.time.ar} أو ${night.label.ar} ${night.time.ar}.`,
      en: `A live-in nanny works 12 hours a day, six days a week on the stay-in package. If you prefer live-out: day shift ${day.time.en} or night shift ${night.time.en}.`,
    },
    options: ['live-in', 'live-out', 'day', 'night', 'monthly'],
  },
  steps: {
    title: { ar: 'كيف تحجزون مربية مقيمة', en: 'How to book a live-in nanny' },
    items: [
      { title: { ar: 'حدثونا عن بيتكم', en: 'Tell us about your home' }, text: { ar: 'عدد الأطفال وأعمارهم، والغرفة المتاحة، وموعد البدء.', en: 'How many children and their ages, the room available, and a start date.' } },
      { title: { ar: 'نرشّح ونتفق', en: 'We match and agree terms' }, text: { ar: 'نقترح الشخص المناسب، ونتفق على الساعات والإجازة الأسبوعية والسعر.', en: 'We suggest the right person and agree hours, the weekly day off and the price.' } },
      { title: { ar: 'أسبوع أول هادئ', en: 'A gentle first week' }, text: { ar: 'تتعرف المربية على البيت والأطفال، ونتابع معكم حتى يستقر الروتين.', en: 'The nanny gets to know the home and children, and we check in until the routine settles.' } },
    ],
  },
  why: {
    title: { ar: 'لماذا تختار العائلات مربية مقيمة من أمان؟', en: 'Why families choose a live-in nanny from Aman' },
    text: {
      ar: 'لأن من يعيش معكم يصبح جزءاً من يومكم. فريقنا خضع للتحقق من الخلفية، وتختارون مقدّماً أو مقدّمة للرعاية، ونتفق معكم على قواعد البيت والخصوصية قبل اليوم الأول.',
      en: 'Because someone who lives with you becomes part of your day. Our team is background-checked, you choose a male or female caregiver, and we agree house rules and privacy with you before day one.',
    },
  },
  packages: {
    title: { ar: 'باقة المربية المقيمة', en: 'The live-in nanny package' },
    text: { ar: '12 ساعة يومياً، 6 أيام في الأسبوع، لمدة 4 أسابيع.', en: '12 hours a day, 6 days a week, for 4 weeks.' },
    ids: ['stay-in'],
  },
  riyadh: {
    title: { ar: 'مربية مقيمة في أي مكان بالرياض', en: 'Live-in nannies anywhere in Riyadh' },
    text: {
      ar: 'نرتب المربية المقيمة لعائلات الرياض في الشقق والفلل على حد سواء، ونخطط لموعد البدء حتى تكون الغرفة جاهزة والأطفال مستعدين.',
      en: 'We arrange live-in nannies for Riyadh families in apartments and villas alike, and plan the start date so the room is ready and the children are prepared.',
    },
  },
  comparison: {
    title: { ar: 'مربية مقيمة أم بدوام يومي؟', en: 'Live-in or live-out nanny?' },
    text: { ar: 'مقارنة سريعة تساعدكم على الاختيار.', en: 'A quick comparison to help you choose.' },
    head: [
      { ar: 'المقارنة', en: 'Compare' },
      { ar: 'مربية مقيمة', en: 'Live-in nanny' },
      { ar: 'مربية بدوام يومي', en: 'Live-out nanny' },
    ],
    rows: [
      [{ ar: 'أين تسكن', en: 'Where they stay' }, { ar: 'في بيتكم', en: 'In your home' }, { ar: 'في بيتها، وتأتي للدوام', en: 'Their own home; comes in for the shift' }],
      [{ ar: 'ساعات العمل', en: 'Working hours' }, { ar: '12 ساعة يومياً', en: '12 hours a day' }, { ar: `الفترة المتفق عليها (${day.time.ar} أو ${night.time.ar})`, en: `The agreed shift (${day.time.en} or ${night.time.en})` }],
      [{ ar: 'الأيام', en: 'Days' }, { ar: '6 أيام في الأسبوع', en: '6 days a week' }, { ar: 'حسب خطتكم', en: 'As your plan sets' }],
      [{ ar: 'ما تجهزونه', en: 'What you provide' }, { ar: 'غرفة خاصة ووجبات', en: 'A private room and meals' }, { ar: 'لا شيء غير مكان العمل', en: 'Nothing beyond the workplace' }],
      [{ ar: 'الأنسب لـ', en: 'Best for' }, { ar: 'رعاية طويلة كل يوم', en: 'Long daily care' }, { ar: 'ساعات محددة دون إقامة', en: 'Set hours without hosting' }],
    ],
  },
  prepare: {
    title: { ar: 'ما تجهزه العائلة قبل وصول المربية المقيمة', en: 'What families prepare before a live-in nanny arrives' },
    items: [
      { ar: 'غرفة خاصة بباب، وسرير، ومكان لحفظ الأغراض', en: 'A private room with a door, a bed and storage' },
      { ar: 'الاتفاق على الوجبات من البداية', en: 'Meals agreed from the start' },
      { ar: 'يوم إجازة أسبوعي متفق عليه', en: 'An agreed weekly day off' },
      { ar: 'قواعد البيت مكتوبة: الضيوف، والشاشات، والطعام', en: 'House rules in writing: guests, screens and food' },
      { ar: 'روتين كل طفل وحساسياته إن وُجدت', en: "Each child's routine and any allergies" },
      { ar: 'أرقام الطوارئ وطبيب الأطفال', en: "Emergency contacts and your paediatrician's number" },
    ],
  },
  faqTitle: { ar: 'أسئلة عن المربية المقيمة', en: 'Questions about live-in nannies' },
  faq: [
    {
      q: { ar: 'كم سعر المربية المقيمة في الرياض؟', en: 'How much does a live-in nanny cost in Riyadh?' },
      a: { ar: 'سعر باقة الإقامة معروض أعلاه، ونؤكد معكم التفاصيل على واتساب قبل البدء.', en: 'The stay-in package price is shown above, and we confirm the details with you on WhatsApp before you start.' },
    },
    {
      q: { ar: 'كم ساعة تعمل المربية المقيمة؟', en: 'How many hours does a live-in nanny work?' },
      a: { ar: '12 ساعة يومياً، ستة أيام في الأسبوع، ولها وقت راحة ونوم كامل في غرفتها.', en: '12 hours a day, six days a week, with rest time and a full night’s sleep in their own room.' },
    },
    {
      q: { ar: 'هل الأفضل مربية مقيمة أم بدوام يومي؟', en: 'Is a live-in or live-out nanny better?' },
      a: { ar: 'المقيمة تناسب من يحتاج رعاية طويلة كل يوم ويستطيع توفير غرفة خاصة. والدوام اليومي يناسب من يحتاج ساعات محددة دون إقامة.', en: 'Live-in suits families who need long care every day and can offer a private room. Live-out suits set hours without someone living in.' },
    },
    {
      q: { ar: 'هل يمكن أن نطلب مربية امرأة؟', en: 'Can we ask for a female nanny?' },
      a: { ar: 'نعم، تختارون مقدّماً أو مقدّمة للرعاية حسب ما يناسب عائلتكم.', en: 'Yes. You choose a male or female caregiver, whichever suits your family.' },
    },
    {
      q: { ar: 'بأي لغة تتحدث المربية؟', en: 'What language does the nanny speak?' },
      a: { ar: `يتحدث فريقنا ${business.languages.ar}.`, en: `Our team speaks ${business.languages.en}.` },
    },
    {
      q: { ar: 'هل تبقى المربية نفسها طوال الخطة؟', en: 'Does the same nanny stay for the whole plan?' },
      a: { ar: 'نعم، هذا أساس الإقامة. وإن احتجنا إلى بديل في ظرف طارئ نخبركم مسبقاً.', en: 'Yes, that is the point of live-in care. If an emergency ever calls for a substitute, we tell you in advance.' },
    },
  ],
  relatedTitle: { ar: 'خدمات قريبة من المربية المقيمة', en: 'Related services' },
  related: ['babysitting', 'night-nanny', 'newborn-care'],
  whatsapp: { ar: 'السلام عليكم، أرغب بحجز مربية مقيمة.', en: 'Hello, I would like to book a live-in nanny.' },
  booking: 'babysitting',
  hub: {
    bestFor: { ar: 'رعاية يومية طويلة للأطفال', en: 'Long daily childcare' },
    shifts: { ar: 'إقامة، 12 ساعة يومياً', en: 'Live-in, 12 hours a day' },
    combine: ['newborn-care', 'home-cleaning'],
  },
};

export default page;
