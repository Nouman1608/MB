import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-sociology-8192-social-stratification';
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
    const bodies = row.map((c) => (c.sub ? para(0, 0, cw - 32, c.sub, { size: size, italic: true }).h + 8 : 0) + block(0, 0, cw - 32, c.body, { size }).h);
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
const vcenter = (x, yTop, h, w, s, o = {}) => { const size = o.size || 17; const p = para(0, 0, w, s, o); return para(x, yTop + (h - p.h) / 2 + size * 0.95, w, s, o).svg; };

// 01 Davis and Moore: the logic of unequal rewards
{
  let s = label(450, 128, 'Every society needs roles to be…', { size: 20, weight: 700, anchor: 'middle' });
  const needs = ['filled', 'filled by those best able', 'trained for', 'performed conscientiously'];
  needs.forEach((n, i) => { const x = 30 + i * 214; s += box(x, 146, 198, 64, { fill: C.tealLight, sw: 2 }) + vcenter(x + 99, 146, 64, 180, n, { size: 17, weight: 700, anchor: 'middle' }); });
  s += path('M129,214 L129,228 L771,228 L771,214', { w: 2.5 }) + arrow(157, 228, 157, 254);
  const ch = hchain(260, [
    { head: 'Unequal rewards', body: 'High pay and prestige for the most functionally important roles', fill: C.mustard },
    { head: 'Competition', body: 'Ambitious people compete for these roles', fill: C.cream },
    { head: 'The most talented win', body: 'Effective role allocation and performance', fill: C.teal },
  ], { size: 16, ag: 40 });
  s += ch.svg;
  const y = 260 + ch.h + 22;
  const r = cardRow(y, [
    { head: 'Evaluation', fill: C.panel, body: ['Lower-paid jobs such as nursing can be just as important', 'Pay may reflect power, not importance', 'No agreed way to measure talent', 'Tumin (1953): unequal access to education stops many able people competing'] },
    { head: 'Other views', fill: C.panel, body: ['**Marxist:** rewards reflect ownership and inheritance, so the competition is not fair', '**Feminist:** ignores unpaid work at home and caring; women are held in lower-paid jobs by the glass ceiling'] },
  ], { size: 16, headSize: 19 });
  s += r.svg;
  add('01-davis-moore-role-allocation',
    svg(900, y + r.h + 24, 'Davis and Moore: why stratification?', s),
    'Four needs (roles must be filled, by the most able, with training, and performed conscientiously) lead to unequal rewards for functionally important roles, which make people compete so the most talented win. Below, criticisms including Tumin, and Marxist and feminist views.',
    'Davis and Moore see unequal rewards as the way society gets the right people into key roles.',
    '## 3.6.1 Functionalist theory of stratification');
}

// 02 Marx and Weber on class
{
  add('02-marx-weber-class',
    compareFig('Marx and Weber on class', {
      cols: [{ head: 'Marx', fill: C.teal }, { head: 'Weber', fill: C.cream }],
      rows: [
        { label: 'What makes a class?', cells: ['Relationship to the **means of production**', 'A shared **market situation**, giving similar life chances'] },
        { label: 'Main division', cells: ['**Bourgeoisie** (owners) vs **proletariat** (own only their labour)', 'Owners vs non-owners too, but professionals earn more for skills in demand'] },
        { label: 'Future', cells: ['**Polarisation**, then revolution and communism', 'No polarisation: the middle class expands; revolution not inevitable'] },
        { label: 'Why workers accept it', cells: ['**Ruling class ideology** creates false class consciousness', 'Not his focus: stresses other sources of inequality'] },
        { label: 'Other dimensions', cells: ['Political power comes from economic power', '**Status** (prestige) and **party** (groups seeking power) are separate from class'] },
      ],
      size: 17, labelW: 170,
    }),
    'A comparison table. Marx defines class by relationship to the means of production, splits society into bourgeoisie and proletariat, predicts polarisation and revolution, and explains acceptance through ruling class ideology. Weber defines class by market situation, sees professionals earning more, rejects polarisation and inevitable revolution, and adds status and party.',
    'Marx sees two classes heading for conflict; Weber sees a more complex, layered picture.',
    '## 3.6.2 Socio-economic class');
}

