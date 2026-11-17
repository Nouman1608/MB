import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-sociology-8192-interpretation-of-data';
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
const pill = (x, y, w, h, s, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${o.fill || C.tealLight}" stroke="${o.edge || C.ink}" stroke-width="2"/>` + label(x + w / 2, y + h / 2 + (o.size || 17) * 0.36, s, { size: o.size || 17, weight: o.weight ?? 700, anchor: 'middle', fill: o.ink || C.ink });
const vcenter = (x, yTop, h, w, s, o = {}) => { const size = o.size || 17; const p = para(0, 0, w, s, o); return para(x, yTop + (h - p.h) / 2 + size * 0.95, w, s, o).svg; };

const person = (x, y, f = C.teal, r = 15) => `<circle cx="${x}" cy="${y - r * 1.9}" r="${r * 0.62}" fill="${f}" stroke="${C.ink}" stroke-width="2.2"/><path d="M${x - r},${y} Q${x - r},${y - r * 1.2} ${x},${y - r * 1.2} Q${x + r},${y - r * 1.2} ${x + r},${y} Z" fill="${f}" stroke="${C.ink}" stroke-width="2.2"/>`;
const axes = (ox, oy, w, h) => `<line x1="${ox}" y1="${oy}" x2="${ox + w}" y2="${oy}" stroke="${C.ink}" stroke-width="2.5"/><line x1="${ox}" y1="${oy}" x2="${ox}" y2="${oy - h}" stroke="${C.ink}" stroke-width="2.5"/>`;

// 01 Pattern vs trend
{
  let s = '';
  const L = headPanel(30, 108, 404, 400, 'Pattern', { fill: C.teal, size: 22 });
  const R = headPanel(466, 108, 404, 400, 'Trend', { fill: C.cream, size: 22 });
  s += L.svg + R.svg;
  s += para(232, 196, 360, 'A regular relationship **at one point in time**', { size: 17, anchor: 'middle' }).svg;
  s += para(668, 196, 360, 'A general direction **over time**', { size: 17, anchor: 'middle' }).svg;
  // pattern: grouped bars, group A always higher
  const ox = 80, oy = 440;
  s += axes(ox, oy, 320, 190);
  [[0, 150, 100], [1, 130, 80], [2, 160, 110]].forEach(([i, a, b]) => {
    const x = ox + 30 + i * 100;
    s += `<rect x="${x}" y="${oy - a}" width="34" height="${a}" fill="${C.tealDark}" stroke="${C.ink}" stroke-width="2"/><rect x="${x + 38}" y="${oy - b}" width="34" height="${b}" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2"/>`;
  });
  s += label(232, oy + 28, 'one group consistently higher', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  // trend: lines
  const tx = 516;
  s += axes(tx, oy, 320, 190);
  s += path(`M${tx + 20},${oy - 40} L${tx + 100},${oy - 70} L${tx + 180},${oy - 95} L${tx + 300},${oy - 150}`, { stroke: C.tealDark, w: 4 }) + label(tx + 300, oy - 160, 'rising', { size: 15, weight: 700, anchor: 'end', fill: C.tealDark });
  s += path(`M${tx + 20},${oy - 150} L${tx + 100},${oy - 130} L${tx + 180},${oy - 110} L${tx + 300},${oy - 80}`, { stroke: C.rust, w: 4 }) + label(tx + 300, oy - 60, 'falling', { size: 15, weight: 700, anchor: 'end', fill: C.rust });
  s += label(668, oy + 28, 'rising, falling, stable or fluctuating', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  const n = note(530, 'A good description', 'Says what the pattern or trend is, quotes figures with units, and notes any exceptions.');
  add('01-pattern-trend',
    svg(900, Math.round(530 + n.h + 24), 'Pattern or trend?', s + n.svg),
    'Two panels. A pattern is a regular relationship at one point in time, shown as grouped bars where one group is always higher. A trend is a general direction over time, shown as one rising and one falling line. Below: describe it, quote figures with units and note exceptions.',
    'A pattern compares groups at one time; a trend follows change over time.',
    '## Patterns and trends');
}

// 02 Seven-step routine
{
  const steps = [
    ['Read the title', 'What is measured, where and when?'],
    ['Check the units', 'Numbers, %, rates per 1,000, thousands?'],
    ['Check source and sample', 'Who produced it? How many people?'],
    ['Find the overall pattern or trend', 'Describe it in one sentence'],
    ['Quote figures', 'Highest, lowest, first and last values'],
    ['Note exceptions', 'A year or group that does not fit'],
    ['Ask what it cannot show', 'Causes, meanings, groups not included'],
  ];
  let s = '';
  steps.forEach(([h, b], i) => {
    const col = i < 4 ? 0 : 1, row = i < 4 ? i : i - 4;
    const x = 30 + col * 430, y = 108 + row * 100;
    s += box(x, y, 410, 86, { fill: i === 6 ? C.cream : C.panel, edge: i === 6 ? C.olive : C.panelEdge, sw: 2 }) + badge(x + 36, y + 43, 20, String(i + 1), i === 6 ? C.mustard : C.cream);
    s += label(x + 70, y + 36, h, { size: 19, weight: 700 }) + label(x + 70, y + 64, b, { size: 16, fill: C.muted });
  });
  s += box(460, 108 + 3 * 100, 410, 86, { fill: C.tealLight, sw: 2 }) + para(476, 108 + 3 * 100 + 36, 380, 'Steps 1–3 before you describe; step 7 before you conclude.', { size: 17, weight: 600 }).svg;
  add('02-data-routine',
    svg(900, 108 + 4 * 100 + 10, 'A routine for any data item', s),
    'Seven numbered steps: read the title, check the units, check the source and sample, find the overall pattern or trend, quote figures, note exceptions, and ask what the data cannot show.',
    'Check what the data measure before describing them, and what they miss before concluding.',
    '## A routine for any data item');
}

// 03 Percentage points vs percentage change (Westbridge)
{
  let s = label(450, 92, 'Fictional Westbridge household survey', { size: 19, anchor: 'middle', fill: C.muted });
  const ox = 90, oy = 470, w = 420, h = 330, max = 40;
  const Y = (v) => oy - (v / max) * h;
  s += axes(ox, oy, w, h);
  [0, 10, 20, 30, 40].forEach((v) => { s += `<line x1="${ox - 6}" y1="${Y(v)}" x2="${ox}" y2="${Y(v)}" stroke="${C.ink}" stroke-width="2"/>` + label(ox - 12, Y(v) + 5, v + '%', { size: 15, anchor: 'end', fill: C.muted }); if (v) s += `<line x1="${ox}" y1="${Y(v)}" x2="${ox + w}" y2="${Y(v)}" stroke="${C.panelEdge}" stroke-width="1.5"/>`; });
  const xs = [ox + 60, ox + 210, ox + 360];
  ['2005', '2015', '2025'].forEach((yr, i) => { s += label(xs[i], oy + 26, yr, { size: 16, anchor: 'middle', weight: 600 }); });
  const series = [['Couple with dependent children', [38, 34, 30], C.tealDark], ['One person', [28, 30, 31], C.olive], ['Other', [25, 25, 27], C.muted], ['Lone parent with dependent children', [9, 11, 12], C.rust]];
  series.forEach(([n, v, c]) => {
    s += path(v.map((a, i) => `${i ? 'L' : 'M'}${xs[i]},${Y(a)}`).join(' '), { stroke: c, w: 4 });
    v.forEach((a, i) => { s += `<circle cx="${xs[i]}" cy="${Y(a)}" r="6" fill="${c}"/>`; });
  });
  s += label(xs[0] - 12, Y(38) - 10, '38%', { size: 15, weight: 700, fill: C.tealDark, anchor: 'end' }) + label(xs[2] + 12, Y(30) + 20, '30%', { size: 15, weight: 700, fill: C.tealDark });
  s += label(xs[0] - 12, Y(9) + 5, '9%', { size: 15, weight: 700, fill: C.rust, anchor: 'end' }) + label(xs[2] + 12, Y(12) + 5, '12%', { size: 15, weight: 700, fill: C.rust });
  // legend
  let ly = 130;
  s += label(560, ly, 'Household type', { size: 17, weight: 700 });
  series.forEach(([n, , c], i) => { const y = ly + 28 + i * 44; s += `<line x1="560" y1="${y}" x2="590" y2="${y}" stroke="${c}" stroke-width="5"/>` + para(600, y + 6, 270, n, { size: 15.5 }).svg; });
  // callouts
  s += box(560, 330, 310, 140, { fill: C.cream, edge: C.olive, sw: 2 }) + label(576, 358, 'Lone parent: 9% → 12%', { size: 17, weight: 700, fill: C.rust });
  s += tl(576, 388, ['12 − 9 = **3 percentage points**', '3 ÷ 9 × 100 = **33% increase**', '(to the nearest whole number)'].map((l) => l.replace(/\*\*(.+?)\*\*/g, '<tspan font-weight="700">$1</tspan>')), { size: 16 }, 24);
  s += box(30, 520, 840, 64, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + label(450, 548, 'Couples with dependent children: 38% → 30% = a fall of 8 percentage points', { size: 17, weight: 600, anchor: 'middle' }) + label(450, 572, 'Never call a fall in percentage points a percentage fall', { size: 16, anchor: 'middle', fill: C.rust, weight: 700 });
  add('03-percentage-points',
    svg(900, 608, 'Percentage points or percentage change?', s),
    'Line chart of a fictional household survey, 2005 to 2025. Couples with dependent children fell from 38% to 30%, one-person households rose from 28% to 31%, other households went from 25% to 27%, and lone-parent households rose from 9% to 12%. The lone-parent rise is 3 percentage points, which is a 33% increase.',
    'A rise from 9% to 12% is 3 percentage points but a 33% increase.',
    '## Calculations you should be able to do');
}

// 04 Rates: fewer exclusions, higher rate
{
  let s = '';
  const dist = (x, name, pupils, excl, rate, n, fill) => {
    let o = headPanel(x, 108, 404, 420, name, { fill, size: 21 }).svg;
    o += label(x + 202, 196, `${pupils} pupils`, { size: 18, anchor: 'middle', fill: C.muted }) + label(x + 202, 236, `${excl} exclusions`, { size: 24, weight: 700, anchor: 'middle' });
    o += label(x + 202, 288, `${excl} ÷ ${pupils} × 1,000`, { size: 18, anchor: 'middle' });
    o += box(x + 82, 312, 240, 92, { fill: C.mustard, sw: 2.5 }) + label(x + 202, 356, `${rate} per 1,000`, { size: 26, weight: 700, anchor: 'middle' }) + label(x + 202, 386, 'pupils', { size: 16, anchor: 'middle' });
    // per-1000 dots
    for (let k = 0; k < n; k++) o += `<circle cx="${x + 62 + (k % 10) * 31}" cy="${438 + Math.floor(k / 10) * 30}" r="10" fill="${C.rust}" stroke="${C.ink}" stroke-width="1.5"/>`;
    return o;
  };
  s += dist(30, 'District A', '24,000', '360', '15', 15, C.teal);
  s += dist(466, 'District B', '9,000', '180', '20', 20, C.cream);
  s += label(450, 556, '● = one exclusion per 1,000 pupils', { size: 16, anchor: 'middle', fill: C.rust, weight: 600 });
  s += box(30, 576, 840, 64, { fill: C.tealLight, sw: 2 }) + label(450, 615, 'District B had fewer exclusions but a HIGHER rate', { size: 20, weight: 700, anchor: 'middle' });
  add('04-rates',
    svg(900, 664, 'Why rates matter', s, 'Fictional example'),
    'District A has 24,000 pupils and 360 exclusions, a rate of 15 per 1,000. District B has 9,000 pupils and 180 exclusions, a rate of 20 per 1,000. District B had fewer exclusions but a higher rate.',
    'A rate lets groups of different sizes be compared fairly.',
    '## Calculations you should be able to do');
}

// 05 Mean vs median
{
  let s = '';
  const y = 260;
  s += `<line x1="60" y1="${y}" x2="840" y2="${y}" stroke="${C.ink}" stroke-width="3"/>` + label(840, y + 34, 'higher income →', { size: 16, anchor: 'end', fill: C.muted });
  const xs = [100, 125, 150, 175, 200, 225, 250, 275, 300, 760, 830];
  xs.forEach((x) => { s += person(x, y - 6, x > 600 ? C.mustard : C.tealLight, 11); });
  s += `<line x1="200" y1="${y + 14}" x2="200" y2="${y + 70}" stroke="${C.tealDark}" stroke-width="4"/>` + label(200, y + 96, 'median', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark }) + label(200, y + 120, 'the middle person', { size: 16, anchor: 'middle', fill: C.tealDark });
  s += `<line x1="310" y1="${y + 14}" x2="310" y2="${y + 70}" stroke="${C.rust}" stroke-width="4"/>` + label(330, y + 96, 'mean', { size: 19, weight: 700, anchor: 'middle', fill: C.rust }) + label(350, y + 120, 'pulled upwards', { size: 16, anchor: 'middle', fill: C.rust });
  s += label(795, y - 60, 'a few very high earners', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  s += arrow(212, y + 42, 298, y + 42, { color: C.rust, marker: 'ahR', w: 3 });
  const r = cardRow(y + 150, [
    { head: 'Mean', fill: C.cream, body: 'Add the values and divide by how many there are' },
    { head: 'Median', fill: C.teal, body: 'The middle value when the values are in order' },
    { head: 'Mode', fill: C.tealLight, body: 'The most common value' },
  ], { size: 16, headSize: 19 });
  s += r.svg;
  add('05-mean-median',
    svg(900, Math.round(y + 150 + r.h + 24), 'Why income data often use the median', s, 'A schematic, not real data'),
    'Eleven people are placed along an income line, most clustered at the low end and two far to the right. The median, the middle person, sits among the cluster; the mean is pulled upwards by the few high earners. Below, definitions of mean, median and mode.',
    'A few very high earners pull the mean up, so the median gives a fairer middle.',
    '## Calculations you should be able to do');
}

// 06 Haverford worked example
{
  let s = label(450, 92, 'Recorded violent incidents per 1,000 residents, Haverford (fictional)', { size: 18, anchor: 'middle', fill: C.muted });
  const ox = 100, oy = 440, w = 720, h = 300, max = 30;
  const Y = (v) => oy - (v / max) * h;
  s += axes(ox, oy, w, h);
  [0, 10, 20, 30].forEach((v) => { s += label(ox - 12, Y(v) + 5, String(v), { size: 15, anchor: 'end', fill: C.muted }); if (v) s += `<line x1="${ox}" y1="${Y(v)}" x2="${ox + w}" y2="${Y(v)}" stroke="${C.panelEdge}" stroke-width="1.5"/>`; });
  const data = [[2015, 18], [2017, 21], [2019, 24], [2021, 19], [2023, 26], [2025, 28]];
  const X = (yr) => ox + 60 + ((yr - 2015) / 10) * (w - 120);
  s += path(data.map(([yr, v], i) => `${i ? 'L' : 'M'}${X(yr)},${Y(v)}`).join(' '), { stroke: C.tealDark, w: 4.5 });
  data.forEach(([yr, v]) => { s += `<circle cx="${X(yr)}" cy="${Y(v)}" r="${yr === 2021 ? 11 : 7}" fill="${yr === 2021 ? C.mustard : C.tealDark}" stroke="${C.ink}" stroke-width="2"/>` + label(X(yr), Y(v) - 16, String(v), { size: 16, weight: 700, anchor: 'middle' }) + label(X(yr), oy + 26, String(yr), { size: 16, anchor: 'middle', weight: 600 }); });
  s += label(X(2021), Y(19) + 36, 'exception', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  s += label(X(2015) + 6, Y(18) + 34, 'first', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark }) + label(X(2025), Y(28) - 38, 'last', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
  const r = cardRow(oy + 54, [
    { head: 'Direction', fill: C.teal, body: 'Overall rise: 18 to 28 per 1,000, up 10 per 1,000' },
    { head: 'Exception', fill: C.cream, body: 'Steady rise to 24 in 2019, a fall to 19 in 2021, then up again' },
    { head: 'Limitation', fill: C.tealLight, body: 'Recorded incidents: some victims do not report; recording practices may change' },
  ], { size: 16, headSize: 19 });
  s += r.svg;
  add('06-worked-example',
    svg(900, Math.round(oy + 54 + r.h + 24), 'A full data answer, mapped onto the graph', s),
    'Line graph of fictional recorded violent incidents per 1,000 residents in Haverford: 18 in 2015, 21 in 2017, 24 in 2019, 19 in 2021, 26 in 2023 and 28 in 2025. Labels mark the first and last values and the 2021 exception. Below: the direction, the exception and a limitation of recorded figures.',
    'Give the direction, quote first and last figures, pick out the exception, then explain a limitation.',
    '## Worked example: a full data answer');
}

// 07 Traps
{
  const f = cardsFig('Eight traps when reading data', {
    cards: [
      { head: 'Numbers vs rates', fill: C.teal, body: 'A larger town may have more crimes simply because it has more people' },
      { head: 'Percentage vs points', fill: C.teal, body: '20% to 30% is 10 percentage points, a 50% increase' },
      { head: 'Truncated axes', fill: C.tealLight, body: 'An axis starting at 40, not 0, makes small differences look large' },
      { head: 'Missing years', fill: C.tealLight, body: 'Data for 2000, 2010 and 2025 cannot show what happened in between' },
      { head: 'Correlation is not cause', fill: C.cream, body: 'More police may mean more crime is detected, not committed' },
      { head: 'Small samples', fill: C.cream, body: 'A percentage based on 20 people can swing with one or two answers' },
      { head: 'Definitions', fill: C.tealLight, body: 'If “poverty” or “crime” is defined differently, a trend may be false' },
      { head: 'Who is missing', fill: C.tealLight, body: 'A survey of pupils says nothing about young people not in school' },
    ],
    ncol: 2, size: 16, headSize: 19, badges: true,
  });
  add('07-eight-traps', f,
    'Eight cards: numbers versus rates, percentages versus percentage points, truncated axes, missing years, correlation versus causation, small samples, changing definitions, and groups missing from the data, each with a short example.',
    'Before trusting a figure, check it against each trap.',
    '## Traps when reading data');
}
