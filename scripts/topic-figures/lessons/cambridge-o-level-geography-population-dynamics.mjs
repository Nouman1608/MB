import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-geography-population-dynamics';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- local helpers (kept in this file; style.mjs is shared) ----
const esc = (s) => String(s).replace(/&(?!(amp|lt|gt|quot|#\d+);)/g, '&amp;').replace(/</g, '&lt;');
// wrap text to a pixel width (approximate Inter metrics)
const wrap = (s, w, size = 17, bold = false) => {
  const max = Math.max(4, Math.floor(w / (size * (bold ? 0.57 : 0.53))));
  const out = [''];
  for (const word of String(s).split(' ')) {
    const cur = out[out.length - 1];
    if (cur && (cur + ' ' + word).length > max) out.push(word); else out[out.length - 1] = cur ? cur + ' ' + word : word;
  }
  return out;
};
// text block wrapped to width; returns {svg, h}
const para = (x, y, s, w, opts = {}) => {
  const size = opts.size || 17, lh = opts.lh || Math.round(size * 1.32);
  const lines = wrap(s, w, size, (opts.weight || 400) >= 600);
  return { svg: tl(x, y, lines, opts, lh), h: lines.length * lh, n: lines.length };
};
// card: panel with bold title and wrapped body; body text starts below title
const card = (x, y, w, h, title, body, o = {}) => {
  const fill = o.fill || C.panel, edge = o.edge || C.panelEdge, ts = o.ts || 20, bs = o.bs || 16.5, pad = o.pad || 18;
  const anchor = o.center ? 'middle' : 'start', tx = o.center ? x + w / 2 : x + pad;
  let s = panel(x, y, w, h, fill, edge);
  let cy = y + pad + ts * 0.85 + (o.top || 0);
  if (title) { const tt = wrap(title, w - 2 * pad, ts, true); s += tl(tx, cy, tt, { size: ts, weight: 700, anchor, fill: o.tfill || C.ink }, ts * 1.25); cy += (tt.length - 1) * ts * 1.25 + bs * 1.55; }
  if (body) { const bl = Array.isArray(body) ? body : wrap(body, w - 2 * pad, bs); s += tl(tx, cy, bl, { size: bs, anchor, fill: o.bfill || C.muted }, bs * 1.32); }
  return s;
};
const pill = (x, y, w, h, label, o = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${o.fill || C.cream}" stroke="${o.edge || C.olive}" stroke-width="2.5"/>` +
  t(x + w / 2, y + h / 2 + (o.size || 17) * 0.36, label, { size: o.size || 17, weight: o.weight || 700, anchor: 'middle', fill: o.color || C.ink });
const rrect = (x, y, w, h, fill, edge = C.ink, sw = 2.5, rx = 10) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
const circ = (cx, cy, r, fill, edge = C.ink, sw = 2.5) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
const line = (x1, y1, x2, y2, o = {}) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${o.color || C.ink}" stroke-width="${o.w || 2.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
const sun = (cx, cy, r = 22) => { let s = ''; for (let i = 0; i < 8; i++) { const a = (i * Math.PI) / 4; s += line(cx + Math.cos(a) * (r + 6), cy + Math.sin(a) * (r + 6), cx + Math.cos(a) * (r + 15), cy + Math.sin(a) * (r + 15), { color: C.olive, w: 3 }); } return s + circ(cx, cy, r, C.mustard, C.olive, 2.5); };
const cloud = (cx, cy, s = 1, fill = '#ffffff') => `<path d="M${cx - 60 * s},${cy + 20 * s} Q${cx - 80 * s},${cy + 20 * s} ${cx - 78 * s},${cy} Q${cx - 76 * s},${cy - 22 * s} ${cx - 50 * s},${cy - 18 * s} Q${cx - 40 * s},${cy - 48 * s} ${cx - 5 * s},${cy - 42 * s} Q${cx + 25 * s},${cy - 60 * s} ${cx + 45 * s},${cy - 25 * s} Q${cx + 80 * s},${cy - 25 * s} ${cx + 78 * s},${cy + 2 * s} Q${cx + 80 * s},${cy + 20 * s} ${cx + 60 * s},${cy + 20 * s} Z" fill="${fill}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>`;
const rain = (x, y, n = 4, gap = 18, len = 18, color = C.blue) => { let s = ''; for (let i = 0; i < n; i++) s += line(x + i * gap, y + (i % 2) * 8, x + i * gap - 5, y + (i % 2) * 8 + len, { color, w: 2.5 }); return s; };
const house = (x, y, s = 1, roof = C.rust) => `<rect x="${x}" y="${y}" width="${30 * s}" height="${24 * s}" fill="#ffffff" stroke="${C.ink}" stroke-width="2.2"/><path d="M${x - 3 * s},${y} L${x + 15 * s},${y - 13 * s} L${x + 33 * s},${y} Z" fill="${roof}" stroke="${C.ink}" stroke-width="2"/>`;
const tree = (x, y, s = 1, fill = C.grass) => `<rect x="${x - 3 * s}" y="${y - 18 * s}" width="${6 * s}" height="${18 * s}" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="1.8"/><circle cx="${x}" cy="${y - 30 * s}" r="${16 * s}" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>`;
const person = (x, y, s = 1, fill = C.tealDark) => `<circle cx="${x}" cy="${y - 34 * s}" r="${7 * s}" fill="${fill}"/><path d="M${x - 9 * s},${y} L${x - 9 * s},${y - 16 * s} Q${x - 9 * s},${y - 25 * s} ${x},${y - 25 * s} Q${x + 9 * s},${y - 25 * s} ${x + 9 * s},${y - 16 * s} L${x + 9 * s},${y} Z" fill="${fill}"/>`;
const factory = (x, y, s = 1) => `<path d="M${x},${y} L${x},${y - 30 * s} L${x + 20 * s},${y - 42 * s} L${x + 20 * s},${y - 30 * s} L${x + 40 * s},${y - 42 * s} L${x + 40 * s},${y - 30 * s} L${x + 60 * s},${y - 42 * s} L${x + 60 * s},${y} Z" fill="#ffffff" stroke="${C.ink}" stroke-width="2.2" stroke-linejoin="round"/><rect x="${x + 45 * s}" y="${y - 66 * s}" width="${9 * s}" height="${30 * s}" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>`;
// vertical flow of boxes with arrows between; items: [title, body]
const flowDown = (x, y, w, hs, gap, items, o = {}) => {
  let s = '', cy = y;
  items.forEach((it, i) => {
    const h = Array.isArray(hs) ? hs[i] : hs;
    s += card(x, cy, w, h, it[0], it[1], { ...o, ...(it[2] || {}) });
    if (i < items.length - 1) s += arrow(x + w / 2, cy + h + 3, x + w / 2, cy + h + gap - 4, { w: 3.5 });
    cy += h + gap;
  });
  return s;
};
// horizontal flow of boxes
const flowRight = (x, y, ws, h, gap, items, o = {}) => {
  let s = '', cx = x;
  items.forEach((it, i) => {
    const w = Array.isArray(ws) ? ws[i] : ws;
    s += card(cx, y, w, h, it[0], it[1], { ...o, ...(it[2] || {}) });
    if (i < items.length - 1) s += arrow(cx + w + 3, y + h / 2, cx + w + gap - 4, y + h / 2, { w: 3.5 });
    cx += w + gap;
  });
  return s;
};
// label with a soft white backing so it reads over lines
const tag = (x, y, s, o = {}) => { const size = o.size || 15, w = String(s).length * size * ((o.weight || 700) >= 600 ? 0.6 : 0.55) + 12; const x0 = o.anchor === 'middle' ? x - w / 2 : o.anchor === 'end' ? x - w + 6 : x - 6; return `<rect x="${x0}" y="${y - size * 0.95}" width="${w}" height="${size * 1.35}" rx="5" fill="${o.bg || '#ffffff'}" opacity="${o.op || 0.92}"/>` + t(x, y, s, { size, weight: o.weight || 700, anchor: o.anchor || 'start', fill: o.fill || C.ink }); };
// bulleted list, each item wrapped to width w; returns {svg, h}
const bullets = (x, y, items, w, o = {}) => {
  const size = o.size || 16.5, lh = o.lh || Math.round(size * 1.3), gap = o.gap ?? 8; let s = '', yy = y;
  for (const it of items) { const ls = wrap(it, w - 18, size); s += t(x, yy, o.mark || '•', { size: o.mark ? size + 3 : size, fill: o.bullet || o.fill || C.ink, weight: 700 }) + tl(x + 16, yy, ls, { size, fill: o.fill || C.ink }, lh); yy += ls.length * lh + gap; }
  return { svg: s, h: yy - y };
};
const turbine = (x, y, s = 1) => `<line x1="${x}" y1="${y}" x2="${x}" y2="${y - 60 * s}" stroke="${C.ink}" stroke-width="${3 * s}"/>` + [0, 120, 240].map((a) => { const r = (a - 90) * Math.PI / 180; return `<line x1="${x}" y1="${y - 60 * s}" x2="${x + Math.cos(r) * 30 * s}" y2="${y - 60 * s + Math.sin(r) * 30 * s}" stroke="${C.ink}" stroke-width="${3.5 * s}" stroke-linecap="round"/>`; }).join('') + `<circle cx="${x}" cy="${y - 60 * s}" r="${4 * s}" fill="${C.mustard}" stroke="${C.ink}" stroke-width="1.5"/>`;
const flame = (x, y, s = 1) => `<path d="M${x - 22 * s},${y} l44,${-8 * s} M${x - 22 * s},${y - 8 * s} l44,${8 * s}" stroke="${C.rockDark}" stroke-width="${6 * s}" stroke-linecap="round"/><path d="M${x},${y - 10 * s} q-16,-14 -6,-34 q2,12 8,14 q-2,-16 10,-26 q-2,20 8,30 q4,10 -4,16 z" fill="${C.rust}" stroke="${C.ink}" stroke-width="1.6"/>`;
const steam = (x, y, n = 2, gap = 18, col = C.muted) => { let s = ''; for (let i = 0; i < n; i++) s += path(`M${x + i * gap},${y} q-8,-12 0,-24 q8,-12 0,-24`, { stroke: col, w: 3 }); return s; };
// ---- end helpers ----

// 01 Three flows of population change
{
  let s = rrect(320, 200, 260, 200, C.tealLight, C.tealDark, 3, 18) + t(450, 290, 'POPULATION', { size: 22, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(450, 318, 'of a country', { size: 16, anchor: 'middle', fill: C.muted });
  [430, 450, 470].forEach((x, i) => { s += person(x, 370, 0.8, [C.tealDark, C.olive, C.rust][i]); });
  s += arrow(150, 240, 312, 240, { w: 8, color: C.tealDark, marker: 'ahT' }) + t(70, 232, 'Births', { size: 20, weight: 700, fill: C.tealDark }) + t(70, 256, 'add', { size: 15, fill: C.muted });
  s += arrow(588, 240, 750, 240, { w: 8, color: C.rust, marker: 'ahR' }) + t(760, 232, 'Deaths', { size: 20, weight: 700, fill: C.rust }) + t(760, 256, 'remove', { size: 15, fill: C.muted });
  s += arrow(150, 360, 312, 360, { w: 5, color: C.tealDark, marker: 'ahT', dash: '10 6' }) + t(50, 352, 'Immigrants', { size: 18, weight: 700, fill: C.tealDark }) + t(50, 376, 'arrive', { size: 15, fill: C.muted });
  s += arrow(588, 360, 750, 360, { w: 5, color: C.rust, marker: 'ahR', dash: '10 6' }) + t(760, 352, 'Emigrants', { size: 18, weight: 700, fill: C.rust }) + t(760, 376, 'leave', { size: 15, fill: C.muted });
  s += t(450, 160, 'Rates are given per 1,000 people per year', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  const eq = [['Natural change', '= birth rate − death rate', 'can be negative: natural decrease'], ['Net migration', '= immigrants − emigrants', ''], ['Total change', '= natural change + net migration', '']];
  eq.forEach(([a, b, c], i) => { const y = 440 + i * 74; s += rrect(30, y, 840, 62, i === 2 ? C.cream : '#ffffff', i === 2 ? C.olive : C.panelEdge, 2.5, 12) + t(55, y + 39, a, { size: 19, weight: 700 }) + t(260, y + 39, b, { size: 19 }) + (c ? t(845, y + 39, c, { size: 15, anchor: 'end', fill: C.rust, italic: true }) : ''); });
  s += panel(30, 670, 840, 64, '#f6e6dc', C.rust) + t(450, 709, 'Trap: infant mortality is per 1,000 live births, not per 1,000 people.', { size: 17, weight: 700, anchor: 'middle' });
  add('01-components-of-change',
    svg(900, 755, 'Three flows change a population', s),
    'A population box with births and immigrants flowing in and deaths and emigrants flowing out. Below, three equations: natural change equals birth rate minus death rate and can be negative; net migration equals immigrants minus emigrants; total change equals natural change plus net migration. A warning notes that infant mortality is per 1,000 live births.',
    'Births, deaths and migration: the only three ways a population changes.',
    '## Key idea 1: the arithmetic of change');
}

// 02 Why the world grew so fast
{
  const X0 = 80, X1 = 560, Y0 = 150, Y1 = 430;
  let s = panel(30, 110, 560, 410) + line(X0, Y1, X1, Y1, { w: 2.5 }) + line(X0, Y0, X0, Y1, { w: 2.5 }) + t(X0 - 10, Y0 + 70, 'rate', { size: 15, anchor: 'end', fill: C.muted }) + t(X1, Y1 - 10, 'time →', { size: 15, anchor: 'end', fill: C.muted });
  const br = `M${X0},180 L230,182 L330,190 Q400,215 450,300 Q490,360 ${X1},370`;
  const dr = `M${X0},200 L170,196 Q230,260 290,330 Q330,365 ${X1},372`;
  s += `<path d="M170,196 Q230,260 290,330 Q330,365 ${X1},372 L${X1},370 Q490,360 450,300 Q400,215 330,190 L230,182 L170,190 Z" fill="${C.cream}" stroke="none"/>`;
  s += path(br, { stroke: C.tealDark, w: 5 }) + path(dr, { stroke: C.rust, w: 5 });
  s += t(240, 172, 'birth rate', { size: 16, weight: 700, fill: C.tealDark }) + t(130, 300, 'death rate', { size: 16, weight: 700, fill: C.rust });
  s += tag(360, 262, 'the gap = rapid growth', { size: 16, fill: C.olive, bg: C.cream, op: 1 });
  s += t(195, 470, '1 death rate falls first', { size: 15.5, weight: 700, fill: C.rust, anchor: 'middle' }) + t(470, 470, '2 birth rate falls later', { size: 15.5, weight: 700, fill: C.tealDark, anchor: 'middle' });
  s += t(310, 500, 'Schematic, not to scale', { size: 14.5, anchor: 'middle', fill: C.muted, italic: true });
  s += card(610, 110, 260, 250, 'Why deaths fell', null, { fill: '#f6e6dc', edge: C.rust, ts: 19, tfill: C.rust }) + bullets(628, 172, ['Better food supply and storage', 'Clean water and sewage disposal', 'Vaccination, antibiotics, clinics', 'Hygiene and nutrition knowledge'], 228, { size: 15.5, gap: 8 }).svg;
  s += card(610, 375, 260, 145, 'Why births lag', 'Family decisions shaped by culture, religion, education and economics change over a generation.', { fill: C.tealLight, edge: C.tealDark, ts: 19, bs: 15.5, tfill: C.tealDark });
  s += line(80, 590, 820, 590, { w: 4 });
  [[100, '~1 billion', 'around 1800'], [560, '7 billion', '2011'], [800, '8 billion', 'November 2022']].forEach(([x, a, b], i) => { s += circ(x, 590, 10, C.mustard, C.ink, 2.5) + t(x, 568, a, { size: 18, weight: 700, anchor: i === 2 ? 'end' : i === 0 ? 'start' : 'middle' }) + t(x, 618, b, { size: 15.5, anchor: i === 2 ? 'end' : i === 0 ? 'start' : 'middle', fill: C.muted }); });
  s += t(340, 618, 'growth accelerates sharply (not to scale)', { size: 15.5, anchor: 'middle', fill: C.olive, italic: true });
  add('02-death-rate-gap',
    svg(900, 640, 'Why the world’s population grew so fast', s),
    'A schematic graph: the death rate falls first while the birth rate stays high, and falls only later; the shaded gap between them is rapid growth. Reasons deaths fell: better food supply, clean water and sewage disposal, vaccination and antibiotics, hygiene knowledge. Births lag because family decisions change over a generation. A timeline marks about 1 billion people around 1800, 7 billion in 2011 and 8 billion in November 2022.',
    'Death rates fell before birth rates did; the gap drove the boom.',
    '## Key idea 2: why the world\'s population grew so fast');
}

// 03 Pushing the birth rate up or down
{
  const rows = [['Economic', 'children work on farms, support parents in old age', 'children costly to educate and house in cities'], ['Social', 'early marriage; low status of women', 'women in education and paid work; later marriage'], ['Health', 'high infant mortality: more births to “replace” losses', 'low infant mortality; access to contraception'], ['Cultural, religious', 'beliefs that value large families', 'more secular attitudes; smaller family norms'], ['Political', 'pro-natalist incentives', 'anti-natalist campaigns and limits']];
  let s = t(240, 140, '▲ Pushes birth rate UP', { size: 19, weight: 700, anchor: 'middle', fill: C.rust }) + t(660, 140, '▼ Pushes birth rate DOWN', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  rows.forEach(([g, up, dn], i) => {
    const y = 160 + i * 98;
    s += rrect(30, y, 380, 84, '#f6e6dc', C.rust, 2, 12) + rrect(490, y, 380, 84, C.tealLight, C.tealDark, 2, 12);
    s += tl(220, y + 44 - (wrap(up, 340, 16).length - 1) * 10 + 4, wrap(up, 340, 16), { size: 16, anchor: 'middle' }, 20) + tl(680, y + 44 - (wrap(dn, 340, 16).length - 1) * 10 + 4, wrap(dn, 340, 16), { size: 16, anchor: 'middle' }, 20);
    s += rrect(390, y + 22, 120, 40, C.ink, C.ink, 2, 20) + t(450, y + 48, g.split(',')[0], { size: 15.5, weight: 700, anchor: 'middle', fill: '#ffffff' });
  });
  s += panel(30, 660, 840, 92, C.cream, C.olive) + t(55, 694, 'Death rates differ with healthcare, diet, water and sanitation, conflict and disease.', { size: 16.5, weight: 700 }) + t(55, 724, 'An ageing rich country can have a higher crude death rate than a poorer, younger one.', { size: 16 });
  add('03-birth-rate-factors',
    svg(900, 775, 'What pushes the birth rate up or down?', s),
    'Five factor groups, each with what pushes the birth rate up and down. Economic: children as farm workers and old-age support versus the cost of children in cities. Social: early marriage and low status of women versus women in education and work. Health: high versus low infant mortality and contraception. Cultural and religious: valuing large families versus smaller family norms. Political: pro-natalist versus anti-natalist policy.',
    'Group the factors, then say which way each pushes the rate.',
    '## Key idea 3: contrasting rates of natural change');
}

// 04 Over-, optimum and under-population
{
  const bal = (x, tilt, title, sub, ex, col) => {
    const cx = x + 135, cy = 250, a = tilt * 0.22, dx = 80 * Math.cos(a), dy = 80 * Math.sin(a);
    let s = panel(x, 110, 270, 480) + t(cx, 146, title, { size: 20, weight: 700, anchor: 'middle', fill: col });
    s += `<path d="M${cx - 30},360 L${cx},330 L${cx + 30},360 Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="2"/>` + line(cx, 330, cx, cy, { w: 4 }) + line(cx - dx, cy - dy, cx + dx, cy + dy, { w: 5 });
    const pan = (px, py, lbl, f) => line(px, py, px - 30, py + 40, { w: 1.6 }) + line(px, py, px + 30, py + 40, { w: 1.6 }) + `<path d="M${px - 36},${py + 40} L${px + 36},${py + 40} Q${px},${py + 62} ${px - 36},${py + 40} Z" fill="${f}" stroke="${C.ink}" stroke-width="2"/>` + t(px, py + 86, lbl, { size: 15.5, weight: 700, anchor: 'middle' });
    s += pan(cx - dx, cy - dy, 'people', C.teal) + pan(cx + dx, cy + dy, 'resources', C.sand);
    s += tl(x + 20, 400, wrap(sub, 230, 16), { size: 16 }, 21);
    s += rrect(x + 16, 500, 238, 74, C.cream, C.olive, 2, 10) + tl(x + 135, 528, wrap(ex, 215, 15, true), { size: 15, weight: 700, anchor: 'middle' }, 19);
    return s;
  };
  let s = bal(30, -1, 'Over-population', 'Too many people for the resources and technology: food shortages, unemployment, overcrowding.', 'often used: Bangladesh', C.rust);
  s += bal(315, 0, 'Optimum', 'The number giving the highest standard of living with the resources and technology.', 'a balance point', C.tealDark);
  s += bal(600, 1, 'Under-population', 'Too few people to use the resources: labour shortages, unused land or minerals.', 'often used: Australia', C.olive);
  s += panel(30, 610, 840, 76, '#ffffff', C.panelEdge) + t(450, 642, 'People compared with resources, not with area.', { size: 18, weight: 700, anchor: 'middle' }) + t(450, 668, 'The Netherlands is dense but wealthy enough to import food and resources.', { size: 16, anchor: 'middle', fill: C.muted });
  add('04-over-under-population',
    svg(900, 705, 'Over-, optimum and under-population', s),
    'Three balances of people against resources. Over-population: the people side is heavier, with food shortages, unemployment and overcrowding; Bangladesh is often used as an example. Optimum: balanced, giving the highest standard of living. Under-population: the resources side is heavier, with labour shortages and unused land or minerals; Australia is often used. A note says density alone is not over-population, as the Netherlands shows.',
    'Over- and under-population compare people with resources, not with area.',
    '## Key idea 4: over-population and under-population');
}

// 05 Evaluating China's one-child policy
{
  let s = line(90, 160, 810, 160, { w: 4 });
  [[90, 'c. 1979–80', 'one-child policy'], [560, '2016', 'two-child policy'], [810, '2021', 'three-child policy']].forEach(([x, a, b], i) => { s += circ(x, 160, 11, i ? C.cream : C.rust, C.ink, 2.5) + t(x, 136, a, { size: 18, weight: 700, anchor: i === 0 ? 'start' : i === 2 ? 'end' : 'middle' }) + t(x, 192, b, { size: 15.5, anchor: i === 0 ? 'start' : i === 2 ? 'end' : 'middle', fill: C.muted }); });
  const steps = [['Did it change the birth rate?', 'Growth slowed, but the birth rate was already falling before the policy began.'], ['Unintended consequences?', 'More boys than girls; rapid ageing; the 4-2-1 family.'], ['Was it acceptable?', 'Coercive measures raised serious human rights concerns.'], ['Overall judgement', 'Effective at slowing growth, but at a social and demographic cost that forced reversal.']];
  steps.forEach(([a, b], i) => { const y = 225 + i * 96; s += rrect(30, y, 520, 84, i === 3 ? C.cream : '#ffffff', i === 3 ? C.olive : C.panelEdge, 2.5, 12) + badge(64, y + 42, 18, String(i + 1), i === 3 ? C.mustard : C.cream) + t(96, y + 32, a, { size: 17.5, weight: 700 }) + tl(96, y + 56, wrap(b, 430, 15), { size: 15, fill: C.muted }, 19); });
  // 4-2-1 family
  s += panel(570, 225, 300, 372) + t(720, 260, 'The 4-2-1 family', { size: 19, weight: 700, anchor: 'middle' });
  [600, 668, 772, 840].forEach((x) => { s += person(x + 5, 350, 0.95, C.muted); });
  s += t(720, 372, '4 grandparents', { size: 15, anchor: 'middle', fill: C.muted });
  [690, 760].forEach((x) => { s += person(x, 460, 1.05, C.tealDark); }) + '';
  s += t(725, 482, '2 parents', { size: 15, anchor: 'middle', fill: C.muted });
  s += person(725, 560, 1.15, C.rust) + t(725, 585, '1 adult child supports all six', { size: 15, anchor: 'middle', fill: C.rust, weight: 700 });
  s += line(640, 380, 690, 420, { w: 1.8, color: C.muted }) + line(810, 380, 760, 420, { w: 1.8, color: C.muted }) + line(700, 490, 720, 515, { w: 1.8, color: C.muted }) + line(750, 490, 730, 515, { w: 1.8, color: C.muted });
  add('05-china-one-child',
    svg(900, 620, 'Evaluating a policy: China’s one-child policy', s),
    'A timeline: the one-child policy around 1979 to 1980, relaxed to two children from 2016 and three in 2021. Four evaluation steps: growth slowed but the birth rate was already falling; unintended consequences of more boys than girls, rapid ageing and the 4-2-1 family; human rights concerns over coercion; and an overall judgement of effective but costly. A diagram shows four grandparents, two parents and one adult child who may have to support all six.',
    'Judge a policy against its aims, its side effects and its acceptability.',
    '## Key idea 5: population policies');
}

// 06 Worked example: calculating change
{
  const box = (x, y, w, h, a, b, f, e) => rrect(x, y, w, h, f, e, 2.5, 12) + t(x + w / 2, y + 34, a, { size: 16, weight: 700, anchor: 'middle', fill: C.muted }) + t(x + w / 2, y + 70, b, { size: 23, weight: 700, anchor: 'middle' });
  let s = box(30, 120, 190, 100, 'Birth rate per 1,000', '32', '#ffffff', C.panelEdge) + t(240, 180, '−', { size: 30, weight: 700, anchor: 'middle' }) + box(260, 120, 190, 100, 'Death rate per 1,000', '9', '#ffffff', C.panelEdge) + t(470, 180, '=', { size: 30, weight: 700, anchor: 'middle' }) + box(490, 120, 380, 100, 'Natural change', '23 per 1,000 = 2.3%', C.tealLight, C.tealDark);
  s += arrow(680, 224, 680, 262, { w: 3.5 }) + t(665, 250, '+ net migration (−2 per 1,000)', { size: 16, weight: 700, fill: C.rust, anchor: 'end' });
  s += box(490, 268, 380, 100, 'Total change', '21 per 1,000 = 2.1%', C.cream, C.olive);
  s += arrow(680, 372, 680, 410, { w: 3.5 }) + t(665, 398, '× population of 40 million', { size: 16, weight: 700, anchor: 'end' });
  s += box(490, 416, 380, 100, 'Yearly increase', '840,000 people', C.tealDark === 0 ? '' : '#ffffff', C.ink);
  s += para(40, 300, 'Per 1,000 → %: divide by 10.', 400, { size: 17, weight: 700 }).svg + para(40, 350, '40,000,000 × 21 ÷ 1,000 = 840,000', 420, { size: 17 }).svg + para(40, 420, 'Stopping at natural change misses the migration step.', 400, { size: 17, fill: C.rust, weight: 600 }).svg;
  add('06-calculating-change',
    svg(900, 545, 'Worked example: from rates to people', s, 'Illustrative figures'),
    'A birth rate of 32 per 1,000 minus a death rate of 9 gives natural change of 23 per 1,000, or 2.3 per cent. Adding net migration of minus 2 gives total change of 21 per 1,000, or 2.1 per cent. Multiplying by a population of 40 million and dividing by 1,000 gives a yearly increase of 840,000 people.',
    'Natural change, then add migration, then scale up to the population.',
    '## Worked example: calculating change');
}
