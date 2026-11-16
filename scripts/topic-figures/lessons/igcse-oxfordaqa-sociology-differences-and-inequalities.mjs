import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-oxfordaqa-sociology-differences-and-inequalities';
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

// 01 Ways of classifying people
{
  const cats = [
    ['Social class', 'economic position'], ['Status', 'social honour or prestige'], ['Caste', 'closed hierarchy fixed at birth'], ['Slavery', 'people owned as property'], ['Sex and gender', 'biology vs learned roles'],
    ['Race and ethnicity', 'physical differences vs culture'], ['Age and cohort', 'born in the same period'], ['Religion', ''], ['Ability or disability', ''], ['Nationality', ''],
  ];
  let s = '';
  const cw = 160, ch = 120, gap = 10;
  cats.forEach(([h, d], i) => {
    const x = 30 + (i % 5) * (cw + gap), y = 108 + Math.floor(i / 5) * (ch + gap);
    s += box(x, y, cw, ch, { fill: i % 2 ? C.tealLight : C.teal, sw: 2 });
    if (d) { s += para(x + cw / 2, y + 30, cw - 16, h, { size: 17, weight: 700, anchor: 'middle' }).svg + para(x + cw / 2, y + 30 + para(0, 0, cw - 16, h, { size: 17, weight: 700 }).h + 4, cw - 16, d, { size: 15, anchor: 'middle' }).svg; }
    else s += vcenter(x + cw / 2, y, ch, cw - 16, h, { size: 17, weight: 700, anchor: 'middle' });
  });
  let y = 108 + 2 * (ch + gap) + 14;
  const r = cardRow(y, [
    { head: 'Ascribed', fill: C.cream, body: 'Given at birth, e.g. caste' },
    { head: 'Achieved', fill: C.cream, body: 'Gained through a person’s own actions' },
  ], { size: 17, headSize: 19 });
  s += r.svg;
  y += r.h + 40;
  s += label(450, y, 'How people identify with groups', { size: 20, weight: 700, anchor: 'middle' });
  const r2 = cardRow(y + 16, [
    { head: 'Individual identity', fill: C.tealLight, body: 'How a person sees themselves' },
    { head: 'Collective identity', fill: C.mustard, body: 'A shared sense of belonging (national, religious, ethnic) that unites people and marks boundaries' },
  ], { size: 17, headSize: 19 });
  s += r2.svg;
  add('01-classifying-differences',
    svg(900, y + 16 + r2.h + 24, 'Ten ways to classify people', s),
    'Ten tiles: social class, status, caste, slavery, sex and gender, race and ethnicity, age and cohort, religion, ability or disability, and nationality. Some positions are ascribed at birth, such as caste; others are achieved. Below, individual identity is how a person sees themselves; collective identity is a shared sense of belonging.',
    'People are grouped in many ways; some positions are fixed at birth, others achieved.',
    '## How do sociologists classify differences between people?');
}

