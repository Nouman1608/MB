#!/usr/bin/env node
/**
 * D-329 (2026-09-25) -- every link to /trial/ that sets ?source= must use a
 * value the trial form accepts (TRIAL_SOURCES in functions/_lib/enquiry-
 * validation.ts). The form silently ignores any other value, so the lead's
 * `trial_source` in GA4 falls back to "trial-page" and the journey it came
 * from is lost. Found on /diagnostics/, which sent source=diagnostics-hub.
 *
 * Reads the built dist/, so run it after `npm run build` (part of audit:all).
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';

const src = readFileSync('functions/_lib/enquiry-validation.ts', 'utf8');
const list = src.match(/export const TRIAL_SOURCES = \[([^\]]*)\]/);
if (!list) { console.error('FAIL: could not read TRIAL_SOURCES from functions/_lib/enquiry-validation.ts'); process.exit(1); }
const allowed = new Set([...list[1].matchAll(/'([^']+)'/g)].map((m) => m[1]));

const problems = [];
let links = 0;
let pages = 0;
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = path.join(dir, name);
    if (statSync(p).isDirectory()) { walk(p); continue; }
    if (!name.endsWith('.html')) continue;
    pages++;
    const html = readFileSync(p, 'utf8');
    for (const m of html.matchAll(/href="(\/trial\/\?[^"]*)"/g)) {
      const query = m[1].replace(/&amp;/g, '&').split('?')[1];
      const source = new URLSearchParams(query).get('source');
      if (source === null) continue;
      links++;
      if (!allowed.has(source)) problems.push(`${path.relative('dist', p)}: /trial/ link with source=${source}, which the trial form does not accept`);
    }
  }
};
walk('dist');
if (problems.length) {
  console.error(`FAIL: ${problems.length} trial link(s) with an unrecognised source:\n${[...new Set(problems)].slice(0, 20).map((x) => '  x ' + x).join('\n')}`);
  process.exit(1);
}
console.log(`PASS: ${links} /trial/ links with ?source= across ${pages} pages all use an accepted source (${[...allowed].join(', ')}).`);
