#!/usr/bin/env node
/**
 * Academic QA scorecard and dashboard (D-454, 15 Nov 2026).
 *
 * Builds one QA record per resource from the evidence that already exists
 * -- it adds no new source of truth for anything the academic-review ledger
 * already records:
 *
 *   docs/reports/academic-review/ledger.csv          structural checks, ledger outcome
 *   docs/reports/academic-qa/assessments.json        rubric assessments (this programme)
 *   docs/reports/academic-review/teacher-verifications.json   documented approvals
 *   src/content/resources/*.md                       current content hash, metadata
 *
 * and writes, deterministically (no generation timestamp):
 *
 *   docs/reports/academic-qa/scorecard.csv     one row per resource
 *   docs/reports/academic-qa/scorecard.json    totals, distributions, groupings
 *   docs/reports/academic-qa/dashboard.md      the dashboard, in Markdown
 *   docs/reports/academic-qa/dashboard.html    the same, self-contained, internal
 *   docs/reports/academic-qa/review-queue.md   risk-ranked work queue
 *
 * Unassessed resources have NO score: averages and distributions are over
 * resources with a complete, current assessment only, and every figure
 * shows its denominator.
 *
 * Usage: node --experimental-strip-types scripts/academic-qa-scorecard.mjs [--check]
 *   --check  regenerate in memory; fail if a committed file differs.
 * Run `npm run report:review-ledger` first: the scorecard reads the ledger.
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import {
  CATEGORIES, CHECKS, HARD_STOPS, QA_STATES, QA_GATE, RUBRIC_VERSION,
  deriveQaState, scoreAssessment, latest, openFindings, openHardStops,
} from '../src/utils/academic/qa-rubric.ts';
import { SYLLABUS_TOPICS } from '../src/data/academic/syllabus-topics.ts';
import { SUBJECTS } from '../src/data/academic/subjects.ts';
import { loadResources, loadJson, readCsv, QA_DIR, ASSESSMENTS_FILE, TEACHER_VERIFICATIONS_FILE, LEDGER_CSV } from './lib/academic-qa-data.mjs';

const CHECK = process.argv.includes('--check');
const resources = loadResources();
const ledger = new Map(readCsv(LEDGER_CSV).map((r) => [r.slug, r]));
const assessments = loadJson(ASSESSMENTS_FILE, { results: [] }).results;
const tvs = loadJson(TEACHER_VERIFICATIONS_FILE, { results: [] }).results;
const group = (arr, k) => { const m = new Map(); for (const x of arr) { if (!m.has(x[k])) m.set(x[k], []); m.get(x[k]).push(x); } return m; };
const aBy = group(assessments, 'resource');
const tvBy = group(tvs, 'resource');

// ---------------------------------------------------------------- risk queue
const HIGH_STAKES_NUMERIC = new Set(['mathematics', 'further-mathematics', 'additional-mathematics', 'statistics', 'physics', 'chemistry', 'accounting', 'economics', 'combined-science', 'sciences']);
/**
 * Risk tier for the review queue (framework section 7). Lower = sooner.
 * Demand is NOT used: no reliable traffic data is held in the repository,
 * so page visibility is recorded as unknown rather than guessed.
 */
function riskTier(r) {
  if (r.qaState === 'BLOCKED') return { tier: 1, why: 'blocked (structural FAIL or open hard-stop)' };
  if (r.qaState === 'REVISION_REQUIRED' || r.qaState === 'REVERIFICATION_REQUIRED') return { tier: 2, why: r.qaState.toLowerCase().replace(/_/g, ' ') };
  if (r.ledgerOutcome === 'UNVERIFIED') return { tier: 3, why: 'never verified against its specification' };
  if (r.ledgerOutcome === 'REPO_PARTIAL_UNVERIFIABLE') return { tier: 4, why: 'partly unverifiable against a public source' };
  if (['exam-preparation', 'past-papers'].includes(r.resourceType)) return { tier: 5, why: 'states assessment details (papers, marks, durations, thresholds)' };
  if (r.resourceType === 'practice-questions') return { tier: 6, why: 'questions and worked answers' };
  if (HIGH_STAKES_NUMERIC.has(r.subject)) return { tier: 7, why: 'numerical / scientific content' };
  return { tier: 8, why: 'routine' };
}

