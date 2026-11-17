import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-world-history-9489-origins-first-world-war';

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
        const p = para(tx, cy + bs * 0.8, it, iw, { size: bs, anchor, fill: o.bfill || (o.fill === C.mustard ? C.ink : C.muted), bullet: o.bullets, weight: o.bweight, bfill: o.bbfill || C.ink, mfill: o.mfill });
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

// Tree node helper
const node = (cx, y, w, title, sub, o = {}) => {
  const c = card(cx - w / 2, y, w, { title, body: sub, align: 'middle', size: 16, tsize: 19, pad: 14, fill: o.fill || C.panel, edge: o.edge || C.panelEdge, minH: o.minH || 0, vcenter: true });
  return { ...c, cx, top: y, bot: y + c.h };
};
const link = (a, b) => path(`M${a.cx},${a.bot} L${a.cx},${(a.bot + b.top) / 2} L${b.cx},${(a.bot + b.top) / 2} L${b.cx},${b.top}`, { w: 2.5 });

// ---- end helpers ----

// ---- history helpers (hist1) ----
// Vertical timeline: date on the left of a spine, card on the right. items [{d, title, body, fill, edge, key}]
function vtimeline(y, items, o = {}) {
  const LX = o.lx ?? 170, W = 870 - LX - 34, sz = o.size ?? 16, ts = o.tsize ?? 18;
  const mk = (it, yy) => card(LX + 34, yy, W, { title: it.title, body: it.body, size: sz, tsize: ts, pad: 13, fill: it.fill || (it.key ? C.cream : C.panel), edge: it.edge || (it.key ? C.olive : C.panelEdge), tgap: 3 });
  const hs = items.map((it) => mk(it, 0).h), gap = o.gap ?? 10;
  const total = hs.reduce((a, h) => a + h + gap, -gap);
  let s = `<line x1="${LX}" y1="${y + 10}" x2="${LX}" y2="${y + total - 10}" stroke="${C.ink}" stroke-width="4"/>`, cy = y;
  items.forEach((it, i) => {
    s += mk(it, cy).s + `<line x1="${LX}" y1="${cy + hs[i] / 2}" x2="${LX + 34}" y2="${cy + hs[i] / 2}" stroke="${C.ink}" stroke-width="2.5"/>` +
      `<circle cx="${LX}" cy="${cy + hs[i] / 2}" r="9" fill="${it.key ? C.mustard : C.teal}" stroke="${C.ink}" stroke-width="3"/>`;
    if (it.d) {
      const dl = Array.isArray(it.d) ? it.d : [it.d];
      dl.forEach((d, k) => { s += T(LX - 20, cy + hs[i] / 2 + 6 + (k - (dl.length - 1) / 2) * 21, d, { size: o.dsize ?? 17, weight: 700, anchor: 'end' }); });
    }
    cy += hs[i] + gap;
  });
  return { s, h: total };
}
// Interpretation spectrum: a double-headed bar with end labels, then cards hanging from points along it.
// pts [{at (0..1), title, body}] laid out as a row of cards beneath; connector from card top to the bar position.
function spectrum(y, left, right, pts, o = {}) {
  const x0 = 60, x1 = 840, by = y + 58;
  let s = T(x0 - 20, y + 16, left, { size: 17, weight: 700, fill: C.tealDark }) + T(x1 + 20, y + 16, right, { size: 17, weight: 700, fill: C.rust, anchor: 'end' });
  s += `<defs><linearGradient id="sg${y}" x1="0" x2="1"><stop offset="0" stop-color="${C.teal}"/><stop offset="1" stop-color="${C.cream}"/></linearGradient></defs>`;
  s += `<rect x="${x0}" y="${by - 13}" width="${x1 - x0}" height="26" rx="13" fill="url(#sg${y})" stroke="${C.ink}" stroke-width="2.5"/>`;
  const r = row(by + 70, pts.map((p) => ({ title: p.title, body: p.body, fill: p.fill, edge: p.edge })), { gap: o.gap ?? 14, card: { size: o.size ?? 16, tsize: o.tsize ?? 18, pad: 14, align: 'middle' } });
  pts.forEach((p, i) => {
    const px = x0 + p.at * (x1 - x0), cx = r.xs[i] + r.ws[i] / 2;
    s += path(`M${px},${by + 13} L${px},${by + 36} L${cx},${by + 50} L${cx},${by + 70}`, { w: 2.5 });
    s += `<circle cx="${px}" cy="${by}" r="10" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
  });
  return { s: s + r.s, h: 70 + 58 + r.h };
}
// Label above a block (small caps-style kicker). Returns block fn.
const K = (label, o = {}) => (y) => ({ s: T(o.x ?? 30, y + 14, label, { size: 15, weight: 700, fill: o.fill || C.muted }), h: 14 });
// Essay plan: numbered paragraph cards with a minutes label and a tag chip; first is the named factor.
function planList(y, items, o = {}) {
  let s = '', cy = y;
  items.forEach((it, i) => {
    const hl = it.hl ?? i === 0;
    const c = card(130, cy, 740, { title: it.title, body: it.body, size: 16, tsize: 19, pad: 15, fill: hl ? C.tealLight : C.panel, edge: hl ? C.tealDark : C.panelEdge });
    s += c.s + badge(62, cy + c.h / 2 - (it.min ? 8 : 0), 24, it.n ?? String(i + 1), hl ? C.mustard : C.cream);
    if (it.min) s += T(62, cy + c.h / 2 + 36, it.min, { size: 15, weight: 700, anchor: 'middle', fill: C.muted });
    if (it.tag) s += chip(855, cy + 12, it.tag, { size: 15, anchor: 'end', fill: hl ? C.mustard : C.panel, edge: hl ? C.ink : C.panelEdge }).s;
    cy += c.h + (o.gap ?? 12);
  });
  return { s, h: cy - y - (o.gap ?? 12) };
}
// Balance scale: heavier side drops. left/right: {title, items[]}; tilt: 'right' or 'left'.
function balance(y, left, right, o = {}) {
  const tilt = o.tilt === 'left' ? -1 : 1, cx = 450, py = y + 40, dy = 34 * tilt;
  const lx = 210, rx = 690, ly = py - dy, ry = py + dy;
  let s = `<polygon points="${cx},${py} ${cx - 34},${py + 70} ${cx + 34},${py + 70}" fill="${C.rock}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  s += `<line x1="${lx}" y1="${ly}" x2="${rx}" y2="${ry}" stroke="${C.ink}" stroke-width="7" stroke-linecap="round"/><circle cx="${cx}" cy="${py}" r="9" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
  const side = (x, yy, d, fill, edge) => {
    const top = yy + 40;
    const c = card(x - 180, top, 360, { title: d.title, body: d.items, bullets: true, size: 16, tsize: 19, pad: 16, fill, edge, gap: 4 });
    return { s: `<line x1="${x}" y1="${yy}" x2="${x}" y2="${top}" stroke="${C.ink}" stroke-width="3"/>` + c.s, bot: top + c.h };
  };
  const L = side(lx, ly, left, o.lfill || C.panel, o.ledge || C.panelEdge), R = side(rx, ry, right, o.rfill || C.cream, o.redge || C.olive);
  return { s: s + L.s + R.s, h: Math.max(L.bot, R.bot) - y };
}
// Converging factors: cards in a grid, arrows down into one outcome box.
function converge(y, items, outcome, o = {}) {
  const cols = o.cols ?? items.length;
  const g = grid(y, items, cols, { gap: 16, vgap: 16, card: { size: o.size ?? 16, tsize: o.tsize ?? 18, pad: 16, ...(o.card || {}) } });
  const oy = y + g.h + 64;
  const oc = card(150, oy, 600, { title: outcome.title, body: outcome.body, kicker: outcome.kicker, fill: C.mustard, edge: C.ink, kfill: C.ink, align: 'middle', size: 17, tsize: 21 });
  let s = g.s + oc.s;
  const n = Math.min(cols, items.length), w = (840 - 16 * (n - 1)) / n;
  for (let i = 0; i < n; i++) { const cx = 30 + i * (w + 16) + w / 2; s += arrow(cx, y + g.h + 6, n === 1 ? 450 : 300 + (i * 300) / (n - 1), oy - 6, { w: 3.5 }); }
  return { s, h: g.h + 64 + oc.h };
}
// Paired rows: left card, date pill in the middle, right card. rows [{d, l:{title,body}, r:{title,body}|null, key}]
function pairs(y, rows, o = {}) {
  const lw = o.lw ?? 360, mid = 450, pw = o.pw ?? 108;
  let s = T(30 + lw / 2, y + 16, o.lh || '', { size: 17, weight: 700, anchor: 'middle', fill: C.rust }) + T(870 - lw / 2, y + 16, o.rh || '', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  let cy = y + 30;
  const hs = rows.map((r) => Math.max(r.l ? card(0, 0, lw, { ...r.l, size: 15, tsize: 17, pad: 13 }).h : 0, r.r ? card(0, 0, lw, { ...r.r, size: 15, tsize: 17, pad: 13 }).h : 0, 50));
  const total = hs.reduce((a, h) => a + h + 12, -12);
  s += `<line x1="${mid}" y1="${cy}" x2="${mid}" y2="${cy + total}" stroke="${C.ink}" stroke-width="3"/>`;
  rows.forEach((r, i) => {
    const h = hs[i];
    if (r.l) s += card(30, cy, lw, { ...r.l, size: 15, tsize: 17, pad: 13, minH: h, vcenter: true, fill: r.key ? C.cream : r.l.fill || C.panel, edge: r.key ? C.olive : r.l.edge || C.rust }).s + `<line x1="${30 + lw}" y1="${cy + h / 2}" x2="${mid - pw / 2}" y2="${cy + h / 2}" stroke="${C.ink}" stroke-width="2"/>`;
    if (r.r) s += card(870 - lw, cy, lw, { ...r.r, size: 15, tsize: 17, pad: 13, minH: h, vcenter: true, fill: r.r.fill || C.tealLight, edge: r.r.edge || C.tealDark }).s + `<line x1="${mid + pw / 2}" y1="${cy + h / 2}" x2="${870 - lw}" y2="${cy + h / 2}" stroke="${C.ink}" stroke-width="2"/>`;
    s += `<rect x="${mid - pw / 2}" y="${cy + h / 2 - 17}" width="${pw}" height="34" rx="17" fill="${r.key ? C.mustard : C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + T(mid, cy + h / 2 + 6, r.d, { size: 15, weight: 700, anchor: 'middle' });
    cy += h + 12;
  });
  return { s, h: 30 + total };
}
// ---- end hist1 helpers ----

// ---- history helpers (hist9489) ----
// Horizontal timeline drawn to scale. a..b years; ticks every `step`. events [{v, d, label, side:'up'|'down', key}]
// sit in one label row above and one below the axis, spread apart with angled leaders; spans [{a,b,label}] form a
// strip of period bars under everything, on the same scale. Returns {s,h,sc}.
function htl(y, a, b, o = {}) {
  const x0 = o.x0 ?? 70, x1 = o.x1 ?? 830, sc = (v) => x0 + ((v - a) * (x1 - x0)) / (b - a);
  const spans = o.spans || [], step = o.step ?? 10, lsz = o.lsize ?? 16, EL = 20, LG = o.lg ?? 56;
  const evs = (o.events || []).map((e) => ({ ...e, lines: Array.isArray(e.label) ? e.label : [e.label] })).sort((p, q) => p.v - q.v);
  evs.forEach((e, i) => { e.side = e.side || (i % 2 ? 'down' : 'up'); e.w = Math.max(tw(e.d, 16, 700), ...e.lines.map((l) => tw(l, lsz))) + 12; e.h = (e.lines.length + 1) * EL + 4; });
  const place = (list) => {
    const g = o.hgap ?? 8, L = 30, R = 870;
    list.forEach((e) => { e.cx = Math.min(Math.max(sc(e.v), L + e.w / 2), R - e.w / 2); });
    for (let it = 0; it < 60; it++) {
      for (let i = 1; i < list.length; i++) { const need = list[i - 1].cx + (list[i - 1].w + list[i].w) / 2 + g; if (list[i].cx < need) list[i].cx = need; }
      if (list.length && list[list.length - 1].cx > R - list[list.length - 1].w / 2) list[list.length - 1].cx = R - list[list.length - 1].w / 2;
      for (let i = list.length - 2; i >= 0; i--) { const need = list[i + 1].cx - (list[i + 1].w + list[i].w) / 2 - g; if (list[i].cx > need) list[i].cx = need; }
      if (list.length && list[0].cx < L + list[0].w / 2) list[0].cx = L + list[0].w / 2;
    }
    const tot = list.reduce((s2, e) => s2 + e.w + g, -g); if (tot > 840) WARN.push(`htl: labels too wide (${tot.toFixed(0)})`);
  };
  const up = evs.filter((e) => e.side === 'up'), dn = evs.filter((e) => e.side === 'down');
  place(up); place(dn);
  const upH = up.length ? Math.max(...up.map((e) => e.h)) : 0;
  const axisY = y + 26 + (up.length ? upH + LG : 14);
  let s = '', g2 = '';
  const dnH = dn.length ? Math.max(...dn.map((e) => e.h)) : 0;
  const dnTop = axisY + LG, stripTop = dn.length ? dnTop + dnH + 18 : axisY + 24;
  const SH = 34, SG = 8, sl = [];
  const spanLane = spans.map((sp) => { const L2 = sp.lane ?? (() => { let k = 0; while ((sl[k] || []).some(([p, q]) => !(sc(sp.b) + 4 < p || sc(sp.a) - 4 > q))) k++; return k; })(); (sl[L2] = sl[L2] || []).push([sc(sp.a), sc(sp.b)]); return L2; });
  const nS = spans.length ? Math.max(...spanLane) + 1 : 0, bottom = nS ? stripTop + nS * (SH + SG) - SG : (dn.length ? dnTop + dnH : axisY + 14);
  const tks = o.ticks || (() => { const r = []; for (let v = Math.ceil(a / step) * step; v <= b; v += step) r.push({ v, label: String(v) }); return r; })();
  for (const { v, label: tlab } of tks) {
    g2 += `<line x1="${sc(v)}" y1="${y + 24}" x2="${sc(v)}" y2="${bottom}" stroke="${C.panelEdge}" stroke-width="1.5"/>` + T(sc(v), y + 14, tlab, { size: 15, weight: 700, anchor: 'middle', fill: C.muted });
  }
  if (o.bands) o.bands.forEach((bd) => { g2 += `<rect x="${sc(bd.a)}" y="${y + 24}" width="${Math.max(4, sc(bd.b) - sc(bd.a))}" height="${bottom - y - 24}" fill="${bd.fill || C.cream}" opacity="${bd.op ?? 0.6}"/>`; });
  spans.forEach((sp, i) => {
    const yy = stripTop + spanLane[i] * (SH + SG), w = Math.max(8, sc(sp.b) - sc(sp.a));
    s += `<rect x="${sc(sp.a)}" y="${yy}" width="${w}" height="${SH}" rx="8" fill="${sp.fill || C.tealLight}" stroke="${sp.edge || C.tealDark}" stroke-width="2.5"/>`;
    const lw = tw(sp.label, lsz, 700);
    if (lw + 16 <= w) s += T(sc(sp.a) + w / 2, yy + SH / 2 + lsz * 0.36, sp.label, { size: lsz, weight: 700, anchor: 'middle', fill: sp.ink || C.ink });
    else { const right = sc(sp.b) + 8 + lw < 870; if (!right && sc(sp.a) - 8 - lw < 30) WARN.push(`htl span label too wide: ${sp.label}`); s += T(right ? sc(sp.b) + 8 : sc(sp.a) - 8, yy + SH / 2 + lsz * 0.36, sp.label, { size: lsz, weight: 700, anchor: right ? 'start' : 'end', fill: sp.ink || C.ink }); }
  });
  s += `<line x1="${x0 - 20}" y1="${axisY}" x2="${x1 + 20}" y2="${axisY}" stroke="${C.ink}" stroke-width="4" stroke-linecap="round"/>`;
  const lab = (e, top) => {
    let r = '';
    const dir = e.side === 'up' ? -1 : 1, px = sc(e.v), elbow = axisY + dir * 16, end = e.side === 'up' ? top + e.h + 2 : top - 2;
    r += path(`M${px},${axisY} L${px},${elbow} L${e.cx},${end}`, { w: 2 });
    const ty = top;
    r += `<rect x="${e.cx - e.w / 2}" y="${top}" width="${e.w}" height="${e.h}" fill="${C.bg}"/>`;
    r += T(e.cx, ty + 15, e.d, { size: 16, weight: 700, anchor: 'middle', fill: e.key ? C.rust : C.ink });
    e.lines.forEach((l, k) => { r += T(e.cx, ty + 15 + (k + 1) * EL, l, { size: lsz, anchor: 'middle', fill: C.ink }); });
    return r;
  };
  up.forEach((e) => { s += lab(e, axisY - LG - e.h); });
  dn.forEach((e) => { s += lab(e, dnTop); });
  evs.forEach((e) => { s += `<circle cx="${sc(e.v)}" cy="${axisY}" r="8" fill="${e.key ? C.mustard : C.teal}" stroke="${C.ink}" stroke-width="3"/>`; });
  return { s: g2 + s, h: bottom - y + 4, sc, axisY };
}
// Vertical timeline drawn to scale with a central spine: events [{v, d, label, side:'left'|'right', key}].
// Year labels sit in the left margin with faint gridlines; labels are relaxed vertically to avoid overlap. Returns {s,h}.
function vscale(y, a, b, o = {}) {
  const ppy = o.ppy ?? 60, top = y + 14 + (o.lh || o.rh ? 30 : 0), sc = (v) => top + (v - a) * ppy, AX = o.ax ?? 470, sz = o.size ?? 16, step = o.step ?? 1;
  const LW = o.lw ?? AX - 140 - 30, RW = o.rw ?? 870 - AX - 40, EL = Math.round(sz * 1.3);
  const evs = (o.events || []).map((e) => {
    const w = e.side === 'left' ? LW : RW;
    const p = para(0, 0, e.label, w, { size: sz });
    return { ...e, h: EL + p.h + 2, w };
  }).sort((p, q) => p.v - q.v);
  const relax = (list) => {
    const g = o.vgap ?? 8;
    list.forEach((e) => { e.top = sc(e.v) - EL * 0.6; });
    for (let it = 0; it < 60; it++) {
      for (let i = 1; i < list.length; i++) { const need = list[i - 1].top + list[i - 1].h + g; if (list[i].top < need) list[i].top = need; }
      for (let i = list.length - 2; i >= 0; i--) { const need = list[i + 1].top - list[i].h - g; if (list[i].top > need) list[i].top = Math.max(need, top - EL); }
    }
  };
  const L = evs.filter((e) => e.side === 'left'), R = evs.filter((e) => e.side !== 'left');
  relax(L); relax(R);
  const bottom = Math.max(sc(b), ...evs.map((e) => e.top + e.h));
  let g = '', s = '';
  const ticks = o.ticks || (() => { const r = []; for (let v = a; v <= b + 1e-9; v += step) r.push({ v, label: String(v) }); return r; })();
  ticks.forEach((k) => { g += `<line x1="${o.gx ?? 96}" y1="${sc(k.v)}" x2="870" y2="${sc(k.v)}" stroke="${C.panelEdge}" stroke-width="1.2"/>` + T(30, sc(k.v) + 6, k.label, { size: 15, weight: 700, fill: C.muted }); });
  if (o.bands) o.bands.forEach((bd) => { g += `<rect x="${AX - 10}" y="${sc(bd.a)}" width="20" height="${sc(bd.b) - sc(bd.a)}" rx="6" fill="${bd.fill || C.mustard}" stroke="${C.ink}" stroke-width="2"/>`; });
  s += `<line x1="${AX}" y1="${sc(a)}" x2="${AX}" y2="${sc(b)}" stroke="${C.ink}" stroke-width="4" stroke-linecap="round"/>`;
  if (o.lh) s += T(AX - 40, y + 14, o.lh, { size: 15, weight: 700, anchor: 'end', fill: o.lfill || C.rust });
  if (o.rh) s += T(AX + 40, y + 14, o.rh, { size: 15, weight: 700, fill: o.rfill || C.tealDark });
  evs.forEach((e) => {
    const left = e.side === 'left', py = sc(e.v), my = e.top + EL * 0.6, ex = left ? AX - 34 : AX + 34;
    s += path(`M${AX},${py} L${left ? AX - 16 : AX + 16},${py} L${ex},${my}`, { w: 2 });
    const tx = left ? AX - 40 : AX + 40, anchor = left ? 'end' : 'start';
    const p = para(left ? tx - e.w : tx, e.top + EL * 0.8 + EL, e.label, e.w, { size: sz });
    const bw = Math.max(p.w, tw(e.d, sz, 700)) + 10;
    s += `<rect x="${left ? tx - bw + 5 : tx - 5}" y="${e.top - 2}" width="${bw}" height="${e.h + 2}" fill="${C.bg}"/>`;
    s += T(tx, e.top + EL * 0.8, e.d, { size: sz, weight: 700, anchor, fill: e.key ? C.rust : C.ink });
    s += left ? para(tx, e.top + EL * 0.8 + EL, e.label, e.w, { size: sz, anchor: 'end' }).s : p.s;
  });
  evs.forEach((e) => { s += `<circle cx="${AX}" cy="${sc(e.v)}" r="7" fill="${e.key ? C.mustard : C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`; });
  return { s: g + s, h: bottom - y + 6 };
}
// Clip the segment between two box centres to the box edges (boxes {x,y,w,h}); returns [x1,y1,x2,y2].
function edgeLine(A, B, pad = 8) {
  const ca = [A.x + A.w / 2, A.y + A.h / 2], cb = [B.x + B.w / 2, B.y + B.h / 2], dx = cb[0] - ca[0], dy = cb[1] - ca[1];
  const k = (bx) => { const tx = dx ? (bx.w / 2 + pad) / Math.abs(dx) : Infinity, ty = dy ? (bx.h / 2 + pad) / Math.abs(dy) : Infinity; return Math.min(tx, ty); };
  const ka = k(A), kb = k(B);
  return [ca[0] + dx * ka, ca[1] + dy * ka, cb[0] - dx * kb, cb[1] - dy * kb];
}
// Cycle: cards placed at given centres [{cx, cy, w, title, body, fill, edge}], arrows i -> i+1 (closed unless o.open).
// o.labels: optional text on each arrow; o.broken: index of an arrow drawn dashed rust with a break mark. Returns {s,h}.
function cycle(y, nodes, o = {}) {
  const boxes = nodes.map((n) => { const c = card(0, 0, n.w ?? 240, { size: 16, tsize: 18, pad: 14, align: 'middle', ...n }); return { x: n.cx - (n.w ?? 240) / 2, y: y + n.cy - c.h / 2, w: n.w ?? 240, h: c.h, n }; });
  let s = '', lab = '';
  const N = nodes.length, M = o.open ? N - 1 : N;
  for (let i = 0; i < M; i++) {
    const A = boxes[i], B = boxes[(i + 1) % N], [x1, y1, x2, y2] = edgeLine(A, B, 10);
    const br = o.broken === i;
    s += arrow(x1, y1, x2, y2, { w: 4, color: br ? C.rust : C.ink, marker: br ? 'ahR' : 'ah', dash: br ? '12 8' : '' });
    const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
    if (br) s += `<circle cx="${mx}" cy="${my}" r="17" fill="${C.panel}" stroke="${C.rust}" stroke-width="3"/>` + path(`M${mx - 8},${my - 8} L${mx + 8},${my + 8} M${mx + 8},${my - 8} L${mx - 8},${my + 8}`, { stroke: C.rust, w: 3.5 });
    const L = (o.labels || [])[i];
    if (L) {
      const [lx, ly, anc] = L.at ? [L.at[0], y + L.at[1], L.at[2] || 'middle'] : [mx + (L.dx ?? 0), my + (L.dy ?? 0), L.anchor || 'middle'];
      const lines = Array.isArray(L.text) ? L.text : [L.text];
      lines.forEach((t2, k) => { const w2 = tw(t2, 16, 700); const bx = anc === 'middle' ? lx - w2 / 2 : anc === 'end' ? lx - w2 : lx; lab += `<rect x="${bx - 4}" y="${ly - 16 + k * 21}" width="${w2 + 8}" height="21" fill="${C.bg}"/>` + T(lx, ly + k * 21, t2, { size: 16, weight: 700, anchor: anc, fill: br ? C.rust : C.tealDark }); });
    }
  }
  boxes.forEach((b) => { s += card(b.x, b.y, b.w, { size: 16, tsize: 18, pad: 14, align: 'middle', ...b.n }).s; });
  const H = Math.max(...boxes.map((b) => b.y + b.h)) - y;
  return { s: s + lab, h: o.h ?? H };
}
// Fractional year from year, month, day.
const md = (yy, m, d = 1) => yy + (m - 1 + (d - 1) / 30.5) / 12;
// Chain of cards (cause -> event -> consequence) left to right; items [{kicker,title,body,fill,edge}]
const chain = (y, items, o = {}) => row(y, items, { arrows: true, gap: o.gap ?? 40, card: { size: o.size ?? 16, tsize: o.tsize ?? 18, pad: o.pad ?? 15, ...(o.card || {}) }, ...o });
// Two-column header labels block
const heads = (labels, o = {}) => (y) => { const n = labels.length, w = (840 - (n - 1) * (o.gap ?? 18)) / n; return { s: labels.map((l, i) => T(30 + i * (w + (o.gap ?? 18)) + w / 2, y + 16, l, { size: 18, weight: 700, anchor: 'middle', fill: (o.fills || [])[i] || C.ink })).join(''), h: 18 }; };
// ---- end hist9489 helpers ----

const H2 = {
  p3: '## What Paper 3 asks',
  tension: '### Was tension between the Great Powers likely to lead to war?',
  indiv: '### How important were the decisions of key individuals?',
  fischer: '### The Fischer thesis',
  chall: '### Challenges to Fischer',
  modern: '### Modern interpretations of other nations\' responsibility',
  longshort: '### Long-term and short-term factors',
  we: '## Worked example: annotating an extract',
};

// 01 Interpretation and approach
F('01-interpretation-approach', 'What Paper 3 asks you to find', 'One unattributed extract, one question, 40 marks', [
  (y) => row(y, [
    { kicker: 'INTERPRETATION', title: 'What the historian claims', body: 'The claims and conclusions you can infer from the extract, treated as a whole', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'APPROACH', title: 'What the historian brings', body: 'Their interests, questions, ideology and beliefs', fill: C.cream, edge: C.olive },
  ], { gap: 18, card: { size: 16, tsize: 20 } }),
  (y) => segbar(y, [{ label: 'AO4: interpretations', sub: '20 marks', frac: 1, fill: C.teal }, { label: 'AO1: knowledge', sub: '20 marks', frac: 1, fill: C.cream }], { h: 66, size: 18 }),
  (y) => card(30, y, 840, { kicker: 'TEST AGAINST THE CONTEXT, c.1890-1914', body: 'Great Power tensions, the alliance system, militarism, the arms race, Balkan instability, war plans, Sarajevo and the July crisis, mobilisation and declarations of war', size: 16 }),
  (y) => note(y, 'As a whole', ['Not a string of sub-messages: state the overall interpretation first.'], { size: 17, align: 'middle' }),
],
'Two cards define interpretation (the claims and conclusions inferred from the extract as a whole) and approach (the historian\'s interests, questions, ideology and beliefs). A bar splits the 40 marks equally between AO4 and AO1. Below, the c.1890-1914 context to test extracts against.',
'Find the claim and what the historian brings to it; marks are split evenly.', H2.p3);

// 02 Structure or decisions
F('02-structure-or-decisions', 'Structure or decisions?', 'Long-term causes against choices in July', [
  (y) => row(y, [
    { kicker: 'STRUCTURAL: WAR WAS PROBABLE', title: 'The system', body: ['Alliances: Triple Alliance (1882), Franco-Russian (1894), Ententes (1904, 1907)', 'Naval race; army laws of 1912-13', 'Lenin (1916): capitalist competition', 'Joll: "unspoken assumptions"', 'Taylor: mobilisation timetables'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'DECISIONS: WAR WAS CHOSEN', title: 'The July crisis', body: ['Wilhelm II, Bethmann Hollweg, Moltke', 'Berchtold and Conrad', 'Sazonov and Nicholas II', 'Poincaré; Grey', 'What did each know, fear and intend?'], bullets: true, fill: C.cream, edge: C.olive },
  ], { gap: 18, card: { size: 16, tsize: 19, gap: 4 } }),
  (y) => card(30, y, 840, { kicker: 'CRITICS OF STRUCTURE', kfill: C.rust, title: 'If war was inevitable, why did the system hold until 1914?', body: 'Anglo-German relations had improved; the powers contained the Balkan Wars of 1912-13; earlier crises passed without war', size: 16, tsize: 18, fill: C.panel, edge: C.rust }),
  (y) => note(y, 'A quick route to approach', ['An extract stressing structure plays down individual choice; one stressing détente before 1914 leads towards decisions in July.'], { size: 17 }),
],
'Two columns. Structural explanations: the alliances of 1882, 1894, 1904 and 1907, the naval race and army laws, Lenin, Joll\'s unspoken assumptions and Taylor\'s timetables. Decision-centred explanations: the leaders in Berlin, Vienna, St Petersburg, Paris and London. Below, the critics\' question: if war was inevitable, why did the system hold until 1914?',
'Which an extract favours, structure or choice, is often the key to its approach.', H2.tension);

// 03 July crisis to scale
F('03-july-crisis', 'The July crisis, day by day', 'Drawn to scale, 1 July to 5 August 1914', [
  (y) => htl(y, 1, 36, {
    x0: 70, x1: 830, lg: 52,
    ticks: [[1, '1 Jul'], [8, '8'], [15, '15'], [22, '22'], [29, '29'], [32, '1 Aug'], [36, '5']].map(([v, l]) => ({ v, label: l })),
    events: [
      { v: 5.5, d: '5-6 July', label: ['German "blank', 'cheque" to Vienna'], side: 'up', key: true },
      { v: 23, d: '23 July', label: ['Austrian ultimatum', 'to Serbia'], side: 'down', key: true },
      { v: 30, d: '30 July', label: ['Russian general', 'mobilisation'], side: 'up', key: true },
      { v: 32, d: '1 August', label: ['Germany declares', 'war on Russia'], side: 'down' },
      { v: 34, d: '3 August', label: ['...and on', 'France'], side: 'up' },
      { v: 35, d: '4 August', label: ['Belgium invaded;', 'Britain enters'], side: 'down', key: true },
    ],
  }),
  (y) => note(y, 'Read the gaps', ['Seventeen days pass between the blank cheque and the ultimatum; after Russian mobilisation, the general war comes in five days.'], { size: 17 }),
],
'A day-scale timeline from 1 July to 5 August 1914: the German blank cheque (5-6 July), the Austrian ultimatum to Serbia (23 July), Russian general mobilisation (30 July), German declarations of war on Russia (1 August) and France (3 August), and the invasion of Belgium that brought in Britain (4 August).',
'A slow start, then a general war within days of Russian mobilisation.', H2.indiv);

// 04 How the debate moved
F('04-debate-timeline', 'How the debate moved, 1919-2014', 'Drawn to scale: Germany\'s guilt on the left, wider blame on the right', [
  (y) => vscale(y, 1915, 2015, {
    ppy: 9.5, ticks: [1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010].map((v) => ({ v, label: String(v) })), lh: 'GERMANY MAINLY TO BLAME', rh: 'SHARED OR ELSEWHERE', lw: 300, rw: 340, ax: 470,
    events: [
      { v: 1919, d: '1919', label: 'Article 231: Germany accepts responsibility', side: 'left', key: true },
      { v: 1922, d: '1922-27', label: 'German Foreign Office documents (Die Grosse Politik)', side: 'right' },
      { v: 1926, d: '1926-28', label: 'Barnes blames France and Russia; Fay spreads blame', side: 'right' },
      { v: 1951, d: '1951', label: 'French and German historians: no one government wished for war', side: 'right' },
      { v: 1961, d: '1961', label: 'Fischer: Griff nach der Weltmacht', side: 'left', key: true },
      { v: 1964, d: '1964', label: 'Historians\' congress: the Fischer controversy', side: 'right' },
      { v: 1969, d: '1969', label: 'Fischer: War of Illusions', side: 'left' },
      { v: 1998, d: '1998', label: 'Ferguson: Britain\'s entry made it a world war', side: 'right' },
      { v: 2011, d: '2011-12', label: 'McMeekin (Russia); Clark: The Sleepwalkers', side: 'right', key: true },
      { v: 2013, d: '2013', label: 'Hastings: Berlin and Vienna', side: 'left' },
      { v: 2013.1, d: '2013', label: 'MacMillan: the choices of a few leaders', side: 'right' },
    ],
  }),
],
'A vertical timeline from 1915 to 2015 drawn to scale. Left, views stressing German responsibility: Article 231 (1919), Fischer (1961, 1969) and Hastings (2013). Right, wider blame: the German document collections (1922-27), Barnes and Fay (1926-28), the 1951 Franco-German agreement, the 1964 controversy, Ferguson (1998), McMeekin and Clark (2011-12) and MacMillan (2013).',
'The debate swung from German guilt to shared blame, back to Germany, then outwards again.', H2.fischer);

// 05 Fischer: evidence and challenges
F('05-fischer-evidence', 'Testing the Fischer thesis', 'His evidence, and his critics\' objections', [
  (y) => {
    const a = card(30, y, 410, { kicker: 'FISCHER\'S EVIDENCE', title: 'Germany sought war', body: ['Government files, including in East Germany', 'September Programme (1914): annexations, German-dominated central Europe', 'War Council, December 1912', 'Domestic pressure: the rising Social Democrats'], bullets: true, size: 16, tsize: 19, gap: 5, fill: C.tealLight, edge: C.tealDark });
    const b = card(460, y, 410, { kicker: 'THE OBJECTIONS', kfill: C.rust, title: 'Not proven', body: ['Aims drawn up after war began do not prove earlier intent (Ritter)', 'Other powers\' decisions studied little', 'The War Council led to no immediate plan', 'Zuber: was there a fixed Schlieffen Plan?'], bullets: true, size: 16, tsize: 19, gap: 5, fill: C.panel, edge: C.rust, minH: a.h });
    return { s: a.s + b.s, h: Math.max(a.h, b.h) };
  },
  (y) => row(y, [
    { kicker: 'MIDDLE POSITION', title: 'Hillgruber', body: 'A "calculated risk": a localised war hoped for, a wider one accepted' },
    { kicker: 'REINFORCED', title: 'Röhl, Mombauer', body: 'Sources on the Kaiser and Moltke add weight to German decisions' },
  ], { gap: 18, card: { size: 16, tsize: 18, fill: C.cream, edge: C.olive } }),
],
'Two columns. Fischer\'s evidence: government files, the September Programme (1914), the War Council of December 1912 and domestic pressure from the Social Democrats. Objections: aims written after war began, a narrow German focus, no plan from the War Council, and Zuber\'s doubts about the Schlieffen Plan. Below, Hillgruber\'s calculated risk and Röhl and Mombauer\'s reinforcement.',
'Fischer\'s case rests on aims and archives; critics question what they prove about July.', H2.chall);

// 06 Where blame falls
F('06-where-blame-falls', 'Where historians place the blame', 'One question, many answers', [
  (y) => hub(y, ['Who or what', 'was to blame?'], [
    { title: 'Germany', body: 'Fischer; Röhl; Mombauer; Hastings (with Vienna)' },
    { title: 'Austria-Hungary', body: 'Williamson: its own decision for war' },
    { title: 'Russia', body: 'McMeekin (2011); Barnes, with France (1926)' },
  ], [
    { title: 'Britain', body: 'Ferguson (1998): entry made it a world war' },
    { title: 'Shared', body: 'Fay (1928); Lloyd George: "slithered"; Clark (2012)' },
    { title: 'The system or chance', body: 'Lenin; Joll; Taylor; Lebow\'s counterfactuals' },
  ], { cardW: 280, r: 96, csize: 20 }),
],
'A hub with the question "Who or what was to blame?" at the centre. Left: Germany (Fischer, Röhl, Mombauer, Hastings), Austria-Hungary (Williamson) and Russia (McMeekin; Barnes, with France). Right: Britain (Ferguson), shared responsibility (Fay, Lloyd George, Clark) and the system or chance (Lenin, Joll, Taylor, Lebow).',
'Since the 1990s historians have looked at every capital, not only Berlin.', H2.modern);

// 07 Annotating an extract
F('07-annotated-extract', 'Annotating an extract', 'A constructed sentence, read for interpretation and approach', [
  (y) => {
    const p = passage(50, y + 14, [
      [['"', ''], ['No capital wanted the war that came', 'key', 'a'], [', but', '']],
      [['every capital made choices in July', 'hl', 'b'], [' that only made', '']],
      [['sense if war was thinkable."', '']],
    ], { size: 22, lh: 44 });
    return { s: panel(30, y, 840, p.h + 40) + p.s, h: p.h + 40 };
  },
  (y) => row(y, [
    { kicker: 'INTERPRETATION', title: 'Shared responsibility', body: 'Through choices, not plans', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'APPROACH', title: 'Multi-capital, decision-centred', body: 'The July crisis; close to Clark', fill: C.cream, edge: C.olive },
  ], { gap: 18, card: { size: 16, tsize: 18 } }),
  (y) => row(y, [
    { kicker: 'SUPPORT', title: 'Choices everywhere', body: 'Russian mobilisation (30 July); the Austrian ultimatum' },
    { kicker: 'CHALLENGE', kfill: C.rust, title: 'Berlin pushed', body: 'The blank cheque and pressure on Vienna to act quickly (Fischer, Röhl)', edge: C.rust },
  ], { gap: 18, card: { size: 16, tsize: 18 } }),
],
'A constructed sentence with two phrases highlighted: "No capital wanted the war that came" and "every capital made choices in July". Below, the interpretation (shared responsibility through choices), the approach (multi-capital and decision-centred, close to Clark), supporting knowledge (Russian mobilisation, the ultimatum) and challenging knowledge (the blank cheque and German pressure on Vienna).',
'Name the claim, the approach, then test both with July 1914 knowledge.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
