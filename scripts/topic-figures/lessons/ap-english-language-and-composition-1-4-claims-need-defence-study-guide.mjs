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

export const slug = 'ap-english-language-and-composition-1-4-claims-need-defence-study-guide';
const LESSON = 'src/content/ap-resources/english-language-and-composition/1-4-claims-need-defence-study-guide.md';

// 01 Decision tree: fact, topic, preference, claim
fig('01-is-it-a-claim', 'Is it a claim?', 'Sorting the four kinds of statement from Worked example 1', (y0) => {
  let s = '';
  const qx = 30, qw = 420;
  const qs = [
    ['Does it assert anything?', 'no', 'Topic', '“Homework.”', 'names a subject; asserts nothing'],
    ['Is it only a personal taste?', 'yes', 'Preference', '“I prefer to do my homework in the morning.”', 'nobody can prove it wrong'],
    ['Could a reasonable person disagree?', 'no', 'Fact', '“The school day currently ends at 3.30 p.m.”', 'can be checked; not in dispute'],
  ];
  let y = y0;
  const gap = 34, qh = 64;
  qs.forEach(([q, ans, lab, ex, why], i) => {
    s += rect(qx, y, qw, qh, C.tealLight, C.tealDark, 32, 2.5) + T(qx + qw / 2, y + qh / 2 + 7, q, { size: 19, weight: 700, anchor: 'middle' });
    s += arrow(qx + qw + 4, y + qh / 2, 520, y + qh / 2, { w: 3.5 });
    s += T(487, y + qh / 2 - 10, ans, { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
    const b = box(526, y - 8, 344, { head: lab, body: `${ex} __${why}__`, size: 16, pad: 12, headSize: 19, h: qh + 16 + 12 });
    s += b.s;
    const other = ans === 'no' ? 'yes' : 'no';
    if (i < 2) { s += arrow(qx + qw / 2, y + qh + 2, qx + qw / 2, y + qh + gap + 14, { w: 3.5 }); s += T(qx + qw / 2 + 14, y + qh + 28, other, { size: 16, weight: 700, fill: C.tealDark }); }
    y += qh + gap + 16;
  });
  y -= qh + gap + 16;
  s += arrow(qx + qw / 2, y + qh + 2, qx + qw / 2, y + qh + 44, { w: 3.5 });
  s += T(qx + qw / 2 + 14, y + qh + 30, 'yes', { size: 16, weight: 700, fill: C.tealDark });
  y += qh + 50;
  const c = box(30, y, 840, { head: 'Claim: needs a defence', body: '“Homework in primary schools does more harm than good.” A teacher or parent could dispute it, so it needs evidence about learning and wellbeing.', size: 17, fill: C.cream, edge: C.ink, sw: 3 });
  s += c.s;
  return { s, h: y + c.h - y0 };
}, 'A decision tree. A statement that asserts nothing is a topic (“Homework.”). One that reports a personal taste is a preference. One that no reasonable person would dispute is a fact (“The school day currently ends at 3.30 p.m.”). Only a statement a reasonable person could dispute is a claim, which needs a defence.',
'Ask: could a reasonable person disagree, and would I need evidence to persuade them?', '## Claim, fact, topic, preference: four things that are not the same');

// 02 Kinds of claim
fig('02-kinds-of-claim', 'Five kinds of claim', 'The kind tells you what must be defended', (y0) => {
  const k = [
    ['Fact or existence', 'is, was or will be true (disputed)', '“Noise from the bypass has made the village measurably louder.”', ''],
    ['Definition', 'what something counts as', '“A library is public infrastructure, not an optional service.”', ''],
    ['Cause', 'one thing produces another', '“Later start times improve test scores.”', 'needs a causal link, not only a correlation'],
    ['Value', 'worth or rightness', '“It is wrong to charge children to use a public library.”', ''],
    ['Policy', 'what should be done', '“The council should restore the library’s hours.”', 'needs a problem and a workable remedy'],
  ];
  let s = '', y = y0;
  for (const [h, sub, ex, need] of k) {
    const right = box(300, y, need ? 330 : 570, { body: ex, size: 17, pad: 14 });
    const hh = Math.max(right.h, 70, box(30, y, 250, { head: h, body: `__${sub}__`, size: 15, headSize: 19, pad: 14 }).h);
    s += box(30, y, 250, { head: h, body: `__${sub}__`, size: 15, headSize: 19, fill: C.tealLight, edge: C.tealDark, pad: 14, h: hh, vc: true }).s;
    s += box(300, y, need ? 330 : 570, { body: ex, size: 17, pad: 14, h: hh, vc: true }).s;
    if (need) s += box(650, y, 220, { body: `**Defence:** ${need}`, size: 15, fill: C.cream, edge: C.olive, pad: 12, h: hh, vc: true }).s;
    y += hh + 12;
  }
  return { s, h: y - 12 - y0 };
}, 'Five rows name kinds of claim with the lesson’s examples: fact or existence (bypass noise), definition (a library is public infrastructure), cause (later start times improve test scores), value (charging children is wrong) and policy (restore the library’s hours). Cause needs a causal link; policy needs a problem and a workable remedy.',
'Knowing the kind of claim tells you what the defence must show.', '## Kinds of claim');

// 03 Four tests and three upgrades
fig('03-weak-to-strong-claims', 'From weak to strong claims', '', (y0) => {
  let s = '';
  const tests = [['Arguable', 'others could disagree'], ['Specific', 'what, and for whom'], ['Supportable', 'evidence, not feeling'], ['Significant', 'the audience cares']];
  const r = row(30, y0, 840, 14, tests.map(([h, b]) => ({ head: h, body: b, align: 'middle', size: 16, fill: C.tealLight, edge: C.tealDark, pad: 14, headColor: C.tealDark })));
  s += r.s;
  let y = y0 + r.h + 30;
  const ex = [
    ['“Social media is a big part of life today.”', 'Obvious; no one disagrees.', '“Social media has made teenagers better informed about world events but worse at sustaining attention on any single one.”'],
    ['“School lunches are important.”', 'Vague and uncontroversial.', '“Free school lunches for every pupil would do more for attainment than reducing class sizes by two.”'],
    ['“Everyone has their own opinion about uniforms.”', 'About opinions, not a position.', '“School uniforms should be optional because they cost families more than they save in distraction.”'],
  ];
  for (const [w, why, st] of ex) {
    const a = box(30, y, 300, { body: w, size: 16, pad: 14, dash: '6 5', edge: C.rust });
    const b = box(420, y, 450, { body: st, size: 16, pad: 14, fill: C.cream, edge: C.olive });
    const h = Math.max(a.h, b.h);
    s += box(30, y, 300, { body: w, size: 16, pad: 14, dash: '6 5', edge: C.rust, h, vc: true }).s;
    s += box(420, y, 450, { body: st, size: 16, pad: 14, fill: C.cream, edge: C.olive, h, vc: true }).s;
    s += arrow(336, y + h / 2, 412, y + h / 2, { w: 4 });
    s += T(30, y + h + 20, why, { size: 15, fill: C.rust, weight: 700 });
    y += h + 40;
  }
  s += P(450, y + 8, 'The stronger versions take a side, name specifics and invite the reader to ask “Why?”', { size: 17, anchor: 'middle', w: 820, fill: C.muted }).s;
  return { s, h: y + 20 - y0 };
}, 'Four tests for a strong claim, arguable, specific, supportable and significant, sit above three upgrades: an obvious statement about social media, a vague one about school lunches and a statement about opinions on uniforms each become a specific position a reader could dispute.',
'A strong claim takes a side, names specifics and invites the question “Why?”', '## Making a claim defensible and interesting');

// 04 Main claim and sub-claims
fig('04-main-claim-sub-claims', 'Main claim and sub-claims', '', (y0) => {
  let s = '';
  s += box(200, y0, 500, { head: 'Main claim', body: 'the overarching position of the whole text', align: 'middle', fill: C.cream, edge: C.ink, sw: 3, h: 92, vc: true }).s;
  const xs = [30, 315, 600];
  xs.forEach((x, i) => {
    s += curve(`M450,${y0 + 94} C450,${y0 + 130} ${x + 135},${y0 + 120} ${x + 135},${y0 + 150}`, C.ink, 3, '');
    s += box(x, y0 + 156, 270, { head: `Sub-claim ${i + 1}`, body: 'usually one per paragraph', align: 'middle', size: 16, fill: C.tealLight, edge: C.tealDark, h: 84, vc: true }).s;
  });
  let y = y0 + 280;
  s += T(450, y, 'How the main claim can appear', { size: 19, weight: 700, anchor: 'middle' });
  y += 18;
  const r = row(30, y, 840, 24, [
    { head: 'Explicit', body: 'Said in a sentence you can quote.', size: 16, align: 'middle' },
    { head: 'Implicit', body: 'Deduced from evidence, tone and choices: summarise what the text argues.', size: 16, align: 'middle', dash: '7 5' },
    { head: 'Built toward', body: 'Appears at the end: read the whole text before naming it.', size: 16, align: 'middle' },
  ]);
  s += r.s;
  s += box(30, y + r.h + 20, 840, { body: '**Practise:** state the main claim in one sentence, then list the sub-claims.', size: 17, align: 'middle', fill: C.cream, edge: C.olive }).s;
  return { s, h: y + r.h + 76 - y0 };
}, 'A tree with the main claim at the top branching to three sub-claims, usually one per paragraph. Below, the main claim may be explicit and quotable, implicit and deduced from evidence and tone, or built toward and revealed at the end.',
'Find the main claim however it is presented, then list the sub-claims that support it.', '## Explicit and implicit claims');

// 05 Building a claim step by step
fig('05-building-a-claim', 'Turning an obvious statement into a claim', 'Worked example 2', (y0) => {
  let s = '';
  const steps = [
    ['Draft', '“Technology is changing how we learn.”', 'True but obvious: nothing to defend.', C.panel, C.rust],
    ['+ a specific technology', '“Tablets...”', 'adds specificity', C.panel, C.tealDark],
    ['+ a specific setting', '“...in school classrooms...”', 'narrower, supportable scope', C.panel, C.tealDark],
    ['+ a two-sided assertion', '“...improve... but weaken...”', 'a position a reader can dispute, with a built-in line of reasoning', C.panel, C.tealDark],
  ];
  let y = y0;
  steps.forEach(([h, q, note, f, e], i) => {
    s += rect(30, y, 210, 64, i ? C.tealLight : C.panel, e, 32, 2.5) + T(135, y + 39, h, { size: 17, weight: 700, anchor: 'middle', fill: e });
    s += T(270, y + 28, q, { size: 19, italic: true });
    s += P(270, y + 53, note, { size: 16, fill: C.muted, w: 590 }).s;
    if (i < 3) s += arrow(135, y + 66, 135, y + 92, { w: 3 });
    y += 96;
  });
  y += 4;
  const fin = box(30, y, 840, { head: 'Result', body: '“Tablets in school classrooms improve pupils’ access to information but weaken their ability to read at length.”', size: 19, fill: C.cream, edge: C.ink, sw: 3 });
  s += fin.s;
  y += fin.h + 16;
  const r = row(30, y, 840, 24, [{ body: 'Ask **“Why?”**', size: 18, align: 'middle', h: 50, vc: true }, { body: 'Ask **“How do you know?”**', size: 18, align: 'middle', h: 50, vc: true }]);
  s += r.s + T(450, y + 32, '+', { size: 22, weight: 700, anchor: 'middle' });
  s += P(450, y + r.h + 28, 'If evidence answers both, the claim is defensible.', { size: 17, anchor: 'middle', fill: C.muted, w: 800 }).s;
  return { s, h: y + r.h + 40 - y0 };
}, 'A ladder of revisions: “Technology is changing how we learn” gains a specific technology (tablets), a specific setting (school classrooms) and a two-sided assertion, producing “Tablets in school classrooms improve pupils’ access to information but weaken their ability to read at length.”',
'Each change adds specificity, scope or a disputable position.', '## Worked example 2: turning an obvious statement into a claim');

// 06 Reader reaction test
fig('06-reader-reaction-test', 'The reader-reaction test', '', (y0) => {
  let s = '';
  const bubble = (x, y, w, text, fill, edge, tail) => {
    const h = 52;
    return rect(x, y, w, h, fill, edge, 26, 2.5) + `<path d="M${tail},${y + h - 1} l-8,18 l22,-18 z" fill="${fill}" stroke="${edge}" stroke-width="2.5" stroke-linejoin="round"/>` + `<rect x="${tail - 10}" y="${y + h - 4}" width="26" height="5" fill="${fill}"/>` + T(x + w / 2, y + h / 2 + 7, text, { size: 19, weight: 700, anchor: 'middle' });
  };
  const col = (x, head, stmt, rep, fill, edge) => {
    let r = T(x + 200, y0 + 10, head, { size: 21, weight: 700, anchor: 'middle', fill: edge });
    r += box(x, y0 + 30, 400, { body: stmt, size: 18, align: 'middle', h: 90, vc: true, fill: C.panel }).s;
    r += arrow(x + 200, y0 + 124, x + 200, y0 + 156, { w: 3 });
    r += T(x + 200, y0 + 182, 'a reader replies:', { size: 16, anchor: 'middle', fill: C.muted });
    rep.forEach((t2, i) => { r += bubble(x + 40 + i * 30, y0 + 200 + i * 80, 300, t2, fill, edge, x + 90 + i * 30); });
    return r;
  };
  s += col(30, 'Claim', '“Homework in primary schools does more harm than good.”', ['“Why?”', '“No, I don’t think so.”'], C.cream, C.olive);
  s += col(470, 'Fact', '“The school day currently ends at 3.30 p.m.”', ['“Is that so?”', '“OK.”'], C.tealLight, C.tealDark);
  s += line(450, y0, 450, y0 + 360, C.panelEdge, 2, '6 6');
  return { s, h: 360 };
}, 'Two columns. A claim, “Homework in primary schools does more harm than good”, draws replies such as “Why?” and “No, I don’t think so.” A fact, “The school day currently ends at 3.30 p.m.”, draws “Is that so?” and “OK.”',
'A claim invites “Why?”; a fact invites “OK.”', '## Reading tip: ask the sentence the "so what?" question');
