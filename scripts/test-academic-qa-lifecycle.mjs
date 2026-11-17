#!/usr/bin/env node
/**
 * Academic QA lifecycle tests (pilot closure, 17 Nov 2026).
 *
 * Proves, on the real register and the real pilot pages, that the framework
 * of docs/academic-qa/framework.md behaves as it says. Each case that breaks
 * something edits a real file, checks the safeguard fires, then restores the
 * file byte for byte (try/finally) and checks the clean state returns.
 * Nothing here weakens a validator, and no broken state is left on disk.
 *
 *   A  a corrected page has a new record that matches its content; the
 *      record it replaces is still in the register and no longer matches
 *   B  editing a page makes its assessment stale (REVERIFICATION_REQUIRED);
 *      restoring it restores the state; editing only reviewNote does not
 *   C  an open critical hard-stop on current content fails the gate
 *   D  an approval without evidence is rejected, and never yields
 *      VERIFIED_APPROVED
 *   E  the pilot's original records are unchanged since origin/main
 *   F  a wrong board or syllabus code on a pilot page fails validate:academic
 *   G  (with --dist) canonical URL, indexability and breadcrumb of the four
 *      built pages
 *   H  (with --dist) corrected answers and labels appear in the body of the
 *      built pages (div.resource-content), and removed material does not
 *
 * Usage: node --experimental-strip-types scripts/test-academic-qa-lifecycle.mjs [--dist]
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { deriveQaState, latest } from '../src/utils/academic/qa-rubric.ts';
import { contentSha256, fileSha256, loadJson, readCsv, ASSESSMENTS_FILE, TEACHER_VERIFICATIONS_FILE, LEDGER_CSV, RES_DIR } from './lib/academic-qa-data.mjs';

const WITH_DIST = process.argv.includes('--dist');
const PILOT = [
  { slug: 'igcse-chemistry-0620-elements-atomic-structure-and-isotopes', original: 'QA-0001' },
  { slug: 'a-level-aqa-chemistry-relative-mass-and-the-mole', original: 'QA-0002' },
  { slug: 'a-level-psychology-clinical-psychology-practice', original: 'QA-0003' },
  { slug: 'atomic-structure-practice', original: 'QA-0005' },
];
const file = (slug) => `${RES_DIR}/${slug}.md`;
const results = [];
const ok = (id, name, pass, detail) => { results.push({ id, name, pass, detail }); console.log(`${pass ? 'PASS' : 'FAIL'}  ${id}  ${name}${detail ? `\n        ${detail}` : ''}`); };
const run = (args) => { const r = spawnSync(process.execPath, args, { encoding: 'utf8' }); return { code: r.status, out: `${r.stdout}\n${r.stderr}` }; };
const gate = () => run(['--experimental-strip-types', 'scripts/validate-academic-qa.mjs']);
const register = () => loadJson(ASSESSMENTS_FILE, { results: [] }).results;
const ledger = new Map(readCsv(LEDGER_CSV).map((r) => [r.slug, r]));
const stateOf = (slug, { assessments = register(), verifications = [] } = {}) => deriveQaState({
  ledger: ledger.get(slug) ?? null,
  currentSha256: fileSha256(file(slug)),
  assessments: assessments.filter((a) => a.resource === slug),
  teacherVerifications: verifications.filter((v) => v.resource === slug),
});
/** Run fn with `path` temporarily rewritten; always restore the exact bytes. */
function withFile(path, mutate, fn) {
  const original = readFileSync(path);
  try { writeFileSync(path, mutate(original.toString('utf8'))); return fn(); }
  finally { writeFileSync(path, original); if (!readFileSync(path).equals(original)) throw new Error(`could not restore ${path}`); }
}

// ---- A: corrected page, new record current, replaced record kept and stale
for (const { slug, original } of PILOT) {
  const all = register().filter((a) => a.resource === slug);
  const newest = latest(all);
  const old = all.find((a) => a.id === original);
  const sha = fileSha256(file(slug));
  ok('A', `${slug}: newest record matches the page, the replaced record does not`,
    !!old && newest.id !== original && newest.contentSha256 === sha && old.contentSha256 !== sha && !!newest.reassessmentOf,
    `newest ${newest.id} (replaces ${newest.reassessmentOf}); ${original} kept; state ${stateOf(slug).state}`);
}

