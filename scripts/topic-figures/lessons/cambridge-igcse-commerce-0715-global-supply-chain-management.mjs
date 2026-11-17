import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-igcse-commerce-0715-global-supply-chain-management';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- local helpers (kept in this file; style.mjs is shared) ----
const esc = (s) => String(s).replace(/&(?!amp;|lt;|gt;|#)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const tx = (x, y, s, o = {}) => t(x, y, esc(s), o);
const wrap = (s, px, size = 17) => {
  const n = Math.max(6, Math.floor(px / (size * 0.53)));
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
const LH = (size) => Math.round(size * 1.32);
// wrapped paragraph; returns svg. pw = wrap width in px
const para = (x, y, s, pw, o = {}) => wrap(s, pw, o.size || 17).map((l, i) => tx(x, y + i * LH(o.size || 17), l, o)).join('');
const nl = (s, pw, size = 17) => wrap(s, pw, size).length;
const rect = (x, y, w, h, { fill = C.panel, edge = C.panelEdge, rx = 12, sw = 2.5, dash = '' } = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const line = (x1, y1, x2, y2, { color = C.ink, w = 2.5, dash = '' } = {}) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const parrow = (d, { color = C.ink, w = 3.5, marker = 'ah', dash = '' } = {}) =>
  `<path d="${d}" fill="none" stroke="${color}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#${marker})"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
// pill / chip with centred label (label may be array of lines)
const pill = (x, y, w, h, label, { fill = C.tealLight, edge = C.ink, size = 18, weight = 700, color = C.ink, sw = 2.5, rx } = {}) => {
  const ls = Array.isArray(label) ? label : [label];
  const lh = LH(size), y0 = y + h / 2 - ((ls.length - 1) * lh) / 2 + size * 0.35;
  return rect(x, y, w, h, { fill, edge, sw, rx: rx ?? Math.min(h / 2, 14) }) + ls.map((l, i) => tx(x + w / 2, y0 + i * lh, l, { size, weight, anchor: 'middle', fill: color })).join('');
};
const tick = (cx, cy, r = 13) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${C.tealDark}"/>` + path(`M${cx - r * 0.45},${cy + r * 0.02} L${cx - r * 0.1},${cy + r * 0.38} L${cx + r * 0.5},${cy - r * 0.35}`, { stroke: '#ffffff', w: 3 });
const cross = (cx, cy, r = 13) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${C.rust}"/>` + path(`M${cx - r * 0.38},${cy - r * 0.38} L${cx + r * 0.38},${cy + r * 0.38} M${cx + r * 0.38},${cy - r * 0.38} L${cx - r * 0.38},${cy + r * 0.38}`, { stroke: '#ffffff', w: 3 });
const dot = (cx, cy, r = 5, fill = C.ink) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}"/>`;
// list of items with a marker; returns {s, h}
const list = (x, y, items, pw, { size = 17, gap = 10, mark = 'dot', color = C.ink, markColor = C.ink } = {}) => {
  let s = '', yy = y;
  for (const it of items) {
    const n = nl(it, pw - 32, size);
    if (mark === 'tick') s += tick(x + 12, yy - size * 0.35, 12);
    else if (mark === 'cross') s += cross(x + 12, yy - size * 0.35, 12);
    else if (mark === 'dot') s += dot(x + 8, yy - size * 0.35, 5, markColor);
    s += para(x + 32, yy, it, pw - 32, { size, fill: color });
    yy += n * LH(size) + gap;
  }
  return { s, h: yy - y - gap };
};

// 01 Upstream, enterprise, downstream with chocolate example
{
  const cols = [
    ['Upstream', 'Flows into the business', 'Suppliers of raw materials and components; transport bringing them in', ['Cocoa farmers in Country B', 'Sugar producer in Country C', 'Shipping of beans and sugar', 'Port storage'], C.teal],
    ['The enterprise', 'The business’s own activities', 'Making, assembling or processing; managing its stock', ['Roasting, grinding, moulding', 'Packaging', 'Storing finished bars'], C.mustard],
    ['Downstream', 'Flows out to the consumer', 'Warehousing, transport, wholesalers, retailers, delivery', ['Freight forwarders and transport to export markets', 'Wholesalers', 'Supermarkets', 'Consumers'], '#e6b79a'],
  ];
  let body = '';
  cols.forEach(([name, flow, gen, ex, fill], i) => {
    const x = 30 + i * 295;
    body += panel(x, 110, 250, 500);
    body += pill(x + 12, 125, 226, 48, name, { fill, size: 20 });
    body += tx(x + 125, 200, flow, { size: 16, weight: 700, anchor: 'middle', fill: C.muted });
    body += para(x + 20, 230, gen, 215, { size: 16 });
    body += line(x + 20, 330, x + 230, 330, { color: C.panelEdge, w: 2 });
    body += tx(x + 20, 360, 'Chocolate maker:', { size: 16, weight: 700, fill: C.olive });
    body += list(x + 14, 392, ex, 226, { size: 16, gap: 10, markColor: C.olive }).s;
    if (i < 2) body += arrow(x + 253, 149, x + 290, 149, { w: 4 });
  });
  body += rect(30, 630, 840, 100, { fill: C.cream, edge: C.olive });
  body += tx(54, 662, 'Managing the chain = coordinating all three', { size: 19, weight: 700, fill: C.olive });
  body += para(54, 692, 'Order enough beans before a poor harvest; keep the factory supplied without excess stock; get bars to shops before festive seasons.', 790, { size: 16 });
  add('01-upstream-enterprise-downstream',
    svg(900, 755, 'Upstream, the enterprise and downstream', body),
    'Three columns viewed from the business. Upstream is everything flowing in, such as cocoa farmers, a sugar producer and shipping. The enterprise is the business’s own activities, such as roasting, moulding and packaging. Downstream is everything flowing out, through transport, wholesalers and supermarkets to consumers.',
    'Upstream flows in, the enterprise makes, downstream flows out to the consumer.',
    '## What are upstream, the enterprise and downstream? (3.2.1)');
}

// 02 Why suppliers matter
{
  const f = [
    ['Quality', 'The product can be no better than its materials'],
    ['Reliability', 'Late deliveries stop production and empty shelves'],
    ['Cost', 'Purchase prices are a large part of production cost'],
    ['Innovation', 'New materials or components can improve the product'],
    ['Ethics and reputation', 'Customers blame the brand for a supplier’s pollution or poor treatment of workers'],
  ];
  let body = '';
  f.forEach(([name, txt], i) => {
    const y = 110 + i * 98;
    body += panel(30, y, 560, 88) + tx(50, y + 32, name, { size: 19, weight: 700 });
    body += para(50, y + 58, txt, 520, { size: 16, fill: C.muted });
    body += parrow(`M592,${y + 44} C620,${y + 44} 615,${350} 640,${350}`, { w: 3 });
  });
  body += pill(650, 280, 220, 140, ['The business', 'and its brand'], { fill: C.cream, size: 20, rx: 14 });
  body += rect(30, 612, 840, 80, { fill: C.tealLight, edge: C.tealDark });
  body += tx(450, 659, 'So: long-term relationships, shared sales forecasts and factory checks', { size: 18, weight: 600, anchor: 'middle', fill: C.tealDark });
  add('02-why-suppliers-matter',
    svg(900, 715, 'Why suppliers matter', body),
    'Five supplier factors feed into the business and its brand: quality, reliability, cost, innovation, and ethics and reputation. Because of them, businesses build long-term relationships with key suppliers, share sales forecasts and check factories.',
    'A business is only as good, as reliable and as ethical as its suppliers.',
    '## Why are suppliers so important? (3.2.1)');
}

// 03 Six risks with example and effect
{
  const r = [
    ['Environmental', 'Pollution from a supplier’s factory; deforestation', 'Fines, stricter rules, boycotts'],
    ['Natural disasters', 'Earthquakes, floods, storms, drought', 'Factories or ports closed; shortages'],
    ['Financial', 'Supplier goes out of business; exchange rates; transport costs', 'Supplies stop; costs rise'],
    ['Ethical', 'Child labour, unsafe factories, very low pay', 'Reputation damage, legal action'],
    ['Technological', 'Cyber attacks; system failure; outdated component', 'Orders lost, production halted'],
    ['Political', 'War, unrest, tariffs, quotas, embargoes, new laws', 'Routes closed, supplier country cut off'],
  ];
  let body = '';
  r.forEach(([name, ex, eff], i) => {
    const x = 30 + (i % 3) * 285, y = 110 + Math.floor(i / 3) * 290;
    body += panel(x, y, 270, 275) + rect(x, y, 270, 50, { fill: i % 2 ? C.cream : C.tealLight, edge: C.panelEdge, rx: 14 });
    body += tx(x + 135, y + 33, name, { size: 20, weight: 700, anchor: 'middle' });
    body += tx(x + 18, y + 80, 'Examples', { size: 15, weight: 700, fill: C.muted });
    body += para(x + 18, y + 104, ex, 235, { size: 16 });
    body += tx(x + 18, y + 200, 'Possible effect', { size: 15, weight: 700, fill: C.rust });
    body += para(x + 18, y + 224, eff, 235, { size: 16, fill: C.rust });
  });
  body += tx(450, 712, 'Name the category and give an example that fits the scenario.', { size: 17, anchor: 'middle', fill: C.muted, italic: true });
  add('03-six-risks',
    svg(900, 735, 'Six categories of supply chain risk', body),
    'Six cards for environmental, natural disaster, financial, ethical, technological and political risk. Each gives examples, such as floods, child labour or cyber attacks, and a possible effect, such as ports closed, reputation damage or production halted.',
    'Each risk category has typical examples and a typical effect on the business.',
    '## What risks do global supply chains face? (3.2.2)');
}

// 04 Risk assessment process and why it matters
{
  const steps = [['Identify', 'what could go wrong'], ['Judge', 'how likely, and how serious the impact'], ['Plan', 'how to reduce each risk']];
  let body = '';
  steps.forEach(([h, s], i) => {
    const x = 30 + i * 295;
    body += rect(x, 110, 250, 120, { fill: i === 1 ? C.cream : C.tealLight, edge: C.ink });
    body += badge(x + 34, 145, 18, String(i + 1), C.mustard);
    body += tx(x + 64, 152, h, { size: 21, weight: 700 });
    body += para(x + 20, 188, s, 215, { size: 16 });
    if (i < 2) body += arrow(x + 254, 170, x + 290, 170, { w: 4 });
  });
  body += tx(450, 280, 'Why it matters', { size: 20, weight: 700, anchor: 'middle' });
  const why = ['Act before a problem, not after supplies stop', 'Spend money on the most serious risks', 'Protect reputation by checking suppliers', 'Keep customers supplied: sales and profit', 'Lenders, insurers and large customers may expect it'];
  why.forEach((w, i) => {
    const x = 30 + (i % 3) * 285 + (i >= 3 ? 142 : 0), y = 300 + Math.floor(i / 3) * 110;
    body += panel(x, y, 270, 95) + tick(x + 28, y + 47, 13) + para(x + 52, y + (nl(w, 205, 16) > 1 ? 42 : 53), w, 205, { size: 16 });
  });
  add('04-risk-assessment',
    svg(900, 530, 'What risk assessment does', body),
    'Three steps: identify what could go wrong, judge how likely and how serious each risk is, and plan how to reduce it. Five reasons it matters follow, including acting before a problem and focusing spending on the most serious risks.',
    'Risk assessment ranks risks so the business can act before supplies stop.',
    '## Why is risk assessment important? (3.2.2)');
}

// 05 Risk matrix worked example
{
  const cs = 74, x0 = 120, yTop = 130, n = 5;
  let body = '';
  for (let L = 1; L <= n; L++) for (let I = 1; I <= n; I++) {
    const sc = L * I, x = x0 + (I - 1) * cs, y = yTop + (n - L) * cs;
    const fill = sc >= 15 ? '#e6b79a' : sc >= 8 ? C.cream : C.tealLight;
    body += `<rect x="${x}" y="${y}" width="${cs}" height="${cs}" fill="${fill}" stroke="${C.panel}" stroke-width="3"/>`;
  }
  body += `<rect x="${x0}" y="${yTop}" width="${cs * n}" height="${cs * n}" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`;
  for (let k = 1; k <= n; k++) {
    body += tx(x0 + (k - 0.5) * cs, yTop + n * cs + 26, String(k), { size: 17, anchor: 'middle', weight: 600 });
    body += tx(x0 - 16, yTop + (n - k + 0.5) * cs + 6, String(k), { size: 17, anchor: 'middle', weight: 600 });
  }
  body += tx(x0 + (n * cs) / 2, yTop + n * cs + 58, 'Impact (1 low to 5 high)', { size: 17, anchor: 'middle', weight: 700 });
  body += `<text x="${x0 - 50}" y="${yTop + (n * cs) / 2}" font-size="17" font-weight="700" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 ${x0 - 50} ${yTop + (n * cs) / 2})">Likelihood (1 low to 5 high)</text>`;
  const risks = [['A', 3, 5, 'Flood closes the factory', 'Second supplier; safety stock'], ['B', 2, 5, 'Child labour at factory', 'Audit; code of conduct'], ['C', 2, 4, 'Ordering system hacked', 'Security; training; backups'], ['D', 4, 2, 'Currency raises cost', 'Agree prices; review pricing']];
  risks.forEach(([id, L, I]) => { body += badge(x0 + (I - 0.5) * cs, yTop + (n - L + 0.5) * cs, 20, id, C.panel); });
  risks.forEach(([id, L, I, name, act], i) => {
    const y = 120 + i * 104;
    body += panel(535, y, 335, 94, i === 0 ? C.cream : C.panel, i === 0 ? C.olive : C.panelEdge);
    body += badge(565, y + 30, 17, id, C.panel);
    body += tx(592, y + 36, name, { size: 16, weight: 700 });
    body += tx(555, y + 64, `${L} × ${I} = ${L * I}`, { size: 18, weight: 700, fill: i === 0 ? C.rust : C.ink });
    body += para(660, y + 64, act, 200, { size: 15, fill: C.muted });
  });
  body += rect(30, 580, 840, 80, { fill: C.cream, edge: C.olive });
  body += tx(450, 615, 'Score = likelihood × impact. The flood scores highest (15),', { size: 18, anchor: 'middle', weight: 600 });
  body += tx(450, 642, 'so the first priority is reducing dependence on one supplier.', { size: 18, anchor: 'middle', weight: 600 });
  add('05-risk-matrix',
    svg(900, 685, 'Scoring risks for a phone-case brand', body),
    'A five-by-five grid of likelihood against impact with four risks plotted. Flood scores 3 × 5 = 15, child labour 2 × 5 = 10, a hacked ordering system 2 × 4 = 8 and a currency change 4 × 2 = 8, each with its action.',
    'Multiplying likelihood by impact ranks the risks: the flood (15) comes first (invented scores).',
    '## Why is risk assessment important? (3.2.2)');
}
