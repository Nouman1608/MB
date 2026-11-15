/**
 * Past-paper library (D-463, 15 Nov 2026) -- reading and checking the manifest.
 *
 * The manifest is one JSON file per course in src/data/past-papers/courses/.
 * It is read from disk here (the same way utils/seo/word-count.ts reads
 * resource files), so that the Astro build and plain node scripts see the
 * same entries with no generated index to keep in step.
 *
 * checkManifest() is the one set of rules. It is called by
 * scripts/validate-past-papers.mjs, and again by loadLibrary() below, which
 * every page reads through: a listing can only ever be built from entries
 * that passed, whether or not the script ran first.
 *
 * Imports carry their .ts extension so node can load this file directly.
 */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { activeOnly } from '../academic/index.ts';
import { courseCodes } from '../academic/course-codes.ts';
import type { BoardSlug } from '../../data/academic/boards.ts';
import {
  BOARD_SESSIONS, COMPONENT_WORDS, DOCUMENT_TYPES, EARLIEST_YEAR, PAST_PAPER_FILE_HOSTS,
  PAST_PAPER_PUBLIC_PREFIX, PAST_PAPER_RIGHTS_NOTES, RIGHTS_NOTE_MIN_LENGTH, SESSIONS, SPECIMEN_YEARS_AHEAD,
  type ComponentWord, type DocumentType, type DocumentTypeInfo, type SessionKey,
} from '../../data/past-papers/config.ts';
import type { PastPaperEntry, RawCourseFile } from '../../data/past-papers/types.ts';

/** The manifest folder, relative to the project root. */
export const COURSES_DIR = 'src/data/past-papers/courses';

/** Files that may sit in the manifest folder without being a course file. */
const IGNORED_FILES = new Set(['.gitkeep']);

/**
 * Every file in a manifest folder, parsed. Nothing is skipped silently: a
 * file that is not a .json course file, or does not parse, comes back with a
 * `parseError` for checkManifest() to report.
 */
export function readCourseFiles(dir: string = resolve(process.cwd(), COURSES_DIR)): RawCourseFile[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((name) => !IGNORED_FILES.has(name))
    .sort()
    .map((name): RawCourseFile => {
      const full = join(dir, name);
      if (!statSync(full).isFile() || !name.endsWith('.json')) {
        return { source: name, data: undefined, parseError: 'only .json course files belong in this folder (paper files never do)' };
      }
      try {
        return { source: name, data: JSON.parse(readFileSync(full, 'utf8')) };
      } catch (e) {
        return { source: name, data: undefined, parseError: `not valid JSON (${(e as Error).message})` };
      }
    });
}

export interface ManifestContext {
  /** Hosts a file URL may use. */
  readonly hosts: readonly string[];
  /** The owner's note per board. */
  readonly rightsNotes: Partial<Record<BoardSlug, string>>;
  /** Absolute path of the folder served as the site root. */
  readonly publicDir: string;
  /** No session entry may be dated after this year. */
  readonly currentYear: number;
}

export const defaultContext = (): ManifestContext => ({
  hosts: PAST_PAPER_FILE_HOSTS,
  rightsNotes: PAST_PAPER_RIGHTS_NOTES,
  publicDir: resolve(process.cwd(), 'public'),
  currentYear: new Date().getFullYear(),
});

export interface ManifestResult {
  /** Entries that passed every rule, in file order. */
  readonly entries: PastPaperEntry[];
  /** One line per problem, starting with the rule number in brackets. */
  readonly problems: string[];
}

