// Run from the repository root: node --experimental-strip-types reports/audit3/A5-thin-courses.mjs > thin.json
// Item 41: courses with fewer than 40 resources, and their topics with no resource.
// Same loader as scripts/validate-course-consistency.mjs (front matter, drafts left out, as getResources()),
// same listing as the course page (courseTopics()).
import { closeSync, openSync, readdirSync, readSync } from 'node:fs';
import yaml from 'js-yaml';
import { courseTopics } from '../../src/utils/academic/course-topics.ts';
import { resourcesForCombination } from '../../src/utils/academic/combination-resources.ts';
import { activeOnly } from '../../src/utils/academic/index.ts';
import { topicsFor } from '../../src/data/academic/syllabus-topics.ts';
const DIR = 'src/content/resources';
function frontMatter(path) {
  const fd = openSync(path, 'r');
  try { const buf = Buffer.alloc(16384); let text = '';
    for (;;) { const n = readSync(fd, buf, 0, buf.length, null); if (n === 0) break; text += buf.toString('utf8', 0, n);
      const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/); if (m) return m[1]; } return null;
  } finally { closeSync(fd); }
}
const res = [];
let drafts = 0, files = 0;
for (const f of readdirSync(DIR)) {
  if (!f.endsWith('.md')) continue; files++;
  const fm = frontMatter(`${DIR}/${f}`); if (!fm) continue;
  const d = yaml.load(fm) ?? {};
  if (d.reviewStatus === 'draft') { drafts++; continue; }
  res.push({ id: f.slice(0, -3), data: { title: d.title ?? f, description: d.description ?? '', resourceType: d.resourceType,
    subject: { id: d.subject }, level: d.level ?? [], boards: d.boards ?? [], qualifications: d.qualifications ?? [],
    syllabusCodes: d.syllabusCodes ?? [], syllabusTopics: d.syllabusTopics ?? [], reviewStatus: d.reviewStatus ?? 'review-pending' } });
}
const active = activeOnly();
const rows = active.map((c) => {
  const t = courseTopics(c, res);
  const rec = topicsFor(c.boardSlug, c.qualificationSlug, c.subjectSlug);
  return { course: `${c.boardSlug}/${c.qualificationSlug}/${c.subjectSlug}`, label: `${c.board} ${c.qualification} ${c.subject}`,
    total: t.total, topics: t.topics.length, hasRecord: !!rec, wholeCourse: t.wholeCourseCount,
    empty: t.topics.filter((x) => x.count === 0).map((x) => x.topic.name),
    perTopic: t.topics.map((x) => ({ n: x.topic.number, name: x.topic.name, count: x.count,
      learn: x.groups.learn.length, review: x.groups.review.length, practice: x.groups.practice.length,
      subtopics: x.topic.subtopics.length,
      emptySubs: x.topic.subtopics.filter((s) => !resourcesForCombination(c, res).some((r) => r.data.syllabusTopics.some((m) => m.qualification === c.qualificationSlug && m.topic === x.topic.slug && m.subtopic === s.slug))).map((s) => `${s.number} ${s.name}`) })) };
});
const thin = rows.filter((r) => r.total < 40).sort((a, b) => a.total - b.total || a.course.localeCompare(b.course));
console.log(JSON.stringify({ files, drafts, published: res.length, activeCourses: active.length, thinCount: thin.length, thin }, null, 1));
