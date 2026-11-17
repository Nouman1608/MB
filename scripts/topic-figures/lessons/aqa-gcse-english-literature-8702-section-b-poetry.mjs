import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-english-literature-8702-section-b-poetry';
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

// 01 The comparison question and its marks
{
  const Y = 120;
  let s = '';
  // two poem sheets
  s += page(70, Y, 190, 200, { fill: C.cream, edge: C.ink, lines: 10 });
  s += page(640, Y, 190, 200, { fill: C.tealLight, edge: C.ink, lines: 10 });
  s += T(165, Y + 232, 'Named poem', { size: 19, weight: 700, anchor: 'middle' }) + T(165, Y + 256, 'printed on the paper', { size: 16, anchor: 'middle', fill: C.muted });
  s += T(735, Y + 232, 'One other poem', { size: 19, weight: 700, anchor: 'middle' }) + T(735, Y + 256, 'your choice, same cluster,', { size: 16, anchor: 'middle', fill: C.muted }) + T(735, Y + 276, 'from memory', { size: 16, anchor: 'middle', fill: C.muted });
  s += `<line x1="282" y1="${Y + 100}" x2="618" y2="${Y + 100}" stroke="${C.ink}" stroke-width="4" marker-start="url(#ah)" marker-end="url(#ah)"/>`;
  s += `<rect x="370" y="${Y + 78}" width="160" height="44" rx="22" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + T(450, Y + 107, 'compare', { size: 19, weight: 700, anchor: 'middle' });
  s += T(450, Y + 158, 'how poets present an idea', { size: 17, anchor: 'middle', fill: C.muted });
  // marks bar
  const by = Y + 310, unit = 840 / 30;
  const segs = [['AO1', 12, C.teal, 'compare ideas and perspectives'], ['AO2', 12, C.cream, 'compare methods'], ['AO3', 6, C.tealLight, 'contexts']];
  let x = 30;
  segs.forEach(([lab, v, f, d]) => {
    const w = v * unit;
    s += `<rect x="${x}" y="${by}" width="${w}" height="70" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x + w / 2, by + 30, `${lab} · ${v}`, { size: 20, weight: 700, anchor: 'middle' }) + T(x + w / 2, by + 55, d, { size: 15, anchor: 'middle' });
    x += w;
  });
  s += `<rect x="28" y="${by - 2}" width="844" height="74" rx="6" fill="none" stroke="${C.ink}" stroke-width="3"/>`;
  s += T(30, by + 102, '30 marks, marked holistically · no AO4 in this section · allow around 40 to 45 minutes', { size: 17, weight: 700 });
  add('01-comparison-question',
    svg(900, by + 126, 'The poetry anthology question', s, 'One comparative question on your cluster of fifteen poems'),
    'A named poem printed on the paper is compared with one other poem from the same cluster, chosen and recalled from memory, on how poets present an idea. A bar splits 30 marks: AO1 12 for comparing ideas, AO2 12 for comparing methods and AO3 6 for contexts. There are no AO4 marks; allow around 40 to 45 minutes.',
    'Compare the printed poem with one you recall; comparison runs through all three objectives.',
    '## What the question rewards');
}

// 02 What to know about each poem
{
  const Y = 110;
  const items = [
    ['What it is about', 'and who is speaking'],
    ['Central idea or attitude', 'and whether it shifts'],
    ['Its form', 'sonnet, dramatic monologue, free verse, ballad, lyric…'],
    ['2–3 structural features', 'stanza pattern, rhyme, a turning point, the ending'],
    ['3–4 short quotations', 'with a method attached to each'],
    ['One context point', 'that genuinely explains something'],
  ];
  let s = '';
  const w = 411, h = 104;
  items.forEach(([a, b], i) => {
    const x = 30 + (i % 2) * (w + 18), y = Y + Math.floor(i / 2) * (h + 14);
    s += panel(x, y, w, h, i === 4 ? C.cream : C.panel, i === 4 ? C.olive : C.panelEdge) + badge(x + 36, y + h / 2, 20, String(i + 1), C.cream);
    const bl = wrap(b, w - 90, 16);
    const y0 = y + h / 2 - ((bl.length + 1) * 22) / 2 + 16;
    s += T(x + 70, y0, a, { size: 19, weight: 700 }) + bl.map((l, k) => T(x + 70, y0 + 26 + k * 21, l, { size: 16, fill: C.muted })).join('');
  });
  const yn = Y + 3 * (h + 14) + 6;
  const n = note(yn, 'Any of the fifteen can be named, so be able to say each of these in a sentence or two for every poem.');
  add('02-poem-profile',
    svg(900, yn + n.h + 24, 'A profile for every poem', s + n.s),
    'Six cards list what to know about each poem: what it is about and who speaks, its central idea and whether it shifts, its form, two or three structural features, three or four short quotations with methods, and one context point.',
    'Six short answers per poem, for all fifteen poems.',
    '## Knowing fifteen poems');
}