const COURSE_KEYS = new Set(['board', 'qualification', 'subject', 'syllabusCode', 'componentWord', 'rightsNote', 'files']);
const FILE_KEYS = new Set(['year', 'session', 'paper', 'variant', 'type', 'file', 'rightsNote']);
const PAPER_PATTERN = /^[A-Za-z0-9][A-Za-z0-9/-]{0,11}$/;
const VARIANT_PATTERN = /^[A-Za-z0-9]{1,4}$/;
const HOST_PATTERN = /^[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+$/;
const FILE_PATH_PATTERN = /^\/[A-Za-z0-9._/-]+$/;
const PLACEHOLDER_NOTE = /\b(todo|tbd|tbc|placeholder|lorem ipsum)\b/i;
/** Cambridge marks a Confidential Instructions file "_ci_" in its name (D-111). */
const CONFIDENTIAL_INSTRUCTIONS = /(^|[_-])ci([_-]|\.)/i;

const isRecord = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null && !Array.isArray(v);
const isText = (v: unknown): v is string => typeof v === 'string' && v.trim().length > 0;

/** The file-name part of a course code: "0620" -> "0620", "DP Economics" -> "dp-economics". */
export const codeSlug = (code: string): string => code.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/** The name a course file must have. */
export const courseFileName = (board: string, qualification: string, subject: string, syllabusCode: string): string =>
  `${board}-${qualification}-${subject}-${codeSlug(syllabusCode)}.json`;

/** What makes two entries the same document. */
export const entryIdentity = (e: Pick<PastPaperEntry, 'board' | 'qualification' | 'subject' | 'syllabusCode' | 'year' | 'session' | 'paper' | 'variant' | 'type'>): string =>
  [e.board, e.qualification, e.subject, e.syllabusCode, e.year, e.session, e.paper ?? '-', e.variant ?? '-', e.type].join('|');

function checkRightsNote(note: string): string | null {
  const text = note.trim();
  if (text.length < RIGHTS_NOTE_MIN_LENGTH) return `is ${text.length} characters; a note that records the basis for hosting needs at least ${RIGHTS_NOTE_MIN_LENGTH}`;
  if (PLACEHOLDER_NOTE.test(text)) return 'reads as a placeholder';
  return null;
}

function checkFileReference(file: string, info: DocumentTypeInfo, ctx: ManifestContext): string | null {
  let path: string;
  if (file.startsWith('/')) {
    if (!file.startsWith(PAST_PAPER_PUBLIC_PREFIX)) return `a file kept in the repository must be under public${PAST_PAPER_PUBLIC_PREFIX}`;
    if (!FILE_PATH_PATTERN.test(file) || file.includes('..') || file.includes('//')) return 'the path may use only letters, digits, ".", "_", "-" and "/"';
    const onDisk = join(ctx.publicDir, file);
    if (!existsSync(onDisk) || !statSync(onDisk).isFile()) return `no file exists at public${file}`;
    path = file;
  } else {
    let url: URL;
    try { url = new URL(file); } catch { return 'is neither a path starting with "/" nor a URL'; }
    if (url.protocol !== 'https:') return 'a URL must start with https://';
    if (url.username || url.password || url.port || url.search || url.hash) return 'a URL must be a plain address: no login, port, "?" or "#"';
    if (!ctx.hosts.includes(url.hostname)) return `the host "${url.hostname}" is not in PAST_PAPER_FILE_HOSTS (${ctx.hosts.join(', ') || 'empty'})`;
    if (!FILE_PATH_PATTERN.test(url.pathname) || url.pathname.includes('..') || url.pathname.includes('//') || file !== url.href) return 'the address may use only letters, digits, ".", "_", "-" and "/" after a lower-case host';
    path = url.pathname;
  }
  const name = path.slice(path.lastIndexOf('/') + 1);
  const dot = name.lastIndexOf('.');
  const extension = dot > 0 ? name.slice(dot + 1).toLowerCase() : '';
  if (!info.extensions.includes(extension)) return `a ${info.label.toLowerCase()} must be a ${info.extensions.map((x) => `.${x}`).join(' or ')} file`;
  if (CONFIDENTIAL_INSTRUCTIONS.test(name)) return 'the file name carries the "_ci_" marker of Cambridge Confidential Instructions, which are not hosted (D-111)';
  return null;
}

/**
 * Checks every course file against the rules below and returns the entries
 * that passed. An empty folder gives no entries and no problems.
 *
 *   [1] Course file  valid JSON, known fields only, named for its course.
 *   [2] Course       an active course on this site, and one of its codes.
 *   [3] Session      a session the board runs, and a possible year.
 *   [4] Document     a known type; a paper where the type needs one.
 *   [5] Identity     no two entries describe the same document.
 *   [6] File         exists under public/papers/, or an https URL on an
 *                    allow-listed host; right file type; listed once.
 *   [7] Rights note  the owner's note is recorded for the entry.
 */
export function checkManifest(rawFiles: readonly RawCourseFile[], ctx: ManifestContext = defaultContext()): ManifestResult {
  const problems: string[] = [];
  const entries: PastPaperEntry[] = [];
  const active = activeOnly();
  const seenIdentity = new Map<string, string>();
  const seenFile = new Map<string, string>();

  for (const host of ctx.hosts) {
    if (!HOST_PATTERN.test(host)) problems.push(`[6] PAST_PAPER_FILE_HOSTS: "${host}" is not a lower-case host name (no scheme, path or port).`);
  }
  for (const [board, note] of Object.entries(ctx.rightsNotes)) {
    const fault = typeof note === 'string' ? checkRightsNote(note) : 'is not text';
    if (fault) problems.push(`[7] PAST_PAPER_RIGHTS_NOTES.${board}: the note ${fault}.`);
  }

  for (const raw of rawFiles) {
    const at = `${COURSES_DIR}/${raw.source}`;
    if (raw.parseError) { problems.push(`[1] ${at}: ${raw.parseError}.`); continue; }
    const d = raw.data;
    if (!isRecord(d)) { problems.push(`[1] ${at}: the file must hold one JSON object.`); continue; }
    const before = problems.length;
    for (const key of Object.keys(d)) {
      if (!COURSE_KEYS.has(key)) problems.push(`[1] ${at}: unknown field "${key}" (fields: ${[...COURSE_KEYS].join(', ')}).`);
    }
    for (const key of ['board', 'qualification', 'subject', 'syllabusCode'] as const) {
      if (!isText(d[key])) problems.push(`[1] ${at}: "${key}" is missing.`);
    }
    if (!Array.isArray(d.files)) problems.push(`[1] ${at}: "files" must be a list.`);
    else if (d.files.length === 0) problems.push(`[1] ${at}: "files" is empty. A course file exists only once it lists a document; delete it until then.`);
    if (d.componentWord !== undefined && !COMPONENT_WORDS.includes(d.componentWord as ComponentWord)) {
      problems.push(`[1] ${at}: "componentWord" must be one of ${COMPONENT_WORDS.join(', ')}.`);
    }
    if (d.rightsNote !== undefined && !isText(d.rightsNote)) problems.push(`[7] ${at}: "rightsNote" is present but empty.`);
    if (problems.length > before) continue;

    const board = d.board as string;
    const qualification = d.qualification as string;
    const subject = d.subject as string;
    const syllabusCode = d.syllabusCode as string;
    const expectedName = courseFileName(board, qualification, subject, syllabusCode);
    if (raw.source !== expectedName) problems.push(`[1] ${at}: a file for ${board}/${qualification}/${subject} ${syllabusCode} must be named ${expectedName}.`);

    // [2] The course must already exist on this site, with this code.
    const combination = active.find((c) => c.boardSlug === board && c.qualificationSlug === qualification && c.subjectSlug === subject);
    if (!combination) {
      problems.push(`[2] ${at}: ${board}/${qualification}/${subject} is not an active course in the academic matrix.`);
      continue;
    }
    const codes = courseCodes(combination);
    if (!codes.has(syllabusCode)) {
      problems.push(`[2] ${at}: syllabus code "${syllabusCode}" is not a code of ${board}/${qualification}/${subject} (its codes: ${[...codes].join(', ') || 'none on record'}).`);
      continue;
    }
    const sessions = BOARD_SESSIONS[combination.boardSlug];
    if (sessions.length === 0) {
      problems.push(`[3] ${at}: no sessions are recorded for ${combination.board} in BOARD_SESSIONS, so its documents cannot be listed yet.`);
      continue;
    }
    const componentWord = (d.componentWord as ComponentWord | undefined) ?? 'Paper';

    (d.files as unknown[]).forEach((f, i) => {
      const source = `${raw.source}#${i + 1}`;
      const line = `${at} (file ${i + 1})`;
      if (!isRecord(f)) { problems.push(`[1] ${line}: each item of "files" must be an object.`); return; }
      const start = problems.length;
      for (const key of Object.keys(f)) {
        if (!FILE_KEYS.has(key)) problems.push(`[1] ${line}: unknown field "${key}" (fields: ${[...FILE_KEYS].join(', ')}).`);
      }

      // [3] Session and year.
      const session = f.session as SessionKey;
      if (!isText(f.session) || !Object.hasOwn(SESSIONS, f.session)) {
        problems.push(`[3] ${line}: session "${String(f.session)}" is not one of ${Object.keys(SESSIONS).join(', ')}.`);
      } else if (!sessions.includes(session)) {
        problems.push(`[3] ${line}: ${combination.board} has no "${session}" session in BOARD_SESSIONS (it has: ${sessions.join(', ')}).`);
      }
      const year = f.year as number;
      const latest = f.session === 'specimen' ? ctx.currentYear + SPECIMEN_YEARS_AHEAD : ctx.currentYear;
      if (!Number.isInteger(f.year)) {
        problems.push(`[3] ${line}: year must be a whole number such as 2024, not ${JSON.stringify(f.year)}.`);
      } else if (year < EARLIEST_YEAR || year > latest) {
        problems.push(`[3] ${line}: year ${year} is outside ${EARLIEST_YEAR} to ${latest}.`);
      }

      // [4] Document type, paper and variant.
      const type = f.type as DocumentType;
      const info: DocumentTypeInfo | undefined = isText(f.type) && Object.hasOwn(DOCUMENT_TYPES, f.type) ? DOCUMENT_TYPES[type] : undefined;
      if (!info) problems.push(`[4] ${line}: type "${String(f.type)}" is not one of ${Object.keys(DOCUMENT_TYPES).join(', ')}.`);
      if (f.paper !== undefined && (typeof f.paper !== 'string' || !PAPER_PATTERN.test(f.paper))) {
        problems.push(`[4] ${line}: paper ${JSON.stringify(f.paper)} must be text of up to 12 letters, digits, "/" or "-", written as the board prints it (in quotes: "4", "1H").`);
      }
      if (f.variant !== undefined && (typeof f.variant !== 'string' || !VARIANT_PATTERN.test(f.variant))) {
        problems.push(`[4] ${line}: variant ${JSON.stringify(f.variant)} must be text of up to 4 letters or digits (in quotes: "2").`);
      }
      if (info?.paper === 'required' && f.paper === undefined) problems.push(`[4] ${line}: a ${info.label.toLowerCase()} must name its paper.`);
      if (f.variant !== undefined && f.paper === undefined) problems.push(`[4] ${line}: a variant needs a paper.`);

      // [6] The file itself.
      if (!isText(f.file)) {
        problems.push(`[6] ${line}: "file" is missing.`);
      } else if (info) {
        const fault = checkFileReference(f.file, info, ctx);
        if (fault) problems.push(`[6] ${line}: file "${f.file}": ${fault}.`);
      }

      // [7] The owner's note: the entry's own, else the course file's, else the board's.
      if (f.rightsNote !== undefined && !isText(f.rightsNote)) problems.push(`[7] ${line}: "rightsNote" is present but empty.`);
      const note = [f.rightsNote, d.rightsNote, ctx.rightsNotes[combination.boardSlug]].find(isText);
      if (!note) {
        problems.push(`[7] ${line}: no rights note. Record the basis for hosting ${combination.board} documents in PAST_PAPER_RIGHTS_NOTES (src/data/past-papers/config.ts), or as "rightsNote" in this file.`);
      } else {
        const fault = checkRightsNote(note);
        if (fault) problems.push(`[7] ${line}: the rights note ${fault}.`);
      }
      if (problems.length > start) return;

      const entry: PastPaperEntry = {
        board: combination.boardSlug,
        qualification: combination.qualificationSlug,
        subject: combination.subjectSlug,
        syllabusCode,
        year,
        session,
        ...(f.paper !== undefined ? { paper: f.paper as string } : {}),
        ...(f.variant !== undefined ? { variant: f.variant as string } : {}),
        type,
        file: f.file as string,
        rightsNote: note!.trim(),
        componentWord,
        source,
      };

      // [5] One entry per document, and [6] one entry per file.
      const identity = entryIdentity(entry);
      const sameDocument = seenIdentity.get(identity);
      if (sameDocument) { problems.push(`[5] ${line}: the same document (course, code, year, session, paper, variant and type) is already listed at ${sameDocument}.`); return; }
      const sameFile = seenFile.get(entry.file);
      if (sameFile) { problems.push(`[6] ${line}: file "${entry.file}" is already listed at ${sameFile}; one file is one document.`); return; }
      seenIdentity.set(identity, source);
      seenFile.set(entry.file, source);
      entries.push(entry);
    });
  }
  return { entries, problems };
}

let cached: readonly PastPaperEntry[] | null = null;

/**
 * The committed manifest, checked. Every page and link reads the library
 * through this. Throws, naming each problem, if any entry fails a rule, so a
 * build cannot publish a listing from a manifest the validator would reject.
 */
export function loadLibrary(): readonly PastPaperEntry[] {
  if (cached) return cached;
  const { entries, problems } = checkManifest(readCourseFiles());
  if (problems.length > 0) {
    throw new Error(`Past-paper manifest has ${problems.length} problem(s); run node --experimental-strip-types scripts/validate-past-papers.mjs\n  ${problems.join('\n  ')}`);
  }
  cached = entries;
  return cached;
}
