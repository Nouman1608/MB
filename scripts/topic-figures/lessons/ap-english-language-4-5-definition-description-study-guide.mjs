import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

// ---------- local helpers (AP English Language figures) ----------
const _CH = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~’‘“”—–…é·•→×✓✗";
const _W = {"r":[281,288,466,633,642,982,644,300,365,365,501,662,288,460,288,360,631,407,610,618,646,608,620,566,619,620,288,302,662,662,662,511,966,690,654,730,722,601,590,746,743,269,571,672,565,903,753,765,639,765,644,642,646,744,690,985,682,679,629,365,360,365,471,456,323,562,612,571,612,583,370,613,591,242,242,549,242,876,591,600,612,612,376,528,327,591,562,818,546,562,552,426,333,426,662,261,261,440,440,1000,500,864,583,288,562,954,662,884,886],"b":[237,338,552,649,655,1016,672,339,377,377,559,679,334,468,334,388,674,431,630,646,676,639,649,582,651,649,334,343,679,679,679,560,1016,747,662,740,722,607,587,750,747,281,584,719,565,932,762,771,648,777,657,655,667,732,747,1038,738,731,664,377,388,377,487,476,365,581,630,588,630,596,398,632,623,271,271,580,271,913,623,613,630,630,407,560,366,623,600,850,580,602,573,469,372,469,679,311,311,540,532,1000,500,1002,596,334,474,954,679,882,883]};
const _M = { r: {}, b: {} };
for (const k of ['r', 'b']) [..._CH].forEach((c, i) => { _M[k][c] = _W[k][i]; });
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
// estimated rendered width of plain text
const tw = (s, size = 18, bold = false) => { const m = _M[bold ? 'b' : 'r']; let n = 0; for (const c of String(s)) n += m[c] ?? 620; return (n / 1000) * size * 1.03; };
// rich text: **bold**  __italic__  {{teal bold}}  [[rust bold]]  ((olive bold))
function words(s) {
  const segs = []; let b = false, it = false, c = null, buf = '';
  const push = () => { if (buf) { segs.push({ s: buf, b, it, c }); buf = ''; } };
  for (let k = 0; k < s.length;) {
    const two = s.slice(k, k + 2);
    if (two === '**') { push(); b = !b; k += 2; continue; }
    if (two === '__') { push(); it = !it; k += 2; continue; }
    if (two === '{{') { push(); c = 'T'; k += 2; continue; }
    if (two === '[[') { push(); c = 'R'; k += 2; continue; }
    if (two === '((') { push(); c = 'O'; k += 2; continue; }
    if (two === '}}' || two === ']]' || two === '))') { push(); c = null; k += 2; continue; }
    buf += s[k]; k++;
  }
  push();
  const out = []; let cur = [];
  for (const g of segs) for (const p of g.s.split(/( )/)) {
    if (p === ' ') { if (cur.length) { out.push(cur); cur = []; } } else if (p) cur.push({ ...g, s: p });
  }
  if (cur.length) out.push(cur);
  return out;
}
const wordW = (wd, size, baseBold) => wd.reduce((a, p) => a + tw(p.s, size, baseBold || p.b || !!p.c), 0);
function wrapRich(s, maxW, size, baseBold) {
  const lines = [];
  for (const para of String(s).split('\n')) {
    const ws = words(para); let line = [], lw = 0; const sp = size * 0.28;
    for (const wd of ws) {
      const w = wordW(wd, size, baseBold);
      if (line.length && lw + sp + w > maxW) { lines.push(line); line = [wd]; lw = w; } else { lw += (line.length ? sp : 0) + w; line.push(wd); }
    }
    lines.push(line);
  }
  return lines;
}
const COL = { T: C.tealDark, R: C.rust, O: C.olive };
function lineSvg(x, y, line, { size, fill, weight, anchor, italic }) {
  let inner = '';
  line.forEach((wd, i) => {
    if (i) inner += ' ';
    for (const p of wd) {
      const a = [];
      if (p.b || p.c) a.push('font-weight="700"');
      if (p.c) a.push(`fill="${COL[p.c]}"`);
      if (p.it) a.push('font-style="italic"');
      inner += a.length ? `<tspan ${a.join(' ')}>${esc(p.s)}</tspan>` : esc(p.s);
    }
  });
  return `<text x="${x}" y="${y}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}"${italic ? ' font-style="italic"' : ''} xml:space="preserve">${inner}</text>`;
}
// Paragraph. y = baseline of first line. Returns {s, h, n}
function P(x, y, s, o = {}) {
  const size = o.size || 18, w = o.w || 800, lh = o.lh || size * 1.32;
  const opts = { size, fill: o.fill || C.ink, weight: o.weight || 400, anchor: o.anchor || 'start', italic: !!o.italic };
  const lines = wrapRich(s, w, size, (o.weight || 400) >= 600);
  return { s: lines.map((ln, i) => lineSvg(x, y + i * lh, ln, opts)).join(''), h: lines.length * lh, n: lines.length };
}
const T = (x, y, s, o = {}) => P(x, y, s, { w: 5000, ...o }).s;
const rect = (x, y, w, h, fill = C.panel, edge = C.panelEdge, rx = 14, sw = 2.5, extra = '') =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}" ${extra}/>`;
// Box with optional heading + body; auto height unless h given. Returns {s,h}
function box(x, y, w, o = {}) {
  const pad = o.pad ?? 18, hs = o.headSize || 20, bs = o.size || 17, align = o.align || 'start';
  const ind = o.indent || 0;
  const tx = align === 'middle' ? x + w / 2 : x + pad + ind;
  const nat = o.vc && o.h ? box(x, y, w, { ...o, h: 0, vc: false }).h : 0;
  let inner = '', cy = y + pad + (o.vc && o.h ? Math.max(0, (o.h - nat) / 2) : 0);
  if (o.head) {
    const hp = P(tx + (o.headIndent || 0), cy + hs * 0.8, o.head, { size: hs, weight: 700, w: w - 2 * pad - ind - (o.headIndent || 0), anchor: align, fill: o.headColor || C.ink });
    inner += hp.s; cy += hp.h + (o.body ? 4 : 0);
  }
  if (o.body) {
    const bp = P(tx, cy + bs * 0.85, o.body, { size: bs, w: w - 2 * pad - ind, anchor: align, fill: o.bodyColor || C.ink, lh: o.lh });
    inner += bp.s; cy += bp.h;
  }
  const h = o.h || (cy - y + pad - 4);
  let band = '';
  if (o.bar) band = `<rect x="${x}" y="${y}" width="10" height="${h}" rx="5" fill="${o.bar}"/>`;
  return { s: rect(x, y, w, h, o.fill || C.panel, o.edge || C.panelEdge, o.rx ?? 14, o.sw ?? 2.5, o.dash ? `stroke-dasharray="${o.dash}"` : '') + band + inner, h };
}
// Row of equal-height boxes. items: array of box options. Returns {s,h,xs,w}
function row(x, y, totalW, gap, items) {
  const n = items.length, w = (totalW - gap * (n - 1)) / n;
  const h = Math.max(...items.map((it) => box(0, 0, it.w || w, it).h));
  const xs = items.map((_, i) => x + i * (w + gap));
  return { s: items.map((it, i) => box(xs[i], y, w, { ...it, h }).s).join(''), h, xs, w };
}
// Stack of full-width boxes with gap. Returns {s,h,ys,hs}
function stack(x, y, w, gap, items) {
  let s = '', cy = y; const ys = [], hs = [];
  for (const it of items) { const b = box(it.x ?? x, cy, it.w || w, it); s += b.s; ys.push(cy); hs.push(b.h); cy += b.h + gap; }
  return { s, h: cy - gap - y, ys, hs };
}
// Chip / pill label centred vertically on cy. Returns {s,w}
function chip(x, cy, text, o = {}) {
  const size = o.size || 16, padX = o.padX ?? 12, h = o.h || size + 14;
  const w = tw(text.replace(/\*\*|__|\{\{|\}\}|\[\[|\]\]|\(\(|\)\)/g, ''), size, true) + 2 * padX;
  const x0 = o.anchor === 'middle' ? x - w / 2 : o.anchor === 'end' ? x - w : x;
  return { s: rect(x0, cy - h / 2, w, h, o.fill || C.cream, o.edge || C.ink, h / 2, o.sw ?? 2) + T(x0 + w / 2, cy + size * 0.36, text, { size, weight: 700, anchor: 'middle', fill: o.color || C.ink }), w };
}
// Table with wrapped cells. cols = widths; rows = array of arrays; first row is header if o.head !== false. Returns {s,h}
function table(x, y, cols, rows, o = {}) {
  const size = o.size || 16, pad = o.pad || 12, W = cols.reduce((a, b) => a + b, 0);
  let s = '', cy = y;
  rows.forEach((r, ri) => {
    const isHead = ri === 0 && o.head !== false;
    const hs = r.map((c, ci) => P(0, 0, c, { size, w: cols[ci] - 2 * pad, weight: isHead ? 700 : 400 }).h);
    const rh = Math.max(...hs) + 2 * pad - 2;
    const fill = isHead ? (o.headFill || C.tealLight) : (o.rowFills && o.rowFills[ri]) || (ri % 2 && o.zebra ? '#f8faf9' : C.panel);
    s += `<rect x="${x}" y="${cy}" width="${W}" height="${rh}" fill="${fill}"/>`;
    let cx = x;
    r.forEach((c, ci) => {
      const cf = o.cellFill && o.cellFill(ri, ci);
      if (cf) s += `<rect x="${cx}" y="${cy}" width="${cols[ci]}" height="${rh}" fill="${cf}"/>`;
      s += P(cx + pad, cy + pad + size * 0.82, c, { size, w: cols[ci] - 2 * pad, weight: isHead || (o.boldFirst && ci === 0) ? 700 : 400 }).s;
      cx += cols[ci];
    });
    if (ri) s += `<line x1="${x}" y1="${cy}" x2="${x + W}" y2="${cy}" stroke="${C.panelEdge}" stroke-width="1.5"/>`;
    cy += rh;
  });
  let cx = x;
  cols.slice(0, -1).forEach((c) => { cx += c; s += `<line x1="${cx}" y1="${y}" x2="${cx}" y2="${cy}" stroke="${C.panelEdge}" stroke-width="1.5"/>`; });
  s += rect(x, y, W, cy - y, 'none', C.ink, 12, 2.5);
  return { s, h: cy - y };
}
// Annotated sentence strip: items [{text, label, fill}] laid left-to-right, wrapping. Returns {s,h}
function chunks(x, y, maxW, items, o = {}) {
  const size = o.size || 18, ls = o.labelSize || 15, gap = o.gap ?? 10, ch = size + 18, rowGap = o.rowGap ?? 22;
  let cx = x, cy = y, s = '', rowH = 0;
  for (const it of items) {
    const tW = tw(it.text, size, false) + 20;
    const labW = it.label ? Math.min(tw(it.label, ls, true) + 10, o.minLabelW || 120) : 0;
    const w = Math.max(tW, labW);
    if (cx > x && cx + w > x + maxW) { cx = x; cy += rowH + rowGap; rowH = 0; }
    const fill = it.fill || C.panel;
    s += rect(cx, cy, w, ch, fill, it.fill ? C.ink : C.panelEdge, 8, it.fill ? 2 : 1.5);
    s += T(cx + w / 2, cy + ch / 2 + size * 0.35, it.text, { size, anchor: 'middle', italic: !!it.italic });
    let h = ch;
    if (it.label) {
      const lp = P(cx + w / 2, cy + ch + 8 + ls * 0.9, it.label, { size: ls, w: w, anchor: 'middle', weight: 700, fill: it.labelColor || C.tealDark, lh: ls * 1.22 });
      s += lp.s; h += 8 + lp.h + 2;
    }
    rowH = Math.max(rowH, h); cx += w + gap;
  }
  return { s, h: cy + rowH - y };
}
const line = (x1, y1, x2, y2, color = C.ink, w = 2.5, dash = '') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const curve = (d, color = C.ink, w = 3.5, marker = 'ah', dash = '') => `<path d="${d}" fill="none" stroke="${color}" stroke-width="${w}"${marker ? ` marker-end="url(#${marker})"` : ''}${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const circ = (cx, cy, r, fill = C.panel, edge = C.ink, sw = 2.5) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
const num = (cx, cy, n, fill = C.cream, r = 20) => badge(cx, cy, r, String(n), fill);
// Figure wrapper: body is a function (y0) => {s, h} or a string with explicit height
export const figures = [];
function fig(name, title, sub, build, alt, caption, after) {
  const y0 = sub ? 122 : 96;
  const r = build(y0);
  const H = Math.ceil(y0 + r.h + 30);
  figures.push({ name, svg: svg(900, H, esc(title), r.s, sub ? esc(sub) : ''), alt, caption, after });
}
// ---------- end helpers ----------

export const slug = 'ap-english-language-4-5-definition-description-study-guide';
const LESSON = 'src/content/ap-resources/english-language-and-composition/4-5-definition-description-study-guide.md';

// 01 Definition vs description
fig('01-definition-vs-description', 'Boundaries or features?', 'Two methods that make an idea visible', (y0) => {
  let s = '';
  // definition: boundary
  s += rect(30, y0, 405, 300, C.panel, C.panelEdge, 14);
  s += T(232, y0 + 34, 'Definition', { size: 22, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += T(232, y0 + 60, '“What is it, exactly?”', { size: 17, anchor: 'middle', italic: true });
  s += `<circle cx="232" cy="${y0 + 170}" r="78" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="3" stroke-dasharray="8 5"/>`;
  [[205, 150], [250, 140], [230, 190], [265, 180], [200, 195]].forEach(([x, y]) => { s += circ(x, y0 + y, 9, C.tealDark, C.ink, 1.5); });
  [[110, 110], [355, 120], [120, 240], [350, 245]].forEach(([x, y]) => { s += circ(x, y0 + y, 9, C.panel, C.rust, 2); });
  s += T(232, y0 + 275, 'sets boundaries: what counts and what does not', { size: 15, anchor: 'middle', fill: C.muted });
  // description: features
  s += rect(465, y0, 405, 300, C.panel, C.panelEdge, 14);
  s += T(667, y0 + 34, 'Description', { size: 22, weight: 700, anchor: 'middle', fill: C.olive });
  s += T(667, y0 + 60, '“What is it like?”', { size: 17, anchor: 'middle', italic: true });
  const senses = [['sight', 560, 110], ['sound', 775, 110], ['smell', 540, 205], ['touch', 795, 205], ['taste', 667, 250]];
  senses.forEach(([l, x, y]) => { s += line(667, y0 + 165, x, y0 + y, C.olive, 2) + rect(x - 40, y0 + y - 15, 80, 30, C.cream, C.olive, 15, 2) + T(x, y0 + y + 6, l, { size: 15, anchor: 'middle' }); });
  s += circ(667, y0 + 165, 44, C.cream, C.ink, 3) + T(667, y0 + 171, 'the thing', { size: 15, anchor: 'middle', weight: 700 });
  s += box(30, y0 + 320, 840, { body: 'Both relate characteristics, features or sensory details, often with **examples or illustrations**, so the reader can trace the reasoning.', size: 16, align: 'middle', fill: C.panel, edge: C.ink }).s;
  return { s, h: 376 };
}, 'Two panels. Definition answers “What is it, exactly?” with a dashed boundary separating what counts from what does not. Description answers “What is it like?” with sight, sound, smell, touch and taste radiating from the thing described.',
'Definition draws boundaries; description makes features vivid.', '## Two methods that make an idea visible');

// 02 Formal definition anatomy + extended tools
fig('02-formal-and-extended-definition', 'Formal and extended definitions', '', (y0) => {
  let s = '';
  s += T(30, y0 + 12, 'Formal: term + class + what distinguishes it', { size: 18, weight: 700 });
  const c = chunks(30, y0 + 30, 840, [
    { text: 'drought', label: 'term', fill: C.cream },
    { text: 'a period of weather', label: 'class', fill: C.tealLight },
    { text: 'in which rainfall is so far below normal that water supplies fall short of need', label: 'what distinguishes it', fill: C.teal },
  ], { size: 17, gap: 8, rowGap: 16 });
  s += c.s;
  let y = y0 + 30 + c.h + 34;
  s += T(30, y, 'Extended: a paragraph or more, using...', { size: 18, weight: 700 });
  y += 18;
  const tools = [
    ['Examples', '“Generosity is giving what you could keep: the neighbour who mows a lawn without being asked.”'],
    ['Negation', '“Courage is not the absence of fear...”'],
    ['Comparison', '“Patience is to waiting what a pilot is to a storm.”'],
    ['Features and requirements', '“A fair test changes one variable at a time, uses the same conditions and can be repeated.”'],
    ['Origin of the word', 'when it illuminates the idea'],
  ];
  tools.forEach(([h, b]) => {
    const bx = box(250, y, 620, { body: b, size: 16, pad: 12 });
    s += rect(30, y, 200, bx.h, C.tealLight, C.tealDark, 10, 2.5) + P(130, y + bx.h / 2 + 6, `**${h}**`, { size: 16, anchor: 'middle', w: 190 }).s;
    s += bx.s; y += bx.h + 8;
  });
  return { s, h: y - 8 - y0 };
}, 'A formal definition of drought split into term, class (a period of weather) and what distinguishes it (rainfall so far below normal that supplies fall short). Below, five tools for extended definitions with the lesson’s examples: examples, negation, comparison, features and requirements, and the origin of the word.',
'Formal definitions are compact; extended ones add examples, negation and comparison.', '## Definition');

// 03 Definition decides the argument
fig('03-definition-as-strategy', 'A definition can decide the argument', 'Read definitions critically; write ones you can defend', (y0) => {
  let s = '';
  s += box(30, y0, 400, { head: 'Definition', body: '“Success means a high salary.”', size: 18, align: 'middle', fill: C.cream, edge: C.olive, h: 110, vc: true }).s;
  s += arrow(436, y0 + 55, 464, y0 + 55, { w: 4, color: C.rust, marker: 'ahR' });
  s += box(470, y0, 400, { head: 'Argument already decided', body: 'whether college is worthwhile, before it starts', size: 17, align: 'middle', edge: C.rust, headColor: C.rust, dash: '7 5', h: 110, vc: true }).s;
  const y = y0 + 140;
  const sat = box(30, y, 840, { head: 'A satirical definition carries a claim', body: '“**Positive**, adj. Mistaken at the top of one’s voice.”\n__Ambrose Bierce, The Devil’s Dictionary (first published as The Cynic’s Word Book, 1906)__\n\n{{The claim inside the joke:}} loudness is not knowledge.', size: 17, fill: C.panel, edge: C.ink });
  s += sat.s;
  const r = row(30, y + sat.h + 20, 840, 24, [
    { head: 'As a writer', body: 'state a definition you can defend', size: 16, fill: C.tealLight, edge: C.tealDark },
    { head: 'As a reader', body: 'is it fair, and is the writer relying on it to carry the claim?', size: 16 },
  ]);
  s += r.s;
  return { s, h: y + sat.h + 20 + r.h - y0 };
}, 'Defining success as a high salary decides the argument about whether college is worthwhile before it starts. Ambrose Bierce’s satirical definition, “Positive, adj. Mistaken at the top of one’s voice”, carries a claim that loudness is not knowledge. Writers should state defensible definitions; readers should test them.',
'Ask whether a definition is fair, or whether it carries the claim by itself.', '## Definition');

// 04 Dickens fog annotated
fig('04-dickens-fog', 'Description with a purpose', 'Dickens, Bleak House, 1853', (y0) => {
  let s = '';
  const c = chunks(30, y0 + 6, 840, [
    { text: 'Fog everywhere.', label: 'one stark word', fill: C.cream },
    { text: 'Fog up the river,', label: 'parallel structure', fill: C.tealLight },
    { text: 'where it flows among green aits and meadows;', label: 'a clean setting', fill: C.panel },
    { text: 'fog down the river,', label: 'parallel structure', fill: C.tealLight },
    { text: 'where it rolls defiled', label: 'the verb changes', fill: C.teal },
    { text: 'among the tiers of shipping and the waterside pollutions', label: 'a polluted setting', fill: C.panel },
    { text: 'of a great (and dirty) city.', label: 'the narrator’s judgement in a whisper', fill: C.cream },
  ], { size: 17, gap: 8, rowGap: 22, minLabelW: 140 });
  s += c.s;
  let y = y0 + 6 + c.h + 28;
  // river schematic
  s += `<rect x="30" y="${y}" width="840" height="90" rx="12" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2"/>`;
  s += `<path d="M40,${y + 60} C200,${y + 40} 300,${y + 75} 450,${y + 55} C600,${y + 38} 700,${y + 72} 860,${y + 55}" fill="none" stroke="${C.blue}" stroke-width="8" stroke-linecap="round"/>`;
  s += `<rect x="40" y="${y + 10}" width="380" height="30" rx="15" fill="${C.tealLight}"/>` + T(230, y + 31, 'up the river: flows, green meadows', { size: 15, anchor: 'middle', weight: 700, fill: C.tealDark });
  s += `<rect x="480" y="${y + 10}" width="380" height="30" rx="15" fill="${C.rock}"/>` + T(670, y + 31, 'down the river: rolls defiled, pollution', { size: 15, anchor: 'middle', weight: 700 });
  y += 110;
  s += box(30, y, 840, { body: '**Purpose:** fog that nothing escapes sets the atmosphere for a slow court case, and becomes a figure for confusion and corruption.', size: 16, align: 'middle', fill: C.cream, edge: C.olive }).s;
  return { s, h: y + 56 - y0 };
}, 'Dickens’s fog passage split into labelled parts: the stark opening “Fog everywhere”, the parallel “Fog up the river... fog down the river”, the shift from “flows” among green meadows to “rolls defiled” among pollution, and the whispered judgement “(and dirty)”. A river schematic shows the clean upstream and polluted downstream.',
'Parallel clauses and a changing verb make the fog inescapable and dirty.', '## Description');

