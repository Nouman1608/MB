import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-global-perspectives-0457-sport-and-recreation';
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

// 01 Grassroots to elite, and legacy
add('01-sport-terms',
  compose('From the park to the podium: key terms', [
    (y) => {
      const lv = [['Mega-event', 'A very large international event, such as the Olympic Games or a football World Cup', 420, C.mustard, C.ink], ['Elite sport', 'Top-level competition by professional or national-team athletes', 600, C.cream, C.olive], ['Grassroots sport', 'Everyday participation in local clubs, schools and parks', 760, C.tealLight, C.tealDark], ['Recreation', 'Activity for enjoyment in free time: walking, cycling, swimming, using a park', 840, C.teal, C.tealDark]];
      let s = '', cy = y;
      lv.forEach(([a, d, w, f, e]) => { const c = card(450 - w / 2, cy, w, { title: a, body: d, align: 'middle', fill: f, edge: e, tsize: 19, size: 15, pad: 14, bfill: C.ink }); s += c.s; cy += c.h + 8; });
      return { s, h: cy - y - 8 };
    },
    (y) => card(30, y, 840, { kicker: 'LEGACY', title: 'The long-term effects an event leaves behind', body: 'Venues, transport, debt, or changes in participation.', tsize: 19 }),
    (y) => note(y, 'UN 2030 Agenda (2015): “Sport is also an important enabler of sustainable development.” A value claim about what sport can do, not evidence that it has.'),
  ]),
  'A widening stack from mega-events, through elite sport and grassroots sport, to recreation, each defined. Legacy is the long-term effect an event leaves, such as venues, transport, debt or changed participation. The UN statement that sport enables sustainable development is a value claim, not evidence.',
  'Sport runs from everyday recreation to mega-events, and each level raises different issues.',
  '## What the topic covers');

// 02 Linking levels: awarding an event
add('02-event-levels',
  compose('How one decision travels down the levels', [
    (y) => row(y, [
      { kicker: 'GLOBAL', title: 'An international body awards an event', fill: C.tealLight, edge: C.tealDark },
      { kicker: 'NATIONAL', title: 'A government spends public money', fill: C.teal, edge: C.tealDark },
      { kicker: 'LOCAL', kfill: C.olive, title: 'A new stadium, new transport, or the loss of a local park', fill: C.cream, edge: C.olive },
    ], { arrows: true, gap: 44, card: { tsize: 18 } }),
    (y) => table(y, ['Level', 'Example issues that divide opinion'], [
      ['Global', 'Cost and legacy of mega-events; doping; equal pay and coverage for women’s sport; whether esports count'],
      ['National', 'Elite medals or community sport; PE time in schools; gambling sponsorship; ticket prices'],
      ['Local', 'Playing fields sold for housing; club fees; safe cycling routes; access for disabled people'],
    ], [160, 680], { size: 16 }),
  ]),
  'An international body awards an event, a government spends public money, and locally a stadium or transport is built or a park lost. A table lists issues at each level: mega-event costs, doping, women’s sport and esports globally; elite versus community funding and gambling sponsorship nationally; playing fields, club fees, cycling routes and access locally.',
  'Strong answers follow a decision from the global level to a local place.',
  '## Finding issues at global, national and local level');

// 03 Dunmere bid perspectives
add('03-dunmere-bid',
  compose('A city bids for a championship: whose interests first?', [
    (y) => card(30, y, 840, { kicker: 'FICTIONAL CITY OF DUNMERE', title: 'The council wants to bid for a continental athletics championship', tsize: 19, fill: C.panel, edge: C.ink }),
    (y) => balance(y, { tag: 'council', title: 'The council', items: ['Visitors and a better city image', 'Inspire young people to take up sport', 'Value: growth and national pride'] },
      { tag: 'residents', title: 'Residents near the stadium', items: ['Higher rents; loss of a park used every day', 'The event lasts only ten days', 'Value: local wellbeing over image'] }, { size: 16 }),
    (y) => row(y, [
      { title: 'Sponsors and broadcasters', body: 'a vested interest: a financial stake', align: 'middle' },
      { title: 'Governing bodies', body: 'set rules, award events, earn from them', align: 'middle' },
      { title: 'Taxpayers', body: 'could the money do more elsewhere?', align: 'middle' },
    ], { card: { tsize: 17, size: 15 } }),
  ]),
  'The fictional city of Dunmere considers bidding for a championship. A balance weighs the council (visitors, image, inspiring youth; valuing growth and pride) against nearby residents (rents, loss of a park, a ten-day event; valuing local wellbeing). Other voices: sponsors and broadcasters with a vested interest, governing bodies that earn from events, and taxpayers.',
  'The disagreement is really about whose interests should come first.',
  '## Perspectives: who thinks what, and why');

