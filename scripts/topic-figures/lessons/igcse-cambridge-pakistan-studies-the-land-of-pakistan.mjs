import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-cambridge-pakistan-studies-the-land-of-pakistan';
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

// 01 Where Section 1 sits
{
  let b = '';
  b += card(30, 112, 410, { title: 'Paper 1', body: 'The History and Culture of Pakistan', fill: C.panel, h: 96 }).s;
  b += card(460, 112, 410, { title: 'Paper 2', body: 'The Environment of Pakistan', fill: C.tealLight, edge: C.tealDark, bfill: C.ink, h: 96 }).s;
  b += arrow(665, 212, 665, 248, { w: 4 });
  const later = ['Section 2: Natural resources', 'Later sections: power, agriculture…'];
  const y = 256;
  later.forEach((s, i) => { b += R(460, y + i * 62, 360, 50, C.panel, C.panelEdge) + T(640, y + i * 62 + 32, s, { size: 17, weight: 600, anchor: 'middle' }); });
  const fy = y + 2 * 62 + 20;
  b += R(460, fy, 410, 120, C.mustard, C.ink) + T(665, fy + 40, 'Section 1: The Land of Pakistan', { size: 19, weight: 700, anchor: 'middle' }) + tl(665, fy + 70, ['the foundation: named places, mountain', 'ranges and rivers used without re-explaining'], { size: 16, anchor: 'middle' }, 21);
  b += arrow(848, fy - 4, 848, y + 10, { w: 4, color: C.olive, marker: 'ahO' });
  b += tl(430, fy + 34, ['Build it first:', 'every later Paper 2', 'section refers back', 'to it'], { size: 18, weight: 700, fill: C.olive, anchor: 'end' }, 24);
  add('01-section-1-foundation',
    svg(900, fy + 150, 'Section 1 underpins Paper 2', b),
    'Pakistan Studies 0448 has two papers: Paper 1, History and Culture, and Paper 2, the Environment of Pakistan. In Paper 2, Section 1, the Land of Pakistan, sits at the base, supporting Section 2 on natural resources and the later sections, which use its places, ranges and rivers without re-explaining them.',
    'Learn Section 1 first: the rest of Paper 2 builds on it.',
    '## Where this fits in 0448');
}

// 02 Reference lines
{
  const x0 = 170, x1 = 790, y0 = 140, y1 = 470;
  const lon = (v) => x0 + ((v - 60) * (x1 - x0)) / (80 - 60);
  const lat = (v) => y1 - ((v - 22) * (y1 - y0)) / (38 - 22);
  let b = R(x0, y0, x1 - x0, y1 - y0, '#ffffff', C.panelEdge, { rx: 6 });
  [30, 36].forEach((v) => { b += `<line x1="${x0}" y1="${lat(v)}" x2="${x1}" y2="${lat(v)}" stroke="${C.ink}" stroke-width="2.5" stroke-dasharray="10 7"/>` + T(x0 - 12, lat(v) + 6, `${v}°N`, { size: 18, weight: 700, anchor: 'end' }); });
  b += `<line x1="${x0}" y1="${lat(23.5)}" x2="${x1}" y2="${lat(23.5)}" stroke="${C.rust}" stroke-width="4"/>` + T(x0 - 12, lat(23.5) - 4, 'Tropic of', { size: 17, weight: 700, anchor: 'end', fill: C.rust }) + T(x0 - 12, lat(23.5) + 16, 'Cancer', { size: 17, weight: 700, anchor: 'end', fill: C.rust });
  [64, 70, 76].forEach((v) => { b += `<line x1="${lon(v)}" y1="${y0}" x2="${lon(v)}" y2="${y1}" stroke="${C.blue}" stroke-width="2.5" stroke-dasharray="10 7"/>` + T(lon(v), y0 - 10, `${v}°E`, { size: 18, weight: 700, anchor: 'middle', fill: C.blue }); });
  b += arrow(840, 300, 840, 170, { w: 4 }) + T(840, 330, 'N', { size: 20, weight: 700, anchor: 'middle' });
  b += arrow(480, y1 + 4, 480, y1 + 40, { w: 3.5, color: C.tealDark, marker: 'ahT' }) + T(496, y1 + 34, 'Arabian Sea to the south', { size: 17, weight: 700, fill: C.tealDark });
  const n = note(30, y1 + 66, 840, 'Practise plotting these lines against Pakistan’s outline, then add the Arabian Sea and each neighbouring country.');
  add('02-reference-lines',
    svg(900, y1 + 66 + n.h + 30, 'The lines to identify on a map of Pakistan', b + n.s, 'schematic grid: not to scale, no outline or borders'),
    'A schematic grid of the reference lines for Section 1(a): latitudes 30°N and 36°N, the Tropic of Cancer further south, and longitudes 64°E, 70°E and 76°E, with the Arabian Sea to the south.',
    'Six lines frame Pakistan’s position: learn them before placing any feature.',
    '## Location (1a–1b): what candidates must be able to do on a map');
}

