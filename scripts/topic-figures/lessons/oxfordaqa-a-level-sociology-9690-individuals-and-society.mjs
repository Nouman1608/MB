import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-a-level-sociology-9690-individuals-and-society';
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

// 01 Culture
{
  let s = '', y = 110;
  const r = cardRow(y, [
    { head: 'Material culture', body: 'Tools, buildings, clothing, technology', fill: C.cream },
    { head: 'Non-material culture', body: 'Values, norms, symbols, language', fill: C.teal },
  ], { size: 17 });
  s += r.svg; y += r.h + 16;
  const c = hchain(y, [
    { head: 'Learned', body: 'not inherited: children in different societies acquire different languages, diets and manners', fill: C.tealLight },
    { head: 'Shared', body: 'makes social life predictable, though never totally', fill: C.tealLight },
    { head: 'Varies', body: 'between societies and over time: ethnocentrism vs cultural relativism', fill: C.tealLight },
  ], { arrows: false, ag: 16, size: 16 });
  s += c.svg; y += c.h + 16;
  const r2 = cardRow(y, [
    { head: 'Functionalist', body: 'Shared values, a collective conscience (Durkheim), bind society.', fill: C.cream },
    { head: 'Marxist', body: 'Dominant culture reflects ruling-class ideas and serves the powerful.', fill: C.cream },
    { head: 'Interactionist', body: 'Culture is continually negotiated in everyday interaction.', fill: C.cream },
  ], { size: 16, headSize: 18 });
  s += r2.svg; y += r2.h;
  add('01-culture', svg(900, y + 26, 'What is culture?', s, 'the learned, shared way of life of a group'),
    'Culture divided into material and non-material forms, its three features (learned, shared, varies), and functionalist, Marxist and interactionist views of it.',
    'Culture is learned, shared and variable, and each perspective reads it differently.',
    '## Culture');
}

