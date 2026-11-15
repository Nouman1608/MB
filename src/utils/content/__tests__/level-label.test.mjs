import { test } from 'node:test';
import assert from 'node:assert/strict';
import { resourceLevelLabel, levelDisplay } from '../level-label.ts';

// D-450 (OQ-4): AQA A-level AS content is not the AQA AS Level qualification.
test('AQA 7405/7402 stage AS reads "A Level (AS content)", never "AS Level"', () => {
  const l = resourceLevelLabel(['a-levels'], 'AS', ['a-level'], ['aqa']);
  assert.equal(l, 'A LEVEL (AS CONTENT)');
  assert.equal(levelDisplay(l), 'A Level (AS content)');
});

test('the standalone AQA AS Level qualification keeps "AS Level"', () => {
  assert.equal(resourceLevelLabel(['a-levels'], undefined, ['as-level'], ['aqa']), 'AS LEVEL');
});

test('Cambridge, OxfordAQA and Pearson International AS stages keep "AS Level"', () => {
  for (const b of ['cambridge', 'oxfordaqa', 'edexcel']) assert.equal(resourceLevelLabel(['a-levels'], 'AS', ['a-level'], [b]), 'AS LEVEL', b);
});

test('A-level stage and no stage are unchanged', () => {
  assert.equal(resourceLevelLabel(['a-levels'], 'A', ['a-level'], ['aqa']), 'A LEVEL');
  assert.equal(resourceLevelLabel(['a-levels'], undefined, ['a-level'], ['aqa']), 'A LEVELS');
  assert.equal(resourceLevelLabel(['igcse'], undefined, ['igcse'], ['cambridge']), 'IGCSE');
});
