import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-global-perspectives-9239-research-report-research-log';

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


// 01 Rules at a glance
{
  let b = '';
  b += panel(30, 110, 840, 150);
  b += tx(60, 148, 'Component 4: 85 marks', { size: 20, weight: 700 });
  const X = 60, W = 780, sc = W / 85;
  b += rect(X, 168, 75 * sc, 46, C.teal, C.ink, 8, 2.5) + tx(X + (75 * sc) / 2, 198, 'Research report: 75', { size: 18, weight: 700, anchor: 'middle' });
  b += rect(X + 75 * sc, 168, 10 * sc, 46, C.mustard, C.ink, 8, 2.5) + tx(X + 80 * sc, 198, '10', { size: 18, weight: 700, anchor: 'middle' });
  b += tx(X + W, 240, 'research log: 10 marks (AO1, AO2)', { size: 16, weight: 700, anchor: 'end', fill: C.olive });
  const rules = [
    ['A separate document', 'submitted for assessment alongside the report'],
    ['Notes or prose', 'note form, or a mixture of notes and continuous prose'],
    ['Outside the 5000 words', 'but not a way to extend the word limit'],
    ['Decisions, not everything', 'no need to record all actions and thinking'],
    ['Worth recording', 'question wording, choice of methods, judgements from findings, teacher feedback'],
    ['Monitored by your teacher', 'through discussion of the log'],
  ];
  const bw = 410, gap = 20;
  const H = Math.max(...rules.map(([h, d]) => boxH(bw, { title: h, body: d, tsize: 19, bsize: 16 })));
  rules.forEach(([h, d], i) => {
    const x = 30 + (i % 2) * (bw + gap), y = 282 + Math.floor(i / 2) * (H + 14);
    b += box(x, y, bw, H, { title: h, body: d, tsize: 19, bsize: 16, edge: C.tealDark, bfill: C.ink });
  });
  const y = 282 + 3 * (H + 14);
  fig('01-log-rules', 'The research log at a glance', b, y + 14,
    'The research log carries 10 of Component 4’s 85 marks, beside 75 for the report. It is a separate document, may be notes or prose, sits outside the 5000-word limit without extending it, records decisions rather than everything, and is monitored by the teacher through discussion.',
    'A separate, 10-mark document for decisions and reflection, not extra report words.',
    '## The rules in the syllabus');
}

// 02 Record, plan, reflect
{
  let b = '';
  const v = [
    ['Record', 'what you read, found, did or were told, with enough detail to find it again', C.tealLight, C.tealDark],
    ['Reflect', 'what a finding or decision means for your question, your methods or your argument', C.cream, C.olive],
    ['Plan', 'what you will do next, and why', C.tealLight, C.tealDark],
  ];
  const bw = 250, gap = 45;
  const H = Math.max(...v.map(([h, d]) => boxH(bw, { title: h, body: d, tsize: 23, bsize: 17 }))) + 10;
  v.forEach(([h, d, f, e], i) => {
    const x = 30 + i * (bw + gap);
    b += box(x, 120, bw, H, { title: h, body: d, tsize: 23, bsize: 17, align: 'middle', fill: f, edge: e, bfill: C.ink, sw: i === 1 ? 3 : 2.2 });
    if (i < 2) b += arrow(x + bw + 4, 120 + H / 2, x + bw + gap - 4, 120 + H / 2, { w: 3.5 });
  });
  const y = 120 + H + 30;
  b += weakStrong(30, y, 840, 'Recording without reflection is a diary: dates and tasks only.', 'An entry that links all three, with reflection at its heart: evidence of a researcher at work.', { size: 17, wTitle: 'A diary', sTitle: 'A research log' }).s;
  const h = weakStrong(30, y, 840, 'Recording without reflection is a diary: dates and tasks only.', 'An entry that links all three, with reflection at its heart: evidence of a researcher at work.', { size: 17, wTitle: 'A diary', sTitle: 'A research log' }).h;
  fig('02-record-plan-reflect', 'Record, reflect, plan', b, y + h + 28,
    'Three linked activities in each entry: record what you found, reflect on what it means for your question, methods or argument, and plan what to do next and why. A log that only records dates and tasks is a diary; linking all three, with reflection at the heart, shows a researcher at work.',
    'An entry that only records is a diary; reflection turns it into evidence.',
    '## Three verbs: record, plan, reflect');
}

