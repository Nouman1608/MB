import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-igcse-urdu-language-exercise-1-short-answer-questions';
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
// Table. cols: [{w, head, ur?:bool, anchor?}], rows: arrays of cells (string or array of lines).
// English cells wrap at the column width; Urdu cells are right-aligned, one line per array item.
function table(x, y, cols, rows, o = {}) {
  const size = o.size ?? 17, us = o.us ?? 26, ugap = o.ugap ?? Math.round(us * 1.9), lh = Math.round(size * 1.35), pad = 16;
  const headH = o.headH ?? 50, W = cols.reduce((a, c) => a + c.w, 0);
  const prep = rows.map((r) => r.map((cell, j) => {
    const c = cols[j], lines = Array.isArray(cell) ? cell : [cell];
    if (c.ur) return { ur: true, lines, h: (lines.length - 1) * ugap + us * 2.1 };
    const wl = lines.flatMap((l) => wrap(l, c.w - 2 * pad, size, c.bold ? 700 : 400));
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
        c.lines.forEach((l, k) => { s += U(col.uanchor === 'middle' ? cx2 + col.w / 2 : cx2 + col.w - pad, top + us * 1.35 + k * ugap, l, { size: us, fill: col.fill || C.ink, anchor: col.uanchor || 'end' }); });
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
const tick = (x, y, ok) => T(x, y, ok ? '✓' : '✗', { size: 26, weight: 700, fill: ok ? C.tealDark : C.rust, anchor: 'middle' });

// 01 Exercise 1 at a glance
{
  let b = stat(30, 110, 195, 130, '8 marks', 'of the 60 on Paper 1') +
    stat(245, 110, 195, 130, '1 short text', 'printed in the question paper') +
    stat(460, 110, 195, 130, 'Word or phrase', 'each answer, written in Urdu') +
    stat(675, 110, 195, 130, '10-12 min', 'a reasonable time target');
  b += T(450, 290, 'All four reading objectives are tested', { size: 21, weight: 700, anchor: 'middle' });
  const R = [['R1', 'Identify and select relevant information'], ['R2', 'Understand ideas, opinions and attitudes'], ['R3', 'Understand the connections between them'], ['R4', 'Understand what is implied: gist or the writer\'s purpose']];
  R.forEach(([k, d], i) => {
    const x = 30 + i * 215;
    b += card(x, 312, 195, 150, k, [d], { anchor: 'middle', tsize: 24, size: 16, fill: i === 0 ? C.cream : C.panel, edge: i === 0 ? C.mustard : C.panelEdge });
  });
  b += panel(30, 490, 840, 92, C.tealLight, C.tealDark) +
    T(54, 527, 'Most questions are R1 detail questions', { size: 19, weight: 700 }) +
    T(54, 557, 'One or two ask why, how or for what purpose. No dictionaries; everything is in Urdu.', { size: 17, fill: C.muted });
  add('01-exercise-at-a-glance',
    svg(900, 610, 'Exercise 1 at a glance', b),
    'Exercise 1 is worth 8 of Paper 1\'s 60 marks, uses one short printed text and needs one-word or short-phrase answers in Urdu, in about 10-12 minutes. It tests reading objectives R1 to R4, with most questions on R1 detail.',
    'Eight short Urdu answers on one short text, mostly detail with a little gist.',
    '## What the syllabus says');
}

// 02 The six text types
{
  const types = [['Advertisement', ['اشتہار']], ['Brochure or leaflet', ['کتابچہ، پرچہ']], ['Guide', ['رہنما کتابچہ']],
    ['Report', ['رپورٹ']], ['Manual or instructions', ['ہدایات']], ['Newspaper or magazine article', ['اخبار یا رسالے کا مضمون']]];
  let b = '';
  types.forEach(([en, ur], i) => {
    const x = 30 + (i % 3) * 286, y = 110 + Math.floor(i / 3) * 170;
    b += panel(x, y, 268, 150);
    b += para(x + 20, y + 38, en, 228, { size: 19, weight: 700 }).s;
    b += U(x + 248, y + 118, ur[0], { size: 28 });
  });
  add('02-text-types',
    svg(900, 460, 'The text will be one of six types', b),
    'Six cards naming the possible Exercise 1 text types in English and Urdu: advertisement, brochure or leaflet, guide, report, manual or instructions, and newspaper or magazine article.',
    'Recognise the text type first: it tells you where the information sits.',
    '## What the syllabus says');
}

// 03 Layout clues and typical questions
{
  const tb = table(30, 110, [{ w: 210, head: 'Text type', bold: true }, { w: 300, head: 'Layout clues' }, { w: 330, head: 'Typical questions', ur: true }], [
    ['Advertisement', 'bold headline, prices, offers', 'کتنے پیسے؟ کیا فائدہ؟'],
    ['Leaflet / brochure', 'headings, bullet points, opening times', 'کب؟ کہاں؟ کس کے لیے؟'],
    ['Guide', 'places, directions, advice', 'کہاں؟ کیسے پہنچیں؟'],
    ['Instructions / manual', 'numbered steps, polite imperatives', ['پہلے کیا کرنا ہے؟', 'کس بات سے بچنا ہے؟']],
    ['Report / article', 'headline, then who, what, where, when in the first lines', 'کیا ہوا؟ کس نے کہا؟ کیوں؟'],
  ], { minRow: 74 });
  let y = 110 + tb.h + 30, b = tb.s;
  b += T(450, y + 4, 'Spotting a rule or a step in instructions', { size: 20, weight: 700, anchor: 'middle' });
  y += 24;
  b += panel(30, y, 410, 150, C.cream, C.mustard) + T(50, y + 34, 'Polite imperative ending', { size: 18, weight: 700 }) + U(420, y + 34, 'ـیے', { size: 28 }) +
    U(420, y + 112, 'رکھیے، بھریے، کیجیے', { size: 28 });
  b += panel(460, y, 410, 150, C.cream, C.mustard) + T(480, y + 34, 'Negative', { size: 18, weight: 700 }) + U(850, y + 34, 'نہ', { size: 28 }) +
    U(850, y + 112, 'فلیش استعمال نہ کریں', { size: 28 });
  y += 150;
  add('03-layout-clues',
    svg(900, y + 30, 'Layout clues and the questions they invite', b),
    'A table pairing each text type with its layout clues and typical Urdu question words, for example prices and offers in an advertisement leading to questions about cost. Below, the polite imperative ending and the negative نہ mark a rule or step in instructions.',
    'The layout tells you where to look before you read closely.',
    '## How each text type helps you');
}

// 04 Question words
{
  const tb = table(30, 110, [{ w: 270, head: 'Question word', ur: true }, { w: 200, head: 'Meaning', bold: true }, { w: 370, head: 'Your answer must be' }], [
    ['کب', 'when', 'a day, date or time'],
    ['کتنے دن / کتنے عرصے', 'for how long', 'a duration, sometimes worked out'],
    ['کہاں / کس جگہ', 'where', 'a place'],
    ['کتنا / کتنے / کتنی', 'how much, how many', 'a number or amount'],
    ['کون / کس نے', 'who', 'a person or group'],
    ['کیا', 'what', 'a thing or an action'],
    ['کیسے / کس طرح', 'how', 'a method or means'],
    ['کیوں', 'why', 'a reason, often near کیونکہ or اس لیے'.replace(/, often.*/, '')],
    ['کس مقصد کے لیے', 'for what purpose', 'the gist of the whole text'],
  ], { minRow: 64, us: 25 });
  add('04-question-words',
    svg(900, 110 + tb.h + 30, 'The question word sets the answer form', tb.s),
    'A table of Urdu question words with their meanings and the form of answer each needs: کب wants a time, کتنے دن a duration, کہاں a place, کتنا a number, کون a person, کیا a thing, کیسے a method, کیوں a reason and کس مقصد کے لیے the gist.',
    'Predict the answer form from the question word before you look at the text.',
    '## Reading the question word first');
}
