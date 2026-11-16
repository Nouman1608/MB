import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-sociology-7192-work-poverty-and-welfare';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- Local layout helpers (sociology figures: wrapped text, tables, flows, cards) ----
const esc = (s) => String(s).replace(/&(?![a-z]+;|#\d+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const CW = 0.525, CWB = 0.575; // average glyph width / font size for Inter (regular, bold)
function wrap(s, maxPx, size = 17, bold = false) {
  const maxCh = Math.floor(maxPx / (size * (bold ? CWB : CW)));
  const lines = [''];
  for (const w of String(s).split(/\s+/)) {
    const cur = lines[lines.length - 1];
    if (cur && (cur + ' ' + w).replace(/\*\*/g, '').length > maxCh) lines.push(w);
    else lines[lines.length - 1] = cur ? cur + ' ' + w : w;
  }
  return lines;
}
// **bold** spans inside a wrapped paragraph
function rich(lines) {
  let open = false;
  return lines.map((l) => {
    let out = open ? '<tspan font-weight="700">' : '';
    l.split('**').forEach((p, i) => { if (i > 0) { open = !open; out += open ? '<tspan font-weight="700">' : '</tspan>'; } out += esc(p); });
    return out + (open ? '</tspan>' : '');
  });
}
// paragraph: y is first baseline; returns {svg, h} where h = lines * lh
function para(x, y, w, s, o = {}) {
  const size = o.size || 17, lh = o.lh || Math.round(size * 1.32);
  const lines = rich(wrap(s, w, size, (o.weight || 400) >= 600));
  return { svg: tl(x, y, lines, { size, weight: o.weight || 400, fill: o.fill || C.ink, anchor: o.anchor || 'start', italic: o.italic }, lh), h: lines.length * lh, n: lines.length };
}
function bullets(x, y, w, items, o = {}) {
  const size = o.size || 17, lh = o.lh || Math.round(size * 1.32), gap = o.gap ?? 8;
  let s = '', h = 0;
  for (const it of items) {
    s += `<circle cx="${x + 5}" cy="${y + h - size * 0.33}" r="4.5" fill="${o.dot || C.tealDark}"/>`;
    const p = para(x + 18, y + h, w - 18, it, { size, lh, fill: o.fill || C.ink });
    s += p.svg; h += p.h + gap;
  }
  return { svg: s, h: h - gap };
}
const roundTop = (x, y, w, h, r = 14) => `M${x},${y + h} L${x},${y + r} Q${x},${y} ${x + r},${y} L${x + w - r},${y} Q${x + w},${y} ${x + w},${y + r} L${x + w},${y + h} Z`;
// panel with a coloured header band
function headPanel(x, y, w, h, head, o = {}) {
  const size = o.size || 20, hp = para(x + w / 2, 0, w - 28, head, { size, weight: 700, anchor: 'middle' });
  const hh = o.hh || Math.max(50, hp.h + 22);
  const hp2 = para(x + w / 2, y + (hh - hp.h) / 2 + size * 0.95, w - 28, head, { size, weight: 700, anchor: 'middle', fill: o.headInk || C.ink });
  return { svg: panel(x, y, w, h, o.body || C.panel, o.edge || C.panelEdge) + `<path d="${roundTop(x + 1.25, y + 1.25, w - 2.5, hh - 1.25, 13)}" fill="${o.fill || C.teal}"/>` + `<line x1="${x + 1.25}" y1="${y + hh}" x2="${x + w - 1.25}" y2="${y + hh}" stroke="${o.edge || C.panelEdge}" stroke-width="2"/>` + hp2.svg, hh };
}
const headH = (w, head, size = 20) => Math.max(50, para(0, 0, w - 28, head, { size, weight: 700 }).h + 22);
// content block measured: kind 'text' | 'bullets'
function block(x, y, w, c, o = {}) { return Array.isArray(c) ? bullets(x, y, w, c, o) : para(x, y, w, c, o); }
// note strip (cream) full width
function note(y, head, text, o = {}) {
  const x = o.x ?? 30, w = o.w ?? 840, size = o.size || 17;
  const hp = head ? para(x + 26, y + 36, w - 52, head, { size: 19, weight: 700, fill: o.headFill || C.ink }) : { svg: '', h: 0 };
  const bp = text ? block(x + 26, y + 36 + hp.h + (head ? 4 : 0), w - 52, text, { size, fill: o.fill || C.ink, dot: C.olive }) : { svg: '', h: 0 };
  const lh = Math.round(size * 1.32), h = 36 + hp.h + (head && text ? 4 : 0) + (text ? bp.h - lh : -25) + 24;
  return { svg: panel(x, y, w, h, o.bg || C.cream, o.edgeC || C.olive) + hp.svg + bp.svg, h };
}
// Comparison grid: cols [{head, fill}], rows [{label, cells:[text|[bullets]]}]
function compareFig(title, { sub, cols, rows, labelW = 150, size = 16, foot, headSize = 19, y0 }) {
  let y = y0 ?? (sub ? 120 : 104); const gap = 8, n = cols.length;
  const x0 = 30 + (labelW ? labelW + gap : 0), cw = (870 - x0 - gap * (n - 1)) / n;
  const hh = Math.max(...cols.map((c) => headH(cw, c.head, headSize) - 6));
  let s = '';
  cols.forEach((c, i) => {
    const x = x0 + i * (cw + gap), hp = para(x + cw / 2, 0, cw - 20, c.head, { size: headSize, weight: 700, anchor: 'middle' });
    s += `<rect x="${x}" y="${y}" width="${cw}" height="${hh}" rx="12" fill="${c.fill || C.teal}" stroke="${C.ink}" stroke-width="2"/>` + para(x + cw / 2, y + (hh - hp.h) / 2 + headSize * 0.93, cw - 20, c.head, { size: headSize, weight: 700, anchor: 'middle', fill: c.ink || C.ink }).svg;
  });
  y += hh + gap;
  for (const r of rows) {
    const ms = r.cells.map((c) => block(0, 0, cw - 28, c, { size }).h);
    const lp = labelW ? para(0, 0, labelW - 24, r.label, { size: 17, weight: 700 }) : { h: 0 };
    const rh = Math.max(...ms, lp.h) + 30;
    if (labelW) s += `<rect x="30" y="${y}" width="${labelW}" height="${rh}" rx="10" fill="${r.fill || C.cream}" stroke="${C.olive}" stroke-width="2"/>` + para(42, y + (rh - lp.h) / 2 + 17 * 0.95, labelW - 24, r.label, { size: 17, weight: 700 }).svg;
    r.cells.forEach((c, i) => {
      const x = x0 + i * (cw + gap);
      s += `<rect x="${x}" y="${y}" width="${cw}" height="${rh}" rx="10" fill="${r.cellFill?.[i] || C.panel}" stroke="${C.panelEdge}" stroke-width="2"/>` + block(x + 14, y + 15 + size * 0.95, cw - 28, c, { size }).svg;
    });
    y += rh + gap;
  }
  if (foot) { const f = note(y + 8, foot.head, foot.text); s += f.svg; y += f.h + 8; }
  return svg(900, Math.round(y + 24), esc(title), s, sub && esc(sub));
}
// Card grid: cards [{head, sub, body, fill}] in ncol columns, equal heights per row
function cardsFig(title, { sub, cards, ncol = 2, size = 16, foot, y0, headSize = 20, badges = false }) {
  let y = y0 ?? (sub ? 120 : 104); const gap = 16, cw = (840 - gap * (ncol - 1)) / ncol;
  let s = '';
  for (let r = 0; r < cards.length; r += ncol) {
    const row = cards.slice(r, r + ncol);
    const hhs = row.map((c) => headH(cw - (badges ? 50 : 0), c.head, headSize));
    const hh = Math.max(...hhs);
    const bodies = row.map((c) => (c.sub ? para(0, 0, cw - 32, c.sub, { size, weight: 600 }).h + 8 : 0) + block(0, 0, cw - 32, c.body, { size }).h);
    const ch = hh + Math.max(...bodies) + 36;
    row.forEach((c, i) => {
      const x = 30 + i * (cw + gap);
      const hp = headPanel(x, y, cw, ch, c.head, { fill: c.fill || C.teal, hh, size: headSize });
      s += hp.svg;
      if (badges) s += badge(x + 34, y + hh / 2, 18, String(r + i + 1), C.cream);
      let yy = y + hh + 18 + size * 0.95;
      if (c.sub) { const sp = para(x + 16, yy, cw - 32, c.sub, { size, fill: C.tealDark, weight: 600 }); s += sp.svg; yy += sp.h + 8; }
      s += block(x + 16, yy, cw - 32, c.body, { size, dot: c.dot }).svg;
    });
    y += ch + gap;
  }
  if (foot) { const f = note(y - gap + 16, foot.head, foot.text); s += f.svg; y += f.h; }
  return svg(900, Math.round(y + 14), esc(title), s, sub && esc(sub));
}
// Vertical flow: steps [{head, body, fill}] joined by arrows; optional side labels
function flowFig(title, { sub, steps, size = 17, foot, y0, numbered = true, arrowLabels = [] }) {
  let y = y0 ?? (sub ? 120 : 104); const ag = 46; let s = '';
  steps.forEach((st, i) => {
    const tx = numbered ? 104 : 56, tw = 870 - tx - 26;
    const hp = para(tx, 0, tw, st.head, { size: 20, weight: 700 });
    const bp = st.body ? block(tx, 0, tw, st.body, { size }) : { h: 0 };
    const h = 26 + hp.h + (st.body ? 6 + bp.h : 0) + 16;
    s += panel(30, y, 840, h, st.fill || C.panel, st.edge || C.panelEdge);
    if (numbered) s += badge(67, y + h / 2, 21, String(st.n ?? i + 1), st.badge || (i === steps.length - 1 ? C.mustard : C.cream));
    s += para(tx, y + 24 + 20 * 0.78, tw, st.head, { size: 20, weight: 700, fill: st.ink || C.ink }).svg;
    if (st.body) s += block(tx, y + 24 + hp.h + 6 + size * 0.78, tw, st.body, { size, fill: C.ink }).svg;
    y += h;
    if (i < steps.length - 1) {
      s += arrow(450, y + 4, 450, y + ag - 6, { w: 3.5 });
      if (arrowLabels[i]) s += t(470, y + ag / 2 + 6, esc(arrowLabels[i]), { size: 16, fill: C.tealDark, weight: 600, italic: true });
      y += ag;
    }
  });
  if (foot) { const f = note(y + 18, foot.head, foot.text); s += f.svg; y += f.h + 18; }
  return svg(900, Math.round(y + 26), esc(title), s, sub && esc(sub));
}
// Two-sided debate: left/right {head, sub, items, fill}, optional verdict note
function versusFig(title, { sub, left, right, foot, size = 17, y0 }) {
  let y = y0 ?? (sub ? 120 : 104); const w = 404, xs = [30, 466]; let s = '';
  const sides = [left, right];
  const hh = Math.max(...sides.map((d) => headH(w, d.head, 21)));
  const hs = sides.map((d) => (d.sub ? para(0, 0, w - 36, d.sub, { size: 16 }).h + 10 : 0) + block(0, 0, w - 36, d.items, { size }).h);
  const ph = hh + Math.max(...hs) + 40;
  sides.forEach((d, i) => {
    const x = xs[i];
    s += headPanel(x, y, w, ph, d.head, { fill: d.fill || (i ? C.cream : C.teal), hh, size: 21 }).svg;
    let yy = y + hh + 22 + 16 * 0.9;
    if (d.sub) { const sp = para(x + 18, yy, w - 36, d.sub, { size: 16, fill: C.muted, italic: true }); s += sp.svg; yy += sp.h + 10; }
    s += block(x + 18, yy, w - 36, d.items, { size, dot: i ? C.olive : C.tealDark }).svg;
  });
  s += `<circle cx="450" cy="${y + ph / 2}" r="24" fill="${C.ink}"/>` + t(450, y + ph / 2 + 7, 'vs', { size: 19, weight: 700, fill: '#ffffff', anchor: 'middle' });
  y += ph;
  if (foot) { const f = note(y + 18, foot.head, foot.text); s += f.svg; y += f.h + 18; }
  return svg(900, Math.round(y + 26), esc(title), s, sub && esc(sub));
}
// Horizontal chain of 2-5 boxes with arrows between; returns {svg,h}
function hchain(y, items, o = {}) {
  const n = items.length, ag = o.ag || 40, w = (840 - ag * (n - 1)) / n, size = o.size || 16;
  const hs = items.map((it) => (it.head ? para(0, 0, w - 24, it.head, { size: 18, weight: 700 }).h + 6 : 0) + (it.body ? para(0, 0, w - 24, it.body, { size }).h : 0));
  const h = Math.max(...hs) + 34; let s = '';
  items.forEach((it, i) => {
    const x = 30 + i * (w + ag);
    s += `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${it.fill || C.panel}" stroke="${it.edge || C.ink}" stroke-width="2.5"/>`;
    let yy = y + (h - hs[i]) / 2 + 18 * 0.85;
    if (it.head) { const hp = para(x + w / 2, yy, w - 24, it.head, { size: 18, weight: 700, anchor: 'middle' }); s += hp.svg; yy += hp.h + 6; }
    if (it.body) s += para(x + w / 2, yy, w - 24, it.body, { size, anchor: 'middle', fill: it.head && (!it.fill || it.fill === C.panel) ? C.muted : C.ink }).svg;
    if (i < n - 1 && o.arrows !== false) s += arrow(x + w + 4, y + h / 2, x + w + ag - 4, y + h / 2, { w: 3.5 });
  });
  return { svg: s, h };
}
const label = (x, y, s, o = {}) => t(x, y, esc(s), o);
// One row of header cards across a given x-range; returns {svg, h}
function cardRow(y, cards, o = {}) {
  const x0 = o.x ?? 30, W = o.w ?? 840, gap = o.gap ?? 16, n = cards.length, cw = (W - gap * (n - 1)) / n, size = o.size || 16, hs = o.headSize || 19;
  const hh = Math.max(...cards.map((c) => headH(cw, c.head, hs)));
  const bodies = cards.map((c) => (c.sub ? para(0, 0, cw - 28, c.sub, { size, weight: 600 }).h + 6 : 0) + block(0, 0, cw - 28, c.body, { size }).h);
  const ch = hh + Math.max(...bodies) + 34; let s = '';
  cards.forEach((c, i) => {
    const x = x0 + i * (cw + gap);
    s += headPanel(x, y, cw, ch, c.head, { fill: c.fill || C.teal, hh, size: hs }).svg;
    let yy = y + hh + 16 + size * 0.95;
    if (c.sub) { const sp = para(x + 14, yy, cw - 28, c.sub, { size, fill: C.tealDark, weight: 600 }); s += sp.svg; yy += sp.h + 6; }
    s += block(x + 14, yy, cw - 28, c.body, { size, dot: c.dot }).svg;
  });
  return { svg: s, h: ch };
}
// ---- end helpers ----

// 01 Defining and measuring poverty
{
  let s = '', y = 104;
  const c = hchain(y, [
    { head: 'Rowntree (1899)', body: 'York survey; a "primary poverty" line from the cost of a minimum diet and essentials', fill: C.cream },
    { head: 'Townsend (1979)', body: 'deprivation index of everyday items and activities; poverty is relative', fill: C.teal },
    { head: 'Mack and Lansley (1985)', body: 'consensual approach: the public decides which items are necessities', fill: C.tealLight },
  ], { ag: 44, size: 16 });
  s += c.svg; y += c.h + 8;
  const cw = (840 - 88) / 3;
  s += t(30 + cw / 2, y + 22, 'absolute', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  s += t(30 + cw + 44 + cw / 2, y + 22, 'relative', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += t(30 + 2 * (cw + 44) + cw / 2, y + 22, 'relative, consensual', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  y += 44;
  const r = cardRow(y, [
    { head: 'Absolute poverty', body: 'Lacking the minimum needed for physical survival and health: food, shelter, warmth.', fill: C.cream },
    { head: 'Relative poverty', body: 'Unable to reach the living standard normal in your own society at a given time.', fill: C.teal },
  ], { size: 16 });
  s += r.svg; y += r.h + 16;
  const n = note(y, 'UK official measure: relative low income', 'Household income below 60% of the median, adjusted for household size. Critics of Townsend said his items were arbitrary and ignored choice.');
  s += n.svg; y += n.h;
  add('01-measuring-poverty', svg(900, y + 26, 'Defining and measuring poverty', s),
    'Three studies in sequence: Rowntree’s absolute poverty line (1899), Townsend’s relative deprivation index (1979) and Mack and Lansley’s consensual approach (1985), with definitions of absolute and relative poverty and the UK’s 60% of median income measure.',
    'Measures of poverty moved from survival needs to what is normal in a society.',
    '## 1. The nature, existence and persistence of poverty');
}

// 02 Why poverty persists
{
  add('02-poverty-persists', versusFig('Why does poverty persist?', {
    left: { head: 'Cultural explanations', items: ['**Lewis:** a "culture of poverty" of marginality, helplessness and dependency, passed to children', '**Murray (1990):** generous welfare created an "underclass" of worklessness, lone parenthood and crime'] },
    right: { head: 'Structural explanations', items: ['**Townsend; social democrats:** low pay, unemployment, inadequate benefits, unequal access to resources', '**Westergaard and Resler (1975):** poverty is built into capitalist class inequality', 'A pool of low-paid and unemployed workers keeps wages down'] },
    foot: { head: 'Evidence against the cultural view', text: ['**Rodman (1963):** the poor "stretch" mainstream values', '**MacDonald and Marsh (2005):** questioned the welfare-dependent underclass', '**Shildrick et al. (2012):** no three-generation workless families found'] },
  }),
    'Cultural explanations from Lewis and Murray blame values and welfare dependency; structural explanations from Townsend and Marxists blame low pay, unemployment and capitalism. Rodman, MacDonald and Marsh, and Shildrick challenge the cultural view.',
    'Is poverty caused by values or by blocked opportunities?',
    '## 1. The nature, existence and persistence of poverty');
}

// 03 Income and wealth
{
  let s = '', y = 110;
  s += panel(30, y, 410, 230) + panel(460, y, 410, 230);
  s += t(235, y + 40, 'Income: a flow', { size: 21, weight: 700, anchor: 'middle' });
  [0, 1, 2].forEach((i) => s += arrow(80, y + 90 + i * 34, 390, y + 90 + i * 34, { color: C.tealDark, marker: 'ahT', w: 5 }));
  s += t(235, y + 195, 'money over time: wages, benefits,', { size: 16, anchor: 'middle', fill: C.muted }) + t(235, y + 216, 'pensions, interest', { size: 16, anchor: 'middle', fill: C.muted });
  s += t(665, y + 40, 'Wealth: a stock', { size: 21, weight: 700, anchor: 'middle' });
  [[0, 0], [1, 0], [2, 0], [0.5, 1], [1.5, 1], [1, 2]].forEach(([c, r]) => s += `<rect x="${590 + c * 52}" y="${y + 150 - r * 34}" width="48" height="30" rx="4" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`);
  s += t(665, y + 216, 'assets at one point: property, shares, savings', { size: 16, anchor: 'middle', fill: C.muted });
  y += 230 + 20;
  s += label(450, y + 14, 'Wealth is far more unequal than income, because it builds up and is inherited.', { size: 17, weight: 600, anchor: 'middle', fill: C.tealDark });
  y += 56;
  s += label(450, y + 4, 'Groups more likely to be in poverty', { size: 20, weight: 700, anchor: 'middle' });
  y += 20;
  const groups = ['Children', 'Lone-parent families (mostly headed by women)', 'Disabled people', 'Low-paid or insecure workers', 'Some minority ethnic groups, notably Pakistani and Bangladeshi heritage'];
  const r = cardRow(y, [
    { head: 'Who', body: groups, fill: C.cream },
    { head: 'Some explanations', body: ['**Gender:** unpaid care, part-time work, lower pensions; **Pahl (1989):** hidden poverty inside households', '**Ethnicity:** discrimination; low-paid sectors', '**Class:** ownership of capital; **Piketty**'], fill: C.teal },
  ], { size: 16 });
  s += r.svg; y += r.h;
  add('03-income-wealth', svg(900, y + 26, 'Income, wealth and who is poor', s),
    'Income is shown as a flow of money over time and wealth as a stock of assets. Wealth is more unequal because it builds up and is inherited. Below, groups more likely to be poor and explanations by gender, ethnicity and class.',
    'Wealth accumulates, so it is far more unequal than income.',
    '## 2. The distribution of poverty, wealth and income');
}

// 04 Four providers of welfare
{
  let s = '', y = 104;
  s += `<circle cx="450" cy="${y + 170}" r="78" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + tl(450, y + 164, ['Welfare', 'pluralism'], { size: 20, weight: 700, anchor: 'middle' }, 25);
  const boxes = [
    [30, y, 'State', 'Beveridge Report (1942): five giants; Universal Credit (2012)', C.teal],
    [570, y, 'Private', 'Private pensions and insurance', C.tealLight],
    [30, y + 230, 'Voluntary', 'Charities such as food banks', C.cream],
    [570, y + 230, 'Informal', 'Care by family and neighbours, much of it by women', C.cream],
  ];
  boxes.forEach(([x, yy, h, b, f]) => {
    const hp = headPanel(x, yy, 300, 110, h, { fill: f, size: 19, hh: 44 });
    s += hp.svg + para(x + 16, yy + 72, 268, b, { size: 16 }).svg;
  });
  s += arrow(336, y + 70, 386, y + 118) + arrow(564, y + 70, 514, y + 118) + arrow(336, y + 270, 386, y + 222) + arrow(564, y + 270, 514, y + 222);
  y += 340 + 20;
  const n = note(y, 'Esping-Andersen (1990): three worlds of welfare capitalism', 'Liberal, conservative and social democratic welfare states; he placed the UK closest to the liberal model.');
  s += n.svg; y += n.h;
  add('04-welfare-providers', svg(900, y + 26, 'Four providers of welfare', s),
    'Welfare pluralism combines four providers: the state (from the Beveridge Report to Universal Credit), the private sector (pensions and insurance), the voluntary sector (charities such as food banks) and informal care by family and neighbours.',
    'Welfare comes from the state, private, voluntary and informal sectors together.',
    '## 3. Responses and solutions to poverty');
}

// 05 Perspectives on welfare
{
  add('05-welfare-perspectives', cardsFig('Four views of the welfare state', {
    ncol: 2, size: 16,
    cards: [
      { head: 'Social democratic', body: 'Redistribution through progressive taxation and generous, preferably universal, benefits.', fill: C.teal },
      { head: 'New Right', body: 'Welfare creates dependency (Murray): a smaller state, more private and voluntary provision, stronger work requirements.', fill: C.cream },
      { head: 'Marxist', body: 'Welfare keeps capitalism stable with a healthy workforce and less protest, without removing the inequality behind poverty.', fill: C.tealLight },
      { head: 'Feminist', body: 'Welfare has often assumed a male breadwinner and relied on women’s unpaid care.', fill: C.tealLight },
    ],
    foot: { head: 'Hills (2014)', text: 'Challenged the "them and us" view: most people both pay into and draw from the welfare state over their lifetimes.' },
  }),
    'Social democrats favour redistribution and universal benefits; the New Right sees welfare creating dependency; Marxists see it stabilising capitalism; feminists see it relying on women’s unpaid care.',
    'Each perspective sees a different purpose and problem in welfare.',
    '## 3. Responses and solutions to poverty');
}

// 06 Technology and skill
{
  add('06-deskilling-debate', versusFig('Does technology deskill work?', {
    left: { head: 'Deskilling', sub: 'Braverman (1974)', items: ['Managers use Taylorism and machinery to take knowledge from workers', 'Work becomes cheaper and easier to control', 'Builds on Marx: capitalist work is alienating'] },
    right: { head: 'Upskilling', sub: 'Blauner (1964)', items: ['Alienation depends on technology', 'As technology develops, tasks become more complex and need more skill', 'Workers gain more discretion'] },
    foot: { head: 'Evidence', text: 'Gallie (1991): little widespread deskilling in the 1980s, but a marked polarisation of skills. Critics say Braverman ignored worker resistance.' },
  }),
    'Braverman argues managers use Taylorism and machinery to deskill and control workers; Blauner argues advancing technology makes work more skilled with more discretion. Gallie’s survey found polarisation rather than widespread deskilling.',
    'The effect of technology depends on how it is used and the type of work.',
    '## 4. Organisation and control of the labour process');
}

// 07 Atkinson's flexible firm
{
  let s = '';
  const cx = 300, cy = 330;
  s += `<circle cx="${cx}" cy="${cy}" r="200" fill="${C.cream}" stroke="${C.ink}" stroke-width="3" stroke-dasharray="10 7"/>`;
  s += `<circle cx="${cx}" cy="${cy}" r="100" fill="${C.teal}" stroke="${C.ink}" stroke-width="3"/>`;
  s += tl(cx, cy - 4, ['Core', 'skilled, secure'], { size: 19, weight: 700, anchor: 'middle' }, 26);
  s += tl(cx, cy - 150, ['Periphery', 'temporary or part-time'], { size: 18, weight: 700, anchor: 'middle' }, 24);
  const x0 = 540, w = 330;
  const b1 = headPanel(x0, 160, w, 150, 'Post-Fordism', { fill: C.tealLight, size: 19 });
  s += b1.svg + para(x0 + 16, 160 + b1.hh + 30, w - 32, '**Piore and Sabel (1984):** "flexible specialisation", with skilled workers using adaptable technology.', { size: 16 }).svg;
  const b2 = headPanel(x0, 330, w, 130, 'Critics', { fill: C.cream, size: 19 });
  s += b2.svg + para(x0 + 16, 330 + b2.hh + 30, w - 32, 'Flexibility for employers often means insecurity for workers.', { size: 16 }).svg;
  add('07-flexible-firm', svg(900, 560, 'Atkinson’s flexible firm', s),
    'Two rings: a skilled, secure core of staff surrounded by a peripheral group on temporary or part-time terms. Side panels show Piore and Sabel’s flexible specialisation and the criticism that flexibility means insecurity.',
    'The flexible firm keeps a secure core and an insecure periphery.',
    '## 4. Organisation and control of the labour process');
}

// 08 Jahoda's latent functions
{
  let s = '';
  const cx = 450, cy = 330;
  s += `<circle cx="${cx}" cy="${cy}" r="82" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + tl(cx, cy - 4, ['Paid', 'employment'], { size: 20, weight: 700, anchor: 'middle' }, 25);
  const fns = [['Time structure', -90], ['Social contact', -18], ['Shared purpose', 54], ['Status and identity', 126], ['Regular activity', 198]];
  fns.forEach(([f, a]) => {
    const r = (a * Math.PI) / 180, bx = cx + 230 * Math.cos(r), by = cy + 190 * Math.sin(r);
    s += `<line x1="${cx + 88 * Math.cos(r)}" y1="${cy + 88 * Math.sin(r)}" x2="${bx - 70 * Math.cos(r)}" y2="${by - 30 * Math.sin(r)}" stroke="${C.ink}" stroke-width="3"/>`;
    s += `<rect x="${bx - 110}" y="${by - 28}" width="220" height="56" rx="28" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + t(bx, by + 6, f, { size: 18, weight: 700, anchor: 'middle' });
  });
  let y = cy + 240;
  const n = note(y, 'Losing these explains much of the harm of unemployment', 'Based on the Marienthal study (early 1930s). Critics: caring, volunteering and education can also provide structure and identity; Bauman argues identity now comes more from consumption.');
  s += n.svg; y += n.h;
  add('08-jahoda-latent-functions', svg(900, y + 26, 'Jahoda (1982): what a job gives besides a wage', s),
    'Paid employment at the centre with five latent functions around it: time structure, social contact, shared purpose, status and identity, and regular activity.',
    'Unemployment harms people by removing the hidden benefits of work as well as the wage.',
    '## 5. The significance of work and worklessness, including globalisation');
}
