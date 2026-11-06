// "Book Your Service" config: the questions each service asks (one per screen), their options, and the
// booking-form options. Prices and pricing rules live in src/data/pricing.ts; the engine is src/lib/pricing.ts.
// Everything here can later be edited from an admin panel (PHASE 2). Rules: docs/build/packages-and-pricing.md
// REVIEW-AR: Arabic is a first draft, in the respectful plural address.
import type { L } from '../i18n/ui';
import type { IconName } from '../components/icons';
import type { Tier, TimingId } from './pricing';
import servicesData from '../content-data/services.json';

export type Opt = { id: string; label: L };
export type ScheduleUnit = 'days' | 'visits' | 'trips';

// One question per screen. `ages` repeats once per counted person (babies, children).
export type Step =
  | { kind: 'count'; key: string; label: L; min: number; max: number }
  | { kind: 'ages'; key: string; countKey: string | null; label: L; labelN: L; options: Opt[] }
  | { kind: 'single'; key: string; label: L; options: Opt[]; note?: L }
  | { kind: 'multi'; key: string; label: L; options: Opt[] }
  | { kind: 'timing'; options: TimingId[] }
  | { kind: 'pets' };

export type Answers = Record<string, unknown> & {
  timing?: TimingId;
  hours?: number;
  tier?: Tier;
  days?: number;
  daysPerWeek?: number;
  weeks?: number;
  months?: number;
};

export interface BookingService {
  id: string; // also the key in src/data/pricing.ts
  page: string; // service page slug (src/data/services.ts)
  name: L;
  icon: IconName;
  unit: ScheduleUnit;
  steps: Step[];
  /** People counted for the extra-person rule (1 = none extra). */
  people: (a: Answers) => number;
}

export const tiers: { id: Tier; label: L }[] = [
  { id: 'oneTime', label: { ar: 'مرة واحدة', en: 'One-time' } },
  { id: 'weekly', label: { ar: 'أسبوعياً', en: 'Weekly' } },
  { id: 'monthly', label: { ar: 'شهرياً', en: 'Monthly' } },
];

// Schedule ranges (S2).
export const SCHEDULE = { oneTimeDays: [1, 6], daysPerWeek: [1, 7], weeks: [1, 3], months: [1, 6] } as const;
export const HOURS_RANGE = [1, 12] as const; // hourly picker; minHours in pricing.ts raises the floor

const babyAges: Opt[] = [
  { id: '0-1m', label: { ar: '0–1 شهر', en: '0–1 month' } },
  { id: '1-3m', label: { ar: '1–3 أشهر', en: '1–3 months' } },
  { id: '3-6m', label: { ar: '3–6 أشهر', en: '3–6 months' } },
  { id: '6-12m', label: { ar: '6–12 شهراً', en: '6–12 months' } },
];
const childAges: Opt[] = [
  { id: 'u1', label: { ar: 'أقل من سنة', en: 'Under 1' } },
  { id: '1-3', label: { ar: '1–3 سنوات', en: '1–3' } },
  { id: '3-6', label: { ar: '3–6 سنوات', en: '3–6' } },
  { id: '6-12', label: { ar: '6–12 سنة', en: '6–12' } },
  { id: '12+', label: { ar: '12 سنة فأكثر', en: '12+' } },
];
const careTimings: TimingId[] = ['hourly', 'full-day', 'day-shift', 'night', '24-hours', 'stay-in'];
const supportTimings: TimingId[] = ['hourly', 'full-day', 'day-shift', 'night', 'stay-in'];
const n = (a: Answers, key: string) => (typeof a[key] === 'number' ? (a[key] as number) : 1);

