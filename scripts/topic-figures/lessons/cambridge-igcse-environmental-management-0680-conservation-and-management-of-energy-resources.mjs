// Topic figures for cambridge-igcse-environmental-management-0680-conservation-and-management-of-energy-resources
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

export const slug = 'cambridge-igcse-environmental-management-0680-conservation-and-management-of-energy-resources';

// 01 Demand-side vs supply-side strategies
{
  const dem = ['Reducing consumption', 'Insulation', 'Energy-efficient devices', 'Education on energy conservation', 'Transport policies'];
  const sup = [['Exploiting existing energy resources', 'e.g. waste heat, fuller use of rivers and wind'], ['Battery storage', 'store surplus solar and wind power'], ['Development of new energy resources', 'hydrogen fuel and heat pumps']];
  let s = '';
  const col = (x, head, sub, items, fill, edge, foot) => {
    let o = panel(x, 110, 410, 470) + rect(x, 110, 410, 100, fill, { stroke: edge, sw: 2.5, rx: 14 }) + t(x + 205, 146, head, { size: 22, weight: 700, anchor: 'middle' }) + tl(x + 205, 174, wrap(sub, 17, 370), { size: 17, anchor: 'middle' }, 22);
    items.forEach((it, i) => { const ex = Array.isArray(it); const yy = ex ? 250 + i * 76 : 246 + i * 48; o += tag(x + 205, yy, ex ? it[0] : it, { size: 17, anchor: 'middle', fill: C.panel, edge: C.ink }); if (ex) o += t(x + 205, yy + 36, it[1], { size: 15, anchor: 'middle', fill: C.muted }); });
    o += para(x + 24, 520, foot, 362, { size: 16, fill: C.muted, italic: true });
    return o;
  };
  s += col(30, 'Reduce demand', 'use less energy for the same result', dem, C.teal, C.tealDark, 'Usually cheaper and quicker to put in place.');
  s += col(460, 'Change or secure supply', 'get more from what is available, or replace finite resources', sup, C.cream, C.olive, 'Usually larger and more expensive, but can transform a country’s energy mix.');
  add('01-demand-and-supply',
    svg(900, 610, 'Two ways to manage energy', s.replace("t(665, 176, 'get more from what is available, or replace finite resources'", "t(665, 176, 'get more from what is available, or replace finite resources'")),
    'Two columns. Reduce demand: reducing consumption, insulation, energy-efficient devices, education and transport policies, usually cheaper and quicker. Change or secure supply: exploiting existing resources, battery storage and new energy resources, usually larger and more expensive but able to transform the energy mix.',
    'Sort each strategy as demand-side or supply-side before you weigh it.',
    '## Two ways to manage energy');
}

