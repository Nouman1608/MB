import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-a-level-business-ybs11-entrepreneurs-and-leaders';
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

// 01 How the entrepreneur's role changes
{
  const st = [
    ['1', 'Create and set up', 'Spot a gap or a better way to meet a need; test the idea; raise finance; organise premises, suppliers and staff'],
    ['2', 'Run the business', 'Day-to-day decisions on customers, cash, quality and people; often harder than the start-up as excitement gives way to routine'],
    ['3', 'Expand or develop', 'Add products, locations or markets; employ managers and delegate'],
  ];
  let b = '';
  st.forEach(([n, h, s], i) => {
    const x = 30 + i * 290;
    b += rect(x, 110, 260, 330, i === 2 ? C.cream : C.panel, i === 2 ? C.olive : C.panelEdge) + badge(x + 40, 154, 22, n, C.cream) + para(x + 74, 162, h, 170, { size: 20, weight: 700 });
    b += para(x + 20, 230, s, 220, { size: 17, fill: C.muted });
    if (i < 2) b += arrow(x + 262, 275, x + 288, 275, { w: 3.5 });
  });
  b += rect(30, 470, 840, 270, C.tealLight, C.tealDark) + tx(56, 508, 'Intrapreneurship: an employee acting like an entrepreneur inside an existing business', { size: 19, weight: 700, fill: C.tealDark });
  b += card(56, 530, 250, 110, 'How', 'Develops a new product or process using the firm’s resources', { ts: 17, bs: 16, top: 30, edge: C.tealDark });
  b += card(325, 530, 250, 110, 'The firm gains', 'Innovation, without the employee leaving to compete', { ts: 17, bs: 16, top: 30, edge: C.tealDark });
  b += card(594, 530, 250, 110, 'The employee gains', 'Freedom, with less personal risk', { ts: 17, bs: 16, top: 30, edge: C.tealDark });
  b += tx(450, 690, 'It needs a culture that tolerates some failure.', { size: 18, weight: 700, anchor: 'middle' });
  b += tx(450, 718, 'Entrepreneur: starts a new firm.  Intrapreneur: innovates inside an existing one.', { size: 16, anchor: 'middle', fill: C.muted });
  add('01-entrepreneur-role',
    svg(900, 770, 'How an entrepreneur’s role changes', b),
    'Three stages of the entrepreneur’s role: create and set up (spot a gap, test, raise finance), run the business (day-to-day decisions, often harder than start-up) and expand or develop (new products or markets, employ managers and delegate). Below, intrapreneurship: an employee innovating inside an existing firm, which gains innovation while the employee gains freedom with less risk.',
    'The role shifts from creating to running to delegating; intrapreneurs innovate from inside.',
    '## The role of an entrepreneur');
}

// 02 Barriers and managing risk
{
  let b = rect(30, 110, 400, 560, C.panel, C.rust) + tx(56, 148, 'Barriers to entrepreneurship', { size: 20, weight: 700, fill: C.rust });
  ['Raising finance without a track record', 'Lack of experience or business skills', 'Regulations and paperwork', 'Established rivals with brand loyalty and economies of scale', 'Personal risk: losing savings and a secure income'].forEach((s, i) => {
    b += rect(50, 170 + i * 98, 360, 84, C.panel, C.rust, 10, 2) + para(68, 170 + i * 98 + (paraN(s, 324, 17) > 1 ? 34 : 48), s, 324, { size: 17 });
  });
  b += rect(450, 110, 420, 290, C.tealLight, C.tealDark) + tx(474, 148, 'Reduce risk', { size: 20, weight: 700, fill: C.tealDark });
  ['Research the market', 'Write a business plan', 'Start small', 'Test before committing large sums'].forEach((s, i) => {
    b += rect(470, 168 + i * 56, 380, 46, C.panel, C.tealDark, 10, 2) + tx(490, 168 + i * 56 + 30, s, { size: 17 });
  });
  b += rect(450, 420, 420, 250, C.cream, C.olive) + tx(474, 458, 'Cope with uncertainty', { size: 20, weight: 700, fill: C.olive }) + tx(474, 486, 'it cannot be removed, so keep:', { size: 16, fill: C.muted, italic: true });
  ['Financial reserves', 'Flexibility, e.g. rent rather than buy equipment at first'].forEach((s, i) => {
    b += rect(470, 504 + i * 76, 380, 64, C.panel, C.olive, 10, 2) + para(490, 504 + i * 76 + (paraN(s, 340, 17) > 1 ? 26 : 38), s, 340, { size: 17 });
  });
  add('02-barriers-and-risk',
    svg(900, 700, 'Barriers, risk and uncertainty', b),
    'Five barriers to entrepreneurship: finance without a track record, lack of experience, regulations, established rivals with brand loyalty and scale, and personal financial risk. Risk is reduced by research, a business plan, starting small and testing; uncertainty cannot be removed, so entrepreneurs keep reserves and flexibility.',
    'Research and planning reduce risk; reserves and flexibility help with uncertainty.',
    '## The role of an entrepreneur');
}

