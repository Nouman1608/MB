import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-sociology-8192-crime-and-deviance';
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

// ---- Shared GCSE pieces ----
const pill = (x, y, w, h, s, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${o.fill || C.tealLight}" stroke="${o.edge || C.ink}" stroke-width="2"/>` + label(x + w / 2, y + h / 2 + (o.size || 17) * 0.36, s, { size: o.size || 17, weight: o.weight ?? 700, anchor: 'middle', fill: o.ink || C.ink });
const box = (x, y, w, h, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.r ?? 12}" fill="${o.fill || C.panel}" stroke="${o.edge || C.ink}" stroke-width="${o.sw || 2.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
const tick = (cx, cy) => `<circle cx="${cx}" cy="${cy}" r="17" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2.5"/>` + path(`M${cx - 8},${cy} l5,6 l11,-12`, { stroke: C.tealDark, w: 3.5 });
const cross = (cx, cy) => `<circle cx="${cx}" cy="${cy}" r="17" fill="#f3d9c9" stroke="${C.rust}" stroke-width="2.5"/>` + path(`M${cx - 7},${cy - 7} l14,14 m0,-14 l-14,14`, { stroke: C.rust, w: 3.5 });
const swap = (cx, cy) => `<circle cx="${cx}" cy="${cy}" r="17" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + path(`M${cx - 8},${cy - 4} h14 m-4,-4 l4,4 l-4,4 M${cx + 8},${cy + 5} h-14 m4,-4 l-4,4 l4,4`, { stroke: C.olive, w: 2.5 });

// 01 Crime vs deviance, and how both are socially constructed
{
  let s = '';
  s += `<circle cx="345" cy="290" r="165" fill="${C.teal}" fill-opacity="0.75" stroke="${C.ink}" stroke-width="3"/>`;
  s += `<circle cx="555" cy="290" r="165" fill="${C.cream}" fill-opacity="0.75" stroke="${C.ink}" stroke-width="3"/>`;
  s += label(270, 268, 'CRIME', { size: 24, weight: 700, anchor: 'middle' }) + para(270, 296, 170, 'breaks the **law**', { size: 18, anchor: 'middle' }).svg;
  s += label(630, 268, 'DEVIANCE', { size: 24, weight: 700, anchor: 'middle' }) + para(630, 296, 170, 'breaks a society’s **norms**', { size: 18, anchor: 'middle' }).svg;
  s += label(450, 282, 'some acts', { size: 17, weight: 600, anchor: 'middle', fill: C.ink }) + label(450, 304, 'are both', { size: 17, weight: 600, anchor: 'middle', fill: C.ink });
  s += label(450, 486, 'Some acts are only one of the two.', { size: 17, anchor: 'middle', fill: C.muted, italic: true });
  s += label(450, 534, 'What counts as crime or deviance varies…', { size: 21, weight: 700, anchor: 'middle' });
  const r = cardRow(552, [
    { head: 'between societies', fill: C.tealLight, body: 'Different societies draw the line in different places.' },
    { head: 'over time', fill: C.tealLight, body: 'Some legal acts have been criminalised; others decriminalised.' },
    { head: 'by situation', fill: C.tealLight, body: 'Killing is murder in peacetime but may be honoured in war.' },
  ], { size: 17, headSize: 19 });
  s += r.svg;
  const n = note(552 + r.h + 18, 'Laws are made by people with power.', 'So crime is a **social definition**, not a fixed quality of an act.');
  add('01-crime-deviance-social-construction',
    svg(900, Math.round(552 + r.h + 18 + n.h + 24), 'Crime, deviance and social construction', s + n.svg),
    'Two overlapping circles: crime breaks the law, deviance breaks social norms, and some acts are both. Below, three cards show that what counts as crime or deviance varies between societies, over time and by situation, such as killing in peacetime versus war.',
    'Crime and deviance are defined by people with power, so they change with society, time and situation.',
    '## How are crime and deviance socially constructed?');
}

// 02 Merton: strain between goals and means, five adaptations
{
  let s = '';
  // balance: heavy goals, light means (hanging pans)
  const px = 450, py = 236, L = [180, py + 40], R = [720, py - 40];
  s += label(450, 136, 'American society, Merton (1938)', { size: 17, anchor: 'middle', fill: C.muted, italic: true });
  s += `<path d="M${px - 26},${py + 64} L${px},${py} L${px + 26},${py + 64} Z" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += `<line x1="${L[0]}" y1="${L[1]}" x2="${R[0]}" y2="${R[1]}" stroke="${C.ink}" stroke-width="7" stroke-linecap="round"/>`;
  s += `<line x1="${L[0]}" y1="${L[1]}" x2="${L[0]}" y2="${L[1] + 26}" stroke="${C.ink}" stroke-width="3"/><line x1="${R[0]}" y1="${R[1]}" x2="${R[0]}" y2="${R[1] + 26}" stroke="${C.ink}" stroke-width="3"/>`;
  s += box(L[0] - 120, L[1] + 26, 240, 70, { fill: C.mustard }) + label(L[0], L[1] + 56, 'Success goals', { size: 21, weight: 700, anchor: 'middle' }) + label(L[0], L[1] + 82, '(wealth)', { size: 17, anchor: 'middle' });
  s += box(R[0] - 110, R[1] + 26, 220, 54, { fill: C.tealLight }) + label(R[0], R[1] + 60, 'Legitimate means', { size: 18, weight: 700, anchor: 'middle' });
  s += label(L[0] - 10, L[1] - 42, 'heavily emphasised', { size: 17, weight: 600, anchor: 'middle', fill: C.olive });
  s += label(R[0], R[1] + 104, 'less emphasised', { size: 17, weight: 600, anchor: 'middle', fill: C.tealDark });
  // anomie band
  const ay = 390;
  s += box(30, ay, 840, 70, { fill: C.cream, edge: C.olive }) + para(450, ay + 30, 800, 'People in lower positions lack the means → **anomie**: a state where “anything goes”', { size: 18, anchor: 'middle' }).svg + label(450, ay + 56, 'Five ways of responding:', { size: 17, anchor: 'middle', fill: C.muted });
  // table
  const ty = ay + 92, rh = 64, cols = [30, 230, 330, 430];
  s += label(130, ty + 24, 'Adaptation', { size: 17, weight: 700, anchor: 'middle', fill: C.muted }) + label(280, ty + 24, 'Goals', { size: 17, weight: 700, anchor: 'middle', fill: C.muted }) + label(380, ty + 24, 'Means', { size: 17, weight: 700, anchor: 'middle', fill: C.muted }) + label(445, ty + 24, 'Example', { size: 17, weight: 700, fill: C.muted });
  const rows = [
    ['Conformity', 'a', 'a', 'Gaining qualifications and a good job'],
    ['Innovation', 'a', 'r', 'Theft or fraud to get money'],
    ['Ritualism', 'r', 'a', 'A low-level clerk who follows rules but has given up ambition'],
    ['Retreatism', 'r', 'r', '“Dropping out”, e.g. drug addiction'],
    ['Rebellion', 's', 's', 'Revolutionaries seeking a new society'],
  ];
  const mk = (k, cx, cy) => (k === 'a' ? tick(cx, cy) : k === 'r' ? cross(cx, cy) : swap(cx, cy));
  rows.forEach(([n, g, m, ex], i) => {
    const y = ty + 40 + i * (rh + 8);
    s += box(30, y, 190, rh, { fill: i === 1 ? C.mustard : C.teal, edge: C.ink, sw: 2 }) + label(125, y + rh / 2 + 7, n, { size: 19, weight: 700, anchor: 'middle' });
    s += box(232, y, 196, rh, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + mk(g, 280, y + rh / 2) + mk(m, 380, y + rh / 2);
    s += box(440, y, 430, rh, { fill: C.panel, edge: C.panelEdge, sw: 2 });
    const p = para(0, 0, 400, ex, { size: 17 });
    s += para(456, y + rh / 2 - p.h / 2 + 17 * 0.95, 400, ex, { size: 17 }).svg;
  });
  const ly = ty + 40 + 5 * (rh + 8) + 14;
  s += tick(60, ly + 10) + label(86, ly + 16, 'accept', { size: 17 }) + cross(200, ly + 10) + label(226, ly + 16, 'reject', { size: 17 }) + swap(330, ly + 10) + label(356, ly + 16, 'replace with new goals / means', { size: 17 });
  add('02-merton-strain-adaptations',
    svg(900, ly + 50, 'Merton: goals, means and anomie', s),
    'A tilted balance shows American society stressing success goals (wealth) more than legitimate means, which produces anomie for people lacking the means. A table shows the five adaptations: conformity accepts goals and means; innovation accepts goals but rejects means; ritualism rejects goals but accepts means; retreatism rejects both; rebellion replaces both.',
    'Innovation, accepting the goal but not the means, is Merton’s main explanation of crime.',
    '## What did Merton argue about the causes of crime?');
}

// 03 Becker: labelling to deviant career
{
  add('03-becker-labelling',
    flowFig('Becker: from label to deviant career', {
      steps: [
        { head: 'An act happens', body: 'It only becomes deviant when others **label** it so.' },
        { head: 'A label is applied', body: 'Depends on who did it, when and where, who sees it and the negotiations involved. Police and courts have the power to make labels stick.' },
        { head: 'Master status', body: 'The label overrides everything else about the person; others treat them accordingly.' },
        { head: 'Self-fulfilling prophecy', body: 'The person comes to see themselves as the label says.' },
        { head: 'Deviant career', body: 'Rejection by others encourages further deviance. The career is complete when the person joins an organised deviant group with its own subculture.' },
      ],
    }),
    'Five linked steps: an act is labelled deviant by others; whether the label sticks depends on who, when, where and who sees it, with police and courts holding power; the label becomes a master status; the person accepts it as a self-fulfilling prophecy; rejection leads to a deviant career and joining an organised deviant group.',
    'For Becker, deviance is created by the label, not by the act itself.',
    '## What did Becker argue?');
}

// 04 Formal vs informal social control
{
  add('04-formal-informal-control',
    compareFig('Formal and informal social control', {
      cols: [{ head: 'Formal', fill: C.teal }, { head: 'Informal', fill: C.cream }],
      rows: [
        { label: 'Rules', cells: ['Written rules and laws', 'Unwritten rules and expectations'] },
        { label: 'Agents', cells: ['Police, courts, prisons, government', 'Family, peers, school, workplace, religion, media'] },
        { label: 'Sanctions', cells: ['Arrest, fines, prison', 'Praise, disapproval, gossip, exclusion'] },
      ],
      size: 18, labelW: 150,
      foot: { head: 'Whose interests does control serve?', text: ['**Functionalists:** maintains value consensus', '**Marxists:** protects the ruling class', '**Feminists:** maintains patriarchy', '**Interactionists:** focus on how agents of control label people'] },
    }),
    'A comparison table. Formal control uses written laws, police, courts, prisons and government, with sanctions such as arrest, fines and prison. Informal control uses unwritten rules, family, peers, school, workplace, religion and media, with sanctions such as praise, disapproval, gossip and exclusion. Below, four perspectives on whose interests control serves.',
    'Formal control is written and enforced by the state; informal control works through everyday relationships.',
    '## How does social control work?');
}

// 05 Heidensohn: control of women in three spheres
{
  const top = 108;
  let s = box(30, top, 840, 74, { fill: C.ink, edge: C.ink }) + para(450, top + 32, 800, 'Patriarchal societies control women more effectively than men', { size: 20, weight: 700, anchor: 'middle', fill: '#ffffff' }).svg + label(450, top + 58, 'so women commit less crime (control theory)', { size: 17, anchor: 'middle', fill: C.tealLight });
  const y = top + 74 + 44;
  s += arrow(170, top + 78, 170, y - 6) + arrow(450, top + 78, 450, y - 6) + arrow(730, top + 78, 730, y - 6);
  const r = cardRow(y, [
    { head: 'At home', fill: C.teal, body: ['Expected to do most housework and childcare', 'Challenging this risks male violence', 'Men’s financial power as breadwinners', 'Daughters supervised more closely than sons'] },
    { head: 'In public', fill: C.tealLight, body: ['Fear of male sexual violence', 'Fear of losing reputation keeps women out of public spaces at night', 'The idea of “separate spheres”'] },
    { head: 'At work', fill: C.cream, body: ['Male-dominated hierarchies', 'Sexual harassment'] },
  ], { size: 17, headSize: 21 });
  s += r.svg;
  const n = note(y + r.h + 18, 'Criticisms', ['Generalises about all women', 'Claims not always backed by strong research evidence']);
  add('05-heidensohn-control',
    svg(900, Math.round(y + r.h + 18 + n.h + 24), 'Heidensohn: why women commit less crime', s + n.svg),
    'Heidensohn argues patriarchal societies control women more than men. Three cards show how: at home through housework, childcare, risk of male violence and closer supervision of daughters; in public through fear of sexual violence and of losing reputation; at work through male-dominated hierarchies and sexual harassment.',
    'Women are controlled at home, in public and at work, which Heidensohn links to lower female crime.',
    '## Why do women commit less crime? Heidensohn');
}

// 06 Albert Cohen: status frustration
{
  let s = '';
  const ch = hchain(110, [
    { head: 'Shares mainstream goals', body: 'Working-class boys want success like everyone else', fill: C.tealLight },
    { head: 'Blocked', body: 'Educational failure (cultural deprivation) and poor job prospects', fill: C.panel },
    { head: 'Status frustration', body: 'Cannot reach the goals the normal way', fill: C.cream },
    { head: 'Delinquent subculture', body: 'Forms with boys in the same position', fill: C.mustard },
  ], { size: 16, ag: 34 });
  s += ch.svg;
  const y = 110 + ch.h + 34;
  s += path(`M${870 - 96},${110 + ch.h + 4} L${870 - 96},${y + 30} L640,${y + 30}`, { w: 3.5, extra: 'marker-end="url(#ah)"' });
  s += box(300, y, 330, 120, { fill: C.panel, edge: C.ink }) + label(465, y + 34, 'The subculture values', { size: 18, weight: 700, anchor: 'middle' });
  ['stealing', 'vandalism', 'truancy'].forEach((w, i) => { s += pill(316 + i * 104, y + 52, 96, 40, w, { size: 16, fill: C.cream, edge: C.olive }); });
  s += label(465, y + 112, '', {});
  s += arrow(296, y + 60, 230, y + 60);
  s += box(30, y + 14, 196, 92, { fill: C.teal }) + label(128, y + 52, 'Prestige', { size: 20, weight: 700, anchor: 'middle' }) + label(128, y + 78, 'among peers', { size: 17, anchor: 'middle' });
  const n = note(y + 140, 'Criticism', 'Some argue working-class youths never accept mainstream goals in the first place; they act out of resentment towards those whose values they reject.');
  add('06-cohen-status-frustration',
    svg(900, Math.round(y + 140 + n.h + 24), 'Albert Cohen: delinquent subcultures', s + n.svg),
    'A chain: working-class boys share mainstream goals, are blocked by educational failure linked to cultural deprivation and poor job prospects, suffer status frustration, and form a delinquent subculture. The subculture values stealing, vandalism and truancy, and success in it brings prestige among peers.',
    'Blocked success leads to status frustration, and the subculture offers another route to status.',
    '## What did Albert Cohen argue?');
}

// 07 Carlen: class deal and gender deal
{
  const top = 108;
  let s = box(30, top, 840, 60, { fill: C.tealLight, edge: C.panelEdge }) + para(450, top + 36, 800, 'Unstructured interviews with **39** mostly working-class women, aged 15 to 46, convicted of crimes', { size: 17, anchor: 'middle' }).svg;
  const dy = top + 84;
  const deal = (x, head, give, get, fill) => {
    const w = 404;
    let o = headPanel(x, dy, w, 262, head, { fill, size: 22 }).svg;
    o += box(x + 20, dy + 74, w - 40, 58, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + label(x + 36, dy + 98, 'Women give', { size: 15, weight: 700, fill: C.muted }) + label(x + 36, dy + 121, give, { size: 17, weight: 600 });
    o += arrow(x + w / 2, dy + 136, x + w / 2, dy + 160, { w: 3 });
    o += box(x + 20, dy + 164, w - 40, 84, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + label(x + 36, dy + 188, 'and are promised', { size: 15, weight: 700, fill: C.muted }) + para(x + 36, dy + 210, w - 72, get, { size: 17, weight: 600 }).svg;
    return o;
  };
  s += deal(30, 'The class deal', 'wage labour', 'consumer goods', C.teal);
  s += deal(466, 'The gender deal', 'love and domestic labour', 'material and emotional rewards from a male breadwinner', C.cream);
  const fy = dy + 262;
  s += path(`M232,${fy + 4} L232,${fy + 34} L668,${fy + 34} L668,${fy + 4}`, { w: 3.5, stroke: C.rust }) + arrow(450, fy + 34, 450, fy + 58, { color: C.rust, w: 3.5, marker: 'ahR' });
  s += label(250, fy + 26, 'rewards fail', { size: 16, weight: 700, fill: C.rust }) + label(650, fy + 26, 'rewards fail', { size: 16, weight: 700, fill: C.rust, anchor: 'end' });
  s += box(200, fy + 62, 500, 64, { fill: C.mustard }) + label(450, fy + 102, 'Crime becomes a viable alternative', { size: 21, weight: 700, anchor: 'middle' });
  const n = note(fy + 146, 'Criticism', 'A small sample, although it supports the view that crime rises when social control breaks down.');
  add('07-carlen-class-gender-deals',
    svg(900, Math.round(fy + 146 + n.h + 24), 'Carlen: the class deal and the gender deal', s + n.svg),
    'Carlen interviewed 39 convicted women. In the class deal, women give wage labour and are promised consumer goods; in the gender deal, they give love and domestic labour and are promised material and emotional rewards from a male breadwinner. When either set of rewards fails, crime becomes a viable alternative.',
    'Women conform for the rewards of two deals; when the rewards fail, control breaks down.',
    '## What did Carlen find?');
}

// 08 Dark figure iceberg
{
  const wl = 250; // waterline
  let s = '';
  s += `<rect x="30" y="${wl}" width="840" height="400" fill="${C.teal}"/>` + `<line x1="30" y1="${wl}" x2="870" y2="${wl}" stroke="${C.tealDark}" stroke-width="3"/>`;
  s += `<path d="M300,${wl} L360,150 L420,170 L470,128 L540,${wl} Z" fill="#ffffff" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  s += `<path d="M300,${wl} L230,360 L250,470 L330,600 L470,630 L600,580 L640,450 L600,330 L540,${wl} Z" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  s += `<line x1="258" y1="390" x2="615" y2="390" stroke="${C.ink}" stroke-width="2" stroke-dasharray="8 6"/>`;
  s += label(430, 214, 'Recorded', { size: 18, weight: 700, anchor: 'middle' }) + label(430, 236, 'by police', { size: 16, anchor: 'middle' });
  s += label(430, 314, 'Reported but', { size: 17, weight: 700, anchor: 'middle' }) + label(430, 336, 'not recorded', { size: 17, weight: 700, anchor: 'middle' }) + label(430, 358, 'police discretion', { size: 15, anchor: 'middle', fill: C.muted });
  s += label(430, 470, 'Never reported', { size: 19, weight: 700, anchor: 'middle' });
  s += label(430, 540, 'THE DARK FIGURE', { size: 22, weight: 700, anchor: 'middle', fill: C.tealDark });
  // left: official stats
  s += label(40, 150, 'Police recorded crime', { size: 18, weight: 700 }) + label(40, 172, '(official statistics)', { size: 16, fill: C.muted });
  s += arrow(200, 184, 340, 200, { w: 3 });
  // right: surveys
  s += box(660, 290, 200, 148, { fill: C.panel, edge: C.ink }) + label(676, 318, 'Victim surveys', { size: 18, weight: 700 }) + para(676, 342, 172, 'capture unreported crime, but miss crimes without direct victims', { size: 16 }).svg;
  s += arrow(656, 380, 590, 420, { w: 3 });
  s += box(660, 458, 200, 140, { fill: C.panel, edge: C.ink }) + label(676, 486, 'Self-report studies', { size: 18, weight: 700 }) + para(676, 510, 172, 'reveal hidden offending and offenders never caught', { size: 16 }).svg;
  s += arrow(656, 530, 560, 540, { w: 3 });
  s += `<rect x="40" y="${wl + 30}" width="180" height="78" rx="10" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>` + para(52, wl + 56, 160, 'dark figure = unreported or unrecorded', { size: 16, weight: 600 }).svg;
  const n = note(670, 'Perspectives on the statistics', ['**Functionalists:** broadly show who commits crime', '**Marxists:** reflect policing of the working class; crimes of the powerful go unrecorded', '**Feminists:** domestic and sexual violence against women are heavily under-reported']);
  add('08-dark-figure',
    svg(900, Math.round(670 + n.h + 24), 'The dark figure of crime', s + n.svg),
    'An iceberg: only the tip, crime recorded by police, appears in official statistics. Below the waterline is the dark figure: crime reported but not recorded, and crime never reported. Victim surveys and self-report studies reach parts of the hidden crime. Below, functionalist, Marxist and feminist views of crime statistics.',
    'Official statistics show only the tip of crime; the dark figure lies below.',
    '## How useful is data on crime? (3.5.4)');
}
