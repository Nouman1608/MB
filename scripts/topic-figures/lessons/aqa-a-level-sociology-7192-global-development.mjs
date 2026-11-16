import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-sociology-7192-global-development';
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

// 01 Theories of development compared
{
  add('01-development-theories', compareFig('Five explanations of global inequality', {
    cols: [{ head: 'Why are poor countries poor?', fill: C.teal }, { head: 'Route to development', fill: C.tealLight }, { head: 'Key criticism', fill: C.cream }],
    labelW: 168, size: 16, headSize: 18,
    rows: [
      { label: 'Modernisation (Rostow)', cells: ['They lack the values and investment needed for take-off.', 'Western aid, investment and expertise.', 'Ethnocentric; ignores colonialism.'] },
      { label: 'Dependency (Frank)', cells: ['Surplus is drained from satellite to metropolis.', 'Break the exploitative relationship.', 'Cannot explain South Korea and Taiwan; isolation has not reliably worked.'] },
      { label: 'World systems (Wallerstein)', cells: ['Position in a core, semi-periphery and periphery.', 'Countries can move between zones.', 'Little room for choices inside countries.'] },
      { label: 'Neoliberalism', cells: ['State interference, corruption, protectionism.', 'Free trade, privatisation, spending cuts.', 'Cuts fell on health and education, hitting women and the poor.'] },
      { label: 'People-centred and post-development', cells: ['"Development" is a Western discourse (Escobar).', 'Small-scale, bottom-up, local change.', 'Small projects may not reach national scale.'] },
    ],
    foot: { head: 'Conflict and consensus', text: 'Modernisation theory is broadly consensus-based; dependency theory is conflict-based (Marxist).' },
  }),
    'A grid comparing modernisation, dependency, world systems, neoliberal and people-centred theories: why each thinks poor countries are poor, its route to development, and a key criticism.',
    'Each theory locates the cause of poverty somewhere different.',
    '## 1. Development, underdevelopment and global inequality');
}

