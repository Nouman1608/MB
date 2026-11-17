// Topic figures for cambridge-igcse-environmental-management-0680-ecosystems
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

export const slug = 'cambridge-igcse-environmental-management-0680-ecosystems';

// 01 Population, community, habitat and niche (savannah)
{
  let s = '';
  s += rect(30, 110, 840, 420, C.cream, { stroke: C.olive, sw: 2.5, rx: 18 }) + t(54, 146, 'Habitat: open grassland with scattered trees', { size: 19, weight: 700, fill: C.olive });
  s += rect(60, 170, 780, 290, C.panel, { stroke: C.tealDark, sw: 2.5, rx: 16 }) + t(84, 204, 'Community: all the populations of different species', { size: 18, weight: 700, fill: C.tealDark });
  s += rect(90, 230, 330, 200, C.tealLight, { stroke: C.ink, sw: 2.5, rx: 14 }) + t(110, 262, 'Population', { size: 18, weight: 700 }) + t(110, 286, 'all the zebras in one reserve', { size: 16 });
  for (let i = 0; i < 8; i++) { const x = 130 + (i % 4) * 70, y = 330 + Math.floor(i / 4) * 52; s += `<ellipse cx="${x}" cy="${y}" rx="22" ry="12" fill="${C.panel}" stroke="${C.ink}" stroke-width="2"/>` + line(x - 8, y - 10, x - 8, y + 10, C.ink, 2) + line(x + 4, y - 11, x + 4, y + 11, C.ink, 2); }
  const others = [['grasses', C.grass], ['trees', C.grass], ['lions', C.mustard], ['termites', C.rockDark], ['birds', C.blue]];
  others.forEach(([n, f], i) => { const x = 470 + (i % 2) * 180, y = 250 + Math.floor(i / 2) * 64; s += `<circle cx="${x}" cy="${y + 10}" r="12" fill="${f}" stroke="${C.ink}" stroke-width="2"/>` + t(x + 22, y + 16, n, { size: 17, weight: 600 }); });
  s += t(84, 480 - 0, '', {});
  s += t(54, 506, 'Species: zebras can breed together to produce fertile offspring', { size: 16, fill: C.muted });
  // niche vs habitat
  s += card(30, 560, 410, { title: 'Habitat = where', body: 'the place where an organism lives', tsize: 19, bsize: 16, fill: C.cream, edge: C.olive, h: 96 });
  s += card(460, 560, 410, { title: 'Niche = role', body: 'zebra: daytime grazer of tall grasses', tsize: 19, bsize: 16, fill: C.tealLight, edge: C.tealDark, h: 96 });
  add('01-components',
    svg(900, 686, 'Habitat, community and population', s),
    'Nested boxes for a savannah. The habitat is open grassland with scattered trees. Inside it the community includes grasses, trees, lions, termites, birds and zebras. Inside the community the population is all the zebras in one reserve. Below, habitat is defined as where an organism lives and niche as its role.',
    'A population is one species; a community is all of them; a niche is a role, not a place.',
    '## Components of an ecosystem (5.1.1)');
}

