import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-sociology-8192-criticisms-of-families';
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

// 01 Three kinds of criticism
{
  const r = cardRow(122, [
    { head: 'Structure', sub: 'The family is too small and cut off', fill: C.tealLight, body: ['Isolation and unrealistic idealisation', 'Loss of traditional functions', 'Lack of contact with wider kin'] },
    { head: 'Power', sub: 'It benefits some members more than others', fill: C.cream, body: ['The status and role of women', 'Zaretsky: capitalism benefits', 'Delphy and Leonard: men benefit'] },
    { head: 'Harm', sub: 'It can damage the people in it', fill: C.teal, body: ['Marital breakdown', 'Dysfunctional families: abuse, neglect, constant conflict'] },
  ], { size: 17, headSize: 22 });
  const n = note(122 + r.h + 20, 'In the exam', 'Say which kind of criticism you are making, and which perspective makes it.');
  add('01-three-kinds',
    svg(900, Math.round(122 + r.h + 20 + n.h + 24), 'Three kinds of criticism', r.svg + n.svg, 'Critics think the functionalist picture of the family is too rosy'),
    'Three cards sort the criticisms. Structure: isolation and idealisation, loss of functions and lack of contact with kin. Power: the status of women, Zaretsky and Delphy and Leonard. Harm: marital breakdown and dysfunctional families.',
    'Each criticism is about the family’s structure, its power relations or the harm it can do.',
    '## Why criticise the family?');
}

// 02 Six criticisms grid
{
  const rows = [
    ['1. Isolation and unrealistic idealisation', 'Cut off from kin and neighbours, so all emotional needs fall on a few people; the “cereal packet” image makes real families feel they have failed', 'Leach (1967): the family’s “narrow privacy and tawdry secrets”; Oakley'],
    ['2. Loss of traditional functions', 'Functions passed to schools, hospitals and the welfare state, so the family may be weaker', 'Critics, building on Parsons; reply: core functions such as primary socialisation are kept'],
    ['3. Lack of contact with wider kin', 'Less practical help with childcare; older people more isolated', 'Young and Willmott (1957); reply: the modified extended family'],
    ['4. Status and role of women', 'Patriarchal: dual burden, lower lifetime earnings, less power over money and decisions', 'Feminists; Delphy and Leonard'],
    ['5. Marital breakdown', 'Divorce, separation and empty shell marriages suggest unrealistic demands on couples', 'Critics of the nuclear family'],
    ['6. Dysfunctional families', 'Abuse, neglect and constant conflict, hidden by privacy', 'Radical feminists; Dobash and Dobash (1979)'],
  ];
  const f = compareFig('The six criticisms in the specification', {
    cols: [{ head: 'The problem', fill: C.teal }, { head: 'Who says so', fill: C.cream }],
    rows: rows.map(([l, a, b]) => ({ label: l, cells: [a, b] })),
    labelW: 230, size: 16,
  });
  add('02-six-criticisms', f,
    'A table of the six criticisms: isolation and unrealistic idealisation, loss of traditional functions, lack of contact with wider kin, the status and role of women, marital breakdown and dysfunctional families, each with the problem it names and the writers or perspective behind it.',
    'Name the criticism, explain the problem, and say who makes it.',
    '## The six criticisms in the specification');
}

