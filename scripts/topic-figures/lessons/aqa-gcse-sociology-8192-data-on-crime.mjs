import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-sociology-8192-data-on-crime';
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

// 01 Three sources compared
{
  const f = compareFig('Three sources of data on crime', {
    cols: [{ head: 'Police recorded crime', fill: C.teal }, { head: 'Victim surveys (CSEW)', fill: C.tealLight }, { head: 'Self-report studies', fill: C.cream }],
    rows: [
      { label: 'Who or what', cells: ['Crimes **reported** to (or found by) police and then **recorded**', 'People asked as **victims**: crimes in the past twelve months', 'People asked as **offenders**: what they have done, caught or not'] },
      { label: 'How', cells: ['Home Office counting rules; published by the ONS; secondary data', 'Large random sample of households; quantitative; since 1982', 'Anonymous questionnaires or interviews, often of young people'] },
      { label: 'Useful for', cells: ['National trends; crimes almost always reported, such as homicide and vehicle theft', 'Unreported crime; long-term trends unaffected by police recording', 'Hidden offending; testing who really commits crime'] },
      { label: 'Misses', cells: ['Unreported and unrecorded crime; changes with counting rules', 'Corporate crime, homicide, crimes against businesses; relies on memory', 'Serious crimes; white collar crime; people may lie or exaggerate'] },
    ],
    labelW: 130, size: 16, headSize: 18,
  });
  add('01-three-sources', f,
    'A table comparing three sources. Police recorded crime counts crimes reported and recorded under counting rules; it shows national trends but misses the dark figure. Victim surveys ask a random sample about crimes they suffered; they reveal unreported crime but miss corporate crime and homicide. Self-report studies ask people what offences they committed; they reveal hidden offending but miss serious and white collar crime.',
    'Each source sees a different part of crime, and each has its own blind spots.',
    '## The three main sources');
}

