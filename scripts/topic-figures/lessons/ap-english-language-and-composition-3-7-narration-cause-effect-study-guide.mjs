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

export const slug = 'ap-english-language-and-composition-3-7-narration-cause-effect-study-guide';
const LESSON = 'src/content/ap-resources/english-language-and-composition/3-7-narration-cause-effect-study-guide.md';

// 01 Two promises
fig('01-two-promises', 'Two methods, two promises', 'Each needs both halves; half of either is incomplete', (y0) => {
  let s = '';
  const eq = (y, a, b, res, fa, fb, missA, missB) => {
    let r = box(30, y, 250, { head: a[0], body: a[1], size: 16, align: 'middle', fill: fa, h: 100, vc: true }).s;
    r += T(305, y + 60, '+', { size: 30, weight: 700, anchor: 'middle' });
    r += box(330, y, 250, { head: b[0], body: b[1], size: 16, align: 'middle', fill: fb, h: 100, vc: true }).s;
    r += T(605, y + 60, '=', { size: 30, weight: 700, anchor: 'middle' });
    r += box(630, y, 240, { head: res, body: '', size: 16, align: 'middle', fill: C.panel, edge: C.ink, sw: 3, h: 100, vc: true, headSize: 21 }).s;
    r += P(30, y + 130, `[[Only half:]] ${missA}`, { size: 16, w: 400 }).s + P(470, y + 130, `[[Only half:]] ${missB}`, { size: 16, w: 400 }).s;
    return r;
  };
  s += eq(y0, ['Story', 'details about a real-life experience'], ['Significance', 'reflection and insight on what it means'], 'Narration', C.cream, C.tealLight, 'an anecdote the reader must interpret alone', 'reflection with nothing to stand on');
  s += eq(y0 + 200, ['Links', 'a cause and its effects, a chain, or several causes'], ['Reasoning', 'evidence of how A leads to B'], 'Cause-effect', C.cream, C.tealLight, 'asserted links a reader can doubt', 'reasoning with no chain to explain');
  return { s, h: 200 + 160 };
}, 'Two equations. Narration equals story (details about a real-life experience) plus significance (reflection on what it means). Cause-effect equals links (a cause and effects, a chain, or several causes) plus reasoning (evidence of how one leads to another). Notes warn what happens with only half.',
'Narration needs story plus significance; cause-effect needs links plus reasoning.', '## Two methods, two promises');

// 02 Narration: features and placement
fig('02-narration-in-argument', 'Narration in an argument', 'Features that make it work, and where it works best', (y0) => {
  let s = '';
  const F = [
    ['Specific detail', '“On 14 January, a Tuesday, I waited forty minutes at the Harbour Road stop...”'],
    ['Selection', 'the weather affects the wait, so it stays; the colour of the pushchair goes'],
    ['Sequence', '“First... then... by the time the bus came...”'],
    ['Perspective', '“I did not know then that...”'],
    ['Reflection', '“...a timetable is a promise, and ours is broken.”'],
  ];
  let y = y0;
  F.forEach(([h, b], i) => {
    const bx = box(30, y, 840, { body: `**${h}:** ${b}`, size: 16, pad: 12, fill: i === 4 ? C.tealLight : C.panel, edge: i === 4 ? C.tealDark : C.panelEdge, bar: i === 4 ? C.tealDark : C.mustard });
    s += bx.s; y += bx.h + 8;
  });
  y += 24;
  s += T(450, y, 'Where narration works best in an argument', { size: 18, weight: 700, anchor: 'middle' });
  y += 22;
  s += rect(30, y + 30, 840, 20, C.panelEdge, C.panelEdge, 10);
  [['Open', 'make an abstract issue human', 120], ['Illustrate', 'a claim midway', 450], ['Close', 'return to the opening story with new understanding', 780]].forEach(([h, b, cx]) => {
    s += rect(cx - 70, y + 26, 140, 28, C.mustard, C.ink, 8, 2);
    s += P(cx, y + 82, `**${h}**`, { size: 17, anchor: 'middle', w: 220 }).s;
    s += P(cx, y + 104, b, { size: 15, anchor: 'middle', w: 200, fill: C.muted }).s;
  });
  y += 150;
  s += box(30, y, 840, { body: 'Narration builds pathos and ethos (the writer was there) but should not replace evidence: a sceptical audience usually wants a story **and** data.', size: 16, align: 'middle', fill: C.cream, edge: C.olive }).s;
  return { s, h: y + 60 - y0 };
}, 'Five features of effective narration with the Harbour Road bus-stop examples: specific detail, selection, sequence, perspective and reflection. A bar shows narration working best to open an argument, illustrate a claim midway, or close by returning to the opening story.',
'Specific, selected, ordered detail, then reflection that states the significance.', '## Narration in an argument');

