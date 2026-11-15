/**
 * Academic QA rubric v1.0.0 (D-454, 15 Nov 2026) -- the scoring and state
 * rules of the Academic Quality Assurance Framework
 * (docs/academic-qa/framework.md). Pure functions only: no file access, so
 * the validator (scripts/validate-academic-qa.mjs), the scorecard
 * (scripts/academic-qa-scorecard.mjs) and the unit tests share one
 * definition.
 *
 * Internal tooling. Nothing on the public site imports this module or the
 * assessment register; rule [Q9] in the validator enforces that.
 *
 * Four kinds of evidence stay separate and are never merged (D-379, D-448):
 *   1. automated structural checks   -- academic-review ledger, every resource
 *   2. repository-side verification  -- pending-review-*.json
 *   3. rubric assessments            -- docs/reports/academic-qa/assessments.json,
 *                                       method "ai-assisted" or "human"
 *   4. documented teacher approval   -- teacher-verifications.json
 * A score (3) is never an approval (4). The accountable-teacher credit
 * (reviewStatus "reviewed") is none of 1-4 and never raises a QA state.
 *
 * Owner decisions, 15 Nov 2026 (D-454):
 *   - VERIFIED_APPROVED needs a documented teacher approval AND a complete
 *     rubric score >= 90 AND no open hard-stop or major finding.
 *   - The build fails now on integrity problems (malformed or unevidenced
 *     scores, open hard-stops). "A new resource has no assessment" is
 *     reported only, until an activation date is set in QA_GATE.
 */

export const RUBRIC_VERSION = '1.0.0';

/** The ten mandatory checks of the framework. */
export const CHECKS = [
  { id: 1, key: 'syllabus-accuracy', name: 'Syllabus accuracy' },
  { id: 2, key: 'factual-accuracy', name: 'Factual and scientific accuracy' },
  { id: 3, key: 'worked-answers', name: 'Mathematical, worked-answer and assessment accuracy' },
  { id: 4, key: 'depth', name: 'Educational depth and teaching value' },
  { id: 5, key: 'source-traceability', name: 'Source traceability' },
  { id: 6, key: 'clarity-accessibility', name: 'Content clarity and accessibility' },
  { id: 7, key: 'originality-copyright', name: 'Originality and copyright compliance' },
  { id: 8, key: 'editorial-accountability', name: 'Editorial and human review accountability' },
  { id: 9, key: 'freshness', name: 'Content freshness and syllabus lifecycle' },
  { id: 10, key: 'student-experience', name: 'Student experience and learning outcomes' },
] as const;

/**
 * The seven weighted categories (100 points). `checks` is the explicit
 * mapping of the ten checks into the categories: originality (7) is scored
 * under source traceability, freshness (9) under syllabus alignment, and
 * student experience (10) under depth and clarity. Each check is also
 * recorded on its own in every assessment, so none disappears into a total.
 */
export const CATEGORIES = [
  { id: 'syllabus-alignment', name: 'Syllabus alignment', max: 20, checks: [1, 9], optional: false },
  { id: 'factual-accuracy', name: 'Factual accuracy', max: 20, checks: [2], optional: false },
  { id: 'worked-answers-exam-alignment', name: 'Worked answers and exam alignment', max: 20, checks: [3], optional: true },
  { id: 'depth-teaching-value', name: 'Depth and teaching value', max: 15, checks: [4, 10], optional: false },
  { id: 'source-traceability', name: 'Source traceability', max: 10, checks: [5, 7], optional: false },
  { id: 'clarity-accessibility', name: 'Clarity and accessibility', max: 10, checks: [6, 10], optional: false },
  { id: 'editorial-completeness', name: 'Editorial completeness', max: 5, checks: [8], optional: false },
] as const;

export const MAX_POINTS = CATEGORIES.reduce((n, c) => n + c.max, 0);

/** Score bands. A Marlbridge policy (D-454), not an awarding-body standard. */
export const BANDS = [
  { id: 'meets-target', min: 90, label: 'Meets the quality target (subject to gates and approval)' },
  { id: 'improve', min: 75, label: 'Improvement and reassessment required' },
  { id: 'major-revision', min: 0, label: 'Major revision required before approval' },
] as const;

