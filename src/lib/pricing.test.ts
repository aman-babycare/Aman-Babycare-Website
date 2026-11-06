import { describe, expect, it, vi } from 'vitest';
import { PRICING, TIMINGS, type ServicePricing, type Tier } from '../data/pricing';
import { defaultConfig, effectiveRate, formatSar, hourlyRate, priceLine, total, type PricingConfig, type Selection } from './pricing';

const sar = (n: number) => n * 100;

// A fully specified test service, so every rule can be exercised whatever the client's data holds.
const testService: ServicePricing = {
  unit: 'hour',
  tiers: {
    oneTime: [{ id: 't-once', price: 100, hoursPerDay: 4, daysPerWeek: 1, weeks: 1, timing: 'hourly', label: { ar: '', en: '' } }],
    weekly: [{ id: 't-week', price: 1000, hoursPerDay: 8, daysPerWeek: 5, weeks: 1, timing: 'day-shift', label: { ar: '', en: '' } }],
    monthly: [{ id: 't-month', price: 3000, hoursPerDay: 8, daysPerWeek: 5, weeks: 4, timing: 'day-shift', label: { ar: '', en: '' } }],
  },
  minHours: 3,
  extraPersonPercent: 20,
  timingPercent: { night: 25, '24-hours': 50, 'stay-in': 10 },
  homeSizePercent: { 'villa:5+': 40 },
};
const cfg = (over: Partial<PricingConfig> = {}): PricingConfig => ({
  ...defaultConfig,
  services: { ...defaultConfig.services, test: testService },
  ...over,
});
const sel = (s: Partial<Selection>): Selection => ({ service: 'test', tier: 'oneTime', timing: 'hourly', hours: 4, people: 1, days: 1, ...s });

describe('reference packages', () => {
  it('every package with known hours reproduces its listed price exactly', () => {
    for (const [service, s] of Object.entries(PRICING)) {
      for (const [tier, pkgs] of Object.entries(s.tiers) as [Tier, NonNullable<ServicePricing['tiers'][Tier]>][]) {
        for (const pkg of pkgs) {
          if (pkg.hoursPerDay == null) continue; // TODO(client): no hours, no rate
          expect(pkg.timing, `${pkg.id}: a package with hours per day needs its shift (timing)`).toBeDefined();
          const timing = pkg.timing!;
          const shiftHours = TIMINGS[timing].hoursPerDay;
          if (shiftHours != null) expect(pkg.hoursPerDay, `${pkg.id}: ${timing} is ${shiftHours} hours a day`).toBe(shiftHours);
          else expect(s.minHours ?? 0, `${pkg.id}: shorter than the service's minimum hours`).toBeLessThanOrEqual(pkg.hoursPerDay);
          const line = priceLine(
            {
              service,
              tier,
              timing,
              hours: timing === 'hourly' ? pkg.hoursPerDay : undefined,
              people: 1,
              days: pkg.daysPerWeek * pkg.weeks,
              daysPerWeek: pkg.daysPerWeek,
              weeks: pkg.weeks,
              months: 1,
            },
            defaultConfig,
          );
          expect(line.priced, pkg.id).toBe(true);
          expect(line.lineTotal, pkg.id).toBe(sar(pkg.price));
        }
      }
    }
  });

  it('a package is an exact match, whatever the hourly override', () => {
    const month = { ...testService.tiers.monthly![0], timing: 'stay-in' as const, hoursPerDay: 12, daysPerWeek: 6, price: 8500 };
    const c = cfg({ services: { test: { ...testService, tiers: { monthly: [month] }, hourlyRateOverride: { monthly: 33.82 } } } });
    const line = priceLine(sel({ tier: 'monthly', timing: 'stay-in', daysPerWeek: 6, months: 2, hours: undefined }), c);
    expect(line.exact).toBe(true);
    expect(line.lineTotal).toBe(sar(17000));
  });

  it('without an override, a rate is the package price ÷ its hours', () => {
    const r = hourlyRate('test', 'monthly', cfg())!;
    expect(Number(r.num) / Number(r.den)).toBeCloseTo((3000 * 100) / 160, 6);
  });

  it('test service also reproduces its own packages', () => {
    const c = cfg();
    expect(priceLine(sel({ hours: 4 }), c).lineTotal).toBe(sar(100));
    expect(priceLine(sel({ tier: 'weekly', timing: 'day-shift', daysPerWeek: 5, weeks: 1, hours: undefined }), { ...c, timings: { ...TIMINGS, 'day-shift': { ...TIMINGS['day-shift'], hoursPerDay: 8 } } }).lineTotal).toBe(sar(1000));
  });

  it('an 8-hour full-day plan is charged its package price', () => {
    const week = { ...testService.tiers.weekly![0], timing: 'full-day' as const };
    const c = cfg({ services: { test: { ...testService, tiers: { weekly: [week] }, hourlyRateOverride: { weekly: 39.29 } } } });
    const line = priceLine(sel({ tier: 'weekly', timing: 'full-day', daysPerWeek: 5, weeks: 2, hours: undefined }), c);
    expect(line.exact).toBe(true);
    expect(line.lineTotal).toBe(sar(2000));
    expect(priceLine(sel({ tier: 'weekly', timing: 'full-day', daysPerWeek: 3, weeks: 1, hours: undefined }), c).lineTotal).toBe(sar(943)); // 39.29 × 8 × 3 = 942.96
  });
});

