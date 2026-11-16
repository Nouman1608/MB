import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-individuals-and-societies-industrialization-and-technology';

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

// 01 Why Britain: linked factors
{
  const sp = [
    { x: 30, y: 120, w: 260, h: 120, title: 'Resources', body: 'coal and iron ore close together; fast rivers' },
    { x: 320, y: 120, w: 260, h: 120, title: 'Agricultural change', body: 'more food, growing population, labour freed for towns' },
    { x: 610, y: 120, w: 260, h: 120, title: 'Capital', body: 'trade profits, including the Atlantic slave trade; banks' },
    { x: 30, y: 500, w: 260, h: 120, title: 'Markets and empire', body: 'colonies supplied raw cotton and bought goods' },
    { x: 320, y: 500, w: 260, h: 120, title: 'Transport', body: 'rivers, long coastline, canals from the 1760s' },
    { x: 610, y: 500, w: 260, h: 120, title: 'Political stability', body: 'no invasion; Parliament protected property and patents' },
  ].map((s) => ({ ...s, fill: C.panel, edge: C.tealDark }));
  let b = hub(450, 370, 104, ['Industrial', 'Revolution', 'in Britain', 'c. 1760–1840'], sp, { size: 20 });
  const n = note(30, 645, 840, 'Explain how the factors link, for example farm change freed the labour that factories used, rather than listing them.', { size: 16, weight: 600 });
  fig('01-why-britain', 'Why industrialisation began in Britain', b + n.s, 645 + n.h + 30,
    'Six factors surround the Industrial Revolution in Britain, about 1760 to 1840: resources, agricultural change, capital from trade, markets and empire, transport, and political stability.',
    'Several factors worked together; strong answers show how they link.',
    '## Why the Industrial Revolution began in Britain');
}

// 02 Timeline of inventions
{
  const ev = [
    ['1709', 'Darby smelts iron with coke', 'cheaper iron, not limited by charcoal', 'p'],
    ['1712', 'Newcomen’s steam engine', 'pumped water out of mines', 'p'],
    ['1733', 'Kay’s flying shuttle', 'faster weaving; more demand for yarn', 't'],
    ['1761', 'Bridgewater Canal opens', 'halved the cost of coal in Manchester', 'm'],
    ['c. 1764', 'Hargreaves’s spinning jenny', 'one worker spun several threads', 't'],
    ['1769', 'Arkwright’s water frame', 'strong yarn from water power', 't'],
    ['1769', 'Watt’s separate condenser', 'much more efficient steam engine', 'p'],
    ['1779', 'Crompton’s spinning mule', 'fine, strong yarn in quantity', 't'],
    ['1785', 'Cartwright’s power loom', 'mechanised weaving', 't'],
    ['1825', 'Stockton and Darlington Railway', 'first public steam railway', 'm'],
    ['1830', 'Liverpool and Manchester Railway', 'first inter-city line fully by steam', 'm'],
  ];
  const col = { p: C.rust, t: C.tealDark, m: C.blue };
  const rh = 58, y0 = 130;
  let b = panel(30, 110, 840, ev.length * rh + 40) + line(180, y0 + 10, 180, y0 + ev.length * rh - 20, { w: 4 });
  ev.forEach(([yr, h, d, c], i) => {
    const y = y0 + i * rh;
    b += tx(160, y + 31, yr, { size: 19, weight: 700, anchor: 'end', fill: col[c] });
    b += `<circle cx="180" cy="${y + 24}" r="9" fill="${col[c]}" stroke="${C.ink}" stroke-width="2"/>`;
    b += tx(210, y + 31, h, { size: 18, weight: 700 }) + tx(560, y + 31, d, { size: 16, fill: C.muted });
  });
  const ly = 110 + ev.length * rh + 40 + 30;
  [['power and iron', C.rust], ['textiles', C.tealDark], ['transport', C.blue]].forEach(([t2, c], i) => { b += `<circle cx="${250 + i * 180}" cy="${ly}" r="9" fill="${c}" stroke="${C.ink}" stroke-width="2"/>` + tx(266 + i * 180, ly + 6, t2, { size: 16 }); });
  fig('02-inventions-timeline', 'Key inventions, 1709–1830', b, ly + 30,
    'A vertical timeline: Darby smelts iron with coke (1709), Newcomen’s steam engine (1712), Kay’s flying shuttle (1733), the Bridgewater Canal (1761), the spinning jenny (about 1764), Arkwright’s water frame and Watt’s separate condenser (1769), Crompton’s mule (1779), Cartwright’s power loom (1785), the Stockton and Darlington Railway (1825) and the Liverpool and Manchester Railway (1830), colour-coded as power, textiles or transport.',
    'Get the dates right: Newcomen’s engine (1712) came long before Watt’s condenser (1769).',
    '## Key inventions, with dates');
}

