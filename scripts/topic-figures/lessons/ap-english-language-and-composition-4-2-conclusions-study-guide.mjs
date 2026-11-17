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

export const slug = 'ap-english-language-and-composition-4-2-conclusions-study-guide';
const LESSON = 'src/content/ap-resources/english-language-and-composition/4-2-conclusions-study-guide.md';

// 01 So-what test
fig('01-so-what-test', 'The so-what test', 'Answer the reader’s question before it is asked', (y0) => {
  let s = '';
  const Q = [
    ['Why does this matter beyond the example?', 'Significance in a broader context'],
    ['What should I do now?', 'Call to act, change in attitude, solution'],
    ['What follows if this is right?', 'Implications'],
    ['How does this relate to where we started?', 'Return to the introduction'],
    ['What will I remember?', 'A compelling image'],
    ['Can you pull it together?', 'Summary of the reasoning, in new words'],
  ];
  let y = y0;
  Q.forEach(([q, a]) => {
    s += rect(30, y, 400, 54, C.cream, C.olive, 27, 2.5) + `<path d="M70,${y + 53} l-10,16 l24,-15 z" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5" stroke-linejoin="round"/><rect x="62" y="${y + 49}" width="26" height="6" fill="${C.cream}"/>`;
    s += T(230, y + 33, `“${q}”`, { size: 16, anchor: 'middle', italic: true });
    s += arrow(436, y + 27, 494, y + 27, { w: 3 });
    s += box(500, y, 370, { body: `**${a}**`, size: 16, h: 54, vc: true, pad: 14, fill: C.tealLight, edge: C.tealDark }).s;
    y += 76;
  });
  s += P(450, y + 8, 'Strong conclusions combine two or three moves that fit the rhetorical situation.', { size: 16, anchor: 'middle', w: 820, fill: C.muted }).s;
  return { s, h: y + 20 - y0 };
}, 'Six questions a reader might ask at the end, each matched to a conclusion strategy: why it matters (significance), what to do (a call to act or solution), what follows (implications), how it relates to the start (return to the introduction), what to remember (a compelling image), and pull it together (a summary in new words).',
'If a reader could still ask “So what?”, the conclusion has not done its job.', '## The so-what test');

// 02 Five shapes
fig('02-conclusion-shapes', 'Five common conclusion shapes', '', (y0) => {
  let s = '';
  const W = 270, H = 230, g = 15;
  const shapes = [
    ['Return to the introduction', 'revisit the opening image or scenario in a new light', (x, y) => rect(x + 20, y, 50, 70, C.cream, C.ink, 6, 2) + rect(x + 200, y, 50, 70, C.tealLight, C.ink, 6, 2) + curve(`M${x + 200},${y + 20} C${x + 150},${y - 30} ${x + 110},${y - 30} ${x + 74},${y + 14}`, C.tealDark, 3, 'ahT') + T(x + 45, y + 90, 'intro', { size: 15, anchor: 'middle', fill: C.muted }) + T(x + 225, y + 90, 'end', { size: 15, anchor: 'middle', fill: C.muted })],
    ['Widening the lens', 'specific case → larger principle (with a link)', (x, y) => `<path d="M${x + 40},${y + 35} L${x + 230},${y - 5} L${x + 230},${y + 75} Z" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + circ(x + 40, y + 35, 10, C.mustard, C.ink, 2)],
    ['Narrowing to action', 'who should do what next', (x, y) => `<path d="M${x + 40},${y - 5} L${x + 40},${y + 75} L${x + 200},${y + 35} Z" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + arrow(x + 200, y + 35, x + 240, y + 35, { w: 3.5 })],
    ['Looking forward', 'implications, or questions that remain', (x, y) => line(x + 30, y + 35, x + 150, y + 35, C.ink, 3) + arrow(x + 150, y + 35, x + 240, y + 35, { w: 3.5, dash: '8 6' }) + circ(x + 150, y + 35, 9, C.mustard, C.ink, 2)],
    ['Closing image', 'short, vivid, earned by the body', (x, y) => rect(x + 70, y - 5, 130, 80, C.panel, C.ink, 4, 3) + `<path d="M${x + 80},${y + 65} L${x + 115},${y + 30} L${x + 140},${y + 50} L${x + 160},${y + 25} L${x + 190},${y + 65} Z" fill="${C.teal}"/>` + circ(x + 175, y + 12, 8, C.mustard, C.ink, 1.5)],
  ];
  shapes.forEach(([h, b, art], i) => {
    const col = i % 3, rw = Math.floor(i / 3);
    const x = (rw === 0 ? 30 : 30 + (W + g) / 2) + col * (W + g), y = y0 + rw * (H + g);
    s += rect(x, y, W, H, C.panel, C.panelEdge, 14);
    s += art(x, y + 40);
    s += P(x + W / 2, y + 160, `**${h}**`, { size: 17, anchor: 'middle', w: W - 20 }).s;
    s += P(x + W / 2, y + 184, b, { size: 15, anchor: 'middle', w: W - 30, fill: C.muted }).s;
  });
  return { s, h: 2 * H + g };
}, 'Five small diagrams of conclusion shapes: returning to the introduction (an arrow loops back to the opening), widening the lens (a cone from a point outward), narrowing to action (a funnel to an arrow), looking forward (a line continuing as a dashed arrow) and a closing image (a framed picture).',
'Return, widen, narrow to action, look forward, or close on an image.', '## Common conclusion shapes');

