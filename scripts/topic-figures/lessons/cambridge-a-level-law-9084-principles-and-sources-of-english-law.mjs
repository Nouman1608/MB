import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-law-9084-principles-and-sources-of-english-law';
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
  ctx: '## 1.1.1 The legal system in context',
  parl: '## 1.1.2 Parliamentary law making',
  del: '## 1.1.3 Delegated legislation',
  si: '## 1.1.4 Statutory interpretation',
  prec: '## 1.1.5 Judicial precedent',
};

// 01 Rule of law
F('01-rule-of-law', 'The rule of law', 'Dicey’s three ideas, and where to apply them', [
  (y) => row(y, [
    { kicker: 'IDEA 1', title: 'No punishment except for a breach of law proved in the ordinary courts' },
    { kicker: 'IDEA 2', title: 'Equality before the law' },
    { kicker: 'IDEA 3', title: 'Rights secured by the ordinary law' },
  ], { gap: 14, vcenter: true, card: { size: 16, tsize: 18, pad: 16, align: 'middle', fill: C.cream, edge: C.olive } }),
  (y) => note(y, '', '*Entick v Carrington* (1765): state officers who searched a house without lawful authority were liable in trespass.', { size: 17, fill: C.panel, edge: C.panelEdge, align: 'middle' }),
  (y) => ({ s: T(450, y + 12, 'APPLY THE PRINCIPLE TO…', { size: 16, weight: 700, anchor: 'middle', fill: C.muted }), h: 12 }),
  (y) => row(y, [
    { kicker: 'LAW MAKING', body: 'Laws made openly, clear and prospective; retrospective criminal laws offend it' },
    { kicker: 'THE LEGAL SYSTEM', body: 'Access to independent courts, legal advice and fair trial procedures' },
    { kicker: 'SUBSTANTIVE LAW', body: 'Treat like cases alike: *A v Home Secretary* (2004), indefinite detention without trial of foreign terrorist suspects incompatible with Convention rights' },
  ], { gap: 14, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink, fill: C.tealLight, edge: C.tealDark } }),
],
'Dicey’s three ideas of the rule of law: no punishment without a breach proved in the ordinary courts, equality before the law, and rights secured by the ordinary law, illustrated by Entick v Carrington. The principle is applied to law making, the legal system and substantive law (A v Secretary of State for the Home Department).',
'Three ideas from Dicey, tested in law making, the legal system and substantive law.', H2.ctx);

// 02 Parliamentary law making
F('02-bill-to-act', 'From green paper to Act of Parliament', '', [
  (y) => row(y, [
    { kicker: 'GREEN PAPER', title: 'Consults on options' },
    { kicker: 'WHITE PAPER', title: 'Sets out firm proposals' },
  ], { arrows: true, x: 150, w: 600, gap: 50, vcenter: true, card: { size: 16, tsize: 18, pad: 16, align: 'middle', fill: C.tealLight, edge: C.tealDark } }),
  (y) => {
    const st = ['First Reading', 'Second Reading', 'Committee Stage', 'Report Stage', 'Third Reading'];
    const house = (x, w, name) => {
      let s = panel(x, y + 40, w, 280) + T(x + w / 2, y + 72, name, { size: 19, weight: 700, anchor: 'middle' });
      st.forEach((n, i) => { const yy = y + 92 + i * 44; s += `<rect x="${x + 24}" y="${yy}" width="${w - 48}" height="36" rx="10" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2"/>` + T(x + w / 2, yy + 24, n, { size: 17, weight: 600, anchor: 'middle' }); });
      return s;
    };
    let s = path(`M612,${y - 20} L612,${y + 18} L230,${y + 18}`, { w: 3.5 }) + arrow(230, y + 18, 230, y + 36) + house(80, 300, 'First House') + house(520, 300, 'Second House') + arrow(384, y + 180, 516, y + 180);
    const ra = card(300, y + 360, 300, { title: 'Royal Assent', body: 'the Bill becomes an Act', align: 'middle', fill: C.mustard, edge: C.ink, tsize: 20, size: 16, bfill: C.ink });
    s += path(`M670,${y + 320} L670,${y + 340} L450,${y + 340}`, { w: 3.5 }) + arrow(450, y + 340, 450, y + 356) + ra.s;
    return { s, h: 360 + ra.h };
  },
  (y) => row(y, [
    { kicker: 'PARLIAMENT ACTS 1911 AND 1949', title: 'The elected Commons prevails', body: ['Most Bills: passed without Lords’ consent after a delay of about a year', 'Money Bills: after one month', 'Used for the War Crimes Act 1991 and Hunting Act 2004; 1949 Act upheld in *R (Jackson) v A-G* (2005)'], bullets: true, gap: 4, fill: C.cream, edge: C.olive },
    { kicker: 'PARLIAMENTARY SUPREMACY', title: 'No court can invalidate an Act', body: ['Can make or repeal any law; cannot bind successors', '*Pickin v British Railways Board* (1974): no inquiry into how an Act was passed', 'A s4 HRA 1998 declaration leaves the Act in force'], bullets: true, gap: 4 },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink } }),
],
'A green paper consults and a white paper sets out proposals. The Bill passes First Reading, Second Reading, Committee Stage, Report Stage and Third Reading in each House, then receives Royal Assent. Below, the Parliament Acts let the Commons pass most Bills after about a year and money Bills after one month (War Crimes Act 1991, Hunting Act 2004, Jackson), and parliamentary supremacy means no court can invalidate an Act (Pickin).',
'Five stages in each House, then Royal Assent; the Commons can override the Lords.', H2.parl);

