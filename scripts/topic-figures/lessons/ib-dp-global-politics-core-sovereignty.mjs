import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-dp-global-politics-core-sovereignty';

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

// 01 Westphalian features
{
  const r = rowList(30, 150, 840, [
    ['1', 'Territoriality', 'authority tied to a fixed territory with clear borders'],
    ['2', 'Supreme authority', 'the state has the final say inside its territory (Bodin, 1576; Hobbes, 1651)'],
    ['3', 'Non-intervention', 'outside actors have no right to decide what happens inside'],
    ['4', 'Legal equality', 'every sovereign state has the same formal rights, large or small'],
  ], { tsize: 21, minH: 84, gap: 12 });
  let b = label(450, 136, 'Traced to the Peace of Westphalia, 1648', { anchor: 'middle' }) + r.s;
  const n = note(30, 150 + r.h + 20, 840, 'UN Charter: sovereign equality (2(1)), no force against territorial integrity (2(4)), no UN intervention in domestic matters except Chapter VII (2(7)).', { size: 16, weight: 600 });
  fig('01-westphalian-sovereignty', 'The traditional (Westphalian) notion', b + n.s, 150 + r.h + 20 + n.h + 30,
    'Four features of the traditional Westphalian notion of sovereignty: territoriality, supreme authority inside the territory, non-intervention by outsiders and legal equality of states. The UN Charter builds these in through Articles 2(1), 2(4) and 2(7).',
    'Territory, final authority, non-intervention and equality: the classic model.',
    '## Traditional and modern notions of sovereignty');
}

// 02 Krasner's four meanings and the eurozone example
{
  const cols = [{ w: 260, head: 'Krasner (1999)' }, { w: 330, head: 'Meaning' }, { w: 250, head: 'Eurozone member' }];
  const st = (ok) => ok ? '✓ intact' : '▼ reduced';
  const tb = table(30, 150, cols, [
    ['Domestic', 'effective control at home', st(1)],
    ['Interdependence', 'control over cross-border flows', st(0) + ' (money flows)'],
    ['International legal', 'recognition', st(1)],
    ['Westphalian', 'no outside actors in domestic authority', '—'],
  ], { size: 17, rowFills: ['#ffffff', '#fbeee6', '#ffffff', '#ffffff'] });
  let b = label(450, 136, 'Has a eurozone member, without its own interest rates, lost sovereignty?', { anchor: 'middle' }) + tb.s;
  const y = 150 + tb.h + 24;
  b += box(30, y, 410, 130, { title: 'Traditional notion: yes', body: 'a key power now sits with the European Central Bank', fill: '#fbeee6', edge: C.rust, tsize: 19, valign: 'top' });
  b += box(460, y, 410, 130, { title: 'Pooled sovereignty: not really', body: 'shared by treaty; shapes ECB policy; could leave under Article 50', fill: '#eaf3f1', edge: C.tealDark, tsize: 19, valign: 'top' });
  const n = note(30, y + 150, 840, 'It has given up some control but not its authority: the answer depends on the notion used.', { size: 17 });
  fig('02-krasner-eurozone', 'Which sovereignty? Krasner’s four meanings', b + n.s, y + 150 + n.h + 30,
    'Krasner’s four meanings of sovereignty applied to a eurozone member: domestic and international legal sovereignty are intact, interdependence sovereignty over money flows is reduced. Under the traditional notion it has lost a key power; under pooled sovereignty it shared it by treaty and could leave.',
    'Split sovereignty into its meanings before judging whether it has been lost.',
    '## Traditional and modern notions of sovereignty');
}

// 03 Sources of sovereignty
{
  const sp = [
    { x: 30, y: 115, w: 300, h: 165, title: 'Force', body: 'Weber (1919): monopoly of legitimate force. Haiti: gangs controlled much of the capital after 2021' },
    { x: 570, y: 115, w: 300, h: 165, title: 'International law and norms', body: 'Montevideo (1933) criteria; UNGA 68/262 (2014) on Ukraine’s territorial integrity' },
    { x: 30, y: 420, w: 300, h: 165, title: 'Recognition', body: 'Nicaragua (2021) and Honduras (2023) switched to Beijing; Kosovo not a UN member' },
    { x: 570, y: 420, w: 300, h: 165, title: 'Consent of the governed', body: 'Scotland’s agreed 2014 referendum: about 55% voted to stay' },
  ].map((s) => ({ ...s, fill: C.panel, edge: C.tealDark, tsize: 19, bsize: 15 }));
  const b = hub(450, 350, 92, ['State', 'sovereignty'], sp, { size: 21 });
  fig('03-sources-of-sovereignty', 'Where sovereignty comes from', b, 615,
    'Four sources support state sovereignty: possession and use of force, as Haiti’s loss of control shows; international law and norms, such as the Montevideo criteria and the 2014 UN resolution on Ukraine; recognition by other states; and consent of the governed, as in Scotland’s 2014 referendum.',
    'Force, law, recognition and consent each help a state gain, keep or prove sovereignty.',
    '## Sources of sovereignty');
}

