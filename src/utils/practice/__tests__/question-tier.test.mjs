import { test } from 'node:test';
import assert from 'node:assert/strict';
import { explicitTierFromLabel, combineTier } from '../question-tier.ts';

test('a label at the start of the question makes it Extended-only', () => {
  assert.equal(explicitTierFromLabel('**4.** *(0620 Extended, 5070 required)* Define an acid. **[2]**', '0620'), 'supplement');
  assert.equal(explicitTierFromLabel('*(Extended)* Find the arc length. [3]', '0580'), 'supplement');
  assert.equal(explicitTierFromLabel('**3.** *(Extended, E1.13)* Simplify.', '0580'), 'supplement');
  assert.equal(explicitTierFromLabel('**(a)** *(0620 Extended only, 5070 required)* State ...', '0620'), 'supplement');
  assert.equal(explicitTierFromLabel('*(0610 Extended)* Explain ...', '0610'), 'supplement');
});

test('a label for another syllabus code is ignored', () => {
  assert.equal(explicitTierFromLabel('*(0620 Extended, 5070 required)* Define ...', '0625'), undefined);
});

test('a full label only on a later part marks the question as mixed', () => {
  assert.equal(explicitTierFromLabel('**5.** (a) State ... [1]\n(b) *(0620 Extended, 5070 required)* Explain ... [2]', '0620'), 'both');
});

test('partial notes and unlabelled questions are ignored', () => {
  assert.equal(explicitTierFromLabel('**1.** Calculate ΔH. *(The sign of ΔH is 0620 Extended, 5070 required.)*', '0620'), undefined);
  assert.equal(explicitTierFromLabel('**2.** Name the gas.', '0620'), undefined);
  assert.equal(explicitTierFromLabel('*(Extended/Supplement — double bonds)* Draw ...', '0620'), undefined);
});

test('combineTier: supplement wins; a mixed label never demotes a supplement question', () => {
  assert.equal(combineTier('both', 'supplement'), 'supplement');
  assert.equal(combineTier('core', 'supplement'), 'supplement');
  assert.equal(combineTier(undefined, 'both'), 'both');
  assert.equal(combineTier('core', 'both'), 'both');
  assert.equal(combineTier('supplement', 'both'), 'supplement');
  assert.equal(combineTier('both', undefined), 'both');
  assert.equal(combineTier(undefined, undefined), undefined);
});
