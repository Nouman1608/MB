// Topic figures for cambridge-igcse-environmental-management-0680-human-population-density-distribution-and-structure
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

export const slug = 'cambridge-igcse-environmental-management-0680-human-population-density-distribution-and-structure';

// 01 Describing a distribution: five-step routine on a schematic map
{
  let s = rect(30, 110, 480, 470, C.cream, { stroke: C.ink, sw: 2.5, rx: 14 });
  // coast on the west, river valley
  s += `<path d="M32,124 Q30,110 44,110 L110,110 Q90,240 120,360 Q140,470 100,578 L44,578 Q32,578 32,566 Z" fill="${C.teal}"/>`;
  s += path('M508,262 Q380,300 300,350 Q220,410 118,440', { stroke: C.blue, w: 6 });
  s += `<path d="M330,130 l40,-0 30,60 -60,20 z" fill="${C.rockDark}" opacity="0.5"/>`;
  s += `<path d="M380,470 l60,-30 50,40 0,90 -100,0 z" fill="${C.sand}" stroke="${C.olive}" stroke-width="2" stroke-dasharray="6 5"/>`;
  let r = 5; const rnd = () => { r = (r * 9301 + 49297) % 233280; return r / 233280; };
  for (let i = 0; i < 160; i++) { const u = rnd(); const x = 118 + u * 380, yv = 440 - (x - 118) * 0.47 + (rnd() - 0.5) * 70; if (yv > 120 && yv < 570) s += `<circle cx="${x.toFixed(0)}" cy="${yv.toFixed(0)}" r="3.5" fill="${C.ink}"/>`; }
  for (let i = 0; i < 70; i++) { const x = 120 + rnd() * 60, yv = 140 + rnd() * 420; s += `<circle cx="${x.toFixed(0)}" cy="${yv.toFixed(0)}" r="3.5" fill="${C.ink}"/>`; }
  for (let i = 0; i < 6; i++) s += `<circle cx="${(220 + rnd() * 260).toFixed(0)}" cy="${(140 + rnd() * 120).toFixed(0)}" r="3.5" fill="${C.ink}"/>`;
  s += `<circle cx="420" cy="520" r="5" fill="${C.rust}" stroke="${C.ink}" stroke-width="1.5"/>`;
  s += t(70, 340, 'sea', { size: 15, weight: 700, fill: C.tealDark, anchor: 'middle' }) + t(365, 232, 'mountains', { size: 15, weight: 700, anchor: 'middle' }) + t(450, 560, 'desert', { size: 15, weight: 700, anchor: 'middle', fill: C.olive }) + t(496, 300, 'river', { size: 15, weight: 700, fill: C.blue, anchor: 'end' });
  s += t(440, 508, 'oasis town', { size: 15, weight: 700, fill: C.rust, anchor: 'end' });
  s += `<path d="M480,128 l0,26 M472,138 l8,-12 8,12" stroke="${C.ink}" stroke-width="2.5" fill="none"/>` + t(480, 170, 'N', { size: 15, weight: 700, anchor: 'middle' });
  s += t(44, 570, 'Not to scale', { size: 15, italic: true, fill: C.muted });
  const steps = [['Overall pattern', 'uneven; clustered on the coast and along the river'], ['Where it is dense', 'west coast and the river valley'], ['Where it is sparse', 'northern mountains, south-east desert'], ['Data', 'quote a density or % from the key'], ['Anomaly', 'an oasis town in the empty desert']];
  steps.forEach(([a, b], i) => { const y = 110 + i * 96; s += rect(530, y, 340, 84, C.panel, { stroke: C.panelEdge, sw: 2.5, rx: 12 }) + badge(560, y + 42, 16, String(i + 1), C.mustard) + card(586, y, 284, { title: a, body: b, tsize: 17, bsize: 15, h: 84, pad: 10, noBox: true }); });
  add('01-describing-distribution',
    svg(900, 610, 'Describing a distribution', s),
    'Schematic dot map of an invented country: dots cluster along the west coast and a river valley, with few in the northern mountains and the south-east desert apart from one oasis town. Beside it, five steps for describing a distribution: overall pattern, where it is dense, where it is sparse, data and anomaly.',
    'Pattern, dense areas, sparse areas, data, anomaly: describe before you explain.',
    '### Describing a distribution');
}

