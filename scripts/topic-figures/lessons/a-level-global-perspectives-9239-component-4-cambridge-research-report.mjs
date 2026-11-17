import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'a-level-global-perspectives-9239-component-4-cambridge-research-report';

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

// 01 Marks and AO weights
{
  const sc = 840 / 85;
  let b = tx(30, 140, 'Marks: 85 in total', { size: 18, weight: 700, fill: C.tealDark });
  b += rect(30, 155, 75 * sc, 70, C.mustard, C.ink, 6, 2.2) + tx(30 + 37.5 * sc, 198, 'Research report: 75 marks (up to 5000 words)', { size: 18, weight: 700, anchor: 'middle' });
  b += rect(30 + 75 * sc, 155, 10 * sc, 70, C.cream, C.olive, 6, 2.2) + tx(30 + 80 * sc, 186, 'Log', { size: 15, weight: 700, anchor: 'middle' }) + tx(30 + 80 * sc, 206, '10', { size: 15, weight: 700, anchor: 'middle' });
  b += tx(30, 275, 'Assessment objective weighting', { size: 18, weight: 700, fill: C.tealDark });
  const ao = [['AO1 65%', 65, C.teal], ['AO2 20%', 20, C.tealLight], ['AO3 15%', 15, '#eef0f0']];
  let x = 30;
  ao.forEach(([l, p, f]) => { b += rect(x, 290, p * 8.4, 70, f, C.ink, 6, 2.2) + tx(x + p * 4.2, 333, l, { size: 18, weight: 700, anchor: 'middle' }); x += p * 8.4; });
  b += tx(30 + 32.5 * 8.4, 388, 'research, analysis, evaluation', { size: 15, anchor: 'middle', fill: C.muted }) + tx(30 + 75 * 8.4, 388, 'reflection', { size: 15, anchor: 'middle', fill: C.muted }) + tx(30 + 92.5 * 8.4, 388, 'communication', { size: 15, anchor: 'middle', fill: C.muted });
  const n = note(30, 415, 840, 'Also submitted: the research proposal form (teacher-approved, not externally marked).', { size: 17 });
  fig('01-marks-and-weights', 'Component 4 at a glance', b + n.s, 415 + n.h + 30,
    'Component 4 is worth 85 marks: a research report of up to 5000 words worth 75 and a research log worth 10. The assessment objectives are weighted AO1 65%, AO2 20% and AO3 15%. The research proposal form is also submitted but not externally marked.',
    'The report carries most of the marks, and research and evaluation carry most of the report.',
    '## What the syllabus requires');
}

// 02 Topic to question
{
  const r = [
    ['“Industrialisation”', 'a topic, not a question', '#fbeee6', C.rust, '✗'],
    ['“Has industrialisation been environmentally damaging?”', 'a question, but one-sided', C.cream, C.olive, '~'],
    ['“Is industrialisation a good thing?”', 'works: opens up competing views', '#eaf3f1', C.tealDark, '✓'],
  ];
  let b = '';
  r.forEach(([q, d, f, e, m], i) => { const y = 115 + i * 120; b += box(30, y, 840, 96, { title: `${m}  ${q}`, body: d, fill: f, edge: e, tsize: 20, bsize: 16 }); if (i < 2) b += arrow(450, y + 98, 450, y + 118, { w: 3 }); });
  b += label(30, 500, 'Scope: the teacher checks it is “not too large, nor too complex”');
  b += `<defs><linearGradient id="sg" x1="0" x2="1"><stop offset="0" stop-color="#f3d9c9"/><stop offset="0.5" stop-color="${C.mustard}"/><stop offset="1" stop-color="#f3d9c9"/></linearGradient></defs>`;
  b += `<rect x="30" y="515" width="840" height="44" rx="22" fill="url(#sg)" stroke="${C.ink}" stroke-width="2"/>`;
  b += tx(50, 543, 'too broad: shallow', { size: 16, weight: 700 }) + tx(450, 543, 'best fit', { size: 17, weight: 700, anchor: 'middle' }) + tx(850, 543, 'too narrow: not enough evidence', { size: 16, weight: 700, anchor: 'end' });
  fig('02-question-framing', 'From topic to research question', b, 590,
    'Three versions: industrialisation is a topic, not a question; has industrialisation been environmentally damaging is a question but one-sided; is industrialisation a good thing works because it opens competing views. Below, a scale from too broad and shallow to too narrow with too little evidence, with the best fit in between.',
    'The title must be a question that opens a debate, sized to the evidence available.',
    '## Choosing and framing the research question');
}

