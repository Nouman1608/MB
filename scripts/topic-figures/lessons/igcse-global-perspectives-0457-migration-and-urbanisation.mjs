import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-global-perspectives-0457-migration-and-urbanisation';
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

// 01 Four levels of migration
add('01-migration-levels',
  compose('Migration and urbanisation at four levels', [
    (y) => rings(y, [
      { name: 'Personal', text: 'A family member who moved for work, or a classmate who arrived recently.' },
      { name: 'Local', text: 'Rising rents, crowded schools, new businesses, new languages, pressure on green space.' },
      { name: 'National', text: 'Who may enter, work and settle; planning for growing cities. China’s hukou links some services to registered residence.' },
      { name: 'Global', text: '55% urban in 2018, projected 68% by 2050 (UN); about 304 million international migrants in mid-2024 (UN DESA).' },
    ], { R: 185 }),
    (y) => note(y, 'Ask how a fact at one level plays out at another: a national rule on work permits becomes local when a factory cannot fill shifts.', { title: 'Skill move' }),
  ]),
  'Four rings from personal to global: a family member who moved for work; local rents, schools and languages; national rules on entry and city planning, such as China’s hukou system; and global figures of 55% urban in 2018, projected 68% by 2050, and about 304 million international migrants in mid-2024.',
  'Link levels: a national rule becomes a local issue when it changes something on the ground.',
  '## Issues at global, national and local level');

