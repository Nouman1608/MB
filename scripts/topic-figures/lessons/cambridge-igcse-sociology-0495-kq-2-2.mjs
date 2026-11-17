import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-igcse-sociology-0495-kq-2-2';
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

// 01 Sanctions grid
{
  const Y = 110, x0 = 230, cwid = 310, gap = 20, rh = 170;
  let b = '';
  b += T(x0 + cwid / 2, Y + 26, 'Positive sanctions', { size: 21, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(x0 + cwid / 2, Y + 50, 'reward conformity', { size: 16, anchor: 'middle', fill: C.muted });
  b += T(x0 + cwid + gap + cwid / 2, Y + 26, 'Negative sanctions', { size: 21, weight: 700, anchor: 'middle', fill: C.rust }) + T(x0 + cwid + gap + cwid / 2, Y + 50, 'punish deviance', { size: 16, anchor: 'middle', fill: C.muted });
  const rows = [
    ['Formal', 'written laws, enforced by state agencies', ['Reduced sentences for good behaviour', 'Honours and awards', 'Tax relief'], ['Fines', 'Arrest', 'Prison']],
    ['Informal', 'unwritten norms, enforced by everyday groups', ['Praise, a smile', 'Social media “likes”', 'Pay rise, promotion'], ['Gossip, a disapproving look', 'Exclusion, ostracism', 'Detention']],
  ];
  rows.forEach(([r, sub, pos, neg], i) => {
    const y = Y + 70 + i * (rh + 16);
    b += card(30, y, 180, { title: r, body: sub, align: 'middle', minH: rh, vcenter: true, tsize: 21, size: 15 }).s;
    b += card(x0, y, cwid, { body: pos, bullets: true, fill: C.tealLight, edge: C.tealDark, bfill: C.ink, size: 17, minH: rh, vcenter: true }).s;
    b += card(x0 + cwid + gap, y, cwid, { body: neg, bullets: true, fill: C.cream, edge: C.rust, bfill: C.ink, size: 17, minH: rh, vcenter: true }).s;
  });
  const yN = Y + 70 + 2 * (rh + 16) + 4;
  const n = note(yN, 'The difference is who enforces and whether the rules are written, not how harsh they are: ostracism can hurt more than a fine.');
  b += n.s;
  add('01-sanctions-grid',
    svg(900, yN + n.h + 28, 'Four kinds of sanction', b),
    'A grid of formal and informal control against positive and negative sanctions. Formal positive: reduced sentences, honours, tax relief. Formal negative: fines, arrest, prison. Informal positive: praise, likes, a pay rise. Informal negative: gossip, ostracism, detention.',
    'Formal control rewards as well as punishes; informal control can punish harshly.',
    '## Formal and informal control (2.2.1)');
}

// 02 When sanctions work
add('02-when-sanctions-work',
  compose('When do sanctions produce conformity?', [
    (y) => row(y, [
      { title: 'Sanctions work best when…', body: ['People value the reward or fear the punishment', 'The rule is seen as legitimate: fair and rightful', 'Breaking the rule is likely to be noticed'], bullets: true, fill: C.tealLight, edge: C.tealDark, tfill: C.tealDark },
      { title: 'Sanctions work poorly when…', body: ['People expect not to be caught', 'A group rewards the behaviour society punishes', 'People have little left to lose'], bullets: true, fill: C.cream, edge: C.rust, tfill: C.rust },
    ], { gap: 20, card: { size: 17, tsize: 20, gap: 10 } }),
    (y) => chips(y, ['legitimacy', 'likelihood of detection', 'what people value or fear'], { size: 17, fill: C.cream, edge: C.olive }),
  ]),
  'Two panels. Sanctions work best when people value the reward or fear the punishment, see the rule as legitimate and expect to be noticed. They work poorly when people expect not to be caught, when a group rewards the behaviour, or when people have little to lose.',
  'Legitimacy and the chance of being noticed decide whether sanctions work.',
  '## Formal and informal control (2.2.1)');

// 03 Perspectives on control
add('03-perspectives-on-control',
  compose('Whose interests does social control serve?', [
    (y) => row(y, [
      { kicker: 'CONSENSUS', title: 'Functionalism', body: ['Protects shared values', 'Durkheim: punishing crime reaffirms boundaries and unites others', 'Neutral; in everyone’s interest'], fill: C.tealLight, edge: C.tealDark, kfill: C.tealDark, tfill: C.tealDark },
      { kicker: 'CONFLICT', title: 'Marxism', body: ['Serves the ruling class', 'Laws protect private property', 'Althusser: repressive state apparatus controls by force'], fill: C.cream, edge: C.olive, kfill: C.rust, tfill: C.olive },
      { kicker: 'CONFLICT', title: 'Feminism', body: ['Maintains patriarchy', 'Heidensohn (1985): women controlled at home, in public and at work', 'Women judged harshly for breaking gender norms'], fill: C.panel, edge: C.rust, kfill: C.rust, tfill: C.rust },
    ], { gap: 16, card: { bullets: true, size: 16, tsize: 21, gap: 8 } }),
    (y) => row(y, [
      { kicker: 'BUT', body: 'Underplays the unequal application of control', kfill: C.rust },
      { kicker: 'BUT', body: 'Many laws, on murder or road safety, protect everyone', kfill: C.rust },
      { kicker: 'BUT', body: 'Women’s lives and freedoms have changed in many societies', kfill: C.rust },
    ], { gap: 16, card: { size: 16, bfill: C.ink } }),
  ]),
  'Functionalism sees control as protecting shared values for everyone; Marxism sees it serving the ruling class through laws and the repressive state apparatus; feminism sees it maintaining patriarchy at home, in public and at work. A criticism sits under each.',
  'One consensus view, two conflict views, each with a weakness.',
  '## Consensus and conflict views (2.2.2)');

// 04 Formal agencies chain
{
  const Y = 110;
  const ag = [
    ['Government', 'Law-making', 'Laws ignored without enforcement or legitimacy'],
    ['Police', 'Arrest, patrol, digital surveillance', 'Many offences never reported'],
    ['Courts', 'Trials and sentencing', 'Costly, slow; outcomes may vary by group'],
    ['Penal system', 'Imprisonment, probation, community sentences', 'Reoffending after release is common'],
  ];
  let b = T(120, Y + 18, 'Agency', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(390, Y + 18, 'Method', { size: 18, weight: 700, anchor: 'middle', fill: C.ink }) + T(720, Y + 18, 'Limit', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  let cy = Y + 34;
  ag.forEach(([a, m, l], i) => {
    const h = 84;
    b += box(30, cy, 180, h, a, { fill: C.tealLight, edge: C.tealDark, tsize: 19 });
    b += box(250, cy, 280, h, m, { fill: C.panel, edge: C.ink, tsize: 17 });
    b += card(570, cy, 300, { body: l, fill: C.cream, edge: C.rust, bfill: C.ink, size: 16, minH: h, vcenter: true, align: 'middle' }).s;
    b += arrow(214, cy + h / 2, 244, cy + h / 2, { w: 3 }) + `<line x1="532" y1="${cy + h / 2}" x2="568" y2="${cy + h / 2}" stroke="${C.rust}" stroke-width="2.5" stroke-dasharray="5 4"/>`;
    if (i < ag.length - 1) b += arrow(120, cy + h + 2, 120, cy + h + 22, { w: 3, color: C.tealDark, marker: 'ahT' });
    cy += h + 24;
  });
  cy += 6;
  b += card(30, cy, 840, { kicker: 'IN EMERGENCIES', title: 'Armed forces: coercion', body: 'Can restore order quickly, but force against citizens risks loss of legitimacy.', fill: C.panel, edge: C.ink, kfill: C.rust, size: 16, tsize: 19 }).s;
  const h2 = card(30, cy, 840, { kicker: 'IN EMERGENCIES', title: 'Armed forces: coercion', body: 'Can restore order quickly, but force against citizens risks loss of legitimacy.', size: 16, tsize: 19 }).h;
  add('04-formal-agencies',
    svg(900, cy + h2 + 28, 'Formal agencies: method and limit', b),
    'Formal agencies in sequence with a method and a limit: government makes laws, police arrest and use digital surveillance, courts sentence, and the penal system imprisons, though reoffending is common. The armed forces use coercion in emergencies but risk losing legitimacy.',
    'Each formal agency has its own method and its own limit.',
    '## Formal agencies and their methods (2.2.3 and 2.2.4)');
}

// 05 Panopticon
{
  const Y = 110;
  let b = panel(30, Y, 420, 420);
  const cx = 240, cy = Y + 215, R = 165, r = 110;
  b += `<circle cx="${cx}" cy="${cy}" r="${R}" fill="${C.rock}" stroke="${C.ink}" stroke-width="3"/><circle cx="${cx}" cy="${cy}" r="${r}" fill="${C.bg}" stroke="${C.ink}" stroke-width="3"/>`;
  for (let k = 0; k < 16; k++) {
    const a = (2 * Math.PI * k) / 16;
    b += `<line x1="${cx + r * Math.cos(a)}" y1="${cy + r * Math.sin(a)}" x2="${cx + R * Math.cos(a)}" y2="${cy + R * Math.sin(a)}" stroke="${C.ink}" stroke-width="2.5"/>`;
    const am = a + Math.PI / 16, pr = (r + R) / 2;
    b += `<circle cx="${cx + pr * Math.cos(am)}" cy="${cy + pr * Math.sin(am)}" r="8" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/>`;
  }
  b += `<circle cx="${cx}" cy="${cy}" r="34" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + T(cx, cy + 6, 'tower', { size: 15, weight: 700, anchor: 'middle' });
  [0, 2.1, 4.2].forEach((a) => { b += `<line x1="${cx + 36 * Math.cos(a)}" y1="${cy + 36 * Math.sin(a)}" x2="${cx + 100 * Math.cos(a)}" y2="${cy + 100 * Math.sin(a)}" stroke="${C.olive}" stroke-width="2.5" stroke-dasharray="6 5"/>`; });
  b += T(240, Y + 408, 'cells around a central tower', { size: 15, anchor: 'middle', fill: C.muted });
  const s1 = stack(Y, [
    { title: 'Always visible', body: 'Inmates can always be seen but never know when they are being watched.', fill: C.panel },
    { title: 'Self-discipline', body: 'So they watch and discipline themselves.', fill: C.tealLight, edge: C.tealDark, tfill: C.tealDark },
    { title: 'Modern versions', body: 'CCTV, facial recognition, phone and internet monitoring, electronic tags.', fill: C.cream, edge: C.olive, tfill: C.olive },
  ], { x: 470, w: 400, arrows: true, gap: 36, card: { size: 16, tsize: 19 } });
  b += s1.s;
  const H = Math.max(420, s1.h);
  const n = note(Y + H + 18, 'Critics raise concerns about privacy and about some groups being watched more than others.');
  b += n.s;
  add('05-panopticon',
    svg(900, Y + H + 18 + n.h + 28, 'The panopticon and digital surveillance', b, 'Foucault, Discipline and Punish (1975)'.replace('Discipline and Punish', '<tspan font-style="italic">Discipline and Punish</tspan>')),
    'Plan of a panopticon prison: cells in a ring around a central watchtower. Because inmates can always be seen but never know when, they discipline themselves; CCTV, facial recognition and data monitoring are modern versions, though critics raise privacy concerns.',
    'Not knowing when you are watched makes you watch yourself.',
    '## Formal agencies and their methods (2.2.3 and 2.2.4)');
}

// 06 Why people join resistance
add('06-why-join-resistance',
  compose('Why join protest groups and sub-cultures?', [
    (y) => hub(y, 'Joining resistance', [
      { title: 'Grievance', body: 'a sense of injustice to change' },
      { title: 'Belonging', body: 'shared identity' },
      { title: 'Status', body: 'respect not found in school or work' },
      { title: 'Excitement', body: 'escape from routine' },
      { title: 'Friends or family', body: 'already involved' },
      { title: 'Ignored', body: 'formal politics ignores them' },
    ], { cardW: 270, r: 95 }),
    (y) => row(y, [
      { title: 'Deviant', body: 'Breaks society’s norms and attracts negative sanctions', fill: C.cream, edge: C.rust, tfill: C.rust },
      { title: 'Non-conformist', body: 'Rejects mainstream expectations without necessarily breaking rules, e.g. lifestyle, dress, diet', fill: C.tealLight, edge: C.tealDark, tfill: C.tealDark },
    ], { gap: 20, card: { size: 16, tsize: 20 } }),
  ]),
  'Six reasons for joining resistance arranged around a centre: grievance, belonging, status, excitement, friends or family already involved, and feeling ignored by formal politics. Below, deviant behaviour breaks norms while non-conformist behaviour rejects expectations without necessarily breaking rules.',
  'Resistance can be deviant or simply non-conformist.',
  '## Resistance: protest groups and sub-cultures (2.2.7)');

// 07 Types of resistance
add('07-types-of-resistance',
  compose('Four kinds of resistance', [
    (y) => row(y, [
      { kicker: 'PROTEST GROUPS', title: 'Suffragettes', body: 'WSPU, founded 1903 by Emmeline Pankhurst: direct action for votes for women', fill: C.cream, edge: C.olive, kfill: C.olive },
      { kicker: 'PROTEST GROUPS', title: 'Extinction Rebellion', body: 'Founded in the UK in 2018: civil disobedience for climate action', fill: C.cream, edge: C.olive, kfill: C.olive },
    ], { gap: 20, card: { size: 16, tsize: 20 } }),
    (y) => row(y, [
      { kicker: 'YOUTH SUB-CULTURES', title: 'Mods, rockers, punks', body: 'Cohen (1972): media exaggeration of mods and rockers caused public fear and tougher policing', fill: C.tealLight, edge: C.tealDark, kfill: C.tealDark },
      { kicker: 'ONLINE SUB-CULTURES', title: 'Gamers, fandoms, hackers', body: 'Their own language, rules and status systems', fill: C.tealLight, edge: C.tealDark, kfill: C.tealDark },
    ], { gap: 20, card: { size: 16, tsize: 20 } }),
    (y) => card(30, y, 840, { kicker: 'RELIGIOUS SUB-CULTURES', title: 'The Amish, North America', body: 'Live by their own rules, limit modern technology and keep separate from wider society', fill: C.panel, kfill: C.muted, size: 16, tsize: 20 }),
    (y) => note(y, 'Which groups are labelled deviant depends on who has power: the suffragettes went from protesters to heroes.'),
  ]),
  'Examples of resistance: protest groups such as the suffragettes and Extinction Rebellion; youth sub-cultures such as mods, rockers and punks; online sub-cultures such as gamers, fandoms and hackers; and the Amish as a religious sub-culture.',
  'Control is never complete: resistance takes protest, youth, online and religious forms.',
  '## Resistance: protest groups and sub-cultures (2.2.7)');

// 08 Evaluate answer
add('08-evaluate-formal-vs-informal',
  compose('Formal or informal: which works better?', [
    (y) => balance(y, {
      tag: 'FORMAL', title: 'For formal agencies', items: ['Coercion and imprisonment', 'Laws apply to everyone, even people with no ties', 'Digital surveillance encourages self-discipline'],
    }, {
      tag: 'INFORMAL', title: 'For informal agencies', items: ['Most people conform without contact with police', 'Ostracism and dismissal are felt constantly', 'Much crime unreported; reoffending common'],
    }, { tilt: 0.5, verdictTitle: 'Judgement', verdict: 'Informal agencies are more effective for everyday conformity; formal agencies are a necessary backstop for serious deviance and where informal ties are weak.' }),
  ]),
  'A balance weighing formal agencies (coercion, laws for everyone, surveillance) against informal agencies (everyday conformity, constant sanctions, failures of formal control), tipping towards informal. The judgement: informal works for everyday conformity, formal is a backstop.',
  'Informal control does most of the work; formal control is the backstop.',
  '## Worked example: Question 2(f)-style evaluation');
