import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-english-literature-4et1-section-b-anthology-poetry';
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

// 01 Three levels of comparison
{
  const Y = 150;
  let s = T(250, Y - 14, 'Poem 1', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(650, Y - 14, 'Poem 2', { size: 19, weight: 700, anchor: 'middle', fill: C.olive });
  const lv = [
    ['1', 'Ideas and attitudes', 'what each poem says about the question’s focus'],
    ['2', 'Methods', 'how each poet uses language, form and structure to say it'],
    ['3', 'Effects', 'how the reader’s response differs as a result'],
  ];
  lv.forEach(([n, ti, b], i) => {
    const y = Y + i * 150;
    s += panel(100, y, 300, 110, C.tealLight, C.tealDark) + panel(500, y, 300, 110, C.cream, C.olive);
    s += T(250, y + 48, ti, { size: 19, weight: 700, anchor: 'middle' }) + T(650, y + 48, ti, { size: 19, weight: 700, anchor: 'middle' });
    s += T(250, y + 78, 'Poem 1', { size: 15, anchor: 'middle', fill: C.tealDark }) + T(650, y + 78, 'Poem 2', { size: 15, anchor: 'middle', fill: C.olive });
    s += `<line x1="404" y1="${y + 55}" x2="496" y2="${y + 55}" stroke="${C.ink}" stroke-width="3.5" marker-start="url(#ah)" marker-end="url(#ah)"/>`;
    s += badge(56, y + 55, 22, n, i === 2 ? C.mustard : C.cream);
    s += T(450, y + 134, b, { size: 16, anchor: 'middle', fill: C.muted });
    if (i < 2) s += arrow(830, y + 60, 830, y + 196, { w: 3, color: C.tealDark, marker: 'ahT' });
  });
  const yb = Y + 3 * 150 + 4;
  const n = note(yb, 'AO3 credit comes from the relationship between the poems. An examiner should never be able to cut your essay into two separate halves.');
  add('01-three-levels-of-comparison',
    svg(900, Math.round(yb + n.h + 24), 'Compare on three levels', s + n.s),
    'Poem 1 and Poem 2 are linked by two-way arrows at three levels: ideas and attitudes about the question’s focus, the methods each poet uses, and the different effects on the reader. A note says AO3 credit comes from the relationship between the poems.',
    'Strong answers compare ideas, methods and effects, not just content.',
    '## Why comparison changes everything');
}

// 02 Theme clusters as a network
{
  const Y = 130;
  const themes = [
    ['Parents and children', C.tealDark, ['If', 'Prayer Before Birth', 'Poem at Thirty-Nine', 'Piano', 'Do not go gentle into that good night']],
    ['Childhood', C.olive, ['Piano', 'Half-past Two', 'Hide and Seek']],
    ['Death and suffering', C.ink, ['Do not go gentle into that good night', 'War Photographer', 'Remember']],
    ['Love and loss', C.rust, ['Remember', 'Sonnet 116', 'La Belle Dame sans Merci']],
    ['Power and control', C.blue, ['La Belle Dame sans Merci', 'My Last Duchess', 'The Tyger']],
    ['Identity and language', C.grass, ['Search For My Tongue', 'Half-caste', 'Blessing']],
  ];
  const poems = ['If', 'Prayer Before Birth', 'Poem at Thirty-Nine', 'Piano', 'Half-past Two', 'Hide and Seek', 'Do not go gentle into that good night', 'War Photographer', 'Remember', 'Sonnet 116', 'La Belle Dame sans Merci', 'My Last Duchess', 'The Tyger', 'Search For My Tongue', 'Half-caste', 'Blessing'];
  const ph = 40, py = (i) => Y + 10 + i * ph;
  const PX = 520, PW = 350;
  const counts = {}; themes.forEach(([, , ps]) => ps.forEach((p) => { counts[p] = (counts[p] || 0) + 1; }));
  let lines = '', boxes = '';
  const th = (16 * ph - 5 * 16) / 6;
  themes.forEach(([name, col, ps], i) => {
    const ty = Y + 10 + i * (th + 16);
    boxes += `<rect x="30" y="${ty}" width="250" height="${th}" rx="12" fill="${C.panel}" stroke="${col}" stroke-width="3"/>` + para(50, ty + th / 2 + 6 - (wrap(name, 210, 18, 700).length - 1) * 12, name, 210, { size: 18, weight: 700, fill: col }).s;
    ps.forEach((p) => { const j = poems.indexOf(p); const yy = py(j) + 16; lines += `<path d="M280,${ty + th / 2} C400,${ty + th / 2} 400,${yy} ${PX},${yy}" fill="none" stroke="${col}" stroke-width="2.5" opacity="0.85"/>`; });
  });
  poems.forEach((p, j) => {
    const multi = counts[p] > 1;
    boxes += `<rect x="${PX}" y="${py(j)}" width="${PW}" height="32" rx="8" fill="${multi ? C.cream : C.panel}" stroke="${multi ? C.olive : C.panelEdge}" stroke-width="2"/>` + T(PX + 14, py(j) + 22, p, { size: 15, italic: true, weight: multi ? 700 : 400 });
  });
  const yb = py(16) + 14;
  const legend = `<rect x="30" y="${yb}" width="34" height="22" rx="6" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>` + T(76, yb + 17, 'in more than one cluster', { size: 16, fill: C.muted });
  const n = card(30, yb + 40, 840, { title: 'For each pair you revise, write three lines', body: 'A shared idea · one key difference in attitude · one key difference in method', fill: C.cream, edge: C.olive, tsize: 18, size: 17, bfill: C.ink });
  add('02-theme-clusters',
    svg(900, Math.round(yb + 40 + n.h + 24), 'Theme clusters across the anthology', lines + boxes + legend + n.s),
    'Six theme clusters on the left are linked to the sixteen anthology poems on the right: parents and children, childhood, death and suffering, love and loss, power and control, and identity and language. Piano, Do not go gentle into that good night, Remember and La Belle Dame sans Merci each belong to two clusters.',
    'Most poems fit more than one cluster, so revise them in pairs.',
    '## Theme clusters across the sixteen poems');
}

// 03 Form as a point of comparison
{
  const Y = 128;
  let s = '';
  const sonnet = (x, title, sub, groups) => {
    let o = panel(x, Y, 410, 420) + T(x + 24, Y + 36, title, { size: 21, weight: 700, italic: true }) + T(x + 24, Y + 62, sub, { size: 16, fill: C.muted });
    let y = Y + 88;
    groups.forEach(([n, f, e, label, gap]) => {
      const y0 = y;
      for (let i = 0; i < n; i++) { o += `<rect x="${x + 24}" y="${y}" width="${220 - (i % 3) * 18}" height="12" rx="6" fill="${f}" stroke="${e}" stroke-width="1.5"/>`; y += 20; }
      o += `<path d="M${x + 262},${y0} L${x + 272},${y0} L${x + 272},${y - 8} L${x + 262},${y - 8}" fill="none" stroke="${e}" stroke-width="2.5"/>` + tl(x + 284, (y0 + y - 8) / 2 + 6 - (label.length - 1) * 10, label, { size: 16, weight: 700, fill: e }, 20);
      y += gap;
    });
    return o;
  };
  s += sonnet(30, 'Sonnet 116', 'Shakespearean sonnet', [[12, C.tealLight, C.tealDark, ['an argument', 'builds'], 14], [2, C.mustard, C.olive, ['rhyming', 'couplet'], 0]]);
  s += sonnet(460, 'Remember', 'Petrarchan sonnet: volta after line 8', [[8, C.tealLight, C.tealDark, ['lines 1–8:', 'request'], 14], [6, C.cream, C.olive, ['sestet:', 'permission'], 0]]);
  // turn markers
  s += `<line x1="40" y1="${Y + 88 + 12 * 20 + 6}" x2="430" y2="${Y + 88 + 12 * 20 + 6}" stroke="${C.rust}" stroke-width="3" stroke-dasharray="8 6"/>` + T(420, Y + 88 + 12 * 20 + 2, 'turn', { size: 15, weight: 700, fill: C.rust, anchor: 'end' });
  s += `<line x1="470" y1="${Y + 88 + 8 * 20 + 3}" x2="860" y2="${Y + 88 + 8 * 20 + 3}" stroke="${C.rust}" stroke-width="3" stroke-dasharray="8 6"/>` + T(850, Y + 88 + 8 * 20 - 3, 'volta', { size: 15, weight: 700, fill: C.rust, anchor: 'end' });
  s += T(54, Y + 402, '14 lines', { size: 15, fill: C.muted }) + T(484, Y + 402, '14 lines', { size: 15, fill: C.muted });
  const r = row(Y + 440, [
    { title: 'Villanelle', body: 'Do not go gentle into that good night: two refrains repeated throughout' },
    { title: 'Dramatic monologue', body: 'My Last Duchess: the speaker reveals more than he intends' },
    { title: 'Ballad', body: 'La Belle Dame sans Merci: a story told through question and answer' },
    { title: 'Free and broken form', body: 'Half-caste, Search For My Tongue: layout, spelling or language as meaning' },
  ], { gap: 12, card: { tsize: 17, size: 15, pad: 14 } });
  s += r.s;
  const n = note(Y + 440 + r.h + 16, '“Both are sonnets” is a start. How each poet uses the sonnet’s turn differently is comparison.');
  add('03-form-comparison',
    svg(900, Math.round(Y + 440 + r.h + 16 + n.h + 24), 'Form as a point of comparison', s + n.s),
    'Two sonnets drawn as fourteen lines each. Sonnet 116 builds an argument to a closing rhyming couplet; Remember turns after line 8, from request to permission in the sestet. Cards below name other anthology forms: a villanelle, a dramatic monologue, a ballad, and free or broken form.',
    'Compare how each poet uses a form, not just which form it is.',
    '## Form as a point of comparison');
}

// 04 Worked example plan: by point, not by poem
{
  const Y = 140;
  let s = '';
  const ov = card(30, Y, 840, { kicker: 'OVERVIEW', kfill: C.olive, body: 'Both poems imagine love tested by time and death, but Shakespeare defines love as unchanging, while Rossetti’s speaker shows her love by letting go of the wish to be remembered.', fill: C.cream, edge: C.olive, size: 17, bfill: C.ink });
  s += ov.s;
  let cy = Y + ov.h + 46;
  s += T(230, cy - 12, 'Sonnet 116', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark, italic: true }) + T(670, cy - 12, 'Remember', { size: 18, weight: 700, anchor: 'middle', fill: C.olive, italic: true });
  const pts = [
    ['Constancy versus release', 'Love as “an ever-fixed mark”: immovable', 'Pleads to be remembered, then gives that plea up'],
    ['How each sonnet turns', 'An argument ending in the couplet’s confident challenge', 'The volta after line 8: from request to permission'],
    ['Time and death', 'Love outlasts time', 'Accepts memory may fade; puts the beloved’s happiness first'],
    ['Voice and the reader', 'Addresses the world with certainty', 'Addresses one person directly: intimate selflessness'],
  ];
  pts.forEach(([ti, a, b], i) => {
    s += badge(44, cy + 12, 14, String(i + 1), C.cream) + T(68, cy + 18, ti, { size: 18, weight: 700 });
    const y0 = cy + 34;
    const h = Math.max(card(30, y0, 400, { body: a, size: 16, pad: 14 }).h, card(470, y0, 400, { body: b, size: 16, pad: 14 }).h);
    s += card(30, y0, 400, { body: a, size: 16, bfill: C.ink, fill: C.tealLight, edge: C.tealDark, pad: 14, minH: h, vcenter: true }).s + card(470, y0, 400, { body: b, size: 16, bfill: C.ink, fill: C.cream, edge: C.olive, pad: 14, minH: h, vcenter: true }).s;
    s += `<line x1="433" y1="${y0 + h / 2}" x2="467" y2="${y0 + h / 2}" stroke="${C.ink}" stroke-width="3" marker-start="url(#ah)" marker-end="url(#ah)"/>`;
    cy = y0 + h + 18;
  });
  add('04-sonnet-116-remember-plan',
    svg(900, Math.round(cy + 8), 'A plan built point by point', s, 'Compare how the poets present lasting love in Sonnet 116 and Remember'),
    'An overview, then four comparison points, each setting Sonnet 116 beside Remember: constancy versus release, how each sonnet turns, time and death, and voice and the reader. Every row moves between both poems.',
    'Each paragraph is one point of comparison, with both poems in it.',
    '## Worked example: a named-pair question');
}

