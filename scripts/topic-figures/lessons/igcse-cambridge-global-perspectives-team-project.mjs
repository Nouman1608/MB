import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-cambridge-global-perspectives-team-project';
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
    s += card(x, y, w, { ...o.card, ...it, minH: h, vcenter: o.vcenter }).s;
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

// 01 Where the Team Project fits
add('01-weighting-and-evidence',
  compose('Where the Team Project fits', [
    (y) => bar(y, [
      { value: 35, fill: C.panel, inside: 'C1 Written Exam 35%' },
      { value: 30, fill: C.panel, inside: 'C2 Report 30%' },
      { value: 35, fill: C.mustard, inside: 'C3 Team Project 35%' },
    ]),
    (y) => label(y + 4, 'Three pieces of evidence, produced in different ways', { size: 20 }),
    (y) => row(y, [
      { kicker: 'SHARED BY THE TEAM', title: 'Explanation of Research and Planning', fill: C.tealLight, edge: C.tealDark },
      { kicker: 'SHARED BY THE TEAM', title: 'Evidence of Action', fill: C.tealLight, edge: C.tealDark },
      { kicker: 'EACH CANDIDATE', kfill: C.olive, title: 'Reflective Paper', fill: C.cream, edge: C.olive },
    ], { vcenter: true, card: { tsize: 19 } }),
    (y) => note(y, 'Internally assessed and externally moderated. The only component with a genuine team element.'),
  ]),
  'A bar shows the three components: Written Exam 35%, Individual Report 30%, Team Project 35%. Below, the Team Project produces two shared pieces of evidence, the Explanation of Research and Planning and the Evidence of Action, and one individual Reflective Paper per candidate.',
  'The Team Project is joint-largest with the Written Exam and mixes team and individual evidence.',
  '## Where this fits in 0457');

// 02 Mark structure tree
{
  const leaf = (x, y, w, h, title, marks, shared) => {
    const p = para(0, 0, title, w - 90, { size: 17, weight: 600 }); const n = Math.round(p.h / 22);
    return panel(x, y, w, h, shared ? C.tealLight : C.cream, shared ? C.tealDark : C.olive) +
    para(x + 16, y + h / 2 - (n - 1) * 11 + 6, title, w - 90, { size: 17, weight: 600 }).s +
    T(x + w - 16, y + h / 2 + 9, marks, { size: 24, weight: 700, anchor: 'end', fill: shared ? C.tealDark : C.olive }); };
  const Y = 110;
  let b = '';
  b += card(250, Y, 400, { title: 'Team Project: 70 marks', align: 'middle', fill: C.mustard, edge: C.ink, tsize: 22 }).s;
  b += path(`M450,${Y + 64} L450,${Y + 86} M235,${Y + 86} L665,${Y + 86} M235,${Y + 86} L235,${Y + 106} M665,${Y + 86} L665,${Y + 106}`, { w: 3 });
  const Y2 = Y + 108;
  b += card(30, Y2, 410, { title: 'Team Element: 25', body: 'Produced collaboratively', align: 'middle', tsize: 21 }).s;
  b += card(460, Y2, 410, { title: 'Personal Element: 45', body: 'All from the Reflective Paper', align: 'middle', tsize: 21 }).s;
  const Y3 = Y2 + 118, lh = 66, g = 12;
  const L = [['Explanation of Research and Planning', '10', 1], ['Evidence of Action', '5', 1], ['Collaboration: whole team', '5', 1], ['Collaboration: individual', '5', 0]];
  const R = [['Evaluation of the action and teamwork', '10', 0], ['Reflection on learning', '15', 0], ['Reflection on teamwork', '10', 0], ['Communication', '10', 0]];
  L.forEach(([a, m, s], i) => { b += leaf(50, Y3 + i * (lh + g), 370, lh, a, m, s); });
  R.forEach(([a, m, s], i) => { b += leaf(480, Y3 + i * (lh + g), 370, lh, a, m, s); });
  b += `<line x1="40" y1="${Y2 + 86}" x2="40" y2="${Y3 + 3 * (lh + g) + lh / 2}" stroke="${C.ink}" stroke-width="2.5"/>` + L.map((_, i) => `<line x1="40" y1="${Y3 + i * (lh + g) + lh / 2}" x2="50" y2="${Y3 + i * (lh + g) + lh / 2}" stroke="${C.ink}" stroke-width="2.5"/>`).join('');
  b += `<line x1="470" y1="${Y2 + 86}" x2="470" y2="${Y3 + 3 * (lh + g) + lh / 2}" stroke="${C.ink}" stroke-width="2.5"/>` + R.map((_, i) => `<line x1="470" y1="${Y3 + i * (lh + g) + lh / 2}" x2="480" y2="${Y3 + i * (lh + g) + lh / 2}" stroke="${C.ink}" stroke-width="2.5"/>`).join('');
  const Ly = Y3 + 4 * (lh + g) + 14;
  b += `<rect x="60" y="${Ly}" width="34" height="26" rx="6" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + T(106, Ly + 20, 'same mark for every team member', { size: 17 });
  b += `<rect x="480" y="${Ly}" width="34" height="26" rx="6" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + T(526, Ly + 20, 'marked individually', { size: 17 });
  add('02-mark-structure',
    svg(900, Ly + 56, 'How the 70 marks are split', b),
    'A tree splits the 70 marks into the Team Element (25: Explanation of Research and Planning 10, Evidence of Action 5, collaboration 5 for the whole team and 5 individual) and the Personal Element (45: evaluation of action and teamwork 10, reflection on learning 15, reflection on teamwork 10, communication 10).',
    'Only 25 marks are shared; 50 of the 70 marks are individual.',
    '## Syllabus coverage');
}

