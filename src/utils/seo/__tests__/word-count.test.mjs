import { test } from 'node:test';
import assert from 'node:assert/strict';
import { writeFileSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, relative } from 'node:path';
import { bodyWordCount, resourceWordCount } from '../word-count.ts';

test('bodyWordCount: counts the words after the front matter only', () => {
  assert.equal(bodyWordCount('---\ntitle: "A long frontmatter title here"\n---\n\none two three\nfour'), 4);
});

test('bodyWordCount: a --- inside the body does not cut the body short', () => {
  assert.equal(bodyWordCount('---\ntitle: x\n---\nalpha beta\n\n---\n\ngamma delta epsilon'), 6);
});

test('bodyWordCount: an empty body is 0 words', () => {
  assert.equal(bodyWordCount('---\ntitle: x\n---\n'), 0);
});

test('resourceWordCount: reads a file by its project-relative path and caches it', () => {
  const dir = mkdtempSync(join(tmpdir(), 'wc-'));
  try {
    const file = join(dir, 'r.md');
    writeFileSync(file, '---\ntitle: x\n---\none two three');
    const rel = relative(process.cwd(), file);
    assert.equal(resourceWordCount(rel), 3);
    writeFileSync(file, '---\ntitle: x\n---\none two three four five');
    assert.equal(resourceWordCount(rel), 3, 'second call is served from the cache');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('resourceWordCount: a missing filePath throws instead of returning 0', () => {
  assert.throws(() => resourceWordCount(undefined), /no filePath/);
  assert.throws(() => resourceWordCount('src/content/resources/does-not-exist.md'));
});