// ---------------------------------------------------------------- search-metadata coverage claims
const CLAIM_RE = /\b(complete (?:guide|revision|coverage|notes|syllabus|course)|full (?:syllabus|course|coverage|topic|specification)|entire (?:syllabus|topic|course|specification)|(?:covers|covering) (?:all|every|the whole|the entire)|every (?:topic|sub-?topic|outcome|learning outcome)|whole (?:syllabus|specification|course))\b/i;
const subjectSlugsFor = (id) => { const s = SUBJECTS.filter((x) => (x.hubId ?? x.slug) === id).map((x) => x.slug); return s.length ? s : [id]; };
function topicRecord(res, qual, topicSlug) {
  const cands = SYLLABUS_TOPICS.filter((v) => v.status !== 'future' && res.boards.includes(v.boardSlug) && v.qualificationSlug === qual && subjectSlugsFor(res.subject).includes(v.subjectSlug));
  const v = cands.find((x) => x.syllabusSeries === res.syllabusSeries) ?? cands.find((x) => x.status === 'current') ?? cands[0];
  return v?.topics.find((t) => t.slug === topicSlug);
}
/** SUPPORTED_BY_MAPPING: every subtopic of each mapped topic is mapped (or an explicit coverage claim); NOT_SUPPORTED_BY_MAPPING: some or all subtopics not listed; NEEDS_REVIEW: cannot be decided from data. */
function claimVerdict(res, claim) {
  if (['exam-preparation', 'past-papers'].includes(res.resourceType)) return { verdict: 'NEEDS_REVIEW', why: 'exam-level claim (papers draw on the whole course); check the wording' };
  const byTopic = new Map();
  for (const t of res.syllabusTopics) {
    if (!t.topic) continue;
    const k = `${t.qualification}|${t.topic}`;
    if (!byTopic.has(k)) byTopic.set(k, { q: t.qualification, topic: t.topic, subs: new Set(), claim: false });
    if (t.subtopic) byTopic.get(k).subs.add(t.subtopic); else if (t.coverage) byTopic.get(k).claim = true;
  }
  if (!byTopic.size) return { verdict: 'NEEDS_REVIEW', why: 'no topic mapping' };
  if (/syllabus|specification|every topic|whole course/i.test(claim) && byTopic.size < 3) {
    // A syllabus-wide claim on a page mapped to one or two topics.
    const rec = topicRecord(res, [...byTopic.values()][0].q, [...byTopic.values()][0].topic);
    if (rec) return { verdict: 'NEEDS_REVIEW', why: `syllabus-wide wording; page maps ${byTopic.size} topic(s)` };
  }
  const missing = [];
  for (const e of byTopic.values()) {
    const rec = topicRecord(res, e.q, e.topic);
    if (!rec) return { verdict: 'NEEDS_REVIEW', why: `topic ${e.topic} not found in taxonomy` };
    const all = (rec.subtopics ?? []).map((s) => s.slug);
    if (e.claim || !all.length) continue;
    const miss = all.filter((s) => !e.subs.has(s));
    if (miss.length === all.length) missing.push(`${e.topic}: topic-level mapping only, ${all.length} subtopics not listed (OT-1)`);
    else if (miss.length) missing.push(`${e.topic}: ${all.length - miss.length} of ${all.length} subtopics mapped`);
  }
  // The mapping is data, not the page: "not supported" means the record does
  // not show the claim is true, not that the page is wrong. A person decides.
  return missing.length ? { verdict: 'NOT_SUPPORTED_BY_MAPPING', why: missing.join('; ') } : { verdict: 'SUPPORTED_BY_MAPPING', why: 'every subtopic of each mapped topic is mapped' };
}

