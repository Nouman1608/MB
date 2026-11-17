import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-a-level-sociology-9690-families-marriage-kinship';
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

// 01 Family, household, kinship
{
  let s = '';
  s += `<rect x="30" y="110" width="840" height="430" rx="14" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2.5"/>`;
  s += label(60, 146, 'Kinship: people recognised as related by blood, marriage or adoption,', { size: 17, weight: 700 }) + label(60, 170, 'with rights and duties (inheritance, care, who may marry whom)', { size: 17, fill: C.muted });
  s += `<circle cx="330" cy="360" r="170" fill="${C.teal}" fill-opacity="0.75" stroke="${C.ink}" stroke-width="3"/>`;
  s += `<circle cx="570" cy="360" r="170" fill="${C.cream}" fill-opacity="0.8" stroke="${C.ink}" stroke-width="3"/>`;
  s += label(240, 300, 'Family', { size: 21, weight: 700, anchor: 'middle' }) + para(240, 324, 140, 'linked by kinship', { size: 16, anchor: 'middle', fill: C.muted }).svg;
  s += label(640, 300, 'Household', { size: 21, weight: 700, anchor: 'middle' }) + para(640, 324, 140, 'shares a home and daily activities', { size: 16, anchor: 'middle', fill: C.muted }).svg;
  s += para(240, 410, 150, 'A family split across two countries', { size: 16, weight: 600, anchor: 'middle' }).svg;
  s += para(450, 345, 80, 'Family sharing a home', { size: 15, weight: 600, anchor: 'middle' }).svg;
  s += para(630, 400, 150, 'A student flat-share; living alone; a commune', { size: 16, weight: 600, anchor: 'middle' }).svg;
  const n = note(560, 'Why it matters', 'Living alone and communes are household arrangements outside the family, not family types.');
  s += n.svg;
  add('01-family-household', svg(900, 560 + n.h + 26, 'Family, household and kinship', s),
    'Overlapping circles for family and household inside a frame for kinship. A family split across two countries is a family but not a household; a student flat-share, living alone or a commune is a household but not a family.',
    'A family need not share a home, and a household need not be a family.',
    '## Families, households and kinship');
}

