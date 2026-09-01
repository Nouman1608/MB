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

// The pages named in the v1.2 prompt as suspected cross-board topic-map
// contamination, minus those since graduated to real published data (see
// ACCOUNTING_NOW_PUBLISHED / CHEMISTRY_NOW_PUBLISHED below). Each
// remaining page must NOT show Cambridge's topic data, tiering language or
// source citation, and must instead show the honest "being verified"
// placeholder (since no non-Cambridge topic data exists yet in
// syllabus-topics.ts).
const CONTAMINATED_PAGES = [
  'boards/oxfordaqa/a-level/chemistry/index.html',
  'boards/ocr/a-level/chemistry/index.html',
];

// The 3 Accounting pages above were originally in CONTAMINATED_PAGES too
// (flagged as suspected Cambridge-leak victims), but since v1.x Accounting
// taxonomy work they now carry their own real, board-cited topic data (not
// a Cambridge leak and not the "being verified" placeholder), so they've
// graduated into their own control group below rather than the binary
// leak-or-placeholder check that only applies to still-unpublished pages.
const ACCOUNTING_NOW_PUBLISHED = [
  { page: 'boards/oxfordaqa/a-level/accounting/index.html', domain: 'oxfordaqa.com', code: '9615' },
  { page: 'boards/aqa/a-level/accounting/index.html', domain: 'aqa.org.uk', code: '7127' },
  { page: 'boards/edexcel/a-level/accounting/index.html', domain: 'qualifications.pearson.com', code: 'YAC11' },
];

// 4 of the originally-flagged Chemistry pages (see CONTAMINATED_PAGES above,
// which retains only the 2 still-unpublished OxfordAQA A-Level/OCR Chemistry
// pages) have since had real, own-board taxonomy data added -- plus
// OxfordAQA IGCSE Chemistry (9202), graduated 2026-09-02 by the
// marlbridge-weekly-study-guides automation after adding a full 9-topic
// taxonomy entry (Topic 1 sub-topic detail sourced from the official
// specification PDF).
// have since had real, own-board taxonomy data added to syllabus-topics.ts
// (v1.2 WS -- Batch 16), following the identical graduation pattern set by
// ACCOUNTING_NOW_PUBLISHED above. AQA GCSE Chemistry (8462) was never in the
// original CONTAMINATED_PAGES list but is included here too since it now
// also carries real, own-board topic data and should be checked the same
// way as its siblings.
const CHEMISTRY_NOW_PUBLISHED = [
  { page: 'boards/aqa/gcse/chemistry/index.html', domain: 'aqa.org.uk', code: '8462' },
  { page: 'boards/aqa/a-level/chemistry/index.html', domain: 'aqa.org.uk', code: '7405' },
  { page: 'boards/edexcel/igcse/chemistry/index.html', domain: 'qualifications.pearson.com', code: '4CH1' },
  { page: 'boards/edexcel/a-level/chemistry/index.html', domain: 'qualifications.pearson.com', code: 'YCH11' },
  { page: 'boards/oxfordaqa/igcse/chemistry/index.html', domain: 'oxfordaqa.com', code: '9202' },
];

const LEAK_SIGNATURES = ['cambridgeinternational.org', 'Core tier', 'Extended tier', 'Supplement content'];

console.log('\n[A] 3 previously-flagged pages (still unpublished) no longer show Cambridge topic-map data');
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

console.log('\n[A2] 3 Accounting pages that have since been published with real, board-cited topic data');
for (const { page, domain, code } of ACCOUNTING_NOW_PUBLISHED) {
  const html = await readPage(page);
  if (html === null) continue;
  const leaks = LEAK_SIGNATURES.filter((sig) => html.includes(sig));
  if (leaks.length) {
    fail(`${page} contains Cambridge leak signature(s): ${leaks.join(', ')}`);
  } else if (!html.includes(domain)) {
    fail(`${page} does not cite its own board's domain (${domain})`);
  } else if (!html.includes(code)) {
    fail(`${page} does not display its own syllabus code '${code}'`);
  } else {
    ok(`${page} — real, own-board topic data intact (code ${code} present, ${domain} cited)`);
  }
}

console.log('\n[A3] 4 Chemistry pages that have since been published with real, board-cited topic data');
for (const { page, domain, code } of CHEMISTRY_NOW_PUBLISHED) {
  const html = await readPage(page);
  if (html === null) continue;
  const leaks = LEAK_SIGNATURES.filter((sig) => html.includes(sig));
  if (leaks.length) {
    fail(`${page} contains Cambridge leak signature(s): ${leaks.join(', ')}`);
  } else if (!html.includes(domain)) {
    fail(`${page} does not cite its own board's domain (${domain})`);
  } else if (!html.includes(code)) {
    fail(`${page} does not display its own syllabus code '${code}'`);
  } else {
    ok(`${page} — real, own-board topic data intact (code ${code} present, ${domain} cited)`);
  }
}

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
  console.log(`Cross-board regression test OK — ${CONTAMINATED_PAGES.length} previously-flagged pages clean, ${ACCOUNTING_NOW_PUBLISHED.length} graduated Accounting pages intact, ${CHEMISTRY_NOW_PUBLISHED.length} graduated Chemistry pages intact, ${CAMBRIDGE_CONTROLS.length} control pages intact.`);
}
