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

export const slug = 'ap-english-language-and-composition-6-6-shifts-in-tone-study-guide';
const LESSON = 'src/content/ap-resources/english-language-and-composition/6-6-shifts-in-tone-study-guide.md';

// 01 Three kinds of shift as line shapes
fig('01-three-kinds-of-shift', 'What a shift can signal', 'A change in the writer’s attitude from one part of a text to another', (y0) => {
  let s = '';
  const W = 270, H = 270, g = 15;
  const K = [
    ['Qualification', 'limits or adds a condition', 'praise, then “but” a reservation', (x, y) => path(`M${x},${y + 30} L${x + 130},${y + 30} L${x + 160},${y + 70} L${x + 220},${y + 70}`, { stroke: C.tealDark, w: 5 }) + T(x + 130, y + 18, 'but', { size: 15, weight: 700, fill: C.rust })],
    ['Refinement', 'sharpens or develops an idea', 'general admiration, then specific, more critical analysis', (x, y) => path(`M${x},${y + 50} C${x + 60},${y + 50} ${x + 100},${y + 20} ${x + 120},${y + 50} S${x + 170},${y + 70} ${x + 220},${y + 40}`, { stroke: C.tealDark, w: 3 }) + path(`M${x + 120},${y + 50} L${x + 220},${y + 50}`, { stroke: C.olive, w: 6 })],
    ['Reconsideration', 'rethinks or reverses a view', 'confident claim, then doubt or a changed position', (x, y) => path(`M${x},${y + 20} L${x + 120},${y + 20} Q${x + 160},${y + 20} ${x + 160},${y + 50} Q${x + 160},${y + 80} ${x + 120},${y + 80} L${x + 60},${y + 80}`, { stroke: C.rust, w: 5 }) + `<path d="M${x + 60},${y + 80} l14,-8 l0,16 z" fill="${C.rust}"/>`],
  ];
  K.forEach(([h, m, t2, art], i) => {
    const x = 30 + i * (W + g);
    s += rect(x, y0, W, H, C.panel, C.panelEdge, 14);
    s += T(x + W / 2, y0 + 34, h, { size: 20, weight: 700, anchor: 'middle' });
    s += art(x + 25, y0 + 60);
    s += P(x + W / 2, y0 + 180, `**${m}**`, { size: 16, anchor: 'middle', w: W - 30 }).s;
    s += P(x + W / 2, y0 + 222, `__${t2}__`, { size: 15, anchor: 'middle', w: W - 30, fill: C.muted }).s;
  });
  s += box(30, y0 + H + 20, 840, { body: 'A shift often marks the argument’s **turning point**: find it to describe how the writer’s thought develops.', size: 16, align: 'middle', fill: C.cream, edge: C.olive }).s;
  return { s, h: H + 74 };
}, 'Three cards, each with a line diagram: qualification (a level line that steps down at “but”: praise, then a reservation), refinement (a general line that narrows to a sharper one) and reconsideration (a line that loops back: a confident claim, then a changed position).',
'Qualify, refine or reconsider: a shift shows how the writer’s view develops.', '## What a shift is');

