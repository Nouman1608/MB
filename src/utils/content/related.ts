import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Merges hand-picked relations with derived ones (same subject, level or topic),
 * de-duplicates, excludes self, caps the list. Editors curate only where it adds value.
 */
export async function relatedResources(
  opts: { subject?: string; level?: string; topic?: string; picked?: readonly { id: string }[]; excludeId?: string; limit?: number },
): Promise<CollectionEntry<'resources'>[]> {
  const { subject, level, topic, picked = [], excludeId, limit = 3 } = opts;
  const all = await getCollection('resources');
  const byId = new Map(all.map((r) => [r.id, r]));

  const out: CollectionEntry<'resources'>[] = [];
  const push = (entry?: CollectionEntry<'resources'>) => {
    if (!entry || entry.id === excludeId || out.some((o) => o.id === entry.id)) return;
    if (out.length < limit) out.push(entry);
  };

  for (const p of picked) push(byId.get(p.id));
  if (topic) for (const r of all) if (r.data.topic === topic) push(r);
  if (subject) for (const r of all) if (r.data.subject.id === subject) push(r);
  if (level) for (const r of all) if (r.data.level.includes(level as never)) push(r);
  return out;
}

export async function relatedArticles(
  opts: { subject?: string; category?: string; picked?: readonly { id: string }[]; excludeId?: string; limit?: number },
): Promise<CollectionEntry<'articles'>[]> {
  const { subject, category, picked = [], excludeId, limit = 3 } = opts;
  const all = (await getCollection('articles')).filter((a) => !a.data.draft);
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
  const all = await getCollection('resources');
  return all
    .filter((r) => r.data.subject.id === subjectId && (!resourceType || r.data.resourceType === resourceType))
    .sort((a, b) => (a.data.order ?? 999) - (b.data.order ?? 999));
}

/** Previous / next within the same topic, by `order`. */
export async function topicSiblings(entry: CollectionEntry<'resources'>) {
  if (!entry.data.topic) return { prev: null, next: null };
  const siblings = (await getCollection('resources'))
    .filter((r) => r.data.topic === entry.data.topic)
    .sort((a, b) => (a.data.order ?? 999) - (b.data.order ?? 999));
  const i = siblings.findIndex((r) => r.id === entry.id);
  return {
    prev: i > 0 ? siblings[i - 1] : null,
    next: i >= 0 && i < siblings.length - 1 ? siblings[i + 1] : null,
  };
}

/** Published articles by one author, most recent first. */
export async function articlesByAuthor(authorId: string) {
  const all = (await getCollection('articles')).filter((a) => !a.data.draft);
  return all
    .filter((a) => a.data.author.id === authorId)
    .sort((a, b) => b.data.publishedDate.valueOf() - a.data.publishedDate.valueOf());
}

/** Published resources authored by one author, most recent first. */
export async function resourcesByAuthor(authorId: string) {
  const all = await getCollection('resources');
  return all
    .filter((r) => r.data.author?.id === authorId)
    .sort((a, b) => b.data.publishedDate.valueOf() - a.data.publishedDate.valueOf());
}