// 03 Life chances wheel
{
  const cx = 450, cy = 418, R = 250;
  let s = '';
  const f = [
    ['Class', 'income shapes diet, housing, schooling and health'],
    ['Gender', 'more part-time work and unpaid caring for women'],
    ['Race and ethnicity', 'discrimination and institutional racism'],
    ['Sexuality', 'prejudice affects safety at work and school'],
    ['Age', 'ageism affects young and older workers'],
    ['Disability', 'physical barriers and employer attitudes'],
    ['Religion and belief', 'discrimination in hiring'],
  ];
  const pos = f.map((_, i) => { const a = -Math.PI / 2 + (i * 2 * Math.PI) / f.length; return [a, cx + R * 1.25 * Math.cos(a), cy + R * 0.98 * Math.sin(a)]; });
  pos.forEach(([, x, y]) => { s += `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="${C.tealDark}" stroke-width="3"/>`; });
  s += `<circle cx="${cx}" cy="${cy}" r="92" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + label(cx, cy - 4, 'LIFE', { size: 24, weight: 700, anchor: 'middle' }) + label(cx, cy + 24, 'CHANCES', { size: 24, weight: 700, anchor: 'middle' });
  f.forEach(([head, body], i) => {
    const [, x, y] = pos[i], w = 220, bp = para(0, 0, w - 24, body, { size: 16 }), h = 30 + 22 + bp.h + 4;
    s += box(x - w / 2, y - h / 2, w, h, { fill: i % 2 ? C.tealLight : C.panel, edge: C.ink, sw: 2.5 });
    s += label(x, y - h / 2 + 30, head, { size: 18, weight: 700, anchor: 'middle' });
    s += para(x, y - h / 2 + 54, w - 24, body, { size: 16, anchor: 'middle' }).svg;
  });
  add('03-life-chances',
    svg(900, 712, 'What shapes life chances?', s, 'Chances of good health, a long life, education, a good job and housing'),
    'Seven factors surround life chances: class, gender, race and ethnicity, sexuality, age, disability, and religion and belief, each with an example of how it affects a person’s chances of good health, education, a good job and housing.',
    'Seven factors in the specification shape a person’s chances of a good life.',
    '## 3.6.3 Life chances');
}

// 04 Devine: prediction vs findings
{
  const L = { head: 'Predicted (Goldthorpe and Lockwood, 1960s)', items: ['**Privatised instrumentalism:** life centred on the home; work only a means to an end', 'Affluent workers becoming middle class (**embourgeoisement**)', 'A “new working class”'] };
  const R = { head: 'Found (Devine, Luton, late 1980s)', items: ['No strong support: less communal than before, but not as home-centred as predicted', 'Did not accept capitalism uncritically; no embourgeoisement', 'Higher living standards, yet resented inherited wealth and extreme inequality', 'Kept working-class values; lost faith in Labour'] };
  let s = '';
  const hh = 70, w = 404;
  const hs = [L, R].map((d) => bullets(0, 0, w - 36, d.items, { size: 17 }).h);
  const ph = hh + Math.max(...hs) + 44;
  [L, R].forEach((d, i) => {
    const x = i ? 466 : 30;
    s += headPanel(x, 108, w, ph, d.head, { fill: i ? C.teal : C.cream, hh, size: 19 }).svg;
    s += bullets(x + 18, 108 + hh + 30, w - 36, d.items, { size: 17, dot: i ? C.tealDark : C.olive }).svg;
  });
  s += `<circle cx="450" cy="${108 + ph / 2}" r="22" fill="${C.ink}"/>` + path(`M440,${108 + ph / 2} h18 m-7,-7 l7,7 l-7,7`, { stroke: '#ffffff', w: 3 });
  const n = note(108 + ph + 18, 'Evaluation', 'Interviews with male manual workers at the Vauxhall plant and their wives gave rich detail, but one workplace in one town limits generalisation.');
  add('04-devine-affluent-worker',
    svg(900, Math.round(108 + ph + 18 + n.h + 24), 'Devine: the affluent worker revisited', s + n.svg),
    'Left: what was predicted in the 1960s, privatised instrumentalism and affluent workers becoming middle class. Right: what Devine found in Luton in the late 1980s: lifestyles not as home-centred as predicted, no embourgeoisement, resentment of inherited wealth, and lost faith in the Labour Party.',
    'Devine found affluent workers kept a working-class sense of injustice: no embourgeoisement.',
    '## 3.6.3 Life chances');
}

// 05 Townsend's three measures of poverty
{
  let s = '';
  const rows = [
    ['State standard', 'Based on entitlement to benefits; arbitrary, set by the government of the day', 6, 'just over 6%', C.tealLight],
    ['Relative income', 'Households below the average for similar households; also arbitrary', 9, 'a little over 9%', C.teal],
    ['Relative deprivation', 'Townsend’s preferred measure: lacking the diet, activities and living conditions widely available in society', 22, 'more than 22%', C.mustard],
  ];
  let y = 120;
  s += label(500, 102, 'Population in poverty, 1968–69', { size: 17, weight: 700, fill: C.muted });
  rows.forEach(([h, d, v, txt, f]) => {
    const p = para(0, 0, 420, d, { size: 16 }), rh = Math.max(96, 36 + p.h + 16);
    s += box(30, y, 440, rh, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + label(48, y + 30, h, { size: 19, weight: 700 }) + para(48, y + 54, 410, d, { size: 16 }).svg;
    s += `<rect x="500" y="${y + rh / 2 - 22}" width="${v * 10}" height="44" rx="6" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + label(500 + v * 10 + 10, y + rh / 2 + 7, txt, { size: 18, weight: 700 });
    y += rh + 12;
  });
  s += `<line x1="500" y1="112" x2="500" y2="${y - 4}" stroke="${C.ink}" stroke-width="2.5"/>`;
  const n = note(y + 8, 'Method and criticism', ['Questionnaires to over 2,000 households and more than 6,000 individuals; a deprivation index of diet, fuel, clothing, housing, work, health, education and social activities', 'The index may measure choice: not eating fresh meat may mean being vegetarian, not poor']);
  add('05-townsend-three-measures',
    svg(900, Math.round(y + 8 + n.h + 24), 'Townsend: three ways to measure poverty', s + n.svg),
    'Three measures of poverty for 1968–69. The state standard, based on benefit entitlement, gave just over 6%. Relative income gave a little over 9%. Townsend’s preferred relative deprivation measure gave more than 22%. Below, his questionnaire method and the criticism that his index may measure choice.',
    'Townsend’s relative deprivation measure found far more poverty than the official ones.',
    '## 3.6.4 Poverty as a social issue');
}

