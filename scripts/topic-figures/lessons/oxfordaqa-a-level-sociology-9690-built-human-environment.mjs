import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-a-level-sociology-9690-built-human-environment';
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

// 01 Ibn Khaldun's cycle
{
  let s = '';
  s += cycle(450, 350, 250, 175, [
    { head: 'Desert nomads', body: 'strong ’asabiyyah (group solidarity)', fill: C.teal },
    { head: 'Conquest', body: 'solidarity lets them conquer settled peoples', fill: C.tealLight },
    { head: 'Settled in cities', body: 'comfort and luxury weaken solidarity', fill: C.cream },
    { head: 'Replaced', body: 'a new group with stronger solidarity takes over', fill: C.mustard },
  ], { bw: 250, center: 'Ibn Khaldun, Muqaddimah (1377)', cw: 180 });
  const n = note(580, 'Why it matters', 'An early idea that the built environment changes social bonds.');
  s += n.svg;
  add('01-ibn-khaldun-cycle', svg(900, 580 + n.h + 26, 'Ibn Khaldun’s cycle of solidarity', s),
    'A cycle: desert nomads with strong group solidarity conquer settled peoples, settle in cities where comfort and luxury weaken their solidarity, and are replaced by a new group.',
    'For Ibn Khaldun, settling in cities slowly dissolves group solidarity.',
    '## Nomadic lifestyles');
}

// 02 Rural power
{
  add('02-rural-power', cardsFig('Rural poverty is about power', {
    ncol: 3, size: 16, headSize: 19,
    cards: [
      { head: 'Peasants', sub: 'Wolf (1966)', body: ['Farm small plots with household labour', 'Produce partly for own use, partly for sale', 'States and markets take a share through rent, taxes or prices'], fill: C.teal },
      { head: 'Landless labourers', sub: 'wages or a share of the crop', body: ['**Sharecropping:** rent paid as a share of the harvest', '**Debt bondage:** working off a loan that never ends (some South Asian brick kilns and farms)'], fill: C.cream },
      { head: 'Resistance', sub: 'Scott (1985), Malaysian village', body: ['"Everyday" tactics: foot-dragging, gossip, pilfering, false compliance', 'Organised: Brazil’s Landless Workers’ Movement'], fill: C.tealLight },
    ],
    foot: { head: 'Rural depopulation', text: 'Young adults leave: ageing villages, abandoned farmland, closing schools, "left-behind children" in China. Since 2008, "land grabs" add pressure on smallholders.' },
  }),
    'Peasants farm with household labour but lose a share of output to states and markets; landless labourers face sharecropping and debt bondage; Scott shows everyday resistance. A note covers rural depopulation and land grabs.',
    'Control of land and credit, not just productivity, shapes rural poverty.',
    '## Rural areas: peasants and landless labourers');
}

// 03 Classic urban theories
{
  add('03-urban-theories', compareFig('What does city life do to people?', {
    cols: [{ head: 'Argument', fill: C.tealLight }, { head: 'Limitation', fill: C.cream }],
    labelW: 210, size: 16,
    rows: [
      { label: 'Tönnies (1887)', fill: C.teal, cells: ['From **Gemeinschaft** (community: kinship and place) to **Gesellschaft** (association: contract and self-interest).', 'Idealises village life.'] },
      { label: 'Simmel (1903) "The Metropolis and Mental Life"', fill: C.teal, cells: ['Constant stimulation produces a **blasé attitude**: reserved and calculating.', 'Based on one kind of European city.'] },
      { label: 'Wirth (1938) "Urbanism as a Way of Life"', fill: C.teal, cells: ['**Size, density and heterogeneity** produce impersonal, segmented ties and weaker social control.', 'Ignores close communities within cities.'] },
    ],
    foot: { head: 'Challenge: Gans (1962), The Urban Villagers', text: 'Close-knit Italian American neighbourhoods in Boston: cities contain villages.' },
  }),
    'A grid of Tönnies, Simmel and Wirth on city life, each with a limitation, and Gans’s finding of close-knit urban villages in Boston.',
    'Classic theories saw cities weakening community; Gans found villages inside them.',
    '## Urbanisation and social life in cities');
}

// 04 Slums debate
{
  add('04-slums-debate', cardsFig('Four views of informal housing', {
    ncol: 2, size: 16,
    cards: [
      { head: 'Integrated and exploited', sub: 'Perlman (1976), Rio de Janeiro favelas', body: 'Not marginal: residents are workers, voters and consumers, but exploited and stigmatised.', fill: C.teal },
      { head: 'Self-help', sub: 'Turner (1972)', body: 'Residents build and improve better than state projects; support settlements, do not demolish.', fill: C.teal },
      { head: 'Property titles', sub: 'de Soto (2000)', body: 'Legal titles turn homes into capital for loans. Critics: titles can raise land values and push the poorest out.', fill: C.cream },
      { head: 'Community action', sub: 'Orangi Pilot Project, Karachi (1980)', body: 'Started by Akhtar Hameed Khan: residents built their own low-cost sewers lane by lane.', fill: C.cream },
    ],
    foot: { head: 'Balance against Davis, Planet of Slums', text: 'His bleaker account set against these views gives a balanced evaluation. Keep the inverted commas: "slum" can stigmatise.' },
  }),
    'Perlman, Turner, de Soto and the Orangi Pilot Project offer four views of informal housing, set against Mike Davis’s bleaker Planet of Slums.',
    'Informal settlements can be seen as integrated, self-built and improvable, not only as failures.',
    '## Slums and informal housing');
}

