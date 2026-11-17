import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-geography-9230-enquiry-planning';

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


// 01 Aim, question, hypothesis, sub-questions
{
  let b = '';
  const rows = [
    ['Aim', 'what the enquiry sets out to find out, in general terms', 'To investigate how a river changes downstream', C.tealLight, C.tealDark],
    ['Enquiry question', 'a question the data will answer', 'How do river width and depth change downstream along the (named) river?', C.panel, C.tealDark],
    ['Hypothesis', 'a testable statement that predicts a result', 'River width increases with distance downstream', C.cream, C.olive],
    ['Sub-questions', 'smaller questions that build towards the main one', 'Does velocity also change? Does pebble size decrease?', C.panel, C.tealDark],
  ];
  let y = 110;
  rows.forEach(([h, d, ex, f, e], i) => {
    const el = wrap(ex, 360, 17), dl = wrap(d, 250, 16);
    const hh = Math.max(el.length * LH(17), LH(19) + dl.length * LH(16)) + 34;
    b += rect(30, y, 840, hh, f, e, 12, 2.5);
    const ty = y + (hh - (LH(19) + dl.length * LH(16))) / 2 + 18;
    b += tx(52, ty, h, { size: 20, weight: 700 }) + lines(52, ty + LH(19), dl, { size: 16, fill: C.muted });
    b += rect(470, y + 10, 384, hh - 20, '#ffffff', C.panelEdge, 10, 1.5);
    b += lines(486, y + (hh - el.length * LH(17)) / 2 + 17, el, { size: 17, italic: true });
    if (i < 3) b += arrow(450, y + hh + 2, 450, y + hh + 16, { w: 3 });
    y += hh + 18;
  });
  b += box(30, y + 4, 410, 106, { title: 'Choose a hypothesis…', body: 'because the data can show it to be supported or not supported', tsize: 18, bsize: 16, fill: C.cream, edge: C.olive, bfill: C.ink });
  b += box(460, y + 4, 410, 106, { title: 'Choose a question…', body: 'when you do not want to predict the answer in advance', tsize: 18, bsize: 16, fill: C.tealLight, edge: C.tealDark, bfill: C.ink });
  const h = 106;
  fig('01-aim-question-hypothesis', 'Aim, question and hypothesis', b, y + 4 + h + 28,
    'Four levels of an enquiry with a river example: the aim, to investigate how a river changes downstream; the enquiry question on how width and depth change; the hypothesis that width increases downstream; and sub-questions on velocity and pebble size.',
    'Narrow a general aim into a question or a testable hypothesis.',
    '## Aims, questions and hypotheses');
}

// 02 Suitability checklist
{
  const f = [
    ['Geographical', 'places, processes or patterns; linked to a theory'],
    ['Testable', 'names variables you can measure'],
    ['Specific', 'names the place and, if needed, the time'],
    ['Manageable', 'data collectable in the time, with the equipment and people'],
    ['Safe and accessible', 'sites reached legally and safely'],
    ['Likely to show variation', 'otherwise there is nothing to analyse'],
    ['Supported by secondary data', 'background information sets the context'],
  ];
  let b = '';
  const bw = 410, gap = 20, H = 96;
  f.forEach(([h, d], i) => {
    const x = 30 + (i % 2) * (bw + gap), y = 110 + Math.floor(i / 2) * (H + 12);
    b += panel(x, y, bw, H);
    b += `<rect x="${x + 18}" y="${y + H / 2 - 14}" width="28" height="28" rx="5" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.2"/>` + path(`M${x + 24},${y + H / 2} l6,7 l12,-14`, { w: 3.2, stroke: C.tealDark });
    b += tx(x + 60, y + 34, h, { size: 19, weight: 700 }) + lines(x + 60, y + 58, wrap(d, bw - 80, 16), { size: 16, fill: C.muted });
  });
  const y = 110 + 4 * (H + 12) - (H + 12) + H + 22;
  const yy = 110 + 3 * (H + 12);
  b += box(460, yy, 410, H, { title: 'Check every idea', body: 'against all seven factors', tsize: 19, bsize: 16, align: 'middle', fill: C.cream, edge: C.olive, bfill: C.ink });
  const ws = weakStrong(30, yy + H + 22, 840, '“What is the town like?”  Not testable, no variable, no theory.', '“Do pedestrian numbers decrease with distance from the centre of (named town)?”', { size: 17 });
  b += ws.s;
  fig('02-suitable-question', 'What makes a question suitable', b, yy + H + 22 + ws.h + 28,
    'Seven factors for a suitable enquiry question: geographical, testable, specific, manageable, safe and accessible, likely to show variation, and supported by secondary data. “What is the town like?” fails; “Do pedestrian numbers decrease with distance from the centre of a named town?” works.',
    'Name a place, a measurable variable and a pattern you expect to find.',
    '## What makes a question or hypothesis suitable');
}

