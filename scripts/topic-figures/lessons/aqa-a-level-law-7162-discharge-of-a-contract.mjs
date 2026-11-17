import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-law-7162-discharge-of-a-contract';
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
    if (lines[lines.length - 1].length && cur + sp + ww > width) {
      // keep tokens joined without a space (e.g. "(" + italic word) on the same line
      const prev = lines[lines.length - 1], carry = [];
      if (!pendingSp) { while (prev.length > 1) { const last = prev.pop(); carry.unshift(last); if (last.sp) break; } if (carry.length && carry[0].sp === false && prev.length === 0) { prev.push(...carry); carry.length = 0; } }
      lines.push([]); cur = 0;
      carry.forEach((c, ci) => { const cw = tw(c.w, size, c.b) + (ci && c.sp ? tw(' ', size, weight) : 0); lines[lines.length - 1].push({ ...c, sp: ci ? c.sp : false }); cur += cw; });
      lines[lines.length - 1].push({ ...k, sp: false }); cur += ww;
    }
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
    if (o.kicker && tw(o.kicker, 15, 700) > iw) WARN.push(`kicker too wide: ${o.kicker}`);
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


const H2 = {
  perf: '## Discharge by performance',
  br: '## Discharge by breach',
  fr: '## Discharge by frustration',
  we: '## Worked example',
};

