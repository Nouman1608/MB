import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-psychology-9218-perception';
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

const H2 = {
  sens: '## Sensation and perception',
  gib: "## Gibson's direct theory",
  ill: '## Visual illusions and their explanations',
  greg: "## Gregory's constructivist theory",
  set: '## Perceptual set and the four named studies',
};

// 01 Sensation and perception
F('01-sensation-perception', 'Sensation and perception', '"The eye sees, but the brain perceives."', [
  (y) => {
    let s = '';
    // eye schematic
    const ex = 450, ey = y + 110;
    s += card(30, y, 330, { kicker: 'SENSATION', title: 'Detection of physical energy by the sense organs', body: ['Light reaching the retina; sound waves reaching the ear', 'The **same** for anyone with working senses'], size: 16, tsize: 19, fill: C.tealLight, edge: C.tealDark, gap: 8, minH: 260 }).s;
    s += card(540, y, 330, { kicker: 'PERCEPTION', kfill: C.olive, title: "The brain's organisation and interpretation of that input", body: ['Turns raw input into a meaningful picture', 'Can **differ** between people looking at the same thing'], size: 16, tsize: 19, fill: C.cream, edge: C.olive, gap: 8, minH: 260 }).s;
    s += `<circle cx="${ex}" cy="${ey}" r="44" fill="${C.panel}" stroke="${C.ink}" stroke-width="3"/><circle cx="${ex - 20}" cy="${ey}" r="16" fill="${C.blue}"/><circle cx="${ex - 24}" cy="${ey}" r="7" fill="${C.ink}"/>`;
    s += arrow(368, ey, 398, ey, { w: 3.5 }) + arrow(500, ey, 532, ey, { w: 3.5 });
    s += T(ex, ey + 74, 'eye', { size: 16, weight: 700, anchor: 'middle', fill: C.muted }) + T(ex, ey + 96, 'to brain', { size: 16, anchor: 'middle', fill: C.muted });
    return { s, h: 260 };
  },
],
'Sensation is the detection of physical energy by the sense organs, such as light reaching the retina, and is the same for anyone with working senses. Perception is the brain\'s organisation and interpretation of that input, and can differ between people looking at the same thing.',
'Sensation detects; perception interprets, which is why two people can see the same thing differently.', H2.sens);

// 02 Motion parallax
F('02-motion-parallax', 'Motion parallax', 'Looking out of a train window', [
  (y) => {
    let s = panel(30, y, 840, 330, '#e8f0ef', C.ink);
    s += `<clipPath id="win"><rect x="30" y="${y}" width="840" height="330" rx="14"/></clipPath><g clip-path="url(#win)">`;
    s += `<path d="M30,${y + 180} Q160,${y + 110} 300,${y + 165} Q450,${y + 95} 600,${y + 160} Q740,${y + 110} 870,${y + 170} L870,${y + 330} L30,${y + 330} Z" fill="#a9c48f"/>`;
    s += `<rect x="30" y="${y + 250}" width="840" height="80" fill="#d8e3c6"/>`;
    for (let i = 0; i < 16; i++) { const x = 55 + i * 54; s += `<rect x="${x}" y="${y + 215}" width="14" height="90" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>`; }
    s += `<line x1="30" y1="${y + 240}" x2="870" y2="${y + 240}" stroke="${C.ink}" stroke-width="3"/>`;
    s += `</g>`;
    s += arrow(520, y + 138, 440, y + 138, { w: 3.5 }) + card(560, y + 22, 290, { title: 'Distant hills', body: 'appear to move slowly: they drift', size: 16, tsize: 18, pad: 14 }).s;
    s += arrow(640, y + 270, 260, y + 270, { w: 10, color: C.rust, marker: 'ahR' });
    s += card(50, y + 22, 290, { title: 'Near fence posts', tfill: C.rust, body: 'appear to move quickly past us: they flash by', size: 16, tsize: 18, pad: 14 }).s;
    return { s, h: 330 };
  },
  (y) => note(y, '', 'The **difference in speed** tells us **directly** how far away things are: no guessing or inference needed.', { align: 'middle', size: 18 }),
  (y) => row(y, [
    { kicker: 'GIBSON: BOTTOM-UP', title: 'The optic array is enough', body: 'The light reaching the eye contains enough information for accurate perception.', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'STRENGTH', title: 'Real-world movement', body: 'Explains quick, accurate movement; grew out of work on how pilots judge distance when landing.' },
    { kicker: 'LIMITATION', kfill: C.rust, title: 'Illusions', body: 'Perception can be wrong even when the information is there. But most illusions are flat drawings.' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18 } }),
],
'A view from a train window. Near fence posts flash past quickly, shown by a thick arrow, while distant hills drift slowly, shown by a thin arrow. Gibson argued the difference in speed tells us directly how far away things are. Cards summarise his bottom-up theory, a strength and a limitation.',
'Near objects race past and far ones drift: speed difference is direct information about distance.', H2.gib);

