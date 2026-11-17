import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-urdu-language-3247-paper-1-argumentative-discursive-composition';
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


// Coloured tag pill (English), centred at x.
const pill = (cx, y, label, fill, edge, w = 170) => `<rect x="${cx - w / 2}" y="${y}" width="${w}" height="38" rx="19" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>` + T(cx, y + 26, label, { size: 17, weight: 700, anchor: 'middle', fill: edge === C.mustard ? C.olive : edge === C.panelEdge ? C.ink : edge });

// 01 Argumentative versus discursive
{
  const tb = table(30, 110, [{ w: 190, head: '', bold: true }, { w: 325, head: 'Argumentative' }, { w: 325, head: 'Discursive' }], [
    ['Aim', 'persuade the reader that one view is right', 'explore a question from more than one side'],
    ['Your position', 'stated at the start, held throughout', 'weighed through the essay, settled at the end'],
    ['Other side', 'raised in order to answer it', 'given fair space with its own evidence'],
    ['Ending', 'restates and strengthens your case', 'a balanced judgement drawn from what came before'],
  ], { size: 18, minRow: 78 });
  add('01-argumentative-vs-discursive',
    SV(110 + tb.h + 30, 'Argumentative or discursive?', tb.s),
    'A comparison of the two title types. An argumentative essay aims to persuade, states its position at the start, raises the other side only to answer it and ends by strengthening its case. A discursive essay explores more than one side, settles its position at the end, gives the other side fair space and ends with a balanced judgement.',
    'An argument holds one view throughout; a discussion weighs the sides and judges at the end.',
    '## Two different tasks');
}

// 02 Reading the instruction in the title
{
  let b = '', y = 110;
  const rows = [
    [['"شہروں میں ذاتی گاڑیوں کے بجائے پبلک ٹرانسپورٹ', 'کو فروغ دینا چاہیے۔" اس کے حق میں دلائل دیجیے'], 'Argumentative', C.tealLight, C.tealDark, 'The instruction asks for arguments in favour: one side.'],
    [['آن لائن تعلیم کے فوائد اور نقصانات پر بحث کیجیے'], 'Discursive', C.cream, C.mustard, 'The instruction asks you to discuss benefits and drawbacks.'],
    [['کیا آپ اس بات سے متفق ہیں کہ ...؟'], 'Either', C.panel, C.ink, 'Either shape works, as long as your answer is clear by the end.'],
  ];
  rows.forEach(([ls, tag, f, e, note]) => {
    const D = ls.length * 60 + 40;
    const H = D + 66;
    b += panel(30, y, 840, H);
    ls.forEach((l, k) => { b += U(846, y + 68 + k * 60, l, { size: 26 }); });
    b += `<line x1="54" y1="${y + D}" x2="846" y2="${y + D}" stroke="${C.panelEdge}" stroke-width="2"/>`;
    b += pill(140, y + D + 12, tag, f, e === C.ink ? C.panelEdge : e) + T(244, y + D + 38, note, { size: 17, fill: C.muted });
    y += H + 14;
  });
  b += panel(30, y + 4, 840, 64, C.cream, C.mustard) + T(450, y + 44, 'Read the instruction rather than guessing from the topic.', { size: 19, weight: 700, anchor: 'middle' });
  add('02-reading-the-title',
    SV(y + 96, 'The instruction decides the task', b),
    'Three titles from the guide. One ending اس کے حق میں دلائل دیجیے is argumentative, one ending بحث کیجیے is discursive, and کیا آپ اس بات سے متفق ہیں کہ ...؟ allows either, as long as the answer is clear by the end.',
    'The wording of the instruction, not the topic, tells you which essay to write.',
    '## Two different tasks');
}

