/**
 * Past-paper library (D-TBD) -- the shape of a course file and of the
 * entries built from it. See docs/past-papers/README.md for a worked example.
 */
import type { BoardSlug } from '../academic/boards.ts';
import type { QualificationSlug } from '../academic/qualifications.ts';
import type { ComponentWord, DocumentType, SessionKey } from './config.ts';

/** One line of a course file's `files` list: one hosted document. */
export interface PastPaperFileInput {
  /** The series year, e.g. 2024. For a specimen paper, the year printed on it. */
  year: number;
  /** A key of SESSIONS that BOARD_SESSIONS allows for the board, e.g. "june". */
  session: SessionKey;
  /**
   * The paper, unit or component as the board prints it: "4" (Cambridge
   * Paper 4), "1H" (AQA Paper 1 Higher), "WCH11/01" (a Pearson unit).
   * Required for a question paper, mark scheme or insert. Leave out for a
   * document that covers the whole series.
   */
  paper?: string;
  /** The variant, where the board uses one: "2" for Cambridge component 42. */
  variant?: string;
  /** A key of DOCUMENT_TYPES, e.g. "question-paper", "mark-scheme". */
  type: DocumentType;
  /** A path under public/papers/ ("/papers/...") or an https URL on an allow-listed host. */
  file: string;
  /** Only where this one document is hosted on a different basis from the rest. */
  rightsNote?: string;
}

/**
 * One course file: src/data/past-papers/courses/<board>-<qualification>-<subject>-<code>.json.
 * The four identity fields are the slugs and the syllabus code the course
 * already has on this site (src/data/academic/).
 */
export interface PastPaperCourseFile {
  board: BoardSlug;
  qualification: QualificationSlug;
  subject: string;
  syllabusCode: string;
  /** "Paper" unless the board calls this course's papers units or components. */
  componentWord?: ComponentWord;
  /** Replaces the board's note in PAST_PAPER_RIGHTS_NOTES for this course. */
  rightsNote?: string;
  files: PastPaperFileInput[];
}

/** A course file as read from disk, before it has been checked. */
export interface RawCourseFile {
  /** File name within the courses folder, for messages. */
  readonly source: string;
  /** The parsed JSON, or undefined when the file is not valid JSON. */
  readonly data: unknown;
  /** Why the file could not be parsed. */
  readonly parseError?: string;
}

/** One hosted document with its full identity: what every listing is built from. */
export interface PastPaperEntry {
  readonly board: BoardSlug;
  readonly qualification: QualificationSlug;
  readonly subject: string;
  readonly syllabusCode: string;
  readonly year: number;
  readonly session: SessionKey;
  readonly paper?: string;
  readonly variant?: string;
  readonly type: DocumentType;
  readonly file: string;
  /** The basis on which the owner hosts it: the entry's, the course file's or the board's note. */
  readonly rightsNote: string;
  readonly componentWord: ComponentWord;
  /** "<course file>#<position in files, from 1>", for messages. */
  readonly source: string;
}
