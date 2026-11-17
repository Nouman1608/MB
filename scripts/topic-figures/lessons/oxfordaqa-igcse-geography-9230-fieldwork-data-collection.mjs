import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-geography-9230-fieldwork-data-collection';

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


// 01 Types of data
{
  let b = '';
  const pair = (y, lh, ld, le, rh, rd, re) => {
    let o = box(30, y, 410, 150, { title: lh, body: ld + '\n\ne.g. ' + le, tsize: 21, bsize: 16, valign: 'top', fill: C.tealLight, edge: C.tealDark, bfill: C.ink });
    o += box(460, y, 410, 150, { title: rh, body: rd + '\n\ne.g. ' + re, tsize: 21, bsize: 16, valign: 'top', fill: C.cream, edge: C.olive, bfill: C.ink });
    o += `<circle cx="450" cy="${y + 75}" r="20" fill="${C.panel}" stroke="${C.ink}" stroke-width="2"/>` + tx(450, y + 81, 'or', { size: 15, weight: 700, anchor: 'middle' });
    return o;
  };
  b += tx(30, 128, 'Who collected it?', { size: 18, weight: 700, fill: C.muted });
  b += pair(142, 'Primary', 'collected first-hand by you or your group', 'measurements, counts, questionnaires, field sketches', 'Secondary', 'collected by someone else', 'census data, maps, published river-flow records, GIS layers');
  b += tx(30, 330, 'What form does it take?', { size: 18, weight: 700, fill: C.muted });
  b += pair(344, 'Quantitative', 'numerical', 'river width, pedestrian count, temperature', 'Qualitative', 'descriptive', 'interview comments, photographs, field sketches');
  const n = note(30, 518, 840, 'Alternative methods must go beyond pre-processed data: e.g. selecting data from the internet, raw data from the teacher, or interviews at school or home.', { size: 16, weight: 600 });
  fig('01-data-types', 'Types of data', b + n.s, 518 + n.h + 28,
    'Two ways to classify data. Primary data are collected first-hand, such as measurements and questionnaires; secondary data are collected by others, such as census data, maps and GIS layers. Quantitative data are numerical, such as river width; qualitative data are descriptive, such as interviews and photographs.',
    'Data are primary or secondary, and quantitative or qualitative.',
    '## Types of data');
}

