import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-a-level-business-ybs11-managing-people';
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

// 01 Staff as an asset or a cost
{
  let b = '';
  const side = (x, head, edge, tf, what, why, ex) =>
    rect(x, 110, 410, 470, C.panel, edge) + tx(x + 205, 150, head, { size: 23, weight: 700, anchor: 'middle', fill: tf }) +
    tx(x + 22, 192, 'The business…', { size: 16, weight: 700, fill: C.muted }) +
    what.map((s, i) => rect(x + 20, 206 + i * 54, 370, 44, x < 400 ? C.tealLight : C.panel, edge, 10, 2) + tx(x + 38, 234 + i * 54, s, { size: 17 })).join('') +
    tx(x + 22, 384, 'Because…', { size: 16, weight: 700, fill: C.muted }) + para(x + 22, 410, why, 366, { size: 17 }) +
    rect(x + 20, 476, 370, 88, C.cream, C.olive, 10, 2) + tx(x + 38, 504, 'Fits, e.g.', { size: 15, weight: 700, fill: C.olive }) + para(x + 38, 530, ex, 336, { size: 17 });
  b += side(30, 'Staff as an asset', C.tealDark, C.tealDark, ['Invests in training', 'Consults employees', 'Aims to keep them'], 'Skills and loyalty raise productivity and quality over time', 'A premium hotel relying on experienced staff');
  b += side(460, 'Staff as a cost', C.rust, C.rust, ['Keeps wage spending low', 'Keeps labour flexible', 'Scales staff with demand'], 'Labour is a cost to be matched to demand', 'A warehouse with big seasonal swings');
  b += tx(450, 616, 'Neither view is simply right: it depends on what the business sells.', { size: 18, weight: 700, anchor: 'middle' });
  add('01-staff-asset-or-cost',
    svg(900, 646, 'Staff: an asset or a cost?', b),
    'Seeing staff as an asset means investing in training, consulting and keeping employees, because skills and loyalty raise productivity and quality, as in a premium hotel. Seeing staff as a cost means keeping wages low and flexible, as in a warehouse with seasonal swings.',
    'Whether staff are treated as an asset or a cost depends on the business.',
    '## Approaches to staffing');
}

// 02 Corlan Assembly: span of control and levels
{
  const pyr = (x0, w, span, levels, title) => {
    let s = rect(x0, 110, w, 560, C.panel) + tx(x0 + w / 2, 148, title, { size: 21, weight: 700, anchor: 'middle' });
    const n = levels.length, top = 180, bot = 600, rowH = (bot - top) / n;
    levels.forEach(([label, count], i) => {
      const y = top + i * rowH, frac = (i + 1) / n, bw = 60 + (w - 100) * frac;
      const fill = i === n - 1 ? C.teal : i === 0 ? C.mustard : C.cream;
      s += rect(x0 + (w - bw) / 2, y + 6, bw, rowH - 12, fill, C.ink, 8, 2);
      s += tx(x0 + w / 2, y + rowH / 2 + 7, `${count} ${label}`, { size: 17, weight: 700, anchor: 'middle' });
    });
    return s;
  };
  let b = pyr(30, 410, 5, [['director', 1], ['managers', 5], ['supervisors', 25], ['team leaders', 125], ['operatives', 625]], 'Span of 5: tall');
  b += pyr(460, 410, 25, [['director', 1], ['managers', 25], ['operatives', 625]], 'Span of 25: flat');
  b += tx(235, 640, '4 levels above operatives, 156 managers', { size: 16, anchor: 'middle', fill: C.rust, weight: 700 });
  b += tx(665, 640, '2 levels above operatives, 26 managers', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 700 });
  b += rect(30, 690, 410, 170, C.tealLight, C.tealDark) + tx(50, 724, 'Wide span gains', { size: 18, weight: 700, fill: C.tealDark }) +
    lines(50, 754, ['• 130 fewer management posts', '• Lower salary costs', '• Shorter chain of command,', '   faster decisions'], { size: 16 }, 24);
  b += rect(460, 690, 410, 170, C.panel, C.rust) + tx(480, 724, 'Wide span needs and risks', { size: 18, weight: 700, fill: C.rust }) +
    lines(480, 754, ['• Each manager supervises 25', '• Needs skilled, self-reliant staff', '• Fewer promotion steps may', '   demotivate staff'], { size: 16 }, 24);
  add('02-corlan-span-of-control',
    svg(900, 890, 'Corlan Assembly: 625 operatives, two spans', b),
    'With a span of 5, Corlan’s 625 operatives need 125 team leaders, 25 supervisors, 5 managers and a director: 4 levels and 156 managers. With a span of 25 they need 25 managers and a director: 2 levels and 26 managers, 130 fewer posts, but each manager supervises 25 people and there are fewer promotion steps.',
    'A wider span means fewer levels and managers, but needs more self-reliant staff.',
    '## Organisational design');
}

