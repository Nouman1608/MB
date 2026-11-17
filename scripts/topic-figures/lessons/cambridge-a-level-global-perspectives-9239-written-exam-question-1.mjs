import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-global-perspectives-9239-written-exam-question-1';

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


// 01 Where Q1 sits
{
  let b = '';
  const chip = (x, y, L, f, e) => rect(x, y, 40, 34, f, e, 8, 2.2) + tx(x + 20, y + 24, L, { size: 18, weight: 700, anchor: 'middle' });
  const qs = [
    ['Question 1 · 5 marks', 'short answers on both sources', 'AB', C.mustard],
    ['Question 2', 'the evidence in one source', '1', C.panel],
    ['Question 3', 'essay comparing arguments and perspectives in both', 'AB', C.panel],
  ];
  qs.forEach(([h, d, k, f], i) => {
    const x = 30 + i * 290;
    b += box(x, 115, 260, 200, { title: h, body: d, tsize: 20, bsize: 17, align: 'middle', fill: f, edge: C.ink, bfill: C.ink, sw: i === 0 ? 3 : 2.2, valign: 'top', pad: 22 });
    if (k === 'AB') b += chip(x + 84, 262, 'A', C.tealLight, C.tealDark) + chip(x + 136, 262, 'B', C.cream, C.olive);
    else b += rect(x + 60, 262, 140, 34, '#ffffff', C.muted, 8, 2) + tx(x + 130, 285, 'one source', { size: 16, weight: 700, anchor: 'middle', fill: C.muted });
    if (i < 2) b += arrow(x + 262, 215, x + 286, 215, { w: 3 });
  });
  b += tx(450, 350, 'the only part answered in short answers drawing on both sources', { size: 16, italic: true, fill: C.muted, anchor: 'middle' });
  b += line(160, 318, 160, 334, { color: C.muted, w: 1.5 });
  // timing bar
  const y = 400;
  b += tx(30, y, 'Timing: 90 minutes for 45 marks', { size: 18, weight: 700, fill: C.tealDark });
  b += rect(30, y + 16, 840, 44, '#eef2f2', C.panelEdge, 8, 2);
  b += rect(30, y + 16, 840 / 9, 44, C.mustard, C.ink, 8, 2.5) + tx(30 + 420 / 9, y + 44, 'Q1', { size: 17, weight: 700, anchor: 'middle' });
  b += tx(30 + 840 / 9 + 16, y + 44, '5 of 45 marks ≈ one-ninth ≈ about 10 minutes', { size: 17, weight: 600 });
  const n = note(30, y + 84, 840, 'Your first close reading of both sources also serves Questions 2 and 3: mark conclusions, reasons and evidence as you go.', { size: 17, weight: 600 });
  fig('01-question-1-in-paper', 'Where Question 1 sits in the paper', b + n.s, y + 84 + n.h + 28,
    'Question 1, worth 5 marks, asks short questions on both sources; Question 2 works on the evidence in one source; Question 3 is an essay comparing both. Five of the paper’s 45 marks is about one-ninth, roughly 10 of the 90 minutes.',
    'About ten minutes, but the close reading you do here feeds Questions 2 and 3.',
    '## What Question 1 is testing');
}

