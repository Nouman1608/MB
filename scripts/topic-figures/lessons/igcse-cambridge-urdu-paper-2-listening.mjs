import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-cambridge-urdu-paper-2-listening';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- Local helpers (self-contained; house style only) ----
const X = (s) => String(s).replace(/&(?!amp;|lt;|gt;|#\d+;)/g, '&amp;').replace(/</g, '&lt;');
const T = (x, y, s, o = {}) => t(x, y, X(s), o);
// Urdu text: Nastaliq, own <text> element, right-aligned by default (no direction attribute).
const U = (x, y, s, { size = 28, fill = C.ink, anchor = 'end' } = {}) =>
  `<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" text-anchor="${anchor}" font-family="Noto Nastaliq Urdu">&#x200F;${X(s)}&#x200F;</text>`; // RLM marks keep digits and end punctuation in RTL order
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
// Table. cols: [{w, head, ur?:bool, anchor?}], rows: arrays of cells (string or array of lines).
// English cells wrap at the column width; Urdu cells are right-aligned, one line per array item.
function table(x, y, cols, rows, o = {}) {
  const size = o.size ?? 17, us = o.us ?? 26, ugap = o.ugap ?? Math.round(us * 2.1), lh = Math.round(size * 1.35), pad = 16;
  const headH = o.headH ?? 50, W = cols.reduce((a, c) => a + c.w, 0);
  const prep = rows.map((r) => r.map((cell, j) => {
    const c = cols[j], g = cell && cell.u ? cell.g : null, cc = cell && cell.u ? cell.u : cell, lines = Array.isArray(cc) ? cc : [cc];
    if (c.ur && !(cell && cell.en)) return { ur: true, lines, g, h: (lines.length - 1) * ugap + us * 3.0 + 12 + (g ? 22 : 0) };
    const wl = (cell && cell.en ? [cell.en] : lines).flatMap((l) => wrap(l, c.w - 2 * pad, size, c.bold ? 700 : 400));
    return { ur: false, lines: wl, h: wl.length * lh + 22 };
  }));
  const hs = prep.map((r) => Math.max(o.minRow ?? 56, ...r.map((c) => c.h)));
  const H = headH + hs.reduce((a, b) => a + b, 0);
  let s = panel(x, y, W, H) + `<path d="M${x + 1.25},${y + headH} L${x + 1.25},${y + 14} Q${x + 1.25},${y + 1.25} ${x + 14},${y + 1.25} L${x + W - 14},${y + 1.25} Q${x + W - 1.25},${y + 1.25} ${x + W - 1.25},${y + 14} L${x + W - 1.25},${y + headH} Z" fill="${C.teal}"/>`;
  let cx = x;
  cols.forEach((c, j) => {
    s += T(c.ur ? cx + c.w - pad : cx + pad, y + headH / 2 + 7, c.head, { size: 17, weight: 700, anchor: c.ur ? 'end' : 'start' });
    if (j) s += `<line x1="${cx}" y1="${y}" x2="${cx}" y2="${y + H}" stroke="${C.panelEdge}" stroke-width="2"/>`;
    cx += c.w;
  });
  let cy = y + headH;
  prep.forEach((r, i) => {
    if (o.hiRows?.includes(i)) s += `<rect x="${x + 2}" y="${cy}" width="${W - 4}" height="${hs[i]}" fill="${C.cream}"/>`;
    s += `<line x1="${x}" y1="${cy}" x2="${x + W}" y2="${cy}" stroke="${C.panelEdge}" stroke-width="2"/>`;
    let cx2 = x;
    r.forEach((c, j) => {
      const col = cols[j];
      if (c.ur) {
        const top = cy + (hs[i] - c.h) / 2;
        const ux = col.uanchor === 'middle' ? cx2 + col.w / 2 : cx2 + col.w - pad;
        c.lines.forEach((l, k) => { s += U(ux, top + 6 + us * 2.2 + k * ugap, l, { size: us, fill: col.fill || C.ink, anchor: col.uanchor || 'end' }); });
        if (c.g) s += T(ux, top + c.h - 14, c.g, { size: 15, fill: col.gfill || C.muted, italic: true, anchor: col.uanchor || 'end' });
      } else {
        const top = cy + (hs[i] - c.lines.length * lh) / 2 + size * 0.95;
        c.lines.forEach((l, k) => { s += T(cx2 + pad, top + k * lh, l, { size, fill: col.fill || (j === 0 ? C.ink : C.muted), weight: col.bold ? 700 : 400 }); });
      }
      cx2 += col.w;
    });
    cy += hs[i];
  });
  return { s, h: H };
}
const SV = (h, title, body) => svg(900, Math.ceil(h), title, body);
// Urdu word chip with English gloss underneath. Returns string.
const chip = (x, y, w, ur, en, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${o.h ?? 104}" rx="12" fill="${o.fill || C.panel}" stroke="${o.edge || C.panelEdge}" stroke-width="2.5"/>` +
  U(x + w / 2, y + (o.ub ?? 52), ur, { size: o.us ?? 26, anchor: 'middle' }) + (en ? T(x + w / 2, y + (o.h ?? 104) - 16, en, { size: 16, fill: C.muted, anchor: 'middle' }) : '');
// Approximate Nastaliq line width.
const uw = (s, size = 26) => s.length * size * 0.5;
const tick = (x, y, ok) => T(x, y, ok ? '✓' : '✗', { size: 26, weight: 700, fill: ok ? C.tealDark : C.rust, anchor: 'middle' });

// 01 At a glance and weighting
{
  let b = stat(30, 110, 195, 124, '33%', 'of the qualification') +
    stat(245, 110, 195, 124, '35-45 min', 'approximately') +
    stat(460, 110, 195, 124, '30 marks', 'four exercises') +
    stat(675, 110, 195, 124, 'Heard twice', 'pauses to read and write');
  b += T(450, 284, 'Fewer marks than Paper 1, but a third of the grade', { size: 20, weight: 700, anchor: 'middle' });
  const x0 = 60, W = 780;
  b += `<rect x="${x0}" y="304" width="${W * 0.67}" height="80" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3"/>` + T(x0 + W * 0.335, 340, 'Paper 1: 60 marks', { size: 18, weight: 700, anchor: 'middle' }) + T(x0 + W * 0.335, 366, '67%, 2 hours', { size: 16, anchor: 'middle', fill: C.muted });
  b += `<rect x="${x0 + W * 0.67}" y="304" width="${W * 0.33}" height="80" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + T(x0 + W * 0.835, 340, 'Paper 2: 30 marks', { size: 18, weight: 700, anchor: 'middle' }) + T(x0 + W * 0.835, 366, '33%', { size: 16, anchor: 'middle' });
  b += panel(30, 410, 840, 110, C.cream, C.mustard) + T(54, 446, 'Do not under-prepare: listening needs its own practice', { size: 18, weight: 700 }) +
    T(54, 476, 'Exam audio is released only to centres, so practise with Urdu news broadcasts,', { size: 16, fill: C.muted }) + T(54, 500, 'interviews and radio dialogues of a similar style and register.', { size: 16, fill: C.muted });
  add('01-paper-at-a-glance',
    SV(548, 'Paper 2 Listening at a glance', b),
    'Paper 2 Listening lasts about 35-45 minutes and is worth 30 marks, 33% of the qualification against Paper 1\'s 60 marks and 67%. Everything is heard twice. Practice relies on general Urdu listening material because exam audio is released only to centres.',
    'Half Paper 1\'s marks, but a full third of the grade.',
    '## Where this fits in 0539');
}

// 02 Four exercises
{
  let b = '';
  const ex = [['1', 'Short answer questions', 8, 'short texts: announcement, phone message, brief dialogue', 'L1, L2'], ['2', 'Gap-fill sentences', 8, 'one longer text: conversation, interview, monologue, talk', 'L1, L2'],
    ['3', 'Multiple matching', 6, 'six short extracts: match each speaker to content', 'L3, L4'], ['4', 'Multiple-choice questions', 8, 'a discussion between two speakers', 'L1-L4']];
  ex.forEach(([n, name, m, d, L], i) => {
    const y = 110 + i * 104;
    b += panel(30, y, 840, 92) + badge(70, y + 46, 22, n, C.cream) + T(108, y + 38, name, { size: 19, weight: 700 }) + T(108, y + 66, d, { size: 15, fill: C.muted });
    b += `<rect x="600" y="${y + 26}" width="${m * 20}" height="40" rx="6" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + T(600 + m * 10, y + 52, m + ' marks', { size: 15, weight: 700, anchor: 'middle' });
    b += T(850, y + 52, L, { size: 16, weight: 700, fill: C.tealDark, anchor: 'end' });
  });
  b += T(450, 110 + 4 * 104 + 22, 'Total 30 marks. Questions and answers in Urdu; no dictionaries.', { size: 16, fill: C.muted, anchor: 'middle' });
  add('02-four-exercises',
    SV(110 + 4 * 104 + 52, 'Four exercises, 30 marks', b),
    'Paper 2\'s four exercises: 1 short answer questions on short texts (8 marks, L1 and L2), 2 gap-fill on one longer text (8 marks, L1 and L2), 3 multiple matching of six speakers (6 marks, L3 and L4), and 4 multiple-choice on a two-speaker discussion (8 marks, L1 to L4).',
    'Short texts first, a two-speaker discussion last.',
    '## Syllabus coverage');
}

// 03 Objectives grid
{
  let b = '';
  const L = [['L1', 'identify and select relevant information'], ['L2', 'understand ideas, opinions and attitudes'], ['L3', 'connections between ideas, opinions, attitudes'], ['L4', 'what is implied: gist, purpose, intention, feelings']];
  const cov = [[1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 1, 1], [1, 1, 1, 1]];
  const x0 = 430, cw = 110;
  ['Ex. 1', 'Ex. 2', 'Ex. 3', 'Ex. 4'].forEach((e, j) => { b += T(x0 + j * cw + cw / 2, 136, e, { size: 17, weight: 700, anchor: 'middle' }); });
  L.forEach(([k, d], i) => {
    const y = 152 + i * 96;
    b += panel(30, y, 840, 84) + T(54, y + 36, k, { size: 20, weight: 700 }) + para(100, y + 34, d, 300, { size: 15, fill: C.muted, lh: 19 }).s;
    cov.forEach((c, j) => { if (c[i]) b += `<circle cx="${x0 + j * cw + cw / 2}" cy="${y + 42}" r="18" fill="${i < 2 ? C.teal : C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`; else b += `<circle cx="${x0 + j * cw + cw / 2}" cy="${y + 42}" r="6" fill="${C.panelEdge}"/>`; });
  });
  b += panel(30, 548, 840, 70, C.cream, C.mustard) + T(54, 591, 'Only Exercise 4 tests all four objectives; Exercise 3 tests only L3 and L4.', { size: 17, weight: 600 });
  add('03-objectives-grid',
    SV(646, 'Which exercise tests which objective', b),
    'A grid of the four listening objectives against the four exercises: Exercises 1 and 2 test L1 and L2, Exercise 3 tests L3 and L4, and Exercise 4 tests all four, L1 to L4.',
    'Literal objectives early, inference later, everything in Exercise 4.',
    '## Syllabus coverage');
}

// 04 Literal to inferential
{
  let b = '';
  b += arrow(70, 140, 830, 140, { w: 6, color: C.tealDark, marker: 'ahT' }) + T(70, 124, 'stated facts', { size: 16, weight: 700, fill: C.tealDark }) + T(830, 124, 'implied meaning', { size: 16, weight: 700, fill: C.tealDark, anchor: 'end' });
  const cols = [['Ex. 1-2', 'Catch the fact', ['a time, a place, a name, a reason', 'over-prepare numbers, times, dates and place names', 'take notes while listening'], C.tealLight, C.tealDark],
    ['Ex. 3', 'Tell views apart', ['several speakers, a similar topic', 'listen for tone and opinion words, not topic keywords'], C.cream, C.mustard],
    ['Ex. 4', 'Infer', ['sarcasm, hesitation, a change of mind', 'an opinion that shifts partway through a turn'], C.teal, C.tealDark]];
  cols.forEach(([k, h, ls, f, e], i) => {
    const x = 30 + i * 286;
    b += `<circle cx="${x + 134}" cy="140" r="12" fill="${f}" stroke="${C.ink}" stroke-width="3"/>` + varrow(x + 134, 154, 180);
    b += card(x, 184, 268, 262, h, ls.map((l) => '• ' + l), { kicker: k, fill: f, edge: e, size: 16, gap: 10 });
  });
  add('04-literal-to-inferential',
    SV(474, 'From literal to inferential listening', b),
    'A scale from stated facts to implied meaning. Exercises 1 and 2 test facts such as times, places and names; Exercise 3 asks you to tell speakers\' views apart by tone and opinion words; Exercise 4 needs inference about sarcasm, hesitation and changes of mind.',
    'The paper moves from what is said towards what is meant.',
    '## How to approach it');
}

// 05 Two hearings
{
  let b = '';
  b += card(30, 110, 400, 236, 'First hearing', ['Get the overall gist.', 'Locate roughly where each answer sits.', 'Take notes; do not write final answers yet.'], { kicker: 'HEARING 1', fill: C.tealLight, edge: C.tealDark, size: 17, gap: 10 });
  b += harrow(436, 464, 228, { w: 5 });
  b += card(470, 110, 400, 236, 'Second hearing', ['Fill in precise details.', 'Check what you noted.', 'Confirm, then write the answer.'], { kicker: 'HEARING 2', fill: C.cream, edge: C.mustard, size: 17, gap: 10 });
  b += panel(30, 366, 840, 104) + T(54, 402, 'Speaking practice helps listening too', { size: 18, weight: 700 }) +
    T(54, 432, 'Component 5 skills, such as recognising register and following a conversation\'s turns,', { size: 16, fill: C.muted }) + T(54, 454, 'overlap closely with what Paper 2 tests.', { size: 16, fill: C.muted });
  add('05-two-hearings',
    SV(498, 'Use each hearing for a different job', b),
    'Every exercise is heard twice: use the first hearing for gist, rough location of answers and notes, and the second to fill in and check precise details before writing. Speaking practice for Component 5 overlaps with these listening skills.',
    'Gist and location first time, precise details second time.',
    '## How to approach it');
}
