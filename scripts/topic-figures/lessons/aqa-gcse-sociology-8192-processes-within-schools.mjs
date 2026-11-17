import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-sociology-8192-processes-within-schools';
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

// 01 Tiered entry
{
  const items = [
    { head: 'Low set', body: 'Pupil placed in a low set at GCSE', fill: C.tealLight },
    { head: 'Foundation tier', body: 'Entered for the lower-tier paper', fill: C.cream },
    { head: 'Grade capped', body: 'The highest grade available is limited', fill: C.mustard },
  ];
  const c = hchain(118, items, { size: 17, ag: 50 });
  const r = cardRow(118 + c.h + 30, [
    { head: 'Streaming', fill: C.panel, body: ['**For:** teaching matched to the group’s pace', '**Against:** strong in one subject, held back in another; low streams labelled failures'] },
    { head: 'Setting', fill: C.panel, body: ['**For:** flexible; reflects different strengths', '**Against:** placement can follow class, gender or ethnicity'] },
    { head: 'Mixed ability', fill: C.panel, body: ['**For:** avoids fixed labels; less polarisation', '**Against:** harder to stretch the most able and support the least able'] },
  ], { size: 16, headSize: 19 });
  add('01-tiered-entry',
    svg(900, Math.round(118 + c.h + 30 + r.h + 24), 'When placement limits the grade', c.svg + r.svg),
    'A chain: a pupil in a low GCSE set is entered for the foundation tier, which caps the highest grade available. Below, arguments for and against streaming, setting and mixed ability teaching.',
    'Through tiered entry, a set placement can directly limit the grade a pupil can achieve.',
    '## Ways of grouping pupils');
}

// 02 Self-fulfilling prophecy
{
  let s = '';
  const pos = [[450, 175], [740, 320], [450, 465], [160, 320]];
  const nodes = [
    ['1. Label', 'Teacher labels the pupil “not academic”', C.cream],
    ['2. Treatment', 'Easier work, less praise, less attention', C.tealLight],
    ['3. Self-image', 'Pupil sees themselves through the label; loses confidence or effort', C.tealLight],
    ['4. Outcome', 'Achievement falls, which seems to confirm the label', C.mustard],
  ];
  s += arrow(590, 196, 690, 258, { w: 3.5 }) + arrow(690, 384, 590, 446, { w: 3.5 }) + arrow(310, 446, 210, 384, { w: 3.5 }) + arrow(210, 258, 310, 196, { w: 3.5, dash: '9 7' });
  nodes.forEach(([h, b, f], i) => { const [x, y] = pos[i]; s += box(x - 145, y - 52, 290, 104, { fill: f, sw: 2.5 }) + label(x, y - 18, h, { size: 19, weight: 700, anchor: 'middle' }) + para(x, y + 10, 260, b, { size: 15.5, anchor: 'middle' }).svg; });
  s += label(450, 312, 'the label', { size: 18, anchor: 'middle', fill: C.muted }) + label(450, 338, 'comes true', { size: 22, weight: 700, anchor: 'middle' });
  s += label(170, 232, 'confirms', { size: 16, weight: 700, fill: C.olive, anchor: 'middle', italic: true });
  const n = note(540, 'Labelling is not yet a prophecy', ['Labels are often based on appearance, behaviour, accent or set, not careful assessment', 'The self-fulfilling prophecy needs the **outcome**: the label must come true']);
  add('02-self-fulfilling-prophecy',
    svg(900, Math.round(540 + n.h + 24), 'The self-fulfilling prophecy', s + n.svg),
    'A four-step cycle: a teacher labels a pupil as not academic; the teacher gives easier work and less praise; the pupil sees themselves through the label and loses effort; achievement falls, which seems to confirm the label.',
    'A label becomes a self-fulfilling prophecy only when it comes true.',
    '## Labelling and the self-fulfilling prophecy');
}

