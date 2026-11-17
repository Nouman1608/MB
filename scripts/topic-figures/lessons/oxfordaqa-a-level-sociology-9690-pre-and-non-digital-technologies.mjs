import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-a-level-sociology-9690-pre-and-non-digital-technologies';
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

// 01 Taylorism, Fordism, post-Fordism
{
  add('01-taylor-ford', compareFig('Organising work with machines', {
    cols: [{ head: 'Taylorism', fill: C.cream }, { head: 'Fordism', fill: C.tealLight }, { head: 'Post-Fordism', fill: C.teal }],
    labelW: 120, size: 16,
    rows: [
      { label: 'Source', cells: ['Taylor (1911), scientific management', 'Ford’s moving assembly line (1913)', 'Piore and Sabel (1984)'] },
      { label: 'Key features', cells: ['Time-and-motion study; simple steps; managers plan, workers do', 'Standardised mass products; fixed tasks; relatively high wages', 'Flexible specialisation; niche runs; multi-skilled teams; computer-controlled machines'] },
      { label: 'Reading', cells: ['Braverman: basis of deskilling and managerial control', 'Blauner: high alienation; Gramsci: a whole way of life', 'Optimists: reskilling. Critics: insecure contracts'] },
    ],
    foot: { head: 'The Luddites (1811–1816)', text: 'Protested against machines being used to cut wages and replace skilled workers, not technology itself: the machine versus how it is used.' },
  }),
    'A grid comparing Taylorism, Fordism and post-Fordism by source, key features and sociological reading, with a note that the Luddites opposed how machines were used rather than machines themselves.',
    'What matters is not the machine but how it is used.',
    '### Taylorism, Fordism and after');
}

// 02 Sectors
{
  add('02-sectors', cardsFig('Extraction, manufacturing and services', {
    ncol: 3, size: 16, headSize: 19,
    cards: [
      { head: 'Extraction', sub: 'Coal Is Our Life (1956)', body: 'Dangerous shared work in a Yorkshire mining town: strong male solidarity, sharply divided gender roles. Mechanisation and pit closures broke these communities up.', fill: C.cream },
      { head: 'Manufacturing', sub: 'factory discipline', body: 'Clock time, shifts and supervision. Export manufacturing now plays this role in many newly industrialising economies.', fill: C.tealLight },
      { head: 'Services', sub: 'Hochschild (1983), flight attendants', body: 'Emotional labour: managing your own feelings to produce the right emotion in customers. Scripts and call monitoring control it.', fill: C.teal },
    ],
    foot: { head: 'The deskilling debate', text: 'Braverman explains routine factory and office work; Bell and post-Fordists explain skilled technical work. Say which workers each describes.' },
  }),
    'Three sectors of work: extraction, with the mining community of Coal Is Our Life; manufacturing, with factory discipline; and services, with Hochschild’s emotional labour. A note frames the deskilling debate.',
    'Each sector shaped community, control and emotion at work differently.',
    '### Extraction, manufacturing and services');
}

// 03 Mobilities
{
  add('03-mobilities', cardsFig('Mobilities and mass transport', {
    sub: 'Sheller and Urry (2006): movement, not fixed places, should be central',
    ncol: 3, size: 16, headSize: 19,
    cards: [
      { head: 'Railways', sub: 'Schivelbusch (1977)', body: ['Landscapes a blur through the window: the "annihilation of space and time"', 'Timetables pushed Britain to a single standard time', 'Seaside day-trips; suburbs along lines'], fill: C.teal },
      { head: 'Cars and roads', sub: 'Model T (1908)', body: ['Car ownership for many US families; freedom; suburbs', 'Traffic deaths, pollution, noise', 'Road-built cities disadvantage the young, elderly, disabled and poorer households'], fill: C.tealLight },
      { head: 'Air travel', sub: 'jets from the 1950s', body: ['Cheaper flights: mass activity in richer countries', 'Tourism, migration, diaspora visits, business', 'Benefits very uneven; emissions affect everyone'], fill: C.cream },
    ],
    foot: { head: 'Environment', text: 'Transport is a major source of greenhouse gases and urban air pollution; roads and airports take land and split habitats.' },
  }),
    'Railways, cars and air travel compared: Schivelbusch on rail perception and standard time, the Model T, car-based cities that disadvantage people without cars, and unevenly shared air travel, with environmental effects.',
    'Each transport revolution brought freedom for some and costs for many.',
    '## Mobilities and mass transport');
}

