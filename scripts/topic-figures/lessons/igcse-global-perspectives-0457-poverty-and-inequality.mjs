import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-global-perspectives-0457-poverty-and-inequality';
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

// 01 Measuring poverty
{
  const Y = 120;
  const r1 = row(Y, [
    { kicker: 'ABSOLUTE POVERTY', title: 'Not enough to meet basic needs', body: 'Food, shelter, clean water.', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'RELATIVE POVERTY', title: 'Much less than most people in your society', body: 'UK: commonly household income below 60% of the median.', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 24, card: { tsize: 19, size: 16 } });
  let b = r1.s;
  const r2 = row(Y + r1.h + 16, [
    { kicker: 'INCOME', title: 'Money coming in over time', body: 'wages, benefits' },
    { kicker: 'WEALTH', title: 'What you own', body: 'savings, land, property' },
    { kicker: 'MULTIDIMENSIONAL', title: 'Several things at once', body: 'schooling, health, living standards (UNDP and Oxford MPI)' },
  ], { card: { tsize: 18, size: 15 } });
  b += r2.s;
  // Gini scale
  const gy = Y + r1.h + 16 + r2.h + 36, x0 = 100, x1 = 800;
  b += T(450, gy, 'Gini coefficient: income inequality in one number', { size: 19, weight: 700, anchor: 'middle' });
  b += `<defs><linearGradient id="gg" x1="0" x2="1"><stop offset="0" stop-color="${C.tealLight}"/><stop offset="1" stop-color="${C.mustard}"/></linearGradient></defs><rect x="${x0}" y="${gy + 20}" width="${x1 - x0}" height="34" rx="8" fill="url(#gg)" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += T(x0, gy + 80, '0', { size: 22, weight: 700, anchor: 'middle' }) + T(x1, gy + 80, '1', { size: 22, weight: 700, anchor: 'middle' });
  b += T(x0 - 10, gy + 104, 'everyone has the same', { size: 16, fill: C.muted }) + T(x1 + 10, gy + 104, 'one person has everything', { size: 16, fill: C.muted, anchor: 'end' });
  b += note(gy + 128, 'World Bank international poverty line: $3.00 a day from June 2025 (2021 prices, adjusted for living costs). Sources using different measures can disagree and both be accurate.').s;
  add('01-measuring-poverty',
    svg(900, gy + 128 + 112, 'Which poverty? Which measure?', b),
    'Absolute poverty (not meeting basic needs) is contrasted with relative poverty (much less than most people, such as below 60% of median income in the UK). Income, wealth and multidimensional measures are defined. A Gini scale runs from 0, everyone has the same, to 1, one person has everything. The World Bank line is $3.00 a day from June 2025.',
    'Sources using different measures can reach different conclusions and both be accurate.',
    '## Using the topic, not learning it');
}

// 02 Linking levels: rising food prices
add('02-food-prices-levels',
  compose('Moving one issue up and down the levels', [
    (y) => {
      const lv = [['GLOBAL', 'A global pattern of rising living costs', C.tealLight, C.tealDark, 840], ['NATIONAL', 'A national rise in food prices', C.teal, C.tealDark, 680], ['LOCAL', 'More families in one town use a food bank', C.cream, C.olive, 520]];
      let s = '', cy = y;
      lv.forEach(([k, t2, f, e, w], i) => { const c = card(450 - w / 2, cy, w, { kicker: k, kfill: e, title: t2, align: 'middle', fill: f, edge: e, tsize: 20 }); s += c.s; cy += c.h; if (i < 2) { s += arrow(450, cy + 4, 450, cy + 34, { w: 4 }); cy += 38; } });
      return { s, h: cy - y };
    },
    (y) => label(y, 'An issue that divides opinion at each level', { size: 19 }),
    (y) => row(y, [
      { kicker: 'GLOBAL', title: 'How should progress on SDG 1, “End poverty in all its forms everywhere”, be measured?', fill: C.tealLight, edge: C.tealDark },
      { kicker: 'NATIONAL', title: 'Should the poverty line be absolute or relative?', fill: C.teal, edge: C.tealDark },
      { kicker: 'LOCAL', kfill: C.olive, title: 'Is a food bank a solution, or a sign that something else has failed?', fill: C.cream, edge: C.olive },
    ], { card: { tsize: 17 } }),
  ]),
  'A global pattern of rising living costs, a national rise in food prices and more families in one town using a food bank, linked by arrows. Below, an issue at each level: measuring SDG 1, choosing an absolute or relative poverty line, and whether a food bank is a solution or a sign of failure.',
  'Strong answers show the links between levels, not just each level alone.',
  '## Issues at global, national and local levels');

// 03 Why perspectives differ on unconditional cash
add('03-unconditional-cash-perspectives',
  compose('Unconditional cash for low-income families?', [
    (y) => row(y, [
      { title: 'Values', body: 'fairness and need, or reward for effort and responsibility', align: 'middle', fill: C.cream, edge: C.olive },
      { title: 'Interests', body: 'landlord, tenant, taxpayer and charity gain or lose differently', align: 'middle', fill: C.cream, edge: C.olive },
      { title: 'Evidence and experience', body: 'lived experience or national data: each sees part', align: 'middle', fill: C.cream, edge: C.olive },
    ], { card: { tsize: 18, size: 15 } }),
    (y) => label(y, 'Why perspectives differ, applied to one issue', { size: 18, fill: C.muted }),
    (y) => hub(y, 'Give cash with no conditions?', [
      { kicker: 'A FAMILY RECEIVING SUPPORT', title: 'Cash lets them choose what they most need' },
      { kicker: 'A TAXPAYERS’ GROUP', title: 'Wants proof public money is used well' },
      { kicker: 'A CHARITY', title: 'May support cash, or argue services matter more' },
      { kicker: 'INTERNATIONAL ORGANISATION', title: 'Compares programmes across countries' },
    ], { r: 92, cardW: 290, csize: 18 }),
  ]),
  'Three reasons perspectives on poverty differ: values, interests, and evidence and experience. Applied to unconditional cash: a family values choice, a taxpayers’ group wants proof money is used well, a charity may back cash or services, and an international organisation compares programmes across countries.',
  'Judge each perspective by its evidence and whether its reasoning follows.',
  '## Perspectives and why they differ');

// 04 Poverty cycle
add('04-poverty-cycle',
  compose('How poverty can pass between generations', [
    (y) => cycle(y, [
      { title: 'Child in a low-income family', fill: C.cream, edge: C.olive },
      { title: 'Misses school', body: 'because the family needs them to work' },
      { title: 'Leaves with fewer qualifications' },
      { title: 'Finds only low-paid work as an adult' },
      { title: 'Their own children face the same pressure', fill: C.tealLight, edge: C.tealDark },
    ], { rx: 300, ry: 200, cardW: 240, center: 'a cycle of cause and consequence', da: 0.4 }),
    (y) => row(y, [
      { kicker: 'SHORT TERM', kfill: C.olive, title: 'A food bank meets hunger', body: 'a consequence', fill: C.cream, edge: C.olive },
      { kicker: 'LONG TERM', title: 'It does not change low income', body: 'a cause', fill: C.tealLight, edge: C.tealDark },
    ], { gap: 24, card: { tsize: 18, size: 16 } }),
  ]),
  'A five-step cycle: a child in a low-income family misses school because the family needs them to work, leaves with fewer qualifications, finds only low-paid work as an adult, and their own children face the same pressure. Below, a food bank meets a short-term consequence, hunger, but does not change a long-term cause, low income.',
  'Show each link in the cycle with “because” or “this leads to”.',
  '## Causes and consequences');

// 05 Numbers traps
{
  const Y = 120;
  let b = '';
  // mean vs median
  b += panel(30, Y, 410, 250) + T(50, Y + 34, 'Average or median?', { size: 19, weight: 700 });
  const hs = [30, 34, 38, 42, 46, 150];
  hs.forEach((h, i) => { b += `<rect x="${70 + i * 55}" y="${Y + 200 - h}" width="40" height="${h}" fill="${i === 5 ? C.mustard : C.teal}" stroke="${C.ink}" stroke-width="2"/>`; });
  b += `<line x1="55" y1="${Y + 200 - 57}" x2="400" y2="${Y + 200 - 57}" stroke="${C.rust}" stroke-width="3" stroke-dasharray="8 6"/>` + T(400, Y + 200 - 64, 'mean', { size: 15, weight: 700, anchor: 'end', fill: C.rust });
  b += `<line x1="55" y1="${Y + 200 - 40}" x2="400" y2="${Y + 200 - 40}" stroke="${C.tealDark}" stroke-width="3"/>` + T(400, Y + 200 - 26, 'median', { size: 15, weight: 700, anchor: 'end', fill: C.tealDark });
  b += T(235, Y + 232, 'A few very high earners pull the mean up', { size: 15, anchor: 'middle', fill: C.muted });
  // share vs amount
  b += panel(460, Y, 410, 250) + T(480, Y + 34, 'Share or amount?', { size: 19, weight: 700 });
  const pie = (cx, cy, r, frac, lab) => { const a = 2 * Math.PI * frac, x = cx + r * Math.sin(a), yv = cy - r * Math.cos(a); return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/><path d="M${cx},${cy} L${cx},${cy - r} A${r},${r} 0 0 1 ${x},${yv} Z" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` + T(cx, cy + r + 22, lab, { size: 15, anchor: 'middle', fill: C.muted }); };
  b += pie(560, Y + 125, 50, 0.2, 'before') + pie(760, Y + 125, 70, 0.143, 'economy grows');
  b += arrow(620, Y + 125, 680, Y + 125, { w: 3 });
  b += T(665, Y + 232, 'Poorest group’s slice: same size, smaller share', { size: 15, anchor: 'middle', fill: C.muted });
  b += row(Y + 270, [
    { title: 'Percentage or points?', body: '50% to 70% is +20 percentage points, but a 40% increase.', edge: C.rust },
    { title: 'Who was asked?', body: 'People surveyed at a food bank are not a fair sample of a whole town.', edge: C.rust },
    { title: 'Which measure?', body: 'Absolute or relative? Income or wealth?', edge: C.rust },
  ], { card: { tsize: 18, size: 15 } }).s;
  b += note(Y + 420, 'Loaded words such as “scroungers” or “struggling heroes” carry values: point to the word and explain its effect.', { title: 'Language' }).s;
  add('05-numbers-in-poverty-sources',
    svg(900, Y + 420 + 112, 'Five questions for poverty numbers', b),
    'A bar chart shows one very high earner pulling the mean above the median. Two pie charts show the poorest group’s slice staying the same size while the economy grows, so its share falls. Further checks: 50% to 70% is 20 percentage points but a 40% increase; a food bank sample is not a whole town; and which measure is used. Loaded language carries values.',
    'Check the measure, the average, the share, the percentage and the sample before trusting a number.',
    '## Judging sources and evidence');
}

