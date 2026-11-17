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

export const slug = 'ap-english-language-and-composition-5-6-precise-word-choice-study-guide';
const LESSON = 'src/content/ap-resources/english-language-and-composition/5-6-precise-word-choice-study-guide.md';

// 01 Two jobs of a modifier
fig('01-modifier-two-jobs', 'A modifier does two jobs at once', '', (y0) => {
  let s = '';
  s += rect(250, y0 + 20, 180, 60, C.cream, C.ink, 30, 3) + T(340, y0 + 57, 'so-called', { size: 22, weight: 700, anchor: 'middle' });
  s += rect(460, y0 + 20, 180, 60, C.panel, C.ink, 30, 2.5) + T(550, y0 + 57, 'solution', { size: 22, anchor: 'middle' });
  s += curve(`M380,${y0 + 18} C420,${y0 - 10} 500,${y0 - 10} 530,${y0 + 14}`, C.tealDark, 3, 'ahT');
  s += box(30, y0 + 110, 400, { head: '1  Qualifies or modifies', body: 'describes the thing: which solution, what kind', size: 16, align: 'middle', fill: C.tealLight, edge: C.tealDark, h: 90, vc: true }).s;
  s += box(470, y0 + 110, 400, { head: '2  Conveys a perspective', body: 'the writer doubts it is a solution at all', size: 16, align: 'middle', fill: C.cream, edge: C.olive, h: 90, vc: true }).s;
  s += arrow(320, y0 + 84, 260, y0 + 106, { w: 3 }) + arrow(360, y0 + 84, 620, y0 + 106, { w: 3 });
  let y = y0 + 230;
  const t1 = table(30, y, [280, 230, 330], [
    ['Phrase', 'Modifies', 'Conveys'],
    ['“a __modest__ proposal”', 'the proposal', 'restraint, reasonableness (or irony)'],
    ['“a __sweeping__ reform”', 'the reform', 'ambition, perhaps recklessness'],
    ['“__barely__ adequate”', 'the adjective', 'disapproval'],
    ['“__merely__ a suggestion”', 'the noun', 'dismissal'],
    ['“__fortunately__, the vote passed”', 'the whole sentence', 'approval of the result'],
    ['“the __regrettably__ necessary cuts”', 'the adjective', 'reluctance and justification'],
  ], { size: 15 });
  s += t1.s;
  return { s, h: y + t1.h - y0 };
}, '“So-called solution”: the modifier both qualifies the noun and conveys the writer’s doubt. A table shows six more modifiers, from “a modest proposal” to “the regrettably necessary cuts”, with what each modifies and the attitude it conveys.',
'Read modifiers for attitude, and choose them for attitude.', '## Two jobs for descriptive words');

// 02 Vague to precise + three habits
fig('02-vague-to-precise', 'From vague to precise', 'Precise means exact, not fancy', (y0) => {
  let s = '';
  const R = [['“The meeting was bad.”', '“The meeting ran two hours and ended without a decision.”'], ['“The shop sells many things.”', '“The shop sells bicycles, spare parts and secondhand maps.”'], ['“She went quickly to the door.”', '“She sprinted to the door.”'], ['“The result was very good.”', '“The result exceeded the target by a fifth.”'], ['“A thing happened.”', '“A pipe burst.”']];
  let y = y0;
  R.forEach(([a, b]) => {
    s += box(30, y, 320, { body: a, size: 16, h: 54, vc: true, pad: 14, edge: C.rust, dash: '6 5' }).s;
    s += arrow(356, y + 27, 394, y + 27, { w: 3 });
    s += box(400, y, 470, { body: b, size: 16, h: 54, vc: true, pad: 14, fill: C.tealLight, edge: C.tealDark }).s;
    y += 64;
  });
  y += 26;
  s += T(450, y, 'Three habits', { size: 18, weight: 700, anchor: 'middle' });
  const r = row(30, y + 16, 840, 16, [
    { head: 'Replace vague words', body: '__thing, stuff, good, bad, nice, very, really, a lot__ are signals to stop', size: 15 },
    { head: 'Strong verb, not verb + adverb', body: '“whispered” beats “said quietly”; “dashed” beats “ran quickly”', size: 15 },
    { head: 'Concrete nouns and numbers', body: 'when you can', size: 15 },
  ]);
  s += r.s;
  return { s, h: y + 16 + r.h - y0 };
}, 'Five vague sentences replaced by precise ones, such as “The meeting was bad” becoming “The meeting ran two hours and ended without a decision”. Below, three habits: replace vague words, prefer strong verbs to verb plus adverb, and use concrete nouns and numbers.',
'Precision reduces confusion; the exact word is often a plain one.', '## Precision');

