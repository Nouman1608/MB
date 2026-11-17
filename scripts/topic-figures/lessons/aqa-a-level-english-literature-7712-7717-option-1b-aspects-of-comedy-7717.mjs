import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-english-literature-7712-7717-option-1b-aspects-of-comedy-7717';
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
  segs.map(([s, k]) => `<tspan${k === 'hl' ? ` fill="${C.rust}" font-weight="700"` : k === 'it' ? ` font-style="italic" fill="${C.muted}"` : k === 'ithl' ? ` font-style="italic" fill="${C.rust}" font-weight="700"` : k === 'b' ? ' font-weight="700"' : ''}>${X(s)}</tspan>`).join('') + '</text>';

// 01 What you study: three texts
{
  const Y = 110;
  let s = '';
  s += panel(30, Y, 840, 92, C.tealLight, C.tealDark);
  s += T(54, Y + 36, 'Text 1 · Shakespeare', { size: 19, weight: 700, fill: C.tealDark }) + T(54, Y + 64, 'one of:', { size: 16, fill: C.muted });
  let cx = 300;
  ['The Taming of the Shrew', 'Twelfth Night'].forEach((p) => { const c = chip(cx, Y + 28, p, { size: 18, h: 38, fill: C.panel, edge: C.tealDark }); s += `<g font-style="italic">${c.s}</g>`; cx += c.w + 14; });
  const y2 = Y + 112;
  s += T(30, y2 + 20, 'Texts 2 and 3 · one pre-1900 drama text and one further text, from:', { size: 19, weight: 700 });
  const opts = [
    ['She Stoops to Conquer', 'Oliver Goldsmith', true, true, true],
    ['The Importance of Being Earnest', 'Oscar Wilde', true, true, true],
    ['Emma', 'Jane Austen', false, true, true],
    ['“The Nun’s Priest’s Tale”', 'Geoffrey Chaucer', false, true, false],
    ['Small Island', 'Andrea Levy', false, false, true],
    ['Poetry anthology (comedy)', 'Various', false, false, false],
  ];
  const w = 411, h = 74;
  opts.forEach(([t, a, drama, pre, it], i) => {
    const x = 30 + (i % 2) * (w + 18), y = y2 + 40 + Math.floor(i / 2) * (h + 10);
    const hl = i === 0;
    s += panel(x, y, w, h, hl ? C.cream : C.panel, hl ? C.olive : C.panelEdge) + T(x + 18, y + 31, t, { size: 17, weight: 700, italic: it }) + T(x + 18, y + 56, a, { size: 15, fill: C.muted });
  });
  // tags on a separate line to avoid crowding long titles
  opts.forEach(([t, a, drama, pre], i) => {
    const x = 30 + (i % 2) * (w + 18), y = y2 + 40 + Math.floor(i / 2) * (h + 10);
    let tx = x + w - 14;
    if (pre) { const c = chip(0, 0, 'pre-1900', { size: 15, h: 26 }); s += chip(tx - c.w, y + 40, 'pre-1900', { size: 15, h: 26, fill: C.mustard, edge: C.ink }).s; tx -= c.w + 8; }
    if (drama) { const c = chip(0, 0, 'drama', { size: 15, h: 26 }); s += chip(tx - c.w, y + 40, 'drama', { size: 15, h: 26, fill: C.teal, edge: C.ink }).s; }
  });
  const y3 = y2 + 40 + 3 * (h + 10) + 8;
  const n = note(y3, 'A single text can meet more than one requirement: AQA’s own example is She Stoops to Conquer, both drama and pre-1900. Paper 1 is closed book, so quotations must be learned.');
  s += n.s;
  add('01-what-you-study',
    svg(900, y3 + n.h + 24, 'Aspects of Comedy: your three texts', s),
    'Text 1 is The Taming of the Shrew or Twelfth Night. Texts 2 and 3, one pre-1900 drama and one further text, come from six options tagged drama or pre-1900: She Stoops to Conquer and The Importance of Being Earnest (both), Emma and The Nun’s Priest’s Tale (pre-1900), Small Island and the AQA poetry anthology. A note says one text can meet two requirements.',
    'One Shakespeare comedy plus a pre-1900 drama and one further text.',
    '## What you study');
}

