import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-a-level-english-literature-yet01-unit-1-prose';
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
  const fig = compose('Unit 1 Section B at a glance', [
    (y) => { const b = markBar(y + 26, [{ label: 'Section A', sub: '25 marks', value: 25, fill: C.tealLight }, { label: 'Section B: Post-2000 Prose', sub: '25 marks · one essay', value: 25, fill: C.mustard }]); return { s: T(30, y + 14, 'Unit 1 · 50 marks', { size: 17, weight: 700, fill: C.muted }) + b.s, h: b.h + 26 }; },
    (y) => {
      const c = card(30, y, 840, { kicker: 'THE QUESTION', title: 'A statement you must respond to, considering relevant contextual factors', body: 'One essay from a choice of two on your chosen novel. Open book.', fill: C.cream, edge: C.olive, kfill: C.olive, size: 17, tsize: 20 });
      return c;
    },
    (y) => {
      let s = T(30, y + 18, 'Assessed on', { size: 19, weight: 700 });
      let x = 160; ['AO1', 'AO2', 'AO3'].forEach((a) => { const c = chip(x, y - 2, a, { size: 18, fill: C.tealLight, edge: C.tealDark }); s += c.s; x += c.w + 10; });
      return { s, h: 30 };
    },
    (y) => {
      let s = T(30, y + 18, 'The five set novels', { size: 19, weight: 700 });
      const books = [['Brooklyn', 'Colm Tóibín'], ['The Kite Runner', 'Khaled Hosseini'], ['Life of Pi', 'Yann Martel'], ['Purple Hibiscus', 'Chimamanda Ngozi Adichie'], ['The White Tiger', 'Aravind Adiga']];
      const w = (840 - 4 * 12) / 5;
      books.forEach(([t1, a], i) => {
        const x = 30 + i * (w + 12), yy = y + 34;
        s += `<rect x="${x}" y="${yy}" width="${w}" height="120" rx="8" fill="${[C.tealLight, C.cream, C.teal, '#f6e3d6', C.sand][i]}" stroke="${C.ink}" stroke-width="2.5"/><rect x="${x}" y="${yy}" width="14" height="120" rx="4" fill="${C.ink}" opacity="0.25"/>`;
        s += para(x + w / 2 + 6, yy + 34, t1, w - 30, { size: 17, weight: 700, anchor: 'middle', italic: true }).s;
        s += para(x + w / 2 + 7, yy + 88, a, w - 50, { size: 15, anchor: 'middle', fill: C.muted }).s;
      });
      return { s, h: 158 };
    },
    (y) => note(y, 'The list is fixed by specification issue, so confirm it with your teacher.'),
  ]);
  add('01-section-b-at-a-glance', fig,
    'Section B is worth 25 of Unit 1’s 50 marks: one open-book essay, chosen from two, on a post-2000 novel, responding to a statement while considering contextual factors. It is assessed on AO1, AO2 and AO3. The five set novels are Brooklyn, The Kite Runner, Life of Pi, Purple Hibiscus and The White Tiger.',
    'One essay testing a statement about one of five post-2000 novels.',
    '## What Section B covers');
}

// 02 Key features of prose fiction
{
  const Y = 116;
  const feats = ['Characterisation', 'Form and structure', 'Grammatical structure', 'Imagery, symbols and motifs', 'Language choices', 'Voice', 'Theme', 'Use of dialogue'];
  let s = '';
  const w = (840 - 3 * 12) / 4;
  feats.forEach((f, i) => {
    const x = 30 + (i % 4) * (w + 12), y = Y + Math.floor(i / 4) * 76, hl = f === 'Grammatical structure';
    s += card(x, y, w, { title: f, minH: 64, vcenter: true, align: 'middle', tsize: 17, pad: 12, fill: hl ? C.mustard : C.panel, edge: hl ? C.olive : C.panelEdge }).s;
  });
  const y2 = Y + 2 * 76 + 14;
  const c = card(30, y2, 840, { kicker: 'THE MOST OVERLOOKED FEATURE', title: 'Grammatical structure', fill: C.cream, edge: C.olive, kfill: C.olive, tsize: 20, minH: 140 });
  s += c.s;
  let x = 50; ['sentence length', 'tense', 'the second person', 'how syntax creates a voice'].forEach((t1) => { const k = chip(x, y2 + 84, t1, { size: 17, fill: C.panel, edge: C.olive }); s += k.s; x += k.w + 12; });
  const y3 = y2 + c.h + 16;
  const n = note(y3, 'The specification: “it is the writers’ use of narrative that should be taught alongside the critical appreciation of the text and consideration of any contextual influences”.', { fill: C.tealLight, edge: C.tealDark });
  s += n.s;
  add('02-key-features-of-prose',
    svg(900, Math.round(y3 + n.h + 24), 'Key features of prose fiction', s),
    'Eight key features of prose fiction: characterisation, form and structure, grammatical structure, imagery symbols and motifs, language choices, voice, theme and use of dialogue. Grammatical structure is highlighted as the most overlooked: sentence length, tense, the second person and how syntax creates a voice.',
    'Eight features to study; grammatical structure is the one most often missed.',
    '## What the specification asks you to study');
}

