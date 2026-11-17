import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-a-level-sociology-9690-what-is-meant-by-globalisation';
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

// 01 Definitions
{
  let s = '', y = 110;
  const r = cardRow(y, [
    { head: 'Giddens (1990)', body: '"The **intensification** of worldwide social relations which link distant localities in such a way that local happenings are shaped by events occurring many miles away and **vice versa**."', fill: C.teal },
    { head: 'Harvey (1989): time-space compression', body: 'Faster transport, communication and capital flows make distance and time matter less. A factory order on one continent can be met by a supplier on another within days.', fill: C.cream },
  ], { size: 16 });
  s += r.svg; y += r.h + 20;
  s += label(30, y + 4, 'Organise any answer by separating:', { size: 19, weight: 700 }); y += 20;
  const c = hchain(y, [
    { head: 'Flows', body: 'people, goods, money, images, ideas', fill: C.tealLight },
    { head: 'Structures', body: 'institutions that manage them: states, corporations, international bodies', fill: C.mustard },
  ], { ag: 60, size: 17, arrows: false });
  s += c.svg; y += c.h;
  add('01-definitions', svg(900, y + 26, 'Defining globalisation precisely', s),
    'Giddens defines globalisation as the intensification of worldwide social relations that shape local events and vice versa; Harvey describes time-space compression. Answers can separate flows of people, goods, money, images and ideas from the structures that manage them.',
    'Say what changes: intensifying links and compressed time and space.',
    '## Defining globalisation precisely');
}

// 02 Appadurai scapes
{
  add('02-scapes', compareFig('Appadurai (1996): five “scapes”', {
    cols: [{ head: 'What flows', fill: C.tealLight }, { head: 'Example of a disjuncture', fill: C.cream }],
    labelW: 160, size: 16,
    rows: [
      { label: 'Ethnoscapes', fill: C.teal, cells: ['People: migrants, tourists, refugees, students', 'A diaspora keeps a homeland’s music alive abroad'] },
      { label: 'Mediascapes', fill: C.teal, cells: ['Images and stories carried by media', 'Audiences imagine life in another country through film'] },
      { label: 'Technoscapes', fill: C.teal, cells: ['Technology and technical skills', 'Mobile banking faster in parts of Africa than parts of Europe'] },
      { label: 'Financescapes', fill: C.teal, cells: ['Capital and currency', 'Money moves across borders far faster than workers'] },
      { label: 'Ideoscapes', fill: C.teal, cells: ['Political ideas such as democracy or rights', '"Freedom" meaning different things in different places'] },
    ],
    foot: { head: 'The point', text: 'The flows move at different speeds and in different directions, so the outcome is not simple Westernisation (contrast Schiller’s cultural imperialism, 1969).' },
  }),
    'Appadurai’s five scapes, ethnoscapes, mediascapes, technoscapes, financescapes and ideoscapes, each with what flows and an example of a disjuncture between them.',
    'Uneven flows mean global culture is not simply Westernisation.',
    '## Cultural globalisation in more depth');
}

// 03 Political globalisation
{
  let s = '', y = 110;
  const tl1 = timeline(y, [
    { date: '1948', text: 'Universal Declaration of Human Rights', fill: C.teal },
    { date: '1979', text: 'CEDAW: UN convention against discrimination against women', fill: C.cream },
    { date: '1989', text: 'Fukuyama, "The End of History?": liberal democracy has no serious ideological rival', fill: C.tealLight },
    { date: '1995', text: 'Beijing Platform for Action on gender equality', fill: C.cream },
    { date: '1998 / 2002', text: 'Rome Statute; International Criminal Court operates from 2002', fill: C.teal },
  ], { dx: 150, gap: 10 });
  s += tl1.svg; y += tl1.h + 18;
  const n = note(y, 'Norms spread more easily than they are enforced', 'States sign treaties and then interpret them selectively; authoritarian government has persisted and revived.');
  s += n.svg; y += n.h;
  add('03-political', svg(900, y + 26, 'Political globalisation: rights and norms', s),
    'A timeline of global political norms: the 1948 Universal Declaration of Human Rights, CEDAW in 1979, Fukuyama in 1989, the Beijing Platform in 1995 and the International Criminal Court from 2002, with a note that norms are unevenly enforced.',
    'Global norms are widely signed but selectively practised.',
    '## Political globalisation in more depth');
}

// 04 Extent debate
{
  add('04-extent', cardsFig('How far has globalisation gone?', {
    ncol: 3, size: 16, headSize: 19,
    cards: [
      { head: 'Hyperglobalist', sub: 'close to neo-liberal', body: 'A single global market exists; the nation state is losing power.', fill: C.teal },
      { head: 'Sceptical', sub: 'Hirst and Thompson (1996)', body: 'Trade and investment concentrated in Europe, North America and Japan; pre-1914 economy as open in some respects. Internationalisation, not globalisation.', fill: C.cream },
      { head: 'Transformationalist', body: 'Real but uneven; reshapes states rather than abolishing them.', fill: C.tealLight },
    ],
    foot: { head: 'Judge each type separately', text: ['**Capital:** highly globalised', '**Labour:** restricted by borders, passports and visas', '**Culture:** wide but often hybrid', '**Political norms:** widely signed, unevenly practised'] },
  }),
    'Hyperglobalist, sceptical (Hirst and Thompson) and transformationalist views of how far globalisation has gone, with a reminder to judge capital, labour, culture and political norms separately.',
    'Capital is global; people are not.',
    '## How far has globalisation gone? The extent debate');
}