// Client-requested order.
const allBookingServices: BookingService[] = [
  {
    id: 'newborn-care',
    page: 'newborn-care',
    name: { ar: 'رعاية المواليد', en: 'Newborn Care' },
    icon: 'baby',
    unit: 'days',
    steps: [
      { kind: 'count', key: 'babies', label: { ar: 'كم عدد المواليد؟', en: 'How many babies?' }, min: 1, max: 3 },
      { kind: 'ages', key: 'ages', countKey: 'babies', label: { ar: 'كم عمر المولود؟', en: "How old is your baby?" }, labelN: { ar: 'كم عمر المولود {n}؟', en: 'How old is baby {n}?' }, options: babyAges },
      { kind: 'timing', options: careTimings },
    ],
    people: (a) => n(a, 'babies'),
  },
  {
    id: 'babysitting',
    page: 'babysitting',
    name: { ar: 'رعاية الأطفال', en: 'Babysitting' },
    icon: 'child',
    unit: 'days',
    steps: [
      { kind: 'count', key: 'children', label: { ar: 'كم عدد الأطفال؟', en: 'How many children?' }, min: 1, max: 5 },
      { kind: 'ages', key: 'ages', countKey: 'children', label: { ar: 'كم عمر الطفل؟', en: 'How old is your child?' }, labelN: { ar: 'كم عمر الطفل {n}؟', en: 'How old is child {n}?' }, options: childAges },
      { kind: 'timing', options: careTimings },
    ],
    people: (a) => n(a, 'children'),
  },
  {
    id: 'mother-baby-support',
    page: 'newborn-care',
    name: { ar: 'دعم الأم والطفل', en: 'Mother & Baby Support' },
    icon: 'mother',
    unit: 'days',
    steps: [
      {
        kind: 'multi',
        key: 'help',
        label: { ar: 'بماذا نساعدكم؟', en: 'What help do you need?' },
        options: [
          { id: 'rest', label: { ar: 'دعم الراحة والتعافي', en: 'Rest & recovery support' } },
          { id: 'feeding', label: { ar: 'المساعدة في الرضاعة وفق تعليمات الأم', en: "Feeding support, following the mother's instructions" } },
          { id: 'bathing', label: { ar: 'استحمام المولود ونظافته', en: 'Baby bathing & hygiene' } },
          { id: 'sleep', label: { ar: 'النوم والراحة', en: 'Sleep & comfort' } },
          { id: 'housework', label: { ar: 'أعمال منزلية خفيفة', en: 'Light housework' } },
        ],
      },
      { kind: 'ages', key: 'ages', countKey: null, label: { ar: 'كم عمر المولود؟', en: "How old is your baby?" }, labelN: { ar: 'كم عمر المولود؟', en: "How old is your baby?" }, options: babyAges },
      { kind: 'timing', options: supportTimings },
    ],
    people: () => 1,
  },
  {
    id: 'elderly-companionship',
    page: 'elderly-companionship',
    name: { ar: 'مرافقة كبار السن', en: 'Elderly Companionship' },
    icon: 'elder',
    unit: 'days',
    steps: [
      { kind: 'count', key: 'people', label: { ar: 'كم شخصاً سنرافق؟', en: 'How many people will we keep company?' }, min: 1, max: 2 },
      {
        kind: 'single',
        key: 'age',
        label: { ar: 'ما الفئة العمرية؟', en: 'Which age range?' },
        options: [
          { id: '60-70', label: { ar: '60–70', en: '60–70' } },
          { id: '70-80', label: { ar: '70–80', en: '70–80' } },
          { id: '80+', label: { ar: '80 فأكثر', en: '80+' } },
        ],
      },
      {
        kind: 'single',
        key: 'mobility',
        label: { ar: 'كيف هي الحركة؟', en: 'How is their mobility?' },
        options: [
          { id: 'independent', label: { ar: 'يتحرك باستقلالية', en: 'Independent' } },
          { id: 'assisted', label: { ar: 'يحتاج بعض المساعدة في الحركة', en: 'Needs some help moving' } },
        ],
        note: { ar: 'مرافقة غير طبية؛ لا نقدّم رعاية تمريضية.', en: "Non-medical companionship; we don't provide nursing care." },
      },
      { kind: 'timing', options: supportTimings },
    ],
    people: (a) => n(a, 'people'),
  },
  {
    id: 'home-cleaning',
    page: 'home-cleaning',
    name: { ar: 'تنظيف المنازل', en: 'Home Cleaning' },
    icon: 'sparkle',
    unit: 'visits',
    steps: [
      {
        kind: 'single',
        key: 'home',
        label: { ar: 'ما نوع البيت؟', en: 'What type of home?' },
        options: [
          { id: 'apartment', label: { ar: 'شقة', en: 'Apartment' } },
          { id: 'villa', label: { ar: 'فيلا', en: 'Villa' } },
        ],
      },
      {
        kind: 'single',
        key: 'size',
        label: { ar: 'كم غرفة نوم؟', en: 'How many bedrooms?' },
        options: [
          { id: '1-2', label: { ar: '1–2 غرفة نوم', en: '1–2 bedrooms' } },
          { id: '3-4', label: { ar: '3–4 غرف نوم', en: '3–4 bedrooms' } },
          { id: '5+', label: { ar: '5 غرف نوم فأكثر', en: '5+ bedrooms' } },
        ],
      },
      { kind: 'timing', options: ['hourly', 'half-day', 'full-day'] },
    ],
    people: () => 1,
  },
  {
    id: 'pet-sitting',
    page: 'pet-sitting',
    name: { ar: 'رعاية الكلاب والقطط', en: 'Dog & Cat Sitting' },
    icon: 'paw',
    unit: 'days',
    steps: [
      { kind: 'pets' },
      {
        kind: 'multi',
        key: 'tasks',
        label: { ar: 'ماذا نفعل في الزيارة؟', en: 'What should we do on the visit?' },
        options: [
          { id: 'feeding', label: { ar: 'الإطعام', en: 'Feeding' } },
          { id: 'play', label: { ar: 'اللعب والتمشية', en: 'Play & walks' } },
          { id: 'litter', label: { ar: 'تنظيف صندوق الرمل والمكان', en: 'Litter & cleaning' } },
        ],
      },
      { kind: 'timing', options: ['hourly', 'half-day'] },
    ],
    people: (a) => Math.max(1, n0(a, 'dogs') + n0(a, 'cats') + (String(a.otherPet ?? '').trim() ? 1 : 0)),
  },
  {
    id: 'pick-up-drop-off',
    page: 'pick-up-drop-off',
    name: { ar: 'التوصيل والاستقبال', en: 'Pick-up & Drop-off' },
    icon: 'car',
    unit: 'trips',
    // TODO(client): driving vs accompanying. Never call it a "driver" service.
    steps: [
      { kind: 'count', key: 'children', label: { ar: 'كم عدد الأطفال؟', en: 'How many children?' }, min: 1, max: 4 },
      { kind: 'ages', key: 'ages', countKey: 'children', label: { ar: 'كم عمر الطفل؟', en: 'How old is your child?' }, labelN: { ar: 'كم عمر الطفل {n}؟', en: 'How old is child {n}?' }, options: childAges },
      {
        kind: 'single',
        key: 'purpose',
        label: { ar: 'إلى أين؟', en: 'Where to?' },
        options: [
          { id: 'school', label: { ar: 'المدرسة', en: 'School' } },
          { id: 'clubs', label: { ar: 'الأندية والأنشطة', en: 'Clubs & activities' } },
          { id: 'appointments', label: { ar: 'المواعيد', en: 'Appointments' } },
        ],
      },
      {
        kind: 'single',
        key: 'trip',
        label: { ar: 'نوع المشوار؟', en: 'Which trip?' },
        options: [
          { id: 'one-way', label: { ar: 'ذهاب فقط', en: 'One-way' } },
          { id: 'round', label: { ar: 'ذهاب وعودة', en: 'Round trip' } },
        ],
      },
    ],
    people: (a) => n(a, 'children'),
  },
  {
    id: 'errands',
    page: 'errands',
    name: { ar: 'المشتريات والمساعدة الشخصية', en: 'Errands & Personal Assistance' },
    icon: 'bag',
    unit: 'days',
    steps: [
      {
        kind: 'multi',
        key: 'types',
        label: { ar: 'ما نوع المساعدة؟', en: 'What kind of help?' },
        options: [
          { id: 'groceries', label: { ar: 'مقاضي البيت', en: 'Groceries' } },
          { id: 'household', label: { ar: 'مشتريات المنزل', en: 'Household shopping' } },
          { id: 'deliveries', label: { ar: 'استلام وتسليم الطلبات', en: 'Deliveries & collections' } },
          { id: 'other', label: { ar: 'أخرى', en: 'Other' } },
        ],
      },
      { kind: 'timing', options: ['hourly', 'half-day', 'full-day'] },
    ],
    people: () => 1,
  },
];

