import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-sociology-8192-qualitative-and-quantitative-methods';
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

// 01 Questionnaire wording traps
{
  let s = '';
  const r0 = cardRow(108, [
    { head: 'Closed questions', fill: C.teal, body: 'Fixed options, tick boxes, rating scales: **quantitative** data' },
    { head: 'Open questions', fill: C.cream, body: 'Respondents answer in their own words: **qualitative** data' },
  ], { size: 17, headSize: 20 });
  s += r0.svg;
  const y = 108 + r0.h + 34;
  s += label(450, y, 'Three wording traps to avoid', { size: 20, weight: 700, anchor: 'middle' });
  const traps = [
    ['Leading', 'Suggests an answer'],
    ['Loaded', 'Uses emotive words'],
    ['Double-barrelled', 'Asks two things at once, e.g. “Do you enjoy school and homework?”'],
  ];
  let yy = y + 20;
  traps.forEach(([h, b]) => {
    s += box(30, yy, 250, 64, { fill: C.cream, edge: C.rust, sw: 2.5 }) + label(155, yy + 39, h, { size: 19, weight: 700, anchor: 'middle', fill: C.rust });
    s += box(296, yy, 574, 64, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + vcenter(314, yy, 64, 540, b, { size: 17 });
    yy += 76;
  });
  const n = note(yy + 6, 'Delivery and response rates', ['Online and postal forms reach many people cheaply but often have **low response rates**', 'Handing forms out in a classroom or workplace usually raises the response rate', 'An **attitude survey** asks people to rate statements from “strongly agree” to “strongly disagree”']);
  add('01-questionnaire-design',
    svg(900, Math.round(yy + 6 + n.h + 24), 'Designing a questionnaire', s + n.svg),
    'Closed questions give quantitative data and open questions give qualitative data. Three wording traps: leading questions suggest an answer, loaded questions use emotive words, and double-barrelled questions ask two things at once. Below, delivery choices affect response rates.',
    'Every question type and every word choice affects the data a questionnaire produces.',
    '## Questionnaires');
}

// 02 Interview types
{
  let s = '';
  const y = 150;
  s += `<defs><linearGradient id="gq" x1="0" x2="1"><stop offset="0" stop-color="${C.teal}"/><stop offset="1" stop-color="${C.cream}"/></linearGradient></defs>`;
  s += `<rect x="30" y="${y}" width="840" height="40" rx="20" fill="url(#gq)" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += label(30, y - 16, 'mainly QUANTITATIVE: comparable, reliable', { size: 16, weight: 700, fill: C.tealDark }) + label(870, y - 16, 'QUALITATIVE: depth, valid', { size: 16, weight: 700, fill: C.olive, anchor: 'end' });
  const types = [
    ['Structured', 'Same questions, same order, often fixed options: a questionnaire read aloud', 'Young and Willmott: nearly 2,000 people'],
    ['Semi-structured', 'Core questions, with freedom to probe further', 'Some comparability, some depth'],
    ['Unstructured', 'A guided conversation following up interesting points', 'Carlen: women, crime and poverty'],
  ];
  types.forEach(([h, b, e], i) => {
    const cx = 170 + i * 280;
    s += `<circle cx="${cx}" cy="${y + 20}" r="10" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/><line x1="${cx}" y1="${y + 40}" x2="${cx}" y2="${y + 62}" stroke="${C.ink}" stroke-width="2"/>`;
    s += box(cx - 130, y + 62, 260, 190, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + label(cx - 114, y + 92, h, { size: 19, weight: 700 }) + para(cx - 114, y + 122, 228, b, { size: 16 }).svg + para(cx - 114, y + 214, 228, e, { size: 15.5, fill: C.tealDark, weight: 600, italic: true }).svg;
  });
  const yy = y + 272;
  s += box(30, yy, 840, 70, { fill: C.tealLight, sw: 2 }) + label(50, yy + 30, 'Group interview or focus group', { size: 18, weight: 700 }) + label(50, yy + 54, 'Several people discuss a topic together, guided by the researcher', { size: 16 });
  const r = cardRow(yy + 90, [
    { head: 'Strengths', fill: C.teal, body: ['Higher response rates than postal questionnaires', 'The interviewer can explain questions', 'Unstructured: **rapport**; people explain views in their own words, raising validity'] },
    { head: 'Weaknesses', fill: C.cream, body: ['Expensive and slow, especially transcribing', '**Interviewer effect:** age, gender, ethnicity or manner shape answers', 'Unstructured: hard to repeat and compare; small samples'] },
  ], { size: 16, headSize: 19 });
  s += r.svg;
  add('02-interview-types',
    svg(900, Math.round(yy + 90 + r.h + 24), 'Types of interview', s),
    'A line from quantitative to qualitative. Structured interviews ask the same questions in the same order, as in Young and Willmott’s survey. Semi-structured interviews add freedom to probe. Unstructured interviews are guided conversations, as Carlen used. Focus groups discuss a topic together. Below, strengths and weaknesses.',
    'The less structured the interview, the more depth and the less comparability.',
    '## Interviews');
}

// 03 Observation grid
{
  let s = '';
  const x0 = 230, cw = 312, rh = 190;
  s += box(x0, 108, cw, 56, { fill: C.teal }) + label(x0 + cw / 2, 136, 'Participant', { size: 19, weight: 700, anchor: 'middle' }) + label(x0 + cw / 2, 156, 'researcher joins in', { size: 15.5, anchor: 'middle' });
  s += box(x0 + cw + 16, 108, cw, 56, { fill: C.tealLight }) + label(x0 + cw * 1.5 + 16, 136, 'Non-participant', { size: 19, weight: 700, anchor: 'middle' }) + label(x0 + cw * 1.5 + 16, 156, 'researcher watches', { size: 15.5, anchor: 'middle' });
  const rows = [['Overt', 'group knows', C.cream, ['Joining a school staff room with permission, as an open researcher', 'Sitting at the back of a classroom with a notepad'], 'Risk: the observer effect'], ['Covert', 'group does not know', C.mustard, ['Taking a job in a workplace without revealing the research', 'Watching behaviour in a public place unnoticed'], 'Avoids behaviour change, but raises consent and deception']];
  rows.forEach(([h, sub, f, cells, risk], i) => {
    const y = 176 + i * (rh + 14);
    s += box(30, y, 186, rh, { fill: f, sw: 2.5 }) + label(123, y + rh / 2 - 4, h, { size: 21, weight: 700, anchor: 'middle' }) + label(123, y + rh / 2 + 22, sub, { size: 15.5, anchor: 'middle' });
    cells.forEach((c, k) => { const x = x0 + k * (cw + 16); s += box(x, y, cw, rh, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + para(x + 18, y + 36, cw - 36, c, { size: 17 }).svg; });
    s += box(x0 + 18, y + rh - 58, cw * 2 + 16 - 36, 42, { fill: C.cream, edge: C.olive, sw: 1.5 }) + label(x0 + cw + 8, y + rh - 31, risk, { size: 15.5, weight: 600, anchor: 'middle', fill: C.olive });
  });
  const y = 176 + 2 * (rh + 14) + 4;
  const n = note(y, 'Watch for', ['**Observer effect** (Hawthorne effect): people act differently when they know they are watched', '**Going native:** the researcher becomes too involved and loses objectivity', 'Field notes often written later from memory; small, one-off settings give low reliability', '**Ethnography:** a detailed study of a way of life, e.g. Ball’s three years at Beachside']);
  add('03-observation-types',
    svg(900, Math.round(y + n.h + 24), 'Four kinds of observation', s + n.svg),
    'A two-by-two grid. Overt participant: joining a staff room with permission. Overt non-participant: sitting at the back of a classroom. Covert participant: taking a job without revealing the research. Covert non-participant: watching a public place unnoticed. Overt observation risks the observer effect; covert observation raises consent and deception. Below, going native and ethnography.',
    'Joining or watching, openly or in secret: each choice trades validity against other problems.',
    '## Observation');
}

// 04 Matching a method to a topic
{
  const rows = [
    ['How many couples share housework equally?', 'Closed-question questionnaire', 'Comparable numbers from a large sample', C.teal],
    ['Why do some pupils join anti-school groups?', 'Participant observation', 'Behaviour and meanings best seen in context', C.cream],
    ['Experiences of domestic violence', 'Unstructured interview', 'Sensitive: needs trust, privacy and depth', C.cream],
    ['Parents’ views on choosing schools', 'Focus group', 'Shows how opinions form through discussion', C.tealLight],
    ['Attitudes to crime across age groups', 'Structured interview', 'Comparable answers, good response rate', C.teal],
  ];
  let s = '';
  s += label(30, 112, 'Area of research', { size: 16, weight: 700, fill: C.muted }) + label(400, 112, 'Method', { size: 16, weight: 700, fill: C.muted }) + label(650, 112, 'Because…', { size: 16, weight: 700, fill: C.muted });
  rows.forEach(([q, m, why, f], i) => {
    const y = 126 + i * 92;
    s += box(30, y, 330, 78, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + vcenter(46, y, 78, 300, q, { size: 17 });
    s += arrow(364, y + 39, 392, y + 39, { w: 3 });
    s += box(396, y, 230, 78, { fill: f, sw: 2.5 }) + vcenter(511, y, 78, 210, m, { size: 17, weight: 700, anchor: 'middle' });
    s += box(642, y, 228, 78, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + vcenter(656, y, 78, 200, why, { size: 15.5 });
  });
  const y = 126 + 5 * 92 + 4;
  const n = note(y, 'Apply, do not list', 'Tie each strength and weakness to the specific topic, using reliability, validity and representativeness.');
  add('04-matching-methods',
    svg(900, Math.round(y + n.h + 24), 'Matching a method to a topic', s + n.svg),
    'Five research questions matched to methods: a closed-question questionnaire for how many couples share housework; participant observation for why pupils join anti-school groups; unstructured interviews for domestic violence; a focus group for parents’ views on school choice; and structured interviews for attitudes to crime across age groups.',
    'Choose the method that fits what the question asks: how many, why, or how people experience it.',
    '## Matching a method to a topic');
}

// 05 Mixed methods
{
  let s = '';
  const seq = (y, a, b, why) => {
    const c = hchain(y, [{ head: a[0], body: a[1], fill: a[2] }, { head: b[0], body: b[1], fill: b[2] }], { size: 16, ag: 70 });
    return c.svg + label(450, y - 10, why, { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  };
  s += seq(140, ['Interviews', 'Explore the issue in depth', C.cream], ['Questionnaire', 'Designed from what interviews revealed', C.teal], 'Sequencing: one way');
  s += seq(290, ['Questionnaire', 'Shows the scale of a pattern', C.teal], ['Interviews', 'Explain the pattern, with people the survey identified', C.cream], 'Sequencing: the other way');
  const r = cardRow(430, [
    { head: 'Useful', fill: C.teal, body: ['**Triangulation:** check one method against another', 'Numbers show the scale; words explain it', 'Willis: observation, group discussions, interviews and diaries gave a fuller picture'] },
    { head: 'Limits', fill: C.cream, body: ['More time and money; skills in several methods', 'Results may conflict', 'A small qualitative sample plus a survey is not automatically representative'] },
  ], { size: 16, headSize: 19 });
  s += r.svg;
  const n = note(430 + r.h + 16, null, 'Mixed methods is the design; triangulation is one of its uses.');
  add('05-mixed-methods',
    svg(900, Math.round(430 + r.h + 16 + n.h + 24), 'Mixed methods', s + n.svg),
    'Two sequences: interviews can help design a questionnaire, or a questionnaire can show the scale of a pattern and identify people to interview. Below, uses such as triangulation and Willis’s combined methods, and limits such as cost and conflicting results.',
    'Numbers show how big a pattern is; words explain why it happens.',
    '## Mixed methods');
}
