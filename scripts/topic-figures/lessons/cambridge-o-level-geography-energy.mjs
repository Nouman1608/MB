import { C, svg, panel, t as t0, tl as tl0, arrow, path, badge as badge0 } from '../style.mjs';

// house minimum text size is 15: clamp every label drawn in this file
const MIN = 15;
const t = (x, y, s, o = {}) => t0(x, y, s, { ...o, size: Math.max(MIN, o.size || 18) });
const tl = (x, y, lines, opts = {}, lh = Math.max(MIN, opts.size || 18) * 1.3) => lines.map((s, i) => t(x, y + i * lh, s, opts)).join('');
const badge = (cx, cy, r, label, fill = C.mustard) => { const sz = Math.max(MIN, r); return `<circle cx="${cx}" cy="${cy}" r="${Math.max(r, sz * 0.85)}" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + t(cx, cy + sz * 0.36, label, { size: sz, weight: 700, anchor: 'middle' }); };

export const slug = 'cambridge-o-level-geography-energy';
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
const flame = (x, y, s = 1) => `<path d="M${x - 22 * s},${y} l44,${-8 * s} M${x - 22 * s},${y - 8 * s} l44,${8 * s}" stroke="${C.rockDark}" stroke-width="${6 * s}" stroke-linecap="round"/><path d="M${x},${y - 10 * s} q-16,-14 -6,-34 q2,12 8,14 q-2,-16 10,-26 q-2,20 8,30 q4,10 -4,16 z" fill="${C.rust}" stroke="${C.ink}" stroke-width="1.6"/>`;
const steam = (x, y, n = 2, gap = 18, col = C.muted) => { let s = ''; for (let i = 0; i < n; i++) s += path(`M${x + i * gap},${y} q-8,-12 0,-24 q8,-12 0,-24`, { stroke: col, w: 3 }); return s; };
// ---- end helpers ----

// 01 Energy use and development
{
  const cols = [
    ['Low income', C.mustard, ['Fuelwood and charcoal are the main household fuels', 'Low use per person', 'Many without mains electricity'], ['Wood is free or cheap to collect', 'Grids do not reach many villages', 'Little industry']],
    ['Middle income, industrialising', C.teal, ['Demand grows fast', 'Heavy use of coal and oil in factories and power stations', 'More cars'], ['Industrialisation and urbanisation', 'Coal often local and cheap']],
    ['High income', C.tealDark, ['High use per person', 'Fossil fuels still important', 'Rising share of renewables; nuclear in some'], ['Wealth to invest in new technology', 'Concern about climate change and energy security']],
  ];
  let s = arrow(60, 128, 840, 128, { w: 5, color: C.olive, marker: 'ahO' }) + tag(450, 134, 'energy use per person rises', { anchor: 'middle', fill: C.olive, size: 17, bg: C.bg, op: 1 });
  cols.forEach(([h, col, pat, why], i) => {
    const x = 30 + i * 290, y = 160;
    s += panel(x, y, 260, 520) + `<rect x="${x}" y="${y}" width="260" height="14" rx="7" fill="${col}"/>`;
    s += `<rect x="${x + 16}" y="${y + 26}" width="228" height="96" rx="8" fill="${C.tealLight}"/>`;
    if (i === 0) s += flame(x + 90, y + 110, 1) + house(x + 160, y + 92, 1.1);
    if (i === 1) s += factory(x + 40, y + 115, 1) + steam(x + 90, y + 50, 1) + `<rect x="${x + 150}" y="${y + 96}" width="50" height="16" rx="6" fill="${C.rust}" stroke="${C.ink}" stroke-width="2"/>` + circ(x + 162, y + 114, 6, C.ink) + circ(x + 189, y + 114, 6, C.ink);
    if (i === 2) s += turbine(x + 70, y + 118, 1.1) + house(x + 130, y + 95, 1.2) + `<rect x="${x + 190}" y="${y + 80}" width="40" height="30" fill="${C.blue}" stroke="${C.ink}" stroke-width="2" transform="skewX(-12)"/>`;
    const tt = wrap(h, 230, 19, true);
    s += tl(x + 18, y + 152, tt, { size: 19, weight: 700 }, 23);
    let yy = y + 152 + (tt.length - 1) * 23 + 32;
    s += t(x + 18, yy, 'PATTERN', { size: 14.5, weight: 700, fill: C.tealDark }); yy += 24;
    const b1 = bullets(x + 18, yy, pat, 228, { size: 15.5, gap: 6 }); s += b1.svg; yy += b1.h + 12;
    s += t(x + 18, yy, 'WHY', { size: 14.5, weight: 700, fill: C.rust }); yy += 24;
    s += bullets(x + 18, yy, why, 228, { size: 15.5, gap: 6 }).svg;
    if (i < 2) s += arrow(x + 263, y + 74, x + 287, y + 74, { w: 3.5 });
  });
  s += panel(30, 700, 840, 70, C.cream, C.olive) + t(450, 742, 'The mix changes too: fuelwood → electricity and gas → nuclear and renewables', { size: 18, weight: 700, anchor: 'middle' });
  add('01-energy-and-development',
    svg(900, 790, 'How energy use changes with development', s),
    'Three columns. Low-income countries rely on fuelwood and charcoal, use little energy per person and many lack mains electricity, because wood is cheap and grids do not reach villages. Middle-income countries see fast-growing demand and heavy coal and oil use, driven by industry and cities. High-income countries use the most per person, with fossil fuels still important but a rising share of renewables and, in some, nuclear.',
    'Use per person rises with development, and the mix of sources shifts.',
    '## How energy use varies with development');
}

// 02 Nuclear: how it works and how to judge it
{
  const st = ['Uranium atoms split, giving heat', 'Heat boils water to steam', 'Steam drives turbines', 'Generators make electricity'];
  let s = '';
  st.forEach((x0, i) => { const x = 30 + i * 216; s += rrect(x, 115, 192, 92, i === 0 ? C.cream : '#ffffff', C.ink, 2.5, 12) + tl(x + 96, 158 + (wrap(x0, 170, 16.5, true).length === 1 ? 10 : 0), wrap(x0, 170, 16.5, true), { size: 16.5, weight: 700, anchor: 'middle' }, 21); if (i < 3) s += arrow(x + 195, 161, x + 213, 161, { w: 3.5 }); });
  const ben = ['Very large, steady output, whatever the weather', 'Very low CO₂ emissions while operating', 'A little fuel gives a lot of energy', 'Less dependence on imported oil and gas'];
  const dis = ['Very high building and decommissioning costs; long build times', 'Radioactive waste dangerous for thousands of years', 'Rare but severe accidents: Chernobyl (1986), Fukushima (2011)', 'Needs high skill, strict regulation; public opposition'];
  s += panel(30, 232, 410, 300, C.tealLight, C.tealDark) + t(55, 270, '+ Benefits', { size: 21, weight: 700, fill: C.tealDark }) + bullets(55, 306, ben, 365, { size: 16.5, gap: 12 }).svg;
  s += panel(460, 232, 410, 300, '#f6e6dc', C.rust) + t(485, 270, '– Disadvantages', { size: 21, weight: 700, fill: C.rust }) + bullets(485, 306, dis, 365, { size: 16.5, gap: 12 }).svg;
  s += panel(30, 552, 840, 84, C.cream, C.olive) + t(55, 586, 'Its drawbacks are cost, waste and accident risk, not the weather.', { size: 18, weight: 700 }) + t(55, 614, 'France generates most of its electricity from nuclear: the scale a wealthy country can reach.', { size: 16, fill: C.muted });
  add('02-nuclear-power',
    svg(900, 660, 'Nuclear power: how it works, how to judge it', s),
    'Four steps: uranium atoms split giving heat, the heat boils water to steam, steam drives turbines and generators make electricity. Benefits: large steady output, very low carbon dioxide while operating, little fuel needed, less reliance on imported oil and gas. Disadvantages: very high building and decommissioning costs, long-lived radioactive waste, rare severe accidents such as Chernobyl and Fukushima, and the need for skill, regulation and public support.',
    'Nuclear is reliable and low-carbon; its costs are money, waste and risk.',
    '## Evaluating nuclear power');
}

// 03 Evaluate renewables source by source
{
  const W = 270;
  const sc = (x, y, k) => {
    let s = `<rect x="${x + 15}" y="${y + 52}" width="${W - 30}" height="120" rx="8" fill="${C.tealLight}"/>`;
    if (k === 0) s += sun(x + 50, y + 85, 16) + `<rect x="${x + 100}" y="${y + 120}" width="110" height="50" fill="#ffffff" stroke="${C.ink}" stroke-width="2.2"/><path d="M${x + 94},${y + 120} L${x + 155},${y + 88} L${x + 216},${y + 120} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="2"/>` + `<path d="M${x + 125},${y + 112} L${x + 155},${y + 96} L${x + 185},${y + 112} L${x + 160},${y + 124} Z" fill="${C.blue}" stroke="${C.ink}" stroke-width="1.6"/>` + t(x + 155, y + 160, 'school', { size: 14, anchor: 'middle', fill: C.muted });
    if (k === 1) s += turbine(x + 70, y + 170, 1.3) + turbine(x + 140, y + 170, 1.1) + turbine(x + 205, y + 170, 1.3);
    if (k === 2) s += `<rect x="${x + 15}" y="${y + 100}" width="120" height="72" fill="${C.teal}"/>` + `<path d="M${x + 135},${y + 85} L${x + 160},${y + 85} L${x + 175},${y + 172} L${x + 135},${y + 172} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5"/>` + `<rect x="${x + 175}" y="${y + 160}" width="80" height="12" fill="${C.teal}"/>` + t(x + 75, y + 140, 'flooded valley', { size: 14, anchor: 'middle', fill: C.tealDark, weight: 600 }) + house(x + 40, y + 70, 0.8);
    return s;
  };
  const cards = [
    ['Village solar panel', ['Supplies remote areas off the grid', 'Low running costs once built'], ['Output varies with weather and time of day']],
    ['Wind farm', ['Does not run out', 'Little or no greenhouse gas in operation'], ['Output varies: needs storage or back-up', 'Large area; noisy, visually intrusive']],
    ['Large HEP dam', ['Does not run out', 'Produced within the country: energy security'], ['Floods valleys and displaces people', 'Traps sediment']],
  ];
  let s = '';
  cards.forEach(([h, p, n], i) => {
    const x = 30 + i * 285;
    s += panel(x, 110, W, 420) + t(x + 18, 146, h, { size: 18, weight: 700 }) + sc(x, 110, i);
    let yy = 320; const b = bullets(x + 18, yy, p, 235, { size: 16, gap: 8, bullet: C.tealDark, mark: '+' }); s += b.svg; yy += b.h + 20;
    s += line(x + 18, yy - 18, x + W - 18, yy - 18, { color: C.panelEdge, w: 2 });
    s += bullets(x + 18, yy + 8, n, 235, { size: 16, gap: 8, bullet: C.rust, mark: '–' }).svg;
  });
  s += panel(30, 550, 840, 76, C.cream, C.olive) + t(450, 582, 'Location depends on physical geography:', { size: 18, weight: 700, anchor: 'middle' }) + t(450, 608, 'geothermal and tidal power suit only some places.', { size: 17, anchor: 'middle', fill: C.muted });
  add('03-renewables-by-source',
    svg(900, 650, 'Evaluate renewables one source at a time', s),
    'Three renewable schemes compared. A solar panel on a village school supplies remote areas cheaply but varies with weather and time of day. A wind farm does not run out and emits little greenhouse gas but varies, needs back-up and is large, noisy and visually intrusive. A large HEP dam does not run out and improves energy security but floods valleys, displaces people and traps sediment.',
    'A village solar panel and a giant dam are both “renewable” but have very different impacts.',
    '## Evaluating renewable sources');
}