// 06 Explaining poverty: culture vs material
{
  add('06-poverty-explanations',
    versusFig('Why are people poor?', {
      left: { head: 'Cultural explanations', sub: 'The poor’s own values keep them poor', items: ['**Culture of poverty** (Lewis): values such as fatalism are passed on: a cycle of deprivation', '**Murray’s underclass** (New Right): generous welfare creates a culture of dependency', 'Murray pointed to rising illegitimacy, rising crime and some young people’s unwillingness to work'] },
      right: { head: 'Material explanations', sub: 'Lack of money and resources keeps them poor', items: ['**Material deprivation:** low wages, unemployment, poor housing', '**Globalisation:** manufacturing jobs moved to lower-wage countries', '**Poverty trap:** earning more means losing benefits', 'Many labelled “underclass” hold conventional attitudes and want work'] },
      foot: { head: 'Perspectives', text: ['**Functionalist** (Gans): poverty has functions for the better-off, e.g. filling low-paid jobs', '**Marxist:** capitalism needs a pool of cheap labour', '**Feminist:** lower pay, caring and lone parenthood raise women’s risk'] },
    }),
    'Two sides. Cultural explanations: the culture of poverty and Murray’s New Right idea of an underclass created by welfare dependency. Material explanations: low wages, unemployment, poor housing, globalisation and the poverty trap. Below, functionalist, Marxist and feminist views of poverty.',
    'Is poverty caused by the values of the poor, or by lack of money and jobs?',
    '## 3.6.4 Poverty as a social issue');
}

