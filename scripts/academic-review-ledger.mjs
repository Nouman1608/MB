#!/usr/bin/env node
/**
 * Academic-review ledger (post-audit remediation, 4 Oct 2026, D-386).
 *
 * One row for EVERY resource in src/content/resources/, written to
 *   docs/reports/academic-review/ledger.json
 *   docs/reports/academic-review/ledger.csv
 *   docs/reports/academic-review/ledger-summary.md
 *   docs/reports/academic-review/signoff-queue.md
 *   docs/reports/academic-review/signoff-by-teacher.md
 *
 * Three different things are kept apart on purpose, and never merged:
 *   1. Automated structural checks, run here on every resource, every time.
 *   2. Repository-side academic verification -- read from the committed,
 *      dated results file docs/reports/academic-review/pending-review-*.json
 *      (one record per resource that was review-pending when it was done).
 *      It is evidence of a check against the official specification, NOT a
 *      teacher review and NOT a sign-off.
 *   3. The site's own review metadata (reviewStatus / reviewer /
 *      reviewedDate), copied from frontmatter exactly as it is. Since the
 *      owner's decision D-379 (1 Oct 2026) "reviewed" means a named subject
 *      teacher is credited as accountable for the page; it is not a record
 *      of a dated, line-by-line check, and this ledger never says it is.
 *
 * Nothing here ever changes a resource. Output is deterministic: the same
 * repository state always produces byte-identical files (no generation
 * timestamp; the dates shown come from the data).
 *
 * ledger.csv holds one row per resource; ledger.json holds the totals,
 * meanings and integrity result for the same run.
 *
 * Usage: node --experimental-strip-types scripts/academic-review-ledger.mjs [--check]
 *   --check  regenerate in memory and fail if the committed files differ,
 *            or if any structural FAIL or ledger-integrity problem exists.
 */
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { MATRIX } from '../src/data/academic/matrix.ts';
import { SYLLABUSES } from '../src/data/academic/syllabuses.ts';
import { SYLLABUS_TOPICS } from '../src/data/academic/syllabus-topics.ts';
import { SUBJECTS } from '../src/data/academic/subjects.ts';
import { ASSESSMENTS } from '../src/data/academic/assessments.ts';
import { subjectCovered } from '../src/utils/content/subject-match.mjs';

const RES_DIR = 'src/content/resources';
const AUTH_DIR = 'src/content/authors';
const OUT_DIR = 'docs/reports/academic-review';
const CHECK = process.argv.includes('--check');

/** Official domains per board -- kept in step with validate-assessments.mjs BOARD_DOMAINS. */
const BOARD_DOMAINS = {
  cambridge: ['cambridgeinternational.org'],
  aqa: ['aqa.org.uk'],
  ocr: ['ocr.org.uk'],
  oxfordaqa: ['oxfordaqa.com'],
  edexcel: ['qualifications.pearson.com', 'pearson.com'],
  ib: ['ibo.org'],
};

