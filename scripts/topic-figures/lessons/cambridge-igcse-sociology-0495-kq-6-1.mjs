import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-igcse-sociology-0495-kq-6-1';
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

// 01 Crime and deviance overlap
{
  const Y = 110;
  let b = panel(30, Y, 840, 380);
  const cy = Y + 205, R = 140;
  b += `<circle cx="350" cy="${cy}" r="${R}" fill="${C.cream}" fill-opacity="0.85" stroke="${C.olive}" stroke-width="3"/><circle cx="550" cy="${cy}" r="${R}" fill="${C.teal}" fill-opacity="0.55" stroke="${C.tealDark}" stroke-width="3"/>`;
  b += T(330, Y + 42, 'Deviance', { size: 22, weight: 700, anchor: 'middle', fill: C.olive }) + T(570, Y + 42, 'Crime', { size: 22, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += para(115, cy - 40, 'Breaks social norms; attracts disapproval', 150, { size: 16, anchor: 'middle', fill: C.olive, weight: 600 }).s;
  b += para(785, cy - 40, 'Breaks criminal law; punishable by the state', 150, { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 }).s;
  b += para(285, cy - 18, 'Talking loudly in a library', 130, { size: 17, anchor: 'middle', weight: 700 }).s + T(285, cy + 50, 'deviant, not', { size: 15, anchor: 'middle', fill: C.olive, weight: 600 }) + T(285, cy + 68, 'criminal', { size: 15, anchor: 'middle', fill: C.olive, weight: 600 });
  b += T(450, cy - 4, 'Most', { size: 17, anchor: 'middle', weight: 700 }) + T(450, cy + 18, 'crime', { size: 17, anchor: 'middle', weight: 700 });
  b += para(615, cy - 6, 'Minor speeding', 120, { size: 17, anchor: 'middle', weight: 700 }).s + T(615, cy + 50, 'criminal, barely', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600 }) + T(615, cy + 68, 'deviant', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600 });
  const r = row(Y + 400, [
    { title: 'Between societies', body: 'Alcohol legal in many countries, prohibited in others such as Saudi Arabia' },
    { title: 'Within a society', body: 'Face tattoos accepted in one subculture, deviant to others' },
    { title: 'Situation', body: 'Killing: murder in peacetime, lawful for a soldier in war' },
    { title: 'Across time', body: 'England and Wales: sex between men partly decriminalised in 1967; smoking ban in 2007' },
  ], { gap: 12, card: { size: 15, tsize: 17, fill: C.cream, edge: C.olive } });
  b += r.s;
  b += T(450, Y + 400 + r.h + 30, 'Relativity: whether an act counts depends on context', { size: 17, anchor: 'middle', weight: 700, fill: C.olive });
  add('01-crime-deviance-relativity',
    svg(900, Y + 400 + r.h + 52, 'Crime, deviance and relativity', b),
    'Overlapping circles: deviance breaks norms, crime breaks the law, and most crime falls in the overlap. Talking loudly in a library is deviant but not criminal; minor speeding is criminal but barely deviant. Below, relativity between societies, within a society, by situation and across time.',
    'Most crime is deviant, but not all deviance is crime, and both depend on context.',
    '## Crime, deviance and relativity (6.1.1)');
}

// 02 Durkheim and Becker
add('02-durkheim-and-becker',
  compose('Two explanations of relativity', [
    (y) => row(y, [
      { kicker: 'DURKHEIM', title: 'Some crime is normal and functional', body: ['Reacting to crime reminds people of shared rules: boundary maintenance', 'It can prompt social change'], fill: C.tealLight, edge: C.tealDark, kfill: C.tealDark },
      { kicker: 'BECKER (1963)', title: 'Deviance is a label', body: ['Not a quality of the act itself', 'Deviant behaviour is behaviour people so label', 'Powerful groups decide which acts are labelled'], fill: C.cream, edge: C.olive, kfill: C.olive },
    ], { gap: 20, card: { bullets: true, size: 17, tsize: 20, gap: 8, bfill: C.ink } }),
  ]),
  'Durkheim argued some crime is normal and functional, reminding people of shared rules and prompting change. Becker argued deviance is a label applied by others, with powerful groups deciding which acts are labelled.',
  'Durkheim explains why crime exists; Becker explains who defines it.',
  '## Crime, deviance and relativity (6.1.1)');

