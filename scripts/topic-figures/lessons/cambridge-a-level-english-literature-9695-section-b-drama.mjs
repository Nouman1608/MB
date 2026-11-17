import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-english-literature-9695-section-b-drama';
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
const ital = (x, y, pre, it, post = '', o = {}) => `<text x="${x}" y="${y}" font-size="${o.size ?? 18}" font-weight="${o.weight ?? 400}" fill="${o.fill ?? C.ink}" text-anchor="${o.anchor ?? 'start'}">${X(pre)}<tspan font-style="italic">${X(it)}</tspan>${X(post)}</text>`;

// 01 Section B at a glance
{
  const fig = compose('Paper 3 Section B at a glance', [
    (y) => { const b = markBar(y + 26, [{ label: 'Section A: Shakespeare', sub: '25 marks', value: 25, fill: C.tealLight }, { label: 'Section B: Drama', sub: '25 marks · one essay', value: 25, fill: C.mustard }]); return { s: T(30, y + 14, 'Paper 3 · 50 marks', { size: 17, weight: 700, fill: C.muted }) + b.s, h: b.h + 26 }; },
    (y) => {
      let s = T(30, y + 18, 'Like Section A: AO1 to AO5, each 20%', { size: 19, weight: 700 });
      const w = 840 / 5;
      for (let i = 0; i < 5; i++) {
        const x = 30 + i * w, f = i === 4 ? C.mustard : (i % 2 ? C.tealLight : C.panel);
        s += `<rect x="${x}" y="${y + 34}" width="${w}" height="66" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x + w / 2, y + 62, `AO${i + 1}`, { size: 20, weight: 700, anchor: 'middle' }) + T(x + w / 2, y + 88, '20%', { size: 17, anchor: 'middle' });
      }
      return { s, h: 104 };
    },
    (y) => {
      const o = { minH: 106, size: 17 };
      const L = card(30, y, 380, { kicker: 'QUESTION (a)', title: 'Essay on the whole play', ...o });
      const R = card(490, y, 380, { kicker: 'QUESTION (b)', title: 'A passage from the play, printed on the paper', ...o, fill: C.cream, edge: C.olive, kfill: C.olive });
      const h = Math.max(L.h, R.h);
      return { s: L.s + R.s + `<circle cx="450" cy="${y + h / 2}" r="30" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + T(450, y + h / 2 + 7, 'or', { size: 20, weight: 700, anchor: 'middle' }), h };
    },
    (y) => note(y, 'One non-Shakespeare set play, all of them modern. The play is not allowed in the exam room.'),
  ]);
  add('01-section-b-at-a-glance', fig,
    'Paper 3 is worth 50 marks, split equally between Section A Shakespeare and Section B Drama at 25 marks each. Section B is one essay on a modern non-Shakespeare play, assessed like Section A on AO1 to AO5 at 20% each. You choose an (a) essay on the whole play or a (b) printed passage, and the play is not allowed in the exam room.',
    'One essay on a modern play, worth 25 marks and assessed on all five objectives.',
    '## What the section asks of you');
}

// 02 Set plays
{
  const Y = 120;
  const v = venn(Y, '2026 examination', '2027 examination', [
    { head: '2026 only', items: [['Eugene O’Neill', ['Long Day’s Journey', 'Into Night']]] },
    { head: 'Both years', items: [['Lynn Nottage', ['Sweat']], ['Wole Soyinka', ['Kongi’s Harvest']]] },
    { head: '2027 only', items: [['Timberlake Wertenbaker', ['Our Country’s Good']]] },
  ], { h: 230, itemGap: 30 });
  const n = note(Y + v.h + 24, 'Check the list for your examination year.');
  add('02-set-plays-2026-2027',
    svg(900, Math.round(Y + v.h + 24 + n.h + 24), 'Section B set plays: 2026 and 2027', v.s + n.s),
    'Two overlapping lists of Section B plays. Nottage’s Sweat and Soyinka’s Kongi’s Harvest are set in both 2026 and 2027. O’Neill’s Long Day’s Journey Into Night is 2026 only, and Wertenbaker’s Our Country’s Good is 2027 only.',
    'Sweat and Kongi’s Harvest carry over; one play changes.',
    '## What the section asks of you');
}