// 03 Three shapes of cause-effect
fig('03-three-causal-shapes', 'Three shapes of cause-effect', '', (y0) => {
  let s = '';
  const bx = (x, y, t2, f = C.cream, w = 150, hh = 62) => box(x, y, w, { body: t2, size: 15, align: 'middle', h: hh, vc: true, pad: 8, fill: f, edge: C.ink }).s;
  const H = 230;
  // 1 one cause, effects
  let y = y0;
  s += rect(30, y, 840, H, C.panel, C.panelEdge, 14) + T(50, y + 32, '1  A cause with asserted effects', { size: 19, weight: 700 });
  s += bx(60, y + 100, 'bridge closure', C.cream, 170);
  s += arrow(234, y + 125, 330, y + 82, { w: 3 }) + arrow(234, y + 140, 330, y + 172, { w: 3 });
  s += bx(336, y + 52, 'longer bus routes', C.tealLight, 190) + bx(336, y + 142, 'fewer weekday clinic visits', C.tealLight, 190);
  s += P(560, y + 110, '“The closure of the bridge forced longer bus routes and reduced weekday visits to the clinic.”', { size: 15, w: 290, italic: true, fill: C.muted }).s;
  // 2 chain
  y += H + 14;
  s += rect(30, y, 840, H - 30, C.panel, C.panelEdge, 14) + T(50, y + 32, '2  A chain of consequences', { size: 19, weight: 700 });
  const ch = ['later closing times', 'homework club falls', 'coursework marks fall', 'fewer qualify'];
  ch.forEach((t2, i) => { s += bx(50 + i * 205, y + 60, t2, i === 0 ? C.cream : C.tealLight, 170); if (i < 3) s += arrow(222 + i * 205, y + 91, 252 + i * 205, y + 91, { w: 3 }); });
  s += P(450, y + 160, 'each effect becomes the cause of the next', { size: 15, anchor: 'middle', w: 800, fill: C.muted, italic: true }).s;
  // 3 many causes
  y += H - 16;
  s += rect(30, y, 840, H, C.panel, C.panelEdge, 14) + T(50, y + 32, '3  A series of causes, one effect', { size: 19, weight: 700 });
  ['rising rents', 'falling footfall', 'loss of the market'].forEach((t2, i) => { s += bx(60, y + 46 + i * 60, t2, C.cream, 190, 50); });
  ['rising rents', 'falling footfall', 'loss of the market'].forEach((t2, i) => { s += arrow(254, y + 70 + i * 60, 400, y + 125, { w: 2.5 }); });
  s += bx(406, y + 94, 'an empty high street', C.tealLight, 200);
  s += P(640, y + 110, '“...together emptied the high street.”', { size: 15, w: 210, italic: true, fill: C.muted }).s;
  return { s, h: y + H - y0 };
}, 'Three diagrams. One cause with several effects: a bridge closure leads to longer bus routes and fewer clinic visits. A chain: later closing times reduce the homework club, then coursework marks, then the number who qualify. Several causes, one effect: rising rents, falling footfall and the loss of the market together empty the high street.',
'One cause with effects, a chain of consequences, or many causes behind one effect.', '## Cause-effect in an argument');

