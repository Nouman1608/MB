import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-geography-9230-photographs-sketches';

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


// shared valley scene (schematic, from the worked example)
const valley = (x, y, w, h, { sketch = false } = {}) => {
  const X = (u) => x + u * w, Y = (v) => y + v * h;
  const stroke = C.ink, sw = sketch ? 2.5 : 2;
  let s = '';
  if (!sketch) s += `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#eaf1f8"/>`;
  // background hill
  s += `<path d="M${X(0)},${Y(0.42)} Q${X(0.3)},${Y(0.08)} ${X(0.55)},${Y(0.12)} Q${X(0.8)},${Y(0.16)} ${X(1)},${Y(0.36)} L${X(1)},${Y(1)} L${X(0)},${Y(1)} Z" fill="${sketch ? 'none' : '#d9cfa8'}" stroke="${stroke}" stroke-width="${sw}"/>`;
  // valley sides (middle ground), V shape
  s += `<path d="M${X(0)},${Y(0.38)} L${X(0.42)},${Y(0.72)} L${X(0.58)},${Y(0.72)} L${X(1)},${Y(0.34)} L${X(1)},${Y(1)} L${X(0)},${Y(1)} Z" fill="${sketch ? 'none' : '#7fa86a'}" stroke="${stroke}" stroke-width="${sw}"/>`;
  if (!sketch) for (let k = 0; k < 14; k++) { const u = 0.04 + (k % 7) * 0.05 + (k >= 7 ? 0.62 : 0), v = 0.5 + ((k * 37) % 5) * 0.035 + (k >= 7 ? -0.02 : 0); s += `<circle cx="${X(u)}" cy="${Y(v)}" r="${h * 0.035}" fill="${C.grass}" stroke="${C.ink}" stroke-width="1"/>`; }
  else for (let k = 0; k < 6; k++) { const u = 0.08 + k * 0.05, v = 0.5 + k * 0.03; s += `<path d="M${X(u) - 8},${Y(v)} q8,-14 16,0" fill="none" stroke="${C.ink}" stroke-width="2"/>`; s += `<path d="M${X(1 - u) - 8},${Y(v - 0.02)} q8,-14 16,0" fill="none" stroke="${C.ink}" stroke-width="2"/>`; }
  // river foreground
  s += `<path d="M${X(0.44)},${Y(0.72)} Q${X(0.3)},${Y(0.88)} ${X(0.24)},${Y(1)} L${X(0.62)},${Y(1)} Q${X(0.6)},${Y(0.86)} ${X(0.56)},${Y(0.72)} Z" fill="${sketch ? 'none' : C.blue}" stroke="${stroke}" stroke-width="${sw}" opacity="${sketch ? 1 : 0.85}"/>`;
  [[0.36, 0.93, 0.03], [0.5, 0.95, 0.025], [0.44, 0.86, 0.02]].forEach(([u, v, r]) => { s += `<ellipse cx="${X(u)}" cy="${Y(v)}" rx="${w * r}" ry="${h * r * 0.9}" fill="${sketch ? 'none' : C.rockDark}" stroke="${stroke}" stroke-width="${sw}"/>`; });
  return s;
};

