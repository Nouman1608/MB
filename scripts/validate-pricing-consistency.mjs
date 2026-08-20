#!/usr/bin/env node
/**
 * MARLBRIDGE v1.x CLOSURE — WS2.
 *
 * Guards against a future edit hard-coding a fee number somewhere other
 * than src/data/pricing.ts (the single approved source of truth) and it
 * silently drifting out of sync. Fails the build if any *other* source
 * file contains one of the exact approved fee amounts paired with its
 * currency code/symbol — the one legitimate consumer is the pricing page
 * itself, which is allow-listed.
 *
 * Runs as part of `npm run validate:academic` (despite the script name,
 * that chain is this repo's general pre-build validation gate).
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';
import { REGION_PRICING } from '../src/data/pricing.ts';

const ALLOWLIST = new Set([
  'src/data/pricing.ts',
  'src/pages/pricing/index.astro',
]);

const SCAN_DIRS = ['src/pages', 'src/components', 'src/content'];
const SCAN_EXT = new Set(['.astro', '.md', '.mdx', '.ts', '.tsx']);

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) walk(full, out);
    else if (SCAN_EXT.has(extname(full))) out.push(full);
  }
  return out;
}

const files = SCAN_DIRS.flatMap((d) => walk(d));
const problems = [];

for (const file of files) {
  const relPath = file.replace(/^\.\//, '');
  if (ALLOWLIST.has(relPath)) continue;
  const text = readFileSync(file, 'utf8');
  for (const region of REGION_PRICING) {
    for (const [amount, tier] of [[region.igcse, 'IGCSE'], [region.aLevel, 'A Level']]) {
      // Match the currency code/symbol near the raw number, loosely --
      // catches a pasted stale figure without being so strict it misses one.
      const amountStr = String(amount).replace('.', '\\.');
      const pattern = new RegExp(`${region.currency}[^0-9]{0,4}${amountStr}|${amountStr}[^0-9]{0,4}${region.currency}`);
      if (pattern.test(text)) {
        problems.push(`${relPath}: hard-codes ${region.currency} ${amount} (${region.region} ${tier} fee) outside src/data/pricing.ts`);
      }
    }
  }
}

if (problems.length > 0) {
  console.error('Pricing consistency FAILED:');
  for (const p of problems) console.error(`  ✗ ${p}`);
  console.error(`\n${problems.length} hard-coded fee reference(s) found outside the approved source of truth (src/data/pricing.ts). Import from there instead.`);
  process.exit(1);
}

console.log(`Pricing consistency OK — no hard-coded fee values outside src/data/pricing.ts across ${files.length} scanned file(s).`);
