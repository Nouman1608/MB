import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-english-literature-9695-section-a-drama';
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


// ---- lesson extras ----
const AO = [
  ['AO1', 'Knowledge and understanding, with relevant context'],
  ['AO2', 'Analysis of the dramatist’s choices'],
  ['AO3', 'An informed personal response'],
  ['AO4', 'A structured, supported argument'],
];
// 01 Section A at a glance
{
  const fig = compose('Paper 1 Section A at a glance', [
    (y) => { const b = markBar(y + 26, [{ label: 'Section A: Drama', sub: '25 marks · one essay', value: 25, fill: C.mustard }, { label: 'Section B: Poetry', sub: '25 marks', value: 25, fill: C.tealLight }]); return { s: T(30, y + 14, 'Paper 1 · 50 marks', { size: 17, weight: 700, fill: C.muted }) + b.s, h: b.h + 26 }; },
    (y) => {
      const L = card(30, y, 380, { kicker: 'QUESTION (a)', title: 'Essay on the whole play', body: ['Nothing is printed.', 'Range across the play from memory.'], bullets: true, minH: 170 });
      const R = card(490, y, 380, { kicker: 'QUESTION (b)', title: 'Printed passage', body: ['Analyse the passage closely.', 'Relate it to the rest of the play.'], bullets: true, minH: 170, fill: C.cream, edge: C.olive, kfill: C.olive });
      const h = Math.max(L.h, R.h);
      return { s: L.s + R.s + `<circle cx="450" cy="${y + h / 2}" r="30" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + T(450, y + h / 2 + 7, 'or', { size: 20, weight: 700, anchor: 'middle' }), h };
    },
    (y) => label(y - 4, 'On each set play you choose one. Both need an essay-length answer.', { size: 17, fill: C.muted }),
    (y) => {
      let s = T(30, y + 18, 'Assessed on AO1 to AO4 only', { size: 19, weight: 700 });
      const r = row(y + 32, AO.map(([a, b]) => ({ title: a, body: b, align: 'middle', tfill: C.tealDark })), { gap: 14, card: { size: 16, tsize: 21, pad: 14 } });
      return { s: s + r.s, h: r.h + 32 };
    },
    (y) => note(y, 'You cannot take the play into the exam: know it well enough to refer to scenes and quote short phrases from memory.'),
  ]);
  add('01-section-a-at-a-glance', fig,
    'Paper 1 is worth 50 marks: Section A Drama is 25 marks for one essay and Section B Poetry the other 25. On each set play you choose question (a), an essay on the whole play with nothing printed, or question (b), a printed passage analysed closely and related to the rest of the play. Section A is assessed on AO1 to AO4 only, and the play cannot be taken into the exam.',
    'One essay worth 25 marks: choose the whole-play essay (a) or the passage question (b).',
    '## What the section asks of you');
}

// 02 Set plays 2026 and 2027
{
  const Y = 120;
  let s = '';
  // two overlapping lozenges
  s += `<rect x="30" y="${Y + 40}" width="560" height="300" rx="34" fill="${C.cream}" fill-opacity="0.75" stroke="${C.olive}" stroke-width="3"/>`;
  s += `<rect x="310" y="${Y + 40}" width="560" height="300" rx="34" fill="${C.teal}" fill-opacity="0.55" stroke="${C.tealDark}" stroke-width="3"/>`;
  s += T(170, Y + 26, '2026 examination', { size: 21, weight: 700, anchor: 'middle', fill: C.olive });
  s += T(730, Y + 26, '2027 examination', { size: 21, weight: 700, anchor: 'middle', fill: C.tealDark });
  const play = (x, y, author, title) => T(x, y, author, { size: 17, weight: 700, anchor: 'middle' }) + T(x, y + 24, title, { size: 17, anchor: 'middle', italic: true, fill: C.ink });
  const tl2 = (x, y, author, l1, l2) => T(x, y, author, { size: 17, weight: 700, anchor: 'middle' }) + T(x, y + 24, l1, { size: 17, anchor: 'middle', italic: true }) + T(x, y + 46, l2, { size: 17, anchor: 'middle', italic: true });
  s += T(170, Y + 82, '2026 only', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  s += tl2(170, Y + 130, 'Errol John', 'Moon on a', 'Rainbow Shawl');
  s += tl2(170, Y + 236, 'Webster', 'The Duchess', 'of Malfi');
  s += T(450, Y + 82, 'Kept for both years', { size: 16, weight: 700, anchor: 'middle', fill: C.ink });
  s += tl2(450, Y + 130, 'Albee', 'Who’s Afraid of', 'Virginia Woolf?');
  s += play(450, Y + 236, 'Shakespeare', 'The Tempest');
  s += T(730, Y + 82, 'Added for 2027', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += play(730, Y + 130, 'Aphra Behn', 'The Rover');
  s += tl2(730, Y + 236, 'Inua Ellams', 'Barber Shop', 'Chronicles');
  const n = note(Y + 364, 'Set texts change, so confirm the list for your own examination year.');
  s += n.s;
  add('02-set-plays-2026-2027',
    svg(900, Math.round(Y + 364 + n.h + 24), 'Section A set plays: 2026 and 2027', s),
    'Two overlapping lists of Section A plays. Albee’s Who’s Afraid of Virginia Woolf? and Shakespeare’s The Tempest are set for both 2026 and 2027. Errol John’s Moon on a Rainbow Shawl and Webster’s The Duchess of Malfi are set for 2026 only; Aphra Behn’s The Rover and Inua Ellams’s Barber Shop Chronicles are added for 2027.',
    'Two plays carry over from 2026 to 2027; check the list for your own year.',
    '## What the section asks of you');
}

// 03 A script is a set of instructions for performance
{
  const Y = 116;
  let s = '';
  // Left: novel
  s += panel(30, Y, 300, 420);
  s += T(180, Y + 40, 'A novel', { size: 22, weight: 700, anchor: 'middle' });
  s += `<path d="M110,${Y + 70} L180,${Y + 82} L250,${Y + 70} L250,${Y + 160} L180,${Y + 172} L110,${Y + 160} Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/><line x1="180" y1="${Y + 82}" x2="180" y2="${Y + 172}" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += arrow(180, Y + 182, 180, Y + 222, { w: 3 });
  s += speech(85, Y + 228, 190, 50, C.tealLight) + T(180, Y + 260, 'Narrator', { size: 18, weight: 700, anchor: 'middle' });
  s += arrow(180, Y + 300, 180, Y + 336, { w: 3 });
  s += T(180, Y + 362, 'tells the reader', { size: 17, anchor: 'middle', fill: C.muted });
  s += T(180, Y + 386, 'what to think', { size: 17, anchor: 'middle', fill: C.muted });
  // Right: play
  const X = 360, W = 510;
  s += panel(X, Y, W, 420, C.panel, C.tealDark);
  s += T(X + W / 2, Y + 40, 'A play: no narrator', { size: 22, weight: 700, anchor: 'middle', fill: C.tealDark });
  // stage box
  const sx = X + 40, sy = Y + 66, sw = W - 80, sh = 170;
  s += `<rect x="${sx}" y="${sy}" width="${sw}" height="${sh}" fill="${C.sand}" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += `<path d="M${sx},${sy} L${sx + 40},${sy + 30} L${sx + sw - 40},${sy + 30} L${sx + sw},${sy}" fill="none" stroke="${C.rockDark}" stroke-width="2"/>`;
  // light beam
  s += `<path d="M${sx + sw - 70},${sy + 2} L${sx + sw - 150},${sy + sh - 8} L${sx + sw - 30},${sy + sh - 8} Z" fill="${C.cream}" opacity="0.9"/>`;
  s += pawn(sx + 120, sy + sh - 10, C.teal) + pawn(sx + sw - 90, sy + sh - 10, C.mustard);
  s += `<rect x="${sx + 195}" y="${sy + sh - 46}" width="48" height="36" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += speech(sx + 20, sy + 40, 80, 34) + T(sx + 60, sy + 63, '“…”', { size: 18, weight: 700, anchor: 'middle' });
  s += arrow(sx + 150, sy + sh - 40, sx + 180, sy + sh - 40, { w: 2.5, color: C.tealDark, marker: 'ahT' });
  // channels
  const ch = ['speech', 'silence', 'movement', 'objects', 'light', 'sound', 'order of scenes'];
  let cx = X + 28, cy = sy + sh + 20; let chips = '';
  ch.forEach((c) => { const k = chip(0, 0, c, { size: 15, fill: C.tealLight, edge: C.tealDark }); if (cx + k.w > X + W - 20) { cx = X + 28; cy += 40; } chips += chip(cx, cy, c, { size: 15, fill: C.tealLight, edge: C.tealDark }).s; cx += k.w + 8; });
  s += chips;
  s += T(X + 70, Y + 395, 'The audience', { size: 17, weight: 700 }) + eye(X + 222, Y + 389, 1) + T(X + 252, Y + 395, 'sees', { size: 17, weight: 700, fill: C.tealDark });
  s += ear(X + 320, Y + 389, 1) + T(X + 345, Y + 395, 'and hears', { size: 17, weight: 700, fill: C.tealDark });
  const n = note(Y + 440, 'These are the dramatist’s choices. AO2 asks you to analyse a writer’s choices of language, form and structure, so keep the stage in view.');
  s += n.s;
  add('03-script-as-performance',
    svg(900, Math.round(Y + 440 + n.h + 24), 'A script is a set of instructions for performance', s),
    'A novel passes meaning through a narrator who tells the reader what to think. A play has no narrator: meaning reaches the audience through what they see and hear on stage, namely speech, silence, movement, objects, light, sound and the order of scenes.',
    'With no narrator, a play’s meaning is carried by what the audience sees and hears.',
    '## The key idea: a script is a set of instructions for performance');
}

// 04 Three things to read in a script
{
  const fig = compose('Reading a script as theatre', [
    (y) => row(y, [
      { kicker: 'LANGUAGE', title: 'What is the line doing?', body: ['Verse or prose: a shift, or a broken verse line, can mark status, mood or self-control.', 'Interruption and overlap: who controls the turn-taking?', 'Subtext: the gap between what is said and what is meant.'], bullets: true },
      { kicker: 'THE VISUAL STAGE', title: 'Stage directions are evidence', body: ['A pause, an exit, a prop that changes hands.', 'Embedded directions in the lines: “kneel”, “look here”, “who comes?”', 'A silent onlooker makes a private exchange public.'], bullets: true, fill: C.cream, edge: C.olive, kfill: C.olive },
      { kicker: 'STRUCTURE', title: 'Order and knowledge', body: ['Dramatic irony: the audience knows more.', 'Juxtaposed scenes shape how we judge both.', 'Pace: short exchanges speed up, long speeches slow down.', 'What is the audience left looking at?'], bullets: true },
    ], { gap: 16, vcenter: false, card: { size: 16, tsize: 19, pad: 16 } }),
    (y) => card(30, y, 840, { kicker: 'GENRE AND CONTEXT (AO1)', title: 'The most useful contexts are often theatrical', body: 'Revenge tragedy, romance or naturalism, and the stage the play was written for. Explain why a dramatist uses a convention, or breaks it: that is worth more than a paragraph of historical background.', fill: C.tealLight, edge: C.tealDark, size: 17 }),
  ]);
  add('04-reading-a-script', fig,
    'Three columns. Language: verse and prose shifts, interruption and overlap, and subtext. The visual stage: stage directions such as pauses, exits and props, embedded directions in the lines, and silent onlookers. Structure: dramatic irony, juxtaposed scenes, pace, and what the audience is left looking at. Below, a band on theatrical context: conventions of revenge tragedy, romance or naturalism and the original stage.',
    'Read dialogue, staging and structure together, and tie context to a dramatic choice.',
    '## The key idea: a script is a set of instructions for performance');
}

// 05 Writing the (b) passage answer
{
  const Y = 130;
  let s = T(30, Y - 6, 'The whole play', { size: 17, weight: 700, fill: C.muted });
  const n = 10, x0 = 30, W = 840, bw = W / n, by = Y + 60, bh = 54;
  const marks = { 1: 'echo', 6: 'contrast', 9: 'reversal' };
  for (let i = 0; i < n; i++) {
    const hot = i === 4;
    s += `<rect x="${x0 + i * bw}" y="${by}" width="${bw}" height="${bh}" fill="${hot ? C.mustard : (marks[i] ? C.teal : C.tealLight)}" stroke="${C.ink}" stroke-width="2.5"/>`;
  }
  s += T(x0 + 4.5 * bw, by + 34, 'passage', { size: 16, weight: 700, anchor: 'middle' });
  Object.entries(marks).forEach(([i, lab]) => {
    const cx = x0 + (Number(i) + 0.5) * bw, px = x0 + 4.5 * bw;
    s += `<path d="M${px},${by - 4} Q${(px + cx) / 2},${by - ({1: 60, 6: 34, 9: 92})[i]} ${cx},${by - 6}" fill="none" stroke="${C.tealDark}" stroke-width="3" stroke-dasharray="7 6" marker-end="url(#ahT)"/>`;
    s += T(cx, by + bh + 26, lab, { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  });
  s += T(870, Y - 6, 'look outward two or three times', { size: 16, weight: 600, anchor: 'end', fill: C.tealDark });
  const st = steps(by + bh + 50, [
    { title: 'Place it', body: 'In one or two sentences: where the passage falls and what the audience knows at this point. This sets up dramatic irony and shows AO1 without retelling the plot.' },
    { title: 'Find its dramatic function', body: 'Does it turn the action, reveal a character, build tension or release it? This becomes your thesis.' },
    { title: 'Move through it purposefully', body: 'Follow the passage’s own shape: how it opens, where it shifts, how it ends. Do not list techniques in any order.' },
    { title: 'Look outward', body: 'Two or three times, connect a detail to another moment in the play: an echo, a contrast, a reversal.' },
  ], { gap: 10, size: 16, tsize: 19, highlight: 1 });
  s += st.s;
  add('05-passage-answer-method',
    svg(900, Math.round(by + bh + 50 + st.h + 24), 'The (b) passage answer in four moves', s),
    'A bar of the whole play with the passage highlighted and dashed arrows to three other moments marked echo, contrast and reversal. Four numbered steps: place the passage, find its dramatic function as your thesis, move through it following its shape, and look outward to other moments two or three times.',
    'The passage is the evidence; your knowledge of the whole play is the frame.',
    '## Writing the (b) passage answer');
}

// 06 Annotated model extract
{
  const Y = 120;
  let s = '';
  const px = 30, pw = 840, ph = 252;
  s += panel(px, Y, pw, ph, C.panel, C.ink);
  s += T(px + 20, Y + 30, 'Original extract, written for the guide', { size: 15, weight: 700, fill: C.muted });
  const L1 = Y + 70, L1b = Y + 104, L2 = Y + 148, L3 = Y + 192;
  const xT = px + 124, sd = '(setting down two cups, then moving one away from his side of the table)';
  const hl = (x, y, str, fill, o = {}) => { const w = cw(o.size ?? 18, 400) * str.length * (o.italic ? 0.97 : 1) + 10; return { s: `<rect x="${x - 5}" y="${y - 22}" width="${w}" height="31" rx="5" fill="${fill}"/>` + T(x, y, str, { size: 18, ...o }), w, end: x - 5 + w }; };
  s += T(px + 24, L1, 'HELEN:', { size: 18, weight: 700 });
  const h1 = hl(xT, L1, sd, C.cream, { size: 17, italic: true, fill: C.olive }); s += h1.s;
  s += T(xT, L1b, 'You’re early.', { size: 18 });
  s += T(px + 24, L2, 'MARCUS:', { size: 18, weight: 700 }) + T(xT, L2, 'The train was early.', { size: 18 });
  s += T(px + 24, L3, 'HELEN:', { size: 18, weight: 700 });
  const h2 = hl(xT, L3, 'Trains are never early.', C.teal); s += h2.s;
  const h3 = hl(h2.end + 16, L3, '(Pause.)', C.tealLight, { italic: true }); s += h3.s;
  s += T(h3.end + 14, L3, 'Sit down,', { size: 18 });
  const x4 = h3.end + 14 + cw(18) * 9 + 14;
  const h4 = hl(x4, L3, 'if you’re staying.', '#f6e3d6'); s += h4.s;
  const bdg = [[h1.end + 22, L1 - 7, '1'], [(xT + h2.end) / 2, L3 + 26, '2'], [(h2.end + 16 + h3.end) / 2, L3 + 26, '3'], [(x4 + h4.end) / 2, L3 + 26, '4']];
  bdg.forEach(([x, y, n]) => { s += badge(x, y, 14, n, C.mustard); });
  const A = [
    ['Staged before it is spoken', 'The audience watches her withdraw a welcome she had prepared: a reversal that needs no dialogue.', C.cream, C.olive],
    ['A flat contradiction', '“Trains are never early” contradicts him outright.', C.teal, C.tealDark],
    ['What is left unsaid', 'The pause lets the accusation hang without being named.', C.tealLight, C.tealDark],
    ['An invitation turned challenge', 'The conditional “if you’re staying” places the decision, and the blame, on him.', '#f6e3d6', C.rust],
  ];
  const cy0 = Y + ph + 22, cwid = 412;
  let rowH = [0, 0];
  const cards = A.map(([ti, b, f, e], i) => card(0, 0, cwid - 46, { title: ti, body: b, size: 16, tsize: 18, pad: 14 }));
  rowH = [Math.max(cards[0].h, cards[1].h), Math.max(cards[2].h, cards[3].h)];
  A.forEach(([ti, b, f, e], i) => {
    const col = i % 2, r = Math.floor(i / 2), x = 30 + col * (cwid + 16), y = cy0 + (r ? rowH[0] + 14 : 0);
    s += card(x + 46, y, cwid - 46, { title: ti, body: b, size: 16, tsize: 18, pad: 14, minH: rowH[r], edge: e, tfill: e }).s;
    s += badge(x + 20, y + rowH[r] / 2, 17, String(i + 1), C.mustard);
  });
  const endY = cy0 + rowH[0] + rowH[1] + 14;
  const n = note(endY + 18, 'The paragraph quotes a stage direction as evidence, explains the effect on an audience, notices what is left unsaid and ends on an interpretation. A real answer would then link the moment to a later scene.');
  s += n.s;
  add('06-annotated-model-extract',
    svg(900, Math.round(endY + 18 + n.h + 24), 'Reading the model extract as theatre', s),
    'The guide’s original three-line extract with four numbered highlights. 1: Helen moves a cup away from Marcus, withdrawing a welcome without dialogue. 2: “Trains are never early” flatly contradicts him. 3: the pause lets the accusation hang unspoken. 4: “if you’re staying” turns an invitation into a challenge that places the blame on him.',
    'A stage direction, a contradiction, a pause and a conditional carry the scene’s tension.',
    '## Writing the (b) passage answer');
}

// 07 Writing the (a) essay
{
  const Y = 126;
  let s = '';
  s += T(30, Y, 'The whole play', { size: 17, weight: 700, fill: C.muted });
  const x0 = 30, W = 840, by = Y + 18, bh = 50;
  s += `<rect x="${x0}" y="${by}" width="${W}" height="${bh}" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>`;
  ['opening', 'middle', 'later', 'ending'].forEach((lab, i) => {
    const cx = x0 + [0.1, 0.4, 0.68, 0.92][i] * W;
    s += `<rect x="${cx - 38}" y="${by}" width="76" height="${bh}" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += T(cx, by + bh + 26, lab, { size: 16, weight: 700, anchor: 'middle' });
  });
  // development line
  const gy = by + bh + 120;
  const pts = [[0.1, 0], [0.4, -26], [0.68, -40], [0.92, -76]].map(([f, d]) => [x0 + f * W, gy + d]);
  s += path(`M${pts.map((p) => p.join(',')).join(' L')}`, { stroke: C.tealDark, w: 4 });
  pts.forEach(([x, y]) => { s += `<line x1="${x}" y1="${by + bh + 36}" x2="${x}" y2="${y - 10}" stroke="${C.panelEdge}" stroke-width="2.5" stroke-dasharray="5 5"/>`; });
  pts.forEach(([x, y]) => { s += `<circle cx="${x}" cy="${y}" r="8" fill="${C.tealDark}"/>`; });
  s += T(x0 + 0.25 * W, gy + 30, 'Track change: the focus develops', { size: 17, weight: 700, fill: C.tealDark, anchor: 'middle' });
  const st = steps(gy + 56, [
    { title: 'Thesis first', body: 'Answer the question in your opening paragraph with a clear, arguable claim.' },
    { title: 'Choose three or four moments', body: 'From different parts of the play, including the ending. Range shows AO1; selection shows judgement.' },
    { title: 'Analyse each moment as theatre', body: 'Short, precise quotations and references to staging.' },
    { title: 'Track change', body: 'Show how the focus develops, so the essay has a direction rather than a list of examples.' },
  ], { gap: 10, size: 16, tsize: 19 });
  s += st.s;
  add('07-whole-play-essay',
    svg(900, Math.round(gy + 56 + st.h + 24), 'The (a) essay: range and direction', s),
    'A bar of the whole play with four chosen moments at the opening, middle, later and ending, and a rising line showing the focus developing across them. Four steps: thesis first, choose three or four moments including the ending, analyse each as theatre, and track change.',
    'Pick moments from across the play, ending included, and show how the focus develops.',
    '## Writing the (a) essay');
}

// 08 Command words
{
  const fig = compose('Reading the question’s command words', [
    (y) => row(y, [
      { title: 'discuss', body: 'Write about an issue in depth in a structured way.', align: 'middle' },
      { title: 'analyse', body: 'Examine in detail to show meaning and the relationship between elements.', align: 'middle' },
      { title: 'comment', body: 'Give an informed opinion.', align: 'middle' },
    ], { gap: 16, card: { size: 16, tsize: 21, tfill: C.tealDark } }),
    (y) => {
      const L = card(30, y, 412, { kicker: '“HOW FAR…?”', title: 'Needs a judgement', body: 'Say to what extent you agree, then qualify it.', fill: C.cream, edge: C.olive, kfill: C.olive, size: 17 });
      const R = card(458, y, 412, { kicker: '“IN WHAT WAYS…?”', title: 'Needs a range of methods', body: 'Cover these, not just one.', size: 17 });
      const h = Math.max(L.h, R.h) + 96;
      let s = card(30, y, 412, { kicker: '“HOW FAR…?”', title: 'Needs a judgement', body: 'Say to what extent you agree, then qualify it.', fill: C.cream, edge: C.olive, kfill: C.olive, size: 17, minH: h }).s +
        card(458, y, 412, { kicker: '“IN WHAT WAYS…?”', title: 'Needs a range of methods', body: 'Cover these, not just one.', size: 17, minH: h }).s;
      // scale for judgement
      const ly = y + h - 58;
      s += `<line x1="70" y1="${ly}" x2="402" y2="${ly}" stroke="${C.ink}" stroke-width="3.5" marker-start="url(#ah)" marker-end="url(#ah)"/>`;
      s += T(70, ly + 34, 'not at all', { size: 15, fill: C.muted }) + T(402, ly + 34, 'entirely', { size: 15, fill: C.muted, anchor: 'end' });
      s += `<circle cx="310" cy="${ly}" r="11" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + T(310, ly - 20, 'your position', { size: 15, weight: 700, anchor: 'middle', fill: C.olive });
      // chips for methods
      let cx = 482; const cy = y + h - 76;
      ['language', 'staging', 'structure'].forEach((m) => { const c = chip(cx, cy, m, { size: 17, fill: C.tealLight, edge: C.tealDark }); s += c.s; cx += c.w + 12; });
      return { s, h };
    },
  ]);
  add('08-command-words', fig,
    'Three command words: discuss means write about an issue in depth in a structured way, analyse means examine in detail to show meaning and the relationship between elements, and comment means give an informed opinion. “How far” questions need a judgement placed on a scale and then qualified; “In what ways” questions need a range of methods: language, staging and structure.',
    '“How far” wants a qualified judgement; “in what ways” wants a range of methods.',
    '## Command words in Section A questions');
}
