import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-psychology-9218-research-methods-paper2';
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
  self: '## Self-report: interviews and questionnaires',
  obs: '## Observation studies',
  cor: '## Correlation',
  rv: '## Reliability and validity of data',
  dh: '## Data handling',
};

// 01 Self-report
F('01-self-report-methods', 'Self-report: asking people directly', '', [
  (y) => {
    const q = node(240, y, 380, 'Questionnaire', 'Written questions', { fill: C.tealLight, edge: C.tealDark });
    const iv = node(660, y, 380, 'Interview', 'Spoken questions', { fill: C.cream, edge: C.olive });
    const c1 = node(140, y + 130, 190, 'Closed', 'Fixed answers: yes/no, tick boxes, rating scales', { minH: 130 });
    const c2 = node(340, y + 130, 190, 'Open', 'Answers in their own words', { minH: 130 });
    const c3 = node(560, y + 130, 190, 'Structured', 'Same questions, same order for everyone', { minH: 130 });
    const c4 = node(760, y + 130, 190, 'Unstructured', 'Like a conversation; follow up answers', { minH: 130 });
    const out = (n, txt, f, e) => { const c = chip(n.cx, n.bot + 16, txt, { size: 15, anchor: 'middle', fill: f, edge: e }); return path(`M${n.cx},${n.bot} L${n.cx},${n.bot + 16}`, { w: 2.5 }) + c.s; };
    const s = link(q, c1) + link(q, c2) + link(iv, c3) + link(iv, c4) + [q, iv, c1, c2, c3, c4].map((n) => n.s).join('') +
      out(c1, 'quantitative data', C.teal, C.tealDark) + out(c2, 'qualitative data', C.cream, C.olive) + out(c3, 'easy to repeat, compare', C.panel, C.ink) + out(c4, 'more depth', C.panel, C.ink);
    return { s, h: 130 + c1.h + 50 };
  },
  (y) => row(y, [
    { kicker: 'QUESTIONNAIRE', title: 'Quick, many people', body: ['**+** Anonymous answers may be more honest', '**−** Closed questions limit detail'] },
    { kicker: 'INTERVIEW', kfill: C.olive, title: 'Rich detail', body: ['**+** Misunderstandings can be clarified', "**−** Time-consuming; interviewer's manner may influence answers"] },
  ], { gap: 16, vcenter: false, card: { size: 16, tsize: 18, gap: 4 } }),
  (y) => note(y, 'Social desirability bias threatens both', 'Answering in a way that makes you look good, especially on topics such as helping behaviour or mental health.', { size: 16, fill: C.panel, edge: C.rust }),
],
'Questionnaires use closed questions, which give quantitative data, or open questions, which give qualitative data. Interviews are structured, with the same questions in the same order, or unstructured, like a conversation. Cards give a strength and weakness of each, and a warning that social desirability bias threatens both.',
'Closed and structured questions are easy to compare; open and unstructured ones give depth.', H2.self);

// 02 Observation categories and inter-observer reliability
F('02-inter-observer-reliability', 'Categories and inter-observer reliability', 'Observing personal space in a library. Tallies are illustrative', [
  (y) => {
    const cats = ['Sits at an empty table', 'Sits next to a stranger', 'Sits one seat away from a stranger', 'Moves after a stranger sits down'];
    const tA = [4, 2, 5, 1], tB = [4, 2, 4, 1];
    const tally = (x, yy, n) => { let g = ''; for (let i = 0; i < n; i++) { if (i === 4) g += `<line x1="${x - 4}" y1="${yy + 18}" x2="${x + 4 * 12 - 6}" y2="${yy - 2}" stroke="${C.ink}" stroke-width="2.5"/>`; else g += `<line x1="${x + (i > 4 ? i + 1 : i) * 12}" y1="${yy - 2}" x2="${x + (i > 4 ? i + 1 : i) * 12}" y2="${yy + 20}" stroke="${C.ink}" stroke-width="2.5"/>`; } return g; };
    let s = table(y, [{ w: 2.1, head: 'Category of behaviour' }, { w: 0.9, head: 'Observer A' }, { w: 0.9, head: 'Observer B' }], cats.map((c) => [c, '', '']), { size: 17, firstBold: false }).s;
    cats.forEach((_, i) => {
      const yy = y + 58 + i * 49;
      s += tally(30 + 840 * 2.1 / 3.9 + 30, yy, tA[i]) + tally(30 + 840 * 3 / 3.9 + 30, yy, tB[i]);
    });
    return { s, h: 56 + 4 * 49 };
  },
  (y) => steps(y, [
    { title: 'Observe the same people at the same time' },
    { title: 'Record independently, using the same categories' },
    { title: 'Compare tallies', body: 'High agreement: the observation is **reliable**. Low agreement: make categories clearer and train the observers.' },
  ], { size: 16, tsize: 18, gap: 8, pad: 12, highlight: 2 }),
  (y) => note(y, '', 'A good category is something an observer can **see**, not guess: "sits next to a stranger", not "feels uncomfortable".', { align: 'middle', size: 17 }),
],
'A tally sheet with four categories for observing personal space in a library, filled in by two observers with illustrative tallies. Three steps check inter-observer reliability: observe the same people at the same time, record independently with the same categories, then compare tallies; high agreement means the observation is reliable.',
'Two observers, same categories, recorded independently: agreement shows reliability.', H2.obs);

