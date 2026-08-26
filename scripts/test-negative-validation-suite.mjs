#!/usr/bin/env node
/**
 * v1.2 WS13 — consolidated negative-fixture validation suite.
 *
 * The master v1.2 brief names a list of failure categories every validator
 * in this repo must actually catch, not just be assumed to catch:
 * cross-board contamination, resource leakage, source-domain mismatches,
 * spec-code mismatches, legacy/revised code collisions, the AQA/OCR IGCSE
 * prohibition, status contradictions, resource-count claims (llms.txt),
 * invalid Person/Organization schema, invalid Course schema, form
 * validation/spam/rate-limiting, and sitemap/noindex consistency.
 *
 * Individual workstreams already proved several of these one at a time via
 * manual injected fixtures (WS1: cross-board rules; WS2: status
 * contradictions; WS3: enquiry-form unit tests). This script is the
 * consolidated, re-runnable version: for each category it can exercise
 * programmatically, it mutates a real source file, asserts the relevant
 * validator FAILS with the expected message, then restores the original
 * file byte-for-byte and asserts a clean re-run. It never runs a mutation
 * and a restore in a way `set -e` could interrupt (a real mishap earlier
 * in this session) — every step captures its own exit code explicitly.
 *
 * Categories proven here: AQA/OCR IGCSE prohibition (A), spec-code /
 * legacy-revised collision (B), resource-leakage / inactive-board claim
 * (C), status contradiction (D), llms.txt resource-count-claim honesty (E),
 * FX-policy approved-base-rate protection and conversion-drift rejection
 * (L, M, v1.x Closure WS8), assessment-structure weighting-total and
 * legacy/current-collision rejection (N, O, v1.x Closure WS5).
 *
 * Categories proven elsewhere, not re-implemented here (see comments below
 * each skip): cross-board topic contamination (test-cross-board-regression.mjs,
 * runs on every build), form validation/spam/rate-limiting (
 * functions/api/__tests__/enquiry-validation.test.mjs, 16 cases), invalid
 * Person/Organization schema (enforced structurally by content.config.ts's
 * required, no-default `entityType` field — a missing/invalid value fails
 * Zod parsing at build time, not a separate runtime check), sitemap/noindex
 * consistency (verified by direct dist inspection each release, see the
 * v1.2 final report).
 */
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';

let passed = 0;
let failed = 0;

function run(cmd) {
  try {
    execSync(cmd, { stdio: 'pipe', cwd: process.cwd() });
    return { code: 0, out: '' };
  } catch (e) {
    return { code: e.status ?? 1, out: (e.stdout?.toString() ?? '') + (e.stderr?.toString() ?? '') };
  }
}

function withMutation(file, mutate, { validatorCmd, expectSubstring, label }) {
  const original = readFileSync(file, 'utf8');
  try {
    const mutated = mutate(original);
    if (mutated === original) throw new Error(`${label}: mutation did not change the file — check the search string still matches`);
    writeFileSync(file, mutated);
    const { code, out } = run(validatorCmd);
    if (code === 0) {
      console.log(`  ✗ ${label}: validator PASSED on broken input (expected it to fail) — this validator has a gap`);
      failed++;
      return;
    }
    if (!out.includes(expectSubstring)) {
      console.log(`  ✗ ${label}: validator failed, but not with the expected message ("${expectSubstring}"). Actual output:\n${out}`);
      failed++;
      return;
    }
    console.log(`  ✓ ${label}: validator correctly failed with the expected message`);
    passed++;
  } finally {
    writeFileSync(file, original);
    const { code } = run(validatorCmd);
    if (code !== 0) {
      console.log(`  ✗✗ ${label}: RESTORE FAILED — ${file} did not return to a validator-clean state. Manual check required.`);
      failed++;
    }
  }
}

console.log('v1.2 WS13 — Negative validation test suite\n');

// A. AQA/OCR IGCSE prohibition
console.log('[A] AQA does not offer IGCSE (FORBIDDEN_COMBINATIONS)');
withMutation(
  'src/data/academic/matrix.ts',
  (text) => {
    const marker = '] as const;';
    const badRow = `  ...rows('aqa', 'igcse', ['chemistry'], {\n    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'marlbridge',\n    source: 'WS13 negative-fixture test row -- should never be committed',\n    codes: { chemistry: 'TESTBAD' },\n  }),\n`;
    return text.replace(marker, badRow + marker);
  },
  {
    validatorCmd: 'node scripts/validate-academic-matrix.mjs',
    expectSubstring: 'FORBIDDEN combination',
    label: 'aqa+igcse ACTIVE row is rejected',
  },
);

// B. Spec-code claimed by two boards (also covers legacy/revised collisions --
// the same rule fires whether the collision is a data-entry error or two
// genuinely different specs that happen to reuse a code string).
console.log('\n[B] No specification code claimed by more than one board');
withMutation(
  'src/data/academic/matrix.ts',
  (text) => {
    const marker = '] as const;';
    const badRow = `  ...rows('aqa', 'gcse', ['chemistry'], {\n    boardOfferingStatus: 'ACTIVE', marlbridgeStatus: 'ACTIVE', evidence: 'marlbridge',\n    source: 'WS13 negative-fixture test row -- should never be committed',\n    codes: { chemistry: 'H432' },\n  }),\n`;
    return text.replace(marker, badRow + marker);
  },
  {
    validatorCmd: 'node scripts/validate-cross-board-integrity.mjs',
    expectSubstring: 'is claimed by multiple boards',
    label: 'duplicate code H432 across two boards is rejected',
  },
);

