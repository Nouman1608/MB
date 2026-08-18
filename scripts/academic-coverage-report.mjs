#!/usr/bin/env node
/**
 * ACADEMIC COVERAGE REPORT (v1.1) — reporting only. Never fails the build
 * and is not part of `npm run validate:academic`.
 *
 * For every ACTIVE combination in the master matrix, computes the exact
 * number of ELIGIBLE resources using the SAME filtering logic as the live
 * leaf page (src/pages/boards/[board]/[qualification]/[subject].astro):
 *
 *   - subject: matched via subjectBySlug(...).hubId, not the raw matrix
 *     subjectSlug (they diverge for e.g. english-language -> english)
 *   - level: matched via the qualificationSlug -> resource `level` mapping
 *     (igcse->igcse, o-level->o-levels, a-level->a-levels, gcse->gcse)
 *   - board: a resource counts only if it is board-agnostic (boards: [])
 *     or explicitly tagged with the combination's board — this mirrors the
 *     v1.0 WS7 fix that stops one board's resource leaking onto another
 *     board's page. A resource is never counted twice for the same
 *     combination, and a redirected/duplicate slug is not double-counted
 *     because resources are read once from disk by filename.
 *
 * Outputs:
 *   - overall / by-board / by-qualification / by-subject coverage %
 *   - the full zero-resource combination table
 *
 * Usage:
 *   node scripts/academic-coverage-report.mjs
 *   node scripts/academic-coverage-report.mjs --json   (machine-readable dump)
 */
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { execSync } from 'node:child_process';

const load = (file) => JSON.parse(execSync(
  `node --experimental-strip-types --no-warnings -e "` +
  `import('./${file}').then(m => process.stdout.write(JSON.stringify(m.default ?? m)))"`,
  { encoding: 'utf8', cwd: process.cwd() }));

const { MATRIX } = load('src/data/academic/matrix.ts');
const { SUBJECTS } = load('src/data/academic/subjects.ts');
const { BOARDS } = load('src/data/academic/boards.ts');
const { SYLLABUSES } = load('src/data/academic/syllabuses.ts');

const hubIdFor = (subjectSlug) =>
  SUBJECTS.find((s) => s.slug === subjectSlug)?.hubId ?? subjectSlug;

const boardNameFor = (slug) => BOARDS.find((b) => b.slug === slug)?.name ?? slug;

const LEVEL_FOR_QUALIFICATION = {
  igcse: 'igcse', 'o-level': 'o-levels', 'a-level': 'a-levels', gcse: 'gcse',
};