// 03 How the project runs
add('03-project-process',
  compose('How the Team Project runs', [
    (y) => steps(y, [
      { title: 'Choose a topic and a local issue', body: 'A specific, local instance of a global topic from the syllabus list.' },
      { title: 'Research different aspects', body: 'Each member researches a different angle, such as a different perspective.' },
      { title: 'Decide on a course of action', body: 'Combine the research and agree the action through discussion.' },
      { title: 'Plan and carry out the action', body: 'The team acts on the issue.' },
      { title: 'Measure how successful it was', body: 'Judge the effect of the action.' },
    ], { highlight: 3, size: 17, tsize: 19, gap: 10 }),
    (y) => label(y, 'Built up alongside: the Explanation of Research and Planning', { size: 19, fill: C.tealDark }),
    (y) => row(y - 6, [
      { kicker: 'STAGE 1', title: 'Topic and issue identified' },
      { kicker: 'STAGE 2', title: 'Plan of action and roles' },
      { kicker: 'STAGE 3', title: 'Review of changes made' },
    ], { arrows: true, card: { tsize: 18, pad: 16 } }),
  ]),
  'Five numbered steps: choose a topic and local issue, research different aspects, decide on a course of action, carry out the action, and measure its success. Below, the Explanation of Research and Planning grows in three stages: topic and issue, plan and roles, then a review of changes.',
  'Research is shared out, the action is agreed together, and the planning document grows as the project runs.',
  '## How the Team Project actually runs');

// 04 Evidence of Action: what counts
add('04-evidence-of-action',
  compose('Evidence of Action: show what you did', [
    (y) => {
      const ok = ['Posters', 'Leaflets', 'Web pages', 'Videos (10 minutes maximum)', 'Presentations', 'Event photographs'];
      const left = checklist(y, ok.map((q) => ({ q })), { w: 500, tsize: 18, gap: 8 });
      const right = card(560, y, 310, { kicker: 'DOES NOT COUNT', kfill: C.rust, title: 'Evidence of research or planning meetings', body: 'It shows preparation, not the action itself.', edge: C.rust, tsize: 20, minH: left.h, pad: 24 });
      const right2 = card(560, y + 110, 310, { kicker: 'DOES NOT COUNT', kfill: C.rust, title: 'Evidence of research or planning meetings', body: 'It shows preparation, not the action itself.', tsize: 20, fill: 'none', edge: 'none' });
      const ic = `<circle cx="715" cy="${y + 70}" r="34" fill="${C.panel}" stroke="${C.rust}" stroke-width="5"/>` + path(`M697,${y + 52} l36,36 m0,-36 l-36,36`, { stroke: C.rust, w: 6 });
      return { s: left.s + panel(560, y, 310, left.h, C.panel, C.rust) + right2.s.replace(/<rect[^>]*\/>/, '') + ic, h: Math.max(left.h, right.h) };
    },
    (y) => note(y, 'Any appropriate form works, as long as it shows what the team actually did.'),
  ]),
  'Ticked list of acceptable forms of Evidence of Action: posters, leaflets, web pages, videos of up to 10 minutes, presentations and event photographs. A separate panel marks evidence of research or planning meetings as not counting.',
  'Evidence of Action must show the action itself, in any suitable form.',
  '## How the Team Project actually runs');

