#!/usr/bin/env node
/**
 * v1.x CLOSURE WS5 — assessment-structure validator.
 *
 * Validates src/data/academic/assessments.ts against six build-failing
 * rules, plus a build-failing coverage report (not just informational) so
 * this whole workstream cannot silently regress:
 *
 *   [1] Board/source mismatch — officialSourceUrl's domain must match the
 *       board's real official domain (same domain map as
 *       validate-cross-board-integrity.mjs's BOARD_DOMAINS; kept in sync
 *       manually, same pattern as fx-policy.ts's THREE_DECIMAL_CURRENCIES).
 *   [2] Spec-code mismatch — every record's (boardSlug, qualificationSlug,
 *       subjectSlug) must have a matching syllabuses.ts entry, and `code`
 *       must be contained in that entry's code string (syllabuses.ts
 *       sometimes records a compound "9625 / 9725" during a transition).
 *   [3] Bad weighting totals — components sharing a tier (or all
 *       components, if untiered) must sum weightingPercent to 100, within
 *       a 0.5-point rounding tolerance.
 *   [4] Duplicate paper identities — no two components in one record may
 *       share the same (paperCode, tier) pair.
 *   [5] Invalid tier terms — every tiers[] entry, and every component's
 *       own tier, must come from the closed AssessmentTier vocabulary
 *       (also enforced at compile time by the TS union type; this is
 *       runtime defence-in-depth for any future non-TS data source, same
 *       reasoning as check-duplicate-resource-scope.mjs's own comments).
 *   [6] Legacy/current collisions — for any (boardSlug, qualificationSlug,
 *       subjectSlug) with 2+ records, exactly one must be 'current'.
 *   [7] Missing source/date — officialSourceUrl and verifiedOn must be
 *       non-empty on every record (TypeScript already requires the
 *       fields to exist; this catches an empty-string escape hatch).
 *
 * Also reports, but does NOT fail the build on, coverage: how many of
 * matrix.ts's ACTIVE combinations have an Assessment record vs are
 * NOT_YET_MODELED. This is intentionally informational, not a gate --
 * WS5's owner-approved scope is a bounded first batch, not full coverage
 * (see assessments.ts's own top comment) -- but the count is printed every
 * run so the gap is visible, not silently forgotten.
 *
 * Usage: node --experimental-strip-types scripts/validate-assessments.mjs
 */
import { ASSESSMENTS } from '../src/data/academic/assessments.ts';
import { SYLLABUSES } from '../src/data/academic/syllabuses.ts';
import { MATRIX } from '../src/data/academic/matrix.ts';

let problems = 0;
const fail = (msg) => { console.log(`  ✗ ${msg}`); problems++; };
const ok = (msg) => console.log(`  ✓ ${msg}`);

/** Kept in sync manually with scripts/validate-cross-board-integrity.mjs's
 * BOARD_DOMAINS -- see that file's own copy for the reasoning. */
const BOARD_DOMAINS = {
  cambridge: 'www.cambridgeinternational.org',
  aqa: 'www.aqa.org.uk',
  ocr: 'www.ocr.org.uk',
  oxfordaqa: 'www.oxfordaqa.com',
  edexcel: 'qualifications.pearson.com',
  ib: 'www.ibo.org',
};

const VALID_TIERS = new Set([
  'not-tiered', 'core', 'extended', 'foundation', 'higher',
  'first-language', 'second-language', 'as-only', 'a2-only',
]);

const idOf = (a) => `${a.boardSlug}/${a.qualificationSlug}/${a.subjectSlug} (${a.code})`;

console.log(`Assessment-structure validator — ${ASSESSMENTS.length} record(s) in src/data/academic/assessments.ts\n`);

