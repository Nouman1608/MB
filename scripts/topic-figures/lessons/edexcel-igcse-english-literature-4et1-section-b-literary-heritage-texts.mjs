import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-english-literature-4et1-section-b-literary-heritage-texts';
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

// 01 Context as a lens: the deletion test
{
  const Y = 116;
  let s = '';
  const top = card(250, Y, 400, { kicker: 'THE TEST', title: 'Delete the context sentence', tsize: 21, align: 'middle', fill: C.cream, edge: C.olive });
  s += top.s;
  const qy = Y + top.h + 30;
  s += arrow(450, Y + top.h + 4, 450, qy - 4, { w: 3.5 });
  const q = card(200, qy, 500, { title: 'Is your reading of the quotation weaker?', tsize: 20, align: 'middle', fill: C.teal, edge: C.ink });
  s += q.s;
  const by = qy + q.h + 60;
  s += path(`M330,${qy + q.h} C330,${qy + q.h + 30} 230,${by - 30} 230,${by - 6}`, { w: 3.5, extra: 'marker-end="url(#ah)"' }) + path(`M570,${qy + q.h} C570,${qy + q.h + 30} 670,${by - 30} 670,${by - 6}`, { w: 3.5, extra: 'marker-end="url(#ah)"' });
  s += T(262, qy + q.h + 30, 'yes', { size: 18, weight: 700, fill: C.tealDark, anchor: 'end' }) + T(638, qy + q.h + 30, 'no', { size: 18, weight: 700, fill: C.rust });
  const r = row(by, [
    { title: 'A lens: keep it', body: 'It explains a choice the writer made, or changes what a moment means.', fill: C.tealLight, edge: C.tealDark, tfill: C.tealDark },
    { title: 'Decoration: cut it', body: 'Examiners are not testing history.', fill: C.panel, edge: C.rust, tfill: C.rust },
  ], { gap: 40, card: { tsize: 20, size: 17, bfill: C.ink } });
  s += r.s;
  add('01-context-deletion-test',
    svg(900, Math.round(by + r.h + 24), 'Context is a lens, not a topic', s),
    'A flowchart: delete the context sentence and ask whether your reading of the quotation is weaker. If yes, the context is a lens that explains the writer’s choice or changes a moment’s meaning, so keep it. If no, it is decoration, so cut it.',
    'Context earns AO4 only when it changes how a moment reads.',
    '## Key ideas');
}

// 02 Two or three time frames
{
  const Y = 130;
  let s = '';
  const lane = (y, title, pts, note2) => {
    let o = panel(30, y, 840, 200) + T(54, y + 38, title, { size: 21, weight: 700, italic: true });
    o += `<line x1="70" y1="${y + 110}" x2="840" y2="${y + 110}" stroke="${C.ink}" stroke-width="4" marker-end="url(#ah)"/>`;
    pts.forEach(([x, lab, sub, f]) => { o += `<circle cx="${x}" cy="${y + 110}" r="13" fill="${f}" stroke="${C.ink}" stroke-width="3"/>` + T(x, y + 84, lab, { size: 17, weight: 700, anchor: 'middle' }) + T(x, y + 144, sub, { size: 16, anchor: 'middle', fill: C.muted }); });
    o += T(54, y + 182, note2, { size: 16, fill: C.olive, weight: 600 });
    return o;
  };
  s += lane(Y, 'The Scarlet Letter', [[180, 'Set', 'seventeenth-century Boston', C.tealLight], [500, 'Published', '1850', C.cream], [770, 'Read', 'now', C.mustard]], 'Why did Hawthorne look back to his ancestors’ society?');
  s += path(`M200,${Y + 100} Q340,${Y + 60} 480,${Y + 100}`, { stroke: C.olive, w: 2.5, extra: 'stroke-dasharray="7 6" marker-start="url(#ahO)"' });
  s += lane(Y + 220, 'Great Expectations', [[180, 'Looks back to', 'the earlier part of the century', C.tealLight], [500, 'Published', '1860–61', C.cream], [770, 'Read', 'now', C.mustard]], 'Why did Dickens look backwards?');
  s += path(`M200,${Y + 320} Q340,${Y + 280} 480,${Y + 320}`, { stroke: C.olive, w: 2.5, extra: 'stroke-dasharray="7 6" marker-start="url(#ahO)"' });
  const n = note(Y + 440, 'Noticing the gap between setting and writing lets you ask why a writer looked backwards: often the most interesting AO4 point available.');
  add('02-three-time-frames',
    svg(900, Math.round(Y + 440 + n.h + 24), 'When it is set, written and read', s + n.s),
    'Two timelines. The Scarlet Letter is set in seventeenth-century Boston, published in 1850 and read now. Great Expectations was published in 1860–61 but looks back to the earlier part of the century. Dashed arrows show each writer looking backwards.',
    'The gap between setting and writing is often the best AO4 question to ask.',
    '## Key ideas');
}

