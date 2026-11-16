import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'a-level-sociology-9699-education-society-and-the-curriculum';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- Local layout helpers (sociology figures: wrapped text, tables, flows, cards) ----
const esc = (s) => String(s).replace(/&(?![a-z]+;|#\d+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const CW = 0.505, CWB = 0.555; // average glyph width / font size for Inter (regular, bold)
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

// 01 Paper 3 structure
{
  const facts = [['1 h 15 min', ''], ['50 marks', ''], ['21%', 'of the A Level']];
  let s = '';
  facts.forEach(([a, b], i) => { const x = 30 + i * 286; s += `<rect x="${x}" y="108" width="268" height="76" rx="12" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2.5"/>` + label(x + 134, b ? 142 : 154, a, { size: 25, weight: 700, anchor: 'middle', fill: C.tealDark }) + (b ? label(x + 134, 170, b, { size: 16, anchor: 'middle', fill: C.muted }) : ''); });
  const qs = [['Q1', 'Short answer', 'AO1', 70], ['Q2', 'Two explanations for an issue, theory or viewpoint', 'AO1, AO2', 100], ['Q3', 'Two arguments against a view in a quotation', 'AO2, AO3', 130], ['Q4', 'Essay: 26 marks', 'AO1, AO2, AO3', 240]];
  const base = 520;
  qs.forEach(([q, d, ao, h], i) => {
    const x = 30 + i * 213, w = 201;
    s += `<rect x="${x}" y="${base - h}" width="${w}" height="${h}" rx="10" fill="${i === 3 ? C.mustard : C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + label(x + w / 2, base - h + 34, q, { size: 22, weight: 700, anchor: 'middle' });
    s += para(x + w / 2, base + 30, w - 16, d, { size: 16, anchor: 'middle' }).svg + label(x + w / 2, base + 104, ao, { size: 16, anchor: 'middle', weight: 700, fill: C.tealDark });
  });
  s += label(30, 236, 'Four compulsory questions, increasing in marks', { size: 19, weight: 700 }) + `<line x1="30" y1="${base}" x2="870" y2="${base}" stroke="${C.ink}" stroke-width="3"/>`;
  const n = note(base + 130, 'Assessment objective weightings', 'AO1 36%, AO2 28%, AO3 36%. Command words: Describe, Evaluate, Explain, Give. Your teacher will confirm how the other 24 marks are split.');
  add('01-paper-3-structure',
    svg(900, Math.round(base + 130 + n.h + 24), 'How Paper 3 Education works', s + n.svg),
    'Paper 3 lasts 1 hour 15 minutes, is worth 50 marks and 21% of the A Level. Four compulsory questions rise in marks from a short answer (AO1) to two explanations, two arguments against a quotation, and a 26-mark essay testing AO1, AO2 and AO3.',
    'Four compulsory questions climb in marks to a 26-mark essay.',
    '## How Paper 3 works');
}

// 02 Parsons: school as a bridge
{
  const col = (x, head, f, rows) => {
    let s = `<rect x="${x}" y="160" width="250" height="300" rx="14" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + `<path d="${roundTop(x + 1.25, 161.25, 247.5, 58)}" fill="${f}"/>` + label(x + 125, 199, head, { size: 22, weight: 700, anchor: 'middle' });
    rows.forEach(([a, b], i) => { s += label(x + 125, 262 + i * 104, a, { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark }) + para(x + 125, 288 + i * 104, 220, b, { size: 16, anchor: 'middle' }).svg; });
    return s;
  };
  let s = col(30, 'Family', C.cream, [['Particularistic', 'judged as a unique person'], ['Ascribed status', 'fixed at birth']]) +
    `<path d="M300,250 L560,250 L560,220 L612,310 L560,400 L560,370 L300,370 Z" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>` +
    label(440, 300, 'School', { size: 24, weight: 700, anchor: 'middle' }) + label(440, 328, 'the bridge', { size: 17, anchor: 'middle' }) +
    col(620, 'Wider society', C.teal, [['Universalistic', 'everyone judged by the same standards'], ['Achieved status', 'earned through effort and ability']]);
  s += label(450, 132, 'Parsons: school teaches the standards of adult society', { size: 18, anchor: 'middle', fill: C.muted, italic: true });
  const n = note(484, 'Role allocation (Davis and Moore, 1945)', 'Exams sift and sort pupils so the most able reach the most important positions. Tumin: higher pay does not prove a job is more important.');
  add('02-parsons-bridge',
    svg(900, Math.round(484 + n.h + 24), 'Parsons: school as a bridge', s + n.svg),
    'In the family a child is judged by particularistic standards and has ascribed status; school acts as a bridge to wider society, where everyone is judged by universalistic standards and status is achieved. Below, Davis and Moore’s role allocation and Tumin’s criticism.',
    'School moves children from family standards to the universal standards of society.',
    '## 5.1 Functionalism: value consensus, solidarity and role allocation');
}

// 03 Correspondence principle
{
  const pairs = [['Pupils accept teachers’ authority', 'Workers accept managers’ authority'], ['Pupils work for grades', 'Workers work for wages'], ['Higher grades for perseverance, consistency, punctuality', 'Prepares an obedient, compliant workforce']];
  let s = `<rect x="30" y="108" width="370" height="56" rx="12" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + label(215, 144, 'School', { size: 22, weight: 700, anchor: 'middle' }) +
    `<rect x="500" y="108" width="370" height="56" rx="12" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` + label(685, 144, 'Work', { size: 22, weight: 700, anchor: 'middle' });
  pairs.forEach(([a, b], i) => {
    const y = 184 + i * 104;
    s += `<rect x="30" y="${y}" width="370" height="86" rx="12" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2.5"/>` + para(215, y + 49 - (para(0, 0, 330, a, { size: 18 }).n - 1) * 11, 330, a, { size: 18, anchor: 'middle' }).svg;
    s += `<rect x="500" y="${y}" width="370" height="86" rx="12" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2.5"/>` + para(685, y + 49 - (para(0, 0, 330, b, { size: 18 }).n - 1) * 11, 330, b, { size: 18, anchor: 'middle' }).svg;
    s += arrow(406, y + 43, 494, y + 43, { w: 3.5, color: C.olive, marker: 'ahO' }) + `<line x1="420" y1="${y + 43}" x2="400" y2="${y + 43}" stroke="${C.olive}" stroke-width="3.5"/>` + label(450, y + 32, 'mirrors', { size: 15, weight: 700, anchor: 'middle', fill: C.olive });
  });
  const y3 = 184 + 3 * 104;
  const r = cardRow(y3 + 6, [
    { head: 'Myth of meritocracy', fill: C.cream, body: 'Schools claim to reward ability fairly but reproduce inequality.' },
    { head: 'Willis (1977)', fill: C.tealLight, body: '“The lads” resisted school, challenging passive pupils, yet still ended up in manual jobs.' },
  ]);
  add('03-correspondence-principle',
    svg(900, Math.round(y3 + 6 + r.h + 24), 'Bowles and Gintis: the correspondence principle', s + r.svg),
    'School life mirrors work life: pupils accept teachers’ authority as workers accept managers’, pupils work for grades as workers work for wages, and grades reward perseverance and punctuality, producing an obedient workforce. Willis shows pupils can resist, though reproduction still happens.',
    'For Bowles and Gintis, school life mirrors work life under capitalism.',
    '## 5.1 Marxism: ideological control and cultural reproduction');
}

// 04 Social democratic vs New Right
add('04-new-right-social-democratic',
  versusFig('Education and the economy', {
    left: { head: 'Social democratic', fill: C.teal, sub: 'Halsey', items: [
      'Equality of opportunity through state action',
      'Comprehensive schools from the 1960s (England and Wales)',
      '**Human capital theory** (Schultz; Becker, 1964): education raises productivity, so fairness and growth go together',
      '**Critic:** Wolf (2002) doubts more spending automatically drives growth'] },
    right: { head: 'New Right', fill: C.cream, sub: 'Chubb and Moe (1990)', items: [
      'State-run schools lack competition, so have little reason to improve',
      '**Marketisation:** parental choice and competition for pupils',
      'Education Reform Act 1988: National Curriculum, parental choice, local budgets',
      '**Critic:** Gewirtz, Ball and Bowe (1995): middle-class “privileged/skilled choosers” gain most'] },
  }),
  'Social democrats such as Halsey support state action for equal opportunity and draw on human capital theory; Wolf questions the link to growth. The New Right, following Chubb and Moe, wants marketisation through choice and competition; Gewirtz, Ball and Bowe show choice favours middle-class parents.',
  'Social democrats want the state to equalise; the New Right wants markets to raise standards.',
  '## 5.1 New Right and social democratic views on education and the economy');

// 05 Absolute vs relative mobility (schematic)
{
  const bar = (x, mc, head) => {
    const H = 300, y0 = 150, mh = H * mc;
    return `<rect x="${x}" y="${y0}" width="160" height="${H}" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` + `<rect x="${x}" y="${y0}" width="160" height="${mh}" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` +
      label(x + 80, y0 + mh / 2 + 6, 'middle-class jobs', { size: 15, anchor: 'middle', weight: 600 }) + label(x + 80, y0 + mh + (H - mh) / 2 + 6, 'working-class jobs', { size: 15, anchor: 'middle', weight: 600 }) + label(x + 80, y0 + H + 30, head, { size: 18, weight: 700, anchor: 'middle' });
  };
  let s = label(275, 132, 'Occupational structure (schematic)', { size: 16, anchor: 'middle', fill: C.muted, italic: true }) +
    bar(60, 0.35, 'Earlier') + bar(330, 0.6, 'Later') + arrow(230, 300, 320, 300, { w: 4 }) + label(275, 290, 'more', { size: 15, anchor: 'middle', weight: 600 }) + label(275, 322, 'office jobs', { size: 15, anchor: 'middle', weight: 600 });
  const R = (y, head, b, f) => `<rect x="540" y="${y}" width="330" height="140" rx="12" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2.5"/><rect x="540" y="${y}" width="10" height="140" rx="4" fill="${f}"/>` + label(566, y + 34, head, { size: 20, weight: 700 }) + para(566, y + 62, 290, b, { size: 16 }).svg;
  s += R(140, 'Absolute mobility rose', 'The total amount of upward movement grew as the occupational structure changed.', C.tealDark) +
    R(296, 'Relative mobility stable', 'Middle-class children kept their head start: class background still mattered.', C.rust);
  const n = note(500, 'Goldthorpe et al.: Oxford Mobility Study (1972; reported 1980)', ['Cohorts born in 1958 and 1970: family background did not weaken and may have strengthened', '“Great Gatsby curve” (Krueger, 2012): more unequal countries tend to have less mobility between generations']);
  add('05-absolute-relative-mobility',
    svg(900, Math.round(500 + n.h + 24), 'Absolute and relative mobility', s + n.svg),
    'A schematic of the occupational structure growing more middle-class jobs over time, so absolute upward mobility rises, while relative mobility stays stable because middle-class children keep their head start. Below, Goldthorpe’s study, the 1958 and 1970 cohort comparison and the Great Gatsby curve.',
    'More upward movement does not mean fairer chances: relative mobility can stay the same.',
    '## 5.2 Meritocracy, life chances and social mobility');
}

// 06 Diploma disease cycle
{
  const cx = 450, cy = 330, R = 160;
  const nodes = [['More people gain', 'a qualification', C.teal], ['Employers ask for', 'a higher one', C.cream], ['Each qualification', 'is worth less', C.cream], ['People seek', 'higher credentials', C.tealLight]];
  const ang = [-90, 0, 90, 180].map((a) => (a * Math.PI) / 180);
  let s = '';
  const g = [0.75, 0.42, 0.75, 0.42];
  for (let i = 0; i < 4; i++) {
    const a1 = ang[i] + g[i], a2 = ang[(i + 1) % 4] - g[(i + 1) % 4] + (i === 3 ? 2 * Math.PI : 0);
    s += `<path d="M${cx + R * Math.cos(a1)},${cy + R * Math.sin(a1)} A${R},${R} 0 0 1 ${cx + R * Math.cos(a2)},${cy + R * Math.sin(a2)}" fill="none" stroke="${C.ink}" stroke-width="3.5" marker-end="url(#ah)"/>`;
  }
  nodes.forEach(([a, b, f], i) => {
    const x = cx + R * Math.cos(ang[i]) * 1.15, y = cy + R * Math.sin(ang[i]);
    s += `<rect x="${x - 110}" y="${y - 38}" width="220" height="76" rx="14" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + label(x, y - 6, a, { size: 18, weight: 700, anchor: 'middle' }) + label(x, y + 20, b, { size: 18, weight: 700, anchor: 'middle' });
  });
  s += label(cx, cy + 6, 'qualification', { size: 18, weight: 700, anchor: 'middle', fill: C.rust }) + label(cx, cy + 30, 'inflation', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  const n = note(548, 'Consequence', 'Gaining a qualification may improve life chances less than before. Expanding education alone does not equalise chances if every group gains more qualifications.');
  add('06-diploma-disease',
    svg(900, Math.round(548 + n.h + 24), 'Dore: the diploma disease', label(450, 112, 'Dore, The Diploma Disease (1976)', { size: 17, anchor: 'middle', fill: C.muted, italic: true }) + s + n.svg),
    'A cycle: more people gain a qualification, employers ask for a higher one, each qualification is worth less, and people seek higher credentials, so qualification inflation continues.',
    'As credentials spread, employers raise the bar and each one is worth less.',
    '## 5.2 Meritocracy, life chances and social mobility');
}

// 07 Influences on the curriculum and three curricula
{
  const inf = ['Power', 'Status', 'Culture', 'Economic demands', 'Gender'];
  let s = '';
  const ws = [140, 140, 150, 220, 150]; let px = 30;
  inf.forEach((f, i) => { const x = px, w = ws[i]; px += w + 10; s += `<rect x="${x}" y="108" width="${w}" height="54" rx="27" fill="${C.ink}"/>` + label(x + w / 2, 142, f, { size: 17, weight: 700, anchor: 'middle', fill: '#ffffff' }); s += arrow(x + w / 2, 166, 450 + (x + w / 2 - 450) * 0.35, 214, { w: 2.5 }); });
  s += `<rect x="230" y="218" width="440" height="66" rx="14" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + label(450, 250, 'Content of the curriculum', { size: 21, weight: 700, anchor: 'middle' }) + label(450, 274, 'not neutral (Apple, 1979)', { size: 16, anchor: 'middle' });
  s += [165, 450, 735].map((x) => arrow(450 + (x - 450) * 0.4, 288, x, 324, { w: 3 })).join('');
  const r = cardRow(328, [
    { head: 'Ethnocentric', fill: C.cream, body: 'Prioritises one ethnic group’s culture, history and language. **Coard (1971):** West Indian children’s culture treated as second-rate.' },
    { head: 'Gendered', fill: C.cream, body: 'Follows gender stereotypes. **Spender (1982):** women’s contributions left out or played down.' },
    { head: 'Hidden', fill: C.cream, body: 'Learned from how school is organised: obedience, punctuality, competition. **Jackson (1968)** coined the term.' },
  ]);
  add('07-curriculum-influences',
    svg(900, Math.round(328 + r.h + 24), 'What shapes the curriculum?', s + r.svg),
    'Power, status, culture, economic demands and gender shape the content of the curriculum, which Apple argues is not neutral. Three forms of cultural reproduction follow: the ethnocentric curriculum (Coard), the gendered curriculum (Spender) and the hidden curriculum (Jackson).',
    'Curriculum content reflects power, and reproduces culture through ethnocentric, gendered and hidden forms.',
    '## 5.3 Knowledge, the curriculum and cultural reproduction');
}

// 08 Bourdieu: cultural capital
{
  const r = cardRow(140, [
    { head: 'Embodied', fill: C.teal, body: 'Manner, speech, tastes' },
    { head: 'Objectified', fill: C.teal, body: 'Books, art, instruments' },
    { head: 'Institutionalised', fill: C.teal, body: 'Qualifications' },
  ], { size: 18 });
  let s = label(450, 124, 'Three forms of cultural capital (Bourdieu, 1986)', { size: 19, weight: 700, anchor: 'middle' }) + r.svg;
  const y2 = 140 + r.h + 30;
  const ch = hchain(y2, [
    { head: 'Habitus', body: 'tastes and dispositions learned early at home', fill: C.tealLight },
    { head: 'Curriculum and tests', body: 'reward middle-class cultural capital', fill: C.panel },
    { head: 'Middle-class pupils start ahead', body: 'home advantage becomes qualifications', fill: C.mustard },
  ], { ag: 44 });
  const n = note(y2 + ch.h + 22, 'Remember', 'Cultural capital is cultural knowledge and dispositions, not money. Pupils can also gain cultural capital at school.');
  add('08-cultural-capital',
    svg(900, Math.round(y2 + ch.h + 22 + n.h + 24), 'Cultural capital and the curriculum', s + ch.svg + n.svg),
    'Bourdieu’s three forms of cultural capital: embodied (manner, speech, tastes), objectified (books, art, instruments) and institutionalised (qualifications). A chain shows habitus learned at home meeting a curriculum that rewards middle-class cultural capital, so middle-class pupils start ahead.',
    'Schools turn middle-class home culture into qualifications.',
    '## 5.3 Knowledge, the curriculum and cultural reproduction');
}
