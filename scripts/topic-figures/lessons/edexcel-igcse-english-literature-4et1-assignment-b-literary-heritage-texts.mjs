import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-english-literature-4et1-assignment-b-literary-heritage-texts';
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

// 01 Exam route vs coursework route: different risks
{
  const Y = 112;
  let s = '';
  const col = (x, kick, title, rows, risk, fill, edge, ink) => {
    let o = panel(x, Y, 410, 360, C.panel, edge);
    o += T(x + 24, Y + 34, kick, { size: 15, weight: 700, fill: ink }) + T(x + 24, Y + 64, title, { size: 22, weight: 700 });
    rows.forEach(([k, v], i) => { const yy = Y + 106 + i * 50; o += T(x + 24, yy, k, { size: 15, weight: 700, fill: C.muted }) + T(x + 24, yy + 22, v, { size: 17 }); });
    o += `<rect x="${x + 16}" y="${Y + 276}" width="378" height="70" rx="10" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>` + T(x + 32, Y + 302, 'MAIN RISK', { size: 14, weight: 700, fill: ink }) + T(x + 32, Y + 330, risk, { size: 18, weight: 700 });
    return o;
  };
  s += col(30, 'COMPONENT 2 SECTION B', 'Exam', [['Time', 'About 45 minutes'], ['Question', 'Chosen from two on the day'], ['Context', 'Recalled from memory']], 'Forgetting context under pressure', C.tealLight, C.tealDark, C.tealDark);
  s += col(460, 'COMPONENT 3 ASSIGNMENT B', 'Coursework', [['Time', 'Weeks of preparation and drafting'], ['Question', 'A set task known in advance'], ['Context', 'Researched, selected, acknowledged']], 'Too much context of the wrong kind', C.cream, C.olive, C.olive);
  // essay bars
  const by = Y + 400;
  s += T(30, by, 'Inside an essay of about 800 words', { size: 18, weight: 700 });
  const essay = (y, ctx, label, good) => {
    const W = 600, cwid = W * ctx;
    let o = `<rect x="30" y="${y}" width="${cwid}" height="46" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/><rect x="${30 + cwid}" y="${y}" width="${W - cwid}" height="46" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`;
    o += T(30 + cwid / 2, y + 29, 'context', { size: 16, weight: 700, anchor: 'middle' }) + T(30 + cwid + (W - cwid) / 2, y + 29, 'analysis', { size: 16, weight: 700, anchor: 'middle' });
    o += (good ? tick(668, y + 23) : cross(668, y + 23)) + T(694, y + 29, label, { size: 16, weight: 600, fill: good ? C.tealDark : C.rust });
    return o;
  };
  s += essay(by + 18, 0.62, 'analysis squeezed out', false);
  s += essay(by + 78, 0.24, 'each sentence earns', true) + T(694, by + 127, 'its place', { size: 16, weight: 600, fill: C.tealDark });
  add('01-exam-vs-coursework',
    svg(900, by + 160, 'Same texts, different challenge', s),
    'Two cards compare the routes. The exam gives about 45 minutes, a question chosen on the day and context from memory, so the risk is forgetting context. Coursework gives weeks, a set task and researched context, so the risk is too much context. Below, an essay where context takes over squeezes out analysis, while chosen context leaves room for it.',
    'In coursework the danger is too much context, not too little.',
    '## How Assignment B differs from the exam route');
}

