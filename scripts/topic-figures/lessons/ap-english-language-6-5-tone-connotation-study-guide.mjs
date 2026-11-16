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

export const slug = 'ap-english-language-6-5-tone-connotation-study-guide';
const LESSON = 'src/content/ap-resources/english-language-and-composition/6-5-tone-connotation-study-guide.md';

// 01 One event, four tones
fig('01-one-train-four-tones', 'One late train, four tones', 'Same facts; different words, different attitude', (y0) => {
  let s = '';
  s += box(30, y0, 840, { body: 'Chain for reading tone:  **word → connotation → attitude → purpose**', size: 17, align: 'middle', fill: C.panel, edge: C.ink, h: 50, vc: true }).s;
  const V = [
    ['Neutral', 'The 8:10 train **arrived** at 8:50.', 'detached, factual', C.panel, C.panelEdge],
    ['Indignant', 'The 8:10 train **limped** in at 8:50, **yet again**, with **no apology**.', 'indignant, accusing', '#f6e3d8', C.rust],
    ['Wry', 'The 8:10 train **graciously** joined us at 8:50, **having evidently** found better things to do.', 'wry, mock-polite', C.cream, C.olive],
    ['Resigned', 'The 8:10 train arrived at 8:50, **as it does**, and we **filed** on, **used to it**.', 'weary, resigned', C.tealLight, C.tealDark],
  ];
  let y = y0 + 70;
  V.forEach(([h, t2, tone, f, e]) => {
    const b = box(170, y, 500, { body: `“${t2}”`, size: 16, pad: 14, fill: f, edge: e });
    const hh = Math.max(b.h, 60);
    s += box(170, y, 500, { body: `“${t2}”`, size: 16, pad: 14, fill: f, edge: e, h: hh, vc: true }).s;
    s += T(30, y + hh / 2 + 7, h, { size: 18, weight: 700 });
    s += arrow(674, y + hh / 2, 700, y + hh / 2, { w: 3 }) + P(710, y + hh / 2 + 6 - (tone.length > 18 ? 0 : 0), `__${tone}__`, { size: 16, w: 160 }).s;
    y += hh + 12;
  });
  return { s, h: y - 12 - y0 };
}, 'A train due at 8:10 arrives at 8:50, described four ways: neutral (“arrived”), indignant (“limped in... yet again, with no apology”), wry (“graciously joined us... having evidently found better things to do”) and resigned (“as it does... filed on, used to it”).',
'Tone is traced to specific words: same facts, different attitudes.', '## From connotation to tone');

// 02 Precise tone vocabulary
fig('02-naming-tone-precisely', 'Name the tone precisely', 'Replace vague labels with exact ones', (y0) => {
  let s = '';
  const R = [
    ['negative', ['scornful', 'disappointed', 'indignant', 'grim', 'bitter'], '#f6e3d8'],
    ['positive', ['admiring', 'hopeful', 'affectionate', 'jubilant'], C.tealLight],
    ['serious', ['solemn', 'earnest', 'sombre', 'urgent'], C.panel],
    ['funny', ['wry', 'playful', 'sardonic', 'mock-serious'], C.cream],
    ['neutral', ['detached', 'objective', 'matter-of-fact'], C.panel],
    ['sad', ['wistful', 'mournful', 'elegiac', 'resigned'], C.tealLight],
  ];
  let y = y0;
  R.forEach(([v, ws, f]) => {
    s += `<rect x="30" y="${y}" width="150" height="46" rx="23" fill="none" stroke="${C.muted}" stroke-width="2" stroke-dasharray="6 5"/>` + T(105, y + 29, `“${v}”`, { size: 17, anchor: 'middle', fill: C.muted, italic: true });
    s += arrow(186, y + 23, 220, y + 23, { w: 3 });
    s += chunks(228, y + 1, 650, ws.map((w) => ({ text: w, fill: f })), { size: 17, gap: 8 }).s;
    y += 60;
  });
  y += 6;
  s += box(30, y, 840, { body: 'Two linked words often do better: **“wry but affectionate”**, **“urgent yet hopeful”**, **“scornful and controlled”**.', size: 16, align: 'middle', fill: C.cream, edge: C.olive }).s;
  y += 76;
  const st = ['1  impression', '2  pick 2–3 words', '3  connotations', '4  name the tone', '5  link to purpose'];
  st.forEach((t2, i) => {
    const x = 30 + i * 172;
    s += rect(x, y, 156, 52, i === 3 ? C.mustard : C.panel, C.ink, 26, 2) + T(x + 78, y + 32, t2, { size: 15, weight: 700, anchor: 'middle' });
    if (i < 4) s += arrow(x + 157, y + 26, x + 171, y + 26, { w: 2.5 });
  });
  return { s, h: y + 52 - y0 };
}, 'Six vague tone labels (negative, positive, serious, funny, neutral, sad) each replaced by precise words, such as scornful, indignant and bitter for negative, or wry and sardonic for funny. Below, pairs like “wry but affectionate” and a five-step method for analysing tone.',
'“Negative” says little; “scornful and controlled” says what the attitude is.', '## Naming tone precisely');

