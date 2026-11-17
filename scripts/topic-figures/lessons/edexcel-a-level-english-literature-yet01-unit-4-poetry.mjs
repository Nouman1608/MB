import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-a-level-english-literature-yet01-unit-4-poetry';
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
const MOV = [
  ['Metaphysical Poets', 'Metaphysical Poetry', 'ed. Colin Burrow (Penguin, 2006)', C.tealLight, C.tealDark],
  ['The Victorians', 'The New Oxford Book of Victorian Verse', 'ed. Christopher Ricks (OUP, 2008)', C.cream, C.olive],
  ['The Romantics', 'English Romantic Verse', 'ed. David Wright (Penguin Classics, 1973)', '#f6e3d6', C.rust],
];

// 01 Section B at a glance
{
  const fig = compose('Unit 4 Section B at a glance', [
    (y) => { const b = markBar(y + 26, [{ label: 'Section A', sub: '25 marks', value: 25, fill: C.tealLight }, { label: 'Section B: Pre-1900 Poetry', sub: '25 marks · one essay', value: 25, fill: C.mustard }]); return { s: T(30, y + 14, 'Unit 4 · 50 marks · open book', { size: 17, weight: 700, fill: C.muted }) + b.s, h: b.h + 26 }; },
    (y) => {
      let s = T(30, y + 18, 'Prescribed poems from one movement', { size: 19, weight: 700 });
      const w = (840 - 2 * 14) / 3;
      const cs = MOV.map(([m, c, ed]) => card(0, 0, w, { title: m, body: [c, ed], size: 15, tsize: 19, pad: 16 }));
      const h = Math.max(...cs.map((c) => c.h)) + 6;
      MOV.forEach(([m, c, ed, f, e], i) => {
        const x = 30 + i * (w + 14), yy = y + 34;
        s += panel(x, yy, w, h, f, e) + T(x + 16, yy + 34, m, { size: 19, weight: 700, fill: e });
        s += para(x + 16, yy + 64, c, w - 32, { size: 16, italic: true, fill: C.ink }).s;
        const ph = para(x + 16, yy + 64, c, w - 32, { size: 16 }).h;
        s += para(x + 16, yy + 70 + ph, ed, w - 32, { size: 15, fill: C.muted }).s;
      });
      return { s, h: h + 34 };
    },
    (y) => card(30, y, 840, { kicker: 'THE QUESTION', title: 'A statement about your movement', body: 'Respond considering relevant contextual factors and different interpretations. One essay from a choice of two.', fill: C.cream, edge: C.olive, kfill: C.olive, size: 17 }),
    (y) => {
      let s = T(30, y + 18, 'Assessed on', { size: 19, weight: 700 });
      let x = 160; ['AO1', 'AO2', 'AO3', 'AO5'].forEach((a) => { const c = chip(x, y - 2, a, { size: 18, fill: C.tealLight, edge: C.tealDark }); s += c.s; x += c.w + 10; });
      return { s, h: 30 };
    },
    (y) => note(y + 6, 'Only the poems listed in the specification’s appendix are prescribed; check the current list with your teacher.'),
  ]);
  add('01-section-b-at-a-glance', fig,
    'Section B is worth 25 of Unit 4’s 50 marks: one open-book essay, from a choice of two, responding to a statement about one movement, considering context and different interpretations. The movements and collections are the Metaphysical Poets (ed. Colin Burrow), the Victorians (ed. Christopher Ricks) and the Romantics (ed. David Wright). It is assessed on AO1, AO2, AO3 and AO5.',
    'One essay testing a statement about a whole poetic movement.',
    '## What Section B covers');
}

