import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-sociology-research-methods';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });


// ---- Local layout helpers (sociology figures: wrapped text, tables, flows, cards) ----
const esc = (s) => String(s).replace(/&(?![a-z]+;|#\d+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const CW = 0.495, CWB = 0.55; // average glyph width / font size for Inter (regular, bold)
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
    const bodies = row.map((c) => (c.sub ? para(0, 0, cw - 32, c.sub, { size, weight: 600 }).h + 8 : 0) + block(0, 0, cw - 32, c.body, { size }).h);
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
    let yy = y + (h - hs[i]) / 2 + 18 * 0.85;
    if (it.head) { const hp = para(x + w / 2, yy, w - 24, it.head, { size: 18, weight: 700, anchor: 'middle' }); s += hp.svg; yy += hp.h + 6; }
    if (it.body) s += para(x + w / 2, yy, w - 24, it.body, { size, anchor: 'middle', fill: it.head && (!it.fill || it.fill === C.panel) ? C.muted : C.ink }).svg;
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

const box = (x, y, w, h, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.r ?? 12}" fill="${o.fill || C.panel}" stroke="${o.edge || C.ink}" stroke-width="${o.sw || 2.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
const vcenter = (x, yTop, h, w, s, o = {}) => { const size = o.size || 17; const p = para(0, 0, w, s, o); return para(x, yTop + (h - p.h) / 2 + size * 0.95, w, s, o).svg; };
const dot = (cx, cy, on, o = {}) => `<circle cx="${cx}" cy="${cy}" r="${o.r || 10}" fill="${on ? C.mustard : o.fill || C.tealLight}" stroke="${C.ink}" stroke-width="${on ? 3 : 1.8}"/>`;

// 01 Quantitative vs qualitative, joined by mixed methods
{
  let s = '';
  const col = (x, head, f, what, gives, how) => {
    let o = headPanel(x, 108, 380, 360, head, { fill: f, size: 22 }).svg;
    o += para(x + 20, 196, 340, what, { size: 18, weight: 700 }).svg;
    o += para(x + 20, 236, 340, gives, { size: 17 }).svg;
    o += label(x + 20, 310, 'Typically gathered by', { size: 15, weight: 700, fill: C.muted });
    o += bullets(x + 20, 338, 340, how, { size: 17 }).svg;
    return o;
  };
  s += col(30, 'Quantitative data', C.teal, 'Numerical', 'Statistical analysis and easy comparison across a large sample', ['Structured questionnaires', 'Official statistics', 'Structured observation with tally counts']);
  s += col(490, 'Qualitative data', C.cream, 'Descriptive', 'Depth, meaning and context that numbers alone cannot capture', ['Unstructured interviews', 'Open-ended questionnaire answers', 'Participant observation']);
  s += path('M220,472 L220,500 L450,500 L450,520', { w: 3.5 }) + path('M680,472 L680,500 L450,500', { w: 3.5 }) + arrow(450, 500, 450, 528, { w: 3.5 });
  s += box(170, 534, 560, 84, { fill: C.mustard }) + label(450, 566, 'Mixed methods', { size: 21, weight: 700, anchor: 'middle' }) + label(450, 596, 'generalisability of numbers + depth and validity of words', { size: 17, anchor: 'middle' });
  s += label(450, 650, 'Neither is automatically “more scientific”: it depends on the research aim.', { size: 17, anchor: 'middle', fill: C.muted, italic: true });
  add('01-quantitative-qualitative',
    svg(900, 676, 'Two kinds of data', s),
    'Two columns. Quantitative data are numerical, allow statistical comparison across large samples and come from structured questionnaires, official statistics and tally counts. Qualitative data are descriptive, capture depth and meaning and come from unstructured interviews, open answers and participant observation. Both feed into mixed methods.',
    'Numbers give comparison; words give depth; mixed methods combine them.',
    '## Qualitative vs quantitative data');
}

// 02 Practical vs ethical: two separate tests
{
  let s = '';
  const r = cardRow(108, [
    { head: 'Practical issues', fill: C.teal, body: ['Time', 'Cost', 'Access to research subjects'] },
    { head: 'Ethical issues', fill: C.cream, body: ['Informed consent', 'Confidentiality', 'Protection from harm'] },
  ], { size: 18, headSize: 21 });
  s += r.svg;
  let y = 108 + r.h + 36;
  s += label(450, y, 'Test case: covert observation', { size: 21, weight: 700, anchor: 'middle' });
  y += 20;
  s += box(30, y, 404, 150, { fill: C.tealLight }) + label(52, y + 36, 'Practical test: passes', { size: 19, weight: 700, fill: C.tealDark }) + para(52, y + 66, 360, 'Solves the observer effect: people do not change their behaviour because they know they are watched', { size: 17 }).svg;
  s += box(466, y, 404, 150, { fill: C.sand }) + label(488, y + 36, 'Ethical test: problem', { size: 19, weight: 700, fill: C.rust }) + para(488, y + 66, 360, 'Raises serious concerns about informed consent', { size: 17 }).svg;
  s += `<circle cx="450" cy="${y + 75}" r="22" fill="${C.ink}"/>` + label(450, y + 82, 'vs', { size: 18, weight: 700, fill: '#ffffff', anchor: 'middle' });
  const n = note(y + 170, 'A full evaluation addresses both', 'Practically convenient is not automatically ethical, and ethically sound is not automatically practical. The researcher must weigh one against the other.');
  add('02-practical-ethical',
    svg(900, Math.round(y + 170 + n.h + 24), 'Two separate tests for any method', s + n.svg),
    'Two cards: practical issues are time, cost and access; ethical issues are informed consent, confidentiality and protection from harm. Covert observation passes the practical test by avoiding the observer effect but fails the ethical test on informed consent.',
    'Evaluate every method on both practical and ethical grounds.',
    '## Practical and ethical issues, together');
}

// 03 Pilot study and three sampling methods
{
  let s = '';
  s += box(30, 108, 840, 84, { fill: C.cream, edge: C.olive }) + label(54, 142, 'First: a pilot study', { size: 20, weight: 700 }) + label(54, 172, 'A small trial run to fix question wording, timing or procedure while it is still cheap and easy', { size: 17 });
  const cw = 268, y = 212, ch = 400;
  const card = (x, head, art, txt) => headPanel(x, y, cw, ch, head, { fill: C.teal, size: 21 }).svg + art + para(x + 16, y + 270, cw - 32, txt, { size: 16 }).svg;
  // random
  let a1 = ''; const pick = new Set([1, 8, 12, 19, 22]);
  for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) a1 += dot(30 + 34 + c * 40, y + 90 + r * 42, pick.has(r * 6 + c));
  s += card(30, 'Random', a1, 'Every member of the target population has an equal chance of selection.');
  // stratified
  let a2 = ''; const x2 = 30 + cw + 18;
  [['under 30', C.tealLight], ['30 to 60', C.cream], ['over 60', C.sand]].forEach(([g, f], r) => {
    a2 += `<rect x="${x2 + 14}" y="${y + 70 + r * 58}" width="${cw - 28}" height="48" rx="8" fill="${f}" stroke="${C.panelEdge}" stroke-width="2"/>`;
    for (let c = 0; c < 4; c++) a2 += dot(x2 + 36 + c * 32, y + 94 + r * 58, c === 0, { fill: '#ffffff' });
    a2 += label(x2 + cw - 24, y + 100 + r * 58, g, { size: 15, weight: 700, anchor: 'end', fill: C.muted });
  });
  s += card(x2, 'Stratified', a2, 'Divide the population into subgroups (such as age or gender) and sample proportionally from each.');
  // snowball
  let a3 = ''; const x3 = 30 + 2 * (cw + 18); const pts = [[50, 80], [120, 110], [200, 80], [180, 170], [90, 190], [230, 150]];
  [[0, 1], [1, 2], [1, 4], [2, 5], [5, 3]].forEach(([p, q]) => { const [ax, ay] = pts[p], [bx, by] = pts[q]; const L = Math.hypot(bx - ax, by - ay), ux = (bx - ax) / L, uy = (by - ay) / L; a3 += arrow(x3 + ax + ux * 13, y + ay + uy * 13, x3 + bx - ux * 15, y + by - uy * 15, { w: 2.5 }); });
  pts.forEach(([px, py], i) => { a3 += dot(x3 + px, y + py, i === 0); });
  s += card(x3, 'Snowball', a3, 'Participants recruit others from their own networks: useful for hard-to-reach groups.');
  const n = note(y + ch + 18, null, 'The sampling method decides how representative the sample is, and so how confidently findings can be generalised.');
  add('03-pilot-and-sampling',
    svg(900, Math.round(y + ch + 18 + n.h + 24), 'Pilot first, then choose a sample', s + n.svg),
    'A pilot study comes first to fix problems cheaply. Then three sampling methods: random, where everyone has an equal chance; stratified, where the population is split into subgroups such as age bands and sampled proportionally; and snowball, where participants recruit others from their networks.',
    'How you sample decides how far you can generalise.',
    '## Sampling and pilot studies');
}

// 04 Choosing a method: four steps
{
  add('04-choosing-a-method',
    flowFig('Choosing a method: four steps', {
      sub: 'Do informal family rules differ from the formally stated ones?',
      steps: [
        { head: 'What kind of data?', body: 'Detailed, contextual understanding of everyday family life points to **qualitative** data.' },
        { head: 'Access', body: 'Family life is largely private: the method must observe or draw out detail about private life.' },
        { head: 'Weigh the trade-offs', body: 'Participant observation could reveal real informal rules, but raises consent and privacy concerns if family members are unaware.' },
        { head: 'Propose and justify', body: 'Recommend **semi-structured interviews with informed consent** over covert observation: some depth traded for a stronger ethical basis.' },
      ],
    }),
    'Four steps for a question about informal family rules: decide the data needed (qualitative), consider access to private family life, weigh participant observation against its consent and privacy problems, then recommend semi-structured interviews with informed consent over covert observation.',
    'Link the method to the question, then justify it against an alternative.',
    '## Worked example: choosing a method for a given research question');
}

// 05 Primary vs secondary
{
  let s = '';
  s += box(30, 108, 404, 230, { fill: C.teal }) + label(232, 150, 'Primary data', { size: 23, weight: 700, anchor: 'middle' }) + para(232, 186, 360, 'Collected **first-hand** by the researcher', { size: 18, anchor: 'middle' }).svg;
  s += `<circle cx="232" cy="270" r="40" fill="#ffffff" stroke="${C.ink}" stroke-width="3"/><circle cx="232" cy="258" r="12" fill="${C.ink}"/><path d="M210,292 Q232,268 254,292" fill="${C.ink}"/>`;
  s += box(466, 108, 404, 230, { fill: C.cream }) + label(668, 150, 'Secondary data', { size: 23, weight: 700, anchor: 'middle' }) + para(668, 186, 360, 'Already exists, **collected by someone else**', { size: 18, anchor: 'middle' }).svg;
  s += `<rect x="628" y="236" width="80" height="70" rx="6" fill="#ffffff" stroke="${C.ink}" stroke-width="3"/>` + [252, 268, 284].map((yy) => `<line x1="642" y1="${yy}" x2="694" y2="${yy}" stroke="${C.ink}" stroke-width="2.5"/>`).join('');
  s += box(466, 360, 404, 120, { fill: C.panel, edge: C.olive }) + label(668, 396, 'Statistics: official or non-official', { size: 18, weight: 700, anchor: 'middle' });
  s += box(486, 414, 172, 48, { fill: C.cream, sw: 2 }) + label(572, 444, 'Official', { size: 17, weight: 700, anchor: 'middle' }) + box(678, 414, 172, 48, { fill: C.sand, sw: 2 }) + label(764, 444, 'Non-official', { size: 17, weight: 700, anchor: 'middle' });
  s += box(30, 360, 404, 120, { fill: C.panel, edge: C.ink, dash: '8 6' }) + label(52, 446, 'first-hand = primary', { size: 17, weight: 700, fill: C.tealDark }) + para(52, 396, 360, 'Common mistake: confusing the two. Ask first: who collected the data?', { size: 17 }).svg;
  add('05-primary-secondary',
    svg(900, 504, 'Primary or secondary?', s),
    'Primary data are collected first-hand by the researcher; secondary data already exist and were collected by someone else, such as official statistics. Statistics can also be official or non-official.',
    'Primary data are your own; secondary data come from someone else.',
    '## Common mistakes');
}
