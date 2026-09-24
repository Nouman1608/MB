// D-330 -- TRIAL_TEACHERS must match the published teacher profiles exactly.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { TRIAL_TEACHERS } from '../../_lib/trial-teachers.ts';

test('TRIAL_TEACHERS lists exactly the person profiles in src/content/authors', () => {
  const people = {};
  for (const f of readdirSync('src/content/authors').filter((x) => x.endsWith('.md'))) {
    const fm = readFileSync(`src/content/authors/${f}`, 'utf8').split('\n---')[0];
    if (!/^entityType:\s*person\s*$/m.test(fm)) continue;
    people[f.replace(/\.md$/, '')] = fm.match(/^name:\s*"?([^"\n]+)"?/m)[1];
  }
  assert.deepEqual({ ...TRIAL_TEACHERS }, people);
});
