#!/usr/bin/env node
/**
 * D-438 -- build-failing checks for the flashcard decks (src/data/flashcards/).
 *
 * A deck is published study content, so it is held to the same bar as a
 * resource's syllabus mapping: every card must sit on a real topic/subtopic of
 * the deck's CURRENT syllabus series, a Supplement tag must be possible for
 * that subtopic, and a card that claims to restate a revision-notes page must
 * name a page that exists and covers that subtopic. Card text is plain text
 * (rendered with textContent), so markup or Markdown in it is an error rather
 * than something that would silently show as raw characters.
 *
 * Subtopics with no card are reported but do not fail the build, so a deck
 * can be published topic by topic. Run: npm run validate:flashcards
 */
import { readFileSync, existsSync } from 'node:fs';
import { FLASHCARD_DECKS } from '../src/data/flashcards/index.ts';
import { SYLLABUS_VERSIONS } from '../src/data/academic/syllabus-topics.ts';

const FRONT_MAX = 180;
const BACK_MAX = 420;
const today = new Date().toISOString().slice(0, 10);

function frontmatter(file) {
  if (!existsSync(file)) return null;
  const text = readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  return text.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
}

function resourceInfo(id) {
  const fm = frontmatter(`src/content/resources/${id}.md`);
  if (fm === null) return null;
  const codes = (fm.match(/^syllabusCodes:\s*\[([^\]]*)\]/m)?.[1] ?? '').split(',').map((c) => c.trim().replace(/"/g, '')).filter(Boolean);
  const mappings = [...fm.matchAll(/-\s*qualification:\s*"([^"]+)"\s*\n\s*topic:\s*"([^"]+)"(?:\s*\n\s*subtopic:\s*"([^"]+)")?/g)]
    .map((m) => ({ qualification: m[1], topic: m[2], subtopic: m[3] }));
  return { type: fm.match(/^resourceType:\s*"([^"]+)"/m)?.[1], codes, mappings };
}

const problems = [];
const notes = [];
const seenDecks = new Set();

for (const deck of FLASHCARD_DECKS) {
  const key = `${deck.boardSlug}/${deck.qualificationSlug}/${deck.subjectSlug}`;
  const at = `flashcards ${deck.syllabusCode} (${key})`;
  if (seenDecks.has(key)) problems.push(`${at}: more than one deck for this course`);
  seenDecks.add(key);

  const version = SYLLABUS_VERSIONS.find((v) => v.status === 'current' && v.boardSlug === deck.boardSlug && v.qualificationSlug === deck.qualificationSlug && v.subjectSlug === deck.subjectSlug);
  if (!version) { problems.push(`${at}: no CURRENT syllabus version in syllabus-topics.ts for this course`); continue; }
  if (version.syllabusCode !== deck.syllabusCode) problems.push(`${at}: syllabusCode ${deck.syllabusCode} does not match the current version's ${version.syllabusCode}`);
  if (version.syllabusSeries !== deck.syllabusSeries) problems.push(`${at}: series '${deck.syllabusSeries}' is not the current series '${version.syllabusSeries}' — a deck must not silently span series`);

  if (!existsSync(`src/content/authors/${deck.author}.md`)) problems.push(`${at}: author '${deck.author}' has no profile in src/content/authors/`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(deck.updated) || deck.updated > today) problems.push(`${at}: updated '${deck.updated}' must be an ISO date that is not in the future`);
  if (deck.deckReview) {
    const fm = frontmatter(`src/content/authors/${deck.deckReview.reviewerSlug}.md`);
    if (fm === null) problems.push(`${at}: deckReview names '${deck.deckReview.reviewerSlug}', who has no author profile`);
    else if (!/^isReviewer:\s*true\s*$/m.test(fm)) problems.push(`${at}: deckReview names '${deck.deckReview.reviewerSlug}', who is not marked isReviewer: true`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(deck.deckReview.reviewedOn) || deck.deckReview.reviewedOn > today) problems.push(`${at}: deckReview.reviewedOn must be a real ISO date that is not in the future`);
  }

  const ids = new Set();
  const fronts = new Map();
  const perSubtopic = new Map();
  for (const card of deck.cards) {
    const c = `${at} card ${card.id}`;
    if (ids.has(card.id)) problems.push(`${c}: duplicate id`);
    ids.add(card.id);

    const topic = version.topics.find((t) => t.slug === card.topic);
    if (!topic) { problems.push(`${c}: topic '${card.topic}' is not in ${version.syllabusCode} ${version.syllabusSeries}`); continue; }
    let sub;
    if (topic.subtopics.length > 0) {
      if (!card.subtopic) { problems.push(`${c}: topic '${topic.slug}' has subtopics, so the card must name one`); continue; }
      sub = topic.subtopics.find((s) => s.slug === card.subtopic);
      if (!sub) { problems.push(`${c}: subtopic '${card.subtopic}' is not in topic '${topic.slug}'`); continue; }
      if (!new RegExp(`^${sub.number.replace(/\./g, '\\.')}-\\d+$`).test(card.id)) problems.push(`${c}: id must be '${sub.number}-<n>' for subtopic ${sub.number}`);
    } else {
      if (card.subtopic) problems.push(`${c}: topic '${topic.slug}' itemises no subtopics, so the card must not name one`);
      if (!new RegExp(`^${String(topic.number).replace(/\./g, '\\.')}-\\d+$`).test(card.id)) problems.push(`${c}: id must be '${topic.number}-<n>' for topic ${topic.number}`);
    }
    const scope = `${card.topic}/${card.subtopic ?? ''}`;
    perSubtopic.set(scope, (perSubtopic.get(scope) ?? 0) + 1);

    if (card.tier === 'supplement') {
      if (!version.tiered) problems.push(`${c}: tier 'supplement' on a syllabus that is not tiered`);
      else if (sub?.tier === 'core') problems.push(`${c}: tier 'supplement' on subtopic ${sub.number}, whose outcomes are all Core`);
    }

    if (card.origin === 'revision-notes') {
      if (!card.source) problems.push(`${c}: origin 'revision-notes' needs a source resource`);
      else {
        const r = resourceInfo(card.source);
        if (!r) problems.push(`${c}: source '${card.source}' is not a resource`);
        else {
          if (r.type !== 'revision-notes') problems.push(`${c}: source '${card.source}' is ${r.type}, not revision-notes`);
          if (!r.codes.includes(deck.syllabusCode)) problems.push(`${c}: source '${card.source}' is not written for ${deck.syllabusCode}`);
          const maps = r.mappings.some((m) => m.qualification === deck.qualificationSlug && m.topic === card.topic && (!card.subtopic || m.subtopic === card.subtopic));
          if (!maps) problems.push(`${c}: source '${card.source}' does not map to ${scope}`);
        }
      }
    } else if (card.origin === 'authored') {
      if (card.source) problems.push(`${c}: an authored card must not name a source (use origin 'revision-notes')`);
    } else {
      problems.push(`${c}: origin must be 'authored' or 'revision-notes'`);
    }

    for (const [field, value, max] of [['front', card.front, FRONT_MAX], ['back', card.back, BACK_MAX]]) {
      if (!value || !value.trim()) { problems.push(`${c}: empty ${field}`); continue; }
      if (value !== value.trim()) problems.push(`${c}: ${field} has leading or trailing whitespace`);
      if (value.length > max) problems.push(`${c}: ${field} is ${value.length} characters (max ${max}) — split the card`);
      if (/<[a-z/!]/i.test(value)) problems.push(`${c}: ${field} contains markup; card text is plain text`);
      if (/\*\*|`|\[[^\]]+\]\(/.test(value)) problems.push(`${c}: ${field} contains Markdown; card text is plain text`);
    }
    const f = card.front.toLowerCase().replace(/\s+/g, ' ').trim();
    if (fronts.has(f)) problems.push(`${c}: same front as card ${fronts.get(f)}`);
    else fronts.set(f, card.id);
  }

  const missing = version.topics.flatMap((t) => (t.subtopics.length ? t.subtopics.map((s) => ({ scope: `${t.slug}/${s.slug}`, label: `${s.number} ${s.name}` })) : [{ scope: `${t.slug}/`, label: `${t.number} ${t.name}` }]))
    .filter((x) => !perSubtopic.has(x.scope));
  notes.push(`${at}: ${deck.cards.length} cards, ${missing.length === 0 ? 'every subtopic covered' : `${missing.length} subtopic(s) with no card: ${missing.map((m) => m.label).join('; ')}`}`);
}

for (const n of notes) console.log(n);
if (problems.length) {
  console.error(`\nvalidate-flashcards: ${problems.length} problem(s)`);
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}
console.log('validate-flashcards: OK');
