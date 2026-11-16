import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-geography-urban-settlements';
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
  for (const it of items) { const ls = wrap(it, w - 18, size); s += t(x, yy, o.mark || '•', { size: o.mark ? size + 3 : size, fill: o.bullet || o.fill || C.ink, weight: 700 }) + tl(x + 16, yy, ls, { size, fill: o.fill || C.ink }, lh); yy += ls.length * lh + gap; }
  return { svg: s, h: yy - y };
};
const turbine = (x, y, s = 1) => `<line x1="${x}" y1="${y}" x2="${x}" y2="${y - 60 * s}" stroke="${C.ink}" stroke-width="${3 * s}"/>` + [0, 120, 240].map((a) => { const r = (a - 90) * Math.PI / 180; return `<line x1="${x}" y1="${y - 60 * s}" x2="${x + Math.cos(r) * 30 * s}" y2="${y - 60 * s + Math.sin(r) * 30 * s}" stroke="${C.ink}" stroke-width="${3.5 * s}" stroke-linecap="round"/>`; }).join('') + `<circle cx="${x}" cy="${y - 60 * s}" r="${4 * s}" fill="${C.mustard}" stroke="${C.ink}" stroke-width="1.5"/>`;
const flame = (x, y, s = 1) => `<path d="M${x - 22 * s},${y} l44,${-8 * s} M${x - 22 * s},${y - 8 * s} l44,${8 * s}" stroke="${C.rockDark}" stroke-width="${6 * s}" stroke-linecap="round"/><path d="M${x},${y - 10 * s} q-16,-14 -6,-34 q2,12 8,14 q-2,-16 10,-26 q-2,20 8,30 q4,10 -4,16 z" fill="${C.rust}" stroke="${C.ink}" stroke-width="1.6"/>`;
const steam = (x, y, n = 2, gap = 18, col = C.muted) => { let s = ''; for (let i = 0; i < n; i++) s += path(`M${x + i * gap},${y} q-8,-12 0,-24 q8,-12 0,-24`, { stroke: col, w: 3 }); return s; };
// ---- end helpers ----

// 01 Accessibility and land value
{
  const X0 = 110, X1 = 850, Y0 = 140, Y1 = 420;
  let s = panel(30, 110, 840, 400) + line(X0, Y1, X1, Y1, { w: 2.5 }) + line(X0, Y0, X0, Y1, { w: 2.5 });
  s += t(X0 - 12, Y0 + 10, 'high', { size: 14.5, anchor: 'end', fill: C.muted }) + t(X0 - 12, Y1, 'low', { size: 14.5, anchor: 'end', fill: C.muted });
  s += `<text x="62" y="${(Y0 + Y1) / 2}" font-size="15" fill="${C.ink}" font-weight="700" text-anchor="middle" transform="rotate(-90 62 ${(Y0 + Y1) / 2})">land value and rent</text>`;
  s += t(X1, Y1 + 28, 'distance from the city centre →', { size: 15, anchor: 'end', fill: C.ink, weight: 700 });
  const zones = [[X0, 220, 'CBD', C.mustard], [220, 400, 'Inner city', C.rock], [400, 640, 'Suburbs', C.tealLight], [640, X1, 'Rural–urban fringe', '#d8e3c6']];
  zones.forEach(([a, b, l, f]) => { s += `<rect x="${a}" y="${Y1 + 36}" width="${b - a}" height="40" fill="${f}" stroke="${C.ink}" stroke-width="1.6"/>` + t((a + b) / 2, Y1 + 62, l, { size: 15.5, weight: 700, anchor: 'middle' }); });
  s += path(`M${X0},${Y0 + 5} Q${X0 + 60},${Y0 + 160} 260,${Y0 + 200} Q450,${Y0 + 240} ${X1},${Y0 + 262}`, { stroke: C.rust, w: 5 });
  s += tag(150, 165, 'most accessible: routes meet', { size: 15, fill: C.rust });
  s += tag(500, 300, 'cheaper land, more space', { size: 15, fill: C.tealDark });
  s += card(30, 530, 410, 120, 'High-profit users pay most', 'Shops, offices, banks compete for the centre and build upwards.', { ts: 18, bs: 15.5, fill: C.cream, edge: C.olive });
  s += card(460, 530, 410, 120, 'Space-hungry users move out', 'Housing with gardens, industrial estates, retail parks, airports.', { ts: 18, bs: 15.5, fill: C.tealLight, edge: C.tealDark });
  add('01-land-value-zones',
    svg(900, 670, 'Why land use changes with distance', s, 'Schematic, not to scale'),
    'A graph of land value falling steeply from the city centre, where routes meet and accessibility is highest, then more gently outwards. Bands below show the zones in order: CBD, inner city, suburbs, rural–urban fringe. High-profit users such as shops, offices and banks pay most and build upwards in the centre; users needing lots of space locate further out.',
    'Accessibility and land value sort land uses from the centre outwards.',
    '## Land use zones and the reasons for their location');
}

