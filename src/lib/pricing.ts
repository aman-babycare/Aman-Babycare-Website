// Pricing engine: pure functions, no DOM. Data and rules: src/data/pricing.ts.
// Money is integer halalas (SAR × 100). Derived rates are exact fractions (BigInt) and each line is rounded
// once, half-up, to a whole SAR. A line is "unpriced" whenever a number or rule it needs is missing.
import {
  ADDON_PERCENT,
  MULTI_SERVICE_RULE,
  PRICING,
  TIMINGS,
  VAT_RATE,
  WEEKS_PER_MONTH,
  type RefPackage,
  type ServicePricing,
  type Tier,
  type TimingId,
} from '../data/pricing';
import { liveOfferPrices, type OfferPrices } from '../data/offers';

type L = { ar: string; en: string };
type Lang = 'ar' | 'en';

export interface PricingConfig {
  services: Record<string, ServicePricing>;
  timings: typeof TIMINGS;
  weeksPerMonth: number;
  vatRate: number | null;
  multiRule: 'sum' | 'highestPlusAddon';
  addonPercent: number | null;
  // Offer prices by package id (running offers with a discount licence). A booking equal to that package is
  // charged the offer price; any other booking of the same service, tier and shift gets the same percentage off.
  offerPrices: OfferPrices;
}

export const defaultConfig: PricingConfig = {
  services: PRICING,
  timings: TIMINGS,
  weeksPerMonth: WEEKS_PER_MONTH,
  vatRate: VAT_RATE,
  multiRule: MULTI_SERVICE_RULE,
  addonPercent: ADDON_PERCENT,
  offerPrices: liveOfferPrices(),
};

/** What the customer chose for one service. */
export interface Selection {
  service: string;
  tier: Tier;
  timing: TimingId | null; // null for trip-based services
  hours?: number; // hourly timing only
  people: number; // babies / children / elders / pets (1 = no extra-person charge)
  homeSize?: string; // cleaning: "apartment:1-2"
  tripsPerDay?: number; // pick-up: 1 one-way, 2 round trip
  days?: number; // one-time
  daysPerWeek?: number; // weekly / monthly
  weeks?: number; // weekly
  months?: number; // monthly
}

export interface Adjustment {
  kind: 'timing' | 'people' | 'homeSize' | 'minHours';
  percent?: number;
  label: L;
}

export interface Line {
  service: string;
  priced: boolean;
  exact: boolean; // charged at a listed package price
  rate: number | null; // halalas per unit, rounded for display
  hours: number | null; // billable units per day
  days: number;
  periods: number; // exact matches: how many times the package price applies
  adjustments: Adjustment[];
  lineTotal: number | null; // halalas, whole SAR
  missing: string[]; // why the line is unpriced
  basisText: L;
  // Under a running offer: what the line would cost at regular prices, the offer's name and the percentage off.
  offer: { regularTotal: number; name: L; percent: number } | null;
}

export interface Total {
  subtotal: number; // halalas
  vat: number | null;
  total: number;
  pricedCount: number;
  unpricedCount: number;
  saving: number; // halalas saved by offers across the priced lines
}

// ---------- Money ----------
const SAR = 100n;
/** Rational halalas → halalas rounded half-up to a whole SAR. */
const toWholeSar = (num: bigint, den: bigint): number => {
  const sar = (num + den * 50n) / (den * SAR); // half-up for non-negative values
  return Number(sar * SAR);
};
const halalas = (sarAmount: number) => Math.round(sarAmount * 100);

const fmt = (n: number, decimals = 0) =>
  n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
/** Rates: whole numbers stay whole (45), fractions show two digits (39.29). */
export const formatRate = (halalas: number, lang: Lang) => formatSar(halalas, lang, halalas % 100 === 0 ? 0 : 2);

