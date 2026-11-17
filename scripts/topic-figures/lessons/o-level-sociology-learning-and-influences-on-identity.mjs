import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'o-level-sociology-learning-and-influences-on-identity';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- Local layout helpers (self-contained copy; uses house style only) ----
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
  s += T(215, by - d + 104, left.tag || '', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(685, by + d + 104, right.tag || '', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  const r1 = row(y + 178, [{ title: left.title, body: left.items, bullets: true, edge: C.tealDark, tfill: C.tealDark }, { title: right.title, body: right.items, bullets: true, edge: C.olive, tfill: C.olive }], { gap: 30, card: { size: o.size ?? 17 } });
  s += r1.s;
  let h = 178 + r1.h;
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
  const x1 = 70, x2 = 830;
  const upH = Math.max(0, ...points.filter((_, i) => i % 2 === 0).map((p) => card(0, 0, o.labelW ?? 200, { title: p.label, body: p.note, tsize: 17, size: 15, pad: 12, align: 'middle' }).h));
  const ly = y + upH + 26;
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
  const ang = (i) => -Math.PI / 2 + (2 * Math.PI * i) / n;
  const rects = nodes.map((nd, i) => {
    const c0 = card(0, 0, cwid, { tsize: 18, size: 15, pad: 14, align: 'middle', ...nd });
    const px = cx + rx * Math.cos(ang(i)), py = cy + ry * Math.sin(ang(i));
    const x = Math.max(30, Math.min(870 - cwid, px - cwid / 2)), yy = py - c0.h / 2;
    return { x, y: yy, w: cwid, h: c0.h, nd };
  });
  const inside = (r, X, Y, m) => X > r.x - m && X < r.x + r.w + m && Y > r.y - m && Y < r.y + r.h + m;
  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n, a1 = ang(i), a2 = ang(i) + (2 * Math.PI) / n, pts = [];
    for (let k = 0; k <= 240; k++) { const a = a1 + ((a2 - a1) * k) / 240; const X = cx + rx * Math.cos(a), Y = cy + ry * Math.sin(a); if (!inside(rects[i], X, Y, 10) && !inside(rects[j], X, Y, 14)) pts.push([X, Y]); }
    if (pts.length > 2) arcs += `<path d="M${pts.map((p) => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' L')}" fill="none" stroke="${C.tealDark}" stroke-width="4" marker-end="url(#ahT)"/>`;
  }
  let minY = Infinity, maxY = -Infinity;
  rects.forEach((r) => { s += card(r.x, r.y, cwid, { tsize: 18, size: 15, pad: 14, align: 'middle', ...r.nd }).s; minY = Math.min(minY, r.y); maxY = Math.max(maxY, r.y + r.h); });
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

// Ladder of tagged paragraph steps (e.g. Knowledge / Application / Analysis / Evaluation). items [{tag, text}]. Returns {s,h}.
const LADDER_FILL = [C.panel, C.tealLight, C.teal, C.mustard];
function ladder(y, items, o = {}) {
  let s = '', cy = y; const tagW = o.tagW ?? 170;
  items.forEach((it, i) => {
    const c = card(30 + tagW + 14 + i * (o.step ?? 0), cy, 840 - tagW - 14 - i * (o.step ?? 0), { body: it.text, bfill: C.ink, size: o.size ?? 17, pad: 16 });
    s += `<rect x="30" y="${cy}" width="${tagW}" height="${c.h}" rx="14" fill="${it.fill || LADDER_FILL[i % 4]}" stroke="${C.ink}" stroke-width="2.5"/>` + T(30 + tagW / 2, cy + c.h / 2 + 7, it.tag, { size: 18, weight: 700, anchor: 'middle' }) + c.s;
    cy += c.h + (o.gap ?? 12);
  });
  return { s, h: cy - y - (o.gap ?? 12) };
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

// 01 Building blocks of a socially constructed society
add('01-building-blocks-of-culture',
  compose('How culture shapes identity', [
    (y) => {
      let s = panel(30, y, 840, 250, C.tealLight, C.tealDark) + T(55, y + 36, 'Culture: the shared way of life of a group', { size: 20, weight: 700, fill: C.tealDark });
      const r = row(y + 56, [
        { kicker: 'VALUES', title: 'What is important', body: 'e.g. respect for elders' },
        { kicker: 'NORMS', title: 'Rules based on values', body: 'e.g. removing shoes before entering a home' },
        { kicker: 'CUSTOMS', title: 'Long-established practices', body: 'e.g. wedding rituals such as mehndi' },
      ], { x: 50, w: 800, arrows: true, gap: 44, card: { size: 16, tsize: 18 } });
      return { s: s + r.s, h: 250 };
    },
    (y) => row(y, [
      { kicker: 'ROLES', title: 'Expected behaviour of a position', body: 'Prefect, elder sibling, shopkeeper' },
      { kicker: 'STATUS', title: 'Ascribed at birth or achieved', body: 'Caste or royal birth (ascribed); doctor (achieved)' },
      { kicker: 'STEREOTYPES', title: 'Fixed, oversimplified images', body: '“Boys don’t cry”' },
    ], { gap: 16, card: { size: 16, tsize: 18 } }),
    (y) => ({ s: arrow(450, y - 8, 450, y + 26, { w: 4 }), h: 22 }),
    (y) => card(30, y, 840, { title: 'Identity', body: 'People judge themselves by the roles and statuses they hold, and by how others respond to them.', fill: C.cream, edge: C.olive, align: 'middle', tsize: 21, bfill: C.ink }),
  ]),
  'Culture contains values, which become norms, which settle into customs, each with an example. Roles, status (ascribed or achieved) and stereotypes also shape behaviour. Together they feed identity, because people judge themselves by their roles and statuses and by how others respond.',
  'Social life feels natural, but every building block of it is made by people and learned.',
  '## What does "society is socially constructed" mean?');

// 02 Nature vs nurture
add('02-nature-nurture',
  compose('Nature or nurture?', [
    (y) => balance(y, { tag: 'NATURE', title: 'Nature: behaviour is inborn', items: ['Behaviour would be fixed by biology'] }, { tag: 'NURTURE', title: 'Nurture: behaviour is learned', items: ['Oxana Malaya, found in Ukraine in 1991 after years living largely among dogs, showed dog-like behaviour and limited speech', 'Relativity of culture: what is polite, beautiful or moral varies between societies and over time'] }, { tilt: 1, verdictTitle: 'Where sociologists stand', verdict: 'Sociologists stress nurture: human behaviour depends on socialisation.' }),
  ]),
  'A balance tipped towards nurture. Nature says behaviour is inborn. On the nurture side are the case of Oxana Malaya, who showed dog-like behaviour after years living among dogs, and the relativity of culture, since manners and morals vary between societies.',
  'Isolated children and cultural variation both point to nurture.',
  '## Is behaviour caused by nature or nurture?');

// 03 Socialisation across the life course
{
  const Y = 110, x0 = 290, x1 = 870, stages = ['Early childhood', 'Childhood', 'Teenage years', 'Adulthood'];
  const sw = (x1 - x0) / 4, X = (i) => x0 + i * sw;
  let b = '';
  // brackets
  b += path(`M${X(0) + 4},${Y + 40} L${X(0) + 4},${Y + 28} L${X(1) - 4},${Y + 28} L${X(1) - 4},${Y + 40}`, { stroke: C.olive, w: 3 }) + T((X(0) + X(1)) / 2, Y + 18, 'Primary', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  b += path(`M${X(1) + 4},${Y + 40} L${X(1) + 4},${Y + 28} L${X(4) - 4},${Y + 28} L${X(4) - 4},${Y + 40}`, { stroke: C.tealDark, w: 3 }) + T((X(1) + X(4)) / 2, Y + 18, 'Secondary socialisation: throughout life', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  stages.forEach((s, i) => {
    b += `<rect x="${X(i) + 2}" y="${Y + 48}" width="${sw - 4}" height="40" rx="8" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2"/>` + T(X(i) + sw / 2, Y + 74, s, { size: 16, weight: 700, anchor: 'middle' });
  });
  const rows = [
    ['Family', 'canalisation, role modelling', [[0, 1, 2], [1, 4, 1]], 'very powerful in early years'],
    ['Education', 'hidden curriculum', [[1, 3, 2]], 'reaches almost all children'],
    ['Peer group', 'peer pressure', [[1, 2, 1], [2, 3, 2], [3, 4, 1]], 'strong in teenage years'],
    ['Media', 'media representations', [[0, 4, 1]], 'constant exposure'],
    ['Religion', 'religious teachings', [[0, 4, 0]], 'strong in religious communities'],
    ['Workplace', 'workplace training', [[3, 4, 2]], 'adult occupational identity'],
  ];
  rows.forEach(([ag, pr, segs, note], i) => {
    const y = Y + 104 + i * 84;
    b += `<line x1="30" y1="${y + 78}" x2="870" y2="${y + 78}" stroke="${C.panelEdge}" stroke-width="1.5"/>`;
    b += T(30, y + 24, ag, { size: 19, weight: 700 }) + T(30, y + 46, pr, { size: 15, fill: C.muted }) + T(30, y + 66, note, { size: 15, fill: C.tealDark, italic: true });
    segs.forEach(([a, z, k]) => {
      const fill = k === 2 ? C.tealDark : k === 1 ? C.teal : C.tealLight;
      b += `<rect x="${X(a) + 4}" y="${y + 22}" width="${X(z) - X(a) - 8}" height="34" rx="9" fill="${fill}" stroke="${C.ink}" stroke-width="2"${k === 0 ? ' stroke-dasharray="6 5"' : ''}/>`;
    });
  });
  const ly = Y + 104 + 6 * 84 + 30;
  b += `<rect x="190" y="${ly - 16}" width="40" height="22" rx="6" fill="${C.tealDark}" stroke="${C.ink}" stroke-width="2"/>` + T(240, ly, 'strongest influence', { size: 16 });
  b += `<rect x="440" y="${ly - 16}" width="40" height="22" rx="6" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + T(490, ly, 'ongoing influence', { size: 16 });
  b += `<rect x="670" y="${ly - 16}" width="40" height="22" rx="6" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2" stroke-dasharray="6 5"/>` + T(720, ly, 'varies', { size: 16 });
  add('03-socialisation-across-life',
    svg(900, ly + 30, 'Agencies of socialisation across life', b),
    'A chart of six agencies of socialisation across early childhood, childhood, teenage years and adulthood. The family is strongest in the early years (primary socialisation); education spans childhood; peer pressure peaks in the teenage years; the media is constant; religion varies by community; workplace training shapes adults.',
    'Primary socialisation starts in the family; secondary agencies take over and continue for life.',
    '## What are primary and secondary socialisation?');
}

// 04 Theories of socialisation
{
  const Y = 110;
  let b = card(300, Y, 300, { title: 'Socialisation', align: 'middle', fill: C.cream, edge: C.olive, tsize: 21, minH: 56, vcenter: true }).s;
  b += T(160, Y + 112, 'CONSENSUS', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(600, Y + 112, 'CONFLICT', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  b += path(`M450,${Y + 58} L450,${Y + 80} M160,${Y + 80} L600,${Y + 80} M160,${Y + 80} L160,${Y + 94} M600,${Y + 80} L600,${Y + 94}`, { w: 3 });
  b += path(`M600,${Y + 122} L600,${Y + 134} M455,${Y + 134} L745,${Y + 134} M455,${Y + 134} L455,${Y + 146} M745,${Y + 134} L745,${Y + 146}`, { stroke: C.rust, w: 3 });
  const cy = Y + 146;
  const cs = [
    [30, 270, { kicker: 'FUNCTIONALISM', title: 'Passes on shared values', body: ['Creates value consensus and social cohesion', 'Problems come from inadequate socialisation, e.g. families failing to teach norms'], kfill: C.tealDark, edge: C.tealDark, fill: C.tealLight }],
    [310, 290, { kicker: 'MARXISM', title: 'Teaches capitalist ideology', body: ['Accepting hierarchy and inequality as normal', 'Reproduces social class', 'Bowles and Gintis (1976): hidden curriculum prepares obedient workers'], kfill: C.rust, edge: C.rust }],
    [610, 260, { kicker: 'FEMINISM', title: 'Gender role socialisation', body: ['Teaches masculinity and femininity in ways that keep women subordinate'], kfill: C.rust, edge: C.rust }],
  ];
  const h = Math.max(...cs.map(([x, w, o]) => card(x, cy, w, { ...o, bullets: true, size: 16, tsize: 18 }).h));
  cs.forEach(([x, w, o]) => { b += card(x, cy, w, { ...o, bullets: true, size: 16, tsize: 18, minH: h }).s; });
  b += path(`M160,${Y + 122} L160,${cy}`, { stroke: C.tealDark, w: 3 });
  const sy = cy + h + 20;
  b += T(30, sy + 20, 'Sue Sharpe, Just Like a Girl: girls’ priorities changed', { size: 19, weight: 700 });
  const r = row(sy + 36, [
    { kicker: '1976', title: 'Marriage and children', body: 'Working-class girls in London', fill: C.panel },
    { kicker: '1990s REPEAT', title: 'Jobs and careers', body: 'Priorities had shifted', fill: C.cream, edge: C.olive },
  ], { arrows: true, gap: 60, card: { size: 16, tsize: 19, align: 'middle', kfill: C.olive } });
  b += r.s;
  add('04-theories-of-socialisation',
    svg(900, sy + 36 + r.h + 30, 'Consensus and conflict views of socialisation', b),
    'A tree splitting socialisation into a consensus view and conflict views. Functionalism says it passes on shared values and creates cohesion. Marxism says it teaches capitalist ideology and reproduces class (Bowles and Gintis, 1976). Feminism says gender role socialisation keeps women subordinate. Sharpe found girls’ priorities shifted from marriage and children in 1976 to jobs and careers in the 1990s.',
    'Functionalists see socialisation as sharing values; Marxists and feminists see it as reproducing inequality.',
    '## How do sociological theories explain socialisation?');
}

// 05 Globalisation and identity
{
  const Y = 110;
  let b = card(250, Y, 400, { title: 'Global media, brands and mixing cultures', align: 'middle', fill: C.tealLight, edge: C.tealDark, tsize: 20 }).s;
  const cy = Y + 150;
  const cs = [
    { title: 'Homogenisation', body: 'Identities become more alike under global media and brands.' },
    { title: 'Hybrid identities', body: 'Cultures mix, e.g. young people of South Asian heritage in the UK or Gulf states combining traditions.', fill: C.cream, edge: C.olive },
    { title: 'Cultural defence', body: 'Groups reinforce their language, dress or religion.' },
  ];
  const r = row(cy, cs, { gap: 30, card: { size: 16, tsize: 20 } });
  b += r.s + arrow(350, Y + 92, 170, cy - 8) + arrow(450, Y + 92, 450, cy - 8) + arrow(550, Y + 92, 730, cy - 8);
  const n = note(cy + r.h + 20, 'Multiculturalism and global culture can enrich identity and connect people, but may also cause tension and weaken local traditions.');
  b += n.s;
  add('05-globalisation-and-identity',
    svg(900, cy + r.h + 20 + n.h + 30, 'Three ways globalisation affects identity', b),
    'Global media, brands and mixing cultures lead to three outcomes: homogenisation, where identities become more alike; hybrid identities, such as young people of South Asian heritage combining traditions; and cultural defence, where groups reinforce language, dress or religion.',
    'Globalisation can make identities more alike, mix them, or make people defend them.',
    '## What influences social identity?');
}

// 06 Chosen or limited identity
{
  const Y = 110;
  let b = panel(30, Y, 840, 330);
  b += T(55, Y + 40, 'Postmodernists: “pick and mix” your identity', { size: 21, weight: 700, fill: C.tealDark });
  b += chips(Y + 64, ['consumption', 'lifestyle', 'digital identities'], { x: 50, w: 800, size: 18, h: 46 }).s;
  const lims = ['money', 'family expectations', 'religion', 'class'];
  b += T(450, Y + 176, 'Critics: choice is still limited by…', { size: 19, weight: 700, anchor: 'middle', fill: C.rust });
  lims.forEach((l, i) => {
    const x = 55 + i * 202;
    b += `<rect x="${x}" y="${Y + 210}" width="186" height="90" rx="10" fill="${C.cream}" stroke="${C.rust}" stroke-width="3"/>` + T(x + 93, Y + 261, l, { size: 17, weight: 700, anchor: 'middle' });
  });
  const y2 = Y + 350;
  const r = row(y2, [
    { kicker: 'DIGITAL SELF: POSITIVES', title: '', body: ['Self-expression', 'Connection with distant relatives', 'Support networks'], bullets: true, kfill: C.tealDark, edge: C.tealDark, fill: C.tealLight },
    { kicker: 'DIGITAL SELF: NEGATIVES', title: '', body: ['Cyberbullying', 'Pressure to look perfect', 'Privacy risks'], bullets: true, kfill: C.rust, edge: C.rust },
  ], { gap: 20, card: { size: 17 } });
  b += r.s;
  add('06-chosen-or-limited-identity',
    svg(900, y2 + r.h + 30, 'Is identity chosen?', b),
    'Postmodernists say people pick and mix identities through consumption, lifestyle and digital identities. Critics reply that money, family expectations, religion and class still limit choice. The digital self brings expression, connection and support, but also cyberbullying, pressure to look perfect and privacy risks.',
    'Identity may feel chosen, but money, family, religion and class still set limits.',
    '## What influences social identity?');
}
