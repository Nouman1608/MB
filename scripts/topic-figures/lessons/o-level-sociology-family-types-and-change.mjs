import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'o-level-sociology-family-types-and-change';
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

// Person icon: (cx, cy) is body centre; k scale; fill; op opacity
const person = (cx, cy, k = 1, fill = C.teal, op = 1) =>
  `<g opacity="${op}"><circle cx="${cx}" cy="${cy - 14 * k}" r="${8 * k}" fill="${fill}" stroke="${C.ink}" stroke-width="2.2"/><rect x="${cx - 11 * k}" y="${cy - 4 * k}" width="${22 * k}" height="${19 * k}" rx="${8 * k}" fill="${fill}" stroke="${C.ink}" stroke-width="2.2"/></g>`;
const ln = (x1, y1, x2, y2, o = {}) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${o.c || C.ink}" stroke-width="${o.w || 2.2}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
const OLD = C.rock, AD = C.teal, CH = C.mustard;
// couple at (x1,x2) row y, with marriage line
const couple = (x1, x2, y, fill = AD, k = 1) => ln(x1 + 11 * k, y + 4 * k, x2 - 11 * k, y + 4 * k) + person(x1, y, k, fill) + person(x2, y, k, fill);
// children under a point
const kids = (px, py, xs, y, k = 0.8, op = 1) => `<g opacity="${op}">` + ln(px, py, px, y - 32 * k) + (xs.length > 1 ? ln(xs[0], y - 32 * k, xs[xs.length - 1], y - 32 * k) : '') + xs.map((x) => ln(x, y - 32 * k, x, y - 22 * k)).join('') + xs.map((x) => person(x, y, k, CH)).join('') + '</g>';

// 01 Family structures
{
  const W = 198, G = 16, H = 262, Y = 110;
  const fams = [
    ['Nuclear', 'Two parents and their children', (cx, y) => couple(cx - 28, cx + 28, y + 30) + kids(cx, y + 34, [cx - 22, cx + 22], y + 100)],
    ['Extended: horizontal', 'Same generation: siblings, cousins or in-laws', (cx, y) => couple(cx - 72, cx - 34, y + 30, AD, 0.85) + couple(cx + 34, cx + 72, y + 30, AD, 0.85) + ln(cx - 34 + 10, y + 12, cx + 34 - 10, y + 12, { dash: '4 4' }) + kids(cx - 53, y + 34, [cx - 70, cx - 36], y + 100, 0.7) + kids(cx + 53, y + 34, [cx + 36, cx + 70], y + 100, 0.7)],
    ['Vertical (beanpole)', 'Several generations, few members in each', (cx, y) => couple(cx - 24, cx + 24, y + 18, OLD, 0.72) + ln(cx, y + 21, cx, y + 38) + couple(cx - 24, cx + 24, y + 54, OLD, 0.72) + ln(cx, y + 57, cx, y + 74) + couple(cx - 24, cx + 24, y + 90, AD, 0.72) + ln(cx, y + 93, cx, y + 110) + person(cx, y + 128, 0.72, CH)],
    ['Modified extended', 'Relatives live apart but keep frequent contact', (cx, y) => couple(cx - 72, cx - 40, y + 40, OLD, 0.8) + couple(cx + 40, cx + 72, y + 40, AD, 0.8) + person(cx + 56, y + 95, 0.7, CH) + ln(cx + 56, y + 43, cx + 56, y + 72) + `<path d="M${cx - 40},${y + 75} Q${cx},${y + 120} ${cx + 30},${y + 80}" fill="none" stroke="${C.tealDark}" stroke-width="2.5" stroke-dasharray="6 5"/>` + T(cx - 28, y + 118, 'contact', { size: 15, fill: C.tealDark, anchor: 'middle' })],
    ['Reconstituted', 'Step-family formed after divorce or death', (cx, y) => couple(cx - 28, cx + 28, y + 30) + ln(cx - 28, y + 46, cx - 40, y + 76) + person(cx - 44, y + 100, 0.8, CH) + ln(cx + 28, y + 46, cx + 40, y + 76) + person(cx + 44, y + 100, 0.8, CH)],
    ['Lone parent', 'One parent with dependent children', (cx, y) => person(cx, y + 30) + kids(cx, y + 46, [cx - 22, cx + 22], y + 100)],
    ['Empty nest', 'Couple whose children have left home', (cx, y) => couple(cx - 66, cx - 22, y + 60) + arrow(cx - 4, y + 64, cx + 34, y + 64, { w: 2.5 }) + person(cx + 56, y + 40, 0.7, CH, 0.4) + person(cx + 78, y + 84, 0.7, CH, 0.4)],
    ['Childless', 'Couple without children, by choice or not', (cx, y) => couple(cx - 28, cx + 28, y + 55)],
  ];
  let b = '';
  fams.forEach(([name, desc, draw], i) => {
    const col = i % 4, rw = Math.floor(i / 4), x = 30 + col * (W + G), y = Y + rw * (H + 16), cx = x + W / 2;
    b += panel(x, y, W, H);
    b += T(cx, y + 32, name, { size: 18, weight: 700, anchor: 'middle' });
    b += `<g>${draw(cx, y + 56)}</g>`;
    const ls = wrap(desc, W - 24, 15);
    b += ls.map((l, k) => T(cx, y + 210 + k * 20, l, { size: 15, anchor: 'middle', fill: C.muted })).join('');
  });
  const ly = Y + 2 * H + 16 + 30;
  b += person(300, ly, 0.7, OLD) + T(316, ly + 6, 'older generation', { size: 16 }) + person(480, ly, 0.7, AD) + T(496, ly + 6, 'adults', { size: 16 }) + person(600, ly, 0.7, CH) + T(616, ly + 6, 'children', { size: 16 });
  add('01-family-structures',
    svg(900, ly + 34, 'Eight family structures', b),
    'Eight small family diagrams: nuclear (two parents and children), horizontal extended (two couples of the same generation with their children), beanpole (four generations with few members each), modified extended (relatives in separate homes keeping contact), reconstituted (a step-family), lone parent, empty nest (children have left) and childless.',
    'Family structures differ in how many generations and how many members per generation they hold.',
    '## What family structures are there?');
}

