import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-sociology-8192-education';
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

// 01 Three functions of education and three perspectives
{
  const r = cardRow(108, [
    { head: 'Serving the economy', fill: C.teal, body: 'Schools teach the skills and qualifications employers need, and sift people into jobs.' },
    { head: 'Social mobility', fill: C.tealLight, body: 'Qualifications let people move up (or down) the class structure, wherever they started.' },
    { head: 'Social cohesion', fill: C.cream, body: 'Schools pass on shared norms and values that bind people into one society.' },
  ], { size: 17, headSize: 20 });
  let s = r.svg;
  const y = 108 + r.h + 40;
  s += label(450, y, 'Who does education really serve?', { size: 21, weight: 700, anchor: 'middle' });
  const rows = [
    ['Functionalist', 'Society as a whole: shared values, meritocracy and role allocation (Durkheim, Parsons)', C.teal],
    ['Marxist', 'Capitalism, not society as a whole', C.tealLight],
    ['Feminist', 'Has reproduced gender inequality through a gendered curriculum, subject choices and the hidden curriculum', C.cream],
  ];
  let yy = y + 20;
  rows.forEach(([h, b, f]) => {
    const p = para(0, 0, 610, b, { size: 17 }), rh = Math.max(58, p.h + 28);
    s += box(30, yy, 190, rh, { fill: f, sw: 2 }) + label(125, yy + rh / 2 + 7, h, { size: 19, weight: 700, anchor: 'middle' });
    s += box(232, yy, 638, rh, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + vcenter(250, yy, rh, 610, b, { size: 17 });
    yy += rh + 10;
  });
  add('01-functions-of-education',
    svg(900, yy + 16, 'What is education for?', s),
    'Three cards show the functions in the specification: serving the economy, facilitating social mobility and fostering social cohesion. Below, functionalists say education serves society as a whole, Marxists say it serves capitalism, and feminists say it has reproduced gender inequality.',
    'The specification lists three functions; the perspectives disagree about whom they really serve.',
    '## 3.4.1 Roles and functions of education');
}

// 02 Parsons: school as a bridge between family and society
{
  let s = '';
  const g = 330; // ground level
  s += `<path d="M30,${g} L230,${g} L230,520 L30,520 Z" fill="#d8e3c6" stroke="${C.ink}" stroke-width="3"/>`;
  s += `<path d="M670,${g} L870,${g} L870,520 L670,520 Z" fill="#d8e3c6" stroke="${C.ink}" stroke-width="3"/>`;
  s += `<rect x="230" y="${g + 120}" width="440" height="70" fill="${C.teal}"/>`;
  s += `<path d="M230,${g} L670,${g} L670,${g + 22} L640,${g + 22} Q450,${g + 40} 260,${g + 22} L230,${g + 22} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  s += `<path d="M262,${g + 22} Q450,${g + 160} 638,${g + 22}" fill="none" stroke="${C.ink}" stroke-width="3"/>`;
  // school building on bridge
  s += `<rect x="375" y="${g - 92}" width="150" height="92" fill="#ffffff" stroke="${C.ink}" stroke-width="3"/>` + `<path d="M365,${g - 92} L450,${g - 140} L535,${g - 92} Z" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>` + `<rect x="436" y="${g - 44}" width="28" height="44" fill="${C.tealDark}"/>` + label(450, g - 58, 'SCHOOL', { size: 17, weight: 700, anchor: 'middle' });
  // houses / family and city / society
  s += `<rect x="80" y="${g - 60}" width="70" height="60" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/><path d="M72,${g - 60} L115,${g - 96} L158,${g - 60} Z" fill="${C.rust}" stroke="${C.ink}" stroke-width="2.5"/>`;
  [[700, 70], [745, 110], [800, 85]].forEach(([x, h]) => { s += `<rect x="${x}" y="${g - h}" width="44" height="${h}" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/>`; });
  s += label(130, 150, 'FAMILY', { size: 22, weight: 700, anchor: 'middle' }) + label(770, 150, 'SOCIETY', { size: 22, weight: 700, anchor: 'middle' });
  s += label(450, 150, 'a bridge between the two', { size: 18, weight: 600, anchor: 'middle', fill: C.tealDark, italic: true });
  s += arrow(310, 186, 590, 186, { w: 4, color: C.tealDark, marker: 'ahT' });
  const cy = 540;
  const r = cardRow(cy, [
    { head: 'In the family', fill: C.cream, sub: 'Particularistic standards', body: 'Rules that apply only to you as a particular son or daughter' },
    { head: 'In wider society', fill: C.teal, sub: 'Universalistic standards', body: 'The same rules for everyone, regardless of kinship' },
  ], { size: 17, headSize: 20, gap: 120 });
  s += r.svg + arrow(392, cy + r.h / 2, 506, cy + r.h / 2, { w: 4, color: C.tealDark, marker: 'ahT' }) + label(450, cy + r.h / 2 - 12, 'school', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  const n = note(cy + r.h + 18, 'What school does', ['Takes over as the main agency of socialisation', 'Runs on meritocratic principles: status is **achieved** through merit, not ascribed at birth', 'Socialises pupils into a value consensus of achievement and equality of opportunity', 'Selects individuals for their future roles in society']);
  s += n.svg;
  add('02-parsons-bridge',
    svg(900, Math.round(cy + r.h + 18 + n.h + 24), 'Parsons: school as a bridge', s),
    'A bridge labelled school joins the family on one side to wider society on the other. In the family children are judged by particularistic standards; in society everyone is judged by universalistic standards. School is meritocratic, builds a value consensus and selects people for future roles.',
    'School moves children from particularistic family rules to the universalistic rules of society.',
    '## 3.4.1 Roles and functions of education');
}

// 03 Correspondence principle
{
  const pairs = [
    ['Pupils obey teachers and the head', 'Workers obey supervisors and managers'],
    ['Pupils work for grades, not interest in learning', 'Workers work for wages, not satisfaction'],
    ['Subjects split into separate lessons', 'Work split into narrow tasks'],
    ['Pupils compete and are ranked', 'Workers compete for promotion'],
  ];
  let s = box(30, 108, 360, 54, { fill: C.teal }) + label(210, 143, 'At school', { size: 22, weight: 700, anchor: 'middle' });
  s += box(510, 108, 360, 54, { fill: C.cream }) + label(690, 143, 'At work', { size: 22, weight: 700, anchor: 'middle' });
  pairs.forEach(([a, b], i) => {
    const y = 178 + i * 92;
    s += box(30, y, 360, 76, { fill: C.panel, edge: C.panelEdge }) + vcenter(48, y, 76, 324, a, { size: 18 });
    s += box(510, y, 360, 76, { fill: C.panel, edge: C.panelEdge }) + vcenter(528, y, 76, 324, b, { size: 18 });
    s += `<line x1="396" y1="${y + 38}" x2="504" y2="${y + 38}" stroke="${C.tealDark}" stroke-width="4" marker-start="url(#ahT)" marker-end="url(#ahT)"/>`;
  });
  s += label(450, 204, 'corresponds to', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
  const y = 178 + 4 * 92 + 8;
  s += arrow(450, y, 450, y + 34);
  s += box(30, y + 40, 840, 112, { fill: C.mustard }) + para(450, y + 74, 800, 'Result: a **hardworking, docile, obedient and highly motivated** workforce,', { size: 19, anchor: 'middle' }).svg + label(450, y + 102, 'too divided to challenge the authority of management', { size: 19, anchor: 'middle' }) + label(450, y + 136, 'the reproduction of labour power', { size: 17, anchor: 'middle', weight: 700, fill: C.olive });
  const n = note(y + 170, 'Alternative views', ['**Willis:** the lads resisted school, yet still ended up in manual work', '**Functionalists:** preparing pupils for work is fair role allocation', '**Feminists:** school also corresponds to patriarchy', '**Interactionists:** pupils are not passive; meanings are negotiated']);
  add('03-correspondence-principle',
    svg(900, Math.round(y + 170 + n.h + 24), 'Bowles and Gintis: the correspondence principle', s + n.svg),
    'Four matched pairs link school to work: obeying teachers and obeying managers; working for grades and working for wages; separate lessons and narrow tasks; competing for rank and competing for promotion. The result is a docile, obedient workforce too divided to challenge management. Below, alternative views from Willis, functionalists, feminists and interactionists.',
    'Social relationships at school mirror those at work, so school reproduces labour power.',
    '## 3.4.2 The relationship between education and capitalism');
}

// 04 Halsey, Heath and Ridge: chances of a service-class boy
{
  let s = label(450, 92, 'Chances of a service-class boy compared with a working-class boy', { size: 19, anchor: 'middle', fill: C.muted });
  const x0 = 250, unit = 52, bars = [['At school at 16', 4], ['At school at 17', 8], ['At school at 18', 10], ['Attending university', 11]];
  bars.forEach(([l, v], i) => {
    const y = 140 + i * 74;
    s += label(x0 - 16, y + 34, l, { size: 18, weight: 600, anchor: 'end' });
    s += `<rect x="${x0}" y="${y + 6}" width="${v * unit}" height="44" rx="6" fill="${i === 3 ? C.mustard : C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += label(x0 + v * unit + 12, y + 37, `${v}×`, { size: 22, weight: 700 });
  });
  s += `<line x1="${x0 + unit}" y1="128" x2="${x0 + unit}" y2="${140 + 4 * 74 + 4}" stroke="${C.rust}" stroke-width="3" stroke-dasharray="8 6"/>`;
  s += label(x0 + unit + 8, 140 + 4 * 74 + 26, 'working-class boy = 1×', { size: 16, weight: 700, fill: C.rust });
  const y = 140 + 4 * 74 + 80;
  s += label(450, y, 'Three classes, by father’s occupation', { size: 20, weight: 700, anchor: 'middle' });
  const r = cardRow(y + 18, [
    { head: 'Service class', fill: C.mustard, body: 'Professionals, administrators and managers' },
    { head: 'Intermediate class', fill: C.cream, body: 'Clerical or sales workers, self-employed, lower grade technicians, foremen' },
    { head: 'Working class', fill: C.teal, body: 'Manual workers in industry and agriculture' },
  ], { size: 16, headSize: 19 });
  s += r.svg;
  const n = note(y + 18 + r.h + 16, null, ['Sample: over 8,000 males born 1913–1952 (Origins and Destinations, 1980)', '**Limitation:** no females, which might have changed the findings']);
  add('04-halsey-class-chances',
    svg(900, Math.round(y + 18 + r.h + 16 + n.h + 22), 'Halsey, Heath and Ridge: class and staying on', s + n.svg),
    'Bar chart: compared with a working-class boy, a service-class boy was four times as likely to be at school at 16, eight times at 17, ten times at 18 and eleven times as likely to attend university. Below, the three classes by father’s occupation and the all-male sample of over 8,000.',
    'The longer education goes on, the wider the class gap becomes.',
    '## 3.4.3 Educational achievement');
}

