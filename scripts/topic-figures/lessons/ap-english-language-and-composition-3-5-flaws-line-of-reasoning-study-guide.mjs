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

export const slug = 'ap-english-language-and-composition-3-5-flaws-line-of-reasoning-study-guide';
const LESSON = 'src/content/ap-resources/english-language-and-composition/3-5-flaws-line-of-reasoning-study-guide.md';

// 01 Mini-diagrams of key flaws
fig('01-flaw-shapes', 'What goes wrong: the shape of each flaw', 'Explain the flaw; the name is only shorthand', (y0) => {
  let s = '';
  const W = 270, H = 250, gx = 15, gy = 16;
  const cards = [
    ['Hasty generalisation', '“My two cousins hate maths, so school ruins maths for everyone.”', (x, y) => {
      let r = circ(x + 50, y + 50, 12, C.rust, C.ink, 2) + circ(x + 80, y + 50, 12, C.rust, C.ink, 2);
      r += arrow(x + 100, y + 50, x + 150, y + 50, { w: 3 });
      for (let i = 0; i < 12; i++) r += circ(x + 170 + (i % 4) * 22, y + 28 + Math.floor(i / 4) * 22, 8, C.panel, C.rust, 2);
      return r;
    }],
    ['False cause', '“Since the new principal arrived, test scores have fallen. She must be responsible.”', (x, y) => {
      let r = rect(x + 30, y + 30, 60, 40, C.cream, C.ink, 8, 2) + T(x + 60, y + 57, 'A', { size: 18, weight: 700, anchor: 'middle' });
      r += rect(x + 180, y + 30, 60, 40, C.cream, C.ink, 8, 2) + T(x + 210, y + 57, 'B', { size: 18, weight: 700, anchor: 'middle' });
      r += T(x + 135, y + 30, 'then', { size: 15, anchor: 'middle', fill: C.muted }) + line(x + 95, y + 50, x + 175, y + 50, C.muted, 2, '5 4');
      r += T(x + 135, y + 92, 'sequence ≠ cause', { size: 15, anchor: 'middle', fill: C.rust, weight: 700 });
      return r;
    }],
    ['False dilemma', '“Either we ban all cars or we accept filthy air for ever.”', (x, y) => {
      let r = '';
      [0, 1].forEach((i) => { r += rect(x + 30 + i * 56, y + 20, 44, 70, C.cream, C.ink, 6, 2.5); });
      [2, 3].forEach((i) => { r += rect(x + 30 + i * 56, y + 20, 44, 70, 'none', C.rust, 6, 2, 'stroke-dasharray="5 4"'); });
      r += T(x + 30 + 2 * 56 + 22, y + 62, '?', { size: 22, weight: 700, anchor: 'middle', fill: C.rust });
      return r;
    }],
    ['Slippery slope', '“If pupils may use phones at break, soon they will use them in exams.”', (x, y) => {
      let r = '';
      for (let i = 0; i < 4; i++) { r += rect(x + 20 + i * 60, y + 6 + i * 16, 40, 28, i === 3 ? '#f6e3d8' : C.panel, C.ink, 6, 2); if (i < 3) r += arrow(x + 62 + i * 60, y + 22 + i * 16, x + 78 + i * 60, y + 34 + i * 16, { w: 2.5, dash: '4 4' }); }
      r += T(x + 135, y + 112, 'steps asserted, not shown', { size: 15, anchor: 'middle', fill: C.rust, weight: 700 });
      return r;
    }],
    ['Straw man', '“...want pupils to wear whatever they like and for rules to vanish.”', (x, y) => {
      let r = box(x + 15, y + 22, 105, { body: 'actual view', size: 15, align: 'middle', h: 56, vc: true, pad: 6 }).s;
      r += box(x + 150, y + 22, 105, { body: 'distorted view', size: 15, align: 'middle', h: 56, vc: true, pad: 6, edge: C.rust, dash: '5 4' }).s;
      r += arrow(x + 122, y + 50, x + 146, y + 50, { w: 2.5 }) + T(x + 202, y + 104, '← attacked', { size: 15, anchor: 'middle', fill: C.rust, weight: 700 });
      return r;
    }],
    ['Ad hominem', '“She does not even own a bike, so ignore her cycle-lane plan.”', (x, y) => {
      let r = circ(x + 70, y + 40, 18, C.cream, C.ink, 2.5) + path(`M${x + 45},${y + 95} Q${x + 70},${y + 55} ${x + 95},${y + 95}`, { fill: C.cream, w: 2.5 });
      r += box(x + 150, y + 30, 100, { body: 'the plan', size: 15, align: 'middle', h: 50, vc: true, pad: 6 }).s;
      r += arrow(x + 140, y + 100, x + 100, y + 70, { w: 3, color: C.rust, marker: 'ahR' });
      return r;
    }],
    ['Circular reasoning', '“Uniforms are necessary because pupils need to wear them.”', (x, y) => {
      let r = `<ellipse cx="${x + 135}" cy="${y + 58}" rx="90" ry="38" fill="none" stroke="${C.rust}" stroke-width="3"/>`;
      r += arrow(x + 210, y + 40, x + 222, y + 58, { w: 3, color: C.rust, marker: 'ahR' });
      r += T(x + 135, y + 64, 'claim = support', { size: 16, anchor: 'middle', weight: 700 });
      return r;
    }],
    ['Faulty analogy', '“Running a school is like running a business, so teachers should be paid by results.”', (x, y) => {
      let r = rect(x + 30, y + 30, 80, 50, C.cream, C.ink, 8, 2) + T(x + 70, y + 60, 'school', { size: 15, anchor: 'middle' });
      r += rect(x + 160, y + 30, 80, 50, C.panel, C.ink, 8, 2) + T(x + 200, y + 60, 'business', { size: 15, anchor: 'middle' });
      r += T(x + 135, y + 62, '≈ ?', { size: 20, weight: 700, anchor: 'middle', fill: C.rust });
      r += T(x + 135, y + 106, 'differ in a relevant way', { size: 15, anchor: 'middle', fill: C.rust, weight: 700 });
      return r;
    }],
    ['Red herring', '“Why worry about litter when the council wastes money on its newsletter?”', (x, y) => {
      let r = box(x + 15, y + 30, 90, { body: 'litter', size: 15, align: 'middle', h: 50, vc: true, pad: 6 }).s;
      r += curve(`M${x + 110},${y + 55} C${x + 150},${y + 55} ${x + 160},${y + 95} ${x + 190},${y + 95}`, C.rust, 3, 'ahR');
      r += T(x + 225, y + 60, 'news-', { size: 15, anchor: 'middle', fill: C.rust }) + T(x + 225, y + 78, 'letter', { size: 15, anchor: 'middle', fill: C.rust });
      return r;
    }],
  ];
  cards.forEach(([h, ex, art], i) => {
    const x = 30 + (i % 3) * (W + gx), y = y0 + Math.floor(i / 3) * (H + gy);
    s += rect(x, y, W, H, C.panel, C.panelEdge, 14);
    s += T(x + 16, y + 32, h, { size: 19, weight: 700 });
    s += art(x, y + 44);
    s += P(x + 16, y + 180, ex, { size: 15, w: W - 32, fill: C.muted, italic: true }).s;
  });
  return { s, h: 3 * H + 2 * gy };
}, 'Nine cards each sketch a flaw with the lesson’s example: hasty generalisation (two cases to everyone), false cause (A then B is not A causes B), false dilemma (two doors shown, others hidden), slippery slope (steps asserted), straw man (a distorted view attacked), ad hominem (the person attacked, not the plan), circular reasoning, faulty analogy and red herring.',
'Know what is wrong with each pattern, not just its name.', '## Reasoning flaws: what goes wrong');

