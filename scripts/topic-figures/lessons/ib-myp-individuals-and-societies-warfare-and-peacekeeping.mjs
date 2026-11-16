import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-individuals-and-societies-warfare-and-peacekeeping';

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

// 01 WWI causes by timescale
{
  let b = '';
  const col = (x, w, h, title, sub, body, fill, edge) => box(x, 150, w, 330, { title, body: sub + '\n\n' + body, fill, edge, valign: 'top', tsize: 21, bsize: 15.5 });
  b += label(450, 136, 'Organising the causes of the First World War', { anchor: 'middle' });
  b += col(30, 300, 0, 'Long-term', 'builds up over years', '• Triple Alliance (1882) and Triple Entente (complete by 1907)\n• rivalry for colonies\n• arms build-up\n• Balkan nationalism', C.tealLight, C.tealDark);
  b += col(350, 250, 0, 'Short-term', 'months before war', '• July 1914 ultimatum to Serbia\n• Austria-Hungary declares war, 28 July 1914\n• Russian and German mobilisation', C.cream, C.olive);
  b += col(620, 250, 0, 'Trigger', 'starts the fighting', '• Franz Ferdinand assassinated in Sarajevo, 28 June 1914\n\nnot the same as the most important cause', '#fbeee6', C.rust);
  b += arrow(332, 315, 348, 315, { w: 3 }) + arrow(602, 315, 618, 315, { w: 3 });
  b += box(30, 500, 840, 130, { title: 'Link them: how a local crisis became a European war', body: 'Germany backed Austria-Hungary, Russia backed Serbia, and Britain entered on 4 August 1914 after Germany invaded Belgium. The alliances connect the causes.', fill: C.mustard, edge: C.ink, align: 'middle', bsize: 16 });
  fig('01-wwi-causes-timescale', 'Long-term, short-term and trigger', b, 660,
    'Causes of the First World War in three columns. Long-term: the two alliance blocs, colonial rivalry, arms build-up and Balkan nationalism. Short-term: the July 1914 ultimatum, Austria-Hungary’s declaration of war on Serbia and mobilisation. Trigger: the assassination of Franz Ferdinand on 28 June 1914. The alliances link them into a general war.',
    'Sort causes by timescale, then explain how they connect: that shows causality.',
    '## Causes of conflict');
}

