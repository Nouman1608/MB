import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-psychology-9990-biological-approach';
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
  ass: '## The two assumptions, applied',
  dk: '## Dement and Kleitman (1957): sleep and dreams',
  ha: '## Hassett et al. (2008): monkey toy preferences',
  ho: '## Hölzel et al. (2011): mindfulness and brain scans',
  work: '## Worked example',
};

// 01 Assumptions mapped to studies
F('01-assumptions-map', 'Two assumptions, three studies', 'Which part of each assumption each core study tests', [
  (y) => note(y, 'Assumption 1', 'Behaviour, cognitions and emotions can be explained in terms of the working of the **brain** and the effect of **hormones, genetics and evolution**.', { size: 17, fill: C.tealLight, edge: C.tealDark }),
  vArrows([165, 450, 735], 26),
  (y) => row(y, [
    { kicker: 'DEMENT AND KLEITMAN', title: 'Brain activity', body: 'A mental experience (dreaming) linked to measurable brain activity and eye movement.' },
    { kicker: 'HASSETT ET AL.', title: 'Hormones and evolution', body: 'A sex difference in play that also appears in another primate, rather than upbringing alone.' },
    { kicker: 'HÖLZEL ET AL.', title: 'Brain structure', body: 'A psychological practice linked to the structure of particular brain regions.' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 19 } }),
  (y) => note(y, 'Assumption 2', 'Similarities and differences between people can be understood in terms of biological factors and their **interaction with other factors**.', { size: 17 }),
  vArrows([450, 735], 26),
  (y) => row(y, [
    { kicker: 'HASSETT ET AL.', body: 'Hormones may contribute to a difference that **socialisation then strengthens**.', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'HÖLZEL ET AL.', body: 'The environment changes biology: **eight weeks of training** altered grey-matter concentration.', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { x: 315.67, w: 554.33, gap: 14, vcenter: true, card: { size: 16, bfill: C.ink } }),
],
'Assumption 1 (brain, hormones, genetics and evolution explain behaviour) is tested by Dement and Kleitman through brain activity, Hassett et al. through hormones and evolution, and Hölzel et al. through brain structure. Assumption 2 (interaction with other factors) is shown by Hassett et al. (socialisation strengthens a difference) and Hölzel et al. (training changes the brain).',
'Each study tests a different part of the assumptions.', H2.ass);

// 02 Dement and Kleitman procedure
F('02-dement-kleitman-procedure', 'Dement and Kleitman (1957): procedure', '9 adults (7 men, 2 women) sleeping in a laboratory', [
  (y) => steps(y, [
    { title: 'Controls before bed', body: 'No caffeine or alcohol on the test day; arrive near usual bedtime.' },
    { title: 'Wired to an EEG', body: 'Electrodes beside the eyes and on the scalp.' },
    { title: 'Woken by a doorbell', body: 'At different points in the night; not told whether they had been in REM or NREM sleep.' },
    { title: 'Report into a recorder', body: 'Had they been dreaming? What was the dream about?' },
    { title: 'Five or fifteen minutes?', body: 'Some were woken 5 or 15 minutes into REM and asked which length their dream had been.', fill: C.tealLight },
  ], { highlight: [], size: 16, tsize: 19 }),
  (y) => P('Five participants were studied intensively; four more were used to confirm results.', { anchor: 'middle', size: 16 })(y),
],
'Five numbered steps: participants avoided caffeine and alcohol and arrived near bedtime, were connected to an EEG, were woken by a doorbell without being told their sleep stage, reported dreams into a recorder, and in one part estimated whether a dream had lasted five or fifteen minutes.',
'Standardised waking and reporting made the procedure replicable.', H2.dk);

// 03 Dement and Kleitman results
{
  const bar = (y, label, n, d, fill) => {
    const W = 520, x0 = 250, w = (W * n) / d;
    return T(230, y + 30, label, { size: 18, weight: 700, anchor: 'end' }) +
      `<rect x="${x0}" y="${y + 6}" width="${W}" height="38" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2"/>` +
      `<rect x="${x0}" y="${y + 6}" width="${w}" height="38" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>` +
      T(x0 + W + 12, y + 31, `${n} / ${d}`, { size: 18, weight: 700 });
  };
  F('03-dement-kleitman-results', 'Dement and Kleitman (1957): results', '', [
    (y) => ({ s: panel(30, y, 840, 170) + T(50, y + 34, 'AWAKENINGS THAT PRODUCED A DREAM REPORT', { size: 15, weight: 700, fill: C.tealDark }) + bar(y + 50, 'REM', 152, 191, C.teal) + bar(y + 104, 'NREM', 11, 160, C.cream), h: 170 }),
    (y) => ({ s: panel(30, y, 840, 116) + T(50, y + 34, 'FIVE OR FIFTEEN MINUTES? CORRECT JUDGEMENTS', { size: 15, weight: 700, fill: C.tealDark }) + bar(y + 50, 'Estimates', 92, 111, C.teal), h: 116 }),
    (y) => row(y, [
      { kicker: 'MAINLY VERTICAL EYE MOVEMENTS', title: '↕', body: 'dream of climbing ladders, looking up and down' },
      { kicker: 'MAINLY HORIZONTAL EYE MOVEMENTS', title: '↔', body: 'dream of watching two people throw tomatoes at each other' },
    ], { gap: 20, card: { size: 17, tsize: 30, align: 'middle', bfill: C.ink } }),
    (y) => note(y, 'Not "only in REM"', 'A small number of NREM awakenings also produced dreams. REM periods recurred at regular intervals: an **ultradian rhythm** (a cycle shorter than 24 hours).', { size: 17 }),
  ],
  'Bars show 152 of 191 REM awakenings produced a dream report compared with 11 of 160 NREM awakenings, and 92 of 111 five-or-fifteen-minute estimates were correct. Vertical eye movements matched a dream of climbing ladders; horizontal movements matched watching two people throw tomatoes.',
  'Dream reports came mostly from REM, but not only from REM.', H2.dk);
}

// 04 Hassett et al.
F('04-hassett-toys', 'Hassett et al. (2008): monkey toy preferences', 'Rhesus monkeys in a large outdoor enclosure at a primate field station', [
  (y) => row(y, [
    { kicker: 'WHEELED TOY', title: 'e.g. wagon or truck', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'PLUSH TOY', title: 'soft toy', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { gap: 140, card: { size: 16, tsize: 19, align: 'middle' } }),
  (y) => P('placed in the enclosure together; contacts coded with a **behavioural checklist** (frequency and duration)', { anchor: 'middle', size: 17, fill: C.ink })(y),
  (y) => {
    const base = y + 230, sc = 1.6;
    let s = panel(30, y, 840, 290) + T(850, y + 28, 'illustrative: the lesson gives no numbers', { size: 15, fill: C.muted, anchor: 'end', italic: true });
    const grp = (x, label, a, b, note) => `<rect x="${x}" y="${base - a * sc}" width="90" height="${a * sc}" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` +
      `<rect x="${x + 100}" y="${base - b * sc}" width="90" height="${b * sc}" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` +
      T(x + 95, base + 30, label, { size: 19, weight: 700, anchor: 'middle' }) + T(x + 95, base + 52, note, { size: 15, anchor: 'middle', fill: C.muted });
    s += `<line x1="90" y1="${base}" x2="810" y2="${base}" stroke="${C.ink}" stroke-width="3"/>`;
    s += grp(150, 'Males', 110, 45, 'more with wheeled toys') + grp(560, 'Females', 75, 70, 'much more even');
    s += `<rect x="370" y="${y + 60}" width="22" height="22" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + T(400, y + 78, 'wheeled', { size: 16 }) + `<rect x="370" y="${y + 92}" width="22" height="22" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/>` + T(400, y + 110, 'plush', { size: 16 });
    return { s, h: 290 };
  },
  (y) => note(y, 'Conclusion', 'The male preference appears without human-style socialisation, so biological factors such as **hormones** may help produce sex differences in toy preference, which **socialisation may then strengthen**. Children\'s data came from another study: no children were tested.', { size: 16 }),
],
'Monkeys were given a wheeled toy and a plush toy together and contacts were coded with a behavioural checklist. Illustrative bars show males interacting more with wheeled toys and females more evenly. The conclusion: hormones may contribute to the difference, which socialisation may strengthen.',
'Males preferred wheeled toys, as boys tend to; females were more even.', H2.ha);

// 05 Hölzel design
F('05-holzel-design', 'Hölzel et al. (2011): a before-and-after design', 'Experiment with a longitudinal design', [
  (y) => {
    const col = (x, w, txt, fill = C.panel, edge = C.panelEdge) => card(x, y, w, { title: txt, align: 'middle', tsize: 18, fill, edge, minH: 74, vcenter: true });
    let s = T(230, y + 14, 'BEFORE', { size: 15, weight: 700, anchor: 'middle', fill: C.muted }) + T(490, y + 14, 'EIGHT WEEKS', { size: 15, weight: 700, anchor: 'middle', fill: C.muted }) + T(750, y + 14, 'AFTER', { size: 15, weight: 700, anchor: 'middle', fill: C.muted });
    const r = (yy, lab, n, mid, fill, edge) => {
      let q = T(30, yy + 4, `${lab} (${n})`, { size: 18, weight: 700 });
      const a = card(110, yy + 16, 240, { title: 'MRI scan', body: 'mindfulness questionnaire', size: 15, tsize: 18, align: 'middle', minH: 84, vcenter: true });
      const b = card(390, yy + 16, 200, { title: mid, size: 15, tsize: 18, align: 'middle', fill, edge, minH: a.h, vcenter: true });
      const c = card(630, yy + 16, 240, { title: 'MRI scan', body: 'mindfulness questionnaire', size: 15, tsize: 18, align: 'middle', minH: 84, vcenter: true });
      return q + a.s + b.s + c.s + arrow(354, yy + 16 + a.h / 2, 384, yy + 16 + a.h / 2) + arrow(594, yy + 16 + a.h / 2, 624, yy + 16 + a.h / 2);
    };
    s += r(y + 40, 'MBSR group', 16, 'MBSR programme', C.tealLight, C.tealDark) + r(y + 172, 'Control group', 17, 'no programme', C.bg, C.panelEdge);
    return { s, h: 276 };
  },
  (y) => card(30, y, 840, { kicker: 'MBSR PROGRAMME', body: 'weekly group sessions · a day-long retreat · daily home practice guided by audio recordings', size: 16, bfill: C.ink }),
  (y) => row(y, [
    { kicker: 'RESULTS: MBSR GROUP VS CONTROLS', body: 'Increased grey-matter concentration in the **left hippocampus**, posterior cingulate cortex, temporo-parietal junction and cerebellum; mindfulness scores rose.', fill: C.cream, edge: C.olive },
    { kicker: 'WHY THIS DESIGN', body: 'Earlier cross-sectional studies could not show meditation **caused** the brain differences; a before-and-after design with a control group can.' },
  ], { gap: 14, vcenter: false, card: { size: 16, bfill: C.ink } }),
  (y) => row(y, [
    { kicker: '+ STRENGTHS', body: 'Control group; MRI is objective and replicable.', fill: C.tealLight, edge: C.tealDark },
    { kicker: '− WEAKNESSES', kfill: C.rust, body: 'Small samples; participants knew their group; MBSR mixes group support, yoga-based movement and meditation, so the active ingredient is unclear.' },
  ], { gap: 14, fr: [1, 1.7], vcenter: false, card: { size: 16, bfill: C.ink } }),
],
'Sixteen MBSR participants and seventeen controls had MRI scans and a mindfulness questionnaire before and after eight weeks; only the MBSR group took the programme. Results show increased grey-matter concentration in the left hippocampus and other regions. Strengths and weaknesses of the design follow.',
'Scanning before and after, with a control group, links the change to the programme.', H2.ho);

// 06 Two-mark answer structure
F('06-two-mark-structure', 'Linking a study to an assumption [2]', 'Explain one way Dement and Kleitman support the biological approach', [
  (y) => row(y, [
    { kicker: 'MARK 1: STATE THE ASSUMPTION', body: '"The biological approach assumes that cognitions can be explained by the working of the brain."', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'MARK 2: A PRECISE FINDING TIED TO IT', body: '"Dream reports were far more likely after waking from REM, a distinct brain state recorded by the EEG, than after NREM sleep."', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { arrows: true, gap: 50, vcenter: false, card: { size: 17, bfill: C.ink } }),
  (y) => note(y, '', '"Dreams are biological" with no finding earns little.', { align: 'middle', size: 17, fill: C.panel, edge: C.rust }),
],
'Two linked cards: the first mark comes from stating the assumption accurately (cognitions explained by the brain); the second from a precise finding tied to it (dream reports far more likely after REM than NREM awakenings). A note warns that a vague claim without a finding earns little.',
'State the assumption, then tie a precise finding to it.', H2.work);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
