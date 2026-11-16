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

export const slug = 'ap-english-language-and-composition-5-2-unity-coherence-study-guide';
const LESSON = 'src/content/ap-resources/english-language-and-composition/5-2-unity-coherence-study-guide.md';

// 01 Unity vs coherence
fig('01-unity-and-coherence', 'Unity and coherence', 'Staying on one idea; holding together', (y0) => {
  let s = '';
  // unity: spokes to centre, one off-topic
  s += rect(30, y0, 405, 290, C.panel, C.panelEdge, 14);
  s += T(232, y0 + 34, 'Unity', { size: 22, weight: 700, anchor: 'middle', fill: C.tealDark });
  const cx = 232, cy = y0 + 160;
  const pts = [[110, 100], [354, 100], [100, 220], [364, 220]];
  pts.forEach(([x, y]) => { s += line(cx, cy, x, y0 + y, C.tealDark, 2.5) + circ(x, y0 + y, 14, C.tealLight, C.tealDark, 2.5); });
  s += circ(cx, cy, 42, C.cream, C.ink, 3) + P(cx, cy - 4, '**claim**', { size: 15, anchor: 'middle', w: 70 }).s;
  s += circ(380, y0 + 160, 14, C.panel, C.rust, 2.5) + T(380, y0 + 196, 'off-topic', { size: 15, anchor: 'middle', fill: C.rust, weight: 700 });
  s += T(232, y0 + 270, 'every sentence serves one controlling claim', { size: 15, anchor: 'middle', fill: C.muted });
  // coherence: chain
  s += rect(465, y0, 405, 290, C.panel, C.panelEdge, 14);
  s += T(667, y0 + 34, 'Coherence', { size: 22, weight: 700, anchor: 'middle', fill: C.olive });
  for (let i = 0; i < 4; i++) {
    const x = 500 + i * 90, y = y0 + 150 + (i % 2 ? -30 : 30);
    s += circ(x, y, 22, C.cream, C.olive, 2.5) + T(x, y + 6, `S${i + 1}`, { size: 15, weight: 700, anchor: 'middle' });
    if (i < 3) { const nx = 500 + (i + 1) * 90, ny = y0 + 150 + ((i + 1) % 2 ? -30 : 30); s += arrow(x + 20, y + (ny > y ? 10 : -10), nx - 22, ny + (ny > y ? -10 : 10), { w: 2.5, color: C.olive, marker: 'ahO' }); }
  }
  s += T(667, y0 + 270, 'each idea leads logically to the next', { size: 15, anchor: 'middle', fill: C.muted });
  let y = y0 + 310;
  const t1 = table(30, y, [200, 340, 300], [
    ['Level', 'What links to what', 'The reader asks'],
    ['Sentence', 'one clause to the next', '“How does this clause relate to the last?”'],
    ['Paragraph', 'one sentence to the next', '“How does this sentence follow?”'],
    ['Text', 'one paragraph to the next', '“Why does this paragraph come here?”'],
  ], { size: 16, boldFirst: true });
  s += t1.s;
  return { s, h: 310 + t1.h };
}, 'On the left, unity: sentences link to one controlling claim while an off-topic sentence floats free. On the right, coherence: sentences S1 to S4 are chained so each leads to the next. A table gives the three levels of coherence: sentence, paragraph and text.',
'Unity keeps every sentence on one claim; coherence links each idea to the next at every level.', '## Two words, two jobs');

// 02 Known-then-new
fig('02-known-then-new', 'Known, then new', 'Each sentence starts with what the last one ended on', (y0) => {
  let s = '';
  const S = [
    ['The town', 'built a bypass.'],
    ['The bypass', 'diverted traffic from the high street.'],
    ['Without the traffic,', 'the shops found it easier to attract walkers.'],
  ];
  let y = y0;
  S.forEach(([k, n], i) => {
    const x = 30 + i * 110;
    const kw = tw(k, 19) + 30, nw = tw(n, 19) + 30;
    s += rect(x, y, kw, 50, C.tealLight, C.tealDark, 10, 2.5) + T(x + kw / 2, y + 32, k, { size: 19, anchor: 'middle' });
    s += rect(x + kw + 6, y, nw, 50, C.cream, C.olive, 10, 2.5) + T(x + kw + 6 + nw / 2, y + 32, n, { size: 19, anchor: 'middle' });
    if (i < 2) {
      const nk = tw(S[i + 1][0], 19) + 30;
      const fromX = x + kw + 6 + nw * 0.35, toX = 30 + (i + 1) * 110 + nk / 2;
      s += curve(`M${fromX},${y + 52} C${fromX},${y + 76} ${toX},${y + 64} ${toX},${y + 86}`, C.tealDark, 3, 'ahT');
    }
    y += 92;
  });
  s += rect(30, y + 4, 22, 22, C.tealLight, C.tealDark, 4, 2) + T(62, y + 21, 'known: already mentioned', { size: 16 });
  s += rect(330, y + 4, 22, 22, C.cream, C.olive, 4, 2) + T(362, y + 21, 'new: what this sentence adds', { size: 16 });
  y += 50;
  s += T(30, y + 6, 'Other links:', { size: 17, weight: 700 });
  const c = chunks(150, y - 14, 720, ['logical relationship', 'repeated key terms', 'synonyms and pronouns', 'parallel structure', 'paragraph order'].map((t2) => ({ text: t2, fill: C.panel })), { size: 16, gap: 10, rowGap: 10 });
  s += c.s;
  return { s, h: y - 14 + c.h - y0 };
}, 'Three sentences about the bypass, each split into a known part and a new part, with arrows showing that the new part of one sentence becomes the known start of the next: the town built a bypass; the bypass diverted traffic; without the traffic, the shops attracted walkers.',
'Begin with something already mentioned; end with something new.', '## How ideas link');

