import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-a-level-english-literature-9675-unit-2-section-a';
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

// 01 The six novels and the places they move between
{
  const Y = 110;
  let s = '';
  const nov = [
    ['Heart of Darkness', 'Conrad', ['the Thames', 'Brussels', 'the Congo River and its stations']],
    ['The Great Gatsby', 'Fitzgerald', ['West Egg', 'East Egg', 'the valley of ashes', 'New York', 'the Midwest']],
    ['Americanah', 'Adichie', ['Lagos', 'Nsukka', 'American cities', 'London']],
    ['Small Island', 'Levy', ['Jamaica', 'wartime and post-war London', 'India']],
    ['Last Man in Tower', 'Adiga', ['a Mumbai housing society', 'the city around it']],
    ['Remains of the Day', 'Ishiguro', ['Darlington Hall', 'the English West Country']],
  ];
  let y = Y;
  nov.forEach(([t, a, ps]) => {
    // layout chips, wrapping
    let cx = 270, cy = y + 12, rows = 1;
    const chips = [];
    ps.forEach((p) => {
      const c = chip(0, 0, p, { size: 15, h: 32, weight: 600 });
      if (cx + c.w > 860) { cx = 270; cy += 42; rows++; }
      chips.push([cx, cy, p, c.w]); cx += c.w + 10;
    });
    const h = rows * 42 + 14;
    s += panel(30, y, 840, h);
    s += T(48, y + h / 2 - 2, t, { size: 17, weight: 700, italic: true }) + T(48, y + h / 2 + 19, a, { size: 15, fill: C.muted });
    chips.forEach(([x0, y0, p]) => { s += chip(x0, y0, p, { size: 15, h: 32, weight: 600, fill: C.tealLight, edge: C.tealDark }).s; });
    y += h + 10;
  });
  const n = note(y + 6, 'You study one, chosen by your centre (Version 5.3 list; a revised 9675 for teaching from 2027 has a refreshed list). In every novel the plot is organised around movement between places.');
  s += n.s;
  add('01-six-novels',
    svg(900, y + 6 + n.h + 24, 'The six novels and their places', s, 'One essay, 25 marks, open book'),
    'Six rows list each novel with the places it moves between: Heart of Darkness (the Thames, Brussels, the Congo), The Great Gatsby (West Egg, East Egg, the valley of ashes, New York, the Midwest), Americanah (Lagos, Nsukka, American cities, London), Small Island (Jamaica, London, India), Last Man in Tower (a Mumbai housing society and the city) and Remains of the Day (Darlington Hall and the West Country).',
    'Every set novel moves between places, so the order of places is itself a method.',
    '## The six Section A novels');
}

// 02 Whose view of the place?
{
  const Y = 110;
  let s = '';
  const rows = [
    ['Marlow', 'tells his story aboard a boat on the Thames', 'the Congo', 'a European storyteller’s memory'],
    ['Nick Carraway', 'an outsider from the Midwest', 'the Eggs', 'seen from outside'],
    ['Stevens', 'restraint makes him unreliable about his own feelings', 'the West Country', 'an unreliable guide'],
  ];
  s += T(150, Y + 14, 'Narrator', { size: 16, weight: 700, anchor: 'middle', fill: C.muted }) + T(450, Y + 14, 'Position', { size: 16, weight: 700, anchor: 'middle', fill: C.muted }) + T(750, Y + 14, 'The place we receive', { size: 16, weight: 700, anchor: 'middle', fill: C.muted });
  let y = Y + 28;
  rows.forEach(([nar, pos, pl, eff]) => {
    const h = 96;
    s += `<rect x="30" y="${y}" width="230" height="${h}" rx="12" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + pawn(66, y + 82, C.panel, 0.7) + T(160, y + h / 2 + 7, nar, { size: 19, weight: 700, anchor: 'middle' });
    s += arrow(264, y + h / 2, 296, y + h / 2, { w: 3 });
    // lens
    const PL = wrap(pos, 260, 16); s += panel(300, y, 300, h) + PL.map((l, k) => T(450, y + h / 2 + 6 - ((PL.length - 1) * 21) / 2 + k * 21, l, { size: 16, anchor: 'middle' })).join('');
    s += arrow(604, y + h / 2, 636, y + h / 2, { w: 3 });
    s += `<rect x="640" y="${y}" width="230" height="${h}" rx="12" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + T(755, y + 40, pl, { size: 19, weight: 700, anchor: 'middle' }) + para(755, y + 64, eff, 216, { size: 15, anchor: 'middle', fill: C.olive }).s;
    y += h + 12;
  });
  const r = row(y + 8, [
    { kicker: 'STRUCTURE', title: 'The order of places is a method', body: 'The plot is organised around movement between places.', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'REPRESENTATION', kfill: C.olive, title: 'Every place is someone’s view', body: 'No place exists except as words chosen by a narrator.', fill: C.cream, edge: C.olive },
  ], { gap: 24, card: { tsize: 18, size: 16 } });
  s += r.s;
  const yn = y + 8 + r.h + 16;
  const n = note(yn, 'Achebe’s lecture “An Image of Africa” (1975) argued that Heart of Darkness reduces Africa to a backdrop for a European mind. Ask of any narrator: whose view of a place do we hear, and whose is left out?');
  s += n.s;
  add('02-whose-view',
    svg(900, yn + n.h + 24, 'Whose view of the place?', s),
    'Three narrators and how their position filters place: Marlow tells of the Congo from a boat on the Thames, Nick Carraway describes the Eggs as a Midwestern outsider, and Stevens’s restraint makes him an unreliable guide to the West Country. Below, structure means the order of places is a method, and representation means every place is someone’s view. A note cites Achebe’s 1975 lecture.',
    'A novel’s places always reach us through a narrator’s eyes and words.',
    '## How novels build place');
}

