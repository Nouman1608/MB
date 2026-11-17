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

export const slug = 'ap-english-language-and-composition-6-3-bias-limitations-study-guide';
const LESSON = 'src/content/ap-resources/english-language-and-composition/6-3-bias-limitations-study-guide.md';

// 01 Bias scale: considers other positions
fig('01-bias-scale', 'Measuring bias', 'How fairly does the source deal with what others think?', (y0) => {
  let s = '';
  const sx = 60, ex = 840, sy = y0 + 40;
  s += `<defs><linearGradient id="bg1" x1="0" x2="1"><stop offset="0" stop-color="${C.tealLight}"/><stop offset="1" stop-color="#f6e3d8"/></linearGradient></defs>`;
  s += `<rect x="${sx}" y="${sy}" width="${ex - sx}" height="34" rx="17" fill="url(#bg1)" stroke="${C.ink}" stroke-width="2"/>`;
  s += T(sx, sy - 12, 'LOW BIAS', { size: 16, weight: 700, fill: C.tealDark }) + T(ex, sy - 12, 'HIGH BIAS', { size: 16, weight: 700, fill: C.rust, anchor: 'end' });
  const R = [
    ['states opposing views fairly and answers them', 'ignores or caricatures opposing views'],
    ['measured language', 'loaded or emotive language'],
    ['presents evidence that complicates its own claim', 'presents only favourable evidence'],
    ['says how and by whom its data were gathered', 'hides the method or the source of the data'],
    ['admits uncertainty (“suggests”, “may”)', 'claims certainty beyond the evidence'],
    ['no obvious stake, or discloses it', 'an interest in the outcome, undisclosed'],
  ];
  let y = sy + 56;
  R.forEach(([a, b]) => {
    s += box(30, y, 400, { body: a, size: 15, h: 48, vc: true, pad: 12, fill: C.tealLight, edge: C.tealDark }).s;
    s += box(470, y, 400, { body: b, size: 15, h: 48, vc: true, pad: 12, fill: '#f6e3d8', edge: C.rust }).s;
    s += T(450, y + 30, '↔', { size: 18, anchor: 'middle', fill: C.muted, weight: 700 });
    y += 56;
  });
  y += 8;
  s += box(30, y, 840, { body: 'A position is not bias. **Vested interest:** a filter seller and a water company each deserve a careful reading. **Purpose matters:** the Declaration of Independence is one-sided by design (“let Facts be submitted to a candid world”) because it is an indictment.', size: 16, fill: C.panel, edge: C.olive }).s;
  return { s, h: y + 84 - y0 };
}, 'A scale from low to high bias with six paired signs: fair treatment of opposing views or caricature, measured or loaded language, complicating or only favourable evidence, disclosed or hidden method, admitted uncertainty or overclaimed certainty, and disclosed or undisclosed interest. A note covers vested interest and purpose.',
'The more fairly a source considers other positions, the less biased it is.', '## Bias');

// 02 Limitations as gauges
fig('02-seven-limitations', 'Seven limitations to check', 'A limitation tells you how far the evidence goes', (y0) => {
  let s = '';
  const L = [
    ['Sample size', 'How many people or cases?', '“9 in 10” of 50 people'],
    ['Sample selection', 'Who was asked, and how chosen?', 'visitors to a company’s own stand'],
    ['Scope', 'What does it cover, and not?', 'one region, one season'],
    ['Date', 'How recent?', 'a report from before a major change'],
    ['Method', 'How was it measured?', 'self-reported taste, not blind tests'],
    ['Type of evidence', 'Anecdote, expert opinion, data?', 'one story as proof of a trend'],
    ['Correlation', 'Cause, or just association?', 'two things that rose together'],
  ];
  let y = y0;
  L.forEach(([h, q, ex], i) => {
    s += num(52, y + 26, i + 1, C.cream, 16);
    s += T(80, y + 32, h, { size: 18, weight: 700 });
    s += T(300, y + 32, q, { size: 16, fill: C.tealDark });
    s += T(870, y + 32, ex, { size: 15, fill: C.muted, anchor: 'end', italic: true });
    s += line(30, y + 52, 870, y + 52, C.panelEdge, 1.5);
    y += 56;
  });
  s += box(30, y + 12, 840, { body: 'A small survey can **suggest** a trend without proving it; an anecdote can **illustrate** a point but cannot prove it is common.', size: 16, align: 'middle', fill: C.cream, edge: C.olive }).s;
  return { s, h: y + 66 - y0 };
}, 'A numbered checklist of seven limitations with the question to ask and an example: sample size, sample selection, scope, date, method, type of evidence and correlation.',
'Limited evidence still counts: it just proves less than a sweeping claim needs.', '## Limitations');

