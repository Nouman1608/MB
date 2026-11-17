import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-english-literature-8702-section-a-modern-texts';
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

// 01 What the question rewards: 30 + 4 marks
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
  // braces
  const bx2 = x0 + 30 * unit;
  s += path(`M${x0},${Y + 88} L${x0},${Y + 100} L${bx2 - 4},${Y + 100} L${bx2 - 4},${Y + 88}`, { w: 2.5 }) + T((x0 + bx2) / 2, Y + 126, 'the question: 30 marks', { size: 18, weight: 700, anchor: 'middle' });
  s += path(`M${bx2 + 4},${Y + 88} L${bx2 + 4},${Y + 100} L${x0 + W},${Y + 100} L${x0 + W},${Y + 88}`, { w: 2.5 }) + T(x0 + W, Y + 126, '+ 4 for AO4', { size: 18, weight: 700, anchor: 'end', fill: C.olive });
  const items = [
    ['AO1', 'A critical, informed personal response to the question, supported by references.', C.teal],
    ['AO2', 'Analysis of the writer’s language, form and structure.', C.cream],
    ['AO3', 'The relationship between the text and the contexts in which it was written.', C.tealLight],
    ['AO4', 'A range of vocabulary and sentence structures, with accurate spelling and punctuation.', C.mustard],
  ];
  let y = Y + 152;
  items.forEach(([ao, txt, f]) => {
    const p = wrap(txt, 680, 17);
    const h = Math.max(50, p.length * 23 + 24);
    s += `<rect x="30" y="${y}" width="110" height="${h}" rx="10" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + T(85, y + h / 2 + 7, ao, { size: 20, weight: 700, anchor: 'middle' });
    s += panel(152, y, 718, h) + p.map((l, k) => T(170, y + h / 2 + 6 - ((p.length - 1) * 23) / 2 + k * 23, l, { size: 17 })).join('');
    y += h + 10;
  });
  const n = note(y + 8, 'Marking is holistic against level descriptors. The bullet about “the ways he or she writes” is a reminder that AO2 is required, not optional.');
  s += n.s;
  add('01-marks-and-aos',
    svg(900, y + 8 + n.h + 24, 'What the modern text question rewards', s, 'One essay from a choice of two, on the whole text, with no extract'),
    'A bar splits 34 marks: AO1 12, AO2 12 and AO3 6 make the 30-mark question, plus 4 marks for AO4. Below, each objective is described, and a note says marking is holistic and that AO2 is required.',
    'The 30 marks reward response, methods and context; AO4 adds 4 for accurate writing.',
    '## What the question rewards');
}

// 02 Choosing between the two questions
{
  const Y = 110;
  const c = checklist(Y, [
    { q: 'Can I argue something?', note: 'Pick the question on which you have a clear view, not just knowledge.' },
    { q: 'Can I cover the whole text?', note: 'You need evidence from the beginning, middle and end.' },
    { q: 'Do I have quotations for it?', note: 'A character you know well may be safer than a theme you understand but cannot quote on.' },
  ], { tsize: 20, size: 17, gap: 12 });
  const y2 = Y + c.h + 26;
  let s = c.s;
  s += panel(30, y2, 840, 150);
  s += `<rect x="60" y="${y2 + 40}" width="210" height="70" rx="12" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + T(165, y2 + 70, 'Character', { size: 20, weight: 700, anchor: 'middle' }) + T(165, y2 + 94, 'question', { size: 17, anchor: 'middle' });
  s += arrow(278, y2 + 75, 350, y2 + 75, { w: 3.5 });
  s += T(314, y2 + 60, 'is also', { size: 15, anchor: 'middle', fill: C.muted });
  s += `<rect x="358" y="${y2 + 40}" width="210" height="70" rx="12" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + T(463, y2 + 70, 'Theme', { size: 20, weight: 700, anchor: 'middle' }) + T(463, y2 + 94, 'question', { size: 17, anchor: 'middle' });
  s += para(596, y2 + 50, 'A character is a construct the writer uses to explore ideas: say what ideas the character represents.', 250, { size: 17 }).s;
  add('02-choosing-the-question',
    svg(900, y2 + 174, 'Choosing between the two questions', s, 'Decide in a minute or two'),
    'Three checks for choosing a question: can I argue something, can I cover the whole text from beginning to end, and do I have quotations for it? Below, a character question is shown to be a theme question too, because a character is a construct used to explore ideas.',
    'Choose the question you can argue, cover across the text and quote on.',
    '## Choosing between the two questions');
}

// 03 Methods in drama and in prose
{
  const Y = 110;
  const r = row(Y, [
    { kicker: 'DRAMA', title: 'Analyse it as performance', body: ['Stage directions: lighting, set, sound, movement', 'Entrances, exits and interruptions', 'Dramatic irony', 'Dialogue: silences, register, the last word', 'Structure: acts, cliffhangers, time shifts, narrators'], bullets: true, fill: C.tealLight, edge: C.tealDark, tfill: C.tealDark },
    { kicker: 'PROSE', kfill: C.olive, title: 'Analyse how the story is told', body: ['Narrator and viewpoint', 'Symbolism', 'Allegory', 'Structure: openings, endings, order, shape', 'Dialogue and voice: dialect, slang, register'], bullets: true, fill: C.cream, edge: C.olive, tfill: C.olive },
  ], { gap: 24, vcenter: false, card: { tsize: 21, size: 17, gap: 10 } });
  const n = note(Y + r.h + 18, 'Stage directions in modern plays are the writer’s own words, so they are fully analysable.');
  add('03-drama-and-prose-methods',
    svg(900, Y + r.h + 18 + n.h + 24, 'Which methods to analyse', r.s + n.s),
    'Two columns. Drama, analysed as performance: stage directions, entrances and exits, dramatic irony, dialogue, and structural devices. Prose, analysed as how the story is told: narrator and viewpoint, symbolism, allegory, structure, and dialogue and voice.',
    'A play is analysed as performance; a novel or story by how it is told.',
    '## Methods in prose');
}

// 04 Two contexts: when set and when written
{
  const Y = 110;
  let s = '';
  const ly = Y + 90;
  s += `<line x1="60" y1="${ly}" x2="840" y2="${ly}" stroke="${C.ink}" stroke-width="4" marker-end="url(#ah)"/>`;
  s += T(845, ly + 36, 'time', { size: 16, anchor: 'end', fill: C.muted });
  const mk = (x, lab, sub, f) => `<circle cx="${x}" cy="${ly}" r="13" fill="${f}" stroke="${C.ink}" stroke-width="3"/>` + T(x, ly - 50, lab, { size: 20, weight: 700, anchor: 'middle' }) + T(x, ly - 26, sub, { size: 16, anchor: 'middle', fill: C.muted });
  s += mk(200, 'When it is set', 'what the characters know', C.teal) + mk(680, 'When it was written', 'what the audience knows', C.mustard);
  s += path(`M215,${ly + 30} Q440,${ly + 80} 665,${ly + 30}`, { w: 3, stroke: C.olive, extra: 'stroke-dasharray="8 6"' });
  s += T(440, ly + 84, 'the gap is often deliberate', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  // example
  const ey = ly + 120;
  s += panel(30, ey, 840, 168, C.panel);
  s += T(54, ey + 36, 'Example: An Inspector Calls', { size: 19, weight: 700 });
  s += `<rect x="54" y="${ey + 56}" width="300" height="92" rx="10" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + T(204, ey + 86, 'Set in 1912', { size: 18, weight: 700, anchor: 'middle' }) + para(204, ey + 112, 'Birling calls the Titanic “unsinkable”', 270, { size: 16, anchor: 'middle' }).s;
  s += arrow(362, ey + 102, 420, ey + 102, { w: 3.5 });
  s += `<rect x="428" y="${ey + 56}" width="418" height="92" rx="10" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + T(637, ey + 86, 'Written after the Second World War', { size: 18, weight: 700, anchor: 'middle' }) + para(637, ey + 112, 'A 1940s audience knew the ship had sunk: dramatic irony', 390, { size: 16, anchor: 'middle' }).s;
  const cy2 = ey + 190;
  s += T(30, cy2 + 20, 'Other relevant contexts:', { size: 17, weight: 700 });
  let cx = 250;
  ['class', 'gender', 'race', 'migration', 'identity'].forEach((w) => { const c = chip(cx, cy2, w, { size: 16, fill: C.tealLight, edge: C.tealDark }); s += c.s; cx += c.w + 10; });
  s += T(30, cy2 + 58, '…and the writer’s own known purposes, where well documented.', { size: 16, fill: C.muted });
  const n = note(cy2 + 78, 'Use context to explain a choice, never to replace analysis. Ask: why would the writer want this audience, at this time, to see this?');
  s += n.s;
  add('04-two-contexts',
    svg(900, cy2 + 78 + n.h + 24, 'Two contexts: set and written', s),
    'A timeline marks when a text is set (what the characters know) and when it was written (what the audience knows), with the gap between them often deliberate. In the example, An Inspector Calls is set in 1912, when Birling calls the Titanic unsinkable, but was written after the Second World War for an audience who knew it sank. Chips list other contexts: class, gender, race, migration and identity.',
    'The gap between setting and writing gives the audience knowledge the characters lack.',
    '## Context in a modern text');
}

// 05 Plan by moment, not by plot
{
  const Y = 110;
  const arg = card(30, Y, 840, { kicker: 'ARGUMENT IN ONE SENTENCE', title: 'The older Birlings refuse responsibility to the end; the younger generation begins to accept it, so change depends on the young.', fill: C.cream, edge: C.olive, tsize: 19 });
  let s = arg.s;
  const ms = [
    { title: 'Opening celebration', body: 'Birling’s confident speeches; the Titanic “unsinkable”: dramatic irony.' },
    { title: 'Links to Eva Smith revealed in turn', body: 'The structure makes responsibility collective.' },
    { title: 'Sheila and Eric vs their parents', body: 'Changing responses compared with denial.' },
    { title: 'The final telephone call', body: 'A circular ending: the lesson must be learned again.' },
  ];
  const y = Y + arg.h + 20;
  const st = steps(y, ms, { x: 70, w: 800, size: 17, tsize: 19, gap: 12 });
  s += st.s;
  const bx = 102, top = y + 30, bot = y + st.h - 30;
  s += path(`M${bx - 26},${bot} L48,${bot} L48,${top}`, { w: 3, stroke: C.tealDark, extra: 'stroke-dasharray="9 7"' }) + arrow(48, top, bx - 28, top, { color: C.tealDark, marker: 'ahT', w: 3 });
  const yb = y + st.h;
  s += T(450, yb + 32, 'Dashed loop: the circular ending returns to where the play began', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('05-plan-by-moment',
    svg(900, yb + 56, 'Plan by moment, not by plot', s, 'The Birling family’s attitudes to responsibility'),
    'A one-sentence argument about the Birlings sits above four planned moments: the opening celebration with the Titanic called unsinkable, each family member’s link to Eva Smith revealed in turn, Sheila and Eric compared with their parents, and the final telephone call. A dashed arrow loops from the end back to the start to show the circular ending.',
    'Four chosen moments from opening to ending, each serving one argument.',
    '## Worked example');
}

// 06 Anatomy of the model paragraph
{
  const Y = 110;
  const st = steps(Y, [
    { title: 'AO2 · dramatic method', body: 'Birling’s claim that the Titanic is “unsinkable” is dramatic irony: a 1940s audience knew the ship had sunk in 1912.' },
    { title: 'AO1 · interpretation', body: 'Making Birling wrong about something so famous encourages the audience to doubt his other confident claims.' },
    { title: 'AO3 · context of writing vs setting', body: 'Written after the Second World War, the play gives a hindsight the characters lack, exposing Birling’s selfish individualism.' },
  ], { size: 17, tsize: 20 });
  const n = note(Y + st.h + 18, 'One word quoted, precise reference to events, a method explained, and context used to explain why Priestley made the choice.', { title: 'What the paragraph does' });
  add('06-model-paragraph',
    svg(900, Y + st.h + 18 + n.h + 24, 'Inside the model paragraph', st.s + n.s),
    'Three stages of the model paragraph on Mr Birling. AO2: the word unsinkable creates dramatic irony. AO1: being wrong about the Titanic makes the audience doubt his other claims. AO3: the gap between setting in 1912 and writing after the Second World War exposes his selfish individualism.',
    'A short quotation, a method, an interpretation and context that explains the choice.',
    '## Worked example');
}

// 07 Memory bank for a whole text
{
  const Y = 110;
  let s = '';
  s += panel(30, Y, 840, 300);
  s += T(54, Y + 40, 'For each major character and theme', { size: 20, weight: 700 });
  // a strip showing quotes spread across the text
  const sx = 70, sw = 760, sy = Y + 142;
  s += `<rect x="${sx}" y="${sy}" width="${sw}" height="22" rx="11" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += T(sx, sy + 52, 'beginning', { size: 16, fill: C.muted }) + T(sx + sw / 2, sy + 52, 'middle', { size: 16, fill: C.muted, anchor: 'middle' }) + T(sx + sw, sy + 52, 'end', { size: 16, fill: C.muted, anchor: 'end' });
  [0.08, 0.3, 0.5, 0.72, 0.93].forEach((p, i) => {
    const qx = sx + sw * p;
    s += `<line x1="${qx}" y1="${sy - 4}" x2="${qx}" y2="${sy - 24}" stroke="${C.ink}" stroke-width="2"/>`;
    s += `<rect x="${qx - 26}" y="${sy - 56}" width="52" height="32" rx="8" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + T(qx, sy - 33, '“…”', { size: 18, weight: 700, anchor: 'middle' });
  });
  s += T(450, Y + 72, '4–5 short quotations (2–5 words) spread across the text', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  const items = [
    ['One sentence', 'on how it changes'],
    ['One method', 'per quotation: a word, an image, a stage direction'],
    ['One context link', 'that genuinely explains something'],
  ];
  const r = row(Y + 216, items.map(([a, b]) => ({ title: a, body: b, align: 'middle', fill: C.tealLight, edge: C.tealDark })), { gap: 16, x: 50, w: 800, card: { tsize: 18, size: 16, pad: 12 } });
  s += r.s;
  const H1 = 216 + r.h + 20;
  s = s.replace('height="300"', `height="${H1}"`);
  const n = note(Y + H1 + 18, 'Can’t recall the exact words? A precise reference to an event is still valid evidence.');
  s += n.s;
  add('07-memory-bank',
    svg(900, Y + H1 + 18 + n.h + 24, 'A portable memory bank', s, 'No extract in the exam, so your evidence must travel'),
    'A strip for the whole text from beginning to end with five short quotation tokens spread along it. Below, three cards: one sentence on how the character or theme changes, one method per quotation, and one context link that genuinely explains something.',
    'Short quotations from across the text, each with a method, plus one change and one context link.',
    '## Building a memory bank for a whole text');
}
