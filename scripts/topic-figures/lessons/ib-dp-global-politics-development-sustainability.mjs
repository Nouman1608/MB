import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-dp-global-politics-development-sustainability';

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

// 01 Contested meanings
{
  const q = [
    ['Development', 'as growth: GDP or GNI per person\nas human development: Sen’s capabilities, real freedoms\nas political and institutional change: accountable government, courts, rights', '#eaf3f1', C.tealDark],
    ['Sustainability', 'environmental, social, economic dimensions\nBrundtland (1987): meet present needs without reducing future generations’ ability to meet theirs', C.cream, C.olive],
    ['Poverty', 'lack of resources: absolute poverty below a fixed minimum\nlack of opportunities: relative poverty, e.g. EU line at 60% of median income', C.panel, C.panelEdge],
    ['Inequality', 'economic, political and social\nlinked to power asymmetries: less wealth, less say over the rules', C.tealLight, C.tealDark],
  ];
  let b = '';
  q.forEach(([h, d, f, e], i) => { b += box(30 + (i % 2) * 430, 115 + Math.floor(i / 2) * 225, 410, 210, { title: h, body: d, fill: f, edge: e, tsize: 22, bsize: 15.5, valign: 'top' }); });
  const n = note(30, 575, 840, 'Define each term in more than one way and explain why actors disagree.', { size: 17 });
  fig('01-contested-meanings', 'Four contested meanings', b + n.s, 575 + n.h + 30,
    'Four contested terms. Development as growth, human development or institutional change; sustainability in three dimensions, with the Brundtland definition; poverty as lack of resources (absolute) or opportunities (relative); inequality as economic, political and social, linked to power asymmetries.',
    'Each key term has several meanings, and actors choose the one that suits them.',
    '## Contested meanings');
}

// 02 Actors map
{
  const sp = [
    { x: 30, y: 115, w: 260, h: 140, title: 'States and governments', body: 'tax, welfare, land policy; e.g. Bolsa Família (from 2003)' },
    { x: 610, y: 115, w: 260, h: 140, title: 'IGOs and IFIs', body: 'lend, set conditions and trade rules; World Bank, IMF, WTO; SDGs' },
    { x: 30, y: 445, w: 260, h: 140, title: 'Civil society', body: 'mobilise, deliver, hold to account; Green Belt Movement' },
    { x: 610, y: 445, w: 260, h: 140, title: 'TNCs and MNCs', body: 'investment, jobs, supply chains; Rana Plaza (2013)' },
    { x: 320, y: 470, w: 260, h: 115, title: 'Marginalised groups', body: 'claim land and a say; often excluded' },
  ].map((s, i) => ({ ...s, fill: i === 4 ? '#fbeee6' : C.panel, edge: i === 4 ? C.rust : C.tealDark, tsize: 18, bsize: 15 }));
  let b = hub(450, 300, 100, ['Development', 'and', 'sustainability'], sp, { size: 18 });
  const n = note(30, 605, 840, 'IMF and World Bank voting shares follow contributions, so many borrowers question the fairness of the rules.', { size: 16, weight: 600 });
  fig('02-actors', 'Who shapes development?', b + n.s, 605 + n.h + 30,
    'Five kinds of actor around development and sustainability: states and governments, such as Brazil’s Bolsa Família; IGOs and financial institutions such as the World Bank, IMF and WTO; civil society such as the Green Belt Movement; TNCs, as in garment supply chains after Rana Plaza; and marginalised groups who are often excluded.',
    'Each actor wants different things and holds different power over the rules.',
    '## Interactions of political stakeholders and actors');
}

// 03 Measures table
{
  const cols = [{ w: 250, head: 'Measure' }, { w: 330, head: 'Combines' }, { w: 260, head: 'Main limitation' }];
  const tb = table(30, 110, cols, [
    ['Human Development Index', 'health, education, income', 'ignores inequality, environment, freedom'],
    ['Multidimensional Poverty Index', '10 indicators, household by household (replaced HPI, 2010)', 'weights are a choice; income left out'],
    ['Happy Planet Index', 'wellbeing and life expectancy against ecological footprint', 'wellbeing self-reported'],
    ['Gini index', 'spread of income: 0 = perfect equality', 'same Gini can hide different shapes'],
    ['Corruption and trust indices', 'perceived corruption; trust in institutions', 'based on perceptions'],
    ['ESI, SSI, SGI', 'environmental, social, governance performance', 'many indicators; weights disputed'],
  ], { size: 16 });
  fig('03-measures', 'Measuring development: what each index misses', tb.s, 110 + tb.h + 30,
    'A table of development measures with what each combines and its main limitation: the HDI, the Multidimensional Poverty Index, the Happy Planet Index, the Gini index, corruption and trust indices, and sustainability and governance indices.',
    'Every index captures something and misses something; say which.',
    '## Nature, practice and study of development and sustainability');
}

