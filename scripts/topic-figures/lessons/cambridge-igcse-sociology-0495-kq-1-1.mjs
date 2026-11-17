import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-igcse-sociology-0495-kq-1-1';
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
const box = (x, y, w, h, text, o = {}) => card(x, y, w, { title: text, align: 'middle', minH: h, vcenter: true, tsize: o.tsize ?? 18, fill: o.fill ?? C.panel, edge: o.edge ?? C.ink, tfill: o.tfill ?? C.ink, pad: o.pad ?? 12 }).s;

// 01 Positivism vs interpretivism
add('01-two-approaches',
  compose('Two answers to one question about people', [
    (y) => card(30, y, 840, { title: 'Are people like objects pushed by outside forces, or thinking beings who act on what situations mean to them?', align: 'middle', fill: C.cream, edge: C.olive, tsize: 19 }),
    (y) => compareRows(y, 'Positivism', 'Interpretivism', [
      ['Linked to', 'Auguste Comte; Émile Durkheim', 'Max Weber'],
      ['View', 'Macro: society has a structure of social facts', 'Micro: small groups and face-to-face interaction'],
      ['Aim', 'Find patterns, trends, correlation and causation', 'Verstehen: understand action from the actor’s point of view'],
      ['Method', 'Scientific method: hypothesis, operationalise, test', 'In-depth study of words, feelings and reasons'],
      ['Data', 'Quantitative', 'Qualitative'],
      ['Tends to be', 'Reliable, but may lack validity', 'Valid, but may lack reliability'],
    ]),
  ]),
  'Positivism and interpretivism compared. Positivism, linked to Comte and Durkheim, takes a macro view, uses the scientific method and quantitative data, and tends to be reliable but may lack validity. Interpretivism, linked to Weber, takes a micro view, seeks verstehen through qualitative data, and tends to be valid but may lack reliability.',
  'Each approach starts from a different view of people, which leads to a different idea of good evidence.',
  '## Why there are two approaches at all');

// 02 Reliability vs validity trade-off on the early-leaving example
{
  const Y = 110;
  let b = card(30, Y, 840, { kicker: 'ONE TOPIC', title: 'Why do some students leave school early?', align: 'middle', tsize: 21, fill: C.cream, edge: C.olive, kfill: C.olive }).s;
  const col = (x, head, hcol, fill, edge, items, strong, weak) => {
    let s = '';
    let cy = Y + 168;
    items.forEach(([k, v]) => { const c = card(x + 18, cy, 374, { kicker: k, body: v, fill, edge, kfill: hcol, bfill: C.ink, size: 16, pad: 14 }); s += c.s; cy += c.h + 10; });
    cy += 6;
    s += `<rect x="${x + 18}" y="${cy}" width="180" height="54" rx="12" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2.5"/>` + T(x + 108, cy + 24, 'tends to be', { size: 15, anchor: 'middle', fill: C.tealDark }) + T(x + 108, cy + 45, strong, { size: 18, weight: 700, anchor: 'middle' });
    s += `<rect x="${x + 212}" y="${cy}" width="180" height="54" rx="12" fill="${C.panel}" stroke="${C.rust}" stroke-width="2.5" stroke-dasharray="7 5"/>` + T(x + 302, cy + 24, 'may lack', { size: 15, anchor: 'middle', fill: C.rust }) + T(x + 302, cy + 45, weak, { size: 18, weight: 700, anchor: 'middle' });
    return panel(x, Y + 110, 410, cy + 72 - (Y + 110)) + T(x + 205, Y + 148, head, { size: 22, weight: 700, anchor: 'middle', fill: hcol }) + s;
  };
  b += col(30, 'Positivist lens', C.tealDark, C.tealLight, C.tealDark, [
    ['PATTERNS AND TRENDS', 'School records: early leaving more common in some regions, fallen over ten years'],
    ['CORRELATION', 'Early leaving and low household income rise and fall together'],
    ['OBJECTIVITY', 'Standard questions keep personal views out'],
  ], 'Reliable', 'Validity');
  b += col(460, 'Interpretivist lens', C.olive, C.cream, C.olive, [
    ['MEANINGS', 'What does leaving mean to them: relief, shame, a step into adulthood?'],
    ['SUBJECTIVITY', 'The researcher reflects on their own interpretation'],
    ['VALIDITY', 'Open conversations may reveal reasons, such as caring for a sick parent'],
  ], 'Valid', 'Reliability');
  add('02-reliability-validity-tradeoff',
    svg(900, Y + 600, 'One topic, two lenses', b),
    'The topic of early school leaving seen through two lenses. The positivist lens finds patterns, trends and correlations objectively and tends to be reliable but may lack validity. The interpretivist lens explores meanings with some subjectivity and tends to be valid but may lack reliability.',
    'Positivist research tends to be reliable; interpretivist research tends to be valid.',
    '## The key terms explained through one example');
}

