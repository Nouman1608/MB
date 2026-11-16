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

export const slug = 'ap-english-language-3-6-methods-of-development-study-guide';
const LESSON = 'src/content/ap-resources/english-language-and-composition/3-6-methods-of-development-study-guide.md';

const icon = {
  narration: (x, y) => line(x, y + 20, x + 90, y + 20, C.ink, 3) + [0, 1, 2].map((i) => circ(x + 10 + i * 35, y + 20, 8, i === 2 ? C.mustard : C.cream, C.ink, 2)).join('') + arrow(x + 90, y + 20, x + 104, y + 20, { w: 3 }),
  cause: (x, y) => rect(x, y + 6, 28, 28, C.cream, C.ink, 6, 2) + arrow(x + 30, y + 20, x + 46, y + 20, { w: 2.5 }) + rect(x + 48, y + 6, 28, 28, C.cream, C.ink, 6, 2) + arrow(x + 78, y + 20, x + 94, y + 20, { w: 2.5 }) + rect(x + 96, y + 6, 28, 28, C.mustard, C.ink, 6, 2),
  compare: (x, y) => rect(x + 10, y, 44, 40, C.cream, C.ink, 6, 2) + rect(x + 66, y, 44, 40, C.tealLight, C.ink, 6, 2) + T(x + 60, y + 27, '⟷', { size: 16, anchor: 'middle', weight: 700 }),
  definition: (x, y) => `<circle cx="${x + 60}" cy="${y + 20}" r="22" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5" stroke-dasharray="5 3"/>` + circ(x + 60, y + 20, 6, C.ink, C.ink) + circ(x + 100, y + 14, 5, C.panel, C.rust, 2),
  description: (x, y) => `<path d="M${x + 20},${y + 20} Q${x + 60},${y - 6} ${x + 100},${y + 20} Q${x + 60},${y + 46} ${x + 20},${y + 20} Z" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + circ(x + 60, y + 20, 10, C.teal, C.ink, 2),
};

// 01 Five methods at a glance
fig('01-five-methods', 'Five methods of development', 'Ways of developing and organising an idea, not types of essay', (y0) => {
  let s = '';
  const M = [
    ['narration', 'Narration', 'tells a story or sequence', '“when”, “after”, “then”', 'What happened, and what does it show?'],
    ['cause', 'Cause-effect', 'what produces what', '“because”, “as a result”, “led to”', 'Why did it happen, and what follows?'],
    ['compare', 'Comparison-contrast', 'similarities and differences', '“whereas”, “unlike”, “similarly”', 'How are these alike and different?'],
    ['definition', 'Definition', 'what a term means, its boundaries', '“is defined as”, “means”', 'What exactly is this?'],
    ['description', 'Description', 'sensory, concrete detail', 'vivid detail, spatial order', 'What is it like?'],
  ];
  let y = y0;
  M.forEach(([k, h, what, sig, q]) => {
    const H = 92;
    s += rect(30, y, 840, H, C.panel, C.panelEdge, 14);
    s += icon[k](50, y + H / 2 - 20);
    s += T(200, y + 34, h, { size: 20, weight: 700 });
    s += T(200, y + 62, what, { size: 16, fill: C.muted });
    s += P(470, y + 32, `**Signals:** ${sig}`, { size: 16, w: 380 }).s;
    s += P(470, y + 62, `{{“${q}”}}`, { size: 16, w: 380 }).s;
    y += H + 10;
  });
  s += P(450, y + 16, 'Other approaches (examples, process, breaking into parts) often work inside these five.', { size: 16, anchor: 'middle', w: 820, fill: C.muted }).s;
  return { s, h: y + 26 - y0 };
}, 'Five rows, each with a small icon: narration (a time line), cause-effect (a chain of boxes), comparison-contrast (two boxes side by side), definition (a boundary around a term) and description (an eye). Each lists what the method does, its signal words and the question it answers.',
'Narration, cause-effect, comparison-contrast, definition, description: each helps readers trace the reasoning.', '## The five methods at a glance');

// 02 Same topic, five ways
fig('02-reading-room-five-ways', 'One subject, five developments', 'The old reading room of a closing library', (y0) => {
  let s = '';
  const cx = 450, cy = y0 + 250;
  s += circ(cx, cy, 82, C.cream, C.ink, 3) + P(cx, cy - 8, '**the old reading room**', { size: 17, anchor: 'middle', w: 130 }).s;
  const sp = [
    [30, y0, 'Narration', 'Zainab walks in with a cracked textbook and leaves with a library card and a plan.'],
    [600, y0, 'Cause-effect', 'Evening hours cut → homework club halves → coursework unfinished.'],
    [30, y0 + 190, 'Comparison-contrast', 'Harbourside open until nine and £11 per resident; ours closes at five, £6.'],
    [600, y0 + 190, 'Definition', 'A public place to sit, learn and be warm “without paying”.'],
    [315, y0 + 380, 'Description', 'Paper and radiator dust; eleven tables, green lamps, every seat taken.'],
  ];
  const keys = ['narration', 'cause', 'compare', 'definition', 'description'];
  sp.forEach(([x, y, h, b], i) => {
    const bx = box(x, y, 270, { head: h, body: b, size: 15, headSize: 18, pad: 14, headIndent: 0, h: 150, vc: true });
    s += curve(`M${cx + (x + 135 - cx) * 0.3},${cy + (y + 75 - cy) * 0.3} L${x + 135 + (cx - x - 135) * 0.28},${y + 75 + (cy - y - 75) * 0.28}`, C.panelEdge, 4, '');
    s += bx.s;
  });
  s += circ(cx, cy, 82, C.cream, C.ink, 3) + P(cx, cy - 8, '**the old reading room**', { size: 17, anchor: 'middle', w: 130 }).s;
  s += box(30, y0 + 550, 840, { body: 'Same thesis (the library is worth keeping), five methods: each shapes what the reader feels and understands.', size: 16, align: 'middle', fill: C.tealLight, edge: C.tealDark }).s;
  return { s, h: 550 + 56 };
}, 'The old reading room sits at the centre with five developments around it: narration (Zainab’s visit), cause-effect (cut hours leading to the homework club halving), comparison-contrast (Harbourside’s hours and spending), definition (a public place “without paying”) and description (radiator dust and green lamps).',
'The same thesis can be developed five ways; each shapes what the reader feels.', '## The same topic developed five ways');

// 03 Choosing a method
fig('03-choosing-a-method', 'Choosing a method', 'What does the argument need at this point?', (y0) => {
  let s = '';
  const R = [
    ['Make an abstract point human and memorable', 'Narration', 'narration'],
    ['Show why something matters or will matter', 'Cause-effect', 'cause'],
    ['Show one option is better or worse than another', 'Comparison-contrast', 'compare'],
    ['Fix the meaning of a key term before arguing', 'Definition', 'definition'],
    ['Help the audience see or feel a situation', 'Description', 'description'],
  ];
  let y = y0;
  R.forEach(([need, m, k]) => {
    s += box(30, y, 410, { body: need, size: 17, h: 62, vc: true, pad: 16 }).s;
    s += arrow(446, y + 31, 490, y + 31, { w: 3.5 });
    s += rect(496, y, 374, 62, C.tealLight, C.tealDark, 14, 2.5) + icon[k](510, y + 11) + T(652, y + 38, m, { size: 18, weight: 700 });
    y += 74;
  });
  s += T(450, y + 14, 'Also weigh', { size: 18, weight: 700, anchor: 'middle' });
  const r = row(30, y + 30, 840, 16, [
    { head: 'Audience', body: 'sceptical readers may need cause-effect; a general audience may be moved by narration', size: 15 },
    { head: 'Purpose', body: 'to honour, to inform, to persuade', size: 15 },
    { head: 'Length', body: 'a short speech may rest on one method; an essay combines several', size: 15 },
  ]);
  s += r.s;
  return { s, h: y + 30 + r.h - y0 };
}, 'Five needs mapped to methods: make a point human (narration), show why it matters (cause-effect), show one option is better (comparison-contrast), fix a term’s meaning (definition), help the audience see a situation (description). Audience, purpose and length also shape the choice.',
'Choose the method that does the job the argument needs at that point.', '## Choosing a method');

// 04 Dominant method with others inside
fig('04-methods-work-together', 'Methods work together', 'Identify the dominant method, then what it does', (y0) => {
  let s = '';
  const ex = [
    ['Narration', [['description', 'of the scene'], ['cause-effect', 'reflection on its meaning']]],
    ['Definition', [['comparison', '“A library is unlike a shop because...”']]],
    ['Cause-effect', [['narrative example', 'shows the chain at work']]],
  ];
  let y = y0;
  ex.forEach(([dom, inner]) => {
    const h = 130;
    s += rect(30, y, 840, h, C.tealLight, C.tealDark, 16, 2.5);
    s += T(56, y + 36, `Dominant: ${dom}`, { size: 20, weight: 700, fill: C.tealDark });
    inner.forEach(([m, d], i) => {
      s += box(56 + i * 400, y + 52, 380, { body: `**${m}** ${d}`, size: 16, h: 60, vc: true, pad: 14, fill: C.panel }).s;
    });
    y += h + 14;
  });
  s += P(450, y + 14, 'Do not label every sentence; name the dominant method and say what it does for the argument.', { size: 16, anchor: 'middle', w: 820, fill: C.muted }).s;
  return { s, h: y + 26 - y0 };
}, 'Three panels show a dominant method containing others: narration with description and cause-effect reflection; definition with a comparison (“A library is unlike a shop because...”); cause-effect with a narrative example.',
'One method usually dominates a paragraph while others work inside it.', '## Methods work together');

// 05 Washington's parable
fig('05-cast-down-your-bucket', 'A story that works as an analogy', 'Booker T. Washington, Atlanta, 18 September 1895', (y0) => {
  let s = '';
  const st = [['A ship lost at sea signals', '“Water, water; we die of thirst!”'], ['The reply', '“Cast down your bucket where you are.”'], ['Puzzled, they ask again', 'and get the same answer'], ['They lower the bucket', 'fresh water: they were at the mouth of a great river']];
  const w = 195, g = 20;
  const hs = st.map(([h, b]) => box(0, 0, w, { head: h, body: b, size: 15, headSize: 17, pad: 12 }).h);
  const H = Math.max(...hs);
  st.forEach(([h, b], i) => {
    const x = 30 + i * (w + g);
    s += box(x, y0, w, { head: h, body: b, size: 15, headSize: 17, pad: 12, h: H, fill: i === 3 ? C.tealLight : C.panel, edge: i === 3 ? C.tealDark : C.panelEdge }).s;
    if (i < 3) s += arrow(x + w + 2, y0 + H / 2, x + w + g - 2, y0 + H / 2, { w: 3 });
  });
  let y = y0 + H + 40;
  s += T(450, y, 'The analogy', { size: 19, weight: 700, anchor: 'middle' });
  y += 20;
  const map = [['the ship', 'the Southern community'], ['the fresh water close at hand', 'opportunity and cooperation close at hand']];
  map.forEach(([a, b]) => {
    s += box(60, y, 320, { body: a, size: 17, align: 'middle', h: 54, vc: true, fill: C.cream, edge: C.olive }).s;
    s += arrow(386, y + 27, 444, y + 27, { w: 3, dash: '7 5' });
    s += box(450, y, 390, { body: b, size: 17, align: 'middle', h: 54, vc: true, fill: C.tealLight, edge: C.tealDark }).s;
    y += 66;
  });
  s += P(450, y + 16, 'The audience reaches the conclusion itself; contemporaries also criticised the speech, so note how different listeners heard it.', { size: 16, anchor: 'middle', w: 820, fill: C.muted }).s;
  return { s, h: y + 40 - y0 };
}, 'Four story steps: a ship lost at sea signals for water; the reply is “Cast down your bucket where you are”; puzzled, they ask again; they lower the bucket and draw fresh water at the mouth of a river. Below, the analogy maps the ship to the Southern community and the water to opportunity and cooperation close at hand.',
'Narration can carry an argument by analogy, letting the audience reach the conclusion.', '## A public-domain example: Washington\'s parable (1895)');

// 06 Identifying the dominant method
fig('06-identify-the-method', 'Name the method, cite the signal', 'Worked example 1', (y0) => {
  let s = '';
  const R = [
    ['“When the bridge closed, the bus route to the hospital doubled in length, so patients... now needed forty.”', 'Cause-effect', 'cause', '“so”, “with them”: closure → longer journeys → missed appointments → costs'],
    ['“Imagine the two schools side by side. St Anne’s has a garden... Park Road has a car park...”', 'Comparison-contrast', 'compare', '“side by side”; a parallel list for each school'],
    ['“By ‘fairness’ I do not mean that everyone receives the same. I mean...”', 'Definition', 'definition', '“I do not mean... I mean...” sets a boundary'],
    ['“In June my grandfather took me fishing for the first time...”', 'Narration', 'narration', '“In June”; an event and a reflection'],
  ];
  let y = y0;
  R.forEach(([q, m, k, sig]) => {
    const a = box(30, y, 440, { body: q, size: 16, pad: 14, fill: C.cream, edge: C.olive });
    const b = box(500, y, 370, { head: m, body: sig, size: 15, headSize: 18, pad: 14, indent: 130 });
    const h = Math.max(a.h, b.h, 96);
    s += box(30, y, 440, { body: q, size: 16, pad: 14, fill: C.cream, edge: C.olive, h, vc: true }).s;
    s += box(500, y, 370, { head: m, body: sig, size: 15, headSize: 18, pad: 14, h, vc: true, indent: 130 }).s;
    s += icon[k](512, y + h / 2 - 20);
    s += arrow(474, y + h / 2, 496, y + h / 2, { w: 3 });
    y += h + 12;
  });
  return { s, h: y - 12 - y0 };
}, 'Four passages matched to their dominant method with the signal that shows it: the bridge closure is cause-effect (“so”), the two schools side by side is comparison-contrast, “By ‘fairness’ I do not mean...” is definition, and the fishing trip in June is narration.',
'Each identification cites a signal in the text; one method dominates each passage.', '## Worked example 1: identifying the method');

// 07 Ordering methods for a sceptical head
fig('07-ordering-methods', 'Order the methods for the audience', 'Worked example 2: a homework-free weekend, for a sceptical headteacher', (y0) => {
  let s = '';
  const st = [
    ['1', 'Cause-effect', 'cause', 'The problem is real: 70% feel exhausted on Mondays (invented survey); exhausted pupils learn less.', C.cream],
    ['2', 'Comparison-contrast', 'compare', 'The solution works: the neighbouring school that has tried the policy.', C.tealLight],
    ['3', 'Narration', 'narration', 'A human face: the Year 9 pupil who spent a whole Sunday on a project.', C.panel],
  ];
  let y = y0;
  st.forEach(([n, m, k, b, f], i) => {
    const bx = box(220, y, 650, { head: m, body: b, size: 16, headSize: 19, pad: 16, fill: f });
    s += bx.s + num(60, y + bx.h / 2, n, i === 0 ? C.mustard : C.cream, 22) + icon[k](94, y + bx.h / 2 - 20);
    if (i < 2) s += arrow(60, y + bx.h / 2 + 24, 60, y + bx.h + 14 + 30, { w: 3 });
    y += bx.h + 22;
  });
  s += box(30, y + 2, 840, { body: 'Narration is vivid but personal: for a sceptical reader it works best **after** the case has been made. Another order can work if the writer can explain it.', size: 16, align: 'middle', fill: C.panel, edge: C.olive, dash: '7 5' }).s;
  return { s, h: y + 60 - y0 };
}, 'A three-step plan for persuading a sceptical headteacher: open with cause-effect (the survey of Monday exhaustion), then comparison-contrast (a neighbouring school that has tried the policy), then narration (the Year 9 pupil’s lost Sunday) to give the case a human face.',
'Audience, purpose and evidence decide which method comes first.', '## Worked example 2: choosing and applying a method');
