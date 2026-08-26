#!/usr/bin/env node
/**
 * Fails when two or more resources declare the exact same official
 * syllabus scope (subject + boards + qualifications + stage + resourceType
 * + the full set of syllabusTopics topic/subtopic pairs) UNLESS that exact
 * pair has been hand-reviewed and recorded in REVIEWED_LEGITIMATE below.
 *
 * Background: a site-wide audit (2026-08-23, see docs/decision-log.md
 * D-010) found the weekly `marlbridge-weekly-study-guides` scheduled task
 * had independently generated 27 genuine duplicate resource pairs (54
 * files) under two different slug conventions for the identical syllabus
 * scope, most within a single afternoon of rapid-fire runs. A naive
 * "does a file with a similar name already exist" check is not reliable
 * enough to catch this -- the automation had picked slugs like
 * `as-chem-equilibria-practice` and `as-chemistry-equilibria-practice` for
 * the exact same board/qualification/subject/subtopic, which don't look
 * alike as strings but ARE identical in the one thing that actually
 * matters: the official syllabus scope declared in frontmatter. Those 27
 * were consolidated (see CONSOLIDATED_RESOURCES in generate-redirects.mjs).
 *
 * That same audit found 12 pairs sharing an identical scope signature that
 * were judged, by reading the prose, to be genuinely different content --
 * the official taxonomy simply doesn't split some topics as finely as the
 * actual resources do. Those 12 were re-reviewed from scratch, file by
 * file, during the v1.x Closure release (2026-08-26, not assumed from the
 * 2026-08-23 note) -- see docs/decision-log.md D-048. That re-review found:
 *   - 10 of the 12 groups genuinely are different content under one coarse
 *     tag. Each is recorded below with the specific evidence that
 *     distinguishes them, so the next person doesn't have to re-derive it.
 *   - 2 of the 12 groups (both revision-notes pairs, one Law, one
 *     Sociology) were REAL duplicates: each pair's two files independently
 *     condensed the same underlying study-guide resource and read as the
 *     same content restated. Both were merged into one file; the retired
 *     slugs 301-redirect via CONSOLIDATED_RESOURCES. They no longer appear
 *     as groups at all (each subject+scope now has only one file), so they
 *     need no allowlist entry -- the merge is the fix, not an exemption.
 *
 * This script is a hard gate: a NEW group that is not in REVIEWED_LEGITIMATE
 * fails the build (exit 1). This is deliberate -- WS9 of the v1.x Closure
 * release requires "the checker must fail on new unreviewed groups" so that
 * a future automation run can no longer silently ship an unreviewed
 * same-scope pair the way the 27 above shipped unreviewed. Getting an
 * unfamiliar group past this gate requires actually reading both files and
 * either (a) adding a REVIEWED_LEGITIMATE entry with real evidence, or
 * (b) merging/redirecting the duplicate, exactly as this file's own
 * history was resolved. "The tag is coarser than the content" is not by
 * itself evidence -- name the actual difference in subject matter.
 *
 * Usage: node scripts/check-duplicate-resource-scope.mjs
 *   Optionally restrict the report to groups that include one of a given
 *   set of files (handy for the weekly automation, which only cares
 *   whether ITS new file collides with something pre-existing):
 *     node scripts/check-duplicate-resource-scope.mjs --only-involving <slug1>,<slug2>,...
 *   With --only-involving, the exit code is always 0 -- this mode is an
 *   informational check for the automation to read, not a gate on it
 *   (the automation cannot itself write an allowlist entry).
 */
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const RES_DIR = 'src/content/resources';

/**
 * Every group the fresh 2026-08-26 review confirmed is genuinely different
 * content, keyed by the group's file list (sorted, exact match required --
 * if either file is renamed or a third file joins the group, the key no
 * longer matches and the group must be re-reviewed). Each entry records
 * the specific, readable-by-a-human evidence for the distinction, not just
 * "looks different" -- per WS9's instruction to classify with evidence.
 */
