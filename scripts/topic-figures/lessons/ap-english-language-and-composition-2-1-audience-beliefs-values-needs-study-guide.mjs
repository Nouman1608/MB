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

export const slug = 'ap-english-language-and-composition-2-1-audience-beliefs-values-needs-study-guide';
const LESSON = 'src/content/ap-resources/english-language-and-composition/2-1-audience-beliefs-values-needs-study-guide.md';

// 01 Perception guides choices
fig('01-perception-guides-choices', 'Perceptions guide choices', 'A writer cannot read minds, so the text rests on inferences', (y0) => {
  let s = '';
  const w = 240, gap = 60;
  const items = [
    ['Writer infers', 'what the group believes, cares about, lacks and has experienced', C.panel, C.ink],
    ['Perceptions', 'of beliefs, values, needs and background', C.cream, C.olive],
    ['Choices', 'evidence, vocabulary, tone, handling of opposition, the ask', C.tealLight, C.tealDark],
  ];
  const h = Math.max(...items.map(([a, b]) => box(0, 0, w, { head: a, body: b, size: 16, align: 'middle' }).h));
  items.forEach(([a, b, f, e], i) => {
    const x = 30 + i * (w + gap);
    s += box(x, y0, w, { head: a, body: b, size: 16, align: 'middle', fill: f, edge: e, h, vc: true }).s;
    if (i < 2) s += arrow(x + w + 6, y0 + h / 2, x + w + gap - 6, y0 + h / 2, { w: 4 });
  });
  const y = y0 + h + 70;
  s += curve(`M${30 + 2 * (w + gap) + w / 2},${y0 + h + 4} C${750},${y - 20} 720,${y + 10} 690,${y + 26}`, C.tealDark, 4, 'ahT');
  s += curve(`M${30 + 2 * (w + gap) + w / 2 - 60},${y0 + h + 4} C${560},${y - 30} 330,${y - 20} 260,${y + 26}`, C.rust, 3, 'ahR', '8 6');
  const r = row(30, y + 30, 840, 40, [
    { head: 'Inferences wrong', body: 'The argument misfires.', fill: C.panel, edge: C.rust, headColor: C.rust, align: 'middle', size: 17 },
    { head: 'Inferences good', body: 'The audience feels understood and is more ready to listen.', fill: C.tealLight, edge: C.tealDark, headColor: C.tealDark, align: 'middle', size: 17 },
  ]);
  s += r.s;
  return { s, h: y + 30 + r.h - y0 };
}, 'A chain from the writer’s inferences, to perceptions of the audience’s beliefs, values, needs and background, to choices of evidence, vocabulary, tone and the ask. If the inferences are wrong the argument misfires; if they are good the audience feels understood and is more ready to listen.',
'The writer’s perception of the audience, right or wrong, guides the choices in the text.', '## From "who is the audience?" to "what does this audience need?"');

// 02 Four lenses around governors
fig('02-four-lenses-governors', 'Four lenses on one audience', 'Audience: school governors', (y0) => {
  let s = '';
  const L = [
    ['Beliefs', 'What does this group hold to be true?', 'Schools should spend money where it helps pupils directly.'],
    ['Values', 'What does it care about and treat as right?', 'Safety, fairness, a good reputation for the school.'],
    ['Needs', 'What does it lack, fear or want?', 'A decision it can defend to parents; a budget that balances.'],
    ['Background', 'What experience and knowledge does it bring?', 'Volunteers with jobs and families; not teachers.'],
  ];
  const w = 380;
  const hs = L.map(([h, q, e]) => box(0, 0, w, { head: h, body: `__${q}__\n${e}`, size: 16 }).h);
  const bh = Math.max(...hs);
  L.forEach(([h, q, e], i) => {
    const x = i % 2 ? 900 - 30 - w : 30, y = y0 + Math.floor(i / 2) * (bh + 76);
    s += box(x, y, w, { head: h, body: `__${q}__\n${e}`, size: 16, h: bh, headColor: C.tealDark }).s;
  });
  const cy = y0 + bh + 38;
  s += rect(330, cy - 32, 240, 64, C.cream, C.ink, 32, 3) + T(450, cy + 7, 'Governors', { size: 21, weight: 700, anchor: 'middle' });
  let y = y0 + 2 * bh + 76 + 26;
  const r = row(30, y, 840, 24, [
    { head: 'Belief: what is true', body: '“Bikes are safer than cars for short trips.”', size: 16, fill: C.tealLight, edge: C.tealDark, align: 'middle' },
    { head: 'Value: what matters', body: '“Children’s safety comes first.”', size: 16, fill: C.cream, edge: C.olive, align: 'middle' },
  ]);
  s += r.s;
  return { s, h: y + r.h - y0 };
}, 'Four boxes around a central label, governors: beliefs (money should help pupils directly), values (safety, fairness, reputation), needs (a defensible decision and a balanced budget) and background (volunteers, not teachers). Below, a belief is about what is true and a value about what matters.',
'Use all four lenses, and tie each to a specific choice in the text.', '## Four lenses for analysing an audience');