// ---------------------------------------------------------------- helpers
const scalar = (fm, key) => {
  const m = fm.match(new RegExp(`^${key}:\\s*(.*)$`, 'm'));
  if (!m) return '';
  return m[1].trim().replace(/^["']|["']$/g, '');
};
const list = (fm, key) => {
  const m = fm.match(new RegExp(`^${key}:\\s*\\[(.*)\\]`, 'm'));
  if (!m) return [];
  return m[1].split(',').map((s) => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
};
const topicsBlock = (fm) => {
  const block = fm.match(/^syllabusTopics:\s*\n([\s\S]*?)(?=^\S|(?![\s\S]))/m);
  if (!block) return [];
  return block[1].split(/^\s*-\s+/m).slice(1).map((e) => ({
    qualification: (e.match(/qualification:\s*"?([a-z-]+)"?/) || [])[1],
    topic: (e.match(/topic:\s*"?([a-z0-9-]+)"?/) || [])[1],
    subtopic: (e.match(/subtopic:\s*"?([a-z0-9-]+)"?/) || [])[1],
  }));
};
const csvCell = (v) => {
  const s = Array.isArray(v) ? v.join(' | ') : (v ?? '').toString();
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

// ------------------------------------------------------------ reference data
const subjectSlugsFor = (contentId) => {
  const out = SUBJECTS.filter((s) => (s.hubId ?? s.slug) === contentId).map((s) => s.slug);
  return out.length ? out : [contentId];
};
const ACTIVE = new Set(MATRIX.filter((m) => m.marlbridgeStatus === 'ACTIVE' && m.boardOfferingStatus === 'ACTIVE')
  .map((m) => `${m.boardSlug}|${m.qualificationSlug}|${m.subjectSlug}`));

const codesByCombo = new Map();
// Codes are recorded in several established forms: a plain code ('0620'), a
// pair ('3247 / 3248'), versioned IB names ('DP Psychology (2019) / DP
// Psychology (2027)'), related qualification/unit codes (syllabuses.ts
// relatedCodes) and unit paper codes ('WBS11/01', assessments.ts). Each form
// and each part of it counts as a code of that combination.
const addCode = (k, c) => {
  if (!c) return;
  if (!codesByCombo.has(k)) codesByCombo.set(k, new Set());
  const set = codesByCombo.get(k);
  const whole = String(c).trim();
  set.add(whole);
  for (const part of whole.split(/\s+\/\s+|,\s*/)) { const p = part.trim(); if (p) { set.add(p); set.add(p.replace(/\s*\(\d{4}\)$/, '')); } }
};
for (const s of SYLLABUSES) {
  const k = `${s.boardSlug}|${s.qualificationSlug}|${s.subjectSlug}`;
  addCode(k, s.code);
  for (const rc of [].concat(s.relatedCodes ?? [])) addCode(k, typeof rc === 'string' ? rc : rc?.code);
}
for (const a of ASSESSMENTS) {
  const k = `${a.boardSlug}|${a.qualificationSlug}|${a.subjectSlug}`;
  addCode(k, a.code);
  for (const c of a.components) if (/^[A-Z0-9]{4,6}\/\d{2}$/.test(c.paperCode)) { addCode(k, c.paperCode); addCode(k, c.paperCode.split('/')[0]); }
}
for (const m of MATRIX) addCode(`${m.boardSlug}|${m.qualificationSlug}|${m.subjectSlug}`, m.qualificationCode);
for (const v of SYLLABUS_TOPICS) addCode(`${v.boardSlug}|${v.qualificationSlug}|${v.subjectSlug}`, v.syllabusCode);

const officialUrlByCombo = new Map(SYLLABUSES.filter((s) => s.officialUrl).map((s) => [`${s.boardSlug}|${s.qualificationSlug}|${s.subjectSlug}`, s.officialUrl]));

const topicIndex = new Map();
const sourceByCombo = new Map();
for (const s of SYLLABUS_TOPICS) {
  if (s.status === 'future') continue;
  const key = `${s.boardSlug}|${s.qualificationSlug}|${s.subjectSlug}`;
  const e = topicIndex.get(key) ?? { topics: new Set(), subtopics: new Set() };
  for (const t of s.topics) { e.topics.add(t.slug); for (const st of t.subtopics ?? []) e.subtopics.add(st.slug); }
  topicIndex.set(key, e);
  if (!sourceByCombo.has(key) && s.sourceUrl) sourceByCombo.set(key, s.sourceUrl);
}
const tieredCombos = new Set(SYLLABUS_TOPICS.filter((s) => s.tiered).map((s) => `${s.boardSlug}|${s.qualificationSlug}|${s.subjectSlug}`));

const authors = new Map();
for (const f of readdirSync(AUTH_DIR).filter((x) => x.endsWith('.md'))) {
  const fm = readFileSync(join(AUTH_DIR, f), 'utf8').split('---')[1] ?? '';
  const listOf = (k) => { try { return JSON.parse(fm.match(new RegExp(`^${k}:\\s*(\\[.*\\])`, 'm'))?.[1] ?? '[]'); } catch { return []; } };
  authors.set(f.replace(/\.md$/, ''), {
    isReviewer: /^isReviewer:\s*true/m.test(fm),
    name: (fm.match(/^name:\s*"?([^"\n]+)"?/m) || [])[1] ?? f.replace(/\.md$/, ''),
    subjects: listOf('subjectsTaught'),
    boards: listOf('boardsTaught'),
  });
}

// Repository-side verification results (dated files; the newest record per slug wins).
const reviewFiles = existsSync(OUT_DIR) ? readdirSync(OUT_DIR).filter((f) => /^pending-review-\d{4}-\d{2}-\d{2}\.json$/.test(f)).sort() : [];
const verification = new Map();
for (const f of reviewFiles) {
  const d = JSON.parse(readFileSync(join(OUT_DIR, f), 'utf8'));
  for (const r of d.results) verification.set(r.slug, { ...r, date: d.meta.date, file: `${OUT_DIR}/${f}` });
}

// ------------------------------------------------------------ resources
const files = readdirSync(RES_DIR).filter((f) => f.endsWith('.md')).sort();
const slugs = new Set(files.map((f) => f.replace(/\.md$/, '')));
const docs = files.map((f) => {
  const raw = readFileSync(join(RES_DIR, f), 'utf8');
  const parts = raw.split(/^---$/m);
  return { file: `${RES_DIR}/${f}`, slug: f.replace(/\.md$/, ''), fm: parts[1] ?? '', body: parts.slice(2).join('---') };
});

// Near-duplicate detection: 8-word shingles, compared within subject + resource type.
const shingles = (text) => {
  const w = text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean);
  const s = new Set();
  for (let i = 0; i + 8 <= w.length; i++) s.add(w.slice(i, i + 8).join(' '));
  return s;
};
const nearDup = new Map();
const groups = new Map();
for (const d of docs) {
  const k = `${scalar(d.fm, 'subject')}|${scalar(d.fm, 'resourceType')}`;
  if (!groups.has(k)) groups.set(k, []);
  groups.get(k).push({ slug: d.slug, sh: shingles(d.body) });
}
for (const g of groups.values()) {
  for (let i = 0; i < g.length; i++) for (let j = i + 1; j < g.length; j++) {
    const a = g[i].sh, b = g[j].sh;
    if (!a.size || !b.size) continue;
    const [small, big] = a.size < b.size ? [a, b] : [b, a];
    let inter = 0; for (const x of small) if (big.has(x)) inter++;
    const jac = inter / (a.size + b.size - inter);
    if (jac >= 0.5) {
      for (const [x, y] of [[g[i].slug, g[j].slug], [g[j].slug, g[i].slug]]) {
        if (!nearDup.has(x)) nearDup.set(x, []);
        nearDup.get(x).push(`${y} (${jac.toFixed(2)})`);
      }
    }
  }
}

const PLACEHOLDER = /\b(TODO|TBD|FIXME|lorem ipsum)\b|\[insert|\bcoming soon\b/i;
const PAST_PAPER = /\b(?:May\/June|June|November|October\/November|January|Summer|Winter)\s+20\d\d\b[^.\n]{0,40}\bPaper\s*\d/i;

const rows = [];
for (const d of docs) {
  const fm = d.fm;
  const boards = list(fm, 'boards');
  const quals = list(fm, 'qualifications');
  const codes = list(fm, 'syllabusCodes');
  const subject = scalar(fm, 'subject');
  const type = scalar(fm, 'resourceType');
  const topics = topicsBlock(fm);
  const author = scalar(fm, 'author');
  const reviewer = scalar(fm, 'reviewer');
  const reviewStatus = scalar(fm, 'reviewStatus') || 'review-pending';
  const reviewedDate = scalar(fm, 'reviewedDate');
  const publishedDate = scalar(fm, 'publishedDate');
  // D-388 -- the "Checked by Marlbridge Academic Team" block (nested YAML).
  const specBlock = fm.match(/^specCheck:\s*\n((?:[ \t]+\S.*\n?)+)/m)?.[1] ?? '';
  const specSub = (k) => specBlock.match(new RegExp(`^[ \\t]+${k}:\\s*"?([\\w-]+)"?`, 'm'))?.[1] ?? '';
  const specCheck = specBlock ? [specSub('by'), specSub('date'), specSub('scope')].join(' ') : '';
  const stage = scalar(fm, 'stage');
  const fails = [];
  const warns = [];

  // Board / qualification / subject against the ACTIVE matrix.
  const combos = [];
  for (const b of boards) for (const q of quals) for (const s of subjectSlugsFor(subject)) {
    if (ACTIVE.has(`${b}|${q}|${s}`)) combos.push(`${b}|${q}|${s}`);
  }
  if (!boards.length) fails.push('no-board');
  if (!quals.length) fails.push('no-qualification');
  if (!subject) fails.push('no-subject');
  if (boards.length && quals.length && subject && !combos.length) fails.push('no-active-combination');

  // Specification code belongs to a declared combination (cross-board isolation).
  const knownCodes = new Set(combos.flatMap((c) => [...(codesByCombo.get(c) ?? [])]));
  const foreignCodes = codes.filter((c) => !knownCodes.has(c) && !c.split(/\s+\/\s+/).every((p) => knownCodes.has(p.trim())));
  if (!codes.length) warns.push('no-syllabus-code');
  if (foreignCodes.length) fails.push(`code-not-in-declared-combination:${foreignCodes.join('/')}`);

  if (!scalar(fm, 'syllabusSeries')) warns.push('no-syllabus-series');

  // Topic and subtopic mapping (same resolution as validate-academic-content.mjs).
  if (!topics.length) warns.push('no-topic-mapping');
  for (const t of topics) {
    const idxs = boards.flatMap((b) => subjectSlugsFor(subject).map((s) => topicIndex.get(`${b}|${t.qualification}|${s}`))).filter(Boolean);
    if (!idxs.length) { fails.push(`no-taxonomy:${t.qualification}`); continue; }
    if (t.topic && !idxs.some((i) => i.topics.has(t.topic))) fails.push(`unknown-topic:${t.topic}`);
    if (t.subtopic && !idxs.some((i) => i.subtopics.has(t.subtopic))) fails.push(`unknown-subtopic:${t.subtopic}`);
  }
  if (stage && !['AS', 'A'].includes(stage)) fails.push(`invalid-stage:${stage}`);

  // Tier terminology: wording from the other tier scheme.
  const isTiered = combos.some((c) => tieredCombos.has(c));
  if (isTiered) {
    const camIgcse = combos.some((c) => c.startsWith('cambridge|igcse|'));
    const fhScheme = combos.some((c) => /^(aqa|ocr)\|gcse\||^edexcel\|igcse\|/.test(c));
    if (camIgcse && /\b(Foundation|Higher) tier\b/i.test(d.body)) warns.push('tier-term-foundation-higher-on-core-extended');
    if (fhScheme && /\((?:Extended|Core)(?: only)?\)|\bExtended tier\b|\bCore tier\b/.test(d.body)) warns.push('tier-term-core-extended-on-foundation-higher');
  }

  // Official-source attribution. Every resource page renders "Official
  // specification" links from syllabuses.ts for each declared combination
  // (src/pages/resources/[slug].astro, officialSyllabuses), so attribution
  // exists when such a record with an official URL resolves, or when the body
  // itself links the board's official site.
  const domains = boards.flatMap((b) => BOARD_DOMAINS[b] ?? []);
  const linksOfficial = domains.some((dom) => d.body.includes(dom));
  const rendersOfficial = combos.some((c) => officialUrlByCombo.has(c));
  if (!linksOfficial && !rendersOfficial) warns.push('no-official-source-attribution');

  // Author and reviewer references; review-state integrity.
  if (!author) warns.push('no-author');
  else if (!authors.has(author)) fails.push(`unknown-author:${author}`);
  if (reviewer) {
    if (!authors.has(reviewer)) fails.push(`unknown-reviewer:${reviewer}`);
    else if (!authors.get(reviewer).isReviewer) fails.push(`reviewer-not-designated:${reviewer}`);
    if (reviewer === author) fails.push('self-review');
  }
  if (reviewStatus === 'reviewed') {
    if (!reviewer) fails.push('reviewed-without-reviewer');
    if (!reviewedDate) fails.push('reviewed-without-date');
  }
  if (reviewStatus !== 'reviewed' && reviewedDate) fails.push('reviewed-date-without-reviewed-status');
  if (reviewStatus === 'reviewed' && specCheck) fails.push('spec-check-on-reviewed-page');
  if (reviewedDate && publishedDate && reviewedDate < publishedDate) fails.push('reviewed-before-published');

  // Internal links that can be resolved from repository data.
  const broken = [];
  for (const m of d.body.matchAll(/\]\((\/[^)\s#?]*)/g)) {
    const p = m[1];
    let mm;
    if ((mm = p.match(/^\/resources\/([^/]+)\/?$/)) && !slugs.has(mm[1])) broken.push(p);
    else if ((mm = p.match(/^\/authors\/([^/]+)\/?$/)) && !authors.has(mm[1])) broken.push(p);
    else if ((mm = p.match(/^\/(?:boards|checklists)\/([^/]+)\/([^/]+)\/([^/]+)\/?$/)) && !ACTIVE.has(`${mm[1]}|${mm[2]}|${mm[3]}`)) broken.push(p);
  }
  if (broken.length) fails.push(`broken-internal-link:${broken.join('/')}`);

  // Questions and answers.
  let qa = 'NA';
  if (type === 'practice-questions') {
    // Questions sit under "## Questions" or "## Section A/B/C" headings; the
    // answers under "## Answers" (or "Answer plans", "Answer (worked)",
    // "Worked answers", "Model approach" or "Mark scheme" for essay subjects).
    const ansAt = d.body.search(/^##\s+(?:Answers?\b|Answer plans\b|Worked answers\b|Mark scheme\b|Model (?:answers?|approach)\b)/im);
    const qRegion = ansAt >= 0 ? d.body.slice(0, ansAt) : d.body;
    const qCount = (qRegion.match(/^\*\*\d+\.?\*\*|^\*\*\d+\.\s|^\d+\.\s+\*\*|^\*\*Q\d+|^\*\*Question \d+/gm) || []).length;
    if (!qCount) { qa = 'WARN'; warns.push('no-numbered-questions-found'); }
    else if (ansAt < 0) { qa = 'FAIL'; fails.push('missing-answer-guidance'); }
    else qa = 'PASS';
  }

  if (PLACEHOLDER.test(d.body)) fails.push('placeholder-language');
  if (PAST_PAPER.test(d.body)) warns.push('names-a-specific-past-paper (check it is referenced, not reproduced)');
  if (nearDup.has(d.slug)) warns.push(`near-duplicate-of:${nearDup.get(d.slug).join('; ')}`);

  const structural = fails.length ? 'FAIL' : warns.length ? 'WARN' : 'PASS';
  // Teachers who COULD be named as reviewer under the rules the build enforces
  // (validate-review-integrity.mjs [3], [8], [9], [10]): designated reviewer,
  // not the author, profile lists every board and covers the subject. This is
  // eligibility only -- nobody is assigned; the teacher must accept the page.
  const eligible = [...authors].filter(([slug, a]) => a.isReviewer && slug !== author
    && boards.every((b) => a.boards.includes(b)) && subject && subjectCovered(a.subjects, subject)).map(([slug]) => slug).sort();
  const v = verification.get(d.slug);
  const isReviewed = reviewStatus === 'reviewed';

  let outcome, blocker, academic, qaResult, calc, terminology, crossBoard;
  if (v) {
    outcome = { VERIFIED: 'REPO_VERIFIED', VERIFIED_AFTER_CORRECTION: 'REPO_VERIFIED_AFTER_CORRECTION', PARTIAL_UNVERIFIABLE: 'REPO_PARTIAL_UNVERIFIABLE', ISSUES_OPEN: 'REPO_ISSUES_OPEN' }[v.outcome] ?? `REPO_${v.outcome}`;
    academic = v.academicContent; qaResult = v.questionsAnswers; calc = v.calculations;
    terminology = v.terminology; crossBoard = v.crossBoardIsolation;
    const parts = [];
    if (!isReviewed) parts.push('Named-reviewer sign-off required under the editorial policy (no reviewer assigned)');
    if (v.outcome === 'PARTIAL_UNVERIFIABLE') parts.push(`${(v.unverifiable ?? []).length} claim(s) not checkable against a public official source`);
    if (v.outcome === 'ISSUES_OPEN') parts.push('Open error recorded in the verification file');
    blocker = parts.join('; ');
  } else if (isReviewed) {
    outcome = 'TEACHER_CREDITED';
    academic = qaResult = calc = terminology = crossBoard = 'NOT_RECHECKED_THIS_PROGRAMME';
    blocker = 'None under the D-379 meaning of "reviewed" (accountable teacher credit); no dated line-by-line review is on record';
  } else {
    outcome = 'UNVERIFIED';
    academic = qaResult = calc = terminology = crossBoard = 'NOT_CHECKED';
    blocker = 'Not yet verified against its specification; named-reviewer sign-off required';
  }

  rows.push({
    filename: d.file,
    slug: d.slug,
    title: scalar(fm, 'title'),
    board: boards,
    qualification: quals,
    subject,
    specificationCode: codes,
    specificationSeries: scalar(fm, 'syllabusSeries'),
    stage,
    tier: isTiered ? 'tiered syllabus (per-question labels)' : '',
    topicMappings: topics.map((t) => [t.qualification, t.topic, t.subtopic].filter(Boolean).join('/')),
    resourceType: type,
    author,
    reviewer,
    reviewStatus,
    reviewedDate,
    eligibleReviewers: reviewStatus === 'reviewed' ? [] : eligible,
    specCheck,
    officialSourceUrl: v?.specSourceUsed || combos.map((c) => sourceByCombo.get(c)).find(Boolean) || '',
    structuralValidation: structural,
    structuralIssues: [...fails, ...warns],
    academicContent: academic,
    questionsAnswers: qaResult,
    questionsAnswersStructure: qa,
    calculations: calc,
    terminology,
    crossBoardIsolation: crossBoard,
    outcome,
    issuesFound: v ? [...(v.corrections ?? []).map((c) => `CORRECTED ${c.location}: ${c.reason}`), ...(v.openIssues ?? []).map((i) => `${i.severity.toUpperCase()} ${i.location}: ${i.description}`)] : [],
    correctiveCommit: v?.correctiveCommits ?? [],
    verificationRecord: v ? `${v.file} (${v.date})` : '',
    remainingBlocker: blocker,
  });
}

// ------------------------------------------------------------ integrity
const integrity = [];
const seen = new Map();
for (const r of rows) seen.set(r.slug, (seen.get(r.slug) ?? 0) + 1);
for (const [s, n] of seen) if (n !== 1) integrity.push(`duplicate ledger row: ${s} (${n})`);
for (const s of slugs) if (!seen.has(s)) integrity.push(`resource missing from ledger: ${s}`);
for (const s of verification.keys()) if (!slugs.has(s)) integrity.push(`verification record for a resource that no longer exists: ${s}`);
for (const r of rows) {
  if (r.reviewStatus !== 'reviewed' && r.reviewer) integrity.push(`${r.slug}: reviewer set while not reviewed`);
}

// ------------------------------------------------------------ outputs
const count = (fn) => { const o = {}; for (const r of rows) { const k = fn(r); o[k] = (o[k] ?? 0) + 1; } return Object.fromEntries(Object.entries(o).sort()); };
const totals = {
  resources: rows.length,
  reviewStatus: count((r) => r.reviewStatus),
  outcome: count((r) => r.outcome),
  structuralValidation: count((r) => r.structuralValidation),
  withVerificationRecord: rows.filter((r) => r.verificationRecord).length,
  withSpecCheck: rows.filter((r) => r.specCheck).length,
  correctedInThisProgramme: rows.filter((r) => r.correctiveCommit.length).length,
  pendingWithoutReviewer: rows.filter((r) => r.reviewStatus !== 'reviewed' && !r.reviewer).length,
};
const meaning = {
  reviewed: 'A named Marlbridge subject teacher (reviewer, different from the author, designated isReviewer) is credited as accountable for the page. Owner decision D-379 (1 Oct 2026): this is not a record of a dated, line-by-line check.',
  'review-pending': 'No accountable teacher is credited yet. Accuracy rests on the page\'s own citation of the official specification and the corrections process.',
  reviewer: 'The credited accountable teacher (an author profile with isReviewer: true).',
  reviewedDate: 'The date the reviewer credit was applied to the page; not the date of a review.',
  specCheck: 'D-388: the page shows "Checked by Marlbridge Academic Team" with the date and scope (official specification, or the board\'s public course documents where the full guide is licensed). Set on review-pending pages with no eligible teacher whose repository-side verification read an official source. Not a teacher review; the page stays review-pending.',
  repositoryVerification: 'A check of the page against its official specification recorded in docs/reports/academic-review/pending-review-*.json. Not a teacher review and not a sign-off.',
};


const COLUMNS = ['filename', 'slug', 'title', 'board', 'qualification', 'subject', 'specificationCode', 'specificationSeries', 'stage', 'tier', 'topicMappings', 'resourceType', 'author', 'reviewer', 'reviewStatus', 'reviewedDate', 'eligibleReviewers', 'specCheck', 'officialSourceUrl', 'structuralValidation', 'structuralIssues', 'academicContent', 'questionsAnswers', 'questionsAnswersStructure', 'calculations', 'terminology', 'crossBoardIsolation', 'outcome', 'issuesFound', 'correctiveCommit', 'verificationRecord', 'remainingBlocker'];

// The per-resource rows live in ledger.csv (one place, ~2.4 MB); ledger.json
// carries the meanings, totals, integrity result and column list, so the two
// cannot drift and a regeneration does not churn two large copies of the rows.
const json = JSON.stringify({ meaning, totals, integrity, rowsFile: `${OUT_DIR}/ledger.csv`, rowCount: rows.length, columns: COLUMNS }, null, 2) + '\n';
const csv = [COLUMNS.join(','), ...rows.map((r) => COLUMNS.map((c) => csvCell(r[c])).join(','))].join('\n') + '\n';

const pending = rows.filter((r) => r.reviewStatus !== 'reviewed');
const queueGroups = new Map();
for (const r of pending) {
  const k = `${r.board.join('/')} · ${r.qualification.join('/')} · ${r.subject} (${r.specificationCode.join('/') || 'no code'})`;
  if (!queueGroups.has(k)) queueGroups.set(k, []);
  queueGroups.get(k).push(r);
}
const tableOf = (obj) => Object.entries(obj).map(([k, v]) => `| ${k} | ${v} |`).join('\n');

const md = `# Academic-review ledger — summary

Generated by \`npm run report:review-ledger\` from the current repository. The full
per-resource ledger is [\`ledger.csv\`](ledger.csv) (one row per resource,
${rows.length} rows); [\`ledger.json\`](ledger.json) holds the same run's totals. This summary has no generation
timestamp: rerunning it on the same repository produces the same file.

## What the words mean

- **reviewed** — ${meaning.reviewed}
- **review-pending** — ${meaning['review-pending']}
- **reviewer** — ${meaning.reviewer}
- **reviewedDate** — ${meaning.reviewedDate}
- **specCheck** — ${meaning.specCheck}
- **Repository-side verification** — ${meaning.repositoryVerification}

A build or validator pass is none of the above. "Academic review complete" is not
claimed: repository-side verification of every pending resource is recorded, but
the human sign-off is outstanding for every review-pending resource.

## Totals

| Resources | ${totals.resources} |
| --- | --- |
| With a repository-side verification record | ${totals.withVerificationRecord} |
| Corrected in the 4 Oct 2026 programme | ${totals.correctedInThisProgramme} |
| Pending with no reviewer assigned | ${totals.pendingWithoutReviewer} |
| Showing "Checked by Marlbridge Academic Team" (specCheck) | ${totals.withSpecCheck} |

**Review status (frontmatter)**

| Status | Resources |
| --- | --- |
${tableOf(totals.reviewStatus)}

**Ledger outcome**

| Outcome | Resources |
| --- | --- |
${tableOf(totals.outcome)}

- \`TEACHER_CREDITED\` — marked reviewed (accountable-teacher credit). Metadata
  validated here; content not re-checked in this programme.
- \`REPO_VERIFIED\` / \`REPO_VERIFIED_AFTER_CORRECTION\` — checked against the official
  specification, no error remaining. Still review-pending: awaiting sign-off.
- \`REPO_PARTIAL_UNVERIFIABLE\` — no error found, but some claims could not be checked
  against a public official source (mostly licensed IB guide content).
- \`UNVERIFIED\` — review-pending and not yet checked (should be 0 after a review pass;
  new resources appear here until checked).

**Automated structural checks**

| Result | Resources |
| --- | --- |
${tableOf(totals.structuralValidation)}

FAIL = a hard rule broken (unknown board/topic/author, review-state integrity,
broken internal link, missing answers, placeholder text). WARN = something for a
person to look at (no series, no official link, a named past paper, a near-duplicate,
other-scheme tier wording). See \`structuralIssues\` in the ledger for each row.

## Ledger integrity

${integrity.length ? integrity.map((i) => `- ${i}`).join('\n') : 'Every resource appears exactly once; every verification record matches an existing resource.'}

## Sign-off queue

${pending.length} resources are review-pending and need a named, authorised Marlbridge
reviewer to accept them under the editorial policy. The queue, grouped by course, is
in [\`signoff-queue.md\`](signoff-queue.md), and by eligible teacher in
[\`signoff-by-teacher.md\`](signoff-by-teacher.md). No reviewer has been assigned or inferred.
`;

const queue = `# Named-reviewer sign-off queue

Every resource whose \`reviewStatus\` is not \`reviewed\` (${pending.length} resources),
grouped by course. Generated by \`npm run report:review-ledger\`; no generation
timestamp. No reviewer is suggested or assigned here: a reviewer must be a real,
designated Marlbridge teacher who accepts the page under the editorial policy.

To sign off a page, the reviewer reads it against the official specification it
cites (the repository-side verification record helps: see \`verificationRecord\` and
\`issuesFound\` in [\`ledger.csv\`](ledger.csv)), then sets \`reviewer\`, \`reviewStatus:
"reviewed"\` and \`reviewedDate\` in the page's frontmatter in one commit that names them.

${[...queueGroups.entries()].sort().map(([k, rs]) => `## ${k} — ${rs.length}

| Resource | Type | Verification outcome |
| --- | --- | --- |
${rs.map((r) => `| \`${r.slug}\` | ${r.resourceType} | ${r.outcome} |`).join('\n')}
`).join('\n')}`;

const byTeacher = new Map();
const noEligible = [];
for (const r of pending) {
  if (!r.eligibleReviewers.length) noEligible.push(r);
  for (const t of r.eligibleReviewers) { if (!byTeacher.has(t)) byTeacher.set(t, []); byTeacher.get(t).push(r); }
}
const teacherLine = (r) => `| \`${r.slug}\` | ${r.board.join('/')} ${r.qualification.join('/')} ${r.subject} (${r.specificationCode.join('/') || 'no code'}) | ${r.resourceType} | ${r.outcome.replace('REPO_', '')} | ${r.eligibleReviewers.length > 1 ? r.eligibleReviewers.length - 1 : 0} |`;
const byTeacherMd = `# Sign-off lists by teacher

Generated by \`npm run report:review-ledger\`; no generation timestamp. For every
review-pending resource, the Marlbridge teachers who **could** be named as its reviewer
under the rules the build enforces: a designated reviewer (\`isReviewer: true\`), not
the page's author, whose profile lists every exam board on the page and a subject that
covers it (the same checks as \`scripts/validate-review-integrity.mjs\`).

**Nobody is assigned here.** A page becomes \`reviewed\` only when one of these teachers
reads it against the official specification it cites and accepts it; then the page's
frontmatter gets their \`reviewer\`, \`reviewStatus: "reviewed"\` and the real
\`reviewedDate\`, in a commit that names them. A page eligible for several teachers needs
only one of them. "Also eligible" counts the other teachers who could take it.
The repository-side verification outcome is shown to help the reviewer; it is not a
review.

## Summary

| Teacher | Profile slug | Pages eligible |
| --- | --- | --- |
${[...byTeacher.entries()].sort((a, b) => b[1].length - a[1].length || (a[0] < b[0] ? -1 : 1)).map(([t, rs]) => `| ${authors.get(t).name} | \`${t}\` | ${rs.length} |`).join('\n')}
| *No eligible teacher* | — | ${noEligible.length} |

${pending.length} review-pending pages in total; a page can appear under more than one teacher.

${[...byTeacher.entries()].sort((a, b) => b[1].length - a[1].length || (a[0] < b[0] ? -1 : 1)).map(([t, rs]) => `## ${authors.get(t).name} (\`${t}\`) — ${rs.length}

| Resource | Course | Type | Verification | Also eligible |
| --- | --- | --- | --- | --- |
${rs.map(teacherLine).join('\n')}
`).join('\n')}
## No eligible teacher — ${noEligible.length}

These pages have no designated reviewer whose profile covers their board(s) and subject.
Signing them off needs a teacher profile to be updated (or a new reviewer designated)
first, which is an owner decision. Those whose repository-side verification read an
official source show "Checked by Marlbridge Academic Team" (specCheck, D-388); that line
is not a review and does not change their status.

| Resource | Course | Type | Verification | Also eligible |
| --- | --- | --- | --- | --- |
${noEligible.map(teacherLine).join('\n')}
`;

const outputs = {
  [`${OUT_DIR}/ledger.json`]: json,
  [`${OUT_DIR}/ledger.csv`]: csv,
  [`${OUT_DIR}/ledger-summary.md`]: md,
  [`${OUT_DIR}/signoff-queue.md`]: queue,
  [`${OUT_DIR}/signoff-by-teacher.md`]: byTeacherMd,
};

let problems = 0;
if (CHECK) {
  for (const [p, content] of Object.entries(outputs)) {
    const cur = existsSync(p) ? readFileSync(p, 'utf8') : null;
    if (cur !== content) { console.log(`✗ ${p} is out of date — run npm run report:review-ledger`); problems++; }
  }
} else {
  mkdirSync(OUT_DIR, { recursive: true });
  for (const [p, content] of Object.entries(outputs)) writeFileSync(p, content);
  console.log(`Wrote ${Object.keys(outputs).join(', ')}`);
}
const structuralFails = rows.filter((r) => r.structuralValidation === 'FAIL');
console.log(`Ledger: ${rows.length} resources; status ${JSON.stringify(totals.reviewStatus)}; outcome ${JSON.stringify(totals.outcome)}; structural ${JSON.stringify(totals.structuralValidation)}`);
for (const r of structuralFails) console.log(`  ✗ structural FAIL ${r.slug}: ${r.structuralIssues.filter((i) => !i.startsWith('no-') || i.startsWith('no-active') || i.startsWith('no-taxonomy')).join(', ')}`);
for (const i of integrity) { console.log(`  ✗ ${i}`); problems++; }
if (CHECK && structuralFails.length) problems += structuralFails.length;
if (problems) { console.log(`\nLedger check FAILED (${problems} problem(s)).`); process.exit(1); }
console.log(CHECK ? 'Ledger check OK.' : 'Done.');
