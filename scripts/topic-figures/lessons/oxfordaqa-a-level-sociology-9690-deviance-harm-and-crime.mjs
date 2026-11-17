import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-a-level-sociology-9690-deviance-harm-and-crime';
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

// 01 Crime and deviance overlap
{
  let s = '';
  const Y = 40;
  s += `<circle cx="340" cy="${330 + Y}" r="200" fill="${C.teal}" fill-opacity="0.75" stroke="${C.ink}" stroke-width="3"/>`;
  s += `<circle cx="560" cy="${330 + Y}" r="200" fill="${C.cream}" fill-opacity="0.8" stroke="${C.ink}" stroke-width="3"/>`;
  s += label(150, 132, 'Deviance', { size: 23, weight: 700, anchor: 'middle' }) + label(150, 156, 'breaks social norms', { size: 16, anchor: 'middle', fill: C.muted });
  s += label(750, 132, 'Crime', { size: 23, weight: 700, anchor: 'middle' }) + label(750, 156, 'breaks the criminal law', { size: 16, anchor: 'middle', fill: C.muted });
  s += para(245, 300 + Y, 170, 'Deviant but not criminal', { size: 17, weight: 700, anchor: 'middle' }).svg + para(245, 350 + Y, 170, 'rudeness, unusual dress', { size: 16, anchor: 'middle' }).svg;
  s += para(450, 315 + Y, 110, 'Deviant and criminal', { size: 17, weight: 700, anchor: 'middle' }).svg;
  s += para(658, 300 + Y, 170, 'Criminal but not seen as deviant', { size: 17, weight: 700, anchor: 'middle' }).svg + para(658, 372 + Y, 170, 'minor speeding in many places', { size: 16, anchor: 'middle' }).svg;
  const n = note(600, 'Why the distinction matters', 'Who makes the rules decides what counts as crime. Laws differ between societies (alcohol, gambling, dress, religious conversion) and change over time (drink-driving criminalised; new technologies create new offences).');
  s += n.svg;
  add('01-crime-deviance', svg(900, 600 + n.h + 26, 'Crime and deviance are not the same', s),
    'Two overlapping circles: deviance breaks social norms and crime breaks the criminal law. Rudeness is deviant but not criminal; minor speeding in many places is criminal but not seen as deviant.',
    'Not all deviance is crime, and not all crime is seen as deviant.',
    '## Crime, deviance and social construction');
}

// 02 Three arguments for social construction
{
  add('02-social-construction', cardsFig('Why crime is socially constructed', {
    ncol: 3, size: 16, headSize: 19, badges: true,
    cards: [
      { head: 'Labelling', sub: 'Becker (1963), interactionist', body: ['Deviance is not a quality of the act but the result of others applying rules', 'Moral entrepreneurs campaign for new rules'], fill: C.teal },
      { head: 'Moral panics', sub: 'Cohen (1972); Hall et al. (1978)', body: ['Media exaggeration creates alarm and calls for tougher laws', 'Hall: the 1970s "mugging" panic racialised street crime and justified authoritarian policing'], fill: C.cream },
      { head: 'Power and law', sub: 'Marxist', body: ['Laws largely reflect ruling-class interests', 'Property offences policed intensively; harmful business practices lightly regulated'], fill: C.tealLight },
    ],
    foot: { head: 'Durkheim: deviance is normal and functional', text: 'Reactions to it clarify the boundaries of acceptable behaviour, and it can be the first step towards social change.' },
  }),
    'Three arguments: Becker’s labelling and moral entrepreneurs; Cohen’s and Hall’s moral panics; and the Marxist view that law reflects ruling-class interests. Durkheim adds that deviance is normal and functional.',
    'Labels, panics and power all shape what counts as crime.',
    '## Crime, deviance and social construction');
}

