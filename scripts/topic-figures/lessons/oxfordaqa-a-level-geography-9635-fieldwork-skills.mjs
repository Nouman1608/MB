// Topic figures for oxfordaqa-a-level-geography-9635-fieldwork-skills
import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

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

// Tree node helper
const node = (cx, y, w, title, sub, o = {}) => {
  const c = card(cx - w / 2, y, w, { title, body: sub, align: 'middle', size: 16, tsize: 19, pad: 14, fill: o.fill || C.panel, edge: o.edge || C.panelEdge, minH: o.minH || 0, vcenter: true });
  return { ...c, cx, top: y, bot: y + c.h };
};
const link = (a, b) => path(`M${a.cx},${a.bot} L${a.cx},${(a.bot + b.top) / 2} L${b.cx},${(a.bot + b.top) / 2} L${b.cx},${b.top}`, { w: 2.5 });

// ---- end helpers ----

// Timeline helper: vertical, years on the left
function vtimeline(y, items, o = {}) {
  const LX = o.lx ?? 150, W = 870 - LX - 40, sz = o.size ?? 16, ts = o.tsize ?? 18;
  let s = '', cy = y;
  const mk = (it, yy) => card(LX + 40, yy, W, { title: it.title, body: it.body, size: sz, tsize: ts, pad: 13, fill: it.fill, edge: it.edge, tgap: 3 });
  const total = items.map((it) => mk(it, 0)).reduce((a, c) => a + c.h + 10, -10);
  s += `<line x1="${LX}" y1="${y + 8}" x2="${LX}" y2="${y + total - 8}" stroke="${C.ink}" stroke-width="4"/>`;
  items.forEach((it) => {
    const c = mk(it, cy);
    s += c.s + `<circle cx="${LX}" cy="${cy + c.h / 2}" r="${it.d ? 10 : 6}" fill="${it.dot || (it.d ? C.mustard : C.panel)}" stroke="${C.ink}" stroke-width="3"/>`;
    if (it.d) s += para(LX - 20, cy + c.h / 2 + 6 - (tw(it.d, 17, 700) > LX - 50 ? 10 : 0), it.d, LX - 40, { size: 17, weight: 700, anchor: 'end', fill: C.ink, lh: 20 }).s;
    cy += c.h + 10;
  });
  return { s, h: total };
}
// Horizontal arrow chain of cards (wraps to rows of `per`), returns {s,h}
function chain(y, items, o = {}) { return row(y, items, { arrows: true, ...o }); }
// Section label
const LBL = (s, o = {}) => (y) => ({ s: T(o.x ?? 30, y + 14, s, { size: 15, weight: 700, fill: o.fill || C.muted, anchor: o.anchor || 'start' }), h: 16 });
// Spectrum: horizontal axis with labelled positions. items [{pos 0..1, title, body, fill}], ends [left,right]
function spectrum(y, ends, items, o = {}) {
  const x0 = 60, x1 = 840, ay = y + 40;
  let s = `<line x1="${x0}" y1="${ay}" x2="${x1}" y2="${ay}" stroke="${C.ink}" stroke-width="4" marker-start="url(#ah)" marker-end="url(#ah)"/>`;
  s += T(x0 - 10, y + 12, ends[0], { size: 17, weight: 700, fill: C.tealDark }) + T(x1 + 10, y + 12, ends[1], { size: 17, weight: 700, anchor: 'end', fill: C.rust });
  const cw = o.cw ?? 250; let maxH = 0; const cards = [];
  items.forEach((it, i) => {
    const px = x0 + it.pos * (x1 - x0);
    const cx = Math.min(Math.max(px - cw / 2, 30), 870 - cw);
    const c = card(cx, ay + 40 + (it.lane || 0) * (o.laneH ?? 0), cw, { title: it.title, body: it.body, size: 16, tsize: 18, pad: 14, fill: it.fill || C.panel, edge: it.edge || C.panelEdge, align: 'middle' });
    cards.push(c); maxH = Math.max(maxH, (it.lane || 0) * (o.laneH ?? 0) + c.h);
    s += `<line x1="${px}" y1="${ay}" x2="${px}" y2="${ay + 40 + (it.lane || 0) * (o.laneH ?? 0)}" stroke="${C.ink}" stroke-width="2.5" stroke-dasharray="5 5"/>` + `<circle cx="${px}" cy="${ay}" r="10" fill="${it.dot || C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
    s += c.s;
  });
  return { s, h: 80 + maxH };
}
// ---- end of local helpers ----

export const slug = 'oxfordaqa-a-level-geography-9635-fieldwork-skills';
const H = {
  what: '## What counts as a personal investigation',
  plan: '## 3.5.2.1 Planning and preparation',
  coll: '## 3.5.2.2 Collection of data',
  pres: '## 3.5.2.3 Presentation of data',
  ana: '## 3.5.2.4 Analysis of data',
  we: '## Worked example: a familiar fieldwork answer',
};

// 01 Enquiry sequence and Unit 5
F('01-enquiry-stages', 'Five stages of a fieldwork enquiry', 'Unit 5: 60 marks, 15 of them on your own investigation', [
  (y) => chain(y, [
    { kicker: '3.5.2.1', title: 'Planning', body: 'Aim, hypothesis, location, secondary research, risk', fill: C.tealLight, edge: C.tealDark },
    { kicker: '3.5.2.2', title: 'Collection', body: 'Primary and secondary data; sampling; pilot' },
    { kicker: '3.5.2.3', title: 'Presentation', body: 'Maps, graphs, photos, sketches, tables, quotations' },
    { kicker: '3.5.2.4', title: 'Analysis', body: 'Patterns, trends, anomalies; statistics' },
    { kicker: '3.5.2.5', title: 'Conclusions', body: 'Accept or reject; ethics; evaluate', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { gap: 26, card: { size: 15, tsize: 17, pad: 12 }, vcenter: false }),
  (y) => segbar(y, [
    { label: 'Own investigation', sub: '15 marks', frac: 15, fill: C.cream },
    { label: 'Rest of Unit 5', sub: '45 marks', frac: 45, fill: C.tealLight },
  ], { h: 78, size: 17 }),
  (y) => ({ s: T(450, y + 12, 'Unit 5 marks, bar to scale', { size: 15, anchor: 'middle', fill: C.muted }), h: 14 }),
  (y) => row(y, [
    { title: 'Acceptable alternatives', body: ['Enquiries within the school grounds', 'Interviewing people in school or at home', 'Raw, unprocessed data from the teacher, which you sample and judge'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { title: 'Not acceptable', body: ['Pre-processed data handed over ready for analysis: "there must be some element of planning and selecting"'], bullets: true, fill: C.panel, edge: C.rust },
  ], { card: { size: 16, tsize: 19 }, vcenter: false }),
], 'Five linked stages of a fieldwork enquiry, from planning to conclusions, with their specification numbers. A bar to scale shows 15 of Unit 5\'s 60 marks assess the student\'s own investigation. Below, acceptable alternatives to practical fieldwork and what is not acceptable.',
'Five stages of enquiry; 15 of the 60 marks are on your own investigation.', H.what, { gap: 14 });

// 02 Aim, hypothesis, justification
F('02-aim-to-hypothesis', 'From aim to justified hypothesis', 'The guide\'s invented Marton example', [
  (y) => stack(y, [
    { kicker: 'AIM', title: 'What you want to find out', body: 'To investigate how pedestrian footfall changes with distance from the centre of Marton.' },
    { kicker: 'HYPOTHESIS', title: 'A testable prediction based on theory', body: 'Footfall decreases with distance from the main square.', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'JUSTIFICATION', title: 'Link it to a concept you have studied', body: 'Bid-rent theory: the most accessible central locations attract the highest density of shops and therefore of shoppers.', fill: C.tealLight, edge: C.tealDark },
  ], { arrows: true, gap: 40, card: { size: 16, tsize: 19 } }),
  (y) => note(y, 'Or a research question', 'An open question, used when a prediction is not appropriate, for example with qualitative data.', { fill: C.panel, edge: C.panelEdge, size: 16 }),
], 'Three linked boxes using the invented Marton example: the aim (how footfall changes with distance from the centre), the hypothesis (footfall decreases with distance from the main square) and its justification in bid-rent theory. A note explains when to use a research question instead.',
'Aim, then a testable hypothesis, justified by a theory you have studied.', H.plan);

// 03 Risk matrix
{
  const blocks = [(y) => {
    const gx = 200, gy = y + 20, cw = 210, ch = 96;
    let s = '';
    const lv = ['Low', 'Medium', 'High'];
    const shade = [[C.tealLight, C.tealLight, C.cream], [C.tealLight, C.cream, C.sand], [C.cream, C.sand, C.sand]];
    for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) s += `<rect x="${gx + c * cw}" y="${gy + (2 - r) * ch}" width="${cw}" height="${ch}" fill="${shade[r][c]}" stroke="${C.ink}" stroke-width="2"/>`;
    lv.forEach((l, i) => { s += T(gx + i * cw + cw / 2, gy + 3 * ch + 26, l, { size: 16, weight: 600, anchor: 'middle' }); s += T(gx - 14, gy + (2 - i) * ch + ch / 2 + 6, l, { size: 16, weight: 600, anchor: 'end' }); });
    s += T(gx + 1.5 * cw, gy + 3 * ch + 54, 'LIKELIHOOD', { size: 16, weight: 700, anchor: 'middle', fill: C.muted });
    s += `<text transform="translate(60,${gy + 1.5 * ch}) rotate(-90)" text-anchor="middle" font-size="16" font-weight="700" fill="${C.muted}">SEVERITY</text>`;
    const pin = (cx, cy, n) => badge(cx, cy, 17, n, C.mustard);
    s += pin(gx + 1.5 * cw, gy + ch / 2, '1') + pin(gx + cw, gy + ch / 2 + 22, '2') + pin(gx + 1.5 * cw, gy + 1.5 * ch, '3') + pin(gx + 0.5 * cw, gy + ch / 2, '4');
    return { s, h: 3 * ch + 64 };
  },
  (y) => table(y, [{ w: 0.3, head: '' }, { w: 1.3, head: 'Hazard' }, { w: 2, head: 'Control measure' }], [
    ['1', 'Traffic when counting pedestrians', 'Stand away from the kerb; work only at marked crossings'],
    ['2', 'Fast-flowing water in a river (low to medium likelihood)', 'Do not enter above knee depth; check river levels beforehand'],
    ['3', 'Hot weather', 'Carry water; work in shade; limit time outdoors'],
    ['4', 'Lone working', 'Work in groups; agree a meeting time and carry a phone'],
  ], { size: 16, hsize: 17 })];
  F('03-risk-assessment', 'Risk assessment: likelihood and severity', 'Every hazard needs a control measure', blocks,
    'A three-by-three grid of likelihood against severity, with four numbered hazards placed on it: traffic (medium, high), fast-flowing river water (low to medium, high), hot weather (medium, medium) and lone working (low, high). A table gives the control measure for each.',
    'Judge each hazard\'s likelihood and severity, then set a control measure.', H.plan);
}

// 04 Stratified sample worked
F('04-stratified-sample', 'Worked stratified sample', '80 questionnaires on a new market, split by age using census data', [
  (y) => segbar(y, [
    { label: '18-34: 28%', sub: '80 x 0.28 = 22.4 → 22', frac: 28, fill: C.tealLight },
    { label: '35-64: 47%', sub: '80 x 0.47 = 37.6 → 38', frac: 47, fill: C.teal },
    { label: '65+: 25%', sub: '80 x 0.25 = 20', frac: 25, fill: C.cream },
  ], { h: 92, size: 18 }),
  (y) => ({ s: T(450, y + 12, 'Bar widths to scale by share of adults in the area', { size: 15, anchor: 'middle', fill: C.muted }), h: 14 }),
  (y) => {
    let s = '', x = 30;
    [[22, C.tealLight], [38, C.teal], [20, C.cream]].forEach(([n, f]) => { for (let i = 0; i < n; i++) { const col = Math.floor((x - 30) / 21); s += `<circle cx="${40 + ((col) % 40) * 21}" cy="${y + 12 + Math.floor(col / 40) * 24}" r="8.5" fill="${f}" stroke="${C.ink}" stroke-width="1.8"/>`; x += 21; } });
    return { s, h: 48 };
  },
  (y) => ({ s: T(450, y + 12, 'Check: 22 + 38 + 20 = 80 people (one circle each)', { size: 17, weight: 700, anchor: 'middle' }), h: 16 }),
  (y) => note(y, 'Why stratify?', 'It makes the sample representative of age groups, which matters if views on the market are likely to differ by age.', { size: 16, fill: C.tealLight, edge: C.tealDark }),
], 'A bar to scale divides 80 questionnaires by the area\'s age shares: 28% aged 18-34 gives 22 people, 47% aged 35-64 gives 38, and 25% aged 65 and over gives 20. Eighty circles show the split, which checks to 80. A note explains why stratifying by age matters.',
'Multiply the sample size by each group\'s share, round, then check the total.', H.coll, { gap: 14 });

// 05 Sampling grid
{
  const blocks = [(y) => {
    const cx0 = 200, cw = 223, ch = 150;
    let s = '';
    ['Random', 'Systematic', 'Stratified'].forEach((h, i) => { s += T(cx0 + i * cw + cw / 2, y + 18, h, { size: 19, weight: 700, anchor: 'middle' }); });
    ['Points', 'Lines (transects)', 'Areas (quadrats)'].forEach((h, r) => { s += para(30, y + 40 + r * ch + ch / 2 - 4, `**${h}**`, 150, { size: 17, fill: C.ink }).s; });
    let seed = 3; const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) {
      const x = cx0 + c * cw + 6, yy = y + 32 + r * ch + 6, w = cw - 12, h = ch - 12;
      s += `<rect x="${x}" y="${yy}" width="${w}" height="${h}" rx="8" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2"/>`;
      if (c === 2) s += `<rect x="${x + w * 0.6}" y="${yy}" width="${w * 0.4}" height="${h}" rx="0" fill="${C.cream}" opacity="0.8"/>` + `<line x1="${x + w * 0.6}" y1="${yy}" x2="${x + w * 0.6}" y2="${yy + h}" stroke="${C.olive}" stroke-width="2" stroke-dasharray="5 4"/>`;
      let pts = [];
      if (c === 0) for (let i = 0; i < 6; i++) pts.push([x + 16 + rnd() * (w - 32), yy + 16 + rnd() * (h - 32)]);
      if (c === 1) for (let i = 0; i < 3; i++) for (let j = 0; j < 2; j++) pts.push([x + w * (0.2 + i * 0.3), yy + h * (0.3 + j * 0.4)]);
      if (c === 2) { [[0.15, 0.3], [0.4, 0.3], [0.15, 0.72], [0.4, 0.72]].forEach(([a, b]) => pts.push([x + w * a, yy + h * b])); [[0.8, 0.3], [0.8, 0.72]].forEach(([a, b]) => pts.push([x + w * a, yy + h * b])); }
      if (r === 0) pts.forEach(([a, b]) => { s += `<circle cx="${a}" cy="${b}" r="7" fill="${C.tealDark}"/>`; });
      if (r === 1) (c === 0 ? [0.18, 0.47, 0.62] : c === 1 ? [0.2, 0.5, 0.8] : [0.2, 0.45, 0.8]).forEach((f) => { const a = x + w * f; s += `<line x1="${a}" y1="${yy + 12}" x2="${c === 0 ? a + 14 : a}" y2="${yy + h - 12}" stroke="${C.tealDark}" stroke-width="4"/>`; });
      if (r === 2) pts.forEach(([a, b]) => { s += `<rect x="${a - 11}" y="${b - 11}" width="22" height="22" fill="none" stroke="${C.tealDark}" stroke-width="3"/>`; });
    }
    return { s, h: 32 + 3 * ch };
  },
  (y) => row(y, [
    { title: 'Random', body: 'Locations chosen by chance.' },
    { title: 'Systematic', body: 'At regular intervals, e.g. every 100 m.' },
    { title: 'Stratified', body: 'In proportion to sub-groups or zones (shaded), e.g. by age.', fill: C.cream, edge: C.olive },
  ], { x: 200, w: 670, card: { size: 15, tsize: 17, pad: 13 } })];
  F('05-sampling-grid', 'Three sampling methods, three shapes', 'Random, systematic and stratified, at points, along lines or within areas', blocks,
    'A three-by-three grid of schematic plan views: random, systematic and stratified sampling, each applied at points, along line transects and within area quadrats. In the stratified column a shaded zone receives samples in proportion to its size.',
    'Any of the three methods can be applied at points, along lines or within areas.', H.coll, { gap: 14 });
}