// 06 Cash and finance programmes
add('06-cash-programmes',
  compose('Real actions on poverty, and their limits', [
    (y) => table(y, ['Action', 'Strength', 'Limitation'], [
      ['Conditional cash: Bolsa Família, Brazil (2003)', 'Links short-term help to long-term causes such as low schooling', 'Conditions can exclude families; cash does not improve school quality'],
      ['Unconditional cash: Benazir Income Support Programme, Pakistan (2008)', 'Families choose; paying women may give them more say at home', 'Depends on accurate data on who qualifies'],
      ['Basic income trial: Finland (2017–2018)', 'Participants reported better wellbeing', 'Small effects on employment; one group for two years may not scale'],
      ['Microfinance: Grameen Bank (Nobel Peace Prize 2006)', 'Loans for people without access to banks', 'Randomised evaluations generally find modest average income effects'],
    ], [290, 280, 270], { size: 16 }),
    (y) => chips(y, ['Effective: reaches the cause?', 'Affordable?', 'Fair: who gains, who loses?', 'Sustainable?'], { fill: C.cream, edge: C.olive, size: 16 }),
  ]),
  'A table of four actions: conditional cash through Brazil’s Bolsa Família from 2003; unconditional cash through Pakistan’s Benazir Income Support Programme from 2008; Finland’s 2017 to 2018 basic income trial; and microfinance, for which the Grameen Bank shared the 2006 Nobel Peace Prize. Each has a strength and limitation, judged by effectiveness, affordability, fairness and sustainability.',
  'Even well-known programmes need evaluating against the same four tests.',
  '## Courses of action and their effects');

