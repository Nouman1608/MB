/**
 * MARLBRIDGE — AUTHORITY, PRACTICE, TOOLS & GROWTH MEGA PROGRAMME, WS1.
 *
 * Deterministic syllabus/specification-code entity index.
 *
 * Treats a board's specification/syllabus code (e.g. Cambridge IGCSE
 * Chemistry "0620", OCR A Level Chemistry "H432") as a first-class,
 * board-scoped discovery key on top of the existing academic matrix --
 * not a new data model, just a derived, validated lookup over the ONE
 * sanctioned source (`activeOnly()` from ./index, which already enforces
 * board/qualification offering + Marlbridge ACTIVE status). A code can
 * never resolve across boards here because it is built strictly from
 * `Combination.qualificationCode`, which is itself only ever populated
 * from that combination's own board-specific verified code table in
 * matrix.ts (see e.g. AQA_GCSE_CODES, OCR_ALEVEL_CODES) -- there is no
 * code path in this file that could merge two boards' codes together.
 *
 * Consumed by:
 *   - scripts/generate-redirects.mjs, to emit a /syllabus/<CODE>/ ->
 *     canonical hub 301 redirect for every known code (the no-JS
 *     discovery mechanism required by the brief's section 5).
 *   - src/pages/search/index.astro, to embed a tiny (~130-entry) code
 *     index for instant client-side exact/prefix code matching
 *     alongside Pagefind's full-text search (progressive enhancement
 *     over the redirect mechanism above, not a replacement for it).
 */
import { activeOnly, academicHubPath, type Combination } from './index.ts';

export interface CodeEntry {
  /** Normalized (trimmed, uppercased) code used as the index key. */
  readonly code: string;
  /** The code exactly as recorded in matrix.ts, before normalization --
   * kept for display (e.g. "9625 / 9725" style transition pairs record
   * their FULL original string here even though each half also gets its
   * own index entry pointing at the same combination). */
  readonly rawCode: string;
  readonly combination: Combination;
  readonly hubPath: string;
}

export function normalizeCode(raw: string): string {
  return raw.trim().toUpperCase();
}

/**
 * Splits a matrix `qualificationCode` into its constituent codes. Most
 * rows hold exactly one. A handful of transition rows record two codes
 * together (e.g. OxfordAQA A Level Business "9625 / 9725" -- see
 * matrix.ts's own comment on OXFORDAQA_ALEVEL_CODES). Splitting on "/"
 * means EITHER code resolves a learner straight to the one hub page that
 * covers both, rather than the compound string only ever being
 * matchable as one long, untypeable literal.
 */
function splitCodes(raw: string): string[] {
  return raw
    .split('/')
    .map((s) => s.trim())
    .filter(Boolean);
}

let cached: Map<string, CodeEntry> | null = null;

/**
 * Builds the code -> combination index once per process from
 * activeOnly() -- the same single sanctioned source every route and
 * validator already reads. A code must resolve to exactly one
 * combination; if the underlying data ever tried to claim otherwise this
 * throws rather than silently picking a winner (defense-in-depth on top
 * of validate-cross-board-integrity.mjs's own "no code claimed by more
 * than one board" check, which does not itself split compound codes).
 */
export function buildCodeIndex(): Map<string, CodeEntry> {
  if (cached) return cached;
  const index = new Map<string, CodeEntry>();
  for (const combination of activeOnly()) {
    if (!combination.qualificationCode) continue;
    for (const rawCode of splitCodes(combination.qualificationCode)) {
      const code = normalizeCode(rawCode);
      const existing = index.get(code);
      if (existing && existing.combination !== combination) {
        throw new Error(
          `Syllabus code index collision: "${code}" is claimed by both ` +
            `${existing.combination.boardSlug}/${existing.combination.qualificationSlug}/${existing.combination.subjectSlug} and ` +
            `${combination.boardSlug}/${combination.qualificationSlug}/${combination.subjectSlug}. ` +
            `A syllabus/specification code must resolve to exactly one board+qualification+subject.`,
        );
      }
      index.set(code, { code, rawCode: combination.qualificationCode, combination, hubPath: academicHubPath(combination) });
    }
  }
  cached = index;
  return index;
}

/** Exact-match lookup. Case/whitespace-insensitive; board-scoped by construction. */
export function findByCode(raw: string): CodeEntry | undefined {
  return buildCodeIndex().get(normalizeCode(raw));
}

/** Every known code entry, sorted for deterministic output (redirect files, review tooling). */
export function allCodeEntries(): CodeEntry[] {
  return [...buildCodeIndex().values()].sort((a, b) => a.code.localeCompare(b.code));
}

/**
 * Lightweight fields only -- for embedding in a static client-side JSON
 * index (see src/pages/search/index.astro). Deliberately excludes the
 * full `Combination` object so the embedded payload stays small (a
 * handful of KB for ~130 entries) rather than duplicating the whole
 * matrix client-side, per the brief's "no giant client-side index"
 * instruction.
 */
export interface CodeIndexClientEntry {
  readonly code: string;
  readonly hubPath: string;
  readonly label: string;
}

export function clientCodeIndex(): CodeIndexClientEntry[] {
  return allCodeEntries().map((e) => ({
    code: e.code,
    hubPath: e.hubPath,
    label: `${e.combination.board} ${e.combination.qualification} ${e.combination.subject}`,
  }));
}
