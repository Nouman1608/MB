import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-dp-language-b-paper-2-receptive-skills';
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
// Passage with highlighted segments. lines: arrays of [text, kind] (kind: '', 'hl' cream, 'key' teal, 'no' struck). Returns {s,h, marks:{id:{x,y,w}}}
function passage(x, y, lines, o = {}) {
  const size = o.size ?? 19, lh = o.lh ?? Math.round(size * 1.75);
  let s = '', marks = {};
  lines.forEach((ln, i) => {
    let cx = x; const by = y + size + i * lh;
    ln.forEach(([txt0, kind, id]) => {
      const lead = txt0.length - txt0.trimStart().length; cx += lead * tw(' ', size); const txt = txt0.trimStart();
      const w = tw(txt, size, kind === 'hl' || kind === 'key' ? 600 : 400);
      if (kind === 'hl') s += `<rect x="${cx - 3}" y="${by - size + 1}" width="${w + 6}" height="${size + 9}" rx="5" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>`;
      if (kind === 'key') s += `<rect x="${cx - 3}" y="${by - size + 1}" width="${w + 6}" height="${size + 9}" rx="5" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2"/>`;
      s += T(cx, by, txt, { size, weight: kind === 'hl' || kind === 'key' ? 600 : 400, fill: kind === 'no' ? C.muted : C.ink });
      if (kind === 'no') s += `<line x1="${cx}" y1="${by - size * 0.32}" x2="${cx + w}" y2="${by - size * 0.32}" stroke="${C.rust}" stroke-width="2.5"/>`;
      if (id) marks[id] = { x: cx, y: by, w, top: by - size + 1, bot: by + 10 };
      cx += w;
    });
  });
  return { s, h: lines.length * lh, marks };
}

const H2 = {
  brief: '## Paper 2 as the brief describes it',
  loc: '## Locating evidence',
  syn: '## Synonyms and paraphrase',
  inf: '## Inference',
  ref: '## Reference words',
  lis: '## Listening tactics',
  time: '## Managing time',
};

