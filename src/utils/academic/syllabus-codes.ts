/**
 * D-396 -- pure helpers for comparing syllabus / specification codes. No
 * imports, so they can be unit-tested with plain node
 * (src/utils/academic/__tests__/syllabus-codes.test.mjs).
 */

/**
 * D-396 -- syllabus codes compared the way boards print them: the code
 * before any "/" component suffix (Pearson IAL "WBS11/01" -> "WBS11"),
 * without an IB edition year in brackets ("DP Computer Science (2027)"),
 * upper-cased.
 */
export const normaliseCode = (code: string): string =>
  code.split('/')[0].replace(/\s*\(\d{4}\)\s*$/, '').trim().toUpperCase();

/** Does a resource's declared code belong to one of the course's codes? */
export function codeMatches(resourceCode: string, codes: ReadonlySet<string>): boolean {
  const rc = normaliseCode(resourceCode);
  if (codes.has(rc)) return true;
  // Pearson International A Level: unit codes (W + subject letters + unit
  // number, e.g. WBS11) sit under the qualification codes with the same
  // subject letters (X.. for the IAS, Y.. for the IAL, e.g. YBS11), as the
  // resources and syllabus records in this repository already pair them.
  if (/^W[A-Z]{2}\d/.test(rc)) return [...codes].some((cc) => /^[XY][A-Z]{2}\d/.test(cc) && cc.slice(1, 3) === rc.slice(1, 3));
  return false;
}