// 03 How this differs from Paper 1
{
  const Y = 118;
  let s = '';
  s += panel(30, Y, 840, 150, C.tealLight, C.tealDark);
  s += T(50, Y + 38, 'Still applies from Paper 1 drama', { size: 20, weight: 700, fill: C.tealDark });
  let x = 50; ['stage directions as evidence', 'dialogue rhythm', 'dramatic irony', 'structure'].forEach((c, i) => { const k = chip(0, 0, c, { size: 17 }); if (x + k.w > 850) x = 50; s += chip(x, Y + 58 + (i > 2 ? 0 : 0), c, { size: 17, fill: C.panel, edge: C.tealDark }).s; x += k.w + 12; });
  s += T(50, Y + 128, 'The close-reading skills carry over.', { size: 17, fill: C.muted });
  s += T(450, Y + 196, 'Two things change', { size: 20, weight: 700, anchor: 'middle' });
  s += arrow(300, Y + 168, 230, Y + 206, { w: 3 }) + arrow(600, Y + 168, 670, Y + 206, { w: 3 });
  const r = row(Y + 216, [
    { kicker: 'CHANGE 1', title: 'AO5', body: 'Your argument must engage with and evaluate other interpretations.', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'CHANGE 2', title: 'Modern theatrical methods', body: 'Knowing the conventions the plays use or resist is part of AO1 and AO2.' },
  ], { gap: 20, card: { size: 17, tsize: 21 } });
  s += r.s;
  add('03-differs-from-paper-1',
    svg(900, Math.round(Y + 216 + r.h + 24), 'How this differs from Paper 1 drama', s),
    'The close-reading skills from Paper 1 still apply: stage directions as evidence, dialogue rhythm, dramatic irony and structure. Two things change: AO5 requires the argument to engage with and evaluate other interpretations, and knowing the modern theatrical conventions the plays use or resist becomes part of AO1 and AO2.',
    'Same close reading, plus AO5 and modern theatrical conventions.',
    '## How this differs from Paper 1 drama');
}

