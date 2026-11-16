import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-english-literature-4et1-section-c-modern-prose';
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

// 01 Four moments across the whole novel
{
  const Y = 130;
  let s = '';
  const P = [[50, Y + 262], [130, Y + 240], [340, Y + 110], [560, Y + 170], [770, Y + 60], [850, Y + 54]];
  let d = `M${P[0][0]},${P[0][1]}`;
  for (let i = 0; i < P.length - 1; i++) {
    const p0 = P[Math.max(0, i - 1)], p1 = P[i], p2 = P[i + 1], p3 = P[Math.min(P.length - 1, i + 2)];
    d += ` C${p1[0] + (p2[0] - p0[0]) / 6},${p1[1] + (p2[1] - p0[1]) / 6} ${p2[0] - (p3[0] - p1[0]) / 6},${p2[1] - (p3[1] - p1[1]) / 6} ${p2[0]},${p2[1]}`;
  }
  s += path(d, { stroke: C.tealDark, w: 4, extra: 'marker-end="url(#ahT)"' });
  s += `<line x1="40" y1="${Y + 290}" x2="860" y2="${Y + 290}" stroke="${C.ink}" stroke-width="3"/>`;
  const labels = [['Opening position', 'how the focus is first established'], ['Turning point', 'an event that changes or tests it'], ['Development', 'how the change plays out'], ['Ending', 'where the novel leaves it']];
  P.slice(1, 5).forEach(([x, y], i) => {
    s += `<line x1="${x}" y1="${y + 20}" x2="${x}" y2="${Y + 290}" stroke="${C.panelEdge}" stroke-width="2.5" stroke-dasharray="5 5"/>` + badge(x, y, 20, String(i + 1), i === 3 ? C.mustard : C.cream);
    s += T(x, Y + 318, labels[i][0], { size: 18, weight: 700, anchor: 'middle' }) + para(x, Y + 342, labels[i][1], 190, { size: 15, anchor: 'middle', fill: C.muted }).s;
  });
  const r = row(Y + 390, [
    { kicker: 'WEAKER', kfill: C.rust, body: 'Opens each paragraph with a plot event.', edge: C.rust, bfill: C.ink },
    { kicker: 'STRONGER', body: 'Opens each paragraph with a claim that answers the question.', edge: C.tealDark, bfill: C.ink },
  ], { gap: 24, card: { size: 17 } });
  s += r.s;
  add('01-four-moments-across-novel',
    svg(900, Math.round(Y + 390 + r.h + 24), 'An argument across the whole novel', s, 'Track a character, theme, relationship or setting'),
    'A line runs from the start to the end of a novel through four numbered moments: the opening position, a turning point that changes or tests it, the development, and the ending. Below, paragraphs should open with a claim that answers the question, not a plot event.',
    'Track the focus through four moments, from opening position to ending.',
    '## Key idea 1: an argument across the whole novel');
}

// 02 Five kinds of context for the set novels
{
  const Y = 116;
  let s = '';
  const items = [
    ['Historical setting', 'Of Mice and Men', 'Migrant ranch workers in 1930s California during the Great Depression: why the dream of owning land matters so much.'],
    ['Culture and tradition', 'Things Fall Apart', 'Igbo society before and during the arrival of British colonial rule and Christian missionaries.'],
    ['Identity and migration', 'The Joy Luck Club', 'Chinese American mothers and their American-born daughters.'],
    ['Ideas and debates', 'Klara and the Sun', 'Narrated by an artificial “friend”: technology, love and what makes a person.'],
  ];
  let cy = Y;
  // Time of writing with a mini timeline (full width)
  const tw = panel(30, cy, 840, 170, C.cream, C.olive) + T(54, cy + 34, 'TIME OF WRITING', { size: 15, weight: 700, fill: C.olive }) + T(54, cy + 60, 'To Kill a Mockingbird', { size: 20, weight: 700, italic: true }) +
    `<line x1="120" y1="${cy + 118}" x2="800" y2="${cy + 118}" stroke="${C.ink}" stroke-width="4" marker-end="url(#ah)"/>` +
    `<circle cx="250" cy="${cy + 118}" r="12" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3"/><circle cx="640" cy="${cy + 118}" r="12" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` +
    T(250, cy + 98, 'Set', { size: 16, weight: 700, anchor: 'middle' }) + T(250, cy + 152, '1930s Alabama, under segregation', { size: 16, anchor: 'middle', fill: C.muted }) +
    T(640, cy + 98, 'Published', { size: 16, weight: 700, anchor: 'middle' }) + T(640, cy + 152, '1960, during the civil rights movement', { size: 16, anchor: 'middle', fill: C.muted });
  s += tw; cy += 186;
  for (let i = 0; i < items.length; i += 2) {
    const r = row(cy, items.slice(i, i + 2).map(([k, n, b]) => ({ kicker: k.toUpperCase(), title: n, body: b })), { gap: 20, vcenter: false, card: { tsize: 19, size: 16, bfill: C.ink } });
    s += r.s.replace(/font-size="19" font-weight="700"/g, 'font-size="19" font-weight="700" font-style="italic"');
    cy += r.h + 16;
  }
  const n = note(cy + 2, 'Ask: why might the writer show this, given when and where the text was written or set?');
  add('02-context-for-set-novels',
    svg(900, Math.round(cy + 2 + n.h + 24), 'Context that explains, not decorates', s + n.s),
    'Five kinds of context with a set novel for each. To Kill a Mockingbird is set in 1930s Alabama under segregation but was published in 1960 during the civil rights movement. Cards show historical setting in Of Mice and Men, culture and tradition in Things Fall Apart, identity and migration in The Joy Luck Club, and ideas and debates in Klara and the Sun.',
    'Context earns AO4 when it explains a specific choice in the novel.',
    '## Key idea 2: context that explains, not decorates');
}

