import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-global-perspectives-0457-technology-industry-and-innovation';
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

// 01 From invention to control
add('01-invention-to-innovation',
  compose('From a new idea to a changed world', [
    (y) => row(y, [
      { kicker: 'INVENTION', title: 'A new idea, device or process', fill: C.cream, edge: C.olive, kfill: C.olive },
      { kicker: 'R&D', title: 'Spending to discover and test it' },
      { kicker: 'INNOVATION', title: 'Put into use, changing how things are made or done', fill: C.tealLight, edge: C.tealDark },
      { kicker: 'TRANSFER', title: 'Technology shared between firms or countries' },
    ], { arrows: true, gap: 40, card: { tsize: 16, pad: 14 } }),
    (y) => label(y + 4, 'Who controls it?', { size: 19 }),
    (y) => row(y, [
      { kicker: 'PATENT', kfill: C.rust, title: 'Lets an inventor stop others using an invention for a set period', edge: C.rust },
      { kicker: 'INTELLECTUAL PROPERTY', kfill: C.rust, title: 'Legal rights over creations of the mind: patents, copyright', edge: C.rust },
      { kicker: 'SUBSIDY', title: 'Government money to lower a firm’s costs or encourage an activity' },
    ], { card: { tsize: 17 } }),
    (y) => row(y, [
      { kicker: 'INDUSTRIALISATION', title: 'A shift from farming towards manufacturing' },
      { kicker: 'PLANNED OBSOLESCENCE', kfill: C.olive, title: 'A claim that products are designed to stop working or date early', fill: C.cream, edge: C.olive },
    ], { gap: 24, card: { tsize: 17 } }),
  ]),
  'A flow from invention, through research and development and innovation, to technology transfer. Below, terms for who controls technology (patents, intellectual property, subsidies) and two further terms: industrialisation, and planned obsolescence, the claim that products are designed to date early.',
  'The topic follows ideas from invention to use, and asks who controls them.',
  '## Issues at global, national and local level');

// 02 WTO vaccine IP waiver
add('02-wto-vaccine-waiver',
  compose('Should vaccine patents be waived?', [
    (y) => row(y, [
      { kicker: 'OCTOBER 2020', title: 'India and South Africa propose waiving some IP rules for COVID-19 products at the WTO' },
      { kicker: 'JUNE 2022', title: 'WTO agrees a narrower decision: vaccines only', body: 'Eligible members may authorise production without the patent holder’s consent, for five years.', fill: C.tealLight, edge: C.tealDark },
    ], { arrows: true, gap: 50, card: { tsize: 17, size: 15 } }),
    (y) => balance(y, { tag: 'supporters', title: 'Supporters of a waiver', items: ['Patents slowed supply to poorer countries'] },
      { tag: 'opponents', title: 'Many drug firms, some rich governments', items: ['Patents pay for research', 'Factories, materials and skills limited supply, not patents'] }, {
      verdictTitle: 'A third view', verdict: 'Some campaign groups said the final decision was too narrow. You are marked on explaining why each side holds its view.', size: 16,
    }),
  ]),
  'In October 2020 India and South Africa proposed waiving some IP rules for COVID-19 products at the WTO; in June 2022 a narrower decision let eligible members authorise vaccine production without the patent holder’s consent for five years. Supporters said patents slowed supply; many firms and some rich governments said patents fund research and that factories, materials and skills were the real limit.',
  'An issue that divides opinion: explain why each side holds its view.',
  '## Issues at global, national and local level');

// 03 Arnholt factory levels
add('03-arnholt-factory',
  compose('A battery factory in Arnholt: three levels', [
    (y) => rings(y, [
      { name: 'Local', text: 'Residents argue about the factory’s water use. The council can set conditions on water.' },
      { name: 'National', text: 'The government offers a grant to attract the factory.' },
      { name: 'Global', text: 'The growth of electric vehicles drives demand for batteries. The council cannot change it.' },
    ], { R: 165 }),
    (y) => row(y, [
      { kicker: 'YOUNG RESIDENT', title: 'Supports it: skilled jobs close to home', body: 'Risk: having to move away for work.', fill: C.tealLight, edge: C.tealDark },
      { kicker: 'FARMER', kfill: C.olive, title: 'Opposes it: relies on the same river for irrigation', body: 'Risk: a poorer harvest.', fill: C.cream, edge: C.olive },
    ], { gap: 24, card: { tsize: 18, size: 16 } }),
    (y) => note(y, 'Approve only with a binding water limit in dry months: it tackles the main cause of opposition. Weakness: it needs independent monitoring.', { title: 'A proposed action' }),
  ]),
  'Rings for the fictional town of Arnholt: locally, residents argue about a battery factory’s water use; nationally, the government offers a grant; globally, electric vehicle growth drives demand. A young resident supports it for jobs; a farmer opposes it over river water. The proposed action is approval with a binding water limit in dry months, enforced by independent monitoring.',
  'Local action can shape how a factory operates, not whether such factories are built.',
  '## Issues at global, national and local level');

