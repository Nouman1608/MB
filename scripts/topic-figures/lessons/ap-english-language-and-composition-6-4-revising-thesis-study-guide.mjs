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

export const slug = 'ap-english-language-and-composition-6-4-revising-thesis-study-guide';
const LESSON = 'src/content/ap-resources/english-language-and-composition/6-4-revising-thesis-study-guide.md';

// 01 Six revisions radiating from a starting thesis
fig('01-six-ways-to-revise', 'Six ways a thesis can change', 'Starting from “Schools should end homework.”', (y0) => {
  let s = '';
  const cx = 450, cy = y0 + 268;
  const R = [
    ['Narrow', '“...for children under eleven.”', 30, y0],
    ['Qualify', '“...should probably limit homework, since the evidence on benefits is mixed.”', 620, y0],
    ['Add a condition', '“...unless it is short and regular practice.”', 30, y0 + 200],
    ['Broaden', '“...reconsider all out-of-school work, not only homework.”', 620, y0 + 200],
    ['Reverse', '“Schools should keep homework, but cap it.”', 30, y0 + 400],
    ['Refocus', '“The question is not whether to set homework but how much.”', 620, y0 + 400],
  ];
  R.forEach(([h, b, x, y]) => {
    s += line(cx, cy, x < 450 ? x + 250 : x, y + 68, C.panelEdge, 2.5);
  });
  R.forEach(([h, b, x, y]) => {
    s += box(x, y, 250, { head: h, body: b, size: 15, headSize: 18, h: 136, vc: true, pad: 14, fill: C.panel, edge: C.tealDark, headColor: C.tealDark }).s;
  });
  s += box(cx - 130, cy - 55, 260, { body: '**“Schools should end homework.”**', size: 18, align: 'middle', fill: C.cream, edge: C.ink, sw: 3, h: 110, vc: true }).s;
  s += box(30, y0 + 560, 840, { body: 'The revision must still be a defensible, specific claim. [[“Homework is complicated”]] is not a revision; it is a retreat.', size: 16, align: 'middle', fill: C.panel, edge: C.rust, dash: '7 5' }).s;
  return { s, h: 616 };
}, 'The thesis “Schools should end homework” sits in the centre with six revisions around it: narrow (for children under eleven), qualify (probably limit), add a condition (unless short, regular practice), broaden (all out-of-school work), reverse (keep but cap) and refocus (how much, not whether).',
'Narrow, qualify, add a condition, broaden, reverse or refocus, but keep a claim.', '## Ways a thesis can change');

// 02 Seven-step method as a loop
fig('02-revision-method', 'A method for revising', 'The evidence shapes the claim, not the reverse', (y0) => {
  let s = '';
  const st = ['State the current thesis', 'List the evidence: supports, contradicts or complicates?', 'Test: does it say more than the evidence shows, or ignore evidence?', 'Choose the revision', 'Write the new thesis: a specific claim that fits', 'Revise the line of reasoning: topic sentences, order', 'Check commentary against the new thesis'];
  let y = y0;
  st.forEach((t2, i) => {
    const b = box(110, y, 600, { body: t2, size: 16, pad: 12, h: 50, vc: true, fill: i === 4 ? C.cream : i >= 5 ? C.tealLight : C.panel, edge: i === 4 ? C.ink : i >= 5 ? C.tealDark : C.panelEdge });
    s += b.s + num(70, y + 25, i + 1, i === 4 ? C.mustard : C.cream, 17);
    if (i < 6) s += arrow(70, y + 44, 70, y + 58, { w: 2.5 });
    y += 62;
  });
  s += curve(`M714,${y0 + y - y0 - 40} C770,${y - 60} 770,${y0 + 30} 714,${y0 + 25}`, C.tealDark, 3, 'ahT', '7 5');
  s += P(830, y0 + 200, 'repeat as new evidence arrives', { size: 15, anchor: 'middle', w: 90, fill: C.tealDark, weight: 700 }).s;
  s += box(30, y + 6, 840, { body: '[[Fooling yourself:]] selecting only evidence that suits your first idea, and discarding the rest. A sceptical reader will see it.', size: 16, align: 'middle', edge: C.rust, dash: '7 5' }).s;
  return { s, h: y + 60 - y0 };
}, 'Seven numbered steps: state the current thesis, list the evidence, test the thesis, choose a revision, write the new thesis, revise the line of reasoning, and check commentary, with a loop back to the start as new evidence arrives. A warning against keeping only the evidence that suits the first idea.',
'Test the thesis against all the evidence, then revise the claim and the paragraphs.', '## A method for revising');

// 03 Three responses
fig('03-three-responses', 'Three responses to contrary evidence', 'New evidence: a study shows homework helps in maths', (y0) => {
  let s = '';
  const R = [
    ['Ignore it', 'keeps “Schools should end homework.”', 'Weak: blind to the evidence', '#f6e3d8', C.rust],
    ['Abandon the argument', '“Homework is neither good nor bad.”', 'Weak: no claim left', '#f6e3d8', C.rust],
    ['Revise the claim', '“Schools should end homework for young children and limit it for older students to short, regular practice in subjects like maths, where it appears to help.”', 'Strong: clearer, more precise, more convincing', C.tealLight, C.tealDark],
  ];
  s += box(300, y0, 300, { body: '**new evidence**', size: 17, align: 'middle', fill: C.cream, edge: C.ink, h: 50, vc: true }).s;
  let y = y0 + 90;
  const hs = R.map(([h, b, v]) => box(0, 0, 270, { head: h, body: `${b}\n__${v}__`, size: 15, headSize: 18, pad: 14 }).h);
  const H = Math.max(...hs);
  R.forEach(([h, b, v, f, e], i) => {
    const x = 30 + i * 285;
    s += arrow(450, y0 + 52, x + 135, y - 6, { w: 3, color: e, marker: e === C.rust ? 'ahR' : 'ahT', dash: e === C.rust ? '7 5' : '' });
    s += box(x, y, 270, { head: h, body: `${b}\n__${v}__`, size: 15, headSize: 18, pad: 14, h: H, fill: f, edge: e, headColor: e, sw: i === 2 ? 3 : 2.5 }).s;
  });
  return { s, h: 90 + H };
}, 'New evidence that homework helps in maths leads three ways: ignoring it and keeping the thesis (weak), abandoning the argument with “Homework is neither good nor bad” (weak), or revising to end homework for young children and limit it to short practice for older students (strong).',
'Use contrary evidence to make the claim more precise, not to drop it.', '## Weak and strong responses to new evidence');

