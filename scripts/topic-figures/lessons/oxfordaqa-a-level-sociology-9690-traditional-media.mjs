import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-a-level-sociology-9690-traditional-media';
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

// 01 Communication timeline
{
  let s = '', y = 110;
  const tl1 = timeline(y, [
    { date: '1840', head: 'Uniform penny post', text: 'Rowland Hill; the Penny Black. One low price anywhere in Britain made letter writing a mass activity.', fill: C.cream },
    { date: '1844, 1866', head: 'Telegraph', text: 'Morse’s Washington–Baltimore line; a lasting transatlantic cable. Carey (1989): separated communication from transport, making national markets, standard time and wire-service news possible.', fill: C.tealLight },
    { date: '1876', head: 'Telephone', text: 'Patented by Bell. Fischer (1992): marketed for business, but users, especially women, made it a tool for sociability.', fill: C.teal },
  ], { dx: 150 });
  s += tl1.svg; y += tl1.h + 18;
  const n = note(y, 'Exam link', 'Fischer’s telephone study supports a social constructionist reading of technology: users, not designers, decided its main use.');
  s += n.svg; y += n.h;
  add('01-communication', svg(900, y + 26, 'Post, telegraph, telephone', s),
    'A timeline of the 1840 penny post, the telegraph of 1844 and 1866 with Carey’s argument that it separated communication from transport, and the 1876 telephone, which Fischer found users turned into a tool for sociability.',
    'Each medium changed society, but users also changed each medium.',
    '## Communication: post, telegraph, telephone');
}

// 02 Newspapers and broadcasting
{
  add('02-print-broadcast', cardsFig('Newspapers, broadcasting and film', {
    ncol: 2, size: 16,
    cards: [
      { head: 'Imagined communities', sub: 'Anderson (1983)', body: '"Print capitalism": readers who never meet imagine one nation, reading the same news on the same day.', fill: C.cream },
      { head: 'The public sphere', sub: 'Habermas (1962)', body: 'Debate in eighteenth-century coffee houses and newspapers, later weakened by commercial mass media.', fill: C.cream },
      { head: 'Public service broadcasting', sub: 'Reith, BBC', body: '"Inform, educate and entertain". Commercial, advertising-funded broadcasting grew alongside and dominates in many countries.', fill: C.teal },
      { head: 'Film', sub: 'not only Western', body: 'Hollywood studios controlled production, distribution and cinemas; India’s Hindi film industry; Nollywood from the early 1990s.', fill: C.teal },
    ],
    foot: { head: 'Popular culture: control or struggle?', text: ['**Frankfurt School:** standardised mass culture makes audiences passive', '**Gramsci:** hegemony must be renewed and can be contested', '**Active audiences:** pleasure, identity, reworked meanings'] },
  }),
    'Anderson’s imagined communities, Habermas’s public sphere, Reith’s public service broadcasting and non-Western film industries, with three views of popular culture: Frankfurt School, Gramsci and active audiences.',
    'Mass media built nations and publics, and are contested sites of culture.',
    '## Newspapers, broadcasting and film');
}

// 03 How news is made
{
  let s = '', y = 110;
  s += `<rect x="30" y="${y}" width="200" height="200" rx="14" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>` + para(130, y + 90, 170, 'All events and wire stories', { size: 18, weight: 700, anchor: 'middle' }).svg;
  s += `<path d="M250,${y} L470,${y + 60} L470,${y + 140} L250,${y + 200} Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>`;
  s += label(355, y + 92, 'Gatekeeping', { size: 18, weight: 700, anchor: 'middle' }) + label(355, y + 116, '+ news values', { size: 17, weight: 600, anchor: 'middle' });
  s += arrow(474, y + 100, 530, y + 100, { w: 3.5 });
  s += `<rect x="536" y="${y + 50}" width="140" height="100" rx="14" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + label(606, y + 106, 'The news', { size: 18, weight: 700, anchor: 'middle' });
  s += arrow(680, y + 100, 724, y + 100, { w: 3.5 });
  s += `<rect x="730" y="${y + 30}" width="140" height="140" rx="14" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + para(800, y + 78, 120, 'What people think about', { size: 17, weight: 700, anchor: 'middle' }).svg;
  y += 220;
  const r = cardRow(y, [
    { head: 'Gatekeeping', sub: 'White (1950), "Mr Gates"', body: 'A wire editor rejected most stories for personal and practical reasons.', fill: C.cream },
    { head: 'News values', sub: 'Galtung and Ruge (1965)', body: 'Negativity, unexpectedness, elite nations and people, personalisation.', fill: C.cream },
    { head: 'Agenda-setting', sub: 'McCombs and Shaw (1972)', body: 'Not what to think, but what to think about (1968 US election).', fill: C.mustard },
  ], { size: 16, headSize: 18 });
  s += r.svg; y += r.h + 18;
  const n = note(y, 'Whose interests?', ['**Marxists:** news values and gatekeeping reflect owners’ and advertisers’ interests', '**Pluralists:** professional judgement and audience demand', '**Glasgow University Media Group:** journalists’ shared middle-class assumptions produce bias without instruction']);
  s += n.svg; y += n.h;
  add('03-news-selection', svg(900, y + 26, 'How news is made', s),
    'Events pass through gatekeeping and news values to become the news, which sets the agenda of what people think about. Cards cite White’s Mr Gates, Galtung and Ruge’s news values and McCombs and Shaw’s agenda-setting.',
    'News is selected, not simply reported.',
    '## Marxist and pluralist views: going deeper');
}

