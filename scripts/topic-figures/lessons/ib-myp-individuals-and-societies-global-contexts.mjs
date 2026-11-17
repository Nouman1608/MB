import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-individuals-and-societies-global-contexts';

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

// 01 Six global contexts
{
  const ctx = [
    ['Identities and relationships', 'who people are, what they value, how individuals, groups and nations relate'],
    ['Orientation in space and time', 'where and when things happen, turning points, connections across eras and distances'],
    ['Personal and cultural expression', 'how people express ideas and identity; how ideas spread, adapt or are resisted'],
    ['Scientific and technical innovation', 'how science and technology change environments, economies and societies'],
    ['Globalization and sustainability', 'how local and global systems link; effects of decisions now and in future'],
    ['Fairness and development', 'rights, responsibilities, opportunity, inequality and sharing resources'],
  ];
  let b = '';
  ctx.forEach(([h, d], i) => {
    const x = 30 + (i % 2) * 430, y = 110 + Math.floor(i / 2) * 170, hl = i === 1;
    b += box(x, y, 410, 150, { title: h, body: d, tsize: 20, bsize: 16, fill: hl ? C.cream : C.panel, edge: hl ? C.olive : C.panelEdge, sw: hl ? 3 : 2.2 });
    b += badge(x + 380, y + 26, 16, String(i + 1), hl ? C.mustard : C.tealLight);
  });
  b += tx(450, 640, 'Highlighted: the guide notes many I&S inquiries focus on orientation in space and time.', { size: 16, anchor: 'middle', fill: C.olive, weight: 600 });
  const n = note(30, 662, 840, 'Every unit has one global context. It shows why the inquiry matters.', { size: 18 });
  fig('01-six-global-contexts', 'The six global contexts', b + n.s, 662 + n.h + 30,
    'Six cards, one per global context, each with a plain-language summary. Orientation in space and time is highlighted as the context many Individuals and Societies inquiries use. Every unit has one global context, which shows why the inquiry matters.',
    'Six real-world angles; every unit uses one to show why it matters.',
    '## What a global context is');
}

// 02 The guide's example statements: concept pairings
{
  const cols = [{ w: 300, head: 'Global context' }, { w: 200, head: 'Key concept' }, { w: 340, head: 'Related concepts' }];
  const tb = table(30, 110, cols, [
    ['Identities and relationships', 'systems', 'conflict, cooperation'],
    ['Orientation in space and time', 'global interactions', 'sustainability, management and intervention'],
    ['Personal and cultural expression', 'change', 'power, innovation and revolution, significance'],
    ['Scientific and technical innovation', 'change', 'culture, diversity'],
    ['Globalization and sustainability', 'global interactions', 'relationships, power'],
    ['Fairness and development', 'time, place and space', 'scale, disparity'],
  ], { size: 17 });
  const n = note(30, 110 + tb.h + 22, 840, 'Alliances sit under identities, hazards under orientation: the context is the angle, not the topic.', { size: 17 });
  fig('02-guide-example-pairings', 'The guide’s example statements, unpacked', tb.s + n.s, 110 + tb.h + 22 + n.h + 30,
    'A table pairing each global context with the key concept and related concepts used in the guide’s example statement of inquiry, for example identities and relationships with systems, conflict and cooperation, and fairness and development with time, place and space, scale and disparity.',
    'Each context appears once in the guide’s examples, each with its own key and related concepts.',
    '## The six contexts, one at a time');
}

// 03 Same topic, four contexts
{
  const sp = [
    { x: 30, y: 120, w: 380, h: 140, title: 'Orientation in space and time', body: 'How has the city’s response to flooding changed over decades?' },
    { x: 490, y: 120, w: 380, h: 140, title: 'Fairness and development', body: 'Which neighbourhoods were hit hardest, and why were they less protected?' },
    { x: 30, y: 470, w: 380, h: 140, title: 'Scientific and technical innovation', body: 'Did new defences or warning systems reduce the damage?' },
    { x: 490, y: 470, w: 380, h: 140, title: 'Globalization and sustainability', body: 'How do rising sea levels link this city to choices made elsewhere?' },
  ].map((s) => ({ ...s, tsize: 18, bsize: 16, fill: C.panel, edge: C.tealDark }));
  const b = hub(450, 365, 92, ['A coastal city', 'after a', 'major flood'], sp, { size: 19, lineColor: C.tealDark });
  const n = note(30, 640, 840, 'Same topic, different context: the context changes the questions you ask.', { size: 18 });
  fig('03-one-topic-four-contexts', 'One topic, four global contexts', b + n.s, 640 + n.h + 30,
    'A coastal city after a major flood sits at the centre. Four contexts each pose a different question: orientation in space and time asks how the response changed over decades; fairness and development asks which neighbourhoods were hit hardest; scientific and technical innovation asks whether defences reduced damage; globalization and sustainability asks how rising sea levels link the city to choices elsewhere.',
    'Changing the context changes the question, not the topic.',
    '## How a global context frames a unit');
}

