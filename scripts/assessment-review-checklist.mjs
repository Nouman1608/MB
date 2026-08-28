#!/usr/bin/env node
/**
 * ASSESSMENT REVIEW CHECKLIST — reporting only. Never fails the build and
 * is not part of `npm run validate:academic`.
 *
 * v2.0 MEGA PROGRAMME WS17 -- documentation + review tooling.
 *
 * Every record in src/data/academic/assessments.ts was verified by an AI
 * agent against a cited officialSourceUrl at the time noted in its
 * `verifiedOn` field (see src/pages/legal/editorial-policy.astro's
 * "Responsible use of AI" section: academic facts are always checked
 * against the awarding body's own source before publication, but that is
 * a point-in-time check, not a standing guarantee -- boards revise
 * specifications, sometimes with no public announcement beyond a dated
 * PDF reissue). This script exists to make re-verification tractable at
 * this dataset's now-real size (144 records across 6 boards as of WS11)
 * by surfacing, in one place, every record's source, verification date,
 * and how long ago that was -- so a human reviewer (or a future session)
 * can prioritise a re-check pass without re-deriving this list by reading
 * a 3,000+ line file by hand.
 *
 * "Stale" here is a maintenance signal, not a validator failure: a record
 * older than STALE_AFTER_DAYS is still presumed correct (boards don't
 * revise every specification every year) -- it just hasn't been
 * re-confirmed against the live source recently and is a reasonable place
 * to start a spot-check pass.
 *
 * Usage:
 *   node --experimental-strip-types scripts/assessment-review-checklist.mjs
 *   node --experimental-strip-types scripts/assessment-review-checklist.mjs --board=aqa
 *   node --experimental-strip-types scripts/assessment-review-checklist.mjs --stale-only
 */
import { execSync } from 'node:child_process';

const STALE_AFTER_DAYS = 180;

const load = (file) => JSON.parse(execSync(
  `node --experimental-strip-types --no-warnings -e "` +
  `import('./${file}').then(m => process.stdout.write(JSON.stringify(m.default ?? m)))"`,
  { encoding: 'utf8', cwd: process.cwd() }));

const { ASSESSMENTS } = load('src/data/academic/assessments.ts');

const boardArg = process.argv.find((a) => a.startsWith('--board='));
const filterBoard = boardArg ? boardArg.split('=')[1] : null;
const staleOnly = process.argv.includes('--stale-only');

const daysSince = (dateStr) => {
  const then = new Date(dateStr);
  if (Number.isNaN(then.getTime())) return null;
  return Math.floor((Date.now() - then.getTime()) / 86_400_000);
};

const boardSlugs = [...new Set(ASSESSMENTS.map((a) => a.boardSlug))].sort();

console.log('='.repeat(78));
console.log('ASSESSMENT RECORD REVIEW CHECKLIST');
console.log(`Generated from the working tree — not a stored snapshot. Stale threshold: ${STALE_AFTER_DAYS} days.`);
console.log('='.repeat(78));

let totalListed = 0;
let totalStale = 0;
const specStatusCounts = {};

for (const board of boardSlugs) {
  if (filterBoard && board !== filterBoard) continue;
  const records = ASSESSMENTS.filter((a) => a.boardSlug === board)
    .slice()
    .sort((a, b) => (a.qualificationSlug + a.subjectSlug + a.code).localeCompare(b.qualificationSlug + b.subjectSlug + b.code));

  const rows = records.map((a) => {
    const age = daysSince(a.verifiedOn);
    const isStale = age !== null && age > STALE_AFTER_DAYS;
    if (isStale) totalStale += 1;
    specStatusCounts[a.specStatus] = (specStatusCounts[a.specStatus] ?? 0) + 1;
    return { a, age, isStale };
  }).filter((r) => !staleOnly || r.isStale);

  if (rows.length === 0) continue;
  totalListed += rows.length;

  console.log(`\n${board.toUpperCase()} (${rows.length} record${rows.length === 1 ? '' : 's'})`);
  for (const { a, age, isStale } of rows) {
    const staleTag = isStale ? '  [DUE FOR RE-CHECK]' : '';
    const relatedTag = a.relatedCode ? `  related:${a.relatedCode}` : '';
    console.log(`  ${a.qualificationSlug}/${a.subjectSlug} ${a.code} [${a.specStatus}]${relatedTag}  ${a.components.length} component(s)  verified ${a.verifiedOn} (${age ?? '?'}d ago)${staleTag}`);
    console.log(`    source: ${a.officialSourceUrl}`);
  }
}

console.log(`\n${'='.repeat(78)}`);
console.log(`${totalListed} record(s) listed across ${boardSlugs.length} board(s). ${totalStale} record(s) due for re-check (>${STALE_AFTER_DAYS}d since verifiedOn).`);
console.log(`By specStatus: ${Object.entries(specStatusCounts).map(([k, v]) => `${k}=${v}`).join(', ')}`);
console.log('Reporting tool only — does not fail the build, not run by npm run validate:academic.');
