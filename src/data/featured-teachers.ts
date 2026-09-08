/**
 * Pinned teacher ordering (2026-09-08, D-151).
 *
 * Owner instruction: Nouman Ahmed, Salman Ahmad and Hina Mogul appear first
 * in every public teacher listing on the site, in that order.
 *
 * WHY THIS LIVES IN ONE FILE. Teachers are listed in three places, each with
 * a different natural sort: the homepage band (by recorded experience), the
 * /tutoring/ grid (alphabetical), and the "Who teaches X" block on each
 * programme page (by experience, filtered to that qualification's subjects).
 * Hard-coding the pin into three components would let them drift, and a
 * future contributor changing one sort would silently break the rule in the
 * other two. All three now call `sortPinnedFirst` instead.
 *
 * WHAT THE PIN DOES AND DOES NOT DO. It only reorders people who are ALREADY
 * eligible for a given list. It never inserts anyone: on a programme page,
 * ProgramTeachers still only shows teachers whose own `subjectsTaught`
 * matches an ACTIVE matrix subject for that qualification, so pinning cannot
 * put Nouman Ahmed (Chemistry) in front of an Economics-only programme, or
 * imply anyone teaches a subject they do not. A pinned teacher who is not
 * eligible simply does not appear, exactly as before.
 *
 * These are author-collection slugs, checked against src/content/authors/.
 * If a slug here stops matching a real author, the pin silently no-ops for
 * that person AT RUNTIME rather than throwing — a broken pin should never
 * take a page down. The build is a different matter: `npm run
 * validate:pinned-teachers` (wired into `validate:academic`) FAILS on a slug
 * that has no author file, is not a person, or is unpublished, so a typo or
 * a renamed author is caught before shipping instead of quietly dropping the
 * owner's instruction.
 */
export const PINNED_TEACHER_SLUGS: readonly string[] = [
  'nouman-ahmed',
  'salman-ahmad',
  'hina-mogul',
] as const;

/** Rank: 0,1,2… for pinned teachers in listed order; Infinity for everyone else. */
export const pinRank = (slug: string): number => {
  const i = PINNED_TEACHER_SLUGS.indexOf(slug);
  return i === -1 ? Number.POSITIVE_INFINITY : i;
};

/**
 * Sort pinned teachers to the front, preserving the caller's own ordering
 * for everyone else. `compare` is the list's existing secondary sort.
 */
export const sortPinnedFirst = <T extends { id: string }>(
  entries: readonly T[],
  compare: (a: T, b: T) => number,
): T[] =>
  [...entries].sort((a, b) => {
    const rank = pinRank(a.id) - pinRank(b.id);
    if (Number.isNaN(rank)) return compare(a, b); // Infinity - Infinity
    if (rank !== 0) return rank;
    return compare(a, b);
  });
