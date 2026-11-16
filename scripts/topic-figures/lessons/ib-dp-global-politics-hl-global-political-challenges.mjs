import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-dp-global-politics-hl-global-political-challenges';

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

// 01 Three emphases
{
  const c = chainH(30, 130, 840, [
    { title: 'Interconnection', body: 'challenges overlap and feed each other', fill: '#eaf3f1', edge: C.tealDark },
    { title: 'Complexity and tension', body: 'addressing one challenge can create costs or conflicts elsewhere', fill: C.cream, edge: C.olive },
    { title: 'Solutions', body: 'look for possible courses of action, not just causes', fill: C.mustard, edge: C.ink },
  ], { h: 150, gap: 40, tsize: 20, bsize: 16 });
  let b = c.s;
  b += label(30, 330, 'Three ways to connect with the common syllabus');
  [['Explicit mention', 'identity as a cause of conflict; conceptions of poverty'], ['Expanding a topic', 'environmental rights as part of human rights'], ['Integrating thematic elements', 'identity as a right, a marker of development and a source of conflict']].forEach(([h, d], i) => { b += box(30 + i * 285, 345, 270, 150, { title: h, body: d, tsize: 18, bsize: 15, valign: 'top' }); });
  const n = note(30, 515, 840, '80 of 240 HL hours, no extra prescribed content: it builds on the key concepts, core and thematic studies.', { size: 16, weight: 600 });
  fig('01-three-emphases', 'The HL extension: three emphases', b + n.s, 515 + n.h + 30,
    'The HL extension has three emphases: interconnection, complexity and tension, and solutions. Links to the common syllabus come from explicit mention in prescribed content, expanding a prescribed topic, or integrating thematic-study elements. It takes 80 of the 240 HL hours with no extra prescribed content.',
    'Spot connections, weigh tensions, then look for solutions.',
    '## How the HL extension fits the course');
}