// 03 Six illusions, four explanations
F('03-illusions-explanations', 'Six illusions, four explanations', 'Simplified line drawings', [
  (y) => {
    const W = 270, H = 250, xs = [30, 315, 600];
    const cell = (i, j, name, expl, fill, edge, art) => {
      const x = xs[i], yy = y + j * (H + 16);
      return panel(x, yy, W, H) + art(x, yy) + T(x + W / 2, yy + H - 58, name, { size: 18, weight: 700, anchor: 'middle' }) +
        chip(x + W / 2, yy + H - 44, expl, { size: 15, anchor: 'middle', fill, edge }).s;
    };
    const ml = (x, yy) => {
      const L = 130, cx = x + 70;
      let g = `<line x1="${cx}" y1="${yy + 55}" x2="${cx + L}" y2="${yy + 55}" stroke="${C.ink}" stroke-width="4"/>`;
      g += path(`M${cx + 18},${yy + 37} L${cx},${yy + 55} L${cx + 18},${yy + 73} M${cx + L - 18},${yy + 37} L${cx + L},${yy + 55} L${cx + L - 18},${yy + 73}`, { w: 3.5 });
      g += `<line x1="${cx}" y1="${yy + 125}" x2="${cx + L}" y2="${yy + 125}" stroke="${C.ink}" stroke-width="4"/>`;
      g += path(`M${cx - 18},${yy + 107} L${cx},${yy + 125} L${cx - 18},${yy + 143} M${cx + L + 18},${yy + 107} L${cx + L},${yy + 125} L${cx + L + 18},${yy + 143}`, { w: 3.5 });
      return g;
    };
    const ponzo = (x, yy) => {
      let g = path(`M${x + 90},${yy + 165} L${x + 128},${yy + 20} M${x + 180},${yy + 165} L${x + 142},${yy + 20}`, { w: 3.5 });
      g += `<line x1="${x + 105}" y1="${yy + 50}" x2="${x + 165}" y2="${yy + 50}" stroke="${C.rust}" stroke-width="6"/><line x1="${x + 105}" y1="${yy + 150}" x2="${x + 165}" y2="${yy + 150}" stroke="${C.rust}" stroke-width="6"/>`;
      return g;
    };
    const ames = (x, yy) => {
      let g = path(`M${x + 50},${yy + 20} L${x + 220},${yy + 45} L${x + 220},${yy + 145} L${x + 50},${yy + 170} Z`, { fill: C.tealLight, w: 3 });
      g += `<rect x="${x + 80}" y="${yy + 70}" width="26" height="90" rx="13" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/><circle cx="${x + 93}" cy="${yy + 55}" r="14" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`;
      g += `<rect x="${x + 182}" y="${yy + 105}" width="14" height="36" rx="7" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/><circle cx="${x + 189}" cy="${yy + 97}" r="7" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`;
      return g;
    };
    const rubin = (x, yy) => {
      const cx = x + 135;
      const prof = (sgn) => `M${cx},${yy + 20} L${cx + sgn * 70},${yy + 20} L${cx + sgn * 70},${yy + 170} L${cx},${yy + 170} L${cx + sgn * 6},${yy + 150} Q${cx + sgn * 30},${yy + 135} ${cx + sgn * 18},${yy + 115} Q${cx + sgn * 8},${yy + 100} ${cx + sgn * 26},${yy + 85} Q${cx + sgn * 34},${yy + 70} ${cx + sgn * 14},${yy + 55} Q${cx + sgn * 30},${yy + 40} ${cx},${yy + 20} Z`;
      return `<rect x="${cx - 70}" y="${yy + 20}" width="140" height="150" fill="${C.cream}"/>` + `<path d="${prof(-1)}" fill="${C.ink}"/><path d="${prof(1)}" fill="${C.ink}"/>`;
    };
    const necker = (x, yy) => {
      const a = x + 80, b = yy + 60, s2 = 80, d = 36;
      return path(`M${a},${b} h${s2} v${s2} h${-s2} Z M${a + d},${b - d} h${s2} v${s2} h${-s2} Z M${a},${b} l${d},${-d} M${a + s2},${b} l${d},${-d} M${a + s2},${b + s2} l${d},${-d} M${a},${b + s2} l${d},${-d}`, { w: 3.5 });
    };
    const kanizsa = (x, yy) => {
      const P3 = [[x + 135, yy + 38], [x + 80, yy + 148], [x + 190, yy + 148]];
      let g = P3.map(([px, py]) => `<circle cx="${px}" cy="${py}" r="20" fill="${C.ink}"/>`).join('');
      g += `<polygon points="${P3.map((p) => p.join(',')).join(' ')}" fill="${C.panel}"/>`;
      return g;
    };
    let s = '';
    s += cell(0, 0, 'Müller-Lyer', 'misinterpreted depth cues', C.cream, C.olive, ml);
    s += cell(1, 0, 'Ponzo', 'misinterpreted depth cues', C.cream, C.olive, ponzo);
    s += cell(2, 0, 'Ames Room', 'size constancy misapplied', C.mustard, C.ink, ames);
    s += cell(0, 1, "Rubin's vase", 'ambiguity', C.tealLight, C.tealDark, rubin);
    s += cell(1, 1, 'Necker cube', 'ambiguity', C.tealLight, C.tealDark, necker);
    s += cell(2, 1, 'Kanizsa triangle', 'fiction', C.panel, C.ink, kanizsa);
    return { s, h: 2 * H + 16 };
  },
  (y) => row(y, [
    { title: 'Ambiguity', body: 'Two equally good interpretations; the brain switches between them.', fill: C.tealLight, edge: C.tealDark },
    { title: 'Fiction', body: 'The brain adds information that is not present, such as edges.' },
  ], { gap: 16, card: { size: 16, tsize: 18 } }),
],
'Six simplified illusions with their explanations: the Müller-Lyer and Ponzo illusions are misinterpreted depth cues; the Ames Room is size constancy misapplied; Rubin\'s vase and the Necker cube are ambiguity; the Kanizsa triangle is fiction, because the brain adds edges that are not drawn.',
'Each illusion is explained by one of four terms: ambiguity, misinterpreted depth cues, fiction or size constancy.', H2.ill);

