// Home Cleaning. Keyword (care): تنظيف وترتيب المنزل بالساعة; (worker): عاملات نظافة بالساعة, with
// تنظيف شقق وفلل and عاملة منزلية بالساعة as secondaries. Rewritten Nov 2026 (client request): everyday
// cleaning, a deep clean of the home (move-in/out, after occasions), laundry and ironing, and regular weekly or
// monthly plans. Still never target «شركة تنظيف»: specialist work with machines (tanks, sofa shampooing, AC)
// stays out. REVIEW-AR
import type { ServicePage } from '../services';
import { business } from '../business';

const { day } = business.shifts;

const page: ServicePage = {
  slug: 'home-cleaning',
  tier: 'core',
  icon: 'sparkle',
  intro: {
    title: { ar: 'تنظيف يومي أو عميق، وغسيل وكوي، بخطة تناسبكم', en: 'Everyday or deep cleaning, laundry and ironing, on your schedule' },
    text: [
      {
        care: {
          ar: 'تنظيف وترتيب المنزل بالساعة في الرياض: يأتي إليكم شخص من فريق أمان لساعات تحددونها، فينظف الغرف والمطبخ ودورات المياه، ويغسل الملابس ويكويها، ويرتب البيت. زيارة واحدة قبل الضيوف، أو تنظيف عميق للبيت كله، أو أيام ثابتة كل أسبوع.',
          en: 'Hourly home cleaning in Riyadh: someone from the Aman team comes for the hours you choose to clean the rooms, kitchen and bathrooms, wash and iron the laundry, and put the home in order. One visit before guests, a deep clean of the whole home, or set days every week.',
        },
        worker: {
          ar: 'عاملات نظافة بالساعة في الرياض: تأتي إليكم عاملة منزلية بالساعة من فريق أمان لساعات تحددونها، فتنظف الغرف والمطبخ ودورات المياه، وتغسل الملابس وتكويها، وترتب البيت. زيارة واحدة قبل الضيوف، أو تنظيف عميق للبيت كله، أو أيام ثابتة كل أسبوع.',
          en: 'Hourly home cleaning in Riyadh: someone from the Aman team comes for the hours you choose to clean the rooms, kitchen and bathrooms, wash and iron the laundry, and put the home in order. One visit before guests, a deep clean of the whole home, or set days every week.',
        },
      },
      {
        ar: 'للتنظيف العميق نأخذ وقتنا: داخل الخزائن والثلاجة والفرن، وخلف الأجهزة وتحت الأسرّة، والبلاط والفواصل، والنوافذ من الداخل. يناسب الانتقال إلى بيت جديد أو الخروج منه، وما قبل رمضان والعيد، وما بعد العزائم الكبيرة.',
        en: 'A deep clean takes its time: inside cupboards, the fridge and the oven, behind appliances and under beds, tiles and grout, and windows from the inside. Ideal for moving in or out, before Ramadan and Eid, and after a big gathering.',
      },
      {
        ar: 'ومع الخطة الأسبوعية أو الشهرية يأتي الشخص نفسه في الأيام نفسها، فيعرف بيتكم وطريقتكم، ويبقى البيت نظيفاً طوال الوقت دون أن تفكروا فيه.',
        en: 'On a weekly or monthly plan the same person comes on the same days, learns your home and how you like things, and the house stays clean without you having to think about it.',
      },
    ],
  },
  who: {
    title: { ar: 'من يحجز تنظيف المنزل معنا؟', en: 'Who books home cleaning with us' },
    items: [
      {
        title: { ar: 'عائلات بدوام طويل', en: 'Families with long working weeks' },
        text: { ar: 'تريدون عطلة نهاية الأسبوع لعائلتكم، لا للتنظيف والغسيل.', en: 'You want the weekend for family, not for cleaning and laundry.' },
      },
      {
        title: { ar: 'الانتقال إلى بيت جديد', en: 'Moving in or out' },
        text: { ar: 'بيت جديد يحتاج تنظيفاً عميقاً قبل أن تدخلوه، أو بيت قديم قبل تسليمه.', en: 'A new home needs a deep clean before you move in, or the old one before you hand it back.' },
      },
      {
        title: { ar: 'قبل رمضان والعيد والضيوف', en: 'Before Ramadan, Eid and guests' },
        text: { ar: 'المجلس والمطبخ ودورة مياه الضيوف تحتاج لمسة كاملة.', en: 'The majlis, the kitchen and the guest bathroom all need the full treatment.' },
      },
      {
        title: { ar: 'بيت فيه أطفال', en: 'A home with children' },
        text: { ar: 'غسيل لا يتوقف، وألعاب في كل مكان، ووقت لا يكفي.', en: "Laundry that never stops, toys everywhere, and never enough time." },
      },
    ],
  },
  included: {
    title: { ar: 'ما يشمله تنظيف المنزل', en: 'What home cleaning covers' },
    items: [
      { ar: 'الغرف والمجلس وأماكن المعيشة: غبار وكنس ومسح', en: 'Bedrooms, the majlis and living areas: dusting, vacuuming and mopping' },
      { ar: 'المطبخ: الأسطح والأحواض والأجهزة', en: 'The kitchen: counters, sinks and appliances' },
      { ar: 'دورات المياه بالكامل', en: 'Bathrooms, top to bottom' },
      { ar: 'الغسيل والكوي وترتيب الملابس في الخزائن', en: 'Laundry, ironing and putting clothes away' },
      { ar: 'تغيير الأغطية وترتيب الأسرّة', en: 'Changing sheets and making beds' },
      { ar: 'تنظيف عميق: داخل الخزائن والثلاجة والفرن، وخلف الأجهزة، والبلاط والفواصل', en: 'Deep cleaning: inside cupboards, the fridge and oven, behind appliances, tiles and grout' },
      { ar: 'النوافذ والأبواب من الداخل', en: 'Windows and doors from the inside' },
    ],
  },
  notIncluded: [
    { ar: 'غسيل الكنب والسجاد بالمكائن، وغسيل الخزانات والمكيفات', en: 'Machine shampooing of sofas and carpets, water tanks or AC units' },
    { ar: 'مكافحة الحشرات', en: 'Pest control' },
    { ar: 'الأعمال على ارتفاع أو الواجهات الخارجية', en: 'Work at height or on outside walls and windows' },
    { ar: 'نقل الأثاث الثقيل', en: 'Moving heavy furniture' },
  ],
  shifts: {
    title: { ar: 'زيارة واحدة، أو خطة أسبوعية أو شهرية', en: 'One visit, or a weekly or monthly plan' },
    text: {
      ar: `أغلب زيارات التنظيف في ${day.label.ar} (${day.time.ar}). احجزوا ساعات لمرة واحدة أو يوماً كاملاً للتنظيف العميق، أو أياماً ثابتة كل أسبوع أو كل شهر، أو مساعدة منزلية مقيمة لمن يحتاج يداً كل يوم.`,
      en: `Most cleaning visits happen during the day shift (${day.time.en}). Book a few hours or a full day for a deep clean, set days every week or month, or live-in home help if you need a hand every day.`,
    },
    options: ['hourly', 'day', 'weekly', 'monthly', 'live-out', 'live-in'],
  },
  steps: {
    title: { ar: 'كيف تحجزون تنظيف المنزل', en: 'How to book home cleaning' },
    items: [
      {
        title: { ar: 'أرسلوا تفاصيل البيت', en: 'Send us the details' },
        text: { ar: 'على واتساب: شقة أو فيلا، وعدد الغرف، وتنظيف عادي أو عميق، وهل تحتاجون الغسيل والكوي.', en: 'On WhatsApp: apartment or villa, how many rooms, a regular or deep clean, and whether you need laundry and ironing.' },
      },
      {
        title: { ar: 'نقترح الخطة والسعر', en: 'We suggest the plan and price' },
        text: { ar: 'نقدّر الساعات المناسبة، ونقترح زيارة واحدة أو خطة أسبوعية، ونؤكد السعر قبل الحجز.', en: 'We estimate the hours, suggest a single visit or a weekly plan, and confirm the price before you book.' },
      },
      {
        title: { ar: 'جولة أخيرة معكم', en: 'A final walk-through' },
        text: { ar: 'قبل المغادرة نمر معكم على البيت لنتأكد أن كل شيء كما تحبون.', en: 'Before we leave, we walk through the home with you to check everything is as you like it.' },
      },
    ],
  },
  why: {
    title: { ar: 'لماذا تختارون أمان لتنظيف بيتكم؟', en: 'Why families choose Aman for home cleaning' },
    text: {
      ar: 'لأن من يدخل غرفكم ويرتب خزائنكم يجب أن يكون أميناً قبل أن يكون ماهراً. فريقنا خضع للتحقق من الخلفية، ولا يلمس ما طلبتم تركه، ويستطيع أن يجمع التنظيف مع رعاية الأطفال أو تحضير الوجبات في الزيارة نفسها.',
      en: "Because anyone who enters your rooms and sorts your wardrobes must be trustworthy before they are skilled. Our team is background-checked, leaves alone anything you ask, and can combine cleaning with babysitting or cooking on the same visit.",
    },
  },
  packages: {
    title: { ar: 'أسعار تنظيف المنزل', en: 'Home cleaning prices' },
    text: { ar: 'ثلاث زيارات أسبوعياً بسعر ثابت، أو زيارة واحدة أو تنظيف عميق يُسعّر حسب حجم البيت، ونؤكد السعر على واتساب قبل الزيارة.', en: 'Three visits a week at a set price, or a single visit or deep clean priced by the size of your home; we confirm the price on WhatsApp before the visit.' },
  },
  riyadh: {
    title: { ar: 'تنظيف المنازل في كل أحياء الرياض', en: 'Home cleaning anywhere in Riyadh' },
    text: {
      ar: 'من الشقق الصغيرة إلى الفلل الكبيرة، نصل إلى بيتكم في أي حي من الرياض. أخبرونا بالموقع وحجم البيت، ونرتب موعداً يناسب يومكم.',
      en: 'From compact apartments to large villas, we reach your home in any part of Riyadh. Tell us where you are and the size of your home, and we will find a time that suits your day.',
    },
  },
  faqTitle: { ar: 'أسئلة عن تنظيف المنزل', en: 'Questions about home cleaning' },
  faq: [
    {
      q: { ar: 'كم سعر تنظيف المنزل؟', en: 'How much does home cleaning cost?' },
      a: {
        ar: 'يعتمد على حجم البيت وعدد الساعات، وهل التنظيف عادي أو عميق. أرسلوا لنا التفاصيل على واتساب، ونرسل لكم السعر قبل الحجز.',
        en: 'It depends on the size of your home, the hours, and whether it is a regular or deep clean. Send us the details on WhatsApp and we send you a price before you book.',
      },
    },
    {
      q: { ar: 'هل تقدمون تنظيفاً عميقاً؟', en: 'Do you offer deep cleaning?' },
      a: {
        ar: 'نعم: داخل الخزائن والثلاجة والفرن، وخلف الأجهزة، والبلاط والفواصل، والنوافذ من الداخل. أما غسيل الكنب والسجاد بالمكائن والخزانات والمكيفات فيحتاج جهة متخصصة.',
        en: 'Yes: inside cupboards, the fridge and oven, behind appliances, tiles and grout, and windows from the inside. Machine shampooing of sofas and carpets, tanks and AC units needs a specialist.',
      },
    },
    {
      q: { ar: 'هل تغسلون الملابس وتكوونها؟', en: 'Do you do laundry and ironing?' },
      a: {
        ar: 'نعم، نغسل ونكوي ونرتب الملابس في الخزائن، في الزيارة نفسها مع التنظيف أو في زيارة خاصة.',
        en: 'Yes. We wash, iron and put clothes away, on the same visit as the cleaning or on a visit of its own.',
      },
    },
    {
      q: { ar: 'هل الأفضل زيارة واحدة أم خطة أسبوعية؟', en: 'Is a one-off visit or a weekly plan better?' },
      a: {
        ar: 'الزيارة الواحدة تناسب ما قبل المناسبات والانتقال. والخطة الأسبوعية أو الشهرية تحافظ على البيت نظيفاً طوال الوقت، مع الشخص نفسه في الأيام نفسها.',
        en: 'A one-off suits occasions and moving. A weekly or monthly plan keeps the home clean all the time, with the same person on the same days.',
      },
    },
    {
      q: { ar: 'هل تحضرون مواد التنظيف؟', en: 'Do you bring cleaning products?' },
      a: {
        ar: 'أخبرونا عند الحجز. يمكننا استخدام موادكم المفضلة، أو الاتفاق على غير ذلك.',
        en: 'Tell us when you book. We can use your preferred products or agree on another option.',
      },
    },
    {
      q: { ar: 'هل يمكن أن نطلب عاملة؟', en: 'Can we ask for a woman to clean?' },
      a: {
        ar: 'نعم. تختارون مقدّماً أو مقدّمة للخدمة حسب ما يناسب بيتكم.',
        en: 'Yes. You choose a male or female team member, whichever suits your home.',
      },
    },
    {
      q: { ar: 'ماذا نجهّز قبل الزيارة؟', en: 'What should we prepare before the visit?' },
      a: {
        ar: 'المواد المفضلة لديكم إن وُجدت، والغرف أو القطع التي لا تُلمس، وطريقة الدخول إن لم تكونوا في البيت.',
        en: "Your preferred products if you have any, the rooms or items to leave alone, and how we get in if you won't be home.",
      },
    },
  ],
  relatedTitle: { ar: 'خدمات تريحكم أكثر في البيت', en: 'More ways to free up your day' },
  related: ['household-support', 'meal-preparation', 'errands'],
  whatsapp: { ar: 'السلام عليكم، أرغب بحجز تنظيف المنزل.', en: 'Hello, I would like to book home cleaning.' },
  booking: 'home-cleaning',
  hub: {
    bestFor: { ar: 'تنظيف أسبوعي أو عميق، وغسيل وكوي', en: 'Weekly or deep cleaning, laundry and ironing' },
    shifts: { ar: 'بالساعة، نهاري، أسبوعي، شهري، إقامة', en: 'Hourly, day, weekly, monthly, live-in' },
    combine: ['household-support', 'babysitting'],
  },
};

export default page;