// 03 Characteristics and skills linked to situations
{
  let b = card(30, 110, 410, 230, 'Characteristics', '', { fill: C.cream, edge: C.olive, ts: 20, top: 38 });
  ['Determination and resilience', 'Willing to take calculated risks', 'Creativity and initiative', 'Self-confidence'].forEach((s, i) => { b += tx(56, 186 + i * 36, '• ' + s, { size: 17 }); });
  b += card(460, 110, 410, 230, 'Skills', '', { fill: C.tealLight, edge: C.tealDark, ts: 20, top: 38, tfill: C.tealDark });
  ['Planning', 'Communication', 'Financial understanding', 'Selling', 'Building a team'].forEach((s, i) => { b += tx(486, 182 + i * 31, '• ' + s, { size: 17 }); });
  b += tx(450, 386, 'In an exam, link each one to a situation in the source', { size: 19, weight: 700, anchor: 'middle' });
  const link = (y, a, sit) => card(30, y, 250, 90, a, '', { ts: 19, align: 'middle', fill: C.cream, edge: C.olive }) + arrow(284, y + 45, 380, y + 45, { w: 3.5 }) + tx(332, y + 33, 'matters when', { size: 15, anchor: 'middle', fill: C.muted }) + card(384, y, 486, 90, '', sit, { bs: 18, bfill: C.ink });
  b += link(410, 'Resilience', 'Early sales disappoint');
  b += link(520, 'Communication', 'Persuading a bank or a supplier');
  add('03-characteristics-and-skills',
    svg(900, 640, 'What makes an entrepreneur', b),
    'Characteristics (determination and resilience, calculated risk-taking, creativity and initiative, self-confidence) and skills (planning, communication, financial understanding, selling, team building). Each should be linked to a case: resilience matters when early sales disappoint; communication matters when persuading a bank or supplier.',
    'Link a characteristic to the moment in the case when it matters.',
    '## Characteristics and skills');
}

// 04 Motives: financial and non-financial
{
  let b = card(330, 110, 240, 70, 'Motives', '', { fill: C.cream, edge: C.olive, ts: 22, align: 'middle' });
  b += parrow('M400,180 L400,200 L190,200 L190,222', { w: 3 }) + parrow('M500,180 L500,200 L625,200 L625,222', { w: 3 });
  b += rect(30, 226, 320, 50, C.tealDark, C.tealDark, 10) + tx(190, 258, 'Financial', { size: 19, weight: 700, anchor: 'middle', fill: '#ffffff' });
  b += rect(380, 226, 490, 50, C.ink, C.ink, 10) + tx(625, 258, 'Non-financial', { size: 19, weight: 700, anchor: 'middle', fill: '#ffffff' });
  b += card(30, 296, 320, 120, 'Profit maximisation', 'Aim for the largest profit possible', { ts: 18, bs: 16, top: 34, edge: C.tealDark });
  b += card(30, 432, 320, 140, 'Profit satisficing', 'A satisfactory profit while pursuing other goals, such as free time', { ts: 18, bs: 16, top: 34, edge: C.tealDark, fill: C.tealLight });
  const nf = [['Ethical stance', 'Personal values, e.g. fair treatment of suppliers'], ['Social entrepreneurship', 'Tackle a social or environmental problem'], ['Independence', 'Be one’s own boss'], ['Home working', 'Fit work around family commitments']];
  nf.forEach(([h, s], i) => { const x = 380 + (i % 2) * 250, y = 296 + Math.floor(i / 2) * 146; b += card(x, y, 240, 130, h, s, { ts: 18, bs: 16, top: 34 }); });
  b += rect(30, 600, 840, 150, C.cream, C.olive) + tx(56, 636, 'Satisficing in practice', { size: 19, weight: 700 });
  b += rect(56, 656, 230, 70, C.panel, C.panelEdge, 10, 2) + tx(171, 698, 'Open 7 days: more profit', { size: 16, anchor: 'middle', fill: C.muted });
  b += rect(320, 656, 230, 70, C.tealLight, C.tealDark, 10, 2) + tx(435, 698, 'Open 5 days: chosen', { size: 16, anchor: 'middle', weight: 700 });
  b += arrow(288, 691, 316, 691, { w: 3 });
  b += para(580, 676, 'The owner values family time more than the extra profit: a rational choice.', 270, { size: 16 });
  add('04-entrepreneur-motives',
    svg(900, 780, 'Why people set up businesses', b),
    'Motives split into financial (profit maximisation and profit satisficing) and non-financial (ethical stance, social entrepreneurship, independence and home working). An owner who opens five days instead of seven to protect family time is satisficing, a rational choice.',
    'Not every owner maximises profit: many satisfice or have non-financial aims.',
    '## Why people set up businesses');
}