// 03 Five more ways novels build place
{
  const Y = 110;
  let s = '';
  // contrast pairs
  s += T(30, Y + 18, 'Contrast: paired places carry social and moral oppositions', { size: 19, weight: 700 });
  const pairs = [['East Egg', 'West Egg', 'The Great Gatsby'], ['the England Hortense imagines', 'Gilbert’s single cramped room', 'Small Island'], ['the old tower', 'the luxury development promised', 'Last Man in Tower']];
  let y = Y + 34;
  pairs.forEach(([a, b, n]) => {
    s += `<rect x="30" y="${y}" width="300" height="50" rx="10" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + T(180, y + 31, a, { size: 16, weight: 700, anchor: 'middle' });
    s += T(360, y + 32, 'vs', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
    s += `<rect x="390" y="${y}" width="300" height="50" rx="10" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + T(540, y + 31, b, { size: 16, weight: 700, anchor: 'middle' });
    s += T(706, y + 31, n, { size: 15, italic: true, fill: C.muted });
    y += 60;
  });
  y += 14;
  const items = [
    { title: 'Journeys', body: 'Up a river, across the Atlantic, through England by car, Lagos to America and back: compare places; does the traveller change?' },
    { title: 'Home and homeland', body: 'Ifemelu’s return to Lagos; an unwelcoming London; Stevens’s loyalty to a great house: is home a place or relationships?' },
    { title: 'Political space', body: 'Colonial power in the Congo, Empire, property development in Mumbai, politics at Darlington Hall in the 1930s.' },
    { title: 'Time', body: 'Locations “and possibly times”: a place revisited, or described by an older narrator, carries the weight of change.' },
  ];
  const r1 = row(y, items.slice(0, 2), { gap: 18, card: { tsize: 19, size: 16 } });
  const r2 = row(y + r1.h + 14, items.slice(2), { gap: 18, card: { tsize: 19, size: 16 } });
  s += r1.s + r2.s;
  add('03-how-novels-build-place',
    svg(900, y + r1.h + 14 + r2.h + 24, 'How novels build place', s),
    'Three paired places show contrast: East and West Egg, the England Hortense imagines and Gilbert’s cramped room, and the old tower and the promised luxury development. Four cards follow: journeys, home and homeland, place as political space, and time.',
    'Journeys, contrasts, home, power and time all turn setting into meaning.',
    '## How novels build place');
}

