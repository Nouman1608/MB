import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-global-perspectives-0457-development-trade-and-aid';
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

// 01 Kinds of aid and trade tools
{
  const Y = 110;
  const aidC = card(300, Y, 300, { title: 'Aid', body: 'money, goods or expertise given or lent to another country', align: 'middle', fill: C.mustard, edge: C.ink, bfill: C.ink, tsize: 24, size: 15 });
  let b = aidC.s;
  b += path(`M450,${Y + aidC.h} L450,${Y + 140} M165,${Y + 140} L735,${Y + 140} M165,${Y + 140} L165,${Y + 160} M450,${Y + 140} L450,${Y + 160} M735,${Y + 140} L735,${Y + 160}`, { w: 3 });
  const groups = [
    [30, 'BY ROUTE', [['Bilateral', 'one government to another'], ['Multilateral', 'through international organisations']]],
    [315, 'BY PURPOSE', [['Humanitarian', 'responds to emergencies'], ['Development', 'supports long-term change']]],
    [600, 'BY CONDITIONS', [['Tied aid', 'receiver must buy goods or services from the donor'], ['Untied aid', 'no such condition']]],
  ];
  groups.forEach(([x, k, items]) => {
    b += T(x + 135, Y + 186, k, { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
    items.forEach(([a, d], i) => { b += card(x, Y + 200 + i * 116, 270, { title: a, body: d, tsize: 19, size: 16, fill: i ? C.panel : C.tealLight, edge: C.tealDark, minH: 104 }).s; });
  });
  const Y2 = Y + 200 + 2 * 116 + 14;
  b += T(450, Y2 + 18, 'Trade tools', { size: 20, weight: 700, anchor: 'middle' });
  b += row(Y2 + 34, [
    { title: 'Tariff', body: 'a tax on imports', align: 'middle', fill: C.cream, edge: C.olive },
    { title: 'Quota', body: 'a limit on the amount imported', align: 'middle', fill: C.cream, edge: C.olive },
    { title: 'Fair trade', body: 'certification for a fairer price and conditions', align: 'middle', fill: C.cream, edge: C.olive },
  ], { card: { tsize: 20, size: 16 } }).s;
  add('01-kinds-of-aid',
    svg(900, Y2 + 34 + 130, 'Kinds of aid, and tools of trade', b),
    'A tree divides aid by route (bilateral or multilateral), by purpose (humanitarian or development) and by conditions (tied or untied). Below, three trade tools: a tariff is a tax on imports, a quota limits imports, and fair trade certification aims at fairer prices and conditions.',
    'Name the exact kind of aid or trade measure before you judge it.',
    '## Issues at global, national and local level');
}

// 02 UK aid against the 0.7% target
{
  const Y = 120, base = Y + 380, top = Y + 40, sy = (v) => base - ((base - top) * v) / 0.8;
  let b = `<line x1="120" y1="${base}" x2="840" y2="${base}" stroke="${C.ink}" stroke-width="3"/><line x1="120" y1="${top - 10}" x2="120" y2="${base}" stroke="${C.ink}" stroke-width="3"/>`;
  [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7].forEach((v) => { b += `<line x1="114" y1="${sy(v)}" x2="120" y2="${sy(v)}" stroke="${C.ink}" stroke-width="2"/>` + T(106, sy(v) + 5, v.toFixed(1) + '%', { size: 15, anchor: 'end', fill: C.muted }); });
  b += `<line x1="120" y1="${sy(0.7)}" x2="840" y2="${sy(0.7)}" stroke="${C.rust}" stroke-width="3" stroke-dasharray="10 7"/>` + T(836, sy(0.7) - 10, 'UN target: 0.7% of GNI (1970 resolution)', { size: 16, weight: 700, anchor: 'end', fill: C.rust });
  const bars = [['Before 2021', 0.7, C.teal, ''], ['2021 cut', 0.5, C.teal, ''], ['By 2027 (announced Feb 2025)', 0.3, C.cream, 'to help pay for higher defence spending']];
  bars.forEach(([lab, v, f, n], i) => {
    const x = 190 + i * 220;
    b += `<rect x="${x}" y="${sy(v)}" width="140" height="${base - sy(v)}" fill="${f}" stroke="${C.ink}" stroke-width="2.5"${i === 2 ? ' stroke-dasharray="8 6"' : ''}/>` + T(x + 70, sy(v) - 10, v.toFixed(1) + '%', { size: 22, weight: 700, anchor: 'middle' });
    b += para(x + 70, base + 26, lab, 200, { size: 16, weight: 600, anchor: 'middle' }).s;
  });
  b += note(base + 76, 'A national perspective (spending at home) pulling against a global commitment.').s;
  add('02-uk-aid-target',
    svg(900, base + 76 + 84, 'UK aid and the 0.7% target', b, '% of gross national income given as aid'),
    'Bar chart of UK aid as a share of gross national income against the UN 0.7% target line from a 1970 resolution: 0.7% before 2021, cut to 0.5% in 2021, and an announced cut to 0.3% by 2027 to help pay for higher defence spending.',
    'A national priority can pull against a global commitment.',
    '## Issues at global, national and local level');
}

// 03 Rana Plaza: who is responsible?
{
  const Y = 110;
  let b = card(200, Y, 500, { kicker: 'BANGLADESH, APRIL 2013', title: 'Rana Plaza collapses', body: 'The building housed garment factories. More than 1,100 people died, most of them garment workers.', align: 'middle', fill: C.cream, edge: C.olive, tsize: 22, kfill: C.olive }).s;
  const q = Y + 175;
  b += T(450, q + 20, 'Who is responsible for conditions in export industries?', { size: 20, weight: 700, anchor: 'middle' });
  const pts = [[160, q + 120, 'Factory owners'], [450, q + 120, 'The national government'], [740, q + 120, 'International brands that buy the clothes']];
  pts.forEach(([x, yy, l]) => { b += card(x - 130, yy, 260, { title: l, align: 'middle', tsize: 19, minH: 90, vcenter: true, fill: C.tealLight, edge: C.tealDark }).s; });
  b += path(`M450,${q + 36} L450,${q + 112} M450,${q + 60} L160,${q + 60} L160,${q + 112} M450,${q + 60} L740,${q + 60} L740,${q + 112}`, { w: 3, stroke: C.ink });
  b += note(q + 230, 'An issue that crosses levels: a local workplace, a national government and global buyers.').s;
  add('03-rana-plaza-responsibility',
    svg(900, q + 230 + 84, 'Rana Plaza: who answers for factory conditions?', b),
    'The Rana Plaza collapse in Bangladesh in April 2013, which killed more than 1,100 people, mostly garment workers, branches to three possible responsible parties: factory owners, the national government and the international brands that buy the clothes.',
    'One disaster raises a question that runs from the local to the global level.',
    '## Issues at global, national and local level');
}

// 04 Sachs vs Moyo
add('04-sachs-vs-moyo',
  compose('Two published perspectives on aid', [
    (y) => row(y, [
      { kicker: 'JEFFREY SACHS, THE END OF POVERTY (2005)', title: 'More, well-planned aid', body: 'Increases in aid could end extreme poverty.', fill: C.tealLight, edge: C.tealDark },
      { kicker: 'DAMBISA MOYO, DEAD AID (2009)', kfill: C.olive, title: 'Trade and investment instead', body: 'Long-term government-to-government aid harmed many African countries by encouraging dependency and corruption.', fill: C.cream, edge: C.olive },
    ], { gap: 24, card: { tsize: 21 } }),
    (y) => label(y, 'Each can be challenged', { size: 19 }),
    (y) => row(y, [
      { kicker: 'CRITICS OF SACHS', kfill: C.rust, title: 'Can large aid programmes be managed well?', edge: C.rust },
      { kicker: 'CRITICS OF MOYO', kfill: C.rust, title: 'In areas such as vaccination, aid has clear results.', edge: C.rust },
    ], { gap: 24, card: { tsize: 18 } }),
    (y) => note(y, 'Neither is “the right answer”. Both use evidence and reasoning, so judge how well each holds up.'),
  ]),
  'Jeffrey Sachs (The End of Poverty, 2005) argues more well-planned aid could end extreme poverty; Dambisa Moyo (Dead Aid, 2009) argues long-term government-to-government aid encouraged dependency and corruption and that trade and investment are better. Critics ask whether large programmes can be managed well, and point to vaccination as an area where aid has clear results.',
  'Strong perspectives still have weaknesses that critics can test.',
  '## Perspectives and why people hold them');

// 05 Perspectives at different levels
add('05-perspectives-by-level',
  compose('Who speaks, and from which level', [
    (y) => rings(y, [
      { name: 'Personal', text: 'A farmer or factory worker: wages, prices, job security.' },
      { name: 'National', text: 'An exporters’ association: gains if tariffs fall. A donor-country taxpayer or politician: value for money, spending at home.' },
      { name: 'Global', text: 'An international organisation: targets such as the UN Sustainable Development Goals (2015). An aid charity: urgent needs, but it may also need funding to survive.' },
    ], { R: 175, cardX: 410 }),
    (y) => note(y, 'A perspective is stronger when its evidence is relevant and checkable, weaker when it rests on assertion or a vested interest.'),
  ]),
  'Rings for personal, national and global perspectives on development, trade and aid: a farmer or factory worker; an exporters’ association and a donor-country taxpayer or politician; an international organisation working to the Sustainable Development Goals and an aid charity.',
  'Each perspective comes from a role, an interest and a level.',
  '## Perspectives and why people hold them');

// 06 Tariff chain with an open ending
{
  const Y = 110;
  const steps0 = ['Tariff on imported clothing removed', 'Exporters win more orders', 'More factory jobs', 'Higher household incomes', 'But more pressure on workers to meet deadlines'];
  let b = '', cy = Y;
  steps0.forEach((s0, i) => {
    const c = card(190, cy, 520, { title: s0, align: 'middle', tsize: 18, pad: 14, minH: 56, vcenter: true, fill: i === 4 ? C.cream : i === 0 ? C.tealLight : C.panel, edge: i === 4 ? C.olive : i === 0 ? C.tealDark : C.panelEdge });
    b += c.s; cy += c.h;
    if (i < steps0.length - 1) { b += arrow(450, cy + 3, 450, cy + 25, { w: 3.5 }); cy += 28; }
  });
  b += path(`M450,${cy} L450,${cy + 24} M230,${cy + 24} L670,${cy + 24}`, { w: 3 }) + arrow(230, cy + 24, 230, cy + 46, { w: 3 }) + arrow(670, cy + 24, 670, cy + 46, { w: 3 });
  b += T(462, cy + 14, 'depends on', { size: 15, weight: 700, fill: C.muted });
  b += card(80, cy + 50, 300, { title: 'Labour standards enforced', align: 'middle', tsize: 18, fill: C.tealLight, edge: C.tealDark, minH: 84, vcenter: true }).s;
  b += card(520, cy + 50, 300, { title: 'Labour standards not enforced', align: 'middle', tsize: 18, edge: C.rust, minH: 84, vcenter: true }).s;
  const Y2 = cy + 50 + 84 + 24;
  b += row(Y2, [
    { title: 'Short term or long term?', body: 'Cutting aid may save a donor money now, while effects on health services last for years.' },
    { title: 'Who gains, who loses?', body: 'Most issues have several causes, and a source may give only one.' },
  ], { gap: 24, card: { tsize: 18, size: 16 } }).s;
  add('06-tariff-chain',
    svg(900, Y2 + 160, 'A chain, not a list: removing a clothing tariff', b),
    'A chain: a tariff on imported clothing is removed, exporters win more orders, factory jobs increase, household incomes rise, but workers face more pressure to meet deadlines. The final outcome splits by whether labour standards are enforced. Below, reminders to separate short- and long-term consequences and to ask who gains and loses.',
    'The end of a chain often depends on conditions the source does not mention.',
    '## Causes and consequences');
}

// 07 The fair trade survey that undermines itself
{
  const Y = 120;
  let b = card(30, Y - 6, 840, { kicker: 'INVENTED SOURCE: FAIR TRADE CAMPAIGN GROUP, FICTIONAL TOWN OF BRENNOCK', title: '“30 of 120 shoppers (25%) said they always buy fair trade tea. This proves the public wants fair trade.”', tsize: 19, fill: C.panel, edge: C.ink }).s;
  const gy = Y + 130;
  for (let i = 0; i < 120; i++) { const r = Math.floor(i / 20), c = i % 20; b += `<circle cx="${70 + c * 22}" cy="${gy + 14 + r * 22}" r="8.5" fill="${i < 30 ? C.mustard : C.panel}" stroke="${C.ink}" stroke-width="1.8"/>`; }
  b += T(70 - 9, gy + 160, '30 say they always buy it', { size: 16, weight: 700, fill: C.olive }) + T(70 - 9, gy + 182, '90 do not', { size: 16, weight: 700, fill: C.muted });
  b += card(530, gy, 340, { title: 'The figure may work against the claim', body: 'If a quarter always buy fair trade, three-quarters do not.', tsize: 18, size: 16, fill: C.cream, edge: C.olive }).s;
  const Y2 = gy + 205;
  const ck = checklist(Y2, [
    { q: 'Run by a campaign group', note: 'A vested interest in showing support.', mark: 'x' },
    { q: '120 people in one town', note: 'Cannot represent “the public” as a whole.', mark: 'x' },
    { q: 'What people say they do', note: 'May differ from what they actually buy.', mark: 'x' },
  ], { gap: 8, tsize: 18 });
  b += ck.s + note(Y2 + ck.h + 18, 'Independent sales data from several areas would be more reliable.', { title: 'Better evidence' }).s;
  add('07-fair-trade-survey',
    svg(900, Y2 + ck.h + 18 + 112, 'Does 25% prove the public wants fair trade?', b),
    'A grid of 120 dots with 30 highlighted shows that 25% of shoppers in an invented survey said they always buy fair trade tea, so 90 did not. Three weaknesses follow: a campaign group ran it, it covers one town, and stated behaviour may differ from actual buying. Independent sales data would be better.',
    'Look at what the number leaves out: here, three-quarters of shoppers.',
    '## Judging sources and evidence');
}
