#!/usr/bin/env node
/**
 * v1.2 WS1 — explicit regression test for the 9 pages named in the v1.2
 * prompt as confirmed or suspected victims of the Cambridge-topic-leak bug
 * (topicsFor() not filtering by boardSlug), plus correct-control pages that
 * must keep showing their own real content.
 *
 * Runs against a fresh `dist/` build. Fails loudly (exit 1) if any assertion
 * does not hold. Not part of `npm run validate:academic` (requires a build
 * first) — run explicitly as `node scripts/test-cross-board-regression.mjs`
 * after `npm run build`, and as part of the pre-release QA gate.
 */
import { readFile } from 'node:fs/promises';

let problems = 0;
const fail = (msg) => { console.error(`  ✗ ${msg}`); problems++; };
const ok = (msg) => console.log(`  ✓ ${msg}`);

async function readPage(path) {
  try {
    return await readFile(`dist/${path}`, 'utf8');
  } catch {
    fail(`dist/${path} does not exist — was it built?`);
    return null;
  }
}

// The 9 pages named in the v1.2 prompt as suspected cross-board topic-map
// contamination. Each must NOT show Cambridge's topic data, tiering
// language or source citation, and must instead show the honest
// "being verified" placeholder (since no non-Cambridge topic data exists
// yet in syllabus-topics.ts).
const CONTAMINATED_PAGES = [
  'boards/oxfordaqa/a-level/accounting/index.html',
  'boards/oxfordaqa/a-level/chemistry/index.html',
  'boards/oxfordaqa/igcse/chemistry/index.html',
  'boards/aqa/a-level/accounting/index.html',
  'boards/aqa/a-level/chemistry/index.html',
  'boards/edexcel/a-level/accounting/index.html',
  'boards/edexcel/a-level/chemistry/index.html',
  'boards/edexcel/igcse/chemistry/index.html',
  'boards/ocr/a-level/chemistry/index.html',
];

const LEAK_SIGNATURES = ['cambridgeinternational.org', 'Core tier', 'Extended tier', 'Supplement content'];

console.log('\n[A] 9 previously-flagged pages no longer show Cambridge topic-map data');
for (const page of CONTAMINATED_PAGES) {
  const html = await readPage(page);
  if (html === null) continue;
  const leaks = LEAK_SIGNATURES.filter((sig) => html.includes(sig));
  if (leaks.length) {
    fail(`${page} still contains Cambridge leak signature(s): ${leaks.join(', ')}`);
  } else if (!html.includes('being verified')) {
    fail(`${page} shows neither a Cambridge leak nor the expected honest "being verified" placeholder — unexpected state, needs manual review`);
  } else {
    ok(`${page} — clean (honest placeholder, no Cambridge leak)`);
  }
}

// Correct controls: Cambridge's OWN pages for the same qualification+subject
// pairs above must still show their real topic data — the fix must not have
// broken Cambridge's own legitimate content.
const CAMBRIDGE_CONTROLS = [
  { page: 'boards/cambridge/a-level/accounting/index.html', code: '9706' },
  { page: 'boards/cambridge/a-level/chemistry/index.html', code: '9701' },
  { page: 'boards/cambridge/igcse/chemistry/index.html', code: '0620' },
  { page: 'boards/cambridge/o-level/chemistry/index.html', code: '5070' },
  { page: 'boards/cambridge/o-level/mathematics/index.html', code: '4024' },
  { page: 'boards/cambridge/o-level/physics/index.html', code: '5054' },
  { page: 'boards/cambridge/o-level/biology/index.html', code: '5090' },
  { page: 'boards/cambridge/o-level/business/index.html', code: '7115' },
  { page: 'boards/cambridge/o-level/economics/index.html', code: '2281' },
];

console.log('\n[B] Cambridge\'s own pages (correct controls) still show real Cambridge topic data');
for (const { page, code } of CAMBRIDGE_CONTROLS) {
  const html = await readPage(page);
  if (html === null) continue;
  if (!html.includes('cambridgeinternational.org')) {
    fail(`${page} (Cambridge, code ${code}) no longer cites cambridgeinternational.org — the fix may have broken Cambridge's own legitimate content`);
  } else if (!html.includes(code)) {
    fail(`${page} does not display its own syllabus code '${code}'`);
  } else {
    ok(`${page} — real Cambridge topic data intact (code ${code} present, cambridgeinternational.org cited)`);
  }
}

console.log('');
if (problems) {
  console.error(`CROSS-BOARD REGRESSION TEST FAILED — ${problems} problem(s).`);
  process.exit(1);
} else {
  console.log(`Cross-board regression test OK — ${CONTAMINATED_PAGES.length} previously-flagged pages clean, ${CAMBRIDGE_CONTROLS.length} control pages intact.`);
}
