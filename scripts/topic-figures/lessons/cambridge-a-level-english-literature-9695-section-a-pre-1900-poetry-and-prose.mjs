import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-english-literature-9695-section-a-pre-1900-poetry-and-prose';
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


// ---- lesson figures ----
const tag = (x, y, s, kind) => chip(x, y, s, { size: 15, fill: kind === 'Poetry' ? C.tealLight : C.cream, edge: kind === 'Poetry' ? C.tealDark : C.olive });

// 01 Section A at a glance
{
  const fig = compose('Paper 4 Section A at a glance', [
    (y) => { const b = markBar(y + 26, [{ label: 'Section A: Pre-1900', sub: '25 marks · one essay', value: 25, fill: C.mustard }, { label: 'Section B: Post-1900', sub: '25 marks', value: 25, fill: C.tealLight }]); return { s: T(30, y + 14, 'Paper 4 · 50 marks', { size: 17, weight: 700, fill: C.muted }) + b.s, h: b.h + 26 }; },
    (y) => {
      let s = T(30, y + 18, 'Assessed on AO1 to AO5, each 20%', { size: 19, weight: 700 });
      const w = 840 / 5;
      for (let i = 0; i < 5; i++) {
        const x = 30 + i * w, f = i === 4 ? C.mustard : (i % 2 ? C.tealLight : C.panel);
        s += `<rect x="${x}" y="${y + 34}" width="${w}" height="66" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x + w / 2, y + 62, `AO${i + 1}`, { size: 20, weight: 700, anchor: 'middle' }) + T(x + w / 2, y + 88, '20%', { size: 17, anchor: 'middle' });
      }
      s += T(870, y + 126, 'AO5 draws on the long critical conversation around older texts', { size: 16, weight: 600, anchor: 'end', fill: C.olive });
      return { s, h: 134 };
    },
    (y) => {
      const o = { minH: 104, size: 17 };
      const L = card(30, y, 380, { kicker: 'QUESTION (a)', title: 'Essay on the whole text', ...o });
      const R = card(490, y, 380, { kicker: 'QUESTION (b)', title: 'A passage or poem from the text, printed on the paper', ...o, fill: C.cream, edge: C.olive, kfill: C.olive });
      const h = Math.max(L.h, R.h);
      return { s: L.s + R.s + `<circle cx="450" cy="${y + h / 2}" r="30" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + T(450, y + h / 2 + 7, 'or', { size: 20, weight: 700, anchor: 'middle' }), h };
    },
    (y) => note(y, 'Texts are not allowed in the exam room.'),
  ]);
  add('01-section-a-at-a-glance', fig,
    'Paper 4 is worth 50 marks: Section A on a pre-1900 text is 25 marks for one essay and Section B on a post-1900 text the other 25. Section A is assessed on AO1 to AO5 at 20% each. On each set text you choose question (a), an essay on the whole text, or question (b) on a printed passage or poem. Texts are not allowed in the exam room.',
    'One pre-1900 essay worth 25 marks, assessed on all five objectives equally.',
    '## What the section asks of you');
}

