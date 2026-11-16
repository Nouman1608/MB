import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-global-perspectives-0457-transport-travel-and-tourism';
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

// 01 Carrying capacity and overtourism
{
  const Y = 120, x0 = 80, base = Y + 270;
  let b = `<line x1="${x0}" y1="${base}" x2="840" y2="${base}" stroke="${C.ink}" stroke-width="3" marker-end="url(#ah)"/><line x1="${x0}" y1="${base}" x2="${x0}" y2="${Y + 10}" stroke="${C.ink}" stroke-width="3" marker-end="url(#ah)"/>`;
  b += T(830, base + 28, 'number of visitors', { size: 16, anchor: 'end', fill: C.muted });
  b += `<text transform="translate(${x0 - 18},${(Y + base) / 2}) rotate(-90)" text-anchor="middle" font-size="16" fill="${C.muted}">harm to residents and place</text>`;
  const cap = 470;
  b += `<rect x="${cap}" y="${Y + 20}" width="${840 - cap}" height="${base - Y - 20}" fill="${C.cream}" opacity="0.7"/>`;
  b += path(`M${x0},${base - 10} C300,${base - 25} 420,${base - 45} ${cap},${base - 70} S700,${Y + 60} 820,${Y + 30}`, { stroke: C.rust, w: 5 });
  b += `<line x1="${cap}" y1="${Y + 20}" x2="${cap}" y2="${base}" stroke="${C.ink}" stroke-width="3" stroke-dasharray="10 7"/>`;
  b += T(cap - 12, Y + 46, 'carrying capacity', { size: 17, weight: 700, anchor: 'end' });
  b += T(660, Y + 160, 'OVERTOURISM', { size: 20, weight: 700, anchor: 'middle', fill: C.olive });
  b += T(660, Y + 184, 'residents’ lives or the place harmed', { size: 15, anchor: 'middle', fill: C.olive });
  const r = row(base + 52, [
    { kicker: 'SUSTAINABLE TOURISM', title: 'Planned to protect environment and community long term', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'SHORT-TERM RENTAL', kfill: C.olive, title: 'A home let to visitors by the night, often via an app', fill: C.cream, edge: C.olive },
    { kicker: 'MODAL SHIFT', title: 'Switching how you travel, such as car to bus' },
  ], { card: { tsize: 17 } });
  b += r.s;
  add('01-carrying-capacity',
    svg(900, base + 52 + r.h + 30, 'When does tourism become overtourism?', b),
    'A schematic graph: harm to residents and the place rises slowly with visitor numbers, then sharply past the carrying capacity line, where overtourism begins. Below, definitions of sustainable tourism, short-term rental and modal shift.',
    'Past a place’s carrying capacity, each extra visitor does more harm.',
    '## Transport, travel and tourism as a source of issues');
}

// 02 Road safety levels
add('02-road-safety-levels',
  compose('Road safety: from a school crossing to a global toll', [
    (y) => rings(y, [
      { name: 'Local', text: 'Parents in the fictional town of Benmoor want a crossing outside the school.' },
      { name: 'National', text: 'Wider action such as speed limits and safety rules for motorbikes.' },
      { name: 'Global', text: 'WHO 2023: about 1.19 million road deaths a year, down 5% since 2010; the leading cause of death for ages 5 to 29; nine in ten in low- and middle-income countries.' },
    ], { R: 170 }),
    (y) => row(y, [
      { kicker: 'STRENGTH', title: 'WHO gathers data from many governments', edge: C.tealDark },
      { kicker: 'LIMITATIONS', kfill: C.rust, title: 'Countries record deaths differently, some under-report; it says nothing about which actions work', edge: C.rust },
    ], { gap: 24, card: { tsize: 17 } }),
  ]),
  'Rings for road safety: locally, parents in the fictional town of Benmoor want a crossing; nationally, speed limits and motorbike rules; globally, the WHO 2023 estimate of about 1.19 million road deaths a year, down 5% since 2010, the leading cause of death for ages 5 to 29, mostly in low- and middle-income countries. The WHO data is credible but an estimate.',
  'A crossing helps one school; the wider problem needs national action too.',
  '## Transport, travel and tourism as a source of issues');

