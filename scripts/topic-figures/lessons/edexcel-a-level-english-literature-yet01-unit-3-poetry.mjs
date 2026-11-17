import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-a-level-english-literature-yet01-unit-3-poetry';
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
  const fig = compose('Unit 3 Section A at a glance', [
    (y) => { const b = markBar(y + 26, [{ label: 'Section A: Poetry', sub: '20 marks', value: 20, fill: C.mustard }, { label: 'Section B: comparative prose', sub: '30 marks', value: 30, fill: C.tealLight }]); return { s: T(30, y + 14, 'Unit 3 · 2 hours · open book · 50 marks', { size: 17, weight: 700, fill: C.muted }) + b.s, h: b.h + 26 }; },
    (y) => label(y - 6, 'Allocate time roughly in proportion to marks: Section B needs the larger share.', { size: 17, fill: C.olive }),
    (y) => {
      let s = page(70, y, 100, 116, { lines: 6, fill: C.cream }) + T(120, y + 140, 'one unseen poem', { size: 16, weight: 700, anchor: 'middle' });
      const c = card(220, y, 650, { body: ['One compulsory essay: no choice of question.', 'A post-1900 poem printed in a Source Booklet.', 'No comparison: every sentence is about this poem, read closely.'], bullets: true, size: 17, minH: 150, vcenter: true });
      return { s: s + c.s, h: Math.max(150, c.h) };
    },
    (y) => {
      const r = row(y, [
        { title: 'AO1', body: 'A personal, informed reading: clear thesis, sustained argument, accurate terminology, controlled expression.', tfill: C.tealDark },
        { title: 'AO2', body: 'How meanings are shaped: form, structure, language, imagery, sound, voice, tone.', tfill: C.tealDark },
        { title: 'Not assessed', body: 'AO3 context and AO4 connections.', fill: '#f6e3d6', edge: C.rust, tfill: C.rust },
      ], { gap: 14, card: { size: 16, tsize: 20, pad: 16 } });
      return r;
    },
  ]);
  add('01-section-a-at-a-glance', fig,
    'Unit 3 is a two-hour open-book paper worth 50 marks: Section A Poetry is 20 marks and Section B comparative prose 30, so time is allocated roughly in proportion. Section A is one compulsory essay on one unseen post-1900 poem printed in a Source Booklet, with no comparison. It is assessed on AO1 and AO2 only; AO3 and AO4 are not assessed.',
    'One compulsory essay on one unseen poem: 20 marks, AO1 and AO2 only.',
    '## What Section A covers');
}

// 02 Two phrases that matter
{
  const Y = 120;
  let s = '';
  const L = card(30, Y, 412, { kicker: '“FUNCTION OF KEY FEATURES”', title: 'What a feature does in this poem', body: 'Not that it exists.', fill: C.tealLight, edge: C.tealDark, size: 17, tsize: 20, minH: 280 });
  const R = card(458, Y, 412, { kicker: '“ATTITUDES AND VALUES”', title: 'The poem’s stance', body: 'What it seems to:', fill: C.cream, edge: C.olive, kfill: C.olive, size: 17, tsize: 20, minH: 280 });
  s += L.s + R.s;
  // left: weak vs strong
  s += card(50, Y + 140, 372, { body: '“There is enjambment in line 6.”', size: 16, pad: 12, bfill: C.ink, edge: C.rust }).s + cross(410, Y + 140, 12);
  s += arrow(236, Y + 196, 236, Y + 214, { w: 3 });
  s += card(50, Y + 220, 372, { body: 'What the line break does to meaning here.', size: 16, pad: 12, bfill: C.ink, edge: C.tealDark }).s + tick(410, Y + 220, 12);
  let x = 478, yy = Y + 140;
  ['admire', 'fear', 'mourn', 'question'].forEach((w, i) => { const c = chip(x, yy, w, { size: 18, fill: C.panel, edge: C.olive }); s += c.s; x += c.w + 12; if (i === 1) { x = 478; yy += 50; } });
  const n = note(Y + 298, '“Personal and creative” (AO1) does not mean anything goes: it means a reading of your own, argued from evidence, that can acknowledge ambiguity.');
  s += n.s;
  add('02-two-key-phrases',
    svg(900, Math.round(Y + 298 + n.h + 24), 'Two phrases in the learning outcomes', s),
    '“Function of key features” means explaining what a feature does in this poem, not that it exists: “there is enjambment in line 6” is crossed out. “Attitudes and values” means the poem’s stance: what it seems to admire, fear, mourn or question. A note explains that a personal and creative response is a reading of your own argued from evidence.',
    'Explain what features do, and find what the poem admires, fears, mourns or questions.',
    '## What the learning outcomes ask');
}

