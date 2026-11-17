import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-a-level-sociology-9690-digital-technologies';
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
    let ty = yy + 13 + 18 * 0.9;
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

// 01 Magic circle
{
  let s = '';
  s += `<rect x="30" y="110" width="840" height="420" rx="14" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2.5"/>`;
  s += label(60, 148, 'Everyday life', { size: 20, weight: 700, fill: C.muted });
  s += `<circle cx="450" cy="310" r="125" fill="${C.teal}" stroke="${C.ink}" stroke-width="3" stroke-dasharray="12 8"/>`;
  s += para(450, 292, 200, 'The game’s “magic circle”', { size: 20, weight: 700, anchor: 'middle' }).svg + label(450, 352, 'its own rules', { size: 16, anchor: 'middle' });
  const items = [[150, 200, 'Friendships'], [750, 200, 'Money'], [150, 420, 'Identity'], [750, 420, 'Work: paid “boosting”, esports']];
  for (const [x, y, s2] of items) {
    const w = 210, p = para(x, 0, w - 20, s2, { size: 17, weight: 600, anchor: 'middle' });
    s += `<rect x="${x - w / 2}" y="${y - 30}" width="${w}" height="${p.h + 36}" rx="12" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` + para(x, y - 30 + 18 + 17 * 0.95, w - 20, s2, { size: 17, weight: 600, anchor: 'middle' }).svg;
    const bh = p.h + 36, cx2 = x < 450 ? x + 105 : x - 105, cy2 = y < 310 ? y - 30 + bh : y - 30;
    const vx = cx2 - 450, vy = cy2 - 310, L = Math.hypot(vx, vy), ux = vx / L, uy = vy / L;
    s += `<line x1="${450 + ux * 133}" y1="${310 + uy * 133}" x2="${cx2 - ux * 8}" y2="${cy2 - uy * 8}" stroke="${C.tealDark}" stroke-width="3.5" marker-start="url(#ahT)" marker-end="url(#ahT)"/>`;
  }
  s += para(450, 500, 760, 'Huizinga (Homo Ludens, 1938): play happens inside a magic circle separate from ordinary life. Online games stretch it.', { size: 16, anchor: 'middle', fill: C.muted, italic: true }).svg;
  const n = note(550, 'Sociological themes', ['**Community and identity:** guilds, clans, streams; experimenting with avatars', '**Gender:** Gamergate (2014), harassment of women; a hobby space defended as male territory', '**Commercialisation:** loot boxes examined by some regulators as possible gambling', '**Moral panics:** games blamed after Columbine (1999); research on violence remains contested']);
  s += n.svg;
  add('01-magic-circle', svg(900, 550 + n.h + 26, 'Online games stretch the magic circle', s),
    'Huizinga’s magic circle of play, with friendships, money, identity and work crossing between online games and everyday life. A note lists themes: community, Gamergate, loot boxes and moral panics after Columbine.',
    'In online games, friendships, money, identity and work cross the boundary of play.',
    '## Digital and online games');
}

// 02 Traditional media adapt
{
  add('02-media-adapt', cardsFig('How traditional media adapt', {
    ncol: 2, size: 16,
    cards: [
      { head: 'Convergence', sub: 'Jenkins', body: 'Content flows across platforms: one story as print, video, podcast and social post.', fill: C.teal },
      { head: 'The long tail', sub: 'Anderson (2006)', body: 'Online shops and streaming profit from huge numbers of niche products because storage and distribution are cheap.', fill: C.teal },
      { head: 'Schedules to on demand', sub: 'iPlayer and Netflix streaming, 2007', body: 'Audiences choose when to watch, weakening shared national viewing moments.', fill: C.cream },
      { head: 'Business model change', sub: 'advertising moves to search and social', body: 'Newspapers rely more on subscriptions, memberships and paywalls.', fill: C.cream },
    ],
    foot: { head: 'Who wins and who loses?', text: 'Some traditional brands stay powerful; local newspapers in many countries have closed, reducing reporting on local government.' },
  }),
    'Four adaptations: convergence across platforms, Anderson’s long tail, the move from schedules to on-demand viewing in 2007, and newspapers shifting from advertising to subscriptions and paywalls.',
    'Adaptation keeps big brands strong while local news shrinks.',
    '## How \'traditional\' media adapt to the digital age');
}

