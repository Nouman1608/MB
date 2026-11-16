import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-english-literature-4et1-assignment-a-modern-drama';
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

// 01 A play is a script for performance: seven dramatic methods on one stage
{
  const Y = 108;
  let s = '';
  // proscenium
  s += `<rect x="30" y="${Y}" width="840" height="380" rx="14" fill="${C.ink}"/>`;
  s += `<rect x="100" y="${Y + 34}" width="700" height="250" fill="${C.tealLight}"/>`;
  s += `<path d="M100,${Y + 284} L800,${Y + 284} L862,${Y + 344} L38,${Y + 344} Z" fill="${C.sand}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>`;
  s += `<path d="M38,${Y + 8} L112,${Y + 8} Q96,${Y + 160} 120,${Y + 330} L38,${Y + 344} Z" fill="${C.rust}" opacity="0.9"/>`;
  s += `<path d="M862,${Y + 8} L788,${Y + 8} Q804,${Y + 160} 780,${Y + 330} L862,${Y + 344} Z" fill="${C.rust}" opacity="0.9"/>`;
  s += `<rect x="38" y="${Y + 8}" width="824" height="30" rx="6" fill="${C.rust}" stroke="${C.ink}" stroke-width="2"/>`;
  // door (entrances and exits)
  s += `<rect x="150" y="${Y + 140}" width="76" height="144" fill="${C.ink}" opacity="0.85"/><path d="M226,${Y + 140} L258,${Y + 152} L258,${Y + 296} L226,${Y + 284} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += pawn(205, Y + 300, C.rock);
  s += arrow(240, Y + 316, 300, Y + 316, { w: 3.5 });
  // clock (time)
  s += `<circle cx="450" cy="${Y + 92}" r="34" fill="${C.panel}" stroke="${C.ink}" stroke-width="3"/>` + `<line x1="450" y1="${Y + 92}" x2="450" y2="${Y + 68}" stroke="${C.ink}" stroke-width="3.5"/><line x1="450" y1="${Y + 92}" x2="468" y2="${Y + 100}" stroke="${C.ink}" stroke-width="3.5"/>`;
  // two speakers + table (set)
  s += `<rect x="395" y="${Y + 262}" width="120" height="14" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2.5"/><line x1="408" y1="${Y + 276}" x2="408" y2="${Y + 312}" stroke="${C.ink}" stroke-width="5"/><line x1="502" y1="${Y + 276}" x2="502" y2="${Y + 312}" stroke="${C.ink}" stroke-width="5"/>`;
  s += pawn(360, Y + 318, C.mustard) + pawn(552, Y + 318, C.teal);
  const bubble = (x, y, w, txt, left) => `<rect x="${x}" y="${y}" width="${w}" height="40" rx="12" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/><path d="M${left ? x + 24 : x + w - 40},${y + 39} l8,16 l12,-16" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/><line x1="${left ? x + 25 : x + w - 39}" y1="${y + 39}" x2="${left ? x + 43 : x + w - 21}" y2="${y + 39}" stroke="${C.panel}" stroke-width="4"/>` + T(x + w / 2, y + 26, txt, { size: 16, anchor: 'middle', italic: true });
  s += bubble(300, Y + 170, 116, '…', true) + bubble(500, Y + 170, 116, '…', false);
  s += T(360, Y + 155, '(Pause.)', { size: 16, anchor: 'middle', italic: true, weight: 600, fill: C.rust });
  // ensemble
  s += pawn(680, Y + 316, C.panelEdge, 0.85) + pawn(722, Y + 312, C.panelEdge, 0.85) + pawn(764, Y + 316, C.panelEdge, 0.85);
  // audience
  for (let i = 0; i < 14; i++) s += `<path d="M${70 + i * 58},${Y + 380} a22,22 0 0 1 44,0 Z" fill="${C.muted}"/>`;
  // badges
  const B = [[188, Y + 116, '2'], [508, Y + 72, '5'], [302, Y + 155, '1'], [458, Y + 190, '6'], [455, Y + 240, '3'], [722, Y + 200, '4'], [450, Y + 366, '7']];
  B.forEach(([x, y, n]) => { s += badge(x, y, 17, n, C.mustard); });
  s += `<rect x="30" y="${Y + 344}" width="840" height="44" fill="none"/>`;
  // key cards
  const items = [
    ['1', 'Stage directions', 'What does the playwright insist on? Silences, pauses, movement, sound.'],
    ['2', 'Entrances and exits', 'Who arrives at the worst moment? Who is left alone on stage?'],
    ['3', 'Space and set', 'Realistic or symbolic? What stays visible throughout?'],
    ['4', 'Doubling and ensemble', 'One actor in several roles? An ensemble as objects or crowds?'],
    ['5', 'Time', 'A straight line, jumps between past and present, or a narrator’s frame?'],
    ['6', 'Dialogue', 'Who speaks most, interrupts, changes register, is silent?'],
    ['7', 'Audience position', 'Does the audience know more than the characters (dramatic irony), or less?'],
  ];
  let cy = Y + 412;
  for (let i = 0; i < items.length; i += 2) {
    const pair = items.slice(i, i + 2);
    const cards = pair.map(([, ti, b]) => ({ title: ti, body: b }));
    if (pair.length === 1) cards.push({ tsize: 18, title: 'Write “the audience sees…”', body: 'not just “the reader”. Productions can make different choices.', fill: C.cream, edge: C.olive });
    const r = row(cy, cards, { gap: 18, card: { tsize: 19, size: 16, pad: 16 }, x: 30, w: 840 });
    // badges inside cards (shift titles right)
    s += r.s.replace(/x="(\d+(?:\.\d+)?)" y="(\d+(?:\.\d+)?)" font-size="19" font-weight="700"/g, (m, x, y) => `x="${+x + 34}" y="${y}" font-size="19" font-weight="700"`);
    pair.forEach(([n], j) => { s += badge(30 + j * 429 + 30, cy + 30, 14, n, C.mustard); });
    cy += r.h + 14;
  }
  add('01-stage-methods',
    svg(900, Math.round(cy + 6), 'A play is a script for performance', s),
    'A stage seen from the audience, marked with seven dramatic methods: stage directions such as a pause, an exit through a door, the set, an ensemble of actors, a clock for time, dialogue between two characters, and the audience’s own position. Cards below give the question to ask about each method.',
    'For a play, AO2 “form” includes everything the audience sees and hears.',
    '## Key ideas');
}