// 03 Theory gives the prediction
{
  let b = '';
  const ch = [['Theory or concept', 'a reason to expect a pattern', C.tealLight], ['Hypothesis', 'predicts that pattern', C.cream], ['Data collected', 'at your sites', C.panel], ['Conclusion', 'compares results with the prediction', C.mustard]];
  const r = chainH(30, 115, 840, ch.map(([h, d, f]) => ({ title: h, body: d, fill: f, edge: C.ink, bfill: C.ink })), { gap: 30, tsize: 18, bsize: 15, h: 118 });
  b += r.s;
  const ex = [
    ['River channel change', 'more water joins downstream', 'width, depth, velocity increase; sediment smaller and rounder'],
    ['Land use in a town', 'urban land-use models; land most valuable near the centre', 'shops and offices at the centre; housing density falls outwards'],
    ['Sand dune ecosystems', 'succession', 'vegetation cover and variety increase inland'],
    ['Environmental quality', 'differences in housing, open space and deprivation', 'quality varies between inner and outer areas'],
    ['Microclimate', 'surfaces and buildings change temperature and wind', 'warmer over tarmac and between buildings than over grass'],
  ];
  let y = 268;
  b += tx(40, y, 'Enquiry focus', { size: 16, weight: 700, fill: C.tealDark }) + tx(270, y, 'Theory or concept', { size: 16, weight: 700, fill: C.tealDark }) + tx(570, y, 'Expected pattern', { size: 16, weight: 700, fill: C.olive });
  y += 12;
  ex.forEach(([a, t_, p], i) => {
    const tl_ = wrap(t_, 270, 16), pl = wrap(p, 280, 16);
    const hh = Math.max(tl_.length, pl.length, wrap(a, 200, 17).length) * LH(16) + 26;
    b += `<rect x="30" y="${y}" width="840" height="${hh}" fill="${i % 2 ? '#f7f9f9' : C.panel}" stroke="${C.panelEdge}" stroke-width="1.5"/>`;
    b += lines(40, y + 24, wrap(a, 210, 17), { size: 17, weight: 700 }, LH(16));
    b += lines(270, y + 24, tl_, { size: 16 });
    b += arrow(546, y + hh / 2, 562, y + hh / 2, { w: 2.5 });
    b += lines(570, y + 24, pl, { size: 16, fill: C.olive, weight: 600 });
    y += hh;
  });
  fig('03-theory-prediction', 'The theory behind the enquiry', b, y + 28,
    'A chain from theory to hypothesis, data and conclusion, where the conclusion compares results with the prediction. Below, five examples: river channel change, land use in a town, sand dune succession, environmental quality and microclimate, each with its theory and expected pattern.',
    'The theory gives a reason to expect a pattern; the conclusion tests it.',
    '## The theory or concept behind the enquiry');
}

