import { test } from 'node:test';
import assert from 'node:assert/strict';
import { extractFaq, plainText } from '../faq-extract.ts';

const page = `Intro text.

## How do you balance an equation?

Some teaching.

## Frequently asked questions

**What is a mole?**
The amount of substance containing 6.02 × 10²³ particles.

**Is the [Avogadro constant](/resources/x/) on the data sheet?**
Yes, *usually*, and it is written \`N_A\`.
It is given to 3 s.f.

**Which list?**
- not a plain answer

**Last one?**
Final **answer**.

## Exam traps

**Not a FAQ?**
Ignored because it is under another heading.
`;

test('extracts question/answer pairs from the FAQ section only', () => {
  assert.deepEqual(extractFaq(page), [
    { question: 'What is a mole?', answer: 'The amount of substance containing 6.02 × 10²³ particles.' },
    { question: 'Is the Avogadro constant on the data sheet?', answer: 'Yes, usually, and it is written N_A. It is given to 3 s.f.' },
    { question: 'Last one?', answer: 'Final answer.' },
  ]);
});

test('no FAQ heading gives no items', () => {
  assert.deepEqual(extractFaq('## Notes\n\n**Q?**\nA.'), []);
});

test('FAQ at the end of the body and inside-fence questions are handled', () => {
  const body = '## Frequently asked questions\n\n```\n**Fake?**\nno\n```\n\n**Real?**\nYes.';
  assert.deepEqual(extractFaq(body), [{ question: 'Real?', answer: 'Yes.' }]);
});

test('inline style: answer starting on the question line, continuing below', () => {
  const body = '## Frequently asked questions\n\n**Use 1000 or 1024?** The syllabus uses binary\nprefixes.\n\n**Header included?** Usually ignored.\n\n*Based on the syllabus.*';
  assert.deepEqual(extractFaq(body), [
    { question: 'Use 1000 or 1024?', answer: 'The syllabus uses binary prefixes.' },
    { question: 'Header included?', answer: 'Usually ignored.' },
  ]);
});

test('plainText strips links, code, bold and italics', () => {
  assert.equal(plainText('A [link](/x/) with `code`, **bold** and *it*.'), 'A link with code, bold and it.');
});
