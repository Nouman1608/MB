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

export const slug = 'ap-english-language-2-4-choosing-evidence-study-guide';
const LESSON = 'src/content/ap-resources/english-language-and-composition/2-4-choosing-evidence-study-guide.md';

// 01 Six jobs
fig('01-six-jobs-of-evidence', 'Six jobs evidence can do', 'Ask what the evidence is doing, not only what it is', (y0) => {
  const k = [
    ['Illustrate', 'make a general point visible', '“By nine each morning the bus shelter is full of people who have missed the 8.40.”'],
    ['Clarify', 'make a complex idea easier', '“Compound interest is like a snowball rolling downhill.”'],
    ['Set a mood', 'create an atmosphere', '“On a grey Sunday the high street has the hush of a waiting room.”'],
    ['Exemplify', 'a representative instance', '“Take the Corner Café, which closed last month after thirty years.”'],
    ['Associate', 'link to what the audience respects, loves or fears', 'the library’s closure set beside closing a school or a church'],
    ['Amplify', 'increase force or scale', '“Not one shop but twelve; not a month but six years.”'],
  ];
  let s = '';
  const r1 = row(30, y0, 840, 16, k.slice(0, 3).map(([h, d, e]) => ({ head: h, body: `{{${d}}}\n${e}`, size: 16, headSize: 21, pad: 16, bar: C.mustard })));
  const r2 = row(30, y0 + r1.h + 16, 840, 16, k.slice(3).map(([h, d, e]) => ({ head: h, body: `{{${d}}}\n${e}`, size: 16, headSize: 21, pad: 16, bar: C.teal })));
  s += r1.s + r2.s;
  const y = y0 + r1.h + r2.h + 40;
  s += P(450, y, 'One piece can do several jobs: say which matters most **in context**.', { size: 17, anchor: 'middle', w: 820, fill: C.muted }).s;
  return { s, h: y + 10 - y0 };
}, 'Six cards name the jobs evidence can do, each with the lesson’s example: illustrate (the full bus shelter), clarify (compound interest as a snowball), set a mood (the high street’s hush), exemplify (the Corner Café), associate (closing a school or church) and amplify (not one shop but twelve).',
'Illustrate, clarify, set a mood, exemplify, associate, amplify: name the job in context.', '## Six jobs evidence can do');

// 02 Matched choices
fig('02-matching-evidence', 'Match the evidence to audience and purpose', '', (y0) => {
  let s = '';
  const rows = [
    ['Sceptical budget committee', 'fund a repair', 'A costed comparison with the price of delay', 'validity, credibility'],
    ['Neighbours at a meeting', 'sign a petition', 'A named local resident’s story', 'emotions and values'],
    ['Specialist readers', 'a method is flawed', 'A controlled study and a named authority', 'credibility'],
    ['Young readers', 'explain a complex idea', 'A vivid analogy', 'clarifies without jargon'],
  ];
  s += T(160, y0 + 8, 'AUDIENCE · PURPOSE', { size: 15, weight: 700, anchor: 'middle', fill: C.muted });
  s += T(640, y0 + 8, 'STRATEGIC CHOICE · WHY', { size: 15, weight: 700, anchor: 'middle', fill: C.muted });
  let y = y0 + 24;
  for (const [a, p, c, w] of rows) {
    const h = 78;
    s += box(30, y, 300, { head: a, body: `__${p}__`, size: 16, headSize: 18, h, vc: true, fill: C.tealLight, edge: C.tealDark, pad: 14 }).s;
    s += arrow(336, y + h / 2, 404, y + h / 2, { w: 4 });
    s += box(410, y, 460, { head: c, body: `{{${w}}}`, size: 16, headSize: 18, h, vc: true, fill: C.panel, pad: 14 }).s;
    y += h + 12;
  }
  y += 6;
  s += T(450, y + 10, 'Weigh four things', { size: 18, weight: 700, anchor: 'middle' });
  const c = chunks(30, y + 26, 840, [{ text: 'the claim (validity)', fill: C.cream }, { text: 'the audience (emotions, values)', fill: C.cream }, { text: 'credibility', fill: C.cream }, { text: 'the purpose', fill: C.cream }], { size: 17, gap: 14 });
  s += c.s;
  return { s, h: y + 26 + c.h - y0 };
}, 'Four audiences matched to evidence: a sceptical budget committee gets a costed comparison, neighbours at a meeting get a named local resident’s story, specialist readers get a controlled study and a named authority, and young readers get a vivid analogy. The writer weighs the claim, the audience, credibility and the purpose.',
'The same claim calls for different evidence for different audiences and purposes.', '## Strategy: match the evidence to the argument, the audience and the purpose');

