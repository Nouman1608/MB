import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-english-literature-9275-poetry-route-b';
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

// 01 Paper 2b at a glance
{
  let s = '', y = 120;
  const x0 = 60, W = 780, px = W / 90;
  s += label(450, y, 'Paper 2b: Poetry (Route B), 1 hour 30 minutes, open book, 60 marks = 40% of the qualification', { size: 17, weight: 600, anchor: 'middle' });
  y += 20;
  s += `<rect x="${x0}" y="${y}" width="${45 * px}" height="90" rx="12" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + label(x0 + 22.5 * px, y + 38, 'Section A: Poetry', { size: 20, weight: 700, anchor: 'middle' }) + label(x0 + 22.5 * px, y + 66, 'People and Places, 1 of 2 questions', { size: 16, anchor: 'middle' });
  s += `<rect x="${x0 + 45 * px}" y="${y}" width="${45 * px}" height="90" rx="12" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` + label(x0 + 67.5 * px, y + 38, 'Section B: Unseen poetry', { size: 20, weight: 700, anchor: 'middle' }) + label(x0 + 67.5 * px, y + 66, 'one previously unseen poem', { size: 16, anchor: 'middle' });
  y += 100;
  s += label(x0 + 22.5 * px, y + 20, '30 marks · about 45 minutes', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark }) + label(x0 + 67.5 * px, y + 20, '30 marks · about 45 minutes', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  y += 50;
  s += label(30, y + 4, 'What the marks reward on Paper 2b', { size: 19, weight: 700 }); y += 18;
  const segs = [['AO1', 40, 'themes, ideas and contexts', C.teal], ['AO2', 40, 'how writers create meanings and effects', C.tealLight], ['AO3', 20, 'personal response, terminology, accurate writing', C.cream]];
  let xx = 30;
  segs.forEach(([a, p, d, f]) => {
    const w = 840 * p / 100;
    s += `<rect x="${xx}" y="${y}" width="${w}" height="150" rx="10" fill="${f}" stroke="${C.ink}" stroke-width="2"/>` + label(xx + w / 2, y + 32, `${a}: about ${p}%`, { size: 19, weight: 700, anchor: 'middle' }) + para(xx + w / 2, y + 62, w - 24, d, { size: 16, anchor: 'middle' }).svg;
    xx += w;
  });
  y += 168;
  const n = note(y, 'Two consequences', ['Ideas and methods are equally weighted: a paragraph on only technique, or only theme, does half the job', 'Context sits inside AO1, so it earns credit only when it deepens what you say about the poem’s ideas']);
  s += n.svg; y += n.h;
  add('01-paper-2b', svg(900, y + 26, 'Paper 2b at a glance', s),
    'Paper 2b lasts 90 minutes for 60 marks: Section A on the People and Places anthology and Section B on an unseen poem, 30 marks and about 45 minutes each. Within the paper, AO1 and AO2 are each about 40% and AO3 about 20%.',
    'Two equal sections, and ideas and methods weighted equally.',
    '## Paper 2b at a glance');
}

// 02 Theme grid
{
  let s = '', y = 110;
  const cols = ['Poem 1', 'Poem 2', 'Poem 3'], rows = [
    ['Belonging', ['Speaker feels outside; first-person, hesitant tone', '—', 'Collective "we"; celebratory']],
    ['Memory', ['Present tense makes the past vivid', 'Fragmented stanzas mirror forgetting', '—']],
    ['Power of a place', ['—', 'Landscape personified as a threat', 'Place as refuge; gentle imagery']],
  ];
  const lw = 170, cw = (840 - lw - 24) / 3;
  cols.forEach((c, i) => { const x = 30 + lw + 8 + i * (cw + 8); s += `<rect x="${x}" y="${y}" width="${cw}" height="46" rx="10" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + label(x + cw / 2, y + 30, c, { size: 18, weight: 700, anchor: 'middle' }); });
  y += 54;
  rows.forEach(([t1, cells], ri) => {
    const h = 86;
    s += `<rect x="30" y="${y}" width="${lw}" height="${h}" rx="10" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>` + para(30 + lw / 2, y + h / 2 + 6, lw - 20, t1, { size: 18, weight: 700, anchor: 'middle' }).svg;
    cells.forEach((c, i) => {
      const x = 30 + lw + 8 + i * (cw + 8), hl = (ri === 0 && (i === 0 || i === 2));
      s += `<rect x="${x}" y="${y}" width="${cw}" height="${h}" rx="10" fill="${hl ? C.tealLight : C.panel}" stroke="${hl ? C.tealDark : C.panelEdge}" stroke-width="${hl ? 3 : 2}"/>`;
      const p = para(0, 0, cw - 24, c, { size: 16 });
      s += para(x + cw / 2, y + (h - p.h) / 2 + 16 * 0.95, cw - 24, c, { size: 16, anchor: 'middle', fill: c === '—' ? C.muted : C.ink }).svg;
    });
    y += h + 8;
  });
  s += label(450, y + 16, 'highlighted: a contrasting pair within one theme (outside vs collective "we")', { size: 15, italic: true, anchor: 'middle', fill: C.tealDark });
  y += 36;
  const n = note(y, 'Three habits', ['Every poem appears under at least two themes', 'Each cell names a **method**, not just a feeling', 'Mark the pairs that **contrast** within a theme', 'Use real anthology titles in your own grid']);
  s += n.svg; y += n.h;
  add('02-theme-grid', svg(900, y + 26, 'Building a theme grid', s, 'themes down the side, poems across the top, a method in each cell'),
    'A grid with themes (belonging, memory, power of a place) down the side and three poems across the top; each cell notes how the poem treats the theme, and a contrasting pair on belonging is highlighted. Three habits for using the grid follow.',
    'A grid of themes and methods prepares you for any pairing question.',
    '## Building a theme grid');
}

