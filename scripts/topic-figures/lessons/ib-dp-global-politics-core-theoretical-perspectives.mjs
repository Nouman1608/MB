import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-dp-global-politics-core-theoretical-perspectives';

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

// 01 Theory, model, framework + what they do
{
  let b = '';
  [['Theory', 'linked assumptions that claim to explain how politics works', 'e.g. realism'], ['Model', 'a simplified picture of one part, often a set of categories', 'e.g. hard, soft and smart power'], ['Analytical framework', 'a structured way of asking questions of a case', 'e.g. looking at scales: global to local']].forEach(([h, d, e], i) => {
    b += box(30 + i * 285, 115, 270, 170, { title: h, body: d + '\n' + e, fill: i ? C.panel : C.cream, edge: i ? C.panelEdge : C.olive, tsize: 21, bsize: 15.5, valign: 'top' });
  });
  b += label(30, 325, 'What these tools do');
  const c = chainH(30, 340, 840, [{ title: 'Organise' }, { title: 'Simplify' }, { title: 'Explain' }, { title: 'Predict' }, { title: 'Prescribe' }, { title: 'Evaluate' }].map((x, i) => ({ ...x, fill: i < 3 ? '#eaf3f1' : C.tealLight, edge: C.tealDark })), { h: 64, gap: 20, tsize: 17 });
  b += c.s;
  const n = note(30, 430, 840, 'Realism and liberalism mainly explain; the critical theories also ask whose interests a way of seeing serves.', { size: 16, weight: 600 });
  fig('01-theory-model-framework', 'Theories, models and frameworks', b + n.s, 430 + n.h + 30,
    'Three tools: a theory explains how politics works, a model simplifies one part into categories such as hard, soft and smart power, and an analytical framework structures questions, such as looking at different scales. They organise, simplify, explain, predict, prescribe and evaluate.',
    'Theories explain, models sort, frameworks structure the questions.',
    '## Theories, models and frameworks');
}

// 02 Realism vs liberalism core assumptions
{
  const cols = [{ w: 200, head: '' }, { w: 320, head: 'Realism' }, { w: 320, head: 'Liberalism' }];
  const tb = table(30, 110, cols, [
    ['Starting point', 'anarchy: no authority above states; self-help', 'anarchy exists, but cooperation is possible and common'],
    ['Main actors', 'states', 'states plus IGOs, companies, NGOs'],
    ['Gains', 'relative gains: compared with rivals', 'absolute gains: better off, even if a partner gains more'],
    ['Key ideas', 'national interest as security; security dilemma', 'institutions reduce cheating; complex interdependence; democratic peace'],
    ['Thinkers', 'Morgenthau; Waltz (1979); Mearsheimer', 'Keohane and Nye (1977)'],
  ], { size: 16 });
  fig('02-realism-liberalism', 'Realism and liberalism compared', tb.s, 110 + tb.h + 30,
    'A comparison table. Realism starts from anarchy and self-help, focuses on states and relative gains, and uses ideas such as the security dilemma; thinkers include Morgenthau, Waltz and Mearsheimer. Liberalism accepts anarchy but sees cooperation through institutions, many actors and absolute gains, with complex interdependence and democratic peace; Keohane and Nye are key.',
    'Relative versus absolute gains is the hinge between realism and liberalism.',
    '## The five perspectives');
}

