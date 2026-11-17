import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-english-literature-4et1-section-a-unseen-poetry';
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

// Rich text line: segs = [[text, 'hl'|'']]
const rich = (x, y, segs, o = {}) => `<text x="${x}" y="${y}" font-size="${o.size ?? 18}" fill="${C.ink}" xml:space="preserve">` +
  segs.map(([s, k]) => k ? `<tspan fill="${k === 'hl' ? C.rust : k}" font-weight="700">${X(s)}</tspan>` : `<tspan>${X(s)}</tspan>`).join('') + '</text>';
const TAG = { L: ['Language', C.cream, C.olive], F: ['Form', C.tealLight, C.tealDark], S: ['Structure', '#f6e3d6', C.rust] };

// 01 A reading method for 35 minutes
{
  const Y = 150;
  let s = T(30, Y - 12, 'Minutes', { size: 17, weight: 700, fill: C.muted });
  const segs = [['Read', 3, C.tealLight], ['Annotate', 5, C.teal], ['', 2, C.cream], ['Write', 22, C.mustard], ['Reread', 3, C.tealLight]];
  let x = 30; const xs = [];
  segs.forEach(([l, m, f]) => { const w = (840 * m) / 35; s += `<rect x="${x}" y="${Y}" width="${w}" height="60" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`; if (w > 60) s += T(x + w / 2, Y + 27, l, { size: 16, weight: 700, anchor: 'middle' }) + T(x + w / 2, Y + 48, l === 'Reread' ? '2–3' : String(m), { size: 15, anchor: 'middle', fill: C.muted }); xs.push([x, w]); x += w; });
  s += T(xs[2][0] + xs[2][1] / 2, Y + 84, 'turn, overview, plan', { size: 15, anchor: 'middle', fill: C.olive, weight: 600 });
  s += path(`M${xs[2][0] + xs[2][1] / 2},${Y + 62} L${xs[2][0] + xs[2][1] / 2},${Y + 68}`, { w: 2 });
  const st = steps(Y + 106, [
    { title: 'First read, for sense', body: 'Who is speaking, to whom, about what? The mood at the start and the end. Read the title as part of the poem.' },
    { title: 'Find the turn', body: 'A “but” or “yet”, a change of tense, a stanza that looks different, a final line set apart.' },
    { title: 'Second read, annotating', body: 'Six to eight short details. Next to each, write the effect, not just the technique.' },
    { title: 'Decide your overview', body: '“The poet presents X as Y, and the poem moves from A to B.”' },
    { title: 'Plan, write, reread', body: 'Three or four paragraphs following the poem’s movement, each mixing language, form and structure.' },
  ], { highlight: 1, gap: 10, size: 16, tsize: 19 });
  s += st.s;
  add('01-reading-method-35-minutes',
    svg(900, Math.round(Y + 106 + st.h + 24), 'A reading method for 35 minutes', s),
    'A 35-minute bar: 3 minutes for a first read, 5 for annotating, a short slot to find the turn, decide an overview and plan, about 22 minutes writing and 2 to 3 to reread. Five numbered steps explain each stage, with finding the turn highlighted.',
    'Read, find the turn, annotate for effects, decide an overview, then write.',
    '## A reading method for 35 minutes');
}

