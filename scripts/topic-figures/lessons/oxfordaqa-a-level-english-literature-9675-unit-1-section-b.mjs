import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-a-level-english-literature-9675-unit-1-section-b';
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

// 01 The five plays on a timeline of first staging
{
  const Y = 110;
  let s = '';
  const x0 = 70, x1 = 830, y0 = 1880, y1 = 1990;
  const X = (yr) => x0 + ((yr - y0) * (x1 - x0)) / (y1 - y0);
  const ly = Y + 50;
  s += `<line x1="${x0 - 20}" y1="${ly}" x2="${x1 + 20}" y2="${ly}" stroke="${C.ink}" stroke-width="4"/>`;
  [1880, 1900, 1920, 1940, 1960, 1980].forEach((yr) => { s += `<line x1="${X(yr)}" y1="${ly - 8}" x2="${X(yr)}" y2="${ly + 8}" stroke="${C.ink}" stroke-width="2"/>` + T(X(yr), ly - 16, String(yr), { size: 15, anchor: 'middle', fill: C.muted }); });
  const plays = [
    [1891, 'Hedda Gabler', 'Henrik Ibsen', 'up', 0],
    [1947, 'A Streetcar Named Desire', 'Tennessee Williams', 'up', 0],
    [1949, 'Death of a Salesman', 'Arthur Miller', 'down', 0],
    [1953, 'Waiting for Godot', 'Samuel Beckett (in French)', 'up', 1],
    [1980, 'Translations', 'Brian Friel', 'down', 0],
  ];
  const w = 156, gap = 15, cy0 = ly + 90;
  plays.forEach(([yr, play, who], i) => {
    const x = X(yr), bx = 30 + i * (w + gap), cx = bx + w / 2;
    const P = wrap(play, w - 20, 16, 700), Wh = wrap(who, w - 20, 15);
    s += path(`M${x},${ly + 10} C${x},${ly + 50} ${cx},${ly + 40} ${cx},${cy0}`, { w: 2.5 });
    s += `<circle cx="${x}" cy="${ly}" r="10" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`;
    const h = 150;
    s += `<rect x="${bx}" y="${cy0}" width="${w}" height="${h}" rx="12" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2.5"/>`;
    s += P.map((l, k) => T(cx, cy0 + 28 + k * 21, l, { size: 16, weight: 700, anchor: 'middle', italic: true })).join('');
    s += Wh.map((l, k) => T(cx, cy0 + 28 + P.length * 21 + 4 + k * 19, l, { size: 15, anchor: 'middle', fill: C.muted })).join('');
    s += T(cx, cy0 + h - 14, String(yr), { size: 18, weight: 700, anchor: 'middle', fill: C.olive });
  });
  const n = note(ly + 262, 'You study one. The list is from Version 5.3; a revised 9675 for teaching from 2027 has a refreshed list, so confirm your play with your teacher.');
  s += n.s;
  add('01-section-b-plays',
    svg(900, ly + 262 + n.h + 24, 'The five Section B plays', s, 'By date of first staging'),
    'A timeline from 1880 to 1990 marks the first staging of the five plays: Hedda Gabler by Ibsen in 1891, A Streetcar Named Desire by Williams in 1947, Death of a Salesman by Miller in 1949, Waiting for Godot by Beckett in 1953 in French, and Translations by Friel in 1980.',
    'Five later tragedies first staged between 1891 and 1980; you study one.',
    '## The five Section B plays');
}