// 03 Three reasons a correlation can mislead
{
  const Y = 110, PW = 270, H = 400;
  const xs = [30, 315, 600];
  let b = '';
  const head = (x, n, title) => panel(x, Y, PW, H) + badge(x + 34, Y + 36, 20, n, C.mustard) + T(x + 64, Y + 44, title, { size: 20, weight: 700 });
  // 1 third factor
  let x = xs[0];
  b += head(x, '1', 'A third factor');
  b += box(x + 30, Y + 80, 210, 74, 'Parental income or education', { fill: C.cream, edge: C.olive, tsize: 17 });
  b += box(x + 14, Y + 230, 104, 66, 'More books', { fill: C.tealLight, edge: C.tealDark, tsize: 17 });
  b += box(x + 152, Y + 230, 104, 66, 'Higher grades', { fill: C.tealLight, edge: C.tealDark, tsize: 17 });
  b += arrow(x + 110, Y + 156, x + 66, Y + 224, { color: C.olive, marker: 'ahO' }) + arrow(x + 160, Y + 156, x + 204, Y + 224, { color: C.olive, marker: 'ahO' });
  b += `<line x1="${x + 120}" y1="${Y + 263}" x2="${x + 150}" y2="${Y + 263}" stroke="${C.ink}" stroke-width="3" stroke-dasharray="4 4"/>`;
  b += tl(x + PW / 2, Y + 330, ['Both may be caused', 'by something else'], { size: 16, anchor: 'middle', fill: C.muted }, 21);
  // 2 reverse direction
  x = xs[1];
  b += head(x, '2', 'Reverse direction');
  b += box(x + 40, Y + 80, 190, 66, 'Unemployment', { fill: C.tealLight, edge: C.tealDark });
  b += box(x + 40, Y + 230, 190, 66, 'Poor mental health', { fill: C.tealLight, edge: C.tealDark });
  b += arrow(x + 100, Y + 152, x + 100, Y + 224, { w: 3.5 }) + T(x + 88, Y + 194, '?', { size: 22, weight: 700, anchor: 'end' });
  b += arrow(x + 170, Y + 224, x + 170, Y + 152, { w: 3.5, color: C.rust, marker: 'ahR' }) + T(x + 182, Y + 194, 'or?', { size: 18, weight: 700, fill: C.rust });
  b += tl(x + PW / 2, Y + 330, ['Poor health might cause', 'job loss, not the reverse'], { size: 16, anchor: 'middle', fill: C.muted }, 21);
  // 3 chance or small sample
  x = xs[2];
  b += head(x, '3', 'Chance or a');
  b += T(x + 64, Y + 68, 'small sample', { size: 20, weight: 700 });
  const dot = (cx, cy, f) => `<circle cx="${cx}" cy="${cy}" r="7" fill="${f}" stroke="${C.ink}" stroke-width="1.5"/>`;
  let d1 = `<rect x="${x + 20}" y="${Y + 92}" width="86" height="120" rx="10" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
  [[0, 0], [1, 0], [0, 1], [1, 1], [0, 2], [1, 2]].forEach(([i, j]) => { d1 += dot(x + 48 + i * 30, Y + 122 + j * 32, C.rust); });
  let d2 = `<rect x="${x + 138}" y="${Y + 92}" width="116" height="200" rx="10" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>`;
  for (let k = 0; k < 24; k++) { const i = k % 4, j = Math.floor(k / 4); d2 += dot(x + 158 + i * 26, Y + 114 + j * 31, [1, 6, 11, 16, 21, 3].includes(k) ? C.rust : C.panel); }
  b += d1 + d2 + T(x + 63, Y + 234, 'one school', { size: 15, anchor: 'middle', weight: 600, fill: C.olive }) + T(x + 196, Y + 312, 'larger study', { size: 15, anchor: 'middle', weight: 600, fill: C.tealDark });
  b += arrow(x + 108, Y + 150, x + 134, Y + 150, { w: 3 });
  b += tl(x + PW / 2, Y + 348, ['The pattern may', 'disappear'], { size: 16, anchor: 'middle', fill: C.muted }, 21);
  const n = note(Y + H + 20, 'A correlation alone cannot show causation. Explaining why a link may mislead gains marks.');
  b += n.s;
  add('03-correlation-can-mislead',
    svg(900, Y + H + 20 + n.h + 28, 'Three reasons a correlation can mislead', b),
    'Three panels. A third factor: parental income or education may cause both owning more books and higher grades. Reverse direction: unemployment and poor mental health are linked, but poor health might cause job loss. Chance or a small sample: a pattern found in one school may disappear in a larger study.',
    'Two things moving together does not prove that one causes the other.',
    '## Correlation and causation: three reasons a link can mislead');
}

// 04 Triangulation: Barker
{
  const Y = 130;
  let b = '';
  const cx = 450, cy = Y + 250;
  b += `<circle cx="${cx}" cy="${cy}" r="92" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + tl(cx, cy - 10, ['Why people joined', 'and left the', 'Unification Church'], { size: 17, weight: 700, anchor: 'middle' }, 21);
  const m = [
    [30, Y + 20, 'Participant observation', 'gave meaning'],
    [570, Y + 20, 'In-depth interviews', ''],
    [300, Y + 400, 'Large questionnaire', 'did her impressions hold across many members?'],
  ];
  m.forEach(([x, y, ti, bo]) => { b += card(x, y, 300, { title: ti, body: bo || undefined, align: 'middle', fill: C.tealLight, edge: C.tealDark, tsize: 19, size: 16, minH: 108, vcenter: true }).s; });
  b += arrow(260, Y + 132, cx - 68, cy - 58, { color: C.tealDark, marker: 'ahT', w: 4 });
  b += arrow(640, Y + 132, cx + 68, cy - 58, { color: C.tealDark, marker: 'ahT', w: 4 });
  b += arrow(cx, Y + 396, cx, cy + 98, { color: C.tealDark, marker: 'ahT', w: 4 });
  const n1 = card(30, Y + 540, 410, { title: 'Triangulation', body: 'More than one method or source on the same issue, so the weakness of one is checked by the strength of another.', fill: C.cream, edge: C.olive, tfill: C.olive, size: 16, tsize: 19 });
  const n2 = card(460, Y + 540, 410, { title: 'Methodological pluralism', body: 'Several methods used to build a fuller picture, rather than to cross-check one result.', fill: C.panel, edge: C.panelEdge, size: 16, tsize: 19 });
  const h = Math.max(n1.h, n2.h);
  b += card(30, Y + 540, 410, { title: 'Triangulation', body: 'More than one method or source on the same issue, so the weakness of one is checked by the strength of another.', fill: C.cream, edge: C.olive, tfill: C.olive, size: 16, tsize: 19, minH: h }).s;
  b += card(460, Y + 540, 410, { title: 'Methodological pluralism', body: 'Several methods used to build a fuller picture, rather than to cross-check one result.', size: 16, tsize: 19, minH: h }).s;
  add('04-triangulation-barker',
    svg(900, Y + 540 + h + 28, 'Triangulation in practice', b, 'Eileen Barker, <tspan font-style="italic">The Making of a Moonie</tspan> (1984)'),
    'Eileen Barker’s study The Making of a Moonie (1984) used participant observation, in-depth interviews and a large questionnaire to investigate why people joined and left the Unification Church. Triangulation uses methods to cross-check each other; methodological pluralism uses them to build a fuller picture.',
    'Barker combined three methods so each could check the others.',
    '## Combining approaches (1.1.3)');
}

