import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-sociology-8192-life-chances';
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

// 01 What life chances are
{
  let s = '';
  s += label(450, 92, 'A person’s chances of achieving what a society values (Weber)', { size: 19, anchor: 'middle', fill: C.muted });
  const areas = [['Health and', 'life expectancy'], ['Education', ''], ['Employment', 'and income'], ['Housing', ''], ['Treatment by', 'criminal justice']];
  areas.forEach(([a, b], i) => {
    const x = 30 + i * 172;
    s += box(x, 118, 156, 80, { fill: [C.teal, C.tealLight, C.cream, C.tealLight, C.teal][i], sw: 2 }) + label(x + 78, b ? 152 : 164, a, { size: 17, weight: 700, anchor: 'middle' }) + (b ? label(x + 78, 176, b, { size: 16, anchor: 'middle' }) : '');
  });
  s += label(450, 250, 'Probabilities, not certainties', { size: 22, weight: 700, anchor: 'middle' });
  const grid = (x0, y0, good, head, f) => {
    let o = box(x0, y0, 400, 230, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + label(x0 + 200, y0 + 32, head, { size: 18, weight: 700, anchor: 'middle' });
    for (let k = 0; k < 20; k++) { const cx = x0 + 60 + (k % 10) * 31, cy = y0 + 80 + Math.floor(k / 10) * 46; o += `<circle cx="${cx}" cy="${cy}" r="12" fill="${k < good ? f : C.panel}" stroke="${C.ink}" stroke-width="2"/>`; }
    o += label(x0 + 200, y0 + 196, k2(good), { size: 16, anchor: 'middle', fill: C.muted });
    return o;
  };
  const k2 = (g) => (g > 10 ? 'more members reach the good outcome' : 'fewer members reach it, but some still do');
  s += grid(30, 274, 15, 'Group with better life chances', C.teal);
  s += grid(470, 274, 7, 'Group with poorer life chances', C.cream);
  s += `<circle cx="300" cy="${274 + 240 + 22}" r="11" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + label(320, 274 + 240 + 28, '= reaches a good outcome (schematic)', { size: 16, fill: C.muted });
  const n = note(274 + 240 + 52, null, '“Poorer life chances” means members are less likely to reach good outcomes, not that every member will fail.');
  add('01-what-life-chances-are',
    svg(900, Math.round(274 + 240 + 52 + n.h + 24), 'What life chances are', s + n.svg),
    'Five areas of life chances: health and life expectancy, education, employment and income, housing, and treatment by the criminal justice system. Below, two schematic groups of twenty dots: more members of one group reach a good outcome, but some members of the other group still do.',
    'Life chances are about probabilities across several areas, not certainties.',
    '## What life chances are');
}

// 02 Factor -> mechanism -> outcome
{
  const items = [
    { head: 'Factor', body: 'Social class', fill: C.teal },
    { head: 'Mechanism', body: 'Low income: damp, overcrowded housing; a healthy diet is hard to afford', fill: C.tealLight },
    { head: 'Outcome', body: 'Higher risk of illness: poorer health', fill: C.cream },
  ];
  const c = hchain(150, items, { size: 17, ag: 50 });
  let s = label(450, 128, 'Link all three in one sentence chain', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark }) + c.svg;
  const y = 150 + c.h + 36;
  s += label(450, y, 'More chains from the specification’s factors', { size: 19, weight: 700, anchor: 'middle' });
  const rows = [
    ['Gender', 'Unpaid caring, part-time work, the glass ceiling', 'Income, employment'],
    ['Age', 'Ageism: young job seekers and older workers', 'Employment, income'],
    ['Disability', 'Physical barriers and employer attitudes', 'Employment, income'],
    ['Sexuality', 'Prejudice and bullying at school or work', 'Education, health'],
  ];
  let yy = y + 20;
  rows.forEach(([a, b, d]) => {
    s += box(30, yy, 170, 58, { fill: C.teal, sw: 2 }) + label(115, yy + 36, a, { size: 17, weight: 700, anchor: 'middle' });
    s += arrow(204, yy + 29, 226, yy + 29, { w: 3 });
    s += box(230, yy, 420, 58, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + vcenter(244, yy, 58, 396, b, { size: 16 });
    s += arrow(654, yy + 29, 676, yy + 29, { w: 3 });
    s += box(680, yy, 190, 58, { fill: C.cream, edge: C.olive, sw: 2 }) + vcenter(775, yy, 58, 170, d, { size: 16, anchor: 'middle' });
    yy += 68;
  });
  add('02-factor-mechanism-outcome',
    svg(900, yy + 16, 'Explaining any factor', s),
    'A chain from factor to mechanism to outcome: social class works through low income, damp housing and a poor diet to raise the risk of illness. Below, four more chains: gender through unpaid caring and the glass ceiling, age through ageism, disability through barriers and attitudes, and sexuality through prejudice and bullying.',
    'Name the factor, give the mechanism, then the outcome it affects.',
    '## A grid for explaining any factor');
}

// 03 Equality Act 2010
{
  let s = '';
  const L = headPanel(30, 108, 404, 350, 'What it protects', { fill: C.teal, size: 21 });
  s += L.svg;
  ['Age', 'Disability', 'Race', 'Religion or belief', 'Sex', 'Sexual orientation'].forEach((g, i) => {
    const x = 52 + (i % 2) * 186, y = 184 + Math.floor(i / 2) * 70;
    s += `<rect x="${x}" y="${y}" width="172" height="54" rx="27" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2"/>` + label(x + 86, y + 33, g, { size: 17, weight: 700, anchor: 'middle' });
  });
  s += para(232, 420, 360, 'Brought earlier equality laws together', { size: 16, anchor: 'middle', fill: C.muted, italic: true }).svg;
  const R = headPanel(466, 108, 404, 350, 'Its limits', { fill: C.cream, size: 21 });
  s += R.svg + bullets(488, 190, 360, ['Discrimination can be **hard to prove**', 'Some inequalities, such as **unpaid caring**, are not covered by anti-discrimination law at all', 'Prejudice and harassment, for example over sexuality, have not disappeared'], { size: 17, gap: 14 }).svg;
  add('03-equality-act',
    svg(900, 482, 'The Equality Act 2010', s),
    'Left: the Equality Act 2010 protects against discrimination on grounds including age, disability, race, religion or belief, sex and sexual orientation. Right: its limits: discrimination is hard to prove, unpaid caring is not covered, and prejudice has not disappeared.',
    'The law offers protection, but it cannot remove every inequality in life chances.',
    '## A grid for explaining any factor');
}

