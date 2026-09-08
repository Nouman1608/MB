#!/usr/bin/env node
/**
 * Every `env.X` the Worker reads must be either a binding declared in
 * wrangler.jsonc or a known, documented secret (D-152).
 *
 * WHY THIS EXISTS. `functions/api/enquiry.ts` called
 * `checkRateLimit(env.ENQUIRY_RATE_LIMIT)` from the day it was written, and
 * `ENQUIRY_RATE_LIMIT` was never declared in wrangler.jsonc -- nor did any KV
 * namespace exist on the account. Because the code fails open by design
 * (`if (!kv || !ip) return true`), production silently ran with NO enquiry
 * rate limiting for months while the source read as though it had some.
 * Nothing failed, nothing logged, and no existing validator looked at the gap
 * between what the Worker reads and what the config provides. This closes
 * that specific blind spot.
 *
 * A fail-open binding is the dangerous case precisely BECAUSE it is silent:
 * a missing binding that threw would have been noticed on the first request.
 *
 * Secrets are deliberately NOT in wrangler.jsonc (they are set with
 * `wrangler secret put` and must never be committed), so they are listed
 * below instead. Adding a name here is a conscious statement that it is a
 * real secret set outside the repo -- not a way to silence this check.
 */
import { readFile, readdir } from 'node:fs/promises';
import { join, extname } from 'node:path';

const CONFIG = 'wrangler.jsonc';
const SCAN_DIRS = ['functions', 'src/worker'];

/** Secrets set via `wrangler secret put`, never committed. Verified present
 *  on the deployed Worker via `wrangler versions view` on 2026-09-08. */
const KNOWN_SECRETS = new Set([
  'RESEND_API_KEY',
  'TURNSTILE_SECRET_KEY',
  'GSC_SERVICE_ACCOUNT_JSON',
]);

const stripJsonc = (s) =>
  s.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/.*$/gm, '$1');

const config = JSON.parse(stripJsonc(await readFile(CONFIG, 'utf8')));

const declared = new Set();
if (config.assets?.binding) declared.add(config.assets.binding);
for (const d of config.d1_databases ?? []) declared.add(d.binding);
for (const k of config.kv_namespaces ?? []) declared.add(k.binding);
for (const r of config.r2_buckets ?? []) declared.add(r.binding);
for (const q of config.queues?.producers ?? []) declared.add(q.binding);
for (const s of config.services ?? []) declared.add(s.binding);
for (const name of Object.keys(config.vars ?? {})) declared.add(name);

async function* walk(dir) {
  let entries;
  try { entries = await readdir(dir, { withFileTypes: true }); } catch { return; }
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === '__tests__' || e.name === 'node_modules') continue;
      yield* walk(full);
    } else if (['.ts', '.mts', '.js', '.mjs'].includes(extname(e.name))) {
      yield full;
    }
  }
}

const used = new Map(); // name -> Set of files
for (const dir of SCAN_DIRS) {
  for await (const file of walk(dir)) {
    const text = await readFile(file, 'utf8');
    for (const m of text.matchAll(/\benv\.([A-Z][A-Z0-9_]*)\b/g)) {
      if (!used.has(m[1])) used.set(m[1], new Set());
      used.get(m[1]).add(file);
    }
  }
}

const problems = [];
for (const [name, files] of [...used].sort()) {
  if (declared.has(name) || KNOWN_SECRETS.has(name)) continue;
  problems.push(`  x env.${name} is read in ${[...files].join(', ')} but is neither declared in ${CONFIG} nor a known secret`);
}

console.log(`Worker binding check -- ${used.size} env reference(s) across ${SCAN_DIRS.join(', ')}`);
console.log(`  declared in ${CONFIG}: ${[...declared].sort().join(', ') || '(none)'}`);
console.log(`  known secrets:        ${[...KNOWN_SECRETS].sort().join(', ')}`);

if (problems.length) {
  console.error(`\nFAIL: ${problems.length} problem(s) found.\n${problems.join('\n')}`);
  console.error(`\nEither declare the binding in ${CONFIG}, or -- if it is genuinely a secret set with \`wrangler secret put\` -- add it to KNOWN_SECRETS in this script with a note saying so.`);
  process.exit(1);
}
console.log('PASS: every env reference is backed by a declared binding or a known secret.');
