import { C, svg, panel, t as t0, tl as tl0, arrow, path, badge as badge0 } from '../style.mjs';

// house minimum text size is 15: clamp every label drawn in this file
const MIN = 15;
const t = (x, y, s, o = {}) => t0(x, y, s, { ...o, size: Math.max(MIN, o.size || 18) });
const tl = (x, y, lines, opts = {}, lh = Math.max(MIN, opts.size || 18) * 1.3) => lines.map((s, i) => t(x, y + i * lh, s, opts)).join('');
const badge = (cx, cy, r, label, fill = C.mustard) => { const sz = Math.max(MIN, r); return `<circle cx="${cx}" cy="${cy}" r="${Math.max(r, sz * 0.85)}" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + t(cx, cy + sz * 0.36, label, { size: sz, weight: 700, anchor: 'middle' }); };

export const slug = 'cambridge-o-level-geography-environmental-risks-economic-development';
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

// 01 Activity -> process -> threat -> effect
{
  const ws = [215, 215, 150, 188], gap = 24;
  const heads = ['Activity', 'Process', 'Threat', 'Effect'];
  const rows = [
    ['Clearing forest; ploughing steep slopes; overgrazing', 'No roots or cover: rain washes topsoil away, wind blows dry soil', 'Soil erosion', 'Lower yields, gullies; silt fills rivers, raising flood risk'],
    ['Overgrazing, over-cultivation, cutting fuelwood; worse in drought', 'Soil exhausted; trees and shrubs removed from dry land', 'Desertification (e.g. the Sahel)', 'Land cannot support crops or animals: food shortages, migration'],
    ['Burning fossil fuels; clearing forest; cattle, rice, landfill', 'Carbon dioxide and methane trap more heat', 'Enhanced global warming', 'Higher temperatures, sea-level rise, extreme weather'],
    ['Sewage, factory waste, fertiliser run-off, oil spills, mining waste', 'Harmful waste and excess nutrients reach water', 'Water pollution', 'Disease, fish deaths, algal blooms'],
  ];
  let s = '', x = 30;
  heads.forEach((h, i) => { s += t(x + ws[i] / 2, 136, h, { size: 18, weight: 700, anchor: 'middle', fill: [C.muted, C.muted, C.rust, C.tealDark][i] }); x += ws[i] + gap; });
  rows.forEach((r, j) => {
    const y = 152 + j * 140; x = 30;
    r.forEach((txt, i) => {
      const thr = i === 2;
      s += rrect(x, y, ws[i], 122, thr ? '#f6e6dc' : i === 3 ? C.tealLight : '#ffffff', thr ? C.rust : C.panelEdge, 2.5, 12);
      const ls = wrap(txt, ws[i] - 26, thr ? 17 : 15.5, thr);
      const lh = thr ? 22 : 20, y0 = y + 61 - ((ls.length - 1) * lh) / 2 + 5;
      s += tl(x + (thr ? ws[i] / 2 : 14), y0, ls, { size: thr ? 17 : 15.5, weight: thr ? 700 : 400, anchor: thr ? 'middle' : 'start', fill: thr ? C.rust : C.ink }, lh);
      if (i < 3) s += arrow(x + ws[i] + 2, y + 61, x + ws[i] + gap - 3, y + 61, { w: 3 });
      x += ws[i] + gap;
    });
  });
  add('01-threat-chains',
    svg(900, 730, 'Trace every threat back to its cause', s),
    'Four chains from activity to effect. Clearing, ploughing slopes and overgrazing remove plant cover so rain and wind strip topsoil: soil erosion, lower yields and silted rivers. Overgrazing, over-cultivation and fuelwood cutting cause desertification, as in the Sahel, leading to food shortages and migration. Burning fossil fuels, clearing forest, cattle, rice and landfill add gases that cause enhanced global warming. Sewage, factory waste, run-off and spills cause water pollution, disease and fish deaths.',
    'Activity → process → threat → effect on people and the environment.',
    '## The threats, activity by activity');
}

// 02 Enhanced global warming
{
  const G = 400;
  let s = panel(30, 110, 520, 380) + `<rect x="45" y="125" width="490" height="${G - 125}" rx="10" fill="${C.tealLight}"/>`;
  s += `<rect x="45" y="160" width="490" height="54" fill="#ffffff" opacity="0.6"/>` + t(60, 154, 'atmosphere', { size: 15, fill: C.muted, italic: true });
  [[70, 178], [110, 196], [150, 175], [200, 200], [240, 182], [285, 196], [330, 172], [370, 198], [410, 180], [450, 200], [490, 176], [95, 205], [265, 170], [430, 168]].forEach(([x, y]) => { s += circ(x, y, 6, C.rust, C.ink, 1.5); });
  s += sun(85, 260, 20) + arrow(105, 280, 150, G - 8, { color: C.olive, w: 4, marker: 'ahO' });
  [210, 300, 390].forEach((x) => { s += arrow(x, G - 8, x, 222, { color: C.ink, w: 4 }) + arrow(x + 22, 222, x + 22, G - 50, { color: C.rust, w: 4, marker: 'ahR' }); });
  s += arrow(495, G - 8, 495, 136, { w: 4 });
  s += `<rect x="45" y="${G}" width="490" height="76" fill="#d8e3c6" stroke="${C.ink}" stroke-width="2"/>`;
  s += factory(70, G + 60, 0.75) + flame(200, G + 62, 0.9) + `<rect x="270" y="${G + 40}" width="56" height="18" rx="7" fill="${C.rust}" stroke="${C.ink}" stroke-width="2"/>` + circ(283, G + 60, 6, C.ink) + circ(313, G + 60, 6, C.ink);
  s += t(400, G + 32, 'CH₄: cattle,', { size: 15, weight: 700 }) + t(400, G + 52, 'rice, landfill', { size: 15, weight: 700 });
  s += tag(242, 300, 'more heat sent back', { size: 15, fill: C.rust });
  // effects
  s += panel(570, 110, 300, 380, '#f6e6dc', C.rust) + t(592, 146, 'Global effects', { size: 20, weight: 700, fill: C.rust });
  s += bullets(592, 186, ['Rising temperatures', 'Melting ice', 'Sea-level rise threatens low-lying coasts and islands', 'More extreme weather', 'Changes to where crops can grow'], 260, { size: 17, gap: 18 }).svg;
  s += panel(30, 510, 840, 112, C.cream, C.olive) + t(55, 548, 'Natural greenhouse effect: normal, keeps the Earth warm.', { size: 17.5, weight: 700 }) +
    t(55, 580, 'Enhanced: extra CO₂ (fossil fuels, forest clearance) and methane trap more heat.', { size: 17.5, weight: 700, fill: C.rust }) + t(55, 606, 'Fewer trees also means less carbon dioxide absorbed.', { size: 16, fill: C.muted });
  add('02-enhanced-global-warming',
    svg(900, 645, 'Enhanced global warming', s, ),
    'Sunlight reaches the ground; heat rises, but extra greenhouse gas in the atmosphere sends more of it back. Sources drawn on the ground: power stations and factories, forest burning and vehicles giving carbon dioxide, and methane from cattle, rice and landfill. Global effects: rising temperatures, melting ice, sea-level rise, more extreme weather and changing crop zones.',
    'Extra gases from human activity make the natural greenhouse effect stronger.',
    '## The threats, activity by activity');
}

// 03 Local to global scale
{
  let s = rrect(30, 110, 840, 400, C.tealLight, C.tealDark, 2.5, 18) + rrect(80, 180, 740, 310, '#ffffff', C.olive, 2.5, 16) + rrect(150, 255, 600, 215, C.cream, C.rust, 2.5, 14);
  s += t(60, 148, 'GLOBAL', { size: 20, weight: 700, fill: C.tealDark }) + t(160, 148, 'greenhouse gas emissions warm the whole planet', { size: 17 });
  s += t(110, 218, 'CROSSES BORDERS', { size: 20, weight: 700, fill: C.olive }) + t(310, 218, 'acid rain from sulphur and nitrogen gases', { size: 17 });
  s += t(180, 293, 'LOCAL', { size: 20, weight: 700, fill: C.rust });
  s += bullets(180, 330, ['Quarry noise and dust', 'Noise from airports, motorways, factories: stress, poor sleep', 'Visual pollution: quarries, power lines, litter; can harm tourism'], 540, { size: 17, gap: 12 }).svg;
  s += t(450, 540, 'Exam questions often ask you to say which scale a threat works at.', { size: 17, anchor: 'middle', fill: C.muted, italic: true });
  add('03-pollution-scales',
    svg(900, 565, 'From local to global', s),
    'Three nested boxes. Local: quarry noise and dust, noise from airports and motorways, and visual pollution from quarries, power lines and litter. Crossing borders: acid rain from sulphur and nitrogen gases. Global: greenhouse gas emissions.',
    'Some threats stay local, acid rain crosses borders, greenhouse gases are global.',
    '## The threats, activity by activity');
}

// 04 Sustainable development
{
  let s = panel(30, 110, 840, 92, C.cream, C.olive) + para(55, 146, 'Meets the needs of people today without reducing the ability of future generations to meet their own needs.', 790, { size: 18, weight: 600 }).svg;
  const cs = [[230, 330, C.mustard, 'Economic', 'growth'], [340, 330, C.teal, 'People’s', 'well-being'], [285, 425, C.grass, 'Environment', 'protection']];
  cs.forEach(([x, y, col]) => { s += `<circle cx="${x}" cy="${y}" r="105" fill="${col}" opacity="0.45" stroke="${C.ink}" stroke-width="2.5"/>`; });
  s += t(185, 305, 'Economic', { size: 18, weight: 700, anchor: 'middle' }) + t(185, 327, 'growth', { size: 16, anchor: 'middle' });
  s += t(390, 305, 'People’s', { size: 18, weight: 700, anchor: 'middle' }) + t(390, 327, 'well-being', { size: 16, anchor: 'middle' });
  s += t(285, 478, 'Environment', { size: 18, weight: 700, anchor: 'middle' }) + t(285, 500, 'protection', { size: 16, anchor: 'middle' });
  s += t(285, 375, 'balance', { size: 16, weight: 700, anchor: 'middle', fill: C.ink });
  s += t(285, 568, 'Sustainable development balances all three', { size: 16.5, anchor: 'middle', fill: C.muted, italic: true });
  const st = [['Laws and regulation', 'emissions limits, protected areas, fines'], ['Cleaner technology', 'treat waste water, chimney filters, renewables'], ['Better farming', 'terraces, contour ploughing, windbreaks'], ['Restore damaged land', 'replant forests, landscape quarries'], ['Monitoring', 'satellite images detect illegal clearance'], ['International agreements', 'targets to cut greenhouse gases']];
  st.forEach(([a, b], i) => { const y = 222 + i * 66; s += rrect(510, y, 360, 58, '#ffffff', C.panelEdge, 2.5, 10) + t(526, y + 24, a, { size: 16.5, weight: 700 }) + t(526, y + 46, b, { size: 14.5, fill: C.muted }); });
  add('04-sustainable-development',
    svg(900, 620, 'Sustainable development and how to manage for it', s),
    'A definition: development that meets today’s needs without reducing the ability of future generations to meet theirs. Three overlapping circles show economic growth, people’s well-being and environmental protection in balance. Six strategies: laws and regulation, cleaner technology, better farming, restoring damaged land, satellite monitoring and international agreements.',
    'Growth, people and environment in balance, today and for the future.',
    '## Sustainable development and management');
}

// 05 Amazon case study
{
  const col = (x, title, items, fill, edge, tf) => {
    let s = t(x + 135, 138, title, { size: 20, weight: 700, anchor: 'middle', fill: tf });
    items.forEach(([a, b], i) => { s += card(x, 152 + i * 108, 270, 96, a, b, { fill, edge, ts: 17, bs: 15 }); });
    return s;
  };
  let s = col(30, 'Activities', [['Cattle ranching', 'largest single cause'], ['Soya farming', 'much exported as animal feed'], ['Logging', 'roads open forest to settlers'], ['Mining', 'Carajás iron ore; gold with mercury'], ['Roads and HEP', 'Trans-Amazonian Highway; Belo Monte']], '#ffffff', C.panelEdge, C.muted);
  s += col(315, 'Risks', [['Soil erosion, leaching', 'thin soils lose nutrients fast'], ['Global warming', 'carbon released; fewer trees absorb it'], ['Water pollution', 'mercury builds up in fish people eat'], ['Biodiversity loss', 'habitats destroyed'], ['Threats to people', 'indigenous land lost; land conflicts']], '#f6e6dc', C.rust, C.rust);
  s += col(600, 'Management', [['Protected areas', 'and indigenous territories'], ['Forest Code', 'landowners keep much land as forest'], ['Satellite monitoring', 'INPE detects clearance quickly'], ['Soy Moratorium (2006)', 'traders refuse soya from newly cleared land']], C.tealLight, C.tealDark, C.tealDark);
  s += rrect(600, 584, 270, 104, C.cream, C.olive, 2.5, 14) + tl(616, 612, wrap('Evaluation: clearance fell in the late 2000s with strong enforcement, then rose again in some years.', 240, 15), { size: 15 }, 19);
  add('05-amazon-case-study',
    svg(900, 710, 'Case study: the Amazon rainforest in Brazil', s),
    'Three columns. Activities: cattle ranching, soya farming, logging, mining at Carajás and gold mining with mercury, and roads and HEP such as the Trans-Amazonian Highway and Belo Monte dam. Risks: soil erosion and leaching, enhanced global warming, mercury pollution in fish, biodiversity loss, and loss of indigenous land. Management: protected areas, the Forest Code, INPE satellite monitoring and the 2006 Soy Moratorium; clearance fell when enforcement was strong but later rose again.',
    'Management works only when laws are enforced.',
    '## Case study: the Amazon rainforest in Brazil');
}

// 06 Worked example: forest loss data
{
  let s = panel(30, 110, 840, 250);
  s += t(55, 150, '2005', { size: 18, weight: 700 }) + `<rect x="130" y="128" width="600" height="40" rx="5" fill="${C.grass}" stroke="${C.ink}" stroke-width="2"/>` + t(742, 155, '8,400 km²', { size: 17, weight: 700 });
  s += t(55, 220, '2025', { size: 18, weight: 700 }) + `<rect x="130" y="198" width="450" height="40" rx="5" fill="${C.grass}" stroke="${C.ink}" stroke-width="2"/>` +
    `<rect x="580" y="198" width="150" height="40" rx="5" fill="#ffffff" stroke="${C.rust}" stroke-width="2.5" stroke-dasharray="7 5"/>` + t(655, 224, 'lost', { size: 16, weight: 700, anchor: 'middle', fill: C.rust }) + t(620, 262, '', {}) + t(355, 224, '6,300 km²', { size: 17, weight: 700, anchor: 'middle', fill: '#ffffff' });
  const cs = [['Loss', '8,400 − 6,300', '= 2,100 km²'], ['Percentage loss', '2,100 ÷ 8,400 × 100', '= 25%'], ['Average per year', '2,100 ÷ 20', '= 105 km²/yr']];
  cs.forEach(([h, f, a], i) => { const x = 55 + i * 270; s += rrect(x, 268, 250, 76, C.tealLight, C.ink, 2, 10) + t(x + 14, 292, h, { size: 15.5, weight: 700, fill: C.muted }) + t(x + 14, 322, f, { size: 16 }) + t(x + 236, 322, a, { size: 17, weight: 700, anchor: 'end', fill: C.tealDark }); });
  s += t(450, 400, 'Explain: why forest loss raises flood risk downstream', { size: 20, weight: 700, anchor: 'middle' });
  s += flowRight(30, 420, 195, 104, 20, [['Fewer trees', 'less rain intercepted'], ['More runoff', 'water runs quickly over the surface'], ['Silted rivers', 'eroded soil fills channels'], ['Flooding', 'rivers overflow more easily', { fill: '#f6e6dc', edge: C.rust }]], { ts: 18, bs: 15.5 });
  add('06-forest-loss-calculation',
    svg(900, 550, 'Worked example: forest loss in numbers', s, ),
    'Two bars for a fictional district: forest cover of 8,400 square kilometres in 2005 and 6,300 in 2025. Calculations: a loss of 2,100 square kilometres, 25 per cent, or 105 square kilometres a year over 20 years. Below, a chain explains the flood risk: fewer trees intercept rain, more water runs off quickly, eroded soil fills channels and rivers overflow more easily.',
    'Loss, percentage and rate: then link the numbers to a process.',
    '## Worked example: data and explanation');
}
