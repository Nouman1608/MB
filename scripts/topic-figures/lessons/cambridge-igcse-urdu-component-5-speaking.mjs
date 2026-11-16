import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-igcse-urdu-component-5-speaking';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- Local helpers (self-contained; house style only) ----
const X = (s) => String(s).replace(/&(?!amp;|lt;|gt;|#\d+;)/g, '&amp;').replace(/</g, '&lt;');
const T = (x, y, s, o = {}) => t(x, y, X(s), o);
// Urdu text: Nastaliq, own <text> element, right-aligned by default (no direction attribute).
const U = (x, y, s, { size = 28, fill = C.ink, anchor = 'end' } = {}) =>
  `<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" text-anchor="${anchor}" font-family="Noto Nastaliq Urdu">${X(s)}</text>`;
const cw = (size, weight = 400) => size * (weight >= 600 ? 0.58 : 0.52);
function wrap(s, width, size = 17, weight = 400) {
  const max = Math.max(4, Math.floor(width / cw(size, weight)));
  const out = []; let cur = '';
  for (const w of String(s).split(/\s+/).filter(Boolean)) {
    if (!cur) cur = w; else if ((cur + ' ' + w).length <= max) cur += ' ' + w; else { out.push(cur); cur = w; }
  }
  if (cur) out.push(cur);
  return out;
}
// Wrapped paragraph; returns {s, h}. lh = line height.
function para(x, y, s, width, o = {}) {
  const size = o.size || 17, lh = o.lh || Math.round(size * 1.32);
  const lines = wrap(s, width, size, o.weight || 400);
  return { s: lines.map((l, i) => T(x, y + i * lh, l, o)).join(''), h: lines.length * lh, n: lines.length };
}
// Stat tile: big figure + small note, centred.
const stat = (x, y, w, h, big, small, fill = C.tealLight, edge = C.tealDark) => {
  const p = para(x + w / 2, y + 74, small, w - 30, { size: 16, fill: C.muted, anchor: 'middle', lh: 21 });
  return panel(x, y, w, h, fill, edge) + T(x + w / 2, y + 44, big, { size: 26, weight: 700, anchor: 'middle' }) + p.s;
};
// Card with bold title and wrapped body lines (array of strings, each wrapped). Returns string.
function card(x, y, w, h, title, body = [], o = {}) {
  const pad = o.pad ?? 20, size = o.size ?? 17, mid = o.anchor === 'middle';
  const tx = mid ? x + w / 2 : x + pad, anchor = mid ? 'middle' : 'start';
  let s = panel(x, y, w, h, o.fill || C.panel, o.edge || C.panelEdge), cy = y + pad;
  if (o.kicker) { s += T(tx, cy + 14, o.kicker, { size: 15, weight: 700, fill: o.kfill || C.tealDark, anchor }); cy += 26; }
  if (title) { const p = para(tx, cy + (o.tsize ?? 20) * 0.85, title, w - 2 * pad, { size: o.tsize ?? 20, weight: 700, anchor, fill: o.tfill || C.ink }); s += p.s; cy += p.h + 6; }
  for (const b of body) { const p = para(tx, cy + size * 0.85, b, w - 2 * pad, { size, fill: o.bfill || C.muted, anchor, lh: Math.round(size * 1.35) }); s += p.s; cy += p.h + (o.gap ?? 6); }
  return s;
}
// Numbered step rows: [title, desc]. Returns {s, h}.
function steps(y, list, o = {}) {
  const x = o.x ?? 30, w = o.w ?? 840, gap = o.gap ?? 12, size = o.size ?? 17; let s = '', cy = y;
  list.forEach(([title, desc], i) => {
    const d = para(x + 92, 0, desc, w - 115, { size, fill: C.muted, lh: Math.round(size * 1.35) });
    const h = Math.max(o.minH ?? 84, 34 + 26 + d.h + 4);
    s += panel(x, cy, w, h) + badge(x + 46, cy + h / 2, 24, String(i + 1), o.hi === i ? C.mustard : C.cream);
    s += T(x + 92, cy + 38, title, { size: 20, weight: 700 }) + para(x + 92, cy + 66, desc, w - 115, { size, fill: C.muted, lh: Math.round(size * 1.35) }).s;
    cy += h + gap;
  });
  return { s, h: cy - y - gap };
}
const harrow = (x1, x2, y, o = {}) => arrow(x1, y, x2, y, { w: 3.5, ...o });
const varrow = (x, y1, y2, o = {}) => arrow(x, y1, x, y2, { w: 3.5, ...o });
// ---- end helpers ----

// 01 Component 5 at a glance
{
  let b = stat(30, 110, 260, 130, '60 marks', 'marked by the centre, moderated by Cambridge') +
    stat(320, 110, 260, 130, 'about 10-12 min', 'whole test, in person, entirely in Urdu') +
    stat(610, 110, 260, 130, 'Grade 1 to 5', '1 (high) to 5 (low), as a separate endorsement');
  b += T(450, 290, 'How the test is run and checked', { size: 21, weight: 700, anchor: 'middle' });
  const flow = [
    ['Teacher/examiner', 'conducts the test at your own centre'],
    ['Centre marks it', 'out of 60 marks (internal marking)'],
    ['Recorded sample', 'of performances sent to Cambridge'],
    ['Cambridge', 'moderates the marking externally'],
  ];
  flow.forEach(([h, d], i) => {
    const x = 30 + i * 216;
    b += card(x, 315, 192, 122, h, [d], { anchor: 'middle', tsize: 18, size: 16, pad: 16 });
    if (i < 3) b += harrow(x + 194, x + 214, 376);
  });
  b += panel(30, 467, 840, 92, C.cream, C.mustard) +
    T(54, 504, 'No written question paper', { size: 19, weight: 700 }) +
    T(54, 534, 'Speaking tests take place before the main written examination series.', { size: 17, fill: C.muted });
  add('01-component-at-a-glance',
    svg(900, 587, 'Component 5 Speaking at a glance', b),
    'Component 5 Speaking is worth 60 marks, lasts about 10-12 minutes and is graded 1 to 5 as a separate endorsement. The teacher conducts and marks the test at the centre, then a recorded sample goes to Cambridge for external moderation.',
    'A teacher-run, 60-mark spoken test, moderated by Cambridge and graded 1 to 5.',
    '## Syllabus coverage');
}

// 02 Three parts in sequence
{
  const x0 = 60, W = 780, unit = W / 11; // widths proportional to the upper timing of each part (3, 4, 4 min)
  const parts = [
    ['Part 1', 'Presentation', '2-3 min', 3, C.cream, ['Prepared outline on a topic you chose in advance', 'Optional card of prompt headings and 3-4 materials (maps, statistics, photos)']],
    ['Part 2', 'Discussion', '3-4 min', 4, C.tealLight, ['Examiner discusses your presentation with you', 'Explain and justify opinions; natural, unscripted answers']],
    ['Part 3', 'General Conversation', '3-4 min', 4, C.teal, ['Two or three general topics, not known in advance', 'Drawn from the syllabus general topic areas', 'Worth 20 marks']],
  ];
  let b = '', x = x0;
  parts.forEach(([p, name, time, w, fill, lines], i) => {
    const ww = w * unit;
    b += `<rect x="${x}" y="115" width="${ww}" height="92" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>`;
    b += T(x + ww / 2, 150, p + ': ' + time, { size: 19, weight: 700, anchor: 'middle' });
    b += T(x + ww / 2, 180, name, { size: 17, anchor: 'middle', fill: C.ink });
    x += ww;
  });
  b += T(x0, 240, '0 min', { size: 15, fill: C.muted }) + T(x0 + W, 240, 'up to 11 min', { size: 15, fill: C.muted, anchor: 'end' });
  // detail cards
  parts.forEach(([p, name, time, w, fill, lines], i) => {
    const cx = 30 + i * 286;
    b += card(cx, 270, 268, 262, p + ': ' + name, lines, { kicker: time, fill: C.panel, size: 16, gap: 10, tsize: 19 });
  });
  b += panel(30, 557, 840, 92, C.cream, C.mustard) +
    T(54, 594, 'Timing check', { size: 19, weight: 700 }) +
    T(54, 624, 'The parts add up to 8-11 minutes; the syllabus gives about 10-12 minutes for the whole test.', { size: 17, fill: C.muted });
  add('02-three-parts',
    svg(900, 677, 'The three parts of the Speaking test', b),
    'A timeline of the three parts: Part 1 Presentation (2-3 minutes), Part 2 Discussion of the presentation (3-4 minutes) and Part 3 General Conversation on two or three unseen topics (3-4 minutes, 20 marks).',
    'Presentation, then discussion of it, then an unprepared general conversation.',
    '## Syllabus coverage');
}

// 03 Separate endorsement
{
  let b = '';
  b += card(30, 120, 250, 100, 'Paper 1', ['Reading and Writing'], { anchor: 'middle', size: 17 });
  b += card(30, 250, 250, 100, 'Paper 2', ['Listening'], { anchor: 'middle', size: 17 });
  b += path('M285,170 C340,170 340,235 395,235', { w: 3.5 }) + path('M285,300 C340,300 340,235 395,235', { w: 3.5 }) + harrow(395, 430, 235);
  b += card(440, 175, 430, 120, 'Overall IGCSE grade', ['Urdu as a Second Language (0539)'], { anchor: 'middle', fill: C.tealLight, edge: C.tealDark, tsize: 21 });
  b += `<line x1="30" y1="390" x2="870" y2="390" stroke="${C.panelEdge}" stroke-width="3" stroke-dasharray="10 8"/>`;
  b += T(450, 382, 'Speaking does not add marks to the grade above', { size: 16, fill: C.muted, anchor: 'middle', italic: true });
  b += card(30, 420, 250, 120, 'Component 5', ['Speaking', '(optional)'], { anchor: 'middle', size: 17, fill: C.cream, edge: C.mustard, gap: 0 });
  b += harrow(290, 430, 480);
  b += card(440, 420, 430, 120, 'Separate endorsement', ['Its own grade from 1 (high) to 5 (low)'], { anchor: 'middle', fill: C.cream, edge: C.mustard, tsize: 21 });
  b += para(450, 590, 'The centre decides whether to offer Speaking. The overall IGCSE grade is unaffected either way.', 760, { size: 17, anchor: 'middle', fill: C.muted }).s;
  add('03-separate-endorsement',
    svg(900, 640, 'Speaking sits outside the IGCSE grade', b),
    'Paper 1 Reading and Writing and Paper 2 Listening combine into the overall IGCSE grade. Component 5 Speaking is optional and leads to its own separate endorsement graded 1 (high) to 5 (low).',
    'Speaking earns its own 1-5 endorsement; it does not change the IGCSE grade.',
    '## Where this fits in 0539');
}

// 04 From prepared to spontaneous
{
  let b = '';
  b += arrow(70, 150, 830, 150, { w: 6, color: C.tealDark, marker: 'ahT' });
  b += T(70, 130, 'most prepared', { size: 17, weight: 700, fill: C.tealDark }) + T(830, 130, 'most spontaneous', { size: 17, weight: 700, fill: C.tealDark, anchor: 'end' });
  const cols = [
    ['Part 1', 'Presentation', 'You know the topic', ['Prepare a topic with real depth', 'Rehearse the 2-3 minute outline'], C.cream],
    ['Part 2', 'Discussion', 'You know the topic, not the questions', ['Answer "why" and "what do you think" questions out loud', 'Defend your content without a script'], C.tealLight],
    ['Part 3', 'Conversation', 'You know neither', ['Broad, regular spoken practice on everyday subjects', 'No memorised script will fit'], C.teal],
  ];
  cols.forEach(([p, n, know, prep, fill], i) => {
    const x = 30 + i * 286, cx = x + 134;
    b += `<circle cx="${cx}" cy="150" r="13" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>`;
    b += varrow(cx, 166, 196);
    b += panel(x, 200, 268, 310);
    b += `<rect x="${x}" y="200" width="268" height="58" rx="14" fill="${fill}" stroke="${C.panelEdge}" stroke-width="2.5"/>`;
    b += T(cx, 237, p + ': ' + n, { size: 20, weight: 700, anchor: 'middle' });
    b += para(cx, 292, know, 230, { size: 17, weight: 700, anchor: 'middle', fill: C.ink, lh: 23 }).s;
    b += T(x + 20, 365, 'How to prepare', { size: 15, weight: 700, fill: C.tealDark });
    let cy = 392;
    prep.forEach((s) => { b += T(x + 20, cy, '•', { size: 17, weight: 700 }); const p = para(x + 38, cy, s, 212, { size: 16, fill: C.muted, lh: 21 }); b += p.s; cy += p.h + 10; });
  });
  add('04-prepared-to-spontaneous',
    svg(900, 540, 'From prepared to spontaneous', b),
    'A scale from most prepared to most spontaneous. Part 1 uses a topic chosen in advance; Part 2 keeps the topic but the questions are unknown; in Part 3 both topics and questions are unknown, so only broad spoken practice prepares you.',
    'Each part asks for less script and more spontaneous Urdu than the one before.',
    '## How to approach it');
}

// 05 Choosing a Part 1 topic
{
  let b = '';
  b += `<circle cx="365" cy="265" r="140" fill="${C.cream}" fill-opacity="0.85" stroke="${C.ink}" stroke-width="3"/>`;
  b += `<circle cx="535" cy="265" r="140" fill="${C.teal}" fill-opacity="0.7" stroke="${C.ink}" stroke-width="3"/>`;
  b += T(300, 255, 'A personal', { size: 19, weight: 700, anchor: 'middle' }) + T(300, 280, 'interest', { size: 19, weight: 700, anchor: 'middle' });
  b += T(595, 245, 'Urdu-speaking', { size: 18, weight: 700, anchor: 'middle' }) + T(595, 270, 'society or', { size: 18, weight: 700, anchor: 'middle' }) + T(595, 295, 'culture', { size: 18, weight: 700, anchor: 'middle' });
  b += T(450, 257, 'strong', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(450, 280, 'topic', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += card(30, 430, 410, 170, 'Examples from the guide', ['• a favourite regional cuisine', '• a family tradition', '• a well-known festival', '• a piece of Urdu literature or poetry'], { size: 17, gap: 2 });
  b += card(460, 430, 410, 170, 'Check before you commit', ['Enough depth for a 2-3 min outline and 3-4 min of follow-up discussion?', 'Not too broad, not too narrow, not only loosely linked to Urdu culture?'], { size: 17, gap: 10, fill: C.cream, edge: C.mustard });
  add('05-choosing-a-topic',
    svg(900, 630, 'Choosing a Part 1 topic', b),
    'Two overlapping circles: a personal interest and Urdu-speaking society or culture; a strong topic sits in the overlap. Examples are a regional cuisine, a family tradition, a festival or a piece of Urdu literature, checked for enough depth to sustain both the presentation and the discussion.',
    'Pick where your own interest meets Urdu-speaking culture, with depth for 5-7 minutes of talk.',
    '## Choosing a strong Part 1 presentation topic');
}

// 06 Preparing for Part 3
{
  const st = steps(110, [
    ['Find the topic areas', 'Identify the syllabus general topic areas for Part 3, and confirm the current list with a teacher.'],
    ['Build a bank, not a script', 'For each area, prepare useful vocabulary and 2-3 opinion phrases in Urdu.'],
    ['Practise without warning', 'Have a teacher or fluent speaker ask questions on a topic you did not choose.'],
    ['Aim for natural replies', 'Practise spontaneous answers, not word-perfect recitation: Part 3 rewards unscripted conversation.'],
  ], { minH: 100 });
  add('06-preparing-for-part-3',
    svg(900, 110 + st.h + 30, 'A routine for the general conversation', st.s),
    'Four steps: identify the general topic areas, build a vocabulary and opinion-phrase bank for each, practise answering unannounced questions with a teacher or fluent speaker, and aim for natural rather than recited answers.',
    'Prepare words and opinions, not scripts, then practise being surprised.',
    '## Worked example: preparing for the unpredictable general conversation');
}
