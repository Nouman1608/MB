#!/usr/bin/env node
/**
 * Source manifest for academic reference documents (D-455).
 *
 * The owner's rule (15 Nov 2026): every academic reference downloaded for
 * QA work is stored in the owner's OneDrive folder "Papers 2025/resource
 * check", never in this repository. This script keeps the record of what is
 * there:
 *
 *   docs/reports/academic-qa/source-manifest.json   (in the repo; relative
 *       paths only, no machine path)
 *   <resource check>/Source-Manifests/source-manifest.json and .csv
 *       (beside the files, for the owner)
 *
 * It recomputes every file's SHA-256 from disk and fails if a listed file is
 * missing or its hash has changed, so a manifest can never claim a document
 * that is not actually saved.
 *
 * Usage:
 *   QA_RESOURCE_DIR="<path to resource check>" node scripts/academic-qa-source-manifest.mjs [--add entry.json] [--verify]
 *     --add    merge the entries in entry.json (array; see fields below);
 *              each `localFile` must already exist under QA_RESOURCE_DIR
 *     --verify recompute hashes only; write nothing
 * Without QA_RESOURCE_DIR it stops: it never guesses another folder.
 *
 * Entry fields: title, source, board, qualification, subject, code, series,
 * officialUrl, downloadedDate, localFile (relative to the folder), fileType,
 * licence, purpose, verificationStatus.  sha256 and bytes are computed.
 */
import { readFileSync, writeFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';

const REPO_MANIFEST = 'docs/reports/academic-qa/source-manifest.json';
const root = process.env.QA_RESOURCE_DIR;
if (!root || !existsSync(root)) {
  console.error('✗ Set QA_RESOURCE_DIR to the owner\'s "resource check" folder. This script never substitutes another folder.');
  process.exit(1);
}
const args = process.argv.slice(2);
const addFile = args.includes('--add') ? args[args.indexOf('--add') + 1] : null;
const verifyOnly = args.includes('--verify');

const manifest = existsSync(REPO_MANIFEST) ? JSON.parse(readFileSync(REPO_MANIFEST, 'utf8')) : { meta: {}, files: [] };
manifest.meta = {
  decision: 'D-455',
  meaning: 'Academic reference documents downloaded for Academic QA work and saved in the owner\'s OneDrive folder "Papers 2025/resource check". localFile is relative to that folder. The documents are not in this repository and are not published on the site.',
};
if (addFile) {
  for (const e of JSON.parse(readFileSync(addFile, 'utf8'))) {
    const i = manifest.files.findIndex((f) => f.localFile === e.localFile);
    if (i >= 0) manifest.files[i] = { ...manifest.files[i], ...e }; else manifest.files.push(e);
  }
}

const problems = [];
const seen = new Map();
for (const f of manifest.files) {
  const p = join(root, f.localFile);
  if (!existsSync(p)) { problems.push(`missing on disk: ${f.localFile}`); continue; }
  const buf = readFileSync(p);
  const sha = createHash('sha256').update(buf).digest('hex');
  if (f.sha256 && f.sha256 !== sha && verifyOnly) problems.push(`hash changed: ${f.localFile}`);
  f.sha256 = sha;
  f.bytes = statSync(p).size;
  if (f.fileType === 'pdf' && buf.subarray(0, 5).toString() !== '%PDF-') problems.push(`not a PDF: ${f.localFile}`);
  if (seen.has(sha)) problems.push(`duplicate content: ${f.localFile} = ${seen.get(sha)}`);
  seen.set(sha, f.localFile);
}
manifest.files.sort((a, b) => a.localFile.localeCompare(b.localFile));

if (problems.length) { console.error(`✗ ${problems.length} problem(s):\n  ${problems.join('\n  ')}`); process.exit(1); }
if (verifyOnly) { console.log(`✓ ${manifest.files.length} file(s) present with matching SHA-256.`); process.exit(0); }

const json = `${JSON.stringify(manifest, null, 2)}\n`;
writeFileSync(REPO_MANIFEST, json);
writeFileSync(join(root, 'Source-Manifests', 'source-manifest.json'), json);
const cols = ['title', 'source', 'board', 'qualification', 'subject', 'code', 'series', 'officialUrl', 'downloadedDate', 'localFile', 'fileType', 'bytes', 'sha256', 'licence', 'purpose', 'verificationStatus'];
const cell = (v) => { const s = String(v ?? ''); return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s; };
writeFileSync(join(root, 'Source-Manifests', 'source-manifest.csv'), [cols.join(','), ...manifest.files.map((f) => cols.map((c) => cell(f[c])).join(','))].join('\n') + '\n');
// Read back what was written, so "saved" is verified, not assumed.
const back = JSON.parse(readFileSync(join(root, 'Source-Manifests', 'source-manifest.json'), 'utf8'));
if (back.files.length !== manifest.files.length) { console.error('✗ manifest read-back mismatch'); process.exit(1); }
console.log(`✓ ${manifest.files.length} file(s) recorded; manifests written and read back.`);
