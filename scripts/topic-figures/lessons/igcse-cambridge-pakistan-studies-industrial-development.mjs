import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-cambridge-pakistan-studies-industrial-development';
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

// for/against weighing block -> {s, h}
const weigh = (y, forT, forL, agT, agL) => {
  const h = Math.max(cardH(400, { title: forT, body: forL, bullets: true }), cardH(400, { title: agT, body: agL, bullets: true }));
  const sc = `<path d="M450,${y + 8} L436,${y + 40} L464,${y + 40} Z" fill="${C.ink}"/>` + `<line x1="235" y1="${y + 8}" x2="665" y2="${y + 8}" stroke="${C.ink}" stroke-width="5" stroke-linecap="round"/>` +
    `<line x1="235" y1="${y + 8}" x2="235" y2="${y + 52}" stroke="${C.ink}" stroke-width="2.5"/><line x1="665" y1="${y + 8}" x2="665" y2="${y + 52}" stroke="${C.ink}" stroke-width="2.5"/>`;
  return { s: sc + card(30, y + 52, 410, { title: forT, body: forL, bullets: true, fill: C.tealLight, edge: C.tealDark, bfill: C.ink, h }).s + card(460, y + 52, 410, { title: agT, body: agL, bullets: true, fill: '#f6e3d6', edge: C.rust, bfill: C.ink, h }).s, h: h + 52 };
};