// 07 Weber's three types of authority
{
  const crown = (x, y) => path(`M${x - 34},${y + 18} L${x - 34},${y - 14} L${x - 17},${y + 2} L${x},${y - 22} L${x + 17},${y + 2} L${x + 34},${y - 14} L${x + 34},${y + 18} Z`, { fill: C.mustard, w: 3 });
  const star = (x, y) => { let d = ''; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + (i * Math.PI) / 5, r = i % 2 ? 14 : 32; d += `${i ? 'L' : 'M'}${x + r * Math.cos(a)},${y + r * Math.sin(a)} `; } return path(d + 'Z', { fill: C.mustard, w: 3 }); };
  const book = (x, y) => `<rect x="${x - 30}" y="${y - 24}" width="60" height="46" rx="4" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + [-12, -2, 8].map((d) => `<line x1="${x - 18}" y1="${y + d}" x2="${x + 18}" y2="${y + d}" stroke="${C.ink}" stroke-width="2.5"/>`).join('');
  const cards = [
    ['Traditional', 'Established customs and inherited status', 'a monarchy', crown],
    ['Charismatic', 'Devotion to a leader with exceptional qualities', 'a religious or revolutionary leader', star],
    ['Rational-legal', 'Acceptance of shared impersonal rules', 'a bureaucracy, the police, an elected government', book],
  ];
  let s = box(30, 108, 840, 64, { fill: C.ink, edge: C.ink }) + label(450, 148, 'Authority = power that people accept as legitimate', { size: 21, weight: 700, anchor: 'middle', fill: '#ffffff' });
  const y = 196, cw = 268;
  cards.forEach(([h, b, eg, ic], i) => {
    const x = 30 + i * (cw + 18);
    s += box(x, y, cw, 300, { fill: C.panel, edge: C.panelEdge });
    s += `<circle cx="${x + cw / 2}" cy="${y + 58}" r="42" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>` + ic(x + cw / 2, y + 60);
    s += label(x + cw / 2, y + 136, h, { size: 22, weight: 700, anchor: 'middle' });
    s += para(x + cw / 2, y + 166, cw - 30, b, { size: 17, anchor: 'middle' }).svg;
    s += label(x + cw / 2, y + 236, 'e.g.', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark }) + para(x + cw / 2, y + 258, cw - 30, eg, { size: 16, anchor: 'middle', fill: C.tealDark, italic: true }).svg;
  });
  const r = cardRow(y + 320, [
    { head: 'Formal sources of power', fill: C.teal, body: 'Official positions and laws, such as a Member of Parliament' },
    { head: 'Informal sources of power', fill: C.cream, body: 'Personal influence, peer pressure or money' },
  ], { size: 17, headSize: 19 });
  const n = note(y + 320 + r.h + 16, null, 'Real leaders often mix the types: a prime minister holds rational-legal authority but may also rely on charisma.');
  add('07-weber-authority',
    svg(900, Math.round(y + 320 + r.h + 16 + n.h + 24), 'Weber: three types of authority', s + r.svg + n.svg),
    'Three cards. Traditional authority rests on custom and inherited status, as in a monarchy. Charismatic authority rests on devotion to an exceptional leader. Rational-legal authority rests on shared impersonal rules, as in a bureaucracy or elected government. Below, formal and informal sources of power.',
    'Authority is accepted power, based on tradition, charisma or rules.',
    '## 3.6.5 Power and authority');
}

// 08 Walby: six structures, private to public patriarchy
{
  const items = [
    ['Paid work', 'Women disadvantaged in the labour market despite equality laws'],
    ['Relations of production', 'Men benefit from women’s unpaid labour in the home'],
    ['Culture', 'Different expectations for men’s and women’s behaviour'],
    ['Sexuality', 'Double standards: men admired, women condemned'],
    ['Male violence', 'Its use or threat discourages women from challenging men'],
    ['The state', 'Less patriarchal than before, but does little to protect women'],
  ];
  let s = '';
  const cw = 412, chh = 96;
  items.forEach(([h, b], i) => {
    const x = 30 + (i % 2) * (cw + 16), y = 108 + Math.floor(i / 2) * (chh + 12);
    s += box(x, y, cw, chh, { fill: C.panel, edge: C.panelEdge }) + badge(x + 34, y + chh / 2, 20, String(i + 1), C.cream);
    s += label(x + 70, y + 34, h, { size: 19, weight: 700 }) + para(x + 70, y + 60, cw - 86, b, { size: 16 }).svg;
  });
  const y = 108 + 3 * (chh + 12) + 14;
  s += label(450, y + 10, 'Walby: the form of patriarchy has changed', { size: 20, weight: 700, anchor: 'middle' });
  s += box(30, y + 30, 360, 110, { fill: C.cream, edge: C.olive }) + label(210, y + 66, 'Private patriarchy', { size: 20, weight: 700, anchor: 'middle' }) + para(210, y + 94, 320, 'Direct control by fathers or husbands', { size: 17, anchor: 'middle' }).svg;
  s += arrow(400, y + 85, 500, y + 85, { w: 5 });
  s += box(510, y + 30, 360, 110, { fill: C.teal }) + label(690, y + 66, 'Public patriarchy', { size: 20, weight: 700, anchor: 'middle' }) + para(690, y + 94, 320, 'Women in public life but segregated into low-paid, low-status jobs', { size: 17, anchor: 'middle' }).svg;
  add('08-walby-patriarchy',
    svg(900, y + 164, 'Walby: six structures of patriarchy', s),
    'Six numbered cards show Walby’s patriarchal structures: paid work, patriarchal relations of production, culture, sexuality, male violence and the state. Below, an arrow shows the shift from private patriarchy, direct control by fathers or husbands, to public patriarchy, where women are in public life but in low-paid, low-status jobs.',
    'Patriarchy works through six structures and has shifted from private to public.',
    '## 3.6.6 Power relationships');
}
