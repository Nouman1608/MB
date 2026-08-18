import { absoluteUrl } from '../seo/meta';

/**
 * Emitted only on a real, individual author's own page (entityType:
 * 'person' — see content.config.ts). Never call this for a team byline;
 * use organizationEntityNode() instead. There must be no case where an
 * author page emits Person schema without a real named individual behind
 * it (v1.2 WS7).
 */
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

/**
 * v1.2 WS7 — for a team/department byline (entityType: 'organization'),
 * not an individual. Uses a distinct @id from the site-wide
 * EducationalOrganization node (src/utils/schema/organization.ts's
 * `/#organization`) and links to it via `department`, since the team is a
 * part of Marlbridge rather than a separate legal entity — this avoids
 * both misrepresenting a team as a Person and colliding two different
 * things under the same @id.
 */
export function organizationEntityNode(opts: {
  path: string; name: string; jobTitle?: string; bio?: string;
}) {
  return {
    '@type': 'Organization',
    '@id': absoluteUrl(opts.path) + '#organization-entity',
    name: opts.name,
    ...(opts.jobTitle ? { description: opts.jobTitle } : {}),
    ...(opts.bio ? { description: opts.bio } : {}),
    parentOrganization: { '@id': absoluteUrl('/#organization') },
  };
}
