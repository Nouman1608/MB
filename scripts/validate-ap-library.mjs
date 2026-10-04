#!/usr/bin/env node
/**
 * Validates the advanced-course (AP) library: src/content/ap-resources/<course>/*.md
 * against the verified framework map (src/data/ap/frameworks.ts) and the source
 * register (src/data/ap/sources.ts). Runs in `npm run validate:academic`, so a broken
 * record fails the build even while the library is unpublished.
 *
 * Checks: unique resource ids; course/unit/topic numbers exist in the 2026-27 framework;
 * Calculus AB never claims a BC-only topic; calculus scope labels; related/next/
 * prerequisite ids and internal library links resolve; sources and skills exist; review
 * fields only with a real review status; no College Board marks in metadata while
 * AP_MARK_IN_METADATA is false; minimum substance per resource type; practice pages carry
 * the "original Marlbridge practice" label and an answer for every multiple-choice
 * question; dates are sane.
 *
 * Run: node --experimental-strip-types scripts/validate-ap-library.mjs
 */
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import YAML from 'yaml';
import { AP_COURSES } from '../src/data/ap/frameworks.ts';
import { AP_SOURCES } from '../src/data/ap/sources.ts';
import { AP_MARK_IN_METADATA, AP_LIBRARY_BASE } from '../src/data/ap/config.ts';

const ROOT = 'src/content/ap-resources';
let problems = 0;
const fail = (file, msg) => { console.error(`  ✗ ${file}: ${msg}`); problems++; };

const files = [];
if (existsSync(ROOT)) {
  for (const dir of readdirSync(ROOT)) {
    const p = join(ROOT, dir);
    if (!statSync(p).isDirectory()) { fail(p, 'files must live in a course folder'); continue; }
    for (const f of readdirSync(p)) if (f.endsWith('.md')) files.push({ folder: dir, name: f, path: join(p, f) });
  }
}

const records = files.map((f) => {
  const raw = readFileSync(f.path, 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) { fail(f.path, 'missing frontmatter'); return null; }
  let data;
  try { data = YAML.parse(m[1]); } catch (e) { fail(f.path, `YAML: ${e.message}`); return null; }
  return { ...f, data, body: m[2] };
}).filter(Boolean);

const byId = new Map();
for (const r of records) {
  if (byId.has(r.data.resourceId)) fail(r.path, `duplicate resourceId ${r.data.resourceId} (also ${byId.get(r.data.resourceId).path})`);
  byId.set(r.data.resourceId, r);
}
const sourceIds = new Set(AP_SOURCES.map((s) => s.id));
const urlFor = (r) => `${AP_LIBRARY_BASE}${r.folder}/${r.name.replace(/\.md$/, '')}/`;
const knownUrls = new Set([AP_LIBRARY_BASE, ...AP_COURSES.map((c) => `${AP_LIBRARY_BASE}${c.slug}/`), ...records.map(urlFor)]);
const MARKS = /\bAP\b|Advanced Placement|College Board/;
// Allow for the owner's time zone (Asia/Karachi, UTC+5): a date is "future" only beyond tomorrow UTC.
const today = new Date(Date.now() + 24 * 3600 * 1000);

