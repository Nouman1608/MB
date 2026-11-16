import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-geography-industry';
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

// 01 The industrial system, waste included
{
  let s = card(30, 115, 250, 330, 'Inputs', null, { ts: 20 }) + bullets(50, 182, ['Raw materials or components', 'Energy', 'Labour', 'Capital', 'Land', 'Research and design'], 215, { size: 16.5, gap: 10 }).svg;
  s += card(325, 115, 250, 330, 'Processes', null, { ts: 20, fill: C.cream, edge: C.olive }) + bullets(345, 182, ['Refining, smelting', 'Cutting, mixing', 'Assembling', 'Testing', 'Packaging'], 215, { size: 16.5, gap: 10 }).svg;
  s += factory(400, 432, 1.4);
  s += panel(620, 115, 250, 330) + t(640, 152, 'Outputs', { size: 20, weight: 700 });
  s += rrect(638, 172, 214, 46, C.tealLight, C.tealDark, 2, 10) + t(745, 202, 'Finished products', { size: 16.5, weight: 700, anchor: 'middle' });
  s += rrect(638, 228, 214, 46, C.tealLight, C.tealDark, 2, 10) + t(745, 258, 'By-products', { size: 16.5, weight: 700, anchor: 'middle' });
  s += rrect(638, 284, 214, 46, C.tealLight, C.tealDark, 2, 10) + t(745, 314, 'Profit', { size: 16.5, weight: 700, anchor: 'middle' });
  s += rrect(638, 340, 214, 88, '#f6e6dc', C.rust, 2.5, 10) + t(745, 368, 'Waste', { size: 17, weight: 700, anchor: 'middle', fill: C.rust }) + t(745, 392, 'heat, gases, waste', { size: 15, anchor: 'middle' }) + t(745, 412, 'water, scrap', { size: 15, anchor: 'middle' });
  s += arrow(284, 280, 321, 280, { w: 4 }) + arrow(579, 280, 616, 280, { w: 4 });
  s += path('M745,232 L745,232', {}) + path('M638,307 Q600,307 600,470 L155,470 L155,449', { stroke: C.tealDark, w: 3.5, extra: 'stroke-dasharray="10 7" marker-end="url(#ahT)"' });
  s += tag(380, 476, 'feedback: profit reinvested in machinery, training, expansion', { anchor: 'middle', fill: C.tealDark, size: 15.5, bg: C.bg, op: 1 });
  s += arrow(745, 432, 745, 520, { color: C.rust, w: 4, marker: 'ahR' });
  s += panel(460, 525, 410, 92, '#f6e6dc', C.rust) + t(485, 560, 'Links to 3.7 environmental risks:', { size: 17, weight: 700, fill: C.rust }) + t(485, 588, 'untreated waste water, air emissions, solid waste', { size: 15.5 });
  s += para(55, 560, 'Waste is part of the system, not an afterthought.', 370, { size: 18, weight: 700 }).svg;
  add('01-industrial-system',
    svg(900, 640, 'The industrial system', s),
    'Inputs (raw materials or components, energy, labour, capital, land, research and design) go through processes such as refining, cutting, assembling, testing and packaging. Outputs are finished products, by-products, profit and waste (heat, gases, waste water and scrap). Profit feeds back as reinvestment; waste links to environmental risks such as untreated waste water and air emissions.',
    'Every industrial system outputs waste as well as products.',
    '## The industrial system');
}

// 02 Four types of industry
{
  let s = rrect(30, 115, 840, 400, C.tealLight, C.tealDark, 2.5, 16) + t(55, 152, 'Manufacturing', { size: 23, weight: 700, fill: C.tealDark }) + t(55, 178, 'the broad category: making goods from materials, e.g. steel products, textiles, furniture', { size: 16, fill: C.ink });
  const ty = [
    ['Processing', 'raw material → more useful product', ['Refining crude oil', 'Smelting metal ore', 'Milling grain', 'Refining sugar cane'], C.mustard],
    ['Assembly', 'puts together parts made elsewhere', ['Cars, televisions', 'Mobile phones', 'Needs reliable supply chains and good transport'], C.teal],
    ['High technology', 'based on advanced research', ['Microchips, computers, software', 'Pharmaceuticals, aerospace', 'Needs skilled workers and universities'], C.rust],
  ];
  ty.forEach(([h, sub, items, col], i) => { const x = 50 + i * 270; s += panel(x, 200, 255, 295) + `<rect x="${x}" y="200" width="255" height="12" rx="6" fill="${col}"/>` + t(x + 18, 242, h, { size: 20, weight: 700 }) + para(x + 18, 268, sub, 220, { size: 15.5, fill: C.muted, lh: 20 }).svg + bullets(x + 18, 330, items, 222, { size: 16, gap: 10 }).svg; });
  s += t(450, 548, 'Processing, assembly and high technology are kinds of manufacturing.', { size: 17, anchor: 'middle', fill: C.muted, italic: true });
  add('02-types-of-industry',
    svg(900, 575, 'Four types of industry', s),
    'Manufacturing, making goods from materials, is drawn as the broad category containing three kinds: processing (refining oil, smelting ore, milling grain, refining sugar), assembly (cars, televisions, phones from parts made elsewhere, needing supply chains and transport) and high technology (microchips, software, pharmaceuticals, aerospace, needing skilled workers and universities).',
    'Manufacturing is the umbrella; processing, assembly and high tech sit inside it.',
    '## Four types of industry');
}

