import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-english-literature-8702-section-b-the-19th-century-novel';
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

// 01 What the question rewards
{
  const Y = 126;
  let s = '';
  const unit = 840 / 30;
  const segs = [['AO1', 12, C.teal, 'informed personal response'], ['AO2', 12, C.cream, 'language, form, structure'], ['AO3', 6, C.tealLight, 'context']];
  let x = 30;
  segs.forEach(([lab, v, f, d]) => {
    const w = v * unit;
    s += `<rect x="${x}" y="${Y}" width="${w}" height="74" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x + w / 2, Y + 32, `${lab} · ${v} marks`, { size: 20, weight: 700, anchor: 'middle' }) + T(x + w / 2, Y + 57, d, { size: 16, anchor: 'middle' });
    x += w;
  });
  s += `<rect x="28" y="${Y - 2}" width="844" height="78" rx="6" fill="none" stroke="${C.ink}" stroke-width="3"/>`;
  s += T(450, Y + 110, '30 marks · no separate AO4 marks here, but clear writing carries your argument', { size: 17, weight: 700, anchor: 'middle' });
  // two bullets
  const qy = Y + 140;
  const r = row(qy, [
    { kicker: 'BULLET 1', title: 'The printed extract', body: 'Write about it in detail.', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'BULLET 2', title: 'The novel as a whole', body: 'Trace the focus across the book.', fill: C.tealLight, edge: C.tealDark },
  ], { arrows: true, card: { tsize: 20, size: 17, align: 'middle' } });
  s += r.s;
  // time bar
  const ty = qy + r.h + 34;
  s += T(30, ty, 'Time on Paper 1 (1 hour 45 minutes, 64 marks)', { size: 17, weight: 700 });
  const tw = 840;
  s += `<rect x="30" y="${ty + 14}" width="${tw * 34 / 64}" height="48" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + T(30 + tw * 17 / 64, ty + 45, 'Section A Shakespeare · 34', { size: 17, anchor: 'middle', fill: C.muted });
  s += `<rect x="${30 + tw * 34 / 64}" y="${ty + 14}" width="${tw * 30 / 64}" height="48" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + T(30 + tw * 49 / 64, ty + 45, 'Section B novel · 30', { size: 17, weight: 700, anchor: 'middle' });
  s += T(450, ty + 92, 'Allow close to half the time for Section B; don’t overrun on Section A.', { size: 17, anchor: 'middle', fill: C.olive, weight: 700 });
  add('01-marks-and-time',
    svg(900, ty + 116, 'What the novel question rewards', s, 'One question on your novel: an extract, then the whole book'),
    'A bar splits the 30 marks into AO1 12, AO2 12 and AO3 6, with no separate AO4 marks. Two linked cards show the two bullets: the printed extract, then the novel as a whole. A second bar shows Paper 1’s 64 marks: 34 for Section A and 30 for Section B, so Section B needs close to half the time.',
    'Thirty marks for one extract-to-whole-novel answer, worth close to half of Paper 1.',
    '## What the question rewards');
}

// 02 Play vs novel: who stands between text and reader
{
  const Y = 110;
  let s = '';
  const half = (x, title, mid, end, fill, edge) => {
    let o = panel(x, Y, 411, 250);
    o += T(x + 205, Y + 38, title, { size: 21, weight: 700, anchor: 'middle' });
    o += page(x + 24, Y + 70, 80, 100, { lines: 5 }) + T(x + 64, Y + 196, 'the text', { size: 16, anchor: 'middle', fill: C.muted });
    o += arrow(x + 112, Y + 120, x + 150, Y + 120, { w: 3 });
    o += `<rect x="${x + 156}" y="${Y + 78}" width="120" height="84" rx="12" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>` + T(x + 216, Y + 126, mid, { size: 18, weight: 700, anchor: 'middle' });
    o += arrow(x + 282, Y + 120, x + 320, Y + 120, { w: 3 });
    o += pawn(x + 358, Y + 160, C.panel, 0.9) + T(x + 358, Y + 196, end, { size: 16, anchor: 'middle', fill: C.muted });
    return o;
  };
  s += half(30, 'A play', 'actors', 'audience', C.tealLight, C.tealDark);
  s += half(459, 'A novel', 'narrator', 'reader', C.mustard, C.ink);
  const vy = Y + 274;
  s += T(450, vy + 6, 'Every sentence of a novel reaches the reader through a voice that…', { size: 18, weight: 700, anchor: 'middle' });
  const verbs = ['selects', 'describes', 'judges', 'withholds'];
  verbs.forEach((v, i) => { s += chip(150 + i * 200, vy + 24, v, { anchor: 'middle', size: 18, w: 150, fill: C.cream, edge: C.olive }).s; });
  add('02-play-vs-novel',
    svg(900, vy + 84, 'Who stands between text and reader?', s),
    'Two panels. In a play, the text reaches the audience through actors. In a novel, it reaches the reader through a narrator. Below, four chips say the narrator’s voice selects, describes, judges and withholds.',
    'A novel is mediated by a narrator, which gives you methods drama does not have.',
    '## What makes a novel different');
}

// 03 Narrative voice and viewpoint
{
  const Y = 110;
  const items = [
    { title: 'First-person narrator', body: 'Looking back? Understanding more now than then? Can we trust them?' },
    { title: 'Third-person narrator', body: 'Knows every character’s thoughts, or stays close to one? Comments and judges openly?' },
    { title: 'Free indirect style', body: 'Slips into a character’s thoughts and phrasing without quotation marks: whose attitude is it?' },
    { title: 'Multiple narrators or documents', body: 'Letters, statements, several voices: what does each one see, and miss?' },
  ];
  const r1 = row(Y, items.slice(0, 2), { gap: 18, card: { tsize: 19, size: 16 } });
  const r2 = row(Y + r1.h + 14, items.slice(2), { gap: 18, card: { tsize: 19, size: 16 } });
  let s = r1.s + r2.s;
  // two selves
  const y2 = Y + r1.h + 14 + r2.h + 30;
  s += panel(30, y2, 840, 200, C.cream, C.olive);
  s += T(54, y2 + 36, 'A retrospective first-person narrator has two selves', { size: 19, weight: 700 });
  s += pawn(130, y2 + 160, C.teal, 0.8) + T(130, y2 + 186, 'younger self', { size: 16, weight: 700, anchor: 'middle' });
  s += T(130, y2 + 66, 'experiences events', { size: 15, anchor: 'middle', fill: C.muted });
  s += pawn(770, y2 + 160, C.mustard, 1) + T(770, y2 + 186, 'older narrator', { size: 16, weight: 700, anchor: 'middle' });
  s += T(770, y2 + 66, 'tells them', { size: 15, anchor: 'middle', fill: C.muted });
  s += `<line x1="190" y1="${y2 + 120}" x2="710" y2="${y2 + 120}" stroke="${C.olive}" stroke-width="3" stroke-dasharray="10 7" marker-start="url(#ahO)" marker-end="url(#ahO)"/>`;
  s += T(450, y2 + 106, 'the gap between them', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  s += T(450, y2 + 152, 'the narrator can foreshadow, regret or correct', { size: 17, anchor: 'middle' });
  s += T(450, y2 + 174, 'what the younger self believed', { size: 17, anchor: 'middle' });
  add('03-narrative-voice',
    svg(900, y2 + 224, 'Narrative voice and viewpoint', s),
    'Four cards give questions for first-person narrators, third-person narrators, free indirect style, and multiple narrators or documents. Below, a younger self who experiences events and an older narrator who tells them are separated by a gap in which the narrator can foreshadow, regret or correct.',
    'Ask who tells the story, what they know and how far to trust them.',
    '### Narrative voice and viewpoint');
}

// 04 Language at sentence level
{
  const Y = 110;
  let s = panel(30, Y, 840, 180);
  s += T(54, Y + 36, 'Long accumulating sentence, then a short one', { size: 19, weight: 700 });
  const segs = [90, 70, 110, 60, 95, 80, 70];
  let x = 54;
  segs.forEach((w, i) => { s += `<rect x="${x}" y="${Y + 62}" width="${w - 6}" height="34" rx="6" fill="${i % 2 ? C.tealLight : C.teal}" stroke="${C.ink}" stroke-width="1.5"/>`; x += w; });
  s += T(54, Y + 124, 'clauses, lists and qualifications pile up: breathlessness or overwhelming detail', { size: 16, fill: C.muted });
  s += `<rect x="${x + 16}" y="${Y + 56}" width="70" height="46" rx="8" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
  s += T(x + 51, Y + 150, 'lands with force', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  s += arrow(x + 51, Y + 134, x + 51, Y + 108, { w: 2.5, color: C.olive, marker: 'ahO' });
  const y2 = Y + 200;
  s += T(30, y2 + 20, 'Also look at:', { size: 18, weight: 700 });
  const tb = table(y2 + 34, ['Feature', 'What to say'], [
    ['Semantic fields', 'Clusters of related words, such as disease, imprisonment or light.'],
    ['Pathetic fallacy', 'Weather or setting reflecting emotion: why link them at this point?'],
    ['Contrasts', 'Between characters, places or social classes, set side by side.'],
    ['Dialogue', 'How characters speak reveals class, education, power and concealment.'],
    ['Narratorial comment', 'Direct addresses or moral judgements that steer sympathy.'],
  ], [250, 590], { size: 17, zebra: true });
  s += tb.s;
  add('04-sentence-level',
    svg(900, y2 + 34 + tb.h + 24, 'Language at sentence level', s, 'Analyse what the style does, never call it “old-fashioned”'),
    'A long sentence drawn as a chain of clauses ends in a short gold block labelled lands with force. Below, a table lists features to analyse: semantic fields, pathetic fallacy, contrasts, dialogue and narratorial comment.',
    'Long sentences can overwhelm; a short one after them lands with force.',
    '### Language at sentence level');
}

// 05 Structure across the novel
{
  const Y = 110;
  let s = '';
  // instalments
  s += panel(30, Y, 840, 170);
  s += T(54, Y + 36, 'First published in instalments? The structure often shows it:', { size: 19, weight: 700 });
  const inst = [['Chapter endings', 'that create suspense'], ['Parallel scenes', 'set against each other'], ['Reappearing characters', 'with situations reversed']];
  inst.forEach(([a, b], i) => {
    const x = 54 + i * 272;
    s += `<rect x="${x}" y="${Y + 60}" width="250" height="86" rx="12" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + T(x + 125, Y + 96, a, { size: 18, weight: 700, anchor: 'middle' }) + T(x + 125, Y + 122, b, { size: 16, anchor: 'middle', fill: C.muted });
  });
  // patterns
  const y2 = Y + 200;
  s += T(450, y2, 'Structural patterns to look for', { size: 20, weight: 700, anchor: 'middle' });
  const pw = 195, ph = 204, gy = y2 + 20;
  const pats = ['A journey', 'A rise and fall', 'A secret slowly revealed', 'An ending that mirrors the beginning'];
  pats.forEach((p, i) => {
    const x = 30 + i * (pw + 20);
    s += panel(x, gy, pw, ph);
    const cx = x + pw / 2, cy = gy + 70;
    if (i === 0) s += path(`M${x + 25},${cy + 20} C${x + 70},${cy - 40} ${x + 120},${cy + 50} ${x + 170},${cy - 15}`, { w: 4, stroke: C.tealDark, extra: 'stroke-dasharray="2 9"' }) + `<circle cx="${x + 25}" cy="${cy + 20}" r="8" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/><circle cx="${x + 170}" cy="${cy - 15}" r="8" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`;
    if (i === 1) s += path(`M${x + 25},${cy + 35} L${cx},${cy - 35} L${x + 170},${cy + 35}`, { w: 4, stroke: C.tealDark }) + `<circle cx="${cx}" cy="${cy - 35}" r="8" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`;
    if (i === 2) [0, 1, 2, 3].forEach((k) => { s += `<rect x="${x + 28 + k * 36}" y="${cy - 30}" width="30" height="60" rx="4" fill="${k === 3 ? C.mustard : C.tealLight}" stroke="${C.ink}" stroke-width="2" opacity="${0.4 + k * 0.2}"/>`; }) + T(x + 28 + 3 * 36 + 15, cy + 8, '?', { size: 22, weight: 700, anchor: 'middle' });
    if (i === 3) s += `<rect x="${x + 30}" y="${cy - 30}" width="50" height="60" rx="6" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/><rect x="${x + 115}" y="${cy - 30}" width="50" height="60" rx="6" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + path(`M${x + 80},${cy - 36} Q${cx},${cy - 70} ${x + 115},${cy - 36}`, { w: 2.5, stroke: C.olive, extra: 'stroke-dasharray="6 5"' });
    const pl = wrap(p, pw - 30, 17, 700);
    s += pl.map((l, k) => T(cx, gy + 140 + k * 22, l, { size: 17, weight: 700, anchor: 'middle' })).join('');
  });
  const n = note(gy + ph + 18, 'Ask where your extract falls and what has just happened.');
  s += n.s;
  add('05-novel-structure',
    svg(900, gy + ph + 18 + n.h + 24, 'Structure across the novel', s),
    'Three effects of publication in instalments: suspenseful chapter endings, parallel scenes and characters who reappear with situations reversed. Below, four structural patterns are sketched: a journey, a rise and fall, a secret slowly revealed, and an ending that mirrors the beginning.',
    'Look for the novel’s overall shape and where your extract sits in it.',
    '### Structure across the novel');
}

// 06 Worked example: annotated original passage
{
  const Y = 120;
  let s = '';
  const rowsA = [
    ['the sun… “resolved never to trouble itself again”', 'Personification turns the lane into a moral landscape: warmth and generosity have abandoned it.', 'AO2: personification and setting'],
    ['“a rumour of a fire”', 'An ironic, not angry, narrator mocks Grise through exaggeration: we laugh before we judge.', 'AO2: narrative voice'],
    ['ledgers like “a regiment awaiting orders”', 'A simile: money is the only thing he commands or cares for.', 'method: simile'],
    ['“a moral failing” beside Thomas’s hunger', 'The flat “agreed that it was” exposes hypocrisy without stating it.', 'AO2: structure and juxtaposition'],
    ['thrift praised as a virtue', 'Could such virtue become cruelty when the powerful practise it at the poor’s expense?', 'AO3: linked to the line'],
  ];
  const lw = 300, ax = 30 + lw + 30, aw = 870 - ax;
  let y = Y;
  rowsA.forEach(([q, ann, tag], i) => {
    const L = wrap(q, lw - 32, 17, 700);
    const A = wrap(ann, aw - 32, 16);
    const h = Math.max(L.length * 23 + 26, A.length * 21 + 21 + 30);
    s += panel(30, y, lw, h, i === 4 ? C.tealLight : C.cream, i === 4 ? C.tealDark : C.olive) + L.map((l, k) => T(46, y + h / 2 + 7 - ((L.length - 1) * 23) / 2 + k * 23, l, { size: 17, weight: 700 })).join('');
    s += arrow(30 + lw + 4, y + h / 2, ax - 4, y + h / 2, { w: 3 });
    s += panel(ax, y, aw, h) + A.map((l, k) => T(ax + 16, y + 28 + k * 21, l, { size: 16 })).join('') + T(ax + 16, y + 28 + A.length * 21 + 4, tag, { size: 16, weight: 700, fill: C.tealDark });
    y += h + 12;
  });
  const n = note(y + 6, 'Argument: the writer presents Mr Grise’s meanness as something that has taken over the whole world around him.');
  s += n.s;
  add('06-annotated-passage',
    svg(900, y + 6 + n.h + 24, 'How the model paragraph works', s, 'Original passage: Mr Grise in his counting-house'),
    'Five rows link details of the original passage to the model paragraph’s analysis: the personified sun (personification and setting), a rumour of a fire (ironic narrative voice), ledgers like a regiment (simile), the moral failing beside Thomas’s hunger (structure and juxtaposition), and thrift praised as a virtue (context linked to the line).',
    'Each detail is paired with what it suggests and the method that creates it.',
    '## Worked example');
}