// 02 Ranging and depth
{
  const Y = 120;
  let s = '';
  s += card(250, Y, 400, { kicker: 'THE STATEMENT', title: 'about the movement', fill: C.mustard, edge: C.olive, kfill: C.ink, align: 'middle', minH: 90, vcenter: true }).s;
  const ly = Y + 140;
  s += `<line x1="80" y1="${ly}" x2="820" y2="${ly}" stroke="${C.ink}" stroke-width="4" marker-start="url(#ah)" marker-end="url(#ah)"/>`;
  s += T(80, ly + 36, 'supports it', { size: 17, weight: 700, fill: C.tealDark }) + T(820, ly + 36, 'complicates it', { size: 17, weight: 700, anchor: 'end', fill: C.rust });
  const poems = [[0.12, 'A', true], [0.4, 'B', true], [0.62, 'C', false], [0.88, 'D', true]];
  poems.forEach(([p, l, deep]) => { const x = 80 + p * 740; s += badge(x, ly, 18, l, deep ? C.cream : C.panel); });
  s += T(80 + 0.62 * 740, ly + 62, 'shorter reference', { size: 15, anchor: 'middle', fill: C.muted });
  const y2 = ly + 84;
  const r = row(y2, [
    { title: 'Three or four poems', body: 'Each analysed in at least one detailed paragraph.' },
    { title: 'Shorter references', body: 'Supporting references to other poems.' },
    { title: 'Test the statement', body: 'At least one poem that supports it and one that complicates it.', fill: C.cream, edge: C.olive },
  ], { gap: 14, card: { size: 16, tsize: 19, pad: 16 } });
  s += r.s;
  const n = note(y2 + r.h + 16, 'A movement question invites range, but marks come from analysis.');
  s += n.s;
  add('02-ranging-and-depth',
    svg(900, Math.round(y2 + r.h + 16 + n.h + 24), 'Ranging and depth', s),
    'A statement about the movement sits above a line running from “supports it” to “complicates it”, with poems placed along it, including one used only for a shorter reference. Guidance: analyse three or four poems in at least one detailed paragraph each, add shorter supporting references, and choose at least one poem that supports and one that complicates the statement.',
    'Three or four poems in depth, chosen to both support and complicate the statement.',
    '## Ranging and depth');
}

// 03 Movement profiles
{
  const Y = 116;
  const data = [
    ['Metaphysical', ['Love, sex, death and God', 'Argument and persuasion', 'The soul and the body'], ['Conceits', 'Dialectical argument', 'Colloquial, dramatic openings', 'Wit and paradox'], 'Donne: “The Flea”, Holy Sonnets · Marvell: “To His Coy Mistress”, “The Definition of Love” · Bradstreet: “A Letter to her Husband”', C.tealLight, C.tealDark],
    ['Romantic', ['Nature and the imagination', 'The individual self', 'Childhood and memory', 'Protest against social injustice'], ['The ode', 'Lyric first person', 'Blank-verse meditation', 'The sublime', 'Ballad-like simplicity (Blake)'], 'Blake: “London” · Wordsworth: “Tintern Abbey”, “Lines Written in Early Spring” · Keats: “Ode to a Nightingale”', '#f6e3d6', C.rust],
    ['Victorian', ['Faith and doubt', 'Grief and memory', 'Love and its constraints', 'Social change'], ['Dramatic monologue', 'Elegy', 'Lyric sequences', 'Irony'], 'Tennyson: In Memoriam · Browning: “My Last Duchess” · Rossetti: “Remember”, “Echo” · Hardy: “The Darkling Thrush”, “Drummer Hodge”', C.cream, C.olive],
  ];
  const w = (840 - 2 * 14) / 3;
  let s = '';
  const parts = data.map(([m, con, meth, poems]) => {
    const a = card(0, 0, w - 24, { kicker: 'CONCERNS', body: con, bullets: true, size: 15, pad: 12 }).h;
    const b = card(0, 0, w - 24, { kicker: 'METHODS', body: meth, bullets: true, size: 15, pad: 12 }).h;
    const c = card(0, 0, w - 24, { kicker: 'POEMS OFTEN DISCUSSED', body: poems, size: 15, pad: 12 }).h;
    return [a, b, c];
  });
  const H = [0, 1, 2].map((k) => Math.max(...parts.map((p) => p[k])));
  data.forEach(([m, con, meth, poems, f, e], i) => {
    const x = 30 + i * (w + 14);
    const tot = 56 + H[0] + H[1] + H[2] + 3 * 10 + 4;
    s += panel(x, Y, w, tot, f, e) + T(x + w / 2, Y + 36, m, { size: 21, weight: 700, anchor: 'middle', fill: e });
    let yy = Y + 56;
    s += card(x + 12, yy, w - 24, { kicker: 'CONCERNS', body: con, bullets: true, size: 15, pad: 12, minH: H[0], kfill: e, bfill: C.ink }).s; yy += H[0] + 10;
    s += card(x + 12, yy, w - 24, { kicker: 'METHODS', body: meth, bullets: true, size: 15, pad: 12, minH: H[1], kfill: e, bfill: C.ink }).s; yy += H[1] + 10;
    s += card(x + 12, yy, w - 24, { kicker: 'POEMS OFTEN DISCUSSED', body: poems, size: 15, pad: 12, minH: H[2], kfill: e }).s;
  });
  const tot = 56 + H[0] + H[1] + H[2] + 34;
  add('03-movement-profiles',
    svg(900, Math.round(Y + tot + 24), 'Three movements at a glance', s),
    'Three columns. Metaphysical: love, sex, death and God, argument and the soul and body, through conceits, dialectical argument, dramatic openings and wit, in poems by Donne, Marvell and Bradstreet. Romantic: nature, imagination, the self, childhood and social protest, through the ode, lyric first person, blank-verse meditation, the sublime and Blake’s ballad simplicity. Victorian: faith and doubt, grief, love’s constraints and social change, through dramatic monologue, elegy, sequences and irony.',
    'Each movement has its own concerns, methods and key poems.',
    '## Movement profiles');
}

