import { test } from 'node:test';
import assert from 'node:assert/strict';
import { shortTitle } from '../short-title.ts';

const chem = { board: 'Cambridge', qualification: 'IGCSE', subject: 'Chemistry', code: '0620' };

test('drops a course prefix and a type suffix', () => {
  assert.equal(shortTitle('Cambridge IGCSE Chemistry 0620: Elements, compounds and mixtures; atomic structure and the Periodic Table; isotopes -- Study Guide', chem),
    'Elements, compounds and mixtures; atomic structure and the Periodic Table; isotopes');
  assert.equal(shortTitle('Atomic Structure: Practice Questions', chem), 'Atomic Structure');
  assert.equal(shortTitle('Ionic, Covalent and Metallic Bonding: Revision Notes', chem), 'Ionic, Covalent and Metallic Bonding');
  assert.equal(shortTitle('OxfordAQA IGCSE Chemistry: Atomic Structure and the Periodic Table — Practice Questions', { board: 'OxfordAQA', qualification: 'IGCSE', subject: 'Chemistry', code: '9202' }),
    'Atomic Structure and the Periodic Table');
  assert.equal(shortTitle('A Level Chemistry: Colour, Stereoisomerism and Kstab — Revision Notes', { board: 'Cambridge', qualification: 'A Level', subject: 'Chemistry', code: '9701' }),
    'Colour, Stereoisomerism and Kstab');
});

test('keeps titles whose prefix is content, not the course', () => {
  assert.equal(shortTitle('Moles: calculations with gases', chem), 'Moles: calculations with gases');
  assert.equal(shortTitle('Atomic Structure', chem), 'Atomic Structure');
});

test('never returns an empty or near-empty title', () => {
  assert.equal(shortTitle('Practice Questions', chem), 'Practice Questions');
  assert.equal(shortTitle('Cambridge IGCSE Chemistry: Study Guide', chem), 'Study Guide');
});