// 02 What later tragedy changes: four shifts
{
  const Y = 120;
  let s = '';
  s += T(150, Y, 'Older tragedy', { size: 18, weight: 700, anchor: 'middle', fill: C.muted }) + T(600, Y, 'Later tragedy', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  const sh = [
    ['Public figures', 'Ordinary people', 'Willy a travelling salesman; Hedda in a suburban marriage; Blanche a schoolteacher. Miller: “Tragedy and the Common Man” (1949).'],
    ['Fate or the gods', 'Society and psychology', 'Social pressure, money, class, gender and the mind: Hedda trapped by marriage and Brack; Willy’s belief in being well liked.'],
    ['Catastrophe', 'Absence', 'Godot never comes; the second act echoes the first: the missing catastrophe is the point.'],
    ['The individual', 'The community', 'Translations: suffering extends to a language and a community; the protagonist may be collective.'],
  ];
  let y = Y + 16;
  sh.forEach(([a, b, ex]) => {
    const L = wrap(ex, 560, 16);
    const h = Math.max(96, 54 + L.length * 21 + 14);
    s += `<rect x="30" y="${y}" width="240" height="${h}" rx="12" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2.5"/>` + T(150, y + h / 2 + 7, a, { size: 18, weight: 700, anchor: 'middle', fill: C.muted });
    s += arrow(276, y + h / 2, 310, y + h / 2, { w: 3.5, color: C.tealDark, marker: 'ahT' });
    s += panel(316, y, 554, h, C.tealLight, C.tealDark) + T(336, y + 34, b, { size: 19, weight: 700, fill: C.tealDark });
    s += L.map((l, k) => T(336, y + 60 + k * 21, l, { size: 16 })).join('');
    y += h + 12;
  });
  const n = note(y + 4, 'The specification: every set text has “a tragic hero or heroine who is flawed in some way, who suffers and causes suffering to others”. The later plays test how far that model still holds.');
  s += n.s;
  add('02-four-shifts',
    svg(900, y + 4 + n.h + 24, 'What “later” tragedy changes', s),
    'Four shifts from older to later tragedy, each with examples: from public figures to ordinary people, from fate to society and psychology, from catastrophe to absence in Waiting for Godot, and from the individual to the community in Translations.',
    'Later tragedies move the source of suffering from fate and the great to society, the mind and ordinary lives.',
    '## What "later" tragedy changes');
}

// 03 Aspects by play
{
  const Y = 110;
  const tb = table(Y, ['Play', 'Opponent', 'Setting', 'Structure'], [
    ['Death of a Salesman', '—', 'The Brooklyn house hemmed in by apartment blocks', 'Memory scenes'],
    ['A Streetcar Named Desire', 'Stanley against Blanche', 'The cramped New Orleans flat in Elysian Fields', 'Eleven scenes'],
    ['Hedda Gabler', 'Brack’s hold over Hedda', '—', 'Four acts compressed into a short span of time'],
    ['Waiting for Godot', '—', 'The country road and tree', 'Two parallel acts'],
    ['Translations', 'Captain Lancey and the military survey', 'A Donegal hedge school, 1833', '—'],
  ], [180, 200, 270, 190], { size: 16 });
  const n = note(Y + tb.h + 18, 'Choose the aspects your play makes most interesting. Dashes mark aspects this guide does not name for that play.');
  add('03-aspects-by-play',
    svg(900, Y + tb.h + 18 + n.h + 24, 'Aspects to build your essay around', tb.s + n.s),
    'A table gives the opponent, setting and structure named for each play: Stanley against Blanche, Brack over Hedda and Captain Lancey in Translations; the Brooklyn house, the Elysian Fields flat and Godot’s country road and tree; Miller’s memory scenes, Williams’s eleven scenes, Ibsen’s four compressed acts and Beckett’s two parallel acts.',
    'Pick the aspects your own play makes most interesting.',
    '## Aspects to build your essay around');
}

// 04 Staging is evidence
{
  const Y = 110;
  let s = '';
  const items = [
    ['Miller', 'Walls crossed in memory scenes'],
    ['Williams', 'The Varsouviana polka; the paper lantern over the bare bulb'],
    ['Ibsen', 'General Gabler’s portrait and pistols'],
    ['Beckett', 'A few leaves on the tree in Act 2'],
    ['Friel', 'A love scene in two languages, both in English'],
  ];
  const w = 156, gap = 15, ih = 120;
  items.forEach(([who, txt], i) => {
    const x = 30 + i * (w + gap);
    const L = wrap(txt, w - 24, 15);
    const h = ih + 50 + L.length * 20 + 10;
    s += panel(x, Y, w, 262);
    s += `<rect x="${x + 10}" y="${Y + 10}" width="${w - 20}" height="${ih}" rx="8" fill="${C.tealLight}"/>`;
    s += `<rect x="${x + 10}" y="${Y + 10 + ih - 18}" width="${w - 20}" height="18" fill="${C.rock}"/>`;
    const cx = x + w / 2, gy = Y + 10 + ih - 18;
    if (i === 0) s += `<line x1="${cx - 40}" y1="${Y + 30}" x2="${cx - 40}" y2="${gy}" stroke="${C.ink}" stroke-width="3" stroke-dasharray="7 6"/><line x1="${cx + 40}" y1="${Y + 30}" x2="${cx + 40}" y2="${gy}" stroke="${C.ink}" stroke-width="3" stroke-dasharray="7 6"/>` + pawn(cx + 40, gy, C.mustard, 0.7) + arrow(cx + 4, gy - 30, cx - 30, gy - 30, { w: 2.5 });
    if (i === 1) s += `<line x1="${cx}" y1="${Y + 10}" x2="${cx}" y2="${Y + 34}" stroke="${C.ink}" stroke-width="2"/><path d="M${cx - 26},${Y + 34} L${cx + 26},${Y + 34} L${cx + 18},${Y + 74} L${cx - 18},${Y + 74} Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/><circle cx="${cx}" cy="${Y + 54}" r="8" fill="${C.mustard}"/>` + T(cx + 36, Y + 100, '♪', { size: 22, weight: 700, fill: C.olive }) + T(cx - 44, Y + 94, '♪', { size: 18, weight: 700, fill: C.olive });
    if (i === 2) s += `<rect x="${cx - 30}" y="${Y + 24}" width="60" height="70" rx="4" fill="${C.cream}" stroke="${C.ink}" stroke-width="3"/><circle cx="${cx}" cy="${Y + 50}" r="11" fill="${C.rock}" stroke="${C.ink}" stroke-width="2"/><path d="M${cx - 16},${Y + 88} q16,-24 32,0" fill="${C.rock}" stroke="${C.ink}" stroke-width="2"/>` + path(`M${cx - 44},${gy - 8} l30,0 l0,-8 l-26,0 l-4,10`, { w: 2.5, fill: C.ink }) + path(`M${cx + 14},${gy - 8} l30,0 l0,-8 l-26,0 l-4,10`, { w: 2.5, fill: C.ink });
    if (i === 3) s += path(`M${cx},${gy} L${cx},${Y + 50} M${cx},${Y + 70} L${cx - 22},${Y + 44} M${cx},${Y + 62} L${cx + 24},${Y + 36}`, { w: 4, stroke: C.rockDark }) + `<ellipse cx="${cx - 24}" cy="${Y + 40}" rx="7" ry="4" fill="${C.grass}"/><ellipse cx="${cx + 27}" cy="${Y + 32}" rx="7" ry="4" fill="${C.grass}"/><ellipse cx="${cx + 4}" cy="${Y + 48}" rx="6" ry="4" fill="${C.grass}"/>`;
    if (i === 4) s += pawn(cx - 34, gy, C.teal, 0.7) + pawn(cx + 34, gy, C.mustard, 0.7) + `<rect x="${cx - 52}" y="${Y + 20}" width="40" height="24" rx="8" fill="${C.panel}" stroke="${C.ink}" stroke-width="2"/><rect x="${cx + 12}" y="${Y + 20}" width="40" height="24" rx="8" fill="${C.panel}" stroke="${C.ink}" stroke-width="2"/>` + T(cx - 32, Y + 38, 'A', { size: 15, weight: 700, anchor: 'middle' }) + T(cx + 32, Y + 38, 'B', { size: 15, weight: 700, anchor: 'middle' });
    s += T(cx, Y + ih + 42, who, { size: 18, weight: 700, anchor: 'middle' });
    s += L.map((l, k) => T(cx, Y + ih + 68 + k * 20, l, { size: 15, anchor: 'middle', fill: C.muted })).join('');
  });
  const n = note(Y + 280, 'Long stage directions are authorial method (AO2): treat them as deliberately chosen effects on an audience, not as background.');
  s += n.s;
  add('04-staging-is-evidence',
    svg(900, Y + 280 + n.h + 24, 'Staging is evidence', s),
    'Five small stage sketches: Miller’s walls crossed in memory scenes, Williams’s Varsouviana polka and paper lantern over a bare bulb, Ibsen’s portrait of General Gabler and pistols, Beckett’s tree with a few leaves in Act 2, and Friel’s love scene in two languages, both performed in English.',
    'Stage directions in these plays are method, and earn AO2 credit.',
    '## Staging is evidence');
}

// 05 Planning a Section B essay
{
  const Y = 110;
  const st = steps(Y, [
    { title: 'Decide your answer', body: 'One sentence, before you write.' },
    { title: 'Choose three or four aspects', body: 'That test the view, including at least one that complicates it.' },
    { title: 'Select evidence from across the play', body: 'The opening, a turning point and the ending at least: short quotations or precise references.' },
    { title: 'Place one alternative reading', body: 'Where it fits, then weigh it.' },
    { title: 'End on the audience', body: 'What kind of pity, fear or understanding the play leaves.' },
  ], { size: 17, tsize: 20 });
  const n = note(Y + st.h + 18, 'Whether the question offers a view to debate or asks about the significance of an aspect, the plan is the same. Allow about an hour.');
  add('05-planning',
    svg(900, Y + st.h + 18 + n.h + 24, 'Planning a Section B essay', st.s + n.s),
    'Five numbered steps: decide your answer in one sentence, choose three or four aspects including one that complicates the view, select evidence from the opening, a turning point and the ending, place and weigh one alternative reading, and end on the audience.',
    'One answer, tested by several aspects and evidence from across the play.',
    '## Planning a Section B essay');
}

// 06 Worked example: weighing the view
{
  const Y = 110;
  const b = balance(Y, { tag: 'victim', title: 'Victim of his society', items: ['Fired by Howard, son of the boss Willy worked for', 'The hollow promise of the salesman’s dream'] },
    { tag: 'tragic hero', title: 'Tragic hero with a flaw', items: ['Pride and self-deception', 'Refuses Charley’s job offer', 'Lies to the family'] },
    { tilt: 0, verdictTitle: 'Judgement: partly agree', verdict: 'Willy is both: his flaw is shaped by the society he believes in. Test it with recognition (does he ever see the truth Biff tells him?) and with the memory scenes, the past invading the present.' });
  add('06-worked-example',
    svg(900, Y + b.h + 24, 'Weighing the view', b.s, '“Willy Loman is a victim of his society rather than a tragic hero.”'),
    'A level balance weighs two sides of the view on Death of a Salesman. Victim of society: fired by Howard, and the hollow salesman’s dream. Tragic hero: pride and self-deception, refusing Charley’s job offer and lying to his family. The judgement is that Willy is both, with recognition and the memory scenes as further tests.',
    'The plan partly agrees: Willy’s flaw is shaped by the society he believes in.',
    '## Worked example');
}
