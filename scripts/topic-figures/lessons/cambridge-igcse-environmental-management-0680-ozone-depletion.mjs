import { C, svg, panel, t as t0, tl as tl0, arrow, path, badge as badge0 } from '../style.mjs';

// house minimum text size is 15: clamp every label drawn in this file
const MIN = 15;
const t = (x, y, s, o = {}) => t0(x, y, s, { ...o, size: Math.max(MIN, o.size || 18) });
const tl = (x, y, lines, opts = {}, lh = Math.max(MIN, opts.size || 18) * 1.3) => lines.map((s, i) => t(x, y + i * lh, s, opts)).join('');
const badge = (cx, cy, r, label, fill = C.mustard) => { const sz = Math.max(MIN, r); return `<circle cx="${cx}" cy="${cy}" r="${Math.max(r, sz * 0.85)}" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + t(cx, cy + sz * 0.36, label, { size: sz, weight: 700, anchor: 'middle' }); };

export const slug = 'cambridge-igcse-environmental-management-0680-ozone-depletion';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- local helpers (kept in this file; style.mjs is shared) ----
const esc = (s) => String(s).replace(/&(?!(amp|lt|gt|quot|#\d+);)/g, '&amp;').replace(/</g, '&lt;');
// wrap text to a pixel width (approximate Inter metrics)
const wrap = (s, w, size = 17, bold = false) => {
  size = Math.max(MIN, size);
  const max = Math.max(4, Math.floor(w / (size * (bold ? 0.57 : 0.53))));
  const out = [''];
  for (const word of String(s).split(' ')) {
    const cur = out[out.length - 1];
    if (cur && (cur + ' ' + word).length > max) out.push(word); else out[out.length - 1] = cur ? cur + ' ' + word : word;
  }
  return out;
};
// text block wrapped to width; returns {svg, h}
const para = (x, y, s, w, opts = {}) => {
  const size = opts.size || 17, lh = opts.lh || Math.round(size * 1.32);
  const lines = wrap(s, w, size, (opts.weight || 400) >= 600);
  return { svg: tl(x, y, lines, opts, lh), h: lines.length * lh, n: lines.length };
};
// card: panel with bold title and wrapped body; body text starts below title
const card = (x, y, w, h, title, body, o = {}) => {
  const fill = o.fill || C.panel, edge = o.edge || C.panelEdge, ts = o.ts || 20, bs = o.bs || 16.5, pad = o.pad || 18;
  const anchor = o.center ? 'middle' : 'start', tx = o.center ? x + w / 2 : x + pad;
  let s = panel(x, y, w, h, fill, edge);
  let cy = y + pad + ts * 0.85 + (o.top || 0);
  if (title) { const tt = wrap(title, w - 2 * pad, ts, true); s += tl(tx, cy, tt, { size: ts, weight: 700, anchor, fill: o.tfill || C.ink }, ts * 1.25); cy += (tt.length - 1) * ts * 1.25 + bs * 1.55; }
  if (body) { const bl = Array.isArray(body) ? body : wrap(body, w - 2 * pad, bs); s += tl(tx, cy, bl, { size: bs, anchor, fill: o.bfill || C.muted }, bs * 1.32); }
  return s;
};
const pill = (x, y, w, h, label, o = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${o.fill || C.cream}" stroke="${o.edge || C.olive}" stroke-width="2.5"/>` +
  t(x + w / 2, y + h / 2 + (o.size || 17) * 0.36, label, { size: o.size || 17, weight: o.weight || 700, anchor: 'middle', fill: o.color || C.ink });
const rrect = (x, y, w, h, fill, edge = C.ink, sw = 2.5, rx = 10) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
const circ = (cx, cy, r, fill, edge = C.ink, sw = 2.5) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
const line = (x1, y1, x2, y2, o = {}) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${o.color || C.ink}" stroke-width="${o.w || 2.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
const sun = (cx, cy, r = 22) => { let s = ''; for (let i = 0; i < 8; i++) { const a = (i * Math.PI) / 4; s += line(cx + Math.cos(a) * (r + 6), cy + Math.sin(a) * (r + 6), cx + Math.cos(a) * (r + 15), cy + Math.sin(a) * (r + 15), { color: C.olive, w: 3 }); } return s + circ(cx, cy, r, C.mustard, C.olive, 2.5); };
const cloud = (cx, cy, s = 1, fill = '#ffffff') => `<path d="M${cx - 60 * s},${cy + 20 * s} Q${cx - 80 * s},${cy + 20 * s} ${cx - 78 * s},${cy} Q${cx - 76 * s},${cy - 22 * s} ${cx - 50 * s},${cy - 18 * s} Q${cx - 40 * s},${cy - 48 * s} ${cx - 5 * s},${cy - 42 * s} Q${cx + 25 * s},${cy - 60 * s} ${cx + 45 * s},${cy - 25 * s} Q${cx + 80 * s},${cy - 25 * s} ${cx + 78 * s},${cy + 2 * s} Q${cx + 80 * s},${cy + 20 * s} ${cx + 60 * s},${cy + 20 * s} Z" fill="${fill}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>`;
const rain = (x, y, n = 4, gap = 18, len = 18, color = C.blue) => { let s = ''; for (let i = 0; i < n; i++) s += line(x + i * gap, y + (i % 2) * 8, x + i * gap - 5, y + (i % 2) * 8 + len, { color, w: 2.5 }); return s; };
const house = (x, y, s = 1, roof = C.rust) => `<rect x="${x}" y="${y}" width="${30 * s}" height="${24 * s}" fill="#ffffff" stroke="${C.ink}" stroke-width="2.2"/><path d="M${x - 3 * s},${y} L${x + 15 * s},${y - 13 * s} L${x + 33 * s},${y} Z" fill="${roof}" stroke="${C.ink}" stroke-width="2"/>`;
const tree = (x, y, s = 1, fill = C.grass) => `<rect x="${x - 3 * s}" y="${y - 18 * s}" width="${6 * s}" height="${18 * s}" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="1.8"/><circle cx="${x}" cy="${y - 30 * s}" r="${16 * s}" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>`;
const person = (x, y, s = 1, fill = C.tealDark) => `<circle cx="${x}" cy="${y - 34 * s}" r="${7 * s}" fill="${fill}"/><path d="M${x - 9 * s},${y} L${x - 9 * s},${y - 16 * s} Q${x - 9 * s},${y - 25 * s} ${x},${y - 25 * s} Q${x + 9 * s},${y - 25 * s} ${x + 9 * s},${y - 16 * s} L${x + 9 * s},${y} Z" fill="${fill}"/>`;
const factory = (x, y, s = 1) => `<path d="M${x},${y} L${x},${y - 30 * s} L${x + 20 * s},${y - 42 * s} L${x + 20 * s},${y - 30 * s} L${x + 40 * s},${y - 42 * s} L${x + 40 * s},${y - 30 * s} L${x + 60 * s},${y - 42 * s} L${x + 60 * s},${y} Z" fill="#ffffff" stroke="${C.ink}" stroke-width="2.2" stroke-linejoin="round"/><rect x="${x + 45 * s}" y="${y - 66 * s}" width="${9 * s}" height="${30 * s}" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>`;
// vertical flow of boxes with arrows between; items: [title, body]
const flowDown = (x, y, w, hs, gap, items, o = {}) => {
  let s = '', cy = y;
  items.forEach((it, i) => {
    const h = Array.isArray(hs) ? hs[i] : hs;
    s += card(x, cy, w, h, it[0], it[1], { ...o, ...(it[2] || {}) });
    if (i < items.length - 1) s += arrow(x + w / 2, cy + h + 3, x + w / 2, cy + h + gap - 4, { w: 3.5 });
    cy += h + gap;
  });
  return s;
};
// horizontal flow of boxes
const flowRight = (x, y, ws, h, gap, items, o = {}) => {
  let s = '', cx = x;
  items.forEach((it, i) => {
    const w = Array.isArray(ws) ? ws[i] : ws;
    s += card(cx, y, w, h, it[0], it[1], { ...o, ...(it[2] || {}) });
    if (i < items.length - 1) s += arrow(cx + w + 3, y + h / 2, cx + w + gap - 4, y + h / 2, { w: 3.5 });
    cx += w + gap;
  });
  return s;
};
// label with a soft white backing so it reads over lines
const tag = (x, y, s, o = {}) => { const size = Math.max(MIN, o.size || 15), w = String(s).length * size * ((o.weight || 700) >= 600 ? 0.6 : 0.55) + 12; const x0 = o.anchor === 'middle' ? x - w / 2 : o.anchor === 'end' ? x - w + 6 : x - 6; return `<rect x="${x0}" y="${y - size * 0.95}" width="${w}" height="${size * 1.35}" rx="5" fill="${o.bg || '#ffffff'}" opacity="${o.op || 0.92}"/>` + t(x, y, s, { size, weight: o.weight || 700, anchor: o.anchor || 'start', fill: o.fill || C.ink }); };
// bulleted list, each item wrapped to width w; returns {svg, h}
const bullets = (x, y, items, w, o = {}) => {
  const size = Math.max(MIN, o.size || 16.5), lh = o.lh || Math.round(size * 1.3), gap = o.gap ?? 8; let s = '', yy = y;
  for (const it of items) { const ls = wrap(it, w - 18, size); s += t(x, yy, o.mark || '•', { size: o.mark ? size + 3 : size, fill: o.bullet || o.fill || C.ink, weight: 700 }) + tl(x + 16, yy, ls, { size, fill: o.fill || C.ink }, lh); yy += ls.length * lh + gap; }
  return { svg: s, h: yy - y };
};
const turbine = (x, y, s = 1) => `<line x1="${x}" y1="${y}" x2="${x}" y2="${y - 60 * s}" stroke="${C.ink}" stroke-width="${3 * s}"/>` + [0, 120, 240].map((a) => { const r = (a - 90) * Math.PI / 180; return `<line x1="${x}" y1="${y - 60 * s}" x2="${x + Math.cos(r) * 30 * s}" y2="${y - 60 * s + Math.sin(r) * 30 * s}" stroke="${C.ink}" stroke-width="${3.5 * s}" stroke-linecap="round"/>`; }).join('') + `<circle cx="${x}" cy="${y - 60 * s}" r="${4 * s}" fill="${C.mustard}" stroke="${C.ink}" stroke-width="1.5"/>`;
// curved or multi-point arrow along an SVG path
const carrow = (d, o = {}) => `<path d="${d}" fill="none" stroke="${o.color || C.ink}" stroke-width="${o.w || 3.5}" stroke-linejoin="round" stroke-linecap="round" marker-end="url(#${o.marker || 'ah'})"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
// horizontal bar chart helper: axis box with ticks; returns svg
const hbar = (x, y, w, h, fill, edge = C.ink) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" stroke="${edge}" stroke-width="2"/>`;
// ---- end helpers ----

const H2 = {
  bg: '## Background: where the ozone layer is and what it does',
  cause: '## The cause (4.4.1)',
  imp: '## Impacts (4.4.2)',
  man: '## Management strategies (4.4.3)',
  bl: '## Benefits and limitations (4.4.4)',
  we1: '## Worked example 1: interpreting data',
};
const ozone = (x, y, r = 7) => circ(x - r, y + r * 0.6, r, C.mustard, C.olive, 1.6) + circ(x + r, y + r * 0.6, r, C.mustard, C.olive, 1.6) + circ(x, y - r * 0.8, r, C.mustard, C.olive, 1.6);
const uv = (x1, y1, x2, y2, w = 4) => arrow(x1, y1, x2, y2, { color: C.olive, w, marker: 'ahO' });

// 01 Where the ozone layer is and what it does
{
  let b = '';
  const col = (x, title, thin) => {
    let s = panel(x, 110, 410, 520) + t(x + 205, 146, title, { size: 21, weight: 700, anchor: 'middle', fill: thin ? C.rust : C.tealDark });
    s += `<rect x="${x + 20}" y="160" width="370" height="230" fill="#e9eef6"/>` + `<rect x="${x + 20}" y="390" width="370" height="180" fill="#f1f4f2"/>` + `<rect x="${x + 20}" y="570" width="370" height="40" fill="${C.rockDark}"/>`;
    s += line(x + 20, 390, x + 390, 390, { dash: '8 6', w: 2, color: C.muted });
    s += t(x + 380, 186, 'stratosphere', { size: 15.5, anchor: 'end', fill: C.muted, weight: 600 }) + t(x + 380, 414, 'troposphere', { size: 15.5, anchor: 'end', fill: C.muted, weight: 600 });
    const lt = thin ? 6 : 0;
    s += `<rect x="${x + 20}" y="${290 + lt}" width="370" height="${70 - lt * 2}" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>`;
    const n = thin ? 4 : 9;
    for (let i = 0; i < n; i++) s += ozone(x + 50 + i * (thin ? 90 : 39), 325, 6);
    const xs = [x + 80, x + 150, x + 220, x + 290];
    xs.forEach((xx, i) => {
      if (thin ? i === 3 : i >= 1) { s += uv(xx, 200, xx, 300, 4); }
      else s += uv(xx, 200, xx, 545, 4);
    });
    s += tag(x + 205, 382, 'ozone layer (lower stratosphere)', { size: 15.5, anchor: 'middle', bg: C.cream, op: 1 });
    s += t(x + 205, 595, thin ? 'more UV reaches the surface' : 'only a fraction reaches the surface', { size: 16.5, weight: 700, anchor: 'middle', fill: '#ffffff' });
    return s;
  };
  b += col(30, 'Healthy ozone layer', false) + col(460, 'Depleted ozone layer', true);
  b += t(450, 660, 'UV = ultraviolet radiation from the Sun (arrows). Ozone (O3) has three oxygen atoms.', { size: 16.5, anchor: 'middle', fill: C.muted });
  b += t(450, 686, 'Depletion means the layer thins, so it absorbs less UV.', { size: 17, weight: 700, anchor: 'middle' });
  b += t(860, 125 + 0, '', {});
  add('01-ozone-layer-role',
    svg(900, 710, 'What the ozone layer does', b),
    'Two atmosphere columns. With a healthy ozone layer in the lower stratosphere, most ultraviolet arrows from the Sun are absorbed and only a fraction reach the surface. With a depleted, thinner layer, more ultraviolet passes through to the surface.',
    'A thinner ozone layer absorbs less ultraviolet, so more reaches the Earth’s surface.',
    H2.bg);
}

// 02 Why CFCs were used, and why that is the problem
{
  let b = '';
  b += card(30, 110, 410, 170, 'Aerosols', ['CFCs were the propellant gas in spray', 'cans: deodorants, paints, polishes'], { fill: '#ffffff', edge: C.panelEdge, ts: 20, bs: 16.5, bfill: C.ink });
  b += card(460, 110, 410, 170, 'Refrigerants', ['coolant gas in fridges, freezers and air-', 'conditioning; escapes when equipment', 'leaks or is scrapped without care'], { fill: '#ffffff', edge: C.panelEdge, ts: 20, bs: 16.5, bfill: C.ink });
  // spray can
  b += `<rect x="370" y="195" width="36" height="70" rx="8" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/><rect x="378" y="182" width="20" height="13" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>`;
  for (let i = 0; i < 5; i++) b += circ(330 + i * 9, 205 - i * 4, 3, C.muted, C.muted, 1);
  // fridge
  b += `<rect x="800" y="190" width="50" height="78" rx="6" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/>` + line(800, 220, 850, 220, { w: 2.5 }) + line(842, 198, 842, 213, { w: 3 }) + line(842, 230, 842, 250, { w: 3 });
  // properties chain
  b += panel(30, 300, 840, 290, C.cream, C.olive);
  b += t(60, 338, 'The property that made CFCs useful is the problem', { size: 20, weight: 700 });
  const chain = [['unreactive, non-flammable, non-toxic near the ground', '#ffffff'], ['last a long time in the air', '#ffffff'], ['drift up into the stratosphere', '#ffffff'], ['UV breaks them apart, releasing chlorine, which destroys ozone', '#fbf1ea']];
  chain.forEach(([s, f], i) => {
    const x = 50 + i * 205;
    b += rrect(x, 360, 190, 130, f, i === 3 ? C.rust : C.olive, 2.5, 12) + tl(x + 95, 396, wrap(s, 165, 16.5, true), { size: 16.5, weight: 700, anchor: 'middle' }, 22);
    if (i < 3) b += arrow(x + 192, 425, x + 203, 425, { w: 3 });
  });
  b += t(60, 530, 'One chlorine atom can break down a very large number of ozone molecules, so', { size: 16.5 }) + t(60, 556, 'small amounts cause great damage and CFCs released decades ago still act today.', { size: 16.5 });
  add('02-cfc-sources-stability',
    svg(900, 615, 'CFCs: useful, stable and harmful', b),
    'CFCs were the propellant in aerosol spray cans and the coolant in fridges, freezers and air-conditioning. Because they are unreactive, non-flammable and non-toxic near the ground they last a long time, drift up to the stratosphere and are broken apart by ultraviolet radiation, releasing chlorine that destroys ozone.',
    'CFCs are so stable that they survive to reach the stratosphere, where they release chlorine.',
    H2.cause);
}

// 03 Impacts chain
{
  let b = '';
  const box = (x, y, w, h, s, fill, edge, tc = C.ink) => rrect(x, y, w, h, fill, edge, 2.5, 12) + tl(x + w / 2, y + h / 2 - (wrap(s, w - 30, 18, true).length - 1) * 11 + 6, wrap(s, w - 30, 18, true), { size: 18, weight: 700, anchor: 'middle', fill: tc }, 22);
  b += box(300, 110, 300, 70, 'Less ozone', C.cream, C.olive);
  b += arrow(450, 184, 450, 214, { w: 4 });
  b += box(225, 220, 450, 80, '1. Higher levels of solar (UV) radiation reach the surface', C.mustard, C.olive);
  b += carrow('M330,304 Q260,340 200,360', { w: 4 }) + carrow('M570,304 Q640,340 700,360', { w: 4 });
  b += panel(30, 366, 400, 290, '#fbf1ea', C.rust) + t(230, 400, '2. People', { size: 20, weight: 700, anchor: 'middle', fill: C.rust });
  b += box(55, 420, 160, 110, 'skin cells damaged', '#ffffff', C.rust) + box(245, 420, 160, 110, 'eye lens damaged', '#ffffff', C.rust);
  b += arrow(135, 534, 135, 560, { w: 3.5 }) + arrow(325, 534, 325, 560, { w: 3.5 });
  b += box(55, 566, 160, 70, 'skin cancer', C.rust, C.rust, '#ffffff') + box(245, 566, 160, 70, 'cataracts', C.rust, C.rust, '#ffffff');
  b += panel(470, 366, 400, 290, '#eef5f4', C.tealDark) + t(670, 400, '3. Vegetation', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += box(495, 420, 350, 64, 'leaves and plant cells damaged', '#ffffff', C.tealDark);
  b += arrow(670, 488, 670, 508, { w: 3.5 });
  b += box(495, 512, 350, 56, 'less photosynthesis and growth', '#ffffff', C.tealDark);
  b += arrow(670, 572, 670, 590, { w: 3.5 });
  b += box(495, 594, 350, 46, 'reduced crop yields', C.tealDark, C.tealDark, '#ffffff');
  b += t(450, 690, 'Cataract: a clouding of the eye lens that impairs sight. Crop losses link ozone to food supply.', { size: 16, anchor: 'middle', fill: C.muted });
  add('03-impacts-chain',
    svg(900, 715, 'Three linked impacts of ozone depletion', b),
    'A chain: less ozone leads to higher levels of ultraviolet radiation at the surface. In people this damages skin cells, causing skin cancer, and the eye lens, causing cataracts. In plants it damages leaves, reducing photosynthesis and growth, so crop yields fall.',
    'Less ozone, more UV, then a named harm: skin cancer, cataracts or lower crop yields.',
    H2.imp);
}

// 04 Replacing CFCs
{
  let b = '';
  const steps = [
    ['CFCs', 'deplete ozone', C.rust, '#fbf1ea'],
    ['HCFCs', 'much less damage; a temporary step', C.olive, C.cream],
    ['HFCs and hydrocarbons', 'do not deplete ozone', C.tealDark, '#eef5f4'],
  ];
  steps.forEach(([h, d, e, f], i) => {
    const x = 30 + i * 290;
    b += rrect(x, 120, 260, 120, f, e, 3, 14) + t(x + 130, 168, h, { size: i === 2 ? 19 : 22, weight: 700, anchor: 'middle', fill: e }) + tl(x + 130, 200, wrap(d, 220, 16.5), { size: 16.5, anchor: 'middle' }, 21);
    if (i < 2) b += arrow(x + 263, 180, x + 286, 180, { w: 4 });
  });
  b += t(450, 270, 'in refrigeration', { size: 16.5, anchor: 'middle', fill: C.muted, italic: true });
  b += panel(30, 290, 840, 120, C.panel, C.panelEdge);
  b += t(60, 326, 'In aerosols', { size: 18, weight: 700 });
  ['pump-action sprays', 'roll-on products', 'propellants without chlorine'].forEach((s, i) => (b += pill(60 + [0, 230, 450][i], 344, [210, 200, 300][i], 46, s, { fill: C.tealLight, edge: C.tealDark, size: 16.5 })));
  b += panel(30, 430, 840, 210, C.cream, C.olive);
  b += t(60, 468, 'New problems from substitutes', { size: 19, weight: 700, fill: C.olive });
  b += bullets(60, 500, ['HCFCs still deplete ozone a little', 'HFCs are powerful greenhouse gases: solving one problem created another', 'hydrocarbons are flammable'], 780, { size: 17 }).svg;
  b += rrect(60, 590, 780, 36, '#ffffff', C.olive, 2, 8) + t(450, 614, 'Kigali amendment to the Montreal Protocol (2016): now phases down HFCs', { size: 16.5, weight: 700, anchor: 'middle' });
  add('04-replacing-cfcs',
    svg(900, 665, 'Replacing CFCs, step by step', b),
    'In refrigeration CFCs were replaced first by HCFCs, which do much less damage and were a temporary step, then by HFCs and hydrocarbons, which do not deplete ozone. In aerosols pump-action sprays, roll-ons and chlorine-free propellants replaced them. HCFCs still deplete a little, HFCs are powerful greenhouse gases and hydrocarbons are flammable; the 2016 Kigali amendment phases down HFCs.',
    'Each substitute fixed the ozone problem better, but HFCs created a climate problem.',
    H2.man);
}

// 05 Safe disposal
{
  let b = '';
  const steps = [['1', 'Collect', 'old fridges, freezers and air-conditioners'], ['2', 'Remove', 'the refrigerant and the CFC-containing insulation foam'], ['3', 'Scrap', 'the metal only after the CFCs are out'], ['4', 'Destroy or store', 'CFCs destroyed at high temperature or stored securely']];
  steps.forEach(([n, h, d], i) => {
    const x = 30 + i * 213;
    b += panel(x, 120, 195, 200, i === 1 ? C.cream : C.panel, i === 1 ? C.olive : C.panelEdge) + badge(x + 97, 158, 22, n, C.mustard);
    b += t(x + 97, 212, h, { size: 19, weight: 700, anchor: 'middle' }) + tl(x + 97, 244, wrap(d, 165, 16), { size: 16, anchor: 'middle', fill: C.muted }, 21);
    if (i < 3) b += arrow(x + 197, 220, x + 210, 220, { w: 3 });
  });
  b += panel(30, 340, 410, 132, '#eef5f4', C.tealDark) + t(54, 376, 'Benefit', { size: 18, weight: 700, fill: C.tealDark }) + tl(54, 406, ['stops CFCs already “banked” in old', 'equipment leaking to the air'], { size: 16.5 }, 22);
  b += panel(460, 340, 410, 132, '#fbf1ea', C.rust) + t(484, 376, 'Limitations', { size: 18, weight: 700, fill: C.rust }) + tl(484, 406, ['needs collection systems, specialist', 'plants and funding; illegal dumping', 'still happens in some places'], { size: 16.5 }, 22);
  add('05-safe-disposal',
    svg(900, 497, 'Safe disposal of CFCs', b),
    'Four steps: collect old fridges, freezers and air-conditioners; remove the refrigerant and CFC-containing foam; scrap the metal; destroy the CFCs at high temperature or store them securely. This stops banked CFCs leaking, but needs collection systems, specialist plants and funding, and illegal dumping still happens.',
    'Safe disposal removes CFCs from old appliances before they can leak.',
    H2.man);
}

// 06 Why ozone action worked
{
  let b = '';
  b += t(450, 128, 'Three reasons the ozone strategies succeeded', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
  const r = [['Practical substitutes', 'existed for aerosols and fridges'], ['Few producers', 'a small number to regulate'], ['Clear evidence', 'of harm']];
  r.forEach(([h, d], i) => (b += card(30 + i * 285, 146, 270, 110, h, d, { fill: '#eef5f4', edge: C.tealDark, ts: 19, bs: 16.5, center: true })));
  b += panel(30, 276, 840, 110, C.cream, C.olive);
  b += t(60, 314, 'But recovery is slow', { size: 19, weight: 700, fill: C.olive });
  b += t(60, 344, 'CFCs already released stay in the atmosphere for decades, so the problem', { size: 17 }) + t(60, 368, 'is not “solved”: monitoring and enforcement must continue.', { size: 17 });
  b += t(450, 430, 'Compared with climate change', { size: 20, weight: 700, anchor: 'middle' });
  b += card(30, 450, 410, 90, 'Ozone: CFCs', 'cheap substitutes and few producers', { fill: '#ffffff', edge: C.tealDark, tfill: C.tealDark, ts: 19, bs: 17, center: true });
  b += card(460, 450, 410, 90, 'Climate: fossil fuels', 'underpin whole economies', { fill: '#ffffff', edge: C.rust, tfill: C.rust, ts: 19, bs: 17, center: true });
  add('06-why-it-worked',
    svg(900, 565, 'Why the ozone strategies worked', b),
    'Three reasons the ozone strategies succeeded: practical substitutes, few producers to regulate and clear evidence of harm. Recovery is still slow because CFCs persist for decades. Compared with climate change, CFCs had cheap substitutes and few producers, whereas fossil fuels underpin whole economies.',
    'Cheap substitutes, few producers and clear evidence made ozone action work; recovery still takes decades.',
    H2.bl);
}

// 07 Worked example: ozone data
{
  let b = panel(30, 110, 560, 520);
  const x0 = 120, y0 = 540, xk = (yr) => x0 + (yr - 1970) * 7, yk = (v) => y0 - (v / 350) * 380;
  b += line(x0, y0, 560, y0, { w: 3 }) + line(x0, y0, x0, yk(350), { w: 3 });
  for (let v = 0; v <= 350; v += 50) b += line(x0 - 8, yk(v), x0, yk(v), { w: 2.5 }) + t(x0 - 14, yk(v) + 6, String(v), { size: 15.5, anchor: 'end' }) + (v ? line(x0 + 2, yk(v), 560, yk(v), { color: '#e3e9e8', w: 1.5 }) : '');
  [1970, 1990, 2010, 2030].forEach((yr) => (b += line(xk(yr), y0, xk(yr), y0 + 8, { w: 2.5 }) + t(xk(yr), y0 + 30, String(yr), { size: 16, anchor: 'middle' })));
  b += `<text x="58" y="${yk(175)}" font-size="16" fill="${C.muted}" text-anchor="middle" transform="rotate(-90 58 ${yk(175)})">October ozone (units)</text>`;
  b += line(xk(1987), yk(340), xk(1987), y0, { dash: '6 5', color: C.tealDark, w: 2.5 }) + t(xk(1987) + 8, yk(330), 'Montreal', { size: 15.5, weight: 700, fill: C.tealDark }) + t(xk(1987) + 8, yk(330) + 20, 'Protocol, 1987', { size: 15.5, weight: 700, fill: C.tealDark });
  b += path(`M${xk(1970)},${yk(300)} L${xk(1990)},${yk(160)} L${xk(2010)},${yk(150)}`, { stroke: C.ink, w: 4 }) + path(`M${xk(2010)},${yk(150)} L${xk(2030)},${yk(210)}`, { stroke: C.ink, w: 4, extra: 'stroke-dasharray="10 7"' });
  [[1970, 300], [1990, 160], [2010, 150], [2030, 210]].forEach(([yr, v], i) => (b += circ(xk(yr), yk(v), 8, i === 3 ? '#ffffff' : C.mustard, C.ink, 2.5) + t(xk(yr) + (i <= 1 ? 14 : 0), yk(v) - 16, String(v), { size: 17, weight: 700, anchor: i <= 1 ? 'start' : 'middle' })));
  b += t(xk(2030), yk(210) + 34, 'forecast', { size: 15.5, anchor: 'middle', fill: C.muted, italic: true });
  b += t(570, 140, 'invented data: one station', { size: 15, anchor: 'end', fill: C.muted, italic: true });
  b += panel(610, 110, 260, 520, C.panel, C.panelEdge);
  b += t(632, 148, '1970 to 1990', { size: 18, weight: 700 }) + tl(632, 176, ['(300 − 160) ÷ 300', '× 100 = 46.7% fall'], { size: 17 }, 23);
  b += t(632, 248, 'Describe', { size: 18, weight: 700 }) + tl(632, 274, wrap('steep fall, then level 1990 to 2010, forecast recovery to 210 by 2030', 220, 16), { size: 16 }, 21);
  b += t(632, 380, 'Explain', { size: 18, weight: 700 }) + tl(632, 406, wrap('CFC emissions fell after 1987, but CFCs already in the stratosphere kept destroying ozone', 220, 16), { size: 16 }, 21);
  b += t(632, 532, 'Limitation', { size: 18, weight: 700, fill: C.rust }) + tl(632, 558, wrap('one station and one month; forecasts are uncertain', 220, 16), { size: 16 }, 21);
  add('07-ozone-data',
    svg(900, 655, 'Worked example: reading ozone data', b),
    'A line graph of October ozone at one station: 300 units in 1970, 160 in 1990, 150 in 2010 and a forecast 210 in 2030, with the 1987 Montreal Protocol marked. The fall from 1970 to 1990 is 46.7%. Values stay low after 1987 because CFCs already in the stratosphere kept destroying ozone.',
    'Ozone fell 46.7% by 1990, levelled off after the Montreal Protocol and is forecast to recover slowly.',
    H2.we1);
}
