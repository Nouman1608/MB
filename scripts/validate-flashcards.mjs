#!/usr/bin/env node
/**
 * D-444 -- build-failing checks for the flashcard decks (src/data/flashcards/).
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
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { SYLLABUS_VERSIONS } from '../src/data/academic/syllabus-topics.ts';
import { render as renderIndex } from './generate-flashcard-index.mjs';
import { subjectCovered } from '../src/utils/content/subject-match.mjs';

/**
 * `--file <deck.ts>` validates just that deck file (it need not be registered
 * yet) -- the mode used while a deck is being written. Without it, every
 * registered deck is checked and the registry must be up to date.
 */
const fileArg = process.argv.indexOf('--file');
let FLASHCARD_DECKS;
const preProblems = [];
if (fileArg !== -1) {
  const mod = await import(pathToFileURL(resolve(process.argv[fileArg + 1])).href);
  FLASHCARD_DECKS = Object.entries(mod).filter(([k]) => k.startsWith('DECK_')).map(([, v]) => v);
  if (FLASHCARD_DECKS.length !== 1) preProblems.push(`${process.argv[fileArg + 1]}: must export exactly one DECK_ constant`);
} else {
  FLASHCARD_DECKS = (await import('../src/data/flashcards/index.ts')).FLASHCARD_DECKS;
  const onDisk = existsSync('src/data/flashcards/decks.generated.ts') ? readFileSync('src/data/flashcards/decks.generated.ts', 'utf8') : '';
  if (onDisk !== renderIndex()) preProblems.push('src/data/flashcards/decks.generated.ts is out of date — run: npm run generate:flashcards');
}
const TIER_SCHEMES = ['core-extended', 'core-extension', 'foundation-higher', 'sl-hl', 'standard-extended'];

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

const problems = [...preProblems];
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

  if (deck.tierScheme !== undefined) {
    if (!TIER_SCHEMES.includes(deck.tierScheme)) problems.push(`${at}: unknown tierScheme '${deck.tierScheme}'`);
    if (!version.tiered) problems.push(`${at}: tierScheme set, but the syllabus record is not tiered`);
  }
  if (!existsSync(`src/content/authors/${deck.author}.md`)) problems.push(`${at}: author '${deck.author}' has no profile in src/content/authors/`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(deck.updated) || deck.updated > today) problems.push(`${at}: updated '${deck.updated}' must be an ISO date that is not in the future`);
  if (deck.deckReview) {
    const fm = frontmatter(`src/content/authors/${deck.deckReview.reviewerSlug}.md`);
    if (fm === null) problems.push(`${at}: deckReview names '${deck.deckReview.reviewerSlug}', who has no author profile`);
    else if (!/^isReviewer:\s*true\s*$/m.test(fm)) problems.push(`${at}: deckReview names '${deck.deckReview.reviewerSlug}', who is not marked isReviewer: true`);
    else {
      // Same accountability rule as resource pages (validate-review-integrity [9], [10]):
      // the named teacher's profile must cover the deck's board and subject.
      const list = (k) => JSON.parse(fm.match(new RegExp(`^${k}:\\s*(\\[.*\\])`, 'm'))?.[1] ?? '[]');
      const boards = list('boardsTaught');
      const subjects = [...list('subjectsTaught'), ...list('subjectsReviewed')];
      if (!boards.includes(deck.boardSlug)) problems.push(`${at}: deckReview names '${deck.deckReview.reviewerSlug}', whose profile does not list the board '${deck.boardSlug}'`);
      const subj = deck.subjectSlug.startsWith('mathematics') ? 'mathematics' : deck.subjectSlug;
      if (!subjectCovered(subjects, subj)) problems.push(`${at}: deckReview names '${deck.deckReview.reviewerSlug}', whose profile subjects (${subjects.join('; ')}) do not cover '${deck.subjectSlug}'`);
    }
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

    if (card.tier !== undefined) {
      if (card.tier !== 'upper') problems.push(`${c}: tier must be 'upper' or absent`);
      else if (!deck.tierScheme) problems.push(`${c}: tier 'upper' needs the deck to set tierScheme`);
      else if (deck.tierScheme === 'core-extended' && sub?.tier === 'core') problems.push(`${c}: tier 'upper' (Extended) on subtopic ${sub.number}, whose outcomes are all Core`);
    }

    if (card.origin === 'revision-notes') {
      if (!card.source) problems.push(`${c}: origin 'revision-notes' needs a source resource`);
      else {
        const r = resourceInfo(card.source);
        if (!r) problems.push(`${c}: source '${card.source}' is not a resource`);
        else {
          if (r.type !== 'revision-notes') problems.push(`${c}: source '${card.source}' is ${r.type}, not revision-notes`);
          // A dual code such as '9625 / 9725' matches a page tagged with either part.
          const deckCodes = deck.syllabusCode.split(/\s*\/\s*/);
          if (!r.codes.some((x) => deckCodes.includes(x))) problems.push(`${c}: source '${card.source}' is not written for ${deck.syllabusCode}`);
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
