import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-english-literature-9695-section-b-post-1900-poetry-and-prose';
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
  const fig = compose('Paper 4 Section B at a glance', [
    (y) => { const b = markBar(y + 26, [{ label: 'Section A: Pre-1900', sub: '25 marks', value: 25, fill: C.tealLight }, { label: 'Section B: Post-1900', sub: '25 marks · one essay', value: 25, fill: C.mustard }]); return { s: T(30, y + 14, 'Paper 4 · 50 marks', { size: 17, weight: 700, fill: C.muted }) + b.s, h: b.h + 26 }; },
    (y) => {
      let s = T(30, y + 18, 'Assessed on AO1 to AO5, each 20%', { size: 19, weight: 700 });
      const w = 840 / 5;
      for (let i = 0; i < 5; i++) {
        const x = 30 + i * w, f = i === 4 ? C.mustard : (i % 2 ? C.tealLight : C.panel);
        s += `<rect x="${x}" y="${y + 34}" width="${w}" height="66" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x + w / 2, y + 62, `AO${i + 1}`, { size: 20, weight: 700, anchor: 'middle' }) + T(x + w / 2, y + 88, '20%', { size: 17, anchor: 'middle' });
      }
      return { s, h: 104 };
    },
    (y) => {
      const o = { minH: 106, size: 17 };
      const L = card(30, y, 380, { kicker: 'QUESTION (a)', title: 'Essay on the whole text', ...o });
      const R = card(490, y, 380, { kicker: 'QUESTION (b)', title: 'A passage or poem printed on the paper', ...o, fill: C.cream, edge: C.olive, kfill: C.olive });
      const h = Math.max(L.h, R.h);
      return { s: L.s + R.s + `<circle cx="450" cy="${y + h / 2}" r="30" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + T(450, y + h / 2 + 7, 'or', { size: 20, weight: 700, anchor: 'middle' }), h };
    },
    (y) => note(y, 'Texts are not allowed in the exam room.'),
  ]);
  add('01-section-b-at-a-glance', fig,
    'Paper 4 is worth 50 marks: Section A pre-1900 and Section B post-1900 at 25 marks each. Section B is one essay assessed on AO1 to AO5 at 20% each. You choose an (a) essay on the whole text or a (b) question on a printed passage or poem, and texts are not allowed in the exam room.',
    'One post-1900 essay worth 25 marks, assessed on all five objectives.',
    '## What the section asks of you');
}

// 02 Form rule and texts
{
  const Y = 136;
  let s = '';
  const colW = 400;
  const prose = [['Coetzee', 'Waiting for the Barbarians'], ['Mansfield', 'Selected Stories'], ['Morrison', 'Beloved']];
  const poetry = [['Glück', 'selected poems from', 'The Wild Iris'], ['Okara', 'selected poems from', 'Collected Poems (2016)'], ['Trethewey', '', 'Native Guard']];
  const col = (x, title, list, fill, edge, ink, out) => {
    let c = panel(x, Y, colW, 318, fill, edge) + T(x + 20, Y + 36, title, { size: 20, weight: 700, fill: ink });
    list.forEach(([a, pre, it], i) => {
      const yy = Y + 78 + i * 64;
      c += T(x + 20, yy, a, { size: 17, weight: 700 });
      if (it === undefined) c += T(x + 20, yy + 23, pre, { size: 17, italic: true });
      else c += `<text x="${x + 20}" y="${yy + 23}" font-size="17" fill="${C.ink}">${pre ? X(pre) + ' ' : ''}<tspan font-style="italic">${X(it)}</tspan></text>`;
    });
    c += `<rect x="${x + 20}" y="${Y + 256}" width="${colW - 40}" height="48" rx="10" fill="${C.panel}" stroke="${ink}" stroke-width="2.5" stroke-dasharray="7 5"/>`;
    c += T(x + colW / 2, Y + 287, out, { size: 17, weight: 700, anchor: 'middle', fill: ink });
    return c;
  };
  s += col(30, 'Post-1900 prose', prose, C.cream, C.olive, C.olive, 'pair with pre-1900 poetry');
  s += col(470, 'Post-1900 poetry', poetry, C.tealLight, C.tealDark, C.tealDark, 'pair with pre-1900 prose');
  s += T(450, Y - 12, '2026 Section B texts', { size: 17, weight: 700, anchor: 'middle', fill: C.muted });
  const rule = card(30, Y + 338, 840, { kicker: 'THE FORM RULE', title: 'Across Paper 4: one essay on poetry and one on prose', body: 'Section B is whichever form you did not choose in Section A.', fill: C.panel, edge: C.ink, size: 17 });
  s += rule.s;
  const n2 = note(Y + 338 + rule.h + 16, 'For 2027, Elizabeth Bishop’s poems, Richard Powers’s The Overstory and Ocean Vuong’s Night Sky with Exit Wounds replace Glück, Beloved and Native Guard. Check the list for your examination year.');
  s += n2.s;
  add('02-form-rule-and-texts',
    svg(900, Math.round(Y + 338 + rule.h + 16 + n2.h + 24), 'Post-1900 texts by form', s),
    'The 2026 Section B texts sorted by form. Prose: Coetzee’s Waiting for the Barbarians, Mansfield’s Selected Stories and Morrison’s Beloved, which pair with pre-1900 poetry. Poetry: Glück’s The Wild Iris, Okara’s Collected Poems and Trethewey’s Native Guard, which pair with pre-1900 prose. For 2027, Bishop, Powers’s The Overstory and Vuong’s Night Sky with Exit Wounds replace Glück, Beloved and Native Guard.',
    'Section B must be the form you did not choose in Section A.',
    '## What the section asks of you');
}

