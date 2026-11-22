import { getCollection, type CollectionEntry } from 'astro:content';
import { allResourceEntries } from './collections';
import { sameCourse } from '../academic/combination-resources';
import { PAGE_TWO_RESOURCES } from '../../data/search-boost';

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
 * D-501 -- shared, build-cached views of the published resources (see
 * allResourceEntries() in collections.ts). A resource page used to re-read the
 * collection, filter it, and sort it by id on every call; that per-page work
 * grew with the collection and dominated the build. These views are made once:
 * the published list, an id map, and per-subject lists in collection order
 * and in id order.
 * sameCourse() requires the same subject, so filtering a subject's list gives
 * exactly the same course list, in the same order, as filtering everything.
 */
interface PublishedViews {
  published: CollectionEntry<'resources'>[];
  byId: Map<string, CollectionEntry<'resources'>>;
  bySubject: Map<string, CollectionEntry<'resources'>[]>;
  bySubjectSorted: Map<string, CollectionEntry<'resources'>[]>;
}
let views: Promise<PublishedViews> | undefined;
async function buildViews(): Promise<PublishedViews> {
  const published = (await allResourceEntries()).filter(isPublishedResource);
  const byId = new Map(published.map((r) => [r.id, r]));
  const group = (list: readonly CollectionEntry<'resources'>[]) => {
    const m = new Map<string, CollectionEntry<'resources'>[]>();
    for (const r of list) {
      const l = m.get(r.data.subject.id) ?? [];
      l.push(r);
      m.set(r.data.subject.id, l);
    }
    return m;
  };
  const bySubject = group(published);
  const bySubjectSorted = group([...published].sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0)));
  return { published, byId, bySubject, bySubjectSorted };
}
const publishedViews = (): Promise<PublishedViews> => (import.meta.env.DEV ? buildViews() : (views ??= buildViews()));

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
  opts: {
    subject?: string; level?: string; topic?: string; boards?: readonly string[]; picked?: readonly { id: string }[]; excludeId?: string; limit?: number;
    /**
     * Navigation round (6 Oct 2026) -- when set (a resource page passes
     * itself), derived picks are limited to resources of the same course
     * (sameCourse(): subject, board, qualification and declared syllabus
     * codes overlap), so "Related resources" never sends a student to
     * another board's or qualification's material. Hand-picked relations
     * are still honoured.
     */
    sameCourseAs?: CollectionEntry<'resources'>;
  },
): Promise<CollectionEntry<'resources'>[]> {
  const { subject, level, topic, boards, picked = [], excludeId, limit = 3, sameCourseAs } = opts;
  const { published, byId, bySubjectSorted } = await publishedViews();
  // Course pages come from the subject's id-ordered list, so they are already sorted.
  const eligible = sameCourseAs
    ? (bySubjectSorted.get(sameCourseAs.data.subject.id) ?? []).filter((r) => sameCourse(sameCourseAs, r))
    : published;
  /**
   * D-322 -- spread related links evenly. Each tier used to be walked in
   * collection order, so every page on a subject picked the same first
   * few resources and most resources were linked from no sibling at all
   * (256 of the 661 "Discovered - currently not indexed" resources had no
   * link from any page Google already shows). When the caller is a
   * resource page (excludeId set), each tier is now walked starting just
   * after that page in slug order and wrapping round, so the picks are
   * still the same topic > subject > level tiers, but neighbouring pages
   * link to each other in a ring and every resource is linked by its
   * nearest siblings. Callers without excludeId keep the old order.
   */
  const sortedIds = excludeId && !sameCourseAs ? [...eligible].sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0)) : eligible;
  const start = excludeId ? sortedIds.findIndex((r) => r.id === excludeId) : -1;
  const all = start >= 0 ? [...sortedIds.slice(start + 1), ...sortedIds.slice(0, start + 1)] : sortedIds;

  const out: CollectionEntry<'resources'>[] = [];
  const push = (entry?: CollectionEntry<'resources'>) => {
    if (!entry || entry.id === excludeId || out.some((o) => o.id === entry.id)) return;
    if (out.length < limit) out.push(entry);
  };
  const sharesBoard = (r: CollectionEntry<'resources'>) =>
    !boards || boards.length === 0 || r.data.boards.some((b) => boards.includes(b));

  for (const p of picked) push(byId.get(p.id));
  // D-404 -- at most one slot for a same-course page stuck on Google's page 2
  // (src/data/search-boost.ts). When a course has several, a stable hash of
  // this page's id picks one, so the links are shared out evenly rather than
  // all going to whichever comes first in ring order.
  if (sameCourseAs && excludeId) {
    const boosted = sortedIds.filter((r) => r.id !== excludeId && PAGE_TWO_RESOURCES.has(r.id));
    if (boosted.length > 0) {
      let h = 0;
      for (const ch of excludeId) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
      push(boosted[h % boosted.length]);
    }
  }
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

