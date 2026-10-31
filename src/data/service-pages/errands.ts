// Errands & Personal Assistance. Keyword: مساعدة شخصية ومقاضي البيت. REVIEW-AR
import type { ServicePage } from '../services';
import { business } from '../business';

const { day } = business.shifts;

const page: ServicePage = {
  slug: 'errands',
  tier: 'more',
  icon: 'bag',
  intro: {
    title: { ar: 'مساعدة شخصية في مقاضي البيت ومهامه الصغيرة', en: 'A personal assistant for groceries and home jobs' },
    text: [
      {
        ar: 'مساعدة شخصية ومقاضي البيت في الرياض لمن ضاق وقته: يتسوق عنكم شخص من فريق أمان، ويستلم طلباتكم، ويرتب المخزن والخزائن، ويجهز البيت للمناسبات. أرسلوا القائمة على واتساب، والباقي علينا.',
        en: "Errands and personal assistance in Riyadh for families short on time: someone from the Aman team does your shopping, collects your orders, sorts the pantry and cupboards, and gets the house ready for occasions. Send the list on WhatsApp; we'll handle the rest.",
      },
      {
        ar: 'المهام الصغيرة هي التي تأكل الأسبوع: صنف نسيتموه، وطرد ينتظر الاستلام، وهدية عيد لم تُشترَ بعد. نجمعها في زيارة واحدة أو في ساعات ثابتة كل أسبوع، ونرسل لكم الفاتورة وصورة لكل شيء.',
        en: "It's the small jobs that eat up a week: an item you forgot, a parcel waiting to be collected, an Eid gift still to buy. We group them into one visit or set hours every week, and send you the receipt and a photo of everything.",
      },
      {
        ar: 'ونستطيع أن نرافق والديكم في مشوار تسوق أو نشتري عنهم ما يحتاجونه، لتبقى مقاضيهم في وقتها دون أن يتعبوا.',
        en: "We can also go shopping with your parents, or buy what they need for them, so their groceries arrive on time without tiring them out.",
      },
    ],
  },
  who: {
    title: { ar: 'لمن تناسب المساعدة الشخصية؟', en: 'Who errands and personal assistance help' },
    items: [
      {
        title: { ar: 'عائلة بأسبوع مزدحم', en: 'A family with a packed week' },
        text: { ar: 'دوام ومدارس ونشاطات، ولا وقت لمشوار البقالة أو الصيدلية.', en: 'Work, school and activities, and no time left for the supermarket or the pharmacy run.' },
      },
      {
        title: { ar: 'أم بعد الولادة', en: 'A mother after giving birth' },
        text: { ar: 'لا تستطيع الخروج، وتحتاج من يشتري مستلزمات المولود ومقاضي البيت.', en: "She can't go out yet and needs someone to buy baby supplies and the groceries." },
      },
      {
        title: { ar: 'والدان كبيران في السن', en: 'Older parents' },
        text: { ar: 'يحتاجان من يشتري عنهما أو يرافقهما في التسوق بهدوء.', en: 'They need someone to shop for them or go along with them at an easy pace.' },
      },
      {
        title: { ar: 'قبل المناسبات', en: 'Before an occasion' },
        text: { ar: 'ضيافة العيد، أو تجهيزات العزيمة، أو ترتيب البيت قبل رمضان.', en: 'Eid hospitality, supplies for a dinner, or sorting the house before Ramadan.' },
      },
    ],
  },
  included: {
    title: { ar: 'ما تشمله المساعدة الشخصية', en: 'What errands and personal assistance include' },
    items: [
      { ar: 'مقاضي البقالة والصيدلية', en: 'Grocery and pharmacy shopping' },
      { ar: 'استلام الطلبات والطرود', en: 'Collecting orders and parcels' },
      { ar: 'ترتيب المخزن والخزائن والثلاجة', en: 'Organising the pantry, cupboards and fridge' },
      { ar: 'شراء الهدايا وتجهيزات المناسبات', en: 'Buying gifts and supplies for occasions' },
      { ar: 'ترتيب المجلس والضيافة للعيد', en: 'Setting up the majlis and hospitality for Eid' },
      { ar: 'الفاتورة وصورة للمشتريات على واتساب', en: 'The receipt and a photo of the shopping on WhatsApp' },
    ],
  },
  notIncluded: [
    { ar: 'صرف الوصفات الطبية نيابة عنكم أو اختيار الأدوية', en: 'Collecting prescriptions on your behalf or choosing medicines' },
    { ar: 'المعاملات الرسمية والبنكية', en: 'Official paperwork or banking on your behalf' },
    { ar: 'شراء ما يزيد على الميزانية المتفق عليها', en: 'Spending beyond the agreed budget' },
    { ar: 'توصيل الطلبات خارج الرياض', en: 'Deliveries outside Riyadh' },
  ],
  shifts: {
    title: { ar: 'مساعدة بالساعة أو بساعات ثابتة كل أسبوع', en: 'By the hour, or set hours every week' },
    text: {
      ar: `تتم المشاوير والمهام في ${day.label.ar} (${day.time.ar}). احجزوا ساعات لمهمة واحدة، أو خطة أسبوعية لمقاضي البيت المعتادة.`,
      en: `Errands run during the day shift (${day.time.en}). Book a few hours for one job, or a weekly plan for your usual groceries.`,
    },
    options: ['hourly', 'day', 'monthly'],
  },
  steps: {
    title: { ar: 'كيف تعمل المساعدة الشخصية', en: 'How errands work' },
    items: [
      {
        title: { ar: 'أرسلوا القائمة', en: 'Send the list' },
        text: { ar: 'على واتساب، مع التفضيلات والعلامات التجارية والميزانية.', en: 'On WhatsApp, with your preferences, favourite brands and budget.' },
      },
      {
        title: { ar: 'نؤكد البدائل والموعد', en: 'We agree substitutes and timing' },
        text: { ar: 'إن لم يتوفر صنف نرسل لكم صورة للبدائل قبل الشراء.', en: "If an item isn't there, we send you a photo of alternatives before buying." },
      },
      {
        title: { ar: 'نسلّم ونرتب', en: 'Delivered and put away' },
        text: { ar: 'نرتب المشتريات في أماكنها، ونرسل الفاتورة وصورة لكل شيء.', en: 'We put everything away and send you the receipt and a photo.' },
      },
    ],
  },
  why: {
    title: { ar: 'لماذا تعتمد العائلات على أمان في المقاضي؟', en: 'Why families trust Aman with their errands' },
    text: {
      ar: 'لأن الثقة هنا تعني المال والبيت معاً. فريقنا خضع للتحقق من الخلفية، ونرسل لكم الفاتورة مع كل مشوار، ونستأذنكم قبل أي بديل، حتى تعرفوا أين ذهب كل ريال.',
      en: 'Because trust here means both your money and your home. Our team is background-checked, we send the receipt for every errand and ask before any substitute, so you know where every riyal went.',
    },
  },
  packages: {
    title: { ar: 'أسعار المساعدة الشخصية', en: 'Errands pricing' },
    text: { ar: 'تُسعّر المساعدة الشخصية بالساعة حسب المهام، ونؤكد السعر على واتساب. قيمة المشتريات تُدفع حسب الفاتورة.', en: 'Errands are priced by the hour, depending on the jobs; we confirm the price on WhatsApp. The shopping itself is paid as per the receipt.' },
  },
  riyadh: {
    title: { ar: 'مقاضي البيت في أي مكان بالرياض', en: 'Errands anywhere in Riyadh' },
    text: {
      ar: 'نتسوق من المتاجر القريبة منكم أو من المتجر الذي تفضلونه في الرياض، ونخطط للمشوار حتى تصل الأغراض المبردة باردة والطازجة طازجة. ونحمل المشتريات إلى داخل الشقة أو الفيلا ونرتبها في أماكنها، فلا يبقى عليكم إلا أن تستمتعوا بوقتكم.',
      en: 'We shop at the stores near you or the one you prefer anywhere in Riyadh, and plan the route so chilled items arrive cold and fresh food arrives fresh.',
    },
  },
  faqTitle: { ar: 'أسئلة عن المشتريات والمساعدة الشخصية', en: 'Questions about errands and personal assistance' },
  faq: [
    {
      q: { ar: 'كم سعر المساعدة الشخصية؟', en: 'How much do errands cost?' },
      a: {
        ar: 'تُسعّر بالساعة حسب عدد المهام والمسافة. أرسلوا لنا القائمة على واتساب، ونؤكد السعر قبل البدء.',
        en: 'They are priced by the hour, depending on the number of jobs and the distance. Send us your list on WhatsApp and we confirm the price before we start.',
      },
    },
    {
      q: { ar: 'كيف ندفع ثمن المشتريات؟', en: 'How do we pay for the shopping?' },
      a: {
        ar: 'نتفق على طريقة الدفع عند الحجز، ونرسل لكم الفاتورة دائماً.',
        en: 'We agree the payment method when you book, and always send you the receipt.',
      },
    },
    {
      q: { ar: 'ماذا لو لم يتوفر صنف؟', en: "What if an item isn't available?" },
      a: {
        ar: 'نرسل لكم صورة للبدائل قبل الشراء، ولا نشتري شيئاً لم توافقوا عليه.',
        en: "We send you a photo of alternatives first, and never buy anything you haven't approved.",
      },
    },
    {
      q: { ar: 'هل نحجز بالساعة أم بخطة أسبوعية؟', en: 'Should we book by the hour or weekly?' },
      a: {
        ar: 'الحجز بالساعة لمهمة واحدة، والخطة الأسبوعية لمقاضي البيت المعتادة في يوم ثابت، مع الشخص نفسه الذي يعرف ما تحبونه.',
        en: 'Hourly is for a single job. A weekly plan covers your usual groceries on a set day, with the same person who knows what you like.',
      },
    },
    {
      q: { ar: 'ما أوقات المشاوير؟', en: 'What hours do you run errands?' },
      a: {
        ar: `في ${day.label.ar} من ${day.time.ar}. وتصلنا طلباتكم على واتساب من ${business.hours.time.ar}.`,
        en: `During the day shift, ${day.time.en}. We take your requests on WhatsApp ${business.hours.time.en}.`,
      },
    },
    {
      q: { ar: 'هل نختار من يقوم بالمشاوير، رجلاً أو امرأة؟', en: 'Can we choose a man or a woman for our errands?' },
      a: {
        ar: 'نعم. تختارون مقدّماً أو مقدّمة للخدمة، وهذا مهم خاصة حين يرافق الشخص والدتكم في التسوق أو يدخل البيت لترتيب المخزن.',
        en: 'Yes. You choose a male or female team member, which matters most when they go shopping with your mother or come in to sort the pantry.',
      },
    },
    {
      q: { ar: 'هل يمكن المساعدة في تجهيز العيد؟', en: 'Can you help us get ready for Eid?' },
      a: {
        ar: 'نعم، من شراء الضيافة والهدايا إلى ترتيب المجلس. اجمعوها مع تنظيف المنزل لبيت جاهز تماماً.',
        en: 'Yes, from hospitality and gifts to setting up the majlis. Pair it with home cleaning for a home that is completely ready.',
      },
    },
  ],
  relatedTitle: { ar: 'خدمات تُجمع مع المقاضي', en: 'Services that pair with errands' },
  related: ['home-cleaning', 'elderly-companionship', 'pet-sitting'],
  whatsapp: { ar: 'السلام عليكم، أرغب بحجز مساعدة شخصية ومقاضي للبيت.', en: 'Hello, I would like to book errands and personal assistance.' },
  booking: 'errands',
  hub: {
    bestFor: { ar: 'المقاضي والطلبات وتجهيز المناسبات', en: 'Groceries, orders and getting ready for occasions' },
    shifts: { ar: 'بالساعة، نهاري، أسبوعي', en: 'Hourly, day, weekly' },
    combine: ['home-cleaning', 'elderly-companionship'],
  },
};

export default page;