// 04 Testing a link and matching words to evidence
fig('04-testing-causal-links', 'Is the link convincing?', '', (y0) => {
  let s = '';
  s += rect(30, y0 + 30, 170, 70, C.cream, C.ink, 12, 2.5) + T(115, y0 + 72, 'A', { size: 26, weight: 700, anchor: 'middle' });
  s += rect(700, y0 + 30, 170, 70, C.tealLight, C.ink, 12, 2.5) + T(785, y0 + 72, 'B', { size: 26, weight: 700, anchor: 'middle' });
  s += arrow(204, y0 + 65, 694, y0 + 65, { w: 4 });
  s += circ(450, y0 + 65, 26, C.mustard, C.ink, 3) + T(450, y0 + 74, '?', { size: 24, weight: 700, anchor: 'middle' });
  const q = [['Evidence of the connection?', 'a study, a pattern across cases, a mechanism'], ['Something else explain it?', 'consider rival causes'], ['Proportionate?', 'a small cause rarely explains a very large effect'], ['Clear about strength?', 'match the words to the evidence']];
  const r = row(30, y0 + 130, 840, 12, q.map(([h, b]) => ({ head: h, body: b, size: 15, headSize: 17, pad: 12 })));
  s += r.s;
  let y = y0 + 130 + r.h + 40;
  s += T(450, y, 'Degrees of certainty', { size: 18, weight: 700, anchor: 'middle' });
  y += 20;
  const sc = [['“may have led to”', C.panel], ['“contributed to”', C.tealLight], ['“caused”', C.teal]];
  sc.forEach(([t2, f], i) => { s += rect(30 + i * 285, y, 270, 52, f, C.ink, 26, 2.5) + T(165 + i * 285, y + 33, t2, { size: 18, weight: 700, anchor: 'middle' }); });
  s += arrow(40, y + 76, 860, y + 76, { w: 3 }) + T(450, y + 102, 'stronger claim: needs stronger evidence', { size: 15, anchor: 'middle', fill: C.muted, weight: 700 });
  return { s, h: y + 110 - y0 };
}, 'An arrow from A to B with a question mark, and four questions for any causal link: is there evidence of the connection, could something else explain it, is the effect proportionate, and is the writer clear about strength? Below, “may have led to”, “contributed to” and “caused” form a scale of certainty.',
'A causal claim is only as strong as its weakest link; match your verbs to the evidence.', '## Cause-effect in an argument');

