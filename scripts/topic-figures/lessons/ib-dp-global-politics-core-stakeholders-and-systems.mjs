import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-dp-global-politics-core-stakeholders-and-systems';

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

// 01 Actor vs stakeholder
{
  let b = `<ellipse cx="450" cy="330" rx="400" ry="200" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="3"/>`;
  b += tx(400, 200, 'Stakeholders: anyone affected by the issue', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += `<ellipse cx="560" cy="350" rx="210" ry="120" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
  b += tx(560, 320, 'Actors', { size: 22, weight: 700, anchor: 'middle' }) + tx(560, 348, 'agency and means to', { size: 16, anchor: 'middle' }) + tx(560, 370, 'exercise power', { size: 16, anchor: 'middle' });
  b += tx(560, 410, 'e.g. the ministry that', { size: 15, anchor: 'middle', italic: true }) + tx(560, 430, 'approved the dam', { size: 15, anchor: 'middle', italic: true });
  b += tx(205, 320, 'e.g. a child living', { size: 15, anchor: 'middle', italic: true }) + tx(205, 340, 'downstream of a new dam', { size: 15, anchor: 'middle', italic: true });
  b += parrow('M230,370 C260,440 330,460 380,430', { color: C.rust, marker: 'ahR', w: 4 });
  b += tx(250, 555, 'residents organise, raise money, go to court:', { size: 15, fill: C.rust, weight: 600, anchor: 'middle' }) + tx(250, 575, 'stakeholders become actors', { size: 15, fill: C.rust, weight: 600, anchor: 'middle' });
  const n = note(30, 600, 840, 'Every actor is a stakeholder on the issues it acts on; not every stakeholder is an actor.', { size: 17 });
  fig('01-actors-stakeholders', 'Stakeholders and actors', b + n.s, 600 + n.h + 30,
    'A large set of stakeholders, anyone affected by an issue, contains a smaller set of actors, those with the agency and means to exercise power. A child downstream of a dam is a stakeholder; the ministry that approved it is an actor. Residents who organise and go to court move from stakeholder to actor.',
    'All actors are stakeholders; stakeholders become actors when they gain the means to act.',
    '## 1. Stakeholders and actors');
}

// 02 Actor types
{
  const a = [
    ['States', '193 UN member states'], ['Subnational and local governments', 'Scottish Parliament; C40 Cities'], ['IGOs', 'UN, WTO, African Union, ASEAN'],
    ['Organized civil society', 'Amnesty International; MSF'], ['Private actors / companies', 'local firms to multinationals'], ['Social movements', 'Fridays for Future (2018)'],
    ['Resistance movements', 'label contested: say who uses which'], ['Political parties', 'compete for office'], ['Interest and pressure groups', 'trade unions, business associations'],
    ['Political leaders', 'heads of state; party, religious, movement leaders'], ['Formal and informal forums', 'UN General Assembly; G7, G20'], ['The media', 'news organisations, social media platforms'],
  ];
  let b = '';
  a.forEach(([h, e], i) => { const x = 30 + (i % 3) * 285, y = 115 + Math.floor(i / 3) * 118; b += box(x, y, 270, 108, { title: h, body: e, tsize: 17, bsize: 15, align: 'middle', pad: 12, fill: i % 2 ? C.panel : '#eaf3f1', edge: C.tealDark }); });
  b += box(30, 589, 840, 64, { title: 'Other individual and collective actors', body: 'diasporas, activists, whistleblowers, expert networks, hacker collectives', tsize: 17, bsize: 15, align: 'middle', pad: 10, fill: C.cream, edge: C.olive });
  const n = note(30, 672, 840, 'Same type, different power: ask what this actor can actually do in this system, and who accepts it.', { size: 16, weight: 600 });
  fig('02-actor-types', 'The actor types the guide lists', b + n.s, 672 + n.h + 30,
    'A grid of the actor types in the guide, each with an example: states, subnational and local governments, IGOs, organised civil society, companies, social movements, resistance movements, political parties, interest and pressure groups, political leaders, formal and informal forums, the media, and other individual and collective actors.',
    'Know each type with one example, but judge power case by case.',
    '## 1. Stakeholders and actors');
}

// 03 Scales and structure vs dynamics
{
  const sc = ['global', 'international', 'regional', 'national', 'subnational', 'local', 'community'];
  let b = label(150, 136, 'Scales of a system', { anchor: 'middle' });
  sc.forEach((s, i) => { const w = 240 - i * 22; b += box(150 - w / 2, 150 + i * 52, w, 44, { title: s, tsize: 17, align: 'middle', pad: 8, fill: i % 2 ? C.tealLight : C.panel, edge: C.tealDark }); });
  b += box(300, 150, 570, 190, { title: 'Structure: the stable arrangement', body: '• who holds formal authority, at what level\n• how decisions are made: majority, consensus, veto\n• how power is distributed\n• is there any authority above? (no world government)', fill: C.cream, edge: C.olive, valign: 'top', tsize: 19, bsize: 16 });
  b += box(300, 356, 570, 150, { title: 'Dynamics: how interactions change', body: 'cooperation and competition; alliances form and break; new actors enter; rules tested or reformed; crises shift power', fill: '#eaf3f1', edge: C.tealDark, valign: 'top', tsize: 19, bsize: 16 });
  const n = note(30, 530, 840, 'Structures and dynamics regulate interactions and limit the courses of action open to actors.', { size: 17 });
  fig('03-structure-dynamics', 'Systems: scale, structure and dynamics', b + n.s, 530 + n.h + 30,
    'Seven scales at which a political system can be studied, from global to community. Structure is the stable arrangement: authority, decision rules, distribution of power and whether anything sits above. Dynamics are how interactions change: cooperation, competition, alliances, new actors, rule changes and crises.',
    'Structure sets the rules of the game; dynamics are how the game changes.',
    '## 2. Systems -- structures and dynamics');
}

// 04 How structure limits action
{
  let b = '';
  const ex = (x, h, s1, s2, s3) => {
    let s = panel(x, 110, 410, 420) + tx(x + 205, 148, h, { size: 21, weight: 700, anchor: 'middle' });
    s += chainV(x + 30, 170, 350, [
      { title: 'Structure', body: s1, fill: C.cream, edge: C.olive },
      { title: 'Limit', body: s2, fill: '#fbeee6', edge: C.rust },
      { title: 'Actors respond', body: s3, fill: '#eaf3f1', edge: C.tealDark },
    ], { gap: 34, tsize: 18, bsize: 15 }).s;
    return s;
  };
  b += ex(30, 'UN Security Council', 'five permanent members hold a veto', 'a resolution can fail even with wide support', 'turn to the General Assembly or regional bodies');
  b += ex(460, 'WTO dispute settlement', 'only member governments can be parties', 'a harmed company cannot bring a case itself', 'it must persuade its own government to act');
  fig('04-structure-limits-action', 'How structure limits what actors can do', b, 560,
    'Two examples. In the UN Security Council, five permanent members hold a veto, so a resolution can fail despite wide support and actors turn to the General Assembly or regional bodies. In WTO dispute settlement, only governments can be parties, so a harmed company must persuade its government to bring the case.',
    'The rules of a system decide which routes are open, and actors route around the closed ones.',
    '## 2. Systems -- structures and dynamics');
}

// 05 Hard law, soft law, norms, institutions
{
  let b = `<defs><linearGradient id="hl" x1="0" x2="1"><stop offset="0" stop-color="${C.tealDark}"/><stop offset="1" stop-color="${C.tealLight}"/></linearGradient></defs>`;
  b += `<rect x="30" y="120" width="840" height="34" rx="17" fill="url(#hl)" stroke="${C.ink}" stroke-width="2"/>` + tx(50, 143, 'binding', { size: 16, weight: 700, fill: '#fff' }) + tx(850, 143, 'not binding', { size: 16, weight: 700, anchor: 'end' });
  b += box(30, 175, 270, 200, { title: 'Hard law', body: 'treaties; customary international law\ne.g. UN Charter Art. 2(4) and 51; Vienna Convention on Diplomatic Relations (1961)', fill: '#eaf3f1', edge: C.tealDark, valign: 'top', bsize: 15 });
  b += box(315, 175, 270, 200, { title: 'Soft law', body: 'declarations, guidelines, resolutions\ne.g. UDHR (1948): a GA resolution that shaped constitutions and later treaties', fill: C.tealLight, edge: C.tealDark, valign: 'top', bsize: 15 });
  b += box(600, 175, 270, 200, { title: 'Norms', body: 'shared expectations, written or not\ne.g. no chemical weapons; regular elections\nwork through legitimacy', fill: C.cream, edge: C.olive, valign: 'top', bsize: 15 });
  b += label(30, 410, 'Institutions: two senses');
  b += box(30, 425, 410, 100, { title: '1 Formal organisations', body: 'the UN, an electoral commission, an international court', tsize: 18, bsize: 15 });
  b += box(460, 425, 410, 100, { title: '2 Social structures of rules and norms', body: 'sovereignty, diplomacy, elections, markets', tsize: 18, bsize: 15 });
  b += label(30, 565, 'Rules, norms and institutions can…');
  [['shape', 'define the options available', C.tealLight], ['limit', 'rule options out (a veto)', '#fbeee6'], ['cause', 'be the problem itself (a border splitting a community)', C.cream]].forEach(([h, d, f], i) => { b += box(30 + i * 285, 580, 270, 100, { title: h, body: d, tsize: 21, bsize: 15, align: 'middle', fill: f }); });
  fig('05-law-norms-institutions', 'Legal frameworks, norms and institutions', b, 710,
    'A scale from binding to non-binding: hard law such as the UN Charter, soft law such as the Universal Declaration of Human Rights, and norms such as the taboo on chemical weapons. Institutions are both formal organisations and social structures of rules. Together they shape, limit or even cause political issues.',
    'Binding or not, rules and norms shape options, rule some out, and can cause issues themselves.',
    '## 3. Legal frameworks, norms and institutions');
}

// 06 Mapping the Paris Agreement
{
  const sp = [
    { x: 30, y: 120, w: 250, h: 90, title: 'States', body: 'negotiated and signed' },
    { x: 325, y: 120, w: 250, h: 90, title: 'IGO', body: 'UN climate secretariat ran it' },
    { x: 620, y: 120, w: 250, h: 90, title: 'Formal forum', body: 'Conference of the Parties' },
    { x: 30, y: 395, w: 250, h: 90, title: 'Civil society', body: 'accredited NGOs observing, lobbying' },
    { x: 325, y: 395, w: 250, h: 90, title: 'Subnational', body: 'cities and regions’ own pledges' },
    { x: 620, y: 395, w: 250, h: 90, title: 'Private actors', body: 'some pushing faster, some slower' },
  ].map((s) => ({ ...s, fill: '#eaf3f1', edge: C.tealDark, tsize: 18, bsize: 15 }));
  let b = hub(450, 302, 72, ['Paris', 'Agreement', '2015'], sp, { size: 18 });
  b += box(30, 230, 230, 140, { title: 'Media', body: 'raised public attention', fill: '#eaf3f1', edge: C.tealDark, tsize: 18, bsize: 15, align: 'middle' });
  b += box(620, 230, 250, 140, { title: 'Stakeholders with little voice', body: 'low-lying coasts; future generations; fossil-fuel workers', fill: '#fbeee6', edge: C.rust, tsize: 17, bsize: 15, align: 'middle' });
  b += line(260, 300, 378, 302, { w: 2.5 });
  b += box(30, 510, 840, 120, { title: 'Structure → outcome', body: 'consensus decisions and guarded sovereignty → each state sets its own NDC; reporting required, targets not legally binding → near-universal participation, weak enforcement', fill: C.cream, edge: C.olive, align: 'middle' });
  fig('06-paris-actor-map', 'Mapping a real case: the Paris Agreement', b, 660,
    'An actor map around the 2015 Paris Agreement: states, the UN climate secretariat, the Conference of the Parties, NGOs, cities and regions, companies and the media, with stakeholders who had little voice such as low-lying coastal communities, future generations and fossil-fuel workers. Consensus decision-making led to self-set national targets: wide participation, weak enforcement.',
    'Name the actors, the voiceless stakeholders, then link the structure to the outcome.',
    '## Worked example: mapping a real case');
}
