import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-dp-global-politics-core-legitimacy';

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

// 01 Legitimacy, legality, power
{
  let b = box(250, 115, 400, 120, { title: 'Legitimacy', body: 'a population broadly accepts an actor or action as proper', fill: C.mustard, edge: C.ink, align: 'middle', tsize: 24 });
  b += box(30, 290, 400, 130, { title: 'not the same as power', body: 'power is the ability to effect change; a government can rule by coercion and still lack legitimacy, at high cost', fill: C.panel, edge: C.rust, tfill: C.rust, valign: 'top' });
  b += box(470, 290, 400, 130, { title: 'not the same as legality', body: 'a legal law can be widely rejected; an illegal protest can be widely seen as justified', fill: C.panel, edge: C.rust, tfill: C.rust, valign: 'top' });
  b += line(330, 239, 230, 286, { w: 2.5, dash: '6 5' }) + line(570, 239, 670, 286, { w: 2.5, dash: '6 5' });
  b += panel(30, 445, 840, 150, '#eaf3f1', C.tealDark) + tx(450, 480, 'Always ask: legitimate in whose eyes?', { size: 21, weight: 700, anchor: 'middle', fill: C.tealDark });
  ['citizens', 'other states', 'regional bodies', 'UN bodies'].forEach((s, i) => { b += box(60 + i * 200, 505, 180, 60, { title: s, tsize: 17, align: 'middle', fill: C.panel, edge: C.tealDark, pad: 8 }); });
  fig('01-legitimacy-legality-power', 'What legitimacy is, and is not', b, 625,
    'Legitimacy means a population broadly accepts an actor or action as proper. It is not the same as power, since a government can rule by coercion without acceptance, and not the same as legality, since legal laws can be rejected and illegal protests seen as justified. Legitimacy has audiences: citizens, other states, regional bodies and UN bodies.',
    'Legitimacy rests on acceptance, and the audience granting it matters.',
    '## What legitimacy means');
}

// 02 State vs government legitimacy
{
  let b = panel(30, 110, 400, 330, C.cream, C.olive) + tx(50, 146, 'State legitimacy', { size: 21, weight: 700 }) + tx(50, 170, 'borders, institutions, right to exist', { size: 15, fill: C.muted });
  b += box(70, 200, 320, 200, { title: 'Government legitimacy', body: 'the people or party in office, and how they gained and use power', fill: C.panel, edge: C.tealDark, align: 'middle', valign: 'middle' });
  const cs = [
    ['Sri Lanka, 2022', 'protests forced the president to flee and resign; nobody questioned the state', 'government rejected, state intact', C.tealDark],
    ['Kosovo, 2008', 'declared independence; Serbia, Russia and China do not recognise it; not a UN member', 'the state itself disputed', C.rust],
    ['Afghanistan, 2021', 'Taliban hold effective control, but very limited formal recognition', 'sovereignty without wide legitimacy', C.olive],
  ];
  cs.forEach(([h, d, k, c], i) => {
    const y = 110 + i * 112;
    b += box(450, y, 420, 100, { title: h, body: d, tsize: 18, bsize: 15, valign: 'top', pad: 12, edge: c });
  });
  const n = note(30, 460, 840, 'Write “the government lost legitimacy” when only the government did; the state can keep it.', { size: 17 });
  fig('02-state-vs-government', 'State legitimacy and government legitimacy', b + n.s, 460 + n.h + 30,
    'Government legitimacy sits inside the wider state legitimacy. Sri Lanka in 2022 shows a government rejected while the state stayed accepted; Kosovo since 2008 shows the state itself disputed; Afghanistan since 2021 shows effective control without wide recognition.',
    'A government can lose legitimacy while the state keeps it, and the reverse.',
    '## State legitimacy and government legitimacy');
}

// 03 Sources grouped
{
  const g = [
    ['Process', 'Did power come from the people, openly?', 'free and fair elections; representation; consent of governed people; transparency', '#eaf3f1', C.tealDark],
    ['Performance', 'Does the government deliver?', 'government performance; citizen welfare; order and stability; development; sustained development; quality of governance', C.cream, C.olive],
    ['Identity', 'Does rule fit a shared story or belief?', 'history; ideology; national identity', C.panel, C.panelEdge],
    ['Recognition', 'Do others accept these leaders and this state?', 'leadership recognition; international recognition', C.tealLight, C.tealDark],
  ];
  let b = '';
  g.forEach(([h, q, s, f, e], i) => {
    const x = 30 + (i % 2) * 430, y = 115 + Math.floor(i / 2) * 190;
    b += panel(x, y, 410, 175, f, e) + tx(x + 22, y + 40, h, { size: 24, weight: 700 }) + tx(x + 22, y + 68, q, { size: 16, weight: 600, fill: e === C.panelEdge ? C.ink : e, italic: true });
    b += lines(x + 22, y + 104, wrap(s, 366, 16), { size: 16 }, 22);
  });
  const n = note(30, 500, 840, 'Fifteen sources in the guide; this grouping is a study aid, not an IB classification. Most governments combine several.', { size: 16, weight: 600 });
  fig('03-sources-grouped', 'Sources of legitimacy, grouped', b + n.s, 500 + n.h + 30,
    'The guide’s fifteen sources of legitimacy in four study groups: process (elections, representation, consent, transparency), performance (welfare, order, development, quality of governance), identity (history, ideology, national identity) and recognition (leadership and international recognition).',
    'Process, performance, identity and recognition: most governments draw on several at once.',
    '## Sources of state and government legitimacy');
}