// 02 Worked example 1: three methods build one argument
{
  const Y = 116;
  let s = '';
  s += T(30, Y + 6, 'Original scene, written for this guide', { size: 16, weight: 700, fill: C.tealDark });
  const rows = [
    ['The clock is loud.', 'Sound in a stage direction', 'The audience feels time pressing on Mara while she refuses to act.'],
    ['MARA puts her hand flat on it.', 'An action instead of words', 'Her silence shows she is still guarding her father’s place in the family.'],
    ['The clock stops. Neither of them notices.', 'The audience knows more than the characters', 'Time in this house has frozen around the father’s absence.'],
  ];
  let cy = Y + 22; const mids = [];
  rows.forEach(([q, m, e]) => {
    const a = card(30, cy, 250, { body: q, bfill: C.ink, size: 17, fill: C.panel, edge: C.ink, bweight: 400 });
    const b = card(330, cy, 220, { title: m, tsize: 17, fill: C.tealLight, edge: C.tealDark, tfill: C.tealDark });
    const c = card(600, cy, 270, { body: e, size: 16, bfill: C.ink });
    const h = Math.max(a.h, b.h, c.h);
    const A = card(30, cy, 250, { body: q, bfill: C.ink, size: 17, edge: C.ink, minH: h, vcenter: true });
    const Bc = card(330, cy, 220, { title: m, tsize: 17, fill: C.tealLight, edge: C.tealDark, tfill: C.tealDark, minH: h, vcenter: true });
    const Cc = card(600, cy, 270, { body: e, size: 16, bfill: C.ink, minH: h, vcenter: true });
    s += A.s.replace(/<text /g, '<text font-style="italic" ') + Bc.s + Cc.s + arrow(284, cy + h / 2, 324, cy + h / 2, { w: 3 }) + arrow(554, cy + h / 2, 594, cy + h / 2, { w: 3 });
    mids.push(cy + h); cy += h + 16;
  });
  s += T(155, cy + 4, 'stage direction', { size: 15, anchor: 'middle', fill: C.muted, weight: 600 }) + T(440, cy + 4, 'method', { size: 15, anchor: 'middle', fill: C.muted, weight: 600 }) + T(735, cy + 4, 'effect on the audience', { size: 15, anchor: 'middle', fill: C.muted, weight: 600 });
  cy += 22;
  s += arrow(450, cy, 450, cy + 34, { w: 4, color: C.olive, marker: 'ahO' });
  const v = card(30, cy + 42, 840, { kicker: 'THE ESSAY’S ARGUMENT', kfill: C.olive, title: 'The scene presents grief as a refusal to let the past move on.', tsize: 21, fill: C.cream, edge: C.olive, align: 'middle' });
  s += v.s;
  add('02-stagecraft-worked-example',
    svg(900, Math.round(cy + 42 + v.h + 26), 'Three stage methods, one argument', s),
    'Three stage directions from the guide’s short scene are each linked to a method and an effect: the loud clock makes time press on Mara, her hand on the letter shows she guards her father’s place, and the clock stopping unnoticed shows time frozen around his absence. Together they support the argument that the scene presents grief as a refusal to let the past move on.',
    'Each method is tied to an effect, and all three serve one argument.',
    '## Worked example 1: analysing stagecraft in a short original scene');
}