// 03 Stockholm referendum split
{
  const Y = 120;
  let b = row(Y, [
    { kicker: 'JAN–JULY 2006', title: 'Trial congestion charge' },
    { kicker: 'SEPTEMBER 2006', title: 'Referendums in the city and some surrounding areas' },
    { kicker: 'AUGUST 2007', title: 'Charge becomes permanent', fill: C.tealLight, edge: C.tealDark },
  ], { arrows: true, gap: 44, card: { tsize: 17 } }).s;
  const by = Y + 150;
  const bar = (y, lab, yes, f) => { const w = 560; return T(30, y + 32, lab, { size: 17, weight: 700 }) + `<rect x="300" y="${y}" width="${w * yes}" height="48" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/><rect x="${300 + w * yes}" y="${y}" width="${w * (1 - yes)}" height="48" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + T(300 + (w * yes) / 2, y + 31, `${Math.round(yes * 100)}% yes`, { size: 17, weight: 700, anchor: 'middle' }); };
  b += bar(by, 'City of Stockholm', 0.53, C.teal) + bar(by + 70, 'Surrounding areas', 0.40, C.cream);
  b += T(870, by + 140, 'surrounding areas held their own votes: about 40% yes overall', { size: 15, anchor: 'end', fill: C.muted, italic: true });
  const r = row(by + 160, [
    { kicker: 'CITY RESIDENTS', title: 'Gained quieter streets', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'SURROUNDING AREAS', kfill: C.olive, title: 'Many drove into the city and would pay', fill: C.cream, edge: C.olive },
  ], { gap: 24, card: { tsize: 18 } });
  b += r.s + note(by + 160 + r.h + 18, 'Trial evidence: traffic across the boundary fell by about 20–25%. A 2012 study of the first five years found the fall had lasted. Ask how long evidence was collected for.', { title: 'Judging the evidence' }).s;
  add('03-stockholm-charge',
    svg(900, by + 160 + r.h + 18 + 140, 'Stockholm’s charge: where you live shapes your view', b),
    'Timeline: Stockholm trialled a congestion charge from January to July 2006, held referendums in September 2006 and made the charge permanent in August 2007. City voters said 53% yes; surrounding areas about 40% yes. City residents gained quieter streets; many outside drove in and would pay. Traffic fell about 20 to 25%, and a 2012 study found the fall lasted.',
    'Where people live shaped how they voted on the same charge.',
    '## Perspectives: who sees transport and tourism differently, and why');

}

// 04 Overtourism chain by level
add('04-overtourism-chain',
  compose('Overtourism in a historic town', [
    (y) => row(y, [
      { kicker: 'CAUSE', kfill: C.olive, title: 'Cheaper flights and cruise calls bring more short visits', fill: C.cream, edge: C.olive },
      { kicker: 'CAUSE', kfill: C.olive, title: 'Social media makes a few spots famous, so crowds gather', fill: C.cream, edge: C.olive },
    ], { gap: 24, card: { tsize: 17 } }),
    (y) => ({ s: arrow(235, y - 10, 420, y + 28, { w: 3.5 }) + arrow(665, y - 10, 480, y + 28, { w: 3.5 }), h: 30 }),
    (y) => ladder(y, [
      { tag: 'Personal', text: 'A resident struggles through crowded streets to work.', fill: C.cream },
      { tag: 'Local', text: 'Homes become holiday lets; rents rise; families leave.', fill: C.tealLight },
      { tag: 'National', text: 'Tourism tax income rises, but so do cleaning and policing costs.', fill: C.teal },
      { tag: 'Global', text: 'More travel adds to emissions from aircraft and ships.', fill: C.tealLight },
    ], { gap: 10 }),
  ]),
  'Two causes, cheaper flights and cruise calls and social media fame for a few spots, lead to consequences at four levels: a resident struggling through crowds, homes becoming holiday lets as rents rise and families leave, higher tax income but higher costs nationally, and more emissions globally.',
  'One crowded street links to housing, public budgets and global emissions.',
  '## Causes and consequences');

// 05 Venice fee: two problems
add('05-venice-fee',
  compose('Venice’s day-visitor fee: which problem does it fix?', [
    (y) => row(y, [
      { kicker: 'FROM 25 APRIL 2024', title: '5 euros on 29 days', body: 'Day-trippers only; overnight guests and residents exempt.' },
      { kicker: '2025', title: '54 days', body: '5 euros if booked at least four days ahead, 10 euros later.' },
    ], { arrows: true, gap: 50, card: { tsize: 19, size: 16 } }),
    (y) => row(y, [
      { kicker: 'SHORT-TERM PROBLEM', title: 'Crowding', body: ['Fee aims to discourage visits at the busiest times', 'And to gather better visitor data'], bullets: true, fill: C.tealLight, edge: C.tealDark },
      { kicker: 'LONG-TERM PROBLEM', kfill: C.rust, title: 'Residents leaving over housing costs', body: ['Protesters: “No to tickets, yes to services and housing”', 'The fee does not tackle this'], bullets: true, edge: C.rust },
    ], { gap: 24, card: { tsize: 19, size: 16 } }),
    (y) => note(y, 'Separating two problems that are often merged is analysis: an action can fix one and miss the other.'),
  ]),
  'Venice charged day-trippers 5 euros on 29 days from 25 April 2024, and in 2025 on 54 days at 5 or 10 euros depending on booking time. The fee targets short-term crowding and gathers data, but protesters argued it does not tackle the long-term problem of residents leaving over housing costs.',
  'An action can fix a short-term problem and miss a long-term one.',
  '## Causes and consequences');

// 06 Kerrow shuttle and hoteliers
{
  const Y = 120, base = Y + 250, sy = (v) => base - (v / 6000) * 200;
  let b = T(30, Y + 4, 'Fictional Kerrow Island: summer-weekend cars on the causeway', { size: 17, weight: 700 });
  b += `<line x1="40" y1="${base}" x2="480" y2="${base}" stroke="${C.ink}" stroke-width="3"/>`;
  [[90, 5400, C.cream, 'before shuttle'], [290, 4050, C.teal, 'after shuttle']].forEach(([x, v, f, l]) => { b += `<rect x="${x}" y="${sy(v)}" width="140" height="${base - sy(v)}" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x + 70, sy(v) - 10, v.toLocaleString('en-GB'), { size: 22, weight: 700, anchor: 'middle' }) + T(x + 70, base + 26, l, { size: 16, anchor: 'middle', fill: C.muted }); });
  b += T(260, base + 56, '−25%: suggests some modal shift', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += card(510, Y + 20, 360, { kicker: 'BUT', kfill: C.rust, title: 'Were weather and visitor numbers similar both years?', body: 'If not, other causes cannot be ruled out.', edge: C.rust, tsize: 18, size: 16 }).s;
  const Y2 = base + 90;
  b += card(30, Y2, 840, { kicker: 'FICTIONAL KERROW HOTELIERS’ ASSOCIATION', title: '“Most visitors oppose the shuttle bus.”', tsize: 20, fill: C.panel, edge: C.ink }).s;
  const ck = checklist(Y2 + 104, [
    { q: 'Only 45 of 300 members replied (15%)', mark: 'x' },
    { q: 'Reported what guests said, not asked visitors directly', mark: 'x' },
    { q: 'Vested interest: hotels with car parks may lose an advantage', mark: 'x' },
  ], { gap: 8, tsize: 18 });
  b += ck.s;
  const nt = note(Y2 + 104 + ck.h + 16, 'Survey a random sample of visitors at the ferry port on several days, with the same neutral question.', { title: 'A better test' });
  b += nt.s;
  add('06-kerrow-shuttle',
    svg(900, Y2 + 104 + ck.h + 16 + nt.h + 30, 'Two kinds of evidence about a shuttle bus', b),
    'For the fictional Kerrow Island, summer-weekend cars on the causeway fell from 5,400 to 4,050 (25%) after a shuttle bus started, suggesting modal shift unless weather or visitor numbers differed. A hoteliers’ association claims most visitors oppose the shuttle, but only 15% of members replied, they reported guests’ views second-hand, and they have a vested interest. A random visitor survey would test it.',
    'Measured counts and second-hand opinions need different checks.',
    '## Judging sources and evidence');
}