// 04 Gregory's explanation of Ponzo and Muller-Lyer
F('04-gregory-inference', 'Gregory: illusions as wrong inferences', 'The brain uses cues and past experience to build a best guess', [
  (y) => {
    let s = panel(30, y, 260, 270);
    s += path(`M95,${y + 245} L148,${y + 30} M225,${y + 245} L172,${y + 30}`, { w: 3.5 });
    s += `<line x1="125" y1="${y + 75}" x2="195" y2="${y + 75}" stroke="${C.rust}" stroke-width="7"/><line x1="125" y1="${y + 205}" x2="195" y2="${y + 205}" stroke="${C.rust}" stroke-width="7"/>`;
    s += T(122, y + 72, 'looks', { size: 15, weight: 700, anchor: 'end', fill: C.rust }) + T(122, y + 90, 'longer', { size: 15, weight: 700, anchor: 'end', fill: C.rust });
    s += T(160, y + 232, 'same length', { size: 15, weight: 700, anchor: 'middle', fill: C.muted });
    const st = steps(y, [
      { title: 'The two bars are the same length, but the upper one looks longer' },
      { title: 'Converging lines are read as linear perspective (railway tracks)' },
      { title: 'Past experience says the upper bar is further away' },
      { title: 'Same retinal image + further away = it must be bigger', body: 'An inference, not direct pick-up of information' },
    ], { x: 310, w: 560, size: 16, tsize: 17, gap: 8, pad: 12, highlight: 3 });
    return { s: s + st.s, h: Math.max(270, st.h) };
  },
  (y) => ({ s: T(30, y + 16, 'MÜLLER-LYER: CORNERS', { size: 16, weight: 700, fill: C.tealDark }), h: 16 }),
  -8,
  (y) => row(y, [
    { title: 'Fins out', body: 'Like the **inside** corner of a room: further away, so seen as **longer**', fill: C.cream, edge: C.olive },
    { title: 'Fins in', body: 'Like the **outside** corner of a building: nearer', fill: C.panel },
  ], { gap: 16, card: { size: 17, tsize: 19 } }),
  (y) => P('People who grew up among straight walls and corners apply size constancy to the "further" line.', { anchor: 'middle', size: 17 })(y),
],
'A Ponzo figure: two equal bars between converging lines, the upper one looking longer. Four steps: the converging lines are read as linear perspective, past experience says the upper bar is further away, and a further object with the same retinal image must be bigger. For the Müller-Lyer illusion, fins out resemble the inside corner of a room and fins in the outside corner of a building.',
'For Gregory, illusions show the brain inferring from cues and experience, and sometimes getting it wrong.', H2.greg);