// 05 Anatomy of a comparative sentence
{
  const Y = 120;
  let s = '';
  const parts = [
    ['Where', 'connective', C.mustard, C.olive],
    ['Shakespeare’s couplet stakes his whole credibility on love’s permanence,', 'method in poem 1', C.tealLight, C.tealDark],
    ['Rossetti’s sestet quietly reverses her own request,', 'method in poem 2', C.cream, C.olive],
    ['so lasting love becomes not being remembered but wanting the beloved to be happy.', 'difference in effect', C.panel, C.ink],
  ];
  let cy = Y;
  parts.forEach(([q, tag, f, e]) => {
    const c = card(240, cy, 630, { body: q, size: 18, bfill: C.ink, fill: f, edge: e, pad: 16 });
    s += c.s + T(220, cy + c.h / 2 + 6, tag, { size: 17, weight: 700, anchor: 'end', fill: e === C.ink ? C.ink : e });
    cy += c.h + 10;
  });
  s += `<line x1="232" y1="${Y + 6}" x2="232" y2="${cy - 16}" stroke="${C.panelEdge}" stroke-width="3"/>`;
  const r = row(cy + 34, [{ title: 'whereas' }, { title: 'similarly' }, { title: 'in contrast' }, { title: 'both' }, { title: 'however' }, { title: 'unlike' }].map((x) => ({ ...x, align: 'middle', fill: C.tealLight, edge: C.tealDark })), { gap: 10, card: { tsize: 17, pad: 12 } });
  s += T(30, cy + 22, 'More comparative connectives', { size: 16, weight: 700, fill: C.muted }) + r.s;
  add('05-comparative-sentence',
    svg(900, Math.round(cy + 34 + r.h + 24), 'Inside a comparative sentence', s),
    'The guide’s sample sentence split into four labelled parts: the connective “Where”, a method in Sonnet 116 (the couplet), a method in Remember (the sestet), and the difference in effect. A row of other comparative connectives follows: whereas, similarly, in contrast, both, however, unlike.',
    'Connective, a method in each poem, and the difference it makes.',
    '## Worked example: a named-pair question');
}