// 03 Lincoln vs Douglass tone
fig('03-lincoln-douglass-tone', 'Two speeches, two tones', 'Each tone fits a different purpose and situation', (y0) => {
  let s = '';
  const col = (x, who, q, words, conn, tone, purpose, f, e) => {
    let r = T(x + 205, y0 + 12, who, { size: 18, weight: 700, anchor: 'middle', fill: e });
    const qb = box(x, y0 + 26, 410, { body: q, size: 15, pad: 14, fill: C.panel, edge: e, h: 150, vc: true });
    r += qb.s;
    let y = y0 + 190;
    [['Words', words], ['Connotations', conn], ['Tone', tone], ['Purpose', purpose]].forEach(([k, v], i) => {
      const b = box(x, y, 410, { body: `**${k}:** ${v}`, size: 15, pad: 12, fill: i === 2 ? f : C.panel, edge: i === 2 ? e : C.panelEdge, h: 74, vc: true });
      r += b.s;
      if (i < 3) r += arrow(x + 205, y + 75, x + 205, y + 87, { w: 2.5 });
      y += 88;
    });
    return r;
  };
  s += col(30, 'Lincoln, Second Inaugural (1865)', '“With malice toward none, with charity for all, with firmness in the right as God gives us to see the right, let us strive on... to bind up the nation’s wounds...”', '“malice toward none”, “charity for all”, “bind up the nation’s wounds”', 'generosity, forgiveness, healing; humility in “as God gives us to see the right”', 'conciliatory and humble; solemn, not vengeful', 'call a divided nation to reconciliation', C.tealLight, C.tealDark);
  s += col(460, 'Douglass, Rochester (1852)', '“To him, your celebration is a sham; your boasted liberty, an unholy license; your national greatness, swelling vanity.”', '“sham”, “boasted”, “unholy license”, “swelling vanity”', 'a negative judgement on each thing the audience is proud of', 'scornful and indignant, controlled by balanced phrasing', 'make celebrants face the contradiction with slavery', '#f6e3d8', C.rust);
  return { s, h: 190 + 4 * 88 - 14 };
}, 'Lincoln’s closing words and Douglass’s Rochester sentence traced side by side from words to connotations to tone to purpose: Lincoln’s “charity for all” and “bind up the nation’s wounds” give a conciliatory, humble tone aimed at reconciliation; Douglass’s “sham” and “swelling vanity” give a scornful, controlled tone aimed at confronting his audience.',
'Both address a nation’s ideals; their tones differ because their purposes differ.', '## Tone in published prose');

// 04 Sports hall annotated
fig('04-sports-hall-tone', 'Reading tone from word choice', 'Worked example 1: the new sports hall', (y0) => {
  let s = '';
  const c = chunks(30, y0 + 6, 840, [
    { text: 'The new sports hall was opened last week by a', fill: C.panel },
    { text: 'visiting dignitary,', fill: C.cream, label: 'mock-formal: pomposity' },
    { text: 'who', fill: C.panel },
    { text: 'cut a ribbon', fill: C.cream, label: 'a routine gesture' },
    { text: 'and', fill: C.panel },
    { text: 'spoke for forty minutes', fill: C.cream, label: 'tedium' },
    { text: 'about', fill: C.panel },
    { text: '“legacy”.', fill: C.cream, label: 'doubted, in quotation marks' },
    { text: 'The hall has a leaking roof, and the changing rooms are not ready.', fill: C.panel },
    { text: 'Still, the buffet was excellent.', fill: C.mustard, label: 'deflating anticlimax' },
  ], { size: 17, gap: 6, rowGap: 22, minLabelW: 120 });
  s += c.s;
  let y = y0 + 6 + c.h + 28;
  const r = row(30, y, 840, 24, [
    { head: 'Tone', body: 'wry and sceptical; mildly mocking, not bitter', size: 16, fill: C.cream, edge: C.olive, headColor: C.olive },
    { head: 'Purpose', body: 'invites readers to doubt a showy opening that hides unfinished work, more persuasively than a plain complaint', size: 16, fill: C.tealLight, edge: C.tealDark, headColor: C.tealDark },
  ]);
  s += r.s;
  return { s, h: y + r.h - y0 };
}, 'The sports-hall passage with key phrases labelled: “visiting dignitary” (mock-formal), “cut a ribbon” (a routine gesture), “spoke for forty minutes” (tedium), “legacy” in quotation marks (doubted), and “Still, the buffet was excellent” (a deflating anticlimax). The tone is wry and sceptical.',
'Mock-formal words, a quoted term and an anticlimax build a wry, sceptical tone.', '## Worked example 1: identifying tone from word choice');

// 05 Same fact, three tones
fig('05-caretaker-three-tones', 'Changing tone, keeping the facts', 'Worked example 2: “The caretaker repaired the roof on Tuesday.”', (y0) => {
  let s = '';
  s += box(250, y0, 400, { head: 'Neutral', body: '“The caretaker repaired the roof on Tuesday.”', size: 16, align: 'middle', h: 90, vc: true }).s;
  const y = y0 + 150;
  s += curve(`M380,${y0 + 92} C330,${y - 30} 240,${y - 40} 232,${y - 6}`, C.tealDark, 3.5, 'ahT');
  s += curve(`M520,${y0 + 92} C570,${y - 30} 660,${y - 40} 668,${y - 6}`, C.rust, 3.5, 'ahR');
  const r = row(30, y, 840, 30, [
    { head: 'Respectful, appreciative', body: '“On Tuesday, our caretaker **kindly** repaired the roof, and we are **grateful** for his **patient** work.”', size: 16, fill: C.tealLight, edge: C.tealDark, headColor: C.tealDark },
    { head: 'Sarcastic', body: '“On Tuesday, the caretaker **finally managed** to repair the roof, **only** three weeks after it started to leak.”\n__“only” is ironic; the three weeks would need to be true__', size: 16, fill: '#f6e3d8', edge: C.rust, headColor: C.rust },
  ]);
  s += r.s;
  return { s, h: y + r.h - y0 };
}, 'The neutral sentence “The caretaker repaired the roof on Tuesday” branches into a respectful version (“kindly”, “grateful”, “patient”) and a sarcastic one (“finally managed”, “only three weeks after it started to leak”).',
'The facts stay; the words, and so the attitudes, change.', '## Worked example 2: changing tone while keeping the facts');
