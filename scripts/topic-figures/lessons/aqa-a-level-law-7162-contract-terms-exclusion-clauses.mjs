import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-law-7162-contract-terms-exclusion-clauses';
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
  nat: '## The nature of exclusion and limitation clauses',
  inc: '## Stage 1: incorporation',
  con: '## Stage 2: construction (brief)',
  stat: '## Stage 3: statutory control',
  we: '## Worked example',
};

// 01 Exclusion vs limitation
F('01-exclusion-vs-limitation', 'Exclusion clauses and limitation clauses', 'Both can be a term of the contract or a notice, such as a car park sign', [
  (y) => row(y, [
    { kicker: 'EXCLUSION CLAUSE', title: 'Removes liability altogether', body: '“The company accepts no liability for loss or damage”', fill: C.cream, edge: C.olive },
    { kicker: 'LIMITATION CLAUSE', title: 'Caps liability at a figure or measure', body: '“Our liability shall not exceed the price paid”. Treated a little less strictly: it allocates risk rather than removing it', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 16, vcenter: false, card: { size: 17, tsize: 20, bfill: C.ink } }),
  (y) => row(y, [
    { kicker: 'LEGITIMATE', title: 'In business', body: 'Parties decide who insures against a risk' },
    { kicker: 'OPEN TO ABUSE', kfill: C.rust, title: 'Stronger v weaker party', body: 'The weaker party has no chance to negotiate' },
  ], { gap: 16, card: { size: 16, tsize: 19 } }),
],
'Two clause types. An exclusion clause removes liability altogether; a limitation clause caps it at a figure or measure and is treated a little less strictly because it allocates risk. Both can be terms or notices. Below: they are legitimate in business for deciding who insures, but open to abuse by a stronger party against a weaker one who cannot negotiate.',
'An exclusion clause removes liability; a limitation clause caps it.', H2.nat);

// 02 Routes to incorporation
F('02-incorporation-routes', 'Three ways a clause becomes part of the contract', '', [
  (y) => row(y, [
    { kicker: 'SIGNATURE', title: 'Bound whether or not you read it', body: ['*L’Estrange v Graucob* (1934): café owner bound by small print on a vending machine order form', '**Exception:** effect misrepresented. *Curtis v Chemical Cleaning* (1951): told it covered only beads and sequins'], gap: 8 },
    { kicker: 'REASONABLE NOTICE', title: 'Given before or at the time of contracting', body: ['Timing: *Olley*; *Thornton*', 'A contractual document, not a receipt: *Chapelton v Barry UDC* (1940)', 'Reasonably sufficient steps: *Parker v South Eastern Railway* (1877)'], gap: 8 },
    { kicker: 'COURSE OF DEALING', title: 'Consistent and regular', body: ['*McCutcheon v David MacBrayne* (1964): inconsistent dealings not enough', '*Hollier v Rambler Motors* (1972): three or four transactions in five years not enough for a private customer'], gap: 8 },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, bfill: C.ink, bullets: true } }),
],
'Three routes to incorporation. Signature: L’Estrange v Graucob, unless the effect was misrepresented (Curtis v Chemical Cleaning). Reasonable notice before or at the time of contracting: Olley and Thornton on timing, Chapelton v Barry UDC on contractual documents, Parker v South Eastern Railway on reasonable steps. Course of dealing: must be consistent and regular (McCutcheon; Hollier v Rambler Motors).',
'Signature, reasonable notice in time, or a consistent course of dealing.', H2.inc);

