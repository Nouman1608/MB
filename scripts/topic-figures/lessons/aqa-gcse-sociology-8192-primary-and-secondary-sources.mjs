import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-sociology-8192-primary-and-secondary-sources';
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

// 01 Who collected and why
{
  let s = '';
  const person = (x, y, f = C.teal, r = 18) => `<circle cx="${x}" cy="${y - r * 1.9}" r="${r * 0.62}" fill="${f}" stroke="${C.ink}" stroke-width="2.2"/><path d="M${x - r},${y} Q${x - r},${y - r * 1.2} ${x},${y - r * 1.2} Q${x + r},${y - r * 1.2} ${x + r},${y} Z" fill="${f}" stroke="${C.ink}" stroke-width="2.2"/>`;
  const doc = (x, y) => `<path d="M${x},${y} L${x + 70},${y} L${x + 90},${y + 20} L${x + 90},${y + 110} L${x},${y + 110} Z" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + [30, 50, 70, 90].map((d) => `<line x1="${x + 14}" y1="${y + d}" x2="${x + 76}" y2="${y + d}" stroke="${C.muted}" stroke-width="2"/>`).join('');
  s += person(140, 250, C.teal) + label(140, 282, 'Researcher A', { size: 18, weight: 700, anchor: 'middle' }) + label(140, 306, 'carries out the interview', { size: 16, anchor: 'middle', fill: C.muted });
  s += doc(405, 150) + label(450, 290, 'Interview transcript', { size: 18, weight: 700, anchor: 'middle' });
  s += person(760, 250, C.cream) + label(760, 282, 'Researcher B', { size: 18, weight: 700, anchor: 'middle' }) + label(760, 306, 'reads it years later', { size: 16, anchor: 'middle', fill: C.muted });
  s += arrow(190, 200, 395, 200, { w: 4, color: C.tealDark, marker: 'ahT' }) + arrow(505, 200, 712, 200, { w: 4, color: C.olive, marker: 'ahO' });
  s += `<rect x="215" y="140" width="150" height="40" rx="20" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + label(290, 166, 'PRIMARY', { size: 17, weight: 700, anchor: 'middle' });
  s += `<rect x="535" y="140" width="150" height="40" rx="20" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/>` + label(610, 166, 'SECONDARY', { size: 17, weight: 700, anchor: 'middle' });
  const r = cardRow(340, [
    { head: 'Primary data', fill: C.teal, body: 'Collected first-hand by the researcher, for their own study' },
    { head: 'Secondary data', fill: C.cream, body: 'Already exist: produced by someone else, usually for a different purpose' },
  ], { size: 17, headSize: 20 });
  s += r.svg;
  const n = note(340 + r.h + 18, 'The test', 'Ask who collected the data and why, not what type of data it is. Official statistics are secondary data for any sociologist who uses them.');
  add('01-who-collected',
    svg(900, Math.round(340 + r.h + 18 + n.h + 24), 'Primary or secondary? It depends who collected it', s + n.svg),
    'The same interview transcript is primary data for the researcher who carried out the interview, and secondary data for another researcher who reads it later. Below, definitions of primary and secondary data and the test: who collected the data and why.',
    'The same data can be primary for one researcher and secondary for another.',
    '## The basic distinction');
}

// 02 Primary vs secondary strengths and limits
{
  const f = versusFig('Primary and secondary data compared', {
    left: { head: 'Primary', fill: C.teal, sub: 'Questionnaires, interviews, focus groups, observation', items: ['**+** Fit the research aim exactly', '**+** Researcher knows how they were collected', '**+** Up to date; researcher controls the sample', '**–** Take time and cost money', '**–** Access to some groups is difficult', '**–** Ethical issues managed directly', '**–** Cannot usually reach the past'] },
    right: { head: 'Secondary', fill: C.cream, sub: 'Statistics, previous research, documents, media', items: ['**+** Quick and cheap, often free', '**+** Can cover very large groups', '**+** May be the only way to study the past', '**+** Avoid some ethical problems; allow comparison over time (Devine)', '**–** Collected for another purpose', '**–** Definitions may differ (Townsend and the state standard)', '**–** May be biased, incomplete or out of date'] },
    foot: { head: 'Common mistake', text: 'Secondary data are not automatically less reliable than primary data: it depends on the source.' },
  });
  add('02-primary-secondary-compared', f,
    'Two panels. Primary data fit the aim, are up to date and let the researcher control the sample, but cost time and money, face access and ethical issues and cannot reach the past. Secondary data are cheap, cover large groups and the past and allow comparison, but were collected for another purpose and may use different definitions or be biased.',
    'Primary data fit the aim; secondary data reach further, but were made for someone else.',
    '## Secondary sources');
}

