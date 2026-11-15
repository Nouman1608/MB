import { test } from 'node:test';
import assert from 'node:assert/strict';
import { syllabusPointsFor, topicRowSuffix, topicContextText } from '../syllabus-points.ts';

const chem = (syllabusTopics, extra = {}) => syllabusPointsFor({ boards: ['cambridge'], subject: 'chemistry', syllabusCodes: ['0620'], syllabusTopics, ...extra });
const ig = (topic, subtopic, coverage) => ({ qualification: 'igcse', topic, ...(subtopic ? { subtopic } : {}), ...(coverage ? { coverage } : {}) });

test('0620 points carry the verified tier; 5070 points carry none (not tiered)', () => {
  const g = syllabusPointsFor({
    boards: ['cambridge'], subject: 'chemistry', syllabusCodes: ['0620', '5070'],
    syllabusTopics: [
      { qualification: 'igcse', topic: 'stoichiometry', subtopic: 'the-mole-and-the-avogadro-constant' },
      { qualification: 'igcse', topic: 'stoichiometry', subtopic: 'relative-masses-of-atoms-and-molecules' },
      { qualification: 'o-level', topic: 'stoichiometry', subtopic: 'the-mole-and-the-avogadro-constant' },
    ],
  });
  const g0620 = g.find((x) => x.code === '0620');
  assert.ok(g0620 && g0620.tiered);
  assert.deepEqual(g0620.points.map((p) => [p.number, p.tier]), [['3.2', 'Core'], ['3.3', 'Core and Extended']]);
  const ol = g.find((x) => x.code === '5070');
  assert.ok(ol && !ol.tiered);
  assert.equal(ol.points[0].tier, undefined);
});

// D-448, finding A: the exact live mapping of
// igcse-chemistry-0620-elements-atomic-structure-and-isotopes.md.
test('partial coverage: a parent entry beside 3 of 7 subtopics is membership, never "(whole topic)"', () => {
  const [g] = chem([
    ig('atoms-elements-and-compounds'),
    ig('atoms-elements-and-compounds', 'elements-compounds-and-mixtures'),
    ig('atoms-elements-and-compounds', 'atomic-structure-and-the-periodic-table'),
    ig('atoms-elements-and-compounds', 'isotopes'),
  ]);
  assert.deepEqual(g.points.map((p) => p.number), ['2.1', '2.2', '2.3']);
  assert.ok(g.points.every((p) => p.level === 'subtopic'));
  assert.ok(!g.points.some((p) => /whole topic/.test(p.name)));
  assert.deepEqual(g.topicContext, [{ number: '2', name: 'Atoms, elements and compounds', listed: 3, recorded: 7, recordComplete: true }]);
  assert.equal(topicContextText(g.topicContext[0]), '3 of the 7 subtopics in topic 2, Atoms, elements and compounds');
});

test('full coverage is shown only from an explicit, validated claim', () => {
  const [claimed] = chem([ig('chemical-energetics', undefined, 'whole-topic')]);
  assert.equal(claimed.points[0].level, 'topic');
  assert.equal(claimed.points[0].coverage, 'whole-topic');
  assert.equal(`${claimed.points[0].name}${topicRowSuffix(claimed.points[0].coverage)}`, 'Chemical energetics (whole topic)');
  const [unclaimed] = chem([ig('chemical-energetics')]);
  assert.equal(`${unclaimed.points[0].name}${topicRowSuffix(unclaimed.points[0].coverage)}`, 'Chemical energetics (topic-level mapping)');
});

test('a resource spanning several topics keeps each topic separate', () => {
  const [g] = chem([
    ig('atoms-elements-and-compounds'),
    ig('atoms-elements-and-compounds', 'isotopes'),
    ig('stoichiometry'),
  ]);
  assert.deepEqual(g.points.map((p) => [p.number, p.level]), [['2.3', 'subtopic'], ['3', 'topic']]);
  assert.equal(g.topicContext.length, 1);
  assert.equal(g.topicContext[0].number, '2');
});

test('Core-only and Extended-only points carry their verified tier; Core-only claim reads "all Core content"', () => {
  const [g] = chem([ig('atoms-elements-and-compounds', 'elements-compounds-and-mixtures'), ig('atoms-elements-and-compounds', 'metallic-bonding')]);
  assert.deepEqual(g.points.map((p) => [p.number, p.tier]), [['2.1', 'Core'], ['2.7', 'Extended only']]);
  const [core] = chem([ig('atoms-elements-and-compounds', undefined, 'whole-topic-core')]);
  assert.equal(topicRowSuffix(core.points[0].coverage), ' (all Core content)');
});

