import { test } from 'node:test';
import assert from 'node:assert/strict';
import { normaliseCode, codeMatches } from '../syllabus-codes.ts';
import { isValidCourse } from '../../../scripts/course-context.ts';

test('codes normalise the way boards print them', () => {
  assert.equal(normaliseCode('WBS11/01'), 'WBS11');
  assert.equal(normaliseCode(' 0620 '), '0620');
  assert.equal(normaliseCode('DP Computer Science (2027)'), 'DP COMPUTER SCIENCE');
  assert.equal(normaliseCode('9618/31'), '9618');
});

test('a resource code matches only its own course codes', () => {
  const chem = new Set(['0620']);
  assert.ok(codeMatches('0620', chem));
  assert.ok(!codeMatches('5070', chem));
  const urdu = new Set(['3247', '3248']);
  assert.ok(codeMatches('3247', urdu) && codeMatches('3248', urdu));
  assert.ok(!codeMatches('3247', new Set(['3248'])), 'O Level Urdu First and Second Language stay apart');
});

test('Pearson IAL unit codes belong to the qualification with the same subject letters', () => {
  const business = new Set(['YBS11', 'XBS11']);
  assert.ok(codeMatches('WBS11/01', business));
  assert.ok(codeMatches('WBS12/01', business));
  assert.ok(!codeMatches('WEC11/01', business), 'an Economics unit is not Business');
  assert.ok(!codeMatches('WBS11/01', new Set(['9609'])), 'and never a Cambridge code');
});

test('stored course values are validated before use', () => {
  const ok = { id: 'cambridge/igcse/chemistry', label: 'Cambridge IGCSE Chemistry (0620)', hub: '/boards/cambridge/igcse/chemistry/', code: '0620' };
  assert.ok(isValidCourse(ok));
  assert.ok(!isValidCourse({ ...ok, hub: '/boards/aqa/gcse/chemistry/' }), 'hub must match the id');
  assert.ok(!isValidCourse({ ...ok, id: '../../etc' }));
  assert.ok(!isValidCourse({ ...ok, label: '' }));
  assert.ok(!isValidCourse(null));
  assert.ok(!isValidCourse('cambridge/igcse/chemistry'));
});