// 03 Problems and repairs
fig('03-what-breaks-coherence', 'What breaks unity and coherence', '', (y0) => {
  let s = '';
  const R = [
    ['Off-topic sentence', 'serves another idea', 'Cut, or move it where it belongs'],
    ['Jump between ideas', 'the next sentence seems unrelated', 'Add the missing idea, reorder, or state the relation'],
    ['Order that fights the logic', 'a conclusion before its evidence', 'Reorder'],
    ['Shifting vocabulary', '“cost”, then “price”, then “expense”', 'Keep one key term or add a clear link'],
    ['Vague pronouns', '“this” or “it” has no clear referent', 'Name the noun'],
    ['Two main ideas', 'two controlling claims in one paragraph', 'Split it'],
  ];
  let y = y0;
  R.forEach(([p, sym, fix]) => {
    const h = 66;
    s += box(30, y, 410, { body: `**${p}**\n__${sym}__`, size: 15, h, vc: true, pad: 14, edge: C.rust, dash: '6 5' }).s;
    s += arrow(446, y + h / 2, 494, y + h / 2, { w: 3.5, color: C.tealDark, marker: 'ahT' });
    s += box(500, y, 370, { body: fix, size: 16, h, vc: true, pad: 14, fill: C.tealLight, edge: C.tealDark }).s;
    y += h + 10;
  });
  return { s, h: y - 10 - y0 };
}, 'Six problems with their repairs: cut or move an off-topic sentence; add the missing idea or a transition for a jump; reorder when a conclusion precedes its evidence; keep one key term instead of shifting vocabulary; name the noun for a vague pronoun; split a paragraph with two main ideas.',
'Most failures of unity and coherence are fixed by cutting, reordering, naming or splitting.', '## What breaks unity and coherence');

// 04 Weak vs strong cycle lane paragraph
fig('04-cycle-lane-paragraph', 'Five loose facts or one linked claim', 'Weak and strong paragraphs on a cycle lane', (y0) => {
  let s = '';
  s += T(30, y0 + 12, 'Weak: all about cycling, none working together', { size: 18, weight: 700, fill: C.rust });
  const w = ['Bicycles are cheap to own.', 'The town has a new bypass.', 'Many people like to cycle at weekends.', 'A cycle lane would be inexpensive to build.', 'Some cyclists wear helmets.'];
  const c = chunks(30, y0 + 28, 840, w.map((t2) => ({ text: t2, fill: C.panel })), { size: 16, gap: 12, rowGap: 12 });
  s += c.s;
  let y = y0 + 28 + c.h + 30;
  s += T(30, y, 'Strong: one claim, each sentence picks up the last', { size: 18, weight: 700, fill: C.tealDark });
  y += 16;
  const st = [
    ['A cycle lane would be an inexpensive way to reduce traffic on the high street.', 'controlling claim'],
    ['A lane costs a small fraction of what a new road costs...', 'cost'],
    ['Once the lane exists, short journeys... become safer by bicycle.', 'effect on journeys'],
    ['As those journeys move to bicycles, the high street has fewer cars, and the bypass... has less to compensate for.', 'effect on traffic; may lead to the next point'],
  ];
  st.forEach(([t2, l], i) => {
    const b = box(30, y, 600, { body: t2, size: 16, pad: 12, fill: i ? C.tealLight : C.cream, edge: i ? C.tealDark : C.ink });
    s += b.s + P(650, y + b.h / 2 + 5, l, { size: 15, w: 220, fill: C.tealDark, weight: 700 }).s;
    if (i < 3) s += arrow(60, y + b.h + 1, 60, y + b.h + 13, { w: 2.5, color: C.tealDark, marker: 'ahT' });
    y += b.h + 14;
  });
  return { s, h: y - 14 - y0 };
}, 'The weak paragraph is five separate chips about bicycles, the bypass, weekend cycling, cost and helmets. The strong paragraph is four linked sentences: a controlling claim that a cycle lane would cheaply reduce traffic, then cost, then the effect on journeys, then the effect on traffic and the bypass.',
'A controlling claim and known-then-new links turn related facts into an argument.', '## Weak and strong versions side by side');