// 01 Four viewpoints
{
  let b = '';
  b += panel(30, 110, 840, 300);
  // ground landscape
  b += `<path d="M60,360 Q200,330 330,345 Q470,300 600,330 Q720,350 840,320 L840,390 L60,390 Z" fill="#d8e3c6" stroke="${C.ink}" stroke-width="2"/>`;
  const cam = (x, y, a, l) => `<g transform="translate(${x},${y}) rotate(${a})"><rect x="-14" y="-9" width="28" height="18" rx="3" fill="${C.ink}"/><circle cx="14" cy="0" r="6" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/></g>`;
  b += cam(130, 336, 0) + arrow(150, 336, 250, 336, { w: 2.5, dash: '6 5' }) + tx(110, 312, 'Ground', { size: 17, weight: 700 });
  b += cam(330, 190, 40) + arrow(346, 204, 430, 290, { w: 2.5, dash: '6 5' }) + tx(300, 168, 'Oblique aerial', { size: 17, weight: 700 });
  b += cam(560, 180, 90) + arrow(560, 196, 560, 296, { w: 2.5, dash: '6 5' }) + tx(560, 158, 'Vertical aerial', { size: 17, weight: 700, anchor: 'middle' });
  b += `<rect x="740" y="140" width="40" height="22" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2"/><rect x="718" y="146" width="20" height="10" fill="${C.blue}"/><rect x="782" y="146" width="20" height="10" fill="${C.blue}"/>` + arrow(760, 164, 760, 296, { w: 2.5, dash: '6 5' }) + tx(760, 188, '', {}) + tx(774, 226, 'Satellite', { size: 17, weight: 700 }) + tx(774, 246, '(from space)', { size: 15, fill: C.muted });
  b += tx(856, 404, 'schematic, not to scale', { size: 15, anchor: 'end', fill: C.muted, italic: true });
  const rows = [
    ['Ground', 'detail of landforms, buildings and people', 'only what is in line of sight; foreground hides background'],
    ['Oblique aerial', 'shape of landforms and settlement, with a sense of height', 'scale changes from front to back'],
    ['Vertical aerial', 'layout, like a map; measuring and matching to maps', 'height is hard to judge'],
    ['Satellite', 'large areas; change over time', 'less detail; colours may be processed'],
  ];
  let y = 430;
  b += tx(220, y + 4, '✓ Best for', { size: 16, weight: 700, fill: C.tealDark }) + tx(560, y + 4, '✗ Limitation', { size: 16, weight: 700, fill: C.rust });
  y += 14;
  rows.forEach(([h, g, l], i) => {
    const gl = wrap(g, 310, 16), ll = wrap(l, 290, 16);
    const hh = Math.max(gl.length, ll.length) * LH(16) + 20;
    b += `<rect x="30" y="${y}" width="840" height="${hh}" fill="${i % 2 ? '#f7f9f9' : C.panel}" stroke="${C.panelEdge}" stroke-width="1.5"/>`;
    b += tx(46, y + hh / 2 + 6, h, { size: 17, weight: 700 }) + lines(220, y + (hh - gl.length * LH(16)) / 2 + 15, gl, { size: 16 }) + lines(560, y + (hh - ll.length * LH(16)) / 2 + 15, ll, { size: 16, fill: C.rust });
    y += hh;
  });
  fig('01-photo-viewpoints', 'Four kinds of photograph', b, y + 28,
    'Camera positions for four kinds of photograph: ground level looking across, oblique aerial at an angle, vertical aerial looking straight down and satellite from space. A table gives what each is best for and its limitation.',
    'Where the camera is decides what a photograph can show.',
    '## Types of photograph');
}

// 02 Dividing a photograph
{
  let b = '';
  const x = 30, y = 110, w = 560, h = 380;
  b += valley(x, y, w, h);
  b += `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="${C.ink}" stroke-width="3"/>`;
  // grid thirds
  [1, 2].forEach((k) => { b += line(x + (w * k) / 3, y, x + (w * k) / 3, y + h, { color: '#ffffff', w: 2.5, dash: '10 7' }); });
  b += line(x, y + h * 0.42, x + w, y + h * 0.42, { color: '#ffffff', w: 2.5, dash: '10 7' }) + line(x, y + h * 0.74, x + w, y + h * 0.74, { color: '#ffffff', w: 2.5, dash: '10 7' });
  const band = (yy, l) => rect(x + w + 14, yy - 18, 150, 32, C.panel, C.ink, 8, 2) + tx(x + w + 89, yy + 4, l, { size: 16, weight: 700, anchor: 'middle' });
  b += band(y + h * 0.2, 'background') + band(y + h * 0.58, 'middle ground') + band(y + h * 0.88, 'foreground');
  ['left', 'centre', 'right'].forEach((l, k) => { b += tx(x + (w * (k + 0.5)) / 3, y + h + 24, l, { size: 16, weight: 700, anchor: 'middle' }); });
  b += tx(x + w + 10, y + h + 24, 'schematic', { size: 15, fill: C.muted, italic: true });
  const cats = [['Landforms', 'relief, valleys, cliffs, beaches'], ['Natural vegetation', 'type and density'], ['Land use', 'farming, housing, industry, transport'], ['Settlement', 'size, density, building types, pattern']];
  let yy = y + h + 50;
  b += tx(30, yy, 'Then work through the four categories:', { size: 18, weight: 700, fill: C.tealDark });
  cats.forEach(([c, d], i) => { const bx = 30 + (i % 2) * 430, by = yy + 14 + Math.floor(i / 2) * 64; b += rect(bx, by, 410, 58, C.panel, C.tealDark, 10, 2) + tx(bx + 16, by + 25, c, { size: 17, weight: 700 }) + tx(bx + 16, by + 47, d, { size: 15 }); });
  yy += 14 + 2 * 64;
  const ex = '“In the centre foreground there is a narrow river with large boulders.”';
  b += rect(30, yy + 6, 840, 52, C.cream, C.olive, 12, 2.5) + tx(450, yy + 39, ex, { size: 17, italic: true, anchor: 'middle' });
  fig('02-dividing-photo', 'Reading a photograph systematically', b, yy + 58 + 28,
    'A schematic river-valley photograph divided into background, middle ground and foreground, and into left, centre and right thirds. Below, the four categories to work through, landforms, natural vegetation, land use and settlement, and an example of locating a feature: in the left foreground there is a narrow river with large boulders.',
    'Divide the photograph, then say where each feature is.',
    '## Reading a photograph systematically');
}

