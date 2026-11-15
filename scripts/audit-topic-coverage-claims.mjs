#!/usr/bin/env node
/**
 * D-448 (findings A and E, 15 Nov 2026) -- computed audit of topic-coverage
 * labels on resource pages, before and after the shared-logic fix in
 * src/utils/academic/syllabus-points.ts.
 *
 * BEFORE: every topic-level syllabusTopics entry (no subtopic) rendered as
 * "<topic> (whole topic)". AFTER: only an entry with an explicit, validated
 * `coverage` claim renders a completeness label; a parent beside its own
 * subtopics is membership only; a topic-level-only entry renders
 * "(topic-level mapping)".
 *
 * Classes of topic-level entry (resolved against the same syllabus record
 * the page uses, via versionFor()):
 *   CONTRADICTED   parent + a strict subset of its subtopics -- the record
 *                  itself shows the whole-topic label was false (confirmed);
 *   ALL_LISTED     parent + every subtopic the record holds -- consistent at
 *                  mapping level, but not outcome-verified;
 *   TOPIC_ONLY_SUB topic-level only; the topic has subtopics in the record --
 *                  coverage not itemised (needs a human to say which);
 *   TOPIC_ONLY     topic-level only; the record has no subtopics for it.
 *
 * Writes docs/reports/academic-quality-2026-11-15/topic-coverage-audit.json
 * and .md. Deterministic; reads only the repository. With --check, fails if
 * any page would still render a completeness label without a claim.
 * Usage: node --experimental-strip-types scripts/audit-topic-coverage-claims.mjs [--check]
 */
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import YAML from 'yaml';
import { versionFor, syllabusPointsFor } from '../src/utils/academic/syllabus-points.ts';

const OUT = 'docs/reports/academic-quality-2026-11-15';
const classes = { CONTRADICTED: [], ALL_LISTED: [], TOPIC_ONLY_SUB: [], TOPIC_ONLY: [] };
let examined = 0, withMappings = 0, resolved = 0, beforePages = 0, afterUnsupported = 0, afterClaimed = 0;
const beforeFiles = new Set();

