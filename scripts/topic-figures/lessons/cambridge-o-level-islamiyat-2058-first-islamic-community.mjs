import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-islamiyat-2058-first-islamic-community';
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
  syl: '## What the syllabus lists',
  wives: '## 1. The wives of the Prophet (pbuh)',
  desc: '## 2. His descendants',
  comp: '## 3. The Companions',
  cal: "## 4. The four caliphs in the Prophet's lifetime",
  we: '## Worked example',
};

// 01 Topic overview
F('01-people-of-the-topic', 'The First Islamic Community: three groups of people', 'Paper 1, optional topic: one or two 14-mark questions', [
  (y) => row(y, [
    { kicker: '1', title: 'The wives', body: 'The Mothers of the Believers (Sura 33.6)', fill: C.cream, edge: C.olive },
    { kicker: '2', title: 'The descendants', body: 'Children, grandchildren and the line of Imams recognised among Shi\'a Muslims', fill: C.tealLight, edge: C.tealDark },
    { kicker: '3', title: 'The leading Companions', body: 'Ten Blessed Companions, Scribes, major characters, Emigrants and Helpers' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 20, align: 'middle' } }),
  (y) => {
    const a = card(30, y, 520, { kicker: 'ALSO IN THIS TOPIC', title: 'The four Rightly Guided Caliphs during his lifetime', body: 'Abu Bakr, Umar, Uthman and Ali before 632', size: 16, tsize: 18 });
    const b = card(580, y, 290, { kicker: 'NOT IN THIS TOPIC', kfill: C.rust, title: 'Their rule after 632', body: 'belongs to Paper 2', size: 16, tsize: 18, fill: C.panel, edge: C.rust, minH: a.h });
    return { s: a.s + b.s + arrow(556, y + a.h / 2, 574, y + a.h / 2, { w: 3, color: C.rust, marker: 'ahR' }), h: Math.max(a.h, b.h) };
  },
  (y) => note(y, '', 'For every person: **the facts of their life** and **why their actions matter**.', { align: 'middle', size: 18 }),
],
'Three groups of people make up the topic: the wives of the Prophet (pbuh), his descendants including the line of Imams, and his leading Companions. The four Rightly Guided Caliphs are studied for their lives before 632; their rule after 632 belongs to Paper 2.',
'The topic is organised around people: know the facts of each life and why it matters.', H2.syl);

// 02 Reasons for the marriages
F('02-reasons-for-the-marriages', 'Why so many marriages?', 'Examiners reward explanation, not just names', [
  (y) => {
    const rows = [
      ['Support for widows', 'Most of the wives after Khadija were widows who needed support', 'e.g. Sawda, Zaynab bint Khuzayma, Umm Salama'],
      ['Bonds with Companions', 'Strengthened ties with close Companions', 'Aisha (daughter of Abu Bakr), Hafsa (daughter of Umar)'],
      ['Bonds with tribes', 'Built links with tribes', 'Juwayriyya (Banu Mustaliq), Umm Habiba (daughter of Abu Sufyan)'],
      ['Changing a custom', 'Showed an adopted son\'s former wife could be married', 'Zaynab bint Jahsh (Sura 33.37)'],
      ['Teaching', 'His wives taught Muslims about his private life and practice', 'e.g. Aisha, a narrator of Hadith and teacher of law'],
    ];
    let s = '', cy = y;
    rows.forEach(([a, b, c], i) => {
      const l = card(30, cy, 250, { title: a, size: 16, tsize: 18, fill: i % 2 ? C.tealLight : C.cream, edge: i % 2 ? C.tealDark : C.olive, minH: 84, vcenter: true });
      const r = card(310, cy, 560, { body: [b, '*' + c + '*'], size: 16, bfill: C.ink, minH: 84, vcenter: true, gap: 2 });
      s += l.s + r.s + arrow(284, cy + 42, 304, cy + 42, { w: 3 });
      cy += 84 + 12;
    });
    return { s, h: cy - y - 12 };
  },
],
'Five reasons for the marriages, each with examples: support for widows such as Sawda and Umm Salama; bonds with close Companions through Aisha and Hafsa; bonds with tribes through Juwayriyya and Umm Habiba; changing a custom through Zaynab bint Jahsh; and teaching Muslims about his private life and practice.',
'Give the reason, then name the wife who shows it.', H2.wives);

