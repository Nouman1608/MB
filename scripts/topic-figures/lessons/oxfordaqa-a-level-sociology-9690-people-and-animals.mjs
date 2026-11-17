import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-a-level-sociology-9690-people-and-animals';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- Local layout helpers (sociology figures: wrapped text, tables, flows, cards) ----
const esc = (s) => String(s).replace(/&(?![a-z]+;|#\d+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const CW = 0.525, CWB = 0.575; // average glyph width / font size for Inter (regular, bold)
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
// ---- extra helpers (soc9690 batch) ----
// Cycle of boxes on an ellipse with arrows between consecutive boxes; returns svg string
function cycle(cx, cy, rx, ry, items, o = {}) {
  const n = items.length, bw = o.bw || 230, size = o.size || 16; let s = '';
  const pos = items.map((_, i) => { const a = -Math.PI / 2 + (2 * Math.PI * i) / n; return [cx + rx * Math.cos(a), cy + ry * Math.sin(a)]; });
  const hs = items.map((it) => (it.head ? para(0, 0, bw - 24, it.head, { size: 18, weight: 700 }).h + 4 : 0) + (it.body ? para(0, 0, bw - 24, it.body, { size }).h : 0) + 26);
  // arrows first (under boxes)
  for (let i = 0; i < n; i++) {
    const [x1, y1] = pos[i], [x2, y2] = pos[(i + 1) % n];
    const a1 = -Math.PI / 2 + (2 * Math.PI * i) / n, a2 = -Math.PI / 2 + (2 * Math.PI * (i + 1)) / n;
    const am = (a1 + a2) / 2, k = o.bulge || 1.0;
    const mx = cx + rx * k * Math.cos(am) / Math.cos(Math.PI / n), my = cy + ry * k * Math.sin(am) / Math.cos(Math.PI / n);
    // shorten: start/end points pulled toward midpoint
    const f = o.trim || 0.42;
    const sx = x1 + (mx - x1) * f, sy = y1 + (my - y1) * f, ex = x2 + (mx - x2) * f, ey = y2 + (my - y2) * f;
    s += `<path d="M${sx},${sy} Q${mx},${my} ${ex},${ey}" fill="none" stroke="${o.color || C.tealDark}" stroke-width="4" marker-end="url(#${o.marker || 'ahT'})"/>`;
  }
  items.forEach((it, i) => {
    const [x, y] = pos[i], h = hs[i];
    s += `<rect x="${x - bw / 2}" y="${y - h / 2}" width="${bw}" height="${h}" rx="12" fill="${it.fill || C.panel}" stroke="${C.ink}" stroke-width="2.5"/>`;
    let yy = y - h / 2 + 13 + 18 * 0.85;
    if (it.head) { const hp = para(x, yy, bw - 24, it.head, { size: 18, weight: 700, anchor: 'middle' }); s += hp.svg; yy += hp.h + 4; }
    if (it.body) s += para(x, yy, bw - 24, it.body, { size, anchor: 'middle' }).svg;
  });
  if (o.center) s += para(cx, cy - (para(0, 0, o.cw || 200, o.center, { size: 18, weight: 700 }).h) / 2 + 15, o.cw || 200, o.center, { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark }).svg;
  return s;
}
// Vertical timeline: events [{date, head?, text, fill?}]; returns {svg, h}
function timeline(y, events, o = {}) {
  const dx = o.dx || 170, size = o.size || 17, gap = o.gap || 14, tx = dx + 40, tw = 870 - tx - 20; let s = '', yy = y;
  const rows = events.map((e) => { const hp = e.head ? para(0, 0, tw, e.head, { size: 18, weight: 700 }).h + 4 : 0; const bp = e.text ? para(0, 0, tw, e.text, { size }).h : 0; return Math.max(hp + bp + 26, 56); });
  const total = rows.reduce((a, b) => a + b + gap, -gap);
  s += `<line x1="${dx}" y1="${y + 10}" x2="${dx}" y2="${y + total - 10}" stroke="${C.ink}" stroke-width="4"/>`;
  events.forEach((e, i) => {
    const h = rows[i];
    s += `<rect x="${dx + 22}" y="${yy}" width="${870 - dx - 22}" height="${h}" rx="12" fill="${e.fill || C.panel}" stroke="${C.panelEdge}" stroke-width="2.5"/>`;
    s += `<circle cx="${dx}" cy="${yy + h / 2}" r="11" fill="${e.dot || C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
    s += para(dx - 22, yy + h / 2 + 6, dx - 40, e.date, { size: 18, weight: 700, anchor: 'end', fill: C.tealDark }).svg;
    const ch = (e.head ? para(0, 0, tw, e.head, { size: 18, weight: 700 }).h + 4 : 0) + (e.text ? para(0, 0, tw, e.text, { size }).h : 0);
    let ty = yy + (h - ch) / 2 + 18 * 0.98;
    if (e.head) { const hp = para(tx, ty, tw, e.head, { size: 18, weight: 700 }); s += hp.svg; ty += hp.h + 4; }
    if (e.text) s += para(tx, ty, tw, e.text, { size }).svg;
    yy += h + gap;
  });
  return { svg: s, h: total };
}
// Model-answer chain: steps [{tag, text}] shown as tagged rows; returns full svg
function answerFig(title, q, steps, o = {}) {
  let y = 104; let s = '';
  const qp = para(450, 0, 800, q, { size: 18, italic: true, anchor: 'middle' });
  s += para(450, y + 6, 800, q, { size: 18, italic: true, anchor: 'middle', fill: C.muted }).svg; y += qp.h + 20;
  const fills = [C.tealLight, C.teal, C.cream, C.mustard];
  steps.forEach((st, i) => {
    const bp = para(0, 0, 600, st.text, { size: 17 });
    const h = Math.max(bp.h + 30, 64);
    s += `<rect x="30" y="${y}" width="200" height="${h}" rx="12" fill="${st.fill || fills[i % 4]}" stroke="${C.ink}" stroke-width="2"/>`;
    const tp = para(0, 0, 176, st.tag, { size: 18, weight: 700 });
    s += para(130, y + (h - tp.h) / 2 + 18 * 0.95, 176, st.tag, { size: 18, weight: 700, anchor: 'middle' }).svg;
    s += panel(242, y, 628, h) + para(262, y + 15 + 17 * 0.95, 588, st.text, { size: 17 }).svg;
    y += h;
    if (i < steps.length - 1) { s += arrow(130, y + 3, 130, y + 27, { w: 3 }); y += 30; }
  });
  if (o.foot) { const f = note(y + 18, o.foot.head, o.foot.text); s += f.svg; y += f.h + 18; }
  return svg(900, Math.round(y + 26), esc(title), s, o.sub && esc(o.sub));
}
// ---- end extra helpers ----

// 01 Bryant's zoological connection
{
  let s = '', y = 110;
  const cx = 450, cy = y + 210;
  const areas = [['Work', 'farming, fishing, vets'], ['Crime', 'poaching, cruelty'], ['Family life', 'pets'], ['Religion', 'sacrifice, dietary rules'], ['Leisure', 'hunting, racing'], ['Social status', '']];
  areas.forEach(([h, b], i) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / 6, x = cx + 300 * Math.cos(a), yy = cy + 165 * Math.sin(a);
    s += `<line x1="${cx + 80 * Math.cos(a)}" y1="${cy + 55 * Math.sin(a)}" x2="${x - 100 * Math.cos(a) * 0.9}" y2="${yy - 34 * Math.sin(a)}" stroke="${C.tealDark}" stroke-width="3"/>`;
    s += `<rect x="${x - 110}" y="${yy - 34}" width="220" height="68" rx="12" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` + label(x, yy + (b ? -4 : 7), h, { size: 18, weight: 700, anchor: 'middle' }) + (b ? label(x, yy + 20, b, { size: 15, anchor: 'middle' }) : '');
  });
  s += `<ellipse cx="${cx}" cy="${cy}" rx="90" ry="58" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + label(cx, cy + 7, 'Animals', { size: 21, weight: 700, anchor: 'middle' });
  y += 430;
  const n = note(y, 'Bryant (1979): "The Zoological Connection"', 'Animals run through almost every area sociologists study; ignoring them leaves gaps in the study of human behaviour.');
  s += n.svg; y += n.h;
  add('01-zoological-connection', svg(900, y + 26, 'Animals run through social life', s),
    'Animals at the centre, linked to work, crime, family life, religion, leisure and social status, following Bryant’s argument that animals appear in almost every area sociologists study.',
    'Ignoring animals leaves gaps in the study of human behaviour.',
    '## Why animals are a sociological topic');
}

// 02 Sociozoologic scale
{
  let s = '', y = 110;
  s += `<rect x="60" y="${y}" width="56" height="380" rx="12" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2"/>`;
  s += arrow(88, y + 360, 88, y + 24, { w: 4 });
  s += label(140, y + 34, '“Good” animals: protected', { size: 19, weight: 700, fill: C.tealDark }) + label(140, y + 60, 'pets; useful "tools" such as working dogs', { size: 16 });
  s += label(140, y + 344, '“Bad” animals: killed with little concern', { size: 19, weight: 700, fill: C.rust }) + label(140, y + 370, '"vermin" that cross boundaries into homes', { size: 16 });
  const pos = [['Pet', 'in a child’s bedroom', y + 110, C.teal], ['Tool', 'in a laboratory', y + 190, C.tealLight], ['Vermin', 'in a kitchen', y + 270, C.cream]];
  for (const [h, b, yy, f] of pos) {
    s += `<rect x="480" y="${yy - 30}" width="370" height="60" rx="12" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + label(500, yy + 7, 'The rat as', { size: 17 }) + label(600, yy + 7, h, { size: 19, weight: 700 }) + label(690, yy + 7, b, { size: 16, fill: C.muted });
    s += `<line x1="130" y1="${yy}" x2="470" y2="${yy}" stroke="${C.panelEdge}" stroke-width="2" stroke-dasharray="6 6"/>`;
  }
  y += 400;
  const n = note(y, 'Arluke and Sanders (1996)', 'Societies rank animals by how well they fit human purposes. The same species moves up or down the scale by setting, so an animal’s status is socially constructed.');
  s += n.svg; y += n.h;
  add('02-sociozoologic-scale', svg(900, y + 26, 'The sociozoologic scale', s),
    'A vertical scale from good animals that are protected, such as pets and working dogs, to bad animals such as vermin that are killed. The rat appears as a pet in a bedroom, a tool in a laboratory and vermin in a kitchen.',
    'The same species can be pet, tool or vermin depending on setting.',
    '## Why animals are a sociological topic');
}

// 03 Views timeline
{
  let s = '', y = 110;
  const tl1 = timeline(y, [
    { date: '17th century', head: 'Descartes: animals as machines', text: 'Automata without minds; later used to justify use without moral concern', fill: C.cream },
    { date: '1789', head: 'Bentham: “Can they suffer?”', text: 'Not whether they can reason or talk; underpins welfare and Singer’s utilitarian case', fill: C.tealLight },
    { date: '1970', head: 'Ryder: speciesism', text: 'Discrimination based on species membership; made widely known by Singer', fill: C.teal },
  ], { dx: 170 });
  s += tl1.svg; y += tl1.h + 20;
  const n = note(y, 'Avoid ethnocentrism', 'Many religious traditions set rules for the treatment and slaughter of animals, and some regard certain animals as sacred: the Western "pet or meat" division is not universal.');
  s += n.svg; y += n.h;
  add('03-views-of-animals', svg(900, y + 26, 'Changing views of animals', s),
    'A timeline from Descartes’s view of animals as machines, through Bentham’s question “Can they suffer?” in 1789, to Ryder’s term speciesism in 1970, with a reminder that religious traditions vary.',
    'Thinking moved from animals as machines to animals as beings that suffer.',
    '## Views of humans and animals');
}

// 04 Welfare vs rights
{
  add('04-welfare-rights', versusFig('Welfare or rights?', {
    left: { head: 'Welfare', sub: 'Brambell Report (1965): the Five Freedoms', items: ['From hunger and thirst', 'From discomfort', 'From pain, injury or disease', 'To express normal behaviour', 'From fear and distress'] },
    right: { head: 'Rights', items: ['Rejects any use that treats animals merely as means', 'Includes humane farming', 'Welfare reforms make animal use more acceptable and so entrench it'] },
    foot: { head: 'Cruelty is socially defined', text: ['Martin’s Act (1822) against cruelty to cattle; the society now known as the RSPCA founded 1824', 'Bullfighting and some festivals: cruelty to critics, cultural heritage to supporters', 'Welfarists reply that reforms reduce suffering now'] },
  }),
    'The welfare view and the Five Freedoms from the Brambell Report set against the rights view that rejects any use of animals as means. A note shows cruelty is socially defined.',
    'Welfare reduces suffering now; rights theorists say it entrenches use.',
    '## Welfare, cruelty and rights');
}

// 05 Hidden slaughter
{
  let s = '', y = 110;
  const c = hchain(y, [
    { head: 'Living animal', fill: C.teal },
    { head: 'Killing hidden', body: 'divided into many tasks, out of sight', fill: C.cream },
    { head: 'Meat', body: 'separated from the living animal', fill: C.mustard },
  ], { ag: 44 });
  s += c.svg; y += c.h + 22;
  const r = cardRow(y, [
    { head: 'Noske (1989)', sub: 'animal-industrial complex', body: 'Farming, processing, pharmaceutical and retail interests treat animals as raw material.', fill: C.tealLight },
    { head: 'Elias (1939)', sub: 'The Civilizing Process', body: 'Carving whole animals at table moved “behind the scenes”.', fill: C.tealLight },
    { head: 'Pachirat (2011)', sub: '“politics of sight”', body: 'Undercover in a US slaughterhouse: killing hidden from consumers and most workers, so it is acceptable.', fill: C.tealLight },
  ], { size: 16, headSize: 18 });
  s += r.svg; y += r.h;
  add('05-hidden-slaughter', svg(900, y + 26, 'Keeping killing out of sight', s),
    'A chain from living animal through hidden killing to meat separated from the animal, explained by Noske’s animal-industrial complex, Elias’s civilizing process and Pachirat’s politics of sight.',
    'Industrial meat depends on hiding the killing.',
    '## Domestication, livestock and slaughter');
}

// 06 One Health
{
  let s = '', y = 110;
  const pts = [[450, y + 50, 'Human health', C.teal], [220, y + 290, 'Animal health', C.cream], [680, y + 290, 'Environmental health', C.tealLight]];
  s += `<path d="M450,${y + 80} L240,${y + 262} L660,${y + 262} Z" fill="none" stroke="${C.tealDark}" stroke-width="4" stroke-linejoin="round"/>`;
  for (const [x, yy, l, f] of pts) s += `<rect x="${x - 120}" y="${yy - 32}" width="240" height="64" rx="32" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + label(x, yy + 7, l, { size: 19, weight: 700, anchor: 'middle' });
  s += label(450, y + 205, 'One Health', { size: 22, weight: 700, anchor: 'middle', fill: C.tealDark }) + label(450, y + 232, 'treated as linked', { size: 16, anchor: 'middle' });
  y += 350;
  const r = cardRow(y, [
    { head: 'Drivers of zoonoses', body: ['Deforestation', 'Wildlife trade', 'Intensive farming crowding animals', 'Urban growth into forest edges'], fill: C.cream },
    { head: 'Cases', body: ['**Nipah** (Malaysia, 1998–99): fruit bats to pigs to pig farmers', '**Ebola** (West Africa, 2014–16): spread through cities with weak health systems', '**Antimicrobial resistance:** antibiotics in livestock'], fill: C.cream },
  ]);
  s += r.svg; y += r.h;
  add('06-one-health', svg(900, y + 26, 'Animals and human health', s),
    'The One Health triangle links human, animal and environmental health. Cards list drivers of zoonoses such as deforestation and wildlife trade, and cases: Nipah, Ebola and antimicrobial resistance.',
    'Zoonoses arise where people, livestock and wildlife meet.',
    '## Animals and human health');
}

// 07 Countering biodiversity loss
{
  add('07-conservation-debates', compareFig('Countering biodiversity loss: debates', {
    cols: [{ head: 'Example', fill: C.tealLight }, { head: 'Criticism', fill: C.cream }],
    labelW: 180, size: 16,
    rows: [
      { label: 'Protected areas and trade rules', fill: C.teal, cells: ['CITES (1973) regulates trade in endangered species; protected areas such as Mkomazi, Tanzania', 'Brockington (2002): "fortress conservation" evicts pastoralists; costs fall on the rural poor'] },
      { label: 'Zoos and reintroduction', fill: C.teal, cells: ['Arabian oryx: extinct in the wild by the early 1970s, reintroduced to Oman in 1982', 'Only a small share of zoo species are in such programmes'] },
      { label: 'De-extinction', fill: C.teal, cells: ['Pyrenean ibex cloned in 2003; the kid died minutes after birth', 'Diverts money from living species; is a clone the same species?'] },
    ],
    foot: { head: 'Causes of loss to cite', text: 'Dodo (late 17th century); passenger pigeon (1914); megafauna "overkill" or climate; Newfoundland cod moratorium (1992); Nile perch in Lake Victoria.' },
  }),
    'Three responses to biodiversity loss compared with their criticisms: protected areas and CITES versus Brockington’s fortress conservation, zoo reintroduction of the Arabian oryx, and de-extinction of the Pyrenean ibex.',
    'Each way of saving species has costs and critics.',
    '## Countering biodiversity loss: debates');
}

// 08 3Rs
{
  let s = '', y = 110;
  const c = hchain(y, [
    { head: 'Replace', body: 'animals where possible', fill: C.teal },
    { head: 'Reduce', body: 'the numbers used', fill: C.teal },
    { head: 'Refine', body: 'methods to reduce suffering', fill: C.teal },
  ], { arrows: false, ag: 20, size: 17 });
  s += c.svg; y += c.h + 10;
  s += label(450, y + 18, 'Russell and Burch (1959): the 3Rs of animal experimentation', { size: 16, italic: true, anchor: 'middle', fill: C.muted });
  y += 40;
  const t2 = timeline(y, [
    { date: '1996', text: 'Dolly the sheep cloned at the Roslin Institute: adult cells can clone mammals' },
    { date: '2013', text: 'EU bans marketing of cosmetics tested on animals', fill: C.cream },
    { date: '2015', text: 'US regulators approve a genetically modified salmon for food' },
  ], { dx: 120 });
  s += t2.svg; y += t2.h;
  add('08-three-rs', svg(900, y + 26, 'Biotechnology and experimentation', s),
    'Russell and Burch’s 3Rs: replace, reduce and refine. Below, Dolly the sheep in 1996, the EU cosmetics testing ban from 2013 and approval of genetically modified salmon in 2015.',
    'Replace, reduce, refine: the rules for animal experiments.',
    '## Biotechnology, genomics and experimentation');
}
