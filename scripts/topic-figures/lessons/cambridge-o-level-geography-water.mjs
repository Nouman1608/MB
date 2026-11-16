import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-geography-water';
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

// 01 Methods of water supply (schematic)
{
  const G = 360;
  let s = panel(30, 110, 840, 400) + `<rect x="45" y="125" width="810" height="${G - 125}" rx="10" fill="${C.tealLight}"/>`;
  s += `<path d="M45,${G} L45,180 L130,170 L200,${G - 60} L250,${G - 40} L250,${G} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="2"/>`;
  s += `<path d="M150,${G - 66} L238,${G - 66} L238,${G - 30} Q190,${G - 34} 150,${G - 66} Z" fill="${C.teal}"/>` + `<rect x="236" y="${G - 74}" width="16" height="74" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>`;
  s += `<rect x="45" y="${G}" width="810" height="135" fill="${C.sand}"/>` + `<rect x="45" y="${G + 60}" width="655" height="45" fill="${C.teal}" opacity="0.65"/>` + line(45, G + 60, 700, G + 60, { w: 2, color: C.blue, dash: '8 5' });
  s += tag(60, G + 86, 'aquifer: rock holding groundwater', { size: 14, bg: C.teal, op: 1 }) + tag(480, G + 54, 'water table', { size: 13.5, fill: C.blue, bg: C.sand, op: 1 });
  s += path(`M252,${G - 10} Q330,${G - 4} 400,${G - 2} L700,${G - 2}`, { stroke: C.blue, w: 8 });
  s += `<rect x="700" y="${G - 12}" width="155" height="147" fill="${C.teal}"/>` + t(820, G + 120, 'sea', { size: 15, weight: 700, fill: C.tealDark, anchor: 'end' });
  s += line(320, G - 60, 320, G + 80, { w: 4 }) + `<rect x="305" y="${G - 76}" width="30" height="18" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/>`;
  s += `<rect x="440" y="${G - 40}" width="40" height="30" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/>` + line(460, G - 10, 460, G + 2, { w: 4 });
  s += house(490, G - 26, 1.1) + `<rect x="527" y="${G - 22}" width="14" height="22" fill="${C.teal}" stroke="${C.ink}" stroke-width="1.8"/>`;
  s += `<rect x="620" y="${G - 50}" width="76" height="48" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/>` + `<rect x="560" y="${G - 36}" width="50" height="34" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/>`;
  s += path(`M200,${G - 70} Q260,175 500,175 L800,175`, { stroke: C.rockDark, w: 6, extra: 'marker-end="url(#ah)"' }) + tag(840, 205, 'to a dry city', { size: 14, anchor: 'end' });
  const n = (x, y, k) => badge(x, y, 14, String(k), C.mustard);
  s += n(195, G - 95, 1) + n(345, G - 90, 2) + n(460, G - 60, 3) + n(658, G - 72, 4) + n(585, G - 58, 5) + n(520, 158, 6) + n(510, G - 60, 7);
  const K = [['Reservoir and dam', 'reliable store; floods land, evaporation losses'], ['Well or borehole', 'cheap; over-pumping lowers the water table'], ['River abstraction', 'simple; low in dry seasons, upstream pollution'], ['Desalination', 'unlimited at coasts; energy-hungry, brine waste'], ['Water recycling', 'cuts demand on rivers; costly, some resistance'], ['Water transfer', 'reaches dry cities; very expensive'], ['Rainwater harvesting', 'cheap and local; depends on rain']];
  K.forEach(([a, b], i) => { const x = 30 + (i % 2) * 430, y = 530 + Math.floor(i / 2) * 64; s += rrect(x, y, 410, 56, '#ffffff', C.panelEdge, 2, 10) + badge(x + 24, y + 28, 13, String(i + 1), C.mustard) + t(x + 48, y + 24, a, { size: 16, weight: 700 }) + t(x + 48, y + 45, b, { size: 14, fill: C.muted }); });
  add('01-water-supply-methods',
    svg(900, 795, 'Where water comes from', s, 'Schematic landscape, not to scale'),
    'A schematic landscape with seven numbered water sources: 1 a dam and reservoir in the hills; 2 a borehole pumping from an aquifer below the water table; 3 river abstraction; 4 a desalination plant on the coast; 5 a water recycling plant; 6 a transfer pipeline; 7 rainwater harvested from a roof into a tank. A key gives one advantage and one drawback of each.',
    'Every supply method has a benefit and a cost to weigh.',
    '## Methods of water supply');
}

