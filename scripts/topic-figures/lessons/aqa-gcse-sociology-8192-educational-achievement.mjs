import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-sociology-8192-educational-achievement';
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

// 01 External vs internal factors
{
  let s = '';
  // school building in centre-right
  s += `<rect x="470" y="200" width="400" height="300" fill="${C.panel}" stroke="${C.ink}" stroke-width="3"/>` + `<path d="M455,200 L670,120 L885,200 Z" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  s += label(670, 182, 'INSIDE SCHOOL', { size: 18, weight: 700, anchor: 'middle' });
  s += label(670, 236, 'Internal factors', { size: 21, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += bullets(500, 280, 340, ['Setting', 'Labelling', 'Pupil subcultures'], { size: 18, gap: 12 }).svg;
  s += box(490, 400, 360, 82, { fill: C.cream, edge: C.olive, sw: 2 }) + para(506, 430, 330, 'Mainly 3.4.4: use briefly in a 3.4.3 answer', { size: 16, weight: 600 }).svg;
  s += box(30, 200, 400, 300, { fill: C.tealLight, edge: C.panelEdge, sw: 2 });
  s += label(230, 182, 'OUTSIDE SCHOOL', { size: 18, weight: 700, anchor: 'middle' });
  s += label(230, 236, 'External factors', { size: 21, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += bullets(60, 280, 340, ['Family income', 'Home resources', 'Parents’ attitudes', 'Culture'], { size: 18, gap: 12 }).svg;
  s += box(48, 432, 364, 50, { fill: C.teal, sw: 2 }) + label(230, 464, 'Focus of 3.4.3', { size: 17, weight: 700, anchor: 'middle' });
  s += `<line x1="30" y1="500" x2="870" y2="500" stroke="${C.ink}" stroke-width="3"/>`;
  const n = note(524, 'Look for patterns between groups', 'One bright working-class pupil does not disprove a class pattern; one struggling middle-class pupil does not prove one.');
  add('01-external-internal',
    svg(900, Math.round(524 + n.h + 24), 'Two kinds of explanation', s + n.svg),
    'Outside the school are external factors: family income, home resources, parents’ attitudes and culture, the focus of this sub-section. Inside the school are internal factors: setting, labelling and pupil subcultures, covered mainly in 3.4.4. A note says to look for patterns between groups, not individual cases.',
    'Sort every explanation: from outside the school, or from inside it?',
    '## What "factors affecting achievement" means');
}

// 02 Halsey, Heath and Ridge
{
  let s = label(450, 92, 'Chances of a service-class boy compared with a working-class boy', { size: 19, anchor: 'middle', fill: C.muted });
  const x0 = 250, unit = 50, bars = [['At school at 16', 4], ['At school at 17', 8], ['At school at 18', 10], ['Attending university', 11]];
  bars.forEach(([l, v], i) => {
    const y = 124 + i * 66;
    s += label(x0 - 16, y + 32, l, { size: 18, weight: 600, anchor: 'end' });
    s += `<rect x="${x0}" y="${y + 6}" width="${v * unit}" height="40" rx="6" fill="${i === 3 ? C.mustard : C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += label(x0 + v * unit + 12, y + 35, `${v}×`, { size: 22, weight: 700 });
  });
  s += `<line x1="${x0 + unit}" y1="116" x2="${x0 + unit}" y2="${124 + 4 * 66 + 4}" stroke="${C.rust}" stroke-width="3" stroke-dasharray="8 6"/>`;
  s += label(x0 + unit + 8, 124 + 4 * 66 + 24, 'working-class boy = 1×', { size: 16, weight: 700, fill: C.rust });
  const y = 124 + 4 * 66 + 50;
  const r = cardRow(y, [
    { head: 'The gap widens', fill: C.teal, body: 'From 4× to 11×: class matters more as education goes on and costs, such as years without a wage, build up' },
    { head: 'Challenges meritocracy', fill: C.tealLight, body: 'Ability is unlikely to differ on this scale, so the gap points to inequality of opportunity' },
    { head: 'Limits', fill: C.cream, body: 'Males only; born 1913–1952, mostly educated before comprehensives spread' },
  ], { size: 16, headSize: 19 });
  s += r.svg + label(450, y + r.h + 30, 'Origins and Destinations (1980): over 8,000 males, grouped by father’s occupation', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  add('02-halsey-class-chances',
    svg(900, Math.round(y + r.h + 52), 'Halsey, Heath and Ridge: class and staying on', s),
    'Bar chart: compared with a working-class boy, a service-class boy had four times the chance of being at school at 16, eight times at 17, ten times at 18 and eleven times the chance of attending university. Below: the gap widens, challenges meritocracy, but the sample was male only and educated long ago.',
    'The longer education goes on, the wider the class gap becomes.',
    '## Social class');
}