// 02 Predator-prey cycle (sketch)
{
  const x0 = 130, y0 = 140, w = 640, h = 300;
  const X = (u) => x0 + u * w, Y = (v) => y0 + h - v * h;
  const prey = (u) => 0.55 + 0.32 * Math.sin(u * Math.PI * 4);
  const pred = (u) => 0.32 + 0.18 * Math.sin(u * Math.PI * 4 - 1.3);
  const pl = (f, col, dash = '') => `<polyline points="${Array.from({ length: 121 }, (_, i) => i / 120).map((u) => `${X(u).toFixed(1)},${Y(f(u)).toFixed(1)}`).join(' ')}" fill="none" stroke="${col}" stroke-width="4.5"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
  let s = panel(30, 110, 840, 420);
  s += line(x0, y0, x0, y0 + h, C.ink, 2.5) + line(x0, y0 + h, x0 + w, y0 + h, C.ink, 2.5);
  s += pl(prey, C.tealDark) + pl(pred, C.rust, '10 6');
  s += `<text transform="translate(${x0 - 26},${y0 + h / 2}) rotate(-90)" font-size="17" font-weight="600" fill="${C.ink}" text-anchor="middle">Number of animals</text>` + t(x0 + w / 2, y0 + h + 30, 'Time', { size: 17, weight: 600, anchor: 'middle' });
  s += line(160, 500, 200, 500, C.tealDark, 4.5) + t(210, 506, 'prey', { size: 17 }) + line(300, 500, 340, 500, C.rust, 4.5, '10 6') + t(350, 506, 'predators', { size: 17 });
  s += t(858, 520, 'Sketch: no real data', { size: 15, italic: true, fill: C.muted, anchor: 'end' });
  const steps = ['More prey', 'supports more predators', 'which then reduce the prey', 'so predators later decline'];
  let y = 560;
  steps.forEach((st, i) => { const x = 30 + i * 215; s += card(x, y, 195, { title: st, tsize: 17, center: true, h: 76, pad: 12, fill: i % 2 ? C.cream : C.tealLight, edge: i % 2 ? C.olive : C.tealDark }); if (i < 3) s += arrow(x + 197, y + 38, x + 213, y + 38, { w: 3 }); });
  add('02-predator-prey',
    svg(900, 670, 'Predator and prey numbers are linked', s),
    'Sketch graph of animal numbers over time. Prey numbers rise and fall in cycles, and predator numbers follow the same pattern a little later. Below: more prey supports more predators, which reduce the prey, so predators later decline.',
    'Predator numbers follow prey numbers, a step behind.',
    '## Biotic interactions (5.1.3)');
}

// 03 Photosynthesis and respiration
{
  let s = '';
  s += card(40, 260, 260, { title: 'carbon dioxide + water', tsize: 20, center: true, h: 80, fill: C.tealLight, edge: C.tealDark });
  s += card(600, 260, 260, { title: 'glucose + oxygen', tsize: 20, center: true, h: 80, fill: C.cream, edge: C.olive });
  s += carrow(300, 270, 450, 170, 596, 270, { w: 6, color: C.tealDark, marker: 'ahT' }) + carrow(600, 330, 450, 430, 304, 330, { w: 6, color: C.rust, marker: 'ahR' });
  s += t(450, 158, 'Photosynthesis', { size: 22, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += `<circle cx="450" cy="244" r="20" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + t(450, 290, 'sunlight energy,', { size: 16, anchor: 'middle' }) + t(450, 310, 'captured by chlorophyll', { size: 16, anchor: 'middle' });
  s += t(450, 446, 'Aerobic respiration', { size: 22, weight: 700, anchor: 'middle', fill: C.rust }) + t(450, 412, 'releases energy', { size: 16, anchor: 'middle', weight: 600, fill: C.rust });
  s += card(30, 500, 410, { title: 'Photosynthesis', body: 'producers only, and only in light', tsize: 18, bsize: 16, fill: C.panel, edge: C.tealDark, h: 90 });
  s += card(460, 500, 410, { title: 'Aerobic respiration', body: 'all living organisms, including plants, day and night', tsize: 18, bsize: 16, fill: C.panel, edge: C.rust, h: 90 });
  add('03-photosynthesis-respiration',
    svg(900, 620, 'Two reactions, reversed', s),
    'Two curved arrows link carbon dioxide and water with glucose and oxygen. Photosynthesis goes one way using sunlight energy captured by chlorophyll; aerobic respiration goes the other way and releases energy. Photosynthesis happens only in producers in light; respiration happens in all organisms day and night.',
    'Respiration reverses the reactants and products of photosynthesis.',
    '## Aerobic respiration (5.1.8)');
}