// 03 Narrative methods in the five novels
{
  const Y = 116;
  const rows = [
    ['Brooklyn', 'Restrained third person, closely tied to Eilis’s perception', 'Feelings implied, not stated: silences and omissions carry meaning'],
    ['The Kite Runner', 'First-person retrospective narration by Amir', 'The adult judges his younger self; guilt shapes what he tells and when'],
    ['Life of Pi', 'A frame with an author figure, Pi’s first-person story, and a final interview offering a second version', 'The structure asks the reader to choose between stories'],
    ['Purple Hibiscus', 'Kambili’s first person; opens on Palm Sunday, moves back to the months before, then forward to the present', 'A quiet, constrained voice that changes as she does'],
    ['The White Tiger', 'Balram’s letters to the Chinese Premier over several nights', 'A confident, comic, unreliable voice addressing an outsider'],
  ];
  const tb = table(Y, ['Novel', 'Narrative method', 'Why it matters'], rows, [190, 340, 310], { size: 16 });
  add('03-narrative-methods-five-novels',
    svg(900, Math.round(Y + tb.h + 24), 'Narrative methods in the five novels', tb.s),
    'A table of the five set novels. Brooklyn: restrained third person tied to Eilis, so silences carry meaning. The Kite Runner: Amir’s retrospective first person, shaped by guilt. Life of Pi: a frame narrative with a second version that asks the reader to choose. Purple Hibiscus: Kambili’s first person with a non-chronological structure. The White Tiger: Balram’s letters, a confident, comic, unreliable voice.',
    'Each novel’s way of telling shapes what the reader can know and judge.',
    '## Narrative methods in the five novels');
}