// 02 Battery storage: matching supply and demand (schematic)
{
  const x0 = 130, y0 = 140, w = 700, h = 330;
  const X = (hr) => x0 + (hr / 24) * w, Y = (v) => y0 + h - v * h;
  const solar = (hr) => (hr < 6 || hr > 19 ? 0 : Math.sin(((hr - 6) / 13) * Math.PI) * 0.9);
  const dem = (hr) => 0.3 + 0.12 * Math.exp(-((hr - 8) ** 2) / 4) + 0.35 * Math.exp(-((hr - 19.5) ** 2) / 5);
  const pts = (f) => Array.from({ length: 97 }, (_, i) => i / 4).map((hr) => `${X(hr).toFixed(1)},${Y(f(hr)).toFixed(1)}`);
  // surplus area (solar above demand) and deficit area (evening)
  const hs = Array.from({ length: 97 }, (_, i) => i / 4);
  const sur = hs.filter((hr) => solar(hr) > dem(hr));
  const surD = `M${sur.map((hr) => `${X(hr)},${Y(solar(hr))}`).join(' L')} L${sur.slice().reverse().map((hr) => `${X(hr)},${Y(dem(hr))}`).join(' L')} Z`;
  const ev = hs.filter((hr) => hr >= 16.5 && hr <= 23 && dem(hr) > solar(hr));
  const evD = `M${ev.map((hr) => `${X(hr)},${Y(dem(hr))}`).join(' L')} L${ev.slice().reverse().map((hr) => `${X(hr)},${Y(solar(hr))}`).join(' L')} Z`;
  let s = panel(30, 110, 840, 470);
  s += line(x0, y0 + h, x0 + w, y0 + h, C.ink, 2.5) + line(x0, y0, x0, y0 + h, C.ink, 2.5);
  s += `<path d="${surD}" fill="${C.mustard}" opacity="0.55"/>` + `<path d="${evD}" fill="${C.teal}" opacity="0.8"/>`;
  s += `<polyline points="${pts(solar).join(' ')}" fill="none" stroke="${C.olive}" stroke-width="4.5"/>` + `<polyline points="${pts(dem).join(' ')}" fill="none" stroke="${C.ink}" stroke-width="4" stroke-dasharray="10 6"/>`;
  [['midnight', 0], ['6 am', 6], ['noon', 12], ['6 pm', 18], ['midnight', 24]].forEach(([l, hr]) => { s += line(X(hr), y0 + h, X(hr), y0 + h + 7, C.ink, 2) + t(X(hr), y0 + h + 28, l, { size: 16, anchor: 'middle' }); });
  s += t(x0 + w / 2, y0 + h + 58, 'Time of day', { size: 17, weight: 600, anchor: 'middle' });
  s += `<text transform="translate(${x0 - 30},${y0 + h / 2}) rotate(-90)" font-size="17" font-weight="600" fill="${C.ink}" text-anchor="middle">Electricity</text>`;
  s += t(X(12), Y(0.62), 'surplus charges', { size: 17, weight: 700, anchor: 'middle' }) + t(X(12), Y(0.62) + 22, 'the battery', { size: 17, weight: 700, anchor: 'middle' });
  s += arrow(X(15.5), Y(0.62), X(19.6), Y(0.36), { w: 3.5, color: C.tealDark, marker: 'ahT' });
  s += t(X(21.6), Y(0.75), 'battery releases', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(X(21.6), Y(0.75) + 22, 'it in the evening', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += line(160, 156, 200, 156, C.olive, 4.5) + t(210, 162, 'solar output', { size: 16 }) + line(160, 184, 200, 184, C.ink, 4, '10 6') + t(210, 190, 'demand', { size: 16 });
  s += t(858, 570, 'Illustrative shape, no real data', { size: 15, italic: true, fill: C.muted, anchor: 'end' });
  const lim = 'Less fossil-fuel back-up is needed. Limitations: cost, a limited lifespan and mining of metals such as lithium.';
  s += card(30, 600, 840, { body: lim, bsize: 17, fill: C.cream, edge: C.olive });
  add('02-battery-storage',
    svg(900, 600 + cardH(840, { body: lim, bsize: 17 }) + 30, 'Battery storage moves solar power to the evening', s),
    'Sketch graph over one day. Solar output rises to a peak at noon and falls to zero at night; demand peaks in the evening. The midday surplus charges a battery, which releases the electricity in the evening when demand is higher than solar output.',
    'Batteries shift surplus renewable electricity to when people need it.',
    '## How the less obvious strategies work');
}

// 03 Blue and green hydrogen
{
  const row = (y, head, fill, edge, inp, by, note) => {
    let s = panel(30, y, 840, 200) + t(54, y + 38, head, { size: 22, weight: 700, fill: edge });
    s += card(54, y + 64, 210, { title: inp[0], body: inp[1], tsize: 18, bsize: 15, center: true, h: 90, fill, edge });
    s += arrow(270, y + 109, 340, y + 109, { w: 5 });
    s += card(346, y + 64, 170, { title: 'hydrogen', tsize: 19, center: true, h: 90, fill: C.panel, edge: C.ink });
    s += arrow(400, y + 158, 400, y + 158, {}) + t(431, y + 180, '+', { size: 20, weight: 700, anchor: 'middle' });
    s += card(540, y + 64, 310, { title: by[0], body: by[1], tsize: 18, bsize: 15, h: 90, fill: by[2], edge: by[3] });
    s += t(54, y + 184, note, { size: 16, fill: C.muted, italic: true });
    return s;
  };
  let s = row(110, 'Blue hydrogen', C.teal, C.blue, ['natural gas', 'a fossil fuel'], ['+ carbon dioxide', 'low-carbon only if it is captured and stored', C.rock, C.rust], 'Can be made at large scale using existing gas supplies.');
  s += row(330, 'Green hydrogen', C.tealLight, C.tealDark, ['water', 'split by renewable electricity'], ['+ oxygen', 'very low emissions', C.tealLight, C.tealDark], 'Currently expensive; needs large amounts of renewable electricity; can store surplus.');
  s = s.replace(/<line x1="400" y1="\d+" x2="400" y2="\d+"[^>]*\/>/g, '').replace(/<text x="431"[^>]*>\+<\/text>/g, '');
  s += card(30, 550, 840, { title: 'Using hydrogen', body: 'Burned or used in a fuel cell, it releases energy and the only product is water: for buses, lorries and heat for industry.', tsize: 19, bsize: 17, fill: C.cream, edge: C.olive });
  const H = 550 + cardH(840, { title: 'Using hydrogen', body: 'Burned or used in a fuel cell, it releases energy and the only product is water: for buses, lorries and heat for industry.', tsize: 19, bsize: 17 }) + 30;
  add('03-blue-green-hydrogen',
    svg(900, H, 'Blue or green hydrogen?', s),
    'Two flow rows. Blue hydrogen is made from natural gas and also produces carbon dioxide, so it is low-carbon only if that is captured and stored. Green hydrogen is made by splitting water with renewable electricity, giving hydrogen and oxygen with very low emissions. Using hydrogen produces only water.',
    'Blue comes from natural gas; green comes from water and renewable electricity.',
    '## New energy resources (1.5.2)');
}

// 04 Ground source vs air source heat pumps
{
  const G = 400;
  const house = (x) => rect(x, G - 150, 170, 150, C.panel, { stroke: C.ink, sw: 3 }) + `<path d="M${x - 14},${G - 150} L${x + 85},${G - 225} L${x + 184},${G - 150} Z" fill="${C.rust}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>` + rect(x + 60, G - 60, 40, 60, C.rock, { stroke: C.ink, sw: 2.5 });
  let s = panel(30, 110, 410, 530) + panel(460, 110, 410, 530);
  s += t(235, 148, 'Ground source', { size: 22, weight: 700, anchor: 'middle' }) + t(665, 148, 'Air source', { size: 22, weight: 700, anchor: 'middle' });
  // ground panel
  s += rect(32, G, 406, 150, C.cream) + line(32, G, 438, G, C.ink, 3) + house(60);
  s += `<path d="M209,${G - 40} L270,${G - 40} L270,${G + 40} L420,${G + 40} L420,${G + 70} L60,${G + 70} L60,${G + 100} L420,${G + 100}" fill="none" stroke="${C.blue}" stroke-width="5" stroke-linejoin="round"/>`;
  s += rect(175, G - 60, 34, 40, C.teal, { stroke: C.ink, sw: 2.5 }) + t(192, G - 70, 'pump', { size: 15, weight: 600, anchor: 'middle' });
  [[110, G + 130], [200, G + 130], [290, G + 130], [380, G + 130]].forEach(([x, y]) => { s += arrow(x, y, x, y - 22, { w: 3, color: C.rust, marker: 'ahR' }); });
  s += t(235, G + 160 - 4, 'pipes in trenches or boreholes', { size: 15, anchor: 'middle', weight: 600 });
  s += t(330, G - 110, 'fluid absorbs', { size: 15, fill: C.blue, weight: 600 }) + t(330, G - 92, 'heat from', { size: 15, fill: C.blue, weight: 600 }) + t(330, G - 74, 'the ground', { size: 15, fill: C.blue, weight: 600 });
  // air panel
  s += rect(462, G, 406, 150, C.cream) + line(462, G, 868, G, C.ink, 3) + house(500);
  s += rect(682, G - 80, 70, 60, C.teal, { stroke: C.ink, sw: 2.5, rx: 6 }) + `<circle cx="717" cy="${G - 50}" r="20" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + path(`M717,${G - 66} L717,${G - 34} M701,${G - 50} L733,${G - 50}`, { w: 2.5 });
  
  [G - 150, G - 120].forEach((y) => { s += arrow(850, y, 770, y + 40, { w: 3, color: C.rust, marker: 'ahR' }); });
  s += t(855, G - 166, 'heat from outside air', { size: 15, weight: 600, fill: C.rust, anchor: 'end' }) + arrow(670, G - 50, 640, G - 50, { w: 3.5, color: C.rust, marker: 'ahR' });
  s += t(707, G + 30, 'fan unit on outside wall', { size: 15, weight: 600, anchor: 'middle' });
  // comparison text
  s += para(54, G + 196 - 10, 'Ground temperature changes little, so output is steady.', 370, { size: 16 });
  s += para(484, G + 196 - 10, 'Cheaper and easier to fit, but less efficient in very cold weather.', 370, { size: 16 });
  const both = 'Both use electricity to move heat that already exists. They deliver more heat energy than the electrical energy they use, with no emissions on site.';
  s += card(30, 660, 840, { body: both, bsize: 17, fill: C.cream, edge: C.olive });
  s += notToScale(858, 140 + 0);
  add('04-heat-pumps',
    svg(900, 660 + cardH(840, { body: both, bsize: 17 }) + 30, 'Heat pumps move heat, they do not make it', s.replace(notToScale(858, 140), '')),
    'Two houses. Ground source: fluid in buried pipes absorbs heat from the ground and a pump concentrates it to heat the house, giving steady output. Air source: a fan unit on an outside wall absorbs heat from the air; it is cheaper to fit but less efficient in very cold weather. Both use electricity to move existing heat.',
    'A heat pump transfers existing heat from the ground or air; it does not create it.',
    '## New energy resources (1.5.2)');
}

// 05 Payback time graph
{
  const ch = chart(140, 130, 560, 380, { xmin: 0, xmax: 10, ymin: 0, ymax: 2000, xticks: [0, 2, 4, 6, 8, 10], yticks: [0, 500, 1000, 1500, 2000], xlabel: 'Years after fitting', ylabel: 'Money saved (units)', yfmt: (v) => v.toLocaleString('en-GB') });
  let s = ch.svg;
  s += line(ch.X(0), ch.Y(600), ch.X(10), ch.Y(600), C.tealDark, 2.5, '9 6') + line(ch.X(0), ch.Y(1800), ch.X(10), ch.Y(1800), C.rust, 2.5, '9 6');
  s += line(ch.X(0), ch.Y(0), ch.X(10), ch.Y(1500), C.tealDark, 4.5) + line(ch.X(0), ch.Y(0), ch.X(10), ch.Y(2000), C.rust, 4.5);
  s += dot(ch.X(4), ch.Y(600), 9, C.tealDark) + dot(ch.X(9), ch.Y(1800), 9, C.rust);
  s += line(ch.X(4), ch.Y(600), ch.X(4), ch.Y(0), C.tealDark, 2.5) + line(ch.X(9), ch.Y(1800), ch.X(9), ch.Y(0), C.rust, 2.5);
  s += t(ch.X(4) + 12, ch.Y(600) + 26, '4 years', { size: 17, weight: 700, fill: C.tealDark });
  s += t(ch.X(9) + 10, ch.Y(900), '9 years', { size: 17, weight: 700, fill: C.rust });
  s += t(ch.X(0.2), ch.Y(600) - 10, 'loft cost 600', { size: 15, fill: C.tealDark, weight: 600 }) + t(ch.X(0.2), ch.Y(1800) - 10, 'cavity wall cost 1,800', { size: 15, fill: C.rust, weight: 600 });
  s += panel(720, 150, 150, 300);
  s += t(735, 184, 'Saving a year', { size: 16, weight: 700 }) + line(735, 214, 765, 214, C.tealDark, 4.5) + t(772, 220, 'loft 150', { size: 16 }) + line(735, 246, 765, 246, C.rust, 4.5) + t(772, 252, 'cavity 200', { size: 16 });
  s += t(735, 300, 'Payback =', { size: 16, weight: 700 }) + t(735, 322, 'cost ÷ saving', { size: 16 }) + t(735, 344, 'per year', { size: 16 });
  s += t(735, 392, 'Payback is where', { size: 15, fill: C.muted }) + t(735, 412, 'savings reach', { size: 15, fill: C.muted }) + t(735, 432, 'the cost.', { size: 15, fill: C.muted });
  add('05-payback-time',
    svg(900, 630, 'Payback time for two kinds of insulation', s + t(450, 612, 'Invented currency units.', { size: 15, italic: true, fill: C.muted, anchor: 'middle' })),
    'Graph of money saved against years. Loft insulation saves 150 a year and reaches its cost of 600 after 4 years. Cavity wall insulation saves 200 a year and reaches its cost of 1,800 after 9 years, but its line is steeper, so it saves more each year.',
    'Loft insulation pays back sooner; cavity wall insulation saves more each year.',
    '## Worked example 1: comparing insulation options');
}

// 06 Heat pump vs electric heater
{
  let s = '';
  const ch = chart(150, 140, 420, 360, { xmin: 0, xmax: 2, ymin: 0, ymax: 12000, xticks: [], yticks: [0, 3000, 6000, 9000, 12000], ylabel: 'Electricity used (kWh per year)', yfmt: (v) => v.toLocaleString('en-GB') });
  s += ch.svg;
  s += rect(200, ch.Y(12000), 130, ch.Y(0) - ch.Y(12000), C.rock, { stroke: C.ink }) + rect(390, ch.Y(4000), 130, ch.Y(0) - ch.Y(4000), C.teal, { stroke: C.ink });
  s += t(265, ch.Y(12000) + 30, '12,000', { size: 19, weight: 700, anchor: 'middle' }) + t(455, ch.Y(4000) - 12, '4,000', { size: 19, weight: 700, anchor: 'middle' });
  s += t(265, 530, 'Electric heater', { size: 17, weight: 700, anchor: 'middle' }) + t(455, 530, 'Heat pump', { size: 17, weight: 700, anchor: 'middle' });
  s += line(330, ch.Y(12000), 545, ch.Y(12000), C.rust, 2.5, '8 6') + arrow(545, ch.Y(12000), 545, ch.Y(4000) - 4, { w: 3.5, color: C.rust, marker: 'ahR' }) + t(555, ch.Y(8000) - 4, '8,000 saved', { size: 17, weight: 700, fill: C.rust }) + t(555, ch.Y(8000) + 18, '= 66.7%', { size: 17, weight: 700, fill: C.rust });
  s += panel(690, 140, 180, 360) + t(780, 176, 'Heat pump', { size: 18, weight: 700, anchor: 'middle' });
  s += rect(745, 200, 70, 40, C.mustard, { stroke: C.ink, rx: 8 }) + t(780, 226, '1 kWh', { size: 16, weight: 700, anchor: 'middle' }) + t(780, 260, 'electricity in', { size: 15, anchor: 'middle', fill: C.muted });
  s += arrow(780, 272, 780, 312, { w: 4 });
  s += rect(715, 320, 130, 70, C.rust, { stroke: C.ink, rx: 8 }) + t(780, 362, '3 kWh', { size: 20, weight: 700, anchor: 'middle', fill: C.panel }) + t(780, 414, 'heat out', { size: 15, anchor: 'middle', fill: C.muted });
  s += t(780, 450, 'illustrative', { size: 15, anchor: 'middle', fill: C.muted, italic: true }) + t(780, 470, 'figure', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  s += t(450, 580, 'Same 12,000 kWh of heat each year. The house must be well insulated for the heat pump to supply enough.', { size: 15, anchor: 'middle', fill: C.muted });
  add('06-heat-pump-saving',
    svg(900, 610, 'Same heat, a third of the electricity', s),
    'Bar chart of electricity used to supply 12,000 kWh of heat a year: 12,000 kWh for an electric heater and 4,000 kWh for a heat pump, a saving of 8,000 kWh or 66.7%. A side panel shows the heat pump turning 1 kWh of electricity into 3 kWh of heat.',
    'Delivering 3 kWh of heat per kWh of electricity cuts electricity use by two-thirds.',
    '## Worked example 3: heat pump versus electric heater');
}