// 05 Class, gender and ethnicity: explanations
{
  const r = cardRow(108, [
    { head: 'Class', fill: C.teal, body: ['**Material deprivation:** no money for books, computers, a quiet place to study or a good diet', '**Cultural deprivation:** said to lack helpful attitudes and language (critics: blames the victim)', '**Cultural capital** (Bourdieu): middle-class knowledge and confidence schools reward'] },
    { head: 'Gender', fill: C.cream, body: ['Girls now outperform boys at most levels, including GCSE', 'Impact of feminism on girls’ ambitions', 'Equal opportunities policies', 'Fewer traditional manual jobs for boys', 'Subject choice is still gendered'] },
    { head: 'Ethnicity', fill: C.tealLight, body: ['**Material factors:** some groups more likely to live in poverty', '**Language** for pupils new to English', '**Ethnocentric curriculum** centred on one culture', '**Institutional racism** and teacher labelling'] },
  ], { size: 16, headSize: 21 });
  const n = note(108 + r.h + 18, 'The three factors overlap', 'A good answer asks how much of an “ethnic” gap is really a class gap.');
  add('05-achievement-factors',
    svg(900, Math.round(108 + r.h + 18 + n.h + 24), 'Why achievement differs', r.svg + n.svg),
    'Three columns of explanations. Class: material deprivation, cultural deprivation and cultural capital. Gender: girls now outperform boys because of feminism, equal opportunities policies and fewer manual jobs for boys, though subject choice stays gendered. Ethnicity: material factors, language, an ethnocentric curriculum and institutional racism.',
    'Class, gender and ethnicity each have their own explanations, and they overlap.',
    '## 3.4.3 Educational achievement');
}

