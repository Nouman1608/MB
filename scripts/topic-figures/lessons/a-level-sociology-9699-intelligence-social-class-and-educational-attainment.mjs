import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'a-level-sociology-9699-intelligence-social-class-and-educational-attainment';
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

// 01 Competing ideas of intelligence
{
  const P = (x, head, sub, art, txt) => panel(x, 108, 268, 380) + label(x + 134, 144, head, { size: 21, weight: 700, anchor: 'middle' }) + label(x + 134, 168, sub, { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 }) + art + para(x + 134, 432, 240, txt, { size: 16, anchor: 'middle', fill: C.muted }).svg;
  // g: one hub feeding tests
  const gA = (x) => `<circle cx="${x + 134}" cy="240" r="38" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + label(x + 134, 251, 'g', { size: 30, weight: 700, anchor: 'middle', italic: true }) +
    [-80, -27, 27, 80].map((dx) => arrow(x + 134 + dx * 0.3, 280, x + 134 + dx, 330, { w: 2.5 }) + `<rect x="${x + 134 + dx - 22}" y="334" width="44" height="30" rx="6" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2"/>`).join('') + label(x + 134, 384, 'different tests', { size: 15, anchor: 'middle', fill: C.muted });
  // Gardner: several separate circles
  const names = ['linguistic', 'logical-mathematical', 'musical', 'spatial'];
  const gdA = (x) => names.map((n, i) => { const yy = 188 + i * 44; return `<rect x="${x + 34}" y="${yy}" width="200" height="34" rx="17" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2"/>` + label(x + 134, yy + 23, n, { size: 15, anchor: 'middle', weight: 600 }); }).join('') + label(x + 134, 384, 'schools reward only some', { size: 15, anchor: 'middle', fill: C.muted });
  // Sternberg: triangle
  const stA = (x) => { const cx = x + 134; return `<path d="M${cx},205 L${cx + 95},355 L${cx - 95},355 Z" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>` +
    label(cx, 198, 'analytical', { size: 15, anchor: 'middle', weight: 700 }) + label(cx - 95, 376, 'creative', { size: 15, anchor: 'middle', weight: 700 }) + label(cx + 95, 376, 'practical', { size: 15, anchor: 'middle', weight: 700 }); };
  const n = note(508, 'Gould, The Mismeasure of Man (1981)', 'IQ and g are **reifications**: a number is mistaken for a real quality inside the head. If definitions differ, a test measures only the version its designers chose.');
  add('01-defining-intelligence',
    svg(900, Math.round(508 + n.h + 24), 'What is intelligence?',
      P(30, 'One general ability', 'Spearman (1904)', gA(30), 'Scores on different tests correlate.') +
      P(316, 'Multiple intelligences', 'Gardner (1983)', gdA(316), 'Hard to test, so difficult to check.') +
      P(602, 'Triarchic theory', 'Sternberg (1985)', stA(602), 'Three kinds of intelligence.') + n.svg),
    'Three ideas of intelligence: Spearman’s single general factor g underlying different tests; Gardner’s multiple intelligences such as linguistic, logical-mathematical, musical and spatial, only some of which schools reward; and Sternberg’s triarchic theory of analytical, creative and practical intelligence. Gould calls IQ and g reifications.',
    'Psychologists disagree on what intelligence is, so tests measure one chosen version.',
    '## 6.1 The difficulties in defining intelligence');
}