// 05 Objectives and their conflict with profit
{
  let b = arrow(60, 140, 840, 140, { w: 3.5 }) + tx(60, 128, 'new business, or a crisis', { size: 16, fill: C.muted }) + tx(840, 128, 'established, able to grow', { size: 16, fill: C.muted, anchor: 'end' });
  b += card(30, 160, 400, 100, 'Survival', 'Cover costs; keep enough cash to pay bills', { fill: C.cream, edge: C.olive, ts: 20, bs: 16, top: 36 });
  b += card(470, 160, 400, 100, 'Profit maximisation', 'Once established with capacity to grow', { fill: C.cream, edge: C.olive, ts: 20, bs: 16, top: 36 });
  b += tx(56, 302, 'Other objectives, and how they sit with profit', { size: 19, weight: 700 });
  const o = [
    ['Sales maximisation', 'Low prices cut profit per unit', C.rust],
    ['Market share', 'Heavy promotion now for profit later', C.olive],
    ['Cost efficiency', 'Lower unit cost supports profit and pricing', C.tealDark],
    ['Employee welfare', 'Better morale and retention, higher costs', C.olive],
    ['Customer satisfaction', 'Loyalty, but extra staff or refunds', C.olive],
    ['Social objectives', 'Community or environment, e.g. local sourcing', C.olive],
  ];
  o.forEach(([h, s, c], i) => { const x = 30 + (i % 3) * 285, y = 322 + Math.floor(i / 3) * 140; b += card(x, y, 270, 124, h, s, { ts: 18, bs: 16, top: 34, edge: c }); });
  b += rect(30, 616, 840, 140, C.tealLight, C.tealDark) + tx(56, 652, 'The choice depends on', { size: 19, weight: 700, fill: C.tealDark });
  ['Size and stage', 'Ownership', 'Market and economy', 'Leaders’ values'].forEach((s, i) => { b += rect(56 + i * 202, 672, 186, 60, C.panel, C.tealDark, 10, 2) + tx(149 + i * 202, 709, s, { size: 17, anchor: 'middle', weight: 600 }); });
  add('05-business-objectives',
    svg(900, 786, 'Choosing business objectives', b),
    'Survival comes first for a new business or one in crisis, then profit maximisation once established. Six other objectives can compete with profit: sales maximisation, market share, cost efficiency, employee welfare, customer satisfaction and social objectives. The choice depends on size and stage, ownership, the market and economy and leaders’ values.',
    'Objectives change with the business’s stage, and most compete with profit.',
    '## Business objectives');
}