// ---------------------------------------------------------------- per resource
const rows = [];
const seoClaims = [];
for (const res of resources) {
  const l = ledger.get(res.slug);
  const as = aBy.get(res.slug) ?? [];
  const tv = tvBy.get(res.slug) ?? [];
  const { state, reasons } = deriveQaState({ ledger: l ? { structuralValidation: l.structuralValidation, outcome: l.outcome } : null, currentSha256: res.sha256, assessments: as, teacherVerifications: tv });
  const a = latest(as);
  const current = a && a.contentSha256 === res.sha256;
  const sc = a && current ? scoreAssessment(a) : null;
  const tvLatest = latest(tv);
  const row = {
    slug: res.slug,
    board: res.boards.join(' | '),
    qualification: res.qualifications.join(' | '),
    subject: res.subject,
    syllabusCode: res.syllabusCodes.join(' | '),
    syllabusSeries: res.syllabusSeries,
    resourceType: res.resourceType,
    reviewStatus: res.reviewStatus,
    accountableTeacher: l?.reviewer ?? '',
    ledgerOutcome: l?.outcome ?? '',
    structural: l?.structuralValidation ?? '',
    qaState: state,
    scoreStatus: !a ? 'NOT_SCORED' : !current ? 'STALE' : sc.complete ? 'COMPLETE' : 'INCOMPLETE',
    score: sc?.complete ? sc.total : '',
    band: sc?.complete ? sc.band : '',
    assessmentId: a?.id ?? '',
    assessmentMethod: a?.method ?? '',
    assessmentDate: a?.date ?? '',
    openHardStops: a && current ? openHardStops(a).map((f) => f.hardStop).join(' | ') : '',
    openFindings: a && current ? openFindings(a).length : '',
    teacherVerification: tvLatest ? `${tvLatest.approval} ${tvLatest.date}` : '',
    eligibleReviewers: l?.eligibleReviewers ?? '',
    reasons: reasons.join('; '),
  };
  const rt = riskTier(row);
  row.riskTier = rt.tier;
  row.riskReason = rt.why;
  row.demand = 'unknown';
  rows.push(row);

  const meta = [res.title, res.seoTitle, res.description].join(' | ');
  const m = meta.match(CLAIM_RE);
  if (m) seoClaims.push({ slug: res.slug, type: res.resourceType, claim: m[0], ...claimVerdict(res, m[0]) });
}

