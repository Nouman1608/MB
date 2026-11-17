import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-english-literature-7712-7717-option-1a-aspects-of-tragedy-7717';
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
  // Shakespeare slot
  s += panel(30, Y, 840, 92, C.tealLight, C.tealDark);
  s += T(54, Y + 36, 'Text 1 · Shakespeare', { size: 19, weight: 700, fill: C.tealDark }) + T(54, Y + 64, 'one of:', { size: 16, fill: C.muted });
  let cx = 330;
  ['Othello', 'King Lear'].forEach((p) => { const c = chip(cx, Y + 28, p, { size: 18, h: 38, fill: C.panel, edge: C.tealDark }); s += `<g font-style="italic">${c.s}</g>`; cx += c.w + 14; });
  const y2 = Y + 112;
  s += T(30, y2 + 20, 'Texts 2 and 3 · two further texts, including one drama, from:', { size: 19, weight: 700 });
  const opts = [
    ['Richard II', 'Shakespeare', true, true],
    ['Death of a Salesman', 'Arthur Miller', true, false],
    ['Tess of the D’Urbervilles', 'Thomas Hardy', false, true],
    ['The Great Gatsby', 'F. Scott Fitzgerald', false, false],
    ['“Lamia” and three more', 'John Keats · four poems', false, true],
    ['Poetry anthology (tragedy)', 'Various', false, false],
  ];
  const w = 411, h = 74;
  opts.forEach(([t, a, drama, pre], i) => {
    const x = 30 + (i % 2) * (w + 18), y = y2 + 40 + Math.floor(i / 2) * (h + 10);
    s += panel(x, y, w, h) + T(x + 18, y + 31, t, { size: 18, weight: 700, italic: i < 4 }) + T(x + 18, y + 56, a, { size: 15, fill: C.muted });
    let tx = x + w - 14;
    if (pre) { const c = chip(0, 0, 'pre-1900', { size: 15, h: 28 }); s += chip(tx - c.w, y + 10, 'pre-1900', { size: 15, h: 28, fill: C.mustard, edge: C.ink }).s; tx -= c.w + 8; }
    if (drama) { const c = chip(0, 0, 'drama', { size: 15, h: 28 }); s += chip(tx - c.w, y + 10, 'drama', { size: 15, h: 28, fill: C.teal, edge: C.ink }).s; }
  });
  const y3 = y2 + 40 + 3 * (h + 10) + 8;
  const r = row(y3, [
    { title: 'At least one drama', body: 'among the two further texts', fill: C.tealLight, edge: C.tealDark, align: 'middle' },
    { title: 'At least one pre-1900', body: 'among the two non-Shakespeare texts', fill: C.cream, edge: C.olive, align: 'middle' },
    { title: 'Closed book', body: 'no set text in the exam', fill: C.panel, align: 'middle' },
  ], { gap: 16, card: { tsize: 18, size: 16, pad: 14 } });
  s += r.s;
  add('01-what-you-study',
    svg(900, y3 + r.h + 24, 'Aspects of Tragedy: your three texts', s, '“Later texts” measured against a long-established genre'),
    'Text 1 is Othello or King Lear. Texts 2 and 3 come from six options, tagged where they are drama or pre-1900: Richard II (drama, pre-1900), Death of a Salesman (drama), Tess of the D’Urbervilles (pre-1900), The Great Gatsby, four poems by Keats including Lamia (pre-1900) and the AQA poetry anthology. Rules: at least one drama, at least one pre-1900 text, and a closed-book exam.',
    'One Shakespeare play plus two further texts, with at least one drama and one pre-1900.',
    '## What you study');
}

