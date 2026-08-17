import { absoluteUrl } from '../seo/meta';

/** Only ever called when availability === 'available'. */
export function courseNode(opts: { path: string; name: string; description: string }) {
  return {
    '@type': 'Course',
    '@id': absoluteUrl(opts.path) + '#course',
    name: opts.name,
    description: opts.description,
    provider: { '@id': absoluteUrl('/#organization') },
  };
}