// 04 Perspectives
{
  let s = '';
  s += box(30, 112, 300, 330, { fill: C.teal, sw: 2.5 }) + label(180, 150, 'Functionalist', { size: 21, weight: 700, anchor: 'middle' }) + label(180, 178, 'differences are fair outcomes', { size: 16, anchor: 'middle', weight: 600, fill: C.tealDark });
  s += bullets(50, 220, 260, ['Reflect talent and effort in a broadly meritocratic society', 'Social mobility lets able people improve their chances', 'Inequality motivates hard work'], { size: 16 }).svg;
  s += box(370, 112, 500, 330, { fill: C.panel, edge: C.panelEdge, sw: 2.5 }) + label(620, 150, 'Structured inequality', { size: 21, weight: 700, anchor: 'middle' }) + label(620, 178, 'but which cause matters most?', { size: 16, anchor: 'middle', weight: 600, fill: C.olive });
  s += box(390, 200, 220, 222, { fill: C.tealLight, sw: 2 }) + label(500, 230, 'Marxist: class', { size: 18, weight: 700, anchor: 'middle' }) + bullets(404, 262, 186, ['Capitalism concentrates wealth with owners', 'Workers face low pay and insecurity', 'Racism divides workers'], { size: 15.5, gap: 6 }).svg;
  s += box(630, 200, 220, 222, { fill: C.cream, sw: 2 }) + label(740, 230, 'Feminist: gender', { size: 18, weight: 700, anchor: 'middle' }) + bullets(644, 262, 186, ['Patriarchy: unpaid work, lower pay, glass ceiling, male violence', 'Outcomes differ between women by class and ethnicity'], { size: 15.5, gap: 6 }).svg;
  s += `<circle cx="350" cy="277" r="22" fill="${C.ink}"/>` + t(350, 284, 'vs', { size: 17, weight: 700, fill: '#ffffff', anchor: 'middle' });
  add('04-perspectives',
    svg(900, 466, 'Perspectives on life chances', s),
    'Functionalists see differences in life chances as fair outcomes of talent and effort, with social mobility. Against them, Marxists and feminists both see structured inequality but disagree on the main cause: class and capitalism for Marxists, patriarchy for feminists.',
    'Functionalists see fair outcomes; Marxists and feminists see structured inequality, but disagree on its cause.',
    '## Perspectives on life chances');
}
