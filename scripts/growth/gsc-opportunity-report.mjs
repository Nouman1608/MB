#!/usr/bin/env node
// scripts/growth/gsc-opportunity-report.mjs
//
// Search Console Demand Engine (Search Intelligence & Demand-Led Growth
// Programme, WS1). Ingests Search Console CSV exports and produces a
// deterministic, explainable opportunity report. See docs/growth/README.md
// for the architecture and docs/growth/gsc-scoring-methodology.md for the
// full scoring rationale.
//
// Usage:
//   node scripts/growth/gsc-opportunity-report.mjs --input <folder> [--prev <folder>] [--out <file>]
//
// <folder> is a directory containing the CSVs Search Console's own UI
// exports when you click Export > Download CSV on the Performance report,
// unzipped. Expected filenames (case-insensitive, GSC's own defaults):
//   Queries.csv   -- columns: Top queries, Clicks, Impressions, CTR, Position
//   Pages.csv     -- columns: Top pages, Clicks, Impressions, CTR, Position
// --prev is optional: the same export for a prior comparable period, used
// to compute query growth (Section 8's "growth rate" factor, and the
// EMERGING_DEMAND category). Without it, growth-dependent fields are
// omitted rather than guessed.
//
// This script never fabricates data. If no input folder is given, or the
// expected files aren't found inside it, it prints IMPLEMENTED_AWAITING_DATA
// and exits 0 -- this is a normal, expected state, not an error, until the
// owner supplies a real export (see the "Owner follow-up data" section of
// docs/growth/README.md).
//
// The production website has no dependency on this script or its output --
// see docs/growth/README.md, "Not a build-time dependency."

import { readFileSync, existsSync, readdirSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { parseCsvObjects } from './csv-lite.mjs';
import { FLAGSHIP_CODES } from './types.mjs';
import { classifyQuery } from './scoring.mjs';

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith('--')) {
      const key = argv[i].slice(2);
      const val = argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[++i] : true;
      out[key] = val;
    }
  }
  return out;
}

function findFile(dir, nameMatchers) {
  if (!existsSync(dir)) return null;
  const files = readdirSync(dir);
  for (const matcher of nameMatchers) {
    const hit = files.find((f) => matcher.test(f));
    if (hit) return join(dir, hit);
  }
  return null;
}

function pct(s) {
  // GSC exports CTR as e.g. "4.2%" -- normalize to a 0-1 fraction.
  const n = parseFloat(String(s).replace('%', '').replace(',', ''));
  return Number.isFinite(n) ? n / 100 : 0;
}

function num(s) {
  const n = parseFloat(String(s).replace(/,/g, ''));
  return Number.isFinite(n) ? n : 0;
}

function loadQueries(dir) {
  const file = findFile(dir, [/^queries?\.csv$/i, /queries.*\.csv$/i]);
  if (!file) return null;
  const rows = parseCsvObjects(readFileSync(file, 'utf8'));
  return rows.map((r) => ({
    query: r['Top queries'] ?? r['Query'] ?? '',
    clicks: num(r['Clicks']),
    impressions: num(r['Impressions']),
    ctr: r['CTR'] ? pct(r['CTR']) : 0,
    position: num(r['Position']),
  })).filter((r) => r.query);
}

function loadPages(dir) {
  const file = findFile(dir, [/^pages?\.csv$/i, /pages.*\.csv$/i]);
  if (!file) return null;
  const rows = parseCsvObjects(readFileSync(file, 'utf8'));
  return rows.map((r) => ({
    page: r['Top pages'] ?? r['Page'] ?? '',
    clicks: num(r['Clicks']),
    impressions: num(r['Impressions']),
    ctr: r['CTR'] ? pct(r['CTR']) : 0,
    position: num(r['Position']),
  })).filter((r) => r.page);
}

// --- Explainable, deterministic opportunity scoring -------------------
// classifyQuery() now lives in ./scoring.mjs -- the single canonical
// implementation shared with the live GSC API path (see that file's
// header comment for why). Imported above.