const MAG = '#d9772f';
// 04 Iceland's energy supply (schematic)
{
  const G = 380;
  let s = panel(30, 110, 840, 420) + `<rect x="45" y="125" width="810" height="${G - 125}" rx="10" fill="${C.tealLight}"/>`;
  s += `<rect x="45" y="${G - 20}" width="60" height="135" fill="${C.teal}"/><rect x="795" y="${G - 20}" width="60" height="135" fill="${C.teal}"/>`;
  s += `<path d="M105,${G - 20} L105,${G} L380,${G} L470,${G - 60} L560,${G - 150} L640,${G - 60} L720,${G - 10} L795,${G - 10} L795,515 L105,515 Z" fill="#d8e3c6" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  s += `<path d="M520,${G - 110} L560,${G - 150} L600,${G - 110} Q560,${G - 98} 520,${G - 110} Z" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/>`;
  s += `<rect x="107" y="455" width="420" height="58" fill="${MAG}"/>` + t(317, 492, 'hot rocks close to the surface', { size: 16, weight: 700, anchor: 'middle', fill: '#ffffff' });
  s += line(260, G, 260, 456, { w: 5, color: C.rockDark }) + line(290, G, 290, 456, { w: 5, color: C.rockDark });
  s += `<rect x="240" y="${G - 44}" width="72" height="44" fill="#ffffff" stroke="${C.ink}" stroke-width="2.2"/>` + steam(258, G - 50, 2, 26);
  s += path(`M240,${G - 12} L170,${G - 12}`, { stroke: C.rust, w: 5 }) + house(120, G - 26) + house(165, G - 50, 0.8);
  s += path(`M575,${G - 112} Q600,${G - 70} 650,${G - 40}`, { stroke: C.blue, w: 5 }) + `<path d="M640,${G - 58} L672,${G - 32} L672,${G - 8} Q640,${G - 20} 628,${G - 42} Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="1.8"/>` + `<rect x="672" y="${G - 40}" width="12" height="36" fill="${C.rock}" stroke="${C.ink}" stroke-width="2"/>`;
  s += line(690, G - 30, 740, G - 50, { w: 2.5, dash: '6 4' }) + factory(735, G - 10, 0.85);
  s += tag(150, 150, 'Mid-Atlantic Ridge', { size: 17, fill: C.rust }) + tag(150, 172, 'plate boundary, active volcanoes', { size: 15, weight: 400 });
  s += tag(520, 150, 'Wet climate, glaciers,', { size: 17, fill: C.blue }) + tag(520, 172, 'steep river valleys', { size: 17, fill: C.blue });
  s += tag(222, 285, 'Hellisheiði', { size: 16 }) + tag(222, 304, 'geothermal power station', { size: 14.5, weight: 400 });
  s += tag(60, 236, 'Reykjavík homes:', { size: 16 }) + tag(60, 255, 'geothermal hot water', { size: 14.5, weight: 400 });
  s += tag(600, 248, 'Kárahnjúkar HEP', { size: 16 }) + tag(600, 267, 'dams flooded highland', { size: 14.5, weight: 400 });
  s += tag(700, 318, 'aluminium smelter', { size: 14.5, fill: C.ink }) + tag(700, 300, 'Reyðarfjörður', { size: 16 });
  s += t(450, 548, 'Schematic, not to scale: west on the left, east on the right', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  const c = [['HEP', 'supplies the larger share of electricity', C.teal], ['Geothermal', 'most of the rest; heats most homes', MAG], ['Drawbacks', 'flooded wilderness opposed; plants release gases such as hydrogen sulphide', C.rust], ['Still imports oil', 'for cars, aircraft and the fishing fleet', C.rockDark]];
  c.forEach(([a, b, col], i) => { const x = 30 + i * 213; s += panel(x, 570, 201, 150) + `<rect x="${x}" y="570" width="201" height="10" rx="5" fill="${col}"/>` + t(x + 16, 608, a, { size: 18, weight: 700 }) + para(x + 16, 634, b, 172, { size: 15.5, fill: C.muted, lh: 20 }).svg; });
  add('04-iceland-energy',
    svg(900, 740, 'Case study: energy supply in Iceland', s),
    'A schematic west-to-east section of Iceland. In the west, hot rocks near the surface at the Mid-Atlantic Ridge feed boreholes at the Hellisheiði geothermal station, which pipes hot water to homes in Reykjavík. In the east, glaciers and steep valleys feed the Kárahnjúkar HEP dams, which power an aluminium smelter at Reyðarfjörður. Below: HEP gives the larger share, geothermal most of the rest; drawbacks include flooded wilderness and hydrogen sulphide; oil is still imported for transport and fishing.',
    'Iceland’s geology and climate give it almost all-renewable electricity; few countries can copy it.',
    '## Case study: energy supply in Iceland');
}

// 05 Taravia energy mix calculation
{
  const data = [['Coal', 36, C.rockDark], ['Natural gas', 20, C.rock], ['HEP', 12, C.teal], ['Nuclear', 8, C.cream], ['Wind and solar', 4, C.grass]];
  const cx = 250, cy = 370, r = 190; let a0 = -90, s = panel(30, 110, 840, 540);
  data.forEach(([n, v, col]) => {
    const ang = (v / 80) * 360, a1 = a0 + ang, rad = (d) => (d * Math.PI) / 180;
    const x0 = cx + r * Math.cos(rad(a0)), y0 = cy + r * Math.sin(rad(a0)), x1 = cx + r * Math.cos(rad(a1)), y1 = cy + r * Math.sin(rad(a1));
    s += `<path d="M${cx},${cy} L${x0},${y0} A${r},${r} 0 ${ang > 180 ? 1 : 0} 1 ${x1},${y1} Z" fill="${col}" stroke="${C.ink}" stroke-width="2.5"/>`;
    const am = rad(a0 + ang / 2), lx = cx + (r + 30) * Math.cos(am), ly = cy + (r + 30) * Math.sin(am);
    if (v >= 12) s += t(cx + r * 0.6 * Math.cos(am), cy + r * 0.6 * Math.sin(am) + 6, `${n} ${v}`, { size: 17, weight: 700, anchor: 'middle', fill: v === 36 ? '#ffffff' : C.ink });
    else s += line(cx + r * 0.9 * Math.cos(am), cy + r * 0.9 * Math.sin(am), lx, ly, { w: 2 }) + t(lx + (Math.cos(am) < 0 ? -6 : 6), ly + 6, `${n} ${v}`, { size: 16, weight: 700, anchor: Math.cos(am) < 0 ? 'end' : 'start' });
    a0 = a1;
  });
  s += t(cx, 615, 'Total: 80 units (illustrative)', { size: 16, anchor: 'middle', fill: C.muted });
  const calc = [['Share from fossil fuels', '(36 + 20) ÷ 80 × 100', '= 70%'], ['Share from renewables', '(12 + 4) ÷ 80 × 100', '= 20%'], ['Pie chart angle for coal', '36 ÷ 80 × 360', '= 162°']];
  calc.forEach(([h, f, ans], i) => { const y = 140 + i * 128; s += rrect(500, y, 345, 110, i === 2 ? C.cream : C.tealLight, C.ink, 2.5, 12) + t(522, y + 32, h, { size: 17.5, weight: 700 }) + t(522, y + 66, f, { size: 18, fill: C.ink }) + t(825, y + 96, ans, { size: 22, weight: 700, anchor: 'end', fill: C.tealDark }); });
  s += para(500, 545, 'Wind could replace coal: cleaner, but output varies and needs back-up such as gas or HEP.', 345, { size: 16, fill: C.ink }).svg;
  add('05-energy-mix-calculation',
    svg(900, 670, 'Worked example: Taravia’s energy mix', s, 'A fictional country producing 80 units of electricity a year'),
    'A pie chart of a fictional country’s 80 units of electricity: coal 36, natural gas 20, HEP 12, nuclear 8, wind and solar 4. Beside it, three calculations: fossil fuels give (36 + 20) ÷ 80 × 100 = 70 per cent, renewables (12 + 4) ÷ 80 × 100 = 20 per cent, and the coal slice is 36 ÷ 80 × 360 = 162 degrees.',
    'Share = part ÷ total × 100; pie angle = part ÷ total × 360.',
    '## Worked example: an energy mix calculation');
}
