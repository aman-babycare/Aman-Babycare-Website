// Seasonal event offers. Values live in src/content-data/offers.json (edited from the admin panel), checked
// against src/lib/content-schema.ts. Rules: docs/build/offers-and-events.md
// Exactly one offer is `featured`. Discounts stay [DISCOUNT] until the client sends real numbers.
// startDate is set ahead of the event: hourly-help searches peak just before Ramadan and the Eids (Ramadan
// 2027 goes live on 1 Feb, a week before ~8 Feb 2027).
// REVIEW-AR: Arabic is a first draft.
import type { IconName } from '../components/icons';
import data from '../content-data/offers.json';
import type { OfferEntry } from '../lib/content-schema';

export type Offer = OfferEntry & { icon: IconName };

export const offers = data as Offer[];

export const featuredOffer = offers.find((o) => o.featured) ?? offers[0];
export const upcomingOffers = offers.filter((o) => o !== featuredOffer);
