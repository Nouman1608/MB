import { C, svg, panel, t as t0, tl as tl0, arrow, path, badge as badge0 } from '../style.mjs';

// house minimum text size is 15: clamp every label drawn in this file
const MIN = 15;
const t = (x, y, s, o = {}) => t0(x, y, s, { ...o, size: Math.max(MIN, o.size || 18) });
const tl = (x, y, lines, opts = {}, lh = Math.max(MIN, opts.size || 18) * 1.3) => lines.map((s, i) => t(x, y + i * lh, s, opts)).join('');
const badge = (cx, cy, r, label, fill = C.mustard) => { const sz = Math.max(MIN, r); return `<circle cx="${cx}" cy="${cy}" r="${Math.max(r, sz * 0.85)}" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + t(cx, cy + sz * 0.36, label, { size: sz, weight: 700, anchor: 'middle' }); };

export const slug = 'cambridge-igcse-environmental-management-0680-managing-human-population-size';
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
// curved or multi-point arrow along an SVG path
const carrow = (d, o = {}) => `<path d="${d}" fill="none" stroke="${o.color || C.ink}" stroke-width="${o.w || 3.5}" stroke-linejoin="round" stroke-linecap="round" marker-end="url(#${o.marker || 'ah'})"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
// horizontal bar chart helper: axis box with ticks; returns svg
const hbar = (x, y, w, h, fill, edge = C.ink) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" stroke="${edge}" stroke-width="2"/>`;
// ---- end helpers ----

const H2 = {
  why: '## Why manage population size?',
  five: '## The five strategies (7.3.1)',
  disc: '## Discussing benefits and limitations (7.3.2)',
  we1: "## Worked example 1: measuring a policy's effect",
};

// 01 Two opposite problems
{
  let b = '';
  const col = (x, head, sub, fill, edge, prob, aim, tools) => {
    let s = panel(x, 110, 400, 420, fill, edge);
    s += t(x + 200, 150, head, { size: 23, weight: 700, anchor: 'middle', fill: edge });
    s += t(x + 200, 176, sub, { size: 16.5, anchor: 'middle', fill: C.muted });
    s += card(x + 20, 196, 360, 105, 'The problem', prob, { fill: '#ffffff', edge, ts: 18, bs: 16.5, bfill: C.ink });
    s += arrow(x + 200, 306, x + 200, 338, { w: 4 });
    s += card(x + 20, 344, 360, 70, '', '', { fill: edge, edge }) + t(x + 200, 387, aim, { size: 19, weight: 700, anchor: 'middle', fill: '#ffffff' });
    s += t(x + 200, 448, 'Possible tools', { size: 16.5, weight: 700, anchor: 'middle', fill: C.muted });
    s += tl(x + 200, 474, tools, { size: 16.5, anchor: 'middle' }, 22);
    return s;
  };
  b += col(30, 'Rapid growth', 'many births', '#fbf1ea', C.rust, 'Pressure on food, water, housing, schools, jobs and the environment.', 'Aim: slow growth', ['anti-natalist policy, contraception,', 'education, healthcare']);
  b += col(470, 'Low fertility and ageing', 'few births, many elderly', '#eef5f4', C.tealDark, 'Fewer workers to support pensions and healthcare for the elderly.', 'Aim: more births or immigrants', ['pro-natalist policy,', 'encouraging working-age immigrants']);
  b += panel(30, 550, 840, 80, C.cream, C.olive);
  b += t(450, 586, 'Every strategy works by changing births or migration.', { size: 19, weight: 700, anchor: 'middle' });
  b += t(450, 612, 'None aims to raise deaths: never offer death rates as a management tool.', { size: 16.5, anchor: 'middle', fill: C.muted });
  add('01-why-manage',
    svg(900, 655, 'Two opposite population problems', b),
    'Rapid growth puts pressure on food, water, housing, schools, jobs and the environment, so some governments aim to slow it. Low fertility and ageing leave fewer workers to support the elderly, so others want more births or more immigrants. Every strategy changes births or migration, never deaths.',
    'Governments manage population for opposite reasons, but always through births or migration.',
    H2.why);
}

// 02 Five strategies, two levers
{
  let b = '';
  // births lever and migration lever
  b += panel(540, 140, 330, 300, '#eef5f4', C.tealDark);
  b += t(705, 180, 'BIRTHS', { size: 24, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += t(705, 206, 'children per woman', { size: 16.5, anchor: 'middle', fill: C.muted });
  for (let i = 0; i < 4; i++) b += person(645 + i * 40, 290, 1.1, C.tealDark);
  b += tl(705, 340, ['four strategies act', 'here, raising or', 'lowering births'], { size: 16.5, anchor: 'middle' }, 22);
  b += panel(540, 470, 330, 140, C.cream, C.olive);
  b += t(705, 512, 'MIGRATION', { size: 24, weight: 700, anchor: 'middle', fill: C.olive });
  b += tl(705, 545, ['who can enter and settle:', 'raise or limit population'], { size: 16.5, anchor: 'middle' }, 22);
  const st = [
    ['a', 'Access to contraception', 'means to choose family size', 160],
    ['b', 'Population policies', 'pro-natalist or anti-natalist', 245],
    ['c', 'Access to education', 'especially girls: later families', 330],
    ['d', 'Access to healthcare', 'fewer child deaths, fewer births', 415],
    ['e', 'Control of migration', 'visas, permits, quotas, points', 515],
  ];
  st.forEach(([k, n, d, y]) => {
    b += `<rect x="30" y="${y - 38}" width="400" height="76" rx="12" fill="#ffffff" stroke="${k === 'e' ? C.olive : C.tealDark}" stroke-width="2.5"/>`;
    b += badge(64, y, 18, k, k === 'e' ? C.cream : C.tealLight);
    b += t(96, y - 6, n, { size: 18, weight: 700 }) + t(96, y + 18, d, { size: 15.5, fill: C.muted });
    b += k === 'e' ? arrow(434, y, 532, 540, { w: 3.5, color: C.olive, marker: 'ahO' }) : arrow(434, y, 532, Math.min(Math.max(y, 190), 400), { w: 3.5, color: C.tealDark, marker: 'ahT' });
  });
  b += `<rect x="30" y="630" width="840" height="56" rx="12" fill="#ffffff" stroke="${C.rust}" stroke-width="2.5" stroke-dasharray="9 6"/>`;
  b += t(450, 665, 'Deaths: not a lever. No strategy aims to raise death rates.', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  add('02-five-strategies-two-levers',
    svg(900, 710, 'Five strategies, two levers', b),
    'Five strategies feed into two levers. Access to contraception, population policies, access to education and access to healthcare act on births. Control of migration, through visas, permits, quotas and points systems, acts on migration. Deaths are not a lever.',
    'Four strategies act on births and one on migration; none acts through deaths.',
    H2.five);
}

// 03 Pro-natalist vs anti-natalist
{
  let b = '';
  const col = (x, head, def, fill, edge, meas, ex, ben, lim) => {
    let s = panel(x, 110, 410, 560, fill, edge);
    s += t(x + 24, 148, head, { size: 23, weight: 700, fill: edge }) + t(x + 24, 174, def, { size: 16.5, weight: 600 });
    s += t(x + 24, 212, 'Measures', { size: 17, weight: 700, fill: C.muted });
    const m = bullets(x + 24, 238, meas, 370, { size: 16, gap: 3 }); s += m.svg;
    let y = 238 + m.h + 8;
    s += rrect(x + 20, y - 4, 370, 56, '#ffffff', edge, 2, 10) + tl(x + 34, y + 19, ex, { size: 15.5, weight: 600 }, 20);
    y += 86;
    s += t(x + 24, y, 'Benefits', { size: 17, weight: 700, fill: C.tealDark });
    const bb = bullets(x + 24, y + 26, ben, 370, { size: 16, gap: 3 }); s += bb.svg; y += 26 + bb.h + 6;
    s += t(x + 24, y, 'Limitations', { size: 17, weight: 700, fill: C.rust });
    s += bullets(x + 24, y + 26, lim, 370, { size: 16, gap: 3 }).svg;
    return s;
  };
  b += col(30, 'Pro-natalist', 'encourages MORE children', '#eef5f4', C.tealDark,
    ['payments for each child', 'tax reductions for families', 'paid parental leave', 'subsidised childcare', 'housing priority for larger families'],
    ['Example: France, long-standing', 'generous family benefits'],
    ['can slow population decline and ageing', 'helps families with the costs of children'],
    ['very expensive', 'results often small: housing costs and the wish to work also shape family size', 'extra births take about 20 years to join the workforce']);
  b += col(460, 'Anti-natalist', 'encourages or requires FEWER', '#fbf1ea', C.rust,
    ['campaigns promoting small families', 'incentives: better housing or schooling for small families', 'penalties for larger families', 'strictest case: legal limits'],
    ['Example: China’s one-child policy,', 'around 1980 to 2015'],
    ['can lower births quickly', 'reduces future pressure on resources'],
    ['strict limits raise ethical concerns about freedom', 'China: more males than females in younger groups, rapid ageing', 'wealthier families may ignore incentives']);
  add('03-pro-anti-natalist',
    svg(900, 700, 'Pro-natalist and anti-natalist policies', b),
    'Side-by-side comparison. Pro-natalist policies, such as France’s family benefits, use payments, tax cuts, parental leave, childcare and housing priority; they can slow decline but are expensive, often have small effects and take about 20 years to add workers. Anti-natalist policies, such as China’s one-child policy from around 1980 to 2015, use campaigns, incentives, penalties or legal limits; they can lower births quickly but raise ethical concerns and, in China, skewed the sex ratio and sped up ageing.',
    'Pro-natalist means more births, anti-natalist fewer; each has costs and side effects.',
    H2.five);
}

// 04 Singapore reversal timeline
{
  let b = panel(30, 110, 840, 290);
  const y = 270;
  b += arrow(60, y, 850, y, { w: 4 });
  b += t(850, y - 14, 'time', { size: 16, anchor: 'end', fill: C.muted });
  const ev = [[180, '1970s', 'Stop at Two campaign', 'aim: lower births', C.rust], [450, 'then', 'fertility falls very low', 'the opposite problem', C.olive], [720, 'late 1980s', 'switch to measures', 'encouraging larger families', C.tealDark]];
  ev.forEach(([x, when, a, c, col], i) => {
    b += circ(x, y, 14, i === 1 ? C.mustard : '#ffffff', col, 4);
    b += t(x, y - 34, when, { size: 19, weight: 700, anchor: 'middle', fill: col });
    b += t(x, y + 46, a, { size: 17, weight: 700, anchor: 'middle' }) + t(x, y + 70, c, { size: 16.5, anchor: 'middle', fill: C.muted });
  });
  b += t(180, 170, 'anti-natalist', { size: 18, weight: 700, anchor: 'middle', fill: C.rust }) + t(720, 170, 'pro-natalist', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += carrow(`M250,175 Q450,120 640,170`, { w: 3, dash: '8 6' }) + t(450, 140, 'policy reversed', { size: 16, weight: 600, anchor: 'middle' });
  b += t(840, 140, 'Singapore', { size: 18, weight: 700, anchor: 'end' });
  b += panel(30, 420, 840, 90, C.cream, C.olive);
  b += t(450, 458, 'A successful anti-natalist policy can create the opposite', { size: 19, weight: 700, anchor: 'middle' });
  b += t(450, 486, 'problem a generation later. Policies can be reversed.', { size: 19, weight: 700, anchor: 'middle' });
  add('04-singapore-reversal',
    svg(900, 535, 'Singapore: a policy reversed', b),
    'A timeline for Singapore. In the 1970s a Stop at Two campaign aimed to lower births. Fertility then fell very low, so in the late 1980s the government switched to measures encouraging larger families.',
    'Singapore moved from anti-natalist to pro-natalist within about a generation.',
    H2.five);
}

// 05 Education and healthcare: indirect routes
{
  let b = '';
  b += panel(30, 110, 410, 490, '#eef5f4', C.tealDark);
  b += t(235, 148, 'Access to education', { size: 21, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += pill(55, 168, 360, 46, 'girls stay in school longer', { fill: '#ffffff', edge: C.tealDark });
  b += arrow(235, 218, 235, 244, { w: 3.5 });
  b += rrect(55, 250, 360, 150, '#ffffff', C.tealDark, 2.5, 12);
  b += bullets(75, 280, ['marry later, start families later', 'better job prospects', 'know more about contraception and health', 'more say in family decisions'], 330, { size: 16.5, gap: 4 }).svg;
  b += arrow(235, 404, 235, 430, { w: 3.5 });
  b += pill(55, 436, 360, 46, 'lower fertility', { fill: C.tealDark, edge: C.tealDark, color: '#ffffff' });
  b += tl(55, 520, ['Slow: the effect comes when', 'today’s pupils become adults.', 'Example: Kerala, India.'], { size: 16.5 }, 23);
  b += panel(460, 110, 410, 490, '#fbf6e2', C.olive);
  b += t(665, 148, 'Access to healthcare', { size: 21, weight: 700, anchor: 'middle', fill: C.olive });
  b += pill(485, 168, 360, 46, 'fewer children die', { fill: '#ffffff', edge: C.olive });
  b += arrow(665, 218, 665, 244, { w: 3.5 });
  b += rrect(485, 250, 360, 150, '#ffffff', C.olive, 2.5, 12);
  b += tl(505, 284, ['parents no longer need extra', 'children to ensure some survive', '', 'clinics also deliver contraception', 'and family planning advice'], { size: 16.5 }, 24);
  b += arrow(665, 404, 665, 430, { w: 3.5 });
  b += pill(485, 436, 360, 46, 'fertility falls', { fill: C.olive, edge: C.olive, color: '#ffffff' });
  b += tl(485, 520, ['But in the short term growth can', 'RISE: deaths fall before births do.'], { size: 16.5, weight: 600, fill: C.rust }, 23);
  add('05-education-healthcare',
    svg(900, 625, 'Education and healthcare: indirect routes', b),
    'Two chains. Education: girls stay in school longer, so they marry and start families later, have better jobs, know more about contraception and have more say, so fertility falls, but slowly. Healthcare: fewer children die, so parents need fewer extra children and clinics deliver contraception, so fertility falls, though in the short term growth can rise because deaths fall first.',
    'Education and healthcare lower fertility indirectly; both take time, and healthcare first raises growth.',
    H2.five);
}

// 06 Speed spectrum
{
  let b = panel(30, 110, 840, 400);
  const y = 300;
  b += `<defs><linearGradient id="spd" x1="0" x2="1"><stop offset="0" stop-color="${C.tealDark}"/><stop offset="1" stop-color="${C.cream}"/></linearGradient></defs>`;
  b += `<rect x="70" y="${y - 14}" width="760" height="28" rx="14" fill="url(#spd)" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += t(70, y + 50, 'FAST', { size: 19, weight: 700, fill: C.tealDark }) + t(830, y + 50, 'SLOW', { size: 19, weight: 700, anchor: 'end', fill: C.olive });
  const items = [
    [140, 'up', ['Control of', 'migration'], 'works quickly'],
    [330, 'down', ['Anti-natalist', 'policy'], 'can lower births quickly'],
    [560, 'up', ['Pro-natalist', 'policy'], 'extra births join the workforce after ~20 years'],
    [740, 'down', ['Access to', 'education'], 'effect when pupils become adults'],
  ];
  items.forEach(([x, dir, n, d]) => {
    b += circ(x, y, 11, '#ffffff', C.ink, 3);
    if (dir === 'up') { b += line(x, y - 14, x, 250, { w: 2.5 }); b += tl(x, 150, n, { size: 18, weight: 700, anchor: 'middle' }, 22); }
    else { b += line(x, y + 14, x, 372, { w: 2.5 }); b += tl(x, 396, n, { size: 18, weight: 700, anchor: 'middle' }, 22); }
    const L = wrap(d, 250, 15.5);
    b += dir === 'up' ? tl(x, 150 + 46, L, { size: 15.5, anchor: 'middle', fill: C.muted }, 19) : tl(x, 396 + 46, L, { size: 15.5, anchor: 'middle', fill: C.muted }, 19);
  });
  b += t(450, 550, 'Other questions to ask of any strategy:', { size: 18, weight: 700, anchor: 'middle' });
  const q = ['voluntary or compulsory?', 'what does it cost?', 'side effects?', 'does it suit the country?'];
  { let qx = 30; q.forEach((s, i) => { const w = [236, 186, 166, 228][i]; b += pill(qx, 570, w, 48, s, { fill: '#ffffff', edge: C.ink, size: 15.5 }); qx += w + 8; }); }
  b += t(450, 660, 'Strategies work best together: education and healthcare reduce the desire', { size: 17, anchor: 'middle', fill: C.muted }) + t(450, 684, 'for large families; contraception gives the means to act on it.', { size: 17, anchor: 'middle', fill: C.muted });
  add('06-speed-and-checklist',
    svg(900, 710, 'How fast does each strategy work?', b),
    'A scale from fast to slow. Control of migration works quickly and anti-natalist policies can lower births quickly; pro-natalist births take about 20 years to join the workforce; education works when pupils become adults. Other questions to ask: voluntary or compulsory, cost, side effects and fit with the country.',
    'Speed is one test of a strategy; also weigh cost, compulsion, side effects and fit.',
    H2.disc);
}

// 07 Worked example: fertility fall
{
  let b = panel(30, 110, 520, 510);
  const x0 = 120, y0 = 540, k = 62; // px per child
  b += line(x0, y0, 520, y0, { w: 3 }) + line(x0, y0, x0, y0 - 6 * k, { w: 3 });
  for (let v = 0; v <= 6; v++) b += line(x0 - 8, y0 - v * k, x0, y0 - v * k, { w: 2.5 }) + t(x0 - 14, y0 - v * k + 6, String(v), { size: 16, anchor: 'end' });
  b += `<text x="62" y="${y0 - 210}" font-size="16" fill="${C.muted}" text-anchor="middle" transform="rotate(-90 62 ${y0 - 210})">children per woman</text>`;
  const bar = (x, v, lab, fill) => `<rect x="${x}" y="${y0 - v * k}" width="110" height="${v * k}" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>` + t(x + 55, y0 - v * k - 12, v.toFixed(1), { size: 20, weight: 700, anchor: 'middle' }) + t(x + 55, y0 + 28, lab, { size: 16.5, weight: 600, anchor: 'middle' });
  b += bar(170, 5.2, 'Before', C.cream) + bar(360, 3.1, '15 years later', C.teal);
  b += `<line x1="${x0}" y1="${y0 - 2.1 * k}" x2="520" y2="${y0 - 2.1 * k}" stroke="${C.rust}" stroke-width="3" stroke-dasharray="10 7"/>`;
  b += tag(512, y0 - 2.1 * k - 10, 'about 2.1: replacement', { size: 15.5, anchor: 'end', fill: C.rust });
  b += t(530, 140, 'invented data', { size: 15, anchor: 'end', fill: C.muted, italic: true });
  b += panel(570, 110, 300, 510, C.panel, C.panelEdge);
  b += t(592, 150, 'Calculation', { size: 20, weight: 700 });
  b += tl(592, 186, ['Fall = 5.2 − 3.1', '= 2.1 children per woman', '', '% fall = 2.1 ÷ 5.2 × 100', '= 40.4%'], { size: 17.5 }, 25);
  b += rrect(590, 320, 262, 120, C.tealLight, C.tealDark, 2.5, 10);
  b += tl(606, 350, wrap('3.1 is still above about 2.1, so the population keeps growing, but more slowly.', 230, 16.5), { size: 16.5, weight: 600 }, 22);
  b += tl(592, 480, wrap('Limitation: urbanisation or rising incomes may also have lowered fertility, so the programme cannot take all the credit.', 256, 16), { size: 16, fill: C.muted }, 21);
  add('07-worked-example-fertility',
    svg(900, 645, 'Worked example: did the programme work?', b),
    'Bars show fertility falling from 5.2 to 3.1 children per woman over 15 years after a contraception and girls’ education programme, a fall of 2.1 or 40.4%. A dashed line at about 2.1 marks replacement level; 3.1 is still above it, so the population keeps growing more slowly.',
    'A 40.4% fall in fertility still leaves it above replacement, so growth slows but continues.',
    H2.we1);
}