// 02 AQA's aspects of tragedy
{
  const Y = 110;
  const core = card(30, Y, 840, { kicker: 'AT THE CORE OF EVERY SET TEXT', title: 'A tragic hero or heroine “who is flawed in some way, who suffers and causes suffering to others”, and “an interplay between… villains and victims”.', fill: C.cream, edge: C.olive, tsize: 18 });
  let s = core.s;
  const items = [
    { title: 'Type of tragedy', body: 'Classical and public, or domestic and ordinary.' },
    { title: 'The protagonist’s journey', body: 'Pride and folly, blindness and insight, discovery, good and evil.' },
    { title: 'Villain and victim', body: 'A contest of power; the villain is “partly” responsible.' },
    { title: 'Fate', body: 'Is the hero’s end inevitable?' },
    { title: 'Effect on the world', body: 'Chaos spreads beyond the hero.' },
    { title: 'Violence, revenge, humour, happiness', body: 'Happiness defines what is lost.' },
    { title: 'Structure', body: 'Complication to catastrophe; plots and sub-plots.' },
    { title: 'Language and audience', body: '“Through pity and fear to an understanding of the human condition”.' },
    { title: 'Absence', body: 'A missing aspect can be as significant as its presence.' },
  ];
  let y = Y + core.h + 16;
  for (let i = 0; i < 9; i += 3) { const r = row(y, items.slice(i, i + 3), { gap: 14, card: { tsize: 17, size: 15, pad: 14 } }); s += r.s; y += r.h + 12; }
  add('02-aspects-of-tragedy',
    svg(900, y + 12, 'AQA’s aspects of tragedy', s, 'Areas to explore, not a closed list'),
    'AQA’s core statement about a flawed tragic hero and the interplay of villains and victims sits above nine aspects: type of tragedy, the protagonist’s journey, villain and victim, fate, effect on the world, violence, revenge, humour and happiness, structure, language and audience, and absence.',
    'Nine areas to explore, each a question to argue rather than a box to tick.',
    '## AQA\'s aspects of tragedy');
}

// 03 Type of tragedy: a spectrum
{
  const Y = 110;
  const sp = spectrum(Y, 'Classical, public figures', 'Domestic, ordinary people', [
    { pos: 0.02, label: 'King Lear', note: 'AQA’s example of classical tragedy', fill: C.teal },
    { pos: 0.5, label: 'Othello', note: 'a general’s tragedy played out in a marriage', fill: C.mustard },
    { pos: 0.98, label: 'Tess', note: 'AQA’s example of domestic tragedy', fill: C.cream },
  ], { top: 124, labelW: 240 });
  const n = note(Y + sp.h + 18, 'Most of your texts sit somewhere between the two ends: ask where, and what difference it makes.');
  add('03-type-of-tragedy',
    svg(900, Y + sp.h + 18 + n.h + 24, 'Type of tragedy', sp.s + n.s),
    'A spectrum runs from classical tragedy about public figures, with King Lear at that end, to domestic tragedy about ordinary people, with Tess at the other. Othello sits in the middle as a general’s tragedy played out in a marriage.',
    'Most texts sit between classical public tragedy and domestic tragedy.',
    '## AQA\'s aspects of tragedy');
}

// 04 Worked example: passage analysis
{
  const Y = 110;
  let s = '';
  const pc = card(30, Y, 300, { kicker: 'THE PASSAGE', title: 'Othello’s speech before the murder', body: 'Act 5 Scene 2', fill: C.cream, edge: C.olive, tsize: 19, size: 16 });
  s += pc.s;
  const pts = [
    { title: '“put out the light”', body: 'The candle becomes Desdemona’s life: light can be relit, life cannot.' },
    { title: 'Blindness and insight', body: 'He grasps that death is irreversible, but not his own error.' },
    { title: 'Contest of power', body: 'He believes he acts as justice, not as a jealous husband: Iago has won.' },
  ];
  let y = Y;
  pts.forEach((p) => { const c = card(380, y, 490, { ...p, tsize: 18, size: 16, pad: 14 }); s += c.s + path(`M330,${Y + pc.h / 2} C355,${Y + pc.h / 2} 355,${y + c.h / 2} 376,${y + c.h / 2}`, { w: 2.5 }); y += c.h + 10; });
  const y2 = y + 22;
  s += T(450, y2, 'Reach outward from memory', { size: 19, weight: 700, anchor: 'middle' });
  const r = row(y2 + 16, [
    { title: 'Earlier', body: 'Othello’s confidence in his own judgement' },
    { title: 'Iago’s soliloquies', body: 'The villain’s contest of power' },
    { title: 'Later', body: 'The final speech: recognition too late' },
  ], { gap: 14, card: { tsize: 17, size: 16, pad: 14, align: 'middle', fill: C.tealLight, edge: C.tealDark } });
  s += r.s;
  const y3 = y2 + 16 + r.h + 34;
  s += T(450, y3 + 4, 'AO5: a debate the passage supports', { size: 18, weight: 700, anchor: 'middle' });
  s += scaleIcon(450, y3 + 40, 0, { half: 120 });
  s += card(30, y3 + 26, 250, { title: 'Noble even here', fill: C.tealLight, edge: C.tealDark, tsize: 17, pad: 14, align: 'middle' }).s;
  s += card(620, y3 + 26, 250, { title: 'Self-deception', fill: C.cream, edge: C.olive, tsize: 17, pad: 14, align: 'middle' }).s;
  add('04-passage-analysis',
    svg(900, y3 + 130, 'Reading a tragic passage', s, 'Argument: blindness at the moment he believes he sees most clearly'),
    'Othello’s speech before the murder in Act 5 Scene 2 links to three points: the image of putting out the light, blindness and insight, and Iago’s contest of power. The answer then reaches outward to Othello’s earlier confidence, Iago’s soliloquies and the final speech, and weighs two readings: Othello as noble even here, or as self-deceiving.',
    'Analyse the passage as tragedy, then connect it outward and weigh readings.',
    '## Worked example: passage analysis');
}

