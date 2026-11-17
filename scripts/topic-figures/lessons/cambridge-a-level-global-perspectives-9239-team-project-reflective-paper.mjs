import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-global-perspectives-9239-team-project-reflective-paper';

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


// 01 What the paper is for
{
  let b = '';
  b += panel(30, 110, 840, 150);
  b += tx(60, 146, 'Component 3: Team Project, 40 marks', { size: 20, weight: 700 });
  const X = 60, W = 780, sc = W / 40;
  b += rect(X, 166, 30 * sc, 46, C.teal, C.ink, 8, 2.5) + tx(X + 15 * sc, 196, 'Presentation: 30', { size: 18, weight: 700, anchor: 'middle' });
  b += rect(X + 30 * sc, 166, 10 * sc, 46, C.mustard, C.ink, 8, 2.5) + tx(X + 35 * sc, 196, 'Reflective paper: 10', { size: 17, weight: 700, anchor: 'middle' });
  b += tx(X + W, 240, 'max 800 words · assessed entirely on AO2 Reflection', { size: 16, weight: 700, anchor: 'end', fill: C.olive });
  b += tx(450, 300, 'Its subject is the process, in two assessed strands', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += box(30, 320, 410, 125, { title: 'Strand 1: the collaboration', body: 'how effectively the team worked together, and what could be improved', tsize: 20, bsize: 17, valign: 'top', fill: C.tealLight, edge: C.tealDark, bfill: C.ink });
  b += box(460, 320, 410, 125, { title: 'Strand 2: the learning', body: 'about the problem, research skills or presentation skills, and changes to your personal views shaped by the collaboration', tsize: 20, bsize: 17, valign: 'top', fill: C.tealLight, edge: C.tealDark, bfill: C.ink });
  const n = note(30, 467, 840, 'Not a summary of your research or solution. It is the only place in the qualification where teamwork itself is assessed.', { size: 17, weight: 600 });
  fig('01-paper-purpose', 'What the reflective paper is for', b + n.s, 467 + n.h + 28,
    'The reflective paper is worth 10 of the Team Project’s 40 marks, beside 30 for the presentation, with a maximum of 800 words assessed entirely on AO2. Its two strands are the effectiveness of the collaboration and the candidate’s learning, including changed personal views.',
    'Reflect on the process, not the findings: teamwork is assessed only here.',
    '## What the paper is for');
}

// 02 Aspects of collaboration
{
  const a = [
    ['Agreeing the problem', 'How was the statement chosen? Did everyone shape it?'],
    ['Allocating perspectives', 'Distinct and workable for each member? Using people’s strengths?'],
    ['Communication', 'How were findings and decisions shared? What went missing?'],
    ['Decision-making', 'Who decided, and how? Were quieter members heard?'],
    ['Handling disagreement', 'What was disputed, and how was it resolved?'],
    ['Organisation', 'Were deadlines set and met? What happened when not?'],
  ];
  a.push(['Your own role', 'What did you contribute? Where did you help or hinder the team?']);
  let b = '';
  b += rect(30, 110, 840, 56, C.mustard, C.ink, 12, 2.5) + tx(450, 146, 'Every aspect is judged “in relation to the team’s goal”', { size: 20, weight: 700, anchor: 'middle' });
  let y = 180;
  a.forEach(([h, d], i) => {
    const me = i === 6;
    const dl = wrap(d, 540, 17);
    const hh = Math.max(56, dl.length * LH(17) + 26);
    b += panel(30, y, 840, hh, me ? C.cream : C.panel, me ? C.olive : C.panelEdge);
    b += tx(54, y + hh / 2 + 7, h, { size: 19, weight: 700 });
    b += lines(300, y + (hh - dl.length * LH(17)) / 2 + 16, dl, { size: 17 });
    y += hh + 8;
  });
  const n = note(30, y + 8, 840, 'Test: did the team get the best out of each member, including you? A team that argued a lot may still have been effective.', { size: 17, weight: 600 });
  fig('02-collaboration-aspects', 'Evaluating the collaboration', b + n.s, y + 8 + n.h + 28,
    'Seven aspects to evaluate, each with guiding questions: agreeing the problem, allocating perspectives, communication, decision-making, handling disagreement, organisation and your own role. All are judged against the team’s goal rather than how pleasant the work felt.',
    'Effectiveness means progress towards the team’s goal, not a pleasant time.',
    '## Strand 1: evaluating the collaboration');
}

// 03 Evidence and specific improvement
{
  let b = '';
  const col = (x, title, fill, edge, tfill) => rect(x, 112, 410, 54, fill, edge, 12, 2.5) + tx(x + 205, 147, title, { size: 20, weight: 700, anchor: 'middle', fill: tfill });
  b += col(30, '✗ General impression', '#fbeee6', C.rust, C.rust) + col(460, '✓ Specific and evidenced', '#eaf3f1', C.tealDark, C.tealDark);
  const rows = [
    ['Weakness', '“Communication was sometimes a problem.”', '“In the third week, two of us had researched the same council report because we had not agreed who would cover local data.”'],
    ['Improvement', '“Communicate better.”', '“Before researching, we should have written a one-line list of who covers which sources, shared in our group chat, and checked it at each meeting.”'],
  ];
  let y = 200;
  rows.forEach(([lab, w, s], i) => {
    const sl = wrap(s, 370, 17), wl = wrap(w, 370, 17);
    const hh = Math.max(sl.length, wl.length) * LH(17) + 36;
    b += tx(450, y + 4, lab, { size: 17, weight: 700, anchor: 'middle', fill: C.muted });
    y += 14;
    b += rect(30, y, 410, hh, C.panel, C.rust, 12, 2) + lines(50, y + 30, wl, { size: 17, italic: true });
    b += rect(460, y, 410, hh, C.panel, C.tealDark, 12, 2) + lines(480, y + 30, sl, { size: 17, italic: true });
    y += hh + 34;
  });
  const n = note(30, y - 8, 840, 'Keep a short collaboration diary: meeting dates, decisions, problems and how they were handled.', { size: 17 });
  fig('03-evidence-improvement', 'Evidence and specific improvements', b + n.s, y - 8 + n.h + 28,
    'General claims such as “communication was sometimes a problem” and “communicate better” set against specific ones: two members researched the same council report in week three because sources were not allocated, so the team should have kept a shared list of who covers which sources.',
    'Name a specific moment, then an improvement someone could act on.',
    '## Strand 1: evaluating the collaboration');
}

// 04 Learning
{
  const L = [
    ['The problem', 'what you understand now, and how teammates’ perspectives changed it'],
    ['Research skills', 'finding local data, evaluating sources, interviewing, spotting a weak source'],
    ['Presentation skills', 'planning to time, designing visuals, speaking to a non-specialist audience'],
    ['Changes to personal views', 'shaped by hearing a teammate argue from a different perspective'],
  ];
  let b = '';
  const bw = 410, gap = 20;
  const H = Math.max(...L.map(([h, d]) => boxH(bw, { title: h, body: d, tsize: 20, bsize: 16 })));
  L.forEach(([h, d], i) => {
    const x = 30 + (i % 2) * (bw + gap), y = 110 + Math.floor(i / 2) * (H + 16);
    b += box(x, y, bw, H, { title: h, body: d, tsize: 20, bsize: 16, valign: 'top', fill: i === 3 ? C.cream : C.panel, edge: i === 3 ? C.olive : C.tealDark, bfill: C.ink });
  });
  const y = 110 + 2 * (H + 16) + 6;
  b += weakStrong(30, y, 840, 'Four areas of learning listed.', 'Two areas explored with examples and their significance.', { size: 17, wTitle: 'Coverage', sTitle: 'Depth' }).s;
  const h = weakStrong(30, y, 840, 'Four areas of learning listed.', 'Two areas explored with examples and their significance.', { size: 17, wTitle: 'Coverage', sTitle: 'Depth' }).h;
  fig('04-learning', 'Reflecting on your learning', b, y + h + 28,
    'Four areas of learning: the problem itself, research skills, presentation skills, and changes to personal views shaped by teammates’ perspectives. Two areas explored in depth with examples beat four that are only listed.',
    'Choose two areas of learning and explore them, rather than listing four.',
    '## Strand 2: reflecting on your learning');
}

// 05 Reflective writing pattern
{
  const st = [
    ['What happened', 'one or two sentences, specific', C.tealLight],
    ['What it shows', 'about the team or about you', C.teal],
    ['How effective it was', 'in relation to the team’s goal or your learning', C.teal],
    ['What you would do differently', 'or how you will use the learning', C.cream],
  ];
  let b = '';
  const r = chainH(30, 120, 840, st.map(([h, d, f]) => ({ title: h, body: d, fill: f, edge: C.tealDark, bfill: C.ink })), { gap: 30, tsize: 18, bsize: 16, h: 172 });
  b += r.s;
  st.forEach((_, i) => { b += badge(30 + i * (r.bw + 30) + r.bw / 2, 120, 16, String(i + 1), i === 3 ? C.mustard : C.cream); });
  const y = 120 + r.h + 50;
  b += tx(30, y, 'One reflective paragraph, by share of words', { size: 18, weight: 700, fill: C.tealDark });
  const parts = [[0.15, C.tealLight, 'describe'], [0.3, C.teal, 'what it shows'], [0.3, C.teal, 'how effective'], [0.25, C.cream, 'next time']];
  let x = 30;
  parts.forEach(([p, f, l], i) => { const w = 840 * p; b += rect(x, y + 16, w - 4, 52, f, C.ink, 8, 2.2) + tx(x + (w - 4) / 2, y + 48, l, { size: 16, weight: 700, anchor: 'middle' }); x += w; });
  b += tx(30, y + 96, 'Description is necessary but should be the smallest part of each paragraph (shares illustrative).', { size: 16, fill: C.muted, italic: true });
  fig('05-writing-pattern', 'A reflective paragraph pattern', b, y + 124,
    'Four moves in each paragraph: what happened, what it shows about the team or you, how effective it was against the team’s goal or your learning, and what you would do differently. A bar shows description as the smallest share of the paragraph.',
    'Keep description short; most words go on meaning, effect and change.',
    '## A reflective writing pattern');
}

// 06 800-word plan
{
  const segs = [
    ['Context', '60–80', 70, C.tealLight],
    ['Effectiveness of collaboration', '300–350', 325, C.teal],
    ['Improvements', '100–120', 110, C.tealLight],
    ['Learning and changed views', '200–250', 225, C.mustard],
    ['Close', '40–60', 50, C.cream],
  ];
  let b = '';
  const X = 40, W = 820, sc = W / 800;
  let x = X;
  segs.forEach(([h, w_, m, f], i) => {
    const w = m * sc;
    b += rect(x, 220, w, 76, f, C.ink, 6, 2.5);
    if (w > 70) b += tx(x + w / 2, 264, w_, { size: 16, weight: 700, anchor: 'middle' });
    const above = i % 2 === 0;
    const ly = above ? 150 : 190;
    b += line(x + w / 2, ly + 8, x + w / 2, 220, { color: C.muted, w: 1.5 });
    const l = wrap(h, 210, 16);
    b += lines(x + w / 2, ly - (l.length - 1) * LH(16) + 2, l, { size: 16, weight: 600, anchor: 'middle' });
    if (w <= 70) b += tx(x + w / 2, 322, w_, { size: 15, weight: 700, anchor: 'middle' });
    x += w;
  });
  for (let m = 0; m <= 800; m += 200) b += line(X + m * sc, 296, X + m * sc, 340, { w: 1.5, color: C.muted, dash: '4 4' }) + tx(X + m * sc, 362, String(m), { size: 16, anchor: 'middle', fill: C.muted });
  b += tx(X + W, 388, 'words (maximum 800)', { size: 16, anchor: 'end', fill: C.muted });
  const n = note(30, 410, 840, 'One reasonable plan, not a syllabus rule. Collaboration and learning, the two assessed strands, take most of the words.', { size: 17 });
  fig('06-word-plan', 'Planning 800 words', b + n.s, 410 + n.h + 28,
    'An 800-word plan: context 60 to 80 words, effectiveness of collaboration 300 to 350, improvements 100 to 120, learning and changed views 200 to 250, and a closing judgement 40 to 60.',
    'Spend the words on the two assessed strands.',
    '## Planning 800 words');
}

// 07 Worked example (learning paragraph) mapped to the pattern
{
  let b = '';
  const weak = '“Our team worked well together. We had some problems with communication but we sorted them out. Everyone did their part … I learned a lot about plastic pollution and my presentation skills improved.”';
  const wl = wrap(weak, 780, 16);
  const wh = 34 + wl.length * LH(16) + 28;
  b += box(30, 110, 840, wh, { title: '✗ Weak: every sentence is a general claim', body: weak, tsize: 19, bsize: 16, fill: '#fbeee6', edge: C.rust, tfill: C.rust, bfill: C.ink, valign: 'top' });
  let y = 110 + wh + 30;
  b += tx(30, y, '✓ Strong learning paragraph, move by move', { size: 19, weight: 700, fill: C.tealDark });
  y += 16;
  const rows = [
    ['1', 'What happened', 'Tomas’s interviews showed many stallholders paid by the hour for their pitch and had to leave quickly'],
    ['2', 'What it shows', 'the problem was one of time and cost, not attitude, as first assumed'],
    ['3', 'Effect on learning', 'changed the writer’s own solution: collection points at the market’s exits instead of fines'],
    ['4', 'Using the learning', 'now checks who produced a source: a waste company’s advertising figure was replaced with the council’s own data'],
  ];
  rows.forEach(([n, h, d], i) => {
    const dl = wrap(d, 560, 16);
    const hh = Math.max(56, dl.length * LH(16) + 26);
    b += panel(30, y, 840, hh, i === 2 ? C.cream : C.panel, i === 2 ? C.olive : C.panelEdge);
    b += badge(66, y + hh / 2, 18, n, i === 2 ? C.mustard : C.cream);
    b += tx(100, y + hh / 2 + 6, h, { size: 18, weight: 700 });
    b += lines(282, y + (hh - dl.length * LH(16)) / 2 + 15, dl, { size: 16 });
    y += hh + 10;
  });
  b += tx(450, y + 16, 'Details invented for illustration.', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  fig('07-worked-example', 'Weak and strong reflective paragraphs', b, y + 44,
    'The weak paragraph makes only general claims about teamwork and learning. The strong learning paragraph moves from a specific event, a teammate’s interviews about stallholders paying by the hour, to what it shows, how it changed the writer’s solution, and a new habit of checking who produced a source.',
    'Specific event, what it shows, its effect, what changes: in every paragraph.',
    '## Worked example: weak and strong paragraphs');
}
