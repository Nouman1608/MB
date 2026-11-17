import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-english-language-1123-question-1-comprehension';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });


// local helpers
const wrap = (s, n) => {
  const out = [''];
  for (const w of s.split(' ')) {
    const cur = out[out.length - 1];
    if (cur && (cur + ' ' + w).length > n) out.push(w); else out[out.length - 1] = cur ? cur + ' ' + w : w;
  }
  return out;
};
const para = (x, y, s, n, opts = {}, lh) => tl(x, y, wrap(s, n), opts, lh || (opts.size || 18) * 1.32);
const box = (x, y, w, h, fill = C.panel, edge = C.panelEdge, rx = 12) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>`;
const kbadge = (cx, cy, r, label, fill = C.cream) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + t(cx, cy + 7, label, { size: 19, weight: 700, anchor: 'middle' });
const pill = (x, y, w, h, s, { fill = C.cream, edge = C.olive, size = 17, weight = 600, color = C.ink } = {}) =>
  box(x, y, w, h, fill, edge, h / 2) + t(x + w / 2, y + h / 2 + size * 0.36, s, { size, weight, anchor: 'middle', fill: color });
const apath = (d, color = C.ink, marker = 'ah', w = 3.5) => path(d, { stroke: color, w, extra: `marker-end="url(#${marker})"` });
const PINK = '#f6e3d6';

// 01 Section A and Question 1
{
  let b = '';
  b += box(30, 110, 300, 300, C.cream, C.olive);
  b += t(180, 148, 'Text A', { size: 24, weight: 700, anchor: 'middle' });
  [0, 1, 2, 3, 4, 5].forEach((i) => { b += `<line x1="60" y1="${172 + i * 18}" x2="${300 - (i === 5 ? 80 : 0)}" y2="${172 + i * 18}" stroke="${C.olive}" stroke-width="3" opacity="0.6"/>`; });
  b += tl(180, 300, ['a narrative text', 'about 900 words', 'twentieth or', 'twenty-first century'], { size: 17, anchor: 'middle', weight: 600 }, 24);
  b += arrow(334, 260, 380, 260, { w: 4 });
  b += panel(384, 110, 486, 300);
  b += t(408, 146, 'Section A: 25 marks on Text A', { size: 20, weight: 700 });
  const W = 438, q1 = (W * 16) / 25;
  b += `<rect x="408" y="166" width="${q1}" height="84" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += `<rect x="${408 + q1}" y="166" width="${W - q1}" height="84" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += t(408 + q1 / 2, 202, 'Question 1', { size: 19, weight: 700, anchor: 'middle' }) + t(408 + q1 / 2, 228, '16 marks', { size: 18, anchor: 'middle' });
  b += t(408 + q1 + (W - q1) / 2, 202, 'Question 2', { size: 17, weight: 700, anchor: 'middle' }) + t(408 + q1 + (W - q1) / 2, 228, '9 marks', { size: 17, anchor: 'middle' });
  b += t(408, 290, 'Question 1 is a series of short-answer', { size: 17 }) + t(408, 314, 'sub-questions; none asks for an essay.', { size: 17 });
  b += t(408, 360, 'Question 2: Use of Language,', { size: 16, fill: C.muted }) + t(408, 384, 'on the same text', { size: 16, fill: C.muted });
  // R1 / R2
  b += t(450, 458, 'Question 1 tests two reading objectives', { size: 21, weight: 700, anchor: 'middle' });
  b += box(30, 480, 410, 150, C.panel, C.tealDark) + kbadge(80, 530, 28, 'R1', C.tealLight);
  b += t(122, 524, 'Explicit meanings', { size: 20, weight: 700 }) + t(122, 552, 'on the surface', { size: 17, fill: C.muted });
  b += t(52, 600, 'what happens and why', { size: 17 });
  b += box(460, 480, 410, 150, C.panel, C.olive) + kbadge(510, 530, 28, 'R2', C.mustard);
  b += t(552, 524, 'Implicit meanings', { size: 20, weight: 700 }) + t(552, 552, 'and attitudes', { size: 17, fill: C.muted });
  b += para(482, 592, 'what characters feel and want, how they see each other', 42, { size: 17 }, 23);
  add('01-question-1-at-a-glance',
    svg(900, 656, 'Question 1 at a glance', b),
    'Text A is a narrative of about 900 words from the twentieth or twenty-first century. Section A carries 25 marks on it: Question 1, a series of short answers, is worth 16 and Question 2 is worth 9. Question 1 tests R1, explicit meanings, and R2, implicit meanings and attitudes.',
    'Question 1 is 16 of Section A’s 25 marks, split between explicit and implicit meaning.',
    '## What you are working with');
}

// 02 Explicit vs implicit
{
  let b = '';
  b += `<rect x="30" y="110" width="840" height="210" rx="14" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2.5"/>`;
  b += `<rect x="30" y="320" width="840" height="300" rx="14" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>`;
  b += `<line x1="30" y1="320" x2="870" y2="320" stroke="${C.ink}" stroke-width="3" stroke-dasharray="10 7"/>`;
  b += t(850, 346, 'the text’s surface', { size: 16, anchor: 'end', fill: C.muted, italic: true });
  b += kbadge(76, 158, 26, 'R1', C.tealLight) + t(116, 152, 'Explicit: stated in the text', { size: 20, weight: 700 }) + t(116, 176, 'find it and give it accurately', { size: 16, fill: C.muted });
  b += box(56, 200, 788, 52, C.cream, C.olive, 10) + t(450, 233, '“What two things did Amira notice when she entered the kitchen?”', { size: 17, italic: true, anchor: 'middle' });
  b += t(56, 292, 'Rewards precise location and economy.', { size: 17, weight: 600, fill: C.olive });
  b += kbadge(76, 368, 26, 'R2', C.mustard) + t(116, 362, 'Implicit: the text gives clues; you draw the conclusion', { size: 20, weight: 700 }) + t(116, 386, '“What does Amira’s reaction suggest about her relationship with her uncle?”', { size: 16, italic: true });
  ['what she does', 'what she avoids', 'how the narrator describes her'].forEach((s, i) => {
    const x = 56 + i * 200, w = i === 2 ? 290 : 180;
    b += pill(x, 414, w, 44, s, { fill: C.panel, edge: C.tealDark, size: 16 });
    b += apath(`M${x + w / 2},462 L${380 + i * 120},506`, C.tealDark, 'ahT', 3);
  });
  b += box(300, 512, 400, 54, C.mustard, C.ink, 10) + t(500, 545, 'inference: she is afraid of him', { size: 17, weight: 700, anchor: 'middle' });
  b += t(56, 545, 'No sentence says it:', { size: 16, fill: C.muted, italic: true });
  b += t(56, 598, 'The mark is for the conclusion; the detail makes it credible.', { size: 17, weight: 600, fill: C.tealDark });
  add('02-explicit-implicit',
    svg(900, 644, 'Explicit and implicit: two different jobs', b),
    'Above the surface line, explicit (R1) answers are stated in the text, as in asking what two things Amira noticed. Below it, implicit (R2) answers are inferred: what Amira does, what she avoids and how the narrator describes her lead to the conclusion that she is afraid of her uncle.',
    'Explicit answers are found; implicit answers are inferred and anchored in a detail.',
    '## Explicit and implicit: two different jobs');
}

