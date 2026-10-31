// Dog & Cat Sitting. Keyword: رعاية القطط والكلاب في المنزل. Search demand is low, so this page is
// shorter (~400 words, 4 FAQs) by design. REVIEW-AR
import type { ServicePage } from '../services';
import { business } from '../business';

const { day } = business.shifts;

const page: ServicePage = {
  slug: 'pet-sitting',
  tier: 'more',
  icon: 'paw',
  intro: {
    title: { ar: 'زيارات منزلية لقطتكم أو كلبكم', en: 'Home visits for your cat or dog' },
    text: [
      {
        ar: 'رعاية القطط والكلاب في المنزل بالرياض أثناء سفركم أو انشغالكم: نزور حيوانكم الأليف في بيته، فنطعمه ونغيّر ماءه ونلعب معه وننظف أغراضه، ثم نرسل لكم صورة على واتساب.',
        en: 'Cat and dog sitting at home in Riyadh while you travel or work long days: we visit your pet in its own home to feed it, refresh the water, play and clean up, then send you a photo on WhatsApp.',
      },
      {
        ar: 'البقاء في البيت أهدأ لأغلب الحيوانات من الفنادق والأقفاص، والروتين نفسه يطمئنها حتى تعودوا.',
        en: 'Staying home is calmer for most pets than boarding, and keeping the same routine helps them settle until you return.',
      },
    ],
  },
  who: {
    title: { ar: 'لمن تناسب رعاية الحيوانات الأليفة؟', en: 'Who pet sitting is for' },
    items: [
      { title: { ar: 'مسافرون في الإجازة', en: 'Families travelling' }, text: { ar: 'رحلة العيد أو الصيف، والقطة لا تحب السفر.', en: "An Eid or summer trip, and the cat hates travelling." } },
      { title: { ar: 'دوام طويل', en: 'Long working days' }, text: { ar: 'كلب يحتاج نزهة وصحبة في منتصف النهار.', en: 'A dog that needs a walk and company in the middle of the day.' } },
      { title: { ar: 'مولود جديد في البيت', en: 'A new baby at home' }, text: { ar: 'وقتكم كله للمولود، والقطط تحتاج من يهتم بها.', en: 'All your time goes to the baby, and the cats still need looking after.' } },
    ],
  },
  included: {
    title: { ar: 'ما تشمله زيارة رعاية القطط والكلاب', en: 'What a pet sitting visit includes' },
    items: [
      { ar: 'إطعام وتغيير الماء', en: 'Feeding and fresh water' },
      { ar: 'تنظيف صندوق الرمل والأواني', en: 'Litter box and bowl cleaning' },
      { ar: 'لعب ومداعبة', en: 'Play and attention' },
      { ar: 'نزهة قصيرة للكلاب', en: 'A short walk for dogs' },
      { ar: 'صور وتحديثات على واتساب', en: 'Photos and updates on WhatsApp' },
    ],
  },
  notIncluded: [
    { ar: 'العلاج البيطري أو أي إجراء صحي', en: 'Vet treatment or any health procedure' },
    { ar: 'استضافة الحيوان خارج بيتكم', en: 'Boarding your pet away from home' },
    { ar: 'تدريب الكلاب أو قص الشعر', en: 'Dog training or grooming' },
  ],
  shifts: {
    title: { ar: 'زيارة أو أكثر في اليوم', en: 'One visit a day, or more' },
    text: {
      ar: `تتم الزيارات في ${day.label.ar} (${day.time.ar}) بالعدد الذي يحتاجه حيوانكم.`,
      en: `Visits happen during the day shift (${day.time.en}), as many as your pet needs.`,
    },
    options: ['hourly', 'day'],
  },
  steps: {
    title: { ar: 'كيف تحجزون رعاية حيوانكم', en: 'How to book pet sitting' },
    items: [
      { title: { ar: 'عرّفونا عليه', en: 'Introduce your pet' }, text: { ar: 'نوعه، وطعامه، ومواعيده، وما يزعجه.', en: 'What it eats, when, and what unsettles it.' } },
      { title: { ar: 'نتفق على الزيارات', en: 'Agree the visits' }, text: { ar: 'عددها في اليوم، وطريقة الدخول، والسعر.', en: 'How many a day, how we get in, and the price.' } },
      { title: { ar: 'صورة بعد كل زيارة', en: 'A photo after every visit' }, text: { ar: 'تطمئنون عليه على واتساب أينما كنتم.', en: 'See how they are on WhatsApp, wherever you are.' } },
    ],
  },
  why: {
    title: { ar: 'لماذا أمان لرعاية القطط والكلاب؟', en: 'Why Aman for cat and dog sitting' },
    text: {
      ar: 'لأننا ندخل بيتكم وأنتم غائبون. فريقنا خضع للتحقق من الخلفية، ويلتزم بالتعليمات حرفياً.',
      en: "Because we're in your home while you're away. Our team is background-checked and follows your instructions to the letter.",
    },
  },
  packages: {
    title: { ar: 'أسعار رعاية الحيوانات الأليفة', en: 'Pet sitting prices' },
    text: { ar: 'تُسعّر حسب عدد الزيارات والأيام، ونؤكد السعر على واتساب.', en: 'Priced by the number of visits and days; we confirm it on WhatsApp.' },
  },
  riyadh: {
    title: { ar: 'زيارات في كل أحياء الرياض', en: 'Visits across Riyadh' },
    text: { ar: 'نزور حيوانكم في بيته أينما كان في الرياض.', en: 'We visit your pet at home anywhere in Riyadh.' },
  },
  faqTitle: { ar: 'أسئلة عن رعاية القطط والكلاب', en: 'Questions about cat and dog sitting' },
  faq: [
    {
      q: { ar: 'كم سعر رعاية القطط في المنزل؟', en: 'How much does cat sitting at home cost?' },
      a: { ar: 'يعتمد على عدد الزيارات في اليوم وعدد الأيام. أرسلوا التفاصيل على واتساب.', en: 'It depends on visits per day and how many days. Send us the details on WhatsApp.' },
    },
    {
      q: { ar: 'كم زيارة في اليوم؟', en: 'How many visits a day?' },
      a: { ar: 'تحددونها حسب احتياج حيوانكم: زيارة أو أكثر يومياً.', en: "You choose, based on your pet's needs: one visit a day or more." },
    },
    {
      q: { ar: 'هل تعطون الدواء؟', en: 'Can you give medication?' },
      a: { ar: 'نعطي الأدوية الفموية البسيطة حسب تعليماتكم المكتوبة. أي حالة صحية تحتاج طبيباً بيطرياً.', en: 'We give simple oral medicine following your written instructions. Anything clinical needs a vet.' },
    },
    {
      q: { ar: 'هل يمكن جمعها مع خدمة أخرى؟', en: 'Can we combine this with another service?' },
      a: { ar: 'نعم، يمكنكم إضافة تنظيف البيت أو استلام الطلبات أثناء سفركم.', en: 'Yes. You can add home cleaning or collecting parcels while you travel.' },
    },
  ],
  relatedTitle: { ar: 'خدمات تُجمع أثناء سفركم', en: 'More help while you travel' },
  related: ['home-cleaning', 'errands', 'babysitting'],
  whatsapp: { ar: 'السلام عليكم، أرغب بحجز رعاية القطط والكلاب في المنزل.', en: 'Hello, I would like to book cat and dog sitting at home.' },
  booking: 'pet-sitting',
  hub: {
    bestFor: { ar: 'السفر وأيام الدوام الطويلة', en: 'Trips away and long work days' },
    shifts: { ar: 'زيارات نهارية', en: 'Daytime visits' },
    combine: ['home-cleaning', 'errands'],
  },
};

export default page;