// 03 Proposal
{
  const items = [['Research question', 'the single question the report answers'], ['Key concepts', 'e.g. gender and feminism for women in poetry'], ['Outline of the debate', 'the perspectives to be addressed'], ['Example sources', 'what will be used']];
  let b = '';
  items.forEach(([h, d], i) => { b += box(30 + (i % 2) * 300, 115 + Math.floor(i / 2) * 120, 280, 105, { title: h, body: d, tsize: 18, bsize: 15, fill: C.panel, edge: C.tealDark, valign: 'top' }); });
  b += arrow(614, 230, 646, 230, { w: 4 });
  b += box(650, 115, 220, 225, { title: 'Teacher checks', body: 'concepts and debate relevant; scope to meet criteria; no safety issues; then formally approves', fill: C.cream, edge: C.olive, tsize: 18, bsize: 15, valign: 'top' });
  const n = note(30, 365, 840, 'Not externally marked, but sent to Cambridge with the report and log. A weak proposal often leads to a weak question.', { size: 16, weight: 600 });
  fig('03-research-proposal', 'The research proposal', b + n.s, 365 + n.h + 30,
    'The research proposal form sets out the research question, key concepts, an outline of the debate and example sources. The teacher checks relevance, scope and safety and formally approves it. It is sent to Cambridge but not externally marked.',
    'The unmarked proposal shapes the question, and the question shapes every mark.',
    '## The research proposal');
}

// 04 Perspective anatomy and evidence
{
  let b = box(30, 115, 840, 80, { title: 'Perspective', body: '“a coherent world view which is a response to an issue”, possibly shaped by context', fill: C.mustard, edge: C.ink, align: 'middle', tsize: 21 });
  ['Argument', 'Evidence', 'Assumptions'].forEach((s, i) => { b += arrow(450, 199, 175 + i * 275, 222, { w: 2.5 }) + box(30 + i * 285, 226, 270, 56, { title: s, tsize: 18, align: 'middle', fill: C.cream, edge: C.olive, pad: 8 }); });
  b += box(30, 310, 410, 170, { title: 'Primary evidence', body: 'first-hand: documents, literary texts, artefacts, observation, interviews, surveys\n+ test a claim yourself\n− a small local sample rarely supports a general conclusion', fill: '#eaf3f1', edge: C.tealDark, valign: 'top', bsize: 15 });
  b += box(460, 310, 410, 170, { title: 'Secondary evidence', body: 'specialists’ arguments and opinions\n+ expert depth quickly\n− may share hidden assumptions; one source type gives a lopsided review', fill: C.tealLight, edge: C.tealDark, valign: 'top', bsize: 15 });
  const n = note(30, 500, 840, 'Literature review: group sources into perspectives and assess each for provenance, evidence and assumptions, not a list of summaries.', { size: 16, weight: 600 });
  fig('04-perspectives-evidence', 'Perspectives and evidence', b + n.s, 500 + n.h + 30,
    'A perspective is a coherent world view responding to an issue, made of argument, evidence and assumptions. Primary evidence is first-hand and lets you test claims but small samples rarely generalise; secondary evidence gives expert depth but may share hidden assumptions. A literature review groups sources into perspectives and assesses each.',
    'Build perspectives from argument, evidence and assumptions, and weigh both kinds of evidence.',
    '## Perspectives, evidence and the literature review');
}

