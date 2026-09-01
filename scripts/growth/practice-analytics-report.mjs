#!/usr/bin/env node
// scripts/growth/practice-analytics-report.mjs
//
// Practice-usage reporting tool (Search Intelligence Execution Round
// follow-up). Ingests a GA4 export of the practice-page event instrumentation
// added in src/pages/practice/[code]/index.astro (see
// docs/growth/practice-analytics-events.md for the full event design) and
// produces a deterministic markdown report of practice engagement.
//
// This script NEVER FABRICATES DATA. Every number in its output is either
// read directly from a supplied CSV or computed from those numbers with a
// documented formula. Where the current event instrumentation genuinely
// cannot support a metric (e.g. a true diagnostic "completion rate" -- see
// "What this script does NOT compute" below), the report says so explicitly
// rather than inventing or estimating a figure.
//
// Usage:
//   node scripts/growth/practice-analytics-report.mjs --input <folder> [--out <file>]
//
// With no --input, this prints IMPLEMENTED_AWAITING_DATA and exits 0 -- this
// is the expected state until a real GA4 export is supplied (as of this
// script's authoring, no export has been supplied; see
// docs/growth/practice-analytics-events.md, "Reporting").
//
// --- Expected input format -----------------------------------------------
//
// <folder> is a directory containing CSVs produced from GA4's own
// Explore > Free form report (Analytics > Explore > Free form, then
// Export > Download file (CSV)), or an equivalent BigQuery-export-derived
// CSV with the same columns. Column names are matched case-insensitively
// and with either GA4-UI-style headers ("Event name", "Event count") or
// snake_case/API-style headers ("event_name", "event_count") -- whichever
// the export tool produced.
//
// All files below are OPTIONAL. The script degrades gracefully: any report
// section whose required file/column isn't present is marked
// AWAITING_DATA in the output rather than omitted or guessed. At minimum,
// supply events.csv for a totals-only report.
//
//   events.csv              Dimension: "Event name". Metric: "Event count".
//                            One row per event name, site-wide totals. This
//                            is the base GA4 "Events" report -- Reports >
//                            Engagement > Events, or an Explore free-form
//                            with just that one dimension.
//                            Expected columns: Event name | Event count
//
//   topic-breakdown.csv     Dimensions: "Event name" + the custom dimension
//                            for the `topic` event parameter. Metric: Event
//                            count. Powers "most-practiced topics",
//                            "self-reported correct/incorrect rate by
//                            topic", per-topic error-notebook and
//                            weak-topic-click counts.
//                            Expected columns: Event name | topic | Event count
//
//   mode-breakdown.csv      Dimensions: "Event name" + the custom dimension
//                            for the `practice_mode` event parameter.
//                            Metric: Event count. Powers "practice mode
//                            usage split". Only question_answered carries
//                            practice_mode, so only that event's rows matter
//                            here.
//                            Expected columns: Event name | practice_mode | Event count
//
//   duration-breakdown.csv  Dimensions: "Event name" + the custom dimension
//                            for the `duration_bucket` event parameter.
//                            Metric: Event count. Powers the diagnostic
//                            quiz_complete duration distribution.
//                            Expected columns: Event name | duration_bucket | Event count
//
// IMPORTANT GA4 prerequisite: GA4 only lets you build an Explore report (or
// this script's breakdown files) on an event parameter once that parameter
// has been registered as a custom dimension in Admin > Custom definitions >
// Custom dimensions (scope: Event). As of this script's authoring, the
// parameters emitted by the practice page -- topic, practice_mode,
// duration_bucket, is_correct, wrong_count, source, score_percent, and the
// shared specCode/board/qualification/subject context -- have NOT been
// confirmed registered as GA4 custom dimensions (no live GA4 property
// access from this repo to check). Registering the ones this script reads
// (topic, practice_mode, duration_bucket) is a prerequisite for the
// breakdown files above to be exportable at all; until then, only
// events.csv (which needs no custom dimension) can be produced.
//
// Note on real parameter names: this script reads the event names and
// parameter names exactly as emitted by src/pages/practice/[code]/index.astro
// today (confirmed by reading that file directly), not by name alone from
// the design doc's prose. In particular, the shared per-page context object
// is emitted as `specCode` (camelCase), not `spec_code`, and no
// `practice_set_id` parameter exists on any event -- use `specCode` as the
// GA4 custom dimension name if building a per-specification breakdown.
//
// This script has no dependency on the production website build --
// see docs/growth/README.md, "Not a build-time dependency," which applies
// equally here (same convention as scripts/growth/gsc-opportunity-report.mjs).
//
// Reminder: any real export placed in a local folder for this script to
// read contains real (if aggregate, non-PII) account data. Do not commit
// raw exports to the public repository -- .growth-private/ is gitignored
// for exactly this purpose (see .gitignore and docs/growth/README.md).

