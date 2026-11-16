import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-cambridge-sociology-family-education-crime';
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

// 01 Same pattern in every topic
add('01-pattern-of-every-topic',
  compose('Every Paper 2 topic follows the same pattern', [
    (y) => row(y, [
      { kicker: 'STEP 1', title: 'Factual content', body: 'What family types, school types or crime types actually look like' },
      { kicker: 'STEP 2', title: 'Perspectives', body: 'How functionalists, Marxists and feminists interpret that content', fill: C.cream, edge: C.olive },
      { kicker: 'STEP 3', title: 'Change and explanation', body: 'Why patterns are shifting, and what explains inequality within them', fill: C.tealLight, edge: C.tealDark },
    ], { arrows: true, gap: 40, card: { size: 16, tsize: 19, kfill: C.tealDark } }),
    (y) => row(y, [
      { kicker: 'PAPER 1 · 50%', title: 'Builds the toolkit', body: 'Research methods and the major theoretical perspectives', align: 'middle' },
      { kicker: 'PAPER 2 · 50%', title: 'Applies the toolkit', body: 'Family, education, and crime and deviance', align: 'middle', fill: C.cream, edge: C.olive },
    ], { arrows: true, gap: 60, card: { size: 16, tsize: 19, kfill: C.olive } }),
  ]),
  'Three steps shared by every Paper 2 topic: factual content, then perspectives (functionalist, Marxist, feminist), then change and explanation. Below, Paper 1 builds the toolkit of methods and perspectives, and Paper 2 applies it; each paper is worth 50%.',
  'Facts, then perspectives, then change: the same route through Family, Education and Crime.',
  '## Where this fits in 0495');

// 02 Family change: cause and effect chain
{
  const Y = 130;
  let b = '';
  const c1 = card(30, Y, 260, { title: 'Falling birth rates', align: 'middle', minH: 70, vcenter: true, fill: C.cream, edge: C.olive });
  const c2 = card(30, Y + 90, 260, { title: 'Rising life expectancy', align: 'middle', minH: 70, vcenter: true, fill: C.cream, edge: C.olive });
  b += c1.s + c2.s;
  b += card(345, Y + 35, 200, { kicker: '4.3.1', title: 'Ageing population', align: 'middle', minH: 90, vcenter: true, fill: C.mustard, edge: C.ink, kfill: C.ink }).s;
  b += arrow(296, Y + 35, 338, Y + 65) + arrow(296, Y + 125, 338, Y + 95);
  const fx = 610, eff = ['Beanpole families: more generations alive at once', 'The pivot or “sandwich generation”', 'Changing roles of grandparents'];
  eff.forEach((e, i) => { const yy = Y - 10 + i * 66; b += card(fx, yy, 260, { body: e, bfill: C.ink, size: 16, minH: 56, vcenter: true, pad: 12, fill: C.tealLight, edge: C.tealDark }).s + arrow(551, Y + 80, fx - 6, yy + 28); });
  const y2 = Y + 210;
  const w = card(30, y2, 840, { kicker: 'WATCH OUT', title: 'Boomerang children are not an effect of an ageing population', body: 'They belong to the changing roles of children (4.3.5).', kfill: C.rust, edge: C.rust, tsize: 19 });
  b += w.s;
  const y3 = y2 + w.h + 18;
  const d = row(y3, [
    { kicker: 'NEW RIGHT', title: 'Diversity = dysfunction', body: 'Favours the traditional nuclear family', kfill: C.rust, edge: C.rust },
    { kicker: 'POSTMODERNISTS', title: 'Diversity = choice', body: 'Treat diversity positively, as individual choice', kfill: C.tealDark, edge: C.tealDark },
  ], { gap: 20, card: { size: 16, tsize: 19 } });
  b += d.s;
  add('02-family-change-chain',
    svg(900, y3 + d.h + 30, 'Linking causes to effects in family change', b),
    'Falling birth rates and rising life expectancy lead to an ageing population, which helps explain beanpole families, the sandwich generation and changing grandparent roles. Boomerang children belong instead to the changing roles of children. Below, the New Right see family diversity as dysfunction and postmodernists see it as choice.',
    'Connect each cause to its effects, and keep boomerang children in the right box.',
    '## Family (Topic 4)');
}