// 03 Form questions
{
  add('03-form', compareFig('Writing precisely about form', {
    sub: 'link the shape of the poem to its meaning',
    cols: [{ head: 'Recognise', fill: C.tealLight }, { head: 'Then ask', fill: C.cream }],
    labelW: 0, size: 16,
    rows: [
      { label: '', cells: ['**Sonnet:** fourteen lines, often with a turn (volta)', 'What changes at the turn, and why compress the idea into such a tight space?'] },
      { label: '', cells: ['**Dramatic monologue:** a single speaker, not the poet, addressing a listener', 'What does the speaker reveal without meaning to?'] },
      { label: '', cells: ['**Free verse:** no regular metre or rhyme', 'Does the freedom suit a speech-like voice, a restless mind or a break from tradition?'] },
      { label: '', cells: ['**Regular stanzas and rhyme**', 'Does the order support the meaning (stability, ritual) or work against it (a cheerful pattern, a painful subject)?'] },
      { label: '', cells: ['**Line length and enjambment**', 'Where does the poem speed up, slow down or pause, and what does the reader feel there?'] },
    ],
    foot: { head: 'Too general', text: '"The poem has four stanzas" earns nothing until it is linked to meaning.' },
  }),
    'Five forms to recognise, sonnet, dramatic monologue, free verse, regular stanzas and rhyme, and line length and enjambment, each paired with the question to ask about how it shapes meaning.',
    'A form comment earns credit when it explains what the shape does.',
    '## Writing precisely about form');
}

// 04 Context
{
  add('04-context', versusFig('Using context well', {
    left: { head: 'Works well', items: ['A single sentence that explains a choice in the poem', 'Sits inside AO1, deepening what you say about ideas', 'e.g. "Writing as someone who has migrated, the poet presents the old home through present-tense memories, so it stays alive rather than lost."'] },
    right: { head: 'Works badly', items: ['A paragraph of biography before any analysis', 'Context that does not connect to the poem’s ideas'] },
    foot: { head: 'Context includes', text: 'When and where a poem was written, the situation it describes, and the experiences that shape its ideas.' },
  }),
    'Context works well as a single sentence explaining a choice in the poem, illustrated by the guide’s example about a migrant poet’s present-tense memories, and badly as a paragraph of biography before analysis.',
    'Use context to explain a choice, not to fill a paragraph.',
    '## Using context well');
}

