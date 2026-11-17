import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-sociology-8192-functions-of-families';
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

// 01 Four functions
{
  const f = cardsFig('The four functions of families', {
    sub: 'From the specification, matching Murdock’s study of 250 societies (1949)',
    cards: [
      { head: 'Sexual', fill: C.teal, body: ['Gives sex an approved place, usually marriage or a long-term partnership', 'Limits conflict over partners; links sex to raising children', '**Today:** weaker; cohabitation and sex outside marriage carry far less stigma'] },
      { head: 'Reproductive', fill: C.tealLight, body: ['Produces the next generation, replacing members who die', 'Reproduction is social: families decide when and whether to have children', 'Who counts as a parent? Step-, adoptive and same-sex parents'] },
      { head: 'Economic', fill: C.cream, body: ['Once a **unit of production**; now mainly a **unit of consumption**', 'Pools income for food, housing and goods', 'Still provides for **dependent members**'] },
      { head: 'Educational', fill: C.tealLight, body: ['**Primary socialisation:** norms, values, language and skills', 'Schools later take over formal teaching (secondary socialisation)', 'Family attitudes to learning still shape school success'] },
    ],
    ncol: 2, size: 16, headSize: 21, badges: true,
  });
  add('01-four-functions', f,
    'Four cards. Sexual: families give sex an approved place, though this is weaker today. Reproductive: families produce the next generation, and who counts as a parent is social. Economic: families moved from production to consumption and still provide for dependants. Educational: primary socialisation of norms, values, language and skills.',
    'Learn each function with a definition, an example and a link to wider society.',
    '## The four functions in the specification');
}

