import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-global-perspectives-9239-written-exam-question-2';

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


// 01 Three jobs
{
  let b = '';
  b += tx(450, 112, '“How strong is the evidence?”', { size: 21, weight: 700, anchor: 'middle', italic: true, fill: C.tealDark });
  const jobs = [
    ['1', 'Reliability', 'Can this piece of evidence be trusted?'],
    ['2', 'Support', 'Even if it is trustworthy, does it back the claim it is used for?'],
    ['3', 'Gaps', 'What other evidence would confirm or overturn the claim?'],
  ];
  const r = chainH(30, 140, 840, jobs.map(([n, h, d], i) => ({ title: h, body: d, fill: i ? C.cream : C.tealLight, edge: i ? C.olive : C.tealDark, bfill: C.ink })), { gap: 34, tsize: 22, bsize: 17, h: 168 });
  b += r.s;
  jobs.forEach(([n], i) => { b += badge(30 + i * (r.bw + 34) + r.bw / 2, 140, 18, n, i ? C.mustard : C.cream); });
  b += path(`M30,330 L30,340 L${30 + r.bw},340 L${30 + r.bw},330`, { w: 2.5, stroke: C.rust });
  b += tx(30 + r.bw / 2, 364, 'where most weak answers stop', { size: 16, anchor: 'middle', fill: C.rust, weight: 700, italic: true });
  b += path(`M${30 + r.bw + 34},330 L${30 + r.bw + 34},340 L870,340 L870,330`, { w: 2.5, stroke: C.olive });
  b += tx((30 + r.bw + 34 + 870) / 2, 364, 'where many of the marks sit', { size: 16, anchor: 'middle', fill: C.olive, weight: 700, italic: true });
  const y = 414;
  b += tx(30, y, 'Question 2: 15 of 45 marks, one document, its evidence', { size: 18, weight: 700, fill: C.tealDark });
  b += rect(30, y + 16, 840, 44, '#eef2f2', C.panelEdge, 8, 2);
  b += rect(30, y + 16, 280, 44, C.mustard, C.ink, 8, 2.5) + tx(170, y + 44, 'Q2 ≈ 30 minutes', { size: 17, weight: 700, anchor: 'middle' });
  b += tx(330, y + 44, 'one-third of the 90-minute paper', { size: 17, fill: C.ink });
  fig('01-three-jobs', 'Three jobs for every piece of evidence', b, y + 60 + 28,
    'Question 2 asks how strong the evidence is, in three jobs: reliability, whether it can be trusted; support, whether it backs the claim it is used for; and gaps, what other evidence would confirm or overturn the claim. Most weak answers stop at reliability. Worth 15 of 45 marks, about 30 minutes.',
    'Trustworthy evidence can still give weak support; test the link and the gaps too.',
    '## What Question 2 asks you to do');
}