// 03 Seven stages
{
  const st = [
    ['Choosing a topic and question', 'topics considered and why some were rejected; whether a debate exists'],
    ['Proposal and teacher discussion', 'the feedback in your own words, and what you decided'],
    ['Finding and evaluating sources', 'each source, evaluated as you go'],
    ['Choosing and designing methods', 'the options, the choice and the reason'],
    ['Collecting and analysing evidence', 'surprising or conflicting findings, and what they mean'],
    ['Drafting', 'structural decisions and word-limit problems'],
    ['Final reflection', 'how your thinking and your question changed overall'],
  ];
  let b = '', y = 110;
  st.forEach(([h, d], i) => {
    const hh = 66;
    const last = i === st.length - 1;
    b += panel(100, y, 770, hh, last ? C.cream : C.panel, last ? C.olive : C.panelEdge);
    b += badge(58, y + hh / 2, 22, String(i + 1), last ? C.mustard : i % 2 ? C.cream : C.tealLight);
    b += tx(122, y + 41, h, { size: 19, weight: 700 });
    const dl = wrap(d, 380, 16);
    b += lines(475, y + hh / 2 + 6 - (dl.length - 1) * LH(16) / 2, dl, { size: 16, fill: C.ink });
    if (i < st.length - 1) b += line(58, y + hh / 2 + 22, 58, y + hh + 10 + hh / 2 - 22, { color: C.ink, w: 3 });
    y += hh + 10;
  });
  b += tx(450, y + 22, 'Date every entry, write it soon after the work, keep it short.', { size: 17, anchor: 'middle', weight: 600, fill: C.tealDark });
  fig('03-seven-stages', 'What to log at each stage', b, y + 50,
    'Seven stages with what to log at each: topics considered and rejected; teacher feedback and your decision; sources evaluated as you go; method options and reasons; surprising or conflicting findings; drafting decisions and word-limit problems; and a final reflection on how your thinking and question changed.',
    'Every stage produces decisions worth a short, dated entry.',
    '## What to log at each stage');
}

// 04 How the question changed (deep-sea mining)
{
  let b = '';
  const steps = [
    ['Three topics considered', 'water privatisation, school uniforms, deep-sea mining; uniforms rejected (debate mostly local, few academic sources)', C.panel, C.tealDark],
    ['Draft question', '“Is deep-sea mining necessary for a low-carbon future?”\nConcern: “necessary” may push towards one answer.', C.tealLight, C.tealDark],
    ['Teacher feedback', 'Could you judge “necessary” without technical expertise in metals supply? Agreed.', C.cream, C.olive],
    ['Revised question', '“Should countries permit deep-sea mining in international waters?”\nKeeps the debate (economic need against environmental risk) as a policy question judged from evidence and arguments.', C.teal, C.ink],
  ];
  let y = 110;
  steps.forEach(([h, d, f, e], i) => {
    const hh = boxH(700, { title: h, body: d, tsize: 20, bsize: 17 });
    b += box(130, y, 740, hh, { title: h, body: d, tsize: 20, bsize: 17, fill: f, edge: e, bfill: C.ink, valign: 'middle' });
    b += tx(70, y + hh / 2 + 6, ['Stage 1', 'Stage 1', 'Stage 2', 'Stage 2'][i], { size: 16, weight: 700, anchor: 'middle', fill: C.muted });
    if (i < steps.length - 1) b += arrow(500, y + hh + 3, 500, y + hh + 27, { w: 3 });
    y += hh + 30;
  });
  const n = note(30, y - 6, 840, 'Logging the change makes it easy for the report to explain “how and why the question was developed”. (Model entries are invented.)', { size: 16, weight: 600, fill: C.panel, edge: C.panelEdge });
  fig('04-question-development', 'A question changing in the log', b + n.s, y - 6 + n.h + 28,
    'Log entries trace a question’s development: three topics considered, a draft question on whether deep-sea mining is necessary for a low-carbon future, teacher feedback that “necessary” needs technical expertise, and a revised policy question on whether countries should permit deep-sea mining in international waters.',
    'Record the feedback and the decision, so the report can explain how the question developed.',
    '## What to log at each stage');
}