// 03 Source credibility
fig('03-source-credibility', 'Is the source credible here?', '', (y0) => {
  let s = '';
  const r = row(30, y0, 840, 40, [
    { body: '“A study by the university’s transport department found...”', size: 18, align: 'middle', fill: C.tealLight, edge: C.tealDark, h: 90, vc: true },
    { body: '“I read somewhere that...”', size: 18, align: 'middle', edge: C.rust, dash: '7 5', h: 90, vc: true },
  ]);
  s += r.s + T(450, y0 + 52, 'vs', { size: 18, weight: 700, anchor: 'middle', fill: C.muted });
  let y = y0 + 130;
  s += T(450, y, 'Three questions for any source', { size: 19, weight: 700, anchor: 'middle' });
  y += 20;
  const q = row(30, y, 840, 18, [
    { head: 'Qualified?', body: 'to speak on this question', align: 'middle', size: 17 },
    { head: 'Independent?', body: 'of those who would gain from the conclusion', align: 'middle', size: 17 },
    { head: 'Current?', body: 'recent enough to rely on', align: 'middle', size: 17 },
  ]);
  s += q.s;
  s += P(450, y + q.h + 34, 'Credibility is not the source’s fame: it is fitness for this question.', { size: 17, anchor: 'middle', w: 820, fill: C.muted }).s;
  return { s, h: y + q.h + 46 - y0 };
}, 'A named study by a university transport department is set against “I read somewhere that...”. Three questions test any source: is it qualified to speak on this question, independent of those who would gain, and current?',
'Choose reliable, relevant, recent sources and explain them where needed.', '## Credibility of the source');

// 04 Cherry-picking vs fair selection
fig('04-cherry-picking', 'Strategic selection or cherry-picking?', '', (y0) => {
  let s = '';
  const dots = [[60, 40, 1], [110, 70, 0], [160, 30, 1], [210, 80, 1], [260, 45, 0], [90, 120, 1], [150, 110, 0], [230, 130, 1], [290, 100, 1], [40, 90, 1], [190, 160, 0], [120, 170, 1], [270, 170, 1]];
  const pool = (x, y, sel) => dots.map(([dx, dy, sup]) => {
    const on = sel === 'all' || (sel === 'sup' && sup) || (sel === 'fair' && true);
    const faded = sel === 'sup' && !sup;
    const fill = sup ? C.tealDark : C.rust;
    return `<circle cx="${x + dx}" cy="${y + dy}" r="13" fill="${faded ? 'none' : fill}" stroke="${fill}" stroke-width="2.5"${faded ? ' stroke-dasharray="4 4" opacity="0.6"' : ''}/>`;
  }).join('');
  s += T(185, y0 + 10, 'All the evidence', { size: 18, weight: 700, anchor: 'middle' });
  s += rect(20, y0 + 22, 330, 210, C.panel, C.panelEdge, 14) + pool(25, y0 + 30, 'all');
  s += `<circle cx="40" cy="${y0 + 258}" r="10" fill="${C.tealDark}"/>` + T(58, y0 + 264, 'supports the claim', { size: 16 });
  s += `<circle cx="220" cy="${y0 + 258}" r="10" fill="${C.rust}"/>` + T(238, y0 + 264, 'cuts the other way', { size: 16 });
  const bx = 400;
  s += box(bx, y0 + 6, 470, { head: 'Cherry-picking', body: 'Shows only what suits and hides the rest. It can mislead.', size: 16, edge: C.rust, headColor: C.rust, h: 110, vc: true }).s;
  s += box(bx, y0 + 132, 470, { head: 'Fair selection', body: 'Acknowledges evidence that cuts the other way and explains why it does not change the conclusion. That builds credibility.', size: 16, fill: C.tealLight, edge: C.tealDark, headColor: C.tealDark, h: 130, vc: true }).s;
  s += arrow(354, y0 + 90, bx - 6, y0 + 60, { w: 3, color: C.rust, marker: 'ahR' });
  s += arrow(354, y0 + 170, bx - 6, y0 + 196, { w: 3, color: C.tealDark, marker: 'ahT' });
  s += box(30, y0 + 296, 840, { body: 'On the exam: is the selection **representative**, and what effect might an **omission** have?', size: 17, align: 'middle', fill: C.cream, edge: C.olive }).s;
  return { s, h: 350 };
}, 'A pool of evidence holds items that support the claim and items that cut the other way. Cherry-picking shows only the supporting items and can mislead; fair selection acknowledges the counter-evidence and explains why it does not change the conclusion, which builds credibility.',
'Fairness about inconvenient evidence makes a writer more credible, not less.', '## Strategic selection versus cherry-picking');