// 02 Demographic change makes families long and thin
{
  const Y = 110;
  let b = panel(30, Y, 400, 380) + panel(470, Y, 400, 380, C.tealLight, C.tealDark);
  b += T(230, Y + 36, 'Wide and short', { size: 21, weight: 700, anchor: 'middle' }) + T(230, Y + 62, 'many children, fewer generations', { size: 16, anchor: 'middle', fill: C.muted });
  b += T(670, Y + 36, 'Long and thin: beanpole', { size: 21, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(670, Y + 62, 'few children, more generations', { size: 16, anchor: 'middle', fill: C.muted });
  // wide
  b += couple(200, 260, Y + 150) + kids(230, Y + 154, [90, 145, 200, 260, 315, 370], Y + 240, 0.85);
  // thin
  b += couple(645, 695, Y + 112, OLD, 0.8) + ln(670, Y + 115, 670, Y + 140) + couple(645, 695, Y + 172, OLD, 0.8) + ln(670, Y + 175, 670, Y + 200) + couple(645, 695, Y + 232, AD, 0.8) + ln(670, Y + 235, 670, Y + 260) + person(670, Y + 296, 0.8, CH);
  b += `<path d="M430,${Y + 190} L470,${Y + 190}" stroke="${C.ink}" stroke-width="4" marker-end="url(#ah)"/>`;
  const y2 = Y + 400;
  const r = row(y2, [
    { title: 'Smaller families', body: 'Falling birth rates: contraception, the cost of children, women’s education and careers.', edge: C.olive, fill: C.cream },
    { title: 'Longer life', body: 'Longer life expectancy and an ageing population: more grandparents and great-grandparents.', edge: C.tealDark, fill: C.tealLight },
    { title: 'Children later', body: 'Longer education and careers delay parenthood.' },
  ], { gap: 16, card: { size: 16, tsize: 19 } });
  b += r.s;
  add('02-demographic-change-beanpole',
    svg(900, y2 + r.h + 30, 'How demographic change reshapes families', b),
    'Two family trees. A wide, short family has many children and fewer generations alive; a long, thin beanpole family has four generations with few members each. Below, three causes: falling birth rates make families smaller, longer life expectancy adds generations, and parenthood comes later.',
    'Fewer births and longer lives turn wide families into tall, thin beanpoles.',
    '## How are demographic changes affecting families? (4.3.1)');
}

// 03 Diversity debate
add('03-diversity-debate',
  compose('Is family diversity a good thing?', [
    (y) => row(y, [
      { kicker: 'NEW RIGHT', title: 'No: the nuclear family is best', body: ['The married two-parent family is best for children and society', 'Lone-parent and other “non-traditional” families are linked to poor socialisation and dysfunctional families'], bullets: true, kfill: C.rust, edge: C.rust },
      { kicker: 'POSTMODERNISTS', title: 'Yes: people choose what suits them', body: ['Diversity is positive', 'Judith Stacey (1990): women created new family forms after divorce'], bullets: true, kfill: C.tealDark, edge: C.tealDark, fill: C.tealLight },
    ], { gap: 20, card: { size: 17, tsize: 20 } }),
    (y) => card(30, y, 840, { kicker: 'HOW DOMINANT IS THE NUCLEAR FAMILY?', title: 'Robert Chester (1985): most people still spend part of their lives in a nuclear family', body: 'Often a “neo-conventional” one, where both partners work.', kfill: C.olive, fill: C.cream, edge: C.olive, tsize: 19 }),
  ]),
  'The New Right argue the married two-parent nuclear family is best and link non-traditional families to poor socialisation. Postmodernists such as Judith Stacey see diversity as positive. Robert Chester adds that most people still spend part of their lives in a nuclear family, often a neo-conventional one.',
  'The New Right fear diversity, postmodernists welcome it, and Chester says the nuclear family is still common.',
  '## Do sociologists welcome family diversity?');

// 04 Parsons and his critics
{
  const Y = 110;
  let b = card(30, Y, 840, { kicker: 'PARSONS’ CLAIM', title: 'The isolated nuclear family “fits” industrial society because it is geographically mobile', kfill: C.olive, fill: C.cream, edge: C.olive, tsize: 19 }).s;
  const ty = Y + 170;
  b += arrow(60, ty, 850, ty, { w: 5 });
  b += `<rect x="60" y="${ty - 22}" width="370" height="44" rx="10" fill="${C.tealLight}"/>` + T(245, ty + 7, 'Pre-industrial', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += `<rect x="470" y="${ty - 22}" width="360" height="44" rx="10" fill="${C.sand}"/>` + T(650, ty + 7, 'Industrial', { size: 18, weight: 700, anchor: 'middle', fill: C.olive });
  b += ln(245, ty + 22, 245, ty + 50) + ln(650, ty + 22, 650, ty + 50);
  const l = card(30, ty + 50, 410, { kicker: 'PETER LASLETT (1972)', title: 'Nuclear households were already common', body: 'in pre-industrial England, before industrialisation.', kfill: C.rust, edge: C.rust, tsize: 19 });
  const r = card(460, ty + 50, 410, { kicker: 'MICHAEL ANDERSON (1971)', title: 'Families shared homes with relatives', body: '1851 census, Preston: working-class families did this to cope with industrial hardship.', kfill: C.rust, edge: C.rust, tsize: 19 });
  const h = Math.max(l.h, r.h);
  b += card(30, ty + 50, 410, { kicker: 'PETER LASLETT (1972)', title: 'Nuclear households were already common', body: 'in pre-industrial England, before industrialisation.', kfill: C.rust, edge: C.rust, tsize: 19, minH: h }).s;
  b += card(460, ty + 50, 410, { kicker: 'MICHAEL ANDERSON (1971)', title: 'Families shared homes with relatives', body: '1851 census, Preston: working-class families did this to cope with industrial hardship.', kfill: C.rust, edge: C.rust, tsize: 19, minH: h }).s;
  const n = note(ty + 50 + h + 18, 'Both findings challenge Parsons: the nuclear family came before industry, and industry did not end extended living.');
  b += n.s;
  add('04-parsons-and-critics',
    svg(900, ty + 50 + h + 18 + n.h + 30, 'Did industrialisation create the nuclear family?', b),
    'Parsons claimed the mobile nuclear family fits industrial society. On a timeline, Laslett (1972) found nuclear households were already common in pre-industrial England, and Anderson (1971) found working-class families in 1851 Preston sharing homes with relatives to cope with industrial hardship.',
    'Historians found nuclear families before industry and extended living during it.',
    '## Did industrialisation create the nuclear family? (4.3.2)');
}

// 05 Forces on marriage and divorce
add('05-marriage-divorce-forces',
  compose('What is changing marriage, divorce and cohabitation?', [
    (y) => {
      const L = { kicker: 'LOOSENING MARRIAGE', title: 'Less pressure to marry or stay married', body: ['Legislation: easier divorce, women’s rights in divorce (e.g. Pakistan’s 1961 ordinance)', 'Attitudes and values: less stigma on divorce and cohabitation', 'Secularisation: declining religious influence', 'Female empowerment: education and income let women leave unhappy marriages', 'The internet: dating apps widen partner choice'], bullets: true, kfill: C.tealDark, edge: C.tealDark, fill: C.tealLight, size: 17, tsize: 19 };
      const R = { kicker: 'HOLDING TRADITION', title: 'Cultural expectations', body: 'Some cultures still expect early, arranged marriage.', kfill: C.rust, edge: C.rust, size: 17, tsize: 19 };
      const h = Math.max(card(30, y, 560, L).h, card(610, y, 260, R).h);
      return { s: card(30, y, 560, { ...L, minH: h }).s + card(610, y, 260, { ...R, minH: h, vcenter: true }).s, h };
    },
    (y) => label(y, 'Alternatives to marriage'),
    (y) => chips(y, ['cohabitation', 'singlehood', 'lone parenthood', 'civil partnerships (where legal)'], { size: 17 }),
  ]),
  'Factors loosening the pressure to marry or stay married: easier divorce laws, less stigma, secularisation, female empowerment and the internet widening partner choice. Cultural expectations of early, arranged marriage hold traditions in place. Alternatives to marriage include cohabitation, singlehood, lone parenthood and civil partnerships.',
  'Most forces loosen marriage; cultural expectations can still hold it in place.',
  '## Why are marriage, divorce and cohabitation changing? (4.3.3 and 4.3.4)');

// 06 Changing roles
add('06-changing-family-roles',
  compose('How family roles are changing', [
    (y) => row(y, [
      { kicker: 'PARTNERS', title: 'Segregated → more joint roles', body: ['Willmott and Young (1973): couples share tasks and decisions', 'Dual-worker families now common', 'Feminists: women still do most domestic work'], bullets: true, kfill: C.tealDark },
      { kicker: 'CHILDREN', title: 'Economic asset → economic cost', body: ['Families more child-centred', 'Boomerang children return home as adults (housing costs, unemployment)'], bullets: true, kfill: C.tealDark },
      { kicker: 'GRANDPARENTS', title: 'Givers and receivers of care', body: ['Childcare, economic support, wisdom and advice', 'Some become dependent and need care'], bullets: true, kfill: C.tealDark },
    ], { gap: 14, card: { size: 16, tsize: 19 } }),
    (y) => {
      const s = card(30, y, 840, { kicker: 'THE PIVOT OR SANDWICH GENERATION', body: ' ', kfill: C.olive, fill: C.cream, edge: C.olive, minH: 150 }).s +
        couple(165, 225, y + 90, OLD) + T(195, y + 136, 'elderly parents', { size: 16, anchor: 'middle', fill: C.ink }) +
        arrow(385, y + 86, 262, y + 86, { color: C.olive, marker: 'ahO', w: 3.5 }) +
        couple(420, 480, y + 90, AD) + T(450, y + 136, 'cares for both', { size: 16, anchor: 'middle', fill: C.olive, weight: 700 }) +
        arrow(515, y + 86, 640, y + 86, { color: C.olive, marker: 'ahO', w: 3.5 }) +
        person(680, y + 92, 0.85, CH) + person(720, y + 92, 0.85, CH) + T(700, y + 136, 'children', { size: 16, anchor: 'middle', fill: C.ink });
      return { s, h: 150 };
    },
  ]),
  'Three changes in roles: partners moving from segregated to more joint roles, though feminists find women still do most domestic work; children changing from an economic asset to a cost; grandparents giving childcare and support but sometimes needing care. The sandwich generation cares for both elderly parents and children.',
  'Roles are shifting for partners, children and grandparents, and the middle generation is squeezed.',
  '## How are family roles changing? (4.3.5)');
