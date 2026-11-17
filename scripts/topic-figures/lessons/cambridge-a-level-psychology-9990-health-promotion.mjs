import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-psychology-9990-health-promotion';
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
  fear: '## 3.5.1 Fear arousal',
  info: '## 3.5.1 Providing information',
  school: '## 3.5.2 Schools: healthy eating',
  work: '## 3.5.2 Worksites: health and safety',
  opt: '## 3.5.3 Unrealistic optimism',
  pos: '## 3.5.3 Positive psychology',
};

// 01 Janis and Feshbach
F('01-janis-feshbach', 'Janis and Feshbach (1953): fear appeals', 'High-school students heard a talk on dental hygiene', [
  (y) => {
    const groups = [['Minimal fear', 'most change', 3, C.teal], ['Moderate fear', '', 2, C.tealLight], ['Strong fear', 'least change', 1, C.cream], ['Control', 'talk on another topic', 0, C.bg]];
    let s = panel(30, y, 840, 270) + T(50, y + 32, 'CHANGE IN REPORTED DENTAL BEHAVIOUR A WEEK LATER (rank order)', { size: 15, weight: 700, fill: C.tealDark });
    groups.forEach(([g, n, r, f], i) => {
      const yy = y + 54 + i * 52;
      s += T(230, yy + 28, g, { size: 18, weight: 700, anchor: 'end' });
      if (r > 0) s += `<rect x="250" y="${yy + 6}" width="${r * 140}" height="34" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`;
      s += T(r > 0 ? 262 + r * 140 : 254, yy + 29, n, { size: 16, fill: C.muted, weight: 600 });
    });
    s += T(850, y + 260, 'bar lengths show order only: the lesson gives no sizes', { size: 15, fill: C.muted, anchor: 'end', italic: true });
    return { s, h: 270 };
  },
  (y) => row(y, [
    { kicker: 'WHY STRONG FEAR CAN BACKFIRE', body: 'A very frightening message with **no clear way to cope** → people reduce anxiety by **avoiding or dismissing** the message instead of changing.', fill: '#f6e3d8', edge: C.rust, kfill: C.rust },
    { kicker: 'WHAT HELPS', body: 'Pair the fear appeal with **specific, achievable advice**.', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 14, fr: [1.6, 1], vcenter: false, card: { size: 16, bfill: C.ink } }),
  (y) => row(y, [
    { kicker: '+ STRENGTHS', body: 'Control group; standardised talks.', fill: C.tealLight, edge: C.tealDark },
    { kicker: '− WEAKNESSES', kfill: C.rust, body: 'Self-reported behaviour after only a week; ethics of deliberately frightening young people.' },
  ], { gap: 14, fr: [1, 1.8], vcenter: false, card: { size: 16, bfill: C.ink } }),
],
'Four groups heard a strong, moderate or minimal fear talk on dental hygiene, or a talk on another topic. A week later the minimal fear group showed the most change in reported behaviour and the strong fear group the least; bars show order only. Notes explain why strong fear can backfire, followed by evaluation.',
'Minimal fear changed behaviour most; strong fear least.', H2.fear);

// 02 Information: Lewin and the limits of information
F('02-providing-information', 'Providing information', 'Lewin et al. (1992): heart attack patients', [
  (y) => row(y, [
    { kicker: 'HEART MANUAL GROUP', title: 'Self-help rehabilitation', body: 'information, exercise and relaxation guidance', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'COMPARISON GROUP', title: 'Standard information', body: 'and informal counselling' },
  ], { gap: 20, card: { size: 16, tsize: 19, align: 'middle' } }),
  (y) => ({ s: arrow(233, y - 16, 380, y + 26, { w: 3 }) + arrow(667, y - 16, 520, y + 26, { w: 3 }), h: 24 }),
  (y) => card(30, y, 840, { kicker: 'FOLLOW-UP OVER MONTHS: THE HEART MANUAL GROUP SHOWED', body: ['better psychological adjustment, such as less anxiety and depression', 'less use of health services'], bullets: true, size: 16, fill: C.cream, edge: C.olive, kfill: C.olive, bfill: C.ink, gap: 4 }),
  (y) => note(y, 'Knowing is not doing', 'Many smokers know smoking is harmful. Information works best when it is **specific**, from a **credible source**, and tells people **how** to change.', { size: 17, fill: C.panel, edge: C.panelEdge }),
  (y) => row(y, [
    { kicker: 'FEAR AROUSAL', body: 'works through **emotion**' },
    { kicker: 'BOTH', body: 'aim to change health beliefs', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'PROVIDING INFORMATION', body: 'works through **knowledge**' },
  ], { gap: 14, card: { size: 17, align: 'middle', bfill: C.ink } }),
],
'Heart attack patients given the Heart Manual (information, exercise and relaxation guidance) showed better adjustment and less use of health services over months than a comparison group given standard information. A note explains that information works best when specific, credible and practical, and a final row compares fear arousal (emotion) with information (knowledge).',
'Information helps most when it shows people how to change.', H2.info);

// 03 Food Dudes
F('03-food-dudes', 'Food Dudes: Tapper et al. (2003)', 'Healthy eating in primary schools', [
  (y) => row(y, [
    { kicker: 'MODELLING', title: 'Video heroes', body: 'Admired peer characters enjoy fruit and vegetables and battle villains who want to stop them. Children imitate them.', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'POSITIVE REINFORCEMENT', title: 'Small rewards', body: 'Children who eat the target foods receive rewards such as stickers.', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { gap: 20, vcenter: false, card: { size: 16, tsize: 20, bfill: C.ink } }),
  (y) => ({ s: arrow(233, y - 16, 380, y + 26, { w: 3 }) + arrow(667, y - 16, 520, y + 26, { w: 3 }), h: 24 }),
  (y) => card(200, y, 500, { title: 'Fruit and vegetable consumption rose', body: 'at school and, in some measures, at home', align: 'middle', tsize: 20, size: 16, fill: C.mustard, edge: C.ink, bfill: C.ink }),
  (y) => evalGrid(y, [
    ['Objective data', 'Measuring what children actually eat, rather than asking them.', '+'],
    ['Confounds', 'Schools vary, so differences between schools may confound results.', '−'],
    ['Children', 'Parental consent needed; care not to create pressure around eating.', '−'],
    ['Long term', 'Do habits persist once rewards stop?', '?'],
  ], { size: 16 }),
],
'The Food Dudes programme combines modelling (children imitate admired video peers who enjoy fruit and vegetables) with positive reinforcement (stickers for eating the target foods). Consumption rose at school and in some measures at home. An evaluation grid covers objective data, confounds, ethics with children and persistence.',
'Modelling plus rewards increased fruit and vegetable eating.', H2.school);

// 04 Fox token economy
F('04-fox-token-economy', 'A token economy for safety: Fox et al. (1987)', 'Two open-pit mines in the USA with high accident rates', [
  (y) => row(y, [
    { kicker: 'EARN TRADING STAMPS FOR', body: ['working without lost-time accidents', 'following safety rules', 'safety suggestions'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'LOSE STAMPS IF', kfill: C.rust, body: ['they had an accident', 'their team had an accident'], bullets: true, fill: '#f6e3d8', edge: C.rust },
    { kicker: 'EXCHANGE', body: 'stamps for goods', fill: C.cream, edge: C.olive },
  ], { gap: 14, fr: [1.3, 1.1, 0.8], vcenter: false, card: { size: 16, bfill: C.ink, gap: 4 } }),
  vArrows([450], 26),
  (y) => row(y, [
    { title: 'Days lost to accidents fell sharply', body: 'and stayed low over the following years' },
    { title: 'Cost of accidents fell', body: 'by more than the cost of the stamps' },
  ], { gap: 20, card: { size: 16, tsize: 19, align: 'middle', fill: C.mustard, edge: C.ink, bfill: C.ink } }),
  (y) => row(y, [
    { kicker: '+ STRENGTH', body: 'Long period: a longitudinal field study with high ecological validity.', fill: C.tealLight, edge: C.tealDark },
    { kicker: '− WEAKNESSES', kfill: C.rust, body: 'Rewarding **reported** accident-free periods may encourage under-reporting of minor injuries; no randomised control group.' },
  ], { gap: 14, vcenter: false, card: { size: 16, bfill: C.ink } }),
],
'Miners earned trading stamps for working without lost-time accidents, following safety rules and making safety suggestions, lost them if they or their team had an accident, and exchanged them for goods. Days lost to accidents fell sharply and stayed low, and accident costs fell by more than the stamps cost. A strength and weaknesses follow.',
'Rewards for safe work cut accidents, though some fall may be under-reporting.', H2.work);

// 05 Unrealistic optimism
F('05-unrealistic-optimism', 'Unrealistic optimism: Weinstein (1980)', 'College students compared their own chances with other students of the same sex', [
  (y) => {
    const x0 = 120, x1 = 780, mid = (x0 + x1) / 2;
    let s = panel(30, y, 840, 250);
    s += `<line x1="${x0}" y1="${y + 120}" x2="${x1}" y2="${y + 120}" stroke="${C.ink}" stroke-width="3"/>`;
    s += `<line x1="${mid}" y1="${y + 60}" x2="${mid}" y2="${y + 180}" stroke="${C.ink}" stroke-width="3" stroke-dasharray="7 6"/>` + T(mid, y + 50, 'average student', { size: 17, weight: 700, anchor: 'middle' });
    s += T(x0, y + 156, 'less likely than average', { size: 16, fill: C.muted }) + T(x1, y + 156, 'more likely than average', { size: 16, fill: C.muted, anchor: 'end' });
    s += `<circle cx="${mid - 170}" cy="${y + 120}" r="16" fill="#f6e3d8" stroke="${C.rust}" stroke-width="3"/>` + T(mid - 170, y + 210, 'negative events', { size: 17, weight: 700, anchor: 'middle', fill: C.rust }) + T(mid - 170, y + 232, 'e.g. heart attack, drinking problem', { size: 15, anchor: 'middle', fill: C.muted });
    s += `<circle cx="${mid + 170}" cy="${y + 120}" r="16" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="3"/>` + T(mid + 170, y + 210, 'positive events', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
    s += arrow(mid - 8, y + 92, mid - 150, y + 92, { color: C.rust, marker: 'ahR', w: 3 }) + arrow(mid + 8, y + 92, mid + 150, y + 92, { color: C.tealDark, marker: 'ahT', w: 3 });
    s += T(850, y + 30, 'positions illustrative', { size: 15, fill: C.muted, anchor: 'end', italic: true });
    return { s, h: 250 };
  },
  (y) => note(y, 'A group-level error', 'The average person cannot be below average. If people think **"it won\'t happen to me"**, they disregard advice on screening, safe driving or diet. Campaigns can show that people **like the audience** are affected.', { size: 17 }),
],
'A scale centred on the average student. On average, students placed their chances of negative events such as a heart attack below average and their chances of positive events above average. A note explains why this is an error and how campaigns can counter it. Positions are illustrative.',
'Students rated bad events as less likely, and good events as more likely, for themselves.', H2.opt);

// 06 Seligman's three focuses
F('06-seligman-three-lives', 'Positive psychology: three focuses', 'Seligman (2004): strengths, well-being and flourishing, not only illness', [
  (y) => row(y, [
    { kicker: '1', title: 'The pleasant life', body: 'Experiencing positive emotions about the past, present and future.', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: '2', title: 'The good life', body: 'The engaged life: using one\'s strengths in absorbing activities.', fill: C.tealLight, edge: C.tealDark },
    { kicker: '3', title: 'The meaningful life', body: 'Using strengths in the service of something larger than oneself.', fill: C.panel },
  ], { gap: 14, vcenter: false, card: { size: 17, tsize: 21, bfill: C.ink } }),
  (y) => note(y, '', 'Do not confuse the **good life** (engagement) with the **pleasant life** (positive emotion).', { align: 'middle', size: 17, fill: C.panel, edge: C.rust }),
],
'Three cards: the pleasant life (positive emotions about past, present and future), the good or engaged life (using strengths in absorbing activities) and the meaningful life (using strengths for something larger than oneself). A note warns not to confuse the good life with the pleasant life.',
'Pleasant: positive emotion. Good: engagement. Meaningful: something larger.', H2.pos);

// 07 Shoshani and Steinmetz
F('07-shoshani-steinmetz', 'Key study: Shoshani and Steinmetz (2014)', 'A school-based positive psychology programme in Israel', [
  (y) => study(y, { name: 'Middle-school students: intervention vs control', tag: 'field intervention', cols: [
    ['AIM', 'To evaluate a school programme to promote adolescents\' mental health and well-being.'],
    ['DESIGN', 'Intervention classes got the programme; a control group did not. Whole classes or schools took part, so **no individual random allocation**.'],
    ['MEASURES', 'Questionnaires before and after: psychological distress, self-esteem, optimism.'],
  ], hiLast: false }),
  (y) => row(y, [
    { kicker: 'RESULTS', body: 'Intervention group: **reduced** distress (anxiety, depression) and **gains** in self-esteem and optimism, which the control group did not show.' },
    { kicker: 'CONCLUSION', body: 'Positive psychology can be applied in schools to improve students\' mental health.', fill: C.cream, edge: C.olive },
  ], { gap: 14, vcenter: false, card: { size: 16, bfill: C.ink } }),
  (y) => evalGrid(y, [
    ['Application', 'Inexpensive; delivered in ordinary classes.', '+'],
    ['Psychometrics', 'Quantitative data, but self-report open to social desirability.', '±'],
    ['Confounds', 'Not randomly allocated individuals: school or class differences could explain results.', '−'],
    ['Culture', 'May not transfer to cultures with different ideas about happiness.', '−'],
    ['Nomothetic', 'Group averages may hide students who did not benefit.', '−'],
  ], { size: 16 }),
],
'Study card for Shoshani and Steinmetz (2014): aim, design with intervention and control classes without individual random allocation, and before-and-after questionnaires; results showing reduced distress and gains in self-esteem and optimism; conclusion; and an evaluation grid.',
'A class-based programme reduced distress and raised self-esteem and optimism.', H2.pos);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
