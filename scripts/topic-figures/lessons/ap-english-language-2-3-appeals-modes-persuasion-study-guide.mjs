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

export const slug = 'ap-english-language-2-3-appeals-modes-persuasion-study-guide';
const LESSON = 'src/content/ap-resources/english-language-and-composition/2-3-appeals-modes-persuasion-study-guide.md';

// 01 Rhetorical triangle with kairos
fig('01-three-appeals', 'Three ways to persuade', 'The classical appeals, and the right moment', (y0) => {
  let s = '';
  const A = [450, y0 + 80], B = [170, y0 + 450], Cc = [730, y0 + 450];
  s += `<path d="M${A[0]},${A[1]} L${B[0]},${B[1]} L${Cc[0]},${Cc[1]} Z" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="3" stroke-linejoin="round"/>`;
  const node = (x, y, name, greek, aim, q, fill) => {
    const b = box(x - 150, y - 60, 300, { head: `${name} · ${greek}`, body: `${aim}\n__“${q}”__`, size: 16, align: 'middle', fill, edge: C.ink, headSize: 19, pad: 14 });
    return box(x - 150, y - 60, 300, { head: `${name} · ${greek}`, body: `${aim}\n__“${q}”__`, size: 16, align: 'middle', fill, edge: C.ink, headSize: 19, pad: 14, h: b.h }).s;
  };
  s += node(A[0], A[1], 'Reason', 'logos', 'logic, evidence, structure', 'Does this make sense and is it backed up?', C.panel);
  s += node(B[0] + 20, B[1], 'Credibility', 'ethos', 'trustworthy, knowledgeable, fair', 'Why should I believe this person?', C.panel);
  s += node(Cc[0] - 20, Cc[1], 'Emotion and values', 'pathos', 'feelings and what the audience holds dear', 'Does this matter to me?', C.panel);
  s += circ(450, y0 + 320, 66, C.cream, C.ink, 3);
  s += T(450, y0 + 314, 'kairos', { size: 19, weight: 700, anchor: 'middle' });
  s += T(450, y0 + 336, 'the right moment', { size: 15, anchor: 'middle', fill: C.muted });
  return { s, h: 560 };
}, 'A triangle with three appeals at its corners: logos, the appeal to reason (“Does this make sense and is it backed up?”); ethos, the appeal to credibility (“Why should I believe this person?”); and pathos, the appeal to emotion and values (“Does this matter to me?”). Kairos, the right moment, sits in the centre.',
'Reason, credibility, emotion: three routes to persuasion, strongest at the right moment.', '## Three ways to persuade');

// 02 Where ethos is built
fig('02-where-ethos-is-built', 'Where ethos is built', '', (y0) => {
  let s = '';
  const st = [['Before the argument', 'a speaker’s title or reputation'], ['Within the text', 'an account of experience: “I have taught for thirty years.”'], ['Through the style', 'precision and courtesy; correct, measured language']];
  const r = row(30, y0 + 20, 840, 50, st.map(([h, b]) => ({ head: h, body: b, align: 'middle', size: 16, fill: C.tealLight, edge: C.tealDark, headColor: C.tealDark })));
  s += r.s;
  let y = y0 + 20 + r.h + 40;
  s += T(450, y, 'What builds trust in the text', { size: 19, weight: 700, anchor: 'middle' });
  y += 20;
  const k = ['Knowledge or experience', 'Fairness: conceding points', 'Shared values', 'Good will', 'Reliable sources', 'Careful language'];
  const c = chunks(30, y, 840, k.map((t2) => ({ text: t2, fill: C.cream })), { size: 17, gap: 12, rowGap: 14 });
  s += c.s;
  y += c.h + 26;
  s += box(30, y, 840, { body: '[[Damaged by]] exaggeration or errors.', size: 18, align: 'middle', edge: C.rust, dash: '7 5' }).s;
  return { s, h: y + 56 - y0 };
}, 'Ethos can be built before the argument (a title or reputation), within the text (an account of experience) and through the style (precision and courtesy). Six things build trust: knowledge, fairness, shared values, good will, reliable sources and careful language. Exaggeration and errors damage it.',
'Ethos is the audience’s trust, built before, within and through the writing.', '## Ethos: the appeal to credibility and character');