// ---- B: an edit makes the assessment stale; restoring it restores the state
{
  const slug = PILOT[0].slug;
  const before = stateOf(slug);
  const shaBefore = fileSha256(file(slug));
  let during, shaDuring, gateDuring;
  withFile(file(slug), (t) => t.replace('An **element** is a substance made of only one type of atom.', 'An **element** is a substance made of only one type of atom. (lifecycle test edit)'), () => {
    shaDuring = fileSha256(file(slug)); during = stateOf(slug); gateDuring = gate();
  });
  const after = stateOf(slug);
  ok('B', 'a body edit changes the content hash', shaDuring !== shaBefore, `${shaBefore.slice(0, 12)} -> ${shaDuring.slice(0, 12)}`);
  ok('B', 'the edited page is REVERIFICATION_REQUIRED', during.state === 'REVERIFICATION_REQUIRED', `${during.state}: ${during.reasons.join('; ')}`);
  ok('B', 'the gate reports the page for reassessment ([R2])', gateDuring.out.includes(`[R2] ${slug}: changed since`), '');
  ok('B', 'restoring the file restores hash and state', fileSha256(file(slug)) === shaBefore && after.state === before.state, `${before.state} -> ${during.state} -> ${after.state}`);
  let noteSha;
  withFile(file(slug), (t) => t.replace(/^reviewNote:.*$/m, 'reviewNote: "lifecycle test: reworded note"'), () => { noteSha = fileSha256(file(slug)); });
  ok('B', 'rewording only reviewNote does not make the assessment stale', noteSha === shaBefore, 'reviewNote is one of the three excluded frontmatter lines');
  let fieldSha;
  withFile(file(slug), (t) => t.replace(/^syllabusSeries:.*$/m, 'syllabusSeries: "2023-2025"'), () => { fieldSha = fileSha256(file(slug)); });
  ok('B', 'changing an academic frontmatter field does make it stale', fieldSha !== shaBefore, 'syllabusSeries is hashed');
}

// ---- C: an open critical hard-stop on current content fails the gate
{
  const slug = PILOT[0].slug;
  const clean = gate();
  let broken, state;
  withFile(ASSESSMENTS_FILE, (t) => {
    const reg = JSON.parse(t);
    const a = structuredClone(latest(reg.results.filter((r) => r.resource === slug)));
    a.id = 'QA-9999';
    a.findings.push({ id: 'F99', check: 2, severity: 'critical', hardStop: 'MATERIAL_FACTUAL_ERROR', location: 'synthetic', description: 'Synthetic hard-stop for the lifecycle test', evidence: 'synthetic record, never committed', status: 'open' });
    a.checks['2'] = { result: 'issues-found', note: 'synthetic' };
    reg.results.push(a);
    return `${JSON.stringify(reg, null, 2)}\n`;
  }, () => { broken = gate(); state = stateOf(slug); });
  const restored = gate();
  ok('C', 'the clean register passes the gate', clean.code === 0, '');
  ok('C', 'an open hard-stop fails the gate with [Q3]', broken.code !== 0 && broken.out.includes('[Q3]') && broken.out.includes('MATERIAL_FACTUAL_ERROR'), '');
  ok('C', 'the page is BLOCKED whatever its score', state.state === 'BLOCKED', state.reasons.join('; '));
  ok('C', 'the synthetic record is gone and the gate passes again', restored.code === 0 && !register().some((a) => a.id === 'QA-9999'), '');
}

