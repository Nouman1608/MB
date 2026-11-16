import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-geography-migration';
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

// 01 Naming migrants precisely
{
  const box = (x, y, w, h, txt, o = {}) => rrect(x, y, w, h, o.fill || '#ffffff', o.edge || C.ink, 2.5, 12) + tl(x + w / 2, y + h / 2 + 7 + (o.dy || 0) - ((wrap(txt, w - 24, o.size || 17, true).length - 1) * 11), wrap(txt, w - 24, o.size || 17, true), { size: o.size || 17, weight: 700, anchor: 'middle', fill: o.tf || C.ink }, 22);
  let s = box(300, 115, 300, 60, 'Why did they move?', { fill: C.ink, tf: '#ffffff' });
  s += arrow(370, 178, 220, 228, { w: 3.5 }) + arrow(530, 178, 680, 228, { w: 3.5 });
  s += tag(270, 205, 'by choice', { anchor: 'middle', bg: C.bg, op: 1, fill: C.tealDark }) + tag(630, 205, 'forced', { anchor: 'middle', bg: C.bg, op: 1, fill: C.rust });
  s += box(60, 232, 320, 64, 'Voluntary', { fill: C.tealLight, edge: C.tealDark }) + box(520, 232, 320, 64, 'Involuntary (forced)', { fill: '#f6e6dc', edge: C.rust });
  s += arrow(220, 300, 220, 340, { w: 3.5 }) + box(60, 344, 320, 112, 'Economic migrant', { fill: '#ffffff', edge: C.tealDark }) + t(220, 430, 'mainly for work or higher income', { size: 15.5, anchor: 'middle', fill: C.muted });
  s += arrow(680, 300, 680, 330, { w: 3.5 }) + box(560, 334, 240, 54, 'Crossed a border?');
  s += arrow(610, 392, 540, 432, { w: 3.5 }) + arrow(750, 392, 800, 432, { w: 3.5 }) + tag(560, 412, 'no', { anchor: 'middle', bg: C.bg, op: 1, size: 15 }) + tag(795, 405, 'yes', { anchor: 'middle', bg: C.bg, op: 1, size: 15 });
  s += box(420, 436, 230, 112, 'Internally displaced person (IDP)', { fill: C.cream, edge: C.olive }) + t(535, 532, 'stays in own country', { size: 15, anchor: 'middle', fill: C.muted });
  s += box(670, 436, 200, 112, 'Refugee', { fill: C.cream, edge: C.olive, dy: -24 }) + t(770, 514, 'fled persecution,', { size: 15, anchor: 'middle', fill: C.muted }) + t(770, 534, 'conflict or violence', { size: 15, anchor: 'middle', fill: C.muted });
  s += arrow(770, 552, 770, 584, { w: 3, dash: '7 5' }) + box(640, 588, 230, 100, 'Asylum seeker', { fill: '#ffffff', edge: C.olive }) + t(755, 670, 'applied; awaiting decision', { size: 15, anchor: 'middle', fill: C.muted });
  s += panel(30, 486, 360, 202, C.tealLight, C.tealDark) + t(50, 520, 'Also classify by', { size: 18, weight: 700, fill: C.tealDark }) + bullets(50, 552, ['Distance: internal or international', 'Time: temporary, seasonal or permanent', 'Direction: rural–urban, urban–rural, urban–urban'], 320, { size: 16, gap: 10 }).svg;
  add('01-naming-migrants',
    svg(900, 710, 'Which kind of migrant?', s),
    'A decision tree. Voluntary migrants moving mainly for work are economic migrants. Forced migrants who stay in their own country are internally displaced persons; those who cross a border because of persecution, conflict or violence are refugees, and those who have applied for refugee status and await a decision are asylum seekers. A side box lists other ways to classify: distance, time and direction.',
    'Ask: by choice or forced? Then: did they cross a border?',
    '## Key idea 1: classifying a migration');
}

