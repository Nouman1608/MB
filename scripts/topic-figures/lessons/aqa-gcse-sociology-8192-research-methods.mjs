import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-sociology-8192-research-methods';
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
const plusMinus = (x, y, w, plus, minus, size = 16) => {
  const p1 = para(x + 26, y, w - 26, plus, { size }), p2 = para(x + 26, y + p1.h + 8, w - 26, minus, { size });
  return { svg: label(x + 6, y, '+', { size: 20, weight: 700, fill: C.tealDark }) + p1.svg + label(x + 6, y + p1.h + 8, '−', { size: 20, weight: 700, fill: C.rust }) + p2.svg, h: p1.h + 8 + p2.h };
};

// 01 Four stages of research design
{
  const ch = hchain(108, [
    { head: '1. Aims and hypotheses', body: 'Open aim, or a testable hypothesis', fill: C.teal },
    { head: '2. Pilot study', body: 'Small trial run first', fill: C.tealLight },
    { head: '3. Sampling', body: 'Sampling frame, then a method', fill: C.cream },
    { head: '4. Analysis of data', body: 'Count it, or sort it into themes', fill: C.mustard },
  ], { size: 16, ag: 30 });
  let s = ch.svg;
  if (0) [0].forEach((i) => { const w = 0; s += `<circle cx="${30 + i * (w + 30) + 22}" cy="${108 + 22}" r="15" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/>` + label(30 + i * (w + 30) + 22, 108 + 28, String(i + 1), { size: 16, weight: 700, anchor: 'middle' }); });
  const y = 108 + ch.h + 50;
  s += label(450, y, 'Aim or hypothesis?', { size: 21, weight: 700, anchor: 'middle' });
  const r = cardRow(y + 18, [
    { head: 'Aim', fill: C.tealLight, sub: 'A general statement of what you want to find out', body: '“To investigate how couples divide housework.” Qualitative research often starts with an open aim, so as not to decide the answer in advance.' },
    { head: 'Hypothesis', fill: C.cream, sub: 'Narrower and testable', body: '“Dual-career couples share housework more equally than couples with one earner.” Quantitative research usually tests a hypothesis.' },
  ], { size: 17, headSize: 20 });
  s += r.svg;
  const n = note(y + 18 + r.h + 16, 'What a pilot study shows', 'Whether questions are confusing, whether the method takes too long, and whether people will take part.');
  add('01-research-design-stages',
    svg(900, Math.round(y + 18 + r.h + 16 + n.h + 24), 'Four stages of research design', s + n.svg),
    'Four numbered stages in a row: aims and hypotheses, pilot study, sampling, analysis of data. Below, an aim is a general statement such as investigating how couples divide housework, while a hypothesis is a narrower, testable prediction such as dual-career couples sharing housework more equally.',
    'Plan the aim, test the method, choose the sample, then analyse.',
    '## Research design');
}

