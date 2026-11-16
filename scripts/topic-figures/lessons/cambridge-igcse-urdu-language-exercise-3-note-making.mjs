import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-igcse-urdu-language-exercise-3-note-making';
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
    if (c.ur) return { ur: true, lines, g, h: (lines.length - 1) * ugap + us * 2.6 + 12 + (g ? 22 : 0) };
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
        const ux = col.uanchor === 'middle' ? cx2 + col.w / 2 : cx2 + col.w - pad;
        c.lines.forEach((l, k) => { s += U(ux, top + 6 + us * 1.85 + k * ugap, l, { size: us, fill: col.fill || C.ink, anchor: col.uanchor || 'end' }); });
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
const uw = (s, size = 26) => s.length * size * 0.42;
const tick = (x, y, ok) => T(x, y, ok ? '✓' : '✗', { size: 26, weight: 700, fill: ok ? C.tealDark : C.rust, anchor: 'middle' });

// 01 Exercise 3 at a glance
{
  let b = stat(30, 110, 195, 130, '9 marks', 'brief notes under given headings') +
    stat(245, 110, 195, 130, '15-18 min', 'the longest reading on the paper') +
    stat(460, 110, 195, 130, 'R1 to R4', 'all four reading objectives') +
    stat(675, 110, 195, 130, 'Feeds Ex. 4', 'same text as the summary', C.cream, C.mustard);
  b += T(450, 290, 'Three features define the task', { size: 21, weight: 700, anchor: 'middle' });
  const f = [['The headings are given', 'A true point that fits no heading earns nothing.'], ['The notes are brief', 'Full sentences are not required; a precise phrase is enough.'], ['The space is a guide', 'The number of bullets or lines = the number of separate points needed.']];
  f.forEach(([h, d], i) => { b += card(30 + i * 286, 312, 268, 150, h, [d], { size: 16, tsize: 19 }); });
  add('01-exercise-at-a-glance',
    SV(490, 'Exercise 3 at a glance', b),
    'Exercise 3 is worth 9 marks, needs about 15-18 minutes, tests R1 to R4 and uses the same text as the Exercise 4 summary. The headings are supplied, notes are brief phrases, and the space shows how many separate points are needed.',
    'Brief, separate points under the headings you are given.',
    '## What the syllabus says');
}

// 02 Weak note versus good note
{
  const tb = table(30, 110, [{ w: 400, head: 'Text sentence', ur: true }, { w: 170, head: 'Weak note', ur: true, fill: C.rust }, { w: 270, head: 'Good note', ur: true, fill: C.tealDark }], [
    [['بہت سے طلبہ صبح ناشتہ کیے بغیر', 'اسکول آ جاتے ہیں۔'], { u: 'ناشتہ', g: 'breakfast' }, { u: 'بغیر ناشتے کے اسکول آنا', g: 'coming to school without breakfast' }],
    [['سائیکل چلانے سے فضا میں', 'دھواں کم پھیلتا ہے۔'], { u: 'سائیکل', g: 'bicycle' }, { u: 'فضائی آلودگی میں کمی', g: 'less air pollution' }],
    [['داخلے کے لیے پہلے سے ٹکٹ', 'خریدنا ضروری ہے۔'], { u: 'ٹکٹ', g: 'ticket' }, { u: 'پیشگی ٹکٹ ضروری', g: 'ticket in advance required' }],
    [['روزانہ آدھا گھنٹہ چہل قدمی سے', 'دل مضبوط ہوتا ہے۔'], { u: 'چہل قدمی', g: 'walking' }, { u: 'دل مضبوط ہوتا ہے', g: 'the heart gets stronger' }],
  ], { us: 24 });
  let y = 110 + tb.h + 24, b = tb.s;
  b += panel(30, y, 840, 96, C.cream, C.mustard) + T(54, y + 36, 'A weak note names a topic; a good note states the point', { size: 19, weight: 700 }) +
    T(54, y + 68, 'Under the heading "benefits of exercise", walking is the topic; the strong heart is the benefit.', { size: 17, fill: C.muted });
  add('02-topic-versus-point',
    SV(y + 124, 'A note is a point, not a topic', b),
    'Four text sentences with a weak note and a good note. The weak notes name only a topic (breakfast, bicycle, ticket, walking); the good notes state the point, such as بغیر ناشتے کے اسکول آنا and دل مضبوط ہوتا ہے.',
    'The shortest phrase that still carries the full point.',
    '## What a good note looks like');
}