// 05 Hard caps on length
{
  const gauge = (y, title, lo, hi, max, unit, ticks, extra) => {
    const x0 = 60, x1 = 840, sx = (v) => x0 + ((x1 - x0) * v) / max, ty = y + 96;
    let s = panel(30, y, 840, 170) + T(50, y + 36, title, { size: 20, weight: 700 });
    s += `<rect x="${x0}" y="${ty}" width="${sx(hi) - x0}" height="30" fill="${C.panel}" stroke="${C.ink}" stroke-width="2"/>`;
    if (lo > 0) s += `<rect x="${sx(lo)}" y="${ty}" width="${sx(hi) - sx(lo)}" height="30" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>`;
    else s += `<rect x="${x0}" y="${ty}" width="${sx(hi) - x0}" height="30" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>`;
    s += `<rect x="${sx(hi)}" y="${ty}" width="${x1 - sx(hi)}" height="30" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/>`;
    for (let k = 0; k < 6; k++) s += `<line x1="${sx(hi) + 12 + k * ((x1 - sx(hi)) / 6)}" y1="${ty + 30}" x2="${sx(hi) + 30 + k * ((x1 - sx(hi)) / 6)}" y2="${ty}" stroke="${C.rust}" stroke-width="2.5"/>`;
    s += `<line x1="${sx(hi)}" y1="${ty - 16}" x2="${sx(hi)}" y2="${ty + 44}" stroke="${C.rust}" stroke-width="5"/>`;
    s += T(850, ty - 26, `cap: nothing after ${hi} ${unit} is marked`, { size: 16, weight: 700, fill: C.rust, anchor: 'end' });
    ticks.forEach((v) => { s += T(sx(v), ty + 58, String(v), { size: 15, anchor: 'middle', fill: C.muted }); });
    if (lo > 0) s += T((sx(lo) + sx(hi)) / 2, ty + 21, 'target', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
    return s + (extra || '');
  };
  const Y = 110;
  const b = gauge(Y, 'Explanation of Research and Planning', 300, 400, 600, 'words', [0, 300, 400]) +
    gauge(Y + 186, 'Evidence of Action as video', 0, 10, 15, 'minutes', [0, 10]) +
    gauge(Y + 372, 'Reflective Paper (excluding citations and bibliography)', 750, 1000, 1500, 'words', [0, 750, 1000, 1400],
      `<circle cx="${60 + (780 * 1400) / 1500}" cy="${Y + 372 + 111}" r="9" fill="${C.ink}"/>`) +
    note(Y + 558, 'A strong 1400-word Reflective Paper is only ever marked on its first 1000 words.').s;
  add('05-hard-caps',
    svg(900, Y + 558 + 84, 'Hard limits, not guidance', b),
    'Three length scales. Explanation of Research and Planning: 300 to 400 words, nothing after 400 marked. Evidence of Action video: nothing after 10 minutes marked. Reflective Paper: 750 to 1000 words, nothing after 1000 marked, so a 1400-word paper is marked only on its first 1000.',
    'Anything past the cap earns nothing.',
    '## Word and time limits that cost marks if ignored');
}

// 06 Reflective Paper contents
add('06-reflective-paper',
  compose('What goes into the Reflective Paper', [
    (y) => row(y, [
      { kicker: 'SUMMARISE', title: 'Your research findings', body: 'and how the team did, or did not, use them.' },
      { kicker: 'REFLECT', title: 'What you learned', body: ['about the issue', 'about teamwork', 'about yourself'], bullets: true, fill: C.cream, edge: C.olive, kfill: C.olive },
      { kicker: 'EVALUATE', title: 'How effective it was', body: ['the action taken', 'your own collaboration'], bullets: true },
    ], { card: { tsize: 20 } }),
    (y) => row(y, [
      { title: '750–1000 words', body: 'continuous text', align: 'middle', fill: C.tealLight, edge: C.tealDark },
      { title: 'First person', body: 'typically', align: 'middle', fill: C.tealLight, edge: C.tealDark },
      { title: 'Sub-headings', body: 'allowed for clarity', align: 'middle', fill: C.tealLight, edge: C.tealDark },
      { title: '45 of 70', body: 'marks, all individual', align: 'middle', fill: C.mustard, edge: C.ink, bfill: C.ink },
    ], { gap: 14, card: { tsize: 19, size: 16, pad: 14 } }),
    (y) => note(y, 'Only describing the project caps the mark well below the top band. Reflect and evaluate.', { title: 'Common mistake' }),
  ]),
  'Three parts of the Reflective Paper: summarise your research findings and how the team used them; reflect on what you learned about the issue, teamwork and yourself; evaluate the action and your own collaboration. Facts: 750 to 1000 words of continuous text, usually first person, sub-headings allowed, worth 45 of the 70 marks.',
  'The Reflective Paper is where an individual grade is mostly decided.',
  '## The Reflective Paper (Personal Element, 45 marks)');

// 07 Collaboration behaviours
add('07-collaboration',
  compose('What the teacher watches for', [
    (y) => hub(y, 'Collaboration, observed across the project', [
      { title: 'Clear communication' }, { title: 'Sharing and developing ideas' }, { title: 'Agreeing targets and deadlines' }, { title: 'Solving problems' },
      { title: 'Being flexible when required' }, { title: 'Dividing tasks, recognising every contribution' }, { title: 'Asking for and giving support' },
    ], { r: 110, csize: 19 }),
    (y) => row(y, [
      { title: '5 marks', body: 'the same for the whole team', align: 'middle', fill: C.tealLight, edge: C.tealDark },
      { title: '5 marks', body: 'individual: can vary within a team', align: 'middle', fill: C.cream, edge: C.olive },
    ], { gap: 30, card: { tsize: 22 } }),
  ]),
  'Seven observed behaviours around a central Collaboration hub: clear communication, sharing ideas, agreeing targets and deadlines, solving problems, flexibility, dividing tasks and recognising contributions, and giving and asking for support. Collaboration is 10 marks: 5 for the whole team and 5 individual.',
  'Collaboration is observed, not automatic, and half of it is marked individually.',
  '## Collaboration (10 marks, part of the Team Element)');