/**
 * Nov 2026 SEO audit (A9) -- the last line used to push any article at all, so
 * "A Level tuition in Dubai" turned up under O Level Islamiyat and IGCSE
 * Chemistry. Now only a hand-picked article, or one that shares the page's
 * subject (or, for an article page, its category) AND whose levels do not
 * contradict the page's, is returned; with no real match the list is empty and
 * the page shows no "Related articles" block. An article that names no level is
 * treated as level-neutral.
 */
export async function relatedArticles(
  opts: { subject?: string; category?: string; levels?: readonly string[]; picked?: readonly { id: string }[]; excludeId?: string; limit?: number },
): Promise<CollectionEntry<'articles'>[]> {
  const { subject, category, levels = [], picked = [], excludeId, limit = 3 } = opts;
  const all = (await getCollection('articles')).filter(isPublishedArticle);
  const byId = new Map(all.map((a) => [a.id, a]));
  const levelOk = (a: CollectionEntry<'articles'>) =>
    levels.length === 0 || a.data.levels.length === 0 || a.data.levels.some((l) => levels.includes(l));

  const out: CollectionEntry<'articles'>[] = [];
  const push = (entry?: CollectionEntry<'articles'>) => {
    if (!entry || entry.id === excludeId || out.some((o) => o.id === entry.id)) return;
    if (out.length < limit) out.push(entry);
  };

  for (const p of picked) push(byId.get(p.id));
  if (subject) for (const a of all) if (a.data.subjects.some((s) => s.id === subject) && levelOk(a)) push(a);
  if (category) for (const a of all) if (a.data.category === category && levelOk(a)) push(a);
  return out;
}

/** Resources belonging to one subject, optionally filtered by category. */
export async function resourcesForSubject(subjectId: string, resourceType?: string) {
  const { published: all } = await publishedViews();
  return all
    .filter((r) => r.data.subject.id === subjectId && (!resourceType || r.data.resourceType === resourceType))
    .sort((a, b) => (a.data.order ?? 999) - (b.data.order ?? 999));
}

/**
 * Previous / next within the same topic, by `order`.
 * Navigation round (6 Oct 2026): and within the same course. Topic names are
 * shared across boards ("Organic chemistry", "Waves", "Number"), so matching
 * on the name alone chained AQA, Edexcel and Cambridge pages together.
 */
export async function topicSiblings(entry: CollectionEntry<'resources'>) {
  if (!entry.data.topic) return { prev: null, next: null };
  // Collection order (not id order), so ties on `order` resolve as before.
  const { bySubject } = await publishedViews();
  const siblings = (bySubject.get(entry.data.subject.id) ?? [])
    .filter((r) => r.data.topic === entry.data.topic && sameCourse(entry, r))
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
  const { published: all } = await publishedViews();
  return all
    .filter((r) => r.data.author?.id === authorId)
    .sort((a, b) => b.data.publishedDate.valueOf() - a.data.publishedDate.valueOf());
}