// 04 Tracing a challenge: Sri Lanka
{
  const r = rowList(30, 110, 840, [
    ['1', 'Case', 'Sri Lanka, 2022'],
    ['2', 'Source damaged: performance', 'the government could not secure fuel, food or medicine'],
    ['3', 'Audience: citizens', 'protested in large numbers'],
    ['4', 'Outcome', 'the president fled and resigned in July 2022; parliament chose Ranil Wickremesinghe'],
    ['5', 'State legitimacy: intact', 'the constitution was used to transfer power'],
    ['6', 'Recovery through process', 'presidential election, September 2024, won by Anura Kumara Dissanayake'],
  ], { tsize: 20, bsize: 16, minH: 76, gap: 10, r: 24 });
  fig('04-tracing-sri-lanka', 'Tracing a legitimacy crisis: Sri Lanka', r.s, 110 + r.h + 30,
    'Six steps for Sri Lanka in 2022: performance legitimacy was damaged by shortages of fuel, food and medicine; citizens protested; the president fled and resigned in July 2022; the state stayed legitimate as power passed constitutionally; and a September 2024 election renewed government legitimacy.',
    'Name the source damaged, the audience and the outcome, then check the state separately.',
    '## Challenges to state and government legitimacy');
}

// 05 Non-state actors: four areas
{
  const q = [
    ['Representation', 'how far it represents the interests of groups in society'],
    ['Interaction', 'how it relates to state and non-state actors'],
    ['Ability', 'what means it has to exert influence'],
    ['Efficacy', 'how far it achieves its goals'],
  ];
  let b = '';
  q.forEach(([h, d], i) => { b += box(30 + (i % 2) * 430, 115 + Math.floor(i / 2) * 140, 410, 125, { title: h, body: d, tsize: 22, fill: i % 3 ? C.panel : '#eaf3f1', edge: C.tealDark, valign: 'middle' }); });
  b += label(30, 430, 'Example: Médecins Sans Frontières (NGO)');
  const ex = [['claims no group; humanitarian principles'], ['negotiates access; stresses neutrality'], ['medical expertise; private donations'], ['visible outcomes: patients treated']];
  ex.forEach(([s], i) => { b += box(30 + i * 213, 445, 200, 96, { title: q[i][0], body: s, tsize: 16, bsize: 14.5, pad: 10, fill: C.cream, edge: C.olive, valign: 'top' }); });
  const n = note(30, 560, 840, 'The same actor can be legitimate to one audience and illegitimate to another: present contested cases in balance.', { size: 16, weight: 600 });
  fig('05-non-state-actors', 'Judging a non-state actor’s legitimacy', b + n.s, 560 + n.h + 30,
    'Four areas for judging a non-state actor: representation, interaction, ability and efficacy. Applied to Médecins Sans Frontières: it relies on humanitarian principles rather than representing a group, negotiates access while stressing neutrality, uses medical expertise funded by private donations, and shows visible outcomes.',
    'Representation, interaction, ability and efficacy: apply all four, and name the audience.',
    '## Sources of legitimacy of non-state actors');
}

// 06 Legitimation processes
{
  let b = `<circle cx="450" cy="370" r="80" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + tx(450, 365, 'Actor’s', { size: 19, weight: 700, anchor: 'middle' }) + tx(450, 390, 'legitimacy', { size: 19, weight: 700, anchor: 'middle' });
  b += box(250, 115, 400, 120, { title: '1 Formal recognition (top down)', body: 'South Sudan: independent July 2011, admitted to the UN days later', fill: '#eaf3f1', edge: C.tealDark, tsize: 18, bsize: 15, align: 'middle' });
  b += arrow(450, 239, 450, 284, { color: C.tealDark, marker: 'ahT', w: 4 });
  b += box(30, 310, 300, 130, { title: '2 Self-legitimation', body: 'elections, referendums, symbols; can fail, e.g. 2022 Russian-run referendums ruled invalid by the UNGA', fill: C.cream, edge: C.olive, tsize: 18, bsize: 14.5, valign: 'top', pad: 12 });
  b += arrow(334, 370, 366, 370, { color: C.olive, marker: 'ahO', w: 4 });
  b += box(570, 310, 300, 130, { title: '4 (De)legitimation by rivals', body: 'opposition boycotts, NGO name-and-shame reports, rival claims', fill: '#fbeee6', edge: C.rust, tsize: 18, bsize: 14.5, valign: 'top', pad: 12 });
  b += arrow(566, 370, 534, 370, { color: C.rust, marker: 'ahR', w: 4 });
  b += box(250, 505, 400, 110, { title: '3 Organic recognition (from below)', body: 'turnout, membership, donations, public trust', fill: '#eaf3f1', edge: C.tealDark, tsize: 18, bsize: 15, align: 'middle' });
  b += arrow(450, 501, 450, 456, { color: C.tealDark, marker: 'ahT', w: 4 });
  const n = note(30, 640, 840, 'Legitimacy is not fixed: it is gained, strengthened, reduced or lost through actions, interactions and outcomes.', { size: 16, weight: 600 });
  fig('06-legitimation-processes', 'How legitimacy is gained and lost', b + n.s, 640 + n.h + 30,
    'Four processes act on an actor’s legitimacy: formal recognition from above, such as South Sudan’s UN admission in 2011; self-legitimation through elections, referendums and symbols, which can fail; organic recognition from below through turnout, membership and trust; and delegitimation by rivals through boycotts and name-and-shame reports.',
    'Legitimacy comes from above, from the actor itself, from below, and can be stripped by rivals.',
    '## Legitimation processes and loss of legitimacy');
}