// 05 Methods table
{
  const cols = [{ w: 240, head: 'Method' }, { w: 300, head: 'Strength' }, { w: 300, head: 'Limitation' }];
  const tb = table(30, 110, cols, [
    ['Literature review', 'access to expert arguments and large data sets', 'depends on what others chose to study'],
    ['Interviews', 'depth; you can follow up answers', 'few people; answers shaped by the interviewer'],
    ['Survey', 'many responses; easy to compare', 'shallow answers; sampling bias'],
    ['Close analysis of texts', 'detailed reading of language and meaning', 'interpretations can be contested'],
  ], { size: 17 });
  const y = 110 + tb.h + 24;
  let b = tb.s + box(30, y, 410, 110, { title: 'Qualitative', body: 'words and meanings; depth over number', fill: C.cream, edge: C.olive, tsize: 19 }) + box(460, y, 410, 110, { title: 'Quantitative', body: 'numbers; patterns across many cases', fill: '#eaf3f1', edge: C.tealDark, tsize: 19 });
  const n = note(30, y + 130, 840, 'Methodology: explain why your methods suit the question and the discipline, and how that shapes the report.', { size: 16, weight: 600 });
  fig('05-methods', 'Choosing research methods', b + n.s, y + 130 + n.h + 30,
    'A table of four research methods with a strength and a limitation each: literature review, interviews, surveys and close analysis of texts. Below, qualitative evidence gives depth in words and meanings; quantitative evidence shows patterns in numbers.',
    'Every method trades depth against breadth; justify the trade you make.',
    '## Research methods and methodology');
}

// 06 Log entry: record vs reflect
{
  let b = box(30, 115, 840, 120, { title: 'Research log: 10 marks', body: 'separate from the report · notes or prose · not in the 5000 words, and not a way to extend them · no need to record every action', fill: C.cream, edge: C.olive, align: 'middle', tsize: 21, bsize: 16 });
  b += box(30, 260, 300, 140, { title: '✗ Records only', body: 'dates and “found three articles”', fill: '#fbeee6', edge: C.rust, tfill: C.rust, bfill: C.ink, valign: 'top' });
  b += panel(350, 260, 520, 300, '#eaf3f1', C.tealDark) + tx(372, 296, '✓ Reflects: found → why it matters → next', { size: 19, weight: 700, fill: C.tealDark });
  const e = [['Found', 'two interview answers contradict the survey data on cost'], ['Why', 'interviewees all run shops; survey was shoppers'], ['Decision', 'keep both as separate perspectives; flag sample difference in methods'], ['Next', 'check with teacher whether question still works']];
  e.forEach(([h, d], i) => { const y = 316 + i * 58; b += tx(372, y + 20, h, { size: 16, weight: 700 }) + lines(460, y + 20, wrap(d, 390, 15.5), { size: 15.5 }, 19); });
  b += tx(610, 584, 'example entry, Week 6', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  fig('06-research-log', 'A research log that reflects', b, 610,
    'The research log is worth 10 marks, kept separate from the report and outside the word count. A weak log only records dates and searches. A strong entry, from week 6, notes what was found, why it matters, the decision made and the next step.',
    'Each log entry should record a decision, not just an action.',
    '## The research log');
}

// 07 Report structure
{
  const c = chainV(130, 115, 640, [
    { title: 'Introduction', body: 'the question; how and why it was developed and narrowed', fill: '#eaf3f1', edge: C.tealDark },
    { title: 'Main body (sub-headings allowed)', body: 'methods and methodology; contrasting perspectives built and compared; sources assessed', fill: C.panel, edge: C.tealDark },
    { title: 'Conclusion', body: 'a judgement weighing the perspectives; reflection on scope and limitations', fill: C.mustard, edge: C.ink },
    { title: 'Bibliography', body: 'one consistent system (e.g. Harvard, Chicago, APA); full references for quotations', fill: C.cream, edge: C.olive },
  ], { gap: 36, tsize: 19, bsize: 15.5 });
  const y = 115 + c.h + 24;
  const n = note(30, y, 840, 'Continuous prose for a non-specialist reader; max 5000 words with the count stated (title and references excluded); beyond 5000 is not marked.', { size: 16, weight: 600 });
  fig('07-report-structure', 'Structuring the report', c.s + n.s, y + n.h + 30,
    'The report runs from an introduction explaining how the question was developed, through a main body of methods and compared perspectives, to a conclusion that judges and reflects, then a bibliography in one consistent referencing system. It is continuous prose of at most 5000 words with the count stated.',
    'Introduction, body, judging conclusion and full references, within 5000 words.',
    '## Structure, referencing and the word limit');
}