// 03 Isolation and lack of kin: Bethnal Green to the new estate
{
  let s = '';
  const L = headPanel(30, 122, 404, 420, 'Close to kin', { fill: C.cream, size: 21 });
  const R = headPanel(466, 122, 404, 420, 'Cut off from kin', { fill: C.teal, size: 21 });
  s += L.svg + R.svg;
  s += label(232, 200, 'Bethnal Green, east London', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  s += label(668, 200, 'A new estate outside London', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  const house = (x, y, f, big) => { const w = big ? 56 : 40, h = big ? 44 : 32; return `<rect x="${x - w / 2}" y="${y - h}" width="${w}" height="${h}" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/><path d="M${x - w / 2 - 4},${y - h} L${x},${y - h - (big ? 28 : 22)} L${x + w / 2 + 4},${y - h} Z" fill="${C.rust}" stroke="${C.ink}" stroke-width="2"/>`; };
  // left: cluster of kin houses connected
  const kin = [[140, 290], [232, 272], [320, 295], [170, 370], [300, 370]];
  kin.forEach(([x, y]) => { s += `<line x1="232" y1="350" x2="${x}" y2="${y - 16}" stroke="${C.tealDark}" stroke-width="3"/>`; });
  kin.forEach(([x, y]) => { s += house(x, y, C.panel); });
  s += house(232, 365, C.mustard, true);
  s += label(232, 395, 'family', { size: 15, anchor: 'middle', weight: 700 });
  s += bullets(52, 440, 360, ['Day-to-day contact with relatives', 'Practical help with childcare'], { size: 17 }).svg;
  // right: isolated house, kin far away
  s += house(600, 365, C.mustard, true) + label(600, 395, 'family', { size: 15, anchor: 'middle', weight: 700 });
  [[790, 280], [830, 340]].forEach(([x, y]) => { s += house(x, y, C.panel) + `<line x1="630" y1="340" x2="${x - 22}" y2="${y - 14}" stroke="${C.muted}" stroke-width="2" stroke-dasharray="6 6"/>`; });
  s += label(815, 372, 'kin far away', { size: 15, anchor: 'middle', fill: C.muted });
  s += bullets(488, 440, 360, ['More home-centred and isolated', 'Emotional needs fall on a few people', 'Older people may be more isolated'], { size: 17 }).svg;
  s += arrow(400, 320, 520, 320, { w: 4, color: C.olive, marker: 'ahO' }) + label(460, 306, 'moved', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  const n = note(560, 'Counter-argument: the modified extended family', 'Relatives keep in contact through phone calls, video calls, visits and money, even when they live apart.');
  add('03-isolation-kin',
    svg(900, Math.round(560 + n.h + 24), 'Losing contact with wider kin', s + n.svg, 'Young and Willmott (1957)'),
    'Left: a family in Bethnal Green surrounded by relatives, with daily contact and help with childcare. Right: after moving to a new estate outside London the family is home-centred and isolated, with kin far away. Below, the counter-argument that the modified extended family keeps in touch by phone, video calls, visits and money.',
    'Moving away from kin made families more home-centred and more isolated.',
    '## The six criticisms in the specification');
}

// 04 Zaretsky in action
{
  let s = '';
  const cx = 450, cy = 330;
  const nodes = [
    ['Dull, insecure job', 'alienation at work'],
    ['Home to the family', 'which cushions the worker'],
    ['Job feels bearable', 'so the worker does not challenge the system'],
    ['Spends wages on goods', 'the family as a unit of consumption'],
    ['Profit to capitalists', 'capitalism is perpetuated'],
  ];
  const pos = [[165, 200], [450, 200], [735, 200], [590, 460], [310, 460]];
  s += arrow(289, 200, 326, 200, { w: 3.5, color: C.tealDark, marker: 'ahT' }) + arrow(574, 200, 611, 200, { w: 3.5, color: C.tealDark, marker: 'ahT' });
  s += arrow(720, 252, 620, 408, { w: 3.5, color: C.tealDark, marker: 'ahT' }) + arrow(466, 460, 434, 460, { w: 3.5, color: C.tealDark, marker: 'ahT' }) + arrow(280, 408, 180, 252, { w: 3.5, color: C.tealDark, marker: 'ahT' });
  nodes.forEach(([h, b], i) => {
    const [x, y] = pos[i];
    s += box(x - 120, y - 46, 240, 92, { fill: i === 0 ? C.mustard : i === 4 ? C.cream : C.panel, sw: 2.5 }) + label(x, y - 14, h, { size: 18, weight: 700, anchor: 'middle' }) + para(x, y + 12, 220, b, { size: 15, anchor: 'middle', fill: C.ink }).svg;
  });
  s += label(cx, cy - 6, 'The family is a', { size: 18, anchor: 'middle', fill: C.muted }) + label(cx, cy + 20, 'prop to capitalism', { size: 20, weight: 700, anchor: 'middle' });
  const n = note(540, 'Zaretsky (1976): the family cannot win', ['The separate “private life” of the family is an illusion', 'It cannot make up for the lack of meaning at work, or meet all psychological and social needs', 'It relies on housewives’ unpaid domestic labour to reproduce future workers', 'Only **socialism** would end the separation of family and public life']);
  add('04-zaretsky-cycle',
    svg(900, Math.round(540 + n.h + 24), 'Zaretsky: how the family props up capitalism', s + n.svg),
    'A cycle: a worker in a dull, insecure job comes home to the family, which cushions him, so the job feels bearable and he does not challenge the system; the family spends wages on goods, which returns profit to capitalists. Below, Zaretsky’s points that the private family is an illusion and only socialism would end the problem.',
    'By cushioning workers, the family keeps capitalism going.',
    '## Zaretsky: a Marxist view of developments in families');
}

// 05 Delphy and Leonard: appropriation in a dual-earner couple
{
  let s = '';
  const col = (x, who, fill, rows, totalLabel) => {
    let o = headPanel(x, 108, 404, 420, who, { fill, size: 21 }).svg;
    let y = 186;
    rows.forEach(([l, f, h]) => { o += `<rect x="${x + 40}" y="${y}" width="324" height="${h}" rx="8" fill="${f}" stroke="${C.ink}" stroke-width="2"/>` + label(x + 202, y + h / 2 + 6, l, { size: 17, weight: 700, anchor: 'middle' }); y += h + 10; });
    o += label(x + 202, 508, totalLabel, { size: 17, anchor: 'middle', fill: C.tealDark, weight: 700, italic: true });
    return o;
  };
  s += col(30, 'Woman', C.cream, [['Full-time paid job', C.teal, 90], ['Cooking', C.cream, 56], ['Cleaning', C.cream, 56], ['Organising the children', C.cream, 56]], 'her work is appropriated');
  s += col(466, 'Man', C.teal, [['Full-time paid job', C.teal, 90], ['Free time and comfort', C.mustard, 132]], 'he benefits from her labour');
  s += arrow(410, 340, 494, 340, { w: 5, color: C.olive, marker: 'ahO' });
  const n = note(546, 'Familiar Exploitation (1992)', ['The family is an **economic system** of labour relations, not an accident or a hangover from the past', 'It is **men, rather than capitalists**, who mainly benefit', 'The family has a central role in maintaining **patriarchy**', '**Criticism:** underplays change; not all women experience the family as oppressive; patterns differ by class and ethnicity']);
  add('05-delphy-leonard-appropriation',
    svg(900, Math.round(546 + n.h + 24), 'Delphy and Leonard: whose work, whose benefit?', s + n.svg),
    'A dual-earner couple: both have full-time paid jobs, but the woman also does the cooking, cleaning and organising of the children, and her labour gives the man free time and comfort. Below, Delphy and Leonard’s argument that the family is an economic system in which men exploit women’s work, with criticisms.',
    'For Delphy and Leonard, men, not capitalists, gain from women’s work in the family.',
    '## Delphy and Leonard: a feminist critique');
}

// 06 Critics vs functionalist response
{
  const f = versusFig('Are the criticisms the rule or the exception?', {
    left: { head: 'Critics', fill: C.cream, items: ['The family is isolated, idealised and cut off from kin', 'It benefits capitalism (Zaretsky) or men (Delphy and Leonard)', 'Marital breakdown shows unrealistic demands on couples', 'Dysfunctional families reveal what privacy conceals'] },
    right: { head: 'Functionalist response', fill: C.teal, items: ['Some families fail, but criticisms describe **the exception, not the rule**', 'Most families still socialise children and give emotional support', 'That is why most people still choose to live in families', 'High divorce may show people value marriage enough to leave a bad one and try again'] },
    foot: { head: 'Discuss how far', text: 'Weigh at least two criticisms against the functionalist reply, and judge whether they apply to all families or only some.' },
  });
  add('06-functionalist-response', f,
    'Two panels. Critics say the family is isolated, benefits capitalism or men, places unrealistic demands on couples and can hide harm. Functionalists reply that these are exceptions: most families socialise children and give emotional support, and high divorce may show people value marriage.',
    'Judge whether each criticism applies to all families or only some.',
    '## The functionalist response');
}
