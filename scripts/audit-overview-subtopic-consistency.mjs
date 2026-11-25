#!/usr/bin/env node
/**
 * D-536 (owner decision) -- overview-vs-subtopic contradiction check.
 * REPORT ONLY: always exits 0; writes
 * reports/owner-decisions/overview-subtopic-contradictions.md.
 *
 * Overview pages = resourceType subject-guides and exam-preparation.
 * Subtopic pages = every other resource of the same course (study-guides,
 * revision-notes, practice-questions, past-papers). A course = board +
 * qualification + syllabus code from the frontmatter.
 *
 * Conservative extraction. A "fact" is recorded only when ONE named paper
 * or component ("Paper 3", "Component 01", "Unit 2") is tied to ONE number
 * in the same table row or the same sentence:
 *   marks      "Paper 2 ... 60 marks" / "out of 60"; table column "Marks"
 *   duration   "Paper 1 ... 1 hour 30 minutes" (compared in minutes);
 *              table column "Duration"
 *   percent    "Paper 1 ... 25% of the A Level" / "50% of the AS Level"
 *              (scope AS or A kept apart); table columns "% of AS Level",
 *              "% of A Level"
 * Course-level facts (no paper name) are recorded only for:
 *   paper-count   "assessed by four ... papers" (one number-word + papers)
 *   first-exam    "first examined / assessed / awarded in <year>"
 *   first-teach   "first teaching ... <year>"
 * Sentences about single questions, sections, essays or "each" paper are
 * skipped, as are sentences with two paper names or two numbers of the same
 * kind. A finding is raised only when a subtopic page states a value for a
 * (course, paper, kind) that the overview pages state differently, with the
 * overview stating that kind consistently. Where the overview pages
 * disagree among themselves the pair is listed separately.
 *
 * Output is grouped by subject, Law first.
 * Run via `npm run audit:overview-consistency`, wired into `npm run audit:all`.
 */
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

const DIR = 'src/content/resources';
const OUT = 'reports/owner-decisions/overview-subtopic-contradictions.md';
const OVERVIEW_TYPES = new Set(['subject-guides', 'exam-preparation']);
const NUMBER_WORDS = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8 };

