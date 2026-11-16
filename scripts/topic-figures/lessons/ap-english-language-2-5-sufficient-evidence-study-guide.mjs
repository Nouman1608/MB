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

export const slug = 'ap-english-language-2-5-sufficient-evidence-study-guide';
const LESSON = 'src/content/ap-resources/english-language-and-composition/2-5-sufficient-evidence-study-guide.md';

// 01 Quantity x quality grid
fig('01-quantity-and-quality', 'Two measures of sufficiency', 'Quantity and quality together provide apt support', (y0) => {
  let s = '';
  const gx = 140, gy = y0 + 10, cw = 360, ch = 170;
  const cells = [
    [0, 0, 'Few, weak', 'One rumour or an outdated figure offered for a sweeping claim.', '#f6e3d8', C.rust],
    [1, 0, 'Many, weak', 'Ten anecdotes. Ten weak pieces do not equal one strong one.', C.panel, C.rust],
    [0, 1, 'Few, strong', 'A rigorous study of 5,000 people: quality compensates, but only up to a point.', C.cream, C.olive],
    [1, 1, 'Enough, strong', 'Several independent examples or a large, well-chosen sample from qualified sources.', C.tealLight, C.tealDark],
  ];
  cells.forEach(([cx, cy, h, b, f, e]) => {
    const x = gx + cx * (cw + 10), y = gy + (1 - cy) * (ch + 10);
    s += box(x, y, cw, { head: h, body: b, size: 16, fill: f, edge: e, headColor: e, h: ch, vc: true, align: 'middle' }).s;
  });
  const by = gy + 2 * ch + 10;
  s += arrow(gx, by + 24, gx + 2 * cw + 30, by + 24, { w: 3.5 });
  s += T(gx + cw + 5, by + 54, 'QUANTITY: is there enough for this claim?', { size: 16, weight: 700, anchor: 'middle', fill: C.muted });
  s += arrow(gx - 24, by, gx - 24, gy - 4, { w: 3.5 });
  s += `<text x="${gx - 40}" y="${gy + ch + 5}" font-size="16" font-weight="700" fill="${C.muted}" text-anchor="middle" transform="rotate(-90 ${gx - 40} ${gy + ch + 5})">QUALITY: relevant, accurate, credible?</text>`;
  return { s, h: by + 64 - y0 };
}, 'A two-by-two grid of quantity against quality. Few weak pieces, such as one rumour, fail; many weak pieces, such as ten anecdotes, still fail; one strong study of 5,000 people compensates only up to a point; several strong, independent pieces give apt support.',
'Sufficient means enough of the right kind for this particular claim.', '## Two measures: quantity and quality');

// 02 Scope ladder
fig('02-scope-sets-the-standard', 'The scope of the claim sets the standard', 'The stronger the wording, the more the claim demands', (y0) => {
  let s = '';
  const st = [
    ['“Some pupils find the timetable stressful.”', 'a few clear cases'],
    ['“Most pupils find the timetable stressful.”', 'a representative sample showing a majority'],
    ['“The timetable causes stress.”', 'evidence of cause, not just co-occurrence'],
    ['“The timetable is the worst in the country.”', 'a comparison with others'],
    ['“All pupils find the timetable stressful.”', 'almost impossible: one contrary case breaks it'],
  ];
  const H = 72;
  st.forEach(([c, d], i) => {
    const x = 30 + i * 50, y = y0 + (st.length - 1 - i) * (H + 10);
    const w = 600;
    const fill = [C.tealLight, C.tealLight, C.cream, C.cream, '#f6e3d8'][i];
    s += box(x, y, w, { body: `**${c}**\n${d}`, size: 16, fill, edge: i === 4 ? C.rust : C.ink, h: H, vc: true, pad: 14 }).s;
  });
  const top = y0, bot = y0 + st.length * (H + 10) - 10;
  s += arrow(860, bot, 860, top + 4, { w: 4 });
  s += `<text x="845" y="${(top + bot) / 2}" font-size="16" font-weight="700" fill="${C.muted}" text-anchor="middle" transform="rotate(-90 845 ${(top + bot) / 2})">evidence demanded</text>`;
  const y = bot + 26;
  s += box(30, y, 840, { head: 'Narrow the claim to fit the evidence', body: '“Most pupils in Years 10 and 11 report that the timetable leaves too little time to eat” is easier to defend than “The timetable is unbearable.”', size: 16, fill: C.panel, edge: C.tealDark, headColor: C.tealDark }).s;
  return { s, h: y + 110 - y0 };
}, 'A staircase of claims about the timetable, rising in what they demand: “some pupils” needs a few cases; “most pupils” needs a representative sample; “causes” needs evidence of cause; “worst in the country” needs a comparison; “all pupils” is almost impossible to support. Below, a narrowed claim is easier to defend.',
'Narrow the claim to what the evidence can support.', '## The scope of the claim sets the standard');