// 04 Energy flow along a food chain (worked example 1)
{
  const chain = [['Algae', 'producer', 60000], ['Water flea', 'primary consumer', 6000], ['Small fish', 'secondary consumer', 600], ['Heron', 'tertiary consumer', 60]];
  let s = '';
  const bw = 190, gx = 26;
  const H = (v) => 20 + Math.log10(v) * 34;
  chain.forEach(([n, lvl, v], i) => {
    const x = 30 + i * (bw + gx);
    s += card(x, 110, bw, { title: n, body: lvl, tsize: 19, bsize: 15, center: true, h: 76, pad: 12, fill: i === 0 ? C.tealLight : C.panel, edge: i === 0 ? C.tealDark : C.panelEdge });
    const bh = H(v);
    s += rect(x + 45, 440 - bh, 100, bh, C.mustard, { stroke: C.ink });
    s += t(x + bw / 2, 430 - bh, v.toLocaleString('en-GB') + ' kJ', { size: 18, weight: 700, anchor: 'middle' }).replace(`y="${430 - bh}"`, `y="${428 - bh - 4}"`);
    if (i < 3) { s += arrow(x + bw + 2, 148, x + bw + gx - 3, 148, { w: 3.5 }); s += t(x + bw + gx / 2, 300, '10%', { size: 17, weight: 700, anchor: 'middle', fill: C.olive }); s += arrow(x + bw - 10, 318, x + bw + 30, 318, { w: 3, color: C.olive, marker: 'ahO' }); }
    if (i < 3) s += arrow(x + bw + gx / 2, 452, x + bw + gx / 2, 496, { w: 3.5, color: C.rust, marker: 'ahR' });
  });
  s += line(30, 440, 870, 440, C.ink, 2.5);
  s += t(450, 534, 'Lost at each step (90%): respiration (as heat), movement, digestion (faeces) and excretion', { size: 16, weight: 600, anchor: 'middle', fill: C.rust });
  s += card(30, 560, 840, { body: 'Algae to water fleas: 60,000 × 10 ÷ 100 = 6,000 kJ passed on, so 54,000 kJ is lost.', bsize: 17, fill: C.cream, edge: C.olive, center: true, h: 60 });
  s += t(450, 646, 'Energy in kJ per square metre per year. Bar heights use a log scale so all four fit.', { size: 15, italic: true, fill: C.muted, anchor: 'middle' });
  add('04-energy-flow',
    svg(900, 670, 'Energy along a pond food chain', s),
    'Food chain of algae, water flea, small fish and heron. The energy at each level falls from 60,000 to 6,000, 600 and 60 kJ per square metre per year, because only 10% passes on; the rest is lost through respiration, movement, digestion and excretion. From algae to water fleas, 54,000 kJ is lost.',
    'Only about 10% passes to the next level, so food chains are short.',
    '## Energy flow (5.1.6)');
}

// 05 Pyramid of numbers vs energy
{
  let s = panel(30, 110, 410, 470) + panel(460, 110, 410, 470);
  s += t(235, 148, 'Pyramid of numbers', { size: 21, weight: 700, anchor: 'middle' }) + t(235, 172, 'woodland: can be inverted', { size: 16, anchor: 'middle', fill: C.muted });
  s += t(665, 148, 'Pyramid of energy', { size: 21, weight: 700, anchor: 'middle' }) + t(665, 172, 'always pyramid-shaped', { size: 16, anchor: 'middle', fill: C.muted });
  const nb = [['2 hawks', 50, C.rust], ['40 small birds', 140, C.mustard], ['2,000 caterpillars', 330, C.cream], ['1 oak tree', 30, C.grass]];
  nb.forEach(([l, w, f], i) => { const y = 210 + i * 70; s += rect(235 - w / 2, y, w, 52, f, { stroke: C.ink }); s += t(i === 2 ? 235 : 235 + w / 2 + 12, y + 32, l, { size: 16, weight: 700, anchor: i === 2 ? 'middle' : 'start' }); });
  const eb = [['tertiary', 50, C.rust], ['secondary', 130, C.mustard], ['primary consumers', 230, C.cream], ['producers', 350, C.grass]];
  eb.forEach(([l, w, f], i) => { const y = 210 + i * 70; s += rect(665 - w / 2, y, w, 52, f, { stroke: C.ink }); s += t(i >= 2 ? 665 : 665 + w / 2 + 10, y + 32, l, { size: 16, weight: 700, anchor: i >= 2 ? 'middle' : 'start', fill: i === 3 ? C.panel : C.ink }); });
  s += para(54, 506, 'One large producer feeds thousands of small consumers, so the bottom bar is narrower.', 362, { size: 16 });
  s += para(484, 506, 'Only about 10% passes on at each level, so every bar is smaller than the one below.', 362, { size: 16 });
  s += t(450, 606, 'Bar widths are not to scale.', { size: 15, italic: true, fill: C.muted, anchor: 'middle' });
  add('05-pyramids',
    svg(900, 630, 'Pyramids of numbers and energy', s),
    'Left: a woodland pyramid of numbers with 1 oak tree, 2,000 caterpillars, 40 small birds and 2 hawks; the producer bar is narrower than the caterpillar bar, so the pyramid is inverted at the base. Right: a pyramid of energy where each level is smaller than the one below.',
    'Numbers can be inverted by one large producer; energy never can.',
    '## Ecological pyramids (5.1.7)');
}

