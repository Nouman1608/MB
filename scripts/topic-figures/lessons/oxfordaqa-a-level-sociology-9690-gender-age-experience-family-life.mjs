import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-a-level-sociology-9690-gender-age-experience-family-life';
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

// 01 Traditional roles and triple shift
{
  let s = '', y = 110;
  const r = cardRow(y, [
    { head: 'Instrumental role', sub: 'husband: the "breadwinner"', body: 'Earns money and links the family to the economy.', fill: C.teal },
    { head: 'Expressive role', sub: 'wife', body: 'Cares for children and provides emotional warmth and support.', fill: C.cream },
  ], { size: 17 });
  s += r.svg; y += r.h + 10;
  s += label(450, y + 20, 'Parsons: segregated, complementary roles rooted in biology', { size: 16, italic: true, anchor: 'middle', fill: C.muted });
  y += 46;
  s += label(450, y + 10, 'Many employed women perform a triple shift', { size: 20, weight: 700, anchor: 'middle' });
  y += 30;
  const c = hchain(y, [
    { head: '1  Paid work', fill: C.tealLight },
    { head: '2  Domestic labour', body: 'Hochschild (1989): the "second shift"', fill: C.tealLight },
    { head: '3  Emotion work', body: 'managing partners’ and children’s feelings (Duncombe and Marsden, 1995)', fill: C.mustard },
  ], { arrows: false, ag: 20 });
  s += c.svg; y += c.h + 18;
  const n = note(y, 'Why "traditional" is in inverted commas', 'These roles are culturally specific and historically recent in many societies, where women have long done agricultural or market work.');
  s += n.svg; y += n.h;
  add('01-roles-triple-shift', svg(900, y + 26, 'Instrumental, expressive and the triple shift', s),
    'Parsons’s instrumental breadwinner role for husbands and expressive caring role for wives, then the triple shift of paid work, domestic labour and emotion work carried by many employed women.',
    'Women’s expressive role becomes a triple shift once they also take paid work.',
    '### "Traditional" roles');
}

// 02 Changing roles
{
  let s = '', y = 110;
  const cards = [
    ['Women’s employment', 'dual earners weaken the breadwinner model; more bargaining power'],
    ['Feminist ideas and equality laws', 'change expectations of fairness'],
    ['Decline of manual industry', 'fewer secure "male" jobs; "crisis of masculinity" (Mac an Ghaill)'],
    ['Smaller families and technology', 'less domestic work overall'],
    ['Changing fatherhood', 'more hands-on fathers in some groups'],
  ];
  const c1 = cardRow(y, cards.slice(0, 3).map(([h, b]) => ({ head: h, body: b, fill: C.tealLight })), { size: 16, headSize: 18 });
  s += c1.svg; y += c1.h + 14;
  const c2 = cardRow(y, cards.slice(3).map(([h, b]) => ({ head: h, body: b, fill: C.tealLight })), { size: 16, headSize: 18, x: 175, w: 550 });
  s += c2.svg; y += c2.h + 16;
  s += arrow(450, y, 450, y + 34); y += 44;
  const v = cardRow(y, [
    { head: 'Symmetrical family', sub: 'Young and Willmott (1973)', body: 'Roles becoming similar but not identical; both share paid and domestic work.', fill: C.teal },
    { head: 'Lagged adaptation', sub: 'Gershuny', body: 'Men’s share of housework rises slowly behind women’s move into paid work, as each generation learns new norms.', fill: C.cream },
  ]);
  s += v.svg; y += v.h;
  add('02-changing-roles', svg(900, y + 26, 'Why conjugal roles are changing', s),
    'Five reasons roles change: women’s employment, feminist ideas and equality laws, decline of manual industry, smaller families and technology, and changing fatherhood. These lead to Young and Willmott’s symmetrical family or Gershuny’s lagged adaptation.',
    'Roles are changing, but how far and how fast is disputed.',
    '### Changes to roles, and reasons');
}

// 03 Domestic labour distinctions
{
  add('03-domestic-labour', compareFig('Analysing the domestic division of labour', {
    sub: 'Oakley (1974) and Boulton (1983) challenge the symmetrical family',
    cols: [{ head: 'Often men', fill: C.teal }, { head: 'Often women', fill: C.cream }],
    labelW: 220, size: 17,
    rows: [
      { label: 'Tasks vs responsibility', cells: ['Cooks sometimes; "helps"; plays with children', 'Plans meals; notices what children need; responsible for their welfare'] },
      { label: 'Routine vs occasional', cells: ['Occasional, flexible tasks such as repairs', 'Daily, time-bound work: cooking, cleaning'] },
      { label: 'Paid help', cells: ['Some middle-class dual-earner couples buy domestic help…', '…so equality rests on the labour of other, often migrant, women'] },
    ],
    foot: { head: 'Power and decision making', text: ['**Edgell (1980):** husbands dominated very important decisions such as moving house', '**Pahl:** pooling income does not guarantee equal control', 'Economic dependence lowers bargaining power; men’s leisure is better protected'] },
  }),
    'A grid applying three distinctions, tasks versus responsibility, routine versus occasional work and paid help, to men’s and women’s domestic work, with Edgell and Pahl on power and money.',
    'Counting tasks hides who carries responsibility and power.',
    '### The division of domestic labour');
}

