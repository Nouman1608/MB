#!/usr/bin/env node
/**
 * Academic QA integrity gate (D-454, 15 Nov 2026). Part of validate:academic,
 * so it runs before every build.
 *
 * The register docs/reports/academic-qa/assessments.json holds rubric
 * assessments (src/utils/academic/qa-rubric.ts, rubric v1.0.0). This script
 * fails the build on integrity problems only -- owner decision 15 Nov 2026,
 * "integrity now, coverage later":
 *
 *   [Q1] every record passes validateAssessment(): known rubric version and
 *        method, evidence and reasoning beside every score, no stored total,
 *        all ten checks recorded, closed hard-stop codes, a human assessor
 *        is a covering isReviewer profile with evidence, an AI-assisted one
 *        says so, sources on the board's official domain, sane dates.
 *   [Q2] the record names an existing resource; ids are unique.
 *   [Q3] GATE: the newest assessment of a resource, for its CURRENT content
 *        (same sha256), has no open hard-stop finding. A page with an open
 *        hard-stop cannot be deployed; fix it or unpublish it (draft).
 *   [Q9] internal only: no page, component or layout imports the rubric or
 *        the register -- QA findings are not published to students.
 *
 * Reported, not failed (QA_GATE.newResourceAssessment.mode = "report"):
 *   [R1] resources published on/after the activation date with no
 *        assessment (no date set yet, so this prints the rule's status).
 *   [R2] assessments whose resource changed afterwards (reverification).
 *
 * Usage: node --experimental-strip-types scripts/validate-academic-qa.mjs
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { validateAssessment, openHardStops, latest, QA_GATE, RUBRIC_VERSION } from '../src/utils/academic/qa-rubric.ts';
import { subjectCovered } from '../src/utils/content/subject-match.mjs';
import { loadResources, loadAuthors, loadJson, ASSESSMENTS_FILE, BOARD_DOMAINS, todayUtc } from './lib/academic-qa-data.mjs';

const problems = [];
const notes = [];
const resources = new Map(loadResources().map((r) => [r.slug, r]));
const authors = loadAuthors();
const register = loadJson(ASSESSMENTS_FILE, null);
if (!register || !Array.isArray(register.results)) {
  console.error(`✗ ${ASSESSMENTS_FILE} is missing or has no "results" array.`);
  process.exit(1);
}
const today = todayUtc();

// [Q1] [Q2]
const ids = new Set();
const byResource = new Map();
for (const a of register.results) {
  if (ids.has(a.id)) problems.push(`[Q2] duplicate assessment id ${a.id}.`);
  ids.add(a.id);
  const res = resources.get(a.resource);
  if (!res) { problems.push(`[Q2] ${a.id}: no resource "${a.resource}" in src/content/resources/.`); continue; }
  for (const p of validateAssessment(a, { resource: res, reviewers: authors, subjectCovered, officialDomains: BOARD_DOMAINS, today })) problems.push(`[Q1] ${p}`);
  if (!byResource.has(a.resource)) byResource.set(a.resource, []);
  byResource.get(a.resource).push(a);
}

// [Q3] the gate, and [R2] reverification.
let stale = 0;
for (const [slug, list] of byResource) {
  const a = latest(list);
  const res = resources.get(slug);
  if (a.contentSha256 !== res.sha256) { stale++; notes.push(`[R2] ${slug}: changed since ${a.id} (${a.date}); reassess.`); continue; }
  for (const f of openHardStops(a)) {
    problems.push(`[Q3] ${slug}: open hard-stop ${f.hardStop} in ${a.id} ${f.id} (${f.location}): ${f.description}. Fix the page and record a new assessment, or set draft: true.`);
  }
}

// [Q9] internal only.
const walk = (dir) => readdirSync(dir).flatMap((n) => { const p = join(dir, n); return statSync(p).isDirectory() ? walk(p) : [p]; });
for (const file of ['src/pages', 'src/components', 'src/layouts'].flatMap((d) => walk(d))) {
  if (!/\.(astro|ts|tsx|js|mjs|md|mdx)$/.test(file)) continue;
  const t = readFileSync(file, 'utf8');
  if (/qa-rubric|academic-qa\/|assessments\.json/.test(t)) problems.push(`[Q9] ${file.replace(/\\/g, '/')} references the internal QA rubric or register; QA findings are not published.`);
}

// [R1] coverage gate status.
const act = QA_GATE.newResourceAssessment.activationDate;
if (QA_GATE.newResourceAssessment.mode === 'report' || !act) {
  notes.push(`[R1] new-resource assessment gate: ${QA_GATE.newResourceAssessment.mode}${act ? ` from ${act}` : ', no activation date set (owner decision pending)'}.`);
}
if (act) {
  const missing = [...resources.values()].filter((r) => !r.draft && r.publishedDate >= act && !byResource.has(r.slug));
  const line = `[R1] ${missing.length} resource(s) published on/after ${act} have no rubric assessment.`;
  if (QA_GATE.newResourceAssessment.mode === 'enforce') for (const r of missing) problems.push(`[R1] ${r.slug}: published ${r.publishedDate}, no rubric assessment.`);
  else notes.push(line);
}

console.log(`Academic QA gate (rubric ${RUBRIC_VERSION}): ${register.results.length} assessment record(s) for ${byResource.size} resource(s); ${stale} need reassessment.`);
for (const n of notes) console.log(`  · ${n}`);
if (problems.length) {
  console.error(`\n✗ ${problems.length} academic QA integrity problem(s):`);
  for (const p of problems) console.error(`  ${p}`);
  process.exit(1);
}
console.log('✓ Academic QA integrity: no unevidenced score, no fabricated approval, no open hard-stop on current content.');