// 02 Annotated original poem: Night Shift
{
  const Y = 150, lh = 34, px = 50;
  const lines = [
    [['My mother comes home as the street wakes up,', '']],
    [['her coat still cold with the hours she has kept,', '']],
    [['and puts the kettle on as if the day', '']],
    [['were something she could boil and pour and drink.', '']],
    null,
    [['She does not ask', 'hl'], [' about my homework. ', ''], ['I', 'hl']],
    [['do not ask', 'hl'], [' about the ward. We ', ''], ['share', 'hl']],
    [['the kitchen ', ''], ['like two clocks set to different towns', 'hl'], [',', '']],
    [['both right, both ticking, neither of us ', ''], ['there', 'hl'], ['.', '']],
    null,
    [['Then she is gone upstairs. ', ''], ['The curtains close', 'hl']],
    [['on morning', 'hl'], ['. I eat my breakfast in her dark.', '']],
  ];
  let s = panel(30, Y - 40, 478, lines.length * lh + 64 - 16);
  s += T(px, Y - 8, 'Night Shift', { size: 19, weight: 700 });
  const ly = []; let y = Y + 26;
  lines.forEach((l) => { if (!l) { y += lh - 16; ly.push(null); return; } s += rich(px, y, l, { size: 17 }); ly.push(y); y += lh; });
  const L = (i) => ly.filter((v) => v !== null)[i] - 6; // line index 0..9 -> y
  const notes = [
    ['S', 'The line break leaves “I” isolated: the speaker is left on her own.', [4]],
    ['L', 'Matching negatives balance two silences: a shared habit, not blame.', [4, 5]],
    ['L', 'Simile: both work properly, yet they cannot meet.', [6]],
    ['F', 'The rhyme “share” / “there” links them, but the meaning undercuts the sharing.', [5, 7]],
    ['F', 'Two lines, not four: an abrupt ending, like the mother’s sudden exit.', [8, 9]],
    ['L', 'Paradox: “the curtains close / on morning”, a reversed day.', [8, 9]],
  ];
  const perLine = {};
  notes.forEach(([k, , tg], i) => tg.forEach((li) => { (perLine[li] = perLine[li] || []).push([i + 1, k]); }));
  Object.entries(perLine).forEach(([li, arr]) => { arr.forEach(([n, k], j) => { const e = TAG[k][2]; const cx = 484 - (arr.length - 1 - j) * 28; s += `<circle cx="${cx}" cy="${L(+li)}" r="12" fill="${TAG[k][1]}" stroke="${e}" stroke-width="2.5"/>` + T(cx, L(+li) + 5, String(n), { size: 15, weight: 700, anchor: 'middle' }); }); });
  let cy = Y - 40;
  notes.forEach(([k, txt], i) => {
    const [name, f, e] = TAG[k];
    const c = card(530, cy, 340, { kicker: `${i + 1} · ${name.toUpperCase()}`, kfill: e, body: txt, size: 15, bfill: C.ink, fill: f, edge: e, pad: 12 });
    s += c.s;
    cy += c.h + 8;
  });
  const H = Math.max(cy, Y - 40 + lines.length * lh + 48);
  s += T(30, H + 22, 'Original poem written for the guide; highlighted words are the details analysed.', { size: 15, fill: C.muted });
  add('02-night-shift-annotated',
    svg(900, Math.round(H + 44), 'Annotating an unseen poem', s),
    'The guide’s original poem Night Shift with six details highlighted and annotated by type: the isolated “I” at a line break (structure), the matching negatives and the simile of two clocks set to different towns (language), the rhyme of “share” and “there” and the shortened final stanza (form), and the paradox of curtains closing on morning (language).',
    'Each short detail is tied to an effect, and language, form and structure all serve one idea.',
    '## Worked example 1: an original unseen poem');
}

// 03 Overview: how the poem moves
{
  const Y = 120;
  let s = '';
  const blocks = [
    ['Stanza 1', 4, 'Close observation of the mother coming home', C.tealLight, C.tealDark],
    ['Stanza 2', 4, 'Side by side in the kitchen, on different timetables', C.teal, C.tealDark],
    ['Stanza 3', 2, 'She is gone; the child adapts to her world', C.cream, C.olive],
  ];
  let x = 30;
  blocks.forEach(([n, k, d, f, e], i) => {
    const w = 260;
    s += panel(x, Y, w, 250, C.panel, e) + T(x + 20, Y + 34, n, { size: 19, weight: 700, fill: e }) + T(x + w - 20, Y + 34, `${k} lines`, { size: 15, anchor: 'end', fill: C.muted });
    for (let j = 0; j < k; j++) s += `<rect x="${x + 20}" y="${Y + 52 + j * 22}" width="${w - 60 - (j % 2) * 30}" height="10" rx="5" fill="${f}" stroke="${e}" stroke-width="1.5"/>`;
    s += para(x + 20, Y + 160, d, w - 40, { size: 16, fill: C.ink }).s;
    if (i < 2) s += arrow(x + w + 4, Y + 125, x + w + 26, Y + 125, { w: 3 });
    x += w + 30;
  });
  s += T(630, Y + 118, 'shorter: an abrupt ending', { size: 15, fill: C.olive, weight: 700 });
  const ov = card(30, Y + 276, 840, { kicker: 'OVERVIEW', kfill: C.olive, title: 'A loving but disconnected relationship: mother and child live side by side on different timetables.', body: 'The poem moves from close observation to an ending in which the child adapts to the mother’s world.', tsize: 19, size: 17, bfill: C.ink, fill: C.cream, edge: C.olive });
  s += ov.s;
  add('03-poem-movement-overview',
    svg(900, Math.round(Y + 276 + ov.h + 24), 'Follow the poem’s movement', s, 'Question: how is the speaker’s relationship with her mother presented?'),
    'Night Shift drawn as three stanzas: four lines of close observation, four lines of mother and child side by side on different timetables, and a shorter two-line stanza where the mother is gone and the child adapts. An overview sentence sums up the relationship and the poem’s movement.',
    'An overview names the relationship and how the poem moves from start to end.',
    '## Worked example 1: an original unseen poem');
}