// 01 How Section 5 links to other sections
{
  const cx = 450, cy = 400;
  let b = `<circle cx="${cx}" cy="${cy}" r="92" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + T(cx, cy - 6, 'Section 5', { size: 20, weight: 700, anchor: 'middle' }) + T(cx, cy + 20, 'Industry', { size: 24, weight: 700, anchor: 'middle' });
  const ins = [
    [40, 140, 'Sections 2 and 4', 'Raw materials: minerals, cotton, sugar cane'],
    [40, 520, 'Section 3', 'Power supply'],
  ];
  const outs = [
    [600, 140, 'Section 6', 'Trade: products are exported'],
    [600, 330, 'Section 7', 'Transport shapes where industry locates'],
    [600, 520, 'Section 8', 'Jobs: employment'],
  ];
  const w = 260;
  ins.forEach(([x, y, ti, d]) => { const c = card(x, y, w, { title: ti, body: d, fill: C.tealLight, edge: C.tealDark, bfill: C.ink, h: 106 }); b += c.s; b += arrow(x + w + 4, y + 53, cx - 92 * 0.8, cy + (y + 53 < cy ? -50 : 50), { w: 4, color: C.tealDark, marker: 'ahT' }); });
  outs.forEach(([x, y, ti, d]) => { const c = card(x, y, w, { title: ti, body: d, fill: C.cream, edge: C.olive, bfill: C.ink, h: 106 }); b += c.s; const ty = y + 53; b += arrow(cx + 92 * Math.cos(Math.atan2(ty - cy, x - cx)), cy + 92 * Math.sin(Math.atan2(ty - cy, x - cx)), x - 6, ty, { w: 4, color: C.olive, marker: 'ahO' }); });
  b += T(170, 330, 'INPUTS', { size: 18, weight: 700, fill: C.tealDark, anchor: 'middle' }) + T(730, 290, 'OUTPUTS AND LINKS', { size: 18, weight: 700, fill: C.olive, anchor: 'middle' });
  const n = note(30, 660, 840, 'Example link: cotton textile mills cluster near both cotton-growing areas and the port of Karachi.');
  add('01-section-5-links',
    svg(900, 660 + n.h + 30, 'Industry links the whole of Paper 2', b + n.s),
    'Industry sits at the centre. Raw materials from Sections 2 and 4 and power from Section 3 feed in; industry links out to trade (Section 6), transport and location (Section 7) and jobs (Section 8). A note gives the example of cotton mills near cotton-growing areas and the port of Karachi.',
    'Industry questions often reward linking raw materials, power, transport, trade and jobs.',
    '## Where does industry fit in 0448 Paper 2?');
}

// 02 Cotton value chain and the three sectors
{
  const st = [
    ['Raw cotton', 'raw material', 'Primary: farming'],
    ['Yarn', 'processed: ginned and spun', 'Secondary'],
    ['Cloth', '', 'Secondary'],
    ['Shirts', 'manufactured: cloth made into shirts', 'Secondary'],
  ];
  const w = 190, gap = 26, y = 150;
  let b = '';
  st.forEach(([ti, term, sec], i) => {
    const x = 30 + i * (w + gap) + (i === 3 ? 2 : 0);
    const barH = 40 + i * 45;
    b += `<rect x="${x + 40}" y="${y + 230 - barH}" width="${w - 80}" height="${barH}" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5" rx="4"/>`;
    b += card(x, y + 250, w, { title: ti, sub: term || undefined, subfill: C.tealDark, h: 110, ts: 20 }).s;
    b += R(x, y + 376, w, 36, i === 0 ? C.tealLight : C.cream, i === 0 ? C.tealDark : C.olive, { rx: 18 }) + T(x + w / 2, y + 400, sec, { size: 16, weight: 700, anchor: 'middle' });
    if (i < 3) b += arrow(x + w + 3, y + 305, x + w + gap - 4, y + 305, { w: 3.5 });
  });
  b += `<line x1="30" y1="${y + 230}" x2="870" y2="${y + 230}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += arrow(60, y + 20, 830, y + 20, { w: 4, color: C.olive, marker: 'ahO' }) + T(60, y - 4, 'VALUE-ADDED: extra value gained at each stage of processing', { size: 18, weight: 700, fill: C.olive });
  const n = note(30, y + 432, 840, 'Tertiary industry provides services such as banking and transport. Exporting cloth or garments rather than raw cotton earns more foreign exchange.');
  add('02-cotton-value-chain',
    svg(900, y + 432 + n.h + 30, 'Adding value: from raw cotton to shirts', b + n.s, 'bar heights are schematic'),
    'Four stages from raw cotton (a primary raw material) to yarn and cloth (processed) and then shirts (manufactured). Rising bars show value added at each stage. A note says tertiary industry provides services and that exporting cloth or garments earns more than raw cotton.',
    'Each processing stage adds value, so exporting finished goods earns more.',
    '## What do the key industrial terms mean?');
}

// 03 Large-scale, small-scale, cottage
{
  const cols = [
    ['Large-scale', 'Many workers, heavy machinery and large capital, in factories.', 'factory'],
    ['Small-scale', 'Fewer workers in small units.', 'unit'],
    ['Cottage', 'Carried out in homes, often by family members using simple tools.', 'home'],
  ];
  const w = 270, y = 112;
  let b = '';
  const ic = (k, x, yy) => {
    const cx = x + w / 2, gy = yy + 150;
    let s = `<line x1="${x + 20}" y1="${gy}" x2="${x + w - 20}" y2="${gy}" stroke="${C.ink}" stroke-width="2.5"/>`;
    if (k === 'factory') s += `<path d="M${cx - 95},${gy} L${cx - 95},${gy - 60} L${cx - 55},${gy - 85} L${cx - 55},${gy - 60} L${cx - 15},${gy - 85} L${cx - 15},${gy - 60} L${cx + 25},${gy - 85} L${cx + 25},${gy - 60} L${cx + 95},${gy - 60} L${cx + 95},${gy} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>` + `<rect x="${cx + 55}" y="${gy - 115}" width="22" height="55" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="3"/>` + [-70, -30, 10, 50].map((d) => `<rect x="${cx + d}" y="${gy - 42}" width="22" height="18" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2"/>`).join('');
    if (k === 'unit') s += `<rect x="${cx - 55}" y="${gy - 60}" width="110" height="60" fill="${C.rock}" stroke="${C.ink}" stroke-width="3"/>` + `<path d="M${cx - 65},${gy - 60} L${cx + 65},${gy - 60} L${cx + 55},${gy - 78} L${cx - 55},${gy - 78} Z" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="3"/>` + `<rect x="${cx - 14}" y="${gy - 34}" width="28" height="34" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2"/>`;
    if (k === 'home') s += `<rect x="${cx - 45}" y="${gy - 55}" width="90" height="55" fill="${C.cream}" stroke="${C.ink}" stroke-width="3"/>` + `<path d="M${cx - 58},${gy - 55} L${cx},${gy - 100} L${cx + 58},${gy - 55} Z" fill="${C.rust}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>` + `<rect x="${cx - 12}" y="${gy - 32}" width="24" height="32" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>`;
    return s;
  };
  const people = [12, 5, 2];
  const hh = Math.max(...cols.map(([ti, d]) => cardH(w - 0, { title: ti, body: d, bs: 17, ts: 22 }))) + 200;
  cols.forEach(([ti, d, k], i) => {
    const x = 30 + i * 285;
    b += panel(x, y, w, hh) + ic(k, x, y) + T(x + w / 2, y + 184, '●'.repeat(people[i]), { size: 15, anchor: 'middle', fill: C.tealDark });
    b += para(x + 18, y + 230, ti, w - 36, { size: 22, weight: 700 }).s + para(x + 18, y + 262, d, w - 36, { size: 17, fill: C.muted }).s;
  });
  b += T(450, y + hh + 34, '● = workers (schematic)', { size: 15, fill: C.muted, anchor: 'middle' });
  add('03-scale-of-industry',
    svg(900, y + hh + 54, 'Three scales of industry', b),
    'Three panels. Large-scale industry uses many workers, heavy machinery and large capital in factories. Small-scale industry uses fewer workers in small units. Cottage industry is carried out in homes, often by family members with simple tools.',
    'Scale is about workers, machinery and capital, and where the work happens.',
    '## What do the key industrial terms mean?');
}

