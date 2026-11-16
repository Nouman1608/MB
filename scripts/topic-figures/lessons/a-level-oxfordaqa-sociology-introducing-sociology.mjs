import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'a-level-oxfordaqa-sociology-introducing-sociology';
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

// 01 Unit 1 assessment and the shared 3.1.3 content
{
  let s = '', y = 130;
  s += label(450, y + 8, 'Unit 1 Introducing Sociology (60 marks)', { size: 20, weight: 700, anchor: 'middle' });
  y += 26;
  const r = cardRow(y, [
    { head: 'Section A: Families (3.1.1)', sub: '40 of 60 marks', body: 'Short and extended-response questions.', fill: C.teal },
    { head: 'Section B: Research methods (3.1.3)', sub: '20 marks', body: 'Short questions plus a structured question based on data about an unseen issue.', fill: C.cream },
  ], { size: 16 });
  s += r.svg; y += r.h + 34;
  s += label(450, y, '3.1.3 Research Methods and Theory is examined twice', { size: 20, weight: 700, anchor: 'middle' });
  y += 18;
  const c = hchain(y, [
    { head: 'Unit 1', body: 'short and structured questions', fill: C.cream },
    { head: 'Same content', body: 'approaches, methods, issues, data interpretation, theories', fill: C.mustard },
    { head: 'Unit 2', body: 'a single extended-response question', fill: C.tealLight },
  ], { ag: 50, size: 16, arrows: false });
  s += c.svg;
  const cw = (840 - 100) / 3;
  s += `<line x1="${30 + cw + 46}" y1="${y + c.h / 2}" x2="${30 + cw + 6}" y2="${y + c.h / 2}" stroke="${C.ink}" stroke-width="3.5" marker-end="url(#ah)"/>`;
  s += arrow(30 + 2 * cw + 54, y + c.h / 2, 30 + 2 * cw + 96, y + c.h / 2);
  y += c.h + 18;
  s += label(450, y + 10, 'a different question form, not different content', { size: 17, italic: true, anchor: 'middle', fill: C.tealDark, weight: 600 });
  y += 20;
  add('01-unit-1-assessment', svg(900, y + 26, 'How Unit 1 is assessed', s, 'OxfordAQA International A-level Sociology (9690)'),
    'Unit 1 has 60 marks: Section A on families (40 marks) and Section B on research methods (20 marks). The same research methods and theory content is examined in Unit 1 through short and structured questions and in Unit 2 through one extended response.',
    'Research methods and theory content is examined in both Units 1 and 2.',
    '## Syllabus coverage');
}

// 02 Family types
{
  add('02-family-types', cardsFig('Family types and living arrangements', {
    ncol: 3, size: 16, headSize: 18,
    cards: [
      { head: 'Extended', body: ['Vertically: across generations', 'Horizontally: across a generation'], fill: C.teal },
      { head: 'Nuclear', body: 'The functionalist "fit" with modern industrial society (Parsons).', fill: C.teal },
      { head: 'Single-parent', body: 'One parent living with children.', fill: C.teal },
      { head: 'Non-family living', body: ['Communes', 'Living alone', 'Foster care or children’s homes'], fill: C.cream },
      { head: 'Cultural variation', body: ['Patriarchal and matriarchal structures', 'Therborn’s typology of family systems by world region'], fill: C.cream },
      { head: 'Marriage practices', body: ['Arranged marriages', 'Love marriages', 'Monogamy'], fill: C.cream },
    ],
  }),
    'Six cards: extended, nuclear and single-parent families; non-family living arrangements such as communes, living alone and foster care; cultural variation including Therborn’s typology; and arranged marriage, love marriage and monogamy.',
    'Family forms and marriage practices vary within and between societies.',
    '## Families: forms, functions and change');
}

// 03 Perspectives on the family
{
  add('03-family-perspectives', cardsFig('Three perspectives on the family', {
    ncol: 3, size: 17, headSize: 19,
    cards: [
      { head: 'Functionalist', sub: 'Parsons', body: 'The functions the family performs, and how the nuclear family "fits" modern industrial society.', fill: C.teal },
      { head: 'Marxist', sub: 'Engels', body: 'The family as an agent of social control serving capitalism.', fill: C.cream },
      { head: 'Feminist', sub: 'Oakley', body: 'How families shape the different positions of men and women in society.', fill: C.tealLight },
    ],
    foot: { head: 'Revise comparatively', text: 'Contrast how each perspective reads the same aspect of family life. Named sociologists for Unit 1: Engels, Oakley, Parsons, Smart, Stacey, Therborn.' },
  }),
    'Functionalists such as Parsons study family functions and the fit of the nuclear family; Marxists such as Engels see the family serving capitalism; feminists such as Oakley study how families shape gender positions.',
    'Each perspective asks whom the family serves.',
    '## Families: forms, functions and change');
}

