import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-sociology-8192-criminal-and-deviant-behaviour';
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

// 01 Committing vs being recorded
{
  let s = '';
  const stages = [['Commits crime', 'everyone who offends', 700], ['Caught', 'depends partly on policing', 560], ['Recorded', 'by the police', 420], ['Convicted', 'in the courts', 300]];
  const CX = 390;
  let y = 112;
  stages.forEach(([h, b, w], i) => {
    const x = CX - w / 2;
    s += `<rect x="${x}" y="${y}" width="${w}" height="70" rx="10" fill="${i === 0 ? C.teal : i === 3 ? C.mustard : C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += label(CX, y + 32, h, { size: 20, weight: 700, anchor: 'middle' }) + label(CX, y + 56, b, { size: 16, anchor: 'middle', fill: C.muted });
    if (i < 3) s += arrow(CX, y + 74, CX, y + 100, { w: 3 });
    y += 104;
  });
  s += path(`M${CX + 290},216 L${CX + 310},216 L${CX + 310},${112 + 3 * 104 + 70} L${CX + 160},${112 + 3 * 104 + 70}`, { stroke: C.olive, w: 3, extra: 'stroke-dasharray="7 6"' });
  s += tl(CX + 325, 300, ['what', 'official', 'statistics', 'measure'], { size: 17, weight: 700, fill: C.olive }, 22);
  const r = cardRow(y + 10, [
    { head: 'It offends more', fill: C.teal, body: 'A real difference in offending' },
    { head: 'It is policed more', fill: C.cream, body: 'More attention means more arrests' },
    { head: 'Or both', fill: C.tealLight, body: 'The two can combine' },
  ], { size: 17, headSize: 19 });
  s += label(450, y - 8, 'A group can appear more often in the statistics because…', { size: 19, weight: 700, anchor: 'middle' });
  add('01-committing-vs-recorded',
    svg(900, Math.round(y + 10 + r.h + 26), 'Who commits crime, or who gets recorded?', s + r.svg),
    'A narrowing funnel from everyone who commits crime, to those caught, recorded by police and convicted. Official statistics measure the lower stages. Below, three reasons a group can appear more often: it offends more, it is policed more, or both.',
    'Official statistics show who is caught and recorded, not simply who offends.',
    '## A key distinction: committing crime versus being recorded');
}

// 02 Class: explaining offending vs explaining recording
{
  const f = versusFig('Social class: two kinds of explanation', {
    sub: 'Why are working-class people over-represented in the statistics?',
    left: { head: 'Explain more offending', fill: C.teal, items: ['**Blocked opportunities (Merton):** success goals but no legitimate means, so some turn to innovation', '**Status frustration (Albert Cohen):** a delinquent subculture offers another route', '**Material deprivation:** poverty may push some towards property crime'] },
    right: { head: 'Explain the recording', fill: C.cream, items: ['**Labelling (interactionist):** police patrol working-class areas more and see working-class youths as likely offenders', '**Crimes of the powerful (Marxist):** white collar and corporate crime are harder to detect, less often prosecuted and often dealt with outside the courts, so they are under-represented'] },
    y0: 150,
  });
  add('02-class-explanations', f,
    'Two panels. Explanations of more working-class offending: Merton’s blocked opportunities, Albert Cohen’s status frustration and material deprivation. Explanations of how recording skews the pattern: interactionist labelling by police, and Marxist arguments that white collar and corporate crime are under-represented.',
    'Some explanations say the working class offend more; others say they are simply recorded more.',
    '## Social class');
}

// 03 Albert Cohen
{
  const f = flowFig('Albert Cohen: delinquent subcultures', {
    sub: 'Delinquent Boys (1955), functionalist',
    steps: [
      { head: 'Same success goals', body: 'Working-class boys hold the same success goals as wider society.' },
      { head: 'Blocked', body: 'Educational failure (which Cohen put down to **cultural deprivation**) and poor job prospects.' },
      { head: 'Status frustration', body: 'Stuck at the bottom of the stratification system.', fill: C.cream, edge: C.olive },
      { head: 'Delinquent subculture', body: 'An alternative route to success that values stealing, vandalism and truancy.' },
      { head: 'Recognition and prestige', body: 'Those who do well by the subculture’s values, such as a successful thief, gain status from peers.' },
    ],
    size: 17,
    foot: { head: 'Evaluation', text: ['**Strength:** explains non-financial crime such as vandalism, which Merton’s focus on money does not', '**Criticism:** some argue working-class youths do not accept mainstream goals at all, but act out of resentment towards those whose values they do not share'] },
  });
  add('03-albert-cohen', f,
    'Five steps: working-class boys share mainstream success goals; educational failure and poor job prospects block them; they suffer status frustration; they join a delinquent subculture valuing stealing, vandalism and truancy; success in it brings prestige. Below, a strength and a criticism.',
    'For Albert Cohen, the subculture gives blocked boys another way to win status.',
    '## Social class');
}

// 04 Gender: three explanations
{
  let s = '';
  const r = cardRow(124, [
    { head: 'Social control', sub: 'Heidensohn', fill: C.teal, body: 'Patriarchal societies control women more effectively at home, in public and at work.' },
    { head: 'Socialisation', sub: 'How children are raised', fill: C.tealLight, body: 'Boys more often encouraged to be tough and risk-taking; girls to be caring and careful.' },
    { head: 'Chivalry thesis', sub: 'Pollak (1950)', fill: C.cream, body: 'A male-dominated justice system treats women more leniently, so female crime is under-recorded.' },
  ], { size: 17, headSize: 20 });
  s += r.svg;
  s += label(165, 124 + r.h + 30, 'about offending', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 700, italic: true }) + label(450, 124 + r.h + 30, 'about offending', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 700, italic: true }) + label(735, 124 + r.h + 30, 'about recording', { size: 16, anchor: 'middle', fill: C.olive, weight: 700, italic: true });
  const n = note(124 + r.h + 52, 'Criticism of the chivalry thesis', 'Women who break gender norms may be treated more harshly, not less.');
  add('04-gender-explanations',
    svg(900, Math.round(124 + r.h + 52 + n.h + 24), 'Why do men commit more recorded crime?', s + n.svg, 'Men commit far more recorded crime, especially violent crime'),
    'Three cards. Heidensohn: patriarchal societies control women more at home, in public and at work. Socialisation: boys are encouraged to take risks, girls to be careful. Pollak’s chivalry thesis: the justice system treats women more leniently, though critics say women who break gender norms are treated more harshly.',
    'Two explanations are about offending; the chivalry thesis is about recording.',
    '## Gender');
}

// 05 Carlen
{
  let s = '';
  s += box(30, 108, 840, 62, { fill: C.tealLight, edge: C.panelEdge, sw: 2 }) + label(450, 146, 'Unstructured interviews with 39 mostly working-class convicted women, aged 15 to 46', { size: 17, anchor: 'middle' });
  s += box(30, 186, 840, 76, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + label(50, 216, 'Control theory', { size: 18, weight: 700, fill: C.tealDark }) + label(50, 244, 'People make a rational decision to turn to crime when the advantages outweigh the disadvantages.', { size: 16 });
  const deal = (x, head, fill, give, get) => {
    let o = headPanel(x, 282, 404, 266, head, { fill, size: 21 }).svg;
    o += box(x + 20, 348, 364, 64, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + label(x + 36, 372, 'Women give', { size: 15, fill: C.muted, weight: 600 }) + label(x + 36, 398, give, { size: 17, weight: 700 });
    o += arrow(x + 202, 416, x + 202, 444, { w: 3 });
    const gp = para(0, 0, 330, get, { size: 17, weight: 700 });
    o += box(x + 20, 448, 364, 84, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + label(x + 36, 474, 'in return for', { size: 15, fill: C.muted, weight: 600 }) + para(x + 36, 500, 340, get, { size: 17, weight: 700 }).svg;
    return o;
  };
  s += deal(30, 'The class deal', C.teal, 'wage labour', 'consumer goods');
  s += deal(466, 'The gender deal', C.cream, 'love and domestic labour', 'psychological and material rewards from a male breadwinner');
  s += path(`M232,552 L232,576 L668,576 L668,552`, { stroke: C.rust, w: 3 }) + arrow(450, 576, 450, 612, { color: C.rust, marker: 'ahR', w: 3 });
  s += label(462, 600, 'rewards unavailable or illusory', { size: 15, fill: C.rust, weight: 700 }) ;
  s += box(250, 616, 400, 56, { fill: C.mustard }) + label(450, 651, 'Criminality becomes a viable alternative', { size: 19, weight: 700, anchor: 'middle' });
  const n = note(690, 'Why the deals fail, and evaluation', ['Poverty, unemployment, abuse or time in care', 'Small sample, but detailed, valid accounts; supports the view that crime rises when social control breaks down']);
  add('05-carlen-deals',
    svg(900, Math.round(690 + n.h + 24), 'Carlen: women, crime and poverty (1988)', s + n.svg),
    'Carlen interviewed 39 convicted women and used control theory. In the class deal women give wage labour for consumer goods; in the gender deal they give love and domestic labour for psychological and material rewards from a male breadwinner. When the rewards are unavailable, through poverty, unemployment, abuse or care, crime becomes a viable alternative.',
    'When the class and gender deals fail, crime becomes a rational choice.',
    '## Gender');
}

// 06 Ethnicity and age
{
  let s = '';
  const L = headPanel(30, 108, 404, 520, 'Ethnicity', { fill: C.teal, size: 22 });
  s += L.svg + para(48, 190, 368, 'Some minority groups, particularly Black people, are over-represented in stop and search, arrest and imprisonment.', { size: 16, fill: C.muted, italic: true }).svg;
  s += bullets(48, 288, 368, ['**Discrimination and labelling:** the Macpherson Report (1999) found the Metropolitan Police institutionally racist', '**Deprivation:** class and ethnicity overlap', '**Media stereotypes** shape public fears and police priorities'], { size: 17 }).svg;
  s += box(48, 520, 368, 90, { fill: C.cream, edge: C.olive, sw: 2 }) + para(64, 550, 340, 'Debate: differences in offending, in policing, or both?', { size: 17, weight: 700 }).svg;
  const R = headPanel(466, 108, 404, 520, 'Age', { fill: C.cream, size: 22 });
  s += R.svg;
  // schematic curve
  const ox = 500, oy = 400, w = 340, h = 190;
  s += `<line x1="${ox}" y1="${oy}" x2="${ox + w}" y2="${oy}" stroke="${C.ink}" stroke-width="2.5"/><line x1="${ox}" y1="${oy}" x2="${ox}" y2="${oy - h}" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += path(`M${ox + 30},${oy - 4} C${ox + 80},${oy - 20} ${ox + 95},${oy - h + 20} ${ox + 120},${oy - h + 20} C${ox + 160},${oy - h + 20} ${ox + 190},${oy - 70} ${ox + w - 10},${oy - 30}`, { stroke: C.tealDark, w: 5 });
  s += label(ox + 120, oy - h + 8, 'peak: late teens, early 20s', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += label(ox + w, oy + 24, 'age →', { size: 15, anchor: 'end', fill: C.muted }) + `<text x="${ox - 10}" y="${oy - h / 2}" font-size="15" fill="${C.muted}" text-anchor="middle" transform="rotate(-90 ${ox - 10} ${oy - h / 2})">recorded offending</text>`;
  s += `<line x1="${ox + 30}" y1="${oy}" x2="${ox + 30}" y2="${oy + 10}" stroke="${C.rust}" stroke-width="3"/>` + label(ox + 30, oy + 26, '10', { size: 15, weight: 700, anchor: 'middle', fill: C.rust });
  s += bullets(484, 450, 368, ['More time in public spaces, more visible to police', 'Peer pressure and subcultures matter more', 'Less to lose: no careers, mortgages or children yet', 'Adolescent risk-taking', 'Age of criminal responsibility: 10'], { size: 16, gap: 5 }).svg;
  add('06-ethnicity-and-age',
    svg(900, 654, 'Ethnicity and age', s),
    'Left: some minority groups, particularly Black people, are over-represented in stop and search, arrest and prison; explanations are discrimination and labelling (the Macpherson Report), deprivation and media stereotypes. Right: a schematic curve of recorded offending peaking in the late teens and early twenties, with reasons such as visibility, peer pressure and having less to lose.',
    'For ethnicity and age, ask whether the pattern reflects offending, policing, or both.',
    '## Age');
}

// 07 Moral panic and deviancy amplification
{
  const items = [
    { head: 'Exaggerated reporting', body: 'News values favour rare, violent crime', fill: C.tealLight },
    { head: 'Folk devils', body: 'A group is turned into a threat', fill: C.cream },
    { head: 'Public concern and police attention', body: 'A moral panic', fill: C.tealLight },
    { head: 'More recorded deviance', body: 'Deviancy amplification', fill: C.mustard },
  ];
  const c = hchain(118, items, { size: 16, ag: 34 });
  let s = c.svg;
  const y = 118 + c.h + 26;
  s += label(450, y + 4, 'Stanley Cohen, Folk Devils and Moral Panics (1972): reactions to mods and rockers', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  const r = cardRow(y + 26, [
    { head: 'Albert Cohen', fill: C.teal, body: 'Delinquent subcultures and status frustration (named in the specification)' },
    { head: 'Stanley Cohen', fill: C.cream, body: 'Moral panics and folk devils (not named in the specification, but the terms are key terms)' },
  ], { size: 17, headSize: 20, gap: 60 });
  s += r.svg + label(450, y + 26 + r.h / 2 + 8, '≠', { size: 34, weight: 700, anchor: 'middle', fill: C.rust });
  add('07-moral-panic',
    svg(900, Math.round(y + 26 + r.h + 24), 'Media coverage: moral panics', s),
    'A chain: exaggerated reporting turns a group into folk devils, raising public concern and police attention, which leads to more recorded deviance, called deviancy amplification. Below, a reminder not to confuse Albert Cohen, on delinquent subcultures, with Stanley Cohen, on moral panics.',
    'Exaggerated media coverage can create the very rise in deviance it reports.',
    '## Public debates over crime');
}