// 04 MPI worked example
{
  const grid = (x0, y0, A) => {
    let s = '';
    for (let i = 0; i < 100; i++) { const r = Math.floor(i / 20), c = i % 20; const poor = i < 34; s += `<rect x="${x0 + c * 17}" y="${y0 + r * 17}" width="14" height="14" rx="2" fill="${poor ? C.rust : C.tealLight}" fill-opacity="${poor ? A : 1}" stroke="${poor ? C.rust : C.tealDark}" stroke-width="1"/>`; }
    return s;
  };
  let b = '';
  const pnl = (x, title, A, mpi) => panel(x, 110, 410, 380) + tx(x + 205, 148, title, { size: 21, weight: 700, anchor: 'middle' }) + grid(x + 35, 170, A === 0.5 ? 0.9 : 0.55) +
    tx(x + 205, 290, 'each square = 10 people', { size: 15, anchor: 'middle', fill: C.muted }) +
    tx(x + 30, 330, 'H (headcount) = 340 ÷ 1,000 = 0.34', { size: 17 }) + tx(x + 30, 362, `A (intensity) = ${A.toFixed(2)}`, { size: 17 }) +
    tx(x + 30, 410, `MPI = H × A = ${mpi}`, { size: 21, weight: 700, fill: C.rust }) + tx(x + 30, 446, A === 0.5 ? 'deeper deprivation' : 'same number poor, less deeply', { size: 16, fill: C.muted });
  b += pnl(30, 'District 1 (Kestland, fictional)', 0.5, '0.17') + pnl(460, 'District 2', 0.4, '0.136');
  const n = note(30, 510, 840, 'MPI multiplies how many are poor (H) by how deeply they are deprived (A).', { size: 18 });
  fig('04-mpi-example', 'Working out the MPI', b + n.s, 510 + n.h + 30,
    'Two fictional districts each with 1,000 people, 340 of them multidimensionally poor, so H is 0.34. In district 1 the average intensity A is 0.50, giving an MPI of 0.17; in district 2 A is 0.40, giving 0.136.',
    'Same headcount, lower intensity, lower MPI.',
    '## Nature, practice and study of development and sustainability');
}

// 05 HDI geometric mean
{
  const bars = (x, title, v, hdi) => {
    let s = panel(x, 110, 410, 420) + tx(x + 205, 148, title, { size: 21, weight: 700, anchor: 'middle' });
    const base = 400, H = 210;
    ['health', 'education', 'income'].forEach((lab, i) => {
      const bx = x + 50 + i * 110, h = v[i] * H;
      s += rect(bx, base - h, 80, h, v[i] < 0.6 ? '#efcdb8' : C.teal, C.ink, 4, 2) + tx(bx + 40, base - h - 8, v[i].toFixed(2), { size: 16, weight: 700, anchor: 'middle' }) + tx(bx + 40, base + 24, lab, { size: 15, anchor: 'middle' });
    });
    s += line(x + 30, base, x + 380, base, { w: 2 });
    s += tx(x + 205, 462, 'arithmetic mean = 0.75', { size: 16, anchor: 'middle', fill: C.muted }) + tx(x + 205, 498, `HDI (geometric mean) = ${hdi}`, { size: 20, weight: 700, anchor: 'middle', fill: hdi === '0.726' ? C.rust : C.tealDark });
    return s;
  };
  let b = bars(30, 'Country A (fictional)', [0.9, 0.5, 0.85], '0.726') + bars(460, 'Country B (fictional)', [0.75, 0.75, 0.75], '0.75');
  const n = note(30, 550, 840, 'A weak score in one dimension pulls the HDI down: high income cannot hide poor schooling.', { size: 17 });
  fig('05-hdi-geometric-mean', 'Why the HDI uses a geometric mean', b + n.s, 550 + n.h + 30,
    'Country A scores 0.90 for health, 0.50 for education and 0.85 for income; country B scores 0.75 in all three. Both have an arithmetic mean of 0.75, but the geometric mean gives A an HDI of about 0.726 and B 0.75.',
    'The geometric mean penalises uneven development.',
    '## Nature, practice and study of development and sustainability');
}