// 03 Descendants family tree (text only)
F('03-descendants-ra', 'Children and grandchildren of the Prophet (pbuh)', 'Names only; all his sons died in childhood', [
  (y) => {
    const top = node(450, y, 300, 'The Prophet (pbuh)', '', { fill: C.mustard, edge: C.ink });
    const kh = node(260, y + 90, 300, 'With Khadija (RA)', '', { fill: C.cream, edge: C.olive });
    const ma = node(740, y + 90, 200, 'With Maria', '', { fill: C.cream, edge: C.olive });
    const kids = [['Qasim', 'son'], ['Abdullah', 'son'], ['Zaynab (RA)', 'm. Abu al-As'], ['Ruqayya (RA)', 'm. Uthman (RA)'], ['Umm Kulthum (RA)', 'm. Uthman (RA)'], ['Fatima (RA)', 'm. Ali (RA)']];
    const kn = kids.map(([n, sub], i) => node(80 + i * 120, y + 190, 112, n, sub, { minH: 170, fill: n === 'Fatima (RA)' ? C.tealLight : C.panel, edge: n === 'Fatima (RA)' ? C.tealDark : C.panelEdge }));
    const ib = node(800, y + 190, 112, 'Ibrahim', 'son', { minH: 86 });
    const gk = [['Hasan (RA)', ''], ['Husayn (RA)', ''], ['Zaynab bint Ali (RA)', '']];
    const gn = gk.map(([n], i) => node([570, 690, 815][i], y + 390, [110, 110, 130][i], n, '', { minH: 110, fill: C.tealLight, edge: C.tealDark }));
    const fat = kn[5];
    let s = link(top, kh) + link(top, ma) + kn.map((k) => link(kh, k)).join('') + link(ma, ib);
    s += gn.map((g) => link({ cx: fat.cx, bot: fat.bot }, g)).join('');
    s += [top, kh, ma, ...kn, ib, ...gn].map((n) => n.s).join('');
    const u = card(30, y + 390, 470, { body: '**Uthman (RA)** married Ruqayya and later Umm Kulthum, so he was called **Dhu al-Nurayn**, "possessor of two lights".', size: 16, bfill: C.ink, fill: C.cream, edge: C.olive });
    s += u.s;
    return { s, h: Math.max(390 + u.h, 390 + 110) };
  },
  (y) => note(y, 'At the Mubahala (Sura 3.61)', 'He came out with Ali (RA), Fatima (RA), Hasan (RA) and Husayn (RA): the family Shi\'a Muslims call the **Ahl al-Bayt**.', { size: 17, fill: C.tealLight, edge: C.tealDark }),
],
'A text family tree. With Khadija (RA) the Prophet (pbuh) had Qasim, Abdullah, Zaynab (RA) (married Abu al-As), Ruqayya (RA) and Umm Kulthum (RA) (both married Uthman (RA)) and Fatima (RA) (married Ali (RA)); with Maria he had Ibrahim. Fatima\'s children include Hasan (RA), Husayn (RA) and Zaynab bint Ali (RA). A note explains Uthman\'s (RA) title Dhu al-Nurayn and the Ahl al-Bayt at the Mubahala.',
'Six children with Khadija (RA), Ibrahim with Maria; the line continues through Fatima (RA) and Ali (RA).', H2.desc);

// 04 The twelve Imams
F('04-twelve-imams', 'The twelve Imams of Twelver Shi\'a Muslims', 'A direct line from the Prophet\'s (pbuh) family', [
  (y) => {
    const names = ['Ali', 'Hasan', 'Husayn', 'Ali Zayn al-Abidin', 'Muhammad al-Baqir', "Ja'far al-Sadiq", 'Musa al-Kazim', 'Ali al-Rida', 'Muhammad al-Jawad', 'Ali al-Hadi', 'Hasan al-Askari', 'Muhammad al-Mahdi'];
    let s = '';
    names.forEach((n, i) => {
      const col = Math.floor(i / 6), r = i % 6, x = 30 + col * 430, yy = y + r * 66;
      const last = i === 11;
      s += card(x + 60, yy, 350, { title: n, size: 16, tsize: 19, minH: 54, vcenter: true, fill: last ? C.cream : C.panel, edge: last ? C.olive : C.panelEdge }).s + badge(x + 26, yy + 27, 21, String(i + 1), last ? C.mustard : C.cream);
    });
    return { s, h: 6 * 66 - 12 };
  },
  (y) => row(y, [
    { kicker: 'BELIEF', title: 'Rightful, divinely guided leaders', body: 'Recognised after the Prophet (pbuh)', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'THE TWELFTH', kfill: C.olive, title: 'Muhammad al-Mahdi', body: 'Believed to be in hiding and to return', fill: C.cream, edge: C.olive },
    { kicker: 'MUHARRAM', title: 'Husayn at Karbala', body: 'His martyrdom is remembered especially in this month' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18 } }),
],
'The twelve Imams in order: Ali, Hasan, Husayn, Ali Zayn al-Abidin, Muhammad al-Baqir, Ja\'far al-Sadiq, Musa al-Kazim, Ali al-Rida, Muhammad al-Jawad, Ali al-Hadi, Hasan al-Askari and Muhammad al-Mahdi. Cards note that they are seen as rightful, divinely guided leaders, that the twelfth is believed to be in hiding, and that Husayn\'s martyrdom at Karbala is remembered in Muharram.',
'Twelve Imams in one line, from Ali to Muhammad al-Mahdi.', H2.desc);

