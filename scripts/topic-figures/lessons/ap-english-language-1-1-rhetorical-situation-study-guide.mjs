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
  const tx = align === 'middle' ? x + w / 2 : x + pad;
  let inner = '', cy = y + pad;
  if (o.head) {
    const hp = P(tx, cy + hs * 0.8, o.head, { size: hs, weight: 700, w: w - 2 * pad, anchor: align, fill: o.headColor || C.ink });
    inner += hp.s; cy += hp.h + (o.body ? 4 : 0);
  }
  if (o.body) {
    const bp = P(tx, cy + bs * 0.85, o.body, { size: bs, w: w - 2 * pad, anchor: align, fill: o.bodyColor || C.ink, lh: o.lh });
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

export const slug = 'ap-english-language-1-1-rhetorical-situation-study-guide';
const LESSON = 'src/content/ap-resources/english-language-and-composition/1-1-rhetorical-situation-study-guide.md';

// 01 Six components as a web
fig('01-six-components-web', 'Six components, one situation', 'Each component answers a question, and each presses on the others', (y0) => {
  const L = [
    ['Exigence', '**Why now?** The event, problem or need that prompts the writing.'],
    ['Writer', '**Who is speaking?** The person or group, with experience, role and credibility.'],
    ['Audience', '**Who is listening?** Readers or listeners, with their beliefs, values and needs.'],
  ];
  const R = [
    ['Purpose', '**What should it achieve?** Persuade, inform, honour, warn, move to action.'],
    ['Context', '**Where and when?** The time, place and occasion of writing and reception.'],
    ['Message', '**What is being said?** The main idea or position the text communicates.'],
  ];
  const w = 290, gap = 22;
  const hs = [...L, ...R].map(([h, b]) => box(0, 0, w, { head: h, body: b }).h);
  const bh = Math.max(...hs);
  const cx = 450, cy = y0 + (3 * bh + 2 * gap) / 2;
  let s = '', anchors = [];
  [L, R].forEach((col, ci) => col.forEach(([h, b], i) => {
    const x = ci ? 900 - 30 - w : 30, y = y0 + i * (bh + gap);
    anchors.push([ci ? x : x + w, y + bh / 2]);
  }));
  // web lines
  anchors.forEach(([ax, ay]) => { s += line(ax, ay, cx, cy, C.teal, 4); });
  for (let i = 0; i < 3; i++) s += line(anchors[i][0], anchors[i][1], anchors[3 + i][0], anchors[3 + i][1], C.panelEdge, 2, '6 6');
  [L, R].forEach((col, ci) => col.forEach(([h, b], i) => {
    const x = ci ? 900 - 30 - w : 30, y = y0 + i * (bh + gap);
    s += box(x, y, w, { head: h, body: b, h: bh, headColor: C.tealDark }).s;
  }));
  s += circ(cx, cy, 92, C.cream, C.ink, 3);
  s += P(cx, cy - 18, 'Rhetorical situation', { size: 19, weight: 700, anchor: 'middle', w: 150 }).s;
  s += P(cx, cy + 34, 'a web, not a list', { size: 16, anchor: 'middle', fill: C.muted, w: 160, italic: true }).s;
  return { s, h: 3 * bh + 2 * gap };
}, 'Six boxes around a central circle labelled rhetorical situation: exigence (why now?), writer (who is speaking?), audience (who is listening?), purpose (what should it achieve?), context (where and when?) and message (what is being said?). Lines join every box to the centre and to each other.',
'Describe the situation as a web: change one component and the others shift.', '## What is a rhetorical situation?');

// 02 Same topic, different situation
fig('02-same-topic-different-situation', 'Same topic, different situation', '', (y0) => {
  let s = '';
  const top = chip(450, y0 + 22, 'Topic: libraries', { anchor: 'middle', size: 19, fill: C.tealLight });
  s += top.s;
  const rows = [['Writer', 'the council', 'a retired reader'], ['Audience', 'officials and the record', 'readers of the local paper'], ['Purpose', 'report on funding', 'appeal for the library']];
  const colW = 330, xL = 30, xR = 900 - 30 - colW, y1 = y0 + 80;
  s += curve(`M410,${y0 + 40} C330,${y0 + 60} 220,${y0 + 50} 200,${y1 - 6}`, C.ink, 3.5);
  s += curve(`M490,${y0 + 40} C570,${y0 + 60} 680,${y0 + 50} 700,${y1 - 6}`, C.ink, 3.5);
  const a = box(xL, y1, colW, { head: 'Council report on library funding', headSize: 20, align: 'middle', fill: C.panel });
  const b = box(xR, y1, colW, { head: 'Retired reader’s letter to the local paper', headSize: 20, align: 'middle', fill: C.panel });
  const hh = Math.max(a.h, b.h);
  s += box(xL, y1, colW, { head: 'Council report on library funding', headSize: 20, align: 'middle', h: hh }).s;
  s += box(xR, y1, colW, { head: 'Retired reader’s letter to the local paper', headSize: 20, align: 'middle', h: hh }).s;
  let y = y1 + hh + 24;
  const choice = [['Leans on', 'figures', 'personal experience'], ['Phrasing', 'neutral', 'direct appeal']];
  s += T(450, y - 4, 'The situation changes the choices', { size: 17, anchor: 'middle', fill: C.muted, weight: 700 });
  y += 14;
  for (const [k, l, r] of choice) {
    s += box(xL, y, colW, { body: r ? l : l, size: 19, align: 'middle', fill: C.tealLight, edge: C.tealDark, h: 54, pad: 16 }).s;
    s += box(xR, y, colW, { body: r, size: 19, align: 'middle', fill: C.cream, edge: C.olive, h: 54, pad: 16 }).s;
    s += T(450, y + 33, k, { size: 17, anchor: 'middle', weight: 700 });
    y += 68;
  }
  s += P(450, y + 22, 'Diction, evidence and structure differ because writer, audience, purpose and context differ, not because the topic does.', { size: 17, anchor: 'middle', w: 760, fill: C.muted }).s;
  return { s, h: y + 50 - y0 };
}, 'One topic, libraries, branches into a council report on library funding and a retired reader’s letter to the local paper. The report leans on figures and neutral phrasing; the letter leans on personal experience and direct appeal.',
'Topic is only part of the message: the situation decides how a text is written.', '## Why the situation matters more than the topic');

// 03 Vague to precise
fig('03-vague-to-precise', 'From vague to precise', 'Gettysburg, described component by component', (y0) => {
  const items = [
    ['Audience', 'People.', 'Citizens gathered at a cemetery dedication, and the wider public who would read the speech in newspapers.'],
    ['Context', 'A long time ago.', 'November 1863, in the middle of a civil war, on a battlefield where thousands had died four months earlier.'],
    ['Purpose', 'To talk about the war.', 'To give the dead and the war a meaning the living can commit to.'],
    ['Exigence', 'The war.', 'The formal dedication of a national cemetery.'],
  ];
  let s = '', y = y0;
  s += T(130 + 95, y + 6, 'Vague', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  s += T(640, y + 6, 'Precise: who, what, when', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  y += 22;
  for (const [k, v, p] of items) {
    const pb = box(400, y, 470, { body: p, size: 17, fill: C.tealLight, edge: C.tealDark });
    const h = Math.max(pb.h, 64);
    s += T(30, y + h / 2 + 6, k, { size: 18, weight: 700 });
    s += box(130, y + (h - 52) / 2, 190, { body: v, size: 17, h: 52, align: 'middle', dash: '6 5', edge: C.rust, pad: 14 }).s;
    s += arrow(330, y + h / 2, 390, y + h / 2, { w: 3.5 });
    s += box(400, y, 470, { body: p, size: 17, fill: C.tealLight, edge: C.tealDark, h }).s;
    y += h + 16;
  }
  s += box(30, y + 4, 840, { body: '**Test:** if your description could be pasted onto a different text and still be true, it is too vague.', size: 17, fill: C.cream, edge: C.olive, align: 'middle' }).s;
  return { s, h: y + 60 - y0 };
}, 'Four rows turn vague labels into precise descriptions of the Gettysburg Address: “people” becomes citizens at a cemetery dedication and newspaper readers; “a long time ago” becomes November 1863 during a civil war; “to talk about the war” becomes giving the dead a meaning; “the war” becomes the dedication of a national cemetery.',
'Precise descriptions name who, what and when; vague ones would fit any text.', '## Describing each component precisely');

// 04 Exigence looks back, purpose looks forward
fig('04-exigence-vs-purpose', 'Exigence looks back, purpose looks forward', '', (y0) => {
  let s = '';
  const y = y0 + 30;
  s += line(40, y + 70, 860, y + 70, C.panelEdge, 3);
  const a = box(30, y, 250, { head: 'Exigence', body: 'The council voted to cut library hours.', headColor: C.rust, align: 'middle', edge: C.rust, fill: C.panel, h: 140 });
  const m = box(325, y + 10, 250, { head: 'The text', body: 'A letter to the council', align: 'middle', fill: C.cream, edge: C.ink, h: 120 });
  const b = box(620, y, 250, { head: 'Purpose', body: 'Persuade the council to reverse it.', headColor: C.tealDark, align: 'middle', edge: C.tealDark, fill: C.tealLight, h: 140 });
  s += a.s + m.s + b.s;
  s += arrow(282, y + 70, 318, y + 70, { color: C.rust, marker: 'ahR', w: 4 });
  s += arrow(577, y + 70, 613, y + 70, { color: C.tealDark, marker: 'ahT', w: 4 });
  s += T(155, y + 170, '← what prompts the writing', { size: 17, anchor: 'middle', weight: 700, fill: C.rust });
  s += T(745, y + 170, 'what the text should do →', { size: 17, anchor: 'middle', weight: 700, fill: C.tealDark });
  const r = row(30, y + 200, 840, 24, [
    { head: 'Message is not purpose either', body: 'Message: what the text __says__. “A library is central to a town.”', fill: C.panel },
    { head: ' ', body: 'Purpose: what the writer wants it to __do__. “Get the cut reversed.”', fill: C.panel },
  ]);
  s += r.s;
  return { s, h: 200 + r.h + 30 };
}, 'A timeline: the council’s vote to cut library hours (exigence) prompts a letter, which aims to persuade the council to reverse the cut (purpose). Below, message is what the text says and purpose is what the writer wants it to do.',
'Exigence is the trigger behind the text; purpose is the effect it aims at.', '## Describing each component precisely');

// 05 Anthony opening: link choice to situation
fig('05-anthony-opening', 'Linking a choice to the situation', 'Susan B. Anthony, 1873', (y0) => {
  let s = '';
  const q = box(30, y0, 840, { body: '“__Friends and fellow citizens__: I stand before you tonight under indictment for __the alleged crime__ of having voted at the last presidential election, without having a lawful right to vote.”', size: 19, fill: C.cream, edge: C.olive, pad: 22 });
  s += q.s;
  let y = y0 + q.h + 30;
  const steps = [
    ['1', 'Exigence', 'Indicted after voting in the 1872 election; the coming trial.'],
    ['2', 'Writer', 'Suffrage campaigner and defendant: authority plus a personal stake.'],
    ['3', 'Audience', 'Local citizens, a future jury pool, newspaper readers.'],
    ['4', 'Context', '1873: women could not lawfully vote in federal elections.'],
  ];
  const r = row(30, y, 840, 14, steps.map(([n, h, b]) => ({ head: h, body: b, size: 16, headSize: 19, pad: 14 })));
  s += r.s;
  r.xs.forEach((x, i) => { s += num(x + r.w - 22, y + 22, steps[i][0], C.cream, 16); });
  y += r.h + 26;
  s += num(52, y + 40, 5, C.mustard, 20);
  s += T(84, y + 47, 'Link choice to situation', { size: 20, weight: 700 });
  y += 74;
  const c = row(30, y, 840, 24, [
    { head: '“Fellow citizens”', body: 'Assumes the very point in dispute: that she and the women present are citizens in the full sense.', fill: C.tealLight, edge: C.tealDark },
    { head: '“The alleged crime”', body: 'Neutral legal language that sets up the argument that the law, not her, is on trial.', fill: C.tealLight, edge: C.tealDark },
  ]);
  s += c.s;
  return { s, h: y + c.h - y0 };
}, 'Anthony’s opening sentence sits above four numbered boxes for exigence, writer, audience and context. A fifth step links two phrases to the situation: “fellow citizens” assumes the point in dispute, and “the alleged crime” uses neutral legal language to put the law on trial.',
'Each component is tied to a detail, and the final step explains an effect.', '## Worked example 1: the situation behind a speech');

// 06 Primary and secondary audience
fig('06-primary-secondary-audience', 'Two layers of audience', 'The Larkfield Courier letter', (y0) => {
  let s = '';
  const y = y0 + 10;
  const w = box(30, y + 60, 230, { head: 'Writer', body: 'Retired bus driver; daily library user for six years', align: 'middle', size: 16 });
  s += box(30, y + 60, 230, { head: 'Writer', body: 'Retired bus driver; daily library user for six years', align: 'middle', size: 16, h: 150 }).s;
  s += box(335, y + 60, 230, { head: 'Letter', body: 'published in the Larkfield Courier', align: 'middle', fill: C.cream, edge: C.olive, size: 16, h: 150 }).s;
  s += arrow(262, y + 135, 328, y + 135, { w: 4 });
  s += box(640, y, 230, { head: 'Primary', body: 'the councillors: “Councillors, you will say...”', align: 'middle', fill: C.tealLight, edge: C.tealDark, size: 16, h: 120 }).s;
  s += box(640, y + 150, 230, { head: 'Secondary', body: 'Courier readers who might add public pressure', align: 'middle', fill: C.panel, edge: C.tealDark, size: 16, h: 120, dash: '7 5' }).s;
  s += curve(`M567,${y + 120} C600,${y + 110} 605,${y + 60} 632,${y + 60}`, C.tealDark, 5, 'ahT');
  s += curve(`M567,${y + 150} C600,${y + 160} 605,${y + 210} 632,${y + 210}`, C.tealDark, 3, 'ahT', '8 6');
  let yy = y + 330;
  const r = row(30, yy, 840, 24, [
    { head: 'Credibility', body: 'The personal detail about being a bus driver builds the writer’s credibility as an ordinary user.', size: 16 },
    { head: 'Anticipated objection', body: '“You will say the savings are needed” shows the writer knows what the council will argue.', size: 16 },
  ]);
  s += r.s;
  return { s, h: yy + r.h - y0 };
}, 'The retired bus driver’s letter, published in the Larkfield Courier, reaches a primary audience of councillors through direct address and a secondary audience of Courier readers who might add public pressure. Two boxes explain how the personal detail builds credibility and how the anticipated objection shows awareness of the council.',
'Spotting a primary and a secondary audience separates a precise answer from a general one.', '## Worked example 2: an unseen letter (written by Marlbridge)');