// 04 Location factor matrix
{
  const facs = ['Raw materials', 'Power / fuel', 'Labour and skills', 'Port or links', 'Nearby market'];
  const rows = [
    ['Cotton textiles', 'Faisalabad, Karachi, Lahore, Multan', [1, 0, 1, 1, 0], 'Domestic + major export'],
    ['Sugar refining', 'Near cane fields', [1, 0, 0, 0, 0], 'Mainly domestic'],
    ['Cement', 'Near limestone and gypsum', [1, 1, 0, 0, 0], 'Domestic + export'],
    ['Fertiliser', 'Near gas fields and pipelines', [1, 1, 0, 0, 0], 'Domestic'],
    ['Iron and steel', 'Pipri, near Port Qasim', [0, 0, 0, 1, 0], 'Domestic'],
    ['Oil refining', 'Karachi, Attock, near Multan', [1, 0, 0, 1, 1], 'Domestic'],
    ['Sports goods', 'Sialkot', [0, 0, 1, 1, 0], 'Mainly export'],
    ['Surgical instruments', 'Sialkot', [0, 0, 1, 0, 0], 'Mainly export'],
    ['Brick', 'Edge of most towns', [1, 0, 1, 0, 1], 'Domestic'],
    ['Crafts', 'Throughout', [0, 0, 1, 0, 0], 'Domestic + export'],
  ];
  const x0 = 30, nameW = 290, fw = 66, y0 = 112, hh = 112, rh = 50;
  let b = `<rect x="${x0}" y="${y0}" width="840" height="${hh + rows.length * rh}" rx="12" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += T(x0 + 16, y0 + hh - 16, 'Industry and main locations', { size: 17, weight: 700 }) + T(x0 + nameW + 5 * fw + 16, y0 + hh - 16, 'Market', { size: 17, weight: 700 });
  facs.forEach((f, i) => { const cx = x0 + nameW + i * fw + fw / 2; b += `<text transform="translate(${cx + 6},${y0 + hh - 12}) rotate(-50)" font-size="16" font-weight="700" fill="${C.ink}">${X(f)}</text>`; });
  rows.forEach(([n, loc, v, m], r) => {
    const y = y0 + hh + r * rh;
    if (r % 2 === 0) b += `<rect x="${x0 + 2}" y="${y}" width="836" height="${rh}" fill="${C.tealLight}"/>`;
    b += T(x0 + 16, y + 22, n, { size: 17, weight: 700 }) + T(x0 + 16, y + 42, loc, { size: 15, fill: C.muted });
    v.forEach((on, i) => { const cx = x0 + nameW + i * fw + fw / 2; b += on ? `<circle cx="${cx}" cy="${y + rh / 2}" r="13" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` : `<circle cx="${cx}" cy="${y + rh / 2}" r="4" fill="${C.panelEdge}"/>`; });
    b += T(x0 + nameW + 5 * fw + 16, y + 31, m, { size: 16, fill: m.includes('export') ? C.tealDark : C.ink, weight: m.includes('export') ? 700 : 400 });
  });
  b += `<line x1="${x0}" y1="${y0 + hh}" x2="${x0 + 840}" y2="${y0 + hh}" stroke="${C.ink}" stroke-width="2"/>`;
  [0, 5].forEach((i) => { const x = x0 + nameW + i * fw; b += `<line x1="${x}" y1="${y0 + hh}" x2="${x}" y2="${y0 + hh + rows.length * rh}" stroke="${C.panelEdge}" stroke-width="2"/>`; });
  const yb = y0 + hh + rows.length * rh;
  b += `<circle cx="60" cy="${yb + 30}" r="11" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + T(80, yb + 36, 'key location factor given in the lesson table', { size: 16, fill: C.muted });
  add('04-location-factors',
    svg(900, yb + 56, 'What pulls each industry to its location?', b),
    'A matrix of ten industries against five location factors. Sugar, cement, fertiliser and brick are pulled to raw materials; iron and steel and oil refining to the coast for imported inputs; sports goods, surgical instruments and crafts to skilled labour. A final column shows whether each mainly serves the domestic or export market.',
    'Bulky or perishable raw materials pull industry to them; imports pull it to the coast; skills pull it to Sialkot.',
    '## Where are the listed industries and why?');
}

