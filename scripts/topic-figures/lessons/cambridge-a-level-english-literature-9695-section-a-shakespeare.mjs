import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-english-literature-9695-section-a-shakespeare';
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
const beads = (x, y, n, o = {}) => { let s = ''; for (let i = 0; i < n; i++) { const big = o.stress ? i % 2 === 1 : false; s += `<circle cx="${x + i * (o.gap ?? 30)}" cy="${y}" r="${big ? 8 : 5}" fill="${o.fill || (big ? C.tealDark : C.teal)}" stroke="${C.ink}" stroke-width="2"/>`; } return s; };

// 01 Section A at a glance
{
  const fig = compose('Paper 3 Section A at a glance', [
    (y) => { const b = markBar(y + 26, [{ label: 'Section A: Shakespeare', sub: '25 marks · one essay', value: 25, fill: C.mustard }, { label: 'Section B: Drama', sub: '25 marks', value: 25, fill: C.tealLight }]); return { s: T(30, y + 14, 'Paper 3 · 50 marks', { size: 17, weight: 700, fill: C.muted }) + b.s, h: b.h + 26 }; },
    (y) => {
      let s = T(30, y + 18, 'All five objectives, each 20%', { size: 19, weight: 700 });
      const w = 840 / 5;
      for (let i = 0; i < 5; i++) {
        const x = 30 + i * w, f = i === 4 ? C.mustard : (i % 2 ? C.tealLight : C.panel);
        s += `<rect x="${x}" y="${y + 34}" width="${w}" height="66" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x + w / 2, y + 62, `AO${i + 1}`, { size: 20, weight: 700, anchor: 'middle' }) + T(x + w / 2, y + 88, '20%', { size: 17, anchor: 'middle' });
      }
      s += path(`M${30 + 4.5 * w},${y + 102} L${30 + 4.5 * w},${y + 122}`, { w: 2.5 });
      s += T(870, y + 144, 'AO5: the discussion and evaluation of varying opinions and interpretations', { size: 16, weight: 700, anchor: 'end', fill: C.olive });
      s += T(870, y + 166, 'unlike the AS Level papers', { size: 15, anchor: 'end', fill: C.muted });
      return { s, h: 170 };
    },
    (y) => {
      const o = { minH: 106, size: 17 };
      const L = card(30, y, 380, { kicker: 'QUESTION (a)', title: 'Essay on the play as a whole', ...o });
      const R = card(490, y, 380, { kicker: 'QUESTION (b)', title: 'Printed passage, analysed in relation to the whole', ...o, fill: C.cream, edge: C.olive, kfill: C.olive });
      const h = Math.max(L.h, R.h);
      return { s: L.s + R.s + `<circle cx="450" cy="${y + h / 2}" r="30" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + T(450, y + h / 2 + 7, 'or', { size: 20, weight: 700, anchor: 'middle' }), h };
    },
    (y) => {
      let s = T(30, y + 18, 'Set plays', { size: 19, weight: 700 });
      const r = row(y + 32, [
        { title: '2026', body: 'Hamlet · The Taming of the Shrew', align: 'middle', tfill: C.olive },
        { title: '2027', body: 'Henry IV, Part 1 · The Taming of the Shrew', align: 'middle', tfill: C.tealDark },
      ], { gap: 20, card: { size: 17, tsize: 20, bfill: C.ink } });
      return { s: s + r.s, h: r.h + 32 };
    },
    (y) => note(y, 'The play is not allowed in the exam room. Check the set plays for your examination year.'),
  ]);
  add('01-section-a-at-a-glance', fig,
    'Paper 3 is worth 50 marks: Section A Shakespeare is 25 marks for one essay and Section B Drama the other 25. Section A is assessed on all five objectives at 20% each, including AO5, the discussion and evaluation of varying opinions and interpretations. You choose an (a) essay on the whole play or a (b) printed passage. The set plays are Hamlet and The Taming of the Shrew for 2026, and Henry IV, Part 1 and The Taming of the Shrew for 2027.',
    'One Shakespeare essay worth 25 marks, assessed on all five objectives including AO5.',
    '## What the section asks of you');
}

