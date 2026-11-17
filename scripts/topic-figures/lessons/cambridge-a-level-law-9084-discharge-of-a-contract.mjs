import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-law-9084-discharge-of-a-contract';
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
  perf: '## 3.3.1 Performance',
  breach: '## 3.3.2 Breach',
  frus: '## 3.3.3 Frustration',
  we: '## Worked example',
};

// 01 Strict rule and its exceptions
F('01-performance-exceptions', 'Performance: the strict rule and its exceptions', '', [
  (y) => card(30, y, 840, { kicker: 'THE STRICT RULE', title: 'Discharged only by performing exactly what the contract requires', body: '*Cutter v Powell* (1795): seaman died before the end of the voyage; widow recovered nothing. *Re Moore and Co and Landauer* (1921): cases of 24 tins, not 30; the whole consignment could be rejected.', fill: C.cream, edge: C.olive, size: 16, tsize: 20, bfill: C.ink }),
  (y) => ({ s: T(450, y + 8, 'EXCEPTIONS', { size: 16, weight: 700, anchor: 'middle', fill: C.muted }), h: 0 }),
  4,
  (y) => grid(y, [
    { title: 'Substantial performance', body: 'Price less the cost of putting defects right: *Hoenig v Isaacs*, *Dakin v Lee*. Not met in *Bolton v Mahadeva*: nothing payable.' },
    { title: 'Voluntary acceptance', body: 'A genuine choice to accept part performance: pay a reasonable sum. No real choice in *Sumpter v Hedges*.' },
    { title: 'Divisible contracts', body: 'Each completed part can be paid for: *Ritchie v Atkinson*, freight per ton delivered.' },
    { title: 'Prevention', body: 'Stopped from completing: quantum meruit for work done. *Planché v Colburn*.' },
    { title: 'Tender of performance', body: 'A refused attempt to perform can count: *Startup v Macdonald*, oil late on Saturday but in time.' },
    { title: 'Time of performance', body: 'Of the essence by the contract, its nature, or reasonable notice: *Charles Rickards v Oppenhaim* and *Union Eagle* (ten minutes late).' },
    { title: 'Vicarious performance', body: 'A substitute may perform unless the contract is personal: *British Waggon Co v Lea*; contrast *Robson and Sharpe v Drummond*.' },
  ], 2, { gap: 16, vgap: 14, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink, tgap: 5 } }),
],
'The strict performance rule (Cutter v Powell; Re Moore and Landauer) above seven exceptions, each with its case: substantial performance, voluntary acceptance of part performance, divisible contracts, prevention, tender of performance, time of performance and vicarious performance.',
'Exact performance is the rule; seven exceptions soften its harshness.', H2.perf);

