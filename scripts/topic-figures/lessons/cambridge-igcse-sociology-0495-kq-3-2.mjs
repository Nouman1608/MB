import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-igcse-sociology-0495-kq-3-2';
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


// ---- lesson figures ----
const box = (x, y, w, h, text, o = {}) => card(x, y, w, { title: text, body: o.body, align: 'middle', minH: h, vcenter: true, tsize: o.tsize ?? 18, size: o.size ?? 16, fill: o.fill ?? C.panel, edge: o.edge ?? C.ink, tfill: o.tfill ?? C.ink, bfill: o.bfill, pad: o.pad ?? 12 }).s;

// 01 Progressive tax worked example
{
  const Y = 130;
  let b = panel(30, Y, 840, 330);
  const x0 = 230, scale = 600 / 100000;
  const bar = (y, inc, label, paid, pct) => {
    let s = T(x0 - 18, y + 30, label, { size: 18, weight: 700, anchor: 'end' }) + T(x0 - 18, y + 52, 'income', { size: 15, anchor: 'end', fill: C.muted });
    const w1 = Math.min(inc, 20000) * scale, w2 = Math.max(0, inc - 20000) * scale;
    s += `<rect x="${x0}" y="${y}" width="${w1}" height="64" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2"/>`;
    s += `<rect x="${x0}" y="${y}" width="${w1 * 0.1}" height="64" fill="${C.tealDark}"/>`;
    if (w2) { s += `<rect x="${x0 + w1}" y="${y}" width="${w2}" height="64" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/><rect x="${x0 + w1}" y="${y}" width="${w2 * 0.4}" height="64" fill="${C.rust}"/>`; }
    s += T(x0 + w1 + w2 + 12, y + 30, `pays ${paid}`, { size: 18, weight: 700, anchor: w2 ? 'end' : 'start', fill: C.ink }).replace(`x="${x0 + w1 + w2 + 12}"`, `x="${w2 ? x0 + w1 + w2 - 12 : x0 + w1 + 12}"`);
    s += T(w2 ? x0 + w1 + w2 - 12 : x0 + w1 + 12, y + 54, `= ${pct} of income`, { size: 16, weight: 600, anchor: w2 ? 'end' : 'start', fill: C.muted });
    return s;
  };
  b += bar(Y + 30, 20000, '20,000', '2,000', '10%');
  b += bar(Y + 130, 100000, '100,000', '2,000 + 32,000', '34%');
  b += T(x0 + 60, Y + 236, 'first 20,000 at 10%', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 }) + T(x0 + 120 + 240, Y + 236, 'income above 20,000 at 40%', { size: 16, anchor: 'middle', fill: C.rust, weight: 600 });
  b += `<rect x="${x0}" y="${Y + 266}" width="22" height="22" fill="${C.tealDark}"/><rect x="${x0 + 30}" y="${Y + 266}" width="22" height="22" fill="${C.rust}"/>` + T(x0 + 62, Y + 284, 'dark part = tax paid', { size: 16 });
  const r = row(Y + 350, [
    { title: 'Progressive', body: 'The percentage paid rises as income rises, so the gap after tax is smaller than before tax.', fill: C.tealLight, edge: C.tealDark, tfill: C.tealDark },
    { title: 'Regressive', body: 'Takes a larger share of poorer people’s income, e.g. a sales tax on everyday goods.', fill: C.cream, edge: C.rust, tfill: C.rust },
  ], { gap: 20, card: { size: 16, tsize: 20 } });
  b += r.s;
  add('01-progressive-tax',
    svg(900, Y + 350 + r.h + 28, 'How a progressive tax narrows the gap', b, 'Illustrative example with invented rates'),
    'Two income bars with invented rates: 10% on the first 20,000 and 40% above that. A person earning 20,000 pays 2,000, or 10%; a person earning 100,000 pays 34,000, or 34%. A progressive tax takes a higher percentage as income rises; a regressive tax takes a larger share from the poor.',
    'Progressive means a higher percentage, not just more money.',
    '## Legislation (3.2.1)');
}