// 03 Ways to shorten in Urdu
{
  let b = '';
  const H = 236;
  const box = (x, y, title, inner) => panel(x, y, 410, H) + T(x + 20, y + 36, title, { size: 19, weight: 700 }) + inner;
  const strip = (x, y, ur, en, kind) => {
    const f = kind === 'bad' ? ['#fbf1ea', C.rust] : kind === 'good' ? [C.tealLight, C.tealDark] : kind === 'hi' ? [C.cream, C.mustard] : [C.panel, C.panelEdge];
    return `<rect x="${x}" y="${y}" width="370" height="76" rx="10" fill="${f[0]}" stroke="${f[1]}" stroke-width="2"/>` +
      (kind === 'bad' || kind === 'good' ? tick(x + 28, y + 46, kind === 'good') : '') + U(x + 350, y + 52, ur, { size: 26 }) +
      T(x + (kind === 'bad' || kind === 'good' ? 55 : 20), y + 44, en, { size: 16, fill: kind === 'bad' ? C.rust : kind === 'good' ? C.tealDark : kind === 'hi' ? C.olive : C.muted, weight: 600 });
  };
  b += box(30, 110, 'Drop the helper verb', U(420, 200, 'یہاں پانی کم ہوتا جا رہا ہے', { size: 24, fill: C.muted }) + varrow(398, 220, 258) + U(420, 310, 'پانی کی کمی', { size: 27, fill: C.tealDark }) + T(50, 302, 'helper verbs go', { size: 16, fill: C.muted }));
  b += box(460, 110, 'Use a verbal noun', U(850, 206, 'پودوں کو پانی دینا', { size: 27, fill: C.tealDark }) + U(850, 300, 'مرمت', { size: 27, fill: C.tealDark }) + T(480, 198, 'infinitive', { size: 16, fill: C.muted }) + T(480, 292, 'noun form', { size: 16, fill: C.muted }));
  b += box(30, 366, 'Keep the specific detail', strip(50, 420, 'کچھ وقت', 'vague', 'bad') + strip(50, 506, 'دس سال', 'the point', 'good'));
  b += box(460, 366, 'Keep negatives', strip(480, 420, 'ٹکٹ ضروری', 'ticket required', 'plain') + strip(480, 506, 'ٹکٹ ضروری نہیں', 'not required', 'hi'));
  add('03-ways-to-shorten',
    SV(632, 'Four ways to shorten a note in Urdu', b),
    'Four techniques: drop the helper verb (یہاں پانی کم ہوتا جا رہا ہے becomes پانی کی کمی), use a verbal noun (پودوں کو پانی دینا, مرمت), keep the specific detail (دس سال, not کچھ وقت), and keep negatives, since ٹکٹ ضروری and ٹکٹ ضروری نہیں are opposites.',
    'Cut the grammar, keep the detail and the negative.',
    '## What a good note looks like');
}

// 04 One note, one point
{
  let b = '';
  const bullet = (x, y, w, ur, kind, en) => {
    const f = kind === 'bad' ? ['#fbf1ea', C.rust] : [C.tealLight, C.tealDark];
    return `<rect x="${x}" y="${y}" width="${w}" height="104" rx="10" fill="${f[0]}" stroke="${f[1]}" stroke-width="2"/>` + U(x + w - 20, y + 52, ur, { size: 25 }) +
      (en ? T(x + w - 20, y + 90, en, { size: 16, fill: f[1], weight: 600, anchor: 'end' }) : '');
  };
  b += panel(30, 110, 840, 340) + T(54, 146, '1. Two points in one bullet', { size: 20, weight: 700 }) + T(54, 174, 'The heading has two bullet spaces: split the line into two notes.', { size: 17, fill: C.muted });
  b += bullet(50, 196, 380, 'جھولے اور سایہ دار بنچ', 'bad', 'two points in one line') + tick(80, 252, false);
  b += harrow(436, 466, 248);
  b += bullet(470, 196, 380, 'بچوں کے لیے جھولے', 'good', 'swings for children');
  b += bullet(470, 316, 380, 'بزرگوں کے لیے سایہ دار بنچ', 'good', 'shaded benches for older people');
  b += panel(30, 470, 840, 220) + T(54, 506, '2. The same point twice', { size: 20, weight: 700 }) + T(54, 534, 'Two wordings of one idea are normally credited once.', { size: 17, fill: C.muted });
  b += bullet(50, 560, 380, 'پانی کی کمی', 'bad', 'water shortage');
  b += T(450, 620, '=', { size: 30, weight: 700, anchor: 'middle', fill: C.rust });
  b += bullet(470, 560, 380, 'پانی کم ملتا ہے', 'bad', 'little water is available');
  add('04-one-note-one-point',
    SV(718, 'One note, one point', b),
    'Two errors. A bullet reading جھولے اور سایہ دار بنچ packs two points into one and should be split into بچوں کے لیے جھولے and بزرگوں کے لیے سایہ دار بنچ. And پانی کی کمی and پانی کم ملتا ہے are the same point written twice, credited once.',
    'Each bullet carries one separate point; repeats earn nothing extra.',
    '## One note, one point');
}