// 03 Weak vs strong use
fig('03-account-for-limitations', 'Acknowledge, then account for it', 'Three ways to handle a limited source', (y0) => {
  let s = '';
  const r = row(30, y0, 840, 16, [
    { head: '1  Qualify the claim', body: '“suggests”, “may indicate”, “in this case”', size: 15, fill: C.tealLight, edge: C.tealDark },
    { head: '2  Name the limitation', body: '“Although the survey was small...”', size: 15, fill: C.tealLight, edge: C.tealDark },
    { head: '3  Add other evidence', body: 'pair it with a source that covers the gap, and say so', size: 15, fill: C.tealLight, edge: C.tealDark },
  ]);
  s += r.s;
  let y = y0 + r.h + 30;
  s += box(30, y, 840, { head: 'Weak', body: '“A survey shows that 9 in 10 people prefer filtered water, so filters are better than tap water.”', size: 16, edge: C.rust, dash: '7 5', headColor: C.rust }).s;
  y += 136;
  const c = chunks(30, y, 840, [
    { text: 'A filter company reports', fill: C.cream, label: 'names the interest' },
    { text: 'that 45 of 50 visitors to its own stand preferred the filtered water,', fill: C.panel },
    { text: 'but a company’s own visitors are a self-selected and interested group;', fill: C.tealLight, label: 'names the limitation' },
    { text: 'the claim is better tested by the consumer group’s blind taste tests, where the difference was small.', fill: C.teal, label: 'adds independent evidence' },
  ], { size: 16, gap: 6, rowGap: 22, minLabelW: 150 });
  s += T(30, y - 8, 'Strong', { size: 18, weight: 700, fill: C.tealDark });
  s = s.replace(`<text x="30" y="${y - 8}"`, `<text x="30" y="${y - 10}"`);
  s += c.s;
  return { s, h: y + c.h - y0 };
}, 'Three ways to account for a limitation: qualify the claim, name the limitation, and add other evidence. Below, a weak sentence treats a 9-in-10 survey as proof; the strong version names the filter company’s interest, notes that its visitors are self-selected, and turns to the consumer group’s blind tests.',
'Say what a source can show and what it cannot, and cover its gaps.', '## Acknowledging and accounting for limitations');

// 04 Source G audit
fig('04-source-g-audit', 'Auditing a source', 'Worked example 1: Source G, a water-filter brochure (fictional)', (y0) => {
  let s = '';
  const c = chunks(30, y0 + 6, 840, [
    { text: 'In a survey of 50 visitors to our stand at the town fair,', fill: C.cream, label: 'small, self-selected sample', labelColor: C.olive },
    { text: '9 in 10 said our filtered water tasted better', fill: C.cream, label: 'taste only, not safety', labelColor: C.olive },
    { text: 'than tap water.', fill: C.panel },
    { text: 'Tap water is full of impurities', fill: '#f6e3d8', label: 'loaded; unsupported by the survey', labelColor: C.rust },
    { text: 'that only our filter removes.', fill: '#f6e3d8', label: 'no other positions', labelColor: C.rust },
    { text: 'Isn’t it time your family drank clean water?', fill: '#f6e3d8', label: 'fear for one’s family', labelColor: C.rust },
  ], { size: 17, gap: 6, rowGap: 22, minLabelW: 160 });
  s += c.s;
  let y = y0 + 6 + c.h + 26;
  const r = row(30, y, 840, 16, [
    { head: 'Position and perspective', body: 'buy filters; a company that sells them', size: 15 },
    { head: '[[Bias]]', body: 'interest in sales, loaded words, a fearful question, no other views', size: 15, edge: C.rust },
    { head: '((Limitations))', body: '50 people, its own visitors, a taste test', size: 15, edge: C.olive },
  ]);
  s += r.s;
  y += r.h + 20;
  s += box(30, y, 840, { head: 'Responsible use', body: 'evidence of what the company claims, not proof about water quality: “...so it says little about whether tap water is unsafe.”', size: 16, fill: C.tealLight, edge: C.tealDark }).s;
  return { s, h: y + 100 - y0 };
}, 'Source G’s brochure text labelled phrase by phrase: the survey of 50 stand visitors is small and self-selected, measures taste only, and “full of impurities”, “only our filter” and “Isn’t it time your family drank clean water?” show loaded language, no other positions and an appeal to fear. Below, a summary of position, bias, limitations and responsible use.',
'Use a biased source as evidence of what it claims, not as proof of more.', '## Worked example 1: evaluating and using a source');

// 05 Ranking G, H, I
fig('05-ranking-three-sources', 'Ranking sources by degree of bias', 'Worked example 2: Sources G, H and I (fictional)', (y0) => {
  let s = '';
  const S = [
    ['H', 'Independent consumer group', 'tested 120 homes; all met the standard; filters improved taste by a small margin', 'considers the case for filters; states its method', 'one region, two weeks in spring', 'Least bias', C.tealLight, C.tealDark],
    ['I', 'Regional water company', 'water meets all standards; complaints are rare', 'an interest in trust; no data beyond assertion', '“complaints are rare” cannot be checked', 'More bias', C.cream, C.olive],
    ['G', 'Filter company brochure', '9 in 10 of 50 stand visitors preferred the taste', 'sells the product; loaded language; no other views', 'small, self-selected, taste only', 'Most bias', '#f6e3d8', C.rust],
  ];
  let y = y0;
  S.forEach(([l, who, says, bias, lim, rank, f, e], i) => {
    const h = 128;
    s += rect(30, y, 840, h, f, e, 14, 2.5);
    s += circ(76, y + h / 2, 30, C.panel, e, 3) + T(76, y + h / 2 + 9, l, { size: 26, weight: 700, anchor: 'middle' });
    s += T(126, y + 30, who, { size: 18, weight: 700 });
    const p1 = P(126, y + 54, `__${says}__`, { size: 15, w: 570 });
    s += p1.s + P(126, y + 60 + p1.h, `**Bias:** ${bias}. **Limits:** ${lim}.`, { size: 15, w: 570 }).s;
    s += rect(720, y + h / 2 - 22, 130, 44, C.panel, e, 22, 2.5) + T(785, y + h / 2 + 7, rank, { size: 16, weight: 700, anchor: 'middle', fill: e });
    y += h + 12;
  });
  return { s, h: y - 12 - y0 };
}, 'Three fictional sources ranked by bias. Source H, an independent consumer group that tested 120 homes and reports the filters’ small benefit with its method, shows the least. Source I, the water company asserting its water is fine without data, shows more. Source G, the filter company’s small, self-selected taste survey, shows the most.',
'Rank sources by interest, fairness to other views and method, then by their limits.', '## Worked example 2: comparing sources by degree of bias');
