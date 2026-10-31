import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { parseContent, pricingSchema, validateContent } from './content-schema';
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
