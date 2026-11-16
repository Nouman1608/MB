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

export const slug = 'ap-english-language-6-2-position-perspective-study-guide';
const LESSON = 'src/content/ap-resources/english-language-and-composition/6-2-position-perspective-study-guide.md';

// 01 Hill metaphor
fig('01-same-hill-two-viewpoints', 'Position and perspective', 'Two people point at the same hill for different reasons', (y0) => {
  let s = '';
  const gy = y0 + 250;
  s += `<path d="M30,${gy} C200,${gy - 30} 330,${y0 + 60} 450,${y0 + 60} C570,${y0 + 60} 700,${gy - 30} 870,${gy} Z" fill="#cfe0bd" stroke="${C.ink}" stroke-width="3"/>`;
  s += `<rect x="30" y="${gy}" width="840" height="10" fill="${C.rock}"/>`;
  s += rect(370, y0 + 100, 160, 44, C.cream, C.ink, 22, 2.5) + T(450, y0 + 129, 'the viewpoint', { size: 17, weight: 700, anchor: 'middle' });
  s += box(30, y0 + 10, 250, { head: 'Farmer', body: 'sees the hill as grazing land', size: 16, align: 'middle', fill: C.panel, h: 86, vc: true }).s;
  s += box(620, y0 + 10, 250, { head: 'Photographer', body: 'sees the hill as a skyline', size: 16, align: 'middle', fill: C.panel, h: 86, vc: true }).s;
  s += arrow(280, y0 + 60, 364, y0 + 116, { w: 3 }) + arrow(620, y0 + 60, 536, y0 + 116, { w: 3 });
  s += T(450, y0 + 196, 'same POSITION: “That is the best viewpoint.”', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  const t1 = table(30, gy + 30, [210, 315, 315], [
    ['', 'Position', 'Perspective'],
    ['Question', 'What do you argue?', 'From where do you argue?'],
    ['Example', '“Phones should be banned in class.”', '“As a teacher who has watched attention drift for twenty years...”'],
    ['Shaped by', 'the claim', 'background, interests, expertise'],
  ], { size: 15, boldFirst: true });
  s += t1.s;
  return { s, h: gy + 30 + t1.h - y0 };
}, 'A farmer and a photographer both point to the same hill as the best viewpoint: the same position from different perspectives, grazing land and skyline. A table contrasts position (what do you argue?) with perspective (from where do you argue?).',
'Position is what a source argues; perspective is where it argues from.', '## Two questions to ask of every source');

// 02 Clues to perspective
fig('02-clues-to-perspective', 'Clues to perspective', 'Often signalled, not always stated', (y0) => {
  let s = '';
  const cx = 450, cy = y0 + 200;
  s += circ(cx, cy, 70, C.cream, C.ink, 3) + T(cx, cy - 4, 'the', { size: 17, weight: 700, anchor: 'middle' }) + T(cx, cy + 18, 'perspective', { size: 17, weight: 700, anchor: 'middle' });
  const C6 = [
    ['Role or background', '“As a parent...”, “In my thirty years as a nurse...”', 30, y0],
    ['Interests', 'what the writer stands to gain or lose', 620, y0],
    ['Expertise', 'data, personal experience, professional training', 30, y0 + 145],
    ['Choice of evidence', 'a teacher cites lesson time; a parent, safety', 620, y0 + 145],
    ['Vocabulary and tone', 'the words a writer reaches for', 30, y0 + 290],
    ['What is left out', 'concerns that matter to others', 620, y0 + 290],
  ];
  C6.forEach(([h, b, x, y]) => {
    s += box(x, y, 250, { head: h, body: b, size: 15, headSize: 17, pad: 12, h: 110, vc: true }).s;
    s += line(x < 450 ? x + 252 : x - 2, y + 55, cx + (x < 450 ? -70 : 70) * 0.9, cy + (y + 55 - cy) * 0.35, C.panelEdge, 2.5);
  });
  s += box(30, y0 + 420, 840, { body: 'A perspective is not an error: everyone writes from somewhere. Noticing it explains the evidence a source chooses, and how far that evidence travels.', size: 16, align: 'middle', fill: C.tealLight, edge: C.tealDark }).s;
  return { s, h: 480 };
}, 'Six clues surround the perspective: role or background, interests, expertise, choice of evidence, vocabulary and tone, and what is left out. A note explains that a perspective is not an error but explains a source’s evidence.',
'Role, interests, expertise, evidence, vocabulary and omissions reveal perspective.', '## Clues to perspective');

// 03 Position x perspective grid of D, E, F
fig('03-sources-d-e-f', 'Same position, different perspectives', 'Should schools ban phones during lessons? (fictional sources)', (y0) => {
  let s = '';
  const colX = [250, 500], colW = 230;
  s += T(365, y0 + 14, 'FOR A BAN', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += T(740, y0 + 14, 'AGAINST A BLANKET BAN', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
  s += rect(250, y0 + 26, 230, 420, C.tealLight, C.tealDark, 14, 2) ;
  s += rect(625, y0 + 26, 230, 420, '#f6e3d8', C.rust, 14, 2);
  const rows = [['Teacher', 'D', 'classroom management', 'lost attention and lesson time', 0], ['Parent', 'E', 'wellbeing and social pressure', 'group chats, arguments', 0], ['Student', 'F', 'practical needs, accessibility', 'translation, medical monitoring', 1]];
  rows.forEach(([p, l, focus, ev, col], i) => {
    const y = y0 + 40 + i * 136;
    s += box(30, y, 200, { head: p, body: focus, size: 15, headSize: 18, pad: 12, h: 120, vc: true }).s;
    const x = col ? 640 : 265;
    s += box(x, y, 200, { head: `Source ${l}`, body: `__${ev}__`, size: 15, headSize: 18, pad: 12, h: 120, vc: true, align: 'middle', fill: C.panel, edge: C.ink }).s;
    s += line(232, y + 60, x - 2, y + 60, C.panelEdge, 2, '5 4');
  });
  s += box(30, y0 + 466, 840, { body: '“Teachers and parents support the ban for different reasons... That two groups with different concerns reach the same conclusion strengthens the case, although neither speaks for students whose phones are tools.”', size: 16, fill: C.cream, edge: C.olive }).s;
  return { s, h: 466 + 110 };
}, 'A grid with perspectives as rows (teacher, parent, student) and positions as columns (for a ban, against a blanket ban). Source D, the teacher, and Source E, the parent, share the “for” column with different evidence; Source F, the student, stands against a blanket ban. A synthesis sentence uses the difference.',
'Two sources that agree from different perspectives can strengthen a case.', '## Same position, different perspectives');

// 04 Anthony: position + perspective
fig('04-anthony-position-perspective', 'Position and perspective in one speech', 'Susan B. Anthony, 1873', (y0) => {
  let s = '';
  s += box(30, y0, 840, { body: '“It was we, the people; not we, the white male citizens; nor yet we, the male citizens; but we, the whole people, who formed the Union.”', size: 18, align: 'middle', fill: C.panel, pad: 18 }).s;
  const r = row(30, y0 + 110, 840, 30, [
    { head: 'Position', body: 'the Constitution’s “people” includes women', size: 17, align: 'middle', fill: C.cream, edge: C.olive, headColor: C.olive, h: 110, vc: true },
    { head: 'Perspective', body: 'a woman indicted for voting: personal exclusion and the principle of citizenship', size: 17, align: 'middle', fill: C.tealLight, edge: C.tealDark, headColor: C.tealDark, h: 110, vc: true },
  ]);
  s += r.s;
  let y = y0 + 250;
  s += P(450, y, 'The “not we...” clauses show the perspective at work: she names the categories used to exclude her and rejects them one by one.', { size: 16, anchor: 'middle', w: 820 }).s;
  y += 40;
  s += box(200, y, 500, { head: 'Same position, other perspective', body: 'a male lawyer arguing from constitutional law: different evidence and tone would follow', size: 16, align: 'middle', edge: C.ink, dash: '7 5', h: 100, vc: true }).s;
  return { s, h: y + 100 - y0 };
}, 'Anthony’s sentence above two boxes: her position, that the Constitution’s “people” includes women, and her perspective, a woman indicted for voting arguing from exclusion and citizenship. A dashed box imagines a male lawyer with the same position arguing from constitutional law, with different evidence and tone.',
'The same position from a different perspective brings different evidence and tone.', '## Perspective in a published text');

// 05 Perspective shapes evidence: spotlight
fig('05-perspective-shapes-evidence', 'What a perspective lights up, and leaves out', 'Worked example 2: Source D, the teacher', (y0) => {
  let s = '';
  s += `<path d="M120,${y0 + 30} L560,${y0 + 30} L560,${y0 + 290} L120,${y0 + 290} Z" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2"/>`;
  s += `<path d="M60,${y0 + 160} L340,${y0 + 40} L340,${y0 + 280} Z" fill="${C.cream}" opacity="0.9"/>`;
  s += circ(60, y0 + 160, 24, C.mustard, C.ink, 3) + T(60, y0 + 210, 'teacher', { size: 15, weight: 700, anchor: 'middle' });
  s += box(180, y0 + 70, 220, { body: '“a phone on the desk costs ten minutes of attention”', size: 15, align: 'middle', h: 80, vc: true, fill: C.panel, edge: C.olive }).s;
  s += box(180, y0 + 170, 220, { body: '“students concentrate better when the temptation is out of sight”', size: 15, align: 'middle', h: 80, vc: true, fill: C.panel, edge: C.olive }).s;
  s += box(420, y0 + 70, 130, { body: 'translation', size: 15, align: 'middle', h: 50, vc: true, edge: C.panelEdge, dash: '5 4' }).s.replace(/fill="#ffffff"/, `fill="${C.bg}"`);
  s += box(420, y0 + 140, 130, { body: 'medical monitoring', size: 15, align: 'middle', h: 60, vc: true, edge: C.panelEdge, dash: '5 4' }).s;
  s += box(420, y0 + 220, 130, { body: 'home life', size: 15, align: 'middle', h: 50, vc: true, edge: C.panelEdge, dash: '5 4' }).s;
  s += box(600, y0 + 30, 270, { head: 'In the light', body: 'classroom evidence: lesson time and concentration, what a teacher is best placed to see', size: 15, headSize: 17, fill: C.cream, edge: C.olive, h: 120, vc: true }).s;
  s += box(600, y0 + 170, 270, { head: 'In the dark', body: 'practical and social uses raised by Sources F and E', size: 15, headSize: 17, h: 120, vc: true, dash: '6 5' }).s;
  s += box(30, y0 + 312, 840, { body: 'Persuasive about attention and lesson time, silent about the practical and social uses of phones that other perspectives raise.', size: 16, align: 'middle', fill: C.tealLight, edge: C.tealDark }).s;
  return { s, h: 312 + 56 };
}, 'A spotlight from the teacher’s perspective lights up two pieces of classroom evidence, lost attention and concentration, while translation, medical monitoring and home life sit outside the beam. Notes explain what Source D is persuasive about and what it leaves out.',
'A perspective explains which evidence a source offers and which it omits.', '## Worked example 2: how perspective shapes evidence');