// 02 Choose context that fits the task
{
  const Y = 112;
  let s = '';
  const task = card(30, Y, 840, { kicker: 'START WITH THE TASK', title: 'City life in Great Expectations', body: 'The specification’s own model task.', tsize: 22, align: 'middle', fill: C.cream, edge: C.olive });
  s += task.s;
  const fy = Y + task.h + 16;
  s += T(450, fy + 22, 'Which contexts would change how a reader understands your chosen moments?', { size: 17, anchor: 'middle', fill: C.muted, weight: 600 });
  const keep = ['the growing Victorian city', 'crime and the law', 'money and class'];
  const drop = ['the history of the railway', '“the Victorians” in general'];
  let cy = fy + 50;
  keep.forEach((k, i) => { const yy = cy + i * 62; s += panel(30, yy, 400, 50, C.tealLight, C.tealDark) + tick(62, yy + 25) + T(92, yy + 31, k, { size: 18, weight: 700 }); s += path(`M430,${yy + 25} C500,${yy + 25} 520,${cy + 87} 590,${cy + 87}`, { stroke: C.tealDark, w: 3 }); });
  drop.forEach((k, i) => { const yy = cy + 200 + i * 62; s += panel(30, yy, 400, 50, C.panel, C.rust) + cross(62, yy + 25) + T(92, yy + 31, k, { size: 18, weight: 600, fill: C.muted }); });
  s += arrow(590, cy + 87, 604, cy + 87, { w: 3, color: C.tealDark, marker: 'ahT' });
  s += card(610, cy + 22, 260, { title: 'Two or three contexts', body: 'chosen for the task, used in the argument', tsize: 20, align: 'middle', fill: C.teal, edge: C.tealDark, bfill: C.ink, minH: 130, vcenter: true }).s;
  s += card(470, cy + 200, 400, { body: 'Does not change how these moments read: leave it out.', bfill: C.rust, size: 17, minH: 112, vcenter: true, edge: C.rust }).s;
  add('02-choose-context-for-task',
    svg(900, cy + 340, 'Choose context that fits the task', s),
    'For the specification’s model task on city life in Great Expectations, three contexts are ticked: the growing Victorian city, crime and the law, and money and class. The history of the railway and the Victorians in general are crossed out as not relevant to the task.',
    'Pick the two or three contexts that change how your chosen moments read.',
    '## Key ideas');
}

// 03 Five kinds of context
{
  const h = hub(112, 'Your text and task', [
    { title: 'Writer’s situation', body: 'where relevant' },
    { title: 'Historical setting', body: 'for example, seventeenth-century Boston' },
    { title: 'Social and cultural attitudes', body: 'for example, public shame as community control' },
    { title: 'Literary context', body: 'genre and tradition: often forgotten, the quickest link between AO2 and AO4', fill: C.cream, edge: C.olive },
    { title: 'Reception', body: 'how different audiences respond, with the reason why', fill: C.cream, edge: C.olive },
  ], { cardW: 280, r: 92, csize: 20 });
  const n = note(112 + h.h + 22, 'Top answers often combine two kinds in one argument, for example a social attitude and how a modern audience responds to it.');
  add('03-kinds-of-context',
    svg(900, Math.round(112 + h.h + 22 + n.h + 24), 'Five kinds of context for AO4', h.s + n.s),
    'The text and task sit at the centre of five kinds of context named by the specification: the writer’s situation, historical setting, social and cultural attitudes, literary context such as genre and tradition, and reception by different audiences. Literary context and reception are highlighted as kinds students often forget.',
    'Use more than one kind of context, and do not forget genre and reception.',
    '## Key ideas');
}

