import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-igcse-english-literature-0475-section-b-prose';
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

// 01 What Section B tests
{
  let b = '';
  b += t(450, 104, 'Paper 1: 50 marks', { size: 18, anchor: 'middle', fill: C.muted, weight: 600 });
  b += `<rect x="30" y="118" width="420" height="70" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + t(240, 151, 'Section A: Poetry', { size: 20, weight: 700, anchor: 'middle', fill: C.muted }) + t(240, 175, '25 marks', { size: 17, anchor: 'middle', fill: C.muted });
  b += `<rect x="450" y="118" width="420" height="70" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + t(660, 151, 'Section B: Prose', { size: 20, weight: 700, anchor: 'middle' }) + t(660, 175, '25 marks', { size: 17, anchor: 'middle' });
  const facts = [['one set text', 'a novel or a selection of short stories'], ['choice of two', 'two questions on each text; answer one'], ['passages printed', 'relevant passages are on the question paper']];
  facts.forEach(([h, d], i) => {
    const x = 30 + i * 285;
    b += box(x, 208, 270, 96, C.cream, C.olive) + t(x + 20, 240, h, { size: 19, weight: 700 }) + para(x + 20, 266, d, 30, { size: 15 }, 19);
  });
  b += t(450, 346, 'The same four objectives as Section A', { size: 21, weight: 700, anchor: 'middle' });
  const aos = [
    ['AO1', 'Knowledge of the text', 'through detail and quotation', ''],
    ['AO2', 'Understanding', 'characters, relationships, situations, themes', 'often leads in prose'],
    ['AO3', 'Writer’s intentions and methods', 'including language', 'lifts answers above the middle levels'],
    ['AO4', 'Personal response', 'asked for directly or by implication', ''],
  ];
  aos.forEach(([k, h, d, tag], i) => {
    const x = 30 + (i % 2) * 430, y = 366 + Math.floor(i / 2) * 132;
    const hot = k === 'AO3' ? C.mustard : k === 'AO2' ? C.tealLight : C.panel;
    b += box(x, y, 410, 120, hot, k === 'AO2' ? C.tealDark : k === 'AO3' ? C.ink : C.panelEdge) + kbadge(x + 46, y + 48, 30, k, C.cream);
    b += t(x + 90, y + 38, h, { size: 18, weight: 700 }) + para(x + 90, y + 62, d, 36, { size: 15, fill: C.ink }, 19);
    if (tag) b += t(x + 90, y + 104, tag, { size: 15, weight: 700, italic: true, fill: k === 'AO2' ? C.tealDark : C.ink });
  });
  b += box(30, 640, 840, 58, C.tealLight, C.tealDark) + t(450, 675, 'Questions often focus on a character, a relationship or a moment of change.', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('01-section-b-and-aos',
    svg(900, 722, 'Section B: one prose text, four objectives', b),
    'Section B is worth 25 of Paper 1’s 50 marks: one question on one prose set text, a novel or short stories, from a choice of two, with passages printed. AO2 understanding often leads in prose, but AO3, the writer’s methods, lifts answers above the middle levels.',
    'Questions often start from character (AO2); higher marks need the writer’s methods (AO3).',
    '## What Section B tests');
}

// 02 Seven methods
{
  let b = '';
  const cx = 450, cy = 470;
  b += `<circle cx="${cx}" cy="${cy}" r="92" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
  b += t(cx, cy - 6, 'the reader’s', { size: 19, weight: 700, anchor: 'middle' }) + t(cx, cy + 18, 'response', { size: 19, weight: 700, anchor: 'middle' });
  const M = [
    ['Narrative voice', 'Whose view do we share? Can we trust the narrator?'],
    ['Characterisation', 'Where do actions contradict words?'],
    ['Dialogue', 'What does it reveal that the narrator does not state?'],
    ['Setting and atmosphere', 'Does it reflect feelings or work against them?'],
    ['Structure and pace', 'Why slow down or speed up here?'],
    ['Imagery and symbol', 'What larger idea does the image carry?'],
    ['Tone and irony', 'Criticism, sympathy or amusement?'],
  ];
  const pos = [[300, 110], [30, 230], [30, 400], [30, 570], [570, 230], [570, 400], [570, 570]];
  M.forEach(([h, q], i) => {
    const [x, y] = pos[i];
    const w = 300, hh = 120;
    const bx = x + w / 2, by = y + hh / 2;
    const ang = Math.atan2(by - cy, bx - cx);
    const ex = cx + 96 * Math.cos(ang), ey = cy + 96 * Math.sin(ang);
    const sx = i === 0 ? bx : i < 4 ? x + w : x, sy = i === 0 ? y + hh : by;
    b += `<line x1="${sx}" y1="${sy}" x2="${ex}" y2="${ey}" stroke="${C.tealDark}" stroke-width="3"/>`;
    b += box(x, y, w, hh, i === 0 ? C.cream : C.panel, i === 0 ? C.olive : C.tealDark) + t(x + 18, y + 34, h, { size: 19, weight: 700 }) + para(x + 18, y + 64, q, 32, { size: 15, fill: C.muted, italic: true }, 20);
  });
  add('02-prose-methods',
    svg(900, 714, 'Seven methods prose writers use', b),
    'Seven prose methods arranged around the reader’s response, each with a question to ask: narrative voice, characterisation, dialogue, setting and atmosphere, structure and pace, imagery and symbol, and tone and irony.',
    'Every method is a way the writer shapes the reader’s response; ask what each one does.',
    '## What methods do prose writers use?');
}

// 03 Analysing a printed passage
{
  let b = panel(30, 110, 840, 170);
  b += t(55, 146, '1. Start with position', { size: 20, weight: 700 });
  b += `<rect x="60" y="176" width="780" height="34" rx="6" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2"/>`;
  b += `<rect x="470" y="170" width="110" height="46" rx="6" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + t(525, 199, 'passage', { size: 16, weight: 700, anchor: 'middle' });
  b += apath('M465,193 L380,193', C.tealDark, 'ahT', 3) + t(310, 198, 'just before', { size: 16, anchor: 'middle', weight: 600, fill: C.tealDark });
  b += apath('M585,193 L670,193', C.tealDark, 'ahT', 3) + t(735, 198, 'what follows', { size: 16, anchor: 'middle', weight: 600, fill: C.tealDark });
  b += t(450, 252, 'One or two sentences placing it show secure knowledge (AO1) and why the moment matters.', { size: 16, anchor: 'middle', fill: C.muted });
  b += t(55, 326, '2. Annotate for the question’s key words', { size: 20, weight: 700 });
  const ann = [['the impression', 'of the focus: a character, a relationship, a mood'], ['changes within it', 'many extracts are chosen because something shifts'], ['specific language', 'verbs, adjectives, imagery, sentence length'], ['narrative choices', 'what the narrator reveals, withholds or judges'], ['dialogue', 'what lies beneath what characters say']];
  ann.forEach(([h, d], i) => {
    const x = 30 + (i % 2) * 430, y = 344 + Math.floor(i / 2) * 82;
    const w = i === 4 ? 840 : 410;
    b += box(x, y, w, 70, i === 1 ? C.cream : C.panel, i === 1 ? C.olive : C.tealDark, 10) + t(x + 20, y + 30, h, { size: 18, weight: 700 }) + t(x + 20, y + 56, d, { size: 15, fill: C.muted });
  });
  b += t(55, 622, '3. Organise', { size: 20, weight: 700 });
  b += box(30, 640, 410, 84, C.tealLight, C.tealDark) + t(52, 674, 'In order', { size: 18, weight: 700, fill: C.tealDark }) + t(52, 702, 'if the passage develops', { size: 16 });
  b += box(460, 640, 410, 84, C.tealLight, C.tealDark) + t(482, 674, 'By aspect', { size: 18, weight: 700, fill: C.tealDark }) + t(482, 702, 'if it does not', { size: 16 });
  b += box(30, 742, 840, 56, PINK, C.rust) + t(450, 777, 'Either way, cover the whole passage, including its ending.', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  add('03-printed-passage',
    svg(900, 822, 'Working through a printed passage', b),
    'Three stages for a printed passage: place it between what happens just before and what follows; annotate for the impression it gives, changes within it, specific language, narrative choices and dialogue; then write in order if it develops or by aspect if not, covering the whole passage including its ending.',
    'Place the passage, annotate it for the question, and cover it to the end.',
    '## How should you analyse a printed passage?');
}

// 04 Wider text preparation
{
  let b = panel(30, 110, 840, 300);
  b += t(55, 146, 'For each major character and theme', { size: 20, weight: 700 });
  b += `<line x1="70" y1="236" x2="830" y2="236" stroke="${C.ink}" stroke-width="4"/>`;
  [['beginning', 150], ['middle', 450], ['end', 750]].forEach(([s, x]) => { b += t(x, 200, s, { size: 16, weight: 700, anchor: 'middle', fill: C.muted }); });
  [110, 230, 370, 520, 640, 790].forEach((x, i) => {
    b += `<circle cx="${x}" cy="236" r="16" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + t(x, 242, String(i + 1), { size: 15, weight: 700, anchor: 'middle' });
    b += `<rect x="${x - 34}" y="268" width="68" height="16" rx="8" fill="${C.teal}"/><rect x="${x - 26}" y="290" width="52" height="16" rx="8" fill="${C.teal}"/>`;
  });
  b += t(450, 340, 'five or six key moments · two or three short quotations each', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += t(450, 376, 'Learn from memory: set texts cannot be taken into the exam room.', { size: 16, anchor: 'middle', fill: C.muted });
  b += box(30, 428, 410, 120, C.cream, C.olive) + t(52, 462, 'Know the change', { size: 18, weight: 700 }) + para(52, 490, 'how a character changes, and what causes the change', 40, { size: 16 }, 21);
  b += box(460, 428, 410, 120, C.cream, C.olive) + t(482, 462, 'Know why', { size: 18, weight: 700 }) + para(482, 490, 'why the writer includes each moment: what it adds to the meaning', 40, { size: 16 }, 21);
  b += box(30, 566, 840, 148, C.tealLight, C.tealDark);
  b += t(52, 600, 'Short-story texts: prepare each story separately', { size: 18, weight: 700, fill: C.tealDark });
  ['its narrator', 'its central change or revelation', 'its ending', 'its key images'].forEach((s, i, a) => {
    const w = [150, 270, 130, 150][i];
    const x = 52 + a.slice(0, i).reduce((q, _, j) => q + [150, 270, 130, 150][j] + 14, 0);
    b += pill(x, 622, w, 42, s, { fill: C.panel, edge: C.tealDark, size: 16 });
  });
  b += t(52, 694, 'Any story on the list may be set.', { size: 16, fill: C.tealDark, italic: true });
  add('04-wider-text',
    svg(900, 738, 'Preparing to write about the whole text', b),
    'For each major character and theme, choose five or six key moments from the beginning, middle and end of the text, each with two or three short quotations learned by heart. Know how a character changes and why the writer includes each moment. For short stories, know each story’s narrator, central change, ending and key images.',
    'Spread your key moments across the whole text, with short quotations for each.',
    '## How do you write about the text more widely?');
}

