// Topic figures for cambridge-igcse-environmental-management-0680-climate-change
import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

// ---- local helpers (kept inside this lesson file on purpose) ----
const esc = (s) => String(s).replace(/&(?![a-z#0-9]+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const tw = (s, size, weight = 400) => String(s).replace(/&[a-z#0-9]+;/g, 'x').length * size * (weight >= 600 ? 0.575 : 0.535);
const wrap = (s, size, width, weight = 400) => {
  const lines = [''];
  for (const w of String(s).split(' ')) {
    const cur = lines[lines.length - 1];
    const cand = cur ? cur + ' ' + w : w;
    if (cur && tw(cand, size, weight) > width) lines.push(w); else lines[lines.length - 1] = cand;
  }
  return lines;
};
// wrapped paragraph; returns svg string. ph() gives its height.
const para = (x, y, s, width, o = {}) => {
  const size = o.size || 17, lh = o.lh || Math.round(size * 1.32);
  return tl(x, y, wrap(s, size, width, o.weight).map(esc), { ...o, size }, lh);
};
const ph = (s, width, o = {}) => { const size = o.size || 17, lh = o.lh || Math.round(size * 1.32); return wrap(s, size, width, o.weight).length * lh; };
// card: optional title + body text (string, or array of strings = separate paragraphs/bullets)
const cardLayout = (w, o) => {
  const pad = o.pad ?? 18, ts = o.tsize || 20, bs = o.bsize || 17, inner = w - 2 * pad;
  const tLines = o.title ? wrap(o.title, ts, inner, 700) : [];
  const body = o.body == null ? [] : Array.isArray(o.body) ? o.body : [o.body];
  const blh = Math.round(bs * 1.32), tlh = Math.round(ts * 1.25);
  const bLines = body.map((b) => wrap((o.bullet ? '• ' : '') + b, bs, inner - (o.bullet ? 0 : 0), o.bweight));
  const contentH = tLines.length * tlh + (tLines.length && body.length ? 8 : 0) + bLines.reduce((a, l) => a + l.length * blh, 0) + Math.max(0, body.length - 1) * (o.gap ?? 6);
  return { pad, ts, bs, inner, tLines, bLines, blh, tlh, contentH, h: contentH + 2 * pad - 4 + (o.top || 0) };
};
const cardH = (w, o) => cardLayout(w, o).h;
const card = (x, y, w, o = {}) => {
  const L = cardLayout(w, o);
  const h = o.h || L.h;
  const anchor = o.center ? 'middle' : 'start';
  const tx = o.center ? x + w / 2 : x + L.pad;
  let yy = y + (o.top || 0) + L.pad + L.ts * 0.78 + (o.vcenter === false ? 0 : (h - L.h) / 2);
  if (!o.title) yy = yy - L.ts * 0.78 + L.bs * 0.78;
  let s = o.noBox ? '' : `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 12}" fill="${o.fill || C.panel}" stroke="${o.edge || C.panelEdge}" stroke-width="${o.ew ?? 2.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
  L.tLines.forEach((ln) => { s += t(tx, yy, esc(ln), { size: L.ts, weight: 700, fill: o.tfill || C.ink, anchor }); yy += L.tlh; });
  if (L.tLines.length && L.bLines.length) yy += 8;
  L.bLines.forEach((lines, i) => { lines.forEach((ln) => { s += t(tx, yy, esc(ln), { size: L.bs, fill: o.bfill || C.ink, anchor, weight: o.bweight || 400 }); yy += L.blh; }); yy += o.gap ?? 6; });
  return s;
};
// rounded tag sized to its text
const tag = (x, y, s, o = {}) => {
  const size = o.size || 16, w = tw(s, size, o.weight || 600) + 24, h = size + 14;
  const x0 = o.anchor === 'middle' ? x - w / 2 : o.anchor === 'end' ? x - w : x;
  return `<rect x="${x0}" y="${y - h / 2}" width="${w}" height="${h}" rx="${h / 2}" fill="${o.fill || C.cream}" stroke="${o.edge || C.olive}" stroke-width="2"/>` + t(x0 + w / 2, y + size * 0.36, esc(s), { size, weight: o.weight || 600, anchor: 'middle', fill: o.color || C.ink });
};
// curved arrow (quadratic)
const carrow = (x1, y1, cx, cy, x2, y2, { color = C.ink, w = 3.5, marker = 'ah', dash = '' } = {}) =>
  `<path d="M${x1},${y1} Q${cx},${cy} ${x2},${y2}" fill="none" stroke="${color}" stroke-width="${w}" marker-end="url(#${marker})"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
// poly-line arrow through points
const parrow = (pts, { color = C.ink, w = 3.5, marker = 'ah', dash = '' } = {}) =>
  `<polyline points="${pts.map((p) => p.join(',')).join(' ')}" fill="none" stroke="${color}" stroke-width="${w}" stroke-linejoin="round" marker-end="url(#${marker})"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const notToScale = (x, y, anchor = 'end') => t(x, y, 'Not to scale', { size: 15, italic: true, fill: C.muted, anchor });
// simple chart frame: returns {svg, X, Y}
const chart = (x0, y0, w, h, { xmin, xmax, ymin, ymax, xticks, yticks, xlabel, ylabel, xfmt = (v) => v, yfmt = (v) => v, grid = true }) => {
  const X = (v) => x0 + ((v - xmin) / (xmax - xmin)) * w;
  const Y = (v) => y0 + h - ((v - ymin) / (ymax - ymin)) * h;
  let s = `<rect x="${x0}" y="${y0}" width="${w}" height="${h}" fill="${C.panel}"/>`;
  for (const v of yticks) s += (grid ? `<line x1="${x0}" y1="${Y(v)}" x2="${x0 + w}" y2="${Y(v)}" stroke="${C.panelEdge}" stroke-width="1.5"/>` : '') + `<line x1="${x0 - 7}" y1="${Y(v)}" x2="${x0}" y2="${Y(v)}" stroke="${C.ink}" stroke-width="2"/>` + t(x0 - 12, Y(v) + 6, yfmt(v), { size: 16, anchor: 'end' });
  for (const v of xticks) s += `<line x1="${X(v)}" y1="${y0 + h}" x2="${X(v)}" y2="${y0 + h + 7}" stroke="${C.ink}" stroke-width="2"/>` + t(X(v), y0 + h + 28, xfmt(v), { size: 16, anchor: 'middle' });
  s += `<path d="M${x0},${y0} L${x0},${y0 + h} L${x0 + w},${y0 + h}" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`;
  if (xlabel) s += t(x0 + w / 2, y0 + h + 60, esc(xlabel), { size: 17, weight: 600, anchor: 'middle' });
  if (ylabel) s += `<text x="0" y="0" transform="translate(${x0 - 62},${y0 + h / 2}) rotate(-90)" font-size="17" font-weight="600" fill="${C.ink}" text-anchor="middle">${esc(ylabel)}</text>`;
  return { svg: s, X, Y };
};
const dot = (x, y, r = 7, fill = C.tealDark) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>`;
const line = (x1, y1, x2, y2, color = C.ink, w = 2.5, dash = '') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const rect = (x, y, w, h, fill, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 0}" fill="${fill}"${o.stroke ? ` stroke="${o.stroke}" stroke-width="${o.sw ?? 2.5}"` : ''}${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}${o.op ? ` opacity="${o.op}"` : ''}/>`;
const tree = (x, y, s = 1) => `<rect x="${x - 4 * s}" y="${y - 22 * s}" width="${8 * s}" height="${22 * s}" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/><circle cx="${x}" cy="${y - 38 * s}" r="${22 * s}" fill="${C.grass}" stroke="${C.ink}" stroke-width="2.5"/>`;
const cloud = (cx, cy, w, h, fill = C.tealLight) => {
  const rx = w / 2, ry = h / 2;
  return `<path d="M${cx - rx},${cy + ry} Q${cx - rx - ry * 0.9},${cy + ry} ${cx - rx},${cy} Q${cx - rx + 5},${cy - ry * 1.2} ${cx - rx * 0.45},${cy - ry * 0.85} Q${cx - rx * 0.2},${cy - ry * 1.9} ${cx + rx * 0.25},${cy - ry * 1.1} Q${cx + rx * 0.75},${cy - ry * 1.6} ${cx + rx * 0.85},${cy - ry * 0.3} Q${cx + rx + ry * 0.9},${cy - ry * 0.2} ${cx + rx},${cy + ry} Z" fill="${fill}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
};

export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

export const slug = 'cambridge-igcse-environmental-management-0680-climate-change';

// 01 Causes sorted by gas
{
  const causes = [
    ['Combustion of fossil fuels', 'coal, oil and gas release carbon stored for millions of years'],
    ['Deforestation', 'less CO₂ removed by photosynthesis; burning cleared trees releases it'],
    ['Cement manufacture', 'heating calcium carbonate (limestone) releases CO₂'],
    ['Increasing population and energy use', 'more people using more energy, mostly from fossil fuels'],
    ['Agriculture', 'cattle digestion, manure and flooded rice fields'],
    ['Changes in land use', 'draining wetlands'],
  ];
  const cw = 520, o = { tsize: 19, bsize: 16, pad: 14 };
  const hs = causes.map(([a, b]) => cardH(cw, { title: a, body: b, ...o }));
  let y = 110, s = '', ys = [];
  causes.forEach(([a, b], i) => { if (i === 4) y += 26; s += card(30, y, cw, { title: a, body: b, ...o, h: hs[i] }); ys.push(y + hs[i] / 2); y += hs[i] + 12; });
  const co2Top = 110, co2Bot = ys[3] + hs[3] / 2, ch4Top = ys[4] - hs[4] / 2, ch4Bot = ys[5] + hs[5] / 2;
  s += rect(650, co2Top, 220, co2Bot - co2Top, C.rock, { stroke: C.ink, sw: 3, rx: 14 }) + t(760, (co2Top + co2Bot) / 2 - 8, 'CO₂', { size: 40, weight: 700, anchor: 'middle' }) + t(760, (co2Top + co2Bot) / 2 + 24, 'carbon dioxide', { size: 18, anchor: 'middle' });
  s += rect(650, ch4Top, 220, ch4Bot - ch4Top, C.teal, { stroke: C.ink, sw: 3, rx: 14 }) + t(760, (ch4Top + ch4Bot) / 2 - 6, 'CH₄', { size: 40, weight: 700, anchor: 'middle' }) + t(760, (ch4Top + ch4Bot) / 2 + 24, 'methane', { size: 18, anchor: 'middle' });
  ys.forEach((yy, i) => { const tgt = i < 4 ? Math.min(Math.max(yy, co2Top + 30), co2Bot - 30) : Math.min(Math.max(yy, ch4Top + 20), ch4Bot - 20); s += arrow(554, yy, 640, tgt, { w: 3.5 }); });
  const note = 'Cement releases CO₂ in two ways: calcium carbonate → calcium oxide + carbon dioxide, and the kiln is usually heated by burning fossil fuels.';
  s += card(30, y + 14, 840, { body: note, bsize: 17, fill: C.cream, edge: C.olive });
  add('01-causes-by-gas',
    svg(900, y + 14 + cardH(840, { body: note, bsize: 17 }) + 30, 'Six causes, two gases', s),
    'Six causes of rising greenhouse gas concentrations linked to the gas each releases. Fossil fuel combustion, deforestation, cement manufacture and increasing population and energy use add carbon dioxide; agriculture and changes in land use such as draining wetlands add methane.',
    'Learn each cause with its gas: four add carbon dioxide, two add methane.',
    '## Causes of increased concentrations (4.2.3)');
}

// 02 Enhanced greenhouse effect
{
  const L = 30, R = 500, top = 110, bot = 560;
  let s = panel(L, top, R - L, bot - top);
  s += rect(L + 2, 470, R - L - 4, 88, C.cream) + line(L + 2, 470, R - 2, 470, C.ink, 3) + t((L + R) / 2, 525, 'Earth’s surface', { size: 17, weight: 700, anchor: 'middle' });
  s += rect(L + 2, 230, R - L - 4, 84, C.tealLight) + t(L + 70, 254, 'greenhouse gases', { size: 16, weight: 700, fill: C.tealDark });
  [[105, 292], [140, 302], [170, 280], [215, 296], [265, 284], [310, 300], [365, 286], [395, 302], [440, 290], [480, 280]].forEach(([x, yy]) => { s += `<circle cx="${x}" cy="${yy}" r="7" fill="${C.rust}" stroke="${C.ink}" stroke-width="1.5"/>`; });
  s += `<circle cx="62" cy="150" r="24" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + t(98, 144, 'solar radiation', { size: 16, weight: 600, fill: C.olive });
  s += arrow(68, 176, 80, 462, { w: 5, color: C.olive, marker: 'ahO' });
  [330, 410].forEach((x) => { s += arrow(x, 466, x, 300, { w: 4 }) + arrow(x + 22, 300, x + 22, 462, { w: 4, color: C.rust, marker: 'ahR' }); });
  s += arrow(470, 466, 470, 160, { w: 4 }) + t(458, 150, 'some escapes', { size: 15, anchor: 'end', fill: C.muted });
  s += tl(315, 360, ['radiation from the surface', 'is absorbed and', 're-emitted back down'], { size: 16, fill: C.rust, weight: 600, anchor: 'end' }, 21);
  // chain
  const chain = [
    ['Higher concentrations of greenhouse gases', 'more radiation absorbed and re-emitted', C.panel, C.panelEdge],
    ['Global warming', 'average temperatures rise', C.cream, C.olive],
    ['Climate change', 'long-term changes in temperature, rainfall, wind and extreme weather', C.rock, C.ink],
  ];
  let y = top; const cx = 520, cw = 350;
  const hs = chain.map(([a, b]) => cardH(cw, { title: a, body: b, tsize: 19, bsize: 16 }));
  const gap = (bot - top - hs.reduce((p, q) => p + q, 0)) / 2;
  chain.forEach(([a, b, f, e], i) => { s += card(cx, y, cw, { title: a, body: b, tsize: 19, bsize: 16, fill: f, edge: e, h: hs[i] }); if (i < 2) s += arrow(cx + cw / 2, y + hs[i] + 4, cx + cw / 2, y + hs[i] + gap - 6, { w: 4 }); y += hs[i] + gap; });
  const def = 'A greenhouse gas absorbs radiation and emits the energy as thermal (heat) energy.';
  s += card(30, 580, 840, { body: def, bsize: 18, fill: C.panel, edge: C.panelEdge, h: 110, vcenter: false });
  s += tag(54, 660, 'carbon dioxide CO₂', { fill: C.rock, edge: C.ink }) + tag(290, 660, 'water vapour H₂O', { fill: C.tealLight, edge: C.tealDark }) + tag(510, 660, 'methane CH₄', { fill: C.teal, edge: C.ink });
  s += notToScale(488, 548);
  add('02-enhanced-greenhouse-effect',
    svg(900, 720, 'Gases → warming → climate change', s),
    'Left: solar radiation reaches the Earth’s surface; radiation from the surface is absorbed by a layer of greenhouse gases and re-emitted back down, while some escapes. Right: higher gas concentrations lead to global warming, which leads to climate change. Below: the definition of a greenhouse gas and the three named gases.',
    'Keep the order: more gas, then global warming, then climate change.',
    '## The enhanced greenhouse effect (4.2.4)');
}

// 03 Twelve impacts in three groups
{
  const groups = [
    ['Physical changes', C.teal, ['Warmer Earth surface', 'Warmer ocean surface', 'Ice sheets, glaciers and permafrost melt: sea level rises', 'Ocean acidification: harder for corals and shells to form', 'More frequent, severe extreme weather: flooding, loss of land, drought, wildfires']],
    ['Living things', C.tealLight, ['Food chains disrupted when timings no longer match', 'Change in biodiversity', 'Loss of habitat: sea ice, coral reefs, coastal wetlands', 'Forced migration of humans and animals', 'More pest outbreaks and invasive species']],
    ['Effects on food', C.cream, ['Crop yields change: longer seasons in some cold regions, lower yields in hotter, drier ones', 'Food shortages where yields fall, extreme weather destroys crops and fisheries decline']],
  ];
  const cw = 268, gx = 18;
  let s = card(300, 110, 300, { title: 'Climate change', fill: C.rock, edge: C.ink, center: true, tsize: 22, h: 56 });
  const y0 = 230;
  let maxY = 0;
  groups.forEach(([head, fill, items], c) => {
    const x = 30 + c * (cw + gx);
    s += parrow([[450, 166], [450, 186], [x + cw / 2, 186], [x + cw / 2, y0 - 6]], { w: 3 });
    s += card(x, y0, cw, { title: head, fill, edge: C.ink, center: true, tsize: 19, h: 50 });
    let y = y0 + 64;
    items.forEach((it) => { const h = cardH(cw, { body: it, bsize: 16, pad: 14 }); s += card(x, y, cw, { body: it, bsize: 16, pad: 14, h }); y += h + 10; });
    maxY = Math.max(maxY, y);
  });
  add('03-impacts-grouped',
    svg(900, maxY + 20, 'Twelve impacts in three groups', s),
    'Climate change branches into three groups of impacts. Physical changes: warmer land and ocean surfaces, melting ice and rising sea level, ocean acidification and more extreme weather. Effects on living things: disrupted food chains, biodiversity change, habitat loss, forced migration, pests and invasive species. Effects on food: changing crop yields and food shortages.',
    'Group the twelve impacts, then link them as cause and effect in longer answers.',
    '## Impacts of climate change (4.2.5)');
}

// 04 Why sea level rises
{
  const sea0 = 380, sea1 = 352, sb = 530;
  let s = panel(30, 110, 840, 460);
  s += rect(290, sea1, 578, sb - sea1, C.teal);
  s += line(290, sea0, 868, sea0, C.tealDark, 2.5, '10 7') + line(290, sea1, 868, sea1, C.blue, 3.5);
  s += `<path d="M32,236 L250,236 L350,${sb} L32,${sb} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  s += `<path d="M40,236 Q140,136 248,236 Z" fill="${C.panel}" stroke="${C.blue}" stroke-width="3" stroke-linejoin="round"/>`;
  s += t(60, 166, 'land ice: ice sheets and glaciers', { size: 17, weight: 700 });
  s += t(140, 420, 'land', { size: 17, weight: 600, anchor: 'middle' });
  s += carrow(244, 232, 310, 236, 330, 340, { w: 4.5, color: C.blue });
  s += t(860, sea0 + 24, 'sea level before', { size: 15, anchor: 'end', fill: C.tealDark, weight: 600 }) + t(860, sea1 - 10, 'sea level after', { size: 15, anchor: 'end', fill: C.blue, weight: 700 });
  s += `<path d="M560,${sea1} L680,${sea1} L668,${sea1 + 20} L572,${sea1 + 20} Z" fill="${C.panel}" stroke="${C.blue}" stroke-width="3"/><path d="M580,${sea1} L660,${sea1} L655,${sea1 - 12} L588,${sea1 - 12} Z" fill="${C.panel}" stroke="${C.blue}" stroke-width="3"/>`;
  s += t(620, 324, 'floating sea ice', { size: 16, weight: 700, anchor: 'middle' });
  s += t(380, 450, '1  Meltwater from land ice', { size: 17, weight: 700 }) + t(404, 472, 'adds water to the ocean', { size: 17 });
  s += t(650, 450, '2  Warmer water expands', { size: 17, weight: 700 });
  s += arrow(735, 488, 680, 488, { w: 3.5, color: C.tealDark, marker: 'ahT' }) + arrow(755, 488, 810, 488, { w: 3.5, color: C.tealDark, marker: 'ahT' });
  s += notToScale(858, 556);
  const note = { title: 'Melting floating sea ice does not significantly raise sea level', body: 'When explaining sea-level rise, name the land ice: ice sheets and glaciers.', fill: C.cream, edge: C.olive, tsize: 18, bsize: 17 };
  s += card(30, 590, 840, note);
  add('04-sea-level-rise',
    svg(900, 590 + cardH(840, note) + 30, 'Why sea level rises', s),
    'Cross-section of land carrying an ice sheet beside the ocean. Meltwater from the land ice flows into the sea and warmer water expands, so sea level rises from a dashed earlier line to a higher line. Floating sea ice sits in the water and is marked as not significantly raising sea level.',
    'Sea level rises from melting land ice and expanding warmer water, not from melting sea ice.',
    '## Impacts of climate change (4.2.5)');
}

// 05 Twelve strategies grouped by what they do
{
  const groups = [
    ['Use less fossil energy', C.rock, ['Reduced use of fossil fuels', 'Increase in energy efficiency', 'Transport policies', 'Fewer children per woman']],
    ['Cut farm emissions', C.teal, ['Sustainable food choices', 'Reduction in livestock farming']],
    ['Take CO₂ out of the air', C.tealLight, ['Reforestation and afforestation', 'Carbon sequestration']],
    ['Steer and plan', C.cream, ['International agreements and policies', 'Taxation', 'Research and climate models', 'Artificial intelligence (AI)']],
  ];
  const notes = ['renewables, walking, cycling, public transport, insulation; slower population growth cuts future demand', 'less methane from livestock; less transport and heated greenhouses', 'photosynthesis, or capturing CO₂ and storing it underground', 'targets, prices and predictions that guide choices'];
  let s = '';
  const pw = 410;
  const need = groups.map(([, , items], i) => 82 + (items.length - 1) * 38 + 40 + ph(notes[i], pw - 40, { size: 15 }) + 6);
  const rowH = [Math.max(need[0], need[1]), Math.max(need[2], need[3])];
  const phh = rowH[0];
  groups.forEach(([head, fill, items], i) => {
    const r = Math.floor(i / 2), phh = rowH[r];
    const x = 30 + (i % 2) * (pw + 20), y = 110 + (r ? rowH[0] + 20 : 0);
    s += panel(x, y, pw, phh) + rect(x, y, pw, 50, fill, { stroke: C.panelEdge, sw: 2.5, rx: 14 }) + rect(x + 1.5, y + 30, pw - 3, 20, fill) + t(x + 20, y + 34, head, { size: 20, weight: 700 });
    items.forEach((it, j) => { s += tag(x + 20, y + 82 + j * 38, it, { size: 16, fill: C.panel, edge: C.ink, weight: 600 }).replace(/<rect x="[^"]+"/, (m) => m); });
    s += para(x + 20, y + 82 + (items.length - 1) * 38 + 46, notes[i], pw - 40, { size: 15, fill: C.muted, italic: true });
  });
  add('05-footprint-strategies',
    svg(900, 110 + rowH[0] + rowH[1] + 20 + 30, 'Reducing carbon footprints: twelve strategies', s),
    'The twelve named strategies in four groups. Use less fossil energy: reduced fossil fuel use, energy efficiency, transport policies, fewer children per woman. Cut farm emissions: sustainable food choices, less livestock farming. Take carbon dioxide out of the air: reforestation and afforestation, carbon sequestration. Steer and plan: international agreements, taxation, research and climate models, AI.',
    'Grouping the twelve strategies by what they do makes them easier to recall and explain.',
    '## Reducing carbon footprints (4.2.6)');
}

// 06 Cause vs effects: footprints vs adaptation
{
  const chain = ['Emissions', 'More greenhouse gases', 'Global warming', 'Climate change impacts'];
  let s = '';
  const bw = 186, gx = 32, y = 250;
  chain.forEach((c, i) => { const x = 30 + i * (bw + gx); s += card(x, y, bw, { title: c, tsize: 18, center: true, h: 80, fill: i === 3 ? C.rock : C.panel, edge: i === 3 ? C.ink : C.panelEdge }); if (i < 3) s += arrow(x + bw + 3, y + 40, x + bw + gx - 4, y + 40, { w: 4 }); });
  s += card(30, 110, 400, { title: 'Reducing carbon footprints', body: 'tackles the cause', fill: C.teal, edge: C.tealDark, tsize: 19, center: true, h: 90 }) + arrow(123, 202, 123, 244, { w: 4, color: C.tealDark, marker: 'ahT' });
  s += card(470, 110, 400, { title: 'Adaptation', body: 'copes with the effects', fill: C.cream, edge: C.olive, tsize: 19, center: true, h: 90 }) + arrow(777, 202, 777, 244, { w: 4, color: C.olive, marker: 'ahO' });
  s += t(450, 380, 'Adaptation: altering behaviour, practices and infrastructure to adapt to the impacts', { size: 17, anchor: 'middle', weight: 600 });
  const ad = [
    ['Resistant crops', 'varieties that tolerate warmer, drier or wetter conditions, such as drought- or flood-tolerant'],
    ['Better flood defences', 'sea walls, embankments, flood barriers, restored wetlands that store water'],
    ['Legislation', 'limits new homes near coasts and on floodplains at risk'],
    ['Building design', 'raised floors, flood-resistant materials, shading, insulation, reflective roofs'],
  ];
  const aw = 201, ah = Math.max(...ad.map(([a, b]) => cardH(aw, { title: a, body: b, tsize: 18, bsize: 16, pad: 14 })));
  ad.forEach(([a, b], i) => { s += card(30 + i * 213, 405, aw, { title: a, body: b, tsize: 18, bsize: 16, pad: 14, h: ah, vcenter: false, fill: C.panel, edge: C.olive }); });
  add('06-mitigation-vs-adaptation',
    svg(900, 405 + ah + 30, 'Tackle the cause or cope with the effects', s),
    'A chain from emissions to more greenhouse gases, global warming and climate change impacts. Reducing carbon footprints acts at the start of the chain; adaptation acts at the end. Below are the four adaptation strategies: resistant crops, better flood defences, legislation on building in risky areas, and building design.',
    'Footprint strategies reduce the cause; adaptation strategies reduce the harm.',
    '## Adaptation (4.2.7 and 4.2.8)');
}

// 07 Worked example: carbon footprint calculation
{
  const ch = chart(140, 130, 360, 400, { xmin: 0, xmax: 2, ymin: 0, ymax: 3000, xticks: [], yticks: [0, 500, 1000, 1500, 2000, 2500, 3000], ylabel: 'CO₂ from travel (kg per year)', yfmt: (v) => v.toLocaleString('en-GB') });
  let s = ch.svg;
  const bar = (cx, v0, v1, fill, label) => rect(cx - 60, ch.Y(v1), 120, ch.Y(v0) - ch.Y(v1), fill, { stroke: C.ink, sw: 2.5 }) + (label ? t(cx, (ch.Y(v0) + ch.Y(v1)) / 2 + 6, label, { size: 17, weight: 700, anchor: 'middle' }) : '');
  s += bar(230, 0, 2700, C.rock, 'car 2,700') + bar(410, 0, 1620, C.rock, 'car 1,620') + bar(410, 1620, 1920, C.teal, 'bus 300');
  s += t(230, 562, 'Before', { size: 18, weight: 700, anchor: 'middle' }) + t(410, 562, 'After', { size: 18, weight: 700, anchor: 'middle' });
  s += t(230, ch.Y(2700) - 12, '2,700 kg', { size: 17, weight: 700, anchor: 'middle' }) + t(410, ch.Y(1920) - 12, '1,920 kg', { size: 17, weight: 700, anchor: 'middle' });
  s += line(290, ch.Y(2700), 510, ch.Y(2700), C.rust, 2.5, '8 6') + arrow(510, ch.Y(2700), 510, ch.Y(1920) - 4, { color: C.rust, w: 3.5, marker: 'ahR' });
  s += t(522, ch.Y(2350) - 6, 'saving', { size: 17, weight: 700, fill: C.rust }) + t(522, ch.Y(2350) + 16, '780 kg', { size: 17, weight: 700, fill: C.rust });
  const steps = [['Car before', '15,000 × 0.18 = 2,700'], ['Switched', '15,000 × 40 ÷ 100 = 6,000 km'], ['Car after', '9,000 × 0.18 = 1,620'], ['Bus', '6,000 × 0.05 = 300'], ['New total', '1,620 + 300 = 1,920'], ['Saving', '780 ÷ 2,700 × 100 = 28.9%']];
  s += panel(610, 130, 260, 400) + t(630, 164, 'Working (kg)', { size: 19, weight: 700 });
  steps.forEach(([a, b], i) => { s += t(630, 204 + i * 54, a, { size: 15, weight: 700, fill: i === 5 ? C.rust : C.tealDark }) + t(630, 226 + i * 54, b, { size: 16, weight: i === 5 ? 700 : 400 }); });
  add('07-footprint-calculation',
    svg(900, 600, 'A family’s travel footprint', s + t(450, 590, 'Invented practice figures: 40% of 15,000 km switched from car (0.18 kg/km) to bus (0.05 kg/km).', { size: 15, anchor: 'middle', fill: C.muted, italic: true })),
    'Bar chart of yearly carbon dioxide from travel. Before: 2,700 kg, all from the car. After switching 40% of journeys to the bus: 1,620 kg from the car plus 300 kg from the bus, 1,920 kg in total, a saving of 780 kg or 28.9%. The working is listed beside the chart.',
    'Work out each part, add them, then find the saving as a percentage of the original.',
    '## Worked example 1: a carbon footprint calculation');
}