// 03 Worked example 2: a 750-word plan as a proportional bar
{
  const Y = 142;
  const segs = [['Intro', 60, C.cream], ['P1', 160, C.teal], ['P2', 160, C.tealLight], ['P3', 160, C.teal], ['P4', 160, C.tealLight], ['End', 50, C.cream]];
  let s = '', x = 30;
  s += T(30, Y - 4, 'Words per section (total 750)', { size: 17, weight: 700, fill: C.muted });
  const xs = [];
  segs.forEach(([lab, n, f]) => {
    const w = (840 * n) / 750;
    s += `<rect x="${x}" y="${Y + 8}" width="${w}" height="64" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += T(x + w / 2, Y + 36, lab, { size: 17, weight: 700, anchor: 'middle' }) + T(x + w / 2, Y + 60, String(n), { size: 16, anchor: 'middle', fill: C.muted });
    xs.push([x, w]); x += w;
  });
  let cy = Y + 96;
  const intro = card(30, cy, 840, { kicker: 'INTRODUCTION · 60', kfill: C.olive, title: 'Duty is presented as both glorious and fragile, and its failure brings disaster to the community.', tsize: 18, fill: C.cream, edge: C.olive });
  s += intro.s; cy += intro.h + 18;
  const ps = [
    ['P1 · 160', 'Elesin’s confident early performance in the market', 'song and verse'],
    ['P2 · 160', 'His request for a bride on the day he must die', 'structure'],
    ['P3 · 160', 'The scenes at the Residency: Pilkings misunderstands duty', 'setting'],
    ['P4 · 160', 'Olunde’s choice and Elesin’s final failure', 'reversal'],
  ];
  const r = row(cy, ps.map(([k, ti]) => ({ kicker: k, title: ti, tsize: 17 })), { gap: 14, minH: 200, vcenter: false, card: { pad: 14 } });
  s += r.s;
  const w4 = (840 - 3 * 14) / 4;
  ps.forEach(([, , m], i) => { s += chip(30 + i * (w4 + 14) + w4 / 2, cy + r.h - 46, m, { anchor: 'middle', size: 15, fill: C.tealLight, edge: C.tealDark }).s; });
  cy += r.h + 14;
  s += `<line x1="60" y1="${cy + 16}" x2="840" y2="${cy + 16}" stroke="${C.tealDark}" stroke-width="4" marker-end="url(#ahT)"/>`;
  [['beginning', 90], ['middle', 450], ['end of the play', 800]].forEach(([l, xx]) => { s += `<circle cx="${xx}" cy="${cy + 16}" r="7" fill="${C.tealDark}"/>` + T(xx, cy + 44, l, { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 }); });
  cy += 62;
  const end = card(30, cy, 840, { kicker: 'CONCLUSION · 50: RETURN TO THE ARGUMENT', kfill: C.olive, title: 'Duty matters because the whole community depends on it.', tsize: 18, fill: C.cream, edge: C.olive });
  s += end.s; cy += end.h;
  add('03-essay-plan-750',
    svg(900, Math.round(cy + 26), 'Planning a 750-word drama essay', s, 'Task: how Soyinka presents duty in Death and the King’s Horseman'),
    'A bar splits 750 words into an introduction of 60, four paragraphs of 160 and a conclusion of 50. The four paragraphs move from the beginning to the end of the play, each with a moment and a method: song and verse in the market, structure in the bride request, setting at the Residency, and reversal at the climax.',
    'Each paragraph pairs a moment with a method, moving through the whole play.',
    '## Worked example 2: planning a 750-word essay');
}

// 04 The coursework process
{
  const st = steps(116, [
    { title: 'Understand the task', body: 'Underline the focus and the command words.' },
    { title: 'Gather evidence', body: 'A handful of moments from across the play: short quotations or precise references to stage directions.' },
    { title: 'Plan an argument', body: 'Not a sequence of scenes.' },
    { title: 'Draft', body: 'Your teacher may give general feedback on how to improve, but may not correct or rewrite your work.' },
    { title: 'Revise and submit', body: 'Once the work has been marked it cannot be rewritten.' },
    { title: 'Authenticate', body: 'You and your teacher sign to confirm the work is your own. Acknowledge any sources you used.' },
  ], { highlight: 3, gap: 10, size: 16, tsize: 19 });
  add('04-coursework-process',
    svg(900, Math.round(116 + st.h + 24), 'The coursework process, step by step', st.s),
    'Six numbered steps: understand the task, gather evidence from across the play, plan an argument, draft with only general feedback from your teacher, revise and submit with no rewriting after marking, and authenticate the work as your own.',
    'Feedback is general only, and marked work cannot be rewritten.',
    '## The coursework process');
}

// 05 Command words
{
  const Y = 112, H = 170;
  let s = '';
  const rowp = (y, cmd, gist, visual) => panel(30, y, 840, H) + card(50, y + 20, 300, { title: cmd, tsize: 19, fill: C.cream, edge: C.olive, minH: H - 40, vcenter: true }).s + T(380, y + 46, gist[0], { size: 19, weight: 700, fill: C.tealDark }) + tl(380, y + 76, gist.slice(1), { size: 16, fill: C.muted }, 21) + visual;
  // explore: range across the play
  const v1 = (y) => { let o = `<line x1="380" y1="${y + 140}" x2="840" y2="${y + 140}" stroke="${C.ink}" stroke-width="3"/>`; [400, 520, 640, 760, 830].forEach((x) => { o += `<circle cx="${x}" cy="${y + 140}" r="9" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`; }); return o; };
  // how does: playwright's choices at the centre
  const v2 = (y) => `<circle cx="760" cy="${y + 85}" r="56" fill="${C.teal}" stroke="${C.ink}" stroke-width="3"/>` + T(760, y + 80, 'playwright’s', { size: 15, weight: 700, anchor: 'middle' }) + T(760, y + 99, 'choices', { size: 15, weight: 700, anchor: 'middle' });
  // to what extent: weigh
  const v3 = (y) => scaleIcon(770, y + 62, 0.6);
  s += rowp(Y, 'Explore the ways in which…', ['Range', 'Several methods and', 'several parts of the play.'], v1(Y));
  s += rowp(Y + H + 16, 'How does [playwright] present…', ['Method', 'Keeps the playwright’s', 'choices at the centre.'], v2(Y + H + 16));
  s += rowp(Y + 2 * (H + 16), 'To what extent…', ['Weigh a view', 'Agree in part, then', 'reach a judgement.'], v3(Y + 2 * (H + 16)));
  add('05-command-words',
    svg(900, Y + 3 * H + 2 * 16 + 24, 'What the command words ask for', s),
    'Three command phrases with what each asks for. Explore the ways in which asks for range across several methods and parts of the play; How does the playwright present keeps the playwright’s choices at the centre; To what extent asks you to weigh a view and reach a judgement.',
    'Read the command words to know whether the task wants range, method or a judgement.',
    '## Command words in Component 3 tasks');
}
