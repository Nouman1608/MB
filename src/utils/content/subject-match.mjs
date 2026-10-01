/**
 * D-380 (audit I415) -- ONE subject matcher, used by both the public teacher
 * lists (subject-teachers.ts) and the reviewer-coverage rule [10] in
 * scripts/validate-review-integrity.mjs. Before this, the lists compared a
 * profile entry with the subject's display title as an ordered string while
 * rule [10] compared it with the slug as a word set, so "MYP Sciences"
 * passed the validator but never matched "Sciences (MYP)" on the site.
 *
 * Rule: split the profile entry on "/" (so "Islamiyat / Pakistan Studies"
 * counts for each part); a part matches when its set of words equals the
 * subject's set of words, ignoring case, punctuation and the word "Studies".
 * Order does not matter ("MYP Sciences" = "Sciences (MYP)" = myp-sciences);
 * every other word must match, so "English Literature" does not cover
 * English and "Language A: Literature" does not cover "Language A: Language
 * and Literature".
 */
const IGNORED = new Set(['studies']);

export function subjectWords(text) {
  return new Set(String(text).toLowerCase().split(/[^a-z0-9]+/).filter((w) => w && !IGNORED.has(w)));
}

/** `subject` may be a display title or a slug; both give the same words. */
export function subjectCovered(profileSubjects, subject) {
  const want = subjectWords(subject);
  if (want.size === 0) return false;
  return profileSubjects.some((entry) => String(entry).split('/').some((part) => {
    const have = subjectWords(part);
    return have.size === want.size && [...want].every((w) => have.has(w));
  }));
}