// 03 Eight types of crime
{
  add('03-crime-types', cardsFig('Eight types of crime', {
    ncol: 4, size: 15, headSize: 18,
    cards: [
      { head: 'Violent and property', body: 'Dominate police records and media; shape the image of the "typical criminal".', fill: C.teal },
      { head: 'White-collar', body: 'Sutherland (1939): high-status people at work. Challenges links between crime and poverty.', fill: C.cream },
      { head: 'Corporate', body: 'By or for organisations. Bhopal (1984). Box (1983): more death and injury than street crime.', fill: C.cream },
      { head: 'State', body: 'By governments or state agencies. Green and Ward (2004): human rights violations.', fill: C.cream },
      { head: 'Green', body: 'Harm to the environment and other species: illegal logging, toxic dumping.', fill: C.tealLight },
      { head: '"Victimless"', body: 'Consensual offences such as some drug use or gambling; the victim is disputed.', fill: C.tealLight },
      { head: 'Cyber', body: 'Fraud, hacking, ransomware, online abuse; crosses borders.', fill: C.tealLight },
      { head: 'Do not confuse', body: 'White-collar: individual, personal gain at work. Corporate: for the organisation.', fill: C.mustard },
    ],
  }),
    'Cards for violent and property, white-collar, corporate, state, green, “victimless” and cyber crime, each with what makes it sociologically interesting, and a reminder separating white-collar from corporate crime.',
    'Crimes of the powerful are less visible than violent and property crime.',
    '## Types of crime: what makes each sociologically interesting');
}

// 04 Cohen's States of Denial
{
  let s = '', y = 110;
  const rows = [
    ['Literal denial', '"It didn’t happen."', C.teal],
    ['Interpretive denial', '"It was something else."', C.tealLight],
    ['Implicatory denial', 'Accepts the facts but denies their moral implications: "it was necessary", "it is nothing to do with us".', C.cream],
  ];
  rows.forEach(([h, b, f], i) => {
    const bp = para(0, 0, 530, b, { size: 18 });
    const hh = Math.max(84, bp.h + 40);
    s += `<rect x="30" y="${y}" width="260" height="${hh}" rx="12" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + badge(70, y + hh / 2, 20, String(i + 1), C.panel) + label(105, y + hh / 2 + 7, h, { size: 19, weight: 700 });
    s += panel(306, y, 564, hh) + para(326, y + (hh - bp.h) / 2 + 18 * 0.95, 530, b, { size: 18, italic: i < 2 }).svg;
    y += hh + 14;
  });
  add('04-states-of-denial', svg(900, y + 12, 'Cohen (2001): how states deny atrocities', s),
    'Three types of denial from Cohen’s States of Denial: literal denial that it happened, interpretive denial that it was something else, and implicatory denial that accepts the facts but denies their moral implications.',
    'State crime is hidden by literal, interpretive and implicatory denial.',
    '## Types of crime: what makes each sociologically interesting');
}

// 05 Funnel
{
  let s = '', y = 110;
  const stages = ['Act takes place', 'Noticed', 'Recognised as a crime', 'Reported', 'Recorded by the police', 'Arrest, charge, conviction'];
  const fills = [C.tealLight, C.tealLight, C.teal, C.teal, C.cream, C.mustard];
  stages.forEach((st, i) => {
    const w1 = 580 - i * 50, w2 = 580 - (i + 1) * 50, cx = 320, h = 62;
    s += `<path d="M${cx - w1 / 2},${y} L${cx + w1 / 2},${y} L${cx + w2 / 2},${y + h} L${cx - w2 / 2},${y + h} Z" fill="${fills[i]}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>`;
    s += label(cx, y + 38, st, { size: 17, weight: 700, anchor: 'middle' });
    if (i > 0) s += arrow(cx + w1 / 2 + 8, y - 2, 640, y - 2, { color: C.rust, marker: 'ahR', w: 3 }) ;
    y += h + 6;
  });
  s += `<rect x="650" y="160" width="220" height="${y - 220}" rx="14" fill="${C.panel}" stroke="${C.rust}" stroke-width="2.5"/>`;
  s += para(760, 210, 190, 'Crime drops out at every stage', { size: 18, weight: 700, anchor: 'middle', fill: C.rust }).svg;
  s += para(760, 300, 190, 'The dark figure: unrecorded crime', { size: 18, anchor: 'middle' }).svg;
  const n = note(y + 14, 'Two readings of the statistics', ['**Interactionists (Cicourel):** socially constructed by police and court decisions', '**Positivists:** useful, if imperfect, indicators']);
  s += n.svg;
  add('05-crime-funnel', svg(900, y + 14 + n.h + 26, 'The crime funnel', s),
    'A funnel narrowing from an act taking place, through being noticed, recognised as a crime, reported and recorded, to arrest, charge and conviction. Crime drops out at each stage, creating the dark figure.',
    'Recorded crime is only the narrow end of the funnel.',
    '## Measuring and researching crime');
}

