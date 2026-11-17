// Topic figures for cambridge-igcse-environmental-management-0680-acid-rain
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

export const slug = 'cambridge-igcse-environmental-management-0680-acid-rain';

// 01 Formation of acid rain (schematic cross-section)
{
  const G = 420; // ground line
  const volcano = `<path d="M50,${G} L112,300 L146,300 L210,${G} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>` + `<path d="M112,300 L122,318 L136,318 L146,300 Z" fill="${C.rust}"/>`;
  const station = rect(240, 352, 100, 68, C.panel, { stroke: C.ink, sw: 3 }) + rect(312, 220, 20, 132, C.rock, { stroke: C.ink, sw: 3 }) + rect(254, 372, 22, 22, C.tealLight, { stroke: C.ink, sw: 2 }) + rect(286, 372, 22, 22, C.tealLight, { stroke: C.ink, sw: 2 });
  const car = `<path d="M392,${G - 8} L392,${G - 30} L410,${G - 30} L420,${G - 46} L456,${G - 46} L468,${G - 30} L482,${G - 30} L482,${G - 8} Z" fill="${C.blue}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>` + `<circle cx="412" cy="${G - 6}" r="9" fill="${C.ink}"/><circle cx="462" cy="${G - 6}" r="9" fill="${C.ink}"/>` + rect(378, G - 20, 14, 6, C.ink);
  const lake = `<path d="M690,${G} Q700,${G + 26} 742,${G + 28} Q785,${G + 26} 795,${G} Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`;
  const bldg = rect(812, G - 62, 46, 62, C.rock, { stroke: C.ink, sw: 2.5 }) + `<path d="M806,${G - 62} L835,${G - 84} L864,${G - 62} Z" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2.5"/>`;
  let rain = '';
  for (let i = 0; i < 7; i++) { const x = 600 + i * 24, y = 250 + (i % 3) * 24; rain += line(x, y, x - 8, y + 30, C.blue, 3) + line(x - 14, y + 62, x - 22, y + 92, C.blue, 3); }
  const gas = { color: C.rust, w: 4, marker: 'ahR', dash: '9 7' };
  const scene = panel(30, 110, 840, 400) +
    rect(32, G, 836, 88, C.cream) + line(32, G, 868, G, C.ink, 3) +
    volcano + station + car + tree(625, G) + tree(665, G, 0.8) + lake + bldg +
    carrow(129, 292, 170, 180, 520, 205, gas) + carrow(322, 214, 380, 160, 525, 182, gas) + carrow(376, G - 22, 380, 270, 530, 225, gas) +
    tag(150, 248, 'SO₂', { fill: C.panel, edge: C.rust, color: C.rust }) + tag(345, 196, 'SO₂', { fill: C.panel, edge: C.rust, color: C.rust }) + tag(410, 300, 'NOₓ', { fill: C.panel, edge: C.rust, color: C.rust }) +
    cloud(690, 200, 250, 80) + t(690, 196, 'react with oxygen', { size: 17, weight: 600, anchor: 'middle' }) + t(690, 218, 'and water vapour', { size: 17, weight: 600, anchor: 'middle' }) +
    rain + t(860, 262, 'acid rain,', { size: 17, weight: 700, anchor: 'end', fill: C.blue }) + t(860, 283, 'snow or mist', { size: 17, weight: 700, anchor: 'end', fill: C.blue }) +
    arrow(180, 152, 500, 152, { w: 5, color: C.olive, marker: 'ahO' }) + t(340, 138, 'wind carries the gases hundreds of km', { size: 17, weight: 700, fill: C.olive, anchor: 'middle' }) +
    t(130, G + 30, 'volcano', { size: 16, weight: 600, anchor: 'middle' }) + t(290, G + 30, 'power station', { size: 16, weight: 600, anchor: 'middle' }) + t(437, G + 30, 'vehicles', { size: 16, weight: 600, anchor: 'middle' }) +
    t(645, G + 30, 'forest', { size: 16, weight: 600, anchor: 'middle' }) + t(742, G + 52, 'lake', { size: 16, weight: 600, anchor: 'middle', fill: C.tealDark }) + t(835, G + 30, 'building', { size: 16, weight: 600, anchor: 'middle' }) +
    t(290, G + 52, 'tall chimney: gases travel further', { size: 15, anchor: 'middle', fill: C.muted, italic: true }) +
    notToScale(858, 500);
  const steps = [
    ['1', 'Sulfur dioxide', 'from burning fossil fuels that contain sulfur: power stations, factories, ships'],
    ['2', 'Sulfur dioxide', 'from volcanic gases: a natural source that cannot be managed'],
    ['3', 'Oxides of nitrogen', 'nitrogen from the air reacts with oxygen in hot vehicle engines'],
    ['4', 'Reaction', 'both gases react with oxygen and water vapour to form acids'],
  ];
  const cw = 201, h = Math.max(...steps.map(([, a, b]) => cardH(cw, { title: a, body: b, tsize: 18, bsize: 16, pad: 16, top: 22 })));
  const cards = steps.map(([n, a, b], i) => { const x = 30 + i * 213; return card(x, 545, cw, { title: a, body: b, tsize: 18, bsize: 16, pad: 16, h, fill: i === 3 ? C.cream : C.panel, edge: i === 3 ? C.olive : C.panelEdge, vcenter: false, top: 22 }) + badge(x + 22, 545, 17, n, i === 3 ? C.mustard : C.cream); }).join('');
  add('01-formation',
    svg(900, 545 + h + 30, 'How acid rain forms', scene + cards),
    'Cross-section from a volcano, a power station with a tall chimney and vehicles on the left to a forest, lake and building downwind. Sulfur dioxide and oxides of nitrogen are carried by the wind to a cloud, react with oxygen and water vapour, and fall as acid rain.',
    'Two gases, three sources, one reaction: and the wind can carry the result to another country.',
    '## Formation (4.3.1)');
}

