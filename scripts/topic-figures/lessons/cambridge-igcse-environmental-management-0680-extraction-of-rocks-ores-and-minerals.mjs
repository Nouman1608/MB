// Topic figures for cambridge-igcse-environmental-management-0680-extraction-of-rocks-ores-and-minerals
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

export const slug = 'cambridge-igcse-environmental-management-0680-extraction-of-rocks-ores-and-minerals';

// 01 Surface extraction: open-pit and strip mining
{
  let s = panel(30, 110, 840, 330) + t(54, 146, 'Open-pit (opencast, open-cut) mining', { size: 21, weight: 700 });
  const G = 220;
  // ground and pit with benches
  const pit = `M32,${G} L230,${G} L260,${G + 30} L300,${G + 30} L330,${G + 60} L370,${G + 60} L400,${G + 90} L500,${G + 90} L530,${G + 60} L570,${G + 60} L600,${G + 30} L640,${G + 30} L670,${G} L868,${G} L868,${G + 196} L32,${G + 196} Z`;
  s += `<path d="${pit}" fill="${C.rock}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  s += rect(32, G, 198, 26, C.cream, { stroke: C.ink, sw: 1.5 }) + rect(670, G, 198, 26, C.cream, { stroke: C.ink, sw: 1.5 });
  s += rect(250, G + 90, 400, 50, C.rockDark);
  s += t(450, G + 122, 'deposit', { size: 17, weight: 700, anchor: 'middle', fill: C.panel });
  s += t(130, G + 18, 'overburden', { size: 15, weight: 700, anchor: 'middle' });
  s += line(330, G - 22, 312, G + 26, C.ink, 2) + t(300, G - 46, 'benches stop the walls collapsing;', { size: 15, weight: 600 }) + t(300, G - 28, 'ramps let trucks climb out', { size: 15, weight: 600 });
  s += `<path d="M740,${G} Q790,${G - 60} 840,${G} Z" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>` + t(790, G + 46, 'waste heap', { size: 15, weight: 600, anchor: 'middle' });
  // strip mining
  const y2 = 460;
  const lbl = t(855, y2 + 66, 'next strip’s overburden is dumped into the gap', { size: 15, weight: 700, fill: C.olive, anchor: 'end' });
  s += panel(30, y2, 840, 300) + t(54, y2 + 36, 'Strip mining (thin, flat seam near the surface)', { size: 21, weight: 700 });
  const g2 = y2 + 110, sw = 130;
  for (let i = 0; i < 6; i++) {
    const x = 60 + i * sw;
    if (i < 2) s += `<path d="M${x},${g2 + 10} Q${x + sw / 2},${g2 - 20} ${x + sw},${g2 + 10} L${x + sw},${g2 + 90} L${x},${g2 + 90} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="2"/>`;
    if (i === 2) s += rect(x, g2 + 90, sw, 0, C.ink) + `<path d="M${x},${g2 + 90} L${x + sw},${g2 + 90}" stroke="${C.ink}" stroke-width="2"/>`;
    if (i >= 3) s += rect(x, g2, sw, 70, C.cream, { stroke: C.ink, sw: 2 }) + rect(x, g2 + 70, sw, 20, C.ink);
    s += rect(x, g2 + 90, sw, 40, C.rockDark, { stroke: C.ink, sw: 1.5 });
  }
  s += t(60 + 2.5 * sw, g2 + 80, 'seam taken', { size: 15, weight: 700, anchor: 'middle' });
  s += t(60 + sw, g2 - 30, 'filled with overburden earlier', { size: 15, weight: 700, anchor: 'middle' });
  s += t(60 + 4.5 * sw, g2 + 50, 'overburden', { size: 15, weight: 600, anchor: 'middle' }) + t(60 + 4.5 * sw, g2 + 86, 'seam', { size: 15, weight: 700, anchor: 'middle', fill: C.panel });
  s += carrow(60 + 3.5 * sw, g2 - 4, 60 + 3 * sw, g2 - 70, 60 + 2.5 * sw, g2 + 34, { w: 3.5, color: C.olive, marker: 'ahO' });
  s += lbl;
  s += arrow(500, y2 + 270, 780, y2 + 270, { w: 4 }) + t(490, y2 + 276, 'mining moves this way, one strip at a time', { size: 15, anchor: 'end', fill: C.muted });
  s += notToScale(858, 434);
  add('01-surface-extraction',
    svg(900, y2 + 330, 'Surface extraction', s),
    'Top: an open pit dug through overburden down to a deposit, with stepped benches on the walls and a waste heap beside it. Bottom: strip mining of a flat seam; after the seam is taken from one strip, overburden from the next strip is dumped into the gap.',
    'Surface methods remove the overburden and dig the deposit out from above.',
    '## Methods of extraction');
}