// 04 CHIPS Act values
add('04-chips-act',
  compose('The US CHIPS and Science Act: predictions and values', [
    (y) => card(30, y, 840, { kicker: 'SIGNED 9 AUGUST 2022', title: '$52.7 billion for US chip research, development, manufacturing and workforce training', tsize: 19, fill: C.panel, edge: C.ink }),
    (y) => row(y, [
      { kicker: 'SUPPORTERS PREDICT', title: 'Jobs, and less reliance on chips made abroad', body: 'Values: security and self-reliance', fill: C.tealLight, edge: C.tealDark },
      { kicker: 'CRITICS ARGUE', kfill: C.rust, title: 'Taxpayers’ money to profitable firms; better spent elsewhere', body: 'Values: fairness to taxpayers, free competition', edge: C.rust },
    ], { gap: 24, card: { tsize: 18, size: 16 } }),
    (y) => note(y, 'Both sides make predictions that cannot be proved yet. When perspectives rest on different values, more data alone may not settle the disagreement.'),
  ]),
  'The US CHIPS and Science Act, signed on 9 August 2022, provides $52.7 billion for semiconductor research, manufacturing and training. Supporters predict jobs and less reliance on imported chips, valuing security; critics say it gives taxpayers’ money to profitable firms, valuing fairness and competition. Both sides rest on predictions and values.',
  'When values differ, more data may not end the argument.',
  '## Perspectives: who thinks what, and why');

// 05 Region struggling for industry chain
add('05-industry-chain',
  compose('Why a region struggles to attract industry', [
    (y) => row(y, [
      { kicker: 'CAUSE', kfill: C.olive, title: 'Few workers with technical training', fill: C.cream, edge: C.olive },
      { kicker: 'CAUSE', kfill: C.olive, title: 'Weak roads, power or internet', fill: C.cream, edge: C.olive },
    ], { gap: 24, card: { tsize: 18 } }),
    (y) => ({ s: arrow(235, y - 10, 420, y + 28, { w: 3.5 }) + arrow(665, y - 10, 480, y + 28, { w: 3.5 }), h: 30 }),
    (y) => ladder(y, [
      { tag: 'Local', text: 'Young people leave to find skilled work.', fill: C.cream },
      { tag: 'National', text: 'The country imports goods it could make, and earns less tax.', fill: C.teal },
      { tag: 'Global', text: 'New industry gathers in a few places, widening gaps between regions.', fill: C.tealLight },
    ]),
    (y) => row(y, [
      { kicker: 'INTENDED', title: 'A new factory creates jobs', fill: C.tealLight, edge: C.tealDark },
      { kicker: 'POSSIBLE UNINTENDED', kfill: C.rust, title: 'Higher house prices push out existing residents', edge: C.rust },
    ], { gap: 24, card: { tsize: 18 } }),
  ]),
  'Two causes, few technically trained workers and weak roads, power or internet, lead to consequences at three levels: young people leave, the country imports goods and earns less tax, and industry clusters in a few places. Below, an intended consequence of a factory (jobs) and a possible unintended one (higher house prices).',
  'Separate intended from unintended consequences, and present the latter as possible.',
  '## Causes and consequences');

// 06 Rwanda drones evaluation
add('06-rwanda-drones',
  compose('Rwanda’s drone deliveries: judging the evidence', [
    (y) => row(y, [
      { kicker: 'PROBLEM', kfill: C.olive, title: 'Slow road delivery to remote clinics', fill: C.cream, edge: C.olive },
      { kicker: '14 OCTOBER 2016', title: 'National drone delivery with Zipline, backed by Gavi and the UPS Foundation', body: 'Began by flying blood to hospitals and clinics in the west.', fill: C.tealLight, edge: C.tealDark },
    ], { arrows: true, gap: 50, vcenter: true, card: { tsize: 17, size: 15 } }),
    (y) => checklist(y, [
      { q: 'Who reported early results?', note: 'The company and its partners: a vested interest in showing success.', mark: 'x' },
      { q: 'What would be stronger evidence?', note: 'Independent comparisons of delivery times and patient outcomes, before and after.', mark: 'none' },
      { q: 'Would it transfer?', note: 'A country with different geography, funding or regulations may get different results.', mark: 'none' },
    ], { gap: 8, tsize: 18 }),
  ]),
  'Rwanda launched national drone delivery with Zipline on 14 October 2016, backed by Gavi and the UPS Foundation, first flying blood to remote clinics. Evaluation questions: early results came from parties with a vested interest; independent before-and-after comparisons would be stronger; and the model may not transfer to other countries.',
  'Innovation success stories need independent evidence and a transfer test.',
  '## Causes and consequences');