// 04 AO3 context and AO5 debates per movement
{
  const Y = 116;
  const rows = [
    ['Metaphysical', 'The term was applied later, critically, by Samuel Johnson in his life of Cowley; seventeenth-century learning, new science, religious controversy; manuscript circulation among coteries', 'Johnson: “most heterogeneous ideas are yoked by violence together” against T. S. Eliot (1921): a fusion of thought and feeling before a “dissociation of sensibility”'],
    ['Romantic', 'The French Revolution and its aftermath; industrialisation and the growth of cities; Wordsworth’s Preface: poetry as “the spontaneous overflow of powerful feelings”', 'Escape into nature and the self, against political engagement (Blake’s protest, Wordsworth on rural poverty)'],
    ['Victorian', 'Religious doubt in an age of geology and evolution; empire and its wars; mourning culture; constraints on women’s lives and voices', 'Consoling or doubtful? Does the dramatic monologue invite sympathy or judgement?'],
  ];
  const tb = table(Y, ['Movement', 'AO3: context worth using', 'AO5: debates to test'], rows, [170, 360, 310], { size: 16 });
  const n = note(Y + tb.h + 18, 'Because the question is set on a movement, its literary context is central to AO3. Use a critical view as something to test against the poems, then reach your own judgement.');
  add('04-context-and-debates',
    svg(900, Math.round(Y + tb.h + 18 + n.h + 24), 'Literary context and critical debates', tb.s + n.s),
    'A table for each movement. Metaphysical: the label applied later by Johnson, new science and coterie manuscripts; debate between Johnson’s complaint of ideas “yoked by violence together” and Eliot’s praise of fused thought and feeling. Romantic: the French Revolution, industrial cities and Wordsworth’s Preface; debate between escape and political engagement. Victorian: doubt, empire, mourning and constraints on women; debate over consolation and the dramatic monologue.',
    'Literary context comes first, and each movement has a debate to test.',
    '## AO3: literary context first');
}