// 02 HIC and LIC city models (schematic)
{
  const city = (cx, cy, hic) => {
    let s = '';
    if (hic) {
      s += circ(cx, cy, 175, '#d8e3c6', C.ink, 2) + circ(cx, cy, 130, C.tealLight, C.ink, 2) + circ(cx, cy, 80, C.rock, C.ink, 2) + circ(cx, cy, 38, C.mustard, C.ink, 2.5);
      s += `<path d="M${cx - 175},${cy + 60} L${cx + 175},${cy - 60}" stroke="${C.blue}" stroke-width="7"/>` + `<path d="M${cx - 60},${cy - 70} L${cx - 20},${cy - 30} L${cx - 70},${cy - 10} Z" fill="${C.rust}" opacity="0.8"/>`;
      s += t(cx, cy + 6, 'CBD', { size: 15, weight: 700, anchor: 'middle' }) + tag(cx, cy + 62, 'inner city', { size: 13.5, anchor: 'middle', bg: C.rock, op: 1 }) + tag(cx, cy + 112, 'suburbs', { size: 13.5, anchor: 'middle', bg: C.tealLight, op: 1 }) + tag(cx, cy + 158, 'rural–urban fringe', { size: 13.5, anchor: 'middle', bg: '#d8e3c6', op: 1 });
      s += tag(cx - 165, cy - 70, 'old industry by', { size: 13.5, fill: C.rust }) + tag(cx - 165, cy - 52, 'river and rail', { size: 13.5, fill: C.rust, weight: 400 });
      s += `<rect x="${cx + 120}" y="${cy + 70}" width="40" height="30" fill="${C.rust}" opacity="0.8"/>` + tag(cx + 60, cy + 142, 'modern estate', { size: 13.5, fill: C.rust });
    } else {
      s += circ(cx, cy, 175, '#d8e3c6', C.ink, 2) + circ(cx, cy, 120, C.tealLight, C.ink, 2) + circ(cx, cy, 38, C.mustard, C.ink, 2.5);
      s += `<path d="M${cx},${cy} L${cx + 150},${cy - 90} L${cx + 120},${cy - 130} Z" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>`;
      s += `<path d="M${cx},${cy} L${cx - 175},${cy + 10}" stroke="${C.ink}" stroke-width="5"/>`;
      [[-150, -10], [-120, 6]].forEach(([dx, dy]) => { s += `<rect x="${cx + dx}" y="${cy + dy - 22}" width="26" height="16" fill="${C.rust}" opacity="0.85"/>`; });
      for (let i = 0; i < 26; i++) { const a = Math.PI * (0.15 + i * 0.065), r = 150 + (i % 3) * 8; s += `<rect x="${cx + r * Math.cos(a) - 5}" y="${cy + r * Math.sin(a) - 4}" width="10" height="8" fill="${C.rockDark}"/>`; }
      s += t(cx, cy + 6, 'CBD', { size: 15, weight: 700, anchor: 'middle' }) + tag(cx + 60, cy - 108, 'high-income', { size: 13.5, fill: C.olive }) + tag(cx + 60, cy - 90, 'housing', { size: 13.5, fill: C.olive, weight: 400 });
      s += tag(cx - 172, cy - 40, 'industry along', { size: 13.5, fill: C.rust }) + tag(cx - 172, cy - 22, 'main roads', { size: 13.5, fill: C.rust, weight: 400 });
      s += tag(cx, cy + 205, 'squatter settlements on the edge', { size: 14, anchor: 'middle', fill: C.rockDark });
    }
    return s;
  };
  let s = panel(30, 110, 410, 520) + t(235, 146, 'Typical high-income city', { size: 19, weight: 700, anchor: 'middle' }) + city(235, 370, true);
  s += panel(460, 110, 410, 520) + t(665, 146, 'Many lower-income cities', { size: 19, weight: 700, anchor: 'middle' }) + city(665, 370, false);
  s += t(235, 600, 'wealthiest often furthest out', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(665, 610, 'poorest often on the periphery', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
  s += panel(30, 650, 840, 76, C.cream, C.olive) + t(450, 682, 'Squatter settlements grow on land nobody else wants:', { size: 17, weight: 700, anchor: 'middle' }) + t(450, 707, 'steep hillsides, flood plains, beside railways or rubbish dumps.', { size: 16, anchor: 'middle' });
  add('02-city-models',
    svg(900, 745, 'Not every city looks the same', s, 'Simplified schematic models'),
    'Two schematic city models. High-income city: a central CBD ringed by inner city, suburbs and rural–urban fringe, with old industry by the river and railway and a modern estate on the edge; the wealthiest often live furthest out. Lower-income city: a CBD with high-income housing in a sector near it and along a main road, industry along main roads, and squatter settlements around the edge on land nobody else wants.',
    'In many lower-income cities the poorest live on the edge, not the wealthiest.',
    '### Cities at different levels of development');
}

// 03 Four ways land use changes
{
  const P = [
    ['Deindustrialisation and redevelopment', 'Old factories and docks close; brownfield sites become offices, flats, leisure (e.g. London Docklands, Canary Wharf).', 0],
    ['Gentrification', 'Wealthier people renovate older inner-city housing; prices rise and lower-income residents may be pushed out.', 1],
    ['Decentralisation', 'Shops and offices move to retail and business parks on the fringe: cheaper land, easier parking.', 2],
    ['Urban sprawl', 'The built-up area spreads onto greenfield land, often low-density housing and roads.', 3],
  ];
  let s = '';
  P.forEach(([h, d, k], i) => {
    const x = 30 + (i % 2) * 430, y = 110 + Math.floor(i / 2) * 300;
    s += panel(x, y, 410, 284) + t(x + 20, y + 36, h, { size: 18, weight: 700 });
    const sx = x + 20, sy = y + 56;
    s += `<rect x="${sx}" y="${sy}" width="370" height="120" rx="8" fill="${C.tealLight}"/>`;
    const G = sy + 105;
    if (k === 0) s += factory(sx + 40, G, 1) + arrow(sx + 140, G - 40, sx + 210, G - 40, { w: 4 }) + `<rect x="${sx + 240}" y="${G - 90}" width="36" height="90" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/><rect x="${sx + 290}" y="${G - 60}" width="50" height="60" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/>`;
    if (k === 1) s += house(sx + 50, G - 28, 1.2, C.rockDark) + house(sx + 100, G - 28, 1.2, C.rockDark) + arrow(sx + 160, G - 30, sx + 220, G - 30, { w: 4 }) + house(sx + 250, G - 28, 1.2, C.mustard) + house(sx + 300, G - 28, 1.2, C.mustard) + t(sx + 300, G - 58, 'prices ↑', { size: 18, weight: 700, fill: C.rust });
    if (k === 2) s += `<rect x="${sx + 20}" y="${G - 70}" width="70" height="70" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` + t(sx + 55, G - 30, 'centre', { size: 13.5, anchor: 'middle' }) + arrow(sx + 100, G - 35, sx + 200, G - 35, { w: 4 }) + `<rect x="${sx + 210}" y="${G - 40}" width="130" height="40" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/>` + t(sx + 275, G - 15, 'retail park', { size: 13.5, anchor: 'middle' }) + `<rect x="${sx + 210}" y="${G - 70}" width="130" height="22" fill="#d8e3c6" stroke="${C.ink}" stroke-width="1.5"/>` + t(sx + 275, G - 54, 'parking', { size: 12.5, anchor: 'middle' });
    if (k === 3) s += `<rect x="${sx + 15}" y="${G - 70}" width="110" height="70" fill="${C.rock}" stroke="${C.ink}" stroke-width="2"/>` + t(sx + 70, G - 30, 'city', { size: 14, anchor: 'middle', weight: 700 }) + [0, 1, 2, 3].map((j) => house(sx + 145 + j * 50, G - 26, 0.8)).join('') + arrow(sx + 130, G - 55, sx + 340, G - 55, { w: 3, dash: '8 6' }) + `<rect x="${sx + 300}" y="${G - 20}" width="60" height="20" fill="#a9c48f"/>`;
    s += tl(x + 20, y + 206, wrap(d, 370, 15.5), { size: 15.5 }, 20);
  });
  add('03-land-use-change',
    svg(900, 710, 'How urban land use changes', s),
    'Four panels. Deindustrialisation and redevelopment: old factories and docks become offices, flats and leisure, as at London Docklands and Canary Wharf. Gentrification: wealthier people renovate older inner-city housing and prices rise. Decentralisation: shops and offices move to retail and business parks on the fringe. Urban sprawl: the built-up area spreads onto greenfield land.',
    'Cities reuse their centres and spread at their edges.',
    '## Changes in land use and urban sprawl');
}

// 04 Urban sprawl: effects and responses
{
  const cx = 300, cy = 400;
  let s = panel(30, 110, 540, 580) + `<rect x="45" y="125" width="510" height="550" rx="10" fill="#d8e3c6"/>`;
  s += `<circle cx="${cx}" cy="${cy}" r="230" fill="#a9c48f" opacity="0.5" stroke="${C.grass}" stroke-width="3" stroke-dasharray="10 7"/>`;
  s += `<path d="M${cx - 120},${cy - 30} Q${cx - 130},${cy - 120} ${cx - 40},${cy - 130} Q${cx + 60},${cy - 160} ${cx + 120},${cy - 90} Q${cx + 170},${cy - 20} ${cx + 110},${cy + 70} Q${cx + 60},${cy + 140} ${cx - 30},${cy + 120} Q${cx - 130},${cy + 100} ${cx - 120},${cy - 30} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += `<path d="M${cx + 110},${cy + 70} Q${cx + 170},${cy + 110} ${cx + 175},${cy + 150} L${cx + 140},${cy + 170} Q${cx + 90},${cy + 140} ${cx + 60},${cy + 120} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="2" stroke-dasharray="6 4"/>`;
  [[-200, 20], [180, -60], [140, 180]].forEach(([dx, dy]) => { s += arrow(cx + dx * 0.55, cy + dy * 0.55, cx + dx * 0.95, cy + dy * 0.95, { w: 4, color: C.rust, marker: 'ahR' }); });
  s += t(cx, cy, 'CITY', { size: 22, weight: 700, anchor: 'middle' }) + tag(cx + 182, cy + 104, 'sprawl', { size: 15, fill: C.rust });
  s += tag(cx, cy - 245, 'green belt: building restricted', { size: 15, anchor: 'middle', fill: C.grass, bg: '#d8e3c6', op: 1 });
  s += house(110, 250, 0.8) + house(140, 262, 0.8) + tag(95, 290, 'commuter village', { size: 14, weight: 600 });
  s += `<circle cx="470" cy="600" r="34" fill="${C.rock}" stroke="${C.ink}" stroke-width="2"/>` + tag(470, 655, 'new town', { size: 14, anchor: 'middle' });
  const E = [['Environment', 'loss of farmland, woodland, habitats; faster runoff, flood risk'], ['Transport', 'longer journeys, car dependence, congestion, air pollution'], ['Rural settlements', 'commuter villages; house prices rise; village services close'], ['The city', 'cost of extending water, sewers, power and roads']];
  s += t(590, 140, 'Effects of sprawl', { size: 19, weight: 700, fill: C.rust });
  E.forEach(([a, b], i) => { const y = 156 + i * 94; s += rrect(590, y, 280, 86, '#f6e6dc', C.rust, 2, 10) + t(606, y + 26, a, { size: 16, weight: 700 }) + tl(606, y + 48, wrap(b, 250, 14), { size: 14 }, 17); });
  s += rrect(590, 536, 280, 154, C.tealLight, C.tealDark, 2.5, 12) + t(606, 564, 'Responses', { size: 17, weight: 700, fill: C.tealDark }) + bullets(606, 592, ['Green belts', 'Brownfield sites first', 'Higher-density housing', 'New towns, e.g. Navi Mumbai'], 250, { size: 14.5, gap: 4 }).svg;
  add('04-urban-sprawl',
    svg(900, 710, 'Urban sprawl: effects and responses', s, 'Schematic plan, not to scale'),
    'A schematic plan of a city spreading outwards into a surrounding green belt, with a commuter village and a planned new town beyond. Effects of sprawl: loss of farmland and habitats and faster runoff; longer journeys and car dependence; commuter villages with rising house prices and closing services; and the cost of extending utilities. Responses: green belts, brownfield first, higher-density housing and new towns such as Navi Mumbai.',
    'Sprawl eats greenfield land; planners push growth onto brownfield sites and new towns.',
    '## Changes in land use and urban sprawl');
}

// 05 Worked example 1: two industrial areas on a sketch map
{
  const cx = 330, cy = 400;
  let s = panel(30, 110, 840, 560) + `<rect x="45" y="125" width="570" height="530" rx="10" fill="#d8e3c6"/>`;
  s += `<circle cx="${cx}" cy="${cy}" r="210" fill="none" stroke="${C.ink}" stroke-width="5" stroke-dasharray="1 0"/>` + t(cx + 150, cy - 175, 'ring road', { size: 14.5, weight: 700 });
  s += `<circle cx="${cx}" cy="${cy}" r="150" fill="${C.rock}" opacity="0.45"/>` + circ(cx, cy, 34, C.mustard, C.ink, 2) + t(cx, cy + 5, 'centre', { size: 14, anchor: 'middle', weight: 700 });
  s += path(`M45,${cy - 40} Q200,${cy - 20} ${cx},${cy + 50} Q450,${cy + 110} 615,${cy + 80}`, { stroke: C.blue, w: 10 }) + t(80, cy - 55, 'river', { size: 14.5, weight: 700, fill: C.blue });
  s += line(45, cy + 120, 615, cy - 130, { w: 4, dash: '14 6' }) + t(80, cy + 140, 'railway', { size: 14.5, weight: 700 });
  s += `<rect x="${cx - 115}" y="${cy + 10}" width="80" height="54" fill="${C.rust}" opacity="0.8" stroke="${C.ink}" stroke-width="2"/>` + badge(cx - 75, cy + 37, 14, 'A', C.cream);
  s += `<rect x="${cx + 170}" y="${cy + 120}" width="90" height="60" fill="${C.rust}" opacity="0.8" stroke="${C.ink}" stroke-width="2"/>` + badge(cx + 215, cy + 150, 14, 'B', C.cream);
  s += t(330, 645, 'Schematic sketch map, not to scale', { size: 14.5, anchor: 'middle', fill: C.muted, italic: true });
  s += card(635, 125, 220, 250, 'A: old, near centre', 'Heavy goods moved by river and rail when it was built; workers walked to work.', { ts: 17.5, bs: 15.5 });
  s += card(635, 390, 220, 265, 'B: new estate, edge', 'Goods move by lorry, so fast ring-road access; cheaper land in large plots, room to expand and park.', { ts: 17.5, bs: 15.5 });
  add('05-industrial-locations',
    svg(900, 690, 'Worked example: suggest reasons from a map', s),
    'A schematic sketch map of a city with a central core, a river and railway crossing near the centre, and a ring road around the edge. Industrial area A sits by the river and railway near the centre because goods once moved by water and rail and workers walked to work. Industrial estate B sits on the ring road at the edge for lorry access and cheap, large plots with room to expand.',
    'Tie every reason to something you can see on the map.',
    '## Worked example 1: a resource-based question');
}

// 06 London congestion: cause, attempts, evaluation
{
  const cols = [['Causes', ['Large commuting workforce into central London', 'Street pattern laid out long before cars', 'Deliveries, taxis and buses compete for space'], '#f6e6dc', C.rust], ['Attempts', ['Congestion Charge (2003): pay to enter the zone', 'Underground, bus and rail network', 'Docklands Light Railway', 'Cycle lanes'], C.tealLight, C.tealDark], ['Evaluation', ['Less traffic inside the zone', 'Critics: hits small businesses and lower-income drivers', 'Public transport is costly and slow to build'], C.cream, C.olive]];
  let s = '';
  cols.forEach(([h, items, f, e], i) => { const x = 30 + i * 290; s += card(x, 115, 260, 320, h, null, { fill: f, edge: e, ts: 20, tfill: e }) + bullets(x + 20, 182, items, 225, { size: 16, gap: 12 }).svg; if (i < 2) s += arrow(x + 264, 275, x + 286, 275, { w: 3.5 }); });
  s += panel(30, 455, 840, 70, '#ffffff', C.panelEdge) + t(450, 497, 'Learn every urban problem as: problem → cause → solution → limitation.', { size: 17, weight: 700, anchor: 'middle' });
  add('06-london-congestion',
    svg(900, 545, 'Case-study plan: traffic congestion in London', s),
    'Three columns. Causes: a large commuting workforce, an old street pattern, and deliveries, taxis and buses competing for space. Attempts: the Congestion Charge from 2003, the Underground, bus and rail network, the Docklands Light Railway and cycle lanes. Evaluation: less traffic in the zone, but criticism over effects on small businesses and lower-income drivers, and public transport is costly and slow to build.',
    'Cause, attempted solution, then how well it works.',
    '## Worked example 2: planning a case-study answer');
}
