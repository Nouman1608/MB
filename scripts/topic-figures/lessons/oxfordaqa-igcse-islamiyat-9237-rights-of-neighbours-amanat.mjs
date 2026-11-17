import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-islamiyat-9237-rights-of-neighbours-amanat';
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

const box = (x, y, w, h, text, o = {}) => card(x, y, w, { title: text, align: 'middle', minH: h, vcenter: true, tsize: o.tsize ?? 18, fill: o.fill ?? C.panel, edge: o.edge ?? C.ink, tfill: o.tfill ?? C.ink, pad: o.pad ?? 12 }).s;
// Vertical timeline: events [{date, title, body, hl}]. Returns {s,h}.
function timeline(y, events, o = {}) {
  const dx = o.dateW ?? 150, lx = 30 + dx + 26; let s = '', cy = y;
  const mids = [];
  events.forEach((ev) => {
    const c = card(lx + 30, cy, 870 - lx - 30, { title: ev.title, body: ev.body, tsize: o.tsize ?? 19, size: o.size ?? 16, pad: 14, fill: ev.hl ? C.cream : C.panel, edge: ev.hl ? C.olive : C.panelEdge });
    const m = cy + c.h / 2; mids.push(m);
    s += c.s + `<circle cx="${lx}" cy="${m}" r="11" fill="${ev.hl ? C.mustard : C.teal}" stroke="${C.ink}" stroke-width="3"/>` + T(lx - 24, m + 7, ev.date, { size: o.dsize ?? 19, weight: 700, anchor: 'end', fill: C.tealDark });
    cy += c.h + (o.gap ?? 12);
  });
  const line = `<line x1="${lx}" y1="${mids[0]}" x2="${lx}" y2="${mids[mids.length - 1]}" stroke="${C.ink}" stroke-width="4"/>`;
  return { s: line + s, h: cy - y - (o.gap ?? 12) };
}
// Two columns of bulleted cards side by side with headers. Returns {s,h}.
function twoCol(y, L, R, o = {}) {
  return row(y, [
    { title: L.title, body: L.items, bullets: L.bullets ?? true, fill: L.fill ?? C.tealLight, edge: L.edge ?? C.tealDark, tfill: L.tfill ?? C.tealDark, bfill: C.ink },
    { title: R.title, body: R.items, bullets: R.bullets ?? true, fill: R.fill ?? C.cream, edge: R.edge ?? C.olive, tfill: R.tfill ?? C.olive, bfill: C.ink },
  ], { gap: o.gap ?? 24, card: { size: o.size ?? 17, tsize: o.tsize ?? 21 } });
}
// ---- end helpers ----

// ---- lesson figures ----

// 01 Teaching -> social impact
add('01-teaching-to-impact',
  compose('Every answer has two parts', [
    (y) => row(y, [
      { kicker: 'PART 1', title: 'What the source teaches', body: 'A verse or Hadith on neighbours, amanah, backbiting, arrogance or jealousy', fill: C.tealLight, edge: C.tealDark, kfill: C.tealDark },
      { kicker: 'PART 2', title: 'What difference it makes in society', body: 'Safer streets, trust, equality, contentment', fill: C.cream, edge: C.olive, kfill: C.olive },
    ], { arrows: true, gap: 50, card: { size: 17, tsize: 20, bfill: C.ink } }),
    (y) => table(y, ['Topic', 'Key source', 'Social impact'], [
      ['Neighbours', '“One whose neighbour does not feel safe from his evil” (Bukhari 6016)', 'Safe, trusting streets; barriers between communities broken down'],
      ['Amanat', '“Render trusts to whom they are due” (4:58)', 'People can rely on each other'],
      ['Backbiting', 'Like eating the flesh of a dead brother (49:12)', 'Trust, friendships and reputations protected'],
      ['Arrogance', 'An atom’s weight of arrogance keeps one from Paradise (Muslim)', 'Equality; easy to approach and fair'],
      ['Jealousy', '“Do not envy one another” (Muslim)', 'Contentment instead of hatred and harm'],
    ], [160, 370, 310], { size: 15 }),
  ]),
  'Answers need two parts: what the source teaches and what difference it makes in society. A table gives a key source and social impact for neighbours, amanat, backbiting, arrogance and jealousy.',
  '“Social impact” questions need the effect on society, not just the teaching.',
  '## What "social impact" means');