function buildQueryPageMap(queries, pages) {
  // Best-effort mismatch/cannibalization signal from CSV alone: GSC's own
  // per-query export does not carry a per-row ranking URL (only the
  // Queries and Pages tabs, separately). A real query -> ranking-URL
  // mapping requires the GSC "Pages" filter applied per query (available
  // via the API's dimensions:[query,page], or by exporting each flagship
  // query's filtered Pages tab by hand). This function is a placeholder
  // that documents that limitation rather than fabricating a mapping --
  // see docs/growth/README.md, "Known CSV-import limitation."
  return { note: 'Query-to-ranking-URL mapping requires per-query GSC filtering or API access with dimensions=[query,page]. Not derivable from the standalone Queries.csv + Pages.csv export. QUERY_PAGE_MISMATCH and CANNIBALIZATION categories are therefore not populated by the CSV path -- use the GSC UI filtered by each flagship query, or the API, to fill this in.' };
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const input = args.input;
  const outFile = args.out || null;

  if (!input) {
    console.log('IMPLEMENTED_AWAITING_DATA');
    console.log('No --input folder given. This is the expected state until a real Search Console export is supplied.');
    console.log('Usage: node scripts/growth/gsc-opportunity-report.mjs --input <folder-with-Queries.csv-and-Pages.csv>');
    console.log('See docs/growth/README.md, "Owner follow-up data," for exactly what to export.');
    process.exitCode = 0;
    return;
  }

  const queries = loadQueries(input);
  const pages = loadPages(input);

  if (!queries && !pages) {
    console.log('IMPLEMENTED_AWAITING_DATA');
    console.log(`No Queries.csv or Pages.csv found in ${input}.`);
    console.log('Expected: Search Console > Performance > Export > Download CSV, unzipped into this folder.');
    process.exitCode = 0;
    return;
  }

  const lines = [];
  lines.push('# Search Console Opportunity Report');
  lines.push('');
  lines.push(`Generated ${new Date().toISOString()} from: ${input}`);
  lines.push('');
  lines.push('Scoring is deterministic and explainable -- see docs/growth/gsc-scoring-methodology.md.');
  lines.push('');

  if (queries) {
    const classified = queries.map(classifyQuery).sort((a, b) => b.score - a.score);
    const byType = {};
    for (const c of classified) byType[c.opportunityType] = (byType[c.opportunityType] || 0) + 1;

    lines.push('## Query opportunities');
    lines.push('');
    lines.push(`${classified.length} queries classified. Counts by type: ${Object.entries(byType).map(([k, v]) => `${k}=${v}`).join(', ')}`);
    lines.push('');
    lines.push('| Query | Clicks | Impressions | CTR | Position | Type | Priority | Reason |');
    lines.push('|---|---|---|---|---|---|---|---|');
    for (const c of classified.filter((c) => c.opportunityType !== 'LOW_PRIORITY').slice(0, 200)) {
      lines.push(`| ${c.query} | ${c.clicks} | ${c.impressions} | ${(c.ctr * 100).toFixed(2)}% | ${c.position.toFixed(1)} | ${c.opportunityType} | ${c.priority} | ${c.reason} |`);
    }
    lines.push('');

    const flagshipRows = classified.filter((c) => FLAGSHIP_CODES.some((code) => c.query.includes(code)));
    lines.push('## Flagship specification demand (0620 / 0625 / 0580 / 9701 / 9702)');
    lines.push('');
    if (flagshipRows.length === 0) {
      lines.push('No queries in this export explicitly contain a flagship spec code. This does not mean no flagship demand exists -- most searchers use subject/board names, not syllabus codes. Cross-reference against the subject-name queries manually per docs/growth/README.md.');
    } else {
      lines.push('| Query | Clicks | Impressions | Position |');
      lines.push('|---|---|---|---|');
      for (const c of flagshipRows) lines.push(`| ${c.query} | ${c.clicks} | ${c.impressions} | ${c.position.toFixed(1)} |`);
    }
    lines.push('');
  } else {
    lines.push('## Query opportunities');
    lines.push('');
    lines.push('IMPLEMENTED_AWAITING_DATA -- no Queries.csv found in the supplied input folder.');
    lines.push('');
  }

  if (pages) {
    lines.push('## Page performance');
    lines.push('');
    lines.push('| Page | Clicks | Impressions | CTR | Position |');
    lines.push('|---|---|---|---|---|');
    for (const p of pages.sort((a, b) => b.impressions - a.impressions).slice(0, 100)) {
      lines.push(`| ${p.page} | ${p.clicks} | ${p.impressions} | ${(p.ctr * 100).toFixed(2)}% | ${p.position.toFixed(1)} |`);
    }
    lines.push('');
  } else {
    lines.push('## Page performance');
    lines.push('');
    lines.push('IMPLEMENTED_AWAITING_DATA -- no Pages.csv found in the supplied input folder.');
    lines.push('');
  }

  lines.push('## Query/page mismatch and cannibalization');
  lines.push('');
  lines.push(buildQueryPageMap(queries || [], pages || []).note);
  lines.push('');

  const report = lines.join('\n');

  if (outFile) {
    mkdirSync(dirname(outFile), { recursive: true });
    writeFileSync(outFile, report, 'utf8');
    console.log(`Report written to ${outFile}`);
    console.log('Reminder: this file contains real account data derived from a private export.');
    console.log('Do not commit it to the public repository -- .growth-private/ is gitignored for this purpose.');
  } else {
    console.log(report);
  }
}

main();
