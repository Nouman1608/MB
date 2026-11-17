import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-dp-global-politics-peace-conflict';

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

// 01 Four types of conflict
{
  const st = (x, y, lab) => `<rect x="${x - 34}" y="${y - 26}" width="68" height="52" rx="8" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + tx(x, y + 6, lab, { size: 15, weight: 700, anchor: 'middle' });
  const ns = (x, y, lab) => `<circle cx="${x}" cy="${y}" r="28" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + tx(x, y + 5, lab, { size: 14, weight: 700, anchor: 'middle' });
  const clash = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${C.rust}" stroke-width="4" stroke-dasharray="9 6"/>`;
  const card = (x, y, h, d) => panel(x, y, 410, 250) + tx(x + 22, y + 38, h, { size: 22, weight: 700 }) + lines(x + 22, y + 214, wrap(d, 370, 16), { size: 16, fill: C.muted }, 20);
  let b = card(30, 110, 'Interstate', 'between states');
  b += st(150, 225, 'State') + clash(186, 225, 314, 225) + st(350, 225, 'State');
  b += card(460, 110, 'Intrastate', 'within a state, e.g. civil war');
  b += `<rect x="530" y="160" width="270" height="130" rx="14" fill="none" stroke="${C.ink}" stroke-width="2.5" stroke-dasharray="6 5"/>` + tx(545, 180, 'one state', { size: 14, fill: C.muted });
  b += st(600, 235, 'State') + clash(636, 235, 702, 235) + ns(732, 235, 'group');
  b += card(30, 380, 'Non-state', 'between non-state actors, with no state as a direct party');
  b += ns(150, 495, 'group') + clash(180, 495, 320, 495) + ns(350, 495, 'group');
  b += card(460, 380, 'Extra-state', 'a state against a non-state actor operating beyond that state’s own borders');
  b += `<rect x="490" y="440" width="130" height="100" rx="12" fill="none" stroke="${C.ink}" stroke-width="2.5" stroke-dasharray="6 5"/>` + `<rect x="700" y="440" width="140" height="100" rx="12" fill="none" stroke="${C.ink}" stroke-width="2.5" stroke-dasharray="6 5"/>`;
  b += st(555, 490, 'State') + clash(591, 490, 738, 490) + ns(770, 490, 'group');
  const n = note(30, 650, 840, 'Classify the conflict first, then build the argument around it.', { size: 18 });
  fig('01-four-types', 'Four types of conflict', b + n.s, 650 + n.h + 30,
    'Four schematics. Interstate: two states in conflict. Intrastate: a state against a group inside its own borders, as in civil war. Non-state: two non-state groups with no state directly involved. Extra-state: a state against a non-state actor operating beyond that state’s borders.',
    'Name the type of conflict before analysing it.',
    '## Syllabus coverage');
}

// 02 Core concepts applied
{
  const sp = [
    { x: 30, y: 115, w: 300, h: 150, title: 'Power', body: 'who holds military, economic, informational power; how the balance shapes dynamics and outcome' },
    { x: 570, y: 115, w: 300, h: 150, title: 'Sovereignty', body: 'conflict can challenge or reassert it, e.g. separatist or secessionist movements' },
    { x: 30, y: 415, w: 300, h: 150, title: 'Legitimacy', body: 'how combatants and outsiders claim or deny legitimacy for force; shapes responses' },
    { x: 570, y: 415, w: 300, h: 150, title: 'Interdependence', body: 'refugee flows, economic disruption, security concerns spread beyond borders' },
  ].map((s) => ({ ...s, fill: C.panel, edge: C.tealDark, tsize: 20, bsize: 15.5 }));
  const b = hub(450, 340, 92, ['Peace and', 'conflict'], sp, { size: 20 });
  const n = note(30, 590, 840, 'Name the concept each point illustrates: concept application, not factual recall, is what is tested.', { size: 16, weight: 600 });
  fig('02-core-concepts', 'Four core concepts applied to conflict', b + n.s, 590 + n.h + 30,
    'Peace and conflict at the centre linked to the four core concepts: power (who holds it and how the balance shapes the outcome), sovereignty (challenged or reasserted, for example by secessionist movements), legitimacy (claimed or denied for the use of force) and interdependence (refugee flows and disruption crossing borders).',
    'Use the four concepts as lenses, and say which one each point uses.',
    '## Syllabus coverage');
}