// 03 Formal vs informal agencies
{
  const Y = 110;
  let b = '';
  const col = (x, head, sub, hcol, fill, edge, items) => {
    let s = T(x + 205, Y + 22, head, { size: 22, weight: 700, anchor: 'middle', fill: hcol }) + T(x + 205, Y + 46, sub, { size: 16, anchor: 'middle', fill: C.muted });
    let cy = Y + 62;
    items.forEach(([k, v]) => { const c = card(x, cy, 410, { title: k, body: v, fill, edge, size: 15, tsize: 17, pad: 12 }); s += c.s; cy += c.h + 8; });
    return { s, h: cy - Y };
  };
  const a = col(30, 'Formal control', 'state agencies; written rules; official sanctions', C.tealDark, C.tealLight, C.tealDark, [
    ['Police', 'Patrol, investigate, arrest, caution; presence deters'],
    ['Courts', 'Decide guilt; sentence; make an example'],
    ['Armed forces', 'Defend the state; restore order in emergencies'],
    ['Government', 'Makes laws defining crime; sets policy'],
    ['Penal system', 'Prisons, probation, community sentences'],
  ]);
  const c = col(460, 'Informal control', 'everyday relationships; informal sanctions', C.olive, C.cream, C.olive, [
    ['Family', 'Grounding, praise, disappointment'],
    ['Education', 'Rules, detentions, rewards, hidden curriculum'],
    ['Workplace', 'Promotion, warnings, dismissal'],
    ['Peer group', 'Acceptance or ridicule'],
    ['Traditional and digital media', 'Public shaming, “likes”, removing posts'],
    ['Religion', 'Moral codes; reward or punishment after death'],
  ]);
  b += a.s + c.s;
  add('03-agencies-of-control',
    svg(900, Y + Math.max(a.h, c.h) + 22, 'Agencies of social control', b),
    'Formal control by the police, courts, armed forces, government and penal system, each with its method; informal control by family, education, workplace, peer group, media and religion through sanctions such as praise, ridicule, dismissal and public shaming.',
    'Formal control comes from the state; informal control comes from everyday relationships.',
    '## Formal social control (6.1.2)');
}

// 04 Hirschi bonds and effectiveness
add('04-effectiveness-of-control',
  compose('Which kind of control works better?', [
    (y) => card(30, y, 840, { kicker: 'HIRSCHI’S SOCIAL BOND THEORY (1969)', title: 'People avoid crime when bonds to society are strong', fill: C.cream, edge: C.olive, kfill: C.olive, tsize: 19 }),
    (y) => row(y, [
      { title: 'Attachment', body: 'to other people' },
      { title: 'Commitment', body: 'to conventional goals' },
      { title: 'Involvement', body: 'in conventional activities' },
      { title: 'Belief', body: 'in the rules' },
    ], { gap: 12, card: { size: 16, tsize: 19, align: 'middle', fill: C.tealLight, edge: C.tealDark } }),
    (y) => balance(y, {
      tag: 'INFORMAL', title: 'Informal is more effective', items: ['Constant: people care what family and friends think', 'Internalised: well-socialised people control themselves'],
    }, {
      tag: 'FORMAL', title: 'Formal is needed', items: ['Some people are not reached by informal control', 'Serious crime needs arrest and imprisonment', 'Surveillance: Foucault, people who may be watched discipline themselves'],
    }, { tilt: 0, verdictTitle: 'Limits of both', verdict: 'Many crimes are never detected; peers and media can encourage deviance; Marxists say formal control targets the working class; Heidensohn says women are more tightly controlled informally.' }),
  ]),
  'Hirschi’s four bonds (attachment, commitment, involvement, belief) explain why most people conform. A balance weighs informal control (constant and internalised) against formal control (needed for those not reached and for serious crime, plus surveillance), with limits of both.',
  'Strong bonds do most of the work; formal control catches what they miss.',
  '## How effective is social control? (6.1.4)');

// 05 Types of crime
{
  const Y = 110;
  const types = [
    ['Violent', 'Assault'], ['Property', 'Burglary, theft'], ['White-collar / corporate', 'Embezzlement'], ['Expressive', 'Fight after an insult'],
    ['Instrumental', 'Shoplifting to sell'], ['Gang', 'Drug dealing for territory'], ['Green', 'Dumping toxic waste'], ['Global / organised', 'People trafficking'],
    ['Cyber', 'Hacking, ransomware'], ['Hate', 'Attacks on a religion'], ['Domestic', 'Coercive control'],
  ];
  const W = 200, gx = 13.33, H = 92;
  let b = '';
  types.forEach(([n, e], i) => {
    const x = 30 + (i % 4) * (W + gx), y = Y + Math.floor(i / 4) * (H + 12);
    b += card(x, y, W, { title: n, body: 'e.g. ' + e, align: 'middle', minH: H, vcenter: true, size: 15, tsize: 17, pad: 10, fill: [C.tealLight, C.cream, C.panel][Math.floor(i / 4)], edge: [C.tealDark, C.olive, C.ink][Math.floor(i / 4)] }).s;
  });
  const y2 = Y + 3 * (H + 12) + 8;
  // case study overlap
  b += card(30 + 3 * (W + gx), Y + 2 * (H + 12), W, { title: 'Types overlap', body: 'Say which features fit each label', align: 'middle', minH: H, vcenter: true, size: 15, tsize: 17, pad: 10, fill: C.mustard, edge: C.ink, bfill: C.ink }).s;
  const c = card(30, y2, 840, { kicker: 'WORKED STIMULUS', title: 'Young men steal designer trainers, then post videos insulting a rival group of another religion', fill: C.cream, edge: C.olive, kfill: C.olive, tsize: 18 });
  b += c.s;
  const r = row(y2 + c.h + 12, [
    { title: 'The theft', body: 'Property + instrumental; gang if organised around territory or identity' },
    { title: 'The posts', body: 'Hate crime if targeting religion; cyber-enabled' },
    { title: 'Apply 6.1.6', body: 'Theft may not be recorded: no witness, low value, shop does not report' },
  ], { gap: 12, card: { size: 16, tsize: 18 } });
  b += r.s;
  add('05-types-of-crime',
    svg(900, y2 + c.h + 12 + r.h + 28, 'Eleven types of crime', b),
    'Eleven crime types with an example each: violent, property, white-collar or corporate, expressive, instrumental, gang, green, global or organised, cyber, hate and domestic. A worked stimulus shows one incident fitting several types: a theft that is property and instrumental crime, and online posts that may be hate and cyber crime.',
    'One incident can fit several crime types at once.',
    '## Types of crime (6.1.5)');
}