// 03 Weak vs strong conclusion
fig('03-weak-vs-strong-conclusion', 'Weak and strong conclusions', 'The school-start-time essay from Topic 4.1', (y0) => {
  let s = '';
  s += box(30, y0, 840, { head: 'Weak', body: '“In conclusion, there are many reasons why school should start later. As I have said above, teenagers are tired, and schools should change. Thank you for reading.”', size: 16, edge: C.rust, dash: '7 5', headColor: C.rust }).s;
  let y = y0 + 130;
  s += T(30, y, 'Strong', { size: 19, weight: 700, fill: C.tealDark });
  const parts = [
    ['The bus driver who switches on her headlights at 6:40 is not the real problem; the timetable she serves is.', 'Unity + new thinking', 'returns to the opening image; reframes the cause'],
    ['A later bell will cost districts some inconvenience and some money,', 'Weighing the opposition', 'a brief concession makes the ending credible'],
    ['and it will return to students the hour of sleep that biology has been asking for.', 'Benefit, drawn together', 'no new proof'],
    ['If a school’s job is to prepare students to learn, then it should schedule learning for the hours when learning is possible.', 'Significance + closing note', 'links the claim to the purpose of schooling'],
  ];
  y += 14;
  parts.forEach(([t2, h, b], i) => {
    const a = box(30, y, 520, { body: t2, size: 16, pad: 12, fill: C.tealLight, edge: C.tealDark });
    const c = box(580, y, 290, { head: h, body: b, size: 15, headSize: 17, pad: 12 });
    const hh = Math.max(a.h, c.h);
    s += box(30, y, 520, { body: t2, size: 16, pad: 12, fill: C.tealLight, edge: C.tealDark, h: hh, vc: true }).s;
    s += box(580, y, 290, { head: h, body: b, size: 15, headSize: 17, pad: 12, h: hh, vc: true }).s;
    s += line(552, y + hh / 2, 576, y + hh / 2, C.tealDark, 2.5);
    y += hh + 10;
  });
  return { s, h: y - 10 - y0 };
}, 'The weak conclusion (“In conclusion, there are many reasons... Thank you for reading”) sits above the strong one, split into four parts: a return to the bus driver image that reframes the cause, a brief concession of cost, the benefit drawn together, and a final link to the purpose of schooling.',
'The thesis is plainly present without being repeated word for word.', '## Weak and strong conclusions side by side');

