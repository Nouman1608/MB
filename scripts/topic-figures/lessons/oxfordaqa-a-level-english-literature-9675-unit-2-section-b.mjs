import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-a-level-english-literature-9675-unit-2-section-b';
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

// 01 The four selections
{
  const Y = 122;
  let s = '';
  const poets = [
    ['William Wordsworth', 8, ['Nutting', 'Michael', 'Composed Upon Westminster Bridge', 'Yarrow Unvisited'], C.tealLight, C.tealDark],
    ['Robert Frost', 12, ['Mending Wall', 'Birches', 'A Brook in the City', 'Desert Places'], C.cream, C.olive],
    ['Thomas Hardy', 15, ['The Darkling Thrush', 'Channel Firing', 'Beeny Cliff', 'At Castle Boterel'], C.tealLight, C.tealDark],
    ['Seamus Heaney', 15, ['Anahorish', 'The Tollund Man', 'Act of Union', 'The Toome Road'], C.cream, C.olive],
  ];
  const w = 411, h = 220;
  poets.forEach(([who, n, ps, f, e], i) => {
    const x = 30 + (i % 2) * (w + 18), y = Y + Math.floor(i / 2) * (h + 16);
    s += panel(x, y, w, h, f, e) + T(x + 22, y + 36, who, { size: 20, weight: 700 }) + T(x + w - 22, y + 36, `${n} poems`, { size: 17, weight: 700, anchor: 'end', fill: e });
    for (let k = 0; k < n; k++) s += `<circle cx="${x + 32 + k * 24}" cy="${y + 62}" r="8" fill="${e === C.olive ? C.mustard : C.teal}" stroke="${C.ink}" stroke-width="1.8"/>`;
    s += T(x + 22, y + 98, 'including:', { size: 15, fill: C.muted });
    ps.forEach((p, k) => { s += T(x + 22, y + 124 + k * 23, '“' + p + '”', { size: 16, italic: true }); });
  });
  const yn = Y + 2 * (h + 16) + 2;
  const n = note(yn, 'You study one poet’s selection (Version 5.3). Learn the full list for your poet from the specification; a revised 9675 for teaching from 2027 has a refreshed list.');
  add('01-four-selections',
    svg(900, yn + n.h + 24, 'The four poetry selections', s + n.s, 'One essay, 25 marks, open book'),
    'Four cards show the poets and the size of each selection: Wordsworth 8 poems, Frost 12, Hardy 15 and Heaney 15, each drawn as a row of dots, with four of the named poems listed for each poet.',
    'One poet’s selection, of 8 to 15 poems, is your set text.',
    '## The four selections');
}

// 02 Five ways poems make place
{
  const Y = 110;
  const tb = table(Y, ['Method', 'Example from the selections'], [
    ['Naming', 'Heaney’s “Anahorish” builds a poem from an Irish place-name; Hardy’s titles fix grief to Cornish places.'],
    ['The speaker’s position', '“Tintern Abbey”: above the Wye after five years away. “Composed Upon Westminster Bridge”: one point, at dawn.'],
    ['Time layered on place', 'Hardy’s poems of 1912–13 return to places of courtship: two times at once. Watch verb tense.'],
    ['Nature and its despoliation', 'Frost’s brook buried under city building; Hardy’s naval gunnery against a quiet churchyard.'],
    ['Form', 'Tight rhyme can contain a wild landscape; a loose form can mirror a moving mind; line breaks trace a path.'],
  ], [250, 590], { size: 17, zebra: true });
  const n = note(Y + tb.h + 18, 'A novel describes a place over pages; a poem does it in a few lines, so every choice is concentrated.');
  add('02-how-poems-make-place',
    svg(900, Y + tb.h + 18 + n.h + 24, 'Five ways poems make place', tb.s + n.s),
    'A table of five methods with examples: naming (Anahorish; Hardy’s Cornish titles), the speaker’s position (Tintern Abbey; Composed Upon Westminster Bridge), time layered on place (Hardy’s 1912–13 poems), nature and its despoliation (A Brook in the City; Channel Firing), and form.',
    'Names, position, time, nature and form concentrate a place into a few lines.',
    '## How poems make place');
}