const REVIEWED_LEGITIMATE = [
  {
    files: ['a-english-language-reading-practice.md', 'a-level-english-language-practice.md'],
    evidence: 'Zero overlapping questions. First is discourse/text analysis (levels of language, register, connotation, cohesion devices); second is language change and child language acquisition (broadening/narrowing/amelioration/pejoration, acquisition stages, Skinner/Chomsky/Bruner/Piaget). Both tagged only to Paper 1 (9093) with no finer official subtopic split.',
  },
  {
    files: ['a-english-language-reading-revision-notes.md', 'a-level-english-language-revision-notes.md'],
    evidence: 'First teaches the analytical toolkit (language frameworks, register, spoken-language features, directed-writing technique); second teaches Paper 1 exam mechanics (timing, mark allocation per question, assessment objectives, task word-count limits). Complementary, not overlapping -- confirmed no shared sentence-level content.',
  },
  {
    files: ['a-law-english-legal-system-practice.md', 'law-english-legal-system-practice.md'],
    evidence: "First's questions are courts/judiciary/juries/legal-personnel/judicial-independence; second's are sources of law/civil procedure tracks/ADR/sentencing/legal funding. No shared question or answer.",
  },
  {
    files: ['elastic-deformation-moments-and-centre-of-gravity.md', 'forces-and-motion.md'],
    evidence: 'Distinct O Level Physics 5054 topics: spring constant/load-extension/principle of moments/centre of gravity vs Newton\'s first and third laws/F=ma/friction/terminal velocity/circular motion. Both tagged only to the single "1.5 Forces" subtopic, which the syllabus does not split further.',
  },
  {
    files: ['energy-resources-and-efficiency.md', 'energy-work-and-power.md'],
    evidence: 'Distinct O Level Physics 5054 topics: renewable/non-renewable energy resources, electricity generation, Sankey diagrams vs energy stores and transfers, KE/GPE, work done, power, conservation of energy.',
  },
  {
    files: ['energy-resources-practice.md', 'energy-work-and-power-practice.md'],
    evidence: 'Practice-question siblings of the pair above; same topic split, confirmed distinct by description and no shared questions.',
  },
  {
    files: ['energy-resources-revision-notes.md', 'energy-work-and-power-revision-notes.md'],
    evidence: 'Revision-notes siblings of the pair above; same topic split, confirmed distinct by description.',
  },
  {
    files: ['forces-and-motion-practice.md', 'moments-and-stability-practice.md'],
    evidence: "Newton's laws/resultant forces/friction/free-body diagrams vs moments/principle of moments/centre of mass/levers/stability -- the pairing explicitly documented in this file's own history (D-010) and re-confirmed by description on 2026-08-26.",
  },
  {
    files: ['forces-and-motion-revision-notes.md', 'moments-and-stability-revision-notes.md'],
    evidence: 'Revision-notes siblings of the pair above; same confirmed topic split.',
  },
  {
    files: ['igcse-sociology-methods-inequality-practice.md', 'sociology-research-methods-practice.md'],
    evidence: 'First blends core methods terms/sampling/structured interviews with substantive inequality content (gender pay gap, ethnicity and life chances). Second is a pure methods deep-dive (participant observation, official statistics, reliability vs validity, ethics, sampling a hard-to-reach population). No shared question or answer despite both touching "sampling" in passing.',
  },
];

const legitimateKeyOf = (fs) => [...fs].sort().join('|');
const REVIEWED_KEYS = new Map(
  REVIEWED_LEGITIMATE.map((entry) => [legitimateKeyOf(entry.files), entry.evidence])
);

const field = (fm, name) => {
  const m = fm.match(new RegExp(`${name}:\\s*"([^"]*)"`));
  return m ? m[1] : '';
};

const arrayField = (fm, name) => {
  const m = fm.match(new RegExp(`${name}:\\s*\\[([^\\]]*)\\]`));
  if (!m) return [];
  return [...m[1].matchAll(/"([^"]*)"/g)].map((x) => x[1]).sort();
};

const syllabusTopicsOf = (fm) => {
  const block = fm.match(/^syllabusTopics:\s*\n((?:  - .*\n(?:    .*\n)*)*)/m);
  if (!block) return [];
  const pairs = [];
  for (const entry of block[1].split(/\n(?=  - )/)) {
    const t = entry.match(/topic:\s*"([^"]*)"/);
    const st = entry.match(/subtopic:\s*"([^"]*)"/);
    pairs.push(`${t ? t[1] : ''}::${st ? st[1] : ''}`);
  }
  return pairs.sort();
};