// 03 Three marking strands
{
  let b = '';
  const segs = [[10, 'Content', C.tealLight, C.tealDark], [5, 'Structure', C.cream, C.mustard], [10, 'Language', C.tealLight, C.tealDark]];
  let x = 30;
  segs.forEach(([m, n, f, e]) => {
    const w = (840 * m) / 25;
    b += `<rect x="${x}" y="110" width="${w - 6}" height="70" rx="10" fill="${f}" stroke="${e}" stroke-width="2.5"/>` + T(x + (w - 6) / 2, 140, n, { size: 19, weight: 700, anchor: 'middle' }) + T(x + (w - 6) / 2, 166, `${m} marks`, { size: 17, anchor: 'middle', fill: C.muted });
    x += w;
  });
  b += T(450, 210, 'Part 2: 25 marks, best-fit levels', { size: 17, fill: C.muted, anchor: 'middle' });
  const cards = [
    ['Task achievement and content', 'W1, W2, W3', ['"very detailed"', '"wholly relevant to task"', '"makes points thoughtfully"', '"shows insight or engagement with the subject matter"'], 'Specific reasons and examples, not general statements.'],
    ['Structure', 'W4', ['"confidently argued and structured"', 'Level below: "some ability to develop argument; clear structure"'], 'Each paragraph moves the argument forward.'],
    ['Language', 'W5, W6', ['"a range of complex sentence structures"', '"a wide range of appropriate vocabulary"', '"generally accurate"'], 'Range without strain.'],
  ];
  cards.forEach(([h, k, qs, tip], i) => {
    const cx = 30 + i * 286;
    b += card(cx, 232, 268, 350, h, [], { kicker: k, tsize: 19 });
    let cy = 232 + 20 + 26 + wrap(h, 228, 19, 700).length * 25 + 26;
    qs.forEach((q) => { const p = para(cx + 20, cy, q, 228, { size: 16, fill: C.ink, lh: 21 }); b += p.s; cy += p.h + 8; });
    const nt = wrap(tip, 228, 16, 600).length;
    b += para(cx + 20, 582 - 18 - (nt - 1) * 21, tip, 228, { size: 16, fill: C.tealDark, weight: 600, lh: 21 }).s;
  });
  const y = 604;
  b += panel(30, y, 840, 196) + T(54, y + 38, 'Sentence patterns that suit argument', { size: 19, weight: 700 });
  [['اگر ... تو', 'conditional'], ['اگرچہ ... پھر بھی', 'concessive'], ['وہ لوگ جو ...', 'relative clause']].forEach(([u, g], i) => {
    b += chip(54 + i * 268, y + 60, 250, u, g, { h: 112, us: 28, ub: 58 });
  });
  add('03-three-strands',
    SV(y + 224, 'What the three strands reward', b),
    'Part 2 is marked out of 25: content 10 marks (W1 to W3), structure 5 marks (W4) and language 10 marks (W5, W6), with the top-level descriptors for each. Conditional (اگر ... تو), concessive (اگرچہ ... پھر بھی) and relative (وہ لوگ جو ...) sentences show range in an argument.',
    'Language carries as many marks as content; structure rewards ordered, linked ideas.',
    '## What the three strands reward');
}

// 04 Planning in five minutes, and the five-paragraph shape
{
  const st = steps(110, [
    ['Decide your answer', 'Your thesis in one sentence. Discursive: note the two sides and a provisional judgement.'],
    ['Choose three main points', 'Argument: three reasons. Discussion: two and one, or two and two.'],
    ['Give each point evidence', 'An example, a likely consequence, a comparison: this lifts content from Level 3 to Level 5.'],
    ['Note one objection', 'And how you will answer it, or how the two sides weigh against each other.'],
    ['Write the last sentence first', 'So the essay has somewhere to arrive.'],
  ], { minH: 86, gap: 10, hi: 2 });
  let b = st.s + U(846, 152, 'دعویٰ', { size: 26, fill: C.tealDark }) + T(846, 182, 'thesis', { size: 15, fill: C.muted, anchor: 'end', italic: true });
  let y = 110 + st.h + 28;
  b += T(450, y + 4, '300-400 words: five paragraphs of 60 to 80 words each', { size: 19, weight: 700, anchor: 'middle' });
  const blocks = [['Introduction', C.cream, C.mustard], ['Body 1', C.tealLight, C.tealDark], ['Body 2', C.tealLight, C.tealDark], ['Body 3', C.tealLight, C.tealDark], ['Conclusion', C.cream, C.mustard]];
  blocks.forEach(([n, f, e], i) => {
    const x = 30 + i * 170;
    b += `<rect x="${x}" y="${y + 24}" width="160" height="78" rx="10" fill="${f}" stroke="${e}" stroke-width="2.5"/>` + T(x + 80, y + 58, n, { size: 18, weight: 700, anchor: 'middle' }) + T(x + 80, y + 84, '60-80 words', { size: 15, fill: C.muted, anchor: 'middle' });
  });
  b += T(450, y + 134, 'Far beyond 400 usually means repetition; under 300 rarely allows a "very detailed response".', { size: 16, fill: C.muted, anchor: 'middle' });
  add('04-five-minute-plan',
    SV(y + 160, 'Planning in five minutes', b),
    'Five planning steps: decide your thesis (دعویٰ), choose three main points, give each point evidence, note one objection, and write the last sentence first. Below, a 300-400-word essay as five paragraphs of 60 to 80 words: introduction, three body paragraphs and a conclusion.',
    'Thesis, three evidenced points, one objection, and the ending decided before you start.',
    '## Planning in five minutes');
}

