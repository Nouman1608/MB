import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-sociology-8192-the-social-construction-of-crime-and-deviance';
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

// 01 Over time: changing laws
{
  let s = '';
  const y = 330;
  s += arrow(40, y, 868, y, { w: 4 });
  const X = (yr) => 80 + ((yr - 1960) / (2012 - 1960)) * 760;
  const ev = [
    [1967, 'Breathalyser and fixed drink-drive limit', 'Criminalised or tightened', C.rust, 'up', 0],
    [1967, 'Sex between men in private partly decriminalised', 'Decriminalised', C.tealDark, 'down', 0],
    [1983, 'Not wearing a front seat belt becomes an offence', 'Criminalised or tightened', C.rust, 'up', 1],
    [1991, 'House of Lords: a husband can be guilty of raping his wife', 'Redefined', C.olive, 'down', 1],
    [2007, 'Smoking banned in enclosed public places', 'Criminalised or tightened', C.rust, 'up', 2],
  ];
  const cw = 250;
  ev.forEach(([yr, txt, kind, col, dir, slot]) => {
    const x = X(yr);
    s += `<circle cx="${x}" cy="${y}" r="9" fill="${col}" stroke="${C.ink}" stroke-width="2"/>`;
    const cx = dir === 'up' ? [170, 450, 730][slot] : [260, 620][slot];
    const by = dir === 'up' ? 112 : y + 52;
    s += `<line x1="${x}" y1="${dir === 'up' ? y - 9 : y + 9}" x2="${cx}" y2="${dir === 'up' ? by + 150 : by}" stroke="${C.muted}" stroke-width="2"/>`;
    s += box(cx - cw / 2, by, cw, 150, { fill: C.panel, edge: col, sw: 2.5 }) + label(cx - cw / 2 + 16, by + 30, String(yr), { size: 19, weight: 700, fill: col }) + label(cx - cw / 2 + 16, by + 54, kind, { size: 15, weight: 700, fill: col }) + para(cx - cw / 2 + 16, by + 84, cw - 32, txt, { size: 16 }).svg;
  });
  ['1960', '1980', '2000'].forEach((d) => { s += label(X(+d), y + 30, d, { size: 15, anchor: 'middle', fill: C.muted }); });
  const n = note(y + 222, 'The point', 'Each change shows that a new definition, not a new kind of act, created or removed the crime. Definitions also vary between societies (drinking ages, weapons, drugs) and by situation (killing in peace or war).');
  add('01-changing-laws',
    svg(900, Math.round(y + 222 + n.h + 24), 'Crime changes over time', s + n.svg, 'Examples from England and Wales'),
    'A timeline of legal change in England and Wales: 1967, the breathalyser and drink-drive limit, and the partial decriminalisation of sex between men in private; 1983, seat belts; 1991, the ruling that a husband can be guilty of raping his wife; 2007, the smoking ban in enclosed public places.',
    'New definitions, not new acts, create or remove crimes.',
    '## Three ways definitions vary');
}

