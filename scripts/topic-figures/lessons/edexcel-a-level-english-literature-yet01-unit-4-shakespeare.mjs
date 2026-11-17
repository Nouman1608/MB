import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-a-level-english-literature-yet01-unit-4-shakespeare';
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

// ---- extras (shared across this course set) ----
// Proportion bar with label rows. segs: [{label, sub, value, fill}]
function markBar(y, segs, o = {}) {
  const total = segs.reduce((a, b) => a + b.value, 0), x0 = 30, W0 = 840, bh = o.bh ?? 74;
  let s = '', x = x0;
  segs.forEach((sg) => {
    const w = (W0 * sg.value) / total;
    s += `<rect x="${x}" y="${y}" width="${w}" height="${bh}" fill="${sg.fill}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += T(x + w / 2, y + 32, sg.label, { size: 20, weight: 700, anchor: 'middle' });
    s += T(x + w / 2, y + 58, sg.sub, { size: 17, anchor: 'middle', fill: C.ink });
    x += w;
  });
  return { s: s + `<rect x="${x0}" y="${y}" width="${W0}" height="${bh}" fill="none" stroke="${C.ink}" stroke-width="3"/>`, h: bh };
}
const speech = (x, y, w, h, fill = C.panel) => `<path d="M${x + 12},${y} L${x + w - 12},${y} Q${x + w},${y} ${x + w},${y + 12} L${x + w},${y + h - 12} Q${x + w},${y + h} ${x + w - 12},${y + h} L${x + 34},${y + h} L${x + 16},${y + h + 16} L${x + 20},${y + h} L${x + 12},${y + h} Q${x},${y + h} ${x},${y + h - 12} L${x},${y + 12} Q${x},${y} ${x + 12},${y} Z" fill="${fill}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>`;
const eye = (cx, cy, k = 1) => `<path d="M${cx - 22 * k},${cy} Q${cx},${cy - 18 * k} ${cx + 22 * k},${cy} Q${cx},${cy + 18 * k} ${cx - 22 * k},${cy} Z" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/><circle cx="${cx}" cy="${cy}" r="${7 * k}" fill="${C.tealDark}"/>`;
const ear = (cx, cy, k = 1) => path(`M${cx - 8 * k},${cy + 14 * k} Q${cx - 14 * k},${cy - 16 * k} ${cx + 4 * k},${cy - 18 * k} Q${cx + 18 * k},${cy - 16 * k} ${cx + 14 * k},${cy} Q${cx + 10 * k},${cy + 8 * k} ${cx + 4 * k},${cy + 12 * k} Q${cx},${cy + 20 * k} ${cx - 8 * k},${cy + 14 * k}`, { fill: C.cream, w: 2.5 }) + path(`M${cx - 2 * k},${cy + 2 * k} Q${cx - 2 * k},${cy - 8 * k} ${cx + 6 * k},${cy - 8 * k}`, { w: 2 });

// Two overlapping year lists. cols: [{head, items:[[author, [title lines]]]}] x3 (left only, both, right only). Returns {s,h}.
function venn(Y, leftYear, rightYear, cols, o = {}) {
  const H = o.h ?? 300;
  let s = `<rect x="30" y="${Y + 40}" width="560" height="${H}" rx="34" fill="${C.cream}" fill-opacity="0.75" stroke="${C.olive}" stroke-width="3"/>`;
  s += `<rect x="310" y="${Y + 40}" width="560" height="${H}" rx="34" fill="${C.teal}" fill-opacity="0.55" stroke="${C.tealDark}" stroke-width="3"/>`;
  s += T(170, Y + 26, leftYear, { size: 21, weight: 700, anchor: 'middle', fill: C.olive });
  s += T(730, Y + 26, rightYear, { size: 21, weight: 700, anchor: 'middle', fill: C.tealDark });
  [170, 450, 730].forEach((x, i) => {
    const c = cols[i];
    s += T(x, Y + 82, c.head, { size: 16, weight: 700, anchor: 'middle', fill: [C.olive, C.ink, C.tealDark][i] });
    let y = Y + 126;
    c.items.forEach(([a, lines]) => {
      if (a) { s += T(x, y, a, { size: 17, weight: 700, anchor: 'middle' }); y += 24; }
      lines.forEach((l) => { s += T(x, y, l, { size: 17, anchor: 'middle', italic: true }); y += 22; });
      y += o.itemGap ?? 30;
    });
  });
  return { s, h: H + 40 };
}

// ---- lesson figures ----

// 01 Section A at a glance
{
  const fig = compose('Unit 4 Section A at a glance', [
    (y) => { const b = markBar(y + 26, [{ label: 'Section A: Shakespeare', sub: '25 marks · one essay', value: 25, fill: C.mustard }, { label: 'Section B', sub: '25 marks', value: 25, fill: C.tealLight }]); return { s: T(30, y + 14, 'Unit 4 · 50 marks · open book', { size: 17, weight: 700, fill: C.muted }) + b.s, h: b.h + 26 }; },
    (y) => {
      let s = T(30, y + 18, 'One play from', { size: 19, weight: 700 });
      const plays = ['Hamlet', 'King Lear', 'Measure for Measure', 'The Taming of the Shrew'];
      const w = (840 - 3 * 12) / 4;
      plays.forEach((p, i) => { const x = 30 + i * (w + 12); s += card(x, y + 34, w, { title: p, align: 'middle', minH: 70, vcenter: true, tsize: 18, pad: 12, fill: [C.tealLight, C.cream, C.teal, '#f6e3d6'][i] }).s.replace(/font-weight="700"/g, 'font-weight="700" font-style="italic"'); });
      return { s, h: 104 };
    },
    (y) => card(30, y, 840, { kicker: 'THE QUESTION', title: 'A statement to respond to', body: 'Consider relevant contextual factors and different interpretations. One essay from a choice of two on your play.', fill: C.cream, edge: C.olive, kfill: C.olive, size: 17 }),
    (y) => {
      let s = T(30, y + 18, 'Assessed on', { size: 19, weight: 700 });
      let x = 160; ['AO1', 'AO2', 'AO3', 'AO5'].forEach((a) => { const c = chip(x, y - 2, a, { size: 18, fill: C.tealLight, edge: C.tealDark }); s += c.s; x += c.w + 10; });
      s += T(x + 8, y + 18, 'Set plays are fixed by specification issue.', { size: 16, fill: C.muted });
      return { s, h: 30 };
    },
  ]);
  add('01-section-a-at-a-glance', fig,
    'Section A is worth 25 of Unit 4’s 50 marks: one open-book essay, from a choice of two, on one play from Hamlet, King Lear, Measure for Measure and The Taming of the Shrew. The question is a statement to respond to, considering context and different interpretations, assessed on AO1, AO2, AO3 and AO5.',
    'One essay testing a statement about one of four Shakespeare plays.',
    '## What Section A covers');
}

// 02 The four AOs and audiences
{
  const Y = 116;
  let s = '';
  const h = hub(Y, 'The statement: “an invitation”', [
    { title: 'AO1', body: 'A clear, personal argument on the statement, with accurate dramatic terminology.', tfill: C.tealDark },
    { title: 'AO2', body: 'Dramatic methods: verse and prose, soliloquy, staging, structure, imagery, dialogue.', tfill: C.tealDark },
    { title: 'AO3', body: 'Contexts of writing and reception: early modern ideas, genre, performance history, adaptation.', tfill: C.tealDark },
    { title: 'AO5', body: 'Different interpretations: critics, productions, different audiences, class debate.', tfill: C.olive, fill: C.cream, edge: C.olive },
  ], { cardW: 290, r: 98, csize: 18 });
  s += h.s;
  const y2 = Y + h.h + 22;
  const n = note(y2, 'The statement is an invitation to show that texts can be read in different ways. You may draw on wider critical reading, class discussion, or “performances they have seen or viewed”.');
  s += n.s;
  const y3 = y2 + n.h + 16;
  const c = card(30, y3, 840, { kicker: 'THE WORD THAT KEEPS APPEARING', title: 'Audiences', body: 'Treat the play as something performed and received, not just read: how Shakespeare uses dramatic forms to evoke responses in audiences.', fill: C.tealLight, edge: C.tealDark, size: 17 });
  s += c.s;
  add('02-four-aos-and-audiences',
    svg(900, Math.round(y3 + c.h + 24), 'Four objectives around one statement', s),
    'The statement, described by the specification as an invitation, sits at the centre of four objectives: AO1, a personal argument with dramatic terminology; AO2, dramatic methods; AO3, contexts of writing and reception; and AO5, interpretations from critics, productions, audiences and class debate. Below, the word audiences: treat the play as performed and received.',
    'The statement invites different readings; treat the play as performed and received.',
    '## The four AOs together');
}

// 03 Dramatic methods
{
  const Y = 116;
  const items = [
    ['Verse and prose', 'Shifts often mark status, intimacy, madness or loss of control.', 'vp'],
    ['Soliloquy and aside', 'What the audience knows that other characters do not.', 'sol'],
    ['Structure', 'The placing of scenes, parallel plots, the pace of the final act.', 'str'],
    ['Staging', 'Entrances and exits, who is silent on stage, implied stage directions.', 'stg'],
    ['Imagery clusters', 'Recurring images (disease, sight, clothing, animals) build meaning across the play.', 'img'],
    ['Endings', 'What order is restored, and at what cost?', 'end'],
  ];
  const w = (840 - 2 * 14) / 3, iconH = 84;
  const hs = items.map(([t1, b]) => card(0, 0, w, { title: t1, body: b, size: 16, tsize: 19, pad: 16 }).h);
  const H = Math.max(...hs) + iconH + 4;
  let s = '';
  items.forEach(([t1, b, k], i) => {
    const x = 30 + (i % 3) * (w + 14), y = Y + Math.floor(i / 3) * (H + 14);
    s += panel(x, y, w, H) + `<rect x="${x + 12}" y="${y + 12}" width="${w - 24}" height="${iconH - 8}" rx="10" fill="${i % 2 ? C.cream : C.tealLight}"/>`;
    const cx = x + w / 2, cy = y + 12 + (iconH - 8) / 2;
    if (k === 'vp') s += [0, 1].map((r) => `<line x1="${cx - 80}" y1="${cy - 12 + r * 14}" x2="${cx - 10 - r * 6}" y2="${cy - 12 + r * 14}" stroke="${C.ink}" stroke-width="5" stroke-linecap="round" opacity="0.6"/>`).join('') + [0, 1, 2].map((r) => `<line x1="${cx + 10}" y1="${cy - 16 + r * 12}" x2="${cx + 90 - (r === 2 ? 30 : 0)}" y2="${cy - 16 + r * 12}" stroke="${C.olive}" stroke-width="5" stroke-linecap="round" opacity="0.7"/>`).join('') + T(cx - 45, cy + 30, 'verse', { size: 15, anchor: 'middle', fill: C.muted }) + T(cx + 50, cy + 30, 'prose', { size: 15, anchor: 'middle', fill: C.muted });
    if (k === 'sol') s += pawn(cx - 40, cy + 30, C.mustard, 0.6) + speech(cx - 20, cy - 34, 70, 28) + T(cx + 15, cy - 15, '…', { size: 18, weight: 700, anchor: 'middle' }) + eye(cx + 80, cy + 10, 0.9);
    if (k === 'str') s += [0, 1, 2, 3, 4].map((r) => `<rect x="${cx - 100 + r * 42}" y="${cy - 26}" width="36" height="22" rx="4" fill="${r === 4 ? C.mustard : C.panel}" stroke="${C.ink}" stroke-width="2"/>`).join('') + [0, 1, 2].map((r) => `<rect x="${cx - 79 + r * 56}" y="${cy + 6}" width="36" height="18" rx="4" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>`).join('');
    if (k === 'stg') s += `<rect x="${cx - 100}" y="${cy - 30}" width="200" height="58" fill="${C.sand}" stroke="${C.ink}" stroke-width="2.5"/>` + pawn(cx - 50, cy + 24, C.teal, 0.42) + pawn(cx + 10, cy + 24, C.panel, 0.42) + arrow(cx + 50, cy, cx + 96, cy, { w: 2.5 });
    if (k === 'img') s += ['disease', 'sight', 'clothing', 'animals'].map((t2, r) => `<circle cx="${cx - 90 + r * 60}" cy="${cy - 8}" r="8" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`).join('') + path(`M${cx - 90},${cy - 8} L${cx + 90},${cy - 8}`, { stroke: C.olive, w: 2, extra: 'stroke-dasharray="5 4"' }) + T(cx, cy + 24, 'a recurring cluster', { size: 15, anchor: 'middle', fill: C.muted });
    if (k === 'end') s += `<g transform="translate(${cx},${cy - 16}) scale(0.62) translate(${-cx},${-(cy - 16)})">` + scaleIcon(cx, cy - 16, 0.4, { half: 60 }) + '</g>' + T(cx - 80, cy + 10, 'order', { size: 15, anchor: 'middle', fill: C.muted }) + T(cx + 80, cy + 10, 'cost', { size: 15, anchor: 'middle', fill: C.muted });
    s += card(x, y + iconH - 6, w, { title: t1, body: b, size: 16, tsize: 19, pad: 16, fill: 'none', edge: 'none' }).s.replace(/<rect[^>]*fill="none" stroke="none"[^>]*\/>/, '');
  });
  add('03-dramatic-methods',
    svg(900, Math.round(Y + 2 * H + 14 + 24), 'Dramatic methods to analyse', s),
    'Six methods with small icons: verse and prose shifts that mark status, intimacy, madness or loss of control; soliloquy and aside, giving the audience knowledge others lack; structure, from scene placing to parallel plots and the final act; staging, including entrances, exits and silent characters; recurring imagery clusters; and endings, asking what order is restored and at what cost.',
    'Analyse the play as theatre: verse, soliloquy, structure, staging, imagery and endings.',
    '## Dramatic methods to analyse');
}

// 04 The four plays: debates
{
  const Y = 116;
  const rows = [
    ['Hamlet', 'Soliloquies; the play-within-the-play; revenge tragedy conventions', 'Delay as moral seriousness or weakness; Ophelia and Gertrude as victims or agents; the Ghost’s reliability'],
    ['King Lear', 'Double plot (Lear and Gloucester); storm scenes; the Fool', 'Redemption or nihilism; the ending; Nahum Tate’s adapted ending as reception'],
    ['Measure for Measure', 'Disguised Duke; bed-trick; a comic ending with unsettling silences', 'Justice and mercy; the Duke as providential or manipulative; Isabella’s silence at the end'],
    ['The Taming of the Shrew', 'Induction with Christopher Sly; disguise; the wager scene', 'Katherina’s final speech as sincere, ironic or strategic; farce or social criticism'],
  ];
  const tb = table(Y, ['Play', 'Dramatic features', 'Interpretive debates (AO5)'], rows, [200, 300, 340], { size: 16 });
  add('04-four-plays-debates',
    svg(900, Math.round(Y + tb.h + 24), 'The four plays: features and debates', tb.s),
    'A table of the four set plays. Hamlet: soliloquies, the play-within-the-play and revenge conventions; debates on delay, Ophelia and Gertrude, and the Ghost. King Lear: the double plot, storm and Fool; redemption or nihilism and Tate’s adapted ending. Measure for Measure: the disguised Duke, bed-trick and uneasy comic ending; justice and mercy and Isabella’s silence. The Taming of the Shrew: the Sly Induction and wager; Katherina’s final speech and farce or criticism.',
    'Each play has dramatic features to analyse and debates to weigh.',
    '## The four plays: debates worth knowing');
}

// 05 Responding to the statement
{
  const Y = 120;
  let s = '';
  const st = steps(Y, [
    { title: 'Unpack the statement', body: 'Identify the key terms and what they assume.' },
    { title: 'Take a position', body: 'Agree, disagree or qualify.' },
    { title: 'Test it across the play', body: 'An early scene, a turning point, the ending.' },
    { title: 'Analyse dramatic methods', body: 'In each piece of evidence.' },
    { title: 'Introduce alternative readings and contexts', body: 'AO5 and AO3, where they explain the evidence.' },
    { title: 'Reach a judgement', body: 'One that answers the statement.' },
  ], { x: 30, w: 520, gap: 8, size: 16, tsize: 18, highlight: 4 });
  s += st.s;
  const px = 580, pw = 290;
  s += panel(px, Y, pw, st.h, C.panel, C.tealDark) + T(px + pw / 2, Y + 34, 'Test across the play', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  const bx = px + pw - 90, by = Y + 60, bh = st.h - 120;
  s += `<rect x="${bx}" y="${by}" width="60" height="${bh}" rx="6" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>`;
  [[0.08, 'an early scene'], [0.5, 'a turning point'], [0.92, 'the ending']].forEach(([f, l]) => { const yy = by + f * bh; s += `<rect x="${bx}" y="${yy - 14}" width="60" height="28" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + T(bx - 10, yy + 5, l, { size: 15, weight: 700, anchor: 'end' }); });
  s += T(px + pw / 2, Y + st.h - 26, 'the whole play', { size: 15, anchor: 'middle', fill: C.muted });
  add('05-responding-to-statement',
    svg(900, Math.round(Y + st.h + 24), 'Responding to the statement', s),
    'Six steps: unpack the statement’s key terms and assumptions, take a position, test it across the play, analyse dramatic methods in each piece of evidence, introduce alternative readings and contexts where they explain the evidence, and reach a judgement. A bar of the whole play marks an early scene, a turning point and the ending as test points.',
    'Unpack, take a position, test across the play, then judge.',
    '## Responding to the statement');
}

// 06 Worked plan: Ophelia
{
  const Y = 118;
  let s = '';
  const stc = card(30, Y, 840, { kicker: 'STATEMENT (ORIGINAL)', title: '“Ophelia is the play’s true victim.”', fill: C.tealLight, edge: C.tealDark, tsize: 20 });
  s += stc.s;
  const y1 = Y + stc.h + 14;
  const th = card(30, y1, 840, { kicker: 'THESIS', body: 'The character the play most fully sacrifices, but presenting her only as a victim ignores the moments in which the play gives her a voice more disruptive than anyone’s.', fill: C.cream, edge: C.olive, kfill: C.olive, bfill: C.ink, size: 16 });
  s += th.s;
  const rows = [
    ['1 Obedience', 'Told by Laertes and Polonius to reject Hamlet; bait in the “nunnery” scene while her father and the King watch', 'AO2 staging; AO3 expectations of daughters'],
    ['2 Hamlet’s cruelty', '“Get thee to a nunnery”: victim of his performed madness or genuine disgust?', 'AO5 readings of Hamlet'],
    ['3 Madness', 'Act 4 songs and flowers; from verse to song and broken speech', 'AO2 form; AO5 release or collapse'],
    ['4 Death reported', 'Gertrude’s lyrical account; the gravediggers’ debate over her burial', 'AO2 structure; AO3 attitudes to suicide'],
    ['5 Reception', 'Victorian painting; feminist criticism including Elaine Showalter’s essay; productions that foreground her', 'AO3 reception; AO5'],
  ];
  const tb = table(y1 + th.h + 14, ['Paragraph', 'Evidence', 'AOs'], rows, [190, 450, 200], { size: 15 });
  s += tb.s;
  const y3 = y1 + th.h + 14 + tb.h + 14;
  const j = card(30, y3, 840, { kicker: 'CONCLUSION', body: 'A victim of the play’s male world, but the staging of her madness gives her a voice it denies her in sanity.', fill: C.cream, edge: C.olive, kfill: C.olive, bfill: C.ink, size: 16 });
  s += j.s;
  add('06-worked-plan-ophelia',
    svg(900, Math.round(y3 + j.h + 24), 'Worked plan: “Ophelia is the play’s true victim”', s),
    'A plan for the statement that Ophelia is Hamlet’s true victim. Thesis: she is the most fully sacrificed but also given a disruptive voice. Five paragraphs: her obedience and use as bait, Hamlet’s cruelty, her madness in Act 4, her reported death, and reception from Victorian painting to feminist criticism, each with its assessment objectives. Conclusion: a victim whose madness gives her a voice denied her in sanity.',
    'Each paragraph tests the statement with evidence, method and a named objective.',
    '## Worked example: Hamlet');
}

// 07 Model paragraph: Ophelia's two voices
{
  const Y = 120;
  let s = '';
  const L = card(30, Y, 412, { kicker: 'BEFORE ACT 4', title: 'Brief, obedient replies', body: ['“I shall obey, my lord”', 'Her one soliloquy laments Hamlet rather than herself.'], bullets: true, fill: C.panel, edge: C.tealDark, size: 16, minH: 196 });
  const R = card(458, Y, 412, { kicker: 'IN MADNESS', title: 'A freedom of speech she never had', body: ['Fragments of bawdy songs', 'Flowers distributed with pointed meanings', 'What a dutiful daughter could not say emerges in disordered form'], bullets: true, fill: C.cream, edge: C.olive, kfill: C.olive, size: 16, minH: 196 });
  s += L.s + R.s;
  // voice meters
  const meter = (x, n, f) => [0, 1, 2, 3, 4, 5].map((i) => `<rect x="${x + i * 22}" y="${Y + 172 - (i + 1) * 4}" width="14" height="${(i + 1) * 4 + 6}" rx="2" fill="${i < n ? f : C.bg}" stroke="${C.ink}" stroke-width="1.5"/>`).join('');
  const y2 = Y + 230;
  s += T(30, y2 + 6, 'Two production readings (AO5)', { size: 19, weight: 700 });
  const r = row(y2 + 22, [
    { title: 'Pathetic collapse', body: 'Invites the audience’s pity.' },
    { title: 'Unsettling and accusatory', body: 'Forces the court to watch what it has done.', fill: '#f6e3d6', edge: C.rust, tfill: C.rust },
  ], { gap: 16, card: { size: 16, tsize: 19 } });
  s += r.s;
  const y3 = y2 + 22 + r.h + 16;
  const j = card(30, y3, 840, { kicker: 'JUDGEMENT', title: 'At once the play’s victim and one of its most disturbing witnesses', body: 'The second reading supports madness as a licence for truth, as with Hamlet’s “antic disposition”.', fill: C.cream, edge: C.olive, kfill: C.olive, size: 16, tsize: 19 });
  s += j.s;
  add('07-model-paragraph-ophelia',
    svg(900, Math.round(y3 + j.h + 24), 'Model paragraph: madness as a licence for truth', s),
    'Two panels compare Ophelia before Act 4, with brief obedient replies such as “I shall obey, my lord”, and in madness, where bawdy songs and pointed flowers give her a freedom of speech. Two production readings follow: pathetic collapse inviting pity, or unsettling accusation of the court. The judgement: she is both victim and disturbing witness.',
    'Madness gives Ophelia a voice, and productions decide whether it pities or accuses.',
    '## Worked example: Hamlet');
}