// 02 Rights of neighbours
add('02-rights-of-neighbours',
  compose('The rights of neighbours', [
    (y) => card(30, y, 840, { kicker: 'SAHIH AL-BUKHARI 6016: THE PRESCRIBED PASSAGE', title: '“By Allah, he does not believe!” (three times) … “One whose neighbour does not feel safe from his evil.”', fill: C.cream, edge: C.olive, kfill: C.olive, tsize: 18, align: 'middle' }),
    (y) => {
      const items = [
        ['Safety from harm', 'No noise, rubbish, aggressive parking or threats'],
        ['Kindness and gifts', 'Sharing food, especially on Eid'],
        ['Help in need', 'Visiting when ill, helping in emergencies, lending small items'],
        ['Respect for privacy', 'Not looking into their home or spreading their affairs'],
        ['Patience', 'Bearing minor annoyances rather than retaliating'],
      ].map(([ti, b], i) => ({ title: ti, body: b, fill: i === 0 ? C.mustard : C.tealLight, edge: i === 0 ? C.ink : C.tealDark, bfill: C.ink }));
      const a = row(y, items.slice(0, 3), { card: { size: 16, tsize: 19 }, gap: 14 });
      const b = row(y + a.h + 14, items.slice(3), { card: { size: 16, tsize: 19 }, gap: 14 });
      return { s: a.s + b.s, h: a.h + 14 + b.h };
    },
    (y) => note(y, 'Qur’an 4:36 names “the near neighbour, the neighbour farther away”. Many scholars include non-Muslim neighbours. Jibril (AS) advised about the neighbour so often the Prophet (pbuh) thought he would be made an heir.'),
  ]),
  'The prescribed Bukhari Hadith links faith to the neighbour’s safety. Five rights follow: safety from harm, kindness and gifts, help in need, respect for privacy and patience. A note cites Qur’an 4:36 and the Hadith about Jibril (AS) advising on neighbours.',
  'Safety is the minimum right: faith is linked to how a neighbour is treated.',
  '## The rights of neighbours');

// 03 Amanah hub
add('03-forms-of-amanah',
  compose('Amanah: more than money', [
    (y) => hub(y, 'Amanah: anything placed in a person’s care', [
      { title: 'Goods left for safekeeping', body: 'Ali (RA) returned them on the night of the Hijrah, even to enemies' },
      { title: 'Secrets', body: 'Confidential information' },
      { title: 'Job and working time' },
      { title: 'Public office and money' },
      { title: 'Body and abilities', body: 'Trusts from Allah' },
      { title: 'The neighbour’s safety', body: 'Their privacy and reputation' },
    ], { cardW: 280, r: 105, csize: 17 }),
    (y) => note(y, '“Render trusts to whom they are due” (4:58). Signs of a hypocrite: he lies, breaks promises and betrays a trust (Bukhari). The Prophet (pbuh) was called al-Amin, the trustworthy.'),
  ]),
  'Forms of amanah around a centre: goods left for safekeeping, as Ali (RA) returned on the night of the Hijrah, secrets, one’s job, public office and money, one’s body and abilities, and the neighbour’s safety, privacy and reputation. A note gives Qur’an 4:58 and the signs of a hypocrite.',
  'Amanah includes secrets, jobs, promises and responsibilities, not only money.',
  '## Amanat: trust');

