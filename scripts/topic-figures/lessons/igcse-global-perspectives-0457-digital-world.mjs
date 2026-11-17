import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-global-perspectives-0457-digital-world';
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

// 01 Online and offline: ITU estimate
{
  const Y = 130, on = 5.5, off = 2.6, W = 840, wOn = (W * on) / (on + off);
  let b = `<rect x="30" y="${Y}" width="${wOn}" height="90" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/><rect x="${30 + wOn}" y="${Y}" width="${W - wOn}" height="90" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += T(30 + wOn / 2, Y + 42, 'about 5.5 billion', { size: 24, weight: 700, anchor: 'middle' }) + T(30 + wOn / 2, Y + 70, 'online', { size: 18, anchor: 'middle' });
  b += T(30 + wOn + (W - wOn) / 2, Y + 42, 'about 2.6 billion', { size: 24, weight: 700, anchor: 'middle' }) + T(30 + wOn + (W - wOn) / 2, Y + 70, 'still offline', { size: 18, anchor: 'middle' });
  b += T(450, Y + 122, 'International Telecommunication Union (UN agency), 2024 estimate', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  b += row(Y + 150, [
    { kicker: 'STRENGTH', title: 'An international body', body: 'Collects data from many countries.', edge: C.tealDark },
    { kicker: 'LIMITATION', kfill: C.rust, title: 'An estimate', body: 'A global figure hides big differences within each country.', edge: C.rust },
  ], { gap: 24, card: { tsize: 19 } }).s;
  b += T(450, Y + 318, 'The same divide at three levels', { size: 20, weight: 700, anchor: 'middle' });
  const lv = row(Y + 336, [
    { kicker: 'GLOBAL', title: 'Unequal access between countries', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'NATIONAL', title: 'Rural areas with weaker connections than cities', fill: C.teal, edge: C.tealDark },
    { kicker: 'LOCAL', kfill: C.olive, title: 'Students without a device or data at home', fill: C.cream, edge: C.olive },
  ], { card: { tsize: 18 } });
  b += lv.s;
  add('01-digital-divide',
    svg(900, Y + 336 + lv.h + 30, 'The digital divide', b),
    'A bar split into about 5.5 billion people online and about 2.6 billion offline, from a 2024 International Telecommunication Union estimate, with its strength (data from many countries) and limitation (an estimate that hides differences within countries). Below, the divide at three levels: between countries, between rural areas and cities, and students without a device or data at home.',
    'A global figure is a starting point; the divide also shows up nationally and locally.',
    '## Issues in the digital world at global, national and local level');
}

// 02 Misinformation vs disinformation, and an algorithm
add('02-false-information-terms',
  compose('False information: is it on purpose?', [
    (y) => row(y, [
      { kicker: 'MISINFORMATION', title: 'False, shared without intent to mislead', fill: C.cream, edge: C.olive, kfill: C.olive },
      { kicker: 'DISINFORMATION', kfill: C.rust, title: 'False, shared on purpose', edge: C.rust },
    ], { gap: 24, card: { tsize: 20 } }),
    (y) => label(y, 'Where it shows up', { size: 19 }),
    (y) => row(y, [
      { kicker: 'GLOBAL', title: 'Fake images and videos shared worldwide' },
      { kicker: 'NATIONAL', title: 'Effects on elections or public health messages' },
      { kicker: 'LOCAL', title: 'Rumours in a community group chat' },
    ], { card: { tsize: 18 } }),
    (y) => card(30, y, 840, { kicker: 'ALGORITHM', title: 'A set of rules a computer follows', body: 'On platforms, it decides what each user sees.', fill: C.tealLight, edge: C.tealDark, tsize: 19 }),
  ]),
  'Misinformation is false information shared without intent to mislead; disinformation is shared on purpose. False information appears globally as fake images and videos, nationally in elections and public health messages, and locally as rumours in a group chat. An algorithm is the set of rules that decides what each platform user sees.',
  'The difference between misinformation and disinformation is intent.',
  '## Issues in the digital world at global, national and local level');

// 03 Australia's social media minimum age
add('03-australia-age-limit',
  compose('A national action to evaluate: Australia’s age limit', [
    (y) => {
      let s = `<line x1="120" y1="${y + 40}" x2="780" y2="${y + 40}" stroke="${C.ink}" stroke-width="4"/>`;
      [[200, '2024', 'Act passed'], [700, 'December 2025', 'Takes effect']].forEach(([x, a, b2]) => { s += `<circle cx="${x}" cy="${y + 40}" r="14" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + T(x, y + 18, a, { size: 18, weight: 700, anchor: 'middle' }) + T(x, y + 78, b2, { size: 17, anchor: 'middle', fill: C.muted }); });
      s += T(450, y + 116, 'Certain platforms must stop under-16s holding accounts', { size: 17, anchor: 'middle', fill: C.tealDark, weight: 700 });
      return { s, h: 124 };
    },
    (y) => balance(y, { tag: 'supporters', title: 'Supporters argue', items: ['It protects young people'] }, { tag: 'critics', title: 'Critics question', items: ['How ages can be checked', 'Whether young people will move to less regulated sites'] }, {
      verdictTitle: 'Limitation of the evidence', verdict: 'The law is recent, so evidence of its effects is still limited.',
    }),
  ]),
  'Timeline: Australia’s Online Safety Amendment (Social Media Minimum Age) Act passed in 2024 and took effect in December 2025, requiring certain platforms to stop under-16s holding accounts. Supporters argue it protects young people; critics question age checks and whether young people will move to less regulated sites. Evidence of effects is still limited.',
  'A new law gives perspectives to weigh but little evidence yet of results.',
  '## Issues in the digital world at global, national and local level');

