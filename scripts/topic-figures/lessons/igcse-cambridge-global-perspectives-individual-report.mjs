import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-cambridge-global-perspectives-individual-report';
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

// 01 Where the Individual Report fits
add('01-three-components',
  compose('Where the Individual Report fits', [
    (y) => row(y, [
      { kicker: 'COMPONENT 1', title: 'Written Exam', body: ['Assesses research, analysis and evaluation only.'] },
      { kicker: 'COMPONENT 2', title: 'Individual Report', body: ['Research, analysis, evaluation, reflection and communication.'], fill: C.cream, edge: C.olive, kfill: C.olive },
      { kicker: 'COMPONENT 3', title: 'Team Project', body: ['Where collaboration is assessed.'] },
    ], { card: { tsize: 21 } }),
    (y) => label(y + 6, 'Component 2 at a glance', { fill: C.olive }),
    (y) => row(y, [
      { title: '30%', body: 'of the qualification', align: 'middle', fill: C.tealLight, edge: C.tealDark },
      { title: '60 marks', body: 'level-based mark scheme', align: 'middle', fill: C.tealLight, edge: C.tealDark },
      { title: '1500–2000', body: 'words, excluding references', align: 'middle', fill: C.tealLight, edge: C.tealDark },
      { title: 'Internally set', body: 'externally marked by Cambridge', align: 'middle', fill: C.tealLight, edge: C.tealDark },
    ], { gap: 14, card: { tsize: 21, size: 16, pad: 14 } }),
  ]),
  'Three cards compare the components of 0457: the Written Exam assesses research, analysis and evaluation; the Individual Report adds reflection and communication; the Team Project is where collaboration is assessed. Below, Component 2 facts: 30% of the qualification, 60 marks, 1500 to 2000 words, internally set and externally marked.',
  'The Individual Report is the most independent component and assesses five of the six skills.',
  '## Where this fits in 0457');

// 02 From topic to research question
add('02-topic-to-question',
  compose('From a topic to a research question', [
    (y) => {
      const lv = [
        ['Topic', 'Choose one topic from the syllabus topic list.', 840],
        ['Context', 'Explore the background of the chosen topic.', 740],
        ['Global issue', 'Pick an issue with present-day impact: an ethical dilemma, conflict, damage, hardship, or a split in opinion.', 640],
        ['Research question', 'A global question with scope for a range of perspectives. It becomes the report title.', 540],
      ];
      let s = '', cy = y;
      lv.forEach(([ti, body, w], i) => {
        const x = 450 - w / 2;
        const c = card(x, cy, w, { title: ti, body, align: 'middle', fill: i === 3 ? C.cream : i === 2 ? C.tealLight : C.panel, edge: i === 3 ? C.olive : i === 2 ? C.tealDark : C.panelEdge, size: 17 });
        s += c.s; cy += c.h;
        if (i < lv.length - 1) { s += arrow(450, cy + 4, 450, cy + 36, { w: 4 }); cy += 40; }
      });
      return { s, h: cy - y };
    },
    (y) => note(y, 'The teacher can guide whether the question is feasible, but the candidate devises the question and title.'),
  ]),
  'A narrowing funnel: a topic from the syllabus list, then its context, then a global issue with present-day impact that divides opinion, and finally a global research question that becomes the report title.',
  'Each step narrows the focus until one researchable question is left.',
  '## Syllabus coverage');

