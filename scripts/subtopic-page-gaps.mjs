#!/usr/bin/env node
/**
 * Lists the official subtopics that lack a study guide, revision-notes page or
 * practice set. A page counts for a subtopic when one of its `syllabusTopics`
 * entries names that subtopic for the same qualification, and the page's
 * boards and subject match the syllabus record.
 *
 *   node --experimental-strip-types scripts/subtopic-page-gaps.mjs [--json out.json]
 *
 * Reporting tool only: it changes no file unless --json is given.
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { SYLLABUS_VERSIONS } from '../src/data/academic/syllabus-topics.ts';
import { SUBJECTS } from '../src/data/academic/subjects.ts';

const RES = 'src/content/resources';
const TYPES = ['study-guides', 'revision-notes', 'practice-questions'];
const hubOf = new Map(SUBJECTS.map((s) => [s.slug, s.hubId ?? s.slug]));

const listField = (fm, key) => {
  const m = fm.match(new RegExp(`^${key}:\\s*\\[(.*?)\\]`, 'm'));
  return m ? m[1].split(',').map((x) => x.trim().replace(/^"|"$/g, '')).filter(Boolean) : [];
};
const scalar = (fm, key) => (fm.match(new RegExp(`^${key}:\\s*"?([^"\\n]+)"?`, 'm')) || [])[1];

// index: "board|qualification|hub|subtopicSlug" -> { type: count }
const index = new Map();
for (const f of (await readdir(RES)).filter((x) => x.endsWith('.md'))) {
  const raw = await readFile(join(RES, f), 'utf8');
  const fm = raw.split('---')[1] ?? '';
  const type = scalar(fm, 'resourceType');
  if (!TYPES.includes(type)) continue;
  const subject = scalar(fm, 'subject');
  const boards = listField(fm, 'boards');
  const block = fm.match(/^syllabusTopics:\s*\n([\s\S]*?)(?=^\S|(?![\s\S]))/m);
  if (!block) continue;
  for (const e of block[1].split(/^\s*-\s+/m).slice(1)) {
    const q = (e.match(/qualification:\s*"?([a-z-]+)"?/) || [])[1];
    const st = (e.match(/subtopic:\s*"?([a-z0-9-]+)"?/) || [])[1];
    if (!q || !st) continue;
    for (const b of boards) {
      const k = `${b}|${q}|${subject}|${st}`;
      const o = index.get(k) ?? {};
      o[type] = (o[type] ?? 0) + 1;
      index.set(k, o);
    }
  }
}

const gaps = [];
for (const v of SYLLABUS_VERSIONS) {
  if (v.status === 'superseded') continue;
  const hub = hubOf.get(v.subjectSlug) ?? v.subjectSlug;
  for (const t of v.topics) {
    for (const s of t.subtopics) {
      const o = index.get(`${v.boardSlug}|${v.qualificationSlug}|${hub}|${s.slug}`) ?? {};
      const missing = TYPES.filter((x) => !o[x]);
      if (missing.length) {
        gaps.push({ board: v.boardSlug, qualification: v.qualificationSlug, subject: v.subjectSlug, code: v.syllabusCode, series: v.syllabusSeries, topic: t.slug, topicNumber: t.number, topicName: t.name, subtopic: s.slug, number: s.number, name: s.name, missing, have: o });
      }
    }
  }
}

const by = new Map();
for (const g of gaps) {
  const k = `${g.board} ${g.qualification} ${g.subject} ${g.code}`;
  by.set(k, (by.get(k) ?? 0) + 1);
}
console.log(`${gaps.length} subtopic(s) lack at least one page type (study guide, revision notes, practice set); ${gaps.reduce((n, g) => n + g.missing.length, 0)} pages missing.`);
for (const [k, n] of [...by.entries()].sort((a, b) => b[1] - a[1])) console.log(`  ${String(n).padStart(4)}  ${k}`);
const i = process.argv.indexOf('--json');
if (i > 0) await writeFile(process.argv[i + 1], JSON.stringify(gaps, null, 1));
