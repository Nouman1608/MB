import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-global-perspectives-9239-essay-sources';

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


// 01 Three jobs: range, assessment, justification
{
  let b = '';
  const jobs = [
    ['1', 'Range', 'Sources cover the issue from more than one place, type and standpoint.', 'Place, type and standpoint?'],
    ['2', 'Assessment', '“Make an informed judgement”: how far each source can be trusted and how strongly it supports what you use it for.', 'How good is this source?'],
    ['3', 'Justification', '“Support a case with evidence/argument”: why each key source belongs in your essay.', 'Why have I used it here?'],
  ];
  const bw = 266, gap = 21;
  const H = Math.max(...jobs.map(([, h, d]) => boxH(bw, { title: h, body: d, tsize: 22, bsize: 16 }))) + 14;
  jobs.forEach(([n, h, d, q], i) => {
    const x = 30 + i * (bw + gap);
    b += box(x, 130, bw, H, { title: h, body: d, tsize: 22, bsize: 16, valign: 'top', edge: C.tealDark, bfill: C.ink, pad: 22 });
    b += badge(x + bw / 2, 130, 20, n, i === 0 ? C.cream : C.mustard);
    b += rect(x, 130 + H + 14, bw, 52, i ? C.cream : C.tealLight, i ? C.olive : C.tealDark, 10, 2);
    b += tx(x + bw / 2, 130 + H + 46, q, { size: 17, weight: 700, anchor: 'middle', italic: true });
  });
  const y = 130 + H + 90;
  const n = note(30, y, 840, 'A source can be limited and still be justified: for example, the clearest statement of a perspective you need to examine.', { size: 17, weight: 600 });
  fig('01-three-jobs', 'Three things your sources must show', b + n.s, y + n.h + 28,
    'Range: sources from more than one place, type and standpoint. Assessment: an informed judgement of how far each source can be trusted, answering “how good is this source?”. Justification: why each key source belongs, answering “why have I used it here?”.',
    'Assessing asks how good a source is; justifying asks why it is in your essay.',
    '## Why sources matter so much in this essay');
}

// 02 Three kinds of range
{
  let b = '';
  const kinds = [
    ['Geographical', 'More than one region, including places on different sides of the issue.', 'Globally contrasting perspectives are hard to build from sources written in one country.'],
    ['Type', 'A mix of academic research, official data, international or non-governmental reports, quality journalism or commentary.', 'Each type has different strengths; a mix lets one check another.'],
    ['Standpoint', 'Each perspective has at least one source that argues for it in its own terms.', 'You can only evaluate a perspective fairly if you meet its strongest version.'],
  ];
  const art = (i, cx, cy) => {
    if (i === 0) return `<circle cx="${cx}" cy="${cy}" r="34" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>` +
      `<ellipse cx="${cx}" cy="${cy}" rx="14" ry="34" fill="none" stroke="${C.tealDark}" stroke-width="2"/>` + line(cx - 34, cy, cx + 34, cy, { color: C.tealDark, w: 2 }) +
      [[-18, -16], [16, 8], [-6, 20]].map(([dx, dy]) => `<circle cx="${cx + dx}" cy="${cy + dy}" r="5.5" fill="${C.mustard}" stroke="${C.ink}" stroke-width="1.8"/>`).join('');
    if (i === 1) return [[-36, C.panel], [-12, C.cream], [12, C.tealLight], [36, C.teal]].map(([dx, f]) => rect(cx + dx - 11, cy - 30, 22, 60, f, C.ink, 3, 2.2)).join('');
    return `<circle cx="${cx - 22}" cy="${cy - 4}" r="13" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.2"/><circle cx="${cx + 22}" cy="${cy - 4}" r="13" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.2"/>` +
      `<path d="M${cx - 44},${cy + 30} q22,-28 44,0 z" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.2"/><path d="M${cx},${cy + 30} q22,-28 44,0 z" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.2"/>`;
  };
  const bw = 266, gap = 21;
  const H = Math.max(...kinds.map(([h, c, w]) => wrap(c, bw - 36, 16).length + wrap(w, bw - 36, 16).length)) * LH(16) + 210;
  kinds.forEach(([h, c, w], i) => {
    const x = 30 + i * (bw + gap);
    b += panel(x, 110, bw, H);
    b += art(i, x + bw / 2, 160);
    b += tx(x + bw / 2, 230, h, { size: 22, weight: 700, anchor: 'middle' });
    const cl = wrap(c, bw - 36, 16);
    b += lines(x + 18, 262, cl, { size: 16 });
    const yy = 262 + cl.length * LH(16) + 8;
    b += line(x + 18, yy, x + bw - 18, yy, { color: C.panelEdge, w: 2 });
    b += lines(x + 18, yy + 26, wrap(w, bw - 36, 16), { size: 16, fill: C.tealDark, italic: true });
  });
  const y = 110 + H + 22;
  b += rect(30, y, 840, 96, C.cream, C.olive, 14, 2.5);
  b += tx(60, y + 36, 'Range is not quantity', { size: 20, weight: 700 });
  for (let k = 0; k < 6; k++) b += rect(320 + k * 20, y + 18, 14, 24, C.teal, C.ink, 2, 1.8);
  b += tx(445, y + 36, 'used and evaluated', { size: 16, weight: 700 });
  b += tx(608, y + 38, '>', { size: 24, weight: 700, anchor: 'middle' });
  for (let k = 0; k < 15; k++) b += rect(632 + k * 15, y + 18, 11, 24, '#ffffff', C.muted, 2, 1.5);
  b += tx(60, y + 74, 'Six well-chosen sources you use and evaluate are worth more than fifteen you mention once.', { size: 16, fill: C.ink });
  fig('02-kinds-of-range', 'Three kinds of range', b, y + 96 + 28,
    'Geographical range means sources from more than one region; type range means a mix of academic research, official data, organisational reports and quality journalism; standpoint range means each perspective has a source arguing for it in its own terms. Six sources used and evaluated beat fifteen mentioned once.',
    'Check your list for place, type and standpoint, not just length.',
    '## What a "range" of sources looks like');
}

