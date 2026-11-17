import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'a-level-cambridge-global-perspectives-written-exam';

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

// 01 Routes through 9239
{
  const comp = (x, y, w, lab, f, e) => box(x, y, w, 56, { title: lab, tsize: 16, align: 'middle', pad: 8, fill: f, edge: e });
  let b = '';
  const rows = [
    ['AS Level only', [['C1–C3', 1]], 'one series'],
    ['A Level staged', [['C1–C3 (Year 1)', 1], ['C4 (Year 2)', 4]], 'two years'],
    ['A Level in one series', [['C1–C3 + C4 together', 5]], 'one series'],
  ];
  rows.forEach(([h, cs, t], i) => {
    const y = 130 + i * 100;
    b += tx(40, y + 34, h, { size: 19, weight: 700 }) + tx(40, y + 58, t, { size: 15, fill: C.muted });
    let x = 290;
    cs.forEach(([lab, k]) => { const w = k === 5 ? 560 : k === 4 ? 260 : 280; b += comp(x, y + 6, w, lab, k === 4 ? C.cream : k === 5 ? C.mustard : '#eaf3f1', k === 4 ? C.olive : k === 5 ? C.ink : C.tealDark); x += w + 20; });
  });
  b += box(30, 440, 410, 120, { title: 'AS Level: Components 1–3', body: 'Written Exam, Essay, Team Project', fill: '#eaf3f1', edge: C.tealDark, align: 'middle' });
  b += box(460, 440, 410, 120, { title: 'Component 4: Research Report', body: 'up to 5000 words (75) + research log (10) = 85 marks, half the full A Level', fill: C.cream, edge: C.olive, align: 'middle' });
  fig('01-routes', 'Three routes through 9239', b, 590,
    'Three routes: AS Level only, taking Components 1 to 3 in one series; A Level staged, with Components 1 to 3 in Year 1 and Component 4 in Year 2; or the full A Level in a single series. Component 4, the Cambridge Research Report, is worth 85 marks, half the full A Level.',
    'Component 4 is the only thing separating the full A Level from the AS.',
    '## Where this fits in 9239');
}

// 02 Critical Path mapping for the exam
{
  const st = [['Deconstruction', true], ['Reconstruction', true], ['Reflection', false], ['Communication and collaboration', null]];
  let b = '';
  st.forEach(([h, on], i) => {
    const x = 30 + i * 213;
    const f = on === true ? C.mustard : on === false ? '#eef0f0' : C.cream;
    b += box(x, 150, 200, 110, { title: h, tsize: 18, align: 'middle', fill: f, edge: on === false ? C.panelEdge : C.ink, tfill: on === false ? C.muted : C.ink });
    if (i < 3) b += arrow(x + 202, 205, x + 211, 205, { w: 2.5 });
    b += tx(x + 100, 292, on === true ? '✓ used' : on === false ? '✗ not used' : 'communication only', { size: 16, weight: 700, anchor: 'middle', fill: on === false ? C.rust : on === true ? C.tealDark : C.olive });
  });
  b += label(450, 136, 'The Critical Path, and what the Written Exam uses', { anchor: 'middle' });
  b += box(30, 320, 840, 110, { title: 'Reflection and collaboration are excluded', body: 'the exam is individually assessed and its AO2 Reflection weighting is 0%', fill: C.panel, edge: C.panelEdge, align: 'middle' });
  const n = note(30, 450, 840, 'Unseen sources on varied global topics: build general critical-reading skill, not topic knowledge.', { size: 17 });
  fig('02-critical-path', 'The Critical Path in the Written Exam', b + n.s, 450 + n.h + 30,
    'The four Critical Path stages: deconstruction, reconstruction, reflection, and communication and collaboration. The Written Exam uses deconstruction, reconstruction and communication, but not reflection or collaboration, since it is individual and AO2 Reflection is weighted 0%.',
    'Three stages apply in the exam: take arguments apart, rebuild perspectives, communicate clearly.',
    '## How to approach it');
}

