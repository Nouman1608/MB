import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-english-literature-8702-writing-skills';
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

// 01 Where AO4 is assessed
{
  const Y = 110;
  let s = '';
  const paperCard = (x, title, qs) => {
    let o = panel(x, Y, 411, 220) + T(x + 24, Y + 40, title, { size: 21, weight: 700 });
    qs.forEach(([q, ao4], i) => {
      const y = Y + 62 + i * 76;
      o += `<rect x="${x + 24}" y="${y}" width="363" height="62" rx="10" fill="${ao4 ? C.cream : C.panel}" stroke="${ao4 ? C.olive : C.panelEdge}" stroke-width="2.5"/>` + T(x + 42, y + 38, q, { size: 18, weight: ao4 ? 700 : 400 });
      if (ao4) o += `<rect x="${x + 257}" y="${y + 14}" width="116" height="34" rx="17" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` + T(x + 315, y + 37, '+4 AO4', { size: 17, weight: 700, anchor: 'middle' });
    });
    return o;
  };
  s += paperCard(30, 'Paper 1', [['Shakespeare', true], ['19th-century novel', false]]);
  s += paperCard(459, 'Paper 2', [['Modern text', true], ['Poetry sections', false]]);
  const r = row(Y + 238, [
    { kicker: 'AO4 REWARDS', title: 'Range and accuracy', body: 'A range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'EVERYWHERE ELSE', title: 'Clarity still counts', body: 'An argument the examiner cannot follow cannot be credited for its ideas.' },
  ], { gap: 24, card: { tsize: 19, size: 16 } });
  s += r.s;
  add('01-where-ao4-counts',
    svg(900, Y + 238 + r.h + 24, 'Where accuracy earns its own marks', s),
    'Two paper cards. On Paper 1 the Shakespeare question carries 4 extra AO4 marks; on Paper 2 the modern text question does. Below, AO4 rewards range of vocabulary and sentence structures with accurate spelling and punctuation, and clear writing matters everywhere because an argument that cannot be followed cannot be credited.',
    'AO4 is worth 4 marks on two questions, but clear writing carries every answer.',
    '## What the specification covers');
}

// 02 Purposes: each has a job and a limit
{
  const Y = 110;
  const rows = [
    ['Evaluate', 'Judge how effective or significant a choice is', 'Needs reasons, not opinion alone'],
    ['Analyse', 'Show how a method creates meaning and effect', 'Must link to the question'],
    ['Argue', 'Advance and defend your view', 'Needs evidence every time'],
    ['Explain', 'Say what a quotation or method means', 'Must lead to analysis'],
    ['Summarise', 'Give just enough of the situation', 'One clause, not a retelling'],
    ['Describe', 'Identify a feature or moment precisely', 'Never the whole paragraph'],
  ];
  let s = '';
  const x1 = 100, w1 = 170, w2 = 330, w3 = 270, rh = 58;
  s += T(x1 + w1 + 14, Y + 20, 'Its job in an essay', { size: 16, weight: 700, fill: C.muted }) + T(x1 + w1 + w2 + 14, Y + 20, 'Its limit', { size: 16, weight: 700, fill: C.muted });
  rows.forEach(([p, job, lim], i) => {
    const y = Y + 34 + i * (rh + 8), low = i >= 4;
    s += `<rect x="${x1}" y="${y}" width="${w1 - 8}" height="${rh}" rx="10" fill="${low ? C.panel : i === 0 ? C.mustard : C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x1 + (w1 - 8) / 2, y + 36, p, { size: 19, weight: 700, anchor: 'middle' });
    s += panel(x1 + w1, y, w2 - 8, rh) + para(x1 + w1 + 14, y + 25, job, w2 - 36, { size: 16 }).s;
    s += `<rect x="${x1 + w1 + w2}" y="${y}" width="${w3}" height="${rh}" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>` + para(x1 + w1 + w2 + 14, y + 25, lim, w3 - 28, { size: 16 }).s;
  });
  // side arrow and brackets
  const top = Y + 34, bot = Y + 34 + 6 * (rh + 8) - 8;
  s += arrow(55, bot, 55, top + 4, { w: 4, color: C.tealDark, marker: 'ahT' });
  s += `<g transform="translate(40,${(top + bot) / 2}) rotate(-90)">` + T(0, 0, 'towards the higher levels', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark }) + '</g>';
  const yb = bot + 18;
  const n = note(yb, 'Check: a paragraph that only describes and summarises has not yet started to earn the higher levels.');
  s += n.s;
  add('02-purposes',
    svg(900, yb + n.h + 24, 'Six purposes, each with a job and a limit', s),
    'Six purposes are stacked from describe and summarise at the bottom, through explain, argue and analyse, to evaluate at the top, each with its job in an essay and its limit. An arrow points up towards the higher levels, and a note says paragraphs that only describe and summarise have not reached them.',
    'Describe and summarise only set things up; the marks come from explaining, arguing, analysing and evaluating.',
    '## Writing for different purposes');
}

// 03 Thesis: weak, better, strongest
{
  const Y = 120;
  let s = '';
  const th = [
    ['Weak', 'Shakespeare presents ambition in many ways.', C.panel, C.panelEdge],
    ['Better', 'Shakespeare presents ambition as attractive at first and destructive by the end.', C.tealLight, C.tealDark],
    ['Strongest', 'Shakespeare presents ambition as a force that isolates the people who pursue it, so that by the final act success and loneliness have become the same thing.', C.cream, C.olive],
  ];
  let y = Y;
  th.forEach(([lab, txt, f, e], i) => {
    const x = 30 + i * 60, w = 840 - i * 60;
    const L = wrap(txt, w - 210, 18);
    const h = Math.max(72, L.length * 25 + 44);
    s += panel(x, y, w, h, f, e) + badge(x + 34, y + h / 2, 20, String(i + 1), i === 2 ? C.mustard : C.cream) + T(x + 66, y + h / 2 + 7, lab, { size: 19, weight: 700, fill: i === 0 ? C.muted : i === 1 ? C.tealDark : C.olive });
    s += L.map((l, k) => T(x + 190, y + h / 2 + 7 - ((L.length - 1) * 25) / 2 + k * 25, (k === 0 ? '“' : '') + l + (k === L.length - 1 ? '”' : ''), { size: 18, italic: true })).join('');
    y += h + 12;
  });
  s += T(30, y + 22, 'A good thesis is:', { size: 18, weight: 700 });
  let cx = 200;
  ['arguable', 'specific', 'about the whole text'].forEach((c) => { const ch = chip(cx, y + 2, c, { size: 17, fill: C.mustard, edge: C.ink }); s += ch.s; cx += ch.w + 12; });
  y += 30;
  add('03-thesis-ladder',
    svg(900, y + 40, 'Building a thesis', s, 'Open with a direct answer you will defend throughout'),
    'Three thesis statements about ambition, from weak (ambition in many ways), to better (attractive at first and destructive by the end), to strongest (a force that isolates the people who pursue it until success and loneliness become the same thing). Below, a good thesis is arguable, specific and covers the whole text.',
    'A thesis should be arguable, specific and cover the whole text.',
    '### The thesis');
}

// 04 Topic sentences that link back and move forward
{
  const Y = 110;
  let s = '';
  // weak
  s += panel(30, Y, 840, 120);
  s += cross(70, Y + 60, 18) + T(108, Y + 46, '“Another theme is guilt.”', { size: 20, weight: 700, italic: true });
  s += T(108, Y + 78, 'Announces a new topic; no link to what came before.', { size: 17, fill: C.muted });
  // strong
  const y2 = Y + 140;
  s += panel(30, y2, 840, 190, C.cream, C.olive);
  s += tick(70, y2 + 60, 18) + T(108, y2 + 46, '“This isolation deepens once guilt replaces ambition.”', { size: 20, weight: 700, italic: true });
  s += arrow(320, y2 + 110, 140, y2 + 110, { w: 3.5, color: C.tealDark, marker: 'ahT' }) + T(330, y2 + 116, 'links back: “This isolation”', { size: 17, weight: 700, fill: C.tealDark });
  s += arrow(580, y2 + 150, 760, y2 + 150, { w: 3.5, color: C.olive, marker: 'ahO' }) + T(570, y2 + 156, 'moves forward: guilt replaces ambition', { size: 17, weight: 700, fill: C.olive, anchor: 'end' });
  const y3 = y2 + 214;
  s += T(450, y3, 'Signposts that help the examiner follow you', { size: 19, weight: 700, anchor: 'middle' });
  const sp = ['This develops further when…', 'By contrast…', 'This complicates the earlier view because…', 'Ultimately…'];
  let cx = 30, cy = y3 + 18;
  sp.forEach((p) => { const c = chip(0, 0, p, { size: 16, fill: C.tealLight, edge: C.tealDark }); if (cx + c.w > 870) { cx = 30; cy += 46; } s += chip(cx, cy, p, { size: 16, fill: C.tealLight, edge: C.tealDark }).s; cx += c.w + 12; });
  add('04-line-of-argument',
    svg(900, cy + 62, 'Keeping the line of argument', s),
    'A weak topic sentence, another theme is guilt, only announces a topic. A stronger one, this isolation deepens once guilt replaces ambition, links back to the previous point and moves the argument forward. Below, four signposting phrases: this develops further when, by contrast, this complicates the earlier view because, and ultimately.',
    'Each topic sentence should link back to the thesis and push it forward.',
    '### Keeping the line of argument');
}

// 05 Selecting and emphasising key points
{
  const Y = 110;
  let s = '';
  // many thin vs few deep
  s += panel(30, Y, 411, 270) + T(54, Y + 38, 'Many points, thinly', { size: 19, weight: 700, fill: C.muted });
  for (let i = 0; i < 8; i++) s += `<rect x="54" y="${Y + 58 + i * 20}" width="${200 + (i % 3) * 40}" height="12" rx="4" fill="${C.panelEdge}"/>`;
  s += cross(400, Y + 38, 15);
  s += panel(459, Y, 411, 270, C.cream, C.olive) + T(483, Y + 38, 'Three or four, in depth', { size: 19, weight: 700, fill: C.olive });
  [[50, C.tealLight, 56], [40, C.tealLight, 116], [92, C.mustard, 166]].forEach(([h, f, o]) => { s += `<rect x="483" y="${Y + o}" width="300" height="${h}" rx="6" fill="${f}" stroke="${C.ink}" stroke-width="2"/>`; });
  s += tick(830, Y + 38, 15);
  s += T(633, Y + 218, 'key point: longest paragraph', { size: 16, weight: 700, anchor: 'middle' });
  const y2 = Y + 300;
  s += T(450, y2, 'Three ways to emphasise your key point', { size: 19, weight: 700, anchor: 'middle' });
  const r = row(y2 + 18, [
    { title: 'Order', body: 'Open with it, or save it for the final paragraph.' },
    { title: 'Space', body: 'Give it the longest paragraph.' },
    { title: 'Language', body: '“most strikingly”, “crucially”' },
  ], { gap: 18, card: { tsize: 19, size: 16, align: 'middle', fill: C.panel } });
  s += r.s;
  add('05-select-and-emphasise',
    svg(900, y2 + 18 + r.h + 24, 'Select, then emphasise', s),
    'Two panels contrast many points covered thinly with three or four points in depth, where the key point has the longest paragraph. Below, three ways to emphasise a key point: by order, by space and by language such as most strikingly or crucially.',
    'Fewer points with real depth, and make the key one stand out.',
    '## Selecting and emphasising key points');
}

// 06 Embedding quotations and the conventions
{
  const Y = 110;
  let s = '';
  s += panel(30, Y, 840, 104) + cross(66, Y + 52, 16) + T(98, Y + 38, 'Dropped in', { size: 17, weight: 700, fill: C.rust });
  s += rich(98, Y + 72, [['The character is angry. ', ''], ['“Get out of my house.”', 'it'], [' This shows anger.', '']], { size: 18 });
  s += panel(30, Y + 116, 840, 104, C.cream, C.olive) + tick(66, Y + 168, 16) + T(98, Y + 154, 'Embedded', { size: 17, weight: 700, fill: C.tealDark });
  s += rich(98, Y + 188, [['The command to ', ''], ['“get out”', 'hl'], [' shows anger turning into control.', '']], { size: 18 });
  const y2 = Y + 248;
  s += T(450, y2, 'Quotation conventions', { size: 20, weight: 700, anchor: 'middle' });
  const conv = [
    ['“ ”', 'Quotation marks around every quotation; keep it short.'],
    ['…', 'Ellipsis: words have been left out.'],
    ['[ ]', 'Square brackets: a small change so it fits your grammar.'],
    ['/', 'Forward slash: a line break in poetry or verse.'],
    ['_', 'Underline titles of plays and novels (in handwriting); poems and short stories go in quotation marks.'],
  ];
  let y = y2 + 18;
  conv.forEach(([sym, txt]) => {
    const L = wrap(txt, 680, 17);
    const h = Math.max(50, L.length * 23 + 24);
    s += `<rect x="30" y="${y}" width="96" height="${h}" rx="10" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + (sym === '_' ? T(78, y + h / 2 + 5, 'Title', { size: 18, weight: 700, anchor: 'middle' }) + `<line x1="56" y1="${y + h / 2 + 11}" x2="100" y2="${y + h / 2 + 11}" stroke="${C.ink}" stroke-width="2"/>` : T(78, y + h / 2 + 9, sym, { size: 26, weight: 700, anchor: 'middle' }));
    s += panel(138, y, 732, h) + L.map((l, k) => T(156, y + h / 2 + 6 - ((L.length - 1) * 23) / 2 + k * 23, l, { size: 17 })).join('');
    y += h + 8;
  });
  add('06-embedding-quotations',
    svg(900, y + 16, 'Embedding quotations', s),
    'A dropped-in quotation, a whole sentence placed between two statements, is contrasted with an embedded one: the command to get out shows anger turning into control. Below, five conventions: quotation marks, ellipsis, square brackets, a forward slash for line breaks, and underlining titles of plays and novels.',
    'Build short quotations into your own sentences, and follow the conventions.',
    '## Using quotation and textual reference');
}

// 07 Register and tense
{
  const Y = 110;
  let s = '';
  s += T(30, Y + 20, 'Register: formal and precise', { size: 20, weight: 700 });
  s += panel(30, Y + 36, 300, 136) + cross(62, Y + 70, 14) + T(86, Y + 76, 'Avoid', { size: 17, weight: 700, fill: C.rust });
  s += tl(54, Y + 108, ['slang, text-speak,', '“stuff”, “things”, “kind of”'], { size: 16, fill: C.muted }, 22);
  s += panel(346, Y + 36, 524, 136, C.cream, C.olive) + tick(378, Y + 70, 14) + T(402, Y + 76, 'Prefer precise verbs', { size: 17, weight: 700, fill: C.tealDark });
  let cx = 370, cy = Y + 96;
  ['suggests', 'implies', 'exposes', 'undermines', 'reinforces', 'conveys'].forEach((v) => { const c = chip(0, 0, v, { size: 16 }); if (cx + c.w > 856) { cx = 370; cy += 40; } s += chip(cx, cy, v, { size: 16, h: 32, fill: C.panel, edge: C.olive }).s; cx += c.w + 10; });
  const y2 = Y + 206;
  s += T(30, y2, 'Tense', { size: 20, weight: 700 });
  const r = row(y2 + 16, [
    { kicker: 'PRESENT', title: 'For the text', body: '“the writer presents”, “the speaker reveals”: the text exists now each time it is read.', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'PAST', kfill: C.olive, title: 'For historical context only', body: '“the play was first performed”', fill: C.cream, edge: C.olive },
  ], { gap: 24, card: { tsize: 19, size: 16 } });
  s += r.s;
  const n = note(y2 + 16 + r.h + 16, 'Vary sentences: a complex sentence links ideas (“Although she appears calm, her repeated questions suggest panic”); an occasional short one gives emphasis. Not every sentence should begin “The writer”.', { title: 'Sentence variety' });
  s += n.s;
  add('07-register-and-tense',
    svg(900, y2 + 16 + r.h + 16 + n.h + 24, 'Register, tense and variety', s),
    'Register: avoid slang, text-speak and vague words; prefer precise verbs such as suggests, implies, exposes, undermines, reinforces and conveys. Tense: present for the text, past only for historical context. A note on sentence variety gives a complex sentence beginning although.',
    'Formal precise verbs, the present tense for the text, and varied sentences.',
    '## Accurate Standard English');
}

// 08 Worked example: what changed
{
  const Y = 110;
  let s = '';
  const weak = 'In the poem it shows that the speaker is upset. It says "the house is quiet" this shows that it’s lonely. Their is alot of sadness and the poet uses imagery and alliteration to show it.';
  const strong = 'The speaker presents grief as an absence that fills the home. The phrase “the house is quiet” transfers the speaker’s loneliness onto the building itself, as if the walls are mourning too. Although the line is simple, its plainness is effective…';
  const W = 411;
  const wl = wrap(weak, W - 44, 16), sl = wrap(strong, W - 44, 16);
  const h = Math.max(wl.length, sl.length) * 21 + 70;
  s += panel(30, Y, W, h) + T(52, Y + 34, 'Weaker', { size: 19, weight: 700, fill: C.rust }) + wl.map((l, k) => T(52, Y + 64 + k * 21, l, { size: 16, italic: true, fill: C.muted })).join('');
  s += panel(459, Y, W, h, C.cream, C.olive) + T(481, Y + 34, 'Improved', { size: 19, weight: 700, fill: C.tealDark }) + sl.map((l, k) => T(481, Y + 64 + k * 21, l, { size: 16, italic: true })).join('');
  const y2 = Y + h + 30;
  s += T(450, y2, 'What changed', { size: 20, weight: 700, anchor: 'middle' });
  const ch = checklist(y2 + 16, [
    { q: 'A clear point opens the paragraph' },
    { q: 'The quotation is embedded' },
    { q: 'Spelling and grammar fixed', note: '“it’s” replaced; “their” and “alot” removed; sentence punctuation fixed.' },
    { q: 'One choice analysed', note: 'in place of the vague “imagery and alliteration”' },
    { q: 'The final sentence evaluates the effect' },
  ], { tsize: 18, size: 16, gap: 8 });
  s += ch.s;
  add('08-worked-example',
    svg(900, y2 + 16 + ch.h + 24, 'From weaker to improved', s, 'The quotation is invented for this example'),
    'The weaker paragraph about a poem, with errors such as their and alot, sits beside the improved one, which presents grief as an absence that fills the home. Below, a checklist of what changed: a clear opening point, an embedded quotation, spelling and grammar fixed, one choice analysed, and an evaluative final sentence.',
    'Five changes turn a vague, error-prone paragraph into an analytical one.',
    '## Worked example');
}