// 03 Material, cultural deprivation, cultural capital: who is blamed?
{
  const r = cardRow(122, [
    { head: 'Material deprivation', sub: 'Lack of money limits learning', fill: C.teal, body: ['No laptop or quiet room for homework', 'Poor diet affecting concentration', 'Needing a part-time job at 16'] },
    { head: 'Cultural deprivation', sub: 'Home said to lack helpful values, attitudes and language', fill: C.cream, body: ['Less emphasis on staying on after 16'] },
    { head: 'Cultural capital', sub: 'Middle-class knowledge, tastes and confidence match what schools reward', fill: C.tealLight, body: ['Familiarity with museums, books and university life'] },
  ], { size: 16, headSize: 19 });
  let s = r.svg;
  const y = 122 + r.h + 14;
  const tag = (cx, txt, f) => `<rect x="${cx - 125}" y="${y}" width="250" height="44" rx="22" fill="${f}" stroke="${C.ink}" stroke-width="2"/>` + label(cx, y + 28, txt, { size: 17, weight: 700, anchor: 'middle' });
  s += tag(165, 'Blames: lack of money', C.panel) + tag(450, 'Blames: the family', C.panel) + tag(735, 'Blames: the school', C.panel);
  s += `<path d="M450,${y + 54} Q590,${y + 96} 735,${y + 54}" fill="none" stroke="${C.rust}" stroke-width="3" marker-end="url(#ahR)"/>` + label(592, y + 112, 'critics: different, not deficient', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
  const n = note(y + 130, 'Free school meals', 'Eligibility depends on low family income. Pupils eligible for free school meals achieve lower results on average, consistent with material explanations.');
  add('03-class-explanations',
    svg(900, Math.round(y + 130 + n.h + 24), 'Explaining class differences', s + n.svg, 'Where does each explanation put the blame?'),
    'Three cards. Material deprivation blames lack of money, such as no laptop or quiet room. Cultural deprivation blames working-class family values and language. Cultural capital blames schools for rewarding middle-class culture. Critics of cultural deprivation say working-class culture is different, not deficient. Below, free school meal eligibility as an indicator.',
    'Cultural deprivation blames the home; cultural capital blames the school.',
    '## Social class');
}

// 04 Three types of chooser
{
  let s = '';
  const types = [
    ['Privileged or skilled choosers', 'Mostly middle class', 'Money, time and knowledge to research schools, visit, appeal and travel', C.teal, 3],
    ['Semi-skilled choosers', '', 'The third group named in the study', C.tealLight, 2],
    ['Disconnected choosers', 'Mostly working class', 'Tended to choose the nearest school', C.cream, 1],
  ];
  types.forEach(([h, sub, b, f, n], i) => {
    const y = 120 + i * 120;
    s += box(30, y, 840, 104, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + `<rect x="31.25" y="${y + 1.25}" width="250" height="101.5" rx="12" fill="${f}"/>`;
    s += para(46, y + 40, 220, h, { size: 19, weight: 700 }).svg;
    if (sub) s += label(46, y + 88, sub, { size: 15, weight: 600, fill: C.tealDark, italic: true });
    s += vcenter(300, y, 104, 550, b, { size: 18 });
  });
  const y = 120 + 3 * 120;
  s += box(30, y, 840, 70, { fill: C.mustard }) + label(450, y + 43, 'Choice that looks equal on paper is unequal in practice', { size: 20, weight: 700, anchor: 'middle' });
  add('04-three-choosers',
    svg(900, y + 96, 'Gewirtz, Ball and Bowe: three kinds of chooser', s, 'Markets, Choice and Equity in Education (1995)'),
    'Three rows. Privileged or skilled choosers, mostly middle class, had the money, time and knowledge to research, visit, appeal and travel. Semi-skilled choosers fall in between. Disconnected choosers, mostly working class, tended to choose the nearest school. Choice that looks equal is unequal in practice.',
    'Parents with more resources make more effective school choices.',
    '## Ball on parental choice and competition between schools');
}

// 05 Gender
{
  const r = cardRow(108, [
    { head: 'Why girls’ achievement rose', fill: C.teal, body: ['**Feminism:** Sharpe found girls’ priorities shifted from love and marriage to jobs and careers (1970s to 1990s)', '**Equal opportunities:** Sex Discrimination Act 1975; national curriculum (1988) made science compulsory for all', '**Job market and family:** more women in paid work and more female-headed households give role models'] },
    { head: 'Why some boys fall behind', fill: C.cream, body: ['Decline of traditional manual jobs may weaken motivation', 'Some masculine identities treat working hard at school as “uncool”'] },
  ], { size: 16, headSize: 20 });
  const n = note(108 + r.h + 18, 'Continuing inequality: subject choice', ['Girls less likely to take physics and computing; boys less likely to take subjects linked to caring', 'Feminists: this channels women into lower-paid work and helps explain the **glass ceiling**', 'Patterns are averages: not all girls do better than all boys']);
  add('05-gender',
    svg(900, Math.round(108 + r.h + 18 + n.h + 24), 'Girls now outperform boys at most levels', r.svg + n.svg),
    'Two cards. Girls’ achievement rose because of feminism, shown by Sharpe’s study, equal opportunities laws and the national curriculum, and changes in jobs and family. Some boys fall behind because manual jobs declined and some masculine identities see hard work as uncool. Below, subject choice remains gendered, linked to the glass ceiling.',
    'Explain both sides: why girls rose and why some boys fall behind.',
    '## Gender');
}

// 06 Overlapping factors
{
  let s = '';
  const c = [[350, 300, 'Class', C.teal], [550, 300, 'Gender', C.cream], [450, 470, 'Ethnicity', C.tealLight]];
  c.forEach(([x, y, , f]) => { s += `<circle cx="${x}" cy="${y}" r="165" fill="${f}" fill-opacity="0.75" stroke="${C.ink}" stroke-width="3"/>`; });
  s += label(290, 250, 'Class', { size: 22, weight: 700, anchor: 'middle' }) + label(610, 250, 'Gender', { size: 22, weight: 700, anchor: 'middle' }) + label(450, 560, 'Ethnicity', { size: 22, weight: 700, anchor: 'middle' });
  s += label(290, 280, 'free school meals', { size: 16, anchor: 'middle', fill: C.muted }) + label(610, 280, 'boys', { size: 16, anchor: 'middle', fill: C.muted }) + label(450, 590, 'white British', { size: 16, anchor: 'middle', fill: C.muted });
  s += `<circle cx="450" cy="362" r="58" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + tl(450, 346, ['among the', 'lowest-', 'attaining'], { size: 15, weight: 700, anchor: 'middle' }, 18);
  s += box(700, 470, 170, 112, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + para(714, 498, 146, 'White British boys eligible for free school meals', { size: 16, weight: 600 }).svg + arrow(700, 520, 510, 380, { w: 2.5 });
  const n = note(660, 'Why a single-factor answer is weak', ['Class, gender and ethnicity combine', 'Part of an apparent “ethnic” gap may really be a class gap', 'Ethnicity explanations: material factors, language, family attitudes (avoid stereotyping), ethnocentric curriculum, institutional racism']);
  add('06-overlapping-factors',
    svg(900, Math.round(660 + n.h + 24), 'Class, gender and ethnicity overlap', s + n.svg),
    'Three overlapping circles for class, gender and ethnicity. Where free school meal eligibility, being a boy and being white British meet are some of the lowest-attaining pupils in England. Below, a reminder that factors combine and that part of an ethnic gap may be a class gap.',
    'Factors combine, so judge how much of one gap is really another.',
    '## Ethnicity');
}