// 02 Map the evidence
{
  const rows = [
    ['A percentage from a survey', '“Most people want this policy”'],
    ['A quotation from a named doctor', '“The policy improves health”'],
    ['One family’s story', '“Costs fall hardest on the poor”'],
  ];
  let b = '';
  b += tx(230, 134, 'Evidence in the source', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += tx(670, 134, 'Claim it is used to support', { size: 19, weight: 700, anchor: 'middle', fill: C.olive });
  rows.forEach(([e, c], i) => {
    const y = 152 + i * 96;
    b += box(30, y, 400, 78, { title: e, tsize: 19, align: 'middle', fill: C.tealLight, edge: C.tealDark });
    b += arrow(434, y + 39, 466, y + 39, { w: 3.5 });
    b += box(470, y, 400, 78, { title: c, tsize: 19, align: 'middle', fill: C.cream, edge: C.olive });
  });
  const y = 152 + 3 * 96 + 6;
  b += box(30, y, 410, 110, { title: '✓ Avoids evaluating', body: 'the writer’s opinions as if they were evidence', tsize: 19, bsize: 17, fill: '#eaf3f1', edge: C.tealDark, tfill: C.tealDark, bfill: C.ink });
  b += box(460, y, 410, 110, { title: '✓ Avoids missing', body: 'evidence buried in a long sentence', tsize: 19, bsize: 17, fill: '#eaf3f1', edge: C.tealDark, tfill: C.tealDark, bfill: C.ink });
  fig('02-evidence-map', 'Step 1: map evidence to claims', b, y + 110 + 28,
    'A two-column margin note pairs each piece of evidence with the claim it supports: a survey percentage with “most people want this policy”, a named doctor’s quotation with “the policy improves health”, and one family’s story with “costs fall hardest on the poor”. Mapping first avoids treating opinions as evidence and missing buried evidence.',
    'List every piece of evidence beside the claim it is meant to support.',
    '## Step 1: map the evidence');
}

// 03 Test by type
{
  const ty = [
    ['Statistics', 'Who collected them and why? Is it measuring the thing the claim is about? A fair baseline? Averages hiding variation?'],
    ['Survey or poll', 'How many people, chosen how? Who was left out? Question wording? Does saying predict doing?'],
    ['Expert testimony', 'Within their field? Named, with a role? Do they gain from the outcome? One view or a consensus?'],
    ['Personal account', 'Vivid but untypical? First-hand? One case standing for many?'],
    ['Case study or example', 'Similar enough to the situation in the claim? Chosen because it fits?'],
    ['Research study', 'Method described? A comparison group? Repeated? How old?'],
  ];
  let b = '';
  const bw = 410, gap = 20;
  const H = Math.max(...ty.map(([h, d]) => boxH(bw, { title: h, body: d, tsize: 20, bsize: 16 })));
  ty.forEach(([h, d], i) => {
    const x = 30 + (i % 2) * (bw + gap), y = 110 + Math.floor(i / 2) * (H + 14);
    b += box(x, y, bw, H, { title: h, body: d, tsize: 20, bsize: 16, valign: 'top', edge: C.tealDark, bfill: C.ink });
  });
  const y = 110 + 3 * (H + 14);
  const n = note(30, y + 4, 840, 'Strengths are evaluation too: say why a named, well-matched, multi-year statistic is strong support. You will not need every question for every piece.', { size: 16, weight: 600 });
  fig('03-test-by-type', 'Step 2: test each piece by its type', b + n.s, y + 4 + n.h + 28,
    'Six evidence types with the questions that expose strengths and weaknesses: statistics, surveys or polls, expert testimony, personal accounts, case studies and research studies. Strengths count as evaluation as well as weaknesses.',
    'Different kinds of evidence fail in different ways, so change the questions you ask.',
    '## Step 2: test each piece by its type');
}

// 04 Link gaps
{
  let b = '';
  b += box(30, 120, 230, 120, { title: 'Evidence', body: 'may be accurate…', tsize: 22, bsize: 17, align: 'middle', fill: C.tealLight, edge: C.tealDark, bfill: C.ink });
  b += box(640, 120, 230, 120, { title: 'Claim', body: '…and still get weak support', tsize: 22, bsize: 17, align: 'middle', fill: C.cream, edge: C.olive, bfill: C.ink });
  // broken bridge
  b += path('M262,180 L410,180', { w: 6 }) + path('M490,180 L638,180', { w: 6 });
  b += path('M410,180 l12,-14 l6,22 l10,-16', { w: 3, stroke: C.rust }) + path('M490,180 l-12,14 l-6,-22 l-10,16', { w: 3, stroke: C.rust });
  b += tx(450, 222, 'is the step safe?', { size: 17, anchor: 'middle', fill: C.rust, weight: 700, italic: true });
  const gaps = [
    ['Scope gap', 'one city, year or group → a country, the future or everyone'],
    ['Measure gap', 'something nearby (sugary drink sales) → something else (obesity rates)'],
    ['Cause gap', 'two things happened together → one caused the other'],
    ['Selection gap', 'examples that fit, silence about any that do not'],
    ['Strength gap', 'a small or uncertain effect → “clearly” or “proves”'],
  ];
  let y = 270;
  gaps.forEach(([h, d], i) => {
    b += panel(30, y, 840, 60);
    b += badge(64, y + 30, 16, String(i + 1), C.cream);
    b += tx(96, y + 37, h, { size: 19, weight: 700 });
    b += tx(260, y + 37, d, { size: 17 });
    y += 70;
  });
  const n = note(30, y + 4, 840, 'Name the gap, quote the evidence and the claim, and explain why the step from one to the other is unsafe.', { size: 17 });
  fig('04-link-gaps', 'Step 3: test the link to the claim', b + n.s, y + 4 + n.h + 28,
    'Evidence can be accurate yet give weak support because the step to the claim is unsafe. Five gaps: scope, from one place or group to everyone; measure, from something nearby to something else; cause, from correlation to causation; selection, only examples that fit; and strength, from a small effect to “proves”.',
    'This step separates the top band: check the bridge, not just the evidence.',
    '## Step 3: test the link between evidence and claim');
}

// 05 Suggest other evidence
{
  const p = [
    ['What', 'dental or hospital records for children from before and after the tax, ideally compared with a similar country without one'],
    ['Why', 'it would test whether the fall in sales led to a change in health'],
    ['What result', 'decay falls faster than in the comparison country: claim substantiated. Falls at the same rate: something other than the tax is the likelier explanation'],
  ];
  let b = '', y = 110;
  p.forEach(([h, d], i) => {
    const dl = wrap(d, 600, 17);
    const hh = Math.max(76, dl.length * LH(17) + 32);
    b += panel(30, y, 840, hh, i === 2 ? C.cream : C.panel, i === 2 ? C.olive : C.panelEdge);
    b += badge(70, y + hh / 2, 20, String(i + 1), i === 2 ? C.mustard : C.cream);
    b += tx(106, y + hh / 2 + 7, h, { size: 20, weight: 700 });
    b += lines(240, y + (hh - dl.length * LH(17)) / 2 + 17, dl, { size: 17 });
    y += hh + 12;
  });
  b += tx(450, y + 18, 'Example from the sugar-tax worked example', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  y += 40;
  const ws = weakStrong(30, y, 840, '“More evidence is needed.” / “More research.”', 'One precise suggestion, tied to a gap you identified.', { size: 17 });
  b += ws.s;
  fig('05-suggest-evidence', 'Step 4: suggest other evidence', b, y + ws.h + 28,
    'A useful suggestion states what evidence (children’s dental or hospital records before and after the tax, compared with a similar country), why it is needed (to test whether lower sales changed health), and what result would strengthen or weaken the claim.',
    'Say what evidence, why, and what result would change the verdict.',
    '## Step 4: suggest other evidence');
}

// 06 Planning 15 marks
{
  const st = [
    ['Opening judgement', 'two sentences: the main claim and your verdict on its evidence', C.cream, C.olive],
    ['Evidence paragraph', 'one piece or type: a strength, a weakness, and the link to the claim', C.tealLight, C.tealDark],
    ['Evidence paragraph', 'as above, for the next most important piece', C.tealLight, C.tealDark],
    ['(Evidence paragraph)', 'a third if needed; group small pieces of the same type', '#ffffff', C.panelEdge],
    ['Gaps paragraph', 'one or two specific missing pieces of evidence, and why they matter', C.teal, C.tealDark],
    ['Conclusion', 'a weighed verdict that follows from your paragraphs', C.cream, C.olive],
  ];
  let b = '', y = 110;
  st.forEach(([h, d, f, e], i) => {
    const hh = 66;
    b += rect(30, y, 840, hh, f, e, 12, i === 3 ? 2 : 2.5) + (i === 3 ? `<rect x="30" y="${y}" width="840" height="${hh}" rx="12" fill="none" stroke="${C.muted}" stroke-width="2" stroke-dasharray="8 6"/>` : '');
    b += tx(56, y + 41, h, { size: 20, weight: 700, fill: i === 3 ? C.muted : C.ink });
    b += tx(320, y + 41, d, { size: 16, fill: C.ink });
    y += hh + 10;
  });
  const n = note(30, y + 6, 840, '“Evaluate”: judge the quality, importance, amount or value of something. One serious scope gap can outweigh a reliable data set; one strong study can outweigh several anecdotes.', { size: 16, weight: 600, fill: C.panel, edge: C.panelEdge });
  fig('06-answer-plan', 'Planning a 15-mark answer', b + n.s, y + 6 + n.h + 28,
    'A 15-mark plan: an opening judgement of the main claim and your verdict, two or three evidence paragraphs each with a strength, a weakness and the link to the claim, a gaps paragraph on specific missing evidence, and a weighed concluding verdict.',
    'Open and close with a verdict; go deep on the evidence that matters most.',
    '## Planning a 15-mark answer');
}

// 07 Worked example: claims and strength of support
{
  let b = '';
  const src = 'The sugar tax is working. In the two years since it was introduced, supermarket sales of sugary drinks fell by 12%, according to a report from the drinks retailers’ association. Dr Mensah, a dentist in the capital, told me she now sees far fewer children with tooth decay. My neighbour’s son has switched to water. Other countries should copy us at once.';
  const sl = wrap(src, 790, 16);
  b += rect(30, 110, 840, sl.length * LH(16) + 64, C.panel, C.ink, 12, 2.2);
  b += tx(52, 140, 'Source: opinion column (fictional)', { size: 17, weight: 700, fill: C.tealDark });
  b += lines(52, 168, sl, { size: 16, italic: true });
  let y = 110 + sl.length * LH(16) + 64 + 30;
  b += tx(30, y, 'How well does the evidence support each claim?', { size: 19, weight: 700 });
  y += 18;
  const claims = [
    ['Sugary drink sales fell', 4, 'Some support: a specific figure over a stated period, from a body with no obvious reason to exaggerate a fall; but supermarket sales only.'],
    ['Health has improved', 2, 'Weak: sales measure purchases, not health (a measure gap).'],
    ['Other countries should copy', 1, 'Very weak: nothing addresses whether it would work elsewhere.'],
  ];
  claims.forEach(([c, lvl, d], i) => {
    const dl = wrap(d, 490, 16);
    const hh = Math.max(80, dl.length * LH(16) + 52);
    b += panel(30, y, 840, hh);
    b += tx(52, y + 34, c, { size: 19, weight: 700 });
    for (let k = 0; k < 5; k++) b += rect(52 + k * 34, y + 48, 28, 18, k < lvl ? (lvl >= 4 ? C.tealDark : lvl >= 2 ? C.mustard : C.rust) : '#eef2f2', C.ink, 3, 1.5);
    b += lines(350, y + (hh - dl.length * LH(16)) / 2 + 15, dl, { size: 16 });
    y += hh + 10;
  });
  b += tx(450, y + 18, 'Question 2 judges the evidence, not the policy: no generic “biased”, no argument against sugar taxes.', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600, italic: true });
  fig('07-worked-example', 'Weighing the evidence in a source', b, y + 46,
    'A fictional column claims a sugar tax is working. Its evidence gives some support to the claim that sugary drink sales fell, weak support to the claim that health improved because sales measure purchases not health, and very weak support to the recommendation that other countries copy it.',
    'The same evidence can support a narrow claim and fail a broad one.',
    '## Worked example');
}
