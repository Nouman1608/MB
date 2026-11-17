import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-sociology-8192-power-relationships';
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

// 01 Where power relationships happen
{
  const rows = [
    ['Families', 'Partners; parents and children'],
    ['Workplaces', 'Employers and employees'],
    ['Schools', 'Teachers and pupils'],
    ['Politics', 'Government and citizens'],
    ['Criminal justice', 'Police and suspects'],
  ];
  let s = label(450, 96, 'One person or group shapes the choices, opportunities or behaviour of another', { size: 18, anchor: 'middle', fill: C.muted });
  rows.forEach(([a, b], i) => {
    const y = 122 + i * 78;
    s += box(30, y, 230, 64, { fill: [C.teal, C.tealLight, C.cream, C.tealLight, C.teal][i], sw: 2 }) + label(145, y + 39, a, { size: 19, weight: 700, anchor: 'middle' });
    s += box(276, y, 594, 64, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + label(296, y + 39, b, { size: 18 });
  });
  const y = 122 + 5 * 78 + 6;
  const r = cardRow(y, [
    { head: '3.6.5 Power and authority', fill: C.panel, body: 'What **kinds** of power and authority exist?' },
    { head: '3.6.6 Power relationships', fill: C.mustard, body: 'Which **social factors** make some groups more powerful?' },
  ], { size: 17, headSize: 19, gap: 40 });
  s += r.svg;
  add('01-power-relationships',
    svg(900, Math.round(y + r.h + 24), 'What a power relationship is', s),
    'Five settings for power relationships: families, workplaces, schools, politics and criminal justice, with the pairs involved in each. Below, the difference between 3.6.5, which asks what kinds of power exist, and 3.6.6, which asks which social factors make some groups more powerful.',
    'Power relationships run through families, work, school, politics and justice.',
    '## What a power relationship is');
}

// 02 Seven factors
{
  const rows = [
    ['Social class', 'Owners and managers decide pay and jobs; wealth buys influence', 'Trade unions; industrial disputes such as strikes'],
    ['Gender', 'Men held most formal power; glass ceiling; unequal domestic labour', 'Women’s entry into paid work and public life'],
    ['Sexuality', 'Heterosexuality treated as the norm; prejudice limits openness', 'Civil Partnership Act 2004; same-sex marriage Act 2013'],
    ['Race', 'Institutional racism; under-represented in senior posts', 'Race Relations Acts; Equality Act 2010'],
    ['Age', 'Children have little formal power; ageism at work', 'Older people more likely to vote'],
    ['Disability', 'Barriers; decisions made FOR, not WITH, disabled people', 'Campaigns led to the 1995 Act'],
    ['Religion and beliefs', 'Moral authority over members; minorities have less influence', 'Links to gender where leadership is reserved for men'],
  ];
  const f = compareFig('Seven factors that shape power', {
    cols: [{ head: 'Who has less power, and how', fill: C.cream }, { head: 'Balancing forces', fill: C.teal }],
    rows: rows.map(([l, a, b]) => ({ label: l, cells: [a, b] })),
    labelW: 180, size: 16, headSize: 18,
  });
  add('02-seven-factors', f,
    'A table of seven factors: social class, gender, sexuality, race, age, disability, and religion and beliefs. For each it shows how power is unequal, such as owners deciding pay or institutional racism, and what has balanced it, such as trade unions, voting or equality laws.',
    'Each factor shifts who holds power, and each has forces pushing back.',
    '## Factors affecting power relationships');
}

// 03 The law as a factor
{
  let s = '';
  const laws = [['1970', 'Equal Pay Act', 'Equal pay for equal work'], ['1975', 'Sex Discrimination Act', 'Sex, in employment and other areas'], ['1976', 'Race Relations Act', 'Race'], ['1995', 'Disability Discrimination Act', 'Disabled people']];
  laws.forEach(([y, n, b], i) => {
    const yy = 112 + i * 86;
    s += box(30, yy, 470, 72, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + label(50, yy + 30, y, { size: 18, weight: 700, fill: C.tealDark }) + label(120, yy + 30, n, { size: 18, weight: 700 }) + label(120, yy + 56, b, { size: 16, fill: C.muted });
    s += path(`M504,${yy + 36} L560,${yy + 36} L560,${112 + 1.5 * 86 + 36} L590,${112 + 1.5 * 86 + 36}`, { w: 2.5 });
  });
  s += arrow(590, 112 + 1.5 * 86 + 36, 600, 112 + 1.5 * 86 + 36, { w: 2.5 });
  s += box(604, 112 + 86 * 0.5, 266, 210, { fill: C.mustard, sw: 3 }) + label(737, 112 + 43 + 40, '2010', { size: 18, weight: 700, anchor: 'middle', fill: C.olive }) + label(737, 112 + 43 + 68, 'Equality Act', { size: 22, weight: 700, anchor: 'middle' }) + para(737, 112 + 43 + 100, 236, 'Brought earlier laws together: age, disability, race, religion or belief, sex, sexual orientation', { size: 15.5, anchor: 'middle' }).svg;
  const n = note(112 + 4 * 86 + 10, 'Use laws carefully', ['Laws change **formal** power, but informal prejudice can persist', 'Walby: equal opportunities laws are **seldom enforced**', 'Do not treat equality laws as proof that inequality has ended']);
  add('03-equality-laws',
    svg(900, Math.round(112 + 4 * 86 + 10 + n.h + 24), 'The law as a factor', s + n.svg),
    'Four laws, the Equal Pay Act 1970, Sex Discrimination Act 1975, Race Relations Act 1976 and Disability Discrimination Act 1995, feed into the Equality Act 2010, which protects several characteristics. Below, laws change formal power but Walby argues they are seldom enforced.',
    'Laws shift formal power, but they do not end inequality on their own.',
    '## Factors affecting power relationships');
}

// 04 Evaluating Walby
{
  const f = versusFig('Evaluating Walby', {
    sub: 'Theorizing Patriarchy (1990)',
    left: { head: 'Strengths', fill: C.teal, items: ['Patriarchy works through **several connected structures**, not a single cause', 'The **private to public** shift explains why inequality persists as women enter paid work', 'Links across the course: unpaid domestic labour, gendered subject choice, the glass ceiling'] },
    right: { head: 'Limitations', fill: C.cream, items: ['Less weight on differences between women by **class and ethnicity**', 'Women’s gains in education and professions may mean the structures are weakening faster', 'About **Western society**; may not apply elsewhere in the same way'] },
    foot: { head: 'Memory hook for the six structures', text: 'Pay, Production, Culture, Sex, Violence, State.' },
    y0: 120,
  });
  add('04-evaluating-walby', f,
    'Two panels. Strengths of Walby: several connected structures, a private to public shift that explains persisting inequality, and links across the course. Limitations: less attention to differences between women by class and ethnicity, possible underestimation of women’s gains, and a focus on Western society.',
    'Walby explains why inequality persists, but may underplay differences between women.',
    '## Walby\'s theory of patriarchy');
}

// 05 Care home example
{
  let s = '';
  const lvl = (y, w, head, sub, f, people, pf) => {
    const x = 330 - w / 2;
    let o = box(x, y, w, 96, { fill: f, sw: 2.5 }) + label(330, y + 34, head, { size: 19, weight: 700, anchor: 'middle' }) + label(330, y + 58, sub, { size: 15.5, anchor: 'middle', fill: C.ink });
    for (let k = 0; k < people; k++) { const px = 330 - (people - 1) * 17 + k * 34; o += `<circle cx="${px}" cy="${y + 80}" r="9" fill="${pf}" stroke="${C.ink}" stroke-width="2"/>`; }
    return o;
  };
  s += lvl(112, 260, 'Regional director', 'a man', C.mustard, 1, C.teal);
  s += lvl(228, 400, 'Female manager', 'holds power over the care assistants', C.tealLight, 1, C.cream);
  s += lvl(344, 560, 'Care assistants', 'mostly women: low-paid, low-status work', C.cream, 9, C.cream);
  s += box(640, 112, 230, 120, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + label(656, 140, 'Walby', { size: 17, weight: 700, fill: C.tealDark }) + para(656, 166, 200, 'Public patriarchy: women in paid work, held below senior posts', { size: 15.5 }).svg;
  s += box(640, 248, 230, 120, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + label(656, 276, 'Critics', { size: 17, weight: 700, fill: C.rust }) + para(656, 302, 200, 'Class divides women too: a female manager has power over other women', { size: 15.5 }).svg;
  s += arrow(636, 196, 566, 340, { w: 2.5 }) + arrow(636, 308, 536, 286, { w: 2.5 });
  s += `<circle cx="120" cy="472" r="9" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + label(136, 478, 'man', { size: 15.5 }) + `<circle cx="200" cy="472" r="9" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/>` + label(216, 478, 'woman', { size: 15.5 });
  add('05-care-home-example',
    svg(900, 500, 'Public patriarchy at work: a care home', s),
    'A three-level hierarchy in a care home: a male regional director at the top, a female manager in the middle and mostly female care assistants in low-paid work at the bottom. Walby would see public patriarchy; critics note the female manager’s power over other women shows class divides women too.',
    'Women are present in paid work but held below senior posts, and class also divides them.',
    '## Worked paragraph');
}

// 06 Which division is fundamental?
{
  const f = cardsFig('Which power relationship is fundamental?', {
    cards: [
      { head: 'Feminist: gender', fill: C.cream, body: ['Walby’s six structures show male domination in public and private life', 'Feminists differ: laws and education; male violence and sexuality; links to capitalism'] },
      { head: 'Marxist: class', fill: C.teal, body: ['Rooted in ownership of the means of production', 'Racism and sexism divide workers and hide shared class interests, which benefits the ruling class'] },
      { head: 'Functionalist: complementary roles', fill: C.tealLight, body: ['Roles complement each other rather than dominate', 'Parsons: instrumental and expressive roles are functional', 'Power used legitimately for shared goals'] },
    ],
    ncol: 3, size: 16, headSize: 19,
    foot: { head: 'Comparing them', text: 'Feminists and Marxists both see unequal power and conflict but disagree about which division is fundamental; functionalists see consensus.' },
  });
  add('06-perspectives', f,
    'Three cards. Feminists see gender as the key power relationship, shown by Walby’s structures. Marxists see class, rooted in ownership, with racism and sexism dividing workers. Functionalists see complementary roles, such as Parsons’ instrumental and expressive roles, and legitimate power.',
    'Feminists and Marxists both see conflict but disagree on whether gender or class comes first.',
    '## Perspectives on power relationships');
}
