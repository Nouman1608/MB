import { test } from 'node:test';
import assert from 'node:assert/strict';
import { resourceSearchTitle, coursesForResource, courseLabel, RESOURCE_TITLE_TARGET } from '../resource-title.ts';

const physics = { resourceType: 'study-guides', subject: 'physics', boards: ['cambridge'], qualifications: ['a-level'], syllabusCodes: ['9702'] };
const chemistryBoth = { subject: 'chemistry', boards: ['cambridge'], qualifications: ['igcse', 'o-level'], syllabusCodes: ['0620', '5070'] };

test('an editorial seoTitle always wins', () => {
  assert.equal(resourceSearchTitle({ ...physics, title: 'Electric Fields', seoTitle: 'Hand-written title' }), 'Hand-written title');
});

test('a title that already names its board is left alone', () => {
  const title = 'Cambridge A Level Physics (9702): Production and use of X-rays -- Practice Questions';
  assert.equal(resourceSearchTitle({ ...physics, resourceType: 'practice-questions', title }), title);
});

test('a title that already carries its syllabus code is left alone', () => {
  const title = '9702 Past Papers, Grade Thresholds & Examiner Reports';
  assert.equal(resourceSearchTitle({ ...physics, resourceType: 'past-papers', title }), title);
});

test('a bare topic title gains its course, code and type', () => {
  assert.equal(resourceSearchTitle({ ...physics, title: 'Capacitance' }), 'Capacitance: Cambridge A Level Physics (9702) Study Guide');
});

test('the resource type from the authored title is kept, so sibling pages stay distinct', () => {
  const base = { subject: 'biology', boards: ['cambridge'], qualifications: ['o-level'], syllabusCodes: ['5090'] };
  const guide = resourceSearchTitle({ ...base, resourceType: 'study-guides', title: 'Enzymes' });
  const notes = resourceSearchTitle({ ...base, resourceType: 'revision-notes', title: 'Enzymes: Revision Notes' });
  const practice = resourceSearchTitle({ ...base, resourceType: 'practice-questions', title: 'Enzymes: Practice Questions' });
  assert.equal(practice, 'Enzymes: Cambridge O Level Biology (5090) Practice Questions');
  assert.match(notes, /Revision Notes$/);
  assert.equal(new Set([guide, notes, practice]).size, 3);
});

test('a resource mapped to two courses names both, not one', () => {
  const title = resourceSearchTitle({ ...chemistryBoth, resourceType: 'revision-notes', title: 'Polymers: Revision Notes' });
  assert.equal(title, 'Polymers: Cambridge IGCSE and O Level Chemistry Revision Notes');
  assert.equal(coursesForResource(chemistryBoth).length, 2);
});

test('a title naming the qualification but not the board gains the board, and the code when it fits', () => {
  const base = { subject: 'chemistry', boards: ['cambridge'], qualifications: ['a-level'], syllabusCodes: ['9701'], resourceType: 'revision-notes' };
  assert.equal(resourceSearchTitle({ ...base, title: 'AS Chemistry: Group 2 — Revision Notes' }), 'AS Chemistry: Group 2 — Revision Notes (Cambridge 9701)');
  // 63 characters with the code, 58 without: the form within the target length is used.
  assert.equal(resourceSearchTitle({ ...base, title: 'AS Chemistry: Halogenoalkanes — Revision Notes' }), 'AS Chemistry: Halogenoalkanes — Revision Notes (Cambridge)');
});

test('a resource that matches no published course keeps its authored title', () => {
  const r = { resourceType: 'study-guides', subject: 'physics', boards: ['cambridge'], qualifications: ['ib-dp'], syllabusCodes: [], title: 'Electric Fields' };
  assert.deepEqual(coursesForResource(r), []);
  assert.equal(resourceSearchTitle(r), 'Electric Fields');
});

test('an IB course label is not treated as a syllabus code, and the qualification names the board', () => {
  const r = { resourceType: 'study-guides', subject: 'physics', boards: ['ib'], qualifications: ['ib-dp'], syllabusCodes: ['DP Physics'], title: 'Forces and Momentum: Study Guide' };
  const title = resourceSearchTitle(r);
  assert.match(title, /^Forces and Momentum: IB Diploma Programme Physics/);
  assert.doesNotMatch(title, /International Baccalaureate|\(DP Physics\)/);
});

test('a long topic is never cut: the shortest complete form is used whole', () => {
  const topic = 'States of Matter and Kinetic Particle Theory';
  const title = resourceSearchTitle({ ...chemistryBoth, resourceType: 'study-guides', title: topic });
  assert.ok(title.startsWith(`${topic}: Cambridge IGCSE and O Level Chemistry`));
  assert.ok(title.length > RESOURCE_TITLE_TARGET);
});

test('courseLabel joins courses that differ in more than the qualification', () => {
  assert.equal(
    courseLabel([{ board: 'AQA', qualification: 'GCSE', subject: 'Physics' }, { board: 'OCR', qualification: 'GCSE', subject: 'Physics A' }]),
    'AQA GCSE Physics and OCR GCSE Physics A',
  );
});
