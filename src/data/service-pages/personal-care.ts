// Personal Care. Keyword: العناية الشخصية في المنزل (secondary: مساعدة كبار السن في الاستحمام). Priced on
// WhatsApp: no pricing.json entry. Same-gender carer by default for intimate care. REVIEW-AR
import type { ServicePage } from '../services';
import { business } from '../business';

const { day, night } = business.shifts;

const page: ServicePage = {
  slug: 'personal-care',
  tier: 'more',
  icon: 'hands',
  intro: {
    title: { ar: 'عناية يومية تحفظ الكرامة والراحة', en: 'Everyday care that keeps dignity and comfort' },
    text: [
      {
        ar: 'العناية الشخصية في المنزل بالرياض: شخص من فريق أمان يساعد من تحبون في الاستحمام، وارتداء الملابس، والعناية بالشعر والأظافر، ودخول الحمام، والتنقل داخل البيت، بهدوء واحترام كامل لخصوصيته.',
        en: 'Personal care at home in Riyadh: someone from the Aman team helps your loved one with bathing, dressing, hair and nail care, using the bathroom and moving around the house, calmly and with full respect for their privacy.',
      },
      {
        ar: 'هذه أدق خدمة نقدمها، لذلك يكون مقدّم الرعاية من الجنس نفسه دائماً، ونسير على عادات من نرعاه لا على عاداتنا: وقت الاستحمام الذي يفضله، وملابسه التي يحبها، وما يستطيع فعله بنفسه.',
        en: "This is our most personal service, so the carer is always the same gender, and we follow the person's habits, not ours: the bath time they prefer, the clothes they like, and whatever they can still do on their own.",
      },
    ],
  },
  who: {
    title: { ar: 'لمن تناسب العناية الشخصية؟', en: 'Who personal care is for' },
    items: [
      {
        title: { ar: 'كبار السن', en: 'Older parents' },
        text: { ar: 'الاستحمام صار صعباً ومخيفاً قليلاً، ولا يريدون أن يطلبوا من أبنائهم.', en: "Bathing has become hard and a little frightening, and they don't want to ask their children." },
      },
      {
        title: { ar: 'بعد عملية أو كسر', en: 'After surgery or a fracture' },
        text: { ar: 'أسابيع تقل فيها الحركة، وتحتاجون يداً ثابتة في الروتين اليومي.', en: 'Weeks of limited movement, and you need a steady hand with the daily routine.' },
      },
      {
        title: { ar: 'ذوو الإعاقة', en: 'People with a disability' },
        text: { ar: 'مساعدة يومية ثابتة تحترم استقلاليتهم وطريقتهم.', en: 'Steady daily help that respects their independence and their way of doing things.' },
      },
      {
        title: { ar: 'إراحة من يرعى', en: 'A break for the family carer' },
        text: { ar: 'أحد أفراد العائلة يرعى والده كل يوم ويحتاج من يساعده.', en: 'A family member looks after a parent every day and needs someone to share the load.' },
      },
    ],
  },
  included: {
    title: { ar: 'ما تشمله العناية الشخصية', en: 'What personal care includes' },
    items: [
      { ar: 'المساعدة في الاستحمام والوضوء', en: 'Help with bathing and wudu' },
      { ar: 'ارتداء الملابس وتغييرها', en: 'Dressing and changing clothes' },
      { ar: 'العناية بالشعر والأظافر والحلاقة', en: 'Hair, nails and shaving' },
      { ar: 'المساعدة في دخول الحمام وتغيير الحفاضات للكبار', en: 'Help using the bathroom, and changing adult pads' },
      { ar: 'المساعدة في النهوض والمشي داخل البيت', en: 'Help getting up and walking around the house' },
      { ar: 'المساعدة وقت الأكل والشرب', en: 'Help at mealtimes' },
      { ar: 'ترتيب السرير وتغيير الأغطية', en: 'Making the bed and changing the sheets' },
    ],
  },
  notIncluded: [
    { ar: 'التضميد والعناية بالجروح', en: 'Wound dressing and wound care' },
    { ar: 'العناية بالقسطرة أو الأنابيب الطبية', en: 'Catheter or feeding-tube care' },
    { ar: 'رفع شخص طريح الفراش تماماً دون رافعة', en: 'Lifting a fully bed-bound person without a hoist' },
  ],
  shifts: {
    title: { ar: 'زيارة صباحية ومسائية، أو حضور يومي', en: 'Morning and evening visits, or daily care' },
    text: {
      ar: `أغلب العائلات تطلب زيارة صباحية للاستحمام والملابس وأخرى مسائية قبل النوم. ونرتب أيضاً ${day.label.ar} (${day.time.ar}) أو ${night.label.ar} (${night.time.ar}) أو الإقامة.`,
      en: `Most families book a morning visit for washing and dressing and an evening one before bed. We also arrange the day shift (${day.time.en}), the night shift (${night.time.en}) or live-in care.`,
    },
    options: ['hourly', 'day', 'night', 'live-in', 'weekly', 'monthly'],
  },
  steps: {
    title: { ar: 'كيف نبدأ العناية الشخصية', en: 'How we start' },
    items: [
      {
        title: { ar: 'حدثونا عنه', en: 'Tell us about them' },
        text: { ar: 'على واتساب: العمر، والحركة، وما يحتاج المساعدة فيه، والأوقات.', en: 'On WhatsApp: age, mobility, what they need help with, and the times.' },
      },
      {
        title: { ar: 'نختار الشخص المناسب', en: 'We choose the right person' },
        text: { ar: 'من الجنس نفسه، وبطبع يناسبه، ونؤكد السعر قبل البدء.', en: 'The same gender, with a manner that suits them, and we confirm the price before we start.' },
      },
      {
        title: { ar: 'الزيارة الأولى معكم', en: 'The first visit with you' },
        text: { ar: 'نتعرف على روتينه بحضوركم، ليشعر بالأمان من اليوم الأول.', en: 'We learn the routine with you there, so they feel safe from day one.' },
      },
    ],
  },
  why: {
    title: { ar: 'لماذا تختار العائلات أمان للعناية الشخصية؟', en: 'Why families choose Aman for personal care' },
    text: {
      ar: 'لأن العناية الشخصية تحتاج ثقة قبل أي شيء. فريقنا خضع للتحقق من الخلفية، ومقدّم الرعاية من الجنس نفسه دائماً، ويعامل من يرعاه بالاحترام الذي تعاملونه به أنتم.',
      en: 'Because personal care needs trust before anything else. Our team is background-checked, the carer is always the same gender, and they treat your loved one with the respect you do.',
    },
  },
  packages: {
    title: { ar: 'سعر العناية الشخصية', en: 'Personal care prices' },
    text: { ar: 'يعتمد السعر على عدد الزيارات والساعات. أخبرونا بما تحتاجونه على واتساب ونرسل لكم السعر.', en: 'The price depends on the number of visits and hours. Tell us what you need on WhatsApp and we send you a price.' },
    ids: [],
  },
  riyadh: {
    title: { ar: 'العناية الشخصية في كل أحياء الرياض', en: 'Personal care anywhere in Riyadh' },
    text: {
      ar: 'نصل إلى بيتكم في أي حي من الرياض، ونلتزم بالمواعيد لأن الروتين اليومي يعتمد عليها.',
      en: 'We reach your home anywhere in Riyadh and keep to the times, because the daily routine depends on them.',
    },
  },
  faqTitle: { ar: 'أسئلة عن العناية الشخصية', en: 'Questions about personal care' },
  faq: [
    {
      q: { ar: 'كم سعر العناية الشخصية في المنزل؟', en: 'How much does personal care cost?' },
      a: { ar: 'يعتمد على عدد الزيارات والساعات. أرسلوا التفاصيل على واتساب ونؤكد السعر قبل البدء.', en: 'It depends on the number of visits and hours. Send us the details on WhatsApp and we confirm the price before we start.' },
    },
    {
      q: { ar: 'هل يكون مقدّم الرعاية من الجنس نفسه؟', en: 'Will the carer be the same gender?' },
      a: { ar: 'نعم دائماً في العناية الشخصية: امرأة للنساء ورجل للرجال.', en: 'Always, for personal care: a woman for women and a man for men.' },
    },
    {
      q: { ar: 'هل تساعدون في الوضوء والاستعداد للصلاة؟', en: 'Do you help with wudu and getting ready for prayer?' },
      a: { ar: 'نعم، ونرتب الزيارات حول أوقات الصلاة إن رغبتم.', en: 'Yes, and we can plan visits around prayer times if you wish.' },
    },
    {
      q: { ar: 'هل يمكن أن يأتي الشخص نفسه كل يوم؟', en: 'Can the same person come every day?' },
      a: { ar: 'في الخطط الأسبوعية والشهرية نعم، لأن الألفة مهمة جداً في هذه الخدمة.', en: 'On weekly and monthly plans, yes; familiarity matters a great deal here.' },
    },
    {
      q: { ar: 'هل يمكن جمعها مع مرافقة كبار السن؟', en: 'Can we combine it with elderly companionship?' },
      a: { ar: 'نعم، يمكن لشخص واحد أن يجمع العناية الشخصية والصحبة في الزيارة نفسها.', en: 'Yes. One person can combine personal care and company on the same visit.' },
    },
    {
      q: { ar: 'هل تحضرون مستلزمات العناية؟', en: 'Do you bring care supplies?' },
      a: { ar: 'نستخدم مستلزماتكم، ونخبركم بما ينقص قبل أن ينفد.', en: 'We use your supplies and tell you what is running low before it runs out.' },
    },
  ],
  relatedTitle: { ar: 'خدمات تُجمع مع العناية الشخصية', en: 'Services that go with personal care' },
  related: ['elderly-companionship', 'medication-support', 'meal-preparation'],
  whatsapp: { ar: 'السلام عليكم، أرغب بحجز العناية الشخصية في المنزل.', en: 'Hello, I would like to book personal care at home.' },
  booking: 'personal-care',
  hub: {
    bestFor: { ar: 'الاستحمام والملابس والتنقل اليومي', en: 'Bathing, dressing and moving around' },
    shifts: { ar: 'زيارات، نهاري، ليلي، إقامة', en: 'Visits, day, night, live-in' },
    combine: ['elderly-companionship', 'medication-support'],
  },
};

export default page;