// 02 Social factors shaping IQ scores
add('02-iq-social-factors',
  cardsFig('How social factors shape IQ scores', {
    ncol: 3, size: 16, headSize: 19,
    cards: [
      { head: 'Cultural bias', fill: C.cream, body: 'Early eleven-plus items on household servants and classical composers favoured middle-class children.' },
      { head: 'Language', fill: C.cream, body: 'Tests in the school’s standard language favour children who use it at home.' },
      { head: 'Test-wiseness', fill: C.cream, body: 'Practice and coaching raise scores.' },
      { head: 'The Flynn effect', fill: C.teal, body: 'Average scores rose across many countries in the 20th century (Flynn, 1987: 14 nations). Genes do not change that fast.' },
      { head: 'Flawed research', fill: C.teal, body: 'Kamin (1974) questioned Burt’s twin data; Hearnshaw (1979): most post-war data unreliable or fraudulent.' },
      { head: '“Culture-fair” tests?', fill: C.tealLight, body: 'Non-verbal puzzles still reward skills practised at home and in school.' },
    ],
  }),
  'Six cards: cultural bias in early eleven-plus questions, language, test-wiseness from practice and coaching, the Flynn effect of rising scores, Kamin’s and Hearnshaw’s challenge to Burt’s twin studies, and the limits of culture-fair tests.',
  'IQ scores reflect culture, language, practice and environment, not just ability.',
  '## 6.1 IQ tests and the influence of social factors');