// 02 Four sampling methods
{
  const cw = 412, chh = 410;
  const card = (x, y, head, art, plus, minus) => {
    let o = headPanel(x, y, cw, chh, head, { fill: C.teal, size: 21 }).svg + art;
    o += plusMinus(x + 18, y + 300, cw - 36, plus, minus).svg;
    return o;
  };
  const grid = (x, y, pick, fillFn) => { let o = ''; for (let r = 0; r < 4; r++) for (let c = 0; c < 8; c++) { const i = r * 8 + c; o += dot(x + 40 + c * 46, y + 82 + r * 46, pick(i), { fill: fillFn ? fillFn(i) : C.tealLight }); } return o; };
  let s = '';
  const y1 = 108, y2 = 108 + chh + 18;
  const rnd = new Set([2, 9, 13, 20, 27, 30]);
  s += card(30, y1, 'Random', grid(30, y1, (i) => rnd.has(i)), 'Every member has an equal chance of selection (e.g. names drawn by computer)', 'A small random sample can still be unrepresentative by chance');
  s += card(458, y1, 'Systematic', grid(458, y1, (i) => i % 4 === 3) + label(458 + cw / 2, y1 + 262, 'every nth name on the list (here every 4th)', { size: 15, anchor: 'middle', fill: C.muted, italic: true }), 'Quick: for 100 from a roll of 1,200, take every 12th name', 'A list ordered in a pattern can create bias');
  // quota
  let q = '';
  for (let r = 0; r < 4; r++) for (let c = 0; c < 8; c++) { const i = r * 8 + c; const fem = c < 4; q += dot(30 + 40 + c * 46 + (c >= 4 ? 16 : 0), y2 + 82 + r * 46, (fem && i % 8 < 2 && r < 3) || (!fem && c >= 4 && c < 6 && r < 3), { fill: fem ? C.tealLight : C.cream }); }
  q += label(30 + 40 + 69, y2 + 262, '52% women: 78', { size: 15, anchor: 'middle', weight: 700, fill: C.tealDark }) + label(30 + 40 + 4 * 46 + 16 + 69, y2 + 262, '48% men: 72', { size: 15, anchor: 'middle', weight: 700, fill: C.olive });
  s += card(30, y2, 'Quota', q, 'Fill set numbers for each group to match the population; no sampling frame needed', 'The researcher chooses who fills each quota, which can bring in bias');
  // snowball
  let sb = ''; const pts = [[90, 120], [170, 170], [250, 130], [330, 190], [250, 240], [160, 250], [380, 120]];
  [[0, 1], [1, 2], [1, 5], [2, 3], [3, 4], [2, 6]].forEach(([a, b]) => { const [x1, y1_] = pts[a], [x2, y2_] = pts[b]; const L = Math.hypot(x2 - x1, y2_ - y1_), ux = (x2 - x1) / L, uy = (y2_ - y1_) / L; sb += arrow(458 + x1 + ux * 14, y2 + y1_ + uy * 14, 458 + x2 - ux * 16, y2 + y2_ - uy * 16, { w: 2.5 }); });
  pts.forEach(([x, y], i) => { sb += dot(458 + x, y2 + y, i === 0); });
  sb += label(458 + 90, y2 + 102, 'first contact', { size: 15, anchor: 'middle', weight: 700, fill: C.olive });
  s += card(458, y2, 'Snowball', sb, 'One participant introduces the next; reaches hidden groups', 'Contacts tend to be similar, so the sample is rarely representative');
  add('02-sampling-methods',
    svg(900, y2 + chh + 24, 'Four ways to choose a sample', s),
    'Four panels. Random: scattered people chosen, each with an equal chance. Systematic: every nth name on a list. Quota: set numbers filled for each group, such as 78 women and 72 men in a sample of 150 from a town that is 52% female. Snowball: one participant introduces the next in a chain. Each has a strength and a weakness.',
    'Each sampling method trades fairness, speed and reach against representativeness.',
    '## Research design');
}

