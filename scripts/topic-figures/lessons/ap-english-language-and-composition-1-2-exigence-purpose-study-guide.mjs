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
  const nat = o.vc && o.h ? box(x, y, w, { ...o, h: 0, vc: false }).h : 0;
  let inner = '', cy = y + pad + (o.vc && o.h ? Math.max(0, (o.h - nat) / 2) : 0);
  if (o.head) {
    const hp = P(tx + (o.headIndent || 0), cy + hs * 0.8, o.head, { size: hs, weight: 700, w: w - 2 * pad - (o.headIndent || 0), anchor: align, fill: o.headColor || C.ink });
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

export const slug = 'ap-english-language-and-composition-1-2-exigence-purpose-study-guide';
const LESSON = 'src/content/ap-resources/english-language-and-composition/1-2-exigence-purpose-study-guide.md';

// 01 Two tests on a time line
fig('01-two-frames-in-time', 'Two questions that point opposite ways', '', (y0) => {
  let s = '';
  const ay = y0 + 150;
  s += `<rect x="30" y="${ay - 46}" width="420" height="46" fill="${C.cream}"/>`;
  s += `<rect x="450" y="${ay - 46}" width="420" height="46" fill="${C.tealLight}"/>`;
  s += arrow(40, ay, 872, ay, { w: 4 });
  s += T(240, ay - 16, '← looks back or around', { size: 18, weight: 700, anchor: 'middle', fill: C.olive });
  s += T(660, ay - 16, 'looks forward →', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += circ(450, ay, 16, C.ink, C.ink);
  s += T(450, ay + 40, 'the text', { size: 17, weight: 700, anchor: 'middle' });
  const a = box(30, y0, 380, { head: 'Exigence', body: '**Why was this written now?** The event, problem, question or need that provoked it.', headColor: C.olive, size: 16, pad: 16 });
  const b = box(490, y0, 380, { head: 'Purpose', body: '**What does the writer hope to achieve?** The effect on the audience.', headColor: C.tealDark, size: 16, pad: 16 });
  const top = y0, hh = Math.max(a.h, b.h);
  s = box(30, top, 380, { head: 'Exigence', body: '**Why was this written now?** The event, problem, question or need that provoked it.', headColor: C.olive, size: 16, pad: 16, h: hh }).s
    + box(490, top, 380, { head: 'Purpose', body: '**What does the writer hope to achieve?** The effect on the audience.', headColor: C.tealDark, size: 16, pad: 16, h: hh }).s + s;
  const fy = ay + 66;
  const frame = (x, pre, post, col, fill) => {
    let r = rect(x, fy, 410, 96, fill, col, 14, 2.5);
    r += T(x + 20, fy + 36, 'Quick test', { size: 15, weight: 700, fill: col });
    const blank = `<rect x="X" y="${fy + 52}" width="70" height="30" rx="6" fill="#ffffff" stroke="${col}" stroke-width="2" stroke-dasharray="5 4"/>`;
    const w1 = tw(pre, 17);
    r += T(x + 20, fy + 74, pre, { size: 17 });
    r += blank.replace('X', x + 26 + w1);
    r += T(x + 102 + w1, fy + 74, post, { size: 17 });
    return r;
  };
  s += frame(30, '“Because', ', the writer wrote.”', C.olive, C.panel);
  s += frame(460, '“The writer wants the audience to', '.”', C.tealDark, C.panel);
  return { s, h: fy + 96 - y0 };
}, 'A time line with the text in the middle. Exigence sits on the left and looks back or around at what provoked the writing; purpose sits on the right and looks forward to the effect on the audience. Two fill-in frames test each: “Because ___, the writer wrote” and “The writer wants the audience to ___”.',
'If it completes “Because ___”, it is exigence; if it completes “wants the audience to ___”, it is purpose.', '## Two questions that look alike');

// 02 Kinds of exigence + stated vs implicit
fig('02-kinds-of-exigence', 'Four kinds of exigence', '', (y0) => {
  const k = [
    ['Event', 'a vote, a disaster, an anniversary, a ceremony, a court case'],
    ['Problem', 'a shortage, an injustice, a rising cost'],
    ['Question or controversy', '“Should the school day start later?”'],
    ['Need or opportunity', 'a deadline, an invitation to speak, a chance to change a decision'],
  ];
  let s = '';
  const r1 = row(30, y0, 840, 20, k.slice(0, 2).map(([h, b]) => ({ head: h, body: b, bar: C.mustard, pad: 24, size: 17 })));
  const r2 = row(30, y0 + r1.h + 20, 840, 20, k.slice(2).map(([h, b]) => ({ head: h, body: b, bar: C.mustard, pad: 24, size: 17 })));
  s += r1.s + r2.s;
  let y = y0 + r1.h + r2.h + 50;
  s += T(450, y, 'Where is the exigence in the text?', { size: 19, weight: 700, anchor: 'middle' });
  y += 20;
  const c = row(30, y, 840, 60, [
    { head: 'Named', body: '“Last Tuesday the council voted...”', fill: C.tealLight, edge: C.tealDark, align: 'middle', vc: true },
    { head: 'Implicit', body: 'Infer it from dates, references to recent events, or a question the text answers without repeating. Say so and point to the clue.', fill: C.cream, edge: C.olive, align: 'middle', size: 16 },
  ]);
  s += c.s + T(450, y + c.h / 2 + 7, 'or', { size: 19, weight: 700, anchor: 'middle', fill: C.muted });
  return { s, h: y + c.h - y0 };
}, 'Four boxes name the kinds of exigence: an event, a problem, a question or controversy, and a need or opportunity, each with examples. Below, a named exigence is stated in the text, while an implicit one must be inferred from clues such as dates and references.',
'Every text has an exigence; when it is implicit, infer it and point to the clue.', '## Kinds of exigence');

// 03 Verb + target
fig('03-verb-plus-target', 'Purpose = verb + target', '', (y0) => {
  let s = '';
  const ex = [['persuade', 'the council to reverse a cut'], ['warn', 'residents of a hazard'], ['reassure', 'anxious parents'], ['mobilise', 'volunteers to act']];
  s += T(160, y0 + 8, 'VERB', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += T(560, y0 + 8, 'TARGET (the audience and the effect)', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  let y = y0 + 40;
  for (const [v, tg] of ex) {
    s += rect(60, y - 22, 200, 44, C.tealLight, C.tealDark, 22, 2.5) + T(160, y + 7, v, { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
    s += T(290, y + 9, '+', { size: 26, weight: 700, anchor: 'middle' });
    s += rect(320, y - 22, 480, 44, C.cream, C.olive, 22, 2.5) + T(560, y + 7, tg, { size: 19, anchor: 'middle' });
    y += 58;
  }
  y += 16;
  const t1 = table(30, y, [300, 540], [
    ['Weak: names a topic', 'Strong: names the effect on the audience'],
    ['“To talk about school uniforms.”', '“To persuade parents to support a change to the uniform policy.”'],
    ['“To discuss the flood.”', '“To reassure residents that the repair schedule is realistic, and to ask them to report new damage.”'],
    ['“To show how bad litter is.”', '“To shame readers into joining the clean-up by describing what the beach looked like at dawn.”'],
  ], { size: 16, cellFill: (r, c) => (r && c === 0 ? '#fbf3ee' : null) });
  s += t1.s;
  return { s, h: y + t1.h - y0 };
}, 'Four purposes are built from a verb and a target: persuade the council to reverse a cut, warn residents of a hazard, reassure anxious parents, mobilise volunteers to act. A table contrasts weak purposes that name a topic with strong ones that name the effect on the audience.',
'A weak purpose names a topic; a strong one names a verb and its effect on the audience.', '## Purpose: use a verb and a target');

// 04 Chain: exigence -> goal -> choices
fig('04-exigence-to-choices-chain', 'From exigence to choices', 'A flood notice from a parish clerk', (y0) => {
  let s = '';
  const items = [
    ['Exigence', 'what happened or is wrong', 'A flood damages the village’s road.', C.cream, C.olive],
    ['Writer’s goal', 'what should change', 'Residents report new cracks quickly so repairs can be prioritised.', C.tealLight, C.tealDark],
    ['Choices', 'what will bring it about', 'Short notice, phone number listed first, plain non-technical language.', C.panel, C.ink],
  ];
  const w = 250, gap = 45;
  const hs = items.map(([h, sub, b]) => box(0, 0, w, { head: h, body: `__${sub}__\n\n${b}`, size: 17, align: 'middle' }).h);
  const h = Math.max(...hs);
  let out = '';
  items.forEach(([hd, sub, b, f, e], i) => {
    const x = 30 + i * (w + gap);
    out += box(x, y0, w, { head: hd, body: `__${sub}__\n\n${b}`, size: 17, align: 'middle', fill: f, edge: e, h, headColor: e }).s;
    if (i < 2) out += arrow(x + w + 4, y0 + h / 2, x + w + gap - 4, y0 + h / 2, { w: 4.5 });
  });
  const note = box(30, y0 + h + 24, 840, { body: 'Say what the exigence is and what the audience must do or think because of it: the purpose often follows, and the choices serve it.', size: 17, align: 'middle', fill: C.panel });
  return { s: out + note.s, h: h + 24 + note.h };
}, 'Three linked boxes: the exigence (a flood damages the village’s road) leads to the writer’s goal (residents report new cracks quickly so repairs can be prioritised), which leads to the choices (a short notice, the phone number first, plain language).',
'Exigence, then goal, then the choices that will bring the goal about.', '## How exigence leads to purpose');

// 05 Paine: five steps
fig('05-paine-five-steps', 'Separating cause and goal', 'Thomas Paine, The American Crisis, December 1776', (y0) => {
  let s = '';
  const q = box(30, y0, 840, { body: '“These are the times that try men’s souls. The summer soldier and the sunshine patriot will, __in this crisis__, __shrink from the service__ of their country; but he that __stands it now__, deserves the love and thanks of man and woman.”', size: 18, fill: C.cream, edge: C.olive, pad: 20 });
  s += q.s;
  let y = y0 + q.h + 26;
  const colW = 405;
  const left = [['1', 'Look for the trigger', '“in this crisis”: defeats, retreats, expiring enlistments, low morale.'], ['3', 'Write the exigence', 'The military crisis of late 1776 that tempted people to abandon the cause.']];
  const right = [['2', 'Look for the action wanted', '“shrink from the service”, “stands it now”: keep serving.'], ['4', 'Write purpose as verb + target', 'To rally discouraged soldiers and citizens to continue the fight.']];
  s += T(30 + colW / 2, y, 'EXIGENCE: already exists', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  s += T(465 + colW / 2, y, 'PURPOSE: to be brought about', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  y += 16;
  const mk = (x, arr, fill, edge) => { let yy = y, o = ''; const hs = arr.map(([n, h, b]) => box(0, 0, colW, { head: h, body: b, size: 16, pad: 16 }).h); return hs; };
  const hL = mk(0, left), hR = mk(0, right);
  const hh = [Math.max(hL[0], hR[0]), Math.max(hL[1], hR[1])];
  [0, 1].forEach((i) => {
    const yy = y + (i ? hh[0] + 16 : 0);
    s += box(30, yy, colW, { head: left[i][1], headIndent: 30, body: left[i][2], size: 16, pad: 16, h: hh[i], edge: C.olive }).s + num(52, yy + 28, left[i][0], C.cream, 15);
    s += box(465, yy, colW, { head: right[i][1], headIndent: 30, body: right[i][2], size: 16, pad: 16, h: hh[i], edge: C.tealDark, fill: C.tealLight }).s + num(487, yy + 28, right[i][0], C.cream, 15);
  });
  y += hh[0] + hh[1] + 32;
  s += num(52, y + 26, 5, C.mustard, 18);
  s += P(84, y + 33, '**Check the direction of time.** The crisis already exists; renewed commitment is what Paine wants to bring about.', { size: 17, w: 780 }).s;
  return { s, h: y + 60 - y0 };
}, 'Paine’s opening is quoted with three phrases marked. Steps 1 and 3 on the left find and write the exigence, the military crisis of late 1776. Steps 2 and 4 on the right find and write the purpose, to rally discouraged soldiers and citizens. Step 5 checks that the two point in different directions in time.',
'The exigence already exists; the purpose is something the writer wants to happen.', '## Worked example 1: separating cause and goal in a wartime essay');

// 06 Elm Court notice: primary vs secondary purpose
fig('06-primary-secondary-purpose', 'Primary and secondary purpose', 'The Elm Court notice', (y0) => {
  let s = '';
  const parts = [
    ['ex', 'On Monday the water company found a leak under the car park.'],
    ['pr', 'The car park will be closed from Thursday for at least two weeks. Please do not park on Elm Road, which must stay clear for the repair lorries.'],
    ['se', 'A shuttle van will take anyone with limited mobility to and from the main gate. Thank you for your patience.'],
  ];
  const sty = { ex: [C.panel, C.rust, 'Exigence', 'the discovery of the leak: an event'], pr: [C.tealLight, C.tealDark, 'Primary purpose', 'direct residents to change behaviour: most space, most direct language'], se: [C.cream, C.olive, 'Secondary purpose', 'reassure and keep goodwill: works through tone, comes at the end'] };
  let y = y0;
  s += T(30, y + 8, 'Notice to residents of Elm Court', { size: 19, weight: 700 });
  y += 24;
  for (const [k, txt] of parts) {
    const [f, e, lab, note] = sty[k];
    const b = box(30, y, 470, { body: txt, size: 17, fill: f, edge: e, pad: 16 });
    const nb = box(560, y, 310, { head: lab, body: note, size: 16, headColor: e, pad: 14, edge: e });
    const h = Math.max(b.h, nb.h);
    s += box(30, y, 470, { body: txt, size: 17, fill: f, edge: e, pad: 16, h, vc: true }).s;
    s += box(560, y, 310, { head: lab, body: note, size: 16, headColor: e, pad: 14, edge: e, h, vc: true }).s;
    s += line(502, y + h / 2, 556, y + h / 2, e, 3);
    y += h + 16;
  }
  s += box(30, y + 4, 840, { body: '[[Trap:]] “to inform residents about a leak” confuses the trigger with the purpose, because the leak is the exigence.', size: 17, align: 'middle', fill: C.panel, edge: C.rust, dash: '7 5' }).s;
  return { s, h: y + 60 - y0 };
}, 'The Elm Court notice split into three parts. The sentence about the leak found on Monday is the exigence. The closure and the instruction not to park on Elm Road are the primary purpose, given the most space and direct language. The shuttle van and the thanks are a secondary purpose of reassurance, working through tone.',
'Primary purposes get the most space and the most direct language; secondary purposes often work through tone.', '## Worked example 2: an original notice (written by Marlbridge)');

// 07 Exam reading map
fig('07-where-to-look', 'Where to look under exam conditions', '', (y0) => {
  let s = '';
  const px = 330, pw = 240, py = y0 + 10;
  s += rect(px, py, pw, 400, C.panel, C.ink, 8, 2.5);
  const bars = (y, n, fill = C.panelEdge) => { let r = ''; for (let i = 0; i < n; i++) r += `<rect x="${px + 20}" y="${y + i * 16}" width="${i === n - 1 ? 120 : 200}" height="7" rx="3" fill="${fill}"/>`; return r; };
  s += `<rect x="${px + 16}" y="${py + 14}" width="208" height="26" rx="4" fill="${C.cream}"/>` + T(px + 120, py + 32, 'source line: date, place', { size: 15, anchor: 'middle', fill: C.olive, weight: 700 });
  s += `<rect x="${px + 12}" y="${py + 54}" width="216" height="80" rx="6" fill="${C.tealLight}"/>` + bars(py + 66, 4, C.tealDark);
  s += bars(py + 150, 4) + bars(py + 226, 4);
  s += `<rect x="${px + 12}" y="${py + 296}" width="216" height="90" rx="6" fill="${C.tealLight}"/>` + bars(py + 308, 4, C.tealDark);
  s += `<rect x="${px + 140}" y="${py + 336}" width="70" height="20" rx="4" fill="${C.mustard}"/>`;
  const L = [[py + 27, 'Use the source line', 'A date, a place or a publication often supplies the exigence or context.'], [py + 94, 'Read the first paragraph first', 'It often signals the exigence.']];
  const R = [[py + 300, 'Read the last paragraph', 'It often states what the writer wants the audience to do.'], [py + 346, 'Look at request verbs', '“Please sign”, “we must”, “let us resolve” signal an action purpose.']];
  L.forEach(([ty, h, b], i) => {
    const h0 = box(30, 0, 270, { head: L[0][1], body: L[0][2], size: 16, headSize: 18, pad: 14 }).h;
    const by = i ? py + h0 + 14 : py;
    s += box(30, by, 270, { head: h, body: b, size: 16, headSize: 18, pad: 14 }).s;
    s += arrow(302, by + 36, px + 8, ty, { w: 3 });
  });
  R.forEach(([ty, h, b], i) => {
    const by = i ? py + 300 : py + 150;
    s += box(600, by, 270, { head: h, body: b, size: 16, headSize: 18, pad: 14, fill: i ? C.cream : C.panel }).s;
    s += arrow(598, by + 36, px + pw - 8, ty, { w: 3 });
  });
  s += box(30, py + 420, 840, { body: '**Do not stop at the topic.** If your purpose could be written without mentioning the audience, add the audience.', size: 17, align: 'middle', fill: C.cream, edge: C.olive }).s;
  return { s, h: 420 + 70 };
}, 'A schematic passage page with callouts: the source line can supply the exigence or context; the first paragraph often signals the exigence; the last paragraph often states what the writer wants; request verbs such as “please sign” signal an action purpose. A note warns not to stop at the topic.',
'Source line, first paragraph, last paragraph and request verbs: the four places to look.', '## Reading for exigence and purpose under exam conditions');