// 04 Violence explanations
{
  add('04-violence', cardsFig('Explaining violence in families', {
    ncol: 3, size: 16, headSize: 19,
    cards: [
      { head: 'Patriarchal authority', sub: 'Dobash and Dobash (1979)', body: 'Violence against wives linked to men’s sense of authority in a patriarchal society.', fill: C.teal },
      { head: 'Control', sub: 'radical feminists', body: 'A way men control women, not isolated individual pathology.', fill: C.teal },
      { head: 'Poverty and stress', sub: 'other explanations', body: 'Links with poverty, stress and alcohol help explain variation by class.', fill: C.cream },
    ],
    foot: { head: 'Measurement and meaning', text: ['Much violence is never reported, so official figures underestimate it; victims may fear disclosure', 'What counts as acceptable discipline of children is socially constructed and varies', 'Violence undermines functionalist pictures of family harmony'] },
  }),
    'Three explanations of family violence: Dobash and Dobash on patriarchal authority, radical feminists on control, and others on poverty, stress and alcohol. A note covers under-reporting and changing ideas of discipline.',
    'Feminists see control where others see stress, and much violence goes unrecorded.',
    '### Violence against women and children');
}

// 05 Childhood over time and place
{
  let s = '', y = 110;
  const tl1 = timeline(y, [
    { date: 'Medieval Europe', text: 'Children join the adult world early (Ariès, Centuries of Childhood)' },
    { date: 'Gradually', text: 'A separate idea of childhood develops' },
    { date: 'Laws', text: 'Child labour laws, compulsory education and child-protection law separate childhood further', fill: C.tealLight },
    { date: '1982', text: 'Postman: television gives children adult information, blurring the boundary again', fill: C.cream },
  ], { dx: 200 });
  s += tl1.svg; y += tl1.h + 24;
  const v = cardRow(y, [
    { head: 'Rural Bolivia (Punch)', body: 'Children take on household and farm tasks early and negotiate independence through work.', fill: C.cream },
    { head: 'Wealthy societies', body: 'Children excluded from paid work, longer in school, treated as dependent and needing protection.', fill: C.teal },
  ]);
  s += v.svg; y += v.h;
  add('05-childhood', svg(900, y + 26, 'Childhood is socially constructed', s),
    'A timeline from medieval Europe, where children joined the adult world early, through the growth of a separate childhood and child labour and education laws, to Postman’s claim that television blurs the boundary. Cards contrast children in rural Bolivia with wealthy societies.',
    'Childhood differs over time and between societies.',
    '### Children');
}

// 06 Child centredness
{
  let s = '', y = 110;
  const c = hchain(y, [
    { head: 'Smaller families' }, { head: 'Lower infant mortality' }, { head: 'Rising living standards' }, { head: 'Expert parenting advice' },
  ].map((x) => ({ ...x, fill: C.tealLight })), { arrows: false, ag: 16 });
  s += c.svg; y += c.h;
  for (const x of [130, 343, 557, 770]) s += arrow(x, y + 6, 450 + (x - 450) * 0.3, y + 60, { w: 3 });
  y += 64;
  s += `<rect x="200" y="${y}" width="500" height="92" rx="14" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + label(450, y + 38, 'Child-centred family', { size: 21, weight: 700, anchor: 'middle' }) + label(450, y + 66, 'more time, money and emotion invested in fewer children', { size: 16, anchor: 'middle' });
  y += 112;
  const n = note(y, 'Criticism', ['Adults still control children’s time, space and bodies: Gittins’s **age patriarchy**', 'Child centredness varies by class and between societies']);
  s += n.svg; y += n.h;
  add('06-child-centredness', svg(900, y + 26, 'Why families became child-centred', s),
    'Smaller families, lower infant mortality, rising living standards and expert parenting advice lead to the child-centred family. Gittins’s idea of age patriarchy and class variation qualify it.',
    'Child centredness grew, but adults still hold power over children.',
    '### Children');
}

// 07 Boomerang and grandparents
{
  let s = '', y = 110;
  const c = hchain(y, [
    { head: 'Reasons', body: 'housing costs, student debt, insecure work, relationship breakdown, cultural expectation', fill: C.cream },
    { head: 'Adult child returns home', body: 'the "boomerang" family', fill: C.mustard },
    { head: 'Mixed effects', body: 'delayed independence and strained resources, but stronger intergenerational ties', fill: C.teal },
  ], { ag: 36 });
  s += c.svg; y += c.h + 24;

  const r = cardRow(y, [
    { head: 'Status of older people', body: ['**Strong filial obligation** (e.g. Confucian filial piety): support, respect, authority in extended households', '**Status tied to paid work:** retirement can lower status; may live alone'], fill: C.tealLight },
    { head: 'Grandparent roles', body: ['Childcare for working parents; financial support', 'Passing on language, religion, family history', 'Skipped-generation households (parts of sub-Saharan Africa affected by HIV/AIDS)'], fill: C.tealLight },
  ]);
  s += r.svg; y += r.h + 18;
  const n = note(y, 'Ageing populations', 'Longer grandparent roles, but more dependent very old people needing care, often from the pivot generation.');
  s += n.svg; y += n.h;
  add('07-adult-children-older', svg(900, y + 26, 'Adult children and older people', s),
    'Reasons adult children return home to form boomerang families and the mixed effects, then a comparison of older people’s status where filial obligation is strong or status is tied to paid work, and grandparent roles.',
    'Generational roles stretch as children return and lives lengthen.',
    '### Adult children and "boomerang" families');
}
