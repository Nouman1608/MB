import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-sociology-8192-poverty-as-a-social-issue';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- Local layout helpers (sociology figures: wrapped text, tables, flows, cards) ----
const esc = (s) => String(s).replace(/&(?![a-z]+;|#\d+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const CW = 0.495, CWB = 0.55; // average glyph width / font size for Inter (regular, bold)
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

const box = (x, y, w, h, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.r ?? 12}" fill="${o.fill || C.panel}" stroke="${o.edge || C.ink}" stroke-width="${o.sw || 2.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
const pill = (x, y, w, h, s, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${o.fill || C.tealLight}" stroke="${o.edge || C.ink}" stroke-width="2"/>` + label(x + w / 2, y + h / 2 + (o.size || 17) * 0.36, s, { size: o.size || 17, weight: o.weight ?? 700, anchor: 'middle', fill: o.ink || C.ink });
const vcenter = (x, yTop, h, w, s, o = {}) => { const size = o.size || 17; const p = para(0, 0, w, s, o); return para(x, yTop + (h - p.h) / 2 + size * 0.95, w, s, o).svg; };

// 01 Four definitions
{
  const f = cardsFig('Four ways to define poverty', {
    cards: [
      { head: 'Absolute', fill: C.teal, sub: 'Lacking basic necessities for survival: food, water, shelter, clothing', body: ['**+** Easy to compare across time and place', '**–** Ignores what is normal in a society'] },
      { head: 'Relative', fill: C.tealLight, sub: 'Falling well below the usual standard of living in your society', body: ['Changes as society becomes richer', 'Can never be fully abolished on this definition'] },
      { head: 'Subjective', fill: C.cream, sub: 'Whether people see themselves as poor', body: ['**+** Captures experience', '**–** People judge by different standards'] },
      { head: 'Environmental', fill: C.tealLight, sub: 'Living in a poor local environment: poor housing, few amenities, unsafe streets', body: ['Shows poverty is about place as well as income'] },
    ],
    ncol: 2, size: 16, headSize: 21,
  });
  add('01-four-definitions', f,
    'Four cards. Absolute poverty is lacking basic necessities for survival. Relative poverty is falling well below the usual standard of living in a society. Subjective poverty is whether people see themselves as poor. Environmental poverty is living in a poor local environment.',
    'How poverty is defined decides how much of it is found.',
    '## Defining poverty');
}

// 02 Townsend
{
  let s = label(450, 92, 'Poverty in the United Kingdom (1979): population in poverty, 1968–69', { size: 18, anchor: 'middle', fill: C.muted });
  const rows = [
    ['State standard', 'Based on entitlement to benefits; arbitrarily set by the government of the day', 6, 'just over 6%', C.tealLight],
    ['Relative income', 'Below the average for similar households; arbitrary, ignores welfare levels and lifestyles', 9, 'a little over 9%', C.tealLight],
    ['Relative deprivation', 'Townsend’s preferred measure: lacking the diet, activities and living conditions widely available', 22, 'more than 22%', C.mustard],
  ];
  let y = 116;
  const bx = 470, unit = 11;
  rows.forEach(([h, b, v, lab, f]) => {
    s += box(30, y, 410, 104, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + label(48, y + 30, h, { size: 19, weight: 700 }) + para(48, y + 56, 380, b, { size: 15.5, fill: C.muted }).svg;
    s += `<rect x="${bx}" y="${y + 30}" width="${v * unit}" height="44" rx="6" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + label(bx + v * unit + 12, y + 60, lab, { size: 19, weight: 700 });
    y += 116;
  });
  s += `<line x1="${bx}" y1="110" x2="${bx}" y2="${y - 6}" stroke="${C.ink}" stroke-width="2.5"/>`;
  const r = cardRow(y + 6, [
    { head: 'Method', fill: C.teal, body: ['Questionnaires: over 2,000 households, more than 6,000 individuals', 'Deprivation index: diet, fuel, clothing, housing, working conditions, health, education, social activities', 'An income threshold below which deprivation rapidly increased'] },
    { head: 'Criticism', fill: C.cream, body: ['The index may mislead: no fresh meat or cooked meals might reflect choice, not poverty', 'Figures refer to 1968–69, not today'] },
  ], { size: 16, headSize: 19 });
  s += r.svg;
  add('02-townsend',
    svg(900, Math.round(y + 6 + r.h + 24), 'Townsend: the measure decides the amount', s),
    'Three measures for 1968–69: the state standard found just over 6% in poverty, the relative income standard a little over 9%, and Townsend’s relative deprivation measure more than 22%. Below, his questionnaire method and deprivation index, and the criticism that missing items may reflect choice.',
    'The same society showed 6%, 9% or 22% in poverty depending on the measure.',
    '## Defining poverty');
}

// 03 Culture of poverty: cycle of deprivation
{
  let s = '';
  const pos = [[450, 175], [740, 330], [450, 485], [160, 330]];
  const nodes = [
    ['Living in poverty', 'values form in response to the situation', C.mustard],
    ['Distinct values develop', 'fatalism, living for the present, not belonging', C.cream],
    ['Passed to children', 'through socialisation', C.tealLight],
    ['Next generation', 'stays in poverty', C.teal],
  ];
  s += arrow(580, 200, 700, 270, { w: 3.5 }) + arrow(700, 392, 580, 460, { w: 3.5 }) + arrow(320, 460, 200, 392, { w: 3.5 }) + arrow(200, 270, 320, 200, { w: 3.5 });
  nodes.forEach(([h, b, f], i) => { const [x, y] = pos[i]; s += box(x - 135, y - 50, 270, 100, { fill: f, sw: 2.5 }) + label(x, y - 14, h, { size: 19, weight: 700, anchor: 'middle' }) + para(x, y + 14, 240, b, { size: 15.5, anchor: 'middle' }).svg; });
  s += label(450, 322, 'cycle of', { size: 18, anchor: 'middle', fill: C.muted }) + label(450, 348, 'deprivation', { size: 22, weight: 700, anchor: 'middle' });
  const n = note(560, 'The culture of poverty (Oscar Lewis)', 'Poor people develop a distinct set of values in response to their situation, so poverty continues across generations. The explanation blames values, not lack of money.');
  add('03-cycle-of-deprivation',
    svg(900, Math.round(560 + n.h + 24), 'The culture of poverty', s + n.svg),
    'A cycle: adults living in poverty develop distinct values such as fatalism and living for the present; these are passed to children through socialisation; the next generation stays in poverty, and the cycle repeats.',
    'On this view, values passed between generations keep families poor.',
    '## Interpretation 1: the culture of poverty');
}

// 04 Murray's underclass
{
  const f = flowFig('Murray: the underclass and the New Right', {
    sub: 'Losing Ground (1984); visited Britain at the end of the 1980s',
    steps: [
      { head: 'Higher benefits', body: 'Government policies encourage dependence on benefits' },
      { head: 'Self-sufficiency discouraged', body: 'More single parents and young people lose interest in jobs' },
      { head: 'A growing underclass', body: 'An alternative value system that tolerates crime and anti-social behaviour replaces honesty, family life and hard work' },
      { head: 'Seen as a burden', body: 'On taxpayers, and responsible for rising crime; in Britain he pointed to rising illegitimacy, crime and some young people’s unwillingness to seek work', fill: C.cream, edge: C.olive },
    ],
    size: 16,
    foot: { head: 'Evaluation', text: ['Ignores economic reasons for the underclass', 'Research suggests benefits do not have the effect he claims', 'Many labelled “underclass” hold conventional attitudes and want stable relationships and paid work', 'Viewed sympathetically: victims of inequality, not its cause'] },
  });
  add('04-murray-underclass', f,
    'Four steps: higher benefits encourage dependence; self-sufficiency is discouraged and single parents and young people lose interest in jobs; an underclass with an alternative value system grows; it is seen as a burden on taxpayers and a cause of crime. Below, criticisms of Murray’s evidence and his neglect of economic causes.',
    'Murray blames welfare for creating an underclass; critics blame missing economic causes.',
    '## Interpretation 1: the culture of poverty');
}

// 05 Material deprivation vs culture
{
  const f = versusFig('Two competing explanations', {
    left: { head: 'Culture of poverty', fill: C.cream, sub: 'Blames values passed between generations', items: ['Fatalism, living for the present', 'Murray: welfare dependency', 'New Right: lower benefits, stricter conditions, self-reliance', 'Key terms: **culture of dependency**, **welfare scrounger**'] },
    right: { head: 'Material deprivation', fill: C.teal, sub: 'Blames lack of money and resources', items: ['**Low pay** and insecure work (zero-hours contracts)', '**Unemployment** and under-employment', 'Benefits set too low; **high housing costs**', 'Extra costs of disability; lost earnings of caring', 'Any “culture” is a sensible response: give decent jobs and incomes, and values change'] },
    foot: { head: 'Evidence for material deprivation', text: 'Townsend: poverty is exclusion from normal life, caused by lack of resources rather than values.' },
  });
  add('05-culture-vs-material', f,
    'Two panels. The culture of poverty blames values such as fatalism and, for Murray and the New Right, welfare dependency. Material deprivation blames low pay, unemployment, low benefits, high housing costs and the costs of disability or caring, and sees any culture as a response to lack of opportunity.',
    'Is poverty caused by the values of the poor, or by a lack of money and jobs?',
    '## Interpretation 2: material deprivation');
}

// 06 Government action
{
  let s = '';
  const y = 170;
  s += arrow(40, y, 868, y, { w: 4 });
  const ev = [[110, '1942', 'Beveridge Report: five giants (Want, Disease, Ignorance, Squalor, Idleness)'], [300, '1948', 'NHS; post-war welfare state'], [520, '1999', 'National minimum wage'], [740, '2013', 'Universal Credit begins']];
  ev.forEach(([x, d, txt], i) => {
    s += `<circle cx="${x}" cy="${y}" r="10" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + label(x, y - 24, d, { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
    s += para(x, y + 38, 190, txt, { size: 16, anchor: 'middle' }).svg;
  });
  const yy = 336;
  const L = headPanel(30, yy, 404, 230, 'Universal benefits', { fill: C.teal, size: 20 });
  const R = headPanel(466, yy, 404, 230, 'Selective benefits', { fill: C.cream, size: 20 });
  s += L.svg + R.svg;
  s += bullets(50, yy + 84, 364, ['Go to everyone in a group, whatever their income', '**+** Avoid stigma', '**–** Cost more'], { size: 16 }).svg;
  s += bullets(486, yy + 84, 364, ['**Means tested**: targeted at low incomes', '**+** Cost less', '**–** Can create a **poverty trap**: earning more means losing benefits'], { size: 16 }).svg;
  const n = note(yy + 248, 'Evaluation', ['Supporters: these measures stopped absolute poverty for most people', 'Material deprivation critics: low benefits and wages still leave many in relative poverty', 'New Right critics: welfare creates dependency; they support conditions such as looking for work']);
  add('06-government-action',
    svg(900, Math.round(yy + 248 + n.h + 24), 'How governments have tackled poverty', s + n.svg),
    'A timeline: the 1942 Beveridge Report named five giants, the welfare state and NHS followed in 1948, the national minimum wage came in 1999 and Universal Credit from 2013. Below, universal benefits avoid stigma while means-tested selective benefits cost less but can create a poverty trap, followed by three evaluations.',
    'Policies have reduced poverty, but each side of the debate criticises them differently.',
    '## How governments have tried to alleviate poverty and unemployment');
}

// 07 Globalisation: culture or closed factory?
{
  let s = '';
  s += box(250, 112, 400, 84, { fill: C.panel, sw: 2.5 }) + para(450, 146, 370, 'A town where several generations of a family have not worked', { size: 18, weight: 700, anchor: 'middle' }).svg;
  s += arrow(370, 200, 230, 248, { w: 3.5 }) + arrow(530, 200, 670, 248, { w: 3.5 });
  const r = cardRow(254, [
    { head: 'Murray’s reading', fill: C.cream, body: 'Generous benefits created an underclass with values that reject work' },
    { head: 'Structural reading', fill: C.teal, body: 'The main employer closed when production moved abroad: material deprivation linked to globalisation' },
  ], { size: 17, headSize: 20, gap: 40 });
  s += r.svg;
  const y = 254 + r.h + 30;
  s += label(450, y, 'Globalisation: the growing interconnection of economies and cultures', { size: 18, weight: 700, anchor: 'middle' });
  const r2 = cardRow(y + 18, [
    { head: 'Negative impacts', fill: C.tealLight, body: ['Manufacturing jobs moved to lower-wage countries: unemployment in former industrial areas', 'Competition can keep wages down', 'Less secure work'] },
    { head: 'Positive impacts', fill: C.tealLight, body: ['Cheaper goods lower the cost of living', 'New jobs in services and technology', 'More trade and investment'] },
  ], { size: 16, headSize: 19 });
  s += r2.svg;
  const n = note(y + 18 + r2.h + 18, null, 'People in former industrial towns did not lose their work ethic; their jobs left.');
  add('07-globalisation',
    svg(900, Math.round(y + 18 + r2.h + 18 + n.h + 24), 'Globalisation and poverty', s + n.svg),
    'One town where generations have not worked is read two ways: Murray blames benefits and values; a structural reading blames the closure of the main employer when production moved abroad. Below, negative and positive impacts of globalisation.',
    'Globalisation supports a structural explanation: the jobs left, not the work ethic.',
    '## The impact of globalisation');
}