// 02 Breach routes
{
  const box = (x, y, w, o) => card(x, y, w, { size: 16, tsize: 18, pad: 16, bfill: C.ink, align: 'middle', ...o });
  F('02-breach-choices', 'Breach: the innocent party’s choices', '', [
    (y) => {
      const L = 30, R = 460, W = 410;
      let s = '';
      const a = box(L, y, W, { kicker: 'ACTUAL BREACH', title: 'Fails to perform on time, performs defectively or not at all', fill: C.tealLight, edge: C.tealDark, minH: 116, vcenter: true });
      const b = box(R, y, W, { kicker: 'ANTICIPATORY BREACH', title: 'Indicates, before performance is due, that they will not perform', body: '*Hochster v De la Tour* (1853); *Frost v Knight* (1872)', fill: C.tealLight, edge: C.tealDark, minH: 116, vcenter: true });
      const h0 = Math.max(a.h, b.h);
      s += a.s + b.s;
      // actual: repudiatory?
      let ya = y + h0 + 46;
      s += arrow(L + W / 2, y + h0 + 6, L + W / 2, ya - 6);
      const q = box(L, ya, W, { title: 'Repudiatory breach?', body: 'Breach of a condition, a serious breach of an innominate term, or a refusal to perform', fill: C.cream, edge: C.olive });
      s += q.s;
      const yb = y + h0 + 46;
      s += arrow(R + W / 2, y + h0 + 6, R + W / 2, yb - 6);
      const q2 = box(R, yb, W, { title: 'Accept or affirm?', body: 'The innocent party chooses', fill: C.cream, edge: C.olive, minH: q.h, vcenter: true });
      s += q2.s;
      const y2 = ya + q.h + 46, hw = (W - 14) / 2;
      // actual outcomes
      s += arrow(L + W * 0.27, ya + q.h + 6, L + hw / 2, y2 - 6) + arrow(L + W * 0.73, ya + q.h + 6, L + hw + 14 + hw / 2, y2 - 6);
      const o1 = box(L, y2, hw, { title: 'Terminate', body: 'and claim damages' });
      const o2 = box(L + hw + 14, y2, hw, { title: 'Affirm', body: 'and continue' });
      const o3 = box(R, y2, hw, { title: 'Accept', body: 'End the contract and sue at once: certainty, early mitigation', fill: C.tealLight, edge: C.tealDark });
      const o4 = box(R + hw + 14, y2, hw, { title: 'Affirm and wait', body: 'Risky: in *Avery v Bowden* (1855) war frustrated the contract and the right to sue was lost', fill: C.panel });
      const H = Math.max(o1.h, o2.h, o3.h, o4.h);
      const mk = (x, o) => box(x, y2, hw, { ...o, minH: H, vcenter: true }).s;
      s += mk(L, { title: 'Terminate', body: 'and claim damages' }) + mk(L + hw + 14, { title: 'Affirm', body: 'and continue' }) +
        mk(R, { title: 'Accept', body: 'End the contract and sue at once: certainty, early mitigation', fill: C.tealLight, edge: C.tealDark }) +
        mk(R + hw + 14, { title: 'Affirm and wait', body: 'Risky: in *Avery v Bowden* (1855) war frustrated the contract and the right to sue was lost' });
      s += arrow(R + W * 0.27, yb + q2.h + 6, R + hw / 2, y2 - 6) + arrow(R + W * 0.73, yb + q2.h + 6, R + hw + 14 + hw / 2, y2 - 6);
      const y3 = y2 + H + 16;
      const n = card(R, y3, W, { body: '*White and Carter v McGregor* (1962): affirmed, performed and recovered the full price; later cases require a legitimate interest in performing.', size: 15, pad: 14, bfill: C.muted, fill: C.panel });
      s += n.s;
      return { s, h: y3 + n.h - y };
    },
  ],
  'Two flows. Actual breach: only a repudiatory breach (breach of a condition, a serious breach of an innominate term, or a refusal to perform) lets the innocent party choose to terminate and claim damages or affirm and continue. Anticipatory breach (Hochster v De la Tour; Frost v Knight): the innocent party may accept and sue at once, or affirm and wait, which is risky (Avery v Bowden); White and Carter v McGregor recovered the full price after affirming.',
  'Only a repudiatory breach allows termination, and the innocent party always chooses.', H2.breach);
}

// 03 Frustration: types and limits
F('03-frustration-types-limits', 'Frustration: what counts and what does not', '', [
  (y) => row(y, [
    { kicker: 'TYPES OF FRUSTRATING EVENT', body: ['**Impossibility:** subject matter destroyed (*Taylor v Caldwell*, 1863); illness or death in a personal contract (*Robinson v Davison*; *Condor v Baron Knights*); long unavailability (*Jackson v Union Marine Insurance*)', '**Supervening illegality:** *Fibrosa v Fairbairn* (1943), machinery for Poland after Germany occupied it in 1939', '**Performance pointless:** *Krell v Henry* (1903), sole purpose was the coronation procession; contrast *Herne Bay Steam Boat v Hutton*, only part of the purpose'], fill: C.tealLight, edge: C.tealDark, gap: 10, bullets: true },
    { kicker: 'LIMITATIONS: NOT FRUSTRATED', kfill: C.rust, body: ['**Contractual provision:** a force majeure clause deals with the event', '**Inconvenience or extra expense:** *Davis Contractors v Fareham UDC* (1956), labour shortage; *Tsakiroglou v Noblee Thorl* (1962), Suez Canal closed', '**Foreseen or foreseeable:** the risk was allocated in the bargain', '**Self-induced:** *Maritime National Fish v Ocean Trawlers* (1935); *The Super Servant Two* (1990)'], gap: 10, bullets: true },
  ], { gap: 16, vcenter: false, card: { size: 16, bfill: C.ink, pad: 18 } }),
],
'Two columns. Types of frustrating event: impossibility (Taylor v Caldwell; Robinson v Davison; Condor v Baron Knights; Jackson v Union Marine), supervening illegality (Fibrosa) and performance made pointless (Krell v Henry, contrasted with Herne Bay v Hutton). Limitations: a contractual provision, mere inconvenience or expense (Davis Contractors; Tsakiroglou), foreseen or foreseeable events, and self-induced frustration (Maritime National Fish; The Super Servant Two).',
'Frustration is narrow: a dearer or slower contract is not a frustrated one.', H2.frus);

