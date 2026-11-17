import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-sociology-8192-changing-relationships-within-families';
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

// 01 Three periods of change
{
  const cols = [
    { head: 'Pre-industrial', fill: C.cream, sub: 'Before industrialisation', items: ['Most people lived and worked on the land', 'Family = **unit of production**: husband, wife and children worked together', 'Children worked from a young age'], study: '**Laslett** (parish records): most households were **nuclear**, partly because people married late and died young' },
    { head: 'Industrial', fill: C.tealLight, sub: 'Nineteenth century', items: ['Work moved into factories', 'Family stopped being the main unit of production', 'Women relied on mothers and female kin'], study: '**Anderson** (1851 census, Preston): more households included **extended kin**, helping with housing, jobs and childcare' },
    { head: 'Contemporary', fill: C.teal, sub: 'Twentieth century onwards', items: ['**Privatised nuclear family** more common', 'Home-centred and smaller', 'Less dependent on wider kin'], study: 'Willmott and Young: the **symmetrical**, home-centred family (Stage 3)' },
  ];
  const y0 = 150, cw = 264, gap = 24;
  let s = '';
  const hh = 56;
  const bodyH = Math.max(...cols.map((c) => bullets(0, 0, cw - 32, c.items, { size: 16 }).h));
  const studyH = Math.max(...cols.map((c) => para(0, 0, cw - 40, c.study, { size: 16 }).h));
  const H = hh + 46 + bodyH + 30 + studyH + 40;
  cols.forEach((c, i) => {
    const x = 30 + i * (cw + gap);
    s += headPanel(x, y0, cw, H, c.head, { fill: c.fill, hh, size: 21 }).svg;
    s += label(x + cw / 2, y0 + hh + 28, c.sub, { size: 16, anchor: 'middle', fill: C.muted, italic: true });
    s += bullets(x + 16, y0 + hh + 66, cw - 32, c.items, { size: 16 }).svg;
    const sy = y0 + H - studyH - 34;
    s += box(x + 12, sy, cw - 24, studyH + 22, { fill: C.cream, edge: C.olive, sw: 2 }) + para(x + 22, sy + 12 + 16 * 0.95, cw - 44, c.study, { size: 16 }).svg;
    if (i < 2) s += arrow(x + cw + 3, y0 + hh / 2, x + cw + gap - 3, y0 + hh / 2, { w: 3.5 });
  });
  s += arrow(60, 118, 840, 118, { w: 4, color: C.tealDark, marker: 'ahT' }) + label(450, 108, 'time', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  const n = note(y0 + H + 18, 'Myth to avoid', 'Pre-industrial families were not mainly extended: Laslett found most were nuclear, so the shift to the nuclear family did not simply begin with industry.');
  add('01-three-periods',
    svg(900, Math.round(y0 + H + 18 + n.h + 24), 'How family relationships changed over time', s + n.svg),
    'Three columns run along a time line. Pre-industrial families worked together as a unit of production, and Laslett found most households were nuclear. Industrial families lost their production role, and Anderson found more extended kin in 1851 Preston. Contemporary families became privatised, home-centred and nuclear.',
    'The family moved from a unit of production to a privatised, home-centred unit.',
    '## Three periods of change');
}

// 02 Why the privatised nuclear family became more common
{
  let s = '';
  const causes = [
    ['Rising living standards', 'and better housing made the home more comfortable'],
    ['Geographical mobility', 'families moved to new estates and towns for work'],
    ['Smaller families', 'more time and money for each child'],
    ['More married women', 'in paid work'],
    ['Home-based leisure', 'such as television kept couples at home together'],
  ];
  const y0 = 108, rh = 78, gap = 14, H = causes.length * (rh + gap) - gap;
  const bx = 600, bw = 270;
  causes.forEach(([h, b], i) => {
    const y = y0 + i * (rh + gap);
    s += box(30, y, 440, rh, { fill: C.tealLight, sw: 2 }) + label(50, y + 32, h, { size: 19, weight: 700 }) + label(50, y + 58, b, { size: 16 });
    s += arrow(476, y + rh / 2, bx - 6, y0 + H / 2 + (i - 2) * 34, { w: 3 });
  });
  s += box(bx, y0 + H / 2 - 120, bw, 240, { fill: C.mustard, sw: 3, r: 16 });
  s += label(bx + bw / 2, y0 + H / 2 - 50, 'Privatised', { size: 24, weight: 700, anchor: 'middle' }) + label(bx + bw / 2, y0 + H / 2 - 20, 'nuclear family', { size: 24, weight: 700, anchor: 'middle' });
  s += tl(bx + bw / 2, y0 + H / 2 + 22, ['home-centred', 'smaller', 'less dependent', 'on wider kin'], { size: 17, anchor: 'middle' }, 23);
  add('02-privatised-family-causes',
    svg(900, y0 + H + 30, 'Why the privatised nuclear family spread', s),
    'Five causes point to the privatised nuclear family: rising living standards and better housing, geographical mobility, smaller families, more married women in paid work, and home-based leisure such as television.',
    'Five twentieth-century changes pulled families into a smaller, home-centred unit.',
    '## Three periods of change');
}

// 03 Willmott and Young: four stages (staircase)
{
  const st = [
    ['1', 'Pre-industrial', 'The family works together as a unit of production', C.cream],
    ['2', 'Early industrial', 'Men work long hours outside the home; women rely on extended female kin', C.tealLight],
    ['3', 'Symmetrical (home-centred)', 'A privatised nuclear family; partners make similar contributions to running the home', C.teal],
    ['4', 'Managing director', 'Work-centred: husband focused on his career, wife responsible for home and children', C.cream],
  ];
  let s = '';
  const stepW = 205, base = 740, stepH = 150;
  st.forEach(([n, h, b, f], i) => {
    const x = 30 + i * stepW, top = base - (i + 1) * stepH;
    s += `<rect x="${x}" y="${top}" width="${stepW}" height="${base - top}" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += badge(x + 34, top + 34, 20, n, i === 2 ? C.mustard : C.panel);
    const hp = para(x + 62, top + 30, stepW - 72, h, { size: 18, weight: 700 });
    s += hp.svg;
    s += para(x + 14, top + 30 + hp.h + 22, stepW - 28, b, { size: 16 }).svg;
  });
  s += arrow(60, 200, 360, 200, { w: 3.5, color: C.tealDark, marker: 'ahT' }) + label(60, 185, 'functionalist “march of progress”', { size: 17, weight: 700, fill: C.tealDark });
  s += `<rect x="470" y="${base + 14}" width="390" height="36" rx="8" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` + label(665, base + 39, 'Stage 4 is LESS equal than Stage 3', { size: 17, weight: 700, anchor: 'middle' });
  const n = note(base + 70, 'The Symmetrical Family (1973)', ['Large-scale social survey: nearly 2,000 people interviewed in Greater London and surrounding areas', 'Symmetry was found to be more common in working-class families: manual work was “often boring and uninvolving”, so manual workers focused on family life']);
  add('03-four-stages',
    svg(900, Math.round(base + 70 + n.h + 24), 'Willmott and Young: four stages of the family', s + n.svg),
    'A staircase of four stages. Stage 1, pre-industrial: a unit of production. Stage 2, early industrial: men work long hours and women rely on female kin. Stage 3, symmetrical: a privatised, home-centred nuclear family. Stage 4, managing director: work-centred, and less equal than Stage 3.',
    'Willmott and Young saw family change as gradual progress, but Stage 4 is less equal than Stage 3.',
    '## Willmott and Young: the symmetrical family');
}

// 04 Symmetry is not identical roles
{
  let s = '';
  const cx = 450, py = 250;
  s += `<path d="M${cx - 55},430 L${cx},${py + 8} L${cx + 55},430 Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  s += `<rect x="130" y="${py - 8}" width="640" height="16" rx="6" fill="${C.ink}"/>`;
  const pan = (x, head, fill) => `<line x1="${x}" y1="${py}" x2="${x - 100}" y2="${py + 60}" stroke="${C.ink}" stroke-width="2.5"/><line x1="${x}" y1="${py}" x2="${x + 100}" y2="${py + 60}" stroke="${C.ink}" stroke-width="2.5"/>` +
    `<path d="M${x - 120},${py + 60} L${x + 120},${py + 60} Q${x + 110},${py + 115} ${x},${py + 117} Q${x - 110},${py + 115} ${x - 120},${py + 60} Z" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` +
    label(x, py + 94, head, { size: 18, weight: 700, anchor: 'middle' });
  s += pan(230, 'Partner A', C.teal) + pan(670, 'Partner B', C.cream);
  s += box(80, 108, 300, 100, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + box(520, 108, 300, 100, { fill: C.panel, edge: C.panelEdge, sw: 2 });
  s += label(230, 146, 'Different tasks', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark }) + para(230, 178, 270, 'roles are **not interchangeable**', { size: 17, anchor: 'middle' }).svg;
  s += label(670, 146, 'Equal weight', { size: 19, weight: 700, anchor: 'middle', fill: C.olive }) + para(670, 178, 270, 'roles are **of equal importance**', { size: 17, anchor: 'middle' }).svg;
  s += label(450, 470, 'Symmetry = similar contributions to running the household,', { size: 19, weight: 700, anchor: 'middle' }) + label(450, 498, 'e.g. shared chores and shared decisions', { size: 18, anchor: 'middle' });
  s += box(140, 522, 620, 52, { fill: C.cream, edge: C.olive, sw: 2 }) + label(450, 555, 'Common mistake: “partners do exactly the same jobs”', { size: 17, weight: 600, anchor: 'middle', fill: C.rust });
  add('04-symmetry-balance',
    svg(900, 600, 'What “symmetry” means', s),
    'A balanced pair of scales holds each partner’s contribution. The tasks are different and not interchangeable, but they are of equal importance, so the scales balance. Symmetry means similar contributions such as shared chores and decisions, not identical jobs.',
    'Symmetry means roles of equal importance, not identical roles.',
    '## Willmott and Young: the symmetrical family');
}

// 05 Stratified diffusion and the feminist problem
{
  let s = '';
  const layers = [['Top of the stratification system', 'Managers: Stage 4 managing director family found here', C.mustard], ['Middle', 'The pattern spreads down over time', C.cream], ['Bottom', '…and reaches other classes later', C.tealLight]];
  layers.forEach(([h, b, f], i) => {
    const y = 120 + i * 100, inset = i * 40;
    s += `<rect x="${60 + inset}" y="${y}" width="${520 - inset * 2}" height="84" rx="10" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += label(320, y + 36, h, { size: 19, weight: 700, anchor: 'middle' }) + label(320, y + 64, b, { size: 16, anchor: 'middle' });
  });
  s += arrow(625, 140, 625, 400, { w: 6, color: C.tealDark, marker: 'ahT' });
  s += para(650, 210, 220, '“What happens at the top today will diffuse **downwards** tomorrow”', { size: 17, fill: C.tealDark }).svg;
  const y2 = 450;
  s += box(30, y2, 400, 140, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + label(230, y2 + 34, 'Functionalist prediction', { size: 19, weight: 700, anchor: 'middle' }) + para(230, y2 + 66, 360, 'The Stage 4 family will spread to other classes over time: change is gradual and generally for the better', { size: 16, anchor: 'middle' }).svg;
  s += box(470, y2, 400, 140, { fill: C.cream, edge: C.olive, sw: 2 }) + label(670, y2 + 34, 'Feminist criticism', { size: 19, weight: 700, anchor: 'middle' }) + para(670, y2 + 66, 360, 'Little evidence of symmetry or of a move to Stage 4 in working-class families (Oakley: few husbands did a large share of housework)', { size: 16, anchor: 'middle' }).svg;
  s += `<circle cx="450" cy="${y2 + 70}" r="22" fill="${C.ink}"/>` + t(450, y2 + 77, 'vs', { size: 17, weight: 700, fill: '#ffffff', anchor: 'middle' });
  s += box(30, y2 + 160, 840, 76, { fill: C.mustard }) + label(450, y2 + 192, 'The contradiction: Stage 4 is less equal than Stage 3, so if stratified', { size: 18, weight: 700, anchor: 'middle' }) + label(450, y2 + 220, 'diffusion works, family life may become less symmetrical, not more', { size: 18, weight: 700, anchor: 'middle' });
  add('05-stratified-diffusion',
    svg(900, y2 + 262, 'The principle of stratified diffusion', s),
    'Three class layers with an arrow pointing down: the Stage 4 managing director family starts among managers at the top and spreads downwards. Functionalists see this as progress; feminists found little evidence of symmetry, and point out that Stage 4 is less equal than Stage 3.',
    'Change starts at the top and spreads down, but Stage 4 would make families less equal.',
    '## Willmott and Young: the symmetrical family');
}

// 06 Four contemporary family issues
{
  const r = cardRow(108, [
    { head: 'Quality of parenting', fill: C.teal, body: ['More **child-centred**: more time, money and attention on fewer children', 'Higher expectations: is parenting “good enough”?', 'State sets standards: smacking no longer lawful in Scotland and Wales', 'Feminists: criticism usually focuses on mothers'] },
    { head: 'Teenagers and adults', fill: C.tealLight, body: ['More **democratic**: rules on curfews, money and technology negotiated', 'But dependence lasts longer: education or training to 18, costly housing', 'Conflict over independence; a **youth culture** parents may not share'] },
  ], { size: 16, headSize: 20 });
  const r2 = cardRow(108 + r.h + 16, [
    { head: 'Care of the disabled and elderly', fill: C.cream, body: ['Ageing population: more families care for older relatives, some while raising children', '**Beanpole family** makes this more common', 'Feminists: unpaid care falls mainly on women, adding to the dual burden', 'Functionalists: a caring function; Marxists: saves the state and employers money'] },
    { head: 'Arranged marriage', fill: C.tealLight, body: ['Families choose or introduce partners, but **both partners consent**', 'Can link families and keep cultural and religious traditions', 'Many younger people describe a more “assisted” process with a strong say'] },
  ], { size: 16, headSize: 20 });
  add('06-contemporary-issues',
    svg(900, Math.round(108 + r.h + 16 + r2.h + 24), 'Four contemporary family issues', r.svg + r2.svg),
    'Four cards. Quality of parenting: families are more child-centred and the state sets standards. Teenagers and adults: relationships are more democratic but dependence lasts longer. Care of the disabled and elderly: an ageing population and beanpole families mean more unpaid care, mostly by women. Arranged marriage: families help choose partners but both consent, and the process is becoming more assisted.',
    'Each issue shows family relationships changing, and each can be linked to a perspective.',
    '## Contemporary family issues');
}

// 07 Arranged vs forced marriage
{
  const f = versusFig('Arranged marriage is not forced marriage', {
    left: { head: 'Arranged marriage', fill: C.teal, items: ['Families play a central part in choosing or introducing partners', '**Both partners consent**', 'Practised in some South Asian, Middle Eastern and other communities in the UK', 'Can link families and maintain cultural and religious traditions', 'Changing: often a more “assisted” process'] },
    right: { head: 'Forced marriage', fill: C.cream, items: ['One or both partners **do not consent**', 'Forcing someone to marry is a **criminal offence** in England and Wales'] },
    foot: { head: 'The test is consent', text: 'Treating the two as the same is a common mistake in exam answers.' },
  });
  add('07-arranged-vs-forced',
    f,
    'Two panels. In an arranged marriage families choose or introduce partners but both partners consent, and the process is becoming more assisted. In a forced marriage one or both partners do not consent, and forcing someone to marry is a criminal offence in England and Wales.',
    'Consent is the difference between an arranged and a forced marriage.',
    '## Contemporary family issues');
}
