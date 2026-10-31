// Packages and prices. Rules: docs/build/packages-and-pricing.md
// Each package (price, schedule, card name and detail, was/perHour) lives with its service in
// src/content-data/pricing.json. DRAFT numbers from the client-supplied reference
// https://feelvaleo.com/en-sa/riyadh/babysitting — confirm every price before site.isLive = true.
import type { L } from '../i18n/ui';
import { PRICING_DATA } from './pricing';

export type PackageGroup = 'on-demand' | 'monthly' | 'elderly';

export interface Package {
  id: string;
  group: PackageGroup;
  service: string; // service slug
  name: L;
  detail: L;
  price: number | null; // SAR; null = ask on WhatsApp
  was?: number;
  perHour?: number;
  showPrice: boolean; // the service's "show price" switch
  draft: boolean; // the service's "draft price" switch
}

// tab: short label for the Packages page ribbon. REVIEW-AR
export const groups: { id: PackageGroup; name: L; tab: L; intro: L }[] = [
  {
    id: 'on-demand',
    name: { ar: 'عند الحاجة', en: 'On demand' },
    tab: { ar: 'عند الحاجة', en: 'On demand' },
    intro: {
      ar: 'ساعات أو أيام محددة، حين تحتاجون يداً إضافية في البيت.',
      en: 'A few hours or a few days, whenever you need an extra pair of hands.',
    },
  },
  {
    id: 'monthly',
    name: { ar: 'رعاية الأطفال الشهرية', en: 'Monthly babysitting' },
    tab: { ar: 'خطط الأطفال', en: 'Babysitting plans' },
    intro: {
      ar: 'الشخص نفسه من فريق الرعاية كل أسبوع، ليعتاد عليه أطفالكم وتطمئنوا.',
      en: 'The same caregiver every week, so your children settle in and you can relax.',
    },
  },
  {
    id: 'elderly',
    name: { ar: 'مرافقة كبار السن الشهرية', en: 'Monthly elderly companionship' },
    tab: { ar: 'خطط كبار السن', en: 'Elderly plans' },
    intro: {
      ar: 'صحبة يومية ثابتة لوالديكم، بإيقاع يناسبهم.',
      en: 'Steady daily company for your parents, at a pace that suits them.',
    },
  },
];

// Packages page order: tab by tab, then service order within a tab.
export const packages: Package[] = groups.flatMap((g) =>
  Object.entries(PRICING_DATA).flatMap(([service, s]) =>
    s.packages
      .filter((p) => p.group === g.id)
      .map((p) => ({
        id: p.id,
        group: p.group,
        service,
        name: p.name,
        detail: p.detail,
        price: p.price,
        ...(p.was != null && { was: p.was }),
        ...(p.perHour != null && { perHour: p.perHour }),
        showPrice: s.showPrice,
        draft: s.draft,
      })),
  ),
);

export const welcomeOffer = {
  name: { ar: 'عرض الترحيب: 6 ساعات رعاية أطفال', en: 'Welcome offer: 6 hours of babysitting' },
  detail: {
    ar: 'لأول حجز لكم معنا، لتتعرفوا على أمان بلا التزام.',
    en: 'For your first booking, so you can get to know Aman with no commitment.',
  },
  price: '[PRICE]',
};

export const packagesFor = (service: string) => packages.filter((p) => p.service === service);
export const packagesIn = (group: PackageGroup) => packages.filter((p) => p.group === group);

/** Lowest hourly rate among a service's packages (for price answers); null while prices are hidden. */
export const fromRate = (service: string): number | null => {
  const rates = packagesFor(service)
    .filter((p) => p.showPrice)
    .map((p) => p.perHour)
    .filter((r): r is number => typeof r === 'number');
  return rates.length ? Math.min(...rates) : null;
};
