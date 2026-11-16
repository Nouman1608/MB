import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-individuals-and-societies-trade-aid-and-exchange';

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

// 01 Balance of trade
{
  const sc = 10;
  let b = panel(30, 110, 840, 400) + tx(450, 148, 'Norland (fictional), this year, billions of dollars', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += tx(200, 215, 'Exports', { size: 20, weight: 700, anchor: 'end' }) + rect(220, 180, 48 * sc, 56, C.teal, C.tealDark, 6, 2.2) + tx(230 + 48 * sc, 216, '48 bn', { size: 19, weight: 700 });
  b += tx(200, 295, 'Imports', { size: 20, weight: 700, anchor: 'end' }) + rect(220, 260, 55 * sc, 56, '#efcdb8', C.rust, 6, 2.2) + tx(230 + 55 * sc, 296, '55 bn', { size: 19, weight: 700 });
  b += line(220 + 48 * sc, 240, 220 + 48 * sc, 345, { color: C.rust, w: 2, dash: '5 4' }) + line(220 + 55 * sc, 320, 220 + 55 * sc, 345, { color: C.rust, w: 2, dash: '5 4' });
  b += `<path d="M${220 + 48 * sc},345 L${220 + 55 * sc},345" stroke="${C.rust}" stroke-width="4"/>` + tx(220 + 51.5 * sc, 372, '−7 bn', { size: 20, weight: 700, anchor: 'middle', fill: C.rust });
  b += tx(450, 420, 'Balance of trade = exports − imports = 48 − 55 = −7 bn: a trade deficit', { size: 18, weight: 700, anchor: 'middle' });
  b += tx(450, 455, 'Exports rose from 40 bn last year: (48 − 40) ÷ 40 × 100 = 20%', { size: 16, anchor: 'middle', fill: C.muted });
  const n = note(30, 530, 840, 'Keep the minus sign: “7 bn” alone hides whether it is a deficit.', { size: 18 });
  fig('01-balance-of-trade', 'Balance of trade: surplus or deficit?', b + n.s, 530 + n.h + 30,
    'Bars for fictional Norland: exports of 48 billion dollars against imports of 55 billion, a balance of minus 7 billion, which is a trade deficit. Exports rose 20% from 40 billion the year before.',
    'Exports minus imports: a negative answer is a deficit, so keep the sign.',
    '## Imports, exports and the balance of trade');
}

// 02 Comparative advantage
{
  const cols = [{ w: 180, head: 'Per worker per day' }, { w: 150, head: 'Coffee (sacks)' }, { w: 160, head: 'Textiles (rolls)' }, { w: 350, head: 'Opportunity cost' }];
  const tb = table(30, 110, cols, [
    ['Arlen', '12', '6', '1 roll costs 2 sacks; 1 sack costs 0.5 rolls'],
    ['Belmar', '4', '4', '1 roll costs 1 sack; 1 sack costs 1 roll'],
  ], { size: 18 });
  let b = tb.s; const y = 110 + tb.h + 24;
  b += box(30, y, 840, 70, { title: 'Absolute advantage: Arlen makes more of BOTH goods', fill: C.panel, align: 'middle', tsize: 19 });
  b += box(30, y + 90, 410, 150, { title: 'Arlen → coffee', body: 'gives up 0.5 rolls per sack, against Belmar’s 1 roll: lower opportunity cost', fill: C.cream, edge: C.olive, tsize: 21 });
  b += box(460, y + 90, 410, 150, { title: 'Belmar → textiles', body: 'gives up 1 sack per roll, against Arlen’s 2 sacks: lower opportunity cost', fill: C.tealLight, edge: C.tealDark, tsize: 21 });
  const n = note(30, y + 260, 840, 'Specialise by comparative advantage (Ricardo, 1817), even when one country is better at everything.', { size: 17 });
  fig('02-comparative-advantage', 'Comparative advantage', b + n.s, y + 260 + n.h + 30,
    'Per worker per day, Arlen makes 12 sacks of coffee or 6 rolls of textiles; Belmar makes 4 or 4. Arlen has the absolute advantage in both, but Belmar gives up only 1 sack per roll against Arlen’s 2, so Belmar has the comparative advantage in textiles and Arlen in coffee.',
    'The lower opportunity cost, not the bigger output, decides who should specialise in what.',
    '## Why countries trade: absolute and comparative advantage');
}

// 03 Gains from specialisation and trade
{
  const sc = 4.4;
  const pair = (x, y, lab, c, t2, hl) => {
    let s = tx(x + 95, y - 12, lab, { size: 17, weight: 700, anchor: 'middle', fill: hl ? C.tealDark : C.muted });
    s += rect(x, y + 230 - c * sc, 80, c * sc, '#c79a62', C.olive, 4, 2) + tx(x + 40, y + 222 - c * sc, String(c), { size: 17, weight: 700, anchor: 'middle' });
    s += rect(x + 100, y + 230 - t2 * sc, 80, t2 * sc, C.teal, C.tealDark, 4, 2) + tx(x + 140, y + 222 - t2 * sc, String(t2), { size: 17, weight: 700, anchor: 'middle' });
    return s;
  };
  let b = panel(30, 110, 410, 440) + tx(235, 148, 'Arlen', { size: 24, weight: 700, anchor: 'middle' });
  b += pair(50, 200, 'before trade', 60, 30) + pair(250, 200, 'after trade', 60, 34, 1);
  b += panel(460, 110, 410, 440) + tx(665, 148, 'Belmar', { size: 24, weight: 700, anchor: 'middle' });
  b += pair(480, 200, 'before trade', 20, 20) + pair(680, 200, 'after trade', 24, 24, 1);
  [[50, 430], [480, 430]].forEach(([x]) => { b += line(x, 430, x + 380, 430, { w: 2 }); });
  b += `<rect x="190" y="470" width="20" height="18" fill="#c79a62" stroke="${C.olive}" stroke-width="2"/>` + tx(218, 485, 'coffee (sacks)', { size: 16 }) + `<rect x="560" y="470" width="20" height="18" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2"/>` + tx(588, 485, 'textiles (rolls)', { size: 16 });
  b += tx(450, 525, 'Belmar swaps 16 rolls for 24 sacks: 1 roll = 1.5 sacks, between the opportunity costs of 1 and 2', { size: 15, anchor: 'middle', fill: C.muted });
  const n = note(30, 570, 840, 'Total output rises from 80 coffee and 50 textiles to 84 and 58. Both countries end up with more.', { size: 17 });
  fig('03-gains-from-trade', 'Specialise, then trade: both gain', b + n.s, 570 + n.h + 30,
    'Before trade Arlen has 60 coffee and 30 textiles and Belmar 20 and 20. After specialising and swapping 16 rolls for 24 sacks, Arlen has 60 coffee and 34 textiles and Belmar 24 and 24. Total output rises from 80 coffee and 50 textiles to 84 and 58.',
    'Specialising by comparative advantage raises total output, and trade shares the gain.',
    '## Why countries trade: absolute and comparative advantage');
}

// 04 Protection tools and the debate
{
  let b = '';
  b += box(30, 115, 270, 190, { title: 'Tariff', body: 'a tax on imports\n\nimported bicycle 200 dollars + 15% = 200 × 1.15 = 230 dollars', fill: '#fbeee6', edge: C.rust, valign: 'top', tsize: 21 });
  b += box(315, 115, 270, 190, { title: 'Quota', body: 'a limit on the quantity that may be imported', fill: '#fbeee6', edge: C.rust, valign: 'top', tsize: 21 });
  b += box(600, 115, 270, 190, { title: 'Subsidy', body: 'a government payment to domestic producers so they can sell more cheaply', fill: '#fbeee6', edge: C.rust, valign: 'top', tsize: 21 });
  const cols = [{ w: 420, head: 'For protection' }, { w: 420, head: 'For free trade' }];
  const tb = table(30, 330, cols, [
    ['protects jobs in domestic firms', 'lower prices and more choice for consumers'],
    ['lets “infant” industries grow first', 'specialisation raises total output'],
    ['keeps key goods (food, medicine) in national hands', 'competition pushes firms to be efficient'],
  ], { size: 17, firstBold: false });
  const n = note(30, 330 + tb.h + 20, 840, 'The WTO (from 1995, taking over from GATT, 1947) sets trade rules and settles disputes.', { size: 16, weight: 600, fill: C.panel, edge: C.panelEdge });
  fig('04-protectionism', 'Free trade or protection?', b + tb.s + n.s, 330 + tb.h + 20 + n.h + 30,
    'Three protection tools: a tariff, a tax on imports that raises a 200-dollar bicycle to 230 dollars at 15%; a quota limiting import quantity; and a subsidy to domestic producers. Below, arguments for protection (jobs, infant industries, key goods) against arguments for free trade (prices and choice, specialisation, efficiency).',
    'Tariffs, quotas and subsidies shield home producers, at a cost to consumers and efficiency.',
    '## Free trade and protectionism');
}

// 05 Levels of integration
{
  const lv = [
    ['Free trade area', 'no tariffs between members; own tariffs on outsiders', 'USMCA; AfCFTA'],
    ['Customs union', '+ common external tariff', 'Mercosur (1991)'],
    ['Common market', '+ free movement of labour and capital', 'EU single market'],
    ['Economic union', '+ shared economic policies, sometimes one currency', 'euro area'],
  ];
  let b = '';
  lv.forEach(([h, d, e], i) => {
    const x = 30 + i * 60, y = 520 - i * 120, w = 840 - i * 60;
    b += box(x, y, w, 104, { title: h, body: d, fill: [C.tealLight, C.teal, C.cream, C.mustard][i], edge: i > 1 ? C.olive : C.tealDark, tsize: 20, bsize: 16, valign: 'middle' });
    b += tx(850, y + 60, e, { size: 15, anchor: 'end', fill: C.ink, italic: true, weight: 600 });
  });
  b += `<line x1="890" y1="610" x2="890" y2="150" stroke="${C.ink}" stroke-width="0"/>`;
  b += tx(45, 140, 'more integration ↑', { size: 16, weight: 700, fill: C.tealDark });
  const n = note(30, 650, 840, 'Each level adds to the one below. A free trade area has no common external tariff.', { size: 17 });
  fig('05-trade-bloc-levels', 'Levels of economic integration', b + n.s, 650 + n.h + 30,
    'A staircase of four levels: a free trade area such as USMCA or the African Continental Free Trade Area; a customs union adding a common external tariff, such as Mercosur; a common market adding free movement of labour and capital, such as the EU single market; and an economic union adding shared policies, such as the euro area.',
    'Each step up adds a layer: common tariff, then free movement, then shared policy.',
    '## Trade blocs');
}

// 06 Who gets the money
{
  const W = 700, x0 = 150;
  const bar = (y, lab, price, grower) => {
    const gw = (grower / 8.4) * W, tw = (price / 8.4) * W;
    return tx(x0 - 15, y + 30, lab, { size: 18, weight: 700, anchor: 'end' }) + tx(x0 - 15, y + 52, `${price.toFixed(2)} dollars`, { size: 15, anchor: 'end', fill: C.muted }) +
      rect(x0, y, gw, 64, C.mustard, C.ink, 4, 2) + rect(x0 + gw, y, tw - gw, 64, '#eef0f0', C.panelEdge, 4, 2) +
      tx(x0 + gw + 14, y + 40, 'processing, shipping, shops, tax', { size: 16, fill: C.muted });
  };
  let b = panel(30, 110, 840, 330) + tx(450, 148, 'A bag of coffee in a fictional supermarket', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += bar(175, 'Conventional', 8.0, 0.4) + tx(x0 + 2, 268, 'grower 0.40 = 5.0%', { size: 16, weight: 700 });
  b += bar(300, 'Fair trade', 8.4, 0.64) + tx(x0 + 2, 393, 'grower 0.64 = 7.6%', { size: 16, weight: 700 });
  b += box(30, 460, 410, 170, { title: 'How Fairtrade works', body: '• a minimum price, even when world prices fall\n• a Fairtrade Premium for projects producers choose\n• standards on work, child labour, environment', fill: '#eaf3f1', edge: C.tealDark, valign: 'top', bsize: 15.5 });
  b += box(460, 460, 410, 170, { title: 'Critics say', body: '• only a small share of trade is certified\n• certification costs money the poorest may lack\n• a guaranteed price may keep farmers in a crop', fill: '#fbeee6', edge: C.rust, valign: 'top', bsize: 15.5 });
  fig('06-fair-trade-share', 'Fair trade: who gets the money?', b, 660,
    'Two bars for a fictional bag of coffee. Conventional: 8.00 dollars, of which the grower gets 0.40, or 5.0%. Fair trade: 8.40 dollars, of which the grower gets 0.64, or 7.6%. Most of the price still goes to processing, shipping, shops and tax. Below, how Fairtrade works and what critics say.',
    'The grower’s share rises under fair trade, but most of the price still goes elsewhere.',
    '## Fair trade');
}

// 07 Types of aid
{
  let b = '';
  b += box(330, 115, 240, 64, { title: 'Aid', fill: C.mustard, edge: C.ink, align: 'middle', tsize: 22 });
  const who = [['Bilateral', 'government to government', 'a donor funds a road abroad'], ['Multilateral', 'donors pay an international body', 'World Bank; UN agencies'], ['Voluntary (NGO)', 'charities spend public donations', 'a charity digs village wells']];
  who.forEach(([h, d, e], i) => { const x = 30 + i * 285; b += arrow(450, 183, x + 135, 226, { w: 2.5 }) + box(x, 232, 270, 120, { title: h, body: d + '\ne.g. ' + e, fill: '#eaf3f1', edge: C.tealDark, tsize: 19, bsize: 15, align: 'middle' }); });
  b += label(30, 392, 'Also classified by time, conditions and approach');
  const pairs = [['Short-term (emergency)', 'relief after the Indian Ocean tsunami, 2004', 'Long-term (development)', 'schools, clinics, farm training'], ['Tied aid', 'must be spent on the donor’s goods or services', 'Untied', ''], ['Top-down', 'large government projects, such as a dam', 'Bottom-up', 'small projects run with local people']];
  const rows = [pairs[0], pairs[2]];
  rows.forEach(([a, ad, c, cd], i) => {
    const y = 408 + i * 120;
    b += box(30, y, 395, 104, { title: a, body: ad, tsize: 18, bsize: 15 }) + tx(450, y + 58, '↔', { size: 26, weight: 700, anchor: 'middle', fill: C.muted }) + box(475, y, 395, 104, { title: c, body: cd, tsize: 18, bsize: 15 });
  });
  b += box(30, 656, 840, 76, { title: 'Tied aid', body: 'must be spent on the donor’s goods or services, e.g. a loan that must buy the donor’s machinery', fill: '#fbeee6', edge: C.rust, tsize: 18, bsize: 15 });
  const n = note(30, 752, 840, 'UN target (1970): donors give 0.7% of GNI. Does aid work? It depends on type, purpose and management.', { size: 16, weight: 600 });
  fig('07-types-of-aid', 'Types of aid', b + n.s, 752 + n.h + 30,
    'Aid can be bilateral, government to government; multilateral, through bodies such as the World Bank; or voluntary, through charities. It is also short-term emergency relief or long-term development, top-down or bottom-up, and sometimes tied to spending on the donor’s goods. The UN target is 0.7% of donor GNI.',
    'Who gives it, for how long and on what terms all shape whether aid helps.',
    '## Aid');
}

// 08 Columbian Exchange
{
  let b = '';
  b += box(30, 140, 300, 380, { title: 'The Americas', fill: C.cream, edge: C.olive, align: 'middle', tsize: 24, valign: 'top' });
  b += box(570, 140, 300, 380, { title: 'Europe, Africa and Asia', fill: C.tealLight, edge: C.tealDark, align: 'middle', tsize: 22, valign: 'top' });
  b += arrow(335, 250, 562, 250, { w: 6, color: C.olive, marker: 'ahO' }) + tx(450, 220, 'after 1492', { size: 16, anchor: 'middle', fill: C.muted, weight: 600 });
  b += lines(450, 285, ['maize, potatoes,', 'tomatoes, cacao'], { size: 17, weight: 700, anchor: 'middle', fill: C.olive }, 22);
  b += arrow(565, 380, 338, 380, { w: 6, color: C.tealDark, marker: 'ahT' });
  b += lines(450, 415, ['horses, cattle,', 'wheat, sugar cane'], { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark }, 22);
  b += arrow(565, 480, 338, 480, { w: 6, color: C.rust, marker: 'ahR' }) + tx(450, 470, 'smallpox, measles', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  b += lines(180, 430, ['very large numbers', 'of Indigenous people', 'killed by disease'], { size: 16, anchor: 'middle', fill: C.rust, weight: 600 }, 21);
  const n = note(30, 545, 840, 'Trade moves more than goods: crops, animals, ideas and diseases. Globalization long before trade blocs.', { size: 17 });
  fig('08-columbian-exchange', 'The Columbian Exchange', b + n.s, 545 + n.h + 30,
    'After 1492, maize, potatoes, tomatoes and cacao moved from the Americas to Europe, Africa and Asia, while horses, cattle, wheat and sugar cane moved the other way. Smallpox and measles also crossed and killed very large numbers of Indigenous people in the Americas.',
    'Exchange carried crops, animals and deadly diseases in both directions.',
    '## Exchange in history');
}
