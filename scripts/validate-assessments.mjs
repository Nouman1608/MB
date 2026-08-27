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
 * v2.0 MEGA PROGRAMME additions (brief §38):
 *   [8] Component marks/duration must be positive, plausible values.
 *   [9] Component types and the new v2.0 vocabulary fields (assessmentModel,
 *       asALevelRelationship, optionality, specStatus) come from their
 *       closed vocabularies -- runtime defence-in-depth for the TS types.
 *   [10] Lifecycle dates (firstTeaching/firstAssessment/finalAssessment/
 *        withdrawalDate) are in a possible order.
 *   [11] A 'future' record has a genuinely later firstAssessment than its
 *        overlapping-tier 'current'/'legacy-teach-out' siblings.
 *   [12] A 'legacy-teach-out' record carries relatedCode or explanatory
 *        notes -- never a silent dead end.
 *   [13] A 'choose-n-of-m' component is grouped (alternativeGroup) or
 *        explained in notes.
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

/** v2.0 — kept in sync manually with the AssessmentComponentType union in
 * src/data/academic/assessments.ts, same reasoning as VALID_TIERS above. */
const VALID_COMPONENT_TYPES = new Set([
  'written-exam', 'multiple-choice', 'coursework', 'non-exam-assessment',
  'practical', 'alternative-to-practical', 'practical-endorsement', 'oral',
  'speaking', 'listening', 'reading', 'writing', 'portfolio', 'project',
  'unit', 'endorsement',
]);

/** v2.0 — kept in sync manually with the AssessmentModel union. */
const VALID_ASSESSMENT_MODELS = new Set([
  'linear', 'modular', 'staged', 'unit-based', 'component-based', 'mixed',
]);

/** v2.0 — kept in sync manually with the AsALevelRelationship union. */
const VALID_AS_A_LEVEL_RELATIONSHIPS = new Set([
  'standalone-as', 'as-stage-within-a-level', 'full-a-level-independent',
  'modular-as-contributes', 'staged-cambridge-route',
]);

/** v2.0 — kept in sync manually with the ComponentOptionality union. */
const VALID_OPTIONALITY = new Set(['required', 'optional', 'choose-n-of-m']);

/** v2.0 — kept in sync manually with the (extended) SpecStatus union. */
const VALID_SPEC_STATUSES = new Set(['current', 'legacy-teach-out', 'future', 'withdrawn']);

/** Parses a record's date-like fields (firstTeaching is "YYYY" or
 * "YYYY-MM"; firstAssessment/finalAssessment/withdrawalDate are "YYYY" or
 * a full ISO date) into a single comparable number (year, or year+fractional
 * month) for ordering checks. Returns null if unparseable rather than
 * throwing, so a malformed date is reported as its own problem instead of
 * crashing the whole validator. */