// 02 LIC vs HIC pyramids
{
  const lic = [20, 17, 14.5, 12, 10, 8, 6.2, 4.5, 3, 1.6, 0.7];
  const hic = [5, 5.3, 5.6, 6, 6.3, 6.5, 6.6, 6.5, 6.2, 5.8, 5.2];
  const hicF = [5, 5.3, 5.6, 6, 6.3, 6.5, 6.6, 6.6, 6.5, 6.3, 6.4];
  const pyr = (cx, data, dataF, top) => {
    let o = ''; const bh = 26, sc = 8.5;
    data.forEach((v, i) => {
      const y = top + (data.length - 1 - i) * (bh + 2), f = dataF ? dataF[i] : v;
      const fill = i < 3 ? C.tealLight : i < 10 ? C.cream : C.rock;
      o += rect(cx - v * sc, y, v * sc, bh, fill, { stroke: C.ink, sw: 1.5 }) + rect(cx, y, f * sc, bh, fill, { stroke: C.ink, sw: 1.5 });
    });
    return o + line(cx, top - 6, cx, top + data.length * (bh + 2), C.ink, 2.5);
  };
  let s = panel(30, 110, 410, 440) + panel(460, 110, 410, 440);
  s += t(235, 146, 'Typical LIC', { size: 21, weight: 700, anchor: 'middle' }) + t(665, 146, 'Typical HIC', { size: 21, weight: 700, anchor: 'middle' });
  s += pyr(235, lic, null, 196) + pyr(665, hic, hicF, 196);
  [235, 665].forEach((cx) => { s += t(cx - 12, 184, 'males', { size: 15, anchor: 'end', fill: C.muted }) + t(cx + 12, 184, 'females', { size: 15, fill: C.muted }); });
  s += t(54, 520, 'triangular: wide base, narrows fast', { size: 15, weight: 600 }) + t(484, 520, 'column: straight sides, wide top', { size: 15, weight: 600 });
  s += t(850, 200, 'more women in', { size: 15, weight: 600, anchor: 'end', fill: C.olive }) + t(850, 218, 'the oldest group', { size: 15, weight: 600, anchor: 'end', fill: C.olive });
  // key
  const k = [['0–14: young dependants', C.tealLight], ['15–64: working population', C.cream], ['65+: elderly dependants', C.rock]];
  k.forEach(([l, f], i) => { const x = 40 + i * 280; s += rect(x, 572, 26, 20, f, { stroke: C.ink, sw: 1.5 }) + t(x + 36, 588, l, { size: 16 }); });
  s += t(450, 626, 'Shapes illustrative. Compare in one sentence: “The LIC has a much wider base than the HIC…”', { size: 15, italic: true, fill: C.muted, anchor: 'middle' });
  add('02-lic-hic-pyramids',
    svg(900, 650, 'LIC and HIC population structures', s),
    'Two schematic population pyramids. The typical LIC pyramid is triangular, with a wide base of young dependants that narrows quickly and few elderly. The typical HIC pyramid is a column with a narrow base, straight sides and a wide top, with more women than men in the oldest group.',
    'Wide base and narrow top for an LIC; straight sides and a wide top for an HIC.',
    '## Comparing an LIC and an HIC (7.1.4)');
}

