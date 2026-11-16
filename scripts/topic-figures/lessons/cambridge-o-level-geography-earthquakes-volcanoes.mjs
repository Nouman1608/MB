import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-geography-earthquakes-volcanoes';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- local helpers (kept in this file; style.mjs is shared) ----
const esc = (s) => String(s).replace(/&(?!(amp|lt|gt|quot|#\d+);)/g, '&amp;').replace(/</g, '&lt;');
// wrap text to a pixel width (approximate Inter metrics)
const wrap = (s, w, size = 17, bold = false) => {
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
const tag = (x, y, s, o = {}) => { const size = o.size || 15, w = String(s).length * size * ((o.weight || 700) >= 600 ? 0.6 : 0.55) + 12; const x0 = o.anchor === 'middle' ? x - w / 2 : o.anchor === 'end' ? x - w + 6 : x - 6; return `<rect x="${x0}" y="${y - size * 0.95}" width="${w}" height="${size * 1.35}" rx="5" fill="${o.bg || '#ffffff'}" opacity="${o.op || 0.92}"/>` + t(x, y, s, { size, weight: o.weight || 700, anchor: o.anchor || 'start', fill: o.fill || C.ink }); };
// bulleted list, each item wrapped to width w; returns {svg, h}
const bullets = (x, y, items, w, o = {}) => {
  const size = o.size || 16.5, lh = o.lh || Math.round(size * 1.3), gap = o.gap ?? 8; let s = '', yy = y;
  for (const it of items) { const ls = wrap(it, w - 18, size); s += t(x, yy, '•', { size, fill: o.bullet || o.fill || C.ink, weight: 700 }) + tl(x + 16, yy, ls, { size, fill: o.fill || C.ink }, lh); yy += ls.length * lh + gap; }
  return { svg: s, h: yy - y };
};
// ---- end helpers ----

const MANTLE = '#f1d3b8', MAGMA = '#d9772f', OCEAN = C.rockDark, CONT = C.rock;

// 01 Earth's structure and the two kinds of crust
{
  const cx = 240, cy = 335;
  let s = panel(30, 110, 840, 450);
  s += circ(cx, cy, 200, '#8c7d64', C.ink, 3) + circ(cx, cy, 190, MANTLE, C.ink, 2) + circ(cx, cy, 105, '#e7a25c', C.ink, 2) + circ(cx, cy, 55, C.mustard, C.ink, 2);
  const lab = (r, ang, ty, name, desc) => {
    const a = (ang * Math.PI) / 180, px = cx + r * Math.cos(a), py = cy - r * Math.sin(a);
    return circ(px, py, 5, C.ink, C.ink, 1) + `<polyline points="${px},${py} 470,${ty - 6} 490,${ty - 6}" fill="none" stroke="${C.ink}" stroke-width="2"/>` + t(500, ty, name, { size: 20, weight: 700 }) + t(500, ty + 25, desc, { size: 16.5, fill: C.muted });
  };
  s += lab(195, 52, 160, 'Crust', 'thin and rigid') + lab(150, 25, 255, 'Mantle', 'thick; hot rock that flows very slowly') + lab(82, 0, 350, 'Outer core', 'liquid') + lab(20, -40, 445, 'Inner core', 'solid');
  s += t(500, 515, 'Crust + top of the mantle = tectonic plates', { size: 16.5, weight: 700, fill: C.tealDark });
  // crust comparison
  s += t(450, 600, 'Two kinds of crust', { size: 22, weight: 700, anchor: 'middle' });
  const G = 700;
  s += `<rect x="30" y="${G}" width="840" height="60" fill="${MANTLE}" stroke="${C.ink}" stroke-width="2"/>` + t(450, G + 40, 'mantle', { size: 16, anchor: 'middle', fill: C.muted });
  s += `<rect x="30" y="${G - 28}" width="400" height="28" fill="${OCEAN}" stroke="${C.ink}" stroke-width="2.5"/>` + `<rect x="30" y="${G - 70}" width="400" height="42" fill="${C.teal}" opacity="0.8"/>`;
  s += `<rect x="470" y="${G - 80}" width="400" height="80" fill="${CONT}" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += t(230, G - 40, 'ocean', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600 });
  s += t(230, G + 92, 'Oceanic crust', { size: 19, weight: 700, anchor: 'middle' }) + t(230, G + 118, 'thinner · denser · can be subducted', { size: 16.5, anchor: 'middle', fill: C.muted });
  s += t(670, G + 92, 'Continental crust', { size: 19, weight: 700, anchor: 'middle' }) + t(670, G + 118, 'thicker · less dense · too buoyant to sink', { size: 16.5, anchor: 'middle', fill: C.muted });
  add('01-earth-structure-crust',
    svg(900, 850, 'Inside the Earth', s, ),
    'A cross-section of the Earth: a solid inner core, liquid outer core, thick mantle of slowly flowing hot rock and a thin rigid crust; the crust and top of the mantle form the plates. Below, oceanic crust is drawn thin and dense and can be subducted, while continental crust is thicker, less dense and too buoyant to sink.',
    'Denser oceanic crust can sink; lighter continental crust cannot.',
    '## The Earth\'s structure and plates');
}

// 02 Four plate boundaries
{
  const rowH = 186;
  const dia = (x, y, k) => {
    const G = y + 95; let s = `<rect x="${x}" y="${y + 20}" width="420" height="${rowH - 34}" rx="10" fill="${C.tealLight}"/>`;
    s += `<rect x="${x}" y="${G + 34}" width="420" height="${y + rowH - 14 - G - 34}" fill="${MANTLE}"/>`;
    if (k === 0) {
      s += `<rect x="${x + 10}" y="${G}" width="190" height="34" fill="${OCEAN}" stroke="${C.ink}" stroke-width="2"/><rect x="${x + 220}" y="${G}" width="190" height="34" fill="${OCEAN}" stroke="${C.ink}" stroke-width="2"/>`;
      s += `<path d="M${x + 196},${G + 70} L${x + 196},${G + 2} L${x + 210},${G - 18} L${x + 224},${G + 2} L${x + 224},${G + 70} Z" fill="${MAGMA}" stroke="${C.ink}" stroke-width="2"/>`;
      s += arrow(x + 170, G - 22, x + 90, G - 22, { w: 4 }) + arrow(x + 250, G - 22, x + 330, G - 22, { w: 4 }) + tag(x + 210, G - 34, 'ridge', { anchor: 'middle', bg: C.tealLight, op: 1 });
    }
    if (k === 1) {
      s += `<path d="M${x + 10},${G} L${x + 210},${G} L${x + 300},${G + 60} L${x + 285},${G + 74} L${x + 200},${G + 30} L${x + 10},${G + 30} Z" fill="${OCEAN}" stroke="${C.ink}" stroke-width="2"/>`;
      s += `<path d="M${x + 222},${G - 2} L${x + 410},${G - 2} L${x + 410},${G + 50} L${x + 255},${G + 50} Z" fill="${CONT}" stroke="${C.ink}" stroke-width="2"/>`;
      s += `<path d="M${x + 300},${G - 2} L${x + 330},${G - 44} L${x + 360},${G - 2} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="2"/>` + path(`M${x + 312},${G + 50} Q${x + 322},${G + 20} ${x + 330},${G - 40}`, { stroke: MAGMA, w: 6 });
      s += `<ellipse cx="${x + 300}" cy="${G + 56}" rx="16" ry="9" fill="${MAGMA}" stroke="${C.ink}" stroke-width="1.5"/>`;
      s += arrow(x + 60, G - 18, x + 140, G - 18, { w: 4 }) + arrow(x + 400, G - 18, x + 370, G - 18, { w: 4 }) + tag(x + 214, G + 18, 'trench', { anchor: 'middle', bg: C.tealLight, op: 0.95, size: 14 });
      s += tag(x + 150, G + 60, 'subducted, melts', { anchor: 'middle', bg: MANTLE, op: 1, size: 14 });
    }
    if (k === 2) {
      s += `<path d="M${x + 10},${G - 4} L${x + 160},${G - 4} L${x + 185},${G - 40} L${x + 205},${G - 12} L${x + 222},${G - 52} L${x + 240},${G - 14} L${x + 262},${G - 36} L${x + 275},${G - 4} L${x + 410},${G - 4} L${x + 410},${G + 46} L${x + 10},${G + 46} Z" fill="${CONT}" stroke="${C.ink}" stroke-width="2" stroke-linejoin="round"/>`;
      s += line(x + 218, G - 4, x + 218, G + 46, { dash: '6 5' });
      s += arrow(x + 40, G - 20, x + 130, G - 20, { w: 4 }) + arrow(x + 380, G - 20, x + 300, G - 20, { w: 4 }) + tag(x + 218, G + 30, 'fold mountains', { anchor: 'middle', bg: CONT, op: 1, size: 14 });
    }
    if (k === 3) {
      s = `<rect x="${x}" y="${y + 20}" width="420" height="${rowH - 34}" rx="10" fill="#d8e3c6"/>` + line(x + 10, y + 92, x + 410, y + 92, { w: 4, dash: '14 8' });
      s += arrow(x + 260, y + 62, x + 120, y + 62, { w: 5 }) + arrow(x + 160, y + 122, x + 300, y + 122, { w: 5 }) + t(x + 410, y + 152, 'seen from above', { size: 14, anchor: 'end', fill: C.muted, italic: true }) + tag(x + 345, y + 98, 'fault', { bg: '#d8e3c6', op: 1, size: 14 });
    }
    return s;
  };
  const rows = [
    ['Constructive (divergent)', 'Plates move apart; magma rises and forms new crust and an ocean ridge.', 'Small, shallow earthquakes; runny lava', 'Mid-Atlantic Ridge, Iceland'],
    ['Destructive: oceanic–continental', 'Denser oceanic plate is subducted and melts; trench and fold mountains form.', 'Powerful earthquakes, explosive volcanoes, tsunamis', 'Nazca under South American Plate'],
    ['Collision: continental–continental', 'Neither plate is subducted; crust crumples into fold mountains.', 'Strong earthquakes, no volcanoes', 'Indian and Eurasian Plates'],
    ['Conservative', 'Plates slide past each other; friction locks them until stress is released.', 'Earthquakes, no volcanoes', 'San Andreas Fault'],
  ];
  let s = '';
  rows.forEach(([h, what, haz, ex], i) => {
    const y = 110 + i * (rowH + 12);
    s += panel(30, y, 840, rowH) + dia(45, y, i);
    s += t(485, y + 36, h, { size: 19, weight: 700 }) + para(485, y + 62, what, 370, { size: 15.5, fill: C.muted, lh: 20 }).svg;
    const hz = para(485, y + 120, haz, 370, { size: 15.5, weight: 700, fill: C.rust, lh: 20 });
    s += hz.svg + t(485, y + 120 + hz.h + 6, 'e.g. ' + ex, { size: 15.5, fill: C.tealDark, weight: 600 });
  });
  add('02-plate-boundaries',
    svg(900, 110 + 4 * (rowH + 12) + 10, 'Four kinds of plate boundary', s, ),
    'Four cross-sections. Constructive: plates move apart and magma rises to form a ridge (Mid-Atlantic Ridge). Destructive: denser oceanic crust is subducted under continental crust at a trench, melts and feeds a volcano (Nazca and South American Plates). Collision: two continental plates crumple into fold mountains with no volcanoes (Indian and Eurasian Plates). Conservative: plates slide past each other along a fault (San Andreas).',
    'Volcanoes need magma: none at collision or conservative boundaries.',
    '## Plate boundaries and what happens at each');
}

// 03 Strato-volcano vs shield volcano
{
  const P = (x0, y0, kind) => {
    const G = y0 + 330, cx = x0 + 205;
    let s = panel(x0, y0, 410, 640) + `<rect x="${x0 + 15}" y="${G}" width="380" height="95" fill="#d7dde0"/>` + line(x0 + 15, G, x0 + 395, G, { w: 2.5 });
    if (kind === 'strato') {
      s += t(x0 + 24, y0 + 40, 'Strato-volcano', { size: 22, weight: 700 }) + t(x0 + 24, y0 + 64, 'composite cone', { size: 16, fill: C.muted });
      for (let k = 0; k < 5; k++) { const f = 1 - k * 0.17; s += `<path d="M${cx - 145 * f},${G} L${cx - 20},${y0 + 140 + (1 - f) * 0} L${cx + 20},${y0 + 140} L${cx + 145 * f},${G} Z" fill="${k % 2 ? '#b9ab88' : C.rock}" stroke="${k ? 'none' : C.ink}" stroke-width="2.5"/>`; }
      s += `<path d="M${cx - 20},${y0 + 140} L${cx},${y0 + 156} L${cx + 20},${y0 + 140} Z" fill="${C.panel}" stroke="${C.ink}" stroke-width="2"/>`;
      s += path(`M${cx},${G + 40} L${cx},${y0 + 156}`, { stroke: MAGMA, w: 9 }) + path(`M${cx},${y0 + 285} L${cx + 85},${y0 + 236}`, { stroke: MAGMA, w: 6 });
      s += cloud(cx, y0 + 108, 0.55, '#9aa6b2');
      s += `<ellipse cx="${cx}" cy="${G + 52}" rx="70" ry="24" fill="${MAGMA}" stroke="${C.ink}" stroke-width="2.5"/>`;
      s += tag(cx + 52, y0 + 102, 'ash cloud', { fill: C.ink }) + tag(cx + 28, y0 + 158, 'crater') + tag(cx + 92, y0 + 232, 'secondary vent', { size: 14.5 }) + tag(x0 + 28, y0 + 238, 'main vent') + line(x0 + 108, y0 + 233, cx - 6, y0 + 233, { w: 2 }) +
        tag(cx, G - 16, 'layers of ash and lava', { anchor: 'middle', size: 14.5 }) + tag(cx + 78, G + 58, 'magma chamber', { size: 14.5, bg: '#d7dde0', op: 1 });
    } else {
      s += t(x0 + 24, y0 + 40, 'Shield volcano', { size: 22, weight: 700 }) + t(x0 + 24, y0 + 64, 'wide, gently sloping dome', { size: 16, fill: C.muted });
      for (let k = 0; k < 4; k++) { const f = 1 - k * 0.2; s += `<path d="M${cx - 185 * f},${G} Q${cx},${y0 + 230 + (1 - f) * 70} ${cx + 185 * f},${G} Z" fill="${k % 2 ? '#b9ab88' : C.rock}" stroke="${k ? 'none' : C.ink}" stroke-width="2.5"/>`; }
      s += path(`M${cx},${G + 40} L${cx},${y0 + 282}`, { stroke: MAGMA, w: 9 }) + `<path d="M${cx - 16},${y0 + 280} L${cx},${y0 + 290} L${cx + 16},${y0 + 280} Z" fill="${C.panel}" stroke="${C.ink}" stroke-width="2"/>`;
      s += path(`M${cx + 14},${y0 + 284} Q${cx + 90},${y0 + 296} ${cx + 175},${G - 3}`, { stroke: MAGMA, w: 7 });
      s += `<ellipse cx="${cx}" cy="${G + 52}" rx="70" ry="24" fill="${MAGMA}" stroke="${C.ink}" stroke-width="2.5"/>`;
      s += tag(cx, y0 + 262, 'crater', { anchor: 'middle' }) + tag(cx + 70, y0 + 266, 'runny lava flows far', { size: 14.5, fill: C.rust }) + tag(x0 + 40, G - 12, 'many layers of runny lava', { size: 14.5 }) + tag(cx + 78, G + 58, 'magma chamber', { size: 14.5, bg: '#d7dde0', op: 1 }) + tag(cx - 120, G + 32, 'vent', { bg: '#d7dde0', op: 1 }) + line(cx - 82, G + 27, cx - 6, G + 27, { w: 2 });
    }
    const rows = kind === 'strato'
      ? [['Lava', 'thick, viscous, flows a short way'], ['Eruptions', 'explosive: ash, pyroclastic flows'], ['Boundary', 'destructive'], ['Examples', 'Mount Fuji; Mount St Helens']]
      : [['Lava', 'runny, flows long distances'], ['Eruptions', 'frequent, gentle, effusive'], ['Boundary', 'constructive or hotspot'], ['Example', 'Mauna Loa, Hawaii']];
    rows.forEach(([a, b], i) => { const y = y0 + 470 + i * 40; s += t(x0 + 24, y, a, { size: 16.5, weight: 700 }) + t(x0 + 125, y, b, { size: 16.5, fill: C.muted }); if (i) s += line(x0 + 20, y - 26, x0 + 390, y - 26, { color: C.panelEdge, w: 1.5 }); });
    return s;
  };
  add('03-volcano-types',
    svg(900, 780, 'Two kinds of volcano', P(30, 110, 'strato') + P(460, 110, 'shield'), 'Schematic cross-sections, not to scale'),
    'Two cross-sections. A strato-volcano is a tall, steep cone of alternating ash and lava layers with a magma chamber, main vent, secondary vent, crater and ash cloud; its thick lava erupts explosively at destructive boundaries (Mount Fuji, Mount St Helens). A shield volcano is a wide, gentle dome of runny lava layers that flows far in gentle eruptions at constructive boundaries or hotspots (Mauna Loa).',
    'Thick lava builds steep, explosive cones; runny lava builds wide, gentle shields.',
    '## Types and features of volcanoes');
}

// 04 Focus, epicentre, depth and magnitude
{
  const G = 190;
  let s = panel(30, 110, 840, 360);
  s += `<defs><clipPath id="eqclip"><rect x="50" y="${G}" width="440" height="260"/></clipPath></defs>`;
  s += `<rect x="50" y="${G}" width="440" height="260" fill="${C.rock}"/>` + line(50, G, 490, G, { w: 3 });
  s += `<g clip-path="url(#eqclip)">` + [45, 95, 145, 195, 245].map((r) => `<circle cx="270" cy="370" r="${r}" fill="none" stroke="${C.olive}" stroke-width="2.5" stroke-dasharray="${r % 100 === 45 ? '' : '8 6'}"/>`).join('') + `</g>`;
  s += line(270, 370, 270, G, { dash: '6 5', w: 2.5 }) + `<path d="M270,356 l4,9 l10,1 l-8,7 l3,10 l-9,-5 l-9,5 l3,-10 l-8,-7 l10,-1 z" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` + circ(270, G, 8, C.rust);
  s += house(150, G - 24) + house(330, G - 24) + house(420, G - 24, 1, C.mustard);
  s += t(520, 170, 'Epicentre', { size: 20, weight: 700, fill: C.rust }) + t(520, 195, 'point on the surface directly above', { size: 16, fill: C.muted }) + t(520, 216, 'the focus; shaking usually strongest', { size: 16, fill: C.muted });
  s += t(520, 270, 'Seismic waves', { size: 20, weight: 700, fill: C.olive }) + t(520, 295, 'shock waves radiating out', { size: 16, fill: C.muted }) + t(520, 316, 'from the focus', { size: 16, fill: C.muted });
  s += t(520, 370, 'Focus', { size: 20, weight: 700 }) + t(520, 395, 'point underground where rock', { size: 16, fill: C.muted }) + t(520, 416, 'fractures and energy is released', { size: 16, fill: C.muted });
  s += line(278, G - 2, 510, 165, { w: 1.6, color: C.rust }) + line(290, 370, 510, 365, { w: 1.6 });
  // shallow vs deep
  const mini = (x, depth, title, strong) => {
    let m = panel(x, 490, 410, 250) + t(x + 22, 526, title, { size: 19, weight: 700 });
    m += `<rect x="${x + 20}" y="580" width="370" height="140" fill="${C.rock}"/>` + line(x + 20, 580, x + 390, 580, { w: 2.5 });
    const fy = 580 + depth;
    m += [30, 60, 90].map((r) => `<path d="M${x + 205 - r},${fy} A${r},${r} 0 0 1 ${x + 205 + r},${fy}" fill="none" stroke="${C.olive}" stroke-width="2" stroke-dasharray="6 5"/>`).join('');
    m += `<path d="M${x + 205},${fy - 10} l3,7 l8,1 l-6,5 l2,8 l-7,-4 l-7,4 l2,-8 l-6,-5 l8,-1 z" fill="${C.mustard}" stroke="${C.ink}" stroke-width="1.6"/>`;
    m += strong ? path(`M${x + 120},566 l10,-8 l10,8 l10,-8 l10,8 l10,-8 l10,8 l10,-8 l10,8 l10,-8 l10,8 l10,-8 l10,8 l10,-8 l10,8 l10,-8 l10,8`, { stroke: C.rust, w: 3.5 })
      : path(`M${x + 165},568 l10,-4 l10,4 l10,-4 l10,4 l10,-4 l10,4 l10,-4 l10,4`, { stroke: C.rust, w: 2.5 });
    m += t(x + 22, 552, strong ? 'more surface damage' : 'less damage at the surface', { size: 16, fill: strong ? C.rust : C.muted, weight: 600 });
    return m;
  };
  s += mini(30, 35, 'Shallow focus', true) + mini(460, 120, 'Deep focus', false);
  s += t(450, 772, 'Same magnitude: the deep quake loses more energy before its waves reach the surface.', { size: 16.5, anchor: 'middle', fill: C.ink });
  // magnitude steps
  s += panel(30, 800, 840, 160, C.cream, C.olive) + t(60, 838, 'Magnitude is logarithmic', { size: 20, weight: 700 });
  ['M5', 'M6', 'M7'].forEach((m, i) => { const x = 80 + i * 300; s += rrect(x, 860, 90, 70, '#ffffff', C.ink, 2.5, 12) + t(x + 45, 905, m, { size: 22, weight: 700, anchor: 'middle' }); if (i < 2) s += arrow(x + 96, 895, x + 294, 895, { w: 3.5 }) + t(x + 195, 882, '×10 ground movement', { size: 15, anchor: 'middle', weight: 700 }) + t(x + 195, 920, '≈ ×32 energy', { size: 15, anchor: 'middle', weight: 700, fill: C.rust }); });
  add('04-earthquake-features',
    svg(900, 985, 'Focus, epicentre and magnitude', s),
    'A cross-section with the focus underground, seismic waves spreading out from it, and the epicentre on the surface directly above. Two smaller sections compare a shallow focus, which causes more surface damage, with a deep focus of the same magnitude. A final strip shows that each whole step of magnitude means about ten times the ground movement and roughly 32 times the energy.',
    'Focus below, epicentre above; shallow quakes and each extra magnitude step do far more damage.',
    '## Features of earthquakes');
}

// 05 Primary and secondary effects
{
  const block = (y, title, prim, sec) => {
    let s = panel(30, y, 840, 270) + t(55, y + 40, title, { size: 22, weight: 700 });
    s += rrect(55, y + 62, 300, 186, C.tealLight, C.tealDark, 2.5, 12) + t(75, y + 92, 'Primary', { size: 18, weight: 700, fill: C.tealDark }) + t(160, y + 92, 'the event itself', { size: 15, fill: C.muted }) + bullets(75, y + 124, prim, 270, { size: 16, gap: 6 }).svg;
    s += arrow(362, y + 155, 400, y + 155, { w: 4 });
    s += rrect(405, y + 62, 445, 186, '#f6e6dc', C.rust, 2.5, 12) + t(425, y + 92, 'Secondary', { size: 18, weight: 700, fill: C.rust }) + t(527, y + 92, 'what follows from it', { size: 15, fill: C.muted });
    const half = Math.ceil(sec.length / 2);
    s += bullets(425, y + 124, sec.slice(0, half), 210, { size: 16, gap: 6 }).svg + bullets(640, y + 124, sec.slice(half), 200, { size: 16, gap: 6 }).svg;
    return s;
  };
  let s = block(110, 'Earthquakes', ['Buildings and bridges collapse', 'Deaths and injuries', 'Roads and pipes broken'], ['Fires from broken gas pipes', 'Tsunamis', 'Landslides', 'Disease from damaged water supply', 'Homelessness', 'Economic loss']);
  s += block(396, 'Volcanoes', ['Lava flows', 'Pyroclastic flows', 'Ash fall', 'Volcanic gases'], ['Lahars (mudflows)', 'Crop and livestock loss', 'Air travel disruption', 'Climate cooling from ash and gas']);
  s += t(450, 712, 'The same hazard hits harder or softer depending on …', { size: 18, weight: 700, anchor: 'middle' });
  const f = ['magnitude', 'depth of focus', 'distance from epicentre', 'population density', 'building quality', 'time of day', 'level of development', 'preparedness'];
  f.forEach((c, i) => { const x = 30 + (i % 4) * 213, y = 728 + Math.floor(i / 4) * 54; s += pill(x, y, 201, 42, c, { size: 15.5, weight: 600 }); });
  add('05-primary-secondary-effects',
    svg(900, 850, 'Primary and secondary effects', s),
    'Two panels. Earthquakes: primary effects are collapsing buildings and bridges, deaths and injuries, and broken roads and pipes; secondary effects are fires, tsunamis, landslides, disease, homelessness and economic loss. Volcanoes: primary effects are lava flows, pyroclastic flows, ash fall and gases; secondary effects are lahars, crop and livestock loss, air travel disruption and climate cooling. Eight factors that change the impact are listed below.',
    'Primary effects come from the event; secondary effects follow from them.',
    '## Effects on people and the environment');
}
