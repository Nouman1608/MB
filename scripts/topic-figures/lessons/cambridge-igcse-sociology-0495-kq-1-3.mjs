import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-igcse-sociology-0495-kq-1-3';
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

// 01 Research design chain
add('01-research-design-chain',
  compose('Research design: each stage limits the next', [
    (y) => steps(y, [
      { title: 'Selection of topic', body: 'Shaped by the researcher’s values, social problems and funders' },
      { title: 'Aims', body: 'What the study wants to find out; often open in interpretivist studies' },
      { title: 'Hypothesis', body: 'A testable prediction; suits positivist, quantitative research' },
      { title: 'Target population', body: 'The whole group the findings should apply to, e.g. all secondary students in one city' },
      { title: 'Methods', body: 'Chosen to match the aims and perspective' },
      { title: 'Operationalisation', body: 'Turning ideas into measures: “concentration” = minutes on task before checking a phone' },
      { title: 'Pilot study', body: 'A small trial: finds confusing questions, tests timing and response rate' },
    ], { highlight: 5, size: 16, tsize: 19, gap: 10 }),
    (y) => note(y, 'Poor operationalisation lowers validity: the indicator may not capture the concept.'),
  ]),
  'Seven linked stages of research design: topic, aims, hypothesis, target population, methods, operationalisation and pilot study. Operationalisation is highlighted, with concentration measured as minutes on task before checking a phone; poor operationalisation lowers validity.',
  'Explain how each stage shapes the next, not just the list.',
  '## Research design as a chain of decisions (1.3.1)');