// 03 Delegated legislation
F('03-delegated-legislation', 'Delegated legislation and its controls', '', [
  (y) => {
    const ea = card(330, y, 240, { title: 'Enabling Act', align: 'middle', fill: C.mustard, edge: C.ink, tsize: 20, pad: 14 });
    const yr = y + ea.h + 46;
    const r = row(yr, [
      { title: 'Orders in Council', body: 'Monarch and Privy Council; urgent matters, emergencies (Civil Contingencies Act 2004)' },
      { title: 'Statutory instruments', body: 'Ministers and departments; the most common form' },
      { title: 'Bylaws', body: 'Local authorities and public corporations' },
    ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, pad: 14, align: 'middle', bfill: C.ink, fill: C.tealLight, edge: C.tealDark } });
    const ar = r.xs.map((x, i) => arrow(450, y + ea.h + 4, x + r.ws[i] / 2, yr - 4, { w: 3 })).join('');
    return { s: ea.s + ar + r.s, h: yr + r.h - y };
  },
  (y) => row(y, [
    { kicker: 'CONTROL BY PARLIAMENT', body: ['**Pre-drafting consultation**, often required by the enabling Act', '**Affirmative resolution:** needs Parliament’s approval', '**Negative resolution:** law unless annulled in time; little scrutiny', '**Scrutiny committees:** report, but cannot change instruments'], gap: 6 },
    { kicker: 'CONTROL BY THE COURTS (JUDICIAL REVIEW)', body: ['Claimant needs **locus standi**', '**Procedural ultra vires:** *Aylesbury Mushrooms* (1972), growers not consulted', '**Substantive ultra vires:** *R (Public Law Project) v Lord Chancellor* (2016)', '**Unreasonableness:** *Wednesbury* (1948); *Strickland v Hayes BC* (1896)'], gap: 6, fill: C.cream, edge: C.olive },
  ], { gap: 14, vcenter: false, card: { size: 16, pad: 18, bfill: C.ink } }),
  (y) => note(y, '', '**Legislative and Regulatory Reform Act 2006:** ministers can amend primary legislation to remove or reduce burdens; critics see a wide executive power with limited debate.', { size: 16, fill: C.panel, edge: C.panelEdge }),
],
'An enabling Act gives power to make Orders in Council, statutory instruments and bylaws. Parliament controls them through consultation, affirmative and negative resolution and scrutiny committees; the courts by judicial review for procedural ultra vires (Aylesbury Mushrooms), substantive ultra vires (Public Law Project) and unreasonableness (Wednesbury; Strickland v Hayes). The Legislative and Regulatory Reform Act 2006 is noted.',
'Delegated legislation exists only under an enabling Act, and both Parliament and the courts police it.', H2.del);

// 04 Approaches to interpretation
F('04-interpretation-approaches', 'Four approaches to statutory interpretation', '', [
  (y) => stack(y, [
    { kicker: 'LITERAL RULE', title: 'Ordinary meaning of the words', body: '*Whiteley v Chappell* (1868): impersonating a dead voter was not impersonating “a person entitled to vote”' },
    { kicker: 'GOLDEN RULE', title: 'Modify the words to avoid an absurd result', body: '*Adler v George* (1964): “in the vicinity of” read to include inside a prohibited place' },
    { kicker: 'MISCHIEF RULE', title: 'What did the Act target?', body: '*Smith v Hughes* (1960): soliciting from balconies was “in a street”; the Act targeted soliciting seen by passers-by' },
    { kicker: 'PURPOSIVE APPROACH', title: 'Give effect to the Act’s purpose', body: '*R (Quintavalle) v Secretary of State for Health* (2003): embryos from cell nuclear replacement fell within the Act’s purpose', fill: C.cream, edge: C.olive },
  ], { gap: 12, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink } }),
  (y) => note(y, '', 'Encouraged by EU membership (*Pickstone v Freemans*, 1988) and by s3 Human Rights Act 1998: read compatibly “so far as it is possible” (*Ghaidan v Godin-Mendoza*, 2004).', { size: 16, fill: C.tealLight, edge: C.tealDark }),
],
'Four approaches, each with its case: the literal rule (Whiteley v Chappell), the golden rule (Adler v George), the mischief rule (Smith v Hughes) and the purposive approach (Quintavalle). Purposive reading was encouraged by EU membership (Pickstone v Freemans) and by s3 Human Rights Act 1998 (Ghaidan v Godin-Mendoza).',
'From the plain words to the purpose: state the approach, cite the case, show the result.', H2.si);

