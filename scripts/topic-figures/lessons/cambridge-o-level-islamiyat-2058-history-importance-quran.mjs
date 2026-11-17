import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-islamiyat-2058-history-importance-quran';
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
  rev: '## Revelation, 610–632',
  pres: "## Preservation during the Prophet's lifetime",
  ab: '## Compilation under Abu Bakr',
  uth: '## Standardisation under Uthman',
  law: "## The Qur'an in legal thinking",
};

// 01 Revelation timeline
F('01-revelation-610-632', 'The revelation of the Qur\'an, 610–632', '', [
  (y) => {
    const items = [
      ['before 610', 'Retreats to the Cave of Hira', 'on Mount Nur near Makka, to reflect', C.panel, C.panelEdge],
      ['610, Ramadan', 'The first revelation: Sura 96.1–5', '"Read! in the name of your Lord, who created". The Qur\'an links its revelation to Ramadan and the Night of Power (Sura 2.185, 97.1)', C.cream, C.olive],
      ['', 'Khadija comforts him', 'and takes him to Waraqa ibn Nawfal: the same angel who had come to Musa', C.panel, C.panelEdge],
      ['', 'A pause in revelation', '', C.panel, C.panelEdge],
      ['', 'Sura 74: "arise and warn"', 'revelation resumes and continues', C.tealLight, C.tealDark],
      ['632', 'Revelation ends', 'shortly before his death; in Makka and then Madinah', C.panel, C.panelEdge],
    ];
    let s = '', cy = y;
    const LX = 175;
    const parts = items.map(([d, t1, t2, f, e]) => card(LX + 40, 0, 870 - LX - 40, { title: t1, body: t2 || undefined, size: 16, tsize: 18, pad: 14, fill: f, edge: e }));
    const total = parts.reduce((a, p) => a + p.h + 10, -10);
    s += `<line x1="${LX}" y1="${y + 10}" x2="${LX}" y2="${y + total - 10}" stroke="${C.ink}" stroke-width="4"/>`;
    items.forEach(([d, t1, t2, f, e], i) => {
      const c = card(LX + 40, cy, 870 - LX - 40, { title: t1, body: t2 || undefined, size: 16, tsize: 18, pad: 14, fill: f, edge: e });
      s += c.s + `<circle cx="${LX}" cy="${cy + c.h / 2}" r="${d ? 11 : 7}" fill="${d ? C.mustard : C.panel}" stroke="${C.ink}" stroke-width="3"/>`;
      if (d) s += T(LX - 22, cy + c.h / 2 + 6, d, { size: 17, weight: 700, anchor: 'end' });
      cy += c.h + 10;
    });
    return { s, h: total };
  },
],
'A vertical timeline: retreats to the Cave of Hira; in Ramadan 610 the first revelation, Sura 96.1–5; Khadija comforts him and takes him to Waraqa ibn Nawfal; a pause; revelation resumes with Sura 74, "arise and warn", and continues until shortly before his death in 632.',
'From the first words in Hira in 610 to the last revelation shortly before 632.', H2.rev);

// 02 How revelation came
F('02-ways-revelation-came', 'How revelation came', 'Ways described in the Hadiths', [
  (y) => grid(y, [
    { kicker: '1', title: 'Like the ringing of a bell', body: 'The hardest on him: Aisha saw sweat on his forehead even on a very cold day', fill: C.cream, edge: C.olive },
    { kicker: '2', title: 'Through Jibril in the form of a man', body: 'The angel spoke to him' },
    { kicker: '3', title: 'In true dreams', body: '' },
    { kicker: '4', title: 'Directly from God', body: 'During the Mi\'raj', fill: C.tealLight, edge: C.tealDark },
  ].map((c) => ({ ...c, body: c.body || undefined })), 2, { gap: 16, vgap: 16, card: { size: 17, tsize: 20, minH: 130 } }),
],
'Four cards: revelation came like the ringing of a bell, the hardest on him; through Jibril in the form of a man; in true dreams; and directly from God during the Mi\'raj.',
'Revelation came in several ways; the bell-like form was the hardest on the Prophet (pbuh).', H2.rev);

