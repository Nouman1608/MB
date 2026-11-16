import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-english-literature-9275-prose-fiction';
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
  segs.map(([s, k]) => `<tspan${k === 'hl' ? ` fill="${C.rust}" font-weight="700"` : ''}>${X(s)}</tspan>`).join('') + '</text>';

// 01 Narrative voice and viewpoint
{
  const Y = 112;
  let s = '';
  const eye = (cx, cy) => `<ellipse cx="${cx}" cy="${cy}" rx="22" ry="13" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/><circle cx="${cx}" cy="${cy}" r="6" fill="${C.ink}"/>`;
  const cardW = 410, H = 270;
  const box = (x, y, title, body, art) => panel(x, y, cardW, H) + T(x + 22, y + 36, title, { size: 20, weight: 700 }) + art + para(x + 22, y + 196, body, cardW - 44, { size: 16, fill: C.muted }).s;
  // first person
  const a1 = (x, y) => pawn(x + 205, y + 160, C.mustard) + `<ellipse cx="${x + 290}" cy="${y + 70}" rx="58" ry="24" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + T(x + 290, y + 76, '“I…”', { size: 17, weight: 700, anchor: 'middle', fill: C.olive }) + `<circle cx="${x + 240}" cy="${y + 98}" r="5" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>`;
  // limited third
  const a2 = (x, y) => eye(x + 205, y + 66) + arrow(x + 205, y + 82, x + 150, y + 112, { w: 3, color: C.tealDark, marker: 'ahT' }) + pawn(x + 140, y + 176, C.mustard, 0.8) + pawn(x + 230, y + 176, C.panelEdge, 0.8) + pawn(x + 300, y + 176, C.panelEdge, 0.8);
  // omniscient
  const a3 = (x, y) => eye(x + 205, y + 66) + [130, 205, 280].map((px) => arrow(x + 205, y + 82, x + px, y + 108, { w: 2.5, color: C.tealDark, marker: 'ahT' })).join('') + pawn(x + 130, y + 176, C.mustard, 0.8) + pawn(x + 205, y + 176, C.mustard, 0.8) + pawn(x + 280, y + 176, C.mustard, 0.8);
  // unreliable
  const a4 = (x, y) => pawn(x + 110, y + 170, C.teal, 0.9) + `<rect x="${x + 140}" y="${y + 52}" width="110" height="40" rx="12" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x + 195, y + 78, 'says…', { size: 16, anchor: 'middle', italic: true }) +
    eye(x + 330, y + 120) + T(x + 330, y + 154, 'reader sees…', { size: 15, anchor: 'middle', fill: C.muted }) + `<line x1="${x + 255}" y1="${y + 76}" x2="${x + 306}" y2="${y + 110}" stroke="${C.rust}" stroke-width="3" stroke-dasharray="5 5"/>` + T(x + 300, y + 76, 'gap', { size: 16, weight: 700, fill: C.rust });
  s += box(30, Y, 'First person', 'Inside one character’s mind. How much does this narrator understand? Is an older self looking back?', a1(30, Y));
  s += box(460, Y, 'Third person, limited', 'Close to one character. Notice when the narrator comments, judges or withholds.', a2(460, Y));
  s += box(30, Y + H + 16, 'Third person, omniscient', 'Moves freely between many characters’ minds.', a3(30, Y + H + 16));
  s += box(460, Y + H + 16, 'Unreliable narrator', 'The gap between what the narrator says and what the reader sees is itself a method.', a4(460, Y + H + 16));
  add('01-narrative-voice',
    svg(900, Y + 2 * H + 16 + 24, 'Narrative voice and viewpoint', s),
    'Four panels. First person places the reader inside one character’s mind. Third person limited stays close to one character. Third person omniscient moves between many characters. An unreliable narrator says one thing while the reader sees another, and that gap is a method.',
    'Ask who tells the story, how much they know, and whether to trust them.',
    '## The writer\'s methods: a toolkit for prose');
}

