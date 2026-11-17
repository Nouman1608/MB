// Topic figures for cambridge-igcse-environmental-management-0680-food-production-and-crop-yield
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

export const slug = 'cambridge-igcse-environmental-management-0680-food-production-and-crop-yield';

// 01 Classifying a farm on three questions
{
  const qs = [
    ['What is produced?', [['Arable', 'crops'], ['Pastoral', 'livestock'], ['Mixed', 'both']], C.tealLight, C.tealDark],
    ['Who is it for?', [['Subsistence', 'the farmer’s family'], ['Commercial', 'sale for profit']], C.cream, C.olive],
    ['How is it farmed?', [['Intensive', 'high inputs per small area, high output per hectare'], ['Monoculture', 'one crop over a large area, often year after year']], C.rock, C.ink],
  ];
  let s = '';
  let y = 110;
  qs.forEach(([q, opts, fill, edge]) => {
    const h = 130;
    s += rect(30, y, 840, h, C.panel, { stroke: C.panelEdge, sw: 2.5, rx: 14 }) + rect(30, y, 200, h, fill, { stroke: edge, sw: 2.5, rx: 14 });
    s += card(30, y, 200, { title: q, tsize: 19, center: true, h, noBox: true });
    const ow = (600 - (opts.length - 1) * 14) / opts.length;
    opts.forEach(([a, b], i) => { const x = 250 + i * (ow + 14); s += card(x, y + 16, ow, { title: a, body: b, tsize: 18, bsize: 15, h: h - 32, pad: 12, center: true }); });
    y += h + 16;
  });
  s += card(30, y + 4, 840, { body: 'The categories overlap: a large commercial farm can be intensive, arable and a monoculture at once; a subsistence farm is often mixed.', bsize: 17, fill: C.cream, edge: C.olive });
  add('01-types-of-agriculture',
    svg(900, y + 4 + cardH(840, { body: 'The categories overlap: a large commercial farm can be intensive, arable and a monoculture at once; a subsistence farm is often mixed.', bsize: 17 }) + 30, 'Classifying a farm', s),
    'Three rows of questions. What is produced: arable, pastoral or mixed. Who is it for: subsistence or commercial. How is it farmed: intensive or monoculture. A note says one farm can belong to several categories at once.',
    'Answer all three questions to classify a farm fully.',
    '## Types of agriculture');
}

// 02 Twelve strategies by how they raise yield
{
  const groups = [
    ['Water', C.blue, ['Trickle irrigation', 'Rainwater harvesting', 'Automated watering']],
    ['Nutrients', C.olive, ['Crop rotation with legumes', 'NPK fertilisers', 'Organic fertilisers', 'Agroforestry']],
    ['Pests, weeds and disease', C.rust, ['Mixed cropping, intercropping', 'Pesticides', 'Biological control', 'GMOs (pest resistance)']],
    ['Protect the soil', C.grass, ['Livestock rotation', 'Agroforestry']],
    ['More land, time or control', C.tealDark, ['Mechanisation', 'Greenhouses', 'Hydroponics, aeroponics', 'Urban farming']],
  ];
  let s = card(330, 110, 240, { title: 'Higher crop yield', body: 'more food per hectare', tsize: 20, bsize: 16, center: true, h: 76, fill: C.mustard, edge: C.ink });
  const cw = 160, gx = 10;
  groups.forEach(([head, col, items], i) => {
    const x = 30 + i * (cw + gx + 2);
    s += parrow([[x + cw / 2, 226], [x + cw / 2, 206], [450, 206], [450, 190]], { w: 2.5, color: col, marker: 'ah' }).replace(`stroke="${col}" stroke-width="2.5" stroke-linejoin="round" marker-end="url(#ah)"`, `stroke="${col}" stroke-width="2.5" stroke-linejoin="round"`);
    s += rect(x, 230, cw, 300, C.panel, { stroke: col, sw: 2.5, rx: 12 }) + rect(x, 230, cw, 62, col, { rx: 12 }) + rect(x, 276, cw, 16, col);
    s += tl(x + cw / 2, 256, wrap(head, 16, cw - 16, 700), { size: 16, weight: 700, anchor: 'middle', fill: C.panel }, 20);
    let yy = 322;
    items.forEach((it) => { const ln = wrap(it, 15, cw - 24, 600); s += tl(x + 12, yy, ln.map((l, j) => (j ? '  ' : '• ') + l), { size: 15, weight: 600 }, 19); yy += ln.length * 19 + 14; });
  });
  s += arrow(450, 206, 450, 192, { w: 3 });
  s += t(450, 562, 'Some strategies work in more than one way: agroforestry adds organic matter and binds the soil.', { size: 15, italic: true, fill: C.muted, anchor: 'middle' });
  add('02-strategies-by-mechanism',
    svg(900, 590, 'How each strategy raises yield', s),
    'Five columns feed into higher crop yield. Water: trickle irrigation, rainwater harvesting, automated watering. Nutrients: crop rotation with legumes, NPK and organic fertilisers, agroforestry. Pests, weeds and disease: mixed cropping, pesticides, biological control, GMOs. Protect the soil: livestock rotation, agroforestry, mulch. More land, time or control: mechanisation, greenhouses, hydroponics and aeroponics, urban farming.',
    'For each strategy, say what limiting factor it removes.',
    '## Strategies to increase food production and crop yield');
}