// C. Resource leakage: a resource claiming a board+qualification with no
// ACTIVE matrix combination for its subject.
console.log('\n[C] Resource cannot claim a board+qualification with no ACTIVE combination');
withMutation(
  'src/content/resources/ocr-gcse-chemistry-atomic-structure.md',
  (text) => text.replace('boards: ["ocr"]\nqualifications: ["gcse"]', 'boards: ["aqa"]\nqualifications: ["igcse"]'),
  {
    validatorCmd: 'node scripts/validate-academic-content.mjs',
    expectSubstring: 'is not an ACTIVE combination',
    label: 'resource falsely tagged aqa+igcse chemistry is rejected',
  },
);

// D. Status contradiction: marlbridgeTeaches: "teaching" alongside
// not-yet-offered body copy.
console.log('\n[D] marlbridgeTeaches cannot contradict page body copy');
withMutation(
  'src/content/programs/gcse.md',
  (text) => text.replace(
    'Marlbridge teaches GCSE across AQA and OCR, subject by subject',
    'GCSE teaching is not yet offered at Marlbridge, subject by subject',
  ),
  {
    validatorCmd: 'node scripts/validate-commercial-claims.mjs',
    expectSubstring: 'cannot both be true',
    label: '"teaching" + "not yet offered" copy contradiction is rejected',
  },
);

// E. llms.txt resource-count-claim honesty: the category list must be
// derived from real resource data, not hardcoded -- proven by showing it
// changes correctly when the underlying data changes, then reverts.
console.log('\n[E] llms.txt resource-category claims are live-derived, not hardcoded');
{
  const resourceFile = 'src/content/resources/ocr-gcse-chemistry-atomic-structure.md';
  const llmsFile = 'public/llms.txt';
  const originalResource = readFileSync(resourceFile, 'utf8');
  const originalLlms = readFileSync(llmsFile, 'utf8');
  try {
    if (originalLlms.includes('past papers')) {
      console.log('  ✗ precondition failed: llms.txt already claims "past papers" before mutation -- cannot prove derivation');
      failed++;
    } else {
      writeFileSync(resourceFile, originalResource.replace('resourceType: "study-guides"', 'resourceType: "past-papers"'));
      run('node scripts/generate-llms-txt.mjs');
      const mutatedLlms = readFileSync(llmsFile, 'utf8');
      if (mutatedLlms.includes('past papers')) {
        console.log('  ✓ llms.txt correctly started claiming "past papers" once a past-papers resource existed');
        passed++;
      } else {
        console.log('  ✗ llms.txt did NOT pick up the new past-papers resource -- generation may be stale/hardcoded');
        failed++;
      }
    }
  } finally {
    writeFileSync(resourceFile, originalResource);
    run('node scripts/generate-llms-txt.mjs');
    const restoredLlms = readFileSync(llmsFile, 'utf8');
    if (restoredLlms !== originalLlms) {
      console.log('  ✗✗ RESTORE FAILED — llms.txt did not return to its original content. Manual check required.');
      failed++;
    } else {
      console.log('  ✓ llms.txt correctly reverted once the past-papers resource was removed again');
      passed++;
    }
  }
}

console.log('\n[F] Form validation, spam and success/failure paths');
console.log('  → covered by functions/api/__tests__/enquiry-validation.test.mjs (16 cases; run separately via');
console.log('    `node --experimental-strip-types --test functions/api/__tests__/enquiry-validation.test.mjs`)');

console.log('\n[G] Invalid Person/Organization schema');
console.log('  → structurally prevented: content.config.ts\'s `entityType` field on the authors collection is');
console.log('    required with no default, so a missing/invalid value fails Zod parsing at build time.');

console.log('\n[H] Sitemap / noindex / robots consistency');
console.log('  → enforced by scripts/test-sitemap-noindex.mjs (Phase 2, Aug 2026 SEO remediation),');
console.log('    which fails the build if any sitemap URL renders a noindex robots meta tag. As of the');
console.log('    isIndexableAcademicPage() policy landing, 27 academic hub pages are correctly noindexed');
console.log('    and correctly absent from the sitemap -- \"0 noindex pages\" is no longer the expected');
console.log('    state and was never itself the goal; sitemap/robots agreement is.');

console.log('\n[I] Review-integrity validator (QIGT programme)');
const reviewFixtureFile = 'src/content/resources/a-acids-bases-buffers-and-partition-coefficients.md';

withMutation(
  reviewFixtureFile,
  (text) => text.replace('reviewer: "nouman-ahmed"', 'reviewStatus: "reviewed"'),
  {
    validatorCmd: 'node scripts/validate-review-integrity.mjs',
    expectSubstring: 'has reviewStatus "reviewed" but no reviewer field set',
    label: 'reviewStatus "reviewed" with no reviewer field is rejected',
  },
);