// 03 Named cities checklist
{
  const cities = ['Islamabad', 'Murree', 'Rawalpindi', 'Gujranwala', 'Lahore', 'Faisalabad', 'Multan', 'Sialkot', 'Peshawar', 'Chitral', 'Gilgit', 'Hyderabad', 'Karachi', 'Quetta', 'Gwadar'];
  const flag = { Gilgit: 'n', Chitral: 'n', Gwadar: 'c', Hyderabad: 'i' };
  let b = '';
  cities.forEach((c, i) => {
    const col = i % 5, row = Math.floor(i / 5), x = 30 + col * 170, y = 112 + row * 62;
    const f = flag[c];
    b += R(x, y, 156, 48, f ? C.cream : C.panel, f ? C.olive : C.panelEdge, { rx: 24 }) + T(x + 78, y + 31, c, { size: 17, weight: f ? 700 : 400, anchor: 'middle' });
  });
  const y = 112 + 3 * 62 + 20;
  b += T(30, y + 10, 'COMMON MARK LOSSES', { size: 16, weight: 700, fill: C.rust });
  const m1 = { title: 'Gilgit and Chitral', body: 'Both are in the north: do not place them too far south.' };
  const m2 = { title: 'Gwadar vs Hyderabad', body: 'Gwadar is coastal; Hyderabad is inland. Do not confuse them.' };
  const h = Math.max(cardH(410, m1), cardH(410, m2));
  b += card(30, y + 24, 410, { ...m1, h, fill: '#f6e3d6', edge: C.rust, bfill: C.ink }).s + card(460, y + 24, 410, { ...m2, h, fill: '#f6e3d6', edge: C.rust, bfill: C.ink }).s;
  const n = note(30, y + 24 + h + 20, 840, 'Learn the cities well enough to place them correctly relative to each other, not just one by one.');
  add('03-named-cities',
    svg(900, y + 24 + h + 20 + n.h + 30, 'The 15 named cities for Section 1(b)', b + n.s),
    'The fifteen named cities from Islamabad to Gwadar as a checklist. Gilgit, Chitral, Gwadar and Hyderabad are highlighted with the two common mistakes: placing Gilgit or Chitral too far south, and confusing coastal Gwadar with inland Hyderabad.',
    'Place cities relative to each other; watch the northern and coastal ones.',
    '## Location (1a–1b): what candidates must be able to do on a map');
}

// 04 Topography families (positional schematic)
{
  const y = 112;
  let b = R(30, y, 840, 380, '#e6eef0', C.panelEdge);
  b += T(450, y + 30, 'positions are schematic: not a map', { size: 15, fill: C.muted, anchor: 'middle', italic: true });
  // north arc
  b += path(`M300,${y + 140} Q450,${y + 40} 640,${y + 110}`, { stroke: C.rockDark, w: 26 });
  b += T(286, y + 146, 'Hindu Kush', { size: 17, weight: 700, anchor: 'end' }) + T(455, y + 60, 'Karakoram', { size: 17, weight: 700, anchor: 'middle' }) + T(640, y + 84, 'Himalaya', { size: 17, weight: 700, anchor: 'middle' });
  b += T(470, y + 166, 'mountain arc: north to north-east', { size: 16, fill: C.olive, weight: 700, anchor: 'middle' });
  // west
  b += R(60, y + 180, 220, 150, C.rock, C.ink, { rx: 10 }) + T(170, y + 214, 'WEST', { size: 15, weight: 700, anchor: 'middle', fill: C.muted }) + T(170, y + 246, 'Balochistan Plateau', { size: 17, weight: 700, anchor: 'middle' }) + T(170, y + 276, 'Sulaiman Range', { size: 17, weight: 700, anchor: 'middle' });
  // north-centre
  b += R(380, y + 190, 220, 110, C.sand, C.ink, { rx: 10 }) + T(490, y + 222, 'NORTH-CENTRE', { size: 15, weight: 700, anchor: 'middle', fill: C.muted }) + T(490, y + 252, 'Potwar Plateau', { size: 17, weight: 700, anchor: 'middle' }) + T(490, y + 280, 'Salt Range', { size: 17, weight: 700, anchor: 'middle' });
  // rivers
  const rx = 700;
  b += path(`M${rx},${y + 170} L${rx},${y + 360}`, { stroke: C.blue, w: 10 }) + T(rx - 12, y + 360, 'Indus', { size: 18, weight: 700, fill: C.blue, anchor: 'end' });
  ['Jhelum', 'Chenab', 'Ravi', 'Sutlej'].forEach((r, i) => { const yy = y + 190 + i * 40; b += path(`M845,${yy} L${rx + 6},${yy + 22}`, { stroke: C.blue, w: 4 }) + T(850, yy - 6, r, { size: 15, weight: 700, fill: C.blue, anchor: 'end' }); });
  const others = [['Also named', 'Safed Koh; rivers Kabul, Hab and Dasht'], ['Deserts', 'Thar, Thal and Kharan']];
  const ow = 410, oh = Math.max(...others.map(([a, c]) => cardH(ow, { title: a, body: c })));
  others.forEach(([a, c], i) => { b += card(30 + i * 430, y + 400, ow, { title: a, body: c, h: oh, bfill: C.ink }).s; });
  const n = note(30, y + 400 + oh + 20, 840, 'You need to identify and describe these features and explain how they shape land use, roads and railways. How they formed is not required.');
  add('04-topography-families',
    svg(900, y + 400 + oh + 20 + n.h + 30, 'Landforms and rivers to learn for 1(c)', b + n.s),
    'A schematic, not a map. The Hindu Kush, Karakoram and Himalaya form an arc across the north to north-east; the Balochistan Plateau and Sulaiman Range lie to the west; the Potwar Plateau and Salt Range are in the north-centre. The Jhelum, Chenab, Ravi and Sutlej feed the Indus. Safed Koh, the Kabul, Hab and Dasht rivers and the Thar, Thal and Kharan deserts are also named.',
    'Learn landforms by position: northern arc, west, north-centre, then the Indus system.',
    '## Natural topography and drainage (1c)');
}

