import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-sociology-crime-and-stratification';
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
const vcenter = (x, yTop, h, w, s, o = {}) => { const size = o.size || 17; const p = para(0, 0, w, s, o); return para(x, yTop + (h - p.h) / 2 + size * 0.95, w, s, o).svg; };

// 01 Paper 2 map
{
  const secs = [
    ['3.5 Crime and deviance', C.teal, [
      ['3.5.1', 'Social construction of crime and deviance', 'Merton, Becker'],
      ['3.5.2', 'Social control', 'Heidensohn'],
      ['3.5.3', 'Criminal and deviant behaviour', 'Albert Cohen, Carlen'],
      ['3.5.4', 'Data on crime', 'the dark figure'],
    ]],
    ['3.6 Social stratification', C.cream, [
      ['3.6.1', 'Functionalist theory of stratification', 'Davis and Moore'],
      ['3.6.2', 'Socio-economic class', 'Marx, Weber'],
      ['3.6.3', 'Life chances', 'Devine'],
      ['3.6.4', 'Poverty as a social issue', 'Townsend, Murray'],
      ['3.6.5', 'Power and authority', 'Weber'],
      ['3.6.6', 'Power relationships', 'Walby'],
    ]],
  ];
  let s = '';
  const w = 412, rh = 84;
  secs.forEach(([h, f, items], i) => {
    const x = 30 + i * (w + 16);
    s += box(x, 108, w, 58, { fill: f }) + label(x + w / 2, 145, h, { size: 21, weight: 700, anchor: 'middle' });
    items.forEach(([n, t2, who], j) => {
      const y = 178 + j * (rh + 8);
      s += box(x, y, w, rh, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + label(x + 16, y + 30, n, { size: 16, weight: 700, fill: C.muted });
      s += para(x + 76, y + 30, w - 90, t2, { size: 17, weight: 700 }).svg.replace(/^/, '') ;
      s += label(x + 76, y + rh - 12, who, { size: 15, fill: C.tealDark, weight: 600, italic: true });
    });
  });
  const y = 178 + 6 * (rh + 8) + 8;
  const n = note(y, 'One toolkit for both sections', 'Functionalism, Marxism, feminism and interactionism (interactionism in 3.5). Research methods (3.7) is examined across both papers.');
  add('01-paper-2-map',
    svg(900, Math.round(y + n.h + 24), 'Paper 2 at a glance', s + n.svg),
    'Two columns. Crime and deviance has four parts, 3.5.1 to 3.5.4, with Merton, Becker, Heidensohn, Albert Cohen, Carlen and the dark figure. Social stratification has six parts, 3.6.1 to 3.6.6, with Davis and Moore, Marx, Weber, Devine, Townsend, Murray and Walby.',
    'Paper 2 has ten content areas and twelve named sociologists.',
    '## Syllabus coverage');
}

// 02 The revision grid
{
  const issues = ['Crime', 'Social control', 'Class', 'Poverty', 'Power'];
  const persp = [['Functionalism', C.teal], ['Marxism', C.tealLight], ['Feminism', C.cream], ['Interactionism', C.sand]];
  const x0 = 210, cw = 124, gap = 8, rh = 78;
  let s = '';
  issues.forEach((is, j) => { const x = x0 + j * (cw + gap); s += box(x, 108, cw, 52, { fill: C.ink, edge: C.ink, r: 10 }) + vcenter(x + cw / 2, 108, 52, cw - 12, is, { size: 16, weight: 700, anchor: 'middle', fill: '#ffffff' }); });
  persp.forEach(([p, f], i) => {
    const y = 172 + i * (rh + gap);
    s += box(30, y, 170, rh, { fill: f, sw: 2 }) + label(115, y + rh / 2 + 6, p, { size: 18, weight: 700, anchor: 'middle' });
    issues.forEach((_, j) => {
      const x = x0 + j * (cw + gap), na = i === 3 && j >= 2;
      s += box(x, y, cw, rh, { fill: na ? C.bg : C.panel, edge: C.panelEdge, sw: 2, dash: na ? '6 5' : '' });
      if (na) s += vcenter(x + cw / 2, y, rh, cw - 16, 'section 3.5 only', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
    });
  });
  // example cell
  const ex = x0 + 2 * (cw + gap), ey = 172;
  s += `<rect x="${ex + 3}" y="${ey + 3}" width="${cw - 6}" height="${rh - 6}" rx="9" fill="${C.cream}"/>` + vcenter(ex + cw / 2, ey, rh, cw - 14, 'Davis and Moore', { size: 15, weight: 700, anchor: 'middle' });
  const ey2 = 172 + (rh + gap);
  s += `<rect x="${ex + 3}" y="${ey2 + 3}" width="${cw - 6}" height="${rh - 6}" rx="9" fill="${C.cream}"/>` + vcenter(ex + cw / 2, ey2, rh, cw - 14, 'Marx: ownership', { size: 15, weight: 700, anchor: 'middle' });
  const y = 172 + 4 * (rh + gap) + 10;
  const n = note(y, 'Fill one cell at a time', 'One grid turns eighteen separate points into a pattern: for each issue, what does each perspective claim, and which named sociologist says it?');
  add('02-revision-grid',
    svg(900, Math.round(y + n.h + 24), 'One grid for the whole paper', s + n.svg),
    'A revision grid with the four perspectives down the side (functionalism, Marxism, feminism, interactionism) and five issues across the top (crime, social control, class, poverty, power). Interactionism applies to the crime section only. Two sample cells are filled: Davis and Moore for the functionalist view of class, and Marx on ownership for the Marxist view.',
    'Perspectives down the side, issues across the top: one grid for the whole paper.',
    '## How to approach it');
}

// 03 Crime, deviance and the dark figure
{
  let s = '';
  s += `<circle cx="230" cy="330" r="190" fill="${C.cream}" stroke="${C.ink}" stroke-width="3"/>` + `<circle cx="230" cy="390" r="110" fill="${C.teal}" stroke="${C.ink}" stroke-width="3"/>`;
  s += label(230, 196, 'DEVIANCE', { size: 22, weight: 700, anchor: 'middle' }) + label(230, 222, 'breaks social norms', { size: 17, anchor: 'middle' }) + label(230, 246, '(need not be illegal)', { size: 16, anchor: 'middle', fill: C.muted });
  s += label(230, 384, 'CRIME', { size: 22, weight: 700, anchor: 'middle' }) + label(230, 410, 'breaks the law', { size: 17, anchor: 'middle' });
  s += label(230, 552, 'Deviance is broader than crime', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  // dark figure bar
  const bx = 520, by = 150, bw = 120, bh = 380;
  s += label(bx + bw / 2 + 60, 130, 'All crime', { size: 18, weight: 700, anchor: 'middle' });
  s += `<rect x="${bx}" y="${by}" width="${bw}" height="${bh * 0.62}" fill="${C.ink}" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += `<rect x="${bx}" y="${by + bh * 0.62}" width="${bw}" height="${bh * 0.38}" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += label(bx + bw + 16, by + bh * 0.31 - 10, 'Dark figure', { size: 19, weight: 700 }) + label(bx + bw + 16, by + bh * 0.31 + 14, 'unreported or', { size: 16 }) + label(bx + bw + 16, by + bh * 0.31 + 34, 'unrecorded', { size: 16 });
  s += label(bx + bw + 16, by + bh * 0.81 - 10, 'Official', { size: 19, weight: 700 }) + label(bx + bw + 16, by + bh * 0.81 + 14, 'statistics', { size: 19, weight: 700 });
  s += label(bx + bw / 2 + 60, 560, 'not to scale', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  const n = note(590, 'Two common mix-ups', ['Treating crime and deviance as identical: a deviant act need not be illegal', 'Confusing the dark figure with the crime rate: it is the crime missing from the statistics']);
  add('03-crime-deviance-dark-figure',
    svg(900, Math.round(590 + n.h + 24), 'Crime, deviance and the dark figure', s + n.svg),
    'Left: a small circle for crime, which breaks the law, sits inside a larger circle for deviance, which breaks social norms and need not be illegal. Right: a bar for all crime, where official statistics show only the lower part and the dark figure of unreported or unrecorded crime sits above it.',
    'Deviance is wider than crime, and official statistics miss the dark figure.',
    '## Common mistakes');
}

// 04 Marx vs Weber: one dimension or three
{
  let s = '';
  const L = 30, R = 466, w = 404;
  s += headPanel(L, 108, w, 380, 'Marx', { fill: C.teal, size: 22 }).svg + headPanel(R, 108, w, 380, 'Weber', { fill: C.cream, size: 22 }).svg;
  s += para(L + w / 2, 190, w - 40, 'Class centres on **ownership of the means of production**', { size: 18, anchor: 'middle' }).svg;
  s += box(L + 112, 260, 180, 190, { fill: C.tealLight }) + label(L + w / 2, 340, 'Class', { size: 22, weight: 700, anchor: 'middle' }) + label(L + w / 2, 368, '(ownership)', { size: 16, anchor: 'middle', fill: C.muted });
  s += para(R + w / 2, 190, w - 40, 'Adds **status** and **party** as separate dimensions', { size: 18, anchor: 'middle' }).svg;
  ['Class', 'Status', 'Party'].forEach((p, i) => { const x = R + 28 + i * 120; s += box(x, 260, 108, 190, { fill: i ? C.mustard : C.tealLight }) + label(x + 54, 362, p, { size: 20, weight: 700, anchor: 'middle' }); });
  const n = note(508, 'Do not mix them up', 'Marx: one dimension, based on ownership. Weber: class plus status and party.');
  add('04-marx-weber-dimensions',
    svg(900, Math.round(508 + n.h + 24), 'Marx and Weber: one dimension or three?', s + n.svg),
    'Left: Marx’s account of stratification rests on one pillar, class based on ownership of the means of production. Right: Weber’s rests on three pillars, class, status and party.',
    'Marx centres on ownership; Weber adds status and party.',
    '## Common mistakes');
}

// 05 Worked example: functionalist vs Marxist stratification
{
  add('05-functionalist-marxist-stratification',
    versusFig('Is inequality fair?', {
      left: { head: 'Functionalist: Davis and Moore', sub: 'Stratification is necessary and beneficial', items: ['Society attaches greater rewards to its most important roles', 'Rewards motivate people to compete for demanding positions', 'The most able are allocated to the most important roles', 'Inequality is a **fair outcome** of meritocratic competition'] },
      right: { head: 'Marxist', sub: 'Stratification serves the powerful', items: ['The bourgeoisie own the means of production', 'They use that ownership to exploit the proletariat', 'Inequality serves the powerful, not society as a whole', 'The “fair” competition was **never actually offered**'] },
      foot: { head: 'What they disagree about', text: 'Whether inequality comes from fair competition or from unequal ownership and power. State both positions in their own terms, then set them side by side.' },
    }),
    'Two sides. Davis and Moore say greater rewards for important roles make the most able compete for them, so inequality is a fair outcome of meritocratic competition. Marxists say the bourgeoisie use ownership of the means of production to exploit the proletariat, so the competition was never fair.',
    'The real disagreement is whether the competition for rewards is fair.',
    '## Worked example');
}
