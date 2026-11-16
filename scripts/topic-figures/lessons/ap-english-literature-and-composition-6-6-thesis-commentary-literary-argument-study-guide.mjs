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

export const slug = 'ap-english-literature-and-composition-6-6-thesis-commentary-literary-argument-study-guide';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// 01 Structure of a literary argument
{
  let b = '';
  const th = card(260, 110, 380, { kicker: 'THESIS', title: 'An interpretive claim that needs a defence', align: 'middle', fill: C.cream, edge: C.olive, kfill: C.olive, tsize: 21 });
  b += th.s;
  const yC = 110 + th.h + 70;
  const xs = [30, 318, 606], w = 264;
  b += tl(30, 140, ['line of reasoning:', 'claims in a logical', 'sequence'], { size: 16, fill: C.tealDark, weight: 600 }, 21);
  xs.forEach((x, i) => {
    b += arrow(x + w / 2, yC - 8, 450 + (x + w / 2 - 450) * 0.45, 110 + th.h + 8, { w: 3.5, color: C.tealDark, marker: 'ahT' });
    b += card(x, yC, w, { kicker: `CLAIM ${i + 1}`, title: 'A topic claim', body: 'something that needs proof', minH: 120, size: 16, fill: C.tealLight, edge: C.tealDark }).s;
    if (i < 2) b += arrow(x + w + 4, yC + 60, x + w + 20, yC + 60, { w: 3 });
    b += arrow(x + w / 2, yC + 120 + 70 - 8, x + w / 2, yC + 128, { w: 3.5 });
    b += T(x + w / 2 + 12, yC + 120 + 38, 'commentary', { size: 15, fill: C.olive, weight: 700, italic: true });
    b += card(x, yC + 190, w, { kicker: 'EVIDENCE', body: 'details from the text', minH: 84, size: 16 }).s;
  });
  const yN = yC + 190 + 84 + 26;
  b += `<rect x="30" y="${yN}" width="840" height="78" rx="14" fill="${C.panel}" stroke="${C.olive}" stroke-width="2.5"/>`;
  b += T(50, yN + 32, 'Commentary', { size: 18, weight: 700, fill: C.olive }) + T(170, yN + 32, 'explains how the evidence supports each claim,', { size: 17 });
  b += T(50, yN + 58, 'and how the claims together support the thesis.', { size: 17 });
  add('01-argument-structure',
    svg(900, yN + 78 + 30, 'How a literary argument is built', b),
    'A thesis at the top is supported by three claims in a logical sequence, the line of reasoning. Each claim rests on evidence from the text, joined to it by commentary, which explains how the evidence supports the claim and how the claims support the thesis.',
    'Thesis, evidence and commentary: commentary is what joins the evidence to the claim.',
    '## What a literary argument does');
}