// 06 Measuring crime
{
  const Y = 110;
  let b = panel(30, Y, 840, 360);
  const lv = [['All crime', 780, C.tealLight], ['Experienced by victims who know', 640, C.teal], ['Reported to police', 470, C.cream], ['Recorded by police', 310, C.mustard]];
  lv.forEach(([l, w, f], i) => {
    const y = Y + 24 + i * 78, x = 450 - w / 2;
    b += `<rect x="${x}" y="${y}" width="${w}" height="64" rx="10" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + T(450, y + 39, l, { size: 18, weight: 700, anchor: 'middle' });
  });
  // measure tags
  const tag = (x, y, s, col) => `<rect x="${x}" y="${y}" width="150" height="30" rx="15" fill="${C.panel}" stroke="${col}" stroke-width="2.5"/>` + T(x + 75, y + 21, s, { size: 15, weight: 700, anchor: 'middle', fill: col });
  b += tag(70, Y + 41, 'Self-report', C.olive) + tag(140, Y + 119, 'Victim surveys', C.tealDark) + tag(630, Y + 275, 'Official stats', C.rust);
  b += T(450, Y + 342, 'Gap between all crime and recorded crime = the dark figure', { size: 16, anchor: 'middle', fill: C.rust, weight: 700 });
  const r = row(Y + 380, [
    { title: 'Why unreported', body: 'Seen as trivial; no confidence in police; fear of reprisals; embarrassment; not realising; relationship with the offender; victimless crimes', fill: C.cream, edge: C.olive, tfill: C.olive },
    { title: 'Why unrecorded', body: 'Police discretion; decision that no crime occurred; insufficient evidence; pressure from targets', fill: C.cream, edge: C.rust, tfill: C.rust },
  ], { gap: 20, card: { size: 16, tsize: 19 } });
  b += r.s;
  add('06-measuring-crime',
    svg(900, Y + 380 + r.h + 28, 'Measuring crime and the dark figure', b),
    'Nested bars narrow from all crime, to crime experienced by victims who know, to crime reported, to crime recorded by police. Self-report studies reach offending at the widest level, victim surveys reach crime victims know about, and official statistics show only recorded crime. Reasons for unreported and unrecorded crime are listed below.',
    'Each measure sees a different slice; none sees the dark figure fully.',
    '## Measuring crime (6.1.6)');
}

// 07 Three measures compared
add('07-three-measures',
  compose('Three ways of measuring crime', [
    (y) => table(y, ['Measure', 'Strengths', 'Limitations'], [
      ['Official statistics', 'National coverage; show trends; cheap', 'Miss unreported and unrecorded crime; police priorities and counting rules change'],
      ['Self-report studies', 'Reveal undetected offending; show who offends, not who is caught', 'Lying, exaggeration, memory; mainly minor offences; often young samples'],
      ['Victim surveys', 'Reveal crime not reported to police', 'Miss victimless and business crimes; memory; some victims do not know, e.g. fraud'],
    ], [190, 300, 350], { size: 16, zebra: true }),
    (y) => row(y, [
      { kicker: 'NATIONAL', title: 'Crime Survey for England and Wales', body: 'Began in 1982 as the British Crime Survey' },
      { kicker: 'LOCAL', title: 'Islington Crime Survey (1986)', body: 'Much higher victimisation in an inner-city area than national averages suggested' },
    ], { gap: 20, card: { size: 16, tsize: 18, kfill: C.tealDark } }),
  ]),
  'Official statistics, self-report studies and victim surveys compared on strengths and limitations, with national and local victim survey examples: the Crime Survey for England and Wales and the Islington Crime Survey.',
  'Compare at least two methods when discussing measurement.',
  '## Measuring crime (6.1.6)');
