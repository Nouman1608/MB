import { site } from '../../data/site';
import { absoluteUrl } from '../seo/meta';

/**
 * Site-wide graph nodes. No address, rating, award or affiliation is
 * emitted until the business confirms verifiable facts.
 */
export function siteGraph() {
  const org = {
    '@type': 'EducationalOrganization',
    '@id': absoluteUrl('/#organization'),
    name: site.name,
    url: site.url,
    slogan: site.tagline,
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