// 04 Cost of hosting chain
add('04-hosting-cost-chain',
  compose('The cost of hosting: one consequence causes the next', [
    (y) => stack(y, [
      { kicker: 'CAUSE', kfill: C.olive, title: 'Bids made years ahead with optimistic budgets', fill: C.cream, edge: C.olive },
      { kicker: 'CONSEQUENCE', title: 'Final costs can be far higher', body: 'Montreal 1976: Olympic Stadium debt not fully paid until 2006, about 30 years later.' },
      { kicker: 'CONSEQUENCE', title: 'Some regions decide the cost is not worth it', body: 'July 2023: Victoria withdrew from the 2026 Commonwealth Games, citing an estimated A$6–7 billion.' },
      { kicker: 'CONSEQUENCE', title: 'Organisers look for cheaper models', body: '2026 Commonwealth Games move to Glasgow: 10 sports, existing venues, no athletes’ village.', fill: C.tealLight, edge: C.tealDark },
    ], { arrows: true, gap: 36, card: { tsize: 18, size: 16 } }),
    (y) => note(y, 'Say who is affected: Quebec taxpayers paid for the stadium for three decades, money not spent on other services.'),
  ]),
  'A chain: optimistic bid budgets lead to higher final costs (Montreal’s 1976 stadium debt was paid off only in 2006), which leads regions to withdraw (Victoria pulled out of the 2026 Commonwealth Games in July 2023 citing A$6 to 7 billion), which leads to cheaper models (Glasgow 2026 with 10 sports, existing venues and no athletes’ village).',
  'Each consequence becomes the cause of the next step.',
  '## Causes and consequences');