// 03 Centralised vs decentralised
{
  const tree = (x0, cent) => {
    const c = x0 + 205;
    let s = rect(x0, 110, 410, 330, C.panel, cent ? C.olive : C.tealDark);
    s += tx(c, 148, cent ? 'Centralised' : 'Decentralised', { size: 22, weight: 700, anchor: 'middle', fill: cent ? C.olive : C.tealDark });
    s += rect(c - 60, 170, 120, 46, cent ? C.mustard : C.cream, C.ink, 8, 2) + tx(c, 199, 'Head office', { size: 16, weight: 700, anchor: 'middle' });
    [-130, 0, 130].forEach((dx) => {
      s += line(c, 216, c + dx, 270, { w: 2.5 });
      s += rect(c + dx - 55, 270, 110, 44, !cent ? C.teal : C.panel, C.ink, 8, 2) + tx(c + dx, 298, 'Branch', { size: 16, anchor: 'middle' });
      [-28, 28].forEach((d2) => { s += line(c + dx, 314, c + dx + d2, 350, { w: 2 }) + `<circle cx="${c + dx + d2}" cy="362" r="12" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2"/>`; });
    });
    s += tx(c, 410, cent ? 'Decisions made at the top' : 'Decisions delegated to lower levels', { size: 17, weight: 700, anchor: 'middle' });
    return s;
  };
  let b = tree(30, true) + tree(460, false);
  const pc = (x, plus, minus) => rect(x, 460, 410, 190, C.panel) + tx(x + 20, 494, '+', { size: 20, weight: 700, fill: C.tealDark }) + para(x + 44, 494, plus, 346, { size: 17 }) + tx(x + 20, 590, '−', { size: 20, weight: 700, fill: C.rust }) + para(x + 44, 590, minus, 346, { size: 17 });
  b += pc(30, 'Consistency; fast decisions in a crisis', 'Ignores local knowledge');
  b += pc(460, 'Motivates managers; faster local responses', 'Decisions can be inconsistent');
  add('03-centralised-decentralised',
    svg(900, 680, 'Who makes the decisions?', b),
    'Two organisation trees. Centralised: decisions stay at head office, giving consistency and fast crisis decisions but ignoring local knowledge. Decentralised: decisions are delegated to branches, motivating managers and speeding local responses but risking inconsistency.',
    'Centralise for control and consistency; decentralise for speed and local knowledge.',
    '## Organisational design');
}

// 04 Maslow's hierarchy
{
  const lv = ['Self-actualisation', 'Esteem', 'Social', 'Safety', 'Physiological'];
  let b = '';
  const top = 120, h = 92, cx = 310;
  lv.forEach((s, i) => {
    const y = top + i * h, w1 = 120 + i * 90, w2 = 120 + (i + 1) * 90;
    const fill = [C.mustard, C.cream, C.tealLight, C.teal, C.teal][i];
    b += `<path d="M${cx - w1 / 2},${y} L${cx + w1 / 2},${y} L${cx + w2 / 2},${y + h - 6} L${cx - w2 / 2},${y + h - 6} Z" fill="${fill}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>`;
    b += tx(cx, y + h / 2 + 4, s, { size: i === 0 ? 16 : 18, weight: 700, anchor: 'middle' });
  });
  b += arrow(580, 570, 580, 140, { w: 3.5 }) + `<text transform="translate(565,360) rotate(-90)" font-size="16" fill="${C.muted}" text-anchor="middle">needs run upward</text>`;
  b += card(620, 120, 250, 170, 'A satisfied need', 'stops motivating, so the next level up becomes the motivator', { fill: C.panel, ts: 18, bs: 17, top: 36 });
  b += card(620, 310, 250, 150, 'Manager', 'finds which level staff have reached and offers the next', { fill: C.tealLight, edge: C.tealDark, tfill: C.tealDark, ts: 18, bs: 17, top: 36 });
  b += card(620, 480, 250, 125, 'Limitation', 'Hard to measure; order may differ between people', { edge: C.rust, tfill: C.rust, ts: 18, bs: 16, top: 34 });
  add('04-maslow-hierarchy',
    svg(900, 640, 'Maslow’s hierarchy of needs', b),
    'A five-level pyramid from physiological at the base through safety, social and esteem to self-actualisation at the top. A satisfied need stops motivating, so managers find the level staff have reached and offer the next; the levels are hard to measure and may differ between people.',
    'Each satisfied need stops motivating; the next level up takes over.',
    '## Motivation in theory and practice');
}

