/**
 * Search titles for resource pages (/resources/<slug>/).
 *
 * Most resource titles already name their course ("Cambridge IGCSE Physics
 * (0625): Forces -- Practice Questions"). Some of the older ones do not:
 * "Electric Fields" and "Polymers: Revision Notes" read the same for every
 * board that teaches the topic. This adds the course to those titles for
 * the HTML <title>, Open Graph, Twitter and WebPage name only. The visible
 * heading on the page stays the authored `title`.
 *
 * Order of precedence:
 *   1. `seoTitle` in the page's front matter (the editorial override).
 *   2. The authored title, unchanged, when it already names its exam board
 *      or its syllabus code.
 *   3. The authored title plus the board and code in brackets, when it
 *      names the qualification but not the board ("AS Chemistry: Group 2").
 *   4. Topic, course and resource type, when it names none of them.
 *
 * The course comes from the resource's own `boards`, `qualifications`,
 * `subject` and `syllabusCodes`, matched against the published course
 * matrix. Nothing is read from the URL slug, and a resource that matches no
 * published course keeps its authored title. A resource mapped to two
 * courses names both ("Cambridge IGCSE and O Level Chemistry").
 *
 * Framework-free (no astro:content import) so the page template, the unit
 * tests and scripts/validate-resource-titles.mjs all call the same function.
 */
import { MATRIX, type Combination } from '../../data/academic/matrix.ts';
import { BOARDS } from '../../data/academic/boards.ts';
import { QUALIFICATIONS } from '../../data/academic/qualifications.ts';
import { SUBJECTS } from '../../data/academic/subjects.ts';
import { SYLLABUSES } from '../../data/academic/syllabuses.ts';

/** Preferred length of a generated title. Longer ones are kept whole, never cut. */
export const RESOURCE_TITLE_TARGET = 60;

export interface TitleCourse {
  board: string;
  qualification: string;
  subject: string;
  /** The course's syllabus code, only when the resource itself declares it. */
  code?: string;
}

export interface ResourceTitleInput {
  title: string;
  seoTitle?: string;
  resourceType: string;
  /** The `subjects` collection id the resource is filed under. */
  subject: string;
  boards: readonly string[];
  qualifications: readonly string[];
  syllabusCodes: readonly string[];
}

const TYPE_LABEL: Record<string, string> = {
  'study-guides': 'Study Guide',
  'revision-notes': 'Revision Notes',
  'practice-questions': 'Practice Questions',
  'exam-preparation': 'Exam Preparation',
  'subject-guides': 'Subject Guide',
  'past-papers': 'Past Papers',
};

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const mentions = (text: string, words: readonly string[], flags = 'i') =>
  words.some((w) => new RegExp(`(^|[^A-Za-z0-9])${escape(w)}([^A-Za-z0-9]|$)`, flags).test(text));

const BOARD_WORDS = BOARDS.flatMap((b) => [b.name, ...b.aliases]);
/** "AS" and "DP" are matched with their capitals, so "as" in a sentence is not a qualification. */
const QUALIFICATION_WORDS = QUALIFICATIONS.flatMap((q) => [q.name, ...q.aliases]).filter((w) => w.length > 3);
const QUALIFICATION_ABBREVIATIONS = ['AS', 'A2', 'IAL', 'DP', 'MYP', 'A-level', 'AS-level', 'O-level'];

/** A real syllabus code ("9702", "4PH1", "H432"), not an IB course label ("DP Physics"). */
const isCode = (code: string) => /^[A-Z0-9]{3,6}$/i.test(code);

const hubOf = new Map(SUBJECTS.map((s) => [s.slug, s.hubId ?? s.slug]));
const publishable = (c: Combination) => c.boardOfferingStatus === 'ACTIVE' && c.marlbridgeStatus === 'ACTIVE';

/**
 * The published courses a resource is mapped to. A course is included only
 * when the matrix has that board + qualification for the resource's subject;
 * where the subject page covers several syllabuses of one board and
 * qualification, the resource's own syllabus codes decide which.
 */
export function coursesForResource(r: Pick<ResourceTitleInput, 'subject' | 'boards' | 'qualifications' | 'syllabusCodes'>): TitleCourse[] {
  const candidates = MATRIX.filter(
    (c) => publishable(c) && r.boards.includes(c.boardSlug) && r.qualifications.includes(c.qualificationSlug) && hubOf.get(c.subjectSlug) === r.subject,
  );
  const withCode = candidates.map((c) => {
    const records = SYLLABUSES.filter((s) => s.boardSlug === c.boardSlug && s.qualificationSlug === c.qualificationSlug && s.subjectSlug === c.subjectSlug);
    const declared = records.find((s) => r.syllabusCodes.includes(s.code));
    return { c, code: declared && isCode(declared.code) ? declared.code : undefined };
  });
  // Several syllabuses share one board + qualification under this subject page: keep the declared ones.
  const perPair = new Map<string, typeof withCode>();
  for (const x of withCode) {
    const key = `${x.c.boardSlug}/${x.c.qualificationSlug}`;
    perPair.set(key, [...(perPair.get(key) ?? []), x]);
  }
  const out: TitleCourse[] = [];
  for (const group of perPair.values()) {
    const declared = group.filter((x) => x.code);
    const chosen = declared.length > 0 ? declared : group.length === 1 ? group : [];
    for (const { c, code } of chosen) out.push({ board: c.board, qualification: c.qualification, subject: c.subject, code });
  }
  return out;
}