// 04 Four modern methods
{
  const Y = 116;
  const iconH = 96;
  const items = [
    { k: 'NATURALISM', p: 'Long Day’s Journey Into Night', b: 'Life as it is lived. Long stage directions describe appearance and inner states. Where it strains, the fog and foghorn work symbolically too.', f: C.tealLight, e: C.tealDark },
    { k: 'TIME AND STRUCTURE', p: 'Sweat', b: 'Moves between 2000 and 2008, so consequences come before causes: structural dramatic irony.', f: C.cream, e: C.olive },
    { k: 'RITUAL AND MUSIC', p: 'Kongi’s Harvest', b: 'Song, dance, ritual and crowd scenes as dramatic language; satire through exaggeration and contrast between the regime and traditional authority.', f: '#f6e3d6', e: C.rust },
    { k: 'METATHEATRE', p: 'Our Country’s Good', b: 'Convicts and officers rehearse a play. Doubling roles across convicts and officers sharpens questions of class and power.', f: C.tealLight, e: C.tealDark },
  ];
  const cwid = 412;
  const cards = items.map((it) => card(0, 0, cwid, { kicker: it.k, body: it.b, size: 16, pad: 18 }));
  const h = Math.max(...cards.map((c) => c.h)) + iconH + 34;
  let s = '';
  items.forEach((it, i) => {
    const x = 30 + (i % 2) * (cwid + 16), y = Y + Math.floor(i / 2) * (h + 16);
    s += panel(x, y, cwid, h);
    s += `<rect x="${x + 12}" y="${y + 12}" width="${cwid - 24}" height="${iconH}" rx="10" fill="${it.f}"/>`;
    const cx = x + cwid / 2, cy = y + 12 + iconH / 2;
    if (i === 0) { // room with fog
      s += `<rect x="${cx - 110}" y="${cy - 22}" width="140" height="62" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + `<path d="M${cx - 110},${cy - 22} L${cx - 40},${cy - 42} L${cx + 30},${cy - 22}" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`;
      [0, 1, 2].forEach((k) => { s += path(`M${cx + 40},${cy - 22 + k * 20} q20,-10 40,0 t40,0 t30,0`, { stroke: C.muted, w: 3 + k }); });
      [-90, -64, -38, -12].forEach((dx) => { s += pawn(cx + dx, cy + 36, C.teal, 0.4); });
    } else if (i === 1) { // timeline 2000 / 2008
      const pts = [['2008', -120], ['2000', -40], ['2000', 40], ['2000', 120]];
      
      pts.forEach(([yr, dx]) => { const late = yr === '2008'; s += `<rect x="${cx + dx - 28}" y="${cy - 30 + (late ? 0 : 18)}" width="56" height="32" rx="6" fill="${late ? C.mustard : C.panel}" stroke="${C.ink}" stroke-width="2"/>` + T(cx + dx, cy - 9 + (late ? 0 : 18), yr, { size: 15, weight: 700, anchor: 'middle' }); });
      s += T(cx, cy + 40, 'outcome first (schematic)', { size: 15, anchor: 'middle', fill: C.muted });
    } else if (i === 2) { // crowd and drum
      [-120, -80, -40, 0, 40].forEach((dx, k) => { s += pawn(cx + dx, cy + 36, k === 2 ? C.mustard : C.cream, 0.5); });
      s += `<ellipse cx="${cx + 110}" cy="${cy + 6}" rx="26" ry="10" fill="${C.rust}" stroke="${C.ink}" stroke-width="2"/><path d="M${cx + 84},${cy + 6} L${cx + 84},${cy + 30} Q${cx + 110},${cy + 42} ${cx + 136},${cy + 30} L${cx + 136},${cy + 6}" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>`;
      s += T(cx + 152, cy - 14, '♪', { size: 26, weight: 700, fill: C.rust });
    } else { // stage within stage
      s += `<rect x="${cx - 130}" y="${cy - 38}" width="260" height="76" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + `<rect x="${cx - 70}" y="${cy - 24}" width="140" height="50" fill="${C.sand}" stroke="${C.ink}" stroke-width="2" stroke-dasharray="6 4"/>`;
      s += pawn(cx - 30, cy + 22, C.teal, 0.36) + pawn(cx + 30, cy + 22, C.mustard, 0.36) + pawn(cx - 102, cy + 34, C.teal, 0.42) + pawn(cx + 102, cy + 34, C.mustard, 0.42);
      s += T(cx, cy - 28 + 0, '', {});
    }
    s += T(x + 18, y + iconH + 44, it.k, { size: 15, weight: 700, fill: it.e });
    s += T(x + 18, y + iconH + 68, it.p, { size: 19, weight: 700, italic: true });
    s += para(x + 18, y + iconH + 96, it.b, cwid - 36, { size: 16, fill: C.muted }).s;
  });
  const ny = Y + 2 * h + 32;
  const n = note(ny, 'Setting and space: a single bar, a family living room, a palace courtyard. The set defines who can meet whom: who enters, who is excluded, and which objects carry meaning across the play.');
  add('04-modern-theatrical-methods',
    svg(900, Math.round(ny + n.h + 24), 'Modern theatrical methods in the set plays', s + n.s),
    'Four cards. Naturalism in Long Day’s Journey Into Night: life as lived, long stage directions, and fog that becomes symbolic. Time and structure in Sweat: scenes move between 2000 and 2008, creating structural dramatic irony. Ritual and music in Kongi’s Harvest: song, dance and crowd scenes, with satire. Metatheatre in Our Country’s Good: convicts and officers rehearse a play, and doubling sharpens class and power. A note on setting and space follows.',
    'Each set play uses, or resists, a different theatrical convention.',
    '## Modern theatrical methods');
}