// 05 Placing points under the right heading
{
  let b = '';
  b += T(215, 128, 'The text', { size: 19, weight: 700, anchor: 'middle' }) + T(705, 128, 'The headings', { size: 19, weight: 700, anchor: 'middle' });
  const chipE = (x, y, label, f, e, fill = C.ink) => `<rect x="${x}" y="${y}" width="180" height="36" rx="8" fill="${f}" stroke="${e}" stroke-width="2"/>` + T(x + 90, y + 24, label, { size: 15, weight: 600, anchor: 'middle', fill });
  const P = [['Opening', [['background ✗', C.panel, C.panelEdge, C.muted], ['an advantage', C.tealLight, C.tealDark]]], ['Paragraph 2', [['an advantage', C.tealLight, C.tealDark]]],
    ['Paragraph 3', [['a difficulty', C.cream, C.mustard], ['advice ✗', '#fbf1ea', C.rust, C.rust]]], ['Ending', [['quotation: a difficulty', C.cream, C.mustard]]]];
  const ends = [];
  P.forEach(([n, chips], i) => {
    const y = 150 + i * 114;
    b += panel(50, y, 340, 100) + T(70, y + 56, n, { size: 18, weight: 700 });
    chips.forEach(([l, f, e, fc], k) => {
      const cy = chips.length === 1 ? y + 32 : y + 12 + k * 40;
      b += chipE(194, cy, l, f, e, fc);
      if (e === C.tealDark || e === C.mustard) ends.push([374, cy + 18, e === C.tealDark ? 'A' : 'P']);
    });
  });
  b += card(560, 178, 290, 92, 'Advantages', [], { fill: C.tealLight, edge: C.tealDark, anchor: 'middle', tsize: 21 });
  b += card(560, 408, 290, 92, 'Problems', [], { fill: C.cream, edge: C.mustard, anchor: 'middle', tsize: 21 });
  let ai = 0, pi = 0;
  ends.forEach(([x, y, h]) => {
    const ty = h === 'A' ? 228 + 22 * ai++ : 458 + 22 * pi++;
    b += path(`M${x},${y} C470,${y} 470,${ty} 548,${ty}`, { w: 3 }) + `<polygon points="548,${ty - 7} 562,${ty} 548,${ty + 7}" fill="${C.ink}"/>`;
  });
  const notes = [
    ['Points are scattered', 'An introduction sentence may give an advantage; a quotation at the end may add a difficulty.', C.tealLight, C.tealDark],
    ['Solutions are not problems', '"Ask an engineer" is advice, even if it sits in the difficulties paragraph.', '#fbf1ea', C.rust],
    ['Background earns nothing', 'Scene-setting facts score only if a heading asks for them.', C.panel, C.panelEdge],
  ];
  notes.forEach(([h, d, f, e], i) => { b += card(30 + i * 286, 625, 268, 150, h, [d], { size: 16, tsize: 18, fill: f, edge: e }); });
  add('05-right-heading',
    SV(805, 'Put each point under the right heading', b),
    'Points from four parts of a text are drawn to two headings, Advantages and Problems, crossing the paragraph boundaries. Three warnings: points are scattered across the text, solutions are not problems, and background facts earn nothing unless a heading asks for them.',
    'Paragraphs and headings do not always line up: sort each point by what it says.',
    '## Placing points under the right heading');
}

