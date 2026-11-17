import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-cambridge-sociology-research-approaches-data-and-investigation';
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

function compareRows(y, leftHead, rightHead, rows, o = {}) {
  let s = T(195, y + 22, leftHead, { size: 21, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(705, y + 22, rightHead, { size: 21, weight: 700, anchor: 'middle', fill: C.olive });
  let cy = y + 40;
  rows.forEach(([lab, l, r]) => {
    const a = card(30, cy, 330, { body: l, size: 17, pad: 14, bfill: C.ink, fill: C.tealLight, edge: C.tealDark, align: 'middle' });
    const b = card(540, cy, 330, { body: r, size: 17, pad: 14, bfill: C.ink, fill: C.cream, edge: C.olive, align: 'middle' });
    const h = Math.max(a.h, b.h);
    s += card(30, cy, 330, { body: l, size: 17, pad: 14, bfill: C.ink, fill: C.tealLight, edge: C.tealDark, align: 'middle', minH: h, vcenter: true }).s;
    s += card(540, cy, 330, { body: r, size: 17, pad: 14, bfill: C.ink, fill: C.cream, edge: C.olive, align: 'middle', minH: h, vcenter: true }).s;
    s += `<rect x="378" y="${cy + h / 2 - 19}" width="144" height="38" rx="19" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + T(450, cy + h / 2 + 6, lab, { size: 16, weight: 700, anchor: 'middle' });
    s += `<line x1="360" y1="${cy + h / 2}" x2="378" y2="${cy + h / 2}" stroke="${C.ink}" stroke-width="2.5"/><line x1="522" y1="${cy + h / 2}" x2="540" y2="${cy + h / 2}" stroke="${C.ink}" stroke-width="2.5"/>`;
    cy += h + (o.gap ?? 12);
  });
  return { s, h: cy - y - (o.gap ?? 12) };
}

// 01 Positivism vs interpretivism
add('01-positivism-vs-interpretivism',
  compose('Two approaches to studying society', [
    (y) => compareRows(y, 'Positivist', 'Interpretivist', [
      ['View', 'Macro: social facts shape individuals', 'Micro: built from interactions and meanings'],
      ['Aim', 'Patterns, trends, causation and correlation', 'Meanings and motivations in depth'],
      ['Model', 'Scientific method: hypothesis, measurement, testing', 'Verstehen: empathetic understanding (Weber)'],
      ['Data', 'Quantitative', 'Qualitative'],
      ['Values', 'Objectivity and reliability', 'Validity'],
      ['Weakness', 'Misses meaning; imposes the researcher’s categories', 'Subjective; hard to repeat or generalise'],
    ]),
    (y) => card(30, y, 840, { kicker: 'CLASSIC POSITIVIST STUDY', title: 'Durkheim, Suicide (1897)', body: 'Compared official suicide rates across countries and religious groups; social integration and regulation explained the differences. Interpretivists reply that the statistics depend on how officials interpret deaths.', kfill: C.olive, fill: C.cream, edge: C.olive, tsize: 19, size: 16 }),
  ]),
  'Positivist and interpretivist approaches compared on view, aim, model, data, what they value and their weakness. Durkheim’s Suicide (1897) is the classic positivist study; interpretivists reply that suicide statistics depend on how officials interpret deaths.',
  'Positivists seek reliable patterns and causes; interpretivists seek valid meanings.',
  '## How do positivists and interpretivists study society? (1.1)');

// 02 Correlation vs causation
{
  const Y = 110;
  let b = '';
  const pair = (x, title, sub, link, col, mk, lab) => {
    let s = panel(x, Y, 410, 260) + T(x + 205, Y + 38, title, { size: 21, weight: 700, anchor: 'middle', fill: col }) + T(x + 205, Y + 64, sub, { size: 16, anchor: 'middle', fill: C.muted });
    s += card(x + 20, Y + 110, 140, { title: 'Poverty', align: 'middle', minH: 70, vcenter: true, fill: C.tealLight, edge: C.tealDark }).s;
    s += card(x + 250, Y + 110, 140, { title: 'Low exam results', align: 'middle', minH: 70, vcenter: true, fill: C.cream, edge: C.olive, tsize: 17 }).s;
    s += link + T(x + 205, Y + 230, lab, { size: 16, anchor: 'middle', fill: col, weight: 600 });
    return s;
  };
  b += pair(30, 'Correlation', 'two things vary together', `<line x1="${196}" y1="${Y + 145}" x2="${274}" y2="${Y + 145}" stroke="${C.tealDark}" stroke-width="4" stroke-dasharray="8 6"/>`, C.tealDark, '', 'found together');
  b += pair(460, 'Causation', 'one produces the other', arrow(626, Y + 145, 704, Y + 145, { w: 5, color: C.rust, marker: 'ahR' }) + T(665, Y + 130, '?', { size: 26, weight: 700, anchor: 'middle', fill: C.rust }), C.rust, '', 'not proved by correlation alone');
  const n = note(Y + 280, 'A correlation between poverty and low exam results does not on its own prove that poverty causes them.');
  b += n.s;
  add('02-correlation-causation',
    svg(900, Y + 280 + n.h + 30, 'Correlation is not causation', b),
    'Two panels. Correlation: poverty and low exam results are found together, shown with a dashed link. Causation: an arrow from poverty to low exam results with a question mark, because a correlation alone does not prove one causes the other.',
    'Finding two things together does not prove one causes the other.',
    '## How do positivists and interpretivists study society? (1.1)');
}

// 03 Triangulation and longitudinal studies
{
  const Y = 110;
  let b = panel(30, Y, 410, 360) + panel(460, Y, 410, 360);
  b += T(55, Y + 38, 'Triangulation', { size: 22, weight: 700 }) + T(55, Y + 62, 'More than one method cross-checks findings', { size: 16, fill: C.muted });
  b += card(70, Y + 100, 330, { kicker: 'STEP 1', title: 'Questionnaire', body: 'many respondents', align: 'middle', fill: C.tealLight, edge: C.tealDark, kfill: C.tealDark, size: 16 }).s;
  b += arrow(235, Y + 200, 235, Y + 232);
  b += card(70, Y + 240, 330, { kicker: 'STEP 2', title: 'Interviews', body: 'with some of those respondents', align: 'middle', fill: C.cream, edge: C.olive, kfill: C.olive, size: 16 }).s;
  b += T(485, Y + 38, 'Longitudinal study', { size: 22, weight: 700 }) + T(485, Y + 62, 'The same group studied repeatedly over time', { size: 16, fill: C.muted });
  const P = (x, y, k, op = 1) => `<g opacity="${op}"><circle cx="${x}" cy="${y - 14 * k}" r="${8 * k}" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/><rect x="${x - 10 * k}" y="${y - 4 * k}" width="${20 * k}" height="${22 * k}" rx="${7 * k}" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/></g>`;
  b += arrow(490, Y + 250, 850, Y + 250, { w: 4 }) + T(850, Y + 236, 'time', { size: 16, anchor: 'end', fill: C.muted });
  [1.0, 1.3, 1.6].forEach((k, i) => {
    const x = 540 + i * 120;
    b += P(x - 22, Y + 210 - 20 * k, k) + (i < 2 ? P(x + 22, Y + 210 - 20 * k, k) : '') + `<circle cx="${x}" cy="${Y + 250}" r="7" fill="${C.ink}"/>`;
  });
  b += `<circle cx="802" cy="${Y + 166}" r="22" fill="none" stroke="${C.rust}" stroke-width="2.5" stroke-dasharray="4 3"/>` + T(802, Y + 132, 'attrition', { size: 15, fill: C.rust, anchor: 'middle', weight: 600 });
  b += T(485, Y + 108, '+ shows change and sequence', { size: 17, weight: 600, fill: C.tealDark });
  b += T(485, Y + 286, '− expensive; people drop out', { size: 17, weight: 600, fill: C.rust });
  b += tl(485, Y + 316, ['British birth cohort studies: people born in', 'a single week (e.g. 1958, 1970), followed for life'], { size: 15, fill: C.muted, italic: true }, 20);
  add('03-triangulation-longitudinal',
    svg(900, Y + 360 + 30, 'Two ways to combine and extend research', b),
    'Left: triangulation, a questionnaire followed by interviews with some respondents to cross-check findings. Right: a longitudinal study following the same group over time, as in the British birth cohort studies; it shows change but is expensive and people drop out (attrition).',
    'Triangulation cross-checks findings; longitudinal studies follow the same people over time.',
    '## Can researchers combine approaches? (1.1.3)');
}

// 04 Research design stages
add('04-research-design-stages',
  compose('Seven stages of research design', [
    (y) => steps(y, [
      { title: 'Selection of topic', body: 'Influenced by interest, funding, theory' },
      { title: 'Aims', body: 'What the research wants to find out' },
      { title: 'Hypothesis', body: 'A testable prediction (mainly positivist)' },
      { title: 'Target population', body: 'The group the research is about' },
      { title: 'Methods', body: 'Chosen to fit the aims and approach' },
      { title: 'Operationalisation', body: 'Turning concepts into measurable indicators, e.g. social class measured by occupation' },
      { title: 'Pilot study', body: 'A small trial to test questions and procedures' },
    ], { highlight: 5, size: 16, tsize: 19, gap: 10 }),
  ]),
  'Seven numbered stages: selection of topic, aims, hypothesis, target population, methods, operationalisation (such as measuring social class by occupation) and a pilot study to test questions and procedures.',
  'Research design runs from choosing a topic to piloting the questions.',
  '## What are the stages in research design? (1.3.1)');

// 05 Sampling techniques
{
  const Y = 110;
  let b = card(30, Y, 840, { title: 'Sampling frame = the list.  Technique = how people are picked from it.', body: 'e.g. a school register or electoral roll is a sampling frame. Do not confuse the two.', fill: C.cream, edge: C.olive, tsize: 18, size: 16, align: 'middle', bfill: C.ink }).s;
  const N = 20, dx = 44, gx = 400;
  const grp = (i) => (i % 5 === 1 || i % 5 === 3 ? 1 : 0); // 8 of 20 in group B
  const dot = (i, x, y, sel, fillOverride) => {
    const f = fillOverride || (grp(i) ? C.sand : C.tealLight);
    return `<circle cx="${x}" cy="${y}" r="14" fill="${sel ? (grp(i) ? C.mustard : C.tealDark) : f}" stroke="${C.ink}" stroke-width="${sel ? 3 : 1.5}"/>`;
  };
  const pos = (i, y) => [gx + (i % 10) * dx, y + 34 + Math.floor(i / 10) * 40];
  const tech = [
    ['Random', 'Everyone has an equal chance', '+ avoids researcher bias', '− may miss small groups', [2, 7, 11, 14, 18]],
    ['Systematic', 'Every nth name on the list', '+ simple', '− hidden patterns in the list', [3, 7, 11, 15, 19]],
    ['Stratified', 'Divide by key characteristics, then sample in proportion', '+ representative', '− needs a detailed frame', [0, 4, 10, 1, 13]],
    ['Snowball', 'Participants recruit others', '+ reaches hidden groups', '− unrepresentative', [1, 13, 5, 17, 9]],
    ['Quota', 'Interviewer fills set numbers of each type', '+ quick', '− interviewer chooses who: bias', [0, 1, 2, 3, 4]],
  ];
  let y = Y + 110;
  tech.forEach(([name, how, plus, minus, sel], ti) => {
    const H = 128;
    b += panel(30, y, 840, H);
    b += T(50, y + 32, name, { size: 20, weight: 700 });
    const hl = wrap(how, 320, 15); b += hl.map((l, k) => T(50, y + 54 + k * 19, l, { size: 15, fill: C.muted })).join('');
    b += T(50, y + 54 + hl.length * 19 + 4, plus, { size: 15, fill: C.tealDark, weight: 600 }) + T(50, y + 54 + hl.length * 19 + 24, minus, { size: 15, fill: C.rust, weight: 600 });
    for (let i = 0; i < N; i++) { const [px, py] = pos(i, y); b += dot(i, px, py, sel.includes(i)); }
    if (name === 'Snowball') for (let k = 0; k < sel.length - 1; k++) { const [a1, a2] = pos(sel[k], y), [c1, c2] = pos(sel[k + 1], y); const L = Math.hypot(c1 - a1, c2 - a2); b += arrow(a1 + (c1 - a1) / L * 16, a2 + (c2 - a2) / L * 16, c1 - (c1 - a1) / L * 18, c2 - (c2 - a2) / L * 18, { w: 3, color: C.rust, marker: 'ahR' }); }
    if (name === 'Systematic') b += T(gx + 4.5 * dx, y + 120, 'every 4th', { size: 15, anchor: 'middle', fill: C.muted });
    if (name === 'Stratified') b += T(gx + 4.5 * dx, y + 120, 'same 3 : 2 mix as the population', { size: 15, anchor: 'middle', fill: C.muted });
    if (name === 'Quota') b += T(gx + 4.5 * dx, y + 120, 'quota filled with the first people found', { size: 15, anchor: 'middle', fill: C.muted });
    if (name === 'Random') b += T(gx + 4.5 * dx, y + 120, 'picked by chance', { size: 15, anchor: 'middle', fill: C.muted });
    if (name === 'Snowball') b += T(gx + 4.5 * dx, y + 120, 'each person recruits the next', { size: 15, anchor: 'middle', fill: C.muted });
    y += H + 12;
  });
  b += `<circle cx="300" cy="${y + 16}" r="11" fill="${C.tealDark}" stroke="${C.ink}" stroke-width="3"/><circle cx="326" cy="${y + 16}" r="11" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + T(346, y + 22, 'chosen for the sample (two groups shown by colour)', { size: 16 });
  add('05-sampling-techniques',
    svg(900, y + 50, 'Five ways to pick a sample', b),
    'A sampling frame is the list; a technique is how people are picked from it. Five rows of twenty dots show each technique: random picks by chance, systematic picks every fourth, stratified keeps the same mix of groups as the population, snowball follows a chain of recruits, and quota fills set numbers with the first people found.',
    'Each technique picks people from the list in a different way, with different risks of bias.',
    '## How do sociologists choose a sample? (1.3.2)');
}

// 06 Primary methods
{
  const Y = 110;
  let b = '';
  const q = card(30, Y, 410, { kicker: 'SURVEYS AND QUESTIONNAIRES', title: 'Reach many people', body: ['Open', 'Closed', 'Multiple choice', 'Scaled (“strongly agree” to “strongly disagree”)'], bullets: true, kfill: C.tealDark, fill: C.tealLight, edge: C.tealDark, tsize: 19, size: 16 });
  const ih = Math.max(q.h, 256);
  b += card(30, Y, 410, { kicker: 'SURVEYS AND QUESTIONNAIRES', title: 'Types of question', body: ['Open', 'Closed', 'Multiple choice', 'Scaled (“strongly agree” to “strongly disagree”)'], bullets: true, kfill: C.tealDark, fill: C.tealLight, edge: C.tealDark, tsize: 19, size: 16, minH: ih }).s;
  b += panel(460, Y, 410, ih) + T(480, Y + 33, 'INTERVIEWS', { size: 15, weight: 700, fill: C.olive }) + T(480, Y + 58, 'From fixed to free', { size: 19, weight: 700 });
  b += `<line x1="500" y1="${Y + 110}" x2="830" y2="${Y + 110}" stroke="${C.ink}" stroke-width="4" marker-end="url(#ah)" marker-start="url(#ah)"/>`;
  [['Structured', 'fixed questions', 510], ['Semi-', 'structured', 665], ['Unstructured', 'conversational', 820]].forEach(([a, c, x], i) => { b += `<circle cx="${x}" cy="${Y + 110}" r="9" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x, Y + 143, a, { size: 16, weight: 700, anchor: i === 0 ? 'start' : i === 2 ? 'end' : 'middle' }) + T(x, Y + 163, c, { size: 15, fill: C.muted, anchor: i === 0 ? 'start' : i === 2 ? 'end' : 'middle' }); });
  b += T(480, Y + 192, '+ group interviews', { size: 16, weight: 600 }) + tl(480, Y + 214, ['Venkatesh, Gang Leader for a Day (2008):', 'depth from conversation and observation'], { size: 15, fill: C.muted, italic: true }, 19);
  const y2 = Y + ih + 20;
  b += panel(30, y2, 840, 250) + T(50, y2 + 33, 'OBSERVATIONS', { size: 15, weight: 700, fill: C.rust }) + T(50, y2 + 58, 'Two choices: take part or not? Open or hidden?', { size: 19, weight: 700 });
  const gx = 300, gw = 270, gh = 70;
  b += T(gx + gw / 2, y2 + 94, 'Overt (people know)', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(gx + gw * 1.5, y2 + 94, 'Covert (hidden)', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
  b += T(gx - 14, y2 + 148, 'Participant', { size: 16, weight: 700, anchor: 'end' }) + T(gx - 14, y2 + 218, 'Non-participant', { size: 16, weight: 700, anchor: 'end' });
  const cells = [['joins in openly', C.tealLight], ['joins in secretly', C.cream], ['watches openly', C.tealLight], ['watches unseen', C.cream]];
  cells.forEach(([tx, f], i) => { const x = gx + (i % 2) * gw, yy = y2 + 108 + Math.floor(i / 2) * gh; b += `<rect x="${x}" y="${yy}" width="${gw - 8}" height="${gh - 8}" rx="10" fill="${f}" stroke="${C.ink}" stroke-width="2"/>` + T(x + (gw - 8) / 2, yy + 38, tx, { size: 16, anchor: 'middle' }); });
  add('06-primary-methods',
    svg(900, y2 + 250 + 30, 'Primary methods and their types', b),
    'Questionnaires use open, closed, multiple-choice and scaled questions. Interviews range from structured with fixed questions to unstructured and conversational, plus group interviews. Observations are participant or non-participant and overt or covert, giving four combinations.',
    'Each primary method comes in types: know which type you would use and why.',
    '## Which primary methods can be used? (1.3.3 and 1.3.4)');
}

// 07 Issues affecting research
add('07-research-issues',
  compose('What affects research choices?', [
    (y) => row(y, [
      { kicker: 'THEORETICAL', title: 'Researcher perspective', body: 'Positivist or interpretivist', kfill: C.tealDark, fill: C.tealLight, edge: C.tealDark },
      { kicker: 'PRACTICAL', title: 'Can it be done?', body: ['Access to the sample', 'Response rate', 'Funding and cost', 'Time'], bullets: true, kfill: C.olive, fill: C.cream, edge: C.olive },
      { kicker: 'ETHICAL', title: 'Is it right?', body: ['Informed consent', 'Privacy and confidentiality', 'Deception', 'Prevention of harm', 'Legality'], bullets: true, kfill: C.rust, edge: C.rust },
    ], { gap: 16, card: { size: 16, tsize: 19 } }),
    (y) => row(y, [
      { title: 'Covert observation', body: 'Raises deception and consent issues' },
      { title: 'Researching young people', body: 'Needs parental consent' },
    ], { gap: 20, card: { size: 16, tsize: 18, fill: C.panel } }),
  ]),
  'Three groups of issues. Theoretical: the researcher’s positivist or interpretivist perspective. Practical: access, response rate, funding and time. Ethical: informed consent, privacy and confidentiality, deception, prevention of harm and legality. Covert observation raises deception and consent issues; young people need parental consent.',
  'Check every research plan for theoretical, practical and ethical issues.',
  '## What issues affect research? (1.3.5 and 1.3.6)');