// 05 Enrichment, enlargement, rotation
{
  const grid = (x0, kind) => {
    let s = '';
    const cell = (cx, cy, on, hi) => rect(cx, cy, 44, 34, hi ? C.mustard : on ? C.teal : C.panel, C.ink, 6, 1.8);
    for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) {
      const on = r === 2 && c === 0;
      let hi = false;
      if (kind === 'enrich' && (r === 1 && c === 0)) hi = true;
      if (kind === 'enlarge' && r === 2 && (c === 1 || c === 2)) hi = true;
      s += cell(x0 + 40 + c * 56, 250 + r * 46, on, hi);
    }
    return s;
  };
  let b = '';
  const col = (x, title, sub, kind, txt) => {
    let s = rect(x, 110, 270, 470, C.panel) + tx(x + 135, 148, title, { size: 21, weight: 700, anchor: 'middle' }) + tx(x + 135, 176, sub, { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 });
    s += tx(x + 22, 236, 'higher level ↑', { size: 15, fill: C.muted });
    s += grid(x, kind);
    if (kind === 'enrich') s += arrow(x + 62, 342, x + 62, 300, { w: 3, color: C.olive, marker: 'ahO' });
    if (kind === 'enlarge') s += arrow(x + 90, 360, x + 192, 360, { w: 3, color: C.olive, marker: 'ahO' });
    if (kind === 'rotate') s += parrow(`M${x + 62},${396} C${x + 100},${430} ${x + 180},${430} ${x + 230},${398}`, { w: 3, color: C.olive, marker: 'ahO' });
    s += para(x + 22, 470, txt, 226, { size: 17 });
    return s;
  };
  b += col(30, 'Job enrichment', 'vertical', 'enrich', 'Adds responsibility and more challenging tasks');
  b += col(315, 'Job enlargement', 'horizontal', 'enlarge', 'Adds more tasks at the same level');
  b += col(600, 'Job rotation', 'movement', 'rotate', 'Moves staff between tasks for variety');
  b += rect(30, 600, 20, 20, C.teal, C.ink, 4, 1.8) + tx(60, 616, 'current job', { size: 16 }) + rect(200, 600, 20, 20, C.mustard, C.ink, 4, 1.8) + tx(230, 616, 'added', { size: 16 });
  b += tx(870, 616, 'Enrichment adds responsibility; enlargement adds tasks.', { size: 16, anchor: 'end', fill: C.muted, italic: true });
  add('05-enrichment-enlargement-rotation',
    svg(900, 646, 'Three ways to redesign a job', b),
    'Three grids of tasks. Job enrichment adds a task at a higher level: more responsibility and challenge. Job enlargement adds more tasks at the same level. Job rotation moves the worker between tasks for variety.',
    'Enrichment goes up, enlargement goes across, rotation moves around.',
    '## Motivation in theory and practice');
}