// 03 Common ground, concession, refutation
fig('03-common-ground-concession', 'Common ground, then concession', 'Two moves that appear constantly in effective arguments', (y0) => {
  let s = '';
  const st = [
    ['Common ground', '“We all want our children to arrive at school safely.”', 'Signals the writer is not an opponent; gives a reason to listen.', C.tealLight, C.tealDark],
    ['Concession', '“It is true that the shelter would cost money, and governors are right to count every pound.”', 'Shows fairness, lowers resistance, makes the later disagreement more credible.', C.cream, C.olive],
    ['Refutation or “but”', 'The writer shows why the granted point does not settle the question.', '', C.panel, C.ink],
  ];
  let y = y0;
  st.forEach(([h, q, eff, f, e], i) => {
    const x = 30 + i * 60, w = 660;
    const b = box(x, y, w, { head: h, body: q + (eff ? `\n{{→ ${eff}}}` : ''), size: 16, fill: f, edge: e, headColor: e === C.ink ? C.ink : e, pad: 16 });
    s += b.s;
    if (i < 2) s += arrow(x + 100, y + b.h + 2, x + 100, y + b.h + 22, { w: 3.5 });
    y += b.h + 24;
  });
  return { s, h: y - 24 - y0 };
}, 'Three descending steps. Common ground: “We all want our children to arrive at school safely.” Concession: “It is true that the shelter would cost money...” Refutation: the writer shows why the granted point does not settle the question.',
'Grant what is reasonable, then show why it does not settle the question.', '## Common ground and concession');

// 04 Lincoln reads the audience
fig('04-lincoln-first-inaugural', 'Reading the audience’s fear', 'Lincoln’s First Inaugural, 4 March 1861', (y0) => {
  let s = '';
  s += box(30, y0, 260, { head: 'Audience', body: 'including the people of the seceded states, who feared he would attack slavery where it existed', size: 16, align: 'middle', h: 200, vc: true }).s;
  const r = [
    ['Need: reassurance', '“I have no purpose, directly or indirectly, to interfere with the institution of slavery in the States where it exists.”', C.cream, C.olive],
    ['Common ground: a shared past', '“We are not enemies, but friends. We must not be enemies.”', C.tealLight, C.tealDark],
  ];
  let y = y0;
  r.forEach(([h, q, f, e], i) => {
    const b = box(370, y, 500, { head: h, body: q, size: 16, fill: f, edge: e, headColor: e, h: 92, vc: true });
    s += b.s;
    s += arrow(294, y0 + 100, 364, y + 46, { w: 3.5 });
    y += 108;
  });
  y += 8;
  const steps = ['read the fear', 'name it', 'answer it', 'then press the central claim: the Union is perpetual'];
  const c = chunks(30, y, 840, steps.map((t2, i) => ({ text: `${i + 1}. ${t2}`, fill: i === 3 ? C.cream : C.panel })), { size: 17, gap: 34 });
  s += c.s;
  return { s, h: y + c.h - y0 };
}, 'Lincoln’s audience, including the people of the seceded states, feared he would attack slavery where it existed. He answers their need for reassurance (“I have no purpose... to interfere”) and appeals to common ground (“We are not enemies, but friends”), then presses his claim that the Union is perpetual.',
'Read the fear, name it, answer it, then press the claim.', '## A public-domain example: Lincoln\'s First Inaugural (1861)');

