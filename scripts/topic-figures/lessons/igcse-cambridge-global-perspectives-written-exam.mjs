import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-cambridge-global-perspectives-written-exam';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- Local layout helpers for IGCSE Global Perspectives figures (self-contained; uses house style only) ----
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

// 01 Topic vs issue
add('01-topic-vs-issue',
  compose('A topic is broad; an issue is specific', [
    (y) => {
      const top = card(30, y, 840, { kicker: 'TOPIC: A BROAD AREA OF STUDY', title: 'Environment, pollution and conservation', body: 'One of 22 topics on the syllabus list, explored across all three components.', align: 'middle', tsize: 23 });
      const fy = y + top.h;
      const funnel = `<path d="M150,${fy + 8} L750,${fy + 8} L560,${fy + 96} L340,${fy + 96} Z" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>` + T(450, fy + 50, 'narrow it down', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark }) + arrow(450, fy + 60, 450, fy + 120, { w: 4 });
      const bot = card(200, fy + 126, 500, { kicker: 'ISSUE: WHAT IS ACTUALLY ANALYSED', kfill: C.olive, title: 'Plastic waste exports to low-income countries', align: 'middle', fill: C.cream, edge: C.olive, tsize: 21 });
      return { s: top.s + funnel + bot.s, h: top.h + 126 + bot.h };
    },
    (y) => row(y, [
      { title: 'Written Exam', align: 'middle' }, { title: 'Individual Report', align: 'middle' }, { title: 'Team Project', align: 'middle' },
    ], { card: { tsize: 18, pad: 14 } }),
    (y) => ({ s: T(450, y + 4, 'All three components analyse issues, not whole topics', { size: 17, anchor: 'middle', fill: C.muted }), h: 6 }),
  ]),
  'A wide card names the topic Environment, pollution and conservation, one of 22 on the syllabus list. A funnel narrows it to a specific issue: plastic waste exports to low-income countries. All three components analyse issues like this rather than whole topics.',
  'Narrow a topic down until you reach an issue you can actually analyse.',
  '## Where this fits in 0457');

// 02 Paper at a glance
add('02-paper-at-a-glance',
  compose('Component 1 at a glance', [
    (y) => row(y, [
      { title: '1 h 25 min', body: 'reading time included', align: 'middle', fill: C.tealLight, edge: C.tealDark },
      { title: '70 marks', body: 'set and marked by Cambridge', align: 'middle', fill: C.tealLight, edge: C.tealDark },
      { title: '4 questions', body: 'all compulsory', align: 'middle', fill: C.tealLight, edge: C.tealDark },
    ], { card: { tsize: 25 } }),
    (y) => {
      const docs = [['Source A', 'background'], ['Source B', 'a perspective'], ['Source C', 'another perspective'], ['Source D', 'image or data']];
      let s = '';
      docs.forEach(([a, b], i) => {
        const x = 50 + i * 205;
        s += `<path d="M${x},${y} L${x + 150},${y} L${x + 180},${y + 30} L${x + 180},${y + 150} L${x},${y + 150} Z" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>` + `<path d="M${x + 150},${y} L${x + 150},${y + 30} L${x + 180},${y + 30}" fill="${C.panelEdge}" stroke="${C.ink}" stroke-width="2"/>`;
        s += T(x + 20, y + 40, a, { size: 18, weight: 700 }) + [0, 1, 2].map((k) => `<line x1="${x + 20}" y1="${y + 62 + k * 16}" x2="${x + 160 - k * 25}" y2="${y + 62 + k * 16}" stroke="${C.panelEdge}" stroke-width="5" stroke-linecap="round"/>`).join('') + T(x + 20, y + 132, b, { size: 15, fill: C.tealDark, weight: 600 });
      });
      return { s, h: 150 };
    },
    (y) => note(y, 'Sources come with the paper and cover one global issue. They give background and different perspectives, and may include images and material from different subjects and media.', { title: 'Every question is based on the source documents' }),
  ]),
  'Three facts about the paper: 1 hour 25 minutes including reading time, 70 marks set and marked by Cambridge, and four compulsory questions. Below, a row of source documents gives background, different perspectives and images on one global issue.',
  'The whole paper is built on unseen sources, not remembered content.',
  '## Syllabus coverage');

