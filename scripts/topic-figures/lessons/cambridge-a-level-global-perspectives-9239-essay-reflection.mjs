import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-global-perspectives-9239-essay-reflection';

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


// 01 AO2 weighting: why reflection is a separate skill
{
  let b = '';
  const bar = (y, labelTxt, pct, fill) => {
    const W = 560, x = 290;
    return tx(270, y + 34, labelTxt, { size: 19, weight: 700, anchor: 'end' }) +
      rect(x, y + 8, W, 40, '#eef2f2', C.panelEdge, 8) +
      (pct > 0 ? rect(x, y + 8, (W * pct) / 100, 40, fill, C.ink, 8, 2.5) : '') +
      tx(pct > 0 ? x + (W * pct) / 100 + 14 : x + 14, y + 35, `AO2 = ${pct}%`, { size: 19, weight: 700, fill: pct ? C.ink : C.muted });
  };
  b += panel(30, 110, 840, 190);
  b += tx(60, 146, 'Weight of AO2 Reflection', { size: 20, weight: 700, fill: C.tealDark });
  b += bar(165, 'Component 2: Essay', 22, C.mustard);
  b += bar(225, 'Written Exam', 0, C.teal);
  const q = [
    ['1', 'Viewpoint before research?'],
    ['2', 'How does my view relate to the perspectives?'],
    ['3', 'What impact has the research had?'],
    ['4', 'Why has it had that effect?'],
    ['5', 'What additional research might be useful?'],
  ];
  b += tx(450, 345, 'The Critical Path questions behind every piece of reflection', { size: 19, weight: 700, anchor: 'middle' });
  const bw = 156, gap = 15;
  q.forEach(([n, s], i) => {
    const x = 30 + i * (bw + gap);
    b += box(x, 370, bw, 150, { body: s, bsize: 16, align: 'middle', fill: i === 3 ? C.cream : C.panel, edge: i === 3 ? C.olive : C.tealDark, bfill: C.ink });
    b += badge(x + bw / 2, 370, 18, n, i === 3 ? C.mustard : C.cream);
    if (i < 4) b += arrow(x + bw + 1, 445, x + bw + gap - 1, 445, { w: 2.5 });
  });
  const n = note(30, 545, 840, '“This research has made me think more deeply” describes an experience; it does not reflect.', { size: 17, weight: 600 });
  fig('01-ao2-weight', 'Reflection: worth about a fifth of the Essay', b + n.s, 545 + n.h + 28,
    'AO2 Reflection is weighted at 22% of Component 2, the Essay, against 0% in the Written Exam. Below, the five Critical Path questions: viewpoint before research, how it relates to the perspectives, the impact of the research, why it had that effect, and what further research might help.',
    'Reflection is a fifth of the Essay mark, so it needs more than a closing sentence.',
    '## Why reflection is a separate skill');
}

// 02 The reflection sequence
{
  const steps = [
    ['1', 'Starting point', 'Your initial view, stated briefly and honestly'],
    ['2', 'Encounter', 'Which perspective challenged or confirmed it'],
    ['3', 'Effect', 'Whether your view was strengthened, qualified or reversed'],
    ['4', 'Reason', 'The specific argument or evidence that caused the change. This step earns most credit.', C.mustard],
    ['5', 'Next step', 'What would test your new view further'],
  ];
  let b = '', y = 110;
  steps.forEach(([n, h, d, f], i) => {
    const hi = i === 3;
    const hh = hi ? 104 : 82;
    b += panel(30, y, 840, hh, hi ? C.cream : C.panel, hi ? C.olive : C.panelEdge);
    b += badge(80, y + hh / 2, 25, n, hi ? C.mustard : C.cream);
    b += tx(130, y + hh / 2 + 7, h, { size: 22, weight: 700 });
    b += lines(330, y + hh / 2 + 6 - (wrap(d, 510, 17).length - 1) * LH(17) / 2, wrap(d, 510, 17), { size: 17, fill: hi ? C.ink : C.muted, weight: hi ? 600 : 400 });
    if (i < 4) b += arrow(80, y + hh + 2, 80, y + hh + 24, { w: 3 });
    y += hh + 26;
  });
  const n = note(30, y - 4, 840, '“My view changed” is a claim. “My view changed because …” is reflection.', { size: 18 });
  fig('02-reflection-sequence', 'The five-step reflection sequence', b + n.s, y - 4 + n.h + 28,
    'Five steps: state your starting point, name the perspective that challenged or confirmed it, say whether your view was strengthened, qualified or reversed, give the specific argument or evidence that caused this, and suggest what would test your new view. Step 4, the reason, is highlighted as earning most credit.',
    'The reason your view moved, step 4, is where most of the credit lies.',
    '## The reflection sequence');
}

