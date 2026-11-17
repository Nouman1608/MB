import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-psychology-9990-learning-approach';
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
// Study summary card: name band, then aim/procedure/findings/conclusion columns, then evaluation (+/-).
function study(y, o) {
  const band = `<rect x="30" y="${y}" width="840" height="52" rx="14" fill="${o.bandFill || C.tealDark}"/><rect x="30" y="${y + 30}" width="840" height="22" fill="${o.bandFill || C.tealDark}"/>` + T(50, y + 34, o.name, { size: 21, weight: 700, fill: '#ffffff' }) + (o.tag ? T(850, y + 34, o.tag, { size: 16, weight: 600, fill: '#ffffff', anchor: 'end' }) : '');
  const cols = o.cols || [['PROCEDURE', o.procedure], ['FINDINGS', o.findings], ['CONCLUSION', o.conclusion]].filter((c) => c[1]);
  const r = row(y + 52, cols.map(([k, b], i) => ({ kicker: k, body: b, fill: i === cols.length - 1 && o.hiLast !== false ? C.cream : C.panel, edge: i === cols.length - 1 && o.hiLast !== false ? C.olive : C.panelEdge })), { gap: 0, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink, gap: 6 } });
  let s = band + r.s, h = 52 + r.h;
  if (o.plus || o.minus) {
    const e = row(y + h + 10, [
      ...(o.plus ? [{ kicker: '+ STRENGTH', body: o.plus, fill: C.tealLight, edge: C.tealDark }] : []),
      ...(o.minus ? [{ kicker: '− WEAKNESS', kfill: C.rust, body: o.minus, fill: C.panel }] : []),
    ], { gap: 14, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink, gap: 6 } });
    s += e.s; h += 10 + e.h;
  }
  return { s, h };
}

// ---- Extra helpers for Cambridge 9990 psychology figures ----
// Vertical arrows between two stacked blocks, at the given x positions (F gap 22 assumed).
const vArrows = (xs, h = 30, o = {}) => (y) => ({ s: xs.map((x) => arrow(x, y - 16, x, y + h + 14, { w: 3.5, ...o })).join('') + (o.label ? T(o.lx ?? 450, y + h / 2 + 6, o.label, { size: 16, weight: 700, anchor: 'middle', fill: o.lfill || C.muted }) : ''), h });
// Section label (small caps style kicker across the figure).
const KL = (s, o = {}) => (y) => ({ s: T(o.anchor === 'middle' ? 450 : o.x ?? 30, y + 14, s, { size: 15, weight: 700, fill: o.fill || C.muted, anchor: o.anchor || 'start' }), h: 18 });
// Evaluation grid: rows of [issue, point, + / − / ±].
function evalGrid(y, rows, o = {}) {
  const mark = (m) => (m === '+' ? C.tealLight : m === '−' ? '#f6e3d8' : C.cream);
  return table(y, [{ w: o.w1 ?? 1.1, head: o.h1 || 'Issue' }, { w: o.w2 ?? 3.4, head: o.h2 || 'Point' }, { w: 0.55, head: '+/−' }],
    rows.map((r) => [r[0], r[1], `**${r[2]}**`]), { size: o.size ?? 16, cellFill: (ri, ci) => (ci === 2 ? mark(rows[ri][2]) : null) });
}
// Simple two-axis schematic plot frame. Returns {s, X(v), Y(v)} for v in 0..1.
function axes(x, y, w, h, xl, yl, o = {}) {
  const s = `<line x1="${x}" y1="${y + h}" x2="${x + w}" y2="${y + h}" stroke="${C.ink}" stroke-width="3"/>` +
    `<line x1="${x}" y1="${y + h}" x2="${x}" y2="${y}" stroke="${C.ink}" stroke-width="3"/>` +
    T(x + w / 2, y + h + 34, xl, { size: 17, weight: 600, anchor: 'middle' }) +
    `<text x="${x - 22}" y="${y + h / 2}" font-size="17" font-weight="600" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 ${x - 22} ${y + h / 2})">${X(yl)}</text>` +
    (o.illus !== false ? T(x + w, y - 8, 'illustrative: no data in the lesson', { size: 15, fill: C.muted, anchor: 'end', italic: true }) : '');
  return { s, X: (v) => x + v * w, Y: (v) => y + h - v * h };
}

const H2 = {
  proc: '## The learning processes you must be able to explain',
  ban: '## Bandura et al. (1961): transmission of aggression',
  fag: '## Fagen et al. (2014): elephant learning',
  saa: '## Saavedra and Silverman (2002): button phobia',
};