// 07 France flight ban and Bhutan fee
add('07-flight-ban-and-bhutan',
  compose('Judging national actions on travel', [
    (y) => card(30, y, 840, { kicker: 'FRANCE, MAY 2023', title: 'Ban on some domestic flights where a train takes under 2½ hours', body: 'In practice three routes from Paris-Orly: Bordeaux, Nantes, Lyon. Connecting flights not covered.', tsize: 19, size: 16 }),
    (y) => row(y, [
      { kicker: 'GOVERNMENT', title: 'Part of its climate law', body: 'Wants its policy to look effective.', fill: C.tealLight, edge: C.tealDark },
      { kicker: 'AIRLINES FOR EUROPE', kfill: C.rust, title: '“Symbolic”: little effect on emissions', body: 'A vested interest in fewer restrictions.', edge: C.rust },
    ], { gap: 24, card: { tsize: 18, size: 16 } }),
    (y) => note(y, 'What would settle it: emissions from the three routes compared with all French flights, and whether passengers switched to trains.', { fill: C.panel, edge: C.panelEdge }),
    (y) => label(y + 4, 'Bhutan’s daily Sustainable Development Fee: an action adjusted after evidence', { size: 18 }),
    (y) => row(y, [
      { title: '$65', body: 'before reopening', align: 'middle' },
      { title: '$200', body: 'from September 2022', align: 'middle', fill: C.cream, edge: C.olive },
      { title: '$100', body: 'from 1 September 2023, for four years; visitor numbers had not recovered as hoped', align: 'middle', fill: C.tealLight, edge: C.tealDark },
    ], { arrows: true, gap: 44, card: { tsize: 22, size: 15 } }),
  ]),
  'France banned some domestic flights from May 2023 where a train takes under two and a half hours, in practice three routes from Paris-Orly; the government called it climate policy while an airline group called it symbolic. Bhutan’s daily visitor fee rose from 65 to 200 US dollars in September 2022, then was cut to 100 dollars from September 2023 when visitor numbers did not recover.',
  'Say how success will be measured, because actions can be adjusted once effects are clear.',
  '## Courses of action and their effects');