// 03 Challenge and response
{
  let b = label(270, 140, 'Textiles: a back-and-forth', { anchor: 'middle' });
  b += cycle(270, 375, 175, [
    { title: 'Faster weaving', body: 'flying shuttle' },
    { title: 'More demand for yarn' },
    { title: 'Spinning mechanised', body: 'jenny, frame, mule' },
    { title: 'Faster weaving needed', body: 'power loom' },
  ], { bw: 170, bh: 96, start: -90 });
  b += label(700, 140, 'Power: one need leads to the next', { anchor: 'middle' });
  const ch = chainV(560, 160, 280, [
    { title: 'Machines need power' }, { title: 'Water gives way to steam' }, { title: 'Steam needs coal' }, { title: 'Coal needs better transport', body: 'canals, then railways', fill: C.cream, edge: C.olive },
  ], { gap: 40, tsize: 18 });
  b += ch.s;
  const n = note(30, 640, 840, 'Using the chain shows causality, which scores better than a list.', { size: 18 });
  fig('03-challenge-response', 'Challenge and response', b + n.s, 640 + n.h + 30,
    'Left: a loop in which faster weaving raises demand for yarn, spinning is mechanised, and faster weaving is needed again. Right: a chain in which machines need power, water gives way to steam, steam needs coal, and coal needs better transport.',
    'Each invention created the problem the next one solved.',
    '## Key inventions, with dates');
}

// 04 Later industrialisers
{
  const rows = [
    ['Britain', 1760, 'first, c. 1760–1840', C.mustard],
    ['USA', 1865, 'mainly after the Civil War (1861–1865)', C.tealLight],
    ['Japan', 1868, 'after the Meiji Restoration (1868): state copied Western technology', C.tealLight],
    ['Germany', 1871, 'fast after unification (1871): steel, chemicals, electrical goods', C.tealLight],
    ['USSR', 1928, 'Five-Year Plans: state-planned heavy industry', C.tealLight],
    ['South Korea, Taiwan, Singapore, Hong Kong', 1960, 'from the 1960s: export-led manufacturing', C.tealLight],
    ['China', 1978, 'reforms from 1978; Shenzhen SEZ (1980)', C.tealLight],
  ];
  const X = (yr) => 330 + ((yr - 1750) / 250) * 520;
  let b = panel(30, 110, 840, 80 + rows.length * 66);
  for (let yr = 1750; yr <= 2000; yr += 50) b += line(X(yr), 130, X(yr), 150 + rows.length * 66, { color: C.panelEdge, w: 1.5, dash: '4 4' }) + tx(X(yr), 175 + rows.length * 66, String(yr), { size: 15, anchor: 'middle', fill: C.muted });
  rows.forEach(([c, yr, d, f], i) => {
    const y = 140 + i * 66;
    b += lines(50, y + 22, wrap(c, 250, 17 * 1.08), { size: 17, weight: 700 }, 20);
    b += `<rect x="${X(yr)}" y="${y + 4}" width="${X(2000) - X(yr)}" height="18" rx="9" fill="${f}" stroke="${i ? C.tealDark : C.olive}" stroke-width="2"/>`;
    b += `<circle cx="${X(yr)}" cy="${y + 13}" r="8" fill="${i ? C.tealDark : C.olive}"/>`;
    const tw = wrap(d, 500, 15);
    b += tx(330, y + 46, d, { size: 15, fill: C.muted });
  });
  const yN = 110 + 80 + rows.length * 66 + 30;
  const n = note(30, yN, 840, 'Later industrialisers borrowed technology and leaned on the state far more than Britain did, so they changed faster.', { size: 17 });
  fig('04-later-industrialisers', 'Who industrialised when', b + n.s, yN + n.h + 30,
    'A timeline of when industrialisation took off: Britain about 1760, the USA after the Civil War, Japan after the Meiji Restoration in 1868, Germany after unification in 1871, the USSR with Five-Year Plans from 1928, the East Asian economies from the 1960s and China with reforms from 1978.',
    'Later starters borrowed technology and relied on the state, so they moved faster.',
    '## Later industrialisation');
}