// 03 Four questions for judging a document
{
  const f = cardsFig('Judging a document: four questions', {
    cards: [
      { head: 'Is it genuine?', fill: C.teal, body: 'Is it what it claims to be, written by the person it claims?' },
      { head: 'Is it believable?', fill: C.tealLight, body: 'Was the author sincere and accurate, or writing to impress, persuade or protect themselves?' },
      { head: 'Is it typical?', fill: C.cream, body: 'Does it represent a wider group, or just one person or organisation?' },
      { head: 'Is its meaning clear?', fill: C.tealLight, body: 'Can the researcher understand what the author meant, especially in older texts or slang?' },
    ],
    ncol: 2, size: 17, headSize: 20, badges: true,
    foot: { head: 'Example: a school’s published behaviour policy', text: 'Genuine and clear, but it may describe how the school wants to be seen rather than what actually happens in classrooms.' },
  });
  add('03-judging-documents', f,
    'Four numbered questions for judging a document: is it genuine, is it believable, is it typical, and is its meaning clear? Below, a school behaviour policy is genuine and clear but may show how the school wants to be seen rather than what happens in classrooms.',
    'Always ask whether a document is genuine, believable, typical and clear.',
    '## Judging a document: four questions');
}

// 04 Content analysis
{
  let s = '';
  const L = headPanel(30, 108, 404, 360, 'Quantitative', { fill: C.teal, size: 21 });
  const R = headPanel(466, 108, 404, 360, 'Qualitative', { fill: C.cream, size: 21 });
  s += L.svg + R.svg;
  s += para(52, 188, 360, '**Counting** how often something appears, using a coding sheet', { size: 16 }).svg;
  // coding sheet
  const gx = 60, gy = 250;
  s += `<rect x="${gx}" y="${gy}" width="344" height="150" fill="${C.panel}" stroke="${C.ink}" stroke-width="2"/>`;
  s += `<line x1="${gx}" y1="${gy + 44}" x2="${gx + 344}" y2="${gy + 44}" stroke="${C.ink}" stroke-width="2"/><line x1="${gx + 214}" y1="${gy}" x2="${gx + 214}" y2="${gy + 150}" stroke="${C.ink}" stroke-width="2"/><line x1="${gx}" y1="${gy + 97}" x2="${gx + 344}" y2="${gy + 97}" stroke="${C.panelEdge}" stroke-width="2"/>`;
  s += label(gx + 107, gy + 29, 'In the advert', { size: 15.5, weight: 700, anchor: 'middle' }) + label(gx + 279, gy + 29, 'Tally', { size: 15.5, weight: 700, anchor: 'middle' });
  s += label(gx + 12, gy + 76, 'Man doing housework', { size: 15.5 }) + label(gx + 12, gy + 129, 'Woman doing housework', { size: 15.5 });
  s += label(232, 440, 'e.g. housework in television adverts', { size: 15.5, anchor: 'middle', fill: C.muted, italic: true });
  s += para(488, 188, 360, '**Examining meanings** and messages in the content', { size: 16 }).svg;
  s += box(500, 250, 336, 150, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + label(516, 280, 'News report about young people', { size: 15.5, weight: 700 }) + tl(516, 312, ['How are they described?', 'Which words are used?', 'What message is given?'], { size: 16 }, 26);
  s += label(668, 440, 'e.g. how news reports describe young people', { size: 15.5, anchor: 'middle', fill: C.muted, italic: true });
  const r = cardRow(490, [
    { head: 'Strengths', fill: C.tealLight, body: ['Media content is easy to access', 'A reusable coding sheet makes quantitative analysis fairly reliable', 'Reveals patterns in representation'] },
    { head: 'Limitations', fill: C.tealLight, body: ['Deciding how to code involves judgement', 'Shows what is in the media, not how audiences interpret it'] },
  ], { size: 16, headSize: 19 });
  s += r.svg;
  const n = note(490 + r.h + 16, null, 'Based on secondary sources, but the counting and coding are the researcher’s own work, so it produces new primary findings.');
  add('04-content-analysis',
    svg(900, Math.round(490 + r.h + 16 + n.h + 24), 'Content analysis', s + n.svg),
    'Left: quantitative content analysis counts how often something appears using a coding sheet, such as men and women doing housework in adverts. Right: qualitative content analysis examines meanings, such as how news reports describe young people. Below, strengths and limitations, and a note that it turns secondary material into new primary findings.',
    'Content analysis turns secondary material into the researcher’s own findings.',
    '## Content analysis');
}

// 05 Combining sources
{
  const items = [
    { head: 'Secondary first', body: 'Shows what is already known and helps design the study', fill: C.cream },
    { head: 'Primary fills the gap', body: 'New research on what is not yet known', fill: C.teal },
    { head: 'Triangulation', body: 'Compare primary findings with secondary data', fill: C.mustard },
  ];
  const c = hchain(118, items, { size: 17, ag: 50 });
  let s = c.svg;
  const y = 118 + c.h + 46;
  s += label(450, y, 'Example: why are some pupils excluded from school?', { size: 19, weight: 700, anchor: 'middle' });
  const r = cardRow(y + 18, [
    { head: 'Official exclusion figures', fill: C.cream, body: 'Which groups are most affected?' },
    { head: 'Interviews with excluded pupils and parents', fill: C.teal, body: 'What are the reasons?' },
  ], { size: 17, headSize: 19, gap: 60 });
  s += r.svg + arrow(424, y + 18 + r.h / 2, 474, y + 18 + r.h / 2, { w: 4 });
  add('05-combining-sources',
    svg(900, Math.round(y + 18 + r.h + 24), 'Combining sources', s),
    'A chain: secondary sources show what is known and help design the study, primary research fills the gap, and comparing the two gives triangulation. Example: official exclusion figures show which groups are most affected, then interviews with excluded pupils and parents explain why.',
    'Most studies start with secondary sources and use primary research to fill the gap.',
    '## Combining sources');
}

// 06 Worked example: fathers and childcare
{
  let s = '';
  const y = 236;
  s += `<rect x="40" y="${y - 12}" width="560" height="24" fill="${C.cream}"/><rect x="600" y="${y - 12}" width="260" height="24" fill="${C.teal}"/>`;
  s += arrow(40, y, 868, y, { w: 4 }) + label(60, y + 34, 'fifty years ago', { size: 16, fill: C.muted }) + label(860, y + 34, 'today', { size: 16, anchor: 'end', fill: C.muted });
  s += box(30, 120, 560, 80, { fill: C.cream, edge: C.olive, sw: 2 }) + label(50, 150, 'Secondary sources reach the past', { size: 18, weight: 700 }) + label(50, 178, 'primary research cannot reach fathers in the 1970s', { size: 16, fill: C.muted });
  s += box(610, 120, 260, 80, { fill: C.teal, sw: 2 }) + label(626, 150, 'Primary research', { size: 18, weight: 700 }) + label(626, 178, 'interviews with fathers', { size: 16 });
  const r = cardRow(y + 56, [
    { head: 'Earlier studies', fill: C.cream, body: 'Young and Willmott’s survey: what was found at the time' },
    { head: 'Official statistics', fill: C.cream, body: 'Changes in mothers’ and fathers’ employment' },
    { head: 'Interviews today', fill: C.teal, body: 'How fathers see their role now' },
  ], { size: 16, headSize: 19 });
  s += r.svg;
  const n = note(y + 56 + r.h + 16, 'Recognise the limits', 'Earlier studies used different definitions and questions, so comparisons may not be exact: the secondary data were collected for different purposes.');
  add('06-worked-example',
    svg(900, Math.round(y + 56 + r.h + 16 + n.h + 24), 'Choosing sources: fathers and childcare', s + n.svg, 'Changes in how fathers take part in childcare over fifty years'),
    'A fifty-year timeline. Secondary sources, such as Young and Willmott’s survey and official employment statistics, cover the past, which primary research cannot reach. Interviews with fathers today cover the present. A note warns that earlier studies used different definitions, so comparisons may not be exact.',
    'Use secondary sources for the past and primary research for the present, then compare with care.',
    '## Worked example: choosing sources for a specific area');
}