// 03 Reading sequence
{
  const Y = 132;
  let s = T(30, Y - 10, 'Roughly ten minutes of reading and planning before you write', { size: 17, weight: 700, fill: C.muted });
  const items = [
    ['Situation and voice', 'Who speaks, to whom, where, when? A persona or an addressee?'],
    ['First impression', 'One sentence: what it seems to be about and how it feels.'],
    ['Shape', 'Stanzas, line length, rhyme, regularity or disruption. A recognisable form?'],
    ['Movement', 'Where does it turn? Tense, tone, addressee, sentence length, a volta.'],
    ['Language clusters', 'Two or three semantic fields; notice where they collide.'],
    ['Sound and rhythm', 'Read silently “aloud”: where does it speed up, slow, break?'],
    ['The ending', 'What has changed between first and last lines?'],
    ['Thesis', 'One or two sentences answering the question, ideally with an ambiguity.'],
  ];
  const w = 412;
  const hs = items.map(([t1, b]) => card(0, 0, w - 58, { title: t1, body: b, size: 16, tsize: 18, pad: 14 }).h);
  const rh = [0, 1, 2, 3].map((r) => Math.max(hs[r], hs[r + 4]));
  let y = Y + 8;
  for (let r = 0; r < 4; r++) {
    [r, r + 4].forEach((i, c) => {
      const x = 30 + c * (w + 16);
      s += card(x + 58, y, w - 58, { title: items[i][0], body: items[i][1], size: 16, tsize: 18, pad: 14, minH: rh[r], fill: i === 7 ? C.cream : C.panel, edge: i === 7 ? C.olive : C.panelEdge }).s + badge(x + 26, y + rh[r] / 2, 21, String(i + 1), i === 7 ? C.mustard : C.cream);
    });
    y += rh[r] + 10;
  }
  const n = note(y + 6, 'Then plan four or five paragraphs that follow the poem’s movement or its main methods.');
  s += n.s;
  add('03-reading-sequence',
    svg(900, Math.round(y + 6 + n.h + 24), 'A reading sequence for the planning time', s),
    'Eight numbered steps for about ten minutes of planning: situation and voice, a one-sentence first impression, shape, movement and the turn, language clusters, sound and rhythm, the ending, and a thesis that ideally includes an ambiguity. Then plan four or five paragraphs following the poem’s movement or main methods.',
    'Eight quick reads, from situation and voice to a thesis with an ambiguity.',
    '## A reading sequence for the planning time');
}

// 04 Handling difficulty
{
  const Y = 120;
  const fig = compose('Handling unfamiliar forms and difficulty', [
    (y) => row(y, [
      { kicker: 'FORMS', title: 'Recognise, do not force', body: 'Fourteen lines and a turn: discuss its relationship to the sonnet. If it breaks the expected pattern, the break is your point.' },
      { kicker: 'FREE VERSE', title: 'Still shaped', body: 'Line breaks, white space and stanza lengths are choices.' },
    ], { gap: 16, card: { size: 16, tsize: 19 } }),
    (y) => row(y, [
      { kicker: 'DIFFICULT LINES', title: 'Do not avoid them', body: 'Offer a tentative reading, then show how the rest of the poem supports it.', fill: C.cream, edge: C.olive, kfill: C.olive },
      { kicker: 'AMBIGUITY', title: 'Credit-worthy', body: 'When you explain how the poem holds two meanings at once.', fill: C.cream, edge: C.olive, kfill: C.olive },
    ], { gap: 16, card: { size: 16, tsize: 19 } }),
    (y) => {
      let s = T(30, y + 18, 'Tentative phrasing:', { size: 18, weight: 700 });
      let x = 230; ['“this may suggest…”', '“one reading is…”'].forEach((p) => { const c = chip(x, y - 2, p, { size: 18, fill: C.tealLight, edge: C.tealDark, weight: 600 }); s += c.s; x += c.w + 14; });
      return { s, h: 34 };
    },
    (y) => note(y, 'Avoid overreaching: a symbolic reading with no evidence.', { title: 'But' }),
  ]);
  add('04-handling-difficulty', fig,
    'Four cards: recognise forms such as the sonnet without forcing them, and treat a broken pattern as your point; free verse is still shaped by line breaks, white space and stanza lengths; offer a tentative reading of difficult lines and support it from the rest of the poem; and explain ambiguity, which earns credit. Tentative phrases such as “this may suggest” and “one reading is” are shown, with a warning against unsupported symbolic readings.',
    'Be tentative with difficulty, precise about form, and never overreach.',
    '## Handling unfamiliar forms and difficulty');
}