// 05 Canteen revision: unity test
fig('05-canteen-unity-test', 'Testing each sentence for unity', 'Worked example 1: more vegetarian meals', (y0) => {
  let s = '';
  s += box(30, y0, 840, { head: 'Controlling idea', body: '“Our school canteen should offer more vegetarian meals.”', size: 17, fill: C.cream, edge: C.ink, sw: 3 }).s;
  const R = [
    ['“Lunch is served between 12:00 and 1:00.”', 'cut', 'irrelevant to the claim'],
    ['“Vegetarian meals are often cheaper to make.”', 'keep', 'a reason for the canteen'],
    ['“Some students eat packed lunches.”', 'link', 'relevant only if linked: poor choice drives packed lunches'],
    ['“More students would buy lunch if there were more choice.”', 'keep', 'a reason'],
    ['“Kitchens must follow food-safety rules.”', 'cut', 'irrelevant unless it answers an objection'],
  ];
  let y = y0 + 96;
  const sty = { cut: ['#f6e3d8', C.rust, 'CUT'], keep: [C.tealLight, C.tealDark, 'KEEP'], link: [C.cream, C.olive, 'LINK'] };
  R.forEach(([q, k, why]) => {
    const [f, e, lab] = sty[k];
    s += box(30, y, 500, { body: q, size: 16, h: 56, vc: true, pad: 14, edge: e, dash: k === 'cut' ? '6 5' : '' }).s;
    s += rect(546, y + 10, 76, 36, f, e, 18, 2.5) + T(584, y + 34, lab, { size: 15, weight: 700, anchor: 'middle', fill: e });
    s += P(640, y + 24, why, { size: 15, w: 230, fill: C.muted }).s;
    y += 66;
  });
  y += 8;
  s += box(30, y, 840, { head: 'Reordered and linked', body: 'problem (packed lunches, lost customers) → benefit (“those students” drawn back) → cost (“because” cheaper to make)', size: 16, fill: C.tealLight, edge: C.tealDark }).s;
  return { s, h: y + 90 - y0 };
}, 'Five sentences from the canteen draft tested against the controlling idea: lunch times and food-safety rules are cut, cheaper meals and more choice are kept, and packed lunches are kept only if linked to poor choice. The revision orders problem, benefit and cost.',
'Test every sentence against the controlling idea; cut, keep or link.', '## Worked example 1: revising a paragraph for unity and coherence');

// 06 Paine: word chains
fig('06-paine-word-chains', 'How Paine holds it together', 'The American Crisis, 1776', (y0) => {
  let s = '';
  const st = [['crisis', '“These are the times that try men’s souls.”'], ['the test of character', '“...shrink from the service...; but he that stands it now...”'], ['the reward', '“...yet... the harder the conflict, the more glorious the triumph.”']];
  st.forEach(([h, q], i) => {
    const x = 30 + i * 285;
    s += box(x, y0, 270, { head: h, body: q, size: 15, headSize: 18, h: 120, vc: true, fill: C.panel, headColor: C.tealDark }).s;
    if (i < 2) s += arrow(x + 272, y0 + 60, x + 283, y0 + 60, { w: 3 });
  });
  let y = y0 + 150;
  s += T(30, y + 4, 'Chain of difficulty', { size: 17, weight: 700, fill: C.rust });
  const d = chunks(230, y - 18, 640, ['times', 'crisis', 'stands it', 'conflict'].map((t2) => ({ text: t2, fill: '#f6e3d8' })), { size: 17, gap: 24 });
  s += d.s;
  y += 56;
  s += T(30, y + 4, 'Chain of reward', { size: 17, weight: 700, fill: C.tealDark });
  const r = chunks(230, y - 18, 640, ['glorious', 'triumph'].map((t2) => ({ text: t2, fill: C.tealLight })), { size: 17, gap: 24 });
  s += r.s;
  y += 50;
  s += box(30, y, 840, { body: 'The parallel **“the harder the conflict, the more glorious the triumph”** links the two chains; “but” and “yet” turn each clause toward the next idea.', size: 16, align: 'middle', fill: C.cream, edge: C.olive }).s;
  return { s, h: y + 56 - y0 };
}, 'Paine’s opening moves from the crisis, to the test of character, to the reward. Two word chains run through it: difficulty (times, crisis, stands it, conflict) and reward (glorious, triumph), joined by the parallel “the harder the conflict, the more glorious the triumph”.',
'Crisis, test, reward: linked by “but”, “yet” and two chains of related words.', '## Worked example 2: how coherence works in a published passage');