// 03 Controlled environments
{
  let s = '';
  const pw = 270, gx = 15, y = 110, h = 360;
  ['Greenhouse', 'Hydroponics', 'Aeroponics'].forEach((n, i) => { s += panel(30 + i * (pw + gx), y, pw, h) + t(30 + i * (pw + gx) + pw / 2, y + 36, n, { size: 21, weight: 700, anchor: 'middle' }); });
  // greenhouse
  let x = 30;
  s += `<path d="M${x + 40},${y + 260} L${x + 40},${y + 140} L${x + 135},${y + 80} L${x + 230},${y + 140} L${x + 230},${y + 260} Z" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  s += rect(x + 60, y + 230, 150, 30, C.rockDark) + [80, 120, 160, 195].map((dx) => path(`M${x + dx},${y + 230} l0,-30 m0,10 l-10,-10 m10,4 l10,-10`, { stroke: C.grass, w: 3 })).join('');
  s += t(x + 135, y + 160, 'temperature,', { size: 15, anchor: 'middle', weight: 600 }) + t(x + 135, y + 178, 'water, CO₂ controlled', { size: 15, anchor: 'middle', weight: 600 });
  // hydroponics
  x = 30 + pw + gx;
  s += rect(x + 40, y + 190, 190, 70, C.teal, { stroke: C.ink, sw: 3, rx: 6 }) + rect(x + 40, y + 180, 190, 12, C.panel, { stroke: C.ink, sw: 2 });
  [80, 135, 190].forEach((dx) => { s += path(`M${x + dx},${y + 180} l0,-50 m0,20 l-14,-14 m14,6 l14,-14`, { stroke: C.grass, w: 3.5 }) + path(`M${x + dx},${y + 192} l-8,40 M${x + dx},${y + 192} l0,46 M${x + dx},${y + 192} l8,40`, { stroke: C.olive, w: 2 }); });
  s += t(x + 135, y + 284, 'roots in a nutrient', { size: 15, anchor: 'middle', weight: 600 }) + t(x + 135, y + 302, 'solution, no soil', { size: 15, anchor: 'middle', weight: 600 });
  // aeroponics
  x = 30 + 2 * (pw + gx);
  s += rect(x + 40, y + 180, 190, 90, C.panel, { stroke: C.ink, sw: 3, rx: 6 }) + rect(x + 40, y + 170, 190, 12, C.panel, { stroke: C.ink, sw: 2 });
  [80, 135, 190].forEach((dx) => { s += path(`M${x + dx},${y + 170} l0,-50 m0,20 l-14,-14 m14,6 l14,-14`, { stroke: C.grass, w: 3.5 }) + path(`M${x + dx},${y + 182} l-8,40 M${x + dx},${y + 182} l0,46 M${x + dx},${y + 182} l8,40`, { stroke: C.olive, w: 2 }); });
  [[60, 250], [105, 240], [160, 250], [210, 240]].forEach(([dx, dy]) => { s += [0, 1, 2].map((k) => `<circle cx="${x + dx + k * 6 - 6}" cy="${y + dy - k * 8}" r="2.5" fill="${C.blue}"/>`).join(''); });
  s += t(x + 135, y + 294, 'roots hang in air,', { size: 15, anchor: 'middle', weight: 600 }) + t(x + 135, y + 312, 'sprayed with nutrient mist', { size: 15, anchor: 'middle', weight: 600 });
  s += card(30, 490, 410, { title: 'Benefits', body: 'faster growth for more of the year; exact control of nutrients; little water used', tsize: 18, bsize: 16, fill: C.tealLight, edge: C.tealDark, h: 110 });
  s += card(460, 490, 410, { title: 'Limitations', body: 'expensive to build and run; need energy', tsize: 18, bsize: 16, fill: C.panel, edge: C.rust, h: 110 });
  add('03-controlled-environments',
    svg(900, 630, 'Controlled environments', s),
    'Three sketches. A greenhouse where temperature, water and carbon dioxide are controlled. Hydroponics, with plant roots in a nutrient solution instead of soil. Aeroponics, with roots hanging in air and sprayed with a nutrient mist. Benefits and limitations are listed below.',
    'Control the conditions and crops grow faster, but at a cost in money and energy.',
    '## Strategies to increase food production and crop yield');
}

// 04 Eutrophication chain
{
  const st = [
    ['Fertiliser leaches', 'into a river or lake'],
    ['Nutrients enrich the water', 'nitrate and phosphate'],
    ['Algae grow rapidly', 'and cover the surface'],
    ['Light is blocked', 'plants below die'],
    ['Bacteria decompose', 'the dead material, using up oxygen'],
    ['Fish and animals die', 'from lack of oxygen'],
  ];
  let s = '';
  const cw = 270, ch = 100, gx = 15, gy = 40;
  const pos = (i) => { const r = Math.floor(i / 3), c = r === 0 ? i : 2 - (i % 3); return [30 + c * (cw + gx), 110 + r * (ch + gy)]; };
  st.forEach(([a, b], i) => {
    const [x, y] = pos(i);
    const fill = i === 5 ? C.rock : i === 2 ? C.tealLight : C.panel;
    s += rect(x, y, cw, ch, fill, { stroke: i === 5 ? C.ink : C.panelEdge, sw: 2.5, rx: 12 }) + badge(x + 26, y + 32, 15, String(i + 1), C.mustard) + card(x + 46, y, cw - 46, { title: a, body: b, tsize: 17, bsize: 15, h: ch, pad: 12, noBox: true });
    if (i < 5) { const [nx, ny] = pos(i + 1); s += ny === y ? arrow(nx > x ? x + cw + 2 : x - 2, y + ch / 2, nx > x ? nx - 3 : nx + cw + 3, y + ch / 2, { w: 3 }) : arrow(x + cw / 2, y + ch + 2, x + cw / 2, ny - 3, { w: 3 }); }
  });
  // lake sketch
  const ly = 380;
  s += panel(30, ly, 840, 210);
  s += `<path d="M60,${ly + 70} Q450,${ly + 220} 840,${ly + 70} Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + rect(150, ly + 66, 600, 14, C.grass, { rx: 6 });
  s += t(450, ly + 50, 'algae cover the surface', { size: 16, weight: 700, anchor: 'middle', fill: C.grass });
  [300, 420, 560].forEach((x, i) => { s += path(`M${x},${ly + 150 - i * 4} l-12,6 m12,-6 l-4,-12`, { stroke: C.muted, w: 2 }); });
  s += `<path d="M640,${ly + 128} l-20,-8 0,16 z" fill="${C.muted}"/><ellipse cx="660" cy="${ly + 128}" rx="22" ry="9" fill="${C.muted}"/>` + t(700, ly + 140, 'dead fish', { size: 15, weight: 600, fill: C.muted });
  s += t(330, ly + 120, 'little light, low oxygen', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += `<path d="M30,${ly + 90} L150,${ly + 90}" stroke="${C.olive}" stroke-width="4" marker-end="url(#ahO)"/>` + t(40, ly + 120, 'fertiliser', { size: 15, weight: 700, fill: C.olive });
  add('04-eutrophication',
    svg(900, ly + 240, 'The eutrophication chain', s),
    'Six numbered steps: fertiliser leaches into a river or lake; nitrate and phosphate enrich the water; algae grow rapidly over the surface; light is blocked so plants below die; bacteria decompose the dead material and use up oxygen; fish and other animals die. Below, a lake sketch shows algae on the surface and dead fish.',
    'Write every link: nutrients, algae, no light, decomposers, no oxygen, death.',
    '## Impacts of unsustainable agricultural practices');
}

// 05 Pest resurgence (sketch graph)
{
  const x0 = 140, y0 = 150, w = 620, h = 300;
  const X = (u) => x0 + u * w, Y = (v) => y0 + h - v * h;
  const pest = (u) => (u < 0.3 ? 0.45 : u < 0.4 ? 0.45 - (u - 0.3) * 3.6 : 0.09 + (u - 0.4) ** 1.6 * 1.95);
  const pred = (u) => (u < 0.3 ? 0.3 : u < 0.4 ? 0.3 - (u - 0.3) * 2.8 : 0.02 + (u - 0.4) * 0.12);
  const pl = (f, col, dash = '') => `<polyline points="${Array.from({ length: 101 }, (_, i) => i / 100).map((u) => `${X(u).toFixed(1)},${Y(Math.min(f(u), 0.98)).toFixed(1)}`).join(' ')}" fill="none" stroke="${col}" stroke-width="4.5"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
  let s = panel(30, 110, 840, 430);
  s += line(x0, y0, x0, y0 + h, C.ink, 2.5) + line(x0, y0 + h, x0 + w, y0 + h, C.ink, 2.5);
  s += line(X(0), Y(0.45), X(1), Y(0.45), C.muted, 2, '6 6') + t(X(1), Y(0.45) - 8, 'original pest level', { size: 15, anchor: 'end', fill: C.muted });
  s += pl(pest, C.rust) + pl(pred, C.tealDark, '10 6');
  s += line(X(0.3), y0, X(0.3), y0 + h, C.ink, 2) + t(X(0.3) + 8, y0 + 18, 'insecticide sprayed', { size: 16, weight: 700 });
  s += `<text transform="translate(${x0 - 26},${y0 + h / 2}) rotate(-90)" font-size="17" font-weight="600" fill="${C.ink}" text-anchor="middle">Number</text>` + t(x0 + w / 2, y0 + h + 30, 'Time', { size: 17, weight: 600, anchor: 'middle' });
  s += t(X(0.36), Y(0.66), 'pests breed with no', { size: 16, weight: 600, fill: C.rust }) + t(X(0.36), Y(0.66) + 20, 'predators to control them', { size: 16, weight: 600, fill: C.rust });
  s += line(160, 515, 200, 515, C.rust, 4.5) + t(210, 521, 'pest', { size: 17 }) + line(290, 515, 330, 515, C.tealDark, 4.5, '10 6') + t(340, 521, 'natural predators', { size: 17 });
  s += t(858, 530, 'Sketch: no real data', { size: 15, italic: true, fill: C.muted, anchor: 'end' });
  s += card(30, 560, 410, { title: 'Pest resurgence', body: 'predators also killed, so the pest rebounds above its original level', tsize: 18, bsize: 16, fill: C.cream, edge: C.olive, h: 100 });
  s += card(460, 560, 410, { title: 'Pesticide resistance', body: 'resistant pests survive repeated spraying and breed', tsize: 18, bsize: 16, fill: C.panel, edge: C.rust, h: 100 });
  add('05-pest-resurgence',
    svg(900, 690, 'Pest resurgence after spraying', s),
    'Sketch graph of pest and predator numbers over time. After insecticide is sprayed both fall; the predators stay low while the pest breeds quickly and rises above its original level. Cards distinguish pest resurgence from pesticide resistance.',
    'Kill the predators along with the pest and the pest comes back stronger.',
    '## Impacts of unsustainable agricultural practices');
}

// 06 Yield change worked example
{
  const ch = chart(170, 140, 380, 360, { xmin: 0, xmax: 2, ymin: 0, ymax: 3.5, xticks: [], yticks: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], ylabel: 'Yield (tonnes per hectare)', yfmt: (v) => v.toFixed(1) });
  let s = ch.svg;
  s += rect(210, ch.Y(2.4), 120, ch.Y(0) - ch.Y(2.4), C.cream, { stroke: C.ink }) + rect(390, ch.Y(3.0), 120, ch.Y(0) - ch.Y(3.0), C.grass, { stroke: C.ink });
  s += t(270, ch.Y(2.4) - 12, '2.4', { size: 19, weight: 700, anchor: 'middle' }) + t(450, ch.Y(3.0) - 12, '3.0', { size: 19, weight: 700, anchor: 'middle' });
  s += t(270, 530, 'Before', { size: 17, weight: 700, anchor: 'middle' }) + t(270, 552, '96 t ÷ 40 ha', { size: 15, anchor: 'middle', fill: C.muted }) + t(450, 530, 'After', { size: 17, weight: 700, anchor: 'middle' }) + t(450, 552, '120 t ÷ 40 ha', { size: 15, anchor: 'middle', fill: C.muted });
  s += panel(590, 150, 280, 350) + t(610, 186, '% increase', { size: 18, weight: 700 }) + t(610, 216, '(3.0 − 2.4) ÷ 2.4 × 100', { size: 16 }) + t(610, 246, '= 25%', { size: 22, weight: 700, fill: C.tealDark });
  s += t(610, 300, 'Why?', { size: 18, weight: 700 }) + para(610, 326, 'Beans add nitrogen through their root nodules; drip irrigation supplies water to roots in dry spells. No extra land needed.', 240, { size: 15, fill: C.muted });
  s += t(450, 590, 'Invented figures: 40 ha farm, intercropping with beans plus drip irrigation.', { size: 15, italic: true, fill: C.muted, anchor: 'middle' });
  add('06-yield-change',
    svg(900, 615, 'Calculating a change in yield', s),
    'Bar chart of maize yield on a 40 hectare farm: 2.4 tonnes per hectare before and 3.0 after intercropping with beans and drip irrigation, a 25% increase.',
    'Divide by area first, then find the change as a percentage of the original yield.',
    '## Worked example 1: calculating a change in yield');
}
