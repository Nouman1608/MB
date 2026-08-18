import { absoluteUrl } from '../seo/meta';

/**
 * v1.2 WS8 — this must only ever be called for a genuinely, currently
 * offered course. Two call sites, both gated, in different ways:
 *   - src/pages/programs/[slug].astro: explicit `d.marlbridgeTeaches ===
 *     'teaching'` check at the call site.
 *   - src/pages/boards/[board]/[qualification]/[subject].astro: no
 *     explicit check at the call site, but implicitly gated -- every leaf
 *     page under /boards/.../.../.../ only exists at all because
 *     isPublishable()/activeOnly() (src/utils/academic/index.ts) already
 *     filtered route generation down to ACTIVE, board-offered,
 *     Marlbridge-approved combinations. A page for a non-taught
 *     combination is never generated, so there is no unguarded call.
 */
export function courseNode(opts: { path: string; name: string; description: string }) {
  return {
    '@type': 'Course',
    '@id': absoluteUrl(opts.path) + '#course',
    name: opts.name,
    description: opts.description,
    provider: { '@id': absoluteUrl('/#organization') },
  };
}