// 03 Six causes
{
  const causes = ['Identity', 'Ideology', 'Interests', 'Resources', 'Socio-economic divisions', 'Institutional arrangements'];
  let b = '';
  const cx = 450, cy = 330;
  causes.forEach((c, i) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / 6, x = cx + 300 * Math.cos(a), y = cy + 190 * Math.sin(a);
    const struct = i >= 4;
    b += line(cx, cy, x, y, { color: struct ? C.rust : C.ink, w: struct ? 3.5 : 2.5 });
    b += box(x - 115, y - 34, 230, 68, { title: c, tsize: 18, align: 'middle', pad: 8, fill: struct ? '#fbeee6' : C.panel, edge: struct ? C.rust : C.tealDark });
  });
  b += `<circle cx="${cx}" cy="${cy}" r="70" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + tx(cx, cy + 7, 'Conflict', { size: 21, weight: 700, anchor: 'middle' });
  b += tx(450, 600, 'Highlighted: the two causes most directly linked to structural violence', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
  const n = note(30, 625, 840, 'Real conflicts rarely have one cause: name more than one category and explain how they interact.', { size: 17 });
  fig('03-six-causes', 'Six causes of conflict', b + n.s, 625 + n.h + 30,
    'Six causes of conflict around a central circle: identity, ideology, interests, resources, socio-economic divisions and institutional arrangements. The last two are highlighted as the causes most directly linked to structural violence.',
    'Connect several causes rather than giving a conflict a single label.',
    '## Syllabus coverage');
}

// 04 Peacemaking, keeping, building
{
  const c = chainH(30, 140, 840, [
    { title: 'Peacemaking', body: 'negotiations and treaties aimed at ending violence', fill: '#eaf3f1', edge: C.tealDark },
    { title: 'Peacekeeping', body: 'maintaining a ceasefire or preventing renewed violence, e.g. UN missions', fill: C.cream, edge: C.olive },
    { title: 'Peacebuilding', body: 'post-conflict work to prevent recurrence: institutions, transitional justice, reconciliation', fill: C.mustard, edge: C.ink },
  ], { h: 170, gap: 40, tsize: 22, bsize: 16 });
  let b = c.s;
  b += label(30, 360, 'Peacebuilding mechanisms named in the syllabus');
  b += box(30, 375, 410, 110, { title: 'Truth and reconciliation commissions', body: 'e.g. the Gambia, Canada, Tunisia', fill: C.panel, edge: C.panelEdge, tsize: 18 });
  b += box(460, 375, 410, 110, { title: 'Justice institutions', body: 'e.g. the International Criminal Court', fill: C.panel, edge: C.panelEdge, tsize: 18 });
  fig('04-peace-approaches', 'Making, keeping and building peace', b, 515,
    'Three approaches to resolving conflict: peacemaking through negotiations and treaties, peacekeeping that maintains a ceasefire such as UN missions, and peacebuilding after conflict through institutions, transitional justice and reconciliation, including truth and reconciliation commissions in the Gambia, Canada and Tunisia and the International Criminal Court.',
    'End the violence, hold the ceasefire, then build so it does not return.',
    '## Syllabus coverage');
}

// 05 Classify, apply, connect
{
  const r = rowList(30, 110, 840, [
    ['1', 'Classify', 'interstate, intrastate, non-state or extra-state?'],
    ['2', 'Pick the concept', 'which of power, sovereignty, legitimacy, interdependence does it foreground?'],
    ['3', 'Connect causes', 'more than one of the six, and how they interact'],
    ['4', 'Use current cases', 'a case log: one interstate, one intrastate, one resolution or peacebuilding process, with dates, actors, outcomes'],
  ], { tsize: 21, minH: 88 });
  fig('05-analysis-routine', 'A routine for any conflict question', r.s, 110 + r.h + 30,
    'Four steps: classify the conflict by type, pick the core concept it foregrounds, connect more than one cause, and support it with a current case log of an interstate conflict, an intrastate conflict and a resolution or peacebuilding process.',
    'Classify, choose a concept, connect causes, and use current, dated cases.',
    '## How to approach it');
}

// 06 Legitimacy shapes responses
{
  let b = box(30, 115, 390, 160, { title: 'Conflict A', body: 'force widely seen as defensive or authorised by an international body\nlegitimacy broadly recognised', fill: '#eaf3f1', edge: C.tealDark, tsize: 21, valign: 'top' });
  b += box(480, 115, 390, 160, { title: 'Conflict B', body: 'force widely seen as unprovoked aggression or lacking authorisation\nlegitimacy broadly denied', fill: '#fbeee6', edge: C.rust, tsize: 21, valign: 'top' });
  b += tx(450, 205, '≈', { size: 30, weight: 700, anchor: 'middle' }) + tx(450, 305, 'militarily similar', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  b += arrow(225, 280, 225, 330, { color: C.tealDark, marker: 'ahT' }) + arrow(675, 280, 675, 330, { color: C.rust, marker: 'ahR' });
  b += box(30, 335, 390, 100, { title: 'More measured or supportive responses', fill: C.panel, edge: C.tealDark, align: 'middle', tsize: 18 });
  b += box(480, 335, 390, 100, { title: 'Condemnation, sanctions or intervention', fill: C.panel, edge: C.rust, align: 'middle', tsize: 18 });
  const n = note(30, 460, 840, 'Legitimacy is partly perception and recognition by other actors, not the scale or intensity of the fighting.', { size: 17 });
  fig('06-legitimacy-responses', 'Why similar conflicts get different responses', b + n.s, 460 + n.h + 30,
    'Two militarily similar conflicts. In A, force is seen as defensive or authorised, legitimacy is recognised, and responses are measured or supportive. In B, force is seen as unprovoked or unauthorised, legitimacy is denied, and responses include condemnation, sanctions or intervention.',
    'Perceived legitimacy, not military scale, drives the international response.',
    '## Worked example: applying legitimacy to explain differing international responses');
}
