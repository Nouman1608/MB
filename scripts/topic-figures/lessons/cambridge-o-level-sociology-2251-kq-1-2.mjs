import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-sociology-2251-kq-1-2';
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

function compareRows(y, leftHead, rightHead, rows, o = {}) {
  let s = T(195, y + 22, leftHead, { size: 21, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(705, y + 22, rightHead, { size: 21, weight: 700, anchor: 'middle', fill: C.olive });
  let cy = y + 40;
  rows.forEach(([lab, l, r]) => {
    const a = card(30, cy, 330, { body: l, size: 17, pad: 14, bfill: C.ink, fill: C.tealLight, edge: C.tealDark, align: 'middle' });
    const b = card(540, cy, 330, { body: r, size: 17, pad: 14, bfill: C.ink, fill: C.cream, edge: C.olive, align: 'middle' });
    const h = Math.max(a.h, b.h);
    s += card(30, cy, 330, { body: l, size: 17, pad: 14, bfill: C.ink, fill: C.tealLight, edge: C.tealDark, align: 'middle', minH: h, vcenter: true }).s;
    s += card(540, cy, 330, { body: r, size: 17, pad: 14, bfill: C.ink, fill: C.cream, edge: C.olive, align: 'middle', minH: h, vcenter: true }).s;
    s += `<rect x="378" y="${cy + h / 2 - 19}" width="144" height="38" rx="19" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + T(450, cy + h / 2 + 6, lab, { size: 16, weight: 700, anchor: 'middle' });
    s += `<line x1="360" y1="${cy + h / 2}" x2="378" y2="${cy + h / 2}" stroke="${C.ink}" stroke-width="2.5"/><line x1="522" y1="${cy + h / 2}" x2="540" y2="${cy + h / 2}" stroke="${C.ink}" stroke-width="2.5"/>`;
    cy += h + (o.gap ?? 12);
  });
  return { s, h: cy - y - (o.gap ?? 12) };
}

const box = (x, y, w, h, text, o = {}) => card(x, y, w, { title: text, align: 'middle', minH: h, vcenter: true, tsize: o.tsize ?? 18, fill: o.fill ?? C.panel, edge: o.edge ?? C.ink, tfill: o.tfill ?? C.ink, pad: o.pad ?? 12 }).s;
// Vertical timeline: events [{date, title, body, hl}]. Returns {s,h}.
function timeline(y, events, o = {}) {
  const dx = o.dateW ?? 150, lx = 30 + dx + 26; let s = '', cy = y;
  const mids = [];
  events.forEach((ev) => {
    const c = card(lx + 30, cy, 870 - lx - 30, { title: ev.title, body: ev.body, tsize: o.tsize ?? 19, size: o.size ?? 16, pad: 14, fill: ev.hl ? C.cream : C.panel, edge: ev.hl ? C.olive : C.panelEdge });
    const m = cy + c.h / 2; mids.push(m);
    s += c.s + `<circle cx="${lx}" cy="${m}" r="11" fill="${ev.hl ? C.mustard : C.teal}" stroke="${C.ink}" stroke-width="3"/>` + T(lx - 24, m + 7, ev.date, { size: o.dsize ?? 19, weight: 700, anchor: 'end', fill: C.tealDark });
    cy += c.h + (o.gap ?? 12);
  });
  const line = `<line x1="${lx}" y1="${mids[0]}" x2="${lx}" y2="${mids[mids.length - 1]}" stroke="${C.ink}" stroke-width="4"/>`;
  return { s: line + s, h: cy - y - (o.gap ?? 12) };
}
// Two columns of bulleted cards side by side with headers. Returns {s,h}.
function twoCol(y, L, R, o = {}) {
  return row(y, [
    { title: L.title, body: L.items, bullets: L.bullets ?? true, fill: L.fill ?? C.tealLight, edge: L.edge ?? C.tealDark, tfill: L.tfill ?? C.tealDark, bfill: C.ink },
    { title: R.title, body: R.items, bullets: R.bullets ?? true, fill: R.fill ?? C.cream, edge: R.edge ?? C.olive, tfill: R.tfill ?? C.olive, bfill: C.ink },
  ], { gap: o.gap ?? 24, card: { size: o.size ?? 17, tsize: o.tsize ?? 21 } });
}
// ---- end helpers ----

// ---- lesson figures ----

// 01 Classify twice: 2x2 grid
{
  const Y = 110, gx = 250, gw = 300, gh = 170;
  let s = '';
  s += T(gx + gw, Y + 24, 'What form does it take?', { size: 19, weight: 700, anchor: 'middle', fill: C.olive });
  s += T(gx + gw / 2, Y + 62, 'Quantitative (numbers)', { size: 18, weight: 700, anchor: 'middle' }) + T(gx + gw * 1.5, Y + 62, 'Qualitative (words, images, sound)', { size: 18, weight: 700, anchor: 'middle' });
  const rowsL = [['Primary', 'collected by the researcher for this study'], ['Secondary', 'already exists, made by someone else for another reason']];
  rowsL.forEach(([h, d], i) => {
    const y = Y + 80 + i * gh;
    s += card(30, y, 205, { title: h, body: d, minH: gh - 10, vcenter: true, fill: C.tealLight, edge: C.tealDark, tfill: C.tealDark, size: 15, tsize: 19, pad: 14 }).s;
  });
  const cells = [
    ['A researcher’s own survey', 'Primary quantitative'],
    ['Your own unstructured interview transcript', 'Primary qualitative'],
    ['A government household survey', 'Secondary quantitative'],
    ['A diary', 'Secondary qualitative'],
  ];
  cells.forEach(([ex, lab], k) => {
    const x = gx + (k % 2) * (gw + 10), y = Y + 80 + Math.floor(k / 2) * gh;
    s += card(x, y, gw, { kicker: lab.toUpperCase(), title: ex, minH: gh - 10, vcenter: true, align: 'middle', fill: k === 3 || k === 2 ? C.cream : C.panel, edge: k >= 2 ? C.olive : C.panelEdge, kfill: k >= 2 ? C.olive : C.tealDark, tsize: 19 }).s;
  });
  s += T(140, Y + 62, 'Who collected it?', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  const n = note(Y + 80 + 2 * gh + 8, 'Classify both ways before you evaluate: secondary data saves time and money but was not designed for your aims; quantitative data is easy to compare but rarely explains why.');
  add('01-classify-data-twice',
    svg(900, Y + 80 + 2 * gh + 8 + n.h + 28, 'Every piece of data is classified twice', s + n.s),
    'A two-by-two grid. Rows ask who collected the data, primary or secondary; columns ask what form it takes, quantitative or qualitative. Examples: a researcher’s own survey is primary quantitative, an unstructured interview transcript is primary qualitative, a government household survey is secondary quantitative and a diary is secondary qualitative.',
    'Primary or secondary is about who collected it; quantitative or qualitative is about its form.',
    '## Two separate questions about any piece of data');
}

// 02 Scott's four criteria
add('02-scott-four-criteria',
  compose('Four tests for any document', [
    (y) => {
      const items = [
        ['1', 'Authenticity', 'Is it genuine, and is it what it claims to be?'],
        ['2', 'Credibility', 'Is it sincere and accurate, free from distortion?'],
        ['3', 'Representativeness', 'Is it typical of documents of its kind, and do enough survive?'],
        ['4', 'Meaning', 'Can the researcher understand what it meant to the people who produced it?'],
      ].map(([k, ti, b], i) => ({ kicker: 'TEST ' + k, title: ti, body: b, fill: i === 1 || i === 2 ? C.cream : C.tealLight, edge: i === 1 || i === 2 ? C.olive : C.tealDark, kfill: i === 1 || i === 2 ? C.olive : C.tealDark, bfill: C.ink }));
      const a = row(y, items.slice(0, 2), { card: { tsize: 21, size: 17, pad: 18 }, gap: 18 });
      const b = row(y + a.h + 16, items.slice(2), { card: { tsize: 21, size: 17, pad: 18 }, gap: 18 });
      return { s: a.s + b.s, h: a.h + 16 + b.h };
    },
    (y) => note(y, 'From John Scott, A Matter of Record (1990). Apply all four questions to each type of secondary evidence.'),
  ]),
  'Four criteria for judging documents from John Scott’s A Matter of Record (1990): authenticity (is it genuine?), credibility (is it sincere and accurate?), representativeness (is it typical, and do enough survive?) and meaning (can the researcher understand it?).',
  'Scott’s four questions give a structure for evaluating any secondary source.',
  '## Judging secondary evidence');

// 03 Secondary evidence strengths and limitations
add('03-secondary-evidence-types',
  compose('Five kinds of secondary evidence', [
    (y) => table(y, ['Type', 'Key strength', 'Key limitation'], [
      ['Official statistics', 'Large coverage; regular, so trends can be compared', 'Categories change; dark figure; socially constructed'],
      ['Historical documents', 'Often the only evidence about the past; no observer effect', 'Authenticity hard to establish; records of the powerful over-represented'],
      ['Personal documents', 'Rich detail in the person’s own words; supports verstehen', 'May exaggerate; rarely representative; privacy'],
      ['Digital sources', 'Vast, current; reach hidden or scattered groups', 'May be fake or automated; users not representative'],
      ['Media content', 'Cheap, plentiful; content analysis can be repeated', 'Reflects owners and editors; says little about audiences'],
    ], [210, 315, 315], { size: 16 }),
  ]),
  'A table of five kinds of secondary evidence with a key strength and limitation each: official statistics, historical documents, personal documents, digital sources and media content.',
  'Each type of secondary evidence has its own typical strength and weakness.',
  '## Judging secondary evidence');

// 04 Dark figure of crime
{
  const Y = 110;
  const lev = [
    ['All offences committed', 780, C.tealLight],
    ['Offences reported to the police', 600, C.teal],
    ['Offences recorded by the police', 420, C.mustard],
  ];
  let s = '';
  lev.forEach(([lab, w, f], i) => {
    const y = Y + 10 + i * 92, x = 450 - w / 2;
    s += `<rect x="${x}" y="${y}" width="${w}" height="74" rx="12" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + T(450, y + 45, lab, { size: 20, weight: 700, anchor: 'middle' });
    if (i === 1) s += T(x + w + 14, y + 44, 'not reported', { size: 17, weight: 700, fill: C.rust });
    if (i === 2) s += T(x + w + 14, y + 44, 'not recorded', { size: 17, weight: 700, fill: C.rust });
  });
  const sideL = card(30, Y + 300, 405, { title: 'The dark figure of crime', body: 'Offences never reported to or recorded by the police. They never appear in the statistics.', tfill: C.rust, edge: C.rust, size: 16, tsize: 19 });
  const sideR = card(465, Y + 300, 405, { title: 'Socially constructed', body: 'Interpretivists argue the figures are made by officials’ recording decisions, so they show how institutions work as much as how people behave.', tfill: C.tealDark, edge: C.tealDark, size: 16, tsize: 19 });
  const h = Math.max(sideL.h, sideR.h);
  s += card(30, Y + 300, 405, { title: 'The dark figure of crime', body: 'Offences never reported to or recorded by the police. They never appear in the statistics.', tfill: C.rust, edge: C.rust, size: 16, tsize: 19, minH: h }).s;
  s += card(465, Y + 300, 405, { title: 'Socially constructed', body: 'Interpretivists argue the figures are made by officials’ recording decisions, so they show how institutions work as much as how people behave.', tfill: C.tealDark, edge: C.tealDark, size: 16, tsize: 19, minH: h }).s;
  add('04-dark-figure-of-crime',
    svg(900, Y + 300 + h + 30, 'Why crime statistics are incomplete', s),
    'Three narrowing bars: all offences committed, fewer offences reported to the police, and fewer still recorded by the police. The gap is the dark figure of crime. A second box notes the interpretivist view that statistics are socially constructed by officials’ decisions.',
    'Recorded crime is only the part of crime that is both reported and recorded.',
    '## Judging secondary evidence');
}

// 05 Five-step routine
add('05-five-step-routine',
  compose('Reading a table, chart or graph: five steps', [
    (y) => steps(y, [
      { title: 'Title, source, date', body: 'What is being measured, by whom, and when?' },
      { title: 'Units', body: 'Percentages, numbers, rates per 1,000 or index values? Percentages hide how many people are behind each figure.' },
      { title: 'The overall pattern first', body: 'Rising, falling, stable, or different between groups?' },
      { title: 'The precise detail second', body: 'Quote exact figures, with units, to support the pattern.' },
      { title: 'The problem', body: 'Sample size, who is missing, how terms were defined, how data was collected, a correlation presented as a cause.' },
    ], { highlight: 2 }),
  ]),
  'Five steps for reading quantitative sources: check the title, source and date; check the units; state the overall pattern first; then quote precise figures; then identify a problem such as sample size, missing groups, definitions or a correlation presented as a cause.',
  'Pattern first, exact figures second, problem last.',
  '## Reading quantitative sources: a five-step routine');

// 06 Worked example chart (invented data from the lesson)
{
  const Y = 110, x0 = 110, base = Y + 380, sc = 6;
  const data = [['13', 34, 28], ['15', 46, 37], ['17', 52, 41]];
  let s = panel(30, Y, 560, 450);
  [0, 20, 40, 60].forEach((v) => { s += `<line x1="${x0}" y1="${base - v * sc}" x2="${x0 + 450}" y2="${base - v * sc}" stroke="${C.panelEdge}" stroke-width="1.5"/>` + T(x0 - 10, base - v * sc + 6, `${v}%`, { size: 15, anchor: 'end', fill: C.muted }); });
  data.forEach(([age, g, b], i) => {
    const gx = x0 + 40 + i * 145;
    s += `<rect x="${gx}" y="${base - g * sc}" width="48" height="${g * sc}" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + T(gx + 24, base - g * sc - 8, `${g}%`, { size: 15, weight: 700, anchor: 'middle' });
    s += `<rect x="${gx + 52}" y="${base - b * sc}" width="48" height="${b * sc}" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/>` + T(gx + 76, base - b * sc - 8, `${b}%`, { size: 15, weight: 700, anchor: 'middle' });
    s += T(gx + 50, base + 26, `Age ${age}`, { size: 16, weight: 700, anchor: 'middle' });
  });
  s += `<line x1="${x0}" y1="${base}" x2="${x0 + 450}" y2="${base}" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += `<rect x="${x0 + 10}" y="${Y + 22}" width="18" height="18" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + T(x0 + 36, Y + 37, 'Girls', { size: 16 });
  s += `<rect x="${x0 + 110}" y="${Y + 22}" width="18" height="18" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/>` + T(x0 + 136, Y + 37, 'Boys', { size: 16 });
  s += T(310, Y + 436, 'More than 3 hours a day on social media (invented data)', { size: 15, anchor: 'middle', fill: C.muted });
  const c1 = card(610, Y, 260, { kicker: 'PATTERN', title: 'Rises with age for both; girls higher at every age', size: 16, tsize: 17, pad: 16 });
  const c2 = card(610, Y + c1.h + 14, 260, { kicker: 'DETAIL', title: 'Gap widens from 6 to 11 percentage points', body: '52% − 41% = 11 points, not 11%', size: 16, tsize: 17, pad: 16, fill: C.cream, edge: C.olive, kfill: C.olive });
  const c3 = card(610, Y + c1.h + c2.h + 28, 260, { kicker: 'PROBLEM', title: 'Self-reported; one town; about 65 to 70 pupils per group', size: 16, tsize: 17, pad: 16, kfill: C.rust });
  s += c1.s + c2.s + c3.s;
  const H = Math.max(450, c1.h + c2.h + c3.h + 28);
  add('06-worked-table-as-chart',
    svg(900, Y + H + 30, 'From table to answer: pattern, detail, problem', s),
    'The lesson’s invented survey shown as a bar chart: girls report heavy social media use of 34%, 46% and 52% at ages 13, 15 and 17, boys 28%, 37% and 41%. Notes give the pattern, the gap widening from 6 to 11 percentage points, and problems of self-reporting, one town and small groups.',
    'State the pattern, support it with exact figures, then explain a problem tied to the source.',
    '## Reading quantitative sources: a five-step routine');
}

// 07 Four things to underline in a study summary
add('07-study-summary-underline',
  compose('Four things to underline in a study summary', [
    (y) => row(y, [
      { kicker: 'UNDERLINE', title: 'Method', body: 'How was the data collected?' },
      { kicker: 'UNDERLINE', title: 'Sample', body: 'Its size and how it was chosen.' },
      { kicker: 'UNDERLINE', title: 'Findings', body: 'What was found?' },
      { kicker: 'UNDERLINE', title: 'Problem detail', body: 'e.g. a researcher known to participants, or a sample from one place.', fill: C.cream, edge: C.olive, kfill: C.olive },
    ], { card: { tsize: 20, size: 16, pad: 16, bfill: C.ink }, gap: 14 }),
    (y) => note(y, 'Most "explain a problem" marks come from the fourth item.'),
  ]),
  'Four things to underline before answering on a study summary: the method, the sample (size and how it was chosen), the findings, and any detail that suggests a problem, such as a researcher known to participants or a sample drawn from one place.',
  'Find the detail that suggests a problem: that is where most marks are.',
  '## Reading qualitative sources and study summaries');