// 05 Work: from domestic system to reform
{
  let b = '';
  b += box(30, 110, 410, 170, { title: 'Domestic system', body: 'the putting-out system: families spun and wove at home', fill: C.cream, edge: C.olive, align: 'middle', valign: 'middle' });
  b += box(460, 110, 410, 170, { title: 'Factory system', body: 'set by clock and machine, often 12–14 hours; fines for lateness; women and children cheap labour', fill: C.tealLight, edge: C.tealDark, align: 'middle' });
  b += arrow(420, 195, 480, 195, { w: 5 });
  b += label(30, 320, 'Responses');
  const r = [
    ['1811–1816', 'Luddites', 'skilled hand workers broke machines'],
    ['', 'Trade unions grow', 'workers organised'],
    ['1838–1848', 'Chartists', 'demanded the vote for working men'],
  ];
  r.forEach(([d, h, s], i) => { b += box(30 + i * 285, 335, 270, 120, { title: h, body: d ? `${d}: ${s}` : s, fill: C.panel, edge: C.panelEdge, align: 'middle', tsize: 19 }); });
  b += label(30, 495, 'Slow reform');
  b += box(30, 510, 410, 130, { title: 'Factory Act 1833', body: 'no children under nine in textile mills; limited hours for older children; factory inspectors', fill: '#eaf3f1', edge: C.tealDark });
  b += box(460, 510, 410, 130, { title: 'Mines Act 1842', body: 'banned women and girls, and boys under ten, from working underground', fill: '#eaf3f1', edge: C.tealDark });
  fig('05-work-and-reform', 'Work: from home to factory to reform', b, 670,
    'Work moved from the domestic putting-out system to factories run by clock and machine for 12 to 14 hours a day. Responses included the Luddites, growing trade unions and the Chartists. Reform followed slowly with the Factory Act of 1833 and the Mines Act of 1842.',
    'Factory work provoked protest and organisation before reform slowly followed.',
    '## Impacts on work');
}

// 06 Harrowby growth
{
  const base = 560, sc = 380 / 96000;
  const d = [[1801, 12000], [1831, 39000], [1861, 96000]];
  let b = panel(30, 110, 840, 560) + line(90, base, 560, base, { w: 2.5 }) + tx(325, 150, 'Harrowby (fictional mill town), population', { size: 17, weight: 700, fill: C.tealDark, anchor: 'middle' });
  d.forEach(([yr, p], i) => {
    const x = 130 + i * 145, h = p * sc;
    b += `<rect x="${x}" y="${base - h}" width="100" height="${h}" fill="${i === 2 ? C.mustard : C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`;
    b += tx(x + 50, base - h - 10, p.toLocaleString('en-GB'), { size: 17, weight: 700, anchor: 'middle' }) + tx(x + 50, base + 28, String(yr), { size: 17, anchor: 'middle', weight: 600 });
  });
  const side = (y, h, a, b2, c) => box(590, y, 260, h, { title: a, body: b2, fill: c === 'p' ? C.cream : C.tealLight, edge: c === 'p' ? C.olive : C.tealDark, tsize: 18, bsize: 16 });
  b += side(140, 125, '1801–1831', '+225%\n+27,000 people', 'a');
  b += side(285, 125, '1831–1861', '+146.2%\n+57,000 people', 'a');
  b += side(430, 125, '1801–1861', '+700%: eightfold\nin 60 years', 'p');
  b += tx(325, 620, 'smaller % growth after 1831, but more extra people', { size: 16, anchor: 'middle', fill: C.rust, weight: 700 });
  fig('06-harrowby-growth', 'Percentage growth or extra people?', b, 700,
    'Bars for fictional Harrowby: 12,000 people in 1801, 39,000 in 1831 and 96,000 in 1861. Growth was 225% (27,000 people) from 1801 to 1831 and 146.2% (57,000 people) from 1831 to 1861; overall it was 700%, an eightfold rise.',
    'Percentage growth fell after 1831 while the number of extra people rose: say which measure you mean.',
    '## Impacts on cities');
}