// 03 Why gradual
F('03-why-gradual', 'Why was the Qur\'an revealed gradually?', 'Over about twenty-three years, not all at once', [
  (y) => row(y, [
    { kicker: 'SURA 25.32', title: '"That We may strengthen your heart thereby"', fill: C.cream, edge: C.olive },
    { kicker: 'SURA 17.106', title: 'Recited "to men at intervals"', fill: C.cream, edge: C.olive },
  ], { gap: 16, card: { size: 16, tsize: 19, align: 'middle' } }),
  (y) => row(y, [
    { title: 'Memorise and act', body: 'People could learn and act on each passage' },
    { title: 'Answer events', body: 'Questions and events were answered as they arose' },
    { title: 'Laws step by step', body: 'Rules introduced gradually', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 19 } }),
  (y) => {
    const a = card(30, y, 400, { kicker: 'EXAMPLE', title: 'The prohibition of wine', body: 'came in stages', size: 16, tsize: 19, minH: 96, vcenter: true });
    const b = card(530, y, 340, { title: 'Final ban: Sura 5.90', size: 16, tsize: 19, fill: C.mustard, edge: C.ink, minH: 96, vcenter: true, align: 'middle' });
    let s = a.s + b.s;
    return { s: s + arrow(438, y + 48, 522, y + 48, { w: 4 }), h: 96 };
  },
],
'Two Qur\'anic reasons, Sura 25.32 (to strengthen the Prophet\'s heart) and Sura 17.106 (recited at intervals), above three practical reasons: people could memorise and act on each passage, events were answered as they arose, and laws came step by step, as with the prohibition of wine, which came in stages before the final ban in Sura 5.90.',
'Gradual revelation strengthened the Prophet (pbuh) and let believers learn and apply each step.', H2.rev);

// 04 Makkan and Madinan
F('04-makkan-and-madinan', 'Makkan and Madinan suras', '', [
  (y) => row(y, [
    { kicker: 'REVEALED IN MAKKA', title: 'Generally shorter', body: ['Oneness of God', 'Prophethood', 'The Day of Judgement', 'Moral conduct'], fill: C.cream, edge: C.olive },
    { kicker: 'REVEALED IN MADINAH', title: 'Generally longer', body: ['Worship in detail', 'Family and inheritance law', 'Relations with other communities', 'The conduct of war'], fill: C.tealLight, edge: C.tealDark },
  ], { gap: 16, vcenter: false, card: { size: 17, tsize: 21, bullets: true, gap: 6 } }),
  (y) => row(y, [
    { title: 'Purpose: calling people to faith', fill: C.panel },
    { title: 'Purpose: guiding a Muslim community in its life together', fill: C.panel },
  ], { gap: 16, card: { size: 16, tsize: 18, align: 'middle' } }),
],
'Two columns. Makkan suras are generally shorter and concentrate on the oneness of God, prophethood, the Day of Judgement and moral conduct, calling people to faith. Madinan suras are generally longer and deal with worship in detail, family and inheritance law, relations with other communities and the conduct of war, guiding a community that now existed.',
'Makka: calling to faith. Madinah: guidance for a community\'s shared life.', H2.rev);