// 05 Longitudinal study
{
  const Y = 110;
  let b = panel(30, Y, 840, 270);
  b += T(55, Y + 40, 'Same people, again and again', { size: 21, weight: 700 });
  const person = (x, y, f = C.mustard) => `<circle cx="${x}" cy="${y - 20}" r="10" fill="${f}" stroke="${C.ink}" stroke-width="2"/><rect x="${x - 12}" y="${y - 8}" width="24" height="30" rx="9" fill="${f}" stroke="${C.ink}" stroke-width="2"/>`;
  const waves = [6, 5, 4, 3];
  b += arrow(70, Y + 222, 840, Y + 222, { w: 4 }) + T(840, Y + 252, 'time', { size: 16, anchor: 'end', fill: C.muted });
  waves.forEach((n, i) => {
    const x0 = 95 + i * 190;
    for (let k = 0; k < 6; k++) {
      const px = x0 + (k % 3) * 36, py = Y + 100 + Math.floor(k / 3) * 66;
      b += k < n ? person(px, py) : `<g opacity="0.35">${person(px, py, C.panel)}</g>`;
    }
    b += `<circle cx="${x0 + 36}" cy="${Y + 222}" r="7" fill="${C.ink}"/>` + T(x0 + 36, Y + 252, `Wave ${i + 1}`, { size: 16, weight: 600, anchor: 'middle' });
  });
  b += T(845, Y + 40, 'faded = dropped out (attrition)', { size: 16, weight: 700, fill: C.rust, anchor: 'end' });
  const r = row(Y + 290, [
    { title: 'Special strength', body: ['Shows sequence: did a cause come before its supposed effect?', 'Helps move from correlation towards causation', 'Can be quantitative or qualitative'], bullets: true, fill: C.tealLight, edge: C.tealDark, tfill: C.tealDark },
    { title: 'Problems', body: ['Cost', 'Attrition makes the sample less representative', 'Funding and the researcher’s career must last', 'Being studied repeatedly may change behaviour'], bullets: true, fill: C.cream, edge: C.rust, tfill: C.rust },
  ], { gap: 20, card: { size: 16, tsize: 20 } });
  b += r.s;
  add('05-longitudinal-study',
    svg(900, Y + 290 + r.h + 28, 'How a longitudinal study works', b),
    'The same group of people is studied in four waves over time, and some drop out at each wave (attrition). Longitudinal studies show sequence, helping move from correlation towards causation, but they are costly, lose sample members, need long-term funding and may change participants’ behaviour.',
    'Following the same people over time shows what came first.',
    '## Combining approaches (1.1.3)');
}

