import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-english-language-1123-question-3a-summary';
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

// 01 Two halves
{
  let b = '';
  b += box(30, 110, 230, 150, C.cream, C.olive) + t(145, 150, 'Text B', { size: 22, weight: 700, anchor: 'middle' }) + t(145, 182, 'about 550–600', { size: 17, anchor: 'middle' }) + t(145, 206, 'words', { size: 17, anchor: 'middle' });
  b += arrow(264, 185, 314, 185, { w: 4 });
  b += box(320, 110, 260, 150, C.panel, C.ink) + t(450, 150, 'Summary', { size: 22, weight: 700, anchor: 'middle' }) + t(450, 182, 'continuous writing', { size: 17, anchor: 'middle' }) + t(450, 206, 'no more than 150 words', { size: 17, anchor: 'middle', weight: 700 });
  b += box(610, 110, 260, 150, C.tealLight, C.tealDark) + t(740, 150, 'Section B', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += t(740, 184, '3a Summary: 20 marks', { size: 17, anchor: 'middle', weight: 700 }) + t(740, 212, '3b short response: 5', { size: 16, anchor: 'middle' }) + t(740, 236, 'on the same text', { size: 16, anchor: 'middle', fill: C.muted });
  b += box(150, 290, 600, 64, C.panel, C.panelEdge) + t(450, 318, 'Summarise: “select and present the main points,', { size: 18, anchor: 'middle', weight: 600 }) + t(450, 342, 'without detail”', { size: 18, anchor: 'middle', weight: 600 });
  b += path('M300,356 L210,400', { stroke: C.olive, w: 3.5, extra: 'marker-end="url(#ahO)"' }) + path('M600,356 L690,400', { stroke: C.tealDark, w: 3.5, extra: 'marker-end="url(#ahT)"' });
  const half = (x, f, e, h, k, objs, earn) => {
    let s = box(x, 408, 410, 300, f, e) + t(x + 22, 446, h, { size: 22, weight: 700, fill: e }) + pill(x + 296, 422, 92, 36, k, { fill: C.panel, edge: e, size: 17, weight: 700, color: e });
    objs.forEach(([o, d], i) => { s += kbadge(x + 46, 494 + i * 66, 24, o, C.panel) + para(x + 82, 488 + i * 66, d, 34, { size: 15 }, 19); });
    s += t(x + 22, 640, 'Earns marks by:', { size: 15, fill: C.muted, weight: 600 }) + para(x + 22, 664, earn, 44, { size: 16, weight: 600 }, 21);
    return s;
  };
  b += half(30, C.cream, C.olive, 'select = reading', '10', [['R1', 'explicit meanings'], ['R5', 'select and use information for specific purposes']], 'choosing every relevant point, and only relevant points');
  b += half(460, C.tealLight, C.tealDark, 'present = writing', '10', [['W2', 'organise and structure ideas for deliberate effect'], ['W3', 'a range of vocabulary and sentence structures']], 'grouping and linking points into concise prose, in your own words');
  add('01-two-halves',
    svg(900, 732, 'Question 3a: two halves of one answer', b),
    'Text B of about 550 to 600 words is summarised in continuous writing of no more than 150 words, for 20 marks. “Select” is the reading half (R1 and R5, 10 marks): choose every relevant point and only those. “Present” is the writing half (W2 and W3, 10 marks): group and link the points in concise prose in your own words.',
    'Select earns the reading marks; present earns the writing marks.',
    '## Two halves of one answer');
}

// 02 Five steps
{
  let b = '';
  const steps = [
    ['Find the focus', 'Underline it; decide what does not count.'],
    ['Select the points', 'Strip the detail, merge repeats, list notes.'],
    ['Group and order', 'Two or three groups; each note in one.'],
    ['Write in your own words', 'Continuous prose: no bullets or headings.'],
    ['Check the limit', 'No more than 150 words.'],
  ];
  steps.forEach(([h, d], i) => {
    const y = 110 + i * 112;
    b += panel(100, y, 770, 96) + badge(56, y + 48, 26, String(i + 1), i === 2 ? C.mustard : C.cream);
    b += t(124, y + 42, h, { size: 21, weight: 700 }) + t(124, y + 72, d, { size: 17, fill: C.muted });
    const tag = i < 2 ? ['reading', C.olive, C.cream] : i < 4 ? ['writing', C.tealDark, C.tealLight] : ['both', C.ink, C.panel];
    b += pill(740, y + 28, 108, 40, tag[0], { fill: tag[2], edge: tag[1], size: 16, color: tag[1] });
    if (i < 4) b += `<line x1="56" y1="${y + 76}" x2="56" y2="${y + 132}" stroke="${C.ink}" stroke-width="3"/>`;
  });
  add('02-five-steps',
    svg(900, 680, 'Five steps to a summary', b),
    'The summary process in five steps: find the focus, select the points, group and order them, write in your own words as continuous prose, and check the 150-word limit. The first two steps serve the reading marks and the next two the writing marks.',
    'Points first, then groups, then prose, then the word count.',
    '## Step 1: find the focus');
}

// 03 Select the points
{
  let b = '';
  b += panel(30, 110, 840, 150);
  b += t(55, 146, 'Strip the detail: keep the point it illustrates', { size: 20, weight: 700 });
  b += box(55, 166, 470, 76, C.panel, C.panelEdge, 10) + para(72, 196, '“Last year Maria, a nurse from Lisbon, saved enough on fuel to pay for a holiday”', 52, { size: 16, italic: true, fill: C.muted }, 21);
  b += arrow(530, 204, 568, 204, { w: 3.5, color: C.tealDark, marker: 'ahT' });
  b += box(574, 176, 272, 56, C.tealLight, C.tealDark, 10) + t(710, 210, 'cycling saves money', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  // funnel
  b += t(450, 304, 'From Text B to your notes', { size: 20, weight: 700, anchor: 'middle' });
  b += path('M120,326 L780,326 L620,520 L280,520 Z', { fill: C.cream, stroke: C.olive, w: 3 });
  b += t(450, 360, 'every sentence or phrase that answers the focus', { size: 17, anchor: 'middle', weight: 600 });
  const out = [['examples', 404], ['statistics', 440], ['anecdotes', 476]];
  out.forEach(([s, y], i) => { b += apath(`M${300 + i * 40},${y - 6} L${110 + i * 10},${y - 6}`, C.rust, 'ahR', 3) + t(100 + i * 10, y, s, { size: 16, anchor: 'end', fill: C.rust, weight: 600 }); });
  b += t(470, 420, 'strip the detail', { size: 16, anchor: 'middle', fill: C.olive }) + t(470, 456, 'merge repeats: count', { size: 16, anchor: 'middle', fill: C.olive }) + t(470, 478, 'each idea once', { size: 16, anchor: 'middle', fill: C.olive });
  b += arrow(450, 522, 450, 556, { w: 4 });
  [0, 1, 2, 3, 4, 5, 6, 7, 8].forEach((i) => { b += box(118 + i * 74, 562, 64, 40, i < 8 ? C.tealLight : C.panel, C.tealDark, 6) + `<line x1="${128 + i * 74}" y1="582" x2="${172 + i * 74}" y2="582" stroke="${C.tealDark}" stroke-width="3"/>`; });
  b += t(450, 636, 'eight to ten short notes is typical', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('03-select-points',
    svg(900, 662, 'Select the points', b),
    'An anecdote about Maria, a nurse from Lisbon, saving on fuel is cut down to the point it illustrates: cycling saves money. A funnel shows every part of Text B that answers the focus being reduced by stripping examples, statistics and anecdotes and merging repeats, leaving eight to ten short notes.',
    'Keep the point, drop the illustration, and count each idea once.',
    '## Step 2: select the points');
}

// 04 Own words
{
  let b = '';
  const m = [
    ['1', 'Generalise', 'buses, trains and trams', 'public transport'],
    ['2', 'Compress', 'people who live in the area and the businesses that operate there', 'local residents and businesses'],
    ['3', 'Re-structure', 'a list of separate sentences', 'one sentence with a shared subject'],
  ];
  m.forEach(([n, h, a, c], i) => {
    const y = 110 + i * 132;
    b += panel(30, y, 840, 118) + badge(70, y + 32, 19, n, C.cream) + t(102, y + 40, h, { size: 21, weight: 700 });
    b += box(56, y + 60, 400, 48, PINK, C.rust, 10) + (a.length > 40 ? tl(256, y + 80, wrap(a, 44), { size: 15, italic: true, anchor: 'middle', fill: C.rust }, 19) : t(256, y + 90, a, { size: 16, italic: i < 2, anchor: 'middle', fill: C.rust }));
    b += arrow(462, y + 86, 500, y + 86, { w: 3.5, color: C.tealDark, marker: 'ahT' });
    b += box(508, y + 64, 340, 44, C.tealLight, C.tealDark, 10) + t(678, y + 92, c, { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark, italic: i < 2 });
  });
  b += box(30, 518, 410, 104, C.panel, C.tealDark) + t(52, 552, 'Allowed to keep', { size: 18, weight: 700, fill: C.tealDark }) + para(52, 582, 'technical terms and words with no simple equivalent', 40, { size: 16 }, 21);
  b += box(460, 518, 410, 104, PINK, C.rust) + t(482, 552, 'Not continuous writing', { size: 18, weight: 700, fill: C.rust }) + t(482, 586, 'bullet points, headings, numbered lists', { size: 16 });
  add('04-own-words',
    svg(900, 646, 'Write it in your own words', b),
    'Three methods for own-words summary writing: generalise (buses, trains and trams become public transport), compress (people who live in the area and the businesses that operate there become local residents and businesses) and re-structure separate sentences into one with a shared subject. Technical terms may stay; bullets and headings are not continuous writing.',
    'Generalise, compress and re-structure, and keep it as continuous prose.',
    '## Step 4: write in your own words');
}

// 05 Word limit
{
  let b = panel(30, 110, 840, 330);
  const x0 = 80, x1 = 820, lim = 680;
  b += `<rect x="${x0}" y="200" width="${lim - x0}" height="48" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += `<rect x="${lim}" y="200" width="${x1 - lim}" height="48" fill="${PINK}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += `<line x1="${lim}" y1="176" x2="${lim}" y2="272" stroke="${C.rust}" stroke-width="5"/>`;
  b += t(lim, 166, '150 words: a ceiling', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  b += t(x0, 290, '0', { size: 16, anchor: 'middle', fill: C.muted });
  b += apath('M150,330 L150,256', C.olive, 'ahO', 3) + t(150, 360, 'well under:', { size: 17, weight: 700, anchor: 'middle', fill: C.olive }) + t(150, 384, 'probably missed points', { size: 16, anchor: 'middle' });
  b += apath(`M560,330 L620,256`, C.tealDark, 'ahT', 3) + t(560, 360, 'approaching 150:', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(560, 384, 'all points, no detail', { size: 16, anchor: 'middle' });
  b += apath('M760,330 L760,256', C.rust, 'ahR', 3) + t(760, 360, 'over:', { size: 17, weight: 700, anchor: 'middle', fill: C.rust }) + tl(760, 384, ['words spent on detail;', 'later points not credited'], { size: 16, anchor: 'middle' }, 21);
  b += box(30, 460, 840, 92, C.cream, C.olive);
  b += t(52, 494, 'While writing:', { size: 18, weight: 700 }) + t(190, 494, 'count roughly by lines, using your average words per line.', { size: 17 });
  b += t(52, 528, 'At the end:', { size: 18, weight: 700 }) + t(190, 528, 'check exactly.', { size: 17 });
  add('05-word-limit',
    svg(900, 576, 'The limit is a ceiling', b),
    'A word-count bar with 150 words marked as a ceiling. A summary well under it has probably missed points; one approaching it has all the points without detail; one over it has spent words on detail, and points after the limit are not credited. Count roughly by lines while writing and exactly at the end.',
    'Aim to approach 150 words, never to pass it.',
    '## Step 5: check the limit');
}

// 06 Worked example
{
  let b = '';
  b += box(30, 110, 840, 60, C.cream, C.olive) + t(450, 147, 'Task: summarise the benefits of school gardens', { size: 19, weight: 700, anchor: 'middle' });
  const groups = [
    ['Pupils’ well-being', ['calmer after break', 'better concentration', 'fewer arguments'], 'improve pupils’ behaviour and focus …', C.tealLight, C.tealDark],
    ['Learning', ['used in maths, science, writing', 'practical success for those who struggle'], 'also become places of learning …', C.cream, C.olive],
    ['Community and environment', ['cooler streets', 'habitat for wildlife', 'meeting place for families'], 'value extends to the wider area too …', C.teal, C.tealDark],
  ];
  b += t(160, 206, 'Grouped notes', { size: 17, weight: 700, anchor: 'middle', fill: C.muted }) + t(690, 206, 'One sentence per group', { size: 17, weight: 700, anchor: 'middle', fill: C.muted });
  groups.forEach(([h, notes, sent, f, e], i) => {
    const y = 222 + i * 142;
    b += box(30, y, 500, 128, f, e) + t(50, y + 32, h, { size: 18, weight: 700 });
    notes.forEach((n, j) => { b += t(50, y + 62 + j * 23, '• ' + n, { size: 16 }); });
    b += arrow(534, y + 64, 564, y + 64, { w: 3.5 });
    b += box(570, y + 22, 300, 84, C.panel, e) + badge(596, y + 64, 16, String(i + 1), C.panel) + para(620, y + 58, sent, 25, { size: 15, italic: true }, 20);
  });
  b += box(30, 652, 410, 112, PINK, C.rust) + t(52, 684, 'Excluded', { size: 18, weight: 700, fill: C.rust });
  b += tl(52, 712, ['parents’ worries; holiday care (drawbacks)', 'the head teacher’s identity (detail)'], { size: 16 }, 24);
  b += box(460, 652, 410, 112, C.panel, C.tealDark) + t(482, 684, 'Result: 8 points, 74 words', { size: 18, weight: 700, fill: C.tealDark });
  b += tl(482, 712, ['three groups, three sentences, joined', 'by signposts: “also”, “too”'], { size: 16 }, 24);
  add('06-worked-example',
    svg(900, 788, 'Worked example: school gardens', b),
    'Eight benefit points from the school gardens text are grouped under pupils’ well-being, learning, and community and environment, and each group becomes one sentence of the model summary, linked by “also” and “too”. The drawbacks and the head teacher’s identity are excluded; the model runs to 74 words for the shortened text.',
    'Three groups become three linked sentences; drawbacks and detail stay out.',
    '## Worked example');
}

// 07 Two-part focus
{
  let b = box(30, 110, 840, 64, C.cream, C.olive) + t(450, 149, '“the problems faced by volunteers and how they overcame them”', { size: 18, weight: 700, anchor: 'middle', italic: true });
  b += path('M300,176 L200,214', { stroke: C.ink, w: 3.5, extra: 'marker-end="url(#ah)"' }) + path('M600,176 L700,214', { stroke: C.ink, w: 3.5, extra: 'marker-end="url(#ah)"' });
  const col = (x, h, f, e) => box(x, 220, 410, 190, f, e) + t(x + 205, 256, h, { size: 19, weight: 700, anchor: 'middle', fill: e }) +
    [0, 1, 2].map((j) => box(x + 40, 276 + j * 40, 330, 30, C.panel, e, 6)).join('') ;
  b += col(30, 'Group 1: the problems', C.tealLight, C.tealDark) + col(460, 'Group 2: how they overcame them', C.tealLight, C.tealDark);
  b += t(450, 446, 'Points for both aspects, in separate sentences', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += box(30, 470, 840, 100, PINK, C.rust);
  b += t(52, 504, 'Lopsided: one aspect fully, the other in a single phrase', { size: 18, weight: 700, fill: C.rust });
  b += `<rect x="52" y="526" width="480" height="24" rx="6" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/><rect x="540" y="526" width="56" height="24" rx="6" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>`;
  b += t(612, 544, 'misses reading marks', { size: 16, fill: C.rust, weight: 600 });
  add('07-two-part-focus',
    svg(900, 594, 'When the focus has two parts', b),
    'A two-part focus, such as the problems faced by volunteers and how they overcame them, is planned as two groups with points for each, written in separate sentences. Covering one aspect fully and the other in a single phrase misses reading marks.',
    'Plan a group for each part of the focus, and answer both in full.',
    '## When the focus has two parts');
}
