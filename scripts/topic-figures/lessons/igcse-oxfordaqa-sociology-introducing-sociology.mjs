import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-oxfordaqa-sociology-introducing-sociology';
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
const P = (cx, cy, f = C.teal, r = 13) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`;
const ln = (x1, y1, x2, y2, o = {}) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${o.c || C.ink}" stroke-width="${o.w || 2.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;

// 01 Family types
{
  const A = C.teal, K = C.mustard, S = C.cream;
  const types = [
    ['Nuclear', 'two parents and their children', (x, y) => ln(x - 30, y, x + 30, y) + ln(x, y, x, y + 40) + ln(x - 25, y + 40, x + 25, y + 40) + P(x - 30, y, A) + P(x + 30, y, A) + P(x - 25, y + 48, K) + P(x + 25, y + 48, K)],
    ['Extended', 'more relatives beyond parents and children', (x, y) => ln(x - 25, y - 30, x + 25, y - 30) + ln(x, y - 30, x, y) + ln(x - 30, y + 8, x + 30, y + 8) + ln(x, y + 8, x, y + 40) + P(x - 25, y - 34, S) + P(x + 25, y - 34, S) + P(x - 30, y + 8, A) + P(x + 30, y + 8, A) + P(x, y + 48, K)],
    ['Single-parent', 'one parent and their children', (x, y) => ln(x, y, x, y + 40) + ln(x - 25, y + 40, x + 25, y + 40) + P(x, y, A) + P(x - 25, y + 48, K) + P(x + 25, y + 48, K)],
    ['Reconstituted', 'a step-family', (x, y) => ln(x - 30, y, x + 30, y) + ln(x - 30, y, x - 30, y + 40) + ln(x + 30, y, x + 30, y + 40, { dash: '5 4' }) + P(x - 30, y, A) + P(x + 30, y, A) + P(x - 30, y + 48, K) + P(x + 30, y + 48, C.tealLight)],
    ['Living apart together', 'a couple in separate homes', (x, y) => `<path d="M${x - 58},${y + 6} l18,-16 l18,16 v30 h-36 z M${x + 22},${y + 6} l18,-16 l18,16 v30 h-36 z" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/>` + P(x - 40, y + 22, A, 10) + P(x + 40, y + 22, A, 10) + ln(x - 22, y + 22, x + 22, y + 22, { dash: '5 4' })],
    ['Child-free couple', 'a couple without children', (x, y) => ln(x - 30, y + 20, x + 30, y + 20) + P(x - 30, y + 20, A) + P(x + 30, y + 20, A)],
    ['Beanpole', 'many generations, few members each', (x, y) => [0, 1, 2, 3].map((i) => (i < 3 ? ln(x, y - 30 + i * 30, x, y + i * 30) : '') + P(x, y - 30 + i * 30, [S, A, K, C.tealLight][i], 11)).join('')],
  ];
  let s = '';
  const cw = 200, ch = 200, gap = 13.3;
  types.forEach(([h, d, art], i) => {
    const row = i < 4 ? 0 : 1, col = i < 4 ? i : i - 4, x = row ? 30 + (840 - 3 * cw - 2 * gap) / 2 + col * (cw + gap) : 30 + col * (cw + gap), y = 108 + row * (ch + 14);
    s += box(x, y, cw, ch, { fill: C.panel, edge: C.panelEdge }) + art(x + cw / 2, y + 60) + label(x + cw / 2, y + 150, h, { size: 18, weight: 700, anchor: 'middle' }) + para(x + cw / 2, y + 172, cw - 20, d, { size: 15, anchor: 'middle', fill: C.muted }).svg;
  });
  const y = 108 + 2 * (ch + 14);
  s += P(300, y + 20, C.teal, 10) + label(316, y + 26, 'adult', { size: 16 }) + P(400, y + 20, C.mustard, 10) + label(416, y + 26, 'child', { size: 16 }) + P(500, y + 20, C.cream, 10) + label(516, y + 26, 'grandparent', { size: 16 });
  const n = note(y + 50, 'Therborn', 'Different family systems across world regions show that family form is not universal.');
  add('01-family-types',
    svg(900, Math.round(y + 50 + n.h + 24), 'Family types', s + n.svg),
    'Seven small family diagrams: nuclear, extended, single-parent, reconstituted, living apart together, child-free couple and beanpole (many generations, few members each). A note adds Therborn’s point that family systems differ across world regions.',
    'There is no single family form: households take many shapes.',
    '## Families (3.1.1)');
}

// 02 Perspectives on the family
{
  add('02-family-perspectives',
    cardsFig('Three views of the family', {
      ncol: 3, size: 17,
      cards: [
        { head: 'Functionalism', fill: C.teal, sub: 'Parsons', body: ['The family performs positive functions', 'Primary socialisation', '“Stabilisation of adult personalities”'] },
        { head: 'Marxism', fill: C.tealLight, sub: 'Engels', body: ['The family serves capitalism', 'Reproduces labour power', 'Transmits property', 'A form of social control'] },
        { head: 'Feminism', fill: C.cream, sub: 'Oakley', body: ['The family positions women unequally', 'Especially around domestic labour and childcare'] },
      ],
      foot: { head: 'Growing diversity', text: ['**Smart:** individualisation', '**Stacey:** diverse, “negotiated” family forms'] },
    }),
    'Three cards. Parsons, a functionalist, sees positive functions: primary socialisation and stabilising adult personalities. Engels, a Marxist, sees the family serving capitalism. Oakley, a feminist, sees women positioned unequally around domestic labour and childcare. Below, Smart and Stacey on growing family diversity.',
    'Functionalists see benefits, Marxists see capitalism, feminists see inequality.',
    '## Families (3.1.1)');
}

// 03 Beanpole and pivot generation
{
  let s = '';
  // left: older wide shape vs beanpole
  s += label(240, 112, 'Demographic change', { size: 19, weight: 700, anchor: 'middle' });
  s += box(30, 128, 420, 110, { fill: C.panel, edge: C.panelEdge }) + label(50, 162, 'Rising life expectancy', { size: 17, weight: 700 }) + label(50, 186, 'more generations alive at once', { size: 16, fill: C.muted }) + label(50, 214, 'Falling birth rates: fewer members in each', { size: 16, fill: C.muted });
  s += arrow(240, 244, 240, 276);
  const gens = [['Grandparents', C.cream], ['Parents (pivot)', C.mustard], ['Children', C.tealLight]];
  gens.forEach(([g, f], i) => {
    const y = 300 + i * 110;
    s += P(160, y + 20, f, 22) + P(220, y + 20, f, 22);
    if (i < 2) s += ln(190, y + 44, 190, y + 88, { w: 3 });
    s += label(260, y + 26, g, { size: 18, weight: 700 });
  });
  s += label(200, 640, 'A “beanpole” family', { size: 17, weight: 600, anchor: 'middle', fill: C.muted, italic: true });
  // right: pivot generation caring both ways
  s += headPanel(500, 128, 370, 500, 'The pivot generation', { fill: C.mustard, size: 21 }).svg;
  s += box(540, 210, 290, 80, { fill: C.cream, sw: 2 }) + label(685, 256, 'Ageing parents', { size: 18, weight: 700, anchor: 'middle' });
  s += box(540, 370, 290, 80, { fill: C.mustard, sw: 2 }) + label(685, 416, 'Adults in the middle', { size: 18, weight: 700, anchor: 'middle' });
  s += box(540, 530, 290, 80, { fill: C.tealLight, sw: 2 }) + label(685, 576, 'Their children', { size: 18, weight: 700, anchor: 'middle' });
  s += arrow(685, 366, 685, 296, { w: 4 }) + arrow(685, 454, 685, 524, { w: 4 });
  s += label(700, 336, 'care', { size: 16, weight: 700, fill: C.olive }) + label(700, 494, 'care', { size: 16, weight: 700, fill: C.olive });
  add('03-beanpole-pivot',
    svg(900, 664, 'Beanpole families and the pivot generation', s),
    'Rising life expectancy and falling birth rates produce beanpole families: three generations with few members in each. The middle generation becomes the pivot generation, caring for ageing parents above and children below at the same time.',
    'Longer lives and fewer births leave the middle generation caring both ways.',
    '## Families (3.1.1)');
}

// 04 Labelling and the self-fulfilling prophecy
{
  const cx = 450, cy = 360, R = 200;
  const steps = [
    ['Teacher labels a pupil', '“bright” or “disruptive”, often on limited evidence'],
    ['Expectations change', 'the teacher expects more, or less'],
    ['Treatment changes', 'how the pupil is treated in class'],
    ['Pupil internalises the label', 'and acts it out'],
  ];
  let s = `<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="${C.tealDark}" stroke-width="4" stroke-dasharray="12 8"/>`;
  s += `<circle cx="${cx}" cy="${cy}" r="96" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + label(cx, cy - 8, 'Self-fulfilling', { size: 19, weight: 700, anchor: 'middle' }) + label(cx, cy + 18, 'prophecy', { size: 19, weight: 700, anchor: 'middle' });
  const pos = [[cx, cy - R], [cx + R + 40, cy], [cx, cy + R], [cx - R - 40, cy]];
  [-45, 45, 135, 225].forEach((th) => { const r = (th * Math.PI) / 180, x = cx + R * Math.cos(r), y = cy + R * Math.sin(r); s += `<path d="M-14,-13 L14,0 L-14,13 z" transform="translate(${x},${y}) rotate(${th + 90})" fill="${C.tealDark}"/>`; });
  steps.forEach(([h, d], i) => {
    const [x, y] = pos[i], w = 250;
    const bp = para(0, 0, w - 24, d, { size: 15 }), hh = 30 + bp.h + 28;
    s += box(x - w / 2, y - hh / 2, w, hh, { fill: i === 0 ? C.teal : C.panel });
    s += label(x, y - hh / 2 + 30, h, { size: 17, weight: 700, anchor: 'middle' }) + para(x, y - hh / 2 + 54, w - 24, d, { size: 15, anchor: 'middle', fill: C.muted }).svg;
  });
  const n = note(cy + R + 70, null, ['Pupil subcultures form in response: some pro-school, some anti-school', 'Racism and sexism in the classroom can work through the same labelling process (Becker on labelling)']);
  add('04-labelling-prophecy',
    svg(900, Math.round(cy + R + 70 + n.h + 24), 'How a label comes true', s + n.svg),
    'A cycle of four steps around the self-fulfilling prophecy: a teacher labels a pupil, often on limited evidence; the teacher’s expectations change; the pupil is treated differently; the pupil internalises and acts out the label, which confirms it.',
    'A label shapes expectations and treatment until the pupil lives up, or down, to it.',
    '## Education (3.1.2)');
}

