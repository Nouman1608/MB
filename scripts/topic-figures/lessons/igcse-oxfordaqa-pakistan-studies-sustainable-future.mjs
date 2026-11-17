import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-oxfordaqa-pakistan-studies-sustainable-future';
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

// three-column cause -> impact -> strategy block
const cis = (y, cols) => {
  const w = 260, opts = cols.map(([ti, items, f, e]) => ({ title: ti, body: items, bullets: true, bs: 16, fill: f, edge: e, bfill: C.ink }));
  const h = Math.max(...opts.map((o) => cardH(w, o)));
  let s = '';
  opts.forEach((o, i) => { const x = 30 + i * 290; s += card(x, y, w, { ...o, h }).s; if (i < 2) s += arrow(x + w + 4, y + h / 2, x + 286, y + h / 2, { w: 4 }); });
  return { s, h };
};

// 01 Pollution
{
  const g = grid(30, 112, [{ label: 'Type', w: 120 }, { label: 'Main causes', w: 360 }, { label: 'Consequences', w: 360 }], [
    ['Air', 'Vehicle exhaust, old brick kilns, industry, burning crop stubble and waste', 'Winter smog in Lahore and other Punjab cities; respiratory illness; school and road closures'],
    ['Water', 'Untreated sewage and industrial waste in rivers and the sea; farm chemicals', 'Water-borne disease such as diarrhoea and typhoid; harm to fish and the Indus delta'],
    ['Soil', 'Over-use of fertiliser and pesticides; salinity from poor irrigation; dumped waste', 'Falling yields; contaminated crops'],
    ['Noise', 'Traffic, generators, construction and loudspeakers in cities', 'Stress, sleep loss and hearing damage'],
  ], { size: 16 });
  add('01-pollution',
    svg(900, 112 + g.h + 30, 'Four kinds of pollution: causes and consequences', g.s),
    'A table of air, water, soil and noise pollution. Air pollution from vehicles, brick kilns, industry and burning causes winter smog and illness; water pollution from sewage, industrial waste and farm chemicals causes disease and harms fish; soil pollution lowers yields; noise causes stress and hearing damage.',
    'Each type of pollution has its own causes and its own harm to health or livelihoods.',
    '## What causes pollution in Pakistan, and what are its effects?');
}

// 02 Deforestation
{
  const c = cis(140, [
    ['Causes', ['Wood for fuel and timber', 'Clearing for farms and housing', 'Over-grazing', 'Illegal logging in the northern mountains'], '#f6e3d6', C.rust],
    ['Impacts', ['Soil erosion and landslides', 'Faster run-off worsens floods', 'Silting of reservoirs such as Tarbela', 'Habitat loss; less carbon stored'], C.cream, C.olive],
    ['Strategies', ['Billion Tree Tsunami, Khyber Pakhtunkhwa (from 2014)', 'Ten Billion Tree Tsunami (from 2018)', 'Mangrove protection, Sindh coast', 'LPG instead of wood; community management; logging bans'], C.tealLight, C.tealDark],
  ]);
  const b = T(160, 128, 'CAUSE', { size: 15, weight: 700, fill: C.rust, anchor: 'middle' }) + T(450, 128, 'IMPACT', { size: 15, weight: 700, fill: C.olive, anchor: 'middle' }) + T(740, 128, 'RESPONSE', { size: 15, weight: 700, fill: C.tealDark, anchor: 'middle' }) + c.s;
  add('02-deforestation',
    svg(900, 140 + c.h + 30, 'Deforestation: causes, impacts, responses', b),
    'Three linked columns. Causes: fuelwood and timber, clearing land, over-grazing and illegal logging. Impacts: soil erosion and landslides, worse floods, silting of reservoirs such as Tarbela, and habitat and carbon loss. Responses: the Billion Tree Tsunami from 2014, the Ten Billion Tree Tsunami from 2018, mangrove protection, LPG and community management.',
    'Losing forest speeds erosion and flooding; tree planting and protection respond.',
    '## Why is deforestation a problem, and what is being done?');
}

// 03 Desertification
{
  const c = cis(140, [
    ['Causes', ['Low, unreliable rainfall and drought', 'Over-grazing', 'Cutting shrubs for fuel', 'Over-pumping groundwater', 'Poor irrigation leaves salt in the soil'], '#f6e3d6', C.rust],
    ['Impacts', ['Loss of farmland and grazing', 'Falling incomes', 'Migration to towns', 'Dust storms'], C.cream, C.olive],
    ['Strategies', ['Shelter belts of drought-resistant trees and shrubs', 'Controlled grazing', 'Drip irrigation', 'Water harvesting and small dams', 'Reclaiming saline land'], C.tealLight, C.tealDark],
  ]);
  const b = T(160, 128, 'CAUSE', { size: 15, weight: 700, fill: C.rust, anchor: 'middle' }) + T(450, 128, 'IMPACT', { size: 15, weight: 700, fill: C.olive, anchor: 'middle' }) + T(740, 128, 'RESPONSE', { size: 15, weight: 700, fill: C.tealDark, anchor: 'middle' }) + c.s;
  const n = note(30, 140 + c.h + 20, 840, 'Desertification is the spread of desert-like conditions in dry areas. It threatens parts of the Thar, Cholistan and Thal deserts and Balochistan.');
  add('03-desertification',
    svg(900, 140 + c.h + 20 + n.h + 30, 'Desertification: causes, impacts, responses', b + n.s),
    'Three linked columns. Causes: unreliable rainfall and drought, over-grazing, cutting shrubs, over-pumping groundwater and salty irrigation. Impacts: lost farmland and grazing, falling incomes, migration and dust storms. Responses: shelter belts, controlled grazing, drip irrigation, water harvesting and reclaiming saline land.',
    'Natural drought and human misuse together spread desert conditions.',
    '## What causes desertification, and how can it be tackled?');
}