// 03 Selection test
{
  let b = '';
  b += box(30, 205, 190, 110, { title: 'Candidate source', tsize: 20, align: 'middle', fill: C.tealLight, edge: C.tealDark });
  const qs = [
    ['Reasons and evidence,', 'or only assertions?'],
    ['Can I trace where', 'its evidence comes from?'],
    ['Is the writer qualified', 'to make this judgement?'],
    ['Does it address my question,', 'or a neighbouring one?'],
  ];
  qs.forEach(([a, c], i) => {
    const y = 110 + i * 82;
    b += rect(280, y, 360, 68, C.panel, C.tealDark, 12, 2.2);
    b += badge(306, y + 34, 16, String(i + 1), C.cream);
    b += tx(334, y + 29, a, { size: 17, weight: 600 }) + tx(334, y + 52, c, { size: 17, weight: 600 });
  });
  b += arrow(222, 260, 262, 260, { w: 3.5 });
  b += arrow(644, 260, 690, 260, { w: 3.5 });
  b += box(698, 180, 172, 160, { title: 'Use it', body: 'reaches “firmly supported judgements” through evidence you can see', tsize: 20, bsize: 16, align: 'middle', fill: C.cream, edge: C.olive, bfill: C.ink });
  b += path('M280,106 L270,106 L270,412 L280,412', { w: 2.5, stroke: C.tealDark });
  b += path('M640,106 L650,106 L650,412 L640,412', { w: 2.5, stroke: C.tealDark });
  const n = note(30, 448, 840, 'A short opinion column may state a perspective clearly, but with no reasons to examine it is weak material for building that perspective.', { size: 16, weight: 600 });
  fig('03-selection-test', 'Four questions before you use a source', b + n.s, 448 + n.h + 28,
    'Each candidate source passes four checks: does it give reasons and evidence or only assertions, can its evidence be traced, is the writer qualified to judge, and does it address the question rather than a neighbouring one. Sources that pass reach firmly supported judgements through visible evidence.',
    'Prefer sources whose reasoning and evidence you can see and check.',
    '## Choosing sources that "offer firmly supported judgements"');
}

