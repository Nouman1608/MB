import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-world-history-9489-civil-war-reconstruction';

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
  for (let v = Math.ceil(a / step) * step; v <= b; v += step) {
    g2 += `<line x1="${sc(v)}" y1="${y + 24}" x2="${sc(v)}" y2="${bottom}" stroke="${C.panelEdge}" stroke-width="1.5"/>` + T(sc(v), y + 14, String(v), { size: 15, weight: 700, anchor: 'middle', fill: C.muted });
  }
  if (o.bands) o.bands.forEach((bd) => { g2 += `<rect x="${sc(bd.a)}" y="${y + 24}" width="${Math.max(4, sc(bd.b) - sc(bd.a))}" height="${bottom - y - 24}" fill="${bd.fill || C.cream}" opacity="${bd.op ?? 0.6}"/>`; });
  spans.forEach((sp, i) => {
    const yy = stripTop + spanLane[i] * (SH + SG), w = Math.max(8, sc(sp.b) - sc(sp.a));
    s += `<rect x="${sc(sp.a)}" y="${yy}" width="${w}" height="${SH}" rx="8" fill="${sp.fill || C.tealLight}" stroke="${sp.edge || C.tealDark}" stroke-width="2.5"/>`;
    const lw = tw(sp.label, lsz, 700);
    if (lw + 16 <= w) s += T(sc(sp.a) + w / 2, yy + SH / 2 + lsz * 0.36, sp.label, { size: lsz, weight: 700, anchor: 'middle', fill: sp.ink || C.ink });
    else { const right = sc(sp.b) + 8 + lw < 870; s += T(right ? sc(sp.b) + 8 : sc(sp.a) - 8, yy + SH / 2 + lsz * 0.36, sp.label, { size: lsz, weight: 700, anchor: right ? 'start' : 'end', fill: sp.ink || C.ink }); }
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
// Chain of cards (cause -> event -> consequence) left to right; items [{kicker,title,body,fill,edge}]
const chain = (y, items, o = {}) => row(y, items, { arrows: true, gap: o.gap ?? 40, card: { size: o.size ?? 16, tsize: o.tsize ?? 18, pad: o.pad ?? 15, ...(o.card || {}) }, ...o });
// Two-column header labels block
const heads = (labels, o = {}) => (y) => { const n = labels.length, w = (840 - (n - 1) * (o.gap ?? 18)) / n; return { s: labels.map((l, i) => T(30 + i * (w + (o.gap ?? 18)) + w / 2, y + 16, l, { size: 18, weight: 700, anchor: 'middle', fill: (o.fills || [])[i] || C.ink })).join(''), h: 18 }; };
// ---- end hist9489 helpers ----

const H2 = {
  t41: '## 4.1 Why did tension grow between North and South before 1860?',
  t42: '## 4.2 Why did war break out in April 1861?',
  t43: '## 4.3 Why did the Civil War last four years?',
  t44: '## 4.4 What were the aims of Reconstruction and how successful was it?',
  we: '## Worked example: a Paper 2 part (b)',
};

// 01 Sectional crises to scale
F('01-sectional-crises-timeline', 'Forty years of sectional crises', 'Drawn to scale, 1820-1860', [
  (y) => htl(y, 1820, 1860, {
    step: 5, x0: 70, x1: 830,
    spans: [
      { a: 1832, b: 1833, label: 'Nullification crisis', fill: C.cream, edge: C.olive },
      { a: 1846, b: 1848, label: 'Mexican War', fill: C.cream, edge: C.olive },
    ],
    events: [
      { v: 1820, d: '1820', label: ['Missouri', 'Compromise'], key: true },
      { v: 1828, d: '1828', label: ['"Tariff of', 'Abominations"'] },
      { v: 1845, d: '1845', label: ['Texas', 'annexed'] },
      { v: 1846, d: '1846', label: ['Wilmot', 'Proviso'] },
      { v: 1848, d: '1848', label: ['Free Soil', 'Party'] },
      { v: 1850, d: '1850', label: ['Compromise', 'of 1850'], key: true },
      { v: 1854, d: '1854', label: ['Kansas-Nebraska', 'Act; Republicans'], key: true },
      { v: 1856, d: '1856', label: ['Brooks beats', 'Sumner'] },
      { v: 1857, d: '1857', label: ['Dred Scott;', 'Lecompton'] },
      { v: 1858, d: '1858', label: ['Lincoln-Douglas', 'debates'] },
      { v: 1859, d: '1859', label: ['John Brown at', 'Harpers Ferry'] },
    ],
  }),
  (y) => note(y, 'The gaps shrink', ['Thirty years separate the Missouri Compromise and 1850; after 1854 a new crisis came almost every year, and each one was about slavery in new land.'], { size: 17 }),
],
'A timeline from 1820 to 1860 drawn to scale. Early events are spread out: the Missouri Compromise (1820), the 1828 tariff and the nullification crisis (1832-33). From 1845 they crowd together: Texas, the Wilmot Proviso, the Mexican War, the Free Soil Party, the Compromise of 1850, the Kansas-Nebraska Act, the Brooks-Sumner attack, Dred Scott, Lecompton, the Lincoln-Douglas debates and John Brown\'s raid.',
'Crises came faster after 1845, and almost all were about slavery in new land.', H2.t41);

// 02 How each settlement answered the territorial question
F('02-territorial-question', 'Slavery in the territories: four answers', 'Each settlement reopened the question it tried to close', [
  (y) => table(y, [
    { w: 0.9, head: 'Measure' }, { w: 1.55, head: 'What it decided' }, { w: 1.35, head: 'Why it raised tension', hfill: C.cream },
  ], [
    ['Missouri Compromise (1820)', 'Missouri slave, Maine free; no slavery in the rest of the Louisiana Purchase north of 36°30′', 'Kept the Senate balanced, but made every later territorial question a question about slavery'],
    ['Compromise of 1850', 'California free; popular sovereignty in Utah and New Mexico; tougher Fugitive Slave Act', 'Brought slavery into Northern towns; Northern states passed personal liberty laws'],
    ['Kansas-Nebraska Act (1854)', 'Popular sovereignty in land closed to slavery since 1820', 'Effectively repealed the Missouri line; "Bleeding Kansas"'],
    ['Dred Scott v. Sandford (1857)', 'Congress could not ban slavery in the territories', 'Republicans saw a "slave power" conspiracy; Southerners saw their rights confirmed'],
  ], { size: 16, hsize: 18 }),
  (y) => ({ s: arrow(450, y - 4, 450, y + 30, { w: 4 }), h: 30 }),
  (y) => card(150, y, 600, { title: 'From a fixed line to no limit at all', body: 'By 1857 the Missouri line was gone and Congress had lost the power to draw one.', fill: C.mustard, edge: C.ink, align: 'middle', size: 17, tsize: 20, bfill: C.ink }),
],
'A table of four measures. The Missouri Compromise (1820) drew a line at 36°30′. The Compromise of 1850 used popular sovereignty in Utah and New Mexico and passed a tougher Fugitive Slave Act. The Kansas-Nebraska Act (1854) applied popular sovereignty north of the old line. Dred Scott (1857) ruled that Congress could not ban slavery in the territories.',
'Each answer to the territorial question made the next crisis worse.', H2.t41);

// 03 Secession in two stages
F('03-secession-two-stages', 'Secession in two stages', 'From Lincoln\'s election to Fort Sumter', [
  (y) => card(30, y, 840, { kicker: 'ELECTION OF 1860: A SPLIT FIELD', body: ['**Lincoln** (Republican): about 40 per cent of the popular vote, a clear electoral college majority, no Southern electoral votes', '**Douglas** (Northern Democrat) · **Breckinridge** (Southern Democrat) · **Bell** (Constitutional Union)'], size: 17, gap: 8 }),
  (y) => ({ s: arrow(227, y - 16, 227, y + 18, { w: 4 }), h: 2 }),
  (y) => {
    const a = stack(y, [
      { kicker: 'STAGE 1', title: 'South Carolina, December 1860', body: 'By February 1861: seven Deep South states form the Confederacy under Jefferson Davis', fill: C.cream, edge: C.olive },
      { title: 'Compromise fails', body: 'Crittenden proposals: Lincoln would not accept slavery\'s expansion' },
    ], { arrows: true, x: 30, w: 395, gap: 40, card: { size: 16, tsize: 18, pad: 16 } });
    const b = stack(y, [
      { kicker: 'TRIGGER', title: 'Fort Sumter, 12 April 1861', body: 'Confederate forces fire on the fort; Lincoln calls for volunteers', fill: C.panel, edge: C.rust, tfill: C.rust },
      { kicker: 'STAGE 2', title: 'Four Upper South states', body: 'Virginia, Arkansas, Tennessee and North Carolina secede rather than supply troops', fill: C.cream, edge: C.olive },
    ], { arrows: true, x: 475, w: 395, gap: 40, card: { size: 16, tsize: 18, pad: 16 } });
    const c1 = card(0, 0, 395, { title: 'South Carolina, December 1860', kicker: 'STAGE 1', body: 'By February 1861: seven Deep South states form the Confederacy under Jefferson Davis', size: 16, tsize: 18, pad: 16 }).h;
    const c2 = card(0, 0, 395, { title: 'Compromise fails', body: 'Crittenden proposals: Lincoln would not accept slavery\'s expansion', size: 16, tsize: 18, pad: 16 }).h;
    const ym = y + c1 + 40 + c2 / 2, ys = y + 50;
    const link2 = path(`M427,${ym} L450,${ym} L450,${ys} L466,${ys}`, { w: 3.5, extra: 'marker-end="url(#ah)"' });
    return { s: a.s + b.s + link2, h: Math.max(a.h, b.h) };
  },
  (y) => card(30, y, 840, { kicker: 'STAYED IN THE UNION', title: 'Border States: Delaware, Maryland, Kentucky, Missouri', body: 'Lincoln kept them partly by moving cautiously on slavery.', fill: C.tealLight, edge: C.tealDark, size: 16, tsize: 19 }),
],
'Lincoln won the 1860 election with about 40 per cent of the vote and no Southern electoral votes against a split field. Stage 1: South Carolina seceded in December 1860 and seven Deep South states formed the Confederacy by February 1861. After Fort Sumter on 12 April 1861 and Lincoln\'s call for volunteers, stage 2 followed: Virginia, Arkansas, Tennessee and North Carolina seceded. The four Border States stayed in the Union.',
'The Deep South left over Lincoln\'s election; the Upper South left over the call for troops.', H2.t42);

// 04 Why four years
F('04-why-four-years', 'Why did the war last four years?', 'What slowed the Union, and what finally told', [
  (y) => table(y, [
    { w: 0.62, head: 'Factor' }, { w: 1.3, head: 'Why victory took time', hfill: C.cream }, { w: 1.3, head: 'What favoured the Union', hfill: C.teal },
  ], [
    ['Strategy', 'The Confederacy only had to survive and fought mainly on the defensive', 'Anaconda Plan: blockade the ports and take the Mississippi, but slow to work'],
    ['Generals', 'Lee and Jackson outfought a series of Union commanders in the east', 'Grant took Vicksburg (July 1863); Sherman took Atlanta (September 1864); Grant general-in-chief in 1864'],
    ['Resources', 'A defender needs fewer resources; Northern advantages took time to mobilise', 'Larger population, most of the industry, denser railways'],
    ['Politics and money', 'Lincoln moved cautiously on slavery to keep the Border States; conscription brought the New York draft riots', 'Border States kept; income tax, greenbacks and bonds, while the Confederacy printed money and Davis faced resistant governors'],
    ['Emancipation', 'Not until September 1862 (effective January 1863), and only in areas still in rebellion', 'A war against slavery; about 180,000 Black soldiers; harder for Britain to back the South'],
    ['Foreign powers', 'Southern hopes of "King Cotton" diplomacy; France sympathetic to the South', 'Britain neutral (stockpiles, other sources; Trent affair resolved); Russia friendly to the Union'],
  ], { size: 16, hsize: 18 }),
  (y) => note(y, 'Avoid the one-factor answer', ['Resources explain who won; strategy and leadership explain why it took four years.'], { size: 17, align: 'middle' }),
],
'A table of six factors. For each, one column shows why the war dragged on, such as the Confederacy fighting defensively and Lee and Jackson\'s success in the east, and another shows what favoured the Union, such as Grant\'s and Sherman\'s western victories, Northern population and industry, Union finance, emancipation and British neutrality.',
'Resources explain the Union victory; strategy and leadership explain its length.', H2.t43);

// 05 Competing plans for Reconstruction
F('05-reconstruction-plans', 'Who controlled Reconstruction?', 'Lincoln, Congress, Johnson, then the Radicals', [
  (y) => steps(y, [
    { kicker: 'LINCOLN, 1863', title: 'Ten Percent Plan', body: 'Readmit a state once 10 per cent of 1860 voters swore loyalty' },
    { kicker: 'CONGRESS, 1864', title: 'Wade-Davis Bill', body: 'A majority and an "ironclad oath"; Lincoln pocket-vetoed it' },
    { kicker: 'JOHNSON, FROM APRIL 1865', title: 'Pardons and Black Codes', body: 'Pardoned many Confederates; Black Codes allowed; vetoed the Freedmen\'s Bureau extension and the Civil Rights Act of 1866', fill: C.panel },
    { kicker: 'RADICAL RECONSTRUCTION, AFTER THE 1866 ELECTIONS', title: 'Congress overrides Johnson', body: 'Five military districts (Reconstruction Acts, 1867); Johnson impeached in 1868 and acquitted by one vote' },
  ], { highlight: 3, size: 16, tsize: 19 }),
  (y) => row(y, [
    { kicker: 'RADICAL REPUBLICANS', title: 'Transform the South', body: 'Stevens, Sumner: protect freedpeople', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'CONSERVATIVES', title: 'Rapid reunion', fill: C.panel },
    { kicker: 'COPPERHEADS, DEMOCRATS', title: 'Opposed Black rights', fill: C.panel, edge: C.rust },
  ], { gap: 14, card: { size: 16, tsize: 18, pad: 15, align: 'middle' } }),
],
'Four steps: Lincoln\'s Ten Percent Plan (1863); Congress\'s Wade-Davis Bill (1864), pocket-vetoed; Johnson\'s pardons and Black Codes from April 1865; and Radical Reconstruction after the 1866 elections, with military districts in 1867 and Johnson\'s impeachment in 1868. Below, the three positions: Radical Republicans, Conservatives and Copperheads.',
'Control passed from the President to a Radical-led Congress after 1866.', H2.t44);

// 06 Reconstruction rise and retreat, to scale
F('06-reconstruction-timeline', 'Reconstruction: advance and retreat', 'Drawn to scale, 1863-1877', [
  (y) => htl(y, 1863, 1877, {
    step: 1, x0: 80, x1: 820,
    spans: [{ a: 1870, b: 1871, label: 'Force Acts', fill: C.tealLight, edge: C.tealDark }],
    events: [
      { v: 1863, d: '1863', label: ['Ten Percent', 'Plan'] },
      { v: 1865, d: '1865', label: ['13th', 'Amendment'], key: true },
      { v: 1867, d: '1867', label: ['Reconstruction', 'Acts'] },
      { v: 1868, d: '1868', label: ['14th Amendment;', 'impeachment'], key: true },
      { v: 1870, d: '1870', label: ['15th', 'Amendment'], key: true },
      { v: 1872, d: '1872', label: ['Amnesty', 'Act'] },
      { v: 1873, d: '1873', label: ['Panic; Colfax', 'massacre'] },
      { v: 1875, d: '1875', label: ['Civil Rights', 'Act (barely', 'enforced)'] },
      { v: 1877, d: '1877', label: ['Compromise', 'of 1877'], key: true },
    ],
  }),
  (y) => row(y, [
    { title: 'Advance', body: 'Three amendments; military districts; Black men vote and hold office; the first Klan broken', fill: C.tealLight, edge: C.tealDark },
    { title: 'Retreat', body: 'Amnesty; Northern interest fades after 1873; Democrats "redeem" the states; troops leave in 1877', fill: C.cream, edge: C.olive },
  ], { gap: 18, card: { size: 16, tsize: 19 } }),
],
'A timeline from 1863 to 1877 drawn to scale. The advances cluster between 1865 and 1871: the 13th Amendment, the Reconstruction Acts, the 14th Amendment and impeachment, the 15th Amendment and the Force Acts. The retreat follows: the Amnesty Act (1872), the Panic of 1873 and Colfax, a barely enforced Civil Rights Act (1875) and the Compromise of 1877.',
'Gains came fast from 1865 to 1871; after 1872 the North pulled back.', H2.t44);

// 07 Criteria-led plan
F('07-reconstruction-criteria', '"Reconstruction was a failure"', 'Set criteria first, then judge each one', [
  (y) => grid(y, [
    { kicker: 'CRITERION 1', title: 'Reunion', body: 'The Union restored', fill: C.tealLight, edge: C.tealDark, extra: (x, yy, w) => chip(x + w - 16, yy + 14, 'success', { size: 15, anchor: 'end', fill: C.teal }).s },
    { kicker: 'CRITERION 2', title: 'End of slavery', body: '13th Amendment', fill: C.tealLight, edge: C.tealDark, extra: (x, yy, w) => chip(x + w - 16, yy + 14, 'success', { size: 15, anchor: 'end', fill: C.teal }).s },
    { kicker: 'CRITERION 3', title: 'Civil and political rights', body: '14th and 15th Amendments, Black officeholding; but Klan terror, redemption and 1877', fill: C.cream, edge: C.olive, extra: (x, yy, w) => chip(x + w - 16, yy + 14, 'mixed', { size: 15, anchor: 'end', fill: C.cream }).s },
    { kicker: 'CRITERION 4', title: 'Economic independence', body: 'No land redistributed; most freedpeople became sharecroppers, often tied by debt', fill: C.panel, edge: C.rust, extra: (x, yy, w) => chip(x + w - 16, yy + 14, 'failure', { size: 15, anchor: 'end', fill: C.panel, edge: C.rust, ink: C.rust }).s },
  ], 2, { gap: 16, vgap: 16, card: { size: 16, tsize: 19, minH: 130 } }),
  (y) => note(y, 'A possible judgement', ['A success in the aims Lincoln and moderate Republicans set; a failure in the aims the Radicals set, because Northern commitment did not last.'], { size: 17 }),
],
'Four criteria cards. Reunion and the end of slavery are marked as successes; civil and political rights are mixed, written into the Constitution but undone by terror and redemption; economic independence is a failure, as freedpeople received no land and most became sharecroppers. A note gives a possible judgement.',
'Judge Reconstruction against criteria: whose aims, and which ones?', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