// 06 Ball, Bowe and Gewirtz: marketisation
{
  let s = '';
  const y0 = 108;
  s += box(30, y0, 400, 70, { fill: C.teal }) + label(230, y0 + 44, 'Parental choice', { size: 21, weight: 700, anchor: 'middle' });
  s += box(470, y0, 400, 70, { fill: C.teal }) + label(670, y0 + 44, 'League tables', { size: 21, weight: 700, anchor: 'middle' });
  s += arrow(230, y0 + 74, 400, y0 + 118) + arrow(670, y0 + 74, 500, y0 + 118);
  s += box(250, y0 + 124, 400, 74, { fill: C.cream, edge: C.olive }) + label(450, y0 + 156, 'Schools compete', { size: 21, weight: 700, anchor: 'middle' }) + label(450, y0 + 182, 'the marketisation of education', { size: 16, anchor: 'middle', fill: C.olive, weight: 600 });
  s += arrow(450, y0 + 202, 450, y0 + 240);
  const r = cardRow(y0 + 246, [
    { head: 'Streaming and setting', fill: C.tealLight, body: 'Schools feel pressure to reintroduce them' },
    { head: 'Focus on the more able', fill: C.tealLight, body: 'They improve a school’s results' },
    { head: 'Middle-class parents', fill: C.tealLight, body: 'Are better placed to use choice' },
  ], { size: 17, headSize: 19 });
  s += r.svg;
  const y = y0 + 246 + r.h;
  s += arrow(450, y + 4, 450, y + 40);
  s += box(200, y + 46, 500, 64, { fill: C.mustard }) + label(450, y + 86, 'The market can widen class inequality', { size: 20, weight: 700, anchor: 'middle' });
  s += label(450, y + 140, 'Study of fifteen schools in neighbouring LEAs with different class and ethnic profiles (1994)', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  add('06-ball-marketisation',
    svg(900, y + 164, 'Ball, Bowe and Gewirtz: choice and competition', s),
    'Parental choice and league tables make schools compete. Schools reintroduce streaming and setting and focus on the more able, while middle-class parents are better placed to use choice, so the market can widen class inequality.',
    'Competition between schools can help the middle class more than the working class.',
    '## 3.4.3 Educational achievement');
}

// 07 Streaming, setting, mixed ability
{
  const subj = ['Maths', 'English', 'Science'];
  const pupil = (cx, cy, me) => `<circle cx="${cx}" cy="${cy}" r="${me ? 11 : 9}" fill="${me ? C.mustard : C.tealLight}" stroke="${C.ink}" stroke-width="${me ? 3 : 2}"/>`;
  const panelFig = (x, title, def, groupsFor) => {
    const w = 270, y = 108;
    let o = headPanel(x, y, w, 470, title, { fill: C.teal, size: 22 }).svg;
    o += para(x + 16, y + 84, w - 32, def, { size: 16, fill: C.ink }).svg;
    subj.forEach((sb, j) => {
      const cx = x + 20 + j * 80;
      o += label(cx + 35, y + 160, sb, { size: 15, weight: 700, anchor: 'middle', fill: C.muted });
      const gs = groupsFor(j);
      gs.forEach((g, k) => {
        const gy = y + 172 + k * (gs.length === 1 ? 0 : 140), gh = gs.length === 1 ? 280 : 130;
        o += `<rect x="${cx}" y="${gy}" width="70" height="${gh}" rx="8" fill="${k === 0 ? C.panel : '#eef3f2'}" stroke="${C.panelEdge}" stroke-width="2"/>`;
        if (gs.length > 1) o += label(cx + 35, gy + 20, k === 0 ? 'top' : 'lower', { size: 15, anchor: 'middle', fill: C.muted });
        const n = gs.length === 1 ? 10 : 4; const startY = gy + (gs.length === 1 ? 30 : 42);
        for (let p = 0; p < n; p++) { const px = cx + 20 + (p % 2) * 30, py = startY + Math.floor(p / 2) * (gs.length === 1 ? 50 : 38); o += pupil(px, py, g && p === 0); }
      });
    });
    return o;
  };
  let s = '';
  s += panelFig(30, 'Streaming', 'One ability group for **all** subjects', () => [false, true]);
  s += panelFig(315, 'Setting', 'Ability groups **subject by subject**', (j) => (j === 1 ? [false, true] : [true, false]));
  s += panelFig(600, 'Mixed ability', 'All abilities taught **together**', () => [true]);
  s += pupil(300, 616, true) + label(320, 622, 'follow one pupil across three subjects', { size: 17, weight: 600 });
  add('07-streaming-setting-mixed',
    svg(900, 650, 'Streaming, setting and mixed ability', s),
    'Three panels follow one highlighted pupil across maths, English and science. With streaming the pupil is in the lower group for every subject. With setting the pupil is in the top set for maths and science but a lower set for English. With mixed ability everyone is taught together.',
    'Streaming fixes one group for all subjects; setting can differ subject by subject.',
    '## 3.4.4 Processes within schools');
}

// 08 Ball (Beachside) and Willis (Learning to Labour)
{
  const colW = 404, xs = [30, 466], y0 = 108;
  let s = '';
  const H = 770;
  const col = (x, head, sub, steps, fill, ev) => {
    let o = headPanel(x, y0, colW, H, head, { fill, size: 21 }).svg;
    o += para(x + colW / 2, y0 + 82, colW - 36, sub, { size: 16, anchor: 'middle', fill: C.muted, italic: true }).svg;
    let y = y0 + 128;
    steps.forEach((st, i) => {
      const p = para(0, 0, colW - 64, st.t, { size: 17 }), h = p.h + 26;
      o += box(x + 18, y, colW - 36, h, { fill: st.f || C.panel, edge: st.f ? C.ink : C.panelEdge, sw: 2 }) + para(x + 34, y + 13 + 17 * 0.95, colW - 64, st.t, { size: 17 }).svg;
      y += h;
      if (i < steps.length - 1) { o += arrow(x + colW / 2, y + 3, x + colW / 2, y + 27, { w: 3 }); y += 30; }
    });
    const ep = para(0, 0, colW - 64, ev, { size: 16 }), eh = ep.h + 50;
    o += box(x + 18, y0 + H - 18 - eh, colW - 36, eh, { fill: C.cream, edge: C.olive, sw: 2 }) + label(x + 34, y0 + H - 18 - eh + 26, 'Evaluation', { size: 16, weight: 700, fill: C.olive }) + para(x + 34, y0 + H - 18 - eh + 50, colW - 64, ev, { size: 16 }).svg;
    return o;
  };
  s += col(xs[0], 'Ball: Beachside (1981)', 'Participant observer in one comprehensive for three years', [
    { t: 'Pupils banded by ability (a mixed ability cohort was the comparison)' },
    { t: 'Middle-class pupils more likely to be placed in **band 1** than working-class pupils of similar ability' },
    { t: 'Band 1 met **higher teacher expectations**' },
    { t: 'Band 2 steered to easier exams and practical subjects' },
    { t: 'Band 2 most likely to develop **anti-school attitudes**', f: C.mustard },
  ], C.teal, 'Detailed, valid data, but one school may not be representative, and the researcher can change behaviour.');
  s += col(xs[1], 'Willis: the lads (1977)', 'Twelve working-class boys on a Midlands estate', [
    { t: 'Formed a **counter school culture** opposed to school values' },
    { t: 'Felt superior to teachers and to conformist “ear’oles”' },
    { t: 'Aimed to avoid lessons and “have a laff”; neither docile nor obedient' },
    { t: 'Rejecting school suited them to male-dominated manual work', f: C.mustard },
  ], C.cream, 'Small, all-male sample; such jobs are now much harder to find, so the link has weakened.');
  add('08-ball-and-willis',
    svg(900, y0 + H + 24, 'Inside schools: Ball and Willis', s),
    'Two step-by-step columns. Ball at Beachside: middle-class pupils were more often placed in band 1 with higher teacher expectations, while band 2 was steered to easier exams and developed anti-school attitudes. Willis: twelve working-class lads formed a counter school culture, rejected school, and this suited them to manual work.',
    'Ball shows labelling through banding; Willis shows resistance that still led to manual work.',
    '## 3.4.4 Processes within schools');
}
