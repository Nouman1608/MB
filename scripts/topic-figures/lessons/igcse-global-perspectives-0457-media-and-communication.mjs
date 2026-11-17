import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-global-perspectives-0457-media-and-communication';
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

// 01 Issues at three levels
add('01-media-issues-levels',
  compose('Media issues at three levels', [
    (y) => rings(y, [
      { name: 'Local', text: 'Local papers closing, so fewer reporters attend council meetings or courts; rumours in community messaging groups.' },
      { name: 'National', text: 'How public service broadcasters are funded, such as the BBC licence fee; minority languages on national radio and TV.' },
      { name: 'Global', text: 'False information crossing borders faster than it can be checked; the safety and freedom of journalists.' },
    ], { R: 175 }),
    (y) => row(y, [
      { kicker: 'MISINFORMATION', kfill: C.olive, title: 'False, shared by someone who believes it', fill: C.cream, edge: C.olive },
      { kicker: 'DISINFORMATION', kfill: C.rust, title: 'False, shared on purpose to mislead', edge: C.rust },
      { kicker: 'MEDIA LITERACY', title: 'The ability to find, judge and create media messages', fill: C.tealLight, edge: C.tealDark },
    ], { card: { tsize: 17 } }),
  ]),
  'Rings show media issues locally (local papers closing, rumours in messaging groups), nationally (funding public service broadcasters, minority languages on air) and globally (false information crossing borders, journalists’ safety). Below, definitions of misinformation, disinformation and media literacy.',
  'Media issues can be found at every level, from a local paper to global press freedom.',
  '## Issues at global, national and local level');

// 02 Stakeholders: who gains, who loses, who decides
add('02-media-stakeholders',
  compose('Who gains, who loses, who decides?', [
    (y) => hub(y, 'A media issue', [
      { title: 'Journalists and editors', body: 'Independence, safety, income: their jobs depend on it.' },
      { title: 'Media owners', body: 'Profit and audience size: they run businesses.' },
      { title: 'Governments', body: 'Public order, security, trust; may also be reported on.' },
      { title: 'Advertisers', body: 'Reaching audiences cheaply: money follows audiences.' },
      { title: 'Technology platforms', body: 'Freedom to run services, low costs: laws affect their model.' },
      { title: 'Audiences', body: 'Accurate, affordable, accessible news to make decisions.' },
      { title: 'Minority-language communities', body: 'Being informed and represented, not left out.' },
    ], { r: 90, cardW: 285 }),
    (y) => note(y, 'Article 19 (UDHR, 1948): the right “to seek, receive and impart information and ideas through any media and regardless of frontiers”. It is used to argue both for less regulation and for more support for independent media.', { title: 'One source, two perspectives' }),
  ]),
  'Seven groups around a media issue, each with its concern and reason: journalists, media owners, governments, advertisers, technology platforms, audiences and minority-language communities. Below, Article 19 of the Universal Declaration of Human Rights is used to support both less regulation and more support for independent media.',
  'Ask who gains, who loses and who decides; the same source can back opposite views.',
  '## Perspectives on media issues');

