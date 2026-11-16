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

export const slug = 'ap-english-language-and-composition-1-3-audience-context-study-guide';
const LESSON = 'src/content/ap-resources/english-language-and-composition/1-3-audience-context-study-guide.md';

// 01 Types of audience
fig('01-types-of-audience', 'Types of audience', '', (y0) => {
  let s = '';
  const cx = 250, cy = y0 + 190;
  s += circ(cx, cy, 185, C.tealLight, C.tealDark, 2.5);
  s += `<circle cx="${cx}" cy="${cy}" r="100" fill="${C.cream}" stroke="${C.ink}" stroke-width="3"/>`;
  s += T(cx, cy - 12, 'Primary', { size: 22, weight: 700, anchor: 'middle' });
  s += P(cx, cy + 14, 'directly addressed; most wants to affect', { size: 15, anchor: 'middle', w: 160 }).s;
  s += T(cx, cy - 135, 'Secondary', { size: 21, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += P(cx, cy - 112, 'others who will read or hear it', { size: 15, anchor: 'middle', w: 220, fill: C.tealDark }).s;
  s += T(cx, cy + 128, 'e.g. newspaper readers', { size: 15, anchor: 'middle', fill: C.tealDark, italic: true });
  s += T(cx, cy + 148, 'who might add pressure', { size: 15, anchor: 'middle', fill: C.tealDark, italic: true });
  s += T(cx, cy + 62, 'e.g. “Councillors”', { size: 15, anchor: 'middle', italic: true });
  // scale
  const x0 = 480;
  s += T(x0 + 195, y0 + 14, 'How much does the group share?', { size: 18, weight: 700, anchor: 'middle' });
  const a = box(x0, y0 + 36, 390, { head: 'Broad or general', body: 'A wide, mixed group with little in common but citizenship or interest. __Readers of a national magazine.__', size: 16, fill: C.panel });
  s += a.s;
  const b = box(x0, y0 + 36 + a.h + 46, 390, { head: 'Specialised', body: 'Expert knowledge or a shared professional language. __Nurses reading a hospital safety notice.__', size: 16, fill: C.panel });
  s += b.s;
  s += T(x0 + 195, y0 + 36 + a.h + 30, 'little shared  ↔  expert, shared language', { size: 15, anchor: 'middle', fill: C.muted, weight: 700 });
  const d = box(x0, y0 + 36 + a.h + 46 + b.h + 20, 390, { head: 'Divided', body: 'People who disagree: choose language that does not alienate one group while reaching another.', size: 16, fill: C.cream, edge: C.olive, headColor: C.olive });
  s += d.s;
  const tot = Math.max(380, 36 + a.h + 46 + b.h + 20 + d.h);
  s += box(30, y0 + tot + 20, 840, { body: 'On the exam, avoid “everyone”. Name the group and, where the text supports it, a second group.', size: 17, align: 'middle', fill: C.panel, edge: C.rust, dash: '7 5' }).s;
  return { s, h: tot + 80 };
}, 'Concentric circles show the primary audience the writer directly addresses at the centre, ringed by a secondary audience who will also read or hear the text. Alongside, broad audiences share little, specialised audiences share expert knowledge, and divided audiences disagree with each other.',
'Name the group the writer addresses, and a second group where the text supports it.', '## Types of audience');

// 02 Audience profile -> choices
fig('02-profile-to-choices', 'What the writer perceives, the writer chooses', 'Four audience features guide five kinds of choice', (y0) => {
  let s = '';
  const prof = [['Beliefs', 'what they hold true'], ['Values', 'what they care about and consider right'], ['Needs', 'what they lack or want'], ['Background', 'age, occupation, history, education']];
  const ch = [['Diction', 'technical for specialists; everyday for a general audience'], ['Evidence', 'statistics for sceptical professionals; stories for readers who respond to human cases'], ['Tone', 'measured for officials; warm for a community meeting; urgent for an emergency'], ['Structure', 'key instruction first for busy readers; a slow build for those who need persuading'], ['Left unsaid', 'omit what the audience already knows']];
  const lw = 230, rx = 470, rw = 400;
  let y = y0, ys = [];
  for (const [h, b] of prof) { const bx = box(30, y, lw, { head: h, body: b, size: 16, headColor: C.tealDark, fill: C.tealLight, edge: C.tealDark, pad: 14 }); s += bx.s; ys.push(y + bx.h / 2); y += bx.h + 14; }
  const lh = y - 14 - y0;
  let y2 = y0, ys2 = [];
  for (const [h, b] of ch) { const bx = box(rx, y2, rw, { head: h, body: b, size: 16, pad: 14, headSize: 18 }); s += bx.s; ys2.push(y2 + bx.h / 2); y2 += bx.h + 12; }
  const rh = y2 - 12 - y0, H = Math.max(lh, rh);
  const hx = 340, hy = y0 + H / 2;
  ys.forEach((yy) => { s += line(30 + lw, yy, hx - 50, hy, C.tealDark, 2.5); });
  ys2.forEach((yy) => { s += arrow(hx + 50, hy, rx - 4, yy, { w: 2.5 }); });
  s += circ(hx, hy, 52, C.cream, C.ink, 3) + P(hx, hy - 6, 'writer’s perception', { size: 16, weight: 700, anchor: 'middle', w: 90 }).s;
  return { s, h: H };
}, 'Four audience features, beliefs, values, needs and background, feed into the writer’s perception, which branches into five choices: diction, evidence, tone, structure and what is left unsaid, each with an example from the lesson.',
'A writer’s picture of the audience guides almost every choice in the text.', '## What audience tells you about a writer\'s choices');

// 03 Six clues
fig('03-six-clues-to-audience', 'Six clues to the audience', '', (y0) => {
  const cl = [
    ['Direct address', '“Fellow volunteers”, “Councillors”, “Ladies and gentlemen”'],
    ['Assumed knowledge', 'A term left unexplained: the audience is expected to know it.'],
    ['Shared references', 'Local places, shared history, common sayings.'],
    ['Pronouns', '“we” and “us” build common ground; “you” separates; “they” sets up a third party.'],
    ['Anticipated objections', '“You may say the savings are needed”'],
    ['Publication or setting', 'A trade journal, a town-hall speech, a school newsletter.'],
  ];
  let s = '';
  const r1 = row(30, y0, 840, 18, cl.slice(0, 3).map(([h, b]) => ({ head: h, body: b, size: 16, headIndent: 40, headSize: 19 })));
  const r2 = row(30, y0 + r1.h + 18, 840, 18, cl.slice(3).map(([h, b]) => ({ head: h, body: b, size: 16, headIndent: 40, headSize: 19 })));
  s += r1.s + r2.s;
  r1.xs.forEach((x, i) => { s += num(x + 34, y0 + 30, i + 1, C.cream, 16); });
  r2.xs.forEach((x, i) => { s += num(x + 34, y0 + r1.h + 48, i + 4, C.cream, 16); });
  return { s, h: r1.h + r2.h + 18 };
}, 'Six numbered cards list clues to audience: direct address, assumed knowledge, shared references, pronouns, anticipated objections, and the publication or setting, each with a short example.',
'Who a text is for shows in how it addresses, assumes and refers.', '## Evidence of audience in the text');

// 04 Context contains exigence
fig('04-context-time-place-occasion', 'Context is wider than exigence', '', (y0) => {
  let s = '';
  s += rect(30, y0, 840, 330, C.tealLight, C.tealDark, 18, 2.5);
  s += T(56, y0 + 38, 'CONTEXT: the general setting', { size: 20, weight: 700, fill: C.tealDark });
  const k = [['Time', 'year, season, stage of events'], ['Place', 'battlefield, town hall, newspaper, website'], ['Occasion', 'funeral, graduation, protest, hearing']];
  const r = row(56, y0 + 60, 788, 16, k.map(([h, b]) => ({ head: h, body: b, size: 16, align: 'middle', pad: 14 })));
  s += r.s;
  const ey = y0 + 60 + r.h + 26;
  s += box(250, ey, 400, { head: 'Exigence', body: 'the specific trigger that sits inside the setting', align: 'middle', fill: C.cream, edge: C.ink, size: 16, h: 330 - (ey - y0) - 22, vc: true }).s;
  let y = y0 + 360;
  s += T(450, y, 'Context changes what is possible and appropriate', { size: 19, weight: 700, anchor: 'middle' });
  y += 20;
  const c = row(30, y, 840, 24, [
    { head: 'Solemn occasion', body: 'brief and restrained', align: 'middle', size: 17 },
    { head: 'Rally', body: 'emphatic and rhythmic', align: 'middle', size: 17 },
    { head: 'Farewell party joke', body: 'would fail at a memorial', align: 'middle', size: 17, edge: C.rust },
  ]);
  s += c.s;
  return { s, h: 380 + c.h };
}, 'A large context panel holds three cards, time, place and occasion, and inside it a smaller box for the exigence, the specific trigger. Below, a solemn occasion calls for brevity and restraint, a rally for emphasis and rhythm, and a party joke would fail at a memorial.',
'Context is time, place and occasion; the exigence is one trigger within it.', '## Context: time, place and occasion');

// 05 Washington: divided audience
fig('05-washington-divided-audience', 'One speech, a divided audience', 'Booker T. Washington, Atlanta, 18 September 1895', (y0) => {
  let s = '';
  const sp = box(30, y0 + 90, 250, { head: '“Cast down your bucket where you are.”', body: 'practical, economic cooperation', align: 'middle', fill: C.cream, edge: C.olive, size: 16, headSize: 19 });
  s += box(30, y0 + 90, 250, { head: '“Cast down your bucket where you are.”', body: 'practical, economic cooperation', align: 'middle', fill: C.cream, edge: C.olive, size: 16, headSize: 19, h: 170, vc: true }).s;
  const g = [['White Southern business and political leaders', 'framed in a way they could accept'], ['Black Southerners', 'heard with different beliefs and needs'], ['Readers across the country', 'met it through reports']];
  g.forEach(([h, b], i) => {
    const y = y0 + i * 120;
    s += box(500, y, 370, { head: h, body: b, size: 16, headSize: 18, h: 100, vc: true, fill: i === 2 ? C.panel : C.tealLight, edge: C.tealDark, dash: i === 2 ? '7 5' : '' }).s;
    s += arrow(282, y0 + 175, 494, y + 50, { w: 3, color: C.tealDark, marker: 'ahT', dash: i === 2 ? '8 6' : '' });
  });
  let y = y0 + 380;
  const r = row(30, y, 840, 24, [
    { head: 'Context', body: 'A major exposition in the American South, three decades after the Civil War, in an era of increasing segregation; public and commercial.', size: 16 },
    { head: 'Sign of division', body: 'Critics, including W. E. B. Du Bois, called it “the Atlanta Compromise”: the same words were heard differently.', size: 16, edge: C.rust },
  ]);
  s += r.s;
  return { s, h: 380 + r.h };
}, 'Washington’s image “Cast down your bucket where you are” reaches three groups: white Southern business and political leaders, Black Southerners, and readers across the country. Below, the context of the Atlanta exposition and the criticism that named it “the Atlanta Compromise”.',
'A divided audience hears the same words differently, so it shapes every choice.', '## A public-domain example: Washington in Atlanta (1895)');

// 06 Two versions of one message
fig('06-one-message-two-audiences', 'One message, two audiences', 'The Year 7 museum trip is cancelled', (y0) => {
  let s = '';
  const A = box(30, y0 + 34, 405, { body: '“Bad news: the coach has **fallen through**, so the museum trip is **off** this Friday. We are sorry. Instead, you will get **a science lab afternoon** and a new date as soon as we can book one.”', size: 17, fill: C.cream, edge: C.olive });
  const B = box(465, y0 + 34, 405, { body: '“We **regret to inform you** that Friday’s Year 7 visit to the science museum has been cancelled **following the coach operator’s withdrawal** of the booking. **No payments will be taken.** We are arranging a laboratory session at school and **will contact you** with a replacement date.”', size: 17, fill: C.tealLight, edge: C.tealDark });
  const h = Math.max(A.h, B.h);
  s += T(232, y0 + 18, 'Version A: to students', { size: 19, weight: 700, anchor: 'middle', fill: C.olive });
  s += T(668, y0 + 18, 'Version B: to parents', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += box(30, y0 + 34, 405, { body: '“Bad news: the coach has **fallen through**, so the museum trip is **off** this Friday. We are sorry. Instead, you will get **a science lab afternoon** and a new date as soon as we can book one.”', size: 17, fill: C.cream, edge: C.olive, h }).s;
  s += box(465, y0 + 34, 405, { body: '“We **regret to inform you** that Friday’s Year 7 visit to the science museum has been cancelled **following the coach operator’s withdrawal** of the booking. **No payments will be taken.** We are arranging a laboratory session at school and **will contact you** with a replacement date.”', size: 17, fill: C.tealLight, edge: C.tealDark, h }).s;
  let y = y0 + 34 + h + 24;
  const rowsD = [
    ['1  Diction and tone', 'Plain, friendly words and a direct apology, as to young people.', 'Formal phrasing for adults who expect a professional tone.'],
    ['2  What they need', 'Students want to know what happens instead: lab afternoon first.', 'Parents need financial and organisational consequences.'],
  ];
  for (const [k, a, b] of rowsD) {
    s += T(450, y + 4, k, { size: 18, weight: 700, anchor: 'middle' });
    y += 16;
    const rr = row(30, y, 840, 30, [{ body: a, size: 16, pad: 14 }, { body: b, size: 16, pad: 14 }]);
    s += rr.s; y += rr.h + 24;
  }
  return { s, h: y - 24 - y0 };
}, 'Two versions of the same cancellation notice. Version A, to students, uses plain words such as “fallen through” and leads with the science lab afternoon. Version B, to parents, uses formal phrasing such as “regret to inform you” and covers payments and contact.',
'Each point ties a feature of the text to a belief or need of its audience.', '## Worked example 1: one message, two audiences (written by Marlbridge)');

// 07 Same sentence, two contexts
fig('07-same-sentence-two-contexts', 'Same sentence, two contexts', '', (y0) => {
  let s = '';
  const q = box(150, y0, 600, { body: '“We will not be moved from this square until the vote is taken.”', size: 21, align: 'middle', fill: C.cream, edge: C.ink, pad: 22 });
  s += q.s;
  const y = y0 + q.h + 60;
  s += curve(`M380,${y0 + q.h + 4} C330,${y - 30} 240,${y - 40} 232,${y - 6}`, C.tealDark, 3.5, 'ahT');
  s += curve(`M520,${y0 + q.h + 4} C570,${y - 30} 660,${y - 40} 668,${y - 6}`, C.ink, 3.5, 'ah');
  const r = row(30, y, 840, 30, [
    { head: 'Protesters outside a town hall', body: '**Time:** evening before a vote\n**Place:** the square\n**Occasion:** a protest\n\nA collective pledge of persistence and a challenge to officials inside: an act of resistance.', size: 16, fill: C.tealLight, edge: C.tealDark, headColor: C.tealDark },
    { head: 'Tourists on a guided walk', body: 'They have been told the market is closed until the evening.\n\nThe same words would be humorous and exaggerated, because nothing is at stake.', size: 16 },
  ]);
  s += r.s;
  return { s, h: y + r.h - y0 };
}, 'One sentence, “We will not be moved from this square until the vote is taken”, branches into two contexts. For protesters outside a town hall before a vote it is a pledge of resistance; for tourists told the market is closed it is humorous and exaggerated.',
'The words stay the same; time, place and occasion change their force.', '## Worked example 2: context changes the sentence (written by Marlbridge)');