// 03 The comparison grid
{
  const Y = 130;
  const ideas = ['memory', 'family', 'power', 'place', 'identity', 'loss', 'nature', 'conflict'];
  const n = 15, x0 = 130, cwid = 60, rh = 30, hy = Y + 24;
  let s = '';
  // pseudo-random illustrative ticks
  const PAT = [[1, 5], [1, 6], [2, 7], [3, 4], [5], [4, 1], [2, 7], [3, 6], [4, 5], [1, 5], [2, 4], [6, 3], [1, 4], [7, 2], [3, 5]];
  const fits = (r, c) => c === 0 ? [1, 4, 9, 12].includes(r) : PAT[r].includes(c);
  ideas.forEach((id, c) => {
    const cx = x0 + c * cwid + cwid / 2;
    s += `<g transform="translate(${cx + 5},${hy}) rotate(-35)">` + T(0, 0, id, { size: 16, weight: 700, fill: c === 0 ? C.olive : C.ink }) + '</g>';
  });
  const gy = hy + 30;
  s += `<rect x="${x0 - 2}" y="${gy}" width="${ideas.length * cwid + 4}" height="${n * rh}" fill="${C.panel}" stroke="${C.ink}" stroke-width="2"/>`;
  s += `<rect x="${x0}" y="${gy}" width="${cwid}" height="${n * rh}" fill="${C.cream}"/>`;
  s += `<rect x="30" y="${gy + 4 * rh}" width="${x0 - 30 + ideas.length * cwid}" height="${rh}" fill="${C.teal}" opacity="0.7"/>`;
  for (let r = 0; r < n; r++) {
    const y = gy + r * rh;
    s += T(40, y + 21, `Poem ${r + 1}`, { size: 16, weight: r === 4 ? 700 : 400 });
    if (r) s += `<line x1="${x0}" y1="${y}" x2="${x0 + ideas.length * cwid}" y2="${y}" stroke="${C.panelEdge}" stroke-width="1.5"/>`;
    ideas.forEach((_, c) => { if (fits(r, c)) { const cx = x0 + c * cwid + cwid / 2; const hit = c === 0 && r !== 4; s += `<circle cx="${cx}" cy="${y + rh / 2}" r="9" fill="${hit ? C.mustard : C.tealDark}" stroke="${C.ink}" stroke-width="${hit ? 2 : 0}"/>`; } });
  }
  for (let c = 1; c < ideas.length; c++) s += `<line x1="${x0 + c * cwid}" y1="${gy}" x2="${x0 + c * cwid}" y2="${gy + n * rh}" stroke="${C.panelEdge}" stroke-width="1.5"/>`;
  // side notes
  const sx = x0 + ideas.length * cwid + 24;
  s += card(sx, gy + 2 * rh, 870 - sx, { title: 'Named poem', body: 'Find its row.', size: 16, tsize: 18, pad: 14, fill: C.tealLight, edge: C.tealDark }).s;
  s += card(sx, gy + 6 * rh, 870 - sx, { title: 'Idea in the question', body: 'Read down its column: gold marks are poems you could compare it with.', size: 16, tsize: 18, pad: 14, fill: C.cream, edge: C.olive }).s;
  const yb = gy + n * rh + 20;
  s += T(450, yb + 16, 'A good second poem offers…', { size: 19, weight: 700, anchor: 'middle' });
  const r2 = row(yb + 30, [
    { title: 'A clear link', body: 'to the question’s idea' },
    { title: 'A similarity and a difference', body: 'in method or attitude' },
    { title: 'Quotations', body: 'you can recall accurately' },
  ], { gap: 16, card: { tsize: 18, size: 16, pad: 14, align: 'middle', fill: C.panel } });
  add('03-comparison-grid',
    svg(900, yb + 30 + r2.h + 24, 'The comparison grid', s + r2.s, 'Fifteen poems down the side, the cluster’s ideas across the top (pattern illustrative)'),
    'A grid lists poems 1 to 15 down the side and ideas across the top: memory, family, power, place, identity, loss, nature and conflict, with dots where a poem fits. The named poem’s row is highlighted and the memory column picks out three poems it could be compared with. Below, a good second poem offers a clear link to the idea, a similarity and a difference, and quotations you can recall.',
    'The grid shows which poems pair with the named poem for the idea in the question.',
    '## Knowing fifteen poems');
}