// 02 River channel measurements
{
  let b = '';
  b += panel(30, 110, 840, 300);
  const L = 120, R = 780, top = 170;
  // channel
  const bed = (x) => { const u = (x - L) / (R - L); return top + 20 + 150 * Math.sin(Math.PI * u) ** 0.8; };
  let d = `M${L - 50},${top - 20} L${L},${top}`;
  for (let x = L; x <= R; x += 10) d += ` L${x},${bed(x).toFixed(1)}`;
  d += ` L${R},${top} L${R + 50},${top - 20} L${R + 50},400 L${L - 50},400 Z`;
  b += `<path d="M${L},${top + 20} ${Array.from({ length: 67 }, (_, k) => { const x = L + k * 10; return `L${x},${bed(x).toFixed(1)}`; }).join(' ')} L${R},${top + 20} Z" fill="${C.teal}"/>`;
  b += `<path d="${d}" fill="${C.sand}" stroke="${C.ink}" stroke-width="2.5" fill-rule="evenodd"/>`;
  b += `<path d="M${L},${top + 20} ${Array.from({ length: 67 }, (_, k) => { const x = L + k * 10; return `L${x},${bed(x).toFixed(1)}`; }).join(' ')} L${R},${top + 20} Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`;
  // width
  b += `<line x1="${L}" y1="${top + 4}" x2="${R}" y2="${top + 4}" stroke="${C.olive}" stroke-width="3" marker-start="url(#ahO)" marker-end="url(#ahO)"/>`;
  b += tx((L + R) / 2, top - 6, 'width: tape across the water surface, bank to bank', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  // depth points
  for (let k = 1; k <= 10; k++) { const x = L + (k * (R - L)) / 11; b += line(x, top + 20, x, bed(x), { color: C.ink, w: 2, dash: '5 4' }) + `<circle cx="${x}" cy="${bed(x)}" r="4" fill="${C.ink}"/>`; }
  b += tx((L + R) / 2, 388, 'depth: metre rule at equal intervals (e.g. ten points), then the mean', { size: 16, weight: 700, anchor: 'middle' });
  b += tx(856, 132, 'cross-section, not to scale', { size: 15, anchor: 'end', fill: C.muted, italic: true });
  // float plan
  b += panel(30, 422, 840, 160);
  b += `<rect x="60" y="456" width="780" height="70" fill="${C.teal}"/>` + line(60, 456, 840, 456, { w: 2.5 }) + line(60, 526, 840, 526, { w: 2.5 });
  b += line(200, 448, 200, 534, { color: C.rust, w: 3 }) + line(640, 448, 640, 534, { color: C.rust, w: 3 });
  b += tx(200, 446, 'start', { size: 15, anchor: 'middle', fill: C.rust, weight: 700 }) + tx(640, 446, 'finish', { size: 15, anchor: 'middle', fill: C.rust, weight: 700 });
  b += `<circle cx="260" cy="491" r="10" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` + arrow(276, 491, 400, 491, { w: 3 });
  b += `<line x1="204" y1="542" x2="636" y2="542" stroke="${C.ink}" stroke-width="2" marker-start="url(#ah)" marker-end="url(#ah)"/>` + tx(420, 566, 'measured distance, e.g. 10 m', { size: 15, weight: 700, anchor: 'middle' });
  b += tx(720, 486, 'time the float', { size: 15, weight: 600 }) + tx(720, 506, 'three times', { size: 15, weight: 600 });
  b += tx(70, 476, 'velocity (plan view)', { size: 15, weight: 700, fill: C.tealDark });
  // formulas
  const fy = 600;
  b += rect(30, fy, 410, 70, C.cream, C.olive, 12, 2.5) + tx(235, fy + 30, 'cross-sectional area =', { size: 17, weight: 700, anchor: 'middle' }) + tx(235, fy + 54, 'width × mean depth', { size: 17, anchor: 'middle' });
  b += rect(460, fy, 410, 70, C.mustard, C.ink, 12, 2.5) + tx(665, fy + 30, 'discharge =', { size: 17, weight: 700, anchor: 'middle' }) + tx(665, fy + 54, 'cross-sectional area × velocity', { size: 17, anchor: 'middle' });
  fig('02-river-measurements', 'Measuring a river channel', b, fy + 70 + 28,
    'A river cross-section: width is measured with a tape across the water surface from bank to bank, and depth with a metre rule at ten equal intervals to give a mean. In plan view, a float is timed three times over a measured 10 m. Width times mean depth gives cross-sectional area; area times velocity gives discharge.',
    'Width, mean depth and velocity combine to give discharge.',
    '## Physical data: common methods');
}

// 03 Beach profile and quadrat
{
  let b = '';
  b += panel(30, 110, 840, 320);
  b += tx(56, 146, 'Beach profile', { size: 20, weight: 700 });
  const pts = [[90, 360], [270, 340], [430, 290], [590, 250], [760, 236]];
  b += `<rect x="32" y="352" width="160" height="76" fill="${C.teal}"/>` + tx(40, 412, 'sea', { size: 15, weight: 700, fill: C.tealDark });
  b += `<path d="M${pts.map((p) => p.join(',')).join(' L')} L860,236 L860,428 L90,428 Z" fill="${C.sand}" stroke="${C.ink}" stroke-width="2.5"/>`;
  pts.forEach(([x, y], i) => {
    b += rect(x - 4, y - 70, 8, 70, i % 2 ? C.rust : '#ffffff', C.ink, 1, 2) + rect(x - 4, y - 70, 8, 18, C.rust, C.ink, 1, 2);
    if (i < pts.length - 1) { const [x2, y2] = pts[i + 1]; b += line(x, y - 50, x2, y2 - 50, { color: C.olive, w: 2, dash: '6 4' }); }
  });
  b += tx(110, 236, 'angle measured with a clinometer', { size: 16, weight: 700, fill: C.olive }) + line(200, 244, 180, 298, { color: C.olive, w: 1.8 });
  b += tx(600, 170, 'ranging poles at each change of slope', { size: 16, weight: 700, anchor: 'middle' }) + line(600, 178, 592, 186, { w: 1.8 });
  b += tx(830, 416, 'back of beach', { size: 15, anchor: 'end', fill: C.muted });
  b += tx(856, 146, 'cross-section, not to scale', { size: 15, anchor: 'end', fill: C.muted, italic: true });
  // quadrat and others
  b += panel(30, 446, 410, 200);
  b += tx(56, 482, 'Quadrat: vegetation cover', { size: 19, weight: 700 });
  b += rect(60, 500, 130, 130, '#ffffff', C.ink, 2, 3);
  for (let k = 1; k < 4; k++) b += line(60 + k * 32.5, 500, 60 + k * 32.5, 630, { color: C.muted, w: 1.2 }) + line(60, 500 + k * 32.5, 190, 500 + k * 32.5, { color: C.muted, w: 1.2 });
  b += `<path d="M64,504 L150,504 Q160,560 120,580 Q90,600 64,590 Z" fill="${C.grass}" opacity="0.75"/>`;
  b += lines(210, 540, ['estimate the', 'percentage covered', 'by plants, or count', 'species'], { size: 16 }, 21);
  b += panel(460, 446, 410, 200);
  b += tx(486, 482, 'Pebbles and microclimate', { size: 19, weight: 700 });
  b += `<ellipse cx="530" cy="540" rx="36" ry="20" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>` + `<line x1="494" y1="540" x2="566" y2="540" stroke="${C.ink}" stroke-width="2" marker-start="url(#ah)" marker-end="url(#ah)"/>`;
  b += lines(590, 524, ['ruler or callipers: the', 'longest axis; roundness', 'chart for shape'], { size: 16 }, 21);
  b += lines(486, 604, ['thermometer, anemometer: same', 'height at each site'], { size: 16 }, 21);
  fig('03-beach-quadrat', 'More physical methods', b, 674,
    'A beach profile cross-section from the sea to the back of the beach, with ranging poles at each change of slope and a clinometer measuring the angle between them. Below, a quadrat used to estimate percentage plant cover, pebbles measured on their longest axis and compared with a roundness chart, and temperature and wind measured at the same height at each site.',
    'Match the equipment to the variable your hypothesis names.',
    '## Physical data: common methods');
}

// 04 Sampling methods
{
  let b = '';
  const W = 266, gap = 21;
  const titles = [['Random', 'random numbers choose grid coordinates', 'avoids your bias; may miss parts by chance'], ['Systematic', 'sites at regular intervals', 'even coverage, easy to repeat; may miss features between sites'], ['Stratified', 'each group sampled in proportion', 'represents every group; needs information in advance']];
  const rnd = [[22, 30], [140, 14], [70, 92], [180, 60], [110, 140], [30, 166], [160, 186], [194, 118], [70, 196], [118, 60]];
  titles.forEach(([h, d, e], i) => {
    const x = 30 + i * (W + gap), y = 110;
    b += panel(x, y, W, 470);
    b += tx(x + W / 2, y + 36, h, { size: 21, weight: 700, anchor: 'middle' });
    const gx = x + 23, gy = y + 54, gs = 220;
    if (i < 2) b += rect(gx, gy, gs, gs, '#d8e3c6', C.ink, 4, 2);
    else { b += rect(gx, gy, gs * 0.7, gs, '#d8e3c6', C.ink, 4, 2) + rect(gx + gs * 0.7, gy, gs * 0.3, gs, '#a9c48f', C.ink, 4, 2); b += tx(gx + gs * 0.35, gy + gs + 22, 'grass 70%', { size: 15, anchor: 'middle', weight: 600 }) + tx(gx + gs * 0.85, gy + gs + 22, 'wood 30%', { size: 15, anchor: 'middle', weight: 600 }); }
    let P = [];
    if (i === 0) P = rnd;
    if (i === 1) for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) if (P.length < 10) P.push([28 + c * 55, 36 + r * 75]);
    if (i === 2) { P = [[20, 25], [80, 25], [125, 25], [20, 95], [80, 95], [125, 95], [50, 165]].concat([[175, 40], [175, 110], [175, 180]]); }
    P.forEach(([px, py]) => { b += rect(gx + px, gy + py, 18, 18, '#ffffff', C.ink, 2, 2); });
    b += tx(x + W / 2, gy + gs + (i === 2 ? 46 : 26), i === 2 ? '7 quadrats on grass, 3 in woodland' : '10 quadrats', { size: 15, anchor: 'middle', fill: C.muted });
    b += lines(x + 18, y + 362, wrap(d, W - 36, 16), { size: 16, weight: 700 }, LH(16));
    b += lines(x + 18, y + 362 + wrap(d, W - 36, 16).length * LH(16) + 8, wrap(e, W - 36, 16), { size: 16, fill: C.muted }, LH(16));
  });
  const y = 600;
  b += tx(30, y + 8, 'Sampling a place by', { size: 18, weight: 700, fill: C.tealDark });
  [['Points', 'sites along a river'], ['Lines (transects)', 'across a sand dune system'], ['Areas', 'quadrats on a field']].forEach(([h, d], i) => {
    const x = 30 + i * 287;
    b += rect(x, y + 22, 266, 70, C.panel, C.tealDark, 12, 2) + tx(x + 133, y + 50, h, { size: 18, weight: 700, anchor: 'middle' }) + tx(x + 133, y + 76, d, { size: 16, anchor: 'middle' });
  });
  fig('04-sampling', 'Choosing a sample', b, y + 92 + 28,
    'Three plan views of ten quadrats. Random: scattered by random coordinates. Systematic: at regular intervals. Stratified: a field that is 70% grass and 30% woodland gets seven quadrats on grass and three in woodland. Below, a place can be sampled at points, along lines or transects, or within areas.',
    'Random avoids bias, systematic gives even coverage, stratified represents every group.',
    '## Sampling');
}

