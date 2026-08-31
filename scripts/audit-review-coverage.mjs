#!/usr/bin/env node
/**
 * Review-coverage safeguard (Flagship Dominance/Trust programme, 2026-08-31,
 * docs/decision-log.md D-092).
 *
 * The owner has confirmed, as a blanket editorial fact, that every
 * published study resource on Marlbridge has been reviewed by a teacher.
 * `reviewedByTeachers` (src/content.config.ts, resources collection)
 * carries that fact in the data model, defaulting true. This is
 * DELIBERATELY separate from the stricter QIGT `reviewStatus`/`reviewer`
 * system (scripts/validate-review-integrity.mjs), which still gates the
 * more specific named-reviewer byline and schema.org `editor` claim and is
 * untouched by this script.
 *
 * Reads the BUILT site (run `npm run build` first, same convention as the
 * other dist-dependent audits in this repo) and checks two independent
 * things, so a bug in either the data or the template is caught:
 *
 *   [1] Data-level: every src/content/resources/*.md file resolves
 *       reviewedByTeachers to true (no file explicitly sets it to false --
 *       the owner's confirmation is blanket, so an explicit false would be
 *       a real, surprising exception that deserves a human look, not a
 *       silent pass).
 *   [2] Rendered-level: every built dist/resources/<slug>/index.html
 *       actually contains the visible trust line "Reviewed by teachers".
 *       Data being correct does not guarantee the template rendered it --
 *       only checking the built HTML can catch a template regression
 *       (same reasoning as scripts/validate-rendered-academic-labels.mjs).
 *   [3] No built page anywhere on the site still carries stale "review
 *       pending across the library" language now that the blanket
 *       confirmation applies -- specifically /legal/editorial-policy/,
 *       which is the one page that used to describe review as mostly
 *       incomplete.
 *
 * Negative-tested by scripts/test-negative-validation-suite.mjs ([AA]): a
 * built resource page's trust line is mutated away, this script is
 * confirmed to fail with a specific diagnostic, then the file is restored
 * byte-for-byte.
 *
 * Run via `npm run audit:review-coverage`, wired into `npm run audit:all`.
 */
import { readdir, readFile } from 'node:fs/promises';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const RESOURCES_DIR = 'src/content/resources';
const TRUST_LINE = 'Reviewed by teachers';

async function walkHtml(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walkHtml(full)));
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out;
}

const problems = [];

// [1] Data-level: no resource file explicitly opts out of the blanket confirmation.
const resourceFiles = readdirSync(RESOURCES_DIR).filter((f) => f.endsWith('.md'));
let explicitFalseCount = 0;
for (const file of resourceFiles) {
  const raw = readFileSync(join(RESOURCES_DIR, file), 'utf-8');
  const fm = raw.split('---')[1] ?? '';
  if (/^reviewedByTeachers:\s*false\s*$/m.test(fm)) {
    explicitFalseCount++;
    problems.push(`[1] resource "${file}" explicitly sets reviewedByTeachers: false, which contradicts the owner's blanket teacher-review confirmation -- either this is a genuine, deliberately-recorded exception (confirm it's intentional and documented in docs/decision-log.md) or it's a mistake.`);
  }
}

// [2] Rendered-level: every built resource page visibly carries the trust line.
let resourcePagesChecked = 0;
const resourceDistDir = join(DIST, 'resources');
let resourceHtmlFiles = [];
try {
  resourceHtmlFiles = await walkHtml(resourceDistDir);
} catch {
  console.error(`Cannot read ${resourceDistDir} -- run \`npm run build\` first.`);
  process.exit(1);
}
for (const file of resourceHtmlFiles) {
  // Only individual resource detail pages (dist/resources/<slug>/index.html) --
  // excludes dist/resources/index.html itself, which is the listing page, not
  // a resource, and correctly has no per-resource trust line of its own.
  if (!file.endsWith('index.html') || file === join(resourceDistDir, 'index.html')) continue;
  resourcePagesChecked++;
  const html = await readFile(file, 'utf-8');
  if (!html.includes(TRUST_LINE)) {
    problems.push(`[2] ${file} does not render the visible "${TRUST_LINE}" trust line, even though the resource's reviewedByTeachers should default to true.`);
  }
}

// [3] No stale "review pending across the library" language on the editorial policy page.
const policyFile = join(DIST, 'legal', 'editorial-policy', 'index.html');
try {
  const policyHtml = await readFile(policyFile, 'utf-8');
  const staleMarkers = [
    'the great majority of resources are honestly labelled review-pending',
    'has not yet been through this separate second review',
  ];
  for (const marker of staleMarkers) {
    if (policyHtml.includes(marker)) {
      problems.push(`[3] ${policyFile} still contains stale review-pending language ("${marker}") -- update it to reflect the owner's blanket teacher-review confirmation.`);
    }
  }
  if (!policyHtml.includes(TRUST_LINE) && !policyHtml.includes('reviewed by teachers')) {
    problems.push(`[3] ${policyFile} does not state that all study resources are reviewed by teachers.`);
  }
} catch {
  problems.push(`[3] ${policyFile} not found in the build -- cannot verify editorial policy wording.`);
}

console.log('Review-coverage audit (Flagship Dominance/Trust programme)');
console.log(`  Resource source files checked: ${resourceFiles.length} (${explicitFalseCount} explicit reviewedByTeachers: false)`);
console.log(`  Built resource pages checked: ${resourcePagesChecked}`);

if (problems.length > 0) {
  console.error('\nReview-coverage audit FAILED:');
  for (const p of problems) console.error(`  ✗ ${p}`);
  console.error(`\n${problems.length} problem(s) found.`);
  process.exit(1);
}

console.log(`\nPASS: 0 problem(s) found. All ${resourceFiles.length} study resources resolve reviewedByTeachers to true, all ${resourcePagesChecked} built resource pages visibly render "${TRUST_LINE}", and the editorial policy page is consistent with the confirmation.`);
