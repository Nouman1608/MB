/**
 * Past-paper library (D-463, 15 Nov 2026) -- settings.
 *
 * Owner decision, 15 Nov 2026: "I will take full responsibility of the
 * licensing; host the past papers." The site holds the listings; the owner
 * supplies every file. No paper, mark scheme or examiner report is added,
 * downloaded or transcribed by a working session, and no paper text is kept
 * in this repository.
 *
 * This file is the small set of values the owner may need to change. The
 * entries themselves are one JSON file per course in ./courses/ (see
 * docs/past-papers/README.md). Everything here is checked by
 * scripts/validate-past-papers.mjs.
 */
import type { BoardSlug } from '../academic/boards.ts';

/**
 * Hosts a file URL may point to. A file is either a path under
 * public/papers/ or an https URL on one of these hosts, which must be hosts
 * the owner controls. The list starts with the one host this repository
 * already serves its own files from (the images in resource pages); add
 * a host here once it exists, for example the subdomain of a storage
 * bucket for papers. Lower case, host name only: no scheme, path or port.
 */
export const PAST_PAPER_FILE_HOSTS: readonly string[] = [
  'img.marlbridge.com',
];

/** Folder under public/ for a file kept in the repository instead (start and end with "/"). */
export const PAST_PAPER_PUBLIC_PREFIX = '/papers/';

/**
 * The basis on which the owner hosts each board's documents, in the owner's
 * own words. REQUIRED before a board's first entry: the validator rejects an
 * entry whose board has no note here, unless the course file or the entry
 * carries its own `rightsNote`. It is a record kept with the manifest; it is
 * not printed on any page. (.gitignore describes this repository as public,
 * so anyone who can read the repository can read the note.)
 *
 * Deliberately empty. Only the owner can write these; nothing is drafted
 * for him.
 */
export const PAST_PAPER_RIGHTS_NOTES: Partial<Record<BoardSlug, string>> = {};

/** A rights note shorter than this cannot record a basis ("ok", "TBD"). */
export const RIGHTS_NOTE_MIN_LENGTH = 20;

/**
 * Document types. `label` is what the link says and `plural` is the same
 * name in a sentence; `labelByBoard` replaces both where a board uses another
 * name for the same document. `paper` says whether the entry must name a
 * paper ('required') or may cover the whole series ('optional': a Cambridge
 * examiner report covers every paper of a series, a Pearson one covers a
 * single paper). `extensions` are the file types accepted for that document.
 *
 * To list another kind of document (pre-release material, source files,
 * listening audio), add a line here with its own name and file type; no
 * template changes.
 *
 * Not listed on purpose: Cambridge "Confidential Instructions". D-111
 * records that those files are not opened or used; the validator also
 * rejects a file whose name carries Cambridge's "_ci_" marker. That line
 * stands until the owner decides otherwise in the decision log.
 */
export interface DocumentTypeInfo {
  readonly label: string;
  /** The same name for several, lower case, for sentences ("question papers"). */
  readonly plural: string;
  readonly labelByBoard?: Partial<Record<BoardSlug, { label: string; plural: string }>>;
  readonly paper: 'required' | 'optional';
  readonly extensions: readonly string[];
  /** Order of the links within one paper's row. */
  readonly order: number;
}
export const DOCUMENT_TYPES = {
  'question-paper': { label: 'Question paper', plural: 'question papers', paper: 'required', extensions: ['pdf'], order: 1 },
  'insert': { label: 'Insert', plural: 'inserts', paper: 'required', extensions: ['pdf'], order: 2 },
  'mark-scheme': { label: 'Mark scheme', plural: 'mark schemes', paper: 'required', extensions: ['pdf'], order: 3 },
  'examiner-report': { label: 'Examiner report', plural: 'examiner reports', paper: 'optional', extensions: ['pdf'], order: 4 },
  // Cambridge publishes "grade thresholds"; AQA, OCR, Pearson and OxfordAQA publish "grade boundaries".
  'grade-thresholds': {
    label: 'Grade boundaries', plural: 'grade boundaries',
    labelByBoard: { cambridge: { label: 'Grade thresholds', plural: 'grade thresholds' } },
    paper: 'optional', extensions: ['pdf'], order: 5,
  },
} as const satisfies Record<string, DocumentTypeInfo>;
export type DocumentType = keyof typeof DOCUMENT_TYPES;

/**
 * Exam sessions, named by month as this site's past-papers guides and
 * grade-threshold tables already name them ("June 2025", "November 2025").
 * `specimen` is for a specimen paper, which belongs to no session; its
 * `year` is the year printed on the document.
 */
export const SESSIONS = {
  january: { label: 'January', order: 1 },
  march: { label: 'March', order: 2 },
  june: { label: 'June', order: 3 },
  october: { label: 'October', order: 4 },
  november: { label: 'November', order: 5 },
  specimen: { label: 'Specimen papers', order: 6 },
} as const;
export type SessionKey = keyof typeof SESSIONS;

/**
 * The sessions each board's entries may use. Each list is the sessions this
 * repository's own pages already name for that board (Cambridge: the three
 * series in src/data/academic/exam-calendar.ts; the others: the series named
 * in their past-papers guides). Add a session for a board here if it runs
 * another one.
 *
 * The International Baccalaureate has none: the manifest has no field for
 * Higher and Standard Level or for time zones, and D-449 records that the IB
 * publishes no papers. An IB entry is rejected until that is designed.
 */
export const BOARD_SESSIONS: Record<BoardSlug, readonly SessionKey[]> = {
  cambridge: ['march', 'june', 'november', 'specimen'],
  edexcel: ['january', 'june', 'october', 'november', 'specimen'],
  aqa: ['june', 'november', 'specimen'],
  ocr: ['june', 'november', 'specimen'],
  oxfordaqa: ['january', 'june', 'november', 'specimen'],
  ib: [],
};

/** The word printed before a paper's identifier ("Paper 4", "Unit 1", "Component 01"). */
export const COMPONENT_WORDS = ['Paper', 'Unit', 'Component'] as const;
export type ComponentWord = (typeof COMPONENT_WORDS)[number];

/** Years a session entry may carry. A specimen may be dated ahead of its first exam. */
export const EARLIEST_YEAR = 1990;
export const SPECIMEN_YEARS_AHEAD = 5;
