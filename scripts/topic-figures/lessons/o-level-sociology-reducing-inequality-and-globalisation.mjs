import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'o-level-sociology-reducing-inequality-and-globalisation';
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

const box = (x, y, w, h, fill, edge = C.ink) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>`;

// 01 Redistribution
{
  const Y = 110;
  let b = '';
  b += card(30, Y, 250, { kicker: 'HIGHER INCOMES', title: 'Pay a larger share in tax', body: 'progressive taxation', align: 'middle', fill: C.tealLight, edge: C.tealDark, kfill: C.tealDark, minH: 130, vcenter: true }).s;
  b += card(345, Y, 210, { kicker: 'THE STATE', title: 'Collects and redistributes', align: 'middle', fill: C.cream, edge: C.olive, kfill: C.olive, minH: 130, vcenter: true }).s;
  b += arrow(286, Y + 65, 338, Y + 65, { w: 5 });
  b += card(620, Y, 250, { kicker: 'SERVICES', title: 'For everyone', align: 'middle', minH: 56 }).s;
  b += card(620, Y + 150, 250, { kicker: 'BENEFITS', title: 'Cash to poorer households', align: 'middle', minH: 56, fill: C.cream, edge: C.olive }).s;
  b += arrow(560, Y + 55, 613, Y + 55, { w: 4 }) + path(`M560,${Y + 100} Q590,${Y + 100} 590,${Y + 150} L590,${Y + 190} L612,${Y + 190}`, { w: 4, extra: 'marker-end="url(#ah)"' });
  const ex = card(30, Y + 160, 540, { kicker: 'EXAMPLE OF BENEFITS', title: 'Benazir Income Support Programme, Pakistan (2008)', body: 'Cash payments to low-income families, paid to women in the household.', kfill: C.olive, tsize: 18 });
  b += ex.s;
  const y2 = Y + 160 + Math.max(ex.h, 140) + 30;
  b += T(450, y2 + 4, 'Other legal tools', { size: 20, weight: 700, anchor: 'middle' });
  const r = row(y2 + 22, [
    { title: 'Minimum wage', body: 'A legal floor under pay' },
    { title: 'Equal opportunities laws', body: 'Outlaw discrimination, e.g. UK Equal Pay Act (1970)' },
    { title: 'Other measures', body: 'Quotas for disadvantaged groups; subsidies on basic foods' },
  ], { gap: 16, card: { size: 16, tsize: 18 } });
  b += r.s;
  add('01-redistribution-and-laws',
    svg(900, y2 + 22 + r.h + 30, 'How laws move resources towards the poor', b),
    'Progressive taxation takes a larger share of higher incomes; the state uses it to fund services for everyone and cash benefits for poorer households, such as Pakistan’s Benazir Income Support Programme (2008). Other legal tools are a minimum wage, equal opportunities laws such as the UK Equal Pay Act (1970), quotas and food subsidies.',
    'Taxing more from the rich and giving more to the poor narrows the gap.',
    '## How do governments use laws to reduce inequality?');
}

// 02 Welfare state across life
{
  const Y = 110, x0 = 60, x1 = 840;
  let b = arrow(x0, Y + 70, x1 + 10, Y + 70, { w: 5 });
  const st = [['Childhood', 0.12], ['Working age', 0.5], ['Old age', 0.88]];
  st.forEach(([s, p]) => { const x = x0 + (x1 - x0) * p; b += `<circle cx="${x}" cy="${Y + 70}" r="9" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x, Y + 46, s, { size: 18, weight: 700, anchor: 'middle' }); });
  const cw3 = 260;
  const cards = [
    { x: 30, title: 'Free / universal education', body: 'Routes to better jobs and mobility. Sri Lanka: free from kindergarten to university (1940s).' },
    { x: 320, title: 'Unemployment benefits', body: 'Prevent destitution between jobs. Common in Europe; limited in many developing countries.' },
    { x: 610, title: 'Pensions', body: 'Income in old age, from state and employer schemes.' },
  ];
  const hs = cards.map((c) => card(c.x, Y + 100, cw3, { title: c.title, body: c.body, size: 16, tsize: 18 }).h), h = Math.max(...hs);
  cards.forEach((c) => { b += card(c.x, Y + 100, cw3, { title: c.title, body: c.body, size: 16, tsize: 18, minH: h }).s + `<line x1="${c.x + cw3 / 2}" y1="${Y + 80}" x2="${c.x + cw3 / 2}" y2="${Y + 100}" stroke="${C.ink}" stroke-width="2.5"/>`; });
  const y2 = Y + 100 + h + 26;
  b += T(450, y2 + 6, 'Throughout life', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  const r = row(y2 + 22, [
    { title: 'Free healthcare', body: 'Treatment regardless of income, e.g. Britain’s NHS (1948)' },
    { title: 'Low-cost housing', body: 'Secure, affordable homes through public housing' },
    { title: 'Universal basic income', body: 'Unconditional income for all: debated and trialled' },
  ], { gap: 16, card: { size: 16, tsize: 18, fill: C.tealLight, edge: C.tealDark } });
  b += r.s;
  add('02-welfare-state-across-life',
    svg(900, y2 + 22 + r.h + 30, 'What a welfare state provides, and when', b),
    'A life line from childhood to old age. Free education supports childhood, unemployment benefits support working age, and pensions support old age. Free healthcare, low-cost housing and universal basic income apply throughout life.',
    'Welfare provision supports life chances at every stage of life.',
    '## What does a welfare state provide?');
}

