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

export const slug = 'ap-english-language-5-3-repetition-synonyms-parallelism-study-guide';
const LESSON = 'src/content/ap-resources/english-language-and-composition/5-3-repetition-synonyms-parallelism-study-guide.md';

// 01 Library promise annotated with four devices
fig('01-four-linking-devices', 'Four tools that link', 'All four at work in one paragraph', (y0) => {
  let s = '';
  const c = chunks(30, y0 + 6, 840, [
    { text: 'A library is a', fill: C.panel },
    { text: 'promise.', fill: C.cream, label: 'repetition' },
    { text: 'It', fill: C.tealLight, label: '→ library' },
    { text: 'promises that a child who has no books at home will find them;', fill: C.teal, label: 'parallel clause 1' },
    { text: 'it promises that a jobseeker who has no computer will find one;', fill: C.teal, label: 'parallel clause 2' },
    { text: 'it promises that a lonely person will find company.', fill: C.teal, label: 'parallel clause 3' },
    { text: 'A town that keeps', fill: C.panel },
    { text: 'this promise', fill: C.tealLight, label: 'clear reference back' },
    { text: 'keeps something more than a building.', fill: C.panel, label: 'abstract → concrete' },
  ], { size: 17, gap: 8, rowGap: 22, minLabelW: 120 });
  s += c.s;
  let y = y0 + 6 + c.h + 30;
  const t1 = table(30, y, [210, 330, 300], [
    ['Device', 'What it is', 'Main job'],
    ['Repetition', 'the same word, phrase or structure again', 'keeps attention on a key idea; emphasis, rhythm'],
    ['Synonym', 'a similar word in place of an earlier one', 'avoids monotony; adds a shade or progression'],
    ['Pronoun reference', 'it, they, this, which for an earlier noun', 'avoids clumsy repetition; ties sentences'],
    ['Parallel structure', 'matching grammatical form', 'shows equality or contrast; rhythm'],
  ], { size: 15, boldFirst: true });
  s += t1.s;
  return { s, h: y + t1.h - y0 };
}, 'The “library is a promise” paragraph with each device labelled: “promise” repeated, “It” referring to the library, three parallel “it promises that...” clauses, “this promise” referring back, and a final shift to “something more than a building”. A table summarises repetition, synonyms, pronoun reference and parallel structure.',
'Repetition, synonyms, pronouns and parallelism tell readers which ideas belong together.', '## Four tools that link');

// 02 Synonyms shift connotation / escalate
fig('02-synonyms-shift-meaning', 'No two words are exactly the same', '', (y0) => {
  let s = '';
  s += T(30, y0 + 12, 'A synonym can develop an idea: Lincoln’s escalation', { size: 18, weight: 700 });
  const st = ['dedicate', 'consecrate', 'hallow'];
  st.forEach((w, i) => {
    const x = 60 + i * 260, h = 50 + i * 30, y = y0 + 150 - h;
    s += rect(x, y, 220, h, [C.tealLight, C.teal, C.tealDark][i], C.ink, 8, 2.5) + T(x + 110, y + h / 2 + 7, w, { size: 20, weight: 700, anchor: 'middle', fill: i === 2 ? '#ffffff' : C.ink });
  });
  s += arrow(60, y0 + 170, 800, y0 + 170, { w: 3 }) + T(430, y0 + 196, 'each verb a step up in sacredness', { size: 15, anchor: 'middle', fill: C.muted, weight: 700 });
  let y = y0 + 236;
  s += T(30, y, 'A synonym can also change the claim: one event, three suggestions', { size: 18, weight: 700 });
  y += 18;
  const r = row(30, y, 840, 16, [
    { body: '“The council **decided**”', size: 18, align: 'middle', h: 60, vc: true, fill: C.panel },
    { body: '“The council **ruled**”', size: 18, align: 'middle', h: 60, vc: true, fill: C.cream, edge: C.olive },
    { body: '“The council **dictated**”', size: 18, align: 'middle', h: 60, vc: true, fill: '#f6e3d8', edge: C.rust },
  ]);
  s += r.s;
  s += P(450, y + 90, 'In argument, change the word and you may change the claim. Avoid shifting “cost” to “price” to “expense” without reason.', { size: 16, anchor: 'middle', w: 820, fill: C.muted }).s;
  return { s, h: y + 120 - y0 };
}, 'Lincoln’s near-synonyms dedicate, consecrate and hallow rise like steps in sacredness. Below, “the council decided”, “ruled” and “dictated” describe one event with different suggestions about how it was done.',
'A synonym varies the word but also shifts the meaning: use that on purpose.', '## Synonyms');

