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

export const slug = 'ap-english-language-5-4-transitional-elements-study-guide';
const LESSON = 'src/content/ap-resources/english-language-and-composition/5-4-transitional-elements-study-guide.md';

// 01 Relationship families as signposts
fig('01-transition-families', 'A transition is a promise', 'Each family tells the reader what comes next', (y0) => {
  let s = '';
  const F = [
    ['Addition', 'also, in addition, moreover, furthermore', 'a further point of the same kind', '→', C.tealLight],
    ['Contrast', 'but, however, in contrast, yet', 'an idea that pulls the other way', '↩', '#f6e3d8'],
    ['Concession', 'although, admittedly, granted', 'a concession, then the claim again', '⤳', C.cream],
    ['Cause or result', 'because, therefore, consequently', 'an explanation or consequence', '⇒', C.tealLight],
    ['Example', 'for instance, such as, to illustrate', 'a specific case', '↓', C.panel],
    ['Sequence', 'first, next, then, finally', 'a later step in an order', '1·2·3', C.panel],
    ['Emphasis', 'indeed, in fact, above all', 'a stronger point', '↑', C.cream],
    ['Similarity', 'similarly, likewise', 'a parallel idea', '=', C.tealLight],
    ['Summary', 'in short, in sum, to conclude', 'a short restatement', '∑', C.panel],
    ['Qualification', 'at least, in part, unless', 'a limit on the claim', '⊂', C.cream],
  ];
  let y = y0;
  for (let i = 0; i < F.length; i += 2) {
    F.slice(i, i + 2).forEach(([h, w, exp, sym, f], j) => {
      const x = 30 + j * 428;
      s += rect(x, y, 412, 92, C.panel, C.panelEdge, 12);
      s += rect(x + 10, y + 10, 64, 72, f, C.ink, 10, 2) + T(x + 42, y + 55, sym, { size: sym.length > 2 ? 16 : 26, weight: 700, anchor: 'middle' });
      s += T(x + 88, y + 30, h, { size: 18, weight: 700 });
      s += T(x + 88, y + 54, w, { size: 15, fill: C.tealDark, italic: true });
      s += T(x + 88, y + 77, `expect: ${exp}`, { size: 15, fill: C.muted });
    });
    y += 104;
  }
  return { s, h: y - 12 - y0 };
}, 'Ten families of transitions, each with a symbol, examples and what the reader expects next: addition, contrast, concession, cause or result, example, sequence, emphasis, similarity, summary and qualification.',
'Choose the relationship first, then the word that names it.', '## Relationships and the words that signal them');

// 02 Same facts, different transition
fig('02-transition-changes-meaning', 'The wrong word reverses the meaning', '', (y0) => {
  let s = '';
  const pair = (y, t2, col, mark, read) => {
    let r = box(30, y, 260, { body: 'The council cut bus fares.', size: 17, align: 'middle', h: 60, vc: true }).s;
    r += rect(310, y + 8, 170, 44, col, C.ink, 22, 2.5) + T(395, y + 37, t2, { size: 18, weight: 700, anchor: 'middle' });
    r += arrow(292, y + 30, 306, y + 30, { w: 2.5 }) + arrow(482, y + 30, 496, y + 30, { w: 2.5 });
    r += box(500, y, 200, { body: mark, size: 17, align: 'middle', h: 60, vc: true }).s;
    r += P(720, y + 26, read, { size: 15, w: 150, fill: C.muted }).s;
    return r;
  };
  s += pair(y0, 'As a result,', C.tealLight, 'ridership rose.', 'a consequence');
  s += pair(y0 + 76, 'However,', '#f6e3d8', 'ridership fell.', 'against expectation');
  let y = y0 + 170;
  s += T(30, y, 'A transition is wrong if the relationship does not exist', { size: 18, weight: 700, fill: C.rust });
  y += 16;
  const c = chunks(30, y, 840, [{ text: 'The shop sells fruit.', fill: C.panel }, { text: 'Therefore,', fill: '#f6e3d8', label: 'promises a result', labelColor: C.rust }, { text: 'it is on Park Road.', fill: C.panel }], { size: 18, gap: 8 });
  s += c.s;
  y += c.h + 20;
  const r = row(30, y, 840, 16, [
    { head: '“moreover”', body: 'adds a point of the same kind', size: 15, align: 'middle' },
    { head: '“however”', body: 'reverses direction', size: 15, align: 'middle' },
    { head: '“in fact”', body: 'intensifies', size: 15, align: 'middle' },
    { head: '“for example”', body: 'narrows to a case', size: 15, align: 'middle' },
  ]);
  s += r.s;
  return { s, h: y + r.h - y0 };
}, 'The same first fact, the council cut bus fares, followed by “As a result, ridership rose” and “However, ridership fell”: the transition tells the reader how to take the second idea. Below, “The shop sells fruit. Therefore, it is on Park Road” is wrong because no result exists.',
'A transition only reveals logic that is already there; a false one misleads.', '## Matching the transition to the logic');

