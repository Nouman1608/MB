import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-a-level-business-ybs11-financial-planning';
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

// shared break-even chart helper (to scale)
const beChart = (X0, Y0, W, H, qMax, vMax, opts) => {
  const qx = (q) => X0 + (q / qMax) * W, vy = (v) => Y0 - (v / vMax) * H;
  let s = line(X0, Y0 - H - 10, X0, Y0, { w: 3 }) + line(X0, Y0, X0 + W + 10, Y0, { w: 3 });
  opts.yt.forEach((v) => { s += line(X0, vy(v), X0 + W, vy(v), { color: C.panelEdge, w: 1.2 }) + tx(X0 - 10, vy(v) + 5, money(v), { size: 15, anchor: 'end', fill: C.muted }); });
  opts.xt.forEach((q) => { s += line(qx(q), Y0, qx(q), Y0 + 6, { w: 2 }) + tx(qx(q), Y0 + 26, q.toLocaleString('en-US'), { size: 15, anchor: 'middle', fill: C.muted }); });
  return { s, qx, vy };
};

// 01 Pennant Print costs and average cost
{
  const x0 = 140, yb = 560, top = 190, max = 45000, sc = (v) => ((yb - top) * v) / max;
  let b = panel(30, 110, 520, 530) + tx(56, 146, 'Pennant Print: monthly costs', { size: 19, weight: 700 });
  [0, 15000, 30000, 45000].forEach((v) => { const y = yb - sc(v); b += line(x0, y, 525, y, { color: C.panelEdge, w: 1.5 }) + tx(x0 - 10, y + 6, money(v), { size: 15, anchor: 'end', fill: C.muted }); });
  [[190, 6000, 15000, 33000, '$5.50'], [370, 9000, 22500, 40500, '$4.50']].forEach(([x, q, vc, tc, ac]) => {
    b += `<rect x="${x}" y="${yb - sc(18000)}" width="130" height="${sc(18000)}" fill="${C.tealDark}" stroke="${C.ink}" stroke-width="2.5"/>`;
    b += `<rect x="${x}" y="${yb - sc(tc)}" width="130" height="${sc(vc)}" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>`;
    b += tx(x + 65, yb - sc(9000) + 6, 'FC $18,000', { size: 15, anchor: 'middle', fill: '#ffffff', weight: 700 });
    b += tx(x + 65, yb - sc(18000 + vc / 2) + 6, `VC ${money(vc)}`, { size: 15, anchor: 'middle', weight: 700 });
    b += tx(x + 65, yb - sc(tc) - 12, `TC ${money(tc)}`, { size: 17, anchor: 'middle', weight: 700 });
    b += tx(x + 65, yb + 28, `${q.toLocaleString('en-US')} units`, { size: 17, weight: 700, anchor: 'middle' });
    b += tx(x + 65, yb + 52, `average ${ac}`, { size: 16, anchor: 'middle', fill: C.olive, weight: 700 });
  });
  b += line(x0, yb, 525, yb, { w: 2.5 });
  const st = (y, h, head, rows, f = C.panel, e = C.panelEdge) => rect(570, y, 300, h, f, e) + tx(590, y + 32, head, { size: 17, weight: 700, fill: C.muted }) + lines(590, y + 60, rows, { size: 17 }, 25);
  b += st(110, 125, 'At 6,000 units', ['VC = 6,000 × $2.50 = $15,000', 'AC = $33,000 ÷ 6,000 = $5.50']);
  b += st(250, 125, 'At 9,000 units', ['VC = 9,000 × $2.50 = $22,500', 'AC = $40,500 ÷ 9,000 = $4.50']);
  b += rect(570, 390, 300, 250, C.cream, C.olive) + tx(590, 424, 'Why average cost falls', { size: 18, weight: 700 }) + para(590, 456, 'The same $18,000 of fixed costs is spread over more units, so higher volume improves profit per unit, not just revenue.', 260, { size: 17 });
  add('01-pennant-costs',
    svg(900, 670, 'Fixed, variable and average cost', b),
    'Pennant Print’s fixed costs of $18,000 stay the same while variable costs at $2.50 a unit rise from $15,000 at 6,000 units to $22,500 at 9,000. Total cost rises from $33,000 to $40,500, but average cost falls from $5.50 to $4.50.',
    'Spreading the same fixed costs over more units lowers average cost.',
    '## Sales, revenue and costs');
}