// 06 Carbon cycle
{
  let s = '';
  const box = (x, y, w, h, l, f, e = C.ink) => card(x, y, w, { title: l, tsize: 18, center: true, h, fill: f, edge: e, pad: 10 });
  s += box(300, 110, 300, 70, 'Carbon dioxide in air or water', C.tealLight, C.tealDark);
  s += box(40, 330, 210, 70, 'Producers (glucose)', C.grass);
  s += box(345, 330, 210, 70, 'Consumers', C.cream, C.olive);
  s += box(650, 330, 210, 70, 'Dead organisms and waste', C.rock);
  s += box(345, 560, 210, 70, 'Fossil fuels: coal, oil, gas', C.rockDark);
  s = s.replace(/(<text[^>]*fill=")#1e2a44("[^>]*>Producers \(glucose\))/, '$1#ffffff$2');
  // arrows
  s += parrow([[300, 150], [145, 150], [145, 324]], { w: 4, color: C.tealDark, marker: 'ahT' }) + t(150, 140, 'photosynthesis', { size: 16, weight: 700, fill: C.tealDark });
  s += arrow(255, 365, 339, 365, { w: 4 }) + t(297, 355, 'feeding', { size: 15, weight: 700, anchor: 'middle' });
  s += parrow([[195, 326], [195, 260], [330, 260], [400, 186]], { w: 3.5, color: C.rust, marker: 'ahR' });
  s += arrow(450, 326, 450, 186, { w: 3.5, color: C.rust, marker: 'ahR' }) + t(462, 250, 'respiration', { size: 16, weight: 700, fill: C.rust });
  s += parrow([[145, 404], [145, 450], [700, 450], [700, 405]], { w: 3.5 }) + arrow(450, 404, 450, 444, { w: 3.5 }) + t(560, 442, 'death and waste', { size: 15, weight: 700, anchor: 'middle' });
  s += parrow([[755, 326], [755, 145], [606, 145]], { w: 3.5, color: C.rust, marker: 'ahR' }) + t(765, 230, 'decomposition', { size: 16, weight: 700, fill: C.rust }) + t(765, 250, '(decomposers', { size: 15, fill: C.muted }) + t(765, 268, 'respire)', { size: 15, fill: C.muted });
  s += parrow([[800, 404], [800, 595], [561, 595]], { w: 3.5, dash: '10 6' }) + t(680, 588, 'buried, not decomposed:', { size: 15, weight: 600, anchor: 'middle' }) + t(680, 620, 'millions of years', { size: 15, weight: 600, anchor: 'middle' });
  s += parrow([[340, 595], [80, 595], [80, 200], [294, 170]], { w: 5, color: C.rust, marker: 'ahR' }) + t(90, 520, 'combustion', { size: 17, weight: 700, fill: C.rust }) + t(90, 540, '(and burning wood)', { size: 15, fill: C.muted });
  s += t(450, 672, 'Carbon is recycled; energy is not.', { size: 16, anchor: 'middle', fill: C.ink, weight: 700 }) + t(450, 694, 'Combustion and deforestation add carbon dioxide faster than photosynthesis removes it.', { size: 15, anchor: 'middle', fill: C.muted });
  add('06-carbon-cycle',
    svg(900, 720, 'The carbon cycle', s),
    'Carbon dioxide in air or water is taken in by producers in photosynthesis and passed to consumers by feeding. Respiration by producers and consumers returns carbon dioxide; dead organisms and waste are decomposed and decomposers respire it back. Organisms buried without decomposition form fossil fuels, and combustion returns their carbon to the air.',
    'Name the store and the process: carbon cycles, while energy flows through and is lost.',
    '## The carbon cycle (5.1.9)');
}