// 05 Gibson vs Gregory
F('05-gibson-vs-gregory', 'Direct or constructed?', 'Two theories of perception compared', [
  (y) => {
    const head = row(y, [
      { title: "Gibson's direct theory", body: 'Bottom-up', fill: C.tealLight, edge: C.tealDark },
      { title: "Gregory's constructivist theory", body: 'Top-down', fill: C.cream, edge: C.olive },
    ], { gap: 16, card: { size: 17, tsize: 21, align: 'middle', bfill: C.ink } });
    return head;
  },
  (y) => table(y, [{ w: 0.7, head: '' }, { w: 1.3, head: 'Gibson', hfill: C.teal }, { w: 1.3, head: 'Gregory', hfill: C.cream }], [
    ['Sensory input', 'Contains enough information (the optic array)', 'Often incomplete'],
    ['How we perceive', 'Pick up the information directly; no guessing', 'Inferences from visual cues and past experience build a best-guess model'],
    ['Key evidence', 'Motion parallax; how pilots judge distance when landing', 'Visual illusions and perceptual set'],
    ['Weakness', 'Cannot easily explain illusions', 'Evidence from artificial images seen briefly; we would make more everyday mistakes'],
  ], { size: 16 }),
  (y) => note(y, 'Combining them', 'Direct perception may dominate in clear, moving scenes, and construction when information is limited.', { size: 17 }),
],
'A comparison table. Gibson\'s bottom-up theory says input contains enough information, picked up directly, supported by motion parallax but weak on illusions. Gregory\'s top-down theory says input is incomplete and the brain infers from cues and past experience, supported by illusions and perceptual set but based on artificial images. A note suggests the theories can be combined.',
'Gibson: bottom-up and direct. Gregory: top-down and inferred. Each fits different conditions.', H2.greg);

// 06 Perceptual set
F('06-perceptual-set', 'Perceptual set: four factors, four studies', 'A readiness to perceive something in a particular way', [
  (y) => {
    const fig = (x, a, b, lab, fill, edge) => {
      let s = panel(x, y, 405, 190, fill, edge);
      s += T(x + 70, y + 92, a, { size: 46, weight: 700, anchor: 'middle', fill: C.muted }) + T(x + 335, y + 92, b, { size: 46, weight: 700, anchor: 'middle', fill: C.muted });
      s += `<text x="${x + 202}" y="${y + 92}" font-size="54" font-weight="700" fill="${C.rust}" text-anchor="middle" letter-spacing="-6">13</text>`;
      s += T(x + 202, y + 135, lab, { size: 16, anchor: 'middle', fill: C.muted });
      return s;
    };
    return { s: T(30, y + 16, 'EXPECTATION: BRUNER AND MINTURN', { size: 16, weight: 700, fill: C.tealDark }) + `<g transform="translate(0,30)">` + fig(30, 'A', 'C', 'among letters: seen as "B"', C.tealLight, C.tealDark) + fig(465, '12', '14', 'among numbers: seen as "13"', C.cream, C.olive) + '</g>', h: 220 };
  },
  (y) => grid(y, [
    { kicker: 'MOTIVATION', title: 'Gilchrist and Nesberg', body: 'Participants who had gone without food rated food pictures as brighter than those who had eaten.' },
    { kicker: 'EMOTION', title: 'Kunst-Wilson and Zajonc', body: 'Shapes flashed too briefly to recognise were later preferred, though participants could not say which they had seen.' },
    { kicker: 'CULTURE', title: 'Nisbett and Miyamoto', body: 'East Asian cultures: holistic (context and background). Western cultures: analytic (the main object).' },
    { kicker: 'EVALUATION', kfill: C.rust, title: 'Control vs realism', body: 'Lab control makes cause and effect clearer, but tasks are artificial; culture studies treat large groups as alike.', fill: C.cream, edge: C.olive },
  ], 2, { gap: 16, vgap: 14, vcenter: false, card: { size: 16, tsize: 18 } }),
],
'Bruner and Minturn: the same ambiguous figure was seen as B among the letters A and C, and as 13 among the numbers 12 and 14. Cards summarise motivation (hungry participants rated food pictures brighter), emotion (briefly flashed shapes were later preferred), culture (holistic versus analytic perception) and an evaluation of the studies.',
'Expectation, motivation, emotion and culture each create a readiness to see things a certain way.', H2.set);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