// Rates as the client approved them in Oct 2026, fixed here so later price edits in the admin can't break the rules tests.
const approved = (hourlyRateOverride: ServicePricing['hourlyRateOverride']): ServicePricing => ({
  unit: 'hour',
  tiers: {},
  hourlyRateOverride,
  minHours: null,
  extraPersonPercent: null,
  timingPercent: { night: 0, '24-hours': 0, 'stay-in': 0 },
});
const careRates = { oneTime: 45, weekly: 39.29, monthly: 33.82 };
const approvedCfg = cfg({
  services: {
    babysitting: approved(careRates),
    'newborn-care': approved(careRates),
    'elderly-companionship': approved({ oneTime: 36, monthly: 36 }),
    'home-cleaning': { unit: 'hour', tiers: {}, minHours: null, extraPersonPercent: null, timingPercent: null, homeSizePercent: null },
  },
});

describe('rates', () => {
  it('monthly ≤ weekly ≤ one-time for the same hours (warns, never fails)', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    for (const service of Object.keys(PRICING)) {
      const r = (t: Tier) => effectiveRate(service, t, 'day-shift');
      const [o, w, m] = [r('oneTime'), r('weekly'), r('monthly')];
      if (m != null && w != null && m > w) console.warn(`[pricing] ${service}: monthly rate above weekly`);
      if (w != null && o != null && w > o) console.warn(`[pricing] ${service}: weekly rate above one-time`);
    }
    const c = cfg();
    const [o, w, m] = (['oneTime', 'weekly', 'monthly'] as Tier[]).map((t) => effectiveRate('test', t, 'day-shift', c)!);
    expect(m).toBeLessThanOrEqual(w);
    expect(w).toBeLessThanOrEqual(o);
    warn.mockRestore();
  });

  it('never borrows a rate from another tier', () => {
    const c = approvedCfg;
    expect(hourlyRate('elderly-companionship', 'weekly', c)).toBeNull(); // no weekly rate listed
    expect(hourlyRate('elderly-companionship', 'monthly', c)).not.toBeNull();
    expect(priceLine({ service: 'elderly-companionship', tier: 'weekly', timing: 'day-shift', people: 1, daysPerWeek: 3, weeks: 1 }, c).priced).toBe(false);
    const noHours = { ...testService.tiers.oneTime![0], hoursPerDay: null };
    const c2 = cfg({ services: { test: { ...testService, tiers: { oneTime: [noHours], monthly: testService.tiers.monthly } } } });
    expect(hourlyRate('test', 'oneTime', c2)).toBeNull(); // a package without hours gives no rate
    expect(hourlyRate('test', 'weekly', c2)).toBeNull();
  });

  it('prices the draft rates the client approved', () => {
    const c = approvedCfg;
    const bs = (s: Partial<Selection>) => priceLine({ service: 'babysitting', tier: 'oneTime', timing: 'hourly', people: 1, ...s }, c);
    expect(bs({ hours: 4, days: 1 }).lineTotal).toBe(sar(180)); // 45 × 4
    expect(bs({ tier: 'weekly', timing: 'day-shift', daysPerWeek: 5, weeks: 1 }).lineTotal).toBe(sar(2357)); // 39.29 × 12 × 5 = 2,357.4
    expect(bs({ tier: 'monthly', timing: 'night', daysPerWeek: 5, months: 1 }).lineTotal).toBe(sar(8117)); // 33.82 × 12 × 20 = 8,116.8
    expect(bs({ tier: 'weekly', timing: '24-hours', daysPerWeek: 1, weeks: 1 }).lineTotal).toBe(sar(943)); // 39.29 × 24 = 942.96
    expect(bs({ hours: 4, days: 1, people: 2 }).priced).toBe(false); // extra child: rule not set
    const el = priceLine({ service: 'elderly-companionship', tier: 'monthly', timing: 'day-shift', people: 1, daysPerWeek: 5, months: 1 }, c);
    expect(el.lineTotal).toBe(sar(8640)); // 36 × 12 × 20
    const nb = priceLine({ service: 'newborn-care', tier: 'oneTime', timing: 'hourly', hours: 3, people: 1, days: 1 }, c);
    expect(nb.lineTotal).toBe(sar(135)); // babysitting rate 45 × 3
    expect(priceLine({ service: 'home-cleaning', tier: 'oneTime', timing: 'hourly', hours: 3, people: 1, days: 1 }, c).priced).toBe(false);
  });

  it('hourlyRateOverride wins over reference packages', () => {
    const c = cfg({ services: { test: { ...testService, hourlyRateOverride: { oneTime: 30 } } } });
    const line = priceLine(sel({ hours: 5 }), c);
    expect(line.lineTotal).toBe(sar(150));
  });
});