// 02 The pH scale is logarithmic
{
  const X = (p) => 110 + (p - 3) * 170; // pH 3..7
  const segs = [[3, 4, C.rust], [4, 5, C.mustard], [5, 6, C.cream], [6, 7, C.tealLight]];
  let s = panel(30, 110, 840, 470);
  s += segs.map(([a, b, f]) => rect(X(a), 250, X(b) - X(a), 50, f)).join('') + rect(X(3), 250, X(7) - X(3), 50, 'none', { stroke: C.ink, sw: 3 });
  for (let p = 3; p <= 7; p++) s += line(X(p), 300, X(p), 312, C.ink, 2.5) + t(X(p), 336, `pH ${p}`, { size: 18, weight: 700, anchor: 'middle' });
  s += t(X(3), 230, 'more acidic', { size: 16, fill: C.rust, weight: 600 }) + t(X(7), 230, 'neutral', { size: 16, fill: C.tealDark, weight: 600, anchor: 'end' });
  // normal rain marker
  s += line(X(5.6), 160, X(5.6), 306, C.ink, 3.5) + `<path d="M${X(5.6) - 9},245 L${X(5.6) + 9},245 L${X(5.6)},258 Z" fill="${C.ink}"/>`;
  s += t(X(5.6) + 12, 160, 'normal rain: about pH 5.6', { size: 18, weight: 700 }) + t(X(5.6) + 12, 182, '(carbon dioxide dissolves in it)', { size: 16, fill: C.muted });
  // acid rain bracket
  s += path(`M${X(3)},352 L${X(3)},364 L${X(5.6)},364 L${X(5.6)},352`, { w: 3, stroke: C.rust }) + t((X(3) + X(5.6)) / 2, 390, 'acid rain: lower pH than normal rain', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  // x10 hops
  for (let p = 7; p > 3; p--) s += carrow(X(p) - 10, 440, (X(p) + X(p - 1)) / 2, 404, X(p - 1) + 12, 440, { w: 3, color: C.olive, marker: 'ahO' }) + t((X(p) + X(p - 1)) / 2, 460, '×10', { size: 19, weight: 700, anchor: 'middle', fill: C.olive });
  s += card(60, 488, 780, { body: 'The scale is logarithmic: each fall of one unit means ten times more acidic, so a fall of two units means a hundred times more acidic.', bsize: 18, fill: C.cream, edge: C.olive, center: true, h: 72 });
  add('02-ph-scale',
    svg(900, 610, 'Reading the pH of rain', s),
    'A pH scale from 3 to 7 with normal rain marked at about pH 5.6 and acid rain covering everything below it. Curved arrows between each whole number show that every fall of one unit is ten times more acidic.',
    'Each fall of one pH unit is a tenfold rise in acidity.',
    '## Formation (4.3.1)');
}

// 03 Impacts on lakes and rivers (chain)
{
  const W2 = 400;
  const top = card(200, 110, 500, { title: 'Lakes and rivers become more acidic', body: 'worst where the rock cannot neutralise acid; spring snowmelt brings a sudden pulse', fill: C.tealLight, edge: C.tealDark, center: true, tsize: 20, bsize: 17 });
  const topH = cardH(500, { title: 'Lakes and rivers become more acidic', body: 'worst where the rock cannot neutralise acid; spring snowmelt brings a sudden pulse', tsize: 20, bsize: 17 });
  const colL = [
    { title: 'Aluminium released', body: 'acid water releases aluminium from soils into lakes' },
    { title: 'Fish gills damaged', body: 'eggs and young fish are the most sensitive' },
    { title: 'Fish populations fall', body: 'fewer survive to breed; some lakes lose their fish entirely', fill: C.cream, edge: C.olive },
  ];
  const colR = [
    { title: 'Invertebrates die out', body: 'snails, mayfly larvae and crustaceans cannot survive low pH' },
    { title: 'Fish lose their food', body: 'the food web loses a link' },
    { title: 'Birds and mammals follow', body: 'animals that feed on fish decline; biodiversity falls', fill: C.cream, edge: C.olive },
  ];
  const y0 = 110 + topH + 60, gap = 46;
  const col = (x, items, head) => {
    let y = y0, s = t(x + W2 / 2, y0 - 16, head, { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
    const hs = items.map((it) => cardH(W2, { ...it, tsize: 19, bsize: 16 }));
    items.forEach((it, i) => { s += card(x, y, W2, { ...it, tsize: 19, bsize: 16, h: hs[i] }); if (i < items.length - 1) s += arrow(x + W2 / 2, y + hs[i] + 4, x + W2 / 2, y + hs[i] + gap - 6); y += hs[i] + gap; });
    return { s, end: y - gap };
  };
  const L = col(40, colL, 'Direct harm to fish'), R = col(460, colR, 'Harm through the food web');
  const conn = parrow([[380, 110 + topH], [380, 110 + topH + 18], [240, 110 + topH + 18], [240, y0 - 40]], {}) + parrow([[520, 110 + topH], [520, 110 + topH + 18], [660, 110 + topH + 18], [660, y0 - 40]], {});
  add('03-impacts-water',
    svg(900, Math.max(L.end, R.end) + 30, 'Impacts on lakes, rivers and food webs', top + conn + L.s + R.s),
    'Flow chart. Acidified lakes and rivers lead down two paths: aluminium released from soils damages fish gills so fish populations fall; and invertebrates die out, so fish lose food and the birds and mammals that eat fish decline.',
    'Acid harms fish directly and starves the rest of the food web from below.',
    '## Impacts (4.3.2)');
}

// 04 Impacts on soils, plants and buildings
{
  const cols = [
    ['Soils', [
      { title: 'Nutrients washed out', body: 'calcium and magnesium leave the soil' },
      { title: 'Aluminium released', body: 'it damages roots' },
      { title: 'Trees and crops struggle', body: 'to take up water and nutrients', fill: C.cream, edge: C.olive },
    ]],
    ['Leaves', [
      { title: 'Leaves damaged', body: 'by acid deposits' },
      { title: 'Defoliation', body: 'weakened trees lose leaves or needles' },
      { title: 'Less photosynthesis', body: 'growth slows and crop yields fall', fill: C.cream, edge: C.olive },
    ]],
    ['Buildings', [
      { title: 'Limestone and marble', body: 'calcium carbonate reacts with acid: carvings and statues wear away' },
      { title: 'Iron and steel', body: 'corrode faster' },
      { title: 'High repair costs', body: 'and cultural heritage is lost', fill: C.cream, edge: C.olive },
    ]],
  ];
  const W3 = 262, gap = 44, y0 = 170;
  const rowH = [0, 1, 2].map((i) => Math.max(...cols.map(([, it]) => cardH(W3, { ...it[i], tsize: 19, bsize: 16 }))));
  let s = '';
  cols.forEach(([head, items], c) => {
    const x = 30 + c * (W3 + 27);
    s += tag(x + W3 / 2, 135, head, { size: 19, anchor: 'middle', fill: c === 2 ? C.rock : C.teal, edge: C.ink, weight: 700 });
    let y = y0;
    items.forEach((it, i) => { s += card(x, y, W3, { ...it, tsize: 19, bsize: 16, h: rowH[i] }); if (i < 2) s += arrow(x + W3 / 2, y + rowH[i] + 4, x + W3 / 2, y + rowH[i] + gap - 6); y += rowH[i] + gap; });
  });
  const H = y0 + rowH.reduce((a, b) => a + b, 0) + 2 * gap + 30;
  add('04-impacts-land',
    svg(900, H, 'Impacts on soils, plants and buildings', s),
    'Three columns of cause and effect. Soils: calcium and magnesium are washed out and aluminium damages roots, so plants struggle to take up water and nutrients. Leaves: acid damage and defoliation reduce photosynthesis and crop yields. Buildings: limestone, marble and metals are worn away or corroded.',
    'Each impact is a short chain: give the impact and the reason for it.',
    '## Impacts (4.3.2)');
}

// 05 How the three strategies work
{
  // FGD panel
  const P1 = panel(30, 110, 840, 300);
  const fgd = t(54, 148, 'Flue-gas desulfurisation (power stations)', { size: 21, weight: 700 }) +
    rect(60, 220, 120, 110, C.panel, { stroke: C.ink, sw: 3 }) + t(120, 268, 'boiler', { size: 16, weight: 600, anchor: 'middle' }) + t(120, 290, 'burns coal', { size: 16, anchor: 'middle', fill: C.muted }) +
    arrow(184, 275, 300, 275, { w: 5, color: C.rust, marker: 'ahR' }) + t(242, 262, 'flue gas', { size: 15, anchor: 'middle', fill: C.rust, weight: 600 }) + t(242, 300, 'with SO₂', { size: 15, anchor: 'middle', fill: C.rust, weight: 600 }) +
    rect(305, 190, 200, 160, C.tealLight, { stroke: C.ink, sw: 3, rx: 10 }) + t(405, 222, 'scrubber', { size: 18, weight: 700, anchor: 'middle' }) +
    [335, 365, 395, 425, 455, 475].map((x, i) => line(x, 238, x - 6, 262 + (i % 2) * 10, C.blue, 3)).join('') +
    t(405, 296, 'slurry of calcium', { size: 15, anchor: 'middle' }) + t(405, 314, 'carbonate or oxide', { size: 15, anchor: 'middle' }) + t(405, 332, 'reacts with SO₂', { size: 15, anchor: 'middle', weight: 600 }) +
    parrow([[505, 230], [560, 230], [560, 175]], { w: 5, color: C.tealDark, marker: 'ahT' }) + rect(548, 150, 24, 0, C.ink) +
    t(585, 200, 'cleaner gas leaves', { size: 16, weight: 600, fill: C.tealDark }) + t(585, 220, 'the chimney', { size: 16, weight: 600, fill: C.tealDark }) +
    arrow(505, 320, 640, 320, { w: 4 }) + rect(648, 290, 200, 66, C.cream, { stroke: C.olive, sw: 2.5, rx: 10 }) + t(748, 318, 'solid calcium', { size: 16, weight: 600, anchor: 'middle' }) + t(748, 340, 'compound', { size: 16, weight: 600, anchor: 'middle' }) +
    t(748, 384, 'used to make plasterboard', { size: 15, anchor: 'middle', fill: C.muted });
  // catalytic converter panel
  const P2 = panel(30, 430, 410, 300);
  const cc = t(54, 468, 'Catalytic converter (vehicles)', { size: 21, weight: 700 }) +
    rect(150, 540, 150, 80, C.rock, { stroke: C.ink, sw: 3, rx: 30 }) + t(225, 576, 'catalyst', { size: 17, weight: 700, anchor: 'middle' }) + t(225, 598, 'once warm', { size: 15, anchor: 'middle', fill: C.muted }) +
    arrow(52, 580, 146, 580, { w: 5, color: C.rust, marker: 'ahR' }) + t(60, 562, 'NOₓ in', { size: 16, weight: 700, fill: C.rust }) +
    arrow(304, 580, 410, 580, { w: 5, color: C.tealDark, marker: 'ahT' }) + t(310, 562, 'out:', { size: 16, weight: 700, fill: C.tealDark }) +
    t(54, 660, 'Oxides of nitrogen are converted', { size: 16 }) + t(54, 682, 'into nitrogen and oxygen before', { size: 16 }) + t(54, 704, 'they leave the exhaust pipe.', { size: 16 }) +
    t(310, 612, 'nitrogen +', { size: 15, weight: 600, fill: C.tealDark }) + t(310, 630, 'oxygen', { size: 15, weight: 600, fill: C.tealDark });
  // transport policies panel
  const P3 = panel(460, 430, 410, 300);
  const pol = ['public transport', 'congestion charges', 'low-emission zones', 'park-and-ride', 'cycle lanes', 'electric vehicles'];
  const tp = t(484, 468, 'Transport policies', { size: 21, weight: 700 }) +
    pol.map((p, i) => tag(484 + (i % 2) * 190, 510 + Math.floor(i / 2) * 44, p, { size: 15, fill: C.tealLight, edge: C.tealDark })).join('') +
    arrow(665, 630, 665, 662, { w: 4 }) + t(665, 692, 'fewer vehicle journeys,', { size: 17, weight: 700, anchor: 'middle' }) + t(665, 714, 'so less oxides of nitrogen', { size: 17, weight: 700, anchor: 'middle' });
  add('05-management-strategies',
    svg(900, 760, 'Three ways to cut the gases at source', P1 + fgd + P2 + cc + P3 + tp),
    'Top: flue gas containing sulfur dioxide passes from a boiler into a scrubber, where a slurry of calcium carbonate or calcium oxide reacts with it; cleaner gas leaves the chimney and a solid calcium compound is produced for plasterboard. Bottom left: a catalytic converter turns oxides of nitrogen into nitrogen and oxygen. Bottom right: six transport policies that cut vehicle journeys.',
    'Desulfurisation removes sulfur dioxide; converters and transport policies tackle oxides of nitrogen.',
    '## Management strategies (4.3.3)');
}

// 06 Match the strategy to the source
{
  const src = [
    ['Power stations and factories', 'sulfur dioxide', 175],
    ['Vehicles', 'oxides of nitrogen', 385],
  ];
  const strat = [
    ['Flue-gas desulfurisation', 'removes most SO₂ from large single sources', 'expensive; needs quarried limestone; releases carbon dioxide; does nothing for vehicles', 140],
    ['Catalytic converters', 'cut NOₓ from every fitted vehicle', 'not until warm, so short journeys less effective; rare, costly metals; no cut in carbon dioxide', 300],
    ['Transport policies', 'cut several pollutants, congestion and carbon dioxide', 'can be unpopular; need good alternatives; slow to change habits; fewer rural options', 460],
  ];
  let s = '';
  src.forEach(([a, b, y]) => { s += card(30, y - 55, 230, { title: a, body: b, tsize: 19, bsize: 17, h: 110, fill: C.rock, edge: C.ink, center: true, bfill: C.ink }); });
  strat.forEach(([a, ben, lim, y]) => {
    s += panel(330, y - 20, 540, 140);
    s += t(350, y + 10, a, { size: 20, weight: 700 });
    s += t(350, y + 38, '+', { size: 20, weight: 700, fill: C.tealDark }) + para(372, y + 38, ben, 480, { size: 16, fill: C.tealDark, weight: 600 });
    const yl = y + 38 + ph(ben, 480, { size: 16, weight: 600 }) + 4;
    s += t(350, yl, '−', { size: 20, weight: 700, fill: C.rust }) + para(372, yl, lim, 480, { size: 16, fill: C.muted });
  });
  s += arrow(262, 175, 324, 190, { w: 4 }) + arrow(262, 385, 324, 330, { w: 4 }) + arrow(262, 395, 324, 500, { w: 4 });
  s += card(30, 620, 840, { title: 'All three act at source', body: 'They prevent future acid rain, but they do not repair lakes and soils that are already acidified: these can take many years to recover.', fill: C.cream, edge: C.olive, tsize: 19, bsize: 17 });
  add('06-match-strategy-to-source',
    svg(900, 620 + cardH(840, { title: 'All three act at source', body: 'They prevent future acid rain, but they do not repair lakes and soils that are already acidified: these can take many years to recover.', tsize: 19, bsize: 17 }) + 30, 'Match each strategy to its source', s),
    'Arrows link power stations and factories (sulfur dioxide) to flue-gas desulfurisation, and vehicles (oxides of nitrogen) to catalytic converters and transport policies. Each strategy lists its main benefit and limitations. A note says all three act at source and do not repair lakes and soils already acidified.',
    'In a discuss answer, pair each strategy with the source in the scenario, then weigh it.',
    '## Benefits and limitations (4.3.4)');
}

// 07 Worked example graph: pH downwind before and after FGD
{
  const ch = chart(150, 140, 640, 380, { xmin: 0, xmax: 200, ymin: 4, ymax: 6, xticks: [0, 50, 100, 150, 200], yticks: [4, 4.5, 5, 5.5, 6], xlabel: 'Distance downwind of power station (km)', ylabel: 'Rainwater pH', yfmt: (v) => v.toFixed(1) });
  const before = [[10, 4.2], [50, 4.4], [200, 4.8]], after = [[10, 5.0], [50, 5.1], [200, 5.3]];
  const pl = (pts, col, dash = '') => `<polyline points="${pts.map(([a, b]) => `${ch.X(a)},${ch.Y(b)}`).join(' ')}" fill="none" stroke="${col}" stroke-width="4"${dash ? ` stroke-dasharray="${dash}"` : ''}/>` + pts.map(([a, b]) => dot(ch.X(a), ch.Y(b), 7, col)).join('');
  let s = ch.svg + line(ch.X(0), ch.Y(5.6), ch.X(200), ch.Y(5.6), C.ink, 2.5, '10 7') + t(ch.X(200) - 6, ch.Y(5.6) - 10, 'normal rain, about pH 5.6', { size: 16, anchor: 'end', weight: 600 });
  s += pl(before, C.rust) + pl(after, C.tealDark);
  before.forEach(([a, b]) => { s += t(ch.X(a) + (a === 200 ? -12 : 12), ch.Y(b) + 24, b.toFixed(1), { size: 16, weight: 700, fill: C.rust, anchor: a === 200 ? 'end' : 'start' }); });
  after.forEach(([a, b]) => { s += t(ch.X(a) + (a === 200 ? -12 : 12), ch.Y(b) - 14, b.toFixed(1), { size: 16, weight: 700, fill: C.tealDark, anchor: a === 200 ? 'end' : 'start' }); });
  s += line(170, 625, 210, 625, C.rust, 4) + dot(190, 625, 6, C.rust) + t(222, 631, 'before desulfurisation', { size: 17 });
  s += line(470, 625, 510, 625, C.tealDark, 4) + dot(490, 625, 6, C.tealDark) + t(522, 631, 'after desulfurisation', { size: 17 });
  s += t(450, 672, 'Invented practice data. pH rose at every site, but stayed below 5.6.', { size: 16, anchor: 'middle', fill: C.muted });
  add('07-ph-downwind-graph',
    svg(900, 700, 'Rain pH downwind of a power station', s),
    'Line graph of rainwater pH against distance downwind (10, 50 and 200 km). Before desulfurisation pH rises from 4.2 to 4.8 with distance; after, from 5.0 to 5.3. Both lines stay below the dashed normal-rain line at about pH 5.6.',
    'Rain is most acidic near the source; desulfurisation raised pH everywhere but not to normal.',
    '## Worked example 1: interpreting pH data');
}