// 02 Water use by sector
{
  const D = [['Low income', 85, 5, 10], ['Middle income', 70, 18, 12], ['High income', 40, 45, 15]];
  const W = 560;
  let s = panel(30, 110, 840, 330);
  D.forEach(([l, a, ind, d], i) => { const y = 150 + i * 90; let x = 250; s += t(230, y + 34, l, { size: 17, weight: 700, anchor: 'end' }); [[a, '#a9c48f', 'agriculture'], [ind, C.rockDark, 'industry'], [d, C.teal, 'domestic']].forEach(([v, col]) => { const w = (v / 100) * W; s += `<rect x="${x}" y="${y}" width="${w}" height="50" fill="${col}" stroke="${C.ink}" stroke-width="2"/>` + (w > 34 ? t(x + w / 2, y + 32, v + '%', { size: 16, weight: 700, anchor: 'middle', fill: col === C.rockDark ? '#ffffff' : C.ink }) : ''); x += w; }); });
  s += t(740, 144, '5%', { size: 14, weight: 700, anchor: 'middle', fill: C.rockDark });
  [['agriculture', '#a9c48f'], ['industry', C.rockDark], ['domestic', C.teal]].forEach(([l, col], i) => { s += `<rect x="${270 + i * 170}" y="410" width="22" height="16" fill="${col}" stroke="${C.ink}" stroke-width="1.5"/>` + t(300 + i * 170, 424, l, { size: 15.5 }); });
  s += card(30, 460, 270, 190, 'Low income', 'Most people farm, many rely on irrigation; little industry; many homes lack piped water.', { ts: 18, bs: 15.5 });
  s += card(315, 460, 270, 190, 'Industrialising', 'Factories and power stations need water for processing and cooling, so industry’s share rises.', { ts: 18, bs: 15.5 });
  s += card(600, 460, 270, 190, 'High income', 'Piped water, showers and appliances: high domestic use per person, though its share stays modest.', { ts: 18, bs: 15.5 });
  s += panel(30, 670, 840, 64, C.cream, C.olive) + t(450, 709, 'Share (%) is not amount (volume): 40% of a large total can be a lot.', { size: 17, weight: 700, anchor: 'middle' });
  add('02-water-use-sectors',
    svg(900, 755, 'How water use changes with development', s, 'Illustrative pattern from the lesson, for teaching only'),
    'Stacked bars of water use. Low income: agriculture 85, industry 5, domestic 10 per cent. Middle income: 70, 18 and 12 per cent. High income: 40, 45 and 15 per cent. Explanations: farming and irrigation dominate in low-income countries; factories and power stations raise industry’s share; high-income homes use a lot per person though the domestic share stays modest. A note separates share from volume.',
    'Industry’s share rises with development; agriculture’s falls.',
    '## Water use and development');
}

// 03 Why shortages happen
{
  let s = card(30, 115, 410, 280, 'Physical causes', null, { fill: C.cream, edge: C.olive, ts: 20 }) + bullets(55, 180, ['Low or unreliable rainfall: deserts, semi-arid areas', 'High temperatures increase evaporation', 'Drought years, perhaps more frequent with climate change', 'Small countries or islands with few rivers or little storage'], 365, { size: 16, gap: 12 }).svg;
  s += card(460, 115, 410, 280, 'Human causes', null, { fill: '#f6e6dc', edge: C.rust, ts: 20, tfill: C.rust }) + bullets(485, 180, ['Population growth and urbanisation', 'More irrigated farming', 'Groundwater pumped faster than aquifers recharge', 'Pollution of rivers and aquifers', 'No money for dams, pipes, treatment', 'Leaking pipes, wasteful use'], 365, { size: 16, gap: 8 }).svg;
  s += panel(30, 415, 840, 120, C.tealLight, C.tealDark) + t(55, 452, 'Not only a physical problem', { size: 18, weight: 700, fill: C.tealDark }) + t(55, 482, 'Economic water scarcity: rainfall may be adequate, but there is no money to build', { size: 16 }) + t(55, 506, 'dams, pipes and treatment works, so people still lack safe water.', { size: 16 });
  add('03-water-shortage-causes',
    svg(900, 555, 'Why some places run short of water', s),
    'Physical causes: low or unreliable rainfall, high evaporation, droughts and small islands with little storage. Human causes: population growth and urbanisation, more irrigation, over-abstraction of groundwater, pollution, lack of money for infrastructure, and leaks and waste. A note explains economic water scarcity, where rain is adequate but there is no money to supply safe water.',
    'Shortage can come from too little water or too little investment.',
    '## Why some areas have water shortages');
}

