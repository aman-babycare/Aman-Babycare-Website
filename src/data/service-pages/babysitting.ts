// Babysitting. Keyword: جليسة أطفال (secondary: مربية أطفال بالساعة). REVIEW-AR
import type { ServicePage } from '../services';
import { business } from '../business';
import { fromRate } from '../packages';
import { rate } from '../../i18n/ui';

const { day, night } = business.shifts;
const from = fromRate('babysitting');

const page: ServicePage = {
  slug: 'babysitting',
  tier: 'core',
  icon: 'child',
  intro: {
    title: { ar: 'مربية أطفال أو جليسة بالساعة، حسب يومكم', en: 'A nanny or an hourly babysitter, whatever your day needs' },
    text: [
      {
        ar: 'جليسة أطفال في المنزل بالرياض تأتي إليكم بالساعة لمشوار أو مناسبة، أو بخطة شهرية لأيام الدوام. شخص هادئ من فريق الرعاية يلعب مع أطفالكم ويطعمهم ويتابع قيلولتهم، ويلتزم بقواعد بيتكم كما هي.',
        en: 'A babysitter at home in Riyadh comes by the hour for an errand or a family occasion, or on a monthly plan for working days. A calm caregiver plays with your children, feeds them and keeps nap times, following your house rules exactly.',
      },
      {
        ar: 'وحين تحتاجون رعاية منتظمة، يصبح الحجز خطة ثابتة مع مربية أطفال أو مقدّم رعاية يعرف أطفالكم واحداً واحداً: من يحب القصة قبل النوم، ومن يحتاج تذكيراً بواجباته، ومن لا يأكل إلا طبقاً بعينه.',
        en: 'When you need regular care, the booking becomes a steady plan with a nanny who knows each child: who loves a story before bed, who needs a nudge with homework, and who will only eat one particular dish.',
      },
      {
        ar: 'ومن يحتاج مربية أطفال بالساعة لأيام متفرقة يحجزها متى شاء، دون عقد طويل. وفي كل الحالات نحن رعاية يومية وتربية بالحب والصبر، لا بديل عن قراراتكم في تربية أطفالكم.',
        en: 'If you only need a nanny by the hour on scattered days, book whenever you like, with no long contract. Either way, we offer daily care with patience and warmth; how your children are raised stays your decision.',
      },
    ],
  },
  who: {
    title: { ar: 'متى تحتاج العائلة جليسة أطفال؟', en: 'When families call a babysitter' },
    items: [
      {
        title: { ar: 'أم وأب يعملان', en: 'Two working parents' },
        text: { ar: 'دوامان طويلان وأطفال يعودون من المدرسة قبل الجميع؛ جليسة ثابتة تسد الساعات بين الجرس والعودة.', en: 'Two long work days and children home from school before anyone else. A regular babysitter covers the hours in between.' },
      },
      {
        title: { ar: 'مناسبة أو عزيمة', en: 'A wedding or a family gathering' },
        text: { ar: 'ليلة زواج أو عشاء عائلي، والأطفال الصغار يحتاجون من يجلس معهم وينيّمهم في موعدهم.', en: 'A wedding night or a family dinner, and the little ones need someone to sit with them and put them to bed on time.' },
      },
      {
        title: { ar: 'أم مع مولود جديد', en: 'A mother with a new baby' },
        text: { ar: 'المولود يأخذ وقتها كله، وأخوه الأكبر يحتاج من يلعب معه ويأخذ باله منه.', en: 'The baby takes all her time, and the older brother needs someone to play with him and keep an eye on him.' },
      },
      {
        title: { ar: 'ساعات لأنفسكم', en: 'A few hours to yourselves' },
        text: { ar: 'موعد، أو تسوق، أو ساعة هدوء؛ حجز بالساعة يكفي دون التزام شهري.', en: 'An appointment, some shopping, or just an hour of quiet: an hourly booking is enough, with no monthly commitment.' },
      },
    ],
  },
  included: {
    title: { ar: 'ما تقدمه جليسة الأطفال في الزيارة', en: 'What a babysitter does during a visit' },
    items: [
      { ar: 'لعب وأنشطة تناسب عمر كل طفل', en: 'Play and activities suited to each age' },
      { ar: 'تحضير وجبات خفيفة وإطعام الأطفال', en: 'Preparing snacks and feeding the children' },
      { ar: 'مساعدة في الواجبات المدرسية والقراءة', en: 'Homework help and reading together' },
      { ar: 'روتين القيلولة والنوم في موعده', en: 'Naps and bedtime on schedule' },
      { ar: 'استحمام الأطفال الصغار وتجهيز ملابسهم', en: 'Bath time for little ones and clothes laid out' },
      { ar: 'ترتيب الألعاب وغرفة الأطفال قبل المغادرة', en: "Tidying toys and the children's room before leaving" },
    ],
  },
  notIncluded: [
    { ar: 'أي رعاية صحية أو إعطاء أدوية دون تعليماتكم المكتوبة', en: 'Any health care, or medicine without your written instructions' },
    { ar: 'عقاب الأطفال أو تغيير قواعدكم في التربية', en: 'Disciplining the children or changing your parenting rules' },
    { ar: 'أعمال البيت الثقيلة أثناء رعاية الأطفال الصغار', en: 'Heavy housework while looking after young children' },
    { ar: 'اصطحاب الأطفال خارج البيت دون إذن مسبق منكم', en: 'Taking the children out without your prior permission' },
  ],
  shifts: {
    title: { ar: 'جليسة أطفال بالساعة أو بالشهر، نهاراً أو ليلاً', en: 'By the hour or by the month, day or night' },
    text: {
      ar: 'الحجز بالساعة يناسب المشاوير والمناسبات. والخطط الأسبوعية والشهرية تناسب أيام الدوام والدراسة. ولمن يحتاج رعاية أطول، توجد مربية مقيمة تعيش مع العائلة.',
      en: 'Hourly booking suits errands and occasions. Weekly and monthly plans suit work and school days. For longer care, a live-in nanny stays with your family.',
    },
    options: ['hourly', 'monthly', 'day', 'night', 'live-out', 'live-in'],
  },
  steps: {
    title: { ar: 'كيف تحجزون جليسة أطفال', en: 'How to book a babysitter' },
    items: [
      {
        title: { ar: 'أخبرونا عن أطفالكم', en: 'Tell us about your children' },
        text: { ar: 'على واتساب: عدد الأطفال وأعمارهم، والموعد، وأي حساسية أو تعليمات طعام.', en: 'On WhatsApp: how many children, their ages, the time, and any allergies or food rules.' },
      },
      {
        title: { ar: 'نرشّح الشخص المناسب', en: 'We suggest the right person' },
        text: { ar: 'نختار من فريقنا من يناسب أعمار أطفالكم، ونؤكد السعر قبل الحجز.', en: "We choose someone from our team who suits your children's ages, and confirm the price before you book." },
      },
      {
        title: { ar: 'تعارف ثم رعاية', en: 'A hello, then care' },
        text: { ar: 'تعارف قصير مع الأطفال في الزيارة الأولى، وملخص عند عودتكم: ماذا أكلوا ومتى ناموا.', en: 'A short hello with the children on the first visit, and a handover when you return: what they ate and when they slept.' },
      },
    ],
  },
  why: {
    title: { ar: 'لماذا تثق العائلات بجليسة أطفال من أمان؟', en: 'Why parents trust an Aman babysitter' },
    text: {
      ar: 'لأن ترك الأطفال مع شخص جديد قرار كبير. نختار من فريقنا من خضع للتحقق من الخلفية، ونسألكم عن قواعد البيت قبل أول زيارة: الشاشات، والحلويات، وموعد النوم، ثم نلتزم بها كما هي.',
      en: 'Because leaving your children with someone new is a big decision. Everyone we send is background-checked, and we ask about your house rules before the first visit, from screens and sweets to bedtime, then keep to them.',
    },
  },
  packages: {
    title: { ar: 'باقات جليسة الأطفال', en: 'Babysitting packages' },
    text: { ar: 'بالساعة، أو بخطط أسبوعية وشهرية بسعر أقل للساعة.', en: 'By the hour, or on weekly and monthly plans with a lower hourly rate.' },
  },
  riyadh: {
    title: { ar: 'جليسة أطفال في كل أحياء الرياض', en: 'Babysitters all over Riyadh' },
    text: {
      ar: 'نرسل جليسة الأطفال إلى بيتكم أينما كنتم في الرياض. أخبرونا بالحي ووقت الزيارة، ونخطط للموعد حتى مع زحمة الطريق في ساعات الذروة.',
      en: "We send a babysitter to your home wherever you live in Riyadh. Tell us your neighbourhood and time, and we plan the visit around rush-hour traffic.",
    },
  },
  faqTitle: { ar: 'أسئلة عن جليسة الأطفال', en: 'Questions about babysitting' },
  faq: [
    {
      q: { ar: 'كم سعر جليسة الأطفال في الرياض؟', en: 'How much does a babysitter cost in Riyadh?' },
      a: from
        ? {
            ar: `تبدأ أسعار الساعة من ${rate(from)} ر.س في الخطط الشهرية، والحجز بالساعة أعلى قليلاً للساعة. ونؤكد معكم الإجمالي على واتساب قبل البدء.`,
            en: `Hourly rates start from SAR ${rate(from)} on monthly plans; one-off hourly bookings cost a little more per hour. We confirm the total with you on WhatsApp before you start.`,
          }
        : { ar: 'نؤكد السعر معكم على واتساب حسب عدد الأطفال والساعات.', en: 'We confirm the price with you on WhatsApp, based on the number of children and hours.' },
    },
    {
      q: { ar: 'ما الفرق بين الحجز بالساعة والخطة الشهرية؟', en: "What's the difference between hourly booking and a monthly plan?" },
      a: {
        ar: 'الحجز بالساعة لمرة واحدة أو لأيام متفرقة. والخطة الشهرية أيام ثابتة كل أسبوع مع الشخص نفسه، وسعر الساعة فيها أقل.',
        en: 'Hourly booking is for a one-off or for scattered days. A monthly plan gives you set days every week with the same person, at a lower hourly rate.',
      },
    },
    {
      q: { ar: 'هل تأتي جليسة الأطفال ليلاً؟', en: 'Can a babysitter come in the evening or at night?' },
      a: {
        ar: `نعم. ${day.label.ar} ${day.time.ar}، و${night.label.ar} ${night.time.ar}، أو بالساعة في المساء للمناسبات.`,
        en: `Yes. The day shift runs ${day.time.en} and the night shift ${night.time.en}, or book by the hour for an evening occasion.`,
      },
    },
    {
      q: { ar: 'هل تبقى الجليسة نفسها كل مرة؟', en: 'Will we have the same babysitter each time?' },
      a: {
        ar: 'في الخطط الأسبوعية والشهرية نحرص على أن يبقى الشخص نفسه من فريق الرعاية ليعتاد عليه الأطفال. وفي الحجز بالساعة نحاول ذلك قدر الإمكان.',
        en: 'On weekly and monthly plans we keep the same caregiver so the children settle. For hourly bookings we try to send the same person whenever we can.',
      },
    },
    {
      q: { ar: 'هل نختار مقدّماً أو مقدّمة رعاية؟', en: 'Can we choose a male or female sitter?' },
      a: {
        ar: 'نعم، الاختيار لكم. أخبرونا عند الحجز بما يناسب بيتكم وأعمار أطفالكم.',
        en: "Yes, it's your choice. Tell us when you book what suits your home and your children's ages.",
      },
    },
    {
      q: { ar: 'هل تتحدث الجليسة العربية؟', en: 'Does the babysitter speak Arabic?' },
      a: {
        ar: `يتحدث فريقنا ${business.languages.ar}، وكثير من الأطفال يستمتعون بتعلم كلمات إنجليزية جديدة أثناء اللعب.`,
        en: `Our team speaks ${business.languages.en}. Children often enjoy picking up new English words while they play.`,
      },
    },
    {
      q: { ar: 'ما الأعمار التي ترعونها؟', en: 'What ages do you look after?' },
      a: {
        ar: 'من الرضّع إلى أطفال المدرسة. أخبرونا بأعمار أطفالكم عند الحجز لنرشّح لكم الشخص الأنسب.',
        en: "From babies to school-age children. Tell us your children's ages when you book and we'll suggest the best person.",
      },
    },
    {
      q: { ar: 'ماذا نجهّز قبل وصول الجليسة؟', en: 'What should we have ready before the sitter arrives?' },
      a: {
        ar: 'جدول الطفل اليومي، وأي حساسية أو تعليمات طعام، ورقم للتواصل معكم ورقم للطوارئ.',
        en: "Your child's daily routine, any allergies or food rules, a number to reach you and an emergency contact.",
      },
    },
  ],
  relatedTitle: { ar: 'خدمات تُجمع مع رعاية الأطفال', en: 'Services families add to babysitting' },
  related: ['live-in-nanny', 'pick-up-drop-off', 'newborn-care'],
  whatsapp: { ar: 'السلام عليكم، أرغب بحجز جليسة أطفال في المنزل.', en: 'Hello, I would like to book a babysitter at home.' },
  booking: 'babysitting',
  hub: {
    bestFor: { ar: 'أيام الدوام، والمناسبات، وساعات الراحة', en: 'Work days, occasions and a few free hours' },
    shifts: { ar: 'بالساعة، بالشهر، نهاري، ليلي، إقامة', en: 'Hourly, monthly, day, night, live-in' },
    combine: ['pick-up-drop-off', 'home-cleaning'],
  },
};

export default page;
