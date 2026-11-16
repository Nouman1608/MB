import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'a-level-aqa-sociology-role-of-education-and-differential-achievement';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- Local layout helpers (sociology figures: wrapped text, tables, flows, cards) ----
const esc = (s) => String(s).replace(/&(?![a-z]+;|#\d+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const CW = 0.51, CWB = 0.56; // average glyph width / font size for Inter (regular, bold)
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

// 01 Four strands of 3.1.1 Education
{
  let s = '', y = 150;
  const strands = [
    ['1', 'Role and functions of education', 'including its relationship to the economy and class structure', true],
    ['2', 'Differential achievement', 'by class, gender and ethnicity', true],
    ['3', 'Relationships and processes within schools', '', false],
    ['4', 'Significance of educational policies', '', false],
  ];
  const cw = (840 - 3 * 14) / 4, ch = 268;
  strands.forEach(([n, h, b, on], i) => {
    const x = 30 + i * (cw + 14);
    s += `<rect x="${x}" y="${y}" width="${cw}" height="${ch}" rx="14" fill="${on ? C.teal : C.panel}" stroke="${on ? C.ink : C.panelEdge}" stroke-width="${on ? 3 : 2.5}"${on ? '' : ' stroke-dasharray="9 7"'}/>`;
    s += badge(x + cw / 2, y + 40, 22, n, on ? C.mustard : C.cream);
    const hp = para(x + cw / 2, y + 96, cw - 26, h, { size: 18, weight: 700, anchor: 'middle', fill: on ? C.ink : C.muted });
    s += hp.svg;
    if (b) s += para(x + cw / 2, y + 96 + hp.h + 8, cw - 26, b, { size: 16, anchor: 'middle', fill: C.ink }).svg;
  });
  // brackets
  const bx1 = 30, bx2 = 30 + 2 * cw + 14, bx3 = 30 + 2 * (cw + 14), bx4 = 870, by = y + ch + 16;
  s += path(`M${bx1 + 6},${by} L${bx1 + 6},${by + 14} L${bx2 - 6},${by + 14} L${bx2 - 6},${by}`, { stroke: C.tealDark, w: 3 });
  s += path(`M${bx3 + 6},${by} L${bx3 + 6},${by + 14} L${bx4 - 6},${by + 14} L${bx4 - 6},${by}`, { stroke: C.muted, w: 3 });
  s += label((bx1 + bx2) / 2, by + 44, 'This guide: the foundation', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += label((bx1 + bx2) / 2, by + 68, 'the other two strands build on', { size: 16, anchor: 'middle', fill: C.tealDark });
  s += label((bx3 + bx4) / 2, by + 44, 'A separate resource', { size: 18, weight: 700, anchor: 'middle', fill: C.muted });
  add('01-four-strands', svg(900, by + 96, 'The four strands of 3.1.1 Education', s, 'AQA AS and A-level Sociology (7191/7192)'),
    'Four strands of 3.1.1 Education: role and functions of education, differential achievement by class, gender and ethnicity, relationships and processes within schools, and educational policies. The first two are covered here as the foundation for the others.',
    'Role and functions, and differential achievement, are the foundation the other two strands build on.',
    '## Scope of this guide');
}

// 02 Functionalist vs Marxist views of education
{
  add('02-functionalist-marxist', versusFig('Two competing views of education', {
    left: { head: 'Functionalist', sub: 'Education performs positive functions for society', items: ['Secondary socialisation', 'Social solidarity', 'Role allocation: matching individuals to jobs suited to their abilities'] },
    right: { head: 'Marxist', sub: 'Education reproduces class inequality and serves capitalism', items: ['Prepares a compliant workforce', 'Correspondence principle (Bowles and Gintis): the structure of schooling mirrors the structure of the workplace'] },
    foot: { head: 'A frequently tested essay skill', text: 'State both perspectives’ claims about the same function of education, such as role allocation, and explain how they differ.' },
  }),
    'Functionalists see education performing positive functions: secondary socialisation, social solidarity and role allocation. Marxists see it reproducing class inequality and preparing a compliant workforce through the correspondence principle.',
    'Functionalists and Marxists give opposing accounts of what education does.',
    '## How to approach it');
}

// 03 Differential achievement: three variables, separate explanations
{
  add('03-achievement-variables', cardsFig('Explaining differential achievement', {
    sub: 'keep the three social variables analytically separate',
    ncol: 3, size: 16,
    cards: [
      { head: 'Social class', fill: C.teal, body: ['**Material:** the cost of educational resources', '**Cultural:** Bourdieu’s cultural capital; restricted and elaborated speech codes'] },
      { head: 'Gender', fill: C.cream, body: ['Boys’ current underachievement relative to girls, including critiques of laddish subcultures', 'Girls’ historical underachievement and later improvement'] },
      { head: 'Ethnicity', fill: C.tealLight, body: ['**Material:** material deprivation', '**In-school processes:** teacher labelling; setting and streaming'] },
    ],
    foot: { head: 'Weigh, do not merge', text: 'Within each variable, set one type of explanation against another. Questions may still ask you to compare across variables or discuss how they interact.' },
  }),
    'Three columns for class, gender and ethnicity. Class weighs material explanations against cultural ones; gender covers boys’ underachievement and girls’ improvement; ethnicity weighs material deprivation against labelling and setting.',
    'Each social variable has its own body of explanations to weigh.',
    '## How to approach it');
}

// 04 Claim-claim-contrast
{
  add('04-claim-claim-contrast', flowFig('Claim, claim, contrast', {
    sub: 'comparing two views of role allocation',
    steps: [
      { head: 'Claim 1: functionalist', body: 'Education fairly allocates individuals to jobs suited to their talents and abilities, through meritocratic qualifications and assessment, benefiting both the individual and society.', fill: C.panel },
      { head: 'Claim 2: Marxist', body: 'Education appears meritocratic but reproduces class inequality: working-class students are disadvantaged through cultural capital, resources and school processes, so allocation reflects class background, not ability.', fill: C.panel },
      { head: 'Contrast', body: 'Functionalism presents allocation as broadly fair and beneficial to all; Marxism presents the same process as reproducing inequality behind an appearance of fairness.', fill: C.cream, edge: C.olive },
    ],
  }),
    'Three steps of a comparison answer: the functionalist claim that role allocation is fair and meritocratic, the Marxist claim that it reproduces class inequality, and a contrast between the two.',
    'Two claims about the same function, then an explicit contrast.',
    '## Worked example: comparing functionalist and Marxist views of role allocation');
}

// 05 Correspondence principle
{
  let s = '', y = 120;
  const rows = ['Hierarchy', 'Discipline', 'Extrinsic reward'];
  const H = 3 * 74 + 20;
  s += `<rect x="30" y="${y}" width="230" height="${H}" rx="14" fill="${C.teal}" stroke="${C.ink}" stroke-width="3"/>` + t(145, y + H / 2 + 8, 'Schooling', { size: 24, weight: 700, anchor: 'middle' });
  s += `<rect x="640" y="${y}" width="230" height="${H}" rx="14" fill="${C.cream}" stroke="${C.ink}" stroke-width="3"/>` + tl(755, y + H / 2 - 6, ['Capitalist', 'workplace'], { size: 24, weight: 700, anchor: 'middle' }, 30);
  rows.forEach((r, i) => {
    const yy = y + 20 + i * 74;
    s += `<rect x="340" y="${yy}" width="220" height="54" rx="27" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2.5"/>` + t(450, yy + 34, r, { size: 19, weight: 700, anchor: 'middle' });
    s += `<line x1="268" y1="${yy + 27}" x2="332" y2="${yy + 27}" stroke="${C.olive}" stroke-width="3.5"/>`;
    s += arrow(568, yy + 27, 632, yy + 27, { color: C.olive, marker: 'ahO' });
  });
  s += label(450, y + H + 34, 'social relationships and structure mirror each other', { size: 17, italic: true, fill: C.olive, anchor: 'middle', weight: 600 });
  y += H + 56;
  s += arrow(450, y, 450, y + 40);
  y += 48;
  s += `<rect x="190" y="${y}" width="520" height="58" rx="14" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + t(450, y + 37, 'Prepares students for future roles as workers', { size: 20, weight: 700, anchor: 'middle' });
  y += 58;
  add('05-correspondence-principle', svg(900, y + 30, 'The correspondence principle', s, 'Bowles and Gintis (Marxist)'),
    'Hierarchy, discipline and extrinsic reward in schooling mirror the same features of the capitalist workplace, preparing students for their future roles as workers.',
    'For Bowles and Gintis, school mirrors the capitalist workplace.',
    '## Key terms to define precisely');
}

// 06 Material vs cultural explanations of class gaps
{
  add('06-material-cultural', versusFig('Two distinct types of class explanation', {
    left: { head: 'Material deprivation', sub: 'a lack of physical and financial resources', items: ['Books', 'A quiet study space', 'Nutritious food'] },
    right: { head: 'Cultural capital (Bourdieu)', sub: 'what higher-class families pass on to their children', items: ['Knowledge and tastes', 'Ways of speaking and behaving', 'An advantage in a system that implicitly values these traits'] },
    foot: { head: 'Common mistake', text: 'Treating material and cultural explanations as interchangeable. They are two distinct types of explanation for class-based gaps.' },
  }),
    'Material deprivation means lacking resources such as books, a quiet study space or nutritious food. Cultural capital is the knowledge, tastes and ways of speaking that higher-class families pass on, which the education system implicitly values.',
    'Material and cultural explanations are separate types, not alternatives to blur together.',
    '## Key terms to define precisely');
}

// 07 Labelling
{
  let s = '', y = 120;
  const c = hchain(y, [
    { head: 'Label attached', body: 'by teachers or the system, e.g. "able" or "disruptive"', fill: C.teal },
    { head: 'Expectation', body: 'the label sets what is expected of the student', fill: C.panel },
    { head: 'Behaviour', body: 'the student’s behaviour is influenced', fill: C.panel },
    { head: 'Outcome', body: 'achievement shaped by the label', fill: C.cream },
  ], { ag: 48, size: 16 });
  s += c.svg; y += c.h + 20;
  s += path(`M${870 - 105},${y} C${870 - 105},${y + 60} ${30 + 105},${y + 60} ${30 + 105},${y + 6}`, { stroke: C.olive, w: 3.5, extra: 'stroke-dasharray="10 7" marker-end="url(#ahO)"' });
  s += label(450, y + 78, 'sometimes a self-fulfilling prophecy', { size: 18, weight: 700, fill: C.olive, anchor: 'middle' });
  y += 92;
  add('07-labelling', svg(900, y + 26, 'Labelling in education', s),
    'A teacher or the education system attaches a label such as able or disruptive, which sets expectations, influences the student’s behaviour and shapes outcomes, sometimes through a self-fulfilling prophecy.',
    'A label can shape the behaviour and results it predicts.',
    '## Key terms to define precisely');
}