// 04 Biodiversity at three scales
{
  const cx = 450, cy = 400;
  let b = `<ellipse cx="${cx}" cy="${cy}" rx="420" ry="280" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>`;
  b += `<ellipse cx="${cx}" cy="${cy + 50}" rx="300" ry="200" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
  b += `<ellipse cx="${cx}" cy="${cy + 100}" rx="170" ry="110" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += T(cx, cy - 238, 'INTERNATIONAL', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark }) + tl(cx, cy - 212, ['Work with WWF and the United Nations; conventions', 'on biodiversity and wetlands'], { size: 16, anchor: 'middle' }, 20);
  b += T(cx, cy - 116, 'NATIONAL', { size: 18, weight: 700, anchor: 'middle', fill: C.olive }) + tl(cx, cy - 90, ['National parks: Khunjerab, Margalla Hills, Kirthar,', 'Hingol; wildlife laws; protecting the endangered', 'Indus river dolphin'], { size: 16, anchor: 'middle' }, 20);
  b += T(cx, cy + 34, 'LOCAL', { size: 18, weight: 700, anchor: 'middle' }) + tl(cx, cy + 60, ['Markhor trophy-hunting', 'income shared with', 'villages that protect', 'the animals'], { size: 16, anchor: 'middle' }, 20);
  add('04-biodiversity-scales',
    svg(900, cy + 300, 'Protecting biodiversity at three scales', b),
    'Three nested rings. Local: markhor trophy-hunting income shared with villages that protect the animals. National: national parks such as Khunjerab, Margalla Hills, Kirthar and Hingol, wildlife laws and protection of the Indus river dolphin. International: work with WWF and the UN and conventions on biodiversity and wetlands.',
    'Conservation works at local, national and international scales.',
    '## How is biodiversity protected?');
}

// 05 Climate change: small emitter, high risk
{
  const y = 112;
  let b = R(30, y, 410, 110, C.panel, C.ink) + T(235, y + 40, 'Emissions', { size: 20, weight: 700, anchor: 'middle' }) + T(235, y + 68, 'a very small share of the', { size: 16, anchor: 'middle' }) + T(235, y + 90, 'global total', { size: 16, anchor: 'middle' });
  b += R(460, y, 410, 110, C.rust, C.ink) + T(665, y + 40, 'Vulnerability', { size: 20, weight: 700, anchor: 'middle', fill: '#ffffff' }) + T(665, y + 68, 'among the most vulnerable', { size: 16, anchor: 'middle', fill: '#ffffff' }) + T(665, y + 90, 'countries', { size: 16, anchor: 'middle', fill: '#ffffff' });
  const hz = [
    ['Heatwaves', 'e.g. Karachi, 2015'],
    ['Glacier melt', 'Karakoram and Himalaya; glacial lake outburst floods'],
    ['Monsoon floods', '2022: large areas of Sindh and Balochistan; 1,700+ deaths; about US$30 billion damage and losses'],
    ['Droughts', ''],
    ['Sea-level rise', 'Saltwater intrusion in the Indus delta'],
  ];
  const w = 156, h = Math.max(...hz.map(([a, c]) => cardH(w, { title: a, body: c || undefined, bs: 15, ts: 17 })));
  const hy = y + 150;
  b += T(30, hy - 12, 'CONSEQUENCES', { size: 15, weight: 700, fill: C.rust });
  hz.forEach(([a, c], i) => { b += card(30 + i * 171, hy, w, { title: a, body: c || undefined, bs: 15, ts: 17, h, fill: i === 2 ? C.cream : '#f6e3d6', edge: i === 2 ? C.olive : C.rust, bfill: C.ink }).s; });
  const ry = hy + h + 40;
  b += arrow(450, hy + h + 6, 450, ry - 6, { w: 4 });
  b += R(100, ry, 700, 60, C.mustard, C.ink) + T(450, ry + 37, 'Lower yields · damaged infrastructure · disease · poverty', { size: 18, weight: 700, anchor: 'middle' });
  add('05-climate-change-impacts',
    svg(900, ry + 90, 'Climate change: small emitter, high risk', b),
    'Pakistan produces a very small share of global emissions but is among the most vulnerable countries. Five consequences follow: heatwaves such as Karachi 2015, glacier melt and outburst floods, extreme monsoon floods such as 2022 (over 1,700 deaths and about US$30 billion of damage and losses), droughts, and sea-level rise in the Indus delta. Together these lower yields, damage infrastructure, spread disease and increase poverty.',
    'Pakistan contributes little to climate change but suffers heavily from it.',
    '## How does climate change affect Pakistan?');
}

