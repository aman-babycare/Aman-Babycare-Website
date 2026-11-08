// Careers: roles caregivers can apply for. Values live in src/content-data/jobs.json (edited from the admin
// panel's Jobs page), checked against src/lib/content-schema.ts at build time. Applications go to the admin
// panel (PUBLIC_ADMIN_API_URL/api/applications); see src/components/ApplyForm.astro.
// TODO(client): confirm the starter roles, duties and requirements. REVIEW-AR: the Arabic in jobs.json.
import data from '../content-data/jobs.json';
import type { Employment, JobEntry } from '../lib/content-schema';
import type { L } from '../i18n/ui';

export const jobs = data as JobEntry[];
/** Listed on the Careers page and offered in the apply form, in their saved order. */
export const openJobs = jobs.filter((j) => j.open);
export const hiring = openJobs.length > 0;

/** Duties and requirements are stored one point per line. */
export const points = (text: string) => text.split('\n').map((l) => l.trim()).filter(Boolean);

export const employmentLabel: Record<Employment, L> = {
  'full-time': { ar: 'دوام كامل', en: 'Full-time' },
  'part-time': { ar: 'دوام جزئي', en: 'Part-time' },
  flexible: { ar: 'مواعيد مرنة', en: 'Flexible hours' },
};

/** schema.org JobPosting employmentType. */
export const employmentType: Record<Employment, string[]> = {
  'full-time': ['FULL_TIME'],
  'part-time': ['PART_TIME'],
  flexible: ['PART_TIME', 'TEMPORARY'],
};

// The apply form's choices. Labels are sent as shown (like the booking card), so the admin shows what the
// applicant picked; the ids are stable for the admin panel's own labels.
export const genders: { id: 'female' | 'male'; label: L }[] = [
  { id: 'female', label: { ar: 'أنثى', en: 'Female' } },
  { id: 'male', label: { ar: 'ذكر', en: 'Male' } },
];

export const residences: { id: 'saudi' | 'resident' | 'outside'; label: L }[] = [
  { id: 'saudi', label: { ar: 'مواطن/ة سعودي/ة', en: 'Saudi national' } },
  { id: 'resident', label: { ar: 'مقيم/ة في المملكة (إقامة)', en: 'Resident in Saudi Arabia (iqama)' } },
  { id: 'outside', label: { ar: 'خارج المملكة', en: 'Outside Saudi Arabia' } },
];

export const experiences: { id: '0-1' | '1-3' | '3-5' | '5+'; label: L }[] = [
  { id: '0-1', label: { ar: 'أقل من سنة', en: 'Under 1 year' } },
  { id: '1-3', label: { ar: 'من سنة إلى 3', en: '1–3 years' } },
  { id: '3-5', label: { ar: 'من 3 إلى 5 سنوات', en: '3–5 years' } },
  { id: '5+', label: { ar: 'أكثر من 5 سنوات', en: 'Over 5 years' } },
];

export const availabilities: { id: Employment; label: L }[] = (['full-time', 'part-time', 'flexible'] as const).map((id) => ({ id, label: employmentLabel[id] }));

export const languageChoices: { id: string; label: L }[] = [
  { id: 'arabic', label: { ar: 'العربية', en: 'Arabic' } },
  { id: 'english', label: { ar: 'الإنجليزية', en: 'English' } },
  { id: 'filipino', label: { ar: 'الفلبينية', en: 'Filipino' } },
  { id: 'urdu-hindi', label: { ar: 'الأردية / الهندية', en: 'Urdu / Hindi' } },
  { id: 'bengali', label: { ar: 'البنغالية', en: 'Bengali' } },
  { id: 'indonesian', label: { ar: 'الإندونيسية', en: 'Indonesian' } },
];

export const GENERAL_JOB = 'general';
export const generalLabel: L = { ar: 'طلب عام (أي وظيفة مناسبة)', en: 'General application (any suitable role)' };