// ---- D: no approval without evidence
{
  const slug = PILOT[0].slug;
  const sha = fileSha256(file(slug));
  const base = { resource: slug, reviewer: 'nouman-ahmed', board: 'cambridge', syllabusCode: '0620', syllabusSeries: '2026-2028', date: '2026-11-17', scope: 'whole page', sources: ['https://www.cambridgeinternational.org/Images/697205-2026-2028-syllabus.pdf'], findings: 'no errors', corrections: [], approval: 'approved' };
  const integrity = () => run(['scripts/validate-review-integrity.mjs']);
  const clean = integrity();
  const withVerification = (v) => { let r; withFile(TEACHER_VERIFICATIONS_FILE, (t) => { const j = JSON.parse(t); j.results.push(v); return `${JSON.stringify(j, null, 2)}\n`; }, () => { r = integrity(); }); return r; };
  const noEvidence = withVerification({ ...base, evidence: '', contentSha256: sha });
  const placeholder = withVerification({ ...base, evidence: 'TODO', contentSha256: sha });
  const noHash = withVerification({ ...base, evidence: 'signed form 2026-11-17' });
  ok('D', 'the committed verification file passes review integrity', clean.code === 0, '');
  ok('D', 'an approval with no evidence is rejected', noEvidence.code !== 0 && /\[13\]/.test(noEvidence.out), (noEvidence.out.match(/\[13\][^\n]*/) || [''])[0].slice(0, 160));
  ok('D', 'an approval with placeholder evidence is rejected', placeholder.code !== 0 && /\[13\]/.test(placeholder.out), (placeholder.out.match(/\[13\][^\n]*/) || [''])[0].slice(0, 160));
  ok('D', 'an approval with no content hash is rejected', noHash.code !== 0 && /\[13\]/.test(noHash.out), (noHash.out.match(/\[13\][^\n]*/) || [''])[0].slice(0, 160));
  const stateNoHash = stateOf(slug, { verifications: [{ ...base, evidence: 'x' }] });
  ok('D', 'an approval with no hash never yields VERIFIED_APPROVED', stateNoHash.state === 'REVERIFICATION_REQUIRED', stateNoHash.state);
  const stale = stateOf(slug, { verifications: [{ ...base, evidence: 'x', contentSha256: contentSha256('something else') }] });
  ok('D', 'an approval of different content never yields VERIFIED_APPROVED', stale.state === 'REVERIFICATION_REQUIRED', stale.state);
  const noApproval = stateOf(slug);
  ok('D', 'a score of 90 or more with no approval is ACADEMIC_REVIEW_PENDING, not approved', noApproval.state === 'ACADEMIC_REVIEW_PENDING', `${noApproval.state}: ${noApproval.reasons.join('; ')}`);
  let asHuman;
  withFile(ASSESSMENTS_FILE, (t) => { const reg = JSON.parse(t); const a = latest(reg.results.filter((r) => r.resource === slug)); a.method = 'human'; a.assessor = 'nouman-ahmed'; return `${JSON.stringify(reg, null, 2)}\n`; }, () => { asHuman = gate(); });
  ok('D', 'an AI-assisted record relabelled as human is rejected', asHuman.code !== 0 && asHuman.out.includes('humanEvidence'), '');
  ok('D', 'teacher-verifications.json is unchanged (no record created)', loadJson(TEACHER_VERIFICATIONS_FILE, { results: [] }).results.length === 0, 'results: []');
}

// ---- E: history preserved
{
  const base = spawnSync('git', ['show', 'origin/main:docs/reports/academic-qa/assessments.json'], { encoding: 'utf8', maxBuffer: 1 << 26 });
  if (base.status !== 0) ok('E', 'original records unchanged since origin/main', false, 'git show origin/main failed');
  else {
    const then = JSON.parse(base.stdout).results;
    const now = new Map(register().map((a) => [a.id, a]));
    const changed = then.filter((a) => JSON.stringify(a) !== JSON.stringify(now.get(a.id))).map((a) => a.id);
    ok('E', `all ${then.length} records on origin/main are still present and identical`, changed.length === 0, changed.length ? `changed or missing: ${changed.join(', ')}` : `${then.map((a) => a.id).join(', ')}`);
    ok('E', 'new records were added after them, not in place of them', register().length > then.length && register().slice(0, then.length).every((a, i) => a.id === then[i].id), `${then.length} -> ${register().length} records`);
  }
}

// ---- F: wrong board / syllabus code is caught
{
  const slug = PILOT[1].slug;
  const academic = () => { for (const s of ['scripts/validate-academic-content.mjs', 'scripts/validate-cross-board-integrity.mjs']) { const r = run([s]); if (r.code !== 0) return { ...r, script: s }; } return { code: 0, out: '', script: '' }; };
  const clean = academic();
  let wrongBoard, wrongCode, wrongQual;
  withFile(file(slug), (t) => t.replace('boards: ["aqa"]', 'boards: ["edexcel"]'), () => { wrongBoard = academic(); });
  withFile(file(slug), (t) => t.replace('syllabusCodes: ["7405"]', 'syllabusCodes: ["9701"]'), () => { wrongCode = academic(); });
  withFile(file(PILOT[0].slug), (t) => t.replace('qualifications: ["igcse"]', 'qualifications: ["a-level"]'), () => { wrongQual = academic(); });
  const line = (r) => `${r.script}: ${(r.out.split('\n').find((l) => l.includes(slug) || l.includes(PILOT[0].slug)) || '').trim().slice(0, 170)}`;
  ok('F', 'the unmodified pages pass the content and cross-board validators', clean.code === 0, '');
  ok('F', 'AQA page given board "edexcel" is rejected', wrongBoard.code !== 0, line(wrongBoard));
  ok('F', 'AQA 7405 page given code "9701" is rejected', wrongCode.code !== 0, line(wrongCode));
  ok('F', '0620 page given qualification "a-level" is rejected', wrongQual.code !== 0, line(wrongQual));
  ok('F', 'the pages pass again after restore', academic().code === 0, '');
}