// 05 Lincoln house divided
fig('05-house-divided-analogy', 'Analogy first, claim second', 'Lincoln, Springfield, 16 June 1858', (y0) => {
  let s = '';
  const a = box(30, y0, 400, { head: 'Evidence by analogy', body: '“A house divided against itself cannot stand.”', size: 19, fill: C.cream, edge: C.olive, headColor: C.olive, h: 130, vc: true });
  const c = box(470, y0, 400, { head: 'Explicit claim', body: '“I believe this government cannot endure, permanently half slave and half free.”', size: 18, fill: C.panel, edge: C.ink, sw: 3, h: 130, vc: true });
  s += a.s + c.s + arrow(434, y0 + 65, 464, y0 + 65, { w: 4 });
  s += P(650, y0 + 160, 'the familiar image prepares the audience to accept it', { size: 16, anchor: 'middle', w: 380, fill: C.muted }).s;
  const jobs = [['Clarify', 'An abstract political problem becomes a simple picture of a house people want to live in.'], ['Associate', 'From the Gospels (Mark 3:25, Matthew 12:25): the authority of a text the audience knew well.'], ['Amplify', '“Cannot stand” suggests total collapse and raises the stakes.']];
  let y = y0 + 150;
  jobs.forEach(([h, b], i) => {
    const bx = box(60, y, 370, { head: h, body: b, size: 15, headSize: 18, pad: 12, fill: C.panel, edge: C.olive });
    s += bx.s + line(44, y - (i ? 12 : 20), 44, y + bx.h / 2, C.olive, 3) + line(44, y + bx.h / 2, 58, y + bx.h / 2, C.olive, 3);
    y += bx.h + 12;
  });
  return { s, h: y - 12 - y0 };
}, 'Lincoln’s analogy, “A house divided against itself cannot stand”, comes before his explicit claim that the government cannot endure half slave and half free. The analogy clarifies an abstract problem, associates the claim with the Gospels, and amplifies the stakes with “cannot stand”.',
'A familiar image does several jobs and prepares the audience for the claim.', '## A public-domain example: Lincoln\'s "house divided" (1858)');