// 01 Raw marks vs weighting
F('01-paper-2-weighting', 'Paper 2: different marks, equal weight', 'Separate listening and reading sections · 50% of the final grade', [
  (y) => {
    const unit = 15;
    let s = T(30, y + 16, 'RAW MARKS', { size: 15, weight: 700, fill: C.muted }) + T(500, y + 16, 'SHARE OF FINAL GRADE', { size: 15, weight: 700, fill: C.muted });
    const bar = (yy, n, f, l) => `<rect x="150" y="${yy}" width="${n * 6.5}" height="44" rx="6" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + T(140, yy + 29, l, { size: 18, weight: 700, anchor: 'end' }) + T(150 + n * 6.5 + 10, yy + 29, `${n}`, { size: 19, weight: 700 });
    s += bar(y + 34, 25, C.tealLight, 'Listening') + bar(y + 96, 40, C.teal, 'Reading');
    // pie-ish: 4 quarters
    const cx = 690, cy = y + 112, r = 88;
    const seg = (a0, a1, f) => { const p = (a) => [cx + r * Math.cos(a), cy + r * Math.sin(a)]; const [x0, y0] = p(a0), [x1, y1] = p(a1); return `<path d="M${cx},${cy} L${x0},${y0} A${r},${r} 0 0 1 ${x1},${y1} Z" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`; };
    const q = Math.PI / 2;
    s += seg(-q, 0, C.tealLight) + seg(0, q, C.teal) + seg(q, 3 * q, C.panel);
    s += T(cx + 38, cy - 30, '25%', { size: 17, weight: 700, anchor: 'middle' }) + T(cx + 38, cy + 44, '25%', { size: 17, weight: 700, anchor: 'middle' });
    s += T(cx - 44, cy + 6, 'other 50%', { size: 15, anchor: 'middle', fill: C.muted });
    s += T(cx + r + 12, cy - 40, 'Listening', { size: 16, weight: 600 }) + T(cx + r + 12, cy + 52, 'Reading', { size: 16, weight: 600 });
    return { s, h: 210 };
  },
  (y) => row(y, [
    { kicker: 'SAME AT SL AND HL', title: 'Identical assessment outline', body: '"it is the nature of the assessment that differs": HL handles a wider range of more complex language.' },
    { kicker: 'ASK YOUR TEACHER', kfill: C.olive, title: 'Not in the brief', body: 'Time for each section, number of texts, question formats. Practise on specimen and past papers.', fill: C.cream, edge: C.olive },
  ], { gap: 18, card: { size: 17, tsize: 19 } }),
],
'Bars compare raw marks, 25 for listening and 40 for reading, with a circle showing each section worth 25 percent of the final grade, 50 percent in total. Cards note the outline is identical at SL and HL and that timings, number of texts and formats come from your teacher.',
'Reading has more marks, but listening and reading each count for 25% of the grade.', H2.brief);

// 02 Locating evidence
F('02-locating-evidence', 'Locating evidence in the text', 'What shows that the writer had gained the owner\'s trust by the end of the week? [1]', [
  (y) => {
    const p = passage(60, y + 22, [
      [['My first week at the harbour café was a disaster. On Monday I ']],
      [['dropped a tray of glasses', 'no', 'd'], ['. On Tuesday I mixed up two orders and a ']],
      [['customer walked out. ', ''], ['By Friday', 'key', 'k'], [', though, Mrs Adebayo was ']],
      [['letting me close up on my own', 'hl', 'a'], [', which she had never allowed a new ']],
      [['worker to do.']],
    ], { size: 20 });
    let s = panel(30, y, 840, p.h + 34) + p.s;
    return { s, h: p.h + 34 };
  },
  (y) => steps(y, [
    { title: 'Underline the key words', body: '*trust*, *end of the week*' },
    { title: 'Think of synonyms first', body: 'Expect *by Friday*, *allowed*, *let*.' },
    { title: 'Scan', body: '"**By Friday**" matches *end of the week*.' },
    { title: 'Read the whole sentence', body: 'The answer sits one clause on: "letting me close up on my own".' },
  ], { size: 17, tsize: 19, gap: 8, pad: 12, highlight: [3] }),
  (y) => row(y, [
    { kicker: 'ANSWER', title: 'She let the writer close the café alone.', fill: C.cream, edge: C.olive },
    { kicker: 'DISTRACTOR', kfill: C.rust, title: 'The dropped tray', body: 'Same paragraph, but it answers a different question.' },
  ], { gap: 18, fr: [1.2, 1], card: { size: 17, tsize: 19 } }),
],
'A short passage about a first week at a harbour café with By Friday highlighted as the scanned key phrase, letting me close up on my own highlighted as the answer, and dropped a tray of glasses struck through as a distractor. Four steps: underline key words, think of synonyms, scan, and read the whole sentence.',
'Scan for a synonym of the key words, then read one clause further for the answer.', H2.loc);

// 03 Synonym test
F('03-find-the-word', 'Find the word that means "delay"', '', [
  (y) => {
    const p = passage(60, y + 22, [
      [['The council has ', ''], ['decided', 'no'], [' to ', ''], ['postpone', 'hl'], [' the new parking rules until spring.']],
      [['Residents had complained that the plan was introduced ', ''], ['without', 'key']],
      [['consultation', 'key'], [', and several shopkeepers feared they would lose customers.']],
    ], { size: 19 });
    return { s: panel(30, y, 840, p.h + 34) + p.s, h: p.h + 34 };
  },
  (y) => row(y, [
    { kicker: 'CHECK 1', title: 'Match the word class', body: '"delay" here is a verb, so the answer is a verb.' },
    { kicker: 'CHECK 2', title: 'Match the form', body: '*decided* is past tense, wrong form and wrong meaning. *postpone* is the base form.' },
    { kicker: 'CHECK 3', title: 'Test it', body: 'Put it in the question\'s sentence. If the sentence breaks, the word is wrong.' },
  ], { gap: 14, card: { size: 16, tsize: 18 } }),
  (y) => row(y, [
    { kicker: 'COPYING', kfill: C.muted, title: '"introduced without consultation"', body: 'Shows you found the line.' },
    { kicker: 'PARAPHRASE', title: '"Nobody asked them before the plan was made."', body: 'Shows you understood it.', fill: C.tealLight, edge: C.tealDark },
  ], { arrows: true, gap: 50, card: { size: 17, tsize: 18 } }),
],
'A passage about postponed parking rules with postpone highlighted and decided struck through. Three checks: match the word class, match the form, and test the word in the sentence. Below, copying the line introduced without consultation is contrasted with the paraphrase nobody asked them before the plan was made.',
'Match class and form, test it in the sentence, and restate ideas in your own words.', H2.syn);

// 04 Inference chain
F('04-inference-chain', 'Every inference needs three links', '', [
  (y) => row(y, [
    { kicker: 'QUOTATION', title: '"I nodded and kept smiling"' },
    { kicker: 'WHAT IT SAYS', title: 'She agreed on the surface' },
    { kicker: 'WHAT IT IMPLIES', title: 'She is hiding disagreement or discomfort', fill: C.cream, edge: C.olive },
  ], { arrows: true, gap: 46, card: { size: 17, tsize: 19 } }),
  (y) => P('**Worked example:** What does the writer suggest about how official systems treat his identity? [2]', { anchor: 'middle', size: 18, fill: C.ink })(y),
  (y) => row(y, [
    { kicker: 'QUOTATIONS', title: '"that is what the register says" · "no form has ever had room for" · "stopped correcting anyone"' },
    { kicker: 'LITERAL', title: 'The school list and forms use a different name' },
    { kicker: 'INFERENCE', title: 'Official systems leave no space for his real name [1]; he has given up resisting [1]', fill: C.cream, edge: C.olive },
  ], { arrows: true, gap: 46, card: { size: 16, tsize: 17 } }),
  (y) => row(y, [
    { title: 'Weaker: "he has two names"', body: 'True, but literal, not an inference about official systems.' },
    { title: 'Tone words change attitude', body: '*still, even, only, finally, supposedly*: "my grandmother **still** calls me" shows loyalty.', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 18, card: { size: 16, tsize: 18 } }),
],
'A three-link chain: quotation, what it says literally, what it implies. A worked example about Sami and Samuel links quotations such as no form has ever had room for to a literal reading and then to the inference that official systems leave no space for his real name and he has given up resisting.',
'Quotation, literal meaning, implication: if you cannot point to the words, you have invented it.', H2.inf);

// 05 Reference words
F('05-reference-words', 'What does "they" refer to?', '', [
  (y) => {
    const p = passage(60, y + 62, [
      [['Residents', 'no', 'r'], [' had complained that the plan was introduced without consultation,']],
      [['and ', ''], ['several shopkeepers', 'hl', 's'], [' feared ', ''], ['they', 'key', 't'], [' would lose customers.']],
    ], { size: 21, lh: 64 });
    const S = p.marks.s, Tt = p.marks.t, Rr = p.marks.r;
    let s = panel(30, y, 840, p.h + 102) + p.s;
    const yb = S.bot + 10;
    s += path(`M${Tt.x + Tt.w / 2},${Tt.bot + 2} C${Tt.x + Tt.w / 2},${yb + 30} ${S.x + S.w / 2},${yb + 30} ${S.x + S.w / 2},${S.bot + 4}`, { w: 3.5, stroke: C.olive, extra: 'marker-end="url(#ahO)"' });
    s += T(Tt.x + Tt.w + 30, yb + 26, '✓ they = several shopkeepers', { size: 16, weight: 700, fill: C.olive });
    s += path(`M${Tt.x + Tt.w / 2 + 10},${Tt.top - 2} C${Tt.x + 40},${Rr.top - 34} ${Rr.x + Rr.w / 2 + 40},${Rr.top - 34} ${Rr.x + Rr.w / 2},${Rr.top - 4}`, { w: 2.5, stroke: C.rust, extra: 'stroke-dasharray="7 6"' });
    s += T(Rr.x, Rr.top - 40, '✗ not the residents', { size: 16, weight: 700, fill: C.rust });
    return { s, h: p.h + 102 };
  },
  (y) => row(y, [
    { kicker: '1', title: 'Look before the word', body: 'Same or previous sentence' },
    { kicker: '2', title: 'Find what agrees', body: 'A plural for *they*; use gender and number endings' },
    { kicker: '3', title: 'Replace and reread', body: 'If the meaning holds, you are right' },
  ], { arrows: true, gap: 40, card: { size: 16, tsize: 19, align: 'middle' } }),
],
'In the sentence several shopkeepers feared they would lose customers, an arrow links they back to several shopkeepers, while a dashed line to residents is marked wrong. Three steps: look before the word, find what agrees, then replace and reread.',
'Look back, find a match that agrees, and test it by substitution.', H2.ref);

// 06 Listening
F('06-listening-distractors', 'Listening: you cannot scan back', '', [
  (y) => row(y, [
    { kicker: 'BEFORE', title: 'Read and predict', body: 'Read every question, underline question words, predict the answer type (number, place, feeling, reason) and likely words.', fill: C.cream, edge: C.olive },
    { kicker: 'DURING', title: 'Note, don\'t write sentences', body: 'Symbols: ↑ rise, ↓ fall, → leads to, ✗ not. Answer in order; if you miss one, move on.' },
    { kicker: 'DISTRACTORS', kfill: C.rust, title: 'Changes of mind', body: 'Speakers correct themselves, give two numbers or mention an option only to reject it.' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18 } }),
  (y) => {
    let s = card(30, y, 840, { body: '**When did the device first work for a whole day?**   ARJUN: "We thought we\'d have it running in March, but the battery kept failing, so it was actually May before it lasted a full day."', size: 17, bfill: C.ink, pad: 18, fill: '#eef1f0' }).s;
    const yy = y + 120;
    s += `<line x1="100" y1="${yy + 40}" x2="800" y2="${yy + 40}" stroke="${C.ink}" stroke-width="4"/>`;
    s += `<circle cx="250" cy="${yy + 40}" r="14" fill="${C.panel}" stroke="${C.rust}" stroke-width="3"/>` + T(250, yy + 46, '✗', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
    s += T(250, yy + 82, 'March', { size: 20, weight: 700, anchor: 'middle', fill: C.muted }) + T(250, yy + 106, '"we thought": a plan', { size: 16, anchor: 'middle', fill: C.rust });
    s += T(430, yy + 30, '"but" · "actually"', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
    s += `<circle cx="620" cy="${yy + 40}" r="16" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + T(620, yy + 46, '✓', { size: 16, weight: 700, anchor: 'middle' });
    s += T(620, yy + 82, 'May', { size: 22, weight: 700, anchor: 'middle' }) + T(620, yy + 106, 'the result: the answer', { size: 16, anchor: 'middle', fill: C.ink });
    s += arrow(290, yy + 40, 590, yy + 40, { w: 3, color: C.olive, marker: 'ahO', dash: '8 6' });
    return { s, h: 120 + 112 };
  },
],
'Three cards: before the recording, read and predict; during it, take notes with symbols; and watch for distractors such as self-corrections. In a worked example, March is mentioned first but marked as only a plan by we thought, and the words but and actually lead to the answer, May.',
'The first thing you hear may be a distractor: listen for the words that signal a correction.', H2.lis);

