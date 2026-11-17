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

export const slug = 'ap-english-language-and-composition-4-3-thesis-previewing-reasoning-study-guide';
const LESSON = 'src/content/ap-resources/english-language-and-composition/4-3-thesis-previewing-reasoning-study-guide.md';

// 01 Three levels of detail
fig('01-three-levels-of-thesis', 'Three levels of thesis', 'Free public transport: each level adds to the reader’s map', (y0) => {
  let s = '';
  const L = [
    ['Claim only', 'states a position', [['Cities should make public transport free.', C.cream]]],
    ['Claim + governing reason', 'the idea that holds the argument together', [['Cities should make public transport free', C.cream], ['because fares work against the purpose of the service.', C.tealLight]]],
    ['Claim + preview', 'signals the reasons or shape', [['Cities should make public transport free,', C.cream], ['because fares exclude the riders who need the service most,', C.tealLight], ['consume much of what they raise,', C.tealLight], ['and keep drivers in their cars.', C.tealLight]]],
  ];
  let y = y0;
  L.forEach(([h, d, parts], i) => {
    s += num(52, y + 22, i + 1, i === 2 ? C.mustard : C.cream, 18);
    s += T(84, y + 22, h, { size: 19, weight: 700 }) + T(84 + tw(h, 19, true) + 12, y + 22, `· ${d}`, { size: 16, fill: C.muted });
    const c = chunks(84, y + 40, 786, parts.map(([t2, f]) => ({ text: t2, fill: f })), { size: 17, gap: 6, rowGap: 8 });
    s += c.s;
    y += 40 + c.h + 30;
  });
  s += box(30, y - 6, 840, { body: 'All three are acceptable. A short essay may need only a governing reason; a long argument with several moves benefits from a preview.', size: 16, align: 'middle', fill: C.panel, edge: C.olive }).s;
  return { s, h: y + 50 - y0 };
}, 'Three versions of a thesis on free public transport, each longer than the last: a claim only; a claim with a governing reason (fares work against the purpose of the service); and a claim with a preview of three reasons (fares exclude riders, consume what they raise, keep drivers in cars).',
'A preview is an indication of structure, not a table of contents.', '## What a thesis already tells the reader');

// 02 Announcement, list, preview
fig('02-announcement-list-preview', 'Announcement, list or preview?', '', (y0) => {
  let s = '';
  const V = [
    ['Announcement', '“This essay will look at fares, collection costs and cars.”', [false, false, false], 'describes a task; takes no position'],
    ['Bare list', '“Fares, collection and congestion are all relevant to free transport.”', [false, false, false], 'no claim, no relation between the parts'],
    ['Preview', '“Free transport would repair three failures: fares shut out riders who need the service, collecting them eats revenue, and the price of a ticket sends drivers back to their cars.”', [true, true, true], 'a claim with reasons the reader can test'],
  ];
  const cols = ['Takes a position', 'Says what the effect is', 'Can be argued with'];
  cols.forEach((c, i) => { s += P(600 + i * 95, y0 + 14, c, { size: 15, weight: 700, anchor: 'middle', w: 90 }).s; });
  let y = y0 + 64;
  V.forEach(([h, q, ticks, verdict]) => {
    const b = box(30, y, 520, { head: h, body: `${q}\n__${verdict}__`, size: 15, headSize: 18, pad: 14, fill: ticks[0] ? C.tealLight : C.panel, edge: ticks[0] ? C.tealDark : C.rust, dash: ticks[0] ? '' : '6 5', headColor: ticks[0] ? C.tealDark : C.rust });
    s += b.s;
    ticks.forEach((tk, i) => {
      const cx = 600 + i * 95, cy = y + b.h / 2;
      s += circ(cx, cy, 20, tk ? C.tealLight : C.panel, tk ? C.tealDark : C.rust, 2.5) + T(cx, cy + 7, tk ? '✓' : '✗', { size: 20, weight: 700, anchor: 'middle', fill: tk ? C.tealDark : C.rust });
    });
    y += b.h + 14;
  });
  return { s, h: y - 14 - y0 };
}, 'Three thesis versions checked against three tests. The announcement (“This essay will look at fares...”) and the bare list fail to take a position, say what the effect is, or offer something to argue with. The preview (“Free transport would repair three failures...”) passes all three.',
'A preview makes a claim and signals reasons; an announcement and a list do neither.', '## Preview, announcement and list');