// 04 Phones in schools
add('04-phones-in-schools',
  compose('Phones in schools: four perspectives', [
    (y) => hub(y, 'Phones in schools', [
      { kicker: 'TEACHER', title: 'Phones distract students' },
      { kicker: 'PARENT', title: 'Wants their child reachable on the way home' },
      { kicker: 'STUDENT', title: 'Phones help with research' },
      { kicker: 'EDUCATION MINISTRY', title: 'Focuses on results across all schools' },
    ], { r: 92, cardW: 280, csize: 21 }),
    (y) => label(y, 'Why perspectives differ in the digital world', { size: 19 }),
    (y) => row(y, [
      { title: 'Values', body: 'safety, freedom of expression, privacy', align: 'middle' },
      { title: 'Experience', body: 'what technology did for or to you', align: 'middle' },
      { title: 'Vested interest', body: 'who gains from an outcome', align: 'middle' },
      { title: 'Position', body: 'a whole country or one shop', align: 'middle' },
    ], { gap: 12, card: { tsize: 18, size: 15, pad: 14 } }),
  ]),
  'Four perspectives around phones in schools: a teacher says phones distract, a parent wants their child reachable, a student says phones help research, and an education ministry focuses on results across all schools. Four drivers of different perspectives: values, experience, vested interest and position.',
  'Each view reflects different responsibilities and different things to lose.',
  '## Perspectives: who thinks what, and why');

// 05 Cashless chain with linking words
{
  const Y = 110;
  const st = [
    ['CAUSE', 'Banks close branches as more customers bank online', C.cream, C.olive],
    ['CONSEQUENCE', 'An older person who does not bank online must travel further to pay in cash', C.panel, C.panelEdge],
    ['FURTHER CONSEQUENCE', 'They depend more on relatives, or stop shopping locally', C.panel, C.panelEdge],
    ['KNOCK-ON FOR THE COMMUNITY', 'The local shop may lose customers', C.tealLight, C.tealDark],
  ];
  const links = ['so', 'as a result', 'this means that'];
  let b = '', cy = Y;
  st.forEach(([k, txt, f, e], i) => {
    const c = card(130, cy, 640, { kicker: k, kfill: e === C.panelEdge ? C.tealDark : e, title: txt, fill: f, edge: e, tsize: 19, pad: 16 });
    b += c.s; cy += c.h;
    if (i < st.length - 1) { b += arrow(450, cy + 4, 450, cy + 46, { w: 3.5 }) + `<rect x="470" y="${cy + 10}" width="${cw(16, 700) * links[i].length + 24}" height="30" rx="15" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` + T(482, cy + 31, links[i], { size: 16, weight: 700 }); cy += 50; }
  });
  b += note(cy + 18, 'Each linking word is a small piece of reasoning an examiner can credit.').s;
  add('05-cashless-chain',
    svg(900, cy + 18 + 84, 'Cashless payments: following the chain', b),
    'A four-step chain joined by the linking words so, as a result, and this means that: banks close branches as more people bank online; an older person must travel further to pay in cash; they depend on relatives or stop shopping locally; the local shop may lose customers.',
    'Linking words turn a list of effects into a chain of reasoning.',
    '## Causes and consequences');
}