// 02 Subsurface extraction
{
  const G = 200;
  let s = panel(30, 110, 840, 440);
  s += rect(32, G, 836, 348, C.rock) + line(32, G, 868, G, C.ink, 3);
  // headframe
  s += path(`M200,${G} L220,${G - 60} L240,${G}`, { w: 4 }) + rect(205, G - 66, 30, 10, C.ink);
  s += rect(212, G, 16, 300, C.panel, { stroke: C.ink, sw: 2.5 });
  // ore body inclined
  s += `<path d="M300,420 L780,340 L800,380 L320,460 Z" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2.5"/>` + t(620, 412, 'ore', { size: 16, weight: 700, fill: C.panel });
  s += rect(228, 430, 100, 14, C.panel, { stroke: C.ink, sw: 2 }) + rect(228, 340, 300, 14, C.panel, { stroke: C.ink, sw: 2 });
  s += `<path d="M520,340 L700,360 L700,374 L520,354 Z" fill="${C.panel}" stroke="${C.ink}" stroke-width="2"/>`;
  s += arrow(220, 470, 220, G + 8, { w: 3.5, color: C.olive, marker: 'ahO' });
  s += t(250, 236, 'shaft: workers, equipment and', { size: 15, weight: 600 }) + t(250, 254, 'air down; ore lifted up', { size: 15, weight: 600 });
  s += t(560, 326, 'horizontal tunnels follow the ore', { size: 15, weight: 600, anchor: 'middle' });
  // subsidence
  s += `<path d="M560,${G} Q620,${G + 22} 680,${G}" fill="${C.bg}" stroke="${C.ink}" stroke-width="2.5"/>` + t(620, G - 14, 'subsidence above old workings', { size: 15, weight: 600, anchor: 'middle', fill: C.rust });
  s += notToScale(858, 538);
  const risks = 'Smaller surface area disturbed and suits deep deposits, but more expensive, with risks of roof collapse, flooding, explosive gases and poor air.';
  s += card(30, 570, 840, { body: risks, bsize: 17, fill: C.cream, edge: C.olive });
  add('02-subsurface-extraction',
    svg(900, 570 + cardH(840, { body: risks, bsize: 17 }) + 30, 'Shaft and deep mining', s),
    'Cross-section of a vertical shaft from a headframe at the surface down to an inclined ore body, with horizontal tunnels that follow the ore. The ground above old workings has sunk. A note lists the benefits and risks of underground mining.',
    'Underground mining disturbs less land but costs more and is riskier for miners.',
    '## Methods of extraction');
}

// 03 Biological extraction
{
  let s = '';
  const row = (y, head, col, steps) => {
    let o = panel(30, y, 840, 200) + t(54, y + 38, head, { size: 21, weight: 700, fill: col });
    const bw = 182, gx = 20;
    steps.forEach((st, i) => { const x = 54 + i * (bw + gx); o += card(x, y + 62, bw, { body: st, bsize: 16, center: true, h: 108, pad: 12, fill: i === steps.length - 1 ? C.cream : C.panel, edge: i === steps.length - 1 ? C.olive : C.panelEdge }); if (i < steps.length - 1) o += arrow(x + bw + 2, y + 116, x + bw + gx - 3, y + 116, { w: 3 }); });
    return o;
  };
  s += row(110, 'Phytomining: plants', C.grass, ['plants grown on low-grade ore or waste', 'roots absorb metal compounds', 'plants harvested and burned', 'metal extracted from the ash']);
  s += row(330, 'Bioleaching: bacteria', C.tealDark, ['bacteria added to low-grade ore', 'bacteria break down the ore', 'metal compounds released into a leachate', 'metal recovered from the solution']);
  s += card(30, 550, 410, { title: 'Benefits', body: 'far less digging and energy; less waste; can use land already mined', tsize: 18, bsize: 16, fill: C.tealLight, edge: C.tealDark, h: 100 });
  s += card(460, 550, 410, { title: 'Limitations', body: 'slow; produce only small quantities of metal', tsize: 18, bsize: 16, fill: C.panel, edge: C.rust, h: 100 });
  add('03-biological-extraction',
    svg(900, 680, 'Biological extraction', s),
    'Two flow rows. Phytomining: plants grown on low-grade ore absorb metal compounds, are harvested and burned, and metal is extracted from the ash. Bioleaching: bacteria break down low-grade ore, releasing metal compounds into a leachate from which the metal is recovered. Benefits and limitations are listed below.',
    'Phytomining uses plants; bioleaching uses bacteria; both suit low-grade ore.',
    '## Methods of extraction');
}

