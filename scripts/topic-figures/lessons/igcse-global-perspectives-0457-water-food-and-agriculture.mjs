import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-global-perspectives-0457-water-food-and-agriculture';
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
    const rr = row(cy, r.map((c, j) => ({ body: c, fill: fills[j], edge: edges[j], bfill: C.ink })), { arrows: true, vcenter: true, card: { size: o.size ?? 17, pad: 16 } });
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

// 01 Key terms: food security and scarcity types
add('01-food-water-terms',
  compose('Food security and two kinds of water scarcity', [
    (y) => card(30, y, 840, { kicker: 'FOOD SECURITY (WORLD FOOD SUMMIT, 1996)', title: 'All people, at all times, have physical and economic access to sufficient, safe and nutritious food for an active and healthy life', tsize: 19, fill: C.tealLight, edge: C.tealDark }),
    (y) => {
      const pane = (x, title, sub, kind) => {
        let s = panel(x, y, 410, 250) + T(x + 24, y + 38, title, { size: 21, weight: 700 }) + para(x + 24, y + 64, sub, 360, { size: 16, fill: C.muted }).s;
        const gx = x + 205, gy = y + 175;
        s += `<path d="M${gx - 150},${gy + 50} L${gx - 150},${gy - 30} M${gx + 150},${gy + 50} L${gx + 150},${gy - 30}" stroke="${C.ink}" stroke-width="3"/>`;
        if (kind === 'phys') s += `<path d="M${gx - 150},${gy + 50} L${gx + 150},${gy + 50}" stroke="${C.ink}" stroke-width="3"/><rect x="${gx - 148}" y="${gy + 38}" width="296" height="12" fill="${C.teal}"/>` + T(gx, gy + 20, 'the water is not there', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
        else s += `<rect x="${gx - 148}" y="${gy - 20}" width="296" height="70" fill="${C.teal}"/><path d="M${gx - 150},${gy + 50} L${gx + 150},${gy + 50}" stroke="${C.ink}" stroke-width="3"/>` + T(gx, gy + 20, 'water is there…', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(gx, gy - 34, 'but people cannot afford or reach it', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
        return s;
      };
      return { s: pane(30, 'Physical scarcity', 'Not enough water to meet demand, because it is not there.', 'phys') + pane(460, 'Economic scarcity', 'The water exists, but cost or access keep it from people.', 'econ'), h: 250 };
    },
    (y) => row(y, [
      { kicker: 'SUBSISTENCE FARMING', title: 'Food mainly for your own family', fill: C.cream, edge: C.olive, kfill: C.olive },
      { kicker: 'COMMERCIAL FARMING', title: 'Crops or animals grown to sell' },
      { kicker: 'VIRTUAL WATER (TONY ALLAN)', title: 'Water used to produce a product, such as imported wheat', fill: C.tealLight, edge: C.tealDark },
    ], { card: { tsize: 17 } }),
  ]),
  'The 1996 World Food Summit definition of food security, followed by two tanks: physical scarcity, where the water is not there, and economic scarcity, where it exists but people cannot afford or reach it. Below, subsistence and commercial farming, and virtual water, the water used to produce a product, an idea developed by Tony Allan.',
  'Water can be scarce because it is missing or because people cannot reach it.',
  '## Issues at global, national and local level');

// 02 India rice export ban
add('02-rice-export-ban',
  compose('One export ban, two perspectives', [
    (y) => card(160, y, 580, { kicker: 'JULY 2023', title: 'India bans exports of non-basmati white rice', align: 'middle', fill: C.mustard, edge: C.ink, kfill: C.ink, tsize: 20 }),
    (y) => ({ s: arrow(450, y - 12, 240, y + 22, { w: 3.5 }) + arrow(450, y - 12, 660, y + 22, { w: 3.5 }), h: 22 }),
    (y) => row(y, [
      { kicker: 'EXPORTING GOVERNMENT', title: 'Keeps rice affordable at home', body: 'Protects domestic consumers.', fill: C.tealLight, edge: C.tealDark },
      { kicker: 'FAMILY IN A RICE-IMPORTING CITY', kfill: C.rust, title: 'Supply falls; a daily staple costs more', body: 'Hardship is shifted abroad.', edge: C.rust },
    ], { gap: 24, card: { tsize: 18, size: 16 } }),
    (y) => note(y, 'Both want stable prices. The disagreement comes from who carries the cost, not from a dispute about facts.'),
    (y) => label(y, 'Other perspectives in this topic', { size: 18 }),
    (y) => row(y, [
      { title: 'Smallholder farmers', body: 'risk losing land, water or a fair price' },
      { title: 'Large farms and food firms', body: 'efficiency, investment, feeding cities cheaply' },
      { title: 'Environmental groups', body: 'falling groundwater, lost forests, fertiliser pollution' },
      { title: 'La Via Campesina', body: '“food sovereignty”: communities decide how food is produced' },
    ], { gap: 12, card: { tsize: 16, size: 15, pad: 14 } }),
  ]),
  'India’s July 2023 ban on non-basmati white rice exports kept rice affordable at home but raised prices for families in rice-importing countries. Both want stable prices; the difference is who carries the cost. Other perspectives: smallholders, large farms and food firms, environmental groups and La Via Campesina’s food sovereignty.',
  'A national action that protects one group can shift hardship to another.',
  '## Perspectives on the issues');

// 03 Groundwater chain with inequality
{
  const Y = 120;
  let b = '';
  const gl = Y + 60;
  b += `<rect x="30" y="${gl}" width="840" height="270" fill="${C.sand}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += `<path d="M30,${gl + 110} C200,${gl + 112} 400,${gl + 130} 870,${gl + 150} L870,${gl + 270} L30,${gl + 270} Z" fill="${C.teal}" opacity="0.8"/>`;
  b += path(`M30,${gl + 110} C200,${gl + 112} 400,${gl + 130} 870,${gl + 150}`, { stroke: C.tealDark, w: 3, extra: 'stroke-dasharray="9 7"' });
  b += T(860, gl + 100, 'water table, falling', { size: 16, weight: 700, anchor: 'end', fill: C.tealDark });
  b += arrow(760, gl + 112, 760, gl + 150, { color: C.tealDark, w: 3, marker: 'ahT' });
  // wells
  b += `<rect x="190" y="${gl - 40}" width="26" height="160" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + T(203, gl - 50, 'poorer farmer’s shallow well', { size: 16, weight: 700, anchor: 'middle' }) + T(203, gl + 150, 'dries first', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
  b += `<rect x="520" y="${gl - 40}" width="26" height="250" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/><rect x="522" y="${gl + 140}" width="22" height="68" fill="${C.blue}" opacity="0.7"/>` + T(533, gl - 50, 'richer farmer drills deeper', { size: 16, weight: 700, anchor: 'middle' });
  b += T(450, gl + 240, 'Agriculture uses about 70% of fresh water withdrawn worldwide (FAO)', { size: 16, weight: 700, anchor: 'middle', fill: C.ink });
  const r = row(gl + 290, [
    { title: 'Pumping costs little or nothing', align: 'middle', fill: C.cream, edge: C.olive },
    { title: 'Thirsty crops such as rice spread into dry areas', align: 'middle' },
    { title: 'Groundwater falls faster than rain refills it', align: 'middle' },
    { title: 'Supply problem becomes an inequality problem', align: 'middle', fill: C.tealLight, edge: C.tealDark },
  ], { arrows: true, gap: 40, card: { tsize: 16, pad: 12 } });
  b += r.s + note(gl + 290 + r.h + 16, 'How serious this is depends on local conditions: you need measured well levels, not a general claim.').s;
  add('03-groundwater-chain',
    svg(900, gl + 290 + r.h + 16 + 112, 'Falling groundwater: who runs dry first?', b),
    'A cross-section shows a falling water table: a poorer farmer’s shallow well dries first while a richer farmer drills a deeper well. Agriculture uses about 70% of fresh water withdrawn worldwide (FAO). A chain: cheap pumping lets thirsty crops spread, groundwater falls faster than rain refills it, and a supply problem becomes one of inequality.',
    'When the water table falls, those with the shallowest wells lose first.',
    '## Causes and consequences');
}

// 04 Grain chain across levels: Ukraine
add('04-grain-chain',
  compose('From a war to a distant market', [
    (y) => stack(y, [
      { kicker: 'FEBRUARY 2022', title: 'Russia’s full-scale invasion: Ukraine’s Black Sea ports blocked', body: 'Ukraine is a major grain exporter.', fill: C.cream, edge: C.olive, kfill: C.olive },
      { kicker: 'JULY 2022', title: 'Black Sea Grain Initiative, brokered by the UN and Turkey, lets grain ships sail', fill: C.tealLight, edge: C.tealDark },
      { kicker: 'JULY 2023', kfill: C.rust, title: 'Russia withdraws from the initiative', edge: C.rust },
    ], { arrows: true, gap: 36, card: { tsize: 18, size: 16 } }),
    (y) => label(y, 'The general consequence chain', { size: 18 }),
    (y) => row(y, [
      { title: 'War or drought cuts a harvest', align: 'middle', fill: C.cream, edge: C.olive },
      { title: 'Less grain exported', align: 'middle' },
      { title: 'World prices rise', align: 'middle' },
      { title: 'Poorer families in importing countries eat less or less well', align: 'middle', fill: C.tealLight, edge: C.tealDark },
    ], { arrows: true, gap: 40, card: { tsize: 16, pad: 12 } }),
  ]),
  'A timeline: Russia’s full-scale invasion in February 2022 blocked Ukraine’s Black Sea grain ports; the UN and Turkey brokered the Black Sea Grain Initiative in July 2022; Russia withdrew in July 2023. The general chain: war or drought cuts a harvest, exports fall, world prices rise, and poorer families in importing countries eat less.',
  'A conflict in one region reaches prices in distant local markets.',
  '## Causes and consequences');

// 05 Cape Town Day Zero
add('05-cape-town-day-zero',
  compose('Cape Town 2018: avoiding “Day Zero”', [
    (y) => rings(y, [
      { name: 'Household', short: 'Home', text: 'From February 2018, residents asked to use no more than 50 litres per person per day.' },
      { name: 'City', text: 'Warned of “Day Zero”, when most taps could be turned off.' },
      { name: 'Nation', text: 'A multi-year drought in South Africa: low rainfall plus rising demand.' },
    ], { R: 165 }),
    (y) => row(y, [
      { title: 'Water use fell', align: 'middle', fill: C.tealLight, edge: C.tealDark },
      { title: 'Rain returned', align: 'middle', fill: C.tealLight, edge: C.tealDark },
      { title: 'Day Zero was avoided', align: 'middle', fill: C.mustard, edge: C.ink },
    ], { arrows: true, card: { tsize: 19 } }),
  ]),
  'Rings show one cause reaching three levels in Cape Town, South Africa: a multi-year drought with rising demand nationally, a city warning of Day Zero when taps could be turned off, and households asked from February 2018 to use no more than 50 litres per person per day. Water use fell, rain returned and Day Zero was avoided.',
  'One cause, low rainfall plus rising demand, reached households, a city and a nation.',
  '## Causes and consequences');

// 06 Food waste index and fertiliser leaflet
add('06-food-waste-evidence',
  compose('A strong estimate and a weak advert', [
    (y) => {
      let s = panel(30, y, 840, 170) + T(56, y + 38, 'UNEP Food Waste Index Report 2024', { size: 20, weight: 700, fill: C.tealDark });
      for (let i = 0; i < 5; i++) { const x = 70 + i * 82; s += `<rect x="${x}" y="${y + 66}" width="68" height="68" rx="10" fill="${i === 0 ? C.rust : C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>`; }
      s += T(70 + 34, y + 156, 'wasted', { size: 15, weight: 700, anchor: 'middle', fill: C.rust });
      s += para(500, y + 76, 'About a fifth of food available to consumers was wasted in 2022, with households wasting the largest share.', 350, { size: 17 }).s;
      return { s, h: 170 };
    },
    (y) => row(y, [
      { kicker: 'STRONG', title: 'A UN body with data from many countries', edge: C.tealDark },
      { kicker: 'LIMIT', kfill: C.rust, title: 'Countries measure waste differently, or not at all: quote it as an estimate', edge: C.rust },
    ], { gap: 24, card: { tsize: 17 } }),
    (y) => card(30, y, 840, { kicker: 'FICTIONAL FERTILISER COMPANY LEAFLET', kfill: C.rust, title: '“Farmers who use our product always get bumper harvests.”', body: ['Vested interest: profits from sales', '“Always” is a generalisation', 'No figures, no number of farms, no comparison group'], bullets: true, edge: C.rust, tsize: 19, size: 16 }),
    (y) => note(y, 'An independent body comparing similar farms with and without the fertiliser over several seasons.', { title: 'More convincing' }),
  ]),
  'Five tiles with one shaded show the UNEP Food Waste Index Report 2024 estimate that about a fifth of food available to consumers was wasted in 2022, mostly by households. It is strong but an estimate. A fictional fertiliser leaflet claiming farmers always get bumper harvests has a vested interest, a generalisation and no figures; an independent multi-season comparison would be better.',
  'Even a strong source gives an estimate; a weak one gives no evidence at all.',
  '## Judging sources and evidence');

// 07 Food waste actions and Ostley
add('07-food-donation-rule',
  compose('Food waste actions: will the rule actually work?', [
    (y) => row(y, [
      { kicker: 'GLOBAL', title: 'SDG target 12.3', body: 'Halve food waste per person at retail and consumer level by 2030.', fill: C.tealLight, edge: C.tealDark },
      { kicker: 'NATIONAL: FRANCE, 2016', title: 'Large supermarkets must offer edible unsold food to charities', body: 'Depends on charities having storage, transport and volunteers.', fill: C.teal, edge: C.tealDark },
      { kicker: 'LOCAL', kfill: C.olive, title: 'Canteen waste schemes, community water storage, school gardens', fill: C.cream, edge: C.olive },
    ], { card: { tsize: 17, size: 15 } }),
    (y) => label(y + 4, 'Fictional city of Ostley: restaurants must donate unsold food', { size: 18 }),
    (y) => row(y, [
      { kicker: 'THE BARRIER', kfill: C.rust, title: 'Food is ready late at night; the food bank opens three days a week', body: 'Looks good on paper, achieves little.', edge: C.rust },
      { kicker: 'STRONGER OPTION', title: 'Rule plus funding for refrigerated storage at the food bank', body: 'Costs more, but removes the main barrier.', fill: C.tealLight, edge: C.tealDark },
    ], { arrows: true, gap: 50, card: { tsize: 18, size: 16 } }),
    (y) => chips(y, ['Effectiveness', 'Feasibility', 'Fairness', 'Sustainability'], { fill: C.cream, edge: C.olive }),
  ]),
  'Food waste actions at three levels: SDG target 12.3 to halve waste per person by 2030; France’s 2016 law requiring large supermarkets to offer edible unsold food to charities; and local canteen schemes and school gardens. For the fictional city of Ostley, a donation rule fails because food is ready late and the food bank opens three days a week; adding refrigerated storage removes the barrier.',
  'An action works only if it removes the main practical barrier.',
  '## Courses of action');
