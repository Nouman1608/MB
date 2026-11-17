import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-islamiyat-9237-battles-badr-uhud-trench-khaibar-hunayn';
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

// 01 Numbers do not decide victory
{
  const Y = 110, x0 = 300, sc = 540 / 12000;
  const rows = [
    ['Badr, 624', [[313, 'Muslims about 313', C.teal], [1000, 'Makkans about 1,000', C.rock]], 'Victory', C.tealDark],
    ['Uhud, 625', [[700, 'Muslims about 700', C.teal], [3000, 'Quraysh about 3,000', C.rock]], 'Heavy losses after the archers left', C.rust],
    ['Trench, 627', [[10000, 'Confederates about 10,000', C.rock]], 'Siege failed; confederates withdrew', C.tealDark],
    ['Hunayn, 630', [[12000, 'Muslims about 12,000, the largest yet', C.teal]], 'Ambushed and many fled, then victory', C.olive],
  ];
  let s = '', cy = Y;
  rows.forEach(([nm, bars, out, oc]) => {
    s += T(30, cy + 26, nm, { size: 19, weight: 700 });
    bars.forEach(([v, lab, f], i) => {
      const w = Math.max(6, v * sc), y = cy + 6 + i * 34;
      s += `<rect x="${x0}" y="${y}" width="${w}" height="26" fill="${f}" stroke="${C.ink}" stroke-width="2"/>`;
      s += T(w > 330 ? x0 + 10 : x0 + w + 10, y + 19, lab, { size: 15, weight: 600 });
    });
    const bh = bars.length * 34;
    s += para(30, cy + 50, out, 250, { size: 15, weight: 700, fill: oc }).s;
    cy += Math.max(bh, 56) + 34;
  });
  s += `<line x1="${x0}" y1="${Y - 4}" x2="${x0}" y2="${cy - 30}" stroke="${C.ink}" stroke-width="2.5"/>`;
  const n = note(cy + 4, 'Badr: “Allah had given you victory at Badr while you were weak” (3:123). Hunayn: “When your great number pleased you, but it did not avail you at all” (9:25). Figures are the traditional, approximate ones given in the sources.', { title: 'Reliance on Allah, not numbers' });
  add('01-numbers-and-outcomes',
    svg(900, cy + 4 + n.h + 30, 'Army sizes and outcomes', s + n.s),
    'Bars of the approximate traditional army sizes: about 313 Muslims against about 1,000 Makkans at Badr, which was a victory; about 700 against about 3,000 at Uhud, with heavy losses; about 10,000 confederates at the Trench, whose siege failed; and about 12,000 Muslims at Hunayn, who were ambushed before winning.',
    'The smallest army won at Badr and the largest nearly lost at Hunayn.',
    '## Why the Muslims fought');
}

// 02 Badr
add('02-badr',
  compose('Badr, 624 CE', [
    (y) => row(y, [
      { kicker: 'CAUSE', title: 'A caravan and an army', body: 'Muslims went to intercept Abu Sufyan’s caravan; it escaped and a Makkan army marched out under Abu Jahl.' },
      { kicker: 'EVENTS', title: 'At the wells of Badr, in Ramadhan', body: 'The Ansar promised to follow the Prophet (pbuh) anywhere; he spent the night in prayer; single combat, then a decisive victory.' },
      { kicker: 'PRISONERS', title: 'Treated well', body: 'Some ransomed; literate captives could earn freedom by teaching Muslim children to read.' },
    ], { arrows: true, gap: 40, card: { size: 16, tsize: 18, bfill: C.ink } }),
    (y) => card(30, y, 840, { title: 'Importance', body: [
      'The Qur’an calls it the “day of criterion” (8:41), separating truth from falsehood',
      'Victory comes from Allah, not numbers (3:123); angels sent as reinforcement (8:9)',
      'Established the Muslims as a power in Arabia and raised morale',
      'Treatment of prisoners showed justice and the value of education',
    ], bullets: true, fill: C.cream, edge: C.olive, tfill: C.olive, bfill: C.ink, size: 17, tsize: 20 }),
  ]),
  'Badr in three steps: the Muslims set out to intercept a Makkan caravan, which escaped, and a Makkan army came out; at the wells of Badr in Ramadhan the Muslims won decisively; prisoners were treated well and literate captives could earn freedom by teaching. Below, four points of importance.',
  'Badr is the “day of criterion”: victory came from Allah, not numbers.',
  '## Badr (624 CE)');

