// Mother Care: help for the mother after a birth, as its own service (client request, Nov 2026; it used to
// share a page with Newborn Care). Help and support only: never nursing, medical or clinical care. REVIEW-AR
import type { ServicePage } from '../services';
import { business } from '../business';

const { day, night } = business.shifts;

const page: ServicePage = {
  slug: 'mother-care',
  tier: 'featured',
  icon: 'mother',
  subservices: [
    { icon: 'sleep', name: { ar: 'الراحة والتعافي', en: 'Rest & recovery' }, text: { ar: 'وقت متصل للأم لتنام وترتاح، ونحن في الغرفة المجاورة.', en: 'Unbroken time for mum to sleep and rest, with us in the next room.' } },
    { icon: 'bottle', name: { ar: 'المساعدة وقت الرضعات', en: 'Help at feeding times' }, text: { ar: 'نحضر المولود إليها، ونجهّز الرضّاعات، وفق تعليمات الأم.', en: 'We bring the baby to her and prepare bottles, following her instructions.' } },
    { icon: 'heart', name: { ar: 'وجبات خفيفة للأم', en: 'Light meals for mum' }, text: { ar: 'وجبات ومشروبات خفيفة في مواعيدها.', en: 'Light meals and drinks, on time.' } },
    { icon: 'home', name: { ar: 'أعمال منزلية خفيفة', en: 'Light housework' }, text: { ar: 'ترتيب غرفتها، والغسيل، وما يخفف عنها.', en: 'Her room kept tidy, the laundry, and whatever takes the load off.' } },
    { icon: 'gift', name: { ar: 'استقبال المهنئين', en: 'Welcoming guests' }, text: { ar: 'تجهيز البيت والضيافة للزوار، ورعاية الإخوة الكبار.', en: 'Home and hospitality ready for visitors, and older siblings looked after.' } },
  ],
  intro: {
    title: { ar: 'ما هي رعاية الأم في المنزل؟', en: 'What mother care at home means' },
    text: [
      {
        ar: 'رعاية الأم في المنزل خدمة من أمان لعائلات الرياض بعد الولادة: يأتي إليكم شخص هادئ من فريق الرعاية ليخفف عن الأم أعمال البيت ويهيئ لها وقتاً للنوم والراحة في فترة النفاس. نهاراً أو ليلاً أو بإقامة كاملة، لأيام قليلة أو للأربعين كلها.',
        en: "Mother care at home is Aman's help for Riyadh mothers after a birth: a calm caregiver takes the housework off her hands and makes time for her to sleep and rest while she recovers. By day, by night or live-in, for a few days or the whole first forty days.",
      },
      {
        ar: 'بعد الولادة تحتاج الأم إلى من يهتم بها هي أيضاً: وجبة في وقتها، وغرفة مرتبة، وساعات نوم متصلة، ومن يستقبل المهنئين عنها. نبدأ بالإصغاء إلى ما يريحها، ثم نتبع تعليماتها كما هي.',
        en: 'After a birth, the mother needs someone looking after her too: a meal on time, a tidy room, a few hours of unbroken sleep, and someone to welcome visitors for her. We start by listening to what makes her comfortable, then follow her instructions as they are.',
      },
      {
        ar: 'وإن احتجتم أيضاً إلى من يعتني بالمولود نفسه، فاجمعوا رعاية الأم مع رعاية المواليد في خطة واحدة. هذه الخدمة مساعدة ودعم في البيت، وأي سؤال عن صحة الأم مكانه الطبيب.',
        en: "If you also need someone to look after the baby, combine mother care with newborn care in one plan. This is help and support at home: any question about the mother's health belongs with her doctor.",
      },
    ],
  },
  who: {
    title: { ar: 'لمن تناسب رعاية الأم؟', en: 'Who mother care is for' },
    items: [
      {
        title: { ar: 'أم تتعافى بعد الولادة', en: 'A mother recovering after birth' },
        text: { ar: 'تحتاج نوماً متصلاً وراحة لجسدها، دون أن تقلق على البيت.', en: 'She needs unbroken sleep and time to recover, without worrying about the house.' },
      },
      {
        title: { ar: 'أب يعود إلى دوامه', en: 'A father going back to work' },
        text: { ar: 'انتهت إجازته، وستبقى الأم وحدها ساعات النهار؛ وجود شخص معها يريح الاثنين.', en: 'His leave is over and mum would be alone all day. Having someone with her puts both parents at ease.' },
      },
      {
        title: { ar: 'بيت يمتلئ بالمهنئين', en: 'A home full of visitors' },
        text: { ar: 'الضيافة والاستقبال في الأيام الأولى تُتعب الأم؛ نتولاها عنها.', en: 'Hosting in the first days wears mum out; we take it on for her.' },
      },
      {
        title: { ar: 'أهل بعيدون عن العائلة الكبيرة', en: 'Parents far from the wider family' },
        text: { ar: 'حين لا تكون الجدّة أو الأخوات قريبات، نكون اليد الإضافية التي تقدمها العائلة عادةً في الأربعين.', en: 'When grandmother and sisters live far away, we are the extra pair of hands the family would usually give in the first forty days.' },
      },
    ],
  },
  included: {
    title: { ar: 'ما تشمله رعاية الأم', en: 'What mother care includes' },
    items: [
      { ar: 'وقت للأم لتنام وترتاح', en: 'Time for mum to sleep and rest' },
      { ar: 'وجبات ومشروبات خفيفة للأم', en: 'Light meals and drinks for mum' },
      { ar: 'ترتيب غرفتها وغسل ملابسها', en: 'Her room tidied and her laundry done' },
      { ar: 'المساعدة وقت الرضعات وفق تعليمات الأم', en: "Help at feeding times, following mum's instructions" },
      { ar: 'تجهيز البيت والضيافة لاستقبال المهنئين', en: 'Getting the home and hospitality ready for visitors' },
      { ar: 'رعاية الإخوة الكبار أثناء راحة الأم', en: 'Looking after older siblings while mum rests' },
    ],
  },
  notIncluded: [
    { ar: 'أي رعاية صحية أو علاجية للأم، كالحقن أو العناية بالجروح أو متابعة حالة مرضية', en: 'Any health or clinical care for the mother, such as injections, wound care or watching over an illness' },
    { ar: 'استشارات الرضاعة الطبيعية أو التغذية', en: 'Breastfeeding or nutrition advice' },
    { ar: 'إعطاء الأم أي دواء', en: 'Giving the mother any medicine' },
    { ar: 'القرارات الخاصة بصحة الأم: تبقى لها ولطبيبها', en: "Decisions about mum's health: those stay with her and her doctor" },
  ],
  shifts: {
    title: { ar: 'أوقات رعاية الأم: نهاراً أو ليلاً أو بإقامة', en: 'When we come: day, night or live-in' },
    text: {
      ar: 'بعض الأمهات يحتجن يداً في النهار حين يكون الأب في دوامه، وأخريات يحتجن من يسهر ليلاً لتنام. اختاروا الفترة التي تناسبكم، بالساعة أو بخطة أسبوعية أو شهرية، وغيّروها حين يتغير احتياجكم.',
      en: 'Some mothers need a hand during the day while dad is at work; others need someone up at night so they can sleep. Choose the shift that suits you, by the hour or on a weekly or monthly plan, and change it as your needs change.',
    },
    options: ['day', 'night', 'live-in', 'live-out', 'hourly', 'weekly', 'monthly'],
  },
  steps: {
    title: { ar: 'كيف تبدأ رعاية الأم في بيتكم', en: 'How mother care at home starts' },
    items: [
      {
        title: { ar: 'رسالة على واتساب', en: 'A WhatsApp message' },
        text: { ar: 'أخبرونا بموعد الولادة، والفترة التي تحتاجونها، وأي تفضيل لمقدّم/ة الرعاية.', en: 'Tell us your due date, the shift you need, and any preference for the caregiver.' },
      },
      {
        title: { ar: 'نرشّح ونؤكد', en: 'We match and confirm' },
        text: { ar: 'نقترح الشخص المناسب من فريقنا، ونؤكد معكم الأيام والأوقات والسعر قبل أي التزام.', en: 'We suggest the right person from our team and confirm the days, times and price before you commit.' },
      },
      {
        title: { ar: 'زيارة أولى هادئة', en: 'A calm first visit' },
        text: { ar: 'نتعرف على ما يريح الأم وأماكن الأغراض ثم نبدأ، مع ملخص قصير في نهاية كل فترة.', en: 'We learn what makes mum comfortable and where everything is, then begin, with a short handover note at the end of each shift.' },
      },
    ],
  },
  why: {
    title: { ar: 'لماذا تختار العائلات أمان لرعاية الأم؟', en: 'Why families choose Aman for mother care' },
    text: {
      ar: 'لأن من يدخل بيتكم في هذه الأيام يجب أن يكون محل ثقة كاملة. كل فرد في فريقنا خضع للتحقق من الخلفية، وتختارون مقدّماً أو مقدّمة للرعاية حسب ما يريح الأم، ونحترم خصوصية غرفتها وقواعد البيت كما تضعونها.',
      en: 'Because whoever comes into your home in these weeks has to be someone you trust completely. Everyone on our team is background-checked, you choose a male or female caregiver, whatever is most comfortable for mum, and we respect the privacy of her room and your house rules as you set them.',
    },
  },
  packages: {
    title: { ar: 'أسعار رعاية الأم', en: 'Mother care prices' },
    text: { ar: 'تُسعّر رعاية الأم حسب الفترة وعدد الأيام، ونؤكد السعر معكم على واتساب قبل أي حجز.', en: 'Mother care is priced by shift and number of days. We confirm the price with you on WhatsApp before any booking.' },
  },
  riyadh: {
    title: { ar: 'رعاية الأم في كل أنحاء الرياض', en: 'Mother care across Riyadh' },
    text: {
      ar: 'نخدم العائلات في الرياض كلها. أرسلوا لنا الحي وموعد الولادة المتوقع، ونرتب الزيارات مبكراً حتى تجد الأم كل شيء جاهزاً حين تعود إلى البيت بإذن الله.',
      en: 'We serve families all over Riyadh. Send us your neighbourhood and due date, and we will plan ahead so everything is ready when mum comes home.',
    },
  },
  faqTitle: { ar: 'أسئلة عن رعاية الأم', en: 'Questions about mother care' },
  faq: [
    {
      q: { ar: 'كم سعر رعاية الأم في المنزل؟', en: 'How much does mother care at home cost?' },
      a: {
        ar: 'يعتمد السعر على الفترة (نهارية أو ليلية أو إقامة) وعدد الأيام. أرسلوا لنا احتياجكم على واتساب، ونؤكد لكم السعر قبل الحجز دون أي التزام.',
        en: 'It depends on the shift (day, night or live-in) and how many days you need. Send us your needs on WhatsApp and we confirm the price before you book, with no commitment.',
      },
    },
    {
      q: { ar: 'ما الفرق بين رعاية الأم ورعاية المواليد؟', en: 'How is mother care different from newborn care?' },
      a: {
        ar: 'رعاية المواليد تهتم بالمولود نفسه: الاستحمام والرضعات والنوم. ورعاية الأم تهتم بالأم: راحتها ووجباتها وبيتها وضيوفها. ويمكنكم الجمع بينهما في خطة واحدة.',
        en: 'Newborn care looks after the baby: bathing, feeds and sleep. Mother care looks after the mother: her rest, her meals, her home and her visitors. You can combine both in one plan.',
      },
    },
    {
      q: { ar: 'هل الأفضل الحجز بالساعة أم بخطة أسبوعية أو شهرية؟', en: 'Is it better to book hourly, weekly or monthly?' },
      a: {
        ar: 'الحجز بالساعة يناسب الأم التي تحتاج راحة لساعات أو يداً في يوم بعينه. والخطة الأسبوعية أو الشهرية تناسب الأسابيع الأولى، لأن الشخص نفسه يبقى معها ويعرف ما يريحها.',
        en: 'Hourly suits a mum who needs a few hours of rest or help on a particular day. A weekly or monthly plan suits the first weeks, because the same caregiver stays with her and learns what makes her comfortable.',
      },
    },
    {
      q: { ar: 'ما أوقات رعاية الأم؟', en: 'What hours do you cover?' },
      a: {
        ar: `${day.label.ar} ${day.time.ar}، و${night.label.ar} ${night.time.ar}، أو إقامة كاملة في بيتكم. ونرد على رسائل الحجز من ${business.hours.time.ar}.`,
        en: `${day.label.en} ${day.time.en}, ${night.label.en.toLowerCase()} ${night.time.en}, or live-in. We answer booking messages ${business.hours.time.en}.`,
      },
    },
    {
      q: { ar: 'هل يمكن أن نطلب مقدّمة رعاية؟', en: 'Can we ask for a female caregiver?' },
      a: {
        ar: 'نعم. تختارون مقدّماً أو مقدّمة للرعاية حسب ما يريح الأم، ويكفي أن تذكروا ذلك في رسالة الحجز.',
        en: 'Yes. You choose a male or female caregiver, whatever is most comfortable for mum. Just mention it when you book.',
      },
    },
    {
      q: { ar: 'هل تقدمون رعاية صحية للأم بعد الولادة؟', en: 'Do you provide health care for the mother after birth?' },
      a: {
        ar: 'لا. نساعد في البيت ونهيئ للأم وقتاً للراحة. ما يخص صحتها يحتاج طبيباً أو مختصاً.',
        en: 'No. We help at home and make time for mum to rest. Anything about her health needs a doctor or specialist.',
      },
    },
  ],
  relatedTitle: { ar: 'خدمات تكمّل رعاية الأم', en: 'Services that go well with mother care' },
  related: ['newborn-care', 'meal-preparation', 'home-cleaning'],
  whatsapp: { ar: 'السلام عليكم، أرغب بحجز رعاية الأم في المنزل.', en: 'Hello, I would like to book mother care at home.' },
  booking: 'mother-care',
  hub: {
    bestFor: { ar: 'راحة الأم في الأربعين', en: "Mum's rest in the first forty days" },
    shifts: { ar: 'نهاري، ليلي، إقامة', en: 'Day, night, live-in' },
    combine: ['newborn-care', 'home-cleaning'],
  },
};

export default page;