// 03 Correlation
F('03-correlation-types', 'Three kinds of correlation', 'Scatter diagrams with illustrative points: one point per person', [
  (y) => {
    const pts = {
      pos: [[10, 14], [18, 20], [24, 30], [30, 26], [38, 42], [46, 40], [52, 54], [60, 58], [66, 70], [74, 66], [80, 82], [88, 86]],
      neg: [[10, 86], [18, 78], [24, 80], [30, 66], [38, 62], [46, 56], [52, 48], [60, 44], [66, 34], [74, 30], [80, 22], [88, 16]],
      none: [[10, 40], [18, 80], [24, 20], [30, 60], [38, 30], [46, 74], [52, 50], [60, 14], [66, 86], [74, 44], [80, 66], [88, 26]],
    };
    const plot = (x, key, name, xl, yl, ex, fill, edge) => {
      let s = panel(x, y, 270, 380, fill, edge) + T(x + 135, y + 36, name, { size: 20, weight: 700, anchor: 'middle' });
      const ox = x + 50, oy = y + 230, W = 190, H = 160;
      s += `<rect x="${ox}" y="${oy - H}" width="${W}" height="${H}" fill="${C.panel}"/><line x1="${ox}" y1="${oy}" x2="${ox + W}" y2="${oy}" stroke="${C.ink}" stroke-width="2.5"/><line x1="${ox}" y1="${oy}" x2="${ox}" y2="${oy - H}" stroke="${C.ink}" stroke-width="2.5"/>`;
      pts[key].forEach(([a, b]) => { s += `<circle cx="${ox + (a / 100) * W}" cy="${oy - (b / 100) * H}" r="5.5" fill="${C.tealDark}"/>`; });
      s += para(x + 135, y + 258, xl, 230, { size: 15, anchor: 'middle', fill: C.muted, lh: 18 }).s;
      s += `<text x="${ox - 12}" y="${oy - H / 2}" font-size="15" fill="${C.muted}" text-anchor="middle" transform="rotate(-90 ${ox - 12} ${oy - H / 2})">${yl}</text>`;
      s += para(x + 135, y + 318, ex, 236, { size: 16, anchor: 'middle', weight: 700, lh: 20 }).s;
      return s;
    };
    return { s: plot(30, 'pos', 'Positive', 'hours on social media →', 'loneliness →', 'As one rises, the other rises', C.panel, C.panelEdge) +
      plot(315, 'neg', 'Negative', 'number of close friends →', 'anxiety →', 'As one rises, the other falls', C.panel, C.panelEdge) +
      plot(600, 'none', 'No correlation', 'shoe size →', 'conformity →', 'No pattern', C.panel, C.panelEdge), h: 380 };
  },
  (y) => {
    const a = card(30, y, 250, { title: 'A stressful job', body: 'third variable', align: 'middle', size: 16, tsize: 18, fill: C.cream, edge: C.olive, minH: 120, vcenter: true });
    const b = card(380, y, 220, { title: 'Social media use', align: 'middle', tsize: 17, minH: 52, vcenter: true });
    const c = card(380, y + 68, 220, { title: 'Loneliness', align: 'middle', tsize: 17, minH: 52, vcenter: true });
    const n = card(640, y, 230, { body: 'A correlation **cannot show cause and effect**.', size: 16, bfill: C.ink, fill: C.panel, edge: C.rust, minH: 120, vcenter: true });
    return { s: a.s + b.s + c.s + n.s + arrow(286, y + 50, 372, y + 26, { w: 3 }) + arrow(286, y + 70, 372, y + 94, { w: 3 }), h: 120 };
  },
],
'Three scatter diagrams with illustrative points. Positive: hours on social media rise with loneliness. Negative: more close friends goes with lower anxiety. No correlation: shoe size and conformity show no pattern. Below, a stressful job is shown as a third variable that could raise both social media use and loneliness, so correlation cannot show cause and effect.',
'Correlation shows a relationship and its direction, never cause and effect.', H2.cor);

