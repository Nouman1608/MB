import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-global-perspectives-0457-arts-in-society';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- Local layout helpers for IGCSE Global Perspectives figures (self-contained; uses house style only) ----
const X = (s) => String(s).replace(/&(?!amp;|lt;|gt;|#\d+;)/g, '&amp;').replace(/</g, '&lt;');
const T = (x, y, s, o = {}) => t(x, y, X(s), o);
const cw = (size, weight = 400) => size * (weight >= 600 ? 0.575 : 0.515);
function wrap(s, width, size = 17, weight = 400) {
  const max = Math.max(4, Math.floor(width / cw(size, weight)));
  const out = []; let cur = '';
  for (const w of String(s).split(/\s+/).filter(Boolean)) {
    if (!cur) cur = w; else if ((cur + ' ' + w).length <= max) cur += ' ' + w; else { out.push(cur); cur = w; }
  }
  if (cur) out.push(cur);
  return out;
}
// Wrapped text block. x is the left edge (or centre if anchor middle). Returns {s, h}.
function para(x, y, s, width, o = {}) {
  const size = o.size || 17, lh = o.lh || Math.round(size * 1.32), weight = o.weight || 400;
  let lines = [];
  if (o.bullet) {
    const ind = size * 0.95;
    const w1 = wrap(s, width - ind, size, weight);
    return { s: T(x, y, '•', { ...o, weight: 700 }) + w1.map((l, i) => T(x + ind, y + i * lh, l, o)).join(''), h: w1.length * lh };
  }
  lines = wrap(s, width, size, weight);
  return { s: lines.map((l, i) => T(x, y + i * lh, l, o)).join(''), h: lines.length * lh };
}
// Card: panel with optional title and body (string or array). Returns {s, h}.
function card(x, y, w, o = {}) {
  const pad = o.pad ?? 20, ts = o.tsize ?? 20, bs = o.size ?? 17, mid = o.align === 'middle';
  const tx = mid ? x + w / 2 : x + pad, anchor = mid ? 'middle' : 'start';
  const measure = (y0) => {
    let cy = y0 + pad, inner = '';
    if (o.kicker) { inner += T(tx, cy + 13, o.kicker, { size: 15, weight: 700, anchor, fill: o.kfill || C.tealDark }); cy += 24; }
    if (o.title) { const p = para(tx, cy + ts * 0.8, o.title, w - 2 * pad, { size: ts, weight: 700, anchor, fill: o.tfill || C.ink }); inner += p.s; cy += p.h; }
    if (o.body) {
      const items = Array.isArray(o.body) ? o.body : [o.body];
      if (o.title || o.kicker) cy += 6;
      items.forEach((it, i) => {
        const p = para(tx, cy + bs * 0.8, it, w - 2 * pad, { size: bs, anchor, fill: o.bfill || C.muted, bullet: o.bullets, weight: o.bweight });
        inner += p.s; cy += p.h + (i < items.length - 1 ? (o.gap ?? 5) : 0);
      });
    }
    return { inner, h: cy - y0 + pad - 4 };
  };
  let m = measure(y);
  const h = Math.max(o.minH || 0, m.h);
  if (o.vcenter && h > m.h) m = measure(y + (h - m.h) / 2);
  return { s: panel(x, y, w, h, o.fill || C.panel, o.edge || C.panelEdge) + m.inner, h };
}
// A row of n equal-height cards; arrows between when o.arrows. items: card option objects.
function row(y, items, o = {}) {
  const x0 = o.x ?? 30, W0 = o.w ?? 840, gap = o.gap ?? (o.arrows ? 46 : 18), n = items.length;
  const w = (W0 - gap * (n - 1)) / n;
  const h = Math.max(o.minH || 0, ...items.map((it, i) => card(x0 + i * (w + gap), y, w, { ...o.card, ...it }).h));
  let s = '';
  items.forEach((it, i) => {
    const x = x0 + i * (w + gap);
    s += card(x, y, w, { ...o.card, ...it, minH: h, vcenter: o.vcenter ?? !items.some((q) => q.body) }).s;
    if (o.arrows && i < n - 1) s += arrow(x + w + 6, y + h / 2, x + w + gap - 6, y + h / 2, { w: 3.5, color: o.acolor || C.ink, marker: o.amarker || 'ah' });
  });
  return { s, h };
}
// Vertical stack of full-width cards with down arrows between. Returns {s,h}.
function stack(y, items, o = {}) {
  const x = o.x ?? 30, w = o.w ?? 840, gap = o.gap ?? (o.arrows ? 44 : 14);
  let s = '', cy = y;
  items.forEach((it, i) => {
    const c = card(x, cy, w, { ...o.card, ...it }); s += c.s; cy += c.h;
    if (i < items.length - 1) { if (o.arrows) s += arrow(x + w / 2, cy + 5, x + w / 2, cy + gap - 5, { w: 3.5, color: o.acolor || C.ink, marker: o.amarker || 'ah' }); cy += gap; }
  });
  return { s, h: cy - y };
}
// Numbered steps (badge + title + description), like the house sequence figures. Returns {s,h}.
function steps(y, list, o = {}) {
  const x = o.x ?? 30, w = o.w ?? 840, gap = o.gap ?? 12; let s = '', cy = y;
  list.forEach((st, i) => {
    const hl = o.highlight === i;
    const c = card(x + 78, cy, w - 78, { title: st.title, body: st.body, fill: hl ? C.cream : C.panel, edge: hl ? C.olive : C.panelEdge, size: o.size ?? 17, tsize: o.tsize ?? 20, minH: o.minH ?? 0 });
    s += c.s + badge(x + 32, cy + c.h / 2, 24, st.n ?? String(i + 1), hl ? C.mustard : C.cream);
    cy += c.h + gap;
  });
  // connector line behind badges
  const line = `<line x1="${x + 32}" y1="${y + 20}" x2="${x + 32}" y2="${cy - gap - 20}" stroke="${C.panelEdge}" stroke-width="4"/>`;
  return { s: line + s, h: cy - y - gap };
}
// Personal / local / national / global rings with linked cards. levels: [{name, text}] from smallest to largest.
const RING_FILL = [C.mustard, C.cream, C.teal, C.tealLight];
const RING_INK = [C.olive, C.olive, C.tealDark, C.tealDark];
function rings(y, levels, o = {}) {
  const n = levels.length, cardX = o.cardX ?? 420, cardW = 870 - cardX;
  let cy = y, cards = '', mids = [];
  levels.forEach((lv, i) => {
    const c = card(cardX, cy, cardW, { title: lv.name, body: lv.text, tfill: RING_INK[i], size: o.size ?? 17, tsize: 19, pad: 16 });
    cards += c.s; mids.push(cy + c.h / 2); cy += c.h + 12;
  });
  const H = cy - y - 12, R = Math.min(o.R ?? 190, Math.max(150, H / 2)), ccx = o.cx ?? 205, ccy = y + H / 2;
  let circles = '', labels = '', leaders = '';
  for (let i = n - 1; i >= 0; i--) circles += `<circle cx="${ccx}" cy="${ccy}" r="${(R * (i + 1)) / n}" fill="${RING_FILL[i]}" stroke="${C.ink}" stroke-width="2.5"/>`;
  levels.forEach((lv, i) => {
    const ly = i === 0 ? ccy + 6 : ccy + (R * (i + 0.5)) / n + 6;
    const lab = lv.short || lv.name;
    labels += T(ccx, ly, lab, { size: 16, weight: 700, anchor: 'middle', fill: C.ink });
    const lx = ccx + cw(16, 700) * lab.length / 2 + 8;
    leaders += `<path d="M${lx},${ly - 5} C${(lx + cardX) / 2},${ly - 5} ${(lx + cardX) / 2},${mids[i]} ${cardX - 4},${mids[i]}" fill="none" stroke="${C.ink}" stroke-width="2" stroke-dasharray="5 5"/><circle cx="${lx}" cy="${ly - 5}" r="4" fill="${C.ink}"/>`;
  });
  return { s: circles + labels + leaders + cards, h: H };
}
// Hub: central issue with cards around it (left and right columns). spokes: card option objects.
function hub(y, center, spokes, o = {}) {
  const cwid = o.cardW ?? 260, half = Math.ceil(spokes.length / 2), L = spokes.slice(0, half), Rr = spokes.slice(half);
  const col = (items, x) => { let cy = y, s = '', mids = []; items.forEach((it) => { const c = card(x, cy, cwid, { size: 16, tsize: 18, pad: 16, ...it }); s += c.s; mids.push(cy + c.h / 2); cy += c.h + 14; }); return { s, mids, h: cy - y - 14 }; };
  const a = col(L, 30), b = col(Rr, 870 - cwid);
  const H = Math.max(a.h, b.h, (o.r ?? 105) * 2 + 10), cy = y + H / 2, r = o.r ?? 105;
  // re-centre shorter column
  const shift = (c) => (H - c.h) / 2;
  const sa = shift(a), sb = shift(b);
  const A = col(L, 30), B = col(Rr, 870 - cwid);
  const mv = (s, d) => `<g transform="translate(0,${d})">${s}</g>`;
  let lines = '';
  A.mids.forEach((m) => { lines += `<line x1="${30 + cwid}" y1="${m + sa}" x2="${450 - r * 0.85}" y2="${cy + (m + sa - cy) * 0.35}" stroke="${C.ink}" stroke-width="2.5"/>`; });
  B.mids.forEach((m) => { lines += `<line x1="${870 - cwid}" y1="${m + sb}" x2="${450 + r * 0.85}" y2="${cy + (m + sb - cy) * 0.35}" stroke="${C.ink}" stroke-width="2.5"/>`; });
  const lines2 = wrap(center, r * 1.6, o.csize ?? 20, 700);
  const lh = (o.csize ?? 20) * 1.25;
  const ctext = lines2.map((l, i) => T(450, cy - ((lines2.length - 1) * lh) / 2 + i * lh + 7, l, { size: o.csize ?? 20, weight: 700, anchor: 'middle' })).join('');
  return { s: lines + `<circle cx="450" cy="${cy}" r="${r}" fill="${o.cfill || C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + ctext + mv(A.s, sa) + mv(B.s, sb), h: H };
}
// Balance scale weighing two sides. Returns {s,h}.
function balance(y, left, right, o = {}) {
  const tilt = o.tilt ?? 0; // -1 left heavier, 1 right heavier
  const by = y + 50, d = tilt * 22;
  const beam = `<line x1="215" y1="${by - d}" x2="685" y2="${by + d}" stroke="${C.ink}" stroke-width="7" stroke-linecap="round"/>`;
  const post = `<path d="M450,${by} L420,${by + 92} L480,${by + 92} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/><circle cx="450" cy="${by}" r="10" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
  const pan = (x, yy, fill) => `<line x1="${x}" y1="${yy}" x2="${x - 55}" y2="${yy + 55}" stroke="${C.ink}" stroke-width="2.5"/><line x1="${x}" y1="${yy}" x2="${x + 55}" y2="${yy + 55}" stroke="${C.ink}" stroke-width="2.5"/><path d="M${x - 75},${yy + 55} L${x + 75},${yy + 55} Q${x + 60},${yy + 82} ${x},${yy + 82} Q${x - 60},${yy + 82} ${x - 75},${yy + 55} Z" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>`;
  let s = beam + post + pan(215, by - d, C.teal) + pan(685, by + d, C.cream);
  s += T(215, by - d + 76, left.tag || '', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(685, by + d + 76, right.tag || '', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  const r1 = row(y + 165, [{ title: left.title, body: left.items, bullets: true, edge: C.tealDark, tfill: C.tealDark }, { title: right.title, body: right.items, bullets: true, edge: C.olive, tfill: C.olive }], { gap: 30, card: { size: o.size ?? 17 } });
  s += r1.s;
  let h = 165 + r1.h;
  if (o.verdict) { const v = card(30, y + h + 18, 840, { title: o.verdictTitle || 'Judgement', body: o.verdict, fill: C.cream, edge: C.olive, size: 17 }); s += v.s; h += 18 + v.h; }
  return { s, h };
}
// Stacked proportion bar (e.g. marks). segs: [{label, value, fill, note}]. Returns {s,h}.
function bar(y, segs, o = {}) {
  const total = segs.reduce((a, b) => a + b.value, 0), x0 = 30, W0 = 840, bh = o.bh ?? 70;
  let s = '', x = x0;
  segs.forEach((sg) => {
    const w = (W0 * sg.value) / total;
    s += `<rect x="${x}" y="${y}" width="${w}" height="${bh}" fill="${sg.fill}" stroke="${C.ink}" stroke-width="2.5"/>`;
    if (w > 70) s += T(x + w / 2, y + bh / 2 + 8, sg.inside ?? String(sg.value), { size: 22, weight: 700, anchor: 'middle' });
    x += w;
  });
  return { s: `<rect x="${x0 - 2}" y="${y - 2}" width="${W0 + 4}" height="${bh + 4}" rx="6" fill="none" stroke="${C.ink}" stroke-width="3"/>` + s, h: bh };
}
// Checklist rows: items [{q, note}]. Returns {s,h}.
function checklist(y, items, o = {}) {
  let s = '', cy = y; const x = o.x ?? 30, w = o.w ?? 840;
  items.forEach((it, i) => {
    const c = card(x + 64, cy, w - 64, { title: it.q, body: it.note, tsize: o.tsize ?? 19, size: o.size ?? 16, pad: 14, fill: it.fill, edge: it.edge });
    const bx = x + 10, byy = cy + c.h / 2 - 20;
    const mk = it.mark === 'x' ? path(`M${bx + 11},${byy + 11} l18,18 m0,-18 l-18,18`, { stroke: C.rust, w: 5 }) : it.mark === 'none' ? '' : path(`M${bx + 9},${byy + 21} l9,9 l15,-19`, { stroke: C.tealDark, w: 5 });
    s += `<rect x="${bx}" y="${byy}" width="40" height="40" rx="8" fill="${C.panel}" stroke="${C.ink}" stroke-width="3"/>` + mk + c.s;
    cy += c.h + (o.gap ?? 10);
  });
  return { s, h: cy - y - (o.gap ?? 10) };
}
// Spectrum: a two-headed line with positions. points [{pos 0..1, label, note}]. Returns {s,h}.
function spectrum(y, leftLabel, rightLabel, points, o = {}) {
  const x1 = 70, x2 = 830, ly = y + (o.top ?? 120);
  let s = `<line x1="${x1}" y1="${ly}" x2="${x2}" y2="${ly}" stroke="${C.ink}" stroke-width="4" marker-start="url(#ah)" marker-end="url(#ah)"/>`;
  s += T(x1 - 10, ly + 42, leftLabel, { size: 18, weight: 700, fill: C.tealDark }) + T(x2 + 10, ly + 42, rightLabel, { size: 18, weight: 700, anchor: 'end', fill: C.rust });
  let maxBelow = 60;
  points.forEach((p, i) => {
    const px = x1 + 30 + (x2 - x1 - 60) * p.pos, up = i % 2 === 0;
    s += `<circle cx="${px}" cy="${ly}" r="11" fill="${p.fill || C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
    const bw = o.labelW ?? 200, bx = Math.max(30, Math.min(870 - bw, px - bw / 2));
    const lab = card(bx, 0, bw, { title: p.label, body: p.note, tsize: 17, size: 15, pad: 12, align: 'middle' });
    if (up) { const by = ly - 24 - lab.h; s += `<line x1="${px}" y1="${ly - 11}" x2="${px}" y2="${ly - 24}" stroke="${C.ink}" stroke-width="2.5"/>` + `<g transform="translate(0,${by})">${lab.s}</g>`; }
    else { const by = ly + 70; s += `<line x1="${px}" y1="${ly + 11}" x2="${px}" y2="${by}" stroke="${C.ink}" stroke-width="2.5"/>` + `<g transform="translate(0,${by})">${lab.s}</g>`; maxBelow = Math.max(maxBelow, 70 + lab.h); }
  });
  return { s, h: ly - y + maxBelow };
}
// Table: headers [], rows [[]], widths [] summing 840. First column bold. Returns {s,h}.
function table(y, headers, rows, widths, o = {}) {
  const x0 = 30, size = o.size ?? 16, pad = 12, lh = Math.round(size * 1.32);
  let s = '', cy = y;
  const hh = 46;
  let x = x0;
  headers.forEach((hd, j) => { s += `<rect x="${x}" y="${cy}" width="${widths[j]}" height="${hh}" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + T(x + pad, cy + 30, hd, { size: 17, weight: 700 }); x += widths[j]; });
  cy += hh;
  rows.forEach((r, i) => {
    const cells = r.map((c, j) => wrap(c, widths[j] - 2 * pad, size, j === 0 ? 700 : 400));
    const rh = Math.max(...cells.map((c) => c.length)) * lh + 2 * pad - 2;
    x = x0;
    cells.forEach((lines, j) => {
      s += `<rect x="${x}" y="${cy}" width="${widths[j]}" height="${rh}" fill="${j === 0 ? C.tealLight : (o.zebra && i % 2 ? '#fbf8ea' : C.panel)}" stroke="${C.ink}" stroke-width="2"/>`;
      s += lines.map((l, k) => T(x + pad, cy + pad + size * 0.85 + k * lh, l, { size, weight: j === 0 ? 700 : 400, fill: j === 0 ? C.ink : C.muted })).join('');
      x += widths[j];
    });
    cy += rh;
  });
  return { s, h: cy - y };
}
// Cycle: nodes around an ellipse with arcs between them. nodes: card option objects. Returns {s,h}.
function cycle(y, nodes, o = {}) {
  const n = nodes.length, rx = o.rx ?? 290, ry = o.ry ?? 210, cx = 450, cy = y + ry + (o.padTop ?? 60), cwid = o.cardW ?? 230;
  let s = '', arcs = '';
  const pts = nodes.map((_, i) => { const a = -Math.PI / 2 + (2 * Math.PI * i) / n; return [cx + rx * Math.cos(a), cy + ry * Math.sin(a), a]; });
  for (let i = 0; i < n; i++) {
    const a1 = pts[i][2] + (o.da ?? 0.42), a2 = pts[(i + 1) % n][2] - (o.da ?? 0.42);
    const p1 = [cx + rx * Math.cos(a1), cy + ry * Math.sin(a1)], p2 = [cx + rx * Math.cos(a2), cy + ry * Math.sin(a2)];
    arcs += `<path d="M${p1[0]},${p1[1]} A${rx},${ry} 0 0 1 ${p2[0]},${p2[1]}" fill="none" stroke="${C.tealDark}" stroke-width="4" marker-end="url(#ahT)"/>`;
  }
  let minY = Infinity, maxY = -Infinity;
  nodes.forEach((nd, i) => {
    const c0 = card(0, 0, cwid, { tsize: 18, size: 15, pad: 14, align: 'middle', ...nd });
    const x = Math.max(30, Math.min(870 - cwid, pts[i][0] - cwid / 2)), yy = pts[i][1] - c0.h / 2;
    s += card(x, yy, cwid, { tsize: 18, size: 15, pad: 14, align: 'middle', ...nd }).s;
    minY = Math.min(minY, yy); maxY = Math.max(maxY, yy + c0.h);
  });
  let centre = '';
  if (o.center) { const lines = wrap(o.center, 220, 20, 700); centre = lines.map((l, i) => T(cx, cy - ((lines.length - 1) * 25) / 2 + i * 25 + 7, l, { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark })).join(''); }
  const shift = y - minY;
  return { s: `<g transform="translate(0,${shift})">${arcs}${centre}${s}</g>`, h: maxY - minY };
}

// Pills: labels laid out in centred lines. Returns {s,h}.
function chips(y, labels, o = {}) {
  const size = o.size ?? 17, ph = o.h ?? 42, gap = 12, maxW = o.w ?? 840, x0 = o.x ?? 30;
  const widths = labels.map((l) => cw(size, 600) * l.length + 34);
  const lines = []; let cur = [], cwid = 0;
  labels.forEach((l, i) => { if (cur.length && cwid + widths[i] > maxW) { lines.push(cur); cur = []; cwid = 0; } cur.push(i); cwid += widths[i] + gap; });
  if (cur.length) lines.push(cur);
  let s = '';
  lines.forEach((ln, k) => {
    const tot = ln.reduce((a, i) => a + widths[i], 0) + gap * (ln.length - 1);
    let x = x0 + (maxW - tot) / 2; const yy = y + k * (ph + 10);
    ln.forEach((i) => { s += `<rect x="${x}" y="${yy}" width="${widths[i]}" height="${ph}" rx="${ph / 2}" fill="${(o.fills && o.fills[i]) || o.fill || C.tealLight}" stroke="${o.edge || C.tealDark}" stroke-width="2.5"/>` + T(x + widths[i] / 2, yy + ph / 2 + size * 0.36, labels[i], { size, weight: 600, anchor: 'middle' }); x += widths[i] + gap; });
  });
  return { s, h: lines.length * (ph + 10) - 10 };
}
// Rows of linked cards under column headers (e.g. issue -> action -> measure). Returns {s,h}.
function flowRows(y, headers, rows, o = {}) {
  let s = '', cy = y;
  const n = headers.length, gap = 46, w = (840 - gap * (n - 1)) / n;
  headers.forEach((h, j) => { s += T(30 + j * (w + gap) + w / 2, cy + 20, h, { size: 18, weight: 700, anchor: 'middle', fill: o.hfill?.[j] || C.tealDark }); });
  cy += 36;
  rows.forEach((r) => {
    const fills = o.fills || [C.panel, C.cream, C.tealLight], edges = o.edges || [C.panelEdge, C.olive, C.tealDark];
    const rr = row(cy, r.map((c, j) => ({ body: c, fill: fills[j], edge: edges[j], bfill: C.ink })), { arrows: true, card: { size: o.size ?? 17, pad: 16 } });
    s += rr.s; cy += rr.h + 14;
  });
  return { s, h: cy - y - 14 };
}
const note = (y, text, o = {}) => card(30, y, 840, { body: text, fill: C.cream, edge: C.olive, bfill: C.ink, size: 17, title: o.title, ...o });
const label = (y, text, o = {}) => ({ s: T(o.x ?? 450, y + 20, text, { size: o.size ?? 20, weight: 700, anchor: o.anchor ?? 'middle', fill: o.fill ?? C.ink }), h: 28 });
// Compose a figure from vertically stacked parts: parts are functions (y) => {s,h} or {gap:n}.
function compose(title, parts, subtitle) {
  let y = subtitle ? 122 : 104, body = '';
  for (const p of parts) {
    if (typeof p === 'number') { y += p; continue; }
    const r = p(y); body += r.s; y += r.h + 18;
  }
  return svg(900, Math.round(y + 12), title, body, subtitle);
}
// ---- end helpers ----

// 01 Public funding for the arts at three levels
add('01-arts-funding-levels',
  compose('One issue, three levels: public funding for the arts', [
    (y) => rings(y, [
      { name: 'Local', text: 'A council deciding whether to keep a community arts centre.' },
      { name: 'National', text: 'Government budgets for theatres and galleries.' },
      { name: 'Global', text: 'Countries fund culture in very different ways.' },
    ], { R: 170 }),
    (y) => note(y, '“The arts” is too broad to argue about. An issue like this one divides opinion at every level.'),
  ]),
  'Concentric rings for local, national and global levels of the issue of public funding for the arts: a council deciding whether to keep a community arts centre; government budgets for theatres and galleries; and countries funding culture in very different ways.',
  'A good issue can be traced from a local decision up to a global pattern.',
  '## Issues at global, national and local level');

// 02 Perspectives on returning cultural objects
{
  const Y = 110, cy = Y + 200;
  let b = `<circle cx="320" cy="${cy}" r="190" fill="${C.teal}" fill-opacity="0.75" stroke="${C.ink}" stroke-width="3"/>` +
    `<circle cx="580" cy="${cy}" r="190" fill="${C.cream}" fill-opacity="0.75" stroke="${C.ink}" stroke-width="3"/>`;
  b += T(245, cy - 128, 'Community or', { size: 19, weight: 700, anchor: 'middle' }) + T(245, cy - 105, 'government', { size: 19, weight: 700, anchor: 'middle' }) + T(245, cy - 82, 'of origin', { size: 19, weight: 700, anchor: 'middle' });
  b += T(250, cy - 40, 'Objects should', { size: 18, weight: 600, anchor: 'middle', fill: C.tealDark }) + T(250, cy - 18, 'come home', { size: 18, weight: 600, anchor: 'middle', fill: C.tealDark });
  b += para(250, cy + 22, 'Identity, history, justice; objects may have religious meaning', 200, { size: 16, anchor: 'middle', fill: C.muted }).s;
  b += T(650, cy - 110, 'Museum', { size: 19, weight: 700, anchor: 'middle' }) + T(650, cy - 86, 'director', { size: 19, weight: 700, anchor: 'middle' });
  b += T(650, cy - 40, 'Keep them, or', { size: 18, weight: 600, anchor: 'middle', fill: C.olive }) + T(650, cy - 18, 'share by loan', { size: 18, weight: 600, anchor: 'middle', fill: C.olive });
  b += para(650, cy + 22, 'Public access, conservation, legal duties; vested interest in visitors', 200, { size: 16, anchor: 'middle', fill: C.muted }).s;
  b += T(450, cy - 8, 'Both', { size: 17, weight: 700, anchor: 'middle' }) + T(450, cy + 14, 'might', { size: 17, weight: 700, anchor: 'middle' }) + T(450, cy + 36, 'accept', { size: 17, weight: 700, anchor: 'middle' }) + T(450, cy + 58, 'a loan', { size: 17, weight: 700, anchor: 'middle' });
  const yp = card(30, Y + 420, 840, { kicker: 'A THIRD VOICE', title: 'A young person from the community of origin', body: 'Wants to see the objects without travelling abroad: a connection to their own history, and the cost of travel.', tsize: 19 });
  b += yp.s;
  const Y2 = Y + 420 + yp.h + 26;
  b += T(450, Y2 + 4, 'Judge each statement differently', { size: 20, weight: 700, anchor: 'middle' });
  const r = row(Y2 + 24, [
    { kicker: 'HISTORICAL CLAIM', title: '“The objects were taken by force.”', body: 'Can be checked.' },
    { kicker: 'NEEDS EVIDENCE', kfill: C.olive, title: '“Museums keep objects safer.”', body: 'Needs evidence about conditions in each place.' },
    { kicker: 'VALUE', kfill: C.rust, title: '“Objects belong where they were made.”', body: 'Cannot be proved; judge whether the reasoning is consistent.' },
  ], { card: { tsize: 17, size: 16, pad: 16 } });
  b += r.s;
  add('02-restitution-perspectives',
    svg(900, Y2 + 24 + r.h + 30, 'Who wants what, and why: returning cultural objects', b),
    'Two overlapping circles: a community or government of origin wants objects returned for identity, history and justice; a museum director wants to keep or loan them for access, conservation and legal duties. The overlap shows both might accept a loan. Below, a young person wants to see the objects without travelling, and three statements are labelled a checkable historical claim, a claim needing evidence, and a value.',
    'Perspectives can overlap, and each type of statement is judged in a different way.',
    '## Perspectives: who thinks what, and why');
}

// 03 Cause and consequence chain: arts centre grant cut
add('03-arts-centre-chain',
  compose('From a grant cut to unequal access', [
    (y) => {
      const items = [
        ['CAUSE', 'Council cuts its grant to an arts centre', C.panel, C.panelEdge],
        ['', 'The centre raises prices to cover its costs', C.panel, C.panelEdge],
        ['CONSEQUENCE', 'Young people from lower-income families take part less', C.tealLight, C.tealDark],
        ['', 'Access to the arts becomes more unequal', C.tealLight, C.tealDark],
        ['PREDICTION', 'Fewer may choose creative careers later', C.cream, C.olive],
      ];
      let s = '', cy = y;
      items.forEach(([k, txt, f, e], i) => {
        const c = card(30, cy, 520, { kicker: k || undefined, kfill: k === 'PREDICTION' ? C.olive : C.tealDark, title: txt, fill: f, edge: e, tsize: 18, pad: 16, minH: 64, vcenter: true });
        s += c.s; cy += c.h;
        if (i < items.length - 1) { s += arrow(290, cy + 4, 290, cy + 30, { w: 3.5 }); cy += 34; }
      });
      const side = card(580, y + 40, 290, { kicker: 'EVALUATE', kfill: C.rust, title: 'Is price really the main barrier?', body: ['Lack of time, transport or confidence may matter as much.', 'Survey non-attenders about why they stay away before deciding.'], bullets: true, edge: C.rust, tsize: 18, size: 16 });
      s += side.s;
      return { s, h: cy - y };
    },
  ]),
  'A vertical chain: a council cuts an arts centre grant, the centre raises prices, young people from lower-income families take part less, access becomes more unequal, and fewer may later choose creative careers. A side panel asks whether price is really the main barrier, since time, transport or confidence may matter, and suggests surveying non-attenders.',
  'Follow the chain link by link, then test whether the first cause is really the main one.',
  '## Causes and consequences');

// 04 Correlation vs causation: the Bilbao effect
{
  const Y = 110;
  let b = panel(30, Y, 840, 330);
  b += panel(330, Y + 230, 240, 74, C.mustard, C.ink) + T(450, Y + 275, 'The city changes', { size: 20, weight: 700, anchor: 'middle' });
  const srcs = [[60, 'New cultural building', 'Guggenheim Museum Bilbao, opened 1997'], [330, 'New transport', ''], [600, 'Other investment', '']];
  srcs.forEach(([x, a, sub], i) => {
    b += panel(x, Y + 30, 240, sub ? 92 : 70, i === 0 ? C.cream : C.tealLight, i === 0 ? C.olive : C.tealDark) + T(x + 120, Y + 62, a, { size: 18, weight: 700, anchor: 'middle' });
    if (sub) b += para(x + 120, Y + 86, sub, 210, { size: 15, anchor: 'middle', fill: C.muted }).s;
    const sx = x + 120, sy = Y + (sub ? 122 : 100);
    b += arrow(sx, sy + 6, 450 + (i - 1) * 70, Y + 222, { w: 3.5, dash: i === 0 ? '9 7' : '', color: i === 0 ? C.olive : C.ink, marker: i === 0 ? 'ahO' : 'ah' });
  });
  b += `<circle cx="250" cy="${Y + 180}" r="18" fill="${C.panel}" stroke="${C.olive}" stroke-width="3"/>` + T(250, Y + 187, '?', { size: 21, weight: 700, anchor: 'middle', fill: C.olive });
  b += row(Y + 350, [
    { kicker: 'CORRELATION', title: 'Two things happening together', body: 'A city built a gallery, and the city grew.', edge: C.tealDark },
    { kicker: 'CAUSATION', kfill: C.rust, title: 'One thing causing the other', body: 'Needs evidence that rules out the other changes.', edge: C.rust },
  ], { gap: 24, card: { tsize: 19 } }).s;
  add('04-bilbao-effect',
    svg(900, Y + 350 + 150, 'The “Bilbao effect”: correlation or causation?', b),
    'Three possible causes point to the box The city changes: a new cultural building such as the Guggenheim Museum Bilbao (a dashed arrow with a question mark), new transport and other investment. Below, correlation means two things happening together; causation means one caused the other.',
    'A city changes for many reasons at once, so one building cannot be assumed to cause it all.',
    '## Causes and consequences');
}

// 05 Evaluating an economic impact claim
add('05-theatre-impact-claim',
  compose('Testing a “£4 back for every £1” claim', [
    (y) => card(30, y, 840, { kicker: 'LEAFLET FROM AN IMAGINARY THEATRE COMPANY', title: '“Every pound spent on theatre returns four to the local economy.”', fill: C.panel, edge: C.ink, tsize: 21 }),
    (y) => checklist(y, [
      { q: 'Who produced it?', note: 'The company itself: it has a vested interest in continued funding.', mark: 'x' },
      { q: 'How was the figure calculated?', note: 'The leaflet does not say who calculated it or how.', mark: 'x' },
      { q: 'Does it count spending that would happen anyway?', note: 'People eating out in town on another night may be included, so the real gain could be smaller.', mark: 'x' },
    ], { gap: 10 }),
    (y) => row(y, [
      { title: 'On its own', body: 'a weak claim', align: 'middle', fill: C.panel, edge: C.rust },
      { title: 'Stronger if…', body: 'an independent researcher produced it and explained the method', align: 'middle', fill: C.cream, edge: C.olive },
    ], { arrows: true, card: { tsize: 20 } }),
  ]),
  'A leaflet claims every pound spent on theatre returns four to the local economy. Three checks fail: the company has a vested interest, the method is not given, and the figure may count spending that would have happened anyway. The claim is weak on its own and would be stronger from an independent researcher who explains the method.',
  'Ask who produced a figure, how, and what it quietly counts.',
  '## Judging sources and evidence');

// 06 Assessing actions on local access
add('06-access-actions',
  compose('Judging actions to widen access to the arts', [
    (y) => chips(y, ['Effectiveness', 'Cost and who pays', 'Feasibility', 'Who benefits, who loses', 'Sustainability', 'Unintended effects'], { size: 17 }),
    (y) => table(y, ['Action', 'Strength', 'Limitation'], [
      ['Free museum days', 'Cheap', 'May mostly attract people who would have come anyway'],
      ['Discounted youth arts pass', 'Targets cost', 'Only works if cost is the real barrier'],
      ['Artists’ workshops in every secondary school', 'Reaches students who would never visit; builds skills over time', 'Needs timetable time; stops if funding ends'],
    ], [250, 290, 300], { size: 17 }),
    (y) => note(y, 'Workshops are the stronger option only if funded for several years and measured, for example by how many students join arts clubs afterwards.', { title: 'Judgement' }),
  ]),
  'Six criteria for judging actions (effectiveness, cost, feasibility, who benefits and loses, sustainability, unintended effects) above a table comparing free museum days, a discounted youth arts pass and artists’ workshops in schools, each with a strength and a limitation.',
  'Every action has a weakness; the judgement says when it would still be the best choice.',
  '## Courses of action and their effects');

// 07 Team Project ideas
add('07-team-project-ideas',
  compose('Team Project: issue, action, measure', [
    (y) => flowRows(y, ['Local issue', 'Possible action', 'How to measure success'], [
      ['Few arts activities for older residents', 'Art or music sessions at a community centre', 'Attendance; a before-and-after survey on enjoyment'],
      ['Graffiti on a school wall', 'Design and paint a mural with students and neighbours, with permission', 'Number involved; whether new graffiti appears'],
      ['A traditional craft fading locally', 'An older craftsperson teaches students in a workshop', 'Students who complete an item and want to continue'],
    ]),
    (y) => note(y, 'Start from a local issue and choose an action whose success you can actually measure.'),
  ]),
  'Three rows link a local issue to an action and a way to measure success: arts sessions for older residents measured by attendance and a survey; a mural on a graffiti wall measured by participation and new graffiti; a craft workshop measured by students who finish an item and want to continue.',
  'Every Team Project action needs a measure of success planned from the start.',
  '## Ideas for the Team Project');