// 05 Formal and informal sectors
{
  const y = 112, w = 410;
  const a = { title: 'Formal sector', sub: 'registered with government', body: ['Pays taxes and keeps accounts', 'Regular wages', 'Often some protection for workers'], bullets: true, fill: C.tealLight, edge: C.tealDark, bfill: C.ink, ts: 22 };
  const bI = { title: 'Informal sector', sub: 'unregistered', body: ['Street vendors', 'Roadside mechanics', 'Small workshops', 'Domestic workers'], bullets: true, bfill: C.ink, ts: 22, fill: C.cream, edge: C.olive };
  const h1 = Math.max(cardH(w, a), cardH(w, bI));
  let b = card(30, y, w, { ...a, h: h1 }).s + card(460, y, w, { ...bI, h: h1 }).s;
  const y2 = y + h1 + 16;
  const adv = ['Cheap services', 'Many jobs for people without qualifications', 'Needs little capital', 'Recycles materials'];
  const dis = ['Low and irregular pay', 'No job security', 'Poor working conditions', 'Use of child labour', 'Lost tax revenue'];
  const h2 = Math.max(cardH(w, { title: 'Informal: advantages', body: adv, bullets: true }), cardH(w, { title: 'Informal: disadvantages', body: dis, bullets: true }));
  b += card(30, y2, w, { title: 'Informal: advantages', body: adv, bullets: true, h: h2, bfill: C.ink, tfill: C.tealDark }).s + card(460, y2, w, { title: 'Informal: disadvantages', body: dis, bullets: true, h: h2, bfill: C.ink, tfill: C.rust }).s;
  const y3 = y2 + h2 + 30;
  const fl = [['Small informal workshops', C.cream, C.olive], ['Formal-sector exporters', C.tealLight, C.tealDark], ['Export markets', C.panel, C.ink]];
  b += T(450, y3, 'Both sectors matter: cotton garments and sports goods often pass through both', { size: 17, weight: 700, anchor: 'middle' });
  fl.forEach(([s, f, e], i) => { const x = 30 + i * 290; b += R(x, y3 + 18, 260, 60, f, e) + T(x + 130, y3 + 54, s, { size: 17, weight: 700, anchor: 'middle' }); if (i < 2) b += arrow(x + 264, y3 + 48, x + 286, y3 + 48, { w: 3.5 }); });
  add('05-formal-informal',
    svg(900, y3 + 108, 'Formal and informal sectors', b),
    'Two columns compare the registered formal sector, which pays taxes and offers regular wages, with the unregistered informal sector of street vendors, mechanics and small workshops. The informal sector’s advantages and disadvantages are listed, and a chain shows goods passing from informal workshops to formal exporters and on to export markets.',
    'The informal sector gives jobs and cheap services but low pay and no security.',
    '## What is the difference between the formal and informal sectors?');
}