// 03 Four signal shapes
fig('03-preview-signal-shapes', 'How a preview signals structure', '', (y0) => {
  let s = '';
  const W = 412, H = 200, g = 16;
  const cards = [
    ['Parallel reasons', '“because A, B and C”', (x, y) => rect(x + 20, y + 30, 80, 44, C.cream, C.ink, 8, 2) + T(x + 60, y + 58, 'claim', { size: 15, anchor: 'middle', weight: 700 }) + ['A', 'B', 'C'].map((l, i) => arrow(x + 104, y + 52, x + 180, y + 14 + i * 38, { w: 2.5 }) + rect(x + 186, y + i * 38, 44, 30, C.tealLight, C.ink, 6, 2) + T(x + 208, y + 21 + i * 38, l, { size: 16, weight: 700, anchor: 'middle' })).join('')],
    ['A progression', '“moves from... to...”', (x, y) => [0, 1, 2].map((i) => rect(x + 20 + i * 70, y + 70 - i * 28, 64, 26 + i * 28, i === 2 ? C.teal : C.tealLight, C.ink, 4, 2)).join('') + arrow(x + 20, y + 106, x + 240, y + 20, { w: 2.5, dash: '6 5' })],
    ['Contrast or concession', '“although X, Y”', (x, y) => rect(x + 20, y + 30, 80, 44, C.panel, C.ink, 8, 2, 'stroke-dasharray="5 4"') + T(x + 60, y + 58, 'X', { size: 18, weight: 700, anchor: 'middle' }) + curve(`M${x + 104},${y + 52} C${x + 140},${y + 10} ${x + 160},${y + 10} ${x + 180},${y + 40}`, C.ink, 2.5) + rect(x + 184, y + 30, 80, 44, C.cream, C.ink, 8, 2.5) + T(x + 224, y + 58, 'Y', { size: 18, weight: 700, anchor: 'middle' })],
    ['A sequence of effects', '“first... and finally...” (analysis)', (x, y) => line(x + 20, y + 52, x + 260, y + 52, C.ink, 3) + ['first', 'then', 'finally'].map((l, i) => circ(x + 40 + i * 100, y + 52, 10, i === 2 ? C.mustard : C.cream, C.ink, 2) + T(x + 40 + i * 100, y + 88, l, { size: 15, anchor: 'middle' })).join('')],
  ];
  cards.forEach(([h, sig, art], i) => {
    const x = 30 + (i % 2) * (W + g), y = y0 + Math.floor(i / 2) * (H + g);
    s += rect(x, y, W, H, C.panel, C.panelEdge, 14);
    s += T(x + 18, y + 32, h, { size: 19, weight: 700 }) + T(x + 18, y + 56, sig, { size: 16, fill: C.tealDark, italic: true });
    s += art(x + 100, y + 70);
  });
  const y = y0 + 2 * H + g + 20;
  s += box(30, y, 840, { head: 'For rhetorical analysis', body: '“By beginning with a shared memory and then moving to a statistic, the speaker first earns the audience’s trust and then makes the demand for change difficult to refuse.”', size: 16, fill: C.cream, edge: C.olive }).s;
  return { s, h: y + 110 - y0 };
}, 'Four small diagrams of how a thesis signals structure: parallel reasons (a claim branching to A, B and C), a progression (rising steps), a contrast or concession (X acknowledged, then Y), and a sequence of effects (first, then, finally). Below, an analysis thesis that previews two stages of a speech.',
'Reasons, progression, concession or sequence: the thesis tells the reader what shape to expect.', '## How a preview signals structure');