// 02 Push and pull, and key terms
{
  const Y = 120;
  let b = card(30, Y, 240, { title: 'Place of origin', body: 'push factors drive people away', align: 'middle', fill: C.cream, edge: C.olive, tsize: 20, minH: 130, vcenter: true }).s;
  b += card(630, Y, 240, { title: 'Destination', body: 'pull factors attract people', align: 'middle', fill: C.tealLight, edge: C.tealDark, tsize: 20, minH: 130, vcenter: true }).s;
  b += arrow(280, Y + 45, 620, Y + 45, { w: 6 }) + T(450, Y + 32, 'people move', { size: 18, weight: 700, anchor: 'middle' });
  b += arrow(620, Y + 95, 280, Y + 95, { w: 4, color: C.olive, marker: 'ahO', dash: '10 7' }) + T(450, Y + 122, 'remittances: money sent home', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  b += T(450, Y + 175, 'internal (within a country) or international (across borders)', { size: 17, anchor: 'middle', fill: C.muted, italic: true });
  b += row(Y + 200, [
    { kicker: 'URBANISATION', title: 'A rising share of people living in towns and cities', fill: C.panel },
    { kicker: 'INFORMAL SETTLEMENT', title: 'Housing without planning permission or legal title, often lacking services', fill: C.panel },
    { kicker: 'BRAIN DRAIN', kfill: C.rust, title: 'Loss of skilled workers when they emigrate', edge: C.rust },
  ], { card: { tsize: 17 } }).s;
  add('02-push-pull-terms',
    svg(900, Y + 200 + 150, 'Push, pull and the flows between places', b),
    'Push factors drive people away from a place of origin and pull factors attract them to a destination; people move one way and remittances flow back. Migration can be internal or international. Below, definitions of urbanisation, informal settlement and brain drain.',
    'People flow one way, money often flows back.',
    '## Issues at global, national and local level');
}

// 03 Perspectives table and no single global view
add('03-migration-perspectives',
  compose('Who thinks what about migration, and why', [
    (y) => table(y, ['Group', 'A perspective they might hold', 'Why'], [
      ['A rural family', 'Moving to the city offers better jobs and schools', 'Low farm incomes, few local services'],
      ['Long-standing city residents', 'Rapid growth strains housing and transport', 'Rents rise and commutes lengthen'],
      ['Employers', 'Migrant workers fill labour shortages', 'Some sectors struggle to recruit'],
      ['Origin-country governments', 'Remittances in, but skills lost', 'Both effects show in national data'],
      ['Destination-country governments', 'From welcoming to restrictive', 'Different priorities: economy, security, culture, services'],
      ['International bodies', 'Migration should be safe and well managed', 'Global Compact adopted 2018; a few states voted against or abstained'],
    ], [220, 330, 290], { size: 16, zebra: true }),
    (y) => note(y, 'You can explain why a long-standing resident fears change without endorsing the fear, and why a migrant moved without ignoring pressures on the place.', { title: 'Empathy without agreement' }),
  ]),
  'A table of six groups with a perspective and a reason: a rural family, long-standing city residents, employers, origin-country governments, destination-country governments and international bodies, noting that some states voted against or abstained on the 2018 Global Compact. Empathy does not require agreement.',
  'Even at the global level there is no single perspective on migration.',
  '## Perspectives on migration and urbanisation');

// 04 Cause chain and consequence chain
add('04-drought-remittance-chains',
  compose('Two chains: why people move, and what follows', [
    (y) => label(y, 'Causes', { size: 19, fill: C.olive }),
    (y) => row(y, [
      { title: 'Drought reduces harvests', align: 'middle', fill: C.cream, edge: C.olive },
      { title: 'Farm incomes fall', align: 'middle' },
      { title: 'Young adults move to the city for work', align: 'middle' },
      { title: 'Population grows faster than housing', align: 'middle' },
      { title: 'Informal settlements expand', align: 'middle', fill: C.tealLight, edge: C.tealDark },
    ], { arrows: true, gap: 30, card: { tsize: 15, pad: 10 } }),
    (y) => label(y, 'Consequences', { size: 19, fill: C.tealDark }),
    (y) => row(y, [
      { title: 'Remittances rise', align: 'middle', fill: C.cream, edge: C.olive },
      { title: 'Families pay school fees', align: 'middle' },
      { title: 'More children stay in school', align: 'middle', fill: C.tealLight, edge: C.tealDark },
    ], { arrows: true, gap: 40, card: { tsize: 17 } }),
    (y) => card(30, y, 840, { kicker: 'BUT', kfill: C.rust, title: 'Villages may lose working-age adults, leaving older people to farm', edge: C.rust, tsize: 18 }),
    (y) => note(y, 'Separate causes at personal, national and global levels; say who gains and who loses; avoid single-cause stories.'),
  ]),
  'A cause chain: drought reduces harvests, farm incomes fall, young adults move to the city, population grows faster than housing, and informal settlements expand. A consequence chain: remittances rise, families pay school fees, more children stay in school, but villages may lose working-age adults.',
  'Chains, not lists, and say who gains and who loses at each step.',
  '## Causes and consequences');

// 05 Corvanna housing evidence
{
  const Y = 120;
  let b = card(30, Y - 6, 840, { kicker: 'FICTIONAL CITY OF CORVANNA', title: 'Claim: newcomers make it harder to find housing', tsize: 20, fill: C.panel, edge: C.ink }).s;
  const ey = Y + 100;
  b += card(30, ey, 410, { kicker: 'EVIDENCE 1: STREET SURVEY', title: '72% of 400 residents (288) agreed', body: ['Evidence of opinion, not of cause', 'One central district: may not represent the city'], bullets: true, edge: C.rust, kfill: C.rust, tsize: 18, size: 16, minH: 330 }).s;
  b += `<rect x="50" y="${ey + 210}" width="${370 * 0.72}" height="46" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/><rect x="${50 + 370 * 0.72}" y="${ey + 210}" width="${370 * 0.28}" height="46" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + T(50 + 185 * 0.72, ey + 240, '288 agreed', { size: 17, weight: 700, anchor: 'middle' }) + T(50 + 370 * 0.86, ey + 240, '112', { size: 16, anchor: 'middle' }) + T(50, ey + 290, 'what residents believe, not why', { size: 16, fill: C.rust, weight: 600 }) + T(50, ey + 312, 'housing is scarce', { size: 16, fill: C.rust, weight: 600 });
  // households vs homes bars
  const bx = 460;
  b += panel(bx, ey, 410, 330) + T(bx + 20, ey + 34, 'EVIDENCE 2: OFFICIAL DATA', { size: 15, weight: 700, fill: C.tealDark }) + T(bx + 20, ey + 60, 'Last five years', { size: 18, weight: 700 });
  const sc = (v) => (v / 21000) * 330;
  b += `<rect x="${bx + 30}" y="${ey + 84}" width="${sc(21000)}" height="44" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` + T(bx + 40, ey + 113, '21,000 new households', { size: 17, weight: 700 });
  b += `<rect x="${bx + 30}" y="${ey + 140}" width="${sc(9000)}" height="44" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + T(bx + 40 + sc(9000), ey + 169, '9,000 new homes', { size: 17, weight: 700 });
  b += `<line x1="${bx + 30 + sc(9000)}" y1="${ey + 196}" x2="${bx + 30 + sc(21000)}" y2="${ey + 196}" stroke="${C.rust}" stroke-width="3" marker-start="url(#ahR)" marker-end="url(#ahR)"/>` + T(bx + 30 + (sc(9000) + sc(21000)) / 2, ey + 220, 'gap: 12,000', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  b += para(bx + 20, ey + 252, 'Stronger: official and measurable. But slow building could explain the gap as much as arrivals.', 370, { size: 16, fill: C.muted }).s;
  b += card(30, ey + 350, 840, { kicker: 'TO TEST THE CLAIM', title: 'Find the share of new households formed by migrants, and the building rate in earlier years', fill: C.tealLight, edge: C.tealDark, tsize: 18 }).s;
  b += note(ey + 470, 'Supports “housing is scarce”; does not establish that newcomers are the main cause.', { title: 'Judgement' }).s;
  add('05-corvanna-housing',
    svg(900, ey + 470 + 112, 'Is housing scarce, and why?', b),
    'Evidence for the fictional city of Corvanna: a street survey where 288 of 400 residents (72%) agreed newcomers make housing harder to find, which shows opinion from one district; and official data showing 21,000 new households but only 9,000 new homes in five years, a gap of 12,000 that slow building could explain. Testing needs the migrant share of new households and earlier building rates.',
    'The evidence shows housing is scarce, not that newcomers are the main cause.',
    '## Judging sources and evidence');
}

// 06 Upgrade vs relocate
add('06-upgrade-vs-relocate',
  compose('An informal settlement: upgrade or relocate?', [
    (y) => row(y, [
      { kicker: 'UPGRADE IN PLACE', title: 'Water, drains, legal title', body: ['Tackles unsafe water and flooding', 'Keeps residents near market jobs', 'Often cheaper than rebuilding', 'Can be slow; landowners may object'], bullets: true, fill: C.tealLight, edge: C.tealDark },
      { kicker: 'RELOCATE', kfill: C.olive, title: 'New planned housing', body: ['Safer, planned homes', 'New site may be far from work', 'Social ties broken', 'Residents may return near the centre: the problem moves'], bullets: true, fill: C.cream, edge: C.olive },
    ], { gap: 24, card: { tsize: 19, size: 16 } }),
    (y) => card(160, y, 580, { kicker: 'CONDITION', kfill: C.rust, title: 'Upgrading is stronger only if land rights can be secured first', align: 'middle', edge: C.rust, tsize: 19 }),
    (y) => chips(y, ['Effectiveness', 'Feasibility', 'Sustainability', 'Fairness'], { fill: C.cream, edge: C.olive }),
    (y) => ({ s: T(450, y + 4, 'A conditional ending (“only if…”) is a sign of evaluation.', { size: 17, anchor: 'middle', fill: C.muted }), h: 8 }),
  ]),
  'Two options for an informal settlement. Upgrading in place tackles unsafe water and flooding and keeps residents near jobs but can be slow and face landowner objections. Relocating gives safer homes but may be far from work and break social ties, so the problem may move. Judgement: upgrading is stronger only if land rights are secured first.',
  'A strong judgement names the condition under which it holds.',
  '## Courses of action');

// 07 Actions table
add('07-migration-actions',
  compose('Three more actions and their trade-offs', [
    (y) => table(y, ['Action', 'Possible benefits', 'Possible drawbacks'], [
      ['Investing in rural jobs and services', 'Reduces pressure to move', 'Long-term; may not stop moves for family or education'],
      ['Language and job-skills programmes for new arrivals', 'Faster integration; employers gain', 'Needs funding and staff'],
      ['Ethical recruitment rules for skilled workers', 'Reduces brain drain from poorer countries', 'Voluntary codes, such as the WHO Global Code (2010), are not binding'],
    ], [280, 260, 300], { size: 17 }),
  ]),
  'A table of three actions with benefits and drawbacks: investing in rural jobs and services, language and job-skills programmes for new arrivals, and ethical recruitment rules such as the non-binding 2010 WHO Global Code of Practice on recruiting health personnel.',
  'Every migration action has a trade-off to weigh.',
  '## Courses of action');
