#!/usr/bin/env node
/**
 * WS6 (2026-09-08) regression guard: "Rewrite alternative-paper FAQs into
 * explicit Core/Extended routes."
 *
 * Before this fix, src/pages/boards/[board]/[qualification]/[subject].astro
 * built its "How is X assessed?" FAQ answer by flattening every component
 * of the primary assessment record into one semicolon list, with no regard
 * for `tier` or `alternativeGroup`. For a tiered syllabus (e.g. Cambridge
 * IGCSE Chemistry 0620) this produced text like "assessed through: Paper 1
 * (Multiple Choice (Core)); Paper 3 (Theory (Core)); Paper 2 (Multiple
 * Choice (Extended)); Paper 4 (Theory (Extended)); Paper 5; Paper 6" --
 * wording that reads as if every candidate sits all six papers, when in
 * fact a Core candidate sits Paper 1 + 3 + one of 5/6, and an Extended
 * candidate sits Paper 2 + 4 + one of 5/6.
 *
 * The fix groups components by tier ("Core candidates take: ...; Extended
 * candidates take: ...") and renders alternativeGroup members as "one of X
 * or Y" rather than listing every alternative as though a candidate sits
 * it. This validator has two layers:
 *
 *  1. STATIC -- confirms the generator code in the template still contains
 *     the tier-grouping and alternativeGroup-aware logic (fmtComponent,
 *     describeComponents, tierValues, the "one of ... or ..." phrase).
 *     Catches an edit that silently reverts to the old flat-list builder.
 *
 *  2. DYNAMIC (requires `dist/` from a completed `astro build`) -- scans
 *     every built board/qualification/subject hub page's "is assessed
 *     through:" FAQ answer for pairs of tier labels (Core/Extended,
 *     Foundation/Higher, First Language/Second Language, AS/A2, SL/HL)
 *     appearing together WITHOUT the "candidates take" route-grouping
 *     phrase -- exactly the ambiguous pattern this fix eliminates. This is
 *     deliberately data-driven (it does not hardcode which qualifications
 *     are tiered) so it keeps working as assessments.ts changes.
 *
 * Deliberately NOT covered: `routeGroup`-style multi-route syllabuses
 * (e.g. Cambridge IGCSE English Literature 0475's Drama/Unseen/Coursework
 * choices, a genuinely different many-to-many composition model). Those
 * still render as a flat list after this fix -- disclosed in D-155 as an
 * out-of-scope follow-up, not silently ignored. This validator does not
 * assert anything about routeGroup pages.
 */
import fs from 'node:fs';
import path from 'node:path';

const errors = [];
const TEMPLATE_PATH = 'src/pages/boards/[board]/[qualification]/[subject].astro';

function checkStatic() {
  if (!fs.existsSync(TEMPLATE_PATH)) {
    errors.push(`STATIC: template not found at ${TEMPLATE_PATH}`);
    return;
  }
  const src = fs.readFileSync(TEMPLATE_PATH, 'utf8');
  const required = [
    { name: 'fmtComponent helper', re: /const fmtComponent = \(/ },
    { name: 'describeComponents helper', re: /const describeComponents = \(/ },
    { name: 'alternativeGroup "one of X or Y" phrasing', re: /`one of \$\{group\.map\(fmtComponent\)\.join\(' or '\)\}`/ },
    { name: 'tierValues grouping', re: /const tierValues =/ },
    { name: 'tier route-grouping phrase ("candidates take")', re: /candidates take: \$\{describeComponents/ },
  ];
  for (const check of required) {
    if (!check.re.test(src)) {
      errors.push(`STATIC: ${TEMPLATE_PATH} is missing expected WS6 logic -- ${check.name} not found. The tier/alternativeGroup-aware FAQ generator may have been reverted.`);
    }
  }
}

// Tier-label pairs that must never appear together in a flat (non-route-grouped)
// FAQ answer -- see TIER_LABEL in the template for the full vocabulary.
const TIER_PAIRS = [
  ['(Core)', '(Extended)'],
  ['(Foundation)', '(Higher)'],
  ['(First Language)', '(Second Language)'],
  ['(AS)', '(A2)'],
  ['(SL)', '(HL)'],
];

function walkHtmlFiles(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walkHtmlFiles(p, out);
    else if (entry.name === 'index.html') out.push(p);
  }
  return out;
}

function checkDynamic() {
  const distBoards = 'dist/boards';
  if (!fs.existsSync(distBoards)) {
    console.log('DYNAMIC: dist/boards not found -- skipping (run `astro build` first to exercise this layer).');
    return;
  }
  const files = walkHtmlFiles(distBoards);
  let checked = 0;
  let tieredRouteGrouped = 0;
  for (const file of files) {
    const html = fs.readFileSync(file, 'utf8');
    const m = html.match(/is assessed through:([\s\S]{0,4000}?)Source: official/);
    if (!m) continue;
    checked++;
    const answer = m[1];
    const hasRouteGrouping = /candidates take:/.test(answer);
    if (hasRouteGrouping) {
      tieredRouteGrouped++;
      continue;
    }
    for (const [a, b] of TIER_PAIRS) {
      if (answer.includes(a) && answer.includes(b)) {
        errors.push(
          `DYNAMIC: ${file} -- FAQ answer contains both "${a}" and "${b}" component labels without tier route-grouping ("candidates take:"). This is the exact ambiguous flat-list pattern WS6 fixed -- it implies a candidate sits every tier's papers.`,
        );
      }
    }
  }
  console.log(`DYNAMIC: checked ${checked} hub-page FAQ answers -- ${tieredRouteGrouped} correctly tier-route-grouped, ${checked - tieredRouteGrouped} flat (non-tiered or routeGroup, not asserted).`);
}

checkStatic();
checkDynamic();

if (errors.length > 0) {
  console.error(`\nvalidate-tiered-faq-routes.mjs: ${errors.length} problem(s) found:\n`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log('validate-tiered-faq-routes.mjs: 0 problems found.');
