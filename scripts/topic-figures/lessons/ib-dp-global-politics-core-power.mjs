import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-dp-global-politics-core-power';

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

// 01 Capacity vs relational; resources vs outcomes
{
  let b = panel(30, 110, 410, 300) + tx(235, 148, 'Capacity view', { size: 22, weight: 700, anchor: 'middle' }) + tx(235, 172, 'power is what an actor HAS', { size: 16, anchor: 'middle', fill: C.muted });
  ['troops', 'money', 'votes', 'ideas'].forEach((s, i) => { b += box(60 + (i % 2) * 180, 200 + Math.floor(i / 2) * 76, 160, 60, { title: s, tsize: 18, align: 'middle', fill: C.cream, edge: C.olive, pad: 8 }); });
  b += tx(235, 385, 'countable and comparable', { size: 16, anchor: 'middle', fill: C.olive, weight: 600 });
  b += panel(460, 110, 410, 300) + tx(665, 148, 'Relational view', { size: 22, weight: 700, anchor: 'middle' }) + tx(665, 172, 'power exists BETWEEN actors', { size: 16, anchor: 'middle', fill: C.muted });
  b += `<circle cx="560" cy="275" r="50" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + tx(560, 281, 'A', { size: 24, weight: 700, anchor: 'middle' });
  b += `<circle cx="770" cy="275" r="50" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + tx(770, 281, 'B', { size: 24, weight: 700, anchor: 'middle' });
  b += `<line x1="614" y1="275" x2="716" y2="275" stroke="${C.tealDark}" stroke-width="4" stroke-dasharray="8 6"/>`;
  b += lines(665, 360, wrap('a large army gives no power over a state that does not fear it', 370, 16), { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 }, 21);
  b += label(30, 450, 'Resources do not guarantee outcomes');
  b += box(30, 465, 360, 120, { title: 'Resources', body: 'US troops in Afghanistan for almost 20 years', fill: C.cream, edge: C.olive, align: 'middle' });
  b += arrow(394, 525, 496, 525, { w: 4, color: C.rust, marker: 'ahR', dash: '10 7' }) + tx(445, 512, '✗', { size: 22, weight: 700, anchor: 'middle', fill: C.rust });
  b += box(510, 465, 360, 120, { title: 'Outcome', body: 'Taliban took Kabul on 15 August 2021 as US forces withdrew', fill: '#fbeee6', edge: C.rust, align: 'middle' });
  fig('01-capacity-relational', 'Power as capacity or as relationship', b, 615,
    'Left: the capacity view counts what an actor has, such as troops, money, votes and ideas. Right: the relational view sees power only between actors. Below: US troops in Afghanistan for almost 20 years did not prevent the Taliban taking Kabul on 15 August 2021, so resources did not become the outcome sought.',
    'Holding resources is not the same as getting the outcome you want.',
    '## Defining power');
}

// 02 Lukes' three dimensions
{
  const layers = [
    ['1st dimension: open decisions', 'winning visible decisions; Dahl (1957): A gets B to do what B would not otherwise do', C.panel, C.panelEdge],
    ['2nd dimension: the agenda', '“non-decisions” keep issues off the agenda (Bachrach and Baratz)', C.cream, C.olive],
    ['3rd dimension: shaping wants', 'people’s wants are shaped so conflict never appears', C.mustard, C.ink],
  ];
  let b = '';
  layers.forEach(([h, d, f, e], i) => {
    const x = 30 + i * 50, w = 840 - i * 100, y = 120 + i * 140;
    b += box(x, y, w, 120, { title: h, body: d, fill: f, edge: e, tsize: 21, bsize: 16, align: 'middle' });
  });
  b += `<line x1="890" y1="140" x2="890" y2="500" stroke="${C.ink}" stroke-width="0"/>`;
  b += tx(450, 568, 'more hidden ↓   harder to see, and to classify', { size: 17, anchor: 'middle', weight: 700, fill: C.rust });
  fig('02-lukes-dimensions', 'Lukes: three dimensions of power', b, 600,
    'Three layers from Steven Lukes’ Power: A Radical View (1974). First, winning open decisions, Dahl’s idea that A gets B to do what B would not otherwise do. Second, keeping issues off the agenda through non-decisions. Third, shaping what people want so conflict never appears, the most hidden form.',
    'The deeper the dimension, the less visible the power.',
    '## Defining power');
}