// 02 Figures can change without behaviour changing
{
  let s = '';
  s += box(330, 116, 240, 70, { fill: C.mustard }) + label(450, 148, 'Recorded crime', { size: 20, weight: 700, anchor: 'middle' }) + label(450, 172, 'figures change', { size: 17, anchor: 'middle' });
  const causes = [['Counting rules', 'change'], ['Recording practice', 'changes'], ['Police priorities', 'change'], ['The law', 'changes']];
  causes.forEach(([a, b], i) => {
    const x = 30 + i * 214;
    s += box(x, 250, 198, 74, { fill: C.tealLight, sw: 2 }) + label(x + 99, 282, a, { size: 18, weight: 700, anchor: 'middle' }) + label(x + 99, 306, b, { size: 16, anchor: 'middle' });
    s += arrow(x + 99, 246, 450 + (i - 1.5) * 50, 192, { w: 3 });
  });
  s += box(30, 344, 840, 64, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + label(450, 384, '…even when there is no change in how people actually behave', { size: 19, weight: 700, anchor: 'middle', fill: C.rust });
  const n = note(428, 'Example', ['In 2014 the UK Statistics Authority withdrew the National Statistics designation from police recorded crime, over concerns about the quality of recording', 'Police recorded crime rose in the later 2010s; the ONS linked this partly to better recording and more willingness to report']);
  add('02-recording-not-behaviour',
    svg(900, Math.round(428 + n.h + 24), 'A rise in recorded crime is not proof of more crime', s + n.svg),
    'Four boxes, changes in counting rules, recording practice, police priorities and the law, all point to a change in recorded crime figures even when behaviour has not changed. Below, the 2014 withdrawal of National Statistics status and the later-2010s rise linked partly to better recording.',
    'Always ask whether a change reflects behaviour or recording.',
    '## The three main sources');
}

// 03 Two filters
{
  let s = '';
  const stage = (y, text, fill, w = 520) => box(450 - w / 2, y, w, 62, { fill }) + label(450, y + 39, text, { size: 20, weight: 700, anchor: 'middle' });
  s += stage(112, 'Offence committed', C.teal, 400);
  s += arrow(450, 178, 450, 222, { w: 3.5 }) + `<path d="M330,226 L570,226 L520,276 L380,276 Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` + label(450, 258, 'Filter 1: reported?', { size: 18, weight: 700, anchor: 'middle' });
  s += arrow(450, 280, 450, 320, { w: 3.5 });
  s += stage(324, 'Reported to the police', C.tealLight, 440);
  s += arrow(450, 390, 450, 434, { w: 3.5 }) + `<path d="M330,438 L570,438 L520,488 L380,488 Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` + label(450, 470, 'Filter 2: recorded?', { size: 18, weight: 700, anchor: 'middle' });
  s += arrow(450, 492, 450, 532, { w: 3.5 });
  s += stage(536, 'In the official statistics', C.mustard, 380);
  // lost
  s += arrow(574, 251, 640, 251, { w: 3, color: C.rust, marker: 'ahR' }) + box(646, 192, 228, 126, { fill: C.panel, edge: C.rust, sw: 2 }) + label(660, 218, 'Lost if the victim…', { size: 16, weight: 700, fill: C.rust }) + bullets(662, 244, 200, ['does not know', 'does not care', 'is afraid', 'does not trust police'], { size: 15, gap: 2 }).svg;
  s += arrow(574, 463, 640, 463, { w: 3, color: C.rust, marker: 'ahR' }) + box(646, 412, 228, 106, { fill: C.panel, edge: C.rust, sw: 2 }) + label(660, 438, 'Lost because of…', { size: 16, weight: 700, fill: C.rust }) + bullets(662, 464, 200, ['police discretion', 'lack of evidence', 'recording rules'], { size: 15, gap: 2 }).svg;
  // who reaches
  s += box(30, 214, 250, 74, { fill: C.tealLight, edge: C.tealDark, sw: 2 }) + para(46, 244, 220, '**Victim surveys** reach some crime lost here', { size: 16 }).svg + arrow(282, 251, 326, 251, { w: 3, color: C.tealDark, marker: 'ahT' });
  s += box(30, 104, 196, 80, { fill: C.tealLight, edge: C.tealDark, sw: 2 }) + para(42, 130, 176, '**Self-report studies** reach offending never detected', { size: 15 }).svg + arrow(228, 143, 246, 143, { w: 3, color: C.tealDark, marker: 'ahT' });
  s += label(450, 636, 'No source measures the whole dark figure.', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('03-two-filters',
    svg(900, 662, 'Two filters create the dark figure', s),
    'A flow from offence committed, through filter 1 (is it reported?) and filter 2 (is it recorded?), to the official statistics. Crime is lost at filter 1 if the victim does not know, care, feels afraid or distrusts the police, and at filter 2 through police discretion, lack of evidence or recording rules. Victim surveys and self-report studies each reach some of the lost crime.',
    'The dark figure is crime lost at reporting or at recording, not unsolved crime.',
    '## The dark figure of crime');
}

// 04 Trends timeline
{
  let s = '';
  const y = 260;
  s += arrow(50, y, 860, y, { w: 4 });
  const ev = [
    [120, '1982', 'Victim survey begins as the British Crime Survey', 'up'],
    [300, 'Mid-1990s', 'CSEW estimates of crime peak', 'down'],
    [470, 'Over two decades', 'Big falls in many crimes, such as burglary and vehicle crime', 'up'],
    [620, '2012', 'Renamed the Crime Survey for England and Wales', 'down'],
    [700, 'Mid-2010s', 'CSEW adds fraud and computer misuse: among the most common crimes', 'up'],
    [790, 'Later 2010s', 'Police recorded crime rises, partly better recording', 'down'],
  ];
  ev.forEach(([x, d, txt, dir], i) => {
    s += `<circle cx="${x}" cy="${y}" r="9" fill="${i === 1 ? C.mustard : C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`;
  });
  // place cards in alternating rows to avoid overlap
  const up = ev.filter((e) => e[3] === 'up'), down = ev.filter((e) => e[3] === 'down');
  const cw = 250;
  up.forEach(([x, d, txt], i) => {
    const cx = 30 + i * (cw + 45) + cw / 2;
    s += `<line x1="${x}" y1="${y - 10}" x2="${cx}" y2="${y - 50}" stroke="${C.muted}" stroke-width="2"/>`;
    s += box(cx - cw / 2, 112, cw, 98, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + label(cx - cw / 2 + 14, 138, d, { size: 17, weight: 700, fill: C.tealDark }) + para(cx - cw / 2 + 14, 162, cw - 40, txt, { size: 15 }).svg;
  });
  down.forEach(([x, d, txt], i) => {
    const cx = 30 + i * (cw + 45) + cw / 2;
    s += `<line x1="${x}" y1="${y + 10}" x2="${cx}" y2="${y + 50}" stroke="${C.muted}" stroke-width="2"/>`;
    s += box(cx - cw / 2, y + 50, cw, 92, { fill: i === 0 ? C.cream : C.panel, edge: i === 0 ? C.olive : C.panelEdge, sw: 2 }) + label(cx - cw / 2 + 14, y + 76, d, { size: 17, weight: 700, fill: C.tealDark }) + para(cx - cw / 2 + 14, y + 100, cw - 40, txt, { size: 15 }).svg;
  });
  const n = note(y + 166, null, ['Recorded offending is concentrated among young people and men', 'In the exam you will usually be given the data: read it accurately']);
  add('04-trends-timeline',
    svg(900, Math.round(y + 166 + n.h + 24), 'Trends in crime figures, in outline', s + n.svg, 'England and Wales'),
    'A timeline. 1982: the British Crime Survey begins. Mid-1990s: CSEW estimates of crime peak, then fall over two decades for crimes such as burglary. 2012: renamed the Crime Survey for England and Wales. Mid-2010s: fraud and computer misuse added. Later 2010s: police recorded crime rises, partly because of better recording.',
    'Survey crime fell from the mid-1990s; recorded crime’s later rise partly reflects better recording.',
    '## Patterns and trends');
}

// 05 How to describe data
{
  const f = flowFig('How to describe crime data in the exam', {
    steps: [
      { head: 'State the overall direction', body: 'Rise, fall or stable?' },
      { head: 'Quote the start and end figures', body: 'Never describe a table without quoting numbers.' },
      { head: 'Note any exception or turning point', body: 'Where does the pattern change?' },
      { head: 'Calculate, if asked', body: 'A difference or a percentage change.' },
      { head: 'Ask: behaviour or recording?', body: 'Did offending change, or did reporting, recording or counting rules change?', fill: C.cream, edge: C.olive },
    ],
  });
  add('05-describing-data', f,
    'Five numbered steps for describing crime data: state the overall direction, quote the start and end figures, note any exception or turning point, calculate a difference or percentage change if asked, then ask whether the change reflects behaviour or recording.',
    'Describe the numbers first, then question what they really measure.',
    '## Patterns and trends');
}
