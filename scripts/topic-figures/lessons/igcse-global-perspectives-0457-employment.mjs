import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-global-perspectives-0457-employment';
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

// 01 Informal economy estimate
{
  const Y = 120;
  let b = '';
  for (let i = 0; i < 100; i++) { const r = Math.floor(i / 10), c = i % 10; b += `<rect x="${50 + c * 34}" y="${Y + r * 34}" width="28" height="28" rx="5" fill="${i < 61 ? C.mustard : C.panel}" stroke="${C.ink}" stroke-width="1.8"/>`; }
  b += T(215, Y + 365, 'Each square = 1% of the world’s', { size: 15, anchor: 'middle', fill: C.muted }) + T(215, Y + 384, 'employed population', { size: 15, anchor: 'middle', fill: C.muted });
  const ilo = card(430, Y, 440, { kicker: 'ILO, 2018', title: 'More than 60% work in the informal economy', body: 'About two billion people, with no legal contract, social protection or regulation.', fill: C.cream, edge: C.olive, kfill: C.olive, tsize: 21 });
  b += ilo.s + card(430, Y + ilo.h + 14, 440, { kicker: 'EVALUATION', kfill: C.rust, title: 'A careful estimate, not an exact count', body: ['Credible: a UN agency with data from many countries.', 'But informal work is unrecorded by definition, and surveys and definitions differ between countries.'], bullets: true, edge: C.rust, tsize: 18, size: 16 }).s;
  b += card(30, Y + 410, 840, { kicker: 'SDG 8 (2015)', title: '“Full and productive employment and decent work for all”', body: 'Decent work (ILO): productive, fairly paid, safe and secure.', tsize: 19, fill: C.tealLight, edge: C.tealDark }).s;
  add('01-informal-economy',
    svg(900, Y + 410 + 140, 'How much of the world works informally?', b),
    'A 100-square grid with just over 60 squares shaded shows the ILO’s 2018 estimate that more than 60% of the world’s employed population, about two billion people, work in the informal economy. The figure is credible but an estimate, because informal work is unrecorded. SDG 8 aims for decent work for all.',
    'A large share of the world’s workers have no contract or protection, but the figure is an estimate.',
    '## Employment as a source of issues');
}

// 02 Stakeholders
add('02-employment-stakeholders',
  compose('Who cares about what in employment, and why', [
    (y) => hub(y, 'An employment issue', [
      { title: 'Workers', body: 'Pay, security, safety, hours: their income depends on it.' },
      { title: 'Employers', body: 'Costs, productivity, flexibility: profit and survival.' },
      { title: 'Trade unions', body: 'Members’ pay and protection: their role is to represent members.' },
      { title: 'Governments', body: 'Jobs, tax, growth, votes: they answer to voters.' },
      { title: 'Consumers', body: 'Low prices, fast service: they gain from cheap goods.' },
      { title: 'International bodies', body: 'Standards across countries: they set or monitor rules.' },
    ], { r: 95, cardW: 280 }),
  ]),
  'Six groups around an employment issue, each with its concern and reason: workers (pay and security), employers (costs and flexibility), trade unions (members’ protection), governments (jobs, tax, votes), consumers (low prices) and international bodies (standards across countries).',
  'Each group’s concern follows from what it stands to gain or lose.',
  '## Perspectives: who sees employment issues differently, and why');

// 03 Uber v Aslam and the flexibility-security tension
add('03-uber-flexibility-security',
  compose('Uber v Aslam: flexibility versus security', [
    (y) => row(y, [
      { kicker: 'FEBRUARY 2021', title: 'UK Supreme Court: Uber drivers are “workers”, not self-employed', body: 'Rights such as the minimum wage and holiday pay.', fill: C.tealLight, edge: C.tealDark },
      { kicker: 'MARCH 2021', title: 'Uber: UK drivers get minimum wage, holiday pay and pensions', fill: C.tealLight, edge: C.tealDark },
    ], { arrows: true, card: { tsize: 18, size: 16 } }),
    (y) => spectrum(y, 'Flexibility', 'Security', [
      { pos: 0.05, label: 'Uber’s argument', note: 'Drivers value choosing when to work.', fill: C.cream },
      { pos: 0.5, label: 'A driver', note: 'Can want both at once.', fill: C.mustard },
      { pos: 0.95, label: 'Drivers who brought the case', note: 'Wanted security and fair pay.', fill: C.teal },
    ], { labelW: 240 }),
    (y) => note(y, 'Critics said the minimum wage would apply only once a trip was accepted, not while drivers waited logged in.', { title: 'A remaining dispute' }),
  ]),
  'Timeline: in February 2021 the UK Supreme Court ruled Uber drivers are workers, and in March 2021 Uber gave UK drivers the minimum wage, holiday pay and pensions. A spectrum from flexibility to security places Uber’s argument at one end, the drivers who brought the case at the other, and many drivers wanting both in the middle.',
  'Perspectives are not simply for or against: one driver can want flexibility and security.',
  '## Perspectives: who sees employment issues differently, and why');