// 02 Intersectionality
{
  let s = '';
  const cs = [[360, 270, 'Class', C.teal], [540, 270, 'Gender', C.cream], [450, 420, 'Ethnicity', C.tealLight]];
  cs.forEach(([cx, cy, , f]) => { s += `<circle cx="${cx}" cy="${cy}" r="150" fill="${f}" fill-opacity="0.7" stroke="${C.ink}" stroke-width="3"/>`; });
  s += label(290, 220, 'Class', { size: 22, weight: 700, anchor: 'middle' }) + label(610, 220, 'Gender', { size: 22, weight: 700, anchor: 'middle' }) + label(450, 520, 'Ethnicity', { size: 22, weight: 700, anchor: 'middle' });
  s += `<circle cx="450" cy="322" r="40" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + label(450, 316, 'one', { size: 16, weight: 700, anchor: 'middle' }) + label(450, 336, 'person', { size: 16, weight: 700, anchor: 'middle' });
  s += label(450, 106, 'Differences combine: look at one alone and you miss the experience', { size: 18, anchor: 'middle', fill: C.muted, italic: true });
  const n = note(590, 'Crenshaw (1989)', 'Black women could face discrimination that neither a “race” claim nor a “sex” claim alone recognised.');
  add('02-intersectionality',
    svg(900, Math.round(590 + n.h + 24), 'Intersectionality', s + n.svg),
    'Three overlapping circles for class, gender and ethnicity, with one person at the centre where they meet. A note explains Crenshaw’s 1989 point that Black women could face discrimination that neither a race nor a sex claim alone recognised.',
    'Class, gender and ethnicity combine, so no one difference explains a person’s experience.',
    '## What are inequalities in power and life chances?');
}

// 03 Three views of class
{
  add('03-three-views-of-class',
    cardsFig('Three views of social class', {
      ncol: 3, size: 16,
      cards: [
        { head: 'Marxism (Marx)', fill: C.teal, sub: 'Class conflict', body: ['**Bourgeoisie** own the means of production; **proletariat** sell their labour', 'Bourgeoisie **exploit** workers by keeping value beyond wages', '**False consciousness:** ruling-class ideas make inequality seem fair', '**−** Ignores status, gender, ethnicity; revolution did not occur'] },
        { head: 'Functionalism (Davis and Moore)', fill: C.cream, sub: 'Functional necessity', body: ['Most important jobs need the highest rewards to motivate the most able', 'A **meritocracy**: positions achieved by ability and effort', '**−** Inherited wealth and unequal opportunities: not a true meritocracy'] },
        { head: 'Weberianism (Weber)', fill: C.tealLight, sub: 'Three dimensions', body: ['**Class:** economic position in the market', '**Status:** social honour', '**Party:** political power through organised groups', 'A person can rank differently on each', '**+** Captures more complexity'] },
      ],
    }),
    'Three cards. Marx: the bourgeoisie exploit the proletariat, who accept it through false consciousness. Davis and Moore: class inequality is a functional necessity in a meritocracy. Weber: class, status and party are separate dimensions, and a person can rank differently on each. Each card ends with an evaluation point.',
    'Marx sees conflict, functionalists see necessity, Weber sees three dimensions.',
    '## How do Marxists, functionalists and Weberians explain social class?');
}

// 04 Income vs wealth
{
  let s = '';
  // tap = income
  s += headPanel(30, 108, 404, 380, 'Income: a flow', { fill: C.teal, size: 22 }).svg;
  s += path('M120,200 L200,200 L200,220 L140,220 L140,240 L120,240 Z', { fill: C.rockDark, w: 3 }) + `<rect x="190" y="190" width="18" height="40" rx="4" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="3"/>`;
  [0, 1, 2, 3].forEach((i) => { s += `<path d="M130,${258 + i * 30} q-7,12 0,18 q7,-6 0,-18 z" fill="${C.blue}"/>`; });
  s += label(240, 250, 'wages', { size: 18, weight: 600 }) + label(240, 280, 'benefits', { size: 18, weight: 600 }) + label(240, 310, 'interest', { size: 18, weight: 600 });
  s += para(232, 400, 360, 'Money coming in over time', { size: 18, anchor: 'middle', fill: C.tealDark, weight: 700 }).svg;
  // tank = wealth
  s += headPanel(466, 108, 404, 380, 'Wealth: a stock', { fill: C.cream, size: 22 }).svg;
  s += `<rect x="520" y="190" width="150" height="170" rx="10" fill="#ffffff" stroke="${C.ink}" stroke-width="3"/><rect x="522" y="250" width="146" height="108" rx="8" fill="${C.mustard}"/>`;
  s += label(700, 250, 'property', { size: 18, weight: 600 }) + label(700, 280, 'savings', { size: 18, weight: 600 }) + label(700, 310, 'shares', { size: 18, weight: 600 });
  s += para(668, 400, 360, 'Assets held at one time', { size: 18, anchor: 'middle', fill: C.olive, weight: 700 }).svg;
  const n = note(508, null, ['Wealth is usually distributed **far more unequally** than income, within societies and globally', 'Inequality changes over time with taxation, welfare and economic change']);
  add('04-income-wealth',
    svg(900, Math.round(508 + n.h + 24), 'Income or wealth?', s + n.svg),
    'Left: income is a flow of money, like water from a tap: wages, benefits and interest. Right: wealth is a stock of assets, like a full tank: property, savings and shares. Wealth is usually distributed far more unequally than income.',
    'Income flows in; wealth is what you hold. Wealth is the more unequal of the two.',
    '## How do Marxists, functionalists and Weberians explain social class?');
}

// 05 Social mobility
{
  let s = '';
  const ladder = (x, title, sub) => {
    let o = headPanel(x, 108, 404, 440, title, { fill: C.teal, size: 21 }).svg + label(x + 202, 192, sub, { size: 16, anchor: 'middle', fill: C.muted, italic: true });
    ['Higher class', 'Middle', 'Lower class'].forEach((l, i) => { o += `<line x1="${x + 40}" y1="${250 + i * 100}" x2="${x + 364}" y2="${250 + i * 100}" stroke="${C.panelEdge}" stroke-width="3"/>` + label(x + 40, 242 + i * 100, l, { size: 15, fill: C.muted }); });
    return o;
  };
  const person = (cx, cy, f) => `<circle cx="${cx}" cy="${cy - 30}" r="11" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/><path d="M${cx - 15},${cy} Q${cx},${cy - 34} ${cx + 15},${cy} Z" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += ladder(30, 'Intergenerational', 'a person compared with their parents');
  s += person(200, 450, C.tealLight) + label(200, 480, 'parent', { size: 16, weight: 700, anchor: 'middle' });
  s += person(340, 250, C.mustard) + label(340, 280, 'child', { size: 16, weight: 700, anchor: 'middle' });
  s += arrow(222, 412, 318, 284, { w: 4, color: C.tealDark, marker: 'ahT' }) + label(284, 380, 'upward', { size: 16, weight: 700, fill: C.tealDark });
  s += ladder(466, 'Intragenerational', 'within one person’s working life');
  s += person(656, 350, C.mustard) + label(656, 380, 'first job', { size: 16, weight: 700, anchor: 'middle' });
  s += person(800, 450, C.mustard) + label(800, 480, 'later', { size: 16, weight: 700, anchor: 'middle' });
  s += arrow(682, 336, 776, 418, { w: 4, color: C.rust, marker: 'ahR' }) + label(722, 324, 'downward', { size: 16, weight: 700, fill: C.rust });
  const n = note(568, 'Factors affecting mobility', 'Education, family background, gender, ethnicity, the availability of jobs, and economic change such as the growth of professional work.');
  add('05-social-mobility',
    svg(900, Math.round(568 + n.h + 24), 'Social mobility: up, down, and across time', s + n.svg),
    'Two panels with class levels. Intergenerational mobility compares a child with a parent, here moving upward from a lower class. Intragenerational mobility follows one person over their working life, here moving downward. Below, factors affecting mobility.',
    'Compare with parents for intergenerational mobility; with your own past for intragenerational.',
    '## How do Marxists, functionalists and Weberians explain social class?');
}

