#!/usr/bin/env node
/**
 * Flagship Dominance Programme WS-A (2026-08-31) -- rendered academic-label
 * validator.
 *
 * Every other academic validator in this repo checks DATA: does a
 * resource's frontmatter declare an ACTIVE board+qualification+subject
 * combination (validate-academic-content.mjs), does a syllabus-topic
 * reference exist in the official taxonomy, and so on. None of them check
 * what a visitor's browser actually renders. That is a real, different bug
 * class: a resource can have perfectly correct frontmatter and still show
 * the wrong label on the page, if the template, a shared label-mapping
 * function, or a hand-typed string diverges from that frontmatter. Data
 * validation cannot catch that -- only checking the built HTML can.
 *
 * This script re-derives, from the SAME source-of-truth data every
 * template reads from, what each page's labels SHOULD say, then greps the
 * actual built `dist/` HTML for those exact strings. It cannot use
 * `astro:content` (a virtual module only resolvable inside Astro's own
 * build), so it hand-parses resource frontmatter with the same
 * regex-based approach validate-academic-content.mjs already established,
 * and pulls typed data modules via the same `load()` subprocess trick
 * audit scripts in this repo use for the same reason.
 *
 * Checks two page families:
 *
 *   [1] Resource pages (dist/resources/<slug>/index.html) -- the
 *       data-pagefind-filter="Level" text must equal levelLabel(level,
 *       stage) recomputed here (kept in sync with the real implementation
 *       at src/utils/content/collections.ts:resourceLevelLabel -- if that
 *       function changes, this copy must change with it, flagged below),
 *       and every data-pagefind-filter="Board:<name>" /
 *       "Qualification:<name>" span must match the resource's own
 *       boards[]/qualifications[] frontmatter mapped through the same
 *       canonical BOARDS/QUALIFICATIONS name tables every other page uses.
 *
 *   [2] Academic hub pages (dist/boards/<board>/<qualification>/<subject>/
 *       index.html) -- defense-in-depth regression check. This template is
 *       already structurally sound (labels come directly from the
 *       activeOnly() Combination prop, not a re-typed string), so a
 *       mismatch here would mean the template itself regressed, not that
 *       today's data is wrong. Checks <title>, the visible Board/
 *       Qualification/Syllabus fields, and (where a syllabus record
 *       exists) the specification code, against MATRIX + SYLLABUSES.
 *
 * Negative-tested by scripts/test-negative-validation-suite.mjs: a known
 * page's dist/ HTML is mutated with an injected wrong label, this script is
 * confirmed to fail with a specific diagnostic, then the file is restored
 * byte-for-byte.
 *
 * Requires a fresh `dist/` (run `npm run build` first) -- not part of
 * `npm run validate:academic` for that reason, same convention as the
 * other dist-dependent audits. Run via `npm run audit:rendered-labels`,
 * wired into `npm run audit:all`.
 */
import { readdir, readFile } from 'node:fs/promises';
import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { execSync } from 'node:child_process';

const load = (file) => JSON.parse(execSync(
  `node --experimental-strip-types --no-warnings -e "` +
  `import('./${file}').then(m => process.stdout.write(JSON.stringify(m.default ?? m)))"`,
  { encoding: 'utf8', cwd: process.cwd() }));

const { MATRIX } = load('src/data/academic/matrix.ts');
const { BOARDS } = load('src/data/academic/boards.ts');
const { QUALIFICATIONS } = load('src/data/academic/qualifications.ts');
const { SYLLABUSES } = load('src/data/academic/syllabuses.ts');

const boardNameBySlug = new Map(BOARDS.map((b) => [b.slug, b.name]));
const qualNameBySlug = new Map(QUALIFICATIONS.map((q) => [q.slug, q.name]));
const syllabusFor = (b, q, s) => SYLLABUSES.find(
  (row) => row.boardSlug === b && row.qualificationSlug === q && row.subjectSlug === s,
);

try {
  readdirSync('dist');
} catch {
  console.error('dist/ not found -- run `npm run build` first.');
  process.exit(1);
}

const errors = [];

// ---------------------------------------------------------------------------
// [1] RESOURCE PAGES
// ---------------------------------------------------------------------------

/**
 * Kept in sync with src/utils/content/collections.ts:resourceLevelLabel.
 * If that function's mapping changes, this must change with it -- there is
 * no way to import the real one (it has no astro:content dependency itself,
 * but collections.ts as a whole does, via getCollection), so it is
 * duplicated here rather than left unchecked.
 *
 * D-153 (WS4, 2026-09-08): the real function gained a third argument,
 * `qualifications`, deriving AS-ness from a resource's standalone
 * `qualifications: ["as-level"]` when `stage` is absent (AQA's genuinely
 * separate AS Level qualification, as opposed to 9701's combined-syllabus
 * `stage` field). This copy was not updated in the same change -- exactly
 * the drift this comment warns about -- and every AQA AS Level resource
 * failed this audit as a result (rendered "AS LEVEL" correctly; this stale
 * copy still expected "A LEVELS"). Caught by running audit:rendered-labels
 * for WS5 and finding it FAILED for an unrelated reason. Fixed here to
 * match collections.ts exactly.
 */
