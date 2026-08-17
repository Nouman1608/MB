import { site } from '../../data/site';
import { absoluteUrl } from '../seo/meta';
import { FALLBACK_EMAIL } from '../forms/submit';

/**
 * Site-wide graph nodes. No physical address, rating, award or affiliation
 * is emitted until the business confirms verifiable facts. The contact
 * email is the exception: it already appears as visible text on every page
 * that renders EnquiryForm (Contact, Tutoring, For Schools), so repeating
 * it here keeps structured data in step with what a visitor can already
 * read — see FALLBACK_EMAIL in utils/forms/submit.ts for the single source.
 */
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
