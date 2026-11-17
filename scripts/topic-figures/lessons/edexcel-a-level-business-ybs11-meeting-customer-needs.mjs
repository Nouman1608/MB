import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-a-level-business-ybs11-meeting-customer-needs';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- local helpers (kept in this file; style.mjs is shared) ----
const esc = (s) => String(s).replace(/&(?!amp;|lt;|gt;|#)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const tx = (x, y, s, o = {}) => t(x, y, esc(s), o);
// rough Inter width: ~0.54 x font size per character (bold a little wider)
const wrap = (s, px, size = 17, bold = false) => {
  const n = Math.max(4, Math.floor(px / (size * (bold ? 0.56 : 0.51))));
  const out = [];
  for (const para of String(s).split('\n')) {
    let cur = '';
    for (const w of para.split(' ')) {
      if (cur && (cur + ' ' + w).length > n) { out.push(cur); cur = w; } else cur = (cur ? cur + ' ' : '') + w;
    }
    out.push(cur);
  }
  return out;
};
const LH = (size) => Math.round(size * 1.34);
const lines = (x, y, arr, o = {}, lh) => arr.map((s, i) => tx(x, y + i * (lh || LH(o.size || 17)), s, o)).join('');
// wrapped paragraph: returns svg; use paraH for its height
const para = (x, y, s, w, o = {}) => lines(x, y, wrap(s, w, o.size || 17, (o.weight || 400) >= 600), o);
const paraN = (s, w, size = 17, bold = false) => wrap(s, w, size, bold).length;
const rect = (x, y, w, h, fill = C.panel, edge = C.panelEdge, rx = 12, sw = 2.5) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
const line = (x1, y1, x2, y2, { color = C.ink, w = 2.5, dash = '' } = {}) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const parrow = (d, { color = C.ink, w = 3.5, marker = 'ah', dash = '' } = {}) =>
  `<path d="${d}" fill="none" stroke="${color}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#${marker})"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
// card with bold title + wrapped body, centred or left aligned
const card = (x, y, w, h, title, body, { fill = C.panel, edge = C.panelEdge, ts = 19, bs = 16, align = 'start', tfill = C.ink, bfill = C.muted, pad = 18, top = 0 } = {}) => {
  const ax = align === 'middle' ? x + w / 2 : x + pad;
  const tL = title ? wrap(title, w - 2 * pad, ts, true) : [];
  const bL = body ? wrap(body, w - 2 * pad, bs) : [];
  const total = tL.length * LH(ts) + (bL.length ? 6 + bL.length * LH(bs) : 0);
  const y0 = top ? y + top : y + (h - total) / 2 + ts * 0.8;
  return rect(x, y, w, h, fill, edge) +
    lines(ax, y0, tL, { size: ts, weight: 700, anchor: align, fill: tfill }) +
    lines(ax, y0 + tL.length * LH(ts) + (tL.length ? 6 : 0) - (tL.length ? 0 : 0), bL, { size: bs, anchor: align, fill: bfill });
};
// cream takeaway strip
const takeaway = (y, head, body, h) => {
  const bL = body ? wrap(body, 790, 17) : [];
  const hh = h || 34 + LH(19) + (bL.length ? bL.length * LH(17) + 4 : 0);
  return panel(30, y, 840, hh, C.cream, C.olive) + tx(56, y + 40, head, { size: 19, weight: 700 }) + lines(56, y + 40 + LH(17) + 4, bL, { size: 17, fill: C.muted });
};
const takeH = (body) => 34 + LH(19) + (body ? wrap(body, 790, 17).length * LH(17) + 4 : 0);
const money = (n, cur = '$') => (n < 0 ? '-' : '') + cur + Math.abs(n).toLocaleString('en-US');

// 01 Mass vs niche
{
  let b = '';
  const col = (x, title, shape, rows, edge) => {
    let s = rect(x, 110, 410, 690, C.panel, edge) + tx(x + 205, 150, title, { size: 23, weight: 700, anchor: 'middle', fill: edge });
    s += shape;
    rows.forEach(([h, v], i) => {
      const y = 380 + i * 68;
      s += tx(x + 22, y, h, { size: 15, weight: 700, fill: C.muted }) + para(x + 22, y + 24, v, 366, { size: 17 });
    });
    return s;
  };
  // mass: wide, shallow block = many units, thin margin
  const mass = `<rect x="60" y="300" width="350" height="34" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + tx(235, 290, 'many units × thin margin', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 }) +
    Array.from({ length: 14 }, (_, i) => `<circle cx="${72 + i * 25}" cy="${200 + (i % 3) * 22}" r="8" fill="${C.tealDark}"/>`).join('');
  const niche = `<rect x="610" y="190" width="120" height="144" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + tx(800, 250, 'few units ×', { size: 16, anchor: 'middle', fill: C.olive, weight: 600 }) + tx(800, 270, 'premium margin', { size: 16, anchor: 'middle', fill: C.olive, weight: 600 }) +
    [[630, 176], [670, 168], [710, 176]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="8" fill="${C.olive}"/>`).join('');
  b += col(30, 'Mass market', mass, [['Customers', 'Very many, with broadly similar needs'], ['Product', 'Standardised'], ['Unit costs', 'Low: long runs spread fixed costs'], ['Competition', 'Many large rivals'], ['Main danger', 'Price wars and falling margins'], ['Brand', 'Helps stand out among near-identical rivals']], C.tealDark);
  b += col(460, 'Niche market', niche, [['Customers', 'A small group with a specific need'], ['Product', 'Specialised or tailored'], ['Unit costs', 'Higher: volumes are small'], ['Competition', 'Fewer rivals, at least at first'], ['Main danger', 'Relies on one group; big firms may enter'], ['Brand', 'Carries the specialist reputation itself']], C.olive);
  add('01-mass-vs-niche',
    svg(900, 830, 'Mass and niche markets', b),
    'A mass market sells many standardised units at a low price and thin margin to many similar customers, with low unit costs, many large rivals and the danger of price wars. A niche market sells few specialised units at a premium to a small group, with higher unit costs, fewer rivals and the danger of dependence on that group.',
    'Mass markets win on volume; niche markets win on margin.',
    '## Mass and niche markets compared');
}