// 03 Direction of view
{
  let b = '';
  b += panel(30, 110, 520, 470);
  const gx = 70, gy = 140, gs = 110;
  b += `<rect x="${gx}" y="${gy}" width="${gs * 4}" height="${gs * 4}" fill="#f4f7ee" stroke="${C.ink}" stroke-width="2"/>`;
  for (let k = 1; k < 4; k++) b += line(gx + k * gs, gy, gx + k * gs, gy + 4 * gs, { color: C.panelEdge, w: 1.5 }) + line(gx, gy + k * gs, gx + 4 * gs, gy + k * gs, { color: C.panelEdge, w: 1.5 });
  // river
  b += path(`M${gx},${gy + 330} Q${gx + 200},${gy + 300} ${gx + 260},${gy + 200} Q${gx + 320},${gy + 90} ${gx + 440},${gy + 60}`, { stroke: C.blue, w: 7 });
  // bridge
  b += rect(gx + 236, gy + 214, 52, 14, C.rockDark, C.ink, 2, 2) + tx(gx + 296, gy + 240, 'bridge', { size: 16, weight: 700 });
  // church
  const cx = gx + 330, cy = gy + 150;
  b += rect(cx - 12, cy - 6, 24, 20, C.panel, C.ink, 1, 2) + path(`M${cx - 4},${cy - 6} L${cx - 4},${cy - 24} M${cx - 10},${cy - 18} L${cx + 2},${cy - 18}`, { w: 2.5 }) + tx(cx + 18, cy + 8, 'church', { size: 16, weight: 700 });
  // camera and view cone
  const px = gx + 90, py = gy + 380;
  b += `<path d="M${px},${py} L${gx + 400},${gy + 110} L${gx + 250},${gy + 40} Z" fill="${C.mustard}" opacity="0.25"/>`;
  b += arrow(px, py, gx + 300, gy + 170, { w: 4, color: C.rust, marker: 'ahR' });
  b += `<circle cx="${px}" cy="${py}" r="11" fill="${C.ink}"/>` + tx(px + 16, py + 6, 'camera', { size: 16, weight: 700 });
  // compass
  const kx = 490, ky = 520;
  b += `<circle cx="${kx}" cy="${ky}" r="24" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/>` + arrow(kx, ky + 14, kx, ky - 20, { w: 3 }) + tx(kx, ky - 30, 'N', { size: 16, weight: 700, anchor: 'middle' });
  b += tx(290, 572, 'plan view, fictional map, not to scale', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  const steps = [
    ['1', 'Identify two features in the photograph', 'e.g. a church and a bridge'],
    ['2', 'Locate them on the map', 'four-figure reference for an area, six-figure for a point'],
    ['3', 'Work out where the camera was pointing', 'give a compass direction: “looking north-east”'],
  ];
  let y = 120;
  steps.forEach(([n, h, d]) => {
    const hl = wrap(h, 215, 17), dl = wrap(d, 250, 16);
    const hh = hl.length * LH(17) + dl.length * LH(16) + 34;
    b += panel(566, y, 304, hh);
    b += badge(592, y + 28, 15, n, n === '3' ? C.mustard : C.cream);
    b += lines(616, y + 34, hl, { size: 17, weight: 700 }, LH(17)) + lines(586, y + 34 + hl.length * LH(17) + 4, dl, { size: 16, fill: C.muted });
    y += hh + 12;
  });
  const mh = boxH(304, { title: 'Map and photograph', body: 'map: height, distance, names, wider area. Photograph: land use, vegetation, appearance.', tsize: 17, bsize: 16 });
  b += box(566, y + 4, 304, mh, { title: 'Map and photograph', body: 'map: height, distance, names, wider area. Photograph: land use, vegetation, appearance.', tsize: 17, bsize: 16, fill: C.cream, edge: C.olive, bfill: C.ink, valign: 'top' });
  fig('03-direction-of-view', 'Matching a photograph to a map', b, Math.max(608, y + 4 + mh + 28),
    'A fictional plan map with a river, a bridge and a church. A camera in the south-west of the map points towards both features, so the photograph was taken looking north-east. Steps: identify two features, locate them on the map with grid references, and give the direction as a compass point.',
    'Two features on both the photograph and the map fix the direction of view.',
    '## Matching a photograph to a map');
}

// 04 Field sketch from the worked example
{
  let b = '';
  const x = 60, y = 150, w = 480, h = 320;
  b += rect(30, 110, 540, 410, '#ffffff', C.ink, 6, 2.5);
  b += tx(300, 138, 'Field sketch: river valley (title: add place and direction of view)', { size: 15, weight: 700, anchor: 'middle' });
  b += valley(x, y, w, h, { sketch: true });
  b += `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`;
  const lab = (px, py, lx, ly, l, ann) => line(px, py, lx, ly, { w: 1.5, color: C.muted }) + tx(lx, ly - 2, l, { size: 15, weight: 700, anchor: lx > px ? 'start' : 'end' }) + (ann ? tx(lx, ly + 16, ann, { size: 15, fill: C.tealDark, italic: true, anchor: lx > px ? 'start' : 'end' }) : '');
  b += tx(x + w * 0.55, y + h * 0.06, 'bare, rounded hilltop', { size: 15, weight: 700, anchor: 'middle' });
  b += tx(x + 10, y + h * 0.33, 'steep, wooded', { size: 15, weight: 700 }) + tx(x + 10, y + h * 0.33 + 18, 'valley side', { size: 15, weight: 700 });
  b += tx(x + w * 0.52, y + h * 0.62, 'narrow V-shaped valley', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += tx(x + w * 0.66, y + h * 0.84, 'narrow, fast river', { size: 15, weight: 700 }) + tx(x + w * 0.66, y + h * 0.84 + 18, 'with large boulders', { size: 15, weight: 700 });
  b += tx(x + w * 0.66, y + h * 0.84 + 36, '(carries heavy load in flood)', { size: 15, italic: true, fill: C.tealDark });
  b += tx(300, 500, 'labels name features; italic annotations explain', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  // steps
  const st = ['Draw a frame the same shape as the photograph', 'Add the horizon and main lines: skyline, slopes, river, roads', 'Add only the features relevant to the question', 'Label each feature', 'Annotate to explain, if asked', 'Add a title, the place and the direction of view'];
  let yy = 110;
  st.forEach((s_, i) => {
    const sl = wrap(s_, 230, 16);
    const hh = sl.length * LH(16) + 22;
    b += rect(590, yy, 280, hh, i === 5 ? C.cream : C.panel, i === 5 ? C.olive : C.tealDark, 10, 2);
    b += badge(612, yy + hh / 2, 13, String(i + 1), i === 5 ? C.mustard : C.cream);
    b += lines(634, yy + (hh - sl.length * LH(16)) / 2 + 15, sl, { size: 16 });
    yy += hh + 8;
  });
  const n = note(30, Math.max(yy, 520) + 14, 840, 'A few clean lines with good annotations beat a detailed drawing with no labels.', { size: 17 });
  fig('04-field-sketch', 'Drawing a field sketch', b + n.s, Math.max(yy, 520) + 14 + n.h + 28,
    'A field sketch of the worked-example river valley: a bare rounded hilltop, steep wooded valley sides, a narrow V-shaped valley and a narrow fast river with large boulders, annotated as carrying a heavy load in flood. Beside it, six steps from drawing the frame to adding a title and direction of view.',
    'Simple outlines, clear labels and a title with direction of view.',
    '## Drawing a field sketch from a photograph');
}

// 05 Field sketch vs sketch map
{
  let b = '';
  b += panel(30, 110, 410, 420);
  b += tx(235, 146, 'Field sketch', { size: 21, weight: 700, anchor: 'middle' });
  b += tx(235, 172, 'a view from one point, looking across', { size: 16, anchor: 'middle', fill: C.muted });
  b += valley(60, 196, 350, 220, { sketch: true }) + `<rect x="60" y="196" width="350" height="220" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += lines(54, 450, ['• title, place and direction of view', '• labels and annotations'], { size: 16 }, 24);
  b += panel(460, 110, 410, 420);
  b += tx(665, 146, 'Sketch map', { size: 21, weight: 700, anchor: 'middle' });
  b += tx(665, 172, 'a layout seen from above', { size: 16, anchor: 'middle', fill: C.muted });
  const mx = 490, my = 196, mw = 350, mh = 220;
  b += rect(mx, my, mw, mh, '#ffffff', C.ink, 2, 2.5);
  b += path(`M${mx + 20},${my + 200} Q${mx + 120},${my + 150} ${mx + 180},${my + 100} Q${mx + 240},${my + 50} ${mx + 330},${my + 30}`, { stroke: C.blue, w: 5 });
  b += path(`M${mx + 40},${my + 30} L${mx + 300},${my + 190}`, { stroke: C.rust, w: 2.5, extra: 'stroke-dasharray="8 6"' });
  [0.15, 0.4, 0.65, 0.9].forEach((t_, k) => { const px = mx + 40 + 260 * t_, py = my + 30 + 160 * t_; b += `<circle cx="${px}" cy="${py}" r="9" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` + tx(px, py + 5, String(k + 1), { size: 12, weight: 700, anchor: 'middle' }); });
  b += `<circle cx="${mx + 318}" cy="${my + 182}" r="18" fill="#ffffff" stroke="${C.ink}" stroke-width="1.5"/>` + arrow(mx + 318, my + 192, mx + 318, my + 168, { w: 2.5 }) + tx(mx + 318, my + 160, 'N', { size: 15, weight: 700, anchor: 'middle' });
  b += line(mx + 20, my + mh - 14, mx + 100, my + mh - 14, { w: 2.5 }) + tx(mx + 60, my + mh - 20, 'approx. scale', { size: 15, anchor: 'middle' });
  b += lines(484, 450, ['• title, north arrow, approximate scale', '• key if symbols are used', '• only what is relevant, e.g. transect', '   and sampling sites'], { size: 16 }, 22);
  fig('05-sketch-vs-map', 'Field sketch or sketch map?', b, 558,
    'A field sketch shows a view from one point looking across the land, with a title, direction of view, labels and annotations. A sketch map shows a layout from above, here a river, a transect and four numbered sampling sites, with a north arrow, an approximate scale and a key if symbols are used.',
    'A field sketch looks across; a sketch map looks down.',
    '## Sketch maps');
}

// 06 Label vs annotation
{
  let b = '';
  b += tx(240, 132, 'Label: names a feature', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += tx(650, 132, 'Annotation: explains or describes it', { size: 19, weight: 700, anchor: 'middle', fill: C.olive });
  const rows = [['Beach', 'Wide sandy beach, built up by constructive waves in a sheltered bay'], ['Housing', 'Terraced housing close to the old town centre, high density']];
  let y = 150;
  rows.forEach(([l, a]) => {
    b += rect(30, y, 400, 90, C.tealLight, C.tealDark, 12, 2.2) + tx(230, y + 54, `“${l}”`, { size: 22, weight: 700, anchor: 'middle' });
    b += arrow(434, y + 45, 456, y + 45, { w: 3 });
    const al = wrap(`“${a}”`, 360, 17);
    b += rect(460, y, 410, 90, C.cream, C.olive, 12, 2.2) + lines(480, y + 45 + 6 - (al.length - 1) * LH(17) / 2, al, { size: 17, italic: true });
    y += 106;
  });
  const n = note(30, y + 4, 840, 'A good annotation often includes a reason or a process, linking the skill to your knowledge of the topic.', { size: 17 });
  fig('06-label-annotation', 'Labels and annotations', b + n.s, y + 4 + n.h + 28,
    'Two examples. The label “Beach” becomes the annotation “Wide sandy beach, built up by constructive waves in a sheltered bay”; the label “Housing” becomes “Terraced housing close to the old town centre, high density”.',
    'A label names; an annotation explains, often with a process or reason.',
    '## Labels and annotations');
}
