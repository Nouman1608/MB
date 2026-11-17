import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-a-level-sociology-9690-social-control';
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

// 01 Sanctions grid
{
  let s = '', y = 110;
  const cw = 330, lw = 160, x1 = 30 + lw + 10, x2 = x1 + cw + 10, rh = 130;
  s += `<rect x="${x1}" y="${y}" width="${cw}" height="56" rx="12" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + label(x1 + cw / 2, y + 36, 'Positive (reward)', { size: 19, weight: 700, anchor: 'middle' });
  s += `<rect x="${x2}" y="${y}" width="${cw}" height="56" rx="12" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/>` + label(x2 + cw / 2, y + 36, 'Negative (punishment)', { size: 19, weight: 700, anchor: 'middle' });
  y += 66;
  const rows = [
    ['Formal', 'official authority, written rules', ['Award, promotion, certificate', 'Reduced sentence for good behaviour'], ['Fine, imprisonment', 'School suspension, dismissal']],
    ['Informal', 'everyday relationships, unwritten norms', ['Praise, smiles', 'Likes on a post, acceptance by friends'], ['Gossip, ridicule', 'Ignoring someone, ostracism']],
  ];
  rows.forEach(([h, sub, a, b]) => {
    s += `<rect x="30" y="${y}" width="${lw}" height="${rh}" rx="12" fill="${C.tealLight}" stroke="${C.olive}" stroke-width="2"/>` + label(30 + lw / 2, y + 50, h, { size: 20, weight: 700, anchor: 'middle' }) + para(30 + lw / 2, y + 78, lw - 20, sub, { size: 15, anchor: 'middle', fill: C.muted }).svg;
    s += panel(x1, y, cw, rh) + bullets(x1 + 18, y + 44, cw - 36, a, { size: 17 }).svg;
    s += panel(x2, y, cw, rh) + bullets(x2 + 18, y + 44, cw - 36, b, { size: 17, dot: C.olive }).svg;
    y += rh + 10;
  });
  y += 8;
  const r = cardRow(y, [
    { head: 'Informal agencies', body: 'Families, schools, peers, media, religion, workplace', fill: C.tealLight },
    { head: 'Formal agencies', body: 'Government and laws; police and enforcement agencies; criminal justice system', fill: C.cream },
  ], { size: 16 });
  s += r.svg; y += r.h;
  add('01-sanctions-grid', svg(900, y + 26, 'Formal and informal sanctions', s),
    'A two-by-two grid: formal positive sanctions such as awards, formal negative sanctions such as fines and prison, informal positive sanctions such as praise, and informal negative sanctions such as gossip and ostracism. Agencies of each type are listed below.',
    'Cross formal and informal with reward and punishment to generate examples.',
    '## Formal and informal control, and sanctions');
}

// 02 Stigma and othering
{
  let s = '', y = 110;
  s += label(30, y + 4, 'Goffman, Stigma (1963): three types', { size: 19, weight: 700 }); y += 20;
  const r = hchain(y, [
    { head: 'Physical differences', fill: C.cream },
    { head: 'Perceived flaws of character', body: 'e.g. a criminal record', fill: C.cream },
    { head: '“Tribal” stigma', body: 'race, nation or religion', fill: C.cream },
  ], { arrows: false, ag: 16, size: 16 });
  s += r.svg; y += r.h + 14;
  const v = cardRow(y, [
    { head: 'Discredited', body: 'stigma is visible', fill: C.teal },
    { head: 'Discreditable', body: 'can hide it, so must manage information about themselves', fill: C.tealLight },
  ], { size: 16 });
  s += v.svg; y += v.h + 10;
  s += label(450, y + 18, 'Stigma: an attribute that is "deeply discrediting"; fear of it deters deviance', { size: 16, italic: true, anchor: 'middle', fill: C.muted });
  y += 44;
  s += label(30, y + 4, 'Othering', { size: 20, weight: 700 }); y += 20;
  const c = hchain(y, [
    { head: 'Define a group as different and inferior', body: 'Said (1978): "the East"; Cohen (1972): Mods and Rockers as folk devils', fill: C.cream },
    { head: 'Harsher treatment legitimised', body: 'by police, courts and the public', fill: C.mustard },
  ], { ag: 50, size: 16 });
  s += c.svg; y += c.h;
  add('02-stigma-othering', svg(900, y + 26, 'Stigma and othering', s),
    'Goffman’s three types of stigma (physical differences, perceived flaws of character and tribal stigma) and his distinction between the discredited and the discreditable. Othering, shown by Said and Cohen, legitimises harsher treatment.',
    'Stigma and othering control people by marking them as less than whole.',
    '## Stigmatised identities and othering');
}

// 03 Aims of punishment
{
  add('03-punishment-aims', compareFig('Six aims of punishment', {
    cols: [{ head: 'Meaning', fill: C.tealLight }, { head: 'Typical forms', fill: C.cream }],
    labelW: 170, size: 16,
    rows: [
      { label: 'Retribution', fill: C.teal, cells: ['Punishment in proportion to the harm done', 'Prison terms matched to seriousness'] },
      { label: 'Deterrence', fill: C.teal, cells: ['Discourage the offender (individual) and others (general)', 'Visible, certain punishment'] },
      { label: 'Incapacitation', fill: C.teal, cells: ['Remove the ability to offend', 'Imprisonment, driving bans; in some states the death penalty'] },
      { label: 'Rehabilitation', fill: C.teal, cells: ['Change the offender so they do not reoffend', 'Education, therapy, drug treatment'] },
      { label: 'Reparation / restorative', fill: C.teal, cells: ['Repair harm, often by meeting victims', 'Community payback, victim-offender conferences'] },
      { label: 'Denunciation', fill: C.teal, cells: ['Express society’s disapproval', 'Public sentencing, criminal record'] },
    ],
  }),
    'A grid of six aims of punishment, retribution, deterrence, incapacitation, rehabilitation, reparation and denunciation, each with its meaning and typical forms.',
    'Each aim of punishment implies a different kind of sentence.',
    '## Aims and types of punishment');
}

// 04 Durkheim and Foucault
{
  let s = '', y = 110;
  const c = hchain(y, [
    { head: 'Repressive law', body: 'simpler societies: punishes', fill: C.cream },
    { head: 'Restitutive law', body: 'complex societies: restores things to how they were', fill: C.teal },
  ], { ag: 60, size: 17 });
  s += label(30, y - 6, '', {});
  s += c.svg; y += c.h + 8;
  s += label(450, y + 18, 'Durkheim: punishment reaffirms the collective conscience', { size: 16, italic: true, anchor: 'middle', fill: C.muted });
  y += 46;
  const c2 = hchain(y, [
    { head: 'Sovereign power', body: 'public bodily punishment', fill: C.cream },
    { head: 'Disciplinary power', body: 'surveillance and self-discipline', fill: C.teal },
  ], { ag: 60, size: 17 });
  s += c2.svg; y += c2.h + 8;
  s += label(450, y + 18, 'Foucault, Discipline and Punish (1975)', { size: 16, italic: true, anchor: 'middle', fill: C.muted });
  y += 40;
  // panopticon
  const cx = 300, cy = y + 160;
  s += panel(30, y, 840, 330);
  s += `<circle cx="${cx}" cy="${cy}" r="135" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3"/>`;
  for (let i = 0; i < 12; i++) { const a = (i * Math.PI) / 6; s += `<line x1="${cx + 95 * Math.cos(a)}" y1="${cy + 95 * Math.sin(a)}" x2="${cx + 135 * Math.cos(a)}" y2="${cy + 135 * Math.sin(a)}" stroke="${C.ink}" stroke-width="2"/>`; }
  s += `<circle cx="${cx}" cy="${cy}" r="95" fill="none" stroke="${C.ink}" stroke-width="2"/>`;
  s += `<circle cx="${cx}" cy="${cy}" r="38" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + label(cx, cy + 6, 'tower', { size: 15, weight: 700, anchor: 'middle' });
  s += label(124, cy - 112, 'cells', { size: 16, weight: 600, anchor: 'end' }) + `<line x1="130" y1="${cy - 116}" x2="212" y2="${cy - 86}" stroke="${C.ink}" stroke-width="2"/>`;
  s += para(470, y + 70, 380, 'Bentham’s panopticon: inmates could be watched at any time without knowing when', { size: 18, weight: 700 }).svg;
  s += para(470, y + 170, 380, 'So they learn to police themselves: control works through self-discipline', { size: 17, fill: C.tealDark }).svg;
  y += 330;
  add('04-durkheim-foucault', svg(900, y + 26, 'How punishment has changed', s),
    'Durkheim’s shift from repressive to restitutive law and Foucault’s shift from sovereign to disciplinary power, with a plan of Bentham’s panopticon: cells around a central tower, so inmates never know when they are watched.',
    'Modern control works through surveillance and self-discipline.',
    '## Aims and types of punishment');
}

// 05 Crime prevention
{
  add('05-policing', cardsFig('Crime prevention: policing and surveillance', {
    ncol: 2, size: 16,
    cards: [
      { head: 'Community policing', body: 'Officers build relationships and trust in local areas.', fill: C.teal },
      { head: 'Zero-tolerance policing', sub: 'broken windows (Wilson and Kelling, 1982)', body: 'Visible disorder invites serious crime, so enforce minor offences; New York in the 1990s. Criticised for targeting poor and minority communities.', fill: C.cream },
      { head: 'Intelligence-led and predictive', body: 'Data used to target likely offenders, places and times.', fill: C.teal },
      { head: 'Situational crime prevention', sub: 'Clarke', body: 'Target hardening, surveillance and design reduce opportunities. Critics: crime may be displaced.', fill: C.cream },
    ],
    foot: { head: 'Surveillance', text: ['CCTV, facial recognition, monitoring online activity', '**Mathiesen:** the synopticon, many watching the few (smartphone filming of police)', '**Zuboff:** surveillance capitalism; corporate data can be shared with states'] },
  }),
    'Four approaches to crime prevention: community policing, zero-tolerance policing based on broken windows, intelligence-led and predictive policing, and Clarke’s situational crime prevention, with surveillance concepts from Mathiesen and Zuboff.',
    'Policing ranges from building trust to targeting data and design.',
    '## Crime prevention: policing and surveillance');
}

// 06 RSA vs ISA
{
  let s = '', y = 110;
  const r = cardRow(y, [
    { head: 'Repressive state apparatuses', sub: 'control through force or its threat', body: ['Police', 'Courts', 'Prisons', 'Army'], fill: C.cream },
    { head: 'Ideological state apparatuses', sub: 'control through ideas', body: ['Education', 'Family', 'Religion', 'Media'], fill: C.teal },
  ], { size: 17 });
  s += r.svg; y += r.h + 8;
  s += label(450, y + 18, 'Althusser (1970)', { size: 16, italic: true, anchor: 'middle', fill: C.muted });
  y += 42;
  s += label(30, y + 4, 'Interpellation: ideology "hails" individuals', { size: 19, weight: 700 }); y += 20;
  const c = hchain(y, [
    { head: '“Hey, you there!”', body: 'a police officer calls out', fill: C.tealLight },
    { head: 'The person turns round', body: 'recognises the call is for them', fill: C.tealLight },
    { head: 'Accepts the identity', body: '"good student", "loyal employee"', fill: C.mustard },
  ], { ag: 36, size: 16 });
  s += c.svg; y += c.h + 18;
  const n = note(y, 'Gramsci: hegemony', 'Rule through consent: the ruling class’s worldview becomes "common sense" via churches, schools and media, with force in reserve. Hegemony must be won, so counter-hegemonic ideas leave more room for resistance than Althusser allows.');
  s += n.svg; y += n.h;
  add('06-rsa-isa', svg(900, y + 26, 'Control by force and control by ideas', s),
    'Althusser’s repressive state apparatuses (police, courts, prisons, army) and ideological state apparatuses (education, family, religion, media); interpellation as a police officer’s call that a person recognises as addressed to them; and Gramsci’s hegemony through consent.',
    'Force is visible; ideology works when people accept identities as their own.',
    '## State apparatuses, interpellation and hegemony');
}

// 07 Perspectives
{
  add('07-perspectives', compareFig('Perspectives on social control', {
    cols: [{ head: 'Argument', fill: C.tealLight }, { head: 'Sociologists', fill: C.cream }],
    labelW: 170, size: 16,
    rows: [
      { label: 'Functionalist (consensus)', fill: C.teal, cells: ['Control maintains shared values and order; punishment strengthens solidarity; social bonds prevent deviance', 'Durkheim; Hirschi (1969): attachment, commitment, involvement, belief'] },
      { label: 'Marxist (conflict)', fill: C.teal, cells: ['Control protects capitalism; law enforced selectively against the working class; ideology secures consent', 'Althusser; Gramsci'] },
      { label: 'Feminist (conflict)', fill: C.teal, cells: ['Women face distinctive, often informal, control at home, in public and at work', 'Heidensohn, Women and Crime (1985)'] },
      { label: 'Interactionist', fill: C.teal, cells: ['Control creates deviance through labelling; agents use discretion and stereotypes', 'Becker (1963); Goffman; Cohen'] },
    ],
  }),
    'A grid of functionalist, Marxist, feminist and interactionist views of social control, each with its argument and sociologists such as Durkheim, Hirschi, Althusser, Gramsci, Heidensohn, Becker, Goffman and Cohen.',
    'Consensus views see control protecting everyone; conflict views see it protecting the powerful.',
    '## Perspectives on social control');
}