// 03 Seven shortfalls
fig('03-where-evidence-falls-short', 'Seven ways evidence falls short', '', (y0) => {
  const k = [
    ['Too little', 'one example for a general claim: a hasty generalisation'],
    ['Unrepresentative', 'unusual cases, or a self-selected sample'],
    ['Irrelevant', 'true, but about cost when the claim is about safety'],
    ['Out of date', 'a ten-year-old figure for a fast-changing situation'],
    ['Unreliable source', 'unnamed, biased or unqualified'],
    ['Only one type', 'all anecdote or all statistics leaves gaps'],
    ['Unexplained', 'a good fact that never says why it supports the claim'],
  ];
  let s = '';
  k.push(['And too much?', 'nine near-identical examples bury the strongest: choose enough, then comment']);
  let y = y0;
  for (let i = 0; i < k.length; i += 2) {
    const items = k.slice(i, i + 2).map(([h, b], j) => (i + j === 7 ? { head: h, body: b, size: 16, pad: 16, fill: C.cream, edge: C.olive } : { head: h, body: b, size: 16, headIndent: 38, pad: 16 }));
    const r = row(30, y, 840, 16, items);
    s += r.s;
    r.xs.forEach((x, j) => { if (i + j < 7) s += num(x + 30, y + 30, i + j + 1, C.cream, 15); });
    y += r.h + 12;
  }
  return { s, h: y - 12 - y0 };
}, 'Seven numbered cards list how evidence falls short: too little, unrepresentative, irrelevant, out of date, from an unreliable source, of only one type, or left unexplained. An eighth card warns that too much can also bury the strongest example.',
'Check quantity, representativeness, relevance, currency, source, variety and explanation.', '## Common ways evidence falls short');

// 04 Audience sets the bar
fig('04-audience-sets-the-bar', 'The audience sets the bar too', '', (y0) => {
  let s = '';
  const a = [
    ['Already inclined to agree', 'needs less', 1, C.tealLight],
    ['General audience', 'a clear example and a trusted statistic', 2, C.panel],
    ['Specialist audience', 'expects rigorous sources', 3, C.cream],
    ['Sceptical or hostile', 'needs more, and more varied, evidence', 4, '#f6e3d8'],
  ];
  let y = y0;
  a.forEach(([h, b, n, f]) => {
    s += box(30, y, 330, { head: h, body: b, size: 16, fill: f, h: 74, vc: true, pad: 14 }).s;
    for (let i = 0; i < 4; i++) s += rect(390 + i * 60, y + 17, 48, 40, i < n ? C.tealDark : C.panel, C.tealDark, 8, 2);
    y += 86;
  });
  s += arrow(390, y + 6, 630, y + 6, { w: 3 }) + T(510, y + 32, 'more evidence demanded', { size: 15, anchor: 'middle', fill: C.muted, weight: 700 });
  s += box(660, y0, 210, { head: 'Sensing resistance?', body: 'Add several types (a statistic, an example, an authority) so readers with different standards each find something persuasive.', size: 16, fill: C.cream, edge: C.olive, h: y - y0 - 12, vc: true }).s;
  return { s, h: y + 40 - y0 };
}, 'Four audiences ranked by how much evidence they need: one already inclined to agree needs less, a general audience a clear example and trusted statistic, a specialist audience rigorous sources, and a sceptical or hostile audience more and more varied evidence. A side note recommends several types of evidence when resistance is likely.',
'A sceptical audience needs more, and more varied, evidence than a friendly one.', '## Sufficiency depends on the audience too');