// ---------------------------------------------------------------- totals
const tally = (fn, list = rows) => { const o = {}; for (const r of list) { const k = fn(r); o[k] = (o[k] ?? 0) + 1; } return Object.fromEntries(Object.entries(o).sort()); };
const scored = rows.filter((r) => r.score !== '');
const scores = scored.map((r) => r.score).sort((x, y) => x - y);
const median = scores.length ? (scores.length % 2 ? scores[(scores.length - 1) / 2] : (scores[scores.length / 2 - 1] + scores[scores.length / 2]) / 2) : null;
const mean = scores.length ? Math.round((scores.reduce((s, x) => s + x, 0) / scores.length) * 10) / 10 : null;
const BINS = [[90, 100.01, '90-100'], [75, 90, '75-89.9'], [50, 75, '50-74.9'], [0, 50, '0-49.9']];
const distribution = Object.fromEntries(BINS.map(([lo, hi, k]) => [k, scores.filter((s) => s >= lo && s < hi).length]));
const findings = assessments.flatMap((a) => (a.findings ?? []).map((f) => ({ ...f, assessment: a.id, resource: a.resource, current: resources.find((r) => r.slug === a.resource)?.sha256 === a.contentSha256 && latest(aBy.get(a.resource)) === a })));
const liveFindings = findings.filter((f) => f.current);
const stateCount = Object.fromEntries(QA_STATES.map((s) => [s, rows.filter((r) => r.qaState === s).length]));
const byKey = (key) => {
  const m = new Map();
  for (const r of rows) for (const k of String(r[key]).split(' | ')) {
    if (!m.has(k)) m.set(k, { resources: 0, ...Object.fromEntries(QA_STATES.map((s) => [s, 0])), scored: 0 });
    const e = m.get(k); e.resources++; e[r.qaState]++; if (r.score !== '') e.scored++;
  }
  return Object.fromEntries([...m].sort(([a], [b]) => a.localeCompare(b)));
};
const totals = {
  rubricVersion: RUBRIC_VERSION,
  scope: 'src/content/resources (articles and the AP library are not in scope for v1)',
  resources: rows.length,
  qaState: stateCount,
  scoreStatus: tally((r) => r.scoreStatus),
  withCompleteCurrentScore: scored.length,
  meanScore: mean,
  medianScore: median,
  scoreDistribution: distribution,
  meetingTarget: scored.filter((r) => r.band === 'meets-target').length,
  needingRevision: rows.filter((r) => r.qaState === 'REVISION_REQUIRED').length,
  withOpenHardStop: rows.filter((r) => r.openHardStops).length,
  verificationKinds: {
    automatedStructuralPass: rows.filter((r) => r.structural === 'PASS').length,
    automatedStructuralWarn: rows.filter((r) => r.structural === 'WARN').length,
    automatedStructuralFail: rows.filter((r) => r.structural === 'FAIL').length,
    repositorySpecificationCheck: rows.filter((r) => r.ledgerOutcome.startsWith('REPO_')).length,
    accountableTeacherCredited: rows.filter((r) => r.reviewStatus === 'reviewed').length,
    aiAssistedAssessmentCurrent: rows.filter((r) => r.assessmentMethod === 'ai-assisted' && r.scoreStatus !== 'STALE').length,
    humanAssessmentCurrent: rows.filter((r) => r.assessmentMethod === 'human' && r.scoreStatus !== 'STALE').length,
    documentedTeacherVerification: rows.filter((r) => r.teacherVerification).length,
    finalApproval: stateCount.VERIFIED_APPROVED,
  },
  ledgerOutcome: tally((r) => r.ledgerOutcome),
  findingsOpenBySeverity: tally((f) => f.severity, liveFindings.filter((f) => f.status === 'open')),
  findingsOpenByCheck: tally((f) => `${f.check} ${CHECKS.find((c) => c.id === f.check)?.key}`, liveFindings.filter((f) => f.status === 'open')),
  riskTier: tally((r) => r.riskTier),
  searchMetadataCoverageClaims: tally((c) => c.verdict, seoClaims),
  gate: QA_GATE,
};
const json = { meaning: 'Academic QA scorecard (D-454). Automated checks, repository verification, accountable-teacher credit, rubric assessment and documented teacher verification are reported separately and never merged into one "reviewed" figure. Unassessed resources have no score.', totals, byBoard: byKey('board'), byQualification: byKey('qualification'), byResourceType: byKey('resourceType'), bySubject: byKey('subject') };

// ---------------------------------------------------------------- render
const cols = ['slug', 'board', 'qualification', 'subject', 'syllabusCode', 'syllabusSeries', 'resourceType', 'reviewStatus', 'accountableTeacher', 'ledgerOutcome', 'structural', 'qaState', 'scoreStatus', 'score', 'band', 'assessmentId', 'assessmentMethod', 'assessmentDate', 'openHardStops', 'openFindings', 'teacherVerification', 'eligibleReviewers', 'riskTier', 'riskReason', 'demand', 'reasons'];
const cell = (v) => { const s = String(v ?? ''); return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s; };
const csv = [cols.join(','), ...rows.map((r) => cols.map((c) => cell(r[c])).join(','))].join('\n') + '\n';