// 05 Preservation in the Prophet's lifetime
F('05-preservation-in-his-lifetime', 'Preserved in memory and in writing', "During the Prophet's (pbuh) lifetime", [
  (y) => grid(y, [
    { kicker: 'MEMORISATION', title: 'Recited and memorised', body: 'Those who learned it all were huffaz; recited in daily prayer', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'WRITING', title: 'Scribes wrote it down', body: 'On palm-leaf stalks, leather, flat stones and shoulder blades of animals. Zayd ibn Thabit, Ubayy ibn Ka\'b, Ali', fill: C.cream, edge: C.olive },
    { kicker: 'ORDER', title: 'Fixed by the Prophet (pbuh)', body: 'He told the scribes where each new passage belonged' },
    { kicker: 'ANNUAL REVIEW', title: 'Each Ramadan with Jibril', body: 'Twice in his final year' },
  ], 2, { gap: 16, vgap: 14, vcenter: false, card: { size: 16, tsize: 19 } }),
  (y) => {
    const a = card(30, y, 410, { title: 'By 632', body: 'Complete in memory and in writing', size: 17, tsize: 19, fill: C.teal, edge: C.tealDark, minH: 90, vcenter: true });
    const b = card(460, y, 410, { title: 'But not yet', body: 'gathered into a single bound copy', size: 17, tsize: 19, fill: C.panel, edge: C.rust, minH: 90, vcenter: true });
    return { s: a.s + b.s, h: 90 };
  },
],
'Four methods of preservation in the Prophet\'s lifetime: memorisation by huffaz and recitation in prayer; writing by scribes such as Zayd ibn Thabit on palm-leaf stalks, leather, stones and bones; the order of verses fixed by the Prophet; and an annual review with Jibril each Ramadan. By 632 the Qur\'an was complete in memory and writing but not yet in one bound copy.',
'Complete in memory and writing by 632, but not yet in one volume.', H2.pres);

