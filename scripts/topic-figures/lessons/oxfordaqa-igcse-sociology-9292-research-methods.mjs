import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-sociology-9292-research-methods';
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
const dot = (cx, cy, on, o = {}) => `<circle cx="${cx}" cy="${cy}" r="${o.r || 9}" fill="${on ? C.mustard : o.fill || C.tealLight}" stroke="${C.ink}" stroke-width="${on ? 2.8 : 1.6}"/>`;

// 01 Positivist vs interpretivist
{
  add('01-positivist-interpretivist',
    versusFig('Two approaches to research', {
      left: { head: 'Positivists', sub: 'Model sociology on the natural sciences', items: ['**Quantitative** data from large samples', 'Questionnaires and official statistics', 'Aim: find patterns and causes', 'Classic example: Durkheim’s study of suicide, based on official statistics'] },
      right: { head: 'Interpretivists', sub: 'Understand the meanings behind actions', items: ['**Qualitative** data', 'Unstructured interviews and participant observation', 'Aim: depth and **validity**', 'e.g. Oakley’s interviews with housewives'] },
      foot: { head: 'Triangulation', text: 'Combines methods or data sources to check findings and gain both breadth and depth.' },
    }),
    'Positivists model sociology on the natural sciences and use quantitative data from large samples, such as questionnaires and official statistics, to find patterns and causes, as in Durkheim’s study of suicide. Interpretivists seek the meanings behind actions using qualitative methods for depth and validity. Triangulation combines both.',
    'Positivists count to find causes; interpretivists listen to find meanings.',
    '## Approaches to research');
}

// 02 Six sampling methods
{
  const cw = 268, ch = 330, gap = 18;
  let s = '';
  const card = (i, head, art, txt) => { const x = 30 + (i % 3) * (cw + gap), y = 108 + Math.floor(i / 3) * (ch + 16); return headPanel(x, y, cw, ch, head, { fill: C.teal, size: 20 }).svg + art(x, y) + para(x + 16, y + 250, cw - 32, txt, { size: 15 }).svg; };
  const grid = (x, y, pick, fill) => { let o = ''; for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) { const i = r * 6 + c; o += dot(x + 44 + c * 36, y + 84 + r * 36, pick(i, r, c), { fill: fill ? fill(i, r, c) : C.tealLight }); } return o; };
  const rnd = new Set([3, 7, 14, 16, 20]);
  s += card(0, 'Random', (x, y) => grid(x, y, (i) => rnd.has(i)), 'Everyone has an equal chance of selection. Needs a sampling frame.');
  s += card(1, 'Systematic', (x, y) => grid(x, y, (i) => i % 5 === 4), 'Every nth name on the list (here every 5th).');
  s += card(2, 'Stratified random', (x, y) => grid(x, y, (i, r, c) => (r < 2 ? [1, 4].includes(c) && r === 0 || c === 2 && r === 1 : [0, 3].includes(c) && r === 2 || c === 5 && r === 3), (i, r) => (r < 2 ? C.tealLight : C.cream)) + `<line x1="${x + 24}" y1="${y + 138}" x2="${x + 244}" y2="${y + 138}" stroke="${C.ink}" stroke-width="2" stroke-dasharray="5 4"/>`, 'Divide into groups (e.g. by gender), then take a random sample from each in proportion.');
  s += card(3, 'Quota', (x, y) => grid(x, y, (i, r, c) => (c < 3 ? c < 2 && r < 2 : c === 3 && r < 3), (i, r, c) => (c < 3 ? C.tealLight : C.cream)) + `<line x1="${x + 152}" y1="${y + 66}" x2="${x + 152}" y2="${y + 210}" stroke="${C.ink}" stroke-width="2" stroke-dasharray="5 4"/>`, 'Fill set numbers from each category; the researcher chooses who to ask.');
  s += card(4, 'Multistage', (x, y) => box(x + 24, y + 70, 220, 160, { fill: C.tealLight, sw: 2 }) + label(x + 34, y + 92, 'region', { size: 15, weight: 700 }) + box(x + 64, y + 104, 160, 112, { fill: C.cream, sw: 2 }) + label(x + 74, y + 126, 'school', { size: 15, weight: 700 }) + [0, 1, 2, 3].map((k) => dot(x + 96 + k * 34, y + 172, k === 1 || k === 3)).join('') + label(x + 144, y + 204, 'pupils', { size: 15, weight: 700, anchor: 'middle' }), 'Sample in stages: regions, then schools, then pupils.');
  s += card(5, 'Snowball', (x, y) => { const pts = [[60, 100], [130, 130], [200, 95], [190, 180], [100, 200], [240, 160]]; let o = ''; [[0, 1], [1, 2], [1, 4], [2, 5], [5, 3]].forEach(([p, q]) => { const [ax, ay] = pts[p], [bx, by] = pts[q]; const L = Math.hypot(bx - ax, by - ay), ux = (bx - ax) / L, uy = (by - ay) / L; o += arrow(x + ax + ux * 12, y + ay + uy * 12, x + bx - ux * 14, y + by - uy * 14, { w: 2.5 }); }); pts.forEach(([px, py], i) => { o += dot(x + px, y + py, i === 0); }); return o; }, 'Each participant introduces others; for hard-to-reach groups.');
  const y = 108 + 2 * (ch + 16);
  const n = note(y, 'Common mistake', 'Picking people “at random” in the street is not a random sample: a random sample needs a sampling frame, such as a school register.');
  add('02-six-sampling-methods',
    svg(900, Math.round(y + n.h + 24), 'Six ways to choose a sample', s + n.svg),
    'Six panels: random (equal chance), systematic (every nth name), stratified random (groups such as gender sampled in proportion), quota (set numbers filled by the researcher’s choice), multistage (regions, then schools, then pupils) and snowball (participants introduce others). A random sample needs a sampling frame.',
    'Each sampling method selects people differently, which affects how representative the sample is.',
    '## Issues in research');
}

