import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-geography-world-cities-london-new-york';
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

// 01 What makes a world city
{
  const cx = 450, cy = 300;
  const tr = [
    ['Finance and business', 'A centre of global finance', 30, 112],
    ['TNC headquarters', 'Head offices of transnational corporations', 610, 112],
    ['Transport hub', 'International airports and ports', 30, 400],
    ['Culture and politics', 'Global cultural and political importance', 610, 400],
  ];
  const w = 260, h = Math.max(...tr.map(([a, c]) => cardH(w, { title: a, body: c, bs: 16 })));
  let b = '';
  tr.forEach(([a, c, x, y]) => {
    const yy = y > 300 ? 488 - h : y;
    b += `<line x1="${x < cx ? x + w : x}" y1="${yy + h / 2}" x2="${cx}" y2="${cy}" stroke="${C.panelEdge}" stroke-width="4"/>`;
    b += card(x, yy, w, { title: a, body: c, bs: 16, h, fill: C.tealLight, edge: C.tealDark, bfill: C.ink }).s;
  });
  b += `<circle cx="${cx}" cy="${cy}" r="100" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + T(cx, cy - 4, 'World city', { size: 24, weight: 700, anchor: 'middle' }) + T(cx, cy + 22, 'influence far beyond', { size: 15, anchor: 'middle' }) + T(cx, cy + 40, 'its own country', { size: 15, anchor: 'middle' });
  const gy = 512;
  const g = grid(30, gy, [{ label: 'Where world cities are found', w: 420 }, { label: 'Examples', w: 420 }], [
    ['Mostly North America, Europe and East Asia', 'London, New York and Tokyo, usually ranked at the top'],
    ['A growing number in newly-emerging economies', 'Shanghai, Mumbai, São Paulo'],
  ], { size: 16 });
  add('01-what-makes-a-world-city',
    svg(900, gy + g.h + 30, 'What makes a world city?', b + g.s),
    'A world city at the centre links to four traits: a centre of finance and business, headquarters of transnational corporations, an international transport hub, and global cultural and political importance. A table shows world cities are mostly in North America, Europe and East Asia, led by London, New York and Tokyo, with more in emerging economies such as Shanghai, Mumbai and São Paulo.',
    'A world city’s influence reaches far beyond its own country.',
    '## What makes a world city');
}

// 02 London's time-zone advantage
{
  const y = 140, x0 = 60, x1 = 840;
  let b = '';
  const band = (yy, lab, a, z, f, e) => R(a, yy, z - a, 54, f, e, { rx: 10 }) + T((a + z) / 2, yy + 34, lab, { size: 17, weight: 700, anchor: 'middle' });
  b += T(x0, y + 26, 'Schematic of one London working day (not a clock scale)', { size: 15, fill: C.muted, italic: true });
  b += band(y + 46, 'Asian markets still open', x0, 460, C.cream, C.olive);
  b += band(y + 112, 'London working day', 220, 680, C.mustard, C.ink);
  b += band(y + 178, 'North American markets open', 440, x1, C.tealLight, C.tealDark);
  b += `<rect x="220" y="${y + 40}" width="240" height="198" fill="none" stroke="${C.olive}" stroke-width="3" stroke-dasharray="8 6"/>` + `<rect x="440" y="${y + 40}" width="240" height="198" fill="none" stroke="${C.tealDark}" stroke-width="3" stroke-dasharray="8 6"/>`;
  b += T(340, y + 266, 'morning overlap', { size: 17, weight: 700, fill: C.olive, anchor: 'middle' }) + T(560, y + 266, 'afternoon overlap', { size: 17, weight: 700, fill: C.tealDark, anchor: 'middle' });
  const ny = y + 296;
  const n = note(30, ny, 840, 'London lies on the Greenwich Meridian (0° longitude). Heathrow is one of the world’s busiest international airports, and Eurostar links London to mainland Europe through the Channel Tunnel.');
  add('02-london-time-zone',
    svg(900, ny + n.h + 30, 'Why London’s location suits global business', b + n.s),
    'A schematic of one London working day. In the morning it overlaps with Asian markets, which are still open; in the afternoon it overlaps with North American markets. A note adds that London lies on the Greenwich Meridian and is linked by Heathrow and Eurostar.',
    'On 0° longitude, London can trade with Asia in the morning and North America in the afternoon.',
    '## London');
}

// 03 London vs New York at a glance
{
  const g = grid(30, 112, [{ label: '', w: 170 }, { label: 'London', w: 335 }, { label: 'New York', w: 335 }], [
    ['Location', 'Capital of the UK; south-east England on the River Thames', 'Largest US city; Atlantic coast at the mouth of the Hudson; large natural harbour; five boroughs'],
    ['Population', 'About 8.8 million (2021 census)', 'About 8.8 million (2020 census)'],
    ['Born abroad', 'Around four in ten Londoners', 'More than a third of New Yorkers'],
    ['Finance', 'City of London and Canary Wharf; Bank of England; London Stock Exchange', 'Wall Street; New York Stock Exchange; Nasdaq'],
    ['Trade', 'International airports; port facilities on the Thames estuary', 'Port of New York and New Jersey; JFK Airport'],
    ['Culture', 'West End, British Museum, Tate Modern', 'Broadway, Metropolitan Museum of Art'],
    ['Politics', 'UK government at Westminster; Commonwealth Secretariat; International Maritime Organization', 'United Nations headquarters, though not the national capital'],
  ], { size: 16 });
  add('03-london-new-york-compared',
    svg(900, 112 + g.h + 30, 'London and New York at a glance', g.s),
    'A comparison table of London and New York: location, population of about 8.8 million each, share born abroad, finance districts, trade gateways, cultural institutions and political roles, from Westminster and the Commonwealth Secretariat in London to the United Nations headquarters in New York.',
    'Two cities of similar size with different routes to global importance.',
    '## New York');
}

// 04 Migration waves
{
  const lane = (y, title, items, f, e) => {
    let s = R(30, y, 840, 40, f, e, { rx: 20 }) + T(50, y + 27, title, { size: 18, weight: 700 });
    const w = 197, h = Math.max(...items.map(([a, c]) => cardH(w, { title: a, body: c, bs: 15, ts: 17 })));
    items.forEach(([a, c], i) => { s += card(30 + i * 214.3, y + 54, w, { title: a, body: c, bs: 15, ts: 17, h, bfill: C.ink }).s; if (i < items.length - 1) s += arrow(30 + i * 214.3 + w + 2, y + 54 + h / 2, 30 + (i + 1) * 214.3 - 2, y + 54 + h / 2, { w: 3 }); });
    return { s, h: h + 54 };
  };
  const L = lane(112, 'London', [
    ['After 1948', 'The Windrush generation from the Caribbean'],
    ['Then', 'Large numbers from South Asia and Africa'],
    ['After 2004', 'Eastern Europe, after the EU expanded'],
    ['National', 'Young adults arrive for study and work; some older people and families move out'],
  ], C.cream, C.olive);
  const N = lane(112 + L.h + 30, 'New York', [
    ['1892–1954', 'Millions of Europeans enter through Ellis Island'],
    ['Later', 'Arrivals from the Caribbean, Latin America and Asia'],
    ['20th century', 'Great Migration of African Americans from the South; Harlem a cultural centre'],
    ['Character', 'Chinatown and Little Italy reflect migration waves'],
  ], C.tealLight, C.tealDark);
  const y = 112 + L.h + 30 + N.h + 20;
  const n = note(30, y, 840, 'London’s character: hundreds of languages, Brick Lane (Bangladeshi community) and the Notting Hill Carnival, which grew from the Caribbean community.');
  add('04-migration-waves',
    svg(900, y + n.h + 30, 'Waves of migration that shaped both cities', L.s + N.s + n.s),
    'Two lanes. London: the Windrush generation from the Caribbean after 1948, then South Asia and Africa, then Eastern Europe after 2004, plus national movement of young adults in and some families out. New York: millions of Europeans through Ellis Island from 1892 to 1954, later Caribbean, Latin American and Asian migrants, and the Great Migration of African Americans that made Harlem a cultural centre.',
    'Successive waves of migrants gave both cities their diverse character.',
    '## London');
}

// 05 Challenges and responses
{
  const g = grid(30, 112, [{ label: 'Challenge', w: 170 }, { label: 'London', w: 335 }, { label: 'New York', w: 335 }], [
    ['Inequality', 'Child poverty in Tower Hamlets and Newham near Canary Wharf’s wealth', 'Parts of the Bronx among the poorest; much of Manhattan very wealthy'],
    ['Housing', 'High prices and rents; gentrification in Hackney', 'High prices and rents; gentrification in Harlem'],
    ['Land', 'Green Belt limits greenfield building, so housing goes on costly brownfield sites', 'Urban sprawl: suburbs across a large region, more car commuting'],
    ['Traffic', 'Congestion Charge (2003); Ultra Low Emission Zone (2019)', 'Congestion pricing south of 60th Street (January 2025)'],
    ['Water and waste', 'Victorian sewers overflow; Thames Tideway Tunnel built to capture sewage', 'Water from Catskill and Delaware reservoirs; rubbish exported since Fresh Kills closed (2001)'],
    ['Energy and flooding', '—', 'Hurricane Sandy (2012) flooded parts of the city and cut power to lower Manhattan'],
    ['Food supply', 'Imported; New Covent Garden market', 'Imported; Hunts Point market in the Bronx'],
  ], { size: 16 });
  add('05-challenges',
    svg(900, 112 + g.h + 30, 'Challenges for London and New York', g.s),
    'A table matching each challenge to examples in both cities: inequality in Tower Hamlets, Newham and the Bronx; housing costs and gentrification in Hackney and Harlem; London’s Green Belt and New York’s sprawl; traffic charges in 2003, 2019 and 2025; sewage, water and waste schemes; Hurricane Sandy in 2012; and imported food through major wholesale markets.',
    'Both cities share the same challenges but answer them in different ways.',
    '## Challenges');
}

// 06 London Docklands regeneration
{
  const why = card(30, 112, 840, { title: 'Why it was needed', body: 'From the 1960s ships grew too large for the docks and container trade moved downstream to Tilbury. The docks closed between the late 1960s and 1981, leaving derelict land, high unemployment and poor housing.', bs: 16, fill: '#f6e3d6', edge: C.rust, bfill: C.ink });
  let b = why.s;
  let y = 112 + why.h + 44;
  b += arrow(450, 112 + why.h + 4, 450, y - 8, { w: 4 });
  b += T(30, y - 14, 'MAIN FEATURES', { size: 15, weight: 700, fill: C.tealDark });
  const ft = [['1981–1998', 'London Docklands Development Corporation attracts private investment'], ['1987', 'Docklands Light Railway; London City Airport'], ['1999', 'Jubilee line extension'], ['Also', 'Canary Wharf financial district; new housing, shops, ExCeL']];
  const fw = 197, fh = Math.max(...ft.map(([a, c]) => cardH(fw, { title: a, body: c, bs: 15, ts: 18 })));
  ft.forEach(([a, c], i) => { b += card(30 + i * 214.3, y, fw, { title: a, body: c, bs: 15, ts: 18, h: fh, fill: C.tealLight, edge: C.tealDark, bfill: C.ink }).s; });
  y += fh + 40;
  b += T(30, y - 14, 'IMPACTS', { size: 15, weight: 700, fill: C.olive });
  const im = [['Economic', 'Many thousands of new office jobs', 'Many taken by commuters; local former dock workers lacked the skills'], ['Social', 'Better transport and services', 'New housing too expensive for existing residents'], ['Environmental', 'Derelict land and docks cleaned up; waterside improved', 'Densely built up']];
  const iw = 270, ih = Math.max(...im.map(([a, p, m]) => cardH(iw, { title: a, body: ['+ ' + p, '− ' + m], bs: 15, ts: 18 })));
  im.forEach(([a, p, m], i) => { b += card(30 + i * 285, y, iw, { title: a, body: ['+ ' + p, '− ' + m], bs: 15, ts: 18, h: ih, fill: C.cream, edge: C.olive, bfill: C.ink }).s; });
  y += ih + 20;
  const n = card(30, y, 840, { title: 'Judgement', body: 'The project transformed the area economically, but the benefits were unevenly shared with the original community.', bs: 16, fill: C.mustard, edge: C.ink, bfill: C.ink });
  add('06-docklands-regeneration',
    svg(900, y + n.h + 30, 'Flagship regeneration: London Docklands', b + n.s),
    'Why: the docks closed between the late 1960s and 1981 as ships grew too large and trade moved to Tilbury, leaving dereliction and unemployment. Features: the London Docklands Development Corporation from 1981 to 1998, the DLR and City Airport in 1987, the Jubilee line extension in 1999 and Canary Wharf. Impacts: new jobs, transport and cleaner land, but jobs went to commuters and housing was too expensive for locals.',
    'Docklands was transformed economically, but its original community gained least.',
    '## Flagship regeneration: London Docklands');
}

// 07 Worked answer structure
{
  const st = [
    ['Point', 'London has received migrants from the Caribbean after 1948, South Asia and, after 2004, Eastern Europe.', C.panel, C.panelEdge],
    ['Development', 'Around four in ten Londoners were born outside the UK, so the city is highly multicultural.', C.tealLight, C.tealDark],
    ['Effect', 'Distinct neighbourhoods such as Brick Lane’s Bangladeshi community, and events like the Notting Hill Carnival.', C.cream, C.olive],
    ['Link', 'Migration has shaped London’s food, culture and labour force, making it more attractive as a global city.', C.teal, C.tealDark],
  ];
  let b = '', y = 112;
  st.forEach(([a, c, f, e], i) => {
    const h = Math.max(70, cardH(680, { body: c, bs: 17 }));
    b += R(30, y, 140, h, f, e) + T(100, y + h / 2 + 7, a, { size: 19, weight: 700, anchor: 'middle' }) + card(190, y, 680, { body: c, bs: 17, h, fill: '#ffffff', edge: e, bfill: C.ink }).s;
    if (i < 3) b += arrow(100, y + h + 2, 100, y + h + 20, { w: 3.5 });
    y += h + 22;
  });
  add('07-worked-answer',
    svg(900, y + 10, 'A 4-mark answer on migration and character', b, 'Point, Development, Effect, Link'),
    'Four stacked steps of a model answer about London: Point (migration waves from the Caribbean, South Asia and Eastern Europe), Development (around four in ten born abroad), Effect (Brick Lane and the Notting Hill Carnival) and Link (migration shaped food, culture and labour, making London more attractive as a global city).',
    'Each step adds one mark-worthy idea, ending with a link back to the question.',
    '## Worked example');
}
