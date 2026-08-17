#!/usr/bin/env node
/**
 * Validates that resource/article frontmatter only claims academic
 * combinations that are ACTIVE in the master matrix.
 *
 * Prevents a resource tagged e.g. board: aqa + qualification: o-level from
 * implying an offering that does not exist. Runs in the build.
 */
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { execSync } from 'node:child_process';

const load = (file) => JSON.parse(execSync(
  `node --experimental-strip-types --no-warnings -e "` +
  `import('./${file}').then(m => process.stdout.write(JSON.stringify(m.default ?? m)))"`,
  { encoding: 'utf8', cwd: process.cwd() }));

const { MATRIX } = load('src/data/academic/matrix.ts');
const active = new Set(
  MATRIX.filter((c) => c.status === 'ACTIVE').map((c) => `${c.boardSlug}|${c.qualificationSlug}`),
);
const activeBoards = new Set(MATRIX.filter((c) => c.status === 'ACTIVE').map((c) => c.boardSlug));
const activeQuals = new Set(MATRIX.filter((c) => c.status === 'ACTIVE').map((c) => c.qualificationSlug));

const listField = (fm, name) => {
  const m = fm.match(new RegExp(`^${name}:\\s*\\[(.*?)\\]`, 'm'));
  if (!m) return [];
  return m[1].split(',').map((v) => v.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
};

const errors = [];
for (const dir of ['src/content/resources', 'src/content/articles']) {
  let files = [];
  try { files = (await readdir(dir)).filter((f) => f.endsWith('.md')); } catch { continue; }
  for (const file of files) {
    const raw = await readFile(join(dir, file), 'utf8');
    const fm = raw.split('---')[1] ?? '';
    const boards = listField(fm, 'boards');
    const quals = listField(fm, 'qualifications');
    const at = `${dir}/${file}`;

    for (const b of boards) if (!activeBoards.has(b)) errors.push(`${at}: board "${b}" has no ACTIVE combination`);
    for (const q of quals) if (!activeQuals.has(q)) errors.push(`${at}: qualification "${q}" has no ACTIVE combination`);
    for (const b of boards) for (const q of quals) {
      if (!active.has(`${b}|${q}`)) errors.push(`${at}: "${b} + ${q}" is not an ACTIVE combination`);
    }
  }
}

if (errors.length) {
  console.error(`\nAcademic content validation FAILED — ${errors.length} problem(s):\n`);
  for (const e of errors) console.error(`  • ${e}`);
  console.error('');
  process.exit(1);
}
console.log('Academic content tagging OK.');
