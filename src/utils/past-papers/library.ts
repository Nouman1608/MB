/**
 * Past-paper library (D-TBD, 15 Nov 2026) -- what is generated, and from what.
 *
 * Every page, link and count for the library comes from the functions in this
 * file, and each of them is a pure function of the manifest entries. With no
 * entries they return nothing: no index path, no course path, no link on a
 * course page. That is how an empty manifest produces no page, no section
 * and no sitemap URL (the sitemap is built from the pages that exist), and
 * scripts/test-past-paper-library.mjs proves it without a build.
 *
 * A listing attaches to a course by the identity the site already has: the
 * board, qualification and subject of an active combination in the academic
 * matrix, and one of that course's syllabus codes.
 */
import { activeOnly, academicHubPath, type Combination } from '../academic/index.ts';
import { DOCUMENT_TYPES, SESSIONS, type DocumentType, type SessionKey } from '../../data/past-papers/config.ts';
import type { PastPaperEntry } from '../../data/past-papers/types.ts';
import { loadLibrary } from './manifest.ts';

export const PAST_PAPERS_INDEX_PATH = '/past-papers/';

type CourseKey = Pick<Combination, 'boardSlug' | 'qualificationSlug' | 'subjectSlug'>;

/** A course's listing page. Only ever linked for a course that has entries. */
export const pastPapersCoursePath = (c: CourseKey): string =>
  `/past-papers/${c.boardSlug}/${c.qualificationSlug}/${c.subjectSlug}/`;

const courseKey = (c: CourseKey): string => `${c.boardSlug}/${c.qualificationSlug}/${c.subjectSlug}`;

/** One course that has at least one hosted document. */
export interface LibraryCourse {
  readonly combination: Combination;
  readonly path: string;
  readonly hubPath: string;
  readonly entries: readonly PastPaperEntry[];
  /** The syllabus codes its entries carry, sorted. */
  readonly codes: readonly string[];
  readonly firstYear: number;
  readonly lastYear: number;
}

/**
 * The courses that have entries, in the matrix's own order. A course with no
 * entry is not in the list, so nothing is generated for it.
 */
const coursesCache = new WeakMap<readonly PastPaperEntry[], LibraryCourse[]>();
export function libraryCourses(entries: readonly PastPaperEntry[] = loadLibrary()): LibraryCourse[] {
  if (entries.length === 0) return [];
  const hit = coursesCache.get(entries);
  if (hit) return hit;
  const byCourse = new Map<string, PastPaperEntry[]>();
  for (const e of entries) {
    const key = `${e.board}/${e.qualification}/${e.subject}`;
    const list = byCourse.get(key);
    if (list) list.push(e);
    else byCourse.set(key, [e]);
  }
  const courses = activeOnly().flatMap((combination): LibraryCourse[] => {
    const own = byCourse.get(courseKey(combination));
    if (!own) return [];
    const years = own.map((e) => e.year);
    return [{
      combination,
      path: pastPapersCoursePath(combination),
      hubPath: academicHubPath(combination),
      entries: own,
      codes: [...new Set(own.map((e) => e.syllabusCode))].sort(),
      firstYear: years.reduce((a, b) => Math.min(a, b)),
      lastYear: years.reduce((a, b) => Math.max(a, b)),
    }];
  });
  coursesCache.set(entries, courses);
  return courses;
}

/** One course's library, or undefined when it has no entries. */
export const courseLibrary = (c: CourseKey, entries: readonly PastPaperEntry[] = loadLibrary()): LibraryCourse | undefined =>
  libraryCourses(entries).find((x) => courseKey(x.combination) === courseKey(c));

/** getStaticPaths for /past-papers/: the index exists only when a course has entries. */
export function indexStaticPaths(entries: readonly PastPaperEntry[] = loadLibrary()): { params: { root: undefined } }[] {
  return libraryCourses(entries).length > 0 ? [{ params: { root: undefined } }] : [];
}

