import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  CATEGORIES, CHECKS, MAX_POINTS, RUBRIC_VERSION, bandFor, scoreAssessment, deriveQaState, validateAssessment,
} from '../qa-rubric.ts';

const SHA = 'a'.repeat(64);
const OTHER = 'b'.repeat(64);
const LEDGER_OK = { structuralValidation: 'PASS', outcome: 'TEACHER_CREDITED' };

/** A complete, evidenced assessment; `points` scales every category. */
function assessment(over = {}, frac = 1) {
  const categories = {};
  for (const c of CATEGORIES) categories[c.id] = { points: Math.round(c.max * frac * 2) / 2, evidence: 'Checked lines 1-40 against syllabus 2.1-2.3.', reasoning: 'Matches the outcomes.' };
  const checks = {};
  for (const c of CHECKS) checks[String(c.id)] = { result: 'pass', note: 'ok' };
  return {
    id: 'QA-0001', resource: 'r', rubricVersion: RUBRIC_VERSION, method: 'ai-assisted', assessor: 'AI-assisted (test-model)',
    date: '2026-11-15', contentSha256: SHA, sources: [{ url: 'https://www.cambridgeinternational.org/x.pdf' }],
    categories, checks, findings: [], ...over,
  };
}
const critical = { id: 'F1', check: 2, severity: 'critical', hardStop: 'MATERIAL_FACTUAL_ERROR', location: '§2', description: 'Wrong charge', evidence: 'Syllabus 2.2.2', status: 'open' };

test('the seven categories add up to 100 and map all ten checks', () => {
  assert.equal(MAX_POINTS, 100);
  const mapped = new Set(CATEGORIES.flatMap((c) => c.checks));
  for (const c of CHECKS) assert.ok(mapped.has(c.id), `check ${c.id} is mapped to a category`);
});

test('band thresholds: 90 meets target, 89.9 does not, 75 is improve, 74.9 is major revision', () => {
  assert.equal(bandFor(90), 'meets-target');
  assert.equal(bandFor(89.9), 'improve');
  assert.equal(bandFor(75), 'improve');
  assert.equal(bandFor(74.9), 'major-revision');
  assert.equal(bandFor(null), null);
});

test('an unscored category gives NO total (never 0, never a guess)', () => {
  const a = assessment();
  delete a.categories['factual-accuracy'];
  const s = scoreAssessment(a);
  assert.equal(s.complete, false);
  assert.equal(s.total, null);
  assert.deepEqual(s.missing, ['factual-accuracy']);
});

test('worked answers not applicable rescales over the other 80 points', () => {
  const a = assessment();
  a.categories['worked-answers-exam-alignment'] = { applicable: false, reasoning: 'No questions or worked examples.' };
  a.categories['factual-accuracy'].points = 12; // 72/80 -> 90.0
  assert.equal(scoreAssessment(a).total, 90);
});

test('only worked answers may be not applicable', () => {
  const a = assessment();
  a.categories['factual-accuracy'] = { applicable: false, reasoning: 'x' };
  assert.equal(scoreAssessment(a).complete, false);
  assert.ok(validateAssessment(a).some((p) => p.includes('factual-accuracy cannot be marked not applicable')));
});

test('a critical defect on a 97/100 page is BLOCKED, not approved', () => {
  const a = assessment({ findings: [critical] }, 0.97);
  a.categories['factual-accuracy'].points = 17; // not full marks, so the record itself is consistent
  assert.ok(scoreAssessment(a).total >= 90);
  const s = deriveQaState({ ledger: LEDGER_OK, currentSha256: SHA, assessments: [a], teacherVerifications: [{ resource: 'r', approval: 'approved', date: '2026-11-15', contentSha256: SHA }] });
  assert.equal(s.state, 'BLOCKED');
  assert.match(s.reasons.join(' '), /MATERIAL_FACTUAL_ERROR/);
});

test('a high AI score alone never reaches VERIFIED_APPROVED', () => {
  const s = deriveQaState({ ledger: LEDGER_OK, currentSha256: SHA, assessments: [assessment()] });
  assert.equal(s.state, 'ACADEMIC_REVIEW_PENDING');
});

test('teacher approval plus a complete score >= 90 is VERIFIED_APPROVED', () => {
  const s = deriveQaState({ ledger: LEDGER_OK, currentSha256: SHA, assessments: [assessment()], teacherVerifications: [{ resource: 'r', approval: 'approved', date: '2026-11-16', contentSha256: SHA }] });
  assert.equal(s.state, 'VERIFIED_APPROVED');
});

test('teacher approval without a rubric score stays ACADEMIC_REVIEW_PENDING (owner policy)', () => {
  const s = deriveQaState({ ledger: LEDGER_OK, currentSha256: SHA, teacherVerifications: [{ resource: 'r', approval: 'approved', date: '2026-11-16', contentSha256: SHA }] });
  assert.equal(s.state, 'ACADEMIC_REVIEW_PENDING');
});