// 06 Seven evaluation concepts
{
  const Y = 110;
  const items = [
    ['Bias', 'Systematic distortion', 'researcher’s values, leading wording, who is left out'],
    ['Interviewer effect', 'Answers shift because of who asks', 'a teacher asking students about cheating'],
    ['Hawthorne / observer effect', 'People change when they know they are studied', 'Hawthorne works, USA, 1920s–30s'],
    ['Validity', 'Does the data give a true picture?', 'sensitive behaviour is under-reported'],
    ['Reliability', 'Could it be repeated with similar results?', 'standardised methods score highly'],
  ];
  let b = '', cy = Y;
  items.forEach(([k, m, c]) => {
    const r = row(cy, [
      { title: k, fill: C.tealLight, edge: C.tealDark, tsize: 18 },
      { body: m, bfill: C.ink },
      { body: c, fill: C.cream, edge: C.olive, bfill: C.ink },
    ], { gap: 12, card: { size: 16, pad: 14 }, vcenter: true });
    b += r.s; cy += r.h + 10;
  });
  // representativeness -> generalisability
  cy += 6;
  const a = card(30, cy, 360, { title: 'Representativeness', body: 'Does the sample share the characteristics of the target population?', fill: C.tealLight, edge: C.tealDark, size: 16, tsize: 18 });
  const g = card(510, cy, 360, { title: 'Generalisability', body: 'Can findings be applied beyond the people studied?', fill: C.cream, edge: C.olive, size: 16, tsize: 18 });
  const hh = Math.max(a.h, g.h);
  b += card(30, cy, 360, { title: 'Representativeness', body: 'Does the sample share the characteristics of the target population?', fill: C.tealLight, edge: C.tealDark, size: 16, tsize: 18, minH: hh }).s;
  b += card(510, cy, 360, { title: 'Generalisability', body: 'Can findings be applied beyond the people studied?', fill: C.cream, edge: C.olive, size: 16, tsize: 18, minH: hh }).s;
  b += arrow(396, cy + hh / 2, 504, cy + hh / 2, { w: 4 }) + T(450, cy + hh / 2 - 14, 'needed for', { size: 15, anchor: 'middle', weight: 600 });
  cy += hh + 18;
  const n = note(cy, 'Always link the concept to a cause in the research design, e.g. “low validity because people under-report sensitive behaviour”.');
  b += n.s; cy += n.h;
  add('06-evaluation-toolkit',
    svg(900, cy + 28, 'Seven tools for evaluating research', b),
    'Seven evaluation concepts with a meaning and an example of a cause in the design: bias, interviewer effect, Hawthorne or observer effect, validity and reliability, plus representativeness, which is needed for generalisability.',
    'Name the concept, then link it to a cause in the design.',
    '## Evaluating research choices (1.1.4)');
}