// 03 Explanations of achievement sorted by type
add('03-achievement-explanation-types',
  compose('Sorting explanations of achievement (5.3)', [
    (y) => row(y, [
      { kicker: 'MATERIAL', title: 'What a family can afford', body: ['e.g. access to digital technology'], bullets: true, kfill: C.olive, fill: C.cream, edge: C.olive },
      { kicker: 'CULTURAL', title: 'What a child brings from home', body: ['e.g. cultural capital', 'e.g. linguistic factors'], bullets: true, kfill: C.tealDark, fill: C.tealLight, edge: C.tealDark },
      { kicker: 'IN-SCHOOL', title: 'What happens inside school', body: ['e.g. labelling', 'e.g. pro- and anti-school subcultures'], bullets: true, kfill: C.rust, edge: C.rust },
    ], { gap: 16, card: { size: 17, tsize: 19 } }),
    (y) => card(30, y, 840, { kicker: 'THE HIDDEN CURRICULUM', title: 'Apply it to a concrete example', body: 'e.g. school uniform policies teach conformity. Norms, values, punctuality and conformity are taught without being named as lessons.', kfill: C.olive, tsize: 19 }),
  ]),
  'Three types of explanation for differences in achievement: material (such as access to digital technology), cultural (cultural capital and linguistic factors) and in-school (labelling and pro- and anti-school subcultures). Below, the hidden curriculum is applied to school uniform policies teaching conformity.',
  'Be ready to sort explanations into material, cultural and in-school.',
  '## Education (Topic 5)');

