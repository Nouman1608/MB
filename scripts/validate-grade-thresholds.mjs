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
 *   [7] One record per syllabus and series (thresholdProblems in
 *       grade-thresholds.ts; audit 3 item 44).
 *
 *   [8] Board required and consistent with the grade scale (D-541) -- every
 *       record names its exam board; Cambridge rows use A*-G / a-e keys and
 *       Pearson Edexcel rows use the 9-1 keys, never a mix.
 *
 *   [9] Pearson Edexcel sources and IAL unit tables (D-543h) -- every Pearson
 *       record names its source document and PDF page; a record's grade scale
 *       must suit its board; IAL unit records hold `units` (and no `rows`),
 *       each unit with a W-code, a level (AS or A2), a unique label, raw
 *       boundaries that are strictly decreasing, within the unit's raw maximum,
 *       with A* present on A2 units and absent on AS units, and a positive UMS
 *       maximum. (UMS boundaries are fixed percentages and are not stored.)
 *
 * Run as part of `npm run validate:academic`. Exits 1 on any problem.
 */
import { GRADE_THRESHOLDS, GRADE_SCALES, BOARD_ORDER, scaleOf, thresholdProblems } from '../src/data/academic/grade-thresholds.ts';

const A_LEVEL_ORDER = ['A*', 'A', 'B', 'C', 'D', 'E', 'F', 'G'];
const AS_ORDER = ['a', 'b', 'c', 'd', 'e'];
const NUMERIC_ORDER = ['9', '8', '7', '6', '5', '4', '3', '2', '1'];
const VALID_GRADE_KEYS = new Set([...A_LEVEL_ORDER, ...AS_ORDER, ...NUMERIC_ORDER]);
const SERIES_PATTERN = /^(January|March|May\/June|June|October\/November|November)\s\d{4}$/;

const problems = [];

