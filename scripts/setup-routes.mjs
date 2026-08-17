#!/usr/bin/env node
/**
 * One-time (idempotent) fix-up: renames -name- to [name] for Astro dynamic
 * routes. Bracket characters do not survive some file transfers, so dynamic
 * routes ship as -slug-.astro / -category-/ and are restored here.
 *
 * Run:  npm run setup:routes
 */
import { readdir, rename, stat } from 'node:fs/promises';
import { join } from 'node:path';

const PATTERN = /^-([a-z0-9-]+)-(\.astro)?$/i;
let changed = 0;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const current = join(dir, entry.name);
    let target = current;
    const match = entry.name.match(PATTERN);
    if (match) {
      target = join(dir, `[${match[1]}]${match[2] ?? ''}`);
      await rename(current, target);
      changed++;
      console.log(`  ${entry.name}  ->  [${match[1]}]${match[2] ?? ''}`);
    }
    const info = await stat(target);
    if (info.isDirectory()) await walk(target);
  }
}

console.log('Restoring Astro dynamic route names in src/pages …');
await walk('src/pages');
console.log(changed ? `Done — ${changed} renamed.` : 'Nothing to rename; routes already correct.');
