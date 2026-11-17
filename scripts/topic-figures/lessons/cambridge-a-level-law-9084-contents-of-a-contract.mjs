import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-law-9084-contents-of-a-contract';
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
  terms: '## 3.2.1 Terms and representations',
  cra: '## 3.2.2 Terms implied by the Consumer Rights Act 2015',
  status: '## 3.2.3 Conditions, warranties and innominate terms',
  excl: '## 3.2.4 Exemption clauses',
  model: '## Annotated model answer',
};

// 01 Term or representation?
F('01-term-or-representation', 'Term or representation?', 'The test is the parties’ objective intention', [
  (y) => table(y, [
    { w: 0.8, head: 'Guide' },
    { w: 1.6, head: 'Points to a TERM', hfill: C.mustard },
    { w: 1.6, head: 'Points to a REPRESENTATION', hfill: C.teal },
  ], [
    ['Importance attached', '*Bannerman v White* (1861): buyer would not buy hops treated with sulphur. *Couchman v Hill* (1947): oral assurance the heifer was unserved', ''],
    ['Timing', '', '*Routledge v McKay* (1954): motorcycle’s date stated a week before a written contract that did not repeat it'],
    ['Special knowledge', '*Dick Bentley v Harold Smith Motors* (1965): a dealer who should have known the true mileage', '*Oscar Chess v Williams* (1957): a private seller who relied on the logbook'],
    ['Invitation to verify', '*Schawel v Reade* (1913): buyer told not to bother examining a horse because it was perfect', '*Ecay v Godfrey* (1947): seller told the buyer to have a boat surveyed'],
  ], { size: 16, hsize: 17 }),
  (y) => row(y, [
    { kicker: 'IF A TERM PROVES UNTRUE', title: 'Breach of contract', body: 'Automatic claim; damages put the claimant where performance would have put them.', fill: C.cream, edge: C.olive },
    { kicker: 'IF A REPRESENTATION PROVES UNTRUE', title: 'Not a breach', body: 'The claimant must prove misrepresentation, and the remedies differ.', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 16, vcenter: false, card: { size: 16, tsize: 19, bfill: C.ink } }),
],
'A table of four guides to whether a statement is a term or a representation, each with the lesson’s cases: importance (Bannerman v White, Couchman v Hill), timing (Routledge v McKay), special knowledge (Dick Bentley against Oscar Chess) and invitation to verify (Schawel v Reade against Ecay v Godfrey). An untrue term is a breach of contract; an untrue representation needs a misrepresentation claim.',
'Classify the statement first: a term gives a breach claim, a representation does not.', H2.terms);

// 02 Written terms
{
  const col = (x, w, rule, ex) => (y) => {
    const r = card(x, y, w, { ...rule, fill: C.cream, edge: C.olive, size: 16, tsize: 19, bfill: C.ink });
    const lab = T(x + w / 2, y + r.h + 32, 'BUT', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
    const ar = arrow(x + w / 2, y + r.h + 40, x + w / 2, y + r.h + 64, { w: 3.5 });
    const st = stack(y + r.h + 70, ex.map((e) => ({ ...e, size: 16, tsize: 17, bfill: C.ink, pad: 16 })), { x, w, gap: 10 });
    return { s: r.s + lab + ar + st.s, h: r.h + 70 + st.h };
  };
  F('02-written-terms', 'Written terms and their limits', '', [
    (y) => {
      const a = col(30, 380, { kicker: 'SIGNATURE', title: 'A signer is bound, read or not', body: '*L\u2019Estrange v Graucob* (1934)' }, [
        { kicker: 'EFFECT MISREPRESENTED', body: '*Curtis v Chemical Cleaning and Dyeing Co* (1951): the assistant said the clause covered only beads and sequins, so the cleaners could not rely on the wider wording.' },
      ])(y);
      const b = col(440, 430, { kicker: 'PAROL EVIDENCE RULE', title: 'Oral or other outside evidence cannot add to, vary or contradict the writing', body: 'Protects certainty' }, [
        { kicker: 'NOT THE WHOLE AGREEMENT', body: 'The rule does not apply where the writing was not meant to contain the whole agreement.' },
        { kicker: 'CONDITION PRECEDENT', body: 'The contract was not to operate until an event happened: *Pym v Campbell* (1856).' },
        { kicker: 'COLLATERAL CONTRACT', body: '*City and Westminster Properties v Mudd* (1959): a lease banning residence, signed relying on an oral promise that the tenant could keep sleeping on the premises.' },
      ])(y);
      return { s: a.s + b.s, h: Math.max(a.h, b.h) };
    },
  ],
  'Two rules with their exceptions. Signature: a party who signs is bound whether or not they read the terms (L\u2019Estrange v Graucob), unless the effect was misrepresented (Curtis v Chemical Cleaning). Parol evidence rule: outside evidence cannot add to, vary or contradict a written contract, except where the writing is not the whole agreement, to show a condition precedent (Pym v Campbell) or a collateral contract (City and Westminster Properties v Mudd).',
  'Signature binds and the writing usually speaks for itself, with named exceptions.', H2.terms);
}

// 03 CRA remedies
{
  const col = (x, w, head, rights, ladder) => (y) => {
    const h = card(x, y, w, { title: head, align: 'middle', fill: C.tealDark, edge: C.tealDark, tfill: '#ffffff', tsize: 21, pad: 14 });
    const r = stack(y + h.h + 14, rights.map((b) => ({ body: b, fill: C.tealLight, edge: C.tealDark, size: 16, bfill: C.ink, pad: 14 })), { x, w, gap: 8 });
    const y2 = y + h.h + 14 + r.h + 16;
    const lab = T(x + w / 2, y2 + 14, 'IF BREACHED', { size: 15, weight: 700, anchor: 'middle', fill: C.muted });
    const l = stack(y2 + 28, ladder.map((it, i) => ({ ...it, fill: i === 0 ? C.cream : C.panel, edge: i === 0 ? C.olive : C.panelEdge, size: 16, tsize: 18, bfill: C.ink, pad: 16 })), { x, w, arrows: true, gap: 40 });
    return { s: h.s + r.s + lab + l.s, h: h.h + 14 + r.h + 16 + 28 + l.h };
  };
  F('03-cra-remedies', 'Consumer Rights Act 2015: rights and remedies', 'Trader and consumer contracts', [
    (y) => {
      const a = col(30, 470, 'Goods', ['**s9** satisfactory quality', '**s10** fit for a particular purpose made known', '**s11** as described'], [
        { title: 'Short-term right to reject (s20, s22)', body: 'Normally within 30 days; full refund' },
        { title: 'Repair or replacement (s23)', body: 'Within a reasonable time and without significant inconvenience' },
        { title: 'Price reduction or final right to reject (s24)', body: 'If repair or replacement is impossible or fails' },
      ])(y);
      const b = col(530, 340, 'Services', ['**s49** reasonable care and skill', '**s52** reasonable time, where none is fixed'], [
        { title: 'Repeat performance (s55)', body: '' },
        { title: 'Price reduction (s56)', body: 'If repeat performance is impossible, or not done within a reasonable time and without significant inconvenience' },
      ])(y);
      return { s: a.s + b.s, h: Math.max(a.h, b.h) };
    },
  ],
  'Two columns. Goods: the implied terms in s9, s10 and s11, and if breached a ladder of remedies from the short-term right to reject within 30 days (s20, s22), to repair or replacement (s23), to price reduction or the final right to reject (s24). Services: s49 reasonable care and skill and s52 reasonable time, with repeat performance (s55) and then price reduction (s56).',
  'Remedies are tiered: refund first for goods, then repair or replace, then price reduction or final rejection.', H2.cra);
}

// 04 Label versus effect
F('04-flexibility-or-certainty', 'Classifying a term: flexibility or certainty?', '', [
  (y) => note(y, 'The label does not settle it', '*Schuler v Wickman Machine Tool Sales* (1974): a clause called a “condition” required weekly visits to six named firms. The parties could not have meant that one missed visit allowed termination.', { size: 16 }),
  (y) => row(y, [
    { kicker: 'INNOMINATE TERM: JUDGE THE EFFECT', title: 'Flexibility', body: ['*Hong Kong Fir Shipping v Kawasaki Kisen Kaisha* (1962): seaworthiness breached, but the delay did not deprive the charterers of substantially the whole benefit, so no termination.', 'Applied to a sale of goods in *Cehave v Bremer*, *The Hansa Nord* (1976).', '**Gain:** a party cannot escape a bad bargain over a trivial breach.'], fill: C.tealLight, edge: C.tealDark, gap: 8 },
    { kicker: 'CONDITION FIXED IN ADVANCE', title: 'Certainty', body: ['*Bunge Corporation v Tradax Export* (1981): a time clause in a commercial contract treated as a condition.', '**Gain:** traders need to know at once whether they can terminate.'], fill: C.cream, edge: C.olive, gap: 8 },
  ], { gap: 16, vcenter: false, card: { size: 16, tsize: 20, bfill: C.ink } }),
],
'Schuler v Wickman shows a clause labelled a condition need not be one. Two panels then contrast the innominate approach, which judges the effect of the breach (Hong Kong Fir; The Hansa Nord) and gives flexibility, with treating a commercial time clause as a condition (Bunge v Tradax), which gives certainty.',
'The innominate approach buys flexibility at the cost of certainty.', H2.status);

// 05 UCTA v CRA
F('05-ucta-vs-cra', 'Which statute controls the clause?', 'Apply the Act that matches the parties', [
  (y) => table(y, [
    { w: 0.9, head: '' },
    { w: 1.55, head: 'UCTA 1977: business to business', hfill: C.teal },
    { w: 1.55, head: 'CRA 2015: trader and consumer', hfill: C.mustard },
  ], [
    ['Scope', 's1(3): business liability only', 's61 trader and consumer contracts; s2 definitions'],
    ['Death or personal injury by negligence', 's2(1): cannot be excluded', 's65: cannot be excluded'],
    ['Other liability', 's2(2): other negligence liability only if reasonable. s3: reasonableness where one party deals on the other’s written standard terms', 's31: cannot exclude or restrict the s9 to s11 rights. s57: cannot exclude s49'],
    ['The test', 's11: fair and reasonable given the circumstances known to, or contemplated by, the parties when the contract was made', 's62: unfair if, contrary to good faith, it causes a significant imbalance to the consumer’s detriment; then not binding. s68: written terms must be plain, intelligible and legible'],
    ['Cases', 'Clause failed: *George Mitchell v Finney Lock Seeds* (1983); *St Albans v International Computers* (1996). *Watford Electronics v Sanderson* (2001): equal businesses should usually allocate their own risks', ''],
  ], { size: 16, hsize: 17 }),
  (y) => note(y, '', '**Common mistake:** applying UCTA 1977 to a consumer contract, or the CRA 2015 to a sale between two businesses.', { size: 17, align: 'middle' }),
],
'A table comparing the Unfair Contract Terms Act 1977, for business to business contracts, with the Consumer Rights Act 2015, for trader and consumer contracts: scope, the bar on excluding negligent death or personal injury (s2(1) and s65), other limits (s2(2), s3; s31, s57), the tests (s11 reasonableness; s62 unfairness and s68 transparency) and the UCTA cases.',
'UCTA for businesses, the CRA for consumers: both ban excluding negligent death or injury.', H2.excl);

// 06 Priya model answer
F('06-priya-model-answer', 'Model answer: Priya’s laptop', '', [
  (y) => card(30, y, 840, { kicker: 'FACTS', body: '£900 laptop from TechHub Ltd. Salesperson: “This model runs for ten hours on one charge.” Receipt: “TechHub accepts no liability for battery performance.” After five weeks the battery lasts two hours.', size: 17, bfill: C.ink, fill: C.tealLight, edge: C.tealDark }),
  (y) => steps(y, [
    { title: 'Status of the statement', body: 'Specialist knowledge and importance: likely a term (*Dick Bentley*). Also part of the description.' },
    { title: 'Implied terms', body: 'Consumer and trader (s2, s61). Two hours is arguably not satisfactory quality (s9: durability, usual purposes) and does not match the description (s11).' },
    { title: 'Remedy', body: 'Five weeks is outside the 30-day short-term right to reject, so require repair or replacement (s23); if that fails, price reduction or final right to reject (s24).' },
    { title: 'Exclusion clause', body: 'A receipt handed over after the sale is too late to be incorporated (*Olley*). Even if incorporated, s31 makes it not binding.' },
    { title: 'Conclusion', body: 'The clause is ineffective.' },
  ], { highlight: 4, size: 17 }),
],
'The Priya scenario worked in five steps: the ten-hour statement is likely a term (Dick Bentley); the battery breaches s9 and s11; at five weeks the remedy is repair or replacement under s23, then s24; the receipt clause is not incorporated (Olley) and is not binding under s31; so the clause is ineffective.',
'Status, implied terms, remedy, exclusion clause, conclusion: one step at a time.', H2.model);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
