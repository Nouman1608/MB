import { C, svg, panel, t as t0, tl as tl0, arrow, path, badge as badge0 } from '../style.mjs';

// house minimum text size is 15: clamp every label drawn in this file
const MIN = 15;
const t = (x, y, s, o = {}) => t0(x, y, s, { ...o, size: Math.max(MIN, o.size || 18) });
const tl = (x, y, lines, opts = {}, lh = Math.max(MIN, opts.size || 18) * 1.3) => lines.map((s, i) => t(x, y + i * lh, s, opts)).join('');
const badge = (cx, cy, r, label, fill = C.mustard) => { const sz = Math.max(MIN, r); return `<circle cx="${cx}" cy="${cy}" r="${Math.max(r, sz * 0.85)}" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + t(cx, cy + sz * 0.36, label, { size: sz, weight: 700, anchor: 'middle' }); };

export const slug = 'cambridge-o-level-geography-food-production';
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

// 01 The farm as a system
{
  let s = card(30, 115, 270, 190, 'Physical inputs', null, { fill: C.cream, edge: C.olive, ts: 19 }) + bullets(48, 178, ['Relief: gradient, altitude', 'Climate: temperature, rainfall, growing season', 'Soil: fertility, depth, drainage'], 240, { size: 15.5, gap: 6 }).svg;
  s += card(30, 318, 270, 232, 'Human inputs', null, { fill: C.tealLight, edge: C.tealDark, ts: 19 }) + bullets(48, 378, ['Labour, capital, machinery', 'Seeds, fertiliser, pesticides', 'Irrigation', 'Markets and transport', 'Government policy', 'Land ownership, tradition'], 240, { size: 15.5, gap: 6 }).svg;
  s += card(335, 115, 230, 435, 'Processes', null, { ts: 19 }) + bullets(353, 178, ['Ploughing', 'Sowing', 'Transplanting', 'Weeding', 'Spraying', 'Irrigating', 'Harvesting', 'Milking', 'Rearing animals'], 200, { size: 15.5, gap: 8 }).svg;
  s += card(600, 115, 270, 435, 'Outputs', null, { ts: 19 }) + bullets(618, 178, ['Crops, meat, milk, wool, eggs', 'Income, or food for the family', 'By-products: straw, manure'], 240, { size: 15.5, gap: 10 }).svg;
  s += arrow(303, 210, 331, 280, { w: 3.5 }) + arrow(303, 430, 331, 340, { w: 3.5 }) + arrow(568, 330, 596, 330, { w: 3.5 });
  s += path('M735,552 L735,585 L165,585 L165,556', { stroke: C.tealDark, w: 3.5, extra: 'stroke-dasharray="10 7" marker-end="url(#ahT)"' });
  s += tag(450, 591, 'feedback: profit reinvested, manure returned to fields', { anchor: 'middle', fill: C.tealDark, size: 15.5, bg: C.bg, op: 1 });
  s += panel(30, 618, 840, 76, C.cream, C.olive) + t(450, 650, 'Physical inputs set the limits of what can be farmed;', { size: 17.5, weight: 700, anchor: 'middle' }) + t(450, 676, 'human inputs decide how intensively, and for whom.', { size: 17.5, anchor: 'middle' });
  add('01-farm-system',
    svg(900, 715, 'The farm as a system', s),
    'A systems diagram. Physical inputs (relief, climate, soil) and human inputs (labour, capital, machinery, seeds, fertiliser, irrigation, markets, policy, land ownership) feed processes such as ploughing, sowing, transplanting, weeding, harvesting and milking. Outputs are crops and animal products, income or family food, and by-products. A feedback arrow returns profit and manure to the inputs.',
    'Physical inputs set the limits; human inputs decide how intensively and for whom.',
    '## The farm as a system');
}

// 02 Classifying farming on three scales
{
  const farms = [
    ['Wet rice, family plots, river delta', ['Intensive', 'Subsistence', 'Arable']],
    ['Cattle station, dry grassland', ['Extensive', 'Commercial', 'Pastoral']],
    ['Glasshouse tomatoes near a city', ['Intensive', 'Commercial', 'Arable']],
    ['Nomadic herding, semi-arid region', ['Extensive', 'Subsistence', 'Pastoral']],
  ];
  const fill = { Intensive: C.tealDark, Extensive: C.tealLight, Commercial: C.mustard, Subsistence: C.cream, Arable: '#a9c48f', Pastoral: C.rock };
  const heads = [['Intensive or extensive?', 'inputs and output per hectare'], ['Commercial or subsistence?', 'sold, or feeds the family'], ['Arable, pastoral or mixed?', 'crops, animals or both']];
  let s = '';
  heads.forEach(([a, b], i) => { const x = 315 + i * 182; s += t(x + 80, 128, a.split(' or ')[0] + ' or', { size: 15.5, weight: 700, anchor: 'middle' }) + t(x + 80, 148, a.split(' or ').slice(1).join(' or '), { size: 15.5, weight: 700, anchor: 'middle' }) + t(x + 80, 170, b, { size: 14, anchor: 'middle', fill: C.muted }); });
  farms.forEach(([f, tags], j) => {
    const y = 190 + j * 98;
    s += panel(30, y, 840, 84) + tl(52, y + 36, wrap(f, 260, 17, true), { size: 17, weight: 700 }, 22);
    tags.forEach((tg, i) => { const x = 315 + i * 182; s += rrect(x, y + 20, 160, 44, fill[tg], C.ink, 2, 22) + t(x + 80, y + 48, tg, { size: 17, weight: 700, anchor: 'middle', fill: tg === 'Intensive' ? '#ffffff' : C.ink }); });
  });
  s += panel(30, 590, 840, 70, C.cream, C.olive) + t(450, 632, 'Always classify on all three scales, never just “arable”.', { size: 18, weight: 700, anchor: 'middle' });
  add('02-classifying-farms',
    svg(900, 680, 'Classifying a farm: three questions', s),
    'Four farms classified on three scales. Wet rice on family plots in a delta: intensive, subsistence, arable. A cattle station in dry grassland: extensive, commercial, pastoral. Glasshouse tomatoes near a city: intensive, commercial, arable. Nomadic herding in a semi-arid region: extensive, subsistence, pastoral.',
    'A full classification answers all three questions.',
    '## Classifying farming');
}

// 03 Wet rice in the Ganges-Brahmaputra delta
{
  const G = 400;
  let s = panel(30, 110, 840, 400) + `<rect x="45" y="125" width="810" height="${G - 125}" rx="10" fill="${C.tealLight}"/>`;
  s += cloud(260, 180, 0.9, '#9aa6b2') + cloud(560, 170, 0.75, '#9aa6b2') + rain(205, 205, 7, 18, 34) + rain(520, 192, 5, 18, 34);
  s += tag(680, 160, 'Summer monsoon', { size: 17, fill: C.blue }) + tag(680, 182, 'about June–September', { size: 15, weight: 400 });
  s += `<rect x="45" y="${G}" width="810" height="95" fill="#b9ab88"/>` + tag(450, G + 72, 'fertile alluvium; clay holds the water', { size: 16, anchor: 'middle', bg: '#b9ab88', op: 1, fill: '#ffffff' });
  for (let i = 0; i < 4; i++) {
    const x = 60 + i * 175;
    s += `<rect x="${x}" y="${G - 22}" width="150" height="22" fill="${C.teal}"/>`;
    s += `<path d="M${x + 150},${G} Q${x + 162},${G - 34} ${x + 175},${G}" fill="#b9ab88" stroke="${C.ink}" stroke-width="2"/>`;
    for (let k = 0; k < 6; k++) s += path(`M${x + 14 + k * 24},${G - 8} l-5,-22 M${x + 14 + k * 24},${G - 8} l0,-26 M${x + 14 + k * 24},${G - 8} l5,-22`, { stroke: C.grass, w: 2.2 });
  }
  s += line(45, G, 855, G, { w: 2.5 }) + person(790, G - 22, 1.1, C.olive);
  s += tag(222, G - 56, 'bund', { size: 15 }) + line(237, G - 50, 230, G - 26, { w: 1.6 }) + tag(90, G - 60, 'flooded paddy', { size: 15, fill: C.tealDark });
  s += tag(60, 140, 'Flat, low-lying delta; high temperatures all year', { size: 16 });
  const sys = [['Inputs', 'family labour, draught animals or power tillers, seed, fertiliser, well or canal water'], ['Processes', 'nursery bed → transplant by hand → weed, manage water → harvest, thresh'], ['Outputs', 'rice for the family, surplus sold locally; straw; second crop where irrigated']];
  sys.forEach(([a, b], i) => { s += card(30 + i * 286, 530, 268, 140, a, b, { ts: 18.5, bs: 15.5, fill: i === 1 ? C.cream : '#ffffff', edge: i === 1 ? C.olive : C.panelEdge }); if (i < 2) s += arrow(300 + i * 286, 600, 314 + i * 286, 600, { w: 3 }); });
  s += panel(30, 690, 840, 66, C.tealLight, C.tealDark) + t(450, 730, 'Intensive: lots of labour on small plots gives high yields to feed a dense population.', { size: 17, weight: 700, anchor: 'middle' });
  add('03-wet-rice-bangladesh',
    svg(900, 776, 'Case study: wet rice in the Ganges–Brahmaputra delta', s),
    'A cross-section of flat delta land: monsoon rain about June to September floods paddy fields held in by low earth bunds over fertile alluvium with clay that holds water. Below, the system: inputs of family labour, draught animals or power tillers, seed, fertiliser and irrigation water; processes from nursery bed to hand transplanting, weeding and harvesting; outputs of rice, straw and sometimes a second crop.',
    'Heavy labour on small, flooded plots makes wet rice intensive subsistence farming.',
    '## Case study 1: wet rice in the Ganges–Brahmaputra delta, Bangladesh');
}

// 04 Causes of food shortages
{
  let s = card(30, 115, 410, 380, 'Natural', null, { fill: C.tealLight, edge: C.tealDark, ts: 21, tfill: C.tealDark });
  [['Drought', 'crops fail; animals die'], ['Floods and tropical storms', 'crops destroyed, soil washed away'], ['Pests and diseases', 'e.g. desert locusts strip crops']].forEach(([a, b], i) => { s += card(50, 170 + i * 104, 370, 90, a, b, { ts: 17.5, bs: 15.5 }); });
  s += card(460, 115, 410, 380, 'Economic and political', null, { fill: '#f6e6dc', edge: C.rust, ts: 21, tfill: C.rust });
  [['Low capital investment', 'no fertiliser, seed, irrigation, storage'], ['Poor transport, distribution', 'food cannot reach areas of need'], ['Conflict', 'farmers flee; markets close; aid blocked'], ['Other human factors', 'rising population, degraded land, cash crops']].forEach(([a, b], i) => { s += card(480, 165 + i * 80, 370, 72, a, b, { ts: 16.5, bs: 15, pad: 14 }); });
  s += arrow(235, 500, 360, 540, { w: 4 }) + arrow(665, 500, 540, 540, { w: 4 });
  s += rrect(250, 545, 400, 60, C.ink, C.ink, 2.5, 14) + t(450, 584, 'FOOD SHORTAGE', { size: 22, weight: 700, anchor: 'middle', fill: '#ffffff' });
  s += t(450, 640, '“Lack of food” is the result, not a cause.', { size: 17, anchor: 'middle', fill: C.muted, italic: true });
  add('04-food-shortage-causes',
    svg(900, 665, 'Why food runs short', s),
    'Two groups of causes lead to food shortage. Natural: drought, floods and tropical storms, and pests and diseases such as desert locusts. Economic and political: low capital investment, poor transport and distribution, conflict, and other human factors such as population growth, land degradation and land used for cash crops.',
    'Natural shocks and human failures combine; “lack of food” is never a cause.',
    '## Food shortages: causes');
}

// 05 Effects: a downward spiral
{
  const cx = 300, cy = 370, R = 165;
  const nodes = [['Food shortage', -90, C.ink], ['Undernutrition and malnutrition', 0, C.rust], ['Lower resistance to disease; less energy to work', 90, C.rust], ['Output falls further', 180, C.rust]];
  let s = panel(30, 110, 840, 540);
  s += `<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="${C.rust}" stroke-width="3" stroke-dasharray="10 8"/>`;
  [-45, 45, 135, 225].forEach((a) => { const r = (a * Math.PI) / 180, r2 = ((a + 8) * Math.PI) / 180; s += arrow(cx + R * Math.cos(r), cy + R * Math.sin(r), cx + R * Math.cos(r2), cy + R * Math.sin(r2), { color: C.rust, w: 3, marker: 'ahR' }); });
  nodes.forEach(([lbl, a, col], i) => { const r = (a * Math.PI) / 180, x = cx + R * Math.cos(r), y = cy + R * Math.sin(r); const ls = wrap(lbl, 170, 16, true); const h = ls.length * 21 + 24; s += rrect(x - 100, y - h / 2, 200, h, i === 0 ? C.ink : '#ffffff', col, 2.5, 12) + tl(x, y - h / 2 + 28, ls, { size: 16, weight: 700, anchor: 'middle', fill: i === 0 ? '#ffffff' : C.ink }, 21); });
  s += t(cx, cy - 6, 'a downward', { size: 17, anchor: 'middle', fill: C.muted, italic: true }) + t(cx, cy + 16, 'spiral', { size: 17, anchor: 'middle', fill: C.muted, italic: true });
  s += t(600, 150, 'Wider effects', { size: 20, weight: 700 });
  s += t(600, 174, 'from individuals to whole countries', { size: 15, fill: C.muted, italic: true });
  ['Stunted growth in children', 'Children leave school', 'Migration to towns or camps', 'Dependence on food aid', 'Famine: widespread deaths'].forEach((a, i) => { const y = 196 + i * 86; s += rrect(600, y, 250, 70, i === 4 ? '#f6e6dc' : C.cream, i === 4 ? C.rust : C.olive, 2.5, 12) + t(725, y + 41, a, { size: 16, weight: 700, anchor: 'middle' }); });
  add('05-food-shortage-effects',
    svg(900, 670, 'Effects of food shortage', s),
    'A loop: food shortage leads to undernutrition and malnutrition, which lower resistance to disease and leave less energy to work, so output falls further and the shortage deepens. Beside it, wider effects from individual to country: stunted growth in children, children leaving school, migration to towns or camps, dependence on food aid and, in extreme cases, famine.',
    'Hunger lowers the output that would end the hunger.',
    '## Food shortages: effects');
}

// 06 South Sudan
{
  let s = line(80, 160, 820, 160, { w: 4 });
  [[100, '2011', 'independence'], [430, 'late 2013', 'civil war begins'], [790, 'February 2017', 'famine declared, Unity State']].forEach(([x, a, b], i) => { s += circ(x, 160, 11, i === 2 ? C.rust : C.mustard, C.ink, 2.5) + t(x, 132, a, { size: 18, weight: 700, anchor: i === 0 ? 'start' : i === 2 ? 'end' : 'middle' }) + t(x, 196, b, { size: 15.5, anchor: i === 0 ? 'start' : i === 2 ? 'end' : 'middle', fill: C.muted }); });
  const causes = [['Conflict', 'farmers driven off land; harvests disrupted; markets closed; aid unsafe'], ['Economic collapse', 'rising food prices; families cannot buy food'], ['Poor infrastructure', 'few all-weather roads; areas cut off in the rainy season'], ['Climatic shocks', 'drought and floods add pressure']];
  causes.forEach(([a, b], i) => { const x = 30 + i * 213; s += card(x, 230, 201, 158, a, b, { ts: 18, bs: 15.5, edge: i === 0 ? C.rust : C.panelEdge, fill: i === 0 ? '#f6e6dc' : '#ffffff' }); s += arrow(x + 100, 392, 450 + (x + 100 - 450) * 0.25, 424, { w: 3 }); });
  s += rrect(260, 428, 380, 56, C.ink, C.ink, 2.5, 14) + t(450, 464, 'Causes combine → famine', { size: 20, weight: 700, anchor: 'middle', fill: '#ffffff' });
  s += arrow(450, 488, 450, 516, { w: 3.5 });
  [['Severe malnutrition'], ['Very many displaced', 'within the country and abroad'], ['Heavy reliance on', 'international food aid']].forEach((ls, i) => { const x = 30 + i * 286; s += rrect(x, 520, 268, 82, C.tealLight, C.tealDark, 2.5, 12) + tl(x + 134, 552 + (ls.length === 1 ? 10 : 0), ls, { size: 16.5, weight: 700, anchor: 'middle' }, 22); });
  add('06-south-sudan',
    svg(900, 625, 'Case study: food shortage in South Sudan', s),
    'A timeline: independence in 2011, civil war from late 2013 and famine declared in parts of Unity State in February 2017. Four causes combine: conflict, economic collapse with rising prices, poor infrastructure with few all-weather roads, and climatic shocks. Effects: severe malnutrition, very large numbers displaced, and heavy reliance on international food aid.',
    'Conflict was the trigger, but four causes combined to cause famine.',
    '## Case study 2: South Sudan');
}

// 07 Solutions: relief and long-term output
{
  let s = card(30, 115, 410, 280, 'Short term: relief', null, { fill: '#f6e6dc', edge: C.rust, ts: 21, tfill: C.rust }) + bullets(55, 186, ['Emergency food aid', 'Therapeutic feeding for malnourished children', 'Cash transfers so families can buy food', 'Early-warning systems for drought'], 370, { size: 17, gap: 16 }).svg;
  s += card(460, 115, 410, 280, 'Long term: more output', null, { fill: C.tealLight, edge: C.tealDark, ts: 21, tfill: C.tealDark }) + bullets(485, 186, ['Irrigation schemes and small dams', 'High-yielding, drought-resistant seed with fertiliser (Green Revolution)', 'Appropriate technology: hand pumps, terracing, better grain stores', 'Roads, markets, pest control, peace'], 370, { size: 17, gap: 16 }).svg;
  s += t(450, 442, 'Evaluate each one', { size: 21, weight: 700, anchor: 'middle' });
  [['Food aid', 'saves lives', 'does not raise output; can undercut local farmers'], ['Green Revolution seeds', 'raise yields', 'need costly fertiliser and water'], ['Appropriate technology', 'cheap, locally maintained', 'works on a small scale']].forEach(([a, p, n], i) => { const x = 30 + i * 286; s += panel(x, 462, 268, 140) + t(x + 18, 496, a, { size: 18, weight: 700 }) + t(x + 18, 528, '+ ' + p, { size: 16, weight: 600, fill: C.tealDark }) + tl(x + 18, 558, wrap('– ' + n, 236, 16), { size: 16, weight: 600, fill: C.rust }, 21); });
  add('07-food-solutions',
    svg(900, 625, 'Solving food shortages', s),
    'Short-term relief: emergency food aid, therapeutic feeding, cash transfers and early-warning systems. Long-term ways to raise output: irrigation and small dams, high-yielding drought-resistant seed with fertiliser, appropriate technology such as hand pumps, terracing and grain stores, and better roads, markets, pest control and peace. Evaluation: food aid saves lives but does not raise output; Green Revolution seeds raise yields but need fertiliser and water; appropriate technology is cheap but small in scale.',
    'Relief saves lives now; only long-term change raises output.',
    '## Solutions');
}
