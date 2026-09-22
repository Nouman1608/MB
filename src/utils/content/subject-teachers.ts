/**
 * D-283 -- named subject teachers on resource pages.
 *
 * 1,250 of 1,645 resources carry the organisational "Marlbridge Academic
 * Team" byline. Rewriting those bylines to individual teachers would claim
 * authorship nobody can stand behind (see D-134, which rescinded a
 * non-attributed review claim for the same reason). What IS true and
 * verifiable is who teaches the subject: every teacher profile has a sourced
 * `subjectsTaught` list. So resource pages now show the real teachers of that
 * subject, labelled as teachers -- never as author or reviewer -- and the
 * byline and Article schema are left exactly as they were.
 *
 * Matching is by subject name, normalised: case-insensitive, "Studies"
 * dropped, and a profile entry like "Islamiyat / Pakistan Studies" counts for
 * each part. IB-only subjects (e.g. "Language B") match nobody, so they show
 * no block rather than a guessed teacher.
 */
import type { CollectionEntry } from 'astro:content';
import { getAuthors } from './collections';

const normalise = (s: string) =>
  s.toLowerCase().replace(/\bstudies\b/g, '').replace(/[^a-z]+/g, ' ').trim();

export function teacherMatchesSubject(subjectsTaught: readonly string[], subjectTitle: string): boolean {
  const target = normalise(subjectTitle);
  if (!target) return false;
  return subjectsTaught.some((entry) => entry.split('/').some((part) => normalise(part) === target));
}

let cache: CollectionEntry<'authors'>[] | undefined;

/** Published person profiles teaching this subject, most experienced first. */
export async function teachersForSubjectTitle(subjectTitle: string | undefined, limit = 4): Promise<CollectionEntry<'authors'>[]> {
  if (!subjectTitle) return [];
  cache ??= (await getAuthors()).filter((a) => a.data.entityType === 'person');
  return cache
    .filter((a) => teacherMatchesSubject(a.data.subjectsTaught, subjectTitle))
    .sort((a, b) => (b.data.yearsExperience ?? 0) - (a.data.yearsExperience ?? 0) || a.data.name.localeCompare(b.data.name))
    .slice(0, limit);
}