// 02 AQA's definition and areas to explore
{
  const Y = 110;
  const core = card(30, Y, 840, { kicker: 'AQA’S DEFINITION', title: 'Stories “which primarily amuse”, where discomfort “excites laughter rather than concern” and “no great disaster occurs”. Every text has a love interest and “marriage is a focal point”.', fill: C.cream, edge: C.olive, tsize: 18 });
  let s = core.s;
  const items = [
    { title: 'Type', body: 'Romantic (Twelfth Night), manners (Emma, Earnest), satire (Swift).' },
    { title: 'Journey to knowledge', body: 'Mistakes, unhappiness, then “a sense of joy”: Emma at Box Hill.' },
    { title: 'Comic villain or rival', body: 'Disrupts the mood, power “finally curtailed”: Malvolio.' },
    { title: 'Scale', body: 'Themselves and one or two others, not countries and states.' },
    { title: 'Folly, trickery, gullibility', body: 'The forged letter; Tony Lumpkin’s trick; the fox’s flattery.' },
    { title: 'Clowns and posturing', body: 'Feste; Lady Bracknell; Chauntecleer’s learned speeches.' },
    { title: 'Disguise and discovery', body: 'Viola as Cesario; false identities in Earnest; Kate as a barmaid.' },
    { title: 'Structure', body: '“From disorder to order, incorporating rule and misrule”.' },
    { title: 'Language', body: '“Wit and linguistic play”.' },
    { title: 'Self-awareness', body: 'The Shrew’s Induction for Christopher Sly; Wilde’s epigrams.' },
    { title: 'The audience', body: 'Laughter at “ridiculous behaviour”; joy that resolution is possible.' },
    { title: 'Absence', body: 'A missing aspect “might also be of note”.', fill: C.tealLight, edge: C.tealDark },
  ];
  let y = Y + core.h + 16;
  for (let i = 0; i < 12; i += 3) { const r = row(y, items.slice(i, i + 3), { gap: 14, card: { tsize: 17, size: 15, pad: 14 } }); s += r.s; y += r.h + 12; }
  add('02-aspects-of-comedy',
    svg(900, y + 12, 'AQA’s aspects of comedy', s, 'Society and the behaviour of men and women in it are ridiculed'),
    'AQA’s definition of comedy sits above twelve areas to explore, each with examples from the set texts: type, the journey to knowledge, the comic villain or rival, scale, folly and trickery, clowns and posturing, disguise and discovery, structure, language, self-awareness, the audience and absence.',
    'Twelve areas to explore, anchored by marriage, ridicule and a sense of joy.',
    '## AQA\'s definition of comedy');
}

