import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-global-perspectives-9239-research-report-methods';

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


// 01 Three layers
{
  const layers = [
    ['1', 'Methods', 'What you did', 'a review of published studies and an analysis of national data', C.tealLight, C.tealDark],
    ['2', 'Procedure', 'How you did it', 'which studies, found how; which data, from where, over what period', C.teal, C.tealDark],
    ['3', 'Methodology', 'Why these methods suit this kind of question in this subject', 'and what that choice allows you to conclude, and what it does not', C.cream, C.olive],
  ];
  let b = '', y = 115;
  layers.forEach(([n, h, q, d, f, e], i) => {
    const inset = i * 20;
    const dl = wrap(d, 420, 16), ql = wrap(q, 420, 18);
    const hh = Math.max(110, ql.length * LH(18) + dl.length * LH(16) + 40);
    b += rect(30 + inset, y, 840 - 2 * inset, hh, f, e, 14, 2.5);
    b += badge(80 + inset, y + hh / 2, 24, n, i === 2 ? C.mustard : C.cream);
    b += tx(124 + inset, y + hh / 2 + 8, h, { size: 24, weight: 700 });
    const ty = y + (hh - (ql.length * LH(18) + dl.length * LH(16))) / 2 + 16;
    b += lines(375, ty, ql, { size: 18, weight: 700 }, LH(18));
    b += lines(375, ty + ql.length * LH(18), dl, { size: 16, fill: C.ink }, LH(16));
    y += hh + 16;
  });
  b += tx(860, 104, 'most weak methods sections stop here ↓', { size: 16, anchor: 'end', fill: C.rust, weight: 700, italic: true });
  const n = note(30, y + 6, 840, 'Methodology: “the study of the reasons why particular sets of methods are appropriate for specific academic subject areas”.', { size: 16, weight: 600, fill: C.panel, edge: C.panelEdge });
  fig('01-three-layers', 'Methods, procedure, methodology', b + n.s, y + 6 + n.h + 28,
    'Three layers of a methods section: methods, what you did; procedure, how you did it; and methodology, why those methods suit this kind of question in this subject and what they allow you to conclude. Most weak methods sections stop at the first layer.',
    'Say what you did, how, and why it suits the question; most weak answers stop at what.',
    '## Methods and methodology: the working difference');
}

// 02 Question type to methods
{
  const rows = [
    ['Empirical', 'What is the case?', '“Has X increased?” “Does X affect Y?”', 'Measurement; comparison over time or between groups', 'Statistical analysis of existing data; surveys; experiments'],
    ['Interpretive', 'What does it mean?', '“How is X represented in …?”', 'Close reading of texts, images or accounts', 'Close analysis of texts; interviews; focus groups'],
    ['Normative', 'What should be done?', '“Should X be …?” “Is X a good thing?”', 'Arguments about values and consequences, plus evidence of consequences', 'Review of the secondary literature; evaluation of evidence on outcomes'],
    ['Explanatory', 'Why does X happen?', '“Why has X declined?”', 'Evidence that tests competing explanations', 'Literature review plus data that can separate the explanations'],
  ];
  let b = '';
  const xs = [30, 252, 476, 696], ws = [200, 200, 200, 174];
  b += tx(xs[0] + 8, 128, 'Question type', { size: 17, weight: 700, fill: C.tealDark });
  b += tx(xs[1] + 8, 128, 'Example form', { size: 17, weight: 700, fill: C.tealDark });
  b += tx(xs[2] + 8, 128, 'Evidence it needs', { size: 17, weight: 700, fill: C.tealDark });
  b += tx(xs[3] + 8, 128, 'Methods that fit', { size: 17, weight: 700, fill: C.tealDark });
  let y = 142;
  rows.forEach(([ty, q, ex, ev, me], i) => {
    const hi = ty === 'Normative';
    const cells = [wrap(ex, ws[1] - 30, 16), wrap(ev, ws[2] - 30, 16), wrap(me, ws[3] - 26, 16)];
    const hh = Math.max(92, Math.max(...cells.map((c) => c.length)) * LH(16) + 28);
    b += rect(30, y, 840, hh, hi ? C.cream : C.panel, hi ? C.olive : C.panelEdge, 12, 2.2);
    b += tx(xs[0] + 18, y + hh / 2 - 2, ty, { size: 20, weight: 700 }) + tx(xs[0] + 18, y + hh / 2 + 22, q, { size: 16, fill: C.muted, italic: true });
    cells.forEach((c, k) => {
      const cx = xs[k + 1];
      b += lines(cx + 12, y + (hh - c.length * LH(16)) / 2 + 15, c, { size: 16, fill: C.ink, italic: k === 0 });
      b += arrow(cx - 22, y + hh / 2, cx - 4, y + hh / 2, { w: 2.5, color: C.tealDark, marker: 'ahT' });
    });
    y += hh + 12;
  });
  const n = note(30, y + 4, 840, '“Is industrialisation a good thing?” is normative: data can show what industrialisation has done, but judging whether that is “good” needs arguments about which outcomes matter most.', { size: 16, weight: 600 });
  fig('02-question-type-methods', 'What kind of question have you asked?', b + n.s, y + 4 + n.h + 28,
    'Four question types matched to evidence and methods. Empirical questions need measurement and suit data analysis, surveys or experiments; interpretive questions need close reading and suit text analysis or interviews; normative questions need arguments about values plus evidence of consequences; explanatory questions need evidence that tests competing explanations.',
    'The kind of question decides the evidence, and the evidence decides the method.',
    '## Step 1: work out what kind of question you have asked');
}

