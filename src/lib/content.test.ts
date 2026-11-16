import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { offersSchema, parseContent, pricingSchema, validateContent } from './content-schema';
import { isListed, isLive, offerPriceIn } from '../data/offers';
import pricing from '../content-data/pricing.json';

const read = (file: string) => JSON.parse(readFileSync(new URL(`../content-data/${file}`, import.meta.url), 'utf8'));

describe('content-data', () => {
  it('every JSON file matches the schema', () => {
    expect(() => validateContent(read)).not.toThrow();
  });

  it('rejects a negative price with a readable path', () => {
    const bad = structuredClone(pricing);
    bad.services.babysitting.packages[0].price = -1;
    expect(() => parseContent(pricingSchema, bad, 'pricing.json')).toThrow(/services\.babysitting\.packages\.0\.price/);
  });

  it('rejects a duplicate package id', () => {
    const bad = structuredClone(pricing);
    bad.services.babysitting.packages.push(bad.services.babysitting.packages[0]);
    expect(() => parseContent(pricingSchema, bad, 'pricing.json')).toThrow(/Duplicate package id/);
  });

  it('takes up to 6 features, each in both languages', () => {
    const ok = structuredClone(pricing) as Record<string, any>;
    const f = { ar: 'ميزة', en: 'Feature' };
    ok.services.babysitting.packages[0].features = Array(6).fill(f);
    ok.services.babysitting.packages[0].active = false;
    expect(() => parseContent(pricingSchema, ok, 'pricing.json')).not.toThrow();
    const tooMany = structuredClone(ok);
    tooMany.services.babysitting.packages[0].features = Array(7).fill(f);
    expect(() => parseContent(pricingSchema, tooMany, 'pricing.json')).toThrow(/features/);
    const halfEmpty = structuredClone(ok);
    halfEmpty.services.babysitting.packages[0].features = [{ ar: 'ميزة', en: '' }];
    expect(() => parseContent(pricingSchema, halfEmpty, 'pricing.json')).toThrow(/features\.0\.en/);
  });
});

describe('offers', () => {
  const base = read('offers.json')[0];

  it('a slogan and offer prices need no licence number; a photo name must be a plain .jpg', () => {
    const ok = [{ ...base, slogan: { ar: 'وفّروا حتى 20%', en: 'Save up to 20%' }, discountLicence: null, image: 'ramadan-0a1b2c3d4e.jpg' }];
    expect(() => parseContent(offersSchema, ok, 'offers.json')).not.toThrow();
    expect(() => parseContent(offersSchema, [{ ...base, image: '../x.png' }], 'offers.json')).toThrow(/image/);
  });

  it('the end date must follow the start date', () => {
    const bad = [{ ...base, startDate: '2026-12-01', endsAt: '2026-11-30T23:59:00+03:00' }];
    expect(() => parseContent(offersSchema, bad, 'offers.json')).toThrow(/endsAt/);
  });

  it('starts on its Riyadh start day and expires at endsAt', () => {
    const o = { ...base, startDate: '2026-11-01', endsAt: '2026-11-30T23:59:00+03:00' };
    expect(isLive(o, Date.parse('2026-10-31T20:59:00Z'))).toBe(false); // 23:59 Riyadh, 31 Oct
    expect(isLive(o, Date.parse('2026-10-31T21:00:00Z'))).toBe(true); // 00:00 Riyadh, 1 Nov
    expect(isLive(o, Date.parse('2026-11-30T21:00:00Z'))).toBe(false);
    expect(isListed(o, Date.parse('2026-10-01T00:00:00Z'))).toBe(true);
    expect(isListed(o, Date.parse('2026-12-01T00:00:00Z'))).toBe(false);
  });

  it('an offer price shows while the offer runs (licence or not) and is below the regular price', () => {
    const now = Date.parse('2026-11-15T12:00:00+03:00');
    const o = { ...base, startDate: '2026-11-01', endsAt: '2026-11-30T23:59:00+03:00', discountLicence: '123', prices: [{ package: 'monthly-6', price: 5400 }] };
    expect(offerPriceIn([o], 'monthly-6', 6000, now)).toBe(5400);
    expect(offerPriceIn([o], 'monthly-5', 5000, now)).toBeNull(); // not in the offer
    expect(offerPriceIn([{ ...o, discountLicence: null }], 'monthly-6', 6000, now)).toBe(5400); // the licence is only a note
    expect(offerPriceIn([o], 'monthly-6', 6000, Date.parse('2026-12-01T00:00:00+03:00'))).toBeNull(); // ended
    expect(offerPriceIn([o], 'monthly-6', 5400, now)).toBeNull(); // not below the regular price
    const cheaper = { ...o, id: 'other', prices: [{ package: 'monthly-6', price: 5100 }] };
    expect(offerPriceIn([o, cheaper], 'monthly-6', 6000, now)).toBe(5100); // the lowest wins
  });

  it('a package gets one price per offer', () => {
    const bad = [{ ...base, prices: [{ package: 'monthly-6', price: 5400 }, { package: 'monthly-6', price: 5300 }] }];
    expect(() => parseContent(offersSchema, bad, 'offers.json')).toThrow(/two offer prices/);
  });
});