// 05 Rules of language and aids
F('05-language-rules-and-aids', 'Rules of language and aids to interpretation', '', [
  (y) => row(y, [
    { kicker: 'EJUSDEM GENERIS', title: 'General words follow a list', body: '*Powell v Kempton Park* (1899): “house, office, room or other place” meant indoor places' },
    { kicker: 'EXPRESSIO UNIUS', title: 'Naming some excludes others', body: '*Tempest v Kilner* (1846): “goods, wares and merchandise” excluded stocks and shares' },
    { kicker: 'NOSCITUR A SOCIIS', title: 'A word is known by its companions', body: '*IRC v Frere* (1965): “interest” took meaning from “annual interest”' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink } }),
  (y) => row(y, [
    { kicker: 'INTRINSIC AIDS: INSIDE THE ACT', body: 'Preamble, titles, headings, schedules, marginal notes, interpretation sections', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'EXTRINSIC AIDS: OUTSIDE THE ACT', body: 'Earlier Acts on the topic, earlier case law, historical setting, dictionaries of the time, law reform reports, international treaties, Hansard', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 14, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } }),
  (y) => note(y, 'Pepper v Hart (1993): Hansard only where', ['the words are ambiguous, **and**', 'a ministerial statement clearly resolves the point.'], { size: 17, bullets: true }),
],
'Three rules of language with their cases: ejusdem generis (Powell v Kempton Park), expressio unius (Tempest v Kilner) and noscitur a sociis (IRC v Frere). Intrinsic aids sit inside the Act; extrinsic aids, including Hansard, sit outside it. Pepper v Hart allows Hansard only where the words are ambiguous and a ministerial statement clearly resolves the point.',
'Words take meaning from their neighbours; Hansard is a limited, conditional aid.', H2.si);

// 06 Precedent
F('06-precedent-flexibility', 'Judicial precedent: when courts can escape', '', [
  (y) => row(y, [
    { kicker: 'SUPREME COURT', title: 'Practice Statement 1966', body: ['*Herrington* (1972) overruled *Addie v Dumbreck* (1929) on child trespassers', '*R v Shivpuri* (1986) overruled *Anderton v Ryan* (1985) within a year'], gap: 6, fill: C.cream, edge: C.olive },
    { kicker: 'COURT OF APPEAL (CIVIL)', title: 'Bound by itself, except (Young v Bristol Aeroplane, 1944):', body: ['two of its decisions conflict', 'its decision conflicts with a later House of Lords or Supreme Court decision', 'it was made *per incuriam*'], bullets: true, gap: 4, fill: C.tealLight, edge: C.tealDark },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, pad: 18, bfill: C.ink } }),
  (y) => row(y, [
    { kicker: 'ORIGINAL', body: 'A new point: *Donoghue v Stevenson* (1932)' },
    { kicker: 'PERSUASIVE', body: 'Obiter dicta, lower courts, Privy Council, foreign courts. *R v James and Karimi* (2006) followed *Holley* (PC)' },
    { kicker: 'AVOIDANCE', body: 'Distinguishing (*Balfour* v *Merritt*: separated spouses), overruling, reversing' },
  ], { gap: 14, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } }),
  (y) => note(y, '', '**Common mistake:** the *Young v Bristol Aeroplane* exceptions apply to the Court of Appeal, not the Supreme Court.', { size: 17, align: 'middle' }),
],
'The Supreme Court can depart from its own decisions under the Practice Statement 1966 (Herrington; Shivpuri). The Court of Appeal is bound by its own decisions except in the three Young v Bristol Aeroplane situations. Below: original precedent (Donoghue), persuasive precedent (James and Karimi following Holley), and avoidance by distinguishing (Balfour and Merritt), overruling and reversing.',
'The Supreme Court uses the Practice Statement; the Court of Appeal has only the Young exceptions.', H2.prec);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