// 04 Source audit
{
  const cols = [
    ['Reference', 'Full details for your list of sources'],
    ['Perspective', 'Which perspective it supports, in a few words'],
    ['Provenance', 'Who wrote it, where, when, for whom'],
    ['Basis', 'What evidence or reasoning it uses'],
    ['Strength', 'Why it is credible for this purpose'],
    ['Limitation', 'What weakens it, and how much'],
    ['Use', 'State a perspective, supply evidence, or challenge another source'],
  ];
  let b = '', y = 110;
  b += rect(30, y, 840, 50, C.tealDark, C.tealDark, 12) + tx(60, y + 32, 'What to note for each source, as you read', { size: 19, weight: 700, fill: '#ffffff' });
  y += 50;
  cols.forEach(([h, d], i) => {
    const last = i === cols.length - 1;
    const hh = 58;
    b += `<rect x="30" y="${y}" width="840" height="${hh}" fill="${last ? C.cream : i % 2 ? '#f7f9f9' : C.panel}"/>`;
    b += tx(60, y + 36, h, { size: 19, weight: 700, fill: last ? C.olive : C.ink });
    b += tx(250, y + 36, d, { size: 17, fill: C.ink });
    if (i) b += line(30, y, 870, y, { color: C.panelEdge, w: 1.5 });
    y += hh;
  });
  b += line(230, 160, 230, y, { color: C.panelEdge, w: 1.5 });
  b += `<rect x="30" y="110" width="840" height="${y - 110}" rx="12" fill="none" stroke="${C.ink}" stroke-width="2.2"/>`;
  b += rect(30, y - 58, 840, 58, 'none', C.olive, 0, 3.5);
  b += tx(450, y + 40, 'The Use column is your justification. If you cannot fill it in,', { size: 18, weight: 700, anchor: 'middle', fill: C.olive });
  b += tx(450, y + 66, 'the source probably does not belong in the essay.', { size: 18, weight: 700, anchor: 'middle', fill: C.olive });
  fig('04-source-audit', 'A source audit table', b, y + 96,
    'An audit table with seven columns for each source: reference, perspective, provenance, basis, strength, limitation and use. The final Use column, what the source will do in the essay, is highlighted as the justification.',
    'Write the evaluation as you read; the Use column is your justification.',
    '## Keeping a source audit while you research');
}

// 05 Three techniques inside the argument
{
  const tech = [
    ['1', 'The evaluative clause', 'Attach a short judgement to the citation, in about a dozen words.', '“A ten-country survey …, which uses each country’s hospital records rather than estimates, found that …”'],
    ['2', 'The comparison of credibility', 'When two sources disagree, assess them against each other.', '“The ministry’s figures are more recent, but the university study explains its method in full, so … the study is the safer guide.”'],
    ['3', 'The limit that changes the weight', 'Name a limitation and say what it does to your argument.', '“Because the campaign group funded the report, … the essay therefore treats it as the upper end of the likely effect.”'],
  ];
  let b = '', y = 110;
  tech.forEach(([n, h, d, ex], i) => {
    const exl = wrap(ex, 445, 16), dl = wrap(d, 235, 16), hl = wrap(h, 215, 19);
    const hh = Math.max(exl.length * LH(16) + 44, hl.length * LH(19) + dl.length * LH(16) + 36);
    b += panel(30, y, 840, hh);
    b += badge(72, y + hh / 2, 22, n, i === 0 ? C.cream : i === 1 ? C.mustard : C.cream);
    const ty = y + (hh - (hl.length * LH(19) + dl.length * LH(16))) / 2 + 17;
    b += lines(110, ty, hl, { size: 19, weight: 700 }, LH(19)) + lines(110, ty + hl.length * LH(19), dl, { size: 16, fill: C.muted });
    b += rect(372, y + 12, 484, hh - 24, '#eaf3f1', C.tealDark, 10, 2);
    b += lines(388, y + hh / 2 + 6 - (exl.length - 1) * LH(16) / 2, exl, { size: 16, italic: true });
    y += hh + 14;
  });
  const n = note(30, y + 4, 840, 'Evaluate where you use the source, not in a separate list at the end. A limitation that changes nothing is not worth the words.', { size: 16, weight: 600 });
  fig('05-in-argument-techniques', 'Assessing a source inside your argument', b + n.s, y + 4 + n.h + 28,
    'Three techniques with example wording: an evaluative clause attached to the citation, a comparison of credibility when two sources disagree, and a limit that changes how much weight a finding gets.',
    'Put the judgement where the source is used, and make it change something.',
    '## Assessing a source inside your argument');
}