// 03 Uhud: what went wrong
add('03-uhud-chain',
  compose('Uhud, 625 CE: how early success was lost', [
    (y) => steps(y, [
      { title: 'Consultation', body: 'The Prophet (pbuh) accepted the majority view and went out to Mount Uhud.' },
      { title: 'Withdrawal', body: 'Abdullah ibn Ubayy left with about a third of the army, leaving about 700.' },
      { title: 'A clear order', body: 'About fifty archers under Abdullah ibn Jubayr (RA): do not leave the hill, whatever happens.' },
      { title: 'Early success, then disobedience', body: 'Most archers left their post to collect spoils.' },
      { title: 'Attack from behind', body: 'Khalid ibn al-Walid led the cavalry round the hill; Hamza (RA) and about seventy Muslims were martyred.' },
    ], { highlight: 3, size: 16, tsize: 19, gap: 10 }),
    (y) => chips(y, ['Obedience', 'Greed breaks discipline', 'Hypocrisy exposed', 'Shura', 'Patience in defeat'], { fill: C.cream, edge: C.olive }),
  ]),
  'Five numbered steps at Uhud: consultation and going out to the mountain, the withdrawal of Abdullah ibn Ubayy, the order to the archers, most archers leaving the hill for spoils, and Khalid ibn al-Walid’s cavalry attacking from behind. Below, the lessons: obedience, greed, hypocrisy exposed, shura and patience.',
  'Uhud was lost through disobedience, not because the Muslims were outnumbered.',
  '## Uhud (625 CE)');