// 05 Supporters and opponents
F('05-supporters-and-opponents', 'Major characters of the ministry', 'Choose the people the question asks about', [
  (y) => {
    const sup = [['Abu Talib', 'protector; never accepted Islam'], ['Hamza', '"Lion of God"; martyred at Uhud'], ['Bilal', 'first mu\'adhdhin'], ['Mus\'ab ibn Umayr', 'first teacher sent to Yathrib; martyred at Uhud'], ['Zayd ibn Haritha', 'freed and adopted; the only Companion named in the Qur\'an (Sura 33.37)'], ['Salman al-Farsi', 'suggested the trench']];
    const opp = [['Abu Lahab', ''], ['Abu Jahl', 'killed at Badr'], ['Abu Sufyan', 'led the Quraysh; accepted Islam at the conquest of Makka'], ['Khalid ibn al-Walid', 'led the cavalry at Uhud; accepted Islam after Hudaybiyya; "Sword of God"']];
    const col = (x, w, head, f, e, list) => {
      let s = '', cy = y + 50;
      s += T(x + w / 2, y + 26, head, { size: 19, weight: 700, anchor: 'middle', fill: e });
      list.forEach(([n, d]) => { const c = card(x, cy, w, { title: n, body: d || undefined, size: 16, tsize: 18, pad: 14, fill: f, edge: e, tgap: 2 }); s += c.s; cy += c.h + 10; });
      return { s, h: cy - y - 10 };
    };
    const a = col(30, 450, 'SUPPORTERS', C.tealLight, C.tealDark, sup), b = col(500, 370, 'OPPONENTS', C.panel, C.rust, opp);
    return { s: a.s + b.s, h: Math.max(a.h, b.h) };
  },
],
'Two columns of name cards. Supporters: Abu Talib, Hamza, Bilal, Mus\'ab ibn Umayr, Zayd ibn Haritha and Salman al-Farsi, each with a key fact. Opponents: Abu Lahab, Abu Jahl, Abu Sufyan and Khalid ibn al-Walid, the last two of whom later accepted Islam.',
'Know one key fact for each supporter and opponent; two opponents later accepted Islam.', H2.comp);

// 06 Emigrants and Helpers
F('06-emigrants-and-helpers', 'The Emigrants and the Helpers', '', [
  (y) => {
    const a = card(30, y, 360, { kicker: 'MUHAJIRUN', title: 'The Emigrants', body: 'Left homes and property in Makka', size: 16, tsize: 21, fill: C.cream, edge: C.olive, minH: 130, align: 'middle', vcenter: true });
    const b = card(510, y, 360, { kicker: 'ANSAR', title: 'The Helpers', body: 'Of the Aws and Khazraj in Madinah; received the Emigrants', size: 16, tsize: 21, fill: C.tealLight, edge: C.tealDark, minH: 130, align: 'middle', vcenter: true });
    return { s: a.s + b.s + path(`M396,${y + 65} L504,${y + 65}`, { w: 4, extra: 'marker-end="url(#ah)" marker-start="url(#ah)"' }), h: 130 };
  },
  (y) => row(y, [
    { kicker: 'SURA 59.9', title: 'The Ansar praised', body: 'They gave the Emigrants "preference over themselves, even though poverty was their own lot".' },
    { kicker: 'SURA 9.100', title: 'Both groups', body: "Promised God's pleasure." },
  ], { gap: 16, fr: [1.6, 1], vcenter: false, card: { size: 16, tsize: 18 } }),
  (y) => note(y, 'Best-known example', "**Sa'd ibn al-Rabi'** offered **Abd al-Rahman ibn Awf** half his wealth. Abd al-Rahman thanked him and asked only to be shown the market.", { size: 17 }),
],
'The Muhajirun, who left homes and property in Makka, and the Ansar of the Aws and Khazraj, who received them in Madinah, are linked by a two-way arrow. Cards quote Sura 59.9 on the Ansar giving the Emigrants preference over themselves and Sura 9.100 promising both groups God\'s pleasure. Example: Sa\'d ibn al-Rabi\' offered Abd al-Rahman ibn Awf half his wealth.',
'Sacrifice on one side, generosity on the other: both praised in the Qur\'an.', H2.comp);