// 04 Worked example 1: context map for The Scarlet Letter
{
  const Y = 150;
  let s = '';
  const heads = [['MOMENT', 160, C.ink], ['METHOD (AO2)', 410, C.tealDark], ['CONTEXT (AO4)', 680, C.olive]];
  heads.forEach(([h, x, f]) => { s += T(x, Y, h, { size: 15, weight: 700, anchor: 'middle', fill: f }); });
  const rows = [
    ['Beginning', 'The crowd at Hester’s first public punishment', 'The narrator’s ironic description of the stern spectators', 'Seventeenth-century Boston, where religious and civil law overlapped'],
    ['Middle', 'The town’s changing reading of the letter as Hester serves the poor', 'The symbol’s shifting meaning', 'Hawthorne, writing in 1850, looking back critically on his ancestors’ society'],
    ['End', 'Dimmesdale’s confession on the scaffold', 'The scaffold scenes as a structural frame', 'Public shame as community control; modern readings as a critique of moral hypocrisy'],
  ];
  let cy = Y + 16;
  rows.forEach(([lab, m, me, c], i) => {
    const opts = [{ x: 74, w: 196, body: m, bfill: C.ink }, { x: 300, w: 220, body: me, fill: C.tealLight, edge: C.tealDark, bfill: C.ink }, { x: 550, w: 320, body: c, fill: C.cream, edge: C.olive, bfill: C.ink }];
    const hh = Math.max(...opts.map((o) => card(o.x, cy, o.w, { ...o, size: 16, pad: 14 }).h));
    opts.forEach((o) => { s += card(o.x, cy, o.w, { ...o, size: 16, pad: 14, minH: hh, vcenter: true }).s; });
    s += arrow(272, cy + hh / 2, 296, cy + hh / 2, { w: 3 }) + arrow(522, cy + hh / 2, 546, cy + hh / 2, { w: 3 });
    s += `<g transform="translate(46,${cy + hh / 2}) rotate(-90)">${T(0, 6, lab, { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark })}</g>`;
    cy += hh + 14;
  });
  s += `<line x1="26" y1="${Y + 16}" x2="26" y2="${cy - 20}" stroke="${C.tealDark}" stroke-width="4" marker-end="url(#ahT)"/>`;
  s += note(cy + 6, 'Three rows give three paragraphs, each with a moment, a method and a context, covering beginning, middle and end and three kinds of context.').s;
  add('04-context-map',
    svg(900, Math.round(cy + 6 + 90), 'A context map for one task', s, 'How does Hawthorne present the Puritan community in The Scarlet Letter?'),
    'A three-row plan for a task on the Puritan community in The Scarlet Letter. Each row runs from a moment to a method to a context: the crowd at Hester’s punishment, the changing reading of the letter, and Dimmesdale’s confession on the scaffold, from the beginning to the end of the novel.',
    'Each paragraph pairs a moment, a method and a context.',
    '## Worked example 1: building a context map');
}

// 05 Worked example 2: Level 3 vs Level 5
{
  const Y = 112;
  let s = '';
  // Level 3
  s += panel(30, Y, 840, 230, C.panel, C.rust) + cross(64, Y + 34) + T(92, Y + 41, 'Level 3: context placed next to the point', { size: 20, weight: 700, fill: C.rust });
  const l3 = [['POINT', 'Shylock is treated badly by Antonio, who has insulted him in public.'], ['CONTEXT', 'In Shakespeare’s time Jewish people faced prejudice.'], ['EFFECT', 'This makes the audience feel sorry for him.']];
  l3.forEach(([k, v], i) => { s += card(50 + i * 274, Y + 70, 252, { kicker: k, kfill: C.muted, body: v, size: 16, bfill: C.ink, minH: 140 }).s; });
  s += `<line x1="304" y1="${Y + 140}" x2="322" y2="${Y + 140}" stroke="${C.rust}" stroke-width="3" stroke-dasharray="4 4"/><line x1="578" y1="${Y + 140}" x2="596" y2="${Y + 140}" stroke="${C.rust}" stroke-width="3" stroke-dasharray="4 4"/>`;
  // Level 5
  const Y2 = Y + 252;
  s += panel(30, Y2, 840, 400, C.panel, C.tealDark) + tick(64, Y2 + 34) + T(92, Y2 + 41, 'Level 5: language, two contexts, one argument', { size: 20, weight: 700, fill: C.tealDark });
  const a = card(50, Y2 + 70, 250, { kicker: 'LANGUAGE (AO2)', title: 'Forceful prose; repeated questions', body: 'The audience sees him as a person, not a stage villain.', tsize: 17, size: 15, fill: C.tealLight, edge: C.tealDark, minH: 300, vcenter: true });
  const c1 = card(330, Y2 + 70, 260, { kicker: 'SOCIAL ATTITUDE (AO4)', kfill: C.olive, body: 'Many in an Elizabethan audience may have expected only a comic figure of greed.', size: 15, fill: C.cream, edge: C.olive, bfill: C.ink, minH: 142 });
  const c2 = card(330, Y2 + 228, 260, { kicker: 'RECEPTION (AO4)', kfill: C.olive, body: 'A modern audience is more likely to hear an accusation against the Christians on stage.', size: 15, fill: C.cream, edge: C.olive, bfill: C.ink, minH: 142 });
  const d = card(620, Y2 + 70, 230, { kicker: 'ARGUMENT (AO1)', title: 'The speech ends in a demand for revenge, so both readings stay open', tsize: 17, fill: C.teal, edge: C.ink, minH: 300, vcenter: true });
  s += a.s + c1.s + c2.s + d.s;
  s += arrow(302, Y2 + 170, 326, Y2 + 141, { w: 3 }) + arrow(302, Y2 + 270, 326, Y2 + 299, { w: 3 }) + arrow(592, Y2 + 141, 616, Y2 + 200, { w: 3 }) + arrow(592, Y2 + 299, 616, Y2 + 240, { w: 3 });
  add('05-level-3-to-level-5',
    svg(900, Y2 + 424, 'From Level 3 to Level 5', s, 'How does Shakespeare present Shylock in The Merchant of Venice?'),
    'A Level 3 answer sets a point, a general piece of context about prejudice and an effect side by side without linking them. A Level 5 answer links Shylock’s forceful prose and repeated questions to two contexts, an Elizabethan audience’s expectations and a modern audience’s response, and argues that the play keeps both readings open.',
    'Link specific language to specific contexts to build one argument.',
    '## Worked example 2: from Level 3 to Level 5');
}

