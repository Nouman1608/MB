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

export const slug = 'ap-english-language-3-2-synthesis-acknowledging-sources-study-guide';
const LESSON = 'src/content/ap-resources/english-language-and-composition/3-2-synthesis-acknowledging-sources-study-guide.md';

// 01 Summary vs synthesis
fig('01-summary-vs-synthesis', 'Summary or synthesis?', 'Who controls the structure: the sources or the writer?', (y0) => {
  let s = '';
  const src = (x, y, l, f = C.panel) => rect(x, y, 70, 56, f, C.ink, 8, 2.5) + T(x + 35, y + 36, l, { size: 20, weight: 700, anchor: 'middle' });
  // left: summary
  s += T(215, y0 + 10, 'Summary (weak)', { size: 20, weight: 700, anchor: 'middle', fill: C.rust });
  s += rect(30, y0 + 26, 370, 290, C.panel, C.panelEdge, 14);
  ['A', 'B', 'C'].forEach((l, i) => {
    const y = y0 + 46 + i * 84;
    s += src(56, y, l) + T(146, y + 34, `“Source ${l} says...”`, { size: 17, italic: true });
    if (i < 2) s += arrow(91, y + 58, 91, y + 80, { w: 2.5 });
  });
  s += P(215, y0 + 300, 'in the order given; the writer disappears', { size: 15, anchor: 'middle', w: 340, fill: C.muted }).s;
  // right: synthesis
  s += T(685, y0 + 10, 'Synthesis (strong)', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += rect(500, y0 + 26, 370, 290, C.tealLight, C.tealDark, 14);
  s += rect(530, y0 + 46, 310, 56, C.cream, C.ink, 10, 3) + T(685, y0 + 81, 'Writer’s thesis', { size: 19, weight: 700, anchor: 'middle' });
  s += rect(520, y0 + 146, 150, 120, C.panel, C.tealDark, 12, 2) + rect(700, y0 + 146, 150, 120, C.panel, C.tealDark, 12, 2);
  s += T(595, y0 + 170, 'idea 1', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(775, y0 + 170, 'idea 2', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += src(530, y0 + 186, 'A') + src(600, y0 + 186, 'C') + src(740, y0 + 186, 'B');
  s += arrow(595, y0 + 144, 640, y0 + 106, { w: 2.5 }) + arrow(775, y0 + 144, 730, y0 + 106, { w: 2.5 });
  s += P(685, y0 + 300, 'grouped by idea; commentary connects', { size: 15, anchor: 'middle', w: 340, fill: C.ink }).s;
  s += box(30, y0 + 336, 840, { body: '**Test:** remove the sources. Is the argument still recognisably yours: its position, structure and commentary?', size: 17, align: 'middle', fill: C.cream, edge: C.olive }).s;
  return { s, h: 336 + 56 };
}, 'On the left, summary: sources A, B and C reported one after another in the order given, with the writer absent. On the right, synthesis: the writer’s thesis on top, with sources grouped under two ideas and connected by commentary. A test asks whether the argument is still yours if the sources are removed.',
'In synthesis the writer’s thesis, not the order of the sources, controls the structure.', '## Synthesis is not summary');

// 02 Six moves
fig('02-six-source-moves', 'Six ways to put sources in conversation', 'Think of each move as a verb', (y0) => {
  let s = '';
  const mv = [
    ['Support', 'use as evidence for your claim', '“This is borne out by the trust’s evaluation...”'],
    ['Extend', 'take the idea further than it went', '“The survey goes further than the report...”'],
    ['Qualify', 'agree, but limit its force', '“...encouraging, but it covered only ten schools.”'],
    ['Complicate', 'only part of the story', '“Yet the teacher’s account suggests the benefit has a price.”'],
    ['Rebut', 'disagree and explain why', '“The report overstates the case, because...”'],
    ['Compare', 'place two sources side by side', '“Where A measures results, B measures cost.”'],
  ];
  let y = y0;
  mv.forEach(([v, d, ex], i) => {
    const b = box(250, y, 620, { body: `**${d}**\n${ex}`, size: 16, pad: 12 });
    s += rect(30, y, 200, b.h, i < 2 ? C.tealLight : i < 4 ? C.cream : i === 4 ? '#f6e3d8' : C.panel, C.ink, 12, 2.5) + T(130, y + b.h / 2 + 8, v, { size: 21, weight: 700, anchor: 'middle' });
    s += b.s;
    y += b.h + 10;
  });
  s += P(450, y + 18, 'A paragraph grouping two sources that agree with one that qualifies them beats three separate summaries.', { size: 16, anchor: 'middle', w: 820, fill: C.muted }).s;
  return { s, h: y + 30 - y0 };
}, 'Six moves for relating sources to a claim, each with example phrasing: support, extend, qualify, complicate, rebut and compare.',
'Support, extend, qualify, complicate, rebut, compare: let the relations shape paragraphs.', '## Ways to put sources in conversation');

// 03 Acknowledging sources
fig('03-when-to-credit', 'When to credit a source', '', (y0) => {
  let s = '';
  const rows = [
    ['Direct quotation', 'quotation marks + name the source', C.tealLight],
    ['Paraphrase or summary', 'no quotation marks, but name the source', C.tealLight],
    ['An idea or statistic from a source', 'credit it, even in your own words', C.tealLight],
    ['Common knowledge', 'no citation needed: Paris is the capital of France', C.panel],
  ];
  let y = y0;
  rows.forEach(([a, b, f]) => {
    s += box(30, y, 330, { body: `**${a}**`, size: 17, h: 58, vc: true, pad: 16 }).s;
    s += arrow(366, y + 29, 420, y + 29, { w: 3.5 });
    s += box(426, y, 444, { body: b, size: 17, h: 58, vc: true, fill: f, edge: f === C.panel ? C.panelEdge : C.tealDark, pad: 16 }).s;
    y += 70;
  });
  y += 12;
  s += T(450, y + 4, 'Keep your own sentence in charge', { size: 19, weight: 700, anchor: 'middle' });
  y += 18;
  const r = row(30, y, 840, 16, [
    { head: 'Signal phrase', body: '“According to the Trust’s evaluation (Source A), ...”', size: 16 },
    { head: 'Embedded', body: '“Source B’s survey, in which 58 percent of parents reported higher childcare costs, suggests...”', size: 16 },
    { head: 'Parenthetical', body: '“...unchanged test results (Source A).”', size: 16 },
  ]);
  s += r.s;
  s += P(450, y + r.h + 28, 'Credit is an ethical duty (no plagiarism) and a rhetorical advantage (ethos).', { size: 16, anchor: 'middle', w: 820, fill: C.muted }).s;
  return { s, h: y + r.h + 40 - y0 };
}, 'Four situations and what to do: a direct quotation needs quotation marks and the source’s name; a paraphrase or summary still needs the name; an idea or statistic from a source needs credit; common knowledge needs no citation. Below, three ways to attribute inside a sentence: signal phrase, embedded and parenthetical.',
'Credit words and ideas that are not yours, in a way that keeps your sentence in charge.', '## Acknowledging sources');

// 04 Planning steps
fig('04-planning-a-synthesis', 'Planning a synthesis response', 'Seven steps, position first', (y0) => {
  let s = '';
  const st = [
    ['Decide your position first', 'do not let the sources choose it'],
    ['Skim and tag the sources', 'supports, qualifies or opposes'],
    ['Group sources by idea', 'not by the order you met them'],
    ['Draft a thesis', 'a position that acknowledges complexity'],
    ['Build paragraphs around claims', 'sources as evidence'],
    ['Write commentary', 'link each source to your claim'],
    ['Add a counterargument or qualification', 'from a source that complicates your view'],
  ];
  const w = 410;
  const bh = Math.max(...st.map(([hd, b]) => box(0, 0, w, { head: hd, body: b, size: 15, headSize: 18, indent: 40, pad: 14 }).h));
  const step = bh * 0.62;
  st.forEach(([hd, b], i) => {
    const col = i % 2, x = col ? 460 : 30, y = y0 + i * step;
    s += box(x, y, w, { head: hd, body: b, size: 15, headSize: 18, h: bh, vc: true, indent: 40, fill: i === 0 ? C.cream : C.panel, edge: i === 0 ? C.ink : C.panelEdge, pad: 14 }).s;
    s += num(x + 32, y + bh / 2, i + 1, i === 0 ? C.mustard : C.cream, 16);
    if (i < st.length - 1) {
      const ny = y0 + (i + 1) * step + bh / 2;
      s += arrow(col ? x - 2 : x + w + 2, y + bh / 2 + 8, col ? 30 + w + 8 : 460 - 8, ny - 8, { w: 2.5 });
    }
  });
  const H = (st.length - 1) * step + bh;
  return { s, h: H };
}, 'Seven numbered steps zig-zag down the page: decide your position, tag the sources, group them by idea, draft a thesis, build paragraphs around claims, write commentary, and add a counterargument or qualification from a complicating source.',
'Choose your position first; the sources serve it.', '## Planning a synthesis response');

// 05 Thoreau: extend or qualify
fig('05-thoreau-extend-qualify', 'Doing something with a source', 'Thoreau, “Civil Disobedience”, 1849', (y0) => {
  let s = '';
  const q = box(130, y0, 640, { body: '“Under a government which imprisons any unjustly, the true place for a just man is also a prison.”', size: 19, align: 'middle', fill: C.cream, edge: C.ink, sw: 3, pad: 20 });
  s += q.s;
  const y = y0 + q.h + 60;
  s += curve(`M330,${y0 + q.h + 4} C300,${y - 30} 230,${y - 40} 220,${y - 6}`, C.tealDark, 3.5, 'ahT');
  s += curve(`M570,${y0 + q.h + 4} C600,${y - 30} 670,${y - 40} 680,${y - 6}`, C.olive, 3.5, 'ahO');
  const r = row(30, y, 840, 40, [
    { head: 'Extend', body: 'The objector to an unjust law should accept its penalty, not escape it: “That is the standard I apply to a protester who...”', size: 16, fill: C.tealLight, edge: C.tealDark, headColor: C.tealDark },
    { head: 'Qualify', body: 'The rule works where the unjust law punishes only the objector, but fits poorly where jailing the objector helps the injustice continue.', size: 16, fill: C.cream, edge: C.olive, headColor: C.olive },
  ]);
  s += r.s;
  s += P(450, y + r.h + 30, 'Quote briefly, attribute to Thoreau, then do something of your own with the idea.', { size: 17, anchor: 'middle', w: 820, fill: C.muted }).s;
  return { s, h: y + r.h + 42 - y0 };
}, 'Thoreau’s sentence, “the true place for a just man is also a prison”, branches two ways: extending it to a standard for protesters who should accept the penalty, or qualifying it for cases where jailing the objector helps the injustice continue.',
'A brief, attributed quotation becomes a springboard for the writer’s own move.', '## A public-domain example of conversation with a source: Thoreau (1849)');

// 06 Grouping A, B, C
fig('06-grouping-sources', 'Grouping sources by idea', 'Worked example 1: a four-day school week (fictional sources)', (y0) => {
  let s = '';
  const cy = y0 + 150;
  s += `<ellipse cx="320" cy="${cy}" rx="250" ry="130" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="3"/>`;
  s += `<ellipse cx="580" cy="${cy}" rx="250" ry="130" fill="${C.cream}" stroke="${C.olive}" stroke-width="3" fill-opacity="0.85"/>`;
  s += T(220, y0 + 50, 'BENEFITS', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += T(680, y0 + 50, 'COSTS', { size: 18, weight: 700, anchor: 'middle', fill: C.olive });
  const src = (x, y, l, t2) => rect(x - 32, y - 26, 64, 52, C.panel, C.ink, 8, 2.5) + T(x, y + 8, l, { size: 22, weight: 700, anchor: 'middle' }) + P(x, y + 48, t2, { size: 15, anchor: 'middle', w: 170 }).s;
  s += src(200, cy - 10, 'A', 'results unchanged; staff retention up');
  s += src(450, cy - 10, 'C', 'free day to plan; longer days tire pupils');
  s += src(700, cy - 10, 'B', '58% of 400 households: higher childcare costs');
  const y = cy + 160;
  s += box(30, y, 840, { head: 'Thesis (a qualified yes)', body: 'A four-day school week can protect attainment and help teachers, but it is only justified if schools address the extra childcare costs and the fatigue that longer days bring.', size: 17, fill: C.panel, edge: C.ink, sw: 3 }).s;
  return { s, h: y + 120 - y0 };
}, 'Two overlapping ovals group the fictional sources: benefits (Source A, unchanged results and better staff retention) and costs (Source B, 58 percent of households facing higher childcare costs). Source C sits in the overlap, offering both a planning day and tired pupils. Below, the qualified thesis that results.',
'Group sources by what they show, and let a source that cuts both ways sit in the overlap.', '## Worked example 1: synthesising three invented sources');
