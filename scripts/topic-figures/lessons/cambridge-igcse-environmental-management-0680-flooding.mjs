// Topic figures for cambridge-igcse-environmental-management-0680-flooding
import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

// ---- local helpers (kept inside this lesson file on purpose) ----
const esc = (s) => String(s).replace(/&(?![a-z#0-9]+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const tw = (s, size, weight = 400) => String(s).replace(/&[a-z#0-9]+;/g, 'x').length * size * (weight >= 600 ? 0.575 : 0.535);
const wrap = (s, size, width, weight = 400) => {
  const lines = [''];
  for (const w of String(s).split(' ')) {
    const cur = lines[lines.length - 1];
    const cand = cur ? cur + ' ' + w : w;
    if (cur && tw(cand, size, weight) > width) lines.push(w); else lines[lines.length - 1] = cand;
  }
  return lines;
};
// wrapped paragraph; returns svg string. ph() gives its height.
const para = (x, y, s, width, o = {}) => {
  const size = o.size || 17, lh = o.lh || Math.round(size * 1.32);
  return tl(x, y, wrap(s, size, width, o.weight).map(esc), { ...o, size }, lh);
};
const ph = (s, width, o = {}) => { const size = o.size || 17, lh = o.lh || Math.round(size * 1.32); return wrap(s, size, width, o.weight).length * lh; };
// card: optional title + body text (string, or array of strings = separate paragraphs/bullets)
const cardLayout = (w, o) => {
  const pad = o.pad ?? 18, ts = o.tsize || 20, bs = o.bsize || 17, inner = w - 2 * pad;
  const tLines = o.title ? wrap(o.title, ts, inner, 700) : [];
  const body = o.body == null ? [] : Array.isArray(o.body) ? o.body : [o.body];
  const blh = Math.round(bs * 1.32), tlh = Math.round(ts * 1.25);
  const bLines = body.map((b) => wrap((o.bullet ? '• ' : '') + b, bs, inner - (o.bullet ? 0 : 0), o.bweight));
  const contentH = tLines.length * tlh + (tLines.length && body.length ? 8 : 0) + bLines.reduce((a, l) => a + l.length * blh, 0) + Math.max(0, body.length - 1) * (o.gap ?? 6);
  return { pad, ts, bs, inner, tLines, bLines, blh, tlh, contentH, h: contentH + 2 * pad - 4 + (o.top || 0) };
};
const cardH = (w, o) => cardLayout(w, o).h;
const card = (x, y, w, o = {}) => {
  const L = cardLayout(w, o);
  const h = o.h || L.h;
  const anchor = o.center ? 'middle' : 'start';
  const tx = o.center ? x + w / 2 : x + L.pad;
  let yy = y + (o.top || 0) + L.pad + L.ts * 0.78 + (o.vcenter === false ? 0 : (h - L.h) / 2);
  if (!o.title) yy = yy - L.ts * 0.78 + L.bs * 0.78;
  let s = o.noBox ? '' : `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 12}" fill="${o.fill || C.panel}" stroke="${o.edge || C.panelEdge}" stroke-width="${o.ew ?? 2.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
  L.tLines.forEach((ln) => { s += t(tx, yy, esc(ln), { size: L.ts, weight: 700, fill: o.tfill || C.ink, anchor }); yy += L.tlh; });
  if (L.tLines.length && L.bLines.length) yy += 8;
  L.bLines.forEach((lines, i) => { lines.forEach((ln) => { s += t(tx, yy, esc(ln), { size: L.bs, fill: o.bfill || C.ink, anchor, weight: o.bweight || 400 }); yy += L.blh; }); yy += o.gap ?? 6; });
  return s;
};
// rounded tag sized to its text
const tag = (x, y, s, o = {}) => {
  const size = o.size || 16, w = tw(s, size, o.weight || 600) + 24, h = size + 14;
  const x0 = o.anchor === 'middle' ? x - w / 2 : o.anchor === 'end' ? x - w : x;
  return `<rect x="${x0}" y="${y - h / 2}" width="${w}" height="${h}" rx="${h / 2}" fill="${o.fill || C.cream}" stroke="${o.edge || C.olive}" stroke-width="2"/>` + t(x0 + w / 2, y + size * 0.36, esc(s), { size, weight: o.weight || 600, anchor: 'middle', fill: o.color || C.ink });
};
// curved arrow (quadratic)
const carrow = (x1, y1, cx, cy, x2, y2, { color = C.ink, w = 3.5, marker = 'ah', dash = '' } = {}) =>
  `<path d="M${x1},${y1} Q${cx},${cy} ${x2},${y2}" fill="none" stroke="${color}" stroke-width="${w}" marker-end="url(#${marker})"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
// poly-line arrow through points
const parrow = (pts, { color = C.ink, w = 3.5, marker = 'ah', dash = '' } = {}) =>
  `<polyline points="${pts.map((p) => p.join(',')).join(' ')}" fill="none" stroke="${color}" stroke-width="${w}" stroke-linejoin="round" marker-end="url(#${marker})"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const notToScale = (x, y, anchor = 'end') => t(x, y, 'Not to scale', { size: 15, italic: true, fill: C.muted, anchor });
// simple chart frame: returns {svg, X, Y}
const chart = (x0, y0, w, h, { xmin, xmax, ymin, ymax, xticks, yticks, xlabel, ylabel, xfmt = (v) => v, yfmt = (v) => v, grid = true }) => {
  const X = (v) => x0 + ((v - xmin) / (xmax - xmin)) * w;
  const Y = (v) => y0 + h - ((v - ymin) / (ymax - ymin)) * h;
  let s = `<rect x="${x0}" y="${y0}" width="${w}" height="${h}" fill="${C.panel}"/>`;
  for (const v of yticks) s += (grid ? `<line x1="${x0}" y1="${Y(v)}" x2="${x0 + w}" y2="${Y(v)}" stroke="${C.panelEdge}" stroke-width="1.5"/>` : '') + `<line x1="${x0 - 7}" y1="${Y(v)}" x2="${x0}" y2="${Y(v)}" stroke="${C.ink}" stroke-width="2"/>` + t(x0 - 12, Y(v) + 6, yfmt(v), { size: 16, anchor: 'end' });
  for (const v of xticks) s += `<line x1="${X(v)}" y1="${y0 + h}" x2="${X(v)}" y2="${y0 + h + 7}" stroke="${C.ink}" stroke-width="2"/>` + t(X(v), y0 + h + 28, xfmt(v), { size: 16, anchor: 'middle' });
  s += `<path d="M${x0},${y0} L${x0},${y0 + h} L${x0 + w},${y0 + h}" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`;
  if (xlabel) s += t(x0 + w / 2, y0 + h + 60, esc(xlabel), { size: 17, weight: 600, anchor: 'middle' });
  if (ylabel) s += `<text x="0" y="0" transform="translate(${x0 - 62},${y0 + h / 2}) rotate(-90)" font-size="17" font-weight="600" fill="${C.ink}" text-anchor="middle">${esc(ylabel)}</text>`;
  return { svg: s, X, Y };
};
const dot = (x, y, r = 7, fill = C.tealDark) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>`;
const line = (x1, y1, x2, y2, color = C.ink, w = 2.5, dash = '') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const rect = (x, y, w, h, fill, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 0}" fill="${fill}"${o.stroke ? ` stroke="${o.stroke}" stroke-width="${o.sw ?? 2.5}"` : ''}${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}${o.op ? ` opacity="${o.op}"` : ''}/>`;
const tree = (x, y, s = 1) => `<rect x="${x - 4 * s}" y="${y - 22 * s}" width="${8 * s}" height="${22 * s}" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/><circle cx="${x}" cy="${y - 38 * s}" r="${22 * s}" fill="${C.grass}" stroke="${C.ink}" stroke-width="2.5"/>`;
const cloud = (cx, cy, w, h, fill = C.tealLight) => {
  const rx = w / 2, ry = h / 2;
  return `<path d="M${cx - rx},${cy + ry} Q${cx - rx - ry * 0.9},${cy + ry} ${cx - rx},${cy} Q${cx - rx + 5},${cy - ry * 1.2} ${cx - rx * 0.45},${cy - ry * 0.85} Q${cx - rx * 0.2},${cy - ry * 1.9} ${cx + rx * 0.25},${cy - ry * 1.1} Q${cx + rx * 0.75},${cy - ry * 1.6} ${cx + rx * 0.85},${cy - ry * 0.3} Q${cx + rx + ry * 0.9},${cy - ry * 0.2} ${cx + rx},${cy + ry} Z" fill="${fill}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
};

export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

export const slug = 'cambridge-igcse-environmental-management-0680-flooding';

// 01 How water reaches a river
{
  const G = (x) => 300 + (x - 30) * 0.22; // sloping ground
  let s = panel(30, 110, 840, 470);
  const g7 = G(700);
  const gp = `M32,${G(32)} L700,${g7} L730,${g7 + 46} L820,${g7 + 46} L850,${g7} L868,${g7} L868,578 L32,578 Z`;
  s += `<path d="${gp}" fill="${C.cream}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  s += `<path d="M708,${g7 + 12} L842,${g7 + 12} L820,${g7 + 46} L730,${g7 + 46} Z" fill="${C.teal}"/>` + t(775, g7 + 76, 'river channel', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += tree(110, G(110), 1.1) + tree(170, G(170), 0.9);
  for (let i = 0; i < 14; i++) { const x = 80 + i * 40, y = 140 + (i % 3) * 18; s += line(x, y, x - 6, y + 24, C.blue, 3); }
  s += t(54, 140, 'rain', { size: 17, weight: 700, fill: C.blue });
  s += t(140, G(140) - 90, 'interception', { size: 16, weight: 700, anchor: 'middle', fill: C.grass });
  s += carrow(350, G(350) - 6, 520, G(520) - 30, 690, G(690) - 6, { w: 6, color: C.rust, marker: 'ahR' }) + t(520, G(520) - 40, 'surface run-off: fast', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  s += arrow(300, G(300) + 4, 300, G(300) + 60, { w: 4, color: C.blue }) + t(312, G(300) + 50, 'infiltration', { size: 16, weight: 700, fill: C.blue });
  s += parrow([[340, G(300) + 90], [722, g7 + 40]], { w: 3.5, color: C.blue, dash: '8 6' }) + t(520, G(520) + 110, 'water in the soil moves slowly', { size: 16, anchor: 'middle', fill: C.blue });
  s += notToScale(858, 568);
  const k = 'Most causes of flooding work by increasing run-off or by reducing the space for water in the channel.';
  s += card(30, 600, 840, { body: k, bsize: 17, bweight: 600, fill: C.cream, edge: C.olive, center: true });
  add('01-water-to-river',
    svg(900, 600 + cardH(840, { body: k, bsize: 17, bweight: 600 }) + 30, 'How rain reaches a river', s),
    'Cross-section of a slope down to a river. Rain is intercepted by trees, infiltrates into the soil and moves slowly through it, or flows quickly over the surface as run-off into the river channel.',
    'Run-off reaches rivers quickly; infiltrated water moves slowly.',
    '## How water reaches a river');
}

// 02 Causes sorted by how they work
{
  const groups = [
    ['More run-off, faster', C.rust, ['Steep slopes (relief)', 'Saturated soil', 'Compacted soil', 'Deforestation', 'Ploughing, overgrazing, field drains', 'Urbanisation: concrete, roofs, drains', 'More intense rainstorms']],
    ['Less space in the channel', C.blue, ['Soil erosion: silt makes it shallower']],
    ['Water collects', C.olive, ['Low-lying, flat land drains slowly']],
    ['Sea water floods the coast', C.tealDark, ['Sea-level rise', 'Storm surges', 'Tsunamis']],
  ];
  let s = '';
  const colX = [30, 465];
  const ys = [110, 110];
  groups.forEach(([head, col, items], i) => {
    const c = i === 0 ? 0 : 1, x = colX[c], w = 405;
    const h = 56 + items.length * 40 + 6;
    s += rect(x, ys[c], w, h, C.panel, { stroke: col, sw: 3, rx: 14 }) + t(x + 20, ys[c] + 36, head, { size: 20, weight: 700, fill: col });
    items.forEach((it, j) => { s += tag(x + 20, ys[c] + 76 + j * 40, it, { size: 16, fill: C.panel, edge: col }); });
    ys[c] += h + 16;
  });
  const H = Math.max(...ys);
  add('02-causes-by-mechanism',
    svg(900, H + 14, 'Causes of flooding: how each one works', s),
    'Causes of flooding sorted by how they work. More and faster run-off: steep slopes, saturated or compacted soil, deforestation, farming practices, urbanisation and more intense rainstorms. Less channel space: soil erosion. Water collecting: low-lying flat land. Coastal flooding by sea water: sea-level rise, storm surges and tsunamis.',
    'Link each cause to run-off, channel capacity or the sea.',
    '## Causes of flooding (6.3.1)');
}

// 03 Management by stage
{
  const cols = [
    ['Before', C.tealLight, C.tealDark, [['Monitoring and warning', 'gauges, radar, forecasts; little warning for flash floods'], ['Land use zoning', 'keep homes and hospitals off the floodplain'], ['Structure of buildings', 'raised floors, stilts, high sockets, door barriers'], ['Disaster preparation', 'plans, drills, sandbags, boats']]],
    ['During', C.cream, C.olive, [['Evacuation', 'people and livestock to higher ground']]],
    ['After', C.rock, C.ink, [['Rebuilding', 'ideally to flood-resistant standards'], ['International aid', 'money, food, clean water, medical teams']]],
  ];
  const cw = 270, gx = 15;
  let s = rect(30, 120, 840, 40, C.panel, { stroke: C.panelEdge, rx: 20 });
  cols.forEach(([head, , edge], i) => { s += t(30 + i * (cw + gx) + cw / 2, 147, head, { size: 20, weight: 700, anchor: 'middle', fill: edge }); });
  const ch = (it, w = cw) => cardH(w, { title: it[0], body: it[1], tsize: 18, bsize: 15, pad: 14 });
  const sh = ['Shelters (during and after)', 'safe buildings above flood level with food, water and medical care'];
  const shy = 180 + ch(cols[1][3][0]) + 12, shH = ch(sh, 2 * cw + gx);
  s += card(30 + cw + gx, shy, 2 * cw + gx, { title: sh[0], body: sh[1], tsize: 18, bsize: 15, pad: 14, fill: C.panel, edge: C.olive, dash: '8 6' });
  let maxY = 0;
  cols.forEach(([, fill, edge, items], i) => {
    const x = 30 + i * (cw + gx); let y = i === 2 ? shy + shH + 12 : 180;
    items.forEach((it) => { const h = ch(it); s += card(x, y, cw, { title: it[0], body: it[1], tsize: 18, bsize: 15, pad: 14, h, fill, edge }); y += h + 12; });
    maxY = Math.max(maxY, y);
  });
  add('03-management-stages',
    svg(900, maxY + 20, 'Managing flood impacts by stage', s),
    'Strategies arranged before, during and after a flood. Before: monitoring and warning, land use zoning, the structure of buildings and disaster preparation. During: evacuation. During and after: shelters. After: rebuilding and international aid.',
    'Eight strategies, sorted by when they act.',
    '## Managing the impacts (6.3.3)');
}

// 04 Land use zoning on a floodplain
{
  let s = panel(30, 110, 840, 400);
  const prof = `M32,230 L160,250 L230,360 L390,372 L420,400 L480,400 L510,372 L670,360 L740,250 L868,230 L868,508 L32,508 Z`;
  s += `<path d="${prof}" fill="${C.cream}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  s += `<path d="M420,400 L480,400 L510,372 L390,372 Z" fill="${C.teal}"/>` + line(250, 340, 650, 340, C.blue, 2.5, '10 7') + t(450, 330, 'flood level', { size: 15, weight: 700, anchor: 'middle', fill: C.blue });
  s += t(450, 430, 'river', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
  const house = (x, y) => rect(x, y - 26, 30, 26, C.panel, { stroke: C.ink, sw: 2 }) + `<path d="M${x - 3},${y - 26} L${x + 15},${y - 40} L${x + 33},${y - 26} Z" fill="${C.rust}" stroke="${C.ink}" stroke-width="2"/>`;
  s += house(60, 236) + house(110, 242) + house(770, 242) + rect(810, 200, 50, 36, C.panel, { stroke: C.ink, sw: 2 }) + t(835, 224, 'H', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  s += [260, 300, 340].map((x) => tree(x, 364, 0.6)).join('') + rect(560, 352, 90, 8, C.grass) + line(600, 352, 600, 330, C.ink, 2) + `<path d="M600,330 l14,5 -14,5 z" fill="${C.rust}"/>`;
  s += t(300, 400, 'parks', { size: 15, weight: 600, anchor: 'middle' }) + t(605, 392, 'playing fields', { size: 15, weight: 600, anchor: 'middle' });
  s += t(100, 290, 'homes on', { size: 16, weight: 700, anchor: 'middle' }) + t(100, 310, 'higher ground', { size: 16, weight: 700, anchor: 'middle' }) + t(800, 290, 'schools and', { size: 16, weight: 700, anchor: 'middle' }) + t(800, 310, 'hospitals', { size: 16, weight: 700, anchor: 'middle' });
  s += path('M240,170 L240,190 L660,190 L660,170', { w: 3, stroke: C.tealDark }) + t(450, 160, 'floodplain: farmland or recreation, no homes', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += notToScale(858, 498);
  s += card(30, 530, 410, { title: 'Benefit', body: 'keeps people and valuable buildings out of danger at low cost; the land is still used', tsize: 18, bsize: 16, fill: C.tealLight, edge: C.tealDark, h: 120 });
  s += card(460, 530, 410, { title: 'Limitation', body: 'crowded cities may have no other land; existing buildings are hard to move', tsize: 18, bsize: 16, fill: C.panel, edge: C.rust, h: 120 });
  add('04-land-use-zoning',
    svg(900, 680, 'Land use zoning on a floodplain', s),
    'Cross-section of a river valley. The floodplain below flood level is used for parks and playing fields, while homes, schools and hospitals are placed on higher ground. Cards give the benefit and the limitation of zoning.',
    'Zoning controls what is built where; it is cheap but hard where land is scarce.',
    '## Discussing the strategies (6.3.4)');
}

// 05 Opportunities: silt and recharge
{
  let s = panel(30, 110, 840, 420);
  const prof = `M32,260 L180,300 L400,312 L430,350 L490,350 L520,312 L740,300 L868,260 L868,528 L32,528 Z`;
  s += `<path d="${prof}" fill="${C.rock}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  s += rect(150, 288, 620, 24, C.teal, { op: 0.75 }) + t(250, 280, 'floodwater spreads and slows', { size: 16, weight: 700, fill: C.tealDark });
  s += `<path d="M180,300 L400,312 L400,322 L180,310 Z" fill="${C.olive}"/><path d="M520,312 L740,300 L740,310 L520,322 Z" fill="${C.olive}"/>`;
  s += `<path d="M430,350 L490,350 L520,312 L400,312 Z" fill="${C.teal}"/>` + line(640, 316, 700, 352, C.ink, 2) + t(858, 372, 'layer of nutrient-rich silt', { size: 16, weight: 700, anchor: 'end' }) + t(858, 392, 'on farmland', { size: 16, weight: 700, anchor: 'end' });
  s += rect(32, 430, 836, 60, C.tealLight, { op: 0.9 }) + t(450, 466, 'aquifer: ground water store refilled', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  [220, 300, 600, 680].forEach((x) => { s += arrow(x, 330, x, 424, { w: 3.5, color: C.blue, dash: '7 5' }); });
  s += t(80, 375, 'water soaks down', { size: 15, weight: 600, fill: C.blue });
  s += notToScale(858, 520);
  s += card(30, 550, 410, { title: 'Silt deposition', body: 'adds nutrients and new soil, raising crop yields', tsize: 18, bsize: 16, fill: C.cream, edge: C.olive, h: 100 });
  s += card(460, 550, 410, { title: 'Recharge', body: 'fills lakes, wetlands, reservoirs and aquifers for the dry season', tsize: 18, bsize: 16, fill: C.tealLight, edge: C.tealDark, h: 100 });
  add('05-opportunities',
    svg(900, 680, 'Floods bring benefits too', s),
    'Cross-section of a floodplain under floodwater. As the water spreads and slows it drops a layer of nutrient-rich silt on the farmland, and water soaks down to refill an aquifer. Cards summarise silt deposition and recharge of water stores.',
    'Floods fertilise floodplains and refill water stores for the dry season.',
    '## Opportunities provided by flooding (6.3.5)');
}

// 06 Worked example: woodland vs urban run-off
{
  const ch = chart(170, 150, 400, 350, { xmin: 0, xmax: 2, ymin: 0, ymax: 45000, xticks: [], yticks: [0, 15000, 30000, 45000], ylabel: 'Run-off (m³)', yfmt: (v) => v.toLocaleString('en-GB') });
  let s = ch.svg + line(ch.X(0), ch.Y(45000), ch.X(2), ch.Y(45000), C.ink, 2, '8 6') + t(ch.X(2), ch.Y(45000) - 10, 'all the rain: 45,000 m³', { size: 15, anchor: 'end', weight: 600 });
  s += rect(215, ch.Y(9000), 120, ch.Y(0) - ch.Y(9000), C.grass, { stroke: C.ink }) + rect(405, ch.Y(38250), 120, ch.Y(0) - ch.Y(38250), C.rockDark, { stroke: C.ink });
  s += t(275, ch.Y(9000) - 12, '9,000', { size: 19, weight: 700, anchor: 'middle' }) + t(465, ch.Y(38250) - 12, '38,250', { size: 19, weight: 700, anchor: 'middle' });
  s += t(275, 530, 'Woodland', { size: 17, weight: 700, anchor: 'middle' }) + t(275, 552, '20% runs off', { size: 15, anchor: 'middle', fill: C.muted }) + t(465, 530, 'Built over', { size: 17, weight: 700, anchor: 'middle' }) + t(465, 552, '85% runs off', { size: 15, anchor: 'middle', fill: C.muted });
  s += panel(600, 150, 270, 350) + t(620, 184, 'Working', { size: 18, weight: 700 });
  [['Units', '30 mm = 0.030 m'], ['', '1.5 km² = 1,500,000 m²'], ['Rain', '0.030 × 1,500,000 = 45,000 m³'], ['Woodland', '45,000 × 0.20 = 9,000 m³'], ['Urban', '45,000 × 0.85 = 38,250 m³'], ['Extra', '38,250 − 9,000 = 29,250 m³']].forEach(([a, b], i) => { s += t(620, 218 + i * 46, a, { size: 15, weight: 700, fill: i === 5 ? C.rust : C.tealDark }) + t(620, 238 + i * 46, b, { size: 15, weight: i === 5 ? 700 : 400 }); });
  s += t(450, 590, 'Invented figures: 30 mm of rain on 1.5 km².', { size: 15, italic: true, fill: C.muted, anchor: 'middle' });
  add('06-urban-run-off',
    svg(900, 615, 'Why building over land raises flood risk', s),
    'Bar chart of run-off from 45,000 m³ of rain: 9,000 m³ from woodland where 20% runs off, and 38,250 m³ from a built-over area where 85% runs off. The working shows an extra 29,250 m³ reaches the river.',
    'Impermeable surfaces send over four times as much water to the river.',
    '## Worked example 1: urban run-off');
}