/** "SAR 5,143" / "5,143 ر.س" from halalas; Western digits in both languages. */
export const formatSar = (amount: number, lang: Lang, decimals = 0) =>
  lang === 'ar' ? `${fmt(amount / 100, decimals)} ر.س` : `SAR ${fmt(amount / 100, decimals)}`;

// ---------- Arabic counting words ----------
const arCount = (n: number, one: string, two: string, few: string, many: string) =>
  n === 1 ? one : n === 2 ? two : n <= 10 ? `${n} ${few}` : `${n} ${many}`;
export const arHours = (n: number) => arCount(n, 'ساعة واحدة', 'ساعتان', 'ساعات', 'ساعة');
export const arDays = (n: number) => arCount(n, 'يوم واحد', 'يومان', 'أيام', 'يوماً');
export const arVisits = (n: number) => arCount(n, 'زيارة واحدة', 'زيارتان', 'زيارات', 'زيارة');
export const arTrips = (n: number) => arCount(n, 'مشوار واحد', 'مشواران', 'مشاوير', 'مشواراً');

// ---------- Rates ----------
interface Rate {
  num: bigint; // halalas
  den: bigint; // units
  refTiming?: TimingId; // timing the reference package was priced at
  pkg?: RefPackage;
}

const unitsPerDay = (pkg: RefPackage, unit: ServicePricing['unit']) => (unit === 'hour' ? pkg.hoursPerDay : 1);

/**
 * Raw rate for a tier: the override if the client set one, else the tier's reference package with the most
 * units (price ÷ units). Never borrows from another tier. null = no usable data.
 */
export function hourlyRate(service: string, tier: Tier, cfg: PricingConfig = defaultConfig): Rate | null {
  const s = cfg.services[service];
  if (!s) return null;
  const override = s.hourlyRateOverride?.[tier];
  if (override != null) return { num: BigInt(halalas(override)), den: 1n };
  let best: { pkg: RefPackage; units: number } | null = null;
  for (const pkg of s.tiers[tier] ?? []) {
    const perDay = unitsPerDay(pkg, s.unit);
    if (perDay == null) continue;
    const units = perDay * pkg.daysPerWeek * pkg.weeks;
    if (!best || units > best.units) best = { pkg, units };
  }
  if (!best) return null;
  return { num: BigInt(best.pkg.price) * SAR, den: BigInt(best.units), refTiming: best.pkg.timing, pkg: best.pkg };
}

const timingPct = (s: ServicePricing, t: TimingId | undefined, cfg: PricingConfig): number | null => {
  if (!t || !cfg.timings[t].adjusted) return 0;
  return s.timingPercent?.[t] ?? null;
};

/**
 * Base rate (before the selected timing's adjustment) for this tier, or null with the reason.
 * A rate taken from an adjusted timing (e.g. live-in) is converted back to the base rate.
 */
function baseRate(sel: Selection, cfg: PricingConfig): { rate: Rate; sameTiming: boolean } | { missing: string } {
  const s = cfg.services[sel.service];
  const r = hourlyRate(sel.service, sel.tier, cfg);
  if (!r) return { missing: `rate:${sel.tier}` };
  if (s.unit !== 'hour' || r.refTiming === (sel.timing ?? undefined)) return { rate: r, sameTiming: true };
  const pRef = timingPct(s, r.refTiming, cfg);
  if (pRef == null) return { missing: `timingPercent:${r.refTiming}` };
  return { rate: { ...r, num: r.num * 100n, den: r.den * BigInt(100 + pRef) }, sameTiming: false };
}

/** Effective rate for a tier and timing (for "from SAR X/hr" hints), in halalas, or null. */
export function effectiveRate(service: string, tier: Tier, timing: TimingId | null, cfg: PricingConfig = defaultConfig): number | null {
  const s = cfg.services[service];
  if (!s) return null;
  const b = baseRate({ service, tier, timing, people: 1 }, cfg);
  if ('missing' in b) return null;
  if (b.sameTiming) return Number((b.rate.num + b.rate.den / 2n) / b.rate.den);
  const p = timingPct(s, timing ?? undefined, cfg);
  if (p == null) return null;
  const num = b.rate.num * BigInt(100 + p);
  const den = b.rate.den * 100n;
  return Number((num + den / 2n) / den);
}