// 04 Railway path essay: conclusion gathers the body
fig('04-railway-path-conclusion', 'A conclusion that fits its purpose', 'Worked example 1: a railway line becomes a path', (y0) => {
  let s = '';
  s += box(30, y0, 840, { head: 'Introduction', body: 'an empty platform with weeds growing between the rails', size: 16, fill: C.cream, edge: C.olive, headColor: C.olive, h: 76, vc: true }).s;
  const r = row(30, y0 + 100, 840, 16, [
    { head: 'Body 1', body: 'fewer short car journeys', size: 16, align: 'middle' },
    { head: 'Body 2', body: 'custom for local shops', size: 16, align: 'middle' },
    { head: 'Body 3', body: 'a safe route for people without cars', size: 16, align: 'middle' },
  ]);
  s += r.s;
  const cy = y0 + 100 + r.h + 60;
  r.xs.forEach((x) => { s += arrow(x + r.w / 2, y0 + 100 + r.h + 4, 450 + (x + r.w / 2 - 450) * 0.4, cy - 4, { w: 3 }); });
  s += curve(`M30,${y0 + 38} C12,${y0 + 200} 12,${cy + 40} 26,${cy + 50}`, C.olive, 3, 'ahO', '8 6');
  const moves = [['Unity', 'the platform returns, transformed: “let the town walk across it”'], ['Significance', '“A town that can turn a dead line into a living route has shown it can think about its future.”'], ['Call to act', '“The council should approve the funding.”']];
  let y = cy;
  s += rect(30, y, 840, 40 + moves.length * 56, C.tealLight, C.tealDark, 14, 3);
  s += T(50, y + 30, 'Conclusion', { size: 19, weight: 700, fill: C.tealDark });
  y += 58;
  moves.forEach(([h, b]) => { s += P(50, y + 4, `**${h}:** ${b}`, { size: 16, w: 800 }).s; y += 52; });
  s += P(450, y + 26, 'Not new proof: the claims about shops and cars were argued in the body; the conclusion draws them together.', { size: 15, anchor: 'middle', w: 820, fill: C.muted }).s;
  return { s, h: y + 36 - y0 };
}, 'An essay map: the introduction’s empty platform, three body paragraphs (fewer car journeys, custom for shops, a safe route) and a conclusion that gathers them, returns to the platform, states the significance and calls on the council to approve the funding.',
'Unity, significance and a call to act chosen for a council deciding on funding.', '## Worked example 1: writing a conclusion that fits its purpose');

// 05 Gettysburg ending
fig('05-gettysburg-ending', 'An ending that rises', 'Lincoln, Gettysburg Address, 1863', (y0) => {
  let s = '';
  s += T(30, y0 + 12, '“...that we here highly resolve', { size: 19, italic: true });
  const steps = [
    ['that these dead shall not have died in vain', 'call to act: “we” share the task'],
    ['that this nation, under God, shall have a new birth of freedom', 'an aim'],
    ['and that government of the people, by the people, for the people, shall not perish from the earth.”', 'widened lens and compelling image'],
  ];
  let y = y0 + 40;
  steps.forEach(([t2, lab], i) => {
    const x = 30 + i * 50, w = 640;
    const b = box(x, y, w - i * 30, { body: `**—${t2}**`, size: 17, pad: 14, fill: [C.panel, C.tealLight, C.cream][i], edge: C.ink });
    s += b.s;
    s += P(x + w - i * 30 + 14, y + b.h / 2 + 5, lab, { size: 15, w: 860 - (x + w - i * 30 + 14), fill: C.tealDark, weight: 700 }).s;
    y += b.h + 12;
  });
  y += 10;
  const c = chunks(170, y, 700, [{ text: 'of the people', fill: C.teal }, { text: 'by the people', fill: C.teal }, { text: 'for the people', fill: C.teal }], { size: 20, gap: 20 });
  s += T(30, y + 25, 'Triple phrase:', { size: 16, weight: 700 }) + c.s;
  y += c.h + 26;
  s += box(30, y, 840, { body: 'Three “that” clauses give a rising cadence; the audience leaves with a phrase it can repeat, and with the unfinished work as its own.', size: 16, align: 'middle', fill: C.panel, edge: C.olive }).s;
  return { s, h: y + 56 - y0 };
}, 'The closing sentence of the Gettysburg Address set out as three rising clauses: that the dead shall not have died in vain (a call to act), that the nation shall have a new birth of freedom (an aim), and that government of, by and for the people shall not perish (a widened lens and a compelling image). The triple phrase is highlighted.',
'One resolution in three parts turns mourning into a shared task.', '## Worked example 2: describing the function of a published conclusion');
