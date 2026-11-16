import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-cambridge-pakistan-studies-agricultural-development';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- local helpers (kept in this file so style.mjs stays shared and untouched) ----
const X = (s) => String(s).replace(/&(?!amp;|lt;|gt;|#\d+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const GW = { ' ': .28, a: .55, b: .6, c: .55, d: .6, e: .57, f: .35, g: .6, h: .59, i: .25, j: .25, k: .53, l: .25, m: .88, n: .59, o: .59, p: .6, q: .6, r: .38, s: .5, t: .36, u: .59, v: .53, w: .79, x: .52, y: .53, z: .52, I: .28, M: .85, W: .95, '.': .27, ',': .27, ';': .27, ':': .27, '(': .35, ')': .35, "'": .25, '’': .25, '‘': .25, '"': .4, '–': .6, '—': 1, '-': .4, '/': .38, '•': .4, '%': .8, '&': .7 };
const tw = (s, size, weight = 400) => [...String(s)].reduce((a, ch) => a + (GW[ch] ?? (/[A-Z]/.test(ch) ? .68 : /[0-9]/.test(ch) ? .6 : .6)), 0) * size * (weight >= 600 ? 1.06 : 1);
const wrap = (s, width, size, weight) => {
  const out = [];
  for (const p of String(s).split('\n')) {
    let line = '';
    for (const w of p.split(' ')) { const c = line ? line + ' ' + w : w; if (line && tw(c, size, weight) > width) { out.push(line); line = w; } else line = c; }
    out.push(line);
  }
  return out;
};
const T = (x, y, s, o = {}) => t(x, y, X(s), o);
// wrapped paragraph, y = first baseline; returns {s, h}
const para = (x, y, s, width, o = {}) => {
  const size = o.size || 17, lh = o.lh || Math.round(size * 1.32);
  const L = wrap(s, width, size, o.weight || 400);
  return { s: L.map((l, i) => T(x, y + i * lh, l, o)).join(''), h: L.length * lh, n: L.length };
};
const R = (x, y, w, h, fill = C.panel, edge = C.panelEdge, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 12}" fill="${fill}" stroke="${edge}" stroke-width="${o.sw ?? 2.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
// card: title + body (string or array; bullets) -> {s, h}. Fixed height via o.h.
const card = (x, y, w, o = {}) => {
  const { title, body, fill = C.panel, edge = C.panelEdge, ts = 20, bs = 17, tfill = C.ink, bfill = C.muted, pad = 18, align = 'start', bullets = false, sub } = o;
  let inner = '', cy = y + pad - 2;
  const tx = align === 'middle' ? x + w / 2 : x + pad, iw = w - 2 * pad;
  if (title) { const p = para(tx, cy + ts * 0.85, title, iw, { size: ts, weight: 700, fill: tfill, anchor: align }); inner += p.s; cy += p.h + 2; }
  if (sub) { const p = para(tx, cy + 15 * 0.85, sub, iw, { size: 15, fill: o.subfill || C.muted, anchor: align, weight: 600 }); inner += p.s; cy += p.h + 2; }
  if (body) {
    if (title || sub) cy += 4;
    const items = Array.isArray(body) ? body : [body];
    for (const it of items) {
      if (bullets) { const p = para(tx + 16, cy + bs * 0.85, it, iw - 16, { size: bs, fill: bfill }); inner += T(tx, cy + bs * 0.85, '•', { size: bs, fill: bfill, weight: 700 }) + p.s; cy += p.h + 3; }
      else { const p = para(tx, cy + bs * 0.85, it, iw, { size: bs, fill: bfill, anchor: align }); inner += p.s; cy += p.h + 3; }
    }
  }
  const h = o.h || Math.round(cy - y + pad - 6);
  return { s: R(x, y, w, h, fill, edge, o) + inner, h };
};
const cardH = (w, o) => card(0, 0, w, o).h;
// vertical timeline: items [{d, title, body, hi}] -> {s, h}
const timeline = (x, y, w, items, o = {}) => {
  const dw = o.dw || 130, gap = o.gap || 14, cx = x + dw / 2;
  let s = '', cy = y; const mids = [];
  for (const it of items) {
    const c = card(x + dw + 22, cy, w - dw - 22, { title: it.title, body: it.body, ts: o.ts || 19, bs: o.bs || 16, fill: it.hi ? C.cream : C.panel, edge: it.hi ? C.olive : C.panelEdge, bullets: it.bullets });
    const ph = 40, py = cy + Math.min(c.h / 2, 34) - ph / 2;
    s += c.s; mids.push([py, ph, it]);
    cy += c.h + gap;
  }
  const line = `<line x1="${cx}" y1="${y + 10}" x2="${cx}" y2="${cy - gap - 10}" stroke="${C.ink}" stroke-width="4"/>`;
  const pills = mids.map(([py, ph, it]) => R(x, py, dw, ph, it.hi ? C.mustard : C.cream, C.ink, { rx: 20, sw: 2.5 }) + T(cx, py + 27, it.d, { size: tw(it.d, 19, 700) > dw - 14 ? 16 : 19, weight: 700, anchor: 'middle' }) +
    `<line x1="${x + dw}" y1="${py + ph / 2}" x2="${x + dw + 22}" y2="${py + ph / 2}" stroke="${C.ink}" stroke-width="2.5"/>`).join('');
  return { s: line + s + pills, h: cy - gap - y };
};
// grid table: cols [{label, w}], rows [[cells]] -> {s, h}
const grid = (x, y, cols, rows, o = {}) => {
  const size = o.size || 16, hs = o.hs || 17, pad = 12, lh = Math.round(size * 1.32);
  const W = cols.reduce((a, c) => a + c.w, 0);
  const hh = Math.max(...cols.map((c) => wrap(c.label, c.w - 2 * pad, hs, 700).length)) * Math.round(hs * 1.3) + 22;
  let s = '', cy = y + hh, body = '';
  const head = cols.map((c, i) => { const xx = x + cols.slice(0, i).reduce((a, k) => a + k.w, 0); return para(xx + pad, y + 15 + hs * 0.85, c.label, c.w - 2 * pad, { size: hs, weight: 700 }).s; }).join('');
  rows.forEach((r, ri) => {
    const cells = r.map((cell, i) => wrap(cell, cols[i].w - 2 * pad, size, i === 0 && o.firstBold !== false ? 700 : 400));
    const rh = Math.max(...cells.map((L) => L.length)) * lh + 20;
    const hi = o.hiRows && o.hiRows.includes(ri);
    body += `<rect x="${x}" y="${cy}" width="${W}" height="${rh}" fill="${hi ? C.cream : ri % 2 ? C.tealLight : C.panel}"/>`;
    cells.forEach((L, i) => { const xx = x + cols.slice(0, i).reduce((a, k) => a + k.w, 0); body += L.map((l, k) => T(xx + pad, cy + 12 + size * 0.85 + k * lh, l, { size, weight: i === 0 && o.firstBold !== false ? 700 : 400, fill: i === 0 ? C.ink : C.ink })).join(''); });
    body += `<line x1="${x}" y1="${cy}" x2="${x + W}" y2="${cy}" stroke="${C.panelEdge}" stroke-width="1.5"/>`;
    cy += rh;
  });
  let vx = x; const vl = cols.slice(0, -1).map((c) => { vx += c.w; return `<line x1="${vx}" y1="${y}" x2="${vx}" y2="${cy}" stroke="${C.panelEdge}" stroke-width="1.5"/>`; }).join('');
  s = `<rect x="${x}" y="${y}" width="${W}" height="${cy - y}" rx="12" fill="${C.panel}"/>` + `<path d="M${x},${y + hh} L${x},${y + 12} Q${x},${y} ${x + 12},${y} L${x + W - 12},${y} Q${x + W},${y} ${x + W},${y + 12} L${x + W},${y + hh} Z" fill="${C.teal}"/>` +
    body + vl + head + `<rect x="${x}" y="${y}" width="${W}" height="${cy - y}" rx="12" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`;
  return { s, h: cy - y };
};
// elbow connector with arrow head: points [[x,y],...]
const elbow = (pts, o = {}) => path('M' + pts.map((p) => p.join(',')).join(' L'), { stroke: o.color || C.ink, w: o.w || 3.5, extra: `marker-end="url(#${o.marker || 'ah'})"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}` });
const note = (x, y, w, s, o = {}) => card(x, y, w, { body: s, fill: C.cream, edge: C.olive, bfill: C.ink, bs: o.bs || 17, title: o.title, ts: o.ts || 19, ...o });
// ---- end helpers ----

// 01 Farm as a system
{
  const xs = [30, 325, 620], w = 250, y = 112;
  const cols = [
    ['INPUTS', C.cream, C.olive, ['land', 'water', 'seeds', 'fertiliser', 'labour', 'machinery', 'capital', 'animals']],
    ['PROCESSES', C.tealLight, C.tealDark, ['ploughing', 'sowing', 'transplanting', 'irrigating', 'weeding', 'spraying', 'harvesting', 'threshing', 'milking']],
    ['OUTPUTS', C.panel, C.ink, ['crops', 'milk, meat, wool, eggs', 'income', 'waste such as crop residue']],
  ];
  const h = Math.max(...cols.map(([ti, , , b]) => cardH(w, { title: ti, body: b, bullets: true, bs: 18 })));
  let b = cols.map(([ti, f, e, items], i) => card(xs[i], y, w, { title: ti, body: items, bullets: true, bs: 18, fill: f, edge: e, h, bfill: C.ink }).s).join('');
  b += arrow(xs[0] + w + 6, y + h / 2, xs[1] - 8, y + h / 2, { w: 5 }) + arrow(xs[1] + w + 6, y + h / 2, xs[2] - 8, y + h / 2, { w: 5 });
  const fy = y + h + 48;
  b += elbow([[xs[2] + w / 2, y + h + 4], [xs[2] + w / 2, fy], [xs[0] + w / 2, fy], [xs[0] + w / 2, y + h + 10]], { color: C.olive, w: 5, marker: 'ahO' });
  b += T(450, fy + 32, 'On a cash crop farm, income from sales becomes an input for next season', { size: 18, weight: 700, anchor: 'middle', fill: C.olive });
  const cy = fy + 62, cw = 270;
  const types = [
    ['Subsistence', 'Most outputs feed the family.'],
    ['Cash crop', 'Outputs are sold, e.g. cotton or sugar cane.'],
    ['Livestock', 'Adds fodder and veterinary care as inputs.'],
  ];
  const th = Math.max(...types.map(([a, c]) => cardH(cw, { title: a, body: c })));
  b += types.map(([a, c], i) => card(30 + i * 285, cy, cw, { title: a, body: c, h: th }).s).join('');
  add('01-farm-as-a-system',
    svg(900, cy + th + 30, 'A farm as a system', b),
    'Inputs such as land, water, seeds, labour and capital pass through processes such as ploughing, sowing, irrigating and harvesting to give outputs such as crops, milk, income and crop residue. A feedback arrow shows income from a cash crop farm becoming an input for the next season.',
    'Every farm turns inputs into outputs; what happens to the outputs decides the farm type.',
    '## How does a farming system work?');
}

// 02 Kharif and rabi year wheel
{
  const cx = 265, cy = 370, r = 150;
  const P = (a, rr) => [cx + rr * Math.cos((a * Math.PI) / 180), cy + rr * Math.sin((a * Math.PI) / 180)];
  const wedge = (a1, a2, fill) => { const [x1, y1] = P(a1, r), [x2, y2] = P(a2, r); return `<path d="M${cx},${cy} L${x1},${y1} A${r},${r} 0 0 1 ${x2},${y2} Z" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>`; };
  const arc = (a1, a2, rr, color, marker) => { const [x1, y1] = P(a1, rr), [x2, y2] = P(a2, rr); return `<path d="M${x1},${y1} A${rr},${rr} 0 0 1 ${x2},${y2}" fill="none" stroke="${color}" stroke-width="9" stroke-linecap="round" marker-end="url(#${marker})"/>`; };
  let b = wedge(-135, -45, C.cream) + wedge(-45, 45, C.sand) + wedge(45, 135, C.tealLight) + wedge(135, 225, C.teal);
  const lab = (a, s) => { const [x, y] = P(a, r * 0.6); return T(x, y + 7, s, { size: 20, weight: 700, anchor: 'middle' }); };
  b += lab(-90, 'Summer') + lab(0, 'Autumn') + lab(90, 'Winter') + lab(180, 'Spring');
  b += `<circle cx="${cx}" cy="${cy}" r="8" fill="${C.ink}"/>`;
  b += arc(-95, -8, r + 26, C.olive, 'ahO') + arc(85, 172, r + 26, C.tealDark, 'ahT');
  const dot = (a, color) => { const [x, y] = P(a, r + 26); return `<circle cx="${x}" cy="${y}" r="9" fill="${color}"/>`; };
  b += dot(-95, C.olive) + dot(85, C.tealDark);
  b += T(cx - 16, cy - r - 46, 'KHARIF: sow', { size: 17, weight: 700, fill: C.olive, anchor: 'end' }) + T(cx + r + 44, cy + 50, 'harvest', { size: 17, weight: 700, fill: C.olive, anchor: 'middle' });
  b += T(cx + 16, cy + r + 58, 'RABI: sow', { size: 17, weight: 700, fill: C.tealDark }) + T(cx - r - 44, cy - 40, 'harvest', { size: 17, weight: 700, fill: C.tealDark, anchor: 'middle' });
  const k = card(510, 130, 360, { title: 'Kharif crops', sub: 'sown in summer, at or before the monsoon; harvested in autumn', subfill: C.olive, body: ['Cotton, rice, sugar cane, maize, millet', 'Need high temperatures and plenty of water'], bullets: true, fill: C.cream, edge: C.olive, bfill: C.ink });
  const rb = card(510, 130 + k.h + 20, 360, { title: 'Rabi crops', sub: 'sown in winter, after the monsoon; harvested in spring', subfill: C.tealDark, body: ['Wheat, pulses (such as gram), oilseeds', 'Grow in the cooler, drier winter', 'Rely on irrigation, winter rain from western depressions and moisture stored in the soil'], bullets: true, fill: C.tealLight, edge: C.tealDark, bfill: C.ink });
  b += k.s + rb.s;
  const H = Math.max(130 + k.h + 20 + rb.h, cy + r + 70) + 30;
  add('02-kharif-rabi-seasons',
    svg(900, H, 'Two growing seasons: kharif and rabi', b),
    'A year wheel of summer, autumn, winter and spring. Kharif crops such as cotton, rice and sugar cane are sown in summer and harvested in autumn; rabi crops such as wheat, pulses and oilseeds are sown in winter and harvested in spring.',
    'Kharif crops use the hot, wet summer; rabi crops use the cooler, drier winter.',
    '## What are kharif and rabi crops?');
}

// 03 Four main crops grid
{
  const g = grid(30, 112, [{ label: 'Crop', w: 150 }, { label: 'Season', w: 110 }, { label: 'Main areas', w: 280 }, { label: 'Why there: what the crop needs', w: 300 }], [
    ['Cotton', 'Kharif', 'Southern Punjab and central Sindh', 'Long, hot, sunny summers; canal water; a frost-free growing season; dry weather at picking'],
    ['Rice', 'Kharif', 'The “rice belt” of northern Punjab around Gujranwala and Sialkot (basmati); parts of northern Sindh', 'High temperatures, standing water and clay soils that hold water'],
    ['Sugar cane', 'Kharif', 'Central Punjab, central Sindh and the Peshawar valley', 'Heat, a long growing season and a great deal of water'],
    ['Wheat', 'Rabi', 'Irrigated plains of Punjab and Sindh; barani (rain-fed) land in the Potwar Plateau', 'The staple food crop. Grows in the cooler, drier winter; on barani land the harvest depends on winter rainfall'],
  ], { size: 17 });
  add('03-main-crops-where-why',
    svg(900, 112 + g.h + 30, 'The four main crops: where and why', g.s),
    'A table of the four main crops. Cotton, rice and sugar cane are kharif crops grown in parts of Punjab, Sindh and the Peshawar valley where it is hot and water is plentiful. Wheat is a rabi crop grown on the irrigated plains and on rain-fed land in the Potwar Plateau.',
    'Each crop is grown where its needs for heat, water and soil are met.',
    '## Where are the main crops grown, and why?');
}

// 04 Karez cross-section
{
  const gl = 470; // oasis ground level
  let b = `<rect x="30" y="112" width="840" height="430" rx="14" fill="#e6eef0"/>`;
  b += `<path d="M30,180 Q160,170 300,300 Q420,420 560,${gl} L870,${gl} L870,542 L30,542 Z" fill="${C.sand}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  b += `<path d="M30,300 Q140,320 250,400 Q300,440 340,542 L30,542 Z" fill="${C.teal}" opacity="0.9"/>`;
  b += path('M30,300 Q140,320 250,400', { stroke: C.blue, w: 3 });
  b += path(`M250,400 L560,${gl - 4}`, { stroke: C.ink, w: 16 }) + path(`M250,400 L560,${gl - 4}`, { stroke: '#9fc3e6', w: 10 });
  b += path(`M560,${gl - 4} L700,${gl - 4}`, { stroke: C.blue, w: 6 });
  const palm = (x) => path(`M${x},${gl} L${x},${gl - 80}`, { stroke: C.rockDark, w: 6 }) + [[-34, 10], [34, 10], [-24, -18], [24, -18], [0, -26]].map(([dx, dy]) => path(`M${x},${gl - 80} Q${x + dx / 2},${gl - 98 + dy / 2} ${x + dx},${gl - 74 + dy}`, { stroke: C.grass, w: 6 })).join('');
  b += palm(640) + palm(730) + [600, 680, 770, 810].map((x) => `<ellipse cx="${x}" cy="${gl - 8}" rx="14" ry="9" fill="${C.grass}" stroke="${C.ink}" stroke-width="2"/>`).join('');
  b += T(110, 230, 'HILLS', { size: 20, weight: 700, fill: C.olive });
  b += T(70, 470, 'groundwater at the', { size: 17, weight: 700, fill: C.tealDark }) + T(70, 492, 'foot of the hills', { size: 17, weight: 700, fill: C.tealDark });
  b += arrow(420, 270, 400, 425, { w: 3 }) + T(360, 220, 'underground channel:', { size: 18, weight: 700 }) + T(360, 244, 'water flows by gravity', { size: 18 });
  b += T(720, 330, 'OASIS', { size: 21, weight: 700, anchor: 'middle' }) + T(720, 354, 'dates and vegetables', { size: 17, anchor: 'middle', fill: C.muted });
  b += T(450, 520, 'little water lost to evaporation underground', { size: 17, weight: 600, fill: C.blue, anchor: 'middle' });
  const n1 = card(30, 562, 410, { title: 'Advantage', body: 'Water travels underground, so little is lost to evaporation in the desert heat.', fill: C.tealLight, edge: C.tealDark, bfill: C.ink });
  const n2 = card(460, 562, 410, { title: 'Problems', body: 'Channels need constant cleaning. Tubewells are replacing karez in places and lower the water table.', fill: C.cream, edge: C.olive, bfill: C.ink, h: n1.h });
  add('04-karez-oasis',
    svg(900, 562 + Math.max(n1.h, n2.h) + 30, 'Karez: gravity-fed water for an oasis', b + n1.s + n2.s, 'Balochistan · not to scale'),
    'Cross-section from the hills to a desert oasis. Groundwater at the foot of the hills flows by gravity along a sloping underground channel to an oasis where dates and vegetables are grown. Little water is lost to evaporation, but the channels need constant cleaning and nearby tubewells lower the water table.',
    'A karez moves groundwater by gravity and keeps it out of the sun.',
    '## How do natural and human factors affect production?');
}

// 05 Livestock: small farms and transhumance
{
  const base = 400;
  let b = panel(30, 112, 840, 320);
  b += `<path d="M60,${base} L300,${base - 10} Q480,${base - 60} 600,180 Q650,150 700,175 Q780,250 840,${base} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  b += path('M580,196 Q650,140 720,190', { stroke: C.grass, w: 10 }) + path(`M70,${base - 4} L280,${base - 12}`, { stroke: C.grass, w: 10 });
  b += path(`M260,${base - 50} Q420,${base - 140} 560,170`, { stroke: C.tealDark, w: 5, extra: 'marker-end="url(#ahT)"' });
  b += path(`M650,250 Q560,330 330,${base - 40}`, { stroke: C.rust, w: 5, extra: 'marker-end="url(#ahR)"' });
  b += T(650, 140, 'high summer pastures', { size: 18, weight: 700, fill: C.grass, anchor: 'middle' });
  b += T(320, 210, 'SUMMER: move up', { size: 18, weight: 700, fill: C.tealDark, anchor: 'end' });
  b += T(560, 340, 'WINTER: move down', { size: 18, weight: 700, fill: C.rust }) + T(560, 362, 'to the valleys', { size: 17, fill: C.rust });
  b += T(80, base + 22, 'valleys', { size: 17, weight: 700, fill: C.grass });
  b += T(60, 150, 'Transhumance', { size: 22, weight: 700 }) + T(60, 174, 'sheep and goats in the mountains and Balochistan', { size: 16, fill: C.muted });
  const c1 = card(30, 452, 410, { title: 'Small farms', body: 'Buffalo and cattle provide milk, draught power and dung.' });
  const c2 = card(460, 452, 410, { title: 'Nomadic or semi-nomadic herding', body: 'Sheep and goats are herded by nomads, or moved with the seasons by transhumance.', h: undefined });
  const hh = Math.max(c1.h, c2.h);
  const c1b = card(30, 452, 410, { title: 'Small farms', body: 'Buffalo and cattle provide milk, draught power and dung.', h: hh });
  const c2b = card(460, 452, 410, { title: 'Nomadic or semi-nomadic herding', body: 'Sheep and goats are herded by nomads, or moved with the seasons by transhumance.', h: hh });
  add('05-livestock-transhumance',
    svg(900, 452 + hh + 30, 'Livestock: on the farm and on the move', b + c1b.s + c2b.s),
    'A mountain profile shows transhumance: herders move sheep and goats up to high summer pastures and back down to the valleys in winter. Cards below compare buffalo and cattle on small farms, which give milk, draught power and dung, with nomadic and semi-nomadic herding.',
    'Transhumance follows the grass: up in summer, down in winter.',
    '## How do natural and human factors affect production?');
}

// 06 From river to field
{
  const steps = [
    ['Dam', 'Stores water.'],
    ['Barrage', 'Raises the river level and diverts water into canals.'],
    ['Link canal', 'Moves water between rivers.'],
    ['Distribution canals and field channels', 'Carry water to the farms.'],
    ['Bunds', 'Hold water on the fields.'],
  ];
  const icon = (i, x, y) => {
    const W = 200, H = 90;
    let s = `<rect x="${x}" y="${y}" width="${W}" height="${H}" rx="10" fill="#e6eef0"/>`;
    if (i === 0) s += `<rect x="${x}" y="${y + 30}" width="110" height="60" fill="${C.teal}"/>` + `<path d="M${x + 110},${y + 18} L${x + 132},${y + 18} L${x + 146},${y + 90} L${x + 110},${y + 90} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3"/>` + `<rect x="${x + 146}" y="${y + 74}" width="54" height="16" fill="${C.teal}"/>`;
    if (i === 1) s += `<rect x="${x}" y="${y + 30}" width="${W}" height="34" fill="${C.teal}"/>` + [0, 1, 2, 3].map((k) => `<rect x="${x + 90 + k * 0}" y="${y + 22}" width="14" height="50" fill="${C.ink}"/>`).join('') + path(`M${x + 70},${y + 64} L${x + 70},${y + 90}`, { stroke: C.blue, w: 8 }) + `<line x1="${x + 90}" y1="${y + 47}" x2="${x + 104}" y2="${y + 47}" stroke="${C.mustard}" stroke-width="4"/>`;
    if (i === 2) s += path(`M${x + 40},${y} L${x + 40},${y + 90}`, { stroke: C.blue, w: 12 }) + path(`M${x + 160},${y} L${x + 160},${y + 90}`, { stroke: C.blue, w: 12 }) + path(`M${x + 46},${y + 40} L${x + 154},${y + 55}`, { stroke: C.blue, w: 6, extra: 'stroke-dasharray="12 6"' });
    if (i === 3) s += path(`M${x + 10},${y + 45} L${x + 190},${y + 45}`, { stroke: C.blue, w: 8 }) + [50, 100, 150].map((k) => path(`M${x + k},${y + 45} L${x + k},${y + 15} M${x + k},${y + 45} L${x + k},${y + 80}`, { stroke: C.blue, w: 3.5 })).join('');
    if (i === 4) s += `<rect x="${x + 30}" y="${y + 18}" width="140" height="56" fill="${C.teal}" stroke="${C.grass}" stroke-width="9"/>` + [60, 100, 140].map((k) => path(`M${x + k},${y + 56} l-5,-14 m5,14 l5,-14`, { stroke: C.grass, w: 2.5 })).join('');
    return s;
  };
  let b = '', y = 112;
  steps.forEach(([ti, d], i) => {
    const h = 114;
    b += panel(30, y, 840, h) + icon(i, 50, y + 12) + badge(300, y + h / 2, 24, String(i + 1), i === 1 ? C.mustard : C.cream);
    b += para(345, y + 44, ti, 500, { size: 22, weight: 700 }).s + para(345, y + 44 + (tw(ti, 22, 700) > 500 ? 58 : 30), d, 500, { size: 18, fill: C.muted }).s;
    if (i < steps.length - 1) b += arrow(300, y + h / 2 + 26, 300, y + h + 14 + h / 2 - 28, { w: 3 });
    y += h + 14;
  });
  add('06-river-to-field',
    svg(900, y + 16, 'Moving water from the river to the field', b),
    'Five steps of the irrigation network: a dam stores water, a barrage raises the river level and diverts water into canals, link canals move water between rivers, distribution canals and field channels carry it to farms, and bunds hold it on the fields.',
    'Dams store, barrages divert, canals carry and bunds hold: one network from river to crop.',
    '## Which types of irrigation are used?');
}

// 07 Waterlogging and salinity
{
  const sy = 260; // soil surface
  let b = `<rect x="30" y="112" width="840" height="390" rx="14" fill="#e6eef0"/>`;
  b += `<rect x="30" y="${sy}" width="840" height="242" fill="${C.sand}"/>` + `<line x1="30" y1="${sy}" x2="870" y2="${sy}" stroke="${C.ink}" stroke-width="3"/>`;
  b += `<path d="M70,${sy} L90,${sy + 60} L190,${sy + 60} L210,${sy} Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="3"/>` + T(140, sy - 14, 'unlined canal', { size: 17, weight: 700, anchor: 'middle' });
  // water tables
  b += `<rect x="30" y="${sy + 40}" width="840" height="${502 - sy - 40}" fill="${C.teal}" opacity="0.55"/>`;
  b += path(`M30,${sy + 40} L870,${sy + 40}`, { stroke: C.blue, w: 4 }) + path(`M30,${sy + 190} L870,${sy + 190}`, { stroke: C.blue, w: 3, extra: 'stroke-dasharray="10 8"' });
  b += T(860, sy + 182, 'water table before', { size: 16, fill: C.blue, anchor: 'end', weight: 600 }) + T(860, sy + 66, 'water table rises near the surface', { size: 17, fill: C.blue, anchor: 'end', weight: 700 });
  b += [110, 140, 170].map((x) => arrow(x, sy + 70, x, sy + 130, { color: C.blue, w: 3 })).join('') + T(140, sy + 160, 'seepage', { size: 17, weight: 700, fill: C.blue, anchor: 'middle' });
  b += arrow(330, 170, 330, sy - 6, { color: C.blue, w: 3 }) + arrow(360, 170, 360, sy - 6, { color: C.blue, w: 3 }) + T(345, 160, 'over-watering', { size: 17, weight: 700, fill: C.blue, anchor: 'middle' });
  // crop with drowned roots
  [470, 520, 570].forEach((x) => { b += path(`M${x},${sy} L${x},${sy - 60} M${x},${sy - 30} l-14,-14 M${x},${sy - 42} l14,-14`, { stroke: C.grass, w: 4 }) + path(`M${x},${sy} l-10,30 M${x},${sy} l0,34 M${x},${sy} l10,30`, { stroke: C.rockDark, w: 2.5 }); });
  b += T(520, sy + 100, 'waterlogged: roots cannot breathe', { size: 17, weight: 700, anchor: 'middle' });
  // evaporation and salt
  b += [700, 760, 820].map((x) => arrow(x, sy - 4, x, sy - 70, { color: C.rust, w: 3, marker: 'ahR' })).join('') + T(760, sy - 84, 'evaporation in the hot climate', { size: 17, weight: 700, fill: C.rust, anchor: 'middle' });
  b += `<rect x="650" y="${sy - 7}" width="210" height="9" fill="#ffffff" stroke="${C.muted}" stroke-width="1.5"/>` + T(760, sy + 30, 'salts left on the surface:', { size: 17, weight: 700, anchor: 'middle' }) + T(760, sy + 52, 'salinity', { size: 17, weight: 700, anchor: 'middle' });
  const c1 = card(30, 522, 410, { title: 'Restoring damaged land', body: ['Tubewells pump groundwater out to lower the water table', 'Drainage channels carry salty water away', 'Land is flushed with water', 'Salt-tolerant crops are planted'], bullets: true, fill: C.tealLight, edge: C.tealDark, bfill: C.ink });
  const c2 = card(460, 522, 410, { title: 'Prevention', body: ['Lining canals', 'More careful water use', 'Better drainage'], bullets: true, fill: C.cream, edge: C.olive, bfill: C.ink, h: c1.h });
  add('07-waterlogging-salinity',
    svg(900, 522 + c1.h + 30, 'How waterlogging leads to salinity', b + c1.s + c2.s, 'not to scale'),
    'Cross-section of a field beside an unlined canal. Seepage and over-watering raise the water table near the surface so crop roots cannot breathe; evaporation in the hot climate then leaves salts on the surface. Cards list ways to restore damaged land and to prevent the problem.',
    'Seepage raises the water table; evaporation leaves the salt behind.',
    '## What causes waterlogging and salinity, and how can they be solved?');
}
