import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-english-literature-8702-section-a-shakespeare';
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

// 01 What the question rewards and how to read it
{
  const Y = 126;
  let s = '';
  const x0 = 30, W = 840, unit = W / 34;
  const segs = [['AO1', 12, C.teal], ['AO2', 12, C.cream], ['AO3', 6, C.tealLight], ['AO4', 4, C.mustard]];
  let x = x0;
  segs.forEach(([lab, v, f]) => {
    const w = v * unit;
    s += `<rect x="${x}" y="${Y}" width="${w}" height="74" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += T(x + w / 2, Y + 32, lab, { size: 20, weight: 700, anchor: 'middle' }) + T(x + w / 2, Y + 58, `${v} marks`, { size: 17, anchor: 'middle' });
    x += w;
  });
  s += `<rect x="${x0 - 2}" y="${Y - 2}" width="${W + 4}" height="78" rx="6" fill="none" stroke="${C.ink}" stroke-width="3"/>`;
  const bx2 = x0 + 30 * unit;
  s += path(`M${x0},${Y + 88} L${x0},${Y + 100} L${bx2 - 4},${Y + 100} L${bx2 - 4},${Y + 88}`, { w: 2.5 }) + T((x0 + bx2) / 2, Y + 126, 'the question: 30 marks, marked as a whole', { size: 18, weight: 700, anchor: 'middle' });
  s += path(`M${bx2 + 4},${Y + 88} L${bx2 + 4},${Y + 100} L${x0 + W},${Y + 100} L${x0 + W},${Y + 88}`, { w: 2.5 }) + T(x0 + W, Y + 126, '+ 4 for AO4', { size: 18, weight: 700, anchor: 'end', fill: C.olive });
  // question stem
  const qy = Y + 160;
  s += panel(30, qy, 840, 196);
  s += T(54, qy + 38, 'The usual question', { size: 16, weight: 700, fill: C.muted });
  s += rich(54, qy + 74, [['“', ''], ['Starting with this extract', 'hl'], [', ', ''], ['explore', 'hl'], [' how Shakespeare ', ''], ['presents', 'hl'], [' …”', '']], { size: 22 });
  const ann = [
    ['Starting with this extract', 'two bullets: the extract, then the play as a whole'],
    ['explore', 'weigh more than one reading'],
    ['presents', 'the dramatist’s choices, not the character as a real person'],
  ];
  ann.forEach(([a, b], i) => {
    const y = qy + 112 + i * 34;
    s += T(54, y, a, { size: 17, weight: 700, fill: C.rust }) + T(290, y, '→  ' + b, { size: 16 });
  });
  const n = note(qy + 214, 'Section A carries 34 of Paper 1’s 64 marks, so it deserves a little over half of the 1 hour 45 minutes.', { title: 'Time' });
  s += n.s;
  add('01-marks-and-question',
    svg(900, qy + 214 + n.h + 24, 'What the Shakespeare question rewards', s, 'One question on your play: an extract, then the whole play'),
    'A bar splits 34 marks: AO1 12, AO2 12 and AO3 6 make the 30-mark question, marked as a whole, plus 4 for AO4. Below, the usual question wording is annotated: starting with this extract means two bullets, explore means weigh more than one reading, and presents means focus on the dramatist’s choices. A note says Section A is 34 of the paper’s 64 marks.',
    'Thirty marks for the answer plus four for AO4; the key words tell you what to do.',
    '## What the question rewards');
}

// 02 Dramatic methods worth knowing
{
  const Y = 110;
  const tb = table(Y, ['Method', 'What it does for the audience'], [
    ['Soliloquy', 'Alone on stage, a character speaks thoughts aloud: private motives that can create sympathy or unease.'],
    ['Aside', 'A remark others on stage do not hear: a secret alliance with the audience.'],
    ['Dramatic irony', 'The audience knows more, so ordinary lines carry a second, darker or comic meaning.'],
    ['Entrances and exits', 'Who arrives, leaves or is left alone can shift power within a scene.'],
    ['Embedded stage directions', 'Actions implied in the dialogue (“give me your hand”) tell actors what to do.'],
    ['Juxtaposition of scenes', 'A violent scene next to a comic or domestic one sharpens both.'],
    ['Shared lines', 'Finishing another’s line of verse: closeness, urgency, or one character overpowering another.'],
  ], [270, 570], { size: 17, zebra: true });
  add('02-dramatic-methods',
    svg(900, Y + tb.h + 24, 'Dramatic methods worth knowing', tb.s),
    'A table of seven dramatic methods and their effects: soliloquy, aside, dramatic irony, entrances and exits, embedded stage directions, juxtaposition of scenes and shared lines.',
    'Each method changes what the audience knows, sees or feels.',
    '## Reading a play as drama');
}

// 03 Verse, prose and rhyme
{
  const Y = 110;
  const cwid = 270, gap = 15;
  let s = '';
  const cols = [
    { title: 'Blank verse', fill: C.tealLight, edge: C.tealDark, ink: C.tealDark, body: ['Unrhymed, usually ten syllables, da-DUM (iambic pentameter).', 'Often high-status characters; serious, controlled speech.'] },
    { title: 'Prose', fill: C.cream, edge: C.olive, ink: C.olive, body: ['Ordinary sentences without metre.', 'Often lower-status characters, comedy, letters, or a mind breaking down.'] },
    { title: 'Rhyming couplets', fill: C.panel, edge: C.ink, ink: C.ink, body: ['Two rhymed lines, often closing a scene or speech.', 'Can sound decisive, proverbial or falsely neat.'] },
  ];
  const H = 330;
  cols.forEach((c, i) => {
    const x = 30 + i * (cwid + gap);
    s += panel(x, Y, cwid, H, c.fill, c.edge) + T(x + cwid / 2, Y + 38, c.title, { size: 21, weight: 700, anchor: 'middle', fill: c.ink });
    // icon area
    const iy = Y + 62;
    if (i === 0) {
      for (let k = 0; k < 5; k++) { const bx = x + 26 + k * 46; s += `<rect x="${bx}" y="${iy + 22}" width="14" height="14" rx="3" fill="${C.panel}" stroke="${C.ink}" stroke-width="2"/><rect x="${bx + 18}" y="${iy + 12}" width="22" height="24" rx="3" fill="${C.tealDark}" stroke="${C.ink}" stroke-width="2"/>`; }
      s += T(x + cwid / 2, iy + 60, 'da-DUM ×5', { size: 15, anchor: 'middle', fill: C.muted, weight: 700 });
    } else if (i === 1) {
      [0.92, 0.85, 0.95, 0.6].forEach((w, k) => { s += `<line x1="${x + 26}" y1="${iy + 14 + k * 14}" x2="${x + 26 + (cwid - 52) * w}" y2="${iy + 14 + k * 14}" stroke="${C.olive}" stroke-width="6" stroke-linecap="round"/>`; });
      s += T(x + cwid / 2, iy + 76, 'no metre', { size: 15, anchor: 'middle', fill: C.muted, weight: 700 });
    } else {
      [0, 1].forEach((k) => { s += `<line x1="${x + 30}" y1="${iy + 18 + k * 24}" x2="${x + cwid - 80}" y2="${iy + 18 + k * 24}" stroke="${C.panelEdge}" stroke-width="6" stroke-linecap="round"/><rect x="${x + cwid - 70}" y="${iy + 9 + k * 24}" width="38" height="18" rx="5" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`; });
      s += path(`M${x + cwid - 30},${iy + 18} q16,12 0,24`, { w: 2.5, stroke: C.olive });
      s += T(x + cwid / 2, iy + 70, 'rhyme closes it', { size: 15, anchor: 'middle', fill: C.muted, weight: 700 });
    }
    let by = Y + 172;
    c.body.forEach((b) => { const p = para(x + 20, by, b, cwid - 40, { size: 16 }); s += p.s; by += p.h + 10; });
  });
  const n = note(Y + H + 18, 'These are tendencies, not rules. Look for exceptions: a noble character slipping into prose, a servant in verse, an extra syllable or a mid-line pause (caesura). When the metre disturbs, ask what it shows about the speaker’s state of mind.', { title: 'The exceptions are the interesting moments' });
  s += n.s;
  add('03-verse-prose-rhyme',
    svg(900, Y + H + 18 + n.h + 24, 'Verse, prose and rhyme', s),
    'Three panels. Blank verse: unrhymed lines of about ten syllables in a da-DUM rhythm, often for high-status or serious speech. Prose: no metre, often for lower-status characters, comedy, letters or a mind breaking down. Rhyming couplets: two rhymed lines closing a scene or speech. A note says the exceptions, such as a noble slipping into prose or a caesura, are the moments to analyse.',
    'Notice the mode, and especially when a character moves out of it.',
    '## Reading a play as drama');
}

// 04 Where does the extract sit?
{
  const Y = 110;
  let s = '';
  const by = Y + 170;
  s += `<rect x="40" y="${by}" width="820" height="46" rx="10" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>`;
  const pts = [
    { x: 150, t: 'Opening', b: 'Situations and relationships are established.' },
    { x: 450, t: 'Turning point', b: 'A decision changes everything.' },
    { x: 750, t: 'Ending', b: 'Earlier ideas are resolved, punished or left uneasy.' },
  ];
  pts.forEach((p, i) => {
    s += `<rect x="${p.x - 70}" y="${by}" width="140" height="46" fill="${i === 1 ? C.mustard : C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + T(p.x, by + 30, p.t, { size: 18, weight: 700, anchor: 'middle' });
    const c = card(p.x - 130, by + 70, 260, { body: p.b, align: 'middle', size: 17, pad: 14 });
    s += `<line x1="${p.x}" y1="${by + 46}" x2="${p.x}" y2="${by + 70}" stroke="${C.ink}" stroke-width="2.5"/>` + c.s;
  });
  // echo arc
  s += `<path d="M150,${by - 6} C250,${Y + 40} 650,${Y + 40} 750,${by - 6}" fill="none" stroke="${C.tealDark}" stroke-width="3.5" stroke-dasharray="10 7" marker-end="url(#ahT)"/>`;
  s += `<circle cx="150" cy="${by - 22}" r="12" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` + T(150, by - 16, 'A', { size: 15, weight: 700, anchor: 'middle' });
  s += T(450, Y + 14, 'Echo: an image, phrase or action at the start', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(450, Y + 38, 'returns later with its meaning changed', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  const n = note(by + 196, 'Ask where your extract sits, then track the echoes: one of the clearest ways to write about structure.');
  s += n.s;
  add('04-structure-across-the-play',
    svg(900, by + 196 + n.h + 24, 'Where does the extract sit?', s),
    'A bar for the whole play marks the opening, where relationships are established, a turning point, where a decision changes everything, and the ending, where ideas are resolved, punished or left uneasy. A dashed arc shows an image from the start echoing near the end with its meaning changed.',
    'Place the extract in the play’s shape, and follow the echoes.',
    '## Reading a play as drama');
}

// 05 Context that earns credit
{
  const Y = 110;
  const h = hub(Y, 'Context of writing', [
    { title: 'The theatre', body: 'The audience; no women on the public stage in Shakespeare’s lifetime; a bare stage, so language did the work of scenery.' },
    { title: 'Beliefs', body: 'About hierarchy, gender, religion and authority.' },
    { title: 'Genre expectations', body: 'Tragedy, comedy or romance.' },
    { title: 'Two audiences', body: 'How an original and a modern audience might respond differently, both anchored in the text.' },
  ], { cardW: 290, r: 95 });
  const r = row(Y + h.h + 22, [
    { title: 'Earns credit', body: 'Relevant to the question and your play, linked to a specific moment or phrase.', fill: C.tealLight, edge: C.tealDark, tfill: C.tealDark },
    { title: 'Earns little', body: 'A paragraph of history with no link to the text.', fill: C.cream, edge: C.olive, tfill: C.olive },
  ], { gap: 24, card: { tsize: 19, size: 17 } });
  add('05-context-that-earns-credit',
    svg(900, Y + h.h + 22 + r.h + 24, 'Context that earns credit', h.s + r.s),
    'A hub labelled context of writing links to four areas: the theatre (the audience, no women on the public stage, a bare stage), beliefs about hierarchy, gender, religion and authority, genre expectations, and how original and modern audiences might respond differently. Below, context linked to a specific moment earns credit; a paragraph of unlinked history earns little.',
    'Use only relevant context, and tie it to a specific moment in the play.',
    '## Context that earns credit');
}

// 06 Worked example: soliloquy annotated
{
  const Y = 120;
  let s = '';
  const rowsA = [
    [['What is a brother but a name we wear,', 'A borrowed coat that warms us while it fits?'], 'Rhetorical question; a clothing metaphor makes family loyalty sound temporary and removable.', 'AO2: language'],
    [['And yet this coat was cut from my own cloth.'], '“And yet”: the image rebounds, so the metaphor ends up proving loyalty.', 'AO2: structure within the speech'],
    [['The night is kind; it does not ask my name.'], 'A soliloquy: the audience alone hears the argument collapse, building dramatic irony for later scenes.', 'AO2: form; AO1: whole-play link'],
    [['Go, conscience, sleep. I’ll wake thee when I’m crowned.'], 'Conscience treated as a servant he can dismiss: he places himself outside the natural order.', 'AO3: tied to the line'],
  ];
  const lw = 450, ax = 30 + lw + 30, aw = 870 - ax;
  let y = Y;
  rowsA.forEach(([ls, ann, tag]) => {
    const L = ls.flatMap((l) => wrap(l, lw - 28, 17));
    const A = wrap(ann, aw - 32, 16);
    const h = Math.max(L.length * 24 + 26, A.length * 21 + 21 + 30);
    s += panel(30, y, lw, h, C.cream, C.olive) + L.map((l, k) => T(48, y + 32 + k * 24, l, { size: 17, italic: true })).join('');
    s += arrow(30 + lw + 4, y + h / 2, ax - 4, y + h / 2, { w: 3 });
    s += panel(ax, y, aw, h) + A.map((l, k) => T(ax + 16, y + 28 + k * 21, l, { size: 16 })).join('') + T(ax + 16, y + 28 + A.length * 21 + 4, tag, { size: 16, weight: 700, fill: C.tealDark });
    y += h + 12;
  });
  const yb = y + 6;
  const n = note(yb, 'Argument: the soliloquy presents ambition as a force that persuades itself. Every sentence makes a point about meaning, methods are named only when they help, and context is attached to a phrase.');
  s += n.s;
  add('06-soliloquy-annotated',
    svg(900, yb + n.h + 24, 'Annotating a soliloquy', s, 'Original passage: Aldric is offered his brother’s lands'),
    'The five-line original soliloquy by Aldric is shown with annotations: the rhetorical question and clothing metaphor (AO2 language), the turn at and yet (AO2 structure), the soliloquy form that lets only the audience hear (AO2 form and AO1 whole-play link), and conscience dismissed as a servant (AO3 tied to the line).',
    'Each annotation names what the line does, then the objective it serves.',
    '## Worked example');
}

// 07 Five-step plan: extract to whole play
{
  const Y = 110;
  const st = steps(Y, [
    { title: 'Read the question and extract twice', body: 'Underline the focus word; mark four or five details that relate to it.' },
    { title: 'Write a one-sentence argument', body: '“Shakespeare presents loyalty as something characters claim most loudly when they are about to break it.”' },
    { title: 'Analyse the extract first', body: 'Two or three paragraphs, choosing details that support the argument.' },
    { title: 'Move outward', body: 'Two or three other moments, ideally one earlier and one later: memorised quotations or precise references.' },
    { title: 'Conclude with a judgement', body: 'What is Shakespeare suggesting by the end of the play?' },
  ], { size: 17, tsize: 20, highlight: 3 });
  const n = note(Y + st.h + 18, 'Weaving extract and play together in every paragraph also works, as long as both bullets are covered and the argument stays consistent.');
  add('07-five-step-plan',
    svg(900, Y + st.h + 18 + n.h + 24, 'From extract to whole play: a plan', st.s + n.s),
    'Five numbered steps: read the question and extract twice, write a one-sentence argument, analyse the extract first, move outward to an earlier and a later moment, and conclude with a judgement about the end of the play.',
    'One argument carries the answer from the extract out across the play.',
    '## Building the extract-to-whole-play argument');
}