// 02 Eight topic areas web
{
  const areas = ['Borders', 'Environment', 'Equality', 'Health', 'Identity', 'Poverty', 'Security', 'Technology'];
  const cx = 450, cy = 390, R = 240;
  const pos = areas.map((_, i) => { const a = -Math.PI / 2 + (i * 2 * Math.PI) / 8; return [cx + R * Math.cos(a), cy + R * 0.95 * Math.sin(a)]; });
  let b = '';
  for (let i = 0; i < 8; i++) for (let j = i + 1; j < 8; j++) b += line(pos[i][0], pos[i][1], pos[j][0], pos[j][1], { color: C.panelEdge, w: 1.5 });
  const hl = [[0, 2], [1, 6], [3, 5], [4, 6], [5, 2], [7, 0]];
  areas.forEach((a, i) => { b += box(pos[i][0] - 85, pos[i][1] - 28, 170, 56, { title: a, tsize: 19, align: 'middle', fill: i % 2 ? C.cream : C.tealLight, edge: i % 2 ? C.olive : C.tealDark, pad: 8 }); });
  b += `<circle cx="${cx}" cy="${cy}" r="70" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + tx(cx, cy - 4, 'Global', { size: 18, weight: 700, anchor: 'middle' }) + tx(cx, cy + 18, 'challenges', { size: 18, weight: 700, anchor: 'middle' });
  const n = note(30, 680, 840, 'The areas overlap: one case can touch several of them, so study what connects them.', { size: 16, weight: 600 });
  fig('02-eight-topic-areas', 'Eight HL topic areas', b + n.s, 680 + n.h + 30,
    'Eight topic areas arranged in a ring and all linked to each other: borders, environment, equality, health, identity, poverty, security and technology.',
    'Eight overlapping areas: the connections matter as much as the areas.',
    '## The eight HL topic areas');
}

// 03 Case file research questions
{
  const r = rowList(30, 110, 840, [
    ['1', 'Background, data and issues', 'What is happening? Who are the actors and stakeholders? How valid are the data? Key terms? Similar cases?'],
    ['2', 'Causes, impact and responses', 'Causes? Political, social and economic impacts at different levels? How do actors respond and interpret it?'],
    ['3', 'Reflection', 'Which concepts and theories explain it? Wider trends? Why does it matter? Other views?'],
  ], { tsize: 21, minH: 110 });
  let y = 110 + r.h + 24;
  let b = r.s + box(30, y, 410, 110, { title: 'Topic area first', body: 'pick an area (e.g. health), then find a case', fill: '#eaf3f1', edge: C.tealDark, tsize: 19 }) + box(460, y, 410, 110, { title: 'Case first', body: 'start from a situation, then map it onto every area it touches', fill: '#eaf3f1', edge: C.tealDark, tsize: 19 });
  const n = note(30, y + 130, 840, 'Minimum: at least two case studies AND at least two topic areas. Record who produced each source.', { size: 17 });
  fig('03-case-file', 'Building a case file', b + n.s, y + 130 + n.h + 30,
    'Three groups of research questions for each case: background, data and issues; causes, impact and responses; and reflection. A case can be chosen topic-area first or case first. The minimum is two case studies across two topic areas.',
    'Three groups of questions turn a case into usable Paper 3 evidence.',
    '## Choosing and building case studies');
}

// 04 Cape Town case map
{
  const sp = [
    { x: 30, y: 120, w: 270, h: 120, title: 'Environment', body: 'drought, climate variability' },
    { x: 600, y: 120, w: 270, h: 120, title: 'Security', body: 'water security' },
    { x: 30, y: 400, w: 270, h: 140, title: 'Equality and poverty', body: 'wealthier households bought boreholes, tanks, bottled water; poorer could not' },
    { x: 600, y: 400, w: 270, h: 140, title: 'Concepts', body: 'legitimacy (trust in crisis), power (who controls bulk water), interdependence' },
  ].map((s, i) => ({ ...s, fill: i === 3 ? C.cream : '#eaf3f1', edge: i === 3 ? C.olive : C.tealDark, tsize: 19, bsize: 15 }));
  let b = hub(450, 330, 110, ['Cape Town', 'drought', '2016–2018'], sp, { size: 19 });
  b += box(30, 565, 840, 110, { title: '“Day Zero” warning → 50 litres per person per day from February 2018 → demand fell, rain returned, taps never shut off', body: 'open question for evaluation: did the burden fall fairly?', fill: C.panel, edge: C.ink, align: 'middle', tsize: 17, bsize: 16 });
  const n = note(30, 695, 840, 'Pair it with a case from another area, such as Ebola in Liberia (2014–2015), to compare crisis responses.', { size: 16, weight: 600 });
  fig('04-cape-town-case', 'Mapping a case: the Cape Town drought', b + n.s, 695 + n.h + 30,
    'The 2016 to 2018 Cape Town drought mapped onto topic areas: environment, security and equality and poverty, where wealthier households could buy boreholes and tanks and poorer ones could not, plus the concepts legitimacy, power and interdependence. A Day Zero warning led to a 50-litre daily limit from February 2018; taps were never shut off.',
    'One case touches several topic areas; a second case adds comparison.',
    '## Choosing and building case studies');
}

// 05 Six lines of inquiry
{
  const items = ['Links to the core topics', 'Links to the thematic studies', 'How far challenges are interconnected', 'How they are perceived and addressed in different contexts', 'Frameworks, systems, organisations and mechanisms that address them', 'How cases from different topic areas change the view'];
  let b = '';
  items.forEach((s, i) => { const x = 30 + (i % 2) * 430, y = 115 + Math.floor(i / 2) * 110; b += rect(x, y, 410, 96, i % 2 ? C.panel : '#eaf3f1', C.tealDark, 12, 2.2) + badge(x + 44, y + 48, 24, String(i + 1), i < 2 ? C.mustard : C.cream) + lines(x + 86, y + 48 - (wrap(s, 300, 18 * 1.08).length - 1) * 12 + 6, wrap(s, 300, 18 * 1.08), { size: 18, weight: 700 }, 24); });
  const n = note(30, 455, 840, 'Paper 3 question 3 is based on these: prepare evidence for each line from each case.', { size: 17 });
  fig('05-lines-of-inquiry', 'Six guiding lines of inquiry', b + n.s, 455 + n.h + 30,
    'Six lines of inquiry: links to the core topics, links to the thematic studies, how far challenges are interconnected, how they are perceived and addressed in different contexts, which frameworks and mechanisms address them, and how cases from different areas change the view.',
    'Gather evidence for all six lines from every case.',
    '## The six guiding lines of inquiry');
}

// 06 Paper 3 marks and timing
{
  const q = [['Q1', 3, 'AO2', 10, 'analyse the stimulus with challenge knowledge'], ['Q2a', 4, 'AO2', 13, 'analyse an identified political issue'], ['Q2b', 6, 'AO3', 19, 'recommend a course of action'], ['Q3', 15, 'AO3', 48, 'synthesise and evaluate your cases']];
  const sc = 840 / 28;
  let b = tx(30, 140, 'Marks (28)', { size: 17, weight: 700, fill: C.tealDark });
  let x = 30;
  q.forEach(([n, m, ao, t], i) => { const f = ao === 'AO2' ? C.tealLight : C.mustard; b += rect(x, 152, m * sc, 56, f, C.ink, 4, 2) + tx(x + (m * sc) / 2, 187, `${n}: ${m}`, { size: m >= 4 ? 17 : 15, weight: 700, anchor: 'middle' }); x += m * sc; });
  b += tx(30, 250, 'Minutes (90)', { size: 17, weight: 700, fill: C.tealDark });
  x = 30; const ts = 840 / 90;
  q.forEach(([n, m, ao, t]) => { b += rect(x, 262, t * ts, 56, ao === 'AO2' ? '#eaf3f1' : C.cream, C.panelEdge, 4, 2) + tx(x + (t * ts) / 2, 297, `${t} min`, { size: 16, weight: 600, anchor: 'middle' }); x += t * ts; });
  const cols = [{ w: 90, head: 'Q' }, { w: 90, head: 'AO' }, { w: 90, head: 'Marks' }, { w: 570, head: 'What it requires' }];
  const tb = table(30, 345, cols, q.map(([n, m, ao, t, d]) => [n, ao, String(m), d]), { size: 17 });
  const n = note(30, 345 + tb.h + 20, 840, 'Q3 is 15 of 28 marks, about 16% of the whole HL grade. The stimulus focuses you; the marks come from your own cases.', { size: 16, weight: 600 });
  fig('06-paper-3', 'Paper 3: marks and timing', b + tb.s + n.s, 345 + tb.h + 20 + n.h + 30,
    'Paper 3 lasts 90 minutes for 28 marks. Question 1 (3 marks, AO2) about 10 minutes; 2a (4 marks, AO2) about 13; 2b (6 marks, AO3) about 19; question 3 (15 marks, AO3) about 48 minutes. Question 3 is about 16% of the HL grade.',
    'Spend time where the marks are: question 3 deserves about half the paper.',
    '## Paper 3 exactly as the guide describes it');
}

// 07 2b recommendation frame
{
  const c = chainH(30, 140, 840, [
    { title: 'Action', body: 'binding heat-stoppage rule' },
    { title: 'Actor', body: 'enforced by labour inspectors' },
    { title: 'Evidence', body: 'from your researched case' },
    { title: 'Challenge', body: 'employers shift work to unregulated sites', fill: '#fbeee6', edge: C.rust },
    { title: 'Mitigation', body: 'a way to reduce that risk', fill: C.mustard, edge: C.ink },
  ].map((s) => ({ fill: '#eaf3f1', edge: C.tealDark, ...s })), { h: 140, gap: 26, tsize: 18, bsize: 14.5 });
  let b = label(450, 126, 'Question 2b frame, using the fictional Port Salem stimulus', { anchor: 'middle' }) + c.s;
  const bands = [['1–2', 'vague recommendation', '#fbeee6'], ['3–4', 'addresses the issue but ignores difficulties', C.cream], ['5–6', 'well supported; considers challenges, implications or unintended consequences', C.tealLight]];
  b += label(30, 330, 'Markbands for 2b');
  bands.forEach(([m, d, f], i) => { b += rect(30, 345 + i * 72, 840, 62, f, C.panelEdge, 10, 2) + tx(60, 384 + i * 72, m, { size: 22, weight: 700 }) + tx(140, 384 + i * 72, d, { size: 17 }); });
  fig('07-recommendation-frame', 'Answering 2b: a recommendation', b, 345 + 3 * 72 + 20,
    'A five-step frame for question 2b: action, actor, evidence, challenge and mitigation, illustrated with a heat-stoppage rule for the fictional Port Salem. Markbands: a vague recommendation scores 1 to 2; one that ignores difficulties 3 to 4; a well-supported one that considers challenges and consequences 5 to 6.',
    'Recommend, support, name the difficulty, then reduce it: that reaches the top band.',
    '## Paper 3 exactly as the guide describes it');
}