// 04 Building a statement of inquiry
{
  let b = label(450, 138, 'Topic: the Wall Street Crash and the depression that followed', { anchor: 'middle' });
  const cards = [
    ['1  Key concept', 'Change', 'boom to slump'],
    ['2  Related concepts', 'Causality, interdependence', 'one collapse caused others'],
    ['3  Global context', 'Orientation in space and time', 'a turning point that spread'],
  ];
  cards.forEach(([h, v, d], i) => {
    const x = 30 + i * 285;
    b += panel(x, 160, 270, 170) + tx(x + 135, 195, h, { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
    b += lines(x + 135, 232, wrap(v, 240, 20 * 1.08), { size: 20, weight: 700, anchor: 'middle' }, 26);
    b += tx(x + 135, 305, d, { size: 15, anchor: 'middle', fill: C.muted });
    b += arrow(x + 135, 334, 450 + (i - 1) * 120, 384);
  });
  b += box(30, 390, 840, 110, { title: '4  Statement of inquiry (topic not named)', body: '“A crisis in one economy can spread across borders and change ordinary lives for years.”', tsize: 18, bsize: 19, fill: C.mustard, edge: C.ink, align: 'middle' });
  const ws = weakStrong(30, 525, 840, 'Only makes sense for 1929, so it is a fact, not a statement of inquiry.', 'Transferable: could guide a unit on a different crisis too.', { wTitle: 'Fails the test', sTitle: 'Passes the test' });
  fig('04-statement-of-inquiry', 'Building a statement of inquiry', b + ws.s, 525 + ws.h + 30,
    'Three cards for the Wall Street Crash, key concept change, related concepts causality and interdependence, and global context orientation in space and time, feed one sentence: a crisis in one economy can spread across borders and change ordinary lives for years. A statement that only fits 1929 is a fact; one that could guide a unit on another crisis passes.',
    'A good statement of inquiry links the concepts and context without naming the topic.',
    '## How a global context frames a unit');
}

// 05 Criterion B strands and where the context works
{
  const r = rowList(30, 110, 840, [
    ['i', 'Research question and its relevance', 'Context does most of its work here: it justifies why the question matters.', C.mustard],
    ['ii', 'Plan the investigation and follow it', '', C.cream],
    ['iii', 'Gather and record varied, relevant information', 'Context guides the evidence: fairness compares groups; orientation needs evidence across dates; identities may need interviews.', C.mustard],
    ['iv', 'Evaluate the process and findings', '', C.cream],
  ], { tsize: 21, minH: 88 });
  const n = note(30, 110 + r.h + 20, 840, 'Judge a question on relevance, manageability, originality, assessability, resources, interest and link to the discipline.', { size: 16, weight: 600 });
  fig('05-criterion-b-strands', 'Criterion B: where the context does its work', r.s + n.s, 110 + r.h + 20 + n.h + 30,
    'The four year-5 strands of Criterion B: i research question and relevance, ii plan, iii gather information, iv evaluate. Strands i and iii are highlighted: the context justifies relevance and decides what kind of evidence is needed.',
    'The global context justifies the question in strand i and shapes the evidence in strand iii.',
    '## Global contexts and Criterion B (Investigating)');
}

// 06 Sharpening a research question
{
  let b = '';
  b += box(30, 110, 840, 92, { title: '✗ Weak: “Is water access fair?”', body: 'Too broad, with no place or measure.', fill: '#fbeee6', edge: C.rust, tfill: C.rust, bfill: C.ink });
  b += arrow(450, 206, 450, 244);
  b += box(30, 250, 840, 110, { title: '✓ Better', body: '“How far does access to piped water differ between two districts of my city, and what explains the gap?”', fill: '#eaf3f1', edge: C.tealDark, tfill: C.tealDark, bfill: C.ink, bsize: 18 });
  b += arrow(450, 364, 450, 402);
  const two = [
    ['Relevance (fairness and development)', 'Tests whether location affects access to a basic need: a fairness issue.'],
    ['Manageable', 'Census tables and a short survey can answer it in the time allowed.'],
  ];
  two.forEach(([h, d], i) => { b += box(30 + i * 430, 408, 410, 120, { title: h, body: d, fill: C.cream, edge: C.olive, tsize: 18 }); });
  fig('06-research-question', 'Sharpening a research question', b, 560,
    'A weak research question, is water access fair, is too broad. The better version compares piped-water access between two districts and asks what explains the gap. Its relevance is justified through fairness and development, and census tables and a short survey make it manageable.',
    'A focused question plus a context-based reason why it matters earns strand i.',
    '## Global contexts and Criterion B (Investigating)');
}