// 07 Evaluate answer structure
add('07-evaluate-answer-structure',
  compose('Building an “evaluate” answer', [
    (y) => card(30, y, 840, { kicker: 'QUESTION', title: 'Evaluate the view that interpretivist research is more useful than positivist research.', fill: C.cream, edge: C.olive, kfill: C.olive, tsize: 19 }),
    (y) => ladder(y, [
      { tag: 'For', text: 'Unstructured interviews let people explain in their own words: verstehen and high validity. Example: “unmotivated” students working night shifts.' },
      { tag: 'Against', text: 'Small samples: not representative or generalisable. Subjectivity and low reliability. Positivism shows patterns and trends across thousands.' },
      { tag: 'Judgement', text: 'It depends on the aim: interpretivism for why, positivism for how much. Triangulation suggests combining both.', fill: C.mustard },
    ], { tagW: 150, size: 17 }),
    (y) => note(y, 'Why it works: syllabus terms in every paragraph, each applied to an example, and a reasoned judgement rather than a restatement.'),
  ]),
  'A three-step evaluate answer. For: interviews give verstehen and validity. Against: small samples limit representativeness, generalisability and reliability, while positivism shows patterns at scale. Judgement: usefulness depends on the research aim, and triangulation combines both.',
  'For, against, then a judgement linked to the research aim.',
  '## Worked example: Question 1(d)-style evaluation');

// 08 Command words
add('08-command-words',
  compose('What each command word asks for', [
    (y) => ladder(y, [
      { tag: 'Define', text: 'One accurate sentence, ideally with a brief example.' },
      { tag: 'Explain', text: 'Identify the point, develop it with “because” or “this means that”, and apply it.' },
      { tag: 'Discuss', text: 'Several developed points in paragraphs, not a list.' },
      { tag: 'Evaluate', text: 'Argue for and against, use evaluation concepts, and end with a judgement linked to research aims.' },
    ], { tagW: 150, size: 17 }),
    (y) => note(y, 'Question 1(e): explain and justify a research plan, but do not evaluate your own methodology.'),
  ]),
  'Four command words. Define: one accurate sentence with an example. Explain: develop a point with because and apply it. Discuss: several developed points in paragraphs. Evaluate: argue both sides with evaluation concepts and reach a judgement. Question 1(e) asks you to justify a plan, not evaluate it.',
  'Match the depth of your answer to the command word.',
  '## Exam technique for 0495 command words');
