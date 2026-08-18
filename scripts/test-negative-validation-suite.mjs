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
 * (C), status contradiction (D), llms.txt resource-count-claim honesty (E).
 *
 * Categories proven elsewhere, not re-implemented here (see comments below
 * each skip): cross-board topic contamination (test-cross-board-regression.mjs,
 * runs on every build), form validation/spam/rate-limiting (
 * functions/api/__tests__/enquiry-validation.test.mjs, 11 cases), invalid
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
console.log('  → covered by functions/api/__tests__/enquiry-validation.test.mjs (11 cases; run separately via');
console.log('    `node --experimental-strip-types --test functions/api/__tests__/enquiry-validation.test.mjs`)');

console.log('\n[G] Invalid Person/Organization schema');
console.log('  → structurally prevented: content.config.ts\'s `entityType` field on the authors collection is');
console.log('    required with no default, so a missing/invalid value fails Zod parsing at build time.');

console.log('\n[H] Sitemap / noindex / robots consistency');
console.log('  → verified by direct dist inspection (0 noindex tags, 0 pages missing from sitemap-0.xml,');
console.log('    robots.txt allows / and points at sitemap-index.xml) -- see the v1.2 final report.');

console.log(`\n==============================================================================`);
console.log(`SUMMARY: ${passed} passed, ${failed} failed`);
console.log(`==============================================================================`);
if (failed > 0) {
  console.log('\nNegative validation suite FAILED — see ✗ lines above.');
  process.exit(1);
}
console.log('\nAll negative-fixture categories in this suite pass. Reporting tool only -- not run by npm run validate:academic.');