// ---------- Quantity ----------
export function billedDays(sel: Selection, cfg: PricingConfig = defaultConfig): number {
  if (sel.tier === 'oneTime') return sel.days ?? 1;
  const perWeek = sel.daysPerWeek ?? 1;
  if (sel.tier === 'weekly') return perWeek * (sel.weeks ?? 1);
  return perWeek * cfg.weeksPerMonth * (sel.months ?? 1);
}

function unitsForDay(sel: Selection, s: ServicePricing, cfg: PricingConfig): { units: number | null; minApplied: boolean } {
  if (s.unit === 'trip') return { units: sel.tripsPerDay ?? 1, minApplied: false };
  if (s.unit === 'visit') return { units: 1, minApplied: false };
  if (sel.timing === 'hourly') {
    const h = sel.hours ?? null;
    if (h == null) return { units: null, minApplied: false };
    if (s.minHours != null && h < s.minHours) return { units: s.minHours, minApplied: true };
    return { units: h, minApplied: false };
  }
  return { units: sel.timing ? cfg.timings[sel.timing].hoursPerDay : null, minApplied: false };
}

// ---------- Exact match ----------
function exactMatch(sel: Selection, s: ServicePricing, hoursPerDay: number, cfg: PricingConfig): { pkg: RefPackage; periods: number } | null {
  if (sel.people !== 1 || sel.homeSize) return null;
  for (const pkg of s.tiers[sel.tier] ?? []) {
    if (pkg.hoursPerDay == null || pkg.hoursPerDay !== hoursPerDay) continue;
    if (s.unit === 'hour' && pkg.timing !== (sel.timing ?? undefined)) continue;
    const perPeriod = pkg.daysPerWeek * pkg.weeks;
    if (sel.tier === 'oneTime') {
      const days = sel.days ?? 1;
      if (days % perPeriod === 0) return { pkg, periods: days / perPeriod };
    } else if (sel.tier === 'weekly') {
      const weeks = sel.weeks ?? 1;
      if (pkg.daysPerWeek === sel.daysPerWeek && weeks % pkg.weeks === 0) return { pkg, periods: weeks / pkg.weeks };
    } else if (pkg.daysPerWeek === sel.daysPerWeek && pkg.weeks === cfg.weeksPerMonth) {
      return { pkg, periods: sel.months ?? 1 };
    }
  }
  return null;
}

// ---------- Offers ----------
/** The offer on a listed package, when its price is below the package's. */
function packageOffer(pkg: RefPackage, cfg: PricingConfig) {
  const o = cfg.offerPrices[pkg.id];
  return o && o.price < pkg.price ? { pkg, price: o.price, name: o.offer } : null;
}

/** For a booking that isn't a listed package: the deepest offer on a package of the same service, tier and
 *  shift, whose percentage then applies to the booking. */
function similarOffer(sel: Selection, s: ServicePricing, cfg: PricingConfig) {
  let best: ReturnType<typeof packageOffer> = null;
  for (const pkg of s.tiers[sel.tier] ?? []) {
    if (s.unit === 'hour' && pkg.timing !== (sel.timing ?? undefined)) continue;
    const o = packageOffer(pkg, cfg);
    if (o && (!best || o.price / o.pkg.price < best.price / best.pkg.price)) best = o;
  }
  return best;
}

const percentOff = (offer: number, regular: number) => Math.round((1 - offer / regular) * 100);

// ---------- Lines ----------
const TIMING_LABEL = (t: TimingId, cfg: PricingConfig): L => cfg.timings[t].label;