// 05 40,000 jobs claim
{
  const Y = 120;
  const sc0 = card(30, Y - 6, 840, { kicker: 'FICTIONAL DUNMERE BID COMMITTEE', title: '“Hosting the championship will create 40,000 jobs and inspire a generation.”', tsize: 20, fill: C.panel, edge: C.ink });
  let b = sc0.s;
  const by = Y - 6 + sc0.h + 44, W = 840, t1 = (W * 31000) / 40000;
  b += T(30, by - 10, 'If, say, the jobs broke down like this:', { size: 17, weight: 600, fill: C.muted });
  b += `<rect x="30" y="${by}" width="${t1}" height="64" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/><rect x="${30 + t1}" y="${by}" width="${W - t1}" height="64" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += T(30 + t1 / 2, by + 30, '31,000 last only for the event', { size: 18, weight: 700, anchor: 'middle' }) + T(30 + t1 / 2, by + 52, '(an illustration, not a real figure)', { size: 15, anchor: 'middle', fill: C.muted });
  b += T(30 + t1 + (W - t1) / 2, by + 30, '9,000', { size: 20, weight: 700, anchor: 'middle' }) + T(30 + t1 + (W - t1) / 2, by + 52, 'lasting', { size: 15, anchor: 'middle' });
  const ck = checklist(by + 90, [
    { q: 'Vested interest', note: 'The bid committee wants public support.', mark: 'x' },
    { q: 'A prediction', note: '“Will create” cannot be checked yet.', mark: 'x' },
    { q: 'What counts as a job?', note: 'The figure is not broken down; lasting jobs could be under a quarter.', mark: 'x' },
    { q: '“Inspire a generation”', note: 'An emotive slogan with no measure of how it would be tested.', mark: 'x' },
  ], { gap: 8, tsize: 18 });
  b += ck.s;
  const nt = note(by + 90 + ck.h + 18, 'Weakly supported until independent figures are available.', { title: 'Judgement' });
  b += nt.s;
  add('05-jobs-claim',
    svg(900, by + 90 + ck.h + 18 + nt.h + 30, 'Testing a “40,000 jobs” promise', b),
    'A fictional bid committee claims hosting will create 40,000 jobs and inspire a generation. An illustrative bar shows that if 31,000 jobs lasted only for the event, just 9,000 would be lasting. Four weaknesses: vested interest, a prediction, an unbroken-down figure, and an emotive slogan. The claim is weak until independent figures exist.',
    'Ask what a big number counts, and for how long.',
    '## Judging sources and evidence');
}

// 06 Real examples timeline
{
  const Y = 120, ly = Y + 40;
  const ev = [['1973', 'US Open: equal prize money for women and men'], ['1999', 'WADA set up to coordinate anti-doping rules'], ['2007', 'Wimbledon: equal prize money'], ['2023', 'Esports medal events at the Asian Games, Hangzhou'], ['2024', 'Paris Olympics: equal athlete places for women and men']];
  let b = `<line x1="60" y1="${ly + 12}" x2="60" y2="${ly + 5 * 100 - 50}" stroke="${C.ink}" stroke-width="4"/>`;
  ev.forEach(([yr, d], i) => {
    const yy = ly + i * 100;
    b += `<circle cx="60" cy="${yy + 30}" r="12" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + T(90, yy + 37, yr, { size: 22, weight: 700 });
    b += card(170, yy, 330, { title: d, tsize: 17, minH: 70, vcenter: true }).s;
  });
  b += card(530, ly, 340, { kicker: 'EVALUATION POINT', kfill: C.rust, title: 'Enforcement', body: 'Critics debate how consistently anti-doping rules are enforced across countries and sports.', edge: C.rust, tsize: 18, size: 15 }).s;
  b += card(530, ly + 165, 340, { kicker: 'EVALUATION POINT', kfill: C.rust, title: 'Elite is not local', body: 'Equal places at the Olympics do not show what happens in local clubs.', edge: C.rust, tsize: 18, size: 15 }).s;
  b += card(530, ly + 315, 340, { kicker: 'CONTESTED', kfill: C.olive, title: 'Are esports sport?', body: 'Skill, teamwork, a huge audience; or no physical exertion and worries about screen time.', fill: C.cream, edge: C.olive, tsize: 18, size: 15 }).s;
  add('06-real-examples-timeline',
    svg(900, ly + 500, 'Real examples to evaluate', b),
    'A timeline: equal prize money at the US Open (1973), WADA founded (1999), equal prize money at Wimbledon (2007), esports medals at the Hangzhou Asian Games (2023), and equal athlete places at the Paris 2024 Olympics. Evaluation points: inconsistent doping enforcement, elite equality not showing local change, and whether esports count as sport.',
    'Each real example is a starting point for evaluation, not a fact to recite.',
    '## Real examples to practise with');
}

// 07 Opening school halls
add('07-school-halls',
  compose('Assessing an action: open school halls in the evening', [
    (y) => ladder(y, [
      { tag: 'Knowledge', text: 'Opening school sports halls to the public in the evenings can raise participation.' },
      { tag: 'Application', text: 'Where families say no affordable facility is nearby, it uses existing buildings: the cost is mainly staff and cleaning.' },
      { tag: 'Analysis', text: 'It tackles the cause, because the barrier is access, not interest, and reaches families who cannot pay for gyms.' },
      { tag: 'Evaluation', text: 'May miss people who work long hours or feel unwelcome at school, and supervision must be paid every year. A cost-effective first step, best alongside reduced club fees.' },
    ], { size: 16 }),
    (y) => chips(y, ['Effectiveness', 'Cost: who pays?', 'Fairness', 'Side effects', 'Sustainability', 'Who acts?'], { fill: C.cream, edge: C.olive, size: 16 }),
  ]),
  'Four tagged steps assess opening school sports halls in the evening: it can raise participation; it uses existing buildings so costs are mainly staff and cleaning; it tackles access, the real barrier; but it may miss some people and needs yearly funding, so it is a first step best combined with reduced club fees. Six criteria for any action follow.',
  'Match the action to the barrier, then name who it still misses.',
  '## Courses of action and their effects');
