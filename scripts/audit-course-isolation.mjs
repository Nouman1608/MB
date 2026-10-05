#!/usr/bin/env node
/**
 * Navigation round (6 Oct 2026) -- course-isolation audit of the BUILT site.
 *
 * The study-resource journey is Qualification > Exam board > Subject > Topic.
 * Once a student is inside a course, nothing shown to them as part of that
 * course may belong to a different one. This audit checks that, from the
 * HTML a visitor actually receives, independently of the code that built it:
 *
 *   [1] Course pages (/boards/<b>/<q>/<s>/): every resource linked in
 *       "Topics and resources" belongs to that course.
 *   [2] Resource pages: every course named in the course bar is one the
 *       resource belongs to; every resource linked from that course's
 *       "On this topic" and "Next steps" links belongs to the same course.
 *   [3] Resource pages: "Previous / Next" in the topic sequence and
 *       "Related resources" stay in the page's own course (same subject,
 *       overlapping board, qualification and syllabus code).
 *   [4] /resources/<type>/<subject>/ and /subjects/<subject>/: every
 *       resource listed under a course heading belongs to that course.
 *   [5] Every published resource is still linked from its subject page
 *       (grouping by course must not drop anything).
 *
 * "Belongs" is read from each resource's own frontmatter: subject, boards
 * (empty = any board), qualifications (empty = any) and syllabusCodes
 * (empty = any). Codes compare on the code before any "/" (unit codes such
 * as WBS11/01), with two documented equivalences: Pearson IAL unit codes
 * (W..) belong to their qualification code (X../Y..) with the same subject
 * letters, and IB codes compare without their edition year in brackets.
 *
 * Exits 1 on any problem. Run `npm run build` first.
 */
import { readFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import yaml from 'js-yaml';

const DIST = process.env.AUDIT_DIST ?? 'dist';
const RES_DIR = 'src/content/resources';
const problems = [];
const counts = { hubs: 0, hubLinks: 0, resourcePages: 0, optionLinks: 0, siblingLinks: 0, groupedLinks: 0 };

// ---- resource frontmatter -------------------------------------------------
const resources = new Map();
for (const f of await readdir(RES_DIR)) {
  if (!f.endsWith('.md')) continue;
  const raw = await readFile(join(RES_DIR, f), 'utf8');
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) continue;
  const d = yaml.load(m[1]);
  resources.set(f.slice(0, -3), {
    subject: d.subject,
    boards: d.boards ?? [],
    qualifications: d.qualifications ?? [],
    codes: d.syllabusCodes ?? [],
    draft: d.reviewStatus === 'draft',
  });
}

const catalogue = JSON.parse(await readFile(join(DIST, 'tools-data/catalogue.json'), 'utf8'));
const courseById = new Map(catalogue.map((e) => [e.id, e]));

const normCode = (c) => String(c).split('/')[0].replace(/\s*\(\d{4}\)\s*$/, '').trim().toUpperCase();
const courseCodes = (code) => (code ? String(code).split(' / ').map(normCode).filter(Boolean) : []);
function codesOverlap(resCodes, courseCodeList) {
  if (!resCodes.length || !courseCodeList.length) return true;
  return resCodes.map(normCode).some((rc) => courseCodeList.some((cc) =>
    rc === cc
    // Pearson IAL: unit W<SUBJ><n> belongs to qualification X/Y<SUBJ>..
    || (/^W[A-Z]{2}\d/.test(rc) && /^[XY][A-Z]{2}\d/.test(cc) && rc.slice(1, 3) === cc.slice(1, 3))));
}

/** Subject content id of each course, read from its own page's "All <subject> at Marlbridge" link. */
const hubSubject = new Map();
async function subjectOfCourse(id) {
  if (hubSubject.has(id)) return hubSubject.get(id);
  const html = await readFile(join(DIST, 'boards', id, 'index.html'), 'utf8').catch(() => '');
  const m = html.match(/href="\/subjects\/([a-z0-9-]+)\/"[^>]*>All [^<]+ at Marlbridge/);
  hubSubject.set(id, m ? m[1] : null);
  return hubSubject.get(id);
}