const levelLabel = (levels, stage, qualifications) => {
  const effectiveStage = stage ?? (qualifications?.includes('as-level') ? 'AS' : undefined);
  return levels
    .map((l) => {
      if (l === 'a-levels' && effectiveStage === 'AS') return 'AS LEVEL';
      if (l === 'a-levels' && effectiveStage === 'A') return 'A LEVEL';
      return l.replace(/-/g, ' ').toUpperCase();
    })
    .join(', ');
};

const scalarField = (fm, name) => {
  const m = fm.match(new RegExp(`^${name}:\\s*"?([A-Za-z-]+)"?\\s*$`, 'm'));
  return m ? m[1] : undefined;
};
const listField = (fm, name) => {
  const m = fm.match(new RegExp(`^${name}:\\s*\\[(.*?)\\]`, 'm'));
  if (!m) return [];
  return m[1].split(',').map((v) => v.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
};

let resourceFiles = [];
try {
  resourceFiles = (await readdir('src/content/resources')).filter((f) => f.endsWith('.md'));
} catch {
  console.error('src/content/resources not found.');
  process.exit(1);
}

let resourcesChecked = 0;
for (const file of resourceFiles) {
  const slug = file.replace(/\.md$/, '');
  const distPath = join('dist', 'resources', slug, 'index.html');
  let html;
  try {
    html = await readFile(distPath, 'utf8');
  } catch {
    // Draft/archived resources may not produce a page -- getResources()
    // filters drafts, and that is validated elsewhere (audit-redirects,
    // audit-internal-links). Not this script's concern.
    continue;
  }
  resourcesChecked++;

  const raw = await readFile(join('src/content/resources', file), 'utf8');
  const fm = raw.split('---')[1] ?? '';
  const levels = listField(fm, 'level');
  const stage = scalarField(fm, 'stage');
  const boards = listField(fm, 'boards');
  const quals = listField(fm, 'qualifications');

  const expectedLevel = levelLabel(levels, stage, quals);
  const at = `dist/resources/${slug}/index.html`;

  const levelMatch = html.match(/data-pagefind-filter="Level"[^>]*>([^<]*)</);
  const renderedLevel = levelMatch?.[1]?.trim();
  if (renderedLevel !== expectedLevel) {
    errors.push(`${at}: Level shows "${renderedLevel ?? '(missing)'}" but frontmatter (level=[${levels.join(', ')}], stage=${stage ?? '(none)'}) implies "${expectedLevel}"`);
  }

  for (const b of boards) {
    const expectedName = boardNameBySlug.get(b);
    if (!expectedName) continue; // an unknown board slug is validate-academic-content.mjs's job, not this one's
    const tag = `data-pagefind-filter="Board:${expectedName}"`;
    if (!html.includes(tag)) {
      errors.push(`${at}: frontmatter declares board "${b}" (${expectedName}) but no matching Board:${expectedName} filter tag is rendered`);
    }
  }
  for (const q of quals) {
    const expectedName = qualNameBySlug.get(q);
    if (!expectedName) continue;
    const tag = `data-pagefind-filter="Qualification:${expectedName}"`;
    if (!html.includes(tag)) {
      errors.push(`${at}: frontmatter declares qualification "${q}" (${expectedName}) but no matching Qualification:${expectedName} filter tag is rendered`);
    }
  }

  // Rendered Board:/Qualification: tags that DON'T correspond to any
  // declared frontmatter value would mean a stale or duplicated tag --
  // check the reverse direction too.
  const renderedBoardTags = [...html.matchAll(/data-pagefind-filter="Board:([^"]+)"/g)].map((m) => m[1]);
  const declaredBoardNames = new Set(boards.map((b) => boardNameBySlug.get(b)).filter(Boolean));
  for (const name of renderedBoardTags) {
    if (!declaredBoardNames.has(name)) {
      errors.push(`${at}: renders Board:${name} filter tag with no corresponding board in frontmatter (boards=[${boards.join(', ')}])`);
    }
  }
  const renderedQualTags = [...html.matchAll(/data-pagefind-filter="Qualification:([^"]+)"/g)].map((m) => m[1]);
  const declaredQualNames = new Set(quals.map((q) => qualNameBySlug.get(q)).filter(Boolean));
  for (const name of renderedQualTags) {
    if (!declaredQualNames.has(name)) {
      errors.push(`${at}: renders Qualification:${name} filter tag with no corresponding qualification in frontmatter (qualifications=[${quals.join(', ')}])`);
    }
  }
}

// ---------------------------------------------------------------------------
// [2] ACADEMIC HUB PAGES -- defense-in-depth regression check
// ---------------------------------------------------------------------------

function walkHtml(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    const st = statSync(p);
    if (st.isDirectory()) walkHtml(p, out);
    else if (entry === 'index.html') out.push(p);
  }
  return out;
}

