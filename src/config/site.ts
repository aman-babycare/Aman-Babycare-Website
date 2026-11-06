// Site settings. Business facts (name, legal entity, CR, contact, hours) live in src/data/business.ts.
import { business } from '../data/business';

export type Locale = 'ar' | 'en';

export const site = {
  // PUBLIC_INDEXING=true is set for production (GitHub repo variable), so the live site is indexable.
  // Any other build (previews, local) keeps noindex,nofollow on every page and a robots.txt that disallows all.
  isLive: import.meta.env.PUBLIC_INDEXING === 'true',

  // Tag IDs from the GitHub repo variables (deploy.yml). Empty = that tag never loads. CookieBanner loads
  // them only after the visitor presses Accept.
  analytics: {
    ga4: (import.meta.env.PUBLIC_GA4_ID ?? '').trim(),
    meta: (import.meta.env.PUBLIC_META_PIXEL_ID ?? '').trim(),
    snapchat: (import.meta.env.PUBLIC_SNAP_PIXEL_ID ?? '').trim(),
  },
  // Social links live in business.json (`social`), edited from the admin panel.
} as const;

// Lives on the Packages page.
export const personalizedCarePlans = {
  name: { en: 'Personalized Care Plans', ar: 'خطط رعاية مخصصة' },
  price: '[PRICE]',
};

/** Not set yet: blank, or a "[PLACEHOLDER]". Such values never render. */
export function isPlaceholder(value: string | null | undefined): boolean {
  const v = (value ?? '').trim();
  return v === '' || /^\[.+\]$/.test(v);
}

// wa.me link with a prefilled message. Without a real number it opens WhatsApp's contact picker.
export function whatsappUrl(message: string): string {
  const text = `?text=${encodeURIComponent(message)}`;
  if (isPlaceholder(business.whatsapp)) return `https://wa.me/${text}`;
  return `https://wa.me/${business.whatsapp.replace(/\D/g, '')}${text}`;
}
