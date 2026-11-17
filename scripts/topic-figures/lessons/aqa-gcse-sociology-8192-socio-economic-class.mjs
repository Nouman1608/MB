import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-sociology-8192-socio-economic-class';
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

// 01 Income vs wealth
{
  let s = '';
  const L = headPanel(30, 108, 404, 404, 'Income: a FLOW', { fill: C.teal, size: 22 });
  const R = headPanel(466, 108, 404, 404, 'Wealth: a STOCK', { fill: C.cream, size: 22 });
  s += L.svg + R.svg;
  // flow: arrows streaming
  [0, 1, 2].forEach((k) => { s += arrow(90, 236 + k * 34, 330, 210 + k * 34, { w: 5, color: C.tealDark, marker: 'ahT' }); });
  s += label(232, 216, 'money over time', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 700 });
  s += para(232, 346, 360, 'Wages, benefits, rent received', { size: 17, weight: 700, anchor: 'middle' }).svg;
  s += box(52, 396, 360, 96, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + para(68, 428, 330, '**A footballer** may have a high income but little wealth if they spend it all', { size: 16 }).svg;
  // stock: stacked blocks
  [[560, 312, 'property'], [680, 312, 'land'], [620, 268, 'shares'], [620, 224, 'savings']].forEach(([x, y, l]) => { s += `<rect x="${x - 56}" y="${y - 42}" width="112" height="42" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` + label(x, y - 15, l, { size: 15.5, weight: 700, anchor: 'middle' }); });
  s += para(668, 346, 360, 'Assets owned: property, land, shares, savings', { size: 17, weight: 700, anchor: 'middle' }).svg;
  s += box(488, 396, 360, 96, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + para(504, 428, 330, '**An aristocratic family** may own great wealth in land while drawing a modest income', { size: 16 }).svg;
  add('01-income-wealth',
    svg(900, 532, 'Income or wealth?', s),
    'Left: income is a flow of money over time, such as wages, benefits or rent; a footballer may have a high income but little wealth. Right: wealth is a stock of assets such as property, land, shares and savings; an aristocratic family may own great wealth but draw a modest income.',
    'Income flows in over time; wealth is what you own.',
    '## What "socio-economic class" means');
}

// 02 Class divisions with movement
{
  let s = '';
  const layers = [
    ['Upper class', 'Aristocracy, owners of large businesses, the very wealthy: inherited wealth, land and capital, private education', 480, C.mustard],
    ['Middle class', 'Professionals, managers, white collar workers: non-manual work, qualifications, salaries and career ladders', 660, C.teal],
    ['Working class', 'Manual workers, skilled and unskilled: wages, traditionally linked to industry, more job insecurity', 840, C.tealLight],
  ];
  let y = 112;
  layers.forEach(([h, b, w, f]) => {
    const x = 450 - w / 2;
    s += box(x, y, w, 100, { fill: f, sw: 2.5 }) + label(450, y + 34, h, { size: 20, weight: 700, anchor: 'middle' }) + para(450, y + 60, w - 60, b, { size: 15.5, anchor: 'middle' }).svg;
    y += 110;
  });
  s += box(30, y, 840, 70, { fill: C.panel, sw: 2, dash: '8 6' }) + label(450, y + 32, 'Underclass (disputed)', { size: 18, weight: 700, anchor: 'middle', fill: C.muted }) + label(450, y + 56, 'outside regular paid work for long periods; a term used by Murray', { size: 15.5, anchor: 'middle', fill: C.muted });
  const r = cardRow(y + 92, [
    { head: '↑ Embourgeoisement', fill: C.teal, body: 'Affluent manual workers take on middle-class lifestyles and values. Devine’s study does not support it.' },
    { head: '↓ Proletarianisation', fill: C.cream, body: 'Some white collar workers lose status, pay and control, so their position comes closer to the working class.' },
  ], { size: 16, headSize: 19 });
  s += label(450, y + 84, 'Two ideas about change between classes', { size: 18, weight: 700, anchor: 'middle' }) + r.svg;
  const n = note(y + 92 + r.h + 16, null, 'Class is an **open** system: social mobility is possible, unlike caste or slavery.');
  add('02-class-divisions',
    svg(900, Math.round(y + 92 + r.h + 16 + n.h + 24), 'Class divisions in the UK', s + n.svg),
    'Stacked classes: an upper class of aristocracy and owners with inherited wealth; a middle class of professionals, managers and white collar workers; a working class of manual workers; and a disputed underclass. Below, embourgeoisement, manual workers taking on middle-class lifestyles, and proletarianisation, white collar workers moving closer to the working class.',
    'Three broad classes, a disputed fourth, and two arguments about movement between them.',
    '## Identifying class divisions in the UK');
}

// 03 Measuring class
{
  let s = '';
  const items = [
    { head: '1911', body: 'Registrar General’s scale: jobs ranked from professional to unskilled manual', fill: C.tealLight },
    { head: '2001 onwards', body: 'NS-SEC: occupations grouped by employment relations: security, promotion prospects, control over work', fill: C.teal },
  ];
  const c = hchain(118, items, { size: 16, ag: 60 });
  s += c.svg;
  const y = 118 + c.h + 24;
  const r = cardRow(y, [
    { head: 'Why occupation works', fill: C.panel, body: 'Practical: people know their job title' },
    { head: 'What it misses', fill: C.panel, body: 'Wealth from property or shares; people not in paid work' },
  ], { size: 17, headSize: 19 });
  s += r.svg;
  const y2 = y + r.h + 30;
  s += label(450, y2, 'Objective class vs subjective class', { size: 19, weight: 700, anchor: 'middle' });
  const r2 = cardRow(y2 + 18, [
    { head: 'Well-paid electrician', fill: C.cream, body: 'May see themselves as **working class**' },
    { head: 'Routine office worker', fill: C.cream, body: 'May describe themselves as **middle class**' },
  ], { size: 17, headSize: 19 });
  s += r2.svg;
  const n = note(y2 + 18 + r2.h + 16, null, ['**Subjective class:** the class a person believes they belong to', '**Class alignment:** voting for the party linked with your class; **dealignment:** that link weakening']);
  add('03-measuring-class',
    svg(900, Math.round(y2 + 18 + r2.h + 16 + n.h + 24), 'How class is measured', s + n.svg),
    'Official measures moved from the Registrar General’s scale of 1911 to the NS-SEC from 2001, which groups occupations by employment relations. Occupation is practical but misses wealth and people not in work. Below, subjective class: a well-paid electrician may see themselves as working class, an office worker as middle class.',
    'Official class is based on occupation, but people’s own sense of class can differ.',
    '## Identifying class divisions in the UK');
}

// 04 Marx's epochs
{
  let s = '';
  const ep = [
    ['Primitive communism', 'No private property, no classes', C.tealLight],
    ['Ancient society', 'Based on slavery', C.cream],
    ['Feudal society', 'Lords own land; serfs work it', C.cream],
    ['Capitalism', 'Bourgeoisie own the means of production; proletariat sell their labour', C.mustard],
  ];
  const w = 195, g = 20;
  ep.forEach(([h, b, f], i) => {
    const x = 30 + i * (w + g), y = 180 - i * 0;
    s += box(x, 130, w, 150, { fill: f, sw: 2.5 }) + badge(x + 28, 160, 16, String(i + 1), C.panel) + para(x + 52, 156, w - 60, h, { size: 17, weight: 700 }).svg + para(x + 14, 212, w - 28, b, { size: 15.5 }).svg;
    if (i < 3) s += arrow(x + w + 2, 205, x + w + g - 2, 205, { w: 3 });
  });
  s += arrow(40, 108, 860, 108, { w: 3, color: C.tealDark, marker: 'ahT' }) + label(450, 100, 'Western society, epoch by epoch', { size: 15.5, weight: 700, anchor: 'middle', fill: C.tealDark });
  const items = [
    { head: 'Agriculture develops', body: 'Surplus wealth and private property appear', fill: C.panel },
    { head: 'A ruling class', body: 'Non-producers take control of the means of production', fill: C.panel },
    { head: 'A subject class', body: 'Obliged to work for the ruling class', fill: C.panel },
  ];
  const c = hchain(320, items, { size: 16, ag: 40 });
  s += label(450, 308, 'How classes first appeared', { size: 18, weight: 700, anchor: 'middle' }) + c.svg;
  const n = note(320 + c.h + 18, 'Means of production', 'Land, capital, labour power, buildings and machinery. Stratification comes from each group’s relationship to them.');
  add('04-marx-epochs',
    svg(900, Math.round(320 + c.h + 18 + n.h + 24), 'Marx: a theory of history', s + n.svg),
    'Four epochs: primitive communism with no classes, ancient society based on slavery, feudal society of lords and serfs, and capitalism of bourgeoisie and proletariat. Below, agriculture produced surplus wealth and private property, letting a ruling class of non-producers take control of the means of production and oblige a subject class to work.',
    'For Marx, classes appear when a group takes control of the means of production.',
    '## Marx on socio-economic class');
}

// 05 Marx's key ideas as a chain
{
  const f = flowFig('Marx: how capitalism works, and where it leads', {
    steps: [
      { head: 'Exploitation', body: 'Workers produce more value than their wages; owners keep the difference as profit' },
      { head: 'Ruling class ideology', body: 'Ideas such as “the free market” make capitalism look normal and natural; political power comes from economic power' },
      { head: 'False class consciousness', body: 'Workers who accept the status quo are victims of ideology' },
      { head: 'Class struggle and polarisation', body: 'Conflict drives change; the gap between bourgeoisie and proletariat grows' },
      { head: 'Proletarian revolution', body: 'Expected to create a communist, classless society', fill: C.cream, edge: C.olive },
    ],
    size: 16,
    foot: { head: 'Evaluation', text: ['The middle class grew rather than disappeared; no proletarian revolution in Britain', 'Some still see Marx as the best explanation, given persistent wealth gaps', 'New Right: capitalism brings benefits and social mobility', 'Smaller groups: **petty bourgeoisie** (small business owners), **lumpenproletariat** (outside regular work)'] },
  });
  add('05-marx-chain', f,
    'Five steps: exploitation produces profit; ruling class ideology makes capitalism seem natural; workers who accept it have false class consciousness; class struggle and polarisation widen the gap; a proletarian revolution was expected to bring communism. Below, evaluation: the middle class grew and no revolution happened in Britain.',
    'Marx predicted polarisation and revolution; the growth of the middle class challenges him.',
    '## Marx on socio-economic class');
}

// 06 Weber: class, status, party
{
  let s = '';
  const r = cardRow(122, [
    { head: 'Class', fill: C.teal, sub: 'Shared economic position', body: ['Defined by **market situation**: skills, pay, conditions', 'Shared life chances', 'Professionals earn more because their services are in demand'] },
    { head: 'Status', fill: C.cream, sub: 'Shared prestige or esteem', body: ['From occupation, ethnicity, religion or lifestyle', '**Social closure:** excluding outsiders, e.g. the caste system'] },
    { head: 'Party', fill: C.tealLight, sub: 'Groups organised for power', body: ['Political parties, pressure groups, interest groups', 'Can cut across class and status'] },
  ], { size: 16, headSize: 21 });
  s += r.svg + label(450, 106, 'Three separate sources of collective action', { size: 18, anchor: 'middle', fill: C.muted });
  const n = note(122 + r.h + 18, 'Where Weber agrees and disagrees with Marx', ['**Agrees:** the major division is between owners and non-owners', '**Disagrees:** non-owners are divided by skills; no polarisation, the middle class expands; revolution not inevitable; political power does not derive only from economic power']);
  add('06-weber-dimensions',
    svg(900, Math.round(122 + r.h + 18 + n.h + 24), 'Weber: class, status and party', s + n.svg),
    'Three cards. Class is a shared market situation giving shared life chances. Status is shared prestige from occupation, ethnicity, religion or lifestyle, protected by social closure. Party is groups organised for power, which can cut across class and status. Below, where Weber agrees and disagrees with Marx.',
    'For Weber, inequality has three separate dimensions, not only class.',
    '## Weber on socio-economic class');
}

// 07 Future of the middle class: Marx vs Weber
{
  let s = '';
  const L = headPanel(30, 108, 404, 380, 'Marx: polarisation', { fill: C.teal, size: 21 });
  const R = headPanel(466, 108, 404, 380, 'Weber: middle class expands', { fill: C.cream, size: 21 });
  s += L.svg + R.svg;
  // Marx: two big blocks, squeezed middle
  s += box(80, 190, 304, 60, { fill: C.mustard, sw: 2 }) + label(232, 228, 'Bourgeoisie', { size: 18, weight: 700, anchor: 'middle' });
  s += box(182, 262, 100, 24, { fill: C.panel, sw: 2 }) + label(232, 280, 'middle', { size: 15.5, anchor: 'middle', fill: C.muted });
  s += box(80, 298, 304, 90, { fill: C.tealLight, sw: 2 }) + label(232, 350, 'Proletariat', { size: 18, weight: 700, anchor: 'middle' });
  s += arrow(150, 274, 176, 274, { w: 3, color: C.rust, marker: 'ahR' }) + arrow(314, 274, 288, 274, { w: 3, color: C.rust, marker: 'ahR' });
  s += para(232, 420, 360, 'The gap grows; the middle is squeezed; revolution expected', { size: 16, anchor: 'middle' }).svg;
  // Weber: several classes, expanding middle
  s += box(560, 190, 216, 40, { fill: C.mustard, sw: 2 }) + label(668, 216, 'Owners', { size: 17, weight: 700, anchor: 'middle' });
  s += box(510, 238, 316, 82, { fill: C.teal, sw: 2 }) + label(668, 272, 'Professionals, managers', { size: 17, weight: 700, anchor: 'middle' }) + label(668, 298, 'skills in demand', { size: 15.5, anchor: 'middle' });
  s += box(540, 328, 256, 60, { fill: C.tealLight, sw: 2 }) + label(668, 364, 'Manual workers', { size: 17, weight: 700, anchor: 'middle' });
  s += arrow(500, 279, 476, 279, { w: 3, color: C.tealDark, marker: 'ahT' }) + arrow(836, 279, 860, 279, { w: 3, color: C.tealDark, marker: 'ahT' });
  s += para(668, 420, 360, 'Several classes; the middle grows; revolution not inevitable', { size: 16, anchor: 'middle' }).svg;
  const n = note(506, 'Both criticised', 'New Right theorists accuse both Marx and Weber of bias and of ignoring the social mobility capitalism creates.');
  add('07-future-of-middle-class',
    svg(900, Math.round(506 + n.h + 24), 'Marx and Weber: what happens to the middle?', s + n.svg),
    'Left: Marx expected polarisation, with the middle squeezed between a bourgeoisie and a proletariat, leading to revolution. Right: Weber saw several classes, with a middle class of professionals and managers growing because their skills are in demand. Below, the New Right criticises both.',
    'Marx expected the middle to be squeezed; Weber expected it to grow.',
    '## Comparing Marx and Weber');
}