// 06 Export processing zone schematic
{
  const y = 112;
  let b = `<rect x="30" y="${y}" width="840" height="300" rx="14" fill="#e6eef0"/>`;
  b += `<rect x="30" y="${y}" width="150" height="300" rx="14" fill="${C.teal}"/>` + `<rect x="160" y="${y}" width="20" height="300" fill="${C.teal}"/>` + T(105, y + 40, 'OVERSEAS', { size: 18, weight: 700, fill: C.tealDark, anchor: 'middle' }) + T(105, y + 64, 'suppliers', { size: 16, fill: C.tealDark, anchor: 'middle' }) + T(105, y + 84, 'and buyers', { size: 16, fill: C.tealDark, anchor: 'middle' });
  b += `<rect x="350" y="${y + 40}" width="360" height="220" rx="6" fill="#ffffff" stroke="${C.ink}" stroke-width="3" stroke-dasharray="4 6"/>`;
  b += T(530, y + 30, 'secure, fenced site', { size: 16, weight: 700, anchor: 'middle', fill: C.muted });
  [[375, y + 70], [488, y + 70], [601, y + 70]].forEach(([x, yy]) => { b += `<path d="M${x},${yy + 80} L${x},${yy + 30} L${x + 30},${yy + 10} L${x + 30},${yy + 30} L${x + 60},${yy + 10} L${x + 60},${yy + 30} L${x + 85},${yy + 30} L${x + 85},${yy + 80} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>`; });
  b += T(530, y + 190, 'factories producing mainly for export', { size: 17, weight: 700, anchor: 'middle' }) + T(530, y + 214, 'good infrastructure: power, roads, water', { size: 16, anchor: 'middle', fill: C.muted });
  b += arrow(190, y + 110, 342, y + 110, { w: 5, color: C.tealDark, marker: 'ahT' }) + T(195, y + 92, 'duty-free imports', { size: 15, weight: 700, fill: C.tealDark }) + T(195, y + 142, 'raw materials', { size: 15, fill: C.tealDark }) + T(195, y + 160, 'and machinery', { size: 15, fill: C.tealDark });
  b += path(`M720,${y + 150} L800,${y + 150} L800,${y + 280} L190,${y + 280}`, { stroke: C.olive, w: 5, extra: 'marker-end="url(#ahO)"' }) + T(812, y + 140, 'exports', { size: 16, weight: 700, fill: C.olive, anchor: 'end' });
  const why = ['Attract foreign investment', 'Earn foreign exchange', 'Create jobs', 'Bring in new technology'];
  const ex = ['EPZs: Karachi (best known), Sialkot, Gwadar', 'Industrial estates: SITE in Karachi, Hattar in Khyber Pakhtunkhwa'];
  const h = Math.max(cardH(410, { title: 'Why build EPZs?', body: why, bullets: true }), cardH(410, { title: 'Examples', body: ex, bullets: true }));
  b += card(30, y + 320, 410, { title: 'Why build EPZs?', body: why, bullets: true, h, fill: C.cream, edge: C.olive, bfill: C.ink }).s + card(460, y + 320, 410, { title: 'Examples', body: ex, bullets: true, h, bfill: C.ink }).s;
  add('06-export-processing-zone',
    svg(900, y + 320 + h + 30, 'How an export processing zone works', b, 'schematic, not to scale'),
    'A fenced zone of factories. Raw materials and machinery come in duty-free, factories with good infrastructure make goods mainly for export, and exports go to buyers overseas. Cards list why EPZs are built and name Karachi, Sialkot and Gwadar EPZs and the SITE and Hattar industrial estates.',
    'EPZs trade tax and customs concessions for investment, jobs and exports.',
    '## How does government promote industrial growth?');
}

