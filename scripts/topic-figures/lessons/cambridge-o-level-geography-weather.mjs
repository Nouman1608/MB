import { C, svg, panel, t as t0, tl as tl0, arrow, path, badge as badge0 } from '../style.mjs';

// house minimum text size is 15: clamp every label drawn in this file
const MIN = 15;
const t = (x, y, s, o = {}) => t0(x, y, s, { ...o, size: Math.max(MIN, o.size || 18) });
const tl = (x, y, lines, opts = {}, lh = Math.max(MIN, opts.size || 18) * 1.3) => lines.map((s, i) => t(x, y + i * lh, s, opts)).join('');
const badge = (cx, cy, r, label, fill = C.mustard) => { const sz = Math.max(MIN, r); return `<circle cx="${cx}" cy="${cy}" r="${Math.max(r, sz * 0.85)}" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + t(cx, cy + sz * 0.36, label, { size: sz, weight: 700, anchor: 'middle' }); };

export const slug = 'cambridge-o-level-geography-weather';
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
const flame = (x, y, s = 1) => `<path d="M${x - 22 * s},${y} l44,${-8 * s} M${x - 22 * s},${y - 8 * s} l44,${8 * s}" stroke="${C.rockDark}" stroke-width="${6 * s}" stroke-linecap="round"/><path d="M${x},${y - 10 * s} q-16,-14 -6,-34 q2,12 8,14 q-2,-16 10,-26 q-2,20 8,30 q4,10 -4,16 z" fill="${C.rust}" stroke="${C.ink}" stroke-width="1.6"/>`;
const steam = (x, y, n = 2, gap = 18, col = C.muted) => { let s = ''; for (let i = 0; i < n; i++) s += path(`M${x + i * gap},${y} q-8,-12 0,-24 q8,-12 0,-24`, { stroke: col, w: 3 }); return s; };
// ---- end helpers ----

// 01 Stevenson Screen: every feature has a reason
{
  const G = 470;
  let s = panel(30, 110, 840, 440) + `<rect x="45" y="125" width="810" height="${G - 125}" rx="10" fill="${C.tealLight}"/>` + `<rect x="45" y="${G}" width="810" height="65" fill="#a9c48f"/>` + line(45, G, 855, G, { w: 2.5 });
  s += sun(110, 175, 22);
  const bx = 360, bw = 180, by = 240, bh = 130;
  s += `<path d="M${bx - 14},${by} L${bx + bw / 2},${by - 44} L${bx + bw + 14},${by} Z" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/><path d="M${bx - 4},${by - 6} L${bx + bw / 2},${by - 36} L${bx + bw + 4},${by - 6}" fill="none" stroke="${C.muted}" stroke-width="2"/>`;
  s += `<rect x="${bx}" y="${by}" width="${bw}" height="${bh}" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/>`;
  for (let k = 1; k < 9; k++) s += line(bx + 8, by + k * 14, bx + bw - 8, by + k * 14 + 6, { w: 1.6, color: C.muted });
  [bx + 20, bx + bw - 20].forEach((x) => { s += line(x, by + bh, x, G, { w: 6, color: C.rockDark }); });
  s += line(bx - 40, by + bh, bx - 40, G, { w: 2, color: C.tealDark }) + `<path d="M${bx - 46},${by + bh + 10} L${bx - 40},${by + bh} L${bx - 34},${by + bh + 10} M${bx - 46},${G - 10} L${bx - 40},${G} L${bx - 34},${G - 10}" fill="none" stroke="${C.tealDark}" stroke-width="2"/>` + tag(bx - 50, (by + bh + G) / 2 + 5, 'about 1.2 m', { size: 15, anchor: 'end', fill: C.tealDark });
  s += `<g opacity="0.55">${house(700, G - 40, 1.6)}</g>` + line(680, G - 80, 770, G + 10, { w: 4, color: C.rust }) + line(770, G - 80, 680, G + 10, { w: 4, color: C.rust });
  s += tree(160, G, 1.3) + line(120, G - 90, 200, G + 5, { w: 4, color: C.rust }) + line(200, G - 90, 120, G + 5, { w: 4, color: C.rust });
  const call = (x1, y1, x2, y2, a, b, anchor = 'start') => line(x1, y1, x2, y2, { w: 1.8 }) + circ(x1, y1, 4, C.ink, C.ink, 1) + tag(anchor === 'end' ? x2 - 6 : x2 + 6, y2 - 4, a, { size: 15.5, anchor }) + tag(anchor === 'end' ? x2 - 6 : x2 + 6, y2 + 16, b, { size: 14, weight: 400, anchor });
  s += call(bx + bw / 2 + 30, by - 20, 600, 160, 'Double roof', 'less heating from overhead Sun');
  s += call(bx + bw - 10, by + 40, 600, 225, 'Painted white', 'reflects the Sun’s radiation');
  s += call(bx + bw - 10, by + 100, 600, 290, 'Louvred sides', 'air in; sun and rain out');
  s += call(bx + 60, G + 20, 480, G + 40, 'On grass in the open', 'not tarmac; away from walls and trees');
  s += tag(60, 236, 'Door opens away from the Sun', { size: 15.5 }) + tag(60, 256, '(north in the northern hemisphere)', { size: 14, weight: 400 });
  s += panel(30, 570, 840, 120, C.cream, C.olive) + t(55, 606, 'Purpose: air temperature and humidity in the shade, so readings can be fairly compared.', { size: 16.5, weight: 700 }) +
    t(55, 636, 'Inside: maximum-minimum thermometer, wet-and-dry bulb thermometer.', { size: 16 }) + t(55, 662, 'Outside (must be exposed): rain gauge, anemometer, wind vane, sunshine recorder.', { size: 16 });
  add('01-stevenson-screen',
    svg(900, 710, 'The Stevenson Screen: a reason for every feature', s, 'Schematic, not to scale'),
    'A white Stevenson Screen with louvred sides and a double roof stands on legs about 1.2 metres above grass, in the open, with a crossed-out building and tree showing it must be away from them. Labels give each reason: white reflects the Sun’s radiation, louvres let air through but keep sun and rain out, the double roof reduces heating, the height avoids ground heat and the door opens away from the Sun. Below, which instruments go inside and outside.',
    'Every feature exists so the thermometers read shade air temperature fairly.',
    '## The Stevenson Screen in detail');
}

// 02 Three instruments people get wrong
{
  let s = '';
  // max-min thermometer
  s += panel(30, 110, 270, 490) + t(165, 146, 'Max-min thermometer', { size: 18, weight: 700, anchor: 'middle' });
  s += path('M110,190 L110,430 Q110,470 150,470 Q190,470 190,430 L190,190', { stroke: C.ink, w: 16 }) + path('M110,190 L110,430 Q110,470 150,470 Q190,470 190,430 L190,190', { stroke: '#ffffff', w: 10 });
  s += path('M110,330 L110,430 Q110,470 150,470 Q190,470 190,430 L190,270', { stroke: C.rust, w: 8 });
  s += `<rect x="103" y="314" width="14" height="10" fill="${C.blue}"/><rect x="183" y="254" width="14" height="10" fill="${C.blue}"/>`;
  s += tag(204, 262, 'max marker', { size: 14, fill: C.blue }) + tag(30 + 12, 312, 'min', { size: 14, fill: C.blue }) + tag(42, 330, 'marker', { size: 14, fill: C.blue, weight: 400 });
  s += tl(48, 505, wrap('Markers stay at the highest and lowest temperatures; read the end nearest the liquid; reset with a magnet.', 236, 15), { size: 15 }, 19);
  // wet and dry bulb
  s += panel(315, 110, 270, 490) + t(450, 146, 'Wet-and-dry bulb', { size: 18, weight: 700, anchor: 'middle' });
  const th = (x, h, wet) => `<rect x="${x - 7}" y="180" width="14" height="190" rx="7" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/><rect x="${x - 3}" y="${370 - h}" width="6" height="${h}" fill="${C.rust}"/>` + circ(x, 380, 12, C.rust, C.ink, 2) + (wet ? `<rect x="${x - 14}" y="370" width="28" height="26" rx="8" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2"/>` : '');
  s += th(400, 150, false) + th(500, 110, true) + t(400, 420, 'dry', { size: 15, weight: 700, anchor: 'middle' }) + t(500, 420, 'wet (muslin)', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += tl(333, 440, wrap('Evaporation cools the wet bulb. The difference gives relative humidity (from a table).', 240, 15), { size: 15 }, 19);
  s += rrect(333, 520, 234, 66, C.cream, C.olive, 2, 10) + t(345, 544, '28 / 28 °C: no difference,', { size: 14.5, weight: 700 }) + t(345, 563, 'saturated, 100% RH', { size: 14.5 }) + t(345, 580, '28 / 20 °C: much drier air', { size: 14.5 });
  // wind vane
  s += panel(600, 110, 270, 490) + t(735, 146, 'Wind vane', { size: 18, weight: 700, anchor: 'middle' });
  s += line(735, 406, 735, 450, { w: 4 }) + line(685, 330, 785, 330, { w: 2, color: C.muted }) + line(735, 280, 735, 380, { w: 2, color: C.muted });
  s += t(735, 272, 'N', { size: 15, weight: 700, anchor: 'middle' }) + t(735, 398, 'S', { size: 15, weight: 700, anchor: 'middle' }) + t(796, 336, 'E', { size: 15, weight: 700 }) + t(668, 336, 'W', { size: 15, weight: 700, anchor: 'end' });
  { const H = [700, 330], T = [775, 277], L = Math.hypot(T[0] - H[0], T[1] - H[1]), u = [(H[0] - T[0]) / L, (H[1] - T[1]) / L], p = [-u[1], u[0]];
    const P = (b, a1, a2) => `${b[0] + u[0] * a1 + p[0] * a2},${b[1] + u[1] * a1 + p[1] * a2}`;
    s += line(T[0], T[1], H[0] - u[0] * 4, H[1] - u[1] * 4, { w: 5, color: C.rust }) + `<polygon points="${P(H, 16, 0)} ${P(H, -6, 11)} ${P(H, -6, -11)}" fill="${C.rust}" stroke="${C.ink}" stroke-width="1.5"/>` + `<polygon points="${P(T, 0, 15)} ${P(T, 0, -15)} ${P(T, 24, -15)} ${P(T, 24, 15)}" fill="${C.rust}" stroke="${C.ink}" stroke-width="1.5"/>`; }
  s += arrow(650, 400, 712, 352, { w: 4, color: C.tealDark, marker: 'ahT', dash: '8 5' }) + tag(626, 422, 'wind from the SW', { size: 14, fill: C.tealDark });
  s += tl(618, 470, wrap('The arrow points INTO the wind: towards where it comes from. A south-westerly blows from the south-west.', 236, 15), { size: 15 }, 19);
  add('02-three-instruments',
    svg(900, 620, 'Three instruments to get exactly right', s, 'Schematic, not to scale'),
    'Three panels. A U-shaped maximum-minimum thermometer with metal markers left at the highest and lowest temperatures, reset with a magnet. A wet-and-dry bulb thermometer: evaporation cools the muslin-wrapped wet bulb; equal readings of 28 and 28 °C mean saturated air, while 28 and 20 °C mean much drier air. A wind vane whose arrow points into the wind, towards the south-west for a south-westerly.',
    'Markers record extremes; the bulb difference gives humidity; the vane points where the wind comes from.',
    '## The instruments and how each works');
}

// 03 Cloud amount and type
{
  let s = panel(30, 110, 840, 200) + t(55, 146, 'Amount: oktas (eighths of the sky)', { size: 19, weight: 700 });
  [[0, 'clear'], [2, ''], [4, 'half covered'], [6, ''], [8, 'overcast']].forEach(([o, l], i) => { const cx = 130 + i * 160, cy = 220; s += circ(cx, cy, 44, C.tealLight, C.ink, 2.5); if (o) { const a = (o / 8) * Math.PI * 2; s += o === 8 ? circ(cx, cy, 44, C.muted, C.ink, 2.5) : `<path d="M${cx},${cy} L${cx},${cy - 44} A44,44 0 ${o > 4 ? 1 : 0} 1 ${cx + 44 * Math.sin(a)},${cy - 44 * Math.cos(a)} Z" fill="${C.muted}" stroke="${C.ink}" stroke-width="2"/>`; } s += t(cx, cy + 66, `${o} oktas`, { size: 15.5, weight: 700, anchor: 'middle' }) + (l ? t(cx, cy + 86, l, { size: 14, anchor: 'middle', fill: C.muted }) : ''); });
  s += panel(30, 330, 840, 380) + t(55, 366, 'Type: shape and height', { size: 19, weight: 700 });
  s += `<rect x="45" y="385" width="810" height="300" rx="8" fill="${C.tealLight}"/>` + `<rect x="45" y="660" width="810" height="25" fill="#a9c48f"/>`;
  s += path('M90,420 q40,-14 80,0 q30,10 70,-4 M110,438 q50,-10 100,4', { stroke: C.muted, w: 3 }) + tag(120, 470, 'Cirrus', { size: 16 }) + tag(120, 489, 'high, thin, wispy', { size: 14, weight: 400 });
  s += cloud(390, 560, 0.75) + tag(330, 610, 'Cumulus', { size: 16 }) + tag(330, 629, 'heaped, white, flat-based', { size: 14, weight: 400 });
  s += `<path d="M560,640 L560,600 Q545,560 575,535 Q565,480 610,470 Q630,420 680,440 Q700,400 740,425 Q790,410 790,460 L760,470 Q800,500 780,540 Q805,580 790,640 Z" fill="#9aa6b2" stroke="${C.ink}" stroke-width="2.5"/>` + rain(600, 645, 8, 18, 14) + tag(600, 412, 'Cumulonimbus', { size: 16 }) + tag(600, 431, 'towering; heavy rain, thunder', { size: 14, weight: 400 });
  s += `<rect x="60" y="590" width="200" height="34" rx="16" fill="#c7cfd4" stroke="${C.ink}" stroke-width="2"/>` + tag(70, 650, 'Stratus: low, grey, even layer', { size: 14.5 });
  add('03-cloud-amount-type',
    svg(900, 730, 'Observing cloud', s),
    'Top: five sky circles shaded to show 0, 2, 4, 6 and 8 oktas, from clear to overcast. Bottom: cloud types by shape and height: high, thin, wispy cirrus; heaped, white, flat-based cumulus; towering cumulonimbus with heavy rain and thunder; and a low, grey, even layer of stratus.',
    'Amount in oktas; type by shape and height.',
    '## Observing cloud');
}

// 04 Worked example: a week of readings
{
  const D = [['Mon', 31, 22, 0], ['Tue', 33, 23, 12], ['Wed', 29, 21, 25], ['Thu', 27, 19, 3], ['Fri', 30, 20, 0], ['Sat', 32, 22, 0], ['Sun', 34, 24, 6]];
  const X0 = 120, dx = 64, Y1 = 470, kT = 7, kR = 7;
  let s = panel(30, 110, 840, 450) + line(X0, Y1, X0 + 7 * dx, Y1, { w: 2.5 }) + line(X0, Y1, X0, 140, { w: 2.5 }) + line(X0 + 7 * dx, Y1, X0 + 7 * dx, 140, { w: 2.5 });
  [0, 10, 20, 30, 40].forEach((v) => { s += t(X0 - 10, Y1 - v * kT + 5, String(v), { size: 14, anchor: 'end', fill: C.muted }) + (v ? line(X0, Y1 - v * kT, X0 + 7 * dx, Y1 - v * kT, { w: 1, color: C.panelEdge }) : ''); });
  [0, 10, 20, 30, 40].forEach((v) => { s += t(X0 + 7 * dx + 10, Y1 - v * kR + 5, String(v), { size: 14, fill: C.blue }); });
  s += t(X0 - 40, 150, '°C', { size: 15, weight: 700, anchor: 'middle' }) + t(X0 + 7 * dx + 28, 150, 'mm', { size: 15, weight: 700, fill: C.blue, anchor: 'middle' });
  D.forEach(([d, mx, mn, r], i) => { const x = X0 + dx * i + dx / 2; if (r) s += `<rect x="${x - 16}" y="${Y1 - r * kR}" width="32" height="${r * kR}" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="1.5"/>`; s += t(x, Y1 + 24, d, { size: 15, weight: 700, anchor: 'middle' }); });
  const pl = (k, col) => D.map(([d, mx, mn], i) => `${X0 + dx * i + dx / 2},${Y1 - (k ? mx : mn) * kT}`).join(' ');
  s += `<polyline points="${pl(1)}" fill="none" stroke="${C.rust}" stroke-width="4"/><polyline points="${pl(0)}" fill="none" stroke="${C.olive}" stroke-width="4"/>`;
  D.forEach(([d, mx, mn], i) => { const x = X0 + dx * i + dx / 2; s += circ(x, Y1 - mx * kT, 5, C.rust, C.ink, 1.4) + circ(x, Y1 - mn * kT, 5, C.olive, C.ink, 1.4); });
  s += t(X0 + 8, 160, 'max', { size: 15, weight: 700, fill: C.rust }) + t(X0 + 8, 330, 'min', { size: 15, weight: 700, fill: C.olive }) + t(X0 + 8, 458, 'rainfall (bars)', { size: 15, weight: 700, fill: C.tealDark });
  const calc = [['Daily range (Tue)', '33 − 23 = 10 °C'], ['Mean temp (Wed)', '(29 + 21) ÷ 2 = 25 °C'], ['Total rain = 46 mm', '0+12+25+3+0+0+6'], ['Mean daily rain', '46 ÷ 7 = 6.6 mm'], ['Week’s range', '34 − 19 = 15 °C']];
  calc.forEach(([a, b], i) => { const y = 130 + i * 84; s += rrect(650, y, 205, 74, i === 3 ? C.cream : '#ffffff', i === 3 ? C.olive : C.panelEdge, 2, 10) + t(664, y + 26, a, { size: 14.5, weight: 700, fill: C.muted }) + t(664, y + 54, b, { size: 15, weight: 700 }); });
  s += t(450, 590, 'The mean of 6.6 mm hides three completely dry days. Always give the unit.', { size: 16, anchor: 'middle', fill: C.rust, weight: 600 });
  add('04-week-of-readings',
    svg(900, 615, 'Worked example: calculations from a week of readings', s, 'Illustrative data from a school weather station'),
    'A graph of one week: maximum temperatures from 27 to 34 °C, minimums from 19 to 24 °C, and rainfall bars of 12, 25, 3 and 6 mm on four days. Calculations: Tuesday’s range 33 − 23 = 10 °C; Wednesday’s mean (29 + 21) ÷ 2 = 25 °C; total rain 46 mm; mean daily rain 46 ÷ 7 = 6.6 mm, which hides three dry days; the week’s range 34 − 19 = 15 °C.',
    'Range = max − min; mean = (max + min) ÷ 2; always show working and units.',
    '## Worked example 1: calculations from readings');
}

// 05 Wind rose and describing a graph
{
  const cx = 250, cy = 380;
  const arms = [['N', 60], ['NE', 40], ['E', 30], ['SE', 45], ['S', 70], ['SW', 160], ['W', 110], ['NW', 55]];
  let s = panel(30, 110, 440, 520) + t(250, 146, 'A wind rose', { size: 19, weight: 700, anchor: 'middle' }) + t(250, 170, 'illustrative shape, no real data', { size: 14.5, anchor: 'middle', fill: C.muted, italic: true });
  s += circ(cx, cy, 60, 'none', C.panelEdge, 2) + circ(cx, cy, 120, 'none', C.panelEdge, 2);
  arms.forEach(([d, L], i) => { const a = (i * Math.PI) / 4 - Math.PI / 2, x = cx + L * Math.cos(a), y = cy + L * Math.sin(a), px = -Math.sin(a) * 12, py = Math.cos(a) * 12; s += `<path d="M${cx + px},${cy + py} L${x + px},${y + py} L${x - px},${y - py} L${cx - px},${cy - py} Z" fill="${d === 'SW' ? C.mustard : C.teal}" stroke="${C.ink}" stroke-width="2"/>`; const lx = cx + (Math.max(L, 60) + 22) * Math.cos(a), ly = cy + (Math.max(L, 60) + 22) * Math.sin(a); s += t(lx, ly + 6, d, { size: 15, weight: 700, anchor: 'middle' }); });
  s += circ(cx, cy, 14, '#ffffff', C.ink, 2);
  s += tag(250, 572, 'longest arm = prevailing wind', { size: 15, anchor: 'middle', fill: C.olive }) + tag(250, 594, '(here from the south-west)', { size: 15, anchor: 'middle', fill: C.olive, weight: 400 });
  const st = [['Overall pattern first', '“temperature rises through the week”'], ['Highest and lowest', 'with units and when they occurred'], ['Use data for change', '“25 mm on Wednesday to 0 mm on Friday”'], ['Point out anomalies', 'such as a single very wet day']];
  s += t(490, 146, 'Describing any graph', { size: 19, weight: 700 });
  st.forEach(([a, b], i) => { const y = 166 + i * 112; s += rrect(490, y, 380, 98, '#ffffff', C.panelEdge, 2.5, 12) + badge(522, y + 49, 17, String(i + 1), i === 0 ? C.mustard : C.cream) + t(552, y + 40, a, { size: 17, weight: 700 }) + tl(552, y + 66, wrap(b, 300, 15), { size: 15, fill: C.muted }, 19); });
  add('05-wind-rose-describing',
    svg(900, 650, 'Wind roses and describing weather graphs', s),
    'Left: an illustrative wind rose with eight arms; the longest, from the south-west, shows the prevailing wind. Right: four steps for describing any weather graph: give the overall pattern first, quote the highest and lowest values with units and when they occurred, use data for any change, and point out anomalies such as a single very wet day.',
    'The longest arm is the prevailing wind; describe graphs pattern first, then data.',
    '## Reading graphs and diagrams');
}