// 02 Values to laws
{
  let s = '', y = 110;
  const c = hchain(y, [
    { head: 'Value', body: 'general belief about what is good, e.g. respect for elders', fill: C.teal },
    { head: 'Norm', body: 'specific rule that puts it into practice, e.g. standing when an older person enters', fill: C.cream },
  ], { ag: 60, size: 17 });
  s += c.svg; y += c.h + 46;
  s += label(30, y, 'Sumner (1906): how strongly norms are enforced', { size: 19, weight: 700 });
  y += 18;
  const steps = [['Folkways', 'everyday conventions', 'breach brings mild disapproval', C.tealLight], ['Mores', 'strong moral weight', 'breach brings outrage', C.cream], ['Laws', 'some mores become laws', 'formal sanctions', C.mustard]];
  steps.forEach(([h, sub, b, f], i) => {
    const w = 270, x = 30 + i * 285, top = y + (2 - i) * 22, hh = 124 + i * 22;
    s += `<rect x="${x}" y="${top}" width="${w}" height="${hh}" rx="12" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += label(x + w / 2, top + 36, h, { size: 21, weight: 700, anchor: 'middle' }) + label(x + w / 2, top + 62, sub, { size: 16, anchor: 'middle', fill: i === 2 ? C.ink : C.muted }) + para(x + w / 2, top + 92, w - 30, b, { size: 17, anchor: 'middle', weight: 600 }).svg;
  });
  y += 194;
  s += arrow(60, y, 840, y, { color: C.olive, marker: 'ahO', w: 4 }) + label(450, y + 28, 'stronger sanctions', { size: 17, weight: 600, anchor: 'middle', fill: C.olive });
  y += 40;
  add('02-values-norms', svg(900, y + 26, 'From values to norms to laws', s),
    'A value such as respect for elders is put into practice by norms such as standing when an older person enters. Sumner’s folkways, mores and laws rise in the strength of sanction, from mild disapproval to outrage to formal sanctions.',
    'Values are general; norms are specific rules enforced with sanctions of varying strength.',
    '## Norms and values');
}

// 03 Status and role
{
  add('03-status-role', compareFig('Status and role', {
    sub: 'status = social position; role = behaviour expected in it',
    cols: [{ head: 'Ascribed status', fill: C.cream }, { head: 'Achieved status', fill: C.teal }],
    labelW: 150, size: 17,
    rows: [
      { label: 'Meaning', cells: ['Fixed at birth or beyond the individual’s control', 'Earned through effort or merit'] },
      { label: 'Examples', cells: ['Sex, caste, royal birth, age', 'A qualification or job title'] },
    ],
    foot: { head: 'Linton (1936) and key terms', text: ['Industrialisation said to shift societies towards achieved status, though class, gender and ethnicity still shape what people achieve', '**Role conflict:** incompatible demands from two roles (employee and carer)', '**Role strain:** pressure within one role', '**Master status:** dominates how others see a person; links to stigma'] },
  }),
    'Linton’s ascribed status, fixed at birth such as sex, caste or age, compared with achieved status earned through merit such as a qualification, with definitions of role conflict, role strain and master status.',
    'Statuses are ascribed or achieved, and holding many can create conflict.',
    '## Roles and status');
}

// 04 Stereotypes
{
  let s = '', y = 110;
  const c = hchain(y, [
    { head: 'Stereotype', body: '"pictures in our heads" (Lippmann, 1922)', fill: C.cream },
    { head: 'Prejudice', body: 'attitudes', fill: C.tealLight },
    { head: 'Discrimination', body: 'actions', fill: C.teal },
    { head: 'Self-fulfilling prophecy', body: 'if internalised or acted on by institutions', fill: C.mustard },
  ], { ag: 34 });
  s += c.svg; y += c.h + 20;
  const n = note(y, 'Why stereotypes persist', ['They simplify a complex social world', 'They are reproduced by agencies of socialisation, especially the media', 'Links: identity (3.1.2.3) and othering (3.1.2.4)']);
  s += n.svg; y += n.h;
  add('04-stereotypes', svg(900, y + 26, 'How stereotypes do harm', s),
    'A chain from a stereotype, Lippmann’s pictures in our heads, to prejudiced attitudes, discriminatory actions and a self-fulfilling prophecy. A note explains why stereotypes persist.',
    'A simplified image can become attitudes, actions and finally a self-fulfilling prophecy.',
    '## Stereotypes');
}

// 05 Subcultures in multicultural societies
{
  let s = '', y = 110;
  const r = cardRow(y, [
    { head: 'Examples', body: ['**Singapore:** policy around Chinese, Malay, Indian and "Other" categories', '**Canada:** official multiculturalism policy, 1971'], fill: C.cream },
    { head: 'Maintained through', body: ['Family socialisation', 'Religious institutions and community organisations', 'Media in community languages', 'Sometimes separate schools'], fill: C.cream },
  ]);
  s += r.svg; y += r.h + 18;
  const r2 = cardRow(y, [
    { head: 'Integration vs distinctiveness', body: 'Functionalists: strong subcultures could weaken shared values. Multiculturalists: diversity and civic values coexist.', fill: C.teal },
    { head: 'Change', body: 'Second and third generations blend cultures into hybrid identities.', fill: C.teal },
    { head: 'Power', body: 'A dominant group defines "mainstream", so minorities may be marginalised.', fill: C.teal },
  ], { size: 16, headSize: 18 });
  s += r2.svg; y += r2.h;
  add('05-subcultures', svg(900, y + 26, 'Ethnic subcultures in multicultural societies', s, 'differ from the mainstream in some ways, share others'),
    'Examples of multicultural societies (Singapore, Canada), how ethnic subcultures are maintained, and three evaluation debates: integration versus distinctiveness, change through hybridity, and power.',
    'Subcultures survive through institutions but also blend and face marginalisation.',
    '## Subcultures, including ethnic groups in multicultural societies');
}

// 06 Mills
{
  add('06-mills', compareFig('Mills: troubles and issues', {
    sub: 'linking biography and history (The Sociological Imagination, 1959)',
    cols: [{ head: 'Personal trouble', fill: C.cream }, { head: 'Public issue', fill: C.teal }],
    labelW: 150, size: 17,
    rows: [
      { label: 'Located in', cells: ['An individual’s character and immediate relationships', 'The institutions of a society as a whole'] },
      { label: 'Unemployment', cells: ['One person in a city is unemployed: look at their skills or character', 'A large share of the workforce is unemployed: rooted in the economy'] },
      { label: 'Today', cells: ['A graduate blames themselves; a family struggles to care for an older relative', 'Graduate underemployment reflects labour markets; ageing populations and social policy'] },
    ],
    foot: { head: 'Evaluation', text: ['Pushes sociology towards public relevance (Burawoy’s public sociology)', 'A way of thinking rather than a testable theory', 'Interactionists: individuals also shape structures through their choices'] },
  }),
    'Mills’s personal troubles, located in individual character and relationships, set against public issues rooted in social institutions, illustrated by one unemployed person versus mass unemployment and by graduate underemployment and elder care.',
    'The same problem is a trouble for one person and an issue for a society.',
    '## The sociological imagination (Mills)');
}