// 03 Design decisions per method
{
  const ms = [
    ['Secondary literature review', 'how you will find sources; which you will include; organise by perspective, not one by one'],
    ['Close analysis of texts', 'which texts and passages, and why; what you are looking for; test your reading against an alternative'],
    ['Interviews and focus groups', 'who and how many; how contacted; open questions; how responses are recorded and grouped into themes'],
    ['Surveys', 'the population and how it is sampled; pilot the questions; a survey records what people say, not what they do'],
    ['Statistical or numerical data', 'check definitions, period covered, who collected it and how; decide the comparison in advance'],
    ['Experiments', 'what you vary, measure and hold constant; safety'],
  ];
  let b = '';
  const bw = 410, gap = 20;
  const H = Math.max(...ms.map(([h, d]) => boxH(bw, { title: h, body: d, tsize: 20, bsize: 16 })));
  ms.forEach(([h, d], i) => {
    const x = 30 + (i % 2) * (bw + gap), y = 110 + Math.floor(i / 2) * (H + 16);
    b += box(x, y, bw, H, { title: h, body: d, tsize: 20, bsize: 16, valign: 'top', edge: C.tealDark, bfill: C.ink, fill: i === 0 ? C.cream : C.panel });
  });
  const y = 110 + 3 * (H + 16);
  const n = note(30, y + 4, 840, 'A stated search strategy turns “I read some articles” into a method.', { size: 17 });
  fig('03-design-decisions', 'Design decisions you must be able to defend', b + n.s, y + 4 + n.h + 28,
    'Six methods with their design decisions: a literature review needs a search strategy, inclusion rules and organisation by perspective; text analysis needs chosen passages and an alternative reading; interviews need participants, open questions and theme analysis; surveys need sampling and piloting; data need checked definitions; experiments need controlled variables and safety.',
    'Choosing a method is not enough; explain how you carried it out.',
    '## Step 3: design each method so it can be defended');
}