// 06 Worked example
{
  let b = tx(450, 100, 'Question: “Should governments use congestion charges to reduce urban air pollution?”', { size: 17, weight: 600, anchor: 'middle', fill: C.muted, italic: true });
  const weak = [['cites sources but assesses none'], ['“all of these sources are reliable” is asserted'], ['second citation incomplete'], ['no perspective is linked to any source']];
  const jobsH = [
    'the transport authority has an interest in its policy succeeding, offset by publishing monitoring-station data others can check',
    'the review is the clearest statement of the perspective; the independent study is relied on more because it covers weak public transport',
    'a single-city official review and an independent study of schemes on three continents',
  ].reduce((a, d) => a + wrap(d, 330, 16).length * LH(16) + 32, 0);
  const H = 60 + jobsH + 10;
  b += panel(30, 120, 300, H, '#fbeee6', C.rust);
  b += tx(52, 156, '✗ Weak paragraph', { size: 20, weight: 700, fill: C.rust });
  let yy = 192;
  weak.forEach(([s]) => { const l = wrap(s, 240, 16); b += tx(52, yy, '•', { size: 16 }) + lines(68, yy, l, { size: 16 }); yy += l.length * LH(16) + 12; });
  b += panel(350, 120, 520, H, '#eaf3f1', C.tealDark);
  b += tx(372, 156, '✓ Strong paragraph does all three jobs', { size: 20, weight: 700, fill: C.tealDark });
  const jobs = [
    ['Assesses', 'the transport authority has an interest in its policy succeeding, offset by publishing monitoring-station data others can check'],
    ['Justifies', 'the review is the clearest statement of the perspective; the independent study is relied on more because it covers weak public transport'],
    ['Uses range', 'a single-city official review and an independent study of schemes on three continents'],
  ];
  yy = 180;
  jobs.forEach(([h, d], i) => {
    const l = wrap(d, 330, 16);
    const hh = l.length * LH(16) + 22;
    b += rect(372, yy, 476, hh, C.panel, C.panelEdge, 10, 2);
    b += tx(386, yy + 28, h, { size: 18, weight: 700, fill: i === 1 ? C.olive : C.ink });
    b += lines(508, yy + 26, l, { size: 16 });
    yy += hh + 10;
  });
  const n = note(30, 120 + H + 22, 840, 'The sources in this example are illustrative, not real publications.', { size: 16, weight: 600, fill: C.panel, edge: C.panelEdge });
  fig('06-worked-example', 'Weak and strong use of the same sources', b + n.s, 120 + H + 22 + n.h + 28,
    'For a question on congestion charges, the weak paragraph cites sources but assesses none and calls them all reliable. The strong paragraph assesses the transport authority’s interest against its checkable data, justifies relying more on an independent three-continent study, and uses range across both.',
    'A strong paragraph assesses, justifies and shows range in the same few sentences.',
    '## Worked example: weak and strong use of the same sources');
}

// 07 What counts towards the word limit
{
  let b = '';
  b += box(30, 120, 410, 200, { title: 'Not counted', body: '• title\n• references\n• citations', tsize: 22, bsize: 19, valign: 'top', fill: C.tealLight, edge: C.tealDark, bfill: C.ink, pad: 26 });
  b += box(460, 120, 410, 200, { title: 'Counted (1750–2000 words)', body: '• your argument\n• evaluative clauses and sentences about sources', tsize: 22, bsize: 19, valign: 'top', fill: C.cream, edge: C.olive, bfill: C.ink, pad: 26 });
  b += tx(235, 298, 'full references cost you no words', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600, italic: true });
  b += tx(665, 298, 'so plan for them', { size: 16, anchor: 'middle', fill: C.olive, weight: 600, italic: true });
  b += weakStrong(30, 342, 840, 'A paragraph of evaluation for every source.', 'A sentence or two of evaluation for each key source.', { size: 17, wTitle: 'Not realistic', sTitle: 'Realistic' }).s;
  const h = 342 + weakStrong(30, 342, 840, 'A paragraph of evaluation for every source.', 'A sentence or two of evaluation for each key source.', { size: 17, wTitle: 'Not realistic', sTitle: 'Realistic' }).h;
  const n = note(30, h + 20, 840, 'Quotations must be fully referenced, and the essay must include a list of sources used.', { size: 16, weight: 600, fill: C.panel, edge: C.panelEdge });
  fig('07-word-limit', 'References and the word limit', b + n.s, h + 20 + n.h + 28,
    'The title, references and citations are not counted in the word limit, but the argument and evaluative sentences about sources are. A sentence or two of evaluation per key source is realistic; a paragraph for every source is not.',
    'References are free; evaluation costs words, so ration it to key sources.',
    '## Referencing and the word limit');
}
