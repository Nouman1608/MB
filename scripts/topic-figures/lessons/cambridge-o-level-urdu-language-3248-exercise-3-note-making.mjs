import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-urdu-language-3248-exercise-3-note-making';
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


const ex = (x, y, w, u, g, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${o.h ?? 92}" rx="10" fill="${o.fill || C.tealLight}"${o.edge ? ` stroke="${o.edge}" stroke-width="2"` : ''}/>` + U(x + w - 16, y + (o.ub ?? 48), u, { size: o.us ?? 24, fill: o.ufill || C.ink }) + (g ? T(x + w - 16, y + (o.h ?? 92) - 14, g, { size: 15, fill: o.gfill || C.tealDark, anchor: 'end', italic: true }) : '');

// 01 Where Exercise 3 sits
{
  let b = '';
  b += T(450, 126, 'Paper 1: five compulsory exercises, 1 hour 45 minutes, 50 marks', { size: 18, weight: 700, anchor: 'middle' });
  ['Ex. 1', 'Ex. 2', 'Ex. 3', 'Ex. 4', 'Ex. 5'].forEach((n, i) => {
    const x = 30 + i * 170, hi = i === 2, su = i === 3;
    b += `<rect x="${x}" y="146" width="160" height="88" rx="10" fill="${hi ? C.mustard : su ? C.cream : C.panel}" stroke="${hi || su ? C.olive : C.panelEdge}" stroke-width="2.5"/>` +
      T(x + 80, 182, n, { size: 19, weight: 700, anchor: 'middle' }) + T(x + 80, 212, hi ? 'Note-making, 9' : su ? 'Summary' : i === 4 ? 'Writing, 14' : '', { size: 15, anchor: 'middle', fill: C.ink });
  });
  b += path('M450,236 Q450,276 535,276 Q620,276 620,240', { w: 3, stroke: C.olive }) + `<polygon points="613,246 620,234 627,246" fill="${C.olive}"/>` + T(535, 300, 'the same longest text', { size: 16, anchor: 'middle', fill: C.olive, weight: 600 });
  b += stat(30, 330, 195, 122, '9 marks', 'brief notes under supplied headings') + stat(245, 330, 195, 122, 'Longest text', 'on the whole paper') +
    stat(460, 330, 195, 122, 'R1 to R4', 'all four reading objectives') + stat(675, 330, 195, 122, 'Urdu only', 'no dictionaries', C.cream, C.mustard);
  b += panel(30, 476, 840, 70) + T(450, 518, 'Time spent understanding the text in Exercise 3 is paid back in Exercise 4.', { size: 18, weight: 700, anchor: 'middle' });
  add('01-where-exercise-3-sits',
    SV(574, 'Where Exercise 3 sits', b),
    'Exercise 3 is the third of five compulsory exercises in a 1 hour 45 minute, 50-mark paper. It is worth 9 marks, tests R1 to R4, uses the longest text on the paper, and that same text feeds the Exercise 4 summary. All answers are in Urdu, without dictionaries.',
    'One long text, two exercises: understanding it well pays twice.',
    '## Where Exercise 3 sits');
}

// 02 R1 to R4 in note-making
{
  let b = '', y = 110;
  const r = [
    ['R1', 'Identify and select relevant information', 'Find the points that belong under each heading.'],
    ['R2', 'Understand ideas, opinions and attitudes', 'Recognise a point stated as someone\'s view.'],
    ['R3', 'See connections between ideas', 'A point in paragraph 4 can belong to a heading introduced in paragraph 1.'],
    ['R4', 'Understand what is implied', 'Supply a point the text implies rather than states, when a heading calls for it.'],
  ];
  r.forEach(([k, h, d], i) => {
    const H = 100;
    b += panel(30, y, 840, H) + `<circle cx="80" cy="${y + H / 2}" r="30" fill="${i === 2 ? C.mustard : C.cream}" stroke="${C.ink}" stroke-width="3"/>` + T(80, y + H / 2 + 8, k, { size: 22, weight: 700, anchor: 'middle' });
    b += T(132, y + 40, h, { size: 20, weight: 700 }) + para(132, y + 70, d, 710, { size: 17, fill: C.muted, lh: 22 }).s;
    y += H + 12;
  });
  add('02-reading-objectives',
    SV(y + 18, 'Four reading objectives in note-making', b),
    'How R1 to R4 apply: R1 finds the points for each heading, R2 recognises a point given as someone\'s view, R3 connects a point in one paragraph to a heading introduced in another, and R4 supplies an implied point when a heading calls for it.',
    'Points for one heading can be spread, stated as views, or only implied.',
    '## Where Exercise 3 sits');
}

// 03 What counts as a note
{
  let b = '';
  const tests = [
    ['Specific', 'کچھ مسائل', 'some problems', 'پانی کی کمی', 'water shortage'],
    ['Complete enough to make sense', 'دھوپ', 'sun', 'تیز دھوپ میں پودوں کا جھلس جانا', 'plants scorched in strong sun'],
  ];
  let y = 110;
  tests.forEach(([h, bad, gb, good, gg]) => {
    b += panel(30, y, 840, 150) + T(54, y + 36, h, { size: 20, weight: 700 });
    b += ex(54, y + 52, 300, bad, gb, { fill: '#fbf1ea', gfill: C.rust, ufill: C.rust }) + tick(82, y + 104, false);
    b += harrow(360, 392, y + 98, { w: 3 });
    b += ex(398, y + 52, 448, good, gg) + tick(426, y + 104, true);
    y += 164;
  });
  b += card(30, y, 410, 112, 'One point only', ['Two ideas in one line may earn one mark, not two.'], { size: 16, tsize: 19 });
  b += card(460, y, 410, 112, 'Under the right heading', ['A correct point under the wrong heading does not answer it.'], { size: 16, tsize: 19 });
  y += 132;
  b += panel(30, y, 840, 160, C.cream, C.mustard) + T(54, y + 36, 'Write notes as noun phrases with the verbal noun', { size: 19, weight: 700 });
  [['خرچ میں کمی', 'lower spending'], ['کیمیائی کھاد سے پاک غذا', 'food free of chemical fertiliser'], ['پڑوسیوں سے میل جول', 'mixing with neighbours']].forEach(([u, g], i) => {
    b += ex(54 + (2 - i) * 268, y + 54, 252, u, g, { h: 90, ub: 48, fill: C.panel });
  });
  add('03-what-counts-as-a-note',
    SV(y + 188, 'What counts as a note', b),
    'A note must be specific (پانی کی کمی, not کچھ مسائل), complete enough to make sense (تیز دھوپ میں پودوں کا جھلس جانا, not دھوپ), one point only, and under the right heading. Noun phrases such as خرچ میں کمی، کیمیائی کھاد سے پاک غذا and پڑوسیوں سے میل جول work best.',
    'Brief, specific, one point, in the right place.',
    '## What counts as a note');
}

// 04 Mapping the text to the headings
{
  const st = steps(110, [
    ['Read the headings first', 'They tell you what kinds of information to look for.'],
    ['Read the whole text once', 'For its overall subject and structure.'],
    ['Label the text', 'On a second reading, write a, b or c in the margin beside each detail. Points for one heading are often spread across paragraphs.'],
    ['Check for overlap', 'Each point goes under one heading only: the one it answers more directly.'],
    ['Count', 'Printed bullet lines = points expected. If the text gives more, choose the clearest.'],
  ], { minH: 86, gap: 10, hi: 2 });
  add('04-mapping-the-text',
    SV(110 + st.h + 30, 'Mapping the text to the headings', st.s),
    'Five steps: read the headings first, read the whole text once, label each relevant detail with its heading letter on a second reading, check that each point sits under one heading only, and count the bullet lines to see how many points are expected.',
    'Headings first, then label the text, then count.',
    '## Mapping the text to the headings');
}

// 05 Worked example: strong notes under each heading
{
  let b = '', y = 110;
  const H = [
    ['(a)', 'چھت پر باغبانی کے فوائد', 'benefits of rooftop gardening', [['بازار کے خرچ میں کمی', 'lower spending at the market'], ['کیمیائی کھاد سے پاک غذا', 'food free of chemical fertiliser'], ['عمارت کا گرمیوں میں ٹھنڈا رہنا', 'the building stays cool in summer']]],
    ['(b)', 'مکینوں کو پیش آنے والی مشکلات', 'difficulties the residents faced', [['تیز دھوپ سے پودوں کا جھلسنا', 'plants scorched by strong sun'], ['گیلی مٹی سے چھت کو نقصان کا خدشہ', 'fear of damp soil damaging the roof']]],
    ['(c)', 'ماہرین کے مشورے', 'the experts\' advice', [['آسان پودوں (پودینہ، ہری مرچ) سے آغاز', 'start with easy plants (mint, green chilli)'], ['گملوں کے نیچے ٹرے', 'trays under the pots']]],
  ];
  H.forEach(([k, u, g, notes], i) => {
    const h = 72 + notes.length * 100 + 8;
    b += panel(30, y, 840, h, C.panel, i === 0 ? C.tealDark : i === 1 ? C.mustard : C.panelEdge) + T(54, y + 46, k, { size: 20, weight: 700 }) + U(846, y + 54, u, { size: 26, fill: i === 1 ? C.olive : C.tealDark }) + T(100, y + 46, g, { size: 16, fill: C.muted, italic: true });
    notes.forEach(([nu, ng], j) => { b += ex(54, y + 70 + j * 100, 792, nu, ng, { h: 92, ub: 46, fill: i === 1 ? C.cream : C.tealLight, gfill: i === 1 ? C.olive : C.tealDark }); });
    y += h + 14;
  });
  add('05-strong-notes',
    SV(y + 14, 'Worked example: strong notes', b),
    'Strong notes for the rooftop-gardening article under three headings: benefits (بازار کے خرچ میں کمی، کیمیائی کھاد سے پاک غذا، عمارت کا گرمیوں میں ٹھنڈا رہنا), difficulties (تیز دھوپ سے پودوں کا جھلسنا، گیلی مٹی سے چھت کو نقصان کا خدشہ) and the experts\' advice (آسان پودوں سے آغاز، گملوں کے نیچے ٹرے).',
    'Each note is one specific point, under the heading it answers.',
    '## Worked example');
}

// 06 Weak notes
{
  let b = '', y = 110;
  const w = [
    ['(a)', 'ٹماٹر، مرچیں اور پودینہ', 'tomatoes, chillies and mint', 'what is grown, not a benefit'],
    ['(a)', 'سستی اور صحت مند سبزیاں', 'cheap and healthy vegetables', 'two benefits merged into one line'],
    ['(b)', 'دھوپ', 'sun', 'too thin to show the difficulty'],
    ['(c)', 'پانی کی ٹرے، سایہ اور کھاد', 'water tray, shade and compost', 'three tips in one note: one mark at most'],
    ['(b)', 'پڑوسیوں سے ملاقات', 'meeting neighbours', 'a benefit placed under difficulties'],
  ];
  w.forEach(([k, u, g, why]) => {
    const H = 110;
    b += panel(30, y, 840, H) + T(54, y + 44, k, { size: 19, weight: 700 }) + tick(112, y + 44, false);
    b += para(140, y + 44, why, 300, { size: 17, weight: 600, fill: C.rust, lh: 22 }).s;
    b += ex(470, y + 10, 384, u, g, { h: 90, ub: 46, fill: '#fbf1ea', gfill: C.muted });
    y += H + 10;
  });
  add('06-weak-notes',
    SV(y + 20, 'Weak notes, and what went wrong', b),
    'Five weak notes: ٹماٹر، مرچیں اور پودینہ names crops, not a benefit; سستی اور صحت مند سبزیاں merges two benefits; دھوپ is too thin; پانی کی ٹرے، سایہ اور کھاد packs three tips into one note; پڑوسیوں سے ملاقات is a benefit placed under difficulties.',
    'Wrong kind of point, too many points, too little point, or the wrong heading.',
    '## Worked example');
}

// 07 From notes to summary
{
  let b = '';
  b += ex(470, 120, 384, 'خرچ میں کمی', 'note: a noun phrase', { h: 92, ub: 50 });
  b += T(450, 172, '→', { size: 34, weight: 700, anchor: 'middle' });
  b = b.replace('>→<', '>←<');
  b += ex(46, 120, 384, 'گھر میں سبزیاں اگانے سے خرچ کم ہوتا ہے', 'summary: a sentence', { h: 92, ub: 50, fill: C.cream, gfill: C.olive, us: 22 });
  b += panel(30, 236, 840, 160) + T(54, 274, 'Exercise 4: the summary', { size: 20, weight: 700 });
  b += tl(54, 306, ['A paragraph of no more than 100 words "about an aspect or aspects of the text in Exercise 3".', 'The aspect is often one or two of your headings.', 'Accurate notes mean most of the selection work is already done.'], { size: 17, fill: C.muted }, 28);
  b += T(450, 434, 'Exam technique', { size: 19, weight: 700, anchor: 'middle' });
  [['3 to 8 words', 'per note: notes, not sentences'], ['Check each note', 'is it really a benefit, a difficulty, a piece of advice?'], ['Keep moving', 'Exercise 3 is 9 of 50 marks; Exercise 5 carries 14']].forEach(([h, d], i) => {
    b += card(30 + i * 286, 452, 268, 116, h, [d], { size: 16, tsize: 19, fill: i === 0 ? C.tealLight : C.panel, edge: i === 0 ? C.tealDark : C.panelEdge });
  });
  add('07-notes-to-summary',
    SV(596, 'From notes to summary', b),
    'A note such as خرچ میں کمی converts into a summary sentence, گھر میں سبزیاں اگانے سے خرچ کم ہوتا ہے. The Exercise 4 summary is at most 100 words on an aspect of the same text, often one or two headings. Notes should be three to eight words, checked against the heading.',
    'Clear noun-phrase notes turn quickly into summary sentences.',
    '## From notes to summary');
}
