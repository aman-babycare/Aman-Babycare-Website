import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { offersSchema, parseContent, pricingSchema, validateContent } from './content-schema';
import { isListed, isLive } from '../data/offers';
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
});

describe('offers', () => {
  const base = read('offers.json')[0];

  it('a real discount needs a discount licence number', () => {
    const bad = [{ ...base, discount: '20%', discountLicence: null }];
    expect(() => parseContent(offersSchema, bad, 'offers.json')).toThrow(/0\.discountLicence: A discount needs a discount licence number/);
    expect(() => parseContent(offersSchema, [{ ...base, discount: '20%', discountLicence: '123456' }], 'offers.json')).not.toThrow();
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
});
