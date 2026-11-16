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

export const slug = 'ap-english-language-2-7-writing-defensible-thesis-study-guide';
const LESSON = 'src/content/ap-resources/english-language-and-composition/2-7-writing-defensible-thesis-study-guide.md';

// 01 Defensible zone
fig('01-defensible-zone', 'Between obvious and impossible', 'A defensible thesis needs a defence and can be given one', (y0) => {
  let s = '';
  const y = y0 + 40;
  s += `<rect x="30" y="${y}" width="250" height="70" rx="12" fill="#f6e3d8" stroke="${C.rust}" stroke-width="2.5"/>`;
  s += `<rect x="290" y="${y}" width="320" height="70" rx="12" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="3.5"/>`;
  s += `<rect x="620" y="${y}" width="250" height="70" rx="12" fill="#f6e3d8" stroke="${C.rust}" stroke-width="2.5"/>`;
  s += T(155, y + 30, 'Needs no defence', { size: 18, weight: 700, anchor: 'middle', fill: C.rust }) + T(155, y + 54, 'obvious or a bare fact', { size: 16, anchor: 'middle' });
  s += T(450, y + 30, 'Defensible', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(450, y + 54, 'arguable and supportable', { size: 16, anchor: 'middle' });
  s += T(745, y + 30, 'Cannot be defended', { size: 18, weight: 700, anchor: 'middle', fill: C.rust }) + T(745, y + 54, 'too vast or vague', { size: 16, anchor: 'middle' });
  s += T(30, y - 14, '← too safe', { size: 16, weight: 700, fill: C.muted }) + T(870, y - 14, 'too big →', { size: 16, weight: 700, fill: C.muted, anchor: 'end' });
  const ex = [['“Social media exists.”', 155], ['“Social media has made teenagers better informed but less able to concentrate.”', 450], ['“This policy will solve all of society’s problems.”', 745]];
  ex.forEach(([q, x], i) => {
    s += line(x, y + 72, x, y + 104, i === 1 ? C.tealDark : C.rust, 2.5);
    s += box(x - (i === 1 ? 150 : 120), y + 106, i === 1 ? 300 : 240, { body: q, size: 16, align: 'middle', h: 96, vc: true, fill: C.panel, edge: i === 1 ? C.tealDark : C.rust, dash: i === 1 ? '' : '6 5' }).s;
  });
  return { s, h: y + 210 - y0 };
}, 'A band with three zones. On the left, statements that need no defence, such as “Social media exists.” On the right, claims too vast to defend, such as “This policy will solve all of society’s problems.” In the middle, the defensible zone: “Social media has made teenagers better informed but less able to concentrate.”',
'A good thesis needs defending and can be defended in the space available.', '## What makes a thesis defensible');

// 02 Shapes to avoid
fig('02-thesis-shapes-to-avoid', 'Six shapes of thesis to avoid', '', (y0) => {
  const k = [
    ['Announcement', '“In this essay I will discuss pollution.”', 'a topic and a plan, not a position'],
    ['Fact', '“Pollution is a problem in many cities.”', 'nobody disputes it'],
    ['Restated prompt', '“Cars should or should not be banned.”', 'no stance on the question'],
    ['Vague evaluation', '“This speech is very effective.”', 'say how and why'],
    ['Unconnected list', '“The writer uses imagery, repetition and rhetorical questions.”', 'devices without what they accomplish'],
    ['Overreach', '“This policy will solve all of society’s problems.”', 'cannot be defended'],
  ];
  let s = '';
  const items = k.map(([h, q, why]) => ({ head: h, body: `${q}\n[[${why}]]`, size: 16, headSize: 19, pad: 16, edge: C.rust, dash: '7 5', headIndent: 34 }));
  const r1 = row(30, y0, 840, 16, items.slice(0, 3));
  const r2 = row(30, y0 + r1.h + 16, 840, 16, items.slice(3));
  s += r1.s + r2.s;
  const mark = (x, y) => circ(x, y, 13, C.panel, C.rust, 2.5) + line(x - 6, y - 6, x + 6, y + 6, C.rust, 3) + line(x + 6, y - 6, x - 6, y + 6, C.rust, 3);
  r1.xs.forEach((x) => { s += mark(x + 30, y0 + 30); });
  r2.xs.forEach((x) => { s += mark(x + 30, y0 + r1.h + 46); });
  return { s, h: r1.h + r2.h + 16 };
}, 'Six crossed-out cards with examples: an announcement (“In this essay I will discuss pollution”), a fact, a restated prompt, a vague evaluation, an unconnected list of devices, and an overreach that cannot be defended.',
'A thesis is a position, not a plan, a fact, a restatement or a list.', '## Shapes of thesis to avoid');

// 03 Formula slots
fig('03-thesis-scaffolds', 'Four thesis scaffolds', 'Scaffolds, not scripts', (y0) => {
  let s = '';
  const pats = [
    ['Claim + reason', [['Cities should ban cars from their centres', 'claim', C.cream], ['because', '', C.panel], ['the health benefits of cleaner air outweigh the inconvenience', 'reason', C.tealLight]]],
    ['Concession + claim', [['Although cars bring convenience,', 'concession', C.panel], ['city centres should be closed to them', 'claim', C.cream], ['because...', '', C.panel]]],
    ['Claim + qualification', [['City centres should be closed to private cars,', 'claim', C.cream], ['with exceptions for residents and deliveries,', 'qualification', C.tealLight], ['because...', '', C.panel]]],
    ['Rhetorical analysis', [['[Writer]', '', C.panel], ['uses [strategies]', 'choices', C.tealLight], ['to', 'the key word', C.mustard], ['[accomplish purpose]', 'effect', C.cream], ['for [audience]', '', C.panel]]],
  ];
  let y = y0;
  pats.forEach(([h, parts]) => {
    s += T(30, y + 14, h, { size: 19, weight: 700, fill: C.tealDark });
    const c = chunks(30, y + 30, 840, parts.map(([text, label, fill]) => ({ text, label, fill })), { size: 17, gap: 8, minLabelW: 90, rowGap: 14 });
    s += c.s;
    y += 30 + c.h + 30;
  });
  return { s, h: y - 30 - y0 };
}, 'Four scaffolds built from labelled blocks: claim plus reason; concession plus claim; claim plus qualification; and for rhetorical analysis, “[Writer] uses [strategies] to [accomplish purpose] for [audience]”, with “to” highlighted as the key word.',
'Use scaffolds to draft; in analysis, the key word is “to”: say what the choices accomplish.', '## Thesis formulas that work (and the danger of formulas)');

// 04 Four revision questions
fig('04-four-revision-questions', 'Revising a weak thesis', 'Four questions, four fixes', (y0) => {
  let s = '';
  const cx = 450, cy = y0 + 230;
  s += circ(cx, cy, 90, C.cream, C.ink, 3) + T(cx, cy - 4, 'Working', { size: 20, weight: 700, anchor: 'middle' }) + T(cx, cy + 22, 'thesis', { size: 20, weight: 700, anchor: 'middle' });
  const q = [
    [30, y0, 'Could a reasonable person disagree?', 'If not: make it more arguable.'],
    [570, y0, 'Is it specific?', 'No group, place or action? Narrow it.'],
    [570, y0 + 330, 'Does it say why?', 'Add the reason or consequence.'],
    [30, y0 + 330, 'Can I defend it in the time and space I have?', 'If not: reduce its scope.'],
  ];
  q.forEach(([x, y, h, b], i) => {
    s += box(x, y, 300, { head: `${i + 1}. ${h}`, body: b, size: 16, headSize: 18, h: 120, vc: true, fill: C.panel, edge: C.tealDark }).s;
  });
  const c = (d) => curve(d, C.tealDark, 3.5, 'ahT');
  s += c(`M335,${y0 + 60} C450,${y0 + 20} 470,${y0 + 20} 565,${y0 + 60}`);
  s += c(`M720,${y0 + 124} C760,${y0 + 200} 760,${y0 + 260} 720,${y0 + 326}`);
  s += c(`M565,${y0 + 390} C470,${y0 + 430} 430,${y0 + 430} 335,${y0 + 390}`);
  s += c(`M180,${y0 + 326} C140,${y0 + 260} 140,${y0 + 200} 180,${y0 + 124}`);
  return { s, h: 450 };
}, 'A cycle of four questions around a working thesis: could a reasonable person disagree, is it specific, does it say why, and can I defend it in the time and space I have? Each comes with its fix.',
'Arguable, specific, reasoned and the right size: test and revise in a loop.', '## Revising a weak thesis: four questions');

// 05 From topic to thesis
fig('05-topic-to-thesis', 'From topic to thesis', 'Worked example 1: cars in city centres', (y0) => {
  let s = '';
  s += box(30, y0, 840, { head: 'Draft', body: '“City centres and cars are a big problem today.”  [[Vague; takes no position.]]', size: 17, edge: C.rust, dash: '7 5', headColor: C.rust }).s;
  let y = y0 + 124;
  s += arrow(450, y - 30, 450, y - 4, { w: 4 });
  s += T(30, y + 14, 'Revised: position + qualification + reason', { size: 18, weight: 700, fill: C.tealDark });
  const c = chunks(30, y + 30, 840, [
    { text: 'City centres should be closed to private cars,', label: 'position', fill: C.cream },
    { text: 'with exceptions for residents and deliveries,', label: 'qualification', fill: C.panel },
    { text: 'because the gains in air quality and pedestrian safety', label: 'reason', fill: C.tealLight },
    { text: 'outweigh the inconvenience to drivers.', label: 'reason (weighed)', fill: C.tealLight },
  ], { size: 18, gap: 8, minLabelW: 120, rowGap: 18 });
  s += c.s;
  y += 30 + c.h + 30;
  const tests = [['Arguable', 'drivers and shopkeepers might dispute it'], ['Specific', 'area, exceptions, reason'], ['Focused', 'defensible in a few paragraphs'], ['Responsive', 'takes a position on the prompt']];
  const r = row(30, y, 840, 12, tests.map(([h, b]) => ({ head: `✓ ${h}`, body: b, size: 15, headSize: 17, pad: 12, headColor: C.tealDark })));
  s += r.s;
  return { s, h: y + r.h - y0 };
}, 'The vague draft “City centres and cars are a big problem today” becomes a thesis built from a position (close city centres to private cars), a qualification (exceptions for residents and deliveries) and a reason (air quality and pedestrian safety outweigh the inconvenience). Four ticks confirm it is arguable, specific, focused and responsive.',
'Take a position, add a reason, add a qualification, then test it.', '## Worked example 1: from topic to thesis');

// 06 Rhetorical analysis thesis anatomy
fig('06-analysis-thesis-anatomy', 'Anatomy of an analysis thesis', 'Worked example 2: the Gettysburg Address', (y0) => {
  let s = '';
  const c = chunks(30, y0 + 6, 840, [
    { text: 'By stressing that the living cannot add to what the dead have already consecrated,', label: 'the situation the choices respond to', fill: C.panel },
    { text: 'Lincoln uses', fill: C.panel },
    { text: 'humility, repetition and a turn to “us the living”', label: 'strategies', fill: C.tealLight },
    { text: 'to', label: 'key word', fill: C.mustard },
    { text: 'transform a memorial into a call to continue “the unfinished work”.', label: 'what the choices accomplish', fill: C.cream },
  ], { size: 18, gap: 8, minLabelW: 140, rowGap: 18 });
  s += c.s;
  let y = y0 + 6 + c.h + 30;
  const r = row(30, y, 840, 24, [
    { head: 'Weak', body: '“Lincoln uses repetition, imagery and a serious tone.” Names devices; could apply to any speech.', size: 16, edge: C.rust, dash: '7 5', headColor: C.rust },
    { head: 'Strong', body: 'Links the choices to a purpose for this audience: honour the dead, call the living to the work.', size: 16, fill: C.tealLight, edge: C.tealDark, headColor: C.tealDark },
  ]);
  s += r.s;
  return { s, h: y + r.h - y0 };
}, 'The model thesis on the Gettysburg Address split into labelled parts: the situation (“By stressing that the living cannot add...”), the strategies (humility, repetition and a turn to “us the living”), the key word “to”, and what the choices accomplish (a memorial becomes a call to continue the work). Below, a weak thesis only lists devices.',
'An analysis thesis says what the choices accomplish, not just which choices exist.', '## Worked example 2: a rhetorical analysis thesis');
