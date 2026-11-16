import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-individuals-and-societies-criteria-in-practice';

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
  const g = gapDeg ?? Math.min(24, 180 / n);
  for (let i = 0; i < n; i++) {
    const a1 = pos[i][2] + (g * Math.PI) / 180, a2 = pos[(i + 1) % n][2] - (g * Math.PI) / 180 + (i === n - 1 ? 2 * Math.PI : 0);
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

// 01 Four criteria overview
{
  const r = rowList(30, 110, 840, [
    ['A', 'Knowing and understanding', 'Apply factual and conceptual knowledge accurately to unfamiliar contexts, with precise terminology.'],
    ['B', 'Investigating', 'Develop a systematic research question and process, working independently and collaboratively.'],
    ['C', 'Communicating', 'Organise, document and communicate learning in a suitable format, with correct referencing.'],
    ['D', 'Thinking critically', 'Analyse and evaluate the process and findings, weigh perspectives, reach substantiated conclusions.'],
  ]);
  const n = note(30, 110 + r.h + 20, 840, 'One set of criteria for history, geography, economics and the other disciplines.');
  fig('01-four-criteria', 'The four MYP Individuals and Societies criteria', r.s + n.s, 110 + r.h + 20 + n.h + 30,
    'Four rows: A knowing and understanding, B investigating, C communicating and D thinking critically, each with a one-line summary of top-band evidence. The same criteria apply across every discipline in the course.',
    'Four broad criteria, written to work for every discipline in the subject.',
    '## Where this fits in the subject');
}

// 02 Criterion A: facts -> framework -> explanation
{
  let b = label(50, 140, 'Task: explain why a historical trade route developed where it did');
  const facts = ['Climate', 'Terrain', 'Resources'];
  facts.forEach((f, i) => { b += box(50, 165 + i * 72, 210, 56, { title: f, align: 'middle', fill: C.tealLight, edge: C.tealDark, pad: 14 }); b += arrow(264, 193 + i * 72, 334, 230 + i * 30, { w: 3 }); });
  b += box(340, 175, 240, 170, { title: 'Conceptual framework', body: 'e.g. supply and demand, or geographic accessibility', fill: C.cream, edge: C.olive, align: 'middle' });
  b += arrow(584, 260, 640, 260);
  b += box(650, 175, 220, 170, { title: 'Reasoned explanation', body: 'facts connected into an argument', fill: '#eaf3f1', edge: C.tealDark, align: 'middle' });
  b += note(50, 380, 820, 'Transfer test: the same framework should explain a trade route you have never studied.', { size: 17, weight: 600 }).s;
  const ws = weakStrong(30, 470, 840, 'States the relevant facts (climate, terrain, resources) and stops: recall only.', 'Connects the facts through a conceptual framework to build a reasoned explanation.');
  b = panel(30, 110, 840, 340) + b + ws.s;
  fig('02-criterion-a-framework', 'Criterion A: connect facts with a concept', b, 470 + ws.h + 30,
    'Three facts, climate, terrain and resources, feed into a conceptual framework such as supply and demand or geographic accessibility, which produces a reasoned explanation of why a trade route developed. A weaker answer only states the facts; a stronger one connects them through the framework.',
    'Facts alone are recall; a conceptual framework turns them into an explanation that transfers.',
    '## Criterion A: Knowing and understanding');
}

// 03 Criterion B: weaker vs stronger investigation
{
  let b = label(30, 140, 'Investigating a local environmental issue');
  const ws = weakStrong(30, 158, 840, 'Uses one or two easily found sources, with no comment on their reliability.', 'Poses a clear, specific question, consults a range of source types and evaluates each one before concluding.');
  let y = 158 + ws.h + 30;
  b += ws.s + label(30, y + 4, 'The stronger process');
  y += 22;
  const q = box(30, y, 840, 60, { title: 'Clear, specific research question', fill: C.mustard, edge: C.ink, align: 'middle' });
  b += q;
  const srcY = y + 105;
  ['Government report', 'News article', 'Firsthand community account'].forEach((s, i) => {
    const x = 30 + i * 290;
    b += arrow(450, y + 62, x + 130, srcY - 6, { w: 3 }) + box(x, srcY, 260, 72, { title: s, tsize: 18, align: 'middle', fill: C.tealLight, edge: C.tealDark, pad: 12 });
    b += arrow(x + 130, srcY + 76, x + 130, srcY + 100, { w: 3 });
  });
  b += box(30, srcY + 106, 840, 66, { title: 'Evaluate each: reliable? relevant to this question?', fill: C.cream, edge: C.olive, align: 'middle' });
  b += arrow(450, srcY + 176, 450, srcY + 214) + box(250, srcY + 220, 400, 58, { title: 'Draw conclusions', fill: '#eaf3f1', edge: C.tealDark, align: 'middle' });
  fig('03-criterion-b-investigation', 'Criterion B: a systematic investigation', b, srcY + 310,
    'A weaker investigation uses one or two easily found sources without comment. A stronger one starts from a clear research question, consults a government report, a news article and a firsthand community account, evaluates each for reliability and relevance, and only then draws conclusions.',
    'A range of source types, each evaluated against the question, before any conclusion.',
    '## Criterion B: Investigating');
}

// 04 Criterion C: list vs argument
{
  const colW = 410;
  let b = panel(30, 110, colW, 470, '#fbeee6', C.rust) + tx(52, 148, '✗ Chronological list', { size: 21, weight: 700, fill: C.rust });
  ['Fact', 'Fact', 'Fact', 'Fact', 'Fact'].forEach((f, i) => { b += rect(60, 172 + i * 62, 350, 46, C.panel, C.panelEdge) + tx(80, 202 + i * 62, `${f} ${i + 1}`, { size: 17, fill: C.muted }); });
  b += tx(235, 520, 'no analytical structure', { size: 16, anchor: 'middle', fill: C.rust, weight: 600 }) + tx(235, 545, 'no source referencing', { size: 16, anchor: 'middle', fill: C.rust, weight: 600 });
  const x2 = 460;
  b += panel(x2, 110, colW, 470, '#eaf3f1', C.tealDark) + tx(x2 + 22, 148, '✓ Structured argument', { size: 21, weight: 700, fill: C.tealDark });
  b += box(x2 + 30, 170, 350, 56, { title: 'Clear argument', fill: C.mustard, edge: C.ink, align: 'middle', pad: 12 });
  [0, 1, 2].forEach((i) => {
    const y = 250 + i * 92;
    b += box(x2 + 30, y, 200, 70, { title: `Point ${i + 1}`, tsize: 17, align: 'middle', pad: 10, fill: C.panel });
    b += line(x2 + 230, y + 35, x2 + 250, y + 35, { w: 2 }) + box(x2 + 250, y + 8, 130, 54, { title: `Source [${i + 1}]`, tsize: 15, align: 'middle', pad: 8, fill: C.cream, edge: C.olive });
  });
  b += tx(x2 + 205, 545, 'period-appropriate terminology', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 });
  const n = note(30, 600, 840, 'Criterion C assesses how learning is organised and documented, not only whether facts are accurate.');
  fig('04-criterion-c-structure', 'Criterion C: same facts, different communication', b + n.s, 600 + n.h + 30,
    'Two responses on the same historical event. One is a chronological list of facts with no structure or referencing. The other builds a clear argument, attaches named, referenced sources to each point and uses period-appropriate terminology.',
    'Accurate facts are not enough: C rewards structure, referencing and precise terminology.',
    '## Criterion C: Communicating');
}

