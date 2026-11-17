import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-english-literature-9695-section-b-poetry';
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
const beads = (x, y, n, o = {}) => { let s = ''; for (let i = 0; i < n; i++) { const big = o.pattern ? o.pattern[i] === 1 : i % 2 === 1; s += `<circle cx="${x + i * (o.gap ?? 24)}" cy="${y}" r="${big ? 8 : 5}" fill="${big ? C.tealDark : C.teal}" stroke="${C.ink}" stroke-width="2"/>`; } return s; };

// 01 Section B at a glance
{
  const fig = compose('Paper 1 Section B at a glance', [
    (y) => { const b = markBar(y + 26, [{ label: 'Section A: Drama', sub: '25 marks', value: 25, fill: C.tealLight }, { label: 'Section B: Poetry', sub: '25 marks · one essay', value: 25, fill: C.mustard }]); return { s: T(30, y + 14, 'Paper 1 · 50 marks', { size: 17, weight: 700, fill: C.muted }) + b.s, h: b.h + 26 }; },
    (y) => {
      const o = { minH: 170, size: 17, bullets: true };
      const L = card(30, y, 380, { kicker: 'QUESTION (a)', title: 'Essay across the poems', body: ['A theme, attitude or method.', 'Usually you choose which poems.'], ...o });
      const R = card(490, y, 380, { kicker: 'QUESTION (b)', title: 'One printed poem', body: ['A poem from the selection.', 'Analyse it closely.'], ...o, fill: C.cream, edge: C.olive, kfill: C.olive });
      const h = Math.max(L.h, R.h);
      return { s: L.s + R.s + `<circle cx="450" cy="${y + h / 2}" r="30" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + T(450, y + h / 2 + 7, 'or', { size: 20, weight: 700, anchor: 'middle' }), h };
    },
    (y) => {
      let s = T(30, y + 18, 'Assessed on', { size: 19, weight: 700 });
      let x = 160; ['AO1', 'AO2', 'AO3', 'AO4'].forEach((a) => { const c = chip(x, y - 2, a, { size: 18, fill: a === 'AO2' ? C.cream : C.tealLight, edge: a === 'AO2' ? C.olive : C.tealDark }); s += c.s; x += c.w + 10; });
      s += T(x + 10, y + 18, 'AO2: choices of language, form and structure', { size: 17, fill: C.muted });
      return { s, h: 30 };
    },
    (y) => note(y + 6, 'Texts are not allowed in the exam room, so for (a) you need short quotations from several poems in memory.'),
  ]);
  add('01-section-b-at-a-glance', fig,
    'Paper 1 is worth 50 marks, split between Section A Drama and Section B Poetry at 25 marks each. In Section B you choose an (a) essay on a theme, attitude or method across poems you usually choose, or a (b) question on one printed poem analysed closely. It is assessed on AO1 to AO4, and texts are not allowed in the exam room.',
    'One poetry essay worth 25 marks: across the poems (a) or on one printed poem (b).',
    '## What the section asks of you');
}

// 02 Set texts
{
  const Y = 120;
  const v = venn(Y, '2026 examination', '2027 examination', [
    { head: '2026 only', items: [['Maya Angelou', ['And Still I Rise']], ['Blake', ['Songs of Innocence', 'and of Experience']]] },
    { head: 'Both years', items: [['Plath', ['Ariel']], ['', ['Songs of Ourselves,', 'Volume 2']]] },
    { head: '2027 only', items: [['Zaffar Kunial', ['England’s Green']], ['Christina Rossetti', ['poems']]] },
  ], { h: 270, itemGap: 30 });
  const n = note(Y + v.h + 24, 'The syllabus names the individual poems in each selection: learn those poems, not the whole book. Lists change by year, so check yours.');
  add('02-set-texts-2026-2027',
    svg(900, Math.round(Y + v.h + 24 + n.h + 24), 'Section B poetry texts: 2026 and 2027', v.s + n.s),
    'Two overlapping lists of poetry set texts. Plath’s Ariel and Songs of Ourselves Volume 2 are set in both 2026 and 2027. Maya Angelou’s And Still I Rise and Blake’s Songs of Innocence and of Experience are 2026 only; Zaffar Kunial’s England’s Green and Christina Rossetti’s poems are 2027 only.',
    'Ariel and Songs of Ourselves Volume 2 carry over; learn the named poems.',
    '## What the section asks of you');
}

// 03 Voice and address
{
  const Y = 120;
  let s = '';
  s += panel(30, Y, 840, 246);
  s += pawn(130, Y + 170, C.mustard, 1) + T(130, Y + 204, 'the speaker', { size: 16, weight: 700, anchor: 'middle' });
  s += T(130, Y + 222, '(a persona)', { size: 15, anchor: 'middle', fill: C.muted });
  s += speech(170, Y + 38, 120, 40) + T(230, Y + 64, 'I …', { size: 18, weight: 700, anchor: 'middle' });
  s += arrow(300, Y + 120, 430, Y + 120, { w: 3.5 });
  s += pawn(480, Y + 170, C.teal, 1) + T(480, Y + 204, 'to whom?', { size: 16, weight: 700, anchor: 'middle' });
  s += `<rect x="580" y="${Y + 24}" width="270" height="196" rx="10" fill="${C.tealLight}"/>` + T(715, Y + 56, 'Start every poem with', { size: 16, anchor: 'middle', fill: C.muted });
  ['who is speaking?', 'to whom?', 'in what situation?'].forEach((q, i) => { s += badge(612, Y + 92 + i * 42, 13, String(i + 1), C.mustard) + T(636, Y + 99 + i * 42, q, { size: 18, weight: 700, fill: C.tealDark }); });
  const y2 = Y + 268;
  s += T(30, y2 + 14, 'Watch for shifts in address', { size: 20, weight: 700 });
  const r = row(y2 + 30, [
    { title: 'from “I” to “you”', body: 'The speaker turns to address someone directly.' },
    { title: 'from describing to speaking to', body: 'Someone described becomes someone spoken to.' },
  ], { gap: 60, card: { size: 16, tsize: 19 } });
  s += r.s;
  const n = note(y2 + 30 + r.h + 16, 'A shift in address changes the relationship between speaker and reader. The speaker is a constructed voice even when the poem sounds autobiographical.');
  s += n.s;
  add('03-voice-and-address',
    svg(900, Math.round(y2 + 30 + r.h + 16 + n.h + 24), 'Voice and address', s),
    'A speaker, labelled as a persona, addresses a listener, with three starting questions: who is speaking, to whom, and in what situation? Below, two kinds of shift in address, from “I” to “you” and from describing someone to speaking to them, which change the relationship between speaker and reader.',
    'Start every poem with who speaks, to whom, and in what situation.',
    '## The key idea: form is part of the meaning');
}

// 04 Sound, rhythm and metre
{
  const Y = 116;
  let s = '';
  const rows = [
    ['Iambic', 'Unstressed, stressed: close to natural speech. Iambic pentameter has five such feet in a line.', (x, y) => beads(x - 4, y, 10, { gap: 22 })],
    ['Trochaic or stressed opening', 'Gives a line force, urgency or a chant-like quality.', (x, y) => beads(x, y, 8, { pattern: [1, 0, 1, 0, 1, 0, 1, 0] })],
    ['Caesura', 'A pause within a line controls pace and emphasis.', (x, y) => `<line x1="${x - 6}" y1="${y}" x2="${x + 80}" y2="${y}" stroke="${C.ink}" stroke-width="6" stroke-linecap="round" opacity="0.5"/><text x="${x + 98}" y="${y + 9}" font-size="26" font-weight="700" fill="${C.rust}">‖</text><line x1="${x + 124}" y1="${y}" x2="${x + 210}" y2="${y}" stroke="${C.ink}" stroke-width="6" stroke-linecap="round" opacity="0.5"/>`],
    ['Enjambment', 'A sentence runs over a line break. The word at the end of a line, or just after a break, gains weight.', (x, y) => `<line x1="${x - 6}" y1="${y - 16}" x2="${x + 180}" y2="${y - 16}" stroke="${C.ink}" stroke-width="6" stroke-linecap="round" opacity="0.5"/><circle cx="${x + 196}" cy="${y - 16}" r="8" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` + path(`M${x + 200},${y - 6} C${x + 170},${y + 8} ${x + 30},${y - 2} ${x},${y + 10}`, { stroke: C.tealDark, w: 2.5, extra: 'stroke-dasharray="5 4" marker-end="url(#ahT)"' }) + `<line x1="${x + 6}" y1="${y + 20}" x2="${x + 140}" y2="${y + 20}" stroke="${C.ink}" stroke-width="6" stroke-linecap="round" opacity="0.5"/>`],
    ['Rhyme', 'Binds ideas or gives closure; half-rhyme or broken rhyme can suggest something incomplete.', (x, y) => [0, 1].map((i) => `<line x1="${x - 6}" y1="${y - 12 + i * 24}" x2="${x + 170}" y2="${y - 12 + i * 24}" stroke="${C.ink}" stroke-width="6" stroke-linecap="round" opacity="0.45"/><circle cx="${x + 190}" cy="${y - 12 + i * 24}" r="10" fill="${i ? C.panel : C.mustard}" stroke="${C.ink}" stroke-width="2" ${i ? 'stroke-dasharray="4 3"' : ''}/>`).join('')],
  ];
  let yy = Y;
  rows.forEach(([ti, body, icon], i) => {
    const pb = para(316, yy + 66, body, 530, { size: 17, fill: C.muted }), rh = Math.max(104, 66 + pb.h + 10), y = yy;
    s += panel(30, y, 840, rh) + `<rect x="42" y="${y + 10}" width="250" height="${rh - 20}" rx="10" fill="${i % 2 ? C.cream : C.tealLight}"/>`;
    s += icon(66, y + rh / 2);
    s += T(316, y + 38, ti, { size: 20, weight: 700 }) + pb.s;
    yy += rh + 10;
  });
  const n = note(yy + 6, 'You do not need to scan every line: recognise a regular metre and, more importantly, notice when it is disturbed.');
  s += n.s;
  add('04-sound-rhythm-metre',
    svg(900, Math.round(yy + 6 + n.h + 24), 'Sound, rhythm and metre', s),
    'Five rows with small diagrams. Iambic rhythm alternates unstressed and stressed beats, five feet making a pentameter. A trochaic or stressed opening gives force or a chant-like quality. A caesura is a pause within a line. Enjambment runs a sentence over a line break, giving weight to the word at the break. Rhyme binds or closes, while half-rhyme suggests something incomplete.',
    'Notice where the pattern is disturbed, and what that does to pace and emphasis.',
    '## The key idea: form is part of the meaning');
}

// 05 Forms: convention and departure
{
  const Y = 116;
  const rows = [
    ['Sonnet', '14 lines; a turn (volta) in argument', 'A delayed or missing turn: an argument that will not resolve'],
    ['Ballad', 'Quatrains, regular rhyme, narrative, refrain', 'Dark content in a song-like form: unsettling innocence'],
    ['Dramatic monologue', 'One speaker addressing a silent listener', 'The speaker reveals more than they intend'],
    ['Free verse', 'No fixed metre or rhyme', 'Line breaks carry the shaping work'],
    ['Villanelle', 'Two repeated refrains, tight rhyme', 'Obsession, or a feeling that keeps returning'],
  ];
  const tb = table(Y, ['Form', 'Convention', 'What a departure can suggest'], rows, [200, 300, 340], { size: 17 });
  const n = note(Y + tb.h + 18, 'Structure is also the movement of thought: where does the poem turn, and how does its ending reframe its opening?');
  add('05-forms-convention-departure',
    svg(900, Math.round(Y + tb.h + 18 + n.h + 24), 'Know the convention, then read the departure', tb.s + n.s),
    'A table of five forms. Sonnet: 14 lines with a turn; a delayed or missing turn suggests an argument that will not resolve. Ballad: quatrains, rhyme, narrative and refrain; dark content in a song-like form unsettles. Dramatic monologue: one speaker to a silent listener, revealing more than intended. Free verse: no fixed metre, so line breaks shape it. Villanelle: two refrains and tight rhyme, suggesting obsession.',
    'Say how a poem uses or departs from its form’s convention.',
    '## The key idea: form is part of the meaning');
}

// 06 Annotated model stanza
{
  const Y = 118;
  let s = '';
  const L = [
    ['The house is sold. They’ve taken down the gate.', 1],
    ['I walk the hedge-line where the garden was', 0],
    ['and count the posts, as if the count could wait', 2],
    ['for one more summer, one more hour. It does.', 3],
  ];
  const ph = 46 + 4 * 42 + 10;
  s += panel(30, Y, 840, ph, C.panel, C.ink) + T(50, Y + 30, 'Original stanza, written for the guide', { size: 15, weight: 700, fill: C.muted });
  const lx = 100;
  const sp = (str, k) => k === 'o' ? `<tspan fill="${C.olive}" font-weight="700">${X(str)}</tspan>` : k === 't' ? `<tspan fill="${C.tealDark}" font-weight="700">${X(str)}</tspan>` : k === 'r' ? `<tspan fill="${C.rust}" font-weight="700">${X(str)}</tspan>` : k === 'c' ? `<tspan fill="${C.olive}" font-weight="600">${X(str)}</tspan>` : X(str);
  const LS = [
    [['The house is sold. They’ve taken down the ', 'c'], ['gate', 'o'], ['.', 'c']],
    [['I walk the hedge-line where the garden was', '']],
    [['and count the posts, as if the count ', ''], ['could wait', 't']],
    [['for one more summer', 't'], [', one more hour. ', ''], ['It does.', 'r']],
  ];
  LS.forEach((segs, i) => { s += `<text x="${lx}" y="${Y + 72 + i * 42}" font-size="20" fill="${C.ink}" xml:space="preserve">${segs.map(([t1, k]) => sp(t1, k)).join('')}</text>`; });
  // the rhyme word "wait" sits inside "could wait"; mark it with a separate badge column
  const bx = 820;
  s += `<line x1="${bx - 40}" y1="${Y + 46}" x2="${bx - 40}" y2="${Y + ph - 12}" stroke="${C.panelEdge}" stroke-width="2"/>`;
  [[0, ['1', '3']], [2, ['2', '3']], [3, ['2', '4']]].forEach(([i, ns]) => ns.forEach((n, k) => { s += badge(bx - 12 + k * 34, Y + 65 + i * 42, 14, n, C.mustard); }));
  s += T(50, Y + ph + 4, '', {});
  const A = [
    ['Two flat, end-stopped statements', 'The loss is presented as accomplished fact before the speaker can resist it.', C.olive],
    ['Enjambment', '“could wait / for one more summer” stretches the sentence across the line break, enacting the wish to delay.', C.tealDark],
    ['Regular rhyme', '“gate” / “wait” seems to promise order.', C.olive],
    ['Caesura and a short sentence', 'The abrupt “It does.” breaks the rhythm: the count waits, but the speaker’s hope is left unconfirmed.', C.rust],
  ];
  let y = Y + ph + 18;
  const cwid = 412;
  const hs = A.map(([t1, b]) => card(0, 0, cwid - 46, { title: t1, body: b, size: 16, tsize: 18, pad: 14 }).h);
  const rh = [Math.max(hs[0], hs[1]), Math.max(hs[2], hs[3])];
  A.forEach(([t1, b, e], i) => {
    const col = i % 2, r = Math.floor(i / 2), x = 30 + col * (cwid + 16), yy = y + (r ? rh[0] + 14 : 0);
    s += card(x + 46, yy, cwid - 46, { title: t1, body: b, size: 16, tsize: 18, pad: 14, minH: rh[r], edge: e, tfill: e }).s + badge(x + 20, yy + rh[r] / 2, 16, String(i + 1), C.mustard);
  });
  y += rh[0] + rh[1] + 14;
  const n = note(y + 16, 'Each technique is tied to an effect on meaning at that exact point.');
  s += n.s;
  add('06-annotated-model-stanza',
    svg(900, Math.round(y + 16 + n.h + 24), 'Technique tied to effect: the model stanza', s),
    'The guide’s original four-line stanza with four numbered notes. 1: two flat, end-stopped statements present the loss as fact. 2: enjambment from “could wait” to “for one more summer” enacts the wish to delay. 3: the rhyme of “gate” and “wait” seems to promise order. 4: the caesura and abrupt “It does.” break the rhythm and leave the speaker’s hope unconfirmed.',
    'Every technique is linked to its effect at that point in the poem.',
    '## Writing the (b) answer on a printed poem');
}

// 07 The (b) method
{
  const Y = 120;
  let s = '';
  const segs = [['opening', C.tealLight], ['turn', C.mustard], ['ending', C.teal]];
  const w = 840 / 3;
  segs.forEach(([l, f], i) => { s += `<rect x="${30 + i * w}" y="${Y}" width="${w}" height="54" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + T(30 + i * w + w / 2, Y + 34, l, { size: 19, weight: 700, anchor: 'middle' }); });
  s += T(450, Y + 82, 'follow the poem’s movement, keeping the question’s focus in every paragraph', { size: 16, weight: 600, anchor: 'middle', fill: C.olive });
  const st = steps(Y + 104, [
    { title: 'Read the question’s focus first', body: 'Keep it in every paragraph.' },
    { title: 'Gist in one sentence', body: 'The speaker, the situation and what changes by the end.' },
    { title: 'Follow the poem’s movement', body: 'Opening, turn, ending: this keeps you analysing structure as you go.' },
    { title: 'Select small evidence', body: 'A word or phrase, then its effect.' },
    { title: 'Link outward once or twice', body: 'Briefly, to other poems in the selection, to show AO1.' },
  ], { gap: 10, size: 16, tsize: 19, highlight: 2 });
  s += st.s;
  add('07-printed-poem-method',
    svg(900, Math.round(Y + 104 + st.h + 24), 'The (b) answer on a printed poem', s),
    'A bar divides a poem into opening, turn and ending. Five steps follow: read the question’s focus first, state the gist in one sentence, follow the poem’s movement, select small evidence with its effect, and link outward briefly to other poems in the selection.',
    'Follow the poem from opening to turn to ending, with the question in view.',
    '## Writing the (b) answer on a printed poem');
}

// 08 The (a) essay across the selection
{
  const Y = 118;
  let s = '';
  const lay = (x, title, good) => {
    let o = T(x, Y + 20, title, { size: 19, weight: 700, fill: good ? C.tealDark : C.rust });
    o += (good ? tick : cross)(x + 395, Y + 13, 15) + (good ? T(x + 120, Y + 20, 'by point of similarity or contrast', { size: 15, fill: C.muted }) : '');
    const cols = good ? [['A', 'B'], ['A', 'B'], ['A', 'B']] : [['A'], ['A'], ['B'], ['B']];
    cols.forEach((parts, i) => {
      const y = Y + 40 + i * (good ? 70 : 52);
      const h = good ? 58 : 42;
      o += `<rect x="${x}" y="${y}" width="410" height="${h}" rx="8" fill="${C.panel}" stroke="${good ? C.tealDark : C.rust}" stroke-width="2.5"/>`;
      if (good) { o += T(x + 14, y + 35, `Point ${i + 1}`, { size: 16, weight: 700 }); parts.forEach((p, k) => { o += chip(x + 120 + k * 100, y + 14, `Poem ${p}`, { size: 15, fill: k ? C.cream : C.tealLight, edge: k ? C.olive : C.tealDark, h: 30 }).s; }); o += `<line x1="${x + 204}" y1="${y + 29}" x2="${x + 216}" y2="${y + 29}" stroke="${C.ink}" stroke-width="2.5"/>`; }
      else o += T(x + 14, y + 28, `All of Poem ${parts[0]}`, { size: 16, weight: 700 });
    });
    return o;
  };
  s += lay(30, 'Alternate', false) + lay(460, 'Integrate', true);
  const y2 = Y + 40 + 3 * 70 + 10;
  const r = row(y2, [
    { title: 'Follow the wording', body: 'If it says two poems, write on two.' },
    { title: 'Choose poems that let you argue', body: 'Two that treat the focus differently.' },
    { title: 'Stay at line level', body: 'Short quotation and comment on form in every paragraph.' },
  ], { gap: 14, card: { size: 16, tsize: 18, pad: 16 } });
  s += r.s;
  const n = note(y2 + r.h + 16, 'Prepare flexibly: four or five short, versatile quotations for each poem in the selection, plus one feature of its form.');
  s += n.s;
  add('08-essay-across-selection',
    svg(900, Math.round(y2 + r.h + 16 + n.h + 24), 'The (a) essay: integrate, do not alternate', s),
    'Two essay layouts. Crossed out: all of Poem A, then all of Poem B. Ticked: each paragraph is a point that moves between Poem A and Poem B by similarity or contrast. Below: follow the question’s wording on the number of poems, choose poems that treat the focus differently, keep analysis at line level, and learn four or five short quotations per poem plus one feature of its form.',
    'Move between poems point by point, and write on exactly the number asked.',
    '## Writing the (a) essay across the selection');
}