// 03 Worked example 1: one paragraph, three objectives
{
  const Y = 140;
  let s = '';
  const parts = [
    ['AO1', 'POINT', 'Marriage could be a practical bargain rather than a romantic choice; we understand Charlotte even while Elizabeth is shocked.', C.cream, C.olive],
    ['AO2', 'METHOD', 'Calm, reasonable statements and a narrator who does not mock her; the two friends placed side by side make the reader weigh love against security.', C.tealLight, C.tealDark],
    ['AO4', 'CONTEXT', 'For a woman of Charlotte’s class, with little money and no profession open to her, marriage was close to the only route to a home of her own.', C.mustard, C.ink],
  ];
  let cy = Y; const mids = [];
  parts.forEach(([ao, k, b, f, e]) => {
    const c = card(150, cy, 670, { kicker: k, kfill: e, body: b, size: 17, bfill: C.ink, fill: f === C.mustard ? C.cream : f, edge: e });
    s += c.s + `<circle cx="80" cy="${cy + c.h / 2}" r="38" fill="${f}" stroke="${C.ink}" stroke-width="3"/>` + T(80, cy + c.h / 2 + 7, ao, { size: 19, weight: 700, anchor: 'middle' });
    mids.push(cy + c.h / 2); cy += c.h + 14;
  });
  s += path(`M820,${mids[2]} C852,${mids[2]} 852,${mids[1]} 824,${mids[1]}`, { stroke: C.olive, w: 3, extra: 'marker-end="url(#ahO)"' });
  s += `<g transform="translate(866,${(mids[1] + mids[2]) / 2}) rotate(-90)">${T(0, 0, 'explains why', { size: 15, weight: 700, fill: C.olive, anchor: 'middle' })}</g>`;
  const n = note(cy + 6, 'The context sentence explains why Charlotte’s speech is so measured. It does not start a new paragraph about the Regency period.');
  add('03-one-paragraph-three-aos',
    svg(900, Math.round(cy + 6 + n.h + 24), 'One paragraph, three objectives', s + n.s, 'Attitudes to marriage in Pride and Prejudice: Charlotte Lucas'),
    'A paragraph on Charlotte Lucas’s decision to marry Mr Collins split into three parts: an AO1 point that marriage could be a practical bargain, an AO2 method of calm statements and structural contrast with Elizabeth, and AO4 context about a woman of Charlotte’s class. An arrow shows the context explaining the method.',
    'The context explains the method, inside the same paragraph.',
    '## Worked example 1: one paragraph, three objectives');
}

// 04 Worked example 2: bolt-on vs integrated
{
  const Y = 116;
  let s = '';
  s += panel(30, Y, 840, 196, C.panel, C.rust) + cross(64, Y + 34) + T(92, Y + 41, 'Bolt-on: two sentences that never meet', { size: 20, weight: 700, fill: C.rust });
  s += card(54, Y + 66, 360, { kicker: 'IMAGERY', body: 'Shakespeare uses dark imagery when Macbeth first thinks of murder.', size: 16, bfill: C.ink, minH: 106 }).s;
  s += card(486, Y + 66, 360, { kicker: 'CONTEXT', body: 'In Jacobean times people believed in the divine right of kings.', size: 16, bfill: C.ink, minH: 106 }).s;
  s += `<line x1="420" y1="${Y + 119}" x2="480" y2="${Y + 119}" stroke="${C.rust}" stroke-width="3" stroke-dasharray="5 5"/>`;
  const Y2 = Y + 216;
  s += panel(30, Y2, 840, 250, C.panel, C.tealDark) + tick(64, Y2 + 34) + T(92, Y2 + 41, 'Integrated: context explains the image', { size: 20, weight: 700, fill: C.tealDark });
  const r = row(Y2 + 66, [
    { kicker: 'IMAGE (AO2)', body: 'Macbeth asks the stars to hide their light.', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'CONTEXT (AO4)', kfill: C.olive, body: 'An audience who believed a king was chosen by God.', fill: C.cream, edge: C.olive },
    { kicker: 'ARGUMENT (AO1)', body: 'He already knows the murder is sacrilege.', fill: C.teal, edge: C.ink, kfill: C.ink },
  ], { arrows: true, gap: 40, minH: 150, x: 50, w: 800, card: { size: 17, bfill: C.ink } });
  s += r.s;
  add('04-bolt-on-to-integrated',
    svg(900, Y2 + 250 + 24, 'From bolt-on to integrated context', s, 'Macbeth'),
    'Top: a bolt-on version puts a sentence on dark imagery next to a sentence on the divine right of kings, with no link. Bottom: the integrated version runs from Macbeth asking the stars to hide their light, through an audience who believed a king was chosen by God, to the argument that he knows the murder is sacrilege.',
    'Context should explain the imagery and drive the argument.',
    '## Worked example 2: improving a bolt-on sentence');
}