// 06 Walby and Connell
{
  let s = '';
  s += label(450, 112, 'Walby: patriarchy has changed form', { size: 20, weight: 700, anchor: 'middle' });
  s += box(30, 130, 360, 104, { fill: C.cream, edge: C.olive }) + label(210, 168, 'Private patriarchy', { size: 20, weight: 700, anchor: 'middle' }) + label(210, 198, 'based in the home', { size: 17, anchor: 'middle' });
  s += arrow(398, 182, 502, 182, { w: 5 });
  s += box(510, 130, 360, 104, { fill: C.teal }) + label(690, 168, 'Public patriarchy', { size: 20, weight: 700, anchor: 'middle' }) + para(690, 198, 330, 'women in paid work and public life, but still disadvantaged there', { size: 16, anchor: 'middle' }).svg;
  const structs = ['paid work', 'household production', 'culture', 'sexuality', 'male violence', 'the state'];
  s += label(450, 272, 'Six structures of patriarchy', { size: 17, weight: 700, anchor: 'middle', fill: C.muted });
  structs.forEach((st, i) => { const x = 30 + i * 142; s += `<rect x="${x}" y="286" width="132" height="44" rx="22" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2"/>` + vcenter(x + 66, 286, 44, 124, st, { size: 15, weight: 700, anchor: 'middle' }); });
  // Connell hierarchy
  const y0 = 370;
  s += label(450, y0 + 6, 'Connell: hegemonic masculinity', { size: 20, weight: 700, anchor: 'middle' });
  s += `<path d="M450,${y0 + 26} L650,${y0 + 230} L250,${y0 + 230} Z" fill="${C.panel}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  s += `<path d="M450,${y0 + 26} L518,${y0 + 96} L382,${y0 + 96} Z" fill="${C.mustard}"/>` + path(`M450,${y0 + 26} L518,${y0 + 96} L382,${y0 + 96} Z`, { w: 3 });
  s += `<line x1="345" y1="${y0 + 160}" x2="555" y2="${y0 + 160}" stroke="${C.ink}" stroke-width="2"/>`;
  s += label(450, y0 + 136, 'other men', { size: 17, weight: 600, anchor: 'middle' }) + label(450, y0 + 204, 'women', { size: 17, weight: 600, anchor: 'middle' });
  s += label(540, y0 + 72, 'the dominant ideal of manhood', { size: 16, weight: 700, fill: C.olive });
  s += para(140, y0 + 120, 200, 'ranks some men above others, and above women', { size: 16, anchor: 'middle', fill: C.muted }).svg;
  add('06-walby-connell',
    svg(900, y0 + 260, 'Explaining gender inequality', s),
    'Top: Walby’s shift from private patriarchy, based in the home, to public patriarchy, where women are in paid work and public life but still disadvantaged, with her six structures. Bottom: Connell’s hegemonic masculinity as the top of a pyramid, ranked above other men and above women.',
    'Walby shows patriarchy moving into public life; Connell shows a ranking of masculinities.',
    '## How do feminists explain gender inequality?');
}

// 07 Assimilation, multiculturalism, diaspora, hybrid
{
  const cw = 412, ch = 250;
  let s = '';
  const card = (x, y, h, d, art) => box(x, y, cw, ch, { fill: C.panel, edge: C.panelEdge }) + label(x + 20, y + 36, h, { size: 21, weight: 700 }) + para(x + 20, y + 62, cw - 40, d, { size: 16 }).svg + art;
  const c = (cx, cy, r, f, o = 1) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${f}" fill-opacity="${o}" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += card(30, 108, 'Assimilation', 'Minority groups adopt the majority culture', c(130, 290, 48, C.teal) + c(205, 290, 18, C.mustard) + arrow(228, 290, 268, 290, { w: 3 }) + c(330, 290, 54, C.teal));
  s += card(458, 108, 'Multiculturalism', 'Different cultures coexist with equal respect', c(570, 290, 36, C.teal) + c(660, 290, 36, C.mustard) + c(750, 290, 36, C.cream) + `<rect x="520" y="234" width="280" height="112" rx="18" fill="none" stroke="${C.ink}" stroke-width="2" stroke-dasharray="7 6"/>`);
  s += card(30, 108 + ch + 16, 'Diaspora', 'A community dispersed from its homeland that keeps links with it', c(110, 108 + ch + 16 + 172, 34, C.mustard) + [[260, 140], [320, 196], [250, 220]].map(([x, y]) => c(x, 108 + ch + 16 + y, 16, C.mustard) + `<line x1="144" y1="${108 + ch + 16 + 172}" x2="${x - 16}" y2="${108 + ch + 16 + y}" stroke="${C.ink}" stroke-width="2" stroke-dasharray="5 5"/>`).join('') + label(110, 108 + ch + 16 + 228, 'homeland', { size: 15, anchor: 'middle', fill: C.muted }));
  s += card(458, 108 + ch + 16, 'Hybrid identity', 'An identity that blends elements of more than one culture', c(620, 108 + ch + 16 + 180, 50, C.teal, 0.8) + c(690, 108 + ch + 16 + 180, 50, C.mustard, 0.7));
  const y = 108 + 2 * ch + 32;
  const n = note(y, 'Race or ethnicity?', ['**Race:** classifying people by supposed physical differences; sociologists see it as socially constructed', '**Ethnicity:** shared culture: language, religion, traditions, a sense of common origin']);
  add('07-ethnicity-key-terms',
    svg(900, Math.round(y + n.h + 24), 'Living with cultural difference', s + n.svg),
    'Four panels. Assimilation: a small group merges into the majority culture. Multiculturalism: different cultures sit side by side with equal respect. Diaspora: communities spread from a homeland keep links to it. Hybrid identity: two cultures blend. Below, the difference between race and ethnicity.',
    'Assimilation, multiculturalism, diasporas and hybrid identities are different ways cultures meet.',
    '## How do race and ethnicity create inequality?');
}

// 08 Attempts to reduce inequality
{
  add('08-reducing-inequality',
    cardsFig('Three ways to reduce inequality', {
      ncol: 3, size: 16,
      cards: [
        { head: 'Abolish capitalism', fill: C.teal, sub: 'Marxism', body: ['Replace it with common ownership of the means of production', '**−** Inequality and lack of freedom in societies that claimed to follow this route'] },
        { head: 'Social democratic welfare state', fill: C.cream, sub: 'Within capitalism', body: ['Progressive taxation', 'Universal healthcare, education and benefits', '**+** Narrows gaps', '**−** Costly; does not remove wealth inequality'] },
        { head: 'Development aid', fill: C.tealLight, sub: 'Between countries', body: ['Money, expertise or goods from richer to poorer countries', '**+** Improvements in health and education', '**−** Can create dependency or serve donors’ interests'] },
      ],
    }),
    'Three cards. Marxists would abolish capitalism for common ownership, though critics point to unfree societies that tried. Social democratic welfare states use progressive tax and universal services, narrowing gaps at high cost. Development aid transfers resources to poorer countries but can create dependency.',
    'From revolution to welfare to aid: each attempt has supporters and critics.',
    '## What attempts have been made to reduce inequality?');
}
