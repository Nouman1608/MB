#!/usr/bin/env node
/**
 * Post-v2.0 Quality Closure WS6 — grade-threshold data validator.
 *
 * src/data/academic/grade-thresholds.ts has no automated check at all
 * before this file existed -- a bad edit (a duplicated route, a threshold
 * above the paper's own max mark, a malformed series string) would build
 * and deploy silently. This validates the six failure categories the
 * closure brief names for this workstream:
 *
 *   [1] Series format -- every `series` string must look like a real
 *       Cambridge exam series ("<Month> <YYYY>"), not a malformed or
 *       placeholder value.
 *   [2] Route collisions -- no two rows within the same syllabus may share
 *       an identical `combination` label (would silently shadow one
 *       route's real thresholds with another's in the rendered table).
 *   [3] Unavailable grades preserved as unavailable, not zero -- a grade
 *       genuinely not offered on a route (e.g. Core has no A-star, A or B) must be
 *       ABSENT from `thresholds`, never present as 0 -- 0 would read as "a
 *       real threshold of zero marks", which is never what Cambridge means
 *       by an unavailable grade.
 *   [4] Mark-basis sanity -- every present threshold must be a positive
 *       integer no greater than the row's own `maxMark`, and the sequence
 *       of thresholds that ARE present must be strictly decreasing in
 *       Cambridge's own best-to-worst grade order (A* > A > B > C > D > E >
 *       F > G, or a > b > c > d > e for AS-only routes) -- a grade boundary
 *       can never require MORE marks than a higher grade.
 *   [5] Invalid grade keys -- `thresholds` may only use keys from the
 *       Grade type; a typo'd key would silently never render.
 *   [6] Required source/verification fields -- every syllabus record must
 *       carry a non-empty officialSourceUrl and verifiedOn date.
 *
 * Run as part of `npm run validate:academic`. Exits 1 on any problem.
 */
import { GRADE_THRESHOLDS } from '../src/data/academic/grade-thresholds.ts';

const A_LEVEL_ORDER = ['A*', 'A', 'B', 'C', 'D', 'E', 'F', 'G'];
const AS_ORDER = ['a', 'b', 'c', 'd', 'e'];
const VALID_GRADE_KEYS = new Set([...A_LEVEL_ORDER, ...AS_ORDER]);
const SERIES_PATTERN = /^(January|March|May\/June|June|October\/November|November)\s\d{4}$/;

const problems = [];

for (const syllabus of GRADE_THRESHOLDS) {
  const id = `${syllabus.code} (${syllabus.qualificationLabel} ${syllabus.subjectLabel})`;

  // [1] Series format
  if (!SERIES_PATTERN.test(syllabus.series)) {
    problems.push(`[1] ${id}: series "${syllabus.series}" does not look like a real Cambridge exam series (expected e.g. "June 2026").`);
  }

  // [6] Required source/verification fields
  if (!syllabus.officialSourceUrl || !syllabus.officialSourceUrl.startsWith('http')) {
    problems.push(`[6] ${id}: missing or invalid officialSourceUrl.`);
  }
  if (!syllabus.verifiedOn || !/^\d{4}-\d{2}-\d{2}$/.test(syllabus.verifiedOn)) {
    problems.push(`[6] ${id}: missing or invalid verifiedOn date.`);
  }

  // [2] Route collisions
  const seenCombinations = new Set();
  for (const row of syllabus.rows) {
    if (seenCombinations.has(row.combination)) {
      problems.push(`[2] ${id}: duplicate route "${row.combination}" appears more than once -- route collision.`);
    }
    seenCombinations.add(row.combination);
  }

  for (const row of syllabus.rows) {
    const rowId = `${id} / "${row.combination}"`;
    const gradeKeys = Object.keys(row.thresholds);

    // [5] Invalid grade keys
    for (const key of gradeKeys) {
      if (!VALID_GRADE_KEYS.has(key)) {
        problems.push(`[5] ${rowId}: invalid grade key "${key}" in thresholds.`);
      }
    }

    // Determine which grade-order sequence applies to this row (A-Level-style
    // A*-G, or AS-only a-e) from which keys are actually present, rather than
    // assuming from the row's label -- avoids inferring purpose from a name.
    const usesAsScale = gradeKeys.some((k) => AS_ORDER.includes(k));
    const usesALevelScale = gradeKeys.some((k) => A_LEVEL_ORDER.includes(k));
    if (usesAsScale && usesALevelScale) {
      problems.push(`[5] ${rowId}: mixes A-Level-scale (A*-G) and AS-only-scale (a-e) grade keys in the same row -- these are two different scales and must not be mixed.`);
      continue;
    }
    const order = usesAsScale ? AS_ORDER : A_LEVEL_ORDER;

    // [4] Mark-basis sanity: each present threshold is a positive integer
    // <= maxMark, and present thresholds are strictly decreasing in
    // best-to-worst grade order.
    let previousValue = null;
    let previousGrade = null;
    for (const grade of order) {
      const value = row.thresholds[grade];
      if (value === undefined) continue; // [3] absent = correctly "unavailable", not checked further here
      if (!Number.isInteger(value) || value < 0) {
        problems.push(`[4] ${rowId}: grade ${grade} has a non-integer or negative mark (${value}).`);
      }
      if (value > row.maxMark) {
        problems.push(`[4] ${rowId}: grade ${grade} threshold (${value}) exceeds the row's own maxMark (${row.maxMark}).`);
      }
      if (previousValue !== null && value >= previousValue) {
        problems.push(`[4] ${rowId}: grade ${grade} (${value}) is not strictly lower than the preceding, higher grade ${previousGrade} (${previousValue}) -- a higher grade must require more marks.`);
      }
      previousValue = value;
      previousGrade = grade;
    }

    // [3] Explicit zero-as-unavailable check: a present threshold of exactly
    // 0 is virtually never a real Cambridge grade boundary (the lowest real
    // boundaries in this dataset are all well above 0) -- far more likely to
    // be a mistaken placeholder for "not applicable" that should have been
    // omitted from thresholds entirely.
    for (const grade of order) {
      if (row.thresholds[grade] === 0) {
        problems.push(`[3] ${rowId}: grade ${grade} is recorded as threshold 0 -- if this grade is not actually offered on this route, omit the key entirely rather than recording 0.`);
      }
    }
  }
}

if (problems.length > 0) {
  console.error('Grade-threshold validation FAILED:');
  for (const p of problems) console.error(`  ✗ ${p}`);
  console.error(`\n${problems.length} problem(s) found across ${GRADE_THRESHOLDS.length} syllabus record(s).`);
  process.exit(1);
}

const totalRows = GRADE_THRESHOLDS.reduce((sum, s) => sum + s.rows.length, 0);
console.log(`Grade-threshold validation OK — ${GRADE_THRESHOLDS.length} syllabus record(s), ${totalRows} route(s) total, no route collisions, no mark-basis or unavailable-grade problems found.`);