// 02 Push, pull and intervening obstacles
{
  let s = card(30, 115, 290, 310, 'Source area', null, { fill: '#f6e6dc', edge: C.rust, ts: 21, tfill: C.rust }) + t(50, 175, 'PUSH factors', { size: 15, weight: 700, fill: C.muted });
  s += bullets(50, 205, ['Economic: unemployment, low farm incomes, land shortage', 'Social: poor schools and health care', 'Political: conflict, persecution', 'Environmental: drought, flooding, desertification'], 255, { size: 15.5, gap: 10 }).svg;
  s += card(580, 115, 290, 310, 'Destination', null, { fill: C.tealLight, edge: C.tealDark, ts: 21, tfill: C.tealDark }) + t(600, 175, 'PULL factors (perceived)', { size: 15, weight: 700, fill: C.muted });
  s += bullets(600, 205, ['Economic: jobs, higher wages, remittance potential', 'Social: better services, family already there', 'Political: safety, freedom', 'Environmental: reliable water, fewer hazards'], 255, { size: 15.5, gap: 10 }).svg;
  s += arrow(330, 200, 570, 200, { w: 6, color: C.ink });
  s += person(395, 190, 1.1, C.tealDark) + person(420, 190, 1.0, C.olive);
  s += t(450, 230, 'migrants: often young adults', { size: 15, anchor: 'middle', fill: C.muted });
  for (let k = 0; k < 5; k++) for (let r = 0; r < 3; r++) s += `<rect x="${400 + (r % 2) * 25}" y="${255 + k * 28}" width="${r === 2 ? 25 : 50}" height="28" fill="${C.rock}" stroke="${C.ink}" stroke-width="1.6" transform="translate(${(k % 2) * -12},0)"/>`;
  s += t(450, 410, 'Intervening', { size: 17, weight: 700, anchor: 'middle' }) + t(450, 430, 'obstacles', { size: 17, weight: 700, anchor: 'middle' });
  s += panel(30, 450, 840, 140, C.cream, C.olive) + t(55, 485, 'Obstacles stop many people moving:', { size: 17.5, weight: 700 }) + t(55, 511, 'cost of travel, distance, immigration laws, language, lack of information.', { size: 16.5 }) +
    t(55, 547, 'Pull factors are perceived: the city job hoped for can turn out', { size: 16.5 }) + t(55, 571, 'to be work in the informal sector.', { size: 16.5 });
  add('02-push-pull-obstacles',
    svg(900, 610, 'Push, pull and the obstacles in between', s),
    'A source area with push factors (unemployment, low incomes, land shortage, poor services, conflict, drought) and a destination with perceived pull factors (jobs, wages, services, family, safety, reliable water). Migrants, often young adults, move between them past a wall of intervening obstacles: cost, distance, immigration laws, language and lack of information.',
    'Push and pull explain why people want to move; obstacles explain why many do not.',
    '## Key idea 2: push factors, pull factors and obstacles');
}

