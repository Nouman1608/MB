import { site } from '../../data/site';
import { absoluteUrl } from '../seo/meta';
import { FALLBACK_EMAIL } from '../forms/submit';
import { REGION_PRICING } from '../../data/pricing';

/**
 * Site-wide graph nodes. No rating, award or affiliation is emitted until
 * the business confirms verifiable facts. D-349 (audit R-04): the address
 * (owner-confirmed 2026-09-21, site.about.address), the regions the pricing
 * page lists (REGION_PRICING) and the parent organisation (Learners Academy,
 * as the home page and /about/ state) are now emitted. The contact
 * email is the exception: it already appears as visible text on every page
 * that renders EnquiryForm (Contact, Tutoring, For Schools), so repeating
 * it here keeps structured data in step with what a visitor can already
 * read — see FALLBACK_EMAIL in utils/forms/submit.ts for the single source.
 */
const COUNTRY_CODES: Record<string, string> = {
  Pakistan: 'PK', 'Saudi Arabia': 'SA', 'United Arab Emirates': 'AE', Qatar: 'QA',
  Kuwait: 'KW', Bahrain: 'BH', Oman: 'OM', 'United Kingdom': 'GB', Malaysia: 'MY',
};

/** Regions with their own row on /pricing/. "Other countries" is a price
 *  tier, not a place, so it is left out. */
const areaServed = REGION_PRICING
  .map((r) => r.region)
  .filter((name) => name !== 'Other countries')
  .map((name) => (COUNTRY_CODES[name]
    ? { '@type': 'Country', name, identifier: COUNTRY_CODES[name] }
    : { '@type': 'Place', name }));

const address = site.about.address
  ? {
      '@type': 'PostalAddress',
      streetAddress: site.about.address.split(', ').slice(0, -2).join(', '),
      addressLocality: site.about.city,
      addressCountry: 'PK',
    }
  : undefined;

export function siteGraph() {
  const org = {
    '@type': 'EducationalOrganization',
    '@id': absoluteUrl('/#organization'),
    name: site.name,
    url: site.url,
    slogan: site.tagline,
    email: FALLBACK_EMAIL,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/images/brand/marlbridge-horizontal.svg'),
    },
    ...(site.social.length ? { sameAs: site.social.map((s) => s.href) } : {}),
    ...(address ? { address } : {}),
    areaServed,
    parentOrganization: {
      '@type': 'EducationalOrganization',
      name: 'Learners Academy',
      url: 'https://learnersacademy.com.pk',
    },
  };

  const website = {
    '@type': 'WebSite',
    '@id': absoluteUrl('/#website'),
    url: site.url,
    name: site.name,
    inLanguage: 'en',
    publisher: { '@id': absoluteUrl('/#organization') },
  };

  return [org, website];
}

export function webPageNode(path: string, title: string, description: string) {
  return {
    '@type': 'WebPage',
    '@id': absoluteUrl(path) + '#webpage',
    url: absoluteUrl(path),
    name: title,
    description,
    isPartOf: { '@id': absoluteUrl('/#website') },
    about: { '@id': absoluteUrl('/#organization') },
  };
}