/** Hard-stop conditions: any open one blocks the resource whatever its score. */
export const HARD_STOPS = {
  MATERIAL_FACTUAL_ERROR: 'Materially incorrect academic information',
  WRONG_BOARD_OR_QUALIFICATION: 'Incorrect board or qualification',
  WRONG_SYLLABUS_CODE_OR_VERSION: 'Incorrect syllabus code or applicable version',
  INCORRECT_WORKED_ANSWER: 'Incorrect worked answer with material educational impact',
  WRONG_ASSESSMENT_DETAIL: 'Incorrect assessment marks, duration or weighting',
  UNSUPPORTED_COMPLETE_COVERAGE: 'Unsupported claim of complete syllabus coverage',
  FABRICATED_SOURCE: 'Fabricated official source',
  FABRICATED_REVIEW: 'Fabricated teacher review or endorsement',
  CROSS_BOARD_CONTAMINATION: 'Significant cross-board contamination',
  COPYRIGHT_OR_INTEGRITY_CONCERN: 'Serious unaddressed academic-integrity or copyright concern',
  MISLEADING_QUALIFICATION_CLAIM: 'Materially misleading qualification or assessment claim',
} as const;

export const SEVERITIES = ['critical', 'major', 'minor', 'advisory'] as const;
export const FINDING_STATUS = ['open', 'fixed', 'wont-fix'] as const;
export const CHECK_RESULTS = ['pass', 'issues-found', 'not-applicable'] as const;
export const METHODS = ['ai-assisted', 'human'] as const;

/** QA states, most serious first. */
export const QA_STATES = [
  'BLOCKED',
  'REVERIFICATION_REQUIRED',
  'REVISION_REQUIRED',
  'ACADEMIC_REVIEW_PENDING',
  'VERIFIED_APPROVED',
  'AUTOMATED_CHECK_COMPLETE',
  'NOT_ASSESSED',
] as const;
export type QaState = (typeof QA_STATES)[number];

/**
 * Publication gate (owner, 15 Nov 2026). `integrity` problems fail the
 * build now. `newResourceAssessment` stays "report" until the owner sets an
 * activation date; from that date a resource published on or after it with
 * no rubric assessment would fail.
 */
export const QA_GATE = {
  integrity: 'enforce',
  newResourceAssessment: { mode: 'report', activationDate: null as string | null },
} as const;

export interface CategoryScore { points?: number; applicable?: boolean; evidence?: string; reasoning?: string }
export interface Finding {
  id: string; check: number; severity: string; hardStop?: string | null;
  location: string; description: string; evidence: string; status: string; resolution?: string;
}
export interface Assessment {
  id: string; resource: string; rubricVersion: string; method: string; assessor: string;
  date: string; contentSha256: string;
  categories: Record<string, CategoryScore>;
  checks: Record<string, { result: string; note: string }>;
  findings: Finding[];
  [k: string]: unknown;
}
export interface TeacherVerification { resource: string; approval: string; date: string; contentSha256?: string }

const round1 = (n: number) => Math.round(n * 10) / 10;

export function bandFor(total: number | null) {
  if (total === null || Number.isNaN(total)) return null;
  return BANDS.find((b) => total >= b.min)!.id;
}

/**
 * The total is computed, never stored. Only "worked answers" may be marked
 * not applicable (a page with no questions, answers or worked examples);
 * the total is then scaled to 100 over the applicable categories. An
 * assessment with any category unscored has NO total -- never 0 and never
 * a guess.
 */
export function scoreAssessment(a: Pick<Assessment, 'categories'>) {
  let got = 0;
  let max = 0;
  const missing: string[] = [];
  for (const c of CATEGORIES) {
    const s = a.categories?.[c.id];
    if (!s) { missing.push(c.id); continue; }
    if (s.applicable === false) { if (!c.optional) missing.push(c.id); continue; }
    if (typeof s.points !== 'number') { missing.push(c.id); continue; }
    got += s.points;
    max += c.max;
  }
  if (missing.length || max === 0) return { complete: false, total: null, band: null, missing };
  const total = round1((got / max) * MAX_POINTS);
  return { complete: true, total, band: bandFor(total), missing };
}