// 05 Connectives for reasoning
{
  const tb = table(30, 110, [{ w: 250, head: 'Purpose', bold: true }, { w: 590, head: 'Urdu', ur: true }], [
    ['ordering points', 'اوّل تو، دوسرے یہ کہ، آخر میں'],
    ['adding', 'علاوہ ازیں، مزید برآں، اس کے ساتھ ساتھ'],
    ['conceding', 'یہ درست ہے کہ ... لیکن، اگرچہ ... پھر بھی، بلاشبہ'],
    ['contrasting', 'اس کے برعکس، دوسری طرف، تاہم'],
    ['concluding', 'لہٰذا، نتیجتاً، مختصر یہ کہ، ان تمام باتوں کے پیشِ نظر'],
  ], { us: 26, hiRows: [2], minRow: 84 });
  const y = 110 + tb.h + 24;
  let b = tb.s + panel(30, y, 840, 112, C.cream, C.mustard) +
    T(54, y + 40, 'Show real relationships between ideas', { size: 19, weight: 700 }) +
    T(54, y + 76, 'The same connective at the start of every', { size: 17, fill: C.muted }) + T(54, y + 98, 'paragraph signals a list, not an argument.', { size: 17, fill: C.muted }) +
    U(846, y + 70, 'علاوہ ازیں ... علاوہ ازیں ...', { size: 26, fill: C.rust }) + tick(560, y + 62, false);
  add('05-connectives',
    SV(y + 140, 'Connectives for reasoning', b),
    'Urdu connectives grouped by purpose: ordering (اوّل تو، دوسرے یہ کہ، آخر میں), adding (علاوہ ازیں، مزید برآں), conceding (یہ درست ہے کہ ... لیکن، اگرچہ ... پھر بھی), contrasting (اس کے برعکس، تاہم) and concluding (لہٰذا، نتیجتاً). Repeating علاوہ ازیں at every paragraph signals a list.',
    'Choose each connective for the relationship it shows between two ideas.',
    '## Connectives for reasoning');
}

// 06 Worked example: the plan
{
  let b = '';
  b += panel(30, 110, 840, 94, C.cream, C.mustard) + T(54, 146, 'Title', { size: 16, weight: 700, fill: C.olive }) +
    U(846, 156, '"شہروں میں ذاتی گاڑیوں کے بجائے پبلک ٹرانسپورٹ کو فروغ دینا چاہیے۔"', { size: 24 });
  b += varrow(450, 206, 238);
  b += card(250, 242, 400, 82, 'Thesis', ['public transport must be the priority'], { anchor: 'middle', fill: C.tealLight, edge: C.tealDark, tsize: 19 });
  const R = ['less congestion and lost time', 'cleaner air', 'fairer for those who cannot afford a car'];
  R.forEach((r, i) => {
    const x = 30 + i * 286;
    b += path(`M450,326 L450,346 L${x + 134},346 L${x + 134},366`, { w: 3 }) + `<polygon points="${x + 127},${362} ${x + 134},${376} ${x + 141},${362}" fill="${C.ink}"/>`;
    b += card(x, 378, 268, 112, `Reason ${i + 1}`, [r], { anchor: 'middle', tsize: 19 });
  });
  b += card(30, 520, 400, 112, 'Objection', ['buses are slow and unsafe'], { anchor: 'middle', fill: '#fbf1ea', edge: C.rust, tsize: 19, tfill: C.rust });
  b += harrow(436, 464, 576);
  b += card(470, 520, 400, 112, 'Reply', ['a fault of the present system, not of the idea'], { anchor: 'middle', fill: C.tealLight, edge: C.tealDark, tsize: 19 });
  const y = 656;
  b += panel(30, y, 840, 132) + T(54, y + 38, 'Model introduction', { size: 19, weight: 700 });
  b += `<rect x="54" y="${y + 58}" width="370" height="54" rx="10" fill="${C.tealLight}"/>` + T(239, y + 92, 'opening scene engages the reader', { size: 16, anchor: 'middle' });
  b += harrow(430, 466, y + 85);
  b += `<rect x="472" y="${y + 58}" width="374" height="54" rx="10" fill="${C.cream}"/>` + T(659, y + 92, 'thesis stated plainly in the last sentence', { size: 16, anchor: 'middle' });
  add('06-worked-plan',
    SV(y + 160, 'Worked example: planning the argument', b),
    'The plan for the public-transport title: a thesis that public transport must be the priority, three reasons (less congestion and lost time, cleaner air, fairness for those who cannot afford a car), and an objection that buses are slow and unsafe, answered as a fault of the present system. The introduction opens with a scene and ends with the thesis.',
    'One thesis, three reasons, and one objection answered.',
    '## Worked example: an argumentative title');
}

