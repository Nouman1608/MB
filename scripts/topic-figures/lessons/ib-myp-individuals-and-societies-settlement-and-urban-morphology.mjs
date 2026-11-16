import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-individuals-and-societies-settlement-and-urban-morphology';

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

// 01 Settlement hierarchy with threshold, range, sphere
{
  const tiers = ['megacity (10 million+)', 'conurbation', 'city', 'town', 'village', 'hamlet', 'isolated dwelling'];
  let b = '';
  const top = 125, rh = 62, cx = 290;
  tiers.forEach((s, i) => {
    const y = top + i * rh, half = 105 + i * 27;
    const f = i < 2 ? C.mustard : i < 4 ? C.cream : C.tealLight;
    b += `<path d="M${cx - half},${y + rh} L${cx - half + 30},${y} L${cx + half - 30},${y} L${cx + half},${y + rh} Z" fill="${f}" stroke="${C.ink}" stroke-width="2.2"/>`;
    b += tx(cx, y + rh / 2 + 6, s, { size: i === 0 ? 15 : 16, weight: 700, anchor: 'middle' });
  });
  const ay1 = top, ay2 = top + 7 * rh;
  b += `<line x1="600" y1="${ay2}" x2="600" y2="${ay1 + 6}" stroke="${C.ink}" stroke-width="4" marker-end="url(#ah)"/>`;
  b += lines(620, ay1 + 60, ['• fewer settlements', '• further apart', '• more high-order services', '• larger sphere of influence'], { size: 17 }, 30);
  b += tx(620, ay1 + 26, 'Going up the hierarchy:', { size: 17, weight: 700 });
  const terms = [
    ['Threshold', 'minimum people needed to keep a service running', 'post office: small; university hospital: large'],
    ['Range', 'furthest people will travel to use a service', 'bread: short; specialist doctor: long'],
    ['Sphere of influence', 'the area a settlement serves', 'bigger for higher-ranked settlements'],
  ];
  terms.forEach(([h, d, e], i) => {
    const x = 30 + i * 285;
    b += box(x, 580, 270, 150, { title: h, body: d + '\n' + e, fill: '#eaf3f1', edge: C.tealDark, valign: 'top', tsize: 19, bsize: 15 });
  });
  b += tx(450, 760, 'Central place theory: Walter Christaller, 1933', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  fig('01-settlement-hierarchy', 'Settlement hierarchy', b, 785,
    'A stepped pyramid from isolated dwelling at the base through hamlet, village, town, city and conurbation to megacity at the top. Going up, there are fewer settlements, further apart, with more high-order services and larger spheres of influence. Threshold, range and sphere of influence are defined below with examples.',
    'Bigger places need bigger thresholds, draw people from further and serve wider areas.',
    '## Settlement hierarchy');
}

// 02 Rank-size in Norland
{
  const d = [[1, 3.6, 3.6], [2, 1.2, 1.8], [3, 1.0, 1.2], [4, 0.6, 0.9], [5, 0.5, 0.72]];
  const base = 520, sc = 330 / 3.6;
  let b = panel(30, 110, 840, 500) + line(110, base, 840, base, { w: 2.5 }) + tx(450, 148, 'Norland (fictional): five largest cities, millions', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  d.forEach(([r, a, p], i) => {
    const x = 140 + i * 140;
    b += `<rect x="${x}" y="${base - a * sc}" width="56" height="${a * sc}" fill="${i === 0 ? C.mustard : C.teal}" stroke="${C.ink}" stroke-width="2"/>`;
    b += `<rect x="${x + 60}" y="${base - p * sc}" width="56" height="${p * sc}" fill="#ffffff" stroke="${C.rust}" stroke-width="2.5" stroke-dasharray="7 5"/>`;
    b += tx(x + 28, base - a * sc - 8, String(a), { size: 16, weight: 700, anchor: 'middle' }) + tx(x + 88, base - p * sc - 8, String(p), { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
    b += tx(x + 58, base + 28, `rank ${r}`, { size: 16, anchor: 'middle', weight: 600 });
  });
  b += `<rect x="560" y="200" width="24" height="18" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + tx(594, 215, 'actual', { size: 16 });
  b += `<rect x="560" y="232" width="24" height="18" fill="#fff" stroke="${C.rust}" stroke-width="2.5" stroke-dasharray="6 4"/>` + tx(594, 247, 'predicted = 3.6 ÷ rank', { size: 16 });
  b += tx(450, 585, 'Every lower-ranked city is smaller than the rule predicts', { size: 17, anchor: 'middle', weight: 700, fill: C.rust });
  const n = note(30, 630, 840, 'Primacy index P₁ ÷ P₂ = 3.6 ÷ 1.2 = 3.0 (the rule gives 2.0): a primate city.', { size: 18 });
  fig('02-rank-size-norland', 'The rank-size rule and a primate city', b + n.s, 630 + n.h + 30,
    'Paired bars for fictional Norland’s five largest cities: actual sizes 3.6, 1.2, 1.0, 0.6 and 0.5 million against rank-size predictions of 3.6, 1.8, 1.2, 0.9 and 0.72 million. Every lower-ranked city falls short, and the primacy index is 3.0 against 2.0 expected.',
    'When the largest city dwarfs the rest, the country has a primate city.',
    '## Settlement hierarchy');
}

// 03 Burgess vs Griffin and Ford: who lives where
{
  const strip = (y, title, sub, cells) => {
    let s = panel(30, y, 840, 250) + tx(52, y + 36, title, { size: 21, weight: 700 }) + tx(52, y + 62, sub, { size: 16, fill: C.muted });
    const x0 = 52, w = 796 / cells.length;
    cells.forEach(([lab, f], i) => { s += rect(x0 + i * w, y + 86, w - 6, 92, f, C.ink, 8, 2) + lines(x0 + i * w + (w - 6) / 2, y + 126, wrap(lab, w - 20, 15), { size: 15, weight: 600, anchor: 'middle' }, 19); });
    s += arrow(x0, y + 210, x0 + 790, y + 210, { w: 3 }) + tx(x0, y + 236, 'centre', { size: 15, fill: C.muted }) + tx(x0 + 790, y + 236, 'edge', { size: 15, fill: C.muted, anchor: 'end' });
    return s;
  };
  let b = strip(110, 'Burgess (Chicago, 1925)', 'land values fall outwards (bid rent); newer, larger homes further out', [
    ['CBD', C.mustard], ['zone in transition', '#efcdb8'], ['working-class homes', '#f6e3d6'], ['residential zone', C.tealLight], ['commuter zone', C.teal]]);
  b += strip(380, 'Griffin and Ford (Latin America, 1980)', 'elite sector along a commercial spine; housing quality declines outwards', [
    ['CBD and spine', C.mustard], ['elite residential', C.teal], ['housing declining outwards', '#f6e3d6'], ['peripheral squatter settlements', '#efcdb8']]);
  const n = note(30, 650, 840, 'Key contrast: in Griffin and Ford the richest live near the centre and the poorest at the edge.', { size: 17 });
  fig('03-burgess-vs-griffin-ford', 'Who lives where? Two models compared', b + n.s, 650 + n.h + 30,
    'Two strips from city centre to edge. Burgess, based on Chicago in 1925: CBD, zone in transition, working-class homes, residential zone, commuter zone. Griffin and Ford, Latin American cities in 1980: CBD and commercial spine with an elite sector, housing declining in quality outwards, and peripheral squatter settlements at the edge.',
    'Burgess puts the better-off at the edge; Griffin and Ford put the poorest there.',
    '## Urban land-use models');
}

// 04 Transect test
{
  const d = [[0, 85], [0.5, 55], [1, 30], [2, 15], [3, 5]];
  const L = 120, R = 820, T = 170, B = 500;
  const X = (k) => L + 50 + (k / 3) * (R - L - 70), Y = (p) => B - (p / 100) * (B - T);
  let b = panel(30, 110, 840, 490) + tx(450, 148, 'Commercial plots out of 40, along one road (fictional data)', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  for (let p = 0; p <= 100; p += 25) b += line(L, Y(p), R, Y(p), { color: C.panelEdge, w: 1.2 }) + tx(L - 12, Y(p) + 5, `${p}%`, { size: 15, anchor: 'end', fill: C.muted });
  b += line(L, B, R, B, { w: 2.5 }) + line(L, T, L, B, { w: 2.5 });
  d.forEach(([k, p]) => { b += `<rect x="${X(k) - 22}" y="${Y(p)}" width="44" height="${B - Y(p)}" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2"/>` + tx(X(k), Y(p) - 8, `${p}%`, { size: 16, weight: 700, anchor: 'middle' }) + tx(X(k), B + 26, `${k} km`, { size: 16, anchor: 'middle' }); });
  b += tx(470, B + 56, 'distance from the city centre', { size: 16, anchor: 'middle', fill: C.muted });
  b += box(500, 200, 330, 90, { title: 'Supports Burgess', body: 'a CBD, with bid rent falling outwards', fill: '#eaf3f1', edge: C.tealDark, tsize: 18, bsize: 15 });
  const n = note(30, 620, 840, 'One transect cannot test Hoyt’s sectors: you need transects in several directions.', { size: 17 });
  fig('04-transect-test', 'Testing a model with a transect', b + n.s, 620 + n.h + 30,
    'A bar chart of the share of plots in commercial use along one road: 85% at the centre, 55% at 0.5 km, 30% at 1 km, 15% at 2 km and 5% at 3 km. The steady fall supports the Burgess idea of a CBD with falling bid rent, but one transect cannot test Hoyt’s sectors.',
    'A steady fall with distance supports Burgess; testing sectors needs several directions.',
    '## Urban land-use models');
}

// 05 Urbanisation vs urban growth
{
  const sc = 600 / 15.6;
  const bar = (y, yr, u, tot) => {
    const r = +(tot - u).toFixed(1);
    return tx(115, y + 40, yr, { size: 21, weight: 700, anchor: 'end' }) +
      rect(140, y, u * sc, 64, C.mustard, C.ink, 6, 2) + tx(140 + (u * sc) / 2, y + 40, `urban ${u}m`, { size: 17, weight: 700, anchor: 'middle' }) +
      rect(140 + u * sc, y, r * sc, 64, C.tealLight, C.tealDark, 6, 2) + tx(140 + u * sc + (r * sc) / 2, y + 40, `rural ${r}m`, { size: 17, weight: 700, anchor: 'middle' });
  };
  let b = panel(30, 110, 840, 340) + tx(450, 148, 'Norland (fictional), total population in millions', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += bar(175, '2000', 4.2, 12.0) + bar(270, '2020', 9.1, 15.6);
  b += tx(140 + 4.2 * sc / 2, 262, '35.0% urban', { size: 16, anchor: 'middle', fill: C.olive, weight: 700 }) + tx(140 + 9.1 * sc / 2, 360, '58.3% urban', { size: 16, anchor: 'middle', fill: C.olive, weight: 700 });
  b += tx(450, 410, 'Rural population fell (7.8m → 6.5m) while the total rose: migration from rural areas is likely', { size: 16, anchor: 'middle', fill: C.rust, weight: 600 });
  b += box(30, 470, 410, 140, { title: 'Urbanisation', body: 'rise in the PROPORTION urban\n35.0% → 58.3% = +23.3 percentage points', fill: C.cream, edge: C.olive, tsize: 20 });
  b += box(460, 470, 410, 140, { title: 'Urban growth', body: 'rise in the NUMBER of urban dwellers\n4.2m → 9.1m = +116.7%', fill: '#eaf3f1', edge: C.tealDark, tsize: 20 });
  fig('05-urbanisation-vs-growth', 'Urbanisation is not urban growth', b, 640,
    'Stacked bars for fictional Norland: in 2000, 4.2 million urban and 7.8 million rural (35.0% urban); in 2020, 9.1 million urban and 6.5 million rural (58.3% urban). Urbanisation rose 23.3 percentage points while the urban population grew 116.7%.',
    'Urbanisation measures the share living in towns; urban growth measures the number.',
    '## Urbanisation');
}

// 06 Responses to informal settlements
{
  const r = [
    ['Clearance and relocation', 'housing removed; residents moved, often to the city edge, far from work', '#fbeee6', C.rust],
    ['Site-and-service schemes', 'the authority provides plots with basic services; families build their own homes', C.cream, C.olive],
    ['Self-help schemes', 'residents build with technical support, e.g. Orangi Pilot Project, Karachi (from 1980)', '#eaf3f1', C.tealDark],
    ['Upgrading in place', 'water, drains, paved lanes and legal title while residents stay, e.g. Favela-Bairro, Rio (1990s)', '#eaf3f1', C.tealDark],
  ];
  let b = '';
  r.forEach(([h, d, f, e], i) => { b += box(30 + (i % 2) * 430, 120 + Math.floor(i / 2) * 175, 410, 155, { title: h, body: d, fill: f, edge: e, tsize: 20, bsize: 16, valign: 'top' }); });
  b += box(30, 480, 840, 110, { title: 'Not only problems', body: 'busy workshops and markets, strong community networks, homes improved step by step; Dharavi, Mumbai, has a large informal economy', fill: C.panel, edge: C.panelEdge, align: 'middle', tsize: 19 });
  fig('06-informal-settlement-responses', 'Responses to informal settlements', b, 620,
    'Four responses: clearance and relocation, often far from work; site-and-service plots where families build; self-help schemes such as the Orangi Pilot Project in Karachi; and upgrading in place such as Rio’s Favela-Bairro programme. Informal settlements also have workshops, markets and community networks, as in Dharavi, Mumbai.',
    'Responses range from moving people out to improving homes where they stand.',
    '## Informal settlements');
}

// 07 Sustainable city
{
  let b = '';
  const c = (x, y, col, lab) => `<circle cx="${x}" cy="${y}" r="120" fill="${col}" fill-opacity="0.55" stroke="${C.ink}" stroke-width="2.5"/>` + tx(x, y + 6, lab, { size: 20, weight: 700, anchor: 'middle' });
  b += c(330, 270, C.teal, '') + c(470, 270, C.cream, '') + c(400, 385, C.tealLight, '');
  b += tx(290, 240, 'Environment', { size: 19, weight: 700, anchor: 'middle' }) + tx(512, 240, 'Economy', { size: 19, weight: 700, anchor: 'middle' }) + tx(400, 450, 'Social fairness', { size: 19, weight: 700, anchor: 'middle' });
  b += tx(400, 318, 'balance', { size: 17, weight: 700, anchor: 'middle', fill: C.ink });
  b += box(620, 175, 250, 260, { title: 'Features to look for', body: 'efficient public transport\ncycling and walking routes\ngreen space\nwaste reduction, recycling\nenergy-efficient buildings\naffordable housing\nbrownfield, not greenfield', fill: C.panel, tsize: 18, bsize: 16, valign: 'top' });
  b += box(30, 540, 840, 110, { title: 'Curitiba, Brazil (from the 1970s)', body: 'bus rapid transit on dedicated lanes; parks on flood-prone land; recyclable waste exchanged for food', fill: '#eaf3f1', edge: C.tealDark, align: 'middle' });
  const n = note(30, 668, 840, 'Ask who benefits, who pays and whether the gains last. One green feature is not enough.', { size: 17 });
  fig('07-sustainable-city', 'What makes a city sustainable?', b + n.s, 668 + n.h + 30,
    'Three overlapping circles, environment, economy and social fairness, meet in a central balance. Features to look for include public transport, cycling and walking routes, green space, recycling, efficient buildings, affordable housing and brownfield building. Curitiba’s bus rapid transit, flood-land parks and waste-for-food scheme are a common case study.',
    'A sustainable city balances environment, economy and fairness, now and for later residents.',
    '## Sustainable cities');
}
