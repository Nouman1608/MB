import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-sociology-8192-family-forms';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- Local layout helpers (sociology figures: wrapped text, tables, flows, cards) ----
const esc = (s) => String(s).replace(/&(?![a-z]+;|#\d+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const CW = 0.495, CWB = 0.55; // average glyph width / font size for Inter (regular, bold)
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

const box = (x, y, w, h, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.r ?? 12}" fill="${o.fill || C.panel}" stroke="${o.edge || C.ink}" stroke-width="${o.sw || 2.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
const pill = (x, y, w, h, s, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${o.fill || C.tealLight}" stroke="${o.edge || C.ink}" stroke-width="2"/>` + label(x + w / 2, y + h / 2 + (o.size || 17) * 0.36, s, { size: o.size || 17, weight: o.weight ?? 700, anchor: 'middle', fill: o.ink || C.ink });
const vcenter = (x, yTop, h, w, s, o = {}) => { const size = o.size || 17; const p = para(0, 0, w, s, o); return para(x, yTop + (h - p.h) / 2 + size * 0.95, w, s, o).svg; };

// people icons
const person = (x, y, f = C.teal, r = 15) => `<circle cx="${x}" cy="${y - r * 1.9}" r="${r * 0.62}" fill="${f}" stroke="${C.ink}" stroke-width="2.2"/><path d="M${x - r},${y} Q${x - r},${y - r * 1.2} ${x},${y - r * 1.2} Q${x + r},${y - r * 1.2} ${x + r},${y} Z" fill="${f}" stroke="${C.ink}" stroke-width="2.2"/>`;
const child = (x, y, f = C.cream) => person(x, y, f, 10);
const link = (x1, y1, x2, y2, o = {}) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${o.c || C.ink}" stroke-width="${o.w || 2.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;

// 01 Family vs household
{
  let s = '';
  s += `<ellipse cx="320" cy="330" rx="270" ry="205" fill="${C.teal}" fill-opacity="0.6" stroke="${C.ink}" stroke-width="3"/><ellipse cx="580" cy="330" rx="270" ry="205" fill="${C.cream}" fill-opacity="0.8" stroke="${C.ink}" stroke-width="3"/>`;
  s += label(190, 180, 'Household', { size: 23, weight: 700, anchor: 'middle' }) + para(190, 208, 190, 'same address, sharing facilities such as a kitchen', { size: 15, anchor: 'middle', fill: C.ink }).svg;
  s += label(710, 180, 'Family', { size: 23, weight: 700, anchor: 'middle' }) + para(710, 208, 190, 'linked by kinship, marriage, civil partnership or cohabitation', { size: 15, anchor: 'middle', fill: C.ink }).svg;
  s += person(150, 340, C.panel) + person(190, 340, C.panel) + person(230, 340, C.panel);
  s += para(190, 380, 190, '**Student house share**: household, not family', { size: 16, anchor: 'middle' }).svg;
  s += person(710, 340, C.panel) + para(710, 380, 190, '**Grandmother two streets away**: family, not household', { size: 16, anchor: 'middle' }).svg;
  s += person(430, 320, C.tealLight) + person(470, 320, C.tealLight) + child(440, 352) + child(462, 352);
  s += para(450, 400, 200, '**Couple and children at home**: both', { size: 16, anchor: 'middle' }).svg;
  s += box(30, 552, 840, 60, { fill: C.cream, edge: C.olive, sw: 2 }) + label(450, 589, 'So a single-person household is not a “family form”.', { size: 18, weight: 700, anchor: 'middle' });
  add('01-family-household',
    svg(900, 636, 'Family or household?', s),
    'Two overlapping circles. A household is people at the same address sharing facilities; a family is people linked by kinship, marriage, civil partnership or cohabitation. A student house share is a household but not a family; a grandmother two streets away is family but not household; a couple and children at home are both.',
    'Households share an address; families share kinship ties. Keep the two apart.',
    '## Families and households');
}

// 02 Five family forms
{
  let s = '';
  const W = 270, H = 300, gap = 15;
  const card = (i, head, body, art) => {
    const col = i % 3, row = Math.floor(i / 3);
    const x = 30 + col * (W + gap), y = 108 + row * (H + gap);
    const hp = headPanel(x, y, W, H, head, { fill: [C.teal, C.tealLight, C.cream, C.tealLight, C.teal][i], size: 20 });
    return hp.svg + art(x + W / 2, y + 160) + para(x + 16, y + 214, W - 32, body, { size: 15.5 }).svg;
  };
  s += card(0, 'Nuclear', 'Two generations: a couple and their dependent children', (cx, cy) => person(cx - 30, cy - 30) + person(cx + 30, cy - 30) + link(cx - 14, cy - 36, cx + 14, cy - 36) + link(cx, cy - 36, cx, cy - 10) + child(cx - 22, cy + 20) + child(cx + 22, cy + 20));
  s += card(1, 'Extended', 'Includes kin beyond the nuclear unit, e.g. grandparents living with children and grandchildren', (cx, cy) => person(cx - 24, cy - 52, C.mustard, 12) + person(cx + 24, cy - 52, C.mustard, 12) + person(cx - 24, cy - 6) + person(cx + 24, cy - 6) + child(cx - 18, cy + 30) + child(cx + 18, cy + 30));
  s += card(2, 'Reconstituted', 'One or both partners have children from a previous relationship; step-parents and step-siblings', (cx, cy) => person(cx - 30, cy - 30) + person(cx + 30, cy - 30, C.rock) + link(cx - 14, cy - 36, cx + 14, cy - 36) + child(cx - 40, cy + 20) + child(cx, cy + 20, C.rock) + child(cx + 40, cy + 20, C.rock) + label(cx + 72, cy - 30, 'step', { size: 15, fill: C.muted }));
  s += card(3, 'Lone parent', 'One parent with dependent children; most UK lone parent families are headed by mothers', (cx, cy) => person(cx, cy - 30) + child(cx - 22, cy + 20) + child(cx + 22, cy + 20));
  s += card(4, 'Single sex', 'Headed by a same-sex couple, with or without children (civil partnership 2004; marriage from 2014)', (cx, cy) => person(cx - 30, cy - 30) + person(cx + 30, cy - 30) + link(cx - 14, cy - 36, cx + 14, cy - 36) + child(cx, cy + 20));
  // key terms card
  const x = 30 + 2 * (W + gap), y = 108 + H + gap;
  s += box(x, y, W, H, { fill: C.cream, edge: C.olive, sw: 2 }) + label(x + 16, y + 34, 'Other key terms', { size: 19, weight: 700 });
  s += bullets(x + 16, y + 68, W - 32, ['**Cohabitation:** living together unmarried', '**Empty nest:** children have left home', '**Commune:** sharing property and child rearing'], { size: 15.5, dot: C.olive }).svg;
  add('02-five-family-forms',
    svg(900, 108 + 2 * H + gap + 24, 'The five family forms', s),
    'Five cards with simple figures. Nuclear: a couple and dependent children. Extended: three generations. Reconstituted: a couple with children from a previous relationship, including step-children. Lone parent: one parent with children, usually a mother. Single sex: a same-sex couple, with or without children. A sixth card defines cohabitation, the empty nest family and the commune.',
    'Name the form, then say who lives together and how it forms.',
    '## The five family forms in the specification');
}

// 03 Shapes of the extended family
{
  let s = '';
  const W = 410, H = 270;
  const cell = (i, head, body, art) => {
    const x = 30 + (i % 2) * (W + 20), y = 108 + Math.floor(i / 2) * (H + 16);
    return headPanel(x, y, W, H, head, { fill: [C.teal, C.tealLight, C.cream, C.mustard][i], size: 20 }).svg + art(x, y) + para(x + 18, y + H - 54, W - 36, body, { size: 16 }).svg;
  };
  s += cell(0, 'Vertically extended', 'Three or more generations living together', (x, y) => {
    let o = `<rect x="${x + 120}" y="${y + 62}" width="170" height="134" rx="8" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2"/>`;
    o += person(x + 205, y + 106, C.mustard, 11) + person(x + 205, y + 148, C.teal, 11) + child(x + 205, y + 184);
    return o;
  });
  s += cell(1, 'Horizontally extended', 'Kin of the same generation, e.g. a brother and his wife living with his sister’s family', (x, y) => {
    let o = `<rect x="${x + 70}" y="${y + 92}" width="270" height="96" rx="8" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2"/>`;
    [100, 140, 180, 230, 270, 310].forEach((px, k) => { o += person(x + px, y + 168, k < 2 ? C.cream : C.teal, 12); });
    return o;
  });
  s += cell(2, 'Modified extended', 'Separate households, close contact: visits, calls, shared childcare, money', (x, y) => {
    let o = '';
    [[110, 150], [205, 115], [300, 150]].forEach(([px, py]) => { o += `<rect x="${x + px - 34}" y="${y + py - 40}" width="68" height="56" rx="6" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2"/>` + person(x + px, y + py + 8, C.teal, 10); });
    o += link(x + 144, y + 128, x + 171, y + 110, { dash: '6 5', c: C.tealDark, w: 3 }) + link(x + 239, y + 110, x + 266, y + 128, { dash: '6 5', c: C.tealDark, w: 3 }) + link(x + 144, y + 150, x + 266, y + 150, { dash: '6 5', c: C.tealDark, w: 3 });
    return o;
  });
  s += cell(3, 'Beanpole (Brannen)', 'Long and thin: several living generations, few members in each', (x, y) => {
    let o = '';
    [0, 1, 2, 3].forEach((k) => { o += person(x + 190, y + 94 + k * 30, [C.mustard, C.cream, C.teal, C.tealLight][k], 9) + person(x + 220, y + 94 + k * 30, [C.mustard, C.cream, C.teal, C.tealLight][k], 9); });
    return o;
  });
  add('03-extended-family-shapes',
    svg(900, 108 + 2 * H + 16 + 24, 'Four shapes of extended family', s),
    'Four panels. A vertically extended family has three or more generations under one roof. A horizontally extended family includes kin of the same generation. A modified extended family lives in separate homes but keeps close contact. Brannen’s beanpole family has several generations with few members in each.',
    'Extended families can stretch up through the generations, sideways, or across separate homes.',
    '## The five family forms in the specification');
}

// 04 Rapoports: five types, one family
{
  let s = '';
  const cx = 450, cy = 330;
  const types = [
    ['Organisational', 'Internal structure, e.g. division of labour', 150, 175, false],
    ['Cultural', 'Beliefs and values, often ethnicity or religion', 750, 175, true],
    ['Class', 'Resources from class position', 150, 485, true],
    ['Life course', 'Stage in the family life cycle', 750, 485, true],
    ['Cohort', 'The historical period lived through', 450, 590, false],
  ];
  types.forEach(([h, b, x, y, on]) => {
    s += `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="${on ? C.olive : C.panelEdge}" stroke-width="${on ? 4 : 2.5}"${on ? '' : ' stroke-dasharray="6 6"'}/>`;
  });
  types.forEach(([h, b, x, y, on]) => {
    s += box(x - 135, y - 46, 270, 92, { fill: on ? C.cream : C.panel, edge: on ? C.olive : C.panelEdge, sw: on ? 3 : 2 }) + label(x, y - 14, h, { size: 20, weight: 700, anchor: 'middle' }) + para(x, y + 12, 246, b, { size: 15, anchor: 'middle', fill: C.ink }).svg;
  });
  s += `<circle cx="${cx}" cy="${cy}" r="105" fill="${C.teal}" stroke="${C.ink}" stroke-width="3"/>` + tl(cx, cy - 32, ['A working-class', 'Bangladeshi family', 'with teenage', 'children'], { size: 17, weight: 700, anchor: 'middle' }, 22);
  s += label(450, 112, 'The types overlap: this one family shows three at once', { size: 18, anchor: 'middle', fill: C.olive, weight: 700 });
  const n = note(656, 'Evaluation', ['“British families in transition” (1982) predates gay and lesbian households becoming more open and accepted, so the typology needs updating for single sex families', 'Use one type at a time, but recognise that real families combine them']);
  add('04-rapoports-diversity',
    svg(900, Math.round(656 + n.h + 24), 'The Rapoports: five types of diversity', s + n.svg),
    'Five types of diversity surround one family: organisational, cultural, class, life course and cohort. A working-class Bangladeshi family with teenage children is linked to three of them at once: class, cultural and life course. Below, the work predates the open acceptance of gay and lesbian households.',
    'Diversity is the central feature of British family life, and the types overlap.',
    '## The Rapoports on family diversity');
}

// 05 Global marriage forms
{
  let s = '';
  const node = (x, y, w, h, head, body, fill) => box(x - w / 2, y, w, h, { fill, sw: 2.5 }) + label(x, y + 30, head, { size: 19, weight: 700, anchor: 'middle' }) + para(x, y + 54, w - 24, body, { size: 15, anchor: 'middle', fill: C.ink }).svg;
  s += node(450, 108, 260, 60, 'Marriage', '', C.mustard);
  s += path('M450,168 L450,190 L230,190 L230,212') + path('M450,190 L670,190 L670,212');
  s += node(230, 214, 380, 120, 'Monogamy', 'One partner at a time; the only legal form in the UK (bigamy is a crime)', C.teal);
  s += node(670, 214, 380, 120, 'Polygamy', 'More than one partner at the same time', C.cream);
  s += path('M230,334 L230,360');
  s += node(230, 362, 380, 112, 'Serial monogamy', 'A series of monogamous relationships; more common with divorce and remarriage', C.tealLight);
  s += path('M670,334 L670,346 L572,346 L572,362') + path('M670,346 L768,346 L768,362');
  s += node(572, 362, 186, 140, 'Polygyny', 'One husband, two or more wives; legal in a number of countries', C.cream);
  s += node(768, 362, 186, 140, 'Polyandry', 'One wife, two or more husbands; rarer: some Himalayan communities', C.cream);
  const r = cardRow(540, [
    { head: 'Extended families', fill: C.tealLight, body: 'More common in many societies: pooling labour on the land and caring for elders with little state welfare' },
    { head: 'The kibbutz', fill: C.tealLight, body: 'Early Israeli kibbutzim: children often slept in communal children’s houses; child rearing shared' },
    { head: 'Matriarchal families', fill: C.tealLight, body: 'Headed by women, who hold authority over the household' },
  ], { size: 15.5, headSize: 18 });
  s += label(450, 528, 'Other forms beyond the UK pattern', { size: 18, weight: 700, anchor: 'middle' }) + r.svg;
  const n = note(540 + r.h + 16, 'Why it matters', 'These examples challenge Murdock’s claim that the nuclear family is universal, and show that family forms are social constructs shaped by law, religion and economics.');
  add('05-global-forms',
    svg(900, Math.round(540 + r.h + 16 + n.h + 24), 'Family forms in a global context', s + n.svg),
    'A tree: marriage divides into monogamy, the only legal form in the UK, with serial monogamy below it, and polygamy, which divides into polygyny (one husband, several wives) and polyandry (one wife, several husbands). Below, extended families, the kibbutz and matriarchal families, which challenge the idea that the nuclear family is universal.',
    'Global examples show the nuclear family is not universal but socially constructed.',
    '## Family forms in a global context');
}

// 06 Snapshot vs lifetime (Chester)
{
  let s = '';
  const L = headPanel(30, 108, 404, 360, 'A snapshot of households', { fill: C.cream, size: 20 });
  s += L.svg;
  const kinds = [['nuclear', C.teal], ['lone parent', C.tealLight], ['empty nest', C.cream], ['reconstituted', C.tealLight], ['single sex', C.cream], ['nuclear', C.teal], ['cohabiting', C.tealLight], ['extended', C.cream], ['nuclear', C.teal]];
  kinds.forEach(([k, f], i) => { const x = 52 + (i % 3) * 124, y = 184 + Math.floor(i / 3) * 70; s += `<rect x="${x}" y="${y}" width="112" height="56" rx="8" fill="${f}" stroke="${C.ink}" stroke-width="2"/>` + label(x + 56, y + 34, k, { size: 15, anchor: 'middle', weight: 600 }); });
  s += label(232, 440, 'Diversity looks great', { size: 18, weight: 700, anchor: 'middle', fill: C.olive });
  const R = headPanel(466, 108, 404, 360, 'One person’s lifetime', { fill: C.teal, size: 20 });
  s += R.svg;
  const stages = [['Couple with young children', 'nuclear (often neo-conventional: both work)', C.teal], ['Children leave home', 'empty nest family', C.cream]];
  stages.forEach(([a, b, f], i) => { const y = 184 + i * 120; s += box(490, y, 356, 84, { fill: f, sw: 2 }) + label(668, y + 36, a, { size: 17, weight: 700, anchor: 'middle' }) + para(668, y + 62, 330, b, { size: 15, anchor: 'middle' }).svg; if (!i) s += arrow(668, y + 88, 668, y + 116, { w: 3 }); });
  s += label(668, 440, 'Most pass through a nuclear family', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  const n = note(486, 'Chester (1985)', 'Most people still spend part of their lives in a nuclear family, so diversity may be greater in a snapshot of households than across people’s lifetimes.');
  add('06-snapshot-lifetime',
    svg(900, Math.round(486 + n.h + 24), 'Diversity: a snapshot or a lifetime?', s + n.svg),
    'Left: a snapshot of households shows many forms side by side. Right: one person’s lifetime moves from a nuclear family with young children, often neo-conventional with both partners working, to an empty nest family. Chester argued most people pass through a nuclear family at some point.',
    'The nuclear family may be one stage of life rather than a fixed type.',
    '## Perspectives on family diversity');
}
