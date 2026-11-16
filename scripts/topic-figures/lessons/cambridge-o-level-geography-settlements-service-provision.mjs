import { C, svg, panel, t as t0, tl as tl0, arrow, path, badge as badge0 } from '../style.mjs';

// house minimum text size is 15: clamp every label drawn in this file
const MIN = 15;
const t = (x, y, s, o = {}) => t0(x, y, s, { ...o, size: Math.max(MIN, o.size || 18) });
const tl = (x, y, lines, opts = {}, lh = Math.max(MIN, opts.size || 18) * 1.3) => lines.map((s, i) => t(x, y + i * lh, s, opts)).join('');
const badge = (cx, cy, r, label, fill = C.mustard) => { const sz = Math.max(MIN, r); return `<circle cx="${cx}" cy="${cy}" r="${Math.max(r, sz * 0.85)}" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + t(cx, cy + sz * 0.36, label, { size: sz, weight: 700, anchor: 'middle' }); };

export const slug = 'cambridge-o-level-geography-settlements-service-provision';
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

// 01 Three settlement patterns
{
  const P = [['Dispersed', 'isolated farms spread out', 'Large farms; pastoral or plantation farming; water everywhere; few defence needs'], ['Nucleated', 'clustered round a centre', 'Shared well, defence, cooperation, scarce flat land; round a market, mosque or church'], ['Linear', 'in a line or ribbon', 'Along a road, railway, river, coast or narrow valley floor']];
  let s = '';
  P.forEach(([h, sub, why], i) => {
    const x = 30 + i * 285;
    s += panel(x, 110, 270, 450) + t(x + 20, 146, h, { size: 21, weight: 700 }) + t(x + 20, 170, sub, { size: 15.5, fill: C.muted });
    s += `<rect x="${x + 15}" y="185" width="240" height="240" rx="8" fill="#d8e3c6"/>`;
    if (i === 0) { [[40, 220], [170, 210], [100, 290], [210, 320], [55, 380], [150, 390]].forEach(([a, b]) => { s += house(x + a, y0(b), 0.8); }); s += line(x + 15, 300, x + 255, 300, { color: C.panelEdge, w: 2, dash: '4 6' }) + line(x + 135, 185, x + 135, 425, { color: C.panelEdge, w: 2, dash: '4 6' }); }
    if (i === 1) { s += line(x + 15, 305, x + 255, 305, { w: 8, color: '#ffffff' }) + line(x + 135, 185, x + 135, 425, { w: 8, color: '#ffffff' }); [[95, 270], [150, 270], [100, 330], [150, 335], [70, 300], [175, 302], [120, 250], [120, 350], [180, 260], [80, 345]].forEach(([a, b]) => { s += house(x + a, b, 0.7); }); s += circ(x + 135, 305, 9, C.mustard, C.ink, 2); s += tag(x + 135, 412, 'crossroads / well', { size: 14, anchor: 'middle', bg: '#d8e3c6', op: 1 }); }
    if (i === 2) { s += path(`M${x + 15},400 Q${x + 120},330 ${x + 255},210`, { stroke: '#ffffff', w: 10 }) + path(`M${x + 15},400 Q${x + 120},330 ${x + 255},210`, { stroke: C.muted, w: 2, extra: 'stroke-dasharray="8 8"' }); [[30, 368], [75, 340], [118, 312], [160, 282], [200, 248], [55, 400], [100, 372], [145, 344], [185, 312]].forEach(([a, b]) => { s += house(x + a, b, 0.7); }); s += tag(x + 30, 220, 'road', { size: 14, bg: '#d8e3c6', op: 1 }); }
    s += t(x + 20, 458, 'Typical reasons', { size: 15, weight: 700, fill: C.tealDark }) + tl(x + 20, 484, wrap(why, 232, 15.5), { size: 15.5 }, 20);
  });
  function y0(b) { return b; }
  s += t(450, 590, 'On a map: name the pattern, then link it to a map feature.', { size: 17, anchor: 'middle', fill: C.muted, italic: true });
  add('01-settlement-patterns',
    svg(900, 615, 'Dispersed, nucleated, linear', s, 'Plan views, not to scale'),
    'Three plan views. Dispersed: isolated farmhouses spread across fields, typical of large or pastoral farms where water is everywhere. Nucleated: houses clustered round a crossroads or well, for shared water, defence or cooperation. Linear: houses in a line along a road, also found along railways, rivers, coasts and valley floors.',
    'Name the pattern, then give a reason tied to a feature you can see.',
    '## Key idea 1: settlement patterns');
}

// 02 Site factors in one landscape
{
  let s = panel(30, 110, 840, 470) + `<rect x="45" y="125" width="810" height="440" rx="10" fill="#d8e3c6"/>`;
  s += `<path d="M45,125 L320,125 L260,200 L200,180 L140,230 L45,210 Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="2"/><path d="M420,125 L855,125 L855,215 L760,230 L650,190 L560,215 L470,175 Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="2"/>`;
  s += tag(392, 150, 'gap', { size: 15, fill: C.ink });
  s += path('M370,125 Q360,220 380,280 Q420,330 520,330 Q610,330 620,400 Q630,470 560,490 Q480,500 470,440 Q465,390 400,420 Q330,460 300,565', { stroke: C.blue, w: 12 });
  s += `<rect x="45" y="460" width="230" height="105" fill="#a9c48f" opacity="0.7"/>` + t(160, 555, 'marshy floodplain', { size: 14.5, anchor: 'middle', fill: C.tealDark, weight: 600 });
  s += `<ellipse cx="120" cy="470" rx="45" ry="22" fill="${C.sand}" stroke="${C.olive}" stroke-width="2"/>` + house(100, 470, 0.7) + house(125, 476, 0.7);
  s += house(540, 412, 0.8) + house(565, 425, 0.8) + house(520, 430, 0.8);
  s += line(330, 380, 410, 420, { w: 8, color: C.rockDark }) + house(300, 360, 0.7) + house(415, 438, 0.7);
  s += circ(720, 330, 9, C.blue, C.ink, 2) + house(735, 318, 0.75) + house(760, 330, 0.75) + house(710, 352, 0.75);
  s += house(370, 145 + 60, 0.7) + house(395, 212, 0.7);
  s += house(250, 270, 0.75) + house(225, 290, 0.75);
  const n = (x, y, k) => badge(x, y, 15, String(k), C.mustard);
  s += n(160, 445, 1) + n(585, 395, 2) + n(320, 410, 3) + n(700, 305, 4) + n(420, 190, 5) + n(210, 268, 6);
  const L = [['Dry point', 'above a floodplain or marsh'], ['Defence', 'in a meander loop, e.g. Durham'], ['Bridging point', 'lowest river crossing'], ['Wet point', 'spring or well, vital in dry areas'], ['Gap', 'natural route through hills'], ['Shelter and aspect', 'out of the wind, facing the sun']];
  L.forEach(([a, b], i) => { const x = 30 + (i % 3) * 283, y = 600 + Math.floor(i / 3) * 74; s += rrect(x, y, 272, 64, '#ffffff', C.panelEdge, 2, 10) + badge(x + 26, y + 32, 14, String(i + 1), C.mustard) + t(x + 50, y + 27, a, { size: 16.5, weight: 700 }) + t(x + 50, y + 49, b, { size: 13.5, fill: C.muted }); });
  add('02-site-factors',
    svg(900, 765, 'Choosing a site', s, 'Schematic landscape, not to scale'),
    'A schematic landscape with six numbered settlements: 1 on a dry point above a marshy floodplain; 2 inside a meander loop for defence, like Durham; 3 at a bridging point; 4 at a spring, a wet point; 5 in a gap through the hills; 6 on a sheltered, sunny slope. A key below names each site factor.',
    'Early sites met basic needs: water, safety from floods and attack, crossings and routes.',
    '## Key idea 2: site factors');
}

// 03 Settlement hierarchy
{
  const lv = ['Conurbation', 'City', 'Town', 'Village', 'Hamlet', 'Isolated dwelling'];
  let s = '';
  lv.forEach((l, i) => { const w = 140 + i * 72, y = 120 + i * 74, x = 330 - w / 2; s += `<rect x="${x}" y="${y}" width="${w}" height="64" rx="8" fill="${[C.tealDark, C.teal, C.tealLight, C.cream, C.sand, '#ffffff'][i]}" stroke="${C.ink}" stroke-width="2"/>` + t(330, y + 40, l, { size: 18, weight: 700, anchor: 'middle', fill: i === 0 ? '#ffffff' : C.ink }); });
  s += arrow(690, 560, 690, 130, { w: 5 });
  s += t(710, 160, 'Going up:', { size: 18, weight: 700 }) + bullets(710, 196, ['fewer settlements', 'each larger', 'further apart', 'more and higher-order services', 'larger sphere of influence'], 165, { size: 16, gap: 10 }).svg;
  s += panel(30, 580, 840, 150, C.cream, C.olive) + t(55, 616, 'Why it forms', { size: 19, weight: 700 }) +
    t(55, 646, 'Threshold: minimum number of people needed to keep a service running.', { size: 16 }) +
    t(55, 672, 'Range: maximum distance people will travel to use it.', { size: 16 }) +
    t(55, 698, 'High threshold + long range → only large settlements can support the service.', { size: 16, weight: 700 });
  add('03-settlement-hierarchy',
    svg(900, 750, 'The settlement hierarchy', s),
    'A stepped pyramid from isolated dwelling at the base through hamlet, village, town and city to conurbation at the top. An arrow upwards notes fewer settlements, each larger and further apart, with more and higher-order services and a larger sphere of influence. Below, threshold and range explain why only large settlements support high-order services.',
    'Threshold and range decide which services each level can support.',
    '## Key idea 4: the hierarchy of settlements and services');
}

// 04 Changing rural services
{
  let s = card(30, 115, 270, 240, 'Why services close', null, { fill: '#f6e6dc', edge: C.rust, ts: 19, tfill: C.rust }) + bullets(50, 180, ['More car ownership: people shop in larger towns', 'Online shopping and banking', 'Ageing or declining population'], 236, { size: 16, gap: 12 }).svg;
  s += arrow(305, 235, 335, 235, { w: 4 });
  s += card(340, 115, 220, 240, 'Losses', null, { ts: 19 }) + bullets(360, 180, ['Village shops', 'Banks', 'Post offices'], 180, { size: 17, gap: 14 }).svg;
  s += arrow(565, 235, 595, 235, { w: 4 });
  s += card(600, 115, 270, 240, 'Responses', null, { fill: C.tealLight, edge: C.tealDark, ts: 19, tfill: C.tealDark }) + bullets(620, 180, ['Mobile libraries, clinics and banking vans', 'Multi-purpose shop with post office and café', 'Community-run shops'], 236, { size: 16, gap: 12 }).svg;
  s += panel(30, 375, 840, 76, C.cream, C.olive) + t(450, 420, 'Fast-growing cities face the opposite problem: services cannot be built fast enough.', { size: 17, weight: 700, anchor: 'middle' });
  add('04-changing-services',
    svg(900, 475, 'Rural services under pressure', s),
    'Causes of rural service closure (more car ownership, online shopping and banking, ageing or declining population) lead to the loss of village shops, banks and post offices. Responses include mobile libraries, clinics and banking vans, multi-purpose shops with a post office and café, and community-run shops. In fast-growing cities the problem is the reverse.',
    'Fewer local customers push services away; mobile and shared services fill the gap.',
    '## Key idea 4: the hierarchy of settlements and services');
}

// 05 Measuring spheres of influence
{
  const cx = 280, cy = 400, k = 4;
  let s = panel(30, 110, 840, 600) + `<rect x="45" y="125" width="470" height="570" rx="10" fill="#d8e3c6"/>`;
  [[55, C.rust, 'furniture store'], [15, C.olive, 'supermarket'], [4, C.tealDark, 'newsagent']].forEach(([r, col]) => { s += `<circle cx="${cx}" cy="${cy}" r="${r * k}" fill="${col}" fill-opacity="0.12" stroke="${col}" stroke-width="3" stroke-dasharray="${r === 55 ? '' : '8 6'}"/>`; });
  [[0.3, 50], [1.1, 40], [2, 30], [2.8, 52], [3.6, 46], [4.4, 25], [5.3, 38], [0.7, 12], [2.4, 10], [4.1, 14], [5.7, 8]].forEach(([a, d]) => { const x = cx + Math.cos(a) * d * k, y = cy + Math.sin(a) * d * k; s += line(cx, cy, x, y, { w: 1.5, color: C.muted }) + circ(x, y, 4.5, C.ink, C.ink, 1); });
  s += circ(cx, cy, 12, C.mustard, C.ink, 2.5) + tag(cx + 16, cy - 14, 'market town', { size: 14.5 });
  s += tag(cx, cy - 55 * k + 22, 'furniture store: furthest 55 km', { size: 14, anchor: 'middle', fill: C.rust });
  s += tag(cx, cy - 15 * k - 8, 'supermarket: 15 km', { size: 14, anchor: 'middle', fill: C.olive });
  s += tag(cx, cy + 4 * k + 30, 'newsagent: 4 km', { size: 14, anchor: 'middle', fill: C.tealDark });
  s += t(280, 685, 'lines = desire lines to customers’ homes (schematic)', { size: 14, anchor: 'middle', fill: C.muted, italic: true });
  const rows = [['Newsagent', '1.5', '4', 'low-order', C.tealDark], ['Supermarket', '6', '15', '', C.olive], ['Furniture store', '22', '55', 'high-order', C.rust]];
  s += t(535, 150, 'Survey of 40 shoppers', { size: 18, weight: 700 }) + t(535, 174, 'mean / furthest distance (km)', { size: 14.5, fill: C.muted });
  rows.forEach(([a, m, f, o, col], i) => { const y = 192 + i * 92; s += rrect(535, y, 315, 80, '#ffffff', col, 2.5, 12) + t(553, y + 30, a, { size: 17, weight: 700, fill: col }) + t(553, y + 58, `${m} / ${f} km`, { size: 16 }) + t(835, y + 58, o, { size: 15, anchor: 'end', fill: C.muted, weight: 600 }); });
  s += para(535, 490, 'Larger threshold and range → fewer settlements can support the service.', 315, { size: 16, weight: 700 }).svg;
  s += para(535, 572, 'Limits: small sample, one day only, survey time may not be typical.', 315, { size: 15, fill: C.muted }).svg;
  add('05-sphere-of-influence',
    svg(900, 730, 'Worked example: spheres of influence', s, 'Illustrative survey results'),
    'Three circles centred on a market town show the spheres of influence of a newsagent (furthest customer 4 km), a supermarket (15 km) and a furniture store (55 km), with desire lines to customers’ homes. A table gives mean and furthest distances: newsagent 1.5 and 4 km, supermarket 6 and 15 km, furniture store 22 and 55 km. The furniture store is high-order; the newsagent low-order.',
    'High-order services draw customers from much further away.',
    '## Worked example: measuring a sphere of influence');
}
