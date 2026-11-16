import { C, svg, panel, t as t0, tl as tl0, arrow, path, badge as badge0 } from '../style.mjs';

// house minimum text size is 15: clamp every label drawn in this file
const MIN = 15;
const t = (x, y, s, o = {}) => t0(x, y, s, { ...o, size: Math.max(MIN, o.size || 18) });
const tl = (x, y, lines, opts = {}, lh = Math.max(MIN, opts.size || 18) * 1.3) => lines.map((s, i) => t(x, y + i * lh, s, opts)).join('');
const badge = (cx, cy, r, label, fill = C.mustard) => { const sz = Math.max(MIN, r); return `<circle cx="${cx}" cy="${cy}" r="${Math.max(r, sz * 0.85)}" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + t(cx, cy + sz * 0.36, label, { size: sz, weight: 700, anchor: 'middle' }); };

export const slug = 'cambridge-o-level-geography-tourism';
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

// 01 Why tourism has grown
{
  let s = card(30, 115, 410, 260, 'Attractions (pull factors)', null, { fill: C.cream, edge: C.olive, ts: 19 });
  s += t(50, 178, 'Physical landscape', { size: 15.5, weight: 700, fill: C.olive }) + tl(50, 202, wrap('beaches and sunny climates; coral reefs; mountains and snow; volcanoes, waterfalls; national parks and wildlife', 370, 15.5), { size: 15.5 }, 20);
  s += t(50, 292, 'Human landscape', { size: 15.5, weight: 700, fill: C.olive }) + tl(50, 316, wrap('historic buildings, religious sites, museums; shopping and nightlife; festivals, theme parks; local culture and food', 370, 15.5), { size: 15.5 }, 20);
  s += card(460, 115, 410, 260, 'Enabling factors', null, { fill: C.tealLight, edge: C.tealDark, ts: 19, tfill: C.tealDark });
  s += bullets(480, 180, ['Rising incomes, more paid holiday; a growing middle class', 'Cheaper, faster air travel: budget airlines, long-haul jets', 'Internet booking, price comparison, social media', 'Governments build airports and resorts, ease visas'], 372, { size: 15.5, gap: 10 }).svg;
  s += arrow(235, 380, 380, 462, { w: 4 }) + arrow(665, 380, 520, 462, { w: 4 });
  s += rrect(300, 466, 300, 56, C.ink, C.ink, 2.5, 14) + t(450, 502, 'Tourism grows', { size: 21, weight: 700, anchor: 'middle', fill: '#ffffff' });
  // linking example
  const G = 680;
  s += panel(30, 545, 840, 200) + t(55, 580, 'Link the two in an “explain” answer', { size: 18, weight: 700 });
  s += `<rect x="55" y="${G - 70}" width="790" height="70" rx="6" fill="${C.tealLight}"/><rect x="55" y="${G - 14}" width="790" height="40" fill="${C.sand}"/><rect x="55" y="${G + 26}" width="790" height="12" fill="${C.teal}"/>`;
  s += tag(70, G + 12, 'the beach: here for thousands of years', { size: 14.5, bg: C.sand, op: 1 });
  s += `<rect x="470" y="${G - 60}" width="70" height="46" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/><rect x="550" y="${G - 48}" width="60" height="34" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/>` + t(540, G - 66, 'hotels', { size: 14, anchor: 'middle', weight: 600 });
  s += `<path d="M700,${G - 40} l40,-8 l10,-14 l6,0 l-4,14 l30,-6 l6,4 l-30,10 l-6,16 l-6,0 l2,-14 l-40,6 z" fill="${C.ink}"/>` + t(760, G - 66, 'airport, cheap flights', { size: 14, anchor: 'middle', weight: 600 });
  s += t(450, 735, '… it became a major destination only once hotels, an airport and affordable flights arrived.', { size: 15.5, anchor: 'middle', fill: C.muted, italic: true });
  add('01-tourism-growth',
    svg(900, 765, 'Why tourism has grown', s),
    'Two boxes feed into tourism growth. Attractions: physical (beaches, sunny climates, reefs, mountains, volcanoes, wildlife) and human (historic and religious sites, museums, cities, festivals, local culture). Enabling factors: rising incomes and paid holidays, cheaper flights, internet booking and social media, and government promotion. A strip shows a beach that only became a major destination once hotels, an airport and affordable flights arrived.',
    'Attractions explain where people go; enabling factors explain why numbers rose.',
    '## Why tourism has grown');
}

// 02 Multiplier effect vs leakage
{
  const panelFlow = (x, title, sub, local) => {
    let s = panel(x, 110, 410, 470) + t(x + 205, 148, title, { size: 20, weight: 700, anchor: 'middle', fill: local ? C.tealDark : C.rust }) + t(x + 205, 172, sub, { size: 15, anchor: 'middle', fill: C.muted });
    s += rrect(x + 105, 192, 200, 56, C.mustard, C.ink, 2.5, 28) + t(x + 205, 226, 'Tourist spending', { size: 17, weight: 700, anchor: 'middle' });
    s += rrect(x + 105, 290, 200, 56, '#ffffff', C.ink, 2.5, 12) + t(x + 205, 324, local ? 'Locally owned hotel' : 'Foreign-owned resort', { size: 16, weight: 700, anchor: 'middle' });
    s += arrow(x + 205, 252, x + 205, 284, { w: 4 });
    if (local) {
      [['Local farms', 30], ['Builders', 150], ['Shops', 270]].forEach(([l, dx]) => { s += rrect(x + dx, 400, 110, 50, C.tealLight, C.tealDark, 2, 10) + t(x + dx + 55, 431, l, { size: 15.5, weight: 700, anchor: 'middle' }); s += arrow(x + 205, 350, x + dx + 55, 396, { w: 3.5, color: C.tealDark, marker: 'ahT' }); });
      s += path(`M${x + 85},455 Q${x + 85},500 ${x + 205},500 Q${x + 325},500 ${x + 325},455`, { stroke: C.tealDark, w: 3, extra: 'stroke-dasharray="8 6"' }) + t(x + 205, 525, 'wages and spending circulate again', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600 });
      s += t(x + 205, 556, 'Multiplier effect: more money stays', { size: 16, weight: 700, anchor: 'middle' });
    } else {
      s += arrow(x + 205, 350, x + 205, 396, { w: 2.5, color: C.tealDark, marker: 'ahT' }) + rrect(x + 150, 400, 110, 50, C.tealLight, C.tealDark, 2, 10) + t(x + 205, 431, 'Local wages', { size: 15, weight: 700, anchor: 'middle' });
      s += arrow(x + 300, 318, x + 380, 318, { w: 8, color: C.rust, marker: 'ahR' }) + tl(x + 395, 282, ['profits', 'abroad'], { size: 15, weight: 700, fill: C.rust, anchor: 'end' }, 18);
      s += arrow(x + 300, 340, x + 370, 400, { w: 6, color: C.rust, marker: 'ahR' }) + tl(x + 330, 430, ['imported', 'food and', 'supplies'], { size: 15, weight: 700, fill: C.rust }, 18);
      s += t(x + 205, 556, 'Leakage: much of the money leaves', { size: 16, weight: 700, anchor: 'middle' });
    }
    return s;
  };
  let s = panelFlow(30, 'Local control', 'hotels locally owned, buying local food', true) + panelFlow(460, 'Foreign control', 'resorts owned abroad, supplies imported', false);
  s += panel(30, 600, 840, 76, C.cream, C.olive) + t(450, 646, 'The balance of benefits depends on who controls tourism.', { size: 18, weight: 700, anchor: 'middle' });
  add('02-multiplier-leakage',
    svg(900, 700, 'Who keeps the money?', s),
    'Two flows of tourist spending. With local control, a locally owned hotel buys from local farms, builders and shops, and wages are spent again in the area: the multiplier effect. With foreign control, a foreign-owned resort sends profits abroad and imports food and supplies, so only local wages stay: leakage.',
    'Local ownership strengthens the multiplier; foreign ownership means leakage.',
    '## Benefits and disadvantages for receiving areas');
}

// 03 Sustainable tourism management
{
  const cx = 450, cy = 420;
  let s = circ(cx, cy, 100, C.tealDark, C.ink, 2.5) + t(cx, cy - 12, 'Keep the', { size: 18, weight: 700, anchor: 'middle', fill: '#ffffff' }) + t(cx, cy + 12, 'attraction', { size: 18, weight: 700, anchor: 'middle', fill: '#ffffff' }) + t(cx, cy + 36, 'for the future', { size: 14.5, anchor: 'middle', fill: '#ffffff' });
  const M = [['Limit numbers', 'permits, quotas, timed tickets'], ['Zoning', 'busy resorts apart from protected zones'], ['Protected areas', 'marine and national parks with rules'], ['Ecotourism', 'small-scale; funds conservation, local jobs'], ['Local ownership', 'and training: income stays local'], ['Spread demand', 'off-season, less-visited places'], ['Infrastructure', 'sewage, waste, water sized for peaks']];
  M.forEach(([a, b], i) => {
    const ang = -Math.PI / 2 + (i * 2 * Math.PI) / 7, R = 250, x = cx + R * Math.cos(ang) * 1.18, y = cy + R * Math.sin(ang);
    s += line(cx + 104 * Math.cos(ang), cy + 104 * Math.sin(ang), cx + 170 * Math.cos(ang) * 1.1, cy + 170 * Math.sin(ang), { w: 2.5, color: C.muted });
    s += card(x - 120, y - 46, 240, 92, a, b, { ts: 17.5, bs: 14.5, pad: 14 });
  });
  s += panel(30, 735, 840, 66, C.cream, C.olive) + t(450, 775, 'Always say what the measure protects and how it keeps visitors coming.', { size: 17, weight: 700, anchor: 'middle' });
  add('03-sustainable-tourism',
    svg(900, 820, 'Managing tourism sustainably', s),
    'Seven measures surround the aim of keeping the attraction for the future: limiting numbers with permits and quotas; zoning; protected marine and national parks; ecotourism; local ownership and training; spreading demand to off-season and less-visited places; and infrastructure such as sewage treatment and waste collection sized for peak numbers.',
    'Sustainable tourism protects the very thing visitors come for.',
    '## Sustainable tourism management');
}

// 04 The Maldives (schematic)
{
  let s = panel(30, 110, 540, 520) + `<rect x="45" y="125" width="510" height="490" rx="10" fill="${C.teal}"/>`;
  const atoll = (cx, cy, rx, ry, n) => { let o = `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${C.tealLight}" stroke="${C.rust}" stroke-width="3" stroke-dasharray="3 5"/>`; for (let i = 0; i < n; i++) { const a = (i / n) * Math.PI * 2; o += `<ellipse cx="${cx + rx * Math.cos(a)}" cy="${cy + ry * Math.sin(a)}" rx="9" ry="6" fill="${C.sand}" stroke="${C.ink}" stroke-width="1.4"/>`; } return o; };
  s += atoll(170, 260, 90, 100, 10) + atoll(400, 330, 110, 140, 13) + atoll(200, 500, 80, 80, 8);
  s += `<ellipse cx="400" cy="200" rx="22" ry="14" fill="${C.sand}" stroke="${C.ink}" stroke-width="2"/>` + house(388, 196, 0.6) + house(402, 200, 0.6);
  s += `<rect x="430" y="210" width="50" height="10" fill="${C.sand}" stroke="${C.ink}" stroke-width="1.6"/>`;
  s += `<ellipse cx="335" cy="168" rx="16" ry="10" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>`;
  s += tag(428, 196, 'Malé (capital)', { size: 15 }) + tag(486, 236, 'airport', { size: 14, weight: 600 }) + tag(330, 146, 'Thilafushi: landfill island', { size: 14.5, fill: C.rust, anchor: 'middle' });
  s += `<ellipse cx="510" cy="330" rx="12" ry="8" fill="${C.sand}" stroke="${C.ink}" stroke-width="1.6"/>` + `<rect x="503" y="318" width="14" height="10" fill="#ffffff" stroke="${C.ink}" stroke-width="1.4"/>`;
  s += tag(415, 400, 'one island,', { size: 15, anchor: 'middle', fill: C.tealDark }) + tag(415, 419, 'one resort', { size: 15, anchor: 'middle', fill: C.tealDark }) + line(450, 395, 500, 335, { w: 1.8, color: C.tealDark });
  s += tag(170, 268, 'atoll: ring of', { size: 14, anchor: 'middle', weight: 400 }) + tag(170, 286, 'coral islands', { size: 14, anchor: 'middle', weight: 400 });
  s += t(300, 600, 'Schematic, not a map: about 1,200 islands in atolls', { size: 14.5, anchor: 'middle', fill: C.tealDark, italic: true });
  s += card(590, 110, 280, 160, 'Attractions', 'Coral-sand beaches, clear warm water, reefs for diving, tropical climate; luxury resorts.', { ts: 18, bs: 15, fill: C.cream, edge: C.olive });
  s += card(590, 285, 280, 120, 'Growth', 'First resorts early 1970s; airport near Malé and long-haul flights.', { ts: 18, bs: 15 });
  s += card(590, 420, 280, 210, 'Problems', 'Foreign ownership and imports cause leakage; resort rubbish to Thilafushi; reefs damaged by anchors, divers, building and bleaching.', { ts: 18, bs: 15, fill: '#f6e6dc', edge: C.rust, tfill: C.rust });
  // sea-level inset
  s += panel(30, 650, 840, 130) + t(55, 684, 'Longer-term risk', { size: 18, weight: 700, fill: C.rust });
  s += `<rect x="400" y="700" width="450" height="60" fill="${C.teal}"/>` + `<path d="M470,730 Q560,712 640,712 Q720,712 790,730 Z" fill="${C.sand}" stroke="${C.ink}" stroke-width="2"/>` + line(400, 716, 850, 716, { w: 2.5, color: C.blue, dash: '8 6' });
  s += tag(845, 708, 'higher sea level', { size: 14, anchor: 'end', fill: C.blue });
  s += tl(55, 712, ['Most land is only 1–2 m above sea level:', 'sea-level rise threatens the beaches', 'the industry depends on.'], { size: 15.5 }, 20);
  add('04-maldives',
    svg(900, 800, 'Case study: tourism in the Maldives', s),
    'A schematic of coral atolls in the Indian Ocean, with the capital Malé and its airport, a resort on its own island (“one island, one resort”) and Thilafushi, the landfill island. Side boxes list attractions (beaches, reefs, climate, luxury resorts), growth from the early 1970s with the airport and long-haul flights, and problems: leakage, waste and reef damage. An inset shows land only 1 to 2 metres above sea level, threatened by sea-level rise.',
    'Reefs and beaches draw visitors; leakage, waste and rising seas threaten the gains.',
    '## Case study: the Maldives');
}

