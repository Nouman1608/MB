import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-a-level-english-literature-yet01-unit-1-poetry';
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
  const fig = compose('Unit 1 Section A at a glance', [
    (y) => { const b = markBar(y + 26, [{ label: 'Section A: Post-2000 Poetry', sub: '25 marks · one comparative essay', value: 25, fill: C.mustard }, { label: 'Section B', sub: '25 marks', value: 25, fill: C.tealLight }]); return { s: T(30, y + 14, 'Unit 1 · 2 hours · 50 marks', { size: 17, weight: 700, fill: C.muted }) + b.s, h: b.h + 26 }; },
    (y) => {
      let s = '';
      s += page(70, y + 6, 110, 140, { lines: 8 }) + T(125, y + 172, 'named poem', { size: 16, weight: 700, anchor: 'middle' });
      s += `<line x1="196" y1="${y + 76}" x2="254" y2="${y + 76}" stroke="${C.ink}" stroke-width="3" marker-start="url(#ah)" marker-end="url(#ah)"/>`;
      s += page(270, y + 6, 110, 140, { lines: 8, fill: C.cream }) + T(325, y + 172, 'your choice', { size: 16, weight: 700, anchor: 'middle' });
      const c = card(420, y, 450, { body: ['One essay from a choice of two.', 'The second poem is a free choice from the prescribed list.', 'Open book: the list of prescribed poems is printed in a Source Booklet.'], bullets: true, size: 16, minH: 180, vcenter: true });
      return { s: s + c.s, h: Math.max(180, c.h) };
    },
    (y) => {
      const r = row(y, [
        { title: 'AO1', body: 'A clear thesis, a sustained argument, precise terminology.', tfill: C.tealDark },
        { title: 'AO2', body: 'Close analysis of form, structure, language, sound and voice in both poems.', tfill: C.tealDark },
        { title: 'AO4', body: 'Similarities and differences explored throughout, in ideas and methods.', fill: C.cream, edge: C.olive, tfill: C.olive },
      ], { gap: 14, card: { size: 16, tsize: 21, pad: 16 } });
      return r;
    },
    (y) => note(y, 'AO3 is not assessed in this section. AO4 is assessed in Unit 1 only in Section A, so all of the unit’s comparison credit rests on this essay.'),
  ]);
  add('01-section-a-at-a-glance', fig,
    'Unit 1 lasts 2 hours for 50 marks, and Section A is a 25-mark comparative essay on a named poem and a second poem of your choice from the prescribed list, chosen from two questions, with the poems available in a Source Booklet. It is assessed on AO1, AO2 and AO4, not AO3, and is the only place in Unit 1 where AO4 comparison is credited.',
    'One comparative essay worth half the paper, and all of Unit 1’s AO4 credit.',
    '## What Section A covers');
}

// 02 Key features and learning outcomes
{
  const Y = 116;
  const h = hub(Y, 'Key features of poetry', [
    { title: 'Form and structure' }, { title: 'Language choice' }, { title: 'Imagery, symbols and motifs' }, { title: 'Rhyme and rhythm' },
    { title: 'Theme' }, { title: 'Tone and mood' }, { title: 'Voice' },
  ], { cardW: 250, r: 100 });
  let s = h.s;
  const y2 = Y + h.h + 40;
  s += T(30, y2 + 6, 'Learning outcomes', { size: 20, weight: 700 });
  const r = row(y2 + 22, [
    { body: 'How poets use and adapt language, form and structure' },
    { body: 'Connections and relationships between poems' },
    { body: 'How attitudes and values are expressed' },
    { body: 'Critical terms used with understanding and discrimination', fill: C.cream, edge: C.olive },
  ], { gap: 12, card: { size: 16, pad: 14, bfill: C.ink } });
  s += r.s;
  const n = note(y2 + 22 + r.h + 16, '“With discrimination”: a term earns credit when it is the right term and leads to an insight, not when it decorates a sentence.');
  s += n.s;
  add('02-key-features-and-outcomes',
    svg(900, Math.round(y2 + 22 + r.h + 16 + n.h + 24), 'What the specification asks you to learn', s),
    'Seven key features of poetry around a hub: form and structure, language choice, imagery symbols and motifs, rhyme and rhythm, theme, tone and mood, and voice. Below, four learning outcomes: how poets adapt language, form and structure; connections between poems; how attitudes and values are expressed; and critical terms used with discrimination.',
    'Seven features to study, and terms that earn credit only when they lead to insight.',
    '## What the specification asks you to learn');
}

