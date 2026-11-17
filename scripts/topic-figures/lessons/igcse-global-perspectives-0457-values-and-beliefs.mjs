import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-global-perspectives-0457-values-and-beliefs';
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

// 01 Belief becomes a perspective
add('01-belief-to-perspective',
  compose('When does a belief become a perspective?', [
    (y) => row(y, [
      { kicker: 'A BELIEF', kfill: C.olive, title: 'Held by faith or habit', body: 'Not yet a perspective in the syllabus sense.', fill: C.cream, edge: C.olive },
      { kicker: '+ REASONS AND EVIDENCE', title: 'Set out why it is held', align: 'middle' },
      { kicker: 'A PERSPECTIVE', title: '“A viewpoint on an issue based on evidence and reasoning”', fill: C.tealLight, edge: C.tealDark },
    ], { arrows: true, gap: 46, card: { tsize: 18, size: 15 } }),
    (y) => label(y, 'Two views of values to present fairly', { size: 19 }),
    (y) => spectrum(y, 'Same everywhere', 'Depends on culture', [
      { pos: 0.02, label: 'Universalism', note: 'Some values, such as basic human rights, apply to everyone everywhere.', fill: C.teal },
      { pos: 0.5, label: 'Vienna Declaration (1993)', note: 'Rights are universal, but cultural and religious backgrounds must be borne in mind.', fill: C.mustard },
      { pos: 0.98, label: 'Cultural relativism', note: 'Values understood within each culture, not judged only by outside standards.', fill: C.cream },
    ], { labelW: 260 }),
    (y) => row(y, [
      { title: 'Value', body: 'a belief about what is important or right' },
      { title: 'Secular', body: 'not connected with religion' },
      { title: 'Tolerance', body: 'accepting others may live by beliefs you do not share' },
    ], { card: { tsize: 17, size: 15 } }),
  ]),
  'A belief held by faith or habit becomes a perspective once reasons and evidence are set out. A spectrum runs from universalism, where some values apply everywhere, to cultural relativism, where values are understood within each culture, with the 1993 Vienna Declaration holding both ideas in the middle. Definitions of value, secular and tolerance follow.',
  'Present universalism and relativism as perspectives with reasons, not as right and wrong.',
  '## Key terms for this topic');

// 02 Rest day perspectives
add('02-rest-day-perspectives',
  compose('Should large shops open on the day of rest?', [
    (y) => {
      const col = (x, head, f, e, items) => { let st = T(x + 135, y + 20, head, { size: 18, weight: 700, anchor: 'middle', fill: e }); const k = stack(y + 36, items, { x, w: 270, gap: 10, card: { tsize: 17, size: 15, pad: 14, fill: f, edge: e } }); return { s: st + k.s, h: 36 + k.h }; };
      const A = col(30, 'Favour closure', C.tealLight, C.tealDark, [
        { title: 'Religious groups', body: 'Rest and worship are part of their faith.' },
        { title: 'Some non-religious families', body: 'Value shared family time.' },
        { title: 'Small shop owners', body: 'Rest-day trade is their advantage.' },
      ]);
      const B = col(315, 'Divided', C.panel, C.olive, [
        { title: 'Shop workers', body: 'Some want extra hours and pay; others fear pressure to work on a day they want off.' },
      ]);
      const Cc = col(600, 'Favour opening', C.cream, C.rust, [
        { title: 'Large retailers', body: 'Expect more sales.' },
        { title: 'Free-choice supporters', body: 'People should decide when to shop or rest.' },
      ]);
      return { s: A.s + B.s + Cc.s, h: Math.max(A.h, B.h, Cc.h) };
    },
    (y) => note(y, 'Sunday Trading Act 1994 (England and Wales): large shops may open on Sundays but only for six hours; smaller shops for longer. A law can balance values rather than pick a side.', { title: 'A real compromise' }),
  ]),
  'Three groups on whether large shops should open on the day of rest: religious groups and some non-religious families favour closure; small shop owners prefer it; shop workers are divided; free-choice supporters and large retailers favour opening. The Sunday Trading Act 1994 lets large shops open for six hours, balancing values.',
  'Perspectives on one issue come from faith, family, money and freedom, not just religion.',
  '## Perspectives: why people hold different values');