// 05 Worked example
{
  let b = '';
  const N = [
    ['Imagery', '“like a small, stubborn animal”', 'the suitcase seems alive and hard to control, carrying the feelings she holds in'],
    ['Repeated action', 'pressing the clasp “every few minutes”', 'nervous repetition'],
    ['Narrative comment', '“as if the things inside might decide to leave without her”', 'quietly ironic: it is Amira who is about to leave, and she seems unready'],
    ['Setting', '“the evening hurried”', 'the busy station contrasts with her stillness, isolating her'],
    ['Dialogue and narration', '“I’m not looking at my feet” … “and did not look up”', 'a gap between her words and her behaviour'],
  ];
  let y = 110;
  const mids = [];
  N.forEach(([h, q, e], i) => {
    const ql = wrap(q, 50), el = wrap(e, 52);
    const hh = Math.max(84, 30 + ql.length * 21 + el.length * 20 + 12);
    b += box(30, y, 180, hh, C.cream, C.olive, 12) + para(48, y + hh / 2 - (wrap(h, 14).length - 1) * 11 + 6, h, 14, { size: 17, weight: 700 }, 22);
    b += box(222, y, 480, hh, C.panel, C.tealDark, 12) + tl(240, y + 30, ql, { size: 16, italic: true }, 21) + tl(240, y + 30 + ql.length * 21 + 4, el, { size: 15, fill: C.muted }, 20);
    mids.push(y + hh / 2);
    y += hh + 12;
  });
  const top = 110, bot = y - 12;
  b += box(738, top, 132, bot - top, C.mustard, C.ink, 14);
  b += tl(804, (top + bot) / 2 - 60, ['Amira’s', 'feelings'], { size: 19, weight: 700, anchor: 'middle' }, 24);
  b += tl(804, (top + bot) / 2 + 4, ['anxious;', 'wants to', 'seem in', 'control'], { size: 16, anchor: 'middle' }, 21);
  mids.forEach((m) => { b += arrow(706, m, 732, m, { w: 3 }); });
  b += box(30, y + 6, 840, 58, C.tealLight, C.tealDark) + t(450, y + 41, 'Personal response grows from the analysis: “a gap … that I find touching”.', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('05-worked-example',
    svg(900, y + 88, 'Worked example: what reveals Amira’s feelings', b),
    'Five methods in the original “Last Bus” passage point to Amira’s feelings: the suitcase “like a small, stubborn animal”, her pressing the clasp “every few minutes”, the ironic comment that the things inside might leave without her, the hurrying evening around her stillness, and her denial that she is looking at her feet.',
    'Imagery, narrative comment, setting and dialogue all point to the question’s focus.',
    '## Worked example: an original passage');
}

// 06 Structure of the answer
{
  let b = '';
  const blocks = [
    ['Introduction', 'two or three sentences: your answer to the question and, for a passage, where it sits in the text', C.mustard, 1],
    ['Analytical paragraphs', 'a clear point linked to the question, short quotations, analysis of method, the effect on the reader', C.tealLight, 4],
    ['Structure or the ending', 'how the passage or the text develops the focus of the question', C.cream, 1],
    ['Conclusion', 'a considered judgement on the question’s key word', C.mustard, 1],
  ];
  let y = 110;
  blocks.forEach(([h, d, f, n], i) => {
    const hh = n > 1 ? 170 : 58 + wrap(d, 88).length * 21;
    b += box(30, y, 840, hh, f, C.ink) + t(52, y + 34, h, { size: 20, weight: 700 }) + t(848, y + 34, n > 1 ? 'four or five' : '', { size: 16, anchor: 'end', fill: C.tealDark, weight: 700 });
    b += para(52, y + 62, d, 88, { size: 16 }, 21);
    if (n > 1) ['point', 'quotation', 'method', 'effect'].forEach((s, j) => { b += pill(52 + j * 150, y + 104, 136, 42, s, { fill: C.panel, edge: C.tealDark, size: 16 }) + (j < 3 ? arrow(52 + j * 150 + 137, y + 125, 52 + j * 150 + 149, y + 125, { w: 2.5 }) : ''); });
    y += hh + 14;
  });
  b += box(30, y + 4, 840, 84, C.panel, C.olive);
  b += t(450, y + 38, 'One precise quotation explored for its connotations and context', { size: 17, weight: 700, anchor: 'middle' });
  b += t(450, y + 66, 'earns more than a string of quotations listed one after another.', { size: 17, anchor: 'middle' });
  add('06-answer-structure',
    svg(900, y + 112, 'Structuring a 25-mark prose answer', b),
    'An answer structure: a two- or three-sentence introduction that answers the question and places the passage, four or five analytical paragraphs each moving from point to quotation to method to effect, a paragraph on structure or the ending, and a conclusion judging the key word.',
    'Keep each paragraph focused: point, quotation, method, effect.',
    '## Structuring a 25-mark prose answer');
}

// 07 Context test
{
  let b = '';
  b += box(250, 110, 400, 70, C.cream, C.olive) + t(450, 140, 'A sentence about context', { size: 19, weight: 700, anchor: 'middle' }) + t(450, 166, 'in your answer', { size: 16, anchor: 'middle', fill: C.muted });
  b += arrow(450, 182, 450, 214, { w: 3.5 });
  b += box(250, 220, 400, 56, C.panel, C.ink) + t(450, 254, 'Delete it.', { size: 19, weight: 700, anchor: 'middle' });
  b += arrow(450, 278, 450, 306, { w: 3.5 });
  b += `<path d="M450,310 L640,380 L450,450 L260,380 Z" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  b += t(450, 374, 'Does your reading of', { size: 17, weight: 700, anchor: 'middle' }) + t(450, 398, 'the passage lose anything?', { size: 17, weight: 700, anchor: 'middle' });
  b += apath('M260,380 L150,380 L150,470', C.tealDark, 'ahT') + t(200, 368, 'yes', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += apath('M640,380 L750,380 L750,470', C.rust, 'ahR') + t(700, 368, 'no', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  b += box(30, 478, 400, 150, C.tealLight, C.tealDark) + t(52, 512, 'Keep it', { size: 20, weight: 700, fill: C.tealDark });
  b += para(52, 544, 'It explains something in the words in front of you, such as why a character’s choice is shocking in their society.', 40, { size: 16 }, 21);
  b += box(470, 478, 400, 150, PINK, C.rust) + t(492, 512, 'Leave it out', { size: 20, weight: 700, fill: C.rust });
  b += para(492, 544, 'It is a separate block of history that does not help your reading.', 40, { size: 16 }, 21);
  add('07-context-test',
    svg(900, 652, 'Context: the deletion test', b),
    'A test for context: delete the sentence about context and ask whether your reading of the passage loses anything. If it does, keep it, because it explains something in the words in front of you; if not, it is a separate block of history and should be left out.',
    'Context earns its place only when it explains the words in front of you.',
    '## Context: how much is enough?');
}
