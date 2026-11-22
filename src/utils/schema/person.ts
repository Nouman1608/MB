import { absoluteUrl } from '../seo/meta';
import { routes } from '../urls/routes';

/**
 * D-516 -- one identity per author across the site.
 *
 * An author's profile page (/authors/<id>/) declares the entity: a Person
 * for a real teacher, an Organization for a team byline. Every page that
 * credits that author refers to the same entity by the same `@id`, so a
 * search engine reads "the author of this article" and "the person on this
 * profile" as one thing instead of two unrelated names.
 *
 * `authorEntityId()` is the only place the `@id` is built. personNode(),
 * organizationEntityNode() (the declarations) and authorReference() (the
 * references from articles and resources) all go through it.
 */
export type AuthorEntityType = 'person' | 'organization';

export const authorEntityId = (profilePath: string, entityType: AuthorEntityType): string =>
  absoluteUrl(profilePath) + (entityType === 'person' ? '#person' : '#organization-entity');

/** An author as structured data needs it. */
export interface SchemaAuthor {
  name: string;
  entityType: AuthorEntityType;
  /** The author's public profile path. Absent when there is no published profile to point to. */
  profilePath?: string;
}

/**
 * From an `authors` collection entry. `entityType` is read from the entry,
 * never assumed (v1.2 WS7). The profile path is given only for a published
 * profile: a draft one has no page (getAuthors() leaves it out of
 * /authors/[slug]), and a link to it would be a broken URL.
 *
 * With no entry at all the byline is the Marlbridge Academic Team, as an
 * Organization and without a profile link: nothing is known that would
 * verify which profile it should point to.
 */
export function schemaAuthor(
  entry?: { id: string; data: { name: string; entityType: AuthorEntityType; publicationState?: string } },
): SchemaAuthor {
  if (!entry) return { name: 'Marlbridge Academic Team', entityType: 'organization' };
  return {
    name: entry.data.name,
    entityType: entry.data.entityType,
    ...(entry.data.publicationState !== 'draft' ? { profilePath: routes.author(entry.id) } : {}),
  };
}

/**
 * The `author` value for an Article or LearningResource: the type, the
 * name, and -- when the author has a public profile -- that profile's URL
 * and the `@id` its own page declares.
 */
export function authorReference(author: SchemaAuthor) {
  const type = author.entityType === 'person' ? 'Person' : 'Organization';
  if (!author.profilePath) return { '@type': type, name: author.name };
  return {
    '@type': type,
    '@id': authorEntityId(author.profilePath, author.entityType),
    name: author.name,
    url: absoluteUrl(author.profilePath),
  };
}

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
    '@id': authorEntityId(opts.path, 'person'),
    name: opts.name,
    url: absoluteUrl(opts.path),
    ...(opts.jobTitle ? { jobTitle: opts.jobTitle } : {}),
    ...(opts.bio ? { description: opts.bio } : {}),
    ...(opts.image ? { image: absoluteUrl(opts.image) } : {}),
    mainEntityOfPage: { '@id': absoluteUrl(opts.path) + '#webpage' },
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
    '@id': authorEntityId(opts.path, 'organization'),
    name: opts.name,
    url: absoluteUrl(opts.path),
    ...(opts.jobTitle ? { description: opts.jobTitle } : {}),
    ...(opts.bio ? { description: opts.bio } : {}),
    parentOrganization: { '@id': absoluteUrl('/#organization') },
    mainEntityOfPage: { '@id': absoluteUrl(opts.path) + '#webpage' },
  };
}
