import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-dp-global-politics-rights-justice';

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

// 01 Four concepts applied to rights
{
  const sp = [
    { x: 30, y: 115, w: 300, h: 140, title: 'Power', body: 'which actors hold the authority to define or enforce a right' },
    { x: 570, y: 115, w: 300, h: 140, title: 'Sovereignty', body: 'a state’s claim to decide rights inside its borders vs universal rights claims' },
    { x: 30, y: 425, w: 300, h: 140, title: 'Legitimacy', body: 'whether a rights claim, or its denial, is accepted as valid by others' },
    { x: 570, y: 425, w: 300, h: 140, title: 'Interdependence', body: 'how a rights issue in one place creates pressure or obligations elsewhere' },
  ].map((s) => ({ ...s, fill: C.panel, edge: C.tealDark, tsize: 20, bsize: 15.5 }));
  const b = hub(450, 340, 92, ['Rights and', 'justice'], sp, { size: 20 });
  const n = note(30, 590, 840, 'Name the concept you are applying at each stage; do not leave the link implicit.', { size: 17 });
  fig('01-four-concepts', 'Rights and justice through the four core concepts', b + n.s, 590 + n.h + 30,
    'Rights and justice at the centre linked to the four core concepts: power (who defines or enforces a right), sovereignty (a state’s claim to decide rights internally against universal claims), legitimacy (whether a claim or its denial is accepted) and interdependence (pressure and obligations beyond the state).',
    'The same four concepts structure every rights answer.',
    '## Applying the four core concepts');
}

// 02 Worked method
{
  const r = rowList(30, 110, 840, [
    ['1', 'Power', 'Which actors (a state, an international body, a civil society movement) define or enforce the right?'],
    ['2', 'Sovereignty', 'Does the state claim exclusive authority to handle it internally? How does that meet international human rights frameworks?'],
    ['3', 'Legitimacy', 'Is the state’s position, or the claim against it, widely accepted by other states and institutions?'],
    ['4', 'Interdependence', 'What pressure, obligations or consequences reach actors beyond the state?'],
  ], { tsize: 21, minH: 96 });
  const n = note(30, 110 + r.h + 20, 840, 'The same structure works for Peace and Conflict and for Development and Sustainability.', { size: 17 });
  fig('02-four-step-analysis', 'Analysing a rights issue, concept by concept', r.s + n.s, 110 + r.h + 20 + n.h + 30,
    'Four questions to work through in order: who has the power to define or enforce the right; whether the state claims sovereign authority and how that meets international frameworks; whether positions are accepted as legitimate; and what pressures or obligations reach actors beyond the state.',
    'Work through all four concepts explicitly rather than describing the issue.',
    '## Worked example: applying the four concepts to a rights issue');
}

// 03 Institutions and frameworks to name
{
  let b = '';
  b += box(30, 115, 840, 80, { title: 'Universal Declaration of Human Rights (1948)', body: 'and the wider UN human rights system', fill: C.mustard, edge: C.ink, align: 'middle', tsize: 20 });
  b += label(30, 230, 'International bodies');
  [['ICJ', 'International Court of Justice'], ['UNHRC', 'UN Human Rights Council'], ['UNHCR', 'UN High Commissioner for Refugees'], ['ICC', 'International Criminal Court']].forEach(([a, f], i) => { b += box(30 + i * 213, 245, 200, 104, { title: a, body: f, tsize: 21, bsize: 15, align: 'middle', pad: 8, fill: '#eaf3f1', edge: C.tealDark }); });
  b += label(30, 380, 'Regional human rights courts');
  ['European Court of Human Rights', 'Inter-American Court of Human Rights', 'African Court on Human and Peoples’ Rights'].forEach((s, i) => { b += box(30 + i * 285, 395, 270, 80, { title: s, tsize: 16.5, align: 'middle', pad: 10, fill: C.cream, edge: C.olive }); });
  b += label(30, 515, 'Norm');
  b += box(30, 530, 410, 70, { title: 'Responsibility to protect (R2P)', tsize: 18, align: 'middle', fill: C.panel, edge: C.tealDark });
  b += label(460, 515, 'Civil society');
  b += box(460, 530, 410, 70, { title: 'Human Rights Watch; Amnesty International', tsize: 17, align: 'middle', fill: C.panel, edge: C.tealDark });
  const n = note(30, 625, 840, 'Name the specific treaty, institution or case a claim rests on, not “an international body”.', { size: 17 });
  fig('03-institutions', 'Frameworks and institutions to name', b + n.s, 625 + n.h + 30,
    'Anchors for a rights case log: the 1948 Universal Declaration of Human Rights; international bodies (ICJ, UN Human Rights Council, UNHCR, ICC); regional courts in Europe, the Americas and Africa; the Responsibility to Protect norm; and civil society organisations such as Human Rights Watch and Amnesty International.',
    'Precise names of frameworks and institutions are part of what Paper 2 rewards.',
    '## Building a case-study bank');
}