// 05 Structure of an evaluate answer
{
  const st = [['Named area', 'the Maldives', C.ink, '#ffffff'], ['Benefit', 'largest industry: jobs in resorts, boats and the airport; income for public services', C.tealDark, C.tealLight], ['Disadvantage', 'foreign-owned resorts and imported supplies, so money leaks out; resort waste created a landfill island near Malé', C.rust, '#f6e6dc'], ['Judgement', 'real gains, but local people gain less than spending suggests, and reefs and beaches are at risk: benefits last only if waste and reef damage are managed', C.olive, C.cream]];
  let s = '', y = 115;
  st.forEach(([h, b, col, f], i) => { const ls = wrap(b, 600, 16.5); const hgt = Math.max(70, ls.length * 22 + 34); s += rrect(30, y, 840, hgt, f, col, 2.5, 12) + rrect(30, y, 190, hgt, col, col, 2.5, 12) + t(125, y + hgt / 2 + 7, h, { size: 18, weight: 700, anchor: 'middle', fill: '#ffffff' }) + tl(240, y + hgt / 2 + 6 - (ls.length - 1) * 11, ls, { size: 16.5 }, 22); if (i < 3) s += arrow(125, y + hgt + 2, 125, y + hgt + 20, { w: 3 }); y += hgt + 22; });
  s += t(450, y + 16, 'The top marks come from the final line: a judgement that rests on evidence.', { size: 16.5, anchor: 'middle', fill: C.muted, italic: true });
  add('05-evaluate-answer',
    svg(900, y + 40, 'Building an “evaluate” answer', s),
    'Four stacked steps for a 6-mark evaluate answer about the Maldives: name the area; give a benefit (jobs and income for public services); give a disadvantage (leakage from foreign ownership and imports, and the landfill island near Malé); and finish with a judgement that the gains are real but smaller for local people and last only if waste and reef damage are managed.',
    'Benefit, disadvantage, then a judgement that depends on the evidence.',
    '## Worked example: an evaluate question');
}
