import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'a-level-cambridge-global-perspectives-team-project';

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

// 01 Shared research, individual marks
{
  let b = panel(30, 110, 840, 250, '#eaf3f1', C.tealDark) + tx(52, 146, 'Shared: team of two to five (teachers help form teams)', { size: 19, weight: 700, fill: C.tealDark });
  b += box(230, 165, 440, 70, { title: 'One agreed problem statement', body: 'a local problem with global relevance', fill: C.mustard, edge: C.ink, align: 'middle', tsize: 19, bsize: 15 });
  const xs = [100, 300, 500, 700];
  xs.forEach((x, i) => { b += arrow(450, 239, x + 50, 268, { w: 2.5 }) + box(x, 272, 100, 70, { title: `Member ${i + 1}`, body: 'own angle', tsize: 15, bsize: 15, align: 'middle', fill: C.panel, edge: C.tealDark, pad: 6 }); });
  b += tx(450, 400, 'Individual: each member submits and is marked alone', { size: 19, weight: 700, anchor: 'middle', fill: C.olive });
  b += arrow(450, 366, 450, 380, { w: 3 });
  b += box(30, 420, 560, 120, { title: 'Presentation: 30 marks', body: 'own research and preferred solution; max 10 minutes; AO1 + AO3', fill: C.cream, edge: C.olive, tsize: 21, valign: 'middle' });
  b += box(610, 420, 260, 120, { title: 'Reflective paper: 10 marks', body: 'max 800 words; AO2', fill: C.cream, edge: C.olive, tsize: 19, valign: 'middle' });
  const n = note(30, 560, 840, 'Team presentations are not accepted: only individual work is marked. 40 marks in total.', { size: 17 });
  fig('01-shared-individual', 'Shared research, individual marks', b + n.s, 560 + n.h + 30,
    'A team of two to five agrees one problem statement, a local problem with global relevance, and each member researches a distinct angle. Each candidate then submits individually: a presentation worth 30 marks and a reflective paper worth 10.',
    'Research the problem together; argue and get marked on your own.',
    '## What makes Team Project different');
}

// 02 Problem statement spectrum
{
  let b = box(120, 115, 660, 100, { title: 'Problem statement', body: 'a local problem with global relevance, broad enough for distinct angles', fill: C.mustard, edge: C.ink, align: 'middle', tsize: 21 });
  b += `<defs><linearGradient id="lg" x1="0" x2="1"><stop offset="0" stop-color="${C.cream}"/><stop offset="1" stop-color="${C.tealLight}"/></linearGradient></defs>`;
  b += `<rect x="30" y="260" width="840" height="40" rx="20" fill="url(#lg)" stroke="${C.ink}" stroke-width="2"/>` + tx(40, 250, 'more local', { size: 17, weight: 700, fill: C.olive }) + tx(860, 250, 'more global', { size: 17, weight: 700, anchor: 'end', fill: C.tealDark });
  [160, 353, 547, 740].forEach((x, i) => { b += line(450, 219, x, 266, { w: 2, dash: '6 5' }) + `<circle cx="${x}" cy="280" r="13" fill="${C.ink}"/>` + tx(x, 330, `Member ${i + 1}`, { size: 16, weight: 700, anchor: 'middle' }); });
  b += tx(450, 360, 'each argues a distinct, contrasting perspective towards a workable solution', { size: 16, anchor: 'middle', fill: C.muted });
  b += box(30, 390, 410, 110, { title: '✗ Too vague', body: 'a general global issue with “local relevance” only asserted', fill: '#fbeee6', edge: C.rust, tfill: C.rust, bfill: C.ink, valign: 'top' });
  b += box(460, 390, 410, 110, { title: '✓ Strong', body: 'names a real place, group or situation', fill: '#eaf3f1', edge: C.tealDark, tfill: C.tealDark, bfill: C.ink, valign: 'top' });
  fig('02-problem-statement', 'One problem statement, several angles', b, 530,
    'One problem statement, a local problem with global relevance, supports several members whose angles range from more local to more global, each arguing a distinct perspective towards a workable solution. A strong statement names a real place, group or situation rather than a general issue.',
    'Make it concrete enough to be local and broad enough for every member’s angle.',
    '## Forming the team and the problem statement');
}