// 03 Verdict vs information
fig('03-verdict-or-information', 'A verdict, or information?', 'Precision affects how the reader sees the writer’s stance', (y0) => {
  let s = '';
  const r = row(30, y0, 840, 40, [
    { head: 'Verdict', body: '“The policy failed.”\n\nThe writer has judged.', size: 18, align: 'middle', fill: C.cream, edge: C.olive, headColor: C.olive, h: 170, vc: true },
    { head: 'Information', body: '“The policy reduced waiting times by a minute but raised costs by a tenth.”\n\nThe writer trusts the reader to judge.', size: 17, align: 'middle', fill: C.tealLight, edge: C.tealDark, headColor: C.tealDark, h: 170, vc: true },
  ]);
  s += r.s + T(450, y0 + 92, 'or', { size: 18, weight: 700, anchor: 'middle', fill: C.muted });
  s += P(450, y0 + 210, 'In argument each can be right in its place; readers should know which they are getting.', { size: 16, anchor: 'middle', w: 820, fill: C.muted }).s;
  return { s, h: 222 };
}, 'Two boxes: a verdict, “The policy failed”, in which the writer has judged; and information, “The policy reduced waiting times by a minute but raised costs by a tenth”, which trusts the reader to judge.',
'A verdict tells readers what to think; precise information lets them judge.', '## Precision');

// 04 Lincoln and Paine modifiers
fig('04-modifiers-in-published-prose', 'Modifiers that carry feeling and judgement', 'Lincoln (1865) and Paine (1776)', (y0) => {
  let s = '';
  s += T(30, y0 + 12, 'Lincoln, Second Inaugural Address', { size: 18, weight: 700 });
  const c = chunks(30, y0 + 30, 840, [
    { text: 'Fondly', fill: C.cream, label: 'adverb: affection' },
    { text: 'do we hope—', fill: C.panel },
    { text: 'fervently', fill: C.cream, label: 'adverb: intensity' },
    { text: 'do we pray—that this', fill: C.panel },
    { text: 'mighty', fill: C.tealLight, label: 'immense force' },
    { text: 'scourge', fill: C.teal, label: 'a whip; suffering' },
    { text: 'of war may', fill: C.panel },
    { text: 'speedily', fill: C.cream, label: 'how soon' },
    { text: 'pass away.', fill: C.panel },
  ], { size: 18, gap: 6, minLabelW: 90, rowGap: 22 });
  s += c.s;
  let y = y0 + 30 + c.h + 14;
  s += P(30, y + 6, 'Inverted order (“Fondly do we hope”) puts the feeling before the thing hoped for.', { size: 16, w: 840, fill: C.muted }).s;
  y += 40;
  s += T(30, y + 12, 'Paine, The American Crisis', { size: 18, weight: 700 });
  const c2 = chunks(30, y + 30, 840, [
    { text: 'the', fill: C.panel },
    { text: 'summer', fill: C.cream, label: 'noun as modifier' },
    { text: 'soldier and the', fill: C.panel },
    { text: 'sunshine', fill: C.cream, label: 'noun as modifier' },
    { text: 'patriot', fill: C.panel },
  ], { size: 19, gap: 6, minLabelW: 120 });
  s += c2.s;
  y += 30 + c2.h + 14;
  s += box(30, y, 840, { body: 'Two short modifiers carry a whole judgement: they serve only in fair weather.', size: 16, align: 'middle', fill: C.panel, edge: C.olive }).s;
  return { s, h: y + 54 - y0 };
}, 'Lincoln’s sentence with its modifiers labelled: the adverbs “fondly”, “fervently” and “speedily”, and “mighty scourge” presenting war as a force of punishment. Below, Paine’s “summer soldier and the sunshine patriot”, where two nouns used as modifiers carry a judgement about fair-weather loyalty.',
'Short, well-placed modifiers can carry feeling, judgement and argument.', '## Modifiers in published prose');