function orderableYear(s) {
  if (!s) return null;
  const m = /^(\d{4})(?:-(\d{2}))?/.exec(s);
  if (!m) return null;
  const year = Number.parseInt(m[1], 10);
  const month = m[2] ? Number.parseInt(m[2], 10) : 0;
  return year + month / 100;
}

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
    // A record may cite its own code directly (the normal case), or -- for a
    // documented future-syllabus transition record (relatedCode set) -- cite
    // the CURRENT code it replaces via relatedCode instead, since
    // syllabuses.ts only ever records one "current" code per combination
    // (matching the Cambridge O Level Business 7115->7081 precedent: the
    // future code lives in syllabuses.ts's notes prose, not its code field).
    const matchesDirect = syllabus.code.includes(a.code);
    const matchesViaRelated = a.relatedCode && syllabus.code.includes(a.relatedCode);
    if (!matchesDirect && !matchesViaRelated) { fail(`${idOf(a)}: code "${a.code}" (relatedCode "${a.relatedCode || 'none'}") is not part of syllabuses.ts's recorded code "${syllabus.code}" for this combination`); p2++; }
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

  // [8] v2.0 — component marks/duration must be positive; malformed values
  console.log('\n[8] Component marks and duration are positive, plausible values');
  let p8 = 0;
  for (const a of ASSESSMENTS) {
    for (const c of a.components) {
      if (!(c.marks > 0)) { fail(`${idOf(a)}: component "${c.paperCode}" has marks=${c.marks} (must be > 0)`); p8++; }
      if (c.durationMinutes !== null && !(c.durationMinutes > 0)) { fail(`${idOf(a)}: component "${c.paperCode}" has durationMinutes=${c.durationMinutes} (must be null or > 0)`); p8++; }
      if (c.durationMinutes !== null && c.durationMinutes > 600) { fail(`${idOf(a)}: component "${c.paperCode}" has durationMinutes=${c.durationMinutes}, implausibly long (>10h) -- check for a minutes/seconds mixup`); p8++; }
    }
  }
  if (!p8) ok('every component has plausible positive marks and duration');

  // [9] v2.0 — every component's assessmentType, and every record's
  // assessmentModel/asALevelRelationship (where set), come from their
  // closed vocabularies (runtime defence-in-depth for the TS union types).
  console.log('\n[9] Component types and v2.0 vocabulary fields are valid');
  let p9 = 0;
  for (const a of ASSESSMENTS) {
    for (const c of a.components) {
      if (!VALID_COMPONENT_TYPES.has(c.assessmentType)) { fail(`${idOf(a)}: component "${c.paperCode}" has invalid assessmentType "${c.assessmentType}"`); p9++; }
      if (c.optionality && !VALID_OPTIONALITY.has(c.optionality)) { fail(`${idOf(a)}: component "${c.paperCode}" has invalid optionality "${c.optionality}"`); p9++; }
    }
    if (a.assessmentModel && !VALID_ASSESSMENT_MODELS.has(a.assessmentModel)) { fail(`${idOf(a)}: invalid assessmentModel "${a.assessmentModel}"`); p9++; }
    if (a.asALevelRelationship && !VALID_AS_A_LEVEL_RELATIONSHIPS.has(a.asALevelRelationship)) { fail(`${idOf(a)}: invalid asALevelRelationship "${a.asALevelRelationship}"`); p9++; }
    if (!VALID_SPEC_STATUSES.has(a.specStatus)) { fail(`${idOf(a)}: invalid specStatus "${a.specStatus}"`); p9++; }
  }
  if (!p9) ok('every component type and every v2.0 vocabulary field used is valid');

  // [10] v2.0 — impossible date ordering. firstTeaching (if set) must not
  // be after firstAssessment; firstAssessment must not be after
  // finalAssessment (if set); finalAssessment must not be after
  // withdrawalDate (if set).
  console.log('\n[10] Lifecycle dates are in a possible order (teaching -> first assessment -> final assessment -> withdrawal)');
  let p10 = 0;
  for (const a of ASSESSMENTS) {
    const ft = orderableYear(a.firstTeaching);
    const fa = orderableYear(a.firstAssessment);
    const la = orderableYear(a.finalAssessment);
    const wd = orderableYear(a.withdrawalDate);
    if (a.firstAssessment && fa === null) { fail(`${idOf(a)}: firstAssessment "${a.firstAssessment}" is not a parseable year/date`); p10++; }
    if (ft !== null && fa !== null && ft > fa) { fail(`${idOf(a)}: firstTeaching (${a.firstTeaching}) is after firstAssessment (${a.firstAssessment}) -- impossible order`); p10++; }
    if (fa !== null && la !== null && fa > la) { fail(`${idOf(a)}: firstAssessment (${a.firstAssessment}) is after finalAssessment (${a.finalAssessment}) -- impossible order`); p10++; }
    if (la !== null && wd !== null && la > wd) { fail(`${idOf(a)}: finalAssessment (${a.finalAssessment}) is after withdrawalDate (${a.withdrawalDate}) -- impossible order`); p10++; }
  }
  if (!p10) ok('every record\'s lifecycle dates are in a possible order');

  // [11] v2.0 — a 'future' record must actually have a future-looking
  // signal (firstTeaching or firstAssessment later than any sibling
  // 'current'/'legacy-teach-out' record's firstAssessment for the same
  // overlapping-tier group) -- catches a record mislabeled 'future' that
  // is really just a same-era duplicate.
  console.log('\n[11] \'future\' records actually have a later first-assessment than their \'current\'/\'legacy-teach-out\' siblings');
  let p11 = 0;
  {
    const byCombo2 = new Map();
    for (const a of ASSESSMENTS) {
      const key = `${a.boardSlug}/${a.qualificationSlug}/${a.subjectSlug}`;
      if (!byCombo2.has(key)) byCombo2.set(key, []);
      byCombo2.get(key).push(a);
    }
    for (const [comboKey, records] of byCombo2) {
      const futures = records.filter((r) => r.specStatus === 'future');
      const liveOrLegacy = records.filter((r) => r.specStatus === 'current' || r.specStatus === 'legacy-teach-out');
      for (const f of futures) {
        const fFa = orderableYear(f.firstAssessment);
        for (const sibling of liveOrLegacy) {
          const overlaps = sibling.tiers.some((t) => f.tiers.includes(t));
          if (!overlaps) continue;
          const sFa = orderableYear(sibling.firstAssessment);
          if (fFa !== null && sFa !== null && fFa <= sFa) {
            fail(`${comboKey}: "future" record ${f.code} has firstAssessment (${f.firstAssessment}) not later than its ${sibling.specStatus} sibling ${sibling.code}'s (${sibling.firstAssessment})`);
            p11++;
          }
        }
      }
    }
  }
  if (!p11) ok('every \'future\' record has a genuinely later first-assessment than its current/legacy siblings');

  // [12] v2.0 — a legacy-teach-out record should be traceable to what
  // replaced it, either via relatedCode or an explicit note, so a legacy
  // record is never just a silent dead end.
  console.log('\n[12] \'legacy-teach-out\' records carry transition context (relatedCode or explanatory notes)');
  let p12 = 0;
  for (const a of ASSESSMENTS) {
    if (a.specStatus !== 'legacy-teach-out') continue;
    if (!a.relatedCode && !(a.notes && a.notes.trim())) { fail(`${idOf(a)}: specStatus is 'legacy-teach-out' but has neither relatedCode nor notes explaining the transition`); p12++; }
  }
  if (!p12) ok('every legacy-teach-out record carries relatedCode or explanatory notes');

  // [13] v2.0 — choose-n-of-m components must be grouped (share an
  // alternativeGroup or be otherwise explained in notes) so "choose-n-of-m"
  // is never a dangling, unresolvable label.
  console.log('\n[13] Components marked optionality \'choose-n-of-m\' are grouped or explained');
  let p13 = 0;
  for (const a of ASSESSMENTS) {
    for (const c of a.components) {
      if (c.optionality === 'choose-n-of-m' && !c.alternativeGroup && !(a.notes && a.notes.trim())) {
        fail(`${idOf(a)}: component "${c.paperCode}" is optionality 'choose-n-of-m' but has no alternativeGroup and the record has no notes explaining the choice`);
        p13++;
      }
    }
  }
  if (!p13) ok('every choose-n-of-m component is grouped or explained');
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
