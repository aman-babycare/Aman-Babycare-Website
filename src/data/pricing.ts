// Pricing: the single source of truth for every price and pricing rule. The engine is src/lib/pricing.ts.
// Per-service prices, rates and packages live in src/content-data/pricing.json (edited from the admin panel),
// checked against src/lib/content-schema.ts; the global rules below stay in code. Never invent a number or a
// rule. Anything the client hasn't confirmed is null + TODO(client); the booking card then shows "Price on
// WhatsApp" for that service only. Rules: docs/build/packages-and-pricing.md
//
// Prices started from https://feelvaleo.com/en-sa/riyadh/babysitting and are live since Nov 2026 (client confirmed).
// That page states hours for one plan only (stay-in: 12 hours, 6 days, 4 weeks); the client has since set
// 8 hours a day on some plans. A package with hours needs the timing (shift) those hours belong to: "full-day"
// for 8 hours, "day-shift" for 12, "hourly" for an hourly booking. Plans without hours keep hoursPerDay null.
import type { L } from '../i18n/ui';
import data from '../content-data/pricing.json';
import type { Pricing, ServicePricingEntry } from '../lib/content-schema';

export type Tier = 'oneTime' | 'weekly' | 'monthly';
export type TimingId = 'hourly' | 'half-day' | 'full-day' | 'day-shift' | 'night' | '24-hours' | 'stay-in';
export type Unit = 'hour' | 'visit' | 'trip';

export interface RefPackage {
  id: string; // also the package id on the Packages page
  price: number; // SAR, whole
  hoursPerDay: number | null; // null = not stated by the client; the package then gives no hourly rate
  daysPerWeek: number;
  weeks: number;
  label: L;
  timing?: TimingId;
}

export interface ServicePricing {
  unit: Unit; // how the service is charged
  tiers: Partial<Record<Tier, RefPackage[]>>;
  hourlyRateOverride?: Partial<Record<Tier, number>>; // SAR per unit, if the client gives rates directly
  minHours?: number | null; // hourly bookings only
  extraPersonPercent?: number | null; // per extra child / baby / pet / elder
  timingPercent?: Partial<Record<TimingId, number>> | null; // night / 24 h / live-in adjustments
  homeSizePercent?: Record<string, number> | null; // cleaning only, keyed "apartment:1-2" etc.
}

export const WEEKS_PER_MONTH = 4; // TODO(client): confirm a month is billed as 4 weeks
export const VAT_RATE: number | null = null; // client: VAT not applicable (Nov 2026); e.g. 0.15 would add a VAT line
// TODO(client): when one caregiver does several services in the same hours, is the price summed, or the
// highest line plus an add-on percentage for the others?
export const MULTI_SERVICE_RULE: 'sum' | 'highestPlusAddon' = 'sum';
export const ADDON_PERCENT: number | null = null; // TODO(client): used only by "highestPlusAddon"

// Hours a timing bills per day. "hourly" uses the hours the customer picks. Timings marked `adjusted`
// need a timingPercent in the service's pricing before they can be priced.
export const TIMINGS: Record<TimingId, { label: L; hoursPerDay: number | null; window?: L; adjusted: boolean }> = {
  hourly: { label: { ar: 'بالساعة', en: 'Hourly' }, hoursPerDay: null, adjusted: false },
  'half-day': { label: { ar: 'نصف يوم', en: 'Half day' }, hoursPerDay: null, adjusted: false }, // TODO(client): hours
  'full-day': { label: { ar: 'يوم كامل', en: 'Full day' }, hoursPerDay: 8, window: { ar: '8 ساعات', en: '8 hours' }, adjusted: false }, // the 8-hour weekly and monthly plans (client, Nov 2026)
  'day-shift': { label: { ar: 'مناوبة نهارية', en: 'Day shift' }, hoursPerDay: 12, window: { ar: '8ص–8م', en: '8am–8pm' }, adjusted: false },
  night: { label: { ar: 'مناوبة ليلية', en: 'Night shift' }, hoursPerDay: 12, window: { ar: '8م–8ص', en: '8pm–8am' }, adjusted: true },
  '24-hours': { label: { ar: '24 ساعة', en: '24 hours' }, hoursPerDay: 24, adjusted: true },
  'stay-in': { label: { ar: 'إقامة', en: 'Live-in' }, hoursPerDay: 12, adjusted: true }, // TODO(client): confirm 12 billable hours/day
};