function unitText(unit: ServicePricing['unit'], n: number, lang: Lang) {
  if (lang === 'ar') return unit === 'hour' ? arHours(n) : unit === 'visit' ? arVisits(n) : arTrips(n);
  const w = unit === 'hour' ? 'hr' : unit === 'visit' ? 'visit' : 'trip';
  return `${n} ${w}${n === 1 ? '' : 's'}`;
}

export function priceLine(sel: Selection, cfg: PricingConfig = defaultConfig): Line {
  const s = cfg.services[sel.service];
  const days = billedDays(sel, cfg);
  const unpriced = (missing: string[], hours: number | null = null): Line => ({
    service: sel.service,
    priced: false,
    exact: false,
    rate: null,
    hours,
    days,
    periods: 0,
    adjustments: [],
    lineTotal: null,
    missing,
    basisText: { ar: 'السعر عبر واتساب', en: 'Price on WhatsApp' },
    offer: null,
  });
  if (!s) return unpriced([`service:${sel.service}`]);

  const { units, minApplied } = unitsForDay(sel, s, cfg);
  if (units == null) return unpriced([sel.timing === 'hourly' ? 'hours' : `hoursPerDay:${sel.timing}`]);

  // 1. Exact match with a listed package.
  const exact = s.unit === 'hour' && !minApplied ? exactMatch(sel, s, units, cfg) : null;
  if (exact) {
    const regular = exact.pkg.price * exact.periods * 100;
    const times = exact.periods > 1 ? ` × ${exact.periods}` : '';
    const o = packageOffer(exact.pkg, cfg);
    return {
      service: sel.service,
      priced: true,
      exact: true,
      rate: null,
      hours: units,
      days,
      periods: exact.periods,
      adjustments: [],
      lineTotal: o ? o.price * exact.periods * 100 : regular,
      missing: [],
      basisText: o ? { ar: `سعر العرض${times}`, en: `Offer price${times}` } : { ar: `سعر الباقة${times}`, en: `Package price${times}` },
      offer: o ? { regularTotal: regular, name: o.name, percent: percentOff(o.price, exact.pkg.price) } : null,
    };
  }

  // 2. Rate × units × days, then adjustments in order: timing, extra people, home size.
  const b = baseRate(sel, cfg);
  if ('missing' in b) return unpriced([b.missing], units);
  let num = b.rate.num * BigInt(units) * BigInt(days);
  let den = b.rate.den;
  const adjustments: Adjustment[] = [];
  const missing: string[] = [];
  if (minApplied) adjustments.push({ kind: 'minHours', label: { ar: `حد أدنى ${arHours(units)}`, en: `${units}-hour minimum` } });

  if (!b.sameTiming && sel.timing) {
    const p = timingPct(s, sel.timing, cfg);
    if (p == null) missing.push(`timingPercent:${sel.timing}`);
    else if (p !== 0) {
      num *= BigInt(100 + p);
      den *= 100n;
      const t = TIMING_LABEL(sel.timing, cfg);
      adjustments.push({ kind: 'timing', percent: p, label: { ar: `${t.ar} +${p}%`, en: `${t.en} +${p}%` } });
    }
  }
  if (sel.people > 1) {
    const p = s.extraPersonPercent;
    if (p == null) missing.push('extraPersonPercent');
    else {
      const extra = p * (sel.people - 1);
      num *= BigInt(100 + extra);
      den *= 100n;
      adjustments.push({ kind: 'people', percent: extra, label: { ar: `+${extra}% للأفراد الإضافيين`, en: `+${extra}% for extra people` } });
    }
  }
  if (sel.homeSize) {
    const p = s.homeSizePercent?.[sel.homeSize];
    if (p == null) missing.push(`homeSizePercent:${sel.homeSize}`);
    else if (p !== 0) {
      num *= BigInt(100 + p);
      den *= 100n;
      adjustments.push({ kind: 'homeSize', percent: p, label: { ar: `حجم البيت +${p}%`, en: `home size +${p}%` } });
    }
  }
  if (missing.length) return unpriced(missing, units);

  const regularRate = Number((b.rate.num + b.rate.den / 2n) / b.rate.den);
  const regularTotal = toWholeSar(num, den);
  // A running offer on a package of the same service, tier and shift: the same percentage off this booking.
  const o = similarOffer(sel, s, cfg);
  const scale = (n: bigint, d: bigint) => (o ? [n * BigInt(o.price), d * BigInt(o.pkg.price)] : [n, d]) as [bigint, bigint];
  const [rn, rd] = scale(b.rate.num, b.rate.den);
  const rate = Number((rn + rd / 2n) / rd);
  const lineTotal = o ? toWholeSar(...scale(num, den)) : regularTotal;
  const perUnit = s.unit === 'hour' ? { ar: 'للساعة', en: '/hr' } : s.unit === 'visit' ? { ar: 'للزيارة', en: '/visit' } : { ar: 'للمشوار', en: '/trip' };
  const adj = (lang: Lang) => (adjustments.length ? ` · ${adjustments.map((a) => a.label[lang]).join(' · ')}` : '');
  const perDay = s.unit === 'hour' ? { ar: ` × ${arHours(units)} يومياً`, en: ` × ${units} hrs/day` } : { ar: ` × ${unitText(s.unit, units, 'ar')} يومياً`, en: ` × ${unitText(s.unit, units, 'en')}/day` };
  const instead = o ? { ar: ` (بدلاً من ${formatRate(regularRate, 'ar')})`, en: ` (instead of ${formatRate(regularRate, 'en')})` } : { ar: '', en: '' };
  return {
    service: sel.service,
    priced: true,
    exact: false,
    rate,
    hours: units,
    days,
    periods: 0,
    adjustments,
    lineTotal,
    missing: [],
    basisText: {
      ar: `${formatRate(rate, 'ar')} ${perUnit.ar}${instead.ar}${perDay.ar} × ${arDays(days)}${adj('ar')}`,
      en: `${formatRate(rate, 'en')}${perUnit.en}${instead.en}${perDay.en} × ${days} day${days === 1 ? '' : 's'}${adj('en')}`,
    },
    offer: o && lineTotal < regularTotal ? { regularTotal, name: o.name, percent: percentOff(o.price, o.pkg.price) } : null,
  };
}