// 02 Five explanations
{
  const rows = [
    ['Anomie', 'Usual rules break down in the pursuit of success', 'Merton (functionalist)', C.teal],
    ['Structural theories', 'Crime comes from how society is organised: unequal opportunity, class inequality', 'Merton; Marxists', C.teal],
    ['Subcultural theories', 'Groups with values that differ from the mainstream', 'Albert Cohen (3.5.3)', C.cream],
    ['Labelling', 'An act becomes deviant when others label it so', 'Becker', C.tealLight],
    ['Interactionist theory', 'Deviance created through interaction between offenders and those who react', 'Becker', C.tealLight],
  ];
  let s = '';
  s += label(30, 112, 'Explanation', { size: 16, weight: 700, fill: C.muted }) + label(272, 112, 'Core idea', { size: 16, weight: 700, fill: C.muted }) + label(870, 112, 'Linked to', { size: 16, weight: 700, fill: C.muted, anchor: 'end' });
  rows.forEach(([h, b, w, f], i) => {
    const y = 126 + i * 84;
    s += box(30, y, 226, 70, { fill: f, sw: 2.5 }) + vcenter(143, y, 70, 200, h, { size: 18, weight: 700, anchor: 'middle' });
    s += box(268, y, 410, 70, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + vcenter(284, y, 70, 380, b, { size: 16 });
    s += arrow(682, y + 35, 702, y + 35, { w: 3 });
    s += box(706, y, 164, 70, { fill: C.panel, sw: 2 }) + vcenter(788, y, 70, 148, w, { size: 16, weight: 700, anchor: 'middle' });
  });
  const n = note(126 + 5 * 84 + 6, 'Common mistakes', ['Merton is a functionalist who assumes value consensus, not a Marxist', 'Do not confuse Becker’s labelling with Albert Cohen’s subcultures']);
  add('02-five-explanations',
    svg(900, Math.round(126 + 5 * 84 + 6 + n.h + 24), 'Five explanations, and who owns them', s + n.svg),
    'Five explanations named in the specification: anomie and structural theories linked to Merton (and Marxists for structure); subcultural theories linked to Albert Cohen; labelling and interactionist theory linked to Becker. Below, Merton is a functionalist, and Becker should not be confused with Cohen.',
    'Learn which sociologist or perspective each explanation belongs to.',
    '## Explanations named in the specification');
}

// 03 Merton
{
  let s = '';
  s += box(30, 108, 840, 84, { fill: C.tealLight, sw: 2 }) + para(450, 140, 800, 'Value consensus: everyone shares the **goal of success**. But class position means unequal access to **legitimate means**.', { size: 17, anchor: 'middle' }).svg;
  s += arrow(450, 196, 450, 222, { w: 3.5 });
  s += box(130, 226, 640, 70, { fill: C.mustard, sw: 2.5 }) + label(450, 256, 'American society stressed success more than the means', { size: 18, weight: 700, anchor: 'middle' }) + label(450, 282, 'rules abandoned: ANOMIE, “anything goes”', { size: 16, anchor: 'middle' });
  const head = ['Response', 'Goals', 'Means', 'Most likely among'];
  const xs = [30, 236, 336, 436];
  head.forEach((h, i) => { s += label(xs[i] + (i === 1 || i === 2 ? 44 : 0), 330, h, { size: 16, weight: 700, fill: C.muted, anchor: i === 1 || i === 2 ? 'middle' : 'start' }); });
  const mark = (x, y, k) => k === 'y' ? `<circle cx="${x}" cy="${y}" r="15" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + path(`M${x - 7},${y} l5,6 l9,-11`, { stroke: C.tealDark, w: 3 }) : k === 'n' ? `<circle cx="${x}" cy="${y}" r="15" fill="${C.cream}" stroke="${C.rust}" stroke-width="2.5"/>` + path(`M${x - 6},${y - 6} l12,12 M${x + 6},${y - 6} l-12,12`, { stroke: C.rust, w: 3 }) : `<circle cx="${x}" cy="${y}" r="15" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + label(x, y + 6, '↻', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  const rows = [
    ['Conformity', 'y', 'y', 'Success by accepted means: qualifications, well-paid work', C.teal],
    ['Innovation', 'y', 'n', 'Lower levels of society, less likely to gain qualifications: usually crime', C.mustard],
    ['Ritualism', 'n', 'y', 'Middle class in low-status “respectable” jobs; enthusiasm for petty bureaucracy', C.tealLight],
    ['Retreatism', 'n', 'n', 'Any class: “drop out”, e.g. vagrants and drug addicts', C.tealLight],
    ['Rebellion', 'r', 'r', 'A “rising” class wanting a new society; may attempt revolution', C.tealLight],
  ];
  rows.forEach(([h, g, m, b, f], i) => {
    const y = 344 + i * 74;
    s += box(30, y, 196, 62, { fill: f, sw: 2.5 }) + label(128, y + 38, h, { size: 18, weight: 700, anchor: 'middle' });
    s += mark(280, y + 31, g) + mark(380, y + 31, m);
    s += box(436, y, 434, 62, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + vcenter(450, y, 62, 406, b, { size: 15.5 });
  });
  const y = 344 + 5 * 74 + 4;
  s += label(30, y + 20, '✓ accepts   ✗ rejects   ↻ rejects and replaces', { size: 15.5, fill: C.muted });
  const n = note(y + 36, 'Criticisms', ['Ignores power: who makes laws and who benefits', 'Assumes a value consensus exists', 'Deterministic: why do only some people facing anomie turn to crime?', 'Exaggerates working-class crime; underestimates white collar crime']);
  add('03-merton',
    svg(900, Math.round(y + 36 + n.h + 24), 'Merton: strain, anomie and five responses', s + n.svg),
    'Everyone shares the goal of success but class limits access to legitimate means; American society stressed success over means, producing anomie. A table shows five responses: conformity accepts both; innovation accepts goals but not means and is most likely lower down society; ritualism rejects goals but keeps the rules; retreatism rejects both; rebellion replaces both. Below, criticisms.',
    'Innovation, accepting the goal but rejecting the means, is Merton’s main explanation of crime.',
    '## Merton on the causes of crime');
}

// 04 Moral entrepreneurs
{
  const items = [
    { head: 'Moral entrepreneurs', body: 'Individuals and groups campaign for a new rule', fill: C.cream },
    { head: 'A rule is created', body: 'Someone has to make it before anyone can break it', fill: C.tealLight },
    { head: 'Rule-breakers labelled', body: 'Agents of social control apply the label', fill: C.teal },
  ];
  const c = hchain(118, items, { size: 16.5, ag: 50 });
  const r = cardRow(118 + c.h + 30, [
    { head: 'Criticisms of labelling', fill: C.panel, body: ['Does not explain the **first** deviant act', 'Can seem to treat offenders as victims of labels', 'Some people **resist** labels rather than accept them'] },
  ], { size: 16.5, headSize: 19 });
  add('04-moral-entrepreneurs',
    svg(900, Math.round(118 + c.h + 30 + r.h + 24), 'Becker: someone has to make the rule', c.svg + r.svg),
    'A chain: moral entrepreneurs campaign for a new rule; the rule is created; rule-breakers are then labelled by agents of social control. Below, criticisms of labelling: it does not explain the first act, may treat offenders as victims, and ignores people who resist labels.',
    'Deviance needs a rule-maker before it needs a rule-breaker.',
    '## Becker on the causes of crime');
}

// 05 Four perspectives
{
  const f = cardsFig('Who defines crime, and why?', {
    cards: [
      { head: 'Functionalist', fill: C.teal, body: ['Rules reflect a shared value consensus', '**Durkheim:** some crime is normal and useful: punishing it marks the boundaries', '**Merton:** crime from strain'] },
      { head: 'Marxist', fill: C.tealLight, body: ['Laws serve the ruling class, e.g. protecting private property', 'Enforced more harshly against the working class', 'Corporate crime less often defined or prosecuted as crime'] },
      { head: 'Feminist', fill: C.cream, body: ['Definitions of crime have reflected men’s power', 'The 1991 ruling on rape in marriage shows how long some harms to women were not crimes'] },
      { head: 'Interactionist', fill: C.mustard, body: ['Deviance is created by the **reaction** to an act, not the act itself (Becker)'] },
    ],
    ncol: 2, size: 16, headSize: 20,
  });
  add('05-four-perspectives', f,
    'Four cards. Functionalists: rules reflect consensus, Durkheim saw some crime as useful, Merton explains crime by strain. Marxists: laws serve the ruling class and corporate crime is rarely prosecuted. Feminists: definitions reflected men’s power, as the 1991 marital rape ruling shows. Interactionists: deviance is created by the reaction to an act.',
    'Each perspective answers who has the power to define crime differently.',
    '## The four perspectives compared');
}