// 07 Fuel poverty worked example
{
  const Y = 120;
  let b = card(30, Y - 6, 840, { kicker: 'INVENTED SOURCE', title: '26 of 40 households asked at a community centre (65%) cut back on heating. “Most families in the town are in fuel poverty.”', tsize: 18, fill: C.panel, edge: C.ink }).s;
  const cy = Y + 270, cx = 230;
  b += `<circle cx="${cx}" cy="${cy}" r="140" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3"/>` + T(cx, cy - 100, 'All households', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(cx, cy - 80, 'in the town', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += `<circle cx="${cx}" cy="${cy + 40}" r="80" fill="${C.cream}" stroke="${C.olive}" stroke-width="3"/>` + T(cx, cy + 10, 'Community centre', { size: 15, weight: 700, anchor: 'middle', fill: C.olive }) + T(cx, cy + 28, 'users', { size: 15, weight: 700, anchor: 'middle', fill: C.olive });
  b += `<circle cx="${cx}" cy="${cy + 75}" r="34" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + T(cx, cy + 82, '40', { size: 19, weight: 700, anchor: 'middle' });
  b += card(400, Y + 120, 470, { kicker: 'SUPPORTS', title: 'A real problem for some households', fill: C.tealLight, edge: C.tealDark, tsize: 18 }).s;
  b += card(400, Y + 215, 470, { kicker: 'WEAKNESS: SAMPLE', kfill: C.rust, title: 'Only 40, at a community centre', body: 'Users may already be more likely to need help, so struggling families are over-represented.', edge: C.rust, tsize: 18, size: 15 }).s;
  b += card(400, Y + 345, 470, { kicker: 'WEAKNESS: DEFINITION', kfill: C.rust, title: '“Cutting back” is not fuel poverty', body: 'That needs data on income and energy costs.', edge: C.rust, tsize: 18, size: 15 }).s;
  b += note(Y + 460, 'Supports “some households struggle with fuel costs”, not “most families”. A random survey of homes across the town, with a clear definition, would test it better.', { title: 'How far? A judgement' }).s;
  add('07-fuel-poverty-paragraph',
    svg(900, Y + 460 + 112, 'How far does the evidence support the claim?', b),
    'Nested circles show 40 surveyed households inside community centre users inside all town households. The evidence supports a real problem for some households, but the small, skewed sample and the gap between cutting back on heating and fuel poverty mean it cannot support the claim about most families. A random town-wide survey with a clear definition would test it better.',
    'Answer “how far” with a judgement on what the evidence does and does not support.',
    '## Worked example: an exam-style paragraph');
}