// 03 Modern texts make the reader work
{
  const Y = 118;
  let s = '';
  s += T(30, Y + 6, 'What older texts supplied, and modern texts often withhold', { size: 19, weight: 700 });
  const items = ['a reliable narrator', 'chronological order', 'a settled meaning', 'a single voice'];
  items.forEach((it, i) => {
    const x = 30 + i * 214, y = Y + 24;
    s += `<rect x="${x}" y="${y}" width="198" height="70" rx="10" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5" stroke-dasharray="8 6"/>` + T(x + 99, y + 42, it, { size: 17, weight: 700, anchor: 'middle', fill: C.muted });
  });
  // puzzle pieces assembling
  const py = Y + 140;
  const piece = (x, y, f, rot = 0) => `<g transform="translate(${x},${y}) rotate(${rot})"><path d="M-30,-30 L-6,-30 a8,8 0 1 1 12,0 L30,-30 L30,-6 a8,8 0 1 1 0,12 L30,30 L-30,30 Z" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/></g>`;
  s += piece(150, py + 60, C.cream, -12) + piece(240, py + 30, C.teal, 10) + piece(200, py + 120, C.tealLight, 4);
  s += arrow(300, py + 75, 380, py + 75, { w: 3.5 });
  s += piece(430, py + 45, C.cream) + piece(490, py + 45, C.teal) + piece(430, py + 105, C.tealLight) + piece(490, py + 105, C.mustard);
  s += T(440, py + 166, 'the reader assembles the meaning', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += card(600, py, 270, { title: 'Strong answers describe', body: 'how a text makes the reader do this work, and why that matters to its meaning.', fill: C.cream, edge: C.olive, size: 17 }).s;
  const y3 = py + 214;
  const r = row(y3, [
    { title: 'Filling the gaps', body: 'Inventing explanations the text deliberately withholds.', edge: C.rust, tfill: C.rust },
    { title: 'Analysing the withholding', body: 'Asking why information is delayed or missing, and what that does.', edge: C.tealDark, tfill: C.tealDark },
  ], { gap: 20, card: { size: 16, tsize: 19, pad: 18 } });
  s += r.s + cross(410, y3 + 8, 14) + tick(862, y3 + 8, 14);
  add('03-reader-does-the-work',
    svg(900, Math.round(y3 + r.h + 24), 'Modern texts make the reader work', s),
    'Four dashed boxes show what modern texts often withhold: a reliable narrator, chronological order, a settled meaning and a single voice. Scattered pieces become an assembled square, showing the reader assembling meaning. Strong answers describe how the text makes the reader do this work. Filling the gaps is crossed out; analysing the withholding is ticked.',
    'Analyse how the text makes you assemble its meaning, not the gaps you could fill.',
    '## The key idea: modern texts make the reader work');
}

// 04 Narrative voice and tense
{
  const Y = 116, gap = 12;
  let s = '';
  const rows = [
    ['Coetzee', 'First-person present tense', 'The Magistrate narrates largely in the present, without the hindsight of retrospective narration, so his understanding grows, and fails, alongside ours.', (cx, cy) => {
      let o = `<line x1="${cx - 100}" y1="${cy + 10}" x2="${cx}" y2="${cy + 10}" stroke="${C.muted}" stroke-width="3" stroke-dasharray="6 6" opacity="0.6"/>`;
      o += `<line x1="${cx}" y1="${cy + 10}" x2="${cx + 100}" y2="${cy + 10}" stroke="${C.ink}" stroke-width="3" marker-end="url(#ah)"/>`;
      o += `<circle cx="${cx}" cy="${cy + 10}" r="10" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + T(cx, cy - 10, 'now', { size: 15, weight: 700, anchor: 'middle' });
      o += T(cx - 52, cy + 40, 'no hindsight', { size: 15, anchor: 'middle', fill: C.muted }) + T(cx + 54, cy + 40, 'events unfold', { size: 15, anchor: 'middle', fill: C.muted });
      return o;
    }],
    ['Mansfield', 'Interior focalisation and free indirect discourse', 'The stories follow a character’s shifting perceptions closely, often within a single day or event.', (cx, cy) => `<circle cx="${cx - 16}" cy="${cy}" r="34" fill="${C.mustard}" fill-opacity="0.85" stroke="${C.ink}" stroke-width="2.5"/><circle cx="${cx + 16}" cy="${cy}" r="34" fill="${C.teal}" fill-opacity="0.75" stroke="${C.ink}" stroke-width="2.5"/>` + T(cx - 70, cy + 52, 'narrator', { size: 14, anchor: 'middle', fill: C.muted }) + T(cx + 70, cy + 52, 'character', { size: 14, anchor: 'middle', fill: C.muted })],
    ['Morrison', 'Multiple voices', 'Beloved moves between characters’ perspectives and includes passages in which voices merge, so no single account is complete.', (cx, cy) => [-60, -20, 20, 60].map((dx, i) => speech(cx + dx - 26, cy - 34 + (i % 2) * 22, 52, 28, [C.tealLight, C.cream, C.teal, C.panel][i])).join('')],
  ];
  let yy = Y;
  rows.forEach(([who, ti, body, icon], i) => {
    const pt = para(316, yy + 68, ti, 530, { size: 20, weight: 700 }), pb = para(316, yy + 72 + pt.h, body, 530, { size: 17, fill: C.muted }), rh = Math.max(150, 72 + pt.h + pb.h + 10), y = yy;
    s += panel(30, y, 840, rh) + `<rect x="42" y="${y + 12}" width="250" height="${rh - 24}" rx="10" fill="${[C.cream, C.tealLight, '#f6e3d6'][i]}"/>`;
    s += icon(167, y + rh / 2);
    s += T(316, y + 40, who, { size: 15, weight: 700, fill: C.tealDark }) + pt.s + pb.s;
    yy += rh + gap;
  });
  add('04-narrative-voice-and-tense',
    svg(900, Math.round(yy + 12), 'Post-1900 prose: who tells, and when', s),
    'Three narrative methods. Coetzee: first-person present tense, so the Magistrate narrates without hindsight and his understanding grows and fails alongside ours. Mansfield: interior focalisation and free indirect discourse follow a character’s shifting perceptions, often within a single day. Morrison: Beloved moves between perspectives and merges voices, so no single account is complete.',
    'Present tense, close focalisation and merging voices all limit what we know.',
    '## Post-1900 prose methods');
}

// 05 Structure and allegory
{
  const Y = 118;
  let s = '';
  s += panel(30, Y, 410, 300) + T(50, Y + 36, 'Fragmented, non-linear', { size: 19, weight: 700 }) + T(50, Y + 60, 'Beloved', { size: 17, italic: true, fill: C.tealDark, weight: 700 });
  const cx = 235, cy = Y + 172;
  let d = '';
  for (let k = 0; k <= 64; k++) { const a = k * 0.32, r = 96 - k * 1.2; d += `${k ? 'L' : 'M'}${cx + r * Math.cos(a)},${cy + r * Math.sin(a)} `; }
  s += path(d, { stroke: C.tealDark, w: 3, extra: 'marker-end="url(#ahT)"' });
  s += `<circle cx="${cx}" cy="${cy}" r="16" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += T(cx, Y + 284, 'circling back to a central event', { size: 15, anchor: 'middle', fill: C.muted });
  const r1 = card(460, Y, 410, { kicker: 'WHY DELAY?', title: 'The past returns rather than being told', body: ['The central event is revealed gradually, through memory.', 'Ask why the writer delays or fragments information, and what the reader feels at the moment of revelation.'], bullets: true, size: 16, minH: 300 });
  s += r1.s;
  const y2 = Y + 324;
  s += T(30, y2 + 14, 'Allegory and an unnamed setting', { size: 20, weight: 700 }) + `<text x="370" y="${y2 + 14}" font-size="17" font-weight="700" fill="${C.tealDark}" font-style="italic">Waiting for the Barbarians</text>`;
  const r = row(y2 + 30, [
    { title: 'No names', body: 'An unnamed Empire, a frontier town, no specified date.' },
    { title: 'Allegory', body: 'Power, torture and the construction of an “enemy” are not tied to one regime.' },
    { title: 'Weigh it in AO5', body: 'Does allegory universalise, or does it risk abstracting real suffering?', fill: C.cream, edge: C.olive },
  ], { arrows: true, gap: 42, card: { size: 16, tsize: 18, pad: 16 } });
  s += r.s;
  add('05-structure-and-allegory',
    svg(900, Math.round(y2 + 30 + r.h + 24), 'Withheld order, withheld names', s),
    'Left: a spiral circling inward to a central point, showing how Beloved reveals its central event gradually by circling back through memory. Right: ask why the writer delays information and what the reader feels at the revelation. Below: Waiting for the Barbarians has an unnamed Empire, frontier town and date, so it works as allegory about power, torture and the making of an enemy, which AO5 can weigh.',
    'Delay and vagueness are choices to analyse and evaluate.',
    '## Post-1900 prose methods');
}

// 06 Post-1900 poetry methods
{
  const Y = 116;
  let s = '';
  // sequences
  s += T(30, Y + 6, 'Sequences and voices: poems answer one another', { size: 20, weight: 700 });
  const sy = Y + 22;
  s += panel(30, sy, 412, 190, C.tealLight, C.tealDark) + `<text x="50" y="${sy + 34}" font-size="18" font-weight="700" fill="${C.ink}" font-style="italic">The Wild Iris</text>`;
  [['flowers', 110], ['gardener', 236], ['a god', 362]].forEach(([l, x], i) => { s += speech(x - 52, sy + 60, 104, 40, [C.cream, C.panel, C.mustard][i]) + T(x, sy + 86, l, { size: 16, weight: 700, anchor: 'middle' }); });
  s += path(`M116,${sy + 124} Q173,${sy + 156} 226,${sy + 124}`, { stroke: C.tealDark, w: 2.5, extra: 'marker-start="url(#ahT)" marker-end="url(#ahT)"' }) + path(`M246,${sy + 124} Q299,${sy + 156} 356,${sy + 124}`, { stroke: C.tealDark, w: 2.5, extra: 'marker-start="url(#ahT)" marker-end="url(#ahT)"' });
  s += T(236, sy + 178, 'voices answer across the book', { size: 15, anchor: 'middle', fill: C.muted });
  s += panel(458, sy, 412, 190, C.cream, C.olive) + `<text x="478" y="${sy + 34}" font-size="18" font-weight="700" fill="${C.ink}" font-style="italic">Native Guard</text>`;
  s += chip(478, sy + 52, 'personal elegy for the poet’s mother', { size: 15, w: 372, fill: C.panel, edge: C.olive }).s;
  s += chip(478, sy + 92, 'history of a regiment of Black Union soldiers', { size: 15, w: 372, fill: C.panel, edge: C.olive }).s;
  s += chip(478, sy + 132, 'linked sonnets in a soldier’s voice', { size: 15, w: 372, fill: C.panel, edge: C.olive }).s;
  const y2 = sy + 206;
  s += T(30, y2 + 14, 'In a (b) answer, place the poem in its sequence; in an (a) answer, use the sequence’s structure as evidence.', { size: 16, fill: C.tealDark, weight: 600 });
  const r = row(y2 + 34, [
    { kicker: 'RECEIVED FORMS, NEW USES', title: 'Sonnet, villanelle, ghazal, pantoum', body: 'A form associated with order or celebration, used for loss or violence, creates tension. Trethewey’s strict repeating forms in poems about memory make the form enact return.' },
    { kicker: 'FREE VERSE', title: 'The line break does the shaping', body: 'Where do lines end, what word is held at the edge, and how does white space create pause or isolation?' },
    { kicker: 'BETWEEN TRADITIONS', title: 'Okara', body: 'Often read as working between African and European traditions. Show how imagery, rhythm or syntax carries that tension.' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, pad: 16 } });
  s += r.s;
  add('06-post-1900-poetry-methods',
    svg(900, Math.round(y2 + 34 + r.h + 24), 'Post-1900 poetry methods', s),
    'Two sequences: The Wild Iris gives voices to flowers, a gardener and a god that answer one another; Native Guard weaves personal elegy for the poet’s mother with the history of a regiment of Black Union soldiers, including linked sonnets in a soldier’s voice. Below: received forms used in new ways, as in Trethewey’s repeating forms; free verse shaped by line breaks; and Okara’s voice between African and European traditions.',
    'Read poems within their sequence and ask what each form brings with it.',
    '## Post-1900 poetry methods');
}

// 07 Critical approaches and the model paragraph
{
  const Y = 118;
  let s = '';
  const r1 = row(Y, [
    { title: 'Postcolonial', body: 'Power, empire, the construction of the “other”.' },
    { title: 'Feminist', body: 'Voice, the body, domestic life, who is silenced.' },
    { title: 'Psychoanalytic', body: 'Trauma, memory, repression.' },
    { title: 'Ecocritical', body: 'People and the natural world.' },
  ], { gap: 12, card: { size: 15, tsize: 18, pad: 14, tfill: C.tealDark } });
  s += r1.s;
  const ky = Y + r1.h + 30;
  s += T(30, ky + 6, 'Model paragraph: Coetzee’s Magistrate', { size: 20, weight: 700 });
  const top = card(30, ky + 22, 840, { kicker: 'METHOD (AO2)', body: 'Present-tense narration: the reader shares his partial understanding as events unfold.', fill: C.tealLight, edge: C.tealDark, bfill: C.ink, size: 17 });
  s += top.s;
  const y1 = ky + 22 + top.h + 30;
  const r2 = row(y1, [
    { kicker: 'SYMPATHETIC READING', title: 'The novel’s conscience', body: 'The official who refuses the Empire’s cruelty and suffers for it.' },
    { kicker: 'SCEPTICAL POSTCOLONIAL READING', title: 'A gentler repetition', body: 'His interest in the barbarian girl repeats the Empire’s desire to read and possess others’ bodies.', fill: '#f6e3d6', edge: C.rust, kfill: C.rust },
  ], { gap: 20, card: { size: 16, tsize: 19 } });
  s += r2.s;
  const y2 = y1 + r2.h + 30;
  const test = card(30, y2, 840, { kicker: 'TESTED (AO5)', body: 'The present tense supports the second reading: it denies him the hindsight to judge himself, so we watch him fail to see his own complicity.', fill: C.panel, edge: C.ink, bfill: C.ink, size: 17 });
  s += test.s;
  const y3 = y2 + test.h + 30;
  const j = card(30, y3, 840, { kicker: 'JUDGEMENT (AO3)', title: 'A liberal conscience that cannot escape the system it opposes', fill: C.cream, edge: C.olive, kfill: C.olive, tsize: 19 });
  s += j.s;
  s += arrow(450, ky + 22 + top.h + 4, 450, y1 - 4, { w: 3 }) + arrow(450, y1 + r2.h + 4, 450, y2 - 4, { w: 3 }) + arrow(450, y2 + test.h + 4, 450, y3 - 4, { w: 3 });
  add('07-critical-approaches-model',
    svg(900, Math.round(y3 + j.h + 24), 'Critical approaches give AO5 a framework', s),
    'Four critical approaches: postcolonial (power, empire, the other), feminist (voice, the body, who is silenced), psychoanalytic (trauma, memory, repression) and ecocritical (people and nature). Below, the model paragraph on Coetzee’s Magistrate: present-tense narration; a sympathetic reading against a sceptical postcolonial one; the present tense supports the second; judgement that he is a liberal conscience unable to escape the system.',
    'Name an approach, then test it on the text before judging.',
    '## Context and AO5 for modern texts');
}

// 08 Answer shapes
{
  const Y = 120;
  let s = '';
  const flow = (y, label, steps2, fill, edge) => {
    let o = T(30, y + 6, label, { size: 20, weight: 700, fill: edge });
    const r = row(y + 22, steps2.map((t1) => ({ body: t1, align: 'middle', bfill: C.ink, fill, edge })), { arrows: true, gap: 34, card: { size: 16, pad: 12 }, minH: 92 });
    return { s: o + r.s, h: r.h + 22 };
  };
  const a = flow(Y, '(b) passage or poem', ['Locate in the text or sequence', 'Thesis', 'Voice, structure, form, imagery', 'Link outward', 'Evaluated AO5'], C.panel, C.tealDark);
  s += a.s;
  const b = flow(Y + a.h + 30, '(a) whole text', ['Positioned thesis', 'Moments or poems from across the text', 'Method in every paragraph', 'AO5 woven through'], C.cream, C.olive);
  s += b.s;
  add('08-answer-shapes',
    svg(900, Math.round(Y + a.h + 30 + b.h + 24), 'Answer shapes for Section B', s),
    'Two flows. A (b) answer on a passage or poem: locate it in the text or sequence, state a thesis, analyse voice, structure, form and imagery, link outward, then evaluate AO5. An (a) whole-text essay: a positioned thesis, moments or poems from across the text, method in every paragraph, and AO5 woven through.',
    'Both answers end in evaluated AO5; the (a) essay weaves it through.',
    '## Answer shapes');
}