// 03 Five parts of an argument
{
  let b = box(220, 115, 460, 90, { title: 'Conclusion', body: 'a stated claim is the conclusion, not a sixth element', fill: C.mustard, edge: C.ink, align: 'middle', tsize: 22, bsize: 15 });
  const parts = [['Reasons (premises)', 'why the conclusion should be accepted'], ['Evidence', 'what supports the reasons'], ['Assumptions', 'stated and unstated'], ['Assertions', 'and counter-assertions']];
  parts.forEach(([h, d], i) => { const x = 30 + i * 213; b += arrow(x + 100, 260, 450 + (i - 1.5) * 70, 211, { w: 2.5 }) + box(x, 265, 200, 110, { title: h, body: d, tsize: 18, bsize: 15, align: 'middle', fill: '#eaf3f1', edge: C.tealDark, pad: 12 }); });
  const n = note(30, 400, 840, 'Identify all five before judging any of them, and examine the reasoning rather than disagreeing with the conclusion.', { size: 16, weight: 600 });
  fig('03-argument-parts', 'Deconstructing an argument', b + n.s, 400 + n.h + 30,
    'An argument broken into the syllabus’s five parts: a conclusion supported by reasons (premises), evidence, assumptions both stated and unstated, and assertions and counter-assertions.',
    'Name the five parts first; judge them second.',
    '## Deconstructing an argument');
}

// 04 Flaws
{
  const f = [
    ['Hasty generalisation', 'a broad claim from limited cases'],
    ['False cause', 'correlation as causation; confounding variable; reverse causation (any one earns credit)'],
    ['False dichotomy', 'two options presented as the only ones'],
    ['Ad hominem', 'attacks the arguer, not the argument'],
    ['Appeal to authority', 'status instead of evidence, especially outside the field'],
    ['Circular reasoning', 'the conclusion is assumed in the premises'],
    ['Straw man', 'misrepresents an opposing view to defeat it easily'],
  ];
  let b = '';
  f.forEach(([h, d], i) => { const x = 30 + (i % 2) * 430, y = 115 + Math.floor(i / 2) * 100; const w = i === 6 ? 840 : 410; b += box(i === 6 ? 30 : x, y, w, 88, { title: h, body: d, tsize: 19, bsize: 15, pad: 14, fill: i === 1 ? C.cream : C.panel, edge: i === 1 ? C.olive : C.rust }); });
  const n = note(30, 520, 840, 'Name the flaw AND show how it operates in the source: that separates the top band.', { size: 17 });
  fig('04-reasoning-flaws', 'Structural weaknesses to look for', b + n.s, 520 + n.h + 30,
    'Seven structural weaknesses: hasty generalisation, false cause (including confounding variables and reverse causation), false dichotomy, ad hominem, appeal to authority, circular reasoning and straw man, each with a one-line definition.',
    'Look for weak structure, not a conclusion you dislike.',
    '## Deconstructing an argument');
}