// 06 Four quality words
F('06-accuracy-precision-reliability-validity', 'Four words that are often confused', null, [
  (y) => grid(y, [
    { kicker: 'ACCURACY', title: 'Close to the true value?', body: 'How close a measurement is to the true value.', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'PRECISION', title: 'How fine is the scale?', body: 'E.g. to the nearest millimetre rather than centimetre.', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'RELIABILITY', title: 'Same result if repeated?', body: 'Whether repeating the method would give similar results.', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'VALIDITY', title: 'Measuring the right thing?', body: 'Whether the method actually measures what the hypothesis is about.', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], 2, { card: { size: 16, tsize: 19 } }),
  (y) => {
    let s = panel(30, y, 840, 150);
    s += T(50, y + 34, 'Example: one footfall count on a rainy Monday', { size: 18, weight: 700 });
    const ck = (x, lab, ok) => `<circle cx="${x}" cy="${y + 90}" r="18" fill="${ok ? C.tealLight : C.panel}" stroke="${ok ? C.tealDark : C.rust}" stroke-width="3"/>` + T(x, y + 97, ok ? '✓' : '✗', { size: 20, weight: 700, anchor: 'middle', fill: ok ? C.tealDark : C.rust }) + T(x + 28, y + 96, lab, { size: 17, weight: 600 });
    s += ck(70, 'may be accurate for that moment', true) + ck(470, 'not reliable', false) + ck(660, 'not valid as typical', false);
    s += T(50, y + 136, 'A single count cannot be repeated, and one wet weekday does not represent typical footfall.', { size: 15, fill: C.muted });
    return { s, h: 150 };
  },
], 'Four cards define accuracy (close to the true value), precision (fineness of scale), reliability (similar results if repeated) and validity (measuring what the hypothesis is about). An example: one footfall count on a rainy Monday may be accurate for that moment but is neither reliable nor valid as typical footfall.',
'Accurate is not the same as reliable, and neither guarantees validity.', H.coll);

// 07 Present and analyse: matching techniques
F('07-matching-techniques', 'Match the technique to the data', 'Presentation and analysis must be justified', [
  (y) => table(y, [{ w: 1.2, head: 'Data or purpose' }, { w: 1.4, head: 'Technique' }], [
    ['Footfall at named sites', 'Located proportional circles on a base map'],
    ['Footfall against distance', 'Scatter graph; Spearman\'s rank (paired continuous data)'],
    ['River channel shape', 'Cross-section'],
    ['Land use', 'Annotated photographs'],
    ['Counts in categories', 'Chi-square'],
    ['Comparing sites', 'Central tendency and dispersion'],
    ['Interviews (qualitative)', 'Code into themes, count, quote briefly'],
  ], { size: 16, hsize: 18 }),
  (y) => note(y, 'Always return to the hypothesis', 'Integrate presentation with location (graphs on a base map often show spatial pattern more clearly), and say what each pattern shows.', { size: 16 }),
], 'Table matching data to presentation and analysis techniques: proportional circles for footfall at sites, scatter graph and Spearman\'s rank for footfall against distance, cross-section for channel shape, annotated photographs for land use, chi-square for categories, central tendency and dispersion for comparing sites, and coding for interviews.',
'Choose each technique to fit the data, and justify the choice.', H.pres);

// 08 Familiar answer anatomy
F('08-familiar-answer', 'Anatomy of a familiar fieldwork answer', '"Evaluate the sampling strategy you used." [9]', [
  (y) => steps(y, [
    { title: 'State the method precisely', body: 'Systematic: five-minute counts every 100 m along a transect from the main square.' },
    { title: 'Strength linked to the hypothesis', body: 'Even coverage; footfall plotted against distance for Spearman\'s rank.' },
    { title: 'Limitations with evidence', body: 'Missed clusters between points; a bus stop inflated one count.', fill: C.panel },
    { title: 'Reliability', body: 'One afternoon only: a very small sample in time.', fill: C.panel },
    { title: 'Specific improvement', body: 'Stratified by land-use zone, repeated on a weekday and a weekend.' },
    { title: 'Judgement', body: 'Adequate for the overall trend; limited for explaining local anomalies.', fill: C.cream },
  ], { size: 16, tsize: 18, gap: 10, pad: 14, highlight: 5 }),
], 'Six steps of a model familiar fieldwork answer on sampling: state the method, give a strength linked to the hypothesis, limitations with evidence, reliability, a specific improvement and an overall judgement.',
'Method, strength, limitation, reliability, improvement, judgement.', H.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