// 03 Pronoun problems
fig('03-pronoun-problems', 'When a pronoun points nowhere', 'A pronoun works only if its antecedent is unmistakable', (y0) => {
  let s = '';
  const R = [
    ['Ambiguous antecedent', '“The mayor told the engineer that **he** would approve the plan.”', 'Quote directly or name the person: “The mayor told the engineer, ‘I will approve the plan.’”', 2],
    ['Missing antecedent', '“In the report **they** say the road is unsafe.”', '“The report says the road is unsafe.”', 0],
    ['Vague “this” or “which”', '“The shops closed early. **This** caused anger.”', '“The early closing caused anger.”', 1],
    ['Distant antecedent', 'a pronoun three sentences after its noun', 'Repeat the noun or restructure', 1],
  ];
  let y = y0;
  R.forEach(([h, ex, fix, n]) => {
    const a = box(30, y, 420, { head: h, body: ex, size: 15, headSize: 17, pad: 14, edge: C.rust, headColor: C.rust });
    const b = box(500, y, 370, { body: fix, size: 15, pad: 14, fill: C.tealLight, edge: C.tealDark });
    const hh = Math.max(a.h, b.h);
    s += box(30, y, 420, { head: h, body: ex, size: 15, headSize: 17, pad: 14, edge: C.rust, headColor: C.rust, h: hh, vc: true }).s;
    s += box(500, y, 370, { body: fix, size: 15, pad: 14, fill: C.tealLight, edge: C.tealDark, h: hh, vc: true }).s;
    s += arrow(456, y + hh / 2, 494, y + hh / 2, { w: 3, color: C.tealDark, marker: 'ahT' });
    y += hh + 12;
  });
  s += box(30, y + 4, 840, { body: '**Habit:** follow “this”, “that” and “it” with a noun when the reference could be unclear: “This decision...”, “That change...”.', size: 16, align: 'middle', fill: C.cream, edge: C.olive }).s;
  return { s, h: y + 58 - y0 };
}, 'Four pronoun problems with repairs: an ambiguous “he” (the mayor or the engineer), a missing antecedent for “they”, a vague “This”, and a distant antecedent. A habit box recommends following “this”, “that” and “it” with a noun.',
'If the reader cannot tell what a pronoun stands for, name the noun.', '## Pronoun references');

// 04 Faulty vs parallel
fig('04-faulty-vs-parallel', 'Same status, same form', 'Faulty and deliberate parallelism', (y0) => {
  let s = '';
  const R = (a) => ({ text: a, fill: '#f6e3d8' }), G = (a) => ({ text: a, fill: C.tealLight }), N = (a) => ({ text: a, fill: C.panel });
  let y = y0;
  const ex = [
    [[N('She enjoys'), R('hiking,'), R('to swim'), R('and bicycles.')], [N('She enjoys'), G('hiking,'), G('swimming'), G('and cycling.')]],
    [[N('The plan will'), R('save money,'), R('improving safety'), R('and to reduce delays.')], [N('The plan will'), G('save money,'), G('improve safety'), G('and reduce delays.')]],
  ];
  ex.forEach(([f, g]) => {
    s += T(30, y + 24, '✗ Faulty', { size: 16, weight: 700, fill: C.rust });
    s += chunks(150, y, 720, f, { size: 16, gap: 6 }).s;
    s += T(30, y + 72, '✓ Parallel', { size: 16, weight: 700, fill: C.tealDark });
    s += chunks(150, y + 48, 720, g, { size: 16, gap: 6 }).s;
    y += 112;
  });
  y += 10;
  s += T(30, y, 'Deliberate parallelism', { size: 18, weight: 700 });
  y += 16;
  const d = [
    ['Equality', '“Life, Liberty and the pursuit of Happiness”', 'Declaration of Independence, 1776'],
    ['Rhythm and equal weight', '“of the people, by the people, for the people”', 'Lincoln, 1863'],
    ['Contrast', '“To err is human, to forgive, divine”', 'Pope, An Essay on Criticism, 1711'],
    ['Cause and effect feel inevitable', '“the harder the conflict, the more glorious the triumph”', 'Paine'],
  ];
  d.forEach(([h, q, src]) => {
    s += box(30, y, 260, { body: `**${h}**`, size: 16, h: 58, vc: true, pad: 14, fill: C.cream, edge: C.olive }).s;
    s += box(300, y, 570, { body: `${q}  __${src}__`, size: 16, h: 58, vc: true, pad: 14 }).s;
    y += 66;
  });
  return { s, h: y - 8 - y0 };
}, 'Two faulty lists (“hiking, to swim and bicycles”; “save money, improving safety and to reduce delays”) beside their parallel repairs. Below, deliberate parallelism showing equality (Life, Liberty and the pursuit of Happiness), rhythm (of the people, by the people, for the people), contrast (To err is human, to forgive, divine) and inevitability (Paine).',
'Parallelism means the same grammatical form, not the same words.', '## Parallel structure');