// Client decisions and open questions behind pricing.json (JSON has no comments):
// - Shifts are billed at the tier's hourly rate: night 12 h, 24 hours 24 h, live-in 12 h (client, Oct 2026,
//   confirmed Nov 2026: "all is the same"), hence timingPercent { night: 0, 24-hours: 0, stay-in: 0 } everywhere.
// - Client answers (Nov 2026):
//   · Newborn care: 39 an hour, 1,560 a week (5 × 8 h), 7,280 a month (8 h, 4 days off = 26 days × 35);
//     live-out 10,500 and live-in 11,200, both 12 h × 7 days. Days off depend on the family and lower the
//     price (agreed on WhatsApp), so the listed live-in/live-out prices are the 7-day ones.
//   · Babysitting and mother care follow the newborn prices. Babysitting's plans without a newborn price
//     (6-day weekly, 5- and 7-day monthly) were taken off; mother care has the newborn rates, no packages.
//   · Elderly companionship: 39 an hour throughout. Weekly 1,560 (8 h × 5), 2,808 (12 h × 6), 3,276 (12 h × 7);
//     monthly 6,240 / 7,488 / 8,736 (8 h × 5/6/7 days), 9,360 (12 h × 5); live-out 10,500, live-in 11,200
//     (12 h × 7 days; days off by agreement).
//   · Dog & cat sitting: 40 an hour, 6 h a day × 6 days = 1,440 a week; no hourly, single-visit or monthly price.
//   · Home cleaning: 50 an hour, apartment or villa alike (homeSizePercent 0); 600 = 3 visits a week of 4 h.
//   · Errands: 50 an hour. Pick-up & drop-off: off the website (services.json enabled: false).
//   · VAT: not applicable (VAT_RATE stays null).
// - TODO(client): newborn minHours (8 kept); extra-person prices; monthly prices for pets, cleaning and errands;
//   newborn/babysitting 5- and 6-day monthly and 6-/7-day weekly prices.

// Validated at build time (the content-validate integration in astro.config.mjs); the browser bundle gets the data only.
const pricing = data as Pricing;

// The engine's shape: packages grouped by tier, the rate as hourlyRateOverride. A service with showPrice off
// gets no packages and no rate, so every line for it reads "Price on WhatsApp". A package switched off in the
// admin (active: false) is not a reference package either.
const toEngine = (s: ServicePricingEntry): ServicePricing => {
  const tiers: ServicePricing['tiers'] = {};
  for (const p of s.showPrice ? s.packages.filter((k) => k.active !== false) : []) {
    (tiers[p.tier] ??= []).push({
      id: p.id,
      price: p.price,
      hoursPerDay: p.hoursPerDay,
      daysPerWeek: p.daysPerWeek,
      weeks: p.weeks,
      ...(p.timing && { timing: p.timing }),
      label: p.name,
    });
  }
  return {
    unit: s.unit,
    tiers,
    ...(s.showPrice && s.hourlyRate && { hourlyRateOverride: s.hourlyRate }),
    minHours: s.minHours,
    extraPersonPercent: s.extraPersonPercent,
    timingPercent: s.timingPercent,
    ...(s.homeSizePercent !== undefined && { homeSizePercent: s.homeSizePercent }),
  };
};

/** Per-service data as edited in the admin (packages with their display fields). */
export const PRICING_DATA = pricing.services;

export const PRICING: Record<string, ServicePricing> = Object.fromEntries(
  Object.entries(pricing.services).map(([id, s]) => [id, toEngine(s)]),
);

/** Services whose prices carry the "Draft prices" note. */
export const draftServices = Object.entries(pricing.services).filter(([, s]) => s.draft).map(([id]) => id);

const allRefPackages = Object.values(PRICING).flatMap((s) => Object.values(s.tiers).flat());

/** Listed price of a reference package, for the Packages page. */
export const refPrice = (id: string): number => {
  const p = allRefPackages.find((r) => r.id === id);
  if (!p) throw new Error(`Unknown reference package: ${id}`);
  return p.price;
};

// Build-log flag: reference packages that can't give an hourly rate yet.
export const packagesMissingHours = allRefPackages.filter((p) => p.hoursPerDay === null).map((p) => p.id);