// 03 The circular argument
{
  const cx = 450, cy = 330;
  const box = (x, y, w, h, t1, t2, f) => `<rect x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" rx="14" fill="${f}" stroke="${C.ink}" stroke-width="3"/>` + label(x, y - 4, t1, { size: 19, weight: 700, anchor: 'middle' }) + label(x, y + 22, t2, { size: 16, anchor: 'middle' });
  let s = box(cx, 170, 330, 76, 'IQ tests', 'judged valid…', C.mustard) + box(cx, 470, 330, 76, 'School success', '…explained by IQ', C.teal);
  s += `<path d="M${cx + 170},175 C${cx + 300},220 ${cx + 300},420 ${cx + 172},462" fill="none" stroke="${C.ink}" stroke-width="3.5" marker-end="url(#ah)"/>` + label(cx + 285, 300, 'because they', { size: 16, anchor: 'start', weight: 600 }) + label(cx + 285, 322, 'predict it', { size: 16, anchor: 'start', weight: 600 });
  s += `<path d="M${cx - 170},465 C${cx - 300},420 ${cx - 300},220 ${cx - 172},178" fill="none" stroke="${C.ink}" stroke-width="3.5" marker-end="url(#ah)"/>` + label(cx - 285, 300, 'then used', { size: 16, anchor: 'end', weight: 600 }) + label(cx - 285, 322, 'to explain it', { size: 16, anchor: 'end', weight: 600 });
  s += `<rect x="${cx - 120}" y="${cy - 34}" width="240" height="68" rx="12" fill="${C.cream}" stroke="${C.rust}" stroke-width="2.5"/>` + label(cx, cy - 6, 'But class shapes', { size: 17, weight: 700, anchor: 'middle', fill: C.rust }) + label(cx, cy + 18, 'both scores and results', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  const r = cardRow(540, [
    { head: 'Hereditarian view', fill: C.cream, body: '**Jensen (1969):** about 80% of IQ variation genetic. **Herrnstein and Murray (1994):** a “cognitive elite”.' },
    { head: 'Critics', fill: C.tealLight, body: 'Heritability within a group says nothing about why groups differ; middle-class scores may reflect resources, language and test familiarity.' },
  ], { size: 16 });
  add('03-circular-argument',
    svg(900, Math.round(540 + r.h + 24), 'Does intelligence explain attainment?', s + r.svg),
    'A loop: IQ tests are judged valid because they predict school success, and are then used to explain school success, while class shapes both. Below, the hereditarian claims of Jensen and of Herrnstein and Murray, and critics’ replies.',
    'Using IQ to explain school success can be circular when class shapes both.',
    '## 6.1 Intelligence as an influence on educational attainment');
}

// 04 Material factors
add('04-material-factors',
  cardsFig('Material deprivation and attainment', {
    ncol: 3, size: 16, headSize: 19,
    cards: [
      { head: 'Housing', fill: C.cream, body: 'Overcrowding leaves no quiet place to study; temporary housing means changing schools.' },
      { head: 'Diet and health', fill: C.cream, body: 'Hunger and illness reduce concentration and increase absence.' },
      { head: 'Hidden costs', fill: C.cream, body: 'Uniforms, trips, books, devices and internet access.' },
      { head: 'Paid work', fill: C.cream, body: 'Older pupils may work part-time or leave education early to earn.' },
      { head: 'School choice', fill: C.cream, body: 'Houses near high-performing schools cost more. Gewirtz, Ball and Bowe (1995): middle-class parents keep their advantage.' },
      { head: 'But…', fill: C.teal, body: 'Many poor children succeed, and money also buys tutors, books and trips that build cultural capital.' },
    ],
  }),
  'Five material factors that affect attainment: housing, diet and health, hidden costs of schooling, paid work and school choice. A sixth card notes that many poor children succeed and that material and cultural factors overlap.',
  'Learning needs space, time and resources that poverty takes away.',
  '## 6.2 Material factors and educational attainment');

// 05 Bernstein codes + deprivation vs capital
{
  const codes = compareFig('x', {
    y0: 140, labelW: 0, size: 17,
    cols: [{ head: 'Restricted code', fill: C.cream }, { head: 'Elaborated code', fill: C.teal }],
    rows: [{ cells: ['Short, context-bound, relies on shared understanding', 'Explicit, detailed, context-free; used by schools and more by middle-class children'] }],
  });
  const inner = codes.slice(codes.indexOf('</text>', codes.indexOf('font-size="31"')) + 7, codes.lastIndexOf('</svg>'));
  const hh = Number(/viewBox="0 0 900 (\d+)"/.exec(codes)[1]) - 24;
  let s = label(30, 128, 'Bernstein (1971): speech codes', { size: 19, weight: 700, fill: C.tealDark }) + inner +
    label(30, hh + 6, 'Not inferior: Bernstein denied offering a deficit account.', { size: 16, italic: true, fill: C.muted });
  const y2 = hh + 40;
  const L = headPanel(30, y2, 404, 290, 'Cultural deprivation', { fill: C.cream, size: 20 });
  const R = headPanel(466, y2, 404, 290, 'Cultural capital', { fill: C.teal, size: 20 });
  s += L.svg + R.svg + label(232, y2 + L.hh + 30, 'the home lacks something', { size: 17, anchor: 'middle', weight: 700, fill: C.olive }) + label(668, y2 + R.hh + 30, 'the school rewards one class’s culture', { size: 17, anchor: 'middle', weight: 700, fill: C.tealDark }) +
    bullets(50, y2 + L.hh + 64, 366, ['**Douglas (1964):** parental attitudes', '**Hyman; Sugarman:** values such as immediate gratification', '**Keddie (1973):** different, not deprived'], { size: 16, gap: 8 }).svg +
    bullets(486, y2 + R.hh + 64, 366, ['**Bourdieu and Passeron:** middle-class culture rewarded as if natural ability', '**Lareau (2003):** concerted cultivation versus natural growth', '**Sullivan (2001):** a direct class effect remained'], { size: 16, gap: 8 }).svg +
    `<circle cx="450" cy="${y2 + 145}" r="24" fill="${C.ink}"/>` + label(450, y2 + 152, 'vs', { size: 19, weight: 700, fill: '#ffffff', anchor: 'middle' });
  add('05-cultural-explanations',
    svg(900, y2 + 316, 'Cultural explanations of class differences', s),
    'Top: Bernstein’s restricted code is short and context-bound, while the elaborated code is explicit and used by schools; he denied the restricted code was inferior. Below: cultural deprivation says the home lacks something (Douglas, Hyman, Sugarman, with Keddie’s criticism); cultural capital says the school rewards one class’s culture (Bourdieu, Lareau, Sullivan).',
    'Cultural deprivation blames the home; cultural capital points at what the school rewards.',
    '## 6.2 Cultural explanations');
}

// 06 Labelling and the self-fulfilling prophecy
add('06-labelling',
  flowFig('Labelling and the self-fulfilling prophecy', {
    steps: [
      { head: 'Teacher judges against the “ideal pupil”', body: 'Becker (1952): an image matching middle-class behaviour. Rist (1970): kindergarten tables by day eight, on appearance and background.' },
      { head: 'Label and placement', body: 'Ball (1981): non-manual pupils more likely to reach the top band than working-class pupils of similar ability.' },
      { head: 'Different treatment', body: 'Lower bands meet lower expectations; triage writes some pupils off (Gillborn and Youdell, 2000).' },
      { head: 'Pupil responses', body: 'Hargreaves (1967): low-stream delinquent subculture. Lacey (1970): differentiation and polarisation.' },
      { head: 'The prophecy is fulfilled', body: 'The pupil comes to fit the label.', fill: C.cream, edge: C.olive },
    ],
    foot: { head: 'Not automatic', text: 'Some pupils reject negative labels and work harder; Willis’s lads chose their culture partly because they expected manual work.' },
  }),
  'Five steps: a teacher judges pupils against a middle-class ideal pupil, labels and places them in bands or sets, treats them differently, pupils respond by forming subcultures, and the pupil comes to fit the label. Pupils can reject labels.',
  'Labels can turn into outcomes, but pupils can resist them.',
  '## 6.2 In-school factors');

// 07 Compensatory education timeline + Perry result
{
  const ev = [[1962, 'Perry Preschool', '1962–1967, Michigan'], [1965, 'Head Start', 'USA, War on Poverty'], [1967, 'Plowden Report', '“positive discrimination”'], [1998, 'Sure Start; EAZs', 'England and Wales'], [2011, 'Pupil Premium', 'money per pupil']];
  const x0 = 90, x1 = 810, sc = (y) => x0 + ((y - 1962) / (2011 - 1962)) * (x1 - x0);
  const ly = 250;
  let s = `<line x1="50" y1="${ly}" x2="850" y2="${ly}" stroke="${C.ink}" stroke-width="4"/>`;
  const bx = [30, 205, 380, 555, 730];
  ev.forEach(([yr, h, b], i) => {
    const x = sc(yr), up = i % 2 === 0;
    const by = up ? 108 : ly + 36;
    s += `<line x1="${bx[i] + 70}" y1="${up ? by + 84 : by}" x2="${x}" y2="${up ? ly - 12 : ly + 12}" stroke="${C.ink}" stroke-width="2"/>`;
    s += `<rect x="${bx[i]}" y="${by}" width="140" height="84" rx="10" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2.5"/>` + para(bx[i] + 70, by + 28, 128, h, { size: 16, weight: 700, anchor: 'middle' }).svg + para(bx[i] + 70, by + 28 + para(0, 0, 128, h, { size: 16, weight: 700 }).h, 128, b, { size: 15, anchor: 'middle', fill: C.muted }).svg;
    s += `<circle cx="${x}" cy="${ly}" r="10" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`;
  });
  // Perry bars
  const by0 = 410, bh = 200, base = by0 + bh;
  s += label(30, by0 - 10, 'Perry Preschool: graduated high school by age 19', { size: 19, weight: 700, fill: C.tealDark });
  [['Pre-school group', 67, C.teal], ['Control group', 49, C.cream]].forEach(([n, v, f], i) => {
    const w = (v / 100) * 560, y = by0 + 20 + i * 80;
    s += `<rect x="230" y="${y}" width="${w}" height="56" rx="8" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + label(215, y + 35, n, { size: 17, weight: 700, anchor: 'end' }) + label(230 + w + 12, y + 37, `${v}%`, { size: 22, weight: 700 });
  });
  const n = note(base + 6, 'Did it work?', 'Head Start’s early IQ gains often faded, which Jensen used to argue IQ cannot be boosted; Perry’s gains showed in life outcomes. Critics say many programmes assume a cultural deficit and cannot offset wider inequality.');
  add('07-compensatory-education',
    svg(900, Math.round(base + 6 + n.h + 24), 'Compensatory education', s + n.svg),
    'A timeline of compensatory programmes: Perry Preschool (1962 to 1967), Head Start (1965), the Plowden Report (1967), Sure Start and Education Action Zones (1998) and the Pupil Premium (2011). Bars show 67% of the Perry pre-school group graduated high school by 19, against 49% of the control group.',
    'Compensatory programmes may show their benefits in life outcomes more than in test scores.',
    '## 6.2 Compensatory education programmes');
}