// 03 Hard, smart, soft
{
  let b = `<defs><linearGradient id="hs" x1="0" x2="1"><stop offset="0" stop-color="#efcdb8"/><stop offset="0.5" stop-color="${C.cream}"/><stop offset="1" stop-color="${C.tealLight}"/></linearGradient></defs>`;
  b += `<rect x="30" y="120" width="840" height="56" rx="28" fill="url(#hs)" stroke="${C.ink}" stroke-width="2.2"/>`;
  b += tx(60, 156, 'coercion', { size: 18, weight: 700, fill: C.rust }) + tx(450, 156, 'eclectic mix', { size: 18, weight: 700, anchor: 'middle', fill: C.olive }) + tx(840, 156, 'persuasion, attraction', { size: 18, weight: 700, anchor: 'end', fill: C.tealDark });
  const col = (x, h, d, ex, f, e) => box(x, 200, 270, 300, { title: h, body: d + '\n\n' + ex, fill: f, edge: e, tsize: 22, bsize: 15.5, valign: 'top' });
  b += col(30, 'Hard power', 'force, threats, penalties; guide: military interventions, economic sanctions', '• Russia’s full-scale invasion of Ukraine, Feb 2022 (military)\n• EU, UK, US sanctions on Russia (economic)', '#fbeee6', C.rust);
  b += col(315, 'Smart power', 'hard and soft chosen to fit the aim; guide: climate change, negotiations', '• JCPOA (2015): years of sanctions plus multilateral diplomacy\n• EU climate lead by example plus its Carbon Border Adjustment Mechanism (Oct 2023)', C.cream, C.olive);
  b += col(600, 'Soft power', 'culture, political values, legitimate foreign policy (Nye); guide: cultural influence, ideology, aid', '• Korean Wave: K-pop and film\n• Parasite: first non-English-language Best Picture Oscar, 2020', '#eaf3f1', C.tealDark);
  fig('03-hard-smart-soft', 'Hard, smart and soft power', b, 530,
    'A scale from coercion to attraction. Hard power uses force and penalties, such as Russia’s 2022 invasion of Ukraine and the sanctions imposed in response. Smart power mixes tools to fit an aim, such as the 2015 JCPOA or EU climate diplomacy with its carbon border charge. Soft power attracts, such as South Korea’s cultural reach.',
    'Hard coerces, soft attracts, and smart combines them for a stated aim.',
    '## Hard, soft and smart power');
}

// 04 Classifying the Belt and Road Initiative
{
  const r = rowList(30, 110, 840, [
    ['1', 'Identify the resource', 'loans, investment and construction: economic resources'],
    ['2', 'Ask how it works', 'if partners join because they want the projects, it attracts: soft power'],
    ['3', 'Test for coercion', 'critics cite Sri Lanka’s 2017 99-year lease of Hambantota port; other researchers dispute the “debt-trap” label'],
    ['4', 'Conclude', 'the same aid can be soft or hard depending on how it is used and seen: a limit of the hard/soft split'],
  ], { tsize: 21, minH: 92 });
  let b = label(450, 100 + 0, '', {}) + r.s;
  fig('04-classify-bri', 'Classifying China’s Belt and Road Initiative', b, 110 + r.h + 30,
    'Four steps for classifying the Belt and Road Initiative, launched in 2013: identify the economic resources; ask whether partners join because they want the projects, which is soft power; test for coercion, where critics cite Hambantota port and others dispute the debt-trap label; and conclude that the same aid can be soft or hard.',
    'Classify by how a tool works and is seen, and say where the categories blur.',
    '## Hard, soft and smart power');
}

// 05 Structural vs relational power
{
  let b = panel(30, 110, 410, 330) + tx(235, 148, 'Structural power', { size: 22, weight: 700, anchor: 'middle' }) + tx(235, 172, 'from POSITION in a system', { size: 16, anchor: 'middle', fill: C.muted });
  b += `<path d="M235,195 L355,275 L115,275 Z" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + `<circle cx="235" cy="232" r="14" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`;
  b += lines(235, 310, ['permanent Security Council seat:', 'veto under Article 27', 'head of state’s office'], { size: 16, anchor: 'middle' }, 22);
  b += tx(235, 415, 'linked to Susan Strange', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  b += panel(460, 110, 410, 330) + tx(665, 148, 'Relational power', { size: 22, weight: 700, anchor: 'middle' }) + tx(665, 172, 'from TIES between actors', { size: 16, anchor: 'middle', fill: C.muted });
  const pts = [[600, 215], [730, 215], [560, 270], [770, 270], [665, 250]];
  [[0, 4], [1, 4], [2, 4], [3, 4], [0, 2], [1, 3], [0, 1]].forEach(([a, c]) => { b += line(pts[a][0], pts[a][1], pts[c][0], pts[c][1], { color: C.tealDark, w: 2 }); });
  pts.forEach(([x, y]) => { b += `<circle cx="${x}" cy="${y}" r="13" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2"/>`; });
  b += lines(665, 320, ['NATO Article 5: Finland (2023)', 'and Sweden (2024) joined', 'Fridays for Future: from one', 'school strike (2018) to a global movement'], { size: 15.5, anchor: 'middle' }, 21);
  b += label(30, 480, 'They interact: Ukraine, 2022');
  const c = chainH(30, 495, 840, [
    { title: '25 Feb: Russian veto', body: 'structural block in the Security Council', fill: '#fbeee6', edge: C.rust },
    { title: '2 Mar: 141 states in the GA', body: 'demand Russian withdrawal: relational pressure', fill: '#eaf3f1', edge: C.tealDark },
    { title: 'April 2022', body: 'the Assembly agrees to meet after any veto is cast', fill: C.cream, edge: C.olive },
  ], { h: 120, gap: 36, tsize: 18, bsize: 15 });
  b += c.s;
  fig('05-structural-relational', 'Structural and relational power', b, 645,
    'Structural power comes from position, such as a permanent Security Council seat with a veto or a head of state’s office. Relational power comes from ties, such as NATO membership or the Fridays for Future network. In 2022 Russia’s veto was a structural block; 141 states voting in the General Assembly applied relational pressure, and the Assembly agreed to meet after any veto.',
    'Position can block; networks can work around the block.',
    '## Structural and relational power');
}

