import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-cambridge-pakistan-studies-power';
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

const COAL = '#2b2f3a';

// 01 Three ways to mine coal
{
  const y = 112, w = 270, h = 330;
  const px = [30, 315, 600];
  let b = '';
  const sky = (x) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="#e6eef0"/>`;
  // open cast
  {
    const x = px[0], g = y + 110;
    b += sky(x) + `<path d="M${x},${g} L${x + 60},${g} L${x + 85},${g + 70} L${x + 185},${g + 70} L${x + 210},${g} L${x + w},${g} L${x + w},${y + h} L${x},${y + h} Z" fill="${C.sand}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>`;
    b += `<path d="M${x},${g + 70} L${x + 85},${g + 70} L${x + 185},${g + 70} L${x + w},${g + 70} L${x + w},${g + 110} L${x},${g + 110} Z" fill="${COAL}"/>`;
    b += `<path d="M${x + 210},${g} L${x + 230},${g - 30} L${x + 262},${g - 30} L${x + 270},${g}" fill="${C.rock}" stroke="${C.ink}" stroke-width="2"/>`;
    b += T(x + 246, g - 38, 'spoil', { size: 15, anchor: 'middle', fill: C.muted });
    b += arrow(x + 135, g + 62, x + 135, g - 30, { w: 4, color: C.olive, marker: 'ahO' });
    b += T(x + 16, g + 135, 'seam near the surface', { size: 16, weight: 700, fill: '#ffffff' }).replace(`y="${g + 135}"`, `y="${g + 98}"`);
    b += T(x + 16, g + 40, 'overburden', { size: 15, weight: 700 }) + T(x + 16, g + 56, 'stripped', { size: 15 });
    b += T(x + 16, y + 34, 'Open cast', { size: 21, weight: 700 }) + T(x + 16, y + 58, 'dug from the surface', { size: 15, fill: C.muted });
  }
  // adit
  {
    const x = px[1];
    b += sky(x) + `<path d="M${x},${y + 300} L${x + 70},${y + 300} L${x + 130},${y + 120} L${x + w},${y + 90} L${x + w},${y + h} L${x},${y + h} Z" fill="${C.sand}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>`;
    b += `<path d="M${x + 103},${y + 200} L${x + w},${y + 200} L${x + w},${y + 230} L${x + 93},${y + 230} Z" fill="${COAL}"/>`;
    b += `<rect x="${x + 98}" y="${y + 206}" width="140" height="18" fill="#e6eef0" stroke="${C.ink}" stroke-width="2"/>`;
    b += arrow(x + 200, y + 215, x + 70, y + 215, { w: 4, color: C.olive, marker: 'ahO' });
    b += T(x + 140, y + 260, 'seam exposed on', { size: 15, weight: 700 }) + T(x + 140, y + 278, 'the valley side', { size: 15, weight: 700 });
    b += T(x + 150, y + 180, 'horizontal tunnel', { size: 15, weight: 700 });
    b += T(x + 16, y + 34, 'Adit', { size: 21, weight: 700 }) + T(x + 16, y + 58, 'into a hillside', { size: 15, fill: C.muted });
  }
  // shaft
  {
    const x = px[2], g = y + 110;
    b += sky(x) + `<rect x="${x}" y="${g}" width="${w}" height="${y + h - g}" fill="${C.sand}" stroke="${C.ink}" stroke-width="2.5"/>`;
    b += `<rect x="${x}" y="${g + 140}" width="${w}" height="30" fill="${COAL}"/>`;
    b += `<rect x="${x + 50}" y="${g}" width="22" height="160" fill="#e6eef0" stroke="${C.ink}" stroke-width="2"/>`;
    b += `<rect x="${x + 72}" y="${g + 146}" width="170" height="16" fill="#e6eef0" stroke="${C.ink}" stroke-width="2"/>` + `<rect x="${x + 5}" y="${g + 146}" width="45" height="16" fill="#e6eef0" stroke="${C.ink}" stroke-width="2"/>`;
    b += path(`M${x + 40},${g} L${x + 61},${g - 40} L${x + 82},${g}`, { stroke: C.ink, w: 3 }) + `<circle cx="${x + 61}" cy="${g - 40}" r="7" fill="${C.ink}"/>`;
    b += arrow(x + 61, g + 130, x + 61, g + 10, { w: 4, color: C.olive, marker: 'ahO' });
    b += T(x + 90, g + 50, 'vertical shaft', { size: 15, weight: 700 }) + T(x + 90, g + 130, 'galleries', { size: 15, weight: 700 }) + T(x + 90, g + 196, 'deep seam', { size: 15, weight: 700 });
    b += T(x + 16, y + 34, 'Shaft', { size: 21, weight: 700 }) + T(x + 16, y + 58, 'for deep seams', { size: 15, fill: C.muted });
  }
  const notes = [
    'Suits seams near the surface with large reserves, such as the Thar coalfield.',
    'Suits seams exposed on valley sides, e.g. in the Salt Range.',
    'Reaches deep seams; costly and more dangerous.',
  ];
  const nh = Math.max(...notes.map((s) => cardH(w, { body: s, bs: 16 })));
  notes.forEach((s, i) => { b += card(px[i], y + h + 14, w, { body: s, bs: 16, h: nh, bfill: C.ink }).s; });
  const ly = y + h + 14 + nh + 34;
  b += `<rect x="40" y="${ly - 16}" width="34" height="18" fill="${COAL}"/>` + T(84, ly, 'coal seam', { size: 16 }) + `<line x1="220" y1="${ly - 7}" x2="270" y2="${ly - 7}" stroke="${C.olive}" stroke-width="4" marker-end="url(#ahO)"/>` + T(282, ly, 'route the coal takes to the surface', { size: 16 });
  add('01-coal-mining-methods',
    svg(900, ly + 24, 'Three ways to mine coal', b, 'simple cross-sections, not to scale'),
    'Three cross-sections. Open cast: the overburden is stripped and a seam near the surface is dug from above. Adit: a horizontal tunnel is driven into a hillside where the seam is exposed on the valley side. Shaft: a vertical shaft with horizontal galleries reaches a deep seam.',
    'The depth and position of the seam decide whether coal is mined by open cast, adit or shaft.',
    '## How are coal, oil and gas extracted?');
}