// 03 Choosing the second poem
{
  const Y = 120;
  let s = '';
  s += card(30, Y, 250, { kicker: 'GIVEN', title: 'The named poem', fill: C.tealLight, edge: C.tealDark, minH: 120, vcenter: true }).s;
  s += arrow(288, Y + 60, 340, Y + 60, { w: 3.5 });
  const cands = [['The one you know best', false], ['The one that lets you argue', true]];
  cands.forEach(([t1, ok], i) => {
    const y = Y + i * 68;
    s += card(350, y, 470, { title: t1, minH: 54, vcenter: true, pad: 14, tsize: 19, fill: ok ? C.cream : C.panel, edge: ok ? C.olive : C.rust, tfill: ok ? C.ink : C.rust }).s + (ok ? tick : cross)(846, y + 27, 16);
  });
  const y2 = Y + 150;
  s += T(30, y2 + 6, 'A good second poem', { size: 20, weight: 700 });
  const r = row(y2 + 22, [
    { title: 'Shares the focus', body: 'Clearly enough to compare in every paragraph.' },
    { title: 'Treats it differently', body: 'In attitude, voice or method.' },
    { title: 'Offers formal contrast', body: 'Stanza shape, rhyme, voice, address.' },
  ], { gap: 14, card: { size: 16, tsize: 19, pad: 16 } });
  s += r.s;
  const n = note(y2 + 22 + r.h + 16, 'Spend about five minutes deciding the second poem and sketching a four-row comparison grid.');
  s += n.s;
  add('03-choosing-the-second-poem',
    svg(900, Math.round(y2 + 22 + r.h + 16 + n.h + 24), 'Choosing the second poem', s),
    'Beside the named poem, “the one you know best” is crossed out and “the one that lets you argue” is ticked. A good second poem shares the question’s focus, treats it differently in attitude, voice or method, and offers formal contrast. Spend about five minutes choosing and sketching a comparison grid.',
    'Pick the poem that lets you argue, not the one you know best.',
    '## Choosing the second poem');
}

// 04 Pairing grid
{
  const Y = 116;
  const rows = [
    ['Memory and childhood', 'To My Nine-Year-Old Self · Material · Out of the Bag · Genetics'],
    ['Parents, loss and grief', 'Effects · Material · On Her Blindness · Genetics'],
    ['Identity and belonging', 'Look We Have Coming to Dover · The Deliverer · The Map Woman'],
    ['Violence, power and control', 'The Gun · Chainsaw Versus the Pampas Grass · The Lammas Hireling · Eat Me · Giuseppe'],
    ['History and public events', 'History · Giuseppe'],
    ['Modern life and frustration', 'Please Hold · Ode on a Grayson Perry Urn · From the Journal of a Disappointed Man'],
    ['Illness and the body', 'A Minor Role · On Her Blindness · Eat Me'],
    ['Leaving, travel and risk', 'The Furthest Distances I’ve Travelled · An Easy Passage'],
  ];
  const tb = table(Y, ['Broad theme', 'Poems you could group'], rows, [270, 570], { size: 16, zebra: true });
  const n = note(Y + tb.h + 18, 'A starting point, not a rule: most poems fit several themes. For each poem add two or three methods to compare, such as its speaker, stanza form, a key image or its ending.');
  add('04-pairing-grid',
    svg(900, Math.round(Y + tb.h + 18 + n.h + 24), 'A starting pairing grid', tb.s + n.s),
    'A table grouping the prescribed poems by eight broad themes: memory and childhood; parents, loss and grief; identity and belonging; violence, power and control; history and public events; modern life and frustration; illness and the body; and leaving, travel and risk. A note says most poems fit several themes and each should be paired with methods to compare.',
    'Group poems by theme, then add the methods you could compare.',
    '## Choosing the second poem');
}