const joinAnd = (xs: readonly string[]) => (xs.length <= 1 ? xs.join('') : `${xs.slice(0, -1).join(', ')} and ${xs.at(-1)}`);
const unique = <T,>(xs: readonly T[]) => [...new Set(xs)];

/** "Cambridge IGCSE and O Level Chemistry"; an IB qualification already names its board. */
export function courseLabel(courses: readonly TitleCourse[]): string {
  const one = (c: TitleCourse) => (c.qualification.startsWith('IB ') ? `${c.qualification} ${c.subject}` : `${c.board} ${c.qualification} ${c.subject}`);
  const boards = unique(courses.map((c) => c.board));
  const subjects = unique(courses.map((c) => c.subject));
  if (boards.length === 1 && subjects.length === 1) {
    const quals = joinAnd(unique(courses.map((c) => c.qualification)));
    return quals.startsWith('IB ') ? `${quals} ${subjects[0]}` : `${boards[0]} ${quals} ${subjects[0]}`;
  }
  return joinAnd(unique(courses.map(one)));
}

const TYPE_SUFFIX = /\s*(?:--|[-–—:|])\s*(?:study guide|revision notes?|practice questions?|practice set|exam preparation)\s*$/i;

/**
 * Which generated title to use. `variants` is ordered from most to least
 * complete (course + code + type first, then with parts left out). The most
 * complete one within the target length wins; failing that, the most
 * complete within the soft limit; failing that, the shortest, used whole.
 */
export const RESOURCE_TITLE_SOFT_LIMIT = 72;
function pickVariant(variants: readonly string[]): string {
  return variants.find((v) => v.length <= RESOURCE_TITLE_TARGET)
    ?? variants.find((v) => v.length <= RESOURCE_TITLE_SOFT_LIMIT)
    ?? variants.reduce((a, b) => (b.length < a.length ? b : a));
}

export function resourceSearchTitle(r: ResourceTitleInput): string {
  if (r.seoTitle) return r.seoTitle;
  const title = r.title.trim();
  const codes = r.syllabusCodes.filter(isCode);
  if (mentions(title, BOARD_WORDS) || mentions(title, codes)) return title;

  const courses = coursesForResource(r);
  if (courses.length === 0) return title;
  const courseCodes = unique(courses.map((c) => c.code).filter((c): c is string => !!c));

  // Names the qualification but not the board: add the board (and code) at the end.
  if (mentions(title, QUALIFICATION_WORDS) || mentions(title, QUALIFICATION_ABBREVIATIONS, '')) {
    const boards = joinAnd(unique(courses.map((c) => (c.qualification.startsWith('IB ') ? 'IB' : c.board))));
    return pickVariant([
      ...(courseCodes.length > 0 ? [`${title} (${boards} ${courseCodes.join(', ')})`] : []),
      `${title} (${boards})`,
    ]);
  }

  // Names no course at all: topic, then course, then resource type.
  const hadType = TYPE_SUFFIX.test(title);
  const course = courseLabel(courses);
  let topic = hadType ? title.replace(TYPE_SUFFIX, '').trim() : title;
  // "ICT: Computer Systems" under "Cambridge IGCSE ICT": the subject is about to be named with its course.
  for (const subject of unique(courses.map((c) => c.subject))) {
    const rest = topic.match(new RegExp(`^${escape(subject)}:\\s+(.{3,})$`, 'i'))?.[1];
    if (rest) topic = rest;
  }
  const sep = topic.includes(': ') ? ', ' : ': ';
  const coded = courseCodes.length > 0 ? `${course} (${courseCodes.join(', ')})` : undefined;
  const type = TYPE_LABEL[r.resourceType];
  const withType = (c: string) => (type ? `${topic}${sep}${c} ${type}` : `${topic}${sep}${c}`);
  const plain = (c: string) => `${topic}${sep}${c}`;
  // A page whose authored title carried its type keeps it: that is what tells it from its sibling pages.
  const variants = hadType || r.resourceType !== 'study-guides'
    ? [...(coded ? [withType(coded)] : []), withType(course)]
    : [...(coded ? [withType(coded), plain(coded)] : []), withType(course), plain(course)];
  return pickVariant(variants);
}