// 03 Wording decoder
{
  let b = t(450, 104, 'Command words, from finding to reasoning', { size: 18, anchor: 'middle', fill: C.muted, weight: 600 });
  const cmd = [['Identify', 'pick out a word, phrase or detail', C.cream], ['Give', 'state it from the text', C.tealLight], ['Explain', 'go beyond stating to reasons: say why and/or how, with evidence', C.mustard]];
  cmd.forEach(([k, d, f], i) => {
    const x = 30 + i * 285, y = 124 + (2 - i) * 25, h = 110 + i * 25;
    b += box(x, y, 270, h, f, C.ink, 12) + t(x + 20, y + 38, k, { size: 23, weight: 700 }) + para(x + 20, y + 72, d, 27, { size: 16 }, 22);
  });
  b += t(450, 322, 'What each wording wants', { size: 21, weight: 700, anchor: 'middle' });
  const rows = [
    ['“in your own words”', 'the meaning, re-expressed; copied key words earn nothing'],
    ['“what does the writer mean by…”', 'an explanation of a phrase in context'],
    ['“what does … suggest about…”', 'an inference (R2)'],
    ['“give two…”', 'exactly two separate points'],
    ['“quote a word or phrase”', 'the exact words only, short and precise'],
  ];
  rows.forEach(([w, d], i) => {
    const y = 342 + i * 66;
    b += box(30, y, 310, 54, C.cream, C.olive, 10) + t(185, y + 33, w, { size: 16, weight: 700, anchor: 'middle', italic: true });
    b += arrow(346, y + 27, 380, y + 27, { w: 3 });
    b += box(388, y, 482, 54) + t(404, y + 33, d, { size: 16 });
  });
  add('03-question-wording',
    svg(900, 682, 'Read the wording, then answer', b),
    'Command words rise from identify (pick out a detail) and give (state it from the text) to explain (give reasons with evidence). Five common wordings each ask for something different: own-words meaning, an explanation in context, an inference, exactly two points, or an exact short quotation.',
    'The wording of the sub-question tells you what kind of answer earns the mark.',
    '## How sub-questions are typically worded');
}