// 03 Impacts on source and receiving areas
{
  let s = rrect(30, 115, 250, 100, '#f6e6dc', C.rust, 2.5, 14) + t(155, 158, 'SOURCE AREA', { size: 19, weight: 700, anchor: 'middle', fill: C.rust }) + t(155, 184, 'where migrants leave', { size: 15, anchor: 'middle', fill: C.muted });
  s += rrect(620, 115, 250, 100, C.tealLight, C.tealDark, 2.5, 14) + t(745, 158, 'RECEIVING AREA', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(745, 184, 'where they arrive', { size: 15, anchor: 'middle', fill: C.muted });
  s += arrow(290, 140, 610, 140, { w: 5 }) + t(450, 130, 'young adults, often men', { size: 15.5, weight: 700, anchor: 'middle' });
  s += arrow(610, 172, 290, 172, { w: 4, color: C.olive, marker: 'ahO' }) + t(450, 194, 'remittances', { size: 15.5, weight: 700, anchor: 'middle', fill: C.olive });
  s += arrow(610, 208, 290, 208, { w: 3, color: C.tealDark, marker: 'ahT', dash: '8 6' }) + t(450, 232, 'return migration: skills, savings, ideas', { size: 15, anchor: 'middle', fill: C.tealDark });
  const rows = [
    ['Economic +', 'Remittances support families and spending; less unemployment', 'Fills labour shortages, often in jobs locals avoid; migrants pay taxes'],
    ['Economic −', 'Brain drain: doctors, engineers and other skilled workers leave', 'Pressure on housing, school places, health care; some wage competition'],
    ['Demographic', 'Loses young adults: birth rate falls, population ages; gender imbalance', 'Gains young adults: can raise the birth rate and slow ageing'],
    ['Social and cultural', 'Families separated; women take on more farm and household work', 'Cultural diversity; possible tension, discrimination, language barriers'],
  ];
  rows.forEach(([h, a, b], i) => {
    const y = 262 + i * 104;
    s += rrect(30, y, 840, 92, i % 2 ? '#ffffff' : C.panel, C.panelEdge, 2, 10) + t(450, y + 24, h, { size: 15.5, weight: 700, anchor: 'middle', fill: C.muted });
    s += tl(48, y + 50, wrap(a, 360, 15.5), { size: 15.5 }, 20) + tl(470, y + 50, wrap(b, 380, 15.5), { size: 15.5 }, 20) + line(450, y + 34, 450, y + 84, { color: C.panelEdge, w: 2 });
  });
  add('03-migration-impacts',
    svg(900, 690, 'Migration changes both places', s),
    'Young adults move from the source area to the receiving area; remittances flow back, and return migrants bring skills, savings and ideas. A table compares impacts: remittances versus filled labour shortages; brain drain versus pressure on services; an ageing source population versus a younger receiving one; separated families versus cultural diversity and possible tension.',
    'Every impact has a source-area side and a receiving-area side.',
    '## Key idea 3: impacts on source and receiving areas');
}

// 04 Two case studies, schematic flows
{
  const node = (x, y, w, h, a, b, fill, edge) => rrect(x, y, w, h, fill, edge, 2.5, 12) + t(x + w / 2, y + h / 2 + (b ? -2 : 6), a, { size: 17, weight: 700, anchor: 'middle' }) + (b ? t(x + w / 2, y + h / 2 + 20, b, { size: 14.5, anchor: 'middle', fill: C.muted }) : '');
  let s = panel(30, 110, 840, 230) + t(55, 146, 'Voluntary, international: Pakistan → Gulf states', { size: 19, weight: 700, fill: C.tealDark });
  s += node(60, 180, 200, 70, 'Pakistan', 'source', '#f6e6dc', C.rust) + node(620, 180, 220, 70, 'Saudi Arabia, UAE', 'receiving', C.tealLight, C.tealDark);
  s += arrow(266, 202, 612, 202, { w: 8 }) + t(440, 192, 'workers on temporary contracts', { size: 15, anchor: 'middle', weight: 600 }) + arrow(612, 236, 266, 236, { w: 4, color: C.olive, marker: 'ahO' }) + t(440, 260, 'remittances', { size: 15, anchor: 'middle', weight: 700, fill: C.olive });
  s += tl(60, 290, ['Push: few well-paid jobs, fast-growing workforce', 'Pull: higher wages, oil-funded building'], { size: 15.5 }, 21) + tl(500, 290, ['Construction, transport, services', 'Limited rights; separate labour camps'], { size: 15.5 }, 21);
  s += panel(30, 356, 840, 380) + t(55, 392, 'Forced, international: Syrian refugees (from 2011)', { size: 19, weight: 700, fill: C.rust });
  s += node(330, 520, 180, 76, 'Syria', 'civil war', '#f6e6dc', C.rust);
  s += node(320, 410, 200, 58, 'Turkey', 'largest number', C.tealLight, C.tealDark) + arrow(420, 516, 420, 474, { w: 14, color: C.tealDark, marker: 'ahT' });
  s += node(80, 520, 170, 58, 'Lebanon', '', C.tealLight, C.tealDark) + arrow(326, 552, 256, 552, { w: 7, color: C.tealDark, marker: 'ahT' });
  s += node(330, 650, 180, 58, 'Jordan', '', C.tealLight, C.tealDark) + arrow(420, 600, 420, 644, { w: 7, color: C.tealDark, marker: 'ahT' });
  s += node(60, 412, 200, 76, 'Europe', 'notably Germany, 2015', C.tealLight, C.tealDark) + path('M330,530 Q270,520 230,494', { stroke: C.tealDark, w: 3, extra: 'marker-end="url(#ahT)"' });
  s += tl(570, 570, ['Push: conflict, bombing,', 'collapse of services, persecution', 'Source: loses working-age and', 'skilled people', 'Receiving: pressure on housing,', 'schools, health care in border areas'], { size: 15 }, 20);
  s += t(450, 760, 'Schematic: arrow width shows relative size, not exact numbers', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  add('04-migration-case-studies',
    svg(900, 780, 'Two international migrations', s),
    'Top: workers move from Pakistan to Saudi Arabia and the UAE on temporary contracts, pushed by few well-paid jobs and pulled by higher wages; remittances flow back. Bottom: from 2011 Syrians fled civil war, with the largest number going to Turkey, many others to Lebanon and Jordan and a smaller share on to Europe, notably Germany in 2015. Arrow widths are schematic.',
    'One voluntary and one forced flow: learn causes and impacts for each.',
    '## Case study material');
}

// 05 Worked example: net migration
{
  let s = panel(30, 110, 840, 270);
  s += t(55, 160, 'Arrivals', { size: 18, weight: 700 }) + `<rect x="190" y="138" width="${3600 / 5100 * 520}" height="36" rx="5" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + t(200 + 3600 / 5100 * 520, 163, '3,600', { size: 17, weight: 700 });
  s += t(55, 218, 'Departures', { size: 18, weight: 700 }) + `<rect x="190" y="196" width="520" height="36" rx="5" fill="${C.rust}" stroke="${C.ink}" stroke-width="2"/>` + t(720, 221, '5,100', { size: 17, weight: 700 });
  s += `<rect x="${190 + 3600 / 5100 * 520}" y="136" width="${520 - 3600 / 5100 * 520}" height="98" fill="none" stroke="${C.ink}" stroke-width="2" stroke-dasharray="6 5"/>`;
  s += rrect(55, 268, 380, 90, C.cream, C.olive, 2.5, 12) + t(75, 302, 'Net migration', { size: 16, weight: 700, fill: C.muted }) + t(75, 336, '3,600 − 5,100 = −1,500', { size: 20, weight: 700 });
  s += rrect(460, 268, 390, 90, C.cream, C.olive, 2.5, 12) + t(480, 302, 'Rate (population 150,000)', { size: 16, weight: 700, fill: C.muted }) + t(480, 336, '−1,500 ÷ 150,000 × 1,000 = −10 per 1,000', { size: 16.5, weight: 700 });
  s += t(450, 425, 'If most leavers are aged 18–35, suggest …', { size: 19, weight: 700, anchor: 'middle' });
  ['Falling birth rate in a few years', 'An ageing population', 'Labour shortages on farms', 'Less demand for local services'].forEach((c, i) => { s += card(30 + i * 213, 445, 201, 80, '', c, { bs: 16.5, bfill: C.ink, top: -10 }); });
  add('05-net-migration',
    svg(900, 550, 'Worked example: net migration', s, 'Illustrative data for one town in one year'),
    'Bars compare 3,600 arrivals with 5,100 departures. Net migration is 3,600 minus 5,100, which is minus 1,500; with a population of 150,000 the rate is minus 10 per 1,000. If most leavers are aged 18 to 35, likely consequences are a falling birth rate, an ageing population, farm labour shortages and less demand for local services.',
    'Net migration = arrivals − departures; divide by population × 1,000 for a rate.',
    '## Worked example: reading a migration table');
}
