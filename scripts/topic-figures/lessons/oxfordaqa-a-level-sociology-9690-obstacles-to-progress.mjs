import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-a-level-sociology-9690-obstacles-to-progress';
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

// 01 Definitions of progress
{
  add('01-progress', versusFig('What counts as progress?', {
    left: { head: 'Modernisation theory', items: ['Progress = economic growth', 'Plus Western-style institutions'] },
    right: { head: 'Sen (1999): capabilities', items: ['Development = expanding real freedoms', 'To be healthy, educated, safe and able to take part in decisions', 'An obstacle is anything that limits capabilities, even where income rises'] },
    foot: { head: 'Exam move', text: 'State which definition you are using: it shapes which obstacles look most important.' },
  }),
    'Modernisation theory equates progress with economic growth and Western institutions; Sen defines development as expanding capabilities such as health, education, safety and participation.',
    'The definition of progress decides which obstacles matter most.',
    '## What "progress" means first');
}

// 02 Pattern variables
{
  add('02-pattern-variables', compareFig('Parsons’s pattern variables', {
    sub: 'used by modernisation theorists to contrast traditional and modern societies',
    cols: [{ head: 'Traditional', fill: C.cream }, { head: 'Modern', fill: C.teal }],
    labelW: 0, size: 17,
    rows: [
      { label: '', cells: ['**Ascription:** status by birth', '**Achievement:** status by effort and merit'] },
      { label: '', cells: ['**Particularism:** treating people by personal ties', '**Universalism:** the same rules for all'] },
      { label: '', cells: ['**Collectivity orientation:** family or group first', '**Self-orientation:** individual goals'] },
      { label: '', cells: ['**Affectivity:** emotional relationships', '**Affective neutrality:** impersonal at work'] },
      { label: '', cells: ['**Diffuseness:** relationships cover many areas', '**Specificity:** relationships for one purpose'] },
    ],
    foot: { head: 'Evaluation', text: ['**Ethnocentric** and **blames the poor**, ignoring colonial history', 'Family networks finance businesses; East Asian growth kept strong group loyalties', '**Some support:** corruption and patronage are widely recognised barriers'] },
  }),
    'A table of Parsons’s five pattern variables: ascription versus achievement, particularism versus universalism, collectivity versus self-orientation, affectivity versus affective neutrality, and diffuseness versus specificity, with evaluation of modernisation theory.',
    'Modernisation theory treats traditional orientations as obstacles; critics call this ethnocentric.',
    '## Modernisation theory: values and practices');
}

// 03 Marxist mechanisms
{
  add('03-marxist-obstacles', cardsFig('Marxist views: the obstacle is the world economy', {
    ncol: 2, size: 16,
    cards: [
      { head: 'Commodity dependence', body: 'A few raw-material exports with swinging prices; value added by processing and branding is captured in richer countries.', fill: C.cream },
      { head: 'Debt', body: '1970s borrowing, then rising interest rates: the 1980s debt crisis diverted spending from health and education.', fill: C.cream },
      { head: 'Kicking away the ladder', sub: 'Chang (2002)', body: 'Rich states forbid the protective policies they used themselves.', fill: C.cream },
      { head: 'Accumulation by dispossession', sub: 'Harvey (2003)', body: 'Land, water and public services taken into private hands.', fill: C.cream },
    ],
    foot: { head: 'Remedy and evaluation', text: ['**Bello:** deglobalisation, economies reoriented to local and national needs', '**Against:** East Asian growth shows peripheral status is not permanent; Marxists reply it came with strong state direction', 'Marxists may underplay internal factors such as corruption'] },
  }),
    'Four Marxist mechanisms keeping poorer countries poor: commodity dependence, debt, rich states kicking away the ladder, and accumulation by dispossession, with Bello’s deglobalisation and evaluation.',
    'For Marxists, poverty is produced by how poorer countries are tied into world capitalism.',
    '## Marxist views: globalisation and capitalism');
}

// 04 Feminist views
{
  add('04-wid-gad', versusFig('Feminist views: from WID to GAD', {
    left: { head: 'Women in Development', sub: '1970s', items: ['Add women to existing projects'] },
    right: { head: 'Gender and Development', sub: 'later', items: ['Unequal power relations between women and men must themselves change'] },
    foot: { head: 'Evidence and debate', text: ['**Boserup (1970):** women did much farming, but projects gave training, land titles and technology to men', '**Sen (1990):** over 100 million "missing women" through neglect and sex-selective practices', '**Liberal feminists:** schooling and paid work erode patriarchy', '**Radical and Marxist feminists:** paid work adds to unpaid work, a "double burden"'] },
  }),
    'Women in Development sought to add women to existing projects; Gender and Development argued power relations must change. Notes cover Boserup, Sen’s missing women and the debate over a double burden.',
    'Adding women to projects is not the same as changing gender power.',
    '## Feminist views: globalisation and patriarchy');
}