// 03 Timing of notice
{
  const tline = (y, title, steps3, cm, note) => {
    let s = card(30, y, 840, { title, size: 16, tsize: 20, minH: 190 }).s;
    const ly = y + 110, xs = [190, 450, 710];
    s += `<line x1="70" y1="${ly}" x2="830" y2="${ly}" stroke="${C.ink}" stroke-width="3"/>`;
    steps3.forEach(([lab, good], i) => {
      s += `<circle cx="${xs[i]}" cy="${ly}" r="12" fill="${i === cm ? C.mustard : good === false ? C.cream : C.panel}" stroke="${good === false ? C.rust : C.ink}" stroke-width="3"/>`;
      s += para(xs[i], ly + 38, lab, 230, { size: 16, anchor: 'middle', fill: good === false ? C.rust : C.ink, weight: i === cm || good === false ? 700 : 400 }).s;
    });
    s += T(xs[cm], ly - 24, 'CONTRACT MADE', { size: 15, weight: 700, anchor: 'middle', fill: C.olive });
    s += T(850, y + 34, note, { size: 16, weight: 700, anchor: 'end', fill: C.rust });
    return { s, h: 190 };
  };
  F('03-notice-timing', 'Notice must come before or at the time of contract', 'A term seen only afterwards comes too late', [
    (y) => tline(y, 'Olley v Marlborough Court Hotel (1949)', [['Arrives at reception', true], ['Contract made at the reception desk', true], ['Sees notice in the bedroom', false]], 1, 'too late'),
    (y) => tline(y, 'Thornton v Shoe Lane Parking (1971)', [['Drives up to the automatic barrier', true], ['Contract made at the barrier', true], ['Terms on the ticket from the machine', false]], 1, 'too late'),
    (y) => note(y, 'The more unusual the clause, the greater the notice', '*Spurling v Bradshaw* (1956): some clauses need to be “printed in red ink on the face of the document with a red hand pointing to it”. *Interfoto v Stiletto* (1989): an onerous term not fairly brought to attention.', { size: 16 }),
  ],
  'Two timelines. In Olley the contract was made at the hotel reception, so the notice in the bedroom came too late. In Thornton the contract was made at the automatic car park barrier, so the terms on the ticket came too late. Below: the more unusual the clause, the greater the notice needed (Spurling v Bradshaw’s red hand; Interfoto).',
  'Find the moment the contract was made: notice after that point is too late.', H2.inc);
}

// 04 Construction
F('04-construction-rules', 'Stage 2: does the clause cover what happened?', 'Construction: the true meaning of the clause', [
  (y) => grid(y, [
    { kicker: 'CONTRA PROFERENTEM', title: 'Ambiguity is read against the party relying on it', body: '*Houghton v Trafalgar Insurance* (1954): a “load” over capacity did not cover too many passengers. For consumers the CRA 2015 states it: the meaning most favourable to the consumer prevails' },
    { kicker: 'NEGLIGENCE', title: 'Clear words are needed to exclude liability for negligence', body: '*Canada Steamship Lines v The King* (1952)' },
    { kicker: 'SERIOUS BREACHES', title: 'Construe the whole contract', body: '*Photo Production v Securicor* (1980): a clear clause between businesses of equal bargaining power protected a security firm whose employee started a fire that destroyed the factory' },
  ], 3, { gap: 14, vcenter: false, card: { size: 16, tsize: 18 } }),
],
'Three construction rules. Contra proferentem: ambiguity is read against the party relying on the clause (Houghton v Trafalgar Insurance), stated in the CRA 2015 for consumers. Negligence needs clear words (Canada Steamship Lines v The King). Whether a clause covers a serious breach depends on the whole contract (Photo Production v Securicor).',
'Ambiguity goes against the party relying on the clause; negligence needs clear words.', H2.con);

// 05 Which Act
F('05-ucta-or-cra', 'Stage 3: which Act applies?', 'Choosing the right Act is the first marking point', [
  (y) => {
    const L = card(30, y, 405, { kicker: 'BUSINESS TO BUSINESS', title: 'Unfair Contract Terms Act 1977', body: ['**s2(1)** Death or personal injury from negligence: **cannot** be excluded or restricted', '**s2(2)** Other loss from negligence: only if **reasonable**', '**s3** Written standard terms: no exclusion for breach, or substantially different performance, unless **reasonable**', '**s11** Reasonableness: judged when the contract was made; the party relying on it must prove it'], bullets: true, gap: 8, size: 16, tsize: 20, fill: C.tealLight, edge: C.tealDark, bfill: C.ink });
    const R = card(465, y, 405, { kicker: 'TRADER TO CONSUMER', title: 'Consumer Rights Act 2015', body: ['**s31** Not binding to the extent it excludes or restricts liability under the goods terms, including **ss9, 10 and 11**', '**s57** Cannot exclude **s49** (reasonable care and skill); restriction not binding if it stops recovery of the **price paid**', '**s65** No exclusion of **death or personal injury** from negligence, by term or consumer notice', '**Fairness test**: an unfair term is not binding on the consumer'], bullets: true, gap: 8, size: 16, tsize: 20, fill: C.cream, edge: C.olive, bfill: C.ink });
    const h = Math.max(L.h, R.h);
    return { s: card(30, y, 405, { kicker: 'BUSINESS TO BUSINESS', title: 'Unfair Contract Terms Act 1977', body: ['**s2(1)** Death or personal injury from negligence: **cannot** be excluded or restricted', '**s2(2)** Other loss from negligence: only if **reasonable**', '**s3** Written standard terms: no exclusion for breach, or substantially different performance, unless **reasonable**', '**s11** Reasonableness: judged when the contract was made; the party relying on it must prove it'], bullets: true, gap: 8, size: 16, tsize: 20, fill: C.tealLight, edge: C.tealDark, bfill: C.ink, minH: h }).s + card(465, y, 405, { kicker: 'TRADER TO CONSUMER', title: 'Consumer Rights Act 2015', body: ['**s31** Not binding to the extent it excludes or restricts liability under the goods terms, including **ss9, 10 and 11**', '**s57** Cannot exclude **s49** (reasonable care and skill); restriction not binding if it stops recovery of the **price paid**', '**s65** No exclusion of **death or personal injury** from negligence, by term or consumer notice', '**Fairness test**: an unfair term is not binding on the consumer'], bullets: true, gap: 8, size: 16, tsize: 20, fill: C.cream, edge: C.olive, bfill: C.ink, minH: h }).s, h };
  },
],
'Two columns. Business to business contracts fall under UCTA 1977: s2(1) bans excluding liability for death or personal injury from negligence, s2(2) requires reasonableness for other negligence, s3 covers written standard terms, and s11 sets the reasonableness test. Trader to consumer contracts fall under the CRA 2015: s31 protects the goods terms, s57 protects s49 and the price paid, s65 bans excluding negligent death or injury, and unfair terms are not binding.',
'UCTA for business contracts, CRA 2015 for consumer contracts.', H2.stat);