// 04 Background research and evidence
{
  let b = '';
  const src = [
    ['Large-scale maps', 'locate sites; distances and heights'],
    ['Census and local authority data', 'population, housing or land use'],
    ['GIS and satellite imagery', 'geo-spatial data (in the specification)'],
    ['Previous studies, news, websites', 'e.g. river or park authorities'],
  ];
  b += tx(30, 128, 'Secondary sources, before any data collection', { size: 18, weight: 700, fill: C.tealDark });
  src.forEach(([h, d], i) => {
    const y = 144 + i * 96;
    b += box(30, y, 380, 84, { title: h, body: d, tsize: 18, bsize: 16, edge: C.tealDark, bfill: C.ink });
    b += parrow(`M412,${y + 42} C450,${y + 42} 440,300 476,300`, { w: 2.8, color: C.tealDark, marker: 'ahT' });
  });
  const uses = ['choose sites', 'refine your hypothesis', 'understand the context'];
  b += rect(482, 204, 388, 190, C.cream, C.olive, 14, 2.5) + tx(676, 240, 'Background research helps you', { size: 18, weight: 700, anchor: 'middle' });
  uses.forEach((u, i) => { b += tx(510, 280 + i * 36, '• ' + u, { size: 18 }); });
  b += rect(482, 408, 388, 54, '#ffffff', C.olive, 12, 2) + tx(676, 442, 'Record every source in a bibliography', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  const y = 560;
  b += tx(30, y, 'Plan both kinds of evidence', { size: 18, weight: 700, fill: C.tealDark });
  b += box(30, y + 16, 410, 110, { title: 'Primary', body: 'collected by you or your group: measurements, counts, questionnaires. Gives local detail.', tsize: 19, bsize: 16, valign: 'top', fill: C.tealLight, edge: C.tealDark, bfill: C.ink });
  b += box(460, y + 16, 410, 110, { title: 'Secondary', body: 'collected by others, such as census data. Gives comparison and context.', tsize: 19, bsize: 16, valign: 'top', fill: C.cream, edge: C.olive, bfill: C.ink });
  fig('04-background-research', 'Background research and evidence', b, y + 126 + 28,
    'Four secondary sources, large-scale maps, census and local authority data, GIS and satellite imagery, and previous studies or websites, feed background research that helps choose sites, refine the hypothesis and understand the context, with every source recorded in a bibliography. Below, primary evidence gives local detail and secondary evidence gives comparison.',
    'Research first, record every source, and combine primary with secondary evidence.',
    '## Background research from secondary sources');
}

// 05 Risk assessment
{
  const rows = [
    ['River', 'Deep or fast water; slippery rocks', 'Check river levels; shallow sections only; suitable footwear; never work alone'],
    ['River', 'Water-borne infection', 'Cover cuts; wash hands; do not drink the water'],
    ['Coast', 'Incoming tide cutting off the beach', 'Check tide times; set a turn-back time'],
    ['Coast', 'Falling rocks at cliff bases', 'Keep away from the cliff foot; helmet if required'],
    ['Town', 'Traffic', 'Stay on pavements; use crossings; high-visibility clothing'],
    ['Town', 'Approaching strangers for questionnaires', 'Work in pairs or groups; public places; carry ID; leave if uncomfortable'],
    ['Any', 'Bad weather, heat or cold', 'Check the forecast; water, sun protection or waterproofs; change the date if needed'],
  ];
  let b = '';
  b += rect(30, 110, 840, 46, C.tealDark, C.tealDark, 12);
  b += tx(48, 140, 'Setting', { size: 17, weight: 700, fill: '#ffffff' }) + tx(150, 140, 'Risk', { size: 17, weight: 700, fill: '#ffffff' }) + tx(480, 140, 'How to reduce it', { size: 17, weight: 700, fill: '#ffffff' });
  let y = 156;
  const fills = { River: '#eaf1f8', Coast: C.tealLight, Town: C.cream, Any: C.panel };
  rows.forEach(([s_, r, p]) => {
    const rl = wrap(r, 290, 16), pl = wrap(p, 370, 16);
    const hh = Math.max(rl.length, pl.length) * LH(16) + 22;
    b += `<rect x="30" y="${y}" width="840" height="${hh}" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="1.5"/>`;
    b += `<rect x="30" y="${y}" width="110" height="${hh}" fill="${fills[s_]}" stroke="${C.panelEdge}" stroke-width="1.5"/>` + tx(48, y + hh / 2 + 6, s_, { size: 17, weight: 700 });
    b += lines(150, y + (hh - rl.length * LH(16)) / 2 + 15, rl, { size: 16 });
    b += arrow(448, y + hh / 2, 470, y + hh / 2, { w: 2.5, color: C.tealDark, marker: 'ahT' });
    b += lines(480, y + (hh - pl.length * LH(16)) / 2 + 15, pl, { size: 16, fill: C.tealDark, weight: 600 });
    y += hh;
  });
  b += `<rect x="30" y="110" width="840" height="${y - 110}" rx="12" fill="none" stroke="${C.ink}" stroke-width="2.2"/>`;
  const n = note(30, y + 20, 840, 'A precaution must match the risk. “Be careful” is not a precaution.', { size: 18 });
  fig('05-risk-assessment', 'Risks and how to reduce them', b + n.s, y + 20 + n.h + 28,
    'A risk assessment table for river, coast, town and any setting. Each risk, such as fast water, incoming tides, falling rocks, traffic, approaching strangers or bad weather, is matched with specific precautions such as checking river levels or tide times, staying on pavements and working in pairs.',
    'Every risk needs a specific precaution that matches it.',
    '## Risks and how to reduce them');
}

// 06 Worked example: plan with sketch map
{
  let b = '';
  b += panel(30, 110, 840, 310);
  // schematic map: road from centre (left) to edge (right)
  b += `<rect x="60" y="150" width="780" height="200" rx="8" fill="#eef2ea"/>`;
  b += `<circle cx="120" cy="250" r="56" fill="${C.sand}" stroke="${C.ink}" stroke-width="2"/>` + tx(120, 246, 'town', { size: 16, weight: 700, anchor: 'middle' }) + tx(120, 266, 'centre', { size: 16, weight: 700, anchor: 'middle' });
  b += `<path d="M176,250 L800,250" stroke="${C.muted}" stroke-width="16" stroke-linecap="round"/><path d="M176,250 L800,250" stroke="#ffffff" stroke-width="2" stroke-dasharray="12 10"/>`;
  [['older, denser housing', 230, 350, C.rock], ['newer, lower-density housing', 520, 300, '#d8e3c6']].forEach(([l, x, w, f]) => {
    b += `<rect x="${x}" y="168" width="${w}" height="60" rx="6" fill="${f}" opacity="0.8"/>` + tx(x + w / 2, 204, l, { size: 15, anchor: 'middle', weight: 600 });
  });
  b += `<rect x="560" y="276" width="200" height="56" rx="6" fill="#a9c48f" opacity="0.8"/>` + tx(660, 309, 'more open space', { size: 15, anchor: 'middle', weight: 600 });
  for (let k = 0; k < 5; k++) { const x = 200 + k * 150; b += `<circle cx="${x}" cy="250" r="13" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + tx(x, 255, String(k + 1), { size: 14, weight: 700, anchor: 'middle' }); }
  b += line(176, 372, 800, 372, { w: 2 }) + line(176, 364, 176, 380, { w: 2 }) + line(800, 364, 800, 380, { w: 2 }) + tx(488, 404, 'main road, 2 km from centre to edge of town', { size: 15, anchor: 'middle', fill: C.ink, weight: 600 });
  b += tx(830, 166, 'edge of town →', { size: 15, anchor: 'end', fill: C.muted });
  b += tx(70, 340, 'sites at regular intervals · not to scale', { size: 15, fill: C.muted, italic: true });
  const items = [
    ['Hypothesis', 'environmental quality scores increase with distance from the town centre'],
    ['Theory', 'urban land-use models: older, denser housing and more traffic near the centre; newer housing and more open space further out'],
    ['Location', 'one road crossing several housing types, with pavements throughout'],
    ['Background research', 'town map to plan sites; census data on housing and open space'],
    ['Risks', 'traffic at junctions: pavements and crossings. Questionnaires: work in pairs in daylight'],
  ];
  let y = 440;
  items.forEach(([h, d], i) => {
    const dl = wrap(d, 600, 16);
    const hh = dl.length * LH(16) + 22;
    b += `<rect x="30" y="${y}" width="840" height="${hh}" fill="${i % 2 ? '#f7f9f9' : C.panel}" stroke="${C.panelEdge}" stroke-width="1.5"/>`;
    b += tx(48, y + hh / 2 + 6, h, { size: 17, weight: 700, fill: i === 0 ? C.olive : C.ink });
    b += lines(250, y + 26, dl, { size: 16 });
    y += hh;
  });
  b += `<rect x="30" y="440" width="840" height="${y - 440}" rx="10" fill="none" stroke="${C.ink}" stroke-width="2.2"/>`;
  fig('06-worked-plan', 'A plan in outline', b, y + 28,
    'A schematic sketch map of one main road running 2 km from the town centre to the edge of town, with five sites at regular intervals passing older, denser housing and then newer, lower-density housing and open space. Below, the plan’s hypothesis, theory, location, background research and risks.',
    'A good plan names the place, the variable, the theory and the expected pattern.',
    '## Worked example: a plan in outline');
}