// 02 Markers cluster
fig('02-markers-of-a-shift', 'Markers of a shift', 'The best evidence is a cluster, not a single signal', (y0) => {
  let s = '';
  const M = [
    ['Turning transitions', 'but, yet, however, still, nevertheless'],
    ['Change of diction', 'formal to casual, gentle to harsh'],
    ['Change in connotation', 'positive words give way to negative'],
    ['Change in sentence structure', 'long and flowing to short and blunt'],
    ['Change in punctuation', 'a dash, a colon or a question'],
    ['Change of address or pronoun', '“they” to “we”, “I” to “you”'],
    ['New imagery', 'a different set of images or comparisons'],
    ['A paragraph break', 'a new paragraph, a new attitude'],
  ];
  let y = y0;
  for (let i = 0; i < M.length; i += 2) {
    const r = row(30, y, 840, 16, M.slice(i, i + 2).map(([h, b]) => ({ head: h, body: b, size: 15, headSize: 17, pad: 14, h: 76, vc: true, bar: C.mustard })));
    s += r.s; y += r.h + 12;
  }
  y += 28;
  s += T(30, y + 6, 'Describe it:', { size: 17, weight: 700 });
  const st = ['Locate it', 'Tone before and after', 'Quote both sides', 'Explain what it does'];
  let x = 140;
  st.forEach((t2, i) => {
    const w = tw(t2, 15, true) + 30;
    s += rect(x, y - 16, w, 40, i === 3 ? C.tealLight : C.panel, C.ink, 20, 2) + T(x + w / 2, y + 9, t2, { size: 15, weight: 700, anchor: 'middle' });
    if (i < 3) s += arrow(x + w + 2, y + 4, x + w + 14, y + 4, { w: 2.5 });
    x += w + 16;
  });
  return { s, h: y + 24 - y0 };
}, 'Eight markers of a tone shift: turning transitions, a change of diction, a change in connotation, a change in sentence structure, a change in punctuation, a change of address or pronoun, new imagery and a paragraph break. Below, four steps for describing a shift: locate, name the tone before and after, quote, explain.',
'Look for a cluster: a turning word plus a change in the words and effect around it.', '## Markers of a shift');