test('all subtopics listed: context says so, still no "(whole topic)" without a claim', () => {
  const subs = ['solids-liquids-and-gases', 'diffusion'];
  const [g] = chem([ig('states-of-matter'), ...subs.map((s) => ig('states-of-matter', s))]);
  assert.equal(topicContextText(g.topicContext[0]), 'all 2 subtopics in topic 1, States of matter');
});

// 5014 keeps a full 2025-2026 record (still sat) beside the current 2027-2029
// one, with different topic slugs and different children.
const em = (series, syllabusTopics) => syllabusPointsFor({ boards: ['cambridge'], subject: 'environmental-management', syllabusCodes: ['5014'], syllabusSeries: series, syllabusTopics });
const ol = (topic, subtopic) => ({ qualification: 'o-level', topic, ...(subtopic ? { subtopic } : {}) });

test('a resource on an older series is numbered against that series, not the current one', () => {
  const [g] = em('2025-2026', [ol('energy-and-the-environment-5014', 'energy-demand-5014')]);
  assert.equal(g.series, '2025-2026');
  assert.deepEqual(g.points.map((p) => [p.number, p.name]), [['2.3', 'Energy demand']]);
  // Without the series it resolves to the current record, where those slugs do not exist.
  assert.deepEqual(em(undefined, [ol('energy-and-the-environment-5014', 'energy-demand-5014')]), []);
});

test('when a parent topic\'s children change between series, counts follow the resource\'s own series', () => {
  const [old] = em('2025-2026', [ol('rocks-and-minerals-and-their-exploitation-5014'), ol('rocks-and-minerals-and-their-exploitation-5014', 'formation-of-rocks-5014')]);
  assert.deepEqual([old.topicContext[0].listed, old.topicContext[0].recorded, old.topicContext[0].recordComplete], [1, 5, false]);
  assert.match(topicContextText(old.topicContext[0]), /1 of the 5 subtopics recorded here/);
  const [cur] = em('2027-2029', [ol('natural-resources-5014-2027'), ol('natural-resources-5014-2027', 'formation-of-rocks-5014-2027')]);
  assert.deepEqual([cur.topicContext[0].listed, cur.topicContext[0].recorded, cur.topicContext[0].recordComplete], [1, 6, true]);
});

test('a "future" record is never used, even when the resource names its series', () => {
  const [g] = syllabusPointsFor({ boards: ['cambridge'], subject: 'mathematics', syllabusCodes: ['0580'], syllabusSeries: '2028-2030',
    syllabusTopics: [{ qualification: 'igcse', topic: 'algebra-and-graphs-cambridge-igcse-maths', subtopic: 'introduction-to-algebra-cambridge-igcse-maths' }] });
  assert.equal(g.series, '2025-2027');
});

test('9701 groups report the stage; a topic-level-only mapping is not called the whole topic', () => {
  const g = syllabusPointsFor({
    boards: ['cambridge'], subject: 'chemistry', syllabusCodes: ['9701'],
    syllabusTopics: [{ qualification: 'a-level', topic: 'as-atomic-structure' }],
  });
  assert.equal(g.length, 1);
  assert.equal(g[0].stage, 'AS Level');
  assert.equal(g[0].points[0].name, 'Atomic structure');
  assert.equal(g[0].points[0].level, 'topic');
  assert.equal(topicRowSuffix(g[0].points[0].coverage), ' (topic-level mapping)');
});

test('unknown mappings and other boards give nothing', () => {
  assert.deepEqual(syllabusPointsFor({ boards: ['ib'], subject: 'chemistry', syllabusTopics: [{ qualification: 'igcse', topic: 'stoichiometry' }] }), []);
});

// D-450 (OQ-4): AQA's AS is a separate qualification (7404), so 7405's AS part is "AS content".
test('AQA 7405 AS-stage points say "AS content of the A Level"; Cambridge 9701 keeps "AS Level"', () => {
  const [aqa] = syllabusPointsFor({ boards: ['aqa'], subject: 'chemistry', syllabusCodes: ['7405'], syllabusTopics: [{ qualification: 'a-level', topic: 'atomic-structure-7405' }] });
  assert.equal(aqa.stage, 'AS content of the A Level');
  const [cam] = syllabusPointsFor({ boards: ['cambridge'], subject: 'chemistry', syllabusCodes: ['9701'], syllabusTopics: [{ qualification: 'a-level', topic: 'as-atomic-structure' }] });
  assert.equal(cam.stage, 'AS Level');
});
