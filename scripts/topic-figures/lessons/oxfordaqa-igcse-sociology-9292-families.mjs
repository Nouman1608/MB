import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-sociology-9292-families';
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
const vcenter = (x, yTop, h, w, s, o = {}) => { const size = o.size || 17; const p = para(0, 0, w, s, o); return para(x, yTop + (h - p.h) / 2 + size * 0.95, w, s, o).svg; };
const P = (cx, cy, f = C.teal, r = 13) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`;
const ln = (x1, y1, x2, y2, o = {}) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${o.c || C.ink}" stroke-width="${o.w || 2.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;

// 01 Family types: vertical vs horizontal extension
{
  const A = C.teal, K = C.mustard, G = C.cream;
  const couple = (x, y, f = A) => ln(x - 22, y, x + 22, y) + P(x - 22, y, f) + P(x + 22, y, f);
  const types = [
    ['Nuclear', 'two generations: parents and dependent children', (x, y) => couple(x, y) + ln(x, y, x, y + 50) + ln(x - 22, y + 50, x + 22, y + 50) + P(x - 22, y + 56, K) + P(x + 22, y + 56, K)],
    ['Vertically extended', 'three or more generations', (x, y) => couple(x, y - 30, G) + ln(x, y - 30, x, y + 10) + couple(x, y + 10) + ln(x, y + 10, x, y + 50) + P(x, y + 56, K)],
    ['Horizontally extended', 'same generation, e.g. brothers and their wives', (x, y) => { const c2 = (cx) => ln(cx - 16, y + 20, cx + 16, y + 20) + P(cx - 16, y + 20, A, 11) + P(cx + 16, y + 20, A, 11); return c2(x - 38) + c2(x + 38) + ln(x - 22, y - 6, x + 22, y - 6, { dash: '5 4' }) + ln(x - 22, y - 6, x - 22, y + 9, { dash: '5 4' }) + ln(x + 22, y - 6, x + 22, y + 9, { dash: '5 4' }); }],
    ['Single parent', 'one parent with dependent children', (x, y) => P(x, y) + ln(x, y + 13, x, y + 50) + ln(x - 22, y + 50, x + 22, y + 50) + P(x - 22, y + 56, K) + P(x + 22, y + 56, K)],
    ['Reconstituted', 'a couple with children from a previous relationship', (x, y) => couple(x, y) + ln(x - 22, y + 13, x - 22, y + 43) + ln(x + 22, y + 13, x + 22, y + 43, { dash: '5 4' }) + P(x - 22, y + 56, K) + P(x + 22, y + 56, C.tealLight)],
  ];
  let s = '';
  const cw = 160, gap = 10, ch = 280;
  types.forEach(([h, d, art], i) => {
    const x = 30 + i * (cw + gap) + (i === 4 ? 0 : 0);
    s += box(x, 108, cw, ch, { fill: i === 1 || i === 2 ? C.cream : C.panel, edge: i === 1 || i === 2 ? C.olive : C.panelEdge, sw: 2 });
    s += art(x + cw / 2, 170) + para(x + cw / 2, 268, cw - 16, h, { size: 17, weight: 700, anchor: 'middle' }).svg + para(x + cw / 2, 268 + para(0, 0, cw - 16, h, { size: 17, weight: 700 }).h + 4, cw - 16, d, { size: 15, anchor: 'middle', fill: C.muted }).svg;
  });
  // fix widths: 5 cards x 160 + 4 x 10 = 840
  s += P(230, 414, A, 10) + label(246, 420, 'adult', { size: 16 }) + P(330, 414, K, 10) + label(346, 420, 'child', { size: 16 }) + P(430, 414, G, 10) + label(446, 420, 'grandparent', { size: 16 }) + ln(580, 414, 620, 414, { dash: '5 4' }) + label(630, 420, 'sibling or step link', { size: 16 });
  const n = note(446, 'Alternatives to families', 'Communes (unrelated adults share property and childcare), living alone, foster care and children’s homes.');
  add('01-family-types',
    svg(900, Math.round(446 + n.h + 24), 'Family types: vertical or horizontal?', s + n.svg),
    'Five family diagrams. Nuclear: parents and children. Vertically extended: three generations stacked. Horizontally extended: two brothers and their wives side by side. Single parent: one parent and children. Reconstituted: a couple with a child from a previous relationship. Below, alternatives such as communes, living alone, foster care and children’s homes.',
    'Vertical extension adds generations; horizontal extension adds relatives of the same generation.',
    '## Family types and alternatives');
}

// 02 Three perspectives with criticisms
{
  add('02-family-perspectives',
    compareFig('Three perspectives on families', {
      cols: [{ head: 'Functionalism (Parsons)', fill: C.teal }, { head: 'Marxism (Engels)', fill: C.tealLight }, { head: 'Feminisms (Oakley)', fill: C.cream }],
      rows: [
        { label: 'Main idea', cells: ['Two functions: primary socialisation and stabilisation of adult personalities', 'Monogamy developed with private property, so men knew their legitimate heirs', 'Families shape the unequal position of men and women'] },
        { label: 'Key point', cells: ['The small, mobile nuclear family “fits” industrial society', 'Families are agents of social control and units of consumption', 'London housewives: women did most housework; men’s “help” was limited'] },
        { label: 'Criticism', cells: ['Laslett: most pre-industrial English households were already nuclear; ignores conflict and abuse', 'Ignores benefits to members; families vary across classes and societies', 'May understate change and the variety of women’s experiences'] },
      ],
      size: 16, labelW: 110, headSize: 18,
    }),
    'A table comparing three perspectives. Parsons: primary socialisation and stabilising adult personalities, with the nuclear family fitting industrial society; criticised by Laslett. Engels: monogamy arose with private property and families act as agents of social control. Oakley: women did most housework. Each column ends with a criticism.',
    'Each perspective has a named sociologist, a key argument and a criticism.',
    '## Perspectives on families');
}

// 03 Demographic change: causes and effects
{
  const rows = [
    ['Contraception; more education and paid work for women; children an economic cost', 'Falling birth rates and smaller families', C.teal],
    ['Better nutrition, clean water, sanitation, vaccination and healthcare', 'Falling death rates, including infant and child mortality', C.tealLight],
    ['Longer life expectancy plus fewer births', 'Ageing populations (e.g. Japan)', C.cream],
    ['Moving to cities, or abroad, for work', 'Migration, internal and international', C.sand],
  ];
  let s = label(225, 124, 'Explanations', { size: 18, weight: 700, anchor: 'middle', fill: C.muted }) + label(675, 124, 'Demographic change', { size: 18, weight: 700, anchor: 'middle', fill: C.muted });
  let y = 140;
  rows.forEach(([c, e, f]) => {
    const h = 92;
    s += box(30, y, 400, h, { fill: C.panel, edge: C.panelEdge }) + vcenter(48, y, h, 364, c, { size: 16 });
    s += arrow(436, y + h / 2, 474, y + h / 2, { w: 4 });
    s += box(480, y, 390, h, { fill: f }) + vcenter(498, y, h, 354, e, { size: 18, weight: 700 });
    y += h + 12;
  });
  const n = note(y + 6, 'Common mistake', 'Describing demographic change without explaining its causes.');
  add('03-demographic-change',
    svg(900, Math.round(y + 6 + n.h + 24), 'Demographic change and its causes', s + n.svg),
    'Four cause-and-effect rows. Contraception, women’s education and work, and the cost of children lead to falling birth rates. Better nutrition, water, sanitation, vaccination and healthcare lead to falling death rates. Longer lives and fewer births lead to ageing populations such as Japan’s. Moving for work leads to internal and international migration.',
    'Each demographic change has causes you must be able to explain.',
    '## Social change and changing families');
}

// 04 China's population policy timeline
{
  let s = '';
  const y = 240, X = (yr) => 90 + ((yr - 1975) * 720) / (2025 - 1975);
  s += `<line x1="70" y1="${y}" x2="850" y2="${y}" stroke="${C.ink}" stroke-width="5" marker-end="url(#ah)"/>`;
  [[1980, 'One-child policy', 1, C.teal], [2016, 'Two-child policy', 2, C.cream], [2021, 'Three-child policy', 3, C.mustard]].forEach(([yr, t2, n, f], i) => {
    const x = X(yr);
    s += `<circle cx="${x}" cy="${y}" r="12" fill="${f}" stroke="${C.ink}" stroke-width="3"/>` + label(x, y + 44, String(yr), { size: 20, weight: 700, anchor: 'middle' });
    const bx = i === 0 ? x - 90 : i === 1 ? x - 200 : 690;
    s += box(bx, 110, 180, 84, { fill: f }) + label(bx + 90, 146, t2, { size: 17, weight: 700, anchor: 'middle' }) + label(bx + 90, 176, '●'.repeat(n), { size: 18, anchor: 'middle' });
    s += ln(x, 194, x, y - 12, { w: 2 });
  });
  const r = cardRow(310, [
    { head: 'Effects of the one-child policy', fill: C.tealLight, body: ['Reduced family size', 'Contributed to an ageing population'] },
    { head: 'Other policies that shape families', fill: C.panel, body: ['Divorce laws', 'Welfare benefits', 'Childcare provision'] },
  ], { size: 17, headSize: 19 });
  s += r.svg;
  add('04-china-family-policy',
    svg(900, 310 + r.h + 24, 'Laws and policies shape families: China', s),
    'A timeline of China’s population policy: a one-child policy from 1980, replaced by a two-child policy in 2016 and a three-child policy in 2021. The one-child policy reduced family size and contributed to an ageing population. Divorce laws, welfare benefits and childcare also shape families.',
    'Government policy can change family size, as China’s policies show.',
    '## Social change and changing families');
}

// 05 Roles: instrumental/expressive to triple shift
{
  let s = '';
  s += headPanel(30, 108, 404, 300, 'Parsons: traditional roles', { fill: C.teal, size: 20 }).svg;
  s += box(52, 186, 172, 196, { fill: C.tealLight, sw: 2 }) + label(138, 268, 'Instrumental', { size: 19, weight: 700, anchor: 'middle' }) + para(138, 296, 150, 'male breadwinner', { size: 17, anchor: 'middle' }).svg;
  s += box(240, 186, 172, 196, { fill: C.cream, sw: 2 }) + label(326, 256, 'Expressive', { size: 19, weight: 700, anchor: 'middle' }) + para(326, 284, 150, 'female, emotional and caring', { size: 17, anchor: 'middle' }).svg;
  s += headPanel(466, 108, 404, 300, 'The triple shift', { fill: C.mustard, size: 20 }).svg;
  [['Paid work', C.tealLight], ['Domestic work', C.cream], ['Emotional work', C.mustard]].forEach(([l, f], i) => { s += box(500, 186 + i * 66, 336, 56, { fill: f, sw: 2 }) + label(668, 222 + i * 66, l, { size: 18, weight: 700, anchor: 'middle' }); });
  s += label(668, 400, 'Duncombe and Marsden', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  s += arrow(438, 258, 462, 258, { w: 4 });
  const n = note(428, 'Power inside families', ['Even where tasks are shared, men often make the biggest financial decisions', 'Dobash and Dobash: domestic violence is linked to male power; the WHO estimates about 1 in 3 women worldwide have experienced physical or sexual violence']);
  add('05-roles-triple-shift',
    svg(900, Math.round(428 + n.h + 24), 'From separate roles to the triple shift', s + n.svg),
    'Left: Parsons’ traditional roles, the instrumental male breadwinner and the expressive, caring female. Right: the triple shift of paid work, domestic work and emotional work carried by many women. Below, men often make the biggest financial decisions, and Dobash and Dobash link domestic violence to male power.',
    'Many women now carry three loads: paid work, domestic work and emotional work.',
    '## Gender, age and family life');
}

// 06 Worked example: 3-mark developed point
{
  add('06-social-control-three-marks',
    flowFig('One point, developed in three steps', {
      sub: 'Explain one way families act as agents of social control [3]',
      steps: [
        { head: 'Point (1 mark)', body: 'Marxists argue that families teach children to obey parental authority.' },
        { head: 'Develop (1 mark)', body: 'This prepares them to accept the authority of employers and the state without questioning it.' },
        { head: 'Consequence (1 mark)', body: 'This helps keep an unequal capitalist society stable.' },
      ],
    }),
    'A three-mark answer as three linked steps: families teach children to obey parental authority; this prepares them to accept employers and the state; this keeps an unequal capitalist society stable.',
    'One point, developed in three linked steps, earns all three marks.',
    '## Worked example 1: a short-answer question');
}

// 07 Command words
{
  let s = '';
  const cw = [
    ['Identify / name', 'A brief point, no development', C.tealLight],
    ['Describe', 'Give the features, with detail', C.teal],
    ['Explain', 'A reason, developed with a linked consequence or example', C.cream],
    ['Discuss / evaluate', 'Arguments on more than one side, then a judgement', C.mustard],
  ];
  cw.forEach(([h, d, f], i) => {
    const x = 30 + i * 214, hh = 150 + i * 50, y = 108 + (3 - i) * 50;
    s += box(x, y, 198, hh, { fill: f });
    const hp = para(x + 99, y + 34, 180, h, { size: 18, weight: 700, anchor: 'middle' });
    s += hp.svg + para(x + 99, y + 34 + hp.h + 10, 174, d, { size: 16, anchor: 'middle' }).svg;
  });
  s += `<line x1="40" y1="${108 + 3 * 50 + 180}" x2="860" y2="${108 + 3 * 50 + 180}" stroke="${C.ink}" stroke-width="0"/>`;
  s += arrow(60, 450, 840, 450, { w: 4, color: C.tealDark, marker: 'ahT' }) + label(450, 482, 'more development and judgement needed', { size: 17, weight: 600, anchor: 'middle', fill: C.tealDark });
  add('07-command-words',
    svg(900, 506, 'Command words: how much to write', s),
    'Four steps rising from left to right: identify or name needs a brief point; describe gives features with detail; explain gives a developed reason; discuss or evaluate weighs more than one side and reaches a judgement.',
    'The command word tells you how far to develop your answer.',
    '## Exam technique');
}
