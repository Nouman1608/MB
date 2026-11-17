import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-law-9084-remedies-for-breach-of-a-contract';
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
  dam: '## 3.4.1 Damages',
  eq: '## 3.4.2 Equitable remedies',
  we: '## Worked example: calculating damages',
};

// 01 Measures of damages
F('01-measures-of-damages', 'Measuring damages', 'Robinson v Harman (1848): the position as if the contract had been performed', [
  (y) => row(y, [
    { kicker: 'EXPECTATION LOSS', title: 'The benefit of the bargain', body: ['**Difference in value:** contract price v market price when delivery was due (SGA 1979 s51)', '**Cost of cure:** not if out of all proportion (*Ruxley*)', '**Loss of profit:** subject to remoteness'], gap: 6, fill: C.cream, edge: C.olive },
    { kicker: 'RELIANCE LOSS', title: 'Wasted expenditure', body: ['When profit is too speculative: *Anglia TV v Reed* (1972), even pre-contract spending', 'Not to escape a bad bargain: *C and P Haulage v Middleton* (1983)'], gap: 6, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'NON-PECUNIARY LOSS', title: 'Disappointment, distress', body: ['Rule: not recoverable (*Addis*, 1909)', 'Except pleasure, relaxation or peace of mind: *Jarvis*; *Jackson*; *Farley v Skinner*; *Watts v Morrow* (discomfort)'], gap: 6 },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink } }),
  (y) => note(y, '', '**Common mistake:** claiming both expectation and reliance damages for the same loss.', { size: 17, align: 'middle', fill: C.panel, edge: C.panelEdge }),
],
'Three measures of contract damages: expectation loss (difference in value under s51, cost of cure limited by Ruxley, loss of profit), reliance loss for wasted expenditure (Anglia TV v Reed; not to escape a bad bargain, C and P Haulage), and non-pecuniary loss, normally barred by Addis but allowed for pleasure or peace of mind contracts (Jarvis, Jackson, Farley v Skinner, Watts v Morrow).',
'Choose one measure: expectation, reliance, or in limited cases disappointment.', H2.dam);