// 03 Healthism chain
{
  let s = '', y = 110;
  const c = hchain(y, [
    { head: 'Fitness tracking', body: 'Quantified Self movement (Wolf and Kelly, 2007)', fill: C.teal },
    { head: 'Healthism', body: 'health as individual responsibility (Crawford, 1980)', fill: C.cream },
    { head: 'Blame', body: 'ill or inactive people are blamed', fill: C.cream },
    { head: 'Social causes ignored', body: 'poverty, work conditions', fill: C.mustard },
  ], { ag: 34 });
  s += c.svg; y += c.h + 20;
  const r = cardRow(y, [
    { head: 'Biopower (Foucault)', body: 'Institutions manage populations through knowledge about bodies; self-tracking makes individuals managers of their own data.', fill: C.tealLight },
    { head: 'Gamification', body: 'Streaks in language apps; ratings and badges for gig drivers. Critics: turns pressure into "play" and hides control.', fill: C.tealLight },
  ]);
  s += r.svg; y += r.h + 18;
  const n = note(y, 'Evaluation', 'Tracking can motivate and inform, especially for long-term conditions. The questions are who owns the data and whether insurers or employers use it to sort people.');
  s += n.svg; y += n.h;
  add('03-healthism', svg(900, y + 26, 'Self-tracking and healthism', s),
    'A chain from fitness tracking to healthism, blaming ill or inactive people, and ignoring social causes such as poverty. Cards add Foucault’s biopower and gamification at work.',
    'Self-tracking can turn health into a personal duty and hide its social causes.',
    '## Health, fitness, quantification and gamification');
}

// 04 Surveillant assemblage
{
  let s = '', y = 110;
  s += panel(30, y, 840, 330);
  s += label(60, y + 38, 'Surveillant assemblage (Haggerty and Ericson, 2000)', { size: 19, weight: 700 });
  const src = ['Cards', 'Phones', 'Cameras', 'Online activity'];
  src.forEach((x, i) => {
    const yy = y + 70 + i * 62;
    s += `<rect x="60" y="${yy}" width="190" height="48" rx="10" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2"/>` + label(155, yy + 31, x, { size: 17, weight: 600, anchor: 'middle' });
    s += arrow(254, yy + 24, 352, y + 190, { color: C.tealDark, marker: 'ahT', w: 3 });
  });
  s += `<rect x="358" y="${y + 140}" width="180" height="100" rx="14" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + label(448, y + 185, '“Data double”', { size: 19, weight: 700, anchor: 'middle' }) + label(448, y + 210, 'of the individual', { size: 16, anchor: 'middle' });
  s += arrow(542, y + 190, 612, y + 190, { w: 3.5 });
  s += `<rect x="618" y="${y + 70}" width="230" height="240" rx="12" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/>`;
  s += label(733, y + 100, 'Social sorting', { size: 18, weight: 700, anchor: 'middle' }) + label(733, y + 122, 'Lyon (2003)', { size: 15, anchor: 'middle', fill: C.muted });
  s += tl(733, y + 160, ['risky or safe?', 'profitable or not?'], { size: 17, anchor: 'middle', weight: 600, fill: C.olive }, 28);
  s += para(733, y + 240, 200, 'categories shape people’s chances', { size: 16, anchor: 'middle' }).svg;
  y += 350;
  const r = cardRow(y, [
    { head: 'State', body: 'Snowden (2013): mass collection of communications data by the NSA and partners.', fill: C.teal },
    { head: 'Sousveillance', body: 'Mann: watching from below, as when citizens film police.', fill: C.teal },
    { head: 'Everyday', body: 'Keystroke monitoring, parents tracking phones, smart doorbells.', fill: C.teal },
  ], { size: 16, headSize: 18 });
  s += r.svg; y += r.h + 18;
  const n = note(y, 'Evaluation', ['**Supporters:** crime prevention and safety', '**Critics:** chilling effect on free expression; unequal targeting of minorities and poorer areas; "nothing to hide" ignores later misuse']);
  s += n.svg; y += n.h;
  add('04-surveillance', svg(900, y + 26, 'Beyond the watchtower', s),
    'Scattered data from cards, phones, cameras and online activity combine into a data double that is sorted into categories such as risky or safe. Cards show state surveillance, sousveillance and everyday surveillance.',
    'Surveillance now combines scattered data into data doubles that sort people.',
    '## Surveillance');
}

// 05 Routine activity theory online
{
  let s = '', y = 110;
  const items = [
    { head: 'Motivated offender', x: 170, fill: C.cream },
    { head: 'Suitable target', x: 450, fill: C.cream, body: 'online: plentiful' },
    { head: 'No capable guardian', x: 730, fill: C.cream, body: 'online: guardians scarce' },
  ];
  for (const it of items) {
    s += `<rect x="${it.x - 125}" y="${y}" width="250" height="100" rx="14" fill="${it.fill}" stroke="${C.ink}" stroke-width="2.5"/>` + label(it.x, y + (it.body ? 44 : 58), it.head, { size: 19, weight: 700, anchor: 'middle' });
    if (it.body) s += label(it.x, y + 74, it.body, { size: 17, anchor: 'middle', fill: C.tealDark, weight: 600 });
    s += arrow(it.x, y + 104, 450 + (it.x - 450) * 0.3, y + 172, { w: 3.5 });
  }
  s += label(310, y + 52 + 6, '+', { size: 30, weight: 700, anchor: 'middle' }) + label(590, y + 52 + 6, '+', { size: 30, weight: 700, anchor: 'middle' });
  s += `<rect x="330" y="${y + 178}" width="240" height="60" rx="14" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + label(450, y + 216, 'Crime occurs', { size: 20, weight: 700, anchor: 'middle' });
  s += label(450, y + 268, 'Yar (2006) applies routine activity theory online', { size: 16, italic: true, anchor: 'middle', fill: C.muted });
  y += 290;
  const r = cardRow(y, [
    { head: 'Ransomware', body: 'WannaCry (2017) disrupted parts of England’s NHS.', fill: C.teal },
    { head: 'Attacks on states', body: 'Estonia (2007): government, bank and media sites.', fill: C.teal },
    { head: 'Hacking', body: 'Criminal, "ethical" (paid by firms) or hacktivism (Anonymous).', fill: C.teal },
  ], { size: 16, headSize: 18 });
  s += r.svg; y += r.h + 18;
  const n = note(y, 'Measurement', 'Victims often do not report, so official figures understate cybercrime.');
  s += n.svg; y += n.h;
  add('05-routine-activity', svg(900, y + 26, 'Why the internet suits crime', s),
    'Routine activity theory: a motivated offender, a suitable target and no capable guardian produce crime; online, targets are plentiful and guardians scarce. Cases: WannaCry, Estonia 2007 and types of hacking.',
    'Online, suitable targets are many and capable guardians few.',
    '## Cybercrimes, cyber security and hacking');
}