// 04 Eight factors in the decision
{
  const groups = [
    ['Physical', C.teal, [['Exploration', 'surveys, satellite images, test drilling'], ['Geology', 'depth, shape, angle, rock hardness'], ['Accessibility and terrain', 'mountains, forest, remoteness'], ['Climate', 'cold, frozen ground, rain, heat']]],
    ['Deposit', C.cream, [['Quantity and quality', 'ore grade: share of useful metal in the rock']]],
    ['Economic and environmental', C.rock, [['Supply and demand', 'rising price makes poorer deposits worth mining'], ['Cost and profit', 'price must exceed all costs, including restoration'], ['EIA', 'can stop or change a project']]],
  ];
  let s = '';
  const cw = 270, gx = 15;
  let maxY = 0;
  groups.forEach(([head, fill, items], i) => {
    const x = 30 + i * (cw + gx);
    s += rect(x, 110, cw, 48, fill, { stroke: C.ink, sw: 2.5, rx: 12 }) + t(x + cw / 2, 141, head, { size: 17, weight: 700, anchor: 'middle' });
    let y = 172;
    items.forEach(([a, b]) => { const h = cardH(cw, { title: a, body: b, tsize: 17, bsize: 15, pad: 12 }); s += card(x, y, cw, { title: a, body: b, tsize: 17, bsize: 15, pad: 12, h }); y += h + 10; });
    maxY = Math.max(maxY, y);
  });
  const yb = maxY + 50;
  groups.forEach((g, i) => { const x = 30 + i * (cw + gx) + cw / 2; s += arrow(x, maxY + 4, 450 + (i - 1) * 120, yb - 6, { w: 3.5 }); });
  s += card(150, yb, 600, { title: 'Mine opens only if', body: 'it is expected to make a profit and its impacts are acceptable', tsize: 20, bsize: 17, center: true, fill: C.mustard, edge: C.ink });
  add('04-decision-factors',
    svg(900, yb + cardH(600, { title: 'Mine opens only if', body: 'it is expected to make a profit and its impacts are acceptable', tsize: 20, bsize: 17 }) + 30, 'Should the deposit be mined?', s),
    'Eight factors in three groups feed one decision. Physical: exploration, geology, accessibility and terrain, climate. Deposit: quantity and quality (ore grade). Economic and environmental: supply and demand, cost and profit, and the environmental impact assessment. A mine opens only if it should make a profit and its impacts are acceptable.',
    'Profit and acceptable impacts decide; the eight factors feed into both.',
    '## Factors in the decision to extract');
}