// 03 Evidence transitions as a weighing scale
fig('03-transitions-weigh-evidence', 'Transitions that frame evidence', 'They tell the reader what kind of evidence comes next and how to weigh it', (y0) => {
  let s = '';
  const R = [
    ['“For instance,”', 'an example of the claim', C.panel],
    ['“According to a recent survey,”', 'a source: consider its reliability', C.panel],
    ['“A second case supports this:”', 'more of the same kind', C.tealLight],
    ['“In contrast, a study from another region shows...”', 'evidence that complicates the first', '#f6e3d8'],
    ['“More telling still,”', 'stronger than the last', C.teal],
    ['“Even so,”', 'evidence that survives a challenge', C.cream],
  ];
  let y = y0;
  R.forEach(([t2, d, f]) => {
    s += box(30, y, 470, { body: t2, size: 17, h: 54, vc: true, pad: 14, fill: f }).s;
    s += arrow(506, y + 27, 546, y + 27, { w: 3 });
    s += T(556, y + 33, d, { size: 17 });
    y += 64;
  });
  s += box(30, y + 6, 840, { body: 'Without signals, a string of facts leaves the reader unsure which matters most or how they fit.', size: 16, align: 'middle', fill: C.panel, edge: C.olive, dash: '7 5' }).s;
  return { s, h: y + 60 - y0 };
}, 'Six evidence-framing transitions with what each signals: “For instance” an example, “According to a recent survey” a source to weigh, “A second case supports this” more of the same, “In contrast” complicating evidence, “More telling still” stronger evidence, and “Even so” evidence that survives a challenge.',
'Evidence transitions help the reader weigh and connect each piece.', '## Transitions that introduce and relate evidence');

