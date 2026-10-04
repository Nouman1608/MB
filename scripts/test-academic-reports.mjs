#!/usr/bin/env node
/**
 * Regression tests for the canonical academic reports (post-audit
 * remediation, 4 Oct 2026, D-386). npm run test:reports.
 *
 * Positive checks on the committed state:
 *   [R1] the coverage report's Markdown, JSON and CSV have the same rows and
 *        the same totals, and the totals match the repository itself;
 *   [R2] reviewer and review-date fields are re-derived independently from
 *        resource frontmatter and must match the report exactly (lastTeacher
 *        Credit is a real reviewedDate, never a publication date);
 *   [R3] the ledger has exactly one row per resource file, unique slugs;
 *   [R4] both generators' --check modes pass (committed files are current);
 *   [R5] no stale hard-coded totals (141/160, 782 resources) remain in the
 *        README or the canonical report.
 * Negative fixtures (each mutates real files, runs the real generator or
 * checker, asserts the expected failure, then restores every touched file
 * byte-for-byte and verifies the restore):
 *   [N1] a new resource not in the reports -> both --check modes fail;
 *   [N2] a resource marked reviewed with no reviewer -> ledger structural FAIL;
 *   [N3] a verification record for a resource that does not exist -> ledger
 *        integrity failure;
 *   [N4] a reviewer credit added to a resource -> the regenerated report
 *        names that reviewer and takes lastTeacherCredit from its
 *        reviewedDate, while a later publishedDate does not move it.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync, unlinkSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { createHash } from 'node:crypto';

let passed = 0;
let failed = 0;
const ok = (m) => { console.log(`  ✓ ${m}`); passed++; };
const bad = (m) => { console.log(`  ✗ ${m}`); failed++; };
const check = (cond, m) => (cond ? ok(m) : bad(m));
const run = (cmd) => {
  try { return { code: 0, out: execSync(cmd, { stdio: 'pipe', encoding: 'utf8', maxBuffer: 1024 * 1024 * 64 }) }; }
  catch (e) { return { code: e.status ?? 1, out: (e.stdout ?? '') + (e.stderr ?? '') }; }
};
const sha = (p) => createHash('sha256').update(readFileSync(p)).digest('hex');

const COV = { md: 'docs/reports/academic-coverage-current.md', json: 'docs/reports/academic-coverage-current.json', csv: 'docs/reports/academic-coverage-current.csv' };
const LEDGER = { csv: 'docs/reports/academic-review/ledger.csv', json: 'docs/reports/academic-review/ledger.json', md: 'docs/reports/academic-review/ledger-summary.md', queue: 'docs/reports/academic-review/signoff-queue.md' };
const COV_CMD = 'node scripts/academic-coverage-report-v2.mjs';
const LEDGER_CMD = 'node --experimental-strip-types --no-warnings scripts/academic-review-ledger.mjs';
const RES = 'src/content/resources';

/** Minimal RFC-4180 CSV parser (quoted fields, doubled quotes, embedded newlines). */
function parseCsv(text) {
  const rows = []; let row = []; let field = ''; let q = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (q) {
      if (ch === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (ch === '"') q = false;
      else field += ch;
    } else if (ch === '"') q = true;
    else if (ch === ',') { row.push(field); field = ''; }
    else if (ch === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
    else field += ch;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  const [head, ...body] = rows;
  return body.map((r) => Object.fromEntries(head.map((h, i) => [h, r[i]])));
}

/** Run fn with the given files backed up; restore byte-for-byte afterwards and verify. */
function withRestore(paths, label, fn) {
  const saved = new Map(paths.map((p) => [p, existsSync(p) ? readFileSync(p) : null]));
  const hashes = new Map(paths.map((p) => [p, existsSync(p) ? sha(p) : null]));
  try { fn(); }
  catch (e) { bad(`${label}: threw ${e.message}`); }
  finally {
    for (const [p, buf] of saved) { if (buf === null) { if (existsSync(p)) unlinkSync(p); } else writeFileSync(p, buf); }
    const restored = [...hashes].every(([p, h]) => (h === null ? !existsSync(p) : sha(p) === h));
    check(restored, `${label}: every touched file restored byte-for-byte`);
  }
}

const fmOf = (raw) => raw.split('---')[1] ?? '';
const scalar = (fm, k) => (fm.match(new RegExp(`^${k}:\\s*"?([^"\\n]+)"?\\s*$`, 'm')) || [])[1] ?? '';
const resourceFiles = readdirSync(RES).filter((f) => f.endsWith('.md')).sort();

console.log('Academic report regression tests\n');

// --------------------------------------------------------------------- R1
console.log('[R1] Coverage report: Markdown, JSON and CSV agree, and match the repository');
const covJson = JSON.parse(readFileSync(COV.json, 'utf8'));
const covCsv = parseCsv(readFileSync(COV.csv, 'utf8'));
const covMd = readFileSync(COV.md, 'utf8');
const mdComboRows = (covMd.split('## Every combination')[1] ?? '').split('\n').filter((l) => /^\| (?!Board |---)/.test(l));
check(covJson.rows.length === covJson.rowCount, `JSON rowCount (${covJson.rowCount}) equals JSON rows (${covJson.rows.length})`);
check(covCsv.length === covJson.rows.length, `CSV rows (${covCsv.length}) equal JSON rows (${covJson.rows.length})`);
check(mdComboRows.length === covJson.rows.length, `Markdown combination rows (${mdComboRows.length}) equal JSON rows (${covJson.rows.length})`);
const sum = (rows, k) => rows.reduce((s, r) => s + Number(r[k]), 0);
check(sum(covCsv, 'totalResourceCount') === sum(covJson.rows, 'totalResourceCount'), 'CSV and JSON per-combination resource totals agree');
check(sum(covCsv, 'reviewPendingCount') === sum(covJson.rows, 'reviewPendingCount'), 'CSV and JSON review-pending totals agree');
const t = covJson.totals;
check(t.sourceResources === resourceFiles.length, `source resources (${t.sourceResources}) equal resource files on disk (${resourceFiles.length})`);
check(covMd.includes(`| Source resources | ${t.sourceResources} |`), 'Markdown source-resource total equals JSON');
check(covMd.includes(`| Active board × qualification × subject combinations | ${t.activeCombinations} |`), 'Markdown active-combination total equals JSON');
for (const [k, v] of Object.entries(t.assessment)) check(covMd.includes(`| ${k} | ${v} |`), `Markdown assessment ${k} (${v}) equals JSON`);
for (const [k, v] of Object.entries(t.reviewStatus)) check(covMd.includes(`| ${k} | ${v} |`), `Markdown reviewStatus ${k} (${v}) equals JSON`);
const csvComplete = covCsv.filter((r) => r.assessmentCompleteness === 'VERIFIED_COMPLETE').length;
check(csvComplete === t.assessment.VERIFIED_COMPLETE, `CSV VERIFIED_COMPLETE count (${csvComplete}) equals JSON total`);
const diskStatus = {};
for (const f of resourceFiles) { const s = scalar(fmOf(readFileSync(`${RES}/${f}`, 'utf8')), 'reviewStatus') || 'review-pending'; diskStatus[s] = (diskStatus[s] ?? 0) + 1; }
check(JSON.stringify(Object.fromEntries(Object.entries(diskStatus).sort())) === JSON.stringify(t.reviewStatus), 'review-status totals equal a fresh count of resource frontmatter');

// --------------------------------------------------------------------- R2
console.log('\n[R2] Reviewer and review-date fields are derived, not hard-coded');
check(!covJson.rows.some((r) => 'namedReviewer' in r), 'the old hard-coded namedReviewer column is gone');
check(covJson.rows.every((r) => !('lastReview' in r)), 'the old publication-date "lastReview" column is gone');
// Independent derivation, mirroring the report's documented eligibility rule.
const subjects = JSON.parse(execSync(`node --experimental-strip-types --no-warnings -e "import('./src/data/academic/subjects.ts').then(m=>process.stdout.write(JSON.stringify(m.SUBJECTS)))"`, { encoding: 'utf8' }));
const hubOf = new Map(subjects.map((s) => [s.slug, s.hubId ?? s.slug]));
const LEVEL = { igcse: 'igcse', 'o-level': 'o-levels', gcse: 'gcse', 'as-level': 'a-levels', 'a-level': 'a-levels', 'ib-dp': 'ib', 'ib-myp': 'ib' };
const res = resourceFiles.map((f) => {
  const fm = fmOf(readFileSync(`${RES}/${f}`, 'utf8'));
  const arr = (k) => ((fm.match(new RegExp(`^${k}:\\s*\\[([^\\]]*)\\]`, 'm')) || [])[1] ?? '').split(',').map((s) => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
  return { subject: scalar(fm, 'subject'), boards: arr('boards'), levels: arr('level'), reviewer: scalar(fm, 'reviewer'), status: scalar(fm, 'reviewStatus') || 'review-pending', reviewedDate: scalar(fm, 'reviewedDate'), published: scalar(fm, 'updatedDate') || scalar(fm, 'publishedDate') };
});
let reviewerMismatch = 0; let dateMismatch = 0; let pubLeak = 0;
for (const row of covJson.rows) {
  const elig = res.filter((r) => r.subject === (hubOf.get(row.subjectSlug) ?? row.subjectSlug) && r.levels.includes(LEVEL[row.qualificationSlug]) && (r.boards.length === 0 || r.boards.includes(row.boardSlug)));
  const credited = elig.filter((r) => r.status === 'reviewed');
  const names = new Set(credited.map((r) => r.reviewer || 'MISSING_REVIEWER'));
  const reported = row.namedReviewers === 'NO_DATA' ? new Set() : new Set(row.namedReviewers.split('; ').map((x) => x.replace(/ \(\d+\)$/, '')));
  if (names.size !== reported.size || [...names].some((n) => !reported.has(n))) reviewerMismatch++;
  const dates = credited.map((r) => r.reviewedDate).filter(Boolean).sort();
  const expect = dates.length ? dates[dates.length - 1] : 'NO_DATA';
  if (row.lastTeacherCredit !== expect) dateMismatch++;
  if (row.lastTeacherCredit !== 'NO_DATA' && !credited.some((r) => r.reviewedDate === row.lastTeacherCredit)) pubLeak++;
}
check(reviewerMismatch === 0, `namedReviewers matches an independent derivation for every combination (${reviewerMismatch} mismatch)`);
check(dateMismatch === 0, `lastTeacherCredit equals the latest real reviewedDate for every combination (${dateMismatch} mismatch)`);
check(pubLeak === 0, 'every lastTeacherCredit is an actual reviewedDate of a credited resource');

// --------------------------------------------------------------------- R3
console.log('\n[R3] Ledger completeness');
const ledger = parseCsv(readFileSync(LEDGER.csv, 'utf8'));
const ledgerSlugs = ledger.map((r) => r.slug);
const dupes = ledgerSlugs.filter((s, i) => ledgerSlugs.indexOf(s) !== i);
const fileSlugs = resourceFiles.map((f) => f.replace(/\.md$/, ''));
check(ledger.length === fileSlugs.length, `ledger rows (${ledger.length}) equal resource files (${fileSlugs.length})`);
check(dupes.length === 0, `no duplicate ledger rows (${dupes.length})`);
check(fileSlugs.every((s) => ledgerSlugs.includes(s)), 'every resource file has a ledger row');
const pendingRows = ledger.filter((r) => r.reviewStatus !== 'reviewed');
check(pendingRows.every((r) => r.verificationRecord && r.outcome.startsWith('REPO_')), 'every review-pending resource has a repository-side verification result');
check(ledger.filter((r) => r.reviewStatus === 'reviewed').every((r) => r.outcome === 'TEACHER_CREDITED'), 'every reviewed resource is reported as a teacher credit, not as a line-by-line review');
check(pendingRows.every((r) => !r.reviewer && !r.reviewedDate), 'no review-pending resource carries a reviewer or a review date');
const ledgerJson = JSON.parse(readFileSync(LEDGER.json, 'utf8'));
check(ledgerJson.rowCount === ledger.length && ledgerJson.totals.resources === ledger.length, 'ledger.json totals match ledger.csv rows');

// --------------------------------------------------------------------- R4
console.log('\n[R4] Committed reports are current');
check(run(`${COV_CMD} --check`).code === 0, 'coverage:academic-v2 --check passes');
check(run(`${LEDGER_CMD} --check`).code === 0, 'check:review-ledger passes');

// --------------------------------------------------------------------- R5
console.log('\n[R5] No stale hard-coded totals');
const readme = readFileSync('README.md', 'utf8');
check(!/141\s*\/\s*160/.test(readme), 'README no longer claims 141/160 assessment coverage');
check(!/\b782\b/.test(covMd) && !/141\s*\/\s*160/.test(covMd), 'canonical coverage report carries no stale 782 / 141-of-160 figures');

// --------------------------------------------------------------------- N1
console.log('\n[N1] A resource missing from the reports is caught');
const sample = resourceFiles.find((f) => /practice\.md$/.test(f));
const tmpRes = `${RES}/zz-report-test-temporary-resource.md`;
withRestore([tmpRes], 'N1', () => {
  writeFileSync(tmpRes, readFileSync(`${RES}/${sample}`));
  const c = run(`${COV_CMD} --check`);
  check(c.code !== 0 && /out of date/.test(c.out), 'coverage --check fails when a resource is added without regenerating');
  const l = run(`${LEDGER_CMD} --check`);
  check(l.code !== 0 && /out of date/.test(l.out), 'ledger --check fails when a resource is missing from the ledger');
});

// --------------------------------------------------------------------- N2
console.log('\n[N2] Missing reviewer on a "reviewed" resource is caught');
const pendingFile = resourceFiles.find((f) => !/^reviewStatus:/m.test(fmOf(readFileSync(`${RES}/${f}`, 'utf8'))));
withRestore([`${RES}/${pendingFile}`], 'N2', () => {
  const raw = readFileSync(`${RES}/${pendingFile}`, 'utf8');
  writeFileSync(`${RES}/${pendingFile}`, raw.replace(/^(publishedDate:.*)$/m, '$1\nreviewStatus: "reviewed"'));
  const l = run(`${LEDGER_CMD} --check`);
  check(l.code !== 0 && l.out.includes('reviewed-without-reviewer'), 'ledger reports reviewed-without-reviewer as a structural FAIL');
  check(l.out.includes('reviewed-without-date'), 'and reviewed-without-date');
});

// --------------------------------------------------------------------- N3
console.log('\n[N3] A verification record for a non-existent resource is caught');
const recFile = readdirSync('docs/reports/academic-review').find((f) => /^pending-review-.*\.json$/.test(f));
const recPath = `docs/reports/academic-review/${recFile}`;
withRestore([recPath], 'N3', () => {
  const d = JSON.parse(readFileSync(recPath, 'utf8'));
  d.results.push({ ...d.results[0], slug: 'zz-no-such-resource' });
  writeFileSync(recPath, JSON.stringify(d, null, 2) + '\n');
  const l = run(`${LEDGER_CMD} --check`);
  check(l.code !== 0 && l.out.includes('verification record for a resource that no longer exists: zz-no-such-resource'), 'ledger integrity failure names the orphan record');
});

// --------------------------------------------------------------------- N4
console.log('\n[N4] Reviewer credit is derived from frontmatter; publication dates never become review dates');
const authors = readdirSync('src/content/authors').filter((f) => f.endsWith('.md')).map((f) => ({ slug: f.replace(/\.md$/, ''), fm: fmOf(readFileSync(`src/content/authors/${f}`, 'utf8')) }));
const designated = authors.find((a) => /^isReviewer:\s*true/m.test(a.fm));
const target = covJson.rows.find((r) => r.reviewPendingCount > 0 && r.lastTeacherCredit !== 'NO_DATA' && r.lastTeacherCredit < '2026-10-04');
const targetFile = resourceFiles.find((f) => {
  const fm = fmOf(readFileSync(`${RES}/${f}`, 'utf8'));
  const boards = (fm.match(/^boards:\s*\[(.*)\]/m) || [])[1] ?? '';
  return !/^reviewStatus:/m.test(fm) && scalar(fm, 'subject') === (hubOf.get(target.subjectSlug) ?? target.subjectSlug) && boards.includes(target.boardSlug) && fm.includes(`"${LEVEL[target.qualificationSlug]}"`);
});
withRestore([`${RES}/${targetFile}`, COV.md, COV.json, COV.csv], 'N4', () => {
  const raw = readFileSync(`${RES}/${targetFile}`, 'utf8');
  // A reviewer credit dated 2026-10-04, and a much later publication date.
  writeFileSync(`${RES}/${targetFile}`, raw
    .replace(/^publishedDate:.*$/m, 'publishedDate: 2026-10-04\nupdatedDate: 2026-12-31')
    .replace(/^(author:.*)$/m, `$1\nreviewer: "${designated.slug}"\nreviewStatus: "reviewed"\nreviewedDate: 2026-10-04`));
  run(COV_CMD);
  const after = JSON.parse(readFileSync(COV.json, 'utf8')).rows.find((r) => r.boardSlug === target.boardSlug && r.qualificationSlug === target.qualificationSlug && r.subjectSlug === target.subjectSlug);
  check(after.namedReviewers.includes(designated.slug), `report names the added reviewer (${designated.slug})`);
  check(after.reviewedCount === target.reviewedCount + 1 && after.reviewPendingCount === target.reviewPendingCount - 1, 'reviewed and pending counts move by one');
  check(after.lastTeacherCredit === '2026-10-04', `lastTeacherCredit comes from reviewedDate (got ${after.lastTeacherCredit})`);
  check(after.lastPublishedOrUpdated === '2026-12-31' && after.lastTeacherCredit !== '2026-12-31', 'a later updatedDate does not become the review date');
});

console.log(`\n==============================================================================`);
console.log(`SUMMARY: ${passed} passed, ${failed} failed`);
console.log(`==============================================================================`);
if (failed) process.exit(1);
