import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-global-perspectives-9239-team-project-presentation';

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


// 01 Individual analysis: four questions
{
  let b = '';
  b += box(300, 110, 300, 70, { title: 'Team problem statement', body: 'agreed by the whole team', tsize: 19, bsize: 16, align: 'middle', fill: C.tealLight, edge: C.tealDark, bfill: C.ink });
  b += arrow(450, 182, 450, 210, { w: 3 });
  b += tx(450, 236, 'Your individual analysis answers:', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  const qs = [
    ['1', 'What exactly is the problem locally?', 'Who is affected, how, and how do we know?'],
    ['2', 'What causes it?', 'Causes are what a solution must act on.'],
    ['3', 'How is it globally relevant?', 'Show the same problem, or the same cause, elsewhere.'],
    ['4', 'What does your perspective highlight?', 'It shapes which causes you emphasise.'],
  ];
  const bw = 410, gap = 20;
  const H = Math.max(...qs.map(([, h, d]) => boxH(bw - 50, { title: h, body: d, tsize: 19, bsize: 16 })));
  qs.forEach(([n, h, d], i) => {
    const x = 30 + (i % 2) * (bw + gap), y = 254 + Math.floor(i / 2) * (H + 14);
    b += panel(x, y, bw, H, i === 3 ? C.cream : C.panel, i === 3 ? C.olive : C.panelEdge);
    b += badge(x + 30, y + H / 2, 18, n, i === 3 ? C.mustard : C.cream);
    b += box(x + 52, y, bw - 52, H, { title: h, body: d, tsize: 19, bsize: 16, fill: 'none', edge: 'none', bfill: C.ink });
  });
  let y = 254 + 2 * (H + 14) + 10;
  b += tx(30, y + 8, 'What different perspectives ask about', { size: 18, weight: 700, fill: C.tealDark });
  y += 24;
  const ps = [['Economic', 'costs and incentives'], ['Environmental', 'harm and sustainability'], ['Social', 'who gains and loses']];
  ps.forEach(([h, d], i) => {
    const x = 30 + i * 287;
    b += rect(x, y, 266, 70, C.panel, C.tealDark, 12, 2.2) + tx(x + 133, y + 30, h, { size: 19, weight: 700, anchor: 'middle' }) + tx(x + 133, y + 56, d, { size: 16, anchor: 'middle', fill: C.ink });
  });
  fig('01-individual-analysis', 'Your individual analysis of the problem', b, y + 70 + 28,
    'From the team’s shared problem statement, each member’s analysis answers four questions: what the problem is locally, what causes it, how it is globally relevant, and what their perspective highlights. Economic perspectives ask about costs and incentives, environmental ones about harm and sustainability, social ones about who gains and loses.',
    'Your perspective decides which causes you emphasise, and the causes decide the solution.',
    '## Step 1: your individual analysis of the problem');
}

// 02 Range of research
{
  let b = '';
  b += box(30, 115, 410, 170, { title: 'Local evidence', body: 'data from local authorities or organisations; observations; interviews you carry out (with consent and attention to safety)', tsize: 21, bsize: 17, valign: 'top', fill: C.tealLight, edge: C.tealDark, bfill: C.ink });
  b += box(460, 115, 410, 170, { title: 'Global evidence', body: 'studies or reports on the same problem elsewhere, and especially on solutions that have been tried', tsize: 21, bsize: 17, valign: 'top', fill: C.teal, edge: C.ink, bfill: C.ink });
  b += tx(450, 326, 'Across both scales, more than one type of evidence:', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  const ty = [['Data', 'for scale'], ['Expert analysis', 'for explanation'], ['Case studies', 'for what has worked']];
  ty.forEach(([h, d], i) => {
    const x = 30 + i * 287;
    b += rect(x, 344, 266, 72, C.panel, C.tealDark, 12, 2.2) + tx(x + 133, 374, h, { size: 19, weight: 700, anchor: 'middle' }) + tx(x + 133, 400, d, { size: 17, anchor: 'middle' });
  });
  const n = note(30, 440, 840, 'The most useful global research is evidence about what happened when someone tried your solution, ideally in a comparable place.', { size: 17 });
  fig('02-range-of-research', 'Range of research: two scales, several types', b + n.s, 440 + n.h + 28,
    'Research should cover local evidence, such as local data, observations and interviews, and global evidence on the same problem and solutions tried elsewhere, using data for scale, expert analysis for explanation and case studies for what has worked.',
    'Look hardest for evidence of what happened when your solution was tried.',
    '## Step 2: range of research');
}

// 03 Evaluating sources out loud
{
  let b = '';
  // slide
  b += rect(30, 120, 400, 250, C.panel, C.ink, 10, 3);
  b += rect(30, 120, 400, 40, C.tealDark, C.ink, 10, 3) + tx(50, 147, 'On the slide', { size: 18, weight: 700, fill: '#ffffff' });
  b += rect(60, 180, 200, 110, C.tealLight, C.tealDark, 6, 2);
  [[80, 70], [120, 50], [160, 85], [200, 40]].forEach(([x, h]) => { b += rect(x, 290 - h, 26, h, C.teal, C.ink, 2, 1.8); });
  b += tx(280, 205, 'the evidence', { size: 16, fill: C.muted }) + tx(280, 228, '(e.g. a chart)', { size: 16, fill: C.muted });
  b += rect(52, 308, 356, 44, C.cream, C.olive, 6, 2) + tx(230, 336, 'full reference', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  // speech
  b += path('M470,120 L870,120 L870,330 L560,330 L520,370 L525,330 L470,330 Z', { fill: '#eaf3f1', stroke: C.tealDark, w: 3 });
  b += tx(494, 152, 'In what you say', { size: 18, weight: 700, fill: C.tealDark });
  b += tx(494, 178, 'the evaluative point, in one sentence', { size: 16, fill: C.muted });
  b += lines(494, 212, wrap('“This figure comes from the council’s own survey of every household, so it is the most complete local data available.”', 350, 17), { size: 17, italic: true });
  const both = 400;
  b += rect(30, both, 840, 70, C.cream, C.olive, 14, 2.5);
  b += tx(450, both + 30, 'Both appear in the verbatim transcript.', { size: 19, weight: 700, anchor: 'middle' });
  b += tx(450, both + 55, 'Short enough to say in a sentence, clear enough to follow by ear.', { size: 16, anchor: 'middle', fill: C.ink });
  fig('03-evaluating-out-loud', 'Evaluating sources out loud', b, both + 70 + 28,
    'The slide carries the evidence and its full reference; the spoken sentence carries the evaluative point, for example that a figure comes from the council’s survey of every household and so is the most complete local data. Both appear in the transcript.',
    'Reference on the slide, evaluation in one spoken sentence.',
    '## Step 3: evaluating sources out loud');
}

// 04 Effective and workable
{
  let b = '';
  b += box(30, 115, 410, 230, { title: 'Effective?', body: '• Does it act on the causes you identified?\n• What evidence shows it would reduce the problem?\n• By how much?', tsize: 23, bsize: 18, valign: 'top', fill: C.tealLight, edge: C.tealDark, bfill: C.ink, pad: 24 });
  b += box(460, 115, 410, 230, { title: 'Workable?', body: '• Who would carry it out?\n• What would it cost, and who would pay?\n• How long would it take?\n• Would the people affected accept it?', tsize: 23, bsize: 18, valign: 'top', fill: C.cream, edge: C.olive, bfill: C.ink, pad: 24 });
  b += `<circle cx="450" cy="380" r="0"/>`;
  const n = note(30, 370, 840, 'Justification: show your solution passes both tests better than the alternatives.', { size: 19 });
  fig('04-effective-workable', 'Two tests: effective and workable', b + n.s, 370 + n.h + 28,
    'Two separate tests for a solution. Effective: does it act on the identified causes, and what evidence shows it would reduce the problem and by how much. Workable: who would carry it out, what it would cost and who pays, how long it would take, and whether the people affected would accept it.',
    'A justified solution passes both tests better than the alternatives.',
    '## Step 4: building a solution that is "effective and workable"');
}

// 05 Six-step justification
{
  const st = [
    ['State the solution precisely', 'who does what, where'],
    ['Link it to the cause', 'the cause it addresses'],
    ['Give the evidence that it works', 'from your research, with its limits'],
    ['Show it is workable', 'cost, responsibility, timescale, acceptance'],
    ['Compare briefly with an alternative', 'why yours is better on your perspective’s criteria'],
    ['Answer the strongest objection', ''],
  ];
  let b = '', y = 110;
  st.forEach(([h, d], i) => {
    const hh = 64;
    b += panel(30, y, 840, hh, i === 2 || i === 3 ? C.cream : C.panel, i === 2 || i === 3 ? C.olive : C.panelEdge);
    b += badge(72, y + hh / 2, 20, String(i + 1), i === 2 || i === 3 ? C.mustard : C.cream);
    b += tx(112, y + 39, h, { size: 20, weight: 700 });
    if (d) b += tx(480, y + 39, d, { size: 16, fill: C.ink });
    y += hh + 10;
  });
  const n = note(30, y + 6, 840, 'Acknowledging a teammate’s alternative and explaining why you still prefer yours can strengthen your justification.', { size: 17, weight: 600, fill: C.panel, edge: C.panelEdge });
  fig('05-justification-structure', 'A six-step justification', b + n.s, y + 6 + n.h + 28,
    'Six steps to justify a solution: state it precisely, link it to the cause, give the evidence that it works with its limits, show it is workable, compare it briefly with an alternative, and answer the strongest objection.',
    'Evidence and workability, steps 3 and 4, carry the justification.',
    '## Step 4: building a solution that is "effective and workable"');
}

// 06 Ten minutes
{
  const segs = [
    ['Problem: locally and globally', '1.5–2 min', 1.75, C.tealLight],
    ['Perspective and causes', '2 min', 2, C.tealLight],
    ['Research with source evaluation', '2–2.5 min', 2.25, C.teal],
    ['Solution and justification', '3 min', 3, C.mustard],
    ['Conclusion', '1 min', 1, C.cream],
  ];
  let b = '';
  const X = 60, W = 760, sc = W / 10;
  let x = X;
  // axis
  for (let m = 0; m <= 10; m++) { b += line(X + m * sc, 300, X + m * sc, 310, { w: 2 }) + tx(X + m * sc, 334, String(m), { size: 16, anchor: 'middle', fill: C.muted }); }
  b += tx(X + W + 22, 334, 'min', { size: 16, fill: C.muted });
  segs.forEach(([h, t_, m, f], i) => {
    const w = m * sc;
    b += rect(x, 220, w, 80, f, C.ink, 6, 2.5);
    b += tx(x + w / 2, 268, t_, { size: 16, weight: 700, anchor: 'middle' });
    const above = i % 2 === 0;
    const ly = above ? 150 : 186;
    b += line(x + w / 2, ly + 8, x + w / 2, 220, { color: C.muted, w: 1.5 });
    const l = wrap(h, 230, 16);
    b += lines(x + w / 2, ly - (l.length - 1) * LH(16) + 2, l, { size: 16, weight: 600, anchor: 'middle' });
    x += w;
  });
  b += line(X + W, 200, X + W, 312, { color: C.rust, w: 4 });
  b += tx(X + W + 30, 362, 'beyond 10 minutes: not assessed', { size: 17, weight: 700, fill: C.rust, anchor: 'end' });
  const n = note(30, 410, 840, 'One sensible plan, not a syllabus requirement. The solution gets the largest share: that is where research becomes argument.', { size: 17 });
  fig('06-ten-minutes', 'Organising ten minutes', b + n.s, 410 + n.h + 28,
    'A ten-minute timeline: the problem locally and globally 1.5 to 2 minutes, perspective and causes 2, research with source evaluation 2 to 2.5, solution and justification 3, and conclusion 1. Anything beyond 10 minutes is not assessed.',
    'Give the solution the biggest slice, and stop at 10 minutes.',
    '## Step 5: organising ten minutes');
}

// 07 Worked example mapped
{
  let b = tx(450, 100, 'Problem: canteen food is thrown away while some local families cannot afford enough to eat', { size: 16, weight: 600, anchor: 'middle', fill: C.muted, italic: true });
  const rows = [
    ['States the solution', 'six secondary schools give unsold canteen food daily to the community food bank, collected by its volunteers on an agreed route'],
    ['Links to the cause', 'schools pay to dispose of food because there is no simple way to pass it on'],
    ['Evaluates sources', 'food bank records: local, the only record of capacity, checked with the coordinator; a comparable city’s study, but it had paid drivers, so volunteers may collect less'],
    ['Tests workability', 'cost to schools is lower than disposal, which is why the speaker expects headteachers to accept it'],
    ['Compares an alternative', 'a teammate’s menu change is better for the environment but does nothing for families this year'],
    ['Reasoned preference', 'on economic criteria, redistribution gives more benefit for less cost'],
  ];
  let y = 120;
  rows.forEach(([h, d], i) => {
    const dl = wrap(d, 560, 16);
    const hh = Math.max(58, dl.length * LH(16) + 26);
    b += panel(30, y, 840, hh, i === 2 ? C.cream : C.panel, i === 2 ? C.olive : C.panelEdge);
    b += tx(52, y + hh / 2 + 6, h, { size: 18, weight: 700, fill: i === 5 ? C.tealDark : C.ink });
    b += lines(282, y + (hh - dl.length * LH(16)) / 2 + 15, dl, { size: 16 });
    y += hh + 10;
  });
  b += tx(450, y + 16, 'Economic perspective; details invented for illustration.', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  fig('07-worked-example', 'Anatomy of a justification passage', b, y + 44,
    'The canteen-food example broken into its moves: it states the solution precisely, links it to the cause, evaluates the food bank’s records and a comparable city’s study, tests workability through cost, compares a teammate’s menu-change alternative, and reaches a reasoned preference on economic criteria.',
    'Each sentence of a strong justification does a distinct job.',
    '## Worked example: a justification passage');
}
