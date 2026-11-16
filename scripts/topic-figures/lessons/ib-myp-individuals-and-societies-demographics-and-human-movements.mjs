import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-individuals-and-societies-demographics-and-human-movements';

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
  const g = gapDeg ?? Math.min(24, 180 / n);
  for (let i = 0; i < n; i++) {
    const a1 = pos[i][2] + (g * Math.PI) / 180, a2 = pos[(i + 1) % n][2] - (g * Math.PI) / 180 + (i === n - 1 ? 2 * Math.PI : 0);
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

// 01 Population as a system
{
  let b = '';
  b += `<ellipse cx="450" cy="300" rx="150" ry="95" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + tx(450, 295, 'Population', { size: 26, weight: 700, anchor: 'middle' }) + tx(450, 325, 'of a place', { size: 18, anchor: 'middle' });
  b += label(140, 140, 'INPUTS', { anchor: 'middle', size: 19 }) + label(760, 140, 'OUTPUTS', { anchor: 'middle', size: 19, fill: C.rust });
  b += box(40, 165, 200, 80, { title: 'Births', fill: '#eaf3f1', edge: C.tealDark, align: 'middle' }) + box(40, 355, 200, 80, { title: 'Immigrants', fill: '#eaf3f1', edge: C.tealDark, align: 'middle' });
  b += box(660, 165, 200, 80, { title: 'Deaths', fill: '#fbeee6', edge: C.rust, align: 'middle' }) + box(660, 355, 200, 80, { title: 'Emigrants', fill: '#fbeee6', edge: C.rust, align: 'middle' });
  b += arrow(244, 215, 318, 255, { color: C.tealDark, marker: 'ahT', w: 5 }) + arrow(244, 390, 318, 345, { color: C.tealDark, marker: 'ahT', w: 5 });
  b += arrow(582, 255, 656, 215, { color: C.rust, marker: 'ahR', w: 5 }) + arrow(582, 345, 656, 390, { color: C.rust, marker: 'ahR', w: 5 });
  b += tx(140, 306, 'natural increase:', { size: 15, fill: C.muted, anchor: 'middle', italic: true }) + tx(140, 326, 'births − deaths', { size: 15, fill: C.muted, anchor: 'middle', italic: true }) + tx(760, 306, 'net migration:', { size: 15, fill: C.muted, anchor: 'middle', italic: true }) + tx(760, 326, 'immigrants − emigrants', { size: 15, fill: C.muted, anchor: 'middle', italic: true });
  const eq = panel(40, 470, 820, 130, C.panel, C.ink);
  b += eq + tx(450, 512, 'Population change =', { size: 21, weight: 700, anchor: 'middle' });
  const parts = [['births', C.tealDark], ['− deaths', C.rust], ['+ immigrants', C.tealDark], ['− emigrants', C.rust]];
  parts.forEach(([p, c], i) => { b += tx(160 + i * 195, 562, p, { size: 22, weight: 700, fill: c, anchor: 'middle' }); });
  const n = note(40, 625, 820, 'Natural increase counts only births and deaths; total growth also includes migration.', { size: 17 });
  fig('01-population-system', 'A population as a system', b + n.s, 625 + n.h + 30,
    'Births and immigrants flow into a population as inputs; deaths and emigrants flow out as outputs. Population change equals births minus deaths plus immigrants minus emigrants.',
    'Two inputs and two outputs decide whether a population grows or shrinks.',
    '## Why this topic suits the MYP concepts');
}

// 02 Norland waterfall
{
  const X0 = 140, base = 640, sc = 400 / 186000; // px per person
  const steps = [['Births', 186000, C.tealDark], ['Deaths', -74400, C.rust], ['Immigrants', 52000, C.tealDark], ['Emigrants', -31000, C.rust]];
  let b = panel(30, 110, 840, 650) + line(80, base, 840, base, { w: 2.5 });
  let run = 0;
  steps.forEach(([n, v, c], i) => {
    const x = X0 + i * 140, y1 = base - run * sc, y2 = base - (run + v) * sc;
    b += `<rect x="${x}" y="${Math.min(y1, y2)}" width="96" height="${Math.abs(y2 - y1)}" fill="${c === C.rust ? '#e9c3ac' : C.teal}" stroke="${c}" stroke-width="2.5"/>`;
    b += tx(x + 48, Math.min(y1, y2) - 10, (v > 0 ? '+' : '−') + Math.abs(v).toLocaleString('en-GB'), { size: 16, weight: 700, fill: c, anchor: 'middle' });
    b += tx(x + 48, base + 28, n, { size: 16, anchor: 'middle', weight: 600 });
    run += v;
    if (i < steps.length - 1) b += line(x + 96, base - run * sc, x + 140, base - run * sc, { color: C.muted, w: 1.5, dash: '5 4' });
  });
  const xr = X0 + 4 * 140;
  b += `<rect x="${xr}" y="${base - run * sc}" width="110" height="${run * sc}" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += tx(xr + 55, base - run * sc - 10, '+132,600', { size: 17, weight: 700, anchor: 'middle' }) + tx(xr + 55, base + 28, 'Change', { size: 16, anchor: 'middle', weight: 700 });
  b += line(xr - 44, base - run * sc, xr, base - run * sc, { color: C.muted, w: 1.5, dash: '5 4' });
  // brackets
  b += tx(310, 708, 'natural increase: NIR = 0.9%', { size: 17, weight: 700, fill: C.tealDark, anchor: 'middle' });
  b += tx(310, 732, '(15.0 − 6.0) ÷ 10', { size: 16, fill: C.muted, anchor: 'middle' });
  b += tx(660, 708, 'total growth rate = 1.07%', { size: 17, weight: 700, fill: C.olive, anchor: 'middle' });
  b += tx(660, 732, '132,600 ÷ 12,400,000 × 100', { size: 16, fill: C.muted, anchor: 'middle' });
  b += tx(450, 150, 'Norland (fictional data), population 12,400,000, one year', { size: 17, weight: 700, fill: C.tealDark, anchor: 'middle' });
  const n = note(30, 780, 840, 'Growth (1.07%) is higher than NIR (0.9%) because Norland gains +21,000 by migration.', { size: 17 });
  fig('02-norland-population-change', 'Norland: from flows to population change', b + n.s, 780 + n.h + 30,
    'A waterfall chart for fictional Norland: 186,000 births add to the population, 74,400 deaths subtract, 52,000 immigrants add and 31,000 emigrants subtract, giving a change of +132,600. The natural increase rate is 0.9% but the total growth rate is 1.07%.',
    'Say which figure you mean: natural increase leaves out migration, total growth includes it.',
    '## Measuring a population');
}

// 03 Pyramid shapes by stage
{
  const pyr = (cx, y, h, widths) => {
    const n = widths.length, bh = h / n; let s = '';
    widths.forEach((w, i) => {
      const yy = y + h - (i + 1) * bh;
      s += `<rect x="${cx - w}" y="${yy}" width="${w}" height="${bh - 2}" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="1.5"/>`;
      s += `<rect x="${cx}" y="${yy}" width="${w}" height="${bh - 2}" fill="${C.cream}" stroke="${C.olive}" stroke-width="1.5"/>`;
    });
    return s + line(cx, y - 4, cx, y + h, { w: 2 });
  };
  const shapes = [
    ['Stages 1–2', 'Wide base, sides slope in sharply, narrow top', 'High birth rate, high death rate at all ages', [90, 76, 63, 52, 42, 33, 25, 18, 12, 7, 3]],
    ['Stage 3', 'Base starting to narrow, wider middle', 'Falling birth rate, more survive into middle age', [66, 68, 66, 62, 56, 49, 41, 32, 23, 14, 6]],
    ['Stage 4', 'Straight sides, roughly column-shaped', 'Low birth and death rates, many older people', [52, 54, 55, 55, 55, 54, 52, 48, 40, 28, 14]],
    ['Stage 5', 'Base narrower than the middle', 'Birth rate below replacement, ageing population', [36, 40, 45, 50, 55, 58, 58, 55, 47, 34, 18]],
  ];
  let b = '';
  shapes.forEach(([st, shape, means], i) => {
    const x = 30 + (i % 2) * 430, y = 110 + Math.floor(i / 2) * 390;
    b += panel(x, y, 410, 370) + tx(x + 205, y + 38, st, { size: 22, weight: 700, anchor: 'middle' });
    b += pyr(x + 205, y + 60, 180, shapes[i][3]);
    b += lines(x + 205, y + 275, wrap(shape, 370, 17), { size: 17, weight: 600, anchor: 'middle' });
    b += lines(x + 205, y + 324, wrap(means, 370, 16), { size: 16, fill: C.muted, anchor: 'middle' });
  });
  b += `<rect x="290" y="885" width="22" height="16" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="1.5"/>` + tx(320, 899, 'males', { size: 16 }) +
    `<rect x="420" y="885" width="22" height="16" fill="${C.cream}" stroke="${C.olive}" stroke-width="1.5"/>` + tx(450, 899, 'females', { size: 16 }) + tx(560, 899, 'age rises upwards', { size: 16, fill: C.muted });
  fig('03-pyramid-shapes', 'Four population pyramid shapes', b, 930,
    'Four schematic population pyramids. Stages 1 to 2: wide base and narrow top. Stage 3: the base starts to narrow and the middle widens. Stage 4: straight, column-like sides. Stage 5: the base is narrower than the middle, showing an ageing population.',
    'The width of the base against the middle and top tells you the stage.',
    '## Population pyramids');
}

// 04 Reading irregularities
{
  const cx = 300, y0 = 140, h = 520, n = 13, bh = h / n;
  const male = [60, 62, 64, 70, 150, 160, 150, 120, 66, 30, 54, 40, 22];
  const fem = [58, 60, 62, 68, 74, 72, 70, 66, 62, 30, 56, 46, 30];
  let b = panel(30, 110, 840, 650);
  male.forEach((w, i) => {
    const yy = y0 + h - (i + 1) * bh;
    b += `<rect x="${cx - w}" y="${yy}" width="${w}" height="${bh - 3}" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="1.5"/>`;
    b += `<rect x="${cx}" y="${yy}" width="${fem[i]}" height="${bh - 3}" fill="${C.cream}" stroke="${C.olive}" stroke-width="1.5"/>`;
  });
  b += line(cx, y0 - 6, cx, y0 + h, { w: 2 }) + tx(cx - 90, y0 + h + 30, 'males', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 700 }) + tx(cx + 60, y0 + h + 30, 'females', { size: 16, anchor: 'middle', fill: C.olive, weight: 700 });
  const yOf = (i) => y0 + h - (i + 0.5) * bh;
  const ann = (yy, x1, head, body) => line(x1, yy, 520, yy, { w: 2, color: C.ink, dash: '4 4' }) + box(520, yy - 36, 330, 72, { title: head, body, tsize: 17, bsize: 15, pad: 10, valign: 'middle' });
  b += ann(yOf(9), cx + 36, 'Notch', 'war, famine, epidemic or very low births');
  b += ann(yOf(5.5), cx + 80, 'Male surplus aged ~20–45', 'labour migration, e.g. some Gulf states');
  b += ann(yOf(12), cx + 34, 'More women in oldest bands', 'normal: women on average live longer');
  b += tx(450, 735, 'Describe in order: overall shape → base → top → irregularities (name age bands, quote figures)', { size: 16, anchor: 'middle', weight: 600, fill: C.tealDark });
  fig('04-pyramid-irregularities', 'Reading irregularities in a pyramid', b, 790,
    'A schematic pyramid with labelled irregularities: a short notch in both sexes from war, famine, epidemic or very low births; many more males than females in the working ages from labour migration, as in some Gulf states; and more women than men in the oldest bands.',
    'Notches, bulges and sex imbalances each point to a cause worth naming.',
    '## Population pyramids');
}