// ---- G, H: the built pages
if (WITH_DIST) {
  const html = (slug) => { const p = `dist/resources/${slug}/index.html`; return existsSync(p) ? readFileSync(p, 'utf8') : null; };
  const text = (h) => h.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ');
  for (const { slug } of PILOT) {
    const h = html(slug);
    if (!h) { ok('G', `${slug}: built page exists`, false, 'run npm run build first'); continue; }
    const canonical = (h.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
    const robots = (h.match(/<meta name="robots" content="([^"]+)"/) || [])[1] ?? '(none)';
    ok('G', `${slug}: canonical URL unchanged`, canonical === `https://marlbridge.com/resources/${slug}/`, canonical);
    ok('G', `${slug}: indexable`, !/noindex/i.test(robots), `robots: ${robots}`);
    ok('G', `${slug}: BreadcrumbList structured data present`, /"@type":\s*"BreadcrumbList"/.test(h), '');
    ok('G', `${slug}: one h1`, (h.match(/<h1[\s>]/g) || []).length === 1, '');
  }
  const expect = {
    'igcse-chemistry-0620-elements-atomic-structure-and-isotopes': { has: ['= 10.8', '24.3 (1 d.p.)', 'Extended only', 'our summary', '16 + 2 = 18', '697205-2026-2028-syllabus.pdf'], hasNot: ['scores no credit'] },
    'a-level-aqa-chemistry-relative-mass-and-the-mole': { has: ['6.022 × 10²³ mol⁻¹', '0.0500 mol', '6.02 × 10²² (3 s.f.)', '6.0 × 10²² (2 s.f.)', 'not covered here', 'AQA-7404-7405-SP-2015.PDF'], hasNot: ['Edexcel', 'OCR', '04-ideal-gas', '07-reacting-masses', '01-mole-hub', '05-empirical-formula', '08-atom-economy-yield'] },
    'a-level-psychology-clinical-psychology-practice': { has: ['Sitting the exam in 2027?', '721433-2027-syllabus.pdf', 'worth 18 marks for the option', 'a sample of the option'], hasNot: ['Before or after the VR experience', 'a patient cannot take both drugs'] },
    'atomic-structure-practice': { has: ['63.62', '69.798', '0620 Extended, 5070 required', '697326-2026-2028-syllabus.pdf', 'Principal Examiner Report for Teachers'], hasNot: ['divide the wrong way round', 'identify the isotope'] },
  };
  for (const { slug } of PILOT) {
    const h = html(slug); if (!h) continue;
    // The resource body only: the div the page template renders <Content /> into. Site
    // chrome below it (videos, tuition prompt, related-article cards) is not the page's content.
    const start = h.indexOf('<div class="resource-content');
    const end = h.indexOf('</section>', start);
    if (start < 0 || end < 0) { ok('H', `${slug}: resource body found in the built page`, false, 'no div.resource-content'); continue; }
    const body = h.slice(start, end);
    const t = text(body);
    const missing = expect[slug].has.filter((s) => !t.includes(s) && !body.includes(s));
    const present = expect[slug].hasNot.filter((s) => t.includes(s) || body.includes(s));
    ok('H', `${slug}: corrected content is in the built page`, missing.length === 0, missing.length ? `missing: ${missing.join(' | ')}` : `${expect[slug].has.length} strings found`);
    ok('H', `${slug}: removed content is not in the built page`, present.length === 0, present.length ? `still present: ${present.join(' | ')}` : `${expect[slug].hasNot.length} strings absent`);
  }
}

const failed = results.filter((r) => !r.pass);
console.log(`\n${results.length - failed.length} pass / ${failed.length} fail${WITH_DIST ? '' : ' (built-page cases G and H not run; pass --dist after npm run build)'}`);
process.exit(failed.length ? 1 : 0);
