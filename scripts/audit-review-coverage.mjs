#!/usr/bin/env node
/**
 * Review-coverage safeguard (originally Flagship Dominance/Trust programme,
 * 2026-08-31, docs/decision-log.md D-092; RESCINDED by explicit owner
 * decision 2026-09-05, docs/decision-log.md D-134).
 *
 * D-092 had the owner confirm, as a blanket editorial fact, that every
 * published study resource on Marlbridge had been reviewed by a teacher,
 * rendered site-wide as the unattributed trust line "Reviewed by teachers".
 * D-134 rescinded that: the owner decided no blanket or non-attributed
 * review claim should be made or required. `reviewedByTeachers`
 * (src/content.config.ts, resources collection) now defaults false and the
 * trust line was removed from src/pages/resources/[slug].astro.
 *
 * This script's job flipped with that decision: it used to assert the
 * claim WAS present everywhere; it now guards against the retired claim
 * ever silently reappearing (a template regression, a copy-pasted string,
 * or a resource file explicitly opting back in without a documented
 * decision). It is DELIBERATELY separate from the stricter QIGT
 * `reviewStatus`/`reviewer` system (scripts/validate-review-integrity.mjs),
 * which still gates the more specific named-reviewer byline and schema.org
 * `editor` claim and is untouched by either D-092 or D-134.
 *
 * Reads the BUILT site (run `npm run build` first, same convention as the
 * other dist-dependent audits in this repo) and checks:
 *
 *   [1] Data-level: no src/content/resources/*.md file explicitly sets
 *       reviewedByTeachers: true -- that would silently reintroduce a
 *       blanket-style claim on an individual resource without the
 *       documented, specific exception this field is now reserved for.
 *   [2] Rendered-level: no built dist/resources/<slug>/index.html contains
 *       the retired trust line "Reviewed by teachers" -- catches a
 *       template regression reintroducing it (same reasoning as
 *       scripts/validate-rendered-academic-labels.mjs).
 *   [3] The editorial policy page (/legal/editorial-policy/) does not
 *       restate the rescinded blanket claim ("All Marlbridge study
 *       resources are reviewed by teachers" / the retired trust line), and
 *       does not go silent on review policy entirely.
 *
 * Negative-tested by scripts/test-negative-validation-suite.mjs ([AA]): a
 * built resource page has the retired trust line reintroduced, this script
 * is confirmed to fail with a specific diagnostic, then the file is
 * restored byte-for-byte.
 *
 * Run via `npm run audit:review-coverage`, wired into `npm run audit:all`.
 */
import { readdir, readFile } from 'node:fs/promises';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const RESOURCES_DIR = 'src/content/resources';
const RETIRED_TRUST_LINE = 'Reviewed by teachers';

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

// [1] Data-level: no resource file has silently opted back into the retired blanket claim.
const resourceFiles = readdirSync(RESOURCES_DIR).filter((f) => f.endsWith('.md'));
let explicitTrueCount = 0;
for (const file of resourceFiles) {
  const raw = readFileSync(join(RESOURCES_DIR, file), 'utf-8');
  const fm = raw.split('---')[1] ?? '';
  if (/^reviewedByTeachers:\s*true\s*$/m.test(fm)) {
    explicitTrueCount++;
    problems.push(`[1] resource "${file}" explicitly sets reviewedByTeachers: true, reintroducing the blanket teacher-review claim the owner rescinded (docs/decision-log.md D-134) -- either this is a genuine, deliberately-recorded exception (confirm it's intentional and documented in docs/decision-log.md) or it's a mistake.`);
  }
}

// [2] Rendered-level: no built resource page has the retired trust line reintroduced.
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
  // excludes dist/resources/index.html itself, which is the listing page.
  if (!file.endsWith('index.html') || file === join(resourceDistDir, 'index.html')) continue;
  resourcePagesChecked++;
  const html = await readFile(file, 'utf-8');
  if (html.includes(RETIRED_TRUST_LINE)) {
    problems.push(`[2] ${file} renders the retired "${RETIRED_TRUST_LINE}" trust line, which the owner's D-134 decision rescinded -- this looks like a template regression.`);
  }
}

// [3] The editorial policy page doesn't restate the rescinded blanket claim, and isn't silent on review policy.
const policyFile = join(DIST, 'legal', 'editorial-policy', 'index.html');
try {
  const policyHtml = await readFile(policyFile, 'utf-8');
  const staleMarkers = [
    'All Marlbridge study resources are reviewed by teachers',
    RETIRED_TRUST_LINE,
  ];
  for (const marker of staleMarkers) {
    if (policyHtml.includes(marker)) {
      problems.push(`[3] ${policyFile} still contains the rescinded blanket claim ("${marker}") -- update it to reflect the owner's D-134 decision.`);
    }
  }
  if (!policyHtml.includes('Academic review policy') && !policyHtml.includes('academic-review-policy')) {
    problems.push(`[3] ${policyFile} appears to have no academic review policy section at all.`);
  }
} catch {
  problems.push(`[3] ${policyFile} not found in the build -- cannot verify editorial policy wording.`);
}

console.log('Review-coverage audit (guards against the D-092 blanket claim reappearing after D-134)');
console.log(`  Resource source files checked: ${resourceFiles.length} (${explicitTrueCount} explicit reviewedByTeachers: true)`);
console.log(`  Built resource pages checked: ${resourcePagesChecked}`);

if (problems.length > 0) {
  console.error('\nReview-coverage audit FAILED:');
  for (const p of problems) console.error(`  ✗ ${p}`);
  console.error(`\n${problems.length} problem(s) found.`);
  process.exit(1);
}

console.log(`\nPASS: 0 problem(s) found. No study resource reintroduces the rescinded reviewedByTeachers: true claim, no built resource page renders the retired "${RETIRED_TRUST_LINE}" trust line, and the editorial policy page reflects the owner's D-134 decision.`);