// 02 Ten statement types
{
  const ty = [
    ['Fact', 'can be checked; true or false', 'dates, measured figures, named events'],
    ['Opinion', 'a view that cannot simply be checked', '“best”, “unfair”, “should”'],
    ['Argument', 'reasons to support a conclusion', '“because”, “therefore”, “so”'],
    ['Rant', 'emotional, one-sided, little reasoning', 'exaggeration, insults, exclamation'],
    ['Speculation', 'a guess about something uncertain', '“perhaps”, “it may be that”'],
    ['Prediction', 'a claim about what will happen', '“will”, “by 2040”'],
    ['Explanation', 'why something is the case', '“this happened because”'],
    ['Hypothesis', 'a proposed explanation that could be tested', '“one possible reason is …”'],
    ['Account', 'a description of events, often first-hand', '“When I arrived, …”'],
    ['Belief', 'a view held as true, from values or faith', '“I believe”, “it is wrong to”'],
  ];
  let b = '';
  const bw = 410, gap = 20, hh = 112;
  ty.forEach(([h, d, s], i) => {
    const x = 30 + (i % 2) * (bw + gap), y = 110 + Math.floor(i / 2) * (hh + 12);
    const hi = h === 'Argument' || h === 'Explanation';
    b += panel(x, y, bw, hh, hi ? C.cream : C.panel, hi ? C.olive : C.panelEdge);
    b += tx(x + 18, y + 30, h, { size: 20, weight: 700 }) + tx(x + 18, y + 55, d, { size: 16, fill: C.ink });
    b += rect(x + 18, y + 68, bw - 36, 32, hi ? '#ffffff' : '#eaf3f1', C.tealDark, 8, 1.5) + tx(x + 30, y + 90, s, { size: 16, fill: C.tealDark, italic: true });
  });
  const y = 110 + 5 * (hh + 12);
  b += tx(450, y + 14, 'Working definitions for study: the syllabus lists the terms without defining each.', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  fig('02-statement-types', 'Ten kinds of statement', b, y + 40,
    'Ten statement types with a working definition and typical signal words: fact, opinion, argument, rant, speculation, prediction, explanation, hypothesis, account and belief. Argument and explanation are highlighted because both use “because”.',
    'Classify a sentence by what it is doing, using the signals as clues, not proof.',
    '## Skill 1: classifying statements');
}

// 03 Two distinctions
{
  let b = '';
  b += tx(30, 132, 'Argument or explanation? Both use “because”.', { size: 20, weight: 700 });
  b += box(30, 150, 410, 172, { title: 'Argument', body: 'persuades you to accept a conclusion\n\n“Cities should plant more trees because shade cools streets.”', tsize: 20, bsize: 17, valign: 'top', fill: C.cream, edge: C.olive, bfill: C.ink });
  b += box(460, 150, 410, 172, { title: 'Explanation', body: 'accounts for something already accepted as true\n\n“The street is cooler because the trees shade it.”', tsize: 20, bsize: 17, valign: 'top', fill: C.tealLight, edge: C.tealDark, bfill: C.ink });
  b += tx(450, 352, 'Ask: is the writer trying to make me believe the final claim, or telling me why it is so?', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600, italic: true });
  b += tx(30, 404, 'Fact or claim of fact?', { size: 20, weight: 700 });
  b += rect(30, 422, 840, 70, C.panel, C.tealDark, 12, 2.2);
  b += tx(450, 464, '“Air temperature in the park was 3 °C lower than on the main road.”', { size: 18, italic: true, anchor: 'middle' });
  b += arrow(250, 496, 250, 528, { w: 3, color: C.tealDark, marker: 'ahT' }) + arrow(650, 496, 650, 528, { w: 3, color: C.olive, marker: 'ahO' });
  b += box(30, 534, 410, 110, { title: 'Identify a fact?', body: 'choose a checkable statement like this one', tsize: 19, bsize: 17, align: 'middle', fill: C.tealLight, edge: C.tealDark, bfill: C.ink });
  b += box(460, 534, 410, 110, { title: 'Should you accept it?', body: 'calling it a fact does not make it true: that is evaluation', tsize: 19, bsize: 17, align: 'middle', fill: C.cream, edge: C.olive, bfill: C.ink });
  fig('03-two-distinctions', 'The two distinctions behind most errors', b, 672,
    'An argument uses “because” to persuade you of a conclusion, while an explanation uses it to say why something accepted is so. A checkable statement about park temperature is a claim of fact: it can be identified as a fact-type statement, but whether to accept it is a matter of evaluation.',
    'Persuading or explaining? Checkable or checked? Ask both before you label.',
    '## Skill 1: classifying statements');
}