// 03 Sources of values
add('03-why-values-differ',
  compose('Where values come from', [
    (y) => hub(y, 'A person’s values', [
      { title: 'Upbringing and family' },
      { title: 'Religion or belief', body: 'teachings about rest, food, charity, duty' },
      { title: 'Culture and history' },
      { title: 'Economic position', body: 'what they stand to gain or lose' },
      { title: 'Personal experience' },
      { title: 'Generation', body: 'growing up in different conditions' },
    ], { r: 90, cardW: 270, csize: 19 }),
    (y) => label(y, 'Causes of value disagreements', { size: 19 }),
    (y) => chips(y, ['Different religious or moral teachings', 'Generational change', 'Migration', 'Economic change and media', 'Laws from a time of more shared beliefs'], { fill: C.cream, edge: C.olive, size: 16 }),
  ]),
  'Six sources of a person’s values surround a central hub: upbringing and family, religion or belief, culture and history, economic position, personal experience and generation. Below, causes of value disagreements: different teachings, generational change, migration, economic change and media, and laws written when beliefs were more shared.',
  'Explain why someone holds a value before judging it.',
  '## Causes and consequences');

// 04 Inglehart theory evaluation
add('04-inglehart-theory',
  compose('Evaluating a theory of changing values', [
    (y) => {
      const s = `<defs><linearGradient id="ig" x1="0" x2="1"><stop offset="0" stop-color="${C.cream}"/><stop offset="1" stop-color="${C.teal}"/></linearGradient></defs>` + `<path d="M40,${y + 20} L800,${y + 20} L860,${y + 70} L800,${y + 120} L40,${y + 120} Z" fill="url(#ig)" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>` +
        T(70, y + 64, 'Survival priorities', { size: 21, weight: 700 }) + T(70, y + 92, 'as economic security grows…', { size: 16, fill: C.muted }) +
        T(780, y + 64, 'Self-expression', { size: 21, weight: 700, anchor: 'end' }) + T(780, y + 92, 'personal freedom, tolerance', { size: 16, anchor: 'end' });
      return { s, h: 120 };
    },
    (y) => ({ s: T(450, y + 4, 'Ronald Inglehart’s argument, drawing on the World Values Survey (first carried out 1981)', { size: 16, anchor: 'middle', fill: C.muted, italic: true }), h: 8 }),
    (y) => row(y, [
      { kicker: 'STRENGTH', title: 'Surveys repeated over decades in many countries', fill: C.tealLight, edge: C.tealDark },
      { kicker: 'LIMITATION', kfill: C.rust, title: 'Survey data show links, not proof of cause', edge: C.rust },
      { kicker: 'CRITICS', kfill: C.rust, title: 'Treats one path of change as normal for every society', edge: C.rust },
    ], { card: { tsize: 17 } }),
  ]),
  'An arrow from survival priorities to self-expression shows Ronald Inglehart’s argument that, as societies become more economically secure, priorities shift towards personal freedom and tolerance, drawing on the World Values Survey first carried out in 1981. Strength: decades of repeated surveys. Limitations: links not cause, and critics say it treats one path as normal for all.',
  'A well-evidenced theory can still show correlation rather than cause.',
  '## Causes and consequences');

// 05 Ardley volunteering
{
  const Y = 120;
  let b = card(30, Y - 6, 840, { kicker: 'AN OLDER RESIDENT OF FICTIONAL ARDLEY', title: '“Young people today don’t care about their community.”', tsize: 20, fill: C.panel, edge: C.ink }).s;
  const gy = Y + 140;
  b += T(30, gy - 8, 'Youth club survey: volunteered in the past year?', { size: 17, weight: 700 });
  for (let i = 0; i < 80; i++) { const r = Math.floor(i / 20), c = i % 20; b += `<circle cx="${45 + c * 29}" cy="${gy + 18 + r * 29}" r="11" fill="${i < 28 ? C.teal : C.panel}" stroke="${C.ink}" stroke-width="2"/>`; }
  b += card(640, gy - 6, 230, { title: '28 of 80', body: '(35%) said yes', align: 'middle', tsize: 26, size: 16, fill: C.tealLight, edge: C.tealDark }).s;
  const ck = checklist(gy + 140, [
    { q: 'No comparison with older people', mark: 'x' },
    { q: 'The sample is only club members', mark: 'x' },
    { q: 'Informal help, such as caring for a relative, may not be counted', mark: 'x' },
  ], { gap: 8, tsize: 18 });
  b += ck.s;
  const nt = note(gy + 140 + ck.h + 16, 'The evidence cannot settle the generalisation either way.', { title: 'Judgement' });
  b += nt.s;
  add('05-ardley-volunteering',
    svg(900, gy + 140 + ck.h + 16 + nt.h + 30, 'Does 35% prove young people don’t care?', b),
    'Eighty dots, 28 shaded, show that 28 of 80 members of a fictional Ardley youth club (35%) volunteered in the past year. Tested against the claim that young people don’t care about their community, the evidence fails: there is no comparison with older people, the sample is only club members, and informal help may be missed.',
    'Without a comparison group, one figure cannot support a generalisation.',
    '## Causes and consequences');
}

