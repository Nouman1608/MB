import { absoluteUrl } from '../seo/meta';

export function articleNode(opts: {
  path: string; headline: string; description: string;
  published: Date; updated?: Date; authorName: string; image?: string;
}) {
  return {
    '@type': 'Article',
    '@id': absoluteUrl(opts.path) + '#article',
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.published.toISOString(),
    dateModified: (opts.updated ?? opts.published).toISOString(),
    author: { '@type': 'Person', name: opts.authorName },
    publisher: { '@id': absoluteUrl('/#organization') },
    mainEntityOfPage: { '@id': absoluteUrl(opts.path) + '#webpage' },
    ...(opts.image ? { image: absoluteUrl(opts.image) } : {}),
  };
}