// 06 Journey of the sheets
F('06-journey-of-the-suhuf', 'The journey of the written sheets (suhuf)', 'From Yamama to the standard copies', [
  (y) => {
    const L = [
      ['Battle of Yamama', 'many huffaz killed', C.panel, C.rust],
      ['Umar urges Abu Bakr', "to collect the Qur'an", C.panel, C.panelEdge],
      ['Zayd ibn Thabit collects', 'written pieces checked against memory, with witnesses', C.cream, C.olive],
      ['Sheets kept by Abu Bakr', 'then Umar, then Hafsa', C.cream, C.olive],
    ];
    const R = [
      ['Hudhayfa ibn al-Yaman warns', 'Muslims disputing over recitation', C.panel, C.rust],
      ["Uthman borrows Hafsa's copy", '', C.tealLight, C.tealDark],
      ['Committee led by Zayd', 'makes copies; where they disagreed, wrote in the dialect of the Quraysh', C.tealLight, C.tealDark],
      ['Copies sent to the main centres', "one kept in Madinah; Hafsa's copy returned; other versions burned", C.tealLight, C.tealDark],
    ];
    const W = 405, h = 114, g = 24, top = y + 30;
    const Y = (r) => top + r * (h + g);
    let s = T(30 + W / 2, y + 16, 'ABU BAKR (632–634): COMPILED', { size: 15, weight: 700, anchor: 'middle', fill: C.olive });
    s += T(465 + W / 2, Y(2) - 14, 'UTHMAN: STANDARDISED', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
    const put = (list, x, r0) => list.forEach(([a, b, f, e], i) => {
      const yy = Y(r0 + i);
      s += card(x, yy, W, { title: a, body: b || undefined, size: 16, tsize: 18, fill: f, edge: e, minH: h, vcenter: true }).s;
      if (i < list.length - 1) s += arrow(x + W / 2, yy + h + 3, x + W / 2, yy + h + g - 3, { w: 3.5 });
    });
    put(L, 30, 0); put(R, 465, 2);
    s += arrow(30 + W + 4, Y(3) + h / 2, 465 - 4, Y(3) + h / 2, { w: 4, color: C.olive, marker: 'ahO' });
    return { s, h: Y(5) + h - y };
  },
],
'Two linked columns. Under Abu Bakr: the Battle of Yamama kills many huffaz, Umar urges Abu Bakr to collect the Qur\'an, and Zayd ibn Thabit collects it with strict checks. The sheets are kept by Abu Bakr, then Umar, then Hafsa. Under Uthman: after Hudhayfa ibn al-Yaman warns of disputes, Hafsa\'s copy is borrowed, Zayd\'s committee makes copies, and copies go to the main centres while one stays in Madinah, Hafsa\'s is returned and other versions are burned.',
'Abu Bakr\'s compiled sheets became the basis of Uthman\'s standard copies.', H2.ab, {});

// 07 Compiled vs standardised
F('07-compiled-vs-standardised', 'Abu Bakr compiled; Uthman standardised', 'Keep the two stages separate', [
  (y) => table(y, [{ w: 0.6, head: '' }, { w: 1.2, head: 'Abu Bakr (632–634)', hfill: C.cream }, { w: 1.2, head: 'Uthman', hfill: C.teal }], [
    ['Problem', 'Many huffaz killed at the Battle of Yamama; parts might be lost', 'New Muslims recited in different ways; Hudhayfa ibn al-Yaman saw disputes in Armenia and Azerbaijan'],
    ['Who did the work', 'Zayd ibn Thabit: young, trustworthy, had memorised it and written for the Prophet (pbuh)', 'A committee led by Zayd ibn Thabit, with Abdullah ibn al-Zubayr, Sa\'id ibn al-As and Abd al-Rahman ibn al-Harith'],
    ['Method', 'Written pieces checked against memory; accepted only with witnesses', "Copied Hafsa's sheets; where they disagreed, wrote in the dialect of the Quraysh"],
    ['Result', 'One collected set of sheets (suhuf)', 'Standard copies for the main centres; other versions burned'],
  ], { size: 16 }),
  (y) => note(y, '', 'Uthman became known as the one who **united the Muslims on a single text**.', { align: 'middle', size: 17 }),
],
'A comparison table. Abu Bakr acted because many huffaz died at Yamama; Zayd ibn Thabit checked written pieces against memory with witnesses, producing one set of sheets. Uthman acted because Muslims disputed over recitation; a committee led by Zayd copied Hafsa\'s sheets in the dialect of the Quraysh and sent standard copies to the main centres.',
'Compilation saved the text; standardisation united Muslims on one text.', H2.uth);

// 08 Sources of law
F('08-sources-of-law', 'The Qur\'an as the first source of law', 'Nothing that contradicts it can be accepted', [
  (y) => {
    const lv = [
      ["Qur'an", 'States the principle or command', '"Establish prayer and give zakat"', C.mustard, C.ink],
      ['Hadith / Sunna', 'Explains and details it', 'Times, units and actions of prayer; rates of zakat', C.cream, C.olive],
      ["Ijma'", 'Scholars agree on a ruling based on the first two', "The Companions' agreement to gather the Qur'an into one copy", C.tealLight, C.tealDark],
      ['Qiyas', 'Extends a ruling to a new case with the same cause', 'Wine intoxicates, so other intoxicating drugs are forbidden', C.panel, C.panelEdge],
    ];
    let s = '', cy = y;
    lv.forEach(([n, r, ex, f, e], i) => {
      const x = 30 + i * 30, w = 840 - i * 30;
      const c = card(x + 70, cy, w - 70, { title: n + ': ' + r, body: '*' + ex + '*', size: 16, tsize: 18, fill: f, edge: e, pad: 14 });
      s += c.s + badge(x + 30, cy + c.h / 2, 22, String(i + 1), f === C.panel ? C.cream : f);
      cy += c.h + 12;
    });
    return { s, h: cy - y - 12 };
  },
  (y) => note(y, "Mu'adh ibn Jabal, judge in Yemen", 'He would rule by the Book of God, then the Sunna, then his own reasoning, and the Prophet (pbuh) approved.', { size: 17, fill: C.panel, edge: C.olive }),
],
'Four stepped levels with examples: the Qur\'an states the command, such as establishing prayer and giving zakat; the Hadith and Sunna detail it; ijma\' is scholars\' agreement, such as gathering the Qur\'an into one copy; and qiyas extends a ruling by shared cause, as the ban on intoxicating wine extends to other intoxicating drugs. The Hadith of Mu\'adh ibn Jabal shows this order.',
'Qur\'an first, then Sunna, then consensus and analogy.', H2.law);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