// 03 Observation and experiments
{
  let s = '';
  s += label(450, 112, 'Observation', { size: 20, weight: 700, anchor: 'middle' });
  const cards = [
    ['Participant', 'Researcher joins in; ethnography studies a way of life in its natural setting', C.teal],
    ['Non-participant', 'Researcher watches without joining in', C.tealLight],
    ['Overt', 'The group knows it is being studied', C.cream],
    ['Covert', 'The group does not know: avoids the Hawthorne effect, but deceives', C.mustard],
  ];
  cards.forEach(([h, b, f], i) => {
    const x = 30 + (i % 2) * 428, y = 130 + Math.floor(i / 2) * 118;
    s += box(x, y, 412, 104, { fill: f }) + label(x + 20, y + 34, h, { size: 20, weight: 700 }) + para(x + 20, y + 62, 372, b, { size: 16 }).svg;
  });
  s += label(450, 386, 'Experiments', { size: 20, weight: 700, anchor: 'middle' });
  const r = cardRow(404, [
    { head: 'Laboratory', fill: C.panel, body: ['**+** Control over variables', '**−** Artificial'] },
    { head: 'Field', fill: C.panel, body: ['Real settings, e.g. Rosenthal and Jacobson on teacher expectations', '**−** Less control; questions of consent'] },
  ], { size: 17, headSize: 19 });
  s += r.svg;
  const n = note(404 + r.h + 16, 'Longitudinal studies', 'Follow the same group over time to show change, but are expensive and people drop out.');
  add('03-observation-experiments',
    svg(900, Math.round(404 + r.h + 16 + n.h + 24), 'Observation and experiments', s + n.svg),
    'Four kinds of observation: participant (joining in, as in ethnography), non-participant (watching only), overt (the group knows) and covert (the group does not know, which avoids the Hawthorne effect but deceives). Below, laboratory experiments give control but are artificial; field experiments such as Rosenthal and Jacobson’s are real but less controlled.',
    'Observers choose whether to join in and whether to tell; experimenters trade control for realism.',
    '## The main methods');
}