// 04 Cross-theme links
{
  const pos = [[450, 190, 'Rights and Justice', C.mustard, C.ink], [230, 520, 'Peace and Conflict', '#eaf3f1', C.tealDark], [670, 520, 'Development and Sustainability', C.cream, C.olive]];
  let b = '';
  b += line(450, 190, 230, 520, { w: 3 }) + line(450, 190, 670, 520, { w: 3 });
  pos.forEach(([x, y, l, f, e]) => { b += box(x - 150, y - 50, 300, 100, { title: l, tsize: 20, align: 'middle', fill: f, edge: e }); });
  b += box(30, 290, 270, 100, { title: 'conflict raises rights violations', body: 'affecting the same population', tsize: 16, bsize: 15, align: 'middle', fill: C.panel, pad: 10 });
  b += box(600, 290, 270, 100, { title: 'unequal development outcomes', body: 'raise questions of distributive justice', tsize: 16, bsize: 15, align: 'middle', fill: C.panel, pad: 10 });
  const n = note(30, 600, 840, 'Use the same four core concepts throughout. Paper 2 may combine or contrast thematic studies, so practise comparing across themes.', { size: 16, weight: 600 });
  fig('04-cross-theme', 'Linking the three thematic studies', b + n.s, 600 + n.h + 30,
    'A triangle of the three thematic studies. Rights and justice links to peace and conflict, where conflict raises rights violations for the same population, and to development and sustainability, where unequal outcomes raise questions of distributive justice. The same four core concepts apply throughout.',
    'Real issues cross theme boundaries; so should your examples.',
    '## Comparing across the three thematic studies');
}

// 05 Paper 2 structure
{
  let b = panel(30, 110, 410, 380, C.panel, C.tealDark) + tx(235, 150, 'Section A', { size: 24, weight: 700, anchor: 'middle' }) + tx(235, 176, 'answer ONE essay', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 700 });
  ['Rights and justice', 'Peace and conflict', 'Development and sustainability'].forEach((s, i) => { b += box(60, 200 + i * 80, 350, 66, { title: s, tsize: 17, align: 'middle', pad: 8, fill: i ? '#eaf3f1' : C.mustard, edge: C.tealDark }); });
  b += tx(235, 460, 'thematic-study-specific questions', { size: 15, anchor: 'middle', fill: C.muted });
  b += panel(460, 110, 410, 380, C.panel, C.olive) + tx(665, 150, 'Section B', { size: 24, weight: 700, anchor: 'middle' }) + tx(665, 176, 'answer ONE essay', { size: 16, anchor: 'middle', fill: C.olive, weight: 700 });
  b += box(490, 200, 350, 226, { title: 'Integrating questions', body: 'draw links across all three thematic studies and the core topics', tsize: 20, bsize: 16, align: 'middle', fill: C.cream, edge: C.olive });
  b += tx(665, 460, 'cross-theme fluency needed', { size: 15, anchor: 'middle', fill: C.muted });
  const n = note(30, 510, 840, 'The format is the same for all three thematic studies, so technique practised here transfers.', { size: 17 });
  fig('05-paper-2', 'Paper 2: two essays', b + n.s, 510 + n.h + 30,
    'Paper 2 has two sections. In section A candidates answer one thematic-study-specific essay, one set per thematic study. In section B they answer one integrating essay linking all three thematic studies and the core topics.',
    'One thematic essay plus one integrating essay: practise both with rights content.',
    '## Assessment structure');
}