// 02 Sales forecasting
{
  let b = '';
  const f = [['Consumer trends', 'e.g. a shift towards healthier food changes what people buy'], ['Economic variables', 'Incomes, inflation, interest rates, exchange rates change ability to spend'], ['Competitors’ actions', 'A new rival or a price cut changes the firm’s share']];
  f.forEach(([h, s], i) => { b += card(30, 110 + i * 150, 290, 134, h, s, { ts: 19, bs: 16, top: 36 }); b += arrow(322, 177 + i * 150, 372, 330, { w: 3 }); });
  b += card(376, 270, 160, 120, 'Sales forecast', '', { fill: C.cream, edge: C.olive, ts: 20, align: 'middle' });
  const p = ['Production and inventory', 'Staffing', 'Cash-flow forecasts and budgets', 'Applications for finance'];
  b += tx(706, 132, 'Used to plan', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  p.forEach((s, i) => { b += rect(580, 150 + i * 82, 290, 68, C.tealLight, C.tealDark, 10, 2) + para(598, 150 + i * 82 + (paraN(s, 254, 17) > 1 ? 28 : 41), s, 254, { size: 17 }); });
  b += arrow(538, 330, 576, 330, { w: 3 });
  b += rect(30, 580, 840, 190, C.panel, C.rust) + tx(56, 616, 'Difficulties', { size: 19, weight: 700, fill: C.rust });
  ['No sales history for new businesses or products', 'Tastes can change quickly', 'Economic conditions are hard to predict', 'Rivals’ actions are unknown in advance', 'An over-optimistic owner may bias the figures'].forEach((s, i) => {
    const x = 56 + (i % 3) * 272, y = 632 + Math.floor(i / 3) * 64;
    b += rect(x, y, 252, 54, '#fbf3ee', C.rust, 10, 2) + para(x + 14, y + (paraN(s, 226, 15) > 1 ? 22 : 33), s, 226, { size: 15 });
  });
  b += tx(450, 806, 'A wrong forecast feeds errors into every plan built on it.', { size: 17, anchor: 'middle', weight: 600 });
  add('02-sales-forecasting',
    svg(900, 836, 'What feeds a sales forecast, and what it feeds', b),
    'Consumer trends, economic variables and competitors’ actions shape a sales forecast, which is used to plan production and inventory, staffing, cash-flow forecasts and budgets, and finance applications. Difficulties include no sales history, changing tastes, unpredictable economies and rivals, and owner optimism.',
    'Every plan built on a forecast inherits its errors.',
    '## Sales forecasting');
}

// 03 Pennant break-even chart
{
  let b = panel(30, 110, 620, 600);
  const { s, qx, vy } = beChart(140, 620, 480, 440, 5000, 45000, { yt: [0, 15000, 30000, 45000], xt: [0, 1000, 2000, 3000, 4000, 5000] });
  b += s + tx(56, 146, 'Costs and revenue', { size: 15, weight: 700 }) + tx(620, 676, 'Units a month', { size: 16, weight: 700, anchor: 'end' });
  // loss/profit shading
  b += `<path d="M${qx(0)},${vy(18000)} L${qx(3000)},${vy(25500)} L${qx(0)},${vy(0)} Z" fill="#f3dccd" opacity="0.8"/>`;
  b += `<path d="M${qx(3000)},${vy(25500)} L${qx(5000)},${vy(42500)} L${qx(5000)},${vy(30500)} Z" fill="${C.tealLight}" opacity="0.9"/>`;
  b += line(qx(0), vy(18000), qx(5000), vy(18000), { color: C.muted, w: 3, dash: '9 6' }) + tx(qx(5000) - 4, vy(18000) + 22, 'Fixed costs $18,000', { size: 15, anchor: 'end', fill: C.muted, weight: 600 });
  b += line(qx(0), vy(18000), qx(5000), vy(30500), { color: C.rust, w: 4 }) + tx(qx(5000) + 4, vy(30500) + 5, 'TC', { size: 17, weight: 700, fill: C.rust });
  b += line(qx(0), vy(0), qx(5000), vy(42500), { color: C.tealDark, w: 4 }) + tx(qx(5000) + 4, vy(42500) + 5, 'TR', { size: 17, weight: 700, fill: C.tealDark });
  b += line(qx(3000), vy(25500), qx(3000), 620, { dash: '6 5', w: 2 }) + `<circle cx="${qx(3000)}" cy="${vy(25500)}" r="8" fill="${C.ink}"/>`;
  b += tx(qx(3000) - 12, vy(25500) - 14, 'break-even: 3,000 units, $25,500', { size: 15, weight: 700, anchor: 'end' });
  b += line(qx(4200), vy(35700), qx(4200), 620, { dash: '6 5', w: 2, color: C.tealDark });
  b += `<line x1="${qx(3000)}" y1="590" x2="${qx(4200)}" y2="590" stroke="${C.olive}" stroke-width="3" marker-start="url(#ahO)" marker-end="url(#ahO)"/>`;
  b += tx((qx(3000) + qx(4200)) / 2, 580, 'MoS 1,200', { size: 15, weight: 700, anchor: 'middle', fill: C.olive });
  b += tx(qx(4200) + 6, 556, 'sales 4,200', { size: 15, weight: 700, fill: C.tealDark });
  b += tx(qx(4600), vy(34000) + 4, 'profit', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += tx(qx(1300), vy(11500), 'loss', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
  const st = (y, h, head, rows, f = C.panel, e = C.panelEdge) => rect(670, y, 200, h, f, e) + tx(686, y + 30, head, { size: 16, weight: 700, fill: C.muted }) + lines(686, y + 58, rows, { size: 16 }, 24);
  b += st(110, 110, 'Contribution', ['$8.50 − $2.50', '= $6.00']);
  b += st(232, 110, 'Break-even', ['18,000 ÷ 6.00', '= 3,000 units']);
  b += st(354, 134, 'Check', ['18,000 + 7,500', '= 25,500', '= 8.50 × 3,000']);
  b += st(500, 110, 'Margin of safety', ['4,200 − 3,000', '= 1,200 units'], C.cream, C.olive);
  b += rect(30, 730, 840, 90, C.tealLight, C.tealDark) + para(56, 766, 'Gap between TR and TC: profit to the right of break-even, loss to the left. The horizontal distance from break-even to actual output is the margin of safety.', 790, { size: 17 });
  add('03-pennant-break-even',
    svg(900, 850, 'Pennant Print: break-even chart', b),
    'A break-even chart for Pennant Print with fixed costs of $18,000, total cost rising at $2.50 a unit and total revenue at $8.50 a unit. The lines cross at 3,000 units and $25,500. With expected sales of 4,200 units the margin of safety is 1,200 units.',
    'Pennant breaks even at 3,000 units and expects a 1,200-unit margin of safety.',
    '## Break-even analysis');
}

// 04 Ink cost rise
{
  let b = panel(30, 110, 840, 470);
  const { s, qx, vy } = beChart(140, 500, 610, 340, 5000, 45000, { yt: [0, 15000, 30000, 45000], xt: [0, 1000, 2000, 3000, 4000, 5000] });
  b += s + tx(130, 150, '$', { size: 15, weight: 700, anchor: 'end' }) + tx(750, 556, 'Units a month', { size: 16, weight: 700, anchor: 'end' });
  b += line(qx(0), vy(0), qx(5000), vy(42500), { color: C.tealDark, w: 4 }) + tx(qx(5000) + 4, vy(42500) + 5, 'TR', { size: 17, weight: 700, fill: C.tealDark });
  b += line(qx(0), vy(18000), qx(5000), vy(30500), { color: C.ink, w: 3.5 }) + tx(qx(5000) + 4, vy(30500) + 18, 'TC', { size: 16, weight: 700 });
  b += line(qx(0), vy(18000), qx(5000), vy(35500), { color: C.rust, w: 3.5, dash: '10 6' }) + tx(qx(5000) + 6, vy(35500) + 4, 'TC at $3.50', { size: 16, weight: 700, fill: C.rust });
  b += `<circle cx="${qx(3000)}" cy="${vy(25500)}" r="7" fill="${C.ink}"/><circle cx="${qx(3600)}" cy="${vy(30600)}" r="7" fill="${C.rust}"/>`;
  b += line(qx(3000), vy(25500), qx(3000), 500, { dash: '5 5', w: 2 }) + line(qx(3600), vy(30600), qx(3600), 500, { dash: '5 5', w: 2, color: C.rust }) + line(qx(4200), vy(35700), qx(4200), 500, { dash: '5 5', w: 2, color: C.tealDark });
  b += tx(qx(4200) + 6, 486, 'forecast 4,200', { size: 15, weight: 700, fill: C.tealDark });
  const row = (y, head, c, be, mos, fill, edge) => rect(30, y, 840, 70, fill, edge) + tx(56, y + 42, head, { size: 18, weight: 700 }) + tx(380, y + 42, c, { size: 17 }) + tx(590, y + 42, be, { size: 17 }) + tx(846, y + 42, mos, { size: 18, weight: 700, anchor: 'end', fill: edge === C.rust ? C.rust : C.tealDark });
  b += tx(380, 612, 'Contribution', { size: 15, weight: 700, fill: C.muted }) + tx(590, 612, 'Break-even', { size: 15, weight: 700, fill: C.muted }) + tx(846, 612, 'Margin of safety', { size: 15, weight: 700, fill: C.muted, anchor: 'end' });
  b += row(624, 'Variable cost $2.50', '$6.00', '3,000 units', '1,200 units', C.panel, C.tealDark);
  b += row(704, 'Variable cost $3.50', '$5.00', '18,000 ÷ 5 = 3,600', '600 units', '#fbf3ee', C.rust);
  b += tx(450, 810, 'A $1 rise in unit cost halves the margin of safety.', { size: 18, weight: 700, anchor: 'middle' });
  add('04-ink-cost-break-even',
    svg(900, 840, 'A small cost change, a big safety change', b),
    'When Pennant’s variable cost rises from $2.50 to $3.50, the total cost line becomes steeper and break-even moves from 3,000 to 3,600 units. Against forecast sales of 4,200, the margin of safety halves from 1,200 to 600 units.',
    'A $1 rise in unit cost halves Pennant’s margin of safety.',
    '## Break-even analysis');
}

// 05 How the chart moves
{
  const mini = (x, title, kind) => {
    let s = panel(x, 110, 410, 420) + tx(x + 205, 148, title, { size: 20, weight: 700, anchor: 'middle' });
    const X0 = x + 50, Y0 = 470, W = 330, H = 280;
    s += line(X0, Y0 - H, X0, Y0, { w: 3 }) + line(X0, Y0, X0 + W, Y0, { w: 3 });
    const fc = 110, fc2 = 160;
    const tcEnd = 200, trEnd = 260, trEnd2 = 320;
    const ix = (y0a, ya, y0b, yb) => { const m1 = (ya - y0a) / W, m2 = (yb - y0b) / W; const xx = (y0b - y0a) / (m1 - m2); return [X0 + xx, Y0 - (y0a + m1 * xx)]; };
    if (kind === 'price') {
      s += line(X0, Y0 - fc, X0 + W, Y0 - tcEnd, { color: C.rust, w: 3.5 }) + tx(X0 + W + 4, Y0 - tcEnd + 5, 'TC', { size: 15, weight: 700, fill: C.rust });
      s += line(X0, Y0, X0 + W, Y0 - trEnd, { color: C.tealDark, w: 3.5 }) + tx(X0 + W + 4, Y0 - trEnd + 5, 'TR', { size: 15, weight: 700, fill: C.tealDark });
      s += line(X0, Y0, X0 + W * (trEnd / trEnd2), Y0 - trEnd, { color: C.tealDark, w: 3.5, dash: '9 6' }) + tx(X0 + W * (trEnd / trEnd2) - 4, Y0 - trEnd - 10, 'TR after price rise', { size: 15, weight: 700, fill: C.tealDark, anchor: 'middle' });
      const [a] = ix(0, trEnd, fc, tcEnd), [b2] = ix(0, trEnd2, fc, tcEnd);
      s += line(a, Y0 - 10, a, Y0, { w: 3 }) + line(b2, Y0 - 10, b2, Y0, { w: 3 });
      s += arrow(a - 4, Y0 + 22, b2 + 4, Y0 + 22, { color: C.olive, marker: 'ahO', w: 3 }) + tx((a + b2) / 2, Y0 + 50, 'break-even moves left', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
    } else {
      s += line(X0, Y0, X0 + W, Y0 - trEnd, { color: C.tealDark, w: 3.5 }) + tx(X0 + W + 4, Y0 - trEnd + 5, 'TR', { size: 15, weight: 700, fill: C.tealDark });
      s += line(X0, Y0 - fc, X0 + W, Y0 - tcEnd, { color: C.rust, w: 3.5 }) + tx(X0 + W + 4, Y0 - tcEnd + 14, 'TC', { size: 15, weight: 700, fill: C.rust });
      s += line(X0, Y0 - fc2, X0 + W, Y0 - tcEnd - (fc2 - fc), { color: C.rust, w: 3.5, dash: '9 6' }) + tx(X0 + 10, Y0 - fc2 - 62, 'TC after fixed costs rise', { size: 15, weight: 700, fill: C.rust });
      const [a] = ix(0, trEnd, fc, tcEnd), [b2] = ix(0, trEnd, fc2, tcEnd + fc2 - fc);
      s += line(a, Y0 - 10, a, Y0, { w: 3 }) + line(b2, Y0 - 10, b2, Y0, { w: 3 });
      s += arrow(a + 4, Y0 + 22, b2 - 4, Y0 + 22, { color: C.olive, marker: 'ahO', w: 3 }) + tx((a + b2) / 2 - 20, Y0 + 50, 'break-even moves right', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
    }
    return s;
  };
  let b = mini(30, 'Price rises', 'price') + mini(460, 'Fixed costs rise', 'fixed');
  b += rect(30, 550, 840, 210, C.panel, C.rust) + tx(56, 586, 'Limitations of break-even', { size: 19, weight: 700, fill: C.rust });
  ['Assumes all output is sold', 'Assumes price and unit variable cost stay constant', 'Treats fixed costs as fixed at every output', 'Hard to use with many products', 'Only as reliable as the sales forecast'].forEach((s2, i) => {
    const x = 56 + (i % 3) * 272, y = 604 + Math.floor(i / 3) * 74;
    b += rect(x, y, 252, 62, '#fbf3ee', C.rust, 10, 2) + para(x + 14, y + (paraN(s2, 226, 16) > 1 ? 26 : 37), s2, 226, { size: 16 });
  });
  add('05-break-even-chart-changes',
    svg(900, 790, 'Reading changes on a break-even chart', b),
    'Two simple break-even charts. A price rise makes the total revenue line steeper, so break-even moves left. A rise in fixed costs shifts the total cost line up, so break-even moves right. Limitations: all output sold, constant price and unit cost, fixed costs at every output, many products and an uncertain forecast.',
    'A steeper revenue line pulls break-even left; higher fixed costs push it right.',
    '## Break-even analysis');
}

// 06 Holloway Tiles cash flow
{
  const months = ['Dec', 'Jan', 'Feb', 'Mar'];
  const sales = [10000, 12000, 15000, 18000];
  const xs = [100, 300, 500, 700];
  let b = panel(30, 110, 840, 330) + tx(56, 146, 'Half of each month’s sales is paid now, half next month', { size: 18, weight: 700 });
  months.forEach((m, i) => {
    const x = xs[i];
    b += tx(x + 60, 186, m, { size: 18, weight: 700, anchor: 'middle' }) + tx(x + 60, 210, `sales ${money(sales[i])}`, { size: 15, anchor: 'middle', fill: C.muted });
    b += rect(x, 224, 58, 50, i ? C.teal : C.panel, C.ink, 6, 2) + rect(x + 62, 224, 58, 50, C.cream, C.ink, 6, 2);
    b += tx(x + 29, 255, i ? money(sales[i] / 2) : '', { size: 14, anchor: 'middle', weight: 700 }) + tx(x + 91, 255, money(sales[i] / 2), { size: 14, anchor: 'middle', weight: 700 });
    if (i < 3) b += parrow(`M${x + 91},${276} C${x + 110},${330} ${xs[i + 1] - 10},${330} ${xs[i + 1] + 25},${300}`, { w: 2.5, color: C.olive, marker: 'ahO' });
    if (i) b += tx(x + 60, 410, `in: ${money(sales[i] / 2 + sales[i - 1] / 2)}`, { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  });
  b += rect(80, 386, 18, 18, C.teal, C.ink, 3, 1.5) + tx(104, 401, 'cash now', { size: 15 }) + rect(80, 412, 18, 18, C.cream, C.ink, 3, 1.5) + tx(104, 427, 'credit: paid next month', { size: 15 });
  // closing balances
  const x0 = 140, yb = 760, top = 520, max = 4000, sc = (v) => ((yb - top) * v) / max;
  b += panel(30, 460, 840, 360) + tx(56, 496, 'Closing balance', { size: 18, weight: 700 });
  [0, 2000, 4000].forEach((v) => { const y = yb - sc(v); b += line(x0, y, 850, y, { color: C.panelEdge, w: 1.5 }) + tx(x0 - 10, y + 6, money(v), { size: 15, anchor: 'end', fill: C.muted }); });
  const bal = [['Start', 4000, ''], ['Jan', 2500, 'net −$1,500'], ['Feb', 2000, 'net −$500'], ['Mar', 3500, 'net +$1,500']];
  bal.forEach(([m, v, n], i) => {
    const x = x0 + 40 + i * 170;
    b += `<rect x="${x}" y="${yb - sc(v)}" width="110" height="${sc(v)}" fill="${i === 0 ? C.panel : i === 3 ? C.teal : C.cream}" stroke="${C.ink}" stroke-width="2.5"/>`;
    b += tx(x + 55, yb - sc(v) - 10, money(v), { size: 17, weight: 700, anchor: 'middle' });
    b += tx(x + 55, yb + 26, m, { size: 16, weight: 700, anchor: 'middle' }) + tx(x + 55, yb + 48, n, { size: 15, anchor: 'middle', fill: n.includes('−') ? C.rust : C.tealDark, weight: 600 });
  });
  b += line(x0, yb, 850, yb, { w: 2.5 });
  b += takeaway(840, 'Sales rise every month, but cash falls in January and February.', 'Outflows of $12,500 and $14,000 exceed inflows of $11,000 and $13,500, because half of each month’s sales arrives a month later. Holloway can arrange an overdraft or shorten credit terms in advance.');
  add('06-holloway-cash-flow',
    svg(900, 840 + takeH('Outflows of $12,500 and $14,000 exceed inflows of $11,000 and $13,500, because half of each month’s sales arrives a month later. Holloway can arrange an overdraft or shorten credit terms in advance.') + 30, 'Holloway Tiles: rising sales, falling cash', b),
    'Holloway Tiles receives half of each month’s sales at once and half the next month, so inflows are $11,000, $13,500 and $16,500 for January to March. Against outflows of $12,500, $14,000 and $15,000, the closing balance falls from $4,000 to $2,500 and $2,000 before rising to $3,500.',
    'Credit sales delay cash, so a growing business can still run short.',
    '## Cash-flow forecasts');
}

// 07 Variance waterfall
{
  const x0 = 140, yb = 600, top = 200, max = 12000, sc = (v) => ((yb - top) * v) / max;
  let b = panel(30, 110, 840, 580) + tx(56, 146, 'Holloway’s quarter: from budgeted to actual profit', { size: 19, weight: 700 });
  [0, 4000, 8000, 12000].forEach((v) => { const y = yb - sc(v); b += line(x0, y, 850, y, { color: C.panelEdge, w: 1.5 }) + tx(x0 - 10, y + 6, money(v), { size: 15, anchor: 'end', fill: C.muted }); });
  const steps = [['Budget profit', 0, 11000, C.teal, '$11,000'], ['Revenue', 7000, 11000, C.rust, '−$4,000 A'], ['Materials', 7000, 8500, C.tealDark, '+$1,500 F'], ['Labour', 7300, 8500, C.rust, '−$1,200 A'], ['Overheads', 7300, 7300, C.muted, 'none'], ['Actual profit', 0, 7300, C.mustard, '$7,300']];
  steps.forEach(([h, lo, hi, f, lab], i) => {
    const x = x0 + 20 + i * 117, w = 90;
    const hh = Math.max(sc(hi - lo), 3);
    b += `<rect x="${x}" y="${yb - sc(hi)}" width="${w}" height="${hh}" fill="${f}" stroke="${C.ink}" stroke-width="2"/>`;
    b += tx(x + w / 2, yb - sc(hi) - 10, lab, { size: 15, weight: 700, anchor: 'middle', fill: f === C.rust ? C.rust : f === C.tealDark ? C.tealDark : C.ink });
    b += para(x + w / 2, yb + 26, h, 96, { size: 15, anchor: 'middle', weight: 600 });
    if (i < 5) { const lvl = [11000, 7000, 8500, 7300, 7300][i]; b += line(x + w, yb - sc(lvl), x + 117, yb - sc(lvl), { dash: '4 4', w: 1.5 }); }
  });
  b += line(x0, yb, 850, yb, { w: 2.5 });
  b += tx(56, 676, 'F = favourable (raises profit)   A = adverse (lowers profit)', { size: 15, fill: C.muted });
  b += takeaway(710, 'Investigate labour first.', 'Labour is $1,200 over budget despite lower sales. The materials saving may only reflect lower sales volume, not better buying.');
  add('07-holloway-variances',
    svg(900, 710 + takeH('Labour is $1,200 over budget despite lower sales. The materials saving may only reflect lower sales volume, not better buying.') + 30, 'Variance analysis: Holloway Tiles', b),
    'A waterfall from budgeted profit of $11,000 to actual profit of $7,300: revenue $4,000 adverse, materials $1,500 favourable, labour $1,200 adverse and overheads on budget, a total of $3,700 adverse.',
    'Judge each variance by its effect on profit, then ask what caused it.',
    '## Budgets and variance analysis');
}