// 06 Amara's opportunity cost
{
  const x0 = 140, yb = 560, top = 190, max = 40000, sc = (v) => ((yb - top) * v) / max;
  let b = panel(30, 110, 500, 520) + tx(56, 146, 'Year one, in money terms', { size: 19, weight: 700 });
  [0, 10000, 20000, 30000, 40000].forEach((v) => { const y = yb - sc(v); b += line(x0, y, 505, y, { color: C.panelEdge, w: 1.5 }) + tx(x0 - 10, y + 6, money(v), { size: 15, anchor: 'end', fill: C.muted }); });
  b += `<rect x="180" y="${yb - sc(38000)}" width="130" height="${sc(38000)}" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += `<rect x="180" y="${yb - sc(39000)}" width="130" height="${sc(1000)}" fill="${C.tealDark}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += `<rect x="360" y="${yb - sc(30000)}" width="130" height="${sc(30000)}" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += `<rect x="360" y="${yb - sc(39000)}" width="130" height="${sc(9000)}" fill="none" stroke="${C.rust}" stroke-width="2.5" stroke-dasharray="7 5"/>`;
  b += tx(425, yb - sc(34500) + 6, '−$9,000', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  b += tx(245, yb - sc(39000) - 10, '$39,000', { size: 18, weight: 700, anchor: 'middle' }) + tx(425, yb - sc(30000) + 28, '$30,000', { size: 18, weight: 700, anchor: 'middle' });
  b += tx(245, yb - sc(19000), 'salary', { size: 15, anchor: 'middle' }) + tx(245, yb - sc(19000) + 20, '$38,000', { size: 15, anchor: 'middle' });
  b += line(x0, yb, 505, yb, { w: 2.5 });
  b += tx(245, yb + 28, 'Given up', { size: 17, weight: 700, anchor: 'middle' }) + tx(245, yb + 50, 'best alternative', { size: 15, anchor: 'middle', fill: C.muted });
  b += tx(425, yb + 28, 'Studio profit', { size: 17, weight: 700, anchor: 'middle' }) + tx(425, yb + 50, 'year one', { size: 15, anchor: 'middle', fill: C.muted });
  const st = (y, h, head, rows, f = C.panel, e = C.panelEdge) => rect(550, y, 320, h, f, e) + tx(570, y + 32, head, { size: 17, weight: 700, fill: C.muted }) + lines(570, y + 62, rows, { size: 18 }, 27);
  b += st(110, 100, 'Salary given up', ['$38,000']);
  b += st(225, 100, 'Interest given up', ['4% × $25,000 = $1,000']);
  b += st(340, 100, 'Opportunity cost', ['$38,000 + $1,000 = $39,000'], C.cream, C.olive);
  b += st(455, 175, 'Shortfall', ['$39,000 − $30,000', '= $9,000 worse off', 'than staying employed'], C.panel, C.rust);
  b += takeaway(660, 'She may still be right to continue.', 'Her motives include independence, the studio may grow, and the opportunity cost changes as profit rises.');
  add('06-amara-opportunity-cost',
    svg(900, 660 + takeH('Her motives include independence, the studio may grow, and the opportunity cost changes as profit rises.') + 30, 'Amara: the opportunity cost of starting up', b),
    'Amara gives up a $38,000 salary and $1,000 interest (4% on $25,000 savings), an opportunity cost of $39,000. Her studio makes $30,000 in year one, leaving her $9,000 worse off in money terms than staying employed.',
    'Opportunity cost is the next best alternative given up: here $39,000 against $30,000 profit.',
    '## Opportunity cost and trade-offs');
}

// 07 Kessington Dairy trade-off (contribution rectangles)
{
  const sx = 0.0014, sy = 750; // px per litre, px per $
  const box = (x0, label, q, m, c, f) => {
    const w = q * sx, h = m * sy, yb = 560;
    let s = `<rect x="${x0}" y="${yb - h}" width="${w}" height="${h}" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += tx(x0 + w / 2, yb - h / 2 - 6, money(c), { size: 24, weight: 700, anchor: 'middle' }) + tx(x0 + w / 2, yb - h / 2 + 20, 'contribution a month', { size: 15, anchor: 'middle' });
    s += tx(x0 + w / 2, yb + 28, `${q.toLocaleString('en-US')} litres`, { size: 17, weight: 700, anchor: 'middle' });
    s += tx(x0 - 10, yb - h / 2 + 6, `$${m.toFixed(2)}`, { size: 16, anchor: 'end', weight: 700, fill: C.tealDark });
    s += tx(x0 + w / 2, 200, label, { size: 19, weight: 700, anchor: 'middle' });
    return s;
  };
  let b = panel(30, 110, 840, 500) + tx(56, 146, 'Contribution per litre (height) × litres sold (width)', { size: 18, weight: 700, fill: C.muted });
  b += box(140, 'Now: $1.20 − $0.80', 200000, 0.40, 80000, C.teal);
  b += box(510, 'After cut: $1.10 − $0.80', 240000, 0.30, 72000, C.mustard);
  b += line(80, 560, 850, 560, { w: 2.5 });
  b += rect(30, 630, 410, 90, C.tealLight, C.tealDark) + tx(235, 668, 'Sales volume', { size: 17, anchor: 'middle', fill: C.muted }) + tx(235, 700, '+20%', { size: 24, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += rect(460, 630, 410, 90, C.panel, C.rust) + tx(665, 668, 'Contribution', { size: 17, anchor: 'middle', fill: C.muted }) + tx(665, 700, '−$8,000 a month', { size: 24, weight: 700, anchor: 'middle', fill: C.rust });
  b += takeaway(740, 'Short-term profit traded for market share.', 'Wise only if the larger share brings later gains, such as lower unit costs or the power to raise prices again.');
  add('07-kessington-trade-off',
    svg(900, 740 + takeH('Wise only if the larger share brings later gains, such as lower unit costs or the power to raise prices again.') + 30, 'Kessington Dairy: share or profit?', b),
    'Two rectangles show contribution. Now: 200,000 litres × $0.40 ($1.20 − $0.80) = $80,000 a month. After a price cut to $1.10: 240,000 litres × $0.30 = $72,000. Sales rise 20% but contribution falls $8,000 a month.',
    'A wider, flatter rectangle: more litres, less contribution.',
    '## Opportunity cost and trade-offs');
}