export const openFindings = (a: Pick<Assessment, 'findings'> | undefined) => (a?.findings ?? []).filter((f) => f.status === 'open');
export const openHardStops = (a: Pick<Assessment, 'findings'> | undefined) => openFindings(a).filter((f) => f.hardStop);

/** The newest record wins (date, then register order). */
export function latest<T extends { date: string }>(records: T[]): T | undefined {
  let best: T | undefined;
  for (const r of records) if (!best || r.date >= best.date) best = r;
  return best;
}

export interface StateInput {
  /** The academic-review ledger row; absent = not in the ledger yet. */
  ledger?: { structuralValidation: string; outcome: string } | null;
  /** sha256 of the resource file now (LF-normalised). */
  currentSha256: string;
  assessments?: Assessment[];
  teacherVerifications?: TeacherVerification[];
}

/**
 * One QA state per resource, with the reasons. Order matters: a blocking
 * problem outranks a stale record, which outranks a revision, and so on.
 * A high score never sets VERIFIED_APPROVED on its own.
 */
export function deriveQaState(input: StateInput): { state: QaState; reasons: string[] } {
  const reasons: string[] = [];
  if (!input.ledger) return { state: 'NOT_ASSESSED', reasons: ['Not in the academic-review ledger yet (run npm run report:review-ledger)'] };

  const a = latest(input.assessments ?? []);
  const tv = latest(input.teacherVerifications ?? []);
  const aCurrent = !!a && a.contentSha256 === input.currentSha256;
  const tvCurrent = !!tv && !!tv.contentSha256 && tv.contentSha256 === input.currentSha256;

  // BLOCKED
  if (input.ledger.structuralValidation === 'FAIL') reasons.push('Automated structural check FAIL (ledger structuralIssues)');
  if (input.ledger.outcome === 'REPO_ISSUES_OPEN') reasons.push('Open error in the repository-side verification record');
  if (a && aCurrent) for (const f of openHardStops(a)) reasons.push(`Open hard-stop ${f.hardStop} (${a.id} ${f.id})`);
  if (reasons.length) return { state: 'BLOCKED', reasons };

  // REVERIFICATION_REQUIRED: the page changed after it was assessed or approved.
  if (a && !aCurrent) reasons.push(`Changed since assessment ${a.id} (${a.date})`);
  if (tv && !tvCurrent) reasons.push(`Changed since teacher verification (${tv.date})${tv.contentSha256 ? '' : ' or the record has no content hash'}`);
  if (reasons.length) return { state: 'REVERIFICATION_REQUIRED', reasons };

  const score = a ? scoreAssessment(a) : null;
  const majors = a ? openFindings(a).filter((f) => f.severity === 'major' || f.severity === 'critical') : [];

  // REVISION_REQUIRED
  if (tv && tv.approval === 'changes-requested') reasons.push(`Teacher requested changes (${tv.date})`);
  if (score?.complete && score.band !== 'meets-target') reasons.push(`Score ${score.total}/100 is below the 90 target (${a!.id})`);
  for (const f of majors) reasons.push(`Open ${f.severity} finding ${f.id}: ${f.description}`);
  if (reasons.length) return { state: 'REVISION_REQUIRED', reasons };

  const approved = !!tv && (tv.approval === 'approved' || tv.approval === 'approved-after-corrections');
  if (score?.complete && approved) return { state: 'VERIFIED_APPROVED', reasons: [`Score ${score.total}/100 (${a!.id}) and teacher approval (${tv!.date})`] };
  if (score?.complete) return { state: 'ACADEMIC_REVIEW_PENDING', reasons: [`Score ${score.total}/100 (${a!.method}, ${a!.id}); documented teacher approval still needed`] };
  if (approved) return { state: 'ACADEMIC_REVIEW_PENDING', reasons: ['Teacher approval recorded; a complete rubric assessment is still needed (D-454)'] };
  if (a) return { state: 'AUTOMATED_CHECK_COMPLETE', reasons: [`Assessment ${a.id} is incomplete (${score!.missing.join(', ')} not scored)`] };
  return { state: 'AUTOMATED_CHECK_COMPLETE', reasons: ['Automated structural checks only; no rubric assessment yet'] };
}