// 06 Economic, political, social, cultural
{
  const q = [
    ['Economic', 'money, markets, trade, supply chains', 'US advanced-chip export controls (Oct 2022); China’s gallium and germanium controls (2023)', '#eaf3f1', C.tealDark],
    ['Political', 'authority to make and enforce binding decisions', 'Security Council resolutions; the EU setting single-market rules', C.cream, C.olive],
    ['Social', 'networks, norms, status, mobilisation', 'ICAN, 2017 Nobel Peace Prize', C.panel, C.panelEdge],
    ['Cultural', 'shaping values, identity and taste', 'Hollywood, Bollywood, the Korean Wave; reach of English', C.tealLight, C.tealDark],
  ];
  let b = '';
  q.forEach(([h, r, e, f, ed], i) => { b += box(30 + (i % 2) * 430, 115 + Math.floor(i / 2) * 200, 410, 185, { title: h, body: 'rests on: ' + r + '\n\ne.g. ' + e, fill: f, edge: ed, tsize: 23, bsize: 16, valign: 'top' }); });
  const n = note(30, 520, 840, 'Types overlap (sanctions are economic AND hard): say which dominates in your case, and why.', { size: 17 });
  fig('06-four-types', 'Economic, political, social and cultural power', b + n.s, 520 + n.h + 30,
    'Four types of power with what each rests on and an example: economic (chip and mineral export controls), political (Security Council resolutions, EU rules), social (the International Campaign to Abolish Nuclear Weapons) and cultural (Hollywood, Bollywood, the Korean Wave).',
    'Classify by what the power rests on, noting where types overlap.',
    '## Economic, political, social and cultural power');
}

// 07 Power over, to, with
{
  let b = '';
  const panelT = (x, h, d, ex) => panel(x, 110, 270, 470) + tx(x + 135, 148, h, { size: 23, weight: 700, anchor: 'middle' }) + lines(x + 135, 410, wrap(d, 240, 16), { size: 16, anchor: 'middle', weight: 600 }, 21) + lines(x + 135, 490, wrap(ex, 240, 15), { size: 15, anchor: 'middle', fill: C.muted }, 19);
  b += panelT(30, 'Power over', 'control of others: getting them to do what they would not choose', 'sanctions; military threats (Dahl, Lukes)');
  b += `<circle cx="165" cy="215" r="30" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + tx(165, 222, 'A', { size: 20, weight: 700, anchor: 'middle' }) + arrow(165, 249, 165, 305, { w: 5, color: C.rust, marker: 'ahR' }) + `<circle cx="165" cy="340" r="26" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + tx(165, 347, 'B', { size: 20, weight: 700, anchor: 'middle' });
  b += panelT(315, 'Power to', 'capacity to act or achieve something', 'a state vaccinating its population; citizens voting (Pitkin)');
  b += `<circle cx="400" cy="280" r="30" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + tx(400, 287, 'A', { size: 20, weight: 700, anchor: 'middle' }) + arrow(434, 280, 492, 280, { w: 5, color: C.olive, marker: 'ahO' }) + `<rect x="496" y="250" width="40" height="60" rx="6" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + tx(516, 287, '✓', { size: 22, weight: 700, anchor: 'middle', fill: C.olive });
  b += panelT(600, 'Power with', 'collective power built through cooperation', 'AOSIS (1990) pushed the 1.5°C goal in the Paris Agreement (Follett, Arendt)');
  [[700, 240], [770, 240], [700, 310], [770, 310]].forEach(([x, y]) => { b += `<circle cx="${x}" cy="${y}" r="24" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>`; });
  b += `<circle cx="735" cy="275" r="92" fill="none" stroke="${C.tealDark}" stroke-width="3" stroke-dasharray="8 6"/>`;
  fig('07-over-to-with', 'Power over, power to, power with', b, 610,
    'Power over: A pushes B to do what B would not choose, as with sanctions or threats. Power to: A has the capacity to achieve something, such as vaccinating a population. Power with: several actors act together, as when the Alliance of Small Island States pushed for the 1.5 degree goal.',
    'Control of others, capacity to act, or strength built together.',
    '## Power to, power over, power with');
}
