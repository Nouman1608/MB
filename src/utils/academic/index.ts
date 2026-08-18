/**
 * The ONLY sanctioned way to read the academic matrix.
 *
 * Route generation must call activeOnly()/isPublishable(). Nothing else may
 * decide whether a combination is publishable, so a FUTURE, UNKNOWN or
 * NOT_SUPPORTED row cannot become a public URL by accident.
 */
import { MATRIX, type Combination } from '../../data/academic/matrix';
import { BOARDS, boardBySlug } from '../../data/academic/boards';
import { QUALIFICATIONS, qualificationBySlug } from '../../data/academic/qualifications';
import { SUBJECTS, subjectBySlug } from '../../data/academic/subjects';

export { MATRIX, BOARDS, QUALIFICATIONS, SUBJECTS };
export type { Combination };

/**
 * A combination may be published only if it is ACTIVE *and* its board and
 * qualification are themselves offered. Both conditions, so flipping a row to
 * ACTIVE cannot publish an OCR or GCSE URL on its own.
 */
export function isPublishable(c: Combination): boolean {
  // MARLBRIDGE status governs publication. The board offering this
  // qualification is necessary but never sufficient.
  if (c.marlbridgeStatus !== 'ACTIVE') return false;
  if (c.boardOfferingStatus !== 'ACTIVE') return false;
  const board = boardBySlug(c.boardSlug);
  const qualification = qualificationBySlug(c.qualificationSlug);
  if (!board || board.status !== 'offered') return false;
  if (!qualification || qualification.status !== 'offered') return false;
  if (!qualification.offeredByBoards.includes(c.boardSlug)) return false;
  return Boolean(subjectBySlug(c.subjectSlug));
}

export const activeOnly = (): Combination[] => MATRIX.filter(isPublishable);

/** Combinations Marlbridge could adopt: board-verified, awaiting scope sign-off. */
export const eligibleForMarlbridge = (): Combination[] =>
  MATRIX.filter((c) => c.boardOfferingStatus === 'ACTIVE' && c.marlbridgeStatus === 'UNKNOWN' && c.evidence === 'la-course');

/** Board x qualification pairs that actually have publishable subjects. */
export function publishablePairs() {
  const seen = new Map<string, { boardSlug: string; qualificationSlug: string; count: number }>();
  for (const c of activeOnly()) {
    const key = `${c.boardSlug}/${c.qualificationSlug}`;
    const hit = seen.get(key);
    if (hit) hit.count += 1;
    else seen.set(key, { boardSlug: c.boardSlug, qualificationSlug: c.qualificationSlug, count: 1 });
  }
  return [...seen.values()];
}

/** Derived: which board/qualification pairs offer a given subject. */
export const offeringsForSubject = (subjectSlug: string): Combination[] =>
  activeOnly().filter((c) => c.subjectSlug === subjectSlug);

/** Derived: subjects publishable for a board + qualification. */
export const subjectsFor = (boardSlug: string, qualificationSlug: string): Combination[] =>
  activeOnly().filter((c) => c.boardSlug === boardSlug && c.qualificationSlug === qualificationSlug);

/** Canonical academic hub path. Only ever call with a publishable combination. */
export const academicHubPath = (c: Combination): string =>
  `/boards/${c.boardSlug}/${c.qualificationSlug}/${c.subjectSlug}/`;

export const boardsPath = () => `/boards/`;
export const boardPath = (boardSlug: string) => `/boards/${boardSlug}/`;
export const levelsPath = () => `/levels/`;
export const levelPath = (qualificationSlug: string) => `/levels/${qualificationSlug}/`;

/** Derived: every publishable combination for a given board, across all qualifications. */
export const combinationsForBoard = (boardSlug: string): Combination[] =>
  activeOnly().filter((c) => c.boardSlug === boardSlug);

/** Derived: every publishable combination for a given qualification, across all boards. */
export const combinationsForQualification = (qualificationSlug: string): Combination[] =>
  activeOnly().filter((c) => c.qualificationSlug === qualificationSlug);

/** Boards with at least one publishable combination — the only boards that can have a hub page. */
export const boardsWithCombinations = (): string[] =>
  [...new Set(activeOnly().map((c) => c.boardSlug))];

/** Qualifications with at least one publishable combination — the only ones that can have a hub page. */
export const qualificationsWithCombinations = (): string[] =>
  [...new Set(activeOnly().map((c) => c.qualificationSlug))];
