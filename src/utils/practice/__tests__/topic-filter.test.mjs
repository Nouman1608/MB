import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { questionMatchesTopic, topicFilterIndex, resolveTopicFilter, questionsForTopic, retestPath, coreFilterApplies, coreFilterNote, RETEST_MIN_QUESTIONS } from '../topic-filter.ts';

const q = (id, keys, tier) => ({ id, topics: keys.map((k) => ({ key: k, label: `L ${k}` })), ...(tier ? { tier } : {}) });
const bank = [
  q('a', ['metals/reactivity-series'], 'core'),
  q('b', ['metals/reactivity-series', 'metals/extraction'], 'both'),
  q('c', ['metals/alloys'], 'supplement'),
  q('d', ['electrochemistry/electrolysis']),
  q('e', ['metalsx/other']),
];

test('a topic slug matches all its subtopics; a subtopic key matches exactly; no prefix collisions', () => {
  assert.ok(questionMatchesTopic(bank[0], 'metals'));
  assert.ok(questionMatchesTopic(bank[0], 'metals/reactivity-series'));
  assert.ok(!questionMatchesTopic(bank[0], 'metals/extraction'));
  assert.ok(!questionMatchesTopic(bank[4], 'metals'), "'metalsx/...' is not in topic 'metals'");
  assert.ok(!questionMatchesTopic(bank[0], 'metals/reactivity'), 'no partial subtopic match');
});

test('index: labels, per-question counts and Core counts', () => {
  const idx = topicFilterIndex(bank, { metals: 'Metals' });
  assert.deepEqual(idx.metals, { label: 'Metals', count: 3, coreCount: 2, supplementCount: 1, untaggedCount: 0 });
  assert.deepEqual(idx['metals/reactivity-series'], { label: 'L metals/reactivity-series', count: 2, coreCount: 2, supplementCount: 0, untaggedCount: 0 });
  assert.deepEqual(idx.electrochemistry, { label: 'electrochemistry', count: 1, coreCount: 1, supplementCount: 0, untaggedCount: 1 });
});

test('unknown, empty and inherited keys are ignored', () => {
  const idx = topicFilterIndex(bank);
  assert.equal(resolveTopicFilter('metals', idx), 'metals');
  assert.equal(resolveTopicFilter('nope', idx), null);
  assert.equal(resolveTopicFilter('', idx), null);
  assert.equal(resolveTopicFilter(null, idx), null);
  assert.equal(resolveTopicFilter('constructor', idx), null);
  assert.equal(resolveTopicFilter('__proto__', idx), null);
  assert.equal(resolveTopicFilter('<script>', idx), null);
});

test('Core only leaves out Extended-only (supplement) questions and keeps untagged ones', () => {
  assert.deepEqual(questionsForTopic(bank, 'metals').map((x) => x.id), ['a', 'b', 'c']);
  assert.deepEqual(questionsForTopic(bank, 'metals', { coreOnly: true }).map((x) => x.id), ['a', 'b']);
  assert.deepEqual(questionsForTopic(bank, 'electrochemistry', { coreOnly: true }).map((x) => x.id), ['d']);
});

test('retest path', () => {
  assert.equal(retestPath('0620', 'metals'), '/practice/0620/?topic=metals');
  assert.equal(retestPath('0620', 'metals/alloys', { coreOnly: true }), '/practice/0620/?topic=metals%2Falloys&tier=core');
  assert.equal(RETEST_MIN_QUESTIONS, 2);
});

test('"Core only" applies only to a topic with an Extended-only question (untagged banks such as 0610/0625)', () => {
  const idx = topicFilterIndex(bank);
  assert.equal(coreFilterApplies(idx.metals), true, 'metals has an Extended-only question');
  assert.equal(coreFilterApplies(idx['metals/reactivity-series']), false, 'tagged but nothing Extended-only: tier=core would remove nothing');
  assert.equal(coreFilterApplies(idx.electrochemistry), false, 'untagged only');
  assert.equal(coreFilterApplies(undefined), false);
  // A bank with no tier tags at all (every 0610 and 0625 question today).
  const untagged = topicFilterIndex([q('x', ['cells/structure']), q('y', ['cells/structure', 'cells/transport'])]);
  assert.ok(Object.values(untagged).every((e) => !coreFilterApplies(e)));
  // The banner never calls untagged questions Core.
  assert.equal(coreFilterNote(0), 'Core only');
  assert.equal(coreFilterNote(3), 'Extended-only questions left out; 3 not yet tagged Core or Extended');
});