// 04 Parts of an argument
{
  let b = '';
  b += box(290, 110, 320, 100, { title: 'Main conclusion', body: 'the claim everything else supports', tsize: 21, bsize: 16, align: 'middle', fill: C.mustard, edge: C.ink, bfill: C.ink, sw: 3 });
  b += box(290, 262, 320, 104, { title: 'Intermediate conclusion', body: 'supported by reasons; often marked by “so”', tsize: 19, bsize: 16, align: 'middle', fill: C.cream, edge: C.olive, bfill: C.ink });
  b += arrow(450, 260, 450, 216, { w: 3.5 });
  const rs = [[130, 'Reason', '“because”, “since”, “as”'], [450, 'Reason', ''], [770, 'Evidence', 'supporting a reason']];
  b += box(40, 420, 240, 100, { title: 'Reason', body: '“because”, “since”, “as”', tsize: 19, bsize: 16, align: 'middle', edge: C.tealDark, bfill: C.ink });
  b += box(330, 420, 240, 100, { title: 'Reason', body: 'a claim offered in support', tsize: 19, bsize: 16, align: 'middle', edge: C.tealDark, bfill: C.ink });
  b += box(620, 420, 240, 100, { title: 'Supporting evidence', body: 'figures, examples, sources', tsize: 19, bsize: 16, align: 'middle', edge: C.tealDark, bfill: C.ink });
  b += arrow(200, 418, 360, 372, { w: 3 }) + arrow(450, 418, 450, 372, { w: 3 }) + arrow(700, 418, 540, 372, { w: 3 });
  // assumption
  b += `<rect x="640" y="236" width="230" height="120" rx="12" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5" stroke-dasharray="8 6"/>`;
  b += lines(755, 272, ['Unstated assumption'], { size: 18, weight: 700, anchor: 'middle' }) + lines(755, 300, ['a missing step; if false,', 'the argument breaks'], { size: 16, anchor: 'middle' }, 21);
  b += arrow(638, 290, 612, 176, { w: 2.5, dash: '6 5' });
  // counter
  b += box(30, 226, 240, 140, { title: 'Counter-assertion', body: '“Some say trees are too costly, but …”: raised to be answered', tsize: 18, bsize: 16, align: 'middle', fill: '#fbeee6', edge: C.rust, bfill: C.ink });
  b += line(272, 290, 288, 180, { color: C.rust, w: 3, dash: '' });
  const n = note(30, 544, 840, 'Find the main conclusion by asking “why should I believe this?” If the rest of the source answers, you have it. Identify: quote or closely paraphrase. Explain: add one sentence on how the part works.', { size: 16, weight: 600 });
  fig('04-argument-parts', 'Locating the parts of an argument', b + n.s, 544 + n.h + 28,
    'An argument map: reasons and supporting evidence lead to an intermediate conclusion, which supports the main conclusion. An unstated assumption is a missing step the argument needs, and a counter-assertion is a view raised in order to be answered.',
    'Find the claim everything else supports, then name the role of each other sentence.',
    '## Skill 2: locating the parts of an argument');
}

// 05 Precise comparison
{
  let b = '';
  b += box(270, 115, 360, 76, { title: 'Point of comparison', body: 'what both sources address', tsize: 20, bsize: 16, align: 'middle', fill: C.mustard, edge: C.ink, bfill: C.ink });
  b += arrow(360, 193, 230, 236, { w: 3 }) + arrow(540, 193, 670, 236, { w: 3 });
  b += box(30, 242, 400, 76, { title: 'Source A’s position', tsize: 19, align: 'middle', fill: C.tealLight, edge: C.tealDark });
  b += box(470, 242, 400, 76, { title: 'Source B’s position', tsize: 19, align: 'middle', fill: C.cream, edge: C.olive });
  const ex = '“Both sources accept that streets are hotter than parks (point of agreement), but Source A treats tree planting as the solution, while Source B argues that the cost falls unfairly on poorer districts (point of difference).”';
  const el = wrap(ex, 780, 17);
  b += rect(30, 344, 840, el.length * LH(17) + 36, '#eaf3f1', C.tealDark, 12, 2.2) + lines(52, 374, el, { size: 17, italic: true });
  const y = 344 + el.length * LH(17) + 56;
  const ws = weakStrong(30, y, 840, '“Both are about cities.” (topic level)', 'A specific, sourced similarity or difference, with both sources in the same sentence.', { size: 17 });
  b += ws.s;
  b += tx(450, y + ws.h + 34, 'Compare: similarities and/or differences.   Contrast: differences.', { size: 17, anchor: 'middle', fill: C.tealDark, weight: 600 });
  fig('05-precise-comparison', 'Relating the two sources precisely', b, y + ws.h + 62,
    'A comparison names a point of comparison, then states Source A’s and Source B’s position on it, as in the example where both accept streets are hotter than parks but differ on tree planting and fairness. Comparing at topic level, “both are about cities”, earns little.',
    'Name the point, then each source’s position on it.',
    '## Skill 3: relating the two sources');
}