// 02 Drilling for oil and gas
{
  const y = 112, g = y + 140;
  let b = `<rect x="30" y="${y}" width="840" height="430" rx="14" fill="#e6eef0"/>`;
  b += `<rect x="30" y="${g}" width="840" height="${y + 430 - g}" fill="${C.sand}"/>` + `<line x1="30" y1="${g}" x2="870" y2="${g}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += path(`M30,${g + 80} Q450,${g + 40} 870,${g + 80}`, { stroke: C.rockDark, w: 2 });
  b += `<path d="M30,${g + 210} Q450,${g + 90} 870,${g + 210} L870,${g + 245} Q450,${g + 125} 30,${g + 245} Z" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>`;
  b += `<path d="M190,${g + 205} Q450,${g + 112} 710,${g + 205} Q450,${g + 175} 190,${g + 205} Z" fill="${COAL}" opacity="0.85"/>`;
  b += `<path d="M30,${g + 245} Q450,${g + 125} 870,${g + 245} L870,${y + 430} L30,${y + 430} Z" fill="${C.rock}" opacity="0.6"/>`;
  // rig
  b += path(`M430,${g} L450,${g - 100} L470,${g}`, { stroke: C.ink, w: 4 }) + path(`M436,${g - 30} L464,${g - 30} M441,${g - 60} L459,${g - 60}`, { stroke: C.ink, w: 3 });
  b += `<line x1="450" y1="${g}" x2="450" y2="${g + 152}" stroke="${C.ink}" stroke-width="5"/>`;
  b += arrow(462, g + 140, 462, g + 10, { w: 4, color: C.olive, marker: 'ahO' });
  // seismic
  b += `<rect x="110" y="${g - 26}" width="50" height="26" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/>` + [30, 55, 80].map((r) => `<path d="M${135 - r},${g + 4} A${r},${r} 0 0 0 ${135 + r},${g + 4}" fill="none" stroke="${C.tealDark}" stroke-width="2.5"/>`).join('');
  b += T(135, g - 40, 'seismic survey', { size: 16, weight: 700, fill: C.tealDark, anchor: 'middle' }) + T(135, g - 60, 'locates trapped deposits', { size: 15, fill: C.tealDark, anchor: 'middle' });
  b += T(480, g - 70, 'rig drills a well', { size: 17, weight: 700 });
  b += T(480, g + 60, 'oil or gas rises under', { size: 16, weight: 700, fill: C.olive }) + T(480, g + 80, 'pressure or is pumped', { size: 16, weight: 700, fill: C.olive });
  b += T(860, g + 196, 'cap rock seals it in', { size: 16, weight: 700, anchor: 'end' });
  b += T(450, g + 192, 'oil or gas trapped in the reservoir', { size: 16, weight: 700, fill: '#ffffff', anchor: 'middle' });
  const n = note(30, y + 450, 840, 'Found in sedimentary basins such as the Potwar Plateau and Sindh. A labelled diagram should show the reservoir, the cap rock and the route to the surface.');
  add('02-drilling-oil-gas',
    svg(900, y + 450 + n.h + 30, 'Drilling for oil and gas', b + n.s, 'simple cross-section, not to scale'),
    'Cross-section of rock layers. A seismic survey at the surface locates a deposit of oil or gas trapped beneath an arched cap rock. A rig drills a well down to the reservoir, and the oil or gas rises under pressure or is pumped to the surface.',
    'Seismic surveys find the trap; the well taps it.',
    '## How are coal, oil and gas extracted?');
}

// 03 How fuels reach users
{
  const rowY = [150, 340, 530];
  const rows = [
    ['COAL', [['Thar lignite', 'Low-grade: high ash, moisture, sulphur'], ['Power stations at or near the mine', 'Low heat output: poor for long transport']], [['Imported coal, incl. coking coal', 'Arrives by sea at Karachi’s ports'], ['Rail and road inland', 'e.g. to iron and steel making']]],
    ['GAS', [['Sui (found 1952) and fields in Sindh and Balochistan', ''], ['Trunk pipelines', 'To cities of Sindh and Punjab and to Peshawar']], [['Areas off the pipeline', 'Rural and hilly areas'], ['LPG cylinders', 'More expensive; supply can be irregular']]],
    ['OIL', [['Tankers to Karachi', 'Most crude and products imported, mainly from the Gulf'], ['Refined at Karachi', 'or piped to Mahmood Kot near Multan']], [['Domestic crude', 'Potwar Plateau and Sindh: a small part of demand'], ['Rail and road tankers', 'carry the rest inland']]],
  ];
  let b = '';
  const w = 168;
  rows.forEach(([lab, A, B], r) => {
    const y = rowY[r] - 30;
    b += R(30, y, 840, 176, r % 2 ? C.panel : '#f9fbfb', C.panelEdge) + `<rect x="30" y="${y}" width="80" height="176" rx="14" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`;
    b += `<text transform="translate(78,${y + 88}) rotate(-90)" font-size="20" font-weight="700" fill="${C.ink}" text-anchor="middle">${lab}</text>`;
    const draw = (arr, yy, hh) => arr.forEach(([ti, s], i) => {
      const x = 130 + i * (w + 26) + (arr === B ? 2 * (w + 26) : 0);
      b += card(x, yy, w, { title: ti, body: s || undefined, ts: 15, bs: 15, h: hh, bfill: C.ink, pad: 10, fill: '#ffffff' }).s;
      if (i === 0) b += arrow(x + w + 3, yy + hh / 2, x + w + 23, yy + hh / 2, { w: 3 });
    });
    draw(A, y + 10, 156); draw(B, y + 10, 156);
  });
  b += `<line x1="${130 + 2 * (w + 26) - 13}" y1="120" x2="${130 + 2 * (w + 26) - 13}" y2="${rowY[2] + 146}" stroke="${C.panelEdge}" stroke-width="2" stroke-dasharray="6 6"/>`;
  const n = note(30, rowY[2] + 166, 840, 'LNG imports through terminals at Port Qasim now help meet gas demand as domestic output falls behind.');
  add('03-fuels-to-users',
    svg(900, rowY[2] + 166 + n.h + 30, 'How coal, gas and oil reach their users', b + n.s),
    'Three rows. Coal: low-grade Thar lignite is burned in power stations near the mine, while imported coal arrives at Karachi’s ports and moves inland by rail and road. Gas: from Sui and other fields it travels by trunk pipeline to cities, while areas off the network use costlier LPG cylinders. Oil: most is imported by tanker to Karachi, refined there or piped to Mahmood Kot near Multan, with rail and road tankers carrying the rest.',
    'Pipelines reach the cities; everywhere else depends on costlier rail, road and cylinders.',
    '## What are Pakistan\'s non-renewable power resources?');
}

// 04 Sources of electricity
{
  const y = 112, w = 270;
  const groups = [
    ['Thermal', 'Burn oil, gas, coal or waste to raise steam that drives turbines.', [], C.cream, C.olive],
    ['Nuclear', 'Heat from nuclear fission.', ['Chashma, Punjab', 'Coast near Karachi'], C.tealLight, C.tealDark],
    ['Renewables', '', ['Hydel: Tarbela, Mangla, Warsak; run-of-river schemes', 'Wind: Gharo–Jhimpir corridor, Sindh', 'Solar: Quaid-e-Azam Solar Park near Bahawalpur'], C.teal, C.tealDark],
  ];
  const opts = groups.map(([ti, d, ex, f, e]) => ({ title: ti, body: [d, ...ex].filter(Boolean), bullets: true, bs: 16, ts: 22, fill: f, edge: e, bfill: C.ink }));
  const h = Math.max(...opts.map((o) => cardH(w, o)));
  let b = opts.map((o, i) => card(30 + i * 285, y, w, { ...o, h }).s).join('');
  const fy = y + h + 50;
  b += T(30, fy - 14, 'INSIDE A THERMAL STATION', { size: 16, weight: 700, fill: C.olive });
  const st = ['Fuel burned', 'Water → steam', 'Steam drives turbines', 'Electricity'];
  st.forEach((s, i) => { const x = 30 + i * 214; b += R(x, fy, 196, 60, i === 3 ? C.mustard : C.panel, C.ink) + T(x + 98, fy + 37, s, { size: 17, weight: 700, anchor: 'middle' }); if (i < 3) b += arrow(x + 198, fy + 30, x + 212, fy + 30, { w: 3 }); });
  const n = note(30, fy + 84, 840, 'Non-renewable fuels are running out and rising in price.');
  add('04-electricity-sources',
    svg(900, fy + 84 + n.h + 30, 'Three ways Pakistan generates electricity', b + n.s),
    'Three groups of power stations: thermal stations burn oil, gas, coal or waste; nuclear stations at Chashma and near Karachi use fission; renewables include hydel at Tarbela, Mangla and Warsak, wind in the Gharo–Jhimpir corridor and solar near Bahawalpur. A chain shows a thermal station: fuel heats water to steam, which drives turbines to make electricity.',
    'Thermal, nuclear and renewable stations all end by turning a turbine.',
    '## How is electricity generated in Pakistan?');
}

// 05 Multi-purpose hydel scheme
{
  const y = 112, g = y + 290;
  let b = `<rect x="30" y="${y}" width="840" height="300" rx="14" fill="#e6eef0"/>`;
  b += `<path d="M30,${y + 150} Q200,${y + 150} 300,${y + 200} L430,${y + 200} L430,${g} L30,${g} Z" fill="${C.teal}"/>`;
  b += `<path d="M30,${y + 80} Q150,${y + 70} 220,${y + 120} L300,${y + 200} L300,${y + 300} L30,${y + 300} Z" fill="none"/>`;
  b += `<path d="M30,${g + 10} L30,${y + 240} Q200,${y + 250} 420,${g - 40} L870,${g - 20} L870,${g + 10} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += `<path d="M430,${y + 190} L470,${y + 190} L520,${g - 36} L430,${g - 36} Z" fill="#d6d6d6" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  b += `<line x1="30" y1="${y + 150}" x2="300" y2="${y + 150}" stroke="${C.blue}" stroke-width="0"/>`;
  b += `<rect x="530" y="${g - 76}" width="60" height="40" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` + T(560, g - 50, '⚡', { size: 22, anchor: 'middle' });
  b += path(`M445,${g - 60} L530,${g - 56}`, { stroke: C.blue, w: 5 }) + path(`M590,${g - 40} Q700,${g - 34} 860,${g - 28}`, { stroke: C.blue, w: 7 });
  b += T(140, y + 190, 'reservoir', { size: 18, weight: 700, fill: C.tealDark }) + T(140, y + 212, 'stores water', { size: 16, fill: C.tealDark });
  b += T(450, y + 176, 'dam', { size: 18, weight: 700, anchor: 'middle' });
  b += T(600, g - 90, 'power station', { size: 16, weight: 700 });
  b += T(860, g - 46, 'river flows on downstream', { size: 15, fill: C.blue, anchor: 'end' });
  // outputs
  const outs = [['Irrigation water', C.teal], ['Electricity', C.mustard], ['Flood control', C.cream]];
  outs.forEach(([s, f], i) => { const x = 620 + 0, yy = y + 20 + i * 52; b += R(x, yy, 230, 40, f, C.ink, { rx: 20 }) + T(x + 115, yy + 27, s, { size: 17, weight: 700, anchor: 'middle' }); });
  b += T(600, y + 46, 'multi-purpose:', { size: 16, weight: 700, anchor: 'end' });
  const phys = ['Narrow, deep valley in hard rock for the dam', 'Large, reliable flow from snowmelt and monsoon rain', 'Large basin upstream to store water'];
  const hum = ['Capital, often from international lenders', 'Technical expertise', 'Downstream demand for irrigation water and electricity', 'Land that can be flooded with the fewest people resettled'];
  const h = Math.max(cardH(410, { title: 'Physical conditions', body: phys, bullets: true, bs: 16 }), cardH(410, { title: 'Human conditions', body: hum, bullets: true, bs: 16 }));
  b += card(30, y + 320, 410, { title: 'Physical conditions', body: phys, bullets: true, bs: 16, h, bfill: C.ink, fill: C.tealLight, edge: C.tealDark }).s + card(460, y + 320, 410, { title: 'Human conditions', body: hum, bullets: true, bs: 16, h, bfill: C.ink, fill: C.cream, edge: C.olive }).s;
  add('05-multipurpose-hydel',
    svg(900, y + 320 + h + 30, 'A multi-purpose hydel scheme', b, 'simple cross-section, not to scale'),
    'Cross-section of a dam across a valley holding back a reservoir, with water passing through a power station and on downstream. The scheme provides irrigation water, electricity and flood control. Cards list the physical conditions (narrow, deep valley in hard rock, reliable flow, large basin) and human conditions (capital, expertise, downstream demand, few people to resettle).',
    'A good dam site needs the right valley and river, plus the money, skills and demand to use it.',
    '## Why are multi-purpose hydel schemes built where they are?');
}