/** getStaticPaths for /past-papers/<board>/<qualification>/<subject>/: one page per course with entries. */
export function courseStaticPaths(entries: readonly PastPaperEntry[] = loadLibrary()) {
  return libraryCourses(entries).map((course) => ({
    params: { board: course.combination.boardSlug, qualification: course.combination.qualificationSlug, subject: course.combination.subjectSlug },
    props: { course },
  }));
}

/** Every URL path the library generates. Empty for an empty manifest. */
export function libraryPaths(entries: readonly PastPaperEntry[] = loadLibrary()): string[] {
  const courses = libraryCourses(entries);
  return courses.length > 0 ? [PAST_PAPERS_INDEX_PATH, ...courses.map((c) => c.path)] : [];
}

// ---- wording ---------------------------------------------------------------

/** "Cambridge IGCSE", or the IB qualification name alone (it already names the IB). */
export const boardQualification = (c: Combination): string =>
  c.qualification.startsWith('IB ') ? c.qualification : `${c.board} ${c.qualification}`;

/** "Cambridge IGCSE Chemistry (0620)": the course and the codes its entries carry. */
export const courseLabel = (course: LibraryCourse): string =>
  `${boardQualification(course.combination)} ${course.combination.subject} (${course.codes.join(', ')})`;

export const yearRange = (course: Pick<LibraryCourse, 'firstYear' | 'lastYear'>): string =>
  course.firstYear === course.lastYear ? `${course.firstYear}` : `${course.firstYear} to ${course.lastYear}`;

export const countLabel = (n: number): string => `${n} ${n === 1 ? 'document' : 'documents'}`;

/** A document type's name for one board ("Grade thresholds" at Cambridge, "Grade boundaries" elsewhere). */
export function documentLabel(type: DocumentType, board: string): { label: string; plural: string } {
  const info = DOCUMENT_TYPES[type];
  const own = 'labelByBoard' in info ? (info.labelByBoard as Record<string, { label: string; plural: string } | undefined>)[board] : undefined;
  return own ?? { label: info.label, plural: info.plural };
}

/** "question papers, mark schemes and examiner reports": the kinds of document a course actually has. */
export function documentKinds(course: LibraryCourse): string {
  const present = (Object.keys(DOCUMENT_TYPES) as DocumentType[])
    .filter((t) => course.entries.some((e) => e.type === t))
    .sort((a, b) => DOCUMENT_TYPES[a].order - DOCUMENT_TYPES[b].order)
    .map((t) => documentLabel(t, course.combination.boardSlug).plural);
  return present.length <= 1 ? present.join('') : `${present.slice(0, -1).join(', ')} and ${present[present.length - 1]}`;
}

/** "June 2024"; a specimen paper belongs to no session. */
export const sessionLabel = (session: SessionKey, year: number): string =>
  session === 'specimen' ? `${SESSIONS.specimen.label}, ${year}` : `${SESSIONS[session].label} ${year}`;

/** "PDF", from the file's extension. */
export const fileFormat = (file: string): string => file.slice(file.lastIndexOf('.') + 1).toUpperCase();

/**
 * The link from a course page to its library page, or undefined when the
 * course has no entries (the course page then shows nothing new).
 */
export function hubLibraryLink(c: CourseKey, entries: readonly PastPaperEntry[] = loadLibrary()): { href: string; label: string; detail: string } | undefined {
  const course = courseLibrary(c, entries);
  if (!course) return undefined;
  return {
    href: course.path,
    label: 'Past papers',
    detail: `${countLabel(course.entries.length)} published by ${course.combination.board}, ${yearRange(course)}`,
  };
}

// ---- the listing -----------------------------------------------------------

export interface ListedDocument {
  readonly type: DocumentType;
  /** What the document is, e.g. "Question paper". */
  readonly label: string;
  readonly href: string;
  /** "PDF". */
  readonly format: string;
  /** The link's full name for assistive technology: what it is, of which paper, session and course. */
  readonly accessibleName: string;
}