// 03 Presentation marks
{
  let b = '';
  b += box(30, 115, 410, 120, { title: 'Live recording', body: 'audience of at least three, including the class teacher; one session, quiet setting', fill: C.panel, tsize: 19, bsize: 15, valign: 'top' });
  b += box(460, 115, 410, 120, { title: 'Recorded voiceover', body: 'presentation software with your own narration; no live audience; quiet setting', fill: C.panel, tsize: 19, bsize: 15, valign: 'top' });
  b += tx(450, 265, 'Either format: maximum 10 minutes; anything beyond is not assessed', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  b += panel(30, 285, 410, 250, C.cream, C.olive) + tx(52, 322, 'AO1 Research, analysis, evaluation', { size: 18, weight: 700 });
  ['individual analysis of the problem', 'range of research', 'evaluation of sources', 'justification of your solution'].forEach((s, i) => { b += tx(60, 362 + i * 50, '•', { size: 20, weight: 700, fill: C.olive }) + tx(80, 362 + i * 50, s, { size: 17 }); });
  b += panel(460, 285, 410, 250, '#eaf3f1', C.tealDark) + tx(482, 322, 'AO3 Communication', { size: 18, weight: 700 });
  ['well-argued, well-organised', 'effective use of visual information', 'language pitched for the audience'].forEach((s, i) => { b += tx(490, 362 + i * 50, '•', { size: 20, weight: 700, fill: C.tealDark }) + tx(510, 362 + i * 50, s, { size: 17 }); });
  const n = note(30, 555, 840, 'Engage a non-specialist audience; use audio and visuals purposefully, not extensively; cite references clearly.', { size: 16, weight: 600 });
  fig('03-presentation', 'The presentation: 30 marks', b + n.s, 555 + n.h + 30,
    'The presentation can be a live recording to at least three people including the teacher, or slides with a recorded voiceover, and lasts at most 10 minutes. AO1 rewards individual analysis, range of research, source evaluation and justification of the solution; AO3 rewards organisation, visual information and language suited to the audience.',
    'AO1 research and evaluation carry most weight; polish matters, but less.',
    '## The presentation (30 marks)');
}

// 04 Reflective paper
{
  let b = box(30, 115, 840, 70, { title: 'Max 800 words · assessed entirely against AO2 (Reflection)', fill: C.mustard, edge: C.ink, align: 'middle', tsize: 19 });
  b += box(30, 210, 410, 200, { title: '✓ Reflect on', body: '• how effectively the team worked together, and what could have been improved\n• your own learning: the problem, research skills, presentation skills, or how collaboration shaped your views', fill: '#eaf3f1', edge: C.tealDark, tfill: C.tealDark, bfill: C.ink, valign: 'top', bsize: 16 });
  b += box(460, 210, 410, 200, { title: '✗ Not', body: '• a second presentation of research findings\n• a restatement of the problem or the solution', fill: '#fbeee6', edge: C.rust, tfill: C.rust, bfill: C.ink, valign: 'top', bsize: 16 });
  const n = note(30, 430, 840, 'Draft it after the presentation is finished, when the whole process, difficulties included, has happened.', { size: 17 });
  fig('04-reflective-paper', 'The reflective paper: 10 marks', b + n.s, 430 + n.h + 30,
    'The reflective paper is up to 800 words and assessed on AO2. It should reflect on how well the team worked and what could improve, and on the candidate’s own learning. It should not re-present findings or restate the problem and solution.',
    'Reflect on process and learning, specifically, and write it last.',
    '## The reflective paper (10 marks)');
}

// 05 Submission checklist
{
  const items = ['the recording (live or with recorded voiceover)', 'the audio and/or visual materials supporting it', 'a verbatim transcript of the presentation', 'the reflective paper'];
  let b = panel(30, 110, 840, 300);
  items.forEach((s, i) => { const y = 140 + i * 66; b += rect(60, y, 40, 40, C.tealLight, C.tealDark, 8, 2.5) + tx(80, y + 30, '✓', { size: 24, weight: 700, anchor: 'middle', fill: C.tealDark }) + tx(120, y + 28, `${i + 1}  ${s}`, { size: 19 }); });
  const n = note(30, 430, 840, 'Plus a statement of originality for each candidate; everything submitted electronically by the Administrative Guide deadlines.', { size: 16, weight: 600 });
  fig('05-submission', 'What each candidate submits', b + n.s, 430 + n.h + 30,
    'A checklist of four items per candidate: the recording, the supporting audio or visual materials, a verbatim transcript of the presentation, and the reflective paper, plus a statement of originality, all submitted electronically.',
    'Four pieces per candidate, plus a statement of originality.',
    '## What must be submitted');
}

// 06 Teacher role
{
  let b = box(30, 115, 410, 250, { title: '✓ Teachers may', body: '• form the teams\n• help you understand the task\n• help formulate the topic and problem statement\n• develop ways to explore perspectives\n• build organisational and referencing skills\n• develop clear oral arguments', fill: '#eaf3f1', edge: C.tealDark, tfill: C.tealDark, bfill: C.ink, valign: 'top', tsize: 21, bsize: 16 });
  b += box(460, 115, 410, 250, { title: '✗ Once research begins, must not', body: '• give detailed subject guidance\n• research for you\n• write or correct your notes\n• prepare any part of the presentation or transcript\n• suggest amendments to the presentation or reflective paper', fill: '#fbeee6', edge: C.rust, tfill: C.rust, bfill: C.ink, valign: 'top', tsize: 21, bsize: 16 });
  fig('06-teacher-role', 'The teacher’s role and its limits', b, 395,
    'Teachers may form teams, explain the task, help formulate the problem statement, and build skills in exploring perspectives, organisation, referencing and oral argument. Once research begins they must not give detailed guidance, research, write or correct notes, prepare the presentation or transcript, or suggest amendments.',
    'Support stays general once research starts; the decisions must be yours.',
    '## The teacher\'s role and its limits');
}