// 04 Poetic methods worth analysing
{
  const Y = 110;
  const tb = table(Y, ['Area', 'What to look for'], [
    ['Voice', 'First person, a persona, an addressee (“you”), a shift in who speaks.'],
    ['Form', 'Sonnet (a turn or volta), dramatic monologue (revealing more than intended), free verse, ballad.'],
    ['Metre and rhythm', 'Regular: control or ritual. Disrupted: tension or breakdown.'],
    ['Rhyme', 'Full: harmony or closure. Half: unease. None: naturalness or loss of order.'],
    ['Line and stanza', 'Enjambment: flow or overflow. Caesura: interruption. Breaks: pauses or shifts in time.'],
    ['Imagery', 'Metaphor, simile, personification, symbolism, especially when they recur or develop.'],
    ['Sound', 'Alliteration, sibilance, assonance, onomatopoeia, used to create mood.'],
    ['Endings', 'Resolution, a twist, an open question, a return to the opening.'],
  ], [220, 620], { size: 17, zebra: true });
  add('04-poetic-methods',
    svg(900, Y + tb.h + 24, 'Poetic methods worth analysing', tb.s),
    'A table of eight areas of poetic method and what to look for in each: voice, form, metre and rhythm, rhyme, line and stanza, imagery, sound and endings.',
    'Eight areas to check in both poems, always linked to their effect.',
    '## Poetic methods worth analysing');
}

