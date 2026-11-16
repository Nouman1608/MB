import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-sociology-8192-social-structures-processes-issues';
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
const chip = (x, y, s, o = {}) => { const size = o.size || 16, w = o.w || Math.round(s.length * size * 0.52 + 24); return { svg: `<rect x="${x}" y="${y}" width="${w}" height="${size + 18}" rx="${(size + 18) / 2}" fill="${o.fill || C.tealLight}" stroke="${o.edge || C.ink}" stroke-width="1.8"/>` + label(x + w / 2, y + size + 4, s, { size, weight: o.weight ?? 600, anchor: 'middle' }), w }; };
const chipRow = (x, y, items, o = {}) => { let s = '', cx = x; for (const it of items) { const c = chip(cx, y, it, o); s += c.svg; cx += c.w + 10; } return s; };

// 01 Structures, processes, issues
{
  const tiers = [
    ['Social structures', 'The lasting, organised patterns of a society', ['families', 'education system', 'class structure', 'criminal justice system'], C.teal],
    ['Social processes', 'The ways structures work on people', ['socialisation', 'social control', 'labelling', 'selection in school'], C.tealLight],
    ['Social issues', 'Patterns people debate and governments may try to change', ['divorce', 'underachievement', 'crime', 'poverty'], C.cream],
  ];
  let s = '', y = 108;
  tiers.forEach(([h, d, ex, f], i) => {
    s += box(30, y, 840, 112, { fill: C.panel, edge: C.panelEdge });
    s += `<rect x="31.5" y="${y + 1.5}" width="190" height="109" rx="12" fill="${f}"/>` + `<line x1="222" y1="${y + 2}" x2="222" y2="${y + 110}" stroke="${C.panelEdge}" stroke-width="2"/>`;
    s += vcenter(126, y, 112, 170, h, { size: 20, weight: 700, anchor: 'middle' });
    s += para(240, y + 34, 610, d, { size: 17, weight: 600 }).svg + chipRow(240, y + 56, ex, { fill: f, size: 15 });
    y += 112;
    if (i < 2) { s += arrow(126, y + 4, 126, y + 34) + label(146, y + 25, i ? 'create and shape' : 'work on people through', { size: 15, italic: true, fill: C.tealDark, weight: 600 }); y += 38; }
  });
  y += 30;
  s += label(450, y, 'Structure or agency?', { size: 20, weight: 700, anchor: 'middle' });
  s += `<line x1="160" y1="${y + 40}" x2="740" y2="${y + 40}" stroke="${C.ink}" stroke-width="4" marker-start="url(#ah)" marker-end="url(#ah)"/>`;
  s += label(40, y + 46, 'Structure', { size: 18, weight: 700 }) + label(860, y + 46, 'Agency', { size: 18, weight: 700, anchor: 'end' });
  s += para(250, y + 76, 300, 'Functionalist and Marxist accounts stress structure', { size: 16, anchor: 'middle', fill: C.tealDark }).svg;
  s += para(650, y + 76, 300, 'Interactionist accounts stress meanings and reactions to labels', { size: 16, anchor: 'middle', fill: C.olive }).svg;
  s += label(450, y + 26, 'agency = people’s ability to make their own choices', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  add('01-structures-processes-issues',
    svg(900, y + 130, 'Structures, processes and issues', s),
    'Three tiers. Social structures such as families and the education system work on people through social processes such as socialisation and labelling, which create social issues such as divorce, underachievement, crime and poverty. Below, a line from structure to agency: functionalist and Marxist accounts stress structure; interactionist accounts stress meanings and labels.',
    'Structures act on people through processes, and the results become debated issues.',
    '## What the three terms mean');
}

// 02 Grouping the four perspectives
{
  let s = '';
  s += `<ellipse cx="330" cy="330" rx="250" ry="175" fill="${C.teal}" fill-opacity="0.6" stroke="${C.ink}" stroke-width="3"/>`;
  s += `<ellipse cx="570" cy="330" rx="250" ry="175" fill="${C.cream}" fill-opacity="0.7" stroke="${C.ink}" stroke-width="3"/>`;
  s += label(225, 238, 'Explain behaviour', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark }) + label(225, 260, 'by social structure', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += label(675, 238, 'Conflict theories', { size: 18, weight: 700, anchor: 'middle', fill: C.olive }) + label(675, 260, 'serve a powerful group', { size: 16, anchor: 'middle', fill: C.olive });
  const node = (x, y, h, sub, f) => box(x - 95, y - 36, 190, 72, { fill: f || C.panel }) + label(x, y - 6, h, { size: 20, weight: 700, anchor: 'middle' }) + label(x, y + 20, sub, { size: 15, anchor: 'middle', fill: C.muted });
  s += node(210, 330, 'Functionalism', 'value consensus');
  s += node(450, 330, 'Marxism', 'class conflict', C.mustard);
  s += node(690, 330, 'Feminism', 'patriarchy');
  s += box(190, 530, 520, 92, { fill: C.panel, edge: C.ink, dash: '8 6' }) + label(450, 566, 'Interactionism', { size: 20, weight: 700, anchor: 'middle' }) + label(450, 594, 'starts from small-scale interaction: meanings, labels', { size: 16, anchor: 'middle', fill: C.muted });
  const n = note(650, 'Compare within a perspective too', 'Willis and Bowles and Gintis are both Marxists, but Willis rejects a direct link between the economy and schooling.');
  add('02-grouping-perspectives',
    svg(900, Math.round(650 + n.h + 24), 'How the perspectives relate', s + n.svg),
    'Two overlapping ovals. Functionalism and Marxism both explain behaviour by social structure; Marxism and feminism are both conflict theories that see institutions serving a powerful group, so Marxism sits in the overlap. Interactionism stands apart, starting from small-scale interaction.',
    'Find the similarity first: Marxism shares structure with functionalism and conflict with feminism.',
    '## Comparing and contrasting theories in context');
}

// 03 Same question, different answers: who benefits from the family?
{
  let s = '';
  s += `<circle cx="450" cy="300" r="96" fill="${C.ink}"/>` + label(450, 292, 'Who benefits', { size: 20, weight: 700, anchor: 'middle', fill: '#ffffff' }) + label(450, 318, 'from the family?', { size: 20, weight: 700, anchor: 'middle', fill: '#ffffff' });
  const cards = [
    [30, 120, 'Functionalist: Parsons', 'Members and society: primary socialisation and stabilisation of adult personalities', C.teal],
    [570, 120, 'Marxist: Zaretsky', 'Capitalism: unpaid domestic labour reproduces workers; the family is a unit of consumption', C.tealLight],
    [300, 430, 'Feminist: Delphy and Leonard', 'Men: the family is an economic system in which men appropriate women’s work', C.cream],
  ];
  cards.forEach(([x, y, h, b, f]) => {
    const w = 300, hp = headPanel(x, y, w, 170, h, { fill: f, size: 18 });
    s += hp.svg + para(x + 16, y + hp.hh + 30, w - 32, b, { size: 17 }).svg;
  });
  s += arrow(355, 260, 334, 245, { w: 3 }) + arrow(545, 260, 566, 245, { w: 3 }) + arrow(450, 400, 450, 424, { w: 3 });
  const n = note(624, 'Judge', 'A dual-earner couple where the woman still does most housework fits Delphy and Leonard better; yet Zaretsky explains why family spending supports the economy, so capitalism and patriarchy may both benefit.');
  add('03-who-benefits-family',
    svg(900, Math.round(624 + n.h + 24), 'Same question, different answers', s + n.svg),
    'One question in the centre, who benefits from the family, with three answers: Parsons says members and society; Zaretsky says capitalism, through unpaid domestic labour and consumption; Delphy and Leonard say men, who appropriate women’s work. A note judges which fits a dual-earner couple.',
    'Put two theories on the same question, then judge which fits the evidence better.',
    '## Comparing and contrasting theories in context');
}

// 04 Five questions for any extract
{
  const steps = [
    ['Who and when?', 'Note the author and date: a sense of time and place.'],
    ['Which perspective?', 'Look for signal words (below).'],
    ['What is the main claim?', 'Put it in one sentence.'],
    ['What is the evidence?', 'Name the method and sample if given.'],
    ['What are the limits?', 'Has society changed since? Who was left out? What would rivals say?'],
  ];
  let s = '', y = 108;
  steps.forEach(([h, b], i) => {
    s += box(30, y, 840, 74, { fill: C.panel, edge: C.panelEdge }) + badge(66, y + 37, 20, String(i + 1), i === 1 ? C.mustard : C.cream);
    s += label(104, y + 31, h, { size: 19, weight: 700 }) + label(104, y + 57, b, { size: 17, fill: C.muted });
    y += 84;
  });
  y += 30;
  s += label(450, y, 'Signal words', { size: 20, weight: 700, anchor: 'middle' });
  const sig = [
    ['Functionalist', ['value consensus', 'functions'], C.teal],
    ['Marxist', ['capitalism', 'ruling class'], C.tealLight],
    ['Feminist', ['patriarchy', 'men benefit'], C.cream],
    ['Interactionist', ['label', 'meanings'], '#e6e0cf'],
  ];
  y += 18;
  sig.forEach(([p, w, f], i) => {
    const x = 30 + i * 214;
    s += box(x, y, 198, 140, { fill: C.panel, edge: C.panelEdge }) + `<rect x="${x + 1.5}" y="${y + 1.5}" width="195" height="44" rx="11" fill="${f}"/>` + label(x + 99, y + 31, p, { size: 18, weight: 700, anchor: 'middle' });
    w.forEach((ww, j) => { s += chip(x + 14, y + 60 + j * 40, `“${ww}”`, { w: 170, fill: '#ffffff', size: 16 }).svg; });
  });
  const n = note(y + 160, 'Limits, as Appendix B models them', ['Oakley’s paper predates civil partnerships and same-sex marriage', 'Halsey’s sample excluded females', 'Manual work was relatively easy to obtain in the 1970s (Willis)']);
  add('04-reading-extracts',
    svg(900, Math.round(y + 160 + n.h + 24), 'Five questions for any extract', s + n.svg),
    'Five numbered questions: who and when, which perspective, the main claim, the evidence and the limits. Below, signal words: value consensus and functions for functionalists, capitalism and ruling class for Marxists, patriarchy and men benefit for feminists, label and meanings for interactionists.',
    'Ask five questions of every extract; signal words reveal the perspective.',
    '## Reading and responding to extracts');
}

// 05 What official statistics miss
{
  const topics = [
    ['Divorce', 'Legal divorces', ['Separations without divorce', 'Empty shell marriages']],
    ['Crime', 'Recorded crime', ['The dark figure: unreported or unrecorded crime', 'Measured by victim surveys and self-report studies']],
    ['Poverty', 'Depends on the definition', ['State standard: just over 6%', 'Relative income: a little over 9%', 'Relative deprivation: more than 22%']],
  ];
  let s = '';
  const cw = 268, y0 = 108;
  topics.forEach(([h, counted, missed], i) => {
    const x = 30 + i * (cw + 18);
    s += headPanel(x, y0, cw, 420, h, { fill: C.teal, size: 22 }).svg;
    s += label(x + 18, y0 + 86, 'COUNTED', { size: 15, weight: 700, fill: C.tealDark });
    s += box(x + 16, y0 + 96, cw - 32, 54, { fill: C.tealLight, sw: 2 }) + vcenter(x + cw / 2, y0 + 96, 54, cw - 50, counted, { size: 17, weight: 700, anchor: 'middle' });
    s += label(x + 18, y0 + 182, i === 2 ? 'ONE SOCIETY, 1968–69' : 'MISSED', { size: 15, weight: 700, fill: C.rust });
    s += box(x + 16, y0 + 192, cw - 32, 210, { fill: C.panel, edge: C.rust, dash: '8 6', sw: 2 });
    s += bullets(x + 32, y0 + 226, cw - 64, missed, { size: 17, dot: C.rust }).svg;
  });
  const n = note(y0 + 440, 'Perspectives read the figures differently', ['**Becker:** crime figures result from labelling decisions', '**Marxists:** over-represent working-class crime, under-represent white collar crime', '**Feminists:** crimes inside the home may stay hidden']);
  add('05-official-statistics-limits',
    svg(900, Math.round(y0 + 440 + n.h + 24), 'What official statistics miss', s + n.svg),
    'Three columns. Divorce statistics count legal divorces but miss separations and empty shell marriages. Crime statistics count recorded crime but miss the dark figure. Poverty figures depend on the definition: just over 6%, a little over 9% or more than 22% for the same society in 1968–69.',
    'Official statistics are useful, but each topic has gaps the numbers do not show.',
    '## Methods and methodological issues in each topic');
}

// 06 Named studies: quantitative to qualitative
{
  let s = '';
  s += `<defs><linearGradient id="spec2" x1="0" x2="1"><stop offset="0" stop-color="${C.teal}"/><stop offset="1" stop-color="${C.cream}"/></linearGradient></defs>`;
  s += `<rect x="30" y="108" width="840" height="50" rx="25" fill="url(#spec2)" stroke="${C.ink}" stroke-width="2.5"/>` + label(56, 140, 'QUANTITATIVE: patterns, reliability', { size: 18, weight: 700 }) + label(844, 140, 'QUALITATIVE: meanings, validity', { size: 18, weight: 700, anchor: 'end' });
  const studies = [
    ['Halsey, Heath and Ridge', 'Over 8,000 males', 'Large-scale survey', 'Excluded females', 0],
    ['Townsend', '2,000+ households, 6,000+ individuals', 'Questionnaires, deprivation index', 'Index may reflect choice', 0],
    ['Willmott and Young', 'Nearly 2,000 people', 'Large-scale social survey', 'Little real “symmetry”, say feminists', 0],
    ['Ball', 'One school, three years', 'Participant observation', 'Hard to generalise', 1],
    ['Willis', 'One Midlands school', 'Observation, discussions, interviews, diaries', 'Small group of boys', 1],
    ['Carlen', '39 women', 'Unstructured interviews', 'Small sample', 1],
  ];
  const cw = 412, ch = 146;
  studies.forEach(([n, samp, m, lim, q], i) => {
    const col = q, row = i % 3, x = 30 + col * (cw + 16), y = 178 + row * (ch + 12);
    s += box(x, y, cw, ch, { fill: C.panel, edge: C.panelEdge });
    s += `<rect x="${x + 1.5}" y="${y + 1.5}" width="10" height="${ch - 3}" rx="5" fill="${q ? C.mustard : C.tealDark}"/>`;
    s += label(x + 28, y + 32, n, { size: 19, weight: 700 }) + label(x + 28, y + 56, samp, { size: 15, weight: 700, fill: q ? C.olive : C.tealDark });
    s += para(x + 28, y + 82, cw - 50, m, { size: 16 }).svg;
    s += label(x + 28, y + ch - 18, '− ' + lim, { size: 16, fill: C.rust, weight: 600 });
  });
  const y = 178 + 3 * (ch + 12) + 6;
  const n = note(y, 'Mixed methods vs triangulation', ['**Mixed methods:** qualitative and quantitative in one study, e.g. statistics to find high-exclusion areas, then interviews with pupils there', '**Triangulation:** more than one method or source to check findings agree']);
  add('06-named-studies-methods',
    svg(900, Math.round(y + n.h + 24), 'The named studies and their methods', s + n.svg),
    'Six named studies sorted by approach. Quantitative: Halsey, Heath and Ridge (over 8,000 males), Townsend (over 2,000 households) and Willmott and Young (nearly 2,000 people). Qualitative: Ball (one school), Willis (one Midlands school) and Carlen (39 women). Each shows its method and one limitation.',
    'Large samples give patterns; small, deep studies give meanings.',
    '## Methods and methodological issues in each topic');
}

// 07 Everyday understanding vs sociological challenge
{
  const rows = [
    ['“Crime statistics show who the criminals are.”', 'Figures reflect reporting, recording and labelling decisions', 'Becker; the dark figure'],
    ['“Women commit less crime because they are naturally law-abiding.”', 'Women are more closely controlled at home, in public and at work', 'Heidensohn'],
    ['“School is fair, so the cleverest succeed.”', 'Class background shapes staying on and university entry', 'Halsey; Bowles and Gintis'],
    ['“The family is a private refuge from the outside world.”', 'A private life separate from the economy is an illusion', 'Zaretsky'],
  ];
  let s = label(225, 128, 'Everyday understanding', { size: 19, weight: 700, anchor: 'middle', fill: C.muted }) + label(670, 128, 'Sociological challenge', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  let y = 146;
  rows.forEach(([a, b, ev]) => {
    const h = 104;
    s += box(30, y, 390, h, { fill: '#ffffff', edge: C.panelEdge }) + vcenter(225, y, h, 350, a, { size: 17, anchor: 'middle', italic: true });
    s += arrow(426, y + h / 2, 466, y + h / 2, { w: 4 });
    s += box(472, y, 398, h, { fill: C.tealLight, edge: C.ink, sw: 2 }) + para(490, y + 34, 362, b, { size: 17 }).svg + label(490, y + h - 16, ev, { size: 15, weight: 700, fill: C.tealDark });
    y += h + 12;
  });
  const n = note(y + 6, 'Poverty: present both views fairly', ['**Murray** (New Right): values and benefit dependency create an underclass; criticised for a poor evidence base', '**Townsend:** lack of resources to join normal life; criticised for an index that may confuse choice with deprivation']);
  add('07-challenging-everyday-views',
    svg(900, Math.round(y + 6 + n.h + 24), 'Challenging everyday understandings', s + n.svg),
    'Four everyday beliefs, each with a sociological challenge: crime statistics reflect labelling (Becker); women are controlled more closely (Heidensohn); class shapes school success (Halsey, Bowles and Gintis); the private family is an illusion (Zaretsky). Below, Murray and Townsend on poverty.',
    'Everyday views blame nature or choice; sociology looks for the structures behind them.',
    '## Contemporary social issues: challenging everyday understandings');
}

// 08 Connections between topic areas
{
  const concepts = [
    ['Labelling', 'Ball (school) and Becker (crime): a self-fulfilling prophecy', C.teal],
    ['Social control', 'Heidensohn: control in the home and women’s lower crime', C.tealLight],
    ['Class', 'Halsey’s odds, Albert Cohen’s status frustration, Carlen’s class deal', C.cream],
    ['Patriarchy', 'Delphy and Leonard on family labour; Walby’s six structures', '#e6e0cf'],
  ];
  const topicsB = ['Families', 'Education', 'Crime and deviance', 'Stratification'];
  const links = [[1, 2], [0, 2], [1, 2, 3], [0, 3]];
  let s = '';
  const hh = 54, gx = [300, 442, 584, 726], gw = 136;
  topicsB.forEach((tp, i) => { s += box(gx[i], 108, gw, hh, { fill: C.ink, edge: C.ink, r: 10 }) + vcenter(gx[i] + gw / 2, 108, hh, gw - 10, tp, { size: 16, weight: 700, anchor: 'middle', fill: '#ffffff' }); });
  let y = 108 + hh + 14;
  concepts.forEach(([h, b, f], i) => {
    const rh = 112;
    s += box(30, y, 840, rh, { fill: C.panel, edge: C.panelEdge });
    s += `<rect x="31.5" y="${y + 1.5}" width="256" height="${rh - 3}" rx="12" fill="${f}"/>`;
    s += label(48, y + 34, h, { size: 20, weight: 700 }) + para(48, y + 58, 228, b, { size: 15 }).svg;
    topicsB.forEach((_, t2) => { const on = links[i].includes(t2), cx = gx[t2] + gw / 2; s += on ? `<circle cx="${cx}" cy="${y + rh / 2}" r="20" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + path(`M${cx - 9},${y + rh / 2} l6,7 l12,-14`, { w: 3.5 }) : `<circle cx="${cx}" cy="${y + rh / 2}" r="8" fill="${C.panelEdge}"/>`; });
    y += rh + 10;
  });
  const n = note(y + 6, null, 'A connection earns credit when it strengthens an argument: “Becker’s master status explains why Ball’s low-band pupils might see themselves as failures.”');
  add('08-connecting-topics',
    svg(900, Math.round(y + 6 + n.h + 24), 'Connecting the topic areas', s + n.svg),
    'Four concepts that run across the course: labelling links education and crime (Ball, Becker); social control links families and crime (Heidensohn); class links education, crime and stratification (Halsey, Cohen, Carlen); patriarchy links families and stratification (Delphy and Leonard, Walby).',
    'The same concepts appear in several topics; linking them strengthens an argument.',
    '## Drawing connections between topic areas');
}