// 02 Verse, prose and rhyme
{
  const Y = 116, gap = 12;
  let s = '';
  const rows = [
    ['Blank verse', 'Unrhymed iambic pentameter: the usual voice of high-status characters and serious feeling.', (x, y) => beads(x, y, 10, { stress: true, gap: 22 }) + T(x - 6, y + 34, 'five weak–strong pairs', { size: 15, fill: C.muted })],
    ['Prose', 'Comedy, low-status characters, letters, disorder felt or feigned. A high-status character dropping into prose has changed mood, company or self-control, as Hamlet’s shifts show.', (x, y) => [0.98, 0.9, 1, 0.55].map((f, i) => `<line x1="${x - 6}" y1="${y - 20 + i * 14}" x2="${x - 6 + 210 * f}" y2="${y - 20 + i * 14}" stroke="${C.olive}" stroke-width="6" stroke-linecap="round" opacity="0.7"/>`).join('')],
    ['Rhyming couplets', 'Often close scenes or mark a sententious, quotable conclusion.', (x, y) => [0, 1].map((i) => `<line x1="${x - 6}" y1="${y - 12 + i * 24}" x2="${x + 170}" y2="${y - 12 + i * 24}" stroke="${C.ink}" stroke-width="6" stroke-linecap="round" opacity="0.45"/>` + `<circle cx="${x + 190}" cy="${y - 12 + i * 24}" r="11" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` + T(x + 190, y - 7 + i * 24, 'a', { size: 15, weight: 700, anchor: 'middle' })).join('')],
  ];
  let yy = Y;
  rows.forEach(([ti, body, icon], i) => {
    const pb = para(316, yy + 70, body, 530, { size: 17, fill: C.muted }), rh = Math.max(128, 70 + pb.h + 14), y = yy;
    yy += rh + gap;
    s += panel(30, y, 840, rh);
    s += `<rect x="42" y="${y + 12}" width="250" height="${rh - 24}" rx="10" fill="${[C.tealLight, C.cream, C.tealLight][i]}"/>`;
    s += icon(64, y + rh / 2 - 4);
    s += T(316, y + 40, ti, { size: 21, weight: 700 });
    s += pb.s;
  });
  const y2 = yy + 18 - gap;
  s += T(30, y2 + 14, 'Lines that break the pattern', { size: 20, weight: 700 });
  const r = row(y2 + 30, [{ title: 'Shared line', body: 'One speaker completes another’s pentameter: intimacy, haste or conflict.', minH: 190 }, { title: 'Short line', body: 'A pause the actor must fill.', minH: 190 }], { gap: 20, vcenter: false, card: { size: 17, tsize: 19 } });
  s += r.s;
  const by = y2 + 30 + r.h - 46;
  s += T(52, by - 22, 'A', { size: 16, weight: 700, fill: C.tealDark }) + beads(80, by - 27, 6, { stress: true, gap: 22 });
  s += T(52 + 6 * 22 + 20, by + 18, 'B', { size: 16, weight: 700, fill: C.olive }) + beads(80 + 6 * 22 + 20, by + 13, 4, { stress: true, gap: 22, fill: null });
  s += beads(500, by - 7, 4, { stress: true, gap: 22 }) + `<rect x="${500 + 4 * 22}" y="${by - 22}" width="${6 * 22 + 30}" height="30" rx="6" fill="none" stroke="${C.rust}" stroke-width="2.5" stroke-dasharray="6 5"/>` + T(500 + 4 * 22 + (6 * 22 + 30) / 2, by - 1, 'pause', { size: 15, weight: 700, anchor: 'middle', fill: C.rust });
  add('02-verse-prose-rhyme',
    svg(900, Math.round(y2 + 30 + r.h + 24), 'Verse, prose and rhyme', s),
    'Three modes of Shakespeare’s language. Blank verse, unrhymed iambic pentameter, is the usual voice of high-status characters and serious feeling. Prose is used for comedy, low-status characters, letters and disorder, so a high-status character dropping into prose has changed something. Rhyming couplets close scenes or mark quotable conclusions. Below, a shared line split between two speakers suggests intimacy, haste or conflict, and a short line leaves a pause.',
    'Movement between verse, prose and rhyme is meaningful, and so are broken lines.',
    '## Shakespeare\'s dramatic language');
}