// 03 Decline of local news chain
add('03-local-news-chain',
  compose('Why local news declines, and what follows', [
    (y) => row(y, [
      { title: 'Advertising money moves online', align: 'middle', fill: C.cream, edge: C.olive },
      { title: 'Papers have less income', align: 'middle' },
      { title: 'Reporters are cut', align: 'middle' },
      { title: 'Fewer council meetings and courts reported', align: 'middle', fill: C.tealLight, edge: C.tealDark },
    ], { arrows: true, gap: 40, card: { tsize: 17, pad: 14 } }),
    (y) => row(y, [
      { kicker: 'OTHER CAUSES', kfill: C.olive, body: ['Fewer people buy printed papers', 'Owners merge titles to cut costs'], bullets: true, fill: C.cream, edge: C.olive },
      { kicker: 'FURTHER CONSEQUENCES', body: ['Some argue local decisions are less checked', 'Residents may rely more on unverified posts'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    ], { gap: 24, card: { size: 16 } }),
    (y) => note(y, 'Joining the steps with “so” is analysis; a list of unconnected points is not.'),
  ]),
  'A chain: advertising money moves online, so papers have less income, so reporters are cut, so fewer council meetings and courts are reported. Other causes are falling print sales and merged titles; further consequences are less checking of local decisions and more reliance on unverified posts.',
  'Linked steps show how one change leads to the next.',
  '## Causes and consequences');

// 04 Agenda-setting study
{
  const Y = 120;
  let b = card(30, Y - 6, 840, { kicker: 'MCCOMBS AND SHAW (1972)', title: 'Undecided voters in Chapel Hill, North Carolina, 1968 US presidential campaign', tsize: 19, fill: C.panel, edge: C.ink }).s;
  const ly = Y + 132;
  b += card(80, ly, 300, { title: 'Issues the media covered most', align: 'middle', fill: C.tealLight, edge: C.tealDark, tsize: 19, minH: 90, vcenter: true }).s;
  b += card(520, ly, 300, { title: 'Issues voters rated most important', align: 'middle', fill: C.cream, edge: C.olive, tsize: 19, minH: 90, vcenter: true }).s;
  b += `<line x1="384" y1="${ly + 45}" x2="516" y2="${ly + 45}" stroke="${C.ink}" stroke-width="4" stroke-dasharray="10 7"/>` + T(450, ly + 34, 'closely', { size: 16, weight: 700, anchor: 'middle' }) + T(450, ly + 72, 'matched', { size: 16, weight: 700, anchor: 'middle' });
  b += T(450, ly + 130, 'A link is not proof that the media caused the voters’ views', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  const lim = row(ly + 152, [
    { kicker: 'LIMITATION', kfill: C.rust, title: 'Correlation, not cause', edge: C.rust },
    { kicker: 'LIMITATION', kfill: C.rust, title: 'One town only', edge: C.rust },
    { kicker: 'LIMITATION', kfill: C.rust, title: 'Long before online news', edge: C.rust },
  ], { card: { tsize: 18 } });
  b += lim.s + note(ly + 152 + lim.h + 18, 'Use it as a reason why media coverage matters, not as proof. Newer evidence is needed before applying it today.').s;
  add('04-agenda-setting',
    svg(900, ly + 152 + lim.h + 18 + 112, 'Agenda-setting: does coverage shape priorities?', b),
    'McCombs and Shaw (1972) found that the issues undecided voters in Chapel Hill rated most important during the 1968 US presidential campaign closely matched the issues the media covered most. Three limitations: a link is not cause, the sample was one town, and it predates online news.',
    'A strong link is still not proof of cause.',
    '## Causes and consequences');
}

// 05 VNB trust survey
add('05-vnb-trust-survey',
  compose('“9 in 10 viewers trust VNB News”', [
    (y) => card(30, y, 840, { kicker: 'FICTIONAL BROADCASTER VNB, OWN ANNUAL REPORT', title: '“9 in 10 viewers trust VNB News. Our survey of viewers proves we are the country’s most trusted source.”', tsize: 19, fill: C.panel, edge: C.ink }),
    (y) => {
      let s = card(30, y, 330, { kicker: 'WHAT THE EVIDENCE COVERS', title: '9 in 10 of VNB’s own viewers', fill: C.tealLight, edge: C.tealDark, tsize: 19, minH: 120, vcenter: true }).s;
      s += card(540, y, 330, { kicker: 'WHAT THE CLAIM SAYS', kfill: C.olive, title: 'The country’s most trusted source', fill: C.cream, edge: C.olive, tsize: 19, minH: 120, vcenter: true }).s;
      s += arrow(368, y + 60, 532, y + 60, { w: 4, color: C.rust, marker: 'ahR', dash: '10 7' }) + T(450, y + 46, 'a jump', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
      s += T(450, y + 88, 'no comparison with', { size: 15, anchor: 'middle', fill: C.rust }) + T(450, y + 106, 'other broadcasters', { size: 15, anchor: 'middle', fill: C.rust });
      return { s, h: 120 };
    },
    (y) => ladder(y, [
      { tag: 'Knowledge', text: 'VNB has a vested interest: the survey is about its own reputation, and it published the result itself.' },
      { tag: 'Application', text: 'It surveyed people who already choose to watch VNB, so the sample is likely to favour it.' },
      { tag: 'Analysis', text: '“Proves” overstates what one survey can show, and the national claim needs a comparison.' },
      { tag: 'Evaluation', text: 'Weak for the national claim. A random national sample asked about several broadcasters would be more reliable.' },
    ], { size: 16 }),
  ]),
  'A fictional broadcaster, VNB, claims 9 in 10 viewers trust it and that it is the country’s most trusted source. The evidence covers only its own viewers, so the claim jumps to a national comparison it never makes. Four steps evaluate it: vested interest, a sample that favours VNB, overstated wording, and the need for a random national sample.',
  'Use details from the source; “it is biased” on its own earns little.',
  '## Judging sources and evidence');

// 06 Platforms paying for news timeline
{
  const Y = 120, ly = Y + 40;
  const ev = [['2021', 'Australia: News Media Bargaining Code', 'Feb 2021: Facebook briefly blocks news in Australia, then signs deals'], ['2024', 'Meta says it will not renew the Australian deals', ''], ['22 June 2023', 'Canada: Online News Act', 'Aug 2023: Meta ends news on its platforms in Canada'], ['', 'Google: C$100 million a year', 'indexed to inflation, for Canadian news businesses']];
  let b = '';
  const col = (x, items, head, f, e) => {
    let s = T(x + 205, Y + 10, head, { size: 20, weight: 700, anchor: 'middle', fill: e });
    let cy = Y + 30;
    items.forEach(([k, t2, d], i) => { const c = card(x, cy, 410, { kicker: k || undefined, title: t2, body: d || undefined, tsize: 18, size: 16, fill: f, edge: e }); s += c.s; cy += c.h; if (i < items.length - 1) { s += arrow(x + 205, cy + 4, x + 205, cy + 30, { w: 3.5 }); cy += 34; } });
    return { s, h: cy - Y };
  };
  const A = col(30, ev.slice(0, 2), 'Australia', C.tealLight, C.tealDark), Bc = col(460, ev.slice(2), 'Canada', C.cream, C.olive);
  b += A.s + Bc.s;
  const Y2 = Y + Math.max(A.h, Bc.h) + 20;
  const r = row(Y2, [
    { kicker: 'RESULT', title: 'New money for some news organisations', edge: C.tealDark },
    { kicker: 'RESULT', kfill: C.rust, title: 'One platform’s response cut access to news on its service', edge: C.rust },
  ], { gap: 24, card: { tsize: 18 } });
  b += r.s + note(Y2 + r.h + 18, 'Supporters and critics still disagree on whether the approach works.').s;
  add('06-platforms-pay-for-news',
    svg(900, Y2 + r.h + 18 + 84, 'Making platforms pay for news', b),
    'Two columns. Australia passed its News Media Bargaining Code in 2021; Facebook briefly blocked news in February 2021, then signed deals, and in 2024 Meta said it would not renew them. Canada’s Online News Act received Royal Assent on 22 June 2023; Meta ended news on its platforms there in August 2023, while Google agreed C$100 million a year. Results: new money for some news organisations, but reduced access to news on one platform.',
    'A law can bring money to news and also cut access to it.',
    '## Courses of action');
}

// 07 Comparing other actions
add('07-media-actions',
  compose('Weighing four more courses of action', [
    (y) => table(y, ['Action', 'Strength', 'Weakness'], [
      ['Media literacy teaching', 'Builds lasting skills; does not depend on removing content', 'Slow; adults outside school are harder to reach'],
      ['Independent fact-checking', 'Corrects false claims quickly', 'Corrections may reach fewer people; some distrust fact-checkers'],
      ['Public funding for public service or local media', 'Keeps reporting going where the market will not pay', 'May weaken independence from government; costs taxpayers'],
      ['Community action', 'Cheap and local: newsletters, community radio, translated notices', 'Depends on volunteers; may not last'],
    ], [260, 300, 280], { size: 16 }),
    (y) => chips(y, ['How well would it work?', 'What would it cost?', 'Who gains?', 'Who loses?', 'Could it be done?'], { fill: C.cream, edge: C.olive, size: 16 }),
  ]),
  'A table of four actions with a strength and a weakness: media literacy teaching, independent fact-checking, public funding for public service or local media, and community action. Below, five questions to judge any action: how well it would work, cost, who gains, who loses and whether it could be done.',
  'Each action trades speed, reach, cost and independence differently.',
  '## Courses of action');

// 08 Team project ideas
add('08-media-team-projects',
  compose('Media Team Projects: issue, action, measure', [
    (y) => flowRows(y, ['Local issue', 'Action', 'Measure of success'], [
      ['Older residents miss council news posted only online', 'A printed monthly notice sheet at the library and pharmacy', 'Before-and-after survey of who knew about key decisions'],
      ['Families speaking another language miss school messages', 'A translated message board with volunteer translators', 'Replies to school events before and after'],
      ['Rumours spread in a community messaging group', 'A short “check before you share” session', 'A quiz before and after the session'],
    ], { size: 16 }),
  ]),
  'Three rows link a local media issue to an action and a measure: a printed notice sheet for residents who miss online council news, measured by a survey; a translated message board for families, measured by replies to school events; and a check-before-you-share session, measured by a quiz.',
  'Each project pairs a local communication gap with a measurable fix.',
  '## Individual Report and Team Project ideas');