// 04 Social change and family diversity
{
  let s = '', y = 104;
  const r = cardRow(y, [
    { head: 'Demographic factors', body: ['Family size', 'Birth and death rates', 'Infant and child mortality', 'Migration', 'An ageing population'], fill: C.teal },
    { head: 'Social and economic change', body: ['Industrialisation', 'Urbanisation', '**Smart:** personal life', 'Individualisation: more freely chosen arrangements'], fill: C.teal },
  ], { size: 16, gap: 80 });
  s += r.svg; y += r.h;
  s += arrow(235, y + 6, 390, y + 48) + arrow(665, y + 6, 510, y + 48);
  y += 54;
  s += `<rect x="250" y="${y}" width="400" height="56" rx="14" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + t(450, y + 36, 'Newer family diversity', { size: 21, weight: 700, anchor: 'middle' });
  y += 56 + 18;
  const types = ['Pivot / sandwich generation', 'Reconstituted / blended', 'Living apart together', 'Child-free couples', 'Beanpole families', 'Diasporas and transnational', 'Friends as family', 'Pets as family members'];
  const pw = (840 - 3 * 12) / 4;
  types.forEach((tp, i) => {
    const x = 30 + (i % 4) * (pw + 12), yy = y + Math.floor(i / 4) * 70;
    s += `<rect x="${x}" y="${yy}" width="${pw}" height="58" rx="12" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>` + para(x + pw / 2, yy + 24 + (para(0, 0, pw - 20, tp, { size: 16, weight: 600 }).n === 1 ? 10 : 0), pw - 20, tp, { size: 16, weight: 600, anchor: 'middle' }).svg;
  });
  y += 2 * 70 - 12;
  add('04-family-change', svg(900, y + 26, 'Why families have changed', s),
    'Demographic factors such as birth and death rates, migration and ageing, together with industrialisation, urbanisation, personal life and individualisation, produce newer family types such as sandwich-generation, blended, living-apart-together, beanpole and transnational families.',
    'Demographic and social change explain the growth of family diversity.',
    '## Families: forms, functions and change');
}

// 05 Gender roles: triple shift
{
  let s = '', y = 104;
  const c = hchain(y, [
    { head: 'Male "breadwinner"', body: 'instrumental role', fill: C.teal },
    { head: 'Female expressive role', body: 'care and emotional support', fill: C.cream },
  ], { ag: 60, size: 17, arrows: false });
  s += c.svg; y += c.h + 44;
  s += label(450, y, 'The triple shift', { size: 21, weight: 700, anchor: 'middle' });
  y += 20;
  const parts = ['Paid work', 'Domestic work', 'Emotional work'];
  const pw = (840 - 2 * 12) / 3;
  parts.forEach((p, i) => {
    const x = 30 + i * (pw + 12);
    s += `<rect x="${x}" y="${y}" width="${pw}" height="64" rx="12" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + badge(x + 34, y + 32, 18, String(i + 1), C.panel) + t(x + pw / 2 + 16, y + 39, p, { size: 20, weight: 700, anchor: 'middle' });
  });
  y += 64 + 24;
  const n = note(y, 'Related themes in 3.1.1.4', ['Division of domestic labour; power and decision-making', 'Violence against women and children', 'Children’s status and child-centredness', 'Adult children, including "boomerang" families, and older people']);
  s += n.svg; y += n.h;
  add('05-gender-roles', svg(900, y + 26, 'Gender, age and family life', s),
    'Gendered roles are shown as the male breadwinner or instrumental role and the female expressive role. The triple shift combines paid work, domestic work and emotional work, alongside themes such as power, violence, child-centredness and boomerang families.',
    'The triple shift adds emotional work to paid and domestic work.',
    '## Families: forms, functions and change');
}

// 06 Reliability, validity, representativeness
{
  add('06-research-concepts', compareFig('Judging a research method', {
    cols: [{ head: 'Positivist methods', fill: C.teal }, { head: 'Interpretivist methods', fill: C.cream }],
    labelW: 190, size: 16,
    rows: [
      { label: 'Examples', cells: ['Questionnaires, structured interviews, official statistics', 'Unstructured interviews, participant observation'] },
      { label: 'Reliability', cells: ['**High:** repeating it would give the same result', '**Low:** hard to repeat'], cellFill: [C.tealLight, C.panel] },
      { label: 'Validity', cells: ['**May be low:** may not measure what it claims to', '**High:** valid, in-depth insight'], cellFill: [C.panel, C.tealLight] },
      { label: 'Representativeness', cells: ['**Generalisable** findings', '**Less generalisable:** in-depth study of few people'], cellFill: [C.tealLight, C.panel] },
    ],
    foot: { head: 'Also judge by PET', text: 'Practical, ethical and theoretical factors. Ethics: informed consent, confidentiality, protection from harm, right to withdraw. Sampling: random, systematic, quota, multistage, stratified random, snowball.' },
  }),
    'A grid comparing positivist methods, which are reliable and generalisable but may lack validity, with interpretivist methods, which are valid and in-depth but less reliable. Practical, ethical and theoretical factors and six sampling methods are listed beneath.',
    'Reliability and validity often trade off against each other.',
    '## Research methods and theory');
}

// 07 Worked example: participant observation of a gang
{
  add('07-worked-example', versusFig('Participant observation of a criminal gang', {
    left: { head: 'Strengths', items: ['High validity: behaviour in its natural setting', 'Access to a group that would refuse a questionnaire', 'Reveals the meanings members attach to their actions'] },
    right: { head: 'Weaknesses', items: ['Not reliable: cannot be replicated', 'Small sample, not representative', 'May "go native", losing objectivity', 'Covert work raises consent and safety issues', 'Time-consuming and expensive'] },
    foot: { head: 'Conclusion: it depends on purpose', text: 'For understanding meaning it is the strongest method available; for measuring prevalence it is the wrong tool.' },
  }),
    'Strengths of participant observation for studying a gang, such as validity, access and insight into meanings, set against weaknesses such as low reliability, small samples, going native, ethical risks and cost.',
    'Assess a method against the research aim, not in the abstract.',
    '## Worked example');
}