// 03 Who is left out of the happy ending?
{
  const Y = 110;
  let s = '';
  const cx = 450, cy = Y + 230;
  s += `<circle cx="${cx}" cy="${cy}" r="120" fill="${C.cream}" stroke="${C.olive}" stroke-width="3"/>`;
  s += T(cx, cy - 30, 'The happy ending', { size: 21, weight: 700, anchor: 'middle' }) + T(cx, cy, 'marriage, order', { size: 17, anchor: 'middle' }) + T(cx, cy + 24, 'and joy', { size: 17, anchor: 'middle' });
  // rings
  s += `<circle cx="${cx - 20}" cy="${cy + 64}" r="16" fill="none" stroke="${C.olive}" stroke-width="3"/><circle cx="${cx + 4}" cy="${cy + 64}" r="16" fill="none" stroke="${C.olive}" stroke-width="3"/>`;
  const out = [
    [30, Y + 14, 'Malvolio', 'Exits vowing revenge on all of them.', cx - 100, cy - 80],
    [610, Y + 14, 'Antonio', 'Left alone.', cx + 100, cy - 80],
    [30, Y + 300, 'Katherina', 'Her final speech on wifely obedience: sincere, ironic or forced?', cx - 100, cy + 80],
    [610, Y + 300, 'Small Island', 'Comic misunderstandings alongside racism and wartime loss.', cx + 100, cy + 80],
  ];
  out.forEach(([x, y, t, b, tx, ty]) => {
    const c = card(x, y, 260, { title: t, body: b, tsize: 18, size: 16, pad: 14, fill: C.panel, edge: C.rust, tfill: C.rust });
    s += `<line x1="${x < 450 ? x + 260 : x}" y1="${y + c.h / 2}" x2="${tx}" y2="${ty}" stroke="${C.rust}" stroke-width="2.5" stroke-dasharray="7 6"/>` + c.s;
  });
  const yn = Y + 446;
  const n = note(yn, 'These are not reasons to deny that the texts are comedies: they are evidence for a debate about what comic resolution costs.');
  s += n.s;
  add('03-who-is-left-out',
    svg(900, yn + n.h + 24, 'Does the ending resolve?', s, 'Who is left out of the happy ending?'),
    'A circle labelled the happy ending, with marriage, order and joy, is surrounded by four cases outside it: Malvolio exiting vowing revenge, Antonio left alone, Katherina’s final speech read as sincere, ironic or forced, and Small Island’s comedy alongside racism and wartime loss.',
    'Asking who is left out turns the ending into a debate about what resolution costs.',
    '## The central debate: does the ending resolve?');
}