// 03 Becker's ideal pupil
{
  let s = '';
  const cx = 300, cy = 330;
  [200, 140, 80].forEach((r, i) => { s += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${[C.tealLight, C.teal, C.mustard][i]}" stroke="${C.ink}" stroke-width="2.5"/>`; });
  s += label(cx, cy - 6, 'the', { size: 17, anchor: 'middle' }) + label(cx, cy + 18, '“ideal pupil”', { size: 19, weight: 700, anchor: 'middle' });
  const dot = (x, y, f) => `<circle cx="${x}" cy="${y}" r="12" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += dot(cx + 50, cy - 90, C.panel) + dot(cx - 70, cy - 100, C.panel) + dot(cx + 105, cy + 30, C.panel);
  s += dot(cx - 160, cy + 80, C.rust) + dot(cx + 150, cy + 120, C.rust) + dot(cx + 30, cy + 175, C.rust);
  s += box(540, 150, 330, 110, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + dot(566, 186, C.panel) + label(590, 192, 'Middle-class pupils', { size: 18, weight: 700 }) + para(560, 222, 300, 'Closest to the ideal in behaviour and appearance', { size: 16 }).svg;
  s += box(540, 280, 330, 120, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + dot(566, 316, C.rust) + label(590, 322, 'Working-class pupils', { size: 18, weight: 700 }) + para(560, 352, 300, 'Further from the ideal; more likely to be seen as badly behaved', { size: 16 }).svg;
  s += box(540, 420, 330, 110, { fill: C.cream, edge: C.olive, sw: 2 }) + para(556, 450, 300, 'Becker interviewed teachers in **Chicago**; also named for his work on deviance', { size: 16 }).svg;
  const n = note(560, 'Bonus evidence, not a key study', 'Rosenthal and Jacobson, Pygmalion in the Classroom (1968): randomly chosen pupils whom teachers expected to progress made greater gains, suggesting expectations alone can change outcomes.');
  add('03-ideal-pupil',
    svg(900, Math.round(560 + n.h + 24), 'Becker: the “ideal pupil”', s + n.svg),
    'Concentric circles with the teacher’s ideal pupil at the centre. Middle-class pupils sit close to the centre; working-class pupils sit further out and are more likely to be seen as badly behaved. Below, Rosenthal and Jacobson’s experiment as bonus evidence that expectations can change outcomes.',
    'Teachers judged pupils against an ideal that was closest to middle-class pupils.',
    '## Labelling and the self-fulfilling prophecy');
}

// 04 Ball: Beachside
{
  let s = '';
  s += label(450, 92, 'Beachside Comprehensive (1981): three years of participant observation, two cohorts', { size: 17, anchor: 'middle', fill: C.muted });
  const L = headPanel(30, 112, 404, 470, 'Banded cohort', { fill: C.teal, size: 21 });
  const R = headPanel(466, 112, 404, 470, 'Mixed ability cohort', { fill: C.cream, size: 21 });
  s += L.svg + R.svg;
  s += box(50, 182, 364, 114, { fill: C.mustard, sw: 2 }) + label(232, 210, 'Band 1', { size: 19, weight: 700, anchor: 'middle' }) + para(232, 238, 330, 'More middle-class pupils (of similar ability); expected to be academic; higher-status exams', { size: 15.5, anchor: 'middle' }).svg;
  s += box(50, 306, 364, 104, { fill: C.tealLight, sw: 2 }) + label(232, 334, 'Band 2', { size: 19, weight: 700, anchor: 'middle' }) + para(232, 360, 330, 'Steered to lower-status courses; most likely to develop anti-school attitudes', { size: 15.5, anchor: 'middle' }).svg;
  s += `<line x1="232" y1="296" x2="232" y2="306" stroke="${C.ink}" stroke-width="2"/>`;
  s += box(50, 428, 364, 132, { fill: C.panel, edge: C.rust, sw: 2.5 }) + label(232, 458, 'Polarisation', { size: 19, weight: 700, anchor: 'middle', fill: C.rust }) + para(232, 486, 330, 'A split between pro-school and anti-school pupils (concepts from Lacey, Hightown Grammar)', { size: 15.5, anchor: 'middle' }).svg;
  s += bullets(488, 196, 360, ['Polarisation between pupils became **less marked**', 'But teachers **still held different expectations**', 'These still **favoured middle-class pupils**'], { size: 17, gap: 14 }).svg;
  s += box(486, 428, 364, 132, { fill: C.cream, edge: C.olive, sw: 2 }) + label(668, 458, 'Why it matters', { size: 18, weight: 700, anchor: 'middle' }) + para(668, 486, 330, 'Banding acted as an institutional label: expectations shaped work, exams and attitudes', { size: 15.5, anchor: 'middle' }).svg;
  const n = note(600, 'Evaluation', ['Three years of participant observation give rich, valid data on everyday school life', 'A single school may not be representative; the researcher’s presence may have changed behaviour']);
  add('04-ball-beachside',
    svg(900, Math.round(600 + n.h + 24), 'Ball: teacher expectations at Beachside', s + n.svg),
    'Two cohorts. In the banded cohort, middle-class pupils were more often placed in band 1 and prepared for higher-status exams, while band 2 was steered to lower-status courses and developed anti-school attitudes: polarisation. In the mixed ability cohort polarisation was less marked, but teachers’ expectations still favoured middle-class pupils.',
    'Banding worked as an institutional label that shaped pupils’ attitudes and exams.',
    '## Ball on teacher expectations');
}

// 05 Willis: the lads
{
  let s = '';
  s += label(450, 92, 'Learning to Labour (1977): twelve working-class boys at a Midlands school', { size: 17, anchor: 'middle', fill: C.muted });
  const L = headPanel(30, 112, 404, 266, '“The lads”', { fill: C.mustard, size: 21 });
  const R = headPanel(466, 112, 404, 266, '“Ear’oles”', { fill: C.tealLight, size: 21 });
  s += L.svg + R.svg;
  s += bullets(52, 196, 360, ['A **counter school culture** opposed to school values', 'Felt superior to teachers and to conformist pupils', 'Aimed to avoid lessons and “have a laff”', 'Resented the school’s control of their time'], { size: 17, gap: 10 }).svg;
  s += bullets(488, 196, 360, ['Conformist pupils', 'Looked down on by the lads'], { size: 17, gap: 10 }).svg;
  s += `<circle cx="450" cy="245" r="22" fill="${C.ink}"/>` + t(450, 252, 'vs', { size: 17, weight: 700, fill: '#ffffff', anchor: 'middle' });
  const items = [
    { head: 'Rejecting school', body: 'An identity the lads actively chose', fill: C.cream },
    { head: 'Manual work', body: 'Suited to male-dominated, unskilled or semi-skilled jobs', fill: C.teal },
  ];
  const c = hchain(404, items, { size: 17, ag: 60 });
  s += c.svg + label(450, 404 + c.h + 26, 'Such work was relatively easy to get in the 1970s', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  const y = 404 + c.h + 46;
  const r = cardRow(y, [
    { head: 'Ball: the institution shapes pupils', fill: C.panel, body: 'Banding labels pupils and their attitudes follow' },
    { head: 'Willis: pupils are not passive', fill: C.panel, body: 'The lads chose to resist; they were not simply labelled into failure' },
  ], { size: 16, headSize: 18 });
  s += r.svg;
  const n = note(y + r.h + 16, 'Methods', 'Observation and participant observation, group discussions, informal interviews and diaries, to see school from the pupils’ point of view.');
  add('05-willis-lads',
    svg(900, Math.round(y + r.h + 16 + n.h + 24), 'Willis: a counter school culture', s + n.svg),
    'The lads formed a counter school culture, felt superior to teachers and to conformist ear’oles, and aimed to have a laff. Rejecting school suited them to male-dominated manual work, easy to get in the 1970s. Below, Ball shows the institution shaping pupils while Willis shows pupils actively resisting.',
    'Willis shows pupils actively choosing resistance, which still led to manual work.',
    '## Willis on counter school cultures');
}
