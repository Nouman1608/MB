import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-islamiyat-2058-rightly-guided-caliphs';
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
  syl: '## What the syllabus covers',
  ab: '## Abu Bakr (632–634): holding the community together',
  um: '## Umar (634–644): building a state',
  uth: '## Uthman (644–656): growth and division',
  ali: '## Ali (656–661): leading through civil conflict',
  cmp: '## Comparing approaches to leadership',
  we: '## Worked example',
};

// 01 Scaled timeline
F('01-caliphs-timeline', 'The Rightly Guided Caliphs, 632–661', 'Bar lengths show years of rule, to scale', [
  (y) => {
    const x0 = 50, x1 = 850, Y0 = 632, Y1 = 661, X = (v) => x0 + ((v - Y0) / (Y1 - Y0)) * (x1 - x0);
    const rules = [['Abu Bakr', 632, 634, C.cream, C.olive], ['Umar', 634, 644, C.tealLight, C.tealDark], ['Uthman', 644, 656, C.cream, C.olive], ['Ali', 656, 661, C.tealLight, C.tealDark]];
    let s = '';
    rules.forEach(([n, a, b, f, e]) => { s += `<rect x="${X(a)}" y="${y + 30}" width="${X(b) - X(a)}" height="44" fill="${f}" stroke="${e}" stroke-width="2.5"/>`; if (X(b) - X(a) > 90) s += T((X(a) + X(b)) / 2, y + 59, n, { size: 18, weight: 700, anchor: 'middle' }); });
    [632, 634, 644, 656, 661].forEach((v, i) => { s += T(X(v) + (i === 1 ? 6 : 0), y + 18, String(v), { size: 16, weight: 700, anchor: i === 1 ? 'start' : 'middle' }) + `<line x1="${X(v)}" y1="${y + 24}" x2="${X(v)}" y2="${y + 80}" stroke="${C.ink}" stroke-width="2.5"/>`; });
    s += T(X(633), y + 100, 'Abu Bakr', { size: 15, weight: 700, anchor: 'start', fill: C.olive });
    return { s, h: 104 };
  },
  (y) => row(y, [
    { kicker: '632–634', title: 'Abu Bakr', body: ["Usama's army sent", 'Ridda wars; Yamama', "Qur'an collected into one copy", 'Campaigns into Iraq and Syria'], fill: C.cream, edge: C.olive },
    { kicker: '634–644', title: 'Umar', body: ['Yarmuk (636), Qadisiyya, Jerusalem, Egypt, Nahawand (642)', 'Bayt al-mal, diwan, qadis', 'Hijri calendar'], fill: C.tealLight, edge: C.tealDark },
    { kicker: '644–656', title: 'Uthman', body: ['North Africa, Armenia, Persia', 'First navy; Cyprus', "Standard copies of the Qur'an", 'Rebels besiege his house'], fill: C.cream, edge: C.olive },
    { kicker: '656–661', title: 'Ali', body: ['Camel (656)', 'Capital moved to Kufa', 'Siffin (657)', 'Nahrawan (658)'], fill: C.tealLight, edge: C.tealDark },
  ], { gap: 12, vcenter: false, card: { size: 15, tsize: 20, bullets: true, gap: 5, pad: 14 } }),
],
'A scaled bar from 632 to 661 divided into the rules of Abu Bakr (632–634), Umar (634–644), Uthman (644–656) and Ali (656–661), with key events for each: Usama\'s army, the Ridda wars and the collection of the Qur\'an; Umar\'s conquests and administration; Uthman\'s expansion, navy, standard copies and the siege; and Ali\'s battles of the Camel, Siffin and Nahrawan.',
'Four rules in under thirty years; Umar and Uthman ruled longest.', H2.syl);

