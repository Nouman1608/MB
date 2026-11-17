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

export const slug = 'ap-english-language-and-composition-4-4-comparison-contrast-study-guide';
const LESSON = 'src/content/ap-resources/english-language-and-composition/4-4-comparison-contrast-study-guide.md';

// 01 Like categories (balance)
fig('01-like-categories', 'Compare like with like', 'Bus or bicycle: each object measured on the same category', (y0) => {
  let s = '';
  const R = [
    ['Cost per journey', '£1.80', '£0.10 for repairs and lights', true],
    ['Time for a 5 km journey', '25 minutes including waiting', '20 minutes', true],
    ['Reliability', 'Bus can be late', '“Fun”', false],
  ];
  s += T(150, y0 + 10, 'CATEGORY', { size: 15, weight: 700, anchor: 'middle', fill: C.muted });
  s += T(420, y0 + 10, 'BUS', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += T(680, y0 + 10, 'BICYCLE', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  let y = y0 + 26;
  R.forEach(([c, a, b, ok]) => {
    const h = 66;
    s += box(30, y, 240, { body: `**${c}**`, size: 16, h, vc: true, pad: 14, fill: C.panel }).s;
    s += box(300, y, 240, { body: a, size: 16, h, vc: true, pad: 14, align: 'middle', fill: C.tealLight, edge: C.tealDark }).s;
    s += box(560, y, 240, { body: b, size: 16, h, vc: true, pad: 14, align: 'middle', fill: ok ? C.cream : '#f6e3d8', edge: ok ? C.olive : C.rust, dash: ok ? '' : '6 5' }).s;
    s += circ(840, y + h / 2, 20, ok ? C.tealLight : C.panel, ok ? C.tealDark : C.rust, 2.5) + T(840, y + h / 2 + 7, ok ? '✓' : '✗', { size: 20, weight: 700, anchor: 'middle', fill: ok ? C.tealDark : C.rust });
    y += h + 12;
  });
  s += box(30, y + 6, 840, { body: '[[Last row fails:]] reliability is set against enjoyment. Compare both on reliability, or both on enjoyment. Categories must also be **relevant to the claim**.', size: 16, align: 'middle', fill: C.panel, edge: C.rust }).s;
  return { s, h: y + 70 - y0 };
}, 'A table comparing a bus and a bicycle. Cost per journey and time for a 5 km journey use like categories and are ticked. The reliability row is crossed because the bus is measured on reliability and the bicycle on fun.',
'Every object must be measured on the same, relevant category.', '## Categories and like categories');

// 02 Point-by-point vs block
fig('02-point-by-point-vs-block', 'Two ways to organise', '', (y0) => {
  let s = '';
  const seg = (x, y, w, lab, obj) => rect(x, y, w, 40, obj === 'A' ? C.tealLight : C.cream, obj === 'A' ? C.tealDark : C.olive, 8, 2) + T(x + w / 2, y + 26, lab, { size: 15, anchor: 'middle', weight: 700 });
  s += T(215, y0 + 12, 'Point-by-point', { size: 20, weight: 700, anchor: 'middle' });
  s += T(685, y0 + 12, 'Block', { size: 20, weight: 700, anchor: 'middle' });
  const cats = ['cost', 'time', 'safety'];
  let y = y0 + 34;
  cats.forEach((c) => {
    s += T(40, y + 26, c, { size: 15, fill: C.muted, weight: 700 });
    s += seg(110, y, 140, `A: ${c}`, 'A') + seg(260, y, 140, `B: ${c}`, 'B');
    y += 52;
  });
  let y2 = y0 + 34;
  ['A', 'B'].forEach((o) => {
    s += T(510, y2 + 50, o === 'A' ? 'all of A' : 'all of B', { size: 15, fill: C.muted, weight: 700 });
    s += rect(590, y2, 260, 70, o === 'A' ? C.tealLight : C.cream, o === 'A' ? C.tealDark : C.olive, 8, 2);
    s += T(720, y2 + 26, `${o}: cost · time · safety`, { size: 15, weight: 700, anchor: 'middle' });
    s += T(720, y2 + 52, 'same categories, same order', { size: 15, anchor: 'middle', fill: C.muted });
    y2 += 82;
  });
  const top = y0 + 34 + 3 * 52 + 20;
  const r = row(30, top, 840, 30, [
    { head: 'Best for', body: 'close comparison on a few categories\n[[Risk:]] choppy with many categories\n{{Tip:}} transitions that name the category', size: 15 },
    { head: 'Best for', body: 'complex objects needing description first\n[[Risk:]] reader forgets the first block; categories drift\n{{Tip:}} repeat the categories in the same order', size: 15 },
  ]);
  s += r.s;
  return { s, h: top + r.h - y0 };
}, 'Two layouts. Point-by-point alternates A and B within each category (cost, time, safety). Block covers all of A, then all of B, in the same categories and order. Below, what each suits, its risk and a tip.',
'Alternate for close comparison; use blocks for complex objects, keeping the categories in the same order.', '## Two ways to organise');

// 03 Douglass contrast
fig('03-douglass-contrast', 'One category, two sides', 'Douglass, Rochester, 5 July 1852', (y0) => {
  let s = '';
  s += box(30, y0, 840, { body: '“The sunlight that brought life and healing to you, has brought stripes and death to me.”', size: 20, align: 'middle', fill: C.panel, pad: 20 }).s;
  const y = y0 + 110;
  s += box(300, y, 300, { head: 'Category', body: 'the effect of the nation’s freedom on each', size: 16, align: 'middle', fill: C.panel, edge: C.ink, sw: 3, h: 96, vc: true }).s;
  s += box(30, y + 140, 380, { head: '“you” (his white audience)', body: '**life and healing**', size: 18, align: 'middle', fill: C.tealLight, edge: C.tealDark, h: 100, vc: true }).s;
  s += box(490, y + 140, 380, { head: '“me” (the enslaved)', body: '**stripes and death**', size: 18, align: 'middle', fill: '#f6e3d8', edge: C.rust, h: 100, vc: true }).s;
  s += arrow(400, y + 98, 260, y + 134, { w: 3 }) + arrow(500, y + 98, 640, y + 134, { w: 3 });
  s += T(450, y + 196, '⟷', { size: 26, weight: 700, anchor: 'middle' });
  s += P(450, y + 280, 'Parallel structure: each side matches in grammar and in the kind of thing compared (effects on bodies).', { size: 16, anchor: 'middle', w: 820, fill: C.muted }).s;
  return { s, h: 110 + 300 };
}, 'Douglass’s sentence sets one category, the effect of the nation’s freedom, against two objects: for “you”, his white audience, life and healing; for “me”, the enslaved, stripes and death. Parallel structure makes the two sides match.',
'A single like category, in parallel grammar, makes the contrast sharp.', '## Comparison in a published text');

// 04 Bus lane vs cycle track bars
fig('04-bus-lane-vs-cycle-track', 'From comparison to claim', 'Worked example 1: bus lane or cycle track (invented figures)', (y0) => {
  let s = '';
  const cats = [
    ['Cost to build, per km', 2.0, 0.6, '£2.0m', '£0.6m', 2.2],
    ['Peak capacity, people per hour', 4000, 5000, '4,000', '5,000', 5500],
    ['Injuries per year after opening', 6, 2, '6', '2', 7],
  ];
  let y = y0;
  cats.forEach(([c, a, b, la, lb, max]) => {
    s += T(30, y + 18, c, { size: 17, weight: 700 });
    const W = 560;
    s += T(30, y + 52, 'Bus lane', { size: 15, fill: C.muted }) + rect(160, y + 34, (a / max) * W, 26, C.tealLight, C.tealDark, 4, 2) + T(170 + (a / max) * W, y + 53, la, { size: 16, weight: 700 });
    s += T(30, y + 86, 'Cycle track', { size: 15, fill: C.muted }) + rect(160, y + 68, (b / max) * W, 26, C.cream, C.olive, 4, 2) + T(170 + (b / max) * W, y + 87, lb, { size: 16, weight: 700 });
    y += 118;
  });
  s += box(30, y, 840, { head: 'Commentary turns the rows into a claim', body: '“A town that can move more people for less money has a straightforward case; the injury figures, 2 a year against 6, only strengthen it.”', size: 16, fill: C.panel, edge: C.ink, sw: 3 }).s;
  return { s, h: y + 110 - y0 };
}, 'Paired bars compare a bus lane and a cycle track on three like categories using the lesson’s invented figures: cost per km (£2.0 million against £0.6 million), peak capacity (4,000 against 5,000 people an hour) and injuries a year (6 against 2). A commentary sentence turns the comparison into a claim.',
'A comparison is evidence; commentary still has to say what it proves.', '## Worked example 1: building a comparison with like categories');

// 05 Letter vs text message: shape of the comparison
fig('05-letter-vs-text', 'What a comparison does', 'Worked example 2: a letter and a text message', (y0) => {
  let s = '';
  const st = [
    ['Shared feature', '“A letter and a text message both carry news.”', C.panel, C.ink],
    ['Difference on one category: timing of revision', '', C.panel, C.ink],
    ['Conclusion about style', 'letters read like speeches; texts read like conversations', C.tealLight, C.tealDark],
  ];
  s += box(200, y0, 500, { head: st[0][0], body: st[0][1], size: 16, align: 'middle', h: 84, vc: true }).s;
  s += arrow(450, y0 + 86, 450, y0 + 108, { w: 3 });
  const y = y0 + 132;
  s += T(450, y + 4, st[1][0], { size: 17, weight: 700, anchor: 'middle' });
  s += box(30, y + 18, 400, { head: 'Letter', body: 'takes days, cannot be unsent → **edits in advance**', size: 16, align: 'middle', fill: C.tealLight, edge: C.tealDark, h: 96, vc: true }).s;
  s += box(470, y + 18, 400, { head: 'Text message', body: 'a correction can follow in seconds → **edits afterwards**', size: 16, align: 'middle', fill: C.cream, edge: C.olive, h: 96, vc: true }).s;
  s += arrow(450, y + 120, 450, y + 150, { w: 3 });
  s += box(200, y + 156, 500, { head: st[2][0], body: st[2][2] === C.tealLight ? 'letters read like speeches; texts read like conversations' : '', size: 16, align: 'middle', fill: C.panel, edge: C.ink, sw: 3, h: 84, vc: true }).s;
  s += P(450, y + 276, 'The writer never slips from timing to length or formality, which would blur the point.', { size: 16, anchor: 'middle', w: 820, fill: C.muted }).s;
  return { s, h: y + 288 - y0 };
}, 'A flow: a letter and a text message share a feature (both carry news), differ on one category (the letter is edited in advance, the text afterwards), and the difference explains a conclusion about style: letters read like speeches, texts like conversations.',
'Shared feature, one difference, one conclusion: the comparison explains style.', '## Worked example 2: describing what a comparison does in a text');

// 06 Self-assessment bands
fig('06-comparison-rubric', 'Rate your own comparison', '', (y0) => {
  const t1 = table(30, y0, [150, 230, 230, 230], [
    ['Criterion', 'Not yet', 'Getting there', 'Secure'],
    ['Category', 'No clear category; features chosen at random', 'Present but not named', 'Named and relevant to the claim'],
    ['Like categories', 'Objects measured on different features', 'Mostly the same feature, with a slip', 'Same feature throughout'],
    ['Organisation', 'Mixed order; the reader hunts for pairs', 'Mostly point-by-point or block, with drift', 'Consistent pattern; transitions name the category'],
    ['Claim', 'Ends as a list', 'A claim not tied to the evidence', 'States what the comparison proves'],
  ], { size: 15, boldFirst: true, cellFill: (r, c) => (r && c === 1 ? '#fbf3ee' : r && c === 2 ? '#fbf7e6' : r && c === 3 ? C.tealLight : null) });
  return { s: t1.s, h: t1.h };
}, 'A self-assessment grid with four criteria, category, like categories, organisation and claim, each described at three levels: not yet, getting there and secure.',
'Secure comparisons name a relevant category, keep it like for like, and end on a claim.', '## Self-assessment: rate your own comparison');