// 06 Gap between evidence and claim
{
  const Y = 120;
  let b = card(30, Y, 330, { kicker: 'EVIDENCE OFFERED', title: 'Most parents agreed digital skills matter for jobs', tsize: 19, fill: C.tealLight, edge: C.tealDark, minH: 150, vcenter: true }).s;
  b += card(540, Y, 330, { kicker: 'CLAIM', kfill: C.olive, title: '“Tablets improve learning”', tsize: 21, fill: C.cream, edge: C.olive, minH: 150, vcenter: true }).s;
  b += `<path d="M360,${Y + 75} L410,${Y + 75}" stroke="${C.ink}" stroke-width="5"/><path d="M490,${Y + 75} L540,${Y + 75}" stroke="${C.ink}" stroke-width="5"/>`;
  b += path(`M410,${Y + 75} l8,30 M490,${Y + 75} l-8,30`, { stroke: C.rust, w: 4 }) + T(450, Y + 60, 'gap', { size: 20, weight: 700, anchor: 'middle', fill: C.rust });
  b += T(450, Y + 130, 'in the reasoning', { size: 15, weight: 600, anchor: 'middle', fill: C.rust });
  b += card(30, Y + 175, 840, { kicker: 'SOURCE X', title: 'Written by a company that makes tablets', body: 'A vested interest: the company gains if schools buy tablets, which weakens its credibility.', edge: C.rust, kfill: C.rust, tsize: 19 }).s;
  b += card(30, Y + 300, 840, { kicker: 'A BETTER TEST', title: 'Independent research comparing students with and without tablets', tsize: 19, fill: C.tealLight, edge: C.tealDark }).s;
  b += T(450, Y + 425, 'Five questions for any source', { size: 19, weight: 700, anchor: 'middle' });
  const ch = chips(Y + 440, ['Who wrote it?', 'Why?', 'When?', 'How was the evidence gathered?', 'Does other evidence agree?'], { size: 16, h: 40 });
  b += ch.s;
  add('06-tablets-evidence-gap',
    svg(900, Y + 440 + ch.h + 30, 'When the evidence does not match the claim', b),
    'A broken bridge between evidence and claim: parents agreeing that digital skills matter for jobs does not show that tablets improve learning. The source is written by a tablet maker with a vested interest. A better test would compare students with and without tablets. Five questions for any source: who, why, when, how, and does other evidence agree.',
    'Check that the evidence actually supports the claim it is attached to.',
    '## Judging sources and evidence');
}

// 07 Short-term and long-term actions together
add('07-cashless-actions',
  compose('Pairing a long-term and a short-term action', [
    (y) => row(y, [
      { kicker: 'ACTION 1: LONG TERM', title: 'Free digital skills classes at the library', body: ['Tackles a cause: many older residents do not use online banking.', 'Builds lasting skills.', 'Leaves out residents without a smartphone.'], bullets: true, fill: C.tealLight, edge: C.tealDark },
      { kicker: 'ACTION 2: SHORT TERM', kfill: C.olive, title: 'Require shops to accept cash', body: ['Helps those residents at once.', 'Adds costs for shop owners.'], bullets: true, fill: C.cream, edge: C.olive },
    ], { gap: 24, card: { tsize: 19, size: 16 } }),
    (y) => ({ s: arrow(235, y - 8, 400, y + 34, { w: 3.5 }) + arrow(665, y - 8, 500, y + 34, { w: 3.5 }), h: 40 }),
    (y) => card(150, y, 600, { title: 'Judgement: classes are the better long-term action, but work best alongside a short-term guarantee that cash is still accepted', align: 'middle', tsize: 18, fill: C.mustard, edge: C.ink }),
    (y) => chips(y, ['Effectiveness', 'Feasibility', 'Who benefits, who loses', 'Unintended consequences', 'Sustainability'], { size: 16, h: 40 }),
  ]),
  'Two actions compared: free digital skills classes tackle a cause and build lasting skills but leave out people without smartphones; requiring shops to accept cash helps at once but adds costs for shops. The judgement combines them: classes for the long term, with a short-term guarantee that cash is accepted. Five criteria are listed below.',
  'A long-term action can be paired with a short-term one to cover its gaps.',
  '## Courses of action');