// 04 Youth unemployment chain across levels
add('04-youth-unemployment-chain',
  compose('Youth unemployment: causes and their spread', [
    (y) => row(y, [
      { kicker: 'CAUSE', kfill: C.olive, title: 'Automation in warehouses cuts demand for manual packers', fill: C.cream, edge: C.olive },
      { kicker: 'CAUSE', kfill: C.olive, title: 'School leavers lack the technical skills new jobs need', fill: C.cream, edge: C.olive },
    ], { gap: 24, card: { tsize: 18 } }),
    (y) => ({ s: arrow(235, y - 10, 420, y + 28, { w: 3.5 }) + arrow(665, y - 10, 480, y + 28, { w: 3.5 }), h: 30 }),
    (y) => card(260, y, 380, { title: 'Young people out of work', align: 'middle', fill: C.mustard, edge: C.ink, tsize: 20 }),
    (y) => ({ s: arrow(450, y - 14, 450, y + 18, { w: 3.5 }), h: 18 }),
    (y) => ladder(y, [
      { tag: 'Personal', text: 'Lost income and confidence; some move into informal work.', fill: C.cream },
      { tag: 'Local', text: 'Shops near the closed warehouse lose trade; young people move away.', fill: C.tealLight },
      { tag: 'National', text: 'Lower tax revenue and higher welfare spending.', fill: C.teal },
      { tag: 'Global', text: 'Pressure to migrate; firms compete across borders.', fill: C.tealLight },
    ], { gap: 10 }),
  ]),
  'Two causes, warehouse automation and a skills gap among school leavers, lead to young people out of work. Consequences follow at four levels: personal loss of income and confidence, local loss of trade and out-migration, national tax and welfare effects, and global pressure to migrate and cross-border competition.',
  'One local cause can spread consequences up to the national and global level.',
  '## Causes and consequences');

// 05 Correlation in Brennock
{
  const Y = 120, H = 200;
  const chart = (x, title, a, b2, max, f) => {
    const sy = (v) => Y + 60 + H - (v / max) * H;
    let s = panel(x, Y, 400, H + 130) + T(x + 200, Y + 38, title, { size: 19, weight: 700, anchor: 'middle' });
    s += `<line x1="${x + 60}" y1="${Y + 60 + H}" x2="${x + 360}" y2="${Y + 60 + H}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += `<line x1="${x + 110}" y1="${sy(a)}" x2="${x + 290}" y2="${sy(b2)}" stroke="${f}" stroke-width="6"/>`;
    s += `<circle cx="${x + 110}" cy="${sy(a)}" r="10" fill="${C.panel}" stroke="${f}" stroke-width="4"/><circle cx="${x + 290}" cy="${sy(b2)}" r="10" fill="${f}" stroke="${C.ink}" stroke-width="2"/>`;
    s += T(x + 110, sy(a) - 18, a + '%', { size: 21, weight: 700, anchor: 'middle' }) + T(x + 290, sy(b2) - 18, b2 + '%', { size: 21, weight: 700, anchor: 'middle' });
    s += T(x + 110, Y + 60 + H + 28, 'earlier', { size: 16, anchor: 'middle', fill: C.muted }) + T(x + 290, Y + 60 + H + 28, 'later', { size: 16, anchor: 'middle', fill: C.muted });
    return s;
  };
  let b = chart(30, 'Youth unemployment', '9.0', '13.5', 16, C.rust) + chart(470, 'Informal share of jobs', 30, 37, 45, C.tealDark);
  b += card(30, Y + H + 150, 840, { kicker: 'FICTIONAL TOWN OF BRENNOCK', title: 'Both rose over the same period: a correlation', body: 'It suggests some young people without contracts take unregistered work, but it does not prove one caused the other.', fill: C.cream, edge: C.olive, kfill: C.olive, tsize: 19 }).s;
  add('05-brennock-correlation',
    svg(900, Y + H + 150 + 150, 'Rising together is not proof of cause', b),
    'Two line charts for the fictional town of Brennock: youth unemployment rose from 9.0% to 13.5% and the informal share of jobs rose from 30% to 37% over the same period. Both rising suggests a link but does not prove that one caused the other.',
    'Two figures moving together show correlation, not causation.',
    '## Causes and consequences');
}

// 06 Automation predictions and method
{
  const Y = 120, base = Y + 300, sy = (v) => base - (v / 50) * 260;
  let b = `<line x1="60" y1="${base}" x2="840" y2="${base}" stroke="${C.ink}" stroke-width="3"/>`;
  const bars = [[150, 47, C.cream, C.olive, 'Frey and Osborne, Oxford (2013)', 'US jobs at high risk of computerisation', 'Judged whole occupations'], [530, 14, C.teal, C.tealDark, 'Nedelkoska and Quintini, OECD (2018)', 'jobs across OECD countries highly automatable', 'Judged separate tasks within jobs']];
  bars.forEach(([x, v, f, e, who, what, how]) => {
    b += `<rect x="${x}" y="${sy(v)}" width="220" height="${base - sy(v)}" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x + 110, sy(v) - 14, 'about ' + v + '%', { size: 26, weight: 700, anchor: 'middle' });
    b += T(x + 110, base + 30, who, { size: 17, weight: 700, anchor: 'middle' }) + T(x + 110, base + 54, what, { size: 15, anchor: 'middle', fill: C.muted });
    const pw = cw(16, 700) * how.length + 30;
    b += `<rect x="${x + 110 - pw / 2}" y="${base + 70}" width="${pw}" height="40" rx="20" fill="${C.panel}" stroke="${e}" stroke-width="2.5"/>` + T(x + 110, base + 96, how, { size: 16, weight: 700, anchor: 'middle', fill: e });
  });
  b += note(base + 132, 'Both are predictions, not facts. The gap comes mainly from method, so check how each figure was produced before deciding which to trust.').s;
  add('06-automation-predictions',
    svg(900, base + 132 + 110, 'Why two automation forecasts disagree', b),
    'Two bars: Frey and Osborne (Oxford, 2013) estimated about 47% of US jobs at high risk of computerisation by judging whole occupations; Nedelkoska and Quintini (OECD, 2018) estimated about 14% of jobs across OECD countries as highly automatable by judging tasks within jobs.',
    'Different methods produce very different predictions.',
    '## Judging sources and evidence');
}