// 05 Pool draft made precise
fig('05-pool-draft-precise', 'Making a draft precise', 'Worked example 1: repairing the public pool', (y0) => {
  let s = '';
  const V = [['“bad state”', '“falling apart” (a judgement the details must earn)'], ['“not nice”', 'floor tiles are cracked'], ['“a lot of things... broken”', 'two of the six showers do not work'], ['“problems”', 'a ceiling tile fell last month'], ['“very unpleasant”', 'a swimmer slipped on the **dangerously** wet floor']];
  s += T(185, y0 + 10, 'Vague (draft)', { size: 17, weight: 700, anchor: 'middle', fill: C.rust }) + T(620, y0 + 10, 'Precise (what the writer knows)', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  let y = y0 + 26;
  V.forEach(([a, b]) => {
    s += rect(60, y, 250, 48, '#f6e3d8', C.rust, 24, 2) + T(185, y + 30, a, { size: 16, anchor: 'middle' });
    s += arrow(316, y + 24, 364, y + 24, { w: 3 });
    s += box(370, y, 500, { body: b, size: 16, h: 48, vc: true, pad: 14, fill: C.tealLight, edge: C.tealDark }).s;
    y += 58;
  });
  s += box(30, y + 8, 840, { body: '“**Dangerously**” qualifies the floor and conveys the writer’s concern: a modifier added only where it helps.', size: 16, align: 'middle', fill: C.cream, edge: C.olive }).s;
  return { s, h: y + 62 - y0 };
}, 'Five vague phrases from the pool draft mapped to precise details: “bad state” to “falling apart”, “not nice” to cracked floor tiles, “a lot of things broken” to two of six showers not working, “problems” to a fallen ceiling tile, and “very unpleasant” to a swimmer slipping on the dangerously wet floor.',
'Replace vague words with what you actually know, then add a modifier only where it helps.', '## Worked example 1: making a draft precise');

// 06 Brochure: modifiers + exact details
fig('06-brochure-modifiers', 'Sceptical modifiers, exact details', 'Worked example 2: the council’s harbour brochure', (y0) => {
  let s = '';
  const c = chunks(30, y0 + 6, 840, [
    { text: 'The council’s', fill: C.panel },
    { text: 'sleek', fill: C.cream, label: 'style over substance' },
    { text: 'new brochure promises a', fill: C.panel },
    { text: 'bold', fill: C.cream, label: 'its own claim, with irony' },
    { text: 'vision for the harbour. It', fill: C.panel },
    { text: 'blandly', fill: C.cream, label: 'uninformative' },
    { text: 'announces', fill: C.panel },
    { text: '40 new jobs', fill: C.tealLight, label: 'exact detail' },
    { text: 'without saying where they will come from.', fill: C.panel },
    { text: 'Quietly,', fill: C.cream, label: 'concealment' },
    { text: 'on', fill: C.panel },
    { text: 'page nine,', fill: C.tealLight, label: 'exact detail' },
    { text: 'it admits that', fill: C.panel },
    { text: 'the fishermen’s slipway', fill: C.tealLight, label: 'exact detail' },
    { text: 'will close.', fill: C.panel },
  ], { size: 17, gap: 6, minLabelW: 100, rowGap: 22 });
  s += c.s;
  let y = y0 + 6 + c.h + 28;
  const r = row(30, y, 840, 24, [
    { head: 'Modifiers', body: 'tell the reader how to take the brochure: the writer distrusts it', size: 16, fill: C.cream, edge: C.olive },
    { head: 'Exact details', body: 'let the reader check the claims and give the scepticism a basis', size: 16, fill: C.tealLight, edge: C.tealDark },
  ]);
  s += r.s;
  return { s, h: y + r.h - y0 };
}, 'The brochure passage with modifiers highlighted in cream (sleek, bold, blandly, Quietly) and exact details in teal (40 new jobs, page nine, the fishermen’s slipway). Notes explain that the modifiers signal distrust and the details give that distrust a basis.',
'Sceptical modifiers signal the attitude; exact details let the reader share it.', '## Worked example 2: analysing modifiers and precise words');
