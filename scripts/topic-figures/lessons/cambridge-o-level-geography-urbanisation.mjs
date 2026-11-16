import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-geography-urbanisation';
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

// 01 Urbanisation vs urban growth
{
  const bar = (x, y, w, urb, lbl) => `<rect x="${x}" y="${y}" width="${w * urb}" height="44" fill="${C.rock}" stroke="${C.ink}" stroke-width="2"/><rect x="${x + w * urb}" y="${y}" width="${w * (1 - urb)}" height="44" fill="#a9c48f" stroke="${C.ink}" stroke-width="2"/>` + t(x - 12, y + 29, lbl, { size: 16, weight: 700, anchor: 'end' });
  let s = panel(30, 110, 410, 330) + t(55, 146, 'Urban growth only', { size: 20, weight: 700 }) + t(55, 170, 'the city gets bigger, the share does not', { size: 15, fill: C.muted });
  s += bar(120, 205, 200, 0.35, 'Before') + bar(120, 285, 290, 0.35, 'After');
  s += t(120, 360, 'Both the city and the countryside grew', { size: 15.5 }) + t(120, 382, 'at the same rate: no urbanisation.', { size: 15.5 });
  s += panel(460, 110, 410, 330) + t(485, 146, 'Urbanisation', { size: 20, weight: 700, fill: C.tealDark }) + t(485, 170, 'the share living in towns and cities rises', { size: 15, fill: C.muted });
  s += bar(550, 205, 240, 0.35, 'Before') + bar(550, 285, 240, 0.6, 'After');
  s += t(550, 360, 'Same total; a larger proportion', { size: 15.5 }) + t(550, 382, 'now urban.', { size: 15.5 });
  s += `<rect x="300" y="470" width="30" height="20" fill="${C.rock}" stroke="${C.ink}" stroke-width="2"/>` + t(340, 486, 'urban', { size: 15.5 }) + `<rect x="430" y="470" width="30" height="20" fill="#a9c48f" stroke="${C.ink}" stroke-width="2"/>` + t(470, 486, 'rural', { size: 15.5 });
  s += panel(30, 520, 840, 100, C.cream, C.olive) + t(55, 556, 'Rural depopulation: fewer people in the countryside, usually through out-migration.', { size: 16.5, weight: 700 }) + t(55, 588, 'Since around 2007 more than half the world’s people have lived in urban areas (UN estimate).', { size: 16 });
  add('01-urbanisation-terms',
    svg(900, 640, 'Urbanisation is not the same as urban growth', s, 'Schematic bars, not data'),
    'Two pairs of bars split into urban and rural shares. Left: the whole bar grows but the urban share stays the same, which is urban growth without urbanisation. Right: the bar stays the same size but the urban share rises, which is urbanisation. A note defines rural depopulation and says more than half the world’s people have lived in urban areas since around 2007.',
    'Urbanisation is about the proportion; urban growth is about size.',
    '## Getting the terms right');
}