// 01 Processes mapped to studies
F('01-processes-to-studies', 'Four learning processes, three studies', 'Each core study illustrates a different process', [
  (y) => row(y, [
    { kicker: 'SOCIAL LEARNING', title: 'Observe a model and imitate', body: 'attention, retention, reproduction, motivation; similar models imitated more', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'OPERANT CONDITIONING', title: 'Learn from consequences', body: 'reinforcement, primary and secondary reinforcers, shaping, chaining', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'CLASSICAL + EVALUATIVE', title: 'Learn by association', body: 'a stimulus paired with an outcome; evaluative learning changes liking or disliking', fill: '#f6e3d8', edge: C.rust, kfill: C.rust },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 19, bfill: C.ink } }),
  vArrows([165, 450, 735], 26),
  (y) => row(y, [
    { title: 'Bandura et al. (1961)', body: 'children imitate an aggressive adult model' },
    { title: 'Fagen et al. (2014)', body: 'elephants trained with positive reinforcement' },
    { title: 'Saavedra and Silverman (2002)', body: 'a boy\'s button phobia treated with exposure, then disgust imagery' },
  ], { gap: 14, card: { size: 16, tsize: 18, align: 'middle' } }),
  (y) => note(y, '', 'All three measure **directly observable behaviour**: imitative acts, completed training steps, and approach to buttons with distress ratings.', { align: 'middle', size: 16, fill: C.panel, edge: C.panelEdge }),
],
'Three learning processes, each linked to a core study: social learning to Bandura et al., operant conditioning to Fagen et al., and classical conditioning with evaluative learning to Saavedra and Silverman. A note explains that all three measure directly observable behaviour.',
'Social learning, operant conditioning and association: one study for each.', H2.proc);