// 05 The comparative paragraph
{
  const Y = 128;
  let s = '';
  const parts = [
    ['1', 'Comparative point', 'About the focus, naming both poems.', C.cream, C.olive],
    ['2', 'Poem A', 'Method, short reference, effect.', C.tealLight, C.tealDark],
    ['3', 'Poem B', 'Method, short reference, effect.', C.tealLight, C.tealDark],
    ['4', 'Connection', 'Why the poets differ or converge, and what that difference means.', C.cream, C.olive],
  ];
  let y = Y;
  parts.forEach(([n, t1, b, f, e]) => {
    const c = card(110, y, 760, { title: t1, body: b, fill: f, edge: e, size: 17, tsize: 20, pad: 16 });
    s += c.s + badge(62, y + c.h / 2, 24, n, C.mustard);
    y += c.h + 8;
  });
  s += `<path d="M96,${Y + 4} L88,${Y + 4} L88,${y - 12} L96,${y - 12}" fill="none" stroke="${C.ink}" stroke-width="0"/>`;
  const y2 = y + 52;
  s += T(30, y2 - 18, 'The whole answer', { size: 20, weight: 700 });
  const r = row(y2, [
    { title: 'Introduction', body: 'A comparative thesis.' },
    { title: 'Four or five paragraphs', body: 'Each in the shape above.', fill: C.cream, edge: C.olive },
    { title: 'Conclusion', body: 'Judges the two poems’ different perspectives.' },
  ], { arrows: true, gap: 40, card: { size: 16, tsize: 19, pad: 16 } });
  s += r.s;
  add('05-comparative-paragraph',
    svg(900, Math.round(y2 + r.h + 24), 'A reliable comparative paragraph', s, 'The shape of one paragraph'),
    'Four stacked parts of one paragraph: a comparative point naming both poems, then Poem A’s method, reference and effect, then Poem B’s, then a connection explaining why the poets differ or converge. Below, the whole answer: an introduction with a comparative thesis, four or five such paragraphs, and a conclusion that judges the two perspectives.',
    'Point, Poem A, Poem B, connection: comparison inside every paragraph.',
    '## Structuring the comparison');
}

