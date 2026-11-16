// Seasonal event offers. Values live in src/content-data/offers.json (edited from the admin panel), checked
// against src/lib/content-schema.ts. Rules: docs/build/offers-and-events.md
// Exactly one offer is `featured`. `slogan` (e.g. "Save up to 20%") shows on the offer cards; `image` is a photo
// uploaded from the admin (src/assets/photos/offers/, see src/lib/photos.ts).
// startDate is set ahead of the event: hourly-help searches peak just before Ramadan and the Eids (Ramadan
// 2027 goes live on 1 Feb, a week before ~8 Feb 2027).
// Dates are checked at build time; a daily rebuild (.github/workflows/deploy.yml) makes offers start and
// expire on their dates without anyone publishing.
// REVIEW-AR: Arabic is a first draft.
import type { IconName } from '../components/icons';
import data from '../content-data/offers.json';
import type { OfferEntry } from '../lib/content-schema';

export type Offer = OfferEntry & { icon: IconName };

const all = data as Offer[];

// A start date is a Riyadh calendar day.
const startsAt = (o: Offer) => (o.startDate ? Date.parse(`${o.startDate}T00:00:00+03:00`) : -Infinity);
const endsAt = (o: Offer) => (o.endsAt ? Date.parse(o.endsAt) : Infinity);

/** Not yet expired: listed on the site (live now, or coming up). */
export const isListed = (o: Offer, now = Date.now()) => endsAt(o) > now;
/** Running now: started and not expired. */
export const isLive = (o: Offer, now = Date.now()) => startsAt(o) <= now && now < endsAt(o);

export const offers = all.filter((o) => isListed(o));

// The featured offer must be running; if it isn't (or has expired), the first running offer takes its place.
export const featuredOffer = offers.find((o) => o.featured && isLive(o)) ?? offers.find((o) => isLive(o)) ?? offers[0];
export const upcomingOffers = offers.filter((o) => o !== featuredOffer);

// Offer prices count while the offer runs. (`discountLicence` is only the owner's note; it gates nothing.)
const runningNow = (list: OfferEntry[], now: number) => list.filter((o) => isLive(o as Offer, now));

export type OfferPrices = Record<string, { price: number; offer: OfferEntry['event'] }>;

/** Live offer prices by package id: the lowest from any running offer, with that offer's name. */
export function offerPricesIn(list: OfferEntry[], now = Date.now()): OfferPrices {
  const out: OfferPrices = {};
  for (const o of runningNow(list, now)) {
    for (const p of o.prices ?? []) if (!out[p.package] || p.price < out[p.package].price) out[p.package] = { price: p.price, offer: o.event };
  }
  return out;
}

/** The offer price for a package: the lowest running offer price below its regular price, or null. */
export function offerPriceIn(list: OfferEntry[], packageId: string, regular: number, now = Date.now()): number | null {
  const o = offerPricesIn(list, now)[packageId];
  return o && o.price < regular ? o.price : null;
}
/** Live offer prices for the booking card, read when the page runs (so an offer ends on time). */
export const liveOfferPrices = (now = Date.now()) => offerPricesIn(all, now);
export const offerPrice = (packageId: string, regular: number, now = Date.now()) => offerPriceIn(all, packageId, regular, now);

/** Whether any offer with prices is running (cards keep a badge row so prices line up). */
export const offerPricesLive = (now = Date.now()) => runningNow(all, now).some((o) => (o.prices ?? []).length > 0);