// 04 Ownership
{
  let s = '', y = 110;
  const r = cardRow(y, [
    { head: 'Horizontal integration', body: 'Several outlets of the same type (many newspapers)', fill: C.tealLight },
    { head: 'Vertical integration', body: 'Production, distribution and sale (a studio owning cinemas)', fill: C.tealLight },
    { head: 'Cross-media ownership', body: 'Newspapers, television and film', fill: C.tealLight },
  ], { size: 16, headSize: 18 });
  s += r.svg; y += r.h + 8;
  s += label(450, y + 18, 'Bagdikian (1983): a shrinking number of corporations owned most US media', { size: 16, italic: true, anchor: 'middle', fill: C.muted });
  y += 44;
  const r2 = cardRow(y, [
    { head: 'Allocative control', sub: 'stressed by Marxists', body: 'Owners decide budgets, editors and direction.', fill: C.cream },
    { head: 'Operational control', sub: 'stressed by pluralists', body: 'Editors and journalists decide daily content.', fill: C.teal },
  ], { size: 17 });
  s += r2.svg; y += r2.h;
  add('04-ownership', svg(900, y + 26, 'Ownership, control and concentration', s),
    'Horizontal, vertical and cross-media ownership, Bagdikian on concentration, and the distinction between owners’ allocative control, stressed by Marxists, and journalists’ operational control, stressed by pluralists.',
    'Who sets budgets and who writes the news are different kinds of control.',
    '## Ownership, control and concentration');
}

// 05 Representations
{
  add('05-representations', compareFig('Representations of social groups', {
    cols: [{ head: 'Pattern to know', fill: C.tealLight }, { head: 'Thinker or study', fill: C.cream }],
    labelW: 140, size: 16,
    rows: [
      { label: 'Social class', fill: C.teal, cells: ['Working class comic, feckless or criminal; middle-class life the norm', 'Owen Jones, Chavs (2011)'] },
      { label: 'Gender', fill: C.teal, cells: ['Women shown through appearance and domestic roles; camera positions viewers as male', 'Tuchman: symbolic annihilation; Mulvey (1975): the "male gaze"'] },
      { label: 'Ethnicity', fill: C.teal, cells: ['Minorities linked to crime, conflict or threat; under-represented in positive roles', 'Hall et al. (1978): the "mugging" panic; van Dijk (1991)'] },
      { label: 'Age', fill: C.teal, cells: ['Young people as folk devils; older people frail, comic or invisible', 'Cohen, Folk Devils and Moral Panics'] },
    ],
    foot: { head: 'Evaluate by asking', text: ['Are patterns changing (more diverse casting)?', 'Do audiences accept or reject them?', 'Does content analysis capture meaning?'] },
  }),
    'A grid of media representations of social class, gender, ethnicity and age, each with a pattern and a thinker such as Owen Jones, Tuchman, Mulvey, Hall, van Dijk and Cohen, plus three evaluation questions.',
    'Representations follow patterns, but audiences may reject them.',
    '## Representations of social groups');
}

// 06 Testing audience models
{
  let s = '', y = 120;
  s += `<line x1="60" y1="${y}" x2="840" y2="${y}" stroke="${C.olive}" stroke-width="4" marker-start="url(#ahO)" marker-end="url(#ahO)"/>`;
  s += label(60, y - 14, 'passive audience', { size: 16, weight: 600, fill: C.olive }) + label(840, y - 14, 'active audience', { size: 16, weight: 600, fill: C.olive, anchor: 'end' });
  y += 24;
  const r = cardRow(y, [
    { head: 'Hypodermic syringe', sub: 'Bandura (1961 on)', body: 'Children copied an adult hitting a Bobo doll. Critics: artificial; a doll is not a person.', fill: C.cream },
    { head: 'Two step flow', sub: 'Katz and Lazarsfeld', body: 'Opinion leaders; later multi-step flow models.', fill: C.cream },
    { head: 'Cultural effects', sub: 'Gerbner; Hall (1973)', body: 'Heavy viewers overestimate crime: "mean world syndrome". Encoding/decoding: dominant, negotiated or oppositional readings.', fill: C.tealLight },
    { head: 'Uses and gratifications', sub: 'Blumler and Katz (1974)', body: 'People choose media to meet their needs.', fill: C.teal },
  ], { size: 15, headSize: 17, gap: 10 });
  s += r.svg; y += r.h + 18;
  const n = note(y, 'Key test: Morley (1980), Nationwide', 'Audiences read the same BBC programme differently by class and occupation, so audiences are active and the hypodermic model is too simple for most effects.');
  s += n.svg; y += n.h;
  add('06-audience-tests', svg(900, y + 26, 'Testing the audience models', s),
    'Four audience models from passive to active, each with research that tests it: Bandura’s Bobo doll, opinion leaders, Gerbner’s cultivation and Hall’s encoding/decoding, and uses and gratifications. Morley’s Nationwide study shows readings vary by class.',
    'Research evidence pushes the models towards an active audience.',
    '## Media and audiences: testing the models');
}