// 05 Official vs hidden curriculum and perspectives on education
{
  let s = '';
  s += box(30, 108, 404, 150, { fill: C.teal }) + label(232, 146, 'Official curriculum', { size: 21, weight: 700, anchor: 'middle' }) + para(232, 178, 360, 'The subjects formally taught', { size: 17, anchor: 'middle' }).svg;
  ['maths', 'science', 'history'].forEach((w, i) => { s += `<rect x="${62 + i * 116}" y="206" width="104" height="36" rx="18" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/>` + label(114 + i * 116, 230, w, { size: 16, weight: 600, anchor: 'middle' }); });
  s += box(466, 108, 404, 150, { fill: C.cream, dash: '8 6' }) + label(668, 146, 'Hidden curriculum', { size: 21, weight: 700, anchor: 'middle' }) + para(668, 178, 390, 'Attitudes taught through routine', { size: 17, anchor: 'middle' }).svg;
  ['punctuality', 'authority', 'competition'].forEach((w, i) => { s += `<rect x="${482 + i * 128}" y="206" width="116" height="36" rx="18" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/>` + label(540 + i * 128, 230, w, { size: 15, weight: 600, anchor: 'middle' }); });
  const r = cardRow(286, [
    { head: 'Functionalism', fill: C.teal, sub: 'Davis and Moore', body: 'Allocates roles by ability and socialises shared values: “role allocation”' },
    { head: 'Marxism', fill: C.tealLight, sub: 'Bourdieu', body: 'Reproduces class inequality: schools reward the “cultural capital” of better-off pupils' },
    { head: 'Radical / critical', fill: C.cream, sub: 'Freire, Illich', body: 'Traditional schooling can suppress critical thought rather than develop it' },
  ], { size: 16, headSize: 19 });
  s += r.svg;
  add('05-curriculum-perspectives',
    svg(900, 286 + r.h + 24, 'What schools teach, and why', s),
    'Top: the official curriculum is the subjects formally taught; the hidden curriculum teaches punctuality, respect for authority and competitiveness through routine. Below, three perspectives: functionalist role allocation, Bourdieu on cultural capital reproducing class inequality, and Freire and Illich on schooling suppressing critical thought.',
    'Schools teach more than subjects; the perspectives disagree about what that does.',
    '## Education (3.1.2)');
}