// 04 Data types
F('04-data-types', 'Types of data compared', '', [
  (y) => row(y, [
    { kicker: 'QUANTITATIVE', title: 'Numbers', body: ['**+** Easy to analyse and compare; tends to be more **reliable**', '**−** Can lack the depth to be fully **valid** about feelings and experiences'], fill: C.tealLight, edge: C.tealDark },
    { kicker: 'QUALITATIVE', kfill: C.olive, title: 'Words, descriptions', body: ['**+** Detailed and often more **valid**', '**−** Harder to analyse and compare; subjective interpretation reduces **reliability**'], fill: C.cream, edge: C.olive },
  ], { gap: 16, vcenter: false, card: { size: 16, tsize: 20, gap: 6 } }),
  (y) => row(y, [
    { kicker: 'PRIMARY', title: 'Collected by the researcher for this study', body: ['**+** Fits the aim exactly', '**−** Takes time'] },
    { kicker: 'SECONDARY', title: 'Collected by someone else', body: ['*e.g. government statistics on mental health diagnoses*', '**+** Quick to use', '**−** May not match the aim; quality harder to check'] },
  ], { gap: 16, vcenter: false, card: { size: 16, tsize: 18, gap: 6 } }),
],
'Quantitative data (numbers) is easy to analyse and tends to be more reliable but can lack validity about feelings; qualitative data (words) is detailed and often more valid but harder to analyse and less reliable. Primary data is collected for the study and fits the aim but takes time; secondary data, such as government statistics, is quick but may not match the aim.',
'Numbers favour reliability, words favour validity; primary data fits the aim, secondary data saves time.', H2.rv);

