import { test } from 'node:test';
import assert from 'node:assert/strict';
import { MATRIX, COURSE_SUBJECT_NAMES, courseSubjectNameOverride } from '../../../data/academic/matrix.ts';
import { activeOnly, academicHubPath } from '../index.ts';
import { subjectBySlug } from '../../../data/academic/subjects.ts';

const find = (b, q, s) => MATRIX.find((c) => c.boardSlug === b && c.qualificationSlug === q && c.subjectSlug === s);

test('B15: Cambridge A Level 9626 is named "Information Technology"; its slug and URL stay /ict/', () => {
  const c = find('cambridge', 'a-level', 'ict');
  assert.ok(c);
  assert.equal(c.qualificationCode, '9626');
  assert.equal(c.subject, 'Information Technology');
  assert.equal(c.subjectAlias, 'ICT');
  assert.equal(c.subjectSlug, 'ict');
  assert.equal(academicHubPath(c), '/boards/cambridge/a-level/ict/');
  assert.ok(activeOnly().includes(c));
  assert.equal(courseSubjectNameOverride('cambridge', 'a-level', 'ict'), 'Information Technology');
});

test('B15: Cambridge IGCSE 0417 keeps the shared "ICT" name, with no alias', () => {
  const c = find('cambridge', 'igcse', 'ict');
  assert.ok(c);
  assert.equal(c.subject, 'ICT');
  assert.equal(c.subject, subjectBySlug('ict')?.name);
  assert.equal(c.subjectAlias, undefined);
  assert.equal(courseSubjectNameOverride('cambridge', 'igcse', 'ict'), undefined);
});

test('B15: only courses listed in COURSE_SUBJECT_NAMES are renamed', () => {
  const keys = new Set(Object.keys(COURSE_SUBJECT_NAMES));
  for (const c of MATRIX) {
    const key = `${c.boardSlug}/${c.qualificationSlug}/${c.subjectSlug}`;
    if (keys.has(key)) {
      assert.equal(c.subject, COURSE_SUBJECT_NAMES[key].name, key);
    } else {
      assert.equal(c.subjectAlias, undefined, key);
      assert.equal(courseSubjectNameOverride(c.boardSlug, c.qualificationSlug, c.subjectSlug), undefined, key);
      assert.notEqual(c.subject, 'Information Technology', key);
    }
  }
  // Every override points at a real matrix row (a typo'd key would silently do nothing).
  for (const key of keys) {
    const [b, q, s] = key.split('/');
    assert.ok(find(b, q, s), `override key ${key} matches no matrix row`);
  }
});
