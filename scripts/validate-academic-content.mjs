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

const scalarField = (fm, name) => {
  const m = fm.match(new RegExp(`^${name}:\\s*"?([A-Za-z-]+)"?\\s*$`, 'm'));
  return m ? m[1] : undefined;
};

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
    /** topic slug -> stage ('AS'|'A'|undefined). 9701 only; unset for 0620/5070. */
    stageByTopic: new Map(s.topics.map((t) => [t.slug, t.stage])),
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
    // (?![\s\S]) is "true end of string" in JS — \Z is not a supported
    // anchor here (it silently fails to match), which would make this block
    // invisible whenever syllabusTopics: is the last frontmatter field.
    // Phase 10 hardening: found dormant (no current file triggers it) but
    // fixed so a future file with syllabusTopics as the last field is still
    // checked — same fix already applied to validate-commercial-claims.mjs
    // in Phase 9.
    const block = fm.match(/^syllabusTopics:\s*\n([\s\S]*?)(?=^\S|(?![\s\S]))/m);
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

// ---------------------------------------------------------------------------
// STAGE CONSISTENCY (9701: AS vs A Level)
// A resource may declare `stage: AS` or `stage: A`. Where it does, every
// syllabusTopics entry it references must belong to that same stage in the
// official taxonomy — this is what stops an AS-only resource from silently
// picking up an A Level topic (or being displayed as A Level content) and
// vice versa. A resource referencing a staged topic MUST declare a matching
// stage; a resource with no staged topics must not declare one at all.
// ---------------------------------------------------------------------------
const stageErrors = [];
for (const dir of ['src/content/resources', 'src/content/articles']) {
  let files = [];
  try { files = (await readdir(dir)).filter((f) => f.endsWith('.md')); } catch { continue; }
  for (const file of files) {
    const raw = await readFile(join(dir, file), 'utf8');
    const fm = raw.split('---')[1] ?? '';
    const at = `${dir}/${file}`;
    const declaredStage = scalarField(fm, 'stage');
    // Same (?![\s\S]) end-of-string fix as the topic-reference check above.
    const block = fm.match(/^syllabusTopics:\s*\n([\s\S]*?)(?=^\S|(?![\s\S]))/m);
    if (!block) {
      if (declaredStage) stageErrors.push(`${at}: declares stage "${declaredStage}" but has no syllabusTopics to justify it`);
      continue;
    }
    const entries = block[1].split(/^\s*-\s+/m).slice(1);
    const stagesSeen = new Set();
    for (const e of entries) {
      const q = (e.match(/qualification:\s*"?([a-z-]+)"?/) || [])[1];
      const t = (e.match(/topic:\s*"?([a-z0-9-]+)"?/) || [])[1];
      const idx = topicIndex.get(q);
      const topicStage = idx?.stageByTopic.get(t);
      if (topicStage) stagesSeen.add(topicStage);
    }
    if (stagesSeen.size > 1) {
      stageErrors.push(`${at}: syllabusTopics span multiple stages (${[...stagesSeen].join(', ')}) — split into separate resources or document why one page genuinely covers both`);
    } else if (stagesSeen.size === 1) {
      const [onlyStage] = stagesSeen;
      if (declaredStage !== onlyStage) {
        stageErrors.push(`${at}: syllabusTopics are ${onlyStage} Level but frontmatter declares stage "${declaredStage ?? '(none)'}"`);
      }
    } else if (declaredStage) {
      stageErrors.push(`${at}: declares stage "${declaredStage}" but none of its syllabusTopics belong to a staged (9701) topic`);
    }
  }
}
if (stageErrors.length) {
  console.error(`\nStage consistency validation FAILED — ${stageErrors.length} problem(s):\n`);
  for (const e of stageErrors) console.error(`  • ${e}`);
  console.error('');
  process.exit(1);
}
console.log('Stage consistency OK.');