// 03 Paramedic passage: primary and secondary appeals
fig('03-paramedic-appeals', 'Primary and secondary appeals', 'Worked example 1: the paramedic (invented figures)', (y0) => {
  let s = '';
  const rows = [
    ['“I have worked as a paramedic in this county for twenty-two years.”', 'Ethos', '', 'establishes experience and credibility'],
    ['“Last year, fourteen of the seventeen cardiac arrests outside hospital happened more than five minutes from the nearest ambulance.”', 'Logos', '', 'a statistic: response times are a problem'],
    ['“I have knelt beside a father on his own front path, and I can tell you that five minutes is a very long time.”', 'Pathos', 'Ethos', 'sympathy and urgency; first-hand experience'],
    ['“A defibrillator in every village hall costs less than one new ambulance, and it would be there in seconds.”', 'Logos', '', 'cost and speed make the proposal reasonable'],
  ];
  const col = { Ethos: C.tealLight, Logos: C.panel, Pathos: C.cream };
  s += T(640, y0 + 8, 'primary', { size: 15, weight: 700, anchor: 'middle', fill: C.muted });
  s += T(760, y0 + 8, 'also', { size: 15, weight: 700, anchor: 'middle', fill: C.muted });
  let y = y0 + 22;
  for (const [txt, p, sec, why] of rows) {
    const b = box(30, y, 540, { body: txt, size: 16, pad: 14 });
    const h = Math.max(b.h, 92);
    s += box(30, y, 540, { body: `${txt}\n__${why}__`, size: 16, pad: 14, h: Math.max(h, box(30, y, 540, { body: `${txt}\n__${why}__`, size: 16, pad: 14 }).h), vc: true }).s;
    const hh = Math.max(h, box(30, y, 540, { body: `${txt}\n__${why}__`, size: 16, pad: 14 }).h);
    s += rect(588, y + hh / 2 - 22, 104, 44, col[p], C.ink, 22, 3) + T(640, y + hh / 2 + 7, p, { size: 18, weight: 700, anchor: 'middle' });
    if (sec) s += rect(710, y + hh / 2 - 20, 100, 40, C.panel, C.tealDark, 20, 2, 'stroke-dasharray="6 4"') + T(760, y + hh / 2 + 6, sec, { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
    y += hh + 12;
  }
  s += box(30, y + 4, 840, { body: 'Name the **primary** appeal, note a secondary effect, then say what it does for the purpose: persuading villagers and councillors to fund defibrillators.', size: 16, align: 'middle', fill: C.cream, edge: C.olive }).s;
  return { s, h: y + 70 - y0 };
}, 'The four sentences of the paramedic passage with their primary appeal: twenty-two years’ experience is ethos; the cardiac-arrest statistic is logos; kneeling beside a father is pathos and also ethos; the cost comparison with an ambulance is logos.',
'Name the primary appeal, acknowledge a secondary one, and link both to the purpose.', '## Worked example 1: classifying the appeals in a passage');

// 04 Decide the job, not the label
fig('04-decide-the-job', 'Decide the job, not the label', 'The same kind of material can serve different appeals', (y0) => {
  let s = '';
  const block = (y, center, branches) => {
    let r = rect(30, y + 70, 220, 64, C.cream, C.ink, 32, 3) + T(140, y + 109, center, { size: 19, weight: 700, anchor: 'middle' });
    branches.forEach(([ap, txt], i) => {
      const by = y + i * 72;
      r += curve(`M252,${y + 102} C300,${y + 102} 300,${by + 30} 350,${by + 30}`, C.ink, 3);
      r += rect(356, by + 6, 104, 48, C.tealLight, C.tealDark, 24, 2.5) + T(408, by + 37, ap, { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
      r += P(480, by + 36, txt, { size: 16, w: 390 }).s;
    });
    return r;
  };
  s += block(y0, 'A statistic', [['Logos', 'supports a claim with evidence'], ['Pathos', 'arouses fear'], ['Ethos', 'quoted from a credible institution']]);
  s += line(30, y0 + 228, 870, y0 + 228, C.panelEdge, 2, '6 6');
  s += block(y0 + 252, 'Quoting an expert', [['Ethos', 'cited for authority: builds credibility'], ['Logos', 'the expert’s reasoning, if explained'], ['', '']].slice(0, 2));
  return { s, h: 252 + 160 };
}, 'A statistic can serve logos by supporting a claim, pathos by arousing fear, or ethos when quoted from a credible institution. Quoting an expert usually builds ethos through authority, but the expert’s reasoning, if explained, can also be logos.',
'Ask what job the material does in this text, then name the appeal.', '## Common appeal confusions');

// 05 Anthony: narrowing rejected, scope expands
fig('05-anthony-we-the-people', '“We, the whole people”', 'Susan B. Anthony, 1873', (y0) => {
  let s = '';
  const L = [['not', 'we, the white male citizens', 480, C.panel], ['nor yet', 'we, the male citizens', 640, C.panel], ['but', 'we, the whole people', 840, C.tealLight]];
  s += T(30, y0 + 14, '“It was we, the people; ...who formed the Union.”', { size: 19, italic: true });
  let y = y0 + 40;
  L.forEach(([w, txt, wd, f], i) => {
    s += rect(30 + (840 - wd) / 2, y, wd, 54, f, i === 2 ? C.tealDark : C.rust, 10, 2.5, i < 2 ? 'stroke-dasharray="7 5"' : '');
    s += T(450, y + 34, `${w}  “${txt}”`, { size: 19, weight: i === 2 ? 700 : 400, anchor: 'middle' });
    if (i < 2) s += line(30 + (840 - wd) / 2 + 10, y + 27, 30 + (840 + wd) / 2 - 10, y + 27, C.rust, 2.5);
    y += 70;
  });
  s += T(450, y + 4, 'each narrowing is rejected; the scope expands', { size: 16, anchor: 'middle', fill: C.muted, weight: 700 });
  y += 26;
  const r = row(30, y, 840, 16, [
    { head: 'Logos', body: 'An argument from the founding text: “the people” includes everyone.', size: 16 },
    { head: 'Pathos', body: 'The “not... nor yet... but” rhythm creates a rising feeling of justice.', size: 16 },
    { head: 'Ethos', body: 'Places herself within the revered founding words, faithful to them.', size: 16 },
  ]);
  s += r.s;
  return { s, h: y + r.h - y0 };
}, 'Three bars of growing width: “we, the white male citizens” and “we, the male citizens” are struck through, and “we, the whole people” spans the full width. Below, the sentence works as logos (an argument from the founding text), pathos (a rising rhythm of justice) and ethos (faithfulness to the Constitution).',
'One sentence can do all three jobs: the logic is not separate from the rhythm.', '## A public-domain example: Anthony\'s argument from the Constitution');

// 06 Before and after: adding logos
fig('06-strengthening-missing-appeal', 'Strengthening the missing appeal', 'Worked example 2: a quiet study room', (y0) => {
  let s = '';
  const rows = [
    ['Logos', 'Claim stated, no evidence: “Noisy corridors cause stress” is an assertion.', 'Survey: 87 of 120 pupils could not find a quiet place (invented); a measured point about cost.'],
    ['Ethos', 'Nothing shows credibility or fairness.', 'Local detail shows the writer knows the school; measured cost argument.'],
    ['Pathos', 'Mild: “needs somewhere calm”, no image or story.', 'Mock exam week: library full by 12.40, corridors too loud to revise.'],
  ];
  s += T(330, y0 + 8, 'Before', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  s += T(690, y0 + 8, 'After revision', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  let y = y0 + 24;
  rows.forEach(([ap, b, a], i) => {
    const bb = box(160, y, 330, { body: b, size: 16, pad: 14 }), ab = box(520, y, 350, { body: a, size: 16, pad: 14 });
    const h = Math.max(bb.h, ab.h);
    s += rect(30, y, 110, h, i === 0 ? C.mustard : C.cream, C.ink, 12, 2.5) + T(85, y + h / 2 + 7, ap, { size: 19, weight: 700, anchor: 'middle' });
    s += box(160, y, 330, { body: b, size: 16, pad: 14, h, vc: true, edge: C.rust, dash: '6 5' }).s;
    s += box(520, y, 350, { body: a, size: 16, pad: 14, h, vc: true, fill: C.tealLight, edge: C.tealDark }).s;
    s += arrow(494, y + h / 2, 514, y + h / 2, { w: 3 });
    y += h + 12;
  });
  s += box(30, y + 4, 840, { body: 'Biggest gap: **logos**, so evidence is added first. The paragraph still makes a single claim.', size: 17, align: 'middle', fill: C.cream, edge: C.olive }).s;
  return { s, h: y + 58 - y0 };
}, 'Before and after for the quiet-room paragraph. Before, logos is a claim with no evidence, ethos is absent and pathos is mild. After, a survey statistic and a cost argument add logos, local detail adds credibility, and the mock exam week adds a concrete picture.',
'Diagnose which appeal is weakest, then add it without losing the single claim.', '## Worked example 2: strengthening a missing appeal');