// 04 Mixing methods
{
  let b = '';
  b += box(30, 120, 330, 110, { title: 'National data', body: 'shows that a change happened', tsize: 21, bsize: 17, align: 'middle', fill: C.tealLight, edge: C.tealDark, bfill: C.ink });
  b += box(540, 120, 330, 110, { title: 'Interviews', body: 'show how people experienced it', tsize: 21, bsize: 17, align: 'middle', fill: C.tealLight, edge: C.tealDark, bfill: C.ink });
  b += `<circle cx="450" cy="175" r="44" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + tx(450, 170, 'compare', { size: 16, weight: 700, anchor: 'middle' }) + tx(450, 190, 'findings', { size: 16, weight: 700, anchor: 'middle' });
  b += arrow(362, 175, 402, 175, { w: 3 }) + arrow(538, 175, 498, 175, { w: 3 });
  b += parrow('M450,221 C450,260 240,250 240,290', { w: 3 }) + parrow('M450,221 C450,260 660,250 660,290', { w: 3 });
  b += box(60, 298, 360, 120, { title: 'Both point the same way', body: 'your conclusion is more secure', tsize: 20, bsize: 17, align: 'middle', edge: C.tealDark, bfill: C.ink });
  b += box(480, 298, 360, 120, { title: 'They conflict', body: 'the conflict is itself a finding to discuss', tsize: 20, bsize: 17, align: 'middle', edge: C.olive, fill: C.cream, bfill: C.ink });
  b += weakStrong(30, 446, 840, 'Four thin methods within 5000 words.', 'Two well-designed methods, each answering a part of the question the other cannot, or checking the other.', { size: 17, wTitle: 'Hard to manage', sTitle: 'Usually more manageable' }).s;
  const h = 446 + weakStrong(30, 446, 840, 'Four thin methods within 5000 words.', 'Two well-designed methods, each answering a part of the question the other cannot, or checking the other.', { size: 17, wTitle: 'Hard to manage', sTitle: 'Usually more manageable' }).h;
  fig('04-mixing-methods', 'Combining two methods', b, h + 28,
    'National data shows that a change happened; interviews show how people experienced it. Comparing them gives two outcomes: if both point the same way the conclusion is more secure, and if they conflict the conflict is a finding to discuss. Two well-designed methods are usually more manageable than four thin ones.',
    'Mix methods so each answers what the other cannot, or checks it.',
    '## Step 4: combine methods where one is not enough');
}

// 05 Ethics
{
  const e = [
    ['Informed consent', 'Participants know what the research is for and agree to take part.'],
    ['Anonymity and confidentiality', 'Names and identifying details are removed unless participants agree otherwise.'],
    ['Right to withdraw', 'Participants can stop at any point.'],
    ['Sensitivity and safety', 'Avoid topics or settings that could cause harm to participants or to you.'],
  ];
  let b = '';
  const bw = 410, gap = 20;
  const H = Math.max(...e.map(([h, d]) => boxH(bw - 70, { title: h, body: d, tsize: 20, bsize: 17 })));
  e.forEach(([h, d], i) => {
    const x = 30 + (i % 2) * (bw + gap), y = 110 + Math.floor(i / 2) * (H + 18);
    b += panel(x, y, bw, H);
    b += `<circle cx="${x + 38}" cy="${y + H / 2}" r="20" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + path(`M${x + 28},${y + H / 2} l7,8 l13,-15`, { w: 3.5 });
    b += box(x + 62, y, bw - 62, H, { title: h, body: d, tsize: 20, bsize: 17, edge: 'none', fill: 'none', bfill: C.ink });
  });
  const y = 110 + 2 * (H + 18);
  const n = note(30, y + 4, 840, 'For research involving people, say in your methods section how you met these conventions.', { size: 17 });
  fig('05-research-ethics', 'Research ethics with participants', b + n.s, y + 4 + n.h + 28,
    'Four ethical conventions for research involving people: informed consent, anonymity and confidentiality, the right to withdraw at any point, and sensitivity and safety for participants and the researcher.',
    'Show in the methods section how each convention was met.',
    '## Step 5: research ethics');
}

