#!/usr/bin/env node
/**
 * D-532c -- insert the approved seoDescription drafts into the AP resource frontmatter.
 *
 *   node reports/owner-decisions/apply-ap-seo-descriptions.mjs            # dry run (default)
 *   node reports/owner-decisions/apply-ap-seo-descriptions.mjs --write    # apply
 *   node reports/owner-decisions/apply-ap-seo-descriptions.mjs --tsv path # another TSV
 *
 * Reads reports/owner-decisions/ap-seo-descriptions-draft.tsv (file, current_snippet, draft,
 * length). Edit the `draft` column first for anything the owner changes. For each row it adds
 * `seoDescription: "<draft>"` on the line after `description:` in
 * src/content/ap-resources/<file>. Idempotent: a file that already has the same value is
 * left alone; a different existing value is replaced. Drafts outside 70-160 characters, duplicates
 * and drafts equal to any resource's description are refused before anything is written.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..', '..');
const base = path.join(root, 'src', 'content', 'ap-resources');
const args = process.argv.slice(2);
const write = args.includes('--write');
const tsvPath = args.includes('--tsv') ? path.resolve(args[args.indexOf('--tsv') + 1]) : path.join(here, 'ap-seo-descriptions-draft.tsv');

const rows = fs.readFileSync(tsvPath, 'utf8').split(/\r?\n/).filter(Boolean).slice(1).map((l) => {
  const [file, , draft] = l.split('\t');
  return { file: file.trim(), draft: (draft ?? '').trim() };
});

const readFm = (text) => {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  return m ? m[1] : '';
};
const descOf = (text) => {
  const m = readFm(text).match(/^description:\s*(.+)$/m);
  if (!m) return '';
  try { return JSON.parse(m[1]); } catch { return m[1].replace(/^["']|["']$/g, ''); }
};

// Every existing resource description, to refuse a draft that duplicates one.
const allDescriptions = new Set();
const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).forEach((e) => {
  const p = path.join(dir, e.name);
  if (e.isDirectory()) walk(p); else if (e.name.endsWith('.md')) allDescriptions.add(descOf(fs.readFileSync(p, 'utf8')));
});
walk(base);

const errors = [];
const seen = new Map();
for (const r of rows) {
  if (!fs.existsSync(path.join(base, r.file))) errors.push(`${r.file}: file not found`);
  if (r.draft.length < 70 || r.draft.length > 160) errors.push(`${r.file}: ${r.draft.length} characters (need 70-160)`);
  if (/<[^>]+>/.test(r.draft)) errors.push(`${r.file}: contains markup`);
  if (allDescriptions.has(r.draft)) errors.push(`${r.file}: identical to a resource description`);
  if (seen.has(r.draft)) errors.push(`${r.file}: duplicates ${seen.get(r.draft)}`);
  seen.set(r.draft, r.file);
}
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

let added = 0, replaced = 0, same = 0;
for (const r of rows) {
  const p = path.join(base, r.file);
  const text = fs.readFileSync(p, 'utf8');
  const eol = text.includes('\r\n') ? '\r\n' : '\n';
  const line = `seoDescription: ${JSON.stringify(r.draft)}`;
  const existing = readFm(text).match(/^seoDescription:.*$/m);
  let next;
  if (existing) {
    if (existing[0] === line) { same++; continue; }
    next = text.replace(/^seoDescription:.*$/m, line);
    replaced++;
  } else {
    if (!/^description:.*$/m.test(readFm(text))) { console.error(`${r.file}: no description line`); process.exit(1); }
    next = text.replace(/^(description:.*)$/m, `$1${eol}${line}`);
    added++;
  }
  if (write) fs.writeFileSync(p, next);
}
console.log(`${write ? 'Wrote' : 'Dry run (use --write to apply)'}: ${added} added, ${replaced} replaced, ${same} already current, ${rows.length} rows.`);