// 05 Worked example: Section C link
{
  const Y = 120;
  let s = '';
  const colW = 400;
  s += `<rect x="30" y="${Y}" width="${colW}" height="52" rx="12" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + T(30 + colW / 2, Y + 33, 'Tess of the D’Urbervilles', { size: 19, weight: 700, anchor: 'middle', italic: true });
  s += `<rect x="470" y="${Y}" width="${colW}" height="52" rx="12" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + T(470 + colW / 2, Y + 33, 'Death of a Salesman', { size: 19, weight: 700, anchor: 'middle', italic: true });
  const rowsC = [
    ['Shared ground', 'Domestic tragedy of ordinary people: the villain is less a person than a system', null],
    ['The villain', 'Alec: a clear villain', 'No single villain'],
    ['The system', 'Angel’s rejection and the social code that judges her', 'Howard’s dismissal and the dream of success'],
    ['Context', 'Victorian sexual morality', 'Post-war American capitalism'],
    ['Interpretation', 'A feminist reading of Tess', 'Miller’s defence of the common man as tragic'],
  ];
  let y = Y + 64;
  rowsC.forEach(([lab, a, b]) => {
    if (b === null) {
      const L = wrap(a, 760, 17);
      const h = L.length * 23 + 46;
      s += panel(30, y, 840, h, C.panel, C.ink) + T(50, y + 26, lab, { size: 15, weight: 700, fill: C.muted }) + L.map((l, k) => T(50, y + 50 + k * 23, l, { size: 17, weight: 700 })).join('');
      y += h + 10; return;
    }
    const A = wrap(a, colW - 32, 16), B = wrap(b, colW - 32, 16);
    const h = Math.max(A.length, B.length) * 21 + 46;
    s += panel(30, y, colW, h) + T(46, y + 24, lab, { size: 15, weight: 700, fill: C.muted }) + A.map((l, k) => T(46, y + 48 + k * 21, l, { size: 16 })).join('');
    s += panel(470, y, colW, h) + T(486, y + 24, lab, { size: 15, weight: 700, fill: C.muted }) + B.map((l, k) => T(486, y + 48 + k * 21, l, { size: 16 })).join('');
    s += `<line x1="${30 + colW + 4}" y1="${y + h / 2}" x2="466" y2="${y + h / 2}" stroke="${C.ink}" stroke-width="2.5"/>`;
    y += h + 10;
  });
  const n = note(y + 6, 'Argue that both texts make the victim more interesting because villainy is diffused into society; then weigh the counter-view that Alec is a vivid, deliberate creation.', { title: 'Line of argument' });
  s += n.s;
  add('05-section-c-link',
    svg(900, y + 6 + n.h + 24, 'Connecting two tragedies', s, '“In tragedy, the victims are always more interesting than the villains.”'),
    'Tess of the D’Urbervilles and Death of a Salesman are compared point by point. Both are domestic tragedies where the villain is less a person than a system. Tess has a clear villain in Alec, while Salesman has none; the system is Angel’s rejection and the social code, against Howard’s dismissal and the dream of success. Contexts and interpretations are paired, and a note gives the argument and counter-view.',
    'Organise Section C by point of connection, not as two mini-essays.',
    '## Worked example: Section C link');
}
