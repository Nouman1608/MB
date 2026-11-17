import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-dp-global-politics-core-interdependence';

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

// 01 Three dimensions
{
  const sp = [
    { x: 30, y: 400, w: 260, h: 140, title: 'Economic', body: 'trade, investment, supply chains, energy', fill: '#eaf3f1', edge: C.tealDark },
    { x: 320, y: 400, w: 260, h: 140, title: 'Security', body: 'defence arrangements, alliances, arms control', fill: C.cream, edge: C.olive },
    { x: 610, y: 400, w: 260, h: 140, title: 'Sustainability', body: 'environmental treaties; shared atmosphere and rivers', fill: C.tealLight, edge: C.tealDark },
  ];
  let b = hub(450, 240, 118, ['Interdependence', 'mutual reliance', 'on resources'], sp, { size: 19 });
  const n = note(30, 565, 840, 'Globalisation has increased interdependence and often changed power relationships.', { size: 17 });
  fig('01-three-dimensions', 'Three dimensions of interdependence', b + n.s, 565 + n.h + 30,
    'Interdependence, mutual reliance on access to the resources that sustain ways of life, has three dimensions: economic (trade, investment, supply chains, energy), security (defence arrangements, alliances, arms control) and sustainability (environmental treaties and shared resources).',
    'Economic, security and sustainability links make actors rely on each other.',
    '## The concept of interdependence');
}