// 03 Skills credited
{
  const skills = [['Research', 1], ['Analysis', 1], ['Evaluation', 1], ['Reflection', 0], ['Communication', 0], ['Collaboration', 0]];
  let b = '';
  skills.forEach(([s, on], i) => {
    const x = 30 + (i % 3) * 286, y = 120 + Math.floor(i / 3) * 100;
    b += panel(x, y, 268, 82, on ? C.teal : C.panel, on ? C.tealDark : C.panelEdge) + T(x + 70, y + 49, s, { size: 21, weight: 700, fill: on ? C.ink : C.muted });
    b += on ? `<circle cx="${x + 38}" cy="${y + 41}" r="18" fill="${C.panel}" stroke="${C.tealDark}" stroke-width="3"/>` + path(`M${x + 29},${y + 42} l6,7 l12,-14`, { stroke: C.tealDark, w: 4 })
      : `<circle cx="${x + 38}" cy="${y + 41}" r="18" fill="${C.panel}" stroke="${C.muted}" stroke-width="3"/>` + `<line x1="${x + 27}" y1="${y + 41}" x2="${x + 49}" y2="${y + 41}" stroke="${C.muted}" stroke-width="4"/>`;
  });
  b += T(30, 342, 'Credited in the Written Exam', { size: 17, weight: 700, fill: C.tealDark }) + T(870, 342, 'Not credited in this paper', { size: 17, fill: C.muted, anchor: 'end' });
  b += card(30, 368, 840, { title: 'Reflection is weighted at 0% in this paper', body: 'Spend the time on analysis, evaluation and a reasoned line of argument instead.', fill: C.cream, edge: C.olive }).s;
  b += card(30, 490, 840, { title: 'Revise the moves, not the facts', body: ['Identify a perspective', 'Test the evidence', 'Weigh the source'], bullets: true }).s;
  add('03-skills-credited',
    svg(900, 660, 'What this paper gives marks for', b),
    'Six syllabus skills shown as tiles. Research, analysis and evaluation are ticked as credited in the Written Exam; reflection, communication and collaboration are not credited in this paper. Reflection is weighted at 0% here.',
    'Marks follow the skill, not the topic, and reflection earns nothing in this paper.',
    '## What the written paper actually tests');
}

