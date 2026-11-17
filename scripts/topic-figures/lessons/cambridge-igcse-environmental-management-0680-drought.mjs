// Topic figures for cambridge-igcse-environmental-management-0680-drought
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

export const slug = 'cambridge-igcse-environmental-management-0680-drought';

// 01 Drought is measured against normal
{
  let s = '';
  const pane = (x, head, normal, now, verdict, good) => {
    let o = panel(x, 110, 410, 470) + t(x + 205, 148, head, { size: 22, weight: 700, anchor: 'middle' });
    const base = 450, sc = 1.0;
    o += line(x + 50, base, x + 360, base, C.ink, 2.5);
    o += rect(x + 80, base - normal * sc, 100, normal * sc, C.panel, { stroke: C.ink, sw: 2.5, dash: '8 6' }) + rect(x + 230, base - now * sc, 100, now * sc, C.teal, { stroke: C.ink, sw: 2.5 });
    o += t(x + 130, base + 28, 'normal', { size: 16, weight: 600, anchor: 'middle' }) + t(x + 280, base + 28, 'this year', { size: 16, weight: 600, anchor: 'middle' });
    o += card(x + 30, 500, 350, { title: verdict[0], body: verdict[1], tsize: 19, bsize: 16, center: true, h: 64, fill: good ? C.tealLight : C.cream, edge: good ? C.tealDark : C.olive, pad: 10 });
    return o;
  };
  s += pane(30, 'Desert', 60, 55, ['Not a drought', 'dry, but close to its normal'], true);
  s += pane(460, 'Rainforest region', 270, 120, ['Drought', 'well below its own normal'], false);
  s += line(520, 450 - 60, 800, 450 - 60, C.rust, 2.5, '6 6') + t(806, 450 - 64, 'desert’s', { size: 15, fill: C.rust, weight: 600 }) + t(806, 450 - 46, 'normal', { size: 15, fill: C.rust, weight: 600 });
  s += t(450, 612, 'Bar heights are illustrative: rainfall in a year.', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  const def = 'Drought: a period of dry weather that is longer or more severe than normal.';
  s += card(30, 630, 840, { body: def, bsize: 19, bweight: 700, fill: C.cream, edge: C.olive, center: true });
  add('01-measured-against-normal',
    svg(900, 630 + cardH(840, { body: 'Drought: a period of dry weather that is longer or more severe than normal.', bsize: 19, bweight: 700 }) + 30, 'Drought is measured against normal', s),
    'Two sketch bar charts of yearly rainfall. A desert receives close to its normal small amount, so it is not in drought. A rainforest region receives far less than its own normal, so it is in drought, even though it still gets more rain than the desert’s normal.',
    'Compare rainfall with what the place normally receives, not with other places.',
    '## Definition (6.4.1)');
}

// 02 Causes
{
  let s = '';
  s += card(30, 110, 400, { title: 'Lack of rain', body: 'rainfall well below normal for a long period: wet-season rains arrive late, end early or fail', tsize: 20, bsize: 16, fill: C.tealLight, edge: C.tealDark, h: 130 });
  s += card(470, 110, 400, { title: 'Climate change', tsize: 20, fill: C.rock, edge: C.ink, h: 56, center: true });
  const sh = Math.max(cardH(190, { title: 'Higher global temperatures', body: 'more evaporation and transpiration', tsize: 17, bsize: 15, pad: 12 }), cardH(190, { title: 'More extreme weather events', body: 'longer, more intense dry spells and heatwaves', tsize: 17, bsize: 15, pad: 12 }));
  s += card(470, 190, 190, { title: 'Higher global temperatures', body: 'more evaporation and transpiration', tsize: 17, bsize: 15, h: sh, pad: 12 });
  s += card(680, 190, 190, { title: 'More extreme weather events', body: 'longer, more intense dry spells and heatwaves', tsize: 17, bsize: 15, h: sh, pad: 12 });
  s += arrow(565, 166, 565, 184, { w: 3 }) + arrow(775, 166, 775, 184, { w: 3 });
  s += arrow(230, 244, 330, 344, { w: 4 }) + arrow(565, 194 + sh, 520, 344, { w: 4 }) + arrow(775, 194 + sh, 580, 344, { w: 4 });
  s += card(200, 350, 500, { title: 'Water stores not refilled or dry out faster', body: 'rivers, soil moisture, reservoirs and ground water', tsize: 19, bsize: 16, center: true, fill: C.panel, edge: C.ink });
  const h2 = cardH(500, { title: 'Water stores not refilled or dry out faster', body: 'rivers, soil moisture, reservoirs and ground water', tsize: 19, bsize: 16 });
  s += arrow(450, 350 + h2 + 4, 450, 350 + h2 + 40, { w: 4 });
  const y3 = 350 + h2 + 46;
  s += card(300, y3, 300, { title: 'Drought', tsize: 22, center: true, h: 56, fill: C.mustard, edge: C.ink });
  s += card(30, y3 + 80, 840, { body: 'Human water use is not a named cause, but over-pumped aquifers make the impacts worse.', bsize: 16, fill: C.panel, edge: C.panelEdge, dash: '8 6', center: true });
  add('02-causes',
    svg(900, y3 + 80 + 54 + 30, 'Two causes of drought', s),
    'Lack of rain and climate change both lead to water stores not being refilled or drying out faster. Climate change works through higher temperatures, which increase evaporation and transpiration, and more extreme weather events. The result is drought. A note says human water use is not a named cause but worsens the impacts.',
    'Name both syllabus causes; human water use only makes the impacts worse.',
    '## Causes (6.4.2)');
}

// 03 Impact chains
{
  let s = '';
  const box = (x, y, w, txt, o = {}) => card(x, y, w, { title: txt, tsize: 17, center: true, h: 58, pad: 10, ...o });
  s += box(330, 110, 240, 'Lack of water', { fill: C.mustard, edge: C.ink, tsize: 19 });
  // main famine chain (centre column)
  const chain = ['Crops fail, livestock die', 'Food prices rise, stores run out', 'Famine', 'Malnutrition and migration'];
  chain.forEach((c, i) => { const y = 210 + i * 92; s += box(330, y, 240, c, i === 2 ? { fill: C.rock, edge: C.ink } : {}); s += arrow(450, y - 34, 450, y - 4, { w: 3.5 }); });
  // left: soil chain
  s += parrow([[330, 137], [140, 137], [140, 204]], { w: 3 });
  s += box(30, 210, 220, 'Dry, bare soil');
  s += arrow(140, 268, 140, 298) + box(30, 302, 220, 'Soil erosion') + arrow(140, 360, 140, 390) + box(30, 394, 220, 'Desertification', { fill: C.cream, edge: C.olive });
  // right: fire chain
  s += parrow([[570, 137], [760, 137], [760, 204]], { w: 3 });
  s += box(650, 210, 220, 'Dry vegetation') + arrow(760, 268, 760, 298) + box(650, 302, 220, 'Wildfires') + arrow(760, 360, 760, 390) + box(650, 394, 220, 'Poorer air quality', { fill: C.cream, edge: C.olive }) + arrow(760, 452, 760, 482) + box(650, 486, 220, 'Breathing problems');
  s += tl(140, 492, ['dust from dry soil also', 'lowers air quality'], { size: 15, anchor: 'middle', fill: C.muted, italic: true }, 20);
  const fin = 'Also: water sources dry up; loss of habitats and death of organisms; financial losses (farm income, food prices, hydro-electric output); health from dehydration, malnutrition and unsafe water.';
  s += card(30, 600, 840, { body: fin, bsize: 16, fill: C.panel, edge: C.panelEdge });
  add('03-impact-chains',
    svg(900, 600 + cardH(840, { body: fin, bsize: 16 }) + 30, 'Impacts of drought as chains', s),
    'Lack of water branches into three chains. Centre: crops fail and livestock die, food prices rise and stores run out, leading to famine, malnutrition and migration. Left: dry, bare soil is eroded, leading to desertification. Right: dry vegetation feeds wildfires that reduce air quality and cause breathing problems.',
    'Explain impacts as chains: lack of water, then the effect, then the consequence.',
    '## Impacts on people and the environment (6.4.3)');
}

// 04 Four ways to increase water supply (schematic landscape)
{
  const G = 400;
  let s = panel(30, 110, 840, 440);
  s += rect(32, G, 836, 148, C.cream) + rect(32, G + 70, 836, 50, C.tealLight, { op: 0.9 }) + t(390, G + 101, 'aquifer: ground water stored in rock', { size: 15, weight: 600, fill: C.tealDark });
  s += line(32, G, 868, G, C.ink, 3);
  // dam + reservoir (left)
  s += `<path d="M40,${G} Q60,${G - 70} 120,${G - 60} L170,${G - 60} L170,${G} Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + `<path d="M170,${G - 80} L190,${G - 80} L205,${G} L170,${G} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3"/>`;
  s += t(110, G - 120, '1 Dam and', { size: 17, weight: 700, anchor: 'middle' }) + t(110, G - 99, 'reservoir', { size: 17, weight: 700, anchor: 'middle' });
  // well
  s += rect(330, G - 40, 40, 40, C.rock, { stroke: C.ink }) + line(350, G, 350, G + 105, C.ink, 5) + `<path d="M330,${G - 40} L350,${G - 62} L370,${G - 40}" fill="none" stroke="${C.ink}" stroke-width="3"/>`;
  s += arrow(362, G + 96, 362, G + 6, { w: 3.5, color: C.blue });
  s += t(350, G - 120, '2 Wells into', { size: 17, weight: 700, anchor: 'middle' }) + t(350, G - 99, 'an aquifer', { size: 17, weight: 700, anchor: 'middle' });
  // house with rainwater tank
  s += rect(500, G - 90, 110, 90, C.panel, { stroke: C.ink, sw: 3 }) + `<path d="M490,${G - 90} L555,${G - 140} L620,${G - 90} Z" fill="${C.rust}" stroke="${C.ink}" stroke-width="3"/>` + path(`M620,${G - 90} L632,${G - 90} L632,${G - 60}`, { w: 3 }) + rect(616, G - 58, 34, 58, C.teal, { stroke: C.ink, sw: 2.5, rx: 4 });
  [[515, 200], [545, 212], [580, 200], [610, 212]].forEach(([x, y]) => { s += line(x, y, x - 6, y + 24, C.blue, 3); });
  s += t(560, G - 222, '3 Rainwater harvesting', { size: 17, weight: 700, anchor: 'middle' });
  // coast + desalination
  s += `<path d="M720,${G} L868,${G} L868,${G + 148} L700,${G + 148} Z" fill="${C.teal}"/>` + line(720, G, 868, G, C.tealDark, 2.5) + t(800, G + 40, 'sea', { size: 16, weight: 600, fill: C.tealDark, anchor: 'middle' });
  s += rect(690, G - 70, 90, 70, C.panel, { stroke: C.ink, sw: 3 }) + t(735, G - 30, 'plant', { size: 15, weight: 600, anchor: 'middle' });
  s += arrow(830, G + 20, 785, G - 30, { w: 3.5, color: C.blue }) + arrow(686, G - 35, 650, G - 35, { w: 3, color: C.blue });
  s += t(780, G - 120, '4 Desalination', { size: 17, weight: 700, anchor: 'middle' }) + t(780, G - 99, 'removes salt', { size: 15, anchor: 'middle', fill: C.muted });
  s += notToScale(858, 540);
  const other = [['Monitoring and warning', 'rainfall, rivers, reservoirs, soil moisture, satellites'], ['Emergency supplies', 'tankers, bottled water, standpipes'], ['Water conservation', 'bans, fixing leaks, drip irrigation, greywater'], ['International aid', 'food, water, money, medical help']];
  const ow = 201, oh = Math.max(...other.map(([a, b]) => cardH(ow, { title: a, body: b, tsize: 17, bsize: 15, pad: 12 })));
  s += t(450, 590, 'The other four strategies', { size: 19, weight: 700, anchor: 'middle' });
  other.forEach(([a, b], i) => { s += card(30 + i * 213, 606, ow, { title: a, body: b, tsize: 17, bsize: 15, pad: 12, h: oh }); });
  add('04-strategies',
    svg(900, 606 + oh + 30, 'Managing drought: increasing supply and more', s),
    'Cross-section showing four ways to increase water supply: a dam storing a reservoir, a well drawing ground water from an aquifer, a house collecting rainwater from its roof into a tank, and a coastal desalination plant taking in sea water. Below, cards list monitoring and warning, emergency supplies, water conservation and international aid.',
    'Increasing supply means storing, pumping, collecting or making fresh water.',
    '## Managing the impacts (6.4.4)');
}

// 05 Judgement: no single strategy is enough
{
  const tiers = [
    ['Cheap, and work everywhere', ['Water conservation', 'Monitoring and warning'], C.tealLight, C.tealDark],
    ['Cost more, but longer-term security', ['Dams and reservoirs', 'Aquifers and wells', 'Desalination', 'Rainwater harvesting'], C.panel, C.ink],
    ['Last resort when a drought becomes a famine', ['International aid'], C.cream, C.olive],
  ];
  let s = '';
  tiers.forEach(([head, items, fill, edge], i) => {
    const y = 110 + i * 150;
    s += rect(30, y, 840, 130, fill, { stroke: edge, sw: 2.5, rx: 14 }) + t(54, y + 38, head, { size: 20, weight: 700 });
    let x = 54;
    items.forEach((it) => { const w = tw(it, 16, 600) + 24; s += tag(x, y + 88, it, { size: 16, fill: C.panel, edge }); x += w + 12; });
  });
  s += card(30, 570, 840, { body: 'No single strategy is enough. For each one, give a benefit, a limitation and the situation it suits: desalination, for example, only for wealthy coastal areas.', bsize: 17, fill: C.panel, edge: C.panelEdge });
  add('05-judgement',
    svg(900, 570 + cardH(840, { body: 'No single strategy is enough. For each one, give a benefit, a limitation and the situation it suits: desalination, for example, only for wealthy coastal areas.', bsize: 17 }) + 30, 'Building a judgement on drought strategies', s),
    'Three bands. Cheap and work everywhere: water conservation and monitoring and warning. Cost more but give longer-term security: dams and reservoirs, aquifers and wells, desalination and rainwater harvesting. Last resort when drought becomes famine: international aid.',
    'Combine cheap, everyday measures with supply schemes; keep aid for when drought becomes famine.',
    '## Discussing the strategies (6.4.5)');
}

// 06 Worked example 1: rainfall vs normal
{
  const ch = chart(160, 130, 440, 380, { xmin: 0, xmax: 2, ymin: 0, ymax: 900, xticks: [], yticks: [0, 200, 400, 600, 800], ylabel: 'Rainfall (mm per year)' });
  let s = ch.svg;
  s += rect(210, ch.Y(800), 140, ch.Y(0) - ch.Y(800), C.panel, { stroke: C.ink, dash: '8 6' }) + rect(410, ch.Y(440), 140, ch.Y(0) - ch.Y(440), C.teal, { stroke: C.ink });
  s += t(280, ch.Y(800) - 12, '800 mm', { size: 18, weight: 700, anchor: 'middle' }) + t(480, ch.Y(440) - 12, '440 mm', { size: 18, weight: 700, anchor: 'middle' });
  s += t(280, 540, 'Normal', { size: 18, weight: 700, anchor: 'middle' }) + t(480, 540, 'This year', { size: 18, weight: 700, anchor: 'middle' });
  s += rect(410, ch.Y(800), 140, ch.Y(440) - ch.Y(800), C.rust, { op: 0.18 }) + line(350, ch.Y(800), 550, ch.Y(800), C.rust, 2.5, '8 6');
  s += t(480, ch.Y(620) - 4, 'shortfall', { size: 17, weight: 700, anchor: 'middle', fill: C.rust }) + t(480, ch.Y(620) + 18, '360 mm', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  s += panel(630, 150, 240, 300);
  s += t(650, 186, '% of normal', { size: 17, weight: 700, fill: C.tealDark }) + t(650, 212, '440 ÷ 800 × 100', { size: 17 }) + t(650, 238, '= 55%', { size: 19, weight: 700 });
  s += t(650, 300, 'Shortfall', { size: 17, weight: 700, fill: C.rust }) + t(650, 326, '800 − 440 = 360 mm', { size: 17 }) + t(650, 352, '= 45% below normal', { size: 17, weight: 700 });
  s += t(650, 410, 'Invented figures', { size: 15, italic: true, fill: C.muted });
  add('06-percentage-of-normal',
    svg(900, 580, 'How severe is the drought?', s),
    'Bar chart: normal rainfall 800 mm a year against 440 mm this year, a shortfall of 360 mm. Working beside the chart gives 55% of normal, or 45% below normal.',
    'Describe a drought’s severity as a percentage of normal rainfall.',
    '## Worked example 1: how severe is the drought?');
}

// 07 Worked example 2: rainwater harvesting flow
{
  const steps = [
    ['Rain on the roof', '0.6 m × 50 m²', '30 m³'],
    ['Collected (80%)', '30 × 0.80', '24 m³'],
    ['In litres', '24 × 1,000', '24,000 L'],
    ['Days it lasts', '24,000 ÷ 100', '240 days'],
  ];
  let s = '';
  const bw = 196, gx = 18;
  steps.forEach(([a, b, c], i) => {
    const x = 30 + i * (bw + gx);
    s += rect(x, 120, bw, 190, i === 3 ? C.cream : C.panel, { stroke: i === 3 ? C.olive : C.panelEdge, sw: 2.5, rx: 12 });
    s += t(x + bw / 2, 156, a, { size: 17, weight: 700, anchor: 'middle' }) + t(x + bw / 2, 210, b, { size: 16, anchor: 'middle', fill: C.muted }) + t(x + bw / 2, 270, c, { size: 26, weight: 700, anchor: 'middle', fill: C.tealDark });
    if (i < 3) s += arrow(x + bw + 1, 215, x + bw + gx - 2, 215, { w: 3 });
  });
  s += t(450, 350, 'Family of five × 20 litres each per day = 100 litres a day', { size: 16, anchor: 'middle', fill: C.muted });
  s += card(30, 380, 840, { title: 'The limitation is in the numbers', body: 'If the year’s rain falls to 300 mm, the store halves to 12,000 litres, just when it is needed most. Rainwater harvesting collects nothing during the drought itself.', tsize: 19, bsize: 17, fill: C.cream, edge: C.olive });
  const H = 380 + cardH(840, { title: 'The limitation is in the numbers', body: 'If the year’s rain falls to 300 mm, the store halves to 12,000 litres, just when it is needed most. Rainwater harvesting collects nothing during the drought itself.', tsize: 19, bsize: 17 }) + 40;
  add('07-rainwater-harvesting',
    svg(900, H, 'Rainwater harvesting in numbers', s + t(450, H - 14, 'Invented figures: roof 50 m², 600 mm of rain a year.', { size: 15, italic: true, fill: C.muted, anchor: 'middle' })),
    'Four steps: 0.6 m of rain on a 50 m² roof gives 30 m³; collecting 80% gives 24 m³; that is 24,000 litres; at 100 litres a day it lasts 240 days. A note shows that 300 mm of rain would halve the store to 12,000 litres.',
    'Convert rainfall to metres, multiply by area, then by the share collected.',
    '## Worked example 2: rainwater harvesting');
}