// 02 Vertical vs horizontal extension
{
  const person = (x, y, lab, f = C.teal) => `<circle cx="${x}" cy="${y}" r="26" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + para(x, y + 48, 110, lab, { size: 15, anchor: 'middle' }).svg;
  let s = '', y = 110;
  s += panel(30, y, 410, 470) + panel(460, y, 410, 470);
  s += label(235, y + 40, 'Vertically extended', { size: 21, weight: 700, anchor: 'middle' }) + label(235, y + 66, 'three or more generations', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 });
  s += label(665, y + 40, 'Horizontally extended', { size: 21, weight: 700, anchor: 'middle' }) + label(665, y + 66, 'extra members of the same generation', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 });
  // vertical
  const gy = [y + 120, y + 240, y + 360];
  const L = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += L(235, gy[0] + 56, 235, gy[0] + 72) + L(235, gy[0] + 72, 145, gy[0] + 72) + L(145, gy[0] + 72, 145, gy[1] - 26);
  s += L(171, gy[1], 299, gy[1]) + L(235, gy[1], 235, gy[1] + 62) + L(175, gy[1] + 62, 295, gy[1] + 62) + L(175, gy[1] + 62, 175, gy[2] - 26) + L(295, gy[1] + 62, 295, gy[2] - 26);
  s += person(235, gy[0], 'grandmother', C.cream);
  s += person(145, gy[1], 'son') + person(325, gy[1], 'daughter-in-law');
  s += person(175, gy[2], 'grandchild', C.tealLight) + person(295, gy[2], 'grandchild', C.tealLight);
  // horizontal
  const hy = y + 190;
  s += `<line x1="510" y1="${hy - 50}" x2="820" y2="${hy - 50}" stroke="${C.olive}" stroke-width="5" opacity="0.6"/>` + label(665, hy - 62, 'one generation', { size: 15, anchor: 'middle', fill: C.olive, weight: 600 });
  s += person(535, hy, 'brother') + person(605, hy, 'his wife', C.cream) + person(725, hy, 'brother') + person(795, hy, 'his wife', C.cream);
  s += `<line x1="561" y1="${hy}" x2="579" y2="${hy}" stroke="${C.ink}" stroke-width="2.5"/><line x1="751" y1="${hy}" x2="769" y2="${hy}" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += person(570, hy + 130, 'children', C.tealLight) + person(760, hy + 130, 'children', C.tealLight);
  s += `<line x1="570" y1="${hy + 2}" x2="570" y2="${hy + 104}" stroke="${C.ink}" stroke-width="2.5"/><line x1="760" y1="${hy + 2}" x2="760" y2="${hy + 104}" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += para(665, y + 420, 370, 'e.g. the traditional joint family of parts of South Asia: one compound', { size: 15, anchor: 'middle', italic: true, fill: C.muted }).svg;
  s += para(235, y + 440, 370, 'e.g. a grandmother living with her son’s family', { size: 15, anchor: 'middle', italic: true, fill: C.muted }).svg;
  y += 490;
  const n = note(y, 'Modified extended family', 'Kin may live nearby rather than together and keep frequent contact and support. Young and Willmott (1957): dense mother-daughter networks in Bethnal Green.');
  s += n.svg; y += n.h;
  add('02-extended-families', svg(900, y + 26, 'Two ways a family is extended', s),
    'Left: a vertically extended family of grandmother, son, daughter-in-law and grandchildren across three generations. Right: a horizontally extended family of two married brothers and their children sharing one compound.',
    'Vertical extension adds generations; horizontal extension adds same-generation kin.',
    '## Types of family');
}

// 03 Alternatives to families
{
  add('03-alternatives', compareFig('Alternatives to families', {
    cols: [{ head: 'What it involves', fill: C.tealLight }, { head: 'Sociological point', fill: C.cream }],
    labelW: 170, size: 16,
    rows: [
      { label: 'Communes', fill: C.teal, cells: ['Shared property, work and often child-rearing, e.g. the Israeli kibbutz children’s houses.', 'Challenges Murdock’s (1949) claim that the nuclear family is universal and necessary.'] },
      { label: 'Living alone', fill: C.teal, cells: ['One-person households: young professionals, divorced adults, widowed older people.', 'Klinenberg (2012): can be a chosen, socially connected lifestyle, not just isolation.'] },
      { label: 'Foster care / children’s homes', fill: C.teal, cells: ['The state or agencies place children with carers or in residential institutions.', 'Child-rearing can be organised outside kinship; raises questions about outcomes.'] },
    ],
    foot: { head: 'Evaluation', text: 'Alternatives often depend on family-like ties: kibbutz children still visited their parents; people living alone keep kin and friendship ties.' },
  }),
    'Communes, living alone and foster care or children’s homes compared by what each involves and its sociological point, such as the kibbutz challenge to Murdock and Klinenberg’s Going Solo.',
    'Alternatives show child-rearing and living can be organised outside the family.',
    '## Alternatives to families');
}

// 04 Therborn
{
  let s = '', y = 110;
  const c = hchain(y, [
    { head: 'Patriarchy', body: 'power of fathers and husbands', fill: C.teal },
    { head: 'Marriage', body: 'who marries, when, and whether it can be ended', fill: C.teal },
    { head: 'Fertility', fill: C.teal },
  ], { arrows: false, ag: 20 });
  s += label(450, y - 4, '', {});
  s += c.svg; y += c.h + 22;
  const r = cardRow(y, [
    { head: 'Five major systems', body: ['European (and New World offshoots)', 'East Asian', 'Sub-Saharan African', 'West Asian / North African', 'South Asian'], fill: C.cream },
    { head: 'Two "interstitial" systems', body: ['Southeast Asian', 'Creole American', 'Mix features of others'], fill: C.tealLight },
  ]);
  s += r.svg; y += r.h + 18;
  const n = note(y, 'Twentieth-century trends', ['Patriarchy declined in every system, at very different speeds', 'Marriage patterns diverged', 'Fertility fell almost everywhere', 'So the Western nuclear family is not the "normal" end point']);
  s += n.svg; y += n.h;
  add('04-therborn', svg(900, y + 26, 'Therborn (2004): family systems', s, 'three dimensions of comparison'),
    'Therborn compares family systems on patriarchy, marriage and fertility. He identifies five major systems and two interstitial ones, and finds patriarchy declining at different speeds, marriage diverging and fertility falling.',
    'Family systems change at different speeds, not towards one Western model.',
    '## Therborn\'s types of family system');
}

// 05 Patriarchal vs matrilineal
{
  add('05-patriarchal-matrilineal', versusFig('Who holds authority?', {
    left: { head: 'Patriarchal', items: ['Men, usually the eldest male, hold authority over decisions, property and the behaviour of women and younger members', '**Patrilineal:** descent and inheritance through the male line', '**Patrilocal:** wives move into the husband’s household'] },
    right: { head: 'Matriarchal / matrilineal', fill: C.cream, items: ['Strictly matriarchal societies are hard to find', 'Most examples are **matrilineal:** descent and property through the female line', '**Khasi** (Meghalaya): property to the youngest daughter', '**Minangkabau** (West Sumatra)', '**Mosuo** (south-west China): "walking marriage"'] },
    foot: { head: 'Evaluation point', text: 'In several matrilineal societies, mothers’ brothers still hold significant authority: matrilineal is not the same as matriarchal.' },
  }),
    'Patriarchal families give men authority, with patrilineal descent and patrilocal residence. Most so-called matriarchal examples, such as the Khasi, Minangkabau and Mosuo, are matrilineal, and mothers’ brothers may still hold authority.',
    'Matrilineal descent does not mean women rule.',
    '## Matriarchal and patriarchal families');
}

// 06 Marriage types
{
  let s = '', y = 120;
  s += arrow(60, y, 840, y, { color: C.olive, marker: 'ahO', w: 4 }) + `<line x1="60" y1="${y}" x2="70" y2="${y}" stroke="${C.olive}" stroke-width="4" marker-start="url(#ahO)"/>`;
  s += label(60, y - 14, 'family plays leading role in choice', { size: 16, weight: 600, fill: C.olive }) + label(840, y - 14, 'couple choose each other', { size: 16, weight: 600, fill: C.olive, anchor: 'end' });
  y += 24;
  const r = cardRow(y, [
    { head: 'Arranged', body: 'Families choose or introduce partners, stressing background, religion and status.', fill: C.cream },
    { head: '"Assisted" / semi-arranged', body: 'Families introduce; the couple consent and can veto.', fill: C.tealLight },
    { head: 'Love', body: 'Partners choose on romantic attraction; families play a smaller role.', fill: C.teal },
  ], { size: 16, headSize: 18 });
  s += r.svg; y += r.h + 18;
  s += `<rect x="30" y="${y}" width="840" height="86" rx="14" fill="${C.panel}" stroke="${C.rust}" stroke-width="3" stroke-dasharray="10 6"/>`;
  s += label(56, y + 36, 'Not on this scale: forced marriage', { size: 19, weight: 700, fill: C.rust }) + label(56, y + 64, 'Lacks the free consent of one or both partners; a form of abuse.', { size: 17 });
  y += 104;
  const n = note(y, 'Monogamy', ['Marriage to one partner at a time', '**Serial monogamy:** a sequence of marriages separated by divorce, common where divorce is easy']);
  s += n.svg; y += n.h;
  add('06-marriage-types', svg(900, y + 26, 'Types of marriage', s),
    'A scale from arranged marriage, where families lead the choice, through assisted marriage with the couple’s veto, to love marriage, where the couple choose. Forced marriage is shown apart as abuse. A note defines monogamy and serial monogamy.',
    'Arranged and love marriage differ in who chooses; forced marriage lacks consent.',
    '## Types of marriage');
}