// 06 Pathways
{
  const cols = [{ w: 220, head: 'Pathway' }, { w: 330, head: 'Core idea' }, { w: 290, head: 'Criticism' }];
  const tb = table(30, 110, cols, [
    ['Modernization (Rostow)', 'poorer states follow richer ones: investment, industry, mass consumption', 'assumes one route; ignores external constraints'],
    ['Market-led / neoliberal', 'open trade, attract FDI, shrink the state', 'growth can be unequal; social spending cut'],
    ['State-led', 'government directs investment, protects new industries', 'risk of corruption and vested interests'],
    ['Dependency / world-systems', 'trade keeps the periphery supplying cheap raw materials to the core', 'hard to explain states that climbed'],
    ['Human development', 'invest in people’s capabilities first', 'slower to show in growth figures'],
    ['Community-led and sustainable', 'local control, cooperatives, green technology', 'hard to scale up'],
  ], { size: 16 });
  fig('06-pathways', 'Pathways to development', tb.s, 110 + tb.h + 30,
    'Six pathways with their core idea and main criticism: modernization, market-led, state-led, dependency and world-systems, human development, and community-led sustainable development.',
    'Every pathway carries a theory of why states are poor, and a weakness.',
    '## Nature, practice and study of development and sustainability');
}

// 07 Resource curse chain
{
  const c = chainH(30, 150, 840, [
    { title: 'Oil or mineral wealth', body: 'environmental and economic factor', fill: C.cream, edge: C.olive },
    { title: 'Feeds corruption and conflict', body: 'political factor', fill: '#fbeee6', edge: C.rust },
    { title: 'Slower development', body: 'than some resource-poor states', fill: C.mustard, edge: C.ink },
  ], { h: 140, gap: 40, tsize: 20, bsize: 16 });
  let b = label(450, 136, 'Factors interact: the resource curse', { anchor: 'middle' }) + c.s;
  b += label(30, 340, 'Five sets of factors');
  [['Political', 'stability, accountability, conflict'], ['Economic', 'debt, trade, FDI, aid'], ['Social', 'culture, gender, migration'], ['Institutional', 'UN, IMF, World Bank, WTO'], ['Environmental', 'geography, resources, climate']].forEach(([h, d], i) => { b += box(30 + i * 170, 355, 160, 110, { title: h, body: d, tsize: 17, bsize: 14.5, align: 'middle', pad: 10, fill: i % 2 ? C.panel : '#eaf3f1', edge: C.tealDark }); });
  fig('07-resource-curse', 'Factors interact: the resource curse', b, 495,
    'Oil or mineral wealth, an environmental and economic factor, can feed corruption and conflict, a political factor, so some resource-rich states develop more slowly than resource-poor ones. Below, the five sets of factors: political, economic, social, institutional and environmental.',
    'One factor can trigger another: resource wealth can slow development through politics.',
    '## Nature, practice and study of development and sustainability');
}

// 08 Debates: growth to alternatives
{
  let b = '';
  b += box(30, 115, 410, 200, { title: 'Globalization: for', body: 'export-led growth; fall in extreme poverty in East Asia', fill: '#eaf3f1', edge: C.tealDark, valign: 'top', tsize: 20 });
  b += box(460, 115, 410, 200, { title: 'Globalization: against', body: 'rising inequality within states; “race to the bottom” in standards; loss of policy space under WTO rules and investment treaties', fill: '#fbeee6', edge: C.rust, valign: 'top', tsize: 20 });
  b += box(30, 335, 840, 120, { title: 'SDGs (2015–2030): 17 goals after the 8 MDGs (2000–2015)', body: 'shared framework for rich and poor alike — but critics say they assume endless growth, some targets clash, and nothing binds states', fill: C.cream, edge: C.olive, align: 'middle', bsize: 16 });
  b += label(30, 495, 'Alternative views');
  [['De-growth', 'rich states shrink material production and consumption; aim for wellbeing'], ['Regenerative', 'restore ecosystems and communities, not just slow damage'], ['Related ideas', 'Raworth’s doughnut; buen vivir (Ecuador, 2008); Bhutan’s Gross National Happiness']].forEach(([h, d], i) => { b += box(30 + i * 285, 510, 270, 140, { title: h, body: d, tsize: 19, bsize: 15, valign: 'top', fill: C.panel, edge: C.tealDark }); });
  fig('08-debates', 'Debating development and sustainability', b, 680,
    'Arguments for globalization, such as export-led growth and falling extreme poverty in East Asia, against arguments such as rising inequality and loss of policy space. The 17 SDGs offer a shared framework but are criticised as growth-based and non-binding. Alternatives include de-growth, regenerative approaches, the doughnut, buen vivir and Gross National Happiness.',
    'Argue both sides of globalization and the SDGs, then weigh the alternatives.',
    '## Debates on development and sustainability');
}
