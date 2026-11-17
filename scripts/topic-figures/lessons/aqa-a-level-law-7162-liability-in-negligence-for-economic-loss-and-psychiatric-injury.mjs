import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-law-7162-liability-in-negligence-for-economic-loss-and-psychiatric-injury';
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
  p1: '## Part 1: pure economic loss',
  p2: '## Part 2: psychiatric injury',
  we: '## Worked problem',
};
const AR = (x1, y1, x2, y2, o) => arrow(x1, y1, x2, y2, { w: 3.5, ...o });

// 01 Classifying financial loss
F('01-classify-economic-loss', 'Is the financial loss pure or consequential?', '', [
  (y) => card(170, y, 560, { title: 'Did the loss follow physical damage to the claimant’s own person or property?', align: 'middle', fill: C.cream, edge: C.olive, tsize: 19, pad: 16 }),
  (y) => ({ s: AR(330, y - 18, 230, y + 18) + AR(570, y - 18, 670, y + 18) + T(214, y + 12, 'yes', { size: 17, weight: 700, fill: C.tealDark, anchor: 'end' }) + T(686, y + 12, 'no', { size: 17, weight: 700, fill: C.rust }), h: 14 }),
  (y) => row(y, [
    { kicker: 'CONSEQUENTIAL', title: 'Recoverable', body: ['Wages lost after a broken leg', 'Profit lost on goods the defendant destroyed'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'PURE ECONOMIC LOSS', title: 'Generally not recoverable', body: ['Profit lost because a supplier’s factory was damaged', 'Repairing a defect before it damages anything else (*Murphy*)'], bullets: true, kfill: C.rust, edge: C.rust },
  ], { gap: 40, vcenter: false, card: { size: 16, tsize: 19, pad: 18, bfill: C.ink, gap: 5 } }),
  (y) => ({ s: AR(560, y - 18, 450, y + 4) + AR(780, y - 18, 780, y + 4), h: 0 }),
  (y) => row(y, [
    { kicker: 'CAUSED BY A NEGLIGENT ACT', body: 'No: *Spartan Steel* (1973), *Weller* (1966), *Murphy v Brentwood DC* (1991). *Junior Books* (1983) is exceptional, confined to its facts.' },
    { kicker: 'CAUSED BY A MISSTATEMENT', body: 'Yes, **if a special relationship exists**: *Hedley Byrne v Heller* (1964)', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { x: 300, w: 570, gap: 14, fr: [1.15, 1], vcenter: false, card: { size: 15, pad: 16, bfill: C.ink } }),
],
'If financial loss follows physical damage to the claimant’s own person or property it is consequential and recoverable, such as lost wages. Otherwise it is pure economic loss: caused by a negligent act it is generally not recoverable (Spartan Steel, Weller, Murphy, with Junior Books as an exception), but caused by a negligent misstatement it can be, where there is a special relationship (Hedley Byrne).',
'Classify the loss first: only pure loss from a misstatement has a clear route to recovery.', H2.p1, { gap: 22 });

// 02 Spartan Steel
F('02-spartan-steel', 'Spartan Steel v Martin (1973): what was recovered?', 'Contractors negligently cut the power cable to the claimant’s factory', [
  (y) => segbar(y, [
    { label: 'Damaged melt', sub: 'physical damage', frac: 1, fill: C.teal },
    { label: 'Profit on that melt', sub: 'consequential', frac: 1, fill: C.tealLight },
    { label: 'Profit on further melts', sub: 'pure economic loss', frac: 1.3, fill: C.panel },
  ], { h: 92, size: 19 }),
  (y) => {
    const W = 840 / 3.3;
    const b1 = `<path d="M38,${y} L${30 + 2 * W - 8},${y}" stroke="${C.tealDark}" stroke-width="5"/>` + T(30 + W, y + 30, 'RECOVERED', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
    const b2 = `<path d="M${30 + 2 * W + 8},${y} L862,${y}" stroke="${C.rust}" stroke-width="5"/>` + T(30 + 2 * W + 1.3 * W / 2, y + 30, 'NOT RECOVERED', { size: 20, weight: 700, anchor: 'middle', fill: C.rust });
    return { s: b1 + b2, h: 40 };
  },
  (y) => note(y, 'Lord Denning’s reasoning', 'Power cuts are a common risk that businesses should insure against and bear themselves.', { size: 17 }),
  (y) => card(30, y, 840, { kicker: 'COMPARE: WELLER v FOOT AND MOUTH DISEASE RESEARCH INSTITUTE (1966)', body: 'A virus escaped; cattle markets closed. Auctioneers who lost business recovered nothing: **no damage to their own property**.', size: 16, pad: 18, bfill: C.ink }),
],
'A bar split into three parts: the damaged melt and the profit on it were recovered, but the profit on further melts that could not be carried out during the power cut was pure economic loss and not recovered. Lord Denning said businesses should insure against power cuts. In Weller, auctioneers with no damage to their own property recovered nothing.',
'Loss tied to damaged property was recovered; profit lost only because of the power cut was not.', H2.p1, { gap: 16 });

// 03 Special relationship
F('03-special-relationship', 'Negligent misstatement: is there a special relationship?', 'Hedley Byrne v Heller (1964), refined in Caparo v Dickman (1990)', [
  (y) => steps(y, [
    { title: 'Special skill or knowledge', body: 'The defendant knows the claimant is likely to rely on it' },
    { title: 'Claimant known to the defendant', body: 'Individually or as a member of an identified group who would rely' },
    { title: 'A particular purpose', body: 'The advice was for a purpose known to the defendant' },
    { title: 'Reasonable reliance', body: 'The claimant reasonably relied on it' },
  ], { size: 16, tsize: 18, gap: 8, pad: 13 }),
  (y) => grid(y, [
    { kicker: '✗ CAPARO (1990)', body: 'Auditors’ reports were for shareholders to supervise the company, not for investors buying shares', kfill: C.rust },
    { kicker: '✓ SMITH v ERIC S BUSH (1990)', body: 'Mortgage valuer knew the buyer would very likely rely; disclaimer failed under UCTA 1977', fill: C.tealLight, edge: C.tealDark },
    { kicker: '✓ CHAUDHRY v PRABHAKAR (1989)', body: 'Unpaid friend claimed knowledge of cars and agreed to find one not in an accident', fill: C.tealLight, edge: C.tealDark },
    { kicker: '✓ SPRING v GUARDIAN ASSURANCE (1994)', body: 'Employer giving a reference owed a duty to the former employee', fill: C.tealLight, edge: C.tealDark },
  ], 2, { gap: 14, vgap: 12, vcenter: false, card: { size: 15, pad: 15, bfill: C.ink } }),
  (y) => note(y, '', 'In *Hedley Byrne* itself the bank escaped: its reference was given “without responsibility”.', { size: 16, align: 'middle', fill: C.panel, edge: C.panelEdge }),
],
'Four elements of a special relationship: special skill or knowledge, a claimant known to the defendant, a particular purpose, and reasonable reliance. No duty was owed to investors in Caparo; a duty was owed in Smith v Eric S Bush, Chaudhry v Prabhakar and Spring v Guardian Assurance. In Hedley Byrne the bank escaped because of its disclaimer.',
'Advice for a known purpose to a known person who reasonably relies on it can create a duty.', H2.p1, { gap: 18 });

// 04 Primary or secondary victim
F('04-primary-secondary', 'Psychiatric injury: who is the claimant?', '', [
  (y) => card(30, y, 840, { kicker: 'THRESHOLD FOR EVERY CLAIMANT', title: 'A recognised psychiatric illness, such as PTSD or clinical depression', body: 'Proved by medical evidence; not ordinary grief, fear or distress. Traditionally from a sudden shock (*Alcock*); a 36-hour sequence was one event in *Walters* (2002).', size: 16, tsize: 19, pad: 18, bfill: C.ink, fill: C.cream, edge: C.olive, kfill: C.olive }),
  (y) => ({ s: AR(450, y - 18, 450, y + 2), h: 0 }),
  (y) => card(210, y, 480, { title: 'In the zone of physical danger, or reasonably believed so?', align: 'middle', tsize: 18, pad: 14 }),
  (y) => ({ s: AR(330, y - 18, 230, y + 18) + AR(570, y - 18, 670, y + 18) + T(214, y + 12, 'yes', { size: 17, weight: 700, fill: C.tealDark, anchor: 'end' }) + T(686, y + 12, 'no', { size: 17, weight: 700, fill: C.rust }), h: 14 }),
  (y) => row(y, [
    { kicker: 'PRIMARY VICTIM', body: ['*Dulieu v White* (1901): barmaid feared for her own safety', '*Page v Smith* (1996): physical injury foreseeable, so psychiatric injury need not be'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'SECONDARY VICTIM', body: ['Witnessed danger or injury to someone else', 'Must satisfy **all four** *Alcock* controls', 'Needs an accident, an external event: *Paul* (2024)'], bullets: true, kfill: C.rust },
  ], { gap: 30, vcenter: false, card: { size: 16, pad: 18, bfill: C.ink, gap: 5 } }),
  (y) => card(30, y, 840, { kicker: 'RESCUERS AND EMPLOYEES', body: '*White v CC of South Yorkshire* (1998): primary only if in physical danger or reasonably believing so; otherwise secondary. *Chadwick* (1967) is now explained by his own danger in the wreckage.', size: 16, pad: 18, bfill: C.ink }),
],
'Every claimant needs a recognised psychiatric illness, traditionally from a sudden shock. Those in the zone of physical danger are primary victims (Dulieu v White; Page v Smith). Those who witness harm to another are secondary victims who must pass all four Alcock controls and need an external accident (Paul). Rescuers and employees are primary only if in danger (White; Chadwick).',
'Classify the victim first: only secondary victims face the Alcock controls.', H2.p2, { gap: 22 });

// 05 Alcock controls
F('05-alcock-controls', 'Secondary victims: the four Alcock controls', 'Alcock v Chief Constable of South Yorkshire (1992)', [
  (y) => grid(y, [
    { kicker: '1  CLOSE TIE OF LOVE AND AFFECTION', body: 'Presumed for parents, children and spouses; others must prove it. A man who lost two brothers failed: no evidence of a close tie.' },
    { kicker: '2  PROXIMITY IN TIME AND SPACE', body: 'To the event or its **immediate aftermath** (see the timeline below).', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: '3  OWN UNAIDED SENSES', body: 'Live television of Hillsborough was not enough: broadcasting guidelines meant individuals were not shown.' },
    { kicker: '4  REASONABLE FORTITUDE', body: 'A person of reasonable fortitude would have suffered psychiatric injury.' },
  ], 2, { gap: 14, vgap: 12, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } }),
  (y) => {
    const x0 = 80, x1 = 820, yy = y + 70, sc = (h) => x0 + ((x1 - x0) * h) / 9;
    let s = panel(30, y, 840, 196) + T(50, y + 32, 'Immediate aftermath? Hours after the event', { size: 17, weight: 700, fill: C.olive });
    s += `<line x1="${x0}" y1="${yy}" x2="${x1}" y2="${yy}" stroke="${C.ink}" stroke-width="3"/>`;
    [0, 2, 4, 6, 8].forEach((h) => { s += `<line x1="${sc(h)}" y1="${yy - 8}" x2="${sc(h)}" y2="${yy + 8}" stroke="${C.ink}" stroke-width="2.5"/>` + T(sc(h), yy + 30, h ? `${h} h` : 'event', { size: 15, anchor: 'middle', fill: C.muted }); });
    s += `<circle cx="${sc(0)}" cy="${yy}" r="11" fill="${C.ink}"/>`;
    s += `<rect x="${sc(0)}" y="${yy - 14}" width="${sc(2) - sc(0)}" height="28" fill="${C.tealLight}" opacity="0.7"/>`;
    s += `<circle cx="${sc(2)}" cy="${yy}" r="11" fill="${C.tealDark}" stroke="${C.ink}" stroke-width="2"/>` + `<circle cx="${sc(8)}" cy="${yy}" r="11" fill="${C.rust}" stroke="${C.ink}" stroke-width="2"/>`;
    s += `<circle cx="62" cy="${yy + 70}" r="8" fill="${C.tealDark}"/>` + para(78, yy + 76, '*McLoughlin v O’Brian* (1983): hospital about two hours later, family not yet cleaned up: **recovered**', 360, { size: 15, fill: C.ink }).s;
    s += `<circle cx="472" cy="${yy + 70}" r="8" fill="${C.rust}"/>` + para(488, yy + 76, '*Alcock*: identifying a body at the mortuary about eight hours later: **too late**', 360, { size: 15, fill: C.ink }).s;
    return { s, h: 196 };
  },
],
'The four Alcock controls: a close tie of love and affection, proximity in time and space to the event or its immediate aftermath, perception with one’s own unaided senses (live television was not enough), and reasonable fortitude. On a timeline, McLoughlin v O’Brian at about two hours was within the aftermath; identifying a body about eight hours later in Alcock was too late.',
'All four controls must be met; arriving hours later or watching on screen can defeat a claim.', H2.p2, { gap: 16 });

// 06 Worked problem
F('06-worked-problem', 'Worked problem: Ade, Cleo and Dev', '', [
  (y) => {
    const claims = [
      ['Ade v Wren', 'Misstatement', 'Wren has special skill, but casual advice at a barbecue, with no known purpose or assumed responsibility, is unlikely to create a special relationship (contrast *Chaudhry*, a specific task).', 'Likely no duty', C.rust],
      ['Cleo v Bolt Ltd', 'Psychiatric: primary', 'Narrowly missed on the pavement: in the zone of danger. PTSD is a recognised illness. Physical injury foreseeable, so *Page v Smith* applies.', 'Likely to succeed', C.tealDark],
      ['Dev v Bolt Ltd', 'Psychiatric: secondary', 'An uncle: close tie must be proved. Not present; saw a livestream, so not his own unaided senses (*Alcock*).', 'Likely to fail', C.rust],
    ];
    let s = '', cy = y;
    claims.forEach(([who, kind, why, res, col]) => {
      const c = card(30, cy, 640, { kicker: kind.toUpperCase(), title: who, body: why, size: 16, tsize: 19, pad: 16, bfill: C.ink });
      s += c.s + AR(674, cy + c.h / 2, 690, cy + c.h / 2, { w: 3 }) + `<rect x="694" y="${cy}" width="176" height="${c.h}" rx="14" fill="${col === C.rust ? C.panel : C.tealLight}" stroke="${col}" stroke-width="2.5"/>`;
      const ph = para(0, 0, res, 150, { size: 18, weight: 700 }).h;
      s += para(782, cy + c.h / 2 - ph / 2 + 17, res, 150, { size: 18, weight: 700, fill: col, anchor: 'middle' }).s;
      cy += c.h + 12;
    });
    return { s, h: cy - y - 12 };
  },
  (y) => note(y, '', 'Classify first: what kind of loss, and primary or secondary? Then apply only that category’s rules.', { size: 17, align: 'middle' }),
],
'Three claims. Ade against Wren for casual investment advice at a barbecue: likely no special relationship, so no duty. Cleo against Bolt Ltd, narrowly missed by the crane: a primary victim with PTSD under Page v Smith, likely to succeed. Dev against Bolt Ltd: a secondary victim who must prove a close tie and who saw a livestream, so likely to fail under Alcock.',
'Each claimant is classified first, then tested only against the rules for that category.', H2.we, { gap: 18 });

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