// A service switched off in services.json (admin panel) can't be booked either.
const switchedOff = new Set(servicesData.filter((x) => !x.enabled).map((x) => x.slug));
export const bookingServices: BookingService[] = allBookingServices.filter((x) => !switchedOff.has(x.page));

function n0(a: Answers, key: string) {
  return typeof a[key] === 'number' ? (a[key] as number) : 0;
}

export const PET_LIMITS = { dogs: 3, cats: 5 } as const;

export const startTimes: { id: string; label: L }[] = [
  { id: 'morning', label: { ar: 'صباحاً', en: 'Morning' } },
  { id: 'afternoon', label: { ar: 'بعد الظهر', en: 'Afternoon' } },
  { id: 'evening', label: { ar: 'مساءً', en: 'Evening' } },
  { id: 'night', label: { ar: 'ليلاً', en: 'Night' } },
];

// Required; nothing pre-selected.
export const caregiverPreferences: { id: string; label: L }[] = [
  { id: 'female', label: { ar: 'أنثى', en: 'Female' } },
  { id: 'male', label: { ar: 'ذكر', en: 'Male' } },
  { id: 'none', label: { ar: 'لا يهم', en: 'No preference' } },
];

// Labels are editable here. Never add nursing or medical roles.
export const caregiverTypes: { id: string; label: L }[] = [
  { id: 'nanny', label: { ar: 'مربية', en: 'Nanny' } },
  { id: 'housekeeper', label: { ar: 'عاملة منزلية', en: 'Housekeeper' } },
  { id: 'companion', label: { ar: 'مرافِقة', en: 'Companion' } },
  { id: 'any', label: { ar: 'أي نوع', en: 'Any' } },
];
export const DEFAULT_CAREGIVER_TYPE = 'any';