// 05 Health and education
{
  add('05-health-education', compareFig('Why health and education gaps persist', {
    cols: [{ head: 'Health', fill: C.teal }, { head: 'Education', fill: C.tealLight }],
    labelW: 150, size: 16,
    rows: [
      { label: 'Access and provision', fill: C.cream, cells: [['**Inverse care law** (Tudor Hart, 1971): care least available where most needed', '**User fees** under structural adjustment deterred poor patients', '**Health-worker migration** to richer countries'], ['Distance to school, fees and uniforms', 'Child labour, early marriage', 'No safe toilets for girls; conflict']] },
      { label: 'Deeper causes', fill: C.cream, cells: [['**Neglected diseases:** research follows markets', '**Living conditions:** unsafe water, poor sanitation, malnutrition that clinics alone cannot fix'], ['**Quality:** Pritchett (2013), "schooling ain’t learning"; enrolment rose faster than skills', '**Within-country gaps:** rural, poor, disabled and minority-language children furthest behind']] },
    ],
    foot: { head: 'Use for evaluation', text: 'Gaps are partly produced by global processes and partly by national choices (spending, gender norms): weigh the three perspectives here.' },
  }),
    'A grid of reasons health and education inequalities persist: the inverse care law, user fees, health-worker migration, neglected diseases and living conditions; and barriers to school access, Pritchett’s gap between schooling and learning, and within-country gaps.',
    'Inequalities come from both global processes and national choices.',
    '## Why inequalities in health and education persist');
}

// 06 Doughnut
{
  let s = '', y = 110;
  const cx = 300, cy = y + 230;
  s += `<circle cx="${cx}" cy="${cy}" r="210" fill="${C.cream}" stroke="${C.rust}" stroke-width="4"/>`;
  s += `<circle cx="${cx}" cy="${cy}" r="190" fill="${C.teal}" stroke="none"/>`;
  s += `<circle cx="${cx}" cy="${cy}" r="100" fill="${C.cream}" stroke="${C.ink}" stroke-width="4"/>`;
  s += para(cx, cy - 4, 160, 'Below the foundation', { size: 18, weight: 700, anchor: 'middle' }).svg + para(cx, cy + 44, 150, 'needs not met', { size: 15, anchor: 'middle' }).svg;
  s += label(cx, cy - 136, 'Safe and just space', { size: 19, weight: 700, anchor: 'middle' }) + label(cx, cy + 150, 'for development', { size: 17, anchor: 'middle', weight: 600 });
  s += `<line x1="${cx + 100}" y1="${cy}" x2="560" y2="${cy + 40}" stroke="${C.ink}" stroke-width="2"/>` + para(570, cy + 46, 290, 'Social foundation: human needs', { size: 17, weight: 700 }).svg;
  s += `<line x1="${cx + 148}" y1="${cy - 148}" x2="560" y2="${cy - 110}" stroke="${C.rust}" stroke-width="2"/>` + para(570, cy - 104, 290, 'Ecological ceiling: do not exceed', { size: 17, weight: 700, fill: C.rust }).svg;
  s += para(570, y + 40, 300, 'Raworth, Doughnut Economics (2017)', { size: 18, weight: 700, fill: C.tealDark }).svg;
  y += 480;
  const r = cardRow(y, [
    { head: 'Common but differentiated responsibilities', sub: 'UNFCCC (1992)', body: 'All states act; those that industrialised first bear more responsibility.', fill: C.tealLight },
    { head: 'Offshoring', body: 'Moving production moves emissions and pollution to poorer countries.', fill: C.tealLight },
    { head: 'Degrowth', sub: 'Hickel (2020)', body: 'Rich countries cut material consumption so poorer ones can develop.', fill: C.tealLight },
  ], { size: 16, headSize: 17 });
  s += r.svg; y += r.h + 18;
  const n = note(y, 'The tension', 'Brundtland (1987) assumes growth and protection can be reconciled, yet the model that made rich countries rich drives climate change.');
  s += n.svg; y += n.h;
  add('06-doughnut', svg(900, y + 26, 'Development within limits', s),
    'Raworth’s doughnut: development must meet a social foundation of human needs without exceeding an ecological ceiling, leaving a safe and just space between. Cards cover common but differentiated responsibilities, offshoring and degrowth.',
    'Progress must lift everyone above the social foundation without breaking the ecological ceiling.',
    '## Globalisation, the climate crisis and sustainable development');
}

// 07 Conflict
{
  let s = '', y = 110;
  const r = cardRow(y, [
    { head: 'Direct effects', body: ['Deaths and injuries', 'Destroyed schools, clinics and roads', 'Landmines make farmland unusable'], fill: C.cream },
    { head: 'Indirect effects', body: ['Displacement', 'Collapse of public services', 'Lost schooling', 'Investment flight'], fill: C.cream },
  ]);
  s += r.svg; y += r.h + 24;
  s += label(30, y + 4, '"Greed and grievance" (Collier and Hoeffler)', { size: 19, weight: 700 }); y += 22;
  const c = hchain(y, [
    { head: 'Lootable resources', body: 'e.g. diamonds', fill: C.tealLight },
    { head: 'Opportunity to profit', fill: C.tealLight },
    { head: 'Civil war', body: 'Sierra Leone, 1991–2002', fill: C.mustard },
  ], { ag: 40 });
  s += c.svg; y += c.h + 18;
  const n = note(y, 'Responses and critique', ['**Kimberley Process (2003):** certification to stop "conflict diamonds"', '**Marxists:** global demand for minerals and arms sales by richer countries feed conflicts', 'Also: Collier’s conflict trap; Kaldor’s new wars']);
  s += n.svg; y += n.h;
  add('07-conflict', svg(900, y + 26, 'How war blocks development', s),
    'Direct effects of war such as deaths and destroyed infrastructure, and indirect effects such as displacement and lost schooling. A chain shows lootable resources creating profit opportunities that fuel civil war, as in Sierra Leone, with the Kimberley Process and a Marxist critique.',
    'War destroys development directly and is fed by resources and global demand.',
    '## Effects of wars and conflicts');
}