// 02 Ruxley to scale
{
  const k = 760 / 21560;
  F('02-ruxley-cost-of-cure', 'Ruxley Electronics v Forsyth (1995)', 'A pool built shallower than agreed, but perfectly usable', [
    (y) => {
      let s = '';
      const bar = (yy, v, fill, label, sub) => `<rect x="80" y="${yy}" width="${v * k}" height="58" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>` + T(80, yy - 10, label, { size: 18, weight: 700 }) + T(80 + v * k - 12, yy + 37, sub, { size: 20, weight: 700, anchor: 'end' });
      s += bar(y + 28, 21560, C.panel, 'Cost of cure: rebuild the pool (unreasonable, not awarded)', '£21,560');
      s += `<line x1="60" y1="${y + 18}" x2="60" y2="${y + 210}" stroke="${C.ink}" stroke-width="2.5"/>`;
      s += `<rect x="80" y="${y + 140}" width="${2500 * k}" height="58" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + T(80, y + 130, 'Awarded: loss of amenity', { size: 18, weight: 700 }) + T(80 + 2500 * k + 14, y + 177, '£2,500', { size: 20, weight: 700 });
      s += T(80 + 2500 * k + 110, y + 177, '← upheld by the House of Lords', { size: 17, fill: C.olive, weight: 600 });
      return { s, h: 210 };
    },
    (y) => note(y, '', 'Cost of cure is not awarded where it would be out of all proportion to the benefit. **Common mistake:** awarding cost of cure automatically.', { size: 17 }),
  ],
  'Two bars to scale: the £21,560 cost of rebuilding the pool, which was refused as unreasonable, against the £2,500 award for loss of amenity upheld by the House of Lords in Ruxley Electronics v Forsyth.',
  'Rebuilding cost over eight times the award: cost of cure must be reasonable.', H2.dam);
}

// 03 Limits on recovery
F('03-limits-on-recovery', 'Three limits on what can be recovered', '', [
  (y) => steps(y, [
    { kicker: 'CAUSATION', title: 'Was the breach an effective cause?', body: 'The claimant’s own unreasonable act may break the chain: *Quinn v Burch Bros* (1966), unsafe trestle used instead of a stepladder.' },
    { kicker: 'REMOTENESS: HADLEY v BAXENDALE (1854)', title: 'Arises naturally, or in both parties’ reasonable contemplation when contracting?', body: '*Victoria Laundry* (1949): normal profits yes, unknown dyeing contracts no. *The Heron II* (1969): “not unlikely”. *Parsons v Uttley Ingham* (1978): type, not extent. *The Achilleas* (2008): assumed responsibility.' },
    { kicker: 'MITIGATION', title: 'Could the loss reasonably have been avoided?', body: '*British Westinghouse* (1912). *Payzu v Saunders* (1919): should have accepted cash terms. Not demanding: *Pilkington v Wood* (1953), no uncertain litigation needed.' },
  ], { size: 16, highlight: 1 }),
  (y) => row(y, [
    { kicker: '+ DAMAGES', body: 'As of right; predictable; money is adequate where a replacement can be bought', fill: C.tealLight, edge: C.tealDark },
    { kicker: '− DAMAGES', kfill: C.rust, body: 'Loss hard to prove; non-pecuniary loss limited; remoteness leaves real losses; money cannot replace unique property' },
  ], { gap: 14, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } }),
],
'Three filters on damages: causation (Quinn v Burch Bros), remoteness under Hadley v Baxendale as refined in Victoria Laundry, The Heron II, Parsons v Uttley Ingham and The Achilleas, and mitigation (British Westinghouse; Payzu v Saunders; Pilkington v Wood). Below, the strengths and weaknesses of damages as a remedy.',
'Loss must be caused by the breach, not too remote, and not avoidable.', H2.dam);

// 04 Equitable remedies
F('04-equitable-remedies', 'Equitable remedies', 'Discretionary, used where damages are inadequate', [
  (y) => grid(y, [
    { kicker: 'SPECIFIC PERFORMANCE', title: 'Perform the contract', body: 'Land and unique goods: *Falcke v Gray* (1859), rare china jars. *Beswick v Beswick* (1968): damages would have been nominal' },
    { kicker: 'SPECIFIC RESTITUTION', title: 'Return the specific property', body: 'Rather than its value, where money is not a sufficient substitute' },
    { kicker: 'RESCISSION', title: 'Set the contract aside', body: 'Restores pre-contract positions, e.g. after misrepresentation' },
    { kicker: 'INJUNCTION', title: 'Do not do something', body: 'Breaking a negative promise: *Warner Brothers v Nelson* (1937)' },
  ], 2, { gap: 14, vgap: 14, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink, fill: C.tealLight, edge: C.tealDark } }),
  (y) => ({ s: T(450, y + 12, 'WHEN THE COURT WILL REFUSE', { size: 16, weight: 700, anchor: 'middle', fill: C.rust }), h: 12 }),
  (y) => table(y, [
    { w: 0.9, head: 'Limitation' },
    { w: 2, head: 'Rule and case', hfill: C.cream },
  ], [
    ['Damages adequate', 'Ordinary goods available elsewhere'],
    ['Personal services', 'No forced work; nor an injunction that in practice forces it (*Page One Records v Britton*, 1968)'],
    ['Constant supervision', '*Co-operative Insurance v Argyll Stores* (1997): no order to keep trading'],
    ['Mutuality', 'Not against one party if not against the other: a minor cannot obtain it (*Flight v Bolland*, 1828)'],
    ['Conduct, delay, hardship', 'Clean hands; delay defeats equity; hardship (*Patel v Ali*, 1984)'],
    ['Bars to rescission', 'Affirmation (*Long v Lloyd*); lapse of time (*Leaf v International Galleries*); restoration impossible; third-party rights'],
  ], { size: 16, hsize: 17 }),
],
'Four equitable remedies: specific performance (Falcke v Gray; Beswick), specific restitution, rescission and injunction (Warner Brothers v Nelson). A table lists the limits: adequate damages, personal services (Page One Records), constant supervision (Co-operative Insurance v Argyll), mutuality (Flight v Bolland), conduct, delay and hardship (Patel v Ali), and the bars to rescission (Long v Lloyd; Leaf).',
'Equity fills gaps that money leaves, but only at the court’s discretion.', H2.eq);

// 05 Bayview worked example (to scale)
{
  const y0p = 3800, y1p = 5400; // price axis
  F('05-bayview-worked-example', 'Worked example: Bayview’s coffee machine', 'BrewTech fails to deliver a £4,000 machine due on 1 May', [
    (y) => {
      const L = 130, R = 560, top = y + 20, bot = y + 300;
      const Y = (p) => bot - ((p - y0p) * (bot - top)) / (y1p - y0p);
      const xMay = 250, xJul = 480;
      let s = `<line x1="${L}" y1="${bot}" x2="${R}" y2="${bot}" stroke="${C.ink}" stroke-width="2.5"/>` + `<line x1="${L}" y1="${top}" x2="${L}" y2="${bot}" stroke="${C.ink}" stroke-width="2.5"/>`;
      [4000, 4600, 5200].forEach((p) => { s += `<line x1="${L}" y1="${Y(p)}" x2="${R}" y2="${Y(p)}" stroke="${C.panelEdge}" stroke-width="1.5" stroke-dasharray="4 5"/>` + T(L - 10, Y(p) + 6, `£${p.toLocaleString('en-GB')}`, { size: 16, weight: 700, anchor: 'end' }); });
      s += T(xMay, bot + 26, '1 May', { size: 16, weight: 700, anchor: 'middle' }) + T(xJul, bot + 26, '1 July', { size: 16, weight: 700, anchor: 'middle' });
      s += `<line x1="${L}" y1="${Y(4000)}" x2="${R}" y2="${Y(4000)}" stroke="${C.tealDark}" stroke-width="3"/>` + T(R, Y(4000) + 24, 'contract price', { size: 15, anchor: 'end', fill: C.tealDark, weight: 600 });
      s += `<rect x="${xMay - 26}" y="${Y(4600)}" width="52" height="${Y(4000) - Y(4600)}" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`;
      s += `<rect x="${xJul - 26}" y="${Y(5200)}" width="52" height="${Y(4600) - Y(5200)}" fill="${C.rust}" opacity="0.85" stroke="${C.ink}" stroke-width="2"/>` + `<rect x="${xJul - 26}" y="${Y(4600)}" width="52" height="${Y(4000) - Y(4600)}" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`;
      s += `<circle cx="${xMay}" cy="${Y(4600)}" r="7" fill="${C.ink}"/><circle cx="${xJul}" cy="${Y(5200)}" r="7" fill="${C.ink}"/>` + path(`M${xMay},${Y(4600)} L${xJul},${Y(5200)}`, { w: 2.5, stroke: C.muted, extra: 'stroke-dasharray="6 5"' });
      s += T(xMay + 34, Y(4300) + 6, '£600', { size: 17, weight: 700 }) + T(xJul + 34, Y(4900) + 6, '+£600', { size: 17, weight: 700, fill: C.rust });
      const c = stack(y + 10, [
        { kicker: 'MARKET RULE (s51)', title: '£4,600 − £4,000 = £600', body: 'Measured at the date delivery was due', fill: C.cream, edge: C.olive },
        { kicker: 'FAILURE TO MITIGATE', kfill: C.rust, title: 'Extra £600 by July', body: 'Not recoverable' },
      ], { x: 600, w: 270, gap: 12, card: { size: 15, tsize: 17, pad: 14, bfill: C.ink } });
      return { s: s + c.s, h: Math.max(330, c.h + 10) };
    },
    (y) => row(y, [
      { kicker: 'LOST PROFITS (£3,000)', body: 'Normal profits arise naturally (Hadley, first limb), but only for a reasonable replacement period', fill: C.tealLight, edge: C.tealDark },
      { kicker: 'CATERING CONTRACT (£10,000)', kfill: C.rust, body: 'Never mentioned: too remote, like the dyeing contracts in *Victoria Laundry*' },
      { kicker: 'CONCLUSION', body: '£600 plus normal profits lost for a reasonable replacement period', fill: C.cream, edge: C.olive },
    ], { gap: 12, vcenter: false, card: { size: 16, pad: 14, bfill: C.ink } }),
  ],
  'A price chart: the contract price is £4,000, the market price on 1 May is £4,600 and on 1 July £5,200. Damages are £600 at the delivery date under s51; the further £600 from waiting until July is a failure to mitigate. Normal lost profits are recoverable for a reasonable replacement period, but the £10,000 catering contract is too remote (Victoria Laundry).',
  'Measure at the delivery date; delay and undisclosed contracts are not recoverable.', H2.we);
}

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