// 03 Worked example: perspectives on a shared river
add('03-shared-river-perspectives',
  compose('One question, competing perspectives', [
    (y) => card(30, y, 840, { kicker: 'RESEARCH QUESTION', title: '“Should upstream and downstream countries share responsibility equally for managing a shared river’s water supply?”', fill: C.cream, edge: C.olive, kfill: C.olive, tsize: 20 }),
    (y) => {
      let s = `<rect x="30" y="${y}" width="840" height="130" rx="14" fill="${C.tealLight}" stroke="${C.panelEdge}" stroke-width="2.5"/>`;
      s += `<line x1="450" y1="${y + 6}" x2="450" y2="${y + 124}" stroke="${C.ink}" stroke-width="3" stroke-dasharray="10 7"/>` + T(462, y + 118, 'border', { size: 15, fill: C.muted, italic: true });
      s += `<path d="M50,${y + 78} C200,${y + 50} 300,${y + 100} 450,${y + 76} S700,${y + 52} 850,${y + 80}" fill="none" stroke="${C.blue}" stroke-width="14" stroke-linecap="round"/>`;
      s += T(60, y + 34, 'UPSTREAM COUNTRY', { size: 18, weight: 700, fill: C.tealDark }) + T(840, y + 34, 'DOWNSTREAM COUNTRY', { size: 18, weight: 700, fill: C.rust, anchor: 'end' });
      s += arrow(150, y + 112, 290, y + 112, { w: 3.5 }) + T(140, y + 118, 'river flow', { size: 15, fill: C.ink, anchor: 'end', weight: 600 });
      return { s, h: 130 };
    },
    (y) => row(y, [
      { title: 'Upstream government', body: 'Prioritises its own agriculture.', edge: C.tealDark, tfill: C.tealDark },
      { title: 'Downstream government', body: 'Faces water shortages.', edge: C.rust, tfill: C.rust },
    ], { gap: 30 }),
    (y) => card(30, y, 840, { title: 'Research, compare and evaluate both perspectives, then propose one course of action', tsize: 19, align: 'middle', fill: C.tealLight, edge: C.tealDark }),
    (y) => label(y - 4, 'Possible courses of action to weigh', { size: 19, fill: C.tealDark }),
    (y) => row(y - 8, [
      { title: 'Joint water-sharing treaty', align: 'middle', tsize: 18 },
      { title: 'Independent monitoring body', align: 'middle', tsize: 18 },
    ], { gap: 30 }),
    (y) => note(y, 'Explain realistically what putting the chosen action in place would involve.'),
  ]),
  'A river runs from an upstream country to a downstream country. The upstream government prioritises its own agriculture; the downstream government faces shortages. The report compares both perspectives, then weighs actions such as a joint water-sharing treaty or an independent monitoring body.',
  'A good question sets up at least two perspectives that the report can compare.',
  '## Syllabus coverage');

// 04 Recommended report sequence
add('04-report-sequence',
  compose('Building the report in the recommended order', [
    (y) => steps(y, [
      { title: 'Explain the issue and its perspectives', body: 'Local and/or national perspectives alongside global ones, and why they differ.' },
      { title: 'Analyse causes and consequences', body: 'Why people disagree, and what the issue leads to.' },
      { title: 'Evaluate possible courses of action', body: 'Weigh several options, then propose and justify one, with how it could be implemented and its impact.' },
      { title: 'Reflect and conclude', body: 'Give your own view, reflect on findings, learning and others’ perspectives, then answer the research question directly.' },
    ], { highlight: 2 }),
    (y) => note(y, 'No exact order is required, but this sequence maps onto the marking criteria, and structure and clarity are marked in their own right.'),
  ]),
  'Four numbered steps: explain the issue and its perspectives; analyse causes and consequences; evaluate possible courses of action and justify one; reflect and conclude by answering the research question.',
  'Following the recommended sequence makes each requirement easy to evidence.',
  '## How to approach it');

// 05 Marks by assessment objective
add('05-marks-by-ao',
  compose('Where the 60 marks come from', [
    (y) => bar(y, [
      { value: 40, fill: C.teal, inside: 'AO1  40 marks' },
      { value: 5, fill: C.mustard, inside: '' },
      { value: 15, fill: C.cream, inside: 'AO3  15' },
    ]),
    (y) => ({ s: T(30 + (840 * 42.5) / 60, y + 4, 'AO2  5', { size: 17, weight: 700, anchor: 'middle', fill: C.olive }), h: 10 }),
    (y) => {
      const a = card(30, y, 520, { title: 'AO1 (40 marks)', tfill: C.tealDark, edge: C.tealDark, body: ['The global issue', 'Causes and consequences', 'Perspectives', 'Courses of action', 'Evaluation of evidence and sources'], bullets: true, tsize: 19 });
      const b = card(570, y, 300, { title: 'AO2 (5 marks)', tfill: C.olive, edge: C.olive, body: ['Reflection'], bullets: true, tsize: 19 });
      const c = card(570, y + b.h + 14, 300, { title: 'AO3 Communication (15)', tfill: C.ink, body: ['Structure and clarity', 'Referencing'], bullets: true, tsize: 19 });
      return { s: a.s + b.s + c.s, h: Math.max(a.h, b.h + 14 + c.h) };
    },
    (y) => note(y, 'Eight level-based tables in Cambridge’s specimen mark scheme. They are not printed in the syllabus.'),
  ]),
  'A bar split into AO1 (40 marks), AO2 reflection (5 marks) and AO3 communication (15 marks). Underneath, the eight marking tables: global issue, causes and consequences, perspectives, courses of action, evaluation of sources, reflection, structure and clarity, and referencing.',
  'Two-thirds of the marks sit in the five AO1 tables.',
  '## How to approach it');

