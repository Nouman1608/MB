import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-sociology-8192-divorce';
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

// 01 Pattern since 1945 (schematic)
{
  let s = '';
  const ox = 70, oy = 450, W = 790, H = 280;
  const X = (yr) => ox + ((yr - 1945) / (2025 - 1945)) * W;
  s += `<line x1="${ox}" y1="${oy}" x2="${ox + W + 10}" y2="${oy}" stroke="${C.ink}" stroke-width="2.5"/><line x1="${ox}" y1="${oy}" x2="${ox}" y2="${oy - H - 10}" stroke="${C.ink}" stroke-width="2.5"/>`;
  [1945, 1955, 1965, 1975, 1985, 1995, 2005, 2015, 2025].forEach((yr) => { s += `<line x1="${X(yr)}" y1="${oy}" x2="${X(yr)}" y2="${oy + 7}" stroke="${C.ink}" stroke-width="2"/>` + label(X(yr), oy + 26, String(yr), { size: 15, anchor: 'middle', fill: C.muted }); });
  s += `<text x="${ox - 18}" y="${oy - H / 2}" font-size="15" fill="${C.muted}" text-anchor="middle" transform="rotate(-90 ${ox - 18} ${oy - H / 2})">number of divorces (shape only)</text>`;
  const pts = [[1945, 40], [1947, 75], [1950, 45], [1960, 40], [1968, 55], [1971, 120], [1975, 165], [1985, 205], [1992, 230], [2000, 200], [2010, 160], [2019, 120]];
  const d = pts.map(([yr, v], i) => `${i ? 'L' : 'M'}${X(yr)},${oy - v}`).join(' ');
  s += path(d, { stroke: C.tealDark, w: 5 });
  const law = (yr, txt, y, anchor = 'middle') => `<line x1="${X(yr)}" y1="${oy}" x2="${X(yr)}" y2="${y + 8}" stroke="${C.rust}" stroke-width="2" stroke-dasharray="5 5"/>` + label(X(yr), y, txt, { size: 15, weight: 700, anchor, fill: C.rust });
  s += law(1949, '1949 legal aid', 135, 'start') + law(1971, '1971 Divorce Reform Act', 160, 'start') + law(1984, '1984: after 1 year', 185, 'start') + law(2022, '2022 no-fault', 135, 'end');
  s += label(X(1992), oy - 172, 'peak: early 1990s', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
  const phases = [
    ['Just after 1945', 'Short rise as wartime marriages ended'],
    ['1950s–1960s', 'Uncommon; stigma; an offence had to be proved'],
    ['1970s', 'Sharp rise after the 1969 Act came into force'],
    ['1980s–early 1990s', 'Continued growth to a peak'],
    ['Late 1990s–2010s', 'Fall: fewer marry, more cohabit, marry later'],
    ['2022 onwards', 'No-fault divorce from April 2022'],
  ];
  let y = oy + 56;
  phases.forEach(([h, b], i) => {
    const col = i % 2, row = Math.floor(i / 2), x = 30 + col * 425, yy = y + row * 72;
    s += box(x, yy, 415, 62, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + badge(x + 28, yy + 31, 16, String(i + 1), C.cream) + label(x + 54, yy + 26, h, { size: 17, weight: 700 }) + label(x + 54, yy + 49, b, { size: 15, fill: C.muted });
  });
  add('01-divorce-pattern',
    svg(900, y + 3 * 72 + 16, 'The pattern of divorce since 1945', s, 'England and Wales: the shape of the trend, not exact figures'),
    'A schematic line shows the number of divorces since 1945: a brief post-war rise, a low level in the 1950s and 1960s, a sharp rise after the Divorce Reform Act came into force in 1971, growth to a peak in the early 1990s, then a general fall. Laws are marked: legal aid 1949, 1971, 1984 and no-fault divorce from 2022.',
    'Divorce rose sharply after 1971, peaked in the early 1990s, then fell: not a steady rise.',
    '## The pattern of divorce since 1945');
}

// 02 Three statistical traps
{
  const r = cardRow(108, [
    { head: 'Number vs rate', fill: C.teal, body: ['The **rate** is divorces per 1,000 married people in a year', 'The **number** can fall while the rate stays high, if fewer people marry'] },
    { head: 'Hidden breakdown', fill: C.tealLight, body: ['Figures leave out **separations** of couples who never divorce', 'And the break-up of **cohabiting** couples', 'So they **underestimate** relationship breakdown'] },
    { head: 'Backlog after a law', fill: C.cream, body: ['A sudden rise after a new law may be couples **already separated** finally divorcing', 'Not a sudden rise in unhappy marriages'] },
  ], { size: 17, headSize: 20 });
  const n = note(108 + r.h + 18, 'Using data in an answer', 'Describe the overall trend, quote two figures, point out any exception, then explain.');
  add('02-statistical-traps',
    svg(900, Math.round(108 + r.h + 18 + n.h + 24), 'Three traps in divorce statistics', r.svg + n.svg),
    'Three cards. The number of divorces can fall while the divorce rate stays high. Divorce figures miss separations and cohabiting break-ups, so they underestimate breakdown. A rise after a new law may be a backlog of couples already separated. Below: trend, two figures, exception, explanation.',
    'Check what the figures count before you explain them.',
    '## The pattern of divorce since 1945');
}

// 03 Law makes it possible; social change makes people want it
{
  let s = '';
  s += box(30, 112, 840, 176, { fill: C.tealLight, sw: 2.5 }) + label(50, 144, 'Changes in the law: divorce becomes POSSIBLE', { size: 20, weight: 700 }) + label(50, 168, 'easier, cheaper and quicker', { size: 16, fill: C.muted, italic: true });
  const acts = [['1949', 'Legal aid'], ['1969 (1971)', 'Irretrievable breakdown; no need to prove guilt'], ['1984', 'Apply after one year'], ['2020 (2022)', 'No-fault; joint applications']];
  acts.forEach(([a, b], i) => { const x = 50 + i * 205; s += box(x, 184, 190, 90, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + label(x + 12, 206, a, { size: 15, weight: 700, fill: C.tealDark }) + para(x + 12, 228, 172, b, { size: 15 }).svg; });
  const r = cardRow(336, [
    { head: 'Social attitudes and values', fill: C.teal, body: ['Much less stigma', 'Marriage should bring happiness and fulfilment, not just duty', 'Higher expectations: less willing to put up with an empty shell (functionalists)'] },
    { head: 'Secularisation', fill: C.teal, body: ['Fewer see marriage as a sacred, lifelong vow', 'Most marriages now civil ceremonies', 'Many religious groups more accepting'] },
    { head: 'Status of women', fill: C.teal, body: ['Own income from paid work', 'Equal Pay Act 1970; Sex Discrimination Act 1975', 'Welfare support for lone parents', 'Feminism raised expectations'] },
  ], { size: 16, headSize: 19 });
  s += label(450, 320, 'Social change: people WANT a divorce', { size: 20, weight: 700, anchor: 'middle' });
  s += r.svg;
  const n = note(336 + r.h + 18, 'Discuss how far', 'Laws make divorce possible but do not explain why people want one, and laws often follow changes in attitudes rather than causing them.');
  add('03-possible-and-wanted',
    svg(900, Math.round(336 + r.h + 18 + n.h + 24), 'Why divorce rose: the law and social change', s + n.svg),
    'Top: four laws made divorce possible, easier, cheaper and quicker: legal aid in 1949, irretrievable breakdown from 1971, applying after one year from 1984 and no-fault divorce from 2022. Below: three social changes made people want divorce: less stigma and higher expectations, secularisation, and women’s changed status.',
    'Laws open the door; changes in attitudes, religion and women’s status explain why people walk through it.',
    '## Reasons for the rise in divorce since 1945');
}

// 04 Women's status chain
{
  const items = [
    { head: 'Paid work', body: 'Many women have their own income', fill: C.tealLight },
    { head: 'Less dependent', body: 'No longer financially reliant on a husband', fill: C.tealLight },
    { head: 'Leaving is realistic', body: 'She can support herself and her children', fill: C.cream },
    { head: 'Evidence', body: 'Most divorce petitions are brought by wives', fill: C.mustard },
  ];
  const c = hchain(118, items, { size: 16, ag: 34 });
  let s = c.svg;
  const y = 118 + c.h + 56;
  const r = cardRow(y, [
    { head: 'Equality laws', fill: C.panel, body: 'Equal Pay Act 1970 and Sex Discrimination Act 1975 improved women’s position at work' },
    { head: 'Welfare benefits', fill: C.panel, body: 'Some support for lone parents' },
    { head: 'Feminism', fill: C.panel, body: 'Raised expectations: a marriage that leaves her a dual burden is harder to accept' },
  ], { size: 16, headSize: 19 });
  s += label(450, y - 14, 'Also strengthening women’s position', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('04-womens-status',
    svg(900, Math.round(y + 16 + r.h + 24), 'Women’s changing status and divorce', s + r.svg),
    'A chain: paid work gives women their own income, so they are less dependent on a husband, leaving becomes realistic, and most divorce petitions are brought by wives. Below, equality laws, welfare benefits for lone parents and feminism also strengthened women’s position.',
    'Independence makes leaving an unhappy marriage a realistic option for women.',
    '## Reasons for the rise in divorce since 1945');
}

// 05 Consequences
{
  const r = cardRow(108, [
    { head: 'Husband and wife', fill: C.teal, body: ['Two households cost more; women’s incomes often fall more', 'Men may pay maintenance and need new housing', 'Stress and loneliness, but also **relief** from an unhappy or abusive relationship', 'Remarriage or cohabitation: **serial monogamy**, reconstituted families'] },
    { head: 'Children', fill: C.tealLight, body: ['Moving home or school; two households', 'Often less contact with the non-resident father', 'Step-parents and step-siblings', 'Distress; but parental **conflict** may harm more than divorce itself'] },
  ], { size: 16, headSize: 20 });
  const r2 = cardRow(108 + r.h + 16, [
    { head: 'Extended family', fill: C.cream, body: ['Grandparents may lose contact, or give more childcare to a lone parent', 'More complex kin: step-grandparents and former in-laws'] },
    { head: 'Family structures', fill: C.mustard, body: ['More **lone parent families**, mostly headed by mothers', 'Higher risk of poverty: childcare costs; hard to combine full-time work with sole care'] },
  ], { size: 16, headSize: 20 });
  const n = note(108 + r.h + 16 + r2.h + 18, 'Not every consequence is negative', 'Ending a violent or high-conflict marriage can benefit family members.');
  add('05-consequences',
    svg(900, Math.round(108 + r.h + 16 + r2.h + 18 + n.h + 24), 'Consequences of divorce', r.svg + r2.svg + n.svg),
    'Four cards. Husband and wife face financial and emotional costs, but also relief, and many form new partnerships. Children may move, see less of one parent and gain step-families, though conflict may harm more than divorce. The extended family loses or gains contact. Family structures change, with more lone parent families at higher risk of poverty.',
    'Divorce affects every family member and reshapes family structures, not always for the worse.',
    '## Consequences of divorce');
}