// 06 Three sources
{
  add('06-crime-sources', compareFig('Three ways to measure crime', {
    cols: [{ head: 'Best used for', fill: C.tealLight }, { head: 'Main problem', fill: C.cream }],
    labelW: 220, size: 17,
    rows: [
      { label: 'Official / police statistics', fill: C.teal, cells: ['Trends in serious, reported crime; workload of the justice system', 'Reflect reporting, police priorities and counting rules'] },
      { label: 'Victim surveys', fill: C.teal, cells: ['Unreported crime against individuals and households', 'Miss crimes with no individual victim, or where victims are unaware'] },
      { label: 'Self-report studies', fill: C.teal, cells: ['Hidden offending, especially among groups rarely arrested', 'Honesty, memory and a focus on minor offences'] },
    ],
    foot: { head: 'Strongest answers', text: 'Compare sources rather than dismissing one.' },
  }),
    'Official statistics, victim surveys and self-report studies compared by what each is best used for and its main problem.',
    'Each source catches a different part of the dark figure.',
    '## Measuring and researching crime');
}

// 07 Patterns
{
  add('07-patterns', compareFig('Explaining patterns of crime', {
    cols: [{ head: 'Pattern', fill: C.tealLight }, { head: 'Explanations', fill: C.cream }],
    labelW: 120, size: 16,
    rows: [
      { label: 'Gender', fill: C.teal, cells: ['Men commit most recorded crime, especially violence; women more often victims of domestic and sexual violence.', ['**Pollak (1950):** chivalry thesis', '**Heidensohn:** women more tightly controlled', '**Messerschmidt:** crime "accomplishes" masculinity']] },
      { label: 'Social class', fill: C.teal, cells: ['Working class over-represented in recorded crime and prisons.', ['**Marxists (Box):** crimes of the powerful under-policed', '**Lea and Young (1984):** relative deprivation, marginalisation, subcultures']] },
      { label: 'Age', fill: C.teal, cells: ['Peaks in late teens and early twenties; young people often victims too.', ['Time in public spaces, peer influence, fewer adult commitments', 'More police attention to youth']] },
      { label: 'Ethnicity', fill: C.teal, cells: ['Some minorities over-represented in arrests and prisons in some societies; hate crime.', ['**Hall et al.:** discriminatory policing and labelling', '**Left realists:** deprivation and marginalisation']] },
    ],
  }),
    'A grid of offending and victimisation patterns by gender, social class, age and ethnicity, each with explanations such as Pollak’s chivalry thesis, Messerschmidt, Box, Lea and Young, and Hall.',
    'Every pattern needs an explanation, and every explanation has a rival.',
    '## Explaining patterns of offending and victimisation');
}

// 08 20-mark plan
{
  add('08-essay-plan', flowFig('Planning the 20-mark answer', {
    sub: '“The most harmful actions in society are not treated as crimes.”',
    steps: [
      { head: 'Introduction', body: 'Define crime (law-breaking) and social harm (serious harm, legal or not).' },
      { head: 'For', body: 'Box on corporate harm; Bhopal; state crime and denial (Cohen, Green and Ward); pollution within legal limits; zemiology on poverty and unsafe work.', fill: C.tealLight },
      { head: 'Against', body: 'Violent and sexual crimes are criminalised almost everywhere; many corporate and green acts have been criminalised; "harm" is hard to measure; left realists on street crime in poor communities.', fill: C.cream },
      { head: 'Application', body: 'A named society: a recent industrial disaster or air-pollution policy.' },
      { head: 'Conclusion', body: 'The law captures visible individual harm but under-captures diffuse harm by powerful organisations.' },
    ],
  }),
    'A five-step plan for a 20-mark essay on social harm: definitions, arguments for (Box, Bhopal, state crime, zemiology), arguments against (left realists, measurement), application to a named society, and a judgement.',
    'Define, argue both sides, apply to a society, then judge.',
    '## Worked example: annotated 20-mark plan');
}