// 02 Two causes of rapid urban growth
{
  let s = rrect(300, 115, 300, 60, C.ink, C.ink, 2.5, 14) + t(450, 152, 'Rapid urban growth', { size: 21, weight: 700, anchor: 'middle', fill: '#ffffff' });
  s += card(30, 205, 410, 120, '1  Rural–urban migration', 'People move from the countryside to the city.', { ts: 19, bs: 16, fill: C.tealLight, edge: C.tealDark });
  s += card(460, 205, 410, 120, '2  Natural increase in the city', 'Migrants are mostly young adults: high birth rates, low death rates. Often forgotten.', { ts: 19, bs: 16, fill: C.cream, edge: C.olive });
  s += arrow(235, 201, 360, 180, { w: 4 }) + arrow(665, 201, 540, 180, { w: 4 });
  const rows = [['Physical', 'drought, desertification, soil erosion, floods, crop failure', 'less risk of harvest failure; reliable water in some districts'], ['Economic', 'low, uncertain farm incomes; mechanisation; tiny plots; debt', 'jobs in factories, construction, services; higher wages'], ['Social', 'few schools or clinics; no electricity; conflict; isolation', 'education, health care; relatives there; hope of a better life']];
  s += t(255, 368, 'PUSH (rural areas)', { size: 16, weight: 700, anchor: 'middle', fill: C.rust }) + t(675, 368, 'PULL (cities)', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  rows.forEach(([g, p, q], i) => { const y = 382 + i * 84; s += rrect(30, y, 100, 72, C.ink, C.ink, 2, 10) + t(80, y + 42, g, { size: 15.5, weight: 700, anchor: 'middle', fill: '#ffffff' }) + rrect(140, y, 330, 72, '#f6e6dc', C.rust, 2, 10) + tl(156, y + 30, wrap(p, 300, 15), { size: 15 }, 19) + rrect(480, y, 390, 72, C.tealLight, C.tealDark, 2, 10) + tl(496, y + 30, wrap(q, 360, 15), { size: 15 }, 19); });
  s += panel(30, 642, 840, 104) + t(55, 676, 'Chain migration', { size: 18, weight: 700 });
  s += house(260, 700, 0.9) + t(275, 728, 'village', { size: 14, anchor: 'middle', fill: C.muted }) + `<rect x="640" y="672" width="60" height="40" fill="${C.rock}" stroke="${C.ink}" stroke-width="2"/>` + t(670, 728, 'city district', { size: 14, anchor: 'middle', fill: C.muted });
  s += arrow(300, 682, 630, 682, { w: 3.5 }) + t(465, 674, 'migrants', { size: 14, anchor: 'middle', weight: 700 }) + arrow(630, 704, 300, 704, { w: 3, color: C.olive, marker: 'ahO', dash: '8 5' }) + t(465, 724, 'news, money, help with housing and work', { size: 14, anchor: 'middle', fill: C.olive, weight: 700 });
  s += t(845, 690, 'more follow', { size: 14.5, anchor: 'end', weight: 600 }) + t(845, 710, 'from the same', { size: 14.5, anchor: 'end', weight: 600 }) + t(845, 730, 'village', { size: 14.5, anchor: 'end', weight: 600 });
  add('02-why-cities-grow',
    svg(900, 765, 'Why cities grow so fast', s),
    'Rapid urban growth has two causes: rural–urban migration and natural increase within the city, because migrants are mostly young adults. Push and pull factors are grouped as physical, economic and social, from drought and low farm incomes to city jobs and services. Chain migration: earlier migrants send news and money home and help relatives, so more people follow from the same village.',
    'Migration and natural increase together drive rapid urban growth.',
    '## Why cities grow so fast');
}

// 03 A squatter settlement
{
  const G = 470;
  let s = panel(30, 110, 840, 440) + `<rect x="45" y="125" width="810" height="410" rx="10" fill="${C.tealLight}"/>`;
  s += `<path d="M45,180 L600,${G - 10} L855,${G - 10} L855,535 L45,535 Z" fill="${C.sand}" stroke="${C.ink}" stroke-width="2.5"/>`;
  let k = 0; for (let x = 52; x < 585; x += 21) { const y = 180 + (x - 45) * 0.504 - 19; s += `<rect x="${x}" y="${y}" width="19" height="${19 + (k % 2) * 6}" fill="${k % 4 === 0 ? C.rock : k % 3 === 0 ? '#c7cfd4' : '#e7dcc0'}" stroke="${C.ink}" stroke-width="1.5"/>` + line(x - 2, y, x + 21, y - 3, { w: 2.2, color: C.rockDark }); k++; }
  s += `<rect x="600" y="${G - 22}" width="255" height="12" fill="${C.teal}"/>` + line(600, G - 4, 855, G - 4, { w: 3 }) + [0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => line(610 + i * 28, G - 9, 610 + i * 28, G + 1, { w: 2 })).join('');
  s += `<path d="M740,${G - 22} q20,-30 50,-12 q30,-26 60,0 z" fill="${C.rockDark}" opacity="0.7"/>` + [612, 636, 660, 684].map((x) => `<rect x="${x}" y="${G - 44}" width="20" height="22" fill="#e7dcc0" stroke="${C.ink}" stroke-width="1.5"/>`).join('');
  const lab = (x, y, n, a, anchor = 'start') => badge(x, y, 13, String(n), C.mustard) + tag(anchor === 'end' ? x - 20 : x + 20, y + 5, a, { size: 14.5, anchor });
  s += lab(250, 170, 1, 'steep hillside: marginal land') + lab(470, 240, 2, 'self-built: scrap wood, iron, plastic') + lab(470, 280, 3, 'improved later with brick, concrete') + lab(845, 400, 4, 'beside railway, stream, rubbish dump', 'end') + lab(80, 500, 5, 'very high density, narrow unpaved alleys');
  s += t(450, 570, '', {});
  const L = [['Insecure tenure', 'residents do not own the land'], ['Few services', 'little piped water, sanitation, power, rubbish collection'], ['Informal economy', 'workshops, small shops, recycling'], ['Local names', 'favelas (Brazil), katchi abadis (Pakistan), bustees (India)']];
  L.forEach(([a, b], i) => { s += card(30 + (i % 2) * 430, 568 + Math.floor(i / 2) * 96, 410, 84, a, b, { ts: 17, bs: 15, pad: 14 }); });
  add('03-squatter-settlement',
    svg(900, 770, 'Characteristics of a squatter settlement', s, 'Schematic, not to scale'),
    'A schematic hillside squatter settlement: densely packed self-built homes of scrap wood, corrugated iron and plastic, some improved with brick, on steep marginal land, with more homes beside a railway, a stream and a rubbish dump below. Labels note very high density and narrow unpaved alleys. Cards add insecure tenure, few services, an active informal economy and local names: favelas, katchi abadis and bustees.',
    'Describe the full range: tenure, materials, location, density, services and economy.',
    '## Characteristics of squatter settlements');
}

// 04 Strategies: causes vs effects
{
  let s = card(30, 115, 270, 520, 'Reduce the causes', null, { fill: C.cream, edge: C.olive, ts: 20 });
  s += rrect(48, 175, 234, 220, '#ffffff', C.panelEdge, 2, 10) + t(64, 203, 'Rural development', { size: 17, weight: 700 }) + tl(64, 230, wrap('Irrigation, rural electrification, clinics and schools reduce push factors.', 200, 15.5), { size: 15.5 }, 20) + tl(64, 330, wrap('Limit: slow, needs sustained funding', 200, 15), { size: 15, fill: C.rust, weight: 600 }, 19);
  s += t(165, 440, 'tackles why people', { size: 15, anchor: 'middle', fill: C.muted, italic: true }) + t(165, 460, 'leave the countryside', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  s += card(320, 115, 550, 520, 'Manage the effects in the city', null, { fill: C.tealLight, edge: C.tealDark, ts: 20, tfill: C.tealDark });
  const M = [['Self-help schemes', 'materials, tools, loans', 'quality varies'], ['Site-and-service', 'plots with water, sewers, roads', 'far from jobs; may exclude poorest'], ['In-situ upgrading', 'e.g. Favela-Bairro, Rio (1990s)', 'expensive; rents may rise'], ['Community sanitation', 'Orangi Pilot Project, Karachi (1980)', 'needs strong organisation'], ['Mass transit', 'e.g. Lagos BRT (2008)', 'costly; misses some districts'], ['New towns', 'take pressure off the city', 'jobs may not follow']];
  M.forEach(([a, b, c], i) => { const x = 338 + (i % 2) * 262, y = 172 + Math.floor(i / 2) * 150; s += rrect(x, y, 250, 136, '#ffffff', C.panelEdge, 2, 10) + t(x + 14, y + 28, a, { size: 16.5, weight: 700 }) + tl(x + 14, y + 54, wrap(b, 222, 14.5), { size: 14.5 }, 18) + tl(x + 14, y + 104, wrap('Limit: ' + c, 222, 14), { size: 14, fill: C.rust, weight: 600 }, 17); });
  s += panel(30, 655, 840, 70, '#ffffff', C.panelEdge) + t(450, 697, 'Demolition usually moves the problem elsewhere rather than solving it.', { size: 17, weight: 700, anchor: 'middle' });
  add('04-urban-strategies',
    svg(900, 745, 'Strategies: tackle causes or manage effects?', s),
    'Left: rural development (irrigation, electrification, clinics, schools) reduces the causes of migration but is slow. Right: strategies that manage effects in the city, each with a limitation: self-help schemes, site-and-service schemes, in-situ upgrading such as Rio’s Favela-Bairro, community sanitation such as Karachi’s Orangi Pilot Project, mass transit such as the Lagos BRT, and new towns. A note says demolition usually moves the problem elsewhere.',
    'Separating causes from effects makes an evaluation stronger.',
    '## Strategies to reduce the negative impacts');
}

// 05 Worked example: percentage points
{
  const X0 = 140, Y1 = 470, H = 6.5;
  let s = panel(30, 110, 840, 470) + line(X0, Y1, 620, Y1, { w: 2.5 }) + line(X0, Y1, X0, 160, { w: 2.5 });
  [0, 10, 20, 30, 40, 50].forEach((v) => { s += line(X0 - 6, Y1 - v * H, X0, Y1 - v * H, { w: 2 }) + t(X0 - 12, Y1 - v * H + 5, String(v), { size: 14.5, anchor: 'end', fill: C.muted }) + (v ? line(X0, Y1 - v * H, 620, Y1 - v * H, { w: 1, color: C.panelEdge }) : ''); });
  s += `<text x="70" y="${Y1 - 160}" font-size="15" fill="${C.ink}" font-weight="700" text-anchor="middle" transform="rotate(-90 70 ${Y1 - 160})">urban population (% of total)</text>`;
  [[1980, 25, 210], [2000, 33, 360], [2020, 44, 510]].forEach(([yr, v, x]) => { s += `<rect x="${x - 40}" y="${Y1 - v * H}" width="80" height="${v * H}" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + t(x, Y1 - v * H - 10, v + '%', { size: 18, weight: 700, anchor: 'middle' }) + t(x, Y1 + 26, String(yr), { size: 16, weight: 700, anchor: 'middle' }); });
  s += path(`M250,${Y1 - 25 * H} L320,${Y1 - 25 * H}`, { stroke: C.olive, w: 2, extra: 'stroke-dasharray="5 4"' }) + arrow(300, Y1 - 25 * H, 300, Y1 - 33 * H + 4, { w: 3, color: C.olive, marker: 'ahO' }) + tag(285, Y1 - 29 * H + 5, '+8', { size: 15, anchor: 'end', fill: C.olive });
  s += path(`M400,${Y1 - 33 * H} L470,${Y1 - 33 * H}`, { stroke: C.olive, w: 2, extra: 'stroke-dasharray="5 4"' }) + arrow(450, Y1 - 33 * H, 450, Y1 - 44 * H + 4, { w: 3, color: C.olive, marker: 'ahO' }) + tag(435, Y1 - 38.5 * H + 5, '+11', { size: 15, anchor: 'end', fill: C.olive });
  s += card(650, 130, 200, 120, 'Trend', 'rising throughout; faster after 2000', { ts: 17.5, bs: 15.5 });
  s += card(650, 265, 200, 120, 'Change', '44 − 25 = 19 percentage points', { ts: 17.5, bs: 15.5, fill: C.tealLight, edge: C.tealDark });
  s += card(650, 400, 200, 160, 'Careful!', '25% → 44% is +19 percentage points, not +19%.', { ts: 17.5, bs: 15.5, fill: '#f6e6dc', edge: C.rust, tfill: C.rust });
  add('05-percentage-points',
    svg(900, 600, 'Worked example: describing urban change', s, 'Illustrative data for an unnamed developing country'),
    'A bar chart of the urban share of population: 25 per cent in 1980, 33 per cent in 2000 and 44 per cent in 2020. Annotations show rises of 8 and then 11 percentage points, so growth was faster after 2000. The overall change is 44 minus 25, which is 19 percentage points, not 19 per cent.',
    'A change in a percentage is measured in percentage points.',
    '## Worked example 1: interpreting data');
}
