import { absoluteUrl } from '../seo/meta';
import { authorReference, type SchemaAuthor } from './person';

/**
 * v1.2 WS7 — `authorEntityType` must come from the real authors collection
 * entry (`entityType`, see content.config.ts), not be assumed. Every
 * resource/article on this site is currently bylined to the Marlbridge
 * Academic Team (a team, entityType: 'organization'), so defaulting to
 * 'organization' when no author reference resolves is the honest default
 * — it matches the fallback name below ('Marlbridge Academic Team'),
 * which is also not a person.
 */
/**
 * D-380 (audit E949) -- no `editor`. The "Reviewed by" line names the subject
 * teacher accountable for a page; it is not a claim that the person edited or
 * checked it (editorial policy, D-379). schema.org has no "accountable person"
 * property, so the structured data carries no reviewer property at all. Do not
 * add `editor`, `reviewedBy`, `contributor` or any other person property for it.
 */
/**
 * D-516 -- `authors` are the people or teams the page visibly credits as
 * its author, in that order, each built with schemaAuthor() from the same
 * authors-collection entry the page's byline reads. Each becomes a Person or
 * Organization carrying the `@id` and URL of its profile page (see
 * authorReference() in ./person.ts); an author with no published profile is
 * named without a link rather than given a URL that does not exist. One
 * author is written as an object and several as a list, as schema.org allows.
 */
export function articleNode(opts: {
  path: string; headline: string; description: string;
  published: Date; updated?: Date; authors: readonly SchemaAuthor[];
  image?: string;
}) {
  const authors = opts.authors.map(authorReference);
  return {
    '@type': 'Article',
    '@id': absoluteUrl(opts.path) + '#article',
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.published.toISOString(),
    dateModified: (opts.updated ?? opts.published).toISOString(),
    author: authors.length === 1 ? authors[0] : authors,
    publisher: { '@id': absoluteUrl('/#organization') },
    mainEntityOfPage: { '@id': absoluteUrl(opts.path) + '#webpage' },
    ...(opts.image ? { image: absoluteUrl(opts.image) } : {}),
  };
}