for (const dir of ['src/content/resources', 'src/content/articles']) {
  for (const f of readdirSync(dir).filter((x) => x.endsWith('.md')).sort()) {
    const d = YAML.parse(readFileSync(join(dir, f), 'utf8').split('---')[1] ?? '') ?? {};
    examined++;
    const st = d.syllabusTopics ?? [];
    if (!st.length) continue;
    withMappings++;
    let anyResolved = false;
    for (const board of d.boards ?? []) for (const q of [...new Set(st.map((x) => x.qualification))]) {
      const v = versionFor(board, q, d.subject, d.syllabusCodes, d.syllabusSeries);
      if (!v) continue;
      anyResolved = true;
      const mine = st.filter((x) => x.qualification === q);
      for (const tl of mine.filter((x) => !x.subtopic)) {
        const t = v.topics.find((x) => x.slug === tl.topic);
        if (!t) continue;
        const listed = new Set(mine.filter((x) => x.topic === tl.topic && x.subtopic).map((x) => x.subtopic));
        const row = { file: `${dir.split('/')[2]}/${f}`, code: v.syllabusCode, series: v.syllabusSeries, topic: `${t.number} ${t.name}`, listed: listed.size, recorded: t.subtopics.length, recordComplete: !!v.subtopicsComplete, coverage: tl.coverage ?? null };
        const k = listed.size ? (t.subtopics.every((s) => listed.has(s.slug)) ? 'ALL_LISTED' : 'CONTRADICTED') : (t.subtopics.length ? 'TOPIC_ONLY_SUB' : 'TOPIC_ONLY');
        classes[k].push(row);
        beforeFiles.add(row.file);
      }
    }
    if (anyResolved) resolved++;
    // AFTER: what the shared logic renders now.
    for (const g of syllabusPointsFor({ boards: d.boards ?? [], subject: d.subject, syllabusTopics: st, syllabusCodes: d.syllabusCodes, syllabusSeries: d.syllabusSeries })) {
      for (const p of g.points) {
        if (p.level === 'topic' && p.coverage) afterClaimed++;
        if (p.level === 'topic' && p.coverage && !st.some((m) => !m.subtopic && m.coverage === p.coverage)) afterUnsupported++;
      }
    }
  }
}
beforePages = beforeFiles.size;
const files = (a) => new Set(a.map((r) => r.file)).size;
const byCode = (a) => Object.entries(a.reduce((m, r) => ((m[r.code] = (m[r.code] ?? 0) + 1), m), {})).sort((x, y) => y[1] - x[1] || x[0].localeCompare(y[0]));
const totals = {
  resourcesAndArticlesExamined: examined,
  withSyllabusMappings: withMappings,
  resolvedToASyllabusRecord: resolved,
  pagesShowingWholeTopicBefore: beforePages,
  topicLevelEntriesBefore: Object.values(classes).reduce((s, a) => s + a.length, 0),
  confirmedOverclaims: { entries: classes.CONTRADICTED.length, pages: files(classes.CONTRADICTED) },
  consistentAtMappingLevel: { entries: classes.ALL_LISTED.length, pages: files(classes.ALL_LISTED) },
  needsClarification: { entries: classes.TOPIC_ONLY_SUB.length, pages: files(classes.TOPIC_ONLY_SUB) },
  topicIsFinestGrain: { entries: classes.TOPIC_ONLY.length, pages: files(classes.TOPIC_ONLY) },
  completenessLabelsAfterFix: afterClaimed,
  unsupportedCompletenessLabelsAfterFix: afterUnsupported,
};
if (process.argv.includes('--check')) {
  if (afterUnsupported) { console.error(`✗ ${afterUnsupported} completeness label(s) render without a coverage claim`); process.exit(1); }
  console.log(`✓ topic-coverage labels: 0 unsupported (${afterClaimed} claimed)`);
  process.exit(0);
}
mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'topic-coverage-audit.json'), JSON.stringify({ totals, classes }, null, 1) + '\n');
const sample = (a, n = 8) => a.slice(0, n).map((r) => `| \`${r.file}\` | ${r.code} | ${r.topic} | ${r.listed} of ${r.recorded}${r.recordComplete ? '' : ' (record not marked complete)'} |`).join('\n');
const md = `# Topic-coverage label audit (findings A and E)

Generated by \`node --experimental-strip-types scripts/audit-topic-coverage-claims.mjs\`. All counts are computed from the repository; the full row list is in [\`topic-coverage-audit.json\`](topic-coverage-audit.json).

## Totals

| Measure | Count |
| --- | --- |
| Resources and articles examined | ${totals.resourcesAndArticlesExamined} |
| With a syllabus mapping | ${totals.withSyllabusMappings} |
| Mapping resolves to a syllabus record (so a points list renders) | ${totals.resolvedToASyllabusRecord} |
| Pages that showed "(whole topic)" before the fix | ${totals.pagesShowingWholeTopicBefore} |
| Topic-level entries that rendered "(whole topic)" before the fix | ${totals.topicLevelEntriesBefore} |
| **Confirmed overclaims**: parent shown as whole topic beside only some of its own subtopics | ${totals.confirmedOverclaims.entries} entries on ${totals.confirmedOverclaims.pages} pages |
| Consistent at mapping level: every recorded subtopic also listed (not outcome-verified) | ${totals.consistentAtMappingLevel.entries} entries on ${totals.consistentAtMappingLevel.pages} pages |
| **Needs clarification**: topic-level only, topic has subtopics; which ones the page covers is not recorded | ${totals.needsClarification.entries} entries on ${totals.needsClarification.pages} pages |
| Topic-level only; the record has no subtopics for that topic | ${totals.topicIsFinestGrain.entries} entries on ${totals.topicIsFinestGrain.pages} pages |
| Completeness labels rendered after the fix (explicit claims) | ${totals.completenessLabelsAfterFix} |
| Unsupported completeness labels after the fix | ${totals.unsupportedCompletenessLabelsAfterFix} |

**Corrected.** All ${totals.topicLevelEntriesBefore} entries are corrected by one change to shared logic: none of them carries a coverage claim, so none renders "(whole topic)" now. No resource file was edited to achieve this, and every topic relationship is kept (the hub coverage, next-steps and course-topic code match on \`topic\`, which subtopic entries already carry).

**Not corrected by code, needs a person.** The ${totals.needsClarification.entries} "needs clarification" entries now render "(topic-level mapping)", which is honest but imprecise. Making them precise means a subject teacher reading each page and listing the subtopics it teaches. A page that truly covers a whole topic can then carry \`coverage: "whole-topic"\`, which the validator accepts only where the syllabus record's subtopic list is complete.

## Confirmed overclaims by syllabus code

| Code | Entries |
| --- | --- |
${byCode(classes.CONTRADICTED).map(([c, n]) => `| ${c} | ${n} |`).join('\n')}

## Representative examples

Confirmed overclaims (finding A and E reference pages among them):

| File | Code | Parent topic | Subtopics listed |
| --- | --- | --- | --- |
${sample(classes.CONTRADICTED.filter((r) => /0620-elements-atomic|0580-introduction-to-algebra|4ma1-use-of-symbols|4bs1|business-communication-recruitment/.test(r.file)).concat(classes.CONTRADICTED.slice(0, 4)))}

Needs clarification:

| File | Code | Topic | Subtopics listed |
| --- | --- | --- | --- |
${sample(classes.TOPIC_ONLY_SUB)}
`;
writeFileSync(join(OUT, 'topic-coverage-audit.md'), md);
console.log(JSON.stringify(totals));
