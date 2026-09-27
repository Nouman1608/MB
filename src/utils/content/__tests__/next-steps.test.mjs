import { test } from 'node:test';
import assert from 'node:assert/strict';
import { computeNextSteps, onThisTopicLinks } from '../next-steps.ts';

const course = { boardSlug: 'cambridge', qualificationSlug: 'igcse', subjectSlug: 'chemistry', board: 'Cambridge', qualification: 'IGCSE', subject: 'Chemistry' };
const topics = [{ slug: 'metals', name: 'Metals' }, { slug: 'electrochemistry', name: 'Electrochemistry' }];
const m = (topic, subtopic) => ({ qualification: 'igcse', topic, ...(subtopic ? { subtopic } : {}) });
const res = (id, kind, mappings, title = id) => ({ id, title, kind, syllabusTopics: mappings });

const base = {
  resourceId: 'metals-reactivity-practice',
  kind: 'practice',
  syllabusTopics: [m('metals', 'reactivity-series')],
  course,
  code: '0620',
  topics,
  courseResources: [
    res('metals-reactivity-practice', 'practice', [m('metals', 'reactivity-series')]),
    res('metals-notes', 'review', [m('metals', 'reactivity-series')], 'Metals: Revision Notes'),
    res('metals-extraction-notes', 'review', [m('metals', 'extraction')]),
    res('metals-guide', 'learn', [m('metals', 'extraction')], 'Metals Study Guide'),
    res('electrolysis-notes', 'review', [m('electrochemistry', 'electrolysis')]),
  ],
  diagnostic: { href: '/practice/0620/diagnostic/core/', code: '0620', scopeLabel: 'Six topics' },
  selfCheckPractice: true,
  resourceHref: (id) => `/resources/${id}/`,
  checklistsBase: '/checklists/',
  hubHref: '/cambridge/igcse/chemistry/',
};

test('practice page: notes on the same subtopic first, then a guide on the topic, then diagnostic, checklist, planner', () => {
  const steps = computeNextSteps(base);
  assert.deepEqual(steps.map((s) => [s.kind, s.href]), [
    ['review', '/resources/metals-notes/'],
    ['learn', '/resources/metals-guide/'],
    ['diagnostic', '/practice/0620/diagnostic/core/'],
    ['checklist', '/checklists/cambridge/igcse/chemistry/'],
    ['planner', '/revision-planner/?course=cambridge%2Figcse%2Fchemistry'],
  ]);
  assert.equal(steps[0].label, 'Revision notes for this topic');
  assert.equal(steps[0].detail, 'Metals: Metals: Revision Notes');
  assert.equal(steps[2].detail, '0620 diagnostic: Six topics');
  assert.equal(steps[3].detail, 'Printable 0620 syllabus checklist');
});

test('never links the page itself, and kinds follow the page kind (learn -> practice, review)', () => {
  const steps = computeNextSteps({ ...base, resourceId: 'metals-guide', kind: 'learn', syllabusTopics: [m('metals', 'extraction')] });
  assert.ok(!steps.some((s) => s.href === '/resources/metals-guide/'));
  assert.deepEqual(steps.slice(0, 2).map((s) => [s.kind, s.href]), [
    ['practice', '/resources/metals-reactivity-practice/'],
    ['review', '/resources/metals-extraction-notes/'],
  ]);
});

test('no diagnostic: self-check practice; no topic record: hub instead of checklist', () => {
  const steps = computeNextSteps({ ...base, diagnostic: undefined, topics: undefined });
  assert.deepEqual(steps.map((s) => s.kind), ['review', 'learn', 'practice_tool', 'hub', 'planner']);
  assert.equal(steps[2].href, '/practice/0620/');
  assert.equal(steps[3].detail, 'Cambridge IGCSE Chemistry (0620)');
  // Without a topic record there is no topic name in the detail.
  assert.equal(steps[0].detail, 'Metals: Revision Notes');
});

test('no course: only the generic planner link', () => {
  const steps = computeNextSteps({ ...base, course: undefined });
  assert.deepEqual(steps, [{ href: '/revision-planner/', label: 'Plan your revision', detail: 'A free weekly plan that puts weak topics first', kind: 'planner' }]);
});

test('On this topic: study links in learn/review/practice order, then Test yourself; never the page itself', () => {
  const steps = computeNextSteps(base);
  const links = onThisTopicLinks(steps, '/resources/metals-reactivity-practice/');
  assert.deepEqual(links.map((l) => [l.label, l.href]), [
    ['Study guide', '/resources/metals-guide/'],
    ['Revision notes', '/resources/metals-notes/'],
    ['Test yourself', '/practice/0620/diagnostic/core/'],
  ]);
  assert.equal(links[1].title, 'Metals: Revision Notes');
  // A self link is dropped even if a step pointed to it.
  const self = onThisTopicLinks(steps, '/resources/metals-notes/');
  assert.ok(!self.some((l) => l.href === '/resources/metals-notes/'));
});

test('On this topic is empty without a same-topic link, even when a diagnostic exists', () => {
  const steps = computeNextSteps({ ...base, courseResources: [], syllabusTopics: [m('metals', 'reactivity-series')] });
  assert.ok(steps.some((s) => s.kind === 'diagnostic'));
  assert.deepEqual(onThisTopicLinks(steps, '/resources/metals-reactivity-practice/'), []);
  assert.deepEqual(onThisTopicLinks(computeNextSteps({ ...base, syllabusTopics: [] }), '/x/'), []);
});