// 01 Strict rule and substantial performance
F('01-performance-strict-rule', 'Performance: complete and exact', 'The traditional rule, and how far substantial performance softens it', [
  (y) => row(y, [
    { kicker: 'STRICT RULE', title: 'Cutter v Powell (1795)', body: 'Sailor died before the voyage from Jamaica to Liverpool ended: an entire contract, so his widow recovered nothing' },
    { kicker: 'STRICT RULE', title: 'Re Moore and Landauer (1921)', body: 'Some tins packed 24 to a case, not 30; same total and value, yet the whole consignment could be rejected' },
  ], { gap: 16, vcenter: false, card: { size: 16, tsize: 19, fill: C.cream, edge: C.olive } }),
  (y) => {
    let s = '';
    const bx = 40, W = 820;
    s += T(bx, y + 18, 'Hoenig v Isaacs (1952): substantial performance', { size: 18, weight: 700, fill: C.tealDark });
    s += `<rect x="${bx}" y="${y + 30}" width="${W}" height="50" rx="8" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`;
    const dw = W * 56 / 750;
    s += `<rect x="${bx + W - dw}" y="${y + 30}" width="${dw}" height="50" rx="8" fill="${C.cream}" stroke="${C.rust}" stroke-width="2.5"/>`;
    s += T(bx + (W - dw) / 2, y + 61, 'price paid, less the cost of putting right the defects', { size: 17, weight: 700, anchor: 'middle' });
    s += T(bx + W, y + 104, 'defects about £56 on a £750 contract (bar to scale)', { size: 15, anchor: 'end', fill: C.rust, weight: 600 });
    s += T(bx, y + 140, 'Bolton v Mahadeva (1972): not substantial', { size: 18, weight: 700, fill: C.rust });
    s += `<rect x="${bx}" y="${y + 152}" width="${W}" height="50" rx="8" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5" stroke-dasharray="8 6"/>`;
    s += T(bx + W / 2, y + 183, 'nothing payable: heating gave out fumes and heated poorly', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
    return { s, h: 206 };
  },
],
'Two strict-rule cases: Cutter v Powell, where a sailor’s widow recovered nothing because the voyage was not completed, and Re Moore and Landauer, where wrongly packed tins could be rejected. Below, bars show Hoenig v Isaacs, where the price was payable less the cost of defects of about £56 on a £750 contract, and Bolton v Mahadeva, where serious defects meant nothing was payable.',
'The strict rule is harsh; substantial performance earns the price less the cost of repairs.', H2.perf);

// 02 Other exceptions
F('02-ways-round-strict-rule', 'Other ways round the strict rule', '', [
  (y) => grid(y, [
    { kicker: 'SEVERABLE CONTRACTS', title: 'Payment for each completed stage', body: 'Contracts paid by instalment or by delivery' },
    { kicker: 'ACCEPTED PARTIAL PERFORMANCE', title: 'Payment if there was a genuine choice to accept', body: '*Sumpter v Hedges* (1898): no real choice over half-built buildings on his land, so no payment' },
    { kicker: 'PREVENTED PERFORMANCE', title: 'A reasonable sum: quantum meruit', body: '*Planché v Colburn* (1831): author paid for work after the publisher abandoned the series' },
    { kicker: 'TENDER OF PERFORMANCE', title: 'A wrongly refused offer to perform counts', body: '*Startup v Macdonald* (1843): oil delivered late on a Saturday evening, but within the agreed time' },
  ], 2, { gap: 14, vcenter: false, card: { size: 16, tsize: 18 } }),
],
'Four further exceptions. Severable contracts: payment for each completed stage. Acceptance of partial performance: only with a genuine choice to accept (Sumpter v Hedges). Prevented performance: a reasonable sum on a quantum meruit (Planché v Colburn). Tender of performance: a wrongly refused offer to perform counts (Startup v Macdonald).',
'Stages, genuine acceptance, prevention and tender can all earn payment.', H2.perf);

// 03 Breach effects
F('03-breach-choices', 'Discharge by breach: the innocent party’s choice', 'A breach does not automatically end the contract', [
  (y) => row(y, [
    { kicker: 'ACTUAL BREACH', title: 'When performance is due', body: 'Fails to perform, performs defectively or makes performance impossible' },
    { kicker: 'ANTICIPATORY BREACH', title: 'Before performance is due', body: 'Shows, expressly or by conduct, that they will not perform' },
  ], { gap: 16, card: { size: 16, tsize: 19 } }),
  (y) => ({ s: T(450, y + 14, 'Then ask: how serious is the breach?', { size: 18, weight: 700, anchor: 'middle' }), h: 16 }),
  (y) => {
    let s = '';
    const a = card(30, y, 405, { kicker: 'REPUDIATORY BREACH', title: 'Breach of a condition, a serious breach of an innominate term, or a refusal to perform at all', size: 16, tsize: 18, fill: C.cream, edge: C.olive });
    const b = card(465, y, 405, { kicker: 'MINOR BREACH', title: 'Any other breach', size: 16, tsize: 18, minH: a.h, vcenter: true });
    s += a.s + b.s;
    const y2 = y + a.h + 50;
    s += arrow(180, y2 - 46, 120, y2 - 6, { w: 3.5 }) + arrow(285, y2 - 46, 345, y2 - 6, { w: 3.5 }) + arrow(668, y + a.h + 4, 668, y2 - 6, { w: 3.5 });
    s += card(30, y2, 190, { title: 'Terminate', body: 'and claim damages', align: 'middle', size: 16, tsize: 19, fill: C.tealLight, edge: C.tealDark, minH: 84 }).s;
    s += card(245, y2, 190, { title: 'Affirm', body: 'and continue', align: 'middle', size: 16, tsize: 19, fill: C.tealLight, edge: C.tealDark, minH: 84 }).s;
    s += card(465, y2, 405, { title: 'Damages only', align: 'middle', size: 16, tsize: 19, minH: 84, vcenter: true }).s;
    return { s, h: y2 - y + 84 };
  },
],
'Actual breach happens when performance is due; anticipatory breach before it is due. A repudiatory breach, meaning breach of a condition, a serious breach of an innominate term or a refusal to perform, lets the innocent party choose to terminate and claim damages or affirm and continue. A minor breach gives damages only.',
'A repudiatory breach gives a choice: terminate or affirm. A minor one gives damages only.', H2.br);

// 04 Anticipatory breach timeline
{
  const tlz = (y) => {
    let s = '';
    const ly = y + 76, xa = 80, xb = 360, xc = 780;
    s += `<line x1="50" y1="${ly}" x2="850" y2="${ly}" stroke="${C.ink}" stroke-width="4"/>`;
    [[xa, 'contract made', C.panel], [xb, 'repudiation', C.cream], [xc, 'performance due', C.panel]].forEach(([x, l, f]) => { s += `<circle cx="${x}" cy="${ly}" r="12" fill="${f}" stroke="${x === xb ? C.rust : C.ink}" stroke-width="3"/>` + T(x, ly - 24, l, { size: 17, weight: 700, anchor: 'middle', fill: x === xb ? C.rust : C.ink }); });
    s += T(450, y + 4, 'e.g. Hochster v De la Tour: a courier told in May he would not be needed from 1 June', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
    const c1 = card(30, y + 146, 405, { kicker: 'OPTION 1: ACCEPT', title: 'End the contract and sue at once', body: ['Damages assessed by reference to the date performance was due', 'The duty to mitigate begins', '*Hochster v De la Tour*; *Frost v Knight* (1872)'], bullets: true, gap: 4, size: 16, tsize: 18, fill: C.tealLight, edge: C.tealDark, bfill: C.ink });
    const c2 = card(465, y + 146, 405, { kicker: 'OPTION 2: AFFIRM', title: 'Wait for the date of performance', body: ['*White and Carter v McGregor* (1962): displayed the adverts, recovered the full price', '**Risk:** the contract stays alive for both. *Avery v Bowden* (1855): Crimean War frustrated it; claim lost'], bullets: true, gap: 4, size: 16, tsize: 18, fill: C.cream, edge: C.olive, bfill: C.ink });
    const h = Math.max(c1.h, c2.h);
    s += card(30, y + 146, 405, { kicker: 'OPTION 1: ACCEPT', title: 'End the contract and sue at once', body: ['Damages assessed by reference to the date performance was due', 'The duty to mitigate begins', '*Hochster v De la Tour*; *Frost v Knight* (1872)'], bullets: true, gap: 4, size: 16, tsize: 18, fill: C.tealLight, edge: C.tealDark, bfill: C.ink, minH: h }).s + c2.s;
    s += arrow(xb - 20, ly + 20, 232, y + 140, { w: 3, color: C.tealDark, marker: 'ahT' }) + arrow(xb + 20, ly + 20, 668, y + 140, { w: 3, color: C.olive, marker: 'ahO' });
    return { s, h: 146 + Math.max(h, c2.h) };
  };
  F('04-anticipatory-breach', 'Anticipatory breach: accept or affirm?', '', [tlz],
    'A timeline from contract to repudiation to the date performance is due. In Hochster v De la Tour the courier was told in May he would not be needed from 1 June. Option 1: accept the repudiation and sue at once, with damages assessed by reference to the performance date and a duty to mitigate (Hochster; Frost v Knight). Option 2: affirm and wait, as in White and Carter v McGregor, but at the risk shown in Avery v Bowden, where war frustrated the contract and the claim was lost.',
    'Accepting lets you sue at once; affirming keeps the contract alive for both sides.', H2.br);
}

// 05 Frustration categories
F('05-frustration-categories', 'When is a contract frustrated?', 'After formation, without fault: performance impossible, illegal or radically different', [
  (y) => grid(y, [
    { kicker: 'DESTRUCTION', title: 'Taylor v Caldwell (1863)', body: 'Music hall burned down before the first concert' },
    { kicker: 'DEATH OR INCAPACITY', title: 'Robinson v Davison (1871)', body: 'Pianist too ill to perform. Also *Condor v Baron Knights* (1966): drummer' },
    { kicker: 'SUPERVENING ILLEGALITY', title: 'Metropolitan Water Board v Dick Kerr (1918)', body: 'Wartime order stopped work on a reservoir' },
    { kicker: 'PURPOSE DEFEATED', title: 'Krell v Henry (1903)', body: 'Room hired to watch the coronation procession, which was cancelled' },
    { kicker: 'LONG INTERRUPTION', title: 'Jackson v Union Marine Insurance (1874)', body: 'Ship stranded for months: voyage commercially different' },
    { kicker: 'THE TEST', title: 'Davis Contractors v Fareham UDC (1956)', body: '“A thing radically different from that which was undertaken by the contract”', fill: C.cream, edge: C.olive },
  ], 3, { gap: 12, vcenter: false, card: { size: 16, tsize: 17, pad: 16 } }),
],
'Five categories of frustration with cases: destruction of the subject matter (Taylor v Caldwell), death or incapacity in a personal contract (Robinson v Davison; Condor v Baron Knights), supervening illegality (Metropolitan Water Board v Dick Kerr), purpose defeated (Krell v Henry) and long interruption (Jackson v Union Marine Insurance). The test from Davis Contractors is performance radically different from what was undertaken.',
'An event after formation, without fault, that makes performance radically different.', H2.fr);

// 06 Limits on frustration
F('06-frustration-limits', 'Not frustrated: the doctrine is narrow', 'Parties are expected to allocate risk themselves', [
  (y) => {
    let s = '';
    const bx = 40, W = 820, sc = W / 24;
    s += T(bx, y + 18, 'Davis Contractors: labour shortages, more time and cost', { size: 17, weight: 700 });
    s += `<rect x="${bx}" y="${y + 30}" width="${8 * sc}" height="34" rx="6" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + T(bx + 10, y + 53, 'planned: 8 months', { size: 16, weight: 700 });
    s += `<rect x="${bx}" y="${y + 72}" width="${22 * sc}" height="34" rx="6" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>` + T(bx + 10, y + 95, 'actual: 22 months, still not frustrated', { size: 16, weight: 700 });
    return { s, h: 110 };
  },
  (y) => grid(y, [
    { kicker: 'HARDER OR DEARER', title: 'Tsakiroglou v Noblee Thorl (1962)', body: 'Suez Canal closed; longer route round the Cape' },
    { kicker: 'PURPOSE NOT WHOLLY DEFEATED', title: 'Herne Bay Steam Boat v Hutton (1903)', body: 'Review cancelled but the fleet could still be seen; contrast *Krell v Henry*' },
    { kicker: 'SELF-INDUCED', title: 'Maritime National Fish (1935); The Super Servant Two (1990)', body: 'The party chose which contract to perform' },
    { kicker: 'PROVIDED FOR', title: 'Foreseen risks and express clauses', body: 'A force majeure clause governs instead' },
  ], 2, { gap: 14, vcenter: false, card: { size: 16, tsize: 18, fill: C.panel } }),
],
'Bars show Davis Contractors, where a job planned for 8 months took 22 and cost more but was not frustrated. Four further limits: harder or dearer is not enough (Tsakiroglou); the purpose must be wholly defeated (Herne Bay Steam Boat v Hutton, contrasted with Krell v Henry); self-induced frustration does not count (Maritime National Fish; The Super Servant Two); and an express clause such as force majeure governs instead.',
'More time, more cost or a partly defeated purpose is not frustration.', H2.fr);

// 07 1943 Act
F('07-frustrated-contracts-act', 'After frustration: the 1943 Act', 'At common law the contract ends automatically from the moment of frustration', [
  (y) => row(y, [
    { kicker: 'SECTION 1(2): MONEY', title: 'Paid: recoverable. Payable: no longer payable', body: 'The court may let the payee keep or recover a sum for expenses, up to the amount paid or payable before frustration', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'SECTION 1(3): OTHER BENEFITS', title: 'A valuable benefit other than money', body: 'The recipient may be ordered to pay a just sum for it (*BP Exploration v Hunt (No 2)*)', fill: C.cream, edge: C.olive },
  ], { gap: 16, vcenter: false, card: { size: 17, tsize: 19, bfill: C.ink } }),
],
'The Law Reform (Frustrated Contracts) Act 1943. Section 1(2): money paid before frustration is recoverable and money payable ceases to be payable, but the court may allow the payee expenses up to that amount. Section 1(3): a party who received a valuable non-money benefit may be ordered to pay a just sum (BP Exploration v Hunt).',
'Money comes back, less allowed expenses; other benefits are paid for with a just sum.', H2.fr);

// 08 Worked example
F('08-dana-marquee', 'Worked example: Dana’s marquee', '', [
  (y) => card(30, y, 840, { kicker: 'FACTS', body: 'Dana hires a marquee for her wedding on 20 June for £4,000, paying a £1,000 deposit. In April the company says it has double-booked and will not supply. Dana affirms. On 18 June storms make the venue unsafe and the local authority bans all events there.', size: 17, bfill: C.ink, fill: C.tealLight, edge: C.tealDark }),
  (y) => steps(y, [
    { title: 'Anticipatory breach', body: '*Hochster v De la Tour*: she could have accepted, ended the contract and sued at once.' },
    { title: 'She affirmed', body: 'The contract stayed alive for both sides (*White and Carter*).' },
    { title: 'Ban on events: likely frustration', body: 'After formation, without fault, illegal or impossible (*Taylor v Caldwell*; *Dick Kerr*).' },
    { title: 'Breach claim lost', body: 'As in *Avery v Bowden*: she affirmed, then the contract was frustrated.' },
    { title: '1943 Act s1(2)', body: 'She recovers the £1,000 deposit, subject to the company’s allowed expenses up to that sum.' },
  ], { highlight: 4 }),
],
'Dana’s case: the April refusal is an anticipatory breach; she affirms, keeping the contract alive; the 18 June ban on events likely frustrates it; so, as in Avery v Bowden, her claim for the earlier breach is lost; under section 1(2) of the 1943 Act she recovers her £1,000 deposit less any expenses the court allows.',
'Affirming an anticipatory breach can backfire if the contract is then frustrated.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