// 05 Weak vs strong examples
fig('05-show-an-instance', 'Let the reader see an instance', '', (y0) => {
  let s = '';
  const P2 = [
    ['“Loyalty means being faithful.”', '“Loyalty is sitting through a friend’s third retelling of a story and laughing where you laughed the first time.”', 'Definition'],
    ['“The market was busy.”', '“Crates scraped on stone, a vendor shouted the price of figs, and the air smelled of fish and wet cardboard.”', 'Description'],
  ];
  let y = y0;
  P2.forEach(([w, st, k]) => {
    s += T(30, y + 14, k, { size: 18, weight: 700, fill: C.muted });
    const a = box(30, y + 28, 300, { body: w, size: 17, pad: 16, edge: C.rust, dash: '7 5' });
    const b = box(400, y + 28, 470, { body: st, size: 17, pad: 16, fill: C.tealLight, edge: C.tealDark });
    const h = Math.max(a.h, b.h);
    s += box(30, y + 28, 300, { body: w, size: 17, pad: 16, edge: C.rust, dash: '7 5', h, vc: true }).s;
    s += box(400, y + 28, 470, { body: st, size: 17, pad: 16, fill: C.tealLight, edge: C.tealDark, h, vc: true }).s;
    s += arrow(336, y + 28 + h / 2, 394, y + 28 + h / 2, { w: 4 });
    y += 28 + h + 26;
  });
  s += T(180, y + 4, 'asserts', { size: 16, weight: 700, anchor: 'middle', fill: C.rust }) + T(635, y + 4, 'shows: specific nouns, verbs, senses', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  return { s, h: y + 14 - y0 };
}, 'Two weak-to-strong pairs. “Loyalty means being faithful” becomes laughing through a friend’s third retelling of a story. “The market was busy” becomes crates scraping on stone, a vendor shouting the price of figs, and the smell of fish and wet cardboard.',
'The strong versions do not just assert; they let the reader see an instance.', '## Using examples and illustrations');

// 06 Cheating definition built step by step
fig('06-defining-cheating', 'Building a fair definition', 'Worked example 1: open-book tests', (y0) => {
  let s = '';
  const st = [
    ['1  Formal definition', '“Cheating is gaining an advantage on an assessment by methods the rules forbid.”', C.panel, C.ink],
    ['2  Notice the hidden problem', 'It depends on the rules: if the rules allow notes, the same act is not cheating.', C.cream, C.olive],
    ['3  Extend with example and contrast', 'Copying a neighbour’s answer: cheating under any rules. An allowed formula sheet: not cheating.', C.panel, C.ink],
    ['4  Link to the claim', '“...the cure for cheating is a better question, not a locked drawer.”', C.tealLight, C.tealDark],
    ['5  Check it is fair', 'It sets terms on which a reader who disagrees can still engage.', C.panel, C.tealDark],
  ];
  let y = y0;
  st.forEach(([h, b, f, e], i) => {
    const bx = box(30 + (i % 2) * 40, y, 800, { head: h, body: b, size: 16, headSize: 18, pad: 14, fill: f, edge: e, headColor: e === C.ink ? C.ink : e });
    s += bx.s;
    y += bx.h + 12;
  });
  return { s, h: y - 12 - y0 };
}, 'Five steps to a fair definition of cheating: a formal definition (gaining an advantage by methods the rules forbid), noticing that it depends on the rules, extending it with the contrast between copying and an allowed formula sheet, linking it to the claim that the cure is a better question, and checking that it is fair.',
'A good definition sets fair terms for the argument rather than winning it in advance.', '## Worked example 1: writing an extended definition for an argument');