// 06 Weak vs strong question
add('06-weak-vs-strong-question',
  compose('A topic title is not a research question', [
    (y) => {
      const head = ['Names a specific place', 'Names a specific issue', 'Room for more than one perspective', 'Enough structure for 1500–2000 words'];
      const L = card(30, y, 410, { kicker: 'TOO BROAD', kfill: C.rust, title: '“Climate change”', body: 'A topic on its own: no place, no issue, no built-in perspectives.', tsize: 24, edge: C.rust, minH: 120 });
      const R = card(460, y, 410, { kicker: 'RESEARCHABLE', kfill: C.tealDark, title: '“To what extent should [named country] restrict [named industry] to protect [named resource]?”', tsize: 19, edge: C.tealDark, minH: 120 });
      const h0 = Math.max(L.h, R.h);
      const L2 = card(30, y, 410, { kicker: 'TOO BROAD', kfill: C.rust, title: '“Climate change”', body: 'A topic on its own: no place, no issue, no built-in perspectives.', tsize: 24, edge: C.rust, minH: h0 });
      const R2 = card(460, y, 410, { kicker: 'RESEARCHABLE', kfill: C.tealDark, title: '“To what extent should [named country] restrict [named industry] to protect [named resource]?”', tsize: 19, edge: C.tealDark, minH: h0 });
      let s = L2.s + R2.s, cy = y + h0 + 18;
      head.forEach((hd) => {
        s += panel(30, cy, 840, 52) + T(450, cy + 33, hd, { size: 18, weight: 600, anchor: 'middle' });
        const cross = (cx) => path(`M${cx - 11},${cy + 15} l22,22 m0,-22 l-22,22`, { stroke: C.rust, w: 5 });
        const tick = (cx) => path(`M${cx - 13},${cy + 26} l9,10 l17,-20`, { stroke: C.tealDark, w: 5 });
        s += cross(90) + tick(810);
        cy += 62;
      });
      return { s, h: cy - y - 10 };
    },
  ]),
  'Side-by-side comparison. The title Climate change is too broad. A question such as To what extent should a named country restrict a named industry to protect a named resource names a place and an issue, allows more than one perspective and gives enough structure for the word count.',
  'Start with the question, not the topic.',
  '## How to approach it');

// 07 Two separate jobs for sources
add('07-sources-two-jobs',
  compose('Every source does two separate jobs', [
    (y) => card(310, y, 280, { title: 'A source you use', align: 'middle', fill: C.mustard, edge: C.ink, tsize: 21 }),
    (y) => ({ s: path(`M450,${y - 18} L450,${y + 6} M450,${y + 6} L240,${y + 6} L240,${y + 34} M450,${y + 6} L660,${y + 6} L660,${y + 34}`, { w: 3 }) + arrow(240, y + 20, 240, y + 38, { w: 3 }) + arrow(660, y + 20, 660, y + 38, { w: 3 }), h: 24 }),
    (y) => row(y, [
      { kicker: 'AO1 EVALUATION', title: 'Judge the source', body: ['Explain its value to the research.', 'Is it reliable?', 'Is it credible?'], bullets: true, edge: C.tealDark, kfill: C.tealDark },
      { kicker: 'AO3 COMMUNICATION', title: 'Reference the source', body: ['Cite every source used.', 'Complete and consistent.', 'Clearly linked to the text.', 'No single required style: pick one and apply it consistently.'], bullets: true, edge: C.olive, kfill: C.olive },
    ], { gap: 40 }),
    (y) => note(y, 'Tip: keep a running reference list from the first source you read, rather than rebuilding it at the end.'),
  ]),
  'One source branches into two jobs. AO1 evaluation: explain its value and judge whether it is reliable and credible. AO3 communication: cite it with a complete, consistent, clearly linked referencing system.',
  'Evaluating a source and referencing it are marked separately.',
  '## How to approach it');