// 03 NGOs: what they do and their limits
add('03-ngos-roles-and-limits',
  compose('NGOs: what they do and where they fall short', [
    (y) => row(y, [
      { kicker: 'REDUCING POVERTY', title: 'Edhi Foundation (1951)', body: 'Ambulances, shelters and orphanages for the poor, Pakistan' },
      { kicker: 'PROMOTING BUSINESS', title: 'Akhuwat (2001)', body: 'Interest-free small loans so poor families can start businesses' },
    ], { gap: 20, card: { size: 16, tsize: 19, kfill: C.tealDark } }),
    (y) => row(y, [
      { kicker: 'MEDICAL ASSISTANCE', title: 'Clinics and vaccination', body: 'International medical charities in crisis areas' },
      { kicker: 'IMPROVING EDUCATION', title: 'Schools and literacy', body: 'Low-cost schools, teacher training, literacy programmes, especially for girls' },
    ], { gap: 20, card: { size: 16, tsize: 19, kfill: C.tealDark } }),
    (y) => card(30, y, 840, { kicker: 'CRITICISMS', title: 'But NGOs may…', body: ['depend on foreign donors and follow donors’ priorities', 'lack accountability to local people', 'duplicate state services', 'be unable to tackle the structural causes of poverty'], bullets: true, kfill: C.rust, edge: C.rust, fill: C.cream, tsize: 19, size: 17 }),
  ]),
  'Four roles of NGOs with examples: reducing poverty (Edhi Foundation, 1951), promoting business (Akhuwat’s interest-free loans, 2001), medical assistance and improving education. Criticisms: they may depend on foreign donors, lack local accountability, duplicate state services and cannot tackle structural causes.',
  'NGOs help directly, but cannot fix the structural causes of poverty.',
  '## What do NGOs do?');