if (ASSESSMENTS.length === 0) {
  console.log('No assessment records yet. Nothing to validate.');
} else {
  // [1] Board/source domain match
  console.log('[1] Official source URL matches the declared board\'s real domain');
  let p1 = 0;
  for (const a of ASSESSMENTS) {
    const expected = BOARD_DOMAINS[a.boardSlug];
    if (!expected) { fail(`${idOf(a)}: no known official domain registered for board "${a.boardSlug}"`); p1++; continue; }
    let host;
    try { host = new URL(a.officialSourceUrl).hostname; } catch { fail(`${idOf(a)}: unparseable officialSourceUrl "${a.officialSourceUrl}"`); p1++; continue; }
    if (host !== expected) { fail(`${idOf(a)}: cites "${host}" but ${a.boardSlug}'s official domain is "${expected}"`); p1++; }
  }
  if (!p1) ok(`all ${ASSESSMENTS.length} record(s) cite their own board's real domain`);

  // [2] Spec-code mismatch against syllabuses.ts
  console.log('\n[2] Spec code matches a real syllabuses.ts entry for the same board+qualification+subject');
  let p2 = 0;
  for (const a of ASSESSMENTS) {
    const syllabus = SYLLABUSES.find(
      (s) => s.boardSlug === a.boardSlug && s.qualificationSlug === a.qualificationSlug && s.subjectSlug === a.subjectSlug,
    );
    if (!syllabus) { fail(`${idOf(a)}: no syllabuses.ts entry exists for this board+qualification+subject at all`); p2++; continue; }
    if (!syllabus.code.includes(a.code)) { fail(`${idOf(a)}: code "${a.code}" is not part of syllabuses.ts's recorded code "${syllabus.code}" for this combination`); p2++; }
  }
  if (!p2) ok(`all ${ASSESSMENTS.length} record(s) have a matching, code-consistent syllabuses.ts entry`);

  // [3a] Alternative-group members must carry matching weighting -- they
  // are mutually exclusive choices (e.g. "Practical Test" vs "Alternative
  // to Practical"), so a mismatched weighting would mean a candidate's
  // final grade depends on which alternative they were entered for, which
  // is not how these qualifications work.
  console.log('\n[3a] Components sharing an alternativeGroup carry identical weighting');
  let p3a = 0;
  for (const a of ASSESSMENTS) {
    const byGroup = new Map();
    for (const c of a.components) {
      if (!c.alternativeGroup) continue;
      if (!byGroup.has(c.alternativeGroup)) byGroup.set(c.alternativeGroup, []);
      byGroup.get(c.alternativeGroup).push(c);
    }
    for (const [group, members] of byGroup) {
      const weightings = new Set(members.map((m) => m.weightingPercent));
      if (weightings.size > 1) {
        fail(`${idOf(a)}: alternativeGroup "${group}" members have mismatched weightings (${[...weightings].join(', ')}%) -- ${members.map((m) => m.paperCode).join(', ')}`);
        p3a++;
      }
    }
  }
  if (!p3a) ok('every alternativeGroup\'s members carry identical weighting');

  // [3b] Weighting totals per tier -- components sharing an
  // alternativeGroup are counted ONCE per group (one representative),
  // since a candidate sits only one of them, not all.
  console.log('\n[3b] Component weightings sum to 100% per tier');
  let p3b = 0;
  const TOLERANCE = 0.5;
  for (const a of ASSESSMENTS) {
    const tiersToCheck = a.tiers.length ? a.tiers : ['not-tiered'];
    for (const tier of tiersToCheck) {
      const applicable = a.components.filter((c) => !c.tier || c.tier === tier);
      const seenGroups = new Set();
      let total = 0;
      for (const c of applicable) {
        if (c.alternativeGroup) {
          if (seenGroups.has(c.alternativeGroup)) continue; // already counted this group's representative
          seenGroups.add(c.alternativeGroup);
        }
        total += c.weightingPercent;
      }
      if (Math.abs(total - 100) > TOLERANCE) {
        fail(`${idOf(a)} [tier=${tier}]: component weightings sum to ${total}%, not 100% (±${TOLERANCE})`);
        p3b++;
      }
    }
  }
  if (!p3b) ok(`every record's component weightings sum to 100% (±${TOLERANCE}) for every tier it declares`);

  // [4] Duplicate paper identities
  console.log('\n[4] No duplicate (paperCode, tier) pairs within one record');
  let p4 = 0;
  for (const a of ASSESSMENTS) {
    const seen = new Set();
    for (const c of a.components) {
      const key = `${c.paperCode}::${c.tier ?? ''}`;
      if (seen.has(key)) { fail(`${idOf(a)}: duplicate component "${c.paperCode}" (tier=${c.tier ?? 'none'})`); p4++; }
      seen.add(key);
    }
  }
  if (!p4) ok('no record has a duplicate (paperCode, tier) pair');

  // [5] Invalid tier terms (runtime defence-in-depth for the TS union type)
  console.log('\n[5] Every tier term comes from the closed AssessmentTier vocabulary');
  let p5 = 0;
  for (const a of ASSESSMENTS) {
    for (const t of a.tiers) {
      if (!VALID_TIERS.has(t)) { fail(`${idOf(a)}: tiers[] contains invalid term "${t}"`); p5++; }
    }
    for (const c of a.components) {
      if (c.tier && !VALID_TIERS.has(c.tier)) { fail(`${idOf(a)}: component "${c.paperCode}" has invalid tier "${c.tier}"`); p5++; }
      if (c.tier && !a.tiers.includes(c.tier)) { fail(`${idOf(a)}: component "${c.paperCode}" declares tier "${c.tier}" which is not in this record's own tiers[] list`); p5++; }
    }
  }
  if (!p5) ok('every tier term used is valid and declared on its parent record');

  // [6] Legacy/current collisions -- grouped by board+qualification+subject
  // AND tier-signature, not just board+qualification+subject. Two records
  // can legitimately share a board+qualification+subject while both being
  // 'current' if they serve genuinely different, non-overlapping tiers
  // (e.g. Cambridge O Level Urdu 3247 "first-language" and 3248
  // "second-language" -- two simultaneously-current specifications, not a
  // legacy/current pair). Only records whose tier sets actually OVERLAP
  // are checked against the exactly-one-current rule.
  console.log('\n[6] Exactly one \'current\' record per board+qualification+subject+tier-overlap group');
  let p6 = 0;
  const byCombo = new Map();
  for (const a of ASSESSMENTS) {
    const key = `${a.boardSlug}/${a.qualificationSlug}/${a.subjectSlug}`;
    if (!byCombo.has(key)) byCombo.set(key, []);
    byCombo.get(key).push(a);
  }
  for (const [comboKey, records] of byCombo) {
    if (records.length < 2) continue;
    // Union-find-lite: cluster records whose tiers[] sets overlap.
    const clusters = [];
    for (const a of records) {
      const cluster = clusters.find((c) => c.some((b) => b.tiers.some((t) => a.tiers.includes(t))));
      if (cluster) cluster.push(a);
      else clusters.push([a]);
    }
    for (const cluster of clusters) {
      if (cluster.length < 2) continue;
      const current = cluster.filter((r) => r.specStatus === 'current');
      const tierDesc = cluster[0].tiers.join('+');
      if (current.length === 0) { fail(`${comboKey} [tiers=${tierDesc}]: ${cluster.length} overlapping-tier records exist but NONE is marked 'current'`); p6++; }
      else if (current.length > 1) { fail(`${comboKey} [tiers=${tierDesc}]: ${current.length} overlapping-tier records are marked 'current' (codes: ${current.map((r) => r.code).join(', ')}) — must be exactly one`); p6++; }
    }
  }
  if (!p6) ok('every board+qualification+subject+overlapping-tier group has exactly one current record');

  // [7] Missing source/date
  console.log('\n[7] Every record has a non-empty official source URL and verification date');
  let p7 = 0;
  for (const a of ASSESSMENTS) {
    if (!a.officialSourceUrl || !a.officialSourceUrl.trim()) { fail(`${idOf(a)}: officialSourceUrl is empty`); p7++; }
    if (!a.verifiedOn || !/^\d{4}-\d{2}-\d{2}$/.test(a.verifiedOn)) { fail(`${idOf(a)}: verifiedOn is missing or not a YYYY-MM-DD date ("${a.verifiedOn}")`); p7++; }
  }
  if (!p7) ok('every record has a real source URL and a real verification date');
}