const PLACEHOLDER = /\b(todo|tbd|fixme|placeholder|lorem ipsum)\b|\?\?\?/i;
const blank = (s: unknown) => !String(s ?? '').trim();

export interface ValidateContext {
  resource?: { boards: string[]; subject?: string; publishedDate?: string; syllabusCodes?: string[] };
  /** author profiles: id -> { isReviewer, boards, subjects } */
  reviewers?: Map<string, { isReviewer: boolean; boards: string[]; subjects: string[] }>;
  subjectCovered?: (profileSubjects: string[], subject: string) => boolean;
  officialDomains?: Record<string, string[]>;
  today?: string;
}

/**
 * Integrity problems with one assessment record. Every returned string is a
 * build failure under QA_GATE.integrity = "enforce".
 */
export function validateAssessment(a: Assessment, ctx: ValidateContext = {}): string[] {
  const p: string[] = [];
  const at = `${a?.id ?? '?'} (${a?.resource ?? '?'})`;
  if (!/^QA-\d{4,}$/.test(String(a.id))) p.push(`${at}: id must look like QA-0001.`);
  if (a.rubricVersion !== RUBRIC_VERSION) p.push(`${at}: rubricVersion "${a.rubricVersion}" is not ${RUBRIC_VERSION}.`);
  if (!(METHODS as readonly string[]).includes(a.method)) p.push(`${at}: method "${a.method}" is not one of ${METHODS.join(', ')}.`);
  if ('total' in a || 'score' in a || 'band' in a) p.push(`${at}: totals and bands are computed from the categories, never recorded.`);
  if (!/^[0-9a-f]{64}$/.test(String(a.contentSha256))) p.push(`${at}: contentSha256 must be the 64-hex sha256 of the resource file that was assessed.`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(a.date))) p.push(`${at}: date must be YYYY-MM-DD.`);
  else {
    if (ctx.today && a.date > ctx.today) p.push(`${at}: date ${a.date} is in the future.`);
    if (ctx.resource?.publishedDate && a.date < ctx.resource.publishedDate) p.push(`${at}: date ${a.date} is before the resource was published.`);
  }

  // Who assessed it. AI output can never be recorded as a human assessment.
  if (a.method === 'ai-assisted' && !/^AI-assisted \(.+\)$/.test(String(a.assessor))) p.push(`${at}: an ai-assisted assessor must read "AI-assisted (<model>)".`);
  if (a.method === 'human') {
    if (/\bai\b|claude|gpt|model/i.test(String(a.assessor))) p.push(`${at}: a human assessment cannot name an AI system as assessor.`);
    const prof = ctx.reviewers?.get(String(a.assessor));
    if (ctx.reviewers && (!prof || !prof.isReviewer)) p.push(`${at}: human assessor "${a.assessor}" is not an author profile with isReviewer: true.`);
    else if (prof && ctx.resource) {
      if (!ctx.resource.boards.every((b) => prof.boards.includes(b))) p.push(`${at}: assessor "${a.assessor}"'s profile does not list every board of the resource.`);
      if (ctx.resource.subject && ctx.subjectCovered && !ctx.subjectCovered(prof.subjects, ctx.resource.subject)) p.push(`${at}: assessor "${a.assessor}"'s profile does not cover ${ctx.resource.subject}.`);
    }
    if (blank(a.humanEvidence) || PLACEHOLDER.test(String(a.humanEvidence))) p.push(`${at}: a human assessment needs humanEvidence (where the teacher's own record is kept).`);
  }

  // Sources: at least one on the board's official domain.
  const sources = (a.sources as { url?: string }[] | undefined) ?? [];
  if (ctx.officialDomains && ctx.resource) {
    const doms = ctx.resource.boards.flatMap((b) => ctx.officialDomains![b] ?? []);
    const ok = sources.some((s) => { try { const h = new URL(String(s.url)).hostname; return doms.some((d) => h === d || h.endsWith(`.${d}`)); } catch { return false; } });
    if (!ok) p.push(`${at}: no source on an official domain of the resource's board (${doms.join(', ') || 'none known'}).`);
  }

  // Categories: every score has evidence and reasoning, within range.
  for (const c of CATEGORIES) {
    const s = a.categories?.[c.id];
    if (!s) continue; // incomplete is allowed; it simply has no total
    if (s.applicable === false) {
      if (!c.optional) p.push(`${at}: ${c.id} cannot be marked not applicable.`);
      if (blank(s.reasoning)) p.push(`${at}: ${c.id} marked not applicable without reasoning.`);
      continue;
    }
    if (typeof s.points !== 'number' || s.points < 0 || s.points > c.max || (s.points * 2) % 1 !== 0) p.push(`${at}: ${c.id} points must be 0-${c.max} in half points.`);
    if (blank(s.evidence) || PLACEHOLDER.test(String(s.evidence))) p.push(`${at}: ${c.id} has a score but no evidence.`);
    if (blank(s.reasoning) || PLACEHOLDER.test(String(s.reasoning))) p.push(`${at}: ${c.id} has a score but no reasoning.`);
  }
  for (const k of Object.keys(a.categories ?? {})) if (!CATEGORIES.some((c) => c.id === k)) p.push(`${at}: unknown category "${k}".`);

  // The ten checks, each recorded on its own.
  for (const c of CHECKS) {
    const r = a.checks?.[String(c.id)];
    if (!r) { p.push(`${at}: check ${c.id} (${c.key}) is not recorded.`); continue; }
    if (!(CHECK_RESULTS as readonly string[]).includes(r.result)) p.push(`${at}: check ${c.id} result "${r.result}" is not one of ${CHECK_RESULTS.join(', ')}.`);
    if (blank(r.note)) p.push(`${at}: check ${c.id} has no note.`);
  }

  // Findings.
  const ids = new Set<string>();
  for (const f of a.findings ?? []) {
    const fat = `${at} ${f.id ?? '?'}`;
    if (ids.has(f.id)) p.push(`${fat}: duplicate finding id.`);
    ids.add(f.id);
    if (!CHECKS.some((c) => c.id === f.check)) p.push(`${fat}: check must be 1-10.`);
    if (!(SEVERITIES as readonly string[]).includes(f.severity)) p.push(`${fat}: severity "${f.severity}" is not one of ${SEVERITIES.join(', ')}.`);
    if (!(FINDING_STATUS as readonly string[]).includes(f.status)) p.push(`${fat}: status "${f.status}" is not one of ${FINDING_STATUS.join(', ')}.`);
    if (f.hardStop) {
      if (!(f.hardStop in HARD_STOPS)) p.push(`${fat}: unknown hardStop "${f.hardStop}".`);
      if (f.severity !== 'critical') p.push(`${fat}: a hard-stop finding must be severity critical.`);
      if (f.status === 'wont-fix') p.push(`${fat}: a hard-stop cannot be closed as wont-fix.`);
    }
    for (const k of ['location', 'description', 'evidence'] as const) if (blank(f[k]) || PLACEHOLDER.test(String(f[k]))) p.push(`${fat}: ${k} is empty or a placeholder.`);
    if (f.status !== 'open' && blank(f.resolution)) p.push(`${fat}: a closed finding needs a resolution.`);
    // A check recorded as "pass" cannot carry an open finding.
    if (f.status === 'open' && a.checks?.[String(f.check)]?.result === 'pass') p.push(`${fat}: check ${f.check} is recorded "pass" but this finding is open.`);
    // Full marks in a category with an open major/critical finding is a contradiction.
    if (f.status === 'open' && (f.severity === 'critical' || f.severity === 'major')) {
      for (const c of CATEGORIES) {
        const s = a.categories?.[c.id];
        if ((c.checks as readonly number[]).includes(f.check) && s && s.points === c.max) p.push(`${fat}: ${c.id} has full marks despite this open ${f.severity} finding.`);
      }
    }
  }
  return p;
}
