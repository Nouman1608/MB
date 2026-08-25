#!/usr/bin/env node
/**
 * Phase 10 safeguard (Aug 2026 SEO remediation) -- structured-data
 * (JSON-LD) validation across the whole built site.
 *
 * Confirms every page ships at least one JSON-LD block, every block
 * parses as valid JSON, and every typed node -- including nodes nested
 * inside an `@graph` wrapper, which a naive check would wrongly flag as
 * "no @type" by looking at the wrapper object instead of its contents --
 * declares an `@type` and its wrapper declares `@context`.
 *
 * Requires a fresh `dist/` (run `npm run build` first). Not part of
 * `npm run validate:academic` for that reason -- run explicitly via
 * `npm run audit:structured-data`, or as part of the pre-release QA gate.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (entry === 'index.html') out.push(p);
  }
  return out;
}

function typedNodes(item) {
  // A @graph wrapper holds an array of typed nodes under one shared
  // @context; a plain node is its own single typed node.
  if (Array.isArray(item['@graph'])) return item['@graph'];
  return [item];
}

let files;
try {
  files = walk('dist');
} catch {
  console.error('dist/ not found -- run `npm run build` first.');
  process.exit(1);
}

let checked = 0;
let totalBlocks = 0;
let totalNodes = 0;
const problems = [];
const typeCounts = {};

for (const f of files) {
  const html = readFileSync(f, 'utf8');
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  const path = f.replace(/^dist/, '').replace(/index\.html$/, '') || '/';
  if (blocks.length === 0) {
    problems.push({ path, issue: 'no JSON-LD block on page' });
    continue;
  }
  checked++;
  for (const [, raw] of blocks) {
    totalBlocks++;
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch (e) {
      problems.push({ path, issue: `invalid JSON: ${e.message}` });
      continue;
    }
    const wrappers = Array.isArray(parsed) ? parsed : [parsed];
    for (const wrapper of wrappers) {
      if (!wrapper['@context']) problems.push({ path, issue: 'missing @context on wrapper' });
      for (const node of typedNodes(wrapper)) {
        totalNodes++;
        if (!node['@type']) {
          problems.push({ path, issue: 'missing @type on a graph node', snippet: JSON.stringify(node).slice(0, 150) });
        } else {
          const t = Array.isArray(node['@type']) ? node['@type'].join('+') : node['@type'];
          typeCounts[t] = (typeCounts[t] || 0) + 1;
        }
      }
    }
  }
}

console.log(`Structured-data audit -- ${files.length} pages scanned, ${checked} with JSON-LD.`);
console.log(`Total JSON-LD blocks: ${totalBlocks}, total typed nodes: ${totalNodes}\n`);
console.log('Type distribution:');
for (const [type, count] of Object.entries(typeCounts).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${type}: ${count}`);
}

if (problems.length) {
  console.log(`\nProblems:`);
  for (const p of problems.slice(0, 50)) console.log(`  ✗ ${p.path} -- ${p.issue}${p.snippet ? ` (${p.snippet})` : ''}`);
  if (problems.length > 50) console.log(`  ... and ${problems.length - 50} more`);
}

console.log(`\n${problems.length === 0 ? 'PASS' : 'FAIL'}: ${problems.length} problem(s) found.`);
process.exit(problems.length === 0 ? 0 : 1);
