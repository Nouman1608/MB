import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'a-level-sociology-methods-in-context';
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

// 01 Paper 1 structure
{
  let s = '', y = 104;
  const tiles = [['2 hours', 'written exam'], ['80 marks', 'in total'], ['33.3%', 'of the A-level']];
  const tw = (840 - 2 * 16) / 3;
  tiles.forEach(([a, b], i) => {
    const x = 30 + i * (tw + 16);
    s += panel(x, y, tw, 84) + t(x + tw / 2, y + 42, a, { size: 27, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(x + tw / 2, y + 68, b, { size: 16, anchor: 'middle', fill: C.muted });
  });
  y += 84 + 40;
  const segs = [['Education', 50, C.teal, ['short answer and', 'extended writing'], '3.1.1'], ['Methods in Context', 20, C.mustard, 'extended writing', '3.1.2'], ['Theory and Methods', 10, C.cream, 'extended writing', '3.1.3']];
  let x = 30;
  const bx = [];
  segs.forEach(([n, m, f]) => {
    const w = (840 * m) / 80;
    s += `<rect x="${x}" y="${y}" width="${w}" height="64" fill="${f}" stroke="${C.ink}" stroke-width="3"/>` + t(x + w / 2, y + 41, `${m}`, { size: 25, weight: 700, anchor: 'middle' });
    bx.push(x + w / 2); x += w;
  });
  s += label(30, y - 12, 'marks', { size: 16, fill: C.muted });
  y += 64;
  const cw = (840 - 2 * 16) / 3, cy = y + 56;
  segs.forEach(([n, m, f, d, code], i) => {
    const cx = 30 + i * (cw + 16);
    s += path(`M${bx[i]},${y + 4} L${bx[i]},${y + 22} L${cx + cw / 2},${y + 36} L${cx + cw / 2},${cy - 4}`, { stroke: C.ink, w: 2.5 });
    s += `<rect x="${cx}" y="${cy}" width="${cw}" height="126" rx="14" fill="${i === 1 ? C.cream : C.panel}" stroke="${i === 1 ? C.olive : C.panelEdge}" stroke-width="${i === 1 ? 3 : 2.5}"/>`;
    s += t(cx + cw / 2, cy + 34, `${code} ${n}`, { size: 18, weight: 700, anchor: 'middle' });
    s += t(cx + cw / 2, cy + 64, `${m} marks`, { size: 18, weight: 600, anchor: 'middle', fill: C.tealDark });
    s += tl(cx + cw / 2, Array.isArray(d) ? cy + 92 : cy + 98, [].concat(d), { size: 16, anchor: 'middle', fill: C.muted }, 20);
  });
  y = cy + 126;
  add('01-paper-1-structure', svg(900, y + 28, 'Paper 1: Education with Theory and Methods', s),
    'Paper 1 is a 2-hour written exam worth 80 marks and 33.3% of the A-level. Education carries 50 marks, Methods in Context 20 marks and Theory and Methods 10 marks.',
    'Methods in Context is a 20-mark extended-writing question within Paper 1.',
    '## Where this fits in 7192');
}

// 02 Two bodies of knowledge combined
{
  let s = '', y = 104;
  const r = cardRow(y, [
    { head: '3.1.3 Theory and Methods', sub: 'research methods knowledge', body: ['Quantitative and qualitative methods', 'Questionnaires, interviews, observation, experiments, documents, official statistics', 'Practical, ethical and theoretical considerations'], fill: C.teal },
    { head: '3.1.1 Education', sub: 'substantive knowledge', body: ['Role and functions of education', 'Differential achievement', 'In-school relationships and processes', 'Educational policy'], fill: C.cream },
  ], { size: 17, gap: 60 });
  s += r.svg; y += r.h;
  s += arrow(232, y + 6, 400, y + 56) + arrow(668, y + 6, 500, y + 56);
  y += 62;
  s += `<rect x="190" y="${y}" width="520" height="92" rx="14" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + t(450, y + 38, '3.1.2 Methods in Context', { size: 22, weight: 700, anchor: 'middle' }) + t(450, y + 68, 'apply the first to the second', { size: 18, anchor: 'middle' });
  y += 92 + 18;
  const n = note(y, 'The whole requirement', '"Students must be able to apply sociological research methods to the study of education." It names no separate content, so it cannot be revised as a standalone topic.');
  s += n.svg; y += n.h;
  add('02-two-knowledge-bases', svg(900, y + 26, 'Methods in Context is a skill, not a topic', s),
    'Research methods knowledge from 3.1.3 Theory and Methods and substantive knowledge from 3.1.1 Education feed into 3.1.2 Methods in Context, which applies the first to the second.',
    'Methods in Context combines two other content areas instead of adding new content.',
    '## Syllabus coverage');
}

// 03 Where the marks are
{
  let s = '';
  const cy = 330, r = 200, lx = 340, rx = 560;
  s += `<circle cx="${lx}" cy="${cy}" r="${r}" fill="${C.teal}" fill-opacity="0.75" stroke="${C.ink}" stroke-width="3"/>`;
  s += `<circle cx="${rx}" cy="${cy}" r="${r}" fill="${C.cream}" fill-opacity="0.75" stroke="${C.ink}" stroke-width="3"/>`;
  s += `<path d="M450,${cy - Math.sqrt(r * r - 110 * 110)} A${r},${r} 0 0 1 450,${cy + Math.sqrt(r * r - 110 * 110)} A${r},${r} 0 0 1 450,${cy - Math.sqrt(r * r - 110 * 110)} Z" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
  s += tl(245, cy - 40, ['A feature of', 'the method'], { size: 20, weight: 700, anchor: 'middle' }, 26);
  s += tl(245, cy + 30, ['Method-only:', 'abstract strengths', 'and weaknesses'], { size: 16, anchor: 'middle', fill: C.ink }, 21);
  s += tl(655, cy - 40, ['A feature of the', 'education context'], { size: 20, weight: 700, anchor: 'middle' }, 26);
  s += tl(655, cy + 30, ['Context-only:', 'facts about education', 'with no method link'], { size: 16, anchor: 'middle', fill: C.ink }, 21);
  s += tl(450, cy - 30, ['Explain', 'how they', 'interact'], { size: 19, weight: 700, anchor: 'middle' }, 25);
  s += label(245, cy + 132, 'low marks', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  s += label(655, cy + 132, 'low marks', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  s += label(450, cy + 74, 'top band', { size: 17, weight: 700, anchor: 'middle' });
  const n = note(cy + r + 24, 'Use the item', 'Every top-band point references a specific detail from the item describing the research situation.');
  s += n.svg;
  add('03-where-marks-are', svg(900, cy + r + 24 + n.h + 26, 'Where the marks are earned', s),
    'Two overlapping circles: a feature of the method and a feature of the education context. Method-only and context-only answers score low; the overlap, explaining how the two interact, earns top-band marks.',
    'Marks come from linking a method feature to a feature of the education setting.',
    '## How to approach it');
}

// 04 Education-specific issue bank
{
  add('04-issue-bank', cardsFig('A bank of education-specific issues', {
    sub: 'research in schools routinely involves children',
    ncol: 2, size: 17, badges: true,
    cards: [
      { head: 'Gatekeeper access', body: 'Access via head teachers and parents.', fill: C.teal },
      { head: 'Timetabling', body: 'School timetabling constraints.', fill: C.teal },
      { head: 'Power imbalance', body: 'Between adult researchers and pupils.', fill: C.cream },
      { head: 'Informed consent', body: 'Complications of working with minors.', fill: C.cream },
    ],
    foot: { head: 'Prepare in advance', text: 'These issues recur across many different methods-in-context items.' },
  }),
    'Four education-specific issues to prepare: gatekeeper access through head teachers and parents, school timetabling constraints, the power imbalance between adult researchers and pupils, and informed consent with minors.',
    'Four practical and ethical issues that recur in school-based research.',
    '## How to approach it');
}

// 05 Worked example
{
  add('05-worked-example', compareFig('Structured interviews and teachers’ expectations', {
    cols: [{ head: 'What the answer says', fill: C.tealLight }],
    labelW: 200, size: 17,
    rows: [
      { label: 'Low: method-only', fill: C.panel, cells: ['Structured interviews are quick to administer and produce data that is easy to compare across respondents.'] },
      { label: 'Low: context-only', fill: C.panel, cells: ['Teachers might not want to admit to treating pupils differently.'] },
      { label: 'High: combined', fill: C.mustard, cellFill: [C.cream], cells: ['Structured interviews are **quick to administer**, which suits **teachers’ limited free time** during the school day, but teachers used to being observed and evaluated may give **socially desirable answers** rather than admit to differential treatment: a validity issue acute for this **sensitive topic** and this **standardised method**.'] },
    ],
    foot: { head: 'Why it works', text: 'It names a feature of the method and a feature of the education context, and explains how the two interact.' },
  }),
    'Three answers about using structured interviews to study teachers’ expectations of pupils: a method-only point and a context-only point both score low, while a combined point linking quick, standardised interviews to teachers’ time and the sensitivity of the topic scores high.',
    'The combined point links the method’s features to the features of this topic.',
    '## Worked example: applying a method to an education research topic');
}

// 06 Answer plan
{
  add('06-answer-plan', flowFig('Planning a Methods in Context answer', {
    steps: [
      { head: 'Read the item closely', body: 'Pick out specific details: which pupils or which in-school process, and which method.' },
      { head: 'Build combined points', body: 'Each point: a feature of the method + a feature of the education context + how they interact.' },
      { head: 'Develop three or four in depth', body: 'Return to the item’s details throughout, rather than many shallow points.' },
      { head: 'Reach an overall judgement', body: 'Does the method suit the topic, on balance?', fill: C.cream, edge: C.olive },
    ],
  }),
    'Four steps: read the item for specific details, build points that combine a method feature with a context feature, develop three or four in depth while returning to the item, and finish with an overall judgement on whether the method suits the topic.',
    'Fewer, deeper combined points, ending with a judgement.',
    '## Quick revision checklist');
}