// 05 Context across two centuries
{
  const Y = 96;
  let s = '';
  const ly = Y + 40;
  s += `<line x1="50" y1="${ly}" x2="850" y2="${ly}" stroke="${C.ink}" stroke-width="4" marker-end="url(#ah)"/>`;
  s += T(50, ly - 16, '1789', { size: 18, weight: 700 }) + T(850, ly - 16, 'present day', { size: 18, weight: 700, anchor: 'end' });
  const eras = [
    { t: 'Romantic', b: 'nature and feeling', f: C.tealLight, e: C.tealDark },
    { t: 'Victorian', b: 'duty and empire', f: C.cream, e: C.olive },
    { t: '20th-century wars', b: 'the experience of those wars', f: C.tealLight, e: C.tealDark },
    { t: 'Modern', b: 'identity, migration and family', f: C.cream, e: C.olive },
  ];
  const er = row(ly + 34, eras.map((e) => ({ title: e.t, body: e.b, align: 'middle', fill: e.f, edge: e.e })), { gap: 20, card: { tsize: 18, size: 16, pad: 14 } });
  const w = (840 - 60) / 4;
  eras.forEach((e, i) => {
    const cx = 30 + i * (w + 20) + w / 2;
    s += `<circle cx="${cx}" cy="${ly}" r="10" fill="${e.e === C.olive ? C.mustard : C.teal}" stroke="${C.ink}" stroke-width="2.5"/><line x1="${cx}" y1="${ly + 10}" x2="${cx}" y2="${ly + 34}" stroke="${C.ink}" stroke-width="2.5"/>`;
  });
  s += er.s;
  s += T(450, ly + 34 + er.h + 26, 'Order shown only; not to scale', { size: 15, anchor: 'middle', fill: C.muted });
  const yb = ly + 34 + er.h + 48;
  const r = row(yb, [
    { kicker: 'WORTH 6 OF 30', title: 'Brief and precise', body: 'Use context to explain why a poet presents an idea in a particular way.', fill: C.panel },
    { kicker: 'A POWERFUL MOVE', title: 'Compare contexts', body: 'Two poems on one idea written a century apart may show how attitudes changed.', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { gap: 24, card: { tsize: 19, size: 16 } });
  add('05-context-two-centuries',
    svg(900, yb + r.h + 24, 'Context across two centuries', s + r.s),
    'A timeline from 1789 to the present day shows four broad contexts in order: Romantic interest in nature and feeling, Victorian ideas about duty and empire, twentieth-century wars, and modern writing about identity, migration and family. Below, context is worth 6 of 30 marks so should be brief, and comparing contexts can show how attitudes changed.',
    'The cluster spans two centuries, so contexts can be compared as well as explained.',
    '## Context across two centuries');
}

// 06 Worked example: comparing the two original poems
{
  const Y = 110;
  let s = '';
  const colW = 330, midW = 150, xA = 30, xM = 30 + colW + 15, xB = xM + midW + 15;
  s += `<rect x="${xA}" y="${Y}" width="${colW}" height="56" rx="12" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + T(xA + colW / 2, Y + 35, 'A: “The Allotment”', { size: 20, weight: 700, anchor: 'middle' });
  s += `<rect x="${xB}" y="${Y}" width="${colW}" height="56" rx="12" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + T(xB + colW / 2, Y + 35, 'B: “Inventory”', { size: 20, weight: 700, anchor: 'middle' });
  s += T(xM + midW / 2, Y + 35, 'memory', { size: 18, weight: 700, anchor: 'middle', fill: C.muted });
  const rows = [
    ['Both', 'Objects left behind: a spade, a shed', 'Objects left behind: a watch, glasses, cards'],
    ['By contrast', 'Regular rhyme and steady iambic rhythm: memory kept alive through ritual', 'Short, unrhymed lines: a list, as if sorting possessions'],
    ['', '“the way he taught me”: habits continue in the son’s body', 'The stopped watch: memory has frozen'],
    ['while', 'Half rhyme “weight” / “wait” hints at absence', '“addressed to someone else”: he never fully knew the dead person'],
  ];
  const labels = ['Ideas', 'Form', 'Meaning', 'Endings'];
  let y = Y + 70;
  rows.forEach(([conn, a, b], i) => {
    const A = wrap(a, colW - 32, 16), B = wrap(b, colW - 32, 16);
    const h = Math.max(A.length, B.length) * 21 + 26;
    s += panel(xA, y, colW, h) + A.map((l, k) => T(xA + 16, y + 26 + k * 21, l, { size: 16 })).join('');
    s += panel(xB, y, colW, h) + B.map((l, k) => T(xB + 16, y + 26 + k * 21, l, { size: 16 })).join('');
    s += `<line x1="${xA + colW + 2}" y1="${y + h / 2}" x2="${xB - 2}" y2="${y + h / 2}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += T(xM + midW / 2, y + h / 2 - 8, labels[i], { size: 15, anchor: 'middle', fill: C.muted, weight: 700 });
    if (conn) { const c = chip(xM + midW / 2, y + h / 2 + 2, conn, { anchor: 'middle', size: 16, fill: C.mustard, edge: C.ink }); s += c.s; }
    y += h + 10;
  });
  const n = note(y + 8, 'The comparison starts in the first sentence, every point covers method as well as meaning, and connectives such as “both”, “by contrast” and “while” keep the poems together.');
  s += n.s;
  add('06-worked-comparison',
    svg(900, y + 8 + n.h + 24, 'Comparing two poems on memory', s),
    'Two columns compare the original poems The Allotment and Inventory row by row. Both present memory through objects left behind. By contrast, A uses regular rhyme and rhythm to show memory kept alive through ritual, while B’s short unrhymed lines and stopped watch suggest memory frozen. At the end, A’s half rhyme of weight and wait hints at absence, while B reveals cards addressed to someone else. Connectives sit between the columns.',
    'Hold both poems in every point, joined by comparative connectives.',
    '## Worked example');
}

// 07 Two ways to structure a comparison
{
  const Y = 110;
  let s = '';
  const W = 411;
  // integrated
  s += panel(30, Y, W, 330, C.tealLight, C.tealDark) + T(54, Y + 38, 'Integrated', { size: 21, weight: 700, fill: C.tealDark }) + T(54, Y + 62, 'suits most candidates', { size: 16, fill: C.muted });
  ['ideas', 'form and structure', 'language'].forEach((p, i) => {
    const y = Y + 90 + i * 60;
    s += `<rect x="54" y="${y}" width="${W - 48}" height="46" rx="10" fill="${C.panel}" stroke="${C.ink}" stroke-width="2"/>`;
    s += `<rect x="62" y="${y + 8}" width="60" height="30" rx="6" fill="${C.cream}" stroke="${C.ink}" stroke-width="1.5"/>` + T(92, y + 28, 'A', { size: 16, weight: 700, anchor: 'middle' });
    s += `<rect x="128" y="${y + 8}" width="60" height="30" rx="6" fill="${C.teal}" stroke="${C.ink}" stroke-width="1.5"/>` + T(158, y + 28, 'B', { size: 16, weight: 700, anchor: 'middle' });
    s += T(204, y + 29, p, { size: 17 });
  });
  s += para(54, Y + 290, 'Each paragraph compares both poems on one point.', W - 48, { size: 16 }).s;
  // linked halves
  const x2 = 30 + W + 18;
  s += panel(x2, Y, W, 330, C.cream, C.olive) + T(x2 + 24, Y + 38, 'Linked halves', { size: 21, weight: 700, fill: C.olive }) + T(x2 + 24, Y + 62, 'can work, with care', { size: 16, fill: C.muted });
  s += `<rect x="${x2 + 24}" y="${Y + 90}" width="${W - 110}" height="76" rx="10" fill="${C.panel}" stroke="${C.ink}" stroke-width="2"/>` + T(x2 + 24 + (W - 110) / 2, Y + 134, 'Named poem', { size: 18, weight: 700, anchor: 'middle' });
  s += `<rect x="${x2 + 24}" y="${Y + 184}" width="${W - 110}" height="76" rx="10" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + T(x2 + 24 + (W - 110) / 2, Y + 228, 'Second poem', { size: 18, weight: 700, anchor: 'middle' });
  s += `<path d="M${x2 + W - 86},${Y + 222} C${x2 + W - 30},${Y + 222} ${x2 + W - 30},${Y + 128} ${x2 + W - 80},${Y + 128}" fill="none" stroke="${C.olive}" stroke-width="3" marker-end="url(#ahO)"/>`;
  s += para(x2 + 24, Y + 290, 'The second half must keep referring back, not just describe.', W - 48, { size: 16 }).s;
  const yp = Y + 366;
  s += T(450, yp + 4, 'A simple integrated plan', { size: 20, weight: 700, anchor: 'middle' });
  const r = row(yp + 22, [
    { title: 'Opening', body: 'key similarity and difference' },
    { title: '3 paragraphs', body: 'ideas · form and structure · language' },
    { title: 'Conclusion', body: 'weigh the poets’ attitudes' },
  ], { arrows: true, card: { tsize: 18, size: 16, pad: 14, align: 'middle' } });
  s += r.s;
  add('07-structuring-comparison',
    svg(900, yp + 22 + r.h + 24, 'Two ways to structure a comparison', s),
    'Two panels. Integrated: each of three paragraphs, on ideas, form and structure, and language, covers poem A and poem B together. Linked halves: the named poem first, then the second poem, which must keep referring back. Below, a simple integrated plan runs from an opening on the key similarity and difference, through three comparative paragraphs, to a conclusion weighing the poets’ attitudes.',
    'Integrated paragraphs keep the comparison active from start to finish.',
    '## Structuring a comparison');
}
