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
// Phase (post-v1.x): keyed by boardSlug + subjectSlug + qualificationSlug, not
// just subject + qualification. Before this fix, adding Pearson Edexcel's
// A Level Physics (YPH11) taxonomy — same subjectSlug 'physics' and
// qualificationSlug 'a-level' as Cambridge's existing 9702 entry — silently
// overwrote Cambridge's entry in this Map (later array entry wins), which
// broke validation for every existing Cambridge A Level Physics resource
// with "topic is not in the official syllabus" false positives. The same
// collision will recur for any future board sharing a subject+qualification
// pair (which is the normal, expected case — most subjects are offered by
// multiple boards) unless the key includes the board.
const topicKey = (boardSlug, subjectSlug, qualificationSlug) => `${boardSlug}|${subjectSlug}|${qualificationSlug}`;
const topicIndex = new Map();
for (const s of SYLLABUS_TOPICS) {
  topicIndex.set(topicKey(s.boardSlug, s.subjectSlug, s.qualificationSlug), {
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
    const resourceBoards = listField(fm, 'boards');
    const block = fm.match(/^syllabusTopics:\s*\n([\s\S]*?)(?=^\S|(?![\s\S]))/m);
    if (!block) continue;
    const entries = block[1].split(/^\s*-\s+/m).slice(1);
    for (const e of entries) {
      const q = (e.match(/qualification:\s*"?([a-z-]+)"?/) || [])[1];
      const t = (e.match(/topic:\s*"?([a-z0-9-]+)"?/) || [])[1];
      const st = (e.match(/subtopic:\s*"?([a-z0-9-]+)"?/) || [])[1];
      // A syllabusTopics entry doesn't carry its own board, so it's resolved
      // against the resource's own boards[] field — matching against every
      // board the resource declares, since a resource must belong to at
      // least one real board+subject+qualification taxonomy to be valid.
      //
      // Post-v1.2: also expand the subject through the same content-id ->
      // matrix-slug hubId map used by the ACTIVE-combination check above
      // (matrixSlugsFor). Without this, a resource is forced to declare
      // `subject: "english"` (the only valid content-collection id, per
      // subjects.ts's hubId) while syllabus-topics.ts's English Language
      // entries are keyed by subjectSlug 'english-language' — an English
      // Language resource could never pass this check under any subject
      // value, since the two systems require different, non-overlapping
      // strings in the same frontmatter field. Found while writing the
      // first Edexcel IGCSE English Language (4EA1) resource.
      const candidates = resourceBoards.length ? resourceBoards : [undefined];
      const subjectCandidates = matrixSlugsFor(subject);
      const idxs = candidates.flatMap((b) => subjectCandidates.map((s) => topicIndex.get(topicKey(b, s, q)))).filter(Boolean);
      if (!idxs.length) { topicErrors.push(`${at}: no official topic taxonomy for board(s) [${resourceBoards.join(', ')}] + subject "${subject}" + qualification "${q}"`); continue; }
      if (t && !idxs.some((idx) => idx.topics.has(t))) topicErrors.push(`${at}: topic "${t}" is not in the official ${subject} ${q} syllabus for board(s) [${resourceBoards.join(', ')}]`);
      if (st && !idxs.some((idx) => idx.subtopics.has(st))) topicErrors.push(`${at}: subtopic "${st}" is not in the official ${subject} ${q} syllabus for board(s) [${resourceBoards.join(', ')}]`);
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
    const resourceBoards = listField(fm, 'boards');
    const entries = block[1].split(/^\s*-\s+/m).slice(1);
    const stagesSeen = new Set();
    for (const e of entries) {
      const q = (e.match(/qualification:\s*"?([a-z-]+)"?/) || [])[1];
      const t = (e.match(/topic:\s*"?([a-z0-9-]+)"?/) || [])[1];
      const candidates = resourceBoards.length ? resourceBoards : [undefined];
      // Same matrixSlugsFor expansion as the topic-reference check above --
      // without it, a resource forced to declare subject: "english" (the
      // content-collection hubId) could never resolve to syllabus-topics.ts's
      // "english-language"-keyed entries, so a staged English Language
      // resource would silently fail this check with "none of its
      // syllabusTopics belong to a staged topic" even though its topic
      // reference itself was valid. Found while writing the first OxfordAQA
      // A-level English Language (9670) resource.
      const subjectCandidates = matrixSlugsFor(subject);
      for (const b of candidates) {
        for (const s of subjectCandidates) {
          const idx = topicIndex.get(topicKey(b, s, q));
          const topicStage = idx?.stageByTopic.get(t);
          if (topicStage) stagesSeen.add(topicStage);
        }
      }
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

// ---------------------------------------------------------------------------
// SYLLABUS CODE REFERENCES (v2.0 MEGA PROGRAMME WS13 -- resource<->assessment
// mapping)
// A resource/article's declared `syllabusCodes` are free-text today (e.g.
// ["7132"], or ["9625 / 9725"] for the honest both-codes-during-transition
// disclosure pattern WS8 established for OxfordAQA Business) and were never
// cross-checked against the real, sourced codes in syllabuses.ts. That meant
// a typo'd or stale code (e.g. citing a legacy code after it's fully retired,
// or a code that never existed) would silently pass every existing check --
// content-tagging validation only ever looked at boards/qualifications/
// subject, never the code itself. Now that WS4-11 built out a full
// lifecycle model (current/legacy-teach-out/future/withdrawn pairs like
// 9625/9725, H431/H436, 7132/7138, 7131/7137), this is a real and growing
// risk, not a hypothetical one. This check requires every code a resource
// cites to match a real syllabuses.ts entry for at least one of the
// resource's declared board+qualification+subject combinations, and flags
// (without failing the build -- see below) any code that resolves to an
// assessments.ts record marked 'withdrawn'.
// ---------------------------------------------------------------------------
const { SYLLABUSES } = load('src/data/academic/syllabuses.ts');
const { ASSESSMENTS } = load('src/data/academic/assessments.ts');
const codeIndex = new Map(); // `${board}|${subject}|${qualification}` -> Set<code>
for (const s of SYLLABUSES) {
  const key = topicKey(s.boardSlug, s.subjectSlug, s.qualificationSlug);
  if (!codeIndex.has(key)) codeIndex.set(key, new Set());
  // syllabuses.ts itself sometimes stores a combined code for a genuine
  // dual-specification transition -- e.g. '9625 / 9725' (OxfordAQA Business)
  // or '7712 / 7717' (AQA English Literature A/B) -- so this side needs the
  // same '/'-split treatment as the resource-side codesField below.
  for (const part of s.code.split(/[/,]/).map((x) => x.trim()).filter(Boolean)) {
    codeIndex.get(key).add(part);
  }
}
const withdrawnCodes = new Set(
  ASSESSMENTS.filter((a) => a.specStatus === 'withdrawn').map((a) => a.code),
);

const codeErrors = [];
const codeWarnings = [];
for (const dir of ['src/content/resources', 'src/content/articles']) {
  let files = [];
  try { files = (await readdir(dir)).filter((f) => f.endsWith('.md')); } catch { continue; }
  for (const file of files) {
    const raw = await readFile(join(dir, file), 'utf8');
    const fm = raw.split('---')[1] ?? '';
    const at = `${dir}/${file}`;
    const codesField = listField(fm, 'syllabusCodes');
    if (codesField.length === 0) continue;
    const subject = dir.endsWith('/resources') ? scalarField(fm, 'subject') : undefined;
    const subjectsField = dir.endsWith('/articles') ? listField(fm, 'subjects') : [subject].filter(Boolean);
    const resourceBoards = listField(fm, 'boards');
    const resourceQuals = listField(fm, 'qualifications');
    if (resourceBoards.length === 0 || resourceQuals.length === 0 || subjectsField.length === 0) continue;
    // IB has no syllabuses.ts coverage at all yet -- its assessment-
    // intelligence layer is out of scope until WS-IB (docs/decision-log.md
    // D-050 tracks it as a known, bounded gap, not an oversight). IB
    // resources deliberately use descriptive placeholders in syllabusCodes
    // ("DP Biology", "MYP Design") rather than a board-issued numeric code,
    // since IB doesn't assign one per subject the way Cambridge/AQA/Edexcel/
    // OCR/OxfordAQA do. Checking these against an intentionally-empty index
    // would flag all 44 IB resources as errors for a gap this workstream
    // isn't scoped to close -- skip rather than fabricate IB codes.
    if (resourceBoards.every((b) => b === 'ib')) continue;
    const subjectCandidates = subjectsField.flatMap((s) => matrixSlugsFor(s));

    // "9625 / 9725" style entries disclose more than one real code in a
    // single array element -- split on '/' (and ',') so each individual
    // code is checked on its own merits, not as one opaque string.
    const individualCodes = codesField.flatMap((c) => c.split(/[/,]/).map((x) => x.trim()).filter(Boolean));

    for (const code of individualCodes) {
      const matches = resourceBoards.some((b) => resourceQuals.some((q) => subjectCandidates.some((s) => codeIndex.get(topicKey(b, s, q))?.has(code))));
      if (!matches) {
        codeErrors.push(`${at}: syllabus code "${code}" does not match any syllabuses.ts entry for board(s) [${resourceBoards.join(', ')}] + subject(s) [${subjectsField.join(', ')}] + qualification(s) [${resourceQuals.join(', ')}]`);
        continue;
      }
      if (withdrawnCodes.has(code)) {
        codeWarnings.push(`${at}: cites code "${code}", which assessments.ts marks 'withdrawn' (no longer assessable) -- confirm this resource is intentionally archival`);
      }
    }
  }
}
if (codeErrors.length) {
  console.error(`\nSyllabus code reference validation FAILED — ${codeErrors.length} problem(s):\n`);
  for (const e of codeErrors) console.error(`  • ${e}`);
  console.error('');
  process.exit(1);
}
if (codeWarnings.length) {
  console.log(`\nSyllabus code references OK, ${codeWarnings.length} warning(s) (not build-failing):`);
  for (const w of codeWarnings) console.log(`  ⚠ ${w}`);
} else {
  console.log('Syllabus code references OK.');
}