// 03 A closed-book quotation bank
{
  const Y = 120;
  let s = '';
  // central quote card
  s += card(30, Y + 70, 320, { kicker: 'ONE SHORT QUOTATION', title: 'A single word or brief phrase', body: ['Where it appears', 'Which themes it serves'], bullets: true, tsize: 19, size: 16, fill: C.cream, edge: C.olive, minH: 170 }).s;
  const th = ['Theme A', 'Theme B', 'Theme C'];
  th.forEach((t2, i) => {
    const y = Y + 40 + i * 84;
    s += panel(560, y, 310, 64, C.tealLight, C.tealDark) + T(715, y + 39, t2, { size: 18, weight: 700, anchor: 'middle' });
    s += path(`M352,${Y + 155} C450,${Y + 155} 460,${y + 32} 556,${y + 32}`, { stroke: C.tealDark, w: 3, extra: 'marker-end="url(#ahT)"' });
  });
  s += T(455, Y + 18, 'flexible: attaches to several themes', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 });
  // bank row of mini cards
  const by = Y + 320;
  s += T(30, by, 'Aim for fifteen to twenty for your novel', { size: 18, weight: 700 });
  for (let i = 0; i < 20; i++) {
    const x = 30 + (i % 10) * 85, y = by + 18 + Math.floor(i / 10) * 58;
    s += `<rect x="${x}" y="${y}" width="74" height="46" rx="8" fill="${i < 15 ? C.cream : C.panel}" stroke="${i < 15 ? C.olive : C.panelEdge}" stroke-width="2" ${i < 15 ? '' : 'stroke-dasharray="5 4"'}/>` + `<line x1="${x + 12}" y1="${y + 18}" x2="${x + 58}" y2="${y + 18}" stroke="${C.olive}" stroke-width="4" stroke-linecap="round" opacity="0.6"/><line x1="${x + 12}" y1="${y + 31}" x2="${x + 44}" y2="${y + 31}" stroke="${C.tealDark}" stroke-width="4" stroke-linecap="round" opacity="0.5"/>`;
  }
  const r = row(by + 150, [
    { kicker: 'ALSO COUNTS', body: 'Accurate paraphrase of a specific moment', fill: C.tealLight, edge: C.tealDark, bfill: C.ink },
    { kicker: 'WORSE THAN PARAPHRASE', kfill: C.rust, body: 'An inaccurate quotation', edge: C.rust, bfill: C.ink },
  ], { gap: 24, card: { size: 17 } });
  s += r.s;
  add('03-closed-book-quotation-bank',
    svg(900, Math.round(by + 150 + r.h + 24), 'A quotation bank for a closed-book exam', s),
    'One short quotation card, noting where it appears and which themes it serves, links to three themes. Below, a bank of fifteen to twenty such cards, then a reminder that accurate paraphrase of a specific moment counts while an inaccurate quotation is worse than paraphrase.',
    'Short, flexible quotations you can attach to several themes beat long half-remembered ones.',
    '## Key idea 3: quotations for a closed-book exam');
}