function frontmatter(text) {
  const m = text.replace(/\r\n/g, '\n').match(/^---\n([\s\S]*?)\n---\n?/);
  const fm = m?.[1] ?? '';
  const scalar = (k) => fm.match(new RegExp(`^${k}:\\s*"?([^"\\n]*)"?\\s*$`, 'm'))?.[1]?.trim();
  const list = (k) => (fm.match(new RegExp(`^${k}:\\s*\\[([^\\]]*)\\]`, 'm'))?.[1] ?? '').split(',').map((v) => v.trim().replace(/["']/g, '')).filter(Boolean);
  return { resourceType: scalar('resourceType'), subject: scalar('subject'), boards: list('boards'), quals: list('qualifications'), codes: list('syllabusCodes'), body: text.replace(/\r\n/g, '\n').slice(m ? m[0].length : 0) };
}

const PAPER = /\b(Paper|Component|Unit)\s+(\d{1,2}[A-Za-z]?)\b/g;
const paperIds = (s) => [...new Set([...s.matchAll(PAPER)].map((m) => `${m[1]} ${m[2].toUpperCase()}`))];
const SKIP = /\b(questions?|essays?|sections?|parts?|each|per|every|mark scheme|bullet|extract|source)\b|-mark\b|\[\d+\]/i;

function minutes(s) {
  const all = [...s.matchAll(/(?<![\d.])(\d+)\s*(?:hours?|hrs?|h)\b(?:\s*(?:and\s*)?(\d+)\s*(?:minutes?|mins?|m)\b)?|(?<![\d.])(\d+)\s*(?:minutes?|mins?)\b/gi)];
  const vals = all.map((m) => (m[3] ? +m[3] : +m[1] * 60 + (m[2] ? +m[2] : 0)));
  return vals;
}
const numbers = (s, re) => [...s.matchAll(re)].map((m) => +m[1]);

function addFact(facts, kind, paper, value, where) {
  // Sanity ranges: a paper total is 20+ marks and a paper lasts 30 to 270 minutes;
  // smaller numbers in a sentence are question or exercise values.
  if (kind === 'marks' && value < 20) return;
  if (kind === 'duration (minutes)' && (value < 30 || value > 270)) return;
  facts.push({ kind, paper, value, where });
}

function extract(body) {
  const facts = [];
  const lines = body.split('\n');
  // Tables
  for (let i = 0; i < lines.length; i++) {
    if (!/^\s*\|/.test(lines[i]) || !/^\s*\|[\s:|-]+\|\s*$/.test(lines[i + 1] ?? '')) continue;
    const head = lines[i].split('|').slice(1, -1).map((c) => c.trim().toLowerCase());
    const col = (re) => head.findIndex((h) => re.test(h));
    const cMarks = col(/^(total )?marks$/), cDur = col(/duration|^time$|length/), cAS = col(/%.*\bas\b|\bas\b.*%|weighting.*\bas\b/), cA = col(/%.*a level|a level.*%|weighting.*a level|% of (the )?(a-level|qualification)/);
    let j = i + 2;
    for (; j < lines.length && /^\s*\|/.test(lines[j]); j++) {
      const cells = lines[j].split('|').slice(1, -1).map((c) => c.trim());
      const ids = paperIds(cells.slice(0, 2).join(' '));
      if (ids.length !== 1) continue;
      const num = (c) => (/^\d+(\.\d+)?%?$/.test(c ?? '') ? parseFloat(c) : null);
      if (cMarks >= 0 && num(cells[cMarks]) != null) addFact(facts, 'marks', ids[0], num(cells[cMarks]), 'table');
      if (cDur >= 0) { const m = minutes(cells[cDur] ?? ''); if (m.length === 1) addFact(facts, 'duration (minutes)', ids[0], m[0], 'table'); }
      if (cAS >= 0 && num(cells[cAS]) != null) addFact(facts, 'percent of AS', ids[0], num(cells[cAS]), 'table');
      if (cA >= 0 && num(cells[cA]) != null) addFact(facts, 'percent of A Level', ids[0], num(cells[cA]), 'table');
    }
    i = j;
  }
  // Sentences
  const prose = lines.filter((l) => !/^\s*\|/.test(l)).join(' ').replace(/\*\*|\*|`/g, '').replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');
  for (const sent of prose.split(/(?<=[.!?])\s+(?=[A-Z])/)) {
    const ids = paperIds(sent);
    if (ids.length === 1 && !SKIP.test(sent)) {
      const marks = [...numbers(sent, /\b(\d+)\s+marks\b/gi), ...numbers(sent, /\bout of (\d+)\b/gi)];
      if (marks.length === 1) addFact(facts, 'marks', ids[0], marks[0], 'text');
      const mins = minutes(sent);
      if (mins.length === 1 && /\b(lasts?|duration|long|taken in|time allowed|hours?|minutes?)\b/i.test(sent)) addFact(facts, 'duration (minutes)', ids[0], mins[0], 'text');
      const pct = numbers(sent, /(\d+(?:\.\d+)?)\s*%/g);
      if (pct.length === 1) {
        if (/of the (full )?A[- ]Level|of (the )?(whole|total) A[- ]Level|of the (A Level|qualification)/i.test(sent) && !/\bAS\b/.test(sent)) addFact(facts, 'percent of A Level', ids[0], pct[0], 'text');
        else if (/of the AS\b/i.test(sent) && !/A[- ]Level\b.*A[- ]Level/i.test(sent) && !/of the (full )?A[- ]Level/i.test(sent)) addFact(facts, 'percent of AS', ids[0], pct[0], 'text');
      }
    }
    if (!ids.length) {
      const pc = sent.match(/\b(?:assessed|examined|assessment)\b[^.]{0,40}?\b(one|two|three|four|five|six|\d)\s+(?:[a-z-]+\s+){0,3}?(?:papers|components|exam papers|written papers)\b/i);
      if (pc && !/\b(each|per|section|question)\b/i.test(sent) && !/\b(AS|A Level)\b.*\b(AS|A Level)\b.*\b(AS|A Level)\b/.test(sent)) {
        const v = NUMBER_WORDS[pc[1].toLowerCase()] ?? +pc[1];
        // an "AS" qualifier changes the number, so keep it in the key
        const scope = /\bAS\b(?! & A)/.test(sent.slice(0, pc.index + pc[0].length)) && !/A Level/.test(sent.slice(0, pc.index + pc[0].length)) ? 'AS ' : '';
        addFact(facts, `${scope}paper-count`, '(course)', v, 'text');
      }
      const fe = sent.match(/\bfirst (examined|assessed|awarded|taught|teaching)\b[^.]{0,30}?\b((?:19|20)\d\d)\b/i);
      if (fe && !/\b(AS|IGCSE|GCSE)\b.*\b(A Level)\b|\bA Level\b.*\bAS\b/.test(sent)) addFact(facts, `first ${/teach/i.test(fe[1]) ? 'teaching' : 'exam'} year`, '(course)', +fe[2], 'text');
    }
  }
  return facts;
}

// ---- Read ----
const courses = new Map(); // key -> { subject, overview: Map<factKey, Map<value,Set<file>>>, sub: same }
const files = readdirSync(DIR).filter((f) => f.endsWith('.md'));
for (const file of files) {
  const fm = frontmatter(readFileSync(`${DIR}/${file}`, 'utf8'));
  if (!fm.resourceType || !fm.codes.length || !fm.boards.length) continue;
  const role = OVERVIEW_TYPES.has(fm.resourceType) ? 'overview' : 'sub';
  let facts = extract(fm.body);
  // A past-papers guide may describe other series or a newer specification.
  if (fm.resourceType === 'past-papers') facts = facts.filter((f) => !/^first /.test(f.kind));
  if (!facts.length) continue;
  for (const board of fm.boards) for (const qual of fm.quals.length ? fm.quals : ['']) {
    const key = `${board} | ${qual} | ${fm.codes.join('/')}`;
    if (!courses.has(key)) courses.set(key, { subject: fm.subject ?? 'unknown', overview: new Map(), sub: new Map() });
    const bucket = courses.get(key)[role];
    for (const f of facts) {
      const fk = `${f.paper} :: ${f.kind}`;
      if (!bucket.has(fk)) bucket.set(fk, new Map());
      const vm = bucket.get(fk);
      if (!vm.has(f.value)) vm.set(f.value, new Set());
      vm.get(f.value).add(file);
    }
  }
}

// ---- Compare ----
const findings = []; // { subject, course, fk, overviewVals, subVals }
const overviewInternal = [];
for (const [course, c] of courses) {
  for (const [fk, ov] of c.overview) {
    if (ov.size > 1) {
      // Two values in ONE page are usually AS vs A Level or tier variants sharing a paper number; only
      // list the case when the pages disagree with each other.
      const together = [...ov.values()].some((a) => [...ov.values()].some((b) => a !== b && [...a].some((f) => b.has(f))));
      if (!together) overviewInternal.push({ subject: c.subject, course, fk, ov });
      continue;
    }
    const sv = c.sub.get(fk);
    if (!sv) continue;
    const [[ovVal]] = ov;
    const bad = [...sv].filter(([v]) => v !== ovVal);
    if (bad.length) findings.push({ subject: c.subject, course, fk, ov, bad, subTotal: [...sv.values()].reduce((a, s) => a + s.size, 0) });
  }
}

const subjOrder = (a, b) => (a === 'law' ? -1 : b === 'law' ? 1 : a.localeCompare(b));
const sample = (set, n = 4) => [...set].slice(0, n).map((f) => `\`${f}\``).join(', ') + (set.size > n ? `, +${set.size - n} more` : '');
const lines = [];
lines.push('# Overview vs subtopic contradictions', '', `Generated by scripts/audit-overview-subtopic-consistency.mjs from ${files.length} resource files. Report only: nothing is changed. Method and limits are in the script header. A finding is a hint to read both pages, not a verdict.`, '');
lines.push(`Totals: ${findings.length} overview-vs-subtopic finding(s) in ${new Set(findings.map((f) => f.course)).size} course(s); ${overviewInternal.length} case(s) where the overview pages disagree among themselves.`, '');
const subjects = [...new Set(['law', ...findings.map((f) => f.subject), ...overviewInternal.map((f) => f.subject)])].sort(subjOrder);
for (const subject of subjects) {
  lines.push(`## ${subject}`, '');
  if (!findings.some((x) => x.subject === subject) && !overviewInternal.some((x) => x.subject === subject)) lines.push('No contradictions found by the conservative rules.', '');
  for (const f of findings.filter((x) => x.subject === subject)) {
    const [[ovVal, ovFiles]] = f.ov;
    lines.push(`- **${f.course}** -- ${f.fk}: overview says **${ovVal}** (${sample(ovFiles, 2)}); subtopic pages say ` + f.bad.map(([v, fs]) => `**${v}** (${sample(fs)})`).join('; '));
  }
  for (const f of overviewInternal.filter((x) => x.subject === subject)) {
    lines.push(`- (overview pages disagree) **${f.course}** -- ${f.fk}: ` + [...f.ov].map(([v, fs]) => `**${v}** (${sample(fs, 2)})`).join('; '));
  }
  lines.push('');
}
mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, lines.join('\n') + '\n');
console.log(`Overview/subtopic consistency (report only): ${findings.length} finding(s), ${overviewInternal.length} overview-internal disagreement(s). Report: ${OUT}`);
process.exit(0);
