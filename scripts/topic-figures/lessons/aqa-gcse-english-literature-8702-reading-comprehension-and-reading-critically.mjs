import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-english-literature-8702-reading-comprehension-and-reading-critically';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- Local layout helpers (copied from the Global Perspectives figure set; house style only) ----
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
    s += card(x, y, w, { ...o.card, ...it, minH: h, vcenter: o.vcenter ?? true }).s;
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
  s += T(215, by - d + 76, left.tag || '', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(685, by + d + 76, right.tag || '', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  const r1 = row(y + 165, [{ title: left.title, body: left.items, bullets: true, edge: C.tealDark, tfill: C.tealDark }, { title: right.title, body: right.items, bullets: true, edge: C.olive, tfill: C.olive }], { gap: 30, card: { size: o.size ?? 17 } });
  s += r1.s;
  let h = 165 + r1.h;
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
  const x1 = 70, x2 = 830, ly = y + (o.top ?? 120);
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
  const pts = nodes.map((_, i) => { const a = -Math.PI / 2 + (2 * Math.PI * i) / n; return [cx + rx * Math.cos(a), cy + ry * Math.sin(a), a]; });
  for (let i = 0; i < n; i++) {
    const a1 = pts[i][2] + (o.da ?? 0.42), a2 = pts[(i + 1) % n][2] - (o.da ?? 0.42);
    const p1 = [cx + rx * Math.cos(a1), cy + ry * Math.sin(a1)], p2 = [cx + rx * Math.cos(a2), cy + ry * Math.sin(a2)];
    arcs += `<path d="M${p1[0]},${p1[1]} A${rx},${ry} 0 0 1 ${p2[0]},${p2[1]}" fill="none" stroke="${C.tealDark}" stroke-width="4" marker-end="url(#ahT)"/>`;
  }
  let minY = Infinity, maxY = -Infinity;
  nodes.forEach((nd, i) => {
    const c0 = card(0, 0, cwid, { tsize: 18, size: 15, pad: 14, align: 'middle', ...nd });
    const x = Math.max(30, Math.min(870 - cwid, pts[i][0] - cwid / 2)), yy = pts[i][1] - c0.h / 2;
    s += card(x, yy, cwid, { tsize: 18, size: 15, pad: 14, align: 'middle', ...nd }).s;
    minY = Math.min(minY, yy); maxY = Math.max(maxY, yy + c0.h);
  });
  let centre = '';
  if (o.center) { const lines = wrap(o.center, 220, 20, 700); centre = lines.map((l, i) => T(cx, cy - ((lines.length - 1) * 25) / 2 + i * 25 + 7, l, { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark })).join(''); }
  const shift = y - minY;
  return { s: `<g transform="translate(0,${shift})">${arcs}${centre}${s}</g>`, h: maxY - minY };
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

// ---- English Literature extras ----
// Chip: rounded label sized to its text. Returns {s, w}.
function chip(x, y, s, o = {}) {
  const size = o.size ?? 16, weight = o.weight ?? 700, w = o.w ?? Math.round(cw(size, weight) * String(s).length + 26), h = o.h ?? size + 16;
  const xx = o.anchor === 'middle' ? x - w / 2 : o.anchor === 'end' ? x - w : x;
  return { s: `<rect x="${xx}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${o.fill || C.cream}" stroke="${o.edge || C.olive}" stroke-width="2.5"/>` + T(xx + w / 2, y + h / 2 + size * 0.36, s, { size, weight, anchor: 'middle', fill: o.ink || C.ink }), w, h };
}
// Simple stage figure (head + body), feet at (x, yF).
const pawn = (x, yF, fill = C.teal, k = 1) => `<path d="M${x - 17 * k},${yF} L${x - 12 * k},${yF - 52 * k} Q${x},${yF - 62 * k} ${x + 12 * k},${yF - 52 * k} L${x + 17 * k},${yF} Z" fill="${fill}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/><circle cx="${x}" cy="${yF - 72 * k}" r="${13 * k}" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>`;
// Page icon with ruled lines.
function page(x, y, w, h, o = {}) {
  let s = `<path d="M${x},${y} L${x + w - 22},${y} L${x + w},${y + 22} L${x + w},${y + h} L${x},${y + h} Z" fill="${o.fill || C.panel}" stroke="${o.edge || C.ink}" stroke-width="2.5" stroke-linejoin="round"/><path d="M${x + w - 22},${y} L${x + w - 22},${y + 22} L${x + w},${y + 22}" fill="${C.panelEdge}" stroke="${o.edge || C.ink}" stroke-width="2"/>`;
  const n = o.lines ?? Math.floor((h - 30) / 14);
  for (let i = 0; i < n; i++) { const lw = (w - 24) * (o.short && i === n - 1 ? 0.5 : (i % 3 === 2 ? 0.75 : 0.92)); s += `<line x1="${x + 12}" y1="${y + 30 + i * 14}" x2="${x + 12 + lw - (i === 0 ? 18 : 0)}" y2="${y + 30 + i * 14}" stroke="${o.lineColor || C.panelEdge}" stroke-width="5" stroke-linecap="round"/>`; }
  return s;
}
// Balance-scale icon centred at (cx, cy); tilt -1..1 (positive = right side lower).
function scaleIcon(cx, cy, tilt = 0, o = {}) {
  const d = tilt * 16, half = o.half ?? 60;
  const pan = (x, y, f) => `<line x1="${x}" y1="${y}" x2="${x - 24}" y2="${y + 34}" stroke="${C.ink}" stroke-width="2"/><line x1="${x}" y1="${y}" x2="${x + 24}" y2="${y + 34}" stroke="${C.ink}" stroke-width="2"/><path d="M${x - 32},${y + 34} L${x + 32},${y + 34} Q${x},${y + 52} ${x - 32},${y + 34} Z" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`;
  return `<path d="M${cx},${cy} L${cx - 18},${cy + 70} L${cx + 18},${cy + 70} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>` +
    `<line x1="${cx - half}" y1="${cy - d}" x2="${cx + half}" y2="${cy + d}" stroke="${C.ink}" stroke-width="5" stroke-linecap="round"/>` +
    pan(cx - half, cy - d, o.lf || C.teal) + pan(cx + half, cy + d, o.rf || C.cream) + `<circle cx="${cx}" cy="${cy}" r="7" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`;
}
const tick = (cx, cy, r = 15) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${C.tealDark}"/>` + path(`M${cx - r * 0.45},${cy + r * 0.02} l${r * 0.32},${r * 0.34} l${r * 0.6},${r * 0.66 * -1}`, { stroke: '#ffffff', w: 3.5 });
const cross = (cx, cy, r = 15) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${C.rust}"/>` + path(`M${cx - r * 0.4},${cy - r * 0.4} l${r * 0.8},${r * 0.8} m0,${-r * 0.8} l${-r * 0.8},${r * 0.8}`, { stroke: '#ffffff', w: 3.5 });
// ---- end extras ----

const rich = (x, y, segs, o = {}) => `<text x="${x}" y="${y}" font-size="${o.size ?? 18}" fill="${C.ink}" xml:space="preserve">` +
  segs.map(([s, k]) => `<tspan${k === 'hl' ? ` fill="${C.rust}" font-weight="700"` : k === 'it' ? ` font-style="italic" fill="${C.muted}"` : k === 'ithl' ? ` font-style="italic" fill="${C.rust}" font-weight="700"` : k === 'b' ? ' font-weight="700"' : ''}>${X(s)}</tspan>`).join('') + '</text>';

// 01 Four groups of reading skills and the AOs they map onto
{
  const Y = 110;
  const groups = [
    { n: '1', title: 'Literal and inferential comprehension', body: 'Words in context; plot, character, events, settings; explicit vs implied; motive, sequence and cause.' },
    { n: '2', title: 'Critical reading', body: 'Themes; a point of view with evidence; different responses; context; an informed personal response.' },
    { n: '3', title: 'Evaluating a writer’s choices', body: 'How language, structure, form and presentation contribute to quality and impact.' },
    { n: '4', title: 'Comparing texts', body: 'Theme, characterisation, context (where known), style and literary quality.' },
  ];
  const gw = 411, gh = 168;
  let s = '';
  groups.forEach((g, i) => {
    const x = 30 + (i % 2) * (gw + 18), y = Y + Math.floor(i / 2) * (gh + 16);
    s += panel(x, y, gw, gh, i === 2 ? C.cream : C.panel, i === 2 ? C.olive : C.panelEdge) + badge(x + 36, y + 40, 21, g.n, C.cream);
    s += para(x + 70, y + 46, g.title, gw - 90, { size: 19, weight: 700 }).s;
    const tl1 = wrap(g.title, gw - 90, 19, 700).length;
    s += para(x + 22, y + 46 + tl1 * 25 + 10, g.body, gw - 44, { size: 16, fill: C.muted }).s;
  });
  const y2 = Y + 2 * gh + 16 + 34;
  s += T(450, y2, 'How the skills map onto the assessment objectives', { size: 20, weight: 700, anchor: 'middle' });
  const aos = [
    ['AO1', 'comprehension and personal response (mostly)', C.teal, C.tealDark],
    ['AO2', 'analysis and evaluation of methods', C.cream, C.olive],
    ['AO3', 'context-informed evaluation', C.tealLight, C.tealDark],
  ];
  aos.forEach(([ao, txt, f, e], i) => {
    const y = y2 + 22 + i * 62;
    s += `<rect x="30" y="${y}" width="120" height="50" rx="10" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + T(90, y + 33, ao, { size: 22, weight: 700, anchor: 'middle' });
    s += arrow(158, y + 25, 205, y + 25, { w: 3 });
    s += panel(212, y, 658, 50) + T(232, y + 32, txt, { size: 18 });
  });
  const H = y2 + 22 + 3 * 62 + 10;
  add('01-reading-skills-map',
    svg(900, H, 'Four groups of reading skills', s),
    'Four cards show the reading skill groups: literal and inferential comprehension, critical reading, evaluating a writer’s choices, and comparing texts. Below, AO1 is linked mostly to comprehension and personal response, AO2 to analysis and evaluation of methods, and AO3 to context-informed evaluation.',
    'Four groups of reading skills sit behind every question; each feeds the assessment objectives.',
    '## What the specification covers');
}

// 02 Words in context and the evidence test
{
  const Y = 110;
  let s = panel(30, Y, 840, 250);
  s += T(54, Y + 40, 'Words in context: what does it mean here?', { size: 20, weight: 700 });
  // hub word
  s += `<rect x="70" y="${Y + 115}" width="150" height="64" rx="12" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + T(145, Y + 157, '“cold”', { size: 26, weight: 700, anchor: 'middle' });
  const mean = ['the weather', 'a character’s manner', 'a dead body'];
  mean.forEach((m, i) => {
    const y = Y + 66 + i * 58;
    s += path(`M222,${Y + 147} C270,${Y + 147} 270,${y + 22} 316,${y + 22}`, { w: 2.5 });
    s += `<rect x="318" y="${y}" width="230" height="44" rx="10" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + T(433, y + 29, m, { size: 17, anchor: 'middle' });
  });
  const qs = [['1', 'What does it mean here?'], ['2', 'What else might it suggest? (connotations)'], ['3', 'Older text? Meanings may have shifted: check glosses and the sentence around it.']];
  let qy = Y + 80;
  qs.forEach(([n, q]) => {
    s += badge(592, qy - 6, 16, n, C.cream);
    const p = para(618, qy, q, 230, { size: 16 });
    s += p.s; qy += p.h + 18;
  });
  // explicit vs implied
  const Y2 = Y + 274;
  s += panel(30, Y2, 400, 130, C.tealLight, C.tealDark) + T(54, Y2 + 40, 'Explicit', { size: 22, weight: 700, fill: C.tealDark }) + para(54, Y2 + 72, 'Stated directly in the words of the text.', 350, { size: 17 }).s;
  s += panel(470, Y2, 400, 130, C.cream, C.olive) + T(494, Y2 + 40, 'Implied', { size: 22, weight: 700, fill: C.olive }) + para(494, Y2 + 72, 'Suggested by details; you must infer it. Higher-level answers spend most time here.', 350, { size: 17 }).s;
  s += arrow(432, Y2 + 65, 466, Y2 + 65, { w: 3.5 });
  const Y3 = Y2 + 150;
  const n = note(Y3, 'Test every inference: could you point to the words that support it? If not, it is a guess. Ground each inference in something explicit.', { title: 'The evidence test' });
  s += n.s;
  add('02-words-in-context',
    svg(900, Y3 + n.h + 24, 'Reading a word, then reading beneath it', s),
    'The word cold branches into three meanings: the weather, a character’s manner and a dead body, with three questions to ask about any word. Below, explicit meaning (stated directly) leads to implied meaning (inferred from details), with a test: can you point to the words that support the inference?',
    'Pin down what a word means here, then infer only what the words can support.',
    '## Literal and inferential comprehension');
}

// 03 The inference ladder
{
  const steps4 = [
    { name: 'Detail', q: 'What exactly is written?', ex: 'Two places are set; one is cleared.' },
    { name: 'Literal meaning', q: 'What happens?', ex: 'She expected someone, then remembered they would not come.' },
    { name: 'Inference', q: 'What does it suggest about character or feeling?', ex: 'Habit and grief: she has recently lost someone.' },
    { name: 'Significance', q: 'How does it link to the text’s ideas?', ex: 'Loss is shown through routine, so grief becomes part of daily life.' },
  ];
  const base = 590, bw = 200, gap = 13, rise = 62;
  let s = '';
  steps4.forEach((st, i) => {
    const x = 30 + i * (bw + gap), top = base - 250 - i * rise;
    const hl = i === 3;
    s += `<rect x="${x}" y="${top}" width="${bw}" height="${base - top}" rx="12" fill="${hl ? C.cream : i === 0 ? C.tealLight : C.panel}" stroke="${hl ? C.olive : C.ink}" stroke-width="2.5"/>`;
    s += badge(x + 30, top + 34, 18, String(i + 1), hl ? C.mustard : C.cream) + T(x + 56, top + 41, st.name, { size: 18, weight: 700 });
    const qL = wrap(st.q, bw - 28, 16, 700), eL = wrap(st.ex, bw - 28, 16);
    s += qL.map((l, k) => T(x + 14, top + 84 + k * 21, l, { size: 16, weight: 700 })).join('');
    s += eL.map((l, k) => T(x + 14, top + 84 + qL.length * 21 + 12 + k * 21, l, { size: 16, fill: C.muted, italic: true })).join('');
  });
  const x2 = 30 + 1 * (bw + gap);
  s += `<rect x="${x2 + 14}" y="${base - 66}" width="${bw - 28}" height="52" rx="10" fill="${C.panel}" stroke="${C.rust}" stroke-width="2"/>` + T(x2 + bw / 2, base - 45, 'Most weak answers', { size: 15, weight: 700, anchor: 'middle', fill: C.rust }) + T(x2 + bw / 2, base - 26, 'stop here', { size: 15, weight: 700, anchor: 'middle', fill: C.rust });
  const x4 = 30 + 3 * (bw + gap);
  s += `<rect x="${x4 + 14}" y="${base - 66}" width="${bw - 28}" height="52" rx="10" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` + T(x4 + bw / 2, base - 45, 'Strong answers', { size: 15, weight: 700, anchor: 'middle' }) + T(x4 + bw / 2, base - 26, 'reach step 4', { size: 15, weight: 700, anchor: 'middle' });
  // anchor line back to step 1
  s += path(`M${30 + 3 * (bw + gap) + bw / 2},${base + 6} L${30 + 3 * (bw + gap) + bw / 2},${base + 32} L${30 + bw / 2},${base + 32}`, { w: 3, stroke: C.tealDark, extra: 'stroke-dasharray="9 7"' }) + arrow(30 + bw / 2, base + 32, 30 + bw / 2, base + 10, { color: C.tealDark, marker: 'ahT', w: 3 });
  s += T(450, base + 60, '…and stay anchored in the detail at step 1', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('03-inference-ladder',
    svg(900, base + 84, 'The inference ladder', s, '“She set two places at the table, then cleared one away.”'),
    'Four rising steps applied to one sentence. Detail: two places are set and one is cleared. Literal meaning: she expected someone, then remembered they would not come. Inference: habit and grief. Significance: loss is shown through routine. Weak answers stop at step 2; strong answers reach step 4 while staying anchored in step 1.',
    'Climb from detail to significance, and keep every step tied to the words.',
    '## Literal and inferential comprehension');
}

// 04 Weighing different readings
{
  const Y = 110;
  const st = steps(Y, [
    { title: 'State a reading', body: '“Some readers may see her silence as weakness.”' },
    { title: 'Offer an alternative', body: '“However, it could be read as resistance, since she refuses to give him the reaction he wants.”' },
    { title: 'Weigh them', body: '“The ending supports the second reading, because…”' },
  ], { highlight: 2, size: 17, tsize: 20 });
  const yb = Y + st.h + 20;
  const r = row(yb, [
    { title: 'Recognising readings', body: 'is credited', align: 'middle', fill: C.tealLight, edge: C.tealDark },
    { title: 'Evaluating readings', body: 'moves an answer higher', align: 'middle', fill: C.cream, edge: C.olive },
  ], { arrows: true, card: { tsize: 20, size: 17 } });
  const yn = yb + r.h + 18;
  const n = note(yn, 'Different audiences can respond differently too: an original audience and a modern one, or readers with different values.');
  add('04-weighing-readings',
    svg(900, yn + n.h + 24, 'Two readings, then a judgement', st.s + r.s + n.s),
    'Three numbered steps: state a reading (her silence as weakness), offer an alternative (her silence as resistance), and weigh them (the ending supports the second reading). Below, recognising readings is credited, but evaluating them moves an answer higher.',
    'Offering two readings is not enough: weigh them and decide.',
    '## Critical reading');
}

// 05 Analysis vs evaluation of a writer's choices
{
  const Y = 110;
  const r = row(Y, [
    { kicker: 'ANALYSIS', title: 'What does this choice do?', body: 'Explains the effect.', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'EVALUATION', kfill: C.olive, title: 'How well does it do it, and why does it matter?', body: ['Why is it effective here?', 'Is it more powerful than an alternative?', 'Does it work alongside other choices?'], bullets: true, fill: C.cream, edge: C.olive },
  ], { arrows: true, card: { tsize: 20, size: 17 } });
  let s = r.s;
  const y2 = Y + r.h + 40;
  s += T(450, y2, 'Grammatical features count too', { size: 20, weight: 700, anchor: 'middle' });
  const g = [['A passive verb', 'can hide who is responsible'], ['A list', 'can overwhelm'], ['A sudden short sentence', 'can shock']];
  g.forEach(([a, b], i) => {
    const y = y2 + 20 + i * 64;
    s += `<rect x="30" y="${y}" width="330" height="50" rx="10" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + T(195, y + 32, a, { size: 18, weight: 700, anchor: 'middle' });
    s += arrow(368, y + 25, 420, y + 25, { w: 3 }) + panel(428, y, 442, 50) + T(448, y + 32, b, { size: 18 });
  });
  const yn = y2 + 20 + 3 * 64 + 4;
  const n = note(yn, 'Use terminology to make evaluation precise, not as decoration. The specification asks about “quality and impact”.');
  s += n.s;
  add('05-analysis-to-evaluation',
    svg(900, yn + n.h + 24, 'From analysis to evaluation', s),
    'Analysis asks what a choice does; evaluation asks how well it does it and why it matters, with three questions: why it is effective here, whether it is more powerful than an alternative, and whether it works with other choices. Below, three grammatical features: a passive verb can hide responsibility, a list can overwhelm and a short sentence can shock.',
    'Analysis explains an effect; evaluation judges its quality and impact.',
    "## Evaluating writers' choices");
}

// 06 Worked example: the annotated answer
{
  const Y = 110;
  let s = '';
  const arg = card(30, Y, 840, { kicker: 'ARGUMENT', title: 'Nan’s grief is something she manages through routine rather than speech.', fill: C.cream, edge: C.olive, tsize: 20 });
  s += arg.s;
  const rows = [
    ['“dead since March”', 'She cannot yet let go.', 'inference from explicit detail'],
    ['“Habit”; a counter “already clean”', 'Seems dismissive, but she is keeping busy to avoid feeling.', 'motive inferred; alternative reading weighed'],
    ['nine days behind the clock; folded “the size of a stamp”', 'Avoidance; trying to make the bad news smaller.', 'sequence and imagery evaluated'],
    ['the understated final line', 'Her calm reveals how much she is holding back.', 'evaluation of impact'],
  ];
  let y = Y + arg.h + 34;
  s += T(30, y - 10, 'Evidence', { size: 16, weight: 700, fill: C.muted }) + T(318, y - 10, 'What it suggests', { size: 16, weight: 700, fill: C.muted }) + T(640, y - 10, 'Skill shown', { size: 16, weight: 700, fill: C.muted });
  rows.forEach(([ev, sug, sk]) => {
    const a = wrap(ev, 230, 17, 700), b = wrap(sug, 260, 17), c = wrap(sk, 190, 16, 700);
    const h = Math.max(a.length * 23, b.length * 23, c.length * 21) + 22;
    s += panel(30, y, 260, h, C.tealLight, C.tealDark) + a.map((l, k) => T(46, y + 30 + k * 23, l, { size: 17, weight: 700 })).join('');
    s += arrow(294, y + h / 2, 314, y + h / 2, { w: 3 });
    s += panel(318, y, 292, h) + b.map((l, k) => T(334, y + 30 + k * 23, l, { size: 17 })).join('');
    s += `<rect x="640" y="${y}" width="230" height="${h}" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + c.map((l, k) => T(656, y + 30 + k * 21, l, { size: 16, weight: 700, fill: C.olive })).join('');
    y += h + 12;
  });
  add('06-worked-example-annotated',
    svg(900, y + 14, 'How the model answer earns its marks', s, 'How does the writer present Nan’s feelings?'),
    'The model answer’s argument, that Nan manages grief through routine rather than speech, is supported by four pieces of evidence. Each row links the evidence to what it suggests and to the skill shown: inference from explicit detail, motive inferred and alternative reading weighed, sequence and imagery evaluated, and evaluation of impact.',
    'Each sentence of the model answer pairs evidence with a reading and shows a named skill.',
    '## Worked example');
}

// 07 Question words and what they ask for
{
  const Y = 110;
  const t1 = table(Y, ['Question wording', 'What it asks you to do'], [
    ['“Explore” / “How far”', 'Consider more than one reading and reach a judgement.'],
    ['“How does the writer present”', 'Focus on the writer’s methods and their effects.'],
    ['“Compare”', 'Keep both texts together throughout.'],
  ], [330, 510], { size: 18 });
  const n = note(Y + t1.h + 20, 'Underline the focus word in the question and test every inference against it.');
  add('07-question-words',
    svg(900, Y + t1.h + 20 + n.h + 24, 'What the question words ask for', t1.s + n.s),
    'A table pairs question wording with what it asks: explore or how far means consider more than one reading and reach a judgement; how does the writer present means focus on methods and effects; compare means keep both texts together throughout.',
    'The wording of the question tells you which reading skill to show.',
    '## Exam technique');
}