// 06 Global education barriers
{
  add('06-global-education',
    cardsFig('Global education: what limits access?', {
      ncol: 2, size: 16,
      cards: [
        { head: 'Provision', fill: C.teal, body: ['Years of free, compulsory schooling', 'Class sizes and trained teachers', 'School buildings and materials'] },
        { head: 'Poverty', fill: C.tealLight, body: ['Children kept home to work or care for siblings', 'School fees and uniform costs', 'Underfunded schools'] },
        { head: 'Gender and other inequalities', fill: C.cream, body: ['Girls may leave early through early marriage, domestic work or safety concerns', 'Disability, rural location and conflict', 'UNESCO: about two-thirds of adults without basic literacy are women'] },
        { head: 'Digital access', fill: C.sand, body: ['Devices, electricity and internet connection', 'Especially visible when schools closed during the COVID-19 pandemic'] },
      ],
      foot: { head: 'Literacy rates', text: 'Compare global rates and rates between countries, and link explanations back to the perspectives on education.' },
    }),
    'Four cards on access to education worldwide: provision (free schooling, class sizes, teachers, buildings); poverty (child work, fees, underfunding); gender and other inequalities (early marriage, disability, rural location, conflict, with women about two-thirds of adults lacking basic literacy); and digital access, exposed during COVID-19 closures.',
    'Provision, poverty, gender and digital access all shape who gets an education.',
    '## Education (3.1.2)');
}