/** Sum of the priced lines under the multi-service rule, plus VAT when set. */
export function total(lines: Line[], cfg: PricingConfig = defaultConfig): Total {
  const priced = lines.filter((l) => l.priced && l.lineTotal != null).map((l) => l.lineTotal!);
  let unpricedCount = lines.length - priced.length;
  let subtotal = 0;
  if (cfg.multiRule === 'highestPlusAddon' && priced.length > 1) {
    const sorted = [...priced].sort((a, b) => b - a);
    if (cfg.addonPercent == null) {
      // Without the add-on rule only the highest line can be priced.
      subtotal = sorted[0];
      unpricedCount += sorted.length - 1;
    } else {
      const others = sorted.slice(1).reduce((a, b) => a + b, 0);
      subtotal = sorted[0] + toWholeSar(BigInt(others) * BigInt(cfg.addonPercent), 100n);
    }
  } else {
    subtotal = priced.reduce((a, b) => a + b, 0);
  }
  const vat = cfg.vatRate == null ? null : toWholeSar(BigInt(subtotal) * BigInt(Math.round(cfg.vatRate * 10000)), 10000n);
  // Offer savings, before VAT: what the priced lines would cost at regular prices minus what they cost now.
  const saving = lines.filter((l) => l.priced && l.offer && l.lineTotal != null).reduce((a, l) => a + (l.offer!.regularTotal - l.lineTotal!), 0);
  return { subtotal, vat, total: subtotal + (vat ?? 0), pricedCount: lines.length - unpricedCount, unpricedCount, saving };
}