// 06 Worked example: weak and good notes under each heading
{
  let b = '', y = 110;
  b += T(240, y + 8, 'Heading (spaces)', { size: 17, weight: 700, anchor: 'middle', fill: C.muted }) + T(445, y + 8, 'Weak', { size: 17, weight: 700, anchor: 'middle', fill: C.rust }) + T(705, y + 8, 'Good notes', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  y += 26;
  const rows = [
    ['(a)', 'مہم کا طریقہ', 'how the campaign works', 2, ['پچھلے سال', 'ڈبا'], [[['ہر جماعت میں کاغذ کا ڈبا'], 'a paper box in every class'], [['ہر جمعے کو کاغذ کارخانے کو فروخت'], 'paper sold to a factory every Friday']]],
    ['(b)', 'مہم کا فائدہ', 'the benefit', 1, ['کتابیں'], [[['رقم سے لائبریری کے لیے', 'نئی کتابیں'], 'the money buys new library books']]],
    ['(c)', 'ایک مسئلہ', 'one problem', 1, ['طلبہ'], [[['ڈبوں میں پلاسٹک اور بچا ہوا کھانا،', 'جس سے کاغذ خراب'], 'plastic and leftover food spoil the paper']]],
  ];
  rows.forEach(([L, h, g, n, weak, good]) => {
    const nl = good.reduce((a, [ls]) => a + ls.length, 0), H = Math.max(nl * 52 + good.length * 28 + 24, 130);
    b += panel(30, y, 840, H);
    b += T(52, y + 44, L, { size: 19, weight: 700 }) + U(330, y + 54, h, { size: 26 }) + T(330, y + 88, g, { size: 15, fill: C.muted, anchor: 'end', italic: true }) + T(330, y + 112, n + (n === 1 ? ' note' : ' notes'), { size: 15, fill: C.tealDark, weight: 700, anchor: 'end' });
    b += `<rect x="350" y="${y + 10}" width="160" height="${H - 20}" rx="10" fill="#fbf1ea"/>`;
    weak.forEach((w, k) => { b += U(495, y + 56 + k * 56, w, { size: 25, fill: C.rust }); });
    b += tick(372, y + 52, false);
    b += `<rect x="522" y="${y + 10}" width="338" height="${H - 20}" rx="10" fill="${C.tealLight}"/>`;
    let gy = y + 54;
    good.forEach(([ls, e]) => { ls.forEach((u) => { b += U(846, gy, u, { size: 24 }); gy += 52; }); b += T(846, gy - 24, e, { size: 15, fill: C.tealDark, anchor: 'end', italic: true }); gy += 28; });
    y += H + 12;
  });
  b += panel(30, y + 6, 840, 108, C.cream, C.mustard) + T(54, y + 44, 'Signal word', { size: 19, weight: 700 }) + U(250, y + 52, 'تاہم', { size: 27 }) + T(268, y + 44, '(however) warned that a problem was coming.', { size: 17, fill: C.muted }) +
    T(54, y + 94, 'Weak notes name a topic or the wrong thing: at most one of them would be credited.', { size: 16, fill: C.muted });
  add('06-worked-example',
    SV(y + 142, 'Worked example: notes on a paper-recycling campaign', b),
    'Three headings from the worked example: (a) مہم کا طریقہ with two notes, (b) مہم کا فائدہ and (c) ایک مسئلہ with one each. Weak notes such as ڈبا and کتابیں name topics; good notes such as ہر جماعت میں کاغذ کا ڈبا state a point under the right heading. The word تاہم signals the problem.',
    'Each good note is a phrase with one point, under the heading it answers.',
    '## Worked example');
}

// 07 Method
{
  const st = steps(110, [
    ['Read the headings first', 'Note how many points each needs: they tell you what to look for.'],
    ['Read the whole text once', 'Get its overall structure.'],
    ['Read again with the headings in mind', 'Mark each relevant point in the margin with its heading letter (a, b, c).'],
    ['Check for scattered points', 'Quotations, the final paragraph and sentences after a turn word often hold a point for another heading.'],
    ['Write the notes', 'One point per bullet, specific, brief.'],
    ['Check each note', 'Does it answer its heading, and is it different from the other notes there?'],
  ], { minH: 88, gap: 10 });
  let b = st.s, y = 110 + st.h + 24;
  b += panel(30, y, 840, 130, C.cream, C.mustard) + T(54, y + 50, 'Turn words that often', { size: 18, weight: 700 }) + T(54, y + 76, 'hold a point for', { size: 18, weight: 700 }) + T(54, y + 102, 'another heading', { size: 18, weight: 700 });
  [['تاہم', 'however'], ['لیکن', 'but'], ['اس کے علاوہ', 'besides']].forEach(([w, g], i) => { b += U(770 - i * 170, y + 66, w, { size: 27, anchor: 'middle' }) + T(770 - i * 170, y + 108, g, { size: 16, fill: C.muted, anchor: 'middle', italic: true }); });
  add('07-reliable-method',
    SV(y + 158, 'A six-step note-making method', b),
    'Six steps: read the headings first, read the whole text once, reread marking points with heading letters, check for scattered points, write one brief point per bullet, and check each note against its heading. Turn words such as تاہم، لیکن and اس کے علاوہ often introduce a point for another heading.',
    'Headings first, then two readings, then one point per bullet.',
    '## A reliable method');
}