const pct = (n, d) => (d ? `${((n / d) * 100).toFixed(1)}%` : 'n/a');
const T = totals;
const N = T.resources;
const mdTable = (head, body) => [`| ${head.join(' | ')} |`, `| ${head.map(() => '---').join(' | ')} |`, ...body.map((r) => `| ${r.join(' | ')} |`)].join('\n');
const STATE_MEANING = {
  BLOCKED: 'Structural FAIL, open error in the repository verification, or open hard-stop finding on current content',
  REVERIFICATION_REQUIRED: 'Page changed after its assessment or teacher verification',
  REVISION_REQUIRED: 'Score below 90, open major/critical finding, or teacher requested changes',
  ACADEMIC_REVIEW_PENDING: 'Complete score >= 90 but no documented teacher approval yet (or approval without a score)',
  VERIFIED_APPROVED: 'Documented teacher approval + complete score >= 90 + no open hard-stop or major finding (owner policy D-454)',
  AUTOMATED_CHECK_COMPLETE: 'Automated structural checks only; no complete rubric assessment',
  NOT_ASSESSED: 'Not in the academic-review ledger yet',
};
const assessedRows = rows.filter((r) => r.assessmentId);
const md = `# Academic QA dashboard

Generated by \`npm run report:academic-qa\` (rubric ${RUBRIC_VERSION}, D-454). Framework: [docs/academic-qa/framework.md](../../academic-qa/framework.md). Per-resource rows: [scorecard.csv](scorecard.csv). Work queue: [review-queue.md](review-queue.md). Internal: not published on the site.

**Scope:** ${T.scope}. **Resources:** ${N}.

## Headline (every figure with its denominator)

${mdTable(['Measure', 'Resources', 'Of'], [
  ['With a complete, current rubric score', T.withCompleteCurrentScore, `${N} (${pct(T.withCompleteCurrentScore, N)})`],
  ['Mean / median valid score', `${T.meanScore ?? 'n/a'} / ${T.medianScore ?? 'n/a'}`, `${T.withCompleteCurrentScore} scored resources only`],
  ['Meeting the 90 target', T.meetingTarget, `${T.withCompleteCurrentScore} scored`],
  ['Revision required', T.needingRevision, N],
  ['Open hard-stop finding', T.withOpenHardStop, N],
  ['Documented teacher verification', T.verificationKinds.documentedTeacherVerification, N],
  ['Final approval (VERIFIED_APPROVED)', T.verificationKinds.finalApproval, N],
])}

Unassessed resources are not counted as passing: they have no score and are excluded from the mean, median and distribution.

## QA state

${mdTable(['State', 'Resources', 'Share', 'Meaning'], QA_STATES.map((s) => [s, T.qaState[s], pct(T.qaState[s], N), STATE_MEANING[s]]))}

## Kinds of verification (kept separate; never added together)

${mdTable(['Evidence', 'Resources', 'What it is not'], [
  ['Automated structural checks: PASS / WARN / FAIL', `${T.verificationKinds.automatedStructuralPass} / ${T.verificationKinds.automatedStructuralWarn} / ${T.verificationKinds.automatedStructuralFail}`, 'Not an academic accuracy check'],
  ['Repository-side specification check (pending-review-*.json)', T.verificationKinds.repositorySpecificationCheck, 'Not a teacher review'],
  ['Accountable teacher credited (reviewStatus "reviewed", D-379)', T.verificationKinds.accountableTeacherCredited, 'Not a dated line-by-line check'],
  ['AI-assisted rubric assessment (current)', T.verificationKinds.aiAssistedAssessmentCurrent, 'Not a teacher review; never an approval'],
  ['Human rubric assessment (current)', T.verificationKinds.humanAssessmentCurrent, 'Not an approval on its own'],
  ['Documented teacher verification (teacher-verifications.json)', T.verificationKinds.documentedTeacherVerification, '—'],
  ['Final quality approval (VERIFIED_APPROVED)', T.verificationKinds.finalApproval, '—'],
])}

## Score distribution (complete, current scores only; n = ${T.withCompleteCurrentScore})

${mdTable(['Band', 'Resources'], Object.entries(T.scoreDistribution))}

## Assessed resources

${assessedRows.length ? mdTable(['Resource', 'Assessment', 'Method', 'Score', 'State', 'Open findings', 'Hard-stops'], assessedRows.map((r) => [`\`${r.slug}\``, `${r.assessmentId} (${r.assessmentDate})`, r.assessmentMethod, r.score === '' ? r.scoreStatus : `${r.score}`, r.qaState, r.openFindings, r.openHardStops || '—'])) : '_None yet._'}

## Open findings on current content

