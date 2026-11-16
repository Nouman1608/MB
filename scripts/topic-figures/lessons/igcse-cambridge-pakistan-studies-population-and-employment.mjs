import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-cambridge-pakistan-studies-population-and-employment';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- local helpers (kept in this file so style.mjs stays shared and untouched) ----
const X = (s) => String(s).replace(/&(?!amp;|lt;|gt;|#\d+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const GW = { ' ': .28, a: .55, b: .6, c: .55, d: .6, e: .57, f: .35, g: .6, h: .59, i: .25, j: .25, k: .53, l: .25, m: .88, n: .59, o: .59, p: .6, q: .6, r: .38, s: .5, t: .36, u: .59, v: .53, w: .79, x: .52, y: .53, z: .52, I: .28, M: .85, W: .95, '.': .27, ',': .27, ';': .27, ':': .27, '(': .35, ')': .35, "'": .25, '’': .25, '‘': .25, '"': .4, '–': .6, '—': 1, '-': .4, '/': .38, '•': .4, '%': .8, '&': .7 };
const tw = (s, size, weight = 400) => [...String(s)].reduce((a, ch) => a + (GW[ch] ?? (/[A-Z]/.test(ch) ? .68 : /[0-9]/.test(ch) ? .6 : .6)), 0) * size * (weight >= 600 ? 1.06 : 1);
const wrap = (s, width, size, weight) => {
  const out = [];
  for (const p of String(s).split('\n')) {
    let line = '';
    for (const w of p.split(' ')) { const c = line ? line + ' ' + w : w; if (line && tw(c, size, weight) > width) { out.push(line); line = w; } else line = c; }
    out.push(line);
  }
  return out;
};
const T = (x, y, s, o = {}) => t(x, y, X(s), o);
// wrapped paragraph, y = first baseline; returns {s, h}
const para = (x, y, s, width, o = {}) => {
  const size = o.size || 17, lh = o.lh || Math.round(size * 1.32);
  const L = wrap(s, width, size, o.weight || 400);
  return { s: L.map((l, i) => T(x, y + i * lh, l, o)).join(''), h: L.length * lh, n: L.length };
};
const R = (x, y, w, h, fill = C.panel, edge = C.panelEdge, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 12}" fill="${fill}" stroke="${edge}" stroke-width="${o.sw ?? 2.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
// card: title + body (string or array; bullets) -> {s, h}. Fixed height via o.h.
const card = (x, y, w, o = {}) => {
  const { title, body, fill = C.panel, edge = C.panelEdge, ts = 20, bs = 17, tfill = C.ink, bfill = C.muted, pad = 18, align = 'start', bullets = false, sub } = o;
  let inner = '', cy = y + pad - 2;
  const tx = align === 'middle' ? x + w / 2 : x + pad, iw = w - 2 * pad;
  if (title) { const p = para(tx, cy + ts * 0.85, title, iw, { size: ts, weight: 700, fill: tfill, anchor: align }); inner += p.s; cy += p.h + 2; }
  if (sub) { const p = para(tx, cy + 15 * 0.85, sub, iw, { size: 15, fill: o.subfill || C.muted, anchor: align, weight: 600 }); inner += p.s; cy += p.h + 2; }
  if (body) {
    if (title || sub) cy += 4;
    const items = Array.isArray(body) ? body : [body];
    for (const it of items) {
      if (bullets) { const p = para(tx + 16, cy + bs * 0.85, it, iw - 16, { size: bs, fill: bfill }); inner += T(tx, cy + bs * 0.85, '•', { size: bs, fill: bfill, weight: 700 }) + p.s; cy += p.h + 3; }
      else { const p = para(tx, cy + bs * 0.85, it, iw, { size: bs, fill: bfill, anchor: align }); inner += p.s; cy += p.h + 3; }
    }
  }
  const h = o.h || Math.round(cy - y + pad - 6);
  return { s: R(x, y, w, h, fill, edge, o) + inner, h };
};
const cardH = (w, o) => card(0, 0, w, o).h;
// vertical timeline: items [{d, title, body, hi}] -> {s, h}
const timeline = (x, y, w, items, o = {}) => {
  const dw = o.dw || 130, gap = o.gap || 14, cx = x + dw / 2;
  let s = '', cy = y; const mids = [];
  for (const it of items) {
    const c = card(x + dw + 22, cy, w - dw - 22, { title: it.title, body: it.body, ts: o.ts || 19, bs: o.bs || 16, fill: it.hi ? C.cream : C.panel, edge: it.hi ? C.olive : C.panelEdge, bullets: it.bullets });
    const ph = 40, py = cy + Math.min(c.h / 2, 34) - ph / 2;
    s += c.s; mids.push([py, ph, it]);
    cy += c.h + gap;
  }
  const line = `<line x1="${cx}" y1="${y + 10}" x2="${cx}" y2="${cy - gap - 10}" stroke="${C.ink}" stroke-width="4"/>`;
  const pills = mids.map(([py, ph, it]) => R(x, py, dw, ph, it.hi ? C.mustard : C.cream, C.ink, { rx: 20, sw: 2.5 }) + T(cx, py + 27, it.d, { size: tw(it.d, 19, 700) > dw - 14 ? 16 : 19, weight: 700, anchor: 'middle' }) +
    `<line x1="${x + dw}" y1="${py + ph / 2}" x2="${x + dw + 22}" y2="${py + ph / 2}" stroke="${C.ink}" stroke-width="2.5"/>`).join('');
  return { s: line + s + pills, h: cy - gap - y };
};
// grid table: cols [{label, w}], rows [[cells]] -> {s, h}
const grid = (x, y, cols, rows, o = {}) => {
  const size = o.size || 16, hs = o.hs || 17, pad = 12, lh = Math.round(size * 1.32);
  const W = cols.reduce((a, c) => a + c.w, 0);
  const hh = Math.max(...cols.map((c) => wrap(c.label, c.w - 2 * pad, hs, 700).length)) * Math.round(hs * 1.3) + 22;
  let s = '', cy = y + hh, body = '';
  const head = cols.map((c, i) => { const xx = x + cols.slice(0, i).reduce((a, k) => a + k.w, 0); return para(xx + pad, y + 15 + hs * 0.85, c.label, c.w - 2 * pad, { size: hs, weight: 700 }).s; }).join('');
  rows.forEach((r, ri) => {
    const cells = r.map((cell, i) => wrap(cell, cols[i].w - 2 * pad, size, i === 0 && o.firstBold !== false ? 700 : 400));
    const rh = Math.max(...cells.map((L) => L.length)) * lh + 20;
    const hi = o.hiRows && o.hiRows.includes(ri);
    body += `<rect x="${x}" y="${cy}" width="${W}" height="${rh}" fill="${hi ? C.cream : ri % 2 ? C.tealLight : C.panel}"/>`;
    cells.forEach((L, i) => { const xx = x + cols.slice(0, i).reduce((a, k) => a + k.w, 0); body += L.map((l, k) => T(xx + pad, cy + 12 + size * 0.85 + k * lh, l, { size, weight: i === 0 && o.firstBold !== false ? 700 : 400, fill: i === 0 ? C.ink : C.ink })).join(''); });
    body += `<line x1="${x}" y1="${cy}" x2="${x + W}" y2="${cy}" stroke="${C.panelEdge}" stroke-width="1.5"/>`;
    cy += rh;
  });
  let vx = x; const vl = cols.slice(0, -1).map((c) => { vx += c.w; return `<line x1="${vx}" y1="${y}" x2="${vx}" y2="${cy}" stroke="${C.panelEdge}" stroke-width="1.5"/>`; }).join('');
  s = `<rect x="${x}" y="${y}" width="${W}" height="${cy - y}" rx="12" fill="${C.panel}"/>` + `<path d="M${x},${y + hh} L${x},${y + 12} Q${x},${y} ${x + 12},${y} L${x + W - 12},${y} Q${x + W},${y} ${x + W},${y + 12} L${x + W},${y + hh} Z" fill="${C.teal}"/>` +
    body + vl + head + `<rect x="${x}" y="${y}" width="${W}" height="${cy - y}" rx="12" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`;
  return { s, h: cy - y };
};
// elbow connector with arrow head: points [[x,y],...]
const elbow = (pts, o = {}) => path('M' + pts.map((p) => p.join(',')).join(' L'), { stroke: o.color || C.ink, w: o.w || 3.5, extra: `marker-end="url(#${o.marker || 'ah'})"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}` });
const note = (x, y, w, s, o = {}) => card(x, y, w, { body: s, fill: C.cream, edge: C.olive, bfill: C.ink, bs: o.bs || 17, title: o.title, ts: o.ts || 19, ...o });
// ---- end helpers ----

// 01 Population pyramid (schematic)
{
  const cx = 330, base = 560, bh = 30, n = 13;
  const now = [200, 192, 184, 172, 158, 142, 124, 106, 88, 70, 52, 36, 22];
  const old = [222, 205, 186, 166, 146, 126, 108, 90, 74, 58, 44, 30, 18];
  let b = panel(30, 112, 840, 540);
  now.forEach((w, i) => {
    const y = base - (i + 1) * bh;
    const f = i < 3 ? C.mustard : i >= 11 ? C.rust : C.teal;
    b += `<rect x="${cx - 6 - w}" y="${y + 2}" width="${w}" height="${bh - 4}" fill="${f}" stroke="${C.ink}" stroke-width="1.5"/>` + `<rect x="${cx + 6}" y="${y + 2}" width="${w}" height="${bh - 4}" fill="${f}" stroke="${C.ink}" stroke-width="1.5"/>`;
  });
  let pl = '', pr = '';
  old.forEach((w, i) => { const y = base - (i + 1) * bh; pl += `${i ? 'L' : 'M'}${cx - 6 - w},${y + bh} L${cx - 6 - w},${y} `; pr += `${i ? 'L' : 'M'}${cx + 6 + w},${y + bh} L${cx + 6 + w},${y} `; });
  b += path(pl, { stroke: C.ink, w: 2.5, extra: 'stroke-dasharray="7 6"' }) + path(pr, { stroke: C.ink, w: 2.5, extra: 'stroke-dasharray="7 6"' });
  b += T(cx - 110, base + 30, 'Males', { size: 17, weight: 700, anchor: 'middle' }) + T(cx + 110, base + 30, 'Females', { size: 17, weight: 700, anchor: 'middle' });
  b += arrow(60, base, 60, 175, { w: 2.5 }) + `<text transform="translate(52,${base - 190}) rotate(-90)" font-size="16" fill="${C.muted}" text-anchor="middle">age: older towards the top</text>`;
  // annotations
  const ax = 590;
  b += `<line x1="${ax - 20}" y1="${base - 3 * bh}" x2="${ax - 20}" y2="${base}" stroke="${C.olive}" stroke-width="4"/>` + tl(ax, base - 60, ['Wide base: a large', 'share under 15', '→ high birth rate'], { size: 17, weight: 700, fill: C.olive }, 22);
  b += `<line x1="${ax - 20}" y1="${base - 13 * bh}" x2="${ax - 20}" y2="${base - 11 * bh}" stroke="${C.rust}" stroke-width="4"/>` + tl(ax, base - 13 * bh + 22, ['Narrow top: a small', 'share over 65'], { size: 17, weight: 700, fill: C.rust }, 22);
  b += tl(ax, base - 7 * bh, ['Middle widens as large', 'younger groups grow up'], { size: 17, weight: 700, fill: C.tealDark }, 22);
  b += path(`M${ax - 50},${base - 210} L${ax - 50},${base - 5}`, { stroke: C.ink, w: 0 });
  b += `<line x1="70" y1="${base + 64}" x2="110" y2="${base + 64}" stroke="${C.ink}" stroke-width="2.5" stroke-dasharray="7 6"/>` + T(120, base + 70, 'earlier shape: the base has begun to narrow as birth rates fall', { size: 16, fill: C.muted });
  add('01-population-pyramid',
    svg(900, 682, 'The shape of Pakistan’s population', b, 'schematic shape, not real data'),
    'A schematic population pyramid with a wide base and narrow top: a large share of people under 15 and a small share over 65. A dashed outline of an earlier shape shows the base beginning to narrow as birth rates fall while the middle widens.',
    'A wide base means a high birth rate; a slightly narrowing base shows birth rates starting to fall.',
    '## What does Pakistan\'s population pyramid show?');
}

// 02 A young population: two possible futures
{
  let b = '';
  const top = card(30, 112, 840, { title: 'A young population', body: 'High dependency: heavy demand for schools, health care and food, and a fast-growing labour force that needs jobs.', fill: C.tealLight, edge: C.tealDark, bfill: C.ink });
  b += top.s;
  const y = 112 + top.h + 60;
  b += elbow([[450, 112 + top.h + 2], [450, y - 30], [235, y - 30], [235, y - 6]], { w: 4 }) + elbow([[450, y - 30], [665, y - 30], [665, y - 6]], { w: 4 });
  const o1 = { title: 'If jobs are created', body: 'A large working-age population can boost output.', fill: C.cream, edge: C.olive, bfill: C.ink };
  const o2 = { title: 'If jobs are not created', body: 'Unemployment rises.', fill: '#f6e3d6', edge: C.rust, bfill: C.ink };
  const h = Math.max(cardH(410, o1), cardH(410, o2));
  b += card(30, y, 410, { ...o1, h }).s + card(460, y, 410, { ...o2, h }).s;
  add('02-young-population-futures',
    svg(900, y + h + 30, 'A young population: two possible outcomes', b),
    'A young population brings high dependency and a fast-growing labour force. The chart splits: if jobs are created, the large working-age population can boost output; if not, unemployment rises.',
    'A young population is an opportunity only if enough jobs are created.',
    '## What does Pakistan\'s population pyramid show?');
}

// 03 Why growth is rapid: factors, problems, solutions
{
  let b = '';
  const eq = 'Natural increase = birth rate − death rate';
  b += R(170, 112, 560, 56, C.panel, C.ink, { rx: 28 }) + T(450, 148, eq, { size: 21, weight: 700, anchor: 'middle' });
  const fs = [
    ['Social', 'Early marriage; large families; sons as old-age support'],
    ['Educational', 'Low female literacy; limited family-planning awareness'],
    ['Economic', 'Children add family income'],
    ['Political', 'Uneven funding and reach of family planning'],
    ['Health', 'Better care and vaccination lower the death rate'],
  ];
  const w = 156, fh = Math.max(...fs.map(([a, c]) => cardH(w, { title: a, body: c, bs: 15, ts: 17 })));
  const fy = 196;
  fs.forEach(([a, c], i) => { b += card(30 + i * 171, fy, w, { title: a, body: c, bs: 15, ts: 17, h: fh, bfill: C.ink, fill: i === 4 ? C.tealLight : C.panel, edge: i === 4 ? C.tealDark : C.panelEdge }).s; });
  const gy = fy + fh + 50;
  b += arrow(450, fy + fh + 6, 450, gy - 6, { w: 4 });
  b += R(250, gy, 400, 56, C.mustard, C.ink) + T(450, gy + 36, 'Rapid population growth', { size: 21, weight: 700, anchor: 'middle' });
  const py = gy + 100;
  b += elbow([[350, gy + 58], [350, gy + 78], [235, gy + 78], [235, py - 6]], { w: 3.5, color: C.rust, marker: 'ahR' }) + elbow([[550, gy + 58], [550, gy + 78], [665, gy + 78], [665, py - 6]], { w: 3.5, color: C.tealDark, marker: 'ahT' });
  const p = { title: 'Problems', body: ['Pressure on food, water, housing, schools, hospitals and jobs', 'Growth of slums', 'Environmental damage'], bullets: true, fill: '#f6e3d6', edge: C.rust, bfill: C.ink };
  const s = { title: 'Solutions', body: ['Female education', 'Family planning services', 'Better health care to reduce infant deaths', 'Economic development that reduces the need for large families'], bullets: true, fill: C.tealLight, edge: C.tealDark, bfill: C.ink };
  const h = Math.max(cardH(410, p), cardH(410, s));
  b += card(30, py, 410, { ...p, h }).s + card(460, py, 410, { ...s, h }).s;
  add('03-growth-factors',
    svg(900, py + h + 30, 'Why Pakistan’s population grows quickly', b),
    'Natural increase is the birth rate minus the death rate. Five factors (social, educational, economic, political and health) feed rapid population growth, which leads to problems such as pressure on services and slums, and to solutions such as female education, family planning and better health care.',
    'High birth rates and a falling death rate together drive rapid growth.',
    '## Why is Pakistan\'s population growing quickly?');
}

// 04 Push and pull: rural–urban migration
{
  const y = 112;
  let b = R(30, y, 300, 270, '#e3ecd6', C.grass) + R(570, y, 300, 270, C.tealLight, C.tealDark);
  b += T(180, y + 40, 'Rural area', { size: 22, weight: 700, anchor: 'middle' }) + T(720, y + 40, 'City', { size: 22, weight: 700, anchor: 'middle' });
  b += T(50, y + 80, 'PUSH', { size: 17, weight: 700, fill: C.rust }) + tl(50, y + 110, ['• Few jobs, low wages', '• Landlessness', '• Poor services', '• Floods'], { size: 17 }, 26);
  b += T(590, y + 80, 'PULL', { size: 17, weight: 700, fill: C.tealDark }) + T(590, y + 110, '• Jobs in industry and', { size: 17 }) + T(605, y + 136, 'services', { size: 17 }) + T(590, y + 162, '• Schools, hospitals', { size: 17 }) + T(590, y + 188, '• Bright lights', { size: 17 });
  b += arrow(340, y + 150, 560, y + 150, { w: 10, color: C.olive, marker: 'ahO' }) + T(450, y + 134, 'migrants', { size: 18, weight: 700, fill: C.olive, anchor: 'middle' });
  b += arrow(560, y + 210, 340, y + 210, { w: 4, color: C.tealDark, marker: 'ahT', dash: '10 7' }) + T(450, y + 196, 'remittances', { size: 17, weight: 700, fill: C.tealDark, anchor: 'middle' });
  b += T(450, y + 236, 'money sent home', { size: 15, fill: C.muted, anchor: 'middle' });
  const g = grid(30, y + 300, [{ label: 'Other movements', w: 230 }, { label: 'Push', w: 300 }, { label: 'Pull', w: 310 }], [
    ['Seasonal', 'Little farm work in the slack season; winter snow in the mountains', 'Harvest work on the plains; urban jobs in winter'],
    ['Emigration', 'Unemployment, low pay', 'High wages in the Gulf states, the UK and elsewhere'],
    ['Immigration and refugees', 'Conflict in neighbouring countries', 'Safety, family links'],
  ], { size: 16 });
  add('04-push-pull-migration',
    svg(900, y + 300 + g.h + 30, 'Push and pull: why people move', b + g.s),
    'Rural push factors (few jobs, low wages, landlessness, poor services, floods) and urban pull factors (jobs, schools, hospitals, bright lights) send migrants from the countryside to the city, while remittances flow back. A table gives push and pull factors for seasonal migration, emigration and immigration including refugees.',
    'Migration happens when push factors at home meet pull factors elsewhere.',
    '## Why do people migrate, and what are the effects?');
}

// 05 Effects and solutions
{
  const w = 410;
  const city = { title: 'Effects in cities', body: ['Shanty settlements (katchi abadis): poor housing, little clean water or sanitation', 'Congestion and pollution', 'Tent cities when refugees arrive or after floods and earthquakes'], bullets: true, fill: '#f6e3d6', edge: C.rust, bfill: C.ink };
  const rural = { title: 'Effects in rural areas', body: ['Depopulation', 'Loss of young workers', 'But income from remittances'], bullets: true, fill: '#e3ecd6', edge: C.grass, bfill: C.ink };
  const h = Math.max(cardH(w, city), cardH(w, rural));
  let b = card(30, 112, w, { ...city, h }).s + card(460, 112, w, { ...rural, h }).s;
  const y = 112 + h + 40;
  b += arrow(235, 112 + h + 6, 235, y - 6, { w: 4 });
  const sol = [
    ['Self-help schemes', 'Residents build their own sewers and improve homes, e.g. the Orangi Pilot Project, Karachi'],
    ['Services', 'Standpipes, clean water and services'],
    ['Upgrading', 'Improve katchi abadis rather than demolish them'],
  ];
  const sw = 266, sh = Math.max(...sol.map(([a, c]) => cardH(sw, { title: a, body: c, bs: 16 })));
  b += T(260, y - 14, 'SOLUTIONS', { size: 16, weight: 700, fill: C.tealDark });
  sol.forEach(([a, c], i) => { b += card(30 + i * 287, y, sw, { title: a, body: c, bs: 16, h: sh, fill: C.tealLight, edge: C.tealDark, bfill: C.ink }).s; });
  const n = note(30, y + sh + 20, 840, 'Evaluate: upgrading can encourage more migration, and poorly planned schemes may still leave bad housing.', { title: 'But…' });
  add('05-migration-effects-solutions',
    svg(900, y + sh + 20 + n.h + 30, 'Effects of migration, and what can be done', b + n.s),
    'Effects in cities include katchi abadis with poor housing and little clean water, congestion, pollution and tent cities; effects in rural areas include depopulation and loss of young workers but income from remittances. Solutions are self-help schemes such as the Orangi Pilot Project in Karachi, standpipes and services, and upgrading katchi abadis, with a warning that upgrading can attract more migrants.',
    'Upgrading and self-help improve katchi abadis but can attract further migration.',
    '## Why do people migrate, and what are the effects?');
}

// 06 Distribution and density
{
  const y = 112;
  const rnd = (seed) => () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  const dots = (x, yy, w, h, n, seed) => { const r = rnd(seed); let s = ''; for (let i = 0; i < n; i++) s += `<circle cx="${(x + 10 + r() * (w - 20)).toFixed(1)}" cy="${(yy + 10 + r() * (h - 20)).toFixed(1)}" r="4" fill="${C.ink}"/>`; return s; };
  let b = '';
  b += card(30, y, 410, { title: 'Distribution', body: 'The pattern of where people live.', fill: C.panel }).s;
  b += card(460, y, 410, { title: 'Density', body: 'The number of people per square kilometre.', fill: C.panel }).s;
  const py = y + 120;
  b += R(30, py, 410, 290, C.cream, C.olive) + T(50, py + 34, 'Punjab', { size: 21, weight: 700 }) + T(50, py + 58, 'largest share of the population;', { size: 16, fill: C.ink }) + T(50, py + 78, 'high density on the irrigated plain', { size: 16, fill: C.ink });
  b += `<rect x="130" y="${py + 100}" width="210" height="170" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/>` + dots(130, py + 100, 210, 170, 150, 7);
  b += R(460, py, 410, 290, C.tealLight, C.tealDark) + T(480, py + 34, 'Balochistan', { size: 21, weight: 700 }) + T(480, py + 58, 'largest area; smallest share of the', { size: 16, fill: C.ink }) + T(480, py + 78, 'population; very low density', { size: 16, fill: C.ink });
  b += `<rect x="480" y="${py + 100}" width="370" height="170" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/>` + dots(480, py + 100, 370, 170, 22, 11);
  const fy = py + 310;
  const g = grid(30, fy, [{ label: 'Factor', w: 150 }, { label: 'Encourages high density', w: 345 }, { label: 'Leads to low density', w: 345 }], [
    ['Physical', 'Flat land, fertile soil, water, mild climate', 'Mountains, deserts, extreme cold'],
    ['Economic', 'Jobs, industry, irrigation, trade', '—'],
    ['Social', 'Services, family ties', '—'],
    ['Political', 'Capital city functions, government investment, security', '—'],
  ], { size: 16 });
  add('06-distribution-density',
    svg(900, fy + g.h + 30, 'Distribution and density', b + g.s, 'dots and box sizes are schematic'),
    'Distribution is the pattern of where people live; density is people per square kilometre. A schematic compares Punjab, with the largest share of population and high density, with Balochistan, the largest province by area with very low density. A table lists physical, economic, social and political factors.',
    'Balochistan has the most land but the fewest people; Punjab the reverse.',
    '## What is the difference between distribution and density?');
}

// 07 Workforce and underemployment
{
  const y = 112;
  const sec = [
    ['Primary', 'farming, fishing, mining', 'Largest single share, but falling', '↘', C.cream, C.olive],
    ['Secondary', 'manufacturing, construction', 'Has grown with industry', '↗', C.tealLight, C.tealDark],
    ['Tertiary', 'trade, transport, government, education, health', 'Growing fastest, in the cities', '⇈', C.teal, C.tealDark],
  ];
  const w = 270, h = Math.max(...sec.map(([a, s2, c]) => cardH(w, { title: a, sub: s2, body: c, ts: 22, bs: 17 }))) + 60;
  let b = '';
  sec.forEach(([a, s2, c, ar, f, e], i) => {
    const x = 30 + i * 285;
    b += card(x, y, w, { title: a, sub: s2, body: c, ts: 22, bs: 17, h, fill: f, edge: e, bfill: C.ink }).s + T(x + w - 24, y + h - 18, ar, { size: 40, weight: 700, anchor: 'end', fill: e });
  });
  const y2 = y + h + 30;
  const u1 = { title: 'Unemployment', body: 'Having no job.', fill: C.panel };
  const u2 = { title: 'Underemployment', body: 'Not having enough work: farm labourers idle outside planting and harvest, or street vendors earning very little.', fill: C.panel };
  const uh = Math.max(cardH(410, u1), cardH(410, u2));
  b += card(30, y2, 410, { ...u1, h: uh }).s + card(460, y2, 410, { ...u2, h: uh }).s;
  const y3 = y2 + uh + 16;
  b += R(30, y3, 840, 54, '#f6e3d6', C.rust) + T(450, y3 + 34, 'Both reduce GNP and GDP: people produce less than they could', { size: 18, weight: 700, anchor: 'middle' });
  const n = note(30, y3 + 74, 840, 'Plenty of manual labour, but a shortage of skilled labour: raising literacy, technical training and female education is central to development.');
  add('07-workforce',
    svg(900, y3 + 74 + n.h + 30, 'How the workforce is employed', b + n.s),
    'Three cards: primary occupations still employ the largest share but it is falling; secondary occupations have grown with industry; tertiary occupations are growing fastest in the cities. Below, unemployment (no job) is compared with underemployment (not enough work), both of which reduce GNP and GDP.',
    'Work is shifting from farming to services, but too little work holds back GNP and GDP.',
    '## How is the workforce employed?');
}
