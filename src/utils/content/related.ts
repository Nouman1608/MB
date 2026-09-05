import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * QIGT programme -- every place in this file that lists, links to, or
 * counts resources/articles must exclude draft content the same way
 * getResources()/getArticles() do (src/utils/content/collections.ts),
 * or a listing could link to a page that getStaticPaths never builds.
 * `archived` items ARE included here -- their own page still resolves
 * (just noindexed), so they may still legitimately appear in related-
 * content lists; only `draft` is excluded pre-publication.
 */
const isPublishedResource = (r: CollectionEntry<'resources'>) => r.data.reviewStatus !== 'draft';
const isPublishedArticle = (a: CollectionEntry<'articles'>) => !a.data.draft && a.data.reviewStatus !== 'draft';

/**
 * Merges hand-picked relations with derived ones (same subject, level or topic),
 * de-duplicates, excludes self, caps the list. Editors curate only where it adds value.
 */
/**
 * Audit I08 fix (2026-09-05): candidates were previously pushed in pure
 * topic > subject > level order with no board awareness, so a same-board
 * match and a cross-board match on the same tier were interchangeable --
 * whichever came first in collection order won. Cross-board linking is
 * not itself an error (see ResourceCard.astro's board label, added in
 * the same fix, which makes the destination board visible either way),
 * but the audit's own recommendation is to "prefer same-board
 * recommendations" where one is available. The optional `boards` param
 * (the calling page's own resource.data.boards) makes each tier do a
 * same-board pass before a cross-board pass; omitting it (as every
 * caller other than resources/[slug].astro does, since only a resource
 * page has a specific "own board" to prefer) reproduces the exact prior
 * behaviour -- sharesBoard() is vacuously true for everyone.
 */
export async function relatedResources(
  opts: { subject?: string; level?: string; topic?: string; boards?: readonly string[]; picked?: readonly { id: string }[]; excludeId?: string; limit?: number },
): Promise<CollectionEntry<'resources'>[]> {
  const { subject, level, topic, boards, picked = [], excludeId, limit = 3 } = opts;
  const all = (await getCollection('resources')).filter(isPublishedResource);
  const byId = new Map(all.map((r) => [r.id, r]));

  const out: CollectionEntry<'resources'>[] = [];
  const push = (entry?: CollectionEntry<'resources'>) => {
    if (!entry || entry.id === excludeId || out.some((o) => o.id === entry.id)) return;
    if (out.length < limit) out.push(entry);
  };
  const sharesBoard = (r: CollectionEntry<'resources'>) =>
    !boards || boards.length === 0 || r.data.boards.some((b) => boards.includes(b));

  for (const p of picked) push(byId.get(p.id));
  if (topic) {
    for (const r of all) if (r.data.topic === topic && sharesBoard(r)) push(r);
    for (const r of all) if (r.data.topic === topic && !sharesBoard(r)) push(r);
  }
  if (subject) {
    for (const r of all) if (r.data.subject.id === subject && sharesBoard(r)) push(r);
    for (const r of all) if (r.data.subject.id === subject && !sharesBoard(r)) push(r);
  }
  if (level) {
    for (const r of all) if (r.data.level.includes(level as never) && sharesBoard(r)) push(r);
    for (const r of all) if (r.data.level.includes(level as never) && !sharesBoard(r)) push(r);
  }
  return out;
}

export async function relatedArticles(
  opts: { subject?: string; category?: string; picked?: readonly { id: string }[]; excludeId?: string; limit?: number },
): Promise<CollectionEntry<'articles'>[]> {
  const { subject, category, picked = [], excludeId, limit = 3 } = opts;
  const all = (await getCollection('articles')).filter(isPublishedArticle);
  const byId = new Map(all.map((a) => [a.id, a]));

  const out: CollectionEntry<'articles'>[] = [];
  const push = (entry?: CollectionEntry<'articles'>) => {
    if (!entry || entry.id === excludeId || out.some((o) => o.id === entry.id)) return;
    if (out.length < limit) out.push(entry);
  };

  for (const p of picked) push(byId.get(p.id));
  if (subject) for (const a of all) if (a.data.subjects.some((s) => s.id === subject)) push(a);
  if (category) for (const a of all) if (a.data.category === category) push(a);
  for (const a of all) push(a);
  return out;
}

/** Resources belonging to one subject, optionally filtered by category. */
export async function resourcesForSubject(subjectId: string, resourceType?: string) {
  const all = (await getCollection('resources')).filter(isPublishedResource);
  return all
    .filter((r) => r.data.subject.id === subjectId && (!resourceType || r.data.resourceType === resourceType))
    .sort((a, b) => (a.data.order ?? 999) - (b.data.order ?? 999));
}

/** Previous / next within the same topic, by `order`. */
export async function topicSiblings(entry: CollectionEntry<'resources'>) {
  if (!entry.data.topic) return { prev: null, next: null };
  const siblings = (await getCollection('resources'))
    .filter((r) => isPublishedResource(r) && r.data.topic === entry.data.topic)
    .sort((a, b) => (a.data.order ?? 999) - (b.data.order ?? 999));
  const i = siblings.findIndex((r) => r.id === entry.id);
  return {
    prev: i > 0 ? siblings[i - 1] : null,
    next: i >= 0 && i < siblings.length - 1 ? siblings[i + 1] : null,
  };
}

/** Published articles by one author, most recent first. */
export async function articlesByAuthor(authorId: string) {
  const all = (await getCollection('articles')).filter(isPublishedArticle);
  return all
    .filter((a) => a.data.author.id === authorId)
    .sort((a, b) => b.data.publishedDate.valueOf() - a.data.publishedDate.valueOf());
}

/** Published resources authored by one author, most recent first. */
export async function resourcesByAuthor(authorId: string) {
  const all = (await getCollection('resources')).filter(isPublishedResource);
  return all
    .filter((r) => r.data.author?.id === authorId)
    .sort((a, b) => b.data.publishedDate.valueOf() - a.data.publishedDate.valueOf());
}