// 07 Call centres feasibility
{
  const needs = ['Fast internet links', 'Reliable power', 'English-speaking, computer-literate workers'];
  const nc = card(30, 112, 840, { title: 'What call centres and IT services need', body: needs.join('  ·  '), fill: C.panel, bfill: C.ink });
  const w = weigh(112 + nc.h + 30, 'Advantages for Pakistan', ['Large young workforce', 'Lower wage costs'], 'Barriers', ['Power cuts', 'Uneven broadband outside big cities', 'Competition from other countries']);
  const ny = 112 + nc.h + 30 + w.h + 20;
  const n = note(30, ny, 840, 'Feasibility: weigh the advantages against the barriers, then reach a judgement.');
  add('07-call-centre-feasibility',
    svg(900, ny + n.h + 30, 'Can global communications create service jobs?', nc.s + w.s + n.s),
    'Call centres need fast internet, reliable power and English-speaking, computer-literate workers. A balance weighs Pakistan’s advantages, a large young workforce and lower wages, against barriers: power cuts, uneven broadband outside big cities and competition from other countries.',
    'A feasibility answer weighs advantages against barriers before judging.',
    '## Can global communications create service jobs?');
}

// 08 Tourism
{
  const y = 112;
  const nat = ['Hunza, Swat and Naran–Kaghan', 'Karakoram peaks including K2', 'Coastal beaches'];
  const cul = ['Mohenjo-daro', 'Taxila', 'Lahore Fort and Badshahi Mosque', 'Sufi shrines'];
  const h = Math.max(cardH(410, { title: 'Natural attractions', body: nat, bullets: true }), cardH(410, { title: 'Cultural attractions', body: cul, bullets: true }));
  let b = card(30, y, 410, { title: 'Natural attractions', body: nat, bullets: true, h, bfill: C.ink }).s + card(460, y, 410, { title: 'Cultural attractions', body: cul, bullets: true, h, bfill: C.ink }).s;
  const w = weigh(y + h + 30, 'Benefits', ['Jobs in hotels, transport and guiding', 'Earns foreign exchange', 'Adds to GNP and GDP'], 'Limits', ['Poor access to remote areas', 'Concerns about security', 'Seasonal demand', 'Risk of environmental damage']);
  add('08-tourism-feasibility',
    svg(900, y + h + 30 + w.h + 30, 'Is tourism a feasible route to development?', b + w.s),
    'Natural attractions such as Hunza, Swat, Naran–Kaghan, K2 and coastal beaches sit beside cultural attractions such as Mohenjo-daro, Taxila, the Lahore Fort, Badshahi Mosque and Sufi shrines. A balance weighs benefits (jobs, foreign exchange, GNP and GDP) against limits (poor access, security concerns, seasonal demand and environmental damage).',
    'Pakistan has the attractions; access, security and seasons limit what tourism can do.',
    '## Is tourism a feasible route to development?');
}