// 04 Thesis as promise kept by the body
fig('04-preview-matches-body', 'A promise the body keeps', 'Worked example 2: annuals and native perennials', (y0) => {
  let s = '';
  s += box(30, y0, 840, { head: 'Thesis', body: '“The switch is worth making because perennials {{cost less over five years}}, ((support local insects that annuals ignore)), and [[ask the town for less water]] once they are established.”', size: 17, fill: C.panel, edge: C.ink, sw: 3 }).s;
  const P2 = [
    ['¶2', '“The first argument is financial: an annual is bought again every year...”', C.tealLight, C.tealDark],
    ['¶3', '“Perennials also feed and shelter insects that the town’s annual beds cannot.”', C.cream, C.olive],
    ['¶4', '“Finally, a perennial that is established needs less watering...”', '#f6e3d8', C.rust],
  ];
  const ty = y0 + 130;
  const xs = [90, 450, 790];
  P2.forEach(([n, t2, f, e], i) => {
    const x = 30 + i * 285;
    s += arrow(xs[i] * 0.4 + (x + 135) * 0.6, y0 + 104, x + 135, ty + 46, { w: 3, color: e, marker: e === C.tealDark ? 'ahT' : e === C.olive ? 'ahO' : 'ahR' });
    s += box(x, ty + 50, 270, { head: n, body: t2, size: 15, headSize: 18, fill: f, edge: e, headColor: e, h: 140, vc: true }).s;
  });
  const y = ty + 210;
  s += box(30, y, 840, { body: 'Three reasons in a fixed order; topic sentences follow the order, marked by “first” and “finally”. The preview does **not** list evidence: no cost figures, no insect names.', size: 16, align: 'middle', fill: C.panel, edge: C.olive }).s;
  return { s, h: y + 60 - y0 };
}, 'The perennials thesis names three reasons, cost, insects and water, each colour-coded and linked by an arrow to the body paragraph that develops it, in the same order, with “first” and “finally” marking the sequence.',
'Measure each paragraph against the promise the thesis makes.', '## Worked example 2: reading a thesis for its signals');

// 05 Weak, better, strong analysis thesis
fig('05-analysis-thesis-ladder', 'Weak, better, strong', 'Analysing a captain’s speech to a rowing team before a race', (y0) => {
  let s = '';
  const L = [
    ['Weak', '“The captain uses ethos, pathos and logos.”', 'a list of labels; no claim about effect or purpose', C.panel, C.rust],
    ['Better', '“The captain motivates the team by appealing to their emotions.”', 'a claim, but not how or why', C.cream, C.olive],
    ['Strong', '“By starting from what the team has already endured and then turning to what is still to be earned, the captain converts weariness into pride and makes the final push feel like a debt to themselves.”', 'a claim with a preview of the speech’s movement and its effect', C.tealLight, C.tealDark],
  ];
  let y = y0;
  const baseY = [];
  L.forEach(([h, q, c, f, e], i) => {
    const x = 30 + (2 - i) * 0, w = 600 + i * 0;
    const b = box(170, y, 700, { body: `${q}\n__${c}__`, size: 16, pad: 14, fill: f, edge: e, dash: i === 0 ? '6 5' : '' });
    s += rect(30, y, 120, b.h, f, e, 12, 2.5) + T(90, y + b.h / 2 + 7, h, { size: 19, weight: 700, anchor: 'middle', fill: e });
    s += b.s;
    y += b.h + 14;
  });
  s += arrow(14, y0 + 4, 14, y - 14, { w: 3 });
  return { s, h: y - 14 - y0 };
}, 'Three thesis versions for analysing a captain’s speech to a rowing team: weak (“uses ethos, pathos and logos”), better (“motivates the team by appealing to their emotions”) and strong (moves from what the team has endured to what is still to be earned, converting weariness into pride).',
'A strong analysis thesis previews the speech’s movement and its effect.', '## Weak, better and strong theses for an analysis');
