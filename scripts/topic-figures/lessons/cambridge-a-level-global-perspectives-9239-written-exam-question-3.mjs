import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-global-perspectives-9239-written-exam-question-3';

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


// 01 What Q3 asks
{
  let b = '';
  b += tx(30, 128, 'The paper: 45 marks in 90 minutes', { size: 18, weight: 700, fill: C.tealDark });
  const X = 30, W = 840, sc = W / 45;
  b += rect(X, 144, 20 * sc, 50, '#eef2f2', C.panelEdge, 8, 2) + tx(X + 10 * sc, 175, 'Questions 1 and 2', { size: 17, anchor: 'middle', fill: C.muted, weight: 600 });
  b += rect(X + 20 * sc, 144, 25 * sc, 50, C.mustard, C.ink, 8, 2.5) + tx(X + 32.5 * sc, 175, 'Question 3: 25 marks ≈ 50 minutes', { size: 18, weight: 700, anchor: 'middle' });
  b += tx(450, 236, 'Four skills come together in Question 3', { size: 19, weight: 700, anchor: 'middle' });
  const sk = [
    ['AO1', 'identify and compare key components of arguments'],
    ['AO1', 'analyse and compare perspectives'],
    ['AO1', 'evaluate arguments and make judgements about arguments and perspectives'],
    ['AO3', 'communicate clearly and logically'],
  ];
  sk.forEach(([ao, d], i) => {
    const x = 30 + (i % 2) * 430, y = 256 + Math.floor(i / 2) * 96;
    b += panel(x, y, 410, 82, ao === 'AO3' ? C.cream : C.panel, ao === 'AO3' ? C.olive : C.panelEdge);
    b += `<circle cx="${x + 42}" cy="${y + 41}" r="26" fill="${ao === 'AO3' ? C.mustard : C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>` + tx(x + 42, y + 47, ao, { size: 16, weight: 700, anchor: 'middle' });
    const dl = wrap(d, 320, 17);
    b += lines(x + 82, y + 41 + 6 - (dl.length - 1) * LH(17) / 2, dl, { size: 17 });
  });
  const n = note(30, 460, 840, 'Not two summaries plus your opinion: a comparison organised by criteria, ending in a reasoned judgement. The only question that credits AO3.', { size: 17, weight: 600 });
  fig('01-question-3-skills', 'What Question 3 asks you to do', b + n.s, 460 + n.h + 28,
    'Question 3 carries 25 of the paper’s 45 marks, about 50 of the 90 minutes. It combines three AO1 skills, comparing argument components, comparing perspectives and judging them, with the AO3 skill of communicating clearly and logically.',
    'The biggest question: a criteria-based comparison that ends in a judgement.',
    '## What Question 3 asks you to do');
}

