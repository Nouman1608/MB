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

export const slug = 'ap-english-language-and-composition-2-6-identifying-thesis-study-guide';
const LESSON = 'src/content/ap-resources/english-language-and-composition/2-6-identifying-thesis-study-guide.md';

// 01 Thesis as trunk
fig('01-thesis-tree', 'The thesis is the trunk', 'Find the trunk and you see how the whole text holds together', (y0) => {
  let s = '';
  const base = y0 + 470, tx = 450;
  // ground
  s += `<rect x="30" y="${base}" width="840" height="14" rx="7" fill="${C.rock}"/>`;
  // trunk
  s += `<path d="M${tx - 34},${base} L${tx - 24},${y0 + 230} L${tx + 24},${y0 + 230} L${tx + 34},${base} Z" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  // branches
  const br = [[tx - 10, y0 + 250, 230, y0 + 150], [tx, y0 + 235, 450, y0 + 110], [tx + 10, y0 + 250, 670, y0 + 150]];
  br.forEach(([x1, y1, x2, y2]) => { s += path(`M${x1},${y1} Q${(x1 + x2) / 2},${y1 - 10} ${x2},${y2}`, { stroke: C.rockDark, w: 14 }); });
  // leaves
  const leaves = [[200, 120], [250, 100], [180, 160], [270, 145], [420, 80], [480, 78], [450, 50], [640, 120], [700, 105], [690, 160], [620, 155]];
  leaves.forEach(([x, y]) => { s += `<ellipse cx="${x}" cy="${y0 + y}" rx="22" ry="14" fill="${C.grass}" stroke="${C.ink}" stroke-width="2" opacity="0.9"/>`; });
  // labels
  s += box(tx - 150, y0 + 300, 300, { head: 'Thesis', body: 'the main, overarching claim', align: 'middle', fill: C.cream, edge: C.ink, sw: 3, size: 16, h: 84, vc: true }).s;
  s += box(30, y0 + 230, 270, { head: 'Branches', body: 'each paragraph’s claim', size: 16, h: 74, vc: true, align: 'middle' }).s;
  s += box(600, y0 + 230, 270, { head: 'Leaves', body: 'the evidence', size: 16, h: 74, vc: true, align: 'middle' }).s;
  s += line(300, y0 + 250, 330, y0 + 210, C.ink, 2.5) + line(600, y0 + 250, 690, y0 + 175, C.ink, 2.5);
  s += box(30, base + 34, 840, { body: 'Also describe any indication of **structure**: some theses preview the order (“because of X, Y and Z”); others leave you to work it out.', size: 17, align: 'middle', fill: C.panel }).s;
  return { s, h: base + 34 + 60 - y0 };
}, 'A tree diagram: the thesis is the trunk, each paragraph’s claim is a branch and the evidence is the leaves. A note adds that some theses preview the structure of the argument and others do not.',
'Find the thesis, then describe what it shows about the argument’s structure.', '## What a thesis is');

// 02 Where the thesis can sit
fig('02-where-the-thesis-sits', 'Where the thesis can sit', 'Never assume it is in the first paragraph', (y0) => {
  let s = '';
  const pats = [
    ['Thesis first', 'early, then supported', 'first'],
    ['Thesis last', 'after evidence and reasoning build to it', 'last'],
    ['Thesis implied', 'never stated; deduced from the whole text', 'implied'],
    ['Across sentences', 'two or three sentences work together', 'across'],
  ];
  const w = 195, gap = 20;
  pats.forEach(([h, b, kind], i) => {
    const x = 30 + i * (w + gap), y = y0;
    s += rect(x, y, w, 260, C.panel, C.ink, 8, 2.5);
    for (let p = 0; p < 4; p++) {
      for (let l = 0; l < 4; l++) {
        const ly = y + 22 + p * 58 + l * 12;
        let fill = C.panelEdge, ww = l === 3 ? 100 : 160;
        if (kind === 'first' && p === 0 && l >= 2) fill = C.mustard;
        if (kind === 'last' && p === 3 && l >= 2) fill = C.mustard;
        if (kind === 'across' && ((p === 0 && l === 3) || (p === 1 && l <= 1))) fill = C.mustard;
        s += `<rect x="${x + 18}" y="${ly}" width="${ww}" height="7" rx="3" fill="${fill}"/>`;
      }
    }
    if (kind === 'implied') s += `<rect x="${x + 8}" y="${y + 12}" width="${w - 16}" height="236" rx="6" fill="none" stroke="${C.olive}" stroke-width="3" stroke-dasharray="8 6"/>`;
    s += P(x + w / 2, y + 290, `**${h}**`, { size: 18, anchor: 'middle', w: w }).s;
    s += P(x + w / 2, y + 314, b, { size: 15, anchor: 'middle', w: w - 10, fill: C.muted }).s;
  });
  s += `<rect x="30" y="${y0 + 370}" width="24" height="10" rx="3" fill="${C.mustard}"/>` + T(64, y0 + 380, 'thesis stated', { size: 16 });
  s += `<rect x="230" y="${y0 + 366}" width="30" height="18" rx="4" fill="none" stroke="${C.olive}" stroke-width="3" stroke-dasharray="8 6"/>` + T(270, y0 + 380, 'thesis carried by the whole text', { size: 16 });
  return { s, h: 390 };
}, 'Four page schematics with the thesis highlighted: at the start (thesis first), at the end (thesis last), across the end of one paragraph and the start of the next (across sentences), and nowhere stated but carried by the whole text (implied).',
'The thesis may come first, last, across sentences, or only by implication.', '## A thesis is not always one sentence, and not always stated');

// 03 Look-alikes
fig('03-thesis-look-alikes', 'Thesis or look-alike?', 'Examples on the topic of street trees', (y0) => {
  let s = '';
  const la = [
    ['Topic', '“Street trees.”', 'asserts nothing'],
    ['Fact or summary', '“The council removed fifteen trees between 2019 and now.”', 'no position'],
    ['Sub-claim', '“The repairs cost less than the newsletter.”', 'supports one paragraph'],
    ['Announcement', '“This essay will discuss street trees.”', 'what it will do, not claim'],
    ['Counterargument', '“The council says trees cost too much.”', 'the view to be answered'],
    ['Question', '“Are trees worth keeping?”', 'raises but does not answer'],
  ];
  const cx = 450, cy = y0 + 250;
  s += box(cx - 140, cy - 70, 280, { head: 'Thesis', body: 'the sentence every paragraph, taken together, is trying to prove', align: 'middle', fill: C.cream, edge: C.ink, sw: 3, size: 16, h: 140, vc: true }).s;
  const pos = [[30, y0], [610, y0], [30, cy - 60], [610, cy - 60], [30, cy + 110], [610, cy + 110]];
  la.forEach(([h, ex, why], i) => {
    const [x, y] = pos[i];
    s += box(x, y, 260, { head: h, body: `${ex}\n[[${why}]]`, size: 15, headSize: 17, pad: 12, h: 120, vc: true, dash: '6 5', edge: C.rust }).s;
  });
  const y = cy + 250;
  s += box(30, y, 840, { body: '**Removal test:** if a sentence could be removed without changing the rest of the argument, it is probably not the thesis.', size: 17, align: 'middle', fill: C.panel, edge: C.tealDark }).s;
  return { s, h: y + 56 - y0 };
}, 'The thesis sits in the centre, defined as the sentence every paragraph together tries to prove. Around it are six look-alikes with examples: a topic, a fact, a sub-claim, an announcement, a counterargument and a question.',
'A thesis is what every paragraph, taken together, is trying to prove.', '## Thesis versus things that are not the thesis');

// 04 Declaration of Sentiments: the argument in miniature
fig('04-and-women', 'The whole argument in miniature', 'Declaration of Sentiments, Seneca Falls, 1848', (y0) => {
  let s = '';
  s += T(30, y0 + 12, 'Declaration of Independence (1776)', { size: 17, weight: 700, fill: C.muted });
  s += box(30, y0 + 26, 840, { body: '“...that all men are created equal”', size: 22, align: 'middle', pad: 18 }).s;
  const y = y0 + 140;
  s += T(30, y + 12, 'Declaration of Sentiments (1848)', { size: 17, weight: 700, fill: C.tealDark });
  const c = chunks(140, y + 30, 760, [
    { text: '“...that all men', fill: C.panel },
    { text: 'and women', fill: C.mustard, label: 'the added words' },
    { text: 'are created equal”', fill: C.panel },
  ], { size: 22, gap: 8 });
  s += c.s;
  const y2 = y + 30 + c.h + 26;
  const r = row(30, y2, 840, 24, [
    { head: 'Stated thesis', body: '“We hold these truths to be self-evident: that all men and women are created equal.”', size: 16, fill: C.cream, edge: C.ink },
    { head: 'Everything else serves it', body: 'The list of grievances and the resolutions support the claim and demand its consequences in law.', size: 16 },
  ]);
  s += r.s;
  return { s, h: y2 + r.h - y0 };
}, 'The Declaration of Independence’s “all men are created equal” is set above the Declaration of Sentiments’ “all men and women are created equal”, with “and women” highlighted. Below, the stated thesis is supported by the grievances and resolutions that follow.',
'Two added words, “and women”, carry the whole argument.', '## A public-domain example of a stated thesis: the Declaration of Sentiments (1848)');

// 05 Swift: narrator vs writer
fig('05-swift-implied-thesis', 'Narrator’s claim, writer’s thesis', 'Swift, “A Modest Proposal”, 1729', (y0) => {
  let s = '';
  const h = 170;
  s += box(30, y0, 380, { head: 'What the narrator proposes', body: 'Calmly: the poor of Ireland should sell their children as food.', size: 17, edge: C.rust, headColor: C.rust, dash: '7 5', h, vc: true }).s;
  s += box(490, y0, 380, { head: 'What Swift implies', body: 'Irish arrangements already treat the poor as a commodity; real reform, not callous projects, is required.', size: 17, fill: C.cream, edge: C.ink, sw: 3, h, vc: true }).s;
  s += curve(`M414,${y0 + 60} C450,${y0 + 30} 450,${y0 + 30} 484,${y0 + 60}`, C.ink, 3.5);
  s += curve(`M484,${y0 + 110} C450,${y0 + 140} 450,${y0 + 140} 414,${y0 + 110}`, C.ink, 3.5);
  s += T(450, y0 + 92, 'opposite', { size: 15, weight: 700, anchor: 'middle', fill: C.muted });
  const y = y0 + h + 30;
  s += T(450, y, 'How a thorough reading finds it', { size: 19, weight: 700, anchor: 'middle' });
  const r = row(30, y + 18, 840, 18, [
    { head: 'Context', body: 'Irish poverty under English policy and landlord indifference', size: 16 },
    { head: 'Target', body: 'officials who treat the poor as an economic resource', size: 16 },
    { head: 'The signal', body: 'the narrator rejects real remedies, such as taxing absentee landlords', size: 16, fill: C.tealLight, edge: C.tealDark },
  ]);
  s += r.s;
  return { s, h: y + 18 + r.h - y0 };
}, 'Two boxes face each other: the narrator calmly proposes that the poor of Ireland sell their children as food; Swift implies that the poor are already treated as a commodity and real reform is needed. Below, context, the satirical target and the rejected remedies reveal the implied thesis.',
'In satire, the writer’s thesis can be the opposite of the narrator’s proposal.', '## A public-domain example of an implied thesis: Swift\'s "A Modest Proposal" (1729)');

// 06 Orchard Road: thesis last
fig('06-orchard-road-thesis-last', 'A thesis that arrives last', 'Worked example 1: Orchard Road (invented figures)', (y0) => {
  let s = '';
  const paras = [
    ['¶1', 'The council has been removing trees; residents notice.', [['fact', '“In 2019 there were forty-one; today there are twenty-six.”']]],
    ['¶2', 'The council’s objection (cost) is real but outweighed by the benefits.', [['counterargument', '“The council says the trees lift paving and block drains...”'], ['sub-claim', '“The repairs come to about £3,000 a year...”']]],
  ];
  let y = y0;
  paras.forEach(([n, sum, items]) => {
    const b = box(100, y, 770, { body: `**${sum}**\n` + items.map(([k, q]) => `[[${k}:]] ${q}`).join('\n'), size: 16, pad: 14 });
    s += b.s + rect(30, y, 56, b.h, C.tealLight, C.tealDark, 10, 2.5) + T(58, y + b.h / 2 + 7, n, { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
    y += b.h + 10;
    s += arrow(485, y - 6, 485, y + 16, { w: 3 });
    y += 22;
  });
  const t = box(100, y, 770, { head: 'Thesis', body: '“Orchard Road does not need fewer trees; it needs a council that counts what the trees give as carefully as it counts what they cost.”', size: 17, fill: C.cream, edge: C.ink, sw: 3 });
  s += t.s + rect(30, y, 56, t.h, C.mustard, C.ink, 10, 2.5) + T(58, y + t.h / 2 + 7, '¶3', { size: 18, weight: 700, anchor: 'middle' });
  y += t.h + 20;
  s += P(450, y + 8, 'The loss, the objection, the answer, then the position: the delay lets the writer build evidence and concede first.', { size: 16, anchor: 'middle', w: 820, fill: C.muted }).s;
  return { s, h: y + 30 - y0 };
}, 'The three paragraphs of the Orchard Road passage as a downward flow. Paragraph one sets out the loss, including a fact; paragraph two gives the counterargument and a sub-claim; paragraph three states the thesis that the council should count what trees give as carefully as what they cost.',
'Summarise each paragraph, then find the claim they all support.', '## Worked example 1: a delayed thesis (written by Marlbridge)');
