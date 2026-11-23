#!/usr/bin/env node
/**
 * P5 (audit Nov 2026) -- course-page consistency check, wired into validate:academic.
 *
 * For every published course (/boards/<board>/<qualification>/<subject>/) it builds the
 * same topic-by-topic resource listing the page renders (courseTopics()) and fails when
 * the numbers a reader is shown disagree with the list they are shown:
 *
 *   [1] resource count: "N free resources" (the total) must equal the number of distinct
 *       resources listed under the topics plus "Covering more than one topic".
 *   [2] topic count: the number of topics stated must equal the topics listed; topic slugs
 *       must be unique within a course.
 *   [3] topic FAQ: the "What topics does <course> cover?" answer must name exactly as many
 *       items as it counts (the answer is built by utils/academic/topic-faq.ts).
 *   [4] one topic, one URL: the same resource must not be listed twice under one topic.
 *   [5] two different topics must not link to the same practice-questions page (a topic's
 *       practice link has to be that topic's own), and one topic must not list two
 *       resources with the same title.
 *
 * [5] found pre-existing mismatches in resource front matter (resources belong to the
 * content teams, not to this check). Those known cases are recorded in
 * scripts/course-consistency-baseline.json so the build stays green while they are fixed;
 * any case NOT in the baseline fails the build, and a baseline entry that no longer occurs
 * is reported so it can be deleted. [1]-[4] have no baseline: they must always hold.
 *
 * Usage:
 *   node --experimental-strip-types scripts/validate-course-consistency.mjs
 *   ... --seed-mismatch   inject a fake mismatch into one course and require the check to fail
 *   ... --print-baseline  print the current [5] findings as baseline JSON
 *   ... --report          print per-course counts
 */
import { closeSync, openSync, readdirSync, readFileSync, readSync } from 'node:fs';
import yaml from 'js-yaml';
import { courseTopics, KIND_ORDER } from '../src/utils/academic/course-topics.ts';
import { activeOnly } from '../src/utils/academic/index.ts';
import { topicsFor } from '../src/data/academic/syllabus-topics.ts';
import { topicListFaq } from '../src/utils/academic/topic-faq.ts';
import { hubSlugFor } from '../src/utils/academic/combination-resources.ts';

const args = new Set(process.argv.slice(2));
const DIR = 'src/content/resources';
const BASELINE_FILE = new URL('./course-consistency-baseline.json', import.meta.url);

/** Front matter only: read in 16 KB chunks until the closing ---, so 18,000 bodies are not loaded. */
function frontMatter(path) {
  const fd = openSync(path, 'r');
  try {
    const buf = Buffer.alloc(16384);
    let text = '';
    for (;;) {
      const n = readSync(fd, buf, 0, buf.length, null);
      if (n === 0) break;
      text += buf.toString('utf8', 0, n);
      const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
      if (m) return m[1];
    }
    return null;
  } finally {
    closeSync(fd);
  }
}

function loadResources() {
  const out = [];
  for (const f of readdirSync(DIR)) {
    if (!f.endsWith('.md')) continue;
    const fm = frontMatter(`${DIR}/${f}`);
    if (!fm) continue;
    const d = yaml.load(fm) ?? {};
    if (d.reviewStatus === 'draft') continue; // getResources() leaves drafts out
    out.push({
      id: f.slice(0, -3),
      data: {
        title: d.title ?? f, description: d.description ?? '', resourceType: d.resourceType,
        subject: { id: d.subject }, level: d.level ?? [], boards: d.boards ?? [],
        qualifications: d.qualifications ?? [], syllabusCodes: d.syllabusCodes ?? [],
        syllabusTopics: d.syllabusTopics ?? [], reviewStatus: d.reviewStatus ?? 'review-pending',
      },
    });
  }
  return out;
}

const resources = loadResources();
const bySubject = new Map();
for (const r of resources) {
  const k = r.data.subject.id;
  if (!bySubject.has(k)) bySubject.set(k, []);
  bySubject.get(k).push(r);
}

const SEED = args.has('--seed-mismatch') ? 'cambridge/igcse/chemistry' : null;
const hard = []; // [1]-[4]: never allowed
const found = new Set(); // [5]: checked against the baseline
const rows = [];

