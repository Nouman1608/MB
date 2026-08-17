#!/usr/bin/env node
/**
 * Validates that resource/article frontmatter only claims academic
 * combinations that are ACTIVE in the master matrix.
 *
 * Prevents a resource tagged e.g. board: aqa + qualification: o-level from
 * implying an offering that does not exist. Runs in the build.
 */
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { execSync } from 'node:child_process';

const load = (file) => JSON.parse(execSync(
  `node --experimental-strip-types --no-warnings -e "` +
  `import('./${file}').then(m => process.stdout.write(JSON.stringify(m.default ?? m)))"`,
  { encoding: 'utf8', cwd: process.cwd() }));

const { MATRIX } = load('src/data/academic/matrix.ts');
const active = new Set(
  MATRIX.filter((c) => c.marlbridgeStatus === 'ACTIVE').map((c) => `${c.boardSlug}|${c.qualificationSlug}`),
);
const activeBoards = new Set(MATRIX.filter((c) => c.marlbridgeStatus === 'ACTIVE').map((c) => c.boardSlug));
const activeQuals = new Set(MATRIX.filter((c) => c.marlbridgeStatus === 'ACTIVE').map((c) => c.qualificationSlug));

const listField = (fm, name) => {
  const m = fm.match(new RegExp(`^${name}:\\s*\\[(.*?)\\]`, 'm'));
  if (!m) return [];
  return m[1].split(',').map((v) => v.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
};

const errors = [];
for (const dir of ['src/content/resources', 'src/content/articles']) {
  let files = [];
  try { files = (await readdir(dir)).filter((f) => f.endsWith('.md')); } catch { continue; }
  for (const file of files) {
    const raw = await readFile(join(dir, file), 'utf8');
    const fm = raw.split('---')[1] ?? '';
    const boards = listField(fm, 'boards');
    const quals = listField(fm, 'qualifications');
    const at = `${dir}/${file}`;

    for (const b of boards) if (!activeBoards.has(b)) errors.push(`${at}: board "${b}" has no ACTIVE combination`);
    for (const q of quals) if (!activeQuals.has(q)) errors.push(`${at}: qualification "${q}" has no ACTIVE combination`);
    for (const b of boards) for (const q of quals) {
      if (!active.has(`${b}|${q}`)) errors.push(`${at}: "${b} + ${q}" is not an ACTIVE combination`);
    }
  }
}

if (errors.length) {
  console.error(`\nAcademic content validation FAILED — ${errors.length} problem(s):\n`);
  for (const e of errors) console.error(`  • ${e}`);
  console.error('');
  process.exit(1);
}
console.log('Academic content tagging OK.');

// ---------------------------------------------------------------------------
// SYLLABUS TOPIC REFERENCES
// A resource may only cite a topic/subtopic that exists in the official
// syllabus taxonomy for that qualification — no invented topic slugs.
// ---------------------------------------------------------------------------
const { SYLLABUS_TOPICS } = load('src/data/academic/syllabus-topics.ts');
const topicIndex = new Map();
for (const s of SYLLABUS_TOPICS) {
  topicIndex.set(s.qualificationSlug, {
    topics: new Set(s.topics.map((t) => t.slug)),
    subtopics: new Set(s.topics.flatMap((t) => t.subtopics.map((st) => st.slug))),
  });
}

const topicErrors = [];
for (const dir of ['src/content/resources', 'src/content/articles']) {
  let files = [];
  try { files = (await readdir(dir)).filter((f) => f.endsWith('.md')); } catch { continue; }
  for (const file of files) {
    const raw = await readFile(join(dir, file), 'utf8');
    const fm = raw.split('---')[1] ?? '';
    const at = `${dir}/${file}`;
    const block = fm.match(/^syllabusTopics:\s*\n([\s\S]*?)(?=^\S|\Z)/m);
    if (!block) continue;
    const entries = block[1].split(/^\s*-\s+/m).slice(1);
    for (const e of entries) {
      const q = (e.match(/qualification:\s*"?([a-z-]+)"?/) || [])[1];
      const t = (e.match(/topic:\s*"?([a-z0-9-]+)"?/) || [])[1];
      const st = (e.match(/subtopic:\s*"?([a-z0-9-]+)"?/) || [])[1];
      const idx = topicIndex.get(q);
      if (!idx) { topicErrors.push(`${at}: no official topic taxonomy for qualification "${q}"`); continue; }
      if (t && !idx.topics.has(t)) topicErrors.push(`${at}: topic "${t}" is not in the official ${q} syllabus`);
      if (st && !idx.subtopics.has(st)) topicErrors.push(`${at}: subtopic "${st}" is not in the official ${q} syllabus`);
    }
  }
}
if (topicErrors.length) {
  console.error(`\nSyllabus topic validation FAILED — ${topicErrors.length} problem(s):\n`);
  for (const e of topicErrors) console.error(`  • ${e}`);
  console.error('');
  process.exit(1);
}
console.log('Syllabus topic references OK.');