import { readFileSync, existsSync, readdirSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { parseCsvObjects } from './csv-lite.mjs';

// Event names as actually implemented in src/pages/practice/[code]/index.astro
// today. Kept as an explicit list (not inferred from the CSV) so the report
// can call out an event name found in the export that this script doesn't
// recognise -- most likely a sign the export includes unrelated site events
// (generate_lead, whatsapp_click, page_view, etc.) alongside the practice
// events, which is expected and fine; those rows are simply not part of
// this report's practice-engagement sections.
const PRACTICE_EVENTS = [
  'practice_start',
  'question_answered',
  'question_correct',
  'question_incorrect',
  'quiz_complete',
  'retry',
  'error_notebook_add',
  'weak_topic_click',
  'teacher_support_click',
];

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

// Normalizes a CSV header to a canonical lowercase/underscore key so both
// GA4-UI-style ("Event name") and snake_case/API-style ("event_name")
// headers resolve to the same lookup key.
function normalizeHeader(h) {
  return String(h).trim().toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
}

function buildLookup(row) {
  const lookup = {};
  for (const key in row) {
    if (!Object.prototype.hasOwnProperty.call(row, key)) continue;
    lookup[normalizeHeader(key)] = row[key];
  }
  return lookup;
}

function pick(lookup, aliases) {
  for (const alias of aliases) {
    if (lookup[alias] !== undefined && lookup[alias] !== '') return lookup[alias];
  }
  return undefined;
}

const EVENT_NAME_ALIASES = ['event_name', 'eventname', 'event'];
const COUNT_ALIASES = ['event_count', 'eventcount', 'count', 'total_event_count', 'events'];
const TOPIC_ALIASES = ['topic'];
const MODE_ALIASES = ['practice_mode', 'mode'];
const DURATION_ALIASES = ['duration_bucket', 'duration'];

function num(s) {
  const n = parseFloat(String(s).replace(/,/g, ''));
  return Number.isFinite(n) ? n : 0;
}

// Loads events.csv into a Map of eventName -> total count.
function loadTotals(dir) {
  const file = findFile(dir, [/^events?\.csv$/i, /event.*totals?.*\.csv$/i]);
  if (!file) return null;
  const rows = parseCsvObjects(readFileSync(file, 'utf8'));
  const totals = new Map();
  for (const row of rows) {
    const lookup = buildLookup(row);
    const eventName = pick(lookup, EVENT_NAME_ALIASES);
    const count = num(pick(lookup, COUNT_ALIASES));
    if (!eventName) continue;
    totals.set(eventName, (totals.get(eventName) || 0) + count);
  }
  return totals;
}

// Loads a two-dimension breakdown file (event name x extra dimension) into
// a Map of eventName -> Map(dimensionValue -> count).
function loadBreakdown(dir, fileMatchers, dimAliases) {
  const file = findFile(dir, fileMatchers);
  if (!file) return null;
  const rows = parseCsvObjects(readFileSync(file, 'utf8'));
  const byEvent = new Map();
  for (const row of rows) {
    const lookup = buildLookup(row);
    const eventName = pick(lookup, EVENT_NAME_ALIASES);
    const dimValue = pick(lookup, dimAliases);
    const count = num(pick(lookup, COUNT_ALIASES));
    if (!eventName || dimValue === undefined) continue;
    if (!byEvent.has(eventName)) byEvent.set(eventName, new Map());
    const dimMap = byEvent.get(eventName);
    dimMap.set(dimValue, (dimMap.get(dimValue) || 0) + count);
  }
  return byEvent;
}

function fmtPct(n) {
  return (n * 100).toFixed(1) + '%';
}

function sortedEntries(map) {
  return [...map.entries()].sort((a, b) => b[1] - a[1]);
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const input = args.input;
  const outFile = args.out || null;

  if (!input) {
    console.log('IMPLEMENTED_AWAITING_DATA');
    console.log('No --input folder given. This is the expected state until a real GA4 export is supplied.');
    console.log('');
    console.log('To populate this report, export from GA4 (Analytics > Explore > Free form):');
    console.log('  1. events.csv          -- dimension "Event name", metric "Event count" (base totals; no custom dimension required)');
    console.log('  2. topic-breakdown.csv -- dimension "Event name" + the `topic` custom dimension, metric "Event count"');
    console.log('  3. mode-breakdown.csv  -- dimension "Event name" + the `practice_mode` custom dimension, metric "Event count"');
    console.log('  4. duration-breakdown.csv -- dimension "Event name" + the `duration_bucket` custom dimension, metric "Event count"');
    console.log('');
    console.log('The topic/practice_mode/duration_bucket breakdowns require those event parameters to first be registered as');
    console.log('GA4 custom dimensions (Admin > Custom definitions > Custom dimensions, scope: Event) -- not confirmed done yet,');
    console.log('this repo has no live GA4 property access to check. events.csv alone needs no custom dimension and can be');
    console.log('exported today.');
    console.log('');
    console.log('Usage: node scripts/growth/practice-analytics-report.mjs --input <folder> [--out <file>]');
    console.log('See docs/growth/practice-analytics-events.md, "Reporting," for the full expected file format.');
    process.exitCode = 0;
    return;
  }

  const totals = loadTotals(input);
  const topicBreakdown = loadBreakdown(input, [/^topic.?breakdown\.csv$/i, /topic.*\.csv$/i], TOPIC_ALIASES);
  const modeBreakdown = loadBreakdown(input, [/^mode.?breakdown\.csv$/i, /practice.?mode.*\.csv$/i], MODE_ALIASES);
  const durationBreakdown = loadBreakdown(input, [/^duration.?breakdown\.csv$/i, /duration.*\.csv$/i], DURATION_ALIASES);

  if (!totals && !topicBreakdown && !modeBreakdown && !durationBreakdown) {
    console.log('IMPLEMENTED_AWAITING_DATA');
    console.log(`No events.csv, topic-breakdown.csv, mode-breakdown.csv, or duration-breakdown.csv found in ${input}.`);
    console.log('See docs/growth/practice-analytics-events.md, "Reporting," for the exact expected filenames and columns.');
    process.exitCode = 0;
    return;
  }

  const lines = [];
  lines.push('# Practice Engagement Report');
  lines.push('');
  lines.push(`Generated ${new Date().toISOString()} from: ${input}`);
  lines.push('');
  lines.push('This report never fabricates data -- every figure below is read directly from the supplied CSV(s) or');
  lines.push('computed from those numbers with a formula stated inline. A section marked AWAITING_DATA means the input');
  lines.push('folder did not contain the file needed to compute it; see the script header comment for the exact file names.');
  lines.push('');

  // --- Overview: raw event totals ---------------------------------------
  lines.push('## Event totals');
  lines.push('');
  if (totals) {
    lines.push('| Event name | Count |');
    lines.push('|---|---|');
    for (const name of PRACTICE_EVENTS) {
      lines.push(`| ${name} | ${totals.has(name) ? totals.get(name) : 0} |`);
    }
    const unknown = [...totals.keys()].filter((k) => !PRACTICE_EVENTS.includes(k));
    if (unknown.length) {
      lines.push('');
      lines.push(`Other event names present in events.csv but not part of the practice-page instrumentation (e.g. site-wide conversion events like generate_lead, whatsapp_click, page_view) -- not included in the table above: ${unknown.join(', ')}.`);
    }
  } else {
    lines.push('AWAITING_DATA -- no events.csv found in the supplied input folder.');
  }
  lines.push('');

  // --- Most-practiced topics ---------------------------------------------
  lines.push('## Most-practiced topics');
  lines.push('');
  if (topicBreakdown && topicBreakdown.has('question_answered')) {
    lines.push('Ranked by question_answered count per topic (every self-marked attempt, any mode).');
    lines.push('');
    lines.push('| Topic | Questions answered |');
    lines.push('|---|---|');
    for (const [topic, count] of sortedEntries(topicBreakdown.get('question_answered'))) {
      lines.push(`| ${topic} | ${count} |`);
    }
  } else {
    lines.push('AWAITING_DATA -- requires topic-breakdown.csv with question_answered rows (Event name x topic custom dimension).');
  }
  lines.push('');

  // --- Practice mode usage split ------------------------------------------
  lines.push('## Practice mode usage split');
  lines.push('');
  if (modeBreakdown && modeBreakdown.has('question_answered')) {
    const modeMap = modeBreakdown.get('question_answered');
    const modeTotal = [...modeMap.values()].reduce((a, b) => a + b, 0);
    lines.push('Share of question_answered events per mode (standard / mixed / diagnostic). Only question_answered carries the practice_mode parameter.');
    lines.push('');
    lines.push('| Mode | Questions answered | Share |');
    lines.push('|---|---|---|');
    for (const [mode, count] of sortedEntries(modeMap)) {
      lines.push(`| ${mode} | ${count} | ${modeTotal > 0 ? fmtPct(count / modeTotal) : 'n/a'} |`);
    }
  } else {
    lines.push('AWAITING_DATA -- requires mode-breakdown.csv with question_answered rows (Event name x practice_mode custom dimension).');
  }
  lines.push('');

  // --- Self-reported correct/incorrect rate by topic ----------------------
  lines.push('## Self-reported correct/incorrect rate by topic');
  lines.push('');
  if (topicBreakdown && (topicBreakdown.has('question_correct') || topicBreakdown.has('question_incorrect'))) {
    const correctMap = topicBreakdown.get('question_correct') || new Map();
    const incorrectMap = topicBreakdown.get('question_incorrect') || new Map();
    const topics = new Set([...correctMap.keys(), ...incorrectMap.keys()]);
    lines.push('Rate is self-reported (the visitor self-marks after revealing the worked answer) -- not auto-graded. See');
    lines.push('docs/growth/practice-analytics-events.md for why this page has no machine-checkable grading.');
    lines.push('');
    lines.push('| Topic | Correct | Incorrect | Self-reported correct rate |');
    lines.push('|---|---|---|---|');
    const rows = [...topics].map((topic) => {
      const c = correctMap.get(topic) || 0;
      const i = incorrectMap.get(topic) || 0;
      const rate = c + i > 0 ? c / (c + i) : null;
      return { topic, c, i, rate };
    }).sort((a, b) => (b.c + b.i) - (a.c + a.i));
    for (const r of rows) {
      lines.push(`| ${r.topic} | ${r.c} | ${r.i} | ${r.rate === null ? 'n/a' : fmtPct(r.rate)} |`);
    }
  } else {
    lines.push('AWAITING_DATA -- requires topic-breakdown.csv with question_correct and/or question_incorrect rows.');
  }
  lines.push('');

  // --- Retry rate ----------------------------------------------------------
  lines.push('## Retry rate');
  lines.push('');
  if (totals && totals.has('retry') && totals.has('question_answered') && totals.get('question_answered') > 0) {
    const retryCount = totals.get('retry');
    const answeredCount = totals.get('question_answered');
    lines.push(`retry events / question_answered events = ${retryCount} / ${answeredCount} = ${fmtPct(retryCount / answeredCount)}.`);
    lines.push('');
    lines.push('This counts jump-back-and-retry clicks from the error notebook or spaced-retry list (the only two real "retry"');
    lines.push('actions in the UI) relative to total self-marked attempts -- not a per-question retry rate, and not the same as');
    lines.push('a visitor re-attempting a question through the ordinary "Next question" flow, which is not separately tracked.');
  } else {
    lines.push('AWAITING_DATA -- requires events.csv with both retry and question_answered rows.');
  }
  lines.push('');

  // --- Error notebook additions ---------------------------------------------
  lines.push('## Error notebook additions');
  lines.push('');
  if (totals && totals.has('error_notebook_add')) {
    lines.push(`Total new entries added to visitors' error notebooks: ${totals.get('error_notebook_add')}.`);
    lines.push('(Fires only on a question\'s first wrong mark, not on repeat wrong-marks of an already-notebooked question --');
    lines.push('see the instrumentation\'s `!wasAlreadyWrong` gate in src/pages/practice/[code]/index.astro.)');
    if (topicBreakdown && topicBreakdown.has('error_notebook_add')) {
      lines.push('');
      lines.push('| Topic | New error-notebook entries |');
      lines.push('|---|---|');
      for (const [topic, count] of sortedEntries(topicBreakdown.get('error_notebook_add'))) {
        lines.push(`| ${topic} | ${count} |`);
      }
    }
  } else {
    lines.push('AWAITING_DATA -- requires events.csv with an error_notebook_add row.');
  }
  lines.push('');

  // --- Weak-topic click-through ----------------------------------------------
  lines.push('## Weak-topic click-through');
  lines.push('');
  if (totals && totals.has('weak_topic_click')) {
    lines.push(`Total clicks on a "N wrong · study this topic" link: ${totals.get('weak_topic_click')}.`);
    if (topicBreakdown && topicBreakdown.has('weak_topic_click')) {
      lines.push('');
      lines.push('| Topic | Clicks through to the syllabus hub |');
      lines.push('|---|---|');
      for (const [topic, count] of sortedEntries(topicBreakdown.get('weak_topic_click'))) {
        lines.push(`| ${topic} | ${count} |`);
      }
    }
  } else {
    lines.push('AWAITING_DATA -- requires events.csv with a weak_topic_click row.');
  }
  lines.push('');

  // --- Diagnostic (quiz_complete) ---------------------------------------------
  lines.push('## Diagnostic quiz completions');
  lines.push('');
  if (totals && totals.has('quiz_complete')) {
    lines.push(`Diagnostic-mode runs completed (quiz_complete fires exactly once per diagnostic run, at its results screen):`);
    lines.push(`${totals.get('quiz_complete')}.`);
    if (durationBreakdown && durationBreakdown.has('quiz_complete')) {
      lines.push('');
      lines.push('Duration distribution:');
      lines.push('');
      lines.push('| Duration bucket | Runs |');
      lines.push('|---|---|');
      for (const [bucket, count] of sortedEntries(durationBreakdown.get('quiz_complete'))) {
        lines.push(`| ${bucket} | ${count} |`);
      }
    }
  } else {
    lines.push('AWAITING_DATA -- requires events.csv with a quiz_complete row.');
  }
  lines.push('');
  lines.push('**What this script does NOT compute:** a true diagnostic "completion rate" (completed / started). The current');
  lines.push('instrumentation has no `diagnostic_start` event -- entering diagnostic mode is not separately tracked from any');
  lines.push('other question_answered event with practice_mode=diagnostic, and a visitor can enter diagnostic mode more than');
  lines.push('once without a clean way to count distinct "starts" from event totals alone. Inventing a denominator here would');
  lines.push('produce a number that looks precise but is not honestly derived -- this script reports the raw completion count');
  lines.push('only. If a completion rate is genuinely needed, the fix is adding a `diagnostic_start` event to the instrumentation');
  lines.push('(a change to src/pages/practice/[code]/index.astro, out of scope for this reporting script), not estimating one here.');
  lines.push('');

  // --- Teacher support clicks -------------------------------------------------
  lines.push('## Teacher support clicks (from diagnostic results)');
  lines.push('');
  if (totals && totals.has('teacher_support_click')) {
    lines.push(`Total clicks on "Get teacher support" from the diagnostic-results screen: ${totals.get('teacher_support_click')}.`);
    lines.push('Whether these correlate with an actual lead (generate_lead) is a separate question with real client-side');
    lines.push('attribution limits -- see docs/growth/teacher-support-attribution.md, not computed by this script.');
  } else {
    lines.push('AWAITING_DATA -- requires events.csv with a teacher_support_click row.');
  }
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
