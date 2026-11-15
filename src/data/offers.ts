// Seasonal event offers. Values live in src/content-data/offers.json (edited from the admin panel), checked
// against src/lib/content-schema.ts. Rules: docs/build/offers-and-events.md
// Exactly one offer is `featured`. Discounts stay [DISCOUNT] until the client sends real numbers.
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

// Offer prices count only while the offer runs and has a discount licence (Ministry of Commerce).
const licensedNow = (list: OfferEntry[], now: number) => list.filter((o) => isLive(o as Offer, now) && !!o.discountLicence);

/** The offer price for a package: the lowest licensed, running offer price below its regular price, or null. */
export function offerPriceIn(list: OfferEntry[], packageId: string, regular: number, now = Date.now()): number | null {
  const prices = licensedNow(list, now)
    .flatMap((o) => o.prices ?? [])
    .filter((p) => p.package === packageId && p.price < regular)
    .map((p) => p.price);
  return prices.length ? Math.min(...prices) : null;
}
export const offerPrice = (packageId: string, regular: number, now = Date.now()) => offerPriceIn(all, packageId, regular, now);

/** Whether any licensed offer with prices is running (cards keep a badge row so prices line up). */
export const offerPricesLive = (now = Date.now()) => licensedNow(all, now).some((o) => (o.prices ?? []).length > 0);