// 07 Norland employment by sector
{
  const d = [[1800, 62, 22, 16], [1900, 18, 46, 36], [2020, 2, 17, 81]];
  const cols = [[C.grass, 'Primary'], [C.rust, 'Secondary'], [C.teal, 'Tertiary']];
  const L = 170, Wd = 640;
  let b = panel(30, 110, 840, 520) + tx(450, 150, 'Norland (fictional data): share of jobs by sector', { size: 17, weight: 700, fill: C.tealDark, anchor: 'middle' });
  d.forEach(([yr, ...v], i) => {
    const y = 180 + i * 110; let x = L;
    b += tx(L - 20, y + 45, String(yr), { size: 20, weight: 700, anchor: 'end' });
    v.forEach((p, k) => {
      const w = (p / 100) * Wd;
      b += `<rect x="${x}" y="${y}" width="${w}" height="70" fill="${cols[k][0]}" stroke="#fff" stroke-width="2"/>`;
      if (w > 34) b += tx(x + w / 2, y + 42, `${p}%`, { size: 17, weight: 700, anchor: 'middle', fill: k === 2 ? C.ink : '#fff' });
      x += w;
    });
    if (v[0] < 5) b += tx(L + 4, y + 92, `primary ${v[0]}%`, { size: 15, fill: C.muted });
  });
  cols.forEach(([c, s], k) => { b += `<rect x="${250 + k * 160}" y="530" width="22" height="22" fill="${c}"/>` + tx(280 + k * 160, 548, s, { size: 16 }); });
  b += tx(450, 600, 'Secondary: +24 percentage points (1800–1900), then −29 (1900–2020)', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  const n = note(30, 650, 840, 'A change from 22% to 46% is 24 percentage points, not a “24% increase”.', { size: 17 });
  fig('07-employment-sectors', 'Industrialisation, then deindustrialisation', b + n.s, 650 + n.h + 30,
    'Stacked bars for fictional Norland. In 1800 jobs were 62% primary, 22% secondary and 16% tertiary; in 1900, 18%, 46% and 36%; in 2020, 2%, 17% and 81%. Secondary rose 24 percentage points then fell 29, while tertiary rose 45 points after 1900.',
    'Manufacturing rose then fell as services took over: measure the change in percentage points.',
    '## Technology today');
}

// 08 Planning an investigation
{
  const r = rowList(30, 110, 840, [
    ['1', 'Research question', 'Focused, answerable, open: “How far did the 1833 Factory Act improve conditions for child workers in textile mills?”'],
    ['2', 'Justify it', 'Why it matters and how it links to a concept such as causality or change.'],
    ['3', 'Method', 'Primary sources (factory reports, census tables, letters) and secondary sources (historians, textbooks).'],
    ['4', 'Action plan', 'Steps with dates, so the work is manageable.'],
    ['5', 'Recording and referencing', 'Every source noted in one consistent format.'],
    ['6', 'Evaluation', 'Judge the source range, what went well and what you would change.'],
  ], { tsize: 20, bsize: 16, minH: 84, r: 24, gap: 10 });
  fig('08-investigation-plan', 'Planning an investigation (criterion B)', r.s, 110 + r.h + 30,
    'Six steps for a criterion B plan: a focused research question such as how far the 1833 Factory Act improved conditions for child workers, a justification, a method using primary and secondary sources, a dated action plan, consistent recording and referencing, and an evaluation.',
    'Six steps take a plan from a focused question to an honest evaluation.',
    '## Planning an investigation (criterion B)');
}
