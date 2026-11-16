import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-sociology-families-and-education';
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

// 01 Paper 1 map
{
  let s = '';
  s += box(30, 108, 840, 96, { fill: C.tealLight }) + label(450, 140, 'The toolkit: revisit throughout', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += box(60, 152, 380, 40, { fill: C.panel, sw: 2 }) + label(250, 178, '3.1 The sociological approach', { size: 17, weight: 700, anchor: 'middle' });
  s += box(460, 152, 380, 40, { fill: C.panel, sw: 2 }) + label(650, 178, '3.2 Structures, processes, issues', { size: 17, weight: 700, anchor: 'middle' });
  s += arrow(250, 210, 250, 244) + arrow(650, 210, 650, 244);
  s += box(30, 250, 410, 150, { fill: C.teal }) + label(235, 290, '3.3 Families', { size: 24, weight: 700, anchor: 'middle' }) + para(235, 322, 360, 'Structure, functions and diversity of family life', { size: 17, anchor: 'middle' }).svg;
  s += box(460, 250, 410, 150, { fill: C.cream }) + label(665, 290, '3.4 Education', { size: 24, weight: 700, anchor: 'middle' }) + para(665, 322, 360, 'Role, structure and impact of the education system', { size: 17, anchor: 'middle' }).svg;
  s += box(30, 424, 840, 84, { fill: C.mustard }) + label(450, 458, '3.7 Research methods', { size: 21, weight: 700, anchor: 'middle' }) + label(450, 486, 'examined across both papers: apply it to families and education too', { size: 17, anchor: 'middle' });
  s += `<line x1="235" y1="404" x2="235" y2="420" stroke="${C.ink}" stroke-width="3"/><line x1="665" y1="404" x2="665" y2="420" stroke="${C.ink}" stroke-width="3"/>`;
  const n = note(528, null, 'Exam questions ask you to use a named perspective to explain a real social pattern, not to describe it neutrally.');
  add('01-paper-1-map',
    svg(900, Math.round(528 + n.h + 24), 'Paper 1 at a glance', s + n.svg),
    'The toolkit of 3.1 the sociological approach and 3.2 structures, processes and issues feeds into the two topics, 3.3 Families and 3.4 Education. Research methods, 3.7, runs underneath both and is examined across both papers.',
    'Learn the toolkit once, then apply it to families, education and methods.',
    '## Syllabus coverage');
}

// 02 Three perspectives on the family
{
  add('02-family-perspectives',
    cardsFig('What is the family for?', {
      ncol: 3, size: 16,
      cards: [
        { head: 'Functionalist', fill: C.teal, sub: 'Murdock, Parsons', body: ['Primary socialisation', 'Stabilisation of adult personalities', 'Reproduction', 'Economic support', 'Parsons: the nuclear family is geographically mobile, so it suits industrial society'] },
        { head: 'Marxist', fill: C.tealLight, sub: 'The family serves capitalism', body: ['Reproduces labour power', 'Passes on private property through inheritance', 'Acts as a unit of consumption'] },
        { head: 'Feminist', fill: C.cream, sub: 'Focus on patriarchy', body: ['**Liberal:** gradual progress towards equality', '**Radical:** the family is the central site of women’s oppression', '**Marxist feminist:** unpaid domestic labour meets capitalism’s needs'] },
      ],
    }),
    'Three cards. Functionalists Murdock and Parsons list primary socialisation, stabilisation of adult personalities, reproduction and economic support. Marxists say the family reproduces labour power, passes on property and is a unit of consumption. Feminists focus on patriarchy, split into liberal, radical and Marxist feminist views.',
    'Set the perspectives against each other: they disagree about whom the family serves.',
    '## Studying the family');
}

// 03 Zaretsky vs Delphy and Leonard
{
  let s = '';
  const side = (x, head, sub, who, items, f) => {
    let o = headPanel(x, 108, 404, 436, head, { fill: f, size: 21 }).svg;
    o += label(x + 202, 196, sub, { size: 16, anchor: 'middle', fill: C.muted, italic: true });
    o += `<circle cx="${x + 202}" cy="268" r="60" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + label(x + 202, 260, 'benefits:', { size: 15, anchor: 'middle' }) + label(x + 202, 284, who, { size: 18, weight: 700, anchor: 'middle' });
    o += bullets(x + 22, 362, 360, items, { size: 16 }).svg;
    return o;
  };
  s += side(30, 'Zaretsky', 'Marxist', 'capitalism', ['The “private life” of the family separate from the economy is an illusion', 'Cushions people from capitalism but cannot meet all their needs', 'Props capitalism up: unpaid domestic labour, unit of consumption', 'Only socialism would end the separation'], C.teal);
  s += side(466, 'Delphy and Leonard', 'Feminist', 'men', ['The family is an economic system', 'Men, rather than capitalists, exploit women’s work', 'Wives with paid jobs still do household tasks not equally shared', 'The family maintains patriarchy'], C.cream);
  s += `<circle cx="450" cy="318" r="24" fill="${C.ink}"/>` + label(450, 325, 'vs', { size: 19, weight: 700, fill: '#ffffff', anchor: 'middle' });
  const n = note(564, 'Other criticisms the specification lists', 'Isolation and unrealistic idealisation; loss of traditional functions; lack of contact with wider kin; the status and role of women; marital breakdown; dysfunctional families.');
  add('03-zaretsky-delphy-leonard',
    svg(900, Math.round(564 + n.h + 24), 'Criticising the family: capitalism or patriarchy?', s + n.svg),
    'Two panels. Zaretsky, a Marxist, says the family benefits capitalism: the idea of a separate private life is an illusion and unpaid domestic labour props the system up. Delphy and Leonard, feminists, say the family benefits men, who exploit women’s work, so it maintains patriarchy.',
    'Zaretsky blames capitalism; Delphy and Leonard blame patriarchy.',
    '## Criticisms of families (3.3.5)');
}

// 04 Divorce: reasons and consequences
{
  let s = '';
  const reasons = ['Changes in the law', 'Changes in social attitudes and values', 'Secularisation', 'Changing status of women'];
  reasons.forEach((r, i) => { const x = 30 + i * 214; s += box(x, 108, 198, 74, { fill: C.tealLight, sw: 2 }) + vcenter(x + 99, 108, 74, 176, r, { size: 17, weight: 700, anchor: 'middle' }); s += arrow(x + 99, 186, 450 + (x + 99 - 450) * 0.25, 226, { w: 3 }); });
  s += box(250, 232, 400, 66, { fill: C.mustard }) + label(450, 273, 'Rise in divorce since 1945', { size: 21, weight: 700, anchor: 'middle' });
  s += box(30, 318, 840, 66, { fill: C.cream, edge: C.olive }) + para(450, 345, 800, '**Divorce Reform Act 1969** (in force 1971): divorce on the ground of irretrievable breakdown, followed by a sharp rise', { size: 17, anchor: 'middle' }).svg;
  s += arrow(450, 300, 450, 314, { w: 3 });
  s += label(450, 422, 'Consequences for…', { size: 20, weight: 700, anchor: 'middle' });
  ['Husbands and wives', 'Children', 'The extended family'].forEach((c, i) => { const x = 30 + i * 286; s += box(x, 440, 268, 56, { fill: C.teal }) + label(x + 134, 475, c, { size: 19, weight: 700, anchor: 'middle' }); });
  s += label(450, 530, 'including the growth in the number of lone-parent families', { size: 17, anchor: 'middle', fill: C.tealDark, weight: 600 });
  const n = note(556, null, 'Then interpret the changes from functionalist, feminist and Marxist perspectives.');
  add('04-divorce-reasons-consequences',
    svg(900, Math.round(556 + n.h + 24), 'Why divorce rose, and what followed', s + n.svg),
    'Four reasons, changes in the law, changes in social attitudes and values, secularisation and the changing status of women, feed into the rise in divorce since 1945. The Divorce Reform Act 1969, in force from 1971, allowed divorce for irretrievable breakdown and was followed by a sharp rise. Consequences fall on husbands and wives, children and the extended family, including more lone-parent families.',
    'Four reasons explain the rise in divorce; its effects reach the whole family.',
    '## Divorce (3.3.6)');
}

// 05 Stratified diffusion and the symmetrical family
{
  let s = '';
  const tiers = [['Higher social classes', C.mustard], ['Lower social classes', C.tealLight]];
  tiers.forEach(([t2, f], i) => { const w = 400 + i * 160, x = 300 - w / 2 + 30; s += box(x, 130 + i * 120, w, 84, { fill: f }) + label(x + w / 2, 179 + i * 120, t2, { size: 20, weight: 700, anchor: 'middle' }); });
  s += arrow(600, 140, 600, 330, { w: 8, color: C.tealDark, marker: 'ahT' });
  s += para(630, 190, 240, '**Stratified diffusion:** changes spread downward from higher to lower classes over time', { size: 17, fill: C.tealDark }).svg;
  s += label(450, 410, 'Young and Willmott: what spreads down?', { size: 20, weight: 700, anchor: 'middle' });
  s += box(30, 430, 380, 110, { fill: C.panel, edge: C.panelEdge }) + label(220, 468, 'Segregated roles', { size: 20, weight: 700, anchor: 'middle' }) + label(220, 498, 'clearly divided', { size: 17, anchor: 'middle', fill: C.muted });
  s += arrow(418, 485, 482, 485, { w: 5 });
  s += box(490, 430, 380, 110, { fill: C.teal }) + label(680, 468, 'Joint roles', { size: 20, weight: 700, anchor: 'middle' }) + label(680, 498, 'symmetrical, home-centred family', { size: 17, anchor: 'middle' });
  const n = note(560, 'But…', ['**Oakley:** women still did most domestic labour, the “dual burden”', '**Duncombe and Marsden:** add emotional work, the “triple shift”']);
  add('05-stratified-diffusion',
    svg(900, Math.round(560 + n.h + 24), 'Young and Willmott: the symmetrical family', s + n.svg),
    'Three stacked class layers with an arrow pointing down: stratified diffusion means changes spread from higher to lower classes. Below, family roles move from segregated, clearly divided roles to joint roles in a symmetrical, home-centred family. A note adds Oakley’s dual burden and Duncombe and Marsden’s triple shift.',
    'Young and Willmott saw symmetry spreading down the classes; Oakley disagreed.',
    '## Family diversity and change');
}

// 06 Dual burden and triple shift
{
  let s = '';
  const base = 520, colW = 180;
  const stacks = [
    ['Symmetrical family', 'Young and Willmott', [['Paid work', C.tealLight, 120], ['Housework (shared)', C.teal, 120]]],
    ['Dual burden', 'Oakley', [['Paid work', C.tealLight, 120], ['Most of the housework', C.cream, 170]]],
    ['Triple shift', 'Duncombe and Marsden', [['Paid work', C.tealLight, 120], ['Housework', C.cream, 170], ['Emotional work', C.mustard, 110]]],
  ];
  stacks.forEach(([h, who, layers], i) => {
    const x = 90 + i * 260;
    let y = base;
    layers.forEach(([l, f, hh]) => { y -= hh; s += `<rect x="${x}" y="${y}" width="${colW}" height="${hh}" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + vcenter(x + colW / 2, y, hh, colW - 16, l, { size: 17, weight: 700, anchor: 'middle' }); });
    s += label(x + colW / 2, base + 34, h, { size: 20, weight: 700, anchor: 'middle' }) + label(x + colW / 2, base + 58, who, { size: 16, anchor: 'middle', fill: C.muted });
  });
  s += `<line x1="50" y1="${base}" x2="850" y2="${base}" stroke="${C.ink}" stroke-width="3"/>`;
  s += label(40, 112, 'A woman’s load, as each study describes it', { size: 17, fill: C.muted, italic: true });
  add('06-dual-burden-triple-shift',
    svg(900, base + 84, 'Dual burden and triple shift', s),
    'Three stacked columns showing a woman’s load. Young and Willmott’s symmetrical family: paid work and shared housework. Oakley’s dual burden: paid work plus most of the housework. Duncombe and Marsden’s triple shift: paid work, housework and emotional work.',
    'Each study adds a layer: from shared roles to the dual burden to the triple shift.',
    '## Family diversity and change');
}