async function belongs(slug, courseId) {
  const r = resources.get(slug);
  const c = courseById.get(courseId);
  if (!r) return `resource "${slug}" has no source file`;
  if (!c) return `course "${courseId}" is not in the catalogue`;
  const subject = await subjectOfCourse(courseId);
  if (subject && r.subject !== subject) return `subject ${r.subject} is not ${subject}`;
  if (r.boards.length && !r.boards.includes(c.bs)) return `boards [${r.boards}] exclude ${c.bs}`;
  if (r.qualifications.length && !r.qualifications.includes(c.qs)) return `qualifications [${r.qualifications}] exclude ${c.qs}`;
  if (!codesOverlap(r.codes, courseCodes(c.code))) return `syllabus codes [${r.codes}] do not include ${c.code}`;
  return null;
}

function sameCourse(a, b) {
  const A = resources.get(a), B = resources.get(b);
  if (!A || !B) return false;
  const overlap = (x, y) => !x.length || !y.length || x.some((v) => y.includes(v));
  return A.subject === B.subject && overlap(A.boards, B.boards) && overlap(A.qualifications, B.qualifications)
    && (!A.codes.length || !B.codes.length || A.codes.some((c) => B.codes.map(normCode).includes(normCode(c))));
}

const resourceLinks = (html) => [...html.matchAll(/href="\/resources\/([a-z0-9-]+)\/"/g)].map((m) => m[1]).filter((s) => resources.has(s));

/** Slice of `html` from the element opening at `start` to its matching close tag. */
function element(html, start) {
  const tag = html.slice(start + 1).match(/^[a-z0-9]+/)[0];
  const re = new RegExp(`<${tag}[\\s>]|</${tag}>`, 'g');
  re.lastIndex = start;
  let depth = 0;
  for (let m; (m = re.exec(html));) {
    depth += m[0].startsWith('</') ? -1 : 1;
    if (depth === 0) return html.slice(start, re.lastIndex);
  }
  return html.slice(start);
}

// ---- [1] course pages -----------------------------------------------------
for (const c of catalogue) {
  const file = join(DIST, 'boards', c.id, 'index.html');
  if (!existsSync(file)) { problems.push(`[1] ${c.hub}: course page missing`); continue; }
  const html = await readFile(file, 'utf8');
  const at = html.indexOf('data-course-topics');
  if (at < 0) { problems.push(`[1] ${c.hub}: no "Topics and resources" section`); continue; }
  counts.hubs++;
  const section = element(html, html.lastIndexOf('<', at));
  for (const slug of resourceLinks(section)) {
    counts.hubLinks++;
    const why = await belongs(slug, c.id);
    if (why) problems.push(`[1] ${c.hub}: lists /resources/${slug}/ (${why})`);
  }
}