// 05 Climate: benefit and problem pairs
{
  const pairs = [
    ['Monsoon rain', 'Supports agriculture', 'Flooding disrupts industry and communications'],
    ['Cold in the mountains', 'Low temperatures feed the glacial meltwater that sustains the Indus system', 'Low temperature, ice and snow constrain people’s lives'],
    ['Drought and water shortage', '(problem only)', 'Harm agriculture and industry'],
  ];
  let b = T(330, 132, 'Benefit', { size: 19, weight: 700, fill: C.tealDark }) + T(620, 132, 'Problem', { size: 19, weight: 700, fill: C.rust });
  let y = 148;
  pairs.forEach(([c, ben, pro]) => {
    const h = Math.max(cardH(270, { body: ben, bs: 16 }), cardH(270, { body: pro, bs: 16 }), 70);
    b += R(30, y, 250, h, C.mustard, C.ink) + para(46, y + h / 2 - (wrap(c, 220, 18, 700).length - 1) * 12 + 6, c, 220, { size: 18, weight: 700 }).s;
    b += card(310, y, 270, { body: ben, bs: 16, h, fill: ben === '(problem only)' ? C.panel : C.tealLight, edge: C.tealDark, bfill: C.ink }).s;
    b += card(600, y, 270, { body: pro, bs: 16, h, fill: '#f6e3d6', edge: C.rust, bfill: C.ink }).s;
    b += arrow(282, y + h / 2, 306, y + h / 2, { w: 3 });
    y += h + 14;
  });
  const n = note(30, y + 8, 840, 'One-sided answers (only benefits, or only problems) rarely reach full marks. Explain why the monsoon happens, not just that it happens.');
  add('05-climate-benefit-problem',
    svg(900, y + 8 + n.h + 30, 'Climate answers need a benefit and a problem', b + n.s),
    'Three climate features with a benefit and a problem for each: monsoon rain supports agriculture but flooding disrupts industry and communications; cold in the mountains constrains lives but feeds the glacial meltwater that sustains the Indus; drought and water shortage harm agriculture and industry.',
    'Pair every climate benefit with a problem to reach the top marks.',
    '## Climate (1d)');
}

// 06 One annotated map, built in layers
{
  const layers = [
    ['1', 'Administrative areas and cities', C.panel],
    ['2', 'Landforms and rivers', C.sand],
    ['3', 'A simple climate-zone overlay', C.tealLight],
  ];
  let b = '';
  layers.forEach(([n, s, f], i) => {
    const y = 330 - i * 80, x = 120 + i * 30;
    b += `<path d="M${x},${y} L${x + 520},${y} L${x + 600},${y + 70} L${x + 80},${y + 70} Z" fill="${f}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>`;
    b += badge(x + 120, y + 36, 18, n, C.cream) + T(x + 150, y + 43, s, { size: 18, weight: 700 });
  });
  b += T(450, 150, 'Start one outline map early and add to it', { size: 18, weight: 700, anchor: 'middle', fill: C.muted });
  const n = note(30, 430, 840, 'Revisit the map whenever a later Paper 2 topic (natural resources, power, agriculture) mentions a place or feature from Section 1.');
  add('06-layered-revision-map',
    svg(900, 430 + n.h + 30, 'One annotated map, built in layers', b + n.s),
    'Three stacked layers of one outline map: first administrative areas and cities, then landforms and rivers, then a simple climate-zone overlay. A note says to revisit the map whenever later Paper 2 topics mention a Section 1 place.',
    'Build one map in three layers and keep returning to it.',
    '## How to approach it');
}