// 07 Four caliphs in his lifetime
F('07-caliphs-in-his-lifetime', 'The four caliphs before 632', 'Their lives with the Prophet (pbuh), not their rule', [
  (y) => grid(y, [
    { kicker: 'ABU BAKR · al-Siddiq', title: 'First free adult man to accept Islam', body: ['Brought Uthman, Talha, al-Zubayr and others to Islam; freed Bilal', 'Companion in the cave of Thawr: "the second of two" (Sura 9.40)', 'Led the prayers in the final illness'], fill: C.cream, edge: C.olive },
    { kicker: 'UMAR · al-Faruq', title: 'Once a fierce opponent', body: ['Accepted Islam after hearing Sura Ta-Ha at his sister Fatima\'s house', 'Let Muslims pray openly at the Ka\'ba', 'His daughter Hafsa married the Prophet'], fill: C.tealLight, edge: C.tealDark },
    { kicker: 'UTHMAN · Dhu al-Nurayn', title: 'Early convert through Abu Bakr', body: ['Migrated to Abyssinia; married two of the Prophet\'s daughters', 'Bought the well of Ruma; paid for much of the army sent to Tabuk', 'His rumoured death led to the Pledge of Ridwan (Sura 48.18)'], fill: C.tealLight, edge: C.tealDark },
    { kicker: 'ALI · cousin', title: 'First young person to accept Islam', body: ['Slept in the Prophet\'s bed on the night of the Hijra; returned the trusts', 'Married Fatima; fought at Badr; carried the banner at Khaybar', 'Left in charge of Madinah during Tabuk'], fill: C.cream, edge: C.olive },
  ], 2, { gap: 16, vgap: 16, vcenter: false, card: { size: 16, tsize: 18, bullets: true, gap: 4 } }),
],
'Four cards. Abu Bakr: first free adult man to accept Islam, companion in the cave of Thawr, led prayers in the final illness. Umar: once an opponent, accepted Islam after hearing Sura Ta-Ha, let Muslims pray openly at the Ka\'ba. Uthman: early convert, married two daughters, funded Tabuk. Ali: first young person to accept Islam, slept in the Prophet\'s bed on the night of the Hijra, married Fatima.',
'Before 632: how each future caliph came to Islam and served the Prophet (pbuh).', H2.cal);

// 08 Khadija answer plan
F('08-khadija-answer-plan', 'Answer plan: the life of Khadija', 'Write about her life and importance to the Prophet (pbuh) [10]', [
  (y) => steps(y, [
    { title: 'A respected widow and trader of Makka' },
    { title: 'Employed him to trade for her in Syria', body: 'Her servant Maysara reported his honesty' },
    { title: 'She proposed marriage; he was twenty-five', body: 'Mother of all his children except Ibrahim' },
    { title: 'Comfort after Hira', body: 'Assured him God would never disgrace him; took him to Waraqa ibn Nawfal' },
    { title: 'First to believe', body: 'Spent her wealth on the cause; endured the boycott in Shi\'b Abi Talib' },
    { title: 'Died in 619, the Year of Sorrow', body: 'He never forgot her and honoured her friends after her death' },
  ], { size: 16, tsize: 18, gap: 8, pad: 12, highlight: 4 }),
  (y) => note(y, '', 'Facts in order, named people, and her significance woven through.', { align: 'middle', size: 17 }),
],
'Six steps for an answer on Khadija: a respected widow and trader; employed him to trade in Syria, where Maysara reported his honesty; proposed marriage when he was twenty-five; comforted him after Hira and took him to Waraqa ibn Nawfal; was the first to believe and spent her wealth; died in 619, the Year of Sorrow.',
'Facts in order, named people, significance throughout.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