// 04 Marks to points
{
  let b = '';
  const rows = [
    ['1', 'one point', 'a phrase or short sentence', [['point', C.mustard]]],
    ['2', 'two separate points, or a point and its explanation', 'make the two visible: “firstly…; secondly…”', [['point', C.mustard], ['point', C.mustard]]],
    ['3', 'three points, or an inference with developed support', '', [['point', C.mustard], ['point', C.mustard], ['point', C.mustard]]],
  ];
  rows.forEach(([m, h, d, blocks], i) => {
    const y = 110 + i * 150;
    b += panel(30, y, 840, 134);
    b += `<circle cx="96" cy="${y + 67}" r="42" fill="${C.cream}" stroke="${C.ink}" stroke-width="3"/>` + t(96, y + 66, m, { size: 30, weight: 700, anchor: 'middle' }) + t(96, y + 90, m === '1' ? 'mark' : 'marks', { size: 15, anchor: 'middle', fill: C.muted });
    blocks.forEach(([s, f], j) => { b += box(166 + j * 92, y + 40, 80, 54, f, C.ink, 8) + t(206 + j * 92, y + 73, s, { size: 16, weight: 600, anchor: 'middle' }); });
    b += para(460, y + 48, h, 40, { size: 18, weight: 700 }, 24);
    if (d) b += para(460, y + 48 + wrap(h, 40).length * 24 + 6, d, 44, { size: 16, fill: C.muted }, 21);
  });
  b += box(30, 566, 840, 60, PINK, C.rust) + t(450, 603, 'Writing more does not add marks; save the time for a three-mark inference.', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  add('04-marks-to-points',
    svg(900, 650, 'Let the marks set the number of points', b),
    'One mark needs one point, a phrase or short sentence; two marks need two separate points or a point and its explanation, made visible; three marks need three points or an inference with developed support. Writing more does not add marks.',
    'Count the marks, then give that many distinct points.',
    '## Matching the answer to the marks');
}

// 05 Own words
{
  let b = '';
  const m = [
    ['1', 'Replace key words', 'reluctant', 'unwilling'],
    ['2', 'Unpack the phrase', 'her voice was brittle', 'she sounded tense, as if she might break down'],
    ['3', 'Change the grammar', 'his hesitation', 'he paused because he was unsure'],
  ];
  m.forEach(([n, h, a, c], i) => {
    const y = 110 + i * 140;
    b += panel(30, y, 840, 124) + badge(70, y + 40, 22, n, C.cream) + t(106, y + 48, h, { size: 21, weight: 700 });
    b += box(56, y + 66, 260, 44, PINK, C.rust, 10) + t(186, y + 94, a, { size: 17, italic: true, anchor: 'middle', fill: C.rust });
    b += arrow(322, y + 88, 362, y + 88, { w: 3.5, color: C.tealDark, marker: 'ahT' });
    b += box(370, y + 66, 476, 44, C.tealLight, C.tealDark, 10) + t(608, y + 94, c, { size: 17, weight: 600, anchor: 'middle', fill: C.tealDark });
  });
  b += box(30, 532, 840, 84, C.cream, C.olive);
  b += t(450, 566, 'Small, everyday words (the, was, house) do not need replacing.', { size: 17, anchor: 'middle' });
  b += t(450, 594, 'The key words of the phrase do.', { size: 17, weight: 700, anchor: 'middle' });
  add('05-own-words',
    svg(900, 640, 'Three ways to put it in your own words', b),
    'Three methods for own-words answers: replace key words (reluctant becomes unwilling), unpack the phrase (her voice was brittle becomes she sounded tense, as if she might break down) and change the grammar (his hesitation becomes he paused because he was unsure).',
    'Re-express the key words; leave the everyday ones alone.',
    '## Answering "in your own words"');
}

// 06 Worked example: text details to answers
{
  let b = '';
  const items = [ // R labels only where the lesson's commentary names them
    ['“The bus was late again”', '(a) Why late?', '1', 'R1', 'His bus was late.', 'explicit point, one phrase'],
    ['“thirty heads would turn when the door opened”', '(b) Own words: what he fears', '2', '', 'all his classmates will look at him; he will feel embarrassed, singled out', 'explained, not copied + the feeling'],
    ['“He let go of the railing, then took hold of it again.”', '(c) What it suggests', '2', 'R2', 'hesitant and torn: starts to move, then holds back', 'state of mind linked to the action'],
    ['“the permission slip his mother had not signed seemed to grow heavier”', '(d) Two other reasons', '2', '', 'expects trouble over the unsigned slip; dreads the whole class’s attention', 'two points, from different parts'],
  ];
  b += t(200, 130, 'Detail in the extract', { size: 18, weight: 700, anchor: 'middle', fill: C.olive }) + t(640, 130, 'Answer that earns the marks', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  items.forEach(([q, h, mk, ro, a, n], i) => {
    const y = 148 + i * 132;
    b += box(30, y, 340, 118, C.cream, C.olive) + para(50, y + 34, q, 31, { size: 16, italic: true }, 22);
    b += arrow(376, y + 59, 404, y + 59, { w: 3.5 });
    b += box(410, y, 460, 118, C.panel, C.tealDark);
    b += t(430, y + 32, h, { size: 17, weight: 700 }) + pill(752, y + 12, 52, 30, `[${mk}]`, { fill: C.mustard, edge: C.ink, size: 16, weight: 700 }) + (ro ? pill(812, y + 12, 46, 30, ro, { fill: ro === 'R1' ? C.tealLight : C.cream, edge: C.ink, size: 15, weight: 700 }) : '');
    b += para(430, y + 58, a, 48, { size: 16 }, 21);
    b += t(430, y + 104, n, { size: 15, fill: C.tealDark, italic: true, weight: 600 });
  });
  b += box(30, 676, 840, 58, PINK, C.rust) + t(450, 712, '“He is nervous” alone, with no link to the action, earns one mark at most for (c).', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  add('06-worked-example',
    svg(900, 758, 'Worked example: from detail to answer', b),
    'Four details from the Daniel extract each feed one sub-question: the late bus answers (a) for one mark; thirty heads turning is explained in own words for (b); letting go of the railing and taking hold again shows hesitation for (c); and the unsigned permission slip supports one of two reasons in (d).',
    'Each mark-earning answer is anchored in one precise detail of the text.',
    '## Worked example');
}