// 02 Redistribution
{
  const Y = 110;
  let b = '';
  b += box(30, Y + 50, 210, 120, 'Higher-income groups', { body: 'progressive taxes take more', fill: C.mustard, tsize: 19, bfill: C.ink });
  b += box(345, Y + 50, 210, 120, 'Government', { body: 'tax revenue', fill: C.panel, tsize: 20 });
  b += box(660, Y + 50, 210, 120, 'Lower-income groups', { body: 'receive benefits and services', fill: C.tealLight, edge: C.tealDark, tsize: 19, bfill: C.ink });
  b += arrow(246, Y + 110, 339, Y + 110, { w: 6 }) + T(292, Y + 96, 'taxes', { size: 17, weight: 700, anchor: 'middle' });
  b += arrow(561, Y + 110, 654, Y + 110, { w: 6, color: C.tealDark, marker: 'ahT' }) + T(607, Y + 96, 'pays out', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += T(135, Y + 30, 'take more from the top', { size: 16, anchor: 'middle', fill: C.muted, weight: 600 }) + T(765, Y + 30, 'give to the bottom', { size: 16, anchor: 'middle', fill: C.muted, weight: 600 });
  b += T(450, Y + 212, 'Benefits and services, e.g.', { size: 17, anchor: 'middle', weight: 700, fill: C.tealDark });
  b += chips(Y + 228, ['child benefits', 'disability payments', 'housing support'], { size: 17 }).s;
  add('02-redistribution',
    svg(900, Y + 300, 'Redistribution works from both ends', b),
    'Taxes flow from higher-income groups to the government, which pays out benefits and services such as child benefits, disability payments and housing support to lower-income groups.',
    'Redistribution takes more from the top and gives to the bottom.',
    '## Legislation (3.2.1)');
}

// 03 Other legislation
add('03-laws-against-inequality',
  compose('More legal tools against inequality', [
    (y) => row(y, [
      { kicker: 'MINIMUM WAGE', title: 'UK National Minimum Wage, 1999', body: ['+ Reduces in-work poverty; helps women and young workers', '− May cut jobs or hours; nothing for people without work'], fill: C.tealLight, edge: C.tealDark, kfill: C.tealDark },
      { kicker: 'EQUAL OPPORTUNITIES LAWS', title: 'Discrimination made unlawful', body: ['UK Equal Pay Act 1970', 'UK Equality Act 2010', 'India: reservations for Scheduled Castes and Tribes'], fill: C.cream, edge: C.olive, kfill: C.olive },
    ], { gap: 20, card: { size: 16, tsize: 19, gap: 8, bfill: C.ink } }),
    (y) => card(30, y, 840, { kicker: 'OTHER GOVERNMENT MEASURES', title: 'Conditional cash transfers', body: 'Pay poor families if they meet goals such as school attendance: Mexico’s Progresa (1997) became an influential model. Also affirmative action, job-creation schemes, and food or fuel subsidies.', fill: C.panel, kfill: C.muted, size: 16, tsize: 19, bfill: C.ink }),
  ]),
  'Legal measures: the UK minimum wage of 1999, with arguments for and against; equal opportunities laws such as the Equal Pay Act 1970, the Equality Act 2010 and Indian reservations; and conditional cash transfers such as Mexico’s Progresa, plus affirmative action, job creation and subsidies.',
  'Laws can set a pay floor, ban discrimination and reward families for meeting goals.',
  '## Legislation (3.2.1)');

// 04 Welfare across life
{
  const Y = 110;
  let b = '';
  b += arrow(50, Y + 30, 850, Y + 30, { w: 4 });
  [['childhood', 150], ['working age', 450], ['old age', 760]].forEach(([l, x]) => { b += `<circle cx="${x}" cy="${Y + 30}" r="8" fill="${C.ink}"/>` + T(x, Y + 62, l, { size: 17, weight: 700, anchor: 'middle', fill: C.muted }); });
  const c1 = card(30, Y + 80, 250, { title: 'Free education', body: ['+ Qualifications open routes to better jobs', '− Richer families buy tutoring'], fill: C.tealLight, edge: C.tealDark, size: 16, gap: 6 });
  const c2a = card(310, Y + 80, 280, { title: 'Unemployment benefits', body: ['+ Prevent destitution between jobs', '− Often low; strict conditions'], fill: C.tealLight, edge: C.tealDark, size: 16, gap: 6 });
  const c3 = card(620, Y + 80, 250, { title: 'Pensions', body: ['+ Reduce poverty in old age', '− May not keep pace with living costs'], fill: C.tealLight, edge: C.tealDark, size: 16, gap: 6 });
  const h1 = Math.max(c1.h, c2a.h, c3.h);
  b += card(30, Y + 80, 250, { title: 'Free education', body: ['+ Qualifications open routes to better jobs', '− Richer families buy tutoring'], fill: C.tealLight, edge: C.tealDark, size: 16, gap: 6, minH: h1 }).s;
  b += card(310, Y + 80, 280, { title: 'Unemployment benefits', body: ['+ Prevent destitution between jobs', '− Often low; strict conditions'], fill: C.tealLight, edge: C.tealDark, size: 16, gap: 6, minH: h1 }).s;
  b += card(620, Y + 80, 250, { title: 'Pensions', body: ['+ Reduce poverty in old age', '− May not keep pace with living costs'], fill: C.tealLight, edge: C.tealDark, size: 16, gap: 6, minH: h1 }).s;
  const y2 = Y + 80 + h1 + 20;
  b += T(450, y2 + 18, 'Across the whole life course', { size: 18, weight: 700, anchor: 'middle' });
  const r = row(y2 + 32, [
    { title: 'Free healthcare', body: ['+ Treatment regardless of income', '− Waiting times; class health gaps remain'] },
    { title: 'Low-cost housing', body: ['+ Secure homes help health and schooling', '− Shortages, waiting lists'] },
    { title: 'Universal basic income', body: ['+ Removes the poverty trap', '− Very expensive; fears over work incentives'] },
  ], { gap: 15, card: { size: 16, gap: 6, fill: C.cream, edge: C.olive } });
  b += r.s;
  const r2 = row(y2 + 32 + r.h + 18, [
    { title: 'Universal', body: 'available to everyone, e.g. free schooling', fill: C.panel },
    { title: 'Means-tested', body: 'only below an income level, e.g. some housing support', fill: C.panel },
  ], { gap: 20, card: { size: 16, tsize: 19 } });
  b += r2.s;
  add('04-welfare-state',
    svg(900, y2 + 32 + r.h + 18 + r2.h + 28, 'What a welfare state provides', b),
    'Welfare provision across life: free education in childhood, unemployment benefits at working age and pensions in old age, plus free healthcare, low-cost housing and universal basic income throughout, each with a benefit and a limit. Provision can be universal or means-tested.',
    'Each provision improves life chances, but each has limits.',
    '## Welfare states (3.2.2)');
}

// 05 NGOs
{
  const Y = 110;
  const ic = {
    poverty: (x, y) => `<circle cx="${x}" cy="${y}" r="26" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + `<circle cx="${x}" cy="${y}" r="15" fill="none" stroke="${C.olive}" stroke-width="2.5"/>`,
    medical: (x, y) => `<rect x="${x - 26}" y="${y - 26}" width="52" height="52" rx="10" fill="${C.panel}" stroke="${C.ink}" stroke-width="3"/><path d="M${x - 6},${y - 18} h12 v12 h12 v12 h-12 v12 h-12 v-12 h-12 v-12 h12 z" fill="${C.rust}"/>`,
    business: (x, y) => `<rect x="${x - 26}" y="${y - 14}" width="52" height="38" rx="6" fill="${C.cream}" stroke="${C.ink}" stroke-width="3"/><path d="M${x - 10},${y - 14} v-10 h20 v10" fill="none" stroke="${C.ink}" stroke-width="3"/>`,
    education: (x, y) => `<path d="M${x - 30},${y - 4} L${x},${y - 20} L${x + 30},${y - 4} L${x},${y + 12} Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/><path d="M${x - 16},${y + 4} v14 q16,10 32,0 v-14" fill="${C.teal}" stroke="${C.ink}" stroke-width="3"/>`,
  };
  const items = [
    ['poverty', 'Reducing poverty', 'Oxfam: founded in Oxford in 1942 as a famine relief committee; poverty and emergency programmes'],
    ['medical', 'Medical assistance', 'Vaccination, clinics, clean water and sanitation reduce illness that keeps families poor'],
    ['business', 'Promoting business', 'Microfinance: small loans and training, often for women, to start small businesses'],
    ['education', 'Improving education', 'Save the Children (1919, Jebb and Buxton); building schools; paying girls’ school fees'],
  ];
  let b = '';
  items.forEach(([k, ti, bo], i) => {
    const x = 30 + (i % 2) * 430, y = Y + Math.floor(i / 2) * 160;
    b += panel(x, y, 410, 145) + `<circle cx="${x + 52}" cy="${y + 56}" r="38" fill="${C.tealLight}"/>` + ic[k](x + 52, y + 56);
    b += card(x + 92, y, 318, { title: ti, body: bo, size: 16, tsize: 20, pad: 16, fill: 'none', edge: 'none' }).s;
  });
  const n = note(Y + 310, 'Criticisms: NGOs may create dependency, answer to donors rather than local people, lack coordination, or let governments avoid responsibility.', { fill: C.panel, edge: C.rust });
  b += n.s;
  add('05-ngo-work',
    svg(900, Y + 310 + n.h + 28, 'Four kinds of NGO work', b),
    'Four kinds of NGO work: reducing poverty (Oxfam), medical assistance (vaccination, clinics, clean water), promoting business through microfinance, and improving education (Save the Children). A note lists criticisms of NGOs.',
    'NGOs reduce poverty, provide medical help, promote business and improve education.',
    '## NGOs (3.2.3)');
}

// 06 Views of success
add('06-views-of-success',
  compose('Have these attempts worked?', [
    (y) => {
      const L = card(30, y, 360, { kicker: 'WELFARE DOES TOO MUCH', title: 'New Right', body: 'Creates an underclass and a dependency culture (Murray); target only those in real need (Marsland)', fill: C.cream, edge: C.rust, kfill: C.rust, size: 16, tsize: 20 });
      const R = card(510, y, 360, { kicker: 'WELFARE DOES TOO LITTLE', title: 'Marxist', body: 'A concession that keeps workers fit to be exploited and prevents revolt; ownership of wealth unchanged', fill: C.tealLight, edge: C.tealDark, kfill: C.tealDark, size: 16, tsize: 20 });
      const h = Math.max(L.h, R.h);
      const s2 = card(30, y, 360, { kicker: 'WELFARE DOES TOO MUCH', title: 'New Right', body: 'Creates an underclass and a dependency culture (Murray); target only those in real need (Marsland)', fill: C.cream, edge: C.rust, kfill: C.rust, size: 16, tsize: 20, minH: h }).s + card(510, y, 360, { kicker: 'WELFARE DOES TOO LITTLE', title: 'Marxist', body: 'A concession that keeps workers fit to be exploited and prevents revolt; ownership of wealth unchanged', fill: C.tealLight, edge: C.tealDark, kfill: C.tealDark, size: 16, tsize: 20, minH: h }).s;
      return { s: s2 + `<line x1="398" y1="${y + h / 2}" x2="502" y2="${y + h / 2}" stroke="${C.ink}" stroke-width="4" marker-start="url(#ah)" marker-end="url(#ah)"/>` + T(450, y + h / 2 - 14, 'opposite', { size: 15, anchor: 'middle', weight: 600 }) + T(450, y + h / 2 + 30, 'criticisms', { size: 15, anchor: 'middle', weight: 600 }), h };
    },
    (y) => row(y, [
      { title: 'Culture of poverty', body: 'Lewis: fatalistic values passed on, so cash alone cannot end poverty. Reply: the values react to poverty.' },
      { title: 'Feminist', body: 'Equal pay laws have not closed the gap; laws cannot reach unpaid care; male breadwinner assumed.' },
      { title: 'Criticisms of NGOs', body: 'Dependency, donor-led, poor coordination. Moyo, Dead Aid (2009): aid fed dependency and corruption.' },
    ], { gap: 14, card: { size: 16, tsize: 19 } }),
    (y) => note(y, 'Overall: absolute deprivation has clearly fallen in many societies, but relative inequality, especially of wealth, often remains wide.'),
  ]),
  'The New Right say welfare does too much and creates dependency; Marxists say it does too little and leaves ownership unchanged. Below are the culture of poverty, feminist criticisms of equality laws and criticisms of NGOs. Overall, absolute deprivation has fallen but relative inequality remains.',
  'The New Right say welfare does too much; Marxists say too little.',
  '## How successful have these attempts been? (3.2.4)');

// 07 Evaluate welfare
add('07-evaluate-welfare',
  compose('Have welfare states failed?', [
    (y) => balance(y, {
      tag: 'FAILED', title: 'Yes, they have failed', items: ['Marxists: only softens capitalism; wealth concentrated', 'Class health gaps persist even with free healthcare', 'New Right: underclass and dependency', 'Feminists: male breadwinner model'],
    }, {
      tag: 'SUCCEEDED', title: 'No, real gains', items: ['Education, pensions, healthcare extend life chances', 'Universal schooling enables some mobility', 'Benefits prevent destitution', 'Without welfare, inequality would probably be far greater'],
    }, { tilt: 0.5, verdictTitle: 'Judgement', verdict: 'Welfare states have reduced absolute poverty and the worst effects of inequality, but not relative inequality: “limited success” is fairer than “failed”.' }),
  ]),
  'A balance weighing claims that welfare states have failed (Marxist, New Right and feminist criticisms, persistent class health gaps) against real gains in life chances, mobility and protection from destitution. The judgement is limited success.',
  '“Limited success” is fairer than “failed”.',
  '## Worked example: Question 3(f)-style evaluation');