// 04 Crime and deviance Venn
{
  const Y = 110, cy = Y + 170;
  let b = panel(30, Y, 840, 340);
  b += `<circle cx="360" cy="${cy}" r="140" fill="${C.cream}" fill-opacity="0.85" stroke="${C.olive}" stroke-width="3"/>`;
  b += `<circle cx="540" cy="${cy}" r="140" fill="${C.teal}" fill-opacity="0.55" stroke="${C.tealDark}" stroke-width="3"/>`;
  b += T(290, cy - 20, 'Deviance', { size: 22, weight: 700, anchor: 'middle', fill: C.olive }) + tl(290, cy + 10, ['breaks', 'social norms'], { size: 17, anchor: 'middle' }, 22);
  b += T(610, cy - 20, 'Crime', { size: 22, weight: 700, anchor: 'middle', fill: C.tealDark }) + tl(610, cy + 10, ['breaks', 'the law'], { size: 17, anchor: 'middle' }, 22);
  b += tl(450, cy - 6, ['both'], { size: 17, weight: 700, anchor: 'middle' }, 22);
  b += T(170, Y + 312, 'Some deviance is not criminal', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  b += path(`M200,${Y + 296} Q230,${Y + 260} 260,${cy + 70}`, { w: 2, stroke: C.muted, extra: 'marker-end="url(#ah)"' });
  const n = note(Y + 360, 'Both are relative: what counts as crime or deviance varies across societies, cultures and time periods.', { title: 'Relativity' });
  b += n.s;
  add('04-crime-and-deviance',
    svg(900, Y + 360 + n.h + 30, 'Crime and deviance overlap', b),
    'Two overlapping circles. Deviance is behaviour that breaks social norms; crime is behaviour that breaks the law. They overlap, but some deviance is not criminal, and both are relative across societies, cultures and time.',
    'Crime and deviance overlap but are not the same, and both are relative.',
    '## Crime, deviance and social control (Topic 6)');
}

// 05 Social control agencies and crime types
add('05-control-agencies-crime-types',
  compose('Agencies of control and types of crime', [
    (y) => row(y, [
      { kicker: 'FORMAL SOCIAL CONTROL', title: '', body: ['Police', 'Courts', 'Armed forces', 'Government', 'Penal system'], bullets: true, kfill: C.tealDark, fill: C.tealLight, edge: C.tealDark },
      { kicker: 'INFORMAL SOCIAL CONTROL', title: '', body: ['Family', 'Education', 'Workplace', 'Peer group', 'Media', 'Religion'], bullets: true, kfill: C.olive, fill: C.cream, edge: C.olive },
    ], { gap: 20, card: { size: 17 } }),
    (y) => label(y, 'The eleven named crime types'),
    (y) => chips(y, ['violent', 'property', 'white-collar / corporate', 'expressive', 'instrumental', 'gang', 'green', 'organised / global', 'cyber', 'hate', 'domestic'], { fills: [0, 0, 0, 0, 0, 0, 0, C.mustard, C.mustard, C.mustard, C.mustard], edge: C.ink }),
    (y) => ({ s: `<rect x="250" y="${y + 6}" width="26" height="22" rx="11" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` + T(288, y + 23, 'most likely in a contemporary stimulus', { size: 17 }), h: 30 }),
  ]),
  'Formal agencies of social control (police, courts, armed forces, government, penal system) beside informal agencies (family, education, workplace, peer group, media, religion), followed by the eleven named crime types, with organised/global, cyber, hate and domestic crime highlighted.',
  'Learn the control agencies as a paired list and classify crimes with the eleven types.',
  '## Crime, deviance and social control (Topic 6)');

// 06 Measuring crime
{
  const Y = 110;
  const lv = [['True level of offending', ''], ['Reported to police', 'Under-reporting: victims do not report'], ['Recorded by police', 'Under-recording: not every report is recorded']];
  let b = '';
  const H = 92, gap = 16, cx = 300, W = (i) => 540 - 110 * i, B = (i) => W(i) - 80;
  lv.forEach(([name, filt], i) => {
    const y = Y + i * (H + gap), w1 = W(i), w2 = B(i);
    b += `<path d="M${cx - w1 / 2},${y} L${cx + w1 / 2},${y} L${cx + w2 / 2},${y + H} L${cx - w2 / 2},${y + H} Z" fill="${[C.tealLight, C.teal, C.mustard][i]}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
    b += T(cx, y + H / 2 + 7, name, { size: 19, weight: 700, anchor: 'middle' });
    if (filt) b += card(610, y - gap / 2 - 32, 260, { body: filt, size: 17, pad: 14, bfill: C.ink, edge: C.rust, minH: 64, vcenter: true }).s + arrow(604, y - gap / 2, cx + B(i - 1) / 2 + 14, y - gap / 2, { color: C.rust, marker: 'ahR', w: 3 });
  });
  const yd = Y + 3 * (H + gap) - gap + 18;
  b += card(610, Y + 2 * (H + gap) + 40, 260, { body: 'Definitions also change over time', size: 17, pad: 14, bfill: C.ink, edge: C.rust, minH: 64, vcenter: true }).s;
  const y2 = yd + 56;
  b += T(450, yd + 38, 'Three ways to measure crime (6.1.6), each with strengths and limitations', { size: 18, weight: 700, anchor: 'middle' });
  const r = row(y2, [
    { kicker: 'MEASURE 1', title: 'Official statistics' },
    { kicker: 'MEASURE 2', title: 'Self-report studies' },
    { kicker: 'MEASURE 3', title: 'Victim surveys (local and national)' },
  ], { gap: 16, card: { size: 16, tsize: 19, kfill: C.tealDark } });
  b += r.s;
  add('06-measuring-crime',
    svg(900, y2 + r.h + 30, 'Why recorded crime is not the true level', b),
    'A funnel narrowing from the true level of offending, to crime reported to the police, to crime recorded by the police, because of under-reporting by victims and under-recording by police; definitions also change over time. Below are the three measures named in the syllabus: official statistics, self-report studies and victim surveys.',
    'Under-reporting, under-recording and changing definitions separate recorded crime from the truth.',
    '## Crime, deviance and social control (Topic 6)');
}

// 07 Paper 2 structure
{
  const Y = 110;
  let b = '';
  const qs = [['Q1', 'Family', '40 marks'], ['Q2', 'Education', '40 marks'], ['Q3', 'Crime, deviance and social control', '40 marks']];
  qs.forEach(([q, n, m], i) => {
    const x = 30 + i * 285;
    b += panel(x, Y, 270, 150, i < 2 ? C.cream : C.panel, i < 2 ? C.olive : C.panelEdge) + badge(x + 40, Y + 44, 24, q.slice(1), i < 2 ? C.mustard : C.cream);
    const ls = wrap(n, 170, 19, 700);
    b += ls.map((l, k) => T(x + 78, Y + 50 - ((ls.length - 1) * 23) / 2 + k * 23, l, { size: 19, weight: 700 })).join('');
    b += T(x + 24, Y + 112, m + ' · parts (a)–(f)', { size: 16, fill: C.muted });
  });
  b += T(450, Y + 186, 'Answer any 2 of the 3, e.g. Family and Education', { size: 19, weight: 700, anchor: 'middle' });
  const n = note(Y + 210, 'Cambridge expects centres to teach two of the three topics. Decide your two early; a working knowledge of the third is only a safety net.');
  b += n.s;
  add('07-paper-2-structure',
    svg(900, Y + 210 + n.h + 30, 'Paper 2: three fixed questions, answer two', b),
    'Question 1 is always Family, Question 2 Education and Question 3 Crime, deviance and social control; each is worth 40 marks with parts (a) to (f). Candidates answer two of the three.',
    'Each question is fixed to one topic, so choose your two topics early.',
    '## How to approach it');
}

// 08 Three-column perspectives table
add('08-perspectives-table',
  compose('Your three-column table: one mechanism per cell', [
    (y) => table(y, ['', 'Functionalist', 'Marxist', 'Feminist'], [
      ['Family', '“Warm bath” theory: emotional stabilisation', 'Family as a unit of consumption', 'Joint vs segregated conjugal roles; domestic division of labour'],
      ['Education', 'Meritocracy and role allocation', 'Reproduces class inequality via cultural capital; myth of meritocracy', 'Patriarchal curriculum; gendered subject choice'],
    ], [150, 230, 230, 230], { size: 17 }),
    (y) => note(y, 'Name the mechanism, not a generic claim such as “Marxists think education benefits the rich”.'),
  ]),
  'A table with Family and Education as rows and functionalist, Marxist and feminist as columns. Family: warm bath theory, unit of consumption, conjugal roles and domestic division of labour. Education: meritocracy and role allocation, cultural capital and the myth of meritocracy, patriarchal curriculum and gendered subject choice.',
  'Fill every cell with a specific mechanism; the table transfers straight into exam answers.',
  '## How to approach it');