// 03 Soliloquy
{
  const Y = 116;
  let s = '';
  s += panel(30, Y, 840, 200);
  s += `<rect x="60" y="${Y + 20}" width="300" height="114" fill="${C.sand}" stroke="${C.ink}" stroke-width="2.5"/>` + pawn(210, Y + 124, C.mustard, 0.85);
  s += speech(232, Y + 30, 110, 40) + T(287, Y + 56, 'reasoning', { size: 15, weight: 700, anchor: 'middle' });
  for (let i = 0; i < 6; i++) s += `<path d="M${80 + i * 46},${Y + 186} a16,16 0 0 1 32,0 z" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>`;
  s += T(210, Y + 160, 'the audience', { size: 15, anchor: 'middle', fill: C.muted });
  s += T(400, Y + 52, 'How does the soliloquy position us?', { size: 19, weight: 700 });
  { let cx = 400; ['confidant', 'judge', 'accomplice'].forEach((c) => { const k = chip(cx, Y + 76, c, { size: 18, fill: C.cream, edge: C.olive }); s += k.s; cx += k.w + 14; }); }
  s += para(400, Y + 150, 'Soliloquies give access to a character’s reasoning, and so shape our judgement.', 450, { size: 17, fill: C.muted }).s;
  // Hal strip
  const hy = Y + 228;
  s += T(30, hy + 18, 'Henry IV, Part 1', { size: 19, weight: 700, italic: true });
  const n = 8, bw = 840 / n;
  for (let i = 0; i < n; i++) {
    const sol = i === 1, tav = [2, 4, 6].includes(i);
    s += `<rect x="${30 + i * bw}" y="${hy + 34}" width="${bw - 6}" height="52" rx="6" fill="${sol ? C.mustard : tav ? C.cream : C.panel}" stroke="${tav ? C.olive : C.ink}" stroke-width="2.5"${tav ? ' stroke-dasharray="7 5"' : ''}/>`;
    if (sol || tav) s += T(30 + i * bw + (bw - 6) / 2, hy + 66, sol ? 'soliloquy' : 'tavern', { size: 15, weight: 700, anchor: 'middle' });
  }
  [2, 4, 6].forEach((i, k) => { const x1 = 30 + 1.5 * bw - 3 + (k - 1) * 18, x2 = 30 + (i + 0.5) * bw - 3, d = 22 + k * 16; s += `<path d="M${x1},${hy + 88} C${x1},${hy + 88 + d} ${x2},${hy + 88 + d} ${x2},${hy + 94}" fill="none" stroke="${C.olive}" stroke-width="2.5" marker-end="url(#ahO)"/>`; });
  s += para(30, hy + 162, 'Hal’s early soliloquy reveals that his tavern life is a calculated performance, which changes how every later tavern scene is watched.', 840, { size: 17, fill: C.ink }).s;
  // Hamlet strip
  const ky = hy + 222;
  s += T(30, ky + 18, 'Hamlet', { size: 19, weight: 700, italic: true });
  for (let i = 0; i < n; i++) {
    const sol = i % 2 === 1;
    s += `<rect x="${30 + i * bw}" y="${ky + 34}" width="${bw - 6}" height="52" rx="6" fill="${sol ? C.mustard : C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += T(30 + i * bw + (bw - 6) / 2, ky + 66, sol ? 'private' : 'public', { size: 15, weight: 700, anchor: 'middle' });
  }
  s += para(30, ky + 116, 'The soliloquies chart a mind arguing with itself; placed between public scenes, they contrast private thought with public action.', 840, { size: 17, fill: C.ink }).s;
  add('03-soliloquy',
    svg(900, Math.round(ky + 116 + 52 + 20), 'Soliloquy: what it does to the audience', s),
    'A lone character speaks reasoning to the audience, who may be positioned as confidant, judge or accomplice. In Henry IV, Part 1, Hal’s early soliloquy reframes every later tavern scene as calculated performance. In Hamlet, soliloquies placed between public scenes contrast private thought with public action.',
    'A soliloquy shapes how the audience judges what follows.',
    '## Shakespeare\'s dramatic language');
}

// 04 Imagery patterns
{
  const Y = 120;
  let s = '';
  const strip = (y, title, words, fill, ink) => {
    let o = T(30, y + 6, title, { size: 19, weight: 700, italic: true });
    o += `<rect x="30" y="${y + 22}" width="840" height="44" rx="8" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>`;
    const xs = [90, 230, 360, 520, 650, 800];
    o += path(`M${xs.map((x, i) => `${x},${y + 44 + (i % 2 ? -8 : 8)}`).join(' L')}`, { stroke: ink, w: 2.5, extra: 'stroke-dasharray="6 5"' });
    xs.forEach((x, i) => { o += `<circle cx="${x}" cy="${y + 44 + (i % 2 ? -8 : 8)}" r="9" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>`; });
    let cx = 30; words.forEach((w) => { const c = chip(cx, y + 80, w, { size: 16, fill, edge: ink }); o += c.s; cx += c.w + 10; });
    return o;
  };
  s += strip(Y, 'Hamlet', ['disease', 'rot', 'poison'], C.cream, C.olive);
  s += T(870, Y + 104, 'through the language of the Danish court', { size: 16, anchor: 'end', fill: C.muted });
  s += strip(Y + 140, 'The Taming of the Shrew', ['taming a hawk'], C.tealLight, C.tealDark);
  s += T(870, Y + 244, 'Petruchio describes his treatment of Katherina', { size: 16, anchor: 'end', fill: C.muted });
  const y3 = Y + 290;
  const r = row(y3, [
    { title: 'One image in the passage', body: 'Spot it in the printed extract.' },
    { title: 'Its wider pattern', body: 'Connect it to the cluster across the play.' },
    { title: 'AO1, efficiently', body: 'Shows knowledge of the whole play.', fill: C.cream, edge: C.olive },
  ], { arrows: true, gap: 42, card: { size: 16, tsize: 18 } });
  s += r.s;
  add('04-imagery-patterns',
    svg(900, Math.round(y3 + r.h + 24), 'Imagery patterns across a play', s),
    'Two plays drawn as strips with recurring image points joined by a dashed line. In Hamlet, images of disease, rot and poison run through the language of the Danish court; in The Taming of the Shrew, Petruchio describes his treatment of Katherina as taming a hawk. Connecting one image in a passage to its wider pattern shows knowledge of the whole play.',
    'Link one image to its pattern across the play to show whole-text knowledge.',
    '## Shakespeare\'s dramatic language');
}

// 05 Structure and genre
{
  const Y = 120;
  let s = T(30, Y + 6, 'Five-act shape (often blurred)', { size: 20, weight: 700 });
  const gx = 60, gw = 780, base = Y + 214;
  const P = [[0, 0], [0.25, -45], [0.5, -125], [0.75, -45], [1, -10]];
  s += `<line x1="${gx}" y1="${base}" x2="${gx + gw}" y2="${base}" stroke="${C.panelEdge}" stroke-width="3"/>`;
  s += path(`M${gx},${base} C${gx + 0.2 * gw},${base - 10} ${gx + 0.35 * gw},${base - 125} ${gx + 0.5 * gw},${base - 125} S${gx + 0.8 * gw},${base - 30} ${gx + gw},${base - 10}`, { stroke: C.tealDark, w: 4 });
  ['exposition', 'complication', 'crisis', 'falling action', 'resolution'].forEach((l, i) => {
    const x = gx + P[i][0] * gw, y = base + (i === 2 ? -125 : i === 0 ? 0 : i === 4 ? -10 : -62);
    s += `<circle cx="${x}" cy="${y}" r="8" fill="${C.tealDark}"/>`;
    s += T(Math.min(Math.max(x, gx + 50), gx + gw - 50), base + 30, l, { size: 16, weight: 700, anchor: 'middle' });
  });
  s += `<line x1="${gx + 0.64 * gw}" y1="${base - 130}" x2="${gx + 0.64 * gw}" y2="${base - 102}" stroke="${C.olive}" stroke-width="2.5" stroke-dasharray="5 4"/><rect x="${gx + 0.64 * gw - 23}" y="${base - 160}" width="46" height="30" rx="6" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + T(gx + 0.64 * gw + 34, base - 138, 'locate a (b) passage in this arc', { size: 16, weight: 700, fill: C.olive });
  let x = 30; const gy = base + 56;
  s += T(30, gy + 18, 'Genre sets expectations about endings:', { size: 17, weight: 700 });
  x = 400; ['tragedy', 'comedy', 'history'].forEach((g) => { const c = chip(x, gy - 2, g, { size: 17, fill: C.cream, edge: C.olive }); s += c.s; x += c.w + 12; });
  s += T(30, gy + 52, 'Much critical debate concerns how far a play fulfils them.', { size: 16, fill: C.muted });
  // parallel plots
  const py = gy + 88;
  s += T(30, py + 6, 'Parallel and contrasting plots', { size: 20, weight: 700 });
  const pairs = [['Henry IV, Part 1', 'the tavern', 'the court'], ['The Taming of the Shrew', 'Bianca’s suitors', 'Katherina and Petruchio'], ['Hamlet', 'several sons seeking to avenge fathers', '']];
  pairs.forEach(([play, a, b], i) => {
    const y = py + 24 + i * 62;
    s += T(30, y + 34, play, { size: 17, weight: 700, italic: true });
    if (b) {
      s += chip(300, y + 12, a, { size: 16, fill: C.tealLight, edge: C.tealDark, w: 230 }).s + chip(620, y + 12, b, { size: 16, fill: C.cream, edge: C.olive, w: 250 }).s;
      s += `<line x1="536" y1="${y + 28}" x2="614" y2="${y + 28}" stroke="${C.ink}" stroke-width="2.5" marker-start="url(#ah)" marker-end="url(#ah)"/>`;
    } else s += chip(300, y + 12, a, { size: 16, fill: C.tealLight, edge: C.tealDark, w: 570 }).s;
  });
  // frame
  const fy = py + 24 + 3 * 62 + 16;
  s += `<text x="30" y="${fy + 6}" font-size="20" font-weight="700" fill="${C.ink}">A frame: the Induction of <tspan font-style="italic">The Taming of the Shrew</tspan></text>`;
  s += `<rect x="30" y="${fy + 22}" width="840" height="168" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
  s += pawn(84, fy + 168, C.mustard, 0.8) + T(124, fy + 56, 'Christopher Sly, a drunken tinker, tricked into believing he is a lord', { size: 16, weight: 700, fill: C.olive });
  s += `<rect x="150" y="${fy + 74}" width="696" height="98" rx="10" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += T(498, fy + 114, 'The main story, performed for him as a play', { size: 18, weight: 700, anchor: 'middle' });
  s += T(498, fy + 144, 'invites readings of the whole action as performance', { size: 16, anchor: 'middle', fill: C.muted });
  add('05-structure-and-genre',
    svg(900, Math.round(fy + 22 + 168 + 24), 'Structure and genre', s),
    'A five-act curve rising from exposition through complication to a crisis, then falling action and resolution, with a marker showing where to locate a passage. Tragedy, comedy and history set expectations about endings. Parallel plots: the tavern and the court in Henry IV, Part 1; Bianca’s suitors and Katherina and Petruchio; the sons seeking to avenge fathers in Hamlet. The Shrew’s Induction frames the main story as a play performed for Christopher Sly.',
    'Place a passage in the arc, its parallel plots and, in the Shrew, its frame.',
    '## Structure and genre');
}

// 06 Making AO5 work, with the Katherina example
{
  const Y = 118;
  let s = '';
  const r1 = row(Y, [
    { kicker: 'SOURCE', title: 'Performance choices', body: 'How productions might stage a moment.' },
    { kicker: 'SOURCE', title: 'Critical approaches', body: 'Feminist, historicist or psychoanalytic, as ways of reading.' },
    { kicker: 'SOURCE', title: 'Audiences across time', body: 'A modern response against an early one.' },
  ], { gap: 14, card: { size: 16, tsize: 18, pad: 16 } });
  s += r1.s;
  const ay = Y + r1.h + 14;
  s += arrow(450, ay, 450, ay + 30, { w: 3.5 });
  const w = card(30, ay + 36, 840, { title: 'Weigh each reading against textual evidence, then judge', body: 'AO5 does not require a list of critics’ names.', fill: C.cream, edge: C.olive, align: 'middle', size: 17, tsize: 20 });
  s += w.s;
  const ky = ay + 36 + w.h + 28;
  s += T(30, ky + 6, 'Worked example: Katherina’s closing speech', { size: 20, weight: 700 });
  const r2 = row(ky + 22, [
    { kicker: 'PLAYED SINCERELY', title: 'Completes the “taming”', body: 'The ending celebrates order.', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'PLAYED WITH IRONY', title: 'Fluency as independence', body: 'As some modern productions stage it.', fill: '#f6e3d6', edge: C.rust, kfill: C.rust },
  ], { gap: 20, card: { size: 16, tsize: 19 } });
  s += r2.s;
  const ey = ky + 22 + r2.h + 36;
  const r3 = row(ey, [
    { title: 'Her voice has grown?', body: 'It is the longest speech she gives.' },
    { title: 'Or silenced?', body: 'Delivered in public, at Petruchio’s command, to win his wager.' },
  ], { gap: 20, card: { size: 16, tsize: 18, pad: 16 } });
  s += T(450, ey - 11, 'the text supports neither reading alone', { size: 15, weight: 700, anchor: 'middle', fill: C.muted });
  s += r3.s;
  const jy = ey + r3.h + 16;
  const j = card(30, jy, 840, { kicker: 'JUDGEMENT', title: 'The Induction tips the balance', body: 'Because the whole story is staged as a play for Sly, the speech reads as a performance of submission rather than a statement of belief.', fill: C.cream, edge: C.olive, kfill: C.olive, size: 17 });
  s += j.s;
  add('06-making-ao5-work',
    svg(900, Math.round(jy + j.h + 24), 'Making AO5 work', s),
    'Three sources of alternative readings, namely performance choices, critical approaches and audiences across time, lead to weighing each reading against the text and judging. Worked example: Katherina’s closing speech played sincerely completes the taming, played with irony shows independence. It is her longest speech, but delivered in public at Petruchio’s command; the Induction tips the judgement towards a performance of submission.',
    'Set out readings, test them against the text, then judge.',
    '## Making AO5 work');
}

// 07 The (a) essay: an arguable thesis
{
  const Y = 118;
  let s = '';
  const q = card(30, Y, 840, { kicker: 'QUESTION', title: '“How far does the play present Hal as a calculating politician?”', fill: C.tealLight, edge: C.tealDark, tsize: 19 });
  s += q.s;
  const y1 = Y + q.h + 18;
  const wk = card(90, y1, 780, { kicker: 'WEAK OPENING', title: 'Agrees, and lists examples', fill: C.panel, edge: C.rust, kfill: C.rust, tsize: 19 });
  s += wk.s + cross(52, y1 + wk.h / 2, 18);
  const y2 = y1 + wk.h + 14;
  const st = card(90, y2, 780, { kicker: 'STRONGER: A MEASURED POSITION', body: '“Hal’s early soliloquy invites us to see every tavern scene as calculation, but the warmth of his exchanges with Falstaff suggests a prince who enjoys the role he claims merely to be playing; the play presents calculation and pleasure as hard to separate.”', fill: C.cream, edge: C.tealDark, kfill: C.tealDark, size: 17, bfill: C.ink });
  s += st.s + tick(52, y2 + st.h / 2, 18);
  const y3 = y2 + st.h + 18;
  s += T(30, y3 + 14, 'What the stronger thesis does', { size: 18, weight: 700 });
  let x = 30; ['answers “How far”', 'prepares an AO5 debate', 'gives the essay a direction'].forEach((c) => { const k = chip(x, y3 + 30, c, { size: 17, fill: C.tealLight, edge: C.tealDark }); s += k.s; x += k.w + 12; });
  const y4 = y3 + 84;
  const r = row(y4, [
    { title: 'Three or four moments', body: 'From across the play, including the ending.' },
    { title: 'AO5 woven in', body: 'In two or three paragraphs, not saved for the conclusion.', fill: C.cream, edge: C.olive },
    { title: 'Brief quotation', body: 'Precise reference from memory.' },
  ], { gap: 14, card: { size: 16, tsize: 18, pad: 16 } });
  s += r.s;
  add('07-whole-play-essay',
    svg(900, Math.round(y4 + r.h + 24), 'The (a) essay: a thesis a reader could dispute', s),
    'For the question “How far does the play present Hal as a calculating politician?”, a weak opening agrees and lists examples, while a stronger thesis takes a measured position: Hal’s soliloquy suggests calculation, but his warmth with Falstaff suggests enjoyment, so the play presents calculation and pleasure as hard to separate. This answers “How far”, prepares an AO5 debate and gives direction.',
    'A measured, arguable thesis answers “How far” and sets up AO5.',
    '## The (a) essay');
}