// 06 Choosing your own second poem
{
  const Y = 120;
  let s = '';
  s += card(330, Y, 240, { kicker: 'NAMED IN THE QUESTION', title: 'Piano', body: 'memory', tsize: 22, align: 'middle', fill: C.teal, edge: C.ink, bfill: C.ink }).s;
  const opt = row(Y + 170, [
    { kicker: 'OPTION', title: 'Poem at Thirty-Nine', body: 'Two adult speakers remembering a parent' },
    { kicker: 'OPTION', title: 'Half-past Two', body: 'Memories of childhood told through very different tones' },
  ], { gap: 40, vcenter: false, card: { tsize: 20, fill: C.tealLight, edge: C.tealDark } });
  s += opt.s.replace(/font-size="20" font-weight="700"/g, 'font-size="20" font-weight="700" font-style="italic"');
  s += path(`M400,${Y + 128} C400,${Y + 150} 230,${Y + 140} 230,${Y + 166}`, { w: 3, extra: 'marker-end="url(#ah)"' }) + path(`M500,${Y + 128} C500,${Y + 150} 670,${Y + 140} 670,${Y + 166}`, { w: 3, extra: 'marker-end="url(#ah)"' });
  const QY = Y + 170 + opt.h + 50;
  const cl = checklist(QY, [
    { q: 'At least three comparable points?' },
    { q: 'Different enough in method (form, tone, voice)?' },
    { q: 'Known well enough to find short quotations quickly?' },
  ], { tsize: 18, gap: 10 });
  s += T(30, QY - 16, 'Ask before you choose', { size: 18, weight: 700 }) + cl.s;
  const n = note(QY + cl.h + 16, 'Choose in the first two minutes and do not change your mind.');
  add('06-choosing-second-poem',
    svg(900, Math.round(QY + cl.h + 16 + n.h + 24), 'Choosing your own second poem', s + n.s),
    'Piano is named in a question on memory. Two possible partners branch from it: Poem at Thirty-Nine, with two adult speakers remembering a parent, and Half-past Two, with childhood memories in a very different tone. A checklist asks whether the second poem gives three comparable points, differs in method and is known well enough.',
    'Pick a partner that shares the focus but differs in method, and decide fast.',
    '## Worked example: choosing your own second poem');
}
