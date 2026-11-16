import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-english-literature-9275-non-exam-assessment-route-b';
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

// 01 Choosing the text: four filters
{
  const Y = 116;
  let s = '';
  const filters = [
    ['A substantial whole prose fiction text', 'not a short novella or a single short story'],
    ['Not on the 9275 prescribed list', 'the Paper 1 prose list changes with the revised specification'],
    ['Canon of the British Isles or seminal world literature', 'any literary period'],
    ['Similar in quality, scope and challenge to the Paper 1 set texts', 'enough narrative method, structure and language to analyse'],
  ];
  let cy = Y;
  filters.forEach(([ti, b], i) => {
    const inset = i * 36, w = 840 - 2 * inset;
    const c = card(30 + inset, cy, w, { title: ti, body: b, tsize: 19, size: 16, align: 'middle', fill: i % 2 ? C.tealLight : C.panel, edge: C.tealDark, pad: 14 });
    s += c.s + badge(30 + inset + 30, cy + c.h / 2, 16, String(i + 1), C.cream);
    cy += c.h;
    s += arrow(450, cy + 4, 450, cy + 26, { w: 3.5, color: C.tealDark, marker: 'ahT' });
    cy += 30;
  });
  const ok = card(130, cy, 640, { kicker: 'EXAMPLES OF THE KIND OF TEXT THAT MEETS THE STANDARD', title: 'Jane Eyre · Frankenstein · Things Fall Apart', tsize: 20, align: 'middle', fill: C.cream, edge: C.olive });
  s += ok.s.replace(/font-size="20" font-weight="700"/g, 'font-size="20" font-weight="700" font-style="italic"');
  const n = T(450, cy + ok.h + 30, 'Your teacher will guide or confirm the choice. Pick a text you will enjoy rereading.', { size: 16, anchor: 'middle', fill: C.muted });
  add('01-choosing-nea-text',
    svg(900, Math.round(cy + ok.h + 52), 'Choosing your NEA text', s + n),
    'Four narrowing filters for the non-exam assessment text: a substantial whole prose fiction text, not on the 9275 prescribed list, from the canon of the British Isles or seminal world literature of any period, and similar in challenge to the Paper 1 set texts. Jane Eyre, Frankenstein and Things Fall Apart are given as examples.',
    'A good NEA novel passes every filter and rewards rereading.',
    '## Step 1: choosing the text');
}

// 02 How the NEA is marked
{
  const Y = 140;
  let s = T(30, Y - 12, 'The NEA is 20% of the qualification', { size: 18, weight: 700 });
  const segs = [['AO1', 8, C.teal, 'themes, ideas, contexts'], ['AO2', 8, C.tealLight, 'how writers create meanings'], ['AO3', 4, C.cream, 'personal response, terminology, accuracy']];
  let x = 30;
  segs.forEach(([a, v, f, d]) => { const w = (840 * v) / 20; s += `<rect x="${x}" y="${Y}" width="${w}" height="60" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x + w / 2, Y + 38, `${a} · ${v}%`, { size: 19, weight: 700, anchor: 'middle' }) + para(x + w / 2, Y + 86, d, w - 20, { size: 15, anchor: 'middle', fill: C.muted }).s; x += w; });
  // level ladder
  const LY = Y + 150;
  s += T(30, LY, 'Six levels (30 marks)', { size: 18, weight: 700 });
  const lev = [[1, '1–5', 'simple, explicit comments; narrative or descriptive'], [2, '', ''], [3, '', ''], [4, '16–20', 'clear understanding'], [5, '', ''], [6, '26–30', 'convincing, critical analysis and exploration']];
  const base = LY + 360;
  lev.forEach(([n, r, d], i) => {
    const x0 = 30 + i * 70, h = 60 + i * 50, y0 = base - h;
    s += `<rect x="${x0}" y="${y0}" width="62" height="${h}" rx="8" fill="${i >= 2 ? C.teal : C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + T(x0 + 31, y0 + 30, `L${n}`, { size: 17, weight: 700, anchor: 'middle' });
    if (r) {
      const cyy = y0 + 18;
      s += `<line x1="${x0 + 62}" y1="${cyy}" x2="470" y2="${cyy}" stroke="${C.panelEdge}" stroke-width="2" stroke-dasharray="4 4"/>` + card(476, cyy - 34, 394, { kicker: `LEVEL ${n} · ${r}`, body: d, size: 16, bfill: C.ink, pad: 12, fill: n === 6 ? C.cream : C.panel, edge: n === 6 ? C.olive : C.panelEdge, minH: 68 }).s;
    }
  });
  s += `<line x1="170" y1="${base + 14}" x2="450" y2="${base + 14}" stroke="${C.olive}" stroke-width="4" marker-end="url(#ahO)"/>` + T(170, base + 40, 'from Level 3 up: descriptors refer to the whole text', { size: 16, weight: 700, fill: C.olive });
  add('02-nea-marking',
    svg(900, Math.round(base + 64), 'How the NEA is marked', s),
    'A bar splits the NEA’s 20% into AO1 8%, AO2 8% and AO3 4%. A six-step ladder of levels shows Level 1 (1–5 marks) as simple, narrative or descriptive comments, Level 4 (16–20) as clear understanding and Level 6 (26–30) as convincing, critical analysis. From Level 3 up, the descriptors refer to the whole text.',
    'Higher levels need a whole-text, critical response, not a few chapters.',
    '## How the NEA is marked');
}