// 06 Worked example: two original poems
{
  const Y = 116;
  let s = '';
  const poem = (x, title, lines, f, e) => {
    let o = panel(x, Y, 412, 212, f, e) + `<text x="${x + 20}" y="${Y + 34}" font-size="19" font-weight="700" fill="${C.ink}">${X(title)} <tspan font-weight="400" font-style="italic" fill="${C.muted}" font-size="15">(original)</tspan></text>`;
    lines.forEach((l, i) => { o += T(x + 20, Y + 74 + i * 34, l, { size: 16 }); });
    return o;
  };
  s += poem(30, 'Poem A: Inventory', ['Three coats, one with a button missing.', 'A tin of keys to doors we no longer own.', 'Her reading glasses, folded, as if', 'she has only stepped into the garden.'], C.panel, C.tealDark);
  s += poem(458, 'Poem B: Clearing the House', ['We worked in silence, room by room,', 'deciding what to keep and what to give,', 'and when the van had gone I stood', 'in the bare kitchen, and the kitchen stood in me.'], C.panel, C.olive);
  s += T(450, Y + 244, 'Compare the ways in which the poets present the possessions of the dead.', { size: 17, weight: 700, anchor: 'middle', italic: true });
  const y2 = Y + 264;
  const rowsData = [
    ['Form', 'A list without a main verb until its final sentence: she is present only through things.', 'One long sentence; verbs of work (“worked”, “deciding”) delay grief.'],
    ['Key moment', 'The simile “as if / she has only stepped into the garden”: a moment of denial; enjambment after “as if” makes us hesitate.', 'The chiasmus “I stood / in the bare kitchen, and the kitchen stood in me”.'],
    ['Where grief sits', 'Kept outside the speaker: we observe an absence.', 'Turned inward: we feel it.'],
  ];
  const tb = table(y2, ['', 'Inventory', 'Clearing the House'], rowsData, [160, 340, 340], { size: 16 });
  s += tb.s;
  const n = note(y2 + tb.h + 16, 'Methods (list form, simile, enjambment, syntax, chiasmus) and attitudes (denial, internalised grief) are compared in the same sentences, showing AO4 and AO2 together.');
  s += n.s;
  add('06-worked-example-two-poems',
    svg(900, Math.round(y2 + tb.h + 16 + n.h + 24), 'Modelling the method on two original poems', s),
    'Two short original poems side by side: Inventory, a list of a dead woman’s belongings, and Clearing the House, a single sentence about emptying a house. A table compares them. Form: a verbless list against one long sentence of work verbs. Key moment: a simile of denial with enjambment against a closing chiasmus. Where grief sits: outside the speaker against turned inward.',
    'Compare methods and attitudes in the same sentence to show AO2 and AO4 together.',
    '## Worked example: modelling the method');
}

// 07 Exam technique and timing
{
  const Y = 134;
  let s = T(30, Y - 8, 'Unit 1: two hours', { size: 17, weight: 700, fill: C.muted });
  const bw = 840;
  const segs = [['choose + grid', 5, C.cream], ['write Section A', 55, C.mustard], ['Section B', 60, C.tealLight]];
  let x = 30;
  segs.forEach(([l, m, f]) => { const w = (bw * m) / 120; s += `<rect x="${x}" y="${Y}" width="${w}" height="60" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`; if (w > 80) s += T(x + w / 2, Y + 37, l, { size: 18, weight: 700, anchor: 'middle' }); x += w; });
  s += path(`M${30 + (bw * 2.5) / 120},${Y + 62} L${30 + (bw * 2.5) / 120},${Y + 84}`, { w: 2 }) + T(30, Y + 104, 'about five minutes: decide the second poem and a four-row grid', { size: 16, fill: C.olive, weight: 600 });
  s += path(`M30,${Y + 118} L30,${Y + 128} L${30 + bw / 2},${Y + 128} L${30 + bw / 2},${Y + 118}`, { w: 2.5 }) + T(30 + bw / 4, Y + 152, 'roughly an hour for Section A', { size: 17, weight: 700, anchor: 'middle' });
  const r = row(Y + 178, [
    { title: 'Read both questions', body: 'One may suit your strongest pairing better.' },
    { title: 'Navigate the open book', body: 'Know where key lines are. Check with your centre which copies are allowed and whether they may be annotated.' },
    { title: 'Quote briefly', body: 'A few words analysed closely earn more than a stanza copied out.' },
    { title: 'Key word every time', body: 'Keep the question’s key word in every topic sentence.', fill: C.cream, edge: C.olive },
  ], { gap: 12, vcenter: false, card: { size: 15, tsize: 17, pad: 14 } });
  s += r.s;
  add('07-exam-technique',
    svg(900, Math.round(Y + 178 + r.h + 24), 'Exam technique and the open book', s),
    'A two-hour bar: about five minutes to choose the second poem and sketch a grid, roughly an hour in total for Section A, and the rest for Section B. Four tips: read both questions, navigate the open book and check which copies are allowed, quote briefly, and keep the question’s key word in every topic sentence.',
    'About an hour for Section A, starting with five minutes of choosing and planning.',
    '## Exam technique');
}