// 02 Reinforcement terms
F('02-reinforcement-terms', 'Getting the operant terms right', '', [
  (y) => row(y, [
    { kicker: 'POSITIVE REINFORCEMENT', title: 'Adds something pleasant', body: 'after a behaviour', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'NEGATIVE REINFORCEMENT', title: 'Removes something unpleasant', body: 'after a behaviour', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 20, card: { size: 16, tsize: 20, align: 'middle' } }),
  (y) => P('Both make the behaviour **more** likely.', { anchor: 'middle', size: 17, fill: C.ink })(y),
  (y) => row(y, [
    { kicker: 'PRIMARY REINFORCER', title: 'Meets a biological need', body: 'e.g. food', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'SECONDARY REINFORCER', title: 'Gains value by pairing', body: 'e.g. a sound that has repeatedly come just before food', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { gap: 20, card: { size: 16, tsize: 20, align: 'middle', bfill: C.ink } }),
  (y) => row(y, [
    { kicker: 'SHAPING', title: 'Closer and closer approximations', body: 'reinforce each step nearer the target behaviour' },
    { kicker: 'BEHAVIOURAL CHAINING', title: 'Link learned steps', body: 'into one sequence' },
  ], { gap: 20, card: { size: 16, tsize: 20, align: 'middle' } }),
  (y) => note(y, '', 'Common mistake: secondary reinforcement is **not** negative reinforcement.', { align: 'middle', size: 17, fill: C.panel, edge: C.rust }),
],
'Pairs of definitions: positive reinforcement adds something pleasant and negative reinforcement removes something unpleasant, both making behaviour more likely; primary reinforcers meet a biological need while secondary reinforcers gain value by pairing; shaping reinforces approximations and chaining links steps.',
'Positive adds, negative removes; secondary means learned value, not negative.', H2.proc);

// 03 Bandura design
F('03-bandura-design', 'Bandura et al. (1961): design', '72 children (36 boys, 36 girls), aged about 3 to 5, matched on existing aggression', [
  (y) => card(250, y, 400, { title: '72 children', align: 'middle', tsize: 21 }),
  (y) => ({ s: arrow(380, y - 16, 200, y + 26, { w: 3 }) + arrow(520, y - 16, 680, y + 26, { w: 3 }), h: 24 }),
  (y) => {
    const a = card(30, y, 340, { kicker: 'CONTROL', title: '24 children', body: 'no model', align: 'middle', size: 16, tsize: 20, fill: C.bg });
    const b = card(420, y, 450, { kicker: 'MODEL CONDITIONS', title: 'The other 48', body: 'split by two factors', align: 'middle', size: 16, tsize: 20 });
    return { s: a.s + b.s, h: Math.max(a.h, b.h) };
  },
  vArrows([645], 22),
  (y) => {
    let s = T(560, y + 16, 'AGGRESSIVE MODEL', { size: 15, weight: 700, anchor: 'middle', fill: C.rust }) + T(760, y + 16, 'NON-AGGRESSIVE MODEL', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
    s += T(450, y + 74, 'Same-sex model', { size: 17, weight: 700, anchor: 'end' }) + T(450, y + 154, 'Opposite-sex model', { size: 17, weight: 700, anchor: 'end' });
    [[470, y + 30, '#f6e3d8', C.rust, 'aggressive,', 'same sex'], [670, y + 30, C.tealLight, C.tealDark, 'non-aggressive,', 'same sex'], [470, y + 110, '#f6e3d8', C.rust, 'aggressive,', 'opposite sex'], [670, y + 110, C.tealLight, C.tealDark, 'non-aggressive,', 'opposite sex']].forEach(([x, yy, f, e, l1, l2]) => { s += `<rect x="${x}" y="${yy}" width="180" height="70" rx="12" fill="${f}" stroke="${e}" stroke-width="2.5"/>` + T(x + 90, yy + 31, l1, { size: 16, anchor: 'middle' }) + T(x + 90, yy + 52, l2, { size: 16, anchor: 'middle' }); });
    return { s, h: 184 };
  },
  (y) => note(y, 'Matched groups', 'Existing aggression was rated by an experimenter and a nursery teacher whose ratings agreed closely: **high inter-rater reliability**.', { size: 16, fill: C.panel, edge: C.panelEdge }),
],
'Seventy-two children: 24 in a control group with no model, and the other 48 split by aggressive or non-aggressive model and by same-sex or opposite-sex model, giving a two by two set of conditions. Children were matched on existing aggression rated by two raters.',
'A control group plus four model conditions: aggressive or not, same sex or not.', H2.ban);

// 04 Bandura three rooms
F('04-bandura-procedure', 'Bandura et al. (1961): three rooms', '', [
  (y) => row(y, [
    { kicker: 'ROOM 1', title: 'Watch the model', body: 'Child plays with stickers and potato prints; the adult model assembles toys quietly or attacks the Bobo doll: sits on it and punches its nose, hits it with a mallet, tosses it in the air, kicks it, says "Pow".' },
    { kicker: 'ROOM 2', title: 'Mild frustration', body: 'Shown attractive toys, then told they are reserved for other children.', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'ROOM 3', title: '20 minutes, observed', body: 'Aggressive toys (smaller Bobo doll, mallet) and non-aggressive toys; watched through a one-way mirror; behaviour recorded every five seconds.', fill: C.tealLight, edge: C.tealDark },
  ], { arrows: true, gap: 40, vcenter: false, fr: [1.25, 0.9, 1.1], card: { size: 16, tsize: 19, bfill: C.ink } }),
  (y) => note(y, 'Results', 'Aggressive-model children showed much more imitative physical and verbal aggression. Boys showed more imitative physical aggression than girls. Same-sex models tended to be imitated more, especially boys with the male model. **No reinforcement was given**: aggression was learned by observation.', { size: 16 }),
  (y) => row(y, [
    { kicker: '+ RELIABLE', body: 'Standardised model behaviour, matched groups, timed observation with more than one observer.', fill: C.tealLight, edge: C.tealDark },
    { kicker: '− VALIDITY AND ETHICS', kfill: C.rust, body: 'A doll designed to be hit, a stranger as model, an artificial setting; children frustrated and exposed to aggression.' },
  ], { gap: 14, vcenter: false, card: { size: 16, bfill: C.ink } }),
],
'Three rooms in sequence: watching an adult model either assemble toys or attack a Bobo doll; a mild frustration phase; and 20 minutes in a room with aggressive and non-aggressive toys, observed through a one-way mirror every five seconds. Results and evaluation follow.',
'Watch, be frustrated, then be observed: aggression was imitated without reward.', H2.ban);

// 05 Fagen trunk wash
F('05-fagen-trunk-wash', 'Fagen et al. (2014): teaching the trunk wash', 'Positive reinforcement training of juvenile working elephants in Nepal', [
  (y) => row(y, [
    { kicker: 'STEP A', title: 'Bridge signal paired with food', body: 'the signal becomes a **secondary reinforcer** that marks the exact moment of a correct response', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'PRIMARY REINFORCER', title: 'Food', body: 'meets a biological need', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { gap: 20, fr: [1.7, 1], vcenter: false, card: { size: 16, tsize: 19, bfill: C.ink } }),
  KL('STEP B: EACH STEP SHAPED, THEN THE STEPS CHAINED', { anchor: 'middle' }),
  (y) => row(y, [
    { title: 'Raise the trunk' }, { title: 'Hold it up while liquid is put in' }, { title: 'Lower the trunk' }, { title: 'Full trunk wash', fill: C.tealLight, edge: C.tealDark },
  ], { arrows: true, gap: 36, card: { tsize: 18, align: 'middle', pad: 14 } }),
  (y) => note(y, 'Shaping a step', 'Reinforce lifting the trunk a little, then only lifting it fully, then only holding it up while liquid is introduced.', { size: 16, fill: C.panel, edge: C.panelEdge }),
  (y) => row(y, [
    { kicker: 'RESULT', body: 'Most elephants learned the full trunk wash through positive reinforcement alone: a humane alternative to punishment and dominance.' },
    { kicker: 'EVALUATION', kfill: C.rust, body: 'Behavioural checklist gives quantitative records; but a tiny sample in one setting, and not every elephant reached the full behaviour.' },
  ], { gap: 14, vcenter: false, card: { size: 16, bfill: C.ink } }),
],
'A bridge signal paired with food becomes a secondary reinforcer, with food as the primary reinforcer. The trunk wash is broken into steps (raise the trunk, hold it up while liquid is put in, lower it), each shaped and then chained into the full behaviour. Result and evaluation follow.',
'A bridge signal, shaping and chaining built the trunk wash step by step.', H2.fag);

// 06 Saavedra and Silverman
F('06-saavedra-silverman', 'Saavedra and Silverman (2002): button phobia', 'Case study of a nine-year-old boy; disgust as well as fear', [
  (y) => {
    const a = axes(120, y + 30, 720, 250, 'treatment sessions', 'distress rating');
    let s = panel(30, y, 840, 340) + a.s;
    const mid = 120 + 360;
    s += `<rect x="121" y="${y + 30}" width="359" height="250" fill="${C.tealLight}" opacity="0.5"/>` + `<rect x="${mid}" y="${y + 30}" width="359" height="250" fill="${C.cream}" opacity="0.6"/>`;
    s += `<line x1="${mid}" y1="${y + 30}" x2="${mid}" y2="${y + 280}" stroke="${C.ink}" stroke-width="2" stroke-dasharray="7 6"/>`;
    s += T(300, y + 56, 'Phase 1: exposure +', { size: 16, weight: 700, anchor: 'middle' }) + T(300, y + 76, 'contingency management', { size: 16, weight: 700, anchor: 'middle' });
    s += T(660, y + 56, 'Phase 2: disgust imagery', { size: 16, weight: 700, anchor: 'middle' }) + T(660, y + 76, '(evaluative learning) + exposure', { size: 16, weight: 700, anchor: 'middle' });
    s += path(`M130,${a.Y(0.82)} C250,${a.Y(0.8)} 380,${a.Y(0.72)} ${mid},${a.Y(0.7)} C540,${a.Y(0.66)} 580,${a.Y(0.3)} 680,${a.Y(0.22)} L830,${a.Y(0.18)}`, { stroke: C.rust, w: 5 });
    s += T(300, a.Y(0.82) + 46, 'only a little lower', { size: 16, anchor: 'middle', fill: C.rust, weight: 600 }) + T(700, a.Y(0.18) + 34, 'marked drop, kept at follow-up', { size: 16, anchor: 'middle', fill: C.rust, weight: 600 });
    return { s, h: 340 };
  },
  (y) => row(y, [
    { kicker: 'BACKGROUND', body: 'Phobia began at about five when a bowl of buttons fell on him; plastic buttons were most distressing.' },
    { kicker: 'METHOD', body: 'Interviews, rating scales, observation; child-friendly distress ratings while approaching a hierarchy of buttons.' },
  ], { gap: 14, vcenter: false, card: { size: 16, bfill: C.ink } }),
  (y) => row(y, [
    { kicker: '+ STRENGTH', body: 'Detailed, idiographic data; suggests a new direction for treatment.', fill: C.tealLight, edge: C.tealDark },
    { kicker: '− WEAKNESSES', kfill: C.rust, body: 'One child; treatments in sequence, so phase 2 gains may partly be a delayed effect of phase 1.' },
  ], { gap: 14, vcenter: false, card: { size: 16, bfill: C.ink } }),
],
'An illustrative line of the boy\'s distress: in phase 1, exposure with contingency management lowers it only a little; in phase 2, disgust-focused imagery (evaluative learning) with exposure produces a marked drop kept at follow-up. Background, method and evaluation cards follow.',
'Exposure alone helped little; adding disgust imagery cut distress markedly.', H2.saa);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