// 06 Leadership styles continuum
{
  let b = arrow(60, 140, 840, 140, { w: 3.5 }) + tx(60, 128, 'leader decides alone', { size: 16, fill: C.muted }) + tx(840, 128, 'staff decide', { size: 16, fill: C.muted, anchor: 'end' });
  const st = [
    ['Autocratic', 'Leader decides alone', 'Fast and clear; suits emergencies or unskilled staff', 'Can demotivate skilled staff'],
    ['Paternalistic', 'Leader decides, but considers staff welfare and explains decisions', '', ''],
    ['Democratic', 'Staff take part in decisions', 'Motivating; draws on expertise', 'Slower'],
    ['Laissez-faire', 'Leader sets broad aims; staff decide', 'Suits highly skilled, self-motivated teams', 'Risks drift'],
  ];
  st.forEach(([h, d, p, m], i) => {
    const x = 30 + i * 213;
    b += rect(x, 165, 198, 420, C.panel) + rect(x, 165, 198, 56, [C.mustard, C.cream, C.tealLight, C.teal][i], C.ink, 12, 2) + tx(x + 99, 201, h, { size: 18, weight: 700, anchor: 'middle' });
    b += para(x + 14, 250, d, 172, { size: 16 });
    if (p) b += tx(x + 14, 370, '+', { size: 20, weight: 700, fill: C.tealDark }) + para(x + 34, 370, p, 152, { size: 16 });
    if (m) b += tx(x + 14, 500, '−', { size: 20, weight: 700, fill: C.rust }) + para(x + 34, 500, m, 152, { size: 16 });
  });
  b += rect(30, 605, 840, 120, C.cream, C.olive) + tx(56, 641, 'From entrepreneur to leader', { size: 19, weight: 700 }) +
    para(56, 671, 'A founder who checks every decision creates bottlenecks, and skilled staff leave if given no authority: the founder must learn to delegate.', 790, { size: 17, fill: C.muted });
  add('06-leadership-styles',
    svg(900, 755, 'Four leadership styles', b),
    'Four styles from the leader deciding alone to staff deciding: autocratic (fast, suits emergencies, can demotivate skilled staff), paternalistic (leader decides but considers welfare and explains), democratic (motivating but slower) and laissez-faire (suits skilled teams, risks drift). A growing founder must learn to delegate.',
    'Match the style to the staff and situation in the source.',
    '## Leadership');
}

// 07 Herzberg applied to a call centre
{
  let b = '';
  b += `<line x1="70" y1="170" x2="830" y2="170" stroke="${C.ink}" stroke-width="4"/>` + `<circle cx="450" cy="170" r="9" fill="${C.ink}"/>`;
  b += tx(70, 150, 'dissatisfied', { size: 17, weight: 700, fill: C.rust }) + tx(450, 150, 'neutral', { size: 17, weight: 700, anchor: 'middle', fill: C.muted }) + tx(830, 150, 'satisfied', { size: 17, weight: 700, fill: C.tealDark, anchor: 'end' });
  b += arrow(110, 196, 430, 196, { color: C.olive, marker: 'ahO', w: 4 }) + arrow(470, 196, 790, 196, { color: C.tealDark, marker: 'ahT', w: 4 });
  b += card(30, 216, 410, 130, 'Hygiene factors', 'Pay, conditions, supervision: prevent dissatisfaction', { fill: C.cream, edge: C.olive, ts: 19, bs: 17, top: 38 });
  b += card(460, 216, 410, 130, 'Motivators', 'Achievement, recognition, responsibility: create satisfaction', { fill: C.tealLight, edge: C.tealDark, tfill: C.tealDark, ts: 19, bs: 17, top: 38 });
  b += tx(450, 392, 'Applied: a call centre with high staff turnover', { size: 19, weight: 700, anchor: 'middle' });
  const ch = (x, steps, e) => steps.map((s, i) => card(x, 410 + i * 108, 410, 88, '', s, { bs: 17, bfill: C.ink, edge: e, fill: i === 2 ? (e === C.olive ? C.cream : C.tealLight) : C.panel }) + (i < 2 ? arrow(x + 205, 500 + i * 108, x + 205, 516 + i * 108, { w: 3 }) : '')).join('');
  b += ch(30, ['Pay is below rival centres in the area: a hygiene factor is unmet', 'Staff leave', 'Match local pay to reduce turnover'], C.olive);
  b += ch(460, ['Scripted calls give little sense of achievement', 'Even well-paid staff may leave', 'Empower experienced staff to resolve complaints: responsibility'], C.tealDark);
  b += tx(235, 760, 'Chain 1', { size: 16, anchor: 'middle', weight: 700, fill: C.olive }) + tx(665, 760, 'Chain 2, applied', { size: 16, anchor: 'middle', weight: 700, fill: C.tealDark });
  add('07-herzberg-call-centre',
    svg(900, 790, 'Herzberg’s two factors in action', b),
    'Hygiene factors such as pay move staff from dissatisfied to neutral; motivators such as responsibility move them from neutral to satisfied. For a call centre: pay below rivals makes staff leave, so match local pay; scripted calls give no achievement, so empower experienced staff to resolve complaints.',
    'Fix hygiene factors to stop people leaving; add motivators to give them a reason to stay.',
    '## Worked example 2: an annotated answer');
}
