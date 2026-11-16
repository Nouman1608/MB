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

export const slug = 'ap-english-language-and-composition-6-1-synthesising-sources-study-guide';
const LESSON = 'src/content/ap-resources/english-language-and-composition/6-1-synthesising-sources-study-guide.md';

// 01 Funnel: draw on, select, combine
fig('01-synthesis-funnel', 'What synthesis does', 'Draw on several sources, select strategically, combine into your own argument', (y0) => {
  let s = '';
  // sources as stacks of bars
  ['Source A', 'Source B', 'Source C'].forEach((l, i) => {
    const x = 60 + i * 280;
    s += rect(x, y0, 220, 120, C.panel, C.ink, 8, 2.5) + T(x + 110, y0 + 26, l, { size: 17, weight: 700, anchor: 'middle' });
    for (let k = 0; k < 5; k++) s += `<rect x="${x + 20}" y="${y0 + 40 + k * 15}" width="${k === 2 ? 180 : 150}" height="8" rx="3" fill="${k === (i + 1) % 5 || k === (i + 3) % 5 ? C.mustard : C.panelEdge}"/>`;
  });
  s += `<path d="M40,${y0 + 150} L860,${y0 + 150} L560,${y0 + 290} L340,${y0 + 290} Z" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>`;
  s += T(450, y0 + 190, 'strategically select the most relevant', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += T(450, y0 + 218, 'information (the highlighted lines)', { size: 16, anchor: 'middle', fill: C.tealDark });
  s += T(450, y0 + 260, 'combine apt, specific material', { size: 16, weight: 700, anchor: 'middle' });
  s += arrow(450, y0 + 292, 450, y0 + 324, { w: 4 });
  s += box(220, y0 + 330, 460, { head: 'Your own argument', body: 'sources serve your claim', size: 17, align: 'middle', fill: C.cream, edge: C.ink, sw: 3, h: 84, vc: true }).s;
  s += P(450, y0 + 446, 'Some sources are more reliable or credible than others: weigh quality as well as content.', { size: 16, anchor: 'middle', w: 820, fill: C.muted }).s;
  return { s, h: 458 };
}, 'Three sources with a few relevant lines highlighted feed a funnel that selects the most relevant information and combines apt, specific material into the writer’s own argument. A note reminds that some sources are more credible than others.',
'Synthesis selects from several sources and combines them in service of your claim.', '## From using a source to synthesising sources');

// 02 Who is the subject of the sentence
fig('02-who-is-the-subject', 'Who is the subject of the sentence?', 'Summary puts the source first; synthesis puts the idea first', (y0) => {
  let s = '';
  s += T(30, y0 + 12, 'Source-by-source summary', { size: 18, weight: 700, fill: C.rust });
  let y = y0 + 26;
  [['Source A says', 'that most residents want more green space.'], ['Source B says', 'that shopkeepers need parking.'], ['Source C says', 'that a town in the north had a mixed result.']].forEach(([a, b]) => {
    const c = chunks(30, y, 840, [{ text: a, fill: '#f6e3d8' }, { text: b, fill: C.panel }], { size: 17, gap: 6 });
    s += c.s; y += c.h + 8;
  });
  y += 22;
  s += T(30, y, 'Synthesis', { size: 18, weight: 700, fill: C.tealDark });
  y += 16;
  const c = chunks(30, y, 840, [
    { text: 'Whether a town centre should turn a car park into green space', fill: C.cream, label: 'subject: the issue' },
    { text: 'depends less on whether residents want it,', fill: C.panel },
    { text: 'as the council’s survey suggests,', fill: C.tealLight, label: 'source as evidence' },
    { text: 'than on whether the change is planned with the shops in mind,', fill: C.panel },
    { text: 'as both a local shopkeeper’s warning and a planner’s case study imply.', fill: C.tealLight, label: 'two sources, one purpose' },
  ], { size: 17, gap: 6, rowGap: 22, minLabelW: 140 });
  s += c.s;
  y += c.h + 26;
  const t1 = table(30, y, [240, 300, 300], [
    ['Feature', 'Summary', 'Synthesis'],
    ['Organising principle', 'the sources, one after another', 'the writer’s idea'],
    ['Relationship', 'none stated', 'agreement, extension, qualification or conflict'],
    ['Commentary', 'little or none', 'what the sources show together'],
    ['Selection', 'everything', 'only what is relevant'],
  ], { size: 15, boldFirst: true, cellFill: (r, cc) => (r && cc === 2 ? C.tealLight : null) });
  s += t1.s;
  return { s, h: y + t1.h - y0 };
}, 'Three summary sentences each begin “Source A says”, “Source B says”, “Source C says”. The synthesis sentence begins with the issue, whether a car park should become green space, and brings in the survey, the shopkeeper and the planner as evidence. A table compares organising principle, relationship, commentary and selection.',
'In synthesis the claim is the subject of the sentence; the sources are the evidence.', '## Summary versus synthesis');

// 03 Three ways to bring material in + signal verbs
fig('03-quote-paraphrase-summarise', 'Bringing source material in', 'Using the fictional shopkeeper and planner', (y0) => {
  let s = '';
  const R = [
    ['Quotation', 'when the exact words matter or add force', 'A shopkeeper warns that “trees don’t buy bread”'],
    ['Paraphrase', 'to restate a specific point in your own words', 'The shopkeeper argues that the car park brings in customers who spend about £40 each'],
    ['Summary', 'to compress a long passage', 'The planner’s article describes a northern town’s conversion and its uneven results'],
  ];
  let y = y0;
  R.forEach(([h, w, ex], i) => {
    const lb = { head: h, body: w, size: 15, headSize: 18, pad: 12, fill: [C.cream, C.tealLight, C.panel][i], edge: C.ink };
    const hh = Math.max(box(290, y, 580, { body: ex, size: 16, pad: 14 }).h, box(30, y, 245, lb).h);
    s += box(30, y, 245, { ...lb, h: hh, vc: true }).s;
    s += box(290, y, 580, { body: ex, size: 16, pad: 14, h: hh, vc: true }).s;
    y += hh + 10;
  });
  y += 16;
  s += T(30, y, 'Always attribute and comment. Signal verbs say how you use the source:', { size: 17, weight: 700 });
  const c = chunks(30, y + 16, 840, ['notes', 'warns', 'concedes', 'argues', 'observes', 'suggests'].map((t2) => ({ text: t2, fill: C.cream })), { size: 17, gap: 14 });
  s += c.s;
  y += 16 + c.h + 18;
  s += box(30, y, 840, { body: '[[Dropped quote:]] a quotation with no introduction or explanation is weaker than one that is introduced and explained.', size: 16, align: 'middle', edge: C.rust, dash: '7 5' }).s;
  return { s, h: y + 56 - y0 };
}, 'Quotation, paraphrase and summary, each with when to use it and an example from the fictional sources: the shopkeeper’s “trees don’t buy bread”, his point about customers spending about £40, and the planner’s account of a northern town. Below, signal verbs and a warning about dropped quotes.',
'Quote for force, paraphrase a point, summarise a passage: always attribute and comment.', '## Ways of bringing source material in');

// 04 Four moves
fig('04-four-combining-moves', 'Combining sources: four moves', '', (y0) => {
  let s = '';
  const W = 412, H = 190, g = 16;
  const mv = [
    ['Agreement', '“Both the survey and the planner suggest...”', (x, y) => rect(x, y + 20, 70, 40, C.tealLight, C.ink, 8, 2) + T(x + 35, y + 46, 'A', { size: 17, weight: 700, anchor: 'middle' }) + rect(x + 150, y + 20, 70, 40, C.tealLight, C.ink, 8, 2) + T(x + 185, y + 46, 'C', { size: 17, weight: 700, anchor: 'middle' }) + arrow(x + 35, y + 62, x + 100, y + 90, { w: 2.5 }) + arrow(x + 185, y + 62, x + 120, y + 90, { w: 2.5 }) + circ(x + 110, y + 98, 10, C.cream, C.ink, 2)],
    ['Extension', '“The planner goes further, showing that...”', (x, y) => rect(x, y + 30, 90, 40, C.tealLight, C.ink, 8, 2) + T(x + 45, y + 56, 'B', { size: 17, weight: 700, anchor: 'middle' }) + rect(x + 90, y + 30, 130, 40, C.teal, C.ink, 8, 2) + T(x + 155, y + 56, 'C adds', { size: 16, weight: 700, anchor: 'middle' })],
    ['Qualification', '“The survey’s 62% should not hide...”', (x, y) => rect(x, y + 30, 220, 40, C.tealLight, C.ink, 8, 2) + T(x + 70, y + 56, 'A', { size: 17, weight: 700, anchor: 'middle' }) + `<rect x="${x + 140}" y="${y + 30}" width="80" height="40" rx="8" fill="#f6e3d8" stroke="${C.rust}" stroke-width="2" stroke-dasharray="5 4"/>` + T(x + 180, y + 56, 'B limits', { size: 15, weight: 700, anchor: 'middle', fill: C.rust })],
    ['Conflict', 'explain why they disagree, or choose between them', (x, y) => rect(x, y + 30, 80, 40, C.tealLight, C.ink, 8, 2) + T(x + 40, y + 56, 'A', { size: 17, weight: 700, anchor: 'middle' }) + rect(x + 140, y + 30, 80, 40, '#f6e3d8', C.ink, 8, 2) + T(x + 180, y + 56, 'B', { size: 17, weight: 700, anchor: 'middle' }) + T(x + 110, y + 57, '⟷', { size: 20, weight: 700, anchor: 'middle', fill: C.rust })],
  ];
  mv.forEach(([h, ex, art], i) => {
    const x = 30 + (i % 2) * (W + g), y = y0 + Math.floor(i / 2) * (H + g);
    s += rect(x, y, W, H, C.panel, C.panelEdge, 14);
    s += T(x + 18, y + 32, h, { size: 20, weight: 700 });
    s += art(x + 170, y + 30);
    s += P(x + 18, y + 150, ex, { size: 15, w: W - 36, fill: C.muted, italic: true }).s;
  });
  s += P(450, y0 + 2 * H + g + 30, 'Strong synthesis often uses more than one move in a paragraph.', { size: 16, anchor: 'middle', w: 820, fill: C.muted }).s;
  return { s, h: 2 * H + g + 40 };
}, 'Four cards with small diagrams: agreement (two sources point to one idea), extension (one source adds to another), qualification (one source limits another) and conflict (two sources disagree), each with example phrasing.',
'Agree, extend, qualify or conflict: say how the sources relate.', '## Combining sources: four moves');

// 05 Worked example source roles
fig('05-car-park-paragraph-roles', 'Each source has a role', 'Worked example 1: should the car park become a green square?', (y0) => {
  let s = '';
  const steps = [
    ['A', 'Council survey of 800 residents', '62% want green space; 21% parking', 'SUPPORTS', 'residents want it', C.tealLight, C.tealDark],
    ['B', 'Shopkeeper’s letter', 'village visitors spend about £40 each', 'QUALIFIES A', 'the survey asks residents, not visitors', '#f6e3d8', C.rust],
    ['C', 'Planner’s article', 'placement of seating and signs mattered more', 'EXTENDS B', 'and supplies a remedy', C.cream, C.olive],
  ];
  let y = y0;
  steps.forEach(([l, src, pt, role, why, f, e], i) => {
    s += circ(60, y + 45, 26, f, e, 3) + T(60, y + 54, l, { size: 22, weight: 700, anchor: 'middle' });
    s += box(100, y, 400, { head: src, body: pt, size: 15, headSize: 17, pad: 14, h: 90, vc: true }).s;
    s += arrow(504, y + 45, 540, y + 45, { w: 3, color: e, marker: e === C.tealDark ? 'ahT' : e === C.rust ? 'ahR' : 'ahO' });
    s += box(546, y, 324, { head: role, body: why, size: 15, headSize: 17, pad: 14, h: 90, vc: true, fill: f, edge: e, headColor: e }).s;
    if (i < 2) s += line(60, y + 72, 60, y + 108, C.panelEdge, 3);
    y += 108;
  });
  s += box(30, y + 4, 840, { head: 'Claim (qualified)', body: '“The town should therefore build the square, but plan its layout around the shops that need the trade.”', size: 16, fill: C.panel, edge: C.ink, sw: 3 }).s;
  return { s, h: y + 100 - y0 };
}, 'The worked paragraph’s sources in order: Source A, the council survey (62% want green space), supports the claim; Source B, the shopkeeper’s letter about village visitors spending around £40, qualifies A; Source C, the planner’s article on seating and signs, extends B and supplies a remedy. They lead to a qualified claim.',
'Order by idea: support, then qualify, then extend toward the claim.', '## Worked example 1: building a synthesis paragraph');