// 05 Two ways to shape time
{
  const Y = 120;
  let s = '';
  s += ital(30, Y + 6, '', 'Long Day’s Journey Into Night', ': one day in August 1912', { size: 20, weight: 700 });
  const x0 = 30, W = 840, by = Y + 26;
  const fogs = ['#ffffff', '#e8edee', '#d3dcde', '#b9c6c9'];
  for (let i = 0; i < 4; i++) {
    s += `<rect x="${x0 + i * W / 4}" y="${by}" width="${W / 4}" height="70" fill="${fogs[i]}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x0 + i * W / 4 + W / 8, by + 42, `Act ${['1', '2', '3', '4'][i]}`, { size: 18, weight: 700, anchor: 'middle' });
  }
  s += `<line x1="${x0}" y1="${by + 96}" x2="${x0 + W}" y2="${by + 96}" stroke="${C.ink}" stroke-width="3" marker-end="url(#ah)"/>` + T(x0, by + 122, 'morning', { size: 16, weight: 700 }) + T(x0 + W, by + 122, 'midnight', { size: 16, weight: 700, anchor: 'end' });
  s += T(450, by + 122, 'one family, one house; the fog thickens', { size: 16, anchor: 'middle', fill: C.muted });
  const y2 = by + 170;
  s += ital(30, y2, '', 'Sweat', ': moves between 2000 and 2008', { size: 20, weight: 700 });
  const lanes = [['2008', y2 + 30, C.mustard], ['2000', y2 + 100, C.tealLight]];
  lanes.forEach(([yr, ly, f]) => { s += `<rect x="30" y="${ly}" width="840" height="56" rx="8" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2"/>` + T(48, ly + 35, yr, { size: 18, weight: 700, fill: C.muted }); });
  const seq = [0, 1, 1, 1, 1, 1]; // schematic: outcome shown first
  let px = null, py = null;
  seq.forEach((lane, i) => {
    const x = 150 + i * 120, ly = lanes[lane][1];
    s += `<rect x="${x}" y="${ly + 8}" width="70" height="40" rx="6" fill="${lanes[lane][2]}" stroke="${C.ink}" stroke-width="2"/>`;
    if (px !== null) s += `<line x1="${px + 70}" y1="${py + 28}" x2="${x}" y2="${ly + 28}" stroke="${C.ink}" stroke-width="2" stroke-dasharray="5 4"/>`;
    px = x; py = ly + 8;
  });
  s += `<path d="M255,${y2 + 58} C420,${y2 + 58} 520,${y2 + 58} 760,${y2 + 104}" fill="none" stroke="${C.olive}" stroke-width="3" stroke-dasharray="8 5" marker-end="url(#ahO)"/>` + T(530, y2 + 52, 'what we already know shadows each earlier scene', { size: 15, weight: 700, anchor: 'middle', fill: C.olive }) + T(870, y2 + 182, 'order of scenes shown schematically', { size: 15, anchor: 'end', fill: C.muted });
  const n = note(y2 + 196, 'Seeing consequences before causes means every earlier scene is watched with structural dramatic irony. Ask what the play gains by revealing outcomes first, and how the final scenes reshape the opening.');
  s += n.s;
  add('05-two-ways-to-shape-time',
    svg(900, Math.round(y2 + 196 + n.h + 24), 'Two ways to shape stage time', s),
    'Top: Long Day’s Journey Into Night as four acts running from morning to midnight on one day in August 1912, with the fog thickening across them. Bottom: Sweat drawn as scenes moving between a 2008 lane and a 2000 lane, so the audience sees consequences before causes and watches earlier scenes with structural dramatic irony.',
    'One play runs straight through a day; the other shows outcomes first.',
    '## Modern theatrical methods');
}

// 06 Building AO5 for modern plays
{
  const Y = 118;
  const fig = compose('Building AO5 for modern plays', [
    (y) => row(y, [
      { kicker: 'SOURCE 1', title: 'Production choices', body: ['Casting, design, doubling, cuts.', 'How a staging changes a scene’s meaning.'], bullets: true },
      { kicker: 'SOURCE 2', title: 'Critical approaches', body: ['Marxist or economic: Sweat', 'Postcolonial: Kongi’s Harvest', 'Feminist: Mary Tyrone', 'Does Our Country’s Good celebrate theatre too optimistically?'], bullets: true, fill: C.cream, edge: C.olive, kfill: C.olive },
      { kicker: 'SOURCE 3', title: 'Audience positions', body: ['The first audience and audiences now.', 'Audiences in different countries.'], bullets: true },
    ], { gap: 14, vcenter: false, card: { size: 16, tsize: 19, pad: 16 } }),
    (y) => ({ s: arrow(450, y - 8, 450, y + 22, { w: 3.5 }), h: 14 }),
    (y) => card(30, y, 840, { title: 'Weigh the reading, do not just list it', body: 'Alternative readings mentioned but not weighed are a common mistake.', fill: C.tealLight, edge: C.tealDark, align: 'middle', size: 17, tsize: 20 }),
  ]);
  add('06-building-ao5', fig,
    'Three sources of alternative readings for modern plays. Production choices: casting, design, doubling and cuts. Critical approaches: a Marxist or economic reading of Sweat, a postcolonial reading of Kongi’s Harvest, a feminist reading of Mary Tyrone, and a reading questioning whether Our Country’s Good is too optimistic about theatre. Audience positions: first audiences and audiences now or in different countries. Each reading must be weighed, not listed.',
    'Production, criticism and audience all supply readings to weigh.',
    '## Building AO5 for modern plays');
}

// 07 Model paragraph: blame in Long Day's Journey
{
  const Y = 118;
  let s = '';
  const top = card(30, Y, 840, { kicker: 'STRUCTURE (AO2)', title: 'Blame circulates and never settles', body: 'Long confessional speeches are shared among all four Tyrones; each explains, but does not excuse, the harm done.', fill: C.tealLight, edge: C.tealDark, size: 17 });
  s += top.s;
  const y1 = Y + top.h + 34;
  const r = row(y1, [
    { kicker: 'READING 1', title: 'Mary as centre and victim', body: 'The men’s failures orbit her addiction.' },
    { kicker: 'READING 2: FEMINIST', title: 'The house as her prison', body: 'The house she insists has never been a real home.' },
  ], { gap: 20, card: { size: 16, tsize: 19 } });
  s += T(30, y1 - 4, '', {}) + r.s;
  const y2 = y1 + r.h + 34;
  const test = card(30, y2, 840, { kicker: 'TESTED AGAINST THE TEXT (AO5)', title: 'The structure resists any single centre', body: 'The final act gives the longest confessions to the men, and Mary enters only at the end, lost in the past.', fill: C.panel, edge: C.ink, size: 17 });
  s += test.s;
  const y3 = y2 + test.h + 34;
  const j = card(30, y3, 840, { kicker: 'JUDGEMENT (AO3)', title: 'Everyone is both cause and casualty', body: 'So the ending offers recognition rather than resolution.', fill: C.cream, edge: C.olive, kfill: C.olive, size: 17 });
  s += j.s;
  s += arrow(450, Y + top.h + 4, 450, y1 - 4, { w: 3 }) + arrow(450, y1 + r.h + 4, 450, y2 - 4, { w: 3 }) + arrow(450, y2 + test.h + 4, 450, y3 - 4, { w: 3 });
  add('07-model-paragraph-blame',
    svg(900, Math.round(y3 + j.h + 24), 'Model paragraph: blame within the Tyrone family', s),
    'A flow from the model paragraph on Long Day’s Journey Into Night. Structure: blame circulates through confessions shared among all four Tyrones. Two readings: Mary as centre and victim, or a feminist reading of the house as her prison. Tested against the text: the men get the longest final confessions and Mary enters only at the end. Judgement: everyone is both cause and casualty, so the ending offers recognition rather than resolution.',
    'Structure, two readings tested against the text, then a judgement.',
    '## Building AO5 for modern plays');
}

// 08 The (a) essay: thesis on Sweat
{
  const Y = 118;
  let s = '';
  const q = card(30, Y, 840, { kicker: 'QUESTION', title: 'Discuss the dramatic presentation of friendship in Sweat.', fill: C.tealLight, edge: C.tealDark, tsize: 19 });
  s += q.s;
  const y1 = Y + q.h + 18;
  const wk = card(90, y1, 780, { kicker: 'WEAK THESIS', title: 'Friendship is important and is tested.', fill: C.panel, edge: C.rust, kfill: C.rust, tsize: 19 });
  s += wk.s + cross(52, y1 + wk.h / 2, 18);
  const y2 = y1 + wk.h + 14;
  const st = card(90, y2, 780, { kicker: 'STRONGER: AN ARGUMENT ABOUT METHOD', body: '“Nottage stages friendship in a single shared bar, so that when Cynthia’s promotion to management divides her from Tracey, the audience watches the space itself split; because the play has already shown the outcome in 2008, every earlier scene of loyalty is shadowed by what we know is coming.”', fill: C.cream, edge: C.tealDark, kfill: C.tealDark, size: 17, bfill: C.ink });
  s += st.s + tick(52, y2 + st.h / 2, 18);
  const y3 = y2 + st.h + 18;
  const r = row(y3, [
    { title: 'Names a staging choice', body: 'the single shared bar' },
    { title: 'Uses the structure', body: 'the outcome shown in 2008' },
    { title: 'Gives a line to argue', body: 'loyalty shadowed by what is coming' },
  ], { gap: 14, card: { size: 16, tsize: 18, pad: 16, align: 'middle' } });
  s += r.s;
  const n = note(y3 + r.h + 16, 'Then: moments from across the play including the ending, theatrical method in every paragraph, and AO5 woven through two or three paragraphs.');
  s += n.s;
  add('08-whole-play-essay',
    svg(900, Math.round(y3 + r.h + 16 + n.h + 24), 'The (a) essay: turn the question into a claim', s),
    'For a question on friendship in Sweat, a weak thesis says friendship is important and tested. A stronger thesis argues that Nottage stages friendship in a single shared bar that splits when Cynthia’s promotion divides her from Tracey, and that the 2008 outcome shadows every earlier scene of loyalty. It names a staging choice, uses the structure and gives a line to argue.',
    'A strong thesis argues about method: staging and structure, not just theme.',
    '## The (a) essay');
}