// 05 Repairing the committee passage
fig('05-repairing-the-passage', 'Repairing a passage', 'Worked example 1: the phone rule', (y0) => {
  let s = '';
  const R = [
    ['Pronouns', '“she said that **they** would change the rule. **It** was approved... **which** surprised the parents. **They** don’t like...”', '“...the principal, **who** said the school would change the rule... **The change** was approved... **a speed that** surprised the parents, **who** dislike quick changes.”'],
    ['Repetition', '“The new **policy** is a **policy** that sets **new** rules for the use of phones.”', '“The new policy sets limits on phones.”'],
    ['Parallelism', '“to use phones less, to be better at paying attention **and that phones should not interrupt lessons**.”', '“to use phones less, to pay better attention **and to keep lessons free from interruption**.”'],
  ];
  s += T(255, y0 + 10, 'Draft', { size: 18, weight: 700, anchor: 'middle', fill: C.rust }) + T(690, y0 + 10, 'Revision', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  let y = y0 + 26;
  R.forEach(([k, a, b]) => {
    s += T(30, y + 14, k, { size: 17, weight: 700 });
    y += 22;
    const A = box(30, y, 420, { body: a, size: 15, pad: 12, edge: C.rust, dash: '6 5' }), B = box(480, y, 390, { body: b, size: 15, pad: 12, fill: C.tealLight, edge: C.tealDark });
    const h = Math.max(A.h, B.h);
    s += box(30, y, 420, { body: a, size: 15, pad: 12, edge: C.rust, dash: '6 5', h, vc: true }).s + box(480, y, 390, { body: b, size: 15, pad: 12, fill: C.tealLight, edge: C.tealDark, h, vc: true }).s;
    s += arrow(454, y + h / 2, 476, y + h / 2, { w: 3 });
    y += h + 18;
  });
  return { s, h: y - 18 - y0 };
}, 'Three repairs to the committee passage. Pronouns: vague “they”, “It”, “which” and “They” become “who”, “The change” and “a speed that”. Repetition: “The new policy is a policy that sets new rules” becomes “The new policy sets limits on phones.” Parallelism: a mixed list becomes three matching infinitives.',
'Give every pronoun a clear antecedent, cut empty repetition, match list forms.', '## Worked example 1: repairing a passage');

// 06 Gettysburg devices
fig('06-gettysburg-devices', 'Four devices in two sentences', 'Lincoln, Gettysburg Address, 1863', (y0) => {
  let s = '';
  const c = chunks(30, y0 + 6, 840, [
    { text: 'we can not', fill: C.cream, label: 'repetition' },
    { text: 'dedicate—', fill: C.tealLight, label: 'synonym 1' },
    { text: 'we can not', fill: C.cream, label: 'repetition' },
    { text: 'consecrate—', fill: C.teal, label: 'synonym 2' },
    { text: 'we can not', fill: C.cream, label: 'repetition' },
    { text: 'hallow—', fill: C.teal, label: 'synonym 3' },
    { text: 'this ground.', fill: C.panel, label: 'antecedent' },
  ], { size: 19, gap: 6, minLabelW: 80, rowGap: 24 });
  s += c.s;
  let y = y0 + 6 + c.h + 26;
  const c2 = chunks(30, y, 840, [
    { text: 'The brave men, living and dead, who struggled here, have', fill: C.panel },
    { text: 'consecrated', fill: C.teal, label: 'returns: what the dead already did' },
    { text: 'it,', fill: C.tealLight, label: '→ this ground' },
    { text: 'far above our poor power to', fill: C.panel },
    { text: 'add or detract.', fill: C.cream, label: 'paired opposites' },
  ], { size: 17, gap: 6, minLabelW: 100, rowGap: 24 });
  s += c2.s;
  y += c2.h + 26;
  s += box(30, y, 840, { body: 'A rhythm of solemn denial, then the turn: what the living **cannot** do, the dead **already did**.', size: 17, align: 'middle', fill: C.cream, edge: C.olive }).s;
  return { s, h: y + 56 - y0 };
}, 'The Gettysburg passage with devices labelled: “we can not” repeated three times, the escalating synonyms dedicate, consecrate and hallow, “it” referring to “this ground”, “consecrated” returning in the second sentence, and the paired opposites “add or detract”.',
'Repetition and escalation build denial; the returning word makes the turn.', '## Worked example 2: analysing a passage');