// 04 Letter scene: a double audience
{
  const Y = 110;
  let s = '';
  // stage
  const sy = Y + 210;
  s += `<path d="M60,${sy} L840,${sy} L800,${sy + 30} L100,${sy + 30} Z" fill="${C.sand}" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += pawn(560, sy, C.mustard, 1.1) + `<rect x="574" y="${sy - 70}" width="34" height="26" rx="3" fill="${C.panel}" stroke="${C.ink}" stroke-width="2" transform="rotate(-12 591 ${sy - 57})"/>`;
  s += T(560, sy - 112, 'Malvolio', { size: 18, weight: 700, anchor: 'middle' }) + T(560, sy - 134, 'performs his fantasies', { size: 15, anchor: 'middle', fill: C.muted });
  // hiding place
  s += `<rect x="130" y="${sy - 110}" width="230" height="110" rx="16" fill="${C.grass}" opacity="0.55" stroke="${C.ink}" stroke-width="2"/>`;
  [175, 245, 315].forEach((x) => { s += pawn(x, sy - 40, C.teal, 0.6); });
  s += T(245, sy - 124, 'Sir Toby, Sir Andrew, Fabian', { size: 16, weight: 700, anchor: 'middle' }) + T(245, sy - 146, 'react from hiding', { size: 15, anchor: 'middle', fill: C.muted });
  s += arrow(368, sy - 70, 520, sy - 70, { w: 2.5, dash: '6 5' });
  // audience
  const ay = sy + 90;
  for (let i = 0; i < 9; i++) s += `<circle cx="${190 + i * 65}" cy="${ay}" r="14" fill="${C.panel}" stroke="${C.ink}" stroke-width="2"/>`;
  s += T(450, ay + 42, 'The theatre audience', { size: 18, weight: 700, anchor: 'middle' });
  s += T(450, ay + 66, 'laughs at the gull and with the tricksters', { size: 16, anchor: 'middle', fill: C.muted });
  const y2 = ay + 92;
  const st = steps(y2, [
    { title: 'Pride as the instrument of humiliation', body: 'He labours to decode the letter’s initials as if solving a puzzle: “folly, trickery and gullibility”.' },
    { title: 'A harsher turn', body: 'The trick leads to imprisonment in darkness and his final vow of revenge.' },
    { title: 'Two readings', body: 'An audience that valued social order mocks the steward who rises above his place; a modern audience may find the punishment cruel.' },
  ], { size: 16, tsize: 18, gap: 10 });
  s += st.s;
  add('04-letter-scene',
    svg(900, y2 + st.h + 24, 'The letter scene: a double audience', s, 'Twelfth Night: Malvolio finds the forged letter'),
    'A stage sketch: Malvolio reads the forged letter centre stage while Sir Toby, Sir Andrew and Fabian react from hiding, and the theatre audience below laughs at the gull and with the tricksters. Three steps follow: his pride becomes his humiliation, the trick leads to a harsher turn, and original and modern audiences may read it differently.',
    'Laughter at the gull and with the tricksters, then a turn that tests comedy’s limits.',
    '## Worked example: a Section A-style paragraph');
}

// 05 Section C plan
{
  const Y = 120;
  let s = '';
  const colW = 400;
  s += `<rect x="30" y="${Y}" width="${colW}" height="52" rx="12" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + T(30 + colW / 2, Y + 33, 'She Stoops to Conquer', { size: 19, weight: 700, anchor: 'middle', italic: true });
  s += `<rect x="470" y="${Y}" width="${colW}" height="52" rx="12" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + T(470 + colW / 2, Y + 33, 'Emma', { size: 19, weight: 700, anchor: 'middle', italic: true });
  const rowsC = [
    ['Ridiculed', 'Marlow’s two manners: shy with ladies, bold with barmaids', 'Emma’s attempt to raise Harriet Smith through a match with Mr Elton'],
    ['Rank and climbing', 'Kate stoops to conquer by playing below her rank', 'Mr Elton’s ambition to marry Emma is rejected'],
    ['Context', 'Eighteenth-century class codes', 'Regency class codes'],
  ];
  let y = Y + 64;
  rowsC.forEach(([lab, a, b]) => {
    const A = wrap(a, colW - 32, 16), B = wrap(b, colW - 32, 16);
    const h = Math.max(A.length, B.length) * 21 + 46;
    s += panel(30, y, colW, h) + T(46, y + 24, lab, { size: 15, weight: 700, fill: C.muted }) + A.map((l, k) => T(46, y + 48 + k * 21, l, { size: 16 })).join('');
    s += panel(470, y, colW, h) + T(486, y + 24, lab, { size: 15, weight: 700, fill: C.muted }) + B.map((l, k) => T(486, y + 48 + k * 21, l, { size: 16 })).join('');
    s += `<line x1="${30 + colW + 4}" y1="${y + h / 2}" x2="466" y2="${y + h / 2}" stroke="${C.ink}" stroke-width="2.5"/>`;
    y += h + 10;
  });
  const r = row(y + 8, [
    { kicker: 'ARGUE', title: 'Both mock social climbing, and snobbery itself', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'WEIGH', title: 'Counter-view: Kate’s stooping is rewarded', fill: C.panel },
  ], { arrows: true, card: { tsize: 18, size: 16 } });
  s += r.s;
  const yi = y + 8 + r.h + 34;
  s += T(450, yi + 4, 'Interpretation: is comedy…', { size: 18, weight: 700, anchor: 'middle' });
  s += scaleIcon(450, yi + 40, 0, { half: 120 });
  s += card(30, yi + 26, 260, { title: 'Conservative', body: 'restoring the order of rank', fill: C.tealLight, edge: C.tealDark, tsize: 17, size: 15, pad: 12, align: 'middle' }).s;
  s += card(610, yi + 26, 260, { title: 'Subversive', body: 'exposing the order of rank', fill: C.cream, edge: C.olive, tsize: 17, size: 15, pad: 12, align: 'middle' }).s;
  add('05-section-c-plan',
    svg(900, yi + 140, 'Connecting two comedies', s, '“Comedies mock those who try to rise above their place.”'),
    'She Stoops to Conquer and Emma are compared point by point: Marlow’s two manners against Emma’s matchmaking for Harriet; Kate stooping to conquer against Mr Elton’s rejected ambition; and eighteenth-century against Regency class codes. The argument is that both mock climbing and snobbery, weighed against Kate’s rewarded stooping, and a balance sets conservative against subversive readings of comedy.',
    'Link the texts point by point, then weigh whether comedy restores or exposes rank.',
    '## Worked example: Section C plan');
}