// 04 Consumption
{
  add('04-consumption', cardsFig('Why do people consume?', {
    ncol: 2, size: 16,
    cards: [
      { head: 'Display', sub: 'Veblen', body: 'Conspicuous consumption by the wealthy.', fill: C.cream },
      { head: 'Taste and class', sub: 'Bourdieu (1979), Distinction', body: 'Taste reflects class and cultural capital; the dominant class defines "good taste", so consumption reproduces class boundaries.', fill: C.cream },
      { head: 'Sign value', sub: 'Baudrillard (1970)', body: 'Goods bought for what they signify about the owner more than for their use value.', fill: C.teal },
      { head: 'Planned obsolescence', sub: 'Phoebus cartel (from 1924)', body: 'Lightbulb makers agreed to limit bulb life: products designed to wear out or go out of fashion.', fill: C.teal },
    ],
    foot: { head: 'Evaluation', text: ['Consumption is also creativity and identity (youth subcultures rework goods)', 'Green critics link consumerism to waste and emissions', 'Much consumption is ordinary and necessary, not conspicuous'] },
  }),
    'Four explanations of consumption: Veblen’s display, Bourdieu’s taste and cultural capital, Baudrillard’s sign value and planned obsolescence such as the Phoebus cartel, with evaluation.',
    'Consumption signals status and class as well as meeting needs.',
    '## Consumerism and conspicuous consumption');
}

// 05 Determinism spectrum
{
  let s = '', y = 120;
  s += `<line x1="60" y1="${y}" x2="840" y2="${y}" stroke="${C.olive}" stroke-width="4" marker-start="url(#ahO)" marker-end="url(#ahO)"/>`;
  s += label(60, y - 14, 'technology shapes society', { size: 16, weight: 600, fill: C.olive }) + label(840, y - 14, 'society shapes technology', { size: 16, weight: 600, fill: C.olive, anchor: 'end' });
  y += 24;
  const r = cardRow(y, [
    { head: 'Determinist', body: ['**White (1962):** the stirrup made shock combat and armoured knights possible, helping produce feudalism (heavily criticised)', '**Marx:** the hand-mill', '**McLuhan:** "the medium is the message"'], fill: C.cream },
    { head: 'Middle positions', body: ['**Latour:** actor-network theory; technologies and people act together', '**Soft determinism:** technology makes outcomes easier or harder, but people decide how to use it'], fill: C.tealLight },
    { head: 'Constructionist', body: ['**Winner (1980):** Long Island bridges built low to keep buses out (evidence disputed)', '**Cowan (1983):** household machines did not cut housework time', '**Wajcman (1991):** technology shaped by gender relations'], fill: C.teal },
  ], { size: 16, headSize: 18 });
  s += r.svg; y += r.h + 24;
  s += label(30, y + 6, 'Cowan: why “labour-saving” machines did not save time', { size: 19, weight: 700 }); y += 26;
  const bx = (x, yy, w, h, txt, f) => `<rect x="${x}" y="${yy}" width="${w}" height="${h}" rx="12" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + para(x + w / 2, yy + h / 2 - (para(0, 0, w - 24, txt, { size: 17, weight: 700 }).h) / 2 + 17 * 0.95, w - 24, txt, { size: 17, weight: 700, anchor: 'middle' }).svg;
  s += bx(30, y + 45, 220, 90, 'Washing machines, vacuum cleaners', C.tealLight);
  s += bx(330, y, 250, 70, 'Standards of cleanliness rose', C.cream) + bx(330, y + 110, 250, 70, 'Servants and helpers disappeared', C.cream);
  s += bx(660, y + 45, 210, 90, 'Women’s housework time not reduced', C.mustard);
  s += arrow(254, y + 90, 654, y + 90, { w: 3.5 }) + arrow(584, y + 38, 654, y + 72, { w: 3, color: C.olive, marker: 'ahO' }) + arrow(584, y + 142, 654, y + 108, { w: 3, color: C.olive, marker: 'ahO' }) + label(600, y + 24, 'because', { size: 15, italic: true, fill: C.olive }) + label(600, y + 168, 'because', { size: 15, italic: true, fill: C.olive });
  y += 180;
  add('05-determinism-construction', svg(900, y + 26, 'Does technology determine society?', s),
    'A spectrum from determinist cases (White’s stirrup, Marx, McLuhan) through middle positions (Latour, soft determinism) to constructionist cases (Winner, Cowan, Wajcman). A diagram shows the two reasons household machines did not reduce women’s housework time.',
    'Technologies make some outcomes easier, but social choices shape how they are used.',
    '## Technological determinism versus social construction: further cases');
}