// 03 Framing the task: weak to strong
{
  const Y = 132;
  let s = T(235, Y - 10, 'Weak task', { size: 18, weight: 700, anchor: 'middle', fill: C.rust }) + T(680, Y - 10, 'Strong task', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  const pairs = [
    ['“Write about the main character.”', '“How does the writer present the main character’s struggle between duty and desire?”'],
    ['“What happens in the novel?”', '“How does the writer use the novel’s structure to shape the reader’s sympathy?”'],
    ['“Is the ending good?”', '“How far does the ending resolve the novel’s central conflict about belonging?”'],
  ];
  let cy = Y + 6;
  pairs.forEach(([w, st]) => {
    const h = Math.max(card(520, cy, 350, { body: st, size: 17 }).h, 70);
    s += card(30, cy, 410, { body: w, size: 17, bfill: C.muted, edge: C.rust, minH: h, vcenter: true }).s + card(490, cy, 380, { body: st, size: 17, bfill: C.ink, fill: C.tealLight, edge: C.tealDark, minH: h, vcenter: true }).s + arrow(444, cy + h / 2, 484, cy + h / 2, { w: 3.5, color: C.tealDark, marker: 'ahT' });
    cy += h + 14;
  });
  const r = row(cy + 30, [{ title: 'Has a focus' }, { title: 'Invites an argument' }, { title: 'Points to methods' }].map((x) => ({ ...x, align: 'middle', fill: C.cream, edge: C.olive })), { gap: 16, card: { tsize: 19 } });
  s += T(30, cy + 18, 'A strong task…', { size: 16, weight: 700, fill: C.muted }) + r.s;
  add('03-weak-to-strong-task',
    svg(900, Math.round(cy + 30 + r.h + 24), 'Framing the task', s),
    'Three weak tasks, such as “Write about the main character”, are each turned into a strong “How does the writer…” or “How far…” task about duty and desire, structure and sympathy, or the ending and belonging. A strong task has a focus, invites an argument and points to the writer’s methods.',
    'Ask how the writer presents something, so the task demands an argument.',
    '## Step 2: framing the task');
}

// 04 An NEA plan across the novel
{
  const Y = 148;
  let s = '';
  const th = card(30, Y, 840, { kicker: 'THESIS (ARGUABLE)', kfill: C.olive, title: 'Isolation is both a punishment and a source of self-knowledge.', tsize: 20, fill: C.cream, edge: C.olive });
  s += th.s;
  const ty = Y + th.h + 46;
  const secs = [
    ['Opening chapters', 'narrative voice; viewpoint', 0],
    ['Setting', 'description and symbol', 1],
    ['Relationships', 'dialogue; where it appears', 1],
    ['Turning point', 'structural significance', 1],
    ['Ending', 'overcome, accepted or made permanent?', 2],
  ];
  const w = (840 - 4 * 12) / 5;
  s += T(450, ty - 26, 'final pages echo the opening', { size: 15, anchor: 'middle', fill: C.olive, weight: 600 }).replace('<text', '<text paint-order="stroke" stroke="#f4f6f6" stroke-width="6"');
  const r = row(ty, secs.map(([t1, b]) => ({ title: t1, body: b, tsize: 17, align: 'middle' })), { gap: 12, minH: 120, card: { size: 15, pad: 12 } });
  s += r.s;
  const ly = ty + r.h + 24;
  s += `<line x1="60" y1="${ly}" x2="850" y2="${ly}" stroke="${C.tealDark}" stroke-width="4" marker-end="url(#ahT)"/>`;
  [['beginning', 30 + w / 2], ['middle', 450], ['end', 30 + 4 * (w + 12) + w / 2]].forEach(([l, x]) => { s += `<circle cx="${x}" cy="${ly}" r="8" fill="${C.tealDark}"/>` + T(x, ly + 28, l, { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 }); });
  s += path(`M${30 + 4 * (w + 12) + w / 2},${ty - 4} C${30 + 4 * (w + 12) + w / 2},${ty - 30} ${30 + w / 2},${ty - 30} ${30 + w / 2},${ty - 4}`, { stroke: C.olive, w: 2.5, extra: 'stroke-dasharray="6 5" marker-end="url(#ahO)"' });
  const cy = ly + 76;
  const r2 = row(cy, [
    { kicker: 'AO2', title: 'Method analysis', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'AO1', title: 'Themes and context', fill: C.teal, edge: C.tealDark },
    { kicker: 'AO3', title: 'An argued voice', fill: C.cream, edge: C.olive, kfill: C.olive },
  ].map((x) => ({ ...x, align: 'middle' })), { gap: 16, card: { tsize: 18 } });
  s += T(30, cy - 8, 'In every section', { size: 16, weight: 700, fill: C.muted }) + r2.s;
  const c = card(30, cy + r2.h + 16, 840, { body: 'Conclusion: return to the thesis and offer a personal judgement, perhaps acknowledging an alternative reading.', size: 17, bfill: C.ink, fill: C.cream, edge: C.olive });
  s += c.s;
  add('04-nea-plan-isolation',
    svg(900, Math.round(cy + r2.h + 16 + c.h + 24), 'An NEA plan across the whole novel', s, 'How does the writer present the theme of isolation?'),
    'A thesis that isolation is both a punishment and a source of self-knowledge leads five sections spread from the beginning to the end of the novel: opening chapters, setting, relationships, turning point and ending, which echoes the opening. Every section combines method analysis (AO2), themes and context (AO1) and an argued voice (AO3), followed by a concluding judgement.',
    'A thesis, five sections from beginning to end, and all three AOs in each.',
    '## Worked example: an NEA plan');
}

// 05 Revising in passes
{
  const Y = 116;
  const st = steps(Y, [
    { title: 'Write a full first draft', body: 'Before polishing any part of it.' },
    { title: 'Revise for argument', body: 'Does every paragraph advance the thesis? Can any be cut?' },
    { title: 'Revise for analysis', body: 'After each quotation, have you explained the method and its effect?' },
    { title: 'Edit for accuracy', body: 'Quotations checked against the text; spelling, punctuation and terminology.' },
  ], { gap: 12, size: 17, tsize: 20, highlight: 1 });
  const n = note(Y + st.h + 18, 'Keep notes and drafts: your centre may need them to confirm the work is your own. Record any sources you use.');
  add('05-revision-passes',
    svg(900, Math.round(Y + st.h + 18 + n.h + 24), 'Drafting and revising in order', st.s + n.s),
    'Four steps in order: write a full first draft, revise for argument, revise for analysis, then edit for accuracy. A note says to keep notes and drafts and record sources so the work can be confirmed as your own.',
    'Fix the argument first, then the analysis, then the accuracy.',
    '## Step 4: drafting and revising');
}

// 06 Working backwards from the deadline
{
  const Y = 130;
  let s = '';
  const stages = ['Reread with the task in mind', 'Gather and organise evidence', 'Write a plan', 'Complete a draft', 'Revise the argument', 'Final accuracy check'];
  const x0 = 60, x1 = 760, step = (x1 - x0) / (stages.length - 1);
  s += `<line x1="${x0}" y1="${Y + 150}" x2="830" y2="${Y + 150}" stroke="${C.ink}" stroke-width="4"/>`;
  stages.forEach((st, i) => {
    const x = x0 + i * step, up = i % 2 === 0;
    s += `<circle cx="${x}" cy="${Y + 150}" r="11" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="3"/>`;
    const c0 = card(0, 0, 160, { body: st, size: 16, align: 'middle', pad: 10, bfill: C.ink });
    const bx = Math.max(30, x - 80), by = up ? Y + 150 - 24 - c0.h : Y + 150 + 24;
    s += `<line x1="${x}" y1="${up ? Y + 139 : Y + 161}" x2="${x}" y2="${up ? by + c0.h : by}" stroke="${C.tealDark}" stroke-width="2.5"/>` + card(bx, by, 160, { body: st, size: 16, align: 'middle', pad: 10, bfill: C.ink, fill: C.panel, edge: C.tealDark }).s;
  });
  s += `<rect x="806" y="${Y + 118}" width="64" height="64" rx="10" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + T(838, Y + 146, 'Dead-', { size: 15, weight: 700, anchor: 'middle' }) + T(838, Y + 164, 'line', { size: 15, weight: 700, anchor: 'middle' });
  s += `<line x1="800" y1="${Y + 286}" x2="80" y2="${Y + 286}" stroke="${C.olive}" stroke-width="4" marker-end="url(#ahO)"/>` + T(450, Y + 314, 'plan the dates working backwards from your centre’s deadline', { size: 17, anchor: 'middle', weight: 700, fill: C.olive });
  const n = note(Y + 336, 'Short, regular sessions are better than one long weekend. Leaving it late leaves no time to revise the argument.');
  add('06-work-backwards-from-deadline',
    svg(900, Math.round(Y + 336 + n.h + 24), 'Planning your time', s + n.s),
    'A timeline of six stages before the centre’s deadline: reread the novel with the task in mind, gather and organise evidence, write a plan, complete a draft, revise the argument, and do a final accuracy check. An arrow shows planning backwards from the deadline.',
    'Set your dates backwards from the deadline, with time left to revise.',
    '## Planning your time');
}
