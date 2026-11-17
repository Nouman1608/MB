import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-a-level-english-literature-9675-unit-1-section-a';
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

// 01 What Section A covers
{
  const Y = 124;
  let s = '';
  const plays = [
    ['William Shakespeare', ['Othello', 'King Lear', 'Hamlet']],
    ['Christopher Marlowe', ['Doctor Faustus (B text)']],
    ['John Webster', ['The Duchess of Malfi']],
  ];
  s += T(30, Y + 18, 'Study one of five plays (specification version 5.3)', { size: 19, weight: 700 });
  let y = Y + 36;
  plays.forEach(([who, ps]) => {
    s += `<rect x="30" y="${y}" width="260" height="56" rx="10" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + T(160, y + 35, who, { size: 18, weight: 700, anchor: 'middle' });
    let cx = 306;
    ps.forEach((p) => { const c = chip(cx, y + 10, p, { size: 17, h: 36, fill: C.cream, edge: C.olive, weight: 600 }); s += `<g font-style="italic">${c.s}</g>`; cx += c.w + 12; });
    y += 68;
  });
  // passage vs memory
  const y2 = y + 16;
  s += panel(30, y2, 411, 150, C.cream, C.olive) + page(54, y2 + 26, 70, 96, { lines: 5 });
  s += T(144, y2 + 52, 'The passage', { size: 19, weight: 700 }) + para(144, y2 + 80, 'printed on the paper: the starting point', 270, { size: 16 }).s;
  s += panel(459, y2, 411, 150, C.tealLight, C.tealDark);
  s += `<circle cx="520" cy="${y2 + 74}" r="34" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + T(520, y2 + 84, '?', { size: 30, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += T(574, y2 + 52, 'The rest of the play', { size: 19, weight: 700 }) + para(574, y2 + 80, 'from memory: Unit 1 is closed book', 270, { size: 16 }).s;
  // Faustus texts
  const y3 = y2 + 172;
  s += T(30, y3 + 18, 'Doctor Faustus survives in two early versions', { size: 18, weight: 700 });
  s += `<line x1="60" y1="${y3 + 70}" x2="840" y2="${y3 + 70}" stroke="${C.ink}" stroke-width="3"/>`;
  s += `<rect x="120" y="${y3 + 46}" width="260" height="48" rx="10" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + T(250, y3 + 77, 'A text · printed 1604', { size: 17, anchor: 'middle' });
  s += `<rect x="500" y="${y3 + 40}" width="320" height="60" rx="10" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + T(660, y3 + 66, 'B text · printed 1616', { size: 18, weight: 700, anchor: 'middle' }) + T(660, y3 + 88, 'longer; adds and alters scenes', { size: 15, anchor: 'middle' });
  s += T(660, y3 + 128, 'the version the specification names', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  const n = note(y3 + 148, 'Set texts can change between specification versions (a revised 9675 is published for teaching from 2027), so confirm your list with your teacher.');
  s += n.s;
  add('01-section-a-plays',
    svg(900, y3 + 148 + n.h + 24, 'What Section A covers', s, '25 of Unit 1’s 50 marks, on one Elizabethan or Jacobean tragedy'),
    'Five Section A plays grouped by playwright: Othello, King Lear and Hamlet by Shakespeare, Doctor Faustus (B text) by Marlowe, and The Duchess of Malfi by Webster. The passage is printed on the paper; the rest of the play must come from memory. A timeline shows the A text of Doctor Faustus printed in 1604 and the longer B text, the one the specification names, printed in 1616.',
    'One play, one printed passage, and everything else from memory.',
    '## What Section A covers');
}

// 02 Aspects of tragedy a passage can open up
{
  const Y = 110;
  const h = hub(Y, 'The passage', [
    { title: 'The protagonist’s journey', body: 'Flaws, pride and folly, blindness and insight, discovery, moral values.' },
    { title: 'The villain or opponent', body: '“A contest of power”; partly responsible for the fall.' },
    { title: 'Fate', body: 'Is the end inevitable?' },
    { title: 'Structure', body: '“From order to disorder”, “through complication to catastrophe”.' },
    { title: 'Plots and sub-plots', body: 'A scene that mirrors or contrasts another strand.' },
    { title: 'Dramatic language', body: 'Used to heighten the tragedy.' },
    { title: 'The audience', body: '“Through pity and fear to an understanding of the human condition”.' },
  ], { cardW: 300, r: 80, csize: 19 });
  const n = note(Y + h.h + 20, '“The absence of an ‘aspect’ can be as significant as its presence”: a hero with no insight, or a villain without motive, can carry as much tragic weight.', { title: 'No fixed checklist' });
  add('02-aspects-of-tragedy',
    svg(900, Y + h.h + 20 + n.h + 24, 'Aspects a passage can open up', h.s + n.s),
    'A hub labelled the passage links to seven aspects of tragedy suggested by the specification: the protagonist’s journey towards death, the villain or opponent in a contest of power, fate, structure from order to disorder, plots and sub-plots, dramatic language, and the audience moved through pity and fear. A note says the absence of an aspect can be as significant as its presence.',
    'Seven productive aspects, and the absence of one can matter as much.',
    '## The aspects of tragedy a passage can open up');
}

// 03 Place it: the tragic arc
{
  const Y = 120;
  let s = '';
  const x1 = 70, x2 = 830, top = Y + 60, drop = 130;
  s += `<rect x="30" y="${Y}" width="840" height="338" rx="14" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2.5"/>`;
  const cy = (u) => top + drop * (1 - Math.cos(Math.PI * u)) / 2;
  let d = `M${x1},${cy(0)}`;
  for (let k = 1; k <= 40; k++) { const u = k / 40; d += ` L${x1 + (x2 - x1) * u},${cy(u)}`; }
  s += path(d, { w: 5, stroke: C.tealDark });
  s += T(x1, top - 16, 'order', { size: 18, weight: 700, fill: C.tealDark }) + T(470, cy(0.5) - 22, 'complication', { size: 18, weight: 700, fill: C.tealDark }) + T(x2, cy(1) - 18, 'catastrophe', { size: 18, weight: 700, anchor: 'end', fill: C.rust });
  const mk = (x, y, lab) => `<circle cx="${x}" cy="${y}" r="13" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + T(x, y + 6, lab, { size: 15, weight: 700, anchor: 'middle' });
  const ex = x1 + (x2 - x1) * 0.15, lx = x1 + (x2 - x1) * 0.8;
  const cardY = Y + 220;
  s += `<line x1="${ex}" y1="${cy(0.15) + 13}" x2="${ex}" y2="${cardY}" stroke="${C.ink}" stroke-width="2.5" stroke-dasharray="6 5"/>`;
  s += `<line x1="${lx}" y1="${cy(0.8) + 13}" x2="${lx}" y2="${cardY}" stroke="${C.ink}" stroke-width="2.5" stroke-dasharray="6 5"/>`;
  s += mk(ex, cy(0.15), 'E') + mk(lx, cy(0.8), 'L');
  s += card(54, cardY, 330, { title: 'Early passage', body: 'Usually sets up the flaw or the contest of power.', size: 16, tsize: 18, pad: 14, fill: C.cream, edge: C.olive }).s;
  s += card(516, cardY, 330, { title: 'Late passage', body: 'Usually shows recognition, suffering or catastrophe.', size: 16, tsize: 18, pad: 14, fill: C.cream, edge: C.olive }).s;
  const n = note(Y + 356, 'Also ask what the audience knows that the characters do not, before analysing a single word.');
  s += n.s;
  add('03-place-the-passage',
    svg(900, Y + 356 + n.h + 24, 'Step 1: place the passage', s, 'From order to disorder, through complication to catastrophe'),
    'A falling curve runs from order through complication to catastrophe. An early passage near the start usually sets up the flaw or the contest of power; a late passage near the end usually shows recognition, suffering or catastrophe.',
    'Where the passage falls in the arc shapes what it is likely to show.',
    '## Reading the passage: a four-step method');
}

// 04 The four-step method
{
  const Y = 110;
  const st = steps(Y, [
    { title: 'Place it', body: 'Where in the tragic arc? What does the audience know that the characters do not?' },
    { title: 'Read the dramatic method closely', body: 'Verse and shifts into prose, broken or shared lines, soliloquy and aside, imagery clusters, rhetorical questions, embedded stage directions.' },
    { title: 'Name the aspect at stake', body: 'Tie each point to an aspect of tragedy, not just a feature.' },
    { title: 'Reach outward', body: 'At least two other moments from memory: one it anticipates, one it echoes or reverses.' },
  ], { size: 17, tsize: 20, highlight: 2 });
  const y2 = Y + st.h + 22;
  const r = row(y2, [
    { kicker: 'OBSERVATION', title: '“Iago speaks in prose here.”', fill: C.panel, tsize: 18 },
    { kicker: 'ANALYSIS OF A TRAGIC ASPECT', kfill: C.olive, title: 'His slide into plain prose makes manipulation sound like friendly common sense: how the villain wins the contest of power.', fill: C.cream, edge: C.olive, tsize: 17 },
  ], { arrows: true, card: { size: 16 } });
  add('04-four-step-method',
    svg(900, y2 + r.h + 24, 'Reading the passage in four steps', st.s + r.s),
    'Four numbered steps: place the passage in the tragic arc, read the dramatic method closely, name the aspect of tragedy at stake, and reach outward to at least two other moments. Below, an observation that Iago speaks in prose becomes analysis when it explains how his plain prose helps the villain win the contest of power.',
    'Name the tragic aspect each method serves, then reach out to the rest of the play.',
    '## Reading the passage: a four-step method');
}

// 05 Context the passage can carry
{
  const Y = 110;
  const tb = table(Y, ['Context', 'Most relevant to', 'What it brings'], [
    ['Revenge tragedy conventions', 'Hamlet; The Duchess of Malfi', 'Delay, feigned madness, the ghost or haunting past, a violent final act.'],
    ['Morality-play tradition', 'Doctor Faustus', 'Good and Evil Angels, the Seven Deadly Sins: salvation or damnation.'],
    ['The fall of the great', 'King Lear; Othello', 'A person of high rank falls from prosperity.'],
    ['Ideas of order', 'The Duchess of Malfi; King Lear', 'Kingship, inheritance, family and gender hierarchies disturbed.'],
    ['Performance conditions', 'The stage itself', 'Daylight and candlelit theatres, boy actors, a bare stage where language creates place.'],
  ], [230, 230, 380], { size: 16, zebra: true });
  const n = note(Y + tb.h + 18, 'All three assessment objectives are weighted equally, so weave context in: use it only when it explains the effect of a specific line or stage moment.');
  add('05-context',
    svg(900, Y + tb.h + 18 + n.h + 24, 'Context the passage can carry', tb.s + n.s),
    'A table of five contexts: revenge tragedy conventions for Hamlet and The Duchess of Malfi, the morality-play tradition for Doctor Faustus, the fall of the great for King Lear and Othello, ideas of order for The Duchess of Malfi and King Lear, and performance conditions such as boy actors and a bare stage.',
    'Each context earns credit only when it changes how a specific line reads.',
    '## Context the passage can carry');
}

// 06 Worked example annotated
{
  const Y = 120;
  let s = '';
  const rowsA = [
    ['“Bring me a candle. No, take it away”', 'Contradictory orders: a mind that wants and refuses illumination; light symbolises knowledge he cannot bear.', 'insight · method: contradictory commands'],
    ['the hand that “once held / My father’s sword in honour” vs “has learned the trick”', 'The fall from former prosperity to corruption; “trick” makes murder a learned craft.', 'the fall · method: imagery'],
    ['(He looks at his hand.) “It does not shake.”', 'He becomes a spectator of himself; horrified less by the crime than by his calm.', 'method: embedded stage direction'],
    ['“Let them wait.” / “one who is not here”', 'A shared line: the household’s order slipping; the man the feast honoured has, in effect, died.', 'method: shared line'],
  ];
  const lw = 330, ax = 30 + lw + 30, aw = 870 - ax;
  let y = Y;
  rowsA.forEach(([q, ann, tag]) => {
    const L = wrap(q, lw - 32, 17, 700);
    const A = wrap(ann, aw - 32, 16);
    const h = Math.max(L.length * 23 + 26, A.length * 21 + 21 + 30);
    s += panel(30, y, lw, h, C.cream, C.olive) + L.map((l, k) => T(46, y + h / 2 + 7 - ((L.length - 1) * 23) / 2 + k * 23, l, { size: 17, weight: 700 })).join('');
    s += arrow(30 + lw + 4, y + h / 2, ax - 4, y + h / 2, { w: 3 });
    s += panel(ax, y, aw, h) + A.map((l, k) => T(ax + 16, y + 28 + k * 21, l, { size: 16 })).join('') + T(ax + 16, y + 28 + A.length * 21 + 4, tag, { size: 16, weight: 700, fill: C.tealDark });
    y += h + 12;
  });
  const r = row(y + 6, [
    { title: 'Ends on the audience', body: 'Pity comes from insight arriving too late to change anything.', fill: C.tealLight, edge: C.tealDark },
    { title: 'With a real set play', body: 'Also connect the passage to earlier and later moments.', fill: C.panel },
  ], { gap: 20, card: { tsize: 18, size: 16 } });
  s += r.s;
  add('06-worked-example',
    svg(900, y + 6 + r.h + 24, 'How the model paragraph works', s, 'Original passage: the Count looks at his hand'),
    'Four details of the original Jacobean-style passage are linked to the model paragraph’s analysis: the contradictory candle orders (insight), the hand that once held a sword but has learned the trick of signing deaths (the fall from prosperity), the embedded stage direction as he studies his hand, and the shared line Let them wait. Below, the paragraph ends on the audience’s pity, and with a real play would also link to other moments.',
    'Two tragic aspects, four methods, and an ending on the audience’s response.',
    '## Worked example on an original passage');
}