// 04 Perspective anatomy and three levels
add('04-what-is-a-perspective',
  compose('What makes a perspective', [
    (y) => {
      const ctx = ['national', 'cultural', 'economic', 'generational', 'professional'];
      let s = T(140, y + 18, 'The holder’s context', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
      ctx.forEach((c, i) => { const cy = y + 34 + i * 52; s += panel(40, cy, 200, 42, C.tealLight, C.tealDark) + T(140, cy + 28, c, { size: 17, anchor: 'middle', weight: 600 }); s += `<line x1="240" y1="${cy + 21}" x2="330" y2="${y + 155}" stroke="${C.tealDark}" stroke-width="2.5"/>`; });
      s += arrow(330, y + 155, 368, y + 155, { w: 3.5, color: C.tealDark, marker: 'ahT' });
      const pc = card(374, y + 34, 496, { title: 'A perspective', body: [] , fill: C.cream, edge: C.olive, tsize: 22, minH: 252 });
      s += pc.s;
      const parts = [['Point of view', C.mustard], ['+ reasoning', C.teal], ['+ evidence', C.teal]];
      parts.forEach(([p, f], i) => { s += panel(400, y + 92 + i * 56, 444, 44, f, C.ink) + T(622, y + 121 + i * 56, p, { size: 19, weight: 700, anchor: 'middle' }); });
      return { s, h: 296 };
    },
    (y) => note(y, 'An opinion on its own is not a perspective: it needs reasoning and evidence behind it.'),
    (y) => label(y + 2, 'Consider every issue at three levels', { size: 20 }),
    (y) => row(y, [
      { title: 'Personal', align: 'middle', fill: C.cream, edge: C.olive },
      { title: 'Local and/or national', align: 'middle', fill: C.teal, edge: C.tealDark },
      { title: 'Global', align: 'middle', fill: C.tealLight, edge: C.tealDark },
    ], { arrows: true, card: { tsize: 20 } }),
    (y) => ({ s: path(`M210,${y + 4} Q450,${y + 50} 690,${y + 4}`, { w: 3, extra: 'marker-start="url(#ah)" marker-end="url(#ah)"' }) + T(450, y + 60, 'a strong answer moves between levels', { size: 17, anchor: 'middle', fill: C.muted, weight: 600 }), h: 64 }),
  ]),
  'Context factors (national, cultural, economic, generational, professional) feed into a perspective, which is a point of view plus reasoning plus evidence. Below, three levels to consider for every issue: personal, local and/or national, and global, with arrows showing a strong answer moves between them.',
  'A perspective is a reasoned, evidenced view shaped by context, seen at more than one level.',
  '## Perspectives, arguments and evidence');

// 05 Argument, evidence, assertion, assumption
{
  let b = '';
  const Y = 116;
  // Argument structure
  b += panel(30, Y, 840, 250) + T(56, Y + 38, 'Argument', { size: 22, weight: 700, fill: C.tealDark }) + T(56, Y + 62, 'a conclusion supported by reasons', { size: 16, fill: C.muted });
  b += panel(560, Y + 90, 280, 70, C.mustard, C.ink) + T(700, Y + 133, 'Conclusion', { size: 20, weight: 700, anchor: 'middle' });
  [['Reason', Y + 82], ['Reason', Y + 160]].forEach(([r, yy]) => { b += panel(300, yy, 170, 54, C.teal, C.ink) + T(385, yy + 34, r, { size: 18, weight: 700, anchor: 'middle' }) + arrow(470, yy + 27, 554, Y + 125, { w: 3 }); });
  [['Evidence', Y + 82], ['Evidence', Y + 160]].forEach(([r, yy]) => { b += panel(60, yy, 170, 54, C.tealLight, C.tealDark) + T(145, yy + 34, r, { size: 18, weight: 600, anchor: 'middle', fill: C.tealDark }) + arrow(230, yy + 27, 294, yy + 27, { w: 3, color: C.tealDark, marker: 'ahT' }); });
  b += T(145, Y + 236, 'data, examples, testimony', { size: 15, anchor: 'middle', fill: C.tealDark });
  // Assertion and assumption
  const Y2 = Y + 270;
  b += panel(30, Y2, 410, 210) + T(56, Y2 + 38, 'Assertion', { size: 22, weight: 700, fill: C.rust }) + T(56, Y2 + 62, 'a claim with no support at all', { size: 16, fill: C.muted });
  b += panel(150, Y2 + 96, 170, 60, C.mustard, C.ink) + T(235, Y2 + 133, 'Claim', { size: 20, weight: 700, anchor: 'middle' });
  b += `<rect x="70" y="${Y2 + 166}" width="330" height="34" rx="6" fill="none" stroke="${C.rust}" stroke-width="2.5" stroke-dasharray="7 6"/>` + T(235, Y2 + 189, 'nothing underneath', { size: 15, anchor: 'middle', fill: C.rust, weight: 600 });
  b += panel(460, Y2, 410, 210) + T(486, Y2 + 38, 'Assumption', { size: 22, weight: 700, fill: C.olive }) + T(486, Y2 + 62, 'taken for granted but unstated', { size: 16, fill: C.muted });
  b += panel(480, Y2 + 100, 120, 54, C.teal, C.ink) + T(540, Y2 + 133, 'Reason', { size: 18, weight: 700, anchor: 'middle' });
  b += panel(730, Y2 + 100, 120, 54, C.mustard, C.ink) + T(790, Y2 + 133, 'Claim', { size: 18, weight: 700, anchor: 'middle' });
  b += `<line x1="600" y1="${Y2 + 127}" x2="722" y2="${Y2 + 127}" stroke="${C.olive}" stroke-width="3.5" stroke-dasharray="8 6" marker-end="url(#ahO)"/>` + T(665, Y2 + 185, 'hidden link', { size: 16, anchor: 'middle', fill: C.olive, weight: 700 });
  add('05-argument-evidence-assertion-assumption',
    svg(900, Y2 + 236, 'Argument, evidence, assertion, assumption', b),
    'An argument is drawn as evidence feeding reasons that support a conclusion. An assertion is a claim with nothing underneath it. An assumption is a hidden, unstated link between a reason and a claim.',
    'Tell these four apart in a source before you judge it.',
    '## Perspectives, arguments and evidence');
}

// 06 Six evaluation criteria
add('06-six-evaluation-criteria',
  compose('Six criteria for evaluating a source', [
    (y) => table(y, ['Criterion', 'Question to ask'], [
      ['Credibility', 'Who wrote it, and what expertise do they have?'],
      ['Bias', 'Do they gain from this view? Is the language loaded?'],
      ['Currency', 'Is it recent enough for the claim?'],
      ['Relevance', 'Does it actually address the question?'],
      ['Corroboration', 'Do independent sources agree?'],
      ['Sample and method', 'Where data is used, how was it gathered?'],
    ], [250, 590], { size: 18 }),
    (y) => row(y, [
      { kicker: 'WEAKER: ASSERTS BIAS', kfill: C.rust, body: '“This source is biased because it is from an oil company.”', edge: C.rust, bfill: C.ink },
      { kicker: 'STRONGER: DEMONSTRATES IT', body: 'Quotes the loaded phrasing and explains whose interest it serves.', edge: C.tealDark, bfill: C.ink },
    ], { gap: 24, card: { size: 17 } }),
  ]),
  'A table of six criteria with the question to ask for each: credibility, bias, currency, relevance, corroboration, and sample and method. Below, asserting bias because a source is from an oil company is weaker than quoting loaded phrasing and explaining whose interest it serves.',
  'Name the criterion, then show the weakness from the text.',
  '## Analysing and evaluating sources');

// 07 Building a response
add('07-line-of-reasoning',
  compose('Constructing an extended answer', [
    (y) => steps(y, [
      { title: 'State a clear line of reasoning', body: 'Say where the answer is going.' },
      { title: 'Use the sources as evidence', body: 'Make each source support a point, rather than summarising it.' },
      { title: 'Consider at least one counter-argument', body: 'Treat it genuinely, not as a token gesture.' },
      { title: 'Respond to the counter-argument', body: 'Presenting it and then ignoring it is a common mistake.' },
      { title: 'Reach a justified conclusion', body: 'It must follow from what came before.' },
    ], { highlight: 3, gap: 10 }),
  ]),
  'Five numbered steps for an extended answer: state a clear line of reasoning, use sources as evidence, consider a counter-argument genuinely, respond to it, and reach a justified conclusion that follows from the reasoning.',
  'A counter-argument only earns credit when you answer it.',
  '## Constructing a response');

// 08 Worked example
add('08-worked-example-survey',
  compose('Taking apart a survey claim', [
    (y) => card(30, y, 840, { kicker: 'SOURCE', title: '“A survey of 200 people in one city found 78% support the new transport policy, so the country clearly backs it.”', tsize: 20, fill: C.panel, edge: C.ink }),
    (y) => row(y, [
      { kicker: 'CLAIM', kfill: C.olive, title: 'The country supports the policy', fill: C.cream, edge: C.olive },
      { kicker: 'EVIDENCE', title: 'A survey: 78% of 200 people', fill: C.tealLight, edge: C.tealDark },
      { kicker: 'ASSUMPTION', kfill: C.rust, title: 'One city represents the whole country', edge: C.rust },
    ], { card: { tsize: 18 } }),
    (y) => checklist(y, [
      { q: 'Sample size: 200 is small for a national claim', mark: 'x' },
      { q: 'Sample is narrow: one city, urban only', mark: 'x' },
      { q: '“Clearly” overstates what the data can support', mark: 'x' },
      { q: 'No information on who ran it or how people were chosen', mark: 'x' },
    ], { tsize: 18, gap: 8 }),
    (y) => note(y, 'Naming the specific weakness beats a general comment about reliability.'),
  ]),
  'A source claims a survey of 200 people in one city, with 78% support, shows the country backs a transport policy. It is split into claim, evidence and the assumption that one city represents the country, followed by four specific weaknesses: small sample, narrow sample, overstated wording and unknown method.',
  'Split the source into claim, evidence and assumption, then name each weakness.',
  '## Worked example');
