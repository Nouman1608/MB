import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-oxfordaqa-pakistan-studies-landscape-and-natural-resources';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- local helpers (kept in this file so style.mjs stays shared and untouched) ----
const X = (s) => String(s).replace(/&(?!amp;|lt;|gt;|#\d+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const GW = { ' ': .28, a: .55, b: .6, c: .55, d: .6, e: .57, f: .35, g: .6, h: .59, i: .25, j: .25, k: .53, l: .25, m: .88, n: .59, o: .59, p: .6, q: .6, r: .38, s: .5, t: .36, u: .59, v: .53, w: .79, x: .52, y: .53, z: .52, I: .28, M: .85, W: .95, '.': .27, ',': .27, ';': .27, ':': .27, '(': .35, ')': .35, "'": .25, '’': .25, '‘': .25, '"': .4, '–': .6, '—': 1, '-': .4, '/': .38, '•': .4, '%': .8, '&': .7 };
const tw = (s, size, weight = 400) => [...String(s)].reduce((a, ch) => a + (GW[ch] ?? (/[A-Z]/.test(ch) ? .68 : /[0-9]/.test(ch) ? .6 : .6)), 0) * size * (weight >= 600 ? 1.06 : 1);
const wrap = (s, width, size, weight) => {
  const out = [];
  for (const p of String(s).split('\n')) {
    let line = '';
    for (const w of p.split(' ')) { const c = line ? line + ' ' + w : w; if (line && tw(c, size, weight) > width) { out.push(line); line = w; } else line = c; }
    out.push(line);
  }
  return out;
};
const T = (x, y, s, o = {}) => t(x, y, X(s), o);
// wrapped paragraph, y = first baseline; returns {s, h}
const para = (x, y, s, width, o = {}) => {
  const size = o.size || 17, lh = o.lh || Math.round(size * 1.32);
  const L = wrap(s, width, size, o.weight || 400);
  return { s: L.map((l, i) => T(x, y + i * lh, l, o)).join(''), h: L.length * lh, n: L.length };
};
const R = (x, y, w, h, fill = C.panel, edge = C.panelEdge, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 12}" fill="${fill}" stroke="${edge}" stroke-width="${o.sw ?? 2.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
// card: title + body (string or array; bullets) -> {s, h}. Fixed height via o.h.
const card = (x, y, w, o = {}) => {
  const { title, body, fill = C.panel, edge = C.panelEdge, ts = 20, bs = 17, tfill = C.ink, bfill = C.muted, pad = 18, align = 'start', bullets = false, sub } = o;
  let inner = '', cy = y + pad - 2;
  const tx = align === 'middle' ? x + w / 2 : x + pad, iw = w - 2 * pad;
  if (title) { const p = para(tx, cy + ts * 0.85, title, iw, { size: ts, weight: 700, fill: tfill, anchor: align }); inner += p.s; cy += p.h + 2; }
  if (sub) { const p = para(tx, cy + 15 * 0.85, sub, iw, { size: 15, fill: o.subfill || C.muted, anchor: align, weight: 600 }); inner += p.s; cy += p.h + 2; }
  if (body) {
    if (title || sub) cy += 4;
    const items = Array.isArray(body) ? body : [body];
    for (const it of items) {
      if (bullets) { const p = para(tx + 16, cy + bs * 0.85, it, iw - 16, { size: bs, fill: bfill }); inner += T(tx, cy + bs * 0.85, '•', { size: bs, fill: bfill, weight: 700 }) + p.s; cy += p.h + 3; }
      else { const p = para(tx, cy + bs * 0.85, it, iw, { size: bs, fill: bfill, anchor: align }); inner += p.s; cy += p.h + 3; }
    }
  }
  const h = o.h || Math.round(cy - y + pad - 6);
  return { s: R(x, y, w, h, fill, edge, o) + inner, h };
};
const cardH = (w, o) => card(0, 0, w, o).h;
// vertical timeline: items [{d, title, body, hi}] -> {s, h}
const timeline = (x, y, w, items, o = {}) => {
  const dw = o.dw || 130, gap = o.gap || 14, cx = x + dw / 2;
  let s = '', cy = y; const mids = [];
  for (const it of items) {
    const c = card(x + dw + 22, cy, w - dw - 22, { title: it.title, body: it.body, ts: o.ts || 19, bs: o.bs || 16, fill: it.hi ? C.cream : C.panel, edge: it.hi ? C.olive : C.panelEdge, bullets: it.bullets });
    const ph = 40, py = cy + Math.min(c.h / 2, 34) - ph / 2;
    s += c.s; mids.push([py, ph, it]);
    cy += c.h + gap;
  }
  const line = `<line x1="${cx}" y1="${y + 10}" x2="${cx}" y2="${cy - gap - 10}" stroke="${C.ink}" stroke-width="4"/>`;
  const pills = mids.map(([py, ph, it]) => R(x, py, dw, ph, it.hi ? C.mustard : C.cream, C.ink, { rx: 20, sw: 2.5 }) + T(cx, py + 27, it.d, { size: tw(it.d, 19, 700) > dw - 14 ? 16 : 19, weight: 700, anchor: 'middle' }) +
    `<line x1="${x + dw}" y1="${py + ph / 2}" x2="${x + dw + 22}" y2="${py + ph / 2}" stroke="${C.ink}" stroke-width="2.5"/>`).join('');
  return { s: line + s + pills, h: cy - gap - y };
};
// grid table: cols [{label, w}], rows [[cells]] -> {s, h}
const grid = (x, y, cols, rows, o = {}) => {
  const size = o.size || 16, hs = o.hs || 17, pad = 12, lh = Math.round(size * 1.32);
  const W = cols.reduce((a, c) => a + c.w, 0);
  const hh = Math.max(...cols.map((c) => wrap(c.label, c.w - 2 * pad, hs, 700).length)) * Math.round(hs * 1.3) + 22;
  let s = '', cy = y + hh, body = '';
  const head = cols.map((c, i) => { const xx = x + cols.slice(0, i).reduce((a, k) => a + k.w, 0); return para(xx + pad, y + 15 + hs * 0.85, c.label, c.w - 2 * pad, { size: hs, weight: 700 }).s; }).join('');
  rows.forEach((r, ri) => {
    const cells = r.map((cell, i) => wrap(cell, cols[i].w - 2 * pad, size, i === 0 && o.firstBold !== false ? 700 : 400));
    const rh = Math.max(...cells.map((L) => L.length)) * lh + 20;
    const hi = o.hiRows && o.hiRows.includes(ri);
    body += `<rect x="${x}" y="${cy}" width="${W}" height="${rh}" fill="${hi ? C.cream : ri % 2 ? C.tealLight : C.panel}"/>`;
    cells.forEach((L, i) => { const xx = x + cols.slice(0, i).reduce((a, k) => a + k.w, 0); body += L.map((l, k) => T(xx + pad, cy + 12 + size * 0.85 + k * lh, l, { size, weight: i === 0 && o.firstBold !== false ? 700 : 400, fill: i === 0 ? C.ink : C.ink })).join(''); });
    body += `<line x1="${x}" y1="${cy}" x2="${x + W}" y2="${cy}" stroke="${C.panelEdge}" stroke-width="1.5"/>`;
    cy += rh;
  });
  let vx = x; const vl = cols.slice(0, -1).map((c) => { vx += c.w; return `<line x1="${vx}" y1="${y}" x2="${vx}" y2="${cy}" stroke="${C.panelEdge}" stroke-width="1.5"/>`; }).join('');
  s = `<rect x="${x}" y="${y}" width="${W}" height="${cy - y}" rx="12" fill="${C.panel}"/>` + `<path d="M${x},${y + hh} L${x},${y + 12} Q${x},${y} ${x + 12},${y} L${x + W - 12},${y} Q${x + W},${y} ${x + W},${y + 12} L${x + W},${y + hh} Z" fill="${C.teal}"/>` +
    body + vl + head + `<rect x="${x}" y="${y}" width="${W}" height="${cy - y}" rx="12" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`;
  return { s, h: cy - y };
};
// elbow connector with arrow head: points [[x,y],...]
const elbow = (pts, o = {}) => path('M' + pts.map((p) => p.join(',')).join(' L'), { stroke: o.color || C.ink, w: o.w || 3.5, extra: `marker-end="url(#${o.marker || 'ah'})"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}` });
const note = (x, y, w, s, o = {}) => card(x, y, w, { body: s, fill: C.cream, edge: C.olive, bfill: C.ink, bs: o.bs || 17, title: o.title, ts: o.ts || 19, ...o });
// ---- end helpers ----

// 01 Hazard: causes and impacts
{
  const y = 140, w = 250;
  const ca = { title: 'Physical causes', body: ['Tectonic setting', 'Monsoon rainfall', 'Glacial melt'], bullets: true, fill: C.cream, edge: C.olive, bfill: C.ink, ts: 20 };
  const im = { title: 'Human impacts', body: ['Settlement damage', 'Displacement', 'Economic loss'], bullets: true, fill: '#f6e3d6', edge: C.rust, bfill: C.ink, ts: 20 };
  const h = Math.max(cardH(w, ca), cardH(w, im));
  let b = card(30, y, w, { ...ca, h }).s + card(620, y, w, { ...im, h }).s;
  b += R(330, y + h / 2 - 60, 240, 120, C.mustard, C.ink, { rx: 18 }) + T(450, y + h / 2 - 16, 'Named hazard', { size: 21, weight: 700, anchor: 'middle' }) + T(450, y + h / 2 + 12, 'earthquake, flood or', { size: 16, anchor: 'middle' }) + T(450, y + h / 2 + 34, 'glacial process', { size: 16, anchor: 'middle' });
  b += arrow(284, y + h / 2, 324, y + h / 2, { w: 5 }) + arrow(574, y + h / 2, 614, y + h / 2, { w: 5 });
  b += T(155, y - 14, 'CAUSE', { size: 16, weight: 700, fill: C.olive, anchor: 'middle' }) + T(450, y - 14, 'EVENT', { size: 16, weight: 700, anchor: 'middle' }) + T(745, y - 14, 'IMPACT', { size: 16, weight: 700, fill: C.rust, anchor: 'middle' });
  const n = note(30, y + h + 30, 840, 'The specification says “human and physical causes and impacts”: an answer that links a named hazard’s causes to its human impacts matches what is tested. A list of landforms on its own does not.');
  add('01-hazard-cause-impact',
    svg(900, y + h + 30 + n.h + 30, 'Answering on a physical hazard', b + n.s),
    'A three-part chain: physical causes (tectonic setting, monsoon rainfall, glacial melt) lead to a named hazard such as an earthquake, flood or glacial process, which leads to human impacts (settlement damage, displacement, economic loss).',
    'Link a named hazard’s causes to its human impacts.',
    '## How to approach it');
}

// 02 Monsoon vs western disturbances
{
  const y = 112;
  let b = R(30, y, 840, 330, '#e6eef0', C.panelEdge) + T(450, y + 28, 'schematic: arrows show general direction only, not a map', { size: 15, fill: C.muted, anchor: 'middle', italic: true });
  b += R(350, y + 120, 200, 110, C.mustard, C.ink, { rx: 16 }) + T(450, y + 182, 'Pakistan', { size: 22, weight: 700, anchor: 'middle' });
  b += arrow(150, y + 300, 342, y + 210, { w: 9, color: C.tealDark, marker: 'ahT' });
  b += T(60, y + 250, 'MONSOON', { size: 19, weight: 700, fill: C.tealDark }) + T(60, y + 272, 'from the south-west', { size: 16, fill: C.tealDark });
  b += arrow(110, y + 80, 342, y + 140, { w: 9, color: C.blue, marker: 'ah' }).replace(`stroke="${C.ink}"`, `stroke="${C.blue}"`);
  b += T(60, y + 60, 'WESTERN DISTURBANCES', { size: 19, weight: 700, fill: C.blue }) + T(60, y + 82, 'from the Mediterranean and Caspian regions', { size: 16, fill: C.blue }).replace(`y="${y + 82}"`, `y="${y + 104}"`);
  const g = grid(30, y + 350, [{ label: '', w: 200 }, { label: 'Monsoon', w: 320 }, { label: 'Western disturbances', w: 320 }], [
    ['Season', 'Summer', 'Winter'],
    ['Comes from', 'The south-west', 'The Mediterranean and Caspian regions'],
    ['Brings', 'The bulk of summer rainfall', 'Rain and snow'],
    ['Main area affected', '—', 'Northern and western Pakistan'],
  ], { size: 16 });
  const n = note(30, y + 350 + g.h + 20, 840, 'Common mistake: treating them as one system, or calling all of Pakistan’s rainfall monsoon-driven.');
  add('02-monsoon-western-disturbances',
    svg(900, y + 350 + g.h + 20 + n.h + 30, 'Two rain-bringers: monsoon and western disturbances', b + g.s + n.s),
    'A schematic with two arrows reaching Pakistan: the summer monsoon from the south-west and winter western disturbances from the Mediterranean and Caspian regions. A table compares them: the monsoon brings the bulk of summer rainfall; western disturbances bring winter rain and snow to northern and western Pakistan.',
    'Summer monsoon and winter western disturbances are separate systems.',
    '## How to approach it');
}

// 03 From description to explanation
{
  const steps = [
    ['Named resource', 'e.g. natural gas, hydel power or a named mineral', C.panel, C.panelEdge],
    ['Its distribution', 'Where it is found in Pakistan', C.tealLight, C.tealDark],
    ['Why it matters', 'Its importance for economic development: why its location and use matter', C.cream, C.olive],
  ];
  const w = 260, h = Math.max(...steps.map(([a, c]) => cardH(w, { title: a, body: c, bs: 16 })));
  let b = '';
  steps.forEach(([a, c, f, e], i) => { const x = 30 + i * 290; b += card(x, 140, w, { title: a, body: c, bs: 16, h, fill: f, edge: e, bfill: C.ink }).s; if (i < 2) b += arrow(x + w + 4, 140 + h / 2, x + 286, 140 + h / 2, { w: 4 }); });
  b += `<line x1="30" y1="${140 + h + 30}" x2="580" y2="${140 + h + 30}" stroke="${C.muted}" stroke-width="3"/>` + T(305, 140 + h + 56, 'a purely descriptive answer stops here: lower marks', { size: 16, fill: C.muted, anchor: 'middle' });
  b += `<line x1="30" y1="${140 + h + 80}" x2="870" y2="${140 + h + 80}" stroke="${C.olive}" stroke-width="5"/>` + T(450, 140 + h + 106, 'adding the importance for development scores higher', { size: 17, weight: 700, fill: C.olive, anchor: 'middle' });
  add('03-resource-answer-chain',
    svg(900, 140 + h + 130, 'Writing about a natural resource', b),
    'Three linked steps: a named resource such as natural gas or hydel power, its distribution in Pakistan, and its importance for economic development. A short line shows that stopping at distribution earns lower marks; going on to importance scores higher.',
    'Say where a resource is, then why that matters for development.',
    '## How to approach it');
}

// 04 Worked example grid
{
  const g = grid(30, 112, [{ label: 'Resource', w: 200 }, { label: 'Advantage', w: 320 }, { label: 'Disadvantage', w: 320 }], [
    ['Non-renewable: natural gas', 'Established infrastructure; reliable, high-output supply for industry and households', 'Finite reserves; import dependency once domestic reserves decline; environmental and climate impact'],
    ['Renewable: hydel power', 'Abundant potential from Pakistan’s river systems and glacial meltwater; lower long-term running costs', 'High upfront construction cost; depends on seasonal river flow; possible environmental disruption from dams'],
  ], { size: 16 });
  const n = note(30, 112 + g.h + 20, 840, 'Go resource by resource with a clear advantage and disadvantage for each. Avoid the general claim that “renewables are better”.');
  add('04-energy-comparison',
    svg(900, 112 + g.h + 20 + n.h + 30, 'Comparing a renewable and a non-renewable', g.s + n.s),
    'A two-row table. Natural gas: established infrastructure and reliable supply, but finite reserves, import dependency and environmental impact. Hydel power: abundant potential from rivers and glacial meltwater and low running costs, but high building costs, seasonal flow and disruption from dams.',
    'Every energy source has a real advantage and a real disadvantage.',
    '## Worked example: renewable vs non-renewable energy');
}

// 05 Flood plain cross-section
{
  const y = 112, g = y + 230;
  let b = `<rect x="30" y="${y}" width="840" height="300" rx="14" fill="#e6eef0"/>`;
  b += `<path d="M30,${y + 120} Q120,${y + 130} 180,${g - 40} L380,${g - 34} L410,${g + 10} L490,${g + 10} L520,${g - 34} L720,${g - 40} Q780,${y + 130} 870,${y + 120} L870,${y + 300} L30,${y + 300} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>`;
  b += `<path d="M180,${g - 40} L380,${g - 34} L380,${g - 14} L180,${g - 20} Z M520,${g - 34} L720,${g - 40} L720,${g - 20} L520,${g - 14} Z" fill="#9a7a4a" opacity="0.65"/>`;
  b += `<path d="M386,${g - 22} L410,${g + 10} L490,${g + 10} L514,${g - 22} Z" fill="${C.teal}"/>`;
  b += `<line x1="180" y1="${g - 62}" x2="720" y2="${g - 62}" stroke="${C.blue}" stroke-width="3" stroke-dasharray="10 7"/>` + T(450, g - 72, 'water level in a flood', { size: 16, weight: 700, fill: C.blue, anchor: 'middle' });
  b += T(450, g + 40, 'river channel', { size: 16, weight: 700, anchor: 'middle' });
  b += T(280, g - 90, 'flood plain', { size: 19, weight: 700, anchor: 'middle' }) + T(620, g - 90, 'flood plain', { size: 19, weight: 700, anchor: 'middle' });
  b += T(280, g + 30, 'fertile deposited soil', { size: 15, fill: C.ink, anchor: 'middle', weight: 600 }) + `<line x1="280" y1="${g + 16}" x2="280" y2="${g - 28}" stroke="${C.ink}" stroke-width="1.5"/>`;
  b += T(90, y + 100, 'higher ground', { size: 15, fill: C.muted });
  const n = note(30, y + 320, 840, 'Flood plain: the low-lying land alongside a river that is subject to periodic flooding and typically has fertile, deposited soil. Do not confuse it with a delta.');
  add('05-flood-plain',
    svg(900, y + 320 + n.h + 30, 'What a flood plain is', b + n.s, 'simple cross-section, not to scale'),
    'A cross-section of a river channel with low, flat land on each side. A dashed line shows the water level in a flood covering this land, and a layer of fertile deposited soil lies on the flood plain.',
    'A flood plain is the low land beside a river that floods and gains fertile soil.',
    '## Key terms to define precisely');
}