// 07 Answering an objection: the moves in the model paragraph
{
  let b = '', y = 110;
  const moves = [
    ['State the objection fairly', ['یہ اعتراض کیا جاتا ہے کہ بسوں اور ویگنوں میں سفر وقت طلب اور تکلیف دہ ہے، ...'], C.panel, C.panelEdge],
    ['Concede in part', ['یہ شکایت بے بنیاد نہیں'], C.cream, C.mustard],
    ['Turn it', ['لیکن یہ موجودہ ناقص نظام کی خرابی ہے، پبلک ٹرانسپورٹ کے تصور کی نہیں۔'], C.panel, C.panelEdge],
    ['Conditional sentence', ['جب بسیں مقررہ وقت پر چلیں ... تو یہی شہری خوشی سے اپنی گاڑی گھر چھوڑ آئیں گے۔'], C.panel, C.panelEdge],
    ['Return to the thesis', ['گویا حل نظام کو ترک کرنا نہیں، اسے بہتر بنانا ہے۔'], C.tealLight, C.tealDark],
  ];
  moves.forEach(([lab, ls, f, e], i) => {
    const H = 78 + ls.length * 56;
    b += panel(30, y, 840, H, f, e) + badge(70, y + 38, 20, String(i + 1), C.cream) + T(104, y + 45, lab, { size: 19, weight: 700 });
    ls.forEach((l, k) => { b += U(846, y + 106 + k * 56, l, { size: 24 }); });
    if (i < moves.length - 1) b += varrow(450, y + H + 1, y + H + 19, { w: 3 });
    y += H + 20;
  });
  add('07-answering-an-objection',
    SV(y + 10, 'Answering an objection in five moves', b),
    'The model paragraph broken into five moves: it states the objection fairly (یہ اعتراض کیا جاتا ہے کہ ...), concedes in part (یہ شکایت بے بنیاد نہیں), turns it as a fault of the present system, uses a conditional sentence (جب ... تو), and returns to the thesis with گویا.',
    'State, concede, turn, then bring the paragraph back to your thesis.',
    '## Worked example: an argumentative title');
}

// 08 Same material, discursive title
{
  let b = '';
  b += panel(30, 110, 840, 120, C.cream, C.mustard) + T(54, 150, 'Discursive title', { size: 16, weight: 700, fill: C.olive }) +
    U(846, 190, 'کیا ذاتی گاڑیوں پر پابندیاں لگانا درست ہوگا؟ بحث کیجیے', { size: 26 });
  b += card(30, 246, 360, 300, 'In the argument', ['The objection is one paragraph, raised in order to answer it.'], { kicker: 'ARGUMENTATIVE', size: 17 });
  b += `<rect x="52" y="380" width="316" height="42" rx="8" fill="#fbf1ea"/>` + T(210, 407, 'objection', { size: 17, anchor: 'middle', fill: C.rust, weight: 600 }) + varrow(210, 424, 456, { w: 3 }) +
    `<rect x="52" y="462" width="316" height="42" rx="8" fill="${C.tealLight}"/>` + T(210, 489, 'answered', { size: 17, anchor: 'middle', fill: C.tealDark, weight: 600 });
  b += harrow(398, 452, 396, { w: 4 });
  b += card(460, 246, 410, 300, 'In the discussion', ['The objection becomes a full side of the essay:'], { kicker: 'DISCURSIVE', kfill: C.olive, size: 17 });
  ['the needs of families', 'people in areas with no bus route', 'small traders who carry goods'].forEach((s, i) => {
    b += `<rect x="482" y="${380 + i * 52}" width="366" height="42" rx="8" fill="${C.cream}"/>` + T(500, 407 + i * 52, s, { size: 17 });
  });
  const y = 572;
  b += panel(30, y, 840, 132, C.tealLight, C.tealDark) + T(54, y + 38, 'The conclusion weighs the sides: a judgement', { size: 19, weight: 700 });
  b += para(54, y + 72, 'Limits make sense in crowded city centres only once a reliable alternative exists.', 790, { size: 18, italic: true }).s;
  b += T(54, y + 108, 'A discursive essay without a judgement reads as two lists.', { size: 17, fill: C.tealDark, weight: 600 });
  add('08-argument-to-discussion',
    SV(y + 160, 'Same material, discursive title', b),
    'For the discursive title کیا ذاتی گاڑیوں پر پابندیاں لگانا درست ہوگا؟ بحث کیجیے, the single objection paragraph of the argument becomes a full side: families, people with no bus route and small traders. The conclusion then gives a judgement, such as limits only once a reliable alternative exists.',
    'In a discussion the other side gets real space, and the ending must still judge.',
    '## Turning the same material into a discussion');
}
