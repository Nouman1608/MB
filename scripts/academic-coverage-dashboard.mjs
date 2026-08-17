#!/usr/bin/env node
/**
 * ACADEMIC COVERAGE DASHBOARD — reporting only. Never fails the build and is
 * not part of `npm run validate:academic`.
 *
 * For every subject in the master matrix (src/data/academic/matrix.ts),
 * reports:
 *   - Marlbridge status (ACTIVE / UNKNOWN / NOT_SUPPORTED / FUTURE) by
 *     board + qualification
 *   - How many published resources exist for that subject
 *   - Where a subject has an official topic taxonomy in
 *     src/data/academic/syllabus-topics.ts, which topics/subtopics are
 *     referenced by at least one resource's `syllabusTopics:` frontmatter,
 *     and which are not yet covered
 *
 * This exists so a future phase can see, at a glance, where the highest-
 * value gaps are without re-deriving it from scratch each time. It reads
 * the same frontmatter fields the validators already parse, using the same
 * lightweight regex approach (no YAML parser dependency).
 *
 * Usage:
 *   node scripts/academic-coverage-dashboard.mjs
 *   node scripts/academic-coverage-dashboard.mjs --subject=mathematics
 */
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { execSync } from 'node:child_process';

const load = (file) => JSON.parse(execSync(
  `node --experimental-strip-types --no-warnings -e "` +
  `import('./${file}').then(m => process.stdout.write(JSON.stringify(m.default ?? m)))"`,
  { encoding: 'utf8', cwd: process.cwd() }));

const { MATRIX } = load('src/data/academic/matrix.ts');
const { SYLLABUS_TOPICS } = load('src/data/academic/syllabus-topics.ts');

const filterArg = process.argv.find((a) => a.startsWith('--subject='));
const filterSubject = filterArg ? filterArg.split('=')[1] : null;