// 04 Open-book preparation
{
  const Y = 110;
  let s = '';
  s += panel(30, Y, 840, 214);
  s += T(54, Y + 36, '1  Map the novel by place', { size: 19, weight: 700 }) + T(846, Y + 36, 'pattern illustrative', { size: 15, anchor: 'end', fill: C.muted });
  const segs = [[0, 0.18, C.tealLight, 'place A'], [0.18, 0.45, C.cream, 'place B'], [0.45, 0.62, C.teal, 'place C'], [0.62, 0.85, C.cream, 'place B'], [0.85, 1, C.tealLight, 'place A']];
  const bx = 60, bw = 780, by = Y + 86;
  segs.forEach(([a, b, f, l]) => { s += `<rect x="${bx + bw * a}" y="${by}" width="${bw * (b - a)}" height="44" fill="${f}" stroke="${C.ink}" stroke-width="2"/>` + T(bx + bw * (a + b) / 2, by + 28, l, { size: 15, anchor: 'middle' }); });
  s += T(bx, by + 66, 'opening', { size: 15, fill: C.muted }) + T(bx + bw, by + 66, 'ending', { size: 15, fill: C.muted, anchor: 'end' });
  // key passages pins
  [0.03, 0.3, 0.52, 0.7, 0.97].forEach((p) => { const x = bx + bw * p; s += `<path d="M${x},${by - 2} l-8,-14 a9,9 0 1,1 16,0 z" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`; });
  s += T(450, Y + 194, 'chapters or sections set where, with five or six key passages (pins) including the opening and ending', { size: 15, anchor: 'middle', fill: C.olive, weight: 700 });
  const r = row(Y + 230, [
    { title: '2  Mark key passages', body: 'Five or six descriptive passages, in your head or in planning notes kept outside the exam.' },
    { title: '3  Practise short quotations', body: 'A phrase, not a paragraph: short, analysed quotations earn more.' },
  ], { gap: 20, card: { tsize: 19, size: 16 } });
  s += r.s;
  const n = note(Y + 230 + r.h + 16, 'Your centre will confirm the rules about what kind of copy you may take in. In the exam, allow about five minutes to choose three or four passages.');
  s += n.s;
  add('04-open-book-prep',
    svg(900, Y + 230 + r.h + 16 + n.h + 24, 'Using the open book well', s, 'Precise detail is expected, so you must find it fast'),
    'A bar maps a novel’s sections by place from opening to ending, with pins marking five or six key passages. Two cards add marking key passages and practising short quotations, and a note says to allow about five minutes in the exam to choose three or four passages.',
    'Map the novel by place before the exam, so the open book saves time instead of costing it.',
    '## Open-book technique');
}

// 05 Worked example: the journey that keeps turning back
{
  const Y = 120;
  let s = '';
  const ry = Y + 230;
  // house
  const hx = 120, hy = Y + 60;
  s += `<path d="M${hx - 70},${hy + 30} L${hx},${hy - 20} L${hx + 70},${hy + 30} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5"/><rect x="${hx - 60}" y="${hy + 30}" width="120" height="70" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>`;
  for (let i = 0; i < 3; i++) s += `<rect x="${hx - 46 + i * 34}" y="${hy + 44}" width="20" height="22" fill="${C.teal}" stroke="${C.ink}" stroke-width="1.5"/>`;
  s += T(hx, hy + 128, 'Darlington Hall', { size: 17, weight: 700, anchor: 'middle' }) + T(hx, hy + 148, 'the 1930s, in memory', { size: 15, anchor: 'middle', fill: C.muted });
  // road
  s += path(`M${hx + 90},${ry} L860,${ry}`, { w: 14, stroke: C.rockDark }) + `<line x1="${hx + 90}" y1="${ry}" x2="860" y2="${ry}" stroke="${C.panel}" stroke-width="2" stroke-dasharray="14 12"/>`;
  s += T(530, ry + 40, 'the drive through the West Country', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  const stops = [360, 520, 680];
  stops.forEach((x, i) => {
    s += `<circle cx="${x}" cy="${ry}" r="12" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
    s += path(`M${x},${ry - 16} C${x},${Y + 90 - i * 0} ${(x + hx) / 2 + 40},${Y + 40 + i * 10} ${hx + 80},${hy + 40}`, { w: 2.5, stroke: C.tealDark, extra: `stroke-dasharray="8 6" marker-end="url(#ahT)"` });
  });
  s += T(560, Y + 30, 'each stop prompts a recollection of the house', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  // sea
  s += `<path d="M800,${ry - 60} q15,-10 30,0 q15,-10 30,0" fill="none" stroke="${C.blue}" stroke-width="3"/>` + T(830, ry - 76, 'the sea', { size: 15, anchor: 'middle', fill: C.blue, weight: 700 });
  const st = steps(ry + 70, [
    { title: 'The journey itself', body: 'A rare trip away from Darlington Hall, the centre of his world.' },
    { title: 'The “greatness” of English landscape', body: 'Calm restraint and lack of obvious drama: the same quality he values in a butler.' },
    { title: 'Places as memory', body: 'Geography structures the novel’s movement into the past.' },
    { title: 'The final evening by the sea', body: 'The place allows a rare moment of emotion.' },
  ], { size: 16, tsize: 18, gap: 10 });
  s += st.s;
  const n = note(ry + 70 + st.h + 16, 'Argument: the landscape is Stevens’s way of talking about himself without admitting anything. Context: the post-war decline of the great country houses; appeasement politics at Darlington Hall.');
  s += n.s;
  add('05-worked-example',
    svg(900, ry + 70 + st.h + 16 + n.h + 24, 'The road that leads back indoors', s, 'Explore the significance of the English landscape in Remains of the Day'),
    'A road runs from Darlington Hall through the West Country to the sea. Dashed arrows from each stop loop back to the house, showing each place prompting a memory of the 1930s. Below, the plan’s four points: the journey itself, the greatness of the English landscape, places as memory, and the final evening by the sea.',
    'The open road keeps pulling Stevens back into the house and the past.',
    '## Worked example');
}
