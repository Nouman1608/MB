import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-a-level-english-literature-yet01-unit-3-prose';
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

// 01 Section B at a glance
{
  const fig = compose('Unit 3 Section B at a glance', [
    (y) => { const b = markBar(y + 26, [{ label: 'Section A', sub: '20 marks', value: 20, fill: C.tealLight }, { label: 'Section B: Prose', sub: '30 marks · one comparative essay', value: 30, fill: C.mustard }]); return { s: T(30, y + 14, 'Unit 3 · 50 marks · open book', { size: 17, weight: 700, fill: C.muted }) + b.s, h: b.h + 26 }; },
    (y) => {
      let s = card(30, y, 840, { minH: 214 }).s;
      s += T(60, y + 36, 'One theme, three texts: you study two', { size: 18, weight: 700 });
      const bk = (x, f, on) => `<rect x="${x}" y="${y + 80}" width="70" height="100" rx="6" fill="${on ? f : C.bg}" stroke="${on ? C.ink : C.panelEdge}" stroke-width="2.5"${on ? '' : ' stroke-dasharray="7 5"'}/><rect x="${x}" y="${y + 80}" width="12" height="100" rx="3" fill="${C.ink}" opacity="${on ? 0.25 : 0.08}"/>`;
      s += bk(70, C.tealLight, true) + bk(160, C.cream, true) + bk(250, C.panel, false);
      s += T(105, y + 202, 'Text A', { size: 15, weight: 700, anchor: 'middle' }) + T(195, y + 202, 'Text B', { size: 15, weight: 700, anchor: 'middle' }) + T(285, y + 202, 'not studied', { size: 15, anchor: 'middle', fill: C.muted });
      s += `<path d="M105,${y + 76} Q150,${y + 54} 195,${y + 76}" fill="none" stroke="${C.ink}" stroke-width="2.5" marker-start="url(#ah)" marker-end="url(#ah)"/>`;
      s += para(370, y + 90, 'One comparative essay from a choice of two questions.', 470, { size: 17 }).s;
      s += para(370, y + 140, 'Compare the two texts and consider relevant contextual factors.', 470, { size: 17 }).s;
      return { s, h: 214 };
    },
    (y) => {
      let s = T(30, y + 18, 'All four objectives:', { size: 19, weight: 700 });
      let x = 230; ['AO1', 'AO2', 'AO3', 'AO4'].forEach((a) => { const c = chip(x, y - 2, a, { size: 18, fill: C.tealLight, edge: C.tealDark }); s += c.s; x += c.w + 10; });
      s += T(x + 8, y + 18, 'the largest single essay', { size: 17, fill: C.muted });
      return { s, h: 30 };
    },
    (y) => note(y + 6, 'Allocate the larger share of the two hours to this section, and spend about ten minutes planning with your framework grid.'),
  ]);
  add('01-section-b-at-a-glance', fig,
    'Unit 3 is a 50-mark open-book paper: Section A is 20 marks and Section B Prose 30. You study two of the three texts in one theme and write one comparative essay from a choice of two questions, comparing the texts and considering context. It is assessed on AO1, AO2, AO3 and AO4, so it needs the larger share of the two hours.',
    'The largest essay: two novels, four objectives, 30 marks.',
    '## What Section B covers');
}