const scalarField = (fm, name) => {
  const m = fm.match(new RegExp(`^${name}:\\s*"?([A-Za-z0-9-]+)"?\\s*$`, 'm'));
  return m ? m[1] : undefined;
};
const listField = (fm, name) => {
  const m = fm.match(new RegExp(`^${name}:\\s*\\[(.*?)\\]`, 'm'));
  if (!m) return [];
  return m[1].split(',').map((v) => v.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
};
const dateField = (fm, name) => {
  const m = fm.match(new RegExp(`^${name}:\\s*"?(\\d{4}-\\d{2}-\\d{2})"?\\s*$`, 'm'));
  return m ? m[1] : undefined;
};

async function loadResources(dir, resourceKind) {
  let files = [];
  try { files = (await readdir(dir)).filter((f) => f.endsWith('.md')); } catch { return []; }
  const out = [];
  for (const file of files) {
    const raw = await readFile(join(dir, file), 'utf8');
    const fm = raw.split('---')[1] ?? '';
    const subject = scalarField(fm, 'subject');
    const resourceType = scalarField(fm, 'resourceType');
    const level = listField(fm, 'level');
    const boards = listField(fm, 'boards');
    const publishedDate = dateField(fm, 'publishedDate');
    const updatedDate = dateField(fm, 'updatedDate');
    out.push({
      file: `${dir}/${file}`,
      slug: file.replace(/\.md$/, ''),
      kind: resourceKind,
      subject,
      resourceType,
      level,
      boards,
      publishedDate,
      updatedDate,
    });
  }
  return out;
}

// Only the `resources` collection is a "dedicated learning resource" per
// the v1.1 spec (Section 3) — `articles` are general study-skills content,
// deliberately not board/qualification-scoped, and explicitly excluded
// from "eligible resource" counting so a generic article never masks a
// genuine zero-resource combination.
const resources = await loadResources('src/content/resources', 'resource');

function eligibleFor(combo) {
  const hubId = hubIdFor(combo.subjectSlug);
  const levelKey = LEVEL_FOR_QUALIFICATION[combo.qualificationSlug];
  return resources.filter((r) =>
    r.subject === hubId &&
    r.level.includes(levelKey) &&
    (r.boards.length === 0 || r.boards.includes(combo.boardSlug)),
  );
}

const active = MATRIX.filter((c) => c.marlbridgeStatus === 'ACTIVE');

const rows = active.map((c) => {
  const eligible = eligibleFor(c);
  const syllabus = SYLLABUSES.find(
    (s) => s.boardSlug === c.boardSlug && s.qualificationSlug === c.qualificationSlug && s.subjectSlug === c.subjectSlug,
  );
  const dates = eligible.map((r) => r.updatedDate || r.publishedDate).filter(Boolean).sort();
  return {
    board: c.boardSlug,
    boardName: boardNameFor(c.boardSlug),
    qualification: c.qualificationSlug,
    subject: c.subjectSlug,
    code: c.qualificationCode ?? '',
    eligibleCount: eligible.length,
    resourceTypes: [...new Set(eligible.map((r) => r.resourceType))].sort(),
    earliestReview: dates[0] ?? null,
    latestReview: dates[dates.length - 1] ?? null,
    hasSyllabusSummary: Boolean(syllabus),
    isZeroResource: eligible.length === 0,
    files: eligible.map((r) => r.slug),
  };
});

const zero = rows.filter((r) => r.isZeroResource);
const covered = rows.filter((r) => !r.isZeroResource);

function pct(n, d) { return d === 0 ? '0.0' : ((n / d) * 100).toFixed(1); }

function groupBy(list, key) {
  const map = new Map();
  for (const r of list) {
    const k = r[key];
    if (!map.has(k)) map.set(k, []);
    map.get(k).push(r);
  }
  return map;
}

const args = process.argv.slice(2);
if (args.includes('--json')) {
  console.log(JSON.stringify({ total: rows.length, covered: covered.length, zero: zero.length, rows }, null, 2));
  process.exit(0);
}

console.log('='.repeat(78));
console.log('MARLBRIDGE ACADEMIC COVERAGE REPORT (v1.1)');
console.log('Generated from the working tree — board+qualification+subject exact match.');
console.log('='.repeat(78));
console.log(`\nTotal ACTIVE combinations: ${rows.length}`);
console.log(`Covered (>=1 eligible resource): ${covered.length} (${pct(covered.length, rows.length)}%)`);
console.log(`Zero-resource: ${zero.length} (${pct(zero.length, rows.length)}%)`);

console.log('\n--- By board ---');
for (const [board, list] of [...groupBy(rows, 'boardName')].sort()) {
  const cov = list.filter((r) => !r.isZeroResource).length;
  console.log(`  ${board}: ${cov}/${list.length} covered (${pct(cov, list.length)}%)`);
}

console.log('\n--- By qualification ---');
for (const [ql, list] of [...groupBy(rows, 'qualification')].sort()) {
  const cov = list.filter((r) => !r.isZeroResource).length;
  console.log(`  ${ql}: ${cov}/${list.length} covered (${pct(cov, list.length)}%)`);
}

console.log('\n--- By subject ---');
for (const [subj, list] of [...groupBy(rows, 'subject')].sort()) {
  const cov = list.filter((r) => !r.isZeroResource).length;
  console.log(`  ${subj}: ${cov}/${list.length} covered (${pct(cov, list.length)}%)`);
}

console.log(`\n--- Zero-resource combinations (${zero.length}) ---`);
for (const r of zero.sort((a, b) => (a.subject + a.board + a.qualification).localeCompare(b.subject + b.board + b.qualification))) {
  console.log(`  ${r.boardName} ${r.qualification} ${r.subject}${r.code ? ' (' + r.code + ')' : ''}` +
    ` — syllabus summary: ${r.hasSyllabusSummary ? 'yes' : 'no'}`);
}

console.log('\n' + '='.repeat(78));
console.log('Reporting tool only — does not fail the build, not run by npm run validate:academic.');