const listField = (fm, name) => {
  const m = fm.match(new RegExp(`^${name}:\\s*\\[(.*?)\\]`, 'm'));
  if (!m) return [];
  return m[1].split(',').map((v) => v.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
};
const scalarField = (fm, name) => {
  const m = fm.match(new RegExp(`^${name}:\\s*"?([A-Za-z0-9-]+)"?\\s*$`, 'm'));
  return m ? m[1] : undefined;
};

async function loadResources(dir) {
  let files = [];
  try { files = (await readdir(dir)).filter((f) => f.endsWith('.md')); } catch { return []; }
  const out = [];
  for (const file of files) {
    const raw = await readFile(join(dir, file), 'utf8');
    const fm = raw.split('---')[1] ?? '';
    const subject = scalarField(fm, 'subject');
    const subjects = listField(fm, 'subjects'); // articles only
    const syllabusCodes = listField(fm, 'syllabusCodes');
    const block = fm.match(/^syllabusTopics:\s*\n([\s\S]*?)(?=^\S|(?![\s\S]))/m);
    const topicRefs = [];
    if (block) {
      const entries = block[1].split(/^\s*-\s+/m).slice(1);
      for (const e of entries) {
        const q = (e.match(/qualification:\s*"?([a-z-]+)"?/) || [])[1];
        const t = (e.match(/topic:\s*"?([a-z0-9-]+)"?/) || [])[1];
        const st = (e.match(/subtopic:\s*"?([a-z0-9-]+)"?/) || [])[1];
        topicRefs.push({ qualification: q, topic: t, subtopic: st });
      }
    }
    out.push({ file: `${dir}/${file}`, subjects: subject ? [subject] : subjects, syllabusCodes, topicRefs });
  }
  return out;
}

const resources = await loadResources('src/content/resources');
const articles = await loadResources('src/content/articles');
const allContent = [...resources, ...articles];

const subjectSlugs = [...new Set(MATRIX.map((c) => c.subjectSlug))].sort();
const rowsFor = (s) => MATRIX.filter((c) => c.subjectSlug === s);
const contentFor = (s) => allContent.filter((r) => r.subjects.includes(s));

console.log('='.repeat(78));
console.log('MARLBRIDGE ACADEMIC COVERAGE DASHBOARD');
console.log(`Generated from the working tree — not a stored snapshot.`);
console.log('='.repeat(78));

let totalResourcesReported = 0;
const untouched = [];

for (const subject of subjectSlugs) {
  if (filterSubject && subject !== filterSubject) continue;
  const rows = rowsFor(subject);
  const active = rows.filter((r) => r.marlbridgeStatus === 'ACTIVE');
  const unknown = rows.filter((r) => r.marlbridgeStatus === 'UNKNOWN');
  const subjectContent = contentFor(subject);
  const taxonomies = SYLLABUS_TOPICS.filter((s) => s.subjectSlug === subject);

  // Subjects with zero content and zero taxonomy work are listed compactly
  // at the end instead of getting a full block — still visible (a missing
  // subject is the biggest gap of all), just not verbose about it.
  if (active.length === 0 && subjectContent.length === 0 && taxonomies.length === 0) {
    untouched.push(`${subject} (${rows.length} matrix rows, all UNKNOWN/NOT_SUPPORTED/FUTURE)`);
    continue;
  }
  totalResourcesReported += subjectContent.length;

  console.log(`\n${subject.toUpperCase()}`);
  console.log(`  Matrix rows: ${rows.length}  ACTIVE: ${active.length}  UNKNOWN: ${unknown.length}  Resources/articles: ${subjectContent.length}`);
  if (active.length) {
    console.log(`  ACTIVE: ${active.map((r) => `${r.board} ${r.qualification}${r.qualificationCode ? ' ' + r.qualificationCode : ''}`).join(', ')}`);
  }
  if (subjectContent.length && subjectContent.length <= 6) {
    console.log(`  Files: ${subjectContent.map((r) => r.file.split('/').pop()).join(', ')}`);
  }

  for (const syl of taxonomies) {
    const refs = subjectContent.flatMap((r) => r.topicRefs).filter((t) => t.qualification === syl.qualificationSlug);
    const refTopics = new Set(refs.map((t) => t.topic));
    const refSubtopics = new Set(refs.map((t) => t.subtopic).filter(Boolean));
    const totalTopics = syl.topics.length;
    const coveredTopics = syl.topics.filter((t) => refTopics.has(t.slug)).length;
    const totalSubtopics = syl.topics.reduce((n, t) => n + t.subtopics.length, 0);
    const coveredSubtopics = syl.topics.reduce(
      (n, t) => n + t.subtopics.filter((st) => refSubtopics.has(st.slug)).length, 0,
    );
    console.log(`  [${syl.qualificationSlug}] ${syl.syllabusCode} (${syl.syllabusSeries}, ${syl.status}): `
      + `${coveredTopics}/${totalTopics} topics referenced by a resource, `
      + `${coveredSubtopics}/${totalSubtopics} subtopics with taxonomy detail referenced`);
    const untouched = syl.topics.filter((t) => !refTopics.has(t.slug));
    if (untouched.length) {
      const names = untouched.map((t) => `${t.number} ${t.name}`).join(' · ');
      console.log(`    No resource yet: ${names}`);
    }
    const nameOnly = syl.topics.filter((t) => t.subtopics.length === 0);
    if (nameOnly.length) {
      console.log(`    Name-only in taxonomy (no subtopic detail researched yet): `
        + `${nameOnly.map((t) => `${t.number} ${t.name}`).join(' · ')}`);
    }
  }
}

if (untouched.length && !filterSubject) {
  console.log(`\nNO CONTENT OR TAXONOMY YET (${untouched.length} subjects)`);
  for (const line of untouched) console.log(`  - ${line}`);
}

console.log(`\n${'='.repeat(78)}`);
console.log(`${subjectSlugs.length} subjects in matrix. ${totalResourcesReported} resources/articles across reported subjects.`);
console.log('Reporting tool only — does not fail the build, not run by npm run validate:academic.');
