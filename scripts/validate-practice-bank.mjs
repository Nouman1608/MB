#!/usr/bin/env node
/**
 * Post-v2.0 Quality Closure WS8 — practice-question coverage validator.
 *
 * src/utils/practice/bank.ts parses prose "practice-questions" resource
 * files into the /practice/ self-check engine's question bank, keyed off
 * numbered "**N.**" markers between a "## Answers" boundary and (usually)
 * a "## Questions" heading. Before this validator existed, that parser had
 * a real, silent bug: roughly half of the flagship-relevant files organise
 * their numbered items under "## Section A" / "## Section B" subheadings
 * instead of a single "## Questions" heading, and the parser produced
 * *zero* questions for every one of them, with no error and no visible
 * symptom beyond a shorter list on /practice/{code}/ than the underlying
 * content actually supports (see docs/decision-log.md D-087 for the fix).
 * That kind of gap is invisible to a build or a page-count check -- the
 * page still renders, just with fewer questions than it should have.
 *
 * This validates two things:
 *
 *   [1] Coverage -- every `resourceType: "practice-questions"` file whose
 *       `syllabusCodes` includes a flagship code, and which has a real
 *       "## Answers" section, must parse to at least one question. A file
 *       that parses to zero is either mis-formatted in a new way this
 *       parser doesn't understand, or a genuine content problem -- either
 *       way it should fail loudly, not silently vanish from the bank.
 *   [2] No structural-markdown leakage -- no parsed question or answer's
 *       markdown may contain a bare heading line ("## ...") or a
 *       standalone "---" divider. Those are section-structure markup, not
 *       question content, and their presence means a subsection heading or
 *       divider fell inside a question's text instead of being stripped.
 *
 * Run as part of `npm run validate:academic`. Exits 1 on any problem.
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { buildPracticeBank } from '../src/utils/practice/bank.ts';
import { flagshipSpecs } from '../src/utils/academic/index.ts';

const RESOURCES_DIR = 'src/content/resources';

function parseFrontmatterField(fm, key) {
  const m = fm.match(new RegExp(`^${key}:\\s*"?(.+?)"?$`, 'm'));
  return m ? m[1].trim() : null;
}

function parseArrayField(fm, key) {
  const m = fm.match(new RegExp(`${key}:\\s*\\[(.*?)\\]`));
  if (!m) return [];
  return m[1]
    .split(',')
    .map((s) => s.trim().replace(/^["']|["']$/g, ''))
    .filter(Boolean);
}

const problems = [];
const flagshipCodes = new Set(flagshipSpecs().map((f) => f.code));
const bank = buildPracticeBank();

// [1] Coverage: re-scan the resource files directly (independent of
// bank.ts's own internal logic) so this check still catches a regression
// even if a future edit to bank.ts breaks the parser in a new way.
const files = readdirSync(RESOURCES_DIR).filter((f) => f.endsWith('.md'));
let flagshipFilesChecked = 0;
for (const file of files) {
  const raw = readFileSync(join(RESOURCES_DIR, file), 'utf-8');
  const parts = raw.split(/^---$/m);
  if (parts.length < 3) continue;
  const fm = parts[1];
  const body = parts.slice(2).join('---');

  if (parseFrontmatterField(fm, 'resourceType') !== 'practice-questions') continue;
  const syllabusCodes = parseArrayField(fm, 'syllabusCodes');
  if (!syllabusCodes.some((c) => flagshipCodes.has(c))) continue;
  if (!body.includes('## Answers')) continue; // not a real Q&A file -- nothing to parse

  flagshipFilesChecked++;
  const resourceSlug = file.replace(/\.md$/, '');
  const parsedCount = bank.filter((q) => q.resourceSlug === resourceSlug).length;
  if (parsedCount === 0) {
    problems.push(`[1] ${file} (syllabusCodes: ${syllabusCodes.join(', ')}): has a "## Answers" section but parsed to 0 questions -- check its heading structure against src/utils/practice/bank.ts.`);
  }
}

// [2] No structural-markdown leakage into parsed question/answer text.
const STRUCTURAL_NOISE = /^#{2,3}\s|^-{3,}\s*$/m;
for (const q of bank) {
  if (STRUCTURAL_NOISE.test(q.questionMarkdown)) {
    problems.push(`[2] ${q.id}: question text contains a leaked heading or divider line -- structural markdown should have been stripped, not shown to the reader.`);
  }
  if (STRUCTURAL_NOISE.test(q.answerMarkdown)) {
    problems.push(`[2] ${q.id}: answer text contains a leaked heading or divider line -- structural markdown should have been stripped, not shown to the reader.`);
  }
}

if (problems.length > 0) {
  console.error('Practice-bank validation FAILED:');
  for (const p of problems) console.error(`  ✗ ${p}`);
  console.error(`\n${problems.length} problem(s) found across ${flagshipFilesChecked} flagship-relevant file(s) and ${bank.length} parsed question(s).`);
  process.exit(1);
}

console.log(`Practice-bank validation OK — ${flagshipFilesChecked} flagship-relevant file(s) checked, all parsed to at least one question; ${bank.length} question(s) total across ${flagshipSpecs().length} flagship specifications, no structural-markdown leakage.`);
