import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-global-perspectives-0457-health-and-wellbeing';
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

// 01 WHO definition as a perspective
add('01-who-definition-debate',
  compose('Even a definition is a perspective', [
    (y) => card(30, y, 840, { kicker: 'WHO CONSTITUTION (ADOPTED 1946, IN FORCE 1948)', title: 'Health is “a state of complete physical, mental and social well-being and not merely the absence of disease or infirmity”', tsize: 20, fill: C.cream, edge: C.olive, kfill: C.olive }),
    (y) => row(y, [
      { kicker: 'CRITICS', kfill: C.rust, title: '“Complete” well-being sets a bar almost nobody reaches', edge: C.rust },
      { kicker: 'SUPPORTERS', title: 'It reminds governments that mental and social health matter too', edge: C.tealDark },
    ], { gap: 24, card: { tsize: 18 } }),
    (y) => row(y, [
      { title: 'Wellbeing', body: 'how well a person feels and functions: mood, relationships, sleep, purpose', fill: C.tealLight, edge: C.tealDark },
      { title: 'Public health', body: 'action to protect a whole population: vaccination, clean water, food rules', fill: C.tealLight, edge: C.tealDark },
      { title: 'Health inequality', body: 'differences in health between groups, such as rich and poor areas', fill: C.tealLight, edge: C.tealDark },
    ], { card: { tsize: 18, size: 15, pad: 16 } }),
  ]),
  'The WHO Constitution defines health as complete physical, mental and social well-being, not merely the absence of disease. Critics say complete well-being is a bar almost nobody reaches; supporters say it reminds governments that mental and social health matter. Below, working definitions of wellbeing, public health and health inequality.',
  'Showing that a definition can be debated is itself good evaluation.',
  '## Health and wellbeing: what the words cover');

// 02 Nested levels: sugary drinks
{
  const Y = 110;
  let b = `<rect x="30" y="${Y}" width="840" height="430" rx="18" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="3"/>`;
  b += T(56, Y + 38, 'GLOBAL', { size: 16, weight: 700, fill: C.tealDark }) + T(56, Y + 66, 'A pattern seen in many countries', { size: 19, weight: 700 });
  b += `<rect x="80" y="${Y + 92}" width="740" height="310" rx="16" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="3"/>`;
  b += T(106, Y + 128, 'NATIONAL', { size: 16, weight: 700, fill: C.tealDark }) + T(106, Y + 156, 'A tax on sugary drinks', { size: 19, weight: 700 });
  b += `<rect x="130" y="${Y + 184}" width="640" height="190" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="3"/>`;
  b += T(156, Y + 220, 'LOCAL', { size: 16, weight: 700, fill: C.olive }) + T(156, Y + 248, 'What is sold in your school canteen changes', { size: 19, weight: 700 });
  b += `<rect x="180" y="${Y + 274}" width="540" height="76" rx="12" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2.5"/>` + T(450, Y + 307, 'SDG 3 (2015): “Ensure healthy lives and promote', { size: 16, anchor: 'middle' }) + T(450, Y + 330, 'well-being for all at all ages”: a value, not evidence', { size: 16, anchor: 'middle' });
  b += note(Y + 450, 'A strong answer shows how the levels link, not just that each exists.').s;
  add('02-sugary-drinks-levels',
    svg(900, Y + 450 + 84, 'How the levels nest: a sugary drinks tax', b),
    'Three nested boxes: globally, a pattern seen in many countries; inside it, a national tax on sugary drinks; inside that, a local change in what the school canteen sells. A note adds that SDG 3 is a value statement about what should happen, not evidence of what is happening.',
    'A national response to a global pattern changes something local.',
    '## Finding issues at global, national and local level');
}