// 05 Segregation and gates
{
  add('05-separation', compareFig('Ways of separating city space', {
    cols: [{ head: 'Suburbia', fill: C.tealLight }, { head: 'Segregation', fill: C.cream }, { head: 'Gated communities', fill: C.teal }],
    labelW: 0, size: 16,
    rows: [
      { label: '', cells: [['After 1945, mass-built suburbs such as Levittown', 'Car-based, low-density family housing', 'Critics: conformity, isolated housewives, racial exclusion'], ['**Legal:** South Africa’s Group Areas Act (1950)', '**Or** markets, prejudice and housing policy', '**Wacquant (2008):** "advanced marginality" in Chicago and Paris'], ['**Caldeira (2000):** "fortified enclaves" in São Paulo, driven by fear of crime', '**Low (2003):** residents cite safety but also "niceness" and homogeneity']] },
    ],
    foot: { head: 'Do not confuse', text: 'Gated communities are about controlled access, not just suburban location.' },
  }),
    'Suburbia, segregation and gated communities compared: Levittown-style suburbs, legal and market-based segregation including the Group Areas Act and Wacquant, and Caldeira’s and Low’s studies of gated enclaves.',
    'Suburbs, segregation and gates separate people in different ways.',
    '## Suburbia, segregation and gated communities');
}

// 06 Place vs non-place
{
  add('06-non-places', compareFig('Augé: place and non-place', {
    cols: [{ head: 'Anthropological place', fill: C.teal }, { head: 'Non-place', fill: C.cream }],
    labelW: 150, size: 17,
    rows: [
      { label: 'Relational', cells: ['People know each other', 'People do not know each other'] },
      { label: 'Historical', cells: ['Carries memory', 'Carries no memory'] },
      { label: 'Identity', cells: ['Concerned with identity', 'Not concerned with identity'] },
    ],
    foot: { head: 'Evaluation', text: ['Digital life may turn even homes into points of transit', 'Non-places can offer anonymity and freedom, e.g. to people escaping village surveillance'] },
  }),
    'Augé contrasts an anthropological place, which is relational, historical and concerned with identity, with a non-place that is none of these. Evaluation notes digital transit and the freedom of anonymity.',
    'A non-place lacks relationships, memory and identity, which can also mean freedom.',
    '## Megacities and non-places');
}

// 07 Gentrification
{
  let s = '', y = 110;
  const c = hchain(y, [
    { head: 'Middle-class newcomers', body: 'move into a working-class area', fill: C.cream },
    { head: 'Renovation', body: 'housing is done up', fill: C.cream },
    { head: 'Rising rents', fill: C.mustard },
    { head: 'Displacement', body: 'original residents pushed out', fill: C.teal },
  ], { ag: 34 });
  s += c.svg; y += c.h + 12;
  s += label(450, y + 18, 'gentrification: term coined by Ruth Glass (1964)', { size: 17, italic: true, anchor: 'middle', fill: C.muted });
  y += 40;
  const r = cardRow(y, [
    { head: 'Rural power', body: ['Landownership', 'Caste or lineage', 'Access to credit and irrigation', 'Gender norms about inheritance'], fill: C.tealLight },
    { head: '"Right to the city"', sub: 'Lefebvre (1968)', body: 'All residents, not only property owners, should shape urban space. Evictions for infrastructure or "beautification" show who holds this power.', fill: C.tealLight },
  ]);
  s += r.svg; y += r.h;
  add('07-gentrification', svg(900, y + 26, 'Who shapes rural and urban space?', s),
    'Gentrification as a chain: middle-class newcomers renovate a working-class area, rents rise and original residents are displaced. Cards list sources of rural power and Lefebvre’s right to the city.',
    'Gentrification and evictions show who holds power over space.',
    '## Power and inequalities in rural and urban areas');
}

// 08 Malthus vs Boserup
{
  add('08-malthus-boserup', versusFig('Population and food: two views', {
    left: { head: 'Malthus (1798)', items: ['Population grows faster than food', 'Famine and disease check growth'] },
    right: { head: 'Boserup (1965)', items: ['Population pressure drives farming innovation', 'Reverses Malthus’s argument'] },
    foot: { head: 'Evaluating demographic transition theory', text: ['**Urbanisation:** children cost more and contribute less labour; women gain education and paid work, which helps explain stage 3', '**A fifth stage?** Japan and South Korea: fertility well below replacement, shrinking populations', '**Limits:** based on European history; timing differs; state policy and religion shape fertility; migration left out'] },
  }),
    'Malthus argued population outgrows food until famine and disease check it; Boserup argued population pressure drives innovation. A note evaluates demographic transition theory: urbanisation and fertility, a possible fifth stage and its limits.',
    'Malthus and Boserup disagree on whether population pressure is a threat or a spur.',
    '## Demographic transition theory in depth');
}
