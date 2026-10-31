// Elderly Companionship. Keyword: مرافقة كبار السن (secondary: رعاية كبار السن، مرافقة الوالدين).
// Companionship and everyday help only: never nursing, medical or patient care. REVIEW-AR
import type { ServicePage } from '../services';
import { business } from '../business';
import { fromRate } from '../packages';
import { rate } from '../../i18n/ui';

const { day, night } = business.shifts;
const from = fromRate('elderly-companionship');

const page: ServicePage = {
  slug: 'elderly-companionship',
  tier: 'core',
  icon: 'elder',
  intro: {
    title: { ar: 'مرافقة الوالدين وكبار السن في بيتهم', en: 'Companionship for your parents, in their own home' },
    text: [
      {
        ar: 'مرافقة كبار السن في المنزل بالرياض خدمة لمن يريد لوالديه صحبة طيبة ومساعدة يومية وهو في دوامه أو بعيد عنهم. يجلس معهم شخص صبور من فريق الرعاية، يحادثهم ويحضّر لهم وجبة خفيفة ويرافقهم في مشيهم ومواعيدهم.',
        en: 'Elderly companionship at home in Riyadh is for families who want their parents to have kind company and everyday help while they are at work or living elsewhere. A patient caregiver sits with them, talks with them, prepares a light meal and walks beside them to appointments.',
      },
      {
        ar: 'برّ الوالدين لا يتوقف حين تنشغلون. كثير من كبار السن لا يحتاجون إلا من يشاركهم القهوة والحديث، ويذكّرهم بموعد، ويطمئن أبناءهم عليهم برسالة قصيرة. هذا ما نقدمه: رعاية كبار السن بمعناها الإنساني، باحترام لعاداتهم ووقتهم.',
        en: "Caring for your parents doesn't pause when life gets busy. Many older people mostly need someone to share coffee and conversation, remind them of an appointment, and reassure their children with a short message. That is what we offer: care for the elderly in its human sense, with respect for their habits and pace.",
      },
      {
        ar: 'وهي خدمة غير طبية. لا نقدم رعاية صحية ولا علاجاً، وما يحتاج متابعة صحية يبقى مع الأطباء والمختصين.',
        en: 'It is a non-medical service. We do not provide health care or treatment; anything that needs health monitoring stays with doctors and specialists.',
      },
    ],
  },
  who: {
    title: { ar: 'لمن تناسب مرافقة كبار السن؟', en: 'Who elderly companionship is for' },
    items: [
      {
        title: { ar: 'والدان يعيشان وحدهما', en: 'Parents living on their own' },
        text: { ar: 'الأبناء في دوامهم أو في مدينة أخرى، والوالدان بخير لكن النهار طويل والوحدة ثقيلة.', en: 'The children are at work or in another city. Your parents are well, but the day is long and the house is quiet.' },
      },
      {
        title: { ar: 'أمّ أو أب يقيم معكم', en: 'A parent who lives with you' },
        text: { ar: 'تريدون أن يجد من يجالسه ويرافقه في مشيه حين تخرجون إلى العمل أو المدرسة.', en: 'You want them to have someone to sit and walk with while the rest of the family is at work or school.' },
      },
      {
        title: { ar: 'مواعيد ومراجعات متكررة', en: 'Regular appointments' },
        text: { ar: 'موعد في العيادة أو مشوار للبنك، ويحتاج من يرافقه وينتظر معه ويعود به مطمئناً.', en: 'A clinic visit or a trip to the bank, and they need someone beside them who waits with them and brings them home.' },
      },
      {
        title: { ar: 'بعد فترة تعب', en: 'After a tiring spell' },
        text: { ar: 'بعد عودته من المستشفى يحتاج صحبة ومساعدة في يومه، إلى جانب متابعة طبيبه.', en: 'Back home after a hospital stay, they need company and help with the day, alongside their doctor\'s follow-up.' },
      },
    ],
  },
  included: {
    title: { ar: 'ما تشمله مرافقة كبار السن', en: 'What elderly companionship includes' },
    items: [
      { ar: 'صحبة وحديث وقراءة', en: 'Company, conversation and reading aloud' },
      { ar: 'مشي خفيف داخل البيت أو قربه', en: 'Gentle walks at or near home' },
      { ar: 'تحضير وجبات خفيفة ومشروبات', en: 'Preparing light meals and drinks' },
      { ar: 'تذكير بمواعيد الدواء حسب جدولكم المكتوب', en: 'Medication reminders from your written schedule' },
      { ar: 'مرافقتهم إلى المواعيد والمشاوير', en: 'Going with them to appointments and errands' },
      { ar: 'رسالة قصيرة للعائلة عن يومهم', en: 'A short message to the family about their day' },
    ],
  },
  notIncluded: [
    { ar: 'أي رعاية صحية: لا حقن، ولا تضميد، ولا قياسات أو متابعة لحالة مرضية', en: 'Any health care: no injections, wound dressing, readings or monitoring of a condition' },
    { ar: 'إعطاء الأدوية أو تغيير جرعاتها؛ نكتفي بالتذكير بها', en: 'Giving medicine or changing doses; we only remind' },
    { ar: 'رفع كبير السن أو نقله إن كان لا يستطيع الحركة', en: 'Lifting or transferring someone who cannot move on their own' },
    { ar: 'العناية الشخصية الكاملة لمن يحتاج رعاية متخصصة', en: 'Full personal care for someone who needs specialist support' },
  ],
  shifts: {
    title: { ar: 'مرافقة يومية، أو بالساعة، أو بإقامة', en: 'Daily, hourly or live-in companionship' },
    text: {
      ar: 'بعض العائلات تحتاج ساعات قليلة في الأسبوع، وبعضها يريد صحبة ثابتة كل يوم. نرتب الفترة الصباحية أو الليلية، أو إقامة كاملة مع والديكم، وتتغير الخطة متى احتجتم.',
      en: 'Some families need a few hours a week; others want steady company every day. We arrange day or night shifts, or a caregiver who lives in with your parents, and the plan can change whenever you need.',
    },
    options: ['day', 'night', 'live-in', 'live-out', 'hourly', 'monthly'],
  },
  steps: {
    title: { ar: 'كيف نبدأ مرافقة والديكم', en: 'How we start with your parents' },
    items: [
      {
        title: { ar: 'حدثونا عنهم', en: 'Tell us about them' },
        text: { ar: 'على واتساب: أعمارهم، وروتينهم، وما يحبونه، والأيام التي تحتاجونها.', en: 'On WhatsApp: their ages, routine, what they enjoy, and the days you need.' },
      },
      {
        title: { ar: 'نختار الشخص المناسب', en: 'We choose the right person' },
        text: { ar: 'نرشّح من فريقنا من يناسب طباعهم ولغتهم، ونؤكد معكم السعر والمواعيد.', en: 'We suggest someone from our team who suits their temperament and language, and confirm price and times.' },
      },
      {
        title: { ar: 'تعارف بحضوركم', en: 'A first meeting with you there' },
        text: { ar: 'نفضّل أن تكون الزيارة الأولى بحضور أحد الأبناء، ليطمئن الجميع ويبدأ الود.', en: 'We prefer the first visit to happen with one of the family present, so everyone feels at ease.' },
      },
    ],
  },
  why: {
    title: { ar: 'لماذا تختار العائلات أمان لرعاية كبار السن؟', en: 'Why families choose Aman to be with their parents' },
    text: {
      ar: 'لأن والديكم يستحقون من يعاملهم بالاحترام الذي ربّوكم عليه. فريقنا خضع للتحقق من الخلفية، ويعرف أن الصبر والإنصات أهم ما في هذه الخدمة، وأن عادات البيت ومواعيد الصلاة والزيارات العائلية لها الأولوية.',
      en: 'Because your parents deserve to be treated with the respect they taught you. Our team is background-checked and knows that patience and listening matter most here, and that family habits, prayer times and visits always come first.',
    },
  },
  packages: {
    title: { ar: 'باقات مرافقة كبار السن', en: 'Elderly companionship packages' },
    text: { ar: 'يوم واحد عند الحاجة، أو خطط شهرية لخمسة أو ستة أو سبعة أيام في الأسبوع. الأسعار المعروضة مبدئية.', en: 'A single day when you need it, or monthly plans for five, six or seven days a week. Prices shown are provisional.' },
  },
  riyadh: {
    title: { ar: 'مرافقة كبار السن في الرياض كلها', en: 'Companionship for parents across Riyadh' },
    text: {
      ar: 'سواء كان والداكم في بيت العائلة القديم أو قريبين منكم، نصل إليهم في أي حي من أحياء الرياض. وإن كان المشوار إلى موعد بعيد، نخطط للوقت حتى لا يتأخروا ولا يتعبوا من الانتظار.',
      en: "Whether your parents live in the old family home or around the corner from you, we reach them anywhere in Riyadh. If an appointment is across town, we plan the timing so they are never late or worn out by waiting.",
    },
  },
  faqTitle: { ar: 'أسئلة عن مرافقة كبار السن', en: 'Questions about elderly companionship' },
  faq: [
    {
      q: { ar: 'كم سعر مرافقة كبار السن؟', en: 'How much does elderly companionship cost?' },
      a: from
        ? {
            ar: `تبدأ الخطط الشهرية من ${rate(from)} ر.س للساعة، ويوجد يوم واحد عند الحاجة. الأسعار مبدئية، ونؤكدها معكم على واتساب.`,
            en: `Monthly plans start from SAR ${rate(from)} an hour, and a single day is available too. Prices are provisional and confirmed with you on WhatsApp.`,
          }
        : { ar: 'نؤكد السعر معكم على واتساب حسب الأيام والساعات.', en: 'We confirm the price with you on WhatsApp, based on the days and hours.' },
    },
    {
      q: { ar: 'هل نحجز بالساعة أم بالشهر؟', en: 'Should we book by the hour or monthly?' },
      a: {
        ar: 'الحجز بالساعة يناسب موعداً أو يوماً تغيبون فيه. والخطة الشهرية تناسب من يريد صحبة ثابتة، لأن الشخص نفسه يعتاد على والديكم ويعتادون عليه.',
        en: 'Hourly suits an appointment or a day you are away. A monthly plan suits steady company, because the same person gets to know your parents and they get to know them.',
      },
    },
    {
      q: { ar: 'هل تقدمون رعاية صحية لكبار السن؟', en: 'Do you provide health care for older people?' },
      a: {
        ar: 'لا. خدمتنا صحبة ومساعدة يومية غير طبية. الاحتياجات الصحية تحتاج مختصين، ويمكننا أن نرافق والديكم إلى مواعيدهم معهم.',
        en: 'No. Our service is non-medical company and everyday help. Health needs require specialists, and we can go with your parents to their appointments.',
      },
    },
    {
      q: { ar: 'ما أوقات المرافقة؟', en: 'What hours can you cover?' },
      a: {
        ar: `${day.label.ar} ${day.time.ar}، و${night.label.ar} ${night.time.ar} لمن يحتاج من يكون قريباً ليلاً، أو إقامة كاملة.`,
        en: `Day shift ${day.time.en}, night shift ${night.time.en} for parents who want someone close by at night, or live-in.`,
      },
    },
    {
      q: { ar: 'هل نختار أن يكون المرافق رجلاً أو امرأة؟', en: 'Can we choose a male or female companion?' },
      a: {
        ar: 'نعم. قد تختارون مرافقاً للأب ومرافقة للأم، والاختيار دائماً لكم.',
        en: 'Yes. You might choose a man to keep your father company and a woman for your mother; the choice is always yours.',
      },
    },
    {
      q: { ar: 'هل يتحدث المرافق العربية؟', en: 'Will the companion speak Arabic?' },
      a: {
        ar: `يتحدث فريقنا ${business.languages.ar}. أخبرونا بلغة والديكم المفضلة لنرشّح من يسهل عليهم الحديث معه.`,
        en: `Our team speaks ${business.languages.en}. Tell us which language your parents prefer, and we'll suggest someone they can talk to easily.`,
      },
    },
    {
      q: { ar: 'هل يبقى الشخص نفسه مع والدينا؟', en: 'Will the same person stay with our parents?' },
      a: {
        ar: 'في الخطط الشهرية نعم، لأن الألفة أساس هذه الخدمة. وإن احتجنا إلى بديل في يوم ما نخبركم مسبقاً.',
        en: "On monthly plans, yes: familiarity is the heart of this service. If we ever need a substitute for a day, we tell you in advance.",
      },
    },
  ],
  relatedTitle: { ar: 'خدمات تريح والديكم أكثر', en: 'More help for your parents' },
  related: ['pick-up-drop-off', 'errands', 'home-cleaning'],
  whatsapp: { ar: 'السلام عليكم، أرغب بحجز مرافقة كبار السن في المنزل.', en: 'Hello, I would like to book elderly companionship at home.' },
  booking: 'elderly-companionship',
  hub: {
    bestFor: { ar: 'والدان يحتاجان صحبة ومساعدة يومية', en: 'Parents who need daily company and help' },
    shifts: { ar: 'بالساعة، يومي، شهري، ليلي، إقامة', en: 'Hourly, daily, monthly, night, live-in' },
    combine: ['errands', 'pick-up-drop-off'],
  },
};

export default page;