// 03 Place as more than landscape
{
  const Y = 110;
  const h = hub(Y, 'Place', [
    { title: 'Home and homeland', body: 'The farm in “Michael”, lost when Luke leaves for the city; Heaney’s rural Derry childhood.' },
    { title: 'Relationships', body: 'Neighbours and the wall in “Mending Wall”; Hardy’s places of courtship.' },
    { title: 'Political space', body: '“The Toome Road”: armoured vehicles in his home district; “Act of Union”: a relationship as Britain and Ireland.' },
    { title: 'History in the ground', body: 'Bog poems link Iron Age Jutland to violence in Northern Ireland; “Requiem for the Croppies” on 1798.' },
  ], { cardW: 320, r: 70, csize: 20 });
  add('03-more-than-landscape',
    svg(900, Y + h.h + 24, 'Place as more than landscape', h.s),
    'A hub labelled place links to four social and political angles with examples: home and homeland (Michael; Heaney’s Derry childhood), relationships (Mending Wall; Hardy’s places of courtship), political space (The Toome Road; Act of Union) and history in the ground (the bog poems; Requiem for the Croppies).',
    'In poetry, place is often social, personal and political as well as physical.',
    '## Place as more than landscape');
}

// 04 Writing about a selection
{
  const Y = 120;
  let s = '';
  s += page(80, Y, 200, 240, { fill: C.cream, lines: 14 }) + T(180, Y + 270, 'Poem 1: in depth', { size: 18, weight: 700, anchor: 'middle' });
  s += page(350, Y, 200, 240, { fill: C.tealLight, lines: 14 }) + T(450, Y + 270, 'Poem 2: in depth', { size: 18, weight: 700, anchor: 'middle' });
  s += page(650, Y + 90, 110, 150, { fill: C.panel, lines: 8 }) + T(705, Y + 270, 'Poem 3: briefly', { size: 18, weight: 700, anchor: 'middle' });
  s += `<line x1="284" y1="${Y + 120}" x2="346" y2="${Y + 120}" stroke="${C.ink}" stroke-width="3.5" marker-start="url(#ah)" marker-end="url(#ah)"/>`;
  s += `<line x1="554" y1="${Y + 165}" x2="646" y2="${Y + 165}" stroke="${C.ink}" stroke-width="2.5" stroke-dasharray="7 6" marker-end="url(#ah)"/>`;
  s += T(450, Y + 300, 'A sensible default: choose poems that show different aspects of the question', { size: 16, anchor: 'middle', fill: C.muted });
  const r = row(Y + 322, [
    { kicker: 'LINK', title: 'By method or by idea', body: '“both use place-names”; “both present home as lost”' },
    { kicker: 'THEN', kfill: C.olive, title: 'Show the difference within the similarity', body: 'not two summaries side by side', fill: C.cream, edge: C.olive },
  ], { arrows: true, card: { tsize: 18, size: 16 } });
  s += r.s;
  const n = note(Y + 322 + r.h + 16, 'Read the question first for any instruction about how many poems to discuss.');
  s += n.s;
  add('04-writing-about-a-selection',
    svg(900, Y + 322 + r.h + 16 + n.h + 24, 'Writing about a selection', s),
    'Two full poem sheets are linked by a double arrow for in-depth analysis, with a smaller third sheet for brief reference. Below, comparisons link poems by method or idea, then show the difference within the similarity.',
    'Two poems in depth and a third briefly, linked with purpose.',
    '## Writing about a selection');
}