for (const r of records) {
  const d = r.data;
  const c = AP_COURSES.find((x) => x.slug === d.course);
  if (!c) { fail(r.path, `unknown course ${d.course}`); continue; }
  if (r.folder !== d.course) fail(r.path, `folder "${r.folder}" does not match course "${d.course}"`);
  const unit = c.units.find((u) => u.number === d.unit);
  if (!unit) fail(r.path, `unit ${d.unit} is not in ${c.officialName} (2026-27)`);
  for (const t of d.topics ?? []) {
    const topic = unit?.topics.find((x) => x.number === t);
    if (!topic) fail(r.path, `topic ${t} is not in unit ${d.unit} of ${c.officialName}`);
    if (topic?.bcOnly && d.course === 'calculus-bc' && d.calculusScope !== 'bc-only') fail(r.path, `topic ${t} is BC only: set calculusScope: bc-only`);
  }
  if (c.family === 'maths' && d.course !== 'statistics' && !d.calculusScope) fail(r.path, 'calculus resources must set calculusScope');
  if (d.course === 'calculus-ab' && d.calculusScope === 'bc-only') fail(r.path, 'a Calculus AB resource cannot be BC only');
  for (const key of ['related', 'prerequisiteResources']) for (const id of d[key] ?? []) if (!byId.has(id)) fail(r.path, `${key}: unknown resourceId ${id}`);
  if (d.next && !byId.has(d.next)) fail(r.path, `next: unknown resourceId ${d.next}`);
  if (d.related?.includes(d.resourceId)) fail(r.path, 'related lists itself');
  for (const s of d.sources ?? []) if (!sourceIds.has(s)) fail(r.path, `unknown source ${s}`);
  for (const s of d.skills ?? []) if (!c.practices.some((p) => p.number === s)) fail(r.path, `skill ${s} is not a ${c.officialName} practice`);
  if (!/^mb-ap-[a-z0-9.-]+$/.test(d.resourceId ?? '')) fail(r.path, 'resourceId must look like mb-ap-<course>-<topic>-<type>');

  // Review honesty: names and dates only with a real review.
  const reviewedState = ['reviewed', 'published'].includes(d.editorialStatus);
  if (reviewedState && (!d.reviewer || !d.reviewedDate)) fail(r.path, `${d.editorialStatus} requires reviewer and reviewedDate as actually supplied`);
  if (!reviewedState && (d.reviewer || d.reviewedDate)) fail(r.path, 'reviewer/reviewedDate set but editorialStatus is not reviewed/published');
  if (/reviewed by|checked by an? (AP )?teacher|teacher-reviewed/i.test(r.body)) fail(r.path, 'body must not claim a teacher review');

  // D-390 -- "Checked by" line: a real author profile, a sane date, never on a reviewed page.
  if (d.checkedBy || d.checkedDate) {
    if (!d.checkedBy || !d.checkedDate) fail(r.path, 'checkedBy and checkedDate go together');
    else if (!existsSync(`src/content/authors/${d.checkedBy}.md`)) fail(r.path, `checkedBy: no author profile ${d.checkedBy}`);
    const cd = new Date(d.checkedDate);
    if (cd < new Date(d.publishedDate) || cd > today) fail(r.path, 'checkedDate before publication or in the future');
  }

  // Metadata wording (College Board guidelines: no marks in meta tags).
  if (!AP_MARK_IN_METADATA) for (const k of ['title', 'description']) if (MARKS.test(d[k] ?? '')) fail(r.path, `${k} uses a College Board mark while AP_MARK_IN_METADATA is false`);

  // Dates.
  const pub = new Date(d.publishedDate); const upd = new Date(d.updatedDate);
  if (upd < pub) fail(r.path, 'updatedDate is before publishedDate');
  if (upd > today) fail(r.path, 'updatedDate is in the future');

  // Internal library links resolve.
  for (const m of r.body.matchAll(/\]\((\/advanced-course-resources\/[^)#\s]*)(#[^)]*)?\)/g)) {
    if (!knownUrls.has(m[1])) fail(r.path, `broken library link ${m[1]}`);
  }

  // Substance by type.
  const words = r.body.split(/\s+/).filter(Boolean).length;
  if (d.resourceType === 'study-guide') {
    if (words < 700) fail(r.path, `study guide is only ${words} words`);
    if ((r.body.match(/^##+ Worked example/gim) ?? []).length < 2) fail(r.path, 'study guide needs at least two worked examples');
    if (!/misconception/i.test(r.body)) fail(r.path, 'study guide needs a common-misconceptions section');
  }
  if (d.resourceType === 'practice-questions') {
    const qs = r.body.split(/^## Question /m).slice(1);
    if (qs.length < 6) fail(r.path, `practice set has ${qs.length} questions (minimum 6)`);
    if (!/original Marlbridge practice/i.test(r.body)) fail(r.path, 'practice set must say it is original Marlbridge practice');
    qs.forEach((q, i) => {
      if (!/<details>/.test(q)) fail(r.path, `question ${i + 1} has no answer block`);
      if (/multiple choice/i.test(q.split('\n')[0])) {
        const ans = q.match(/\*\*Answer: \(([A-E])\)/);
        if (!ans) fail(r.path, `MCQ ${i + 1} has no "**Answer: (X)" line`);
        else if (!new RegExp(`^- \\(${ans[1]}\\)`, 'm').test(q)) fail(r.path, `MCQ ${i + 1} answer (${ans[1]}) is not one of its options`);
        const opts = q.match(/^- \([A-E]\)/gm) ?? [];
        if (opts.length < 4) fail(r.path, `MCQ ${i + 1} has ${opts.length} options`);
      }
    });
  }
  if (d.resourceType === 'topic-checklist') {
    const n = (r.body.match(/I can /g) ?? []).length;
    if (n < 6) fail(r.path, `checklist has ${n} "I can" statements (minimum 6)`);
  }
  if (d.resourceType === 'revision-notes' && !/\]\(\/advanced-course-resources\/[^)]*study-guide\/\)/.test(r.body)) fail(r.path, 'revision notes must link back to the full study guide');
}

const perCourse = Object.fromEntries(AP_COURSES.map((c) => [c.slug, records.filter((r) => r.data.course === c.slug).length]));
if (problems) {
  console.error(`\nAP library: ${problems} problem(s) in ${records.length} resource(s).`);
  process.exit(1);
}
console.log(`  ✓ AP library: ${records.length} resource(s) valid against the 2026-27 framework map. ${JSON.stringify(perCourse)}`);