// 06 Word budget for 800 words
{
  const Y = 140;
  const segs = [['Intro', 70, C.cream], ['Paragraph 1', 200, C.teal], ['Paragraph 2', 200, C.tealLight], ['Paragraph 3', 200, C.teal], ['End', 70, C.cream]];
  const tot = 740;
  let s = T(30, Y - 6, 'Words per section', { size: 17, weight: 700, fill: C.muted }), x = 30;
  const xs = [];
  segs.forEach(([lab, n, f], i) => {
    const w = (840 * n) / tot;
    s += `<rect x="${x}" y="${Y + 6}" width="${w}" height="64" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x + w / 2, Y + 34, lab, { size: 17, weight: 700, anchor: 'middle' }) + T(x + w / 2, Y + 58, i === 0 || i === 4 ? String(n) : 'about 200', { size: 16, anchor: 'middle', fill: C.muted });
    xs.push([x, w]); x += w;
  });
  // paragraph recipe under the three middle segments
  const layers = [['Moment', C.panel, C.panelEdge], ['Method (AO2)', C.tealLight, C.tealDark], ['Context (AO4)', C.cream, C.olive], ['Link to task (AO1)', C.panel, C.ink]];
  [1, 2, 3].forEach((k) => {
    const [px, pw] = xs[k];
    layers.forEach(([l, f, e], j) => { const yy = Y + 92 + j * 50; s += `<rect x="${px + 8}" y="${yy}" width="${pw - 16}" height="42" rx="8" fill="${f}" stroke="${e}" stroke-width="2.5"/>` + T(px + pw / 2, yy + 27, l, { size: 16, weight: 700, anchor: 'middle' }); });
  });
  const lt = (k, txt) => { const [px, pw] = xs[k]; return tl(px + pw / 2, Y + 112, txt, { size: 15, anchor: 'middle', fill: C.muted }, 20); };
  s += lt(0, ['Answer', 'the task;', 'name the', 'main', 'context']) + lt(4, ['A', 'judgement', 'drawing', 'contexts', 'together']);
  const n = note(Y + 310, 'If a context sentence could be removed without weakening the paragraph, cut it and use the words for analysis.', { title: 'The cut test' });
  s += n.s;
  add('06-word-budget',
    svg(900, Math.round(Y + 310 + n.h + 24), 'A word budget for 800 words', s),
    'A bar divides the essay into an introduction of 70 words, three paragraphs of about 200 words and a conclusion of 70 words. Each paragraph stacks a moment, a method, a context and a link to the task. A note gives the cut test for context sentences.',
    'Every paragraph needs a moment, a method, a context and a link to the task.',
    '## A word budget for 800 words');
}
