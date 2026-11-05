#!/usr/bin/env node
/**
 * D-438 -- find flashcard CANDIDATES in a course's published revision notes.
 *
 *   node scripts/flashcard-candidates.mjs <syllabusCode> [--json]
 *
 * An authoring aid, not a generator: it never writes a deck. It lists every
 * term/definition pair it can find in the course's revision-notes pages, in
 * the two shapes those pages use for them:
 *
 *   | **Term** | meaning | ...        (table row with a bold first cell)
 *   - **Term** — definition           (bullet; '—', '–', '-' or ':' separator)
 *
 * with the page, the section heading it sits under and the subtopics the page
 * maps to. A person then decides whether each one makes a good card, which
 * single subtopic it belongs to (most pages map to several), and copies it
 * into src/data/flashcards/<code>.ts with origin 'revision-notes' and
 * `source` set to the page. About a quarter of revision-notes pages contain
 * these patterns at all (count taken 5 Nov 2026), which is why most cards are
 * authored -- see src/data/flashcards/types.ts.
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const code = process.argv[2];
const asJson = process.argv.includes('--json');
if (!code) {
  console.error('Usage: node scripts/flashcard-candidates.mjs <syllabusCode> [--json]');
  process.exit(1);
}

const DIR = 'src/content/resources';
const plain = (s) => s
  .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
  .replace(/\*\*|__|`/g, '')
  .replace(/(^|\s)\*([^*]+)\*/g, '$1$2')
  .replace(/<[^>]+>/g, '')
  .replace(/\s+/g, ' ')
  .trim();

const out = [];
for (const file of readdirSync(DIR).filter((f) => f.endsWith('.md')).sort()) {
  const text = readFileSync(join(DIR, file), 'utf8').replace(/\r\n/g, '\n');
  const [, fm = '', body = ''] = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/) ?? [];
  if (!/^resourceType:\s*"revision-notes"/m.test(fm)) continue;
  const codes = fm.match(/^syllabusCodes:\s*\[([^\]]*)\]/m)?.[1] ?? '';
  if (!codes.split(',').map((c) => c.trim().replace(/"/g, '')).includes(code)) continue;
  const subtopics = [...new Set([...fm.matchAll(/subtopic:\s*"([^"]+)"/g)].map((m) => m[1]))];
  const source = file.replace(/\.md$/, '');

  let heading = '';
  for (const line of body.split('\n')) {
    const h = line.match(/^#{2,4}\s+(.*)/);
    if (h) { heading = plain(h[1]); continue; }
    const row = line.match(/^\|\s*\*\*([^*]+)\*\*\s*\|(.+)\|\s*$/);
    if (row) {
      const cells = row[2].split('|').map(plain).filter(Boolean);
      if (cells.length) out.push({ source, heading, subtopics, shape: 'table', front: plain(row[1]), back: cells.join(' · ') });
      continue;
    }
    const bullet = line.match(/^[-*]\s+\*\*([^*]+)\*\*\s*(?:—|–|-|:)\s+(.+)$/);
    if (bullet) out.push({ source, heading, subtopics, shape: 'bullet', front: plain(bullet[1]).replace(/:$/, ''), back: plain(bullet[2]) });
  }
}

if (asJson) {
  console.log(JSON.stringify(out, null, 2));
} else {
  let last = '';
  for (const c of out) {
    if (c.source !== last) {
      console.log(`\n# ${c.source}  (maps to: ${c.subtopics.join(', ') || 'topic only'})`);
      last = c.source;
    }
    console.log(`  [${c.heading}] ${c.front}  =>  ${c.back}`);
  }
  console.log(`\n${out.length} candidate(s) for ${code}. None is added to a deck automatically.`);
}