// 06 Five questions of a methods section with worked example
{
  const qs = [
    ['1', 'What did I do?', 'analysed published exam results; reviewed literature on school accountability'],
    ['2', 'How exactly?', 'five years of results for 40 schools in one region alongside free-meal eligibility; a university library search and the reference lists of two key reviews'],
    ['3', 'Why does this suit my question and subject?', 'the question has an empirical and a normative part; education research combines outcome data with argument about what schools are for'],
    ['4', 'What are the limits?', 'data from one region; no pupils’ or parents’ views'],
    ['5', 'How do the limits affect what I can conclude?', 'the finding about intake may not hold nationally; the conclusion is about measurement, not how league tables are experienced'],
  ];
  let b = tx(450, 102, 'Example: “Are national school league tables a fair way to judge school quality?” (invented details)', { size: 16, weight: 600, anchor: 'middle', fill: C.muted, italic: true });
  let y = 120;
  qs.forEach(([n, q, a], i) => {
    const ql = wrap(q, 230, 18), al = wrap(a, 470, 16);
    const hh = Math.max(76, ql.length * LH(18) + 26, al.length * LH(16) + 26);
    b += panel(30, y, 840, hh, i >= 3 ? C.cream : C.panel, i >= 3 ? C.olive : C.panelEdge);
    b += badge(68, y + hh / 2, 20, n, i >= 3 ? C.mustard : C.cream);
    b += lines(102, y + (hh - ql.length * LH(18)) / 2 + 16, ql, { size: 18, weight: 700 }, LH(18));
    b += lines(370, y + (hh - al.length * LH(16)) / 2 + 15, al, { size: 16 }, LH(16));
    if (i < 4) b += arrow(68, y + hh + 1, 68, y + hh + 13, { w: 2.5 });
    y += hh + 14;
  });
  const n = note(30, y + 4, 840, 'Limits must be applied to the conclusion, not just listed (steps 4 and 5).', { size: 17 });
  fig('06-methods-section', 'Five questions a methods section answers', b + n.s, y + 4 + n.h + 28,
    'Five questions in order, each answered from the league-tables example: what was done, how exactly, why it suits the question and subject, what the limits are, and how those limits affect the conclusion.',
    'Name, describe, justify, limit, then apply the limit to the conclusion.',
    '## Step 6: write the methods section');
}

// 07 Methods set the boundary of claims
{
  const rows = [
    ['Qualitative evidence from a few people', 'how and why something is experienced', 'how common it is'],
    ['Data from one place or period', 'conclusions about that place or period first', 'automatic generalisation elsewhere'],
    ['Correlation in numerical data', 'that two things vary together', 'cause, without further evidence'],
    ['Evidence of outcomes', 'what has happened', 'a normative judgement, without explicit reasoning about values'],
  ];
  let b = '';
  b += tx(180, 132, 'Your evidence', { size: 18, weight: 700, anchor: 'middle', fill: C.muted });
  b += tx(486, 132, '✓ Can support', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += tx(750, 132, '✗ Cannot, alone', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  let y = 148;
  rows.forEach(([ev, can, cant]) => {
    const l1 = wrap(ev, 250, 18), l2 = wrap(can, 215, 16), l3 = wrap(cant, 200, 16);
    const hh = Math.max(l1.length * LH(18), l2.length * LH(16), l3.length * LH(16)) + 30;
    b += rect(30, y, 300, hh, C.panel, C.tealDark, 12, 2.2);
    b += lines(180, y + (hh - l1.length * LH(18)) / 2 + 16, l1, { size: 18, weight: 700, anchor: 'middle' }, LH(18));
    b += arrow(333, y + hh / 2, 352, y + hh / 2, { w: 2.5, color: C.tealDark, marker: 'ahT' });
    b += rect(356, y, 260, hh, '#eaf3f1', C.tealDark, 12, 2);
    b += lines(486, y + (hh - l2.length * LH(16)) / 2 + 15, l2, { size: 16, anchor: 'middle' }, LH(16));
    b += rect(630, y, 240, hh, '#fbeee6', C.rust, 12, 2);
    b += lines(750, y + (hh - l3.length * LH(16)) / 2 + 15, l3, { size: 16, anchor: 'middle' }, LH(16));
    y += hh + 12;
  });
  const n = note(30, y + 6, 840, 'Linking the limits of your methods to the strength of your conclusion meets the AO2 demand to reflect on scope, nature and limitations.', { size: 16, weight: 600 });
  fig('07-boundary-of-claims', 'Your methods set what you can claim', b + n.s, y + 6 + n.h + 28,
    'Four kinds of evidence with what each can and cannot support: qualitative evidence from a few people shows how and why but not how common; data from one place supports conclusions about that place first; correlation does not establish cause alone; outcome evidence needs explicit reasoning about values to support a normative judgement.',
    'State the boundary your methods set, and keep your conclusion inside it.',
    '## How methodology shapes your conclusion');
}
