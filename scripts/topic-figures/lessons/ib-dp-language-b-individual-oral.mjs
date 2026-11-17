import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-dp-language-b-individual-oral';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- Local layout helpers (self-contained; house style from ../style.mjs only) ----
const GW = {
  r: '281,288,466,633,642,982,644,300,365,365,501,662,288,460,288,360,631,407,610,618,646,608,620,566,619,620,288,302,662,662,662,511,966,690,654,730,722,601,590,746,743,269,571,672,565,903,753,765,639,765,644,642,646,744,690,985,682,679,629,365,360,365,471,456,323,562,612,571,612,583,370,613,591,242,242,549,242,876,591,600,612,612,376,528,327,591,562,818,546,562,552,426,333,426,662',
  s: '252,321,523,644,650,1004,663,326,373,373,540,673,319,465,319,379,660,423,623,636,666,629,640,576,640,640,319,329,673,673,673,543,999,728,659,737,722,605,588,749,746,277,580,703,565,922,759,769,645,773,652,650,660,736,728,1020,720,713,652,373,379,373,481,469,351,574,624,583,624,591,389,625,612,262,262,569,262,900,612,609,624,624,397,549,353,612,587,839,569,588,566,455,359,455,673',
  b: '237,338,552,649,655,1016,672,339,377,377,559,679,334,468,334,388,674,431,630,646,676,639,649,582,651,649,334,343,679,679,679,560,1016,747,662,740,722,607,587,750,747,281,584,719,565,932,762,771,648,777,657,655,667,732,747,1038,738,731,664,377,388,377,487,476,365,581,630,588,630,596,398,632,623,271,271,580,271,913,623,613,630,630,407,560,366,623,600,850,580,602,573,469,372,469,679',
};
const GX = { '•': [562, 503, 474], '–': [500, 500, 500], '—': [1000, 1000, 1000], '’': [261, 294, 311], '‘': [261, 294, 311], '“': [440, 507, 540], '”': [440, 501, 532], '→': [954, 954, 954], '←': [954, 954, 954], '↔': [1341, 1341, 1341], '·': [288, 319, 334], '…': [864, 956, 1002], '×': [662, 673, 679], '✓': [884, 883, 882], '✗': [886, 884, 883] };
const GT = Object.fromEntries(Object.entries(GW).map(([k, v]) => [k, v.split(',').map(Number)]));
const wi = (weight) => (weight >= 700 ? 2 : weight >= 600 ? 1 : 0);
// Width in px of a plain string at a size and weight (Inter metrics).
function tw(s, size = 18, weight = 400) {
  const k = ['r', 's', 'b'][wi(weight)], tab = GT[k];
  let u = 0;
  for (const ch of String(s)) { const c = ch.codePointAt(0); u += c >= 32 && c < 127 ? tab[c - 32] : GX[ch] ? GX[ch][wi(weight)] : 600; }
  return (u * size) / 1000;
}
const X = (s) => String(s).replace(/&(?!amp;|lt;|gt;|#\d+;)/g, '&amp;').replace(/</g, '&lt;');
const T = (x, y, s, o = {}) => t(x, y, X(s), o);
const WARN = [];
// Rich text: **bold** and *italic* markup. Returns tokens [{w: word, b, i}] with spaces between.
function toks(s, baseWeight) {
  const out = []; let b = false, it = false;
  for (const part of String(s).split(/(\*\*|\*)/)) {
    if (part === '**') { b = !b; continue; }
    if (part === '*') { it = !it; continue; }
    const words = part.split(/(\s+)/);
    for (const w of words) { if (w === '') continue; if (/^\s+$/.test(w)) out.push({ sp: true }); else out.push({ w, b: b || baseWeight >= 700 ? 700 : baseWeight, i: it }); }
  }
  return out;
}
// Wrap rich text into lines of token arrays.
function wrapRich(s, width, size, weight = 400) {
  const tk = toks(s, weight), lines = [[]]; let cur = 0, pendingSp = false;
  for (const k of tk) {
    if (k.sp) { pendingSp = true; continue; }
    const ww = tw(k.w, size, k.b), sp = lines[lines.length - 1].length && pendingSp ? tw(' ', size, weight) : 0;
    if (lines[lines.length - 1].length && cur + sp + ww > width) { lines.push([]); cur = 0; lines[lines.length - 1].push({ ...k, sp: false }); cur = ww; }
    else { lines[lines.length - 1].push({ ...k, sp: sp > 0 }); cur += sp + ww; }
    if (ww > width) WARN.push(`word too wide: "${k.w}" (${ww.toFixed(0)} > ${width.toFixed(0)})`);
    pendingSp = false;
  }
  return lines.filter((l) => l.length);
}
const lineW = (ln, size, weight) => ln.reduce((a, k) => a + tw(k.w, size, k.b) + (k.sp ? tw(' ', size, weight) : 0), 0);
function richLine(x, y, ln, o) {
  const { size = 18, weight = 400, fill = C.ink, anchor = 'start', italic = false } = o;
  const inner = ln.map((k) => {
    const txt = X(k.w), sp = k.sp ? ' ' : '';
    const attrs = (k.b !== weight ? ` font-weight="${k.b}"` : '') + (k.i && !italic ? ' font-style="italic"' : '') + (k.b > weight && o.bfill ? ` fill="${o.bfill}"` : '');
    return sp + (attrs ? `<tspan${attrs}>${txt}</tspan>` : txt);
  }).join('');
  return `<text x="${x}" y="${y}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}"${italic ? ' font-style="italic"' : ''}>${inner}</text>`;
}
// Paragraph: wrapped rich text. x = left (or centre if anchor middle, right if end). Returns {s,h,w}
function para(x, y, s, width, o = {}) {
  const size = o.size || 17, lh = o.lh || Math.round(size * 1.32), weight = o.weight || 400;
  if (o.bullet) {
    const ind = size * 0.95, lines = wrapRich(s, width - ind, size, weight);
    return { s: T(x, y, o.bullet === true ? '•' : o.bullet, { size, weight: 700, fill: o.mfill || o.fill || C.ink }) + lines.map((l, i) => richLine(x + ind, y + i * lh, l, o)).join(''), h: lines.length * lh, w: width };
  }
  const lines = wrapRich(s, width, size, weight);
  return { s: lines.map((l, i) => richLine(x, y + i * lh, l, o)).join(''), h: lines.length * lh, w: Math.max(0, ...lines.map((l) => lineW(l, size, weight))) };
}
// Card: panel with optional kicker, title and body (string or array). Returns {s,h}
function card(x, y, w, o = {}) {
  const pad = o.pad ?? 20, ts = o.tsize ?? 20, bs = o.size ?? 17, mid = o.align === 'middle';
  const tx = mid ? x + w / 2 : x + pad + (o.indent || 0), anchor = mid ? 'middle' : 'start', iw = w - 2 * pad - (o.indent || 0);
  const measure = (y0) => {
    let cy = y0 + pad, inner = '';
    if (o.kicker) { inner += T(tx, cy + 12, o.kicker, { size: 15, weight: 700, anchor, fill: o.kfill || C.tealDark }); cy += 24; }
    if (o.title) { const p = para(tx, cy + ts * 0.78, o.title, iw, { size: ts, weight: 700, anchor, fill: o.tfill || C.ink, lh: Math.round(ts * 1.25) }); inner += p.s; cy += p.h; }
    if (o.body) {
      const items = Array.isArray(o.body) ? o.body : [o.body];
      if (o.title || o.kicker) cy += o.tgap ?? 7;
      items.forEach((it, i) => {
        const p = para(tx, cy + bs * 0.8, it, iw, { size: bs, anchor, fill: o.bfill || C.muted, bullet: o.bullets, weight: o.bweight, bfill: o.bbfill || C.ink, mfill: o.mfill });
        inner += p.s; cy += p.h + (i < items.length - 1 ? (o.gap ?? 5) : 0);
      });
    }
    return { inner, h: cy - y0 + pad - 4 };
  };
  let m = measure(y);
  const h = Math.max(o.minH || 0, m.h);
  if (o.vcenter && h > m.h) m = measure(y + (h - m.h) / 2);
  const box = o.nobox ? '' : panel(x, y, w, h, o.fill || C.panel, o.edge || C.panelEdge);
  return { s: box + (o.extra ? o.extra(x, y, w, h) : '') + m.inner, h };
}
// Row of n equal-height cards; optional arrows between. widths: optional array of fractions.
function row(y, items, o = {}) {
  const x0 = o.x ?? 30, W0 = o.w ?? 840, gap = o.gap ?? (o.arrows ? 46 : 18), n = items.length;
  const fr = o.fr || items.map(() => 1), tot = fr.reduce((a, b) => a + b, 0), avail = W0 - gap * (n - 1);
  const ws = fr.map((f) => (avail * f) / tot), xs = ws.map((_, i) => x0 + ws.slice(0, i).reduce((a, b) => a + b, 0) + gap * i);
  const h = Math.max(o.minH || 0, ...items.map((it, i) => card(xs[i], y, ws[i], { ...o.card, ...it }).h));
  let s = '';
  items.forEach((it, i) => {
    s += card(xs[i], y, ws[i], { ...o.card, ...it, minH: h, vcenter: o.vcenter ?? true }).s;
    if (o.arrows && i < n - 1) s += arrow(xs[i] + ws[i] + 6, y + h / 2, xs[i + 1] - 6, y + h / 2, { w: 3.5, color: o.acolor || C.ink, marker: o.amarker || 'ah' });
  });
  return { s, h, xs, ws };
}
// Grid: items laid out in rows of `cols` columns.
function grid(y, items, cols, o = {}) {
  let s = '', cy = y;
  for (let i = 0; i < items.length; i += cols) {
    const r = row(cy, items.slice(i, i + cols), { ...o, w: o.w ?? 840 });
    s += r.s; cy += r.h + (o.vgap ?? 18);
  }
  return { s, h: cy - y - (o.vgap ?? 18) };
}
// Vertical stack of full-width cards, optional arrows between.
function stack(y, items, o = {}) {
  const x = o.x ?? 30, w = o.w ?? 840, gap = o.gap ?? (o.arrows ? 44 : 14);
  let s = '', cy = y;
  items.forEach((it, i) => {
    const c = card(x, cy, w, { ...o.card, ...it }); s += c.s; cy += c.h;
    if (i < items.length - 1) { if (o.arrows) s += arrow(x + w / 2, cy + 5, x + w / 2, cy + gap - 5, { w: 3.5, color: o.acolor || C.ink, marker: o.amarker || 'ah' }); cy += gap; }
  });
  return { s, h: cy - y };
}
// Numbered steps: badge + card. list: [{title, body, n}]
function steps(y, list, o = {}) {
  const x = o.x ?? 30, w = o.w ?? 840, gap = o.gap ?? 12; let s = '', cy = y;
  list.forEach((st, i) => {
    const hl = (o.highlight ?? []).includes?.(i) || o.highlight === i;
    const c = card(x + 74, cy, w - 74, { title: st.title, body: st.body, kicker: st.kicker, fill: hl ? C.cream : st.fill || C.panel, edge: hl ? C.olive : C.panelEdge, size: o.size ?? 17, tsize: o.tsize ?? 20, minH: o.minH ?? 0, pad: o.pad ?? 18, bullets: st.bullets });
    s += c.s + badge(x + 30, cy + c.h / 2, 24, st.n ?? String(i + 1), hl ? C.mustard : C.cream);
    cy += c.h + gap;
  });
  const line = `<line x1="${x + 30}" y1="${y + 20}" x2="${x + 30}" y2="${cy - gap - 20}" stroke="${C.panelEdge}" stroke-width="4"/>`;
  return { s: line + s, h: cy - y - gap };
}
// Highlighted note box (cream with olive edge), full width by default.
const note = (y, title, body, o = {}) => card(o.x ?? 30, y, o.w ?? 840, { title, body, fill: o.fill || C.cream, edge: o.edge || C.olive, tsize: o.tsize ?? 19, size: o.size ?? 17, bfill: o.bfill || C.ink, tfill: o.tfill || C.ink, align: o.align, pad: o.pad ?? 20, bullets: o.bullets });
// Table: cols [{w (fraction), head, hfill, hink}], rows [[cell strings]], optional per-row fill.
function table(y, cols, rows, o = {}) {
  const x0 = o.x ?? 30, W0 = o.w ?? 840, size = o.size ?? 16, pad = o.pad ?? 14, hs = o.hsize ?? 17;
  const tot = cols.reduce((a, c) => a + (c.w || 1), 0), ws = cols.map((c) => (W0 * (c.w || 1)) / tot);
  const xs = ws.map((_, i) => x0 + ws.slice(0, i).reduce((a, b) => a + b, 0));
  let s = '', cy = y;
  const cellH = (txt, w, sz, wt) => (txt ? wrapRich(txt, w - 2 * pad, sz, wt).length * Math.round(sz * 1.3) : 0);
  const hh = Math.max(...cols.map((c, i) => cellH(c.head, ws[i], hs, 700))) + 2 * pad - 2;
  let head = '';
  cols.forEach((c, i) => {
    head += `<rect x="${xs[i]}" y="${cy}" width="${ws[i]}" height="${hh}" fill="${c.hfill || C.teal}"/>`;
    if (c.head) head += para(xs[i] + pad, cy + pad + hs * 0.8, c.head, ws[i] - 2 * pad, { size: hs, weight: 700, fill: c.hink || C.ink, lh: Math.round(hs * 1.3) }).s;
  });
  cy += hh;
  let body = '';
  rows.forEach((r, ri) => {
    const rh = Math.max(...r.map((txt, i) => cellH(txt, ws[i], size, i === 0 && o.firstBold !== false ? 700 : 400))) + 2 * pad - 2;
    r.forEach((txt, i) => {
      const fill = (o.cellFill && o.cellFill(ri, i)) || (i === 0 && o.firstFill !== false ? C.tealLight : ri % 2 ? '#f8faf9' : C.panel);
      body += `<rect x="${xs[i]}" y="${cy}" width="${ws[i]}" height="${rh}" fill="${fill}"/>`;
      if (txt) body += para(xs[i] + pad, cy + pad + size * 0.8, txt, ws[i] - 2 * pad, { size, weight: i === 0 && o.firstBold !== false ? 700 : 400, fill: i === 0 ? C.ink : o.ink || C.ink, lh: Math.round(size * 1.3) }).s;
    });
    if (ri < rows.length - 1) body += `<line x1="${x0}" y1="${cy + rh}" x2="${x0 + W0}" y2="${cy + rh}" stroke="${C.panelEdge}" stroke-width="1.5"/>`;
    cy += rh;
  });
  const H = cy - y;
  const grid = xs.slice(1).map((xx) => `<line x1="${xx}" y1="${y}" x2="${xx}" y2="${y + H}" stroke="${C.panelEdge}" stroke-width="1.5"/>`).join('');
  return { s: `<clipPath id="tc${y}"><rect x="${x0}" y="${y}" width="${W0}" height="${H}" rx="14"/></clipPath><g clip-path="url(#tc${y})">${head + body}</g>` + grid + `<rect x="${x0}" y="${y}" width="${W0}" height="${H}" rx="14" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`, h: H };
}
// Small rounded label chip. Returns {s,w}
function chip(x, y, label, o = {}) {
  const size = o.size ?? 16, weight = o.weight ?? 700, pw = o.padX ?? 12, w = tw(label, size, weight) + pw * 2, h = size + 14;
  const cx = o.anchor === 'middle' ? x - w / 2 : o.anchor === 'end' ? x - w : x;
  return { s: `<rect x="${cx}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${o.fill || C.cream}" stroke="${o.edge || C.ink}" stroke-width="2"/>` + T(cx + w / 2, y + h / 2 + size * 0.36, label, { size, weight, anchor: 'middle', fill: o.ink || C.ink }), w, h };
}
// Segmented proportion bar. segs [{label, sub, frac, fill}]
function segbar(y, segs, o = {}) {
  const x0 = o.x ?? 30, W0 = o.w ?? 840, h = o.h ?? 74; let s = '', x = x0;
  const tot = segs.reduce((a, g) => a + g.frac, 0);
  segs.forEach((g) => {
    const w = (W0 * g.frac) / tot;
    s += `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${g.fill || C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += T(x + w / 2, y + (g.sub ? h / 2 - 4 : h / 2 + 7), g.label, { size: o.size ?? 19, weight: 700, anchor: 'middle', fill: g.ink || C.ink });
    if (g.sub) s += T(x + w / 2, y + h / 2 + 20, g.sub, { size: 16, anchor: 'middle', fill: g.ink || C.ink });
    x += w;
  });
  return { s, h };
}
// Text block helper for flow layouts: returns a block fn.
const P = (s, o = {}) => (y) => { const p = para(o.anchor === 'middle' ? 450 : o.x ?? 30, y + (o.size || 17) * 0.8, s, o.w ?? 840, { fill: C.muted, ...o }); return { s: p.s, h: p.h }; };
// Build a figure from blocks (functions y => {s,h}) stacked top to bottom; numbers add extra space.
function F(name, title, sub, blocks, alt, caption, after, o = {}) {
  if (tw(title, 31, 700) > 860) WARN.push(`${name}: title too wide`);
  if (sub && tw(sub, 21) > 860) WARN.push(`${name}: subtitle too wide`);
  let y = sub ? (o.top ?? 124) : (o.top ?? 100), s = '';
  const gap = o.gap ?? 22;
  blocks.forEach((b, i) => {
    if (typeof b === 'number') { y += b; return; }
    if (typeof b === 'string') { s += b; return; }
    const r = b(y); s += r.s; y += r.h + (i < blocks.length - 1 ? gap : 0);
  });
  add(name, svg(900, Math.round(y + (o.bottom ?? 32)), title, s, sub), alt, caption, after);
}
const B = (fn) => (y) => fn(y); // identity wrapper for readability
// Hub: central circle with card columns left and right, joined by connector lines.
function hub(y, center, left, right, o = {}) {
  const cwid = o.cardW ?? 270, r = o.r ?? 92, gap = o.vgap ?? 14, cxx = 450;
  const col = (items, x) => { let cy = 0; const cs = items.map((it) => { const c = card(x, 0, cwid, { size: 16, tsize: 18, pad: 16, ...o.card, ...it }); const m = { it, top: cy, h: c.h }; cy += c.h + gap; return m; }); return { cs, h: cy - gap }; };
  const A = col(left, 30), Bc = col(right, 870 - cwid);
  const H = Math.max(A.h, Bc.h, r * 2 + 10), cy = y + H / 2;
  let lines = '', cards = '';
  const put = (Cc, x, side) => { const off = (H - Cc.h) / 2; Cc.cs.forEach((m) => { const yy = y + off + m.top; cards += card(x, yy, cwid, { size: 16, tsize: 18, pad: 16, ...o.card, ...m.it }).s; const ex = side < 0 ? x + cwid : x; lines += `<line x1="${ex}" y1="${yy + m.h / 2}" x2="${cxx + side * r * 0.5}" y2="${cy + (yy + m.h / 2 - cy) * 0.3}" stroke="${C.ink}" stroke-width="2.5"/>`; }); };
  put(A, 30, -1); put(Bc, 870 - cwid, 1);
  const cs = o.csize ?? 21, lh = cs * 1.22, L = Array.isArray(center) ? center : [center];
  const ctext = L.map((l, i) => T(cxx, cy - ((L.length - 1) * lh) / 2 + i * lh + cs * 0.35, l, { size: cs, weight: 700, anchor: 'middle' })).join('');
  return { s: lines + `<circle cx="${cxx}" cy="${cy}" r="${r}" fill="${o.cfill || C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + ctext + cards, h: H };
}
// IB Language B theme map: guiding principle, topics around the theme, possible questions as lenses.
function themeMap(theme, principle, topics, questions, o = {}) {
  const half = Math.ceil(topics.length / 2);
  return [
    (y) => note(y, '', o.plabel ? `**${o.plabel}** ${principle}` : `**Guiding principle:** "${principle}"`, { align: 'middle', size: 18 }),
    (y) => { const s = T(450, y + 14, (o.topicLabel || `${topics.length} OPTIONAL RECOMMENDED TOPICS (your teacher chooses)`), { size: 15, weight: 700, anchor: 'middle', fill: C.muted }); const h = hub(y + 30, theme, topics.slice(0, half), topics.slice(half), { cardW: o.cardW ?? 260, r: o.r ?? 96, card: { align: 'middle', vcenter: true, minH: o.minH ?? 64 } }); return { s: s + h.s, h: h.h + 30 }; },
    (y) => { const s = T(450, y + 14, o.qLabel || 'POSSIBLE QUESTIONS: use them as lenses on any text', { size: 15, weight: 700, anchor: 'middle', fill: C.muted }); const r = row(y + 30, questions.map((q) => ({ body: `"${q}"`, fill: C.tealLight, edge: C.tealDark, bfill: C.ink, size: 18, align: questions.length === 1 ? 'middle' : 'start' })), { gap: 18 }); return { s: s + r.s, h: r.h + 30 }; },
  ];
}
// Language B assessment bar: the four 25% components.
const LB_ASSESS = (y, o = {}) => {
  const segs = [
    { label: 'Paper 1', sub: 'writing · 30 marks', frac: 1, fill: o.hi === 0 ? C.mustard : C.cream },
    { label: 'Paper 2 listening', sub: '25 marks', frac: 1, fill: o.hi === 1 ? C.mustard : C.teal },
    { label: 'Paper 2 reading', sub: '40 marks', frac: 1, fill: o.hi === 2 ? C.mustard : C.teal },
    { label: 'Individual oral', sub: 'internal · 30 marks', frac: 1, fill: o.hi === 3 ? C.mustard : C.tealLight },
  ];
  let s = '';
  [0, 1, 2, 3].forEach((i) => { s += T(30 + 210 * i + 105, y + 16, '25%', { size: 18, weight: 700, anchor: 'middle', fill: C.ink }); });
  const b = segbar(y + 28, segs, { size: 18 });
  return { s: s + b.s, h: b.h + 28 };
};
// Wrapped row(s) of chips, centred by default. Returns {s,h}
function chips(y, labels, o = {}) {
  const gap = o.gap ?? 10, W0 = o.w ?? 840, x0 = o.x ?? 30, lines = [[]]; let cur = 0;
  labels.forEach((l) => { const w = chip(0, 0, l, o).w; if (lines[lines.length - 1].length && cur + gap + w > W0) { lines.push([]); cur = 0; } lines[lines.length - 1].push([l, w]); cur += (cur ? gap : 0) + w; });
  let s = '', h = 0;
  const ch = (o.size ?? 16) + 14;
  lines.forEach((ln, i) => { const tot = ln.reduce((a, [, w]) => a + w, 0) + gap * (ln.length - 1); let x = o.align === 'start' ? x0 : x0 + (W0 - tot) / 2; const yy = y + i * (ch + 10); ln.forEach(([l, w]) => { s += chip(x, yy, l, o).s; x += w + gap; }); h = yy + ch - y; });
  return { s, h };
}

const H2 = {
  brief: '## What the brief says, and what it leaves to your teacher',
  skills: '## The skills the oral tests',
  sl: '## SL: working with a visual image',
  hl: '## HL: working with a literary extract',
  struct: '## Structuring your presentation',
  conv: '## Handling the conversation',
};

// Layer rows: badge + instruction card + example card
function layerRows(y, list, o = {}) {
  let s = T(110, y + 14, o.h1 || 'WHAT TO DO', { size: 15, weight: 700, fill: C.muted }) + T(490, y + 14, o.h2 || 'WORKED EXAMPLE', { size: 15, weight: 700, fill: C.olive });
  let cy = y + 28;
  list.forEach(([title, body, ex], i) => {
    const a = (h) => card(90, cy, 370, { title, body, size: 16, tsize: 19, pad: 16, minH: h, vcenter: true });
    const b = (h) => card(490, cy, 380, { body: ex, size: 16, bfill: C.ink, pad: 16, fill: C.cream, edge: C.olive, minH: h, vcenter: true });
    const h = Math.max(a(0).h, b(0).h);
    s += a(h).s + b(h).s + badge(52, cy + h / 2, 22, String(i + 1), C.cream) + arrow(463, cy + h / 2, 486, cy + h / 2, { w: 3 });
    cy += h + 12;
  });
  return { s, h: cy - 12 - y };
}

// 01 Oral at a glance
F('01-oral-at-a-glance', 'The individual oral at a glance', '', [
  (y) => segbar(y, [
    { label: 'Individual oral', sub: 'internal · 25% · 30 marks', frac: 25, fill: C.mustard },
    { label: 'External papers', sub: '75%', frac: 75, fill: C.tealLight },
  ]),
  (y) => row(y, [
    { kicker: 'SL STIMULUS', title: 'A visual image', body: '"clearly relevant to one (or more) of the themes of the course"' },
    { kicker: 'HL STIMULUS', title: 'A literary excerpt', body: '"an excerpt from one of the two literary works studied", originally written in the target language' },
  ], { gap: 18, card: { size: 17, tsize: 20 } }),
  (y) => row(y, [
    { kicker: 'IN THE BRIEF', title: 'Same assessment outline at SL and HL', body: '"it is the nature of the assessment that differs"', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'FROM YOUR TEACHER', kfill: C.olive, title: 'Timings, stages, rules on notes, criteria', body: 'Plan with their exact figures, not an old handout.', fill: C.cream, edge: C.olive },
  ], { gap: 18, card: { size: 17, tsize: 19 } }),
],
'A bar shows the individual oral as the only internal component, 25 percent and 30 marks, against 75 percent for the external papers. Cards give the stimulus: a visual image at SL and an excerpt from a literary work at HL. The brief sets the same outline at both levels; timings, stages, rules on notes and criteria come from your teacher.',
'One internal component worth 25%: an image at SL, a literary excerpt at HL.', H2.brief);

// 02 Three skills
F('02-three-skills', 'The oral uses all three skills', '', [
  (y) => {
    const R = 150, A = [355, y + 160], Bp = [545, y + 160], Cc = [450, y + 320];
    let s = '';
    [[A, C.teal], [Bp, C.cream], [Cc, C.mustard]].forEach(([[x, yy], f]) => { s += `<circle cx="${x}" cy="${yy}" r="${R}" fill="${f}" fill-opacity="0.6" stroke="${C.ink}" stroke-width="3"/>`; });
    s += T(290, y + 105, 'Receptive', { size: 22, weight: 700, anchor: 'middle' }) + para(290, y + 133, 'understand the stimulus and the questions', 150, { size: 16, anchor: 'middle', fill: C.ink }).s;
    s += T(610, y + 105, 'Productive', { size: 22, weight: 700, anchor: 'middle' }) + para(610, y + 133, 'speak at length, in an organised way', 150, { size: 16, anchor: 'middle', fill: C.ink }).s;
    s += T(450, y + 375, 'Interactive', { size: 22, weight: 700, anchor: 'middle' }) + para(450, y + 403, 'a real exchange, not memorised answers', 170, { size: 16, anchor: 'middle', fill: C.ink }).s;
    s += `<circle cx="450" cy="${y + 215}" r="40" fill="${C.panel}" stroke="${C.ink}" stroke-width="3"/>` + T(450, y + 222, 'Oral', { size: 19, weight: 700, anchor: 'middle' });
    return { s, h: 470 };
  },
  (y) => note(y, 'Notice the verb respond', '"understand and use language to express and **respond** to a range of ideas with fluency and accuracy": half of the skill is reacting to what someone else says.', { size: 17 }),
  (y) => P('Register: your audience is your teacher in a formal assessment, so be polite, clear and natural: full sentences, no slang, no essay phrasing read aloud.', { anchor: 'middle', size: 17 })(y),
],
'Three overlapping circles labelled receptive (understand the stimulus and questions), productive (speak at length in an organised way) and interactive (a real exchange, not memorised answers) meet at the centre labelled Oral. A note highlights the verb respond in the assessment objective.',
'Understand, speak at length and respond: the oral tests all three skills at once.', H2.skills);

// 03 SL four layers
F('03-sl-four-layers', 'SL: four layers for a visual image', 'Image: a girl follows a recipe on a video call with an older relative', [
  (y) => layerRows(y, [
    ['Literal', 'Who, where, what is happening? Two or three sentences.', 'A girl follows a recipe on a video call with an older relative, perhaps her grandmother.'],
    ['Theme', 'Which theme is it "clearly relevant" to? Which topic? Hold a second theme in reserve.', '**Identities** (language and identity). Also **experiences** (migration): dark outside, daylight on screen.'],
    ['Lens', 'Pick one possible question to turn the image into an argument.', '"How do language and culture contribute to form our identity?" The recipe is culture passed on.'],
    ['Culture', 'Connect to a specific target-language example: a custom, a news story, a text from class.', 'Compare a family food tradition you have studied: what is similar, what is different.'],
  ]),
  (y) => note(y, 'One sentence of description, then straight to an idea', '"This image shows a girl learning a family recipe by video call, and I think it asks how a culture survives when a family is split between two countries."', { size: 17 }),
],
'Four numbered layers for an SL image, each with a worked example: literal (a girl follows a recipe on a video call), theme (identities, with experiences in reserve), lens (a possible question about language and culture), and culture (compare a target-language food tradition). A strong opening sentence moves from description straight to an idea.',
'Literal, theme, lens, culture: keep the description short and reach an idea fast.', H2.sl);

// 04 HL four questions
F('04-hl-four-questions', 'HL: four questions for a literary extract', 'Extract: Nadia reads her mother\'s letter and delays replying', [
  (y) => layerRows(y, [
    ['Where is it?', 'What happens just before, and what follows? One or two sentences.', 'In your real work: where this scene sits in the story.'],
    ['What happens here?', 'The key action, change or conflict.', 'Nadia, living abroad, reads a letter from her mother and delays replying.'],
    ['How is it written?', 'Two or three features, each with a short quotation and its effect.', 'The untranslatable word for home · the repeated "Tomorrow" · the tram "timetable" learned first.'],
    ['Why does it matter?', 'Link to the whole work and to a prescribed theme.', '**Identities** (language and identity), **experiences** (migration). Lens: "What constitutes an identity?"'],
  ]),
  (y) => note(y, 'Avoid retelling the plot.', 'The extract is evidence for an interpretation, not a story to repeat.', { align: 'middle' }),
],
'Four numbered questions for an HL extract with a worked example: where is it in the work; what happens (Nadia delays replying to her mother\'s letter); how is it written (the untranslatable word for home, the repeated Tomorrow, the tram timetable); and why it matters (identities and experiences, with a possible question as a lens).',
'Place it, say what happens, show how it is written, and link it to the work and a theme.', H2.hl);

// 05 Five-move presentation
F('05-five-move-presentation', 'A five-move presentation', 'The same shape works at SL and HL', [
  (y) => steps(y, [
    { title: 'Frame', body: 'One sentence: what the stimulus is + your main idea' },
    { title: 'Describe', body: 'Brief literal account (SL) / place in the work (HL)' },
    { title: 'Interpret', body: 'Two points, each linked to the theme or a possible question' },
    { title: 'Connect', body: 'A specific target-language culture example (SL) / the wider work and its themes (HL)' },
    { title: 'Close', body: 'A sentence that opens discussion: a question or tension' },
  ], { highlight: [2, 3], size: 17, tsize: 19, gap: 8, pad: 13 }),
  (y) => {
    let s = T(30, y + 16, 'TIME BALANCE', { size: 15, weight: 700, fill: C.muted });
    const b = segbar(y + 28, [
      { label: 'Frame', frac: 1, fill: C.panel }, { label: 'Describe', sub: 'shortest', frac: 0.9, fill: C.panel },
      { label: 'Interpret', sub: 'most of the time', frac: 2.6, fill: C.teal }, { label: 'Connect', frac: 2.2, fill: C.teal }, { label: 'Close', frac: 1, fill: C.panel },
    ], { h: 64, size: 17 });
    s += b.s + T(450, y + 28 + 64 + 24, 'Proportions illustrative: description is the shortest move; interpretation and connection take most of it.', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
    return { s, h: 28 + 64 + 30 };
  },
  (y) => { const s = T(450, y + 16, 'SIGNPOST EACH MOVE (learn the target-language equivalents)', { size: 15, weight: 700, fill: C.muted, anchor: 'middle' }); const c = chips(y + 30, ['"First I\'ll describe…"', '"What interests me most is…"', '"This connects to…"', '"On the other hand…"', '"To sum up…"'], { size: 16, weight: 600, fill: C.cream, edge: C.olive }); return { s: s + c.s, h: c.h + 30 }; },
  (y) => P('Plan in key words, not a script: five headings and a few key words under each, if notes are allowed.', { anchor: 'middle', size: 17, fill: C.ink })(y),
],
'Five linked boxes: frame, describe, interpret, connect and close. A bar shows describing as the shortest move and interpreting and connecting taking most of the time. Signposting phrases such as first I\'ll describe and this connects to sit below.',
'Frame, describe, interpret, connect, close: keep description short and signpost each move.', H2.struct);

// 06 Conversation toolkit
F('06-conversation-toolkit', 'Handling the conversation', 'Prepare the moves, not the answers', [
  (y) => {
    const q = card(30, y, 840, { body: '*"Would you take part in a project like this?"*   Weak: "Yes."', size: 18, bfill: C.ink, pad: 16, align: 'middle', fill: '#eef1f0' });
    const r = row(y + q.h + 16, [
      { kicker: 'ANSWER', title: '"Yes, probably,"' },
      { kicker: 'REASON', title: '"because I think changes start in small groups."' },
      { kicker: 'EXAMPLE', title: '"My class started a clothes swap last year, and now the whole school runs one."', fill: C.cream, edge: C.olive },
    ], { arrows: true, gap: 42, fr: [0.7, 1.1, 1.4], card: { size: 16, tsize: 18 } });
    return { s: q.s + r.s, h: q.h + 16 + r.h };
  },
  (y) => grid(y, [
    { title: 'Repair', body: 'Missing a word? Paraphrase: "the thing you use to…", "a kind of…", "the opposite of…". Don\'t switch languages.' },
    { title: 'Clarify', body: 'Didn\'t understand? "Do you mean…?" "Could you say that another way?"' },
    { title: 'Agree, disagree, qualify', body: '"That\'s true up to a point, but…" · "I see it differently, because…" · "it depends on…"' },
    { title: 'Buy time', body: '"That\'s a good question…" "Let me think…": once, then answer.' },
  ], 2, { gap: 16, vgap: 14, card: { size: 16, tsize: 19 } }),
],
'A teacher question with a weak yes answer is extended in three linked parts: answer, reason and example (a class clothes swap that the whole school now runs). Four cards give conversation moves with target phrases: repair by paraphrasing, clarify, agree or disagree or qualify, and buy time.',
'Extend every answer with a reason and an example; repair, clarify and qualify in the target language.', H2.conv);

// 07 Moving between themes
F('07-moving-between-themes', 'Be ready to move between themes', 'The conversation can go beyond the stimulus', [
  (y) => {
    const c = card(300, y, 300, { kicker: 'SHARING THE PLANET', title: 'An image of a river clean-up', align: 'middle', fill: C.tealLight, edge: C.tealDark, size: 17, tsize: 20 });
    const yy = y + c.h + 70;
    const r = row(yy, [
      { kicker: 'IDENTITIES', title: 'What young people value', align: 'middle' },
      { kicker: 'EXPERIENCES', title: 'A community event that changed someone', align: 'middle' },
    ], { gap: 160, card: { size: 17, tsize: 20 } });
    const a = path(`M400,${y + c.h + 4} C380,${yy - 30} 250,${yy - 40} 220,${yy - 6}`, { w: 3.5, extra: 'marker-end="url(#ah)"' }) + path(`M500,${y + c.h + 4} C520,${yy - 30} 650,${yy - 40} 680,${yy - 6}`, { w: 3.5, extra: 'marker-end="url(#ah)"' });
    return { s: c.s + a + r.s, h: yy + r.h - y };
  },
  (y) => P('Keep vocabulary ready for every theme your class has studied, and practise linking ideas from one theme to another.', { anchor: 'middle', size: 17 })(y),
],
'An image of a river clean-up under Sharing the planet branches to two other themes: Identities (what young people value) and Experiences (a community event that changed someone).',
'One stimulus can lead the conversation into other themes.', H2.conv);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