// 07 Talen grants selection effect
{
  const Y = 120, base = Y + 340, sy = (v) => base - (v / 100) * 230;
  let b = card(30, Y - 6, 840, { kicker: 'FICTIONAL REGION OF TALEN', title: '“Our innovation grants work.”', tsize: 21, fill: C.panel, edge: C.ink }).s;
  b += `<line x1="60" y1="${base}" x2="470" y2="${base}" stroke="${C.ink}" stroke-width="3"/>`;
  [[100, 75, C.teal, 'Funded firms', '45 of 60'], [290, 50, C.panel, 'National rate', '']].forEach(([x, v, f, l, sub]) => { b += `<rect x="${x}" y="${sy(v)}" width="130" height="${base - sy(v)}" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x + 65, sy(v) - 12, v + '%', { size: 24, weight: 700, anchor: 'middle' }) + T(x + 65, base + 26, l, { size: 16, weight: 700, anchor: 'middle' }) + (sub ? T(x + 65, base + 48, sub, { size: 15, anchor: 'middle', fill: C.muted }) : ''); });
  b += T(265, Y + 100, 'still trading after three years', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  const rs = stack(Y + 100, [
    { kicker: 'THE WEAKNESS', kfill: C.rust, title: 'The panel chose the most promising firms', body: 'They may have survived anyway. And who carried out the study?', edge: C.rust },
    { kicker: 'A FAIRER TEST', title: 'Compare funded firms with similar firms that applied but just missed out', fill: C.tealLight, edge: C.tealDark },
  ], { x: 500, w: 370, gap: 14, card: { tsize: 18, size: 16 } });
  b += rs.s;
  const ny = Math.max(base + 66, Y + 100 + rs.h + 18);
  b += note(ny, 'State the evidence, interpret it, find the weakness, suggest a better test.', { title: 'Component 1, Question 2' }).s;
  add('07-talen-grants',
    svg(900, ny + 112, 'Do the grants work, or were the winners picked well?', b),
    'Bars show 75% of 60 start-ups funded by the fictional region of Talen (45 firms) still trading after three years, against 50% nationally. The weakness: the panel picked the most promising firms, which might have survived anyway, and the study’s author is not given. A fairer test compares funded firms with similar applicants who just missed out.',
    'A comparison is only fair if the groups were alike to begin with.',
    '## Judging sources and evidence');
}

// 08 Actions table
add('08-tech-actions',
  compose('Courses of action on technology and industry', [
    (y) => table(y, ['Action', 'Possible benefit', 'Possible drawback'], [
      ['Voluntary licensing of patents', 'Wider production without changing the law', 'Depends on companies agreeing'],
      ['Government subsidies for new industry', 'Jobs and new skills', 'Costly; may support firms that would have come anyway'],
      ['Conditions on new factories', 'Gains jobs while limiting harm', 'Firm may choose another location'],
      ['Right-to-repair rules', 'Products last longer; less waste', 'Manufacturers’ costs may raise prices'],
      ['Public funding for research', 'Benefits shared widely', 'Results slow and uncertain'],
      ['Training schemes with local colleges', 'Tackles the skills cause', 'Takes years to show results'],
    ], [280, 270, 290], { size: 16 }),
    (y) => note(y, 'EU right-to-repair directive (2024/1799), adopted 13 June 2024, to be applied by 31 July 2026. It is new, so evidence on its effects is still limited.', { title: 'A real example' }),
  ]),
  'A table of six actions with a benefit and drawback each: voluntary patent licensing, subsidies for new industry, conditions on new factories, right-to-repair rules, public research funding and training schemes with local colleges. The EU right-to-repair directive, adopted 13 June 2024 and due by 31 July 2026, is too new to judge its effects.',
  'Judge each action on cause, feasibility, winners and losers, sustainability and evidence.',
  '## Courses of action and their effects');
