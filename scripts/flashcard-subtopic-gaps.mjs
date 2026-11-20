#!/usr/bin/env node
/**
 * Lists the topics and subtopics of every current syllabus record that has a
 * flashcard deck but no card for them (a topic with subtopics is listed per
 * subtopic; a topic without subtopics is listed once).
 *
 *   node --experimental-strip-types scripts/flashcard-subtopic-gaps.mjs [--json out.json]
 *
 * Reporting tool only.
 */
import { writeFile } from 'node:fs/promises';
import { SYLLABUS_VERSIONS } from '../src/data/academic/syllabus-topics.ts';
import { FLASHCARD_DECKS } from '../src/data/flashcards/index.ts';

const gaps = [];
for (const d of FLASHCARD_DECKS) {
  const v = SYLLABUS_VERSIONS.find((x) => x.status === 'current' && x.boardSlug === d.boardSlug && x.qualificationSlug === d.qualificationSlug && x.subjectSlug === d.subjectSlug && x.syllabusCode === d.syllabusCode);
  if (!v) continue;
  const have = new Set(d.cards.map((c) => `${c.topic}/${c.subtopic ?? ''}`));
  for (const t of v.topics) {
    const items = t.subtopics.length ? t.subtopics.map((s) => ({ s, scope: `${t.slug}/${s.slug}` })) : [{ s: null, scope: `${t.slug}/` }];
    for (const { s, scope } of items) {
      if (have.has(scope)) continue;
      gaps.push({ board: d.boardSlug, qualification: d.qualificationSlug, subject: d.subjectSlug, code: d.syllabusCode, deckFile: `${d.boardSlug}-${d.qualificationSlug}-${d.subjectSlug}`, topic: t.slug, topicNumber: t.number, topicName: t.name, subtopic: s?.slug ?? null, number: s?.number ?? String(t.number), name: s?.name ?? t.name, cards: d.cards.length });
    }
  }
}
const by = new Map();
for (const g of gaps) by.set(g.code, (by.get(g.code) ?? 0) + 1);
console.log(`${gaps.length} topic or subtopic scope(s) in ${by.size} deck(s) have no flashcard.`);
for (const [k, n] of [...by.entries()].sort((a, b) => b[1] - a[1])) console.log(`  ${String(n).padStart(4)}  ${k}`);
const i = process.argv.indexOf('--json');
if (i > 0) await writeFile(process.argv[i + 1], JSON.stringify(gaps, null, 1));