// 06 Rights frameworks
add('06-rights-documents',
  compose('Rights documents, and where they pull apart', [
    (y) => row(y, [
      { kicker: 'UDHR (1948), ARTICLE 18', title: 'Freedom of thought, conscience and religion', fill: C.tealLight, edge: C.tealDark },
      { kicker: 'UDHR (1948), ARTICLE 19', title: 'Freedom of opinion and expression', fill: C.cream, edge: C.olive, kfill: C.olive },
    ], { gap: 90, card: { tsize: 18 } }),
    (y) => ({ s: `<path d="M420,${y - 60} L480,${y - 60}" stroke="${C.rust}" stroke-width="4" marker-start="url(#ahR)" marker-end="url(#ahR)"/>` + T(450, y - 70, 'can pull', { size: 15, weight: 700, anchor: 'middle', fill: C.rust }) + T(450, y - 36, 'apart', { size: 15, weight: 700, anchor: 'middle', fill: C.rust }), h: 0 }),
    (y) => table(y, ['Source', 'Strength', 'Limitation'], [
      ['UDHR (1948)', 'Widely recognised', 'A declaration, not a treaty'],
      ['ICCPR (adopted 1966, in force 1976)', 'States that ratify agree to be bound; allows limits set by law where necessary', 'States interpret “necessary” differently'],
      ['Pew Research Center (June 2025)', 'Over 2,700 data sources, 201 countries; transparent method', 'Measures identity, not belief or practice'],
    ], [260, 320, 260], { size: 16 }),
    (y) => note(y, 'Pew estimated that in 2020 about 24.2% of the world was religiously unaffiliated. Using that global figure to call one country’s rest-day law out of date is a jump: the local share may differ, and unaffiliated people may still value a day of rest.', { title: 'Reliable evidence, weak reasoning' }),
  ]),
  'UDHR Articles 18 (freedom of religion) and 19 (freedom of expression) can pull against each other. A table evaluates the UDHR, the ICCPR and a June 2025 Pew report. Using Pew’s global estimate of about 24.2% religiously unaffiliated to argue one country’s rest-day law is outdated is reliable evidence used with weak reasoning.',
  'Check that a reliable figure actually connects to the conclusion drawn from it.',
  '## Judging sources and evidence');

// 07 Courses of action: Danish law and compromise
add('07-values-actions',
  compose('Actions on value disagreements', [
    (y) => card(30, y, 840, { kicker: 'DENMARK, DECEMBER 2023 (94 VOTES TO 77)', title: 'A law protecting religious objects from public destruction', body: 'Penalties: a fine or up to two years in prison.', tsize: 19, size: 16 }),
    (y) => balance(y, { tag: 'government', title: 'The government argued', items: ['Needed for Denmark’s security'] }, { tag: 'critics', title: 'Critics argued', items: ['It restricts freedom of expression'] }, { size: 16 }),
    (y) => row(y, [
      { title: 'Compromise laws', body: 'keep some of each side’s values; may fully satisfy nobody' },
      { title: 'Dialogue groups', body: 'people of different faiths and none discuss shared concerns' },
      { title: 'Flexible policies', body: 'menu choices, time off for festivals' },
    ], { card: { tsize: 17, size: 15 } }),
  ]),
  'Denmark passed a law in December 2023, by 94 votes to 77, protecting religious objects from public destruction with a fine or up to two years in prison; the government cited security and critics cited freedom of expression. Other actions: compromise laws, dialogue groups and flexible policies such as menu choices or festival time off.',
  'Contested actions should be presented with both sides’ reasons.',
  '## Courses of action');