test('real banks: the Core filter is offered exactly where it removes a question', async () => {
  const { flagshipSpecs } = await import('../../academic/index.ts');
  const { buildClientQuestions } = await import('../client-questions.ts');
  let checked = 0;
  for (const spec of flagshipSpecs()) {
    const qs = buildClientQuestions(spec);
    if (qs.length === 0) continue;
    for (const [key, e] of Object.entries(topicFilterIndex(qs))) {
      const removes = questionsForTopic(qs, key, { coreOnly: true }).length < questionsForTopic(qs, key).length;
      assert.equal(coreFilterApplies(e), removes, `${spec.code} ${key}`);
      assert.equal(e.untaggedCount, questionsForTopic(qs, key).filter((x) => !x.tier).length, `${spec.code} ${key} untagged`);
      checked++;
    }
  }
  assert.ok(checked > 100, `checked ${checked} topic keys`);
});

// The practice page's inline script cannot import modules, so it carries one-line
// copies of these helpers. Extract them from the page and run them against the util.
function inlineHelpers() {
  const here = path.dirname(fileURLToPath(import.meta.url));
  const page = readFileSync(path.resolve(here, '../../../pages/practice/[code]/index.astro'), 'utf8');
  const names = ['matchesTopic', 'topicPoolOf', 'retestHrefFor', 'coreFilterNote'];
  const src = names.map((n) => {
    const m = page.match(new RegExp(`^\\s*function ${n}\\(.*\\}$`, 'm'));
    assert.ok(m, `inline ${n} found as a one-line function`);
    return m[0];
  }).join('\n');
  return { page, fns: new Function(`${src}\nreturn { ${names.join(', ')} };`)() };
}

test("the practice page's inline helpers behave exactly like the util", () => {
  const { fns } = inlineHelpers();
  const keys = ['metals', 'metals/reactivity-series', 'metals/alloys', 'metals/', 'metalsx', 'electrochemistry', 'nope'];
  for (const key of keys) {
    for (const x of bank) assert.equal(fns.matchesTopic(x, key), questionMatchesTopic(x, key), `match ${x.id} ${key}`);
    for (const coreOnly of [false, true]) {
      assert.deepEqual(fns.topicPoolOf(bank, key, coreOnly).map((x) => x.id), questionsForTopic(bank, key, { coreOnly }).map((x) => x.id), `pool ${key} ${coreOnly}`);
      assert.equal(fns.retestHrefFor('/practice/0620/', key, coreOnly), retestPath('0620', key, { coreOnly }), `href ${key} ${coreOnly}`);
    }
  }
  for (const n of [0, 1, 16]) assert.equal(fns.coreFilterNote(n), coreFilterNote(n));
});

test('the practice page only accepts its own keys, gates tier=core on the build-time flag, and sets labels as text', () => {
  const { page } = inlineHelpers();
  assert.match(page, /Object\.prototype\.hasOwnProperty\.call\(topicFilters, t\)/);
  assert.match(page, /topicCoreOnly = params\.get\('tier'\) === 'core' && coreApplies\(t\)/);
  assert.match(page, /function coreApplies\(key\) \{ return !!tiered && Object\.prototype\.hasOwnProperty\.call\(topicFilters, key\) && topicFilters\[key\]\[1\] === 1; \}/);
  // The build-time flag comes from the util's rule.
  assert.match(page, /\[v\.label, tiered && coreFilterApplies\(v\) \? 1 : 0\]/);
  assert.match(page, /els\.topicLabel\.textContent = topicFilters\[activeTopic\]\[0\]/);
});