// 05 Comparison X and Y
{
  let s = '', y = 110;
  const r = cardRow(y, [
    { head: 'Extract X', body: '"You think this hill is nothing. Walk it, then, / at five, with forty kilos on your back."', fill: C.teal },
    { head: 'Extract Y', body: '"The surveyor looks at the hill / through a lens, and writes it down as a number."', fill: C.cream },
  ], { size: 17 });
  s += r.svg; y += r.h + 6;
  s += label(450, y + 16, 'original lines written for the guide, not anthology poems', { size: 15, italic: true, anchor: 'middle', fill: C.muted });
  y += 30;
  s += `<rect x="30" y="${y}" width="840" height="74" rx="12" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + para(450, y + 30, 760, 'Shared idea (AO1): a gap between how outsiders and insiders understand a landscape', { size: 17, weight: 700, anchor: 'middle' }).svg;
  y += 86;
  const rows = [
    ['Voice', 'Dramatic monologue addressing "you": the reader becomes the outsider being challenged', 'Detached third-person observer'],
    ['Method', 'Imperative "Walk it, then"; blunt time "at five"; "forty kilos"', 'The lens and the "number"; plain, unemotional syntax'],
    ['Effect', 'The hill is a daily burden, known through labour and the body’s effort', 'The hill becomes data, mirroring the surveyor’s distance'],
    ['Tone', 'Anger', 'Irony'],
  ];
  const lw = 120, cw = (840 - lw - 16) / 2;
  rows.forEach(([l, a, b]) => {
    const pa = para(0, 0, cw - 28, a, { size: 16 }).h, pb = para(0, 0, cw - 28, b, { size: 16 }).h, h = Math.max(pa, pb) + 28;
    s += `<rect x="30" y="${y}" width="${lw}" height="${h}" rx="10" fill="${C.tealLight}" stroke="${C.olive}" stroke-width="2"/>` + label(30 + lw / 2, y + h / 2 + 6, l, { size: 17, weight: 700, anchor: 'middle' });
    s += panel(30 + lw + 8, y, cw, h) + para(30 + lw + 22, y + 14 + 16 * 0.95, cw - 28, a, { size: 16 }).svg;
    s += panel(30 + lw + 16 + cw, y, cw, h) + para(30 + lw + 30 + cw, y + 14 + 16 * 0.95, cw - 28, b, { size: 16 }).svg;
    y += h + 8;
  });
  y += 8;
  const n = note(y, 'Judgement (AO3)', 'Both poems criticise the outsider’s view, one with anger and one with irony. Comparative connectives such as "by contrast" and "whereas" build the personal argument.');
  s += n.svg; y += n.h;
  add('05-compare-voice-form', svg(900, y + 26, 'Comparing voice and form', s),
    'The guide’s two original extracts about a hill compared: both show a gap between outsiders and insiders, but Extract X uses a challenging dramatic monologue and the body’s effort, while Extract Y uses a detached observer and the language of measurement, giving anger against irony.',
    'One shared idea, then voice, method and effect compared side by side.',
    '## Worked example: comparing voice and form');
}

// 06 Planning 45 minutes
{
  let s = '', y = 130;
  const steps = [['Choose', 2, C.tealLight], ['Annotate', 5, C.teal], ['Argue', 3, C.cream], ['Write', 30, C.mustard], ['Check', 5, C.tealLight]];
  const px = 840 / 45; let x = 30;
  steps.forEach(([n, m, f]) => {
    const w = m * px;
    s += `<rect x="${x}" y="${y}" width="${w}" height="64" fill="${f}" stroke="${C.ink}" stroke-width="2"/>`;
    if (w > 80) s += label(x + w / 2, y + 30, n, { size: 18, weight: 700, anchor: 'middle' }) + label(x + w / 2, y + 52, `${m} min`, { size: 15, anchor: 'middle' });
    else s += label(x + w / 2, y + 40, String(m), { size: 15, weight: 700, anchor: 'middle' });
    x += w;
  });
  s += label(30, y - 12, 'Section A: about 45 minutes', { size: 16, weight: 600, fill: C.muted });
  y += 84;
  add('06-planning-45', flowFig('Planning your 45 minutes', {
    y0: y,
    steps: [
      { head: 'Choose (2 minutes)', body: 'Read both questions; pick the one where your grid gives a strong contrasting pair.' },
      { head: 'Annotate (5 minutes)', body: 'Mark four or five short quotations in each poem, including one about form or structure.' },
      { head: 'Argue (3 minutes)', body: 'Write a one-sentence argument covering both poems.' },
      { head: 'Write (30 minutes)', body: 'Three or four comparative paragraphs.' },
      { head: 'Check (5 minutes)', body: 'Make sure every paragraph mentions both poems.' },
    ],
  }).replace('<rect width="900"', s ? '<rect width="900"' : '').replace(/(<text x="450" y="56"[^>]*>[^<]*<\/text>)/, `$1${s}`),
    'A 45-minute bar and five steps for the anthology question: choose (2 minutes), annotate (5), argue in one sentence (3), write three or four comparative paragraphs (30) and check every paragraph mentions both poems (5).',
    'Most of the time goes on writing, but the first ten minutes decide the argument.',
    '## Planning your 45 minutes');
}