// 04 Money after frustration: common law to 1943 Act
F('04-money-after-frustration', 'Who keeps the money after frustration?', 'The contract ends automatically at the moment of the event', [
  (y) => steps(y, [
    { kicker: 'COMMON LAW', title: 'Chandler v Webster (1904)', body: 'The loss lay where it fell: money paid before the event could not be recovered.' },
    { kicker: 'COMMON LAW', title: 'Fibrosa (1943)', body: 'Recovery only on a total failure of consideration, so partial failures were left unremedied.' },
    { kicker: 'LAW REFORM (FRUSTRATED CONTRACTS) ACT 1943, s1(2)', title: 'Money paid is recoverable; money payable ceases to be payable', body: 'The court may let the payee keep or recover a sum for expenses, up to the amount paid or payable before the event. *Gamerco v ICM/Fair Warning* (1995): whole advance recovered, nothing retained.' },
    { kicker: 'LAW REFORM (FRUSTRATED CONTRACTS) ACT 1943, s1(3)', title: 'A valuable benefit other than money', body: 'The court may order a just sum, not exceeding the value of the benefit. *BP Exploration v Hunt (No 2)* (1979).' },
  ], { highlight: [2, 3], size: 16 }),
],
'Four steps in the law on money after frustration: Chandler v Webster left the loss where it fell; Fibrosa allowed recovery only on a total failure of consideration; the 1943 Act s1(2) makes money paid recoverable and money payable no longer due, with a discretionary allowance for expenses (Gamerco); s1(3) allows a just sum for a valuable non-money benefit (BP v Hunt).',
'The 1943 Act replaced the harsh common law with recovery and a discretion over expenses.', H2.frus);

// 05 Lena worked example: to scale
{
  const sc = 840 / 8000, X0 = 30;
  F('05-lena-worked-example', 'Worked example: Lena’s marquee', 'Festival banned on 15 July; contract price £8,000', [
    (y) => {
      let s = T(X0, y + 16, 'BEFORE THE EVENT: what was paid and what was payable', { size: 16, weight: 700, fill: C.muted });
      const b = segbar(y + 28, [
        { label: '£2,000', sub: 'deposit paid', frac: 2000, fill: C.mustard },
        { label: '£6,000 balance', sub: 's1(2): ceases to be payable', frac: 6000, fill: C.tealLight },
      ], { h: 78 });
      s += b.s;
      const y2 = y + 106 + 64;
      const w2 = 2000 * sc * 3; // deposit enlarged x3 for legibility
      s += `<line x1="${X0}" y1="${y + 106}" x2="${X0}" y2="${y2}" stroke="${C.ink}" stroke-width="2" stroke-dasharray="6 5"/>` + `<line x1="${X0 + 2000 * sc}" y1="${y + 106}" x2="${X0 + w2}" y2="${y2}" stroke="${C.ink}" stroke-width="2" stroke-dasharray="6 5"/>` + ``;
      s += segbar(y2, [
        { label: 'up to \u00a3700', sub: 'expenses', frac: 700, fill: C.rust, ink: '#ffffff' },
        { label: '\u00a31,300', sub: 'back to Lena', frac: 1300, fill: C.mustard },
      ], { x: X0, w: w2, h: 78 }).s;
      s += para(X0 + w2 + 20, y2 - 24, '**The deposit under s1(2)** (enlarged): recoverable, less any expenses the court allows, up to the sum paid or payable before the event.', 840 - w2 - 20, { size: 15, fill: C.muted }).s;
      const y3 = y2 + 78 + 24;
      const r = row(y3, [
        { kicker: 'FRUSTRATED?', body: 'The ban makes the festival illegal and pointless; neither party caused it.' },
        { kicker: 'COMMON LAW', body: 'The contract ends on 15 July; no further performance is owed.' },
        { kicker: 'CONCLUSION', body: 'Lena recovers between £1,300 and £2,000, depending on what the court thinks just.', fill: C.cream, edge: C.olive },
      ], { gap: 14, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } });
      return { s: s + r.s, h: y3 + r.h - y };
    },
  ],
  'A bar to scale shows the £8,000 price split into the £2,000 deposit paid and the £6,000 balance, which ceases to be payable under s1(2). The deposit is then split into up to £700 kept for Marquee Masters’ expenses and £1,300 returned to Lena. Lena recovers between £1,300 and £2,000.',
  'Deposit back, balance cancelled, with up to £700 kept for expenses.', H2.we);
}

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