// 05 Closing the gap: phones
fig('05-closing-the-gap', 'Closing the gap between claim and evidence', 'Worked example 1: mobile phones (invented details)', (y0) => {
  let s = '';
  const col = (x, title, claim, ev, gap, ok) => {
    let r = T(x + 200, y0 + 10, title, { size: 19, weight: 700, anchor: 'middle', fill: ok ? C.tealDark : C.rust });
    r += box(x, y0 + 26, 400, { head: 'Claim', body: claim, size: 16, fill: C.cream, edge: C.ink, h: 108, vc: true }).s;
    const gy = y0 + 134;
    r += `<rect x="${x + 180}" y="${gy}" width="40" height="${gap}" fill="${ok ? C.tealDark : 'none'}" stroke="${ok ? C.tealDark : C.rust}" stroke-width="2.5" stroke-dasharray="${ok ? '' : '6 5'}"/>`;
    if (!ok) r += T(x + 236, gy + gap / 2 + 6, 'wide gap', { size: 16, weight: 700, fill: C.rust });
    const eb = stack(x, gy + gap, 400, 8, ev.map(([h, b]) => ({ head: h, body: b, size: 15, headSize: 17, pad: 12, fill: ok ? C.tealLight : C.panel, edge: ok ? C.tealDark : C.rust, dash: ok ? '' : '6 5' })));
    return { s: r + eb.s, h: gy + gap + eb.h - y0 };
  };
  const L = col(30, 'Before', '“Mobile phones should be banned in **all schools**.”', [['Anecdote', 'my cousin’s grades improved (other causes?)'], ['Anecdote', 'one confiscation last week']], 120, false);
  const R = col(470, 'After', '“Schools should ban mobile phones **during lessons**.”', [['Study', '12 schools: +4 marks with a lesson-time ban'], ['Survey', '71 of 90 teachers: phones the top interruption'], ['Concession', 'no ban at break or in emergencies']], 24, true);
  s += L.s + R.s;
  return { s, h: Math.max(L.h, R.h) };
}, 'Before: a claim that phones should be banned in all schools rests on two anecdotes, leaving a wide gap. After: the claim is narrowed to lessons and supported by a study of 12 schools, a survey of 90 teachers and a concession, closing the gap.',
'Narrow the claim and strengthen the evidence until they meet.', '## Worked example 1: diagnosing insufficient evidence');

// 06 Pattern needs many points
fig('06-pattern-needs-quantity', 'A pattern needs many points', 'Declaration of Independence, 1776', (y0) => {
  let s = '';
  const p1 = [[120, 150]];
  const pts = [[40, 230], [70, 205], [95, 190], [125, 170], [150, 150], [180, 135], [205, 112], [235, 98], [260, 75], [290, 58], [315, 40]];
  s += rect(30, y0, 380, 290, C.panel, C.panelEdge, 14) + rect(490, y0, 380, 290, C.panel, C.panelEdge, 14);
  s += T(220, y0 + 32, 'One grievance', { size: 19, weight: 700, anchor: 'middle' });
  s += T(680, y0 + 32, '“He has...” × dozens', { size: 19, weight: 700, anchor: 'middle' });
  p1.forEach(([x, y]) => { s += circ(30 + x + 70, y0 + y, 12, C.rust, C.ink, 2); });
  s += P(220, y0 + 230, 'a fact, but no direction: insufficient for a broad claim', { size: 16, anchor: 'middle', w: 300, fill: C.rust }).s;
  pts.forEach(([x, y]) => { s += circ(490 + x + 20, y0 + y + 20, 11, C.tealDark, C.ink, 2); });
  s += curve(`M${510 + 10},${y0 + 268} L${490 + 345},${y0 + 50}`, C.olive, 3, 'ahO', '8 6');
  s += T(700, y0 + 280, 'each concrete and checkable', { size: 15, anchor: 'middle', fill: C.muted });
  let y = y0 + 310;
  const r = row(30, y, 840, 20, [
    { head: 'Claim', body: 'a “design” to impose “absolute Despotism”: about intent and pattern', size: 16, fill: C.cream, edge: C.ink },
    { head: '“Let Facts be submitted to a candid world”', body: 'announces that proof is needed and appeals to a fair-minded audience', size: 16, fill: C.tealLight, edge: C.tealDark },
  ]);
  s += r.s;
  return { s, h: y + r.h - y0 };
}, 'Two panels. A single grievance is one point with no direction, insufficient for a broad claim. Dozens of “He has...” grievances line up into a pattern, which is what the Declaration’s claim about a design of despotism asserts. The framing sentence “let Facts be submitted to a candid world” signals awareness that proof is needed.',
'Only a series of related acts can show the pattern a broad claim asserts.', '## A public-domain example: "Let Facts be submitted"');
