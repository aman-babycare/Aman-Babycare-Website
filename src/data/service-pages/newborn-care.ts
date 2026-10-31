// Newborn & Mother Care. Help and support only: never nursing, medical or clinical care. REVIEW-AR
import type { ServicePage } from '../services';
import { business } from '../business';

const { day, night } = business.shifts;

const page: ServicePage = {
  slug: 'newborn-care',
  tier: 'featured',
  icon: 'baby',
  subservices: [
    { icon: 'baby', name: { ar: 'رعاية المولود في المنزل', en: 'Newborn care at home' }, text: { ar: 'عناية يومية لطيفة بمولودكم في بيته.', en: 'Gentle everyday care for your baby, at home.' } },
    { icon: 'bottle', name: { ar: 'دعم الرضاعة والتغذية', en: 'Feeding support' }, text: { ar: 'تجهيز الرضّاعات وتعقيمها، والتجشئة والتهدئة بعد الرضعة.', en: 'Bottles prepared and sterilised; burping and settling after feeds.' } },
    { icon: 'bath', name: { ar: 'استحمام المولود ونظافته', en: 'Baby bathing & hygiene' }, text: { ar: 'حمام آمن ولطيف، وعناية يومية بالنظافة.', en: 'A safe, gentle bath and daily hygiene care.' } },
    { icon: 'sleep', name: { ar: 'النوم والراحة', en: 'Sleep & comfort' }, text: { ar: 'نساعد مولودكم على نوم أهدأ وروتين أوضح.', en: 'Helping your baby sleep more calmly, with a clearer routine.' } },
    { icon: 'mother', name: { ar: 'دعم الأم والطفل', en: 'Mother & baby support' }, text: { ar: 'وقت للأم لترتاح، ووجبات خفيفة، ومساعدة في البيت.', en: 'Time for mum to rest, light meals and help around the house.' } },
    { icon: 'gift', name: { ar: 'استقبال المولود', en: 'Baby shower & welcoming guests' }, text: { ar: 'تجهيز البيت والضيافة لاستقبال المهنئين، ورعاية الإخوة الكبار.', en: 'Home and hospitality ready for visitors, and older siblings looked after.' } },
  ],
  intro: {
    title: { ar: 'ما هي رعاية المولود والأم في المنزل؟', en: 'What newborn and mother care at home means' },
    text: [
      {
        ar: 'رعاية المولود والأم في المنزل خدمة من أمان لعائلات الرياض بعد الولادة: يأتي إليكم شخص هادئ من فريق الرعاية يعتني بالمولود في روتينه اليومي، ويخفف عن الأم أعمال البيت لترتاح في فترة النفاس. نهاراً أو ليلاً أو بإقامة كاملة، لأيام قليلة أو للأسابيع الأولى كلها.',
        en: "Newborn and mother care at home is Aman's help for Riyadh families after a birth: a calm caregiver looks after your baby's daily routine and takes the housework off the new mother's hands, so she can rest and recover. By day, by night or live-in, for a few days or the whole of the first weeks.",
      },
      {
        ar: 'في الأيام الأولى تتبدّل مواعيد النوم والرضعات من ليلة إلى أخرى، ويمتلئ البيت بالمهنئين. لذلك نبدأ بالإصغاء: كيف تحب الأم أن تسير الأمور، وما تعليماتها في الرضاعة والنوم، ثم نتبعها كما هي. نحن يد مساعدة، والقرار يبقى للأم والأب.',
        en: 'In the first days, sleep and feeding times change from one night to the next, and the house fills with visitors. So we start by listening: how mum likes things done, and her instructions on feeds and sleep. Then we follow them. We are a helping hand; the decisions stay with the parents.',
      },
      {
        ar: 'ومن يبحث عن مربية مواليد لساعات النهار أو لليالي الطويلة يجدها هنا ضمن خطة واحدة. هذه الخدمة مساعدة ودعم في البيت، وأي سؤال عن صحة الأم أو المولود مكانه الطبيب، ونحن نساعدكم في كل ما حوله.',
        en: "If you are looking for a newborn nanny for the daytime or for long nights, it all fits in one plan. This is help and support at home: any question about the health of mother or baby belongs with your doctor, and we help with everything around it.",
      },
    ],
  },
  who: {
    title: { ar: 'لمن تناسب رعاية المولود والأم؟', en: 'Who newborn and mother care is for' },
    items: [
      {
        title: { ar: 'أم في أسابيعها الأولى بعد الولادة', en: 'A mother in the first weeks after birth' },
        text: { ar: 'تحتاج نوماً متصلاً وراحة لجسدها، وتريد أن تطمئن أن مولودها بين يدين لطيفتين وهي في الغرفة المجاورة.', en: 'She needs unbroken sleep and time to recover, knowing her baby is in gentle hands in the next room.' },
      },
      {
        title: { ar: 'أب يعود إلى دوامه', en: 'A father going back to work' },
        text: { ar: 'انتهت إجازته، وستبقى الأم مع المولود وحدها ساعات النهار؛ وجود شخص معها يريح الاثنين.', en: 'His leave is over and mum would be alone with the baby all day. Having someone with her puts both parents at ease.' },
      },
      {
        title: { ar: 'عائلة لديها أطفال أكبر', en: 'A family with older children' },
        text: { ar: 'الإخوة الكبار يحتاجون اهتماماً ومشاوير مدرسة في الوقت الذي يحتاج فيه المولود رعاية مستمرة.', en: 'Big brothers and sisters still need attention and school mornings while the newborn needs constant care.' },
      },
      {
        title: { ar: 'أهل بعيدون عن العائلة الكبيرة', en: 'Parents far from the wider family' },
        text: { ar: 'حين لا تكون الجدّة أو الأخوات قريبات، نكون اليد الإضافية التي تقدمها العائلة عادةً في الأربعين.', en: 'When grandmother and sisters live far away, we are the extra pair of hands the family would usually give in the first forty days.' },
      },
    ],
  },
  included: {
    title: { ar: 'ما تشمله رعاية المولود والأم', en: 'What newborn and mother care includes' },
    items: [
      { ar: 'استحمام المولود وتغيير الحفاض والملابس', en: "Baby's bath, nappy changes and dressing" },
      { ar: 'تجهيز الرضّاعات وتعقيمها، والتجشئة بعد الرضعة', en: 'Preparing and sterilising bottles, and burping after feeds' },
      { ar: 'تهدئة المولود ومساعدته على النوم في سريره', en: 'Soothing baby and settling them in their cot' },
      { ar: 'وجبات خفيفة للأم وترتيب غرفتها', en: "Light meals for mum and a tidy bedroom" },
      { ar: 'غسل ملابس المولود وترتيب أغراضه', en: "Washing and putting away baby's clothes" },
      { ar: 'تجهيز البيت والضيافة لاستقبال المهنئين', en: 'Getting the home and hospitality ready for visitors' },
    ],
  },
  notIncluded: [
    { ar: 'أي رعاية صحية أو علاجية للأم أو المولود، كالحقن أو العناية بالجروح أو متابعة حالة مرضية', en: 'Any health or clinical care for mother or baby, such as injections, wound care or watching over an illness' },
    { ar: 'استشارات الرضاعة الطبيعية أو التغذية', en: 'Breastfeeding or nutrition advice' },
    { ar: 'إعطاء المولود أي دواء', en: 'Giving the baby any medicine' },
    { ar: 'القرارات الخاصة بصحة المولود: تبقى للوالدين والطبيب', en: "Decisions about the baby's health: those stay with you and your doctor" },
  ],
  shifts: {
    title: { ar: 'أوقات رعاية المولود: نهاراً أو ليلاً أو بإقامة', en: 'When we come: day, night or live-in' },
    text: {
      ar: 'تحتاج بعض العائلات يداً في النهار حين يكون الأب في دوامه، وتحتاج أخرى من يسهر مع المولود لتنام الأم. اختاروا الفترة التي تناسبكم، بالساعة أو بخطة شهرية، وغيّروها حين يتغير احتياج المولود.',
      en: "Some families need a hand during the day while dad is at work; others need someone up with the baby at night so mum can sleep. Choose the shift that suits you, by the hour or on a monthly plan, and change it as your baby's needs change.",
    },
    options: ['day', 'night', 'live-in', 'live-out', 'hourly', 'monthly'],
  },
  steps: {
    title: { ar: 'كيف تبدأ رعاية المولود في بيتكم', en: 'How newborn care at home starts' },
    items: [
      {
        title: { ar: 'رسالة على واتساب', en: 'A WhatsApp message' },
        text: { ar: 'أخبرونا بموعد الولادة أو عمر المولود، والفترة التي تحتاجونها، وأي تفضيل لمقدّم/ة الرعاية.', en: "Tell us your due date or your baby's age, the shift you need, and any preference for the caregiver." },
      },
      {
        title: { ar: 'نرشّح ونؤكد', en: 'We match and confirm' },
        text: { ar: 'نقترح الشخص المناسب من فريقنا، ونؤكد معكم الأيام والأوقات والسعر قبل أي التزام.', en: 'We suggest the right person from our team and confirm the days, times and price before you commit.' },
      },
      {
        title: { ar: 'زيارة أولى هادئة', en: 'A calm first visit' },
        text: { ar: 'نتعرف على المولود وروتين الأم وأماكن الأغراض ثم نبدأ، مع ملخص قصير في نهاية كل فترة.', en: "We meet your baby, learn mum's routine and where everything is, then begin, with a short handover note at the end of each shift." },
      },
    ],
  },
  why: {
    title: { ar: 'لماذا تختار العائلات أمان لرعاية المولود؟', en: 'Why families choose Aman for newborn care' },
    text: {
      ar: 'لأن من يدخل بيتكم في هذه الأيام يجب أن يكون محل ثقة كاملة. كل فرد في فريقنا خضع للتحقق من الخلفية، وتختارون مقدّماً أو مقدّمة للرعاية حسب ما يريح الأم، ونحترم خصوصية غرفتها وقواعد البيت كما تضعونها.',
      en: "Because whoever comes into your home in these weeks has to be someone you trust completely. Everyone on our team is background-checked, you choose a male or female caregiver, whatever is most comfortable for mum, and we respect the privacy of her room and your house rules as you set them.",
    },
  },
  packages: {
    title: { ar: 'أسعار رعاية المولود والأم', en: 'Newborn and mother care prices' },
    text: { ar: 'تُسعّر رعاية المولود حسب الفترة وعدد الأيام، ونؤكد السعر معكم على واتساب قبل أي حجز.', en: 'Newborn care is priced by shift and number of days. We confirm the price with you on WhatsApp before any booking.' },
  },
  riyadh: {
    title: { ar: 'رعاية المولود في كل أنحاء الرياض', en: 'Newborn care across Riyadh' },
    text: {
      ar: 'نخدم العائلات في الرياض كلها. أرسلوا لنا الحي وموعد الولادة المتوقع، ونرتب الزيارات مبكراً حتى يكون كل شيء جاهزاً حين تعود الأم بمولودها إلى البيت بإذن الله.',
      en: 'We serve families all over Riyadh. Send us your neighbourhood and due date, and we will plan ahead so everything is ready when mum brings the baby home.',
    },
  },
  faqTitle: { ar: 'أسئلة عن رعاية المولود والأم', en: 'Questions about newborn and mother care' },
  faq: [
    {
      q: { ar: 'كم سعر رعاية المولود والأم في المنزل؟', en: 'How much does newborn and mother care at home cost?' },
      a: {
        ar: 'يعتمد السعر على الفترة (نهارية أو ليلية أو إقامة) وعدد الأيام. أرسلوا لنا احتياجكم على واتساب، ونؤكد لكم السعر قبل الحجز دون أي التزام.',
        en: 'It depends on the shift (day, night or live-in) and how many days you need. Send us your needs on WhatsApp and we confirm the price before you book, with no commitment.',
      },
    },
    {
      q: { ar: 'هل الأفضل الحجز بالساعة أم بخطة شهرية؟', en: 'Is it better to book by the hour or monthly?' },
      a: {
        ar: 'الحجز بالساعة يناسب الأم التي تحتاج راحة لساعات أو يداً في يوم بعينه. والخطة الشهرية تناسب الأسابيع الأولى كاملة، لأن الشخص نفسه يبقى مع المولود ويعتاد على روتينه.',
        en: 'Hourly suits a mum who needs a few hours of rest or help on a particular day. A monthly plan suits the whole of the first weeks, because the same caregiver stays with your baby and learns their routine.',
      },
    },
    {
      q: { ar: 'ما أوقات رعاية المولود؟', en: 'What hours do you cover?' },
      a: {
        ar: `${day.label.ar} ${day.time.ar}، و${night.label.ar} ${night.time.ar}، أو إقامة كاملة في بيتكم. ونرد على رسائل الحجز من ${business.hours.time.ar}.`,
        en: `${day.label.en} ${day.time.en}, ${night.label.en.toLowerCase()} ${night.time.en}, or live-in. We answer booking messages ${business.hours.time.en}.`,
      },
    },
    {
      q: { ar: 'هل يبقى الشخص نفسه مع المولود كل يوم؟', en: 'Will the same person look after our baby every day?' },
      a: {
        ar: 'في الخطط الأسبوعية والشهرية نحرص على أن يبقى الشخص نفسه من فريق الرعاية، فيرتاح المولود للوجه والصوت المألوفين، ولا تحتاج الأم إلى شرح روتينها من جديد.',
        en: 'On weekly and monthly plans we keep the same caregiver, so your baby gets used to a familiar face and voice, and mum never has to explain her routine twice.',
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
      q: { ar: 'بأي لغة يتحدث فريق الرعاية؟', en: 'What language does the caregiver speak?' },
      a: {
        ar: `يتحدث مقدّمو الرعاية ${business.languages.ar}. يكفي أن تشرح الأم تعليمات الرضعات والنوم ببساطة، ونتأكد أننا فهمناها قبل البدء.`,
        en: `Caregivers speak ${business.languages.en}. Mum can explain feeds and sleep simply, and we check we've understood before we start.`,
      },
    },
    {
      q: { ar: 'ماذا نجهّز قبل الزيارة الأولى؟', en: 'What should we prepare before the first visit?' },
      a: {
        ar: 'مستلزمات المولود في مكان واحد، وجدول الرضعات والنوم إن وُجد، وتعليمات الأم مكتوبة، ورقم طبيب الأطفال للطوارئ.',
        en: "Baby's essentials in one place, the feeding and sleep routine if you have one, mum's instructions written down, and your paediatrician's number for emergencies.",
      },
    },
    {
      q: { ar: 'هل تقدمون رعاية صحية للمولود؟', en: 'Do you provide health care for the baby?' },
      a: {
        ar: 'لا. نساعد في العناية اليومية بالمولود وندعم الأم في البيت. ما يخص صحة الأم أو المولود يحتاج طبيباً أو مختصاً.',
        en: 'No. We help with daily baby care and support mum at home. Anything about the health of mother or baby needs a doctor or specialist.',
      },
    },
  ],
  relatedTitle: { ar: 'خدمات تكمّل رعاية المولود', en: 'Services that go well with newborn care' },
  related: ['night-nanny', 'babysitting', 'home-cleaning'],
  whatsapp: { ar: 'السلام عليكم، أرغب بحجز رعاية المولود والأم في المنزل.', en: 'Hello, I would like to book newborn and mother care at home.' },
  booking: 'newborn-care',
  hub: {
    bestFor: { ar: 'الأسابيع الأولى بعد الولادة', en: 'The first weeks after birth' },
    shifts: { ar: 'نهاري، ليلي، إقامة', en: 'Day, night, live-in' },
    combine: ['home-cleaning', 'errands'],
  },
};

export default page;