// 05 One entry, three verbs (stage 5)
{
  let b = '';
  const parts = [
    ['Record', 'Two demand forecasts disagree sharply. The higher one assumes battery technology stays the same; the lower one assumes a shift to batteries using fewer of these metals.', C.tealLight, C.tealDark],
    ['Reflect', 'So the economic case depends on a technology assumption.', C.cream, C.olive],
    ['Plan / decide', 'Make this assumption a central point of comparison between perspectives, not a footnote.', C.teal, C.ink],
  ];
  b += rect(30, 110, 840, 54, C.ink, C.ink, 12) + tx(56, 145, 'Log entry · Stage 5: collecting and analysing evidence', { size: 19, weight: 700, fill: '#ffffff' });
  let y = 164;
  parts.forEach(([h, d, f, e], i) => {
    const dl = wrap(d, 600, 17);
    const hh = dl.length * LH(17) + 36;
    b += `<rect x="30" y="${y}" width="840" height="${hh}" fill="${C.panel}"/>` + line(30, y, 870, y, { color: C.panelEdge, w: 1.5 });
    b += rect(52, y + hh / 2 - 22, 150, 44, f, e, 22, 2.2) + tx(127, y + hh / 2 + 6, h, { size: 18, weight: 700, anchor: 'middle' });
    b += lines(226, y + (hh - dl.length * LH(17)) / 2 + 17, dl, { size: 17, italic: true });
    y += hh;
  });
  b += `<rect x="30" y="110" width="840" height="${y - 110}" rx="12" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`;
  const n = note(30, y + 22, 840, 'Record findings that surprise you or conflict with others, and your judgement about what they mean.', { size: 17 });
  fig('05-one-entry', 'One entry that records, reflects and plans', b + n.s, y + 22 + n.h + 28,
    'A model log entry split into three parts: it records two demand forecasts that disagree because of different battery assumptions, reflects that the economic case depends on a technology assumption, and decides to make that assumption a central point of comparison.',
    'A short entry can do all three jobs in three sentences.',
    '## What to log at each stage');
}

// 06 Log feeds the report
{
  let b = '';
  const tg = [
    ['Introduction', '“how and why the question was developed”'],
    ['Methods section', 'choices, procedure and reasons'],
    ['Evaluation', '“how alternative perspectives have influenced their argument”'],
    ['Conclusion', '“reflect on their conclusions”'],
  ];
  let ty = 120;
  const mid = 120 + (tg.reduce((a, [h, d]) => a + boxH(470, { title: h, body: d, tsize: 19, bsize: 16 }) + 12, 0) - 12) / 2;
  tg.forEach(([h, d], i) => {
    const hh = boxH(470, { title: h, body: d, tsize: 19, bsize: 16 });
    b += box(400, ty, 470, hh, { title: h, body: d, tsize: 19, bsize: 16, edge: C.tealDark, bfill: C.ink, valign: 'middle' });
    b += parrow(`M312,${mid} C356,${mid} 356,${ty + hh / 2} 394,${ty + hh / 2}`, { w: 2.8, color: C.tealDark, marker: 'ahT' });
    ty += hh + 12;
  });
  b += box(30, 120, 280, ty - 132, { title: 'Research log', body: 'dated entries:\nfeedback and decisions\nmethod choices and reasons\nevaluated sources\nconflicting findings\nfinal reflection', tsize: 22, bsize: 17, align: 'middle', fill: C.cream, edge: C.olive, bfill: C.ink });
  b += tx(640, 112, 'Research report', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  const n = note(30, ty + 14, 840, 'But the log must not become a second report: it is assessed on recording, planning and reflecting, not on argument.', { size: 17, weight: 600 });
  fig('06-log-feeds-report', 'How the log supports the report', b + n.s, ty + 14 + n.h + 28,
    'Dated log entries on feedback, decisions, methods, sources, findings and final reflection feed four parts of the report: the introduction on how the question developed, the methods section, the evaluation of how perspectives influenced the argument, and the conclusion.',
    'Go back to the log when you draft the introduction, methods and conclusion.',
    '## How the log supports the report');
}