// 02 The form rule and the 2026 texts
{
  const Y = 136;
  let s = '';
  const colW = 400;
  const prose = [['Austen', 'Pride and Prejudice'], ['Eliot', 'Middlemarch'], ['Hardy', 'Jude the Obscure']];
  const poetry = [['Chaucer', 'The Wife of Bath’s Prologue and Tale'], ['Shakespeare', 'Selected Sonnets'], ['Whitman', 'selected poems from Leaves of Grass']];
  const col = (x, title, list, fill, edge, ink, out) => {
    let c = panel(x, Y, colW, 318, fill, edge) + T(x + 20, Y + 36, title, { size: 20, weight: 700, fill: ink });
    list.forEach(([a, b], i) => {
      const yy = Y + 78 + i * 64;
      c += T(x + 20, yy, a, { size: 17, weight: 700 });
      c += b.startsWith('selected poems from ') ? T(x + 20, yy + 23, 'selected poems from', { size: 17 }) + T(x + 20 + cw(17) * 20 + 4, yy + 23, 'Leaves of Grass', { size: 17, italic: true }) : T(x + 20, yy + 23, b, { size: 17, italic: true });
    });
    c += `<rect x="${x + 20}" y="${Y + 256}" width="${colW - 40}" height="48" rx="10" fill="${C.panel}" stroke="${ink}" stroke-width="2.5" stroke-dasharray="7 5"/>`;
    c += T(x + colW / 2, Y + 287, out, { size: 17, weight: 700, anchor: 'middle', fill: ink });
    return c;
  };
  s += col(30, 'Pre-1900 prose', prose, C.cream, C.olive, C.olive, 'so Section B must be poetry');
  s += col(470, 'Pre-1900 poetry', poetry, C.tealLight, C.tealDark, C.tealDark, 'so Section B must be prose');
  s += T(450, Y - 12, '2026 Section A texts', { size: 17, weight: 700, anchor: 'middle', fill: C.muted });
  const rule = card(30, Y + 338, 840, { kicker: 'THE FORM RULE', title: 'Across Paper 4: one essay on a poetry text and one on a prose text, one from each section', body: 'Your choice of pre-1900 text decides the form of your post-1900 text. Two prose or two poetry texts breaks the rule.', fill: C.panel, edge: C.ink, size: 17 });
  s += rule.s;
  const n2 = note(Y + 338 + rule.h + 16, 'For 2027, Austen’s Mansfield Park replaces Pride and Prejudice and a selection of Byron’s poetry replaces Whitman. Check the list for your examination year.');
  s += n2.s;
  add('02-form-rule-and-texts',
    svg(900, Math.round(Y + 338 + rule.h + 16 + n2.h + 24), 'One poetry text and one prose text', s),
    'The 2026 Section A texts sorted by form. Prose: Austen’s Pride and Prejudice, Eliot’s Middlemarch and Hardy’s Jude the Obscure, so Section B must then be poetry. Poetry: Chaucer’s The Wife of Bath’s Prologue and Tale, Shakespeare’s Selected Sonnets and Whitman’s Leaves of Grass, so Section B must then be prose. For 2027, Mansfield Park replaces Pride and Prejudice and Byron replaces Whitman.',
    'Your pre-1900 choice fixes the form of your post-1900 text.',
    '## What the section asks of you');
}

// 03 Convention, not fault
{
  const Y = 120;
  let s = '';
  s += panel(30, Y, 330, 300, '#f6e3d6', C.rust) + T(195, Y + 36, 'Looks like a fault?', { size: 20, weight: 700, anchor: 'middle', fill: C.rust });
  ['a long narrative digression', 'a moralising narrator', 'a strict rhyme scheme', 'an archaic word'].forEach((c, i) => { s += chip(195, Y + 62 + i * 56, c, { size: 17, anchor: 'middle', fill: C.panel, edge: C.rust, weight: 600 }).s; });
  s += arrow(368, Y + 150, 432, Y + 150, { w: 4 });
  s += T(400, Y + 132, '', {});
  const st = steps(Y, [
    { title: 'A deliberate choice', body: 'Usually chosen within the conventions of its time.' },
    { title: 'Recognise the convention', body: 'See it as part of the period’s conventions, not an oddity.' },
    { title: 'Analyse how it is used or bent', body: 'What does the writer do with it here?' },
  ], { x: 440, w: 430, gap: 10, size: 16, tsize: 19, highlight: 2 });
  s += st.s;
  const yy = Y + Math.max(300, st.h) + 22;
  const r = row(yy, [
    { title: 'Criticising a moralising narrator', body: 'treats a convention as a weakness', fill: C.panel, edge: C.rust, tfill: C.rust },
    { title: 'Analysing what the narrator does', body: 'reads the text in its own terms first', fill: C.panel, edge: C.tealDark, tfill: C.tealDark },
  ], { gap: 20, card: { size: 16, tsize: 19, pad: 18 } });
  s += r.s + cross(30 + 400, yy + 8, 15) + tick(870 - 8, yy + 8, 15);
  add('03-convention-not-fault',
    svg(900, Math.round(yy + r.h + 26), 'Read older texts in their own terms', s),
    'A digression, a moralising narrator, a strict rhyme scheme or an archaic word can look like a fault to a modern reader, but each is usually a deliberate choice within the conventions of its time. Strong answers recognise the convention, then analyse how the writer uses or bends it, rather than criticising it.',
    'Recognise the convention first, then analyse how the writer uses or bends it.',
    '## The key idea: read the text in its own terms first');
}

