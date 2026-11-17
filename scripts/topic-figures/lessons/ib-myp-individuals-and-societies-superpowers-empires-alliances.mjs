import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-individuals-and-societies-superpowers-empires-alliances';

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

// 01 Hard and soft power
{
  let b = '';
  b += box(30, 120, 410, 260, { title: 'Hard power', body: 'influence through force or payment\n\n• armed forces\n• sanctions\n• trade deals\n• aid', fill: '#fbeee6', edge: C.rust, tfill: C.rust, bfill: C.ink, tsize: 24, bsize: 18, valign: 'top' });
  b += box(460, 120, 410, 260, { title: 'Soft power', body: 'influence through attraction\n\n• culture\n• values\n• education\n• media', fill: '#eaf3f1', edge: C.tealDark, tfill: C.tealDark, bfill: C.ink, tsize: 24, bsize: 18, valign: 'top' });
  b += tx(665, 360, 'term linked to Joseph Nye (around 1990)', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  b += box(30, 400, 840, 90, { title: 'Power', body: 'the ability of a state to get the outcomes it wants, including by influencing others', fill: C.mustard, edge: C.ink, align: 'middle' });
  fig('01-hard-soft-power', 'Two kinds of power', b, 520,
    'Hard power works through force or payment: armed forces, sanctions, trade deals and aid. Soft power works through attraction: culture, values, education and media, a term linked to Joseph Nye. Both are ways for a state to get the outcomes it wants.',
    'States get what they want by pushing and paying, or by attracting.',
    '## Key terms');
}

// 02 Superpower indicators
{
  const sp = [
    { x: 30, y: 120, w: 270, h: 140, title: 'Economic', body: 'large GDP, major trader, widely used currency, global companies' },
    { x: 600, y: 120, w: 270, h: 140, title: 'Military', body: 'big defence budget, nuclear weapons, forces sent far from home' },
    { x: 30, y: 460, w: 270, h: 140, title: 'Political', body: 'permanent UN Security Council seat, alliance leader, sway over others' },
    { x: 600, y: 460, w: 270, h: 140, title: 'Cultural', body: 'films, music, language, universities and brands used worldwide' },
    { x: 315, y: 470, w: 270, h: 130, title: 'Demographic and resources', body: 'large population and land area; energy and minerals' },
  ].map((s) => ({ ...s, fill: C.panel, edge: C.tealDark }));
  const b = hub(450, 300, 110, ['Superpower', 'global reach', 'across fields'], sp, { size: 19 });
  const n = note(30, 625, 840, 'No single measure decides it: a superpower scores highly on most indicators at once.', { size: 17 });
  fig('02-superpower-indicators', 'What makes a superpower?', b + n.s, 625 + n.h + 30,
    'A superpower at the centre linked to five groups of indicators: economic, military, political, cultural, and demographic and resources, each with examples such as a permanent UN Security Council seat or a widely used currency.',
    'Superpower status needs high scores on most indicators, not just one.',
    '## What makes a superpower?');
}

// 03 Polarity
{
  const dot = (x, y, r, f, lab) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + (lab ? tx(x, y + r + 20, lab, { size: 15, weight: 700, anchor: 'middle' }) : '');
  const small = (cx, cy, n, R) => Array.from({ length: n }, (_, i) => { const a = (i / n) * 2 * Math.PI + 0.3; return `<circle cx="${(cx + R * Math.cos(a)).toFixed(1)}" cy="${(cy + R * Math.sin(a)).toFixed(1)}" r="8" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="1.5"/>`; }).join('');
  let b = '';
  const col = (x, h, sub, when) => panel(x, 110, 270, 470) + tx(x + 135, 148, h, { size: 22, weight: 700, anchor: 'middle' }) + tx(x + 135, 174, sub, { size: 15, anchor: 'middle', fill: C.muted }) + tx(x + 135, 555, when, { size: 16, anchor: 'middle', weight: 600, fill: C.tealDark });
  b += col(30, 'Bipolar', 'two powers lead rival blocs', 'Cold War');
  b += small(165, 270, 6, 58) + dot(165, 270, 30, C.mustard, '') + tx(165, 362, 'United States', { size: 15, weight: 700, anchor: 'middle' });
  b += small(165, 435, 6, 58) + dot(165, 435, 30, C.rust, '') + tx(165, 527, 'Soviet Union', { size: 15, weight: 700, anchor: 'middle' });
  b += col(315, 'Unipolar', 'one dominant power', 'after December 1991');
  b += small(450, 340, 12, 105) + dot(450, 340, 50, C.mustard, '') + tx(450, 490, 'United States', { size: 15, weight: 700, anchor: 'middle' });
  b += col(600, 'Multipolar?', 'several centres of power', 'today: debated');
  [[680, 230, 'United States'], [800, 230, 'China'], [670, 345, 'EU'], [770, 345, 'India'], [735, 440, 'Russia']].forEach(([x, y, l], i) => { b += dot(x, y, i < 2 ? 30 : 24, i < 2 ? C.mustard : C.cream, l); });
  b += tx(735, 520, 'and groupings such as BRICS', { size: 15, anchor: 'middle', fill: C.muted });
  const n = note(30, 600, 840, 'Is China an emerging superpower, or still mainly regional? Present both views with evidence.', { size: 17 });
  fig('03-polarity', 'How power is spread: polarity', b + n.s, 600 + n.h + 30,
    'Three panels. Bipolar: the United States and the Soviet Union lead rival blocs in the Cold War. Unipolar: the United States dominates after the Soviet break-up in December 1991. Multipolar, debated today: the United States, China, the EU, India, Russia and groupings such as BRICS all hold weight.',
    'From two blocs, to one dominant power, to a debated multipolar world.',
    '## What makes a superpower?');
}

// 04 Arvenia vs Kestria
{
  const cols = [{ w: 170, head: 'Fictional state' }, { w: 130, head: 'GDP ($bn)' }, { w: 150, head: 'Population (m)' }, { w: 160, head: 'GDP per capita' }, { w: 230, head: 'Defence % of GDP' }];
  const tb = table(30, 110, cols, [
    ['Arvenia', '3,000', '120', '$25,000', '90 ÷ 3,000 = 3.0%'],
    ['Kestria', '1,200', '20', '$60,000', '24 ÷ 1,200 = 2.0%'],
  ], { size: 18 });
  let b = tb.s; const y = 110 + tb.h + 24;
  b += box(30, y, 410, 150, { title: 'Arvenia: more hard power', body: 'larger economy; spends more on defence in total and as a share of GDP', fill: C.cream, edge: C.olive, tsize: 19 });
  b += box(460, y, 410, 150, { title: 'Kestria: richer people', body: 'higher GDP per capita, but a smaller total economy', fill: C.tealLight, edge: C.tealDark, tsize: 19 });
  const n = note(30, y + 170, 840, 'Total size matters most for global reach, but a judgement also needs political and cultural evidence.', { size: 17 });
  fig('04-indicator-worked-example', 'Using indicators: two fictional states', b + n.s, y + 170 + n.h + 30,
    'A table for two fictional states. Arvenia: GDP 3,000 billion dollars, 120 million people, 25,000 dollars per head, defence 3.0% of GDP. Kestria: GDP 1,200 billion, 20 million people, 60,000 dollars per head, defence 2.0% of GDP. Arvenia has more hard power; Kestria’s people are richer on average.',
    'A bigger economy and defence budget mean more hard power, even if people elsewhere are richer.',
    '## What makes a superpower?');
}

// 05 Why empires rise and decline
{
  let b = panel(30, 110, 410, 560, '#eaf3f1', C.tealDark) + tx(235, 150, '▲ Why empires rise', { size: 22, weight: 700, anchor: 'middle', fill: C.tealDark });
  const rise = [['Economic', 'wealth pays for armies and officials'], ['Military and technological', 'better weapons, ships, organisation'], ['Political', 'roads, laws, tax collection'], ['Ideological', 'religion, “civilising mission”, prestige'], ['Opportunity', 'weak or divided rivals']];
  rise.forEach(([h, d], i) => { b += box(50, 172 + i * 96, 370, 84, { title: h, body: d, tsize: 18, bsize: 15, pad: 12 }); });
  b += panel(460, 110, 410, 560, '#fbeee6', C.rust) + tx(665, 150, '▼ Why empires decline', { size: 22, weight: 700, anchor: 'middle', fill: C.rust });
  const fall = [['Imperial overstretch', 'commitments abroad cost more than the economy can support (Paul Kennedy, 1987)'], ['Internal', 'stagnation, corruption, divided leadership, costly reform'], ['External', 'defeat in war, rival powers'], ['From the governed', 'nationalist and independence movements, e.g. decolonisation after 1945']];
  let y = 172;
  fall.forEach(([h, d]) => { const hh = boxH(370, { title: h, body: d, tsize: 18, bsize: 15, pad: 12 }) + 8; b += box(480, y, 370, hh, { title: h, body: d, tsize: 18, bsize: 15, pad: 12 }); y += hh + 12; });
  const n = note(30, 690, 840, 'Show how causes interact and rank them: the Soviet Union mixed war, stagnation, reform and nationalism before 1991.', { size: 16, weight: 600 });
  fig('05-empires-rise-decline', 'Why empires rise and decline', b + n.s, 690 + n.h + 30,
    'Two columns. Empires rise through economic wealth, military and technological advantage, political systems, ideology and weak rivals. They decline through imperial overstretch, internal problems, external defeat and pressure from the governed, such as decolonisation after 1945.',
    'Rise and decline both have several interacting causes; rank them rather than list them.',
    '## Empires');
}

// 06 Valdoria territory
{
  const d = [[1600, 0.8], [1700, 2.0], [1800, 3.5], [1850, 3.1], [1900, 1.4]];
  const L = 120, R = 820, T = 170, B = 500;
  const X = (y) => L + ((y - 1600) / 300) * (R - L), Y = (v) => B - (v / 4) * (B - T);
  let b = panel(30, 110, 840, 470) + tx(450, 146, 'Fictional empire of Valdoria: territory, million km²', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  for (let v = 0; v <= 4; v++) b += line(L, Y(v), R, Y(v), { color: C.panelEdge, w: 1.2 }) + tx(L - 12, Y(v) + 5, String(v), { size: 15, anchor: 'end', fill: C.muted });
  b += line(L, B, R, B, { w: 2.5 }) + line(L, T, L, B, { w: 2.5 });
  b += path(d.map(([y, v], i) => `${i ? 'L' : 'M'}${X(y)},${Y(v)}`).join(' '), { stroke: C.tealDark, w: 4 });
  d.forEach(([y, v]) => { b += `<circle cx="${X(y)}" cy="${Y(v)}" r="7" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` + tx(X(y) + (y === 1600 ? 24 : 0), Y(v) - 14, v.toFixed(1), { size: 16, weight: 700, anchor: 'middle' }) + tx(X(y), B + 26, String(y), { size: 16, anchor: 'middle' }); });
  const lab = (x, y, s, c) => tx(x, y, s, { size: 17, weight: 700, anchor: 'middle', fill: c });
  b += lab((X(1600) + X(1700)) / 2 - 30, Y(1.85), '+150%', C.tealDark) + lab((X(1700) + X(1800)) / 2 - 40, Y(3.15), '+75%', C.tealDark);
  b += lab(X(1825) + 30, Y(3.55), '−11.4%', C.rust) + lab(X(1875) + 40, Y(2.5), '−54.8%', C.rust);
  const n = note(30, 600, 840, 'The data shows WHEN decline happened, not WHY: for that, use records of wars or revolts.', { size: 17 });
  fig('06-valdoria-territory', 'Describing change over time', b + n.s, 600 + n.h + 30,
    'A line graph of fictional Valdoria’s territory: 0.8 million square kilometres in 1600, 2.0 in 1700, a peak of 3.5 in 1800, 3.1 in 1850 and 1.4 in 1900. Growth was +150% then +75%; decline was −11.4% to 1850 and −54.8% to 1900.',
    'Use the numbers and the shape, but remember the data shows when, not why.',
    '## Empires');
}

// 07 Intergovernmental vs supranational
{
  let b = panel(30, 110, 840, 330);
  b += `<rect x="70" y="250" width="760" height="22" rx="11" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2"/>`;
  b += tx(70, 235, 'Intergovernmental', { size: 20, weight: 700, fill: C.tealDark }) + tx(830, 235, 'Supranational', { size: 20, weight: 700, fill: C.olive, anchor: 'end' });
  b += tx(70, 160, 'states keep full sovereignty;', { size: 16, fill: C.muted }) + tx(70, 182, 'decisions need every member', { size: 16, fill: C.muted });
  b += tx(830, 160, 'states pool some sovereignty;', { size: 16, fill: C.muted, anchor: 'end' }) + tx(830, 182, 'rules above national level bind', { size: 16, fill: C.muted, anchor: 'end' });
  b += `<rect x="90" y="290" width="380" height="120" rx="12" fill="#ffffff" stroke="${C.tealDark}" stroke-width="2.2"/>` + tx(280, 320, 'Most organisations', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  ['UN', 'NATO', 'ASEAN', 'AU'].forEach((s, i) => { b += box(105 + i * 90, 338, 80, 52, { title: s, tsize: 17, align: 'middle', fill: C.tealLight, edge: C.tealDark, pad: 8 }); });
  b += box(640, 300, 180, 100, { title: 'EU', body: 'strong supranational features', tsize: 24, bsize: 15, align: 'middle', fill: C.mustard, edge: C.ink, pad: 10 });
  b += arrow(280, 292, 280, 276, { w: 2.5 }) + arrow(730, 298, 730, 276, { w: 2.5 });
  const j = box(30, 460, 410, 170, { title: 'Why states join', body: '• security (collective defence)\n• economic gain (larger markets)\n• influence (a stronger voice)\n• shared values', fill: '#eaf3f1', edge: C.tealDark, valign: 'top', bsize: 16 });
  const k = box(460, 460, 410, 170, { title: 'The cost: less freedom of action', body: '• follow shared rules\n• pay contributions\n• may be drawn into others’ disputes', fill: '#fbeee6', edge: C.rust, valign: 'top', bsize: 16 });
  const tb = { s: j + k, h: 170 };
  fig('07-intergovernmental-supranational', 'Working together: how much sovereignty?', b + tb.s, 460 + tb.h + 30,
    'A scale from intergovernmental, where states keep full sovereignty and decisions need every member, to supranational, where states pool sovereignty. The UN, NATO, ASEAN and the AU sit at the intergovernmental end; the EU has strong supranational features. Below: states join for security, economic gain, influence and shared values, at the cost of freedom of action.',
    'Most organisations are intergovernmental; the EU stands out for pooling sovereignty.',
    '## Supra-national alliances and organisations');
}

// 08 OPVL on Source X
{
  let b = '';
  b += box(30, 115, 840, 110, { title: 'Source X (written for Marlbridge, fictional)', body: 'Colonial governor’s annual report: “The new railway has brought order and trade… the people are grateful.”', fill: C.cream, edge: C.olive, align: 'middle', bsize: 17 });
  b += arrow(450, 229, 450, 266);
  b += box(150, 270, 600, 110, { title: 'Origin and purpose', body: 'written by the official in charge, for superiors who judge his success', fill: C.mustard, edge: C.ink, align: 'middle' });
  b += arrow(330, 384, 230, 432) + arrow(570, 384, 670, 432);
  b += box(30, 436, 410, 150, { title: '✓ Value', body: 'the government’s official view of the railway, and what the governor wanted superiors to believe', fill: '#eaf3f1', edge: C.tealDark, tfill: C.tealDark, bfill: C.ink });
  b += box(460, 436, 410, 150, { title: '✗ Limitation', body: 'a reason to show success; no local voices, so weak evidence that people were “grateful”', fill: '#fbeee6', edge: C.rust, tfill: C.rust, bfill: C.ink });
  const n = note(30, 606, 840, 'Value and limitation both come from the same fact about origin.', { size: 18 });
  fig('08-opvl-source-x', 'Evaluating a source on empire', b + n.s, 606 + n.h + 30,
    'A fictional colonial governor’s report praising a railway leads to its origin and purpose: written by the official in charge for superiors judging his success. From that one fact come its value, the official view, and its limitation, a motive to show success and no local voices.',
    'Tie value and limitation to the source’s origin and purpose, not to generic points.',
    '## Criterion D: evaluating sources on power and empire');
}
