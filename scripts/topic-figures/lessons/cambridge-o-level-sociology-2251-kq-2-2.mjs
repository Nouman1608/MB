import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-sociology-2251-kq-2-2';
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

// 01 Sanctions grid
{
  const Y = 110, gx = 250, gw = 300, gh = 150;
  let s = T(gx + gw / 2, Y + 24, 'Positive sanction', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(gx + gw / 2, Y + 46, 'rewards conformity', { size: 16, anchor: 'middle', fill: C.muted });
  s += T(gx + gw * 1.5 + 10, Y + 24, 'Negative sanction', { size: 19, weight: 700, anchor: 'middle', fill: C.rust }) + T(gx + gw * 1.5 + 10, Y + 46, 'punishes deviance', { size: 16, anchor: 'middle', fill: C.muted });
  [['Formal', 'official agencies of the state; written rules'], ['Informal', 'people around us; unwritten norms']].forEach(([h, d], i) => {
    s += card(30, Y + 64 + i * (gh + 10), 205, { title: h, body: d, minH: gh, vcenter: true, fill: C.panel, edge: C.ink, size: 15, tsize: 20, pad: 14 }).s;
  });
  const cells = [['A bravery award', C.tealLight, C.tealDark], ['A court sentence', C.cream, C.olive], ['A parent’s praise', C.tealLight, C.tealDark], ['Being ignored by friends', C.cream, C.olive]];
  cells.forEach(([ex, f, e], k) => {
    s += box(gx + (k % 2) * (gw + 10), Y + 64 + Math.floor(k / 2) * (gh + 10), gw, gh, ex, { fill: f, edge: e, tsize: 20 });
  });
  const n = note(Y + 64 + 2 * gh + 26, 'Strongest of all is internalised control: through socialisation we accept norms as right and feel guilt or shame before anyone reacts. External sanctions deal with cases where this fails.', { title: 'Inside us' });
  add('01-sanctions-grid',
    svg(900, Y + 64 + 2 * gh + 26 + n.h + 30, 'Four kinds of sanction', s + n.s),
    'A two-by-two grid of formal and informal control against positive and negative sanctions: a bravery award is formal positive, a court sentence formal negative, a parent’s praise informal positive and being ignored by friends informal negative. A note explains that internalised control is the strongest.',
    'Sanctions can be formal or informal, positive or negative.',
    '## Formal and informal control');
}

// 02 Formal agencies
add('02-formal-agencies',
  compose('Formal agencies: methods and effectiveness', [
    (y) => table(y, ['Agency', 'Main methods', 'Effective when…', 'Less effective when…'], [
      ['Government', 'Law-making; regulation; funding', 'Laws reflect shared values', 'Laws lack support or are poorly enforced'],
      ['Police', 'Arrest; patrol; digital surveillance; stop and search', 'Trusted, so the public report crime', 'Crime unreported; corruption; low resources'],
      ['Courts', 'Sentencing; fines; orders', 'Penalties seen as fair and consistent', 'Long delays; unequal access to legal help'],
      ['Penal system', 'Imprisonment; probation; rehabilitation', 'Offenders reform and do not reoffend', 'Prisons spread criminal skills and labels'],
      ['Armed forces', 'Coercion in emergencies, unrest or conflict', 'Order must be restored quickly', 'Force without legitimacy produces resistance'],
    ], [150, 240, 220, 230], { size: 15 }),
    (y) => note(y, 'Coercion (force or its threat) is the last resort. Societies that rely on it heavily are often less stable, because people conform out of fear rather than agreement.'),
  ]),
  'A table of five formal agencies, government, police, courts, penal system and armed forces, with their main methods and when they are more or less effective. A note explains that coercion is a last resort and that conformity through fear is less stable.',
  'Formal control works best when people see the rules and penalties as legitimate.',
  '## Formal agencies and their methods');

// 03 Panopticon
{
  const Y = 120, cx = 230, cy = Y + 200, R1 = 170, R0 = 108;
  let s = panel(30, Y - 10, 400, 430);
  const n = 14;
  for (let i = 0; i < n; i++) {
    const a1 = (2 * Math.PI * i) / n, a2 = (2 * Math.PI * (i + 1)) / n;
    const p = (r, a) => `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
    s += `<path d="M${p(R0, a1)} L${p(R1, a1)} A${R1},${R1} 0 0 1 ${p(R1, a2)} L${p(R0, a2)} A${R0},${R0} 0 0 0 ${p(R0, a1)} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="2"/>`;
  }
  s += `<circle cx="${cx}" cy="${cy}" r="${R0}" fill="${C.panel}" stroke="${C.ink}" stroke-width="2"/>`;
  [0.3, 2.2, 4.1].forEach((a) => { s += `<line x1="${cx + 34 * Math.cos(a)}" y1="${cy + 34 * Math.sin(a)}" x2="${cx + (R0 - 4) * Math.cos(a)}" y2="${cy + (R0 - 4) * Math.sin(a)}" stroke="${C.olive}" stroke-width="2.5" stroke-dasharray="6 5"/>`; });
  s += `<circle cx="${cx}" cy="${cy}" r="32" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + T(cx, cy + 6, 'tower', { size: 16, weight: 700, anchor: 'middle' });
  s += T(cx, Y + 400, 'cells in a ring around a central tower', { size: 16, anchor: 'middle', fill: C.muted });
  const st = stack(Y - 10, [
    { title: 'Never sure when watched', body: 'Prisoners could not tell when a guard was looking.' },
    { title: 'So they self-police', body: 'They behaved as though always observed.', fill: C.tealLight, edge: C.tealDark },
    { title: 'Digital surveillance today', body: 'CCTV, facial recognition, number-plate cameras, phone location data, online monitoring.', fill: C.cream, edge: C.olive },
  ], { x: 450, w: 420, arrows: true, gap: 36, card: { size: 16, tsize: 19, pad: 16 } });
  s += st.s;
  const H = Math.max(430, st.h);
  const nt = note(Y - 10 + H + 16, 'Critics point to privacy, possible misuse by governments, and some groups being watched more closely than others.');
  add('03-panopticon-surveillance',
    svg(900, Y - 10 + H + 16 + nt.h + 30, 'The panopticon and digital surveillance', s + nt.s, 'Foucault, Discipline and Punish (1975)'),
    'Plan of a panopticon: a ring of cells around a central watchtower. Because prisoners could not tell when a guard was looking, they behaved as though always observed. Digital surveillance such as CCTV, facial recognition, number-plate cameras and phone location data works the same way; critics raise privacy and misuse.',
    'Knowing you might be watched changes behaviour.',
    '## Formal agencies and their methods');
}

// 04 Informal agencies: rewards and sanctions
add('04-informal-agencies',
  compose('Informal agencies: rewards and sanctions', [
    (y) => table(y, ['Agency', 'Positive sanctions', 'Negative sanctions'], [
      ['Family', 'Treats, freedom', 'Grounding, disapproval'],
      ['Education', 'Merits, prizes, teachers’ approval', 'Detention, exclusion'],
      ['Peer group', 'Acceptance', 'Ostracism (being excluded)'],
      ['Media', 'Social media likes, shares, followers', 'Public shaming, hostile comments'],
      ['Religion', 'Promised reward after death; respect', 'Promised punishment; exclusion'],
      ['Workplace', 'Pay rises, promotion', 'Warnings, dismissal from a job'],
    ], [180, 330, 330], { size: 16 }),
    (y) => row(y, [
      { title: 'Usually more effective', body: 'Constant, and comes from people whose opinion matters.', fill: C.tealLight, edge: C.tealDark, tfill: C.tealDark },
      { title: 'Weaker when…', body: 'People live in large, anonymous cities, or do not care about the group’s approval.', fill: C.cream, edge: C.olive, tfill: C.olive },
    ], { card: { size: 16, tsize: 19, bfill: C.ink } }),
  ]),
  'A table of six informal agencies with their positive and negative sanctions, from parental treats and grounding to promotion and dismissal. Below: informal control is usually more effective because it is constant, but weaker in anonymous cities and among people who do not care about approval.',
  'Informal control draws its power from relationships people value.',
  '## Informal agencies and their methods');

// 05 Theories of control
{
  const Y = 110;
  const cols = [
    { kicker: 'CONSENSUS', kfill: C.tealDark, title: 'Functionalism', body: ['Control protects shared values that benefit everyone', 'Durkheim: punishing a wrongdoer reminds everyone of the rules and unites them', 'Maintains order and cohesion'], fill: C.tealLight, edge: C.tealDark, tfill: C.tealDark },
    { kicker: 'CONFLICT', kfill: C.rust, title: 'Marxism', body: ['Control serves the ruling class', 'Laws protect private property and capitalism', 'Ideological control is cheaper: people police themselves'], fill: C.panel, edge: C.rust, tfill: C.rust },
    { kicker: 'CONFLICT', kfill: C.rust, title: 'Feminism', body: ['Control maintains patriarchy', 'Heidensohn (1985): women controlled more tightly at home, in public and at work', 'Helps explain why women commit fewer crimes'], fill: C.cream, edge: C.olive, tfill: C.olive },
  ];
  const r = row(Y, cols, { card: { size: 16, tsize: 20, bullets: true, bfill: C.ink, gap: 6 }, gap: 18 });
  let s = r.s;
  const y2 = Y + r.h + 24;
  s += T(450, y2 + 20, 'Althusser: two kinds of state apparatus', { size: 20, weight: 700, anchor: 'middle' });
  const a = row(y2 + 36, [
    { kicker: 'REPRESSIVE', title: 'Police, courts, army', body: 'Control by force', fill: C.panel, edge: C.rust, kfill: C.rust },
    { kicker: 'IDEOLOGICAL', title: 'Education, media, religion', body: 'Control by persuading people that inequality is fair', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { card: { size: 16, tsize: 19, bfill: C.ink }, gap: 24 });
  s += a.s;
  add('05-theories-of-control',
    svg(900, y2 + 36 + a.h + 30, 'Whose interests does social control serve?', s),
    'Functionalism sees control protecting shared values, with Durkheim’s idea that punishment unites society. Marxism sees it serving the ruling class; Althusser separates repressive state apparatuses that use force from ideological ones that persuade. Feminism, through Heidensohn, sees control maintaining patriarchy at home, in public and at work.',
    'One consensus view and two conflict views of who benefits from control.',
    '## The theoretical debate');
}

// 06 Resistance
add('06-resistance',
  compose('Resisting control', [
    (y) => row(y, [
      { title: 'Deviant behaviour', body: 'Breaks a norm and attracts negative sanctions.', fill: C.panel, edge: C.rust, tfill: C.rust },
      { title: 'Non-conformist behaviour', body: 'Rejects mainstream expectations without necessarily breaking the law, e.g. unusual dress.', fill: C.tealLight, edge: C.tealDark, tfill: C.tealDark },
    ], { card: { size: 16, tsize: 19, bfill: C.ink } }),
    (y) => {
      const items = [
        ['Protest groups', 'School climate strikes begun by Greta Thunberg (Sweden, 2018); civil rights and workers’ movements'],
        ['Youth subcultures', 'Hebdige (1979): punk style as a symbolic challenge to mainstream society'],
        ['Online subcultures', 'Gaming, music, fandoms or political views; link people across countries'],
        ['Religious subcultures', 'Beliefs and practices different from the majority; strict internal control'],
      ].map(([ti, b]) => ({ title: ti, body: b }));
      const a = row(y, items.slice(0, 2), { card: { size: 16, tsize: 19 } });
      const b = row(y + a.h + 14, items.slice(2), { card: { size: 16, tsize: 19 } });
      return { s: a.s + b.s, h: a.h + 14 + b.h };
    },
    (y) => card(30, y, 840, { title: 'Why people join', body: 'Belonging and identity · shared grievances and a wish for change · status unavailable elsewhere (Cohen’s status frustration, 1955) · excitement and rebellion · friends', fill: C.cream, edge: C.olive, tfill: C.olive, bfill: C.ink, size: 17 }),
  ]),
  'Deviant behaviour breaks norms; non-conformist behaviour rejects expectations without breaking the law. Four kinds of resistance: protest groups such as the school climate strikes, youth subcultures such as punk, online subcultures and religious subcultures. Reasons for joining include belonging, grievances, status, excitement and friends.',
  'Subcultures resist mainstream control but usually impose strong control of their own.',
  '## Resistance: protest groups and subcultures');

// 07 Evaluation plan
add('07-evaluation-plan',
  compose('Does social control mainly benefit the powerful?', [
    (y) => balance(y, { tag: 'FOR (CONFLICT)', title: 'For', items: [
      'Marxists: laws protect property; crimes of the powerful rarely punished',
      'Ideological state apparatuses persuade workers to accept inequality',
      'Feminists: Heidensohn shows control falling more heavily on women',
    ] }, { tag: 'AGAINST (CONSENSUS)', title: 'Against', items: [
      'Laws against violence benefit everyone',
      'Durkheim: punishment unites society',
      'Family and religious control often reflects genuine agreement',
    ] }, { tilt: -0.5, verdict: 'Some control clearly protects everyone, but who makes the rules and who is watched most closely suggests the powerful benefit more.' }),
  ]),
  'A balance weighing conflict arguments that control benefits the powerful, from Marxists and Heidensohn, against consensus arguments that it benefits everyone, such as laws against violence and Durkheim’s view of punishment. It tips slightly towards the conflict side, and the judgement says the powerful benefit more.',
  'Set conflict against consensus, then reach a judgement.',
  '## Worked example: an evaluation plan (practice)');
