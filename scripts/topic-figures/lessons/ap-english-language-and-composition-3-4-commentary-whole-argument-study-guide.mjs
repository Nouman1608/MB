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

export const slug = 'ap-english-language-and-composition-3-4-commentary-whole-argument-study-guide';
const LESSON = 'src/content/ap-resources/english-language-and-composition/3-4-commentary-whole-argument-study-guide.md';

// 01 Three questions as widening rings
fig('01-three-questions-rings', 'Three questions for every piece of evidence', 'From local to argument-wide', (y0) => {
  let s = '';
  const cx = 300, cy = y0 + 230;
  s += circ(cx, cy, 220, C.tealLight, C.tealDark, 2.5);
  s += circ(cx, cy, 145, C.panel, C.tealDark, 2.5);
  s += circ(cx, cy, 70, C.cream, C.ink, 3);
  s += T(cx, cy + 7, 'Evidence', { size: 19, weight: 700, anchor: 'middle' });
  s += T(cx, cy - 100, 'paragraph claim', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += T(cx, cy - 175, 'thesis and next step', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  const q = [
    ['1  What does it show?', 'explain', cy - 0, 70],
    ['2  How does it support this paragraph’s claim?', 'relevance', cy + 40, 145],
    ['3  Why does it matter for the thesis and the next step?', 'significance', cy + 80, 220],
  ];
  let by = y0 + 30;
  q.forEach(([h, tag, yy, r], i) => {
    const b = box(560, by, 310, { head: h, body: `{{${tag}}}`, size: 16, headSize: 18, pad: 14 });
    s += b.s;
    s += line(cx + r * 0.9, cy - r * 0.43 + i * 0, 556, by + b.h / 2, C.ink, 2, '5 4');
    by += b.h + 40;
  });
  return { s, h: 460 };
}, 'Three nested rings: evidence at the centre, the paragraph’s claim around it, and the thesis and next step on the outside. Three questions match the rings: what does it show (explain), how does it support this paragraph’s claim (relevance), and why does it matter for the thesis (significance).',
'The first question is local; the third looks across the whole argument.', '## From paragraph commentary to argument-wide commentary');

// 02 Relevance vs significance
fig('02-relevance-vs-significance', 'Relevance and significance', 'Thesis: libraries are essential public places', (y0) => {
  let s = '';
  s += box(30, y0 + 120, 260, { head: 'Evidence', body: 'a count of evening visits by teenagers', align: 'middle', fill: C.cream, edge: C.ink, sw: 3, h: 120, vc: true }).s;
  s += box(470, y0, 400, { head: 'Paragraph claim', body: 'young people rely on evening hours', align: 'middle', fill: C.panel, edge: C.tealDark, h: 100, vc: true }).s;
  s += box(470, y0 + 260, 400, { head: 'Thesis', body: 'libraries are essential public places', align: 'middle', fill: C.tealLight, edge: C.tealDark, h: 100, vc: true }).s;
  s += curve(`M292,${y0 + 160} C380,${y0 + 140} 380,${y0 + 60} 462,${y0 + 52}`, C.tealDark, 4, 'ahT');
  s += curve(`M292,${y0 + 200} C380,${y0 + 220} 380,${y0 + 300} 462,${y0 + 308}`, C.olive, 4, 'ahO');
  s += box(300, y0 + 64, 150, { body: '**Relevance**\n“Does it bear directly on the point?”', size: 15, pad: 10, fill: C.panel, edge: C.tealDark }).s;
  s += box(300, y0 + 222, 150, { body: '**Significance**\n“So what for the thesis?”', size: 15, pad: 10, fill: C.panel, edge: C.olive }).s;
  const y = y0 + 390;
  s += box(30, y, 840, { body: 'The count matters because it shows the library serves people who have **nowhere else to go**: the thesis’s central idea. Evidence can be relevant yet insignificant; choose evidence that is both, and **say so**.', size: 16, fill: C.panel, edge: C.olive }).s;
  return { s, h: 390 + 80 };
}, 'A count of teenagers’ evening visits connects by one arrow to the paragraph claim that young people rely on evening hours (relevance) and by another to the thesis that libraries are essential public places (significance), because it shows the library serves people with nowhere else to go.',
'Relevance links evidence to the paragraph; significance links it to the thesis.', '## Relevance and significance');

// 03 Four levels mapped onto an essay
fig('03-four-levels-of-commentary', 'Four levels of commentary', 'Where each level sits in an argument', (y0) => {
  let s = '';
  const px = 30, pw = 300;
  const blocks = [['¶ body', y0, 150], ['¶ body', y0 + 190, 150], ['Conclusion', y0 + 380, 90]];
  blocks.forEach(([l, y, h]) => { s += rect(px, y, pw, h, C.panel, C.ink, 8, 2.5) + T(px + 14, y + 24, l, { size: 15, weight: 700, fill: C.muted }); });
  const bar = (y, w, fill) => `<rect x="${px + 14}" y="${y}" width="${w}" height="10" rx="4" fill="${fill}"/>`;
  s += bar(y0 + 40, 260, C.panelEdge) + bar(y0 + 58, 200, C.mustard) + bar(y0 + 76, 250, C.teal) + bar(y0 + 94, 230, C.teal) + bar(y0 + 112, 240, C.tealDark) + bar(y0 + 130, 150, C.olive);
  s += bar(y0 + 230, 260, C.panelEdge) + bar(y0 + 248, 210, C.mustard) + bar(y0 + 266, 250, C.teal) + bar(y0 + 284, 240, C.tealDark);
  s += bar(y0 + 410, 260, C.rust) + bar(y0 + 428, 220, C.rust) + bar(y0 + 446, 160, C.panelEdge);
  const L = [
    [y0 + 84, C.teal, 'Evidence-level', 'right after a quotation, fact or example: explains what it shows', '“...more than half of the evening users have disappeared.”'],
    [y0 + 117, C.tealDark, 'Paragraph-level', 'end of a paragraph: draws the point, ties it to the claim', '“The loss falls on those with no alternative.”'],
    [y0 + 135, C.olive, 'Bridge-level', 'end of one paragraph or start of the next: shows the path', '“...the next question is why they have no alternative.”'],
    [y0 + 420, C.rust, 'Thesis-level', 'conclusion and key turns: shows how the steps add up', '“Taken together, these losses show that the library is not a luxury.”'],
  ];
  const ys = [y0, y0 + 112, y0 + 224, y0 + 356];
  L.forEach(([ty, col, h, where, ex], i) => {
    const by = ys[i];
    const b = box(400, by, 470, { head: h, body: `${where}\n__${ex}__`, size: 15, headSize: 18, pad: 12, bar: col });
    s += b.s;
    s += line(px + pw - 20, ty, 396, by + b.h / 2, col, 2.5);
  });
  s += `<rect x="${px + 14}" y="${y0 + 486}" width="30" height="10" rx="4" fill="${C.mustard}"/>` + T(px + 52, y0 + 496, 'evidence', { size: 15 });
  return { s, h: 500 };
}, 'A schematic essay of two body paragraphs and a conclusion, with commentary lines colour-coded and linked to four levels: evidence-level commentary right after the evidence, paragraph-level at the end of a paragraph, bridge-level linking to the next paragraph, and thesis-level in the conclusion. Each has the lesson’s example.',
'Evidence, paragraph, bridge and thesis levels keep the line of reasoning visible.', '## Levels of commentary within an argument');

// 04 So what? ladder
fig('04-so-what-ladder', 'Ask “So what?” until you reach the thesis', '', (y0) => {
  let s = '';
  const st = [
    ['Evidence', '118 of 200 teenagers said the library was the only quiet place they could work.', C.cream, C.ink],
    ['So what?', 'A quiet room is the condition of doing homework at all.', C.panel, C.tealDark],
    ['So what?', 'Every hour the doors are shut is an hour of study taken from them.', C.panel, C.tealDark],
    ['So what?', 'The library’s hours decide whether some pupils can keep up.', C.panel, C.tealDark],
    ['Thesis reached', 'The library is the one public place where people without money can belong.', C.tealLight, C.tealDark],
  ];
  let y = y0;
  st.forEach(([h, b, f, e], i) => {
    const x = 30 + i * 70, w = 560;
    const bx = box(x, y, w, { head: h, body: b, size: 16, headSize: 18, fill: f, edge: e, headColor: i === 0 ? C.ink : C.tealDark, pad: 14, sw: i === 4 ? 3 : 2.5 });
    s += bx.s;
    if (i < st.length - 1) s += curve(`M${x + w + 4},${y + bx.h / 2} C${x + w + 50},${y + bx.h / 2} ${x + w + 60},${y + bx.h + 30} ${x + w + 40},${y + bx.h + 22}`, C.ink, 3);
    y += bx.h + 16;
  });
  y += 4;
  s += box(30, y, 840, { body: 'Rule of thumb for analytical writing: commentary should usually be **at least as long** as the evidence it explains.', size: 16, align: 'middle', fill: C.cream, edge: C.olive }).s;
  return { s, h: y + 54 - y0 };
}, 'A descending ladder starts from the survey figure (118 of 200 teenagers) and asks “So what?” three times: a quiet room is the condition of homework; shut hours take study away; the hours decide whether pupils keep up. It ends at the thesis that the library is the one place where people without money can belong.',
'Keep asking “So what?” after each piece of evidence; stop when the answer reaches the thesis.', '## Techniques for keeping an argument connected');

// 05 Douglass yours/mine
fig('05-douglass-yours-mine', '“Yours, not mine”', 'Douglass, Rochester, 5 July 1852', (y0) => {
  let s = '';
  s += rect(30, y0, 410, 300, C.cream, C.olive, 14, 2.5) + rect(460, y0, 410, 300, C.panel, C.ink, 14, 2.5);
  s += T(235, y0 + 36, 'YOU (the audience)', { size: 18, weight: 700, anchor: 'middle', fill: C.olive });
  s += T(665, y0 + 36, 'ME (the speaker)', { size: 18, weight: 700, anchor: 'middle' });
  const pairs = [['“This Fourth July is yours,”', '“not mine.”'], ['“You may rejoice,”', '“I must mourn.”'], ['inheritance “shared by you,”', '“not by me.”'], ['sunlight: “life and healing”', '“stripes and death”']];
  pairs.forEach(([a, b], i) => {
    const y = y0 + 80 + i * 56;
    s += T(235, y, a, { size: 18, anchor: 'middle' });
    s += T(665, y, b, { size: 18, anchor: 'middle', weight: 700 });
    s += line(410, y - 6, 490, y - 6, C.panelEdge, 2, '4 4');
  });
  const y = y0 + 324;
  const r = row(30, y, 840, 16, [
    { head: 'Relevance', body: 'The pronoun contrast claims the holiday does not include him.', size: 16 },
    { head: 'Significance', body: 'One day, opposite meanings: the nation’s ideals contradict its practice.', size: 16, fill: C.tealLight, edge: C.tealDark },
    { head: 'Driving question', body: 'What, to the slave, is the Fourth of July? Each sentence answers it more fully.', size: 16 },
  ]);
  s += r.s;
  return { s, h: 324 + r.h };
}, 'Two columns split Douglass’s sentences between the audience and the speaker: “yours” and “not mine”, “you may rejoice” and “I must mourn”, an inheritance “shared by you, not by me”, and sunlight bringing “life and healing” to them but “stripes and death” to him. Below, how the contrast serves relevance, significance and the speech’s driving question.',
'Each sentence links an observation back to the question that drives the speech.', '## A public-domain example: Douglass\'s commentary on an occasion (1852)');

// 06 Labelled paragraph
fig('06-paragraph-levels-labelled', 'Commentary at four levels, labelled', 'Worked example 1: the library argument', (y0) => {
  let s = '';
  s += box(30, y0, 840, { body: '**Thesis:** The library is not a luxury but the one public place where people without money can belong.', size: 16, fill: C.tealLight, edge: C.tealDark, align: 'middle' }).s;
  const parts = [
    ['Opening hours matter most to those with the fewest alternatives.', 'Topic sentence', C.panel, C.ink],
    ['In the autumn survey, 118 of 200 teenagers said the library was the only quiet place they could work.', 'Evidence', C.cream, C.olive],
    ['A quiet room is not a convenience to these students; it is the condition of doing homework at all, which means that every hour the doors are shut is an hour of study taken from them.', 'Evidence-level', C.tealLight, C.tealDark],
    ['The library’s hours therefore decide whether some pupils can keep up.', 'Paragraph-level', C.tealLight, C.tealDark],
    ['But if teenagers have no other place, who else does the same?', 'Bridge-level', C.panel, C.tealDark],
  ];
  let y = y0 + 70;
  parts.forEach(([txt, lab, f, e]) => {
    const b = box(30, y, 600, { body: txt, size: 16, fill: f, edge: e, pad: 12 });
    s += b.s + T(650, y + b.h / 2 + 6, lab, { size: 17, weight: 700, fill: e === C.ink ? C.ink : e });
    y += b.h + 8;
  });
  y += 12;
  s += box(30, y, 840, { body: '**Check:** read only the teal commentary. If it still gives a clear path, the commentary is working across the argument.', size: 16, align: 'middle', fill: C.panel, edge: C.olive, dash: '7 5' }).s;
  return { s, h: y + 56 - y0 };
}, 'The library paragraph split into five labelled parts: the topic sentence, the survey evidence, evidence-level commentary explaining why a quiet room matters, paragraph-level commentary on keeping up, and a bridge-level question leading to the next paragraph on pensioners.',
'Reading only the commentary should still give a clear path through the argument.', '## Worked example 1: commentary at four levels (written by Marlbridge)');