// 02 Security dilemma
{
  let b = cycle(450, 330, 170, [
    { title: 'State A arms', body: 'to feel safe', fill: C.tealLight, edge: C.tealDark },
    { title: 'State B feels', body: 'less safe', fill: '#fbeee6', edge: C.rust },
    { title: 'State B arms', body: 'to feel safe', fill: C.tealLight, edge: C.tealDark },
    { title: 'State A feels', body: 'less safe', fill: '#fbeee6', edge: C.rust },
  ], { bw: 200, bh: 84, start: -90 });
  b += tx(450, 324, 'both end up', { size: 18, weight: 700, anchor: 'middle', fill: C.rust }) + tx(450, 348, 'less secure', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  fig('02-security-dilemma', 'The security dilemma', b, 570,
    'A loop: state A arms to feel safe, so state B feels less safe and arms too, so state A feels less safe and arms again. Both end up less secure.',
    'Arming for safety can make everyone less safe.',
    '## Causes of conflict');
}

// 03 Versailles: consequence becomes cause
{
  const c = chainV(150, 120, 600, [
    { title: 'First World War ends', fill: C.panel },
    { title: 'Treaty of Versailles, 28 June 1919', body: 'German army limited to 100,000 men; Article 231 blamed Germany for the war', fill: C.cream, edge: C.olive },
    { title: 'Resentment of the treaty', body: 'helped the Nazis win support', fill: '#fbeee6', edge: C.rust },
    { title: 'Germany invades Poland, 1 September 1939', body: 'the Second World War in Europe begins', fill: C.mustard, edge: C.ink },
  ], { gap: 44, tsize: 20, bsize: 16 });
  let b = c.s;
  b += tx(790, 270, 'consequence', { size: 17, weight: 700, fill: C.olive }) + tx(790, 292, 'of one war…', { size: 16, fill: C.olive });
  b += tx(790, 560, '…cause of', { size: 17, weight: 700, fill: C.rust }) + tx(790, 582, 'the next', { size: 16, fill: C.rust });
  fig('03-versailles-chain', 'When a consequence becomes a cause', b, 120 + c.h + 40,
    'A chain: the First World War ends; the Treaty of Versailles of 28 June 1919 limits the German army to 100,000 men and blames Germany in Article 231; resentment helps the Nazis win support; Germany invades Poland on 1 September 1939 and the Second World War in Europe begins.',
    'Versailles was a consequence of one war and a cause of the next.',
    '## Consequences of war');
}

// 04 Displacement data
{
  let b = panel(30, 110, 840, 360) + tx(450, 148, 'Norland (fictional): population 6.0 million before a civil war', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  // 6.0 million as 60 squares of 0.1 m
  const sq = 22, gap = 4, x0 = 95;
  for (let i = 0; i < 60; i++) {
    const r = Math.floor(i / 20), cI = i % 20;
    const f = i < 15 ? C.rust : i < 24 ? (i < 21 ? C.mustard : C.olive) : C.tealLight;
    b += `<rect x="${x0 + cI * (sq + gap) + Math.floor(cI / 10) * 14}" y="${180 + r * (sq + gap)}" width="${sq}" height="${sq}" rx="3" fill="${f}" stroke="${C.ink}" stroke-width="1"/>`;
  }
  b += tx(x0 + 540 + 20, 200, 'each square =', { size: 15, fill: C.muted }) + tx(x0 + 540 + 20, 220, '0.1 million', { size: 15, fill: C.muted });
  const leg = [[C.rust, '1.5m internally displaced'], [C.mustard, '0.6m refugees who returned'], [C.olive, '0.3m refugees still abroad'], [C.tealLight, 'not displaced']];
  leg.forEach(([f, s], i) => { const x = 95 + (i % 2) * 380, y = 285 + Math.floor(i / 2) * 32; b += `<rect x="${x}" y="${y - 15}" width="20" height="20" rx="3" fill="${f}" stroke="${C.ink}" stroke-width="1"/>` + tx(x + 30, y, s, { size: 16 }); });
  b += tx(450, 380, 'Total displaced: 1.5 + 0.9 = 2.4m = 40% (two in every five people)', { size: 17, weight: 700, anchor: 'middle' });
  b += tx(450, 412, 'Refugees returned within two years: 0.6 ÷ 0.9 × 100 = 66.7%', { size: 17, weight: 700, anchor: 'middle' });
  b += tx(450, 444, 'Limitation: return figures depend on who counts people crossing the border', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  fig('04-displacement-data', 'Interpreting displacement data', b, 500,
    'Sixty squares stand for fictional Norland’s 6.0 million people. Fifteen are internally displaced (1.5 million) and nine were refugees (0.9 million), of whom six returned and three remain abroad. In total 40% were displaced, and 66.7% of refugees returned within two years.',
    'Two in five lost their homes; two-thirds of refugees came back within two years.',
    '## Consequences of war');
}

// 05 UN Charter: VI, peacekeeping, VII
{
  let b = '';
  b += box(30, 120, 840, 100, { title: 'Security Council: 15 members', body: '5 permanent members with a veto (China, France, Russia, UK, US) + 10 elected for two years', fill: C.mustard, edge: C.ink, align: 'middle' });
  b += arrow(450, 224, 450, 258);
  b += box(30, 262, 260, 210, { title: 'Chapter VI', body: 'peaceful settlement of disputes: negotiation, mediation, arbitration', fill: '#eaf3f1', edge: C.tealDark, align: 'middle', tsize: 22, valign: 'top' });
  b += box(320, 262, 260, 210, { title: 'Peacekeeping', body: 'not in the Charter; grew up between Chapters VI and VII; needs consent', fill: C.cream, edge: C.olive, align: 'middle', tsize: 22, valign: 'top' });
  b += box(610, 262, 260, 210, { title: 'Chapter VII', body: 'action against threats to peace: sanctions (Art. 41), military force (Art. 42)', fill: '#fbeee6', edge: C.rust, align: 'middle', tsize: 22, valign: 'top' });
  b += arrow(60, 500, 840, 500, { w: 4 }) + tx(60, 528, 'persuade', { size: 16, fill: C.tealDark, weight: 700 }) + tx(840, 528, 'enforce', { size: 16, fill: C.rust, weight: 700, anchor: 'end' });
  b += box(610, 548, 260, 110, { title: 'Peace enforcement', body: 'Korea, June 1950; Kuwait, November 1990', fill: C.panel, edge: C.rust, align: 'middle', tsize: 18, bsize: 15 });
  b += box(30, 548, 560, 110, { title: 'The veto', body: 'the UN cannot act against a permanent member or its close allies; often blocked action in the Cold War', fill: C.panel, edge: C.panelEdge, tsize: 18, bsize: 15 });
  fig('05-un-charter-chapters', 'How the UN can respond to conflict', b, 690,
    'The Security Council, with five veto-holding permanent members and ten elected members, can act under Chapter VI, peaceful settlement, or Chapter VII, sanctions and military force. Peacekeeping sits between them and needs consent. Korea in 1950 and Kuwait in 1990 were peace enforcement under Chapter VII.',
    'From persuasion to enforcement: peacekeeping sits in between, and the veto can block it all.',
    '## From the League of Nations to the United Nations');
}

// 06 Three principles and their limits
{
  const r = rowList(30, 110, 840, [
    ['1', 'Consent', 'of the main parties to the conflict'],
    ['2', 'Impartiality', 'the mission does not take sides'],
    ['3', 'Non-use of force', 'except in self-defence and defence of the mandate'],
  ], { tsize: 22, minH: 84, gap: 12 });
  let y = 110 + r.h + 24;
  let b = r.s + label(30, y, 'Where the principles reached their limits'); y += 16;
  b += box(30, y, 410, 150, { title: 'Rwanda, 1994', body: 'small mission (UNAMIR) present as genocide began in April; Council cut its size that month', fill: '#fbeee6', edge: C.rust, valign: 'top' });
  b += box(460, y, 410, 150, { title: 'Srebrenica, July 1995', body: 'over 8,000 Bosniak men and boys killed in a UN “safe area” with lightly armed peacekeepers present', fill: '#fbeee6', edge: C.rust, valign: 'top' });
  const n = note(30, y + 170, 840, 'Impartiality and minimal force fail when one side sets out to kill civilians. Many later missions are multidimensional.', { size: 16, weight: 600 });
  fig('06-peacekeeping-principles', 'The three principles of UN peacekeeping', b + n.s, y + 170 + n.h + 30,
    'Three principles: consent of the main parties, impartiality, and no use of force except in self-defence and defence of the mandate. Rwanda in 1994 and Srebrenica in 1995 show their limits when one side targets civilians.',
    'Consent, impartiality and minimal force keep a ceasefire, but cannot stop a side bent on killing.',
    '## Peacekeeping');
}

// 07 Agenda for Peace and positive peace
{
  const c = chainH(30, 150, 840, [
    { title: 'Preventive diplomacy', body: 'stop disputes turning into war', fill: '#eaf3f1', edge: C.tealDark },
    { title: 'Peacemaking', body: 'bring the sides to agreement', fill: '#eaf3f1', edge: C.tealDark },
    { title: 'Peacekeeping', body: 'keep the agreed ceasefire', fill: C.cream, edge: C.olive },
    { title: 'Post-conflict peacebuilding', body: 'strengthen institutions so war does not return', fill: C.mustard, edge: C.ink },
  ], { h: 150, gap: 30, tsize: 18, bsize: 15 });
  let b = label(450, 136, 'An Agenda for Peace (Boutros Boutros-Ghali, 1992)', { anchor: 'middle' }) + c.s;
  b += box(30, 330, 410, 120, { title: 'Negative peace', body: 'no fighting: what peacekeeping mainly secures', fill: C.panel, edge: C.panelEdge, align: 'middle', tsize: 21 });
  b += box(460, 330, 410, 120, { title: 'Positive peace', body: 'causes such as injustice and poverty addressed: the aim of peacebuilding', fill: C.panel, edge: C.tealDark, align: 'middle', tsize: 21 });
  b += arrow(444, 390, 456, 390, { w: 3 }) + tx(450, 480, 'Johan Galtung’s distinction', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  b += box(30, 500, 840, 110, { title: 'Peacebuilding tools', body: 'DDR (disarmament, demobilisation, reintegration); rebuilt courts and police; elections; transitional justice, e.g. Rwanda’s gacaca courts (closed 2012)', fill: '#eaf3f1', edge: C.tealDark, bsize: 16 });
  fig('07-agenda-for-peace', 'From stopping war to building peace', b, 640,
    'Four stages from An Agenda for Peace (1992): preventive diplomacy, peacemaking, peacekeeping and post-conflict peacebuilding. Peacekeeping mainly secures negative peace, the absence of fighting; peacebuilding aims at positive peace, where causes are addressed, using tools such as DDR, rebuilt courts and police, elections and transitional justice.',
    'Stopping the fighting is negative peace; addressing its causes is positive peace.',
    '## Peacebuilding');
}
