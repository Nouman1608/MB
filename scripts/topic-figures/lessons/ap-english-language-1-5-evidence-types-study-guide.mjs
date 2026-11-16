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

export const slug = 'ap-english-language-1-5-evidence-types-study-guide';
const LESSON = 'src/content/ap-resources/english-language-and-composition/1-5-evidence-types-study-guide.md';

// 01 Court analogy
fig('01-evidence-and-reasoning', 'What stands behind a claim', 'The court analogy', (y0) => {
  let s = '';
  s += box(200, y0, 500, { head: 'Claim', body: 'The defendant took the money.', align: 'middle', fill: C.cream, edge: C.ink, sw: 3, size: 18, h: 92, vc: true }).s;
  const ev = ['CCTV footage', 'Bank record', 'Witness'];
  const ey = y0 + 250;
  ev.forEach((e, i) => {
    const x = 40 + i * 150;
    s += rect(x, ey, 130, 60, C.panel, C.ink, 10, 2.5) + T(x + 65, ey + 37, e, { size: 16, weight: 700, anchor: 'middle' });
  });
  s += T(250, ey + 96, 'EVIDENCE', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += P(250, ey + 120, 'the raw material: facts, examples, stories, expert statements', { size: 16, anchor: 'middle', w: 420, fill: C.muted }).s;
  s += box(540, ey - 20, 330, { head: 'REASONING', body: 'The lawyer’s explanation of why the footage and the record, together, make the claim true.', size: 16, fill: C.tealLight, edge: C.tealDark, headColor: C.tealDark, h: 120, vc: true }).s;
  // pillars
  s += curve(`M250,${ey - 6} C250,${y0 + 170} 380,${y0 + 160} 400,${y0 + 100}`, C.ink, 4);
  s += curve(`M705,${ey - 24} C705,${y0 + 170} 540,${y0 + 160} 500,${y0 + 100}`, C.tealDark, 4, 'ahT');
  s += T(450, y0 + 175, 'a writer needs both', { size: 17, anchor: 'middle', weight: 700, fill: C.muted });
  return { s, h: ey + 150 - y0 };
}, 'A claim, “the defendant took the money”, is supported from below by evidence (CCTV footage, a bank record, a witness) and by reasoning, the lawyer’s explanation of why the evidence together makes the claim true.',
'Evidence supplies the raw material; reasoning explains why it supports the claim.', '## Evidence is what stands behind a claim');

// 02 Ten types of evidence
fig('02-types-of-evidence', 'Ten types of evidence', 'What each does well (+) and where it is weak (−), with the ferry examples', (y0) => {
  const k = [
    ['Fact', 'Hard to dispute', 'May be too general', '“late on 41 of the last 60 days”'],
    ['Statistic', 'Shows scale and pattern', 'Misleads if source or sample unclear', '“rose from 12% to 68%”'],
    ['Example / detail', 'Concrete and memorable', 'One case may not be typical', 'the nurse who missed her shift'],
    ['Anecdote', 'Human and engaging', 'May seem unrepresentative', 'neighbour waiting in the rain'],
    ['Personal experience', 'First-hand credibility', 'One person’s view', '“commuted... for nine years”'],
    ['Testimony', 'Account from someone affected', 'May reflect bias or memory', 'crew member at the inquiry'],
    ['Expert opinion', 'Authority on a technical point', 'Only as good as credentials', 'the port’s chief engineer'],
    ['Experiment / study', 'Controlled and systematic', 'May not transfer', 'faster-ferry trial: delays 9%'],
    ['Analogy', 'Makes the unfamiliar clear', 'Never exact', 'bicycle with a flat tyre'],
    ['Illustration', 'Helps readers see', 'Feeling more than proof', 'photo of the queue at dawn'],
  ];
  let s = '';
  const w = 412, gx = 16, gy = 12;
  let y = y0;
  for (let i = 0; i < k.length; i += 2) {
    const items = [k[i], k[i + 1]].map(([h, plus, minus, ex]) => ({ head: h, body: `{{+}} ${plus}\n[[−]] ${minus}\n__${ex}__`, size: 15, headSize: 18, pad: 14, bar: i < 2 ? C.mustard : i < 6 ? C.teal : C.rockDark }));
    const r = row(30, y, 840, gx, items);
    s += r.s; y += r.h + gy;
  }
  return { s, h: y - gy - y0 };
}, 'Ten cards, one per type of evidence: fact, statistic, example, anecdote, personal experience, testimony, expert opinion, experiment or study, analogy and illustration. Each lists a strength, a weakness and the ferry example from the lesson.',
'Recognise the kind of evidence, then explain what it does for the claim.', '## The types of evidence');

// 03 Four questions filter
fig('03-four-questions-filter', 'What makes evidence useful', 'Four questions to ask of every piece', (y0) => {
  let s = '';
  const q = [['Relevant?', 'Does it bear on the claim?', 'ferry prices do not support a claim about reliability'], ['Accurate and credible?', 'Is the source competent and unbiased?', ''], ['Representative?', 'Typical, or a rare case chosen for effect?', ''], ['Appropriate for the audience?', 'Statistics for sceptical officials; an anecdote for a general readership.', '']];
  let y = y0;
  q.forEach(([h, b, ex], i) => {
    const inset = i * 40, w = 840 - 2 * inset;
    const bx = box(30 + inset, y, w, { head: `${i + 1}.  ${h}`, body: b + (ex ? `  __e.g. ${ex}__` : ''), size: 16, align: 'middle', fill: i % 2 ? C.panel : C.tealLight, edge: C.tealDark, pad: 14 });
    s += bx.s;
    y += bx.h;
    s += arrow(450, y + 2, 450, y + 24, { w: 3.5, color: C.tealDark, marker: 'ahT' });
    y += 28;
  });
  s += rect(330, y, 240, 54, C.cream, C.ink, 27, 3) + T(450, y + 34, 'Useful evidence', { size: 20, weight: 700, anchor: 'middle' });
  return { s, h: y + 54 - y0 };
}, 'A narrowing funnel of four questions: is the evidence relevant, accurate and credible, representative, and appropriate for the audience? Evidence that passes all four is useful.',
'Relevant, credible, representative evidence that suits the audience beats a pile of weak items.', '## What makes evidence useful');

// 04 Stanton's catalogue
fig('04-stanton-catalogue', 'Evidence by accumulation', 'Declaration of Sentiments, Seneca Falls, 1848', (y0) => {
  let s = '';
  const items = ['“He has never permitted her to exercise her inalienable right to the elective franchise.”', '“He has compelled her to submit to laws, in the formation of which she had no voice.”', '“He has ...”', '“He has ...”', '“He has ...”'];
  let y = y0;
  items.forEach((it, i) => {
    const real = i < 2;
    const x = 30 + i * 22;
    const w = 520;
    const b = box(x, y, w, { body: it, size: real ? 17 : 18, fill: real ? C.panel : C.tealLight, edge: real ? C.ink : C.tealDark, pad: 14, h: real ? 78 : 48, vc: true, dash: real ? '' : '6 5' });
    s += b.s; y += (real ? 78 : 48) + 10;
  });
  const bot = y - 10;
  s += `<path d="M${640},${y0 + 4} q16,0 16,16 L656,${bot - 20} q0,16 -16,16" fill="none" stroke="${C.ink}" stroke-width="3"/>`;
  s += box(680, y0 + 60, 190, { head: 'Claim', body: 'women have been denied rights', size: 16, align: 'middle', fill: C.cream, edge: C.ink, sw: 3, h: 150, vc: true }).s;
  s += arrow(658, (y0 + bot) / 2, 676, (y0 + bot) / 2, { w: 3.5 });
  y += 10;
  const r = row(30, y, 840, 20, [
    { head: 'Kind of evidence', body: 'Particular facts and examples about law and custom, not statistics or testimony.', size: 16 },
    { head: 'Why it works', body: 'Power from sheer number; the “He has...” pattern imitates the Declaration of Independence so readers recognise the charge.', size: 16 },
  ]);
  s += r.s;
  return { s, h: y + r.h - y0 };
}, 'A stack of grievances beginning “He has...”, two quoted from the Declaration of Sentiments, bracketed together to support the claim that women have been denied rights. Notes explain that the evidence is a catalogue of concrete restrictions whose power comes from accumulation and from imitating a famous precedent.',
'A catalogue of concrete examples persuades by accumulation.', '## A public-domain example of evidence: Stanton\'s Declaration (1848)');

// 05 Ferry paragraph annotated
fig('05-ferry-paragraph-annotated', 'Naming the evidence in a paragraph', 'Worked example 1 (invented data)', (y0) => {
  let s = '';
  const parts = [
    ['The island’s ferry is failing the people who depend on it.', 'Claim', 'the only sentence that takes a stance', C.cream, C.ink],
    ['Late sailings rose from 12 percent to 68 percent in a single year.', 'Statistic', 'a number summarising many sailings', C.tealLight, C.tealDark],
    ['On 3 March a hospital nurse missed her shift because the 7.10 sailing left at 7.45, and the ward was left a nurse short for the morning.', 'Example', 'one specific case makes the effect concrete', C.tealLight, C.tealDark],
    ['The port’s chief engineer has called the main engine “beyond economic repair.”', 'Expert opinion', 'authority on a technical point', C.tealLight, C.tealDark],
    ['Running the island on this ferry is like commuting on a bicycle with a flat tyre.', 'Analogy', 'unfamiliar compared to familiar', C.tealLight, C.tealDark],
  ];
  let y = y0;
  for (const [txt, lab, note, f, e] of parts) {
    const a = box(30, y, 540, { body: txt, size: 17, fill: f, edge: e, pad: 14, sw: lab === 'Claim' ? 3 : 2.5 });
    const b = box(610, y, 260, { head: lab, body: note, size: 15, headSize: 18, pad: 12, headColor: e === C.ink ? C.olive : C.tealDark });
    const h = Math.max(a.h, b.h);
    s += box(30, y, 540, { body: txt, size: 17, fill: f, edge: e, pad: 14, h, vc: true, sw: lab === 'Claim' ? 3 : 2.5 }).s;
    s += box(610, y, 260, { head: lab, body: note, size: 15, headSize: 18, pad: 12, h, vc: true, headColor: e === C.ink ? C.olive : C.tealDark }).s;
    s += line(572, y + h / 2, 606, y + h / 2, e, 3);
    y += h + 10;
  }
  s += P(450, y + 18, 'Each piece of evidence is checkable or illustrative; none is a statement of position.', { size: 17, anchor: 'middle', w: 820, fill: C.muted }).s;
  return { s, h: y + 30 - y0 };
}, 'The invented ferry paragraph split into sentences. The first is the claim. The others are labelled as a statistic (late sailings rose from 12 to 68 percent), an example (the nurse who missed her shift), expert opinion (the chief engineer) and an analogy (a bicycle with a flat tyre).',
'Only the first sentence argues a position; the rest can be checked or pictured.', '## Worked example 1: naming the evidence in an invented paragraph');

// 06 Matching evidence to claim
fig('06-match-evidence-to-claim', 'Does it measure what the claim says?', 'Claim: “A four-day school week would not reduce learning.”', (y0) => {
  let s = '';
  const c = [
    ['ii', 'Study', 'Eight schools moved to four longer days; average test scores unchanged after two years.', 'Measures learning, over time, in several schools.', true],
    ['i', 'Popularity', '“Many people like long weekends.”', 'Says nothing about learning.', false],
    ['iii', 'Testimony', '“My cousin... says it is good.”', 'One person; a feeling, not a result.', false],
    ['iv', 'Fact', '“Used in some rural areas.”', 'Being common is not the same as working.', false],
  ];
  const tx = 750, ty = y0 + 190;
  s += circ(tx, ty, 110, C.panel, C.ink, 2.5) + circ(tx, ty, 72, C.tealLight, C.tealDark, 2.5) + circ(tx, ty, 36, C.cream, C.ink, 3);
  s += T(tx, ty + 6, 'learning', { size: 16, weight: 700, anchor: 'middle' });
  s += T(tx, ty - 120, 'what the claim names', { size: 15, anchor: 'middle', fill: C.muted, weight: 700 });
  let y = y0;
  c.forEach(([n, kind, txt, why, best], i) => {
    const b = box(30, y, 540, { head: `(${n}) ${kind}`, body: `${txt}\n${best ? '{{' + why + '}}' : '[[' + why + ']]'}`, size: 16, pad: 14, headSize: 18, fill: best ? C.cream : C.panel, edge: best ? C.ink : C.panelEdge, sw: best ? 3 : 2.5 });
    s += b.s;
    const my = y + b.h / 2;
    if (best) s += arrow(572, my, tx - 40, ty - 4, { w: 4, color: C.tealDark, marker: 'ahT' });
    else s += curve(`M572,${my} Q${620},${my} ${tx - 118 + i * 6},${ty + 60 + i * 30}`, C.rust, 2.5, 'ahR', '7 6');
    y += b.h + 12;
  });
  return { s, h: y - 12 - y0 };
}, 'Four pieces of evidence are aimed at a target labelled learning. Only (ii), a study of eight schools whose test scores were unchanged after two years, hits it. Popularity (i), one cousin’s testimony (iii) and a fact about where four-day weeks are used (iv) miss.',
'The best evidence matches the exact thing the claim says.', '## Worked example 2: matching evidence to a claim');