// 05 Life of a mine and what happens to the land
{
  const stages = [['Before', 'exploration, EIA, restoration plan and money set aside'], ['During', 'extraction; impacts on land, air, water and people'], ['After', 'restore the land or repurpose it']];
  let s = '';
  stages.forEach(([a, b], i) => { const x = 30 + i * 285; s += card(x, 110, 270, { title: a, body: b, tsize: 19, bsize: 15, h: 104, pad: 14, fill: i === 0 ? C.cream : C.panel, edge: i === 0 ? C.olive : C.panelEdge }); if (i < 2) s += arrow(x + 272, 162, x + 283, 162, { w: 3 }); });
  s += panel(30, 240, 410, 380) + panel(460, 240, 410, 380);
  s += t(54, 276, 'Land restoration', { size: 21, weight: 700, fill: C.tealDark }) + t(484, 276, 'Repurposing land', { size: 21, weight: 700, fill: C.olive });
  const L = [['Replace overburden', 'refill the pit, recreate the slope'], ['Soil improvement', 'topsoil, organic matter, fertiliser'], ['Bioremediation', 'bacteria or plants break down or absorb pollutants'], ['Tree planting', 'roots bind soil; habitat returns']];
  const R = [['Landfill', 'fill the pit with waste, then cap it'], ['Lakes', 'pits below the water table fill with water'], ['Recreation', 'parks, water sports, golf courses'], ['Nature reserves', 'wetland and woodland habitats']];
  L.forEach(([a, b], i) => { s += t(54, 316 + i * 80, a, { size: 17, weight: 700 }) + para(54, 338 + i * 80, b, 370, { size: 15, fill: C.muted }); });
  R.forEach(([a, b], i) => { s += t(484, 316 + i * 80, a, { size: 17, weight: 700 }) + para(484, 338 + i * 80, b, 370, { size: 15, fill: C.muted }); });
  s += card(30, 640, 840, { body: 'Restoration only happens if it is planned and paid for before mining starts, so laws often require companies to set money aside.', bsize: 17, fill: C.cream, edge: C.olive });
  add('05-mine-life-and-land',
    svg(900, 640 + cardH(840, { body: 'Restoration only happens if it is planned and paid for before mining starts, so laws often require companies to set money aside.', bsize: 17 }) + 30, 'The life of a mine and its land', s),
    'A timeline from before mining (exploration, EIA, restoration plan) through extraction to after closure. Two panels list the options for the land: restoration by replacing overburden, soil improvement, bioremediation and tree planting; or repurposing as landfill, lakes, recreation or nature reserves.',
    'Plan and fund restoration before mining starts, or it may never happen.',
    '## Managing damaged landscapes');
}

// 06 Ore grade calculation
{
  const ch = chart(170, 140, 420, 360, { xmin: 0, xmax: 2, ymin: 0, ymax: 16000, xticks: [], yticks: [0, 4000, 8000, 12000, 16000], ylabel: 'Ore to dig and process (tonnes)', yfmt: (v) => v.toLocaleString('en-GB') });
  let s = ch.svg;
  s += rect(220, ch.Y(5000), 130, ch.Y(0) - ch.Y(5000), C.mustard, { stroke: C.ink }) + rect(410, ch.Y(15000), 130, ch.Y(0) - ch.Y(15000), C.rockDark, { stroke: C.ink });
  s += t(285, ch.Y(5000) - 12, '5,000 t', { size: 19, weight: 700, anchor: 'middle' }) + t(475, ch.Y(15000) - 12, '15,000 t', { size: 19, weight: 700, anchor: 'middle' });
  s += t(285, 532, 'Deposit X', { size: 17, weight: 700, anchor: 'middle' }) + t(285, 554, 'grade 1.2%', { size: 16, anchor: 'middle', fill: C.muted }) + t(475, 532, 'Deposit Y', { size: 17, weight: 700, anchor: 'middle' }) + t(475, 554, 'grade 0.4%', { size: 16, anchor: 'middle', fill: C.muted });
  s += panel(620, 150, 250, 340) + t(640, 186, 'For 60 t of copper', { size: 18, weight: 700 });
  s += t(640, 226, 'X: 60 ÷ 0.012', { size: 17 }) + t(640, 250, '= 5,000 t of ore', { size: 17, weight: 700 });
  s += t(640, 296, 'Y: 60 ÷ 0.004', { size: 17 }) + t(640, 320, '= 15,000 t of ore', { size: 17, weight: 700 });
  s += para(640, 370, 'Three times the rock: more cost, energy, water and waste for the same copper.', 210, { size: 15, fill: C.rust, weight: 600 });
  add('06-ore-grade',
    svg(900, 590, 'Why ore grade matters', s),
    'Bar chart of ore needed for 60 tonnes of copper: 5,000 tonnes from deposit X at 1.2% grade and 15,000 tonnes from deposit Y at 0.4% grade, three times as much rock.',
    'A lower grade means more rock dug, moved and processed for each tonne of metal.',
    '## Worked example 1: ore grade calculation');
}
