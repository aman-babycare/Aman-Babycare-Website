// Schema for the editable content in src/content-data/*.json. The admin panel edits those files and publishes
// them as a commit, so this file is the contract between the two projects: the admin keeps an identical copy
// (a test there checks it matches) and validates every save with it; the site validates again at build time.
// Keep it free of imports from the site so it can be copied as is.
import { z } from 'zod';

const text = z.string().trim();
export const L = z.object({ ar: text, en: text });
const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Use YYYY-MM-DD');
const isoDateTime = z.string().refine((s) => !Number.isNaN(Date.parse(s)), 'Use an ISO date and time');
const hhmm = z.string().regex(/^\d{2}:\d{2}$/, 'Use HH:MM');
const sar = z.number().nonnegative();
const percent = z.number().min(-100).max(500);

// ── Business settings ────────────────────────────────────────────────────────────────────────────────────
// Unknown values stay "[PLACEHOLDER]" (e.g. "[EMAIL]") and are hidden on the site until set.
export const businessSchema = z.object({
  brand: L,
  shortName: L,
  shortBrand: L, // footer operator line
  tagline: L,
  legalName: L, // the registered entity, also the data controller in the privacy policy
  crNumber: text,
  whatsapp: text, // any format: spaces, dashes and "+" are stripped when building links
  phone: text,
  email: text,
  privacyEmail: text,
  address: L,
  // Booking/office hours (when WhatsApp is answered), not service hours.
  hours: z.object({ opens: hhmm, closes: hhmm, label: L, time: L }),
  areaServed: L,
  country: L,
  countryCode: z.string().length(2),
  languages: L, // languages the caregivers speak
  shifts: z.object({ day: z.object({ label: L, time: L }), night: z.object({ label: L, time: L }) }),
  liveIn: z.boolean(),
  liveOut: z.boolean(),
  caregiverGenderChoice: z.boolean(),
  backgroundChecked: L,
  certified: L.nullable(), // null removes the claim everywhere
  domesticWorkerKeywords: z.boolean(), // SEO keyword mode (src/data/seo.ts)
  caregiverNationalityChoice: L.nullable(), // null keeps the nationality FAQ hidden
  // business.sa (Saudi Business Center) verification badge, shown in the footer once set.
  businessSaBadge: z.object({ url: z.string().url(), image: text }).nullable(),
});

// ── Services ─────────────────────────────────────────────────────────────────────────────────────────────
// Array order is the order on the site. Long-form page copy stays in src/data/service-pages/<slug>.ts.
export const servicesSchema = z
  .array(z.object({ slug: z.string().regex(/^[a-z0-9-]+$/), enabled: z.boolean(), name: L, card: L, tagline: L }))
  .refine((list) => new Set(list.map((s) => s.slug)).size === list.length, 'Duplicate service');

// ── Packages & prices ────────────────────────────────────────────────────────────────────────────────────
export const tierSchema = z.enum(['oneTime', 'weekly', 'monthly']);
export const timingSchema = z.enum(['hourly', 'half-day', 'full-day', 'day-shift', 'night', '24-hours', 'stay-in']);
export const packageGroupSchema = z.enum(['on-demand', 'monthly', 'elderly']);

export const packageSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  tier: tierSchema,
  group: packageGroupSchema, // tab on the Packages page
  timing: timingSchema.optional(),
  hoursPerDay: z.number().positive().nullable(), // null = not stated; the package then gives no hourly rate
  daysPerWeek: z.number().int().min(1).max(7),
  weeks: z.number().int().min(1),
  price: sar, // SAR, whole
  was: sar.optional(), // strike-through price; shown only under an offer with a discount licence
  perHour: sar.optional(), // "From X SAR per hour" on the card
  name: L,
  detail: L,
});

export const servicePricingSchema = z.object({
  unit: z.enum(['hour', 'visit', 'trip']),
  // false: no figures for this service anywhere (cards say "Price confirmed on WhatsApp", the booking card
  // says "Price on WhatsApp", Service schema carries no offers).
  showPrice: z.boolean(),
  // true: a "Draft prices" note under this service's prices until the client's own price list replaces them.
  draft: z.boolean(),
  hourlyRate: z.object({ oneTime: sar, weekly: sar, monthly: sar }).partial().optional(),
  minHours: z.number().int().positive().nullable(),
  extraPersonPercent: percent.nullable(),
  timingPercent: z.partialRecord(timingSchema, percent).nullable(),
  homeSizePercent: z.record(z.string(), percent).nullable().optional(),
  packages: z.array(packageSchema),
});

export const pricingSchema = z
  .object({ services: z.record(z.string(), servicePricingSchema) })
  .refine((p) => {
    const ids = Object.values(p.services).flatMap((s) => s.packages.map((k) => k.id));
    return new Set(ids).size === ids.length;
  }, 'Duplicate package id');

// ── Offers ───────────────────────────────────────────────────────────────────────────────────────────────
const isPlaceholderValue = (s: string) => s === '' || /^\[.+\]$/.test(s);

export const offerSchema = z
  .object({
    id: z.string().regex(/^[a-z0-9-]+$/),
    icon: text,
    event: L,
    when: L,
    hijri: z.boolean().optional(), // date depends on moon sighting
    startDate: isoDate.optional(), // the offer goes live on this date (none = live until it ends)
    endsAt: isoDateTime.optional(), // the offer expires at this moment; drives the countdown
    featured: z.boolean().optional(),
    title: L,
    text: L,
    services: z.array(z.string()).min(1), // service slugs in the bundle
    discount: text, // "[DISCOUNT]" until the client sends a real figure
    // Ministry of Commerce discount licence number. Without it no strike-through price can go live.
    discountLicence: text.nullable(),
  })
  .refine((o) => isPlaceholderValue(o.discount) || !!o.discountLicence, {
    message: 'A discount needs a discount licence number',
    path: ['discountLicence'],
  })
  .refine((o) => !o.startDate || !o.endsAt || Date.parse(o.startDate) < Date.parse(o.endsAt), {
    message: 'The end date must be after the start date',
    path: ['endsAt'],
  });

export const offersSchema = z
  .array(offerSchema)
  .refine((list) => new Set(list.map((o) => o.id)).size === list.length, 'Duplicate offer id');

export type Business = z.infer<typeof businessSchema>;
export type ServiceEntry = z.infer<typeof servicesSchema>[number];
export type PackageEntry = z.infer<typeof packageSchema>;
export type ServicePricingEntry = z.infer<typeof servicePricingSchema>;
export type Pricing = z.infer<typeof pricingSchema>;
export type OfferEntry = z.infer<typeof offerSchema>;

/** Parse or throw with a readable list of problems (build log / admin error banner). */
export function parseContent<T>(schema: z.ZodType<T>, data: unknown, file: string): T {
  const r = schema.safeParse(data);
  if (r.success) return r.data;
  const issues = r.error.issues.map((i) => `  ${i.path.join('.') || '(root)'}: ${i.message}`).join('\n');
  throw new Error(`Invalid content in ${file}:\n${issues}`);
}

/** Every file in src/content-data/ and its schema. */
export const contentFiles = {
  'business.json': businessSchema,
  'services.json': servicesSchema,
  'pricing.json': pricingSchema,
  'offers.json': offersSchema,
} as const;

/** Validate all content files; `read` returns a file's parsed JSON. Used by the build and the tests. */
export function validateContent(read: (file: keyof typeof contentFiles) => unknown): void {
  for (const [file, schema] of Object.entries(contentFiles) as [keyof typeof contentFiles, z.ZodType][]) {
    parseContent(schema, read(file), `src/content-data/${file}`);
  }
}
