import { C, svg, panel, t as t0, tl as tl0, arrow, path, badge as badge0 } from '../style.mjs';

// house minimum text size is 15: clamp every label drawn in this file
const MIN = 15;
const t = (x, y, s, o = {}) => t0(x, y, s, { ...o, size: Math.max(MIN, o.size || 18) });
const tl = (x, y, lines, opts = {}, lh = Math.max(MIN, opts.size || 18) * 1.3) => lines.map((s, i) => t(x, y + i * lh, s, opts)).join('');
const badge = (cx, cy, r, label, fill = C.mustard) => { const sz = Math.max(MIN, r); return `<circle cx="${cx}" cy="${cy}" r="${Math.max(r, sz * 0.85)}" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + t(cx, cy + sz * 0.36, label, { size: sz, weight: 700, anchor: 'middle' }); };

export const slug = 'cambridge-igcse-environmental-management-0680-managing-biodiversity';
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
  two: '## Two ideas to hold on to',
  ten: '## The ten strategies (5.3.1)',
  disc: '## Discussing benefits and limitations (5.3.2)',
  we1: "## Worked example 1: a corridor's effect",
  we2: '## Worked example 2: annotated "discuss" answer',
};
const blob = (cx, cy, rx, ry, fill = C.grass) => `<path d="M${cx - rx},${cy} C${cx - rx},${cy - ry * 1.1} ${cx - rx * 0.2},${cy - ry * 1.05} ${cx + rx * 0.3},${cy - ry * 0.95} C${cx + rx * 1.05},${cy - ry * 0.8} ${cx + rx * 1.05},${cy + ry * 0.4} ${cx + rx * 0.6},${cy + ry * 0.9} C${cx + rx * 0.1},${cy + ry * 1.2} ${cx - rx},${cy + ry * 1.0} ${cx - rx},${cy} Z" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>`;
const yes = (cx, cy) => circ(cx, cy, 15, C.tealDark, C.tealDark) + path(`M${cx - 7},${cy} l5,6 l10,-12`, { stroke: '#ffffff', w: 3.5 });
const no = (cx, cy) => circ(cx, cy, 15, C.rust, C.rust) + path(`M${cx - 6},${cy - 6} l12,12 M${cx + 6},${cy - 6} l-12,12`, { stroke: '#ffffff', w: 3.5 });
const part = (cx, cy) => circ(cx, cy, 15, '#ffffff', C.olive, 3) + `<path d="M${cx},${cy - 13.5} A13.5,13.5 0 0,1 ${cx},${cy + 13.5} Z" fill="${C.mustard}"/>`;

// 01 Biodiversity, in situ and ex situ
{
  let b = '';
  b += t(450, 132, 'Biodiversity = the variety of life in an area', { size: 20, weight: 700, anchor: 'middle' });
  b += pill(60, 150, 240, 48, 'species', { fill: C.tealLight, edge: C.tealDark }) + pill(330, 150, 240, 48, 'genes within them', { fill: C.tealLight, edge: C.tealDark }) + pill(600, 150, 240, 48, 'habitats', { fill: C.tealLight, edge: C.tealDark });
  b += t(450, 228, 'Genetic resources: genes in wild species that people may use, e.g. to breed crops that resist disease or drought.', { size: 15.5, anchor: 'middle', fill: C.muted });
  // in situ
  b += panel(30, 250, 410, 360, '#eef5f4', C.tealDark);
  b += t(235, 288, 'IN SITU', { size: 22, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(235, 313, 'protect the habitat where species live', { size: 16.5, anchor: 'middle' });
  b += `<rect x="60" y="335" width="350" height="150" rx="10" fill="#d8e3c6" stroke="${C.ink}" stroke-width="2"/>`;
  b += `<rect x="60" y="335" width="350" height="150" rx="10" fill="none" stroke="${C.tealDark}" stroke-width="4" stroke-dasharray="12 7"/>`;
  [[95, 472], [150, 455], [335, 462], [375, 476], [285, 450]].forEach(([x, y]) => (b += tree(x, y, 0.9)));
  b += circ(210, 455, 9, C.rust) + circ(238, 465, 7, C.olive) + t(235, 365, 'national park or reserve', { size: 15.5, weight: 600, anchor: 'middle' });
  b += tl(56, 520, ['+ saves every species in the habitat,', 'even unstudied ones'], { size: 16.5 }, 22) + tl(56, 580, ['e.g. national parks and reserves'], { size: 16.5, fill: C.tealDark, weight: 600 });
  // ex situ
  b += panel(460, 250, 410, 360, '#fbf6e2', C.olive);
  b += t(665, 288, 'EX SITU', { size: 22, weight: 700, anchor: 'middle', fill: C.olive }) + t(665, 313, 'keep species or seeds away from the wild', { size: 16.5, anchor: 'middle' });
  // zoo enclosure
  b += `<rect x="495" y="345" width="150" height="130" rx="8" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/>`;
  for (let x = 510; x < 645; x += 18) b += line(x, 345, x, 475, { w: 2, color: C.muted });
  b += circ(570, 440, 13, C.olive) + t(570, 498, 'zoo', { size: 15.5, weight: 600, anchor: 'middle' });
  // seed jar
  b += `<rect x="700" y="360" width="120" height="115" rx="12" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/><rect x="712" y="345" width="96" height="18" rx="4" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>`;
  for (let i = 0; i < 12; i++) b += `<ellipse cx="${720 + (i % 4) * 26}" cy="${395 + Math.floor(i / 4) * 26}" rx="8" ry="5" fill="${C.olive}"/>`;
  b += t(760, 498, 'seed bank', { size: 15.5, weight: 600, anchor: 'middle' });
  b += tl(486, 530, ['− main limitation: does not save', 'the habitat'], { size: 16.5 }, 22) + tl(486, 580, ['e.g. zoos and seed banks'], { size: 16.5, fill: C.olive, weight: 600 });
  add('01-in-situ-ex-situ',
    svg(900, 640, 'Biodiversity: protect it where, and how?', b),
    'Biodiversity is the variety of species, of genes within them and of habitats. In situ conservation, such as a national park, protects the whole habitat where species live. Ex situ conservation, such as zoos and seed banks, keeps species or seeds away from the wild, but does not save the habitat.',
    'In situ protects the habitat; ex situ keeps species or seeds safe but leaves the habitat unprotected.',
    H2.two);
}

// 02 The ten strategies grouped
{
  let b = '';
  const rows = [
    ['Earn from wildlife', 'without using it up', C.cream, C.olive, [[1, 'Sustainable harvesting', 'quotas, closed seasons, size limits'], [2, 'Sustainable forestry', 'selective felling, replanting'], [7, 'Ecotourism', 'visitors pay to see wildlife']]],
    ['Protect habitats', 'in situ', C.tealLight, C.tealDark, [[3, 'National parks and reserves', 'areas protected by law'], [4, 'Wildlife corridors', 'strips of habitat link patches']]],
    ['Keep away from', 'the wild: ex situ', '#fbf6e2', C.olive, [[5, 'Seed banks', 'seeds dried and stored cold'], [6, 'Zoos and captive breeding', 'breed, sometimes release']]],
    ['Control trade', 'in animals', '#fbf1ea', C.rust, [[8, 'International cooperation', 'against illegal animal trade'], [9, 'Regulation of trade', 'CITES (1973): lists, permits']]],
    ['Set priorities', '', '#eef5f4', C.tealDark, [[10, 'Classify by threat level', 'threatened, endangered, extinct; IUCN Red List']]],
  ];
  let y = 110;
  for (const [g1, g2, fill, edge, items] of rows) {
    const rh = items.length === 3 ? 122 : 100;
    b += `<rect x="30" y="${y}" width="190" height="${rh}" rx="12" fill="${edge}"/>`;
    b += t(125, y + rh / 2 + (g2 ? -6 : 6), g1, { size: 18, weight: 700, anchor: 'middle', fill: '#ffffff' }) + (g2 ? t(125, y + rh / 2 + 18, g2, { size: 16, anchor: 'middle', fill: '#ffffff' }) : '');
    const n = items.length, gap = 12, w = (870 - 236 - (n - 1) * gap) / n;
    items.forEach(([num, name, desc], i) => {
      const x = 236 + i * (w + gap);
      b += `<rect x="${x}" y="${y}" width="${w}" height="${rh}" rx="12" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>`;
      b += badge(x + 26, y + 30, 16, String(num), '#ffffff');
      const nl = wrap(name, w - 64, 17, true);
      b += tl(x + 52, y + 36, nl, { size: 17, weight: 700 }, 21);
      const dl = wrap(desc, w - 30, 15.5);
      b += tl(x + 16, y + 36 + nl.length * 21 + 6, dl, { size: 15.5, fill: C.muted }, 19);
    });
    y += rh + 14;
  }
  add('02-ten-strategies',
    svg(900, y + 16, 'Ten strategies for conserving biodiversity', b),
    'The ten syllabus strategies sorted by how they work. Earning from wildlife without using it up: sustainable harvesting, sustainable forestry, ecotourism. Protecting habitats in situ: national parks and reserves, wildlife corridors. Keeping species away from the wild: seed banks, zoos and captive breeding. Controlling trade: international cooperation, regulation through CITES. Setting priorities: classifying species by threat level.',
    'The ten strategies work in five ways: earn sustainably, protect habitats, store ex situ, control trade, set priorities.',
    H2.ten);
}

// 03 Captive breeding sequence
{
  let b = '';
  const steps = [['1', 'Capture', 'take in the last wild individuals'], ['2', 'Breed', 'in zoos or breeding centres; keep records to avoid inbreeding'], ['3', 'Release', 'offspring go back into the wild']];
  steps.forEach(([n, h, d], i) => {
    const x = 30 + i * 290;
    b += panel(x, 120, 260, 150, i === 1 ? C.cream : C.panel, i === 1 ? C.olive : C.panelEdge) + badge(x + 32, 155, 20, n, C.mustard) + t(x + 64, 163, h, { size: 22, weight: 700 });
    b += tl(x + 22, 200, wrap(d, 220, 16.5), { size: 16.5, fill: C.muted }, 22);
    if (i < 2) b += arrow(x + 263, 188, x + 286, 188, { w: 4 });
  });
  b += panel(30, 290, 840, 90, '#eef5f4', C.tealDark);
  b += t(60, 326, 'Release only works if a safe habitat still exists.', { size: 19, weight: 700, fill: C.tealDark });
  b += t(60, 356, 'So captive breeding is not a full solution on its own.', { size: 17 });
  b += panel(30, 400, 840, 110, C.panel, C.panelEdge);
  b += t(60, 436, 'Example: the California condor', { size: 19, weight: 700 });
  b += t(60, 466, 'The last wild birds were captured in the 1980s and bred in captivity;', { size: 17 });
  b += t(60, 492, 'their offspring were released.', { size: 17 });
  b += t(30, 550, 'Benefit', { size: 19, weight: 700, fill: C.tealDark }) + t(460, 550, 'Limitations', { size: 19, weight: 700, fill: C.rust });
  b += bullets(30, 580, ['rescues species with very few individuals left', 'zoos raise public awareness and funds'], 400, { size: 16.5 }).svg;
  b += bullets(460, 580, ['expensive', 'small captive populations have limited genetic variety', 'captive-bred animals may struggle in the wild'], 410, { size: 16.5 }).svg;
  add('03-captive-breeding',
    svg(900, 705, 'Zoos and captive breeding', b),
    'Three steps: capture the last wild individuals, breed them in zoos or breeding centres keeping records to avoid inbreeding, and release offspring. The California condor was saved this way after the last wild birds were captured in the 1980s. Release only works if safe habitat remains; the method is expensive and captive populations have limited genetic variety.',
    'Captive breeding can rescue a species, but only if safe habitat survives for release.',
    H2.ten);
}

// 04 Threat levels
{
  let b = '';
  const y = 170;
  b += `<defs><linearGradient id="risk" x1="0" x2="1"><stop offset="0" stop-color="${C.cream}"/><stop offset="1" stop-color="${C.rust}"/></linearGradient></defs>`;
  b += `<path d="M60,${y} L800,${y} L800,${y - 18} L850,${y + 14} L800,${y + 46} L800,${y + 28} L60,${y + 28} Z" fill="url(#risk)" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>`;
  b += t(60, y - 18, 'risk of extinction increases →', { size: 17, weight: 700, fill: C.muted });
  const lv = [['Threatened', 'numbers or habitat are declining; at risk of extinction if the threats continue'], ['Endangered', 'very high risk of extinction in the near future; usually few individuals or a small range left'], ['Extinct', 'no living individuals remain']];
  lv.forEach(([h, d], i) => {
    const x = 30 + i * 285, cx = x + 132;
    b += circ(cx, y + 14, 12, i === 2 ? C.ink : '#ffffff', C.ink, 3);
    b += line(cx, y + 30, cx, y + 60, { w: 2.5 });
    b += panel(x, y + 60, 265, 190, i === 2 ? '#e8ecef' : C.panel, i === 0 ? C.olive : i === 1 ? C.rust : C.ink);
    b += t(cx, y + 98, h, { size: 22, weight: 700, anchor: 'middle', fill: i === 0 ? C.olive : i === 1 ? C.rust : C.ink });
    b += tl(cx, y + 132, wrap(d, 230, 16.5), { size: 16.5, anchor: 'middle' }, 22);
  });
  b += panel(30, 460, 840, 170, C.cream, C.olive);
  b += t(60, 498, 'The IUCN Red List classifies species by their risk of extinction.', { size: 19, weight: 700 });
  b += t(60, 534, 'Benefit', { size: 17, weight: 700, fill: C.tealDark }) + tl(160, 534, ['shows which species need action most urgently, so', 'scarce money goes where it is needed'], { size: 17 }, 23);
  b += t(60, 592, 'Limitation', { size: 17, weight: 700, fill: C.rust }) + tl(160, 592, ['many species have never been surveyed, and a label', 'alone does not protect anything'], { size: 17 }, 23);
  add('04-threat-levels',
    svg(900, 660, 'Classifying species by threat level', b),
    'An arrow of increasing extinction risk runs through three levels. Threatened: numbers or habitat are declining. Endangered: a very high risk of extinction in the near future, with few individuals or a small range. Extinct: no living individuals remain. The IUCN Red List uses this kind of classification to direct scarce money, but a label alone protects nothing.',
    'Threatened, endangered, extinct: the label directs action but does not protect anything by itself.',
    H2.ten);
}

// 05 Comparison matrix
{
  let b = panel(30, 110, 840, 470);
  const cx = [60, 370, 520, 660];
  b += t(cx[0], 150, 'Strategy', { size: 17, weight: 700, fill: C.muted }) + t(cx[1], 142, 'Protects', { size: 17, weight: 700, fill: C.muted, anchor: 'middle' }) + t(cx[1], 162, 'habitat?', { size: 17, weight: 700, fill: C.muted, anchor: 'middle' });
  b += t(cx[2], 142, 'Keeps genetic', { size: 17, weight: 700, fill: C.muted, anchor: 'middle' }) + t(cx[2], 162, 'variety?', { size: 17, weight: 700, fill: C.muted, anchor: 'middle' }) + t(cx[3], 150, 'Main weakness', { size: 17, weight: 700, fill: C.muted });
  const rows = [
    ['National parks and reserves', yes, 'Yes', yes, 'Yes', 'Funding and enforcement'],
    ['Wildlife corridors', part, 'Partly', yes, 'Yes, by linking', 'Uses land'],
    ['Seed banks', no, 'No', yes, 'Yes, for plants', 'No wild protection'],
    ['Zoos and captive breeding', no, 'No', part, 'Limited', 'Cost; habitat must exist'],
    ['Trade regulation', no, 'No', part, 'Indirectly', 'Smuggling'],
  ];
  rows.forEach(([s, h, hl, g, gl, w], i) => {
    const y = 180 + i * 78;
    if (i % 2 === 0) b += `<rect x="40" y="${y}" width="820" height="78" fill="#f1f5f4"/>`;
    b += t(cx[0], y + 45, s, { size: 18, weight: 700 });
    b += h(cx[1], y + 30) + t(cx[1], y + 66, hl, { size: 15, anchor: 'middle', fill: C.muted });
    b += g(cx[2], y + 30) + t(cx[2], y + 66, gl, { size: 15, anchor: 'middle', fill: C.muted });
    b += tl(cx[3], y + 45 - (w.length > 22 ? 10 : 0), w.length > 22 ? wrap(w, 190, 16.5) : [w], { size: 16.5 }, 21);
  });
  b += t(450, 620, 'No single strategy is enough. Argue for a combination, for example:', { size: 18, weight: 600, anchor: 'middle' });
  const combo = [['reserve', C.tealLight, C.tealDark], ['linked by corridors', C.tealLight, C.tealDark], ['funded by ecotourism', C.cream, C.olive], ['backed by trade laws', '#fbf1ea', C.rust]];
  let x = 51;
  combo.forEach(([l, f, e], i) => { const w = [120, 190, 210, 200][i]; b += pill(x, 640, w, 48, l, { fill: f, edge: e, size: 16.5 }); if (i < 3) b += t(x + w + 13, 672, '+', { size: 24, weight: 700, anchor: 'middle' }); x += w + 26; });
  add('05-strategy-comparison',
    svg(900, 715, 'Comparing five strategies', b),
    'A comparison grid. National parks protect habitat and genetic variety but need funding and enforcement. Corridors partly protect habitat and keep variety by linking populations but use land. Seed banks keep plant genes but give no wild protection. Zoos keep limited variety, cost a lot and need habitat for release. Trade regulation helps variety only indirectly and suffers from smuggling. A combined approach is shown: reserve, corridors, ecotourism funding and trade laws.',
    'Only habitat protection does both jobs; the best answers argue for a combination.',
    H2.disc);
}

// 06 Corridor worked example
{
  let b = '';
  const scene = (x, title, linked) => {
    let s = panel(x, 110, 410, 300, C.panel, C.panelEdge) + t(x + 205, 145, title, { size: 20, weight: 700, anchor: 'middle' });
    s += `<rect x="${x + 20}" y="165" width="370" height="225" rx="8" fill="${C.sand}" opacity="0.7"/>`;
    for (let r = 175; r < 390; r += 18) s += line(x + 25, r, x + 385, r, { color: '#dccb8a', w: 1.5 });
    if (linked) s += `<path d="M${x + 150},${272} C${x + 195},${250} ${x + 215},${305} ${x + 265},${285}" fill="none" stroke="${C.ink}" stroke-width="26" stroke-linecap="round"/><path d="M${x + 150},${272} C${x + 195},${250} ${x + 215},${305} ${x + 265},${285}" fill="none" stroke="${C.grass}" stroke-width="21" stroke-linecap="round"/>`;
    s += blob(x + 105, 275, 62, 55) + blob(x + 300, 285, 50, 45);
    return s;
  };
  b += scene(30, 'Before: two separate patches', false) + scene(460, 'Five years after a corridor', true);
  b += tag(135, 283, '40', { size: 22, anchor: 'middle' }) + tag(330, 293, '25', { size: 22, anchor: 'middle' });
  b += tag(665, 380, '91 across both patches', { size: 18, anchor: 'middle' });
  b += tag(675, 236, 'corridor', { size: 16, anchor: 'middle', fill: C.tealDark });
  b += t(840, 400, 'farmland', { size: 15, anchor: 'end', fill: C.olive, italic: true }) + t(410, 400, 'farmland', { size: 15, anchor: 'end', fill: C.olive, italic: true });
  b += panel(30, 430, 520, 170, C.cream, C.olive);
  b += tl(56, 470, ['Start = 40 + 25 = 65', 'Increase = 91 − 65 = 26', '% increase = 26 ÷ 65 × 100 = 40%'], { size: 19, weight: 700 }, 34);
  b += t(56, 578, 'invented data: a small mammal', { size: 15, fill: C.muted, italic: true });
  b += panel(570, 430, 300, 170, '#eef5f4', C.tealDark);
  b += t(592, 466, 'Was it the corridor?', { size: 18, weight: 700, fill: C.tealDark });
  b += tl(592, 496, wrap('A mild winter could also raise numbers. Survey a similar unlinked patch to compare.', 258, 16.5), { size: 16.5 }, 22);
  add('06-corridor-worked-example',
    svg(900, 630, 'Worked example: does a corridor help?', b),
    'Plan view of farmland with two woodland patches holding 40 and 25 small mammals. Five years after a corridor of trees joins them, 91 are counted across both. The increase is 26 on 65, or 40%. A similar unlinked patch would show whether the corridor caused the rise or a mild winter did.',
    'From 65 to 91 is a 40% rise, but a comparison patch is needed to prove the corridor caused it.',
    H2.we1);
}

// 07 Anatomy of a discuss answer
{
  let b = '';
  const steps = ['what it does', 'benefit + reason', 'limitation + reason', 'judgement'];
  steps.forEach((s, i) => { b += pill(30 + i * 216, 112, 192, 46, s, { fill: i === 3 ? C.mustard : '#ffffff', edge: C.ink, size: 16.5 }); if (i < 3) b += arrow(30 + i * 216 + 194, 135, 30 + i * 216 + 213, 135, { w: 3 }); });
  b += t(450, 194, 'Ecotourism, 4 marks: how the model answer scores', { size: 19, weight: 700, anchor: 'middle' });
  const rows = [
    ['Benefit', 'Visitors bring money, which can pay for rangers and habitat protection.', C.tealLight, C.tealDark, '1'],
    ['Benefit', 'Local jobs give communities a reason to protect wildlife instead of hunting it or clearing forest.', C.tealLight, C.tealDark, '1'],
    ['Limitation', 'Large numbers of visitors can disturb breeding animals and erode paths.', '#fbf1ea', C.rust, '1'],
    ['Limitation', 'Income depends on tourism, so a fall in visitors can leave conservation without funding.', '#fbf1ea', C.rust, '1'],
    ['Judgement', 'Works best when visitor numbers are limited and income goes to local people.', C.cream, C.olive, ''],
  ];
  rows.forEach(([lab, txt, f, e, m], i) => {
    const y = 214 + i * 86;
    b += `<rect x="30" y="${y}" width="150" height="72" rx="12" fill="${e}"/>` + t(105, y + 43, lab, { size: 18, weight: 700, anchor: 'middle', fill: '#ffffff' });
    b += `<rect x="190" y="${y}" width="${m ? 600 : 680}" height="72" rx="12" fill="${f}" stroke="${e}" stroke-width="2.5"/>`;
    const L = wrap(txt, 560, 16.5);
    b += tl(210, y + (L.length > 1 ? 30 : 42), L, { size: 16.5 }, 22);
    if (m) b += circ(830, y + 36, 26, C.mustard) + t(830, y + 43, `[${m}]`, { size: 18, weight: 700, anchor: 'middle' });
  });
  b += t(450, 668, 'Two benefits and two limitations, each with a reason, then a short judgement.', { size: 17, anchor: 'middle', fill: C.muted });
  add('07-discuss-answer',
    svg(900, 695, 'How to build a "discuss" answer', b),
    'Four steps: say what the strategy does, give a benefit with a reason, a limitation with a reason, and a judgement. The ecotourism model answer earns four marks from two benefits (money for rangers; local jobs) and two limitations (disturbance and erosion; dependence on tourism income), then ends with a judgement.',
    'Each benefit or limitation needs its reason to earn the mark; finish with a judgement.',
    H2.we2);
}
