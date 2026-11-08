// JSON-LD builders. LocalBusiness is added by BaseLayout on every page.
import type { Locale } from '../config/site';
import type { Package } from '../data/packages';
import { business } from '../data/business';
import type { L } from '../i18n/ui';

export const faqSchema = (lang: Locale, items: { q: L; a: L }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((i) => ({
    '@type': 'Question',
    name: i.q[lang],
    acceptedAnswer: { '@type': 'Answer', text: i.a[lang] },
  })),
});

export const breadcrumbSchema = (items: { name: string; url: string }[], base: URL | undefined) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: new URL(item.url, base).href,
  })),
});

/** The one LocalBusiness entity (BaseLayout); every other schema points at it. */
export const businessId = (site: URL | undefined) => new URL('/#business', site).href;

export const serviceSchema = (
  lang: Locale,
  s: { name: string; serviceType: string; description: string; url: string; site: URL | undefined; packages: Package[] },
) => {
  // Offers only when prices are shown and set; never a Review or AggregateRating.
  const priced = s.packages.filter((p) => p.showPrice && p.price);
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.name,
    serviceType: s.serviceType,
    description: s.description,
    url: s.url,
    areaServed: { '@type': 'City', name: business.areaServed.en },
    provider: { '@id': businessId(s.site) },
    availableLanguage: [
      { '@type': 'Language', name: 'English', alternateName: 'en' },
      { '@type': 'Language', name: 'Arabic', alternateName: 'ar' },
    ],
    ...(priced.length && {
      offers: priced.map((p) => ({ '@type': 'Offer', name: p.name[lang], price: p.price, priceCurrency: 'SAR', url: s.url })),
    }),
  };
};

/** JobPosting for one open role on the Careers page. No salary or benefits: none are stated in the data. */
export const jobPostingSchema = (
  lang: Locale,
  job: import('./content-schema').JobEntry,
  opts: { url: string; site: URL | undefined; logo: string; employmentType: string[] },
) => {
  const esc = (s: string) => s.replace(/[&<>"]/g, (c) => `&#${c.charCodeAt(0)};`);
  const list = (text: string) => `<ul>${text.split('\n').map((l) => l.trim()).filter(Boolean).map((l) => `<li>${esc(l)}</li>`).join('')}</ul>`;
  const [duties, needs] = lang === 'ar' ? ['المهام', 'المتطلبات'] : ['Duties', 'Requirements'];
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title[lang],
    description: `<p>${esc(job.summary[lang])}</p><p>${duties}</p>${list(job.duties[lang])}<p>${needs}</p>${list(job.requirements[lang])}`,
    datePosted: job.postedAt,
    employmentType: opts.employmentType,
    directApply: true,
    url: opts.url,
    identifier: { '@type': 'PropertyValue', name: business.brand.en, value: job.id },
    hiringOrganization: { '@type': 'Organization', '@id': businessId(opts.site), name: business.brand[lang], sameAs: new URL('/', opts.site).href, logo: opts.logo },
    jobLocation: {
      '@type': 'Place',
      address: { '@type': 'PostalAddress', addressLocality: business.areaServed.en, addressRegion: business.areaServed.en, addressCountry: business.countryCode },
    },
  };
};
