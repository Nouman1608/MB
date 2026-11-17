import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-law-7162-remedies-law-of-contract';
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
  dmg: '## Compensatory damages',
  eq: '## Equitable remedies',
  term: '## Termination of contract for breach',
  we: '## Worked example',
};
const AR = (x1, y1, x2, y2, o) => arrow(x1, y1, x2, y2, { w: 3.5, ...o });

// 01 Damages filter
F('01-damages-filter', 'From breach to damages: three filters', 'Aim: the position as if the contract had been performed (Robinson v Harman, 1848)', [
  (y) => card(30, y, 840, { kicker: 'LOSS', title: 'What loss has the claimant suffered?', body: 'Expectation, reliance, loss of a chance, loss of amenity, non-pecuniary. No provable loss: **nominal damages**', size: 16, tsize: 19, pad: 16, bfill: C.ink }),
  (y) => ({ s: AR(450, y - 18, 450, y + 2), h: 0 }),
  (y) => {
    const W = 270, gap = 15;
    const items = [
      ['1  CAUSATION', 'Was the breach an effective cause?', '✗ *Quinn v Burch Brothers* (1966): no stepladder, used an unfooted trestle and fell: breach the occasion, not the cause'],
      ['2  REMOTENESS', 'Within *Hadley v Baxendale* (1854)?', 'Arising naturally, or in both parties’ reasonable contemplation **when the contract was made**'],
      ['3  MITIGATION', 'Did the claimant take reasonable steps?', 'Loss reasonably avoidable is not recoverable (*British Westinghouse*, 1912)'],
    ];
    const cs = items.map(([k, t1, b], i) => card(30 + i * (W + gap), y, W, { kicker: k, title: t1, body: b, size: 15, tsize: 17, pad: 14, bfill: C.ink, fill: C.tealLight, edge: C.tealDark }));
    const H = Math.max(...cs.map((c) => c.h));
    let s = items.map(([k, t1, b], i) => card(30 + i * (W + gap), y, W, { kicker: k, title: t1, body: b, size: 15, tsize: 17, pad: 14, bfill: C.ink, fill: C.tealLight, edge: C.tealDark, minH: H }).s).join('');
    return { s, h: H };
  },
  (y) => ({ s: AR(450, y - 18, 450, y + 2), h: 0 }),
  (y) => card(170, y, 560, { title: 'Recoverable compensatory damages', body: 'Available as of right once breach and loss are shown; not punitive', align: 'middle', size: 16, tsize: 19, pad: 16, bfill: C.ink, fill: C.cream, edge: C.olive }),
],
'Starting from the claimant’s loss, damages pass three filters: causation (the breach must be an effective cause; Quinn v Burch Brothers), remoteness (Hadley v Baxendale, judged at the time of contracting) and mitigation (British Westinghouse). What remains is recoverable as of right, compensatory, not punitive.',
'Loss is reduced by causation, remoteness and mitigation before damages are paid.', H2.dmg, { gap: 22 });

