import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'a-level-aqa-sociology-crime-and-deviance';
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

// 01 Paper 3 and the four content areas
{
  let s = '', y = 104;
  const top = hchain(y, [
    { head: '3.3.1 Crime and Deviance', body: 'substantive content', fill: C.teal },
    { head: '3.3.2 Theory and Methods', body: 'theory and the research process', fill: C.cream },
  ], { ag: 80, arrows: false });
  s += top.svg + `<circle cx="450" cy="${y + top.h / 2}" r="22" fill="${C.ink}"/>` + t(450, y + top.h / 2 + 9, '+', { size: 28, weight: 700, fill: '#ffffff', anchor: 'middle' });
  y += top.h;
  s += arrow(450, y + 6, 450, y + 44);
  y += 52;
  s += `<rect x="250" y="${y}" width="400" height="56" rx="14" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + t(450, y + 36, 'Paper 3: a single examination', { size: 21, weight: 700, anchor: 'middle' });
  y += 56 + 40;
  s += label(450, y, 'The four content areas of 3.3.1', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  y += 20;
  const r1 = cardRow(y, [
    { head: 'Social order and control', body: 'Why most people conform most of the time, and how deviance is defined and regulated.', fill: C.teal },
    { head: 'Social distribution of crime', body: 'By ethnicity, gender and social class, with recent patterns and trends: who commits, and who is recorded as committing, crime.', fill: C.teal },
  ], { size: 17 });
  s += r1.svg; y += r1.h + 16;
  const r2 = cardRow(y, [
    { head: 'Global and institutional scale', body: ['Globalisation and crime', 'The media and crime', 'Green crime', 'Human rights and state crimes'], fill: C.cream },
    { head: 'Responding to crime', body: ['Crime control, surveillance, prevention and punishment', 'Victims', 'The criminal justice system and other agencies'], fill: C.cream },
  ], { size: 17 });
  s += r2.svg; y += r2.h;
  add('01-paper-3-content-areas', svg(900, y + 26, 'Crime and Deviance in Paper 3', s),
    'Crime and Deviance (3.3.1) and Theory and Methods (3.3.2) combine into Paper 3, a single examination. The four content areas are social order and control, the social distribution of crime, crime at a global and institutional scale, and responses to crime.',
    'Paper 3 examines Crime and Deviance together with Theory and Methods.',
    '## Syllabus coverage');
}

// 02 Linking a theory to the two core themes
{
  let s = '', y = 104;
  s += `<rect x="260" y="${y}" width="380" height="58" rx="14" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + t(450, y + 37, 'An explanation of crime', { size: 21, weight: 700, anchor: 'middle' });
  s += arrow(360, y + 62, 230, y + 112) + arrow(540, y + 62, 670, y + 112);
  s += label(450, y + 100, 'connect to', { size: 17, italic: true, fill: C.tealDark, anchor: 'middle', weight: 600 });
  y += 120;
  const r = cardRow(y, [
    { head: 'Socialisation, culture and identity', sub: 'Example: subcultural values', body: 'How group norms are learned and transmitted.', fill: C.teal },
    { head: 'Social differentiation, power and stratification', sub: 'Example: crime and social class', body: 'Whose behaviour gets defined and processed as criminal in the first place.', fill: C.cream },
  ], { size: 17 });
  s += r.svg; y += r.h + 20;
  const n = note(y, 'A list of named perspectives is not enough', 'Stating a theory without connecting it to one or both core themes misses what the specification is built to test.');
  s += n.svg; y += n.h;
  add('02-two-core-themes', svg(900, y + 26, 'Connecting crime theories to the core themes', s),
    'An explanation of crime links to two core themes: socialisation, culture and identity (for example, subcultural values and how group norms are learned) and social differentiation, power and stratification (for example, whose behaviour is defined as criminal).',
    'A strong answer connects each theory of crime to one or both core themes.',
    '## Applying the two core themes');
}