// 07 Reliability, validity, representativeness and methods
{
  const methods = [
    ['Questionnaire', 'Reliability', 'Large samples, cheap', 'Low response, may lack depth'],
    ['Structured interview', 'Reliability', 'Comparable', 'Limited depth; interviewer effect'],
    ['Unstructured interview', 'Validity', 'Rich, valid detail', 'Time-consuming; hard to replicate'],
    ['Participant observation', 'Validity', 'Natural setting', 'Not reliable; going native'],
    ['Official statistics', 'Scale', 'Large scale, free, comparable', 'Made for other purposes'],
  ];
  let s = '';
  s += label(450, 104, 'Reliability and validity often trade off against each other', { size: 18, anchor: 'middle', fill: C.muted, italic: true });
  const x0 = 300, colW = 160, rh = 66, y0 = 122;
  s += label(x0 + 72, y0 + 32, 'Strong on', { size: 17, weight: 700, anchor: 'middle', fill: C.muted }) + label(x0 + colW + 10, y0 + 32, 'Strength / weakness', { size: 17, weight: 700, fill: C.muted });
  methods.forEach(([m, strong, plus, minus], i) => {
    const y = y0 + 60 + i * (rh + 8);
    s += box(30, y, 260, rh, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + vcenter(46, y, rh, 230, m, { size: 18, weight: 700 });
    const f = strong === 'Reliability' ? C.teal : strong === 'Validity' ? C.cream : C.tealLight;
    s += `<rect x="${x0}" y="${y + 13}" width="144" height="40" rx="20" fill="${f}" stroke="${C.ink}" stroke-width="2"/>` + label(x0 + 72, y + 39, strong, { size: 17, weight: 700, anchor: 'middle' });
    s += box(x0 + colW, y, 870 - x0 - colW, rh, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + label(x0 + colW + 14, y + 28, '+ ' + plus, { size: 16, fill: C.tealDark, weight: 600 }) + label(x0 + colW + 14, y + 52, '− ' + minus, { size: 16, fill: C.rust, weight: 600 });
  });
  const y = y0 + 60 + 5 * (rh + 8) + 10;
  const n = note(y, 'Three tests for any method', ['**Reliability:** would repeating it give the same result?', '**Validity:** does it measure what it claims?', '**Representativeness:** can it be generalised? A bigger sample does not remove bias from a biased method']);
  add('07-methods-scorecard',
    svg(900, Math.round(y + n.h + 24), 'Judging research methods', s + n.svg),
    'Five methods with what each is strong on and a strength and weakness: questionnaires and structured interviews are reliable; unstructured interviews and participant observation give valid detail; official statistics give large-scale, comparable data but were collected for other purposes. Below, the three tests: reliability, validity and representativeness.',
    'Reliable methods tend to lack depth; valid, detailed methods are hard to repeat.',
    '## Research methods (3.1.3 — shared with Paper 2)');
}

// 08 Worked example: studying bullying
{
  let s = '';
  s += box(30, 108, 840, 60, { fill: C.ink, edge: C.ink }) + label(450, 146, 'Research aim: bullying in a secondary school', { size: 20, weight: 700, anchor: 'middle', fill: '#ffffff' });
  const r = cardRow(190, [
    { head: 'Questionnaire', fill: C.teal, body: ['**+** Anonymous, so pupils may answer honestly on a sensitive topic', '**+** Large sample; reliable', '**−** Little depth on why bullying happens'] },
    { head: 'Unstructured interview', fill: C.cream, body: ['**+** Rich detail on experiences and meanings', '**−** Pupils may not open up to an adult stranger', '**−** Small sample, not representative'] },
  ], { size: 17, headSize: 20 });
  s += r.svg;
  const y = 190 + r.h;
  s += path(`M232,${y + 4} L232,${y + 30} L668,${y + 30} L668,${y + 4}`, { w: 3.5 }) + arrow(450, y + 30, 450, y + 56);
  s += box(130, y + 62, 640, 110, { fill: C.mustard }) + label(450, y + 96, 'Best: combine both', { size: 21, weight: 700, anchor: 'middle' });
  s += label(450, y + 126, 'Questionnaire: how widespread is it?', { size: 17, anchor: 'middle' }) + label(450, y + 152, 'Follow-up interviews with volunteers: why does it happen?', { size: 17, anchor: 'middle' });
  add('08-bullying-method-choice',
    svg(900, y + 196, 'Choosing a method: bullying', s),
    'For a study of bullying in a school, a questionnaire is anonymous and reliable but shallow; unstructured interviews give rich detail but pupils may not open up and the sample is small. The best answer combines them: a questionnaire to measure how widespread bullying is, then interviews with volunteers to understand why.',
    'Recommending a justified combination scores higher than defending one method.',
    '## Worked example');
}