// 05 Evidence criteria
{
  const c = ['Provenance', 'Methodology', 'Currency', 'Corroboration', 'Sufficiency'];
  const d = ['who produced it and why', 'sample size, selection, instrument, replicability', 'how up to date', 'do other sources agree?', 'can it carry the weight of the claim?'];
  let b = '';
  c.forEach((h, i) => { b += box(30 + i * 170, 120, 160, 150, { title: h, body: d[i], tsize: 18, bsize: 15, align: 'middle', pad: 10, fill: i === 4 ? C.mustard : '#eaf3f1', edge: i === 4 ? C.ink : C.tealDark }); });
  b += label(30, 310, 'Statistics: check the baseline, the sample and whether the comparison is fair');
  const base = 520;
  b += panel(30, 325, 840, 230);
  b += rect(120, base - 40, 70, 40, C.teal, C.ink, 4, 2) + tx(155, base - 50, '2', { size: 18, weight: 700, anchor: 'middle' }) + tx(155, base + 24, 'before', { size: 15, anchor: 'middle' });
  b += rect(220, base - 80, 70, 80, C.rust, C.ink, 4, 2) + tx(255, base - 90, '4', { size: 18, weight: 700, anchor: 'middle' }) + tx(255, base + 24, 'after', { size: 15, anchor: 'middle' });
  b += line(100, base, 320, base, { w: 2 });
  b += tx(370, 410, '“A 100% increase!”', { size: 24, weight: 700, fill: C.rust }) + tx(370, 450, 'from 2 cases to 4: almost meaningless', { size: 18 }) + tx(370, 482, 'a percentage can hide small absolute numbers', { size: 16, fill: C.muted });
  fig('05-evaluating-evidence', 'Evaluating evidence', b, 585,
    'Five tests for evidence: provenance, methodology, currency, corroboration and sufficiency. Below, a rise from 2 cases to 4 is a 100% increase but almost meaningless, showing how percentages can hide small absolute numbers.',
    'Ask whether the evidence can carry the claim, and check the numbers behind any percentage.',
    '## Evaluating evidence');
}

// 06 Worked example
{
  let b = box(30, 115, 840, 100, { title: '“Countries that invest more in education have higher GDP per capita. Therefore increasing education spending will raise national income.”', fill: C.cream, edge: C.olive, align: 'middle', tsize: 18 });
  b += box(30, 235, 410, 80, { title: 'Evidence', body: 'a correlation across countries', tsize: 18, align: 'middle', fill: '#eaf3f1', edge: C.tealDark });
  b += arrow(444, 275, 486, 275, { w: 4, dash: '9 6', color: C.rust, marker: 'ahR' }) + tx(465, 262, '?', { size: 22, weight: 700, anchor: 'middle', fill: C.rust });
  b += box(490, 235, 380, 80, { title: 'Conclusion', body: 'spending raises income', tsize: 18, align: 'middle', fill: C.mustard, edge: C.ink });
  // causal diagram
  b += panel(30, 340, 840, 260) + tx(52, 374, 'False cause: other explanations for the correlation', { size: 18, weight: 700, fill: C.rust });
  b += box(80, 430, 230, 64, { title: 'education spending', tsize: 17, align: 'middle', pad: 8 }) + box(590, 430, 230, 64, { title: 'GDP per capita', tsize: 17, align: 'middle', pad: 8 });
  b += parrow('M588,450 C500,425 400,425 314,450', { color: C.rust, marker: 'ahR', w: 3 }) + tx(450, 418, 'reverse: richer countries can afford more education', { size: 15, anchor: 'middle', fill: C.rust, weight: 600 });
  b += box(320, 520, 260, 64, { title: 'governance, stability, infrastructure', tsize: 15, align: 'middle', pad: 8, fill: '#fbeee6', edge: C.rust });
  b += arrow(322, 535, 200, 498, { color: C.rust, marker: 'ahR', w: 3 }) + arrow(578, 535, 700, 498, { color: C.rust, marker: 'ahR', w: 3 });
  b += tx(160, 578, 'confounding variable', { size: 15, anchor: 'middle', fill: C.rust, weight: 600 });
  b += box(30, 620, 410, 90, { title: 'Oversimplified', body: 'how money is spent matters more than how much', tsize: 18, bsize: 15 });
  b += box(460, 620, 410, 90, { title: 'Sufficiency', body: 'no data on timescale or size of effect', tsize: 18, bsize: 15 });
  fig('06-worked-example', 'Worked example: education and GDP', b, 740,
    'The argument that more education spending will raise national income rests only on a correlation. The causal arrow could run in reverse, since richer countries can afford more education, or a confounding variable such as governance, stability or infrastructure could drive both. It also oversimplifies and lacks data on timescale or size of effect.',
    'Name the flaw and show why it breaks the step from evidence to conclusion.',
    '## Worked example');
}