// 03 Theory-to-explanation map
{
  add('03-theory-map', compareFig('Three ways of explaining crime', {
    cols: [{ head: 'Consensus', fill: C.teal }, { head: 'Conflict', fill: C.cream }, { head: 'Interactionist / labelling', fill: C.tealLight }],
    labelW: 150, size: 16,
    rows: [
      { label: 'What crime is', cells: ['A failure of shared norms, or a functional safety valve.', 'A product of unequal power; law written to serve some groups’ interests over others’.', 'Socially constructed through being labelled, not an inherent property of an act.'] },
      { label: 'Why crime might vary by class', cells: ['Crime as a failure of shared norms, or as serving a function in reinforcing social solidarity.', 'Crime and its enforcement reflect unequal power, with law written or applied to serve some groups.', 'Apparent class differences partly reflect differential policing and labelling, not different behaviour.'] },
    ],
    foot: { head: 'Apply the map to official statistics', text: 'A labelling or conflict lens explains why working-class or ethnic-minority offending might be recorded at different rates than it actually occurs, instead of assuming statistics simply describe reality.' },
  }),
    'A grid comparing consensus, conflict and interactionist or labelling explanations. Each column shows what crime is in that view and how it would explain class differences in crime.',
    'Consensus, conflict and labelling give three different answers to why crime varies by class.',
    '## Building a theory-to-explanation map');
}

// 04 Same question at three scales
{
  let s = '', y = 104;
  s += `<rect x="150" y="${y}" width="600" height="62" rx="14" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + t(450, y + 39, 'How is harmful behaviour defined, and by whom?', { size: 21, weight: 700, anchor: 'middle' });
  const cw = (840 - 32) / 3;
  [0, 1, 2].forEach((i) => { const cx = 30 + i * (cw + 16) + cw / 2; s += arrow(450 + (i - 1) * 120, y + 66, cx, y + 116); });
  y += 124;
  const r = cardRow(y, [
    { head: 'Individual offender', sub: 'Social order and control; social distribution', body: 'Who commits crime, and who is recorded as committing it.', fill: C.teal },
    { head: 'Corporation', sub: 'Green crime', body: 'A multinational corporation’s environmental harm.', fill: C.cream },
    { head: 'State', sub: 'State crime', body: 'A state’s own human rights violations.', fill: C.tealLight },
  ], { size: 17 });
  s += r.svg; y += r.h + 18;
  s += arrow(60, y + 14, 840, y + 14, { w: 4, color: C.olive, marker: 'ahO' });
  s += label(450, y + 46, 'from individual to institutional and global scale', { size: 17, weight: 600, fill: C.olive, anchor: 'middle' });
  y += 56;
  add('04-scales-of-crime', svg(900, y + 24, 'One debate, three scales', s),
    'The question of how harmful behaviour is defined and by whom applies to individual offenders, to corporations through green crime, and to states through state crime and human rights violations.',
    'Green crime and state crime extend the same theoretical debate beyond the individual offender.',
    '## Connecting content areas together');
}

// 05 Media, perception and statistics
{
  let s = '', y = 120;
  const c = hchain(y, [
    { head: 'Media representation', body: 'how crime is shown', fill: C.teal },
    { head: 'Public perception', body: 'who commits crime, and how much', fill: C.panel },
    { head: 'Policing priorities', body: 'where attention goes', fill: C.panel },
    { head: 'Official statistics', body: 'what is recorded', fill: C.cream },
  ], { ag: 48, size: 16 });
  s += c.svg; y += c.h + 26;
  const n = note(y, 'Not independent of each other', 'Media representation and the "real" social distribution of crime are linked, so the media topic belongs with the social-distribution content.');
  s += n.svg; y += n.h;
  add('05-media-and-statistics', svg(900, y + 26, 'How the media can shape crime figures', s, 'a chain of influence'),
    'A chain from media representation of crime to public perception of who commits crime, to policing priorities, to the official statistics that are recorded.',
    'Media images of crime can feed through perception and policing into the statistics.',
    '## Connecting content areas together');
}

// 06 Data sources compared
{
  add('06-data-sources', versusFig('What each crime data source can show', {
    left: { head: 'Official statistics', items: ['Capture only crime that is reported and recorded', 'Subject to policing practices and potential bias', 'A positivist reliance on them may give a distorted picture of the social distribution of crime'] },
    right: { head: 'Self-report and victim studies', items: ['Capture experiences of crime that may never appear in official records', 'Can give a genuinely different picture of who commits or experiences crime'] },
    foot: { head: 'Exam habit', text: 'Name the specific data source, and state what it can and cannot reliably show. Do not cite a bare statistic as if it were an uncontested fact.' },
  }),
    'Official statistics capture only reported and recorded crime and are shaped by policing practices, while self-report and victim studies capture crime that may never appear in official records.',
    'Different data sources give different pictures of the social distribution of crime.',
    '## How to approach it');
}
