import { C, svg, panel, t as t0, tl as tl0, arrow, path, badge as badge0 } from '../style.mjs';

// house minimum text size is 15: clamp every label drawn in this file
const MIN = 15;
const t = (x, y, s, o = {}) => t0(x, y, s, { ...o, size: Math.max(MIN, o.size || 18) });
const tl = (x, y, lines, opts = {}, lh = Math.max(MIN, opts.size || 18) * 1.3) => lines.map((s, i) => t(x, y + i * lh, s, opts)).join('');
const badge = (cx, cy, r, label, fill = C.mustard) => { const sz = Math.max(MIN, r); return `<circle cx="${cx}" cy="${cy}" r="${Math.max(r, sz * 0.85)}" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + t(cx, cy + sz * 0.36, label, { size: sz, weight: 700, anchor: 'middle' }); };

export const slug = 'cambridge-igcse-environmental-management-0680-water-related-diseases';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- local helpers (kept in this file; style.mjs is shared) ----
const esc = (s) => String(s).replace(/&(?!(amp|lt|gt|quot|#\d+);)/g, '&amp;').replace(/</g, '&lt;');
// wrap text to a pixel width (approximate Inter metrics)
const wrap = (s, w, size = 17, bold = false) => {
  size = Math.max(MIN, size);
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
const tag = (x, y, s, o = {}) => { const size = Math.max(MIN, o.size || 15), w = String(s).length * size * ((o.weight || 700) >= 600 ? 0.6 : 0.55) + 12; const x0 = o.anchor === 'middle' ? x - w / 2 : o.anchor === 'end' ? x - w + 6 : x - 6; return `<rect x="${x0}" y="${y - size * 0.95}" width="${w}" height="${size * 1.35}" rx="5" fill="${o.bg || '#ffffff'}" opacity="${o.op || 0.92}"/>` + t(x, y, s, { size, weight: o.weight || 700, anchor: o.anchor || 'start', fill: o.fill || C.ink }); };
// bulleted list, each item wrapped to width w; returns {svg, h}
const bullets = (x, y, items, w, o = {}) => {
  const size = Math.max(MIN, o.size || 16.5), lh = o.lh || Math.round(size * 1.3), gap = o.gap ?? 8; let s = '', yy = y;
  for (const it of items) { const ls = wrap(it, w - 18, size); s += t(x, yy, o.mark || '•', { size: o.mark ? size + 3 : size, fill: o.bullet || o.fill || C.ink, weight: 700 }) + tl(x + 16, yy, ls, { size, fill: o.fill || C.ink }, lh); yy += ls.length * lh + gap; }
  return { svg: s, h: yy - y };
};
const turbine = (x, y, s = 1) => `<line x1="${x}" y1="${y}" x2="${x}" y2="${y - 60 * s}" stroke="${C.ink}" stroke-width="${3 * s}"/>` + [0, 120, 240].map((a) => { const r = (a - 90) * Math.PI / 180; return `<line x1="${x}" y1="${y - 60 * s}" x2="${x + Math.cos(r) * 30 * s}" y2="${y - 60 * s + Math.sin(r) * 30 * s}" stroke="${C.ink}" stroke-width="${3.5 * s}" stroke-linecap="round"/>`; }).join('') + `<circle cx="${x}" cy="${y - 60 * s}" r="${4 * s}" fill="${C.mustard}" stroke="${C.ink}" stroke-width="1.5"/>`;
// curved or multi-point arrow along an SVG path
const carrow = (d, o = {}) => `<path d="${d}" fill="none" stroke="${o.color || C.ink}" stroke-width="${o.w || 3.5}" stroke-linejoin="round" stroke-linecap="round" marker-end="url(#${o.marker || 'ah'})"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
// horizontal bar chart helper: axis box with ticks; returns svg
const hbar = (x, y, w, h, fill, edge = C.ink) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" stroke="${edge}" stroke-width="2"/>`;
// ---- end helpers ----

const H2 = {
  two: '## Two diseases, two routes',
  cycle: '## How mosquitoes spread malaria (3.3.1)',
  mal: '## Strategies to control malaria (3.3.2)',
  chol: '## Strategies to control cholera (3.3.3)',
  bl: '## Benefits and limitations (3.3.4)',
};
const mosq = (x, y, s = 1, fill = C.ink) => `<ellipse cx="${x}" cy="${y}" rx="${16 * s}" ry="${5 * s}" fill="${fill}"/>` + circ(x + 18 * s, y - 2 * s, 4 * s, fill, fill, 1) + line(x + 21 * s, y - 2 * s, x + 34 * s, y + 4 * s, { w: 1.6 * s, color: fill }) + `<ellipse cx="${x - 2 * s}" cy="${y - 9 * s}" rx="${12 * s}" ry="${5 * s}" fill="#ffffff" stroke="${fill}" stroke-width="1.4" transform="rotate(-20 ${x} ${y - 9 * s})"/>` + [-8, 0, 8].map((d) => line(x + d * s, y + 4 * s, x + d * s - 6 * s, y + 16 * s, { w: 1.4 * s, color: fill })).join('');

// 01 Two diseases, two routes
{
  let b = '';
  const rows = ['Cause', 'How it reaches people', 'Link to water', 'Control aims'];
  const mal = ['Plasmodium, a single-celled parasite', 'bite of an infected female Anopheles mosquito (the vector)', 'mosquito larvae develop in still or slow-moving water', 'stop bites, kill the vector, treat or prevent infection'];
  const cho = ['a bacterium', 'drinking water or eating food contaminated with faeces', 'untreated sewage contaminates water sources', 'keep faeces out of water, make water safe, prevent infection'];
  b += `<rect x="230" y="110" width="310" height="56" rx="12" fill="${C.olive}"/>` + t(385, 146, 'Malaria', { size: 22, weight: 700, anchor: 'middle', fill: '#ffffff' });
  b += `<rect x="560" y="110" width="310" height="56" rx="12" fill="${C.blue}"/>` + t(715, 146, 'Cholera', { size: 22, weight: 700, anchor: 'middle', fill: '#ffffff' });
  rows.forEach((r, i) => {
    const y = 180 + i * 100;
    b += `<rect x="30" y="${y}" width="190" height="88" rx="12" fill="${C.ink}"/>` + tl(125, y + (wrap(r, 170, 17, true).length > 1 ? 38 : 50), wrap(r, 170, 17, true), { size: 17, weight: 700, anchor: 'middle', fill: '#ffffff' }, 21);
    const cell = (x, s, f, e) => rrect(x, y, 310, 88, f, e, 2.5, 12) + tl(x + 155, y + 44 - (wrap(s, 280, 16).length - 1) * 10 + 6, wrap(s, 280, 16), { size: 16, anchor: 'middle', italic: s.startsWith('Plasmodium') }, 20);
    b += cell(230, mal[i], C.cream, C.olive) + cell(560, cho[i], '#e9eef6', C.blue);
  });
  b += panel(30, 590, 840, 70, '#fbf1ea', C.rust) + t(450, 632, 'No mosquito nets for cholera; no chlorination for malaria.', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  add('01-two-diseases',
    svg(900, 685, 'Two diseases, two routes', b),
    'A comparison of malaria and cholera. Malaria is caused by the Plasmodium parasite, reaches people through the bite of an infected female Anopheles mosquito, and is linked to water because larvae develop in still water. Cholera is caused by a bacterium, spreads through water or food contaminated with faeces, and is linked to untreated sewage.',
    'Malaria travels by mosquito; cholera travels in water contaminated with faeces.',
    H2.two);
}

// 02 Transmission cycle
{
  let b = '';
  const H = [220, 400], N = [680, 230], I = [680, 540];
  b += circ(H[0], H[1], 85, C.cream, C.olive, 3) + person(H[0], H[1] + 38, 2, C.ink) + t(H[0], H[1] + 112, 'human', { size: 17, weight: 700, anchor: 'middle' });
  b += circ(N[0], N[1], 65, '#ffffff', C.ink, 3) + mosq(N[0] - 10, N[1], 2) + t(N[0], N[1] - 80, 'non-infected mosquito', { size: 16.5, weight: 700, anchor: 'middle' });
  b += circ(I[0], I[1], 65, '#fbf1ea', C.rust, 3) + mosq(I[0] - 10, I[1], 2, C.rust) + t(I[0], I[1] + 90, 'infected mosquito', { size: 16.5, weight: 700, anchor: 'middle', fill: C.rust });
  b += carrow(`M290,345 Q470,200 608,222`, { w: 4 });
  b += badge(376, 180, 16, '3', C.mustard) + tl(398, 176, ['feeds on an infected human:', 'picks up the parasite'], { size: 15.5, weight: 600 }, 19);
  b += carrow(`M${N[0]},300 L${I[0]},468`, { w: 4 });
  b += tl(N[0] + 16, 380, ['parasite develops', 'inside the mosquito'], { size: 15.5, weight: 600 }, 19);
  b += carrow(`M612,560 Q430,610 290,455`, { w: 4, color: C.rust, marker: 'ahR' });
  b += badge(300, 560, 16, '2', C.mustard) + tl(322, 586, ['bite passes Plasmodium', 'to the human'], { size: 15.5, weight: 600, fill: C.rust }, 19);
  b += rrect(40, 110, 300, 90, '#ffffff', C.panelEdge, 2.5, 12) + badge(66, 140, 16, '1', C.mustard) + tl(90, 146, ['Vector: female Anopheles', 'mosquito. Only females bite:', 'they need blood to make eggs.'], { size: 15.5 }, 20).replace('', '');
  b += panel(30, 660, 840, 90, '#eef5f4', C.tealDark);
  b += `<rect x="50" y="690" width="170" height="40" rx="6" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>`;
  for (let i = 0; i < 4; i++) b += path(`M${66 + i * 38},712 q6,-6 12,0 q6,6 12,0`, { stroke: C.ink, w: 2 });
  b += t(240, 698, 'Link to water: females lay eggs on still water (ponds, puddles, drains,', { size: 15.5, weight: 600 }) + t(240, 720, 'uncovered containers); larvae live in it until they become adults.', { size: 15.5, weight: 600 });
  b += t(450, 785, 'In people the parasite multiplies in the liver, then in red blood cells, causing fever and illness.', { size: 15.5, anchor: 'middle', fill: C.muted });
  add('02-malaria-cycle',
    svg(900, 810, 'How malaria spreads', b),
    'A cycle. 1: the vector is the female Anopheles mosquito, which needs blood to make eggs. 2: an infected mosquito passes the Plasmodium parasite to a human when it bites. 3: a non-infected mosquito picks up the parasite when it feeds on an infected human; the parasite develops inside it. Females lay eggs on still water, where larvae live.',
    'Human to mosquito and mosquito to human: the cycle needs people, mosquitoes and the parasite.',
    H2.cycle);
}

// 03 Which link each malaria strategy breaks
{
  let b = '';
  const groups = [
    ['Stop the bite', 'personal protection', C.cream, C.olive, ['Insecticide-treated bed nets: stop night-time bites and kill mosquitoes that land', 'Insect repellent on skin or clothing']],
    ['Fewer mosquitoes', 'vector control', '#eef5f4', C.tealDark, ['Cover or drain breeding areas: puddles, drains, containers', 'Spray insecticides over large areas', 'Release sterilised males: no offspring', 'Biological control: fish eat larvae']],
    ['Less infection in people', 'personal protection', '#e9eef6', C.blue, ['Vaccination for young children: less severe illness, not complete', 'Antimalarial drugs: prevent, or treat so people stop being a source of parasites']],
  ];
  let y = 110;
  groups.forEach(([h, sub, f, e, items]) => {
    const it = items.map((s) => wrap(s, 560, 16));
    const hh = 26 + it.reduce((a, l) => a + l.length * 20 + 10, 0) + 10;
    b += `<rect x="30" y="${y}" width="220" height="${hh}" rx="12" fill="${e}"/>` + t(140, y + hh / 2 - 4, h, { size: 18, weight: 700, anchor: 'middle', fill: '#ffffff' }) + t(140, y + hh / 2 + 20, sub, { size: 15, anchor: 'middle', fill: '#ffffff' });
    b += rrect(262, y, 608, hh, f, e, 2.5, 12);
    let yy = y + 32;
    it.forEach((L) => { b += t(282, yy, '•', { size: 16, weight: 700 }) + tl(298, yy, L, { size: 16 }, 20); yy += L.length * 20 + 10; });
    y += hh + 16;
  });
  b += t(450, y + 16, 'Every control strategy breaks one link in the transmission cycle.', { size: 17, weight: 700, anchor: 'middle' });
  add('03-malaria-strategies',
    svg(900, y + 44, 'Breaking the malaria cycle', b),
    'Malaria strategies grouped by the link they break. Stop the bite: insecticide-treated bed nets and repellent. Fewer mosquitoes: cover or drain breeding areas, spray insecticides, release sterilised males, biological control such as larva-eating fish. Less infection in people: vaccination of young children and antimalarial drugs.',
    'Stop the bite, cut the mosquito numbers, or cut infection in people.',
    H2.mal);
}

// 04 Cholera route and barriers
{
  let b = '';
  const nodes = [['Infected person’s faeces', 40], ['Water source or food', 330], ['Another person drinks or eats', 620]];
  nodes.forEach(([n, x]) => (b += rrect(x, 150, 240, 80, x === 40 ? '#fbf1ea' : x === 330 ? '#e9eef6' : C.cream, C.ink, 2.5, 12) + tl(x + 120, 150 + (wrap(n, 210, 17.5, true).length > 1 ? 34 : 46), wrap(n, 210, 17.5, true), { size: 17.5, weight: 700, anchor: 'middle' }, 22)));
  b += arrow(284, 190, 326, 190, { w: 5 }) + arrow(574, 190, 616, 190, { w: 5 });
  b += t(450, 128, 'the faeces-to-mouth route', { size: 17, weight: 600, anchor: 'middle', fill: C.muted });
  const bar = (x, y2) => `<rect x="${x - 8}" y="132" width="16" height="116" rx="4" fill="${C.tealDark}"/>`;
  b += bar(305) + bar(595);
  b += t(305, 270, 'A', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(595, 270, 'B', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(740, 270, 'C', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  const cards = [
    ['A', 'Keep faeces out', [['Handwashing', 'with soap after the toilet and before handling food'], ['Sanitation and sewage treatment', 'keeps human waste away from drinking water; removes or kills bacteria']]],
    ['B', 'Make water safe', [['Boiling', 'kills bacteria'], ['Chlorination', 'kills bacteria in treated supplies and keeps protecting water in pipes']]],
    ['C', 'Protect the person', [['Vaccination', 'oral cholera vaccine, often in outbreaks or high-risk areas such as camps for displaced people']]],
  ];
  cards.forEach(([k, h, items], i) => {
    const x = 30 + i * 285;
    b += panel(x, 290, 270, 310, '#eef5f4', C.tealDark) + badge(x + 30, 326, 17, k, C.mustard) + t(x + 56, 333, h, { size: 17.5, weight: 700, fill: C.tealDark });
    let yy = 372;
    items.forEach(([n, d]) => { const N = wrap(n, 235, 17, true); b += tl(x + 20, yy, N, { size: 17, weight: 700 }, 21); yy += (N.length - 1) * 21; const L = wrap(d, 235, 15.5); b += tl(x + 20, yy + 24, L, { size: 15.5 }, 20); yy += 24 + L.length * 20 + 22; });
  });
  b += t(450, 632, 'Cholera has no vector, so vector control does not apply.', { size: 16.5, anchor: 'middle', weight: 600, fill: C.rust });
  add('04-cholera-barriers',
    svg(900, 660, 'Blocking the cholera route', b),
    'Cholera passes from an infected person’s faeces into water or food and then into another person. Barrier A keeps faeces out of water through handwashing and sanitation with sewage treatment. Barrier B makes water safe by boiling or chlorination. C protects the person with oral cholera vaccine. Cholera has no vector.',
    'Keep faeces out of water, make water safe, or vaccinate the person.',
    H2.chol);
}

// 05 Malaria benefits and limitations
{
  let b = '';
  b += t(370, 132, 'Benefit', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(695, 132, 'Limitation', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  const rows = [
    ['Treated nets', 'cheap, simple, protects while sleeping', 'only at night in bed; nets tear; insecticide wears off; resistance'],
    ['Repellent', 'protects outdoors in the evening', 'must be reapplied; cost adds up'],
    ['Vaccination', 'reduces severe illness in children', 'partial; several doses and a supply chain'],
    ['Antimalarial drugs', 'treat and cure; fewer parasites in the community', 'cost; side effects; resistance'],
    ['Drain or cover sites', 'removes mosquitoes at source; no chemicals', 'impossible over huge wetlands; destroys habitats'],
    ['Insecticide spraying', 'kills large numbers quickly', 'harms pollinators; resistance; repeated cost'],
    ['Sterile males', 'targets only the mosquito species', 'expensive; slow to take effect'],
    ['Biological control', 'long-lasting, no chemicals', 'introduced predators may harm native species'],
  ];
  rows.forEach(([s, ben, lim], i) => {
    const y = 148 + i * 70;
    b += `<rect x="30" y="${y}" width="190" height="62" rx="10" fill="${i < 4 ? C.olive : C.tealDark}"/>` + tl(125, y + (wrap(s, 170, 16, true).length > 1 ? 27 : 37), wrap(s, 170, 16, true), { size: 16, weight: 700, anchor: 'middle', fill: '#ffffff' }, 19);
    const cell = (x, w, txt, f, e) => rrect(x, y, w, 62, f, e, 2, 10) + tl(x + 14, y + (wrap(txt, w - 28, 15).length > 1 ? 27 : 37), wrap(txt, w - 28, 15), { size: 15 }, 18);
    b += cell(230, 280, ben, '#eef5f4', C.tealDark) + cell(520, 350, lim, '#fbf1ea', C.rust);
  });
  b += rrect(30, 722, 18, 18, C.olive, C.olive, 1, 3) + t(56, 737, 'personal protection', { size: 15.5 }) + rrect(230, 722, 18, 18, C.tealDark, C.tealDark, 1, 3) + t(256, 737, 'vector control', { size: 15.5 });
  b += t(870, 737, 'Link each point to the scenario: ponds, poverty, climate.', { size: 15.5, anchor: 'end', fill: C.muted });
  add('05-malaria-weighed',
    svg(900, 760, 'Weighing malaria strategies', b),
    'A benefit and a limitation for each malaria strategy. Treated nets are cheap but only protect in bed at night and face resistance. Repellent must be reapplied. Vaccination gives partial protection. Drugs face cost and resistance. Draining breeding sites is impossible over huge wetlands. Spraying harms pollinators. Sterile males are expensive and slow. Biological control may harm native species.',
    'Every malaria strategy has a catch: resistance, cost, scale or harm to other species.',
    H2.bl);
}

// 06 Cholera benefits and limitations
{
  let b = '';
  b += t(345, 132, 'Benefit', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(690, 132, 'Limitation', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  const rows = [
    ['Handwashing', 'very cheap; also prevents other diseases', 'needs soap, clean water and behaviour change'],
    ['Sanitation and sewage treatment', 'removes the cause permanently', 'very high cost and long building time'],
    ['Boiling', 'simple; kills bacteria', 'needs fuel; burning wood adds to deforestation and indoor smoke'],
    ['Chlorination', 'treats large volumes; protects water in pipes', 'needs chemicals, trained staff and monitoring'],
    ['Cholera vaccination', 'rapid protection during outbreaks', 'not lifelong; does not fix the water supply'],
  ];
  rows.forEach(([s, ben, lim], i) => {
    const y = 148 + i * 78;
    b += `<rect x="30" y="${y}" width="190" height="68" rx="10" fill="${C.blue}"/>` + tl(125, y + (wrap(s, 170, 16, true).length > 1 ? 30 : 40), wrap(s, 170, 16, true), { size: 16, weight: 700, anchor: 'middle', fill: '#ffffff' }, 19);
    const cell = (x, w, txt, f, e) => rrect(x, y, w, 68, f, e, 2, 10) + tl(x + 14, y + (wrap(txt, w - 28, 15.5).length > 1 ? 30 : 40), wrap(txt, w - 28, 15.5), { size: 15.5 }, 19);
    b += cell(230, 230, ben, '#eef5f4', C.tealDark) + cell(470, 400, lim, '#fbf1ea', C.rust);
  });
  add('06-cholera-weighed',
    svg(900, 560, 'Weighing cholera strategies', b),
    'A benefit and a limitation for each cholera strategy. Handwashing is very cheap but needs soap, water and behaviour change. Sanitation and sewage treatment remove the cause permanently but cost a lot and take time. Boiling kills bacteria but needs fuel. Chlorination treats large volumes but needs chemicals and staff. Vaccination protects quickly but is not lifelong and does not fix the water supply.',
    'Sanitation fixes the cause but is slow and costly; quicker measures do not fix the water supply.',
    H2.bl);
}