// 07 Internal vs external factors
{
  let s = '';
  // school building in the middle region
  s += box(250, 150, 400, 330, { fill: C.panel, edge: C.ink, sw: 3, r: 6 }) + `<path d="M230,150 L450,96 L670,150 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>` + label(450, 136, 'INSIDE SCHOOL', { size: 18, weight: 700, anchor: 'middle' });
  s += label(450, 186, 'Internal factors', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += bullets(290, 222, 340, ['Labelling', 'Streaming', 'Subcultures', 'Ethnocentric curriculum', 'Teacher expectations'], { size: 18 }).svg;
  s += label(135, 186, 'OUTSIDE SCHOOL', { size: 16, weight: 700, anchor: 'middle', fill: C.olive }) + label(765, 186, 'OUTSIDE SCHOOL', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  s += label(135, 216, 'External factors', { size: 18, weight: 700, anchor: 'middle' }) + label(765, 216, 'External factors', { size: 18, weight: 700, anchor: 'middle' });
  ['Material deprivation', 'Cultural capital'].forEach((f, i) => { s += box(40, 240 + i * 90, 190, 70, { fill: C.cream, edge: C.olive, sw: 2 }) + vcenter(135, 240 + i * 90, 70, 170, f, { size: 17, weight: 600, anchor: 'middle' }); });
  ['Parental attitudes', 'Language codes'].forEach((f, i) => { s += box(670, 240 + i * 90, 190, 70, { fill: C.cream, edge: C.olive, sw: 2 }) + vcenter(765, 240 + i * 90, 70, 170, f, { size: 17, weight: 600, anchor: 'middle' }); });
  // Ball straddling
  s += box(250, 420, 400, 96, { fill: C.mustard }) + label(450, 450, 'Ball sits on both sides', { size: 18, weight: 700, anchor: 'middle' }) + para(450, 476, 370, 'Teacher expectations (internal); parental choice and competition (external)', { size: 15, anchor: 'middle' }).svg;
  const r = cardRow(540, [
    { head: 'Class', fill: C.teal, body: 'Persistently the strongest predictor (Halsey)' },
    { head: 'Gender', fill: C.tealLight, body: 'Girls outperform boys at most levels' },
    { head: 'Ethnicity', fill: C.cream, body: 'Varies widely; institutional racism and material factors' },
  ], { size: 16, headSize: 19 });
  add('07-internal-external-factors',
    svg(900, 540 + r.h + 24, 'Internal and external factors', s + r.svg),
    'A school building holds internal factors: labelling, streaming, subcultures, an ethnocentric curriculum and teacher expectations. Outside it are external factors: material deprivation, cultural capital, parental attitudes and language codes. Ball sits across the wall, with work on both sides. Below, achievement by class, gender and ethnicity.',
    'Sort every explanation: inside the school gates, or outside them?',
    '## Explaining differential achievement');
}
