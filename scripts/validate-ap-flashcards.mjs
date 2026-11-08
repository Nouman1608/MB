#!/usr/bin/env node
/**
 * Build-failing checks for the advanced-course (AP) flashcard decks
 * (src/data/ap-flashcards/<course-slug>.ts). Enforces every rule written in
 * src/data/ap-flashcards/types.ts:
 *   - the deck file is <course>.ts, exports one AP_DECK_<SLUG_UPPER>, and its
 *     `course` is a slug in AP_COURSES (src/data/ap/frameworks.ts);
 *   - every card's `topic` is a topic number in that course's framework, and
 *     card ids are `<topic>-<n>`, unique in the deck;
 *   - every topic has at least one card -- except, for a deck that sets
 *     `inheritsFrom`, the topics shared with the parent course, whose cards
 *     come from the parent deck (and so must not be repeated here);
 *   - plain text only, front <= 180 and back <= 420 characters, and no
 *     College Board marks ("AP", "Advanced Placement", "College Board");
 *   - origin 'resource' cards name an existing, non-planned library resource
 *     by `resourceId` whose `topics` include the card's topic.
 *
 * `--file <deck.ts>` validates just that file (it need not be registered or
 * live in src/data/ap-flashcards/ yet) -- the mode used while writing a deck.
 * Without it, every deck file is checked and decks.generated.ts must be up to
 * date. No deck files at all is valid (empty registry).
 *   npm run validate:ap-flashcards
 *   node --experimental-strip-types scripts/validate-ap-flashcards.mjs --file src/data/ap-flashcards/chemistry.ts
 */
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { resolve, basename, join } from 'node:path';
import { pathToFileURL } from 'node:url';
import YAML from 'yaml';
import { AP_COURSES, apTopicNumbers } from '../src/data/ap/frameworks.ts';
import { DIR, deckModules, expectedExport, render as renderIndex } from './generate-ap-flashcard-index.mjs';

const FRONT_MAX = 180;
const BACK_MAX = 420;
const AUTHOR = 'marlbridge-academic-team';
const CARD_KEYS = new Set(['id', 'topic', 'front', 'back', 'origin', 'source']);
const DECK_KEYS = new Set(['course', 'author', 'updated', 'inheritsFrom', 'cards']);
// Allow for the owner's time zone (Asia/Karachi, UTC+5), as validate-ap-library does.
const tomorrow = new Date(Date.now() + 24 * 3600 * 1000).toISOString().slice(0, 10);

const problems = [];
const notes = [];

// ---- Library resources by resourceId (for origin 'resource' cards) ----
const RES_ROOT = 'src/content/ap-resources';
const resources = new Map();
if (existsSync(RES_ROOT)) {
  for (const dir of readdirSync(RES_ROOT)) {
    const p = join(RES_ROOT, dir);
    if (!statSync(p).isDirectory()) continue;
    for (const f of readdirSync(p).filter((x) => x.endsWith('.md'))) {
      const fm = readFileSync(join(p, f), 'utf8').replace(/\r\n/g, '\n').match(/^---\n([\s\S]*?)\n---/)?.[1];
      if (!fm) continue;
      let d;
      try { d = YAML.parse(fm); } catch { continue; } // validate-ap-library reports bad YAML
      if (d?.resourceId) resources.set(d.resourceId, { course: d.course, topics: d.topics ?? [], calculusScope: d.calculusScope, status: d.editorialStatus, path: join(p, f) });
    }
  }
}

// ---- Load the decks to check ----
/** { file, deck } for every deck under check. */
const targets = [];
const fileArg = process.argv.indexOf('--file');

async function load(path, label) {
  let mod;
  try { mod = await import(pathToFileURL(resolve(path)).href); } catch (e) { problems.push(`${label}: does not load (${e.message})`); return; }
  const names = Object.keys(mod).filter((k) => k.startsWith('AP_DECK_'));
  const expected = expectedExport(basename(path));
  if (names.length !== 1 || names[0] !== expected) { problems.push(`${label}: must export exactly one constant named ${expected} (found ${names.join(', ') || 'none'})`); if (!names.length) return; }
  targets.push({ file: label, slug: basename(path).replace(/\.ts$/, ''), deck: mod[names[0]] });
}