// 05 Worked plan: the Romantics
{
  const Y = 118;
  let s = '';
  const st = card(30, Y, 840, { kicker: 'STATEMENT (ORIGINAL)', title: '“Romantic poetry is more interested in the poet’s own feelings than in the world.”', fill: C.tealLight, edge: C.tealDark, tsize: 19 });
  s += st.s;
  const ly = Y + st.h + 70;
  s += `<line x1="80" y1="${ly}" x2="820" y2="${ly}" stroke="${C.ink}" stroke-width="4" marker-start="url(#ah)" marker-end="url(#ah)"/>`;
  s += T(80, ly + 36, 'the poet’s own feelings', { size: 16, weight: 700, fill: C.olive }) + T(820, ly + 36, 'the world', { size: 16, weight: 700, anchor: 'end', fill: C.rust });
  const P = [[0.1, '1', 'Ode to a Nightingale'], [0.45, '4', 'Tintern Abbey'], [0.55, '3', 'Lines Written in Early Spring'], [0.9, '2', 'London']];
  P.forEach(([p, n, t1], i) => {
    const x = 80 + p * 740, below = i === 2;
    s += badge(x, ly, 16, n, C.mustard);
    const anchor = i === 0 ? 'start' : i === 3 ? 'end' : i === 1 ? 'end' : 'start';
    const tx = i === 0 ? x - 16 : i === 3 ? x + 16 : i === 1 ? x + 10 : x - 10;
    s += T(tx, below ? ly + 64 : ly - 28, t1, { size: 15, weight: 700, anchor, italic: true });
  });
  const y2 = ly + 86;
  const items = [
    ['1 Supporting', '“Ode to a Nightingale”: the desire to dissolve into the bird’s song and the return to his “sole self”.', 'AO2: ode form, sound'],
    ['2 Complicating', '“London”: the walking speaker records others’ suffering; “mind-forg’d manacles”.', 'AO3: industrial London, revolution era'],
    ['3 Both', '“Lines Written in Early Spring”: pleasure in nature interrupted by grief at “what man has made of man”.', 'AO2: refrain-like return'],
    ['4 Memory and the self', '“Tintern Abbey”: but nature as a moral guide to the world.', 'AO3: the Preface; AO5: what the poem leaves out'],
  ];
  let y = y2;
  items.forEach(([t1, b, ao]) => {
    const c = card(30, y, 840, { title: t1, body: [b, ao], size: 15, tsize: 17, pad: 12, gap: 2 });
    s += c.s; y += c.h + 8;
  });
  const j = card(30, y + 6, 840, { kicker: 'CONCLUSION', title: 'Feeling is the Romantic method; the world is often its subject', fill: C.cream, edge: C.olive, kfill: C.olive, tsize: 19 });
  s += j.s;
  add('05-worked-plan-romantics',
    svg(900, Math.round(y + 6 + j.h + 24), 'Worked plan: testing a statement on the Romantics', s),
    'The statement that Romantic poetry cares more for the poet’s feelings than the world, with four poems placed on a line between the two: Ode to a Nightingale near feeling, Tintern Abbey and Lines Written in Early Spring in the middle, and London near the world. Four planned paragraphs follow, ending in the conclusion that feeling is the Romantic method and the world is often its subject.',
    'Place poems along the statement, then argue from those that support and complicate it.',
    '## Worked example: The Romantics');
}

// 06 Model paragraph on London
{
  const Y = 118;
  let s = '';
  const steps2 = [
    ['AO1', 'Response to the statement', '“London” challenges it: the speaker’s feeling is directed entirely at others.', C.panel, C.ink],
    ['AO2', 'Voice and imagery', '“I wander” promises a personal lyric, but the poem records the “mark” in every face and the cries of chimney-sweepers and soldiers.', C.tealLight, C.tealDark],
    ['AO2', 'A key phrase', '“mind-forg’d manacles” makes oppression psychological as well as social, located in Londoners’ minds, not the speaker’s.', C.tealLight, C.tealDark],
    ['AO3', 'Context tied to method', 'Written in the decade of revolution in France and rapid change in London: the walking speaker is a witness, not a subject.', C.cream, C.olive],
    ['AO5', 'A critical position tested', 'Critics who read Romanticism as a retreat into the self must account for poems in which intense feeling is the instrument of social criticism.', C.mustard, C.olive],
  ];
  let y = Y;
  steps2.forEach(([ao, t1, b, f, e], i) => {
    const c = card(130, y, 740, { title: t1, body: b, size: 16, tsize: 18, pad: 14, fill: f, edge: e, bfill: C.ink });
    s += `<rect x="30" y="${y}" width="86" height="${c.h}" rx="12" fill="${C.panel}" stroke="${e}" stroke-width="2.5"/>` + T(73, y + c.h / 2 + 7, ao, { size: 20, weight: 700, anchor: 'middle', fill: e });
    s += c.s;
    y += c.h + 10;
  });
  add('06-model-paragraph-london',
    svg(900, Math.round(y + 14), 'Model paragraph: Blake’s “London”', s),
    'The model paragraph on Blake’s London broken into its credited parts. AO1: London challenges the statement because feeling is directed at others. AO2: “I wander” promises a personal lyric but records others’ suffering, and “mind-forg’d manacles” makes oppression psychological. AO3: the decade of revolution and change makes the speaker a witness. AO5: readings of Romanticism as retreat must account for such poems.',
    'One paragraph that answers the statement and covers AO1, AO2, AO3 and AO5.',
    '## Worked example: The Romantics');
}

