import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-english-literature-9695-section-b-unseen';
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
const formIcon = (cx, cy, kind, k = 1) => {
  if (kind === 'prose') return [0, 1, 2, 3].map((i) => `<line x1="${cx - 30 * k}" y1="${cy - 18 * k + i * 12 * k}" x2="${cx + (i === 3 ? 6 : 30) * k}" y2="${cy - 18 * k + i * 12 * k}" stroke="${C.ink}" stroke-width="${4 * k}" stroke-linecap="round" opacity="0.6"/>`).join('');
  if (kind === 'poetry') return [0, 1, 2, 3].map((i) => `<line x1="${cx - 30 * k}" y1="${cy - 18 * k + i * 12 * k}" x2="${cx + [14, 2, 18, -4][i] * k}" y2="${cy - 18 * k + i * 12 * k}" stroke="${C.ink}" stroke-width="${4 * k}" stroke-linecap="round" opacity="0.6"/>`).join('');
  return pawn(cx - 16 * k, cy + 26 * k, C.teal, 0.5 * k) + pawn(cx + 18 * k, cy + 26 * k, C.mustard, 0.5 * k);
};

// 01 What the syllabus says
{
  const Y = 120;
  let s = '';
  s += T(30, Y + 6, 'Two passages, from two of three categories (you will not know which)', { size: 18, weight: 700 });
  const cats = [['prose', 1], ['poetry', 1], ['drama', 0]];
  cats.forEach(([c, on], i) => {
    const x = 30 + i * 286, y = Y + 22;
    s += `<rect x="${x}" y="${y}" width="268" height="100" rx="12" fill="${on ? C.panel : C.bg}" stroke="${on ? C.ink : C.panelEdge}" stroke-width="2.5"${on ? '' : ' stroke-dasharray="8 6"'}/>`;
    s += formIcon(x + 70, y + 50, c) + T(x + 130, y + 58, c, { size: 21, weight: 700, fill: on ? C.ink : C.muted });
  });
  s += T(870, Y + 146, 'one possible pairing shown; the third form is left out', { size: 15, anchor: 'end', fill: C.muted });
  s += `<rect x="30" y="${Y + 158}" width="840" height="56" rx="12" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + T(450, Y + 194, 'Answer one question from the choice of two · 25 marks · AO1 to AO4', { size: 19, weight: 700, anchor: 'middle' });
  const r = row(Y + 234, [
    { title: 'Written in English', body: 'All passages come from works originally written in English.' },
    { title: 'No authors or dates', body: 'Background knowledge is not expected.', fill: C.cream, edge: C.olive },
    { title: 'Language, form, structure', body: 'How meaning is expressed through the writer’s choices.' },
  ], { gap: 14, card: { size: 16, tsize: 19, pad: 16 } });
  s += r.s;
  const n = note(Y + 234 + r.h + 16, 'AO1 here credits knowledge and understanding of the text type: how a poem, a scene or a piece of narrative prose works. That is why form-specific reading matters.', { title: 'What “knowledge” means' });
  s += n.s;
  add('01-syllabus-rules',
    svg(900, Math.round(Y + 234 + r.h + 16 + n.h + 24), 'The unseen: what the syllabus says', s),
    'Two unseen passages are printed, drawn from two of three categories, prose, poetry and drama, and you answer one question from the choice of two for 25 marks on AO1 to AO4. Passages come from works originally written in English, authors and dates are not given, and background knowledge is not expected. AO1 credits knowledge of the text type.',
    'No set text, no dates, no background: knowledge here means knowing how the form works.',
    '## What the syllabus says about the unseen');
}

// 02 Choosing between the passages
{
  const Y = 120;
  let s = '';
  const pg = (x, lab, kind) => page(x, Y, 150, 180, { lines: 9 }) + T(x + 75, Y + 210, lab, { size: 17, weight: 700, anchor: 'middle' });
  s += pg(80, 'Passage 1', 'prose') + pg(280, 'Passage 2', 'poetry');
  s += T(255, Y + 246, 'skim both questions and both passages: 2–3 minutes', { size: 16, anchor: 'middle', fill: C.muted });
  s += `<rect x="96" y="${Y + 60}" width="118" height="22" rx="4" fill="${C.mustard}" opacity="0.6"/>` + T(155, Y + 112, 'a shift?', { size: 15, weight: 700, anchor: 'middle', fill: C.olive });
  const r = card(500, Y, 370, { title: 'Choose the passage you can argue about', body: ['A clear shift, tension or ambiguity gives you an essay.', 'A text that seems simple can leave you describing.'], bullets: true, fill: C.cream, edge: C.olive, size: 16, tsize: 19, minH: 246, vcenter: true });
  s += r.s;
  const y2 = Y + 270;
  const r2 = row(y2, [
    { title: 'Weigh the form', body: 'Your practice matters, but do not avoid a form by habit: practise all three.' },
    { title: 'Read the question’s wording', body: 'Your thesis answers the aspect it directs you to, not one you would prefer.' },
    { title: 'Then commit', body: 'Changing passage after fifteen minutes is the costliest mistake in the section.', fill: '#f6e3d6', edge: C.rust, tfill: C.rust },
  ], { gap: 14, card: { size: 16, tsize: 18, pad: 16 } });
  s += r2.s;
  add('02-choosing-the-passage',
    svg(900, Math.round(y2 + r2.h + 24), 'Choosing between the two passages', s),
    'Two printed passages are skimmed for two or three minutes. Choose the passage you can argue about, one with a shift, tension or ambiguity, rather than one that seems simple. Weigh the form without avoiding one by habit, read the question’s wording, then commit: changing passage after fifteen minutes is the costliest mistake.',
    'Pick the passage with a shift or tension to argue about, then commit.',
    '## Choosing between the two passages');
}

// 03 A timed method
{
  const Y = 134;
  let s = T(30, Y - 8, 'About an hour: Paper 2 is two hours for two equally weighted answers', { size: 17, weight: 700, fill: C.muted });
  const segs = [['0–5', 5, C.tealLight], ['5–15', 10, C.teal], ['15–20', 5, C.cream], ['20–55', 35, C.mustard], ['55–60', 5, C.tealLight]];
  let x = 30; const mids = [];
  segs.forEach(([l, m, f]) => { const w = (840 * m) / 60; s += `<rect x="${x}" y="${Y}" width="${w}" height="56" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`; if (w > 60) s += T(x + w / 2, Y + 35, l, { size: 16, weight: 700, anchor: 'middle' }); mids.push(x + w / 2); x += w; });
  s += T(870, Y - 8, 'minutes', { size: 15, anchor: 'end', fill: C.muted });
  const st = steps(Y + 76, [
    { n: '1', title: 'Choose and read for gist (0–5)', body: 'Who is speaking or narrating, in what situation, and what changes from beginning to end?' },
    { n: '2', title: 'Second reading and annotation (5–15)', body: 'Mark the turning point. Annotate language, form and structure, writing the effect beside each feature.' },
    { n: '3', title: 'Plan (15–20)', body: 'A one-sentence thesis that answers the question; three or four points; two or three quotations per point.' },
    { n: '4', title: 'Write (20–55)', body: 'Short introduction with your thesis, developed paragraphs with embedded quotation, a conclusion with a final judgement.' },
    { n: '5', title: 'Check (55–60)', body: 'Every paragraph answers the question.' },
  ], { gap: 10, size: 16, tsize: 19, highlight: 3 });
  s += st.s;
  add('03-timed-method',
    svg(900, Math.round(Y + 76 + st.h + 24), 'A timed method for about an hour', s),
    'A 60-minute bar: 0 to 5 minutes choose and read for gist, 5 to 15 annotate, 15 to 20 plan, 20 to 55 write, and 55 to 60 check. Five steps explain each stage, with writing highlighted as the longest.',
    'Read, annotate, plan, write, check: most of the hour goes on writing.',
    '## A timed method (about an hour)');
}

// 04 Reading by form
{
  const Y = 118;
  const cols = [
    ['prose', 'Unseen prose', ['Narrative voice: person, distance, reliability.', 'Pace: slowed into detail, or summarised.', 'Sentence shape: long and accumulating against short and abrupt.', 'The withheld: what it makes the reader wonder, without inventing the plot.'], C.cream, C.olive],
    ['poetry', 'Unseen poetry', ['Speaker, listener and situation.', 'Form: stanza, line length, rhyme, regular or disrupted metre.', 'Line endings: what enjambment holds back, what the line end stresses.', 'The turn: the ending often reframes the opening.'], C.tealLight, C.tealDark],
    ['drama', 'Unseen drama', ['Read it as performance: what would an audience see and hear?', 'Stage directions are evidence: pauses, movement, props, silence.', 'Dialogue rhythm: who controls, interrupts, goes quiet.', 'Dramatic irony within the extract.'], '#f6e3d6', C.rust],
  ];
  const w = (840 - 28) / 3;
  const cards = cols.map(([k, ti, b]) => card(0, 0, w, { title: ti, body: b, bullets: true, size: 16, tsize: 20, pad: 16 }));
  const h = Math.max(...cards.map((c) => c.h)) + 96;
  let s = '';
  cols.forEach(([k, ti, b, f, e], i) => {
    const x = 30 + i * (w + 14);
    s += panel(x, Y, w, h, C.panel, e) + `<rect x="${x + 12}" y="${Y + 12}" width="${w - 24}" height="80" rx="10" fill="${f}"/>` + formIcon(x + w / 2, Y + 50, k, 1.2);
    s += card(x, Y + 84, w, { title: ti, body: b, bullets: true, size: 16, tsize: 20, pad: 16, fill: 'none', edge: 'none', tfill: e }).s.replace(/<rect[^>]*fill="none" stroke="none"[^>]*\/>/, '');
  });
  const n = note(Y + h + 18, 'The same discipline applies to all three forms; what changes is which features are worth noticing.');
  add('04-reading-by-form',
    svg(900, Math.round(Y + h + 18 + n.h + 24), 'What to notice in each form', s + n.s),
    'Three columns. Prose: narrative voice, pace, sentence shape and what is withheld. Poetry: speaker and situation, form, line endings and the turn. Drama: read it as performance, treat stage directions as evidence, follow dialogue rhythm and spot dramatic irony.',
    'The method stays the same; the features you look for change with the form.',
    '## Reading by form');
}

// 05 Worked example annotated
{
  const Y = 118;
  let s = '';
  const lines = [
    ['The letter came on a Tuesday, which was the day for bills.', 1],
    ['Asha left it on the hall table under the gas bill and the water bill', 2],
    ['and a leaflet about windows, and she made tea, and she drank the tea', 3],
    ['standing at the sink, and then she washed the cup, dried it, and put', 0],
    ['it away. Then she went back into the hall.', 4],
  ];
  const ph = 46 + lines.length * 36 + 14;
  s += panel(30, Y, 840, ph, C.panel, C.ink) + T(50, Y + 30, 'Original passage, written for the guide', { size: 15, weight: 700, fill: C.muted });
  lines.forEach(([l, b], i) => { s += T(96, Y + 70 + i * 36, l, { size: 18 }); if (b) s += badge(64, Y + 63 + i * 36, 14, String(b), C.mustard); });
  const notes = [
    ['“the day for bills”', 'Routine, expectation.'],
    ['Letter buried under bills', 'Avoidance.'],
    ['Long sentence, repeated “and”', 'Delay, ritual.'],
    ['Short final sentence', 'Return, decision.'],
    ['Contents never stated', 'Suspense.'],
  ];
  const y2 = Y + ph + 18;
  const w = (840 - 4 * 12) / 5;
  const hs = notes.map(([a, b]) => card(0, 0, w, { title: a, body: b, size: 16, tsize: 17, pad: 12 }).h);
  const H = Math.max(...hs) + 22;
  notes.forEach(([a, b], i) => {
    const x = 30 + i * (w + 12);
    s += card(x, y2 + 16, w, { title: a, body: b, size: 16, tsize: 17, pad: 12, kicker: ' ', minH: H + 8, fill: i === 4 ? C.cream : C.panel, edge: i === 4 ? C.olive : C.panelEdge }).s + badge(x + w / 2, y2 + 16, 15, i === 4 ? '?' : String(i + 1), i === 4 ? C.cream : C.mustard);
  });
  add('05-worked-example-annotation',
    svg(900, Math.round(y2 + H + 48), 'From passage to annotation', s),
    'The guide’s original passage about Asha and an unopened letter, with numbered notes. 1: Tuesday as the day for bills suggests routine. 2: the letter buried under bills suggests avoidance. 3: a long sentence of repeated “and” suggests delay and ritual. 4: the short final sentence suggests return and decision. A further note: the contents are never stated, creating suspense.',
    'Short annotations name the feature and its effect.',
    '## Worked example: from annotation to paragraph');
}

// 06 Technique to effect to meaning
{
  const Y = 120;
  let s = '';
  const chain = (y, a, b, c) => row(y, [
    { kicker: 'TECHNIQUE', body: a, fill: C.tealLight, edge: C.tealDark, bfill: C.ink },
    { kicker: 'EFFECT', body: b, bfill: C.ink },
    { kicker: 'MEANING', body: c, fill: C.cream, edge: C.olive, kfill: C.olive, bfill: C.ink },
  ], { arrows: true, gap: 40, card: { size: 16, pad: 14 } });
  const c1 = chain(Y, 'Polysyndeton in the list “the gas bill and the water bill and a leaflet about windows”', 'Mimics a pile growing as she tries to hide the letter', 'Dread shown through delay, beneath ordinary life');
  s += c1.s;
  const c2 = chain(Y + c1.h + 16, 'Long second sentence of small actions joined by “and”', 'The reader experiences tea-making as a ritual', 'A way of postponing the letter');
  s += c2.s;
  const y3 = Y + c1.h + 16 + c2.h + 16;
  const c3 = chain(y3, 'Short final sentence: “Then she went back into the hall”', 'Abrupt and decisive', 'The avoidance is over; suspense sharpens as the passage ends unopened');
  s += c3.s;
  const n = note(y3 + c3.h + 18, 'The paragraph treats the unknown contents of the letter as a deliberate choice, not a gap to fill with guesses.');
  s += n.s;
  add('06-technique-effect-meaning',
    svg(900, Math.round(y3 + c3.h + 18 + n.h + 24), 'Technique, then effect, then meaning', s),
    'Three chains from the model paragraph. Polysyndeton in the list of bills mimics a growing pile and shows dread through delay. The long sentence of small actions makes tea-making a ritual of postponement. The short final sentence is abrupt and decisive, ending the avoidance and sharpening suspense. The unknown contents are treated as a deliberate choice.',
    'Each point moves from technique to effect to meaning.',
    '## Worked example: from annotation to paragraph');
}

// 07 Structuring the essay
{
  const Y = 118;
  let s = '';
  s += T(30, Y + 6, 'Introductions for the Asha passage', { size: 20, weight: 700 });
  const w1 = card(90, Y + 22, 780, { kicker: 'WEAK: GUESSES BACKGROUND', body: '“This is probably from a novel about a family in the 1970s”', fill: C.panel, edge: C.rust, kfill: C.rust, bfill: C.ink, size: 17 });
  s += w1.s + cross(52, Y + 22 + w1.h / 2, 17);
  const y2 = Y + 22 + w1.h + 12;
  const w2 = card(90, y2, 780, { kicker: 'WEAK: ANNOUNCES A LIST', body: '“The writer uses lists, long sentences and short sentences”', fill: C.panel, edge: C.rust, kfill: C.rust, bfill: C.ink, size: 17 });
  s += w2.s + cross(52, y2 + w2.h / 2, 17);
  const y3 = y2 + w2.h + 12;
  const st = card(90, y3, 780, { kicker: 'STRONG: SITUATION AND ARGUMENT', body: '“In this passage a woman delays opening a letter, and the writer turns ordinary household routine into a means of postponing a crisis the reader is never shown.”', fill: C.cream, edge: C.tealDark, kfill: C.tealDark, bfill: C.ink, size: 17 });
  s += st.s + tick(52, y3 + st.h / 2, 17);
  const y4 = y3 + st.h + 28;
  s += T(30, y4 + 6, 'The essay’s shape', { size: 20, weight: 700 });
  const r = row(y4 + 22, [
    { title: 'Introduction', body: 'Two or three sentences: the situation and your thesis. No speculation about author or period.' },
    { title: 'Body', body: 'Follow the passage’s movement (opening, development, turn, ending) or organise by argument; tie each paragraph to the question.' },
    { title: 'Conclusion', body: 'A judgement on the whole passage, such as how its ending changes the way we read its beginning.', fill: C.cream, edge: C.olive },
  ], { arrows: true, gap: 40, card: { size: 16, tsize: 19, pad: 16 } });
  s += r.s;
  add('07-structuring-the-essay',
    svg(900, Math.round(y4 + 22 + r.h + 24), 'Structuring the unseen essay', s),
    'Two weak introductions are crossed out: one guesses the background and one announces a list of techniques. A strong introduction gives the situation and an argument: a woman delays opening a letter, and routine becomes a way of postponing an unseen crisis. Below: introduction with thesis, body following the passage’s movement or an argument, and a conclusion with a judgement on the whole passage.',
    'Open with the situation and an argument, never a guess or a list.',
    '## Structuring the essay');
}