// 04 Trench schematic
{
  const Y = 110;
  let s = panel(30, Y, 500, 470);
  s += `<rect x="130" y="${Y + 256}" width="300" height="180" rx="12" fill="${C.cream}" stroke="${C.ink}" stroke-width="3"/>` + T(280, Y + 354, 'Madinah', { size: 22, weight: 700, anchor: 'middle' });
  s += `<path d="M110,${Y + 200} L450,${Y + 200}" stroke="${C.olive}" stroke-width="14" stroke-linecap="round"/>` + T(280, Y + 236, 'the trench, across the open northern side', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
    s += `<rect x="110" y="${Y + 40}" width="340" height="90" rx="12" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5"/>` + T(280, Y + 80, 'Confederates (al-Ahzab)', { size: 18, weight: 700, anchor: 'middle' }) + T(280, Y + 104, 'about 10,000', { size: 16, anchor: 'middle' });
  s += arrow(150, Y + 134, 150, Y + 182, { color: C.rust, marker: 'ahR' }) + arrow(410, Y + 134, 410, Y + 182, { color: C.rust, marker: 'ahR' });
  s += T(280, Y + 164, 'cavalry cannot cross', { size: 15, weight: 700, anchor: 'middle', fill: C.rust });
  s += T(495, Y + 50, 'N', { size: 20, weight: 700, anchor: 'middle' }) + arrow(495, Y + 100, 495, Y + 62, { w: 3 });
  const st = stack(Y, [
    { title: 'Salman al-Farsi’s idea', body: 'A Persian method unknown in Arabia' },
    { title: 'Leadership by example', body: 'The Prophet (pbuh) dug alongside the companions in hunger and cold' },
    { title: 'Siege of several weeks', body: 'Banu Qurayza broke their agreement; distrust grew among the allies' },
    { title: 'A fierce, cold wind (33:9)', body: 'Tore down their tents; the confederates withdrew', fill: C.tealLight, edge: C.tealDark },
  ], { x: 550, w: 320, gap: 12, card: { size: 15, tsize: 17, pad: 14 } });
  s += st.s;
  const H = Math.max(470, st.h);
  const n = note(Y + H + 16, 'The last great Makkan attack. It shows the value of consultation and of good ideas whatever their source.');
  add('04-trench-schematic',
    svg(900, Y + H + 16 + n.h + 30, 'The Trench (Ahzab), 627 CE', s + n.s),
    'A schematic, not to scale: a trench dug across the open northern side of Madinah stops the cavalry of about 10,000 confederates. Beside it: Salman al-Farsi’s idea, the Prophet (pbuh) digging with the companions, a siege of several weeks with the Banu Qurayza breaking their agreement, and a cold wind before the confederates withdrew.',
    'A Persian convert’s idea saved the city in the last great Makkan attack.',
    '## The Trench, or Ahzab (627 CE)');
}

// 05 Khaibar
add('05-khaibar',
  compose('Khaibar, 628 CE', [
    (y) => row(y, [
      { kicker: 'CAUSE', title: 'A threat from the north', body: 'A fortified oasis where leaders of the expelled Banu Nadir settled; it had supported the confederates.' },
      { kicker: 'EVENTS', title: 'Forts besieged one by one', body: 'Soon after Hudaibiyah. The flag was given to Hazrat Ali (RA), who captured the fort that held out (Bukhari).' },
      { kicker: 'TERMS', title: 'They stayed and farmed', body: 'The people of Khaibar kept the land, giving half the produce to the Muslims.' },
    ], { arrows: true, gap: 40, card: { size: 16, tsize: 18, bfill: C.ink } }),
    (y) => chips(y, ['Threat to Madinah removed', 'Mercy after victory', 'Economy of Madinah strengthened'], { fill: C.cream, edge: C.olive }),
  ]),
  'Khaibar in three steps: a fortified oasis that had supported the confederates was a threat from the north; soon after Hudaibiyah its forts were besieged and Hazrat Ali (RA) captured the one that held out; the people stayed and farmed, giving half the produce. Its importance: security, mercy and a stronger economy.',
  'Khaibar secured Madinah and showed mercy after victory.',
  '## Khaibar (628 CE)');

// 06 Hunayn
add('06-hunayn',
  compose('Hunayn, 630 CE: from near-rout to victory', [
    (y) => steps(y, [
      { title: 'Confidence in numbers', body: 'About 12,000, including many new Muslims from Makkah.' },
      { title: 'Ambush at dawn', body: 'In the valley of Hunayn; many fled.' },
      { title: 'The Prophet (pbuh) stood firm', body: 'He called out that he was the Prophet and the son of Abdul Muttalib (Bukhari).' },
      { title: 'Regrouping and victory', body: 'Hazrat Abbas (RA) called back the Ansar and the companions.' },
      { title: 'Generosity and mercy', body: 'Spoils shared with new Muslims; the Ansar reassured; captives returned to the Hawazin.' },
    ], { highlight: 2, size: 16, tsize: 19, gap: 10 }),
    (y) => note(y, '“When your great number pleased you, but it did not avail you at all” (9:25).'),
  ]),
  'Five steps at Hunayn: a large army of about 12,000 felt confident, was ambushed at dawn and many fled, the Prophet (pbuh) stood firm, Hazrat Abbas (RA) called the Ansar back and the Muslims won, then spoils were shared and captives returned. A note quotes 9:25.',
  'Reliance must be on Allah, not numbers: that is the lesson of Hunayn.',
  '## Hunayn (630 CE)');

// 07 Aam ul Wufood
add('07-aam-ul-wufood',
  compose('Aam ul Wufood: the Year of Delegations', [
    (y) => hub(y, 'Delegations come to Madinah, 630–631 CE', [
      { title: 'Thaqif of Ta’if', body: 'Who had once stoned the Prophet (pbuh)' },
      { title: 'Banu Tamim' },
      { title: 'Christians of Najran', body: 'Discussed beliefs; kept their religion under an agreement' },
      { title: 'Received with hospitality', body: 'In the mosque, and taught Islam' },
      { title: 'Teachers sent back', body: 'Companions as teachers and governors' },
      { title: 'Mu’adh ibn Jabal (RA)', body: 'Sent to Yemen' },
    ], { cardW: 280, r: 105, csize: 17 }),
    (y) => note(y, 'Most of Arabia accepted Islam peacefully, fulfilling Surah an-Nasr (110): “you see the people entering into the religion of Allah in multitudes”.', { title: 'Significance' }),
  ]),
  'Delegations came to Madinah in 630–631 CE, including the Thaqif of Ta’if, the Banu Tamim and Christians from Najran. They were received with hospitality and taught Islam, and companions such as Mu’adh ibn Jabal (RA) were sent back as teachers and governors. Most of Arabia accepted Islam peacefully.',
  'Aam ul Wufood is about peaceful acceptance of Islam, not a battle.',
  '## Aam ul Wufood: the Year of Delegations (630–631 CE)');
