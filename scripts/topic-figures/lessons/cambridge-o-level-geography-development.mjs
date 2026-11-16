import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-geography-development';
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
// ---- end helpers ----

// 01 HDI as a composite and why one indicator is not enough
{
  const ins = [['Life expectancy', 'health'], ['Education', 'knowledge'], ['Income', 'standard of living']];
  let s = '';
  ins.forEach(([a, b], i) => {
    const y = 130 + i * 86;
    s += rrect(40, y, 290, 66, i === 2 ? C.cream : C.tealLight, C.ink, 2.5, 33) + t(185, y + 30, a, { size: 19, weight: 700, anchor: 'middle' }) + t(185, y + 53, b, { size: 15.5, anchor: 'middle', fill: C.muted });
    s += arrow(336, y + 33, 488, 248, { w: 3.5 });
  });
  s += rrect(495, 200, 220, 96, C.ink, C.ink, 2.5, 14) + t(605, 240, 'HDI', { size: 26, weight: 700, anchor: 'middle', fill: '#ffffff' }) + t(605, 272, 'composite index', { size: 16, anchor: 'middle', fill: '#ffffff' });
  s += line(500, 352, 840, 352, { w: 4 }) + line(500, 340, 500, 364, { w: 3 }) + line(840, 340, 840, 364, { w: 3 }) +
    t(500, 392, '0', { size: 18, weight: 700, anchor: 'middle' }) + t(840, 392, '1', { size: 18, weight: 700, anchor: 'middle' }) + t(670, 392, 'a value from 0 to 1', { size: 16, anchor: 'middle', fill: C.muted }) +
    arrow(605, 300, 605, 340, { w: 3 });
  s += t(450, 460, 'Why no single indicator is enough', { size: 22, weight: 700, anchor: 'middle' });
  s += card(30, 480, 410, 108, 'Rich from oil exports', 'High GNP per capita, yet literacy among women can be low.', { edge: C.olive, fill: C.cream, ts: 19 }) +
    card(460, 480, 410, 108, 'Modest income', 'Yet high life expectancy, thanks to good primary health care.', { edge: C.tealDark, fill: C.tealLight, ts: 19 });
  s += t(450, 625, 'Still national averages, and leaves out factors such as political freedom.', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  add('01-hdi-composite',
    svg(900, 650, 'One number or three? The HDI', s),
    'Life expectancy, education and income feed into the Human Development Index, a composite value from 0 to 1. Below, two cases show why one indicator misleads: an oil-rich country with high GNP per capita but low literacy among women, and a modest-income country with high life expectancy from good primary health care.',
    'A composite index reduces the distortion of any one measure.',
    '## Indicators: what each one tells you');
}

// 02 Worked example: P, Q and R compared
{
  const data = [
    ['GNP per capita (US$)', 45000, [45000, 12000, 1500], (v) => v.toLocaleString('en-GB')],
    ['Life expectancy (years)', 90, [82, 76, 62], (v) => String(v)],
    ['Adult literacy (%)', 100, [99, 94, 55], (v) => String(v)],
  ];
  const cols = [C.tealDark, C.teal, C.mustard];
  let s = '', y = 120;
  data.forEach(([h, max, vals, fmt], g) => {
    s += t(40, y + 20, h, { size: 19, weight: 700 });
    vals.forEach((v, i) => {
      const yy = y + 36 + i * 40, w = Math.max(4, (520 * v) / max);
      s += t(70, yy + 22, 'PQR'[i], { size: 18, weight: 700, anchor: 'middle' }) + `<rect x="95" y="${yy}" width="${w}" height="30" rx="4" fill="${cols[i]}" stroke="${C.ink}" stroke-width="2"/>` + t(95 + w + 10, yy + 21, fmt(v), { size: 16.5, weight: 600 });
    });
    y += 175;
  });
  s += card(640, 212, 230, 86, 'P is 30 times R', '45,000 vs 1,500 US$', { fill: C.cream, edge: C.olive, ts: 18.5, bs: 16 });
  s += card(640, 382, 230, 86, '82 vs 62 years', 'P lives 20 years longer than R', { fill: C.cream, edge: C.olive, ts: 18.5, bs: 16 });
  s += panel(30, 650, 840, 112, C.tealLight, C.tealDark) + t(55, 688, 'Q earns about a quarter of P’s income …', { size: 19, weight: 700 }) +
    t(55, 718, '… yet its life expectancy is only 6 years lower. Health care can improve', { size: 17, fill: C.ink }) + t(55, 742, 'faster than income at middle levels of development.', { size: 17, fill: C.ink });
  add('02-comparing-countries',
    svg(900, 790, 'Compare with calculations, not lists', s, 'Illustrative countries P, Q and R from the worked example'),
    'Bar charts for three illustrative countries. GNP per capita: P 45,000, Q 12,000, R 1,500 US dollars, so P is 30 times R. Life expectancy: 82, 76 and 62 years, a 20-year gap between P and R. Adult literacy: 99, 94 and 55 per cent. Q has about a quarter of P’s income but only 6 years’ lower life expectancy.',
    'Turn figures into comparisons: “30 times”, “20 years longer”.',
    '## Worked example 1: comparing countries with data');
}

// 03 Core and periphery
{
  let s = `<rect x="30" y="110" width="510" height="480" rx="14" fill="${C.teal}"/>`;
  s += `<path d="M60,210 Q70,135 190,132 L410,138 Q478,146 488,230 L492,470 Q486,560 380,568 L150,566 Q66,560 60,460 Z" fill="#d8e3c6" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  s += `<ellipse cx="410" cy="345" rx="78" ry="110" fill="${C.cream}" stroke="${C.olive}" stroke-width="3" stroke-dasharray="9 6"/>`;
  s += t(410, 285, 'CORE', { size: 20, weight: 700, anchor: 'middle', fill: C.olive });
  s += `<path d="M395,318 l6,14 l15,1 l-12,9 l4,15 l-13,-8 l-13,8 l4,-15 l-12,-9 l15,-1 z" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` + t(410, 378, 'capital', { size: 15, weight: 600, anchor: 'middle' });
  s += rrect(470, 395, 50, 22, '#ffffff', C.ink, 2, 4) + t(495, 440, 'port', { size: 15, weight: 600, anchor: 'middle' });
  s += factory(375, 425, 0.6) + house(420, 405, 0.7);
  s += t(165, 315, 'PERIPHERY', { size: 20, weight: 700, anchor: 'middle', fill: C.muted }) + house(110, 230) + house(220, 470) + house(110, 500, 0.8) + house(250, 210, 0.8);
  s += arrow(200, 255, 322, 315, { color: C.rust, w: 5, marker: 'ahR' }) + arrow(200, 400, 322, 370, { color: C.rust, w: 5, marker: 'ahR' });
  s += tag(215, 432, 'young workers', { fill: C.rust, bg: '#d8e3c6', op: 1, anchor: 'middle' }) + tag(215, 451, 'migrate to the core', { fill: C.rust, bg: '#d8e3c6', op: 1, weight: 400, anchor: 'middle' });
  s += t(285, 615, 'Schematic country, not to scale', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  const steps = ['Markets and ports already exist', 'Investment and infrastructure go there', 'Jobs pull in young workers', 'The core grows; the periphery lags'];
  steps.forEach((st, i) => { const y = 130 + i * 112; s += rrect(565, y, 270, 76, i === 3 ? C.cream : '#ffffff', C.ink, 2.5, 12) + tl(700, y + 32 + (wrap(st, 255, 17, true).length === 1 ? 10 : 0), wrap(st, 255, 17, true), { size: 17, weight: 700, anchor: 'middle' }, 22); if (i < 3) s += arrow(700, y + 79, 700, y + 108, { w: 3.5 }); });
  s += path(`M835,504 Q862,504 862,470 L862,200 Q862,168 840,168`, { w: 3.5, stroke: C.tealDark, extra: 'stroke-dasharray="9 7" marker-end="url(#ahT)"' });
  s += t(700, 600, 'the cycle reinforces itself', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 700 });
  const ex = [['Brazil', 'south-east (São Paulo, Rio) ahead of the north-east'], ['China', 'eastern coastal provinces grew faster than the interior'], ['Urban–rural gap', 'also an inequality within one country']];
  ex.forEach(([a, b], i) => { s += card(30 + i * 283, 640, 272, 118, a, b, { ts: 18.5, bs: 15.5 }); });
  add('03-core-periphery',
    svg(900, 785, 'Why wealth gathers in a core region', s),
    'A schematic country with a core region around the capital and a port on the coast, and a periphery of scattered rural houses. Young workers migrate from the periphery to the core. Beside it a cycle: markets and ports already exist, investment and infrastructure go there, jobs draw young workers in, and the core grows while the periphery lags. Examples: south-east versus north-east Brazil, coastal versus interior China, and urban–rural gaps.',
    'Investment follows existing markets, workers follow investment, and the gap widens.',
    '## Inequality between and within countries');
}

// 04 Why employment shifts between sectors
{
  const st = [
    ['1', 'Low development', 'Primary dominates', ['Most people farm, largely for subsistence', 'Little capital or technology'], C.mustard],
    ['2', 'Industrialising', 'Secondary grows', ['Machines on farms release labour', 'Factory jobs pay more, so workers move', 'Investment, often from TNCs, builds factories'], C.teal],
    ['3', 'High development', 'Tertiary and quaternary', ['Rising incomes create demand for services', 'Manufacturing automated or moved abroad (deindustrialisation)'], C.tealDark],
  ];
  let s = '';
  st.forEach(([n, h, sub, items, col], i) => {
    const x = 30 + i * 290;
    s += panel(x, 115, 260, 340) + `<rect x="${x}" y="115" width="260" height="14" rx="7" fill="${col}"/>` + badge(x + 36, 168, 20, n, C.cream) +
      t(x + 66, 162, h, { size: 19, weight: 700 }) + t(x + 66, 186, sub, { size: 15.5, weight: 600, fill: C.tealDark });
    s += line(x + 20, 210, x + 240, 210, { color: C.panelEdge, w: 2 });
    s += bullets(x + 22, 244, items, 222, { size: 16.5, gap: 12 }).svg;
    if (i < 2) s += arrow(x + 264, 285, x + 286, 285, { w: 3.5 });
  });
  s += panel(30, 475, 840, 72, C.cream, C.olive) + t(450, 518, 'Explain = the cause of the change + its effect on employment', { size: 19, weight: 700, anchor: 'middle' });
  add('04-why-sectors-shift',
    svg(900, 572, 'Why jobs move from sector to sector', s),
    'Three stages. Low development: most people work in the primary sector, largely subsistence farming, with little capital or technology. Industrialising: farm machinery releases labour, factory jobs pay more and TNC investment builds factories, so the secondary sector grows. High development: rising incomes create demand for services and manufacturing is automated or moved abroad, so tertiary and quaternary jobs dominate.',
    'Each shift has a cause: give it, then its effect on jobs.',
    '## Sectors and employment structure');
}

// 05 Globalisation: drivers and impacts
{
  const drv = [['Transport', 'container ships, cheaper air freight'], ['ICT', 'internet runs firms worldwide'], ['TNCs', 'lower costs, new markets'], ['Trade agreements', 'tax incentives for investors']];
  let s = t(30, 136, 'Drivers', { size: 19, weight: 700, fill: C.muted });
  drv.forEach(([a, b], i) => { const x = 30 + i * 213; s += card(x, 150, 201, 124, a, b, { ts: 18.5, bs: 15.5 }); s += arrow(x + 100, 278, 450 + (x + 100 - 450) * 0.35, 308, { w: 3 }); });
  s += rrect(150, 310, 600, 80, C.ink, C.ink, 2.5, 14) + t(450, 342, 'Globalisation', { size: 23, weight: 700, anchor: 'middle', fill: '#ffffff' }) +
    t(450, 371, 'connection and interdependence: trade, investment, migration, information', { size: 15.5, anchor: 'middle', fill: '#ffffff' });
  s += arrow(330, 390, 240, 428, { w: 3.5 }) + arrow(570, 390, 660, 428, { w: 3.5 });
  const pos = ['Jobs and investment', 'Skills and technology transferred', 'Cheaper goods', 'Export earnings'];
  const neg = ['Low wages, poor conditions in some factories', 'Profits leave the host country', 'Local firms out-competed', 'Job losses when factories relocate', 'Environmental damage'];
  s += panel(30, 432, 410, 262, C.tealLight, C.tealDark) + t(55, 470, '+ Positives', { size: 21, weight: 700, fill: C.tealDark });
  s += bullets(55, 506, pos, 370, { size: 17 }).svg;
  s += panel(460, 432, 410, 262, '#f6e6dc', C.rust) + t(485, 470, '– Negatives', { size: 21, weight: 700, fill: C.rust });
  s += bullets(485, 506, neg, 370, { size: 17 }).svg;
  s += t(450, 728, 'Weigh them: who gains, who loses, and at what scale?', { size: 18, weight: 700, anchor: 'middle' });
  add('05-globalisation',
    svg(900, 760, 'Globalisation: what drives it, what it does', s),
    'Four drivers (transport, information and communication technology, TNCs, and trade agreements) feed into globalisation, the growing connection and interdependence of economies through trade, investment, migration and information. Positives: jobs and investment, skills and technology, cheaper goods, export earnings. Negatives: low wages in some factories, profits leaving, local firms out-competed, job losses on relocation, environmental damage.',
    'A globalisation answer needs both columns and a judgement.',
    '## Globalisation');
}

// 06 TNC case study: Toyota's links
{
  let s = rrect(270, 118, 360, 92, C.ink, C.ink, 2.5, 14) + t(450, 152, 'Headquarters and research', { size: 18, weight: 700, anchor: 'middle', fill: C.cream }) +
    t(450, 182, 'Toyota City, Aichi Prefecture, Japan', { size: 17, anchor: 'middle', fill: '#ffffff' });
  s += `<rect x="30" y="262" width="560" height="140" rx="14" fill="none" stroke="${C.muted}" stroke-width="2" stroke-dasharray="7 6"/>` + t(44, 284, 'UK', { size: 15, weight: 700, fill: C.muted });
  s += `<rect x="610" y="262" width="260" height="140" rx="14" fill="none" stroke="${C.muted}" stroke-width="2" stroke-dasharray="7 6"/>` + t(624, 284, 'USA', { size: 15, weight: 700, fill: C.muted });
  const sites = [[45, 'Burnaston, near Derby', 'car plant'], [320, 'Deeside, North Wales', 'engine plant'], [625, 'Georgetown, Kentucky', 'large car plant']];
  sites.forEach(([x, a, b]) => { s += card(x, 296, 255, 92, a, b, { ts: 17.5, bs: 16, bfill: C.tealDark }); s += arrow(450, 212, x + 127, 292, { w: 3 }); });
  s += t(450, 438, 'Why locate abroad?', { size: 20, weight: 700, anchor: 'middle' });
  ['Inside major markets', 'Avoid import tariffs', 'Lower transport costs', 'Skilled local workers'].forEach((c, i) => { s += pill(30 + i * 213, 456, 201, 48, c, { size: 16 }); });
  s += card(30, 530, 410, 132, '+ For the host country', 'Direct jobs, and many more in component suppliers (a multiplier effect); training; export earnings.', { fill: C.tealLight, edge: C.tealDark, tfill: C.tealDark });
  s += card(460, 530, 410, 132, '– For the host country', 'Decisions are made in Japan and profits return there; the host is exposed if production is cut.', { fill: '#f6e6dc', edge: C.rust, tfill: C.rust });
  add('06-tnc-toyota',
    svg(900, 690, 'A TNC case study in one picture: Toyota', s, ),
    'Toyota’s headquarters and research in Toyota City, Japan, link to three overseas plants: a car plant at Burnaston near Derby and an engine plant at Deeside in North Wales (UK), and a large plant at Georgetown, Kentucky (USA). Reasons for locating abroad: inside major markets, avoiding tariffs, lower transport costs, skilled workers. Host impacts: jobs, a multiplier effect, training and exports, but decisions and profits stay in Japan.',
    'Learn a headquarters, named overseas sites, reasons, and one impact each way.',
    '## Worked example 2: building a TNC case study');
}