// 03 Quantitative to qualitative spectrum
{
  let s = '';
  const y = 176;
  s += `<defs><linearGradient id="spec" x1="0" x2="1"><stop offset="0" stop-color="${C.teal}"/><stop offset="1" stop-color="${C.cream}"/></linearGradient></defs>`;
  s += `<rect x="30" y="${y}" width="840" height="56" rx="28" fill="url(#spec)" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += label(40, y - 42, 'QUANTITATIVE: numbers', { size: 19, weight: 700 }) + label(860, y - 42, 'QUALITATIVE: words, meanings', { size: 19, weight: 700, anchor: 'end' });
  s += label(40, y - 16, 'more reliable, easy to compare', { size: 17, weight: 600, fill: C.tealDark }) + label(860, y - 16, 'more depth and validity', { size: 17, weight: 600, fill: C.olive, anchor: 'end' });
  const items = [
    ['Questionnaire', 'closed questions', 'Cheap and fast for large samples; anonymous', 'Low response rates; forces answers into set categories'],
    ['Structured interview', 'set questions read aloud', 'Good response rates and reliability', 'Time-consuming; interviewer bias'],
    ['Unstructured interview', 'a guided conversation', 'Depth, validity, rapport for sensitive topics', 'Hard to compare or repeat'],
    ['Participant observation', 'joins the group', 'Sees what people do, not what they say', 'May change behaviour; low reliability'],
  ];
  const cw = 198, gap = 16;
  items.forEach(([h, sub, plus, minus], i) => {
    const x = 30 + i * (cw + gap), cx = x + cw / 2;
    s += `<circle cx="${cx}" cy="${y + 28}" r="9" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/>` + `<line x1="${cx}" y1="${y + 58}" x2="${cx}" y2="${y + 86}" stroke="${C.ink}" stroke-width="2.5"/>`;
  });
  const cards = items.map(([h, sub, plus, minus]) => ({ h, sub, pm: plusMinus(0, 0, cw - 24, plus, minus) }));
  const hh = Math.max(...items.map(([h]) => para(0, 0, cw - 24, h, { size: 18, weight: 700 }).h));
  const ch = 20 + hh + 6 + 22 + 14 + Math.max(...cards.map((c) => c.pm.h)) + 22;
  items.forEach(([h, sub, plus, minus], i) => {
    const x = 30 + i * (cw + gap), yy = y + 88;
    s += box(x, yy, cw, ch, { fill: C.panel, edge: C.panelEdge });
    s += para(x + 12, yy + 28, cw - 24, h, { size: 18, weight: 700 }).svg;
    s += label(x + 12, yy + 28 + hh + 4, sub, { size: 15, fill: C.muted, italic: true });
    s += plusMinus(x + 12, yy + 28 + hh + 4 + 34, cw - 24, plus, minus).svg;
  });
  const ny = y + 88 + ch + 20;
  const n = note(ny, 'Mixed methods: use both', ['A questionnaire to find how common something is, then interviews to find out why', '**Useful:** numbers show the pattern, words explain it; allows triangulation', '**Limits:** more time and money; results may clash; needs skills in both']);
  add('03-methods-spectrum',
    svg(900, Math.round(ny + n.h + 24), 'From numbers to meanings', s + n.svg),
    'A line runs from quantitative methods, which are more reliable and easy to compare, to qualitative methods, which give more depth and validity. Questionnaires, structured interviews, unstructured interviews and participant observation are placed along it with a strength and a weakness each. Below, mixed methods combine both.',
    'Quantitative methods favour reliability; qualitative methods favour validity; mixed methods combine them.',
    '## Qualitative and quantitative methods');
}

// 04 Types of observation 2x2
{
  const x0 = 210, y0 = 160, cw = 322, chh = 170, gap = 16;
  let s = '';
  s += box(x0, 108, cw, 44, { fill: C.teal, sw: 2 }) + label(x0 + cw / 2, 137, 'Participant: joins the group', { size: 17, weight: 700, anchor: 'middle' });
  s += box(x0 + cw + gap, 108, cw, 44, { fill: C.tealLight, sw: 2 }) + label(x0 + cw + gap + cw / 2, 137, 'Non-participant: watches only', { size: 17, weight: 700, anchor: 'middle' });
  s += box(30, y0, 170, chh, { fill: C.cream, edge: C.olive, sw: 2 }) + label(115, y0 + 74, 'Overt', { size: 20, weight: 700, anchor: 'middle' }) + para(115, y0 + 100, 150, 'the group knows', { size: 16, anchor: 'middle', fill: C.muted }).svg;
  s += box(30, y0 + chh + gap, 170, chh, { fill: C.mustard, edge: C.olive, sw: 2 }) + label(115, y0 + chh + gap + 74, 'Covert', { size: 20, weight: 700, anchor: 'middle' }) + para(115, y0 + chh + gap + 100, 150, 'secret', { size: 16, anchor: 'middle', fill: C.ink }).svg;
  const cells = [
    ['Joins openly', 'Reaches groups that would not fill in forms', 'The observer may change the group’s behaviour'],
    ['Watches openly', 'Sees what people do, not what they say', 'The observer may change the group’s behaviour'],
    ['Joins in secret', 'May give the most valid picture of a deviant group', 'Breaks informed consent'],
    ['Watches in secret', 'Behaviour is not changed by being watched', 'Consent problems'],
  ];
  cells.forEach(([h, plus, minus], i) => {
    const x = x0 + (i % 2) * (cw + gap), y = y0 + Math.floor(i / 2) * (chh + gap);
    s += box(x, y, cw, chh, { fill: C.panel, edge: C.panelEdge });
    s += label(x + 18, y + 34, h, { size: 19, weight: 700 });
    s += plusMinus(x + 18, y + 68, cw - 36, plus, minus).svg;
  });
  const ny = y0 + 2 * chh + gap + 20;
  const n = note(ny, 'Ethnography', 'A detailed study of a group’s way of life, usually by participant observation over a long period, e.g. Ball’s three years at Beachside.');
  add('04-observation-types',
    svg(900, Math.round(ny + n.h + 24), 'Four kinds of observation', s + n.svg),
    'A two-by-two grid. Columns: participant observation, where the researcher joins the group, and non-participant, where they only watch. Rows: overt, where the group knows, and covert, where it is secret. Overt observation may change behaviour; covert observation breaks informed consent.',
    'Joining or watching, openly or in secret: each choice trades validity against ethics.',
    '## Qualitative and quantitative methods');
}

// 05 Primary/secondary x quantitative/qualitative
{
  const x0 = 210, cw = 322, gap = 16, chh = 176;
  let s = '';
  s += box(x0, 108, cw, 70, { fill: C.teal, sw: 2 }) + label(x0 + cw / 2, 138, 'Quantitative data', { size: 19, weight: 700, anchor: 'middle' }) + label(x0 + cw / 2, 162, 'numbers: patterns and trends', { size: 15, anchor: 'middle', fill: C.ink });
  s += box(x0 + cw + gap, 108, cw, 70, { fill: C.cream, sw: 2 }) + label(x0 + cw + gap + cw / 2, 138, 'Qualitative data', { size: 19, weight: 700, anchor: 'middle' }) + label(x0 + cw + gap + cw / 2, 162, 'words: depth and meaning', { size: 15, anchor: 'middle', fill: C.ink });
  const rows = [['Primary', 'collected first-hand by the researcher'], ['Secondary', 'already exists, made by someone else']];
  const y0 = 194;
  rows.forEach(([h, sub], j) => {
    const y = y0 + j * (chh + gap);
    s += box(30, y, 170, chh, { fill: j ? C.tealLight : C.mustard, sw: 2 }) + label(115, y + 70, h, { size: 20, weight: 700, anchor: 'middle' }) + para(115, y + 98, 140, sub, { size: 15, anchor: 'middle' }).svg;
  });
  const cells = [
    ['Your own questionnaire with closed questions', 'Your own structured interviews'],
    ['Your own unstructured interviews', 'Your own observations'],
    ['Official statistics (e.g. census, exam results, recorded crime)', 'Non-official statistics (charities, universities, businesses)'],
    ['Diaries and letters', 'Media content and websites', 'Earlier studies'],
  ];
  cells.forEach((items, i) => {
    const x = x0 + (i % 2) * (cw + gap), y = y0 + Math.floor(i / 2) * (chh + gap);
    s += box(x, y, cw, chh, { fill: C.panel, edge: C.panelEdge });
    s += bullets(x + 18, y + 36, cw - 36, items, { size: 17 }).svg;
  });
  const ny = y0 + 2 * chh + gap + 20;
  const r = cardRow(ny, [
    { head: 'Primary data', fill: C.mustard, body: 'Fit the aim exactly, but cost time and money.' },
    { head: 'Secondary data', fill: C.tealLight, body: 'Quick and cheap, and may cover the past or a whole country, but made for another purpose.' },
  ], { size: 17, headSize: 19 });
  add('05-data-sources-grid',
    svg(900, Math.round(ny + r.h + 24), 'Sorting sources of data', s + r.svg),
    'A two-by-two grid. Primary quantitative: your own closed questionnaire or structured interviews. Primary qualitative: your own unstructured interviews or observations. Secondary quantitative: official and non-official statistics. Secondary qualitative: diaries, letters, media content, websites and earlier studies. Below, primary data fit the aim but cost more; secondary data are cheap but made for another purpose.',
    'Any source can be sorted two ways: who collected it, and whether it is numbers or words.',
    '## Primary and secondary sources');
}

// 06 Townsend: one society, three poverty figures
{
  let s = label(450, 92, 'Population in poverty, 1968–69, on three measures', { size: 19, anchor: 'middle', fill: C.muted });
  const base = 470, x0 = 170, bw = 160, gap = 70, scale = 13;
  const bars = [['State standard', 6, 'just over 6%', C.tealLight], ['Relative income', 9, 'a little over 9%', C.teal], ['Relative deprivation', 22, 'more than 22%', C.mustard]];
  s += `<line x1="${x0 - 30}" y1="${base}" x2="${x0 + 3 * bw + 2 * gap + 30}" y2="${base}" stroke="${C.ink}" stroke-width="3"/>`;
  bars.forEach(([l, v, txt, f], i) => {
    const x = x0 + i * (bw + gap), h = v * scale;
    s += `<rect x="${x}" y="${base - h}" width="${bw}" height="${h}" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += label(x + bw / 2, base - h - 14, txt, { size: 20, weight: 700, anchor: 'middle' });
    s += para(x + bw / 2, base + 30, bw + 40, l, { size: 18, weight: 600, anchor: 'middle' }).svg;
  });
  s += label(x0 + 2 * (bw + gap) + bw / 2, base + 56, '(Townsend’s own measure)', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  const n = note(base + 84, 'One society, three figures', 'The definition decides the number. Official statistics use definitions set by government, which can change; check how any statistic was defined.');
  add('06-townsend-definitions',
    svg(900, Math.round(base + 84 + n.h + 24), 'How definitions change the numbers', s + n.svg),
    'Three bars for the same society in 1968–69: just over 6% in poverty on the state standard, a little over 9% on relative income, and more than 22% on Townsend’s relative deprivation measure.',
    'The same society can show 6%, 9% or 22% in poverty, depending on the definition.',
    '## Different types of data');
}

