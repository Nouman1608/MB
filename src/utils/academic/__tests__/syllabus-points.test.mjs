import { test } from 'node:test';
import assert from 'node:assert/strict';
import { syllabusPointsFor } from '../syllabus-points.ts';

test('0620 points carry the verified tier; 5070 points carry none (not tiered)', () => {
  const g = syllabusPointsFor({
    boards: ['cambridge'], subject: 'chemistry', syllabusCodes: ['0620', '5070'],
    syllabusTopics: [
      { qualification: 'igcse', topic: 'stoichiometry', subtopic: 'the-mole-and-the-avogadro-constant' },
      { qualification: 'igcse', topic: 'stoichiometry', subtopic: 'relative-masses-of-atoms-and-molecules' },
      { qualification: 'o-level', topic: 'stoichiometry', subtopic: 'the-mole-and-the-avogadro-constant' },
    ],
  });
  const ig = g.find((x) => x.code === '0620');
  assert.ok(ig && ig.tiered);
  assert.deepEqual(ig.points.map((p) => [p.number, p.tier]), [['3.2', 'Core'], ['3.3', 'Core and Extended']]);
  const ol = g.find((x) => x.code === '5070');
  assert.ok(ol && !ol.tiered);
  assert.equal(ol.points[0].tier, undefined);
});

test('9701 groups report the stage and a topic-level mapping is shown as the whole topic', () => {
  const g = syllabusPointsFor({
    boards: ['cambridge'], subject: 'chemistry', syllabusCodes: ['9701'],
    syllabusTopics: [{ qualification: 'a-level', topic: 'as-atomic-structure' }],
  });
  assert.equal(g.length, 1);
  assert.equal(g[0].stage, 'AS Level');
  assert.equal(g[0].points[0].name, 'Atomic structure (whole topic)');
});

test('unknown mappings and other boards give nothing', () => {
  assert.deepEqual(syllabusPointsFor({ boards: ['ib'], subject: 'chemistry', syllabusTopics: [{ qualification: 'igcse', topic: 'stoichiometry' }] }), []);
});