// 05 The worked poem: how the three stanzas move
{
  const Y = 118;
  let s = '';
  const st = [
    ['Stanza 1', 'The past', ['Every night my father climbed', 'the hundred steps to keep a stranger’s ship', 'from breaking. I would count them from my bed,', 'his boots, then silence, then the lamp.'], C.tealLight, C.tealDark, 'Remembered through sounds she counted as a child'],
    ['Stanza 2', 'His silent care', ['He never spoke of storms. At breakfast', 'he would butter bread with careful hands', 'as if the knife might slip and sink us all.', 'We ate. The sea kept on rehearsing.'], C.cream, C.olive, 'Gestures, not words'],
    ['Stanza 3', 'The present', ['They have automated it now. A box', 'turns on the light. No one climbs.', 'And I, who used to count, lie wide awake', 'to hear the hundred steps that no one takes.'], '#f6e3d6', C.rust, 'The lighthouse works without him'],
  ];
  s += `<text x="30" y="${Y + 6}" font-size="18" font-weight="700" fill="${C.ink}">The Lighthouse Keeper’s Daughter <tspan font-weight="400" font-style="italic" fill="${C.muted}" font-size="15">(original poem written for the guide)</tspan></text>`;
  let y = Y + 22;
  st.forEach(([lab, k, lines, f, e, gl], i) => {
    const h = 4 * 26 + 26;
    s += `<rect x="30" y="${y}" width="560" height="${h}" rx="12" fill="${C.panel}" stroke="${e}" stroke-width="2.5"/>`;
    lines.forEach((l, j) => { s += T(48, y + 32 + j * 26, l, { size: 16 }); });
    s += `<rect x="610" y="${y}" width="260" height="${h}" rx="12" fill="${f}" stroke="${e}" stroke-width="2.5"/>`;
    s += T(628, y + 30, lab, { size: 15, weight: 700, fill: e }) + T(628, y + 56, k, { size: 20, weight: 700 });
    s += para(628, y + 84, gl, 212, { size: 15, fill: C.ink }).s;
    y += h + (i < 2 ? 30 : 0);
    if (i < 2) s += arrow(740, y - 28, 740, y - 4, { w: 3 });
  });
  const n = note(y + 18, 'The loss of the father and the loss of a way of life become the same absence.', { title: 'The overall reading' });
  s += n.s;
  add('05-worked-poem-movement',
    svg(900, Math.round(y + 18 + n.h + 24), 'How the worked poem moves', s),
    'The guide’s original three-stanza poem, The Lighthouse Keeper’s Daughter, with each stanza labelled. Stanza 1, the past: the father climbs the steps and the child counts the sounds. Stanza 2, his silent care: gestures at breakfast rather than words. Stanza 3, the present: the light is automated and no one climbs. The overall reading is that losing the father and losing a way of life become one absence.',
    'Past, silent care, present: the stanza structure carries the reading.',
    '## Worked example on an original poem');
}