// 05 Worked example: The Ford
{
  const Y = 110;
  let s = '';
  const lines = [
    ['We crossed here, the summer you were ten,', 'a'],
    ['your boots tied round your neck, the water loud.', 'b'],
    ['Now there’s a bridge. I drive across it, then', 'a'],
    ['pull in and walk back down. The river’s proud', 'b'],
    ['and narrow, quieter than then. A plaque', 'c'],
    ['explains the bridge. Nobody explains the ford.', '?'],
    ['I stand where the stones were. I don’t go back.', 'c'],
  ];
  s += panel(30, Y, 520, 7 * 32 + 70, C.panel) + T(52, Y + 36, 'The Ford (original poem)', { size: 18, weight: 700 });
  lines.forEach(([l, r], i) => {
    const y = Y + 72 + i * 32;
    s += T(52, y, l, { size: 16, italic: true });
    const miss = r === '?';
    s += `<circle cx="522" cy="${y - 5}" r="13" fill="${miss ? C.panel : r === 'a' ? C.teal : r === 'b' ? C.cream : C.tealLight}" stroke="${miss ? C.rust : C.ink}" stroke-width="2.5"/>` + T(522, y + 1, miss ? '✕' : r, { size: 15, weight: 700, anchor: 'middle', fill: miss ? C.rust : C.ink });
  });
  s += card(570, Y, 300, { title: 'The form marks the loss', body: 'The rhyme scheme holds firm until “ford” fails to find a rhyme.', fill: C.cream, edge: C.olive, tsize: 18, size: 16 }).s;
  s += card(570, Y + 150, 300, { title: '“I don’t go back”', body: 'Final monosyllables turn a statement into a refusal.', fill: C.tealLight, edge: C.tealDark, tsize: 18, size: 16 }).s;
  const y2 = Y + 7 * 32 + 96;
  const tb = table(y2, ['', 'Then: the ford', 'Now: the bridge'], [
    ['Crossing', 'Shared, the summer you were ten', 'Solitary: “I drive across it”'],
    ['The river', 'The water loud', '“quieter than then”'],
    ['History', 'Nobody explains it: private memory', 'A plaque explains it: public history'],
  ], [160, 340, 340], { size: 16 });
  s += tb.s;
  add('05-the-ford',
    svg(900, y2 + tb.h + 24, 'Reading place and time in one poem', s),
    'The seven lines of the original poem The Ford are shown with rhyme letters: a, b, a, b, c, then an unrhymed ford, then c. Notes say the form marks the loss and the final monosyllables make a refusal. A table contrasts then and now: a shared ford with loud water and no explanation against a solitary bridge, a quieter river and an official plaque.',
    'Two crossings of one river set private memory against public history.',
    '## Worked example on an original poem');
}

// 06 A plan using Hardy's selection
{
  const Y = 120;
  const b = balance(Y, { tag: 'supports', title: 'Absence matters', items: ['“At Castle Boterel”: the road valued because it once held them both; the phantom shrinks as he drives away', '“Beeny Cliff”: vivid sea and cliff, then her absence; the landscape survives the person'] },
    { tag: 'tests it', title: 'Counter-poem', items: ['“Channel Firing”: the churchyard matters because of the dead who are present and the guns of 1914 that wake them'] },
    { tilt: -0.6, verdictTitle: 'Conclusion', verdict: 'Largely true of the 1912–13 poems, less so where places are shaped by history, war or chance. Hardy’s places matter most when they outlast people.' });
  add('06-hardy-plan',
    svg(900, Y + b.h + 24, 'Testing a view across a selection', b.s, '“Places matter because of the people who are absent from them.”'),
    'A balance tips towards the view. Supporting it: At Castle Boterel, where the road is valued for once holding the couple, and Beeny Cliff, where the landscape outlives the absent person. Testing it: Channel Firing, where the dead are present. The conclusion says the view is largely true of the 1912–13 poems and that Hardy’s places matter most when they outlast people.',
    'Give each poem a distinct role, including one that tests the view.',
    '## A plan using a set selection');
}