// 02 Asymmetry: sensitivity vs vulnerability
{
  let b = panel(30, 110, 840, 270);
  b += `<circle cx="200" cy="245" r="80" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="3"/>` + tx(200, 240, 'Actor A', { size: 21, weight: 700, anchor: 'middle' }) + tx(200, 266, 'relies more', { size: 15, anchor: 'middle', fill: C.muted });
  b += `<circle cx="700" cy="245" r="80" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + tx(700, 240, 'Actor B', { size: 21, weight: 700, anchor: 'middle' }) + tx(700, 266, 'relies less', { size: 15, anchor: 'middle' });
  b += arrow(290, 215, 610, 215, { w: 9, color: C.tealDark, marker: 'ahT' }) + tx(450, 198, 'A depends heavily on B', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 });
  b += arrow(610, 285, 290, 285, { w: 3, color: C.olive, marker: 'ahO' }) + tx(450, 312, 'B depends a little on A', { size: 16, anchor: 'middle', fill: C.olive, weight: 600 });
  b += tx(700, 352, 'gains leverage', { size: 17, anchor: 'middle', weight: 700, fill: C.rust });
  b += box(30, 400, 410, 150, { title: 'Sensitivity', body: 'how badly an actor is hit by a change elsewhere', fill: C.panel, tsize: 21, valign: 'top' });
  b += box(460, 400, 410, 150, { title: 'Vulnerability', body: 'how costly it is to adjust, e.g. find another supplier\nthis is where power lies', fill: C.cream, edge: C.olive, tsize: 21, valign: 'top' });
  b += tx(450, 580, 'Keohane and Nye’s distinction', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  fig('02-sensitivity-vulnerability', 'Unequal interdependence', b, 605,
    'Actor A relies heavily on actor B, shown by a thick arrow, while B relies only a little on A, so B gains leverage. Below, Keohane and Nye’s distinction: sensitivity is how badly an actor is hit by a change elsewhere; vulnerability is how costly it is to adjust, and that is where power lies.',
    'The less dependent side gains leverage; vulnerability, not sensitivity, is where power lies.',
    '## The concept of interdependence');
}

// 03 Government vs governance
{
  let b = panel(30, 110, 410, 420) + tx(235, 148, 'Government', { size: 23, weight: 700, anchor: 'middle' });
  b += box(150, 175, 170, 56, { title: 'authority', tsize: 17, align: 'middle', fill: C.mustard, edge: C.ink, pad: 8 });
  ['parliament', 'police', 'courts'].forEach((s, i) => { b += line(235, 231, 90 + i * 145, 300, { w: 2.5 }) + box(30 + 20 + i * 125, 300, 115, 50, { title: s, tsize: 15, align: 'middle', pad: 6, fill: C.panel }); });
  b += lines(235, 400, wrap('formal institutions make, apply and enforce binding rules over a territory', 360, 16), { size: 16, anchor: 'middle', fill: C.muted }, 21);
  b += panel(460, 110, 410, 420, '#eaf3f1', C.tealDark) + tx(665, 148, 'Global governance', { size: 23, weight: 700, anchor: 'middle' });
  const nodes = [[560, 210, 'states'], [770, 210, 'IGOs'], [520, 300, 'companies'], [665, 270, 'rules and norms'], [810, 300, 'NGOs'], [665, 350, 'experts']];
  const edges = [[0, 1], [0, 3], [1, 3], [2, 3], [3, 4], [3, 5], [2, 5], [4, 5], [0, 2], [1, 4]];
  edges.forEach(([a, c]) => { b += line(nodes[a][0], nodes[a][1], nodes[c][0], nodes[c][1], { color: C.tealDark, w: 2 }); });
  nodes.forEach(([x, y, s], i) => { const w = i === 3 ? 150 : 100; b += box(x - w / 2, y - 22, w, 44, { title: s, tsize: 15, align: 'middle', pad: 6, fill: i === 3 ? C.cream : C.panel, edge: i === 3 ? C.olive : C.tealDark }); });
  b += lines(665, 420, wrap('steers behaviour through rules, norms, agreements and networks, with no single authority at the top', 360, 16), { size: 16, anchor: 'middle', fill: C.muted }, 21);
  const ex = ['UNSC resolutions (binding under Ch. VII)', 'Paris Agreement (2015)', 'Basel Accords: not a treaty', 'WTO agreements', 'EU; AU Peace and Security Council'];
  b += label(30, 565, 'Global governance in practice');
  ex.forEach((s, i) => { b += box(30 + (i % 3) * 285, 580 + Math.floor(i / 3) * 66, 270, 54, { title: s, tsize: 15, align: 'middle', pad: 8, fill: C.panel }); });
  fig('03-government-governance', 'Government or governance?', b, 740,
    'Left: government, a single authority over parliament, police and courts that makes and enforces binding rules in a territory. Right: global governance, a network of states, IGOs, companies, NGOs and experts linked by rules and norms with no single authority. Examples include Security Council resolutions, the Paris Agreement, the Basel Accords, WTO agreements and regional bodies.',
    'There is no world government, only overlapping global governance.',
    '## Global governance and international law');
}

// 04 Sources of international law
{
  const r = rowList(30, 110, 840, [
    ['1', 'Treaties', 'written agreements binding the states that ratify them', C.mustard],
    ['2', 'International custom', 'consistent state practice followed out of a sense of legal obligation', C.mustard],
    ['3', 'General principles of law', 'widely recognised across legal systems, such as good faith', C.mustard],
    ['4', 'Decisions of courts', 'international, regional and national', C.tealLight],
    ['5', 'Scholarly writings', 'by leading legal experts', C.tealLight],
  ], { tsize: 21, minH: 80, gap: 10, r: 24 });
  let b = r.s;
  const y3 = 110 + 3 * 90 - 10;
  const n = note(30, 110 + r.h + 20, 840, 'Sources 1–3 create law. Sources 4–5 are mainly used to identify what the law is.', { size: 18 });
  fig('04-sources-of-international-law', 'Five sources of international law', b + n.s, 110 + r.h + 20 + n.h + 30,
    'Five sources: treaties, international custom, general principles of law, decisions of courts and scholarly writings. The first three, highlighted, create law; court decisions and scholarly writings are mainly used to identify what the law is.',
    'Three sources make international law; two help identify it.',
    '## Global governance and international law');
}

// 05 Security Council decision rule
{
  let b = panel(30, 110, 840, 200);
  for (let i = 0; i < 15; i++) { const p5 = i < 5, x = 85 + i * 52; b += `<circle cx="${x}" cy="175" r="21" fill="${p5 ? C.mustard : C.tealLight}" stroke="${C.ink}" stroke-width="2"/>`; if (p5) b += tx(x, 181, ['CN', 'FR', 'RU', 'UK', 'US'][i], { size: 13.5, weight: 700, anchor: 'middle' }); }
  b += tx(205, 228, '5 permanent members: veto', { size: 16, weight: 700, anchor: 'middle', fill: C.olive }) + tx(600, 228, '10 elected by the GA for two years', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += tx(450, 280, 'Substantive decision = 9 of 15 votes AND no permanent-member veto (an abstention is not a veto)', { size: 16.5, weight: 700, anchor: 'middle' });
  b += box(30, 330, 410, 150, { title: '✓ Libya, 2011: Resolution 1973', body: 'China and Russia abstained rather than vetoing, so measures to protect civilians passed', fill: '#eaf3f1', edge: C.tealDark, tfill: C.tealDark, bfill: C.ink, valign: 'top' });
  b += box(460, 330, 410, 150, { title: '✗ Ukraine, February 2022', body: 'Russia, a party to the conflict, vetoed the draft resolution; the Council could not act', fill: '#fbeee6', edge: C.rust, tfill: C.rust, bfill: C.ink, valign: 'top' });
  b += arrow(665, 484, 665, 516);
  b += box(460, 520, 410, 120, { title: 'Workaround: GA Uniting for Peace', body: 'resolution deploring the invasion: wide agreement, not binding', fill: C.cream, edge: C.olive, valign: 'top' });
  b += box(30, 520, 410, 120, { title: 'Conclusion', body: 'the Council acts when P5 interests do not clash; its 1945 structure fuels the legitimacy debate', fill: C.panel, valign: 'top' });
  fig('05-security-council-vote', 'How the Security Council decides', b, 670,
    'Fifteen seats: five permanent members with a veto and ten elected members. A substantive decision needs nine votes and no permanent-member veto; an abstention is not a veto. In 2011 China and Russia abstained and Resolution 1973 on Libya passed. In February 2022 Russia vetoed action on Ukraine, and the General Assembly passed a non-binding resolution under Uniting for Peace.',
    'Nine votes and no veto: the Council acts only when permanent members’ interests do not clash.',
    '## The United Nations');
}

// 06 Forms of cooperation
{
  const cols = [{ w: 210, head: 'Form' }, { w: 270, head: 'What it is' }, { w: 360, head: 'Example' }];
  const tb = table(30, 110, cols, [
    ['Treaty', 'binding written agreement', 'NPT (in force 1970); Montreal Protocol (1987)'],
    ['Collective security', 'members commit to respond together to a threat', 'NATO (1949), Article 5 invoked once, after 9/11; OAS (1948)'],
    ['Strategic alliance', 'partnership for shared strategic aims, often less formal', 'USA and Israel; China’s links in Africa and Latin America'],
    ['Economic cooperation', 'trade agreements, integration', 'WTO agreements; African Continental Free Trade Area'],
    ['Informal cooperation', 'coordination without a formal treaty', 'technology harmonisation; cultural exchange'],
  ], { size: 16 });
  const yy = 110 + tb.h + 24;
  const o1 = { title: 'Montreal Protocol: cooperation driven by interdependence', body: 'ratified by every UN member state; no state can protect the ozone layer alone', fill: '#eaf3f1', edge: C.tealDark, tsize: 18, valign: 'top' };
  const o2 = { title: 'NPT: competition inside cooperation', body: 'five recognised nuclear-weapon states; India, Pakistan and Israel never joined; North Korea announced withdrawal in 2003', fill: '#fbeee6', edge: C.rust, tsize: 18, valign: 'top' };
  const hh = Math.max(boxH(410, o1), boxH(410, o2));
  const s2 = box(30, yy, 410, hh, o1) + box(460, yy, 410, hh, o2);
  const ws = { h: hh };
  fig('06-forms-of-cooperation', 'Forms of cooperation', tb.s + s2, 110 + tb.h + 24 + ws.h + 30,
    'A table of five forms of cooperation with examples: treaties such as the NPT and Montreal Protocol, collective security such as NATO and the OAS, strategic alliances, economic cooperation such as the WTO and AfCFTA, and informal cooperation. Below, the Montreal Protocol shows cooperation driven by interdependence and the NPT shows competition inside cooperation.',
    'Cooperation takes many forms, and most relationships mix it with competition.',
    '## Cooperation and competition');
}

// 07 Collective security vs collective defence
{
  const ring = (cx, cy, n, R, bad) => Array.from({ length: n }, (_, i) => { const a = (i / n) * 2 * Math.PI - Math.PI / 2; const x = cx + R * Math.cos(a), y = cy + R * Math.sin(a); return { x, y, s: `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="20" fill="${i === bad ? '#efcdb8' : C.tealLight}" stroke="${i === bad ? C.rust : C.tealDark}" stroke-width="2.5"/>` }; });
  let b = panel(30, 110, 410, 470) + tx(235, 148, 'Collective security', { size: 22, weight: 700, anchor: 'middle' }) + tx(235, 172, 'the UN model', { size: 15, anchor: 'middle', fill: C.muted });
  const r1 = ring(235, 350, 8, 120, 0);
  r1.forEach((p, i) => { if (i) b += arrow(p.x + (r1[0].x - p.x) * 0.18, p.y + (r1[0].y - p.y) * 0.18, r1[0].x + (p.x - r1[0].x) * 0.2, r1[0].y + (p.y - r1[0].y) * 0.2, { w: 2, color: C.rust, marker: 'ahR' }); });
  b += r1.map((p) => p.s).join('') + `<circle cx="235" cy="350" r="122" fill="none" stroke="${C.ink}" stroke-width="1.5" stroke-dasharray="6 5"/>`;
  b += lines(235, 515, wrap('all members act against any MEMBER that commits aggression', 370, 16), { size: 16, anchor: 'middle', weight: 600 }, 21);
  b += panel(460, 110, 410, 470) + tx(665, 148, 'Collective defence', { size: 22, weight: 700, anchor: 'middle' }) + tx(665, 172, 'NATO’s Article 5', { size: 15, anchor: 'middle', fill: C.muted });
  b += `<circle cx="600" cy="350" r="95" fill="none" stroke="${C.ink}" stroke-width="1.5" stroke-dasharray="6 5"/>`;
  ring(600, 350, 5, 55, -1).forEach((p) => { b += p.s; });
  b += `<circle cx="800" cy="350" r="24" fill="#efcdb8" stroke="${C.rust}" stroke-width="2.5"/>` + tx(800, 395, 'outside', { size: 15, anchor: 'middle', fill: C.rust }) + tx(800, 413, 'threat', { size: 15, anchor: 'middle', fill: C.rust });
  b += arrow(700, 350, 770, 350, { w: 3, color: C.tealDark, marker: 'ahT' });
  b += lines(665, 515, wrap('allies defend each other against an OUTSIDE threat', 370, 16), { size: 16, anchor: 'middle', weight: 600 }, 21);
  const n = note(30, 600, 840, 'The guide groups NATO under collective security, but showing the distinction strengthens analysis.', { size: 17 });
  fig('07-collective-security-defence', 'Collective security or collective defence?', b + n.s, 600 + n.h + 30,
    'Left: collective security, where all members of a system act against any member that commits aggression, the UN model. Right: collective defence, where allies defend each other against an outside threat, as in NATO’s Article 5.',
    'Security acts against an aggressor inside the system; defence acts against a threat outside it.',
    '## Cooperation and competition');
}
