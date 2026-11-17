import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-geography-9230-coastal-processes-landforms';

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


// 01 Weathering
{
  let b = '';
  b += tx(30, 128, 'Mechanical: freeze-thaw', { size: 20, weight: 700, fill: C.tealDark });
  const stages = [
    ['1', 'Water enters a crack', 0],
    ['2', 'It freezes and expands', 1],
    ['3', 'The crack widens', 2],
    ['4', 'A fragment breaks off', 3],
  ];
  stages.forEach(([n, lab, k], i) => {
    const x = 30 + i * 212, y = 146;
    b += panel(x, y, 196, 210);
    b += rect(x + 30, y + 30, 136, 120, C.rock, C.ink, 4, 2.5);
    const w = [6, 9, 14, 0][k];
    if (k < 3) {
      b += `<path d="M${x + 98 - w / 2},${y + 30} L${x + 94},${y + 118} L${x + 98 + w / 2},${y + 30} Z" fill="${k === 1 ? '#e6f2fb' : C.blue}" stroke="${C.ink}" stroke-width="2"/>`;
      if (k === 1) b += tx(x + 98, y + 24, '❄', { size: 18, anchor: 'middle', fill: C.blue }) + arrow(x + 86, y + 70, x + 66, y + 70, { w: 2.5 }) + arrow(x + 110, y + 70, x + 130, y + 70, { w: 2.5 });
    } else {
      b += `<path d="M${x + 30},${y + 30} L${x + 92},${y + 30} L${x + 120},${y + 96} L${x + 166},${y + 96} L${x + 166},${y + 150} L${x + 30},${y + 150} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>`;
      b += `<path d="M${x + 112},${y + 22} L${x + 150},${y + 30} L${x + 166},${y + 74} L${x + 136},${y + 80} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5" transform="rotate(14 ${x + 140} ${y + 50})"/>`;
      b += arrow(x + 176, y + 70, x + 176, y + 120, { w: 2.5 });
    }
    b += badge(x + 26, y + 184, 15, n, C.cream) + lines(x + 48, y + 180, wrap(lab, 130, 15), { size: 15, weight: 600 }, 18);
    if (i < 3) b += arrow(x + 198, y + 90, x + 210, y + 90, { w: 2.5 });
  });
  b += tx(450, 386, 'Repeated cycles of freezing and thawing break the rock apart.', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  b += box(30, 410, 410, 120, { title: 'Mechanical: salt weathering', body: 'Seawater evaporates in cracks; salt crystals grow and force the rock apart.', tsize: 19, bsize: 16, valign: 'top', edge: C.tealDark, bfill: C.ink });
  b += box(460, 410, 410, 120, { title: 'Chemical: carbonation', body: 'Rainwater absorbs carbon dioxide, is slightly acidic, and slowly dissolves limestone and chalk.', tsize: 19, bsize: 16, valign: 'top', fill: C.cream, edge: C.olive, bfill: C.ink });
  const n = note(30, 552, 840, 'Weathering is breakdown in place, without movement; it weakens cliffs so erosion and mass movement work faster.', { size: 17 });
  fig('01-weathering', 'Weathering at the coast', b + n.s, 552 + n.h + 28,
    'Freeze-thaw in four stages: water enters a crack, freezes and expands, widens the crack and finally breaks a fragment off. Salt weathering forces rock apart as salt crystals grow in cracks; carbonation dissolves limestone and chalk with slightly acidic rainwater.',
    'Weathering breaks rock down in place and prepares cliffs for erosion.',
    '## Weathering');
}

// 02 Mass movement cross-sections
{
  let b = '';
  const W = 266, gap = 21;
  const card = (i, title, desc) => {
    const x = 30 + i * (W + gap);
    return panel(x, 110, W, 400) + tx(x + W / 2, 146, title, { size: 21, weight: 700, anchor: 'middle' }) + lines(x + 18, 400, wrap(desc, W - 36, 16), { size: 16 });
  };
  b += card(0, 'Sliding', 'A block of rock or soil moves down a slope along a flat surface, often after heavy rain.');
  b += card(1, 'Slumping', 'Saturated material, often clay, moves down a curved surface with a rotational movement, leaving a stepped, curved scar.');
  b += card(2, 'Rock falls', 'Fragments break away from a steep cliff face and fall, often after freeze-thaw or undercutting by the sea.');
  // sliding
  let x = 30;
  b += path(`M${x + 20},370 L${x + 20},190 L${x + 70},190 L${x + 246},350 L${x + 246},370 Z`, { fill: C.rock, stroke: C.ink, w: 2.5 });
  b += `<path d="M${x + 110},226 L${x + 150},262 L${x + 128},286 L${x + 88},250 Z" fill="${C.sand}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += line(x + 70, 190, x + 246, 350, { color: C.rust, w: 3, dash: '8 5' });
  b += arrow(x + 150, 236, x + 196, 278, { w: 3.5 });
  b += tx(x + 120, 340, 'flat surface', { size: 15, fill: C.rust, weight: 700, anchor: 'middle' });
  // slumping
  x = 30 + W + gap;
  b += path(`M${x + 20},370 L${x + 20},190 L${x + 150},190 L${x + 150},300 L${x + 246},350 L${x + 246},370 Z`, { fill: C.rock, stroke: C.ink, w: 2.5 });
  b += `<path d="M${x + 90},190 Q${x + 98},300 ${x + 190},322 L${x + 150},300 L${x + 150},190 Z" fill="#c9b98a" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += path(`M${x + 90},190 Q${x + 98},300 ${x + 190},322`, { stroke: C.rust, w: 3, extra: 'stroke-dasharray="8 5"' });
  b += `<path d="M${x + 170},226 A40,40 0 0 1 ${x + 196},280" fill="none" stroke="${C.ink}" stroke-width="3.5" marker-end="url(#ah)"/>`;
  b += tx(x + 40, 182, 'curved scar', { size: 15, fill: C.rust, weight: 700 });
  b += tx(x + 210, 210, 'rotation', { size: 15, weight: 700, anchor: 'middle' });
  // rock fall
  x = 30 + 2 * (W + gap);
  b += path(`M${x + 20},370 L${x + 20},170 L${x + 150},170 L${x + 150},300 L${x + 140},330 L${x + 150},370 Z`, { fill: C.rock, stroke: C.ink, w: 2.5 });
  b += `<rect x="${x + 151}" y="330" width="${W - 153}" height="40" fill="${C.teal}"/>`;
  b += `<path d="M${x + 150},330 q-10,-15 -10,-15 l10,-15" fill="none"/>`;
  [[180, 220, 10], [196, 262, 8], [212, 300, 9], [196, 356, 11], [222, 360, 8]].forEach(([dx, yy, r]) => { b += `<path d="M${x + dx - r},${yy} l${r},-${r} l${r},${r * 0.6} l-${r * 0.5},${r} z" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>`; });
  b += arrow(x + 176, 236, x + 184, 300, { w: 3 });
  b += tx(x + 128, 346, 'notch', { size: 15, anchor: 'end', fill: C.ink, weight: 600 });
  b += tx(x + W - 10, 360, 'sea', { size: 15, anchor: 'end', fill: C.tealDark, weight: 700 });
  b += tx(450, 540, 'Cross-sections, not to scale. All three are movement downhill under gravity.', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  fig('02-mass-movement', 'Three types of mass movement', b, 566,
    'Three cliff cross-sections. Sliding: a block moves down a flat surface. Slumping: saturated clay rotates down a curved surface, leaving a curved scar. Rock fall: fragments break from a steep cliff, often one undercut by the sea, and fall to its foot.',
    'Sliding, slumping and rock falls are all movement of material downhill under gravity.',
    '## Mass movement');
}

// 03 Discordant and concordant coasts (plan view)
{
  let b = '';
  const bands = [C.rock, '#e8dcc0', C.rock, '#e8dcc0', C.rock];
  // discordant: bands perpendicular to coast (vertical bands), coastline at bottom irregular
  const px = 30, py = 120, pw = 410, ph = 330;
  b += panel(px, py - 10, pw, ph + 60);
  b += tx(px + pw / 2, py + 22, 'Discordant coast', { size: 21, weight: 700, anchor: 'middle' });
  const bw = (pw - 40) / 5;
  // coast y per band: hard = protrudes (larger y), soft = bay (smaller y)
  const coastY = [370, 290, 370, 290, 370];
  b += `<rect x="${px + 20}" y="240" width="${pw - 40}" height="180" fill="${C.teal}"/>`;
  bands.forEach((f, i) => {
    const x = px + 20 + i * bw;
    const hard = i % 2 === 0;
    const cy = coastY[i];
    b += hard ? `<path d="M${x},150 L${x + bw},150 L${x + bw},${cy - 10} Q${x + bw / 2},${cy + 14} ${x},${cy - 10} Z" fill="${f}" stroke="${C.ink}" stroke-width="2"/>`
      : `<path d="M${x},150 L${x + bw},150 L${x + bw},${cy + 20} Q${x + bw / 2},${cy - 60} ${x},${cy + 20} Z" fill="${f}" stroke="${C.ink}" stroke-width="2"/>`;
    if (!hard) b += `<path d="M${x + 6},${cy + 6} Q${x + bw / 2},${cy - 36} ${x + bw - 6},${cy + 6}" fill="none" stroke="${C.mustard}" stroke-width="7"/>`;
  });
  b += `<path d="M${px + 20},${px + 0} " fill="none"/>`;
  b += `<rect x="${px + 20}" y="380" width="${pw - 40}" height="40" fill="${C.teal}" opacity="0.9"/>`;
  b += tx(px + 20 + bw / 2, 180, 'hard', { size: 15, anchor: 'middle', weight: 700 }) + tx(px + 20 + 1.5 * bw, 180, 'soft', { size: 15, anchor: 'middle', weight: 700 });
  b += tx(px + 20 + bw / 2, 352, 'headland', { size: 15, anchor: 'middle', weight: 700 }) + tx(px + 20 + 1.5 * bw, 262, 'bay', { size: 15, anchor: 'middle', weight: 700 });
  b += tx(px + pw / 2, 406, 'SEA', { size: 16, anchor: 'middle', weight: 700, fill: C.tealDark });
  b += tx(px + pw / 2, 446, 'bands at right angles to the coast', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  // concordant
  const qx = 460;
  b += panel(qx, py - 10, pw, ph + 60);
  b += tx(qx + pw / 2, py + 22, 'Concordant coast', { size: 21, weight: 700, anchor: 'middle' });
  const L = qx + 20, R = qx + pw - 20;
  b += `<rect x="${L}" y="150" width="${R - L}" height="70" fill="${C.rock}" stroke="${C.ink}" stroke-width="2"/>`;
  b += `<rect x="${L}" y="220" width="${R - L}" height="80" fill="#e8dcc0" stroke="${C.ink}" stroke-width="2"/>`;
  b += `<rect x="${L}" y="300" width="${R - L}" height="60" fill="${C.rock}" stroke="${C.ink}" stroke-width="2"/>`;
  // cove
  const cx = qx + pw / 2;
  b += `<path d="M${cx - 30},360 L${cx - 30},300 Q${cx - 90},250 ${cx},232 Q${cx + 90},250 ${cx + 30},300 L${cx + 30},360 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>`;
  b += `<rect x="${L}" y="360" width="${R - L}" height="60" fill="${C.teal}"/>`;
  b += tx(L + 10, 340, 'resistant band', { size: 15, weight: 700 }) + tx(L + 10, 266, 'softer rock', { size: 15, weight: 700 }) + tx(L + 10, 190, 'resistant rock', { size: 15, weight: 700 });
  b += tx(cx + 78, 252, 'cove', { size: 16, weight: 700, fill: C.tealDark });
  b += tx(qx + pw / 2, 406, 'SEA', { size: 16, anchor: 'middle', weight: 700, fill: C.tealDark });
  b += tx(qx + pw / 2, 446, 'bands parallel to the coast', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  b += tx(860, 104, 'plan view, not to scale', { size: 15, anchor: 'end', fill: C.muted, italic: true });
  const n = note(30, 516, 840, 'Joints and faults are lines of weakness that erosion exploits; the dip of the layers affects cliff steepness and stability.', { size: 16, weight: 600 });
  fig('03-discordant-concordant', 'Geology and the shape of the coast', b + n.s, 516 + n.h + 28,
    'Two plan views. On a discordant coast, hard and soft bands meet the sea at right angles: soft rock erodes into bays with beaches and hard rock stands out as headlands. On a concordant coast the bands run parallel to the shore; a resistant band protects softer rock until the sea breaks through and a rounded cove forms.',
    'The direction of the rock bands decides whether you get headlands and bays or coves.',
    '## How geology influences coastal forms');
}

// 04 Wave-cut notch and platform (cross-section sequence)
{
  let b = '';
  const W = 266, gap = 21;
  const steps = [
    ['1', 'Notch cut', 'Destructive waves attack the base between high and low tide; hydraulic power and abrasion cut a wave-cut notch.'],
    ['2', 'Overhang collapses', 'The notch deepens, the rock above is unsupported and collapses; the cliff retreats inland.'],
    ['3', 'Platform left', 'Repeated over time, a gently sloping wave-cut platform is left, exposed at low tide.'],
  ];
  steps.forEach(([n, h, d], i) => {
    const x = 30 + i * (W + gap), y = 110;
    b += panel(x, y, W, 420);
    b += badge(x + 30, y + 32, 18, n, i === 2 ? C.mustard : C.cream) + tx(x + 58, y + 39, h, { size: 19, weight: 700 });
    const HT = y + 170, LT = y + 208, base = y + 260;
    b += `<rect x="${x + 6}" y="${HT}" width="${W - 12}" height="${base - HT}" fill="${C.teal}" opacity="0.85"/>`;
    const cl = [x + 104, x + 128, x + 150][i];
    // cliff
    let cliff;
    if (i === 0) cliff = `M${x + W - 6},${y + 70} L${cl},${y + 70} L${cl},${HT + 2} L${cl + 22},${HT + 16} L${cl + 4},${LT + 6} L${cl},${base} L${x + W - 6},${base} Z`;
    else if (i === 1) cliff = `M${x + W - 6},${y + 70} L${cl + 2},${y + 70} L${cl},${HT} L${cl + 20},${LT} L${cl + 10},${base - 22} L${x + 60},${base - 6} L${x + 60},${base} L${x + W - 6},${base} Z`;
    else cliff = `M${x + W - 6},${y + 70} L${cl},${y + 70} L${cl},${LT - 6} L${x + 14},${base - 10} L${x + 14},${base} L${x + W - 6},${base} Z`;
    b += `<path d="${cliff}" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>`;
    if (i === 1) {
      [[cl - 14, LT + 6, 9], [cl - 32, LT + 18, 7], [cl - 6, LT + 26, 6]].forEach(([cx_, cy_, r]) => { b += `<circle cx="${cx_}" cy="${cy_}" r="${r}" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>`; });
      b += `<path d="M${x + 104},${y + 70} L${x + 104},${HT} " fill="none" stroke="${C.muted}" stroke-width="2" stroke-dasharray="6 5"/>`;
      b += tx(x + 100, y + 64, 'old cliff', { size: 15, fill: C.muted, anchor: 'middle' });
    }
    if (i === 2) {
      b += `<path d="M${x + 104},${y + 70} L${x + 104},${HT} " fill="none" stroke="${C.muted}" stroke-width="2" stroke-dasharray="6 5"/>`;
      b += `<path d="M${x + 128},${y + 70} L${x + 128},${HT} " fill="none" stroke="${C.muted}" stroke-width="2" stroke-dasharray="6 5"/>`;
      b += tx(x + 60, base + 26, 'wave-cut platform', { size: 15, weight: 700, fill: C.olive });
    }
    if (i === 0) b += tx(cl + 30, HT + 24, 'notch', { size: 15, weight: 700, fill: C.rust });
    b += line(x + 6, HT, x + 70, HT, { color: C.blue, w: 2, dash: '6 4' }) + tx(x + 10, HT - 6, 'HT', { size: 15, fill: C.blue, weight: 700 });
    b += line(x + 6, LT, x + 70, LT, { color: C.blue, w: 2, dash: '6 4' }) + tx(x + 10, LT - 6, 'LT', { size: 15, fill: C.blue, weight: 700 });
    b += lines(x + 18, y + 318, wrap(d, W - 36, 16), { size: 16 });
    if (i < 2) b += arrow(x + W + 2, y + 210, x + W + gap - 2, y + 210, { w: 3 });
  });
  b += tx(450, 556, 'Cross-sections, not to scale. HT = high tide, LT = low tide.', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  fig('04-wave-cut-platform', 'Cliff retreat and the wave-cut platform', b, 582,
    'Three cross-sections. Waves cut a notch at the cliff base between high and low tide; the overhang above collapses and the cliff retreats; repeated over time, a gently sloping wave-cut platform is left at the foot of the cliff, exposed at low tide.',
    'Undercutting and collapse, repeated, move the cliff back and leave a platform.',
    '## Erosional landforms');
}

// 05 Spit to bar and lagoon (plan view)
{
  let b = '';
  const W = 410;
  const mk = (x, title, bar) => {
    let s = panel(x, 110, W, 380) + tx(x + W / 2, 146, title, { size: 21, weight: 700, anchor: 'middle' });
    // land with bay
    s += `<rect x="${x + 10}" y="166" width="${W - 20}" height="310" fill="${C.teal}"/>`;
    s += `<path d="M${x + 10},166 L${x + W - 10},166 L${x + W - 10},400 L${x + W - 60},400 Q${x + W - 120},250 ${x + W / 2},236 Q${x + 120},250 ${x + 80},380 L${x + 10},380 Z" fill="#d8e3c6" stroke="${C.ink}" stroke-width="2.5"/>`;
    if (!bar) {
      s += path(`M${x + 80},380 L${x + 230},380`, { w: 22, stroke: C.ink }) + path(`M${x + 80},380 L${x + 230},380`, { w: 16, stroke: C.sand });
      s += `<path d="M${x + 110},372 Q${x + 150},330 ${x + 210},360 Q${x + 160},372 ${x + 110},372 Z" fill="#a9c48f"/>`;
      s += tx(x + 160, 352, 'calm water', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600 });
      s += tx(x + 240, 418, 'spit grows across the bay', { size: 15, fill: C.ink, weight: 600, anchor: 'middle' });
      s += arrow(x + 236, 380, x + 290, 380, { w: 3, dash: '7 5' });
    } else {
      s += path(`M${x + 80},380 L${x + W - 60},400`, { w: 22, stroke: C.ink }) + path(`M${x + 80},380 L${x + W - 60},400`, { w: 16, stroke: C.sand });
      s += `<path d="M${x + 88},370 Q${x + 120},250 ${x + W / 2},244 Q${x + W - 120},258 ${x + W - 70},390 Z" fill="#9cc7d6" stroke="${C.tealDark}" stroke-width="2"/>`;
      s += tx(x + W / 2, 320, 'LAGOON', { size: 17, anchor: 'middle', fill: C.ink, weight: 700 });
      s += tx(x + W / 2, 430, 'bar', { size: 16, anchor: 'middle', fill: C.ink, weight: 700 });
    }
    s += arrow(x + 30, 456, x + 140, 456, { w: 3.5, color: C.olive, marker: 'ahO' }) + tx(x + 150, 462, 'longshore drift', { size: 15, weight: 700, fill: C.olive });
    return s;
  };
  b += mk(30, 'Spit', false) + mk(460, 'Bar', true);
  b += arrow(442, 300, 458, 300, { w: 3 });
  const n = note(30, 512, 840, 'If a spit grows across a bay and joins the land on the other side, it forms a bar, trapping a shallow lagoon behind it.', { size: 17 });
  fig('05-spit-to-bar', 'From spit to bar', b + n.s, 512 + n.h + 28,
    'Two plan views of a bay. Longshore drift builds a spit part-way across it, with calm water behind. When the ridge reaches the land on the other side it becomes a bar, trapping a shallow lagoon.',
    'A bar is a spit that has closed off the bay, trapping a lagoon.',
    '## Depositional landforms');
}