// 04 Three levels of response
{
  const Y = 120;
  let s = '';
  const lv = [
    ['Feature-spotting', '“The poet uses enjambment in stanza 2.”', 'names a technique', C.panel, C.panelEdge],
    ['Explained', '“Enjambment after ‘I’ makes the reader pause on the speaker.”', 'adds an effect', C.tealLight, C.tealDark],
    ['Analysed, linked to the question', '“Breaking ‘I / do not ask’ across the line leaves the speaker stranded at the line’s edge, so the form enacts how isolated she feels even in her mother’s company.”', 'method + effect + question', C.cream, C.olive],
  ];
  let cy = Y;
  lv.forEach(([ti, q, tag, f, e], i) => {
    const off = i * 70;
    const c = card(30 + off, cy, 700 - off + 140 - 0, { title: ti, body: q, tsize: 19, size: 16, fill: f, edge: e, bfill: C.ink });
    s += c.s + chip(854, cy + 16, tag, { anchor: 'end', size: 15, fill: C.panel, edge: e }).s;
    if (i < 2) s += arrow(60 + off, cy + c.h + 2, 60 + off + 50, cy + c.h + 26, { w: 3, color: C.tealDark, marker: 'ahT' });
    cy += c.h + 28;
  });
  s += T(450, cy + 4, 'Only the third connects the method, its effect and the focus of the question.', { size: 17, anchor: 'middle', weight: 600, fill: C.olive });
  add('04-three-levels-of-response',
    svg(900, Math.round(cy + 30), 'From feature-spotting to analysis', s),
    'The same detail written three ways, as a rising staircase. Feature-spotting only names enjambment; an explained version adds that it makes the reader pause on the speaker; the analysed version links breaking “I / do not ask” across the line to the speaker’s isolation, answering the question.',
    'Aim for method, effect and the question’s focus in every point.',
    '## Worked example 2: from feature-spotting to analysis');
}

// 05 Organise by idea, not by technique
{
  const Y = 130;
  let s = '';
  const colA = 30, colB = 470, W = 400;
  s += cross(colA + 18, Y - 2) + T(colA + 44, Y + 5, 'A technique checklist', { size: 20, weight: 700, fill: C.rust });
  s += tick(colB + 18, Y - 2) + T(colB + 44, Y + 5, 'Paragraphs built on ideas', { size: 20, weight: 700, fill: C.tealDark });
  const lfs = (x, y, keys, title) => {
    let o = panel(x, y, W, 112, C.panel, C.panelEdge) + T(x + 20, y + 34, title, { size: 18, weight: 700 });
    let cx = x + 20;
    keys.forEach((k) => { const [n, f, e] = TAG[k]; const c = chip(cx, y + 56, n, { size: 15, fill: f, edge: e }); o += c.s; cx += c.w + 10; });
    return o;
  };
  ['L', 'F', 'S'].forEach((k, i) => { s += lfs(colA, Y + 28 + i * 126, [k], `Paragraph ${i + 1}: ${TAG[k][0].toLowerCase()}`); });
  const ideas = [['Close in space, apart in time', ['L', 'S', 'F']], ['Two matching silences', ['L', 'S']], ['The ending: a reversed day', ['F', 'L']]];
  ideas.forEach(([ti, ks], i) => { s += lfs(colB, Y + 28 + i * 126, ks, ti); });
  const n = note(Y + 28 + 3 * 126 + 6, 'Work through the poem in order while grouping points by idea, so you do not miss the turn or the ending.');
  s += n.s;
  add('05-organise-by-idea',
    svg(900, Math.round(Y + 28 + 3 * 126 + 6 + n.h + 24), 'Organise by idea, not by technique', s),
    'Two plans compared. A technique checklist gives one paragraph each to language, form and structure. The stronger plan builds each paragraph on an idea from the poem, such as being close in space but apart in time, and mixes language, form and structure inside it.',
    'Mix language, form and structure inside each paragraph about one idea.',
    '## Key ideas to carry into any unseen poem');
}