// 05 Central tendency from the lesson data
F('05-mean-median-mode-range', 'Mean, median, mode and range', 'Ten anxiety ratings (1-10): 3, 5, 5, 6, 6, 6, 7, 8, 9, 10', [
  (y) => {
    const data = [3, 5, 5, 6, 6, 6, 7, 8, 9, 10];
    const x0 = 90, step = 76, base = y + 200;
    const X1 = (v) => x0 + (v - 1) * step;
    let s = panel(30, y, 840, 300);
    s += `<line x1="${X1(1) - 10}" y1="${base}" x2="${X1(10) + 10}" y2="${base}" stroke="${C.ink}" stroke-width="3"/>`;
    for (let v = 1; v <= 10; v++) s += `<line x1="${X1(v)}" y1="${base}" x2="${X1(v)}" y2="${base + 10}" stroke="${C.ink}" stroke-width="2.5"/>` + T(X1(v), base + 32, String(v), { size: 17, anchor: 'middle' });
    const cnt = {};
    data.forEach((v) => { cnt[v] = (cnt[v] || 0) + 1; const k = cnt[v]; s += `<circle cx="${X1(v)}" cy="${base - 18 - (k - 1) * 32}" r="13" fill="${v === 6 ? C.mustard : C.teal}" stroke="${C.ink}" stroke-width="2"/>`; });
    // mean marker
    const mx = X1(6.5);
    s += `<line x1="${mx}" y1="${y + 30}" x2="${mx}" y2="${base}" stroke="${C.rust}" stroke-width="3" stroke-dasharray="7 5"/>` + T(mx + 8, y + 44, 'mean 6.5', { size: 17, weight: 700, fill: C.rust });
    s += T(X1(6), y + 76, 'mode and median 6', { size: 17, weight: 700, fill: C.olive, anchor: 'end' }).replace(`x="${X1(6)}"`, `x="${X1(6) - 10}"`);
    // range bracket
    const ry = base + 52;
    s += path(`M${X1(3)},${ry} L${X1(3)},${ry + 12} L${X1(10)},${ry + 12} L${X1(10)},${ry}`, { w: 2.5, stroke: C.tealDark });
    s += T((X1(3) + X1(10)) / 2, ry + 36, 'range = 10 − 3 = 7', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
    return { s, h: 300 };
  },
  (y) => grid(y, [
    { kicker: 'MEAN', title: '65 ÷ 10 = 6.5', body: 'Uses every score, but is distorted by extreme scores' },
    { kicker: 'MEDIAN', title: '(6 + 6) ÷ 2 = 6', body: 'Average the 5th and 6th ordered scores; not affected by extremes' },
    { kicker: 'MODE', title: '6', body: 'The most frequent score; suits categories' },
    { kicker: 'RANGE', title: '10 − 3 = 7', body: 'Shows spread, but depends only on the two most extreme scores' },
  ], 4, { gap: 12, vcenter: false, card: { size: 16, tsize: 19, pad: 16 } }),
],
'A dot plot of the ten anxiety ratings on a 1 to 10 scale, with three dots at 6. The mean of 6.5 is marked with a dashed line, the mode and median are both 6, and a bracket shows the range from 3 to 10, which is 7. Cards give each calculation and its strength or weakness.',
'Mean 6.5, median 6, mode 6, range 7: four summaries of the same ten scores.', H2.dh);

// 06 Fractions, percentages, ratios
F('06-fraction-percentage-ratio', 'One result, three ways to write it', '18 of 24 bystanders helped', [
  (y) => {
    let s = panel(30, y, 840, 170);
    for (let i = 0; i < 24; i++) {
      const cx = 92 + (i % 12) * 65, cy = y + 50 + Math.floor(i / 12) * 70;
      const help = i < 18;
      s += `<circle cx="${cx}" cy="${cy}" r="24" fill="${help ? C.teal : C.panel}" stroke="${help ? C.tealDark : C.ink}" stroke-width="2.5"${help ? '' : ' stroke-dasharray="5 4"'}/>`;
    }
    return { s, h: 170 };
  },
  (y) => {
    const a = chip(300, y, 'helped: 18', { size: 16, anchor: 'end', fill: C.teal, edge: C.tealDark });
    const b = chip(330, y, 'did not help: 6', { size: 16, fill: C.panel, edge: C.ink });
    return { s: a.s + b.s, h: a.h };
  },
  (y) => row(y, [
    { kicker: 'FRACTION', title: '18/24 = 3/4' },
    { kicker: 'PERCENTAGE', title: '75%' },
    { kicker: 'RATIO', title: '18:6 = 3:1', body: 'helpers to non-helpers' },
  ], { gap: 14, card: { size: 16, tsize: 24, align: 'middle', minH: 120 } }),
  (y) => note(y, 'Estimate first', '18 out of 24 is a bit less than 80%, so an answer of 75% makes sense.', { size: 17 }),
],
'Twenty-four circles, eighteen shaded for bystanders who helped and six dashed for those who did not. The same result is written as the fraction 18/24 = 3/4, the percentage 75%, and the ratio of helpers to non-helpers 18:6 = 3:1. A note suggests estimating first: a bit less than 80%.',
'3/4, 75% and 3:1 all describe the same 18 helpers out of 24.', H2.dh);

// 07 Choosing a graph
F('07-choosing-a-graph', 'Choosing a graph', 'Illustrative shapes, not real data', [
  (y) => {
    const W = 410, H = 260;
    const box = (x, yy, title, use, art) => panel(x, yy, W, H) + T(x + 20, yy + 36, title, { size: 20, weight: 700 }) + art(x, yy) + para(x + 20, yy + 222, use, W - 40, { size: 16, fill: C.muted }).s;
    const freq = (x, yy) => {
      const rows = [['Score', 'Frequency'], ['1', '3'], ['2', '5'], ['3', '2']];
      let g = '';
      rows.forEach((r, i) => { const ry = yy + 56 + i * 34; g += `<rect x="${x + 90}" y="${ry}" width="115" height="34" fill="${i ? C.panel : C.teal}" stroke="${C.ink}" stroke-width="1.5"/><rect x="${x + 205}" y="${ry}" width="115" height="34" fill="${i ? C.panel : C.teal}" stroke="${C.ink}" stroke-width="1.5"/>`; g += T(x + 147, ry + 23, r[0], { size: 16, anchor: 'middle', weight: i ? 400 : 700 }) + T(x + 262, ry + 23, r[1], { size: 16, anchor: 'middle', weight: i ? 400 : 700 }); });
      return g;
    };
    const axes = (x, yy) => `<line x1="${x + 70}" y1="${yy + 190}" x2="${x + 350}" y2="${yy + 190}" stroke="${C.ink}" stroke-width="2.5"/><line x1="${x + 70}" y1="${yy + 190}" x2="${x + 70}" y2="${yy + 56}" stroke="${C.ink}" stroke-width="2.5"/>`;
    const bar = (x, yy) => axes(x, yy) + [90, 130, 60].map((h, i) => `<rect x="${x + 100 + i * 85}" y="${yy + 190 - h}" width="55" height="${h}" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>`).join('');
    const hist = (x, yy) => axes(x, yy) + [40, 85, 125, 95, 50].map((h, i) => `<rect x="${x + 90 + i * 50}" y="${yy + 190 - h}" width="50" height="${h}" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/>`).join('');
    const sc = (x, yy) => axes(x, yy) + [[20, 20], [50, 35], [80, 60], [110, 50], [140, 85], [170, 90], [200, 110], [230, 115], [260, 125]].map(([a, b]) => `<circle cx="${x + 70 + a}" cy="${yy + 186 - b}" r="5.5" fill="${C.tealDark}"/>`).join('');
    return { s: box(30, y, 'Frequency table', 'How often each score or category occurs', freq) + box(460, y, 'Bar chart', 'Separate categories; **gaps** between bars', bar) +
      box(30, y + H + 16, 'Histogram', 'Continuous data in intervals; bars **touch**', hist) + box(460, y + H + 16, 'Scatter diagram', 'Correlations; one point per participant', sc), h: 2 * H + 16 };
  },
],
'Four small panels: a frequency table with score and frequency columns; a bar chart with gaps between bars for separate categories; a histogram whose bars touch for continuous data in intervals; and a scatter diagram with one point per participant for correlations. All values are illustrative.',
'Gaps for categories, touching bars for continuous data, points for correlations.', H2.dh);

// 08 Normal distribution
F('08-normal-distribution', 'The normal distribution', 'Illustrative curve, e.g. height', [
  (y) => {
    const x0 = 80, x1 = 820, base = y + 300, mid = 450;
    let d = '';
    for (let i = 0; i <= 120; i++) { const x = x0 + (i / 120) * (x1 - x0); const z = (x - mid) / 120; const yy = base - 240 * Math.exp(-z * z / 2); d += (i ? 'L' : 'M') + x.toFixed(1) + ',' + yy.toFixed(1); }
    let s = panel(30, y, 840, 370);
    s += `<path d="${d} L${x1},${base} L${x0},${base} Z" fill="${C.tealLight}"/>` + path(d, { w: 4.5, stroke: C.tealDark });
    s += `<line x1="${x0 - 20}" y1="${base}" x2="${x1 + 20}" y2="${base}" stroke="${C.ink}" stroke-width="3"/>`;
    s += `<line x1="${mid}" y1="${base}" x2="${mid}" y2="${y + 40}" stroke="${C.rust}" stroke-width="3" stroke-dasharray="8 6"/>`;
    s += T(mid + 12, y + 48, 'mean = median = mode', { size: 18, weight: 700, fill: C.rust });
    s += T(mid, base + 30, 'most scores cluster around the middle', { size: 16, anchor: 'middle', fill: C.ink });
    s += T(150, base - 84, 'fewer at', { size: 16, anchor: 'middle', fill: C.muted }) + T(150, base - 64, 'the extremes', { size: 16, anchor: 'middle', fill: C.muted });
    s += T(750, base - 84, 'fewer at', { size: 16, anchor: 'middle', fill: C.muted }) + T(750, base - 64, 'the extremes', { size: 16, anchor: 'middle', fill: C.muted });
    s += T(mid, base + 56, 'symmetrical, bell-shaped', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
    return { s, h: 370 };
  },
],
'An illustrative symmetrical bell-shaped curve. A dashed line at the centre marks the mean, median and mode, which are all equal. Most scores cluster around the middle, with fewer at the extremes on either side.',
'Symmetrical and bell-shaped: mean, median and mode all sit at the centre.', H2.dh);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