const files = (await readdir(RES_DIR)).filter((f) => f.endsWith('.md'));

const groups = new Map();
for (const fname of files) {
  const text = await readFile(join(RES_DIR, fname), 'utf8');
  const fmMatch = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!fmMatch) continue;
  const fm = fmMatch[1];

  const subject = field(fm, 'subject');
  const boards = arrayField(fm, 'boards');
  const quals = arrayField(fm, 'qualifications');
  const stage = field(fm, 'stage');
  const resourceType = field(fm, 'resourceType');
  const topics = syllabusTopicsOf(fm);

  if (topics.length === 0) continue; // nothing to compare -- can't claim scope overlap

  const sig = JSON.stringify({ subject, boards, quals, stage, resourceType, topics });
  if (!groups.has(sig)) groups.set(sig, []);
  groups.get(sig).push(fname);
}

const dupeGroups = [...groups.entries()].filter(([, fs]) => fs.length > 1);

const onlyIdx = process.argv.indexOf('--only-involving');
const isOnlyMode = onlyIdx !== -1 && !!process.argv[onlyIdx + 1];
let filtered = dupeGroups;
if (isOnlyMode) {
  const wanted = new Set(process.argv[onlyIdx + 1].split(',').map((s) => `${s.trim()}.md`));
  filtered = dupeGroups.filter(([, fs]) => fs.some((f) => wanted.has(f)));
}

if (filtered.length === 0) {
  console.log(
    isOnlyMode
      ? 'No existing resource shares an official syllabus scope with the file(s) checked. Safe to proceed, pending your own read of the content.'
      : `No resource pairs share an identical official syllabus scope, across ${files.length} resource file(s).`
  );
  process.exit(0);
}

const unreviewed = [];
const reviewed = [];
for (const [sig, fs] of filtered) {
  const key = legitimateKeyOf(fs);
  if (REVIEWED_KEYS.has(key)) {
    reviewed.push([sig, fs, REVIEWED_KEYS.get(key)]);
  } else {
    unreviewed.push([sig, fs]);
  }
}

if (reviewed.length > 0) {
  console.log(`${reviewed.length} group(s) share an official syllabus scope but are reviewed and allow-listed as genuinely different content:\n`);
  for (const [sig, fs, evidence] of reviewed) {
    const { subject, boards, quals, stage, resourceType } = JSON.parse(sig);
    console.log(`[${subject} | ${boards.join('+')} | ${quals.join('+')} | stage=${stage || '(none)'} | ${resourceType}]`);
    for (const f of fs) console.log(`   - ${f}`);
    console.log(`   Evidence: ${evidence}`);
    console.log('');
  }
}

if (unreviewed.length === 0) {
  console.log(isOnlyMode ? 'File(s) checked only collide with already-reviewed, allow-listed group(s). Safe to proceed.' : 'PASS: every group sharing an identical official syllabus scope is reviewed and allow-listed above.');
  process.exit(0);
}

console.log(`${isOnlyMode ? 'WARNING' : 'FAIL'}: ${unreviewed.length} group(s) share an identical official syllabus scope and are NOT yet reviewed:\n`);
for (const [sig, fs] of unreviewed) {
  const { subject, boards, quals, stage, resourceType } = JSON.parse(sig);
  console.log(`[${subject} | ${boards.join('+')} | ${quals.join('+')} | stage=${stage || '(none)'} | ${resourceType}]`);
  for (const f of fs) console.log(`   - ${f}`);
  console.log('');
}
console.log('Read both files before deciding. Then either:');
console.log('  (a) add an entry to REVIEWED_LEGITIMATE in this script with the specific');
console.log('      evidence that distinguishes the content (not just "the tag is coarse"), or');
console.log('  (b) merge the duplicate and add a redirect (CONSOLIDATED_RESOURCES in');
console.log('      scripts/generate-redirects.mjs), retiring the weaker file.');
console.log('Record the decision in docs/decision-log.md either way.');

// --only-involving is informational for the weekly automation, which
// cannot itself edit REVIEWED_LEGITIMATE -- never fail that invocation.
// Every other invocation (CI, validate:academic, a human running it
// directly) is a real gate: a brand-new unreviewed group fails the build.
process.exit(isOnlyMode ? 0 : 1);
