import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'a-level-cambridge-sociology-globalisation-media-religion';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- Local layout helpers (sociology figures: wrapped text, tables, flows, cards) ----
const esc = (s) => String(s).replace(/&(?![a-z]+;|#\d+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const CW = 0.515, CWB = 0.56; // average glyph width / font size for Inter (regular, bold)
function wrap(s, maxPx, size = 17, bold = false) {
  const maxCh = Math.floor(maxPx / (size * (bold ? CWB : CW)));
  const lines = [''];
  for (const w of String(s).split(/\s+/)) {
    const cur = lines[lines.length - 1];
    if (cur && (cur + ' ' + w).replace(/\*\*/g, '').length > maxCh) lines.push(w);
    else lines[lines.length - 1] = cur ? cur + ' ' + w : w;
  }
  return lines;
}
// **bold** spans inside a wrapped paragraph
function rich(lines) {
  let open = false;
  return lines.map((l) => {
    let out = open ? '<tspan font-weight="700">' : '';
    l.split('**').forEach((p, i) => { if (i > 0) { open = !open; out += open ? '<tspan font-weight="700">' : '</tspan>'; } out += esc(p); });
    return out + (open ? '</tspan>' : '');
  });
}
// paragraph: y is first baseline; returns {svg, h} where h = lines * lh
function para(x, y, w, s, o = {}) {
  const size = o.size || 17, lh = o.lh || Math.round(size * 1.32);
  const lines = rich(wrap(s, w, size, (o.weight || 400) >= 600));
  return { svg: tl(x, y, lines, { size, weight: o.weight || 400, fill: o.fill || C.ink, anchor: o.anchor || 'start', italic: o.italic }, lh), h: lines.length * lh, n: lines.length };
}
function bullets(x, y, w, items, o = {}) {
  const size = o.size || 17, lh = o.lh || Math.round(size * 1.32), gap = o.gap ?? 8;
  let s = '', h = 0;
  for (const it of items) {
    s += `<circle cx="${x + 5}" cy="${y + h - size * 0.33}" r="4.5" fill="${o.dot || C.tealDark}"/>`;
    const p = para(x + 18, y + h, w - 18, it, { size, lh, fill: o.fill || C.ink });
    s += p.svg; h += p.h + gap;
  }
  return { svg: s, h: h - gap };
}
const roundTop = (x, y, w, h, r = 14) => `M${x},${y + h} L${x},${y + r} Q${x},${y} ${x + r},${y} L${x + w - r},${y} Q${x + w},${y} ${x + w},${y + r} L${x + w},${y + h} Z`;
// panel with a coloured header band
function headPanel(x, y, w, h, head, o = {}) {
  const size = o.size || 20, hp = para(x + w / 2, 0, w - 28, head, { size, weight: 700, anchor: 'middle' });
  const hh = o.hh || Math.max(50, hp.h + 22);
  const hp2 = para(x + w / 2, y + (hh - hp.h) / 2 + size * 0.95, w - 28, head, { size, weight: 700, anchor: 'middle', fill: o.headInk || C.ink });
  return { svg: panel(x, y, w, h, o.body || C.panel, o.edge || C.panelEdge) + `<path d="${roundTop(x + 1.25, y + 1.25, w - 2.5, hh - 1.25, 13)}" fill="${o.fill || C.teal}"/>` + `<line x1="${x + 1.25}" y1="${y + hh}" x2="${x + w - 1.25}" y2="${y + hh}" stroke="${o.edge || C.panelEdge}" stroke-width="2"/>` + hp2.svg, hh };
}
const headH = (w, head, size = 20) => Math.max(50, para(0, 0, w - 28, head, { size, weight: 700 }).h + 22);
// content block measured: kind 'text' | 'bullets'
function block(x, y, w, c, o = {}) { return Array.isArray(c) ? bullets(x, y, w, c, o) : para(x, y, w, c, o); }
// note strip (cream) full width
function note(y, head, text, o = {}) {
  const x = o.x ?? 30, w = o.w ?? 840, size = o.size || 17;
  const hp = head ? para(x + 26, y + 36, w - 52, head, { size: 19, weight: 700, fill: o.headFill || C.ink }) : { svg: '', h: 0 };
  const bp = text ? block(x + 26, y + 36 + hp.h + (head ? 4 : 0), w - 52, text, { size, fill: o.fill || C.ink, dot: C.olive }) : { svg: '', h: 0 };
  const lh = Math.round(size * 1.32), h = 36 + hp.h + (head && text ? 4 : 0) + (text ? bp.h - lh : -25) + 24;
  return { svg: panel(x, y, w, h, o.bg || C.cream, o.edgeC || C.olive) + hp.svg + bp.svg, h };
}
// Comparison grid: cols [{head, fill}], rows [{label, cells:[text|[bullets]]}]
function compareFig(title, { sub, cols, rows, labelW = 150, size = 16, foot, headSize = 19, y0 }) {
  let y = y0 ?? (sub ? 120 : 104); const gap = 8, n = cols.length;
  const x0 = 30 + (labelW ? labelW + gap : 0), cw = (870 - x0 - gap * (n - 1)) / n;
  const hh = Math.max(...cols.map((c) => headH(cw, c.head, headSize) - 6));
  let s = '';
  cols.forEach((c, i) => {
    const x = x0 + i * (cw + gap), hp = para(x + cw / 2, 0, cw - 20, c.head, { size: headSize, weight: 700, anchor: 'middle' });
    s += `<rect x="${x}" y="${y}" width="${cw}" height="${hh}" rx="12" fill="${c.fill || C.teal}" stroke="${C.ink}" stroke-width="2"/>` + para(x + cw / 2, y + (hh - hp.h) / 2 + headSize * 0.93, cw - 20, c.head, { size: headSize, weight: 700, anchor: 'middle', fill: c.ink || C.ink }).svg;
  });
  y += hh + gap;
  for (const r of rows) {
    const ms = r.cells.map((c) => block(0, 0, cw - 28, c, { size }).h);
    const lp = labelW ? para(0, 0, labelW - 24, r.label, { size: 17, weight: 700 }) : { h: 0 };
    const rh = Math.max(...ms, lp.h) + 30;
    if (labelW) s += `<rect x="30" y="${y}" width="${labelW}" height="${rh}" rx="10" fill="${r.fill || C.cream}" stroke="${C.olive}" stroke-width="2"/>` + para(42, y + (rh - lp.h) / 2 + 17 * 0.95, labelW - 24, r.label, { size: 17, weight: 700 }).svg;
    r.cells.forEach((c, i) => {
      const x = x0 + i * (cw + gap);
      s += `<rect x="${x}" y="${y}" width="${cw}" height="${rh}" rx="10" fill="${r.cellFill?.[i] || C.panel}" stroke="${C.panelEdge}" stroke-width="2"/>` + block(x + 14, y + 15 + size * 0.95, cw - 28, c, { size }).svg;
    });
    y += rh + gap;
  }
  if (foot) { const f = note(y + 8, foot.head, foot.text); s += f.svg; y += f.h + 8; }
  return svg(900, Math.round(y + 24), esc(title), s, sub && esc(sub));
}
// Card grid: cards [{head, sub, body, fill}] in ncol columns, equal heights per row
function cardsFig(title, { sub, cards, ncol = 2, size = 16, foot, y0, headSize = 20, badges = false }) {
  let y = y0 ?? (sub ? 120 : 104); const gap = 16, cw = (840 - gap * (ncol - 1)) / ncol;
  let s = '';
  for (let r = 0; r < cards.length; r += ncol) {
    const row = cards.slice(r, r + ncol);
    const hhs = row.map((c) => headH(cw - (badges ? 50 : 0), c.head, headSize));
    const hh = Math.max(...hhs);
    const bodies = row.map((c) => (c.sub ? para(0, 0, cw - 32, c.sub, { size: size, italic: true }).h + 8 : 0) + block(0, 0, cw - 32, c.body, { size }).h);
    const ch = hh + Math.max(...bodies) + 36;
    row.forEach((c, i) => {
      const x = 30 + i * (cw + gap);
      const hp = headPanel(x, y, cw, ch, c.head, { fill: c.fill || C.teal, hh, size: headSize });
      s += hp.svg;
      if (badges) s += badge(x + 34, y + hh / 2, 18, String(r + i + 1), C.cream);
      let yy = y + hh + 18 + size * 0.95;
      if (c.sub) { const sp = para(x + 16, yy, cw - 32, c.sub, { size, fill: C.tealDark, weight: 600 }); s += sp.svg; yy += sp.h + 8; }
      s += block(x + 16, yy, cw - 32, c.body, { size, dot: c.dot }).svg;
    });
    y += ch + gap;
  }
  if (foot) { const f = note(y - gap + 16, foot.head, foot.text); s += f.svg; y += f.h; }
  return svg(900, Math.round(y + 14), esc(title), s, sub && esc(sub));
}
// Vertical flow: steps [{head, body, fill}] joined by arrows; optional side labels
function flowFig(title, { sub, steps, size = 17, foot, y0, numbered = true, arrowLabels = [] }) {
  let y = y0 ?? (sub ? 120 : 104); const ag = 46; let s = '';
  steps.forEach((st, i) => {
    const tx = numbered ? 104 : 56, tw = 870 - tx - 26;
    const hp = para(tx, 0, tw, st.head, { size: 20, weight: 700 });
    const bp = st.body ? block(tx, 0, tw, st.body, { size }) : { h: 0 };
    const h = 26 + hp.h + (st.body ? 6 + bp.h : 0) + 16;
    s += panel(30, y, 840, h, st.fill || C.panel, st.edge || C.panelEdge);
    if (numbered) s += badge(67, y + h / 2, 21, String(st.n ?? i + 1), st.badge || (i === steps.length - 1 ? C.mustard : C.cream));
    s += para(tx, y + 24 + 20 * 0.78, tw, st.head, { size: 20, weight: 700, fill: st.ink || C.ink }).svg;
    if (st.body) s += block(tx, y + 24 + hp.h + 6 + size * 0.78, tw, st.body, { size, fill: C.ink }).svg;
    y += h;
    if (i < steps.length - 1) {
      s += arrow(450, y + 4, 450, y + ag - 6, { w: 3.5 });
      if (arrowLabels[i]) s += t(470, y + ag / 2 + 6, esc(arrowLabels[i]), { size: 16, fill: C.tealDark, weight: 600, italic: true });
      y += ag;
    }
  });
  if (foot) { const f = note(y + 18, foot.head, foot.text); s += f.svg; y += f.h + 18; }
  return svg(900, Math.round(y + 26), esc(title), s, sub && esc(sub));
}
// Two-sided debate: left/right {head, sub, items, fill}, optional verdict note
function versusFig(title, { sub, left, right, foot, size = 17, y0 }) {
  let y = y0 ?? (sub ? 120 : 104); const w = 404, xs = [30, 466]; let s = '';
  const sides = [left, right];
  const hh = Math.max(...sides.map((d) => headH(w, d.head, 21)));
  const hs = sides.map((d) => (d.sub ? para(0, 0, w - 36, d.sub, { size: 16 }).h + 10 : 0) + block(0, 0, w - 36, d.items, { size }).h);
  const ph = hh + Math.max(...hs) + 40;
  sides.forEach((d, i) => {
    const x = xs[i];
    s += headPanel(x, y, w, ph, d.head, { fill: d.fill || (i ? C.cream : C.teal), hh, size: 21 }).svg;
    let yy = y + hh + 22 + 16 * 0.9;
    if (d.sub) { const sp = para(x + 18, yy, w - 36, d.sub, { size: 16, fill: C.muted, italic: true }); s += sp.svg; yy += sp.h + 10; }
    s += block(x + 18, yy, w - 36, d.items, { size, dot: i ? C.olive : C.tealDark }).svg;
  });
  s += `<circle cx="450" cy="${y + ph / 2}" r="24" fill="${C.ink}"/>` + t(450, y + ph / 2 + 7, 'vs', { size: 19, weight: 700, fill: '#ffffff', anchor: 'middle' });
  y += ph;
  if (foot) { const f = note(y + 18, foot.head, foot.text); s += f.svg; y += f.h + 18; }
  return svg(900, Math.round(y + 26), esc(title), s, sub && esc(sub));
}
// Horizontal chain of 2-5 boxes with arrows between; returns {svg,h}
function hchain(y, items, o = {}) {
  const n = items.length, ag = o.ag || 40, w = (840 - ag * (n - 1)) / n, size = o.size || 16;
  const hs = items.map((it) => (it.head ? para(0, 0, w - 24, it.head, { size: 18, weight: 700 }).h + 6 : 0) + (it.body ? para(0, 0, w - 24, it.body, { size }).h : 0));
  const h = Math.max(...hs) + 34; let s = '';
  items.forEach((it, i) => {
    const x = 30 + i * (w + ag);
    s += `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${it.fill || C.panel}" stroke="${it.edge || C.ink}" stroke-width="2.5"/>`;
    let yy = y + 20 + 18 * 0.85;
    if (it.head) { const hp = para(x + w / 2, yy, w - 24, it.head, { size: 18, weight: 700, anchor: 'middle' }); s += hp.svg; yy += hp.h + 6; }
    if (it.body) s += para(x + w / 2, yy, w - 24, it.body, { size, anchor: 'middle', fill: it.head ? C.muted : C.ink }).svg;
    if (i < n - 1 && o.arrows !== false) s += arrow(x + w + 4, y + h / 2, x + w + ag - 4, y + h / 2, { w: 3.5 });
  });
  return { svg: s, h };
}
const label = (x, y, s, o = {}) => t(x, y, esc(s), o);
// One row of header cards across a given x-range; returns {svg, h}
function cardRow(y, cards, o = {}) {
  const x0 = o.x ?? 30, W = o.w ?? 840, gap = o.gap ?? 16, n = cards.length, cw = (W - gap * (n - 1)) / n, size = o.size || 16, hs = o.headSize || 19;
  const hh = Math.max(...cards.map((c) => headH(cw, c.head, hs)));
  const bodies = cards.map((c) => (c.sub ? para(0, 0, cw - 28, c.sub, { size, weight: 600 }).h + 6 : 0) + block(0, 0, cw - 28, c.body, { size }).h);
  const ch = hh + Math.max(...bodies) + 34; let s = '';
  cards.forEach((c, i) => {
    const x = x0 + i * (cw + gap);
    s += headPanel(x, y, cw, ch, c.head, { fill: c.fill || C.teal, hh, size: hs }).svg;
    let yy = y + hh + 16 + size * 0.95;
    if (c.sub) { const sp = para(x + 14, yy, cw - 28, c.sub, { size, fill: C.tealDark, weight: 600 }); s += sp.svg; yy += sp.h + 6; }
    s += block(x + 14, yy, cw - 28, c.body, { size, dot: c.dot }).svg;
  });
  return { svg: s, h: ch };
}
// ---- end helpers ----

// 01 Where Paper 4 fits + paper facts
{
  const box = (x, y, w, s1, s2, fill, bold = false) => `<rect x="${x}" y="${y}" width="${w}" height="76" rx="12" fill="${fill}" stroke="${C.ink}" stroke-width="${bold ? 3.5 : 2.5}"/>` +
    label(x + w / 2, y + (s2 ? 33 : 45), s1, { size: 20, weight: 700, anchor: 'middle' }) + (s2 ? label(x + w / 2, y + 58, s2, { size: 15, anchor: 'middle', fill: C.muted }) : '');
  const bw = 158, gx = 12, X = 200;
  const rowAS = label(40, 168, 'AS Level', { size: 21, weight: 700 }) +
    box(X, 130, bw, 'Paper 1', '', C.tealLight) + box(X + bw + gx, 130, bw, 'Paper 2', '', C.tealLight);
  const rowA = label(40, 278, 'Full A Level', { size: 21, weight: 700 }) +
    box(X, 240, bw, 'Paper 1', '', C.tealLight) + box(X + bw + gx, 240, bw, 'Paper 2', '', C.tealLight) +
    box(X + 2 * (bw + gx), 240, bw, 'Paper 3', '', C.panel) + box(X + 3 * (bw + gx), 240, bw, 'Paper 4', 'A Level only', C.mustard, true);
  const facts = [['1 h 45 min', 'duration'], ['70 marks', 'two 35-mark essays'], ['29%', 'of the full A Level']];
  let fs = '';
  facts.forEach(([a, b], i) => { const x = 30 + i * 286; fs += `<rect x="${x}" y="380" width="268" height="96" rx="12" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2.5"/>` + label(x + 134, 422, a, { size: 26, weight: 700, anchor: 'middle', fill: C.tealDark }) + label(x + 134, 452, b, { size: 16, anchor: 'middle', fill: C.muted }); });
  const n = note(496, 'Answer 2 essays, each from a different section', 'Each section carries two essay questions. Every essay needs AO1, AO2 and AO3 and should explore contrasting views or evidence.');
  add('01-where-paper-4-fits',
    svg(900, Math.round(496 + n.h + 24), 'Where Paper 4 fits in 9699',
      rowAS + rowA + arrow(X + 3 * (bw + gx) + bw / 2, 330, X + 3 * (bw + gx) + bw / 2, 370, { w: 3 }) + fs + n.svg),
    'AS Level is Papers 1 and 2; the full A Level adds Papers 3 and 4. Paper 4 lasts 1 hour 45 minutes, is worth 70 marks (two 35-mark essays) and 29% of the A Level, and candidates answer two essays from different sections.',
    'Paper 4 is the A Level-only finale: two 35-mark essays from two different sections.',
    '## Where this fits in 9699');
}

// 02 Sections A/B/C and syllabus headings 7-12
{
  const secs = [
    ['Section A', 'Globalisation', C.teal, [['7', 'Key debates, concepts and perspectives'], ['8', 'Contemporary issues']]],
    ['Section B', 'Media', C.cream, [['9', 'Ownership and control of media'], ['10', 'Media representation and effects']]],
    ['Section C', 'Religion', C.tealLight, [['11', 'Religion and social order'], ['12', 'The influence of religion']]],
  ];
  let s = '';
  secs.forEach(([a, b, f, hs], i) => {
    const x = 30 + i * 286, w = 268;
    s += `<rect x="${x}" y="110" width="${w}" height="88" rx="14" fill="${f}" stroke="${C.ink}" stroke-width="3"/>` +
      label(x + w / 2, 146, a, { size: 18, weight: 600, anchor: 'middle', fill: C.muted }) + label(x + w / 2, 178, b, { size: 23, weight: 700, anchor: 'middle' });
    hs.forEach(([n, h], j) => {
      const y = 238 + j * 128;
      s += `<line x1="${x + w / 2}" y1="${j ? y - 24 : 200}" x2="${x + w / 2}" y2="${y}" stroke="${C.ink}" stroke-width="2.5"/>`;
      s += `<rect x="${x}" y="${y}" width="${w}" height="104" rx="12" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2.5"/>` + badge(x + 34, y + 52, 20, n, C.cream);
      const nl = para(0, 0, w - 80, h, { size: 17, weight: 600 }).n; s += para(x + 66, y + [58, 47, 36][nl - 1], w - 80, h, { size: 17, weight: 600 }).svg;
    });
  });
  const n = note(500, null, '**Lettered sections** (A, B, C) are how the paper is structured; **numbered headings** (7–12) are how the syllabus numbers its content. Do not conflate the two systems.');
  add('02-sections-and-headings',
    svg(900, Math.round(500 + n.h + 24), 'Paper 4: three sections, six headings', s + n.svg),
    'Section A Globalisation covers syllabus headings 7 and 8, Section B Media covers headings 9 and 10, and Section C Religion covers headings 11 and 12.',
    'Each lettered section draws on two numbered syllabus headings.',
    '## Syllabus coverage');
}

// 03 Competing explanations to weigh in each section
{
  const rows = [
    ['Globalisation', 'Global cultural influences', 'Persistence or revival of local and national identities', C.teal],
    ['Media', 'Media shape audience attitudes and behaviour directly', 'Audiences actively select and interpret media content', C.cream],
    ['Religion', 'Religion maintains social cohesion', 'Religion is a source of social change and conflict', C.tealLight],
    ['Secularisation', 'Religion’s social influence has declined', 'Evidence and counter-evidence: a debated question', C.tealLight],
  ];
  let y = 150, s = label(317, 132, 'One view', { size: 17, weight: 700, anchor: 'middle', fill: C.muted }) + label(675, 132, 'Competing view', { size: 17, weight: 700, anchor: 'middle', fill: C.muted });
  for (const [h, a, b, f] of rows) {
    const pa = para(0, 0, 245, a, { size: 17 }), pb = para(0, 0, 270, b, { size: 17 });
    const rh = Math.max(pa.h, pb.h) + 34;
    s += `<rect x="30" y="${y}" width="145" height="${rh}" rx="10" fill="${f}" stroke="${C.ink}" stroke-width="2"/>` + para(102, y + rh / 2 + 6, 140, h, { size: 16, weight: 700, anchor: 'middle' }).svg;
    s += `<rect x="185" y="${y}" width="265" height="${rh}" rx="10" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2"/>` + para(317, y + (rh - pa.h) / 2 + 16, 245, a, { size: 17, anchor: 'middle' }).svg;
    s += `<rect x="550" y="${y}" width="320" height="${rh}" rx="10" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2"/>` + para(710, y + (rh - pb.h) / 2 + 16, 290, b, { size: 17, anchor: 'middle' }).svg;
    s += `<path d="M462,${y + rh / 2} L538,${y + rh / 2}" stroke="${C.olive}" stroke-width="3.5" marker-end="url(#ahO)" marker-start="url(#ahO)"/>` + label(500, y + rh / 2 - 10, 'weigh', { size: 15, anchor: 'middle', weight: 700, fill: C.olive });
    y += rh + 12;
  }
  const n = note(y + 6, 'In every section', 'Weigh competing explanations against each other instead of describing one view as uncontested, and apply them to a specific, named, contemporary example.');
  add('03-competing-explanations',
    svg(900, Math.round(y + 6 + n.h + 24), 'Debates to weigh in each section', s + n.svg),
    'For globalisation, global influence is weighed against the revival of local identities; for media, direct effects against active audiences; for religion, cohesion against change and conflict; and secularisation is weighed as a debated question.',
    'High marks come from weighing two competing explanations, not describing one.',
    '## How to approach it');
}

// 04 Worked example: theory to method chain
{
  const ch = hchain(150, [
    { head: 'Perspective', body: 'Select a named view of media influence', fill: C.tealLight },
    { head: 'Apply', body: 'Curated self-presentation may reshape a stable, singular identity', fill: C.tealLight },
    { head: 'Method', body: 'Suggest how a sociologist could research it', fill: C.teal },
    { head: 'Limitation', body: 'Social media use is private and platform-dependent', fill: C.cream },
  ], { ag: 34, size: 16 });
  const w = note(150 + ch.h + 30, 'Weak answer', 'Describes social media’s features and asserts it “has a big influence”, with no perspective and no method.', { bg: C.panel, edgeC: C.rust, headFill: C.rust });
  add('04-theory-to-method',
    svg(900, Math.round(150 + ch.h + 30 + w.h + 24), 'Linking a claim to a research method',
      label(450, 124, 'Question: the influence of social media on young people’s identities', { size: 18, anchor: 'middle', fill: C.muted, italic: true }) + ch.svg + w.svg),
    'A strong answer selects a named perspective on media influence, applies it to young people’s identities, suggests a research method and notes a limitation of that method. A weak answer only describes social media and asserts it has a big influence.',
    'Strong Paper 4 answers link a theoretical claim to how it could be researched.',
    '## Worked example: applying methods to a media question');
}

// 05 Common mistakes and fixes
add('05-common-mistakes',
  compareFig('Common mistakes and how to fix them', {
    labelW: 0,
    cols: [{ head: 'Mistake', fill: C.cream }, { head: 'Do this instead', fill: C.teal }],
    rows: [
      { cells: ['Globalisation treated as purely economic', 'Discuss its cultural and identity consequences'] },
      { cells: ['One theory of media influence presented as simply true', 'Weigh it as one of several competing explanations'] },
      { cells: ['Secularisation treated as a settled fact', 'Debate it with evidence on more than one side'] },
      { cells: ['No reference to research methods', 'Show how a claim could actually be studied'] },
      { cells: ['Only textbook cases from decades past', 'Add a specific, plausible contemporary example'] },
    ],
    size: 17,
  }),
  'Five common Paper 4 mistakes paired with fixes: treating globalisation as only economic, presenting one media theory as true, treating secularisation as settled, ignoring research methods and using only old examples.',
  'Each common mistake has a simple fix: widen, weigh, debate, link to methods, update.',
  '## Common mistakes to avoid');