for (const syllabus of GRADE_THRESHOLDS) {
  const id = `${syllabus.code} (${syllabus.qualificationLabel} ${syllabus.subjectLabel})`;

  // [8] Board required
  if (!BOARD_ORDER.includes(syllabus.board)) {
    problems.push(`[8] ${id}: board "${syllabus.board}" missing or not one of ${BOARD_ORDER.join(', ')}.`);
  }
  const scaleName = scaleOf(syllabus);
  const boardScale = new Set(GRADE_SCALES[scaleName] ?? []);

  // [9] Scale must suit the board; Pearson records need a source document and page.
  if (!GRADE_SCALES[scaleName]) problems.push(`[9] ${id}: unknown grade scale "${scaleName}".`);
  if (syllabus.board === 'Cambridge' && scaleName !== 'cambridge') problems.push(`[9] ${id}: a Cambridge record must use the cambridge grade scale, not "${scaleName}".`);
  if (syllabus.board === 'Pearson Edexcel' && scaleName === 'cambridge') problems.push(`[9] ${id}: a Pearson Edexcel record cannot use the cambridge grade scale.`);
  if (syllabus.board === 'Pearson Edexcel') {
    if (!syllabus.sourceDocument || syllabus.sourceDocument.trim().length < 10) problems.push(`[9] ${id}: missing sourceDocument (title of the Pearson document).`);
    if (!Number.isInteger(syllabus.sourcePage) || syllabus.sourcePage < 1) problems.push(`[9] ${id}: missing or invalid sourcePage (PDF page number).`);
  }
  const units = syllabus.units ?? [];
  const rowsCount = syllabus.rows.length;
  if (rowsCount === 0 && units.length === 0) problems.push(`[9] ${id}: record has neither rows nor units.`);
  if (units.length > 0 && rowsCount > 0) problems.push(`[9] ${id}: a unit-based record must not also carry overall rows.`);
  if (units.length > 0 && scaleName !== 'edexcel-ial') problems.push(`[9] ${id}: unit tables belong to the edexcel-ial scale, not "${scaleName}".`);
  const seenUnitLabels = new Set();
  for (const u of units) {
    const uid = `${id} / unit ${u.unit} "${u.label}"`;
    if (!/^W[A-Z]{2}\d{1,2}$/.test(u.unit)) problems.push(`[9] ${uid}: unit code is not of the form WXX11.`);
    const labelKey = `${u.unit} ${u.label}`;
    if (seenUnitLabels.has(labelKey)) problems.push(`[2] ${uid}: duplicate unit appears more than once.`);
    seenUnitLabels.add(labelKey);
    if (u.level !== 'AS' && u.level !== 'A2') problems.push(`[9] ${uid}: level must be AS or A2.`);
    if (!u.label || !/^Unit \d+[A-Z]?: \S/.test(u.label)) problems.push(`[9] ${uid}: label must look like "Unit 1: Title".`);
    if (!Number.isInteger(u.maxRaw) || u.maxRaw <= 0) problems.push(`[9] ${uid}: maxRaw must be a positive integer.`);
    if (!Number.isInteger(u.maxUms) || u.maxUms <= 0) problems.push(`[9] ${uid}: maxUms must be a positive integer.`);
    const expected = u.level === 'A2' ? ['A*', 'A', 'B', 'C', 'D', 'E'] : ['A', 'B', 'C', 'D', 'E'];
    const keys = Object.keys(u.raw);
    for (const k of keys) if (!boardScale.has(k)) problems.push(`[5] ${uid}: grade key "${k}" is not on the IAL grade scale (A* to E).`);
    if (u.level === 'AS' && keys.includes('A*')) problems.push(`[9] ${uid}: an AS unit has no A* boundary.`);
    for (const k of expected) if (u.raw[k] === undefined) problems.push(`[9] ${uid}: ${u.level} unit is missing the ${k} boundary (Pearson prints it; if greyed out, omit the whole unit instead).`);
    let prev = null;
    let prevGrade = null;
    for (const k of expected) {
      const v = u.raw[k];
      if (v === undefined) continue;
      if (!Number.isInteger(v) || v <= 0) problems.push(`[4] ${uid}: grade ${k} has a non-integer or non-positive mark (${v}).`);
      if (v > u.maxRaw) problems.push(`[4] ${uid}: grade ${k} (${v}) exceeds the unit's raw maximum (${u.maxRaw}).`);
      if (prev !== null && v >= prev) problems.push(`[4] ${uid}: grade ${k} (${v}) is not strictly lower than ${prevGrade} (${prev}).`);
      prev = v;
      prevGrade = k;
    }
  }

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
    const usesNumericScale = gradeKeys.some((k) => NUMERIC_ORDER.includes(k));
    if ([usesAsScale, usesALevelScale, usesNumericScale].filter(Boolean).length > 1) {
      problems.push(`[5] ${rowId}: mixes grade scales (A*-G, AS-only a-e, numeric 9-1) in the same row -- these are different scales and must not be mixed.`);
      continue;
    }
    // [8] The row's keys must belong to its record's board scale (a numeric key under Cambridge, or A*-G under Edexcel, is a mislabelled board).
    for (const key of gradeKeys) {
      if (VALID_GRADE_KEYS.has(key) && boardScale.size > 0 && !boardScale.has(key)) {
        problems.push(`[8] ${rowId}: grade key "${key}" is not on the ${syllabus.board} grade scale.`);
      }
    }
    const order = usesNumericScale ? NUMERIC_ORDER : usesAsScale ? AS_ORDER : A_LEVEL_ORDER;

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

for (const p of thresholdProblems()) problems.push(`[7] ${p}`);
if (problems.length > 0) {
  console.error('Grade-threshold validation FAILED:');
  for (const p of problems) console.error(`  ✗ ${p}`);
  console.error(`\n${problems.length} problem(s) found across ${GRADE_THRESHOLDS.length} syllabus record(s).`);
  process.exit(1);
}

const totalRows = GRADE_THRESHOLDS.reduce((sum, s) => sum + s.rows.length + (s.units?.length ?? 0), 0);
console.log(`Grade-threshold validation OK — ${GRADE_THRESHOLDS.length} syllabus record(s), ${totalRows} route(s) and unit(s) total, no route collisions, no mark-basis or unavailable-grade problems found.`);
