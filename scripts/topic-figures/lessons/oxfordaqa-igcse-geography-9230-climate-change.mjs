import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-geography-9230-climate-change';

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


// 01 Quaternary glacial / interglacial swings (schematic)
{
  let b = '';
  b += panel(30, 110, 840, 330);
  const X0 = 110, X1 = 840, Y0 = 170, Y1 = 360;
  b += line(X0, Y1 + 10, X1, Y1 + 10, { w: 2.5 }) + line(X0, Y0 - 10, X0, Y1 + 10, { w: 2.5 });
  b += tx(70, Y0 + 20, 'warmer', { size: 16, anchor: 'middle', fill: C.rust, weight: 700 }) + tx(70, Y1 - 4, 'colder', { size: 16, anchor: 'middle', fill: C.blue, weight: 700 });
  // band labels
  b += `<rect x="${X0 + 2}" y="${Y0 - 8}" width="${X1 - X0 - 2}" height="70" fill="${C.cream}" opacity="0.6"/>` + `<rect x="${X0 + 2}" y="${Y1 - 70}" width="${X1 - X0 - 2}" height="78" fill="${C.tealLight}" opacity="0.7"/>`;
  b += tx(X0 + 14, Y0 + 14, 'interglacial', { size: 16, weight: 700, fill: C.olive }) + tx(X0 + 14, Y1, 'glacial', { size: 16, weight: 700, fill: C.tealDark });
  // wiggle line
  let d = '';
  const N = 300;
  for (let i = 0; i <= N; i++) {
    const x = X0 + ((X1 - X0) * i) / N;
    const tt = i / N;
    const amp = 40 + 50 * tt;
    const y = 265 + amp * Math.sin(tt * 2 * Math.PI * 14 + 4.5) * (0.75 + 0.25 * Math.sin(tt * 37));
    d += (i ? 'L' : 'M') + x.toFixed(1) + ',' + Math.max(Y0, Math.min(Y1, y)).toFixed(1);
  }
  b += path(d, { w: 3, stroke: C.ink });
  b += line(X1 - 8, Y0 - 6, X1 - 8, Y1 + 10, { color: C.rust, w: 2.5, dash: '6 5' });
  b += tx(X0, Y1 + 38, 'about 2.6 million years ago', { size: 17, weight: 600 }) + tx(X1, Y1 + 38, 'today', { size: 17, weight: 600, anchor: 'end' });
  b += tx(450, Y1 + 62, 'Quaternary period (schematic, not to scale)', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  const n = note(30, 466, 840, 'We live in an interglacial that began about 11,700 years ago, after the end of the last glacial period.', { size: 18 });
  fig('01-quaternary-swings', 'The Quaternary: glacials and interglacials', b + n.s, 466 + n.h + 28,
    'A schematic curve of climate across the Quaternary, from about 2.6 million years ago to today, swinging repeatedly between cold glacial periods and warmer interglacials. The present interglacial began about 11,700 years ago.',
    'The Quaternary is a story of repeated swings between glacial and interglacial periods.',
    '## The Quaternary period');
}

// 02 Evidence by timescale (log axis)
{
  let b = '';
  const X0 = 300, X1 = 860; // log10 years 1..7
  const lx = (yrs) => X0 + ((Math.log10(yrs) - 1) / 6) * (X1 - X0);
  const rows = [
    ['Ocean sediment cores', 0, 7e6, 'the whole Quaternary and beyond', C.teal],
    ['Ice cores', 30, 8e5, 'Antarctic cores: about 800,000 years', C.tealLight],
    ['Pollen analysis', 1000, 15000, 'thousands of years', C.cream],
    ['Tree rings', 100, 5000, 'hundreds to several thousand years', C.cream],
    ['Historical records', 100, 700, 'hundreds of years', C.sand],
    ['Instrumental records', 10, 170, 'about 170 years', C.mustard],
    ['Satellite observations', 10, 55, 'since the 1970s', C.mustard],
  ];
  let y = 130;
  rows.forEach(([h, a, z, lab, f]) => {
    b += tx(280, y + 27, h, { size: 18, weight: 700, anchor: 'end' });
    const xa = X0, w = lx(z) - xa;
    b += rect(xa, y + 6, w, 32, f, C.ink, 6, 2);
    const inside = w > 300;
    b += tx(inside ? xa + w - 12 : xa + w + 10, y + 28, lab, { size: 15, anchor: inside ? 'end' : 'start', weight: 600 });
    y += 52;
  });
  b += line(lx(2.6e6), 118, lx(2.6e6), y + 6, { color: C.rust, w: 2, dash: '6 5' }) + tx(lx(2.6e6) - 6, 122, 'Quaternary begins', { size: 15, anchor: 'end', fill: C.rust, weight: 700 });
  b += line(X0, y + 6, X1, y + 6, { w: 2.5 });
  [[10, '10'], [100, '100'], [1000, '1,000'], [1e4, '10,000'], [1e5, '100,000'], [1e6, '1 million'], [1e7, '']].forEach(([v, l]) => {
    b += line(lx(v), y + 6, lx(v), y + 14, { w: 2 }) + (l ? tx(lx(v), y + 34, l, { size: 15, anchor: 'middle', fill: C.muted }) : '');
  });
  b += tx(X0, y + 62, '← present', { size: 16, fill: C.muted }) + tx(X1, y + 62, 'years before present (log scale) →', { size: 16, fill: C.muted, anchor: 'end' });
  const n = note(30, y + 84, 840, 'Older evidence is indirect (“proxies”); instrumental records are precise but short. Confidence comes from different types pointing the same way.', { size: 16, weight: 600 });
  fig('02-evidence-timescales', 'How far back each type of evidence reaches', b + n.s, y + 84 + n.h + 28,
    'Bars on a logarithmic time scale show the reach of each type of evidence: ocean sediment cores cover the whole Quaternary and beyond, Antarctic ice cores about 800,000 years, pollen thousands of years, tree rings hundreds to several thousand, historical records hundreds, instrumental records about 170 years and satellites since the 1970s.',
    'Each type of evidence covers a different span; together they reach back through the Quaternary.',
    '## Evidence for climate change');
}

// 03 Ice core + recent evidence
{
  let b = '';
  // ice core sketch
  b += panel(30, 110, 400, 380);
  b += tx(230, 144, 'How an ice core works', { size: 19, weight: 700, anchor: 'middle' });
  b += '<g transform="translate(-24,0)">';
  b += rect(150, 165, 110, 300, '#eef6f8', C.ink, 10, 2.5);
  for (let k = 1; k < 8; k++) b += line(150, 165 + k * 37.5, 260, 165 + k * 37.5, { color: C.panelEdge, w: 1.5 });
  [[175, 190], [215, 200], [190, 245], [230, 270], [170, 320], [220, 345], [195, 395], [235, 420], [175, 445]].forEach(([x, yy]) => { b += `<circle cx="${x}" cy="${yy}" r="5" fill="#ffffff" stroke="${C.blue}" stroke-width="2"/>`; });
  b += tx(205, 184, 'snow', { size: 15, anchor: 'middle', fill: C.muted });
  b += parrow('M120,175 L120,450', { w: 3 }) + tx(108, 320, 'older', { size: 15, anchor: 'end', fill: C.muted });
  b += line(238, 270, 282, 250, { w: 2 }) + lines(288, 238, ['air bubbles:', 'CO₂ measured'], { size: 16, weight: 600 }, 20);
  b += line(240, 380, 282, 360, { w: 2 }) + lines(288, 350, ['ice chemistry:', 'temperature when', 'the snow fell'], { size: 16, weight: 600 }, 20);
  b += '</g>';
  // recent evidence
  b += panel(450, 110, 420, 380);
  b += tx(660, 144, 'What the recent evidence shows', { size: 19, weight: 700, anchor: 'middle' });
  // CO2 bars
  const sc = 0.62;
  b += tx(472, 180, 'Carbon dioxide (parts per million)', { size: 16, weight: 700, fill: C.tealDark });
  b += rect(472, 192, 280 * sc, 30, C.tealLight, C.ink, 4, 2) + tx(472 + 280 * sc + 10, 213, 'about 280 pre-industrial', { size: 15 });
  b += rect(472, 230, 420 * sc, 30, C.rust, C.ink, 4, 2) + tx(472 + 420 * sc + 10, 251, '> 420 today', { size: 15, weight: 700 });
  b += tx(472, 300, 'Global surface temperature', { size: 16, weight: 700, fill: C.tealDark });
  b += tx(472, 328, 'about 1.1 °C higher in 2011–2020', { size: 17, weight: 700 }) + tx(472, 350, 'than in 1850–1900 (IPCC)', { size: 16 });
  b += tx(472, 392, '• Arctic late-summer sea ice shrinking', { size: 16 }) + tx(472, 420, '• global sea level rising', { size: 16 }) + tx(472, 448, '• glaciers photographed retreating', { size: 16 });
  fig('03-ice-cores-recent-evidence', 'Reading the evidence', b, 518,
    'Left: an ice core with older layers deeper down; air bubbles record carbon dioxide and the ice chemistry records the temperature when the snow fell. Right: carbon dioxide has risen from about 280 parts per million before the industrial era to more than 420 today, and 2011–2020 was about 1.1 °C warmer than 1850–1900.',
    'Ice cores reach back hundreds of thousands of years; instruments show the recent rise.',
    '## Evidence for climate change');
}

// 04 Natural causes
{
  let b = '';
  const W = 266, gap = 21;
  const cx = (i) => 30 + i * (W + gap);
  // orbital
  b += panel(cx(0), 110, W, 390);
  b += tx(cx(0) + W / 2, 144, 'Orbital changes', { size: 21, weight: 700, anchor: 'middle' });
  const ox = cx(0) + W / 2;
  b += `<ellipse cx="${ox}" cy="205" rx="95" ry="45" fill="none" stroke="${C.tealDark}" stroke-width="2.5"/>` + `<circle cx="${ox}" cy="205" r="44" fill="none" stroke="${C.muted}" stroke-width="2" stroke-dasharray="5 5"/>`;
  b += `<circle cx="${ox - 20}" cy="205" r="11" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` + `<circle cx="${ox + 95}" cy="205" r="7" fill="${C.blue}" stroke="${C.ink}" stroke-width="1.5"/>`;
  const orb = [['Shape (circular ↔ oval)', 'about 100,000 years'], ['Tilt of the axis', 'about 41,000 years'], ['Wobble of the axis', 'about 26,000 years']];
  orb.forEach(([h, t_], i) => { b += tx(cx(0) + 18, 288 + i * 52, h, { size: 16, weight: 700 }) + tx(cx(0) + 18, 310 + i * 52, t_, { size: 16, fill: C.tealDark }); });
  b += lines(cx(0) + 18, 456, ['Linked to the timing of glacials', 'and interglacials'], { size: 15, fill: C.muted }, 20);
  // volcanic
  b += panel(cx(1), 110, W, 390);
  b += tx(cx(1) + W / 2, 144, 'Volcanic activity', { size: 21, weight: 700, anchor: 'middle' });
  const vx = cx(1) + W / 2;
  b += '<g transform="translate(0,26)">';
  b += path(`M${vx - 90},270 L${vx - 22},190 L${vx + 22},190 L${vx + 90},270 Z`, { fill: C.rock, stroke: C.ink, w: 2.5 });
  b += `<path d="M${vx - 10},188 q-30,-18 -10,-34 q10,-20 30,-6 q24,-6 22,18 q4,16 -14,22 z" fill="#c9cfd6" stroke="${C.ink}" stroke-width="2"/>`;
  [[-60, 175], [-75, 200], [60, 170], [80, 195], [0, 160]].forEach(([dx, yy]) => { b += `<circle cx="${vx + dx}" cy="${yy}" r="3.5" fill="${C.olive}"/>`; });
  b += '</g>';
  b += lines(cx(1) + 18, 324, ['Sulphur dioxide droplets', 'reflect sunlight → cooling'], { size: 16, weight: 700 }, 22);
  b += lines(cx(1) + 18, 380, ['Pinatubo, 1991: about 0.5 °C', 'cooler for a year or two'], { size: 16 }, 22);
  b += tx(cx(1) + 18, 444, 'short-lived: droplets fall out', { size: 16, fill: C.tealDark });
  // solar
  b += panel(cx(2), 110, W, 390);
  b += tx(cx(2) + W / 2, 144, 'Solar output', { size: 21, weight: 700, anchor: 'middle' });
  const sx = cx(2) + W / 2;
  for (let k = 0; k < 12; k++) { const a = (k * Math.PI) / 6; b += line(sx + 48 * Math.cos(a), 215 + 48 * Math.sin(a), sx + 64 * Math.cos(a), 215 + 64 * Math.sin(a), { color: C.olive, w: 3 }); }
  b += `<circle cx="${sx}" cy="215" r="40" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/><circle cx="${sx - 12}" cy="206" r="6" fill="${C.olive}"/><circle cx="${sx + 14}" cy="224" r="4.5" fill="${C.olive}"/>`;
  b += lines(cx(2) + 18, 316, ['Varies slightly, partly in a', 'cycle of about 11 years', 'linked to sunspots'], { size: 16, weight: 700 }, 22);
  b += lines(cx(2) + 18, 400, ['Maunder Minimum (about', '1645–1715) coincided with', 'part of the Little Ice Age'], { size: 16 }, 22);
  const n = note(30, 522, 840, 'Orbital cycles work over thousands of years, so they cannot explain change over decades.', { size: 17 });
  fig('04-natural-causes', 'Natural causes of climate change', b + n.s, 522 + n.h + 28,
    'Three natural causes. Orbital changes: the orbit’s shape varies over about 100,000 years, the tilt over about 41,000 and the wobble over about 26,000. Volcanic activity: sulphur dioxide droplets reflect sunlight, as when Pinatubo in 1991 cooled the Earth by about 0.5 °C for a year or two. Solar output: an 11-year sunspot cycle, and the Maunder Minimum during the Little Ice Age.',
    'Natural causes act either very slowly or only briefly.',
    '## Natural causes');
}

// 05 Human causes and enhanced greenhouse effect
{
  let b = '';
  const src = [
    ['Fossil fuels', 'coal, oil and gas for electricity, transport and industry', 'carbon dioxide', 'the largest single human contribution'],
    ['Agriculture', 'livestock digestion; flooded rice fields; nitrogen fertilisers', 'methane, nitrous oxide', 'powerful greenhouse gases'],
    ['Deforestation', 'clearing forest, especially by burning', 'carbon dioxide', 'and a carbon store is lost'],
  ];
  let y = 115;
  src.forEach(([h, d, g, n2], i) => {
    const dl = wrap(d, 300, 16);
    const hh = 110;
    b += box(30, y, 330, hh, { title: h, body: d, tsize: 20, bsize: 16, edge: C.tealDark, bfill: C.ink });
    b += arrow(364, y + hh / 2, 392, y + hh / 2, { w: 3 });
    b += box(396, y + 4, 240, hh - 8, { title: g, body: n2, tsize: 17, bsize: 15, align: 'middle', fill: C.cream, edge: C.olive, bfill: C.ink });
    b += parrow(`M640,${y + hh / 2} C668,${y + hh / 2} 660,${115 + 186} 684,${115 + 186}`, { w: 3 });
    y += hh + 14;
  });
  b += box(688, 196, 182, 210, { title: 'Enhanced greenhouse effect', body: 'more heat trapped that would otherwise escape to space', tsize: 18, bsize: 15, align: 'middle', fill: C.rust, edge: C.ink, tfill: '#ffffff', bfill: '#ffffff' });
  y += 10;
  b += tx(30, y + 8, 'Why recent warming is linked to human causes', { size: 18, weight: 700, fill: C.tealDark });
  const why = [['Orbital changes', 'far too slow for a century'], ['Volcanic and solar', 'too small and short-term'], ['Greenhouse gases', 'rise matches warming since c. 1850']];
  why.forEach(([h, d], i) => {
    const x = 30 + i * 287, hi = i === 2;
    b += rect(x, y + 24, 266, 78, hi ? C.cream : C.panel, hi ? C.olive : C.panelEdge, 12, 2.2) + tx(x + 133, y + 56, h, { size: 18, weight: 700, anchor: 'middle' }) + tx(x + 133, y + 82, d, { size: 15, anchor: 'middle' });
  });
  fig('05-human-causes', 'Human causes: the enhanced greenhouse effect', b, y + 102 + 28,
    'Burning fossil fuels releases carbon dioxide; agriculture releases methane from livestock and rice fields and nitrous oxide from fertilisers; deforestation releases carbon dioxide and removes a carbon store. Together they strengthen the greenhouse effect. Orbital change is too slow and volcanic and solar change too small to explain warming since 1850.',
    'Activity, gas, trapped heat: the chain that turns a list into an explanation.',
    '## Human causes');
}

// 06 Mitigation vs adaptation
{
  let b = '';
  const chain = [['Human activities', C.panel], ['Greenhouse gas emissions', C.tealLight], ['Climate change', C.teal], ['Effects on people and environment', C.cream]];
  const bw = 186, gap = 32;
  chain.forEach(([h, f], i) => {
    const x = 30 + i * (bw + gap);
    b += box(x, 116, bw, 86, { title: h, tsize: 17, align: 'middle', fill: f, edge: C.ink });
    if (i < 3) b += arrow(x + bw + 3, 159, x + bw + gap - 4, 159, { w: 3 });
  });
  b += path(`M30,212 L30,222 L${30 + 2 * bw + gap},222 L${30 + 2 * bw + gap},212`, { w: 3, stroke: C.tealDark });
  b += path(`M${30 + 3 * (bw + gap)},212 L${30 + 3 * (bw + gap)},222 L870,222 L870,212`, { w: 3, stroke: C.olive });
  const mit = [
    ['Alternative energy', 'wind, solar, hydroelectric', 'weather-dependent; costly infrastructure'],
    ['Carbon capture', 'store CO₂ deep underground', 'costly; not yet at large scale'],
    ['Planting trees', 'absorb CO₂ as they grow', 'takes decades; needs land; carbon returns if it burns'],
    ['International agreements', 'Kyoto 1997; Paris 2015', 'depend on countries keeping promises'],
  ];
  const ada = [
    ['Agricultural systems', 'drought-resistant crops, new planting dates, efficient irrigation'],
    ['Managing water supply', 'reservoirs, transfers, desalination, rainwater, fixing leaks'],
    ['Rising sea levels', 'sea walls, stilts, mangroves, moving away from the coast'],
  ];
  b += rect(30, 236, 470, 52, C.tealDark, C.tealDark, 12) + tx(265, 270, 'Mitigation: reduce the causes', { size: 20, weight: 700, anchor: 'middle', fill: '#ffffff' });
  b += rect(520, 236, 350, 52, C.olive, C.olive, 12) + tx(695, 270, 'Adaptation: respond', { size: 20, weight: 700, anchor: 'middle', fill: '#ffffff' });
  let y = 298;
  mit.forEach(([h, d, l]) => {
    b += rect(30, y, 470, 88, C.panel, C.tealDark, 10, 2) + tx(48, y + 28, h, { size: 18, weight: 700 }) + tx(48, y + 52, d, { size: 16 }) + tx(48, y + 76, '– ' + l, { size: 15, fill: C.rust });
    y += 96;
  });
  let y2 = 298;
  ada.forEach(([h, d]) => {
    const dl = wrap(d, 310, 16);
    b += rect(520, y2, 350, 110, C.panel, C.olive, 10, 2) + tx(538, y2 + 30, h, { size: 18, weight: 700 }) + lines(538, y2 + 58, dl, { size: 16 });
    y2 += 118;
  });
  fig('06-mitigation-adaptation', 'Mitigation and adaptation', b, Math.max(y, y2) + 20,
    'A chain from human activities to emissions, climate change and effects. Mitigation acts on the causes through alternative energy, carbon capture, planting trees and international agreements such as Kyoto and Paris, each with a limitation. Adaptation responds to the effects through changed farming, water management and protection from rising seas.',
    'Mitigation cuts the causes; adaptation copes with the effects.',
    '## Managing climate change: mitigation');
}

// 07 Reducing risk from rising sea levels (cross-section)
{
  let b = '';
  const SL = 330, SL2 = 300;
  b += panel(30, 110, 840, 360);
  // sea
  b += `<rect x="32" y="${SL}" width="250" height="120" fill="${C.teal}"/>`;
  b += line(32, SL2, 282, SL2, { color: C.blue, w: 2.5, dash: '9 6' }) + tx(40, SL2 - 8, 'higher sea level', { size: 15, fill: C.blue, weight: 700 });
  b += line(32, SL, 282, SL, { color: C.tealDark, w: 2.5 }) + tx(40, SL + 22, 'present sea level', { size: 15, fill: C.tealDark, weight: 700 });
  // land profile
  b += path(`M282,450 L282,${SL + 10} L330,${SL} L420,${SL - 6} L520,${SL - 10} L640,${SL - 40} L760,${SL - 90} L868,${SL - 110} L868,450 Z`, { fill: C.sand, stroke: C.ink, w: 2.5 });
  // mangroves
  for (let k = 0; k < 3; k++) { const x = 200 + k * 26; b += path(`M${x},${SL + 30} L${x},${SL - 34} M${x - 10},${SL + 20} L${x},${SL - 6} L${x + 10},${SL + 20}`, { stroke: C.grass, w: 3 }) + `<circle cx="${x}" cy="${SL - 42}" r="15" fill="${C.grass}" stroke="${C.ink}" stroke-width="1.5"/>`; }
  // sea wall
  b += rect(290, SL - 70, 22, 80, C.rockDark, C.ink, 2, 2.5);
  // stilt house
  const hx = 430;
  b += line(hx + 6, SL - 6, hx + 6, SL - 56, { w: 3 }) + line(hx + 54, SL - 8, hx + 54, SL - 56, { w: 3 });
  b += rect(hx - 4, SL - 92, 68, 36, C.panel, C.ink, 2, 2.5) + path(`M${hx - 10},${SL - 92} L${hx + 30},${SL - 118} L${hx + 70},${SL - 92} Z`, { fill: C.rust, stroke: C.ink, w: 2.5 });
  // retreat
  const rx = 760;
  b += rect(rx, SL - 130, 50, 36, C.panel, C.ink, 2, 2.5) + path(`M${rx - 6},${SL - 130} L${rx + 25},${SL - 152} L${rx + 56},${SL - 130} Z`, { fill: C.rust, stroke: C.ink, w: 2.5 });
  b += parrow(`M560,${SL - 30} C620,${SL - 90} 680,${SL - 120} 744,${SL - 118}`, { w: 3, dash: '8 6', color: C.olive, marker: 'ahO' });
  // labels
  const lab = (x, y, l, tx_, ty_) => line(x, y, tx_, ty_, { w: 1.8, color: C.muted }) + lines(tx_, ty_ - 6 - (l.length - 1) * 20, l, { size: 16, weight: 700, anchor: 'middle' }, 20);
  b += lab(226, SL - 58, ['Restore', 'mangroves'], 180, 190);
  b += lab(301, SL - 72, ['Sea walls and', 'flood barriers'], 320, 190);
  b += lab(hx + 30, SL - 120, ['Raise buildings', 'on stilts'], 470, 168);
  b += tx(600, SL - 150, 'Move people and', { size: 16, weight: 700, anchor: 'middle', fill: C.olive }) + tx(600, SL - 130, 'buildings inland', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  b += lines(150, 412, ['mangroves absorb', 'wave energy'], { size: 15, anchor: 'middle', fill: C.ink, weight: 600 }, 19);
  b += tx(856, 136, 'not to scale', { size: 15, anchor: 'end', fill: C.muted, italic: true });
  const n = note(30, 490, 840, 'The Netherlands, much of which lies below sea level, protects its coast with large engineering schemes such as the Delta Works.', { size: 17, weight: 600 });
  fig('07-sea-level-adaptation', 'Adapting to rising sea levels', b + n.s, 490 + n.h + 28,
    'A schematic coastal cross-section with present and higher sea levels. Mangroves are restored offshore to absorb wave energy, a sea wall protects the shore, a house is raised on stilts, and people and buildings are moved inland away from the most at-risk coast.',
    'Defend, raise, restore or retreat: four ways to reduce the risk from rising seas.',
    '## Managing climate change: adaptation');
}