// 03 Seven location factors (+ agglomeration)
{
  const cx = 450, cy = 400;
  let s = circ(cx, cy, 78, C.ink, C.ink, 2.5) + t(cx, cy - 4, 'FACTORY', { size: 19, weight: 700, anchor: 'middle', fill: '#ffffff' }) + t(cx, cy + 20, 'or zone', { size: 15, anchor: 'middle', fill: '#ffffff' });
  const f = [
    ['Land', 'flat, cheap, room to expand; greenfield or brownfield', 160, 155],
    ['Labour', 'many low-cost workers, or highly skilled ones', 450, 145],
    ['Raw materials', 'heavy, weight-losing inputs: locate at the source', 740, 155],
    ['Fuel and power', 'national grid makes most industry footloose; smelters seek cheap HEP', 735, 400],
    ['Transport', 'ports (break of bulk), motorways, rail, airports', 740, 640],
    ['Markets', 'bulky, fragile or perishable goods: near customers', 450, 655],
    ['Political', 'grants, tax breaks, export processing zones; trade barriers', 160, 640],
  ];
  f.forEach(([h, b, x, y]) => {
    const dx = x - cx, dy = y - cy, L = Math.hypot(dx, dy);
    s += line(cx + (dx * 82) / L, cy + (dy * 82) / L, x - (dx * 95) / L, y - (dy * 62) / L, { w: 2.5, color: C.muted });
    s += card(x - 130, y - 62, 260, 124, h, b, { ts: 18.5, bs: 15, fill: '#ffffff' });
  });
  s += card(30, 336, 260, 128, 'Agglomeration', 'firms cluster near suppliers and skilled workers; the cluster attracts more', { ts: 18.5, bs: 15, fill: C.cream, edge: C.olive });
  s += line(292, 400, 370, 400, { w: 2.5, color: C.olive, dash: '6 5' });
  add('03-location-factors',
    svg(900, 730, 'What decides where a factory goes?', s),
    'Seven location factors around a factory: land (flat, cheap, room to expand; greenfield or brownfield), labour (low-cost or highly skilled), raw materials (heavy, weight-losing inputs near the source), fuel and power (the national grid makes most industry footloose; smelters seek cheap HEP), transport (ports, motorways, rail, airports), markets (bulky, fragile or perishable goods near customers) and political factors (grants, tax breaks, export processing zones). Agglomeration draws firms to existing clusters.',
    'Each industry weighs the seven factors differently.',
    '## How each location factor works');
}

