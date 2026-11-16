import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-individuals-societies-disciplines';

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

// 01 Disciplines -> three eAssessment subjects
{
  const disc = ['integrated humanities', 'history', 'economics', 'geography', 'philosophy', 'sociology / anthropology', 'business management', 'psychology', 'world religions'];
  let b = label(450, 138, 'What a school may teach', { anchor: 'middle' });
  disc.forEach((d, i) => { const x = 30 + (i % 3) * 285, y = 155 + Math.floor(i / 3) * 66; b += box(x, y, 270, 54, { title: d, tsize: 17, align: 'middle', fill: C.panel, edge: C.panelEdge, pad: 10 }); });
  b += `<path d="M60,370 L840,370 L560,450 L340,450 Z" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>`;
  b += tx(450, 418, 'on-screen eAssessment available in only…', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  ['history', 'geography', 'integrated humanities'].forEach((d, i) => { b += box(30 + i * 285, 470, 270, 70, { title: d, tsize: 20, align: 'middle', fill: C.mustard, edge: C.ink }); });
  const n = note(30, 565, 840, 'First step: confirm which of the three your course prepares you for. Your taught discipline does not decide it automatically.', { size: 17 });
  fig('01-disciplines-to-eassessment', 'Many disciplines, three eAssessment subjects', b + n.s, 565 + n.h + 30,
    'Nine disciplines a school may teach, from integrated humanities and history to psychology and world religions, narrow to only three on-screen eAssessment subjects: history, geography and integrated humanities.',
    'Whatever discipline is taught, the eAssessment comes in only three subjects.',
    '## Only three eAssessment subjects exist');
}

// 02 The three tasks by marks
{
  const tasks = [['Investigating', 26, 'A and B', 'evaluate an investigation and plan your own', C.tealLight], ['Communicating', 18, 'A and C', 'engage creatively; suit audience and purpose', C.cream], ['Thinking critically', 36, 'A, C and D', 'discuss issues, arguments, perspectives; extended writing', C.mustard]];
  const W = 840, sc = W / 80;
  let b = '', x = 30;
  tasks.forEach(([h, m, c, d, f]) => { b += rect(x, 130, m * sc, 70, f, C.ink, 6, 2.2) + tx(x + (m * sc) / 2, 174, `${m}`, { size: 24, weight: 700, anchor: 'middle' }); x += m * sc; });
  b += tx(450, 228, 'marks out of 80', { size: 16, anchor: 'middle', fill: C.muted });
  tasks.forEach(([h, m, c, d, f], i) => {
    const y = 250 + i * 118;
    b += box(30, y, 840, 104, { title: `${h} · ${m} marks · criteria ${c}`, body: d, fill: f === C.mustard ? C.cream : C.panel, edge: f === C.mustard ? C.olive : C.panelEdge, tsize: 20, bsize: 17, sw: f === C.mustard ? 3 : 2.2 });
  });
  b += tx(860, 478, 'largest task', { size: 16, weight: 700, anchor: 'end', fill: C.olive });
  fig('02-three-tasks', 'The three eAssessment tasks', b, 630,
    'A bar split by marks: investigating 26, communicating 18 and thinking critically 36, out of 80. Investigating uses criteria A and B; communicating A and C; thinking critically, the largest task, A, C and D and ends in extended writing.',
    'Thinking critically carries 36 of the 80 marks and ends in extended writing.',
    '## The three eAssessment tasks');
}

// 03 Source evaluation: summarise vs evaluate
{
  let b = '';
  const ws = weakStrong(30, 115, 840, 'Summarises what the source says: extracting facts.', 'Says what the source can and cannot tell you about the topic, for a specific research purpose.', { wTitle: 'Summarising', sTitle: 'Evaluating' });
  b += ws.s;
  let y = 115 + ws.h + 30;
  b += label(30, y, 'Two forms the question takes'); y += 16;
  b += panel(30, y, 410, 250) + tx(52, y + 36, 'Single source', { size: 20, weight: 700 });
  b += box(60, y + 56, 350, 60, { title: 'Source B', tsize: 18, align: 'middle', fill: C.tealLight, edge: C.tealDark, pad: 10 });
  b += lines(52, y + 150, wrap('“Explain one value or one limitation of source B for a student researching protests.”', 370, 16), { size: 16, italic: true }, 21);
  b += panel(460, y, 410, 250) + tx(482, y + 36, 'Comparative', { size: 20, weight: 700 });
  b += box(490, y + 56, 160, 60, { title: 'Source C', tsize: 18, align: 'middle', fill: C.tealLight, edge: C.tealDark, pad: 10 }) + tx(665, y + 92, 'vs', { size: 17, weight: 700, anchor: 'middle' }) + box(680, y + 56, 160, 60, { title: 'Source D', tsize: 18, align: 'middle', fill: C.tealLight, edge: C.tealDark, pad: 10 });
  b += lines(482, y + 150, wrap('“Compare and contrast source C and source D in terms of their usefulness in studying protest movements.”', 370, 16), { size: 16, italic: true }, 21);
  fig('03-source-evaluation', 'The source-evaluation skill', b, y + 280,
    'Summarising a source extracts its facts; evaluating it says what it can and cannot tell you for a research purpose. Official sample questions test this on one source, a value or limitation of source B, and comparatively, the usefulness of sources C and D for studying protest movements.',
    'Evaluate usefulness for a purpose, on one source or two; do not just summarise.',
    '## Worked example: the source-evaluation skill');
}

// 04 Extended writing structure
{
  let b = box(30, 115, 840, 100, { title: 'Sample question', body: '“To what extent do you agree that gaining support from different groups in society is the most important factor in making sure a protest movement is successful?”', fill: C.cream, edge: C.olive, bsize: 16, align: 'middle' });
  const c = chainH(30, 250, 840, [
    { title: 'Take a position', body: 'how far you agree', fill: '#eaf3f1', edge: C.tealDark },
    { title: 'Weigh it against alternatives', body: 'other factors in success', fill: '#eaf3f1', edge: C.tealDark },
    { title: 'Reach a reasoned judgement', body: 'justify your conclusion', fill: C.mustard, edge: C.ink },
  ], { h: 130, gap: 40, tsize: 20, bsize: 16 });
  b += c.s;
  const ws = weakStrong(30, 410, 840, 'Describes events in a narrative: cannot reach top marks however accurate.', 'A structured, judgement-based argument.', { wTitle: 'Narrative', sTitle: 'Argument' });
  fig('04-extended-writing', 'Thinking critically: building an argument', b + ws.s, 410 + ws.h + 30,
    'A sample to-what-extent question about protest movements leads to three steps: take a position, weigh it against alternatives, and reach a reasoned judgement. A narrative description cannot reach top marks; a structured argument can.',
    'Take a position, weigh alternatives and judge: description alone cannot reach the top.',
    '## Building for extended writing');
}

// 05 Sample eAssessment topics
{
  const topics = ['demographics and human movements', 'settlement and urban morphology', 'superpowers, empires and supra-national alliances and organizations', 'significant individuals', 'warfare and peacekeeping', 'rights and social protest', 'trade, aid and exchange', 'economic agents and their interests and role in the economy', 'measurements and trends', 'industrialization and technological developments'];
  let b = '';
  topics.forEach((s, i) => { const x = 30 + (i % 2) * 430, y = 115 + Math.floor(i / 2) * 92; b += box(x, y, 410, 80, { title: s, tsize: 17, align: 'middle', fill: i % 3 === 0 ? C.tealLight : i % 3 === 1 ? C.cream : C.panel, edge: C.panelEdge, pad: 12 }); });
  const n = note(30, 115 + 5 * 92 + 10, 840, 'The topics span history, geography and wider social science, so the three subjects draw on overlapping content.', { size: 16, weight: 600 });
  fig('05-sample-topics', 'Topics explored in the on-screen examinations', b + n.s, 115 + 5 * 92 + 10 + n.h + 30,
    'Ten topic tiles from the official brief, including demographics and human movements, settlement and urban morphology, warfare and peacekeeping, rights and social protest, trade, aid and exchange, and industrialization and technological developments.',
    'The listed topics cross disciplines, so expect overlap whatever you were taught.',
    '## Sample eAssessment topics');
}