// 06 Worked example annotated
{
  let b = '';
  const segs = [
    ['Last summer, surface temperatures on our tree-lined avenues were up to 8 °C lower than on unshaded roads.', 'Claim of fact (evidence)', C.tealLight, C.tealDark],
    ['We will therefore plant 20,000 street trees by 2030.', 'Main conclusion; also a prediction / commitment', C.mustard, C.ink],
    ['Trees are the cheapest way to keep residents safe in heatwaves.', 'Assertion: no evidence given', '#fbeee6', C.rust],
  ];
  b += rect(30, 110, 840, 44, C.tealDark, C.tealDark, 12) + tx(52, 139, 'Source A (city council press release)', { size: 18, weight: 700, fill: '#ffffff' });
  let y = 160;
  segs.forEach(([s, lab, f, e]) => {
    const sl = wrap(s, 470, 17), ll = wrap(lab, 230, 17);
    const hh = Math.max(sl.length, ll.length) * LH(17) + 28;
    b += rect(30, y, 520, hh, C.panel, C.panelEdge, 10, 2);
    b += lines(48, y + 28, sl, { size: 17, italic: true });
    b += arrow(554, y + hh / 2, 586, y + hh / 2, { w: 2.5 });
    b += rect(590, y + 4, 280, hh - 8, f, e, 10, 2.2) + lines(730, y + hh / 2 + 6 - (ll.length - 1) * LH(17) / 2, ll, { size: 17, weight: 700, anchor: 'middle' });
    y += hh + 10;
  });
  y += 14;
  b += rect(30, y, 840, 44, C.olive, C.olive, 12) + tx(52, y + 29, 'Source B (letter from a residents’ group), in brief', { size: 18, weight: 700, fill: '#ffffff' });
  y += 50;
  const bl = wrap('Trees planned mainly in the city centre; our district has the fewest trees and oldest housing but is not on the list; residents need cooling centres this summer, not promises for 2030.', 790, 17);
  b += rect(30, y, 840, bl.length * LH(17) + 26, C.panel, C.panelEdge, 10, 2) + lines(48, y + 27, bl, { size: 17, italic: true });
  y += bl.length * LH(17) + 26 + 22;
  b += box(30, y, 840, 120, { title: 'Difference in perspective (Question c)', body: 'A judges the policy by its overall cooling effect across the city; B judges it by who benefits first, shaped by fairness between districts and the urgency of this summer’s heat.', tsize: 19, bsize: 17, fill: C.cream, edge: C.olive, bfill: C.ink });
  fig('06-worked-example', 'Reading the worked example sources', b, y + 120 + 28,
    'Source A’s three sentences labelled: the 8 °C temperature figure is a claim of fact used as evidence, the plan to plant 20,000 trees by 2030 is the main conclusion and a prediction, and the claim that trees are the cheapest option is an unsupported assertion. Source B’s perspective differs by judging who benefits first.',
    'Three sentences, three different kinds of statement: that precision earns the marks.',
    '## Worked example');
}

// 07 Command words
{
  const cw = [
    ['Identify', 'name, select or recognise', 'Use the source’s words: quote or closely paraphrase.'],
    ['Explain', 'set out reasons or make relationships evident', 'Use your own words: one sentence on how it works.'],
    ['Compare', 'identify/comment on similarities and/or differences', 'Both sources in the same sentence.'],
    ['Contrast', 'identify/comment on differences', 'Both sources in the same sentence.'],
  ];
  let b = '', y = 110;
  cw.forEach(([w, d, h], i) => {
    const hh = 84;
    b += panel(30, y, 840, hh, i === 0 ? C.cream : C.panel, i === 0 ? C.olive : C.panelEdge);
    b += rect(48, y + 18, 150, 48, i < 2 ? C.mustard : C.teal, C.ink, 24, 2.5) + tx(123, y + 49, w, { size: 20, weight: 700, anchor: 'middle' });
    b += tx(222, y + 36, d, { size: 17, weight: 600 });
    b += tx(222, y + 64, h, { size: 16, fill: C.tealDark });
    y += hh + 12;
  });
  const n = note(30, y + 6, 840, 'Label every answer A or B when both sources are in play. Move on once each part has a precise answer.', { size: 17 });
  fig('07-command-words', 'Match the command word', b + n.s, y + 6 + n.h + 28,
    'Four command words with what each asks: identify means name, select or recognise, using the source’s words; explain means set out reasons, in your own words; compare covers similarities and differences, contrast only differences, both naming the two sources together.',
    'Identify in the source’s words; explain in your own.',
    '## Exam technique');
}
