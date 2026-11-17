import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-english-literature-9695-section-a-prose';
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
// 01 Section A at a glance
{
  const fig = compose('Paper 2 Section A at a glance', [
    (y) => { const b = markBar(y + 26, [{ label: 'Section A: Prose', sub: '25 marks · one essay', value: 25, fill: C.mustard }, { label: 'Section B: Unseen', sub: '25 marks', value: 25, fill: C.tealLight }]); return { s: T(30, y + 14, 'Paper 2 · 50 marks', { size: 17, weight: 700, fill: C.muted }) + b.s, h: b.h + 26 }; },
    (y) => {
      const o = { minH: 150, size: 17, bullets: true };
      const L = card(30, y, 380, { kicker: 'QUESTION (a)', title: 'Essay on the text as a whole', body: ['A character, relationship, theme or narrative method across the text.'], ...o });
      const R = card(490, y, 380, { kicker: 'QUESTION (b)', title: 'Printed passage', body: ['Analyse it with reference to the wider work.'], ...o, fill: C.cream, edge: C.olive, kfill: C.olive });
      const h = Math.max(L.h, R.h);
      return { s: L.s + R.s + `<circle cx="450" cy="${y + h / 2}" r="30" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + T(450, y + h / 2 + 7, 'or', { size: 20, weight: 700, anchor: 'middle' }), h };
    },
    (y) => {
      let s = T(30, y + 18, 'Assessed on', { size: 19, weight: 700 });
      let x = 160; ['AO1', 'AO2', 'AO3', 'AO4'].forEach((a) => { const c = chip(x, y - 2, a, { size: 18, fill: C.tealLight, edge: C.tealDark }); s += c.s; x += c.w + 10; });
      const r = { s: T(x + 10, y + 18, 'AO1 credits “an appreciation of relevant contexts”', { size: 17, fill: C.muted }), h: 20 };
      return { s: s + r.s, h: 30 };
    },
    (y) => note(y + 6, 'Set texts are not allowed in the exam room, and dictionaries may not be used.'),
  ]);
  add('01-section-a-at-a-glance', fig,
    'Paper 2 is worth 50 marks: Section A Prose is 25 marks for one essay on a novel or the Stories of Ourselves selection, and Section B Unseen the other 25. On each set text you choose question (a), an essay on the text as a whole, or question (b), a printed passage analysed with reference to the wider work. Section A is assessed on AO1 to AO4; set texts and dictionaries are not allowed.',
    'One prose essay worth 25 marks: the whole-text essay (a) or the passage question (b).',
    '## What the section asks of you');
}

// 02 Set texts 2026 and 2027
{
  const Y = 120;
  const v = venn(Y, '2026 examination', '2027 examination', [
    { head: '2026 only', items: [['Kiran Desai', ['The Inheritance', 'of Loss']], ['', ['Stories of Ourselves,', 'Volume 1 selection']]] },
    { head: 'Both years', items: [['Evelyn Waugh', ['A Handful of Dust']], ['Colson Whitehead', ['The Underground', 'Railroad']]] },
    { head: '2027 only', items: [['', ['Stories of Ourselves,', 'Volume 3 selection']], ['Tara June Winch', ['The Yield']]] },
  ], { h: 270, itemGap: 30 });
  const n = note(Y + v.h + 24, 'Check the list for your own examination year.');
  add('02-set-texts-2026-2027',
    svg(900, Math.round(Y + v.h + 24 + n.h + 24), 'Section A prose texts: 2026 and 2027', v.s + n.s),
    'Two overlapping lists of Section A texts. Waugh’s A Handful of Dust and Whitehead’s The Underground Railroad are set in both 2026 and 2027. Desai’s The Inheritance of Loss and the Stories of Ourselves Volume 1 selection are 2026 only; the Stories of Ourselves Volume 3 selection and Tara June Winch’s The Yield are 2027 only.',
    'Two novels carry over; the short-story selection changes volume.',
    '## What the section asks of you');
}

// 03 Who tells? Who sees?
{
  const Y = 116, rowH = 116, gap = 12;
  let s = T(30, Y + 6, 'Who tells? Narrative voice', { size: 20, weight: 700 });
  const N = (x, y, r = 22) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x, y + 6, 'N', { size: 17, weight: 700, anchor: 'middle' });
  const M = (x, y, r = 20, f = C.teal) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`;
  const rows = [
    ['First person', 'Intimacy, but limited knowledge. Raises reliability: does the narrator understand, or admit, everything?', (cx, cy) => `<circle cx="${cx}" cy="${cy}" r="30" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + `<circle cx="${cx}" cy="${cy}" r="30" fill="${C.teal}" fill-opacity="0.5"/>` + T(cx, cy + 7, 'I', { size: 21, weight: 700, anchor: 'middle' })],
    ['Third-person omniscient', 'Can move between minds and comment on events. Listen for judgement in the narrator’s own voice.', (cx, cy) => N(cx, cy - 24) + [-60, 0, 60].map((d) => M(cx + d, cy + 30, 15) + `<line x1="${cx + d * 0.3}" y1="${cy - 4}" x2="${cx + d * 0.85}" y2="${cy + 14}" stroke="${C.ink}" stroke-width="2"/>`).join('')],
    ['Third-person limited', 'Stays close to one character’s perceptions.', (cx, cy) => N(cx - 32, cy) + M(cx + 26, cy, 22) + `<line x1="${cx - 9}" y1="${cy}" x2="${cx + 3}" y2="${cy}" stroke="${C.ink}" stroke-width="2.5"/>` + M(cx + 76, cy + 24, 11, C.tealLight)],
    ['Free indirect discourse', 'Third-person grammar, but the character’s vocabulary and attitude: thoughts presented with ironic distance.', (cx, cy) => `<circle cx="${cx - 18}" cy="${cy}" r="30" fill="${C.mustard}" fill-opacity="0.85" stroke="${C.ink}" stroke-width="2.5"/><circle cx="${cx + 18}" cy="${cy}" r="30" fill="${C.teal}" fill-opacity="0.75" stroke="${C.ink}" stroke-width="2.5"/>` + T(cx - 30, cy + 6, 'N', { size: 16, weight: 700, anchor: 'middle' })],
  ];
  s += N(560, Y, 13).replace('font-size="17"', 'font-size="14"') + T(580, Y + 6, 'narrator', { size: 15, fill: C.muted }) + M(680, Y, 11) + T(698, Y + 6, 'a character’s mind', { size: 15, fill: C.muted });
  rows.forEach(([ti, body, icon], i) => {
    const y = Y + 22 + i * (rowH + gap);
    s += panel(30, y, 840, rowH, i === 3 ? C.cream : C.panel, i === 3 ? C.olive : C.panelEdge);
    s += icon(140, y + rowH / 2);
    s += T(260, y + 38, ti, { size: 20, weight: 700 });
    s += para(260, y + 66, body, 590, { size: 17, fill: C.muted }).s;
  });
  const y2 = Y + 22 + 4 * (rowH + gap) + 16;
  s += T(30, y2 + 6, 'Who sees? Focalisation', { size: 20, weight: 700 });
  const fy = y2 + 22, fh = 190;
  s += panel(30, fy, 840, fh, C.tealLight, C.tealDark);
  // two focalisers looking at one theme
  s += pawn(100, fy + 150, C.teal, 0.85) + pawn(390, fy + 150, C.mustard, 0.85);
  s += `<path d="M245,${fy + 46} L285,${fy + 86} L245,${fy + 126} L205,${fy + 86} Z" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + T(245, fy + 92, 'theme', { size: 15, weight: 700, anchor: 'middle' });
  s += arrow(122, fy + 86, 196, fy + 86, { w: 3, color: C.tealDark, marker: 'ahT' }) + arrow(368, fy + 86, 294, fy + 86, { w: 3, color: C.olive, marker: 'ahO' });
  s += T(100, fy + 178, 'focaliser 1', { size: 15, anchor: 'middle', weight: 700 }) + T(390, fy + 178, 'focaliser 2', { size: 15, anchor: 'middle', weight: 700 });
  s += para(470, fy + 40, 'The focaliser is the character whose perspective shapes a scene, and it may change between chapters.', 380, { size: 17, fill: C.ink }).s;
  s += para(470, fy + 124, 'Desai moves between characters and between India and New York: how does the same theme look from two positions?', 380, { size: 16, fill: C.tealDark, weight: 600 }).s;
  add('03-who-tells-who-sees',
    svg(900, Math.round(fy + fh + 24), 'Who tells, and who sees?', s),
    'Four narrative voices: first person, with intimacy, limited knowledge and a question of reliability; third-person omniscient, moving between minds; third-person limited, close to one character; and free indirect discourse, which blends third-person grammar with a character’s vocabulary and attitude. Below, two focalisers view the same theme from different positions, as Desai’s novel moves between characters and between India and New York.',
    'Ask who tells the story and whose perspective shapes each scene.',
    '## The key idea: who tells, who sees, and when');
}

// 04 When? Time, pace and order
{
  const Y = 120;
  let s = T(30, Y + 6, 'Chronology', { size: 20, weight: 700 });
  const ly = Y + 104;
  s += `<line x1="60" y1="${ly}" x2="840" y2="${ly}" stroke="${C.ink}" stroke-width="4" marker-end="url(#ah)"/>`;
  s += T(840, ly + 30, 'story time', { size: 15, anchor: 'end', fill: C.muted });
  s += `<circle cx="450" cy="${ly}" r="12" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + T(450, ly + 36, 'the narrative “now”', { size: 16, weight: 700, anchor: 'middle' });
  s += `<path d="M440,${ly - 14} Q330,${ly - 80} 200,${ly - 12}" fill="none" stroke="${C.tealDark}" stroke-width="3.5" marker-end="url(#ahT)"/>` + T(300, ly - 62, 'analepsis (flashback)', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += `<path d="M460,${ly - 14} Q580,${ly - 80} 710,${ly - 12}" fill="none" stroke="${C.rust}" stroke-width="3.5" marker-end="url(#ahR)"/>` + T(600, ly - 62, 'prolepsis (flash-forward)', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
  // pace
  const py = ly + 74;
  s += T(30, py + 6, 'Pace', { size: 20, weight: 700 });
  const bar = (y, a, b, lab, sub, f) => {
    // story time (top) mapped to text space (bottom)
    return `<rect x="${a[0]}" y="${y}" width="${a[1]}" height="26" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2"/>` +
      `<path d="M${a[0]},${y + 26} L${b[0]},${y + 74} L${b[0] + b[1]},${y + 74} L${a[0] + a[1]},${y + 26} Z" fill="${f}" opacity="0.6"/>` +
      `<rect x="${b[0]}" y="${y + 74}" width="${b[1]}" height="26" fill="${f}" stroke="${C.ink}" stroke-width="2"/>` +
      T(a[0] + a[1] / 2, y - 8, lab, { size: 17, weight: 700, anchor: 'middle' }) + T(b[0] + b[1] / 2, y + 126, sub, { size: 16, anchor: 'middle', fill: C.muted });
  };
  s += T(30, py + 56, 'story time', { size: 15, fill: C.muted }) + T(30, py + 130, 'text', { size: 15, fill: C.muted });
  s += bar(py + 38, [130, 300], [250, 40], 'Summary: years', 'in a sentence', C.cream);
  s += bar(py + 38, [620, 30], [500, 340], 'Scene: a moment', 'moment-by-moment detail', C.mustard);
  s += T(450, py + 200, 'Where a writer slows down shows what matters.', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  // structure
  const sy = py + 236;
  s += T(30, sy + 6, 'Structure', { size: 20, weight: 700 });
  const n = 6, bw = 840 / n;
  for (let i = 0; i < n; i++) s += `<rect x="${30 + i * bw}" y="${sy + 24}" width="${bw - 8}" height="62" rx="6" fill="${i === 0 || i === n - 1 ? C.teal : C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + T(30 + i * bw + (bw - 8) / 2, sy + 62, i === 0 ? 'opening' : i === n - 1 ? 'ending' : 'part', { size: 16, anchor: 'middle', weight: i === 0 || i === n - 1 ? 700 : 400 });
  s += path(`M34,${sy + 96} q0,14 14,14 L852,${sy + 110} q14,0 14,-14`, { stroke: C.tealDark, w: 3 });
  s += T(450, sy + 136, 'chapter and part divisions; the opening and ending frame the whole', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 });
  const nt = note(sy + 158, 'Whitehead’s novel is built from sections set in different states, so its episodic structure is part of its meaning.');
  s += nt.s;
  add('04-time-pace-structure',
    svg(900, Math.round(sy + 158 + nt.h + 24), 'When? Time, pace and order', s),
    'A story-time line with the narrative now marked, a curved arrow back for analepsis or flashback and one forward for prolepsis or flash-forward. Pace: summary maps years of story time onto a sentence of text, while a scene stretches a moment across many lines. Structure: parts and chapters framed by the opening and ending, as in Whitehead’s episodic sections set in different states.',
    'Order, pace and divisions show what a writer wants us to notice.',
    '## The key idea: who tells, who sees, and when');
}

// 05 Short stories
{
  const Y = 120;
  let s = '';
  s += T(30, Y + 6, 'A novel', { size: 18, weight: 700, fill: C.muted });
  s += `<rect x="30" y="${Y + 20}" width="840" height="40" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += T(30, Y + 104, 'A short story is compressed', { size: 18, weight: 700, fill: C.ink });
  const sx = 250, sw = 400, sy = Y + 120;
  s += `<rect x="${sx}" y="${sy}" width="${sw}" height="56" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += `<rect x="${sx}" y="${sy}" width="70" height="56" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += `<rect x="${sx + sw - 70}" y="${sy}" width="70" height="56" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5" stroke-dasharray="8 5"/>`;
  s += path(`M${sx + sw},${sy} l26,0 M${sx + sw},${sy + 56} l26,0`, { w: 2.5, extra: 'stroke-dasharray="6 5"' });
  const st = (cx, cy, r) => { let p = ''; for (let k = 0; k < 10; k++) { const a = -Math.PI / 2 + (k * Math.PI) / 5, rr = k % 2 ? r * 0.45 : r; p += `${k ? 'L' : 'M'}${cx + rr * Math.cos(a)},${cy + rr * Math.sin(a)} `; } return `<path d="${p}Z" fill="${C.rust}" stroke="${C.ink}" stroke-width="2"/>`; };
  s += st(sx + sw / 2, sy + 28, 20);
  // callouts
  const call = (x1, y1, x2, y2, lines, anchor) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${C.ink}" stroke-width="2"/>` + tl(anchor === 'end' ? x2 - 8 : x2 + 8, y2 + 5, lines, { size: 16, anchor, fill: C.ink }, 20);
  s += call(sx + 35, sy + 58, sx - 30, sy + 110, ['the opening', 'carries more weight'], 'end');
  s += call(sx + sw / 2, sy + 58, sx + sw / 2, sy + 104, [], 'middle') + tl(sx + sw / 2, sy + 124, ['a single image may', 'hold the whole meaning'], { size: 16, anchor: 'middle' }, 20);
  s += call(sx + sw - 35, sy + 58, sx + sw + 30, sy + 110, ['endings are', 'often open'], 'start');
  const y3 = sy + 186;
  s += T(30, y3 + 6, 'If an (a) question asks for a set number of stories', { size: 19, weight: 700 });
  const r = row(y3 + 24, [
    { title: 'Write about exactly that number', body: 'No more and no fewer.' },
    { title: 'Choose stories that build an argument', body: 'Not two that say the same thing.', fill: C.cream, edge: C.olive },
  ], { gap: 20, card: { size: 17, tsize: 19 } });
  s += r.s;
  add('05-short-stories',
    svg(900, Math.round(y3 + 24 + r.h + 24), 'Short stories need a slightly different approach', s),
    'A long bar for a novel above a much shorter bar for a short story. The story’s opening and ending are highlighted as carrying more weight, a single star marks one image that may hold the whole meaning, and the ending is drawn open. Below: write about exactly the number of stories asked for, and choose stories that build an argument.',
    'In a compressed story, openings, endings and single images carry the meaning.',
    '## Short stories need a slightly different approach');
}

// 06 The (b) passage answer
{
  const Y = 120;
  const st = steps(Y, [
    { title: 'Locate the passage', body: 'In a sentence: where it falls and what the reader already knows.' },
    { title: 'State its narrative function', body: 'What it does to character, theme or the reader’s judgement. This is your thesis, in the question’s own words.' },
    { title: 'Analyse the narration first', body: 'Who tells, who sees, and how close we are to a mind.' },
    { title: 'Then language and structure', body: 'Sentence shape, imagery, dialogue, pace, the passage’s own turning point.' },
    { title: 'Connect outward', body: 'Two or three times, to show knowledge of the whole text.' },
  ], { gap: 10, size: 16, tsize: 19, highlight: 2 });
  const n = note(Y + st.h + 18, 'A (b) answer that drifts into a general essay leaves the printed passage behind.', { title: 'Avoid' });
  add('06-passage-answer-steps',
    svg(900, Math.round(Y + st.h + 18 + n.h + 24), 'The (b) passage answer: narration first', st.s + n.s),
    'Five numbered steps: locate the passage, state its narrative function as a thesis, analyse the narration first (who tells, who sees, how close to a mind), then language and structure, and connect outward two or three times. A warning says not to drift into a general essay.',
    'Analyse how the passage is told before what it is about.',
    '## Writing the (b) passage answer');
}

// 07 Annotated model passage
{
  const Y = 118;
  let s = '';
  const lines = [
    ['Mrs Okafor had always said the house would outlive them all, and she said', C.cream, 1],
    ['it again now, to the estate agent, who was writing something on a clipboard.', C.cream, 0],
    ['The roof, the agent noted, would need attention.', C.tealLight, 2],
    ['Mrs Okafor said that the roof had always needed attention, and that it had', '#f6e3d6', 3],
    ['never once let in the rain.', '#f6e3d6', 0],
  ];
  const ph = 46 + lines.length * 36 + 14;
  s += panel(30, Y, 840, ph, C.panel, C.ink) + T(50, Y + 30, 'Original passage, written for the guide (shown sentence by sentence)', { size: 15, weight: 700, fill: C.muted });
  lines.forEach(([l, f, b], i) => {
    const y = Y + 66 + i * 36;
    s += `<rect x="90" y="${y - 24}" width="${cw(18) * l.length + 4}" height="32" rx="4" fill="${f}"/>` + T(94, y, l, { size: 18 });
    if (b) s += badge(62, y - 7, 15, String(b), C.mustard);
  });
  const cy0 = Y + ph + 18;
  const A = [
    ['Reported indirectly', 'Her certainty (“the house would outlive them all”) is held at a slight distance and begins to sound like a habit rather than a truth.', C.olive],
    ['Given equal weight', 'The agent’s brief, factual observation interrupts her, and the narrator quietly undermines her.', C.tealDark],
    ['A contradiction left uncorrected', 'The roof “had always needed attention” but “never once let in the rain.”', C.rust],
  ];
  let y = cy0;
  A.forEach(([ti, b, e], i) => {
    const c = card(78, y, 792, { title: ti, body: b, tfill: e, edge: e, size: 16, tsize: 18, pad: 14 });
    s += c.s + badge(46, y + c.h / 2, 16, String(i + 1), C.mustard);
    y += c.h + 10;
  });
  const n = note(y + 8, 'The irony is gentle: the reader sees her loyalty and her denial at once. The paragraph analyses how the story is told before what it is about.');
  s += n.s;
  add('07-annotated-model-passage',
    svg(900, Math.round(y + 8 + n.h + 24), 'How the narration judges Mrs Okafor', s),
    'The guide’s original passage, sentence by sentence, with three numbered notes. 1: Mrs Okafor’s certainty is reported indirectly, so it sounds like habit rather than truth. 2: the agent’s factual remark is given equal weight and undermines her. 3: the narrator leaves her contradiction about the roof uncorrected, creating gentle irony that shows her loyalty and denial at once.',
    'Indirect report, equal weight and an uncorrected contradiction create gentle irony.',
    '## Writing the (b) passage answer');
}

// 08 The (a) essay: from topic to argument
{
  const Y = 120;
  let s = '';
  const A = card(90, Y, 780, { kicker: 'A TOPIC', title: '“Waugh presents the country house as a refuge”', fill: C.panel, edge: C.rust, kfill: C.rust, tsize: 19 });
  s += A.s + cross(52, Y + A.h / 2, 18);
  s += arrow(450, Y + A.h + 6, 450, Y + A.h + 40, { w: 3.5 }) + T(470, Y + A.h + 30, 'take a position', { size: 16, weight: 700, fill: C.muted });
  const y2 = Y + A.h + 48;
  const B = card(90, y2, 780, { kicker: 'AN ARGUMENT', title: '“Waugh presents the country house as a refuge', fill: C.cream, edge: C.tealDark, kfill: C.tealDark, tsize: 19, minH: 120 });
  s += B.s + tick(52, y2 + 60, 18);
  s += `<rect x="106" y="${y2 + 82}" width="${cw(19, 700) * 41 + 10}" height="30" rx="5" fill="${C.mustard}"/>` + T(111, y2 + 104, 'that its owner mistakes for a moral order”', { size: 19, weight: 700 });
  const y3 = y2 + 120 + 22;
  const r = row(y3, [
    { title: 'Moments across the text', body: 'Including the ending; say how the focus develops.' },
    { title: 'Method in every paragraph', body: 'Voice, structure and language, not just events.' },
    { title: 'Short quotations', body: 'Closed book: a bank of phrases learned in context.' },
  ], { gap: 14, card: { size: 16, tsize: 18, pad: 16 } });
  s += r.s;
  add('08-whole-text-essay',
    svg(900, Math.round(y3 + r.h + 24), 'The (a) essay: from topic to argument', s),
    'A topic, “Waugh presents the country house as a refuge”, is crossed out; an argument adds “that its owner mistakes for a moral order” and is ticked. Below, three reminders: choose moments from across the text including the ending, keep narrative method in every paragraph, and use short quotations learned in context.',
    'A thesis becomes an argument when it takes a position.',
    '## Writing the (a) essay');
}
