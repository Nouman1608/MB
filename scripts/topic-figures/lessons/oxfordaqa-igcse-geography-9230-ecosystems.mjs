import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-geography-9230-ecosystems';

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
    s += panel(x, yy, w, h) + (L !== '' ? (String(L).length > 2 ? `<circle cx="${x + 26 + r}" cy="${yy + h / 2}" r="${r}" fill="${fill || C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + t(x + 26 + r, yy + h / 2 + r * 0.2, L, { size: r * 0.58, weight: 700, anchor: 'middle' }) : badge(x + 26 + r, yy + h / 2, r, L, fill || (i % 2 ? C.cream : C.mustard))) : '');
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


// 01 Pond cross-section: biotic and abiotic
{
  let b = '';
  b += panel(30, 110, 840, 400);
  // sky/sun
  b += `<circle cx="120" cy="170" r="30" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`;
  for (let k = 0; k < 8; k++) { const a = (k * Math.PI) / 4; b += line(120 + 38 * Math.cos(a), 170 + 38 * Math.sin(a), 120 + 50 * Math.cos(a), 170 + 50 * Math.sin(a), { color: C.olive, w: 3 }); }
  // banks and water
  const WL = 260;
  b += `<path d="M32,${WL - 10} L170,${WL - 10} Q260,${WL + 170} 450,${WL + 180} Q640,${WL + 170} 730,${WL - 10} L868,${WL - 10} L868,508 L32,508 Z" fill="${C.sand}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += `<path d="M182,${WL} Q262,${WL + 160} 450,${WL + 168} Q638,${WL + 160} 718,${WL} Z" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2"/>`;
  b += `<path d="M300,${WL + 140} Q450,${WL + 178} 600,${WL + 140} Q450,${WL + 160} 300,${WL + 140} Z" fill="${C.rockDark}" opacity="0.7"/>`;
  // reeds
  [190, 202, 214, 690, 702, 714].forEach((x) => { b += path(`M${x},${WL + 4} L${x - 4},${WL - 60}`, { stroke: C.grass, w: 3.5 }) + `<ellipse cx="${x - 4}" cy="${WL - 62}" rx="4" ry="10" fill="${C.olive}"/>`; });
  // lily
  b += `<ellipse cx="560" cy="${WL}" rx="28" ry="6" fill="${C.grass}" stroke="${C.ink}" stroke-width="1.5"/>` + path(`M560,${WL + 4} Q566,${WL + 60} 560,${WL + 120}`, { stroke: C.grass, w: 2.5 });
  // pondweed
  [380, 400].forEach((x) => { b += path(`M${x},${WL + 160} q-12,-30 0,-60 q12,-30 0,-60`, { stroke: C.grass, w: 3 }); });
  // fish
  b += `<path d="M470,${WL + 70} q20,-14 40,0 q-20,14 -40,0 z M510,${WL + 70} l12,-9 l0,18 z" fill="${C.rust}" stroke="${C.ink}" stroke-width="1.8"/>`;
  // snail
  b += `<circle cx="330" cy="${WL + 134}" r="9" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/>`;
  // heron
  b += path(`M770,${WL - 10} L776,${WL - 70} M790,${WL - 10} L784,${WL - 70}`, { w: 3 }) + `<ellipse cx="782" cy="${WL - 86}" rx="22" ry="16" fill="#c9cfd6" stroke="${C.ink}" stroke-width="2"/>` + path(`M796,${WL - 96} q14,-26 2,-44 l-18,6`, { w: 3 });
  const ab = { size: 16, weight: 600, fill: C.blue, italic: true }, bi = { size: 16, weight: 700 };
  const ln = (x1, y1, x2, y2) => line(x1, y1, x2, y2, { w: 1.6, color: C.muted });
  b += ln(152, 160, 176, 146) + tx(180, 150, 'sunlight', ab);
  b += ln(212, 212, 236, 202) + tx(240, 206, 'reeds (producers)', bi);
  b += ln(560, 252, 560, 214) + tx(560, 206, 'water lilies (producers)', { ...bi, anchor: 'middle' });
  b += ln(764, 168, 744, 160) + tx(740, 164, 'heron (top predator)', { ...bi, anchor: 'end' });
  b += ln(300, 246, 300, 300) + tx(250, 240, 'water, dissolved oxygen, temperature', ab);
  b += ln(330, WL + 134, 130, 412) + tx(40, 410, 'snail', bi) + tx(40, 430, '(consumer)', { size: 15, fill: C.muted });
  b += ln(384, WL + 100, 160, 326) + lines(40, 324, ['pondweed', '(producer)'], bi, 20);
  b += ln(516, WL + 70, 740, 296) + tx(860, 300, 'fish (consumers)', { ...bi, anchor: 'end' });
  b += ln(560, WL + 152, 744, 370) + lines(860, 364, ['mud, sediment', 'and nutrients'], { ...ab, anchor: 'end' }, 20);
  b += ln(470, WL + 166, 744, 440) + lines(860, 432, ['bacteria and fungi', 'in the mud', '(decomposers)'], { ...bi, anchor: 'end' }, 20);
  b += tx(860, 540, 'cross-section, not to scale', { size: 15, anchor: 'end', fill: C.muted, italic: true });
  // key
  b += tx(60, 540, 'Abiotic (non-living)', { size: 17, weight: 600, fill: C.blue, italic: true }) + tx(300, 540, 'Biotic (living)', { size: 17, weight: 700 });
  fig('01-pond-ecosystem', 'A pond: biotic and abiotic parts', b, 566,
    'Cross-section of a freshwater pond. Abiotic parts: sunlight, water, dissolved oxygen, temperature, mud and dissolved nutrients. Biotic parts: reeds, water lilies and pondweed as producers, a snail and fish as consumers, a heron as top predator, and bacteria and fungi in the mud as decomposers.',
    'An ecosystem is living things and the non-living environment they interact with.',
    '## A small-scale ecosystem: a freshwater pond');
}

// 02 Pond food web
{
  let b = '';
  const lv = [
    ['Top predators', 140, [['Heron', 330], ['Pike', 600]]],
    ['Secondary consumers', 260, [['Frog', 250], ['Small fish', 470], ['Dragonfly larvae', 700]]],
    ['Primary consumers', 380, [['Water flea', 250], ['Snail', 470], ['Insect larvae', 690]]],
    ['Producers', 500, [['Algae', 250], ['Pondweed', 470]]],
  ];
  const pos = {};
  lv.forEach(([l, y, nodes], i) => {
    b += tx(30, y + 6, l, { size: 15, weight: 700, fill: C.tealDark });
    nodes.forEach(([n, x]) => { pos[n] = [x, y]; });
  });
  const ed = [['Algae', 'Water flea'], ['Pondweed', 'Snail'], ['Water flea', 'Small fish'], ['Insect larvae', 'Small fish'], ['Insect larvae', 'Frog'], ['Small fish', 'Heron'], ['Frog', 'Heron'], ['Small fish', 'Pike'], ['Water flea', 'Dragonfly larvae']];
  const chain = new Set(['Algae>Water flea', 'Water flea>Small fish', 'Small fish>Heron']);
  ed.forEach(([a, z]) => {
    const [x1, y1] = pos[a], [x2, y2] = pos[z];
    const c = chain.has(a + '>' + z);
    const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy);
    b += arrow(x1 + dx * (26 / L) , y1 - 24, x2 - dx * (26 / L), y2 + 26, { w: c ? 4.5 : 2.5, color: c ? C.rust : C.ink, marker: c ? 'ahR' : 'ah' });
  });
  Object.entries(pos).forEach(([n, [x, y]]) => {
    const w = Math.max(110, n.length * 10 + 30);
    const prod = y === 500;
    b += rect(x - w / 2, y - 22, w, 44, prod ? '#d8e3c6' : y === 140 ? C.cream : C.panel, C.ink, 22, 2.2) + tx(x, y + 6, n, { size: 17, weight: 700, anchor: 'middle' });
  });
  b += line(60, 560, 110, 560, { color: C.rust, w: 4.5 }) + tx(120, 566, 'one food chain: algae → water flea → small fish → heron', { size: 16, weight: 600, fill: C.rust });
  b += tx(60, 596, 'Arrows show the direction energy flows: from the organism eaten to the one that eats it.', { size: 16, fill: C.ink });
  b += tx(60, 624, 'Energy is lost at each step, so there are far fewer herons than water fleas.', { size: 16, fill: C.muted });
  fig('02-pond-food-web', 'A pond food web', b, 650,
    'A pond food web in four levels: algae and pondweed as producers; water fleas, snails and insect larvae as primary consumers; frogs, small fish and dragonfly larvae as secondary consumers; herons and pike as top predators. The chain algae, water flea, small fish, heron is highlighted, with arrows pointing from eaten to eater.',
    'Most organisms depend on several others, so a change to one spreads through the web.',
    '## A small-scale ecosystem: a freshwater pond');
}

// 03 Nutrient cycle
{
  let b = '';
  const nodes = [
    { title: 'Producers take up nutrients', body: 'such as nitrates, from the water and mud', fill: '#d8e3c6', edge: C.grass },
    { title: 'Consumers eat', body: 'and gain nutrients from producers or other consumers', fill: C.panel, edge: C.tealDark },
    { title: 'Death and waste', body: 'material sinks to the bed', fill: C.panel, edge: C.tealDark },
    { title: 'Decomposers', body: 'bacteria and fungi break it down', fill: C.cream, edge: C.olive },
    { title: 'Nutrients released', body: 'back into the water and mud', fill: C.tealLight, edge: C.tealDark },
  ];
  b += cycle(450, 384, 236, nodes, { bw: 222, bh: 104, tsize: 18, bsize: 15, start: -90 });
  b += lines(450, 378, ['nutrient', 'cycling'], { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark }, 26);
  const n = note(30, 660, 840, 'Without decomposers, nutrients would stay locked in dead material and producers would run short.', { size: 17 });
  fig('03-nutrient-cycle', 'Nutrient cycling in the pond', b + n.s, 660 + n.h + 28,
    'A five-stage cycle: producers take up nutrients such as nitrates from water and mud, consumers gain them by eating, dead material and waste sink to the bed, decomposers break it down, and nutrients are released back into the water and mud for producers to take up again.',
    'Decomposers close the loop that keeps nutrients available to producers.',
    '## Nutrient cycling in the pond');
}

// 04 Balance loop
{
  let b = '';
  const nodes = [
    { title: 'More water fleas', fill: C.cream, edge: C.olive },
    { title: 'They eat more algae', fill: C.panel, edge: C.tealDark },
    { title: 'Less food: water flea numbers fall', fill: C.panel, edge: C.tealDark },
    { title: 'Algae recover', fill: '#d8e3c6', edge: C.grass },
  ];
  b += cycle(450, 320, 190, nodes, { bw: 230, bh: 76, tsize: 17, start: -90 });
  b += lines(450, 300, ['populations rise', 'and fall within', 'limits'], { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark }, 20);
  b += box(30, 580, 410, 110, { title: 'Biotic links', body: 'Predators help keep consumer numbers in check.', tsize: 19, bsize: 17, edge: C.tealDark, bfill: C.ink });
  b += box(460, 580, 410, 110, { title: 'Abiotic conditions', body: 'Enough light, oxygen and nutrients, and a suitable temperature.', tsize: 19, bsize: 17, edge: C.blue, fill: '#eaf1f8', bfill: C.ink });
  fig('04-balance', 'Balance between components', b, 718,
    'A loop: more water fleas eat more algae, so with less food their numbers fall and the algae recover. Balance is also kept by predators limiting consumer numbers and depends on enough light, oxygen, nutrients and a suitable temperature.',
    'Linked populations keep each other within limits.',
    '## Balance between components');
}

// 05 Changing one component: eutrophication + predator removal
{
  let b = '';
  b += tx(30, 128, 'Example 1: extra nutrients (eutrophication)', { size: 20, weight: 700, fill: C.tealDark });
  const st = [
    ['Fertiliser washes in', 'extra nitrates and phosphates', C.cream],
    ['Algal bloom', 'algae grow rapidly', '#d8e3c6'],
    ['Plants below die', 'sunlight is blocked', C.panel],
    ['Oxygen used up', 'decomposers multiply on dead algae and plants', C.panel],
    ['Fish die', 'low oxygen kills fish and other animals', '#fbeee6'],
    ['Predators leave', 'herons lose their food supply', '#fbeee6'],
  ];
  const bw = 270, gx = 15, gy = 30, H = 104;
  st.forEach(([h, d, f], i) => {
    const row = Math.floor(i / 3), col = row === 0 ? i % 3 : 2 - (i % 3);
    const x = 30 + col * (bw + gx), y = 146 + row * (H + gy);
    b += box(x, y, bw, H, { title: h, body: d, tsize: 18, bsize: 16, align: 'middle', fill: f, edge: C.ink, bfill: C.ink });
    b += badge(x + 18, y + 18, 14, String(i + 1), C.mustard);
    if (i === 0 || i === 1) b += arrow(x + bw + 1, y + H / 2, x + bw + gx - 1, y + H / 2, { w: 3 });
    if (i === 2) b += arrow(x + bw / 2, y + H + 2, x + bw / 2, y + H + gy - 2, { w: 3 });
    if (i === 3 || i === 4) b += arrow(x - 1, y + H / 2, x - gx + 1, y + H / 2, { w: 3 });
  });
  let y = 146 + 2 * (H + gy) + 4;
  b += tx(30, y + 10, 'One change to an abiotic component affects every level of the food web.', { size: 16, italic: true, fill: C.muted });
  y += 44;
  b += tx(30, y, 'Example 2: removing a predator', { size: 20, weight: 700, fill: C.tealDark });
  const ch = [['Pike removed', '−'], ['Small fish', '↑'], ['Water fleas', '↓'], ['Algae', '↑'], ['Pond green and murky', '']];
  const cw = 152, cg = 20;
  ch.forEach(([h, s], i) => {
    const x = 30 + i * (cw + cg);
    b += rect(x, y + 18, cw, 76, i === 0 ? '#fbeee6' : i === 4 ? '#d8e3c6' : C.panel, C.ink, 12, 2.2);
    b += lines(x + cw / 2, y + 50 - (wrap(h, cw - 20, 16).length - 1) * 10 + (s ? 0 : 8), wrap(h, cw - 20, 16), { size: 16, weight: 700, anchor: 'middle' }, 20);
    if (s && i) b += tx(x + cw / 2, y + 84, s === '↑' ? 'increase' : 'decrease', { size: 15, anchor: 'middle', fill: s === '↑' ? C.tealDark : C.rust, weight: 700 });
    if (i < 4) b += arrow(x + cw + 1, y + 56, x + cw + cg - 1, y + 56, { w: 2.5 });
  });
  fig('05-changing-one-component', 'Changing one component', b, y + 94 + 28,
    'Eutrophication in six steps: fertiliser adds nitrates and phosphates, algae bloom, plants below die from lack of light, decomposers use up oxygen, fish die, and herons leave. Below, removing pike lets small fish increase, water fleas decrease, algae increase and the pond turns green and murky.',
    'Follow the chain of effects through the whole web, not just the first step.',
    '## The impact of changing one component');
}

// 06 Biomes by latitude (schematic)
{
  let b = '';
  b += panel(30, 110, 840, 404);
  const bands = [
    ['Tundra', 34, '#e8eef0'],
    ['Boreal (coniferous) forest', 34, '#a9c48f'],
    ['Temperate forest and grassland; Mediterranean', 44, '#d8e3c6'],
    ['Hot desert', 44, C.sand],
    ['Savanna', 30, '#e6d58f'],
    ['Tropical rainforest', 60, C.grass],
    ['Savanna', 30, '#e6d58f'],
    ['Hot desert', 44, C.sand],
  ];
  let yy = 130; const top = {};
  bands.forEach(([n, h, f], i) => {
    top[i] = yy;
    b += `<rect x="150" y="${yy}" width="420" height="${h}" fill="${f}" stroke="${C.ink}" stroke-width="1.5"/>`;
    b += tx(360, i === 5 ? yy + 23 : yy + h / 2 + 6, n, { size: 16, weight: 700, anchor: 'middle', fill: i === 5 ? '#ffffff' : C.ink });
    yy += h;
  });
  const yEq = top[5] + 42;
  b += line(150, yEq, 570, yEq, { color: C.rust, w: 2.5, dash: '8 5' }) + tx(140, yEq + 5, 'Equator', { size: 15, anchor: 'end', weight: 700, fill: C.rust });
  const t30n = top[3], t15n = top[4], t15s = top[7], t30s = yy;
  [[t30n, '30°N'], [t15n, '15°N'], [t15s, '15°S'], [t30s, '30°S']].forEach(([y, s_]) => { b += line(144, y, 150, y, { w: 2 }) + tx(140, y + 5, s_, { size: 15, anchor: 'end', fill: C.muted }); });
  b += tx(140, 146, 'towards', { size: 15, anchor: 'end', fill: C.muted }) + tx(140, 164, 'North Pole', { size: 15, anchor: 'end', fill: C.muted });
  b += tx(360, yy + 26, '↓ towards the South Pole: belts repeat', { size: 15, anchor: 'middle', fill: C.muted });
  b += arrow(620, yEq + 24, 620, yEq - 30, { w: 4, color: C.blue }) + lines(640, yEq - 10, ['rising air:', 'heavy rainfall'], { size: 16, weight: 700, fill: C.blue }, 20);
  b += arrow(620, t30n - 30, 620, t30n + 20, { w: 4, color: C.rust, marker: 'ahR' }) + lines(640, t30n - 12, ['sinking air around', '30°N: dry conditions'], { size: 16, weight: 700, fill: C.rust }, 20);
  b += arrow(620, t30s - 50, 620, t30s, { w: 4, color: C.rust, marker: 'ahR' }) + lines(640, t30s - 30, ['sinking air', 'around 30°S'], { size: 16, weight: 700, fill: C.rust }, 20);
  b += tx(860, 500, 'schematic: belts simplified, not to scale', { size: 15, anchor: 'end', fill: C.muted, italic: true });
  const n = note(30, 534, 840, 'Climate, especially temperature and rainfall, controls where biomes occur; both vary with latitude.', { size: 17 });
  fig('06-biomes-latitude', 'Biomes by latitude', b + n.s, 534 + n.h + 28,
    'A schematic north–south strip of biome belts: tropical rainforest at the equator, savanna either side, hot deserts around 15 to 30 degrees north and south, then Mediterranean, temperate forest and grassland, boreal forest and tundra towards the pole. Rising air at the equator brings heavy rain; sinking air around 30 degrees brings dry conditions.',
    'Latitude controls climate, and climate controls where each biome is found.',
    '## Global ecosystems: distribution and characteristics');
}