// 07 Four-day week pilot
{
  const Y = 120;
  let b = '';
  for (let i = 0; i < 61; i++) { const r = Math.floor(i / 16), c = i % 16; b += `<circle cx="${60 + c * 30}" cy="${Y + 20 + r * 30}" r="11" fill="${i < 56 ? C.teal : C.panel}" stroke="${C.ink}" stroke-width="2"/>`; }
  const pc = card(560, Y - 6, 310, { kicker: 'UK PILOT, JUNE TO DECEMBER 2022', title: '56 of 61 companies said they would continue', body: 'About 2,900 staff; four days, no loss of pay.', tsize: 18, size: 15, fill: C.tealLight, edge: C.tealDark });
  b += pc.s;
  const Y2 = Y + pc.h + 14;
  b += row(Y2, [
    { kicker: 'STRENGTHS', title: 'Worth taking seriously', body: ['A real trial', 'A clear time period', 'Academic researchers involved (Cambridge, Boston College)'], bullets: true, edge: C.tealDark },
    { kicker: 'LIMITATIONS', kfill: C.rust, title: 'Limits on what it shows', body: ['Companies volunteered', 'Some organisers campaign for a four-day week', 'Six months may be too short', 'Mostly small firms: may not generalise to factories or hospitals'], bullets: true, edge: C.rust },
  ], { gap: 24, card: { tsize: 19, size: 16 } }).s;
  add('07-four-day-week-pilot',
    svg(900, Y2 + 260, 'Judging the UK four-day week pilot', b),
    'Sixty-one dots, 56 shaded, show that 56 of 61 UK companies in the June to December 2022 four-day week pilot, with about 2,900 staff, said they would continue. Strengths: a real trial, a clear period and academic researchers. Limitations: volunteer companies, campaigning organisers, a short period and mostly small firms.',
    'Strong-looking results still need checking for who took part and for how long.',
    '## Judging sources and evidence');
}

// 08 Actions table
add('08-employment-actions',
  compose('Weighing actions on employment', [
    (y) => table(y, ['Action', 'Possible benefit', 'Possible drawback'], [
      ['Apprenticeships and retraining', 'Tackles the skills cause', 'Slow; needs employers to take part'],
      ['Wage subsidies for hiring young people', 'Quick increase in hiring', 'Costly; firms may replace older staff'],
      ['Minimum wage rise', 'Raises pay for the lowest paid', 'Debated effect on hiring'],
      ['Rights for gig workers', 'Security and sick pay', 'Higher costs; less flexibility'],
      ['Shorter working week', 'Wellbeing; may share out work', 'Not suitable for every sector'],
    ], [300, 270, 270], { size: 16 }),
    (y) => note(y, 'Retraining tackles a cause, not a symptom, and is more sustainable if local employers help pay. It is slow, so combine it with short-term support for people unemployed now.', { title: 'A worked judgement' }),
  ]),
  'A table of five employment actions with a benefit and drawback each: apprenticeships and retraining, wage subsidies, a minimum wage rise, rights for gig workers and a shorter working week. A worked judgement prefers retraining because it tackles a cause, combined with short-term support.',
  'The strongest action tackles a cause and lasts, but may need short-term help alongside it.',
  '## Courses of action and their effects');