if (fileArg !== -1) {
  const path = process.argv[fileArg + 1];
  if (!path || !existsSync(path)) { console.error(`validate-ap-flashcards: --file needs an existing deck file (got ${path ?? 'nothing'})`); process.exit(1); }
  await load(path, path);
} else {
  const mods = deckModules();
  for (const m of mods) await load(`${DIR}/${m.file}`, `${DIR}/${m.file}`);
  const onDisk = existsSync(`${DIR}/decks.generated.ts`) ? readFileSync(`${DIR}/decks.generated.ts`, 'utf8') : '';
  if (onDisk !== renderIndex()) problems.push(`${DIR}/decks.generated.ts is out of date — run: npm run generate:ap-flashcards`);
  else {
    // The registry the pages read must load and agree with the files.
    const { AP_FLASHCARD_DECKS } = await import('../src/data/ap-flashcards/index.ts');
    if (AP_FLASHCARD_DECKS.length !== targets.length) problems.push(`${DIR}/index.ts: registry has ${AP_FLASHCARD_DECKS.length} deck(s), files have ${targets.length}`);
  }
}

// Registered decks, used to resolve a parent in --file mode.
let registered = [];
try { registered = (await import('../src/data/ap-flashcards/index.ts')).AP_FLASHCARD_DECKS; } catch { /* reported above in registry mode */ }