// 02 Economic function: production to consumption
{
  let s = '';
  const L = headPanel(30, 108, 380, 220, 'Pre-industrial Britain', { fill: C.cream, size: 20 });
  const R = headPanel(490, 108, 380, 220, 'Since industrialisation', { fill: C.teal, size: 20 });
  s += L.svg + R.svg;
  s += label(220, 196, 'Unit of PRODUCTION', { size: 21, weight: 700, anchor: 'middle', fill: C.olive });
  s += bullets(52, 240, 340, ['Members worked together', 'On a farm or in a cottage industry'], { size: 17 }).svg;
  s += label(680, 196, 'Unit of CONSUMPTION', { size: 21, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += bullets(512, 240, 340, ['Most work happens outside the home', 'Pools income to buy food, housing and goods'], { size: 17 }).svg;
  s += arrow(414, 273, 486, 273, { w: 5, color: C.olive, marker: 'ahO' });
  s += box(30, 350, 840, 80, { fill: C.mustard }) + label(450, 384, 'Kept throughout: providing for dependent members', { size: 20, weight: 700, anchor: 'middle' }) + label(450, 412, 'children and older relatives', { size: 17, anchor: 'middle' });
  s += path('M220,328 L220,346') + path('M680,328 L680,346');
  const n = note(450, 'Common mistake', 'Families have not lost the economic function. They have mainly lost production, not consumption or provision for dependants.');
  add('02-economic-function',
    svg(900, Math.round(450 + n.h + 24), 'How the economic function changed', s + n.svg),
    'Before industrialisation the family was a unit of production, working together on a farm or in a cottage industry. Since industrialisation most work is outside the home and the family is mainly a unit of consumption. Throughout, it has provided for dependent children and older relatives.',
    'Families lost production, not their whole economic function.',
    '## The four functions in the specification');
}

// 03 Parsons: functions lost, two irreducible functions kept
{
  let s = '';
  const lost = [['Production', 'factories and offices'], ['Education', 'schools'], ['Health care', 'hospitals, later the welfare state']];
  lost.forEach(([a, b], i) => {
    const y = 124 + i * 96;
    s += box(30, y, 230, 76, { fill: C.panel, edge: C.panelEdge, sw: 2, dash: '7 5' }) + label(145, y + 46, a, { size: 18, weight: 700, anchor: 'middle', fill: C.muted });
    s += arrow(266, y + 38, 600, y + 38, { w: 3.5, color: C.tealDark, marker: 'ahT' });
    s += box(606, y, 264, 76, { fill: C.tealLight, sw: 2 }) + vcenter(620, y, 76, 236, b, { size: 17, weight: 600, anchor: 'start' });
  });
  s += label(433, 116, 'passed to specialist institutions', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark, italic: true });
  const y = 124 + 3 * 96 + 14;
  s += label(450, y + 4, 'What is left: two basic and irreducible functions', { size: 20, weight: 700, anchor: 'middle' });
  const r = cardRow(y + 22, [
    { head: '1. Primary socialisation', fill: C.mustard, body: 'Children, born without culture, internalise society’s shared norms and values, so a value consensus passes from one generation to the next' },
    { head: '2. Stabilisation of adult personalities', fill: C.mustard, body: 'Adults under pressure at work “give and receive emotional support” at home, which keeps them stable in their adult roles' },
  ], { size: 17, headSize: 19 });
  s += r.svg;
  const n = note(y + 22 + r.h + 18, 'The isolated nuclear family', ['Smaller and more specialised; suited industry because it could move to where the jobs were', 'Two roles: husband **instrumental** (earning, providing); wife **expressive** (care, emotional support)']);
  add('03-parsons-two-functions',
    svg(900, Math.round(y + 22 + r.h + 18 + n.h + 24), 'Parsons: what the family keeps', s + n.svg),
    'Production, education and health care pass from the family to factories and offices, schools and hospitals. What remains are two basic and irreducible functions: primary socialisation of children and stabilisation of adult personalities. Below, the isolated nuclear family with an instrumental husband and expressive wife.',
    'As society industrialised, the family specialised in two irreducible functions.',
    '## Parsons: two basic and irreducible functions');
}

// 04 Evaluating Parsons
{
  const r = cardRow(122, [
    { head: 'Idealised and middle-class', fill: C.cream, body: 'Later authors said he presented an idealised picture centred on middle-class experience' },
    { head: 'Ignores diversity', fill: C.cream, body: 'Lone parent, reconstituted and same-sex families also socialise children and give support' },
  ], { size: 17, headSize: 19 });
  const r2 = cardRow(122 + r.h + 16, [
    { head: 'Ignores the dark side', fill: C.cream, body: 'Domestic abuse destabilises rather than stabilises personalities' },
    { head: 'Children are not passive', fill: C.cream, body: 'They negotiate and resist what parents teach them' },
  ], { size: 17, headSize: 19 });
  const n = note(122 + r.h + 16 + r2.h + 18, 'Feminist point', 'Feminists use Parsons’ instrumental and expressive roles as evidence that functionalism treats a gender division of labour as natural.');
  add('04-evaluating-parsons',
    svg(900, Math.round(122 + r.h + 16 + r2.h + 18 + n.h + 24), 'Evaluating Parsons', r.svg + r2.svg + n.svg, 'He described the American family of the 1950s'),
    'Four criticisms of Parsons: an idealised, middle-class picture; no account of diverse families such as lone parent, reconstituted and same-sex families; no account of domestic abuse; and children treated as passive. Below, feminists say his instrumental and expressive roles treat a gender division as natural.',
    'Parsons’ picture is idealised, middle-class and blind to diversity and abuse.',
    '## Parsons: two basic and irreducible functions');
}

// 05 Who benefits?
{
  let s = '';
  const cols = [
    { head: 'Society', who: 'Functionalist', fill: C.teal, items: ['**Murdock:** four functions found across 250 societies', '**Parsons:** primary socialisation and stabilisation benefit every member'] },
    { head: 'Capitalism', who: 'Marxist', fill: C.tealLight, items: ['**Engels (1884):** monogamy lets men pass property to their own children', 'Reproduces labour power through women’s unpaid work', 'A unit of consumption', '**Zaretsky (1976):** the private refuge is an illusion that props up the system'] },
    { head: 'Men', who: 'Feminist', fill: C.cream, items: ['**Oakley:** canalisation steers children to “suitable” toys', '**Delphy and Leonard (1992):** men exploit women’s work', 'Stabilisation is one-sided: women give more support than they get'] },
  ];
  const w = 268, gap = 18;
  const hs = cols.map((c) => bullets(0, 0, w - 32, c.items, { size: 16 }).h);
  const H = 130 + Math.max(...hs) + 30;
  cols.forEach((c, i) => {
    const x = 30 + i * (w + gap);
    s += panel(x, 150, w, H);
    s += `<rect x="${x + w / 2 - 90}" y="124" width="180" height="52" rx="26" fill="${c.fill}" stroke="${C.ink}" stroke-width="3"/>` + label(x + w / 2, 157, c.head, { size: 20, weight: 700, anchor: 'middle' });
    s += label(x + w / 2, 226, c.who, { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark, italic: true });
    s += bullets(x + 16, 262, w - 32, c.items, { size: 16 }).svg;
  });
  s += label(450, 92, 'Whom does the family really serve?', { size: 20, anchor: 'middle', fill: C.muted });
  const n = note(150 + H + 18, 'Compare and contrast', 'Marxists and feminists both see families as exploitative; they differ over who gains. The same economic function is “providing for members” to functionalists and “consumption that profits capitalists” to Marxists.');
  add('05-who-benefits',
    svg(900, Math.round(150 + H + 18 + n.h + 24), 'Three perspectives on family functions', s + n.svg),
    'Three columns. Functionalists Murdock and Parsons say families benefit society. Marxists, including Engels on inheritance and Zaretsky on the illusion of a private refuge, say they benefit capitalism. Feminists, including Oakley on canalisation and Delphy and Leonard on exploitation, say they benefit men.',
    'The debate is not whether families perform functions, but whom they serve.',
    '## Comparing the three perspectives');
}