// 02 Structure: shapes and links
{
  const Y = 120;
  let s = '';
  const lane = (y, title, draw) => panel(30, y, 840, 120) + T(54, y + 34, title, { size: 19, weight: 700 }) + draw(y);
  const axis = (y) => `<line x1="280" y1="${y + 70}" x2="840" y2="${y + 70}" stroke="${C.ink}" stroke-width="3.5" marker-end="url(#ah)"/>`;
  const dot = (x, y, f = C.mustard) => `<circle cx="${x}" cy="${y}" r="10" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += lane(Y, 'Chronological', (y) => axis(y) + [330, 450, 570, 690, 790].map((x) => dot(x, y + 70)).join('') + T(54, y + 60, 'time moves forward', { size: 15, fill: C.muted }));
  s += lane(Y + 134, 'Flashback', (y) => axis(y) + dot(330, y + 70) + dot(450, y + 70) + dot(690, y + 70) + dot(790, y + 70) + dot(560, y + 70, C.teal) +
    path(`M450,${y + 58} C470,${y + 18} 360,${y + 18} 380,${y + 56}`, { stroke: C.rust, w: 3, extra: 'marker-end="url(#ahR)"' }) + T(54, y + 60, 'the story jumps back', { size: 15, fill: C.muted }));
  s += lane(Y + 268, 'Frame narrative', (y) => `<rect x="290" y="${y + 44}" width="540" height="54" rx="10" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/><rect x="360" y="${y + 56}" width="400" height="30" rx="8" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2"/>` + T(560, y + 77, 'the main story', { size: 15, anchor: 'middle', weight: 600 }) + T(54, y + 60, 'a story within a story', { size: 15, fill: C.muted }));
  const y4 = Y + 402;
  s += panel(30, y4, 840, 170) + T(54, y4 + 34, 'Links across the text', { size: 19, weight: 700 }) + T(54, y4 + 58, 'connect two points in one paragraph', { size: 15, fill: C.muted });
  s += `<line x1="280" y1="${y4 + 130}" x2="840" y2="${y4 + 130}" stroke="${C.ink}" stroke-width="3.5" marker-end="url(#ah)"/>`;
  s += dot(330, y4 + 130) + dot(520, y4 + 130) + dot(610, y4 + 130, C.teal) + dot(790, y4 + 130, C.teal);
  s += path(`M330,${y4 + 118} C380,${y4 + 70} 470,${y4 + 70} 520,${y4 + 118}`, { stroke: C.olive, w: 3, extra: 'stroke-dasharray="7 5" marker-end="url(#ahO)"' }) + T(425, y4 + 72, 'foreshadowing', { size: 15, weight: 700, anchor: 'middle', fill: C.olive });
  s += path(`M610,${y4 + 118} C650,${y4 + 70} 750,${y4 + 70} 790,${y4 + 118}`, { stroke: C.tealDark, w: 3, extra: 'marker-start="url(#ahT)" marker-end="url(#ahT)"' }) + T(700, y4 + 72, 'parallel scenes', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
  const n = note(y4 + 186, 'Also watch where turning points sit, how chapters open and close, and whether the ending answers or refuses to answer the opening.');
  add('02-prose-structure',
    svg(900, Math.round(y4 + 186 + n.h + 24), 'Structure: the order and shape of the story', s + n.s),
    'Timelines show three ways time can move in a novel: chronologically, with a flashback that jumps back, and within a frame narrative. A fourth timeline links two points with foreshadowing and with parallel scenes, so one paragraph can connect them.',
    'Foreshadowing and parallel scenes let one paragraph span the whole novel.',
    '## The writer\'s methods: a toolkit for prose');
}

// 03 Worked example 1: annotated extract
{
  const Y = 120, lh = 36, px = 52;
  const lines = [
    [['The house ', ''], ['had been sold', 'hl'], [' before Lena was told.', '']],
    [['She learned it from the sign at the gate,', '']],
    [['tilted slightly, as though it too were ', ''], ['embarrassed', 'hl'], ['.', '']],
    [['Inside, her father was wrapping cups in', '']],
    [['newspaper with great care, ', ''], ['each one turned', 'hl']],
    [['three times', 'hl'], [' before it went into the box.', '']],
    [['“We’ll talk later,” he said, not looking up.', '']],
    [['Later, she understood, was ', ''], ['a place', 'hl'], [' he had', '']],
    [['been keeping for years.', '']],
  ];
  let body = '';
  lines.forEach((l, i) => { body += rich(px, Y + 24 + i * lh, l, { size: 17 }); });
  const at = (i) => Y + 18 + i * lh;
  const notes = [
    ['Short sentence, passive voice', 'The sale is stated bluntly; “had been sold” hides who decided, mirroring how power is kept from her.', [0]],
    ['Personification', 'The “embarrassed” sign shows the shame the father will not show.', [2]],
    ['Repeated action', 'Careful wrapping: he gives attention to things more easily than to his daughter.', [4]],
    ['Metaphor', '“Later” becomes “a place”: delay sounds permanent, a habit, not a single moment.', [7]],
  ];
  let bdg = '';
  notes.forEach(([, , tg], i) => tg.forEach((li) => { bdg += `<circle cx="490" cy="${at(li)}" r="12" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + T(490, at(li) + 5, String(i + 1), { size: 15, weight: 700, anchor: 'middle' }); }));
  let cy = Y - 20;
  let cards = '';
  notes.forEach(([k, b], i) => { const c = card(530, cy, 340, { kicker: `${i + 1} · ${k.toUpperCase()}`, kfill: C.olive, body: b, size: 15, bfill: C.ink, pad: 12 }); cards += c.s; cy += c.h + 8; });
  const H = Math.max(cy - 8 - (Y - 20), lines.length * lh + 40);
  const s = panel(30, Y - 20, 478, H) + body + bdg + cards;
  const cl = card(30, Y - 20 + H + 16, 840, { kicker: 'THE CLAIM IT SUPPORTS', title: 'The writer presents Lena’s exclusion from her family’s decisions through what she is not told.', tsize: 18, fill: C.teal, edge: C.ink, kfill: C.ink });
  const foot = T(30, Y - 20 + H + 16 + cl.h + 26, 'Invented practice passage, not from any set text.', { size: 15, fill: C.muted });
  add('03-annotated-extract',
    svg(900, Math.round(Y - 20 + H + 16 + cl.h + 46), 'Analysing a short extract', s + cl.s + foot),
    'The guide’s invented passage about Lena with four details marked: the passive “had been sold”, the personified “embarrassed” sign, the father’s repeated wrapping of cups, and the metaphor that turns “later” into “a place”. All support the claim that the writer presents Lena’s exclusion through what she is not told.',
    'Short embedded evidence, a named method and its effect, all serving one claim.',
    '## Worked example 1: analysing a short extract');
}

// 04 Worked example 2: an argument, not a list
{
  const Y = 120;
  let s = '';
  const arg = card(30, Y, 840, { kicker: 'LINE OF ARGUMENT', kfill: C.olive, title: 'Ambition promises freedom but costs a character their relationships.', tsize: 19, fill: C.cream, edge: C.olive });
  s += arg.s;
  const ry = Y + arg.h + 30;
  const r = row(ry, [
    { kicker: 'EARLY', title: 'How ambition is introduced', body: 'one short quotation and its method' },
    { kicker: 'MIDDLE', title: 'A turning point', body: 'ambition tested or rewarded' },
    { kicker: 'LATE', title: 'How the ending judges it', body: 'and how the structure supports that' },
  ].map((x) => ({ ...x, fill: C.tealLight, edge: C.tealDark })), { arrows: true, card: { tsize: 18, size: 15 } });
  s += r.s;
  s += chip(450, ry + r.h + 18, 'Context: one precise link, placed where it explains a choice', { anchor: 'middle', size: 15, fill: C.cream, edge: C.olive }).s;
  const ty = ry + r.h + 80;
  s += panel(30, ty, 840, 150, C.panel, C.rust) + T(54, ty + 36, 'The swap test', { size: 19, weight: 700, fill: C.rust });
  const blk = (x, y, l) => `<rect x="${x}" y="${y}" width="90" height="46" rx="8" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2"/>` + T(x + 45, y + 29, l, { size: 16, weight: 700, anchor: 'middle' });
  s += blk(60, ty + 70, 'P2') + blk(170, ty + 70, 'P1') + path(`M105,${ty + 64} C120,${ty + 44} 200,${ty + 44} 215,${ty + 64}`, { stroke: C.rust, w: 2.5, extra: 'marker-start="url(#ahR)" marker-end="url(#ahR)"' });
  s += para(300, ty + 82, 'If you can swap two paragraphs without anyone noticing, the essay is a list rather than an argument. Each paragraph should move the argument forward.', 540, { size: 17, fill: C.ink }).s;
  add('04-argument-not-list',
    svg(900, Math.round(ty + 150 + 24), 'Planning an essay question', s, 'How does the writer present ambition in your novel?'),
    'A line of argument, that ambition promises freedom but costs a character their relationships, leads to three points in order: how ambition is introduced, a turning point, and how the ending judges it, with one precise context link. The swap test: if two paragraphs could be swapped unnoticed, the essay is a list.',
    'Each paragraph should move the argument on, from early to late in the novel.',
    '## Worked example 2: planning an essay question');
}

// 05 Revising a closed-book prose text
{
  const Y = 116;
  let s = '';
  // quotation tags
  s += panel(30, Y, 840, 170) + T(54, Y + 36, '8–10 short, versatile quotations', { size: 20, weight: 700 }) + T(54, Y + 60, 'each tagged with a method and the themes or characters it supports', { size: 16, fill: C.muted });
  s += `<rect x="54" y="${Y + 86}" width="300" height="60" rx="10" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/><line x1="74" y1="${Y + 108}" x2="300" y2="${Y + 108}" stroke="${C.olive}" stroke-width="5" stroke-linecap="round" opacity="0.6"/><line x1="74" y1="${Y + 126}" x2="230" y2="${Y + 126}" stroke="${C.olive}" stroke-width="5" stroke-linecap="round" opacity="0.6"/>`;
  let cx = 380;
  [['method', C.tealLight, C.tealDark], ['theme', C.panel, C.ink], ['character', C.panel, C.ink]].forEach(([l, f, e]) => { const c = chip(cx, Y + 98, l, { size: 16, fill: f, edge: e }); s += c.s; cx += c.w + 12; });
  // timeline
  const y2 = Y + 186;
  s += panel(30, y2, 840, 150) + T(54, y2 + 36, 'A one-page timeline of turning points', { size: 20, weight: 700 });
  s += `<line x1="80" y1="${y2 + 96}" x2="830" y2="${y2 + 96}" stroke="${C.ink}" stroke-width="4" marker-end="url(#ah)"/>`;
  [120, 280, 450, 610, 780].forEach((x) => { s += `<circle cx="${x}" cy="${y2 + 96}" r="10" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`; });
  [['beginning', 120], ['middle', 450], ['end', 780]].forEach(([l, x]) => { s += T(x, y2 + 128, l, { size: 15, anchor: 'middle', fill: C.muted }); });
  // paragraph drill
  const y3 = y2 + 166;
  s += panel(30, y3, 840, 110) + `<circle cx="90" cy="${y3 + 55}" r="30" fill="${C.panel}" stroke="${C.ink}" stroke-width="3"/><path d="M90,${y3 + 55} L90,${y3 + 25} A30,30 0 0 1 ${90 + 30 * Math.sin(Math.PI / 3)},${y3 + 55 - 30 * Math.cos(Math.PI / 3)} Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>`;
  s += T(140, y3 + 48, 'One analytical paragraph in 8–10 minutes', { size: 20, weight: 700 }) + T(140, y3 + 76, 'practise writing it from memory', { size: 16, fill: C.muted });
  add('05-closed-book-revision',
    svg(900, y3 + 110 + 24, 'Revising a closed-book prose text', s),
    'Three revision tasks: learn eight to ten short, versatile quotations, each tagged with a method and the themes or characters it supports; make a one-page timeline of turning points from beginning to end; and practise writing one analytical paragraph in eight to ten minutes from memory.',
    'Tagged quotations, a timeline and timed paragraphs build reliable recall.',
    '## Revising a closed-book prose text');
}
