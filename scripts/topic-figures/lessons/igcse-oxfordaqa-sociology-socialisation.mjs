import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-oxfordaqa-sociology-socialisation';
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

const box = (x, y, w, h, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.r ?? 12}" fill="${o.fill || C.panel}" stroke="${o.edge || C.ink}" stroke-width="${o.sw || 2.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
const vcenter = (x, yTop, h, w, s, o = {}) => { const size = o.size || 17; const p = para(0, 0, w, s, o); return para(x, yTop + (h - p.h) / 2 + size * 0.95, w, s, o).svg; };

// 01 Scope: titles vs contents
{
  const parts = [
    ['3.2.2.1', 'Individuals and Society', 'Culture; the sociological imagination', false],
    ['3.2.2.2', 'Socialisation', 'Types, agencies and perspectives on socialisation', true],
    ['3.2.2.3', '“Social Identities and Social Change”', 'Formal and informal social control, sanctions, agencies of control, punishment, crime prevention', false],
    ['3.2.2.4', '“Social Control”', 'Crime and deviance: social construction of crime, types of crime, measuring crime, patterns of offending', false],
  ];
  let s = label(250, 124, 'Printed title', { size: 17, weight: 700, anchor: 'middle', fill: C.muted }) + label(670, 124, 'What it actually covers', { size: 17, weight: 700, anchor: 'middle', fill: C.muted });
  let y = 140;
  parts.forEach(([n, t2, c, me], i) => {
    const h = 96;
    s += box(30, y, 440, h, { fill: me ? C.mustard : C.panel, edge: me ? C.ink : C.panelEdge, sw: me ? 3 : 2 });
    s += label(50, y + 36, n, { size: 17, weight: 700, fill: C.muted }) + para(50, y + 64, 400, t2, { size: 18, weight: 700 }).svg;
    s += arrow(476, y + h / 2, 506, y + h / 2, { w: 3 });
    s += box(512, y, 358, h, { fill: me ? C.cream : C.panel, edge: me ? C.ink : C.panelEdge, sw: me ? 3 : 2 }) + vcenter(528, y, h, 326, c, { size: 16 });
    if (i === 2 || i === 3) s += `<rect x="40" y="${y + h - 26}" width="110" height="20" rx="10" fill="${C.sand}"/>` + label(95, y + h - 11, 'title swapped', { size: 13, weight: 700, anchor: 'middle', fill: C.rust });
    y += h + 12;
  });
  const n = note(y + 6, null, 'This guide covers 3.2.2.2 only. Cite part numbers and contents, not titles alone; revise the other three parts from the specification and your textbook.');
  add('01-topic-scope',
    svg(900, Math.round(y + 6 + n.h + 24), 'Socialisation and social control: four parts', s + n.svg),
    'Four parts of 3.2.2 with printed title and actual content. 3.2.2.1 Individuals and Society covers culture and the sociological imagination; 3.2.2.2 Socialisation, highlighted, is this guide; 3.2.2.3, titled Social Identities and Social Change, actually covers social control; 3.2.2.4, titled Social Control, actually covers crime and deviance.',
    'The titles of 3.2.2.3 and 3.2.2.4 are crossed, so cite part numbers and contents.',
    '## Scope of this guide');
}

// 02 Four types of socialisation across a life
{
  let s = '';
  const y = 250;
  s += `<line x1="60" y1="${y}" x2="850" y2="${y}" stroke="${C.ink}" stroke-width="5" marker-end="url(#ah)"/>`;
  s += label(60, y + 32, 'early life', { size: 16, fill: C.muted }) + label(840, y + 32, 'later life', { size: 16, fill: C.muted, anchor: 'end' });
  s += `<rect x="70" y="${y - 30}" width="230" height="22" rx="6" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` + `<rect x="230" y="${y - 58}" width="610" height="22" rx="6" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>`;
  s += label(80, y - 40, '', {}) + label(185, y - 70, '', {});
  s += `<polygon points="684,${y - 8} 700,${y - 30} 716,${y - 8}" fill="${C.rust}"/>` + label(576, y - 72, '', {});
  s += label(185, 150, 'Primary', { size: 18, weight: 700, anchor: 'middle' }) + path(`M185,158 L185,${y - 32}`, { w: 2, extra: 'stroke-dasharray="4 4"' });
  s += label(450, 150, 'Secondary', { size: 18, weight: 700, anchor: 'middle' }) + path(`M450,158 L450,${y - 60}`, { w: 2, extra: 'stroke-dasharray="4 4"' });
  s += label(700, 150, 'Re-socialisation', { size: 18, weight: 700, anchor: 'middle', fill: C.rust }) + path(`M700,184 L700,${y - 62}`, { w: 2, extra: 'stroke-dasharray="4 4"' });
  s += label(700, 174, 'after a major life change', { size: 15, anchor: 'middle', fill: C.muted });
  const r = cardRow(y + 60, [
    { head: 'Primary', fill: C.mustard, body: 'Early learning of norms and values, mainly within the family' },
    { head: 'Secondary', fill: C.teal, body: 'Later, through schools, peers, media and the workplace' },
    { head: 'Re-socialisation', fill: C.sand, body: 'Learning new norms and values that replace old ones, often after a major life change' },
    { head: 'Inadequate', fill: C.panel, body: 'Has failed to instil shared norms and values; some link it to later deviance' },
  ], { size: 16, headSize: 18, gap: 12 });
  s += r.svg;
  add('02-types-of-socialisation',
    svg(900, y + 60 + r.h + 24, 'Four types of socialisation', s),
    'A life-course line. Primary socialisation happens early, mainly in the family; secondary socialisation follows through wider agencies; re-socialisation replaces earlier norms after a major life change. Four cards define primary, secondary, re-socialisation and inadequate socialisation, which some perspectives link to later deviance.',
    'Know all four types as separate concepts, not just primary and secondary.',
    '## How to approach it');
}

// 03 Agencies and processes
{
  const cx = 450, cy = 400;
  const ag = [
    ['Family', 'direct instruction and role modelling', C.mustard],
    ['School', 'formal curriculum and the hidden curriculum of implicit rules', C.teal],
    ['Media', 'modelling behaviours and norms in its content', C.tealLight],
    ['Peers', '', C.panel], ['Religion', '', C.panel], ['Workplace', '', C.panel],
  ];
  let s = '';
  const pos = ag.map((_, i) => { const a = -Math.PI / 2 + (i * 2 * Math.PI) / 6; return [cx + 300 * Math.cos(a), cy + 230 * Math.sin(a)]; });
  pos.forEach(([x, y]) => { s += `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="${C.tealDark}" stroke-width="3"/>`; });
  s += `<circle cx="${cx}" cy="${cy}" r="86" fill="${C.ink}"/>` + label(cx, cy - 4, 'THE', { size: 18, weight: 700, anchor: 'middle', fill: '#ffffff' }) + label(cx, cy + 20, 'INDIVIDUAL', { size: 18, weight: 700, anchor: 'middle', fill: '#ffffff' });
  ag.forEach(([h, p, f], i) => {
    const [x, y] = pos[i], w = 250, hh = 104;
    s += box(x - w / 2, y - hh / 2, w, hh, { fill: f, dash: p ? '' : '7 5' });
    s += label(x, y - hh / 2 + 30, h, { size: 19, weight: 700, anchor: 'middle' });
    s += p ? para(x, y - hh / 2 + 54, w - 24, p, { size: 15, anchor: 'middle' }).svg : label(x, y - hh / 2 + 64, 'your turn: how does it socialise?', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  });
  add('03-agencies-processes',
    svg(900, 690, 'Agencies and how they socialise', s),
    'Six agencies around the individual. Family socialises through direct instruction and role modelling; school through the formal and hidden curriculum; media through modelling behaviours in its content. Peers, religion and the workplace are left for students to complete with their own process.',
    'Name the agency and the process: listing agencies alone loses marks.',
    '## How to approach it');
}

// 04 Four perspectives: structural vs active
{
  let s = '';
  s += label(240, 116, 'Structural views', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark }) + label(240, 138, 'socialisation shapes people', { size: 15, anchor: 'middle', fill: C.muted });
  const cards = [
    [30, 156, 'Functionalist', 'Necessary for social order and value consensus', C.teal],
    [30, 316, 'Marxist', 'Ruling class reproduces its dominance and controls the workforce', C.tealLight],
    [30, 476, 'Feminist', 'Reproduces gender roles: family and media model different expectations for boys and girls', C.cream],
  ];
  cards.forEach(([x, y, h, b, f]) => { s += box(x, y, 420, 144, { fill: f }) + label(x + 20, y + 36, h, { size: 21, weight: 700 }) + para(x + 20, y + 66, 380, b, { size: 17 }).svg; });
  s += label(670, 116, 'Social action view', { size: 19, weight: 700, anchor: 'middle', fill: C.olive }) + label(670, 138, 'people shape their socialisation', { size: 15, anchor: 'middle', fill: C.muted });
  s += box(480, 156, 390, 464, { fill: C.mustard }) + label(500, 192, 'Social action /', { size: 21, weight: 700 }) + label(500, 220, 'interactionist', { size: 21, weight: 700 });
  s += para(500, 258, 350, 'Individuals are not passive recipients. They actively:', { size: 17 }).svg;
  ['interpret', 'negotiate', 'sometimes resist'].forEach((w, i) => { s += `<rect x="520" y="${320 + i * 64}" width="310" height="48" rx="24" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/>` + label(675, 351 + i * 64, w, { size: 19, weight: 700, anchor: 'middle' }); });
  s += para(500, 540, 350, 'the norms that agencies present to them', { size: 17 }).svg;
  add('04-four-perspectives',
    svg(900, 644, 'Four perspectives on socialisation', s),
    'Left: three structural views. Functionalists see socialisation as necessary for order and consensus; Marxists see the ruling class reproducing its dominance; feminists see gender roles reproduced through family and media. Right: the social action or interactionist view, in which individuals interpret, negotiate and sometimes resist norms.',
    'Three perspectives see socialisation shaping people; interactionists see people shaping it.',
    '## How to approach it');
}

// 05 Compare functionalist and Marxist
{
  add('05-compare-functionalist-marxist',
    versusFig('Comparing two perspectives', {
      left: { head: 'Functionalist', sub: 'Beneficial and consensual', items: ['Instils shared norms and values', 'Creates value consensus so society runs smoothly', 'Family and school perform a positive, necessary function'] },
      right: { head: 'Marxist', sub: 'Serves one class', items: ['The bourgeoisie instil values that benefit capitalism', 'Obedience and acceptance of inequality', 'Schools reproduce class inequality'] },
      foot: { head: 'Make the contrast explicit', text: 'What each perspective claims, then one sentence saying how they differ: beneficial for all, or serving one class over another.' },
    }),
    'Side by side: functionalists see socialisation instilling shared values for a smoothly running society; Marxists see the bourgeoisie instilling obedience and acceptance of inequality, with schools reproducing class inequality. A note says to finish with an explicit point of contrast.',
    'A compare answer states both views, then names the difference.',
    '## Worked example: comparing two perspectives on socialisation');
}

// 06 Key terms: norms vs values, agency vs process
{
  let s = '';
  s += box(30, 108, 404, 230, { fill: C.panel, edge: C.panelEdge });
  s += box(50, 126, 364, 80, { fill: C.teal }) + label(232, 158, 'Values', { size: 21, weight: 700, anchor: 'middle' }) + label(232, 186, 'broad beliefs about what is important', { size: 15, anchor: 'middle' });
  s += arrow(232, 210, 232, 236, { w: 3 });
  s += box(80, 242, 304, 80, { fill: C.tealLight }) + label(232, 274, 'Norms', { size: 21, weight: 700, anchor: 'middle' }) + label(232, 302, 'specific unwritten rules', { size: 15, anchor: 'middle' });
  s += box(466, 108, 404, 230, { fill: C.panel, edge: C.panelEdge });
  s += box(486, 126, 364, 80, { fill: C.cream }) + label(668, 158, 'Agency', { size: 21, weight: 700, anchor: 'middle' }) + label(668, 186, 'who socialises: family, school, media', { size: 15, anchor: 'middle' });
  s += arrow(668, 210, 668, 236, { w: 3 });
  s += box(516, 242, 304, 80, { fill: C.mustard }) + label(668, 274, 'Process', { size: 21, weight: 700, anchor: 'middle' }) + label(668, 302, 'how: e.g. role modelling', { size: 15, anchor: 'middle' });
  const n = note(358, 'Social construction of identity', 'A person’s sense of who they are is not fixed or natural, but built up over time through interactions with socialising agencies.');
  add('06-key-terms',
    svg(900, Math.round(358 + n.h + 24), 'Keep these terms apart', s + n.svg),
    'Two pairs of terms. Values are broad beliefs about what is important; norms are the specific unwritten rules of behaviour. An agency is who socialises, such as family, school or media; a process is how, such as role modelling. Below, identity is socially constructed through interaction with agencies.',
    'Values are beliefs, norms are rules; an agency is who, a process is how.',
    '## Key terms to define precisely');
}