test('the accountable-teacher credit (ledger TEACHER_CREDITED) does not raise the state', () => {
  assert.equal(deriveQaState({ ledger: LEDGER_OK, currentSha256: SHA }).state, 'AUTOMATED_CHECK_COMPLETE');
});

test('a page edited after assessment needs REVERIFICATION', () => {
  assert.equal(deriveQaState({ ledger: LEDGER_OK, currentSha256: OTHER, assessments: [assessment()] }).state, 'REVERIFICATION_REQUIRED');
});

test('a teacher verification without a content hash cannot count as current', () => {
  const s = deriveQaState({ ledger: LEDGER_OK, currentSha256: SHA, assessments: [assessment()], teacherVerifications: [{ resource: 'r', approval: 'approved', date: '2026-11-16' }] });
  assert.equal(s.state, 'REVERIFICATION_REQUIRED');
});

test('score below 90, or an open major finding, is REVISION_REQUIRED', () => {
  assert.equal(deriveQaState({ ledger: LEDGER_OK, currentSha256: SHA, assessments: [assessment({}, 0.8)] }).state, 'REVISION_REQUIRED');
  const major = { ...critical, id: 'F2', severity: 'major', hardStop: null, check: 4 };
  const a = assessment({ findings: [major] });
  a.checks['4'] = { result: 'issues-found', note: 'thin' };
  a.categories['depth-teaching-value'].points = 12;
  assert.equal(deriveQaState({ ledger: LEDGER_OK, currentSha256: SHA, assessments: [a] }).state, 'REVISION_REQUIRED');
});

test('a structural FAIL blocks regardless of assessments', () => {
  assert.equal(deriveQaState({ ledger: { structuralValidation: 'FAIL', outcome: 'UNVERIFIED' }, currentSha256: SHA, assessments: [assessment()] }).state, 'BLOCKED');
});

test('the newest assessment wins', () => {
  const old = assessment({ id: 'QA-0001', date: '2026-11-01' }, 0.5);
  const now = assessment({ id: 'QA-0002', date: '2026-11-15' });
  assert.equal(deriveQaState({ ledger: LEDGER_OK, currentSha256: SHA, assessments: [now, old] }).state, 'ACADEMIC_REVIEW_PENDING');
});

test('not in the ledger is NOT_ASSESSED', () => {
  assert.equal(deriveQaState({ ledger: null, currentSha256: SHA }).state, 'NOT_ASSESSED');
});

// ---- integrity rules (validator side)
test('a complete, evidenced record has no integrity problems', () => {
  assert.deepEqual(validateAssessment(assessment(), { today: '2026-11-15' }), []);
});

test('a recorded total is rejected: totals are computed', () => {
  assert.ok(validateAssessment(assessment({ total: 99 })).some((p) => p.includes('never recorded')));
});

test('a score without evidence is rejected', () => {
  const a = assessment();
  a.categories['factual-accuracy'].evidence = '';
  assert.ok(validateAssessment(a).some((p) => p.includes('factual-accuracy has a score but no evidence')));
});

test('an AI system recorded as a human assessor is rejected', () => {
  const p = validateAssessment(assessment({ method: 'human', assessor: 'Claude' }), { reviewers: new Map() });
  assert.ok(p.some((x) => x.includes('cannot name an AI system')));
  assert.ok(p.some((x) => x.includes('needs humanEvidence')));
});

test('an ai-assisted record must say so in the assessor field', () => {
  assert.ok(validateAssessment(assessment({ assessor: 'Nouman Ahmed' })).some((p) => p.includes('AI-assisted (<model>)')));
});

test('full marks beside an open major finding is a contradiction', () => {
  const a = assessment({ findings: [{ ...critical, severity: 'major', hardStop: null }] });
  a.checks['2'] = { result: 'issues-found', note: 'x' };
  assert.ok(validateAssessment(a).some((p) => p.includes('full marks despite')));
});

test('"pass" on a check with an open finding is rejected', () => {
  const a = assessment({ findings: [{ ...critical, severity: 'minor', hardStop: null }] });
  assert.ok(validateAssessment(a).some((p) => p.includes('recorded "pass" but this finding is open')));
});

test('a hard-stop must be critical and cannot be waved through as wont-fix', () => {
  const a = assessment({ findings: [{ ...critical, severity: 'minor', status: 'wont-fix', resolution: 'x' }] });
  a.checks['2'] = { result: 'issues-found', note: 'x' };
  const p = validateAssessment(a);
  assert.ok(p.some((x) => x.includes('must be severity critical')));
  assert.ok(p.some((x) => x.includes('cannot be closed as wont-fix')));
});

test('future dates and non-official sources are rejected', () => {
  const p = validateAssessment(assessment({ date: '2099-01-01', sources: [{ url: 'https://example.com/a.pdf' }] }), {
    today: '2026-11-15', resource: { boards: ['cambridge'] }, officialDomains: { cambridge: ['cambridgeinternational.org'] },
  });
  assert.ok(p.some((x) => x.includes('in the future')));
  assert.ok(p.some((x) => x.includes('no source on an official domain')));
});