// 03 Three ways a view can move
{
  let b = '';
  b += box(300, 110, 300, 84, { title: 'Starting view', body: 'meets the strongest opposing case', tsize: 20, bsize: 16, align: 'middle', fill: C.tealLight, edge: C.tealDark });
  const cols = [
    ['Strengthened', 'Your view survived the opposing case.', 'Explain why the opposing argument did not persuade you, not just repeat your conclusion.', C.teal],
    ['Qualified', 'Your view now holds only in some conditions.', '“I still think X, but only where Y.” The most common honest outcome, and often the most impressive.', C.mustard],
    ['Reversed', 'The research changed your mind.', 'Name the argument or evidence that did it, and say whether any part of your original view survives.', C.cream],
  ];
  const bw = 266, gap = 21, y0 = 250;
  const hs = cols.map(([h, a, d]) => boxH(bw, { title: h, body: a + '\n\n' + d, tsize: 22, bsize: 16 }));
  const H = Math.max(...hs);
  cols.forEach(([h, a, d, f], i) => {
    const x = 30 + i * (bw + gap);
    b += parrow(`M450,194 C450,222 ${x + bw / 2},210 ${x + bw / 2},${y0 - 6}`, { w: 3 });
    b += box(x, y0, bw, H, { title: h, body: a + '\n\n' + d, tsize: 22, bsize: 16, fill: i === 1 ? C.cream : C.panel, edge: i === 1 ? C.olive : C.tealDark, valign: 'top', bfill: C.ink });
  });
  const n = note(30, y0 + H + 24, 840, 'Do not invent a change of mind: an honest, reasoned “strengthened” or “qualified” beats an unexplained reversal.', { size: 17, weight: 600 });
  fig('03-three-movements', 'Three ways a view can move', b + n.s, y0 + H + 24 + n.h + 28,
    'A starting view meets the strongest opposing case and ends up strengthened, qualified or reversed. Strengthened means explaining why the opposing argument did not persuade; qualified means the view holds only in some conditions; reversed means naming the argument or evidence that changed it.',
    'Any of the three outcomes counts as reflection, provided you give the reason.',
    '## Three ways a view can move');
}