// 03 Three critical theories
{
  const q = [
    ['Social constructivism', 'ideas, identities and norms shape what states want', 'Wendt (1992): “Anarchy is what states make of it”; norm entrepreneurs, e.g. landmine campaign → Ottawa Treaty (1997)', '#eaf3f1', C.tealDark],
    ['Feminism', 'gender as a category of analysis; security of people, not only states', 'Enloe, Bananas, Beaches and Bases; UNSC Resolution 1325 (2000); several strands', C.cream, C.olive],
    ['Postcolonialism', 'colonialism still shapes borders, economies, institutions and thought', 'Said, Orientalism (1978); Mignolo; agency of the Global South', C.tealLight, C.tealDark],
  ];
  let b = '';
  q.forEach(([h, a, e, f, ed], i) => { b += box(30, 115 + i * 140, 840, 125, { title: h, body: a + '\n' + e, fill: f, edge: ed, tsize: 22, bsize: 16, valign: 'middle' }); });
  fig('03-critical-theories', 'Three critical perspectives', b, 115 + 3 * 140 + 15,
    'Social constructivism holds that ideas, identities and norms shape interests, as in Wendt’s 1992 article and the landmine campaign. Feminism makes gender a category of analysis, citing Enloe and UN Resolution 1325. Postcolonialism studies how colonialism still shapes the world, citing Said’s Orientalism and Mignolo.',
    'Critical theories ask what ideas, gender and colonial history do to global politics.',
    '## The five perspectives');
}

// 04 Security dilemma (realism) vs norm life (constructivism)
{
  let b = label(245, 136, 'Realism: the security dilemma', { anchor: 'middle' });
  b += cycle(245, 340, 140, [
    { title: 'A arms for defence', fill: C.tealLight, edge: C.tealDark },
    { title: 'B sees a threat', fill: '#fbeee6', edge: C.rust },
    { title: 'B arms too', fill: C.tealLight, edge: C.tealDark },
    { title: 'A sees a threat', fill: '#fbeee6', edge: C.rust },
  ], { bw: 170, bh: 64, tsize: 16 });
  b += tx(245, 334, 'everyone', { size: 15, weight: 700, anchor: 'middle', fill: C.rust }) + tx(245, 354, 'less safe', { size: 15, weight: 700, anchor: 'middle', fill: C.rust });
  b += label(675, 136, 'Constructivism: norms change', { anchor: 'middle' });
  b += chainV(520, 156, 310, [
    { title: 'Norm entrepreneurs', body: 'International Campaign to Ban Landmines', fill: C.cream, edge: C.olive },
    { title: 'New norm spreads', body: 'mines seen as unacceptable', fill: '#eaf3f1', edge: C.tealDark },
    { title: 'Ottawa Treaty, 1997', body: 'Nobel Peace Prize shared that year', fill: C.mustard, edge: C.ink },
  ], { gap: 38, tsize: 17, bsize: 15 }).s;
  fig('04-two-mechanisms', 'Two mechanisms: fear and norms', b, 540,
    'Left, realism’s security dilemma: A arms for defence, B sees a threat and arms, A sees a threat in turn, and everyone ends up less safe. Right, constructivism: norm entrepreneurs such as the International Campaign to Ban Landmines spread a new norm that led to the 1997 Ottawa Treaty.',
    'Realism explains spirals of fear; constructivism explains how new norms take hold.',
    '## The five perspectives');
}

// 05 Concept grid
{
  const cols = [{ w: 150, head: '' }, { w: 165, head: 'Power' }, { w: 165, head: 'Sovereignty' }, { w: 165, head: 'Legitimacy' }, { w: 195, head: 'Interdependence' }];
  const tb = table(30, 110, cols, [
    ['Realism', 'material, mainly military; relative', 'central basis of the state system', 'follows effective control', 'creates vulnerability'],
    ['Liberalism', 'spread across actors; soft power', 'can be pooled (e.g. EU)', 'consent, law, democratic process', 'raises cost of war; cooperation'],
    ['Constructivism', 'includes power over ideas', 'a social institution that changes', 'shared norms and recognition', 'shapes identities; builds trust'],
    ['Feminism', 'often “power over”; asks about “power with”', 'can hide harm in private life', 'questioned where women excluded', 'gendered supply and care chains'],
    ['Postcolonialism', 'built on historical hierarchy', 'often limited for former colonies', 'who holds seats and vetoes', 'can mean dependency'],
  ], { size: 15 });
  const n = note(30, 110 + tb.h + 20, 840, 'R2P (2005): for a constructivist, a norm changing what sovereignty means; for a realist, selective use shows power still decides.', { size: 16, weight: 600 });
  fig('05-concept-grid', 'Five lenses on the four key concepts', tb.s + n.s, 110 + tb.h + 20 + n.h + 30,
    'A grid of how realism, liberalism, constructivism, feminism and postcolonialism read power, sovereignty, legitimacy and interdependence; for example realism sees power as material and relative, while postcolonialism sees it as built on historical hierarchy. R2P is read as norm change by constructivists and as selective power by realists.',
    'Each lens reads the same key concept differently.',
    '## How each perspective reads the key concepts');
}

