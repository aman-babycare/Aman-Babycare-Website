// Home Cleaning. Keyword (care): تنظيف وترتيب المنزل بالساعة; (worker): عاملات نظافة بالساعة, with
// تنظيف شقق وفلل and عاملة منزلية بالساعة as secondaries. Never target «شركة تنظيف» or deep cleaning
// (tanks, sofas, AC): Aman is everyday home help. REVIEW-AR
import type { ServicePage } from '../services';
import { business } from '../business';

const { day } = business.shifts;

const page: ServicePage = {
  slug: 'home-cleaning',
  tier: 'core',
  icon: 'sparkle',
  intro: {
    title: { ar: 'تنظيف شقق وفلل بالساعة، لبيت مرتب كل يوم', en: 'Hourly cleaning for apartments and villas' },
    text: [
      {
        care: {
          ar: 'تنظيف وترتيب المنزل بالساعة في الرياض: يأتي إليكم شخص من فريق أمان لساعات تحددونها، فينظف الغرف والمطبخ ودورات المياه ويرتب البيت قبل الضيوف أو في أيام الأسبوع المزدحمة. خدمة للشقق والفلل، مرة واحدة أو بخطة ثابتة.',
          en: 'An hourly maid for everyday home cleaning in Riyadh: someone from the Aman team comes for the hours you choose to clean the rooms, kitchen and bathrooms and tidy up before guests or on busy weeks. For apartments and villas, as a one-off or on a regular plan.',
        },
        worker: {
          ar: 'عاملات نظافة بالساعة في الرياض: تأتي إليكم عاملة منزلية بالساعة من فريق أمان لساعات تحددونها، فتنظف الغرف والمطبخ ودورات المياه وترتب البيت قبل الضيوف أو في أيام الأسبوع المزدحمة. للشقق والفلل، مرة واحدة أو بخطة ثابتة.',
          en: 'An hourly maid for everyday home cleaning in Riyadh: someone from the Aman team comes for the hours you choose to clean the rooms, kitchen and bathrooms and tidy up before guests or on busy weeks. For apartments and villas, as a one-off or on a regular plan.',
        },
      },
      {
        ar: 'نهتم بالتفاصيل التي تجعل البيت مريحاً: المجلس جاهز للزوار، والمطبخ يلمع بعد العزيمة، والأسرّة مرتبة قبل عودة الأطفال من المدرسة. ونستخدم موادكم المفضلة أو نتفق معكم على غيرها.',
        en: 'We look after the details that make a home restful: the majlis ready for visitors, the kitchen gleaming after a dinner, the beds made before the children come home from school. We use your preferred products, or agree on others with you.',
      },
      {
        ar: 'أمان تقدم المساعدة المنزلية اليومية، لا التنظيف العميق المتخصص: لا نغسل الخزانات ولا الكنب ولا المكيفات، ولا نستخدم المعدات الثقيلة.',
        en: 'Aman provides everyday home help, not specialist deep cleaning: we do not clean water tanks, sofas or air conditioners, or bring heavy equipment.',
      },
    ],
  },
  who: {
    title: { ar: 'من يحجز تنظيف المنزل بالساعة؟', en: 'Who books an hourly maid for cleaning' },
    items: [
      {
        title: { ar: 'بيت فيه أطفال صغار', en: 'A home with young children' },
        text: { ar: 'الألعاب في كل مكان، والوقت لا يكفي للعناية بالأطفال والبيت معاً.', en: "Toys everywhere, and there isn't enough time for both the children and the house." },
      },
      {
        title: { ar: 'قبل العزيمة أو الضيوف', en: 'Before a dinner or guests' },
        text: { ar: 'زوار الليلة، والمجلس ودورة مياه الضيوف يحتاجان لمسة أخيرة.', en: 'Visitors are coming tonight, and the majlis and guest bathroom need a final touch.' },
      },
      {
        title: { ar: 'موظفون بدوام طويل', en: 'Long working weeks' },
        text: { ar: 'تعودون متعبين، وتريدون عطلة نهاية الأسبوع لعائلتكم لا للتنظيف.', en: 'You come home tired and want the weekend for family, not for cleaning.' },
      },
      {
        title: { ar: 'قبل رمضان والعيد', en: 'Before Ramadan and Eid' },
        text: { ar: 'ترتيب البيت كله استعداداً للشهر الكريم أو لزيارات العيد.', en: 'Getting the whole home ready for the holy month or for Eid visits.' },
      },
    ],
  },
  included: {
    title: { ar: 'ما يشمله تنظيف المنزل', en: 'What hourly home cleaning covers' },
    items: [
      { ar: 'تنظيف غرف النوم والمعيشة والمجلس', en: 'Bedrooms, living areas and the majlis' },
      { ar: 'المطبخ والأسطح والأحواض والأجهزة من الخارج', en: 'Kitchen counters, sinks and appliance fronts' },
      { ar: 'دورات المياه', en: 'Bathrooms' },
      { ar: 'كنس الأرضيات ومسحها', en: 'Vacuuming and mopping' },
      { ar: 'ترتيب الأسرّة وطي الملابس', en: 'Making beds and folding laundry' },
      { ar: 'ترتيب خفيف للخزائن والأدراج', en: 'Light tidying of cupboards and drawers' },
    ],
  },
  notIncluded: [
    { ar: 'التنظيف العميق بالمعدات، وغسيل الخزانات والكنب والمكيفات', en: 'Deep cleaning with equipment, and washing water tanks, sofas or AC units' },
    { ar: 'مكافحة الحشرات أو التعقيم الشامل', en: 'Pest control or full disinfection services' },
    { ar: 'الأعمال على ارتفاع أو الواجهات الخارجية', en: 'Work at height or on outside walls and windows' },
    { ar: 'نقل الأثاث الثقيل', en: 'Moving heavy furniture' },
  ],
  shifts: {
    title: { ar: 'تنظيف بالساعة أو بخطة شهرية', en: 'By the hour or on a monthly plan' },
    text: {
      ar: `أغلب زيارات التنظيف في ${day.label.ar} (${day.time.ar}). احجزوا ساعات لمرة واحدة، أو أياماً ثابتة كل أسبوع، أو مساعدة منزلية مقيمة لمن يحتاج يداً كل يوم.`,
      en: `Most cleaning visits happen during the day shift (${day.time.en}). Book hours for a one-off, set days every week, or live-in home help if you need a hand every day.`,
    },
    options: ['hourly', 'day', 'monthly', 'live-out', 'live-in'],
  },
  steps: {
    title: { ar: 'كيف تحجزون تنظيف المنزل', en: 'How to book home cleaning' },
    items: [
      {
        title: { ar: 'أرسلوا تفاصيل البيت', en: 'Send us the details' },
        text: { ar: 'على واتساب: شقة أو فيلا، وعدد الغرف، والموعد، وما يحتاج عناية خاصة.', en: 'On WhatsApp: apartment or villa, how many rooms, the time, and anything that needs special care.' },
      },
      {
        title: { ar: 'نقدّر الساعات والسعر', en: 'We estimate hours and price' },
        text: { ar: 'نقترح عدد الساعات المناسب لحجم البيت، ونؤكد السعر قبل الحجز.', en: 'We suggest the right number of hours for your home and confirm the price before you book.' },
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
      ar: 'لأن من يدخل غرفكم يجب أن يكون أميناً قبل أن يكون ماهراً. فريقنا خضع للتحقق من الخلفية، ولا يلمس ما طلبتم تركه، ويستطيع أن يجمع التنظيف مع رعاية الأطفال أو المشتريات في الزيارة نفسها.',
      en: "Because anyone who enters your rooms must be trustworthy before they are skilled. Our team is background-checked, leaves alone anything you ask, and can combine cleaning with babysitting or errands in the same visit.",
    },
  },
  packages: {
    title: { ar: 'أسعار تنظيف المنزل بالساعة', en: 'Hourly home cleaning prices' },
    text: { ar: 'يُسعّر التنظيف حسب حجم البيت وعدد الساعات، ونؤكد السعر على واتساب قبل الزيارة.', en: 'Cleaning is priced by the size of your home and the hours needed; we confirm the price on WhatsApp before the visit.' },
  },
  riyadh: {
    title: { ar: 'تنظيف المنازل في كل أحياء الرياض', en: 'Home cleaning anywhere in Riyadh' },
    text: {
      ar: 'من الشقق الصغيرة إلى الفلل الكبيرة، نصل إلى بيتكم في أي حي من الرياض. أخبرونا بالموقع وحجم البيت، ونرتب موعداً يناسب يومكم.',
      en: 'From compact apartments to large villas, we reach your home in any part of Riyadh. Tell us where you are and the size of your home, and we will find a time that suits your day.',
    },
  },
  faqTitle: { ar: 'أسئلة عن تنظيف المنزل بالساعة', en: 'Questions about hourly home cleaning' },
  faq: [
    {
      q: { ar: 'كم سعر تنظيف المنزل بالساعة؟', en: 'How much does hourly home cleaning cost?' },
      a: {
        ar: 'يعتمد على حجم البيت وعدد الساعات والغرف. أرسلوا لنا التفاصيل على واتساب، ونرسل لكم السعر قبل الحجز.',
        en: 'It depends on the size of your home, the number of rooms and the hours. Send us the details on WhatsApp and we send you a price before you book.',
      },
    },
    {
      q: { ar: 'هل الأفضل تنظيف لمرة واحدة أم خطة شهرية؟', en: 'Is a one-off clean or a monthly plan better?' },
      a: {
        ar: 'الحجز لمرة واحدة يناسب ما قبل المناسبات. والخطة الشهرية تحافظ على البيت مرتباً طوال الوقت، مع الشخص نفسه الذي يعرف بيتكم.',
        en: 'A one-off suits the days before an occasion. A monthly plan keeps the home tidy all the time, with the same person who knows your home.',
      },
    },
    {
      q: { ar: 'هل تقدمون تنظيفاً عميقاً أو غسيل كنب وخزانات؟', en: 'Do you offer deep cleaning, sofa or tank washing?' },
      a: {
        ar: 'لا. نقدم التنظيف والترتيب المنزلي اليومي. الأعمال المتخصصة بالمعدات تحتاج جهة متخصصة بها.',
        en: 'No. We provide everyday cleaning and tidying. Specialist work with equipment needs a specialist provider.',
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
      q: { ar: 'هل يمكن التنظيف ورعاية الأطفال في زيارة واحدة؟', en: 'Can one visit cover cleaning and babysitting?' },
      a: {
        ar: 'نعم، يمكن لشخص واحد من فريق الرعاية أن يجمع الخدمتين حسب حجم البيت وأعمار الأطفال، ونتفق على التفاصيل معكم.',
        en: "Yes. One caregiver can combine both, depending on the size of the home and the children's ages. We agree the details with you.",
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
  related: ['errands', 'babysitting', 'pet-sitting'],
  whatsapp: { ar: 'السلام عليكم، أرغب بحجز تنظيف وترتيب المنزل بالساعة.', en: 'Hello, I would like to book hourly home cleaning.' },
  booking: 'home-cleaning',
  hub: {
    bestFor: { ar: 'الترتيب الأسبوعي وما قبل الضيوف', en: 'Weekly tidying and before guests' },
    shifts: { ar: 'بالساعة، نهاري، شهري، إقامة', en: 'Hourly, day, monthly, live-in' },
    combine: ['babysitting', 'errands'],
  },
};

export default page;
