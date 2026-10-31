// Pricing: the single source of truth for every price and pricing rule. The engine is src/lib/pricing.ts.
// Per-service prices, rates and packages live in src/content-data/pricing.json (edited from the admin panel),
// checked against src/lib/content-schema.ts; the global rules below stay in code. Never invent a number or a
// rule. Anything the client hasn't confirmed is null + TODO(client); the booking card then shows "Price on
// WhatsApp" for that service only. Rules: docs/build/packages-and-pricing.md
//
// Reference prices are client-approved DRAFTS copied from https://feelvaleo.com/en-sa/riyadh/babysitting.
// That page states hours for one plan only (stay-in: 12 hours, 6 days, 4 weeks), so every other plan's
// hoursPerDay is null. Hourly rates come from the draft rates in pricing.json until the client confirms hours.
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

// "draft" keeps the "Draft prices" note under every total until the client's own price list replaces these.
export const PRICE_LIST_STATUS: 'draft' | 'final' = 'draft';

export const WEEKS_PER_MONTH = 4; // TODO(client): confirm a month is billed as 4 weeks
export const VAT_RATE: number | null = null; // TODO(client): VAT-registered? e.g. 0.15 adds a VAT line
// TODO(client): when one caregiver does several services in the same hours, is the price summed, or the
// highest line plus an add-on percentage for the others?
export const MULTI_SERVICE_RULE: 'sum' | 'highestPlusAddon' = 'sum';
export const ADDON_PERCENT: number | null = null; // TODO(client): used only by "highestPlusAddon"

// Hours a timing bills per day. "hourly" uses the hours the customer picks. Timings marked `adjusted`
// need a timingPercent in the service's pricing before they can be priced.
export const TIMINGS: Record<TimingId, { label: L; hoursPerDay: number | null; window?: L; adjusted: boolean }> = {
  hourly: { label: { ar: 'بالساعة', en: 'Hourly' }, hoursPerDay: null, adjusted: false },
  'half-day': { label: { ar: 'نصف يوم', en: 'Half day' }, hoursPerDay: null, adjusted: false }, // TODO(client): hours
  'full-day': { label: { ar: 'يوم كامل', en: 'Full day' }, hoursPerDay: null, adjusted: false }, // TODO(client): hours
  'day-shift': { label: { ar: 'مناوبة نهارية', en: 'Day shift' }, hoursPerDay: 12, window: { ar: '8ص–8م', en: '8am–8pm' }, adjusted: false },
  night: { label: { ar: 'مناوبة ليلية', en: 'Night shift' }, hoursPerDay: 12, window: { ar: '8م–8ص', en: '8pm–8am' }, adjusted: true },
  '24-hours': { label: { ar: '24 ساعة', en: '24 hours' }, hoursPerDay: 24, adjusted: true },
  'stay-in': { label: { ar: 'إقامة', en: 'Live-in' }, hoursPerDay: 12, adjusted: true }, // TODO(client): confirm 12 billable hours/day
};

// Client decisions and open questions behind pricing.json (JSON has no comments):
// - Shifts are billed at the tier's hourly rate: night 12 h, 24 hours 24 h, live-in 12 h (client decision,
//   Oct 2026), hence timingPercent { night: 0, 24-hours: 0, stay-in: 0 }.
// - hourlyRate: the DRAFT "From X SAR per hour" figures on the Packages page (the reference's "as low as"
//   rates), approved as booking-card rates until the final price list. Babysitting weekly uses 39.29 as
//   approved; the 6-day weekly plan lists 39. Elderly has no weekly rate, so weekly stays on WhatsApp.
// - Newborn care and mother & baby support use the babysitting rates (not its packages) until they get their
//   own price lists (client decision, Oct 2026).
// - TODO(client): hours in the 345 SAR hourly booking and the 300 SAR elderly day; hours per day for the
//   weekly and monthly plans; minHours; extra-person prices; home-size adjustments for cleaning; driving vs
//   accompanying and a per-trip price for pick-up; price lists for cleaning, pet sitting, pick-up and errands.

// Validated at build time (the content-validate integration in astro.config.mjs); the browser bundle gets the data only.
const pricing = data as Pricing;

// The engine's shape: packages grouped by tier, the rate as hourlyRateOverride.
const toEngine = (s: ServicePricingEntry): ServicePricing => {
  const tiers: ServicePricing['tiers'] = {};
  for (const p of s.packages) {
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
    ...(s.hourlyRate && { hourlyRateOverride: s.hourlyRate }),
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

const allRefPackages = Object.values(PRICING).flatMap((s) => Object.values(s.tiers).flat());

/** Listed price of a reference package, for the Packages page. */
export const refPrice = (id: string): number => {
  const p = allRefPackages.find((r) => r.id === id);
  if (!p) throw new Error(`Unknown reference package: ${id}`);
  return p.price;
};

// Build-log flag: reference packages that can't give an hourly rate yet.
export const packagesMissingHours = allRefPackages.filter((p) => p.hoursPerDay === null).map((p) => p.id);