// 05 Criterion D: weighing interpretations
{
  let b = label(450, 140, 'Evaluating the causes of a historical event', { anchor: 'middle' });
  b += box(60, 165, 340, 110, { title: 'Account 1', body: 'one interpretation of the event', fill: C.tealLight, edge: C.tealDark, align: 'middle' });
  b += box(500, 165, 340, 110, { title: 'Account 2', body: 'a different interpretation', fill: C.tealLight, edge: C.tealDark, align: 'middle' });
  b += arrow(230, 280, 360, 336) + arrow(670, 280, 540, 336);
  b += box(150, 342, 600, 120, { title: 'Evaluate each', body: 'strengths and weaknesses of both interpretations', fill: C.cream, edge: C.olive, align: 'middle' });
  b += arrow(450, 466, 450, 510);
  b += box(150, 516, 600, 110, { title: 'Substantiated conclusion', body: 'which interpretation the available evidence best supports', fill: C.mustard, edge: C.ink, align: 'middle' });
  const ws = weakStrong(30, 660, 840, 'Presents one interpretation as simply correct, without comparison.', 'Compares at least two perspectives before judging between them.');
  fig('05-criterion-d-perspectives', 'Criterion D: compare, evaluate, conclude', b + ws.s, 660 + ws.h + 30,
    'Two historical accounts of the same event feed into an evaluation of the strengths and weaknesses of each, which leads to a substantiated conclusion about which interpretation the evidence best supports. A weaker answer presents one interpretation as simply correct.',
    'Top-band D weighs more than one interpretation before reaching a supported judgement.',
    '## Criterion D: Thinking critically');
}

// 06 One unit, four criteria
{
  const c = chainH(30, 150, 840, [
    { title: 'A', body: 'conceptual knowledge to frame the issue', fill: C.mustard, edge: C.ink },
    { title: 'B', body: 'researching the issue', fill: C.cream, edge: C.olive },
    { title: 'C', body: 'structured, referenced write-up', fill: C.cream, edge: C.olive },
    { title: 'D', body: 'critical evaluation weighing perspectives', fill: C.mustard, edge: C.ink },
  ], { tsize: 26, bsize: 16, h: 170, gap: 36 });
  let b = label(450, 132, 'A local-issue investigation combining history and geography', { anchor: 'middle' }) + c.s;
  const bx = (i) => 30 + i * (c.bw + 36) + c.bw / 2;
  b += parrow(`M${bx(1)},330 C${bx(1)},400 ${bx(3)},400 ${bx(3)},330`, { color: C.rust, marker: 'ahR', w: 3.5, dash: '9 7' });
  b += tx((bx(1) + bx(3)) / 2, 425, 'D needs the perspectives that B gathered', { size: 17, anchor: 'middle', fill: C.rust, weight: 700 });
  const n = note(30, 455, 840, 'Revise the criteria as connected stages of one investigation, not four separate skills.', { size: 17 });
  fig('06-one-unit-four-criteria', 'One unit, evidence for all four criteria', b + n.s, 455 + n.h + 30,
    'A single local-issue investigation runs A, framing the issue with conceptual knowledge, then B, researching it, then C, a structured referenced write-up, then D, a critical evaluation. A dashed arrow shows that strong D evaluation depends on B research having gathered more than one perspective.',
    'The criteria build on each other inside one piece of coursework.',
    '## Connecting the four criteria to a single coursework unit');
}
