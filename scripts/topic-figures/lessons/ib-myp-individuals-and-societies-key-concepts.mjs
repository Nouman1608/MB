import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-individuals-and-societies-key-concepts';

export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- local helpers (kept in this file; style.mjs is shared) ----
const esc = (s) => String(s).replace(/&(?!amp;|lt;|gt;|#)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const tx = (x, y, s, o = {}) => t(x, y, esc(s), o);
const wrap = (s, px, size = 17) => {
  const n = Math.max(6, Math.floor(px / (size * 0.5)));
  const out = [];
  for (const para of String(s).split('\n')) {
    let cur = '';
    for (const w of para.split(' ')) {
      if (cur && (cur + ' ' + w).length > n) { out.push(cur); cur = w; } else cur = (cur ? cur + ' ' : '') + w;
    }
    out.push(cur);
  }
  return out;
};
const lines = (x, y, arr, o = {}, lh) => arr.map((s, i) => tx(x, y + i * (lh || (o.size || 17) * 1.32), s, o)).join('');
const LH = (size) => size * 1.32;
const rect = (x, y, w, h, fill = C.panel, edge = C.panelEdge, rx = 12, sw = 2.2) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
const line = (x1, y1, x2, y2, { color = C.ink, w = 2.5, dash = '' } = {}) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const parrow = (d, { color = C.ink, w = 3.5, marker = 'ah', dash = '' } = {}) =>
  `<path d="${d}" fill="none" stroke="${color}" stroke-width="${w}" stroke-linecap="round" marker-end="url(#${marker})"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;

// Box with optional bold title and wrapped body. Returns needed height via boxH.
const boxPad = 18;
const boxLayout = (w, { title = '', body = '', tsize = 19, bsize = 16, pad = boxPad } = {}) => {
  const tl_ = title ? wrap(title, w - 2 * pad, tsize * 1.08) : [];
  const bl_ = body ? wrap(body, w - 2 * pad, bsize) : [];
  const h = pad * 2 + tl_.length * LH(tsize) + (tl_.length && bl_.length ? 6 : 0) + bl_.length * LH(bsize) - (tl_.length || bl_.length ? 0.32 * (bl_.length ? bsize : tsize) : 0);
  return { tl_, bl_, h: Math.ceil(h) };
};
const boxH = (w, o) => boxLayout(w, o).h;
const box = (x, y, w, h, o = {}) => {
  const { title = '', tsize = 19, bsize = 16, fill = C.panel, edge = C.panelEdge, align = 'start', tfill = C.ink, bfill = (o.fill === C.mustard || o.fill === C.teal) ? C.ink : C.muted, pad = boxPad, valign = 'middle', sw = 2.2 } = o;
  const { tl_, bl_, h: need } = boxLayout(w, o);
  const ax = align === 'middle' ? x + w / 2 : x + pad;
  let yy = y + pad + tsize * 0.95 + (valign === 'middle' ? Math.max(0, (h - need) / 2) : 0);
  if (!tl_.length) yy = y + pad + bsize * 0.95 + (valign === 'middle' ? Math.max(0, (h - need) / 2) : 0);
  let s = rect(x, y, w, h, fill, edge, 12, sw);
  if (tl_.length) { s += lines(ax, yy, tl_, { size: tsize, weight: 700, fill: tfill, anchor: align }, LH(tsize)); yy += tl_.length * LH(tsize) + 6 - LH(tsize) + LH(bsize); }
  if (bl_.length) s += lines(ax, yy, bl_, { size: bsize, fill: bfill, anchor: align }, LH(bsize));
  return s;
};

// Numbered/lettered rows: [label, heading, desc, fill?]. Returns {s, h}.
const rowList = (x, y, w, items, { gap = 14, bsize = 17, tsize = 22, r = 28, minH = 96 } = {}) => {
  let s = '', yy = y;
  items.forEach(([L, head, desc, fill], i) => {
    const tw = w - (r * 2 + 60);
    const dl = desc ? wrap(desc, tw - 20, bsize) : [];
    const hl = wrap(head, tw - 20, tsize * 1.08);
    const h = Math.max(minH, 30 + hl.length * LH(tsize) + dl.length * LH(bsize) + 14);
    s += panel(x, yy, w, h) + (L !== '' ? badge(x + 26 + r, yy + h / 2, r, L, fill || (i % 2 ? C.cream : C.mustard)) : '');
    const tx0 = x + r * 2 + 50;
    let ty = yy + (h - (hl.length * LH(tsize) + dl.length * LH(bsize))) / 2 + tsize * 0.85;
    s += lines(tx0, ty, hl, { size: tsize, weight: 700 }, LH(tsize));
    s += lines(tx0, ty + hl.length * LH(tsize) - 2, dl, { size: bsize, fill: C.muted }, LH(bsize));
    yy += h + gap;
  });
  return { s, h: yy - y - gap };
};

// Table: cols = [{w, head, fill}], rows = [[cell, cell...]], first column bold.
const table = (x, y, cols, rows, { size = 16, hsize = 18, pad = 12, headFill = C.tealDark, firstBold = true, zebra = true, rowFills } = {}) => {
  let s = '', yy = y;
  const W = cols.reduce((a, c) => a + c.w, 0);
  const hh = Math.max(...cols.map((c) => wrap(c.head, c.w - 2 * pad, hsize).length)) * LH(hsize) + 2 * pad;
  s += `<rect x="${x}" y="${y}" width="${W}" height="${hh + 4}" rx="12" fill="${headFill}"/>`;
  let xx = x;
  cols.forEach((c) => { const hl = wrap(c.head, c.w - 2 * pad, hsize); s += lines(xx + pad, y + pad + hsize * 0.9 + (hh - 2 * pad - hl.length * LH(hsize)) / 2, hl, { size: hsize, weight: 700, fill: '#ffffff' }, LH(hsize)); xx += c.w; });
  yy += hh;
  const body = [];
  rows.forEach((r, ri) => {
    const cl = r.map((cell, ci) => wrap(cell, cols[ci].w - 2 * pad, size));
    const rh = Math.max(...cl.map((l) => l.length)) * LH(size) + 2 * pad - 4;
    const fill = rowFills ? rowFills[ri] : zebra && ri % 2 ? '#f7f9f9' : C.panel;
    body.push(`<rect x="${x}" y="${yy}" width="${W}" height="${rh}" fill="${fill}"/>`);
    let cx = x;
    cl.forEach((l, ci) => { body.push(lines(cx + pad, yy + pad + size * 0.85, l, { size, weight: ci === 0 && firstBold ? 700 : 400, fill: ci === 0 && firstBold ? C.ink : C.ink }, LH(size))); cx += cols[ci].w; });
    if (ri) body.push(line(x, yy, x + W, yy, { color: C.panelEdge, w: 1.5 }));
    yy += rh;
  });
  let cx = x;
  const vlines = cols.slice(0, -1).map((c) => { cx += c.w; return line(cx, y + hh, cx, yy, { color: C.panelEdge, w: 1.5 }); }).join('');
  s += body.join('') + vlines + `<rect x="${x}" y="${y}" width="${W}" height="${yy - y}" rx="12" fill="none" stroke="${C.ink}" stroke-width="2.2"/>`;
  return { s, h: yy - y };
};

// Vertical chain of boxes joined by arrows. steps: [{title, body, fill, edge}]
const chainV = (x, y, w, steps, { gap = 46, tsize = 19, bsize = 16, align = 'middle', color = C.ink, marker = 'ah' } = {}) => {
  let s = '', yy = y;
  steps.forEach((st, i) => {
    const h = st.h || boxH(w, { tsize, bsize, ...st });
    s += box(x, yy, w, h, { tsize, bsize, align, ...st });
    if (i < steps.length - 1) s += arrow(x + w / 2, yy + h + 4, x + w / 2, yy + h + gap - 6, { color, marker });
    yy += h + gap;
  });
  return { s, h: yy - y - gap };
};

// Horizontal chain: equal-width boxes across width W.
const chainH = (x, y, W, steps, { gap = 40, h, tsize = 18, bsize = 15, color = C.ink, marker = 'ah' } = {}) => {
  const n = steps.length, bw = (W - gap * (n - 1)) / n;
  const hh = h || Math.max(...steps.map((st) => boxH(bw, { tsize, bsize, pad: 14, ...st })));
  let s = '';
  steps.forEach((st, i) => {
    const bx = x + i * (bw + gap);
    s += box(bx, y, bw, hh, { tsize, bsize, align: 'middle', pad: 14, ...st });
    if (i < n - 1) s += arrow(bx + bw + 3, y + hh / 2, bx + bw + gap - 5, y + hh / 2, { color, marker });
  });
  return { s, h: hh, bw };
};

// Cycle: nodes placed round a circle with arcing arrows between them.
const cycle = (cx, cy, R, nodes, { bw = 210, bh = 84, tsize = 18, bsize = 15, start = -90, centre = null, gapDeg } = {}) => {
  const n = nodes.length; let s = '';
  const pos = nodes.map((_, i) => { const a = ((start + (360 * i) / n) * Math.PI) / 180; return [cx + R * Math.cos(a), cy + R * Math.sin(a), a]; });
  const sz = nodes.map((nd) => [(nd.w || bw) / 2 + 10, (nd.h || bh) / 2 + 10]);
  const outside = (i, a) => { const px = cx + R * Math.cos(a), py = cy + R * Math.sin(a); return Math.abs(px - pos[i][0]) > sz[i][0] || Math.abs(py - pos[i][1]) > sz[i][1]; };
  const clear = (i, dir) => { let d = 0; while (d < Math.PI && !outside(i, pos[i][2] + dir * d)) d += 0.005; return d + (gapDeg || 0) * Math.PI / 180; };
  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n;
    const a1 = pos[i][2] + clear(i, 1), a2 = pos[j][2] - clear(j, -1) + (j === 0 ? 2 * Math.PI : 0);
    if (a2 - a1 < 0.05) continue;
    const p1 = [cx + R * Math.cos(a1), cy + R * Math.sin(a1)], p2 = [cx + R * Math.cos(a2), cy + R * Math.sin(a2)];
    s += parrow(`M${p1[0].toFixed(1)},${p1[1].toFixed(1)} A${R},${R} 0 0 1 ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`, { color: C.tealDark, marker: 'ahT', w: 4 });
  }
  if (centre) s += centre;
  nodes.forEach((nd, i) => { const [px, py] = pos[i]; const w = nd.w || bw, h = nd.h || bh; s += box(px - w / 2, py - h / 2, w, h, { tsize, bsize, align: 'middle', pad: 12, ...nd }); });
  return s;
};

// Hub-and-spoke concept map. spokes: [{x,y,w,h,title,body,fill}]
const hub = (cx, cy, r, label, spokes, { fill = C.mustard, size = 21, lineColor = C.ink } = {}) => {
  let s = '';
  spokes.forEach((sp) => { s += line(cx, cy, sp.x + sp.w / 2, sp.y + sp.h / 2, { color: lineColor, w: 2.5 }); });
  spokes.forEach((sp) => { s += box(sp.x, sp.y, sp.w, sp.h, { align: 'middle', pad: 12, tsize: 18, bsize: 15, ...sp }); });
  const ll = Array.isArray(label) ? label : [label];
  s += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + lines(cx, cy - ((ll.length - 1) * LH(size)) / 2 + size * 0.35, ll, { size, weight: 700, anchor: 'middle' }, LH(size));
  return s;
};

// Footer note banner
const note = (x, y, w, s, { size = 18, fill = C.cream, edge = C.olive, weight = 700 } = {}) => {
  const l = wrap(s, w - 40, size); const h = l.length * LH(size) + 30;
  return { s: panel(x, y, w, h, fill, edge) + lines(x + w / 2, y + 15 + size * 0.95, l, { size, weight, anchor: 'middle' }, LH(size)), h };
};
// Section label above a group
const label = (x, y, s, { size = 17, fill = C.tealDark, anchor = 'start' } = {}) => tx(x, y, s, { size, weight: 700, fill, anchor });
// Weak vs strong pair
const weakStrong = (x, y, w, weak, strong, { gap = 20, size = 16, wTitle = 'Weaker', sTitle = 'Stronger' } = {}) => {
  const bw = (w - gap) / 2;
  const hw = boxH(bw, { title: '✗ ' + wTitle, body: weak, bsize: size }), hs = boxH(bw, { title: '✓ ' + sTitle, body: strong, bsize: size });
  const h = Math.max(hw, hs);
  return { s: box(x, y, bw, h, { title: '✗ ' + wTitle, body: weak, bsize: size, fill: '#fbeee6', edge: C.rust, tfill: C.rust, bfill: C.ink, valign: 'top' }) +
    box(x + bw + gap, y, bw, h, { title: '✓ ' + sTitle, body: strong, bsize: size, fill: '#eaf3f1', edge: C.tealDark, tfill: C.tealDark, bfill: C.ink, valign: 'top' }), h };
};
// Build a figure with auto height: parts is a function(y) -> {s,h} sequence
const stack = (y0, parts, gap = 22) => { let s = '', y = y0; for (const p of parts) { const r = p(y); s += r.s; y += r.h + gap; } return { s, y: y - gap }; };
const fig = (name, title, body, h, alt, caption, after, subtitle) => add(name, svg(900, Math.ceil(h), esc(title), body, subtitle ? esc(subtitle) : undefined), alt, caption, after);

// 01 The sixteen key concepts, grouped
{
  const chips = (x, y, w, items, fill, edge, per = 2, ch = 58) => {
    const cw = (w - (per - 1) * 14) / per; let s = '';
    items.forEach((it, i) => { const cx = x + (i % per) * (cw + 14), cy = y + Math.floor(i / per) * (ch + 12); s += box(cx, cy, cw, ch, { title: it, tsize: 18, align: 'middle', fill, edge, pad: 10 }); });
    return s;
  };
  let b = panel(30, 110, 840, 200, C.cream, C.olive) + tx(52, 146, 'Contributed by individuals and societies', { size: 20, weight: 700 });
  b += chips(52, 166, 796, ['change', 'global interactions', 'systems', 'time, place and space'], C.mustard, C.ink, 2);
  b += panel(30, 330, 840, 130) + tx(52, 366, 'Named by the guide as often important in I&S', { size: 20, weight: 700 });
  b += chips(52, 384, 796, ['culture', 'development', 'communities'], C.tealLight, C.tealDark, 3);
  b += panel(30, 480, 840, 270) + tx(52, 516, 'The other MYP key concepts', { size: 20, weight: 700 });
  b += chips(52, 534, 796, ['aesthetics', 'communication', 'connections', 'creativity', 'form', 'identity', 'logic', 'perspective', 'relationships'], '#f7f9f9', C.panelEdge, 3);
  fig('01-sixteen-key-concepts', 'Sixteen MYP key concepts', b, 780,
    'The sixteen MYP key concepts in three groups. Four are contributed by individuals and societies: change, global interactions, systems, and time, place and space. Culture, development and communities are named as often important in the subject. Nine others complete the set.',
    'Four key concepts belong to I&S, three more often help, and nine complete the MYP set.',
    '## What a key concept is');
}

// 02 Change: causes, process, consequences
{
  const c = chainH(30, 150, 840, [
    { title: 'Cause', body: 'Defeat in the Crimean War exposed Russia’s backwardness', fill: C.tealLight, edge: C.tealDark },
    { title: 'Process', body: 'Reform from above, by decree: the 1861 Emancipation Manifesto', fill: C.cream, edge: C.olive },
    { title: 'Consequences', body: 'About 23 million serfs legally free; too little land and 49 years of redemption payments fed unrest', fill: C.mustard, edge: C.ink },
  ], { h: 210, tsize: 21, bsize: 16, gap: 40 });
  let b = label(450, 136, 'History example: emancipation of the Russian serfs', { anchor: 'middle' }) + c.s;
  b += tx(c.bw * 2.5 + 80 + 30, 390, 'unintended result', { size: 16, anchor: 'middle', fill: C.rust, weight: 700 });
  const types = note(30, 420, 840, 'Causes and effects can be natural or human-made, intended or unintended, positive, negative or neutral.', { size: 17, weight: 600, fill: '#eaf3f1', edge: C.tealDark });
  fig('02-change-cause-process-consequence', 'Change: causes, process, consequences', b + types.s, 420 + types.h + 30,
    'Three linked boxes. Cause: defeat in the Crimean War exposed Russia’s backwardness. Process: reform from above by decree, the 1861 Emancipation Manifesto. Consequences: about 23 million serfs freed in law, but too little land and 49 years of redemption payments fed unrest, an unintended result.',
    'Describe change through all three: causes, process and consequences.',
    '## Change');
}

// 03 Global interactions: a shared river
{
  let b = panel(30, 110, 840, 470);
  b += path('M140,520 C230,470 270,380 380,350 C500,318 560,250 620,200 C660,168 720,150 800,140', { stroke: C.blue, w: 14 });
  b += path('M140,520 C230,470 270,380 380,350 C500,318 560,250 620,200 C660,168 720,150 800,140', { stroke: '#8fb3d9', w: 8 });
  b += `<rect x="236" y="400" width="16" height="70" rx="3" fill="${C.ink}" transform="rotate(-35 244 435)"/>`;
  b += box(50, 400, 170, 90, { title: 'Ethiopia', body: 'upstream; builds the dam', tsize: 19, bsize: 15, fill: C.cream, edge: C.olive, align: 'middle', pad: 10 });
  b += tx(300, 470, 'Grand Ethiopian Renaissance Dam', { size: 16, weight: 700 }) + tx(300, 492, 'Blue Nile; built from 2011, inaugurated Sept 2025', { size: 15, fill: C.muted });
  b += box(420, 250, 170, 80, { title: 'Sudan', body: 'downstream', tsize: 19, bsize: 15, fill: C.tealLight, edge: C.tealDark, align: 'middle', pad: 10 });
  b += box(670, 190, 180, 80, { title: 'Egypt', body: 'downstream', tsize: 19, bsize: 15, fill: C.tealLight, edge: C.tealDark, align: 'middle', pad: 10 });
  b += arrow(262, 352, 330, 316, { color: C.blue, w: 3 }) + tx(250, 318, 'flow', { size: 15, fill: C.blue, weight: 600, anchor: 'end' });
  b += tx(640, 400, 'Concern: how much water', { size: 17, weight: 700, fill: C.rust, anchor: 'middle' }) + tx(640, 424, 'will reach us?', { size: 17, weight: 700, fill: C.rust, anchor: 'middle' });
  const n = note(30, 600, 840, 'A shared river makes three states interdependent: one country’s decision affects the others.', { size: 17 });
  fig('03-shared-river', 'Global interactions: a shared river', b + n.s, 600 + n.h + 30,
    'A schematic of the Blue Nile flowing from Ethiopia, where the Grand Ethiopian Renaissance Dam was built from 2011 and inaugurated in September 2025, downstream to Sudan and Egypt, which raised concerns about how much water would reach them.',
    'Interdependence: an upstream decision changes what downstream states receive.',
    '## Global interactions');
}

// 04 Systems: drainage basin
{
  let b = '';
  b += box(30, 120, 840, 70, { title: 'INPUT: precipitation', fill: '#eaf3f1', edge: C.tealDark, align: 'middle' });
  b += arrow(450, 194, 450, 236, { color: C.tealDark, marker: 'ahT' });
  b += panel(30, 240, 840, 250, C.panel, C.ink) + tx(52, 274, 'Inside the basin', { size: 18, weight: 700, fill: C.muted });
  b += label(250, 306, 'STORES', { anchor: 'middle' }) + label(660, 306, 'FLOWS', { anchor: 'middle', fill: C.olive });
  ['soil water', 'groundwater', 'lakes'].forEach((s, i) => { b += box(60 + i * 128, 324, 118, 60, { title: s, tsize: 16, align: 'middle', fill: C.tealLight, edge: C.tealDark, pad: 8 }); });
  ['infiltration', 'throughflow', 'surface runoff'].forEach((s, i) => { b += box(470 + i * 132, 324, 122, 60, { title: s, tsize: 16, align: 'middle', fill: C.cream, edge: C.olive, pad: 8 }); });
  b += tx(450, 430, 'Deforestation cuts interception → faster runoff → higher flood peaks', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  b += tx(450, 462, 'an external force pushes the system out of equilibrium', { size: 16, anchor: 'middle', fill: C.muted });
  b += arrow(300, 494, 300, 536, { color: C.rust, marker: 'ahR' }) + arrow(600, 494, 600, 536, { color: C.rust, marker: 'ahR' });
  b += box(150, 540, 300, 64, { title: 'OUTPUT: river discharge', tsize: 18, fill: '#fbeee6', edge: C.rust, align: 'middle' });
  b += box(460, 540, 300, 64, { title: 'OUTPUT: evaporation', tsize: 18, fill: '#fbeee6', edge: C.rust, align: 'middle' });
  fig('04-drainage-basin-system', 'Systems: a drainage basin', b, 640,
    'A drainage basin as an open system. Precipitation is the input; soil water, groundwater and lakes are stores; infiltration, throughflow and surface runoff are flows; river discharge and evaporation are outputs. Deforestation cuts interception, so runoff is faster and flood peaks higher.',
    'Name the parts of a system and show how a change to one affects the rest.',
    '## Systems');
}

// 05 Absolute vs relative location
{
  let b = '';
  b += panel(30, 110, 410, 430) + tx(235, 150, 'Absolute location', { size: 22, weight: 700, anchor: 'middle' }) + tx(235, 176, 'a fixed position', { size: 16, anchor: 'middle', fill: C.muted });
  for (let i = 0; i < 5; i++) { b += line(70, 220 + i * 60, 400, 220 + i * 60, { color: C.panelEdge, w: 1.5 }); b += line(90 + i * 75, 200, 90 + i * 75, 470, { color: C.panelEdge, w: 1.5 }); }
  b += line(70, 340, 400, 340, { color: C.rust, w: 2.5, dash: '8 5' }) + tx(398, 332, 'latitude about 1° N', { size: 15, anchor: 'end', fill: C.rust, weight: 600 });
  b += `<circle cx="240" cy="340" r="11" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + tx(240, 375, 'Singapore', { size: 17, weight: 700, anchor: 'middle' });
  b += tx(235, 512, 'coordinates on a grid', { size: 16, anchor: 'middle', fill: C.muted });
  b += panel(460, 110, 410, 430, '#eaf3f1', C.tealDark) + tx(665, 150, 'Relative location', { size: 22, weight: 700, anchor: 'middle' }) + tx(665, 176, 'position relative to other places', { size: 16, anchor: 'middle', fill: C.muted });
  b += box(480, 200, 160, 70, { title: 'Indian Ocean', tsize: 16, align: 'middle', fill: C.teal, edge: C.tealDark, pad: 8 });
  b += box(690, 200, 160, 70, { title: 'Pacific Ocean', tsize: 16, align: 'middle', fill: C.teal, edge: C.tealDark, pad: 8 });
  b += box(560, 300, 210, 64, { title: 'Malay Peninsula', tsize: 16, align: 'middle', fill: C.rock, edge: C.rockDark, pad: 8 });
  b += arrow(644, 235, 686, 235, { color: C.blue, w: 3 });
  b += tx(665, 414, 'Strait of Malacca: one of the busiest', { size: 15, anchor: 'middle', fill: C.blue, weight: 600 }) + tx(665, 434, 'shipping lanes', { size: 15, anchor: 'middle', fill: C.blue, weight: 600 });
  b += `<circle cx="665" cy="376" r="11" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += tx(665, 478, 'off the southern tip of the peninsula,', { size: 16, anchor: 'middle' }) + tx(665, 500, 'beside the strait', { size: 16, anchor: 'middle' });
  const n = note(30, 560, 840, 'Relative location explains far more of Singapore’s growth than its coordinates.', { size: 18 });
  fig('05-absolute-relative-location', 'Absolute and relative location', b + n.s, 560 + n.h + 30,
    'Left: Singapore’s absolute location as a point on a grid at a latitude of about 1 degree north. Right: its relative location, off the southern tip of the Malay Peninsula beside the Strait of Malacca, a busy shipping lane between the Indian and Pacific Oceans.',
    'Where a place is in relation to others often matters more than its coordinates.',
    '## Time, place and space');
}

// 06 Statement of inquiry recipe
{
  const parts = [
    ['Key concept', 'systems', 'one; broad, cross-subject', C.mustard],
    ['Related concepts', 'scarcity, sustainability', 'narrower, from a discipline', C.cream],
    ['Global context', 'globalization and sustainability', 'why it matters', C.tealLight],
  ];
  let b = label(450, 136, 'Unit topic (school’s choice): water use in a farming region', { anchor: 'middle' });
  parts.forEach(([h, v, d, f], i) => {
    const x = 30 + i * 290;
    b += box(x, 156, 260, 150, { title: h, body: v + '\n(' + d + ')', fill: f, edge: i ? (i === 1 ? C.olive : C.tealDark) : C.ink, align: 'middle', tsize: 19, bsize: 17 });
    if (i < 2) b += tx(x + 275, 242, '+', { size: 28, weight: 700, anchor: 'middle' });
  });
  b += arrow(450, 312, 450, 350);
  b += box(30, 356, 840, 120, { title: 'Statement of inquiry', body: '“When people take more from a natural system than it can replace, the whole system and the communities depending on it can be damaged.”', fill: C.panel, edge: C.ink, align: 'middle', bsize: 18, sw: 3 });
  const checks = ['No named place or date: transfers to Lake Chad, an aquifer or a fishery', 'Uses the key concept and both related concepts', 'Links to a global issue'];
  checks.forEach((c, i) => { b += tx(60, 520 + i * 32, '✓', { size: 20, weight: 700, fill: C.tealDark }) + tx(90, 520 + i * 32, c, { size: 17 }); });
  b = b + '';
  fig('06-statement-of-inquiry', 'From concepts to a statement of inquiry', b, 520 + 2 * 32 + 40,
    'Three ingredients, key concept systems, related concepts scarcity and sustainability, and global context globalization and sustainability, combine into one statement: when people take more from a natural system than it can replace, the system and dependent communities can be damaged. Checks: no named place or date, uses all the concepts, links to a global issue.',
    'One key concept, related concepts and a global context make one transferable sentence.',
    '## From concepts to a statement of inquiry');
}

// 07 Sorting inquiry questions
{
  let b = '';
  const q = (y, test, yes, ex, f, e) => {
    let s = box(30, y, 420, 110, { title: test, tsize: 18, fill: C.panel, edge: C.ink, align: 'middle' });
    s += arrow(454, y + 55, 500, y + 55) + tx(477, y + 44, 'yes', { size: 15, anchor: 'middle', fill: C.muted, weight: 600 });
    s += box(504, y, 366, 110, { title: yes, body: ex, fill: f, edge: e, tsize: 20, bsize: 15 });
    return s;
  };
  b += q(120, 'Does a textbook settle it?', 'Factual', '“Which countries border Lake Chad?”', C.tealLight, C.tealDark);
  b += arrow(240, 234, 240, 268) + tx(256, 258, 'no', { size: 15, fill: C.muted, weight: 600 });
  b += q(272, 'Does it work for a different place unchanged?', 'Conceptual', '“How does a change in one part of a water system affect the other parts?”', C.cream, C.olive);
  b += arrow(240, 386, 240, 420) + tx(256, 410, 'no', { size: 15, fill: C.muted, weight: 600 });
  b += q(424, 'Could informed people argue opposite answers with evidence?', 'Debatable', '“Should a government put farm exports ahead of a local fishing industry?”', C.mustard, C.ink);
  const n = note(30, 560, 840, 'A “debatable” question with a factual answer (“When did the embargo start?”) is not debatable.', { size: 17 });
  fig('07-question-types', 'Factual, conceptual or debatable?', b + n.s, 560 + n.h + 30,
    'Three tests in sequence. If a textbook settles it, the question is factual, such as which countries border Lake Chad. If it works for a different place unchanged, it is conceptual. If informed people could argue opposite answers with evidence, it is debatable, such as whether a government should put farm exports ahead of a local fishing industry.',
    'Three quick tests sort any inquiry question.',
    '## Inquiry questions');
}