// 05 DTM graph
{
  const L = 90, R = 850, T = 160, B = 520, sw = (R - L) / 5;
  let b = panel(30, 110, 840, 560);
  for (let i = 0; i < 5; i++) {
    const x = L + i * sw;
    b += `<rect x="${x}" y="${T}" width="${sw}" height="${B - T}" fill="${i % 2 ? '#ffffff' : '#f3f7f6'}"/>`;
    if (i) b += line(x, T, x, B, { color: C.panelEdge, w: 1.5, dash: '6 5' });
    b += tx(x + sw / 2, T - 14, `Stage ${i + 1}`, { size: 17, weight: 700, anchor: 'middle' });
  }
  b += line(L, B, R, B, { w: 2.5 }) + line(L, T, L, B, { w: 2.5 });
  b += `<text x="60" y="${(T + B) / 2}" font-size="16" fill="${C.muted}" text-anchor="middle" transform="rotate(-90 60 ${(T + B) / 2})">rate / population (no scale)</text>`;
  const X = (s) => L + s * sw;
  // population (area)
  b += `<path d="M${X(0)},${B - 30} L${X(1)},${B - 40} C${X(1.6)},${B - 90} ${X(2)},${B - 200} ${X(2.6)},${B - 250} C${X(3.1)},${B - 285} ${X(3.5)},${B - 300} ${X(4)},${B - 300} C${X(4.4)},${B - 300} ${X(4.7)},${B - 290} ${X(5)},${B - 278} L${X(5)},${B} L${X(0)},${B} Z" fill="${C.cream}" stroke="${C.olive}" stroke-width="3" opacity="0.9"/>`;
  // birth rate
  b += path(`M${X(0)},${T + 40} L${X(2)},${T + 40} C${X(2.4)},${T + 50} ${X(2.7)},${T + 170} ${X(3)},${T + 230} L${X(4)},${T + 245} C${X(4.3)},${T + 260} ${X(4.6)},${T + 285} ${X(5)},${T + 290}`, { stroke: C.tealDark, w: 5 });
  // death rate
  b += path(`M${X(0)},${T + 50} q${sw * 0.25},-22 ${sw * 0.5},0 q${sw * 0.25},22 ${sw * 0.5},0 C${X(1.3)},${T + 70} ${X(1.6)},${T + 190} ${X(2)},${T + 215} C${X(2.5)},${T + 240} ${X(3)},${T + 248} ${X(3.5)},${T + 250} L${X(4)},${T + 250} C${X(4.4)},${T + 250} ${X(4.7)},${T + 244} ${X(5)},${T + 238}`, { stroke: C.rust, w: 5 });
  const leg = (x, col, s, dash) => line(x, 568, x + 40, 568, { color: col, w: 5 }) + tx(x + 50, 574, s, { size: 17, weight: 600 });
  b += leg(110, C.tealDark, 'Birth rate') + leg(310, C.rust, 'Death rate') + `<rect x="510" y="558" width="40" height="20" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + tx(560, 574, 'Total population', { size: 17, weight: 600 });
  const nm = ['High stationary', 'Early expanding', 'Late expanding', 'Low stationary', 'Declining'];
  nm.forEach((s, i) => { b += lines(X(i + 0.5), 612, wrap(s, sw - 10, 15), { size: 15, anchor: 'middle', fill: C.muted }, 19); });
  b += tx(X(1.5), T + 120, 'natural increase', { size: 15, anchor: 'middle', fill: C.ink, italic: true });
  fig('05-dtm-graph', 'The demographic transition model', b, 700,
    'A schematic graph of five stages. Birth and death rates are both high in stage 1; the death rate falls fast in stage 2; the birth rate falls in stage 3; both are low in stage 4; in stage 5 the birth rate drops below the death rate. Total population is low, grows rapidly in stages 2 and 3, levels off high in stage 4 and slowly falls in stage 5.',
    'The gap between birth and death rates drives growth; it opens in stage 2 and closes by stage 4.',
    '## The demographic transition model');
}

// 06 Lee's model
{
  let b = '';
  const place = (x, title, signs) => {
    let s = panel(x, 150, 250, 300) + tx(x + 125, 188, title, { size: 22, weight: 700, anchor: 'middle' });
    signs.forEach((g, i) => { const gx = x + 45 + (i % 4) * 54, gy = 230 + Math.floor(i / 4) * 52; s += `<circle cx="${gx}" cy="${gy}" r="19" fill="${g === '+' ? C.tealLight : g === '−' ? '#f3d9c9' : '#eef0f0'}" stroke="${g === '+' ? C.tealDark : g === '−' ? C.rust : C.panelEdge}" stroke-width="2"/>` + tx(gx, gy + 7, g, { size: 21, weight: 700, anchor: 'middle', fill: g === '+' ? C.tealDark : g === '−' ? C.rust : C.muted }); });
    return s;
  };
  b += place(30, 'Origin', ['+', '−', '−', '0', '−', '+', '0', '−', '−', '+', '0', '−']);
  b += place(620, 'Destination', ['+', '+', '0', '−', '+', '0', '+', '+', '−', '0', '+', '0']);
  b += tx(155, 420, 'push factors (−)', { size: 16, anchor: 'middle', fill: C.rust, weight: 600 }) + tx(745, 420, 'pull factors (+)', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 });
  // obstacles
  [[350, 'Distance'], [430, 'Cost'], [510, 'Borders']].forEach(([x, s]) => { b += `<rect x="${x - 30}" y="200" width="60" height="200" rx="6" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5"/>` + `<text x="${x + 6}" y="300" font-size="16" font-weight="700" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 ${x + 6} 300)">${s}</text>`; });
  b += parrow(`M285,300 C330,170 560,170 612,300`, { w: 5 });
  b += tx(450, 170, 'Intervening obstacles', { size: 19, weight: 700, anchor: 'middle' });
  b += tx(430, 425, 'also: visas, language,', { size: 15, anchor: 'middle', fill: C.muted }) + tx(430, 445, 'a sea or mountain crossing', { size: 15, anchor: 'middle', fill: C.muted });
  b += box(30, 475, 840, 110, { title: 'Personal factors', body: 'age, family ties, skills and attitude to risk: the same push factor affects different people differently', fill: C.cream, edge: C.olive, align: 'middle' });
  const n = note(30, 605, 840, 'So the poorest are not always the ones who migrate: they may not afford the journey.', { size: 17, fill: '#eaf3f1', edge: C.tealDark });
  b += tx(450, 140, '+ attracts   − repels   0 neutral', { size: 16, anchor: 'middle', fill: C.muted });
  fig('06-lee-model', "Lee's model of migration", b + n.s, 605 + n.h + 30,
    "Origin and destination each hold positive, negative and neutral factors. Between them stand intervening obstacles such as distance, cost and border controls. Personal factors, including age, family ties, skills and attitude to risk, shape how each person responds.",
    'Push and pull are not enough: obstacles and personal factors decide who actually moves.',
    '## Why people move');
}

// 07 Exact migrant terms
{
  const cols = [{ w: 230, head: 'Term' }, { w: 200, head: 'Crossed a national border?' }, { w: 410, head: 'Defining feature' }];
  const tb = table(30, 110, cols, [
    ['Refugee', 'Yes', 'Fled their country because of a well-founded fear of persecution (1951 UN Refugee Convention)'],
    ['Asylum seeker', 'Yes', 'Has asked for protection as a refugee but has not yet had a decision'],
    ['Internally displaced person', 'No', 'Forced from home but still inside their own country'],
    ['Economic migrant', 'Not part of the definition', 'Moves mainly for work or higher income'],
  ], { size: 17 });
  const n = note(30, 110 + tb.h + 24, 840, 'Never call every migrant a “refugee”: use the exact term.', { size: 18 });
  fig('07-migrant-terms', 'Four terms to use exactly', tb.s + n.s, 110 + tb.h + 24 + n.h + 30,
    'A table of four terms. A refugee has crossed a border fleeing a well-founded fear of persecution; an asylum seeker has asked for refugee protection but awaits a decision; an internally displaced person was forced from home but is still in their own country; an economic migrant moves mainly for work or income.',
    'Whether a border was crossed, and why, separates the four terms.',
    '## Types of migration');
}