// 02 Specious vs illogical
fig('02-specious-vs-illogical', 'Two kinds of failure', '', (y0) => {
  let s = '';
  const r = row(30, y0, 840, 30, [
    { head: 'Illogical', body: 'The conclusion does not follow, even if the premises are true.\n\n“All the students in the choir are good at music; Ravi is good at music; so Ravi is in the choir.”', size: 16, edge: C.rust, headColor: C.rust },
    { head: 'Specious', body: 'Looks plausible but depends on a trick, a gap or an emotional shortcut.\n\n“Can you really say no to saving a child’s life? Then you must support the new tax.”', size: 16, edge: C.olive, headColor: C.olive, fill: C.cream },
  ]);
  s += r.s;
  // Venn for illogical
  let y = y0 + r.h + 24;
  s += rect(30, y, 405, 170, C.panel, C.panelEdge, 14);
  s += `<ellipse cx="232" cy="${y + 90}" rx="170" ry="66" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>`;
  s += `<ellipse cx="150" cy="${y + 90}" rx="62" ry="40" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += T(150, y + 96, 'choir', { size: 16, weight: 700, anchor: 'middle' });
  s += T(300, y + 50, 'good at music', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 700 });
  s += circ(320, y + 100, 9, C.rust, C.ink, 2) + T(320, y + 130, 'Ravi could be here', { size: 15, anchor: 'middle', fill: C.rust, weight: 700 });
  // specious: hidden question
  s += rect(465, y, 405, 170, C.panel, C.panelEdge, 14);
  s += box(485, y + 50, 130, { body: 'saving a child’s life', size: 15, align: 'middle', h: 70, vc: true, pad: 8 }).s;
  s += box(720, y + 50, 130, { body: 'support the tax', size: 15, align: 'middle', h: 70, vc: true, pad: 8 }).s;
  s += arrow(618, y + 85, 714, y + 85, { w: 3, dash: '6 5' });
  s += T(667, y + 40, 'hidden question:', { size: 15, anchor: 'middle', fill: C.olive, weight: 700 }) + T(667, y + 145, 'does the tax achieve it?', { size: 15, anchor: 'middle', fill: C.olive, weight: 700 });
  s += P(450, y + 200, 'Both undermine credibility: a reader who spots one flaw may doubt the rest.', { size: 16, anchor: 'middle', w: 820, fill: C.muted }).s;
  return { s, h: y + 212 - y0 };
}, 'Two kinds of failure. Illogical: the choir example, shown as a small circle of choir members inside a larger circle of people good at music, where Ravi could sit outside the choir. Specious: an emotional question about saving a child’s life leaps to supporting a tax, hiding whether the tax achieves it.',
'Illogical arguments do not follow; specious ones only look as if they do.', '## Specious and illogical: two kinds of failure');

// 03 Repairs
fig('03-repairing-flaws', 'Repairing a flaw in your own draft', '', (y0) => {
  let s = '';
  const R = [
    ['Hasty generalisation', 'Narrow the claim or add representative evidence.'],
    ['False cause', 'Show a causal mechanism or rule out other causes; or say “may have contributed”.'],
    ['False dilemma', 'Acknowledge other options and explain why they fall short.'],
    ['Slippery slope', 'Show evidence for each step, or limit the claim to the likely next step.'],
    ['Straw man', 'Restate the opposing view fairly, then answer it.'],
    ['Ad hominem', 'Address the argument, not the person.'],
    ['Circular reasoning', 'Provide independent reasons or evidence.'],
  ];
  let y = y0;
  R.forEach(([f, fix]) => {
    const b = box(330, y, 540, { body: fix, size: 16, pad: 12, fill: C.tealLight, edge: C.tealDark });
    const h = Math.max(b.h, 52);
    s += box(30, y, 240, { body: `**${f}**`, size: 17, h, vc: true, pad: 14, edge: C.rust, dash: '6 5' }).s;
    s += box(330, y, 540, { body: fix, size: 16, pad: 12, fill: C.tealLight, edge: C.tealDark, h, vc: true }).s;
    s += arrow(276, y + h / 2, 324, y + h / 2, { w: 3.5, color: C.tealDark, marker: 'ahT' });
    y += h + 10;
  });
  return { s, h: y - 10 - y0 };
}, 'Seven flaws, each with its typical repair: narrow a hasty generalisation, show a mechanism for a false cause, acknowledge other options in a false dilemma, evidence each step of a slippery slope, restate a straw man fairly, address the argument instead of the person, and give independent reasons for circular reasoning.',
'Most flaws are repaired by narrowing, evidencing or stating the other side fairly.', '## Fixing a flaw in your own writing');

// 04 Swift's deliberate false dilemma
fig('04-swift-false-dilemma', 'A flaw on purpose', 'Swift, “A Modest Proposal”, 1729', (y0) => {
  let s = '';
  s += box(30, y0 + 30, 300, { head: 'The narrator’s plan', body: 'the poor of Ireland sell their children as food', size: 16, align: 'middle', fill: C.cream, edge: C.ink, sw: 3, h: 130, vc: true }).s;
  s += T(180, y0 + 14, 'presented as the only option', { size: 15, anchor: 'middle', weight: 700, fill: C.muted });
  s += rect(400, y0, 470, 200, C.panel, C.rust, 14, 2.5, 'stroke-dasharray="8 6"');
  s += T(635, y0 + 30, 'Real remedies, listed then dismissed', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  s += box(430, y0 + 50, 410, { body: 'e.g. taxing absentee landlords', size: 16, align: 'middle', h: 50, vc: true, pad: 10 }).s;
  s += P(635, y0 + 140, '“Therefore I repeat, let no man talk to me of other expedients”', { size: 16, anchor: 'middle', w: 420, italic: true }).s;
  s += line(345, y0 + 95, 390, y0 + 95, C.rust, 4) + line(360, y0 + 80, 378, y0 + 110, C.rust, 4);
  const y = y0 + 230;
  const r = row(30, y, 840, 24, [
    { head: 'The flaw', body: 'A false dilemma resting on a monstrous premise: that poor people’s children are a commodity.', size: 16, edge: C.rust },
    { head: 'The point', body: 'Visibly specious reasoning invites readers to reject the real premises behind policies of the day.', size: 16, fill: C.tealLight, edge: C.tealDark },
  ]);
  s += r.s;
  s += P(450, y + r.h + 30, 'Ask not only “what is wrong?” but “why has the writer made it wrong?”', { size: 17, anchor: 'middle', w: 820, fill: C.muted }).s;
  return { s, h: y + r.h + 42 - y0 };
}, 'Swift’s narrator presents his plan to sell children as food as the only option, and shuts out real remedies such as taxing absentee landlords with “let no man talk to me of other expedients”. The deliberate false dilemma exposes the real premises behind the policies of his day.',
'In satire the flaw is the point: ask why the writer made the reasoning wrong.', '## Satire and deliberately flawed reasoning: Swift (1729)');

// 05 Diagnosing the paragraph
fig('05-diagnosing-three-flaws', 'Diagnosing three flaws', 'Worked example 1: the new head', (y0) => {
  let s = '';
  const parts = [
    ['Since the new head arrived in September, attendance has fallen. So she is clearly the cause.', 'False cause', 'One event followed another; other explanations are possible (a flu outbreak, a bus timetable change).'],
    ['Either we remove her or attendance will go on falling.', 'False dilemma', 'Only two options; the school could investigate causes, change the bus schedule or support families.'],
    ['Councillor Hale says the head is doing a good job, but he has never taught a day in his life, so we can ignore him.', 'Ad hominem', 'Attacks his experience instead of answering his claim.'],
  ];
  let y = y0;
  parts.forEach(([txt, f, why], i) => {
    const a = box(30, y, 420, { body: txt, size: 17, pad: 14, fill: C.cream, edge: C.olive });
    const b = box(480, y, 390, { head: f, body: why, size: 15, headSize: 18, pad: 14, edge: C.rust, headColor: C.rust });
    const h = Math.max(a.h, b.h);
    s += box(30, y, 420, { body: txt, size: 17, pad: 14, fill: C.cream, edge: C.olive, h, vc: true }).s;
    s += box(480, y, 390, { head: f, body: why, size: 15, headSize: 18, pad: 14, edge: C.rust, headColor: C.rust, h, vc: true }).s;
    s += line(452, y + h / 2, 478, y + h / 2, C.rust, 3);
    y += h + 14;
  });
  s += box(30, y + 4, 840, { body: 'Common thread: each treats an **assumption** as proven. Name the flaw **and** explain why it fails.', size: 17, align: 'middle', fill: C.panel, edge: C.ink }).s;
  return { s, h: y + 58 - y0 };
}, 'The paragraph about the new head split into three parts, each paired with its flaw: concluding she caused the fall in attendance is false cause; “either we remove her or attendance will go on falling” is a false dilemma; dismissing Councillor Hale because he has never taught is ad hominem.',
'Name each flaw and explain why it fails in this specific argument.', '## Worked example 1: diagnosing flaws in a paragraph');

// 06 Repair: rival causes and tests
fig('06-rival-causes-test', 'From sequence to a fair test', 'Worked example 2: repairing the false cause', (y0) => {
  let s = '';
  s += box(330, y0, 240, { head: 'Evidence kept', body: 'attendance has fallen since September', size: 16, align: 'middle', fill: C.cream, edge: C.ink, sw: 3, h: 100, vc: true }).s;
  const c = [['New head’s arrival', 160], ['Flu outbreak', 450], ['Fewer bus services', 740]];
  const cy = y0 + 170;
  c.forEach(([t2, x]) => {
    s += rect(x - 115, cy, 230, 56, C.panel, C.tealDark, 28, 2.5) + T(x, cy + 35, t2, { size: 17, weight: 700, anchor: 'middle' });
    s += arrow(x, cy - 4, 450 + (x - 450) * 0.3, y0 + 104, { w: 2.5, dash: '6 5' });
  });
  s += T(450, cy + 84, 'possible causes that coincide', { size: 15, anchor: 'middle', fill: C.muted, weight: 700 });
  const y = cy + 128;
  s += T(450, y, 'Tests before attributing any cause', { size: 19, weight: 700, anchor: 'middle' });
  const r = row(30, y + 18, 840, 24, [
    { body: 'Compare attendance on routes that **kept their buses** with those that did not.', size: 16, fill: C.tealLight, edge: C.tealDark },
    { body: 'Check absence reasons against **the dates of the outbreak**.', size: 16, fill: C.tealLight, edge: C.tealDark },
  ]);
  s += r.s;
  s += P(450, y + 18 + r.h + 30, 'The revision still addresses the problem, treats the head fairly and strengthens the writer’s ethos.', { size: 16, anchor: 'middle', w: 820, fill: C.muted }).s;
  return { s, h: y + 18 + r.h + 42 - y0 };
}, 'The fall in attendance since September is linked to three coinciding possible causes: the new head’s arrival, a flu outbreak and fewer bus services. Two tests follow: compare routes that kept their buses with those that did not, and check absence reasons against the outbreak dates.',
'Keep the evidence, name rival causes, and propose a way to test them.', '## Worked example 2: repairing a flawed argument');