${liveFindings.filter((f) => f.status === 'open').length ? mdTable(['Resource', 'Finding', 'Check', 'Severity', 'Hard-stop', 'Location', 'Description'], liveFindings.filter((f) => f.status === 'open').sort((a, b) => ['critical', 'major', 'minor', 'advisory'].indexOf(a.severity) - ['critical', 'major', 'minor', 'advisory'].indexOf(b.severity) || a.resource.localeCompare(b.resource)).map((f) => [`\`${f.resource}\``, `${f.assessment} ${f.id}`, f.check, f.severity, f.hardStop || '—', f.location.replace(/\|/g, '/'), f.description.replace(/\|/g, '/')])) : '_None._'}

## By board

${mdTable(['Board', 'Resources', 'Scored', ...QA_STATES], Object.entries(json.byBoard).map(([k, v]) => [k, v.resources, v.scored, ...QA_STATES.map((s) => v[s])]))}

## By qualification

${mdTable(['Qualification', 'Resources', 'Scored', ...QA_STATES], Object.entries(json.byQualification).map(([k, v]) => [k, v.resources, v.scored, ...QA_STATES.map((s) => v[s])]))}

## By resource type

${mdTable(['Type', 'Resources', 'Scored', ...QA_STATES], Object.entries(json.byResourceType).map(([k, v]) => [k, v.resources, v.scored, ...QA_STATES.map((s) => v[s])]))}

## Risk-based queue

${mdTable(['Tier', 'Meaning', 'Resources'], [1, 2, 3, 4, 5, 6, 7, 8].map((t) => [t, rows.find((r) => r.riskTier === t)?.riskReason ?? '—', T.riskTier[t] ?? 0]))}

Demand (traffic) is **unknown** for every resource: no reliable Search Console or analytics export is held in the repository, so it is not used. The ranked list is in [review-queue.md](review-queue.md).

## Search metadata: coverage wording in titles and descriptions

Titles, SEO titles and descriptions that claim complete coverage ("every topic", "full syllabus", "covering all" ...), checked against the page's own syllabus mapping. SUPPORTED_BY_MAPPING = every subtopic of each mapped topic is mapped; NOT_SUPPORTED_BY_MAPPING = the mapping lists only some, or none (topic-level only), so the data cannot confirm the wording; the page may still be right; NEEDS_REVIEW = a person must read the wording. No title or description has been changed: a change to search metadata waits for a teacher's reading and the owner's approval.

${seoClaims.length ? mdTable(['Resource', 'Type', 'Wording', 'Verdict', 'Why'], seoClaims.map((c) => [`\`${c.slug}\``, c.type, `"${c.claim}"`, c.verdict, c.why])) : '_None._'}

## Gate

