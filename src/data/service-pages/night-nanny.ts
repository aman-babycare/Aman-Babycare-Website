// Night Nanny for newborns. Keyword: مربية ليلية للمولود. Night shift only (business.shifts.night).
// Help and comfort only: feeds follow the mother's instructions; never nursing, medical or clinical care.
// Booking preselects Newborn Care in the Book Your Service card. REVIEW-AR
import type { ServicePage } from '../services';
import { business } from '../business';

const { night } = business.shifts;

const page: ServicePage = {
  slug: 'night-nanny',
  tier: 'more',
  icon: 'sleep',
  photo: 'newborn-care',
  photoAlt: { ar: 'مربية ليلية بالحجاب تحمل مولوداً نائماً في قماطه بجانب أمه المرتاحة', en: 'A night nanny in a hijab holding a sleeping, swaddled newborn beside the resting mother' },
  intro: {
    title: { ar: 'ماذا تفعل المربية الليلية للمولود؟', en: 'What a night nanny does for your newborn' },
    text: [
      {
        ar: `مربية ليلية للمولود في الرياض تصل إلى بيتكم مساءً وتبقى حتى الصباح (${night.time.ar}). تسهر مع المولود وتهدّئه وتساعد في الرضعات حسب تعليمات الأم، لينام الوالدان ليلاً كاملاً أو أغلبه.`,
        en: `A night nanny for your newborn in Riyadh arrives in the evening and stays until morning (${night.time.en}). They stay up with your baby, settle them, and help with feeds following mum's instructions, so both parents get a full night's sleep, or most of one.`,
      },
      {
        ar: 'السهر المتواصل في الأسابيع الأولى يرهق الأم والأب معاً، ويؤثر في صبرهما ونهارهما. وجود شخص هادئ في غرفة المولود ليلاً يعيد للبيت شيئاً من توازنه، دون أن تغيب الأم عن مولودها.',
        en: 'Night after night of broken sleep in the first weeks wears down both parents and spills into their days. A calm person in the nursery at night brings some balance back to the home, without taking mum away from her baby.',
      },
      {
        ar: 'إن كانت الأم ترضع طبيعياً، تحضر لها المربية المولود في موعد الرضعة ثم تعيده إلى نومه بعدها، فتعود الأم إلى فراشها سريعاً. وإن كانت الرضعات صناعية أو بحليب مخزّن، تتولاها المربية كما تحدد الأم. نحن مساعدة ليلية، لا رعاية صحية.',
        en: "If mum is breastfeeding, the nanny brings the baby to her for each feed, then burps and settles them again so she can go straight back to sleep. If feeds are by bottle or expressed milk, the nanny gives them exactly as mum says. We are night-time help, not health care.",
      },
    ],
  },
  who: {
    title: { ar: 'لمن تناسب المربية الليلية؟', en: 'Who a night nanny is for' },
    items: [
      { title: { ar: 'أم منهكة من السهر', en: 'A mother worn out by the nights' }, text: { ar: 'مرّت أسابيع دون نوم متصل، وتحتاج ليالي تستعيد فيها قوتها.', en: 'Weeks without unbroken sleep, and she needs a few nights to recover her strength.' } },
      { title: { ar: 'أب يعود إلى دوامه صباحاً', en: 'A father back at work in the morning' }, text: { ar: 'يريد أن يكون حاضراً في النهار، دون أن يذهب إلى عمله بعد ليلة بلا نوم.', en: 'He wants to be present by day without heading to work after a sleepless night.' } },
      { title: { ar: 'توأم أو مولودان', en: 'Twins' }, text: { ar: 'رضعتان في الوقت نفسه، وأيدٍ لا تكفي في منتصف الليل.', en: 'Two feeds at the same time, and not enough hands in the middle of the night.' } },
      { title: { ar: 'عائلة لديها أطفال صغار', en: 'A family with young children too' }, text: { ar: 'الإخوة يستيقظون مبكراً للمدرسة، ويحتاج الوالدان نوماً ليكونوا معهم.', en: 'The older ones are up early for school, and the parents need sleep to be there for them.' } },
    ],
  },
  included: {
    title: { ar: 'ما تقدمه المربية الليلية', en: 'What a night nanny takes care of' },
    items: [
      { ar: 'تهدئة المولود ومساعدته على النوم في سريره', en: 'Soothing baby and settling them in the cot' },
      { ar: 'المساعدة في الرضعات حسب تعليمات الأم', en: "Help with feeds, following mum's instructions" },
      { ar: 'تجهيز الرضّاعات وتعقيمها ليلاً', en: 'Preparing and sterilising bottles overnight' },
      { ar: 'التجشئة وتغيير الحفاض بعد كل رضعة', en: 'Burping and a nappy change after each feed' },
      { ar: 'تسجيل مواعيد الرضعات والنوم', en: 'A log of feeds and sleep times' },
      { ar: 'ملخص صباحي قصير للأم', en: 'A short morning handover for mum' },
    ],
  },
  notIncluded: [
    { ar: 'أي رعاية صحية للمولود، أو متابعة حرارته أو تنفسه بأجهزة', en: "Any health care for the baby, or monitoring temperature or breathing with devices" },
    { ar: 'إعطاء أي دواء أو قطرات للمولود', en: 'Giving the baby any medicine or drops' },
    { ar: 'استشارات الرضاعة أو تغيير نظام الرضعات', en: 'Feeding advice or changing the feeding plan' },
    { ar: 'تدريب المولود على النوم بطرق لم تختاروها', en: 'Sleep-training methods you have not chosen' },
  ],
  shifts: {
    title: { ar: 'الفترة الليلية: من المساء حتى الصباح', en: 'The night shift: evening to morning' },
    text: {
      ar: `تبدأ الليلة ${night.time.ar}. احجزوا ليلة واحدة حين تحتاجون راحة، أو ليالي محددة في الأسبوع، أو خطة شهرية للأسابيع الأولى.`,
      en: `The night runs ${night.time.en}. Book a single night when you need rest, set nights each week, or a monthly plan for the first weeks.`,
    },
    options: ['night', 'hourly', 'monthly', 'live-out'],
  },
  steps: {
    title: { ar: 'كيف تحجزون مربية ليلية', en: 'How to book a night nanny' },
    items: [
      { title: { ar: 'أخبرونا عن لياليكم', en: 'Tell us about your nights' }, text: { ar: 'عمر المولود، ونوع الرضاعة، والليالي التي تحتاجونها، على واتساب.', en: "Your baby's age, how they feed, and which nights you need, on WhatsApp." } },
      { title: { ar: 'نرشّح ونؤكد', en: 'We match and confirm' }, text: { ar: 'نختار من فريقنا من يناسبكم، ونؤكد الليالي والسعر.', en: 'We choose the right person from our team and confirm the nights and price.' } },
      { title: { ar: 'تسليم مسائي هادئ', en: 'A calm evening handover' }, text: { ar: 'تشرح الأم روتين الليل قبل نومها، وتجد ملخص الليلة في الصباح.', en: "Mum explains the night routine before bed, and finds the night's summary in the morning." } },
    ],
  },
  why: {
    title: { ar: 'لماذا تأتمن العائلات أمان على لياليها؟', en: 'Why families trust Aman with their nights' },
    text: {
      ar: 'لأنكم ستنامون وشخص آخر مستيقظ مع مولودكم، وهذا يحتاج ثقة كاملة. فريقنا خضع للتحقق من الخلفية، وتختارون مقدّماً أو مقدّمة للرعاية، وتبقى تعليمات الأم هي المرجع في كل رضعة.',
      en: "Because you will be asleep while someone else is awake with your baby, and that takes complete trust. Our team is background-checked, you choose a male or female caregiver, and mum's instructions guide every feed.",
    },
  },
  packages: {
    title: { ar: 'أسعار المربية الليلية', en: 'Night nanny prices' },
    text: { ar: 'تُسعّر الليالي حسب عددها في الأسبوع ومدة الخطة، ونؤكد السعر معكم على واتساب.', en: "Nights are priced by how many you need each week and how long the plan runs; we confirm the price on WhatsApp." },
    ids: [],
  },
  riyadh: {
    title: { ar: 'مربية ليلية في أي حي من الرياض', en: 'Night nannies across Riyadh' },
    text: {
      ar: 'نصل إلى بيتكم مساءً في أي مكان من الرياض قبل موعد نوم المولود، ونغادر صباحاً بعد أن تستيقظ الأم ونسلّمها ملخص الليلة.',
      en: "We arrive at your home anywhere in Riyadh before your baby's bedtime, and leave in the morning once mum is up and has the night's summary.",
    },
  },
  faqTitle: { ar: 'أسئلة عن المربية الليلية', en: 'Questions about night nannies' },
  faq: [
    {
      q: { ar: 'كم سعر المربية الليلية في الرياض؟', en: 'How much does a night nanny cost in Riyadh?' },
      a: { ar: 'يعتمد على عدد الليالي في الأسبوع ومدة الخطة. أرسلوا لنا احتياجكم على واتساب ونؤكد السعر قبل الحجز.', en: 'It depends on the number of nights a week and how long you need. Send us your needs on WhatsApp and we confirm the price before you book.' },
    },
    {
      q: { ar: 'ليلة واحدة أم خطة شهرية؟', en: 'One night, or a monthly plan?' },
      a: { ar: 'الليلة الواحدة تناسب من يحتاج راحة عاجلة. والخطة الشهرية تناسب الأسابيع الأولى، لأن المربية نفسها تعرف روتين مولودكم.', en: 'A single night suits urgent rest. A monthly plan suits the first weeks, because the same nanny learns your baby’s routine.' },
    },
    {
      q: { ar: 'ما ساعات الليلة بالضبط؟', en: 'What are the exact hours?' },
      a: { ar: `${night.label.ar} ${night.time.ar}. ولمن يحتاج رعاية في النهار أيضاً، يمكن إضافة الفترة الصباحية أو الإقامة.`, en: `The night shift runs ${night.time.en}. If you need daytime help too, add the day shift or a live-in plan.` },
    },
    {
      q: { ar: 'كيف تتم الرضعات إن كانت الأم ترضع طبيعياً؟', en: 'How do feeds work if mum is breastfeeding?' },
      a: { ar: 'تحضر المربية المولود للأم في موعد الرضعة، ثم تتولى التجشئة والتهدئة وإعادته إلى سريره، لتعود الأم إلى النوم.', en: 'The nanny brings the baby to mum for the feed, then handles burping and settling and puts baby back in the cot, so mum can go back to sleep.' },
    },
    {
      q: { ar: 'هل يمكن أن تكون المربية الليلية امرأة؟', en: 'Can the night nanny be a woman?' },
      a: { ar: 'نعم، تختارون مقدّماً أو مقدّمة للرعاية، والقرار لكم.', en: 'Yes. You choose a male or female caregiver; the decision is yours.' },
    },
    {
      q: { ar: 'هل تبقى المربية نفسها كل ليلة؟', en: 'Will we have the same nanny every night?' },
      a: { ar: 'في الخطط الأسبوعية والشهرية نحرص على ذلك، لأن المولود يهدأ أسرع مع صوت يعرفه.', en: 'On weekly and monthly plans, yes: babies settle faster with a voice they know.' },
    },
    {
      q: { ar: 'ماذا نجهّز قبل الليلة الأولى؟', en: 'What should we prepare before the first night?' },
      a: {
        ar: `مكاناً مريحاً قرب غرفة المولود، وتعليمات الرضعات مكتوبة، والرضّاعات والحفاضات في متناول اليد، ورقم طبيب الأطفال. ويتحدث فريقنا ${business.languages.ar}.`,
        en: `A comfortable spot near the nursery, feeding instructions written down, bottles and nappies within reach, and your paediatrician's number. Our team speaks ${business.languages.en}.`,
      },
    },
  ],
  relatedTitle: { ar: 'خدمات تكمّل الليالي الهادئة', en: 'More support for the newborn weeks' },
  related: ['newborn-care', 'live-in-nanny', 'home-cleaning'],
  whatsapp: { ar: 'السلام عليكم، أرغب بحجز مربية ليلية للمولود.', en: 'Hello, I would like to book a night nanny for our newborn.' },
  booking: 'newborn-care',
  hub: {
    bestFor: { ar: 'ليالي المولود الأولى', en: "A newborn's first nights" },
    shifts: { ar: `ليلي (${night.time.ar})`, en: `Night (${night.time.en})` },
    combine: ['newborn-care', 'home-cleaning'],
  },
};

export default page;