// 02 Not a thesis vs a thesis
{
  let b = '';
  const notL = [['Summary', 'retells events'], ['Fact', 'not open to dispute'], ['Topic', 'no claim'], ['List of devices', 'names tools, not what they do'], ['Restating the prompt', 'does not respond to the work']];
  const isL = ['Makes a claim about meaning or function', 'Is defensible: a reader could disagree', 'Is specific to this work', 'Responds to the question asked', 'Says why it matters ("so what")'];
  b += panel(30, 110, 405, 5 * 66 + 70) + panel(465, 110, 405, 5 * 66 + 70, C.tealLight, C.tealDark);
  b += T(232, 150, 'Not a thesis', { size: 22, weight: 700, anchor: 'middle', fill: C.rust });
  b += T(667, 150, 'A strong thesis', { size: 22, weight: 700, anchor: 'middle', fill: C.tealDark });
  notL.forEach(([k, why], i) => {
    const y = 176 + i * 66;
    b += `<circle cx="66" cy="${y + 22}" r="15" fill="#ffffff" stroke="${C.rust}" stroke-width="3"/>` + path(`M59,${y + 15} l14,14 M73,${y + 15} l-14,14`, { stroke: C.rust, w: 3 });
    b += T(94, y + 18, k, { size: 19, weight: 700 }) + T(94, y + 42, why, { size: 16, fill: C.muted });
  });
  isL.forEach((k, i) => {
    const y = 176 + i * 66;
    b += `<circle cx="501" cy="${y + 22}" r="15" fill="${C.tealDark}"/>` + path(`M493,${y + 22} l6,6 l11,-12`, { stroke: '#ffffff', w: 3.5 });
    b += para(529, y + 28, k, 320, { size: 17, weight: 600 }).s;
  });
  const yb = 110 + 5 * 66 + 70 + 20;
  b += T(450, yb + 20, 'A thesis may preview its line of reasoning; it need not list points, devices or evidence.', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  add('02-thesis-or-not',
    svg(900, yb + 46, 'What a thesis is, and is not', b),
    'Left: five kinds of sentence that are not a thesis: summary, fact, topic, list of devices and restating the prompt. Right: a strong thesis makes a claim about meaning or function, is defensible, is specific to the work, responds to the question and says why it matters.',
    'A thesis is a defensible claim about meaning, not a summary, a fact, a topic or a list.',
    '## The thesis');
}

// 03 Weak-to-strong ladder (Macbeth)
{
  let b = '';
  const rungs = [
    ['1', '"In Macbeth, Macbeth kills Duncan against his own better judgement."', 'Fact about the plot; no interpretation'],
    ['2', '"Shakespeare uses soliloquy, imagery and the witches to show Macbeth\'s inconsistency."', 'Lists devices; no claim about meaning'],
    ['3', '"In Macbeth, Shakespeare shows that people can know what is right and still do wrong."', 'A claim, but general: fits many works'],
  ];
  let y = 110;
  rungs.forEach(([n, q, v], i) => {
    const qh = para(0, 0, q, 500, { size: 17, italic: true }).h, h = Math.max(78, qh + 36);
    b += panel(30, y, 840, h) + badge(70, y + h / 2, 22, n, C.cream);
    b += para(110, y + 30, q, 500, { size: 17, italic: true }).s;
    b += `<line x1="630" y1="${y + 14}" x2="630" y2="${y + h - 14}" stroke="${C.panelEdge}" stroke-width="2"/>`;
    b += para(650, y + h / 2 - (wrap(v, 200, 16, 600).length - 1) * 10 + 5, v, 200, { size: 16, weight: 600, fill: C.rust }).s;
    y += h + 12;
  });
  y += 4;
  const segs = [
    ['CLAIM ABOUT THE WORK\'S CHOICE', '"...gives the hero a conscience that argues clearly against his crime"'],
    ['DIRECTION', '"...and then lets ambition overrule it"'],
    ['SIGNIFICANCE', '"...presents evil not as ignorance of the good but as a betrayal of it, and so makes tragedy a matter of self-division."'],
  ];
  const segH = segs.map(([, q]) => para(0, 0, q, 520, { size: 17, italic: true }).h + 14);
  const H4 = 70 + segH.reduce((a, c) => a + c + 10, 0);
  b += panel(30, y, 840, H4, C.tealLight, C.tealDark) + badge(70, y + 36, 22, '4', C.mustard);
  b += T(110, y + 43, 'Defensible, specific, previews a line of reasoning, says what it means', { size: 17, weight: 700, fill: C.tealDark });
  let sy = y + 64;
  segs.forEach(([k, q], i) => {
    b += `<rect x="110" y="${sy}" width="740" height="${segH[i]}" rx="10" fill="#ffffff" stroke="${C.tealDark}" stroke-width="1.5"/>`;
    b += para(126, sy + 9 + 15 + (segH[i] - 14 - para(0, 0, q, 520, { size: 17, italic: true }).h) / 2, q, 520, { size: 17, italic: true }).s;
    b += para(668, sy + segH[i] / 2 + 5 - (wrap(k, 170, 15, 700).length - 1) * 9, k, 170, { size: 15, weight: 700, fill: C.olive }).s;
    sy += segH[i] + 10;
  });
  y += H4;
  add('03-thesis-ladder',
    svg(900, y + 30, 'Weak to strong: a thesis ladder', b),
    'Four versions of a Macbeth thesis. Version 1 states a plot fact, version 2 lists devices, version 3 makes a general claim that could fit many works. Version 4 is split into a claim about the work\'s choice, a direction and a significance: evil as betrayal, tragedy as self-division.',
    'The strong thesis names a choice, shows a direction and says what it means.',
    '### Weak to strong: a worked ladder');
}

// 04 List vs line of reasoning
{
  let b = '';
  b += panel(30, 110, 840, 200);
  b += T(50, 146, 'A list', { size: 21, weight: 700, fill: C.rust }) + T(140, 146, 'could be reordered without changing anything', { size: 17, fill: C.muted });
  ['A soliloquy', 'A quotation about blood', 'Another scene'].forEach((s, i) => {
    const x = 50 + i * 272;
    b += chip(x, 178, 248, 70, s, { fill: '#ffffff', edge: C.panelEdge, size: 18, weight: 600 });
    if (i < 2) b += T(x + 260, 222, '⇄', { size: 22, anchor: 'middle', fill: C.rust, weight: 700 });
  });
  b += T(450, 288, 'First... Second... Third...', { size: 16, fill: C.muted, anchor: 'middle', italic: true });
  const y0 = 350;
  b += panel(30, y0, 840, 330, C.tealLight, C.tealDark);
  b += T(50, y0 + 38, 'A line', { size: 21, weight: 700, fill: C.tealDark }) + T(140, y0 + 38, 'each claim builds on the one before', { size: 17, fill: C.muted });
  const st = ["Macbeth's conscience is established", 'It is overruled by ambition', 'The consequences show betrayal, not ignorance'];
  st.forEach((s, i) => {
    const x = 50 + i * 272, y = y0 + 200 - i * 70;
    b += chip(x, y, 248, 84, s, { fill: '#ffffff', edge: C.tealDark, size: 17, weight: 600 });
    if (i < 2) b += elbow([[x + 124, y], [x + 124, y - 30], [x + 268, y - 30]], { color: C.tealDark, marker: 'ahT', w: 3.5 });
  });
  const yq = y0 + 330 + 24;
  b += `<rect x="30" y="${yq}" width="840" height="84" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
  b += T(450, yq + 34, 'Test each claim:', { size: 18, weight: 700, anchor: 'middle' });
  b += T(450, yq + 62, 'Why does it come here, and what does it add to the one before?', { size: 18, anchor: 'middle', italic: true });
  add('04-list-or-line',
    svg(900, yq + 84 + 30, 'A list of points or a line of reasoning?', b),
    'Top: a list of three items, a soliloquy, a quotation about blood and another scene, that could be swapped around. Bottom: a rising line of three claims, Macbeth\'s conscience is established, it is overruled by ambition, the consequences show betrayal rather than ignorance, each building on the last.',
    'If you can reorder the claims without loss, you have a list, not a line of reasoning.',
    '## The line of reasoning');
}

// 05 Commentary chain: four moves
{
  let b = '';
  const mv = [
    ['Interpret', 'Say what the evidence shows', '"suggests", "reveals", "implies"', C.panel, C.panelEdge],
    ['Explain how', 'Point to the words or choices that produce the meaning', '"the verb", "the repetition", "the placement"', C.panel, C.panelEdge],
    ['Connect to the claim', 'Show how this supports the topic claim', '"so", "which supports", "this matters because"', C.cream, C.olive],
    ['Connect to the thesis', 'Say how it moves the whole argument forward', '"this deepens", "thereby", "which shows that"', C.tealLight, C.tealDark],
  ];
  let y = 110;
  b += T(130, y + 6, 'EVIDENCE', { size: 16, weight: 700, fill: C.muted, anchor: 'middle' });
  b += arrow(130, y + 16, 130, y + 44, { w: 3.5 });
  y += 50;
  mv.forEach(([k, d, sig, f, e], i) => {
    const h = Math.max(96, 70 + para(0, 0, d, 380, { size: 17 }).h, 64 + para(0, 0, sig, 300, { size: 17, italic: true }).h);
    b += `<rect x="30" y="${y}" width="840" height="${h}" rx="14" fill="${f}" stroke="${e}" stroke-width="2.5"/>`;
    b += badge(72, y + h / 2, 24, String(i + 1), i >= 2 ? C.mustard : C.cream);
    b += T(116, y + 40, k, { size: 21, weight: 700 }) + para(116, y + 68, d, 380, { size: 17, fill: C.muted }).s;
    b += `<line x1="530" y1="${y + 16}" x2="530" y2="${y + h - 16}" stroke="${C.panelEdge}" stroke-width="2"/>`;
    b += T(552, y + 38, 'signal words', { size: 15, weight: 700, fill: C.tealDark }) + para(552, y + 64, sig, 300, { size: 17, italic: true }).s;
    y += h;
    if (i < 3) { b += arrow(72, y + 4, 72, y + 26, { w: 3.5 }); y += 30; }
  });
  b += arrow(72, y + 4, 72, y + 26, { w: 3.5 }) + T(100, y + 26, 'THESIS', { size: 16, weight: 700, fill: C.tealDark });
  add('05-commentary-chain',
    svg(900, y + 56, 'Commentary in four moves', b),
    'Four stacked moves lead from evidence to thesis: interpret what the evidence shows, explain how the words produce the meaning, connect it to the topic claim, and connect it to the thesis. Each move has typical signal words such as "suggests", "the verb", "which supports" and "thereby".',
    'Good commentary interprets, explains how, and connects to the claim and then the thesis.',
    '## Commentary: the part that makes it an argument');
}

// 06 Worked example 1: drafts sieve
{
  let b = '';
  const dr = [
    ['Draft 1', '"Miss Tarrant refuses the Squire\'s gift."', 'Fact and plot: cannot be defended'],
    ['Draft 2', '"The author uses speech, gesture and counting to show Miss Tarrant\'s feelings."', 'Lists devices; no claim about meaning'],
    ['Draft 3', '"Miss Tarrant is a hypocrite."', 'A label; the evidence of cost resists it'],
  ];
  let y = 110;
  dr.forEach(([k, q, v]) => {
    const qh = para(0, 0, q, 460, { size: 17, italic: true }).h, h = Math.max(70, qh + 34);
    b += panel(30, y, 840, h) + T(50, y + h / 2 + 6, k, { size: 18, weight: 700, fill: C.muted });
    b += para(150, y + (h - qh) / 2 + 17, q, 460, { size: 17, italic: true }).s;
    b += `<circle cx="640" cy="${y + h / 2}" r="13" fill="#ffffff" stroke="${C.rust}" stroke-width="3"/>` + path(`M634,${y + h / 2 - 6} l12,12 M646,${y + h / 2 - 6} l-12,12`, { stroke: C.rust, w: 3 });
    b += para(664, y + h / 2 + 5 - (wrap(v, 190, 16, 600).length - 1) * 10, v, 190, { size: 16, weight: 600, fill: C.rust }).s;
    y += h + 12;
  });
  y += 20;
  const q4 = '"By setting Miss Tarrant\'s composed public refusal beside her private count of the school\'s needs, the narrator presents her principle as a decision made with open eyes and at real cost, and so makes independence in the novel a matter of sacrifice rather than pride."';
  const c = card(30, y, 840, { kicker: 'DRAFT 4 (STRONG)', body: q4, italic: true, size: 18, bfill: C.ink, fill: C.tealLight, edge: C.tealDark });
  b += c.s;
  y += c.h + 40;
  b += T(450, y, 'The line it previews', { size: 19, weight: 700, anchor: 'middle' });
  const r = row(y + 16, [{ body: 'Public refusal' }, { body: 'Private cost' }, { body: 'Independence as sacrifice' }], { arrows: true, card: { align: 'middle', size: 18, bfill: C.ink, bweight: 600, fill: C.cream, edge: C.olive } });
  b += r.s;
  y += 16 + r.h;
  b += T(450, y + 34, 'Defensible: a reader could argue she is simply proud', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  add('06-miss-tarrant-drafts',
    svg(900, y + 60, 'Worked example: four thesis drafts', b),
    'Three rejected drafts about Miss Tarrant: a plot fact, a list of devices and the label "hypocrite". The strong fourth draft presents her principle as a costly decision and previews a line from public refusal to private cost to independence as sacrifice.',
    'Only the fourth draft makes a defensible claim and shows where the argument will go.',
    '## Worked example 1: from weak thesis to strong thesis');
}

// 07 Worked example 2: evidence to commentary chain
{
  let b = '';
  const ev = card(30, 110, 840, { kicker: 'EVIDENCE', body: 'She "stood a long while counting on her fingers the panes that wanted glazing, and the desks that wanted mending, and the winter that was coming."', italic: true, size: 18, bfill: C.ink, fill: C.cream, edge: C.olive, kfill: C.olive });
  b += ev.s;
  let y = 110 + ev.h + 40;
  // weak branch
  const wk = card(30, y, 250, { kicker: 'WEAK', kfill: C.rust, body: '"This shows that she is worried about the school."', italic: true, size: 17, bfill: C.ink, edge: C.rust });
  b += wk.s + para(40, y + wk.h + 26, 'Restates the evidence in softer words; goes no further', 240, { size: 16, fill: C.rust }).s;
  b += arrow(155, 110 + ev.h + 6, 155, y - 6, { w: 3, color: C.rust, marker: 'ahR', dash: '8 6' });
  const mv = [
    ['1 INTERPRET', 'She knows exactly what the school lacks'],
    ['2 EXPLAIN HOW', 'Specific items; two "that wanted" clauses build to "the winter that was coming"; "long" shows she does not hurry'],
    ['3 CONNECT TO THE CLAIM', 'Contrasts with the folded hands of her refusal: it costs her something she can count'],
    ['4 CONNECT TO THE THESIS', 'Refusing with full knowledge makes independence a sacrifice, not pride'],
  ];
  b += arrow(580, 110 + ev.h + 6, 580, y - 6, { w: 3.5 });
  const s = stack(y, mv.map(([k, d], i) => ({ kicker: k, body: d, size: 17, bfill: C.ink, ...(i === 3 ? { fill: C.tealLight, edge: C.tealDark } : {}) })), { x: 310, w: 560, gap: 30 });
  b += s.s;
  add('07-commentary-on-the-count',
    svg(900, y + s.h + 30, 'Worked example: commentary on the count', b),
    'The quotation about Miss Tarrant counting the panes, desks and coming winter leads to two paths. A weak comment only says she is worried. The strong chain interprets, explains how the list builds to winter, connects to the claim about her costly refusal, and connects to the thesis about sacrifice.',
    'Strong commentary keeps going until it reaches the thesis.',
    '## Worked example 2: building an evidence-to-commentary chain');
}

// 08 Self-assessment rubric
{
  let b = '';
  const feats = [
    ['Thesis makes an interpretive claim', 'Summarises or lists', 'States a general idea', 'Specific, defensible interpretation'],
    ['Thesis responds to the question', 'Repeats the prompt', 'Partly responds', 'Directly answers in a way the text can support'],
    ['Claims form a line of reasoning', 'A list', 'Some logic', 'Each claim builds on the last'],
    ['Evidence is specific and relevant', 'General references', 'Quoted but loosely linked', 'Precise and clearly linked'],
    ['Commentary explains how', 'Restates the evidence', 'Interprets without explaining how', 'Interprets, explains how, connects to the thesis'],
  ];
  const x0 = 30, cw0 = 240, cwb = 200;
  const fills = ['#ffffff', C.cream, C.tealLight];
  const edges = [C.panelEdge, C.olive, C.tealDark];
  ['1  not yet', '2', '3  secure'].forEach((h, j) => {
    const x = x0 + cw0 + j * cwb;
    b += `<rect x="${x + 4}" y="110" width="${cwb - 8}" height="44" rx="10" fill="${C.ink}"/>` + T(x + cwb / 2, 139, h, { size: 18, weight: 700, anchor: 'middle', fill: '#ffffff' });
  });
  b += arrow(x0 + cw0 + 20, 172, x0 + cw0 + 3 * cwb - 20, 172, { w: 3, color: C.tealDark, marker: 'ahT' });
  let y = 188;
  feats.forEach(([f, ...cells]) => {
    const hs = [para(0, 0, f, cw0 - 24, { size: 17, weight: 700 }).h, ...cells.map((c) => para(0, 0, c, cwb - 32, { size: 16 }).h)];
    const h = Math.max(...hs) + 28;
    b += para(x0 + 4, y + (h - hs[0]) / 2 + 17, f, cw0 - 24, { size: 17, weight: 700 }).s;
    cells.forEach((c, j) => {
      const x = x0 + cw0 + j * cwb;
      b += `<rect x="${x + 4}" y="${y}" width="${cwb - 8}" height="${h - 8}" rx="10" fill="${fills[j]}" stroke="${edges[j]}" stroke-width="2"/>`;
      b += para(x + cwb / 2, y + (h - 8 - hs[j + 1]) / 2 + 16, c, cwb - 32, { size: 16, anchor: 'middle' }).s;
    });
    y += h;
  });
  add('08-self-assessment-rubric',
    svg(900, y + 24, 'Self-assessment: from 1 to 3', b),
    'A grid rating five features from 1 (not yet) to 3 (secure): an interpretive thesis, a thesis that responds to the question, claims that form a line of reasoning, specific evidence, and commentary that explains how. Level 3 cells describe a specific, defensible thesis, building claims, precise evidence and commentary that connects to the thesis.',
    'Use the rubric to move each feature from "not yet" towards "secure".',
    '## Self-assessment table (suggested Marlbridge rubric)');
}
