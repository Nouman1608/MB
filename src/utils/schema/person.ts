import { absoluteUrl } from '../seo/meta';

/** Emitted only on an author's own page; other pages reference it by @id. */
export function personNode(opts: {
  path: string; name: string; jobTitle?: string; bio?: string; image?: string;
}) {
  return {
    '@type': 'Person',
    '@id': absoluteUrl(opts.path) + '#person',
    name: opts.name,
    ...(opts.jobTitle ? { jobTitle: opts.jobTitle } : {}),
    ...(opts.bio ? { description: opts.bio } : {}),
    ...(opts.image ? { image: absoluteUrl(opts.image) } : {}),
  };
}