// ---- [2] [3] resource pages -------------------------------------------------
for (const slug of resources.keys()) {
  const file = join(DIST, 'resources', slug, 'index.html');
  if (!existsSync(file)) continue; // drafts are not built
  const html = await readFile(file, 'utf8');
  counts.resourcePages++;
  const barAt = html.indexOf('data-course-bar');
  let barStart = -1, barEnd = -1;
  if (barAt >= 0) {
    barStart = html.lastIndexOf('<', barAt);
    const bar = element(html, barStart);
    barEnd = barStart + bar.length;
    for (const m of bar.matchAll(/data-course-option="([^"]+)"/g)) {
      const why = await belongs(slug, m[1]);
      if (why) problems.push(`[2] /resources/${slug}/: course bar names ${m[1]} (${why})`);
    }
  }
  // Every block carrying data-course-option (on-this-topic, next steps) outside the bar.
  for (const m of html.matchAll(/<(nav|ul|div)\b[^>]*data-course-option="([^"]+)"/g)) {
    if (m.index >= barStart && m.index < barEnd) continue; // the bar itself is checked above
    const block = element(html, m.index);
    for (const linked of resourceLinks(block)) {
      if (linked === slug) continue;
      counts.optionLinks++;
      const why = await belongs(linked, m[2]);
      if (why) problems.push(`[2] /resources/${slug}/: ${m[2]} links to /resources/${linked}/ (${why})`);
    }
  }
  for (const marker of ['aria-label="Topic sequence"', 'id="also-resources"']) {
    const at = html.indexOf(marker);
    if (at < 0) continue;
    const block = element(html, html.lastIndexOf('<', at));
    for (const linked of resourceLinks(block)) {
      if (linked === slug) continue;
      counts.siblingLinks++;
      if (!sameCourse(slug, linked)) problems.push(`[3] /resources/${slug}/: ${marker.includes('also') ? 'Related resources' : 'Previous/Next'} links to /resources/${linked}/, another course`);
    }
  }
}

// ---- [4] grouped listings ---------------------------------------------------
async function groupedPage(file, label) {
  const html = await readFile(file, 'utf8');
  // Each course group opens with a link to its course page (#topics).
  const parts = html.split(/(?=<section aria-labelledby="course-|<details class="group)/);
  for (const part of parts) {
    const hub = part.match(/href="\/boards\/([a-z0-9-]+\/[a-z0-9-]+\/[a-z0-9-]+)\/#topics"/);
    if (!hub) continue;
    for (const slug of resourceLinks(part)) {
      counts.groupedLinks++;
      const why = await belongs(slug, hub[1]);
      if (why) problems.push(`[4] ${label}: under ${hub[1]} lists /resources/${slug}/ (${why})`);
    }
  }
}
for (const type of await readdir(join(DIST, 'resources'), { withFileTypes: true })) {
  if (!type.isDirectory()) continue;
  const dir = join(DIST, 'resources', type.name);
  for (const sub of await readdir(dir, { withFileTypes: true })) {
    if (sub.isDirectory() && existsSync(join(dir, sub.name, 'index.html'))) await groupedPage(join(dir, sub.name, 'index.html'), `/resources/${type.name}/${sub.name}/`);
  }
}
for (const sub of await readdir(join(DIST, 'subjects'), { withFileTypes: true })) {
  if (!sub.isDirectory()) continue;
  const file = join(DIST, 'subjects', sub.name, 'index.html');
  await groupedPage(file, `/subjects/${sub.name}/`);
  // [5] nothing dropped from the subject page
  const linked = new Set(resourceLinks(await readFile(file, 'utf8')));
  const missing = [...resources.entries()].filter(([slug, r]) => r.subject === sub.name && !r.draft && existsSync(join(DIST, 'resources', slug, 'index.html')) && !linked.has(slug));
  if (missing.length) problems.push(`[5] /subjects/${sub.name}/: ${missing.length} resource(s) of this subject not linked, e.g. /resources/${missing[0][0]}/`);
}

console.log('Course-isolation audit (built site)');
console.log(`  Course pages checked: ${counts.hubs} (${counts.hubLinks} resource links)`);
console.log(`  Resource pages checked: ${counts.resourcePages} (${counts.optionLinks} course-specific links, ${counts.siblingLinks} sequence/related links)`);
console.log(`  Grouped listing links checked: ${counts.groupedLinks}`);
if (problems.length) {
  console.error(`\nFAILED: ${problems.length} problem(s)`);
  for (const p of problems.slice(0, Number(process.env.AUDIT_SHOW ?? 60))) console.error(`  ✗ ${p}`);
  if (problems.length > 60) console.error(`  … and ${problems.length - 60} more`);
  process.exit(1);
}
console.log('\nPASS: 0 problem(s) found.');