// 06 Annotated final stanza
{
  const Y = 118;
  let s = '';
  const ph = 4 * 40 + 60;
  s += panel(30, Y, 840, ph, C.panel, C.ink) + T(50, Y + 30, 'Stanza 3', { size: 15, weight: 700, fill: C.muted });
  const sp = (str, k) => k ? `<tspan fill="${k}" font-weight="700">${X(str)}</tspan>` : X(str);
  const L = [
    [['They have automated it now.', C.rust], [' A ', ''], ['box', C.olive]],
    [['turns on the light. No one climbs.', C.tealDark]],
    [['And I, who used to count, lie ', ''], ['wide awake', C.blue]],
    [['to hear ', ''], ['the hundred steps that no one takes', C.olive], ['.', '']],
  ];
  L.forEach((segs, i) => { s += `<text x="110" y="${Y + 70 + i * 40}" font-size="20" fill="${C.ink}" xml:space="preserve">${segs.map(([t1, k]) => sp(t1, k)).join('')}</text>`; });
  [[0, '1'], [1, '2'], [2, '5'], [3, '4']].forEach(([i, n]) => { s += badge(70, Y + 63 + i * 40, 14, n, C.mustard); });
  s += badge(110 + cw(20) * 'They have automated it now. A box'.length + 30, Y + 63, 14, '3', C.mustard);
  const A = [
    ['Tense and pronoun', '“They have automated it now”: a flat, impersonal pronoun and the present tense break the remembered rhythm.', C.rust],
    ['Short sentences', '“A box / turns on the light. No one climbs.” reduce the father’s labour to a mechanism.', C.tealDark],
    ['Enjambment after “box”', 'Isolates the word, as if the machine were a coffin for the old life (a tentative reading).', C.olive],
    ['Reversal and paradox', 'The child who counted real steps now hears steps “that no one takes”: hearing absence.', C.olive],
    ['Closing half-rhyme', '“wide awake” / “takes”: memory as a kind of sleeplessness, faithful to what no longer exists.', C.blue],
  ];
  let y = Y + ph + 16;
  A.forEach(([t1, b, e], i) => {
    const c = card(80, y, 790, { title: t1, body: b, size: 16, tsize: 18, pad: 12, edge: e, tfill: e });
    s += c.s + badge(48, y + c.h / 2, 16, String(i + 1), C.mustard);
    y += c.h + 8;
  });
  add('06-annotated-final-stanza',
    svg(900, Math.round(y + 16), 'Analysing the final stanza', s),
    'The final stanza of the guide’s original poem with five numbered features. 1: the flat pronoun and present tense of “They have automated it now”. 2: short sentences reduce the father’s labour to a mechanism. 3: enjambment after “box” isolates it, as if a coffin. 4: the reversal of the opening into hearing steps “that no one takes”. 5: the half-rhyme of “wide awake” and “takes” suggests memory as sleeplessness.',
    'Tense, syntax, enjambment, paradox and rhyme, each tied to meaning.',
    '## Worked example on an original poem');
}

// 07 Building the essay
{
  const Y = 120;
  let s = '';
  const r = row(Y, [
    { title: 'Introduction', body: 'Situation, overall reading, and how the structure carries it.' },
    { title: 'Body', body: 'Four or five paragraphs following the poem’s movement or key methods. Group lines by function, not line by line.', fill: C.cream, edge: C.olive },
    { title: 'Conclusion', body: 'What the ending leaves the reader with; acknowledge an alternative reading.' },
  ], { arrows: true, gap: 40, card: { size: 16, tsize: 19, pad: 16 } });
  s += r.s;
  const y2 = Y + r.h + 34;
  s += T(30, y2 + 6, 'Each paragraph', { size: 20, weight: 700 });
  const r2 = row(y2 + 22, ['Point on the question focus', 'Short quotation', 'Method', 'Effect', 'Link to the overall reading'].map((b, i) => ({ body: b, align: 'middle', bfill: C.ink, fill: i === 4 ? C.tealLight : C.panel, edge: i === 4 ? C.tealDark : C.panelEdge })), { arrows: true, gap: 30, minH: 84, card: { size: 16, pad: 10 } });
  s += r2.s;
  const y3 = y2 + 22 + r2.h + 24;
  const r3 = row(y3, [
    { title: 'Context or biography', body: 'Earns nothing in Section A.' },
    { title: 'Comparison with Unit 1', body: 'Not assessed here.' },
    { title: 'Line-by-line commentary', body: 'Never builds an argument.' },
  ], { gap: 14, card: { size: 16, tsize: 18, pad: 14, edge: C.rust, tfill: C.rust } });
  s += r3.s + [0, 1, 2].map((i) => cross(30 + (i + 1) * ((840 - 28) / 3) + i * 14 - 14, y3 + 14, 12)).join('');
  add('07-building-the-essay',
    svg(900, Math.round(y3 + r3.h + 24), 'Building the essay', s),
    'The essay runs from an introduction (situation, overall reading, structure) through four or five body paragraphs grouped by function to a conclusion on what the ending leaves and an alternative reading. Each paragraph moves from a point on the question focus to a short quotation, method, effect and link to the overall reading. Three crossed-out mistakes: context or biography, comparison with Unit 1, and line-by-line commentary.',
    'Group lines by function and link every paragraph back to the overall reading.',
    '## Building the essay');
}
