import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-igcse-sociology-0495-kq-4-1';
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
// family-tree helpers: adult = square-ish circle mustard, child = small teal circle
const ad = (x, y, f = C.mustard) => `<circle cx="${x}" cy="${y}" r="13" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`;
const ch = (x, y, f = C.teal) => `<circle cx="${x}" cy="${y}" r="10" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`;
const ln = (x1, y1, x2, y2, o = {}) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${o.c || C.ink}" stroke-width="${o.w || 2.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
const couple = (x, y, gap = 44) => ln(x - gap / 2, y, x + gap / 2, y, { w: 3 }) + ad(x - gap / 2, y) + ad(x + gap / 2, y);
const kids = (x, y, n, sp = 30) => { let s = ln(x, y - 30, x, y - 16); const x0 = x - ((n - 1) * sp) / 2; if (n > 1) s += ln(x0, y - 16, x0 + (n - 1) * sp, y - 16); for (let i = 0; i < n; i++) s += ln(x0 + i * sp, y - 16, x0 + i * sp, y - 10) + ch(x0 + i * sp, y); return s; };

// 01 Family structures
{
  const Y = 110, W = 200, H = 262, gx = 13.33;
  const tiles = [
    ['Nuclear', 'Two parents and their dependent children', (x, y) => couple(x, y + 40) + kids(x, y + 100, 2)],
    ['Horizontal extended', 'Nuclear family plus relatives of the same generation', (x, y) => couple(x - 34, y + 40) + couple(x + 50, y + 40, 36) + ln(x - 12, y + 40, x + 32, y + 40, { dash: '5 4' }) + kids(x - 34, y + 100, 2)],
    ['Vertical (beanpole)', 'Three or more generations, few in each', (x, y) => couple(x, y + 22) + ln(x, y + 22, x, y + 50) + couple(x, y + 62) + ln(x, y + 62, x, y + 92) + ch(x, y + 102)],
    ['Modified extended', 'Kin live apart but keep in close contact', (x, y) => couple(x - 46, y + 40, 36) + kids(x - 46, y + 100, 1) + couple(x + 46, y + 40, 36) + `<path d="M${x - 18},${y + 22} Q${x},${y} ${x + 18},${y + 22}" fill="none" stroke="${C.tealDark}" stroke-width="2.5" stroke-dasharray="5 4"/>` + `<line x1="${x}" y1="${y + 30}" x2="${x}" y2="${y + 105}" stroke="${C.panelEdge}" stroke-width="2"/>`],
    ['Reconstituted', 'A partner brings children from a previous relationship', (x, y) => couple(x, y + 40) + ln(x - 22, y + 40, x - 22, y + 76) + ln(x - 52, y + 76, x - 22, y + 76) + ln(x - 52, y + 76, x - 52, y + 90) + ch(x - 52, y + 100, C.cream) + ln(x - 22, y + 76, x - 22, y + 90) + ch(x - 22, y + 100, C.cream) + ln(x + 22, y + 40, x + 22, y + 90) + ch(x + 22, y + 100)],
    ['Lone parent', 'One parent and dependent children', (x, y) => ad(x, y + 40) + kids(x, y + 100, 2)],
    ['Empty nest', 'Parents whose children have left home', (x, y) => couple(x - 20, y + 50) + `<g opacity="0.45">${ch(x + 50, y + 100, C.panel)}${ch(x + 78, y + 100, C.panel)}</g>` + arrow(x + 4, y + 80, x + 34, y + 96, { w: 2.5 })],
    ['Childless', 'A couple without children, by choice or not', (x, y) => couple(x, y + 60)],
  ];
  let b = '';
  tiles.forEach(([n, d, art], i) => {
    const x = 30 + (i % 4) * (W + gx), y = Y + Math.floor(i / 4) * (H + 16);
    b += panel(x, y, W, H) + `<rect x="${x + 10}" y="${y + 10}" width="${W - 20}" height="140" rx="10" fill="${C.tealLight}" opacity="0.5"/>` + art(x + W / 2, y + 20);
    b += T(x + W / 2, y + 178, n, { size: 18, weight: 700, anchor: 'middle' }) + para(x + W / 2, y + 202, d, W - 24, { size: 15, anchor: 'middle', fill: C.muted }).s;
  });
  const yL = Y + 2 * (H + 16) + 8;
  b += ad(60, yL + 10) + T(82, yL + 16, 'adult', { size: 16 }) + ch(170, yL + 10) + T(188, yL + 16, 'child', { size: 16 }) + ch(270, yL + 10, C.cream) + T(288, yL + 16, 'child from a previous relationship', { size: 16 });
  add('01-family-structures',
    svg(900, yL + 46, 'Eight family structures', b),
    'Simple family trees for eight structures: nuclear, horizontal extended, vertical or beanpole extended, modified extended (kin living apart but in contact), reconstituted with step-children, lone parent, empty nest and childless.',
    'Each structure is a different arrangement of adults, children and generations.',
    '## Family structures and their strengths and limitations');
}

// 02 Rapoports' diversity
add('02-five-types-of-diversity',
  compose('Five dimensions of family diversity', [
    (y) => hub(y, 'Rapoport and Rapoport (1982)', [
      { title: 'Organisational', body: 'how roles are arranged' },
      { title: 'Cultural', body: 'e.g. extended households in South Asia and sub-Saharan Africa; kibbutz children’s houses' },
      { title: 'Class', body: 'e.g. Bethnal Green working-class extended families; mobile middle class' },
      { title: 'Life course', body: 'families change as members age' },
      { title: 'Cohort', body: 'the historical period a family lives through' },
    ], { cardW: 280, r: 100, csize: 18 }),
    (y) => note(y, 'Ethnicity: explain patterns with culture, migration history and economic position, not by treating any group as having one “type” of family.'),
  ]),
  'Five dimensions of diversity from Rapoport and Rapoport (1982): organisational, cultural (such as extended households and kibbutzim), class (such as Bethnal Green), life course and cohort. A note says ethnic patterns should be explained by culture, migration history and economic position.',
  'Diversity has more than one dimension.',
  '## Variations and diversity (4.1.2)');

// 03 Views on diversity
add('03-views-on-diversity',
  compose('Is family diversity good, bad or exaggerated?', [
    (y) => row(y, [
      { kicker: 'BAD', title: 'New Right', body: ['Married two-parent nuclear family is best for children', 'Murray: lone parenthood and welfare dependency create an “underclass”', 'Critics: poverty, not structure, explains most disadvantage; the view blames women'], fill: C.cream, edge: C.rust, kfill: C.rust, tfill: C.rust },
      { kicker: 'EXAGGERATED', title: 'Chester (1985)', body: ['Most people live in a nuclear family at some stage', 'Main change: the neo-conventional family where both partners work', 'Snapshot statistics overstate diversity'], fill: C.panel, edge: C.ink, kfill: C.muted },
      { kicker: 'GOOD', title: 'Postmodernists', body: ['No fixed rules: people choose relationships', 'Diversity = freedom and tolerance', 'But choice is constrained by money, law and culture'], fill: C.tealLight, edge: C.tealDark, kfill: C.tealDark, tfill: C.tealDark },
    ], { gap: 16, card: { bullets: true, size: 16, tsize: 21, gap: 8, bfill: C.ink } }),
  ]),
  'Three views of diversity. The New Right see it as decline, linking lone parenthood to an underclass, though critics point to poverty. Chester argues it is exaggerated: most people live in a nuclear family at some stage. Postmodernists see it as freedom of choice, though choice is constrained.',
  'Decline, freedom, or exaggeration: three readings of the same trend.',
  '## Sociological views on diversity (4.1.3)');

// 04 Snapshot vs life course
{
  const Y = 130;
  let b = '';
  b += arrow(60, Y + 18, 850, Y + 18, { w: 4 }) + T(850, Y + 6, 'one person’s life course', { size: 16, anchor: 'end', fill: C.muted, weight: 600 });
  b += card(30, Y + 44, 340, { title: 'Nuclear family', body: 'earlier in life', align: 'middle', minH: 110, vcenter: true, bfill: C.ink, tsize: 20, size: 16 }).s;
  b += arrow(376, Y + 99, 526, Y + 99, { w: 4 }) + T(451, Y + 88, 'later', { size: 16, anchor: 'middle', fill: C.muted, weight: 600 });
  b += card(530, Y + 44, 340, { title: 'Single person household', body: 'today', align: 'middle', minH: 110, vcenter: true, fill: C.mustard, bfill: C.ink, tsize: 20, size: 16 }).s;
  b += `<rect x="518" y="${Y + 32}" width="364" height="134" rx="18" fill="none" stroke="${C.rust}" stroke-width="3.5" stroke-dasharray="10 6"/>`;
  b += T(700, Y + 196, 'a household count sees only this moment', { size: 16, anchor: 'middle', fill: C.rust, weight: 700 });
  const n = note(Y + 224, 'Chester: statistics that count households at one moment make diversity look larger than it is, because people move through different household types over their lives.');
  b += n.s;
  add('04-snapshot-vs-life-course',
    svg(900, Y + 224 + n.h + 28, 'Snapshot or life course?', b, 'Why household statistics can overstate diversity'),
    'A person who lived in a nuclear family earlier in life is in a single-person household today. A household count captures only today, which is why Chester argues snapshot statistics overstate diversity.',
    'A single snapshot can hide a life spent mostly in nuclear families.',
    '## Sociological views on diversity (4.1.3)');
}

// 05 Alternatives to the family
{
  const Y = 110;
  let b = panel(30, Y, 840, 330, C.panel, C.ink);
  b += T(55, Y + 40, 'HOUSEHOLD: a person or group sharing a home', { size: 18, weight: 700, fill: C.tealDark });
  b += `<rect x="55" y="${Y + 62}" width="250" height="240" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + T(180, Y + 96, 'Family', { size: 21, weight: 700, anchor: 'middle', fill: C.olive });
  b += para(180, Y + 124, 'related by blood, marriage, civil partnership or adoption', 220, { size: 16, anchor: 'middle', fill: C.ink }).s;
  b += couple(180, Y + 220) + kids(180, Y + 278, 2);
  const alts = [
    ['Single person household', 'later marriage, divorce, ageing population, women’s financial independence'],
    ['Shared household', 'unrelated adults, e.g. students; housing is expensive'],
    ['Friends as family', '“families of choice” giving emotional and practical support'],
  ];
  let cy = Y + 62;
  alts.forEach(([t1, t2]) => { const c = card(330, cy, 515, { title: t1, body: t2, size: 15, tsize: 18, pad: 12, fill: C.tealLight, edge: C.tealDark }); b += c.s; cy += c.h + 10; });
  const PH = Math.max(330, cy - Y + 18);
  b = panel(30, Y, 840, PH, C.panel, C.ink) + b.slice(panel(30, Y, 840, 330, C.panel, C.ink).length);
  add('05-family-and-household',
    svg(900, Y + PH + 30, 'Family, household and the alternatives', b),
    'Every family is a household, but not every household is a family. Alongside families related by blood, marriage, civil partnership or adoption sit three alternatives: single person households, shared households of unrelated adults, and friends as family.',
    'Use “family” and “household” precisely: the alternatives are households, not families.',
    '## Alternatives to the family (4.1.4)');
}

// 06 Types of marriage
{
  const Y = 110;
  let b = '';
  b += label(Y, 'How many spouses?', { anchor: 'start', x: 30, fill: C.tealDark }).s;
  const r1 = row(Y + 34, [
    { title: 'Monogamy', body: 'One spouse at a time' },
    { title: 'Serial monogamy', body: 'A sequence of monogamous marriages, through divorce and remarriage' },
  ], { gap: 20, card: { size: 16, tsize: 20, fill: C.tealLight, edge: C.tealDark } });
  b += r1.s;
  // timeline art in serial monogamy card? keep text
  const y2 = Y + 34 + r1.h + 20;
  b += label(y2, 'How is the partner chosen?', { anchor: 'start', x: 30, fill: C.olive }).s;
  const r2 = row(y2 + 34, [
    { title: 'Arranged', body: 'Families play a major part in choosing; the couple’s consent stays central. Not the same as forced marriage.' },
    { title: 'Love', body: 'Partners choose each other on the basis of romantic attachment' },
  ], { gap: 20, card: { size: 16, tsize: 20, fill: C.cream, edge: C.olive } });
  b += r2.s;
  const y3 = y2 + 34 + r2.h + 20;
  b += label(y3, 'What is the relationship like?', { anchor: 'start', x: 30, fill: C.rust }).s;
  const c = card(30, y3 + 34, 840, { title: 'Empty shell marriage', body: 'Legally married but no emotional content, often for financial, religious or children’s reasons. Do not confuse with an empty nest family (children have left home).', fill: C.panel, edge: C.rust, size: 16, tsize: 20 });
  b += c.s;
  add('06-types-of-marriage',
    svg(900, y3 + 34 + c.h + 28, 'Types of marriage', b),
    'Types of marriage grouped by question: how many spouses (monogamy, serial monogamy), how the partner is chosen (arranged, which is not forced, or love), and what the relationship is like (empty shell, not to be confused with empty nest).',
    'Group marriage types by number, choice and quality of relationship.',
    '## Types of marriage (4.1.5)');
}

// 07 Part (f) plan
add('07-part-f-plan',
  compose('Is the nuclear family still dominant?', [
    (y) => balance(y, {
      tag: 'STILL DOMINANT', title: 'For the view', items: ['Most children raised by two parents for much of childhood (neo-conventional family)', 'Still the cultural ideal in media and policy', 'Many in other households have lived or will live in one'],
    }, {
      tag: 'NOT DOMINANT', title: 'Against the view', items: ['Divorce and remarriage: reconstituted and lone-parent families', 'Single person households have grown', 'Extended families dominate in many societies', 'Postmodernists: no dominant type'],
    }, { tilt: 0, verdictTitle: 'Judgement', verdict: 'Dominant as an ideal and as a life stage, less dominant as a snapshot of households at any one time.' }),
  ]),
  'A balance of three arguments that the nuclear family is still dominant against four that it is not, with the judgement that it is dominant as an ideal and life stage but less so as a snapshot of households.',
  'Three developed arguments each side, then a judgement.',
  '## Worked example: planning a part (f) answer');