// 04 Worked example: choosing a sugar refinery site
{
  let s = panel(30, 110, 560, 520) + `<rect x="45" y="125" width="530" height="490" rx="10" fill="#d8e3c6"/>`;
  s += `<path d="M575,125 L575,615 L470,615 Q520,500 500,400 Q485,260 560,125 Z" fill="${C.teal}"/>` + t(540, 590, 'SEA', { size: 16, weight: 700, fill: C.tealDark, anchor: 'middle' });
  for (let r = 0; r < 4; r++) for (let k = 0; k < 6; k++) s += path(`M${70 + k * 22},${165 + r * 26} l-4,-14 M${70 + k * 22},${165 + r * 26} l0,-17 M${70 + k * 22},${165 + r * 26} l4,-14`, { stroke: C.grass, w: 2 });
  s += tag(118, 255, 'cane fields', { size: 16, anchor: 'middle', bg: '#d8e3c6', op: 1 });
  s += rrect(455, 360, 60, 30, '#ffffff', C.ink, 2, 4) + t(485, 410, 'port', { size: 16, weight: 700, anchor: 'middle' });
  s += house(135, 520, 1) + house(175, 535, 1) + house(110, 548, 0.9) + t(150, 590, 'inland city', { size: 16, weight: 700, anchor: 'middle' });
  const site = (x, y, l, col) => circ(x, y, 22, col, C.ink, 3) + t(x, y + 7, l, { size: 20, weight: 700, anchor: 'middle', fill: col === C.mustard ? C.ink : '#ffffff' });
  s += line(230, 200, 470, 370, { dash: '7 6', w: 2 }) + line(320, 360, 470, 380, { dash: '7 6', w: 2 }) + line(260, 520, 460, 390, { dash: '7 6', w: 2 });
  s += site(230, 200, 'A', C.mustard) + site(320, 360, 'B', C.tealDark) + site(260, 520, 'C', C.rust);
  s += tag(300, 255, '120 km to port', { size: 14.5, bg: '#d8e3c6', op: 1, weight: 600 });
  s += tag(260, 206, 'A: 5 km from fields', { size: 15, bg: '#d8e3c6', op: 1 });
  s += tag(320, 405, 'B: 90 km from fields,', { size: 14.5, anchor: 'middle', bg: '#d8e3c6', op: 1 }) + tag(320, 424, '10 km to port', { size: 14.5, anchor: 'middle', bg: '#d8e3c6', op: 1 });
  s += tag(292, 527, 'C: 150 km from both;', { size: 14.5, bg: '#d8e3c6', op: 1 }) + tag(292, 546, 'land expensive', { size: 14.5, bg: '#d8e3c6', op: 1 });
  s += t(310, 650, 'Schematic, not to scale', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  s += card(610, 110, 260, 150, '1  Key factor', 'Cane is bulky, heavy, perishable and loses most of its weight when refined.', { ts: 18, bs: 15.5 });
  s += card(610, 275, 260, 180, '2  Apply to data', 'Site A is 5 km from the fields; only the lighter refined sugar travels 120 km to the port. Land is cheapest.', { ts: 18, bs: 15.5, fill: C.cream, edge: C.olive });
  s += card(610, 470, 260, 160, '3  Reject the rest', 'C is far from fields and port, with expensive land. B is far from the cane.', { ts: 18, bs: 15.5 });
  add('04-choosing-a-site',
    svg(900, 670, 'Worked example: where to build a sugar refinery', s),
    'A schematic plan with cane fields, a port on the coast and an inland city. Site A is 5 km from the fields and 120 km from the port; site B is 90 km from the fields and 10 km from the port; site C is 150 km from both with expensive land. Steps: identify the key factor (bulky, perishable, weight-losing cane), apply it to the data (A is nearest the fields and cheapest), and reject the alternatives.',
    'Find the key factor for this industry, apply it to the data, reject the rest.',
    '## Worked example 1: choosing a site');
}

// 05 Silicon Valley case study
{
  let s = panel(30, 110, 480, 620) + `<rect x="45" y="125" width="450" height="590" rx="10" fill="#d8e3c6"/>`;
  s += `<path d="M150,125 L250,125 Q300,250 330,330 Q360,400 400,430 Q370,445 340,420 Q290,370 250,300 Q200,220 150,125 Z" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2"/>`;
  s += tag(250, 215, 'San Francisco Bay', { size: 15, fill: C.tealDark, anchor: 'middle', bg: C.teal, op: 1 });
  const pl = [[120, 160, 'San Francisco', 'airport'], [210, 360, 'Palo Alto', 'Stanford; HP 1939'], [270, 440, 'Mountain View', 'Google'], [170, 520, 'Cupertino', 'Apple'], [330, 520, 'Santa Clara', 'Intel'], [420, 470, 'San Jose', 'airport']];
  pl.forEach(([x, y, a, b]) => { s += circ(x, y, 7, C.rust, C.ink, 2) + tag(x + 12, y - 4, a, { size: 15.5 }) + tag(x + 12, y + 15, b, { size: 14, weight: 400, fill: C.muted }); });
  s += t(270, 700, 'Schematic, not to scale', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  const fac = [['Labour and research', 'Stanford graduates; skilled workers from around the world'], ['Capital', 'venture-capital firms fund start-ups'], ['Agglomeration', 'ideas and staff move easily between firms'], ['Transport', 'two international airports, motorways; light, high-value goods'], ['Environment', 'pleasant climate attracts workers']];
  s += t(530, 140, 'Why here?', { size: 20, weight: 700, fill: C.tealDark });
  fac.forEach(([a, b], i) => { const y = 156 + i * 86; s += rrect(530, y, 340, 76, '#ffffff', C.panelEdge, 2, 10) + t(546, y + 26, a, { size: 16.5, weight: 700 }) + tl(546, y + 48, wrap(b, 305, 14.5), { size: 14.5, fill: C.muted }, 18); });
  s += rrect(530, 594, 340, 136, '#f6e6dc', C.rust, 2.5, 12) + t(546, 624, 'Problems', { size: 17, weight: 700, fill: C.rust }) + tl(546, 650, ['Some of the highest housing costs in', 'the USA; traffic congestion; inequality', 'between highly paid tech workers and', 'lower-paid service workers'], { size: 14.5 }, 19);
  add('05-silicon-valley',
    svg(900, 750, 'Case study: Silicon Valley, California', s),
    'A schematic plan of the southern San Francisco Bay showing Palo Alto (Stanford University, Hewlett-Packard 1939), Mountain View (Google), Cupertino (Apple), Santa Clara (Intel), San Jose and San Francisco with airports. Reasons for the location: labour and research, venture capital, agglomeration, transport and a pleasant climate. Problems: very high housing costs, traffic congestion and inequality.',
    'A high-tech cluster grows from skilled people, capital and agglomeration.',
    '## Worked example 2: an industrial zone case study — Silicon Valley, California');
}