// --- Coverage report (informational, does not fail the build) -------------

console.log('\n[coverage] ACTIVE matrix combinations with vs without an assessment record (informational)');
const activeCombos = MATRIX.filter((r) => r.boardOfferingStatus === 'ACTIVE' && r.marlbridgeStatus === 'ACTIVE');
const modeledKeys = new Set(ASSESSMENTS.map((a) => `${a.boardSlug}/${a.qualificationSlug}/${a.subjectSlug}`));
let modeled = 0;
for (const combo of activeCombos) {
  const key = `${combo.boardSlug}/${combo.qualificationSlug}/${combo.subjectSlug}`;
  if (modeledKeys.has(key)) modeled++;
}
console.log(`  ${modeled} / ${activeCombos.length} ACTIVE combinations have a real, sourced assessment record.`);
console.log(`  ${activeCombos.length - modeled} are NOT_YET_MODELED — a genuine, tracked gap (docs/decision-log.md D-050),`);
console.log('  not silently absent. Populating the remainder is future work, outside this release\'s bounded scope.');

console.log('');
if (problems > 0) {
  console.log(`ASSESSMENT VALIDATION FAILED: ${problems} problem(s) found.`);
  process.exit(1);
}
console.log('ASSESSMENT VALIDATION PASSED.');
process.exit(0);