// 02 Categories of loss
F('02-categories-of-loss', 'Categories of recoverable loss', '', [
  (y) => grid(y, [
    { kicker: 'EXPECTATION', body: 'The value of the promised performance: price difference or lost profit (*Robinson v Harman*)', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'RELIANCE', body: 'Wasted expenditure where profit is speculative. *Anglia TV v Reed* (1972): pre- and post-contract costs' },
    { kicker: 'LOSS OF A CHANCE', body: '*Chaplin v Hicks* (1911): denied the final interview of a beauty contest' },
    { kicker: 'LOSS OF AMENITY', body: '*Ruxley v Forsyth* (1996): pool too shallow but safe; rebuilding unreasonable; £2,500 for lost amenity' },
    { kicker: 'NON-PECUNIARY: GENERALLY NO', body: '*Addis v Gramophone* (1909): no damages for distress', kfill: C.rust, edge: C.rust },
    { kicker: 'NON-PECUNIARY: PLEASURE CONTRACTS', body: '*Jarvis v Swans Tours* (1973): holiday. *Farley v Skinner* (2001): aircraft noise not reported', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], 2, { gap: 14, vgap: 12, vcenter: false, card: { size: 15, pad: 15, bfill: C.ink } }),
],
'Six categories: expectation loss (Robinson v Harman), reliance loss (Anglia Television v Reed), loss of a chance (Chaplin v Hicks), loss of amenity where cure is disproportionate (Ruxley v Forsyth, £2,500), and non-pecuniary loss, generally barred (Addis) but recoverable where pleasure or peace of mind is a major object (Jarvis; Farley v Skinner).',
'Expectation is the default; the others fill gaps where it cannot be measured.', H2.dmg);

// 03 Remoteness
F('03-remoteness-hadley', 'Remoteness: the two limbs of Hadley v Baxendale', 'Judged at the time the contract was made, not the time of breach', [
  (y) => row(y, [
    { kicker: 'LIMB 1', title: 'Losses arising naturally', body: 'In the usual course of things. “Not unlikely” to result: *The Heron II* (1969), fall in the sugar market', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'LIMB 2', title: 'Losses both parties reasonably contemplated', body: 'Because of **special knowledge** shared at contracting', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { gap: 18, vcenter: false, card: { size: 15, tsize: 18, pad: 16, bfill: C.ink } }),
  (y) => grid(y, [
    { kicker: '✗ HADLEY v BAXENDALE (1854)', body: 'Delayed crankshaft: mill’s lost profit too remote; carrier did not know there was no spare', kfill: C.rust },
    { kicker: 'VICTORIA LAUNDRY (1949)', body: 'Late boiler: ordinary profits ✓; especially lucrative dyeing contracts, unknown to the seller ✗' },
    { kicker: '✓ PARSONS v UTTLEY INGHAM (1978)', body: 'Type of loss (illness) contemplated, so full extent recovered: the pigs died', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'THE ACHILLEAS (2008)', body: 'Did the defendant **assume responsibility**? Market rate for the overrun only, not the lost follow-on charter' },
  ], 2, { gap: 14, vgap: 12, vcenter: false, card: { size: 15, pad: 15, bfill: C.ink } }),
],
'Hadley v Baxendale’s two limbs: losses arising naturally (with The Heron II’s “not unlikely” test) and losses in both parties’ contemplation because of special knowledge, judged at contracting. Cases: Hadley (lost mill profits too remote), Victoria Laundry (ordinary profits recovered, lucrative contracts not), Parsons v Uttley Ingham (type contemplated, full extent recovered) and The Achilleas (assumption of responsibility).',
'What the defendant knew when contracting sets the limit of liability.', H2.dmg, { gap: 18 });

// 04 Equitable remedies
F('04-equitable-remedies', 'Equitable remedies: discretionary, not as of right', '', [
  (y) => row(y, [
    { kicker: 'SPECIFIC PERFORMANCE', title: 'Carry out the contract', body: 'Only where **damages are inadequate**', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'RESCISSION', title: 'Set aside from the start', body: 'Restores pre-contract positions. Main remedy for **misrepresentation** and **economic duress**', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { gap: 18, vcenter: false, card: { size: 16, tsize: 19, pad: 16, bfill: C.ink } }),
  (y) => {
    const L = stack(y, [
      { kicker: '✓ GRANTED', body: '**Land**, treated as unique. **Unique goods**: *Falcke v Gray* (1859), rare china vases. *Beswick v Beswick* (1968): annuity for a widow, damages to the estate nominal', fill: C.tealLight, edge: C.tealDark },
      { kicker: '✗ REFUSED', body: 'Personal service; **constant supervision** (*Co-operative Insurance v Argyll*, 1997: keep a supermarket open); **severe hardship** (*Patel v Ali*, 1984); unfairness or delay', kfill: C.rust, edge: C.rust },
    ], { x: 30, w: 411, gap: 12, card: { size: 15, pad: 14, bfill: C.ink } });
    const R = card(459, y, 411, { kicker: '✗ RESCISSION LOST BY', body: ['Affirmation', 'Lapse of time', 'Intervening third-party rights', 'Restitution impossible'], bullets: true, size: 16, pad: 16, bfill: C.ink, gap: 6, kfill: C.rust, minH: L.h });
    return { s: L.s + R.s, h: L.h };
  },
],
'Specific performance orders the contract to be carried out where damages are inadequate: granted for land, unique goods (Falcke v Gray) and in Beswick v Beswick; refused for personal service, constant supervision (Co-operative Insurance v Argyll), severe hardship (Patel v Ali) or unfairness and delay. Rescission sets the contract aside for misrepresentation or economic duress, and is lost by affirmation, lapse of time, third-party rights or impossible restitution.',
'Both depend on the court’s discretion, unlike damages.', H2.eq, { gap: 18 });

// 05 Termination vs rescission
F('05-termination-for-breach', 'Termination for breach', 'A self-help remedy: no need to go to court', [
  (y) => row(y, [
    { kicker: 'BREACH OF A CONDITION', body: '*Poussard v Spiers* (1876)' },
    { kicker: 'INNOMINATE TERM', body: 'Serious breach: deprives of substantially the whole benefit (*Hong Kong Fir*, 1962). Not a minor breach (*The Hansa Nord*, 1976)' },
    { kicker: 'RENUNCIATION', body: 'Including anticipatory breach' },
  ], { gap: 12, vcenter: false, card: { size: 15, pad: 14, bfill: C.ink } }),
  (y) => ({ s: AR(450, y - 16, 450, y + 4) + T(462, y - 2, 'innocent party must elect', { size: 15, weight: 700, fill: C.olive }), h: 0 }),
  (y) => row(y, [
    { kicker: 'TERMINATE', title: 'Both parties’ future obligations end', body: 'Damages for loss of the bargain', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'AFFIRM', title: 'The contract stays alive', body: 'Damages for the breach', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { gap: 18, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink } }),
  (y) => {
    const x0 = 120, x1 = 840, yy = y + 52;
    let s = panel(30, y, 840, 150) + T(50, y + 30, 'RESCISSION OR TERMINATION?', { size: 15, weight: 700, fill: C.tealDark });
    s += `<line x1="${x0}" y1="${yy}" x2="${x1}" y2="${yy}" stroke="${C.ink}" stroke-width="3"/>`;
    s += `<line x1="${x0}" y1="${yy - 14}" x2="${x0}" y2="${yy + 14}" stroke="${C.ink}" stroke-width="3"/>` + T(x0, yy + 34, 'contract made', { size: 15, anchor: 'middle', fill: C.muted });
    s += `<line x1="520" y1="${yy - 14}" x2="520" y2="${yy + 14}" stroke="${C.ink}" stroke-width="3"/>` + T(520, yy + 34, 'breach', { size: 15, anchor: 'middle', fill: C.muted });
    s += arrow(510, yy + 66, x0 + 6, yy + 66, { color: C.olive, marker: 'ahO', w: 4 }) + T(315, yy + 90, 'rescission: undone from the start', { size: 15, weight: 700, anchor: 'middle', fill: C.olive });
    s += arrow(530, yy + 66, x1 - 4, yy + 66, { color: C.tealDark, marker: 'ahT', w: 4 }) + T(685, yy + 90, 'termination: ends the future', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
    return { s, h: 150 };
  },
  (y) => note(y, 'Consumers', 'Consumer Rights Act 2015: the short-term and final rights to reject goods end the contract with a refund.', { size: 16 }),
],
'Termination is available for breach of a condition (Poussard v Spiers), a serious breach of an innominate term (Hong Kong Fir; not The Hansa Nord) or renunciation. The innocent party elects to terminate, ending future obligations with damages for the lost bargain, or to affirm. Rescission undoes a contract from the start; termination ends it for the future. Consumers have statutory rights to reject under the Consumer Rights Act 2015.',
'Termination ends the future; rescission unwinds the past.', H2.term, { gap: 18 });

// 06 Leah
F('06-leah-oven', 'Worked example: Leah’s late oven', 'Ordered for £10,000; told of a wedding contract worth £6,000 profit', [
  (y) => {
    const rows = [
      ['Wedding profit £6,000', 'Ovenco was told: within Hadley’s second limb (*Victoria Laundry*)', 'Not too remote', C.tealDark, C.tealLight],
      ['Banquet profit £9,000', 'Never mentioned and unusually profitable', 'Too remote', C.rust, C.panel],
    ];
    let s = '', cy = y;
    rows.forEach(([a, b, r, col, f]) => {
      const c = card(250, cy, 440, { body: b, size: 16, pad: 14, bfill: C.ink, minH: 70, vcenter: true });
      s += `<rect x="30" y="${cy}" width="206" height="${c.h}" rx="12" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + para(133, cy + c.h / 2 - 3, a, 180, { size: 17, weight: 700, anchor: 'middle' }).s + c.s;
      s += `<rect x="706" y="${cy}" width="164" height="${c.h}" rx="12" fill="${f}" stroke="${col}" stroke-width="2.5"/>` + T(788, cy + c.h / 2 + 7, r, { size: 17, weight: 700, anchor: 'middle', fill: col });
      cy += c.h + 10;
    });
    return { s, h: cy - y - 10 };
  },
  (y) => {
    const head = T(30, y + 20, 'Mitigation (Payzu v Saunders): a similar oven was available on 10 April', { size: 18, weight: 700 });
    const by = y + 44, sc = 60;
    let s = '';
    const bar = (yy, label, val, f, e, note2) => `<rect x="250" y="${yy}" width="${val * sc}" height="44" fill="${f}" stroke="${e}" stroke-width="2.5"/>` + T(236, yy + 28, label, { size: 16, weight: 700, anchor: 'end' }) + T(258 + val * sc, yy + 28, note2, { size: 16, weight: 700, fill: e });
    s += bar(by, 'Lost wedding profit', 6, C.cream, C.olive, '£6,000');
    s += bar(by + 58, 'Extra cost of oven', 1, C.tealLight, C.tealDark, '£1,000 (£11,000 − £10,000)');
    return { s: head + s, h: 44 + 58 + 44 };
  },
  (y) => note(y, '', 'A court may limit damages to the **£1,000 extra cost** rather than the £6,000 lost profit. Specific performance is irrelevant after delivery, and an oven is not unique.', { size: 16 }),
],
'Leah’s wedding profit of £6,000 is not too remote because Ovenco was told (Victoria Laundry); the unmentioned £9,000 banquet profit is too remote. A similar oven was available for £11,000 on 10 April, so under Payzu v Saunders a court may limit damages to the £1,000 extra cost rather than £6,000. Specific performance is irrelevant.',
'Remoteness removes the banquet; mitigation may shrink the rest to £1,000.', H2.we, { gap: 20 });

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