// 04 Purple Hibiscus structure and Life of Pi frame
{
  const Y = 120;
  let s = '';
  s += `<text x="30" y="${Y + 6}" font-size="20" font-weight="700" fill="${C.ink}"><tspan font-style="italic">Purple Hibiscus</tspan>: the order of telling</text>`;
  const x0 = 60, W = 780, ly = Y + 120;
  s += `<line x1="${x0}" y1="${ly}" x2="${x0 + W}" y2="${ly}" stroke="${C.ink}" stroke-width="3" marker-end="url(#ah)"/>` + T(x0 - 30, ly - 12, 'story time', { size: 15, fill: C.muted });
  const pts = [['the months before', 0.18, C.tealLight], ['Palm Sunday', 0.55, C.mustard], ['the present', 0.9, C.teal]];
  pts.forEach(([l, f, c]) => { const x = x0 + f * W; s += `<circle cx="${x}" cy="${ly}" r="12" fill="${c}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x, ly + 36, l, { size: 16, weight: 700, anchor: 'middle' }); });
  const P = (f) => x0 + f * W;
  s += badge(P(0.55), ly - 66, 15, '1', C.mustard) + badge(P(0.18), ly - 66, 15, '2', C.mustard) + badge(P(0.9), ly - 66, 15, '3', C.mustard);
  s += path(`M${P(0.55) - 18},${ly - 66} L${P(0.18) + 18},${ly - 66}`, { stroke: C.tealDark, w: 3, extra: 'marker-end="url(#ahT)"' });
  s += path(`M${P(0.18) + 6},${ly - 50} Q${P(0.54)},${ly - 20} ${P(0.9) - 18},${ly - 62}`, { stroke: C.tealDark, w: 3, extra: 'stroke-dasharray="7 5" marker-end="url(#ahT)"' });
  s += T(P(0.37), ly - 78, 'opens, then moves back', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600 }) + T(P(0.74), ly - 70, 'then forward', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600 });
  const y2 = ly + 70;
  s += `<text x="30" y="${y2 + 6}" font-size="20" font-weight="700" fill="${C.ink}"><tspan font-style="italic">Life of Pi</tspan>: a frame narrative</text>`;
  const fy = y2 + 24;
  s += `<rect x="30" y="${fy}" width="840" height="200" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + T(50, fy + 32, 'an author figure', { size: 17, weight: 700, fill: C.olive });
  s += `<rect x="60" y="${fy + 50}" width="500" height="130" rx="12" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + T(310, fy + 122, 'Pi’s first-person story', { size: 19, weight: 700, anchor: 'middle' });
  s += `<rect x="590" y="${fy + 50}" width="260" height="130" rx="12" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + T(720, fy + 100, 'a final interview', { size: 17, weight: 700, anchor: 'middle' }) + T(720, fy + 126, 'a second version', { size: 16, anchor: 'middle', fill: C.muted });
  const n = note(fy + 220, 'The structure asks the reader to choose between stories.');
  s += n.s;
  add('04-structure-and-frame',
    svg(900, Math.round(fy + 220 + n.h + 24), 'Two structures that shape reading', s),
    'Top: a story-time line for Purple Hibiscus showing the order of telling: it opens on Palm Sunday, moves back to the months before it, then forward to the present. Bottom: Life of Pi as a frame with an author figure around Pi’s first-person story and a final interview offering a second version, asking the reader to choose between stories.',
    'The order and framing of a story are methods to analyse, not just plot.',
    '## Narrative methods in the five novels');
}

// 05 Responding to the statement
{
  const Y = 120;
  let s = '';
  s += card(30, Y, 840, { kicker: 'EXAMPLE STATEMENT (ORIGINAL)', title: '“Balram is more a product of his society than a villain.”', fill: C.tealLight, edge: C.tealDark, tsize: 20 }).s;
  s += T(450, Y + 118, 'You are not asked to agree; you are asked to test it.', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  const st = steps(Y + 140, [
    { title: 'Define the key terms', body: 'If the statement says a character is “a victim”, decide what victimhood means in this novel.' },
    { title: 'Take a position', body: 'It can be partial: “largely true, but…”.' },
    { title: 'Build evidence from across the novel', body: 'The opening, a turning point, the ending.' },
    { title: 'Show how methods shape the issue', body: 'The reader’s view depends on how the story is told.' },
    { title: 'Use context to explain', body: 'Why the novel presents the issue this way.' },
    { title: 'Conclude with a judgement', body: 'Answer the statement directly.' },
  ], { gap: 8, size: 16, tsize: 18, highlight: 1 });
  s += st.s;
  add('05-testing-the-statement',
    svg(900, Math.round(Y + 140 + st.h + 24), 'Responding to the statement', s),
    'An example statement, “Balram is more a product of his society than a villain”, is to be tested rather than agreed with. Six steps: define the key terms, take a position that can be partial, build evidence from the opening, a turning point and the ending, show how methods shape the issue, use context to explain, and conclude with a judgement that answers the statement.',
    'Test the statement: define, take a position, evidence, method, context, judgement.',
    '## Responding to the statement');
}

// 06 AO3 contexts
{
  const Y = 116;
  let s = '';
  s += T(30, Y + 6, 'Context usually means contemporary concerns', { size: 19, weight: 700 });
  let x = 30, cy = Y + 22;
  ['globalisation and inequality', 'migration and belonging', 'religion and authority', 'political violence', 'how stories shape truth'].forEach((c) => { const k = chip(0, 0, c, { size: 16 }); if (x + k.w > 870) { x = 30; cy += 42; } s += chip(x, cy, c, { size: 16, fill: C.cream, edge: C.olive }).s; x += k.w + 10; });
  const ty = cy + 56;
  const rows = [
    ['Brooklyn', 'Irish emigration to the United States in the 1950s; Catholic community life; women’s work and marriage'],
    ['The Kite Runner', 'Afghanistan from the monarchy to the Soviet invasion and Taliban rule; Pashtun and Hazara division; the Afghan diaspora in the United States'],
    ['Life of Pi', 'Religious pluralism; zoos and the human relationship with animals; storytelling, faith and truth'],
    ['Purple Hibiscus', 'Post-colonial Nigeria; political instability and military rule; Catholicism and Igbo tradition'],
    ['The White Tiger', 'India’s economic growth and the outsourcing industry; class and caste; servants and masters; corruption'],
  ];
  const tb = table(ty, ['Novel', 'Contexts worth knowing'], rows, [210, 630], { size: 16, zebra: true });
  s += tb.s;
  const n = note(ty + tb.h + 16, 'Context is strongest when it explains a choice: why a novel set in the past might speak to readers in the 2000s, or how a narrator’s position in society shapes what he can say.');
  s += n.s;
  add('06-ao3-contexts',
    svg(900, Math.round(ty + tb.h + 16 + n.h + 24), 'AO3: context for post-2000 novels', s),
    'Five contemporary concerns, globalisation and inequality, migration and belonging, religion and authority, political violence and how stories shape truth, sit above a table of contexts for each novel, from 1950s Irish emigration in Brooklyn to India’s economic growth and class in The White Tiger. A note says context is strongest when it explains a choice.',
    'Use context to explain a narrative choice, not as background.',
    '## AO3: context for post-2000 novels');
}

// 07 Worked plan: The White Tiger
{
  const Y = 118;
  let s = '';
  const th = card(30, Y, 840, { kicker: 'THESIS', body: 'The novel invites the reader to see Balram as a product of a corrupt system, but his own confident narration makes that view harder to accept.', fill: C.cream, edge: C.olive, kfill: C.olive, bfill: C.ink, size: 17 });
  s += th.s;
  const paras = [
    ['The “Darkness” and the “Light”', 'Village poverty and servitude explain, but do not excuse, what follows.', 'AO2 + AO3'],
    ['The Rooster Coop metaphor', 'The system keeps servants loyal; he presents the murder as escape.', 'AO2 + AO3'],
    ['The hit-and-run and forced confession', 'The clearest evidence that the powerful use the poor.', 'AO2'],
    ['Form: letters to a foreign leader', 'He performs success, so he is a less reliable witness to his own innocence.', 'AO2'],
    ['The ending', 'Entrepreneur in Bangalore; discomfort at his lack of remorse.', 'AO1'],
  ];
  let y = Y + th.h + 14;
  // spectrum bar
  const sy = y;
  s += `<line x1="70" y1="${sy + 26}" x2="830" y2="${sy + 26}" stroke="${C.ink}" stroke-width="4" marker-start="url(#ah)" marker-end="url(#ah)"/>`;
  s += T(70, sy + 58, 'product of his society', { size: 16, weight: 700, fill: C.tealDark }) + T(830, sy + 58, 'villain', { size: 16, weight: 700, anchor: 'end', fill: C.rust });
  const pos = [0.15, 0.3, 0.2, 0.7, 0.85];
  pos.forEach((p, i) => { s += badge(90 + p * 720, sy + 26, 15, String(i + 1), i >= 3 ? C.cream : C.tealLight); });
  y = sy + 80;
  paras.forEach(([t1, b, ao], i) => {
    const c = card(80, y, 790, { title: t1, body: b, size: 16, tsize: 18, pad: 12 });
    s += c.s + badge(50, y + c.h / 2, 17, String(i + 1), i >= 3 ? C.cream : C.tealLight) + chip(860, y + 10, ao, { size: 15, anchor: 'end', fill: C.panel, edge: C.tealDark }).s;
    y += c.h + 8;
  });
  const j = card(30, y + 8, 840, { kicker: 'CONCLUSION', title: 'Both: the society creates him, but the narration makes us judge him', fill: C.cream, edge: C.olive, kfill: C.olive, tsize: 19 });
  s += j.s;
  add('07-worked-plan-white-tiger',
    svg(900, Math.round(y + 8 + j.h + 24), 'Worked plan: testing a statement on The White Tiger', s),
    'A plan for the statement that Balram is more a product of his society than a villain. Five paragraphs are placed on a line between “product of his society” and “villain”: the Darkness and the Light, the Rooster Coop metaphor and the forced confession lean towards society; the letter form and the ending lean towards judging him. The conclusion: the society creates him, but the narration makes us judge him.',
    'A plan that moves from society’s case to the narration’s, then weighs both.',
    '## Worked example');
}