- Integrity rules: **${QA_GATE.integrity}** (scripts/validate-academic-qa.mjs, part of \`validate:academic\`, so every build).
- New resources without an assessment: **${QA_GATE.newResourceAssessment.mode}**${QA_GATE.newResourceAssessment.activationDate ? ` from ${QA_GATE.newResourceAssessment.activationDate}` : ' (no activation date set; owner decision)'}.

## Hard-stop conditions (rubric ${RUBRIC_VERSION})

${mdTable(['Code', 'Condition'], Object.entries(HARD_STOPS))}
`;

const queue = [...rows].sort((a, b) => a.riskTier - b.riskTier || (a.structural === 'WARN' ? 0 : 1) - (b.structural === 'WARN' ? 0 : 1) || a.slug.localeCompare(b.slug));
const QUEUE_N = 200;
const queueMd = `# Academic QA review queue

Generated by \`npm run report:academic-qa\`. Risk-ranked (framework section 7); within a tier, pages with structural warnings first, then by slug. Demand is unknown for every page (no traffic data is held), so it is not a factor. The first ${QUEUE_N} of ${rows.length} are listed; the full order is the \`riskTier\` column of [scorecard.csv](scorecard.csv).

Eligible reviewers are teachers who COULD review under the build's rules; nobody is assigned, and no teacher has accepted a page until a record exists in teacher-verifications.json.

${mdTable(['#', 'Tier', 'Resource', 'Board / code', 'Type', 'QA state', 'Why', 'Eligible reviewers'], queue.slice(0, QUEUE_N).map((r, i) => [i + 1, r.riskTier, `\`${r.slug}\``, `${r.board} ${r.syllabusCode}`.replace(/\|/g, '/'), r.resourceType, r.qaState, r.riskReason, (r.eligibleReviewers || '—').replace(/\|/g, ',')]))}
`;

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const hTable = (head, body) => `<div class="tw"><table><thead><tr>${head.map((h) => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${body.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
const tile = (label, value, of) => `<div class="tile"><div class="v">${esc(value)}</div><div class="l">${esc(label)}</div><div class="o">${esc(of)}</div></div>`;
const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow">
<title>Academic QA Dashboard</title>
<style>
:root{--bg:#f7f6f2;--fg:#1d2433;--muted:#5b6475;--card:#fff;--rule:#dcd8cc;--accent:#1f3a5f;--bad:#a4262c;--warn:#8a5a00;--ok:#2e6b3a}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#12161d;--fg:#e7e9ee;--muted:#9aa3b2;--card:#1a2029;--rule:#2c3440;--accent:#8fb3e0;--bad:#f08b8f;--warn:#e7b65c;--ok:#7cc48a}}
:root[data-theme="dark"]{--bg:#12161d;--fg:#e7e9ee;--muted:#9aa3b2;--card:#1a2029;--rule:#2c3440;--accent:#8fb3e0;--bad:#f08b8f;--warn:#e7b65c;--ok:#7cc48a}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--fg);font:15px/1.5 system-ui,-apple-system,"Segoe UI",sans-serif}
main{max-width:1180px;margin:0 auto;padding:24px 16px 64px}h1{font-size:26px;margin:0 0 4px}h2{font-size:18px;margin:32px 0 8px;color:var(--accent)}
p.s{color:var(--muted);margin:0 0 16px}.tiles{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px}
.tile{background:var(--card);border:1px solid var(--rule);border-radius:8px;padding:12px}.tile .v{font-size:24px;font-weight:650}.tile .l{font-size:13px}.tile .o{font-size:12px;color:var(--muted)}
.tw{overflow-x:auto;background:var(--card);border:1px solid var(--rule);border-radius:8px}table{border-collapse:collapse;width:100%;font-size:13px}
th,td{padding:6px 8px;border-bottom:1px solid var(--rule);text-align:left;vertical-align:top}th{position:sticky;top:0;background:var(--card)}
td:nth-child(n+2){font-variant-numeric:tabular-nums}code{font-size:12px}
</style></head><body><main>
<h1>Academic QA dashboard</h1>
<p class="s">Rubric ${esc(RUBRIC_VERSION)} · D-454 · scope: ${esc(T.scope)} · internal, not published. Unassessed resources have no score and are excluded from averages.</p>
<div class="tiles">
${tile('Resources in scope', N, 'src/content/resources')}
${tile('Complete, current score', T.withCompleteCurrentScore, `of ${N}`)}
${tile('Mean / median score', `${T.meanScore ?? 'n/a'} / ${T.medianScore ?? 'n/a'}`, `over ${T.withCompleteCurrentScore} scored`)}
${tile('Open hard-stops', T.withOpenHardStop, `of ${N}`)}
${tile('Revision required', T.needingRevision, `of ${N}`)}
${tile('Teacher-verified (documented)', T.verificationKinds.documentedTeacherVerification, `of ${N}`)}
${tile('Final approval', T.verificationKinds.finalApproval, `of ${N}`)}
</div>
<h2>QA state</h2>${hTable(['State', 'Resources', 'Share', 'Meaning'], QA_STATES.map((s) => [s, T.qaState[s], pct(T.qaState[s], N), STATE_MEANING[s]]))}
<h2>Kinds of verification (never added together)</h2>${hTable(['Evidence', 'Resources'], [
  ['Automated structural PASS / WARN / FAIL', `${T.verificationKinds.automatedStructuralPass} / ${T.verificationKinds.automatedStructuralWarn} / ${T.verificationKinds.automatedStructuralFail}`],
  ['Repository-side specification check', T.verificationKinds.repositorySpecificationCheck],
  ['Accountable teacher credited (D-379; not a dated check)', T.verificationKinds.accountableTeacherCredited],
  ['AI-assisted rubric assessment (current)', T.verificationKinds.aiAssistedAssessmentCurrent],
  ['Human rubric assessment (current)', T.verificationKinds.humanAssessmentCurrent],
  ['Documented teacher verification', T.verificationKinds.documentedTeacherVerification],
  ['Final approval', T.verificationKinds.finalApproval],
])}
<h2>Score distribution (n = ${T.withCompleteCurrentScore})</h2>${hTable(['Band', 'Resources'], Object.entries(T.scoreDistribution))}
<h2>Assessed resources</h2>${hTable(['Resource', 'Assessment', 'Method', 'Score', 'State', 'Open findings', 'Hard-stops'], assessedRows.map((r) => [r.slug, `${r.assessmentId} (${r.assessmentDate})`, r.assessmentMethod, r.score === '' ? r.scoreStatus : r.score, r.qaState, r.openFindings, r.openHardStops || '—']))}
<h2>Open findings on current content</h2>${hTable(['Resource', 'Finding', 'Check', 'Severity', 'Hard-stop', 'Location', 'Description'], liveFindings.filter((f) => f.status === 'open').map((f) => [f.resource, `${f.assessment} ${f.id}`, f.check, f.severity, f.hardStop || '—', f.location, f.description]))}
<h2>By board</h2>${hTable(['Board', 'Resources', 'Scored', ...QA_STATES], Object.entries(json.byBoard).map(([k, v]) => [k, v.resources, v.scored, ...QA_STATES.map((s) => v[s])]))}
<h2>By qualification</h2>${hTable(['Qualification', 'Resources', 'Scored', ...QA_STATES], Object.entries(json.byQualification).map(([k, v]) => [k, v.resources, v.scored, ...QA_STATES.map((s) => v[s])]))}
<h2>By resource type</h2>${hTable(['Type', 'Resources', 'Scored', ...QA_STATES], Object.entries(json.byResourceType).map(([k, v]) => [k, v.resources, v.scored, ...QA_STATES.map((s) => v[s])]))}
<h2>By subject</h2>${hTable(['Subject', 'Resources', 'Scored', ...QA_STATES], Object.entries(json.bySubject).map(([k, v]) => [k, v.resources, v.scored, ...QA_STATES.map((s) => v[s])]))}
<h2>Risk queue (first 50; demand unknown)</h2>${hTable(['#', 'Tier', 'Resource', 'Type', 'State', 'Why'], queue.slice(0, 50).map((r, i) => [i + 1, r.riskTier, r.slug, r.resourceType, r.qaState, r.riskReason]))}
<h2>Search metadata coverage wording</h2>${hTable(['Resource', 'Wording', 'Verdict', 'Why'], seoClaims.map((c) => [c.slug, c.claim, c.verdict, c.why]))}
<h2>Hard-stop conditions</h2>${hTable(['Code', 'Condition'], Object.entries(HARD_STOPS))}
</main></body></html>
`;

const outputs = {
  [`${QA_DIR}/scorecard.csv`]: csv,
  [`${QA_DIR}/scorecard.json`]: `${JSON.stringify(json, null, 2)}\n`,
  [`${QA_DIR}/dashboard.md`]: md,
  [`${QA_DIR}/dashboard.html`]: html,
  [`${QA_DIR}/review-queue.md`]: queueMd,
};
if (CHECK) {
  const stale = Object.entries(outputs).filter(([p, c]) => !existsSync(p) || readFileSync(p, 'utf8').replace(/\r\n/g, '\n') !== c).map(([p]) => p);
  if (stale.length) { console.error(`✗ Academic QA reports are out of date: ${stale.join(', ')}. Run npm run report:academic-qa.`); process.exit(1); }
  console.log('✓ Academic QA reports match the repository.');
} else {
  mkdirSync(QA_DIR, { recursive: true });
  for (const [p, c] of Object.entries(outputs)) writeFileSync(p, c);
  console.log(`Academic QA scorecard: ${N} resources; ${T.withCompleteCurrentScore} with a complete current score; states ${JSON.stringify(T.qaState)}`);
}