// 04 Reliability vs validity targets + threats
{
  let s = '';
  const target = (cx, cy, pts) => [70, 48, 26].map((r, i) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${i === 2 ? C.mustard : i ? C.cream : '#ffffff'}" stroke="${C.ink}" stroke-width="2"/>`).join('') + pts.map(([dx, dy]) => `<circle cx="${cx + dx}" cy="${cy + dy}" r="5" fill="${C.ink}"/>`).join('');
  const T = [
    ['Reliable, not valid', 'Same result each time, but not a true picture', [[40, -36], [46, -30], [36, -28], [44, -40], [50, -36]]],
    ['Valid, not reliable', 'Close to the truth, but results vary when repeated', [[-14, 10], [12, -16], [18, 14], [-20, -10], [4, 20]]],
    ['Reliable and valid', 'A true picture, repeated', [[2, -3], [-4, 3], [5, 4], [-3, -5], [0, 6]]],
  ];
  T.forEach(([h, d, pts], i) => {
    const x = 30 + i * 286, cx = x + 134;
    s += box(x, 108, 268, 300, { fill: C.panel, edge: C.panelEdge }) + target(cx, 200, pts);
    s += para(cx, 306, 240, h, { size: 18, weight: 700, anchor: 'middle' }).svg + para(cx, 334, 236, d, { size: 15, anchor: 'middle', fill: C.muted }).svg;
  });
  s += label(450, 446, 'What threatens validity?', { size: 20, weight: 700, anchor: 'middle' });
  const r = cardRow(464, [
    { head: 'Researcher bias', fill: C.teal, body: 'The researcher’s views or presence influence results' },
    { head: 'Hawthorne effect', fill: C.tealLight, body: 'People behave differently because they know they are studied' },
    { head: 'Social desirability', fill: C.cream, body: 'People give answers that make them look good' },
  ], { size: 16, headSize: 19 });
  s += r.svg;
  add('04-reliability-validity',
    svg(900, 464 + r.h + 24, 'Reliability and validity', s),
    'Three targets. Shots clustered tightly away from the centre are reliable but not valid; shots scattered around the centre are valid but not reliable; shots tightly on the bullseye are both. Below, three threats to validity: researcher bias, the Hawthorne effect and social desirability.',
    'Reliable means repeatable; valid means true. A study needs both.',
    '## Issues in research');
}

// 05 Operationalisation and correlation
{
  let s = '';
  s += label(225, 116, 'Operationalisation', { size: 20, weight: 700, anchor: 'middle' });
  s += box(105, 136, 240, 64, { fill: C.mustard }) + label(225, 176, '“Poverty”', { size: 21, weight: 700, anchor: 'middle' });
  s += label(225, 222, 'a concept: how will you measure it?', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  s += arrow(170, 232, 110, 290) + arrow(225, 232, 225, 290) + arrow(280, 232, 340, 290);
  [['Income', 40], ['Both', 165], ['Possessions', 290]].forEach(([l, x]) => { s += box(x, 296, 120, 50, { fill: C.tealLight, sw: 2 }) + label(x + 60, 328, l, { size: 17, weight: 700, anchor: 'middle' }); });
  // correlation
  const ox = 500, oy = 330, w = 340, h = 200;
  s += label(675, 116, 'Correlation is not causation', { size: 20, weight: 700, anchor: 'middle' });
  s += `<line x1="${ox}" y1="${oy}" x2="${ox + w}" y2="${oy}" stroke="${C.ink}" stroke-width="2.5"/><line x1="${ox}" y1="${oy}" x2="${ox}" y2="${oy - h}" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += path(`M${ox + 10},${oy - 40} L${ox + 100},${oy - 70} L${ox + 200},${oy - 110} L${ox + 320},${oy - 170}`, { stroke: C.tealDark, w: 4 });
  s += path(`M${ox + 10},${oy - 20} L${ox + 100},${oy - 45} L${ox + 200},${oy - 80} L${ox + 320},${oy - 130}`, { stroke: C.olive, w: 4, extra: 'stroke-dasharray="10 6"' });
  s += label(ox + 330, oy - 176, 'A', { size: 18, weight: 700, fill: C.tealDark }) + label(ox + 330, oy - 124, 'B', { size: 18, weight: 700, fill: C.olive });
  s += label(ox + w / 2, oy + 26, 'time', { size: 15, anchor: 'middle', fill: C.muted });
  const n = note(380, null, ['**Operationalisation:** turning a concept into something you can measure', '**Correlation:** A and B rising together does not prove that A causes B']);
  add('05-operationalisation-correlation',
    svg(900, Math.round(380 + n.h + 24), 'Measuring concepts, reading patterns', s + n.svg),
    'Left: the concept of poverty can be measured through income, possessions or both. Right: two lines, A and B, rise together over time, but that correlation does not prove that A causes B.',
    'Decide how to measure a concept, and never treat a correlation as proof of cause.',
    '## Issues in research');
}

// 06 Interpreting data checklist
{
  const steps = [
    ['Read', 'The title, units and source first'],
    ['Extremes', 'State the highest and lowest figures'],
    ['Trend', 'Describe the overall trend or pattern'],
    ['Quantify', 'Quote figures for the differences'],
    ['Limits', 'Say what the data does not show: causes, how it was collected'],
  ];
  let s = label(225, 120, 'Tables, charts and graphs', { size: 19, weight: 700, anchor: 'middle' });
  steps.forEach(([h, b], i) => {
    const y = 138 + i * 92;
    s += box(30, y, 404, 84, { fill: C.panel, edge: C.panelEdge }) + badge(64, y + 42, 18, String(i + 1), i === 3 ? C.mustard : C.cream);
    s += label(96, y + 30, h, { size: 18, weight: 700 }) + para(96, y + 54, 326, b, { size: 15, fill: C.muted }).svg;
  });
  s += label(668, 120, 'Qualitative extracts', { size: 19, weight: 700, anchor: 'middle' });
  s += box(466, 138, 404, 440, { fill: C.cream, edge: C.olive });
  s += label(490, 176, 'Field notes or interviews', { size: 16, weight: 700, fill: C.olive });
  s += bullets(490, 214, 360, ['Identify what it reveals about **meanings**', 'Quote a short phrase as evidence', 'Ask whether the observer’s presence may have shaped what happened'], { size: 17, dot: C.olive }).svg;
  s += box(490, 460, 356, 96, { fill: C.panel, edge: C.rust, sw: 2, dash: '7 5' }) + label(508, 492, 'Common mistake', { size: 16, weight: 700, fill: C.rust }) + para(508, 518, 324, 'Describing data without quoting figures from it', { size: 16 }).svg;
  add('06-interpreting-data',
    svg(900, 612, 'Reading unfamiliar data', s),
    'Left: five steps for tables, charts and graphs: read the title, units and source; state the highest and lowest figures; describe the trend; quantify differences; say what the data does not show. Right: for qualitative extracts, identify meanings, quote a short phrase and consider the observer’s effect.',
    'Read the labels, find the extremes and trend, quote figures, then note the limits.',
    '## Interpreting data');
}

// 07 Worked example: racism study
{
  let s = '';
  s += box(30, 108, 840, 60, { fill: C.ink, edge: C.ink }) + label(450, 146, 'How do young people experience racism in their town?', { size: 19, weight: 700, anchor: 'middle', fill: '#ffffff' });
  const r = cardRow(190, [
    { head: 'Questionnaire', fill: C.teal, body: ['**+** Anonymous: may reduce social desirability', '**+** Large sample shows how common racism is', '**−** Closed questions lose the meaning of experiences'] },
    { head: 'Unstructured interview', fill: C.cream, body: ['**+** Rich, valid accounts of how racism feels', '**−** Small sample', '**−** Interviewer’s ethnicity may affect what is said (interviewer bias)'] },
  ], { size: 16, headSize: 20 });
  s += r.svg;
  let y = 190 + r.h + 16;
  s += box(30, y, 840, 60, { fill: C.sand, sw: 2 }) + label(54, y + 37, 'Ethics:', { size: 17, weight: 700, fill: C.rust }) + label(124, y + 37, 'sensitive topic, so informed consent, anonymity, wellbeing and support afterwards', { size: 16 });
  y += 60;
  s += arrow(450, y + 6, 450, y + 34);
  s += box(150, y + 40, 600, 96, { fill: C.mustard }) + label(450, y + 74, 'Judgement: triangulation', { size: 20, weight: 700, anchor: 'middle' }) + label(450, y + 104, 'Questionnaire for extent, then unstructured interviews for meaning', { size: 17, anchor: 'middle' });
  add('07-racism-method-choice',
    svg(900, y + 160, 'Choosing a method: experiences of racism', s),
    'For a study of young people’s experiences of racism, a questionnaire is anonymous and shows how common racism is but loses meaning; unstructured interviews give rich accounts but use small samples and risk interviewer bias. Ethics require consent, anonymity and support. The judgement is triangulation: a questionnaire for extent, then interviews for meaning.',
    'Evaluate methods for this topic, cover ethics, then justify a combination.',
    '## Worked example: choosing a method for a Paper 2 topic');
}