// 07 Percentage points vs percent
{
  let s = label(450, 92, 'Fictional town of Dunmarsh: couples who said they shared housework equally', { size: 18, anchor: 'middle', fill: C.muted });
  const base = 460, scale = 6.5, bw = 150;
  const xs = [150, 400];
  [[28, '2005'], [42, '2025']].forEach(([v, yr], i) => {
    const h = v * scale, x = xs[i];
    s += `<rect x="${x}" y="${base - h}" width="${bw}" height="${h}" fill="${i ? C.teal : C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += label(x + bw / 2, base - h + 34, `${v}%`, { size: 26, weight: 700, anchor: 'middle' });
    s += label(x + bw / 2, base + 30, yr, { size: 19, weight: 700, anchor: 'middle' });
  });
  s += `<line x1="100" y1="${base}" x2="600" y2="${base}" stroke="${C.ink}" stroke-width="3"/>`;
  s += `<line x1="${xs[0] + bw}" y1="${base - 28 * scale}" x2="${xs[1] + bw + 30}" y2="${base - 28 * scale}" stroke="${C.rust}" stroke-width="2" stroke-dasharray="7 5"/>`;
  const yA = base - 42 * scale, yB = base - 28 * scale;
  s += path(`M${xs[1] + bw + 18},${yA} h12 v${yB - yA} h-12`, { stroke: C.rust, w: 3 });
  s += label(xs[1] + bw + 40, (yA + yB) / 2 + 6, '+14', { size: 20, weight: 700, fill: C.rust });
  const bx = 640;
  s += box(bx, 150, 230, 130, { fill: C.teal }) + label(bx + 115, 186, 'Percentage points', { size: 18, weight: 700, anchor: 'middle' }) + label(bx + 115, 222, '42 − 28 = 14', { size: 20, anchor: 'middle' }) + label(bx + 115, 258, '+14 points', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += box(bx, 300, 230, 130, { fill: C.cream, edge: C.olive }) + label(bx + 115, 336, 'Percentage change', { size: 18, weight: 700, anchor: 'middle' }) + label(bx + 115, 372, '14 ÷ 28 × 100', { size: 20, anchor: 'middle' }) + label(bx + 115, 408, '+50%', { size: 20, weight: 700, anchor: 'middle', fill: C.olive });
  const n = note(base + 60, 'Wrong: “It rose by 14%”', ['Then evaluate: “said they shared” is self-reported', 'Two years of data cannot show what happened in between']);
  add('07-percentage-points',
    svg(900, Math.round(base + 60 + n.h + 24), 'Percentage points or per cent?', s + n.svg),
    'Two bars for a fictional town: 28% of couples said they shared housework equally in 2005 and 42% in 2025. The rise is 14 percentage points, which is a 50% increase on the starting figure. Saying it rose by 14% would be wrong.',
    'A rise from 28% to 42% is 14 percentage points, or a 50% increase.',
    '## Interpretation of data');
}

// 08 Ethical issues and how to address them
{
  const r = cardRow(108, [
    { head: 'Consent', fill: C.teal, sub: 'Agree to take part, knowing what it involves (informed consent)', body: ['Explain aims; information sheets', 'Written consent; parental consent for children', 'Tell people they can withdraw'] },
    { head: 'Confidentiality', fill: C.tealLight, sub: 'Identities and information kept private', body: ['Anonymise names and places', 'Store data securely under data protection law', 'Report so no one can be identified'] },
    { head: 'Harm', fill: C.cream, sub: 'No physical, emotional or social damage', body: ['Avoid distressing questions', 'Allow people to stop', 'Offer support contacts; debrief'] },
  ], { size: 16, headSize: 21 });
  let s = r.svg;
  const y = 108 + r.h + 20;
  s += box(30, y, 840, 150, { fill: C.panel, edge: C.ink });
  s += label(450, y + 34, 'The classic dilemma: covert observation', { size: 20, weight: 700, anchor: 'middle' });
  s += box(50, y + 52, 385, 82, { fill: C.tealLight, edge: C.panelEdge, sw: 2 }) + vcenter(66, y + 52, 82, 355, '**For:** may give the most valid picture of a deviant group; justified if no other method reaches it and identities are protected', { size: 16 });
  s += box(465, y + 52, 385, 82, { fill: '#f3d9c9', edge: C.panelEdge, sw: 2 }) + vcenter(481, y + 52, 82, 355, '**Against:** it breaks informed consent; some say deception is never acceptable', { size: 16 });
  add('08-ethical-issues',
    svg(900, y + 150 + 24, 'Ethical issues and how to address them', s),
    'Three cards: consent, addressed by explaining aims, written and parental consent and the right to withdraw; confidentiality, addressed by anonymising and storing data securely; harm, addressed by avoiding distressing questions, allowing people to stop and debriefing. Below, the case for and against covert observation.',
    'Consent, confidentiality and harm each have practical fixes; covert observation tests them all.',
    '## Ethical issues');
}