// 04 Three narrators
{
  const Y = 116, rowH = 196, gap = 14;
  let s = '';
  const rows = [
    ['Eliot', 'Authorial commentary', 'The narrator steps out of the story to reflect, generalise and address the reader. These passages widen one character’s experience into a claim about human nature or society.', C.cream, C.olive],
    ['Austen', 'Irony and free indirect style', 'A character’s thoughts appear in the narrator’s voice, so the reader shares a view and judges it at once. Ask whose opinion a sentence really carries.', C.tealLight, C.tealDark],
    ['Hardy', 'Tragic narration', 'Characters are placed against forces larger than themselves: social institutions, chance and coincidence. Look for narration widening from the individual to the system.', '#f6e3d6', C.rust],
  ];
  rows.forEach(([who, ti, body, f, e], i) => {
    const y = Y + i * (rowH + gap);
    s += panel(30, y, 840, rowH);
    s += `<rect x="42" y="${y + 12}" width="250" height="${rowH - 24}" rx="10" fill="${f}"/>`;
    const cx = 167, cy = y + rowH / 2;
    if (i === 0) {
      s += `<rect x="62" y="${cy - 52}" width="120" height="104" rx="6" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + T(122, cy - 30, 'story', { size: 15, anchor: 'middle', fill: C.muted });
      s += pawn(100, cy + 42, C.teal, 0.55) + pawn(145, cy + 42, C.teal, 0.55);
      s += pawn(222, cy + 50, C.mustard, 0.8);
      s += speech(226, cy - 74, 54, 30) + T(253, cy - 53, '…', { size: 18, weight: 700, anchor: 'middle' });
    } else if (i === 1) {
      s += `<circle cx="${cx - 30}" cy="${cy - 14}" r="50" fill="${C.teal}" fill-opacity="0.8" stroke="${C.tealDark}" stroke-width="2.5"/><circle cx="${cx + 30}" cy="${cy - 14}" r="50" fill="${C.cream}" fill-opacity="0.8" stroke="${C.olive}" stroke-width="2.5"/>`;
      s += T(cx - 58, cy + 58, 'character’s', { size: 15, anchor: 'middle', weight: 700, fill: C.tealDark }) + T(cx - 58, cy + 76, 'thoughts', { size: 15, anchor: 'middle', weight: 700, fill: C.tealDark });
      s += T(cx + 58, cy + 58, 'narrator’s', { size: 15, anchor: 'middle', weight: 700, fill: C.olive }) + T(cx + 58, cy + 76, 'voice', { size: 15, anchor: 'middle', weight: 700, fill: C.olive });
    } else {
      s += pawn(cx, cy + 40, C.mustard, 0.7);
      s += T(cx, cy - 58, 'social institutions', { size: 15, anchor: 'middle', weight: 700, fill: C.rust });
      s += T(cx - 78, cy + 66, 'chance', { size: 15, anchor: 'middle', weight: 700, fill: C.rust });
      s += T(cx + 68, cy + 66, 'coincidence', { size: 15, anchor: 'middle', weight: 700, fill: C.rust });
      s += arrow(cx, cy - 50, cx, cy - 26, { w: 3, color: C.rust, marker: 'ahR' }) + arrow(cx - 70, cy + 46, cx - 30, cy + 22, { w: 3, color: C.rust, marker: 'ahR' }) + arrow(cx + 70, cy + 46, cx + 30, cy + 22, { w: 3, color: C.rust, marker: 'ahR' });
    }
    s += T(316, y + 42, who, { size: 15, weight: 700, fill: e });
    s += T(316, y + 70, ti, { size: 21, weight: 700 });
    s += para(316, y + 102, body, 530, { size: 17, fill: C.muted }).s;
  });
  add('04-three-narrators',
    svg(900, Math.round(Y + 3 * rowH + 2 * gap + 24), 'Pre-1900 prose: the narrator is the method', s),
    'Three narrative methods. Eliot: an authorial narrator steps outside the story to address the reader and widen one experience into a claim about society. Austen: free indirect style blends a character’s thoughts with the narrator’s voice, so the reader shares and judges a view. Hardy: a tragic narrator sets a character against institutions, chance and coincidence.',
    'Commentary, free indirect style and tragic narration each shape how we judge.',
    '## Pre-1900 prose: the narrator is the method');
}

// 05 The Shakespearean sonnet
{
  const Y = 120;
  let s = '';
  const lx = 120, lw = 260, lh = 21;
  const groups = [['Quatrain 1', 4, C.tealLight], ['Quatrain 2', 4, C.tealLight], ['Quatrain 3', 4, C.tealLight], ['Couplet', 2, C.mustard]];
  let y = Y + 10; const mids = [];
  groups.forEach(([g, n, f], gi) => {
    const top = y;
    s += `<rect x="${lx - 16}" y="${top - 8}" width="${lw + 32}" height="${n * lh + 14}" rx="10" fill="${f}" stroke="${gi === 3 ? C.olive : C.tealDark}" stroke-width="2.5"/>`;
    for (let k = 0; k < n; k++) s += `<line x1="${lx}" y1="${y + 6}" x2="${lx + lw * (k % 2 ? 0.86 : 0.95)}" y2="${y + 6}" stroke="${C.ink}" stroke-width="5" stroke-linecap="round" opacity="0.55"/>`, y += lh;
    mids.push([top - 8, n * lh + 14]);
    y += 26;
  });
  // turn marker between Q3 and couplet? the turn may fall anywhere: show a movable dashed marker
  const tY = mids[2][0] - 14;
  s += `<line x1="${lx - 24}" y1="${tY}" x2="${lx + lw + 12}" y2="${tY}" stroke="${C.rust}" stroke-width="3" stroke-dasharray="8 6"/>`;
  s += path(`M${lx - 40},${tY - 26} q-18,26 0,52`, { stroke: C.rust, w: 3, extra: 'marker-end="url(#ahR)"' });
  const notes = [
    ['Follow the argument from here.', 'Quatrain 1'],
    ['Does it develop or contradict the last quatrain?', 'Quatrain 2'],
    ['Develop or contradict? Where does the turn fall?', 'Quatrain 3'],
    ['Does the couplet resolve or undercut the poem?', 'Couplet'],
  ];
  notes.forEach(([q, g], i) => {
    const [top, h] = mids[i], cy = top + h / 2;
    s += `<line x1="${lx + lw + 18}" y1="${cy}" x2="436" y2="${cy}" stroke="${C.ink}" stroke-width="2"/>`;
    s += T(450, cy - 4, g, { size: 17, weight: 700, fill: i === 3 ? C.olive : C.tealDark });
    s += T(450, cy + 20, q, { size: 17, fill: C.ink });
  });
  s += T(lx + lw + 20, tY + 6, 'turn?', { size: 16, weight: 700, fill: C.rust });
  const by = y + 6;
  // sequence strip
  let seq = T(30, by + 20, 'The selection is a sequence', { size: 19, weight: 700 });
  for (let i = 0; i < 8; i++) { const x = 30 + i * 105; seq += `<rect x="${x}" y="${by + 40}" width="90" height="58" rx="6" fill="${i === 1 || i === 6 ? C.cream : C.panel}" stroke="${C.ink}" stroke-width="2.5"/>`; for (let k = 0; k < 3; k++) seq += `<line x1="${x + 14}" y1="${by + 58 + k * 13}" x2="${x + 76 - (k === 2 ? 22 : 0)}" y2="${by + 58 + k * 13}" stroke="${C.panelEdge}" stroke-width="4" stroke-linecap="round"/>`; }
  seq += `<path d="M${30 + 6 * 105 + 45},${by + 102} Q${30 + 4 * 105},${by + 160} ${30 + 105 + 45},${by + 104}" fill="none" stroke="${C.tealDark}" stroke-width="3.5" marker-end="url(#ahT)"/>`;
  seq += T(450, by + 160, 'a later poem may answer an earlier one', { size: 17, weight: 600, anchor: 'middle', fill: C.tealDark });
  s += seq;
  add('05-shakespearean-sonnet',
    svg(900, Math.round(by + 186), 'How argument moves through the sonnet form', s),
    'A Shakespearean sonnet drawn as three four-line quatrains and a closing two-line couplet. Questions beside each part ask whether each quatrain develops or contradicts the last, where the turn falls and whether the couplet resolves or undercuts the poem. Below, a row of sonnets with an arrow from a later poem back to an earlier one.',
    'Track the argument quatrain by quatrain, find the turn and test the couplet.',
    '## Pre-1900 poetry: form and voice');
}

// 06 Chaucer: experience against authority
{
  const Y = 116;
  let s = '';
  s += panel(30, Y, 840, 300);
  s += T(450, Y + 38, 'The Prologue: the Wife’s self-presentation', { size: 20, weight: 700, anchor: 'middle' });
  s += scaleIcon(450, Y + 110, 0, { half: 150, lf: C.mustard, rf: C.tealLight });
  s += T(300, Y + 196, 'experience', { size: 20, weight: 700, anchor: 'middle', fill: C.olive });
  s += T(300, Y + 220, 'of her five marriages', { size: 17, anchor: 'middle', fill: C.muted });
  s += T(600, Y + 196, 'authority', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += T(600, Y + 220, 'of clerical writers on women', { size: 17, anchor: 'middle', fill: C.muted });
  s += T(450, Y + 272, 'Examined in Middle English: read it aloud and the rhyming couplets and rhythm become clear.', { size: 16, anchor: 'middle', fill: C.ink, italic: true });
  const y2 = Y + 320;
  const r = row(y2, [
    { kicker: 'TELLER', title: 'The Prologue', body: 'An extended self-presentation, setting experience against written authority.', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'TALE', title: 'An Arthurian romance', body: 'A knight must discover what women most desire.', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 124, card: { size: 17, tsize: 20 } });
  s += r.s;
  s += `<path d="M406,${y2 + r.h / 2 - 14} L494,${y2 + r.h / 2 - 14}" stroke="${C.ink}" stroke-width="3" marker-start="url(#ah)" marker-end="url(#ah)"/>`;
  s += T(450, y2 + r.h / 2 + 14, 'supports', { size: 15, weight: 700, anchor: 'middle' }) + T(450, y2 + r.h / 2 + 32, 'and', { size: 15, anchor: 'middle', fill: C.muted }) + T(450, y2 + r.h / 2 + 50, 'complicates', { size: 15, weight: 700, anchor: 'middle' });
  const n = note(y2 + r.h + 18, 'Ask how the relationship between teller and tale shapes meaning.');
  s += n.s;
  add('06-chaucer-experience-authority',
    svg(900, Math.round(y2 + r.h + 18 + n.h + 24), 'Chaucer: experience against authority', s),
    'A balance weighs the Wife of Bath’s experience of five marriages against the written authority of clerical writers on women. Below, the Prologue (the teller) and the Tale, an Arthurian romance about a knight who must discover what women most desire, are linked by a two-way arrow: the Tale both supports and complicates the Prologue.',
    'The Wife sets experience against authority, and her Tale both supports and complicates her case.',
    '## Pre-1900 poetry: form and voice');
}

// 07 AO5: critical history
{
  const Y = 118;
  let s = '';
  const forks = [
    ['The Wife of Bath', ['a satire of a talkative woman', 'a voice challenging the male authorities']],
    ['The marriage plot', ['conservative, rewarding conformity', 'ironic about economic pressures']],
    ['A tragic narrator blames…', ['individuals', 'society', 'fate']],
  ];
  let y = Y;
  forks.forEach(([q, opts], i) => {
    const h = 88;
    s += card(30, y, 250, { title: q, minH: h, vcenter: true, tsize: 18, pad: 16, fill: C.cream, edge: C.olive }).s;
    const n = opts.length, gap = 36, x0 = 330, ow = (540 - gap * (n - 1)) / n;
    opts.forEach((o, k) => {
      const ox = x0 + k * (ow + gap);
      if (k) s += T(ox - gap / 2, y + h / 2 + 6, 'or', { size: 16, weight: 700, anchor: 'middle', fill: C.muted });
      s += card(ox, y + 8, ow, { body: o, minH: h - 16, vcenter: true, size: 16, pad: 12, align: 'middle', bfill: C.ink }).s;
    });
    s += arrow(284, y + h / 2, 322, y + h / 2, { w: 3 });
    s += T(x0 + (n === 2 ? 270 + 10 : 176 + 8), y + h / 2 + 6, n === 2 ? '' : '', {});
    y += h + 16;
  });
  s += T(30, y + 22, 'The model paragraph’s method', { size: 19, weight: 700 });
  const r = row(y + 36, [
    { title: 'Set out two readings', body: 'Anti-feminist caricature, or setting “experience” against “auctoritee” to expose the stereotypes.' },
    { title: 'Test them against the method', body: 'She argues from scripture and turns the authorities’ examples against them, yet depends on the texts she resists.' },
    { title: 'Reach a qualified judgement', body: 'The poem stages an argument about who has the right to speak about women, rather than settling it.', fill: C.cream, edge: C.olive },
  ], { gap: 40, arrows: true, card: { size: 16, tsize: 18, pad: 14 }, vcenter: false });
  s += r.s;
  add('07-ao5-critical-history',
    svg(900, Math.round(y + 36 + r.h + 24), 'AO5: older texts have been read differently', s),
    'Three critical debates: is the Wife of Bath a satire of a talkative woman or a voice challenging male authorities; is the marriage plot conservative or ironic about economic pressures; does a tragic narrator blame individuals, society or fate? Below, the model paragraph’s method: set out two readings, test them against the poem’s method, and reach a qualified judgement.',
    'Weigh competing readings against the text’s method, then judge.',
    '## Context and AO5 for older texts');
}

// 08 The (b) answer
{
  const Y = 120;
  const st = steps(Y, [
    { title: 'Locate', body: 'Place the passage or poem in the text or sequence.' },
    { title: 'Thesis', body: 'State it in the question’s terms.' },
    { title: 'Analyse closely', body: 'Voice, syntax, form, imagery; for poetry, metre and rhyme.' },
    { title: 'Link outward', body: 'To the whole novel, or to other poems in the selection.' },
    { title: 'AO5', body: 'One or two evaluated alternative readings.' },
  ], { gap: 10, size: 17, tsize: 20, highlight: 4 });
  add('08-passage-answer-steps',
    svg(900, Math.round(Y + st.h + 24), 'The (b) answer on a passage or poem', st.s),
    'Five numbered steps for a passage or poem answer: locate it in the text or sequence, state a thesis in the question’s terms, analyse closely (voice, syntax, form, imagery, and metre and rhyme for poetry), link outward to the whole novel or other poems, and evaluate one or two alternative readings for AO5.',
    'Locate, argue, analyse closely, link outward and weigh other readings.',
    '## The (b) answer on a passage or poem');
}
