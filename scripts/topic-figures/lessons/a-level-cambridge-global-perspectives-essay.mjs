import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'a-level-cambridge-global-perspectives-essay';

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

// 01 Where the essay fits
{
  let b = panel(30, 110, 620, 330, '#eaf3f1', C.tealDark) + tx(340, 146, 'AS Level: all three compulsory', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += box(55, 170, 180, 150, { title: 'Component 1', body: 'Written Exam', tsize: 19, bsize: 16, align: 'middle', fill: C.panel });
  b += box(250, 170, 180, 150, { title: 'Component 2', body: 'Essay\n40 marks, externally marked', tsize: 19, bsize: 16, align: 'middle', fill: C.mustard, edge: C.ink, sw: 3 });
  b += box(445, 170, 180, 150, { title: 'Component 3', body: 'Team Project', tsize: 19, bsize: 16, align: 'middle', fill: C.panel });
  b += lines(340, 370, ['the Essay: independent research and argument', 'on a self-chosen global issue'], { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 }, 22);
  b += box(670, 110, 200, 330, { title: 'Component 4', body: 'Cambridge Research Report (up to 5000 words)\n\n75 + 10 for the research log = 85 marks\n\nhalf the full A Level', tsize: 19, bsize: 15, align: 'middle', fill: C.cream, edge: C.olive });
  b += tx(770, 470, 'full A Level only', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  const n = note(30, 495, 840, 'Built around the “Critical Path” of research, reasoning and communication skills, not a numbered content list.', { size: 16, weight: 600 });
  fig('01-where-essay-fits', 'Where the Essay fits in 9239', b + n.s, 495 + n.h + 30,
    'Components 1, 2 and 3, the Written Exam, Essay and Team Project, make up the AS Level. The Essay is worth 40 marks and is externally marked. Component 4, the Cambridge Research Report worth 85 marks, is added for the full A Level.',
    'The Essay is the AS component you do alone, on a question you choose.',
    '## Where this fits in 9239');
}

// 02 Essay rules at a glance
{
  const items = [
    ['1750–2000 words', 'continuous prose; state an accurate word count (excluding title, references, citations); beyond 2000 is not marked'],
    ['A single question', 'not a statement or a generic topic area'],
    ['Global perspectives', 'must allow globally contrasting perspectives; an exclusively local or national issue is unlikely to work'],
    ['Sources chosen and justified', 'a range of sources, with reasons for choosing them'],
    ['Personal conclusion', 'a supported view of your own on the question'],
    ['Referencing', 'quotations fully referenced; list of sources; accuracy assessed in AO3'],
  ];
  let b = '';
  items.forEach(([h, d], i) => { const x = 30 + (i % 2) * 430, y = 115 + Math.floor(i / 2) * 150; b += box(x, y, 410, 135, { title: h, body: d, fill: i === 0 ? C.cream : C.panel, edge: i === 0 ? C.olive : C.tealDark, tsize: 20, bsize: 15.5, valign: 'top' }); });
  fig('02-essay-rules', 'Essay requirements at a glance', b, 115 + 3 * 150 + 15,
    'Six requirements: 1750 to 2000 words with a stated word count; a title phrased as a single question; globally contrasting perspectives rather than a purely local issue; a justified range of sources; a personal, supported conclusion; and full referencing with a list of sources.',
    'Get the format right first: a word-counted essay answering one global question.',
    '## Syllabus coverage');
}

// 03 AOs
{
  const r = rowList(30, 110, 840, [
    ['AO1', 'Question, perspectives and sources', 'analyse the question; synthesise arguments into contrasting perspectives; select and justify sources; compare and evaluate perspectives', C.mustard],
    ['AO2', 'Reflection', 'reflect on how alternative perspectives affect your own view; suggest further relevant research', C.cream],
    ['AO3', 'Communication', 'a clear, structured essay with effective referencing', C.tealLight],
  ], { tsize: 21, minH: 110, r: 32 });
  fig('03-assessment-objectives', 'What each assessment objective rewards', r.s, 110 + r.h + 30,
    'Three assessment objectives. AO1: analyse the question, build contrasting perspectives, select and justify sources, and compare and evaluate them. AO2: reflect on how other perspectives affect your own view and suggest further research. AO3: write a clear, structured, well-referenced essay.',
    'AO1 is the research and evaluation, AO2 your reflection, AO3 the writing.',
    '## Syllabus coverage');
}

// 04 Teacher role
{
  let b = box(30, 115, 410, 230, { title: '✓ Teachers may', body: '• lead whole-class background research into a general issue\n• support planning\n• support source citation\n• support word-count discipline', fill: '#eaf3f1', edge: C.tealDark, tfill: C.tealDark, bfill: C.ink, valign: 'top', tsize: 21, bsize: 17 });
  b += box(460, 115, 410, 230, { title: '✗ Teachers must not', body: '• devise your question: you do that individually\n• give detailed advice on how a specific draft could be improved to meet the mark scheme\n• correct or edit draft coursework directly', fill: '#fbeee6', edge: C.rust, tfill: C.rust, bfill: C.ink, valign: 'top', tsize: 21, bsize: 17 });
  fig('04-teacher-role', 'What your teacher can and cannot do', b, 375,
    'Teachers may lead whole-class background research and support planning, source citation and word-count discipline. They must not devise the question, give detailed advice on improving a specific draft against the mark scheme, or correct or edit drafts.',
    'The question and the drafting are yours alone.',
    '## Syllabus coverage');
}

// 05 Process
{
  const c = chainV(130, 115, 640, [
    { title: '1 Build the question', body: 'a genuine question, at least two globally contrasting perspectives, interesting to you', fill: C.mustard, edge: C.ink },
    { title: '2 Research with a source log', body: 'note why each source was chosen: authority, standpoint, perspective it represents', fill: '#eaf3f1', edge: C.tealDark },
    { title: '3 Develop two or three perspectives', body: 'genuinely different standpoints (country, economic interest, culture or religion), with real evidence', fill: '#eaf3f1', edge: C.tealDark },
    { title: '4 Compare and evaluate', body: 'weigh the perspectives against each other, not just describe them', fill: '#eaf3f1', edge: C.tealDark },
    { title: '5 Personal, supported conclusion', body: 'your own reasoned judgement, not a summary', fill: C.cream, edge: C.olive },
  ], { gap: 34, tsize: 19, bsize: 15.5 });
  fig('05-essay-process', 'From question to conclusion', c.s, 115 + c.h + 30,
    'Five stages: build a genuine question with contrasting global perspectives; research while logging why each source was chosen; develop two or three perspectives from genuinely different standpoints; compare and evaluate them; and finish with a personal, supported conclusion rather than a summary.',
    'Draft to the word limit: two or three perspectives in depth, then your own judgement.',
    '## How to approach it');
}

// 06 Topic to question
{
  let b = box(30, 115, 840, 90, { title: '✗ “Plastic pollution is a global problem.”', body: 'a claim, not a question; opens no contrasting perspectives', fill: '#fbeee6', edge: C.rust, tfill: C.rust, align: 'middle' });
  b += arrow(450, 209, 450, 246);
  b += box(30, 250, 840, 110, { title: '✓ “Should developing economies bear the same responsibility as developed economies for reducing single-use plastic?”', body: 'a single question that structurally needs contrasting perspectives', fill: '#eaf3f1', edge: C.tealDark, tfill: C.tealDark, align: 'middle', tsize: 18 });
  b += arrow(330, 364, 235, 402) + arrow(570, 364, 665, 402);
  b += box(30, 406, 410, 150, { title: 'Perspective 1', body: 'historical responsibility and differences in manufacturing capacity between developed and developing economies', fill: C.cream, edge: C.olive, valign: 'top' });
  b += box(460, 406, 410, 150, { title: 'Perspective 2', body: 'present-day consumption volumes and the urgency of environmental harm, whatever a country’s development status', fill: C.cream, edge: C.olive, valign: 'top' });
  fig('06-topic-to-question', 'Turning a topic into an essay question', b, 586,
    'The statement “plastic pollution is a global problem” is a claim, not a question. The better title asks whether developing economies should bear the same responsibility as developed ones for reducing single-use plastic, which opens two perspectives: historical responsibility and manufacturing capacity, against present-day consumption and urgency.',
    'A good title is one question that forces two evidence-based perspectives.',
    '## Worked example: turning a topic into a question');
}