describe('lines', () => {
  it('rounds a line once, half-up, to a whole SAR', () => {
    // 3000 SAR / 160 h = 18.75/h; × 8 h × 3 days = 450 exactly; × 7 h × 1 day = 131.25 → 131
    const c = cfg();
    const line = priceLine(sel({ tier: 'monthly', timing: 'hourly', hours: 7, daysPerWeek: 1, months: 1 }), c);
    expect(line.days).toBe(4);
    expect(line.lineTotal).toBe(sar(525)); // 18.75 × 7 × 4 = 525
    const odd = priceLine(sel({ tier: 'monthly', timing: 'hourly', hours: 5, daysPerWeek: 1, months: 1 }), { ...c, weeksPerMonth: 1 });
    expect(odd.lineTotal).toBe(sar(94)); // 18.75 × 5 = 93.75 → 94
    const down = priceLine(sel({ tier: 'oneTime', hours: 3, days: 1 }), cfg({ services: { test: { ...testService, minHours: null, hourlyRateOverride: { oneTime: 10.33 } } } }));
    expect(down.lineTotal).toBe(sar(31)); // 30.99 → 31
  });

  it('null rules make the line unpriced', () => {
    const c = cfg({ services: { test: { ...testService, extraPersonPercent: null } } });
    const line = priceLine(sel({ people: 2, hours: 5 }), c);
    expect(line.priced).toBe(false);
    expect(line.missing).toContain('extraPersonPercent');
    expect(priceLine({ service: 'pet-sitting', tier: 'monthly', timing: 'hourly', hours: 2, people: 1, daysPerWeek: 5, months: 1 }).priced).toBe(false);
    expect(priceLine(sel({ homeSize: 'apartment:1-2', hours: 5 }), cfg()).missing).toContain('homeSizePercent:apartment:1-2');
  });

  it('applies timing, extra-person and home-size adjustments in order', () => {
    const c = cfg();
    // 25/h (100/4) × 5 h × 1 day = 125; × 1.25 night isn't available on hourly, so use timing night via weekly
    const line = priceLine(sel({ tier: 'weekly', timing: 'night', daysPerWeek: 1, weeks: 1, people: 2, homeSize: 'villa:5+' }), c);
    // 1000/40 = 25/h × 12 h × 1 day = 300 → night +25% = 375 → +20% = 450 → +40% = 630
    expect(line.lineTotal).toBe(sar(630));
    expect(line.adjustments.map((a) => a.kind)).toEqual(['timing', 'people', 'homeSize']);
  });

  it('enforces minHours on hourly bookings', () => {
    const line = priceLine(sel({ hours: 2 }), cfg());
    expect(line.hours).toBe(3);
    expect(line.lineTotal).toBe(sar(75));
    expect(line.adjustments[0].kind).toBe('minHours');
  });

  it('exact match beats the computed price', () => {
    const c = cfg();
    const exact = priceLine(sel({ hours: 4, days: 2 }), c);
    expect(exact.exact).toBe(true);
    expect(exact.lineTotal).toBe(sar(200));
    const computed = priceLine(sel({ hours: 5, days: 1 }), c);
    expect(computed.exact).toBe(false);
    expect(computed.lineTotal).toBe(sar(125));
  });
});

describe('totals', () => {
  const lines = () => {
    const c = cfg();
    return [priceLine(sel({ hours: 4 }), c), priceLine(sel({ hours: 8 }), c), priceLine({ service: 'errands', tier: 'oneTime', timing: 'hourly', hours: 3, people: 1, days: 1 }, c)];
  };

  it('sums priced lines and counts unpriced ones', () => {
    const t = total(lines(), cfg());
    expect(t.subtotal).toBe(sar(300));
    expect(t.vat).toBeNull();
    expect(t.total).toBe(sar(300));
    expect(t.unpricedCount).toBe(1);
  });

  it('adds VAT when VAT_RATE is set', () => {
    const t = total(lines(), cfg({ vatRate: 0.15 }));
    expect(t.vat).toBe(sar(45));
    expect(t.total).toBe(sar(345));
  });

  it('highestPlusAddon charges the highest line plus a share of the others', () => {
    const t = total(lines(), cfg({ multiRule: 'highestPlusAddon', addonPercent: 50 }));
    expect(t.subtotal).toBe(sar(250)); // 200 + 50% of 100
    const noAddon = total(lines(), cfg({ multiRule: 'highestPlusAddon', addonPercent: null }));
    expect(noAddon.subtotal).toBe(sar(200));
    expect(noAddon.unpricedCount).toBe(2);
  });
});

describe('formatting', () => {
  it('uses Western digits and thousands separators in both languages', () => {
    expect(formatSar(sar(5143), 'en')).toBe('SAR 5,143');
    expect(formatSar(sar(5143), 'ar')).toBe('5,143 ر.س');
    expect(formatSar(2679, 'en', 2)).toBe('SAR 26.79');
  });
});
