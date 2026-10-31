// Pick-up & Drop-off. Keyword: مرافقة الأطفال في مشاوير المدرسة.
// TODO(client): do caregivers drive? Until confirmed, describe accompanying the child only: no «سائق»,
// "driver" or "we drive" wording, and no promise of a car. REVIEW-AR
import type { ServicePage } from '../services';
import { business } from '../business';

const { day } = business.shifts;

const page: ServicePage = {
  slug: 'pick-up-drop-off',
  tier: 'more',
  icon: 'car',
  intro: {
    title: { ar: 'مرافقة الطفل من الباب إلى الباب', en: 'Door to door, by your child’s side' },
    text: [
      {
        ar: 'مرافقة الأطفال في مشاوير المدرسة بالرياض: يستلم شخص موثوق من فريق أمان طفلكم من البيت أو المدرسة أو النادي، ويبقى معه طوال الطريق، ثم يسلّمه للشخص المتفق عليه ويرسل لكم رسالة عند الوصول.',
        en: 'School and family pick-up and drop-off in Riyadh: a trusted person from the Aman team collects your child from home, school or club, stays by their side the whole way, then hands them over to the agreed person and messages you on arrival.',
      },
      {
        ar: 'زحمة الرياض ومواعيد الدوام لا تتوافق دائماً مع جرس المدرسة. بدلاً من أن يقف طفلكم ينتظر، أو تخرجوا من اجتماع مهم، يكون معه من يعرفه ويعرف المكان، وتطمئنون عليه برسالة.',
        en: "Riyadh traffic and office hours don't always match the school bell. Instead of your child waiting at the gate, or you leaving an important meeting, someone they know is there for them, and a message tells you all is well.",
      },
      {
        ar: 'ونرافق والديكم كذلك إلى مواعيدهم، فنكون معهم في الطريق وفي غرفة الانتظار حتى يعودوا إلى البيت. وسيلة التنقل تتفقون عليها معنا عند الحجز.',
        en: "We also go with your parents to their appointments, staying with them on the way and in the waiting room until they are back home. How you travel is agreed with you when you book.",
      },
    ],
  },
  who: {
    title: { ar: 'متى تحتاجون من يرافق أطفالكم؟', en: 'When a family needs pick-up and drop-off' },
    items: [
      {
        title: { ar: 'جرس المدرسة وقت الدوام', en: 'School ends during office hours' },
        text: { ar: 'الانصراف في الواحدة، وأنتم في العمل حتى الرابعة.', en: "School lets out at one, and you're at work until four." },
      },
      {
        title: { ar: 'أكثر من طفل وأكثر من مدرسة', en: 'Several children, several schools' },
        text: { ar: 'مواعيد مختلفة وأماكن متباعدة، ولا يمكن أن تكونوا في مكانين معاً.', en: "Different times, different places, and you can't be in two spots at once." },
      },
      {
        title: { ar: 'النادي والأنشطة المسائية', en: 'Clubs and evening activities' },
        text: { ar: 'تمرين السباحة أو حلقة التحفيظ، ومن يبقى مع الطفل حتى ينتهي.', en: 'Swimming practice or a Quran class, and someone to stay until it finishes.' },
      },
      {
        title: { ar: 'موعد للوالدين', en: 'An appointment for a parent' },
        text: { ar: 'والدكم لديه موعد، ويحتاج من يرافقه وينتظر معه.', en: 'Your father has an appointment and needs someone to go with him and wait alongside.' },
      },
    ],
  },
  included: {
    title: { ar: 'ما تشمله مرافقة الأطفال', en: 'What pick-up and drop-off includes' },
    items: [
      { ar: 'استلام الطفل من البيت أو المدرسة أو النادي', en: 'Collecting your child from home, school or club' },
      { ar: 'البقاء مع الطفل طوال الطريق', en: 'Staying by your child’s side the whole way' },
      { ar: 'التسليم للشخص المتفق عليه فقط', en: 'Handing over only to the agreed person' },
      { ar: 'رسالة على واتساب عند الاستلام والتسليم', en: 'A WhatsApp message at pick-up and at hand-over' },
      { ar: 'الانتظار مع الطفل في النادي أو النشاط', en: 'Waiting with your child at a club or activity' },
      { ar: 'مرافقة الوالدين إلى مواعيدهم', en: 'Going with your parents to their appointments' },
    ],
  },
  notIncluded: [
    { ar: 'تسليم الطفل لأي شخص غير مذكور في قائمتكم', en: 'Handing your child to anyone not on your list' },
    { ar: 'تغيير المسار أو التوقف في مكان لم تتفقوا عليه', en: 'Changing the route or stopping somewhere you have not agreed' },
    { ar: 'المرافقة الصحية أو المساعدة في إجراءات علاجية', en: 'Health-related escort or help with any treatment' },
    { ar: 'المشاوير خارج مدينة الرياض', en: 'Trips outside Riyadh' },
  ],
  shifts: {
    title: { ar: 'مشوار واحد أو جدول ثابت طوال الفصل', en: 'One trip, or a timetable for the whole term' },
    text: {
      ar: `تتم المشاوير في ${day.label.ar} (${day.time.ar}). احجزوا مشواراً واحداً، أو جدولاً أسبوعياً أو شهرياً للمدرسة والأنشطة.`,
      en: `Trips run during the day shift (${day.time.en}). Book a single trip, or a weekly or monthly timetable for school and activities.`,
    },
    options: ['hourly', 'day', 'monthly'],
  },
  steps: {
    title: { ar: 'كيف نرتب مشاوير أطفالكم', en: 'How we set up your school runs' },
    items: [
      {
        title: { ar: 'أرسلوا الجدول', en: 'Send the timetable' },
        text: { ar: 'العناوين والمواعيد، وأسماء المسموح لهم بالاستلام والتسليم.', en: 'Addresses, times, and the names of who may hand over and collect.' },
      },
      {
        title: { ar: 'نؤكد التفاصيل', en: 'We confirm the plan' },
        text: { ar: 'نتفق على وسيلة التنقل ونقاط التسليم والسعر، قبل أول مشوار.', en: 'We agree how you will travel, the hand-over points and the price before the first trip.' },
      },
      {
        title: { ar: 'رسالة عند كل وصول', en: 'A message at every arrival' },
        text: { ar: 'تعرفون متى استلمنا طفلكم ومتى وصل، دون أن تسألوا.', en: "You know when we collected your child and when they arrived, without having to ask." },
      },
    ],
  },
  why: {
    title: { ar: 'لماذا تأتمن العائلات أمان على مشاوير أطفالها؟', en: 'Why parents trust Aman with the school run' },
    text: {
      ar: 'لأن الطريق هو أكثر وقت يقلق فيه الأهل. نرسل من خضع للتحقق من الخلفية، ولا نسلّم الطفل إلا لمن ذكرتم اسمه، ونخبركم بكل خطوة.',
      en: 'Because the journey is when parents worry most. We send someone who is background-checked, hand your child only to the names you give us, and tell you at every step.',
    },
  },
  packages: {
    title: { ar: 'أسعار مرافقة الأطفال', en: 'Pick-up and drop-off prices' },
    text: { ar: 'يُسعّر المشوار حسب المسافة والانتظار وعدد المرات في الأسبوع، ونؤكد السعر على واتساب.', en: 'Each trip is priced by distance, waiting time and trips per week; we confirm the price on WhatsApp.' },
  },
  riyadh: {
    title: { ar: 'مشاوير المدرسة في كل أنحاء الرياض', en: 'School runs anywhere in Riyadh' },
    text: {
      ar: 'نخطط لكل مشوار حسب موقع البيت والمدرسة في الرياض، ونحسب حساب زحمة الصباح والظهيرة حتى يصل طفلكم قبل الجرس.',
      en: 'We plan every trip around where your home and school are in Riyadh, allowing for morning and midday traffic so your child arrives before the bell.',
    },
  },
  faqTitle: { ar: 'أسئلة عن مرافقة الأطفال في المشاوير', en: 'Questions about pick-up and drop-off' },
  faq: [
    {
      q: { ar: 'كم سعر مرافقة الطفل إلى المدرسة؟', en: 'How much does a school pick-up cost?' },
      a: {
        ar: 'يعتمد على المسافة ووقت الانتظار وعدد المشاوير في الأسبوع. أرسلوا الجدول على واتساب ونؤكد لكم السعر.',
        en: 'It depends on the distance, waiting time and how many trips a week. Send us the timetable on WhatsApp and we confirm the price.',
      },
    },
    {
      q: { ar: 'هل يمكن جدولة مشاوير يومية طوال الفصل؟', en: 'Can trips be scheduled daily for the whole term?' },
      a: {
        ar: 'نعم، جدول أسبوعي أو شهري للمدرسة والأنشطة، مع الشخص نفسه في كل مرة قدر الإمكان.',
        en: 'Yes: a weekly or monthly timetable for school and activities, with the same person each time wherever possible.',
      },
    },
    {
      q: { ar: 'كيف تتنقلون مع الطفل؟', en: 'How do you travel with our child?' },
      a: {
        ar: 'دورنا مرافقة طفلكم والاطمئنان عليه في الطريق. وسيلة التنقل نتفق عليها معكم عند الحجز.',
        en: 'Our role is to accompany your child and keep them safe on the way. How you travel is agreed with you when you book.',
      },
    },
    {
      q: { ar: 'في أي وقت تكون المشاوير؟', en: 'What times do you cover?' },
      a: {
        ar: `المشاوير في ${day.label.ar} من ${day.time.ar}، وتشمل الصباح الباكر قبل الدوام المدرسي وانصراف الظهيرة والأنشطة بعد العصر. أرسلوا لنا الجدول على واتساب من ${business.hours.time.ar}.`,
        en: `Trips run during the day shift, ${day.time.en}: early school mornings, midday pick-ups and after-school activities. Send us your timetable on WhatsApp ${business.hours.time.en}.`,
      },
    },
    {
      q: { ar: 'كيف أعرف أن طفلي وصل؟', en: 'How do I know my child has arrived?' },
      a: {
        ar: 'نرسل لكم رسالة على واتساب عند الاستلام وعند التسليم.',
        en: 'We message you on WhatsApp at pick-up and again at hand-over.',
      },
    },
    {
      q: { ar: 'هل يمكن أن نطلب مرافقة للبنات؟', en: 'Can we ask for a woman to accompany our daughters?' },
      a: {
        ar: 'نعم، تختارون مقدّماً أو مقدّمة للرعاية حسب ما يريحكم.',
        en: 'Yes. You choose a male or female caregiver, whatever you are comfortable with.',
      },
    },
    {
      q: { ar: 'هل يبقى مقدّم/ة الرعاية مع الطفل بعد الوصول؟', en: 'Can the caregiver stay with my child after the trip?' },
      a: {
        ar: 'نعم، يمكن جمع المرافقة مع رعاية الأطفال في البيت حتى عودتكم.',
        en: 'Yes. Combine the trip with babysitting at home until you are back.',
      },
    },
  ],
  relatedTitle: { ar: 'خدمات تُجمع مع مشاوير الأطفال', en: 'Services that pair with school runs' },
  related: ['babysitting', 'elderly-companionship', 'errands'],
  whatsapp: { ar: 'السلام عليكم، أرغب بحجز مرافقة الأطفال في مشاوير المدرسة.', en: 'Hello, I would like to book school pick-up and drop-off.' },
  booking: 'pick-up-drop-off',
  hub: {
    bestFor: { ar: 'مشاوير المدرسة والنادي والمواعيد', en: 'School runs, clubs and appointments' },
    shifts: { ar: 'مشوار واحد، أسبوعي، شهري', en: 'Single trip, weekly, monthly' },
    combine: ['babysitting', 'elderly-companionship'],
  },
};

export default page;