// 02 Themes and texts on a timeline
{
  const Y = 120;
  let s = '';
  const x0 = 270, x1 = 850, y0 = 1800, y1 = 2010;
  const X_ = (yr) => x0 + ((yr - y0) / (y1 - y0)) * (x1 - x0);
  const themes = [
    ['1 Growing Up', [['Great Expectations', 1860, '1860–61'], ['What Maisie Knew', 1897], ['The Color Purple', 1982]]],
    ['2 Colonisation and After', [['Heart of Darkness', 1899], ['A Passage to India', 1924], ['The Lonely Londoners', 1956]]],
    ['3 Science and Society', [['Frankenstein', 1818], ['The Handmaid’s Tale', 1985], ['Never Let Me Go', 2005]]],
    ['4 Women and Society', [['Wuthering Heights', 1847], ['Mrs Dalloway', 1925], ['Beloved', 1987]]],
  ];
  const rh = 128;
  [1800, 1850, 1900, 1950, 2000].forEach((yr) => { s += [0, 1, 2, 3].map((i) => `<line x1="${X_(yr)}" y1="${Y + i * rh + rh / 2 - 6}" x2="${X_(yr)}" y2="${Y + i * rh + rh / 2 + 6}" stroke="${C.muted}" stroke-width="2"/>`).join('') + `<line x1="${X_(yr)}" y1="${Y + 4 * rh - 2}" x2="${X_(yr)}" y2="${Y + 4 * rh + 6}" stroke="${C.muted}" stroke-width="2"/>` + T(X_(yr), Y + 4 * rh + 24, String(yr), { size: 15, anchor: 'middle', fill: C.muted }); });
  themes.forEach(([th, books], i) => {
    const y = Y + i * rh, cy = y + rh / 2;
    s += `<rect x="30" y="${y + 10}" width="220" height="${rh - 20}" rx="10" fill="${i % 2 ? C.cream : C.tealLight}" stroke="${i % 2 ? C.olive : C.tealDark}" stroke-width="2"/>` + para(46, cy - 6, th, 190, { size: 17, weight: 700 }).s;
    s += `<line x1="${x0}" y1="${cy}" x2="${x1}" y2="${cy}" stroke="${C.ink}" stroke-width="2.5"/>`;
    books.forEach(([b, yr, lab], k) => {
      const x = X_(yr), up = k % 2 === 0;
      s += `<circle cx="${x}" cy="${cy}" r="8" fill="${yr < 1900 ? C.mustard : C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`;
      const anchor = x > 760 || b === 'Heart of Darkness' ? 'end' : x < 330 ? 'start' : 'middle', tx = anchor === 'end' ? x + 8 : anchor === 'start' ? x - 8 : x;
      s += T(tx, up ? cy - 28 : cy + 30, b, { size: 15, weight: 700, anchor, italic: true }) + T(tx, up ? cy - 12 : cy + 47, lab || String(yr), { size: 14, anchor, fill: C.muted }).replace('font-size="14"', 'font-size="15"');
    });
  });
  const n = note(Y + 4 * rh + 44, 'Several pairings place a nineteenth-century novel beside a twentieth- or twenty-first-century one. That gap gives AO3 and AO4 something to explain: the writers approach a shared theme from different historical positions.');
  s += n.s;
  add('02-themes-and-texts-timeline',
    svg(900, Math.round(Y + 4 * rh + 44 + n.h + 24), 'Four themes, twelve novels, two centuries', s),
    'Four timelines from 1800 to 2010, one per theme. Growing Up: Great Expectations (1860–61), What Maisie Knew (1897), The Color Purple (1982). Colonisation and After: Heart of Darkness (1899), A Passage to India (1924), The Lonely Londoners (1956). Science and Society: Frankenstein (1818), The Handmaid’s Tale (1985), Never Let Me Go (2005). Women and Society: Wuthering Heights (1847), Mrs Dalloway (1925), Beloved (1987).',
    'Pairings often span a century, which gives context and comparison something to explain.',
    '## The themes and texts');
}

// 03 The four AOs in one paragraph
{
  const Y = 120;
  let s = '';
  const layers = [
    ['AO1', 'A point about the question', 'A coherent, personal argument with accurate terminology', C.panel, C.ink],
    ['AO2', 'Analysis of a method in both novels', 'Narrative voice, structure, setting, symbolism, dialogue, language', C.tealLight, C.tealDark],
    ['AO4', 'The comparison itself', 'Connections across the two texts', C.cream, C.olive],
    ['AO3', 'Context explaining the difference', 'Contexts in which the texts were written and received', C.mustard, C.olive],
  ];
  let y = Y;
  layers.forEach(([ao, t1, b, f, e], i) => {
    s += `<rect x="${130 + i * 0}" y="${y}" width="740" height="84" rx="12" fill="${f}" stroke="${e}" stroke-width="2.5"/>`;
    s += `<rect x="30" y="${y}" width="86" height="84" rx="12" fill="${C.panel}" stroke="${e}" stroke-width="2.5"/>` + T(73, y + 50, ao, { size: 22, weight: 700, anchor: 'middle', fill: e === C.ink ? C.ink : e });
    s += T(152, y + 36, t1, { size: 20, weight: 700 }) + T(152, y + 64, b, { size: 16, fill: C.ink });
    y += 94;
  });
  s += path(`M885,${Y + 6} L885,${y - 16}`, { w: 0 });
  const n = note(y + 8, 'A paragraph that does all four is the goal.');
  s += n.s;
  add('03-four-aos-one-paragraph',
    svg(900, Math.round(y + 8 + n.h + 24), 'One paragraph, four objectives', s),
    'Four stacked layers of a single paragraph: AO1, a point about the question in a coherent personal argument; AO2, analysis of a method in both novels; AO4, the comparison itself; and AO3, context of writing and reception explaining the difference.',
    'Aim for a point, method in both novels, comparison and context in every paragraph.',
    '## The four AOs together');
}