// 02 Rostow's stages
{
  let s = '', base = 500;
  const st = ['Traditional society', 'Preconditions for take-off', 'Take-off', 'Drive to maturity', 'Age of high mass consumption'];
  const w = 164;
  st.forEach((name, i) => {
    const x = 30 + i * (w + 5), h = 124 + i * 58, y = base - h;
    s += `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${i === 2 ? C.mustard : i < 2 ? C.cream : C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += badge(x + w / 2, y + 32, 18, String(i + 1), C.panel);
    s += para(x + w / 2, y + 76, w - 20, name, { size: 17, weight: 700, anchor: 'middle' }).svg;
  });
  s += tl(40, 160, ['Western aid, investment and', 'expertise fill the gap for take-off'], { size: 17, weight: 600, fill: C.olive }, 22);
  s += arrow(300, 196, 372, 258, { color: C.olive, marker: 'ahO', w: 3.5 });
  let y = base + 22;
  const n = note(y, 'Evaluation', ['Ethnocentric: treats Western history as the only path, and ignores colonialism', 'East Asian growth used heavy state planning, not a simple Western model']);
  s += n.svg; y += n.h;
  add('02-rostow-stages', svg(900, y + 26, 'Rostow’s five stages of growth (1960)', s, 'modernisation theory'),
    'Five rising steps: traditional society, preconditions for take-off, take-off, drive to maturity, and the age of high mass consumption. Western aid and investment are meant to help societies reach take-off.',
    'Modernisation theory sees one path to development, with Western help at take-off.',
    '## 1. Development, underdevelopment and global inequality');
}

// 03 Frank and Wallerstein
{
  let s = '';
  s += panel(30, 104, 410, 420) + panel(460, 104, 410, 420);
  s += t(235, 144, 'Frank (1966): dependency', { size: 20, weight: 700, anchor: 'middle' });
  const mx = 235, my = 275;
  s += `<circle cx="${mx}" cy="${my}" r="58" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + t(mx, my + 6, 'Metropolis', { size: 17, weight: 700, anchor: 'middle' });
  [[-140, -78], [140, -78], [-140, 78], [140, 78]].forEach(([dx, dy]) => {
    const sx = mx + dx, sy = my + dy;
    s += `<circle cx="${sx}" cy="${sy}" r="38" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` + t(sx, sy + 5, 'Satellite', { size: 15, weight: 600, anchor: 'middle' });
    const L = Math.hypot(dx, dy), ux = -dx / L, uy = -dy / L;
    s += arrow(sx + ux * 42, sy + uy * 42, mx - ux * 64, my - uy * 64, { color: C.rust, marker: 'ahR', w: 4 });
  });
  s += t(mx, 432, 'surplus flows to the metropolis', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  s += tl(mx, 462, ['first through colonialism, later through', 'trade and debt (neo-colonialism)'], { size: 16, anchor: 'middle', fill: C.muted }, 21);
  s += t(665, 144, 'Wallerstein (1974): world system', { size: 20, weight: 700, anchor: 'middle' });
  const cx = 665, cy = 300;
  s += `<circle cx="${cx}" cy="${cy}" r="140" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += `<circle cx="${cx}" cy="${cy}" r="92" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += `<circle cx="${cx}" cy="${cy}" r="46" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += t(cx, cy + 6, 'Core', { size: 17, weight: 700, anchor: 'middle' });
  s += t(cx, cy - 62, 'Semi-periphery', { size: 15, weight: 600, anchor: 'middle' });
  s += t(cx, cy - 110, 'Periphery', { size: 15, weight: 600, anchor: 'middle' });
  s += `<line x1="${cx + 60}" y1="${cy + 92}" x2="${cx + 30}" y2="${cy + 40}" stroke="${C.tealDark}" stroke-width="3.5" marker-end="url(#ahT)" marker-start="url(#ahT)"/>`;
  s += t(cx, 470, 'countries can move between zones', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += t(cx, 498, 'unit of analysis: the whole world economy', { size: 16, anchor: 'middle', fill: C.muted });
  let y = 540;
  const n = note(y, 'Common error', 'Do not treat the two as identical: Wallerstein adds the semi-periphery and mobility between zones.');
  s += n.svg; y += n.h;
  add('03-frank-wallerstein', svg(900, y + 26, 'Dependency and world systems', s),
    'Left: Frank’s model, with surplus flowing from four satellites to the metropolis. Right: Wallerstein’s world system as rings of core, semi-periphery and periphery, with countries able to move between them.',
    'Wallerstein adds a middle zone and mobility to Frank’s two-part model.',
    '## 1. Development, underdevelopment and global inequality');
}

// 04 Measuring development
{
  let s = '', y = 104;
  const r = cardRow(y, [
    { head: 'GNI / GDP per capita', body: ['Easy to compare', 'Hides inequality within a country', 'Ignores unpaid work'], fill: C.cream },
    { head: 'Human Development Index', sub: 'UNDP, 1990; Mahbub ul Haq', body: ['Life expectancy at birth', 'Education: mean and expected years of schooling', 'GNI per capita', 'Still an average'], fill: C.tealLight },
    { head: 'Sen (1999)', sub: 'Development as Freedom', body: ['Judge development by the real freedoms people have', 'The capability approach behind the HDI'], fill: C.teal },
  ], { size: 16, gap: 40 });
  s += r.svg;
  const cw = (840 - 80) / 3;
  [0, 1].forEach((i) => { const x = 30 + (i + 1) * cw + i * 40; s += arrow(x + 4, y + r.h / 2, x + 36, y + r.h / 2); });
  y += r.h + 18;
  s += arrow(60, y + 10, 840, y + 10, { color: C.olive, marker: 'ahO', w: 4 });
  s += label(450, y + 42, 'from a narrow economic measure to a wider view of development', { size: 17, weight: 600, fill: C.olive, anchor: 'middle' });
  y += 52;
  add('04-measuring-development', svg(900, y + 26, 'Measuring development', s),
    'Three measures from narrow to wide: GNI per capita, which hides inequality and unpaid work; the Human Development Index, combining life expectancy, education and income; and Sen’s view of development as real freedoms.',
    'Each measure widens what counts as development.',
    '## 1. Development, underdevelopment and global inequality');
}

// 05 Globalisation: three positions and culture
{
  let s = '', y = 120;
  s += `<line x1="60" y1="${y}" x2="840" y2="${y}" stroke="${C.ink}" stroke-width="3.5" marker-end="url(#ah)" marker-start="url(#ah)"/>`;
  s += label(60, y - 14, 'globalisation is transforming everything', { size: 16, weight: 600, fill: C.muted });
  s += label(840, y - 14, 'globalisation is exaggerated', { size: 16, weight: 600, fill: C.muted, anchor: 'end' });
  y += 20;
  const r = cardRow(y, [
    { head: 'Hyperglobalists', sub: 'Ohmae (1990)', body: 'The nation state is losing power to markets: "the borderless world".', fill: C.cream },
    { head: 'Transformationalists', sub: 'Held et al. (1999)', body: 'Real but uneven; states change role rather than disappear.', fill: C.mustard },
    { head: 'Sceptics', sub: 'Hirst and Thompson (1996)', body: 'Most firms stay rooted in home countries; regulation is still possible.', fill: C.teal },
  ], { size: 16 });
  s += r.svg; y += r.h + 36;
  s += label(450, y + 4, 'Cultural relationships', { size: 20, weight: 700, anchor: 'middle' });
  y += 20;
  const c = hchain(y, [
    { head: 'McDonaldization (Ritzer, 1993)', body: 'efficiency, calculability, predictability, control spread worldwide', fill: C.cream },
    { head: 'Critics of cultural imperialism', body: 'glocalisation, and South-to-North flows such as Indian and Korean film and music', fill: C.tealLight },
  ], { ag: 70, size: 16, arrows: false });
  s += c.svg + `<circle cx="450" cy="${y + c.h / 2}" r="24" fill="${C.ink}"/>` + t(450, y + c.h / 2 + 7, 'vs', { size: 19, weight: 700, fill: '#ffffff', anchor: 'middle' });
  y += c.h;
  add('05-globalisation-views', svg(900, y + 26, 'How far has globalisation gone?', s),
    'A spectrum from hyperglobalists (Ohmae), through transformationalists (Held and colleagues), to sceptics (Hirst and Thompson). Below, Ritzer’s McDonaldization is set against glocalisation and South-to-North cultural flows.',
    'Transformationalists take the middle view: globalisation is real but uneven.',
    '## 2. Globalisation and relationships between societies');
}

// 06 Aid debate
{
  add('06-aid-debate', versusFig('Does aid help development?', {
    left: { head: 'Aid helps', items: ['**Modernisation:** funds take-off', '**Sachs (2005):** large, carefully planned aid can lift the poorest out of a poverty trap', 'Humanitarian aid clearly saves lives'] },
    right: { head: 'Aid harms', items: ['**Hayter (1971):** aid serves donor interests', '**Moyo (2009):** government-to-government aid breeds dependency and corruption', 'Tied aid must be spent on the donor’s goods or services'] },
    foot: { head: 'Collier (2007): four traps of the "bottom billion"', text: ['Conflict trap; natural resource trap', 'Landlocked with bad neighbours; bad governance in a small country', 'Well-targeted aid can help, so the evidence points to the type of aid, not aid in general'] },
  }),
    'Arguments that aid helps, from modernisation theory, Sachs and humanitarian relief, set against Hayter’s and Moyo’s arguments that it serves donors and breeds dependency. Collier’s four development traps are listed beneath.',
    'The debate is mainly about long-term state-to-state aid, not emergency relief.',
    '## 4. Aid and trade, industrialisation and urbanisation');
}

// 07 Conflict trap
{
  let s = '';
  const cx = 300, cy = 320, R = 150;
  const nodes = [['War and conflict', -90, C.rust], ['Damage', 30, C.cream], ['Poverty', 150, C.teal]];
  const pos = nodes.map(([, a]) => [cx + R * Math.cos((a * Math.PI) / 180), cy + R * Math.sin((a * Math.PI) / 180)]);
  for (let i = 0; i < 3; i++) {
    const a1 = nodes[i][1] + 30, a2 = nodes[(i + 1) % 3][1] - 30;
    const p1 = [cx + R * Math.cos((a1 * Math.PI) / 180), cy + R * Math.sin((a1 * Math.PI) / 180)], p2 = [cx + R * Math.cos((a2 * Math.PI) / 180), cy + R * Math.sin((a2 * Math.PI) / 180)];
    s += `<path d="M${p1[0]},${p1[1]} A${R},${R} 0 0 1 ${p2[0]},${p2[1]}" fill="none" stroke="${C.ink}" stroke-width="3.5" marker-end="url(#ah)"/>`;
  }
  nodes.forEach(([n, , f], i) => {
    const [x, y] = pos[i];
    s += `<rect x="${x - 95}" y="${y - 30}" width="190" height="60" rx="30" fill="${f === C.rust ? C.mustard : f}" stroke="${C.ink}" stroke-width="3"/>` + t(x, y + 7, n, { size: 19, weight: 700, anchor: 'middle' });
  });
  s += tl(48, cy - 80, ['raises the', 'risk of war'], { size: 16, italic: true, fill: C.tealDark, weight: 600 }, 20);
  s += label(cx, cy + 6, 'Collier’s', { size: 17, weight: 600, anchor: 'middle', fill: C.muted }) + label(cx, cy + 28, 'conflict trap', { size: 17, weight: 600, anchor: 'middle', fill: C.muted });
  const x0 = 560, w = 310;
  const b1 = headPanel(x0, 110, w, 190, 'Conflict causes damage', { fill: C.cream, size: 18 });
  s += b1.svg + bullets(x0 + 16, 110 + b1.hh + 30, w - 32, ['Destroys infrastructure', 'Displaces people', 'Diverts spending to arms'], { size: 16 }).svg;
  const b2 = headPanel(x0, 320, w, 210, 'Kaldor: "new wars"', { fill: C.teal, size: 18 });
  s += b2.svg + para(x0 + 16, 320 + b2.hh + 30, w - 32, 'Within states; non-state groups, identity politics, attacks on civilians, global financing. Critics: civilians have long been targets.', { size: 16 }).svg;
  let y = 550;
  const n = note(y, 'Dependency view', 'Global demand for minerals, and arms supplied by richer states, are also part of the cause.');
  s += n.svg; y += n.h;
  add('07-conflict-trap', svg(900, y + 26, 'War, poverty and the conflict trap', s),
    'A cycle in which war and conflict cause damage, damage causes poverty, and poverty raises the risk of further war. Side panels list the damage conflict does and Kaldor’s idea of "new wars".',
    'War causes poverty, and poverty raises the risk of war.',
    '## 5. The environment, and war and conflict');
}
