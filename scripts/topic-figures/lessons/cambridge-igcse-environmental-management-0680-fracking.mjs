// Topic figures for cambridge-igcse-environmental-management-0680-fracking
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

export const slug = 'cambridge-igcse-environmental-management-0680-fracking';

// 01 Definition unpacked
{
  let s = '';
  const parts = [
    ['the extraction of natural gas or petroleum', 'gas, oil or both: a way of obtaining fossil fuels, not a new energy resource', C.tealLight, C.tealDark],
    ['from shale rock', 'the fine-grained, impermeable sedimentary rock that holds the fuel', C.rock, C.ink],
    ['by hydraulic fracturing', '“hydraulic” = liquid under pressure; “fracturing” = cracking the rock', C.cream, C.olive],
  ];
  s += t(450, 140, 'Fracking is…', { size: 22, weight: 700, anchor: 'middle' });
  parts.forEach(([a, b, f, e], i) => {
    const y = 165 + i * 130;
    s += card(30, y, 330, { title: a, tsize: 19, center: true, h: 104, fill: f, edge: e });
    s += arrow(366, y + 52, 420, y + 52, { w: 3.5 });
    s += card(426, y, 444, { body: b, bsize: 17, h: 104 });
  });
  s += t(450, 568, 'A definition answer needs all three parts.', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  add('01-definition',
    svg(900, 596, 'Unpacking the definition', s),
    'The definition of fracking split into three parts, each explained: the extraction of natural gas or petroleum (a fossil fuel, not a new resource), from shale rock (impermeable sedimentary rock), by hydraulic fracturing (cracking rock with liquid under pressure).',
    'Extraction of gas or oil, from shale, by hydraulic fracturing: all three parts earn the mark.',
    '## Unpacking the definition');
}

// 02 Conventional vs shale
{
  let s = panel(30, 110, 840, 470);
  const L = 32, R = 868;
  const layer = (y1, y2, fill) => rect(L, y1, R - L, y2 - y1, fill, { stroke: C.ink, sw: 1.5 });
  s += layer(170, 220, C.cream) + layer(220, 280, C.rock) + layer(280, 360, C.sand) + layer(360, 470, C.muted) + layer(470, 578, C.rockDark);
  s += t(L + 14, 256, 'impermeable cap rock', { size: 16, weight: 700 }) + t(L + 14, 326, 'permeable rock', { size: 16, weight: 700 }) + t(L + 14, 396, 'shale: impermeable, tiny unconnected pores', { size: 16, weight: 700, fill: C.panel });
  // conventional well (left) into reservoir
  s += rect(270, 296, 160, 34, C.ink, { op: 0.75 }) + t(350, 318, 'trapped gas and oil', { size: 15, weight: 700, anchor: 'middle', fill: C.panel });
  s += rect(344, 130, 12, 170, C.panel, { stroke: C.ink, sw: 2 }) + arrow(332, 290, 332, 150, { w: 4, color: C.tealDark, marker: 'ahT' });
  s += t(350, 152, 'Conventional well:', { size: 16, weight: 700, anchor: 'end' }).replace('text-anchor="end"', 'text-anchor="end"');
  [[470, 455, 400], [520, 455, 418]].forEach(([x, y, x2]) => { s += arrow(x, y, x2, 338, { w: 2.5, color: C.cream, marker: 'ah', dash: '6 5' }); });
  s += t(460, 458, 'some gas moved up long ago', { size: 15, weight: 600, fill: C.panel, anchor: 'end' });
  // shale well (right)
  s += rect(644, 130, 12, 280, C.panel, { stroke: C.ink, sw: 2 });
  for (let i = 0; i < 10; i++) { const x = 600 + (i % 5) * 50, y = 380 + Math.floor(i / 5) * 40; s += `<circle cx="${x}" cy="${y}" r="5" fill="${C.cream}" stroke="${C.ink}" stroke-width="1.5"/>`; }
  s += t(670, 136, 'Well into shale:', { size: 16, weight: 700 }) + t(670, 158, 'very little flows', { size: 16, weight: 700, fill: C.rust });
  s += t(320, 136, 'Conventional well:', { size: 16, weight: 700, anchor: 'end' }) + t(320, 158, 'flows out on its own', { size: 16, weight: 700, anchor: 'end', fill: C.tealDark });
  s = s.replace(/<text x="350" y="152"[^>]*>Conventional well:<\/text>/, '');
  s += notToScale(858, 568);
  const k = 'Gas held in shale cannot flow to a well, so the rock must be cracked to make pathways: that is the purpose of hydraulic fracturing.';
  s += card(30, 600, 840, { body: k, bsize: 17, fill: C.cream, edge: C.olive });
  add('02-why-fracture-shale',
    svg(900, 600 + cardH(840, { body: k, bsize: 17 }) + 30, 'Why shale has to be cracked', s),
    'Cross-section of rock layers. A conventional well taps gas and oil that moved up long ago into permeable rock beneath a cap rock, and the fuel flows out on its own. A well into the impermeable shale below reaches gas held in tiny unconnected pores, so very little flows.',
    'Shale is impermeable, so its gas cannot reach a well until the rock is cracked.',
    '## Why shale needs to be fractured');
}

// 03 Benefits national, limitations local
{
  let s = '';
  const ben = [['Greater energy security', 'fewer imports'], ['Jobs and income', 'workers, taxes, landowner payments'], ['Lower energy prices', 'large new gas supplies'], ['Less CO₂ and SO₂ than coal', 'if gas replaces coal'], ['Uses existing networks', 'pipelines, power stations'], ['Access to new reserves', 'fuel conventional wells cannot reach']];
  const lim = [['Induced earthquakes', 'fluid makes faults slip'], ['Ground water contamination', 'if casing fails or fluid spills'], ['Heavy water use', 'competes with farms and homes'], ['Wastewater', 'chemicals and salts in flowback'], ['Methane leakage', 'a powerful greenhouse gas'], ['Continued fossil fuel use', 'can delay renewables'], ['Local disruption', 'noise, lorries, lighting, land']];
  s += rect(30, 110, 410, 60, C.tealLight, { stroke: C.tealDark, sw: 2.5, rx: 14 }) + t(235, 148, 'Benefits', { size: 22, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += rect(460, 110, 410, 60, C.cream, { stroke: C.rust, sw: 2.5, rx: 14 }) + t(665, 148, 'Limitations', { size: 22, weight: 700, anchor: 'middle', fill: C.rust });
  const scope = { 'Greater energy security': 'N', 'Jobs and income': 'L', 'Lower energy prices': 'N', 'Less CO₂ and SO₂ than coal': 'G', 'Uses existing networks': 'N', 'Access to new reserves': 'N', 'Induced earthquakes': 'L', 'Ground water contamination': 'L', 'Heavy water use': 'L', 'Wastewater': 'L', 'Methane leakage': 'G', 'Continued fossil fuel use': 'G', 'Local disruption': 'L' };
  const chip = (x, y, k) => { const m = { N: ['national', C.tealDark], L: ['local', C.rust], G: ['global', C.blue] }[k]; return tag(x, y, m[0], { size: 15, fill: C.panel, edge: m[1], color: m[1], anchor: 'end' }); };
  ben.forEach(([a, b], i) => { const y = 184 + i * 66; s += card(30, y, 410, { title: a, body: b, tsize: 17, bsize: 15, h: 58, pad: 10, vcenter: false }) + chip(428, y + 29, scope[a]); });
  lim.forEach(([a, b], i) => { const y = 184 + i * 66; s += card(460, y, 410, { title: a, body: b, tsize: 17, bsize: 15, h: 58, pad: 10, vcenter: false }) + chip(858, y + 29, scope[a]); });
  const y2 = 184 + 7 * 66 + 10;
  s += card(30, y2, 840, { body: 'Pattern to point out: many benefits are national, while many limitations are local. Who gains is often not who bears the cost.', bsize: 17, fill: C.cream, edge: C.olive });
  add('03-benefits-limitations',
    svg(900, y2 + cardH(840, { body: 'Pattern to point out: many benefits are national, while many limitations are local. Who gains is often not who bears the cost.', bsize: 17 }) + 30, 'Who gains, who bears the cost', s),
    'Two columns. Benefits: energy security, jobs and income, lower prices, lower emissions than coal, existing networks and new reserves, mostly tagged national. Limitations: induced earthquakes, ground water contamination, heavy water use, wastewater, methane leakage, continued fossil fuel use and local disruption, mostly tagged local.',
    'Many benefits are national; many limitations fall on the local area.',
    '## Limitations, explained');
}

// 04 Process steps to limitations and controls
{
  const rows = [
    ['Drilling and sealing', 'casing may fail', 'Ground water contamination', 'strict well-construction laws; inspections; test ground water before, during and after'],
    ['Fracturing at high pressure', 'pressure makes faults slip', 'Induced earthquakes', 'monitor ground movement; pause if tremors are detected'],
    ['Fluid: water, sand, chemicals', 'large volumes needed', 'Heavy water use', 'no control listed: weigh it carefully in dry areas'],
    ['Flowback and production', 'fluid returns; gas can escape', 'Wastewater and methane leaks', 'treat or recycle wastewater; detect and repair leaks'],
    ['Well pad and traffic', 'noise, lorries, lighting, land', 'Local disruption', 'keep well sites away from homes and sensitive habitats'],
  ];
  let s = '';
  s += t(130, 140, 'Process step', { size: 17, weight: 700, anchor: 'middle' }) + t(440, 140, 'Limitation', { size: 17, weight: 700, anchor: 'middle', fill: C.rust }) + t(735, 140, 'Reduce it by', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  let y = 160;
  rows.forEach(([a, why, lim, ctl]) => {
    const h = Math.max(96, cardH(270, { body: ctl, bsize: 15, pad: 12 }));
    s += card(30, y, 200, { title: a, tsize: 17, center: true, h, pad: 12, fill: C.rock, edge: C.ink });
    s += arrow(234, y + h / 2, 304, y + h / 2, { w: 3 }) + t(268, y + h / 2 - 10, '', {});
    s += card(310, y, 260, { title: lim, body: why, tsize: 17, bsize: 15, h, pad: 12, fill: C.cream, edge: C.rust });
    s += arrow(574, y + h / 2, 594, y + h / 2, { w: 3, color: C.tealDark, marker: 'ahT' });
    s += card(600, y, 270, { body: ctl, bsize: 15, h, pad: 12, fill: C.tealLight, edge: C.tealDark });
    y += h + 14;
  });
  s += card(30, y + 4, 840, { body: 'The limitation of every control is cost and enforcement: rules only work if they are monitored and obeyed.', bsize: 17, fill: C.panel, edge: C.panelEdge, dash: '8 6' });
  add('04-limitations-and-controls',
    svg(900, y + 4 + cardH(840, { body: 'The limitation of every control is cost and enforcement: rules only work if they are monitored and obeyed.', bsize: 17 }) + 30, 'Where the risks come from', s),
    'Five rows link a step of the fracking process to the limitation it causes and a way to reduce it: drilling and sealing to ground water contamination, controlled by well laws and testing; high-pressure fracturing to induced earthquakes, controlled by monitoring; fluid to heavy water use; flowback to wastewater and methane leaks, controlled by treatment and leak repair; the well pad to local disruption, reduced by siting wells away from homes and habitats.',
    'Each limitation comes from a step in the process, and each can be reduced but not removed.',
    '## Managing the limitations');
}

// 05 Water use in context
{
  let s = '';
  for (let i = 0; i < 6; i++) { const x = 60 + i * 80; s += rect(x, 150, 60, 110, C.teal, { stroke: C.ink, rx: 6 }) + t(x + 30, 290, `well ${i + 1}`, { size: 15, anchor: 'middle', fill: C.muted }); }
  s += t(270, 140, '6 wells × 15,000 m³ each', { size: 18, weight: 700, anchor: 'middle' }).replace('y="140"', 'y="134"');
  s += arrow(540, 205, 600, 205, { w: 4 }) + card(610, 160, 260, { title: '90,000 m³', body: 'total water needed', tsize: 26, bsize: 16, center: true, h: 90, fill: C.tealLight, edge: C.tealDark });
  // days
  s += t(450, 350, 'The town uses 2,500 m³ a day, so 90,000 ÷ 2,500 = 36 days of its supply', { size: 18, weight: 700, anchor: 'middle' });
  for (let i = 0; i < 36; i++) { const c = i % 12, r = Math.floor(i / 12); s += rect(120 + c * 56, 380 + r * 56, 44, 44, C.cream, { stroke: C.olive, sw: 2, rx: 6 }) + t(142 + c * 56, 408 + r * 56, String(i + 1), { size: 15, anchor: 'middle', weight: 600 }); }
  s += t(450, 580, 'one square = one day of the town’s water', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  s += card(30, 605, 840, { body: '“The six wells would use as much water as the town uses in 36 days” is stronger evidence than “fracking uses a lot of water”.', bsize: 17, fill: C.panel, edge: C.olive });
  add('05-water-use',
    svg(900, 605 + cardH(840, { body: '“The six wells would use as much water as the town uses in 36 days” is stronger evidence than “fracking uses a lot of water”.', bsize: 17 }) + 40, 'Putting the water use in context', s + t(450, 605 + cardH(840, { body: '“The six wells would use as much water as the town uses in 36 days” is stronger evidence than “fracking uses a lot of water”.', bsize: 17 }) + 26, 'Invented figures.', { size: 15, italic: true, fill: C.muted, anchor: 'middle' })),
    'Six wells each needing 15,000 m³ of water add up to 90,000 m³. A grid of 36 squares shows this equals 36 days of a town’s supply at 2,500 m³ a day.',
    'Turn a general point into evidence: 90,000 m³ is 36 days of the town’s water.',
    '## Worked example 1: putting the water use in context');
}

// 06 Structure of a discuss answer
{
  const st = [
    ['Benefits', 'energy security, jobs, tax, less CO₂ than coal', 'link to the source: “Country Z imports most of its gas”', C.tealLight, C.tealDark],
    ['Limitations', 'ground water, earthquakes, disruption, methane', 'link to the source: farm wells, 2 km from a town, natural earthquakes', C.cream, C.rust],
    ['Judgement', 'weigh national gains against local risks at this site', 'conditions: strict monitoring, or alternatives such as conservation and renewables', C.rock, C.ink],
  ];
  let s = '';
  let y = 110;
  st.forEach(([a, b, c, f, e], i) => {
    const h = 120;
    s += rect(30, y, 840, h, C.panel, { stroke: C.panelEdge, sw: 2.5, rx: 14 }) + rect(30, y, 190, h, f, { stroke: e, sw: 2.5, rx: 14 }) + badge(64, y + h / 2, 18, String(i + 1)) + t(94, y + h / 2 + 7, a, { size: 19, weight: 700 });
    s += t(244, y + 42, b, { size: 17, weight: 600 }) + para(244, y + 74, c, 600, { size: 16, fill: C.muted, italic: true });
    if (i < 2) s += arrow(125, y + h + 2, 125, y + h + 18, { w: 3 });
    y += h + 20;
  });
  s += t(450, y + 14, 'Explain every point with “because” or “so”, and use every detail in the source.', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  add('06-discuss-structure',
    svg(900, y + 40, 'Building a fracking discuss answer', s),
    'Three stacked steps for a discuss answer: benefits linked to the source, such as reducing imports; limitations linked to the source, such as farm wells, a town 2 km away and natural earthquakes; and a judgement weighing national gains against local risks, with conditions.',
    'Both sides, each tied to the source, then a judgement about this site.',
    '## Worked example 2: a full discuss answer');
}