// 02 Two levels
{
  let b = '';
  b += box(30, 115, 410, 200, { title: 'Argument level', body: '“one or more reasons that lead to a conclusion”\n\nAsk: how well do each source’s reasons support its conclusion?', tsize: 22, bsize: 17, valign: 'top', fill: C.tealLight, edge: C.tealDark, bfill: C.ink });
  b += box(460, 115, 410, 200, { title: 'Perspective level', body: '“a coherent world view which is a response to an issue”: argument, evidence and assumptions, perhaps shaped by context\n\nAsk: which values come first, what is taken for granted, and why?', tsize: 22, bsize: 17, valign: 'top', fill: C.cream, edge: C.olive, bfill: C.ink });
  b += `<path d="M235,322 C235,372 665,372 665,322" fill="none" stroke="${C.tealDark}" stroke-width="3.5" marker-start="url(#ahT)" marker-end="url(#ahT)"/>`;
  b += tx(450, 394, 'A top answer moves between the two', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  const ex = '“Source B’s argument is weaker in its use of evidence, but its perspective takes account of people that Source A ignores.”';
  const el = wrap(ex, 780, 18);
  b += rect(30, 412, 840, el.length * LH(18) + 36, C.panel, C.tealDark, 12, 2.2) + lines(450, 442, el, { size: 18, italic: true, anchor: 'middle' });
  fig('02-argument-perspective', 'Arguments and perspectives: two levels', b, 412 + el.length * LH(18) + 36 + 28,
    'At the argument level, ask how well each source’s reasons support its conclusion. At the perspective level, ask what world view lies behind each source: its values, assumptions and context. Strong answers move between the two levels.',
    'Judge the reasoning, then the world view behind it, and link the two.',
    '## Arguments and perspectives: keep the two levels apart');
}

// 03 Criteria toolkit
{
  const cr = [
    ['Logic and structure', 'Do the reasons lead to the conclusion? Any flaws?'],
    ['Use of evidence', 'How much, of what quality? Keep it brief.'],
    ['Assumptions', 'What must be true for each argument to work?'],
    ['Counter-arguments', 'Are objections anticipated and answered fairly?'],
    ['Use of language', 'Measured or emotive? Loaded words replacing reasons?'],
    ['Use of analogy', 'Are the two cases alike in the ways that matter?'],
    ['Implications', 'What would follow if each recommendation were adopted?'],
    ['Context and provenance', 'Who wrote it, for whom, and how might that shape it?'],
  ];
  let b = '';
  b += tx(450, 112, 'Choose three or four that fit the sources: each becomes a paragraph', { size: 18, weight: 600, anchor: 'middle', fill: C.tealDark });
  const bw = 410, gap = 20, H = Math.max(...cr.map(([h, d]) => boxH(bw, { title: h, body: d, tsize: 19, bsize: 16 })));
  cr.forEach(([h, d], i) => {
    const x = 30 + (i % 2) * (bw + gap), y = 132 + Math.floor(i / 2) * (H + 12);
    b += box(x, y, bw, H, { title: h, body: d, tsize: 19, bsize: 16, edge: C.tealDark, bfill: C.ink, valign: 'middle' });
  });
  const y = 132 + 4 * (H + 12);
  fig('03-criteria-toolkit', 'A toolkit of comparison criteria', b, y + 16,
    'Eight comparison criteria with the question each asks of both sources: logic and structure, use of evidence, assumptions, counter-arguments, use of language, use of analogy, implications, and context and provenance.',
    'Pick the three or four criteria where the sources differ most.',
    '## A toolkit of comparison criteria');
}

// 04 Paragraph organisation
{
  let b = '';
  const col = (x, title, ok) => tx(x + 200, 128, title, { size: 20, weight: 700, anchor: 'middle', fill: ok ? C.tealDark : C.rust });
  b += col(30, '✗ Source by source', false) + col(470, '✓ Criterion by criterion', true);
  // weak
  b += rect(30, 146, 400, 150, '#fbeee6', C.rust, 12, 2.2) + tx(230, 228, 'All of Source A', { size: 19, weight: 700, anchor: 'middle' });
  b += rect(30, 306, 400, 150, '#fbeee6', C.rust, 12, 2.2) + tx(230, 388, 'All of Source B', { size: 19, weight: 700, anchor: 'middle' });
  b += rect(30, 466, 400, 56, '#fbeee6', C.rust, 12, 2.2) + tx(230, 500, 'comparison only in the conclusion', { size: 16, anchor: 'middle', fill: C.rust, weight: 600 });
  // strong
  ['Criterion 1', 'Criterion 2', 'Criterion 3'].forEach((c, i) => {
    const y = 146 + i * 128;
    b += rect(470, y, 400, 116, '#eaf3f1', C.tealDark, 12, 2.2);
    b += tx(490, y + 30, c, { size: 18, weight: 700 });
    b += rect(490, y + 42, 150, 30, C.tealLight, C.tealDark, 6, 1.5) + tx(565, y + 63, 'Source A does X', { size: 15, anchor: 'middle' });
    b += tx(672, y + 63, 'whereas', { size: 15, anchor: 'middle', italic: true, fill: C.muted });
    b += rect(704, y + 42, 148, 30, C.cream, C.olive, 6, 1.5) + tx(778, y + 63, 'Source B does Y', { size: 15, anchor: 'middle' });
    b += rect(490, y + 78, 362, 28, C.mustard, C.ink, 6, 1.5) + tx(671, y + 98, 'mini-judgement on this criterion', { size: 15, weight: 700, anchor: 'middle' });
  });
  const n = note(30, 548, 840, 'Signpost the criterion at the start of each paragraph; the mini-judgements become the building blocks of your verdict.', { size: 17 });
  fig('04-paragraph-organisation', 'Compare within every paragraph', b + n.s, 548 + n.h + 28,
    'A source-by-source answer gives all of Source A, then all of Source B, leaving comparison to the conclusion. A criterion-by-criterion answer puts both sources in every paragraph, “Source A does X, whereas Source B does Y”, and ends each with a mini-judgement.',
    'Both sources in each paragraph, and a mini-judgement at the end of it.',
    '## A toolkit of comparison criteria');
}

// 05 Reasoned judgement
{
  let b = '';
  const mj = [['Logic', 'B'], ['Assumptions', 'B'], ['Language', 'A'], ['Counter-arguments', 'B']];
  b += tx(30, 128, 'Mini-judgements from your paragraphs (illustrative)', { size: 17, weight: 700, fill: C.muted });
  mj.forEach(([c, w], i) => {
    const x = 30 + i * 212;
    b += rect(x, 142, 196, 64, C.panel, C.tealDark, 10, 2) + tx(x + 98, 168, c, { size: 17, weight: 700, anchor: 'middle' }) + tx(x + 98, 192, `stronger: Source ${w}`, { size: 16, anchor: 'middle', fill: w === 'B' ? C.olive : C.tealDark });
    b += arrow(x + 98, 208, 450 + (x + 98 - 450) * 0.25, 252, { w: 2.5 });
  });
  const steps = [
    ['1', 'Answer the question asked', 'If it asks which source is more convincing, name one.'],
    ['2', 'Weigh the criteria', 'Not all count equally: say which criterion decided it, and why.'],
    ['3', 'Acknowledge the limit', '“A is more convincing overall, although …”'],
  ];
  let y = 258;
  steps.forEach(([n, h, d], i) => {
    const hh = 70;
    b += panel(30, y, 840, hh, i === 1 ? C.cream : C.panel, i === 1 ? C.olive : C.panelEdge);
    b += badge(68, y + hh / 2, 20, n, i === 1 ? C.mustard : C.cream);
    b += tx(104, y + 43, h, { size: 20, weight: 700 });
    b += tx(400, y + 43, d, { size: 16 });
    y += hh + 10;
  });
  y += 8;
  b += tx(30, y + 8, 'Two weak endings', { size: 18, weight: 700, fill: C.rust });
  y += 22;
  b += box(30, y, 410, 92, { title: '“Both sources have strengths and weaknesses”', body: 'no judgement', tsize: 17, bsize: 16, fill: '#fbeee6', edge: C.rust, bfill: C.rust });
  b += box(460, y, 410, 92, { title: 'A sudden personal view on the issue', body: 'judgement not reasoned from the analysis', tsize: 17, bsize: 16, fill: '#fbeee6', edge: C.rust, bfill: C.rust });
  fig('05-reasoned-judgement', 'Reaching a reasoned judgement', b, y + 92 + 28,
    'Mini-judgements from each comparative paragraph feed a verdict that answers the question, weighs the criteria by saying which one decided it, and acknowledges a limit. Two weak endings: “both have strengths and weaknesses” and a personal view not drawn from the analysis.',
    'Name the winner, say which criterion decided it, and state its limit.',
    '## Reaching a reasoned judgement');
}

// 06 Plan under time pressure
{
  const st = [
    ['Reread and jot', 'five minutes: argument parts; three or four criteria, noting which source is stronger on each', C.tealLight],
    ['Introduction', 'the issue, the two positions, your verdict (two sentences can do it)', C.cream],
    ['Comparative paragraphs', 'three or four, one per criterion, each ending with a mini-judgement', C.teal],
    ['Perspective paragraph', 'if not already covered: the world view and context behind each source', C.tealLight],
    ['Conclusion', 'weighed verdict and its limit, consistent with the mini-judgements', C.cream],
  ];
  let b = '', y = 110;
  st.forEach(([h, d, f], i) => {
    const dl = wrap(d, 470, 17);
    const hh = Math.max(70, dl.length * LH(17) + 30);
    b += rect(30, y, 840, hh, f, C.ink, 12, 2.2);
    b += badge(68, y + hh / 2, 20, String(i + 1), i === 2 ? C.mustard : C.cream);
    b += tx(104, y + hh / 2 + 7, h, { size: 20, weight: 700 });
    b += lines(380, y + (hh - dl.length * LH(17)) / 2 + 17, dl, { size: 17 });
    if (i < st.length - 1) b += arrow(68, y + hh + 2, 68, y + hh + 16, { w: 2.5 });
    y += hh + 18;
  });
  b += tx(450, y + 8, 'About 50 minutes in all for 25 marks.', { size: 17, anchor: 'middle', weight: 600, fill: C.tealDark });
  fig('06-time-plan', 'A plan under time pressure', b, y + 36,
    'Five stages: five minutes rereading and jotting criteria, an introduction with the issue, positions and verdict, three or four comparative paragraphs each ending in a mini-judgement, a perspective paragraph if needed, and a conclusion with a weighed verdict and its limit.',
    'Decide your criteria and verdict before you write the first paragraph.',
    '## A plan you can use under time pressure');
}

// 07 Worked example
{
  let b = '';
  b += tx(450, 104, 'International recruitment of nurses (fictional sources)', { size: 17, weight: 600, anchor: 'middle', fill: C.muted, italic: true });
  const hd = (x, t_, f, e) => rect(x, 120, 410, 48, f, e, 12, 2.5) + tx(x + 205, 151, t_, { size: 18, weight: 700, anchor: 'middle' });
  b += hd(30, 'Source A: hospital trust director', C.tealLight, C.tealDark) + hd(460, 'Source B: researcher, country nurses leave', C.cream, C.olive);
  const rows = [
    ['Conclusion', 'recruit trained nurses from abroad: the fastest way to fill posts', 'recruiting countries should pay into training systems, or recruit only where there is a surplus'],
    ['Key assumption', 'benefits to nurses and families add up to benefits for their country (“so everyone benefits”)', 'recruitment is the main cause of shortages at home, supported by one hospital’s experience'],
    ['Perspective', 'a manager’s duty to patients in one country: a domestic problem, an international solution', 'the countries nurses leave: a transfer of public investment from poorer to richer systems'],
  ];
  let y = 178;
  rows.forEach(([lab, a, c]) => {
    const al = wrap(a, 370, 16), cl = wrap(c, 370, 16);
    const hh = Math.max(al.length, cl.length) * LH(16) + 54;
    b += tx(450, y + 20, lab, { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
    b += rect(30, y + 30, 410, hh - 30, C.panel, C.tealDark, 10, 2) + lines(50, y + 56, al, { size: 16 });
    b += rect(460, y + 30, 410, hh - 30, C.panel, C.olive, 10, 2) + lines(480, y + 56, cl, { size: 16 });
    y += hh + 10;
  });
  const v = 'Overall, Source B is more convincing: it answers A’s main argument (remittances “do not staff a maternity ward”), while A’s “everyone benefits” rests on an undefended assumption. Limit: B generalises from one hospital; national staffing data would strengthen it.';
  const vl = wrap(v, 780, 17);
  b += rect(30, y + 8, 840, vl.length * LH(17) + 60, C.mustard, C.ink, 14, 2.5);
  b += tx(52, y + 40, 'Reasoned judgement', { size: 19, weight: 700 }) + lines(52, y + 68, vl, { size: 17 });
  y += vl.length * LH(17) + 68;
  fig('07-worked-example', 'Comparing two sources on nurse recruitment', b, y + 28,
    'Two fictional sources on recruiting nurses from abroad compared by conclusion, key assumption and perspective. The judgement: Source B is more convincing because it answers Source A’s main argument while A relies on an undefended assumption that everyone benefits, though B generalises from one hospital.',
    'Compare criterion by criterion, then let the decisive criterion settle the verdict.',
    '## Worked example');
}