// 02 Dynamic market and competition
{
  const cx = 450, cy = 300;
  let b = `<circle cx="${cx}" cy="${cy}" r="92" fill="${C.cream}" stroke="${C.olive}" stroke-width="3"/>` + lines(cx, cy - 4, ['A dynamic', 'market'], { size: 21, weight: 700, anchor: 'middle' }, 28);
  const f = [
    [30, 110, 'Online retailing', 'Reaches distant customers; small firms sell without a shop; prices easy to compare', [370, 250]],
    [600, 110, 'How markets change', 'Tastes, incomes, technology and new rivals shift what customers want', [530, 250]],
    [30, 370, 'Innovation and growth', 'A new product creates new demand: the market itself grows', [370, 350]],
    [600, 370, 'Adapting to change', 'Firms that update products, channels and prices survive', [530, 350]],
  ];
  f.forEach(([x, y, h, s, [ax, ay]]) => {
    b += card(x, y, 270, 160, h, s, { ts: 19, bs: 16, top: 36 });
    b += arrow(x < 400 ? x + 270 : x, y + 80, ax, ay, { w: 3 });
  });
  b += rect(30, 560, 840, 220, C.panel) + tx(56, 596, 'Competition in the market', { size: 19, weight: 700 });
  [['Limits price', 'Customers can switch'], ['Pushes improvement', 'Quality, service and range'], ['Squeezes margins', 'Less profit per unit']].forEach(([h, s], i) => {
    b += card(56 + i * 272, 616, 252, 100, h, s, { fill: C.tealLight, edge: C.tealDark, ts: 18, bs: 16, top: 34 });
  });
  b += tx(450, 754, 'Few rivals means more freedom over price, so firms work to create a point of difference.', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  add('02-dynamic-markets',
    svg(900, 810, 'Dynamic markets and competition', b),
    'Four forces keep a market changing: online retailing, changing tastes, incomes and technology, innovation that grows the market, and the need to adapt. Competition limits price, pushes firms to improve and squeezes margins.',
    'Markets keep moving, and competition limits what any one firm can charge.',
    '## Dynamic markets and competition');
}

// 03 Research turns uncertainty into risk
{
  let b = rect(30, 110, 260, 300, C.panel, C.muted) + tx(160, 150, 'Uncertainty', { size: 21, weight: 700, anchor: 'middle' }) + tx(160, 176, 'no reliable probability', { size: 16, anchor: 'middle', fill: C.muted });
  [[80, 230], [150, 215], [220, 240], [100, 300], [180, 290], [240, 330], [70, 360], [150, 370]].forEach(([x, y]) => { b += tx(x, y, '?', { size: 30, weight: 700, anchor: 'middle', fill: C.muted }); });
  b += arrow(296, 260, 360, 260, { w: 4 });
  b += card(364, 200, 172, 120, 'Market research', 'e.g. a test market', { fill: C.cream, edge: C.olive, ts: 18, bs: 16, align: 'middle' });
  b += arrow(540, 260, 604, 260, { w: 4 });
  b += rect(610, 110, 260, 300, C.tealLight, C.tealDark) + tx(740, 150, 'Risk', { size: 21, weight: 700, anchor: 'middle', fill: C.tealDark }) + tx(740, 176, 'estimated from evidence', { size: 16, anchor: 'middle', fill: C.tealDark });
  [40, 70, 55, 85, 60].forEach((h, i) => { b += `<rect x="${650 + i * 40}" y="${380 - h * 2}" width="28" height="${h * 2}" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>`; });
  b += tx(740, 400, 'e.g. past seasonal sales', { size: 15, anchor: 'middle', fill: C.muted });
  b += rect(30, 440, 840, 150, C.panel, C.rust) + tx(56, 478, 'Still uncertain: outside any data the firm can collect', { size: 19, weight: 700, fill: C.rust });
  b += card(56, 498, 380, 72, '', 'A sudden change in regulations', { bs: 17, bfill: C.ink, edge: C.rust }) + card(464, 498, 380, 72, '', 'A rival’s unexpected launch', { bs: 17, bfill: C.ink, edge: C.rust });
  add('03-research-uncertainty-to-risk',
    svg(900, 620, 'Research converts some uncertainty into risk', b),
    'Uncertainty has no reliable probability. Market research, such as a test market, gives data that turns some of it into risk, which can be estimated from evidence like past seasonal sales. Some uncertainty remains, such as sudden regulation changes or a rival’s unexpected launch.',
    'Research turns some uncertainty into measurable risk, but never removes it all.',
    '## Risk and uncertainty');
}

// 04 Matching research to the question
{
  const x0 = 200, y0 = 150, cw = 330, ch = 220;
  let b = tx(x0 + cw / 2, 136, 'Primary', { size: 19, weight: 700, anchor: 'middle' }) + tx(x0 + cw * 1.5 + 10, 136, 'Secondary', { size: 19, weight: 700, anchor: 'middle' });
  b += `<text transform="translate(${x0 - 24},${y0 + ch / 2}) rotate(-90)" font-size="19" font-weight="700" fill="${C.ink}" text-anchor="middle">Quantitative</text>`;
  b += `<text transform="translate(${x0 - 24},${y0 + ch * 1.5 + 10}) rotate(-90)" font-size="19" font-weight="700" fill="${C.ink}" text-anchor="middle">Qualitative</text>`;
  const cell = (c, r, q, m, f) => { const x = x0 + c * (cw + 10), y = y0 + r * (ch + 10); return rect(x, y, cw, ch, f, C.panelEdge) + para(x + 18, y + 40, q, cw - 36, { size: 18, weight: 700, italic: true }) + tx(x + 18, y + ch - 76, 'Method', { size: 15, weight: 700, fill: C.tealDark }) + para(x + 18, y + ch - 50, m, cw - 36, { size: 17 }); };
  b += cell(0, 0, '“How many people would buy at $12?”', 'Survey or questionnaire; test marketing', C.tealLight);
  b += cell(1, 0, '“How big is the national market and is it growing?”', 'Reports, databases', C.panel);
  b += cell(0, 1, '“Why do customers stop buying?”', 'Focus group or face-to-face interview', C.panel);
  b += cell(1, 1, '“What are customers saying about rivals?”', 'Websites, social media, magazines', C.tealLight);
  b += rect(30, 620, 840, 100, C.cream, C.olive) + tx(56, 656, 'Both, primary: “Will a new flavour sell in practice?”', { size: 18, weight: 700 }) + tx(56, 690, 'Product trial or test marketing gives numbers and reactions.', { size: 17, fill: C.muted });
  b += para(36, 200, 'Purposes: identify and anticipate needs; quantify demand; gain insight into behaviour', 130, { size: 15, fill: C.muted });
  add('04-research-method-matrix',
    svg(900, 750, 'Matching research to the question', b),
    'A grid of primary or secondary against quantitative or qualitative data, each with a sample question and method: buyers at $12 by survey or test marketing; market size from reports and databases; why customers stop buying by focus group or interview; views of rivals from websites and social media. A product trial gives both kinds of primary data.',
    'Pick the data type, then the method, from the question the business needs answered.',
    '## Market research: matching the method to the question');
}

// 05 Three sampling methods
{
  const groups = [[C.teal, 12], [C.mustard, 6], [C.rust, 2]]; // illustrative population of 20
  const popDots = (x0, y0, picked) => {
    let s = '', k = 0;
    groups.forEach(([c, n], g) => { for (let i = 0; i < n; i++, k++) { const x = x0 + (k % 5) * 46, y = y0 + Math.floor(k / 5) * 46; s += `<circle cx="${x}" cy="${y}" r="15" fill="${picked.includes(k) ? c : C.panel}" stroke="${c}" stroke-width="3"/>`; } });
    return s;
  };
  const col = (x, title, picked, how, plus, minus) => {
    let s = rect(x, 110, 270, 640, C.panel) + tx(x + 135, 148, title, { size: 21, weight: 700, anchor: 'middle' });
    s += popDots(x + 43, 190, picked);
    s += para(x + 18, 404, how, 234, { size: 16 });
    s += tx(x + 18, 520, '+', { size: 20, weight: 700, fill: C.tealDark }) + para(x + 40, 520, plus, 212, { size: 16 });
    s += tx(x + 18, 640, '−', { size: 20, weight: 700, fill: C.rust }) + para(x + 40, 640, minus, 212, { size: 16 });
    return s;
  };
  let b = col(30, 'Random', [1, 2, 6, 9, 11, 12, 13, 15, 16, 17], 'Everyone has an equal chance of selection', 'Avoids interviewer bias', 'Needs a full list of the population');
  b += col(315, 'Quota', [0, 1, 2, 3, 4, 5, 12, 13, 14, 18], 'Numbers set for each group; the researcher chooses who fills them', 'Quick and cheap', 'Open to bias in who is approached');
  b += col(600, 'Stratified', [1, 3, 4, 7, 8, 10, 12, 14, 17, 19], 'Random selection within each group, in proportion to its size', 'Most representative when groups behave differently', 'Needs population data to set proportions');
  b += tx(450, 780, 'Population of 20 in three groups (12, 6, 2); 10 selected (filled). Illustrative.', { size: 16, anchor: 'middle', fill: C.muted });
  add('05-sampling-methods',
    svg(900, 806, 'Random, quota and stratified samples', b),
    'Three samples from an illustrative population of three groups. Random: everyone has an equal chance, avoiding bias but needing a full list. Quota: set numbers per group filled by the researcher’s choice, quick and cheap but open to bias. Stratified: random within each group in proportion, most representative but needing population data.',
    'The best sample depends on budget, time and how different the groups are.',
    '## Market research: matching the method to the question');
}

// 06 Competitive advantage and adding value
{
  let b = card(300, 110, 300, 80, 'Competitive advantage', 'why customers choose this firm', { fill: C.cream, edge: C.olive, ts: 20, bs: 16, align: 'middle' });
  b += parrow('M380,190 L380,212 L235,212 L235,236', { w: 3 }) + parrow('M520,190 L520,212 L665,212 L665,236', { w: 3 });
  b += card(30, 240, 410, 120, 'Route 1: lower cost', 'Similar value to rivals, at a lower cost', { ts: 19, bs: 17, top: 38 });
  b += card(460, 240, 410, 120, 'Route 2: differentiation', 'Something rivals do not offer', { ts: 19, bs: 17, top: 38, fill: C.tealLight, edge: C.tealDark });
  ['Design', 'Quality', 'Service', 'Brand'].forEach((s, i) => { b += rect(470 + i * 98, 376, 88, 40, C.teal, C.tealDark, 20, 2) + tx(514 + i * 98, 402, s, { size: 16, anchor: 'middle', weight: 600 }); });
  b += arrow(665, 420, 665, 450, { w: 3 }) + card(460, 454, 410, 76, '', 'Customers become less willing to switch on price', { bs: 17, bfill: C.ink, edge: C.tealDark });
  b += rect(30, 556, 840, 150, C.panel) + tx(56, 592, 'Adding value', { size: 19, weight: 700 }) + para(56, 622, 'Raising the price customers will pay above the cost of bought-in inputs, through branding, convenience, design, quality or service.', 790, { size: 17, fill: C.muted });
  b += tx(56, 690, 'Differentiation is one way to create an advantage, not the advantage itself.', { size: 16, italic: true, fill: C.olive, weight: 600 });
  add('06-competitive-advantage',
    svg(900, 736, 'Routes to competitive advantage', b),
    'Competitive advantage comes from lower cost for similar value, or from differentiation through design, quality, service or brand, which makes customers less willing to switch on price. Adding value raises the price customers will pay above the cost of inputs.',
    'Advantage comes from lower cost or from being different.',
    '## Market positioning');
}

// 07 Harbourne Teas: share and value added
{
  const x0 = 120, yb = 520, top = 200, max = 60, sc = (v) => ((yb - top) * v) / max;
  let b = panel(30, 110, 500, 480) + tx(56, 146, 'Speciality tea market ($m)', { size: 18, weight: 700 });
  [0, 20, 40, 60].forEach((v) => { const y = yb - sc(v); b += line(x0, y, 505, y, { color: C.panelEdge, w: 1.5 }) + tx(x0 - 10, y + 6, `$${v}m`, { size: 15, anchor: 'end', fill: C.muted }); });
  [[170, 'Last year', 48, 3.6, '7.5%'], [340, 'This year', 54, 4.32, '8.0%']].forEach(([x, l, m, h, sh]) => {
    b += `<rect x="${x}" y="${yb - sc(m)}" width="120" height="${sc(m)}" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>`;
    b += `<rect x="${x}" y="${yb - sc(h)}" width="120" height="${sc(h)}" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`;
    b += tx(x + 60, yb - sc(m) - 10, `$${m}m`, { size: 18, weight: 700, anchor: 'middle' });
    b += tx(x + 60, yb - sc(h) - 10, `$${h}m`, { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
    b += tx(x + 60, yb - sc(m / 2) + 6, `share ${sh}`, { size: 16, anchor: 'middle', weight: 600 });
    b += tx(x + 60, yb + 28, l, { size: 17, weight: 700, anchor: 'middle' });
  });
  b += line(x0, yb, 505, yb, { w: 2.5 });
  b += rect(150, 560, 18, 18, C.mustard, C.ink, 3, 1.5) + tx(176, 575, 'Harbourne', { size: 15 }) + rect(290, 560, 18, 18, C.tealLight, C.ink, 3, 1.5) + tx(316, 575, 'whole market', { size: 15 });
  const st = (y, h, head, rows, f = C.panel, e = C.panelEdge) => rect(550, y, 320, h, f, e) + tx(570, y + 32, head, { size: 17, weight: 700, fill: C.muted }) + lines(570, y + 60, rows, { size: 17 }, 25);
  b += st(110, 110, 'Market growth', ['(54 − 48) ÷ 48 × 100', '= 12.5%']);
  b += st(232, 110, 'Harbourne growth', ['(4.32 − 3.6) ÷ 3.6 × 100', '= 20%']);
  b += st(354, 110, 'Market share', ['3.6 ÷ 48 = 7.5%', '4.32 ÷ 54 = 8.0%']);
  b += st(476, 114, 'Share change', ['+0.5 percentage points', '(not +0.5%)'], C.cream, C.olive);
  // value added bar
  b += rect(30, 610, 840, 170, C.panel) + tx(56, 646, 'Value added per box', { size: 19, weight: 700 });
  const s2 = 100; // px per $
  b += `<rect x="56" y="668" width="${2.1 * s2}" height="56" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + tx(56 + 1.05 * s2, 702, 'inputs $2.10', { size: 16, anchor: 'middle', weight: 600 });
  b += `<rect x="${56 + 2.1 * s2}" y="668" width="${4.4 * s2}" height="56" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + tx(56 + 4.3 * s2, 702, 'value added $4.40', { size: 17, anchor: 'middle', weight: 700 });
  b += tx(56 + 6.5 * s2 + 14, 702, 'price $6.50', { size: 17, weight: 700 });
  b += tx(56, 758, 'From blending, branding and presentation: its competitive advantage.', { size: 16, fill: C.muted, italic: true });
  add('07-harbourne-share-value',
    svg(900, 810, 'Harbourne Teas: share and value added', b),
    'The tea market grows from $48m to $54m (12.5%) while Harbourne’s sales grow from $3.6m to $4.32m (20%), so its share rises from 7.5% to 8.0%, up 0.5 percentage points. Each box uses $2.10 of inputs and sells for $6.50, adding $4.40 of value.',
    'Harbourne grew faster than its market and adds $4.40 of value to every box.',
    '## Worked example 1: share, growth and value added');
}

// 08 Market map for Harbourne
{
  const L = 120, R = 840, T = 130, B = 640, mx = (L + R) / 2, my = (T + B) / 2;
  let b = panel(30, 110, 840, 560);
  b += arrow(mx, B - 10, mx, T + 10, { w: 3 }) + arrow(mx, T + 10, mx, B - 10, { w: 3 });
  b += arrow(L + 10, my, R - 10, my, { w: 3 }) + arrow(R - 10, my, L + 10, my, { w: 3 });
  b += tx(mx + 12, T + 26, 'High price', { size: 17, weight: 700 }) + tx(mx + 12, B - 14, 'Low price', { size: 17, weight: 700 });
  b += tx(L + 10, my - 14, 'Traditional', { size: 17, weight: 700 }) + tx(R - 10, my - 14, 'Modern', { size: 17, weight: 700, anchor: 'end' });
  [[220, 220], [260, 260], [300, 205], [210, 300], [330, 290]].forEach(([x, y], i) => { b += `<circle cx="${x}" cy="${y}" r="18" fill="${i === 0 ? C.mustard : C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`; });
  b += tx(220, 226, 'H', { size: 16, weight: 700, anchor: 'middle' });
  b += tx(270, 345, 'rivals cluster', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 });
  [[260, 470], [600, 480], [700, 540]].forEach(([x, y]) => { b += `<circle cx="${x}" cy="${y}" r="18" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`; });
  b += `<rect x="560" y="170" width="230" height="140" rx="16" fill="none" stroke="${C.rust}" stroke-width="3" stroke-dasharray="10 7"/>`;
  b += tx(675, 230, 'Gap: modern-style', { size: 17, weight: 700, anchor: 'middle', fill: C.rust }) + tx(675, 254, 'premium blends', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  b += tx(675, 282, 'fewer direct rivals', { size: 15, anchor: 'middle', fill: C.rust });
  b += `<circle cx="56" cy="700" r="12" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` + tx(76, 706, 'H = Harbourne’s current range ($6.50)', { size: 16 }) + `<circle cx="450" cy="700" r="12" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + tx(470, 706, 'rival brands (illustrative positions)', { size: 16 });
  b += takeaway(730, 'A gap is only an opportunity if research shows demand.', 'And the firm must be able to serve it profitably. The map also shows where competition is heaviest, so Harbourne avoids launching a copy of a stronger brand.');
  add('08-harbourne-market-map',
    svg(900, 730 + takeH('And the firm must be able to serve it profitably. The map also shows where competition is heaviest, so Harbourne avoids launching a copy of a stronger brand.') + 30, 'A market map for a new tea range', b),
    'A market map with price on the vertical axis and traditional to modern on the horizontal. Rival tea brands cluster at the high-price traditional end, where Harbourne’s current range sits. An empty area at modern-style premium blends is a possible gap with fewer direct rivals.',
    'The map shows where rivals cluster and where a gap might be.',
    '## Worked example 2: an annotated answer');
}