// 06 Why supply is unreliable
{
  const causes = [
    ['Demand outgrows capacity', 'Demand has grown faster than generating capacity.'],
    ['Costly imported fuel', 'Power stations depend on it.'],
    ['Low hydel output in winter', 'River flow falls.'],
    ['High network losses', 'On transmission and distribution lines.'],
    ['Remote areas far from the grid', 'Balochistan, the north and the Thar desert cost a great deal to connect.'],
  ];
  const w = 156, h = Math.max(...causes.map(([a, c]) => cardH(w, { title: a, body: c, bs: 15, ts: 16 })));
  let b = '';
  causes.forEach(([a, c], i) => { b += card(30 + i * 171, 112, w, { title: a, body: c, bs: 15, ts: 16, h, fill: '#f6e3d6', edge: C.rust, bfill: C.ink }).s; });
  const y = 112 + h + 50;
  b += arrow(450, 112 + h + 6, 450, y - 6, { w: 4 });
  b += R(170, y, 560, 60, C.rust, C.ink) + T(450, y + 38, 'Load-shedding: planned power cuts are common', { size: 19, weight: 700, anchor: 'middle', fill: '#ffffff' });
  const y2 = y + 104;
  b += arrow(450, y + 64, 450, y2 - 6, { w: 4 });
  b += card(30, y2, 840, { title: 'More feasible than extending the grid', body: 'Small-scale schemes: micro-hydel on mountain streams, or village solar systems.', fill: C.tealLight, edge: C.tealDark, bfill: C.ink }).s;
  const ch = cardH(840, { title: 'More feasible than extending the grid', body: 'Small-scale schemes: micro-hydel on mountain streams, or village solar systems.' });
  add('06-unreliable-supply',
    svg(900, y2 + ch + 30, 'Why the power supply is not reliable', b),
    'Five causes (demand outgrowing capacity, costly imported fuel, low hydel output in winter, high network losses and remote areas far from the grid) lead to frequent load-shedding. This makes small-scale schemes such as micro-hydel and village solar more feasible than grid extension for remote places.',
    'Where the grid cannot reach reliably, small local schemes can be the feasible answer.',
    '## Why is electricity supply not reliable in many parts of Pakistan?');
}

// 07 Command words ladder
{
  const steps = [
    ['Describe', 'Name a source, a place and a fact.', C.panel, C.panelEdge],
    ['Explain', 'Link a cause to an effect with “because” or “so”.', C.tealLight, C.tealDark],
    ['Evaluate / assess', 'Give advantages and disadvantages, refer to Pakistan, then reach a judgement. Often the final part.', C.cream, C.olive],
  ];
  let b = '';
  steps.forEach(([a, c, f, e], i) => {
    const x = 30 + i * 120, y = 112 + (2 - i) * 0 + i * 96, w = 600;
    const cc = card(x, y, w, { title: a, body: c, ts: 22, bs: 17, h: 86, fill: f, edge: e, bfill: C.ink });
    b += cc.s + badge(x + w + 36, y + 43, 24, String(i + 1), i === 2 ? C.mustard : C.cream);
  });
  add('07-command-words',
    svg(900, 112 + 3 * 96 + 14, 'Answering Power questions', b),
    'Three stepped cards. Describe: name a source, a place and a fact. Explain: link a cause to an effect with because or so. Evaluate or assess: give advantages and disadvantages, refer to Pakistan and reach a judgement.',
    'Each command word asks for one step more than the last.',
    '## How to approach Power exam questions');
}
