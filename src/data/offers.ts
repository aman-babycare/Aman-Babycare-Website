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

/** Strike-through ("was") prices for a service show only while a running offer with a discount licence
 *  covers it. With no service, whether any such offer is running (keeps card rows aligned). */
export const discountLicensed = (service?: string, now = Date.now()) =>
  all.some((o) => isLive(o, now) && !!o.discountLicence && (!service || o.services.includes(service)));