// 04 Managing water: a tank model
{
  let s = `<path d="M330,200 L330,470 Q330,500 360,500 L540,500 Q570,500 570,470 L570,200" fill="none" stroke="${C.ink}" stroke-width="4"/>` + `<rect x="333" y="300" width="234" height="197" fill="${C.teal}"/>` + line(333, 300, 567, 300, { w: 2.5, color: C.tealDark }) + t(450, 410, 'usable', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(450, 434, 'fresh water', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += arrow(250, 160, 400, 260, { w: 7, color: C.tealDark, marker: 'ahT' }) + arrow(570, 450, 690, 450, { w: 7, color: C.rust, marker: 'ahR' });
  s += path('M500,500 q6,14 0,24 M520,500 q6,14 0,24', { stroke: C.blue, w: 3 }) + t(512, 545, 'leaks', { size: 14.5, anchor: 'middle', fill: C.blue, weight: 600 });
  s += card(30, 115, 260, 220, 'Increase supply', null, { fill: C.tealLight, edge: C.tealDark, ts: 19, tfill: C.tealDark }) + bullets(48, 178, ['New reservoirs', 'Desalination', 'Water recycling', 'Transfers', 'Rainwater harvesting'], 220, { size: 15.5, gap: 4 }).svg;
  s += card(610, 330, 260, 260, 'Reduce demand', null, { fill: '#f6e6dc', edge: C.rust, ts: 19, tfill: C.rust }) + bullets(628, 392, ['Meters and pricing', 'Fix leaks', 'Efficient appliances', 'Drip irrigation', 'Education campaigns', 'Limit groundwater pumping'], 220, { size: 15.5, gap: 4 }).svg;
  s += card(30, 400, 260, 150, 'Protect quality', 'Treat sewage; limit industrial and farm pollution.', { fill: C.cream, edge: C.olive, ts: 19 });
  s += arrow(294, 470, 326, 440, { w: 3, color: C.olive, marker: 'ahO' });
  s += panel(30, 615, 840, 76, '#ffffff', C.panelEdge) + t(450, 647, 'Demand keeps rising while usable fresh water is limited:', { size: 17, weight: 700, anchor: 'middle' }) + t(450, 673, 'without management, aquifers run dry and rivers are polluted.', { size: 16, anchor: 'middle' });
  add('04-water-management',
    svg(900, 710, 'Managing water for the future', s),
    'A water tank of usable fresh water with three kinds of management: increase supply flowing in (new reservoirs, desalination, recycling, transfers, rainwater harvesting); reduce demand flowing out (meters and pricing, fixing leaks, efficient appliances, drip irrigation, education, limits on groundwater pumping); and protect quality (sewage treatment, pollution limits).',
    'Fill the tank, slow the outflow, and keep what is in it clean.',
    '## Managing water for the future');
}

// 05 Singapore's four national taps
{
  let s = circ(450, 380, 95, C.tealDark, C.ink, 3) + t(450, 372, 'Singapore', { size: 20, weight: 700, anchor: 'middle', fill: '#ffffff' }) + t(450, 398, 'water supply (PUB)', { size: 15, anchor: 'middle', fill: '#ffffff' });
  const T = [['1  Local catchment', 'Drains, canals and rivers feed reservoirs; Marina Barrage (2008) also controls floods.', 30, 120], ['2  Imported water', 'Piped from Johor, Malaysia, under an agreement to 2061.', 600, 120], ['3  NEWater', 'Used water treated with membranes and UV; mainly for industry such as wafer plants.', 30, 470], ['4  Desalination', 'Seawater treated in plants such as those at Tuas.', 600, 470]];
  T.forEach(([a, b, x, y]) => { s += card(x, y, 270, 150, a, b, { ts: 18, bs: 15.5, fill: C.tealLight, edge: C.tealDark }); const cx = x + 135, cy = y + 75, dx = 450 - cx, dy = 380 - cy, L = Math.hypot(dx, dy); s += arrow(cx + (dx * 150) / L, cy + (dy * 95) / L, 450 - (dx * 100) / L, 380 - (dy * 100) / L, { w: 5, color: C.tealDark, marker: 'ahT' }); });
  s += rrect(300, 130, 300, 100, C.cream, C.olive, 2.5, 12) + t(450, 160, 'Why it needs them', { size: 16, weight: 700, anchor: 'middle' }) + tl(450, 184, ['heavy rain, but little land to store', 'it; no large rivers or aquifers'], { size: 15, anchor: 'middle' }, 19);
  s += rrect(300, 530, 300, 90, '#f6e6dc', C.rust, 2.5, 12) + t(450, 560, 'Managing demand', { size: 16, weight: 700, anchor: 'middle', fill: C.rust }) + tl(450, 584, ['pricing, a water conservation tax,', 'saving campaigns'], { size: 15, anchor: 'middle' }, 19);
  s += panel(30, 645, 840, 80, C.cream, C.olive) + t(450, 678, 'Secure supply through technology and planning, but desalination and NEWater', { size: 16.5, weight: 700, anchor: 'middle' }) + t(450, 704, 'use a lot of energy, and the approach needs wealth many countries lack.', { size: 16, anchor: 'middle' });
  add('05-singapore-four-taps',
    svg(900, 745, 'Case study: Singapore’s Four National Taps', s),
    'Four sources feed Singapore’s water supply, managed by PUB: local catchment with reservoirs and the Marina Barrage of 2008; water imported from Johor in Malaysia under an agreement to 2061; NEWater, used water treated with membranes and ultraviolet light, mainly for industry; and desalination at plants such as Tuas. Demand is managed by pricing, a conservation tax and campaigns. The evaluation notes high energy use and the wealth needed.',
    'Little natural storage, so Singapore combines four taps with demand management.',
    '## Case study: water supply in Singapore');
}