// 06 Mitigation and adaptation
{
  const y = 112;
  const top = card(30, y, 840, { title: 'Agreements and policy', body: ['Paris Agreement: limit warming to well below 2°C; national plans for emission cuts and adaptation', 'National Adaptation Plan (2023): agriculture and water, urban resilience, health, disaster risk, ecosystems', 'COP 2022: a leading voice for the loss and damage fund'], bullets: true, bs: 16, fill: C.panel });
  let b = top.s;
  const y2 = y + top.h + 50;
  b += elbow([[450, y + top.h + 2], [450, y2 - 24], [235, y2 - 24], [235, y2 - 6]], { w: 4 }) + elbow([[450, y2 - 24], [665, y2 - 24], [665, y2 - 6]], { w: 4 });
  const m = { title: 'Mitigation', sub: 'reducing the causes', body: ['Solar, wind and hydro under the Alternative and Renewable Energy Policy (2019)', 'Electric vehicle policies', 'Mass transit in cities', 'Reforestation that stores carbon'], bullets: true, bs: 16, fill: C.tealLight, edge: C.tealDark, bfill: C.ink, subfill: C.tealDark, ts: 22 };
  const a = { title: 'Adaptation', sub: 'reducing the impacts', body: ['Early warnings from the Pakistan Meteorological Department; NDMA disaster planning', 'Heatwave plans in cities', 'Embankments, raised homes, protected wetlands, land-use planning', 'Reducing glacial lake outburst flood risk'], bullets: true, bs: 16, fill: C.cream, edge: C.olive, bfill: C.ink, subfill: C.olive, ts: 22 };
  const h = Math.max(cardH(410, m), cardH(410, a));
  b += card(30, y2, 410, { ...m, h }).s + card(460, y2, 410, { ...a, h }).s;
  add('06-mitigation-adaptation',
    svg(900, y2 + h + 30, 'Responding to climate change', b),
    'Agreements and policy (the Paris Agreement, the 2023 National Adaptation Plan and the loss and damage fund) branch into mitigation, which reduces the causes through renewables, electric vehicles, mass transit and reforestation, and adaptation, which reduces the impacts through early warnings, NDMA planning, heatwave plans, flood resilience and glacial lake projects.',
    'Mitigation tackles the causes; adaptation prepares for the impacts.',
    '## How is Pakistan responding to climate change?');
}

// 07 Uneven development
{
  const f = [
    ['Physical', 'Fertile irrigated plains of Punjab and Sindh vs mountains and deserts'],
    ['Economic', 'Industry and services concentrated in Karachi, Lahore and Islamabad'],
    ['Social', 'Literacy and health care higher in cities'],
    ['Political', 'Security problems; historical neglect; former tribal areas merged into Khyber Pakhtunkhwa only in 2018'],
  ];
  const w = 197, h = Math.max(...f.map(([a, c]) => cardH(w, { title: a, body: c, bs: 15, ts: 18 })));
  let b = T(30, 132, 'FACTORS', { size: 15, weight: 700, fill: C.rust });
  f.forEach(([a, c], i) => { b += card(30 + i * 214.3, 146, w, { title: a, body: c, bs: 15, ts: 18, h, fill: '#f6e3d6', edge: C.rust, bfill: C.ink }).s; });
  const ly = 146 + h + 20;
  b += R(130, ly, 640, 54, C.mustard, C.ink) + T(450, ly + 34, 'Lowest development: Balochistan and the former tribal districts', { size: 17, weight: 700, anchor: 'middle' });
  const sy = ly + 100;
  b += arrow(450, ly + 58, 450, sy - 30, { w: 4 });
  b += T(30, sy - 12, 'STRATEGIES AND HOW EFFECTIVE', { size: 15, weight: 700, fill: C.tealDark });
  const g = grid(30, sy, [{ label: 'Strategy', w: 300 }, { label: 'What it does', w: 280 }, { label: 'Effectiveness', w: 260 }], [
    ['National Finance Commission award', 'Shares federal revenue with provinces, weighting poverty and backwardness', 'The 2010 award increased the provinces’ share'],
    ['Benazir Income Support Programme (2008), later Ehsaas', 'Cash transfers to poor women', 'Helps the poorest households, though payments are small'],
    ['CPEC and Balochistan projects', 'Infrastructure', 'Mixed so far; local communities question how much they benefit'],
  ], { size: 16 });
  add('07-uneven-development',
    svg(900, sy + g.h + 30, 'Why development is uneven within Pakistan', b + g.s),
    'Four factors (physical, economic, social and political) leave Balochistan and the former tribal districts least developed. A table evaluates three strategies: the National Finance Commission award, whose 2010 version increased the provinces’ share; cash transfers through BISP and Ehsaas, which help the poorest but are small; and CPEC projects, with mixed results so far.',
    'Revenue sharing and cash transfers help, but the gap between regions persists.',
    '## Why is development uneven within Pakistan?');
}
