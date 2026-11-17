import { C, svg, panel, t as t0, tl as tl0, arrow, path, badge as badge0 } from '../style.mjs';

// house minimum text size is 15: clamp every label drawn in this file
const MIN = 15;
const t = (x, y, s, o = {}) => t0(x, y, s, { ...o, size: Math.max(MIN, o.size || 18) });
const tl = (x, y, lines, opts = {}, lh = Math.max(MIN, opts.size || 18) * 1.3) => lines.map((s, i) => t(x, y + i * lh, s, opts)).join('');
const badge = (cx, cy, r, label, fill = C.mustard) => { const sz = Math.max(MIN, r); return `<circle cx="${cx}" cy="${cy}" r="${Math.max(r, sz * 0.85)}" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + t(cx, cy + sz * 0.36, label, { size: sz, weight: 700, anchor: 'middle' }); };

export const slug = 'cambridge-igcse-environmental-management-0680-soils-and-crop-growth';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- local helpers (kept in this file; style.mjs is shared) ----
const esc = (s) => String(s).replace(/&(?!(amp|lt|gt|quot|#\d+);)/g, '&amp;').replace(/</g, '&lt;');
// wrap text to a pixel width (approximate Inter metrics)
const wrap = (s, w, size = 17, bold = false) => {
  size = Math.max(MIN, size);
  const max = Math.max(4, Math.floor(w / (size * (bold ? 0.57 : 0.53))));
  const out = [''];
  for (const word of String(s).split(' ')) {
    const cur = out[out.length - 1];
    if (cur && (cur + ' ' + word).length > max) out.push(word); else out[out.length - 1] = cur ? cur + ' ' + word : word;
  }
  return out;
};
// text block wrapped to width; returns {svg, h}
const para = (x, y, s, w, opts = {}) => {
  const size = opts.size || 17, lh = opts.lh || Math.round(size * 1.32);
  const lines = wrap(s, w, size, (opts.weight || 400) >= 600);
  return { svg: tl(x, y, lines, opts, lh), h: lines.length * lh, n: lines.length };
};
// card: panel with bold title and wrapped body; body text starts below title
const card = (x, y, w, h, title, body, o = {}) => {
  const fill = o.fill || C.panel, edge = o.edge || C.panelEdge, ts = o.ts || 20, bs = o.bs || 16.5, pad = o.pad || 18;
  const anchor = o.center ? 'middle' : 'start', tx = o.center ? x + w / 2 : x + pad;
  let s = panel(x, y, w, h, fill, edge);
  let cy = y + pad + ts * 0.85 + (o.top || 0);
  if (title) { const tt = wrap(title, w - 2 * pad, ts, true); s += tl(tx, cy, tt, { size: ts, weight: 700, anchor, fill: o.tfill || C.ink }, ts * 1.25); cy += (tt.length - 1) * ts * 1.25 + bs * 1.55; }
  if (body) { const bl = Array.isArray(body) ? body : wrap(body, w - 2 * pad, bs); s += tl(tx, cy, bl, { size: bs, anchor, fill: o.bfill || C.muted }, bs * 1.32); }
  return s;
};
const pill = (x, y, w, h, label, o = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${o.fill || C.cream}" stroke="${o.edge || C.olive}" stroke-width="2.5"/>` +
  t(x + w / 2, y + h / 2 + (o.size || 17) * 0.36, label, { size: o.size || 17, weight: o.weight || 700, anchor: 'middle', fill: o.color || C.ink });
const rrect = (x, y, w, h, fill, edge = C.ink, sw = 2.5, rx = 10) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
const circ = (cx, cy, r, fill, edge = C.ink, sw = 2.5) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
const line = (x1, y1, x2, y2, o = {}) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${o.color || C.ink}" stroke-width="${o.w || 2.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
const sun = (cx, cy, r = 22) => { let s = ''; for (let i = 0; i < 8; i++) { const a = (i * Math.PI) / 4; s += line(cx + Math.cos(a) * (r + 6), cy + Math.sin(a) * (r + 6), cx + Math.cos(a) * (r + 15), cy + Math.sin(a) * (r + 15), { color: C.olive, w: 3 }); } return s + circ(cx, cy, r, C.mustard, C.olive, 2.5); };
const cloud = (cx, cy, s = 1, fill = '#ffffff') => `<path d="M${cx - 60 * s},${cy + 20 * s} Q${cx - 80 * s},${cy + 20 * s} ${cx - 78 * s},${cy} Q${cx - 76 * s},${cy - 22 * s} ${cx - 50 * s},${cy - 18 * s} Q${cx - 40 * s},${cy - 48 * s} ${cx - 5 * s},${cy - 42 * s} Q${cx + 25 * s},${cy - 60 * s} ${cx + 45 * s},${cy - 25 * s} Q${cx + 80 * s},${cy - 25 * s} ${cx + 78 * s},${cy + 2 * s} Q${cx + 80 * s},${cy + 20 * s} ${cx + 60 * s},${cy + 20 * s} Z" fill="${fill}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>`;
const rain = (x, y, n = 4, gap = 18, len = 18, color = C.blue) => { let s = ''; for (let i = 0; i < n; i++) s += line(x + i * gap, y + (i % 2) * 8, x + i * gap - 5, y + (i % 2) * 8 + len, { color, w: 2.5 }); return s; };
const house = (x, y, s = 1, roof = C.rust) => `<rect x="${x}" y="${y}" width="${30 * s}" height="${24 * s}" fill="#ffffff" stroke="${C.ink}" stroke-width="2.2"/><path d="M${x - 3 * s},${y} L${x + 15 * s},${y - 13 * s} L${x + 33 * s},${y} Z" fill="${roof}" stroke="${C.ink}" stroke-width="2"/>`;
const tree = (x, y, s = 1, fill = C.grass) => `<rect x="${x - 3 * s}" y="${y - 18 * s}" width="${6 * s}" height="${18 * s}" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="1.8"/><circle cx="${x}" cy="${y - 30 * s}" r="${16 * s}" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>`;
const person = (x, y, s = 1, fill = C.tealDark) => `<circle cx="${x}" cy="${y - 34 * s}" r="${7 * s}" fill="${fill}"/><path d="M${x - 9 * s},${y} L${x - 9 * s},${y - 16 * s} Q${x - 9 * s},${y - 25 * s} ${x},${y - 25 * s} Q${x + 9 * s},${y - 25 * s} ${x + 9 * s},${y - 16 * s} L${x + 9 * s},${y} Z" fill="${fill}"/>`;
const factory = (x, y, s = 1) => `<path d="M${x},${y} L${x},${y - 30 * s} L${x + 20 * s},${y - 42 * s} L${x + 20 * s},${y - 30 * s} L${x + 40 * s},${y - 42 * s} L${x + 40 * s},${y - 30 * s} L${x + 60 * s},${y - 42 * s} L${x + 60 * s},${y} Z" fill="#ffffff" stroke="${C.ink}" stroke-width="2.2" stroke-linejoin="round"/><rect x="${x + 45 * s}" y="${y - 66 * s}" width="${9 * s}" height="${30 * s}" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>`;
// vertical flow of boxes with arrows between; items: [title, body]
const flowDown = (x, y, w, hs, gap, items, o = {}) => {
  let s = '', cy = y;
  items.forEach((it, i) => {
    const h = Array.isArray(hs) ? hs[i] : hs;
    s += card(x, cy, w, h, it[0], it[1], { ...o, ...(it[2] || {}) });
    if (i < items.length - 1) s += arrow(x + w / 2, cy + h + 3, x + w / 2, cy + h + gap - 4, { w: 3.5 });
    cy += h + gap;
  });
  return s;
};
// horizontal flow of boxes
const flowRight = (x, y, ws, h, gap, items, o = {}) => {
  let s = '', cx = x;
  items.forEach((it, i) => {
    const w = Array.isArray(ws) ? ws[i] : ws;
    s += card(cx, y, w, h, it[0], it[1], { ...o, ...(it[2] || {}) });
    if (i < items.length - 1) s += arrow(cx + w + 3, y + h / 2, cx + w + gap - 4, y + h / 2, { w: 3.5 });
    cx += w + gap;
  });
  return s;
};
// label with a soft white backing so it reads over lines
const tag = (x, y, s, o = {}) => { const size = Math.max(MIN, o.size || 15), w = String(s).length * size * ((o.weight || 700) >= 600 ? 0.6 : 0.55) + 12; const x0 = o.anchor === 'middle' ? x - w / 2 : o.anchor === 'end' ? x - w + 6 : x - 6; return `<rect x="${x0}" y="${y - size * 0.95}" width="${w}" height="${size * 1.35}" rx="5" fill="${o.bg || '#ffffff'}" opacity="${o.op || 0.92}"/>` + t(x, y, s, { size, weight: o.weight || 700, anchor: o.anchor || 'start', fill: o.fill || C.ink }); };
// bulleted list, each item wrapped to width w; returns {svg, h}
const bullets = (x, y, items, w, o = {}) => {
  const size = Math.max(MIN, o.size || 16.5), lh = o.lh || Math.round(size * 1.3), gap = o.gap ?? 8; let s = '', yy = y;
  for (const it of items) { const ls = wrap(it, w - 18, size); s += t(x, yy, o.mark || '•', { size: o.mark ? size + 3 : size, fill: o.bullet || o.fill || C.ink, weight: 700 }) + tl(x + 16, yy, ls, { size, fill: o.fill || C.ink }, lh); yy += ls.length * lh + gap; }
  return { svg: s, h: yy - y };
};
const turbine = (x, y, s = 1) => `<line x1="${x}" y1="${y}" x2="${x}" y2="${y - 60 * s}" stroke="${C.ink}" stroke-width="${3 * s}"/>` + [0, 120, 240].map((a) => { const r = (a - 90) * Math.PI / 180; return `<line x1="${x}" y1="${y - 60 * s}" x2="${x + Math.cos(r) * 30 * s}" y2="${y - 60 * s + Math.sin(r) * 30 * s}" stroke="${C.ink}" stroke-width="${3.5 * s}" stroke-linecap="round"/>`; }).join('') + `<circle cx="${x}" cy="${y - 60 * s}" r="${4 * s}" fill="${C.mustard}" stroke="${C.ink}" stroke-width="1.5"/>`;
// curved or multi-point arrow along an SVG path
const carrow = (d, o = {}) => `<path d="${d}" fill="none" stroke="${o.color || C.ink}" stroke-width="${o.w || 3.5}" stroke-linejoin="round" stroke-linecap="round" marker-end="url(#${o.marker || 'ah'})"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
// horizontal bar chart helper: axis box with ticks; returns svg
const hbar = (x, y, w, h, fill, edge = C.ink) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" stroke="${edge}" stroke-width="2"/>`;
// ---- end helpers ----

const H2 = {
  comp: '## What soil is made of',
  why: '## Why composition matters for crops',
  weather: '## Weather, seasons and crop growth',
  opt: '## Conditions for the optimum rate of photosynthesis and crop growth',
  we1: '## Worked example 1: a drainage experiment',
  we2: '## Worked example 2: finding the growing season',
};
const SOIL = '#a77b52';
const leaf = (x, y, rx, ry, rot, fill, edge = C.ink) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" transform="rotate(${rot} ${x} ${y})" fill="${fill}" stroke="${edge}" stroke-width="2"/>`;

// 01 Four components and three particle sizes
{
  let b = '';
  const comps = [['Mineral particles', 'sand, silt and clay from weathered rock', C.sand], ['Organic content', 'living organisms (plants, animals, fungi, bacteria) and organic matter from decomposition (humus)', '#cdb79a'], ['Gases', 'oxygen for roots and organisms; carbon dioxide they release', '#ffffff'], ['Water', 'in pore spaces and films round particles; carries dissolved ions', C.tealLight]];
  comps.forEach(([h, d, f], i) => {
    const x = 30 + (i % 2) * 430, y = 110 + Math.floor(i / 2) * 136;
    b += rrect(x, y, 410, 120, f, C.ink, 2.5, 12) + t(x + 20, y + 34, h, { size: 19, weight: 700 }) + tl(x + 20, y + 62, wrap(d, 370, 16), { size: 16 }, 21);
  });
  b += t(450, 420, 'Mineral particles by size (relative, not to scale)', { size: 19, weight: 700, anchor: 'middle' });
  const p = [['Sand', 'largest; gritty', 'large pores; drains quickly; holds few nutrients', 30, 4], ['Silt', 'medium; smooth, silky', 'holds water moderately; can pack down', 315, 9], ['Clay', 'smallest; sticky when wet', 'tiny pores; holds water and nutrients; drains slowly', 600, 18]];
  p.forEach(([h, f, e, x, n]) => {
    b += panel(x, 440, 270, 300);
    const r = 70 / n; let k = 0;
    for (let yy = 0; yy < n * 0.6; yy++) for (let xx = 0; xx < n * 1.4; xx++) { const cx = x + 35 + xx * 2 * r * 1.05 + (yy % 2) * r, cy = 470 + yy * 2 * r * 0.95 + r; if (cx < x + 240 && cy < 580) { b += circ(cx, cy, r * 0.92, h === 'Sand' ? C.sand : h === 'Silt' ? '#d9b98a' : SOIL, C.ink, Math.min(2, r / 3)); k++; } }
    b += t(x + 135, 620, h, { size: 21, weight: 700, anchor: 'middle' }) + t(x + 135, 646, f, { size: 16, anchor: 'middle', fill: C.muted });
    b += tl(x + 135, 678, wrap(e, 240, 15.5), { size: 15.5, anchor: 'middle' }, 20);
  });
  add('01-soil-components',
    svg(900, 765, 'What soil is made of', b),
    'Four components of soil: mineral particles from weathered rock; organic content, both living organisms and decomposed organic matter (humus); gases such as oxygen and carbon dioxide; and water in pore spaces. Below, sand, silt and clay particles compared: sand is largest with large pores that drain quickly; silt is medium; clay is smallest with tiny pores that hold water and nutrients.',
    'Soil is mineral particles, organic content, gases and water; particle size sets drainage and nutrients.',
    H2.comp);
}

// 02 Three ions: needed for and deficiency
{
  let b = '';
  const plant = (cx, base, kind) => {
    let s = '';
    const h = kind === 'N' ? 90 : 140;
    s += line(cx, base, cx, base - h, { w: 4, color: C.grass });
    const lf = kind === 'N' ? '#d8cf6a' : C.grass;
    for (let i = 0; i < 3; i++) { const yy = base - 30 - i * (h / 3.5); s += leaf(cx - 24, yy, 24, 10, -25, lf) + leaf(cx + 24, yy - 8, 24, 10, 25, lf); }
    if (kind === 'K') { for (let i = 0; i < 3; i++) { const yy = base - 30 - i * (140 / 3.5); s += `<ellipse cx="${cx - 24}" cy="${yy}" rx="24" ry="10" transform="rotate(-25 ${cx - 24} ${yy})" fill="none" stroke="${C.mustard}" stroke-width="5"/>`; } s += circ(cx + 40, base - h + 14, 9, '#c9b08a') + line(cx, base - h + 6, cx + 33, base - h + 10, { w: 2, color: C.grass }); }
    if (kind === 'P') { s += leaf(cx - 24, base - 30, 24, 10, -25, '#8a5a8a'); }
    // roots
    const rl = kind === 'P' ? 18 : 50;
    s += path(`M${cx},${base} l-${rl * 0.6},${rl} M${cx},${base} l0,${rl * 1.1} M${cx},${base} l${rl * 0.6},${rl}`, { stroke: C.rockDark, w: 3 });
    return s;
  };
  const ions = [['Nitrate', 'NO₃⁻', 'nitrogen', 'making proteins for growth, especially of leaves', 'stunted growth; yellowing leaves', 'N'], ['Phosphate', 'PO₄³⁻', 'phosphorus', 'healthy root growth', 'poor root growth; purple-tinged leaves', 'P'], ['Potassium', 'K⁺', 'potassium', 'healthy flowers and fruit', 'yellow leaf edges; poor fruit', 'K']];
  ions.forEach(([n, f, el, need, def, k], i) => {
    const x = 30 + i * 285;
    b += panel(x, 110, 270, 560);
    b += t(x + 135, 148, n, { size: 22, weight: 700, anchor: 'middle' }) + t(x + 135, 176, `${f}, supplies ${el}`, { size: 16, anchor: 'middle', fill: C.muted });
    b += `<rect x="${x + 15}" y="330" width="240" height="90" fill="${SOIL}" opacity="0.35"/>` + line(x + 15, 330, x + 255, 330, { w: 2.5, color: C.rockDark });
    b += plant(x + 135, 330, k);
    b += t(x + 135, 450, 'deficiency (schematic)', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
    b += t(x + 20, 490, 'Needed for', { size: 17, weight: 700, fill: C.tealDark }) + tl(x + 20, 514, wrap(need, 230, 16), { size: 16 }, 20);
    b += t(x + 20, 600, 'Sign of deficiency', { size: 17, weight: 700, fill: C.rust }) + tl(x + 20, 624, wrap(def, 230, 16), { size: 16 }, 20);
  });
  b += t(450, 700, 'Ions are absorbed by roots in solution. Organic content releases them slowly as it decomposes.', { size: 16, anchor: 'middle', fill: C.muted });
  add('02-three-ions',
    svg(900, 725, 'Three mineral ions crops need', b),
    'Three panels. Nitrate (NO3−) supplies nitrogen for proteins and leaf growth; without it plants are stunted with yellowing leaves. Phosphate (PO4 3−) supplies phosphorus for healthy roots; deficiency gives poor roots and purple-tinged leaves. Potassium (K+) is needed for healthy flowers and fruit; deficiency gives yellow leaf edges and poor fruit.',
    'Nitrate for leaves, phosphate for roots, potassium for flowers and fruit.',
    H2.why);
}

// 03 Air and water in pore spaces
{
  let b = '';
  const box = (x, title, sub, mode) => {
    let s = panel(x, 110, 410, 470) + t(x + 205, 148, title, { size: 21, weight: 700, anchor: 'middle', fill: mode === 'good' ? C.tealDark : C.rust }) + t(x + 205, 174, sub, { size: 16, anchor: 'middle', fill: C.muted });
    s += `<clipPath id="pc${x}"><rect x="${x + 25}" y="195" width="360" height="230" rx="8"/></clipPath>`;
    s += `<rect x="${x + 25}" y="195" width="360" height="230" rx="8" fill="${mode === 'good' ? '#ffffff' : C.tealLight}"/>`;
    let g = '';
    const pts = [[60, 230], [130, 220], [210, 240], [290, 225], [350, 250], [90, 300], [170, 290], [250, 310], [330, 300], [60, 380], [140, 370], [220, 390], [300, 375], [365, 395]];
    pts.forEach(([dx, dy], i) => (g += circ(x + dx, dy, 26 + (i % 3) * 4, C.sand, C.ink, 2)));
    if (mode === 'good') pts.slice(0, 9).forEach(([dx, dy], i) => (g += i % 2 ? '' : `<ellipse cx="${x + dx + 36}" cy="${dy + 30}" rx="12" ry="7" fill="${C.teal}"/>`));
    g += path(`M${x + 205},195 L${x + 205},300 M${x + 205},260 l-40,50 M${x + 205},260 l40,60`, { stroke: mode === 'good' ? C.rockDark : '#6b5a48', w: 5 });
    s += `<g clip-path="url(#pc${x})">${g}</g>` + `<rect x="${x + 25}" y="195" width="360" height="230" rx="8" fill="none" stroke="${C.ink}" stroke-width="2"/>`;
    s += t(x + 30, 455, mode === 'good' ? 'pores hold air and some water' : 'pores full of water', { size: 17, weight: 700 });
    s += tl(x + 30, 482, mode === 'good' ? ['roots get oxygen to respire', 'aerobically, releasing energy to', 'grow and absorb ions'] : ['oxygen runs out, so roots can die;', 'earthworms and decomposers', 'also lack oxygen'], { size: 16 }, 21);
    return s;
  };
  b += box(30, 'Well-drained', 'excess water drains away', 'good') + box(460, 'Waterlogged', 'too little drainage', 'bad');
  b += panel(30, 600, 840, 90, C.cream, C.olive) + t(450, 638, 'Ideal soil: holds enough water for roots but lets the excess drain.', { size: 18, weight: 700, anchor: 'middle' }) + t(450, 666, 'Too little drainage: waterlogging. Too much: drought stress.', { size: 16.5, anchor: 'middle' });
  add('03-pore-spaces',
    svg(900, 715, 'Pore spaces: air and water', b),
    'Two close-ups of soil. In well-drained soil the pore spaces between particles hold air and some water, so roots get oxygen to respire. In waterlogged soil the pores are full of water, oxygen runs out and roots can die. The ideal soil holds enough water but lets the excess drain.',
    'Roots need both water and oxygen, so pore spaces must not stay full of water.',
    H2.why);
}

// 04 Wet and dry seasons
{
  let b = '';
  b += card(30, 110, 410, 130, 'Weather', 'the day-to-day conditions of the atmosphere in a location', { fill: '#eef5f4', edge: C.tealDark, tfill: C.tealDark, ts: 20, bs: 17, bfill: C.ink });
  b += card(460, 110, 410, 130, 'Climate (not the same)', 'the average conditions over many years', { fill: '#ffffff', edge: C.panelEdge, ts: 20, bs: 17 });
  b += t(450, 280, 'In places with wet and dry seasons (schematic year)', { size: 19, weight: 700, anchor: 'middle' });
  const y = 350;
  b += `<rect x="60" y="${y}" width="420" height="60" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/><rect x="480" y="${y}" width="360" height="60" fill="${C.sand}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += t(270, y + 38, 'WET SEASON', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(660, y + 38, 'DRY SEASON', { size: 19, weight: 700, anchor: 'middle', fill: C.olive });
  b += arrow(70, y + 130, 70, y + 66, { w: 3.5 }) + t(70, y + 156, 'plant at the start', { size: 16.5, weight: 700 }) + t(70, y + 178, 'of the wet season', { size: 16.5 });
  b += arrow(480, y + 130, 480, y + 66, { w: 3.5 }) + t(480, y + 156, 'harvest as the dry', { size: 16.5, weight: 700, anchor: 'middle' }) + t(480, y + 178, 'season begins', { size: 16.5, anchor: 'middle' });
  b += arrow(760, y + 130, 760, y + 66, { w: 3.5 }) + t(840, y + 156, 'growing now needs', { size: 16.5, weight: 700, anchor: 'end' }) + t(840, y + 178, 'irrigation', { size: 16.5, anchor: 'end' });
  b += path(`M100,${y - 6} Q270,${y - 40} 450,${y - 6}`, { stroke: C.grass, w: 4 }) + t(270, y - 34, 'crop grows with water', { size: 15.5, anchor: 'middle', fill: C.grass, weight: 600 });
  b += panel(30, 570, 840, 70, '#fbf1ea', C.rust) + t(450, 612, 'A late or failed wet season can ruin a harvest.', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  add('04-wet-dry-seasons',
    svg(900, 665, 'Weather and the wet–dry year', b),
    'Weather is the day-to-day state of the atmosphere in a place; climate is the average over many years. In places with wet and dry seasons, crops are planted at the start of the wet season and harvested as the dry season begins; growing in the dry season needs irrigation, and a late or failed wet season can ruin a harvest.',
    'Plant at the start of the wet season; a failed wet season can ruin the harvest.',
    H2.weather);
}

// 05 Photosynthesis rate graphs
{
  let b = '';
  b += panel(30, 110, 840, 90, C.cream, C.olive) + t(450, 148, 'carbon dioxide + water → glucose + oxygen', { size: 21, weight: 700, anchor: 'middle' }) + t(450, 178, 'using light energy absorbed by chlorophyll', { size: 16.5, anchor: 'middle' });
  const graph = (x, title, xl, curve, notes) => {
    let s = panel(x, 220, 410, 360) + t(x + 205, 256, title, { size: 19, weight: 700, anchor: 'middle' });
    const gx = x + 60, gy = 520, gw = 320, gh = 220;
    s += line(gx, gy, gx + gw, gy, { w: 3 }) + line(gx, gy, gx, gy - gh, { w: 3 });
    s += `<text x="${x + 32}" y="${gy - gh / 2}" font-size="16" fill="${C.muted}" text-anchor="middle" transform="rotate(-90 ${x + 32} ${gy - gh / 2})">rate of photosynthesis</text>`;
    s += t(gx + gw, gy + 28, xl, { size: 16, anchor: 'end', fill: C.muted });
    s += path(curve(gx, gy, gw, gh), { stroke: C.tealDark, w: 4.5 });
    s += notes(gx, gy, gw, gh);
    return s;
  };
  b += graph(30, 'Light intensity', 'light intensity →', (gx, gy, gw, gh) => `M${gx},${gy} Q${gx + 90},${gy - gh * 0.95} ${gx + 170},${gy - gh * 0.8} L${gx + gw},${gy - gh * 0.8}`,
    (gx, gy, gw, gh) => tag(gx + 85, gy - 60, 'rises steeply', { size: 15.5, fill: C.tealDark }) + tl(gx + 180, gy - gh * 0.8 + 30, ['levels off: another', 'factor (temperature', 'or CO2) now limits'], { size: 15.5, fill: C.ink }, 19));
  b += graph(460, 'Temperature', 'temperature →', (gx, gy, gw, gh) => `M${gx},${gy - 10} Q${gx + 120},${gy - 40} ${gx + 190},${gy - gh * 0.85} Q${gx + 230},${gy - gh * 0.9} ${gx + 270},${gy - 30}`,
    (gx, gy, gw, gh) => line(gx + 205, gy - gh * 0.86, gx + 205, gy, { dash: '6 5', w: 2, color: C.muted }) + t(gx + 205, gy - gh * 0.92, 'optimum', { size: 16, weight: 700, anchor: 'middle', fill: C.olive }) + tl(gx + 10, gy - gh * 0.75, ['below: slow'], { size: 15.5 }, 19) + tl(gx + 250, gy - gh * 0.45, ['above:', 'enzymes', 'work less', 'well'], { size: 15.5 }, 19));
  b += t(450, 612, 'Three conditions set the rate and how long it lasts:', { size: 17, weight: 700, anchor: 'middle' });
  [['length of growing season', 250], ['optimum weather conditions', 270], ['daylight hours', 180]].reduce((x, [s, w]) => { b += pill(x, 630, w, 44, s, { fill: '#eef5f4', edge: C.tealDark, size: 16 }); return x + w + 20; }, 60);
  b += t(860, 610 - 400 + 30 + 0, '', {});
  add('05-photosynthesis-graphs',
    svg(900, 700, 'Reading photosynthesis graphs', b),
    'Two schematic graphs. Photosynthesis rate against light intensity rises steeply then levels off, showing another factor such as temperature or carbon dioxide now limits it. Rate against temperature rises to a peak at the optimum and then falls as enzymes work less well. Length of growing season, optimum weather and daylight hours set the rate and how long it lasts.',
    'Light: rises then levels off. Temperature: rises to an optimum, then falls.',
    H2.opt);
}

// 06 Drainage experiment
{
  let b = panel(30, 110, 540, 500);
  const x0 = 120, y0 = 500, k = 3.4;
  b += line(x0, y0, 550, y0, { w: 3 }) + line(x0, y0, x0, y0 - 100 * k, { w: 3 });
  for (let v = 0; v <= 100; v += 20) b += line(x0 - 8, y0 - v * k, x0, y0 - v * k, { w: 2.5 }) + t(x0 - 14, y0 - v * k + 6, String(v), { size: 15.5, anchor: 'end' });
  b += `<text x="58" y="${y0 - 170}" font-size="16" fill="${C.muted}" text-anchor="middle" transform="rotate(-90 58 ${y0 - 170})">water (cm³ of 100)</text>`;
  [['Sandy', 78], ['Loam', 52], ['Clay', 15]].forEach(([s, c], i) => {
    const x = 160 + i * 130, r = 100 - c;
    b += `<rect x="${x}" y="${y0 - c * k}" width="90" height="${c * k}" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/><rect x="${x}" y="${y0 - 100 * k}" width="90" height="${r * k}" fill="${SOIL}" stroke="${C.ink}" stroke-width="2.5"/>`;
    b += t(x + 45, y0 - c * k / 2 + 6, String(c), { size: 18, weight: 700, anchor: 'middle' }) + t(x + 45, y0 - 100 * k + (r * k) / 2 + 6, String(r), { size: 18, weight: 700, anchor: 'middle', fill: '#ffffff' });
    b += t(x + 45, y0 + 28, s, { size: 17, weight: 700, anchor: 'middle' });
  });
  b += rrect(140, 120, 18, 18, C.teal, C.ink, 2, 3) + t(166, 135, 'collected (drained)', { size: 15.5 }) + rrect(340, 120, 18, 18, SOIL, C.ink, 2, 3) + t(366, 135, 'retained', { size: 15.5 });
  b += t(560, 590, 'invented results', { size: 15, anchor: 'end', fill: C.muted, italic: true });
  b += panel(590, 110, 280, 500);
  b += t(612, 148, 'Sandy', { size: 18, weight: 700 }) + tl(612, 174, wrap('large connected pores: drains fastest, retains little', 240, 16), { size: 16 }, 20);
  b += t(612, 250, 'Clay', { size: 18, weight: 700 }) + tl(612, 276, wrap('tiny pores hold water tightly: may waterlog', 240, 16), { size: 16 }, 20);
  b += t(612, 352, 'Loam', { size: 18, weight: 700, fill: C.tealDark }) + tl(612, 378, wrap('drains excess but retains nearly half: suits crops', 240, 16), { size: 16, fill: C.tealDark }, 20);
  b += t(612, 462, 'Fair test', { size: 18, weight: 700 }) + tl(612, 488, wrap('same soil mass, water volume and time; repeat each test', 240, 16), { size: 16 }, 20);
  add('06-drainage-experiment',
    svg(900, 635, 'Worked example: how well does each soil drain?', b),
    'Stacked bars for 100 cm³ of water poured through 100 g of soil for 10 minutes. Sandy soil drains 78 and retains 22; loam drains 52 and retains 48; clay drains 15 and retains 85. Loam drains the excess but keeps nearly half, which suits crops.',
    'Sand drains most, clay retains most, loam sits in between.',
    H2.we1);
}

// 07 Growing season
{
  let b = panel(30, 110, 840, 470);
  const months = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'], T = [7, 11, 15, 19, 21, 20, 16, 9], R = [60, 55, 40, 70, 85, 75, 65, 80];
  const x0 = 110, cw = 90;
  // temperature panel
  const ty0 = 290, tk = 6;
  b += t(60, 140, 'Mean temperature (°C)', { size: 17, weight: 700 }) + t(840, 140, 'invented data', { size: 15, anchor: 'end', fill: C.muted, italic: true });
  b += line(x0, ty0, x0 + cw * 8, ty0, { w: 2.5 });
  b += line(x0, ty0 - 10 * tk, x0 + cw * 8, ty0 - 10 * tk, { dash: '8 6', color: C.rust, w: 2.5 }) + tag(x0 + cw * 8 - 4, ty0 - 10 * tk - 8, 'needs ≥ 10 °C', { size: 15, anchor: 'end', fill: C.rust });
  // rainfall panel
  const ry0 = 520, rk = 1.9;
  b += t(60, 336, 'Rainfall (mm)', { size: 17, weight: 700 });
  b += line(x0, ry0, x0 + cw * 8, ry0, { w: 2.5 });
  b += line(x0, ry0 - 50 * rk, x0 + cw * 8, ry0 - 50 * rk, { dash: '8 6', color: C.rust, w: 2.5 }) + tag(x0 + cw * 8 - 4, ry0 - 50 * rk + 22, 'needs ≥ 50 mm', { size: 15, anchor: 'end', fill: C.rust });
  months.forEach((m, i) => {
    const ok = T[i] >= 10 && R[i] >= 50, x = x0 + i * cw;
    if (ok) b += `<rect x="${x + 4}" y="150" width="${cw - 8}" height="${ry0 - 150 + 34}" rx="8" fill="${C.tealLight}" opacity="0.8"/>`;
    b += `<rect x="${x + 22}" y="${ty0 - T[i] * tk}" width="46" height="${T[i] * tk}" fill="${T[i] >= 10 ? C.mustard : '#e3e0d2'}" stroke="${C.ink}" stroke-width="2"/>` + t(x + 45, ty0 - T[i] * tk - 8, String(T[i]), { size: 15.5, weight: 700, anchor: 'middle' });
    b += `<rect x="${x + 22}" y="${ry0 - R[i] * rk}" width="46" height="${R[i] * rk}" fill="${R[i] >= 50 ? C.blue : '#d6dedd'}" stroke="${C.ink}" stroke-width="2"/>` + t(x + 45, ry0 - R[i] * rk - 8, String(R[i]), { size: 15.5, weight: 700, anchor: 'middle' });
    b += t(x + 45, ry0 + 26, m, { size: 16, weight: 700, anchor: 'middle' });
  });
  b += panel(30, 600, 840, 100, C.cream, C.olive);
  b += t(60, 638, 'Growing season: April, then June to September = five months', { size: 19, weight: 700 });
  b += t(60, 668, 'May is warm enough but too dry (40 mm): may need irrigation. October is too cold.', { size: 16.5 });
  add('07-growing-season',
    svg(900, 725, 'Worked example: finding the growing season', b),
    'Monthly bar charts from March to October with thresholds of 10 °C and 50 mm. April and June to September meet both and are shaded. May is warm enough but has only 40 mm of rain; March and October are too cold. The growing season is five months.',
    'Only months that meet both thresholds count: April and June to September, five months.',
    H2.we2);
}
