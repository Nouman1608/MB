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
const { SUBJECTS } = load('src/data/academic/subjects.ts');

/**
 * The matrix's subjectSlug and the src/content/subjects/*.md id (what a
 * resource's `subject:` field actually references) can differ — e.g. matrix
 * 'english-language' -> content id 'english', per subjects.ts's hubId, the
 * same indirection src/pages/boards/.../[subject].astro already resolves
 * through subjectBySlug().hubId. Workstream 4 found and fixed the identical
 * gap in validate-commercial-claims.mjs; this map applies the same fix here
 * — without it, every ACTIVE lookup below would be keyed by the wrong slug
 * for any subject whose hubId differs from its matrix slug, and a
 * perfectly valid resource tag would fail the build with a false "no ACTIVE
 * combination" error.
 */
const matrixSlugsForContentId = new Map();
for (const s of SUBJECTS) {
  const hub = s.hubId ?? s.slug;
  if (!matrixSlugsForContentId.has(hub)) matrixSlugsForContentId.set(hub, []);
  matrixSlugsForContentId.get(hub).push(s.slug);
}
const matrixSlugsFor = (contentId) => matrixSlugsForContentId.get(contentId) ?? [contentId];

/**
 * Phase 11: scoped by SUBJECT, not just board+qualification.
 *
 * Through Phase 10, Chemistry was the only subject with any ACTIVE row, so a
 * subject-blind check of "is cambridge|o-level active anywhere in the
 * matrix" was accidentally equivalent to "is it active for this resource's
 * own subject." Phase 11 added Mathematics, Physics and four other subjects
 * to the matrix at the same board/qualification slugs Chemistry uses (all
 * still UNKNOWN, not ACTIVE). Without this fix, a Mathematics resource
 * declaring boards:["cambridge"], qualifications:["o-level"] would silently
 * PASS this validator purely because CHEMISTRY is ACTIVE at Cambridge O
 * Level — wrongly implying Marlbridge teaches Cambridge O Level Mathematics.
 * Every ACTIVE lookup below is keyed by subject first.
 */
const activeBySubject = new Map(); // subjectSlug -> { boards:Set, quals:Set, combos:Set }
for (const c of MATRIX) {
  if (c.marlbridgeStatus !== 'ACTIVE') continue;
  if (!activeBySubject.has(c.subjectSlug)) {
    activeBySubject.set(c.subjectSlug, { boards: new Set(), quals: new Set(), combos: new Set() });
  }
  const e = activeBySubject.get(c.subjectSlug);
  e.boards.add(c.boardSlug);
  e.quals.add(c.qualificationSlug);
  e.combos.add(`${c.boardSlug}|${c.qualificationSlug}`);
}

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
    if (boards.length === 0 && quals.length === 0) continue;

    // resources: single scalar `subject`. articles: plural `subjects` array
    // (an article may legitimately span more than one subject).
    const subjects = dir.endsWith('/resources')
      ? [scalarField(fm, 'subject')].filter(Boolean)
      : listField(fm, 'subjects');

    if (subjects.length === 0) {
      errors.push(`${at}: declares boards/qualifications but has no subject to validate them against`);
      continue;
    }

    const matrixSubjects = subjects.flatMap((s) => matrixSlugsFor(s));
    for (const b of boards) {
      if (!matrixSubjects.some((s) => activeBySubject.get(s)?.boards.has(b))) {
        errors.push(`${at}: board "${b}" has no ACTIVE combination for subject(s) ${subjects.join(', ')}`);
      }
    }
    for (const q of quals) {
      if (!matrixSubjects.some((s) => activeBySubject.get(s)?.quals.has(q))) {
        errors.push(`${at}: qualification "${q}" has no ACTIVE combination for subject(s) ${subjects.join(', ')}`);
      }
    }
    for (const b of boards) for (const q of quals) {
      if (!matrixSubjects.some((s) => activeBySubject.get(s)?.combos.has(`${b}|${q}`))) {
        errors.push(`${at}: "${b} + ${q}" is not an ACTIVE combination for subject(s) ${subjects.join(', ')}`);
      }
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
// Phase 11: keyed by `${subjectSlug}|${qualificationSlug}`, not qualification
// alone. Chemistry was the only subject in this file through Phase 10, so a
// qualification-only key (e.g. "igcse") never collided with anything. Now
// that a second subject can share a qualification slug (Mathematics IGCSE
// and Chemistry IGCSE are both "igcse"), a qualification-only key would let
// the second subject's entry silently overwrite the first in this Map,
// disabling validation for whichever subject lost the collision — without
// any error or warning. The composite key removes that failure mode.
const topicKey = (subjectSlug, qualificationSlug) => `${subjectSlug}|${qualificationSlug}`;
const topicIndex = new Map();
for (const s of SYLLABUS_TOPICS) {
  topicIndex.set(topicKey(s.subjectSlug, s.qualificationSlug), {
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
    const subject = scalarField(fm, 'subject');
    const block = fm.match(/^syllabusTopics:\s*\n([\s\S]*?)(?=^\S|(?![\s\S]))/m);
    if (!block) continue;
    const entries = block[1].split(/^\s*-\s+/m).slice(1);
    for (const e of entries) {
      const q = (e.match(/qualification:\s*"?([a-z-]+)"?/) || [])[1];
      const t = (e.match(/topic:\s*"?([a-z0-9-]+)"?/) || [])[1];
      const st = (e.match(/subtopic:\s*"?([a-z0-9-]+)"?/) || [])[1];
      const idx = topicIndex.get(topicKey(subject, q));
      if (!idx) { topicErrors.push(`${at}: no official topic taxonomy for subject "${subject}" + qualification "${q}"`); continue; }
      if (t && !idx.topics.has(t)) topicErrors.push(`${at}: topic "${t}" is not in the official ${subject} ${q} syllabus`);
      if (st && !idx.subtopics.has(st)) topicErrors.push(`${at}: subtopic "${st}" is not in the official ${subject} ${q} syllabus`);
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
    const subject = scalarField(fm, 'subject');
    const entries = block[1].split(/^\s*-\s+/m).slice(1);
    const stagesSeen = new Set();
    for (const e of entries) {
      const q = (e.match(/qualification:\s*"?([a-z-]+)"?/) || [])[1];
      const t = (e.match(/topic:\s*"?([a-z0-9-]+)"?/) || [])[1];
      const idx = topicIndex.get(topicKey(subject, q));
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