// 03 Marrow clinics: a clash of values
{
  const Y = 110;
  let b = panel(30, Y, 840, 300, C.tealLight, C.panelEdge);
  b += `<rect x="560" y="${Y + 110}" width="200" height="110" rx="10" fill="${C.panel}" stroke="${C.ink}" stroke-width="3"/>` + `<path d="M650,${Y + 135} h20 v20 h20 v20 h-20 v20 h-20 v-20 h-20 v-20 h20 z" fill="${C.rust}"/>` + T(660, Y + 250, 'New large hospital', { size: 17, weight: 700, anchor: 'middle' }) + T(660, Y + 272, 'in the main town', { size: 16, anchor: 'middle', fill: C.muted });
  [[110, Y + 70], [140, Y + 190], [330, Y + 255]].forEach(([x, yy], i) => {
    b += `<rect x="${x - 40}" y="${yy - 30}" width="80" height="56" rx="8" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + path(`M${x - 22},${yy - 18} l44,34 m0,-34 l-44,34`, { stroke: C.rust, w: 4 });
    b += `<line x1="${x + 44}" y1="${yy}" x2="555" y2="${Y + 165}" stroke="${C.ink}" stroke-width="2.5" stroke-dasharray="8 7"/>`;
  });
  b += T(110, Y + 120, 'village clinic', { size: 15, anchor: 'middle', fill: C.muted }) + T(140, Y + 240, 'village clinic', { size: 15, anchor: 'middle', fill: C.muted }) + T(330, Y + 305, 'village clinic', { size: 15, anchor: 'middle', fill: C.muted });
  b += T(350, Y + 150, 'longer journeys', { size: 16, weight: 700, fill: C.ink, anchor: 'middle' });
  const rw = row(Y + 318, [
    { kicker: 'HEALTH AUTHORITY', title: 'Value: quality and efficiency', body: 'One large hospital can afford specialist staff and equipment that three small clinics cannot.', edge: C.tealDark },
    { kicker: 'OLDER VILLAGE RESIDENTS', kfill: C.olive, title: 'Value: access and closeness', body: 'Many do not drive, so a longer journey may stop them seeking help early.', edge: C.olive },
  ], { gap: 24, card: { tsize: 19, size: 16 } });
  b += rw.s + note(Y + 318 + rw.h + 18, 'Both sides use reasoning. The disagreement is really about which value should come first.').s;
  add('03-marrow-clinics',
    svg(900, Y + 318 + rw.h + 18 + 84, 'Closing village clinics: whose value comes first?', b),
    'A schematic map of the fictional region of Marrow: three village clinics are crossed out and dashed lines show longer journeys to one new large hospital in the main town. The health authority values quality and efficiency; older village residents, many of whom do not drive, value access and closeness.',
    'Behind two reasoned perspectives lie two different values.',
    '## Perspectives: who thinks what, and why');
}

// 04 Types of cause and the AMR chain
add('04-antimicrobial-resistance',
  compose('Health issues rarely have one cause', [
    (y) => row(y, [
      { title: 'Individual', body: 'diet, exercise, sleep, smoking', align: 'middle', fill: C.cream, edge: C.olive },
      { title: 'Social and economic', body: 'income, housing, education, cost of healthy food', align: 'middle' },
      { title: 'Environmental', body: 'air quality, unsafe water, lack of green space', align: 'middle' },
      { title: 'Political', body: 'health spending, laws, advertising rules', align: 'middle' },
    ], { gap: 12, card: { tsize: 18, size: 15, pad: 14 } }),
    (y) => label(y + 2, 'Worked chain: antimicrobial resistance, a top global threat (WHO)', { size: 19 }),
    (y) => flowRows(y, ['Cause', 'Consequence'], [
      ['Antibiotics overused or misused in people, such as for viral infections they cannot treat', 'Surviving bacteria become resistant; common infections get harder to treat'],
      ['Antibiotics widely used in farm animals', 'Resistant bacteria spread through food chains and the environment'],
      ['Few new antibiotics being developed', 'Fewer options for doctors; longer, more costly hospital stays'],
    ], { fills: [C.cream, C.tealLight], edges: [C.olive, C.tealDark], size: 16 }),
    (y) => note(y, 'Say who is affected and how: “routine operations become riskier because infections after surgery are harder to treat” earns more than “it is bad for health”.'),
  ]),
  'Four types of cause: individual, social and economic, environmental, and political. Below, three cause-consequence pairs for antimicrobial resistance: misuse of antibiotics in people makes infections harder to treat; use in farm animals spreads resistant bacteria; few new antibiotics leaves doctors fewer options and makes hospital stays longer and costlier.',
  'Name who is affected and how, not just that something is bad for health.',
  '## Causes and consequences');

// 05 CalmLeaf advert: three explanations
add('05-calmleaf-advert',
  compose('“9 out of 10 users felt less stressed”', [
    (y) => card(30, y, 840, { kicker: 'FICTIONAL ADVERT FROM THE COMPANY THAT SELLS CALMLEAF DROPS', title: '“In our trial, 9 out of 10 users felt less stressed after two weeks.”', tsize: 20, fill: C.panel, edge: C.ink }),
    (y) => checklist(y, [
      { q: 'Vested interest', note: 'The seller ran the trial and gains from a positive result.', mark: 'x' },
      { q: 'No sample size given', note: 'If 40 users took part, that is 36 people: too few to generalise to everyone.', mark: 'x' },
      { q: 'Self-reported, no comparison group', note: '“Felt less stressed” is what users said, with no group who did not take the drops.', mark: 'x' },
    ], { gap: 8, tsize: 18 }),
    (y) => label(y, 'So which explains the fall in stress?', { size: 19 }),
    (y) => row(y, [
      { title: 'The drops worked', align: 'middle', fill: C.cream, edge: C.olive },
      { title: 'People expected to feel better', align: 'middle' },
      { title: 'The two weeks were simply calmer', align: 'middle' },
    ], { card: { tsize: 18 } }),
    (y) => note(y, 'Without a comparison group the evidence cannot tell these apart, so it is weak support for the claim.', { title: 'Judgement' }),
  ]),
  'A fictional advert claims 9 out of 10 CalmLeaf users felt less stressed after two weeks. Three weaknesses: the seller has a vested interest, no sample size is given, and results are self-reported with no comparison group. Three explanations compete: the drops worked, people expected to feel better, or the weeks were calmer.',
  'Without a comparison group, you cannot tell whether the product caused the change.',
  '## Judging sources and evidence');

// 06 Sugary drinks taxes
add('06-sugar-tax-evaluation',
  compose('Evaluating a sugary drinks tax', [
    (y) => row(y, [
      { kicker: 'MEXICO, 2014', title: 'One peso per litre on sugar-sweetened drinks', fill: C.tealLight, edge: C.tealDark },
      { kicker: 'UK, APRIL 2018', title: 'Soft Drinks Industry Levy: producers charged by sugar content', body: 'Many cut sugar before it began.', fill: C.tealLight, edge: C.tealDark },
    ], { gap: 24, card: { tsize: 18, size: 16 } }),
    (y) => balance(y, { tag: 'effective', title: 'Likely effective', items: ['Targets one clear source of sugar', 'Gives manufacturers a reason to change recipes'] }, { tag: 'limits', title: 'Limits', items: ['Treats one cause: people may switch to sweets', 'Fairness: poorer families spend more of their income on food'] }, {
      verdictTitle: 'On balance', verdict: 'Best as one part of a wider plan, for example if the money raised funds free water and sport in schools.', size: 16,
    }),
  ]),
  'Examples of sugary drinks taxes: Mexico’s one peso per litre from 2014 and the UK levy from April 2018, before which many manufacturers cut sugar. A balance weighs effectiveness (targets a clear source, changes recipes) against limits (people may switch to sweets; poorer families pay a larger share). On balance, it works best within a wider plan.',
  'A tax can work and still need other measures to be fair and complete.',
  '## Courses of action and their effects');

// 07 Team Project ideas
add('07-health-team-projects',
  compose('Health Team Projects: issue, action, measure', [
    (y) => flowRows(y, ['Local issue', 'Possible action', 'How to measure success'], [
      ['Many sugary drinks at school', 'Campaign plus refillable-bottle stations', 'Before-and-after survey; canteen sales records'],
      ['Girls take part in less sport than boys', 'A girls-only activity club for six weeks', 'Attendance counts; short feedback survey'],
      ['Poor sleep before exams', 'Assembly and leaflet on sleep habits', 'Volunteers’ sleep diaries before and after'],
      ['Older neighbours feel isolated', 'Weekly student visit or phone call scheme', 'Number of contacts; simple wellbeing scale'],
    ], { size: 16 }),
    (y) => note(y, 'Keep sensitive topics at the level of awareness and signposting to trusted adults and services.'),
  ]),
  'Four rows link a local health issue to an action and a measure: sugary drinks with a campaign and bottle stations; girls’ sport with a six-week club; poor sleep with an assembly and leaflet; isolated older neighbours with a visit or phone scheme. Sensitive topics stay at awareness and signposting.',
  'Plan how you will measure success at the same time as the action.',
  '## Ideas for the Team Project');