// 05 Planning in about 45 minutes
{
  const Y = 140;
  const segs = [['Choose', 2, C.tealLight], ['Plan', 5, C.teal], ['Locate', 3, C.tealLight], ['Write', 32, C.mustard], ['Check', 3, C.cream]];
  let s = T(30, Y - 10, 'Minutes (total 45)', { size: 17, weight: 700, fill: C.muted }), x = 30;
  const xs = [];
  segs.forEach(([l, m, f]) => { const w = (840 * m) / 45; s += `<rect x="${x}" y="${Y}" width="${w}" height="56" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`; s += T(l === 'Write' ? x + w / 8 : x + w / 2, Y + 35, String(m), { size: 17, weight: 700, anchor: 'middle' }); xs.push([x, w, l]); x += w; });
  // write segment split into four ~8-minute paragraphs
  const [wx, ww] = xs[3];
  for (let i = 1; i < 4; i++) s += `<line x1="${wx + (ww * i) / 4}" y1="${Y + 6}" x2="${wx + (ww * i) / 4}" y2="${Y + 50}" stroke="${C.olive}" stroke-width="2" stroke-dasharray="4 4"/>`;
  s += T(wx + ww / 2, Y + 80, 'roughly eight minutes per paragraph', { size: 15, anchor: 'middle', fill: C.olive, weight: 600 });
  const st = steps(Y + 100, [
    { title: 'Choose · 2', body: 'Pick the question where you can name three moments and two contexts at once.' },
    { title: 'Plan · 5', body: 'A one-line argument, then three or four headings, each with a moment and a context.' },
    { title: 'Locate · 3', body: 'Find the passages in your unmarked copy; note page numbers on the plan.' },
    { title: 'Write · 32', body: 'A short introduction, the paragraphs, a short conclusion.' },
    { title: 'Check · 3', body: 'Every paragraph contains at least one context link.' },
  ], { gap: 8, size: 16, tsize: 18, highlight: 4 });
  s += st.s;
  const n = note(Y + 100 + st.h + 16, 'If Section A overran, shorten the plan rather than drop the context. AO4 is a third of this essay.');
  add('05-plan-45-minutes',
    svg(900, Math.round(Y + 100 + st.h + 16 + n.h + 24), 'Planning a Section B answer', s + n.s),
    'A 45-minute bar: 2 minutes to choose, 5 to plan, 3 to locate passages, 32 to write at roughly eight minutes per paragraph, and 3 to check. Steps below explain each stage; the check is that every paragraph has a context link.',
    'Plan moments and contexts together, and check every paragraph has context.',
    '## Planning a Section B answer in about 45 minutes');
}

// 06 Using the whole text
{
  const Y = 130;
  let s = '';
  const tline = (y, title, pts, good) => {
    let o = panel(30, y, 840, 150, C.panel, good ? C.tealDark : C.rust) + (good ? tick(64, y + 34) : cross(64, y + 34)) + T(92, y + 41, title, { size: 19, weight: 700, fill: good ? C.tealDark : C.rust });
    o += `<line x1="80" y1="${y + 100}" x2="820" y2="${y + 100}" stroke="${C.ink}" stroke-width="4"/>` + (good ? '' : T(80, y + 134, 'beginning', { size: 15, fill: C.muted }) + T(820, y + 134, 'ending', { size: 15, fill: C.muted, anchor: 'end' }));
    pts.forEach(([px, lab]) => { o += `<circle cx="${px}" cy="${y + 100}" r="12" fill="${good ? C.mustard : C.cream}" stroke="${C.ink}" stroke-width="3"/>` + (lab ? T(px, y + 78, lab, { size: 16, weight: 700, anchor: 'middle' }) : ''); });
    return o;
  };
  s += tline(Y, 'Stronger: beginning, a turning point and the ending', [[110, 'beginning'], [450, 'turning point'], [790, 'ending']], true);
  s += tline(Y + 166, 'Weaker: the two or three scenes you know best', [[420, ''], [455, ''], [490, '']], false);
  // navigation sheet
  const Y2 = Y + 356;
  s += T(30, Y2, 'A navigation sheet for your study copy', { size: 19, weight: 700 });
  const r = row(Y2 + 16, ['Act or chapters 1', 'Act or chapters 2', 'Act or chapters 3'].map((h) => ({ title: h, tsize: 17 })), { gap: 14, minH: 170, vcenter: false, card: { pad: 14 } });
  s += r.s;
  const w = (840 - 28) / 3;
  [0, 1, 2].forEach((i) => {
    const x = 30 + i * (w + 14);
    [['moment', C.tealLight, C.tealDark], ['moment', C.tealLight, C.tealDark], ['context', C.cream, C.olive]].forEach(([l, f, e], j) => { s += `<rect x="${x + 14}" y="${Y2 + 62 + j * 38}" width="${w - 28}" height="30" rx="8" fill="${f}" stroke="${e}" stroke-width="2"/>` + T(x + w / 2, Y2 + 83 + j * 38, l, { size: 15, weight: 700, anchor: 'middle', fill: e }); });
  });
  const n = note(Y2 + 16 + r.h + 16, 'Practise finding each moment in a clean copy in under a minute.');
  add('06-whole-text-navigation',
    svg(900, Math.round(Y2 + 16 + r.h + 16 + n.h + 24), 'Using the whole text', s + n.s),
    'Two timelines of a text. Stronger answers take evidence from the beginning, a turning point and the ending; weaker answers cluster in two or three familiar scenes. Below, a navigation sheet lists two key moments and one context for each act or group of chapters.',
    'Draw evidence from across the text and know where to find it fast.',
    '## Using the whole text');
}