// 06 Levels of the digital divide
{
  let s = '', y = 110;
  const steps = [
    ['First level', 'Access to devices and connections', C.tealLight],
    ['Second level', 'Skills and ways of using the internet (Hargittai, 2002)', C.teal],
    ['Third level', 'Unequal outcomes: some turn online activity into jobs, savings or health benefits', C.mustard],
  ];
  steps.forEach(([h, b], i) => {});
  const sw = 270, sh = 80;
  steps.forEach(([h, b, f], i) => {
    const x = 30 + i * (sw + 15), top = y + (2 - i) * 70, hh = 300 - (2 - i) * 70;
    s += `<rect x="${x}" y="${top}" width="${sw}" height="${hh}" rx="12" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += label(x + sw / 2, top + 36, h, { size: 20, weight: 700, anchor: 'middle' });
    s += para(x + sw / 2, top + 70, sw - 30, b, { size: 17, anchor: 'middle' }).svg;
  });
  y += 320;
  const r = cardRow(y, [
    { head: 'van Dijk (2005): four types of access', body: ['Motivational (wanting to use it)', 'Material', 'Skills', 'Usage'], fill: C.cream },
    { head: 'Patterns and a case', body: ['Income, age, rural or urban, disability, gender', 'Many low- and middle-income countries: women less likely to own a phone or use mobile internet', 'COVID-19 school closures: children without devices, data or quiet space fell behind'], fill: C.cream },
  ]);
  s += r.svg; y += r.h;
  add('06-digital-divide', svg(900, y + 26, 'Three levels of the digital divide', s),
    'Three rising steps: first-level access, second-level skills and use (Hargittai), and third-level unequal outcomes. Cards add van Dijk’s four types of access, patterns by income, age, location, disability and gender, and the COVID-19 school closures.',
    'The divide is about skills and outcomes, not only access.',
    '## Digital divides in depth');
}
