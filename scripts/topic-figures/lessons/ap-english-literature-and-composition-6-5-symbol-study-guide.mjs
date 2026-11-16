import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

// ---- Local layout helpers for AP figures (self-contained; house style only) ----
const X = (s) => String(s).replace(/&(?!amp;|lt;|gt;|#\d+;)/g, '&amp;').replace(/</g, '&lt;');
const T = (x, y, s, o = {}) => t(x, y, X(s), o);
const cw = (size, weight = 400, italic = false) => size * (weight >= 600 ? 0.56 : italic ? 0.5 : 0.51);
function wrap(s, width, size = 17, weight = 400, italic = false) {
  const max = Math.max(4, Math.floor(width / cw(size, weight, italic)));
  const out = []; let cur = '';
  for (const w of String(s).split(/\s+/).filter(Boolean)) {
    if (!cur) cur = w; else if ((cur + ' ' + w).length <= max) cur += ' ' + w; else { out.push(cur); cur = w; }
  }
  if (cur) out.push(cur);
  return out;
}
// Wrapped text block; x is left edge (or centre with anchor middle). Returns {s, h}.
function para(x, y, s, width, o = {}) {
  const size = o.size || 17, lh = o.lh || Math.round(size * 1.32), weight = o.weight || 400;
  if (o.bullet) {
    const ind = size * 0.95;
    const w1 = wrap(s, width - ind, size, weight, o.italic);
    return { s: T(x, y, '•', { ...o, weight: 700 }) + w1.map((l, i) => T(x + ind, y + i * lh, l, o)).join(''), h: w1.length * lh };
  }
  const lines = wrap(s, width, size, weight, o.italic);
  return { s: lines.map((l, i) => T(x, y + i * lh, l, o)).join(''), h: lines.length * lh };
}
// Card: panel with optional kicker, title and body (string or array). Returns {s, h}.
function card(x, y, w, o = {}) {
  const pad = o.pad ?? 20, ts = o.tsize ?? 20, bs = o.size ?? 17, mid = o.align === 'middle';
  const tx = mid ? x + w / 2 : x + pad, anchor = mid ? 'middle' : 'start';
  const measure = (y0) => {
    let cy = y0 + pad, inner = '';
    if (o.kicker) { inner += T(tx, cy + 13, o.kicker, { size: 15, weight: 700, anchor, fill: o.kfill || C.tealDark }); cy += 25; }
    if (o.title) { const p = para(tx, cy + ts * 0.8, o.title, w - 2 * pad, { size: ts, weight: 700, anchor, fill: o.tfill || C.ink }); inner += p.s; cy += p.h; }
    if (o.body) {
      const items = Array.isArray(o.body) ? o.body : [o.body];
      if (o.title || o.kicker) cy += 6;
      items.forEach((it, i) => {
        const p = para(tx, cy + bs * 0.8, it, w - 2 * pad, { size: bs, anchor, fill: o.bfill || C.muted, bullet: o.bullets, weight: o.bweight, italic: o.italic });
        inner += p.s; cy += p.h + (i < items.length - 1 ? (o.gap ?? 5) : 0);
      });
    }
    return { inner, h: cy - y0 + pad - 4 };
  };
  let m = measure(y);
  const h = Math.max(o.minH || 0, m.h);
  if (o.vcenter && h > m.h) m = measure(y + (h - m.h) / 2);
  return { s: panel(x, y, w, h, o.fill || C.panel, o.edge || C.panelEdge) + m.inner, h };
}
const cardH = (w, o) => card(0, 0, w, o).h;
// A row of n equal-height cards, optional arrows between. Returns {s, h, xs, w}.
function row(y, items, o = {}) {
  const x0 = o.x ?? 30, W0 = o.w ?? 840, gap = o.gap ?? (o.arrows ? 46 : 18), n = items.length;
  const w = (W0 - gap * (n - 1)) / n;
  const h = Math.max(o.minH || 0, ...items.map((it) => cardH(w, { ...o.card, ...it })));
  let s = ''; const xs = [];
  items.forEach((it, i) => {
    const x = x0 + i * (w + gap); xs.push(x);
    s += card(x, y, w, { vcenter: !(it.kicker || o.card?.kicker), ...o.card, ...it, minH: h }).s;
    if (o.arrows && i < n - 1) s += arrow(x + w + 6, y + h / 2, x + w + gap - 6, y + h / 2, { w: 3.5 });
  });
  return { s, h, xs, w };
}
// Vertical stack of full-width cards with down arrows. Returns {s, h}.
function stack(y, items, o = {}) {
  const x = o.x ?? 30, w = o.w ?? 840, gap = o.gap ?? 40; let s = '', cy = y;
  items.forEach((it, i) => {
    const c = card(x, cy, w, { ...o.card, ...it }); s += c.s; cy += c.h;
    if (i < items.length - 1) { if (o.arrows !== false) s += arrow(x + w / 2, cy + 4, x + w / 2, cy + gap - 6, { w: 3.5 }); cy += gap; }
  });
  return { s, h: cy - y };
}
// Table: cols [{w, head}], rows [[cell strings]]. First column bold by default. Returns {s, h}.
function table(x, y, cols, rows, o = {}) {
  const size = o.size ?? 17, pad = 14, lh = Math.round(size * 1.32), hh = o.headH ?? 50;
  let s = '', cy = y;
  const W = cols.reduce((a, c) => a + c.w, 0);
  s += `<rect x="${x}" y="${y}" width="${W}" height="${hh}" rx="10" fill="${C.ink}"/>`;
  let cx = x; cols.forEach((c) => { s += T(cx + pad, y + hh / 2 + 6, c.head, { size: o.hsize ?? 18, weight: 700, fill: '#ffffff' }); cx += c.w; });
  cy += hh;
  rows.forEach((r, ri) => {
    const cells = r.map((cell, ci) => wrap(cell, cols[ci].w - 2 * pad, size, ci === 0 && o.boldFirst !== false ? 700 : 400, o.italicCols?.includes(ci)));
    const rh = Math.max(...cells.map((l) => l.length)) * lh + 2 * pad - 2;
    s += `<rect x="${x}" y="${cy}" width="${W}" height="${rh}" fill="${o.rowFill?.[ri] || (ri % 2 ? C.panel : '#f8faf9')}" stroke="${C.panelEdge}" stroke-width="2"/>`;
    let ccx = x;
    cells.forEach((lines, ci) => {
      const bold = ci === 0 && o.boldFirst !== false;
      lines.forEach((l, li) => { s += T(ccx + pad, cy + pad + size * 0.85 + li * lh, l, { size, weight: bold ? 700 : 400, fill: ci === 0 ? C.ink : (o.colFill?.[ci] || C.ink), italic: o.italicCols?.includes(ci) }); });
      if (ci > 0) s += `<line x1="${ccx}" y1="${cy}" x2="${ccx}" y2="${cy + rh}" stroke="${C.panelEdge}" stroke-width="2"/>`;
      ccx += cols[ci].w;
    });
    cy += rh;
  });
  return { s, h: cy - y };
}
// Numbered step rows inside one panel. steps: [[title, desc]]. Returns {s, h}.
function steps(x, y, w, items, o = {}) {
  const size = o.size ?? 17, lh = Math.round(size * 1.32), r = o.r ?? 20, gap = o.gap ?? 14;
  let s = '', cy = y;
  items.forEach(([title, desc, hi], i) => {
    const tx = x + 2 * r + 22;
    const tw = wrap(title, w - (tx - x) - 10, o.tsize ?? 19, 700);
    const dw = desc ? wrap(desc, w - (tx - x) - 10, size) : [];
    const h = Math.max(2 * r + 6, tw.length * 25 + dw.length * lh + 8);
    s += badge(x + r + 6, cy + r + 4, r, String(i + 1), hi ? C.mustard : C.cream);
    tw.forEach((l, li) => { s += T(tx, cy + 22 + li * 25, l, { size: o.tsize ?? 19, weight: 700 }); });
    dw.forEach((l, li) => { s += T(tx, cy + 22 + tw.length * 25 + 2 + li * lh, l, { size, fill: C.muted }); });
    cy += h + gap;
  });
  return { s, h: cy - y - gap };
}
// Highlighted chip (cream/olive by default).
const chip = (x, y, w, h, label, o = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 12}" fill="${o.fill || C.cream}" stroke="${o.edge || C.olive}" stroke-width="2.5"/>` +
  para(x + w / 2, y + h / 2 + (o.size ?? 17) * 0.35 - ((wrap(label, w - 20, o.size ?? 17, o.weight ?? 700).length - 1) * Math.round((o.size ?? 17) * 1.32)) / 2, label, w - 20, { size: o.size ?? 17, weight: o.weight ?? 700, anchor: 'middle', fill: o.tfill || C.ink }).s;
const elbow = (pts, o = {}) => path('M' + pts.map((p) => p.join(',')).join(' L'), { stroke: o.color || C.ink, w: o.w ?? 3.5, extra: `marker-end="url(#${o.marker || 'ah'})"` + (o.dash ? ` stroke-dasharray="${o.dash}"` : '') });

export const slug = 'ap-english-literature-and-composition-6-5-symbol-study-guide';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

const keyIcon = (x, y, s = 1, fill = C.mustard) =>
  `<g transform="translate(${x},${y}) scale(${s})"><circle cx="0" cy="0" r="30" fill="${fill}" stroke="${C.ink}" stroke-width="4"/><circle cx="0" cy="0" r="11" fill="${C.bg}" stroke="${C.ink}" stroke-width="3.5"/>` +
  `<path d="M30,-7 L130,-7 L130,22 L116,22 L116,7 L102,7 L102,26 L88,26 L88,7 L30,7 Z" fill="${fill}" stroke="${C.ink}" stroke-width="4" stroke-linejoin="round"/></g>`;

// 01 From literal to figurative
{
  let b = '';
  b += panel(30, 110, 840, 150) + keyIcon(110, 185, 1.1) + T(300, 165, 'A key', { size: 26, weight: 700 }) + T(300, 195, 'a material object in the story', { size: 18, fill: C.muted });
  b += T(300, 228, 'handed over with ceremony, kept for years, lost at a decisive moment', { size: 16, fill: C.muted, italic: true });
  const y = 300;
  b += arrow(300, 264, 240, y - 6, { w: 3.5 }) + arrow(600, 264, 660, y - 6, { w: 3.5 });
  const r = row(y, [
    { kicker: 'LITERAL LEVEL', title: 'It opens a lock', body: 'The object does not stop being a key.' },
    { kicker: 'FIGURATIVE LEVEL', title: 'It stands for an idea', body: 'access, trust, a secret, or a past that can be reopened', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { gap: 60, card: { size: 17, tsize: 21 } });
  b += r.s;
  const yb = y + r.h + 24;
  b += `<rect x="30" y="${yb}" width="840" height="58" rx="14" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>`;
  b += T(450, yb + 36, 'A good symbol lives on both levels at once', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('01-literal-to-figurative',
    svg(900, yb + 58 + 30, 'From object to symbol', b),
    'A key at the top splits into two levels. Literal: it opens a lock. Figurative: it stands for access, trust, a secret or a past that can be reopened. A banner says a good symbol lives on both levels at once.',
    'An object becomes a symbol when it comes to stand for an idea, without ceasing to be itself.',
    '## From object to symbol');
}

// 02 Common and contextual symbols; what can be symbolic
{
  let b = '';
  const r = row(110, [
    { kicker: 'COMMON, RECURRENT', title: 'Readers bring associations to the text', body: ['dove → peace', 'winter → death or decline'], bullets: true },
    { kicker: 'CONTEXTUALISED', title: 'Meaning is built inside one text', body: ['a locked gate in one novel may mean something it means nowhere else'], bullets: true },
  ], { card: { size: 18, tsize: 20 } });
  b += r.s;
  let y = 110 + r.h + 20;
  b += `<rect x="30" y="${y}" width="840" height="56" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
  b += T(450, y + 35, 'Meaning can vary with the reader and the context, so evidence matters', { size: 18, weight: 700, anchor: 'middle' });
  y += 56 + 50;
  b += T(450, y, 'What can become symbolic?', { size: 21, weight: 700, anchor: 'middle' });
  const r2 = row(y + 20, [
    { title: 'An object', body: 'when it comes to stand for an idea or concept' },
    { title: 'A character', body: 'when they come to represent an idea (no need to label archetypes)' },
    { title: 'A setting', body: 'when it is associated with emotions, ideologies or beliefs' },
  ], { card: { align: 'middle', size: 17, fill: C.tealLight, edge: C.tealDark } });
  b += r2.s;
  add('02-common-and-contextual',
    svg(900, y + 20 + r2.h + 30, 'Where a symbol gets its meaning', b),
    'Two kinds of symbol: common, recurrent ones such as a dove for peace or winter for death, and contextualised ones whose meaning is built inside one text. Below, objects, characters and settings can all become symbolic.',
    'Some symbols arrive with meaning; others earn it inside a single text.',
    '## From object to symbol');
}

// 03 Six signals of symbolic weight
{
  const ic = {
    rep: (x, y) => [0, 1, 2].map((i) => `<rect x="${x + i * 18}" y="${y - 12}" width="13" height="24" rx="3" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`).join(''),
    pro: (x, y) => `<circle cx="${x + 18}" cy="${y - 4}" r="14" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3"/><line x1="${x + 28}" y1="${y + 6}" x2="${x + 44}" y2="${y + 20}" stroke="${C.ink}" stroke-width="5" stroke-linecap="round"/>`,
    rea: (x, y) => `<circle cx="${x + 22}" cy="${y}" r="17" fill="${C.cream}" stroke="${C.ink}" stroke-width="3"/><circle cx="${x + 16}" cy="${y - 4}" r="2.5" fill="${C.ink}"/><circle cx="${x + 28}" cy="${y - 4}" r="2.5" fill="${C.ink}"/><circle cx="${x + 22}" cy="${y + 7}" r="4" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`,
    pla: (x, y) => `<line x1="${x}" y1="${y + 6}" x2="${x + 50}" y2="${y + 6}" stroke="${C.ink}" stroke-width="3"/><circle cx="${x + 34}" cy="${y + 6}" r="7" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + path(`M${x + 34},${y - 4} l0,-12`, { w: 3 }),
    lin: (x, y) => `<rect x="${x}" y="${y - 8}" width="26" height="16" rx="8" fill="none" stroke="${C.ink}" stroke-width="3.5"/><rect x="${x + 18}" y="${y - 8}" width="26" height="16" rx="8" fill="none" stroke="${C.tealDark}" stroke-width="3.5"/>`,
    cha: (x, y) => `<rect x="${x}" y="${y - 10}" width="14" height="20" rx="3" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + arrow(x + 18, y, x + 34, y, { w: 2.5 }) + `<rect x="${x + 36}" y="${y - 10}" width="14" height="20" rx="3" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2.5"/>`,
  };
  const items = [
    ['rep', 'Repetition', 'appears again and again, often at important moments'],
    ['pro', 'Prominence', 'unusual detail, a whole sentence or paragraph on something small'],
    ['rea', 'Character reaction', 'characters avoid it, guard it, fear it or cannot let go'],
    ['pla', 'Placement', 'at a turning point, an ending or an opening'],
    ['lin', 'Linked language', 'described in words from another realm: grief, power, time'],
    ['cha', 'Change', "its condition changes as the story's situation changes"],
  ];
  let b = '';
  const w = 411, h = 128;
  items.forEach(([k, ti, d], i) => {
    const x = 30 + (i % 2) * (w + 18), y = 110 + Math.floor(i / 2) * (h + 16);
    b += panel(x, y, w, h) + ic[k](x + 22, y + 44) + T(x + 90, y + 50, ti, { size: 20, weight: 700 });
    b += para(x + 22, y + 88, d, w - 44, { size: 17, fill: C.muted }).s;
  });
  const yE = 110 + 3 * (h + 16);
  b += T(450, yE + 24, 'Most objects are just objects: a symbol earns the name through these signals', { size: 17, anchor: 'middle', fill: C.muted, italic: true });
  add('03-six-signals',
    svg(900, yE + 52, 'How to recognise a symbol', b),
    'Six signals of symbolic weight: repetition, prominence, character reaction, placement at a turning point, opening or ending, language linked to another realm such as grief or time, and change in the object as the situation changes.',
    'Repetition, emphasis, reaction and placement tell you an object is carrying meaning.',
    '## How to recognise a symbol');
}

// 04 Four-step method (+ trace the shift)
{
  let b = '';
  const items = [
    { kicker: 'STEP 1', title: 'Notice', body: 'What is the object? What signals weight?' },
    { kicker: 'STEP 2', title: 'Associate', body: 'What ideas does the text connect it with?' },
    { kicker: 'STEP 3', title: 'State', body: 'What idea does it represent here? A short phrase.', fill: C.cream, edge: C.olive },
    { kicker: 'STEP 4', title: 'Function', body: 'What does it do in the work?', fill: C.tealLight, edge: C.tealDark },
  ];
  const r = row(110, items, { arrows: true, gap: 34, card: { size: 17, tsize: 21 } });
  b += r.s;
  let y = 110 + r.h + 30;
  b += T(30, y + 14, 'A symbol can...', { size: 19, weight: 700, fill: C.tealDark });
  const fx = ['make an internal feeling visible', 'mark a stage of change', 'connect scenes', 'deepen a conflict', 'invite an interpretation'];
  y += 34;
  fx.forEach((f, i) => { const cx = 30 + i * 170; b += chip(cx, y, 158, 84, f, { fill: C.tealLight, edge: C.tealDark, size: 16, weight: 600 }); });
  y += 84 + 34;
  const c = card(150, y, 600, { kicker: 'STEP 5, IF THE MEANING CHANGES', title: 'Trace the shift', body: 'and explain what the change shows', align: 'middle', edge: C.ink });
  b += `<rect x="150" y="${y}" width="600" height="${c.h}" rx="14" fill="none"/>` + c.s.replace('stroke-width="2.5"', 'stroke-width="2.5" stroke-dasharray="9 6"');
  add('04-four-step-method',
    svg(900, y + c.h + 30, 'Reading a symbol in four steps', b),
    'Four steps in a row: notice the object and its signals, associate it with ideas, state the idea it represents in a short phrase, and explain its function. Five possible functions are listed, and a dashed fifth step, trace the shift, applies when the meaning changes.',
    'Notice, associate, state, function; trace the shift if the meaning moves.',
    '## A four-step method');
}

// 05 Public-domain examples
{
  const tb = table(30, 110, [
    { w: 175, head: 'Work' }, { w: 205, head: 'Symbol' }, { w: 220, head: 'Literal' }, { w: 240, head: 'Comes to stand for' },
  ], [
    ['Macbeth', 'Blood on the hands', 'A stain: "Will all great Neptune\'s ocean wash this blood..."', 'Guilt that cannot be removed; returns in the sleepwalking'],
    ['Jane Eyre', 'The chestnut tree', 'Split by lightning the night Rochester proposes', 'A sign that the union is threatened'],
    ['The Scarlet Letter', 'The letter Hester wears', 'A public mark of shame', 'A contested meaning that shifts as others read it'],
    ['Great Expectations', 'Miss Havisham (a character)', 'Stops the clocks at the moment she was jilted', 'A refusal to let time move'],
  ], { size: 17 });
  add('05-classic-symbols',
    svg(900, 110 + tb.h + 30, 'Symbols in four classics', tb.s),
    'Table of four examples. In Macbeth, blood comes to stand for guilt. In Jane Eyre, the chestnut tree split by lightning suggests the union is threatened. In The Scarlet Letter, the letter begins as a mark of shame and its meaning shifts. In Great Expectations, Miss Havisham embodies a refusal to let time move.',
    'Each symbol starts as something literal and gathers an idea through the text.',
    '## Public-domain examples to learn from');
}

// 06 Worked example 1: evidence to idea
{
  let b = '';
  const rowsData = [
    ['NOTICE', '"since the autumn Papa died"; she walks "the long way round"; "Spring after spring"', 'The gate is dated, avoided and kept in view: more than a gate'],
    ['ASSOCIATE', 'blossom "climbed the wall and spilled over the top"', "Tied to the father's death and avoidance; life pressing on an enclosure"],
    ['STATE', '', "The locked gate stands for Eleanor's sealed-off grief"],
    ['TRACE THE SHIFT', 'the key in her palm "as though it were something that might wake"', 'Her first step from avoidance to confrontation'],
    ['FUNCTION', '', 'A private emotion becomes something seen, walked round and approached; it marks stages of change'],
  ];
  b += T(270, 126, 'Evidence in the passage', { size: 18, weight: 700, anchor: 'middle', fill: C.muted });
  b += T(690, 126, 'What it shows', { size: 18, weight: 700, anchor: 'middle', fill: C.muted });
  let y = 142;
  rowsData.forEach(([k, ev, inf], i) => {
    const lw = 300, rw = 380;
    const evH = ev ? cardH(lw, { body: ev, italic: true, size: 17, pad: 16 }) : 0;
    const inH = cardH(rw, { kicker: k, body: inf, size: 17, pad: 16 });
    const h = Math.max(evH, inH);
    if (ev) { b += card(120, y, lw, { body: ev, italic: true, size: 17, bfill: C.ink, pad: 16, minH: h, vcenter: true }).s + arrow(424, y + h / 2, 482, y + h / 2, { w: 3.5 }); }
    const hi = k === 'STATE' ? { fill: C.cream, edge: C.olive } : k === 'FUNCTION' ? { fill: C.tealLight, edge: C.tealDark } : {};
    b += card(490, y, rw, { kicker: k, body: inf, size: 17, pad: 16, minH: h, bfill: C.ink, ...hi }).s;
    b += badge(70, y + h / 2, 22, String(i + 1), hi.fill === C.cream ? C.mustard : C.cream);
    y += h + 14;
  });
  add('06-gate-evidence-to-idea',
    svg(900, y + 16, 'Worked example: the orchard gate', b),
    'Five rows link quotations from the practice passage to what they show. The dated, avoided gate and the overflowing blossom lead to the statement that the gate stands for Eleanor\'s sealed-off grief; the key that "might wake" marks her first step towards confrontation.',
    'Each claim about the gate rests on a specific detail from the passage.',
    '## Worked example 1: recognising and explaining a symbol');
}

// 07 The gate's meaning across the novel
{
  let b = '';
  const yL = 300;
  b += `<line x1="70" y1="${yL}" x2="840" y2="${yL}" stroke="${C.ink}" stroke-width="4"/>` + arrow(820, yL, 860, yL, { w: 4 });
  const st = [
    [170, 'Autumn', 'Padlocked since Papa died', 'Barrier: grief sealed off', C.panel, C.panelEdge],
    [450, 'Midsummer', 'She asks for the key', 'First step towards facing it', C.panel, C.panelEdge],
    [730, 'November storm', 'Gate face-down in the grass', 'Relief, not loss', C.tealLight, C.tealDark],
  ];
  st.forEach(([x, when, ev, mean, f, e]) => {
    b += `<circle cx="${x}" cy="${yL}" r="13" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
    b += T(x, yL - 30, when, { size: 19, weight: 700, anchor: 'middle' });
    const c = card(x - 125, 120, 250, { body: ev, size: 17, align: 'middle', bfill: C.ink, minH: 120, vcenter: true });
    b += c.s;
    b += card(x - 125, yL + 30, 250, { body: mean, size: 17, align: 'middle', bfill: C.ink, minH: 80, vcenter: true, fill: f, edge: e, bweight: 600 }).s;
  });
  const yM = yL + 140;
  b += chip(110, yM, 260, 60, 'ENCLOSURE', { fill: C.panel, edge: C.ink, size: 20 }) + chip(530, yM, 260, 60, 'RELEASE', { fill: C.tealLight, edge: C.tealDark, size: 20 });
  b += arrow(380, yM + 30, 520, yM + 30, { w: 5 });
  const yN = yM + 96;
  const r = row(yN, [
    { kicker: 'COMMON SYMBOL', title: 'The storm', body: 'upheaval: readers already know it' },
    { kicker: 'CONTEXTUAL SYMBOL', title: 'The gate', body: 'meaning made by this text' },
  ], { card: { size: 17 } });
  b += r.s + T(450, yN + r.h + 34, 'The two meet at the moment of change', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('07-gate-meaning-shifts',
    svg(900, yN + r.h + 60, "The gate's meaning shifts", b),
    'Timeline of the gate. Autumn: padlocked since Papa died, a barrier sealing off grief. Midsummer: Eleanor asks for the key. November: the storm leaves the gate face-down and she feels relief. The meaning moves from enclosure to release, where a common symbol, the storm, meets a contextual one, the gate.',
    'The gate moves from enclosure to release, and the storm brings the change.',
    '## Worked example 2: a symbol whose meaning shifts');
}

// 08 Weak to strong claims
{
  let b = '';
  const lv = [
    ['Names a technique only', '"The gate is a symbol."', C.panel, C.panelEdge, 'no meaning, no function'],
    ['States a meaning that fits the evidence', '"The gate, tied to the autumn her father died, represents grief she has locked away."', C.cream, C.olive, 'meaning, but no function yet'],
    ['Explains the function', '"Having the storm remove the gate lets the narrator mark Eleanor\'s release as something that comes unbidden, so that her relief seems both surprising and earned."', C.tealLight, C.tealDark, 'evidence + idea + function'],
  ];
  let y = 110;
  lv.forEach(([head, q, f, e, note], i) => {
    const x = 30 + i * 60, w = 840 - i * 60;
    const c = card(x, y, w, { kicker: head.toUpperCase(), kfill: i === 2 ? C.tealDark : i === 1 ? C.olive : C.muted, body: q, italic: true, size: 18, bfill: C.ink, fill: f, edge: e });
    b += c.s + T(x + w - 20, y + 33, note, { size: 15, anchor: 'end', fill: C.muted });
    y += c.h;
    if (i < 2) { b += arrow(x + 90, y + 4, x + 90 + 0, y + 34, { w: 3.5 }); y += 40; }
  });
  b += T(30, y + 40, 'Weaker claims point at a technique; stronger claims say what it does.', { size: 17, fill: C.muted, italic: true });
  add('08-weak-to-strong-claims',
    svg(900, y + 66, 'From "symbolizes" to analysis', b),
    'Three claims about the gate get stronger in steps. The first only names a technique. The second states a meaning tied to the evidence. The third explains the function: the storm marks Eleanor\'s release as unbidden, so her relief seems surprising and earned.',
    'Saying something "symbolizes" is a start; the analysis is the evidence, the idea and the function.',
    '## Common misconceptions');
}