// 05 Recording sheet
{
  let b = '';
  b += rect(30, 120, 840, 330, '#ffffff', C.ink, 6, 2.5);
  b += tx(52, 154, 'Title: How does the river change downstream?', { size: 17, weight: 700 });
  b += tx(52, 182, 'Date: ________   Time: ______   Weather: ____________', { size: 16, fill: C.muted });
  const cols = [['Site', 60], ['Distance from source (km)', 120], ['Width (m)', 90], ['Depth readings (cm)', 150], ['Mean depth (cm)', 100], ['Float time over 10 m (s): 1, 2, 3', 150], ['Mean (s)', 70], ['Notes', 60]];
  let x = 40; const y0 = 200;
  cols.forEach(([h, w], i) => {
    b += rect(x, y0, w, 74, i === 3 || i === 5 ? C.cream : C.tealLight, C.ink, 0, 1.5);
    b += lines(x + w / 2, y0 + 74 / 2 - (wrap(h, w - 10, 15).length - 1) * 9 + 5, wrap(h, w - 10, 15), { size: 15, weight: 700, anchor: 'middle' }, 18);
    [['1', '0.5'], ['2', '1.5'], ['3', '']].forEach((r, k) => { b += rect(x, y0 + 74 + k * 44, w, 44, '#ffffff', C.ink, 0, 1.2); if (i < 2 && r[i]) b += tx(x + w / 2, y0 + 74 + k * 44 + 28, r[i], { size: 16, anchor: 'middle' }); });
    x += w;
  });
  // annotations
  b += `<circle cx="840" cy="148" r="13" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` + tx(840, 153, 'a', { size: 15, weight: 700, anchor: 'middle' });
  b += tx(52, 470, 'A good sheet includes:', { size: 18, weight: 700, fill: C.tealDark });
  const items = ['the title, date, time and weather', 'site number and location (grid reference or distance)', 'a column for each variable, with units', 'space for repeat readings and their mean', 'a notes column for anything unusual'];
  items.forEach((s_, i) => { b += badge(66, 500 + i * 36, 13, String.fromCharCode(97 + i), i === 0 ? C.mustard : C.cream) + tx(90, 506 + i * 36, s_, { size: 17 }); });
  // letter badges on sheet
  [['b', 70, 426], ['c', 265, 426], ['d', 510, 426], ['e', 810, 426]].forEach(([l, bx, by]) => { b += `<circle cx="${bx}" cy="${by}" r="13" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/>` + tx(bx, by + 5, l, { size: 15, weight: 700, anchor: 'middle' }); });
  fig('05-recording-sheet', 'Designing a data collection sheet', b, 500 + 4 * 36 + 40,
    'A river-study recording sheet with a title, date, time and weather line, then columns for site, distance from source, width, depth readings, mean depth, three float times over 10 m, mean time and notes. Labels mark the five features a good sheet needs.',
    'Units, repeats and a notes column make the data quick, accurate and consistent.',
    '## Designing a data collection sheet');
}