// 04 Where reflection goes
{
  let b = '';
  const parts = [
    ['Introduction', 'One sentence stating your starting view: a baseline for later reflection.', 150],
    ['Within the evaluation', 'A brief reflective sentence after you weigh a perspective: “This was the argument that made me reconsider …”', 330],
    ['Conclusion', 'Your personal, supported view, the main reason your view moved or held, and the limits of your research.', 200],
  ];
  // essay strip
  const x0 = 60, W = 780, total = parts.reduce((a, p) => a + p[2], 0);
  let x = x0;
  b += tx(450, 140, 'The essay, start to finish', { size: 18, weight: 700, anchor: 'middle', fill: C.muted });
  parts.forEach(([h, d, w], i) => {
    const pw = (W * w) / total;
    b += rect(x, 158, pw - 6, 54, [C.tealLight, C.teal, C.cream][i], C.ink, 10, 2.5) + tx(x + (pw - 6) / 2, 192, h, { size: 18, weight: 700, anchor: 'middle' });
    // reflection markers
    const marks = i === 1 ? [0.25, 0.55, 0.85] : [0.5];
    marks.forEach((m) => { b += `<circle cx="${x + (pw - 6) * m}" cy="236" r="9" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`; });
    x += pw;
  });
  b += `<circle cx="90" cy="268" r="9" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + tx(108, 274, '= a reflective moment', { size: 16, fill: C.muted });
  const bw = 266, gap = 21;
  const H = Math.max(...parts.map(([h, d]) => boxH(bw, { title: h, body: d, tsize: 20, bsize: 16 })));
  parts.forEach(([h, d], i) => { b += box(30 + i * (bw + gap), 300, bw, H, { title: h, body: d, tsize: 20, bsize: 16, valign: 'top', edge: C.tealDark, bfill: C.ink }); });
  const n = note(30, 300 + H + 24, 840, 'Use the first person here: the syllabus asks about “the learner’s own standpoint”. Never leave reflection only to the last line.', { size: 17, weight: 600 });
  fig('04-where-reflection-goes', 'Where reflection goes in the essay', b + n.s, 300 + H + 24 + n.h + 28,
    'An essay strip from introduction to conclusion with reflective moments marked: one in the introduction stating the starting view, several within the evaluation as each perspective is weighed, and one in the conclusion giving the personal supported view, the reason it moved or held, and the limits of the research.',
    'Reflection is woven through the essay, not saved for the final sentence.',
    '## Where reflection goes in the essay');
}

// 05 Limits of research
{
  const lim = [
    ['Coverage', 'regions or groups your sources did not represent'],
    ['Type of evidence', 'plenty of opinion but little data, or data from only one period'],
    ['Your own standpoint', 'a starting view that may have shaped which sources you found persuasive'],
    ['Unresolved disagreement', 'two credible sources that conflict, which your research could not decide between'],
  ];
  let b = '';
  const bw = 400;
  lim.forEach(([h, d], i) => {
    const y = 110 + i * 112;
    b += box(30, y, bw, 96, { title: h, body: d, tsize: 19, bsize: 16, valign: 'middle', edge: C.tealDark });
    b += parrow(`M${30 + bw + 4},${y + 48} C540,${y + 48} 540,${290 + 48} 590,${290 + 48}`, { w: 2.8, color: C.tealDark, marker: 'ahT' });
  });
  b += box(600, 250, 270, 180, { title: 'Each limit ends with its consequence', body: '“so my conclusion applies more confidently to … than to …”', tsize: 19, bsize: 17, align: 'middle', fill: C.cream, edge: C.olive, bfill: C.ink });
  const n = note(30, 570, 840, 'Weak: “I did not have enough time.” Useful limits are ones that affect how confident you can be in your conclusion.', { size: 17, weight: 600 });
  fig('05-limits-of-research', 'Reflecting on the limits of your research', b + n.s, 570 + n.h + 28,
    'Four kinds of limit, coverage, type of evidence, your own standpoint and unresolved disagreement between credible sources, each lead to a consequence statement: so my conclusion applies more confidently to one case than to another.',
    'Name a limit, then say what it does to your conclusion.',
    '## Reflecting on the limits of your research');
}

// 06 Further research: three parts
{
  const parts = [
    ['1', 'What', 'a specific kind of evidence or a specific perspective', '“household surveys from rural areas of countries that have introduced the policy”'],
    ['2', 'Why', 'the gap it fills', '“my sources are mostly from cities”'],
    ['3', 'How it could change the judgement', 'what a result would do to your conclusion', '“if rural households report higher costs, my conclusion that the policy is fair would need to be limited to cities”'],
  ];
  let b = '', y = 110;
  parts.forEach(([n, h, d, ex], i) => {
    const exl = wrap(ex, 440, 16);
    const hl = wrap(h, 240, 20), dl = wrap(d, 250, 16);
    const hh = Math.max(96, exl.length * LH(16) + 40, hl.length * LH(20) + dl.length * LH(16) + 34);
    b += panel(30, y, 840, hh);
    b += badge(76, y + hh / 2, 24, n, i === 2 ? C.mustard : C.cream);
    const ty = y + (hh - (hl.length * LH(20) + dl.length * LH(16))) / 2 + 18;
    b += lines(122, ty, hl, { size: 20, weight: 700 }, LH(20));
    b += lines(122, ty + hl.length * LH(20) - 2, dl, { size: 16, fill: C.muted }, LH(16));
    b += rect(400, y + 12, 455, hh - 24, '#eaf3f1', C.tealDark, 10, 2);
    b += lines(416, y + hh / 2 + 6 - (exl.length - 1) * LH(16) / 2, exl, { size: 16, italic: true }, LH(16));
    y += hh + 14;
  });
  b += box(30, y + 6, 840, 70, { title: '✗ “More research is needed” / “I would like to interview experts”', body: 'fails all three parts', tsize: 18, bsize: 16, align: 'middle', fill: '#fbeee6', edge: C.rust, tfill: C.rust, bfill: C.ink });
  fig('06-further-research', 'A relevant further-research suggestion', b, y + 6 + 70 + 28,
    'A strong suggestion has three parts, each with an example: what (household surveys from rural areas of countries that have introduced the policy), why (my sources are mostly from cities), and how it could change the judgement (the conclusion might need to be limited to cities). “More research is needed” fails all three.',
    'Say what to research, why, and how the result could change your judgement.',
    '## Suggesting further relevant research');
}

// 07 Worked example: weak vs strong reflection mapped to the sequence
{
  let b = tx(450, 100, 'Question: “Should countries make voting compulsory?”', { size: 19, weight: 600, anchor: 'middle', fill: C.muted, italic: true });
  const weak = '“Before this essay I thought voting should be compulsory. After researching, I can see both sides. In future I would research this more.”';
  const wl = wrap(weak, 780, 16);
  b += box(30, 120, 840, 34 + wl.length * LH(16) + 30, { title: '✗ Weak reflection', body: weak, tsize: 19, bsize: 16, fill: '#fbeee6', edge: C.rust, tfill: C.rust, bfill: C.ink, valign: 'top' });
  let y = 120 + 34 + wl.length * LH(16) + 30 + 22;
  b += tx(30, y + 8, '✓ Strong reflection, step by step', { size: 19, weight: 700, fill: C.tealDark });
  y += 24;
  const rows = [
    ['1', 'Starting point', 'began convinced compulsory voting simply made democracy more representative'],
    ['2', 'Encounter', 'the liberty-based argument: a right includes the right not to use it'],
    ['3', 'Effect', 'view qualified rather than reversed'],
    ['4', 'Reason', 'evidence that compulsion raises turnout among groups who vote least still persuades, but only justifies compulsion where a genuine “none of the above” option exists'],
    ['', 'Limit', 'relied on a small number of countries already using it, so cannot say how it works where trust in government is low'],
    ['5', 'Next step', 'comparative research on countries that introduced and later abolished compulsory voting'],
  ];
  rows.forEach(([n, h, d], i) => {
    const dl = wrap(d, 560, 16);
    const hh = Math.max(56, dl.length * LH(16) + 26);
    const hi = h === 'Reason';
    b += panel(30, y, 840, hh, hi ? C.cream : C.panel, hi ? C.olive : C.panelEdge);
    if (n) b += badge(66, y + hh / 2, 19, n, hi ? C.mustard : C.cream);
    else b += `<circle cx="66" cy="${y + hh / 2}" r="19" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3"/>` + tx(66, y + hh / 2 + 6, '!', { size: 18, weight: 700, anchor: 'middle' });
    b += tx(100, y + hh / 2 + 7, h, { size: 19, weight: 700 });
    b += lines(280, y + hh / 2 + 6 - (dl.length - 1) * LH(16) / 2, dl, { size: 16, fill: C.ink });
    y += hh + 10;
  });
  fig('07-worked-example', 'Weak and strong reflection compared', b, y + 20,
    'For the question on compulsory voting, the weak reflection only says the writer can see both sides. The strong reflection covers every step: a starting view, the liberty-based argument that challenged it, a qualified view, the reason (turnout evidence, but only with a none-of-the-above option), a limit in the countries studied, and specific comparative research.',
    'The strong version names what moved the writer and how far.',
    '## Worked example');
}
