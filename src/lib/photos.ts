// Photo slots. Each slot (e.g. 'hero') maps to a descriptively named file in src/assets/photos/
// (e.g. caregiver-reading-with-girl-riyadh-home.jpg); the name carries into the built image URL.
// Rules: docs/build/imagery.md. Credits: src/assets/photos/CREDITS.md.
import type { ImageMetadata } from 'astro';
import type { L } from '../i18n/ui';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.{jpg,jpeg,png,webp}', { eager: true });
const byName = new Map(Object.entries(files).map(([path, mod]) => [path.split('/').pop()!.replace(/\.\w+$/, ''), mod.default]));

// What each photo shows (alt text, with the service and Riyadh where natural), its file, and where to
// centre crops (CSS object-position). REVIEW-AR
const meta: Record<string, { file: string; alt: L; focus?: string }> = {
  hero: {
    file: 'caregiver-reading-with-girl-riyadh-home',
    alt: { ar: 'مقدّمة رعاية بالحجاب تقرأ قصة مصوّرة مع طفلة مبتسمة في بيت عائلة بالرياض', en: 'A caregiver in a hijab reading a picture book with a smiling little girl in a Riyadh family home' },
    focus: '42% 50%',
  },
  'newborn-care': {
    file: 'newborn-mother-care-riyadh-home',
    alt: { ar: 'رعاية المواليد في المنزل: مقدّمة رعاية بالحجاب تحمل مولوداً نائماً بجانب أمه المرتاحة', en: 'Newborn care at home: a caregiver in a hijab holding a sleeping newborn beside the resting mother' },
    // Near-square photo in wide frames: keep both faces and the baby in view.
    focus: '50% 45%',
  },
  'mother-care': {
    file: 'mother-coffee-caregiver-plays-son',
    alt: { ar: 'رعاية الأم في المنزل: أم ترتاح مع فنجان قهوة بينما تهتم مقدّمة الرعاية بطفلها', en: 'Mother care at home: a mother resting with a cup of coffee while a caregiver looks after her son' },
    focus: '30% 50%',
  },
  babysitting: {
    file: 'babysitter-riyadh-home-toddler',
    alt: { ar: 'جليسة أطفال في المنزل تبني بيتاً من المكعبات الخشبية مع طفل صغير يضحك', en: 'A babysitter at home building a wooden block house with a laughing toddler' },
    focus: '52% 50%',
  },
  'home-cleaning': {
    file: 'hourly-home-cleaning-riyadh-kitchen',
    alt: { ar: 'تنظيف المنزل بالساعة: مقدّمة رعاية تمسح سطح المطبخ الرخامي في مطبخ مشرق', en: 'Hourly home cleaning: a caregiver wiping a marble kitchen island in a bright kitchen' },
    focus: '45% 50%',
  },
  'elderly-companionship': {
    file: 'elderly-companionship-riyadh-majlis',
    alt: { ar: 'مرافقة كبار السن في المنزل: مقدّمة رعاية تصبّ القهوة العربية لسيدة مسنّة مبتسمة في المجلس', en: 'Elderly companionship at home: a caregiver pouring Arabic coffee for a smiling elderly woman in the majlis' },
    focus: '52% 50%',
  },
  'pet-sitting': {
    file: 'cat-sitting-riyadh-home',
    alt: { ar: 'رعاية القطط في المنزل: مقدّمة رعاية تضع الطعام لقطة في فناء البيت بينما تنام قطة أخرى على الأريكة', en: 'Cat sitting at home: a caregiver feeding a cat in the courtyard while another cat naps on the bench' },
    focus: '92% 50%',
  },
  'night-nanny': {
    file: 'night-nanny-riyadh-nursery',
    alt: { ar: 'مربية ليلية بالحجاب تهدهد مولوداً نائماً في قماطه على كرسي هزاز بجانب سريره في غرفة نوم دافئة الإضاءة', en: 'A night nanny in a hijab rocking a sleeping, swaddled newborn in a nursery chair beside the crib, by warm lamplight' },
    // The nanny and baby sit right of centre; the crib fills the left.
    focus: '62% 50%',
  },
  'pick-up-drop-off': {
    file: 'school-pick-up-riyadh',
    alt: { ar: 'مرافقة طفل إلى المدرسة: مقدّمة رعاية تمشي مع تلميذ يداً بيد في شارع تحفّه النخيل بالرياض', en: 'School pick-up in Riyadh: a caregiver walking hand in hand with a schoolboy along a palm-lined street' },
    focus: '50% 50%',
  },
  errands: {
    file: 'errands-groceries-riyadh-villa',
    alt: { ar: 'مقاضي البيت: مقدّمة رعاية تحمل كيسين من المشتريات إلى مدخل فيلا في الرياض', en: 'Errands and groceries: a caregiver carrying two shopping bags into a Riyadh villa entrance' },
    focus: '50% 30%',
  },
  trust: {
    file: 'caregiver-welcomed-riyadh-family-home',
    alt: { ar: 'أم تستقبل مقدّمة الرعاية بابتسامة عند باب البيت', en: 'A mother welcoming a caregiver at her front door with a smile' },
    focus: '47% 50%',
  },
  'services-hero': {
    file: 'home-services-riyadh-living-room',
    alt: { ar: 'غرفة معيشة عائلية هادئة ومرتبة مع سلة ألعاب خشبية', en: 'A calm, tidy family living room with a basket of wooden toys' },
  },
  'packages-hero': {
    file: 'mother-coffee-caregiver-plays-son',
    alt: { ar: 'أم تستمتع بفنجان قهوة بينما تلعب مقدّمة الرعاية مع طفلها', en: 'A mother enjoying a cup of coffee while a caregiver plays with her son' },
    focus: '30% 50%',
  },
  'how-it-works': {
    file: 'booking-on-whatsapp-arabic-coffee',
    alt: { ar: 'يدان تكتبان رسالة على الهاتف بجانب فنجان قهوة وتمر', en: 'Hands typing a message on a phone beside Arabic coffee and dates' },
  },
  'first-families': {
    file: 'mother-daughter-laughing-sofa',
    alt: { ar: 'أم تضحك مع ابنتها الصغيرة على الأريكة', en: 'A mother laughing with her little daughter on the sofa' },
    focus: '42% 50%',
  },
  'offer-white-friday': { file: 'white-friday-offer-gifts', alt: { ar: 'هدايا مغلّفة بالأبيض بشرائط ذهبية', en: 'Gifts wrapped in white with gold ribbons' } },
  'offer-ramadan': { file: 'ramadan-offer-iftar-table', alt: { ar: 'مائدة إفطار رمضانية بالتمر والقهوة العربية', en: 'A Ramadan iftar table with dates and Arabic coffee' } },
  'offer-founding-day': { file: 'founding-day-offer-najdi-courtyard', alt: { ar: 'فناء نجدي تراثي بباب خشبي ملوّن ودلّة قهوة', en: 'A heritage Najdi courtyard with a painted wooden door and a coffee pot' } },
  'offer-eid-al-fitr': { file: 'eid-al-fitr-offer-majlis', alt: { ar: 'مجلس مزيّن للعيد بالمعمول وأكياس الهدايا', en: 'A majlis ready for Eid with maamoul and gift bags' } },
  'offer-eid-al-adha': { file: 'eid-al-adha-offer-travel-pet-care', alt: { ar: 'حقيبة سفر عند باب البيت وقطة نائمة على المقعد', en: 'A suitcase by the front door and a cat asleep on the bench' } },
  'offer-back-to-school': { file: 'back-to-school-offer-bag', alt: { ar: 'حقيبة مدرسية وعلبة طعام وحذاءان عند باب البيت', en: 'A school bag, lunch box and shoes by the front door' } },
  'offer-national-day': { file: 'national-day-offer-living-room', alt: { ar: 'غرفة معيشة مزيّنة بالأخضر والأبيض لليوم الوطني', en: 'A living room dressed in green and white for National Day' } },
};

export const photo = (slot: string) => (meta[slot] ? byName.get(meta[slot].file) : undefined);
export const hasPhoto = (slot: string) => photo(slot) !== undefined;
export const photoMeta = (slot: string) => meta[slot];

// Offer photos uploaded from the admin panel: Publish commits them to src/assets/photos/offers/ and the offer's
// `image` names the file. A name with no file (not published yet) falls back to the slot photo or the panel.
const offerFiles = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/offers/*.jpg', { eager: true });
const offerByName = new Map(Object.entries(offerFiles).map(([path, mod]) => [path.split('/').pop()!, mod.default]));
export const uploadedOfferPhoto = (file: string | undefined) => (file ? offerByName.get(file) : undefined);

// Service photos uploaded from the admin panel, the same way: src/assets/photos/services/<file>, named by the
// service's `image` in services.json. It replaces the service's slot photo on its cards and page.
const serviceFiles = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/services/*.jpg', { eager: true });
const serviceByName = new Map(Object.entries(serviceFiles).map(([path, mod]) => [path.split('/').pop()!, mod.default]));
export const uploadedServicePhoto = (file: string | undefined) => (file ? serviceByName.get(file) : undefined);