// 02 Stratified sample worked example
{
  const Y = 110;
  let b = panel(30, Y, 840, 470);
  b += T(55, Y + 40, 'Sampling frame: school list of 800 students', { size: 20, weight: 700 });
  const bx = 60, bw = 780;
  b += `<rect x="${bx}" y="${Y + 62}" width="${bw * 0.6}" height="70" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/><rect x="${bx + bw * 0.6}" y="${Y + 62}" width="${bw * 0.4}" height="70" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += T(bx + bw * 0.3, Y + 104, '480 girls', { size: 20, weight: 700, anchor: 'middle' }) + T(bx + bw * 0.8, Y + 104, '320 boys', { size: 20, weight: 700, anchor: 'middle' });
  b += T(bx + bw * 0.3, Y + 166, '480 ÷ 800 = 60%', { size: 18, anchor: 'middle', fill: C.tealDark, weight: 600 }) + T(bx + bw * 0.8, Y + 166, '320 ÷ 800 = 40%', { size: 18, anchor: 'middle', fill: C.olive, weight: 600 });
  b += arrow(bx + bw * 0.3, Y + 180, bx + bw * 0.3, Y + 240) + arrow(bx + bw * 0.8, Y + 180, bx + bw * 0.8, Y + 240);
  b += T(55, Y + 214, 'Sample of 50', { size: 18, weight: 700, fill: C.muted });
  const sx = 60, sy = Y + 254;
  for (let k = 0; k < 50; k++) {
    const g = k < 30, i = g ? k : k - 30;
    const x = g ? sx + 18 + (i % 10) * 45 : sx + bw * 0.6 + 26 + (i % 7) * 42;
    const y = sy + 20 + Math.floor(i / (g ? 10 : 7)) * 42;
    b += `<circle cx="${x}" cy="${y}" r="15" fill="${g ? C.teal : C.cream}" stroke="${C.ink}" stroke-width="2"/>`;
  }
  b += T(bx + bw * 0.3, Y + 412, '60% of 50 = 30 girls', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += T(bx + bw * 0.8, Y + 412, '40% of 50 = 20 boys', { size: 20, weight: 700, anchor: 'middle', fill: C.olive });
  b += T(450, Y + 450, 'Then pick names at random from each list.', { size: 17, anchor: 'middle', fill: C.muted, italic: true });
  const n = note(Y + 490, 'Stratified sampling needs a detailed frame: the list must record each student’s gender. Several characteristics at once quickly need more than many lists hold.');
  b += n.s;
  add('02-stratified-sample',
    svg(900, Y + 490 + n.h + 28, 'Drawing a stratified sample', b),
    'A school list of 800 students is 480 girls (60%) and 320 boys (40%). A stratified sample of 50 keeps those proportions: 30 girls and 20 boys, each picked at random from their own list.',
    'A stratified sample mirrors the population’s proportions.',
    '## Sampling (1.3.2)');
}

// 03 Choosing a sampling technique
{
  const Y = 110;
  let b = '';
  const leaf = (x, y, name, why, weak, edge = C.tealDark, fill = C.tealLight) => card(x, y, 195, { title: name, body: weak ? [why, weak] : why, fill, edge, tfill: edge, size: 16, tsize: 19, align: 'middle', minH: 200, pad: 12, gap: 10 }).s;
  b += box(30, Y, 400, 96, 'A complete list exists', { body: 'researcher avoids choosing people', fill: C.mustard, tsize: 19 });
  b += box(470, Y, 195, 96, 'No list; group hidden', { body: 'or stigmatised', fill: C.mustard, tsize: 17 });
  b += box(675, Y, 195, 96, 'Results needed fast', { body: 'e.g. a street survey', fill: C.mustard, tsize: 17 });
  b += arrow(230, Y + 100, 230, Y + 124);
  b += box(30, Y + 130, 400, 66, 'Must important subgroups all appear?', { fill: C.cream, edge: C.olive, tsize: 18 });
  b += arrow(150, Y + 200, 128, Y + 262) + arrow(310, Y + 200, 332, Y + 262);
  b += T(130, Y + 232, 'no', { size: 16, weight: 700, anchor: 'end', fill: C.muted }) + T(330, Y + 232, 'yes', { size: 16, weight: 700, fill: C.muted });
  b += leaf(30, Y + 268, 'Random or systematic', 'Everyone has an equal or known chance');
  b += leaf(235, Y + 268, 'Stratified', 'Matches the population’s proportions');
  b += arrow(567, Y + 100, 567, Y + 262) + arrow(772, Y + 100, 772, Y + 262);
  b += leaf(470, Y + 268, 'Snowball', 'Trusted contacts introduce others', '− Sample is a network, not a cross-section', C.olive, C.cream);
  b += leaf(675, Y + 268, 'Quota', 'Interviewer fills set numbers of each type', '− Easy-to-find people over-represented', C.olive, C.cream);
  add('03-choosing-a-sample',
    svg(900, Y + 268 + 200 + 28, 'Which sampling technique?', b),
    'Situations leading to sampling techniques. With a complete list, use random or systematic sampling, or stratified if subgroups must all appear. With no list and a hidden group, use snowball, whose sample is a network not a cross-section. When results are needed fast, use quota, which over-represents easy-to-find people.',
    'The situation, and whether a list exists, decides the technique.',
    '## Sampling (1.3.2)');
}

// 04 Interview types
add('04-interview-types',
  compose('Four types of interview', [
    (y) => spectrum(y, 'Comparison, reliability', 'Depth, meaning', [
      { pos: 0.02, label: 'Structured', note: 'Same questions, same order, often closed' },
      { pos: 0.5, label: 'Semi-structured', note: 'Set questions with freedom to probe' },
      { pos: 0.98, label: 'Unstructured', note: 'A guided conversation; topics, not fixed questions' },
    ], { labelW: 250 }),
    (y) => card(30, y, 840, { title: 'Group interview', body: ['Several people discuss while the researcher moderates: shows shared views and how opinions form', 'But louder members may dominate and peer pressure can shape answers'], bullets: true, fill: C.cream, edge: C.olive, tfill: C.olive, size: 16 }),
    (y) => note(y, 'Oakley, The Sociology of Housework (1974): interviews with 40 London housewives showed housework experienced as work, which official statistics did not capture.', { fill: C.panel, edge: C.panelEdge }),
  ]),
  'Structured, semi-structured and unstructured interviews on a line from comparison and reliability to depth and meaning, plus group interviews, which show shared views but can be dominated by louder members. Oakley’s interviews with 40 London housewives are the example.',
  'The less structured the interview, the more depth and the less easy comparison.',
  '## Primary methods (1.3.3)');

// 05 Observation grid
{
  const Y = 110, x0 = 240, cwid = 305, gap = 20;
  let b = '';
  b += T(x0 + cwid / 2, Y + 24, 'Overt', { size: 21, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(x0 + cwid / 2, Y + 48, 'people know', { size: 16, anchor: 'middle', fill: C.muted });
  b += T(x0 + cwid + gap + cwid / 2, Y + 24, 'Covert', { size: 21, weight: 700, anchor: 'middle', fill: C.rust }) + T(x0 + cwid + gap + cwid / 2, Y + 48, 'people do not know', { size: 16, anchor: 'middle', fill: C.muted });
  const y1 = Y + 66, h1 = 220;
  b += card(30, y1, 190, { title: 'Participant', body: 'researcher joins in', align: 'middle', minH: h1, vcenter: true, tsize: 20, size: 15, edge: C.ink }).s;
  b += card(x0, y1, cwid, { title: 'Willis (1977)', body: ['Learning to Labour: twelve working-class boys; observation plus interviews', '+ No deception', '− Risk of the Hawthorne effect'], fill: C.tealLight, edge: C.tealDark, tfill: C.tealDark, bfill: C.ink, size: 16, tsize: 19, minH: h1 }).s;
  b += card(x0 + cwid + gap, y1, cwid, { title: 'Patrick (1973)', body: ['A Glasgow Gang Observed: joined a teenage gang without its members knowing', '+ Reveals hidden behaviour', '− Deception, danger, hard to record data'], fill: C.cream, edge: C.rust, tfill: C.rust, bfill: C.ink, size: 16, tsize: 19, minH: h1 }).s;
  const y2 = y1 + h1 + 16, h2 = 130;
  b += card(30, y2, 190, { title: 'Non-participant', body: 'watches from outside', align: 'middle', minH: h2, vcenter: true, tsize: 20, size: 15, edge: C.ink }).s;
  b += card(x0, y2, cwid * 2 + gap, { title: 'e.g. recording classroom interaction on a schedule', body: ['+ Systematic, reliable recording', '− Cannot reveal what behaviour means to people'], fill: C.panel, edge: C.panelEdge, size: 16, tsize: 18, minH: h2 }).s;
  add('05-observation-choices',
    svg(900, y2 + h2 + 28, 'Two choices in every observation', b),
    'A grid of observation types. Overt participant: Willis studied twelve working-class boys with no deception but risked the Hawthorne effect. Covert participant: Patrick joined a Glasgow gang secretly, revealing hidden behaviour but involving deception and danger. Non-participant observation records systematically but cannot reveal meanings.',
    'Join in or watch; tell people or not: each pair of choices has its own trade-off.',
    '## Primary methods (1.3.3)');
}

// 06 Question types
{
  const Y = 110;
  const W = 410;
  const opt = (x, y, labels, chosen, o = {}) => {
    let s = '', cx = x;
    labels.forEach((l, i) => {
      const w = cw(15, 600) * l.length + 26;
      s += `<rect x="${cx}" y="${y}" width="${w}" height="32" rx="${o.round ? 16 : 6}" fill="${i === chosen ? C.mustard : C.panel}" stroke="${C.ink}" stroke-width="2"/>` + T(cx + w / 2, y + 22, l, { size: 15, weight: 600, anchor: 'middle' });
      cx += w + 8;
    });
    return s;
  };
  const cardQ = (x, y, title, q, widget, plus, minus) => {
    let s = panel(x, y, W, 260) + T(x + 22, y + 38, title, { size: 22, weight: 700 });
    s += para(x + 22, y + 70, q, W - 44, { size: 16, italic: true, fill: C.ink }).s;
    s += widget;
    s += T(x + 22, y + 206, '+ ' + plus, { size: 16, weight: 600, fill: C.tealDark }) + T(x + 22, y + 234, '− ' + minus, { size: 16, weight: 600, fill: C.rust });
    return s;
  };
  let b = '';
  b += cardQ(30, Y, 'Open', '“What does a good friend mean to you?”', `<rect x="52" y="${Y + 110}" width="366" height="62" rx="6" fill="${C.panel}" stroke="${C.ink}" stroke-width="2"/>` + path(`M66,${Y + 132} l220,0 M66,${Y + 154} l150,0`, { stroke: C.panelEdge, w: 3 }), 'Own words; high validity', 'Hard to code and compare');
  b += cardQ(460, Y, 'Closed', '“Do you have a part-time job?”', opt(482, Y + 120, ['Yes', 'No'], 0), 'Quick; easy to count', 'Forces a choice; no explanation');
  b += cardQ(30, Y + 280, 'Multiple choice', '“How do you travel to school?”', opt(52, Y + 400, ['Walk', 'Bus', 'Car', 'Other'], 1), 'Easy to analyse', 'Options may not fit everyone');
  b += cardQ(460, Y + 280, 'Scaled', '“School uniform improves behaviour”', opt(482, Y + 400, ['SA', 'A', 'N', 'D', 'SD'], 1, { round: true }) + T(482, Y + 370, 'strongly agree … strongly disagree', { size: 15, fill: C.muted }), 'Measures strength of opinion', 'People read the points differently');
  const n = note(Y + 560, 'Avoid leading wording, double questions (“Do you enjoy science and maths?”), jargon and vague terms such as “often”.');
  b += n.s;
  add('06-question-types',
    svg(900, Y + 560 + n.h + 28, 'Four types of question', b),
    'Four question types with an example, a strength and a limitation: open (own words but hard to compare), closed yes/no (quick but no explanation), multiple choice (easy to analyse but options may not fit) and scaled from strongly agree to strongly disagree (measures strength of opinion but points are read differently).',
    'The more fixed the answer, the easier to count and the less it explains.',
    '## Types of question (1.3.4)');
}

// 07 Ethics: Humphreys
{
  const Y = 110;
  const issues = [['Informed consent', 'understand and agree freely; parents too for children'], ['Privacy / confidentiality', 'names and identifying details protected'], ['Deception', 'misleading people; built into covert methods'], ['Prevention of harm', 'physical, emotional or social'], ['Legality', 'do not break the law or encourage others to']];
  const hit = [0, 1, 2];
  let b = '', cy = Y;
  const L = 420;
  issues.forEach(([k, v], i) => {
    const c = card(30, cy, L, { title: k, body: v, size: 15, tsize: 18, pad: 14, fill: hit.includes(i) ? C.cream : C.panel, edge: hit.includes(i) ? C.rust : C.panelEdge, minH: 86 });
    b += c.s;
    if (hit.includes(i)) b += arrow(560, Y + 200, 30 + L + 8, cy + c.h / 2, { color: C.rust, marker: 'ahR', w: 3 });
    cy += c.h + 10;
  });
  const cs = card(560, Y + 80, 310, { kicker: 'ETHICS CASE', title: 'Humphreys, Tearoom Trade (1970)', body: ['Observed men in public toilets without their knowledge', 'Noted car number plates', 'Later visited homes in disguise to interview them'], bullets: true, fill: C.panel, edge: C.rust, kfill: C.rust, size: 16, tsize: 19 });
  b += cs.s;
  add('07-ethics-humphreys',
    svg(900, cy + 18, 'Five ethical issues, one famous case', b),
    'Five ethical issues: informed consent, privacy and confidentiality, deception, prevention of harm and legality. Arrows link Humphreys’ Tearoom Trade, in which he observed men secretly, noted number plates and visited homes in disguise, to consent, privacy and deception.',
    'Humphreys’ study raised consent, privacy and deception concerns.',
    '## Theoretical, practical and ethical issues (1.3.5 and 1.3.6)');
}

// 08 Model 1(e) plan
add('08-research-plan-structure',
  compose('A Question 1(e) plan: every choice gets a reason', [
    (y) => card(30, y, 840, { kicker: 'TOPIC', title: 'How students use their free time at weekends', align: 'middle', fill: C.cream, edge: C.olive, kfill: C.olive }),
    (y) => flowRows(y, ['Part of the plan', 'Choice', 'Reason'], [
      ['Primary method', 'Questionnaire, mainly closed and multiple-choice, plus some open questions', 'Quantitative patterns to compare; reasons in students’ own words'],
      ['Follow-up', 'Semi-structured interviews with a few students', 'Explore meanings in depth (triangulation)'],
      ['Sampling', 'School registers; stratified random by gender and year; pilot with ten students', 'Each group in proportion; check questions are clear'],
      ['Secondary evidence', 'Published surveys of young people’s leisure', 'Cheap; national patterns to compare'],
      ['Ethics', 'Consent from students and parents; anonymous answers', 'Informed consent and privacy'],
    ], { size: 16, fills: [C.tealLight, C.panel, C.cream], edges: [C.tealDark, C.panelEdge, C.olive] }),
    (y) => note(y, 'Do not evaluate your own plan in part (e): justify each choice instead.'),
  ]),
  'A research plan on weekend free time laid out as choice and reason: a questionnaire for patterns and reasons, semi-structured interviews for meanings, a stratified random sample from school registers with a pilot, published leisure surveys as secondary evidence, and consent and anonymity for ethics.',
  'Choice, then reason, for every part of the plan.',
  '## Model answer: Question 1(e)-style plan');