// 03 Tone line for the Declaration
fig('03-declaration-tone-line', 'From caution to resolve', 'Declaration of Independence, 1776', (y0) => {
  let s = '';
  const gy = y0 + 230, mx = 450;
  s += rect(30, y0, 380, 190, C.tealLight, C.tealDark, 14, 2.5);
  s += T(220, y0 + 32, 'Measured, cautious', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += P(50, y0 + 62, '“**Prudence**, indeed, will **dictate** that Governments **long established** should not be changed for **light and transient causes**...”', { size: 16, w: 340 }).s;
  s += rect(490, y0, 380, 190, '#f6e3d8', C.rust, 14, 2.5);
  s += T(680, y0 + 32, 'Resolute, accusatory', { size: 19, weight: 700, anchor: 'middle', fill: C.rust });
  s += P(510, y0 + 62, '“...a long train of **abuses and usurpations**... **absolute Despotism**, it is their **right**, it is their **duty**, to throw off such Government.”', { size: 16, w: 340 }).s;
  s += circ(mx, y0 + 95, 30, C.mustard, C.ink, 3) + T(mx, y0 + 102, 'But', { size: 18, weight: 700, anchor: 'middle' });
  // intensity line
  s += line(40, gy + 60, 860, gy + 60, C.panelEdge, 2);
  s += path(`M40,${gy + 50} L${mx - 20},${gy + 50} C${mx},${gy + 50} ${mx},${gy + 10} ${mx + 30},${gy + 6} L860,${gy + 6}`, { stroke: C.ink, w: 4 });
  s += T(40, gy + 84, 'restraint', { size: 15, fill: C.muted, weight: 700 }) + T(860, gy + 84, 'charged moral language; repetition escalates', { size: 15, fill: C.muted, weight: 700, anchor: 'end' });
  s += box(30, gy + 104, 840, { body: '**Qualifies** the early caution: change should not be light, but it is justified when abuses are long and systematic. It prepares for the list of grievances.', size: 16, align: 'middle', fill: C.cream, edge: C.olive }).s;
  return { s, h: gy + 104 + 76 - y0 };
}, 'The Declaration’s two passages side by side: measured and cautious (“Prudence... light and transient causes”), then, after “But”, resolute and accusatory (“abuses and usurpations”, “Despotism”, “right”, “duty”). A line rises sharply at the turn, and a note explains that the shift qualifies the early caution.',
'“But” turns calm legal language into charged moral language and justifies the break.', '## A published example: the Declaration of Independence');

// 04 Harbour front: before / turn / after
fig('04-harbour-front-shift', 'Locating a shift', 'Worked example 1: the new harbour front', (y0) => {
  let s = '';
  const before = box(30, y0, 560, { body: '“The new harbour front is, **I admit**, **beautiful**. The paving is the colour of **honey**, the lamps are shaped like old ship’s **lanterns**, and on a clear evening the whole bay seems to have been arranged for a **postcard**.”', size: 17, pad: 18, fill: C.tealLight, edge: C.tealDark });
  s += before.s;
  s += box(620, y0, 250, { head: 'Before', body: 'admiring, appreciative: decorative adjectives, one long sentence', size: 15, headSize: 18, h: before.h, vc: true, fill: C.panel, edge: C.tealDark, headColor: C.tealDark }).s;
  let y = y0 + before.h + 16;
  s += rect(30, y, 560, 84, '#f6e3d8', C.rust, 12, 2.5);
  s += rect(46, y + 24, 60, 36, C.mustard, C.ink, 18, 2) + T(76, y + 48, 'Yet', { size: 17, weight: 700, anchor: 'middle' });
  s += T(120, y + 49, 'I could not find a single place to sit down.', { size: 18 });
  s += box(620, y, 250, { head: 'After', body: 'wry, mildly critical: short, plain, blunt', size: 15, headSize: 18, h: 84, vc: true, fill: C.panel, edge: C.rust, headColor: C.rust }).s;
  y += 106;
  const r = row(30, y, 840, 20, [
    { head: 'Markers', body: 'turning word “Yet”; long sentence → short; decorative → blunt', size: 15 },
    { head: 'Effect: qualifies the praise', body: 'beauty fails the people who use it; “postcard” gains a second meaning', size: 15, fill: C.cream, edge: C.olive },
  ]);
  s += r.s;
  return { s, h: y + r.h - y0 };
}, 'The harbour-front passage split at “Yet”: an admiring description of honey-coloured paving, lantern-shaped lamps and a postcard bay, then the short, blunt “I could not find a single place to sit down”. Notes name the markers and explain that the shift qualifies the praise.',
'A short, blunt sentence after “Yet” turns admiration into wry criticism.', '## Worked example 1: analysing a shift in a Marlbridge passage');

// 05 Purposeful shifts in own writing
fig('05-writing-a-shift', 'Writing a shift on purpose', 'Mark the turn and change the diction', (y0) => {
  let s = '';
  const S = [
    ['Concession then claim', 'respectful: grant a point', 'firmer: assert your claim', C.panel, C.tealLight],
    ['Problem then hope', 'grave: describe a difficulty', 'hopeful: introduce a solution', '#f6e3d8', C.tealLight],
    ['Humour then seriousness', 'light: engage the audience', 'serious: show the stakes', C.cream, C.panel],
  ];
  let y = y0;
  S.forEach(([h, a, b, fa, fb]) => {
    s += T(30, y + 16, h, { size: 18, weight: 700 });
    s += box(30, y + 28, 360, { body: a, size: 16, align: 'middle', h: 56, vc: true, fill: fa }).s;
    s += rect(410, y + 38, 80, 36, C.mustard, C.ink, 18, 2) + T(450, y + 62, 'turn', { size: 15, weight: 700, anchor: 'middle' });
    s += arrow(392, y + 56, 406, y + 56, { w: 2.5 }) + arrow(492, y + 56, 506, y + 56, { w: 2.5 });
    s += box(510, y + 28, 360, { body: b, size: 16, align: 'middle', h: 56, vc: true, fill: fb, edge: C.tealDark }).s;
    y += 104;
  });
  s += P(450, y + 10, 'Mark the turn with a transition, a short sentence or a paragraph break. Avoid accidental shifts, such as drifting from formal to casual.', { size: 16, anchor: 'middle', w: 820, fill: C.muted }).s;
  return { s, h: y + 40 - y0 };
}, 'Three deliberate shifts, each with a marked turn: concession then claim (respectful to firmer), problem then hope (grave to hopeful), and humour then seriousness (light to serious). A note advises marking the turn and avoiding accidental shifts.',
'A deliberate, clearly marked shift makes writing subtler and more persuasive.', '## Writing a shift on purpose');
