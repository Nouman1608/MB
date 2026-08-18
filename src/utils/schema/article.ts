import { absoluteUrl } from '../seo/meta';

/**
 * v1.2 WS7 — `authorEntityType` must come from the real authors collection
 * entry (`entityType`, see content.config.ts), not be assumed. Every
 * resource/article on this site is currently bylined to the Marlbridge
 * Academic Team (a team, entityType: 'organization'), so defaulting to
 * 'organization' when no author reference resolves is the honest default
 * — it matches the fallback name below ('Marlbridge Academic Team'),
 * which is also not a person.
 */
export function articleNode(opts: {
  path: string; headline: string; description: string;
  published: Date; updated?: Date; authorName: string;
  authorEntityType?: 'person' | 'organization'; image?: string;
}) {
  return {
    '@type': 'Article',
    '@id': absoluteUrl(opts.path) + '#article',
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.published.toISOString(),
    dateModified: (opts.updated ?? opts.published).toISOString(),
    author: { '@type': opts.authorEntityType === 'person' ? 'Person' : 'Organization', name: opts.authorName },
    publisher: { '@id': absoluteUrl('/#organization') },
    mainEntityOfPage: { '@id': absoluteUrl(opts.path) + '#webpage' },
    ...(opts.image ? { image: absoluteUrl(opts.image) } : {}),
  };
}
