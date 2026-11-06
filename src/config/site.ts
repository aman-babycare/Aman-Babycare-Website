// Site settings. Business facts (name, legal entity, CR, contact, hours) live in src/data/business.ts.
import { business } from '../data/business';

export type Locale = 'ar' | 'en';

export const site = {
  // PUBLIC_INDEXING=true on the production build only. Anything else (staging, previews, local) keeps
  // noindex,nofollow on every page and a robots.txt that disallows all.
  isLive: import.meta.env.PUBLIC_INDEXING === 'true',

  // Tag IDs from the GitHub repo variables (deploy.yml). Empty = that tag never loads. CookieBanner loads
  // them only after the visitor presses Accept.
  analytics: {
    ga4: (import.meta.env.PUBLIC_GA4_ID ?? '').trim(),
    meta: (import.meta.env.PUBLIC_META_PIXEL_ID ?? '').trim(),
    snapchat: (import.meta.env.PUBLIC_SNAP_PIXEL_ID ?? '').trim(),
  },

  social: {
    instagram: '',
    tiktok: '',
    snapchat: '',
    x: '',
  },
} as const;

// Lives on the Packages page.
export const personalizedCarePlans = {
  name: { en: 'Personalized Care Plans', ar: 'خطط رعاية مخصصة' },
  price: '[PRICE]',
};

export function isPlaceholder(value: string): boolean {
  return /^\[.+\]$/.test(value);
}

// wa.me link with a prefilled message. Without a real number it opens WhatsApp's contact picker.
export function whatsappUrl(message: string): string {
  const text = `?text=${encodeURIComponent(message)}`;
  if (isPlaceholder(business.whatsapp)) return `https://wa.me/${text}`;
  return `https://wa.me/${business.whatsapp.replace(/\D/g, '')}${text}`;
}