// 04 Worked example: plan for loneliness in Of Mice and Men
{
  const Y = 146;
  let s = '';
  const ov = card(30, Y, 840, { kicker: 'OVERVIEW', kfill: C.olive, body: 'Loneliness is the normal condition of the ranch, created by economic insecurity and prejudice; George and Lennie’s friendship shows both the hope and the fragility of escaping it.', fill: C.cream, edge: C.olive, bfill: C.ink, size: 17 });
  s += ov.s;
  let cy = Y + ov.h + 44;
  s += T(260, cy - 12, 'Claim and moment (AO1)', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(700, cy - 12, 'Context (AO4)', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  const ps = [
    ['Opening', 'George’s speech about ranch workers with no family or place: loneliness is typical, the friendship unusual.', 'Itinerant labourers moved from ranch to ranch with no security during the Depression.'],
    ['Isolation by prejudice', 'Crooks is kept apart because of his race; his talk with Lennie shows how isolation damages a person.', 'Racial segregation and discrimination in 1930s America.'],
    ['Isolation by gender and age', 'Candy’s fear of being discarded; Curley’s wife has no name and no one to talk to.', 'Limited roles for women; no support for workers who could no longer work.'],
    ['Ending', 'The dream dies and George is left alone, like the ranch-hands he described at the start.', 'Circular structure: the hope of companionship is defeated.'],
  ];
  const mids = [];
  ps.forEach(([ti, a, b], i) => {
    const ca = card(80, cy, 470, { title: ti, body: a, tsize: 17, size: 15, pad: 14 }), cb = card(590, cy, 280, { body: b, size: 15, pad: 14 });
    const h = Math.max(ca.h, cb.h);
    s += card(80, cy, 470, { title: ti, body: a, tsize: 17, size: 15, pad: 14, minH: h, fill: C.tealLight, edge: C.tealDark }).s + card(590, cy, 280, { body: b, size: 15, pad: 14, minH: h, vcenter: true, fill: i === 3 ? C.panel : C.cream, edge: i === 3 ? C.ink : C.olive, bfill: C.ink }).s;
    s += arrow(552, cy + h / 2, 586, cy + h / 2, { w: 3 }) + badge(48, cy + h / 2, 18, String(i + 1), i === 3 ? C.mustard : C.cream);
    mids.push(cy + h / 2); cy += h + 12;
  });
  s += path(`M30,${mids[3] + 20} C6,${mids[3] + 20} 6,${mids[0] - 20} 30,${mids[0] - 20}`, { stroke: C.olive, w: 3, extra: 'stroke-dasharray="7 5" marker-end="url(#ahO)"' });
  add('04-loneliness-plan',
    svg(900, Math.round(cy + 14), 'Planning a theme question', s, 'How does Steinbeck present loneliness in Of Mice and Men?'),
    'An overview, then four paragraphs, each pairing a claim and moment with a context: George’s opening speech with Depression-era itinerant labour, Crooks with 1930s segregation, Candy and Curley’s wife with limited roles for women and no support for old workers, and the ending, where a dashed arrow back to the opening shows the circular structure.',
    'Every paragraph carries its own context, and the ending circles back to the start.',
    '## Worked example: planning a theme question');
}

// 05 Anatomy of the Crooks paragraph
{
  const Y = 116;
  let s = '';
  const st = [
    ['CLAIM', 'Loneliness on the ranch is not just bad luck but is imposed by prejudice.', C.cream, C.olive],
    ['PRECISE REFERENCE', 'Crooks lives apart in the harness room; his first reaction to Lennie is defensive hostility.', C.tealLight, C.tealDark],
    ['DEVELOPMENT', 'He admits how much a person needs someone to be near: bitterness covers a longing for company.', C.tealLight, C.tealDark],
    ['CONTEXT', 'In 1930s America, segregation meant a Black worker could be excluded legally and socially.', C.cream, C.olive],
    ['SO WHAT', 'The reader sees that society as cruel rather than natural.', C.mustard, C.ink],
  ];
  let cy = Y;
  st.forEach(([k, b, f, e], i) => {
    const c = card(120, cy, 750, { kicker: k, kfill: e, body: b, size: 17, bfill: C.ink, fill: f, edge: e });
    s += c.s;
    if (i < st.length - 1) s += arrow(80, cy + c.h / 2 + 10, 80, cy + c.h + 22, { w: 3, color: C.tealDark, marker: 'ahT' });
    s += `<circle cx="80" cy="${cy + c.h / 2}" r="10" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`;
    cy += c.h + 14;
  });
  s += T(450, cy + 10, 'Paraphrase counts as precise reference in a closed-book exam.', { size: 16, anchor: 'middle', fill: C.muted, weight: 600 });
  add('05-crooks-paragraph',
    svg(900, Math.round(cy + 36), 'Building a Section C paragraph', s, 'Of Mice and Men: Crooks'),
    'The sample paragraph on Crooks broken into steps: a claim that loneliness is imposed by prejudice, a precise reference to the harness room and his hostility, his admission that a person needs someone near, the context of 1930s segregation, and the conclusion that the reader sees that society as cruel.',
    'Claim, reference, development, context, and why it matters.',
    '## Worked example: planning a theme question');
}
