import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-individuals-and-societies-rights-and-social-protest';

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

// 01 De jure vs de facto
{
  let b = '';
  b += box(30, 120, 380, 170, { title: 'De jure', body: 'exists in law\n\n1870: US law gave Black men the vote', fill: C.tealLight, edge: C.tealDark, align: 'middle', tsize: 24, bsize: 17 });
  b += box(490, 120, 380, 170, { title: 'De facto', body: 'exists in practice\n\nfor decades many could not use it in the South', fill: '#fbeee6', edge: C.rust, align: 'middle', tsize: 24, bsize: 17 });
  b += `<path d="M418,205 L482,205" stroke="${C.rust}" stroke-width="4" stroke-dasharray="7 6"/>`;
  b += tx(450, 190, 'gap', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  b += box(150, 320, 600, 80, { title: 'Many protests target this gap', fill: C.mustard, edge: C.ink, align: 'middle', tsize: 21 });
  b += label(30, 440, 'Two families of rights');
  b += box(30, 455, 410, 110, { title: 'Civil and political', body: 'liberty, free speech, fair trial, voting', fill: C.panel, align: 'middle' });
  b += box(460, 455, 410, 110, { title: 'Economic, social and cultural', body: 'work, education, health', fill: C.panel, align: 'middle' });
  fig('01-de-jure-de-facto', 'Rights in law and rights in practice', b, 595,
    'A de jure right exists in law, as when US law gave Black men the vote in 1870; a de facto right exists in practice, and for decades many could not use that vote in the South. Protests often target the gap between the two. Below, rights split into civil and political, and economic, social and cultural.',
    'A right on paper is not always a right in practice; protests often target the gap.',
    '## What rights are');
}

// 02 International Bill of Human Rights
{
  let b = '';
  b += box(250, 120, 400, 150, { title: 'UDHR, 10 December 1948', body: 'General Assembly declaration, 30 articles\nnot legally binding: moral force', fill: C.cream, edge: C.olive, align: 'middle', tsize: 21, bsize: 17 });
  b += arrow(380, 274, 250, 330) + arrow(520, 274, 650, 330);
  b += tx(450, 312, '1966', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += box(30, 336, 410, 150, { title: 'International Covenant on Civil and Political Rights', body: 'binding treaty', fill: '#eaf3f1', edge: C.tealDark, align: 'middle', tsize: 19, bsize: 17 });
  b += box(460, 336, 410, 150, { title: 'International Covenant on Economic, Social and Cultural Rights', body: 'binding treaty', fill: '#eaf3f1', edge: C.tealDark, align: 'middle', tsize: 19, bsize: 17 });
  b += tx(450, 520, 'Both in force from 1976 for the states that ratified them', { size: 17, anchor: 'middle', weight: 600 });
  b += `<rect x="20" y="105" width="860" height="490" rx="18" fill="none" stroke="${C.ink}" stroke-width="2.5" stroke-dasharray="10 7"/>`;
  b += tx(450, 572, 'Together: the International Bill of Human Rights', { size: 20, weight: 700, anchor: 'middle' });
  const v = note(30, 615, 840, 'Vote of 1948: 48 for, none against, 8 abstentions (including the USSR, South Africa and Saudi Arabia).', { size: 16, weight: 600, fill: C.panel, edge: C.panelEdge });
  fig('02-international-bill', 'The International Bill of Human Rights', b + v.s, 615 + v.h + 30,
    'The non-binding UDHR of 10 December 1948 leads to two binding 1966 treaties, the International Covenant on Civil and Political Rights and the International Covenant on Economic, Social and Cultural Rights, in force from 1976 for ratifying states. Together they form the International Bill of Human Rights.',
    'The UDHR is a declaration; the 1966 covenants are the binding treaties.',
    '## The Universal Declaration of Human Rights (1948)');
}

// 03 Apartheid laws vs UDHR articles
{
  const laws = [['Population Registration Act (1950)', 'classified every person by race'], ['Group Areas Act (1950)', 'decided where each group could live'], ['Pass laws', 'controlled where Black South Africans could travel and work'], ['Black majority denied the vote', '']];
  const arts = [['Article 2', 'non-discrimination'], ['Article 13', 'freedom of movement'], ['Article 21', 'take part in government; elections']];
  let b = label(225, 140, 'Apartheid law', { anchor: 'middle', fill: C.rust }) + label(700, 140, 'UDHR article breached', { anchor: 'middle' });
  const ly = [158, 268, 378, 488];
  laws.forEach(([h, d], i) => { b += box(30, ly[i], 390, 92, { title: h, body: d, tsize: 18, bsize: 15, fill: '#fbeee6', edge: C.rust, pad: 14 }); });
  const ay = [175, 320, 470];
  arts.forEach(([h, d], i) => { b += box(560, ay[i], 310, 76, { title: h, body: d, tsize: 19, bsize: 15, fill: '#eaf3f1', edge: C.tealDark, align: 'middle', pad: 12 }); });
  const link = (li, ai) => arrow(424, ly[li] + 46, 554, ay[ai] + 38, { w: 3 });
  b += link(0, 0) + link(1, 1) + link(2, 1) + link(3, 2);
  const n = note(30, 610, 840, 'South Africa abstained in 1948 and the UDHR is not binding, so critics used it as a moral standard, not as law.', { size: 17, weight: 600 });
  fig('03-apartheid-udhr', 'Applying the UDHR to apartheid', b + n.s, 610 + n.h + 30,
    'Four apartheid measures linked to the UDHR articles they breached: racial classification under the Population Registration Act breached Article 2; the Group Areas Act and pass laws breached Article 13 on freedom of movement; denying the Black majority the vote breached Article 21.',
    'Name the law, say what it did, then match it to an article.',
    '## The Universal Declaration of Human Rights (1948)');
}

// 04 Three movements side by side
{
  const mv = [
    ['US civil rights', C.tealDark, [['1954', 'Brown v. Board of Education'], ['1955–56', 'Montgomery Bus Boycott, 381 days'], ['1960', 'Greensboro sit-in'], ['1963', 'Birmingham; March on Washington'], ['1964', 'Civil Rights Act'], ['1965', 'Selma; Voting Rights Act']]],
    ['Anti-apartheid', C.rust, [['1952', 'Defiance Campaign'], ['1955', 'Freedom Charter'], ['1960', 'Sharpeville; ANC banned'], ['1961', 'Umkhonto we Sizwe'], ['1976', 'Soweto uprising'], ['1990', 'ANC unbanned; Mandela freed'], ['1994', 'first election open to all races']]],
    ['Women’s suffrage (UK)', C.olive, [['1897', 'NUWSS (suffragists)'], ['1903', 'WSPU (suffragettes)'], ['1909', 'hunger strikes begin'], ['1913', 'Cat and Mouse Act'], ['1914', 'WSPU suspends campaign'], ['1918', 'vote for women over 30 with property'], ['1928', 'Equal Franchise Act: vote at 21']]],
  ];
  let b = '';
  mv.forEach(([h, c, ev], k) => {
    const x = 30 + k * 285, w = 270;
    b += panel(x, 110, w, 640) + `<rect x="${x}" y="110" width="${w}" height="56" rx="14" fill="${c}"/>` + `<rect x="${x}" y="150" width="${w}" height="16" fill="${c}"/>`;
    b += tx(x + w / 2, 146, h, { size: 19, weight: 700, anchor: 'middle', fill: '#fff' });
    b += line(x + 26, 190, x + 26, 190 + (ev.length - 1) * 82, { color: c, w: 3 });
    ev.forEach(([d, e], i) => {
      const y = 190 + i * 82;
      b += `<circle cx="${x + 26}" cy="${y}" r="8" fill="${c}"/>`;
      b += tx(x + 44, y + 6, d, { size: 17, weight: 700, fill: c });
      b += lines(x + 44, y + 28, wrap(e, w - 60, 15), { size: 15 }, 19);
    });
  });
  fig('04-three-movements', 'Three protest movements, key dates', b, 780,
    'Three timelines side by side. US civil rights: Brown v. Board 1954, the Montgomery Bus Boycott 1955 to 1956, Greensboro 1960, Birmingham and the March on Washington 1963, the Civil Rights Act 1964 and the Voting Rights Act 1965. Anti-apartheid: the Defiance Campaign 1952 to the first all-race election in 1994. British women’s suffrage: NUWSS 1897 to equal franchise in 1928.',
    'Accurate, dated evidence from each movement is what examiners reward.',
    '## Three protest movements');
}

// 05 Methods of protest
{
  const rows = [
    ['Persuasion', 'petitions, speeches, marches', 'March on Washington, 1963', 's'],
    ['Legal and political', 'court cases, lobbying, voter registration', 'Brown v. Board, 1954', ''],
    ['Non-cooperation', 'boycotts, strikes, refusing unjust laws', 'Montgomery Bus Boycott', 's'],
    ['Non-violent intervention', 'sit-ins, occupations, freedom rides', 'Greensboro, 1960', 's'],
    ['Militant action against property', 'window-smashing, arson', 'WSPU, 1912–14', ''],
    ['Armed struggle', 'sabotage, guerrilla war', 'Umkhonto we Sizwe, from 1961', ''],
    ['International pressure', 'sanctions, embargoes, sports boycotts', 'UN arms embargo, 1977', ''],
  ];
  let b = '';
  const rh = 74;
  rows.forEach(([c, m, e, sh], i) => {
    const y = 120 + i * (rh + 8), last = i === 6;
    const fill = last ? C.tealLight : i < 4 ? '#ffffff' : i === 4 ? '#f6e3d6' : '#efcdb8';
    b += rect(110, y, 760, rh, fill, last ? C.tealDark : C.panelEdge, 12, 2.2);
    b += tx(130, y + 32, c, { size: 19, weight: 700 }) + tx(130, y + 58, m, { size: 15, fill: C.muted });
    b += tx(850, y + 44, e, { size: 15, anchor: 'end', fill: C.ink, italic: true });
    if (sh) b += `<circle cx="490" cy="${y + 37}" r="9" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`;
  });
  b += `<line x1="70" y1="125" x2="70" y2="${120 + 6 * (rh + 8) - 14}" stroke="${C.rust}" stroke-width="5" marker-end="url(#ahR)"/>`;
  b += `<text x="52" y="370" font-size="16" font-weight="700" fill="${C.rust}" text-anchor="middle" transform="rotate(-90 52 370)">more confrontational</text>`;
  b += `<circle cx="210" cy="${120 + 7 * (rh + 8) + 22}" r="9" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` + tx(226, 120 + 7 * (rh + 8) + 28, 'Gene Sharp’s 1973 headings of non-violent action (198 methods)', { size: 16 });
  fig('05-methods-of-protest', 'Methods of protest', b, 120 + 7 * (rh + 8) + 60,
    'Seven categories of protest from persuasion through legal action, non-cooperation and non-violent intervention to militant action against property and armed struggle, plus international pressure, each with an example such as the March on Washington, the Montgomery Bus Boycott or Umkhonto we Sizwe. Three are marked as Gene Sharp’s headings of non-violent action.',
    'Classify a method before explaining why a movement chose it.',
    '## Methods of protest');
}

// 06 Judging effectiveness: Montgomery
{
  const r = rowList(30, 110, 840, [
    ['1', 'Aims achieved? (de jure)', 'Aim: end segregated seating on Montgomery buses. Achieved: ruled unconstitutional, 1956.'],
    ['2', 'Real change? (de facto)', 'Limits: Southern schools and voting stayed segregated or restricted for years.'],
    ['3', 'When?', 'Short-term local win; longer term, it made King a national figure.'],
    ['4', 'Why?', 'Economic pressure on the bus company, unity for 381 days, a court case alongside.'],
  ], { tsize: 21, bsize: 16, minH: 92 });
  const n = note(30, 110 + r.h + 20, 840, 'Judgement: highly effective for its local aim. Always state the aims first.', { size: 18 });
  fig('06-judging-effectiveness', 'Was the Montgomery Bus Boycott effective?', r.s + n.s, 110 + r.h + 20 + n.h + 30,
    'Four questions applied to the Montgomery Bus Boycott: its aim, ending segregated bus seating, was achieved in law in 1956; in practice schools and voting stayed segregated for years; it was a short-term local win that made King a national figure; it worked through economic pressure, unity for 381 days and a parallel court case.',
    'Measure success against the movement’s own aims, in law and in practice, short and long term.',
    '## Judging effectiveness');
}

// 07 Norland registration data
{
  const bar = (y, lab, pct, n, fill) => rect(250, y, 560 * pct / 100, 60, fill, C.ink, 6, 2.2) + `<rect x="250" y="${y}" width="560" height="60" rx="6" fill="none" stroke="${C.panelEdge}" stroke-width="2" stroke-dasharray="6 5"/>` +
    tx(230, y + 28, lab, { size: 19, weight: 700, anchor: 'end' }) + tx(230, y + 50, n, { size: 15, anchor: 'end', fill: C.muted }) + tx(260 + 560 * pct / 100, y + 38, `${pct}%`, { size: 20, weight: 700 });
  let b = panel(30, 110, 840, 360) + tx(450, 148, 'Norland (fictional): 480,000 eligible minority adults', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += bar(175, 'Before', 25, '120,000 registered', C.teal) + bar(265, 'Five years later', 65, '312,000 registered', C.mustard);
  b += tx(250, 365, '0%', { size: 15, fill: C.muted, anchor: 'middle' }) + tx(810, 365, '100%', { size: 15, fill: C.muted, anchor: 'middle' });
  b += tx(450, 410, 'registration rate: 25% → 65%', { size: 18, weight: 700, anchor: 'middle' });
  b += tx(450, 440, 'registrations: (312,000 − 120,000) ÷ 120,000 × 100 = 160% increase', { size: 16, anchor: 'middle', fill: C.muted });
  const ws = weakStrong(30, 490, 840, '“A 40% rise”', '“A rise of 40 percentage points” (and registering is not voting)', { wTitle: 'Wrong', sTitle: 'Right' });
  fig('07-registration-data', 'Percentage points, not percent', b + ws.s, 490 + ws.h + 30,
    'Bars for fictional Norland: the registered share of 480,000 eligible minority adults rose from 25% (120,000) to 65% (312,000) five years after a voting rights law. That is a rise of 40 percentage points, while the number registered rose by 160%.',
    'A rate rising from 25% to 65% is 40 percentage points; registering is not the same as voting.',
    '## Judging effectiveness');
}
