import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-sociology-7192-stratification-and-differentiation';
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

// (01 Paper 2 structure is reused from the Beliefs in Society guide; see figures.html)

// 02 Three theories of class
{
  add('02-class-theories', compareFig('Three theories of social class', {
    cols: [{ head: 'Functionalism', fill: C.teal }, { head: 'Marxism', fill: C.cream }, { head: 'Weberianism', fill: C.tealLight }],
    labelW: 160, size: 16,
    rows: [
      { label: 'Class is based on', cells: ['Rewards attached to functionally important positions.', 'Relationship to the means of production.', 'Market situation: skills, qualifications and property.'] },
      { label: 'Key claim', cells: ['**Davis and Moore (1945):** higher rewards motivate the most able to fill vital roles.', 'The bourgeoisie exploit the proletariat; polarisation is expected; false consciousness delays it.', 'Many classes, not two. Class, status and party can vary independently.'] },
      { label: 'Challenge or development', cells: ['**Tumin (1953):** importance is hard to show; stratification can block talent.', 'The middle class grew; **Wright (1985):** contradictory class locations.', 'Goldthorpe’s multi-class scale builds on Weber.'] },
    ],
  }),
    'A grid comparing functionalist, Marxist and Weberian theories of class: what class is based on, each theory’s key claim, and the main challenge to or development of it.',
    'Functionalists see class as functional; Marxists as exploitation; Weberians as market position.',
    '## 1. Stratification and differentiation by class, gender, ethnicity and age');
}