// 02 Abu Bakr: problems and responses
F('02-abu-bakr-problems-responses', 'Abu Bakr: problem and response', 'Holding the community together, 632–634', [
  (y) => {
    const rows = [
      ['The Prophet (pbuh) dies; a leader is needed', 'Discussion at the Saqifa of Banu Sa\'ida; Umar pledges allegiance, then the people in the mosque'],
      ["Danger at home; Usama's army prepared", 'Sends it anyway: he would not undo what the Prophet had decided'],
      ['Tribes refuse zakat; false prophets (Musaylima, Tulayha, Sajah)', 'Ridda wars: fights anyone separating prayer from zakat; Khalid wins at Yamama'],
      ['Many huffaz die at Yamama', "Zayd ibn Thabit collects the Qur'an into one copy"],
      ['Succession before his death in 634', 'Consults senior Companions and nominates Umar'],
    ];
    let s = T(195, y + 14, 'PROBLEM', { size: 15, weight: 700, anchor: 'middle', fill: C.rust }) + T(645, y + 14, 'RESPONSE', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
    let cy = y + 28;
    rows.forEach(([a, b]) => {
      const l = card(30, cy, 330, { body: a, size: 16, bfill: C.ink, fill: C.panel, edge: C.rust, minH: 76, vcenter: true });
      const r = card(410, cy, 460, { body: b, size: 16, bfill: C.ink, fill: C.tealLight, edge: C.tealDark, minH: Math.max(76, l.h), vcenter: true });
      const h = Math.max(l.h, r.h);
      s += card(30, cy, 330, { body: a, size: 16, bfill: C.ink, fill: C.panel, edge: C.rust, minH: h, vcenter: true }).s + r.s + arrow(366, cy + h / 2, 402, cy + h / 2, { w: 3.5 });
      cy += h + 12;
    });
    return { s, h: cy - y - 12 };
  },
  (y) => note(y, 'Leadership lesson', 'Firmness on principle combined with humility and accountability.', { size: 17 }),
],
'Five problems and Abu Bakr\'s responses: choosing a leader at the Saqifa; sending Usama\'s army despite danger at home; the Ridda wars against tribes refusing zakat and false prophets, ending at Yamama; collecting the Qur\'an after huffaz died; and nominating Umar after consultation.',
'Abu Bakr met each crisis firmly and kept the community and the Qur\'an intact.', H2.ab);

// 03 Umar's state
F('03-umar-building-a-state', 'Umar: building a state', 'Amir al-Mu\'minin, "Commander of the Faithful", 634–644', [
  (y) => hub(y, ['Umar', '634–644'], [
    { kicker: 'EXPANSION', title: 'Syria, Iraq, Jerusalem, Egypt, Persia', body: 'Yarmuk (636), Qadisiyya and Ctesiphon, Jerusalem by treaty, Egypt under Amr ibn al-As, Nahawand (642)' },
    { kicker: 'RELIGION', title: 'Tarawih in congregation', body: 'Gathered Muslims in Ramadan' },
  ], [
    { kicker: 'ADMINISTRATION', title: 'Institutions', body: 'Governors; qadis separate from governors; bayt al-mal; diwan; Kufa, Basra, Fustat; Hijri calendar', fill: C.cream, edge: C.olive },
    { kicker: 'ACCOUNTABILITY', title: 'Checks on the powerful', body: "Recorded governors' wealth; heard complaints in public; dismissed Khalid from overall command", fill: C.tealLight, edge: C.tealDark },
  ], { cardW: 320, r: 76, card: { size: 15, tsize: 17 } }),
  (y) => note(y, 'Leadership lesson', 'Justice applied to the powerful as strictly as to the weak. He lived simply and patrolled Madinah at night to learn people\'s needs.', { size: 16 }),
],
'Umar at the centre with four areas: expansion through Yarmuk, Qadisiyya, Jerusalem, Egypt and Nahawand; administration with governors, separate qadis, the bayt al-mal, the diwan, garrison towns and the Hijri calendar; accountability through checks on governors; and religion, gathering Muslims for tarawih.',
'Conquest, institutions and accountability: Umar turned a community into a state.', H2.um);

// 04 Uthman: achievements and difficulties
F('04-uthman-achievements-difficulties', 'Uthman: achievements and difficulties', 'Give both sides, 644–656', [
  (y) => row(y, [
    { kicker: 'ACHIEVEMENTS', title: 'Growth', body: ['Chosen by the council of six through Abd al-Rahman ibn Awf', 'Expansion into North Africa, Armenia and the rest of Persia', "First navy under Mu'awiya; Cyprus taken", "Standard copies of the Qur'an from Hafsa's copy", "Enlarged the Prophet's Mosque in Madinah"], fill: C.tealLight, edge: C.tealDark },
    { kicker: 'DIFFICULTIES', kfill: C.rust, title: 'Division', body: ["Relatives from the Umayyad clan made governors, such as Mu'awiya in Syria", 'Critics accused them of injustice', 'Complaints from Egypt, Kufa and Basra', 'Rebels besieged his house', 'Killed in 656 while reading the Qur\'an'], fill: '#f6e3d8', edge: C.rust },
  ], { gap: 16, vcenter: false, card: { size: 16, tsize: 20, bullets: true, gap: 6 } }),
  (y) => note(y, 'Leadership lesson', 'Generosity and restraint: he refused to let Companions fight for him. But appointing relatives fuelled distrust, even where they were capable.', { size: 16 }),
],
'Two columns. Achievements: chosen by the council of six, expansion into North Africa, Armenia and Persia, the first navy and Cyprus, standard copies of the Qur\'an and the enlarged Prophet\'s Mosque. Difficulties: relatives appointed as governors, complaints from Egypt, Kufa and Basra, the siege of his house and his killing in 656.',
'Uthman\'s rule brought growth and the standard Qur\'an, but also division.', H2.uth);

// 05 Ali's crises
F('05-ali-civil-conflict', 'Ali: leading through civil conflict', 'Camel 656, Siffin 657, Nahrawan 658', [
  (y) => steps(y, [
    { n: '1', title: '656: Chosen in Madinah', body: "At a time of great confusion after Uthman's death" },
    { n: '2', title: '656: Battle of the Camel, near Basra', body: "Aisha, Talha and al-Zubayr demanded immediate punishment of Uthman's killers; Ali wanted order first. Aisha sent back to Madinah with respect" },
    { n: '3', title: 'Capital moved to Kufa' },
    { n: '4', title: "657: Siffin and arbitration", body: "Mu'awiya's soldiers raised copies of the Qur'an on spears; Abu Musa al-Ash'ari and Amr ibn al-As as arbiters" },
    { n: '5', title: '658: Nahrawan', body: 'The Kharijites rejected arbitration ("judgement belongs to God alone") and were defeated' },
    { n: '6', title: '661: Struck by Ibn Muljam in the mosque at Kufa' },
  ], { size: 16, tsize: 18, gap: 8, pad: 12, highlight: 3 }),
  (y) => note(y, 'Leadership lesson', 'Keeping to principle in a crisis, and preferring negotiation to further bloodshed.', { size: 17 }),
],
'Six steps through Ali\'s rule: chosen in Madinah in 656; the Battle of the Camel over punishing Uthman\'s killers; the capital moved to Kufa; arbitration at Siffin in 657; the defeat of the Kharijites at Nahrawan in 658; and his death at Kufa in 661.',
'Camel, Siffin, Nahrawan: three crises in three years, in that order.', H2.ali);

// 06 How each caliph was chosen
F('06-how-each-was-chosen', 'How each caliph was chosen', 'Different methods, all with consultation or public consent', [
  (y) => row(y, [
    { kicker: 'ABU BAKR', title: 'Discussion and pledge', body: 'Debate at the Saqifa; Umar pledged first, then the people in the mosque', fill: C.cream, edge: C.olive },
    { kicker: 'UMAR', title: 'Nomination', body: 'Abu Bakr nominated him after consulting senior Companions', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'UTHMAN', title: 'A council of six', body: 'Abd al-Rahman ibn Awf consulted widely in Madinah', fill: C.cream, edge: C.olive },
    { kicker: 'ALI', title: 'Chosen in Madinah', body: "After Uthman's death, at a time of great confusion", fill: C.tealLight, edge: C.tealDark },
  ], { gap: 12, vcenter: false, card: { size: 16, tsize: 18, pad: 16 } }),
  (y) => card(30, y, 840, { kicker: 'THE COUNCIL OF SIX (appointed by Umar)', body: 'Uthman · Ali · Abd al-Rahman ibn Awf · Sa\'d ibn Abi Waqqas · al-Zubayr · Talha', size: 17, bfill: C.ink, align: 'middle' }),
  (y) => note(y, 'Model for government today', 'Leaders chosen with consultation and public consent.', { size: 17, align: 'middle' }),
],
'Four cards: Abu Bakr chosen by discussion at the Saqifa and a public pledge; Umar nominated by Abu Bakr after consultation; Uthman chosen by a council of six through Abd al-Rahman ibn Awf; and Ali chosen in Madinah after Uthman\'s death. The members of the council of six are listed.',
'Four different methods, each resting on consultation and consent.', H2.cmp);

// 07 Uthman difficulties chain (worked example)
F('07-uthman-difficulties-chain', 'Answer plan: Uthman\'s difficulties', 'A chain of cause and effect [10]', [
  (y) => {
    const items = [
      'A large empire with new Muslims and growing wealth',
      "Disputes over recitation: resolved by standardisation, though some objected to burning other copies",
      "Criticism of relatives such as Mu'awiya appointed as governors",
      'Complaints from Egypt, Kufa and Basra; delegations heard, changes promised',
      'A letter alleged to order punishment of the Egyptian delegation turned them back',
      'Siege of his house; he refused to allow fighting on his behalf',
      "Killed in 656 while reading the Qur'an",
    ];
    let s = '', cy = y;
    items.forEach((it, i) => {
      const last = i === items.length - 1;
      const c = card(130, cy, 640, { body: it, size: 17, bfill: C.ink, align: 'middle', fill: last ? '#f6e3d8' : i % 2 ? C.panel : C.cream, edge: last ? C.rust : i % 2 ? C.panelEdge : C.olive, pad: 14 });
      s += c.s; cy += c.h;
      if (!last) { s += arrow(450, cy + 3, 450, cy + 25, { w: 3.5 }); cy += 28; }
    });
    return { s, h: cy - y };
  },
  (y) => note(y, '', 'Explain each difficulty as a cause of the next, and include his response.', { align: 'middle', size: 17 }),
],
'A vertical chain: a large empire with new Muslims; disputes over recitation resolved by standardisation; criticism of relatives as governors; complaints from Egypt, Kufa and Basra; an alleged letter turning the Egyptian delegation back; the siege of his house, where he refused to let others fight for him; and his killing in 656.',
'Each difficulty led to the next; include Uthman\'s response at every step.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