// 04 Evidence test + new plan
fig('04-homework-revision', 'Testing the thesis against the evidence', 'Worked example 1 (invented evidence)', (y0) => {
  let s = '';
  s += box(30, y0, 840, { body: 'Original thesis: **“Schools should end homework.”**', size: 17, align: 'middle', edge: C.rust, dash: '7 5', h: 50, vc: true }).s;
  const E = [
    ['E1', 'Maths: short, regular practice improved pupils more', 'contradicts', '#f6e3d8', C.rust],
    ['E2', 'Over 90 minutes a night: markedly less sleep', 'supports a claim about excess', C.cream, C.olive],
    ['E3', 'No homework under eleven: no fall in results', 'supports for young children', C.tealLight, C.tealDark],
  ];
  let y = y0 + 70;
  E.forEach(([l, t2, v, f, e]) => {
    s += rect(30, y, 60, 50, f, e, 10, 2.5) + T(60, y + 32, l, { size: 18, weight: 700, anchor: 'middle' });
    s += box(100, y, 470, { body: t2, size: 15, h: 50, vc: true, pad: 12 }).s;
    s += rect(590, y + 5, 280, 40, f, e, 20, 2) + T(730, y + 31, v, { size: 15, weight: 700, anchor: 'middle', fill: e });
    y += 60;
  });
  y += 10;
  s += box(30, y, 840, { head: 'Revised thesis (narrow + condition)', body: '“Schools should end homework for children under eleven and, for older students, limit it to short, regular practice, because the evidence suggests that long homework costs sleep while brief practice appears to help in subjects such as mathematics.”', size: 16, fill: C.panel, edge: C.ink, sw: 3 }).s;
  y += 150;
  s += T(30, y, 'New line of reasoning', { size: 17, weight: 700 });
  const r = row(30, y + 14, 840, 14, [
    { head: '¶1  E2', body: 'long homework costs sleep', size: 15, align: 'middle', fill: C.cream, edge: C.olive },
    { head: '¶2  E3', body: 'young children lose nothing', size: 15, align: 'middle', fill: C.tealLight, edge: C.tealDark },
    { head: '¶3  E1', body: 'short practice helps in maths, so keep it', size: 15, align: 'middle', fill: '#f6e3d8', edge: C.rust },
  ]);
  s += r.s;
  return { s, h: y + 14 + r.h - y0 };
}, 'Three pieces of invented evidence tested against “Schools should end homework”: E1 (maths practice helps) contradicts it, E2 (long homework costs sleep) supports a claim about excess, E3 (no fall in results under eleven) supports ending it for young children. The revised thesis narrows and adds a condition, and the new paragraphs follow E2, E3, E1.',
'The evidence that first damaged the argument now supports its limit.', '## Worked example 1: revising a thesis');

// 05 Before/after in passage
fig('05-car-park-revision', 'Noticing a revision in a text', 'Worked example 2: the central car park', (y0) => {
  let s = '';
  const h = 120;
  s += box(30, y0, 250, { head: 'Original thesis', body: '“a town should simply close its central car park”', size: 15, headSize: 17, h, vc: true, align: 'middle' }).s;
  s += box(325, y0, 250, { head: 'New evidence', body: 'a planner’s account: shops at the edge of the new square lost trade', size: 15, headSize: 17, h, vc: true, align: 'middle', fill: '#f6e3d8', edge: C.rust, headColor: C.rust }).s;
  s += box(620, y0, 250, { head: 'Revised thesis', body: '“close, **but only if** the square is designed around the shops”', size: 15, headSize: 17, h, vc: true, align: 'middle', fill: C.tealLight, edge: C.tealDark, headColor: C.tealDark }).s;
  s += arrow(284, y0 + h / 2, 319, y0 + h / 2, { w: 3.5 }) + arrow(579, y0 + h / 2, 614, y0 + h / 2, { w: 3.5 });
  const r = row(30, y0 + h + 26, 840, 24, [
    { head: 'Type of revision', body: 'adds a condition while keeping the original direction', size: 16 },
    { head: 'Effect on the reasoning', body: 'must now show how the square can protect the shops, not only that residents want it', size: 16 },
  ]);
  s += r.s;
  s += P(450, y0 + h + 26 + r.h + 30, 'Responding to a counter-example makes the final position more credible.', { size: 16, anchor: 'middle', w: 820, fill: C.muted }).s;
  return { s, h: h + 26 + r.h + 42 };
}, 'A three-step flow: the original thesis that the town should simply close its car park, new evidence from a planner that shops at the edge of a new square lost trade, and the revised thesis that it should close only if the square is designed around the shops. Notes name the revision as an added condition and its effect on the reasoning.',
'A condition that answers a counter-example makes the claim more credible.', '## Worked example 2: noticing a revision in a text');