// 05 Elephant curve (schematic)
{
  let s = '', y = 110;
  const x0 = 110, x1 = 840, base = y + 330, top = y + 30;
  s += panel(30, y - 6, 840, 420);
  s += `<line x1="${x0}" y1="${base}" x2="${x1}" y2="${base}" stroke="${C.ink}" stroke-width="2.5"/><line x1="${x0}" y1="${base}" x2="${x0}" y2="${top}" stroke="${C.ink}" stroke-width="2.5"/>`;
  const X = (p) => x0 + (x1 - x0 - 20) * p, Y = (g) => base - 260 * g;
  const pts = [[0.02, 0.35], [0.15, 0.55], [0.35, 0.85], [0.5, 0.9], [0.62, 0.7], [0.75, 0.25], [0.82, 0.08], [0.9, 0.3], [0.96, 0.75], [0.99, 0.95]];
  let d = `M${X(pts[0][0])},${Y(pts[0][1])}`;
  for (let i = 1; i < pts.length; i++) { const [px, py] = pts[i - 1], [qx, qy] = pts[i]; d += ` C${X((px * 2 + qx) / 3)},${Y(py)} ${X((px + qx * 2) / 3)},${Y(qy)} ${X(qx)},${Y(qy)}`; }
  s += path(d, { stroke: C.tealDark, w: 5 });
  s += `<circle cx="${X(0.45)}" cy="${Y(0.9)}" r="9" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`;
  s += para(X(0.45), Y(0.9) - 46, 220, 'Global middle, mostly in Asia: largest gains', { size: 15, weight: 700, anchor: 'middle' }).svg;
  s += `<circle cx="${X(0.82)}" cy="${Y(0.08)}" r="9" fill="${C.rust}" stroke="${C.ink}" stroke-width="2"/>`;
  s += para(X(0.66), Y(0.08) + 4, 180, 'Lower-middle classes of rich countries: smallest gains', { size: 15, weight: 700, anchor: 'end', fill: C.rust }).svg;
  s += `<circle cx="${X(0.99)}" cy="${Y(0.95)}" r="9" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`;
  s += para(X(0.99) - 16, Y(0.95) + 2, 150, 'Richest 1%: large gains', { size: 15, weight: 700, anchor: 'end' }).svg;
  s += label((x0 + x1) / 2, base + 30, 'position in the global income distribution: poorest → richest', { size: 15, anchor: 'middle', fill: C.muted });
  s += `<text x="${x0 - 24}" y="${(base + top) / 2}" font-size="15" fill="${C.muted}" text-anchor="middle" transform="rotate(-90 ${x0 - 24} ${(base + top) / 2})">income gain</text>`;
  y += 430;
  const n = note(y, 'Why it matters', 'Explains why globalisation is popular in some places and resented in others, and why both neo-liberal and negative globalist views find evidence. Losers also include the very poorest and workers facing sudden competition.');
  s += n.svg; y += n.h;
  add('05-elephant-curve', svg(900, y + 26, 'Milanovic’s “elephant curve”', s, 'income gains 1988–2008, schematic shape only (no data plotted)'),
    'A schematic elephant-shaped curve of income gains from 1988 to 2008 across the global income distribution: the largest gains in the global middle, mostly in Asia, and the richest 1 per cent, and the smallest gains among the lower-middle classes of rich countries.',
    'Globalisation’s gains were unequal, which explains both support and resentment.',
    '## Who has gained and who has lost?');
}

// 06 Global and local
{
  add('06-global-local', cardsFig('How the local survives', {
    ncol: 2, size: 16,
    cards: [
      { head: 'Glocalisation', sub: 'Robertson', body: 'Global brands adapt to local tastes, e.g. a halal menu in a Muslim-majority country.', fill: C.teal },
      { head: 'Grobalisation', sub: 'Ritzer (2004)', body: 'Corporations and states impose standardised "nothing" (identical chain stores) on local "something". Operates alongside glocalisation.', fill: C.cream },
      { head: 'Hybridisation', sub: 'Nederveen Pieterse (2004)', body: 'Mixing is the normal result of contact; there is no "pure" local culture to lose.', fill: C.tealLight },
      { head: 'Resistance and revival', sub: 'Barber (1995), Jihad vs. McWorld', body: 'Local, religious or ethnic identities reasserted; languages, foods and festivals revived as markers of identity.', fill: C.tealLight },
    ],
    foot: { head: '4-mark tip', text: 'Two separate mechanisms (adaptation and reaction), each with an example. Two examples of glocalisation count as one way.' },
  }),
    'Four ways global and local interact: Robertson’s glocalisation, Ritzer’s grobalisation, Nederveen Pieterse’s hybridisation and Barber’s resistance and revival, with an exam tip on distinct mechanisms.',
    'The local adapts, mixes and pushes back as well as being standardised.',
    '## The global and the local: how the local survives');
}