// 05 Lens to choice mapping
fig('05-lens-to-choice', 'Each choice answers a lens', 'Worked example 1: proposing a covered bike shelter', (y0) => {
  let s = '';
  const lens = [['Value', 'safety, fairness, responsible spending'], ['Need', 'a costed proposal, defensible to parents and the local authority'], ['Belief', 'money should benefit pupils; long-term savings count']];
  const ch = [
    ['Open with common ground', '“Every governor wants pupils to arrive at school safely and dry.”'],
    ['Evidence that fits', 'a £4,200 supplier quote; 91 of 160 cyclists would cycle more if covered; less than a month of minibus fuel (invented figures)'],
    ['Concede and answer', '“Some governors may worry that a shelter will be little used. The survey suggests otherwise.”'],
  ];
  let y = y0;
  s += T(150, y + 6, 'LENS', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += T(620, y + 6, 'CHOICE', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  y += 22;
  lens.forEach(([l, d], i) => {
    const b = box(400, y, 470, { head: ch[i][0], body: ch[i][1], size: 16, fill: C.cream, edge: C.olive, pad: 14 });
    const a = box(30, y, 240, { head: l, body: d, size: 16, fill: C.tealLight, edge: C.tealDark, pad: 14 });
    const h = Math.max(a.h, b.h);
    s += box(30, y, 240, { head: l, body: d, size: 16, fill: C.tealLight, edge: C.tealDark, pad: 14, h, vc: true }).s;
    s += box(400, y, 470, { head: ch[i][0], body: ch[i][1], size: 16, fill: C.cream, edge: C.olive, pad: 14, h, vc: true }).s;
    s += arrow(276, y + h / 2, 394, y + h / 2, { w: 4 });
    y += h + 16;
  });
  s += box(30, y + 4, 840, { body: '[[Earns little:]] “use formal language because they are adults”: it names no belief, value or need.', size: 17, align: 'middle', edge: C.rust, dash: '7 5' }).s;
  return { s, h: y + 58 - y0 };
}, 'Three links from audience lens to writing choice: the value of safety leads to an opening of common ground; the need for a costed, defensible case leads to a supplier quote, a survey and a fuel comparison; the belief about use leads to a concession and answer. A note warns that “use formal language because they are adults” names no lens.',
'Each choice links back to one belief, value or need.', '## Worked example 1: audience analysis for a writing task');

// 06 Reading the parents' passage
fig('06-reading-the-passage', 'Reading an audience in a passage', 'Worked example 2: a speech to parents', (y0) => {
  let s = '';
  const segs = [
    ['Parents, I know that most of you gave up an evening to be here,', '2', C.cream],
    ['and that many of you have been told for years that the bus company will fix this road crossing. I have been told that too.', '1', C.tealLight],
    ['I am not asking you to trust the company’s promises. I am asking you to look at the three photographs on the board, each taken in the last month,', '3', C.panel],
    ['and then to sign the petition by the door.', '3', C.panel],
  ];
  let y = y0;
  segs.forEach(([txt, n, f]) => {
    const b = box(30, y, 520, { body: txt, size: 17, fill: f, edge: n === '3' ? C.ink : n === '1' ? C.tealDark : C.olive, pad: 14 });
    s += b.s + num(570, y + b.h / 2, n, n === '3' ? C.mustard : C.cream, 16);
    y += b.h + 8;
  });
  const notes = [
    ['1  Belief', 'They have heard promises before and may be sceptical; the speaker sides with that scepticism.'],
    ['2  Value / need', 'Acknowledging their time builds goodwill and signals a reasonable request.'],
    ['3  Choice that follows', 'Visible, recent evidence instead of trust, and a concrete, easy action.'],
  ];
  let ny = y0;
  notes.forEach(([h, b]) => { const bx = box(600, ny, 270, { head: h, body: b, size: 15, headSize: 17, pad: 12 }); s += bx.s; ny += bx.h + 10; });
  const H = Math.max(y - 8, ny - 10) - y0;
  return { s, h: H };
}, 'The speech to parents split into four parts, numbered against three notes. Being told for years that the crossing will be fixed shows the audience’s sceptical belief; giving up an evening shows a value and need; and the photographs and petition are the choices that follow.',
'Photographs instead of assurances: the clearest sign the speaker has read the audience.', '## Worked example 2: reading an audience in a short passage');
