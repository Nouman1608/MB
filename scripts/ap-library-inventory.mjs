#!/usr/bin/env node
/**
 * Generates the advanced-course (AP) library reports from the source of truth:
 *   docs/ap-library/manifest.json      every resource record (portable JSON manifest)
 *   docs/ap-library/inventory.md       coverage by course/unit/topic: planned / drafted / reviewed / published
 *   docs/ap-library/framework-map.md   the verified 2026-27 framework map for all 11 courses
 *   docs/ap-library/source-register.md the official source register
 * Run: node --experimental-strip-types scripts/ap-library-inventory.mjs
 */
import { readdirSync, readFileSync, writeFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import YAML from 'yaml';
import { AP_COURSES } from '../src/data/ap/frameworks.ts';
import { AP_SOURCES } from '../src/data/ap/sources.ts';
import { AP_LIBRARY_BASE, AP_LIBRARY_PUBLIC } from '../src/data/ap/config.ts';

const ROOT = 'src/content/ap-resources';
const OUT = 'docs/ap-library';
mkdirSync(OUT, { recursive: true });
const records = [];
for (const dir of readdirSync(ROOT)) {
  if (!statSync(join(ROOT, dir)).isDirectory()) continue;
  for (const f of readdirSync(join(ROOT, dir)).filter((x) => x.endsWith('.md')).sort()) {
    const raw = readFileSync(join(ROOT, dir, f), 'utf8');
    const [, fm, body] = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    const d = YAML.parse(fm);
    records.push({
      ...d,
      file: join(ROOT, dir, f),
      url: `${AP_LIBRARY_BASE}${dir}/${f.replace(/\.md$/, '')}/`,
      words: body.split(/\s+/).filter(Boolean).length,
      publishedDate: String(d.publishedDate).slice(0, 10),
      updatedDate: String(d.updatedDate).slice(0, 10),
    });
  }
}

const generated = new Date().toISOString();
writeFileSync(join(OUT, 'manifest.json'), JSON.stringify({
  generated, libraryPublic: AP_LIBRARY_PUBLIC, framework: { schoolYear: '2026-27', examSeries: 'May 2027' },
  resourceCount: records.length, resources: records.map(({ file, ...r }) => ({ ...r, sourceFile: file })),
}, null, 2) + '\n');

// Inventory: every official topic, with what exists for it.
const statusOf = (rs) => (rs.length === 0 ? 'planned' : rs.every((r) => r.editorialStatus === 'published') ? 'published' : rs.every((r) => ['reviewed', 'published'].includes(r.editorialStatus)) ? 'reviewed' : 'drafted');
let md = `# Advanced-course (AP) library -- resource inventory\n\nGenerated ${generated} by \`scripts/ap-library-inventory.mjs\`. Library public: **${AP_LIBRARY_PUBLIC ? 'yes' : 'no (preview only)'}**.\n\nStatus per topic: **planned** = no resource yet; **drafted** = written and checked by the Marlbridge Academic Team, awaiting AP-teacher review; **reviewed** = every resource reviewed by a named teacher; **published** = live. Shared Calculus AB/BC material (\`calculusScope: ab-and-bc\`) counts for both courses.\n\n`;
const totals = { planned: 0, drafted: 0, reviewed: 0, published: 0 };
let summary = '| Course | Units | Topics | Planned | Drafted | Reviewed | Published | Resources |\n|---|---|---|---|---|---|---|---|\n';
let detail = '';
for (const c of AP_COURSES) {
  const own = records.filter((r) => r.course === c.slug || (c.slug.startsWith('calculus') && r.course.startsWith('calculus') && r.calculusScope === 'ab-and-bc'));
  const counts = { planned: 0, drafted: 0, reviewed: 0, published: 0 };
  detail += `\n## ${c.officialName}\n\n| Topic | Title | Status | Resources |\n|---|---|---|---|\n`;
  for (const u of c.units) {
    for (const t of u.topics) {
      const rs = own.filter((r) => (r.topics ?? []).includes(t.number));
      const s = statusOf(rs);
      counts[s]++; totals[s]++;
      detail += `| ${t.number}${t.bcOnly && c.slug === 'calculus-bc' ? ' (BC)' : ''} | ${t.title} | ${s} | ${rs.map((r) => r.resourceType).join(', ') || '--'} |\n`;
    }
  }
  const nTopics = c.units.reduce((n, u) => n + u.topics.length, 0);
  summary += `| ${c.officialName} | ${c.units.length} | ${nTopics} | ${counts.planned} | ${counts.drafted} | ${counts.reviewed} | ${counts.published} | ${records.filter((r) => r.course === c.slug).length} |\n`;
}
md += `## Summary\n\n${summary}\nTotal topics: planned ${totals.planned}, drafted ${totals.drafted}, reviewed ${totals.reviewed}, published ${totals.published}. Resource records: ${records.length}.\n\nUnit diagnostics, mixed unit reviews and exam-skills guides: **none yet (planned for Phase 2)**.\n${detail}`;
writeFileSync(join(OUT, 'inventory.md'), md);

// Framework map.
let fm = `# Verified framework map -- 2026-27 school year, May 2027 exams\n\nGenerated ${generated} from \`src/data/ap/frameworks.ts\` (checked against the official College Board documents in source-register.md on ${AP_COURSES[0].checkedOn}). Unit and topic titles come from each Course and Exam Description's own bookmarks; weightings are the official multiple-choice ranges from each course page; exam formats are from each course's exam page and the 2026-27 clarifications.\n`;
for (const c of AP_COURSES) {
  fm += `\n## ${c.officialName}\n\n- **Exam:** ${c.examDate} (${c.examSeries}). ${c.examMode}\n`;
  for (const s of c.sections) fm += `- **${s.name}:** ${s.questions} questions, ${s.time}, ${s.weight}${s.detail ? `. ${s.detail.join('; ')}` : ''}\n`;
  fm += `- **Calculator:** ${c.calculator}\n- **Prerequisites (CED):** ${c.prerequisiteNote}\n${c.labRequirement ? `- **Laboratory:** ${c.labRequirement}\n` : ''}${c.may2027Change ? `- **Changes:** ${c.may2027Change}\n` : ''}- **Clarifications:** ${c.clarifications}\n- **Practices/skills:** ${c.practices.map((p) => `${p.number} ${p.name}`).join('; ')}\n\n| Unit | Title | MC weighting | Topics |\n|---|---|---|---|\n`;
  for (const u of c.units) fm += `| ${u.number}${u.bcOnly ? ' (BC only)' : ''} | ${u.title} | ${u.weighting} | ${u.topics.map((t) => `${t.number} ${t.title}${t.bcOnly && c.slug === 'calculus-bc' ? ' [BC]' : ''}`).join('; ')} |\n`;
}
writeFileSync(join(OUT, 'framework-map.md'), fm);

let sr = `# Official source register\n\nGenerated ${generated} from \`src/data/ap/sources.ts\`. Every official fact in the library traces to one of these. Re-check each before the next school year.\n\n| Id | Source | School year | Checked | Verifies |\n|---|---|---|---|---|\n`;
for (const s of AP_SOURCES) sr += `| \`${s.id}\` | [${s.title}](${s.url}) | ${s.schoolYear} | ${s.checkedOn} | ${s.verifies.replace(/\|/g, '/')} |\n`;
writeFileSync(join(OUT, 'source-register.md'), sr);
console.log(`AP inventory: ${records.length} resources; topics planned ${totals.planned}, drafted ${totals.drafted}, reviewed ${totals.reviewed}, published ${totals.published}.`);