const activeCombos = MATRIX.filter((c) => c.marlbridgeStatus === 'ACTIVE');
let hubsChecked = 0;
for (const c of activeCombos) {
  const distPath = join('dist', 'boards', c.boardSlug, c.qualificationSlug, c.subjectSlug, 'index.html');
  let html;
  try {
    html = await readFile(distPath, 'utf8');
  } catch {
    continue; // not every ACTIVE combo is guaranteed a hub in every build state; other audits catch routing gaps
  }
  hubsChecked++;
  const at = `dist/boards/${c.boardSlug}/${c.qualificationSlug}/${c.subjectSlug}/index.html`;
  const expectedBoardName = boardNameBySlug.get(c.boardSlug) ?? c.board;
  const expectedQualName = qualNameBySlug.get(c.qualificationSlug) ?? c.qualification;

  const title = html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? '';
  /**
   * A qualification whose own canonical name already carries its board's
   * identity (e.g. IB Diploma Programme -- see docs/decision-log.md
   * D-091 follow-up) is legitimately allowed to omit the separate board
   * name from a composed heading/title without that being a label bug --
   * so either the board name OR the qualification name establishing that
   * same identity satisfies this check. Subject is always required.
   */
  const boardIdentityPresent = title.includes(expectedBoardName) || title.includes(expectedQualName);
  if (!boardIdentityPresent || !title.includes(c.subject)) {
    errors.push(`${at}: <title> "${title.trim()}" does not contain expected board "${expectedBoardName}" (or qualification "${expectedQualName}") and/or subject "${c.subject}"`);
  }

  const boardField = html.match(/Board\s*<\/dt><dd[^>]*><a[^>]*>([^<]*)</)?.[1]?.trim();
  if (boardField && boardField !== expectedBoardName) {
    errors.push(`${at}: rendered "Board" field shows "${boardField}", expected "${expectedBoardName}" (matrix.ts)`);
  }
  const qualField = html.match(/Qualification\s*<\/dt><dd[^>]*><a[^>]*>([^<]*)</)?.[1]?.trim();
  if (qualField && qualField !== expectedQualName) {
    errors.push(`${at}: rendered "Qualification" field shows "${qualField}", expected "${expectedQualName}" (matrix.ts)`);
  }

  const syllabus = syllabusFor(c.boardSlug, c.qualificationSlug, c.subjectSlug);
  if (syllabus) {
    const codeField = html.match(/Syllabus\s*<\/dt><dd[^>]*>([^<]*)</)?.[1]?.trim();
    if (codeField && codeField !== syllabus.code) {
      errors.push(`${at}: rendered "Syllabus" field shows "${codeField}", expected "${syllabus.code}" (syllabuses.ts)`);
    }
  }
}

// ---------------------------------------------------------------------------
// [3] DUPLICATED ASSESSMENT-COMPONENT TIER SUFFIX (D-153 follow-up, WS5)
//
// Some component titles in assessments.ts already end in their own tier
// suffix ("Non-calculator (Core)") because that is genuinely part of the
// official component name; the hub template also appends a separate tier
// badge after every tiered component's title. Before the WS5 fix this
// unconditionally doubled up wherever a title already carried it --
// "Non-calculator (Core) (Core)" -- on every tiered syllabus hub across
// every board, not just one. The template fix (src/pages/boards/
// [board]/[qualification]/[subject].astro) now suppresses the badge when
// the title already ends in the same tier's parenthetical, but a future
// edit to that same block could reintroduce the double-append without
// touching any data file at all, so this checks the actual rendered
// output rather than re-deriving from assessments.ts (which is not
// TS-strip-loadable via the load() helper above -- it is the one data
// module in this family too large/slow to round-trip through `node -e`
// on every validate:academic run, hence living in audit:all instead).
//
// General on purpose: catches ANY immediately-repeated identical
// parenthetical after a component title, not just "(Core) (Core)" -- the
// same bug class would look identical for "(Extended) (Extended)",
// "(Higher) (Higher)", etc.
// ---------------------------------------------------------------------------
let assessmentHubsChecked = 0;
const dupTierPattern = /\(([A-Za-z][A-Za-z \-]*)\)\s*\(\1\)/g;
for (const c of activeCombos) {
  const distPath = join('dist', 'boards', c.boardSlug, c.qualificationSlug, c.subjectSlug, 'index.html');
  let html;
  try {
    html = await readFile(distPath, 'utf8');
  } catch {
    continue;
  }
  assessmentHubsChecked++;
  const at = `dist/boards/${c.boardSlug}/${c.qualificationSlug}/${c.subjectSlug}/index.html`;
  const dupes = [...html.matchAll(dupTierPattern)];
  if (dupes.length) {
    const unique = [...new Set(dupes.map((d) => `(${d[1]}) (${d[1]})`))];
    errors.push(`${at}: assessment component renders a duplicated tier suffix -- ${unique.join(', ')}`);
  }
}

if (errors.length) {
  console.error(`\nRendered academic-label validation FAILED -- ${errors.length} problem(s):\n`);
  for (const e of errors) console.error(`  • ${e}`);
  console.error('');
  process.exit(1);
}
console.log(`Rendered academic-label validation OK -- ${resourcesChecked} resource page(s), ${hubsChecked} academic hub page(s), and ${assessmentHubsChecked} assessment table(s) checked, rendered labels match canonical data with no duplicated tier suffixes.`);