// 04 Declaratory vs constitutive
{
  let b = '';
  b += panel(30, 110, 410, 330, '#eaf3f1', C.tealDark) + tx(235, 150, 'Declaratory theory', { size: 22, weight: 700, anchor: 'middle' });
  b += box(60, 175, 350, 66, { title: 'meets the factual criteria', tsize: 17, align: 'middle', fill: C.panel, edge: C.tealDark }) + arrow(235, 245, 235, 280) + box(60, 284, 350, 60, { title: 'it is a state', tsize: 18, align: 'middle', fill: C.mustard, edge: C.ink });
  b += lines(235, 380, wrap('recognition just acknowledges what already exists', 360, 16), { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 }, 21);
  b += panel(460, 110, 410, 330, C.cream, C.olive) + tx(665, 150, 'Constitutive theory', { size: 22, weight: 700, anchor: 'middle' });
  b += box(490, 175, 350, 66, { title: 'other states recognise it', tsize: 17, align: 'middle', fill: C.panel, edge: C.olive }) + arrow(665, 245, 665, 280) + box(490, 284, 350, 60, { title: 'only then is it a state', tsize: 18, align: 'middle', fill: C.mustard, edge: C.ink });
  b += lines(665, 380, wrap('recognition creates statehood', 360, 16), { size: 16, anchor: 'middle', fill: C.olive, weight: 600 }, 21);
  b += box(30, 460, 840, 110, { title: 'The gap: Palestine', body: 'UN non-member observer state since 2012 and recognised by many states, yet without full control over its territory', fill: C.panel, edge: C.panelEdge, align: 'middle' });
  fig('04-recognition-theories', 'Two theories of recognition', b, 600,
    'Declaratory theory: a state exists once it meets the factual criteria, and recognition just acknowledges it. Constitutive theory: a state exists only once others recognise it. Palestine, a UN non-member observer state since 2012 recognised by many states but without full control of its territory, shows the gap.',
    'Does recognition acknowledge a state, or create one?',
    '## Sources of sovereignty');
}

// 05 Internal/external and de jure/de facto
{
  const cols = [{ w: 180, head: '' }, { w: 330, head: 'Internal sovereignty' }, { w: 330, head: 'External sovereignty' }];
  const tb = table(30, 110, cols, [
    ['Meaning', 'supreme authority over people and territory inside the borders', 'independence from outside control; recognised as an equal'],
    ['Shown by', 'making and enforcing laws, taxing, controlling force', 'recognition, UN membership, treaties, non-intervention'],
    ['Main threat', 'armed groups, secession, loss of consent', 'invasion, interference, supranational rules, intervention'],
  ], { size: 16 });
  let y = 110 + tb.h + 30;
  let b = tb.s + label(30, y, 'De jure (legal right) and de facto (actual control) can split'); y += 16;
  b += box(30, y, 410, 120, { title: 'Somalia', body: 'de jure recognition for years; armed groups such as al-Shabaab control parts of the territory', fill: '#fbeee6', edge: C.rust, tsize: 20, valign: 'top' });
  b += box(460, y, 410, 120, { title: 'Taiwan', body: 'strong de facto internal sovereignty; formal recognition from only a small number of states', fill: '#eaf3f1', edge: C.tealDark, tsize: 20, valign: 'top' });
  fig('05-internal-external', 'Internal and external sovereignty', b, y + 150,
    'A table contrasting internal sovereignty, supreme authority inside the borders, with external sovereignty, independence and recognition outside them, including how each is shown and threatened. Below, Somalia has legal recognition without full control, while Taiwan has strong control with limited recognition.',
    'Authority inside and standing outside are different, and so are legal right and actual control.',
    '## Internal and external dimensions');
}

// 06 Challenges map
{
  let b = panel(30, 110, 410, 560, C.cream, C.olive) + tx(235, 146, 'From states and the system', { size: 20, weight: 700, anchor: 'middle' });
  const L = [['Global interdependence', '15% global minimum corporate tax (2021)'], ['Interference by other states', 'Russia’s invasion of Ukraine, 2022'], ['Supranationality', 'EU law has priority (Costa v ENEL, 1964); Brexit 2020'], ['Humanitarian intervention', 'UNSC 1973 on Libya (2011); vetoes on Syria']];
  L.forEach(([h, d], i) => { b += box(50, 165 + i * 124, 370, 110, { title: h, body: d, tsize: 18, bsize: 15, valign: 'top', pad: 14 }); });
  b += panel(460, 110, 410, 560, '#eaf3f1', C.tealDark) + tx(665, 146, 'From non-state actors and other claims', { size: 19, weight: 700, anchor: 'middle' });
  const R = [['Indigenous claims', 'UNDRIP (2007); Waitangi (1840); Sámi Parliaments'], ['Transnational groups', 'Kurdistan Region referendum, 2017'], ['Nationalist movements', 'Scotland 2014 vs Catalonia 2017'], ['Violent non-state actors', 'Islamic State “caliphate”, 2014–2019'], ['TNCs', 'Philip Morris v Uruguay: Uruguay won, 2016']];
  R.forEach(([h, d], i) => { b += box(480, 165 + i * 99, 370, 88, { title: h, body: d, tsize: 17, bsize: 15, valign: 'top', pad: 12 }); });
  const n = note(30, 690, 840, 'Whether something is a challenge depends on which notion of sovereignty you examine: build that into every answer.', { size: 16, weight: 600 });
  fig('06-challenges', 'Challenges to state sovereignty', b + n.s, 690 + n.h + 30,
    'Two groups of challenges. From states and the international system: interdependence, interference by other states, supranational bodies and humanitarian intervention. From non-state actors and alternative claims: Indigenous claims, transnational groups such as Kurds, nationalist movements, violent groups such as Islamic State, and transnational corporations.',
    'Challenges come from above, beside and below the state; judge each against a stated notion.',
    '## Challenges to state sovereignty');
}