// ---- Text rules ----
// "AP" is matched case-sensitively (a lowercase "ap" is not the mark); the long marks in any case.
const hasMark = (v) => /\bAP\b/.test(v) || /Advanced\s+Placement|College\s+Board/i.test(v);
function textProblems(field, value, max) {
  const out = [];
  if (typeof value !== 'string' || !value.trim()) return [`empty ${field}`];
  if (value !== value.trim()) out.push(`${field} has leading or trailing whitespace`);
  if (value.length > max) out.push(`${field} is ${value.length} characters (max ${max}) — split the card`);
  if (/<[a-z/!]/i.test(value)) out.push(`${field} contains markup; card text is plain text`);
  if (/\*\*|__|`|\[[^\]]+\]\(|^#{1,6}\s/m.test(value)) out.push(`${field} contains Markdown; card text is plain text`);
  if (/\\[a-zA-Z]+|\^\{|_\{/.test(value)) out.push(`${field} contains LaTeX; use Unicode symbols`);
  if (/&(#\d+|#x[0-9a-f]+|[a-z]+);/i.test(value)) out.push(`${field} contains an HTML entity; type the character itself`);
  if (hasMark(value)) out.push(`${field} uses a College Board mark ("AP", "Advanced Placement", "College Board"); name the course neutrally`);
  return out;
}

const seenCourses = new Map();
for (const { file, slug, deck } of targets) {
  const at = `${file}`;
  if (!deck || typeof deck !== 'object') { problems.push(`${at}: export is not a deck object`); continue; }
  for (const k of Object.keys(deck)) if (!DECK_KEYS.has(k)) problems.push(`${at}: unknown deck field '${k}'`);
  const course = AP_COURSES.find((c) => c.slug === deck.course);
  if (!course) { problems.push(`${at}: course '${deck.course}' is not a slug in AP_COURSES`); continue; }
  if (slug !== deck.course) problems.push(`${at}: file must be named ${deck.course}.ts for course '${deck.course}'`);
  if (seenCourses.has(deck.course)) problems.push(`${at}: second deck for '${deck.course}' (also ${seenCourses.get(deck.course)})`);
  seenCourses.set(deck.course, file);
  if (deck.author !== AUTHOR) problems.push(`${at}: author must be '${AUTHOR}'`);
  else if (!existsSync(`src/content/authors/${AUTHOR}.md`)) problems.push(`${at}: author '${AUTHOR}' has no profile in src/content/authors/`);
  if (typeof deck.updated !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(deck.updated) || Number.isNaN(Date.parse(deck.updated)) || deck.updated > tomorrow) problems.push(`${at}: updated '${deck.updated}' must be an ISO date that is not in the future`);
  if (!Array.isArray(deck.cards)) { problems.push(`${at}: cards must be an array`); continue; }

  const topics = apTopicNumbers(course);
  const topicSet = new Set(topics);

  // Inheritance.
  let inherited = new Set();
  if (deck.inheritsFrom !== undefined) {
    const parent = AP_COURSES.find((c) => c.slug === deck.inheritsFrom);
    if (!parent) problems.push(`${at}: inheritsFrom '${deck.inheritsFrom}' is not a slug in AP_COURSES`);
    else if (parent.slug === course.slug) problems.push(`${at}: a deck cannot inherit from itself`);
    else {
      const childTitles = new Map(course.units.flatMap((u) => u.topics).map((t) => [t.number, t.title]));
      const shared = parent.units.flatMap((u) => u.topics).filter((t) => childTitles.has(t.number));
      for (const t of shared) if (childTitles.get(t.number) !== t.title) problems.push(`${at}: inherited topic ${t.number} is '${t.title}' in ${parent.slug} but '${childTitles.get(t.number)}' in ${course.slug} — inheritance would show the wrong cards`);
      if (!shared.length) problems.push(`${at}: inheritsFrom '${parent.slug}' shares no topic numbers with ${course.slug}`);
      inherited = new Set(shared.map((t) => t.number));
      const parentDeck = registered.find((d) => d.course === parent.slug);
      if (parentDeck?.inheritsFrom) problems.push(`${at}: parent deck '${parent.slug}' itself inherits; chains are not supported`);
      if (!parentDeck) notes.push(`${at}: parent deck '${parent.slug}' is not registered yet, so the ${inherited.size} shared topics show no cards until it is`);
    }
  }

  const ids = new Set();
  const fronts = new Map();
  const perTopic = new Map();
  for (const [i, card] of deck.cards.entries()) {
    const c = `${at} card ${card?.id ?? `#${i + 1}`}`;
    if (!card || typeof card !== 'object') { problems.push(`${c}: not an object`); continue; }
    for (const k of Object.keys(card)) if (!CARD_KEYS.has(k)) problems.push(`${c}: unknown field '${k}'`);
    if (ids.has(card.id)) problems.push(`${c}: duplicate id`);
    ids.add(card.id);
    if (!topicSet.has(card.topic)) { problems.push(`${c}: topic '${card.topic}' is not a topic number in the ${course.slug} framework`); continue; }
    if (inherited.has(card.topic)) problems.push(`${c}: topic ${card.topic} is inherited from ${deck.inheritsFrom}; its cards belong in that deck`);
    const m = typeof card.id === 'string' ? card.id.match(/^(\d+\.\d+)-([1-9]\d*)$/) : null;
    if (!m || m[1] !== card.topic) problems.push(`${c}: id must be '${card.topic}-<n>' (n = 1, 2, …)`);
    perTopic.set(card.topic, (perTopic.get(card.topic) ?? 0) + 1);

    for (const p of [...textProblems('front', card.front, FRONT_MAX), ...textProblems('back', card.back, BACK_MAX)]) problems.push(`${c}: ${p}`);
    if (typeof card.front === 'string') {
      const f = card.front.toLowerCase().replace(/\s+/g, ' ').trim();
      if (fronts.has(f)) problems.push(`${c}: same front as card ${fronts.get(f)}`);
      else fronts.set(f, card.id);
    }

    if (card.origin === 'resource') {
      if (!card.source) problems.push(`${c}: origin 'resource' needs a source (the resource's resourceId)`);
      else {
        const r = resources.get(card.source);
        const calculusPair = r && course.slug.startsWith('calculus-') && String(r.course).startsWith('calculus-') && r.calculusScope === 'ab-and-bc';
        if (!r) problems.push(`${c}: source '${card.source}' is not the resourceId of any file in ${RES_ROOT}`);
        else if (r.status === 'planned') problems.push(`${c}: source '${card.source}' is planned, not published`);
        else if (r.course !== course.slug && !calculusPair) problems.push(`${c}: source '${card.source}' is a ${r.course} resource, not ${course.slug}`);
        else if (!r.topics.includes(card.topic)) problems.push(`${c}: source '${card.source}' covers topic(s) ${r.topics.join(', ') || 'none'}, not ${card.topic}`);
      }
    } else if (card.origin === 'authored') {
      if (card.source !== undefined) problems.push(`${c}: an authored card must not name a source (use origin 'resource')`);
    } else problems.push(`${c}: origin must be 'authored' or 'resource'`);
  }

  const required = topics.filter((t) => !inherited.has(t));
  const missing = required.filter((t) => !perTopic.has(t));
  if (missing.length) problems.push(`${at}: ${missing.length} topic(s) with no card: ${missing.join(', ')}`);
  notes.push(`${at}: ${deck.cards.length} cards on ${perTopic.size} of ${required.length} topic(s)${inherited.size ? ` (+${inherited.size} inherited from ${deck.inheritsFrom})` : ''}`);
}

if (!targets.length && fileArg === -1) notes.push('validate-ap-flashcards: no advanced-course decks yet (empty registry)');
for (const n of notes) console.log(n);
if (problems.length) {
  console.error(`\nvalidate-ap-flashcards: ${problems.length} problem(s)`);
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}
console.log('validate-ap-flashcards: OK');