// 06 Paris Agreement, five lenses
{
  const L = [
    ['Realism', 'self-set targets protected sovereignty and economic power against rivals', C.panel, C.panelEdge],
    ['Liberalism', 'an institution: reporting and review expose free-riding; all gain from a stable climate', C.panel, C.panelEdge],
    ['Constructivism', 'climate action became a norm of responsible statehood; staying out hurt reputation', C.panel, C.panelEdge],
    ['Feminism', 'who decides and who bears the cost: delegations; unpaid care and food work', C.panel, C.panelEdge],
    ['Postcolonialism', 'historical emissions; common but differentiated responsibilities (1992); loss and damage fund (COP27, 2022)', C.panel, C.panelEdge],
  ];
  let b = box(30, 115, 840, 80, { title: 'Why did almost every state join an agreement that lets each set its own target?', body: 'Paris Agreement, 2015: nationally determined contributions', fill: C.mustard, edge: C.ink, align: 'middle', tsize: 18, bsize: 15 });
  L.forEach(([h, d, f, e], i) => { b += box(30, 215 + i * 84, 840, 72, { title: h, body: d, fill: i < 2 ? '#eaf3f1' : i === 2 ? C.cream : C.tealLight, edge: C.tealDark, tsize: 18, bsize: 15, pad: 12 }); });
  const n = note(30, 215 + 5 * 84 + 6, 840, 'Evaluate: realism explains voluntary targets, liberalism the reviews, critical theories who is missing.', { size: 16, weight: 600 });
  fig('06-paris-five-lenses', 'One case, five lenses: the Paris Agreement', b + n.s, 215 + 5 * 84 + 6 + n.h + 30,
    'The 2015 Paris Agreement read through five perspectives: realism (self-set targets protect sovereignty), liberalism (reporting and review build cooperation), constructivism (climate action as a norm of responsible statehood), feminism (who decides and who bears the cost) and postcolonialism (historical emissions and differentiated responsibilities).',
    'Saying which lens explains which part of a case is the evaluation.',
    '## Worked example: one case, five lenses');
}

// 07 Theory paragraph structure
{
  const r = rowList(30, 110, 840, [
    ['1', 'Claim', 'the perspective’s argument: realists expect states to protect their own populations first'],
    ['2', 'Case', 'COVID-19: several states restricted exports of vaccines or medical supplies'],
    ['3', 'Link to a key concept', 'sovereignty and national interest override cooperation under pressure'],
    ['4', 'Limit and other lenses', 'COVAX (2020) pooled funding (liberal); lower-income states waited longest (postcolonial)'],
  ], { tsize: 21, minH: 90 });
  fig('07-theory-paragraph', 'Writing a theory paragraph', r.s, 110 + r.h + 30,
    'Four parts of a theory paragraph, using the COVID-19 pandemic: a realist claim that states protect their own first; the case of export restrictions on vaccines and supplies; a link to sovereignty and national interest; and a limit, with COVAX as a liberal counterpoint and a postcolonial point that lower-income states waited longest.',
    'Claim, case, key concept, limit: then turn to another lens.',
    '## Using theory in the exams');
}