// 03 World Bank income groups
{
  let s = '';
  const x0 = 60, w = 780;
  s += `<defs><linearGradient id="inc" x1="0" x2="1"><stop offset="0" stop-color="${C.cream}"/><stop offset="1" stop-color="${C.tealDark}"/></linearGradient></defs>`;
  s += rect(x0, 200, w, 60, 'url(#inc)', { stroke: C.ink, sw: 2.5, rx: 10 });
  s += arrow(x0, 290, x0 + w, 290, { w: 3.5 }) + t(x0 + w / 2, 320, 'income per person (gross national income per capita)', { size: 17, weight: 600, anchor: 'middle' });
  const seg = [[0, 0.25, 'Low-income', 'LICs'], [0.25, 0.75, 'Middle-income', 'MICs'], [0.75, 1, 'High-income', 'HICs']];
  seg.forEach(([a, b, n, ab], i) => { const xa = x0 + a * w, xb = x0 + b * w; if (i) s += line(xa, 192, xa, 268, C.ink, 3); s += t((xa + xb) / 2, 180, n, { size: 19, weight: 700, anchor: 'middle' }) + t((xa + xb) / 2, 238, ab, { size: 20, weight: 700, anchor: 'middle', fill: i === 2 ? C.panel : C.ink }); });
  s += line(x0 + 0.5 * w, 206, x0 + 0.5 * w, 254, C.ink, 2, '6 5') + t(x0 + 0.375 * w, 254, 'lower-middle', { size: 15, anchor: 'middle' }) + t(x0 + 0.625 * w, 254, 'upper-middle', { size: 15, anchor: 'middle' });
  s = s.replace(`>MICs</text>`, `>MICs</text>`);
  s += card(30, 350, 410, { title: 'Limits change yearly', body: 'the income limits are updated every year, so you do not need to learn the figures', tsize: 18, bsize: 16, h: 120, fill: C.panel, edge: C.panelEdge });
  s += card(460, 350, 410, { title: 'An average hides gaps', body: 'it classifies national economies, so it hides differences between rich and poor people within a country', tsize: 18, bsize: 16, h: 120, fill: C.cream, edge: C.olive });
  s += t(450, 500, 'Write “low-income countries”, not “poor countries”.', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  add('03-income-groups',
    svg(900, 530, 'World Bank income groups', s.replace(/<text x="[\d.]+" y="238"[^>]*>MICs<\/text>/, '')),
    'A bar of rising income per person divided into low-income, middle-income (split into lower-middle and upper-middle) and high-income countries. Notes say the limits change every year and that a national average hides differences within a country.',
    'Three groups by income per person; the limits change each year.',
    '## World Bank income groups (7.1.3)');
}

// 04 Comparing densities
{
  let s = '';
  const reg = (x, name, pop, area, dens, n, sq) => {
    let o = panel(x, 110, 410, 420) + t(x + 205, 146, name, { size: 21, weight: 700, anchor: 'middle' });
    o += t(x + 205, 176, `${pop} people ÷ ${area} km²`, { size: 16, anchor: 'middle', fill: C.muted });
    o += rect(x + 105, 200, 200, 200, C.cream, { stroke: C.ink, sw: 2.5 });
    let r = n * 7 + 3; const rnd = () => { r = (r * 9301 + 49297) % 233280; return r / 233280; };
    for (let i = 0; i < n; i++) o += `<circle cx="${(x + 112 + rnd() * 186).toFixed(1)}" cy="${(207 + rnd() * 186).toFixed(1)}" r="3" fill="${C.ink}"/>`;
    o += t(x + 205, 422, 'one km² (schematic)', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
    o += t(x + 205, 470, `${dens} people per km²`, { size: 24, weight: 700, anchor: 'middle', fill: C.tealDark });
    return o;
  };
  s += reg(30, 'Upland North', '2,400,000', '60,000', '40', 40) + reg(460, 'Coastal South', '900,000', '1,500', '600', 600);
  s += card(30, 550, 840, { body: '600 ÷ 40 = 15: Coastal South is 15 times as densely populated, even though it has fewer people.', bsize: 18, bweight: 600, fill: C.cream, edge: C.olive, center: true });
  s += t(450, 550 + cardH(840, { body: '600 ÷ 40 = 15: Coastal South is 15 times as densely populated, even though it has fewer people.', bsize: 18, bweight: 600 }) + 30, 'Invented data. Density = population ÷ area.', { size: 15, italic: true, fill: C.muted, anchor: 'middle' });
  add('04-comparing-densities',
    svg(900, 550 + cardH(840, { body: '600 ÷ 40 = 15: Coastal South is 15 times as densely populated, even though it has fewer people.', bsize: 18, bweight: 600 }) + 56, 'Density, not total population', s),
    'Two invented regions. Upland North has 2,400,000 people on 60,000 km², 40 people per km², shown as a sparsely dotted square. Coastal South has 900,000 people on 1,500 km², 600 people per km², shown as a densely dotted square: 15 times as dense despite fewer people.',
    'Density = population ÷ area: fewer people can still mean far more crowding.',
    '## Worked example 1: comparing densities');
}

// 05 Structure data: dependants per 100 workers
{
  let s = '';
  const x0 = 200, W = 640;
  const row = (y, name, parts, deps, calc, res) => {
    let o = t(40, y + 36, name, { size: 20, weight: 700 });
    let x = x0;
    parts.forEach(([v, f, l]) => { const w = (v / 100) * W; o += rect(x, y, w, 56, f, { stroke: C.ink, sw: 2 }) + t(x + w / 2, y + 35, v >= 5 ? `${v}%` : '', { size: 17, weight: 700, anchor: 'middle' }); x += w; });
    if (parts[2][0] < 5) o += t(x0 + W + 8, y + 35, `${parts[2][0]}%`, { size: 17, weight: 700 });
    o += t(x0, y + 86, `dependants ${deps}`, { size: 16, weight: 600, fill: C.muted }) + t(x0 + W, y + 86, calc, { size: 16, anchor: 'end' });
    o += t(x0 + W, y + 112, res, { size: 18, weight: 700, anchor: 'end', fill: C.tealDark });
    return o;
  };
  s += row(130, 'Country X', [[42, C.tealLight], [55, C.cream], [3, C.rock]], '42 + 3 = 45%', '45 ÷ 55 × 100', '81.8 dependants per 100 workers');
  s += row(290, 'Country Y', [[15, C.tealLight], [64, C.cream], [21, C.rock]], '15 + 21 = 36%', '36 ÷ 64 × 100', '56.3 dependants per 100 workers');
  const k = [['0 to 14', C.tealLight], ['15 to 64', C.cream], ['65 and over', C.rock]];
  k.forEach(([l, f], i) => { const x = 200 + i * 200; s += rect(x, 452, 26, 20, f, { stroke: C.ink, sw: 1.5 }) + t(x + 36, 468, l, { size: 16 }); });
  s += card(30, 500, 410, { title: 'X is the LIC', body: 'dependants mostly young: needs schools and jobs', tsize: 18, bsize: 16, h: 100, fill: C.tealLight, edge: C.tealDark });
  s += card(460, 500, 410, { title: 'Y is the HIC', body: 'dependants mostly elderly (females 12%, males 9%): needs healthcare and pensions', tsize: 18, bsize: 16, h: 100, fill: C.rock, edge: C.ink });
  s += t(450, 630, 'Invented data: percentages of each country’s total population.', { size: 15, italic: true, fill: C.muted, anchor: 'middle' });
  add('05-dependants-per-100',
    svg(900, 655, 'Reading structure data', s),
    'Two stacked bars of population by age. Country X: 42% aged 0 to 14, 55% aged 15 to 64 and 3% aged 65 and over, giving 81.8 dependants per 100 workers. Country Y: 15%, 64% and 21%, giving 56.3. X is the LIC with mostly young dependants; Y is the HIC with mostly elderly dependants.',
    'Same idea, opposite pressures: young dependants in the LIC, elderly in the HIC.',
    '## Worked example 2: reading structure data');
}
