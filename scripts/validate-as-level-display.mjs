#!/usr/bin/env node
/**
 * WS4 (2026-09-08): AS Level resources were rendering as "A LEVELS"
 * everywhere resourceLevelLabel() is called, because that helper only knew
 * about the 9701 combined-syllabus `stage` field, not AQA's genuinely
 * separate standalone `as-level` qualification. Fixed in
 * src/utils/content/collections.ts by deriving stage from `qualifications`
 * too when `stage` itself is absent. See that function's doc comment for
 * the full explanation.
 *
 * This validator is a static regression guard, not a runtime test (this
 * script suite has no TS-executing test runner) -- it checks the two ways
 * this exact bug could silently come back:
 *
 *   1. resourceLevelLabel's own body loses the `qualifications`-based
 *      derivation (someone "simplifies" it back to stage-only).
 *   2. A call site invokes resourceLevelLabel with only 2 arguments,
 *      silently opting that one page out of the AS-aware fix -- exactly
 *      the shape of the original bug, just at a different call site.
 *
 * Every resource with qualifications: ["as-level"] is also checked for the
 * data precondition the fix depends on (level includes "a-levels"), so a
 * future AS-only resource that's tagged wrong fails loudly instead of
 * silently falling through to the generic label again.
 */
import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const errors = [];

// --- 1. The derivation logic itself must still be present -----------------
const collectionsPath = 'src/utils/content/collections.ts';
const collectionsSrc = await readFile(collectionsPath, 'utf8');
const fnMatch = collectionsSrc.match(/export const resourceLevelLabel = \(([\s\S]*?)\n\};/);
if (!fnMatch) {
  errors.push(`${collectionsPath}: resourceLevelLabel() not found in the expected shape (arrow function ending in "};") -- update this validator if it was intentionally refactored.`);
} else {
  const body = fnMatch[1];
  if (!body.includes('qualifications') || !body.includes("'as-level'")) {
    errors.push(`${collectionsPath}: resourceLevelLabel() no longer derives AS-ness from qualifications.includes('as-level') -- this is the WS4 fix; removing it silently reintroduces "A LEVELS" on every AQA AS-only resource.`);
  }
}

// --- 2. Every call site must pass all 3 arguments --------------------------
const callSiteGlobs = [
  'src/components/cards/ResourceCard.astro',
  'src/components/sections/ResourcesSection.astro',
  'src/pages/resources/[slug].astro',
];
for (const path of callSiteGlobs) {
  const src = await readFile(path, 'utf8');
  const calls = [...src.matchAll(/resourceLevelLabel\(([^)]*)\)/g)];
  if (!calls.length) {
    errors.push(`${path}: expected a resourceLevelLabel(...) call here and found none -- update this validator's call-site list if this file no longer renders resource levels.`);
    continue;
  }
  for (const [full, args] of calls) {
    const argCount = args.split(',').filter((a) => a.trim().length > 0).length;
    if (argCount < 3) {
      errors.push(`${path}: "${full}" passes only ${argCount} argument(s) -- must pass (levels, stage, qualifications) so AQA's standalone AS Level resources still render "AS LEVEL" here.`);
    }
  }
}

// --- 3. Data precondition: every as-level resource must declare level ------
const dir = 'src/content/resources';
const files = (await readdir(dir)).filter((f) => f.endsWith('.md'));
for (const f of files) {
  const raw = await readFile(join(dir, f), 'utf8');
  const fm = raw.split('---')[1] ?? '';
  const isAsLevel = /qualifications:\s*\[\s*"as-level"\s*\]/.test(fm)
    || /qualifications:\s*\n(?:\s*-\s*"[a-z-]+"\s*\n)*\s*-\s*"as-level"\s*\n/.test(fm);
  if (!isAsLevel) continue;
  if (!/level:\s*\[[^\]]*"a-levels"[^\]]*\]/.test(fm)) {
    errors.push(`${dir}/${f}: declares qualifications: ["as-level"] but level does not include "a-levels" -- resourceLevelLabel has no bucket to attach the "AS LEVEL" label to for this resource.`);
  }
}

if (errors.length) {
  console.error(`\nAS Level display validation FAILED — ${errors.length} problem(s):\n`);
  for (const e of errors) console.error(`  • ${e}`);
  console.error('');
  process.exit(1);
}
console.log(`AS Level display OK — resourceLevelLabel() derives AS from qualifications, all ${callSiteGlobs.length} call sites pass it through.`);
