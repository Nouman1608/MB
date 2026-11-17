import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-a-level-sociology-9690-research-methods';
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
// ---- extra helpers (soc9690 batch) ----
// Cycle of boxes on an ellipse with arrows between consecutive boxes; returns svg string
function cycle(cx, cy, rx, ry, items, o = {}) {
  const n = items.length, bw = o.bw || 230, size = o.size || 16; let s = '';
  const pos = items.map((_, i) => { const a = -Math.PI / 2 + (2 * Math.PI * i) / n; return [cx + rx * Math.cos(a), cy + ry * Math.sin(a)]; });
  const hs = items.map((it) => (it.head ? para(0, 0, bw - 24, it.head, { size: 18, weight: 700 }).h + 4 : 0) + (it.body ? para(0, 0, bw - 24, it.body, { size }).h : 0) + 26);
  // arrows first (under boxes)
  for (let i = 0; i < n; i++) {
    const [x1, y1] = pos[i], [x2, y2] = pos[(i + 1) % n];
    const a1 = -Math.PI / 2 + (2 * Math.PI * i) / n, a2 = -Math.PI / 2 + (2 * Math.PI * (i + 1)) / n;
    const am = (a1 + a2) / 2, k = o.bulge || 1.0;
    const mx = cx + rx * k * Math.cos(am) / Math.cos(Math.PI / n), my = cy + ry * k * Math.sin(am) / Math.cos(Math.PI / n);
    // shorten: start/end points pulled toward midpoint
    const f = o.trim || 0.42;
    const sx = x1 + (mx - x1) * f, sy = y1 + (my - y1) * f, ex = x2 + (mx - x2) * f, ey = y2 + (my - y2) * f;
    s += `<path d="M${sx},${sy} Q${mx},${my} ${ex},${ey}" fill="none" stroke="${o.color || C.tealDark}" stroke-width="4" marker-end="url(#${o.marker || 'ahT'})"/>`;
  }
  items.forEach((it, i) => {
    const [x, y] = pos[i], h = hs[i];
    s += `<rect x="${x - bw / 2}" y="${y - h / 2}" width="${bw}" height="${h}" rx="12" fill="${it.fill || C.panel}" stroke="${C.ink}" stroke-width="2.5"/>`;
    let yy = y - h / 2 + 13 + 18 * 0.85;
    if (it.head) { const hp = para(x, yy, bw - 24, it.head, { size: 18, weight: 700, anchor: 'middle' }); s += hp.svg; yy += hp.h + 4; }
    if (it.body) s += para(x, yy, bw - 24, it.body, { size, anchor: 'middle' }).svg;
  });
  if (o.center) s += para(cx, cy - (para(0, 0, o.cw || 200, o.center, { size: 18, weight: 700 }).h) / 2 + 15, o.cw || 200, o.center, { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark }).svg;
  return s;
}
// Vertical timeline: events [{date, head?, text, fill?}]; returns {svg, h}
function timeline(y, events, o = {}) {
  const dx = o.dx || 170, size = o.size || 17, gap = o.gap || 14, tx = dx + 40, tw = 870 - tx - 20; let s = '', yy = y;
  const rows = events.map((e) => { const hp = e.head ? para(0, 0, tw, e.head, { size: 18, weight: 700 }).h + 4 : 0; const bp = e.text ? para(0, 0, tw, e.text, { size }).h : 0; return Math.max(hp + bp + 26, 56); });
  const total = rows.reduce((a, b) => a + b + gap, -gap);
  s += `<line x1="${dx}" y1="${y + 10}" x2="${dx}" y2="${y + total - 10}" stroke="${C.ink}" stroke-width="4"/>`;
  events.forEach((e, i) => {
    const h = rows[i];
    s += `<rect x="${dx + 22}" y="${yy}" width="${870 - dx - 22}" height="${h}" rx="12" fill="${e.fill || C.panel}" stroke="${C.panelEdge}" stroke-width="2.5"/>`;
    s += `<circle cx="${dx}" cy="${yy + h / 2}" r="11" fill="${e.dot || C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
    s += para(dx - 22, yy + h / 2 + 6, dx - 40, e.date, { size: 18, weight: 700, anchor: 'end', fill: C.tealDark }).svg;
    const ch = (e.head ? para(0, 0, tw, e.head, { size: 18, weight: 700 }).h + 4 : 0) + (e.text ? para(0, 0, tw, e.text, { size }).h : 0);
    let ty = yy + (h - ch) / 2 + 18 * 0.98;
    if (e.head) { const hp = para(tx, ty, tw, e.head, { size: 18, weight: 700 }); s += hp.svg; ty += hp.h + 4; }
    if (e.text) s += para(tx, ty, tw, e.text, { size }).svg;
    yy += h + gap;
  });
  return { svg: s, h: total };
}
// Model-answer chain: steps [{tag, text}] shown as tagged rows; returns full svg
function answerFig(title, q, steps, o = {}) {
  let y = 104; let s = '';
  const qp = para(450, 0, 800, q, { size: 18, italic: true, anchor: 'middle' });
  s += para(450, y + 6, 800, q, { size: 18, italic: true, anchor: 'middle', fill: C.muted }).svg; y += qp.h + 20;
  const fills = [C.tealLight, C.teal, C.cream, C.mustard];
  steps.forEach((st, i) => {
    const bp = para(0, 0, 600, st.text, { size: 17 });
    const h = Math.max(bp.h + 30, 64);
    s += `<rect x="30" y="${y}" width="200" height="${h}" rx="12" fill="${st.fill || fills[i % 4]}" stroke="${C.ink}" stroke-width="2"/>`;
    const tp = para(0, 0, 176, st.tag, { size: 18, weight: 700 });
    s += para(130, y + (h - tp.h) / 2 + 18 * 0.95, 176, st.tag, { size: 18, weight: 700, anchor: 'middle' }).svg;
    s += panel(242, y, 628, h) + para(262, y + 15 + 17 * 0.95, 588, st.text, { size: 17 }).svg;
    y += h;
    if (i < steps.length - 1) { s += arrow(130, y + 3, 130, y + 27, { w: 3 }); y += 30; }
  });
  if (o.foot) { const f = note(y + 18, o.foot.head, o.foot.text); s += f.svg; y += f.h + 18; }
  return svg(900, Math.round(y + 26), esc(title), s, o.sub && esc(o.sub));
}
// ---- end extra helpers ----

// 01 Asking questions
{
  add('01-asking-questions', compareFig('Methods that ask questions', {
    cols: [{ head: 'Strength', fill: C.teal }, { head: 'Limitation', fill: C.cream }],
    labelW: 190, size: 16,
    rows: [
      { label: 'Postal / telephone surveys', cells: ['Wide geographical reach; cheap per respondent', 'Low postal response; phone excludes those without phones or who screen calls'] },
      { label: 'Online surveys', cells: ['Fast, cheap, large samples, easy analysis', 'Excludes people offline; self-selection; hard to verify who answers'] },
      { label: 'Self-completion surveys', cells: ['Anonymity reduces social desirability; no interviewer bias', 'Misunderstood questions cannot be clarified'] },
      { label: 'Structured interviews', cells: ['Reliable, comparable answers; higher response than postal', 'Inflexible; interviewer bias still possible'] },
      { label: 'Unstructured interviews', cells: ['Valid, in-depth; respondents explain meanings', 'Time-consuming; hard to compare; small samples'] },
      { label: 'Group interviews', cells: ['Show how views form in interaction', 'Dominant voices; peer pressure distorts answers'] },
    ],
    foot: { head: 'Survey questions', text: '**Closed** (fixed choices), **open** (own words), **scaled** (agree to disagree), multiple-choice or ranking. Avoid leading, double-barrelled or ambiguous questions.' },
  }),
    'A grid of surveys and interviews (postal and telephone, online, self-completion, structured, unstructured and group) with a strength and a limitation of each, and types of survey question.',
    'More structure brings reliability; less structure brings depth.',
    '## The main methods (3.1.3.2)');
}

// 02 Observing, testing, documents
{
  add('02-other-methods', compareFig('Observation, experiments and secondary data', {
    cols: [{ head: 'Strength', fill: C.teal }, { head: 'Limitation', fill: C.cream }],
    labelW: 190, size: 16,
    rows: [
      { label: 'Participant observation', cells: ['High validity; natural setting', 'Small, unrepresentative; risk of "going native"'] },
      { label: 'Covert / overt observation', cells: ['Covert avoids the Hawthorne effect; overt allows consent', 'Covert is ethically problematic; overt may alter behaviour'] },
      { label: 'Non-participant observation', cells: ['Detachment; can use schedules', 'Presence may change behaviour; meanings missed'] },
      { label: 'Laboratory experiments', cells: ['Establish cause and effect; replicable', 'Artificial; ethical limits on manipulating people'] },
      { label: 'Field experiments', cells: ['More realistic', 'Less control; participants often unaware'] },
      { label: 'Longitudinal studies', cells: ['Show change and sequence', 'Expensive; attrition reduces representativeness'] },
      { label: 'Qualitative secondary', cells: ['Diaries, letters: insight into meaning, including the past', 'May be unrepresentative or written for an audience'] },
      { label: 'Quantitative secondary', cells: ['Official statistics: cheap, large-scale, show trends', 'Collected for state purposes; definitions shape them'] },
    ],
    foot: { head: 'Classic examples', text: ['**Field experiment:** Rosenthal and Jacobson (1968), teacher expectations', '**Covert observation:** Humphreys (1970), Tearoom Trade, contested ethics', '**Letters:** Thomas and Znaniecki (1918–1920), The Polish Peasant'] },
  }),
    'A grid of observation types, laboratory and field experiments, longitudinal studies and qualitative and quantitative secondary sources, each with a strength and a limitation, plus classic examples.',
    'Natural settings gain validity; controlled settings gain cause and effect.',
    '## The main methods (3.1.3.2)');
}

// 03 Sampling
{
  let s = '', y = 110;
  const c = hchain(y, [
    { head: 'Population', body: 'the whole group being studied', fill: C.teal },
    { head: 'Sampling frame', body: 'the list a sample is drawn from (a register, an electoral roll)', fill: C.tealLight },
    { head: 'Sample', body: 'the people actually studied', fill: C.cream },
  ], { ag: 40 });
  s += c.svg; y += c.h + 8;
  s += label(450, y + 18, 'a poor frame leaves people out', { size: 16, italic: true, anchor: 'middle', fill: C.rust, weight: 600 });
  y += 38;
  const r1 = cardRow(y, [
    { head: 'Random', body: 'each member has an equal chance', fill: C.teal },
    { head: 'Systematic', body: 'every nth name', fill: C.teal },
    { head: 'Stratified random', body: 'random within subgroups, in proportion', fill: C.teal },
  ], { size: 16, headSize: 18 });
  s += r1.svg; y += r1.h + 14;
  const r2 = cardRow(y, [
    { head: 'Quota', body: 'interviewers fill set numbers with given characteristics, not randomly', fill: C.cream },
    { head: 'Multistage', body: 'regions, then towns, then households', fill: C.cream },
    { head: 'Snowball', body: 'participants recruit others; for hidden groups', fill: C.cream },
  ], { size: 16, headSize: 18 });
  s += r2.svg; y += r2.h;
  add('03-sampling', svg(900, y + 26, 'From population to sample', s),
    'A chain from population to sampling frame to sample, then six types of sample: random, systematic and stratified random; quota, multistage and snowball.',
    'The sample can only be as good as the frame it is drawn from.',
    '## Issues in research (3.1.3.3)');
}

// 04 Operationalisation and correlation
{
  let s = '', y = 110;
  s += label(30, y + 6, 'Operationalisation: turning a concept into something measurable', { size: 19, weight: 700 }); y += 24;
  s += `<rect x="30" y="${y + 50}" width="220" height="70" rx="14" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + label(140, y + 92, '“Religiosity”', { size: 20, weight: 700, anchor: 'middle' });
  ['Frequency of worship', 'Prayer', 'Belief'].forEach((m, i) => {
    const yy = y + i * 60;
    s += arrow(254, y + 85, 344, yy + 25, { w: 3 }) + `<rect x="350" y="${yy}" width="250" height="50" rx="10" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2"/>` + label(475, yy + 32, m, { size: 17, weight: 600, anchor: 'middle' });
  });
  s += para(630, y + 70, 240, 'Each choice gives a different result', { size: 18, weight: 700, fill: C.tealDark }).svg;
  y += 200;
  s += label(30, y + 6, 'Correlation is not causation', { size: 19, weight: 700 }); y += 24;
  s += `<rect x="330" y="${y}" width="240" height="60" rx="14" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` + label(450, y + 37, 'A third factor', { size: 19, weight: 700, anchor: 'middle' });
  s += `<rect x="80" y="${y + 120}" width="220" height="56" rx="12" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + label(190, y + 154, 'Variable A', { size: 18, weight: 700, anchor: 'middle' });
  s += `<rect x="600" y="${y + 120}" width="220" height="56" rx="12" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + label(710, y + 154, 'Variable B', { size: 18, weight: 700, anchor: 'middle' });
  s += arrow(380, y + 64, 240, y + 114, { w: 3 }) + arrow(520, y + 64, 660, y + 114, { w: 3 });
  s += `<line x1="306" y1="${y + 148}" x2="594" y2="${y + 148}" stroke="${C.rust}" stroke-width="3" stroke-dasharray="9 7"/>` + label(450, y + 140, 'move together', { size: 16, anchor: 'middle', fill: C.rust, weight: 600 }) + label(450, y + 170, 'but A may not cause B', { size: 16, anchor: 'middle', fill: C.rust });
  y += 196;
  const n = note(y, 'Other threats to valid data', ['**Researcher / interviewer bias:** characteristics or wording influence answers', '**Hawthorne effect:** people change behaviour when studied (Western Electric, 1920s–30s)', '**Social desirability:** answers that make respondents look good']);
  s += n.svg; y += n.h;
  add('04-measurement-problems', svg(900, y + 26, 'Measuring and explaining carefully', s),
    'Religiosity can be operationalised as worship, prayer or belief, each giving a different result. Two variables that move together may both be caused by a third factor. Notes list interviewer bias, the Hawthorne effect and social desirability.',
    'How you measure, and what else might explain a link, shape every finding.',
    '## Issues in research (3.1.3.3)');
}

// 05 TREND
{
  add('05-trend', flowFig('Reading quantitative data: TREND', {
    steps: [
      { n: 'T', head: 'Title and units', body: 'What is measured, where, when, in what units (percentages or numbers)?' },
      { n: 'R', head: 'Read extremes', body: 'Highest and lowest values.' },
      { n: 'E', head: 'Examine change and comparison', body: 'Differences between groups and over time.' },
      { n: 'N', head: 'Note the kind of change', body: 'Percentage points or relative terms?' },
      { n: 'D', head: 'Doubt', body: 'Who collected it, sample size, definitions, what is missing.' },
    ],
    foot: { head: 'Qualitative extracts', text: 'Identify what participants say and do, the meanings they appear to give, the researcher’s possible influence, and how far one setting can be generalised.' },
  }),
    'The TREND routine for quantitative data: title and units, read extremes, examine change and comparison, note percentage points versus relative change, and doubt the source. A note gives the routine for qualitative extracts.',
    'TREND turns an unseen table into marks.',
    '## Interpreting data (3.1.3.4)');
}

// 06 Tarnia chart
{
  let s = '', y = 130;
  const x0 = 120, base = y + 340, sc = 3.5; // 1% = 4px
  s += panel(30, y - 10, 840, 410);
  for (const v of [0, 20, 40, 60, 80]) {
    s += `<line x1="${x0}" y1="${base - v * sc}" x2="840" y2="${base - v * sc}" stroke="${C.panelEdge}" stroke-width="1.5"/>` + label(x0 - 12, base - v * sc + 6, String(v), { size: 15, anchor: 'end', fill: C.muted });
  }
  s += `<text x="58" y="${base - 160}" font-size="15" fill="${C.muted}" text-anchor="middle" transform="rotate(-90 58 ${base - 160})">households (%)</text>`;
  const groups = [['Urban', 30, 74, 230], ['Rural', 12, 51, 560]];
  for (const [g, a, b, gx] of groups) {
    s += `<rect x="${gx}" y="${base - a * sc}" width="90" height="${a * sc}" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2"/>` + label(gx + 45, base - a * sc - 10, a + '%', { size: 17, weight: 700, anchor: 'middle' });
    s += `<rect x="${gx + 100}" y="${base - b * sc}" width="90" height="${b * sc}" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + label(gx + 145, base - b * sc - 10, b + '%', { size: 17, weight: 700, anchor: 'middle' });
    s += label(gx + 95, base + 30, g, { size: 18, weight: 700, anchor: 'middle' });
    s += label(gx + 95, base - b * sc - 40, `+${b - a} percentage points`, { size: 16, weight: 600, anchor: 'middle', fill: C.olive });
  }
  s += `<line x1="${x0}" y1="${base}" x2="840" y2="${base}" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += `<rect x="640" y="${y + 6}" width="18" height="18" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="1.5"/>` + label(666, y + 21, '2015', { size: 16 });
  s += `<rect x="740" y="${y + 6}" width="18" height="18" fill="${C.teal}" stroke="${C.ink}" stroke-width="1.5"/>` + label(766, y + 21, '2025', { size: 16 });
  y += 420;
  const n = note(y, 'Two trends and a limitation', ['Use rose in both areas: urban 30% to 74% (+44 points), rural 12% to 51% (+39 points)', 'The urban-rural gap widened from 18 to 23 points, though rural use grew faster in relative terms (more than fourfold vs about 2.5 times)', '**Limitation:** percentages hide sample size and how "using" was operationalised']);
  s += n.svg; y += n.h;
  add('06-tarnia-chart', svg(900, y + 26, 'Mobile money in Tarnia (fictional data)', s, 'households using mobile money, %, invented for practice'),
    'A bar chart of fictional data: urban households using mobile money rose from 30% in 2015 to 74% in 2025, rural from 12% to 51%. The gap widened in percentage points while rural use grew faster in relative terms.',
    'Percentage points and relative change can tell different stories.',
    '## Worked example: reading a table');
}
