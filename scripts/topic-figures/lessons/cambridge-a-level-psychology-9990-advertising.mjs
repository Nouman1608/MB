import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-psychology-9990-advertising';
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
  comm: '## 2.5.1 How adverts communicate',
  sd: '## Key study: Snyder and DeBono (1985)',
  pp: '## Product placement',
  brand: '## 2.5.3 Brand awareness and recognition',
  work: '## Worked example: applying self-monitoring',
};

// 01 Eye-tracking and EEG
F('01-eye-tracking-eeg', 'Measuring responses to adverts', 'Two techniques that do not rely on what participants say', [
  (y) => row(y, [
    { kicker: 'EYE-TRACKING', title: 'Where the eyes go', body: 'Shows which parts of an advert are looked at, and for how long.', fill: C.tealLight, edge: C.tealDark,
      extra: (x, yy, w, h) => '' },
    { kicker: 'EEG', title: 'What the brain does', body: 'Records electrical activity of the brain: an indication of attention and emotional engagement.', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 20, vcenter: false, card: { size: 17, tsize: 21, bfill: C.ink } }),
  (y) => {
    // small schematic: advert with gaze points (left) and a brain-wave trace (right)
    let s = panel(30, y, 410, 170) + `<rect x="70" y="${y + 22}" width="200" height="126" rx="8" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` +
      T(170, y + 52, 'ADVERT', { size: 16, weight: 700, anchor: 'middle', fill: C.olive }) +
      `<rect x="90" y="${y + 66}" width="70" height="60" rx="6" fill="${C.panel}" stroke="${C.olive}" stroke-width="2"/>` +
      `<line x1="175" y1="${y + 76}" x2="252" y2="${y + 76}" stroke="${C.olive}" stroke-width="5"/><line x1="175" y1="${y + 94}" x2="240" y2="${y + 94}" stroke="${C.olive}" stroke-width="5"/>`;
    [[125, 92, 18], [210, 78, 11], [140, 112, 9], [200, 100, 7]].forEach(([cx, cy, r]) => { s += `<circle cx="${cx}" cy="${y + cy}" r="${r}" fill="${C.tealDark}" opacity="0.55" stroke="${C.tealDark}" stroke-width="2"/>`; });
    s += path(`M125,${y + 92} L210,${y + 78} L140,${y + 112} L200,${y + 100}`, { stroke: C.tealDark, w: 2.5 });
    s += para(290, y + 62, 'circle size = time spent looking', 135, { size: 15, fill: C.muted }).s;
    s += panel(460, y, 410, 170);
    let d = `M490,${y + 85}`; for (let i = 0; i < 26; i++) { const x = 490 + i * 14; d += ` L${x + 7},${y + 85 + (i % 2 ? 1 : -1) * (i > 10 && i < 18 ? 40 : 14)}`; }
    s += path(d, { stroke: C.tealDark, w: 3 }) + T(665, y + 155, 'brain activity over time (schematic)', { size: 15, fill: C.muted, anchor: 'middle' });
    return { s, h: 170 };
  },
  (y) => row(y, [
    { kicker: '+ STRENGTH', body: 'Both give **objective** data. Ciceri et al. (2020) combined such biometric measures to compare advertising across media.', fill: C.tealLight, edge: C.tealDark },
    { kicker: '− LIMITATION', kfill: C.rust, body: 'They show **physiological reactions**, not whether the viewer liked the product or will buy it.' },
  ], { gap: 20, vcenter: false, card: { size: 17, bfill: C.ink } }),
],
'Eye-tracking shows which parts of an advert are looked at and for how long; EEG records brain activity as an indication of attention and emotional engagement. Both give objective data, as in Ciceri et al. (2020), but show physiological reactions rather than liking or intention to buy.',
'Objective measures of attention, but not of liking or buying.', H2.comm);

// 02 4 Ps to 4 Cs
{
  const pairs = [
    ['Product', 'Consumer wants and needs', 'What does the customer actually want?'],
    ['Price', 'Cost', 'What is the total cost to the customer, including time and effort?'],
    ['Place', 'Convenience', 'How easily can the customer buy it?'],
    ['Promotion', 'Communication', 'Is there a two-way conversation, not just a one-way message?'],
  ];
  F('02-four-ps-to-four-cs', 'Lauterborn\'s 4 Cs', 'The marketing mix rewritten from the consumer\'s point of view', [
    (y) => ({ s: T(130, y + 14, '4 Ps: SELLER', { size: 15, weight: 700, anchor: 'middle', fill: C.muted }) + T(380, y + 14, '4 Cs: CONSUMER', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(530, y + 14, 'THE QUESTION THE ADVERTISER ASKS', { size: 15, weight: 700, fill: C.muted }), h: 16 }),
    ...pairs.map(([p, c, q]) => (y) => {
      const a = card(30, y, 200, { title: p, align: 'middle', tsize: 20, minH: 84, vcenter: true });
      const b = card(275, y, 210, { title: c, align: 'middle', tsize: 19, minH: 84, vcenter: true, fill: C.tealLight, edge: C.tealDark });
      const qq = card(510, y, 360, { body: q, size: 17, bfill: C.ink, minH: 84, vcenter: true, fill: C.cream, edge: C.olive });
      return { s: a.s + b.s + qq.s + arrow(234, y + 42, 269, y + 42), h: Math.max(a.h, b.h, qq.h) };
    }),
  ],
  'Four rows map each of the seller\'s 4 Ps to a consumer-side C: product to consumer wants and needs, price to cost, place to convenience, promotion to communication, each with the question the advertiser asks.',
  'Each P becomes a C when you take the customer\'s point of view.', H2.comm, { gap: 14 });
}

// 03 Snyder and DeBono study card
F('03-snyder-debono-card', 'Key study: Snyder and DeBono (1985)', '', [
  (y) => row(y, [
    { kicker: 'HIGH SELF-MONITORS', body: 'Adjust their behaviour to suit the social situation and care about the image they present.', fill: C.cream, edge: C.olive },
    { kicker: 'LOW SELF-MONITORS', body: 'Behave according to their inner attitudes and values.', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 20, vcenter: false, card: { size: 17, bfill: C.ink, kfill: C.ink } }),
  (y) => study(y, { name: 'Study 3: image appeal or quality claim?', tag: 'self-report measures', cols: [
    ['AIM', 'To test whether high and low self-monitors respond differently to image-based and quality-based adverts.'],
    ['PROCEDURE', 'Self-monitoring measured with the Self-Monitoring Scale. A product was advertised with an **image appeal** or a **quality claim**; participants said how willing they were to try it and how much they would pay.'],
    ['RESULTS', 'High self-monitors would pay more after an **image** appeal; low self-monitors would pay more after a **quality** claim.'],
  ], hiLast: false }),
  (y) => note(y, 'Conclusion', 'An advert\'s effectiveness depends on the **match** between the type of appeal and the consumer\'s personality.', { align: 'middle', size: 17 }),
  (y) => evalGrid(y, [
    ['Application', 'Advertisers can target image appeals at likely high self-monitors and quality claims at others.', '+'],
    ['Self-reports', 'Self-monitoring and willingness to pay were self-reported: social desirability, and saying you would pay is not paying.', '−'],
    ['Generalisation', 'Participants were students, a narrow sample in age and income.', '−'],
    ['Determinism', 'Personality appears to determine response, yet people can choose to ignore adverts.', '±'],
  ], { size: 16 }),
],
'Definitions of high and low self-monitors, then a study card for Snyder and DeBono (1985) study 3: aim, procedure using the Self-Monitoring Scale and image or quality adverts, and results. A conclusion note and an evaluation grid covering application, self-reports, generalisation and determinism follow.',
'Image appeals suit high self-monitors; quality claims suit low self-monitors.', H2.sd);

// 04 Matching appeal to personality (2 x 2) applied to the watch example
{
  const cell = (x, y, hi, txt) => `<rect x="${x}" y="${y}" width="290" height="120" rx="12" fill="${hi ? C.mustard : C.panel}" stroke="${hi ? C.ink : C.panelEdge}" stroke-width="${hi ? 3 : 2.5}"/>` +
    T(x + 145, y + 56, hi ? 'pays more' : 'pays less', { size: 22, weight: 700, anchor: 'middle', fill: hi ? C.ink : C.muted }) + T(x + 145, y + 86, txt, { size: 16, anchor: 'middle', fill: hi ? C.ink : C.muted });
  F('04-matching-appeal', 'Match the appeal to the person', 'The interaction found in study 3, applied to two watch adverts', [
    (y) => {
      let s = T(435, y + 18, 'IMAGE APPEAL', { size: 16, weight: 700, anchor: 'middle', fill: C.olive }) + T(435, y + 40, 'celebrity at a glamorous party', { size: 16, anchor: 'middle', fill: C.muted }) +
        T(735, y + 18, 'QUALITY CLAIM', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(735, y + 40, 'accuracy, water resistance', { size: 16, anchor: 'middle', fill: C.muted });
      const r1 = y + 58, r2 = y + 192;
      s += card(30, r1, 230, { title: 'High self-monitor', body: 'cares about image', align: 'middle', minH: 120, vcenter: true, fill: C.cream, edge: C.olive, size: 16 }).s;
      s += card(30, r2, 230, { title: 'Low self-monitor', body: 'acts on values', align: 'middle', minH: 120, vcenter: true, fill: C.tealLight, edge: C.tealDark, size: 16 }).s;
      s += cell(290, r1, true, 'show the celebrity advert') + cell(590, r1, false, '') + cell(290, r2, false, '') + cell(590, r2, true, 'show the accuracy advert');
      return { s, h: 312 };
    },
    (y) => note(y, 'Not "image adverts work better"', 'Neither appeal wins overall: the effect depends on the consumer\'s self-monitoring.', { align: 'middle', size: 17, fill: C.panel, edge: C.panelEdge }),
  ],
  'A two-by-two grid: high self-monitors pay more for a product with an image appeal, low self-monitors pay more for one with a quality claim. Applied to the watch example, the celebrity party advert goes to high self-monitors and the accuracy advert to low self-monitors.',
  'The finding is an interaction: neither appeal wins for everyone.', H2.work);
}

// 05 Auty and Lewis product placement
F('05-auty-lewis-placement', 'Product placement: Auty and Lewis (2004)', '', [
  (y) => card(250, y, 400, { title: 'Children', align: 'middle', tsize: 20 }),
  (y) => ({ s: arrow(380, y - 16, 240, y + 28, { w: 3 }) + arrow(520, y - 16, 660, y + 28, { w: 3 }), h: 26 }),
  (y) => row(y, [
    { kicker: 'PLACEMENT', title: 'Home Alone clip', body: 'Pepsi appears', fill: C.cream, edge: C.olive },
    { kicker: 'CONTROL', title: 'Control clip', body: 'no brand' },
  ], { gap: 120, card: { size: 17, tsize: 20, align: 'middle' } }),
  vArrows([240, 660], 24),
  (y) => card(250, y, 400, { title: 'Later offered a choice of cola', align: 'middle', tsize: 19 }),
  vArrows([450], 24),
  (y) => note(y, 'Result', 'Children who saw the placement were **more likely to choose Pepsi**, and the effect was **strongest for those who had seen the film before**.', { align: 'middle', size: 17 }),
  (y) => row(y, [
    { kicker: 'EXPLANATION 1', title: 'Reminder', body: 'Supported by the effect being strongest in children who had already seen the film.', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'EXPLANATION 2', title: 'Mere exposure (Zajonc)', body: 'Repeated exposure to a stimulus increases liking for it, even without conscious recognition.', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 20, vcenter: false, card: { size: 16, tsize: 19, bfill: C.ink } }),
  (y) => P('Ethics: research with children needs parental consent, and raises whether children can recognise placement as advertising.', { anchor: 'middle', size: 16 })(y),
],
'Children watched either a Home Alone clip in which Pepsi appears or a control clip, then chose a cola. Those who saw the placement more often chose Pepsi, most of all if they had seen the film before. Two explanations follow: reminder and mere exposure.',
'Placement nudged choice, most strongly as a reminder for children who knew the film.', H2.pp);

// 06 Fischer et al. (1991)
F('06-fischer-logos', 'Children and logos: Fischer et al. (1991)', '', [
  (y) => study(y, { name: 'Logo recognition in young children', tag: 'matching task', cols: [
    ['PROCEDURE', 'Children aged **3 to 6** matched logos to pictures of products.'],
    ['RESULTS', 'Recognition **rose with age**. Many young children matched Old Joe the Camel, a cartoon used to advertise cigarettes, to a picture of a cigarette.'],
    ['CONCLUSION', 'Children learn brand associations long before they understand the purpose of advertising.'],
  ] }),
  (y) => row(y, [
    { kicker: '+ APPLICATION', body: 'Raises concern about advertising aimed at, or reaching, children.', fill: C.tealLight, edge: C.tealDark },
    { kicker: '− VALIDITY', kfill: C.rust, body: 'Matching shows **recognition**, not liking or intention to buy; children may have guessed on some trials. It did **not** measure smoking.' },
  ], { gap: 14, vcenter: false, card: { size: 16, bfill: C.ink } }),
],
'Study card for Fischer et al. (1991): children aged 3 to 6 matched logos to product pictures; recognition rose with age and many matched Old Joe the Camel to a cigarette. An application point and validity limits follow.',
'Young children recognise brands before they understand what advertising is for.', H2.brand);

// 07 Brand awareness, image and slogans
F('07-brands-and-slogans', 'Brands and slogans', '', [
  (y) => row(y, [
    { kicker: 'BRAND AWARENESS', title: 'Recognition and recall', body: 'How well consumers recognise or recall a brand.', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'BRAND IMAGE', title: 'Associations and feelings', body: 'The set of associations and feelings attached to a brand.', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { gap: 20, vcenter: false, card: { size: 17, tsize: 20, bfill: C.ink } }),
  (y) => P('A **slogan** is a short phrase that communicates the brand\'s identity.', { anchor: 'middle', size: 18, fill: C.ink })(y),
  (y) => row(y, [
    { kicker: 'FUNCTIONS OF SLOGANS', body: ['increase awareness', 'build a brand image', 'differentiate the brand from rivals', 'give continuity across campaigns'], bullets: true },
    { kicker: 'GUIDELINES: KOHLI ET AL. (2007)', body: ['treat it as a long-term investment', 'use it to position the brand', 'link it clearly to the brand name', 'keep it consistent and repeated, so the link is learned'], bullets: true },
  ], { gap: 20, vcenter: false, card: { size: 17, bfill: C.ink, gap: 6 } }),
],
'Brand awareness (recognising or recalling a brand) is contrasted with brand image (associations and feelings). Below, the four functions of slogans and Kohli et al.\'s (2007) guidelines for effective slogans.',
'Awareness is recognition; image is association. Slogans build both.', H2.brand);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