// 06 Reasonableness cases
F('06-reasonableness-cases', 'Is the clause reasonable? (UCTA s11)', 'The party relying on the clause must prove it', [
  (y) => chips(y, ['relative bargaining strength', 'alternative offered?', 'knew of the term?', 'resources to meet the liability', 'could it insure?'], { size: 16, fill: C.tealLight, edge: C.tealDark }),
  (y) => row(y, [
    { kicker: 'UNREASONABLE', kfill: C.rust, title: 'George Mitchell v Finney Lock Seeds (1983)', body: 'Liability limited to the price of defective cabbage seed: sellers could have insured, the farmers’ loss was far greater, and such claims had been settled before', fill: C.cream, edge: C.rust },
    { kicker: 'UNREASONABLE', kfill: C.rust, title: 'Smith v Eric S Bush (1990)', body: 'Surveyor’s disclaimer to a house buyer of modest means', fill: C.cream, edge: C.rust },
    { kicker: 'REASONABLE', title: 'Watford Electronics v Sanderson (2001)', body: 'Limitation negotiated between experienced commercial parties of similar bargaining power: courts slow to interfere', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, bfill: C.ink } }),
],
'Factors for reasonableness: bargaining strength, whether an alternative was offered, knowledge of the term, resources and insurance. Three cases: George Mitchell v Finney Lock Seeds and Smith v Eric S Bush found clauses unreasonable; Watford Electronics v Sanderson found a clause negotiated between experienced commercial parties reasonable.',
'Unequal parties and insurable losses point to unreasonable; equal, experienced parties to reasonable.', H2.stat);

// 07 Worked example
F('07-kofi-worked-example', 'Worked example: Kofi’s bicycle', '', [
  (y) => card(30, y, 840, { kicker: 'FACTS', body: 'Kofi, a private individual, signs Fastfix’s form: “no liability for any loss or damage to customers’ property, however caused”. A mechanic negligently leaves the bicycle outside and it is stolen. A counter sign excludes liability for personal injury; a loose spoke cuts his hand.', size: 17, bfill: C.ink, fill: C.tealLight, edge: C.tealDark }),
  (y) => steps(y, [
    { title: 'Incorporation', body: 'Signed form: incorporated (*L’Estrange*), unless its effect was misrepresented (*Curtis*). The sign may be too late (*Olley*; *Thornton*).' },
    { title: 'Construction', body: '“However caused” is wide enough to cover negligence (*Canada Steamship*).' },
    { title: 'Statute: the bicycle', body: 'Consumer and trader: CRA 2015. Theft through careless storage breaches s49; s57 stops the clause excluding it.' },
    { title: 'Statute: the injury', body: 's65: negligent injury cannot be excluded by a term or a consumer notice.' },
    { title: 'Conclusion', body: 'Fastfix is liable for the bicycle and the injury. (For a business user, UCTA: s2(1) for injury; s11 for property.)' },
  ], { highlight: 4 }),
],
'Kofi’s case in five steps: the signed form is incorporated (L’Estrange), the sign may be too late (Olley, Thornton); “however caused” covers negligence (Canada Steamship); under the CRA 2015, s57 stops the clause excluding liability for breach of s49; s65 stops the sign excluding negligent injury; so Fastfix is liable for both.',
'Incorporation, construction, then the right Act: the CRA 2015 defeats both exclusions.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
