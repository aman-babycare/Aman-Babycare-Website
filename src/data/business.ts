// Business facts: the values live in src/content-data/business.json (edited from the admin panel), checked
// against src/lib/content-schema.ts. Never invent values: unknowns stay "" or [PLACEHOLDER] and are hidden from
// the UI until set. Legal name and CR number match the client's CR certificate issued 28/02/2026 (unified number
// 7053786815): Arabic name exactly as on the certificate, English name as on the company stamp.
//
// Notes on values that are not obvious from the JSON:
// - brand: always "Babycare", one word. tagline: from the logo.
// - hours: booking/office hours (when we answer WhatsApp), not service hours; shifts are when care happens
//   (client's SEO brief of 30 Oct 2026).
// - certified: from the client's brief of 30 Oct 2026, overriding the old ban in CLAUDE.md. null removes it.
// - domesticWorkerKeywords: TODO(client) confirm the CR/licence covers supplying hourly/monthly domestic workers.
// - caregiverNationalityChoice: TODO(client) can customers choose the caregiver's nationality? null hides the FAQ.
// REVIEW-AR: tagline, backgroundChecked and certified Arabic.
import data from '../content-data/business.json';
import type { Business } from '../lib/content-schema';

// Validated at build time (the content-validate integration in astro.config.mjs), not here, so the schema never ships to the browser.
export const business: Business = data;

// tel: link built from the phone number ("+966 59 500 2539" → "tel:+966595002539").
export const telUrl = () => `tel:${business.phone.replace(/[^\d+]/g, '')}`;