// 04 Views on welfare
add('04-views-on-welfare',
  compose('Has welfare worked? Critics from both sides', [
    (y) => {
      let s = arrow(450, y + 40, 60, y + 40, { w: 4, color: C.rust, marker: 'ahR' }) + arrow(450, y + 40, 840, y + 40, { w: 4, color: C.tealDark, marker: 'ahT' });
      s += `<rect x="350" y="${y + 18}" width="200" height="44" rx="22" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + T(450, y + 47, 'Welfare state', { size: 19, weight: 700, anchor: 'middle' });
      s += T(60, y + 82, 'Does too much', { size: 18, weight: 700, fill: C.rust }) + T(840, y + 82, 'Does too little', { size: 18, weight: 700, anchor: 'end', fill: C.tealDark });
      return { s, h: 92 };
    },
    (y) => {
      const L = { kicker: 'NEW RIGHT', title: 'Creates an underclass', body: ['Too generous: people depend on benefits and lack work discipline (Charles Murray, 1984 and 1990)', 'Want lower taxes and less state help'], bullets: true, kfill: C.rust, edge: C.rust };
      const R = { kicker: 'MARXISTS', title: 'A “safety valve” for capitalism', body: ['Prevents unrest', 'Keeps workers fit for work', 'Leaves the ownership of wealth unchanged'], bullets: true, kfill: C.tealDark, edge: C.tealDark };
      const h = Math.max(card(30, y, 410, L).h, card(460, y, 410, R).h);
      return { s: card(30, y, 410, { ...L, minH: h }).s + card(460, y, 410, { ...R, minH: h }).s, h };
    },
    (y) => row(y, [
      { kicker: 'CULTURE OF POVERTY / DEPENDENCY CULTURE', title: 'Blaming values', body: 'Oscar Lewis: the poor develop fatalistic values passed to their children. Dependency culture: benefits discourage self-reliance. Critics: poverty comes from lack of opportunity, not values.' },
      { kicker: 'FEMINISTS', title: 'Equality laws are not enough', body: 'Women still earn less, do most unpaid work and are under-represented in power.' },
    ], { gap: 20, card: { size: 16, tsize: 19, kfill: C.olive, fill: C.cream, edge: C.olive } }),
  ]),
  'The welfare state sits between two critics. The New Right say it does too much and creates a dependent underclass. Marxists say it does too little, acting as a safety valve that leaves wealth ownership unchanged. Oscar Lewis’s culture of poverty and feminist criticisms of equality laws are shown below.',
  'The New Right say welfare does too much; Marxists say it does too little.',
  '## Have these attempts worked? Sociological views');

// 05 Migration
{
  const Y = 110;
  let b = box(30, Y, 330, 380, C.tealLight, C.tealDark) + box(540, Y, 330, 380, C.cream, C.olive);
  b += T(195, Y + 38, 'Sending country', { size: 22, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(195, Y + 62, 'e.g. in South Asia', { size: 16, anchor: 'middle', fill: C.muted });
  b += T(705, Y + 38, 'Receiving country', { size: 22, weight: 700, anchor: 'middle', fill: C.olive }) + T(705, Y + 62, 'e.g. the Gulf states', { size: 16, anchor: 'middle', fill: C.muted });
  b += T(55, Y + 102, 'PUSH FACTORS', { size: 16, weight: 700, fill: C.rust }) + tl(55, Y + 128, ['• Unemployment', '• Low wages', '• Conflict', '• Natural disasters'], { size: 17 }, 25);
  b += T(565, Y + 102, 'PULL FACTORS', { size: 16, weight: 700, fill: C.tealDark }) + tl(565, Y + 128, ['• Jobs', '• Higher wages', '• Education', '• Family already abroad'], { size: 17 }, 25);
  b += `<line x1="55" y1="${Y + 244}" x2="335" y2="${Y + 244}" stroke="${C.tealDark}" stroke-width="1.5"/>` + `<line x1="565" y1="${Y + 244}" x2="845" y2="${Y + 244}" stroke="${C.olive}" stroke-width="1.5"/>`;
  b += T(55, Y + 272, 'Gains remittances', { size: 17, weight: 700 }) + T(55, Y + 296, 'May lose skilled workers', { size: 17, weight: 700, fill: C.rust });
  b += T(565, Y + 272, 'Gains labour', { size: 17, weight: 700 }) + T(565, Y + 296, 'Greater cultural diversity', { size: 17, weight: 700 });
  b += tl(565, Y + 326, ['Migrants may face stereotyping,', 'poor conditions, limited rights'], { size: 16, fill: C.rust }, 21);
  b += arrow(370, Y + 150, 530, Y + 150, { w: 8 }) + T(450, Y + 130, 'migrants', { size: 17, weight: 700, anchor: 'middle' }) + T(450, Y + 182, 'construction,', { size: 15, anchor: 'middle', fill: C.muted }) + T(450, Y + 200, 'service work', { size: 15, anchor: 'middle', fill: C.muted });
  b += arrow(530, Y + 280, 370, Y + 280, { w: 5, color: C.olive, marker: 'ahO' }) + T(450, Y + 266, 'remittances', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  b += T(450, Y + 306, 'support families', { size: 15, anchor: 'middle', fill: C.muted }) + T(450, Y + 324, 'and national income', { size: 15, anchor: 'middle', fill: C.muted });
  add('05-migration-push-pull',
    svg(900, Y + 380 + 30, 'Migration between societies', b),
    'A sending country, such as in South Asia, and a receiving country, such as the Gulf states. Push factors are unemployment, low wages, conflict and natural disasters; pull factors are jobs, higher wages, education and family abroad. Migrants move one way for construction and service work; remittances flow back. The sending country may lose skilled workers; the receiving country gains labour and diversity, but migrants may face stereotyping and poor conditions.',
    'Workers flow one way and remittances flow back, with gains and losses on both sides.',
    '## How does migration affect inequality between societies?');
}

// 06 Ecological issues
add('06-ecological-issues',
  compose('Global ecological issues hit poorer societies hardest', [
    (y) => row(y, [
      { kicker: 'TRANSNATIONAL COMPANIES', title: 'Factories move to lower wages and weaker safety rules', body: 'Rana Plaza, Bangladesh (2013): more than 1,100 garment workers killed.', kfill: C.rust, edge: C.rust },
      { kicker: 'CLIMATE CHANGE', title: 'Poorer countries suffer most despite producing fewer emissions', body: 'Pakistan floods (2022) affected millions of people.', kfill: C.rust, edge: C.rust },
    ], { gap: 20, card: { size: 16, tsize: 18 } }),
    (y) => row(y, [
      { kicker: 'POLLUTION', title: 'Industrial waste and air pollution', body: 'Often worst in poorer communities.', kfill: C.olive, edge: C.olive, fill: C.cream },
      { kicker: 'URBANISATION', title: 'Rapid migration to cities', body: 'Karachi and Dhaka: large informal settlements with poor sanitation.', kfill: C.olive, edge: C.olive, fill: C.cream },
    ], { gap: 20, card: { size: 16, tsize: 18 } }),
  ]),
  'Four cards. Transnational companies move factories to places with lower wages and weaker safety rules, as in the Rana Plaza collapse in Bangladesh (2013). Poorer countries suffer most from climate change, as in Pakistan’s 2022 floods. Pollution is worst in poorer communities, and rapid urbanisation has created informal settlements in Karachi and Dhaka.',
  'The costs of global production and climate change fall mostly on poorer societies.',
  '## How do global ecological issues affect inequality?');

// 07 Why some societies are richer
{
  const Y = 110;
  let b = box(30, Y, 260, 300, C.tealLight, C.tealDark) + box(610, Y, 260, 300, C.cream, C.olive);
  b += T(160, Y + 40, 'Poorer societies', { size: 21, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += T(740, Y + 40, 'Richer countries', { size: 21, weight: 700, anchor: 'middle', fill: C.olive }) + T(740, Y + 64, 'and companies', { size: 21, weight: 700, anchor: 'middle', fill: C.olive });
  const fl = [['Cheap labour', 'Marxist view'], ['Raw materials', 'Marxist view; colonialism'], ['Women’s low-paid labour', 'feminist view']];
  fl.forEach(([a, w], i) => {
    const y = Y + 110 + i * 70;
    b += arrow(300, y, 600, y, { w: 5 }) + T(450, y - 12, a, { size: 18, weight: 700, anchor: 'middle' }) + T(450, y + 26, w, { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  });
  b += tl(160, Y + 150, ['Women have', 'unequal access to', 'land, education', 'and paid work'], { size: 16, anchor: 'middle', fill: C.ink }, 22);
  b += tl(740, Y + 170, ['profit from', 'what flows in'], { size: 19, anchor: 'middle', weight: 700, fill: C.olive }, 26);
  const n = card(30, Y + 320, 840, { kicker: 'COLONIALISM', title: 'Colonial rule reshaped economies to export raw materials and drained wealth', body: 'Its effects continue in trade patterns and institutions.', kfill: C.rust, edge: C.rust, tsize: 18 });
  b += n.s;
  add('07-explaining-global-inequality',
    svg(900, Y + 320 + n.h + 30, 'Why are some societies richer than others?', b),
    'Arrows run from poorer societies to richer countries and companies carrying cheap labour and raw materials (the Marxist view) and women’s low-paid labour (the feminist view). Colonialism reshaped economies to export raw materials and drained wealth, with effects that continue in trade and institutions.',
    'Marxist, colonial and feminist explanations all show wealth flowing from poorer to richer societies.',
    '## Why are some societies richer than others?');
}