// 04 Comparison framework grid
{
  const Y = 120;
  const rows = ['Narrative voice', 'Structure and time', 'Setting and its symbolism', 'Central relationships', 'Treatment of the theme’s core idea', 'Endings', 'Context of production', 'Context of reception'];
  let s = '';
  const cw0 = 330, cw1 = 220, rh = 46;
  s += `<rect x="30" y="${Y}" width="${cw0}" height="46" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + T(42, Y + 30, 'Row', { size: 17, weight: 700 });
  s += `<rect x="${30 + cw0}" y="${Y}" width="${cw1}" height="46" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + T(42 + cw0, Y + 30, 'Text A', { size: 17, weight: 700 });
  s += `<rect x="${30 + cw0 + cw1}" y="${Y}" width="${cw1}" height="46" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + T(42 + cw0 + cw1, Y + 30, 'Text B', { size: 17, weight: 700 });
  const pick = [0, 1, 5, 7];
  rows.forEach((r, i) => {
    const y = Y + 46 + i * rh, hl = pick.includes(i);
    s += `<rect x="30" y="${y}" width="${cw0}" height="${rh}" fill="${hl ? C.cream : C.tealLight}" stroke="${C.ink}" stroke-width="2"/>` + T(42, y + 30, r, { size: 16, weight: 700 });
    [0, 1].forEach((k) => { s += `<rect x="${30 + cw0 + k * cw1}" y="${y}" width="${cw1}" height="${rh}" fill="${C.panel}" stroke="${C.ink}" stroke-width="2"/>` + `<line x1="${44 + cw0 + k * cw1}" y1="${y + 24}" x2="${(k ? 190 : 150) + cw0 + k * cw1}" y2="${y + 24}" stroke="${C.panelEdge}" stroke-width="5" stroke-linecap="round"/>`; });
    if (hl) s += `<circle cx="${30 + cw0 + 2 * cw1 + 30}" cy="${y + rh / 2}" r="11" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`;
  });
  const by = Y + 46 + rows.length * rh;
  s += T(870, Y + 28, 'chosen', { size: 15, weight: 700, anchor: 'end', fill: C.olive });
  const n = note(by + 18, 'Each row is a potential paragraph. On the day, choose the three or four rows that answer the question best (shown here as an example).');
  s += n.s;
  add('04-comparison-framework',
    svg(900, Math.round(by + 18 + n.h + 24), 'Build a comparison framework before the exam', s),
    'A grid with columns for Text A and Text B and eight rows: narrative voice, structure and time, setting and its symbolism, central relationships, treatment of the theme’s core idea, endings, context of production and context of reception. Four rows are marked as an example of choosing the three or four that best answer the question.',
    'Fill the grid in revision; pick three or four rows on the day.',
    '## Building a comparison framework');
}

// 05 Context: production and reception
{
  const Y = 120;
  let s = '';
  const L = card(30, Y, 412, { kicker: 'CONTEXT OF PRODUCTION', title: 'When and how it was written', body: ['The writer’s life, only where it relates to the text', 'The historical setting', 'Social and cultural contexts', 'Literary context: movements and genres'], bullets: true, fill: C.tealLight, edge: C.tealDark, size: 16, minH: 250 });
  const R = card(458, Y, 412, { kicker: 'CONTEXT OF RECEPTION', title: 'How it has been read since', body: ['How it has been reviewed, used, edited and adapted', 'How readers and critics have arrived at alternative interpretations'], bullets: true, fill: C.cream, edge: C.olive, kfill: C.olive, size: 16, minH: 250 });
  s += L.s + R.s;
  const y2 = Y + 270;
  s += T(30, y2 + 6, 'Why reception is often the most useful in a comparison', { size: 19, weight: 700 });
  const r = row(y2 + 22, [
    { body: 'It explains why a modern reader responds to an older novel differently from its first readers.', bfill: C.ink },
    { body: 'It shows how a later novel answers an earlier tradition.', bfill: C.ink },
  ], { gap: 16, card: { size: 17 } });
  s += r.s;
  add('05-production-and-reception',
    svg(900, Math.round(y2 + 22 + r.h + 24), 'Context of production and of reception', s),
    'Two columns from the specification’s guidance. Production: the writer’s life where relevant, the historical setting, social and cultural contexts, and literary movements and genres. Reception: how the text has been reviewed, used, edited and adapted, and how readers have reached alternative interpretations. Reception explains why modern readers respond differently and how a later novel answers an earlier tradition.',
    'Reception context is often the most useful for explaining a difference.',
    '## Context: production and reception');
}

// 06 Worked plan: Wuthering Heights and Mrs Dalloway
{
  const Y = 118;
  let s = '';
  const th = card(30, Y, 840, { kicker: 'THESIS', body: 'Both turn on a woman’s choice of a socially secure husband over a more passionate alternative, but Brontë presents it as a betrayal with destructive consequences, Woolf as a compromise her heroine continues to examine.', fill: C.cream, edge: C.olive, kfill: C.olive, bfill: C.ink, size: 17 });
  s += th.s;
  const rows = [
    ['1 The choice', 'Catherine’s decision to marry Edgar, explained to Nelly', 'Clarissa’s memory of choosing Richard over Peter'],
    ['2 Narrative method', 'Layered narrators (Lockwood, Nelly) keep Catherine at a distance', 'Free indirect style gives access to Clarissa’s mind'],
    ['3 Structure and time', 'Two generations and a partial repetition', 'One day in June 1923 with memories of youth'],
    ['4 Context', 'Property and marriage before married women could own property in their own right', 'Post-war London and women’s changing roles'],
    ['5 Reception', 'Early reviewers’ unease at its passion and violence', 'Later feminist readings of both novels'],
  ];
  const tb = table(Y + th.h + 16, ['Paragraph', 'Wuthering Heights', 'Mrs Dalloway'], rows, [210, 315, 315], { size: 16 });
  s += tb.s;
  const y2 = Y + th.h + 16 + tb.h + 16;
  const c = card(30, y2, 840, { kicker: 'CONCLUSION', body: 'Marriage as social necessity and personal cost in both; they differ in whether the choice destroys or diminishes.', fill: C.cream, edge: C.olive, kfill: C.olive, bfill: C.ink, size: 17 });
  s += c.s;
  add('06-worked-plan-theme-4',
    svg(900, Math.round(y2 + c.h + 24), 'Worked plan: women’s choices about marriage', s),
    'A comparative plan for Wuthering Heights and Mrs Dalloway. Thesis: both heroines choose a secure husband over passion, a destructive betrayal in Brontë and an examined compromise in Woolf. Five paragraphs compare the choice, narrative method, structure and time, context, and reception, each across both novels. Conclusion: marriage as necessity and cost, destroying or diminishing.',
    'Every row of the plan compares both novels on the same point.',
    '## Worked example: Theme 4');
}

// 07 Narrative distance in the model paragraph
{
  const Y = 120;
  let s = '';
  s += panel(30, Y, 412, 380, C.panel, C.olive) + `<text x="50" y="${Y + 36}" font-size="19" font-weight="700" fill="${C.ink}" font-style="italic">Wuthering Heights</text>`;
  const cx = 236, cy = Y + 200;
  [[160, 'Lockwood', C.tealLight], [112, 'Nelly', C.cream], [60, 'Catherine', C.mustard]].forEach(([r, l, f], i) => {
    s += `<rect x="${cx - r}" y="${cy - r * 0.85}" width="${2 * r}" height="${r * 1.7}" rx="16" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += T(cx, cy - r * 0.85 + 26, l, { size: 16, weight: 700, anchor: 'middle' });
  });
  s += T(cx, cy + 22, 'her words', { size: 15, anchor: 'middle', fill: C.ink });
  s += eye(cx, Y + 356, 0.9) + T(cx + 30, Y + 362, 'the reader, at a distance', { size: 15, weight: 700, fill: C.olive });
  s += panel(458, Y, 412, 380, C.panel, C.tealDark) + `<text x="478" y="${Y + 36}" font-size="19" font-weight="700" fill="${C.ink}" font-style="italic">Mrs Dalloway</text>`;
  const dx = 664;
  s += `<circle cx="${dx}" cy="${cy - 10}" r="120" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + T(dx, cy - 96, 'Clarissa’s mind', { size: 16, weight: 700, anchor: 'middle' });
  s += eye(dx, cy - 10, 1.1) + T(dx, cy + 34, 'free indirect discourse', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 700 });
  s += T(dx, cy + 58, 'the choice revisited from within,', { size: 15, anchor: 'middle' }) + T(dx, cy + 78, 'decades later', { size: 15, anchor: 'middle' });
  s += T(dx, Y + 362, 'the reader, inside', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
  const r = row(Y + 400, [
    { title: 'Distance', body: 'Catherine’s declaration is filtered through a servant who disapproves: we weigh Nelly’s judgement against Catherine’s words.', fill: C.cream, edge: C.olive },
    { title: 'Intimacy', body: 'We understand a choice that has both protected and limited her.', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 16, card: { size: 16, tsize: 19 } });
  s += r.s;
  const n = note(Y + 400 + r.h + 16, 'AO3: the Victorian frame narrative against a modernist interest in consciousness explains the difference.');
  s += n.s;
  add('07-narrative-distance',
    svg(900, Math.round(Y + 400 + r.h + 16 + n.h + 24), 'How narration shapes our judgement', s),
    'Left: Wuthering Heights as nested frames, Lockwood around Nelly around Catherine, so the reader sees her words at a distance and weighs Nelly’s disapproval. Right: Mrs Dalloway places the reader inside Clarissa’s mind through free indirect discourse, revisiting her choice decades later. The difference is explained by the Victorian frame narrative against modernist interest in consciousness.',
    'Brontë’s frames distance us from the choice; Woolf’s interiority brings us inside it.',
    '## Worked example: Theme 4');
}