// 06 Accuracy and reliability
{
  let b = '';
  const target = (cx, cy, pts) => {
    let s = '';
    [70, 50, 30, 12].forEach((r, i) => { s += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${i % 2 ? '#ffffff' : C.tealLight}" stroke="${C.ink}" stroke-width="1.5"/>`; });
    s += `<circle cx="${cx}" cy="${cy}" r="4" fill="${C.rust}"/>`;
    pts.forEach(([dx, dy]) => { s += `<circle cx="${cx + dx}" cy="${cy + dy}" r="6" fill="${C.ink}"/>`; });
    return s;
  };
  const cases = [
    ['Accurate and reliable', 'readings cluster on the true value', [[-4, 3], [3, -4], [5, 4], [-3, -5]], C.cream, C.olive],
    ['Reliable, not accurate', 'consistent but wrong: a thermometer that always reads 2 °C too high', [[38, -30], [44, -25], [40, -36], [46, -32]], C.panel, C.tealDark],
    ['Neither', 'scattered and off target', [[-40, 30], [30, -50], [50, 20], [-20, -45]], '#fbeee6', C.rust],
  ];
  const W = 266, gap = 21;
  cases.forEach(([h, d, p, f, e], i) => {
    const x = 30 + i * (W + gap);
    b += rect(x, 110, W, 330, f, e, 14, 2.5);
    b += target(x + W / 2, 220, p);
    b += tx(x + W / 2, 326, h, { size: 19, weight: 700, anchor: 'middle' });
    b += lines(x + W / 2, 356, wrap(d, W - 36, 16), { size: 16, anchor: 'middle' });
  });
  b += tx(450, 466, 'red dot = the true value', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  const rows = [
    ['Accuracy', 'how close to the true value', 'precise equipment; read scales carefully; keep tapes taut'],
    ['Reliability', 'repeating gives similar results', 'repeat readings; take the mean; more than one day'],
    ['Procedures', 'the exact steps followed', 'same method, equipment, time and person at every site'],
    ['Control group', 'a comparison without the factor', 'air temperature over grass as well as tarmac'],
  ];
  let y = 486;
  rows.forEach(([h, d, imp], i) => {
    const dl = wrap(d, 230, 16), il = wrap(imp, 390, 16);
    const hh = Math.max(dl.length, il.length) * LH(16) + 22;
    b += `<rect x="30" y="${y}" width="840" height="${hh}" fill="${i % 2 ? '#f7f9f9' : C.panel}" stroke="${C.panelEdge}" stroke-width="1.5"/>`;
    b += tx(46, y + hh / 2 + 6, h, { size: 17, weight: 700 }) + lines(190, y + (hh - dl.length * LH(16)) / 2 + 15, dl, { size: 16 }) + lines(450, y + (hh - il.length * LH(16)) / 2 + 15, il, { size: 16, fill: C.tealDark });
    y += hh;
  });
  fig('06-accuracy-reliability', 'Accuracy, reliability and fair tests', b, y + 28,
    'Three targets: readings clustered on the true value are accurate and reliable; readings clustered away from it are reliable but not accurate, like a thermometer that always reads 2 °C too high; scattered readings are neither. Below, how to improve accuracy, reliability, procedures and use a control group such as grass beside tarmac.',
    'Results can be consistent and still wrong: reliability is not accuracy.',
    '## Accuracy, reliability, procedures and control groups');
}

// 07 Describe and justify
{
  let b = '';
  b += tx(450, 104, 'Question: Describe and justify one method you used to collect primary data. [4 marks]', { size: 16, anchor: 'middle', weight: 600, fill: C.muted, italic: true });
  b += rect(30, 122, 840, 52, C.tealDark, C.tealDark, 12) + tx(52, 155, 'Description: so someone else could repeat it', { size: 19, weight: 700, fill: '#ffffff' });
  const desc = [['Equipment', 'an orange float'], ['Distance', 'a measured 10 m stretch'], ['Position', 'the centre of the channel'], ['Repeats', 'three per site; mean taken'], ['Sites', 'six sites']];
  desc.forEach(([h, d], i) => {
    const x = 30 + (i % 3) * 287, y = 184 + Math.floor(i / 3) * 70;
    b += rect(x, y, 266, 60, C.tealLight, C.tealDark, 10, 2) + tx(x + 16, y + 25, h, { size: 16, weight: 700 }) + tx(x + 16, y + 48, d, { size: 16 });
  });
  let y = 334;
  b += rect(30, y, 840, 52, C.olive, C.olive, 12) + tx(52, y + 33, 'Justification: why it was a good choice', { size: 19, weight: 700, fill: '#ffffff' });
  y += 62;
  const just = [
    ['Time', 'cheap and quick, so all six sites could be measured in one day'],
    ['Reliability', 'three repeats reduced the effect of the float catching on a rock'],
    ['Fairness', 'measuring in the centre at every site kept the procedure the same'],
  ];
  just.forEach(([h, d]) => {
    b += rect(30, y, 840, 56, C.cream, C.olive, 10, 2) + tx(52, y + 35, h, { size: 18, weight: 700 }) + tx(200, y + 35, d, { size: 16 });
    y += 64;
  });
  b += tx(450, y + 14, '✗ “It was easy” is not a justification unless it is linked to the enquiry.', { size: 17, anchor: 'middle', weight: 700, fill: C.rust });
  fig('07-describe-justify', 'Describing and justifying a method', b, y + 42,
    'The model answer on timing a float split into description, equipment, a measured 10 m, the centre of the channel, three repeats and six sites, and justification: it was quick enough for all sites in one day, repeats improved reliability, and the same position kept the test fair.',
    'Describe so it can be repeated; justify by linking to the enquiry.',
    '## Describing and justifying methods');
}