// 06 Minibus evidence roles
fig('06-minibus-evidence-roles', 'Which evidence leads?', 'Worked example 1: keeping the minibus (invented figures)', (y0) => {
  let s = '';
  s += box(30, y0, 840, { body: '**Audience: governors**, who value careful spending and need a defensible decision.', size: 17, align: 'middle', fill: C.tealLight, edge: C.tealDark }).s;
  let y = y0 + 76;
  const tiers = [
    ['Main proof', C.cream, C.ink, [['(iii) Taxi comparison', 'about £21,000 a year: the minibus is cheaper', 'strengthens validity'], ['(ii) Usage table', '62 of 480 pupils; £9,800 a year, about £158 each', 'exemplifies and quantifies']]],
    ['Support, placed after the figures', C.panel, C.panelEdge, [['(i) A parent’s story', 'a child who could not otherwise get to school', 'illustration: adds a human case']]],
    ['Contributes little here', C.panel, C.panelEdge, [['(iv) Photograph', 'pupils laughing on the minibus', 'sets a mood; says nothing about need or cost']]],
  ];
  tiers.forEach(([lab, f, e, items], ti) => {
    s += T(30, y + 6, lab, { size: 17, weight: 700, fill: ti === 0 ? C.ink : ti === 1 ? C.tealDark : C.rust });
    y += 16;
    const r = row(30, y, ti === 0 ? 840 : 560, 20, items.map(([h, b, j]) => ({ head: h, body: `${b}\n{{${j}}}`, size: 16, fill: f, edge: ti === 2 ? C.rust : e, pad: 14, headSize: 18, dash: ti === 2 ? '7 5' : '', sw: ti === 0 ? 3 : 2.5 })));
    s += r.s; y += r.h + 24;
  });
  return { s, h: y - 24 - y0 };
}, 'For governors who value careful spending, the taxi cost comparison and the usage table are the main proof. A parent’s story works as an illustration placed after the figures, and a photograph of pupils laughing contributes little because it says nothing about need or cost.',
'Lead with the evidence the audience needs; place the rest where it can still help.', '## Worked example 1: choosing evidence for an audience and purpose');

// 07 One sentence, four jobs
fig('07-library-sentence-jobs', 'One sentence, four jobs', 'Worked example 2: the reading room', (y0) => {
  let s = '';
  const q = box(130, y0 + 120, 640, { body: '“Last winter, between two and four on weekday afternoons, the reading room held **eleven pensioners, six job-seekers and a student** revising for her driving theory test, all **within sight of the radiator**.”', size: 18, align: 'middle', fill: C.cream, edge: C.ink, sw: 3, pad: 20 });
  s += q.s;
  const jobs = [
    [30, y0, 'Exemplifies', 'a specific, representative case of who the library serves'],
    [470, y0, 'Illustrates, sets a mood', '“within sight of the radiator” makes cold and warmth physical'],
    [30, y0 + 120 + q.h + 40, 'Emotions and values', 'seventeen people, “not alone and not cold”: care and community'],
    [470, y0 + 120 + q.h + 40, 'Supports the scope', 'the mix of people backs “every part of the town”'],
  ];
  jobs.forEach(([x, y, h, b], i) => {
    s += box(x, y, 400, { head: h, body: b, size: 16, fill: C.tealLight, edge: C.tealDark, headColor: C.tealDark, h: 92, vc: true, pad: 14 }).s;
    const top = i < 2;
    s += arrow(x + 200, top ? y + 94 : y - 2, x + 200 + (i % 2 ? -60 : 60), top ? y0 + 114 : y0 + 120 + q.h + 6, { w: 3, color: C.tealDark, marker: 'ahT' });
  });
  const by = y0 + 120 + q.h + 40 + 92 + 22;
  s += box(30, by, 840, { body: 'Weak: “it gives an example.” Strong: name several jobs and link each to the claim and the audience.', size: 17, align: 'middle', fill: C.panel, edge: C.olive, dash: '7 5' }).s;
  return { s, h: by + 56 - y0 };
}, 'The reading-room sentence sits in the centre with four jobs around it: it exemplifies who the library serves, illustrates and sets a mood through “within sight of the radiator”, appeals to care and community, and supports the claim that the cuts hurt every part of the town.',
'A strong answer names several jobs and links each to the claim and audience.', '## Worked example 2: explaining what evidence does');