withMutation(
  reviewFixtureFile,
  (text) => text.replace('reviewer: "nouman-ahmed"', 'reviewStatus: "reviewed"\nreviewer: "nonexistent-person-xyz"'),
  {
    validatorCmd: 'node scripts/validate-review-integrity.mjs',
    expectSubstring: 'does not exist in src/content/authors/',
    label: 'reviewer referencing a nonexistent author is rejected',
  },
);

withMutation(
  reviewFixtureFile,
  (text) => text.replace('reviewer: "nouman-ahmed"', 'reviewStatus: "reviewed"\nreviewer: "aizaz-raoof-ali"'),
  {
    validatorCmd: 'node scripts/validate-review-integrity.mjs',
    expectSubstring: 'who is not marked isReviewer: true',
    label: 'reviewer who exists but is not isReviewer: true is rejected',
  },
);

withMutation(
  reviewFixtureFile,
  (text) => text.replace('reviewer: "nouman-ahmed"', 'reviewStatus: "reviewed"\nreviewer: "nouman-ahmed"\nreviewedDate: 2026-01-01'),
  {
    validatorCmd: 'node scripts/validate-review-integrity.mjs',
    expectSubstring: 'before publishedDate',
    label: 'reviewedDate before publishedDate is rejected',
  },
);

withMutation(
  reviewFixtureFile,
  (text) => text.replace('reviewer: "nouman-ahmed"', 'reviewStatus: "reviewed"\nreviewer: "nouman-ahmed"\nreviewedDate: 2027-01-01'),
  {
    validatorCmd: 'node scripts/validate-review-integrity.mjs',
    expectSubstring: 'in the future',
    label: 'future reviewedDate is rejected',
  },
);

console.log('\n[L] FX policy: approved base rate cannot silently change');
withMutation(
  'src/data/pricing.ts',
  (text) => text.replace(
    "{ region: 'Pakistan', currency: 'PKR', symbol: 'Rs', igcse: 3500, aLevel: 4000 },",
    "{ region: 'Pakistan', currency: 'PKR', symbol: 'Rs', igcse: 9999, aLevel: 4000 },",
  ),
  {
    validatorCmd: 'node --experimental-strip-types scripts/validate-fx-policy.mjs',
    expectSubstring: 'ONE_TO_ONE_PRICING Pakistan igcse: is 9999, approved value is 3500',
    label: 'silently changed ONE_TO_ONE_PRICING Pakistan base rate is rejected',
  },
);

console.log('\n[M] FX policy: a published conversion drifted beyond tolerance is rejected');
withMutation(
  'src/data/pricing.ts',
  (text) => text.replace(
    "{ region: 'Saudi Arabia', currency: 'SAR', symbol: 'SAR', igcse: 49, aLevel: 56 },",
    "{ region: 'Saudi Arabia', currency: 'SAR', symbol: 'SAR', igcse: 120, aLevel: 56 },",
  ),
  {
    validatorCmd: 'node --experimental-strip-types scripts/validate-fx-policy.mjs',
    expectSubstring: 'Saudi Arabia (SAR) igcse: published 120',
    label: 'a converted rate drifted far beyond FX_TOLERANCE_PERCENT from FX_RATES is rejected',
  },
);

console.log('\n[N] Assessment validator rejects a broken weighting total');
withMutation(
  'src/data/academic/assessments.ts',
  (text) => text.replace(
    "{ paperCode: 'Paper 1', title: 'Non-calculator (Core)', durationMinutes: 90, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', tier: 'core' },",
    "{ paperCode: 'Paper 1', title: 'Non-calculator (Core)', durationMinutes: 90, marks: 80, weightingPercent: 60, assessmentType: 'written-exam', tier: 'core' },",
  ),
  {
    validatorCmd: 'node --experimental-strip-types scripts/validate-assessments.mjs',
    expectSubstring: 'component weightings sum to 110%',
    label: "Cambridge IGCSE Mathematics 0580's Core tier weightings no longer sum to 100% is rejected",
  },
);

console.log('\n[O] Assessment validator rejects a legacy/current collision');
withMutation(
  'src/data/academic/assessments.ts',
  (text) => text.replace(
    "    code: 'H431',\n    specStatus: 'legacy-teach-out',",
    "    code: 'H431',\n    specStatus: 'current',",
  ),
  {
    validatorCmd: 'node --experimental-strip-types scripts/validate-assessments.mjs',
    expectSubstring: "2 overlapping-tier records are marked 'current'",
    label: 'both H431 and H436 marked current simultaneously (same tier, same combination) is rejected',
  },
);

console.log(`\n==============================================================================`);
console.log(`SUMMARY: ${passed} passed, ${failed} failed`);
console.log(`==============================================================================`);
if (failed > 0) {
  console.log('\nNegative validation suite FAILED — see ✗ lines above.');
  process.exit(1);
}
console.log('\nAll negative-fixture categories in this suite pass. Reporting tool only -- not run by npm run validate:academic.');
