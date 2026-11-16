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

export const slug = 'ap-english-language-and-composition-4-1-introductions-study-guide';
const LESSON = 'src/content/ap-resources/english-language-and-composition/4-1-introductions-study-guide.md';

// 01 Doorway: three jobs
fig('01-introduction-as-doorway', 'An introduction is a doorway', 'It frames what is inside and invites the reader through', (y0) => {
  let s = '';
  const dx = 330, dw = 240, dy = y0 + 20, dh = 360;
  s += `<rect x="${dx - 20}" y="${dy - 20}" width="${dw + 40}" height="${dh + 20}" rx="8" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="3"/>`;
  s += `<rect x="${dx}" y="${dy}" width="${dw}" height="${dh}" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += `<path d="M${dx},${dy} L${dx + 90},${dy + 30} L${dx + 90},${dy + dh - 10} L${dx},${dy + dh} Z" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += circ(dx + 78, dy + dh / 2, 6, C.ink, C.ink);
  s += P(dx + 165, dy + dh / 2 - 10, 'the argument', { size: 17, weight: 700, anchor: 'middle', w: 130 }).s;
  s += arrow(dx + 165, dy + dh + 40, dx + 165, dy + dh / 2 + 20, { w: 3.5, color: C.olive, marker: 'ahO' });
  s += T(dx + 165, dy + dh + 64, 'the reader', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  const J = [
    [30, dy + 10, 'Orient', 'Introduce the subject and, where it helps, the writer: what is it about, what conversation is this?'],
    [30, dy + 200, 'Engage', 'Give a reason to keep reading: a surprise, a question, a vivid image, a fact that bears on the reader.'],
    [620, dy + 100, 'Focus', 'Point toward the argument: present the thesis, or leave the reader expecting the claim.'],
  ];
  J.forEach(([x, y, h, b], i) => {
    const bx = box(x, y, 250, { head: h, body: b, size: 15, headSize: 20, headColor: C.tealDark, pad: 14 });
    s += bx.s;
    const ax = i < 2 ? x + 252 : x - 2, tx = i < 2 ? dx - 24 : dx + dw + 24;
    s += line(ax, y + bx.h / 2, tx, y + bx.h / 2, C.tealDark, 2.5, '5 4');
  });
  return { s, h: dh + 90 };
}, 'A doorway frames “the argument” inside, with an arrow for the reader walking in. Three labels point at the door: orient (introduce the subject and conversation), engage (give a reason to keep reading) and focus (point toward the claim).',
'Orient, engage, focus: a doorway, not a room of its own.', '## What does an introduction have to do?');

// 02 Eight strategies
fig('02-eight-opening-strategies', 'Eight ways to open', 'Each has an effect that suits the situation or does not', (y0) => {
  const k = [
    ['Thesis first', 'immediate clarity for busy or expert readers', 'abrupt if the audience is hostile'],
    ['Quotation', 'borrows authority or voices a view to test', 'loosely related, never discussed again'],
    ['Intriguing statement', 'short, sharp, creates curiosity', 'a gimmick if the argument does not deliver'],
    ['Anecdote', 'makes an abstract issue human', 'too long, or typical of nothing'],
    ['Question', 'invites the reader to join the thinking', 'vague: “Have you ever wondered...?”'],
    ['Statistic or data', 'signals evidence and seriousness', 'a number with no source, scale or point'],
    ['Context', 'orients readers who lack background', 'turns into a history lecture'],
    ['Scenario', 'lets the reader imagine a situation', 'unrealistic or unrelated to the claim'],
  ];
  let s = '', y = y0;
  for (let i = 0; i < 8; i += 2) {
    const r = row(30, y, 840, 16, k.slice(i, i + 2).map(([h, p, m]) => ({ head: h, body: `{{+}} ${p}\n[[−]] ${m}`, size: 15, headSize: 19, pad: 14 })));
    s += r.s; y += r.h + 12;
  }
  return { s, h: y - 12 - y0 };
}, 'Eight cards for opening strategies, each with what it does well and what can go wrong: thesis first, quotation, intriguing statement, anecdote, question, statistic or data, contextual information and scenario.',
'No opening is correct in itself; its effect must suit the situation.', '## The strategies available to a writer');

// 03 One claim, three audiences
fig('03-one-claim-three-openings', 'Same claim, different openings', 'Claim: “Schools should start later in the morning.”', (y0) => {
  let s = '';
  const A = [
    ['School board', 'worried about bus costs; decides by practicalities', 'Context + statistic', 'how many routes would change; what other districts did'],
    ['Parents', 'at a community meeting; decide by recognition', 'Scenario or anecdote', 'a tired teenager at the kitchen table at 6:30 a.m.'],
    ['Science-minded newspaper readers', '', 'Intriguing statement + thesis', 'adolescent body clocks, then the claim'],
  ];
  let y = y0;
  A.forEach(([a, d, st, ex], i) => {
    const l = box(30, y, 330, { head: a, body: d ? `__${d}__` : '', size: 15, headSize: 19, fill: C.panel, h: 100, vc: true, pad: 14 });
    const r = box(470, y, 400, { head: st, body: ex, size: 15, headSize: 19, fill: C.tealLight, edge: C.tealDark, headColor: C.tealDark, h: 100, vc: true, pad: 14 });
    s += l.s + r.s + arrow(366, y + 50, 464, y + 50, { w: 4 });
    y += 116;
  });
  s += box(30, y + 4, 840, { body: 'Ask: what does **this** reader need before they can listen to **this** claim?', size: 18, align: 'middle', fill: C.cream, edge: C.olive }).s;
  return { s, h: y + 60 - y0 };
}, 'One claim, schools should start later, opened three ways: for a school board, context and a statistic about bus routes; for parents, a scenario of a tired teenager at 6:30 a.m.; for science-minded readers, an intriguing statement about body clocks followed by the thesis.',
'Choose the opening by what this audience needs before it can listen.', '## Choosing by rhetorical situation');

// 04 Weak vs strong scorecard
fig('04-weak-vs-strong-introduction', 'Weak and strong introductions', 'Task: argue whether school should start later', (y0) => {
  let s = '';
  const W = box(30, y0 + 30, 405, { body: '“Since the beginning of time, people have argued about school start times. In this essay I will discuss both sides of this issue. School start times are an important topic that affects many people.”', size: 16, edge: C.rust, dash: '7 5' });
  const S = box(465, y0 + 30, 405, { body: '“At 6:40 on a January morning, a bus driver switches on her headlights... It is closer to biology: adolescents’ body clocks tend to shift later at puberty... Districts should therefore move the first bell later.”', size: 16, fill: C.tealLight, edge: C.tealDark });
  const h = Math.max(W.h, S.h);
  s += T(232, y0 + 16, 'Weak', { size: 19, weight: 700, anchor: 'middle', fill: C.rust }) + T(668, y0 + 16, 'Strong', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += box(30, y0 + 30, 405, { body: '“Since the beginning of time, people have argued about school start times. In this essay I will discuss both sides of this issue. School start times are an important topic that affects many people.”', size: 16, edge: C.rust, dash: '7 5', h }).s;
  s += box(465, y0 + 30, 405, { body: '“At 6:40 on a January morning, a bus driver switches on her headlights... It is closer to biology: adolescents’ body clocks tend to shift later at puberty... Districts should therefore move the first bell later.”', size: 16, fill: C.tealLight, edge: C.tealDark, h }).s;
  let y = y0 + 30 + h + 20;
  const R = [['Orients', 'a sweeping, empty claim', 'a specific scene and subject'], ['Engages', 'nothing at stake for the reader', 'a concrete image, then a surprising reframing'], ['Focuses', 'announces “both sides”, no position', 'a clear, defensible claim at the end'], ['Wasted words', '“In this essay I will...”', 'none: each sentence does one job']];
  R.forEach(([k, w, st]) => {
    s += rect(30, y, 840, 50, C.panel, C.panelEdge, 10);
    s += T(450, y + 31, k, { size: 16, weight: 700, anchor: 'middle' });
    s += T(50, y + 31, `✗ ${w}`, { size: 15, fill: C.rust });
    s += T(850, y + 31, `${st} ✓`, { size: 15, fill: C.tealDark, anchor: 'end' });
    y += 58;
  });
  return { s, h: y - 8 - y0 };
}, 'The weak introduction (“Since the beginning of time... In this essay I will discuss both sides”) beside the strong one (a bus driver at 6:40 on a January morning, body clocks, and a clear claim). A scorecard compares how each orients, engages, focuses and wastes words.',
'The strong version orients with a scene, engages with a reframing and ends on a claim.', '## Weak and strong introductions side by side');

// 05 Anthony's opening, job by job
fig('05-anthony-opening-jobs', 'One sentence, three jobs', 'Susan B. Anthony, “On Women’s Right to Vote”, 1873', (y0) => {
  let s = '';
  const c = chunks(30, y0 + 6, 840, [
    { text: 'Friends and fellow citizens:', fill: C.panel },
    { text: 'I stand before you tonight under indictment', label: 'ORIENT: who is speaking, and why', fill: C.tealLight },
    { text: 'for the alleged crime of having voted at the last presidential election,', label: 'ENGAGE: a citizen on trial for voting; “alleged” signals a contest', fill: C.cream },
    { text: 'without having a lawful right to vote.', label: 'FOCUS: sets up the question the speech will answer', fill: C.teal },
  ], { size: 18, gap: 8, minLabelW: 260, rowGap: 22 });
  s += c.s;
  let y = y0 + 6 + c.h + 30;
  s += box(30, y, 840, { head: 'Then the thesis arrives as an answer', body: 'Later in the speech she says her work that evening is to prove that in voting she “simply exercised” her rights as a citizen.', size: 16, fill: C.panel, edge: C.ink }).s;
  return { s, h: y + 90 - y0 };
}, 'Anthony’s opening sentence divided into parts: “I stand before you tonight under indictment” orients; “the alleged crime of having voted” engages, with “alleged” signalling a contest; “without having a lawful right to vote” focuses on the question the speech will answer. Her thesis that she “simply exercised” her rights follows later.',
'Name the strategy, then its effect: orienting, engaging or focusing.', '## Worked example 2: describing what a published introduction does');