// 04 Backbiting vs slander
{
  const Y = 110;
  let s = box(250, Y, 400, 70, 'Saying about someone what they would dislike', { fill: C.panel, tsize: 18 });
  s += arrow(360, Y + 74, 230, Y + 118) + arrow(540, Y + 74, 670, Y + 118);
  s += T(258, Y + 92, 'if true', { size: 17, weight: 700, anchor: 'end', fill: C.olive }) + T(642, Y + 92, 'if not true', { size: 17, weight: 700, fill: C.rust });
  const r = row(Y + 124, [
    { title: 'Backbiting (ghibah)', body: 'Wrong even when true', fill: C.cream, edge: C.olive, tfill: C.olive },
    { title: 'Slander (buhtan)', body: 'A lie about the person', fill: C.panel, edge: C.rust, tfill: C.rust },
  ], { gap: 60, card: { size: 17, tsize: 21, align: 'middle', bfill: C.ink } });
  s += r.s;
  const y2 = Y + 124 + r.h + 18;
  const c = card(30, y2, 840, { title: 'Qur’an 49:12', body: '“Do not spy or backbite each other. Would one of you like to eat the flesh of his brother when dead? You would detest it.”', fill: C.tealLight, edge: C.tealDark, tfill: C.tealDark, size: 17, bfill: C.ink });
  s += c.s;
  const r2 = row(y2 + c.h + 14, [
    { title: 'Do', body: 'Defend the absent person; do not listen with approval' },
    { title: 'Limited exceptions', body: 'Reporting wrongdoing to someone who can stop it; honest warning when asked about marriage or business' },
  ], { card: { size: 16, tsize: 19, bfill: C.ink } });
  s += r2.s;
  add('04-backbiting-or-slander',
    svg(900, y2 + c.h + 14 + r2.h + 30, 'Backbiting or slander?', s),
    'Saying about someone what they would dislike is backbiting if it is true and slander if it is not. Qur’an 49:12 compares backbiting to eating a dead brother’s flesh. Muslims should defend the absent person; scholars allow limited exceptions such as reporting wrongdoing or giving an honest warning when asked.',
    'Backbiting is wrong even when it is true.',
    '## The prohibition of backbiting (ghibah)');
}

// 05 Arrogance
add('05-arrogance-humility',
  compose('Arrogance (kibr) and humility', [
    (y) => card(30, y, 840, { kicker: 'THE FIRST SIN', title: 'Iblis refused to prostrate to Adam (AS): “I am better than him” (7:12)', fill: C.panel, edge: C.rust, kfill: C.rust, tsize: 19, align: 'middle' }),
    (y) => twoCol(y, { title: 'Arrogance is…', items: ['Rejecting the truth', 'Looking down on people', 'Walking “exultantly” and turning the cheek in contempt (31:18)', 'An atom’s weight keeps one from Paradise (Muslim)'], fill: C.panel, edge: C.rust, tfill: C.rust },
      { title: 'Arrogance is not…', items: ['Liking good clothes', '“Allah is beautiful and loves beauty” (Muslim)'], fill: C.tealLight, edge: C.tealDark, tfill: C.tealDark }, { size: 17 }),
    (y) => note(y, 'Arrogance divides people by wealth, race or status, the opposite of the equality shown in the rows of Salah and the white clothes of Hajj. Humility makes a Muslim approachable, open to correction and fair.', { title: 'Social impact' }),
  ]),
  'Arrogance began with Iblis refusing to prostrate to Adam (AS). Arrogance is rejecting the truth and looking down on people (Sahih Muslim; Qur’an 31:18); liking good clothes is not arrogance, because Allah is beautiful and loves beauty. Arrogance divides people; humility supports equality.',
  'Arrogance means rejecting truth and looking down on people, not liking good things.',
  '## The prohibition of arrogance (kibr)');

// 06 Hasad vs ghibtah
add('06-hasad-or-ghibtah',
  compose('Jealousy (hasad) or permitted envy (ghibtah)?', [
    (y) => card(30, y, 840, { title: 'You see a blessing someone else has…', fill: C.mustard, edge: C.ink, tsize: 20, align: 'middle' }),
    (y) => twoCol(y, { title: 'Hasad: forbidden', items: ['You want them to lose it', 'A quarrel with Allah’s decree', 'Leads to backbiting, hatred and harm', '“Do not envy one another” (Muslim); 113:5; 4:32'], fill: C.panel, edge: C.rust, tfill: C.rust },
      { title: 'Ghibtah: allowed', items: ['You wish for the same good without wanting them to lose it', 'The two cases: wealth spent rightly; wisdom used to judge and teach (Bukhari)'], fill: C.tealLight, edge: C.tealDark, tfill: C.tealDark }, { size: 17 }),
    (y) => note(y, 'The cure: contentment, gratitude and du’a for the other person.'),
  ]),
  'When seeing another’s blessing, hasad wants them to lose it, resents Allah’s decree and leads to hatred; it is forbidden. Ghibtah wishes for the same good without wanting them to lose it, as in the Hadith of the two cases of wealth spent rightly and wisdom; it is allowed. The cure is contentment, gratitude and du’a.',
  'Wishing for the same blessing is allowed; wishing someone to lose it is not.',
  '## The prohibition of jealousy (hasad)');