export interface ListedPaper {
  /** "Paper 4, variant 2"; "Whole series" for documents that name no paper. */
  readonly label: string;
  readonly documents: readonly ListedDocument[];
}

export interface ListedSession {
  readonly session: SessionKey;
  /** "June 2024". */
  readonly label: string;
  /** Fragment id, e.g. "june-2024". */
  readonly anchor: string;
  readonly papers: readonly ListedPaper[];
  readonly count: number;
}

export interface ListedYear {
  readonly year: number;
  /** Fragment id, e.g. "y2024". */
  readonly anchor: string;
  readonly sessions: readonly ListedSession[];
  readonly count: number;
}

/** Label for the row of documents that cover a whole series (no paper named). */
export const WHOLE_SERIES_LABEL = 'Whole series';

const naturalCompare = (a: string, b: string): number => a.localeCompare(b, 'en', { numeric: true });

/**
 * One course's documents by year and session: newest year first, the latest
 * session of a year first (specimen papers last), then by paper and variant.
 * Where a course's entries carry more than one syllabus code, each paper is
 * labelled with its code.
 */
export function courseListing(course: LibraryCourse): ListedYear[] {
  const board = course.combination.boardSlug;
  const name = courseLabel(course);
  const showCode = course.codes.length > 1;
  const years = [...new Set(course.entries.map((e) => e.year))].sort((a, b) => b - a);

  return years.map((year): ListedYear => {
    const ofYear = course.entries.filter((e) => e.year === year);
    const sessionKeys = [...new Set(ofYear.map((e) => e.session))].sort((a, b) => {
      if (a === 'specimen' || b === 'specimen') return a === b ? 0 : a === 'specimen' ? 1 : -1;
      return SESSIONS[b].order - SESSIONS[a].order;
    });
    const sessions = sessionKeys.map((session): ListedSession => {
      const ofSession = ofYear.filter((e) => e.session === session);
      const label = sessionLabel(session, year);
      const rowKey = (e: PastPaperEntry) => [e.syllabusCode, e.paper ?? '', e.variant ?? ''].join('|');
      const rows = [...new Set(ofSession.map(rowKey))].map((key) => ofSession.filter((e) => rowKey(e) === key));
      rows.sort((a, b) => {
        const [x, y] = [a[0], b[0]];
        // Papers first, in order; documents for the whole series after them.
        if ((x.paper === undefined) !== (y.paper === undefined)) return x.paper === undefined ? 1 : -1;
        return naturalCompare(x.syllabusCode, y.syllabusCode) || naturalCompare(x.paper ?? '', y.paper ?? '') || naturalCompare(x.variant ?? '', y.variant ?? '');
      });
      const papers = rows.map((row): ListedPaper => {
        const first = row[0];
        const paperLabel = first.paper === undefined
          ? WHOLE_SERIES_LABEL
          : `${first.componentWord} ${first.paper}${first.variant !== undefined ? `, variant ${first.variant}` : ''}`;
        const rowLabel = showCode ? `${first.syllabusCode}: ${paperLabel}` : paperLabel;
        const documents = [...row]
          .sort((a, b) => DOCUMENT_TYPES[a.type].order - DOCUMENT_TYPES[b.type].order)
          .map((e): ListedDocument => {
            const docLabel = documentLabel(e.type, board).label;
            const format = fileFormat(e.file);
            return {
              type: e.type,
              label: docLabel,
              href: e.file,
              format,
              accessibleName: `${docLabel} (${format}), ${rowLabel}, ${label}, ${name}`,
            };
          });
        return { label: rowLabel, documents };
      });
      return {
        session,
        label,
        anchor: session === 'specimen' ? `specimen-${year}` : `${session}-${year}`,
        papers,
        count: ofSession.length,
      };
    });
    return { year, anchor: `y${year}`, sessions, count: ofYear.length };
  });
}