// 07 Time budget
F('07-time-budget', 'Budget time by marks', 'Example: a 50-minute practice on a 40-mark reading set', [
  (y) => {
    const sc = 16;
    let s = `<rect x="50" y="${y + 20}" width="${45 * sc}" height="56" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + `<rect x="${50 + 45 * sc}" y="${y + 20}" width="${5 * sc}" height="56" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += T(50 + 22.5 * sc, y + 55, '45 minutes answering', { size: 19, weight: 700, anchor: 'middle' }) + T(50 + 50 * sc, y + 134, '5 minutes checking', { size: 16, weight: 700, anchor: 'end', fill: C.olive });
    for (let m = 0; m <= 50; m += 10) s += `<line x1="${50 + m * sc}" y1="${y + 76}" x2="${50 + m * sc}" y2="${y + 86}" stroke="${C.ink}" stroke-width="2"/>` + T(50 + m * sc, y + 106, String(m), { size: 15, anchor: 'middle', fill: C.muted });
    return { s, h: 140 };
  },
  (y) => {
    const f = card(30, y, 840, { body: 'minutes per mark  =  (time allowed − checking time) ÷ marks  =  (50 − 5) ÷ 40  =  **1.125**', size: 20, bfill: C.ink, align: 'middle', fill: C.panel, edge: C.ink });
    return f;
  },
  (y) => row(y, [
    { kicker: 'A 4-MARK QUESTION', title: '4 × 1.125 = 4.5 minutes', fill: C.cream, edge: C.olive, align: 'middle' },
    { kicker: 'DO NOT STALL', title: 'After twice its budget, mark it and move on', align: 'middle' },
    { kicker: 'LEAVE NOTHING BLANK', title: 'A reasoned attempt can earn a mark', align: 'middle' },
  ], { gap: 14, card: { size: 16, tsize: 18 } }),
  (y) => P('Use your teacher\'s real timings for your level once you have them.', { anchor: 'middle', size: 16, italic: true })(y),
],
'A 50-minute bar is split into 45 minutes answering and 5 minutes checking. The formula minutes per mark equals time allowed minus checking time, divided by marks, gives 45 divided by 40, or 1.125 minutes per mark, so a 4-mark question gets 4.5 minutes.',
'Minutes per mark = (time − checking) ÷ marks; then spend time in proportion.', H2.time);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