// 05 Story shows a chain, then reflection
fig('05-story-as-causal-chain', 'A story that shows a chain', 'Narration and cause-effect together', (y0) => {
  let s = '';
  const st = [['the bus was late', C.panel], ['I missed the interview', C.cream], ['the job went to someone else', C.cream], ['a timetable decided my year', C.tealLight]];
  st.forEach(([t2, f], i) => {
    const x = 30 + i * 215;
    s += box(x, y0, 195, { body: t2, size: 16, align: 'middle', h: 80, vc: true, fill: f, pad: 12 }).s;
    if (i < 3) s += arrow(x + 197, y0 + 40, x + 213, y0 + 40, { w: 3 });
    if (i < 2) s += T(x + 205, y0 + 104, 'because', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  });
  s += line(30, y0 + 130, 870, y0 + 130, C.panelEdge, 2, '6 6');
  s += T(450, y0 + 160, 'Reflection states the general claim', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += box(80, y0 + 176, 740, { body: '“Unreliable buses do not only waste time; they change the course of people’s lives.”', size: 19, align: 'middle', fill: C.panel, edge: C.tealDark, sw: 3, pad: 20 }).s;
  return { s, h: 290 };
}, 'A chain of four events from a story: the bus was late, so I missed the interview, so the job went to someone else, so a timetable decided my year. Below, the reflection states the general claim: unreliable buses change the course of people’s lives.',
'The story shows the chain at work; the reflection states the claim it supports.', '## Narration and cause-effect together');

// 06 Wollstonecraft
fig('06-wollstonecraft-cause-effect', 'Reform as a natural consequence', 'Wollstonecraft, A Vindication of the Rights of Woman, 1792', (y0) => {
  let s = '';
  s += box(30, y0, 840, { body: '“Strengthen the female mind by enlarging it, and there will be an end to blind obedience.”', size: 20, align: 'middle', fill: C.cream, edge: C.ink, pad: 20 }).s;
  let y = y0 + 110;
  s += box(30, y, 330, { head: 'Cause', body: 'strengthening and enlarging women’s minds (education)', size: 16, align: 'middle', fill: C.tealLight, edge: C.tealDark, h: 110, vc: true }).s;
  s += arrow(366, y + 55, 534, y + 55, { w: 4 });
  s += T(450, y + 44, '“and there will be”', { size: 15, anchor: 'middle', italic: true, fill: C.muted });
  s += box(540, y, 330, { head: 'Effect', body: 'an end to “blind obedience”', size: 16, align: 'middle', fill: C.panel, edge: C.ink, h: 110, vc: true }).s;
  y += 140;
  s += T(450, y, 'A second causal claim', { size: 18, weight: 700, anchor: 'middle' });
  y += 18;
  s += box(30, y, 330, { body: '“blind obedience is ever sought for by power”', size: 16, align: 'middle', h: 80, vc: true, fill: C.cream, edge: C.olive }).s;
  s += arrow(366, y + 40, 534, y + 40, { w: 3.5 });
  s += box(540, y, 330, { body: 'those with power oppose education, because it would undermine obedience', size: 16, align: 'middle', h: 80, vc: true }).s;
  s += P(450, y + 112, 'Reform appears not as a favour but as the consequence of a cause readers can bring about.', { size: 16, anchor: 'middle', w: 820, fill: C.muted }).s;
  return { s, h: y + 124 - y0 };
}, 'Wollstonecraft’s sentence is split into a cause, strengthening and enlarging women’s minds, and an effect, an end to blind obedience. A second causal claim follows: because power seeks blind obedience, those with power oppose education.',
'Condition and consequence present reform as something readers can cause.', '## A public-domain example of cause-effect: Wollstonecraft (1792)');

// 07 Testing each link
fig('07-testing-the-chain', 'Testing each link in a chain', 'Worked example 2: the evening bus (invented data)', (y0) => {
  let s = '';
  const L = [
    ['Evening bus cut in March', ''],
    ['Pupils cannot get home safely', 'Supported: a reason given, and data (48 → 19)', 'ok'],
    ['Homework club attendance falls', 'Assumption: that the club improves marks; compare members with non-members', 'warn'],
    ['Coursework marks fall', 'Plausible but not quantified: how many fewer qualify?', 'warn'],
    ['Fewer qualify for sixth form', 'Overstated: “far more” than £16,000, with no figure given', 'bad'],
    ['“Cost the town far more”', ''],
  ];
  const nodes = L.map(([t2]) => t2);
  let y = y0;
  const nh = 50;
  const ys = [];
  nodes.forEach((t2, i) => {
    s += rect(30, y, 300, nh, i === 0 ? C.cream : i === 5 ? '#f6e3d8' : C.panel, C.ink, 25, 2.5) + T(180, y + 32, t2, { size: 16, weight: 700, anchor: 'middle' });
    ys.push(y);
    if (i < 5) s += arrow(180, y + nh + 2, 180, y + nh + 26, { w: 3, color: i === 4 ? C.rust : C.ink, marker: i === 4 ? 'ahR' : 'ah' });
    y += nh + 30;
  });
  for (let i = 1; i <= 4; i++) {
    const [, note, k] = L[i];
    const ly = ys[i] + nh + 14;
    const col = k === 'ok' ? C.tealDark : k === 'warn' ? C.olive : C.rust;
    const f = k === 'ok' ? C.tealLight : k === 'warn' ? C.cream : '#f6e3d8';
    s += box(380, ly - 20, 490, { body: note, size: 15, pad: 10, fill: f, edge: col, h: 54, vc: true }).s;
    s += line(204, ly + 7, 376, ly + 7, col, 2, '4 4');
  }
  y += 4;
  s += box(30, y - 20, 840, { body: '**Verdict:** plausible, first link well supported, later links assumed. Add evidence or soften to “may well cost”.', size: 16, align: 'middle', fill: C.panel, edge: C.ink }).s;
  return { s, h: y + 34 - y0 };
}, 'The evening-bus chain as six linked steps from the cut in March to the claim that it cost the town far more. Notes rate each link: the first is supported by a reason and data, the next two rest on assumptions or unquantified claims, and the final conclusion is overstated.',
'Test every link: a chain is only as strong as its weakest, least-evidenced step.', '## Worked example 2: analysing a cause-effect chain');