for (const c of activeOnly()) {
  const key = `${c.boardSlug}/${c.qualificationSlug}/${c.subjectSlug}`;
  const ct = courseTopics(c, bySubject.get(hubSlugFor(c)) ?? []);
  const record = topicsFor(c.boardSlug, c.qualificationSlug, c.subjectSlug);

  // the listing exactly as the page renders it
  const listed = new Map(); // id -> [{topic, resourceType}]
  const titles = new Map(); // `${topic}|${title}` -> ids
  for (const t of ct.topics) {
    const inTopic = new Set();
    for (const k of KIND_ORDER) {
      for (const r of t.groups[k]) {
        if (inTopic.has(r.id)) hard.push(`[4] ${key}: ${r.id} is listed twice under topic ${t.topic.slug}`);
        inTopic.add(r.id);
        if (!listed.has(r.id)) listed.set(r.id, []);
        listed.get(r.id).push({ topic: t.topic.slug, resourceType: r.resourceType });
        const tk = `${t.topic.slug}|${r.title.trim().toLowerCase()}`;
        if (!titles.has(tk)) titles.set(tk, new Set());
        titles.get(tk).add(r.id);
      }
    }
  }
  const wholeIds = new Set();
  for (const k of KIND_ORDER) for (const r of ct.wholeCourse[k]) wholeIds.add(r.id);

  // [1] resource count
  const distinct = new Set([...listed.keys(), ...wholeIds]);
  if (key === SEED) distinct.add('__seeded-extra-resource__');
  if (distinct.size !== ct.total) hard.push(`[1] ${key}: page says ${ct.total} resources but lists ${distinct.size}`);
  for (const id of wholeIds) {
    if (listed.has(id)) hard.push(`[1] ${key}: ${id} is listed under a topic and under "Covering more than one topic"`);
  }

  // [2] topic count
  const recordCount = record?.topics.length ?? 0;
  const slugs = (record?.topics ?? []).map((t) => t.slug);
  const listedTopics = ct.topics.length + (key === SEED ? 1 : 0);
  if (listedTopics !== recordCount) hard.push(`[2] ${key}: record has ${recordCount} topics but the page lists ${listedTopics}`);
  if (new Set(slugs).size !== slugs.length) hard.push(`[2] ${key}: duplicate topic slugs in the topic record`);

  // [3] topic FAQ
  if (record && record.topics.length > 0) {
    const faq = topicListFaq(record.topics);
    const stated = Number(faq.text.match(/^(?:\d+ papers and )?(\d+) topics/)?.[1]);
    if (stated !== faq.count) hard.push(`[3] ${key}: topic FAQ states ${stated} but counts ${faq.count}`);
    const named = faq.shape === 'papers'
      ? record.topics.reduce((s, t) => s + t.subtopics.length, 0)
      : record.topics.length;
    if (named !== faq.count) hard.push(`[3] ${key}: topic FAQ counts ${faq.count} but the record has ${named}`);
    if (faq.shape === 'plain' && new Set(record.topics.map((t) => t.name)).size !== record.topics.length) {
      hard.push(`[3] ${key}: repeated topic names are not told apart in the FAQ`);
    }
  }

  // [5] one practice page under two topics; two resources with one title under one topic
  for (const [id, where] of listed) {
    const tset = [...new Set(where.map((w) => w.topic))];
    if (tset.length > 1 && where.some((w) => w.resourceType === 'practice-questions')) {
      found.add(`[5a] ${key} | ${id} | ${tset.join(' + ')}`);
    }
  }
  for (const [tk, ids] of titles) {
    if (ids.size > 1) found.add(`[5b] ${key} | ${tk.split('|')[0]} | ${[...ids].sort().join(' + ')}`);
  }

  const links = ct.topics.reduce((s, t) => s + t.count, 0) + ct.wholeCourseCount;
  rows.push({
    key, resources: ct.total, topics: recordCount, links,
    listedMoreThanOnce: [...listed.values()].filter((w) => new Set(w.map((x) => x.topic)).size > 1).length,
  });
}

if (args.has('--report')) console.log(JSON.stringify(rows, null, 1));
if (args.has('--print-baseline')) {
  console.log(JSON.stringify([...found].sort(), null, 1));
  process.exit(0);
}

let baseline = [];
try { baseline = JSON.parse(readFileSync(BASELINE_FILE, 'utf8')); } catch { /* no baseline yet */ }
const base = new Set(baseline);
const fresh = [...found].filter((f) => !base.has(f)).sort();
const stale = baseline.filter((b) => !found.has(b));

const problems = [
  ...hard,
  ...fresh.map((f) => `${f}  (not in course-consistency-baseline.json: fix the resource's syllabusTopics, or the duplicate title)`),
];
console.log(
  `validate-course-consistency: ${rows.length} courses, ${resources.length} resources; hard problems ${hard.length}, new [5] findings ${fresh.length}, baselined ${found.size - fresh.length}${stale.length ? `, ${stale.length} stale baseline entries (delete them)` : ''}.`,
);
for (const s of stale.slice(0, 20)) console.log(`  stale baseline: ${s}`);

if (SEED) {
  if (problems.length === 0) {
    console.error('SEED TEST FAILED: the seeded mismatch was not detected.');
    process.exit(2);
  }
  console.log(`seed test OK: the check detected the seeded mismatch in ${SEED}:`);
  for (const p of problems.filter((x) => x.includes(SEED))) console.log(`  ${p}`);
  process.exit(0);
}
if (problems.length) {
  console.error(`\nvalidate-course-consistency FAILED (${problems.length}):`);
  for (const p of problems.slice(0, 60)) console.error(`  ${p}`);
  process.exit(1);
}