// 03 Walby's six structures of patriarchy
{
  let s = '', y = 120;
  const items = ['Paid work', 'The household', 'The state', 'Violence', 'Sexuality', 'Culture'];
  const cw = (840 - 2 * 16) / 3;
  items.forEach((it, i) => {
    const x = 30 + (i % 3) * (cw + 16), yy = y + Math.floor(i / 3) * 78;
    s += `<rect x="${x}" y="${yy}" width="${cw}" height="64" rx="12" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + badge(x + 34, yy + 32, 18, String(i + 1), C.cream) + t(x + 66, yy + 39, it, { size: 20, weight: 700 });
  });
  y += 2 * 78 + 20;
  const c = hchain(y, [
    { head: 'Private patriarchy', body: 'in the home', fill: C.cream },
    { head: 'Public patriarchy', body: 'in work and the state', fill: C.teal },
  ], { ag: 110, size: 17 });
  s += c.svg + t(450, y + c.h / 2 - 12, 'shift', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  y += c.h + 20;
  const n = note(y, 'A different view: Hakim’s preference theory (2000)', 'Women choose home-centred, adaptive or work-centred lifestyles. Critics: "choices" are limited by childcare costs and employer practices.');
  s += n.svg; y += n.h;
  add('03-walby-patriarchy', svg(900, y + 26, 'Walby (1990): six structures of patriarchy', s),
    'Walby’s six structures of patriarchy: paid work, the household, the state, violence, sexuality and culture, with a shift from private patriarchy in the home to public patriarchy in work and the state. Hakim’s preference theory offers a contrasting view.',
    'Walby sees patriarchy moving from the home into work and the state.',
    '## 1. Stratification and differentiation by class, gender, ethnicity and age');
}

// 04 Weber's dimensions and life chances
{
  let s = '', y = 104;
  const r = cardRow(y, [
    { head: 'Class', sub: 'economic position', body: 'Income, wealth and job security.', fill: C.teal },
    { head: 'Status', sub: 'social honour', body: 'How a group is regarded, e.g. an ethnic group or disabled people.', fill: C.cream },
    { head: 'Power (party)', sub: 'getting your way', body: '**Lukes (1974):** decision-making, agenda-setting, shaping what people want.', fill: C.tealLight },
  ], { size: 16 });
  s += r.svg; y += r.h;
  const cw = (840 - 32) / 3;
  [0, 1, 2].forEach((i) => s += arrow(30 + i * (cw + 16) + cw / 2, y + 6, 450 + (i - 1) * 110, y + 50));
  y += 56;
  s += `<rect x="190" y="${y}" width="520" height="88" rx="14" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + t(450, y + 36, 'Life chances', { size: 22, weight: 700, anchor: 'middle' }) + t(450, y + 66, 'health, education, housing, income, long life', { size: 17, anchor: 'middle' });
  y += 88 + 20;
  const n = note(y, 'Example: disability', 'Oliver’s social model: people are disabled by social barriers such as inaccessible buildings and employer attitudes. Shakespeare: this can underplay the real effects of impairment.');
  s += n.svg; y += n.h;
  add('04-weber-life-chances', svg(900, y + 26, 'Weber: three dimensions of inequality', s),
    'Class, status and power each feed into life chances: the opportunities to gain good health, education, housing, income and long life. Disability shows status barriers at work.',
    'Life chances depend on status and power as well as economic class.',
    '## 2. Dimensions of inequality and life chances');
}

// 05 Measuring class
{
  let s = '', y = 104;
  const c = hchain(y, [
    { head: 'Registrar General’s scale', body: 'official scale before NS-SEC; occupations by social standing', fill: C.panel },
    { head: 'NS-SEC', body: 'first major use 2001 Census; Goldthorpe schema; employment relations; 8 classes', fill: C.teal },
    { head: 'Great British Class Survey', body: 'Savage et al. (2013); economic, cultural and social capital; 7 classes, elite to precariat', fill: C.cream },
  ], { ag: 44, size: 16 });
  s += c.svg; y += c.h + 14;
  const pp = para(450, y + 18, 820, 'Problems: occupation misses the very wealthy and people outside paid work; objective and subjective class may differ; the GBCS web survey was self-selecting.', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  s += pp.svg; y += pp.h + 34;
  s += label(450, y + 8, 'Occupation, gender and class', { size: 20, weight: 700, anchor: 'middle' });
  y += 28;
  const r = cardRow(y, [
    { head: 'Conventional approach', sub: 'Goldthorpe (1983)', body: ['Classify the household by the male "head of household"', 'Women’s work often interrupted; the male wage shaped life chances'], fill: C.cream },
    { head: 'Individual approach', sub: 'Stanworth (1984); Acker (1973)', body: ['Classify each adult by their own occupation', 'A couple can be in two classes; shows inequality within the household'], fill: C.teal },
  ], { size: 16 });
  s += r.svg; y += r.h;
  add('05-measuring-class', svg(900, y + 26, 'Measuring social class', s),
    'Three ways of measuring class: the Registrar General’s scale, NS-SEC with eight classes based on employment relations, and the Great British Class Survey’s seven classes based on three capitals. Below, the conventional household approach is compared with the individual approach.',
    'Each scale measures something different, and gender changes the picture.',
    '## 3. Defining and measuring social class');
}

// 06 Is the class structure changing?
{
  add('06-changing-class', cardsFig('Is the class structure changing?', {
    sub: 'after deindustrialisation: fewer manual jobs, more service and professional work',
    ncol: 2, size: 16, headSize: 19,
    cards: [
      { head: 'Embourgeoisement', body: 'Affluent manual workers becoming middle class? **Goldthorpe and Lockwood** (Luton, 1960s) found little support.', fill: C.cream },
      { head: 'Proletarianisation', body: '**Braverman (1974):** routine white-collar work is deskilled, so many clerical workers are in effect working class.', fill: C.cream },
      { head: 'Underclass', body: '**Murray (New Right):** welfare creates an underclass with distinct behaviour. Critics: the poor share mainstream values but lack opportunities.', fill: C.tealLight },
      { head: 'The precariat', body: '**Standing (2011):** a growing group in insecure, short-term work with few rights. Savage’s survey also named one.', fill: C.tealLight },
      { head: 'The death of class?', body: '**Pakulski and Waters (1996):** class is dissolving into status. **Beck:** individualisation. Critics: the social gradient in health persists.', fill: C.teal },
      { head: 'Transnational capitalist class', body: '**Sklair:** corporate, state, technical and consumerist fractions work across borders. Critics: is it truly unified?', fill: C.teal },
    ],
  }),
    'Six views of how class has changed: embourgeoisement, proletarianisation, the underclass, the precariat, the death of class, and Sklair’s transnational capitalist class, each with its evidence or criticism.',
    'Sociologists disagree on whether class is fading, splitting or going global.',
    '## 4. Changes in structures of inequality');
}

// 07 Social mobility
{
  let s = '', y = 104;
  const pairs = [['Intergenerational', 'compared with parents', 'Intragenerational', 'over a person’s own career'], ['Absolute', 'total amount of movement', 'Relative', 'chances by background'], ['Short-range', 'to an adjacent class', 'Long-range', 'across several classes']];
  const pw = (840 - 32) / 3;
  pairs.forEach(([a, ad, b, bd], i) => {
    const x = 30 + i * (pw + 16);
    s += panel(x, y, pw, 150);
    s += t(x + 18, y + 34, a, { size: 18, weight: 700, fill: C.tealDark }) + t(x + 18, y + 58, ad, { size: 16, fill: C.muted });
    s += `<line x1="${x + 18}" y1="${y + 76}" x2="${x + pw - 18}" y2="${y + 76}" stroke="${C.panelEdge}" stroke-width="2"/>`;
    s += t(x + 18, y + 106, b, { size: 18, weight: 700, fill: C.olive }) + t(x + 18, y + 130, bd, { size: 16, fill: C.muted });
  });
  y += 150 + 36;
  s += label(450, y, 'Key studies', { size: 20, weight: 700, anchor: 'middle' });
  y += 62;
  const ev = [['1954', 'Glass', 'continuity strongest at the top'], ['1972', 'Oxford Mobility Study', 'absolute upward mobility rose; relative chances stayed unequal'], ['1996', 'Saunders', 'largely a meritocracy'], ['1999', 'Breen and Goldthorpe', 'less advantaged children needed more merit'], ['2005', 'Blanden, Gregg and Machin', 'income mobility fell (1958 vs 1970 births)']];
  const x1 = 110, x2 = 790, step = (x2 - x1) / 4;
  s += `<line x1="60" y1="${y}" x2="840" y2="${y}" stroke="${C.ink}" stroke-width="4"/>`;
  ev.forEach(([yr, who, what], i) => {
    const x = x1 + i * step;
    s += `<circle cx="${x}" cy="${y}" r="11" fill="${i % 2 ? C.teal : C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
    s += t(x, y - 22, yr, { size: 18, weight: 700, anchor: 'middle' });
    const wp = para(x, y + 38, 150, who, { size: 16, weight: 700, anchor: 'middle' });
    s += wp.svg + para(x, y + 38 + wp.h + 2, 150, what, { size: 15, anchor: 'middle', fill: C.muted }).svg;
  });
  y += 170;
  const n = note(y, 'Significance', 'Low relative mobility suggests advantage is passed on through economic, cultural and social capital. Studies of men and their fathers missed women’s mobility.');
  s += n.svg; y += n.h;
  add('07-social-mobility', svg(900, y + 26, 'Social mobility', s),
    'Three pairs of mobility terms: intergenerational and intragenerational, absolute and relative, short-range and long-range. A timeline of studies runs from Glass (1954) and the Oxford Mobility Study (1972) to Saunders (1996), Breen and Goldthorpe (1999) and Blanden, Gregg and Machin (2005).',
    'Absolute mobility rose, but relative chances stayed unequal.',
    '## 5. Social mobility');
}
