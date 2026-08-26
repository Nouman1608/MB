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
  /**
   * QIGT programme -- ONLY pass these when a genuine review has actually
   * happened (reviewStatus === 'reviewed', reviewer resolves to a real
   * authors-collection entry with isReviewer: true). The caller (resource
   * and article page templates) computes this from the exact same data
   * used to render the on-page "Reviewed by" byline, so schema can never
   * claim a reviewer the page itself doesn't visibly show -- there is no
   * separate path for the schema value to diverge from the display value.
   * schema.org's Article has no dedicated "reviewedBy" property; `editor`
   * is the correct standard CreativeWork property for a named person who
   * checked/edited the content before publication.
   */
  editorName?: string; editorEntityType?: 'person' | 'organization';
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
    ...(opts.editorName
      ? { editor: { '@type': opts.editorEntityType === 'organization' ? 'Organization' : 'Person', name: opts.editorName } }
      : {}),
  };
}