// 04 Looking back, looking forward
fig('04-look-back-look-forward', 'Bigger transitions', 'A sentence or paragraph that looks back and looks forward', (y0) => {
  let s = '';
  const pr = (x, y, lab, f, e) => box(x, y, 300, { body: lab, size: 17, align: 'middle', h: 110, vc: true, fill: f, edge: e }).s;
  const ex = [
    ['last paragraph: money', '“Cost is only half the story.”', 'next paragraph: something else'],
    ['the case so far: what the shops gain', '“So far, the case has rested on what the shops gain. The next question is what the town loses.”', 'what the town loses'],
    ['what the lane costs', '“Having seen what the lane costs, we must ask what it saves.”', 'what it saves'],
  ];
  let y = y0;
  ex.forEach(([a, t2, b]) => {
    s += box(30, y, 220, { body: a, size: 15, align: 'middle', h: 96, vc: true, fill: C.panel }).s;
    s += box(650, y, 220, { body: b, size: 15, align: 'middle', h: 96, vc: true, fill: C.panel }).s;
    s += box(280, y, 340, { body: t2, size: 16, align: 'middle', h: 96, vc: true, fill: C.cream, edge: C.olive }).s;
    s += arrow(276, y + 48, 254, y + 48, { w: 3, color: C.tealDark, marker: 'ahT' }) + arrow(624, y + 48, 646, y + 48, { w: 3, color: C.tealDark, marker: 'ahT' });
    y += 110;
  });
  s += T(140, y + 12, '← looks back', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(760, y + 12, 'looks forward →', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  return { s, h: y + 20 - y0 };
}, 'Three larger transitions, each in the centre with arrows back and forward: “Cost is only half the story” links money to the next topic; a short paragraph turns from what the shops gain to what the town loses; “Having seen what the lane costs, we must ask what it saves” links cost to savings.',
'Restate the last idea and introduce the next: a reliable link between paragraphs.', '## Bigger transitions');

// 05 Skate park weak vs strong
fig('05-skate-park-transitions', 'Placed side by side, or linked', 'Weak and strong versions of the skate-park paragraph', (y0) => {
  let s = '';
  s += T(30, y0 + 12, 'Weak: the reader must guess', { size: 18, weight: 700, fill: C.rust });
  const w = ['The town built a skate park.', 'Teenagers have somewhere to go in the evenings.', 'Crime fell.', 'People complained about the noise.', 'The council kept the park open.'];
  const c = chunks(30, y0 + 28, 840, w.map((t2) => ({ text: t2, fill: C.panel })), { size: 16, gap: 22, rowGap: 12 });
  s += c.s;
  let y = y0 + 28 + c.h + 30;
  s += T(30, y, 'Strong: each relationship named', { size: 18, weight: 700, fill: C.tealDark });
  y += 16;
  const c2 = chunks(30, y, 840, [
    { text: 'The town built a skate park, and', fill: C.panel },
    { text: 'as a result', fill: C.mustard, label: 'cause' },
    { text: 'teenagers have somewhere to go in the evenings.', fill: C.panel },
    { text: 'In the year after it opened,', fill: C.tealLight, label: 'frames evidence' },
    { text: 'crime fell,', fill: C.panel },
    { text: 'which suggests', fill: C.tealLight, label: 'frames evidence' },
    { text: 'that the park may have drawn young people away from less supervised places.', fill: C.panel },
    { text: 'Some residents,', fill: C.panel },
    { text: 'however,', fill: '#f6e3d8', label: 'contrast' },
    { text: 'complained about the noise.', fill: C.panel },
    { text: 'Even so,', fill: C.cream, label: 'concession' },
    { text: 'the council kept the park open,', fill: C.panel },
    { text: 'since', fill: C.mustard, label: 'reasoning' },
    { text: 'the benefits seemed to outweigh the nuisance.', fill: C.panel },
  ], { size: 16, gap: 6, rowGap: 22, minLabelW: 60 });
  s += c2.s;
  return { s, h: y + c2.h - y0 };
}, 'The weak skate-park paragraph is five unconnected sentences. The strong version labels each transition: “as a result” (cause), “In the year after it opened” and “which suggests” (framing evidence), “however” (contrast), “Even so” (concession) and “since” (reasoning).',
'Name each relationship and the reader no longer has to guess.', '## Weak and strong versions side by side');

// 06 Lincoln: agreement to division
fig('06-lincoln-and-the-war-came', 'From agreement to division', 'Lincoln, Second Inaugural Address, 1865', (y0) => {
  let s = '';
  s += box(250, y0, 400, { head: 'Shared position', body: '“Both parties deprecated war;”', size: 17, align: 'middle', fill: C.panel, h: 90, vc: true }).s;
  s += rect(400, y0 + 106, 100, 40, C.mustard, C.ink, 20, 2.5) + T(450, y0 + 132, 'but', { size: 18, weight: 700, anchor: 'middle' });
  s += line(450, y0 + 92, 450, y0 + 104, C.ink, 3);
  const y = y0 + 186;
  s += curve(`M420,${y0 + 148} C380,${y - 20} 260,${y - 30} 230,${y - 4}`, C.ink, 3);
  s += curve(`M480,${y0 + 148} C520,${y - 20} 640,${y - 30} 670,${y - 4}`, C.ink, 3);
  s += box(30, y, 400, { body: '“one of them would make war **rather than** let the nation survive;”', size: 17, align: 'middle', fill: '#f6e3d8', edge: C.rust, h: 90, vc: true }).s;
  s += box(470, y, 400, { body: '“and the other would accept war **rather than** let it perish.”', size: 17, align: 'middle', fill: C.tealLight, edge: C.tealDark, h: 90, vc: true }).s;
  s += arrow(230, y + 94, 420, y + 150, { w: 3 }) + arrow(670, y + 94, 480, y + 150, { w: 3 });
  s += box(300, y + 156, 300, { body: '“**And** the war came.”', size: 21, align: 'middle', fill: C.cream, edge: C.ink, sw: 3, h: 70, vc: true }).s;
  s += P(450, y + 258, '“But” turns agreement into division; matching “rather than” clauses set out opposite choices; the plain “And” gives the outcome a flat, fateful tone.', { size: 16, anchor: 'middle', w: 820, fill: C.muted }).s;
  return { s, h: y + 290 - y0 };
}, 'Lincoln’s sentences as a branching diagram: the shared position “Both parties deprecated war” splits at “but” into two matching “rather than” clauses, one making war and one accepting war, which converge on the short sentence “And the war came.”',
'“But” divides, “rather than” matches, and “And” makes the war feel inevitable.', '## Worked example 2: transitions in a published passage');
