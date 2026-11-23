import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-law-7162-contract-terms-specific-terms-implied-by-statute-law-in-relation';
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
  s0: '## Step 0: is this a consumer contract?',
  goods: '## Terms implied into contracts to supply goods',
  rem: '## Remedies for goods (sections 19 to 24)',
  serv: '## Terms implied into contracts to supply services',
  srem: '## Remedies for services',
  we: '## Worked example',
};

// 01 Consumer contract?
F('01-consumer-contract-check', 'Step 0: is this a consumer contract?', 'The implied terms apply only between a trader and a consumer', [
  (y) => { const r = row(y, [
    { kicker: 'TRADER: s2(2)', title: 'Acting for purposes relating to their trade, business, craft or profession', body: 'Personally or through someone acting in their name' },
    { kicker: 'CONSUMER: s2(3)', title: 'An individual acting wholly or mainly outside their trade, business, craft or profession', body: 'A company can never be a consumer' },
  ], { gap: 50, card: { size: 16, tsize: 18, fill: C.tealLight, edge: C.tealDark } }); return { s: r.s + badge(450, y + r.h / 2, 18, '+', C.mustard), h: r.h }; },
  (y) => grid(y, [
    { kicker: 'COVERED', title: 'Self-employed plumber buys a kettle for home use', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'NOT COVERED', kfill: C.rust, title: 'The same plumber buys a pipe cutter for work', fill: C.cream, edge: C.rust },
    { kicker: 'NOT COVERED', kfill: C.rust, title: 'A contract between two businesses', fill: C.cream, edge: C.rust },
    { kicker: 'NOT COVERED', kfill: C.rust, title: 'A private sale between two individuals', fill: C.cream, edge: C.rust },
  ], 4, { gap: 12, card: { size: 16, tsize: 17, pad: 14 } }),
],
'A trader (section 2(2)) acts for trade, business, craft or professional purposes; a consumer (section 2(3)) is an individual acting wholly or mainly outside them, so a company is never a consumer. A plumber buying a kettle for home use is covered; the same plumber buying a pipe cutter for work, a business-to-business contract, and a private sale between individuals are not.',
'Check trader and consumer first: otherwise these sections do not apply.', H2.s0);

// 02 Goods terms
F('02-goods-terms', 'Three terms implied into every goods contract', 'Automatic: need not be mentioned, cannot be excluded against a consumer', [
  (y) => row(y, [
    { kicker: 'SECTION 9', title: 'Satisfactory quality', body: ['What a **reasonable person** would consider satisfactory: description, price, all circumstances', '*Rogers v Parish* (1987): a new Range Rover with repairable engine, gearbox and bodywork defects failed'] },
    { kicker: 'SECTION 10', title: 'Fit for a particular purpose', body: ['Purpose made known, expressly or by implication; consumer relies on the trader', '*Priest v Last* (1903): one normal purpose, made known by buying', '*Griffiths v Peter Conway* (1939): sensitive skin not disclosed; failed'] },
    { kicker: 'SECTION 11', title: 'Matches the description', body: ['Packaging, labels, listings, what the trader says', '*Beale v Taylor* (1967): “1961 Triumph Herald” was two cars welded together; recovered though he had seen it'] },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 19, bullets: true, gap: 8, bfill: C.ink } }),
  (y) => note(y, '', '*Grant v Australian Knitting Mills* (1936): underwear with excess sulphite harmed a buyer with normal skin: **neither** of satisfactory quality **nor** fit for purpose.', { size: 16, align: 'middle' }),
],
'Three implied terms. Section 9, satisfactory quality, judged by a reasonable person (Rogers v Parish). Section 10, fitness for a particular purpose made known to the trader (Priest v Last; Griffiths v Peter Conway, where the purpose was not made known). Section 11, goods must match their description (Beale v Taylor). Grant v Australian Knitting Mills breached both sections 9 and 10.',
'Quality, fitness for purpose and description: automatic terms in every goods contract.', H2.goods);

// 03 Section 9 detail
F('03-satisfactory-quality', 'Section 9: what counts, and what is excluded', '', [
  (y) => ({ s: T(450, y + 14, 'ASPECTS OF QUALITY: s9(3)', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark }), h: 18 }),
  (y) => chips(y, ['fit for usual purposes', 'appearance and finish', 'free from minor defects', 'safety', 'durability'], { size: 17, fill: C.tealLight, edge: C.tealDark }),
  (y) => note(y, '', 'Objective and flexible: a cheap second-hand car need not match a new one. Public statements such as advertising or labelling can be relevant (s9(5) to (7)).', { size: 16, fill: C.panel, edge: C.panelEdge, align: 'middle' }),
  (y) => ({ s: T(450, y + 14, 'NOT COVERED: s9(4)', { size: 15, weight: 700, anchor: 'middle', fill: C.rust }), h: 18 }),
  (y) => row(y, [
    { title: 'Drawn to attention', body: 'A defect specifically pointed out before the contract' },
    { title: 'Examined first', body: 'A defect the consumer’s examination ought to have revealed' },
    { title: 'Sale by sample', body: 'A defect a reasonable examination of the sample would have revealed' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, fill: C.cream, edge: C.rust } }),
],
'The aspects of quality in section 9(3): fitness for usual purposes, appearance and finish, freedom from minor defects, safety and durability. The test is objective and flexible, and public statements can be relevant. Section 9(4) excludes defects drawn to the consumer’s attention, defects an examination ought to have revealed, and in a sale by sample defects a reasonable examination of the sample would have revealed.',
'Quality is judged objectively; defects the consumer was told of or should have spotted are excluded.', H2.goods);

// 04 Tiered remedies
{
  const stair = (y) => {
    const tiers = [
      ['TIER 1: s20 (with s22)', 'Short-term right to reject', 'Normally within 30 days; full refund, no deduction for use', C.tealLight, C.tealDark],
      ['TIER 2: s23', 'Repair or replacement', 'Consumer chooses; trader acts within a reasonable time, without significant inconvenience, at its cost; not if impossible or disproportionate', C.panel, C.panelEdge],
      ['TIER 3: s24', 'Price reduction or final right to reject', 'Only after one failed repair or replacement, if both are impossible or disproportionate, or if not done in a reasonable time without significant inconvenience', C.cream, C.olive],
    ];
    let s = '', cy = y;
    tiers.forEach(([k, t1, b, f, e], i) => {
      const x = 30 + i * 120, w = 840 - i * 120;
      const c = card(x, cy, w, { kicker: k, title: t1, body: b, size: 16, tsize: 20, fill: f, edge: e });
      s += c.s; cy += c.h;
      if (i < 2) { s += arrow(x + 60, cy + 4, x + 140, cy + 38, { w: 3.5 }); cy += 44; }
    });
    return { s, h: cy - y };
  };
  F('04-goods-remedies-tiers', 'Goods remedies: a tiered scheme', 'Section 19 also keeps other remedies, such as damages', [stair],
    'Three tiers of goods remedies. Tier 1, section 20 with 22: short-term right to reject, normally within 30 days, full refund. Tier 2, section 23: repair or replacement chosen by the consumer, at the trader’s cost. Tier 3, section 24: price reduction or final right to reject, only after one failed repair or replacement or if repair and replacement are impossible, disproportionate or not done properly.',
    'Reject within 30 days; after that, repair or replace first, then price reduction or final rejection.', H2.rem);
}

// 05 Time markers
{
  const tl = (y) => {
    let s = '';
    const X = { 0: 60, 30: 290, 182: 760 };
    [[0, 'delivery'], [30, '30 days'], [182, '6 months']].forEach(([d, l]) => {
      s += `<line x1="${X[d]}" y1="${y + 30}" x2="${X[d]}" y2="${y + 138}" stroke="${C.ink}" stroke-width="2.5" stroke-dasharray="${d ? '6 5' : ''}"/>` + T(X[d], y + 22, l, { size: 17, weight: 700, anchor: d === 0 ? 'start' : 'middle' });
    });
    s += `<rect x="${X[0]}" y="${y + 40}" width="${X[30] - X[0]}" height="34" rx="6" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2"/>`;
    s += T((X[0] + X[30]) / 2, y + 63, 'short-term right to reject', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
    s += `<rect x="${X[0]}" y="${y + 84}" width="${X[182] - X[0]}" height="34" rx="6" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>`;
    s += T((X[0] + X[182]) / 2, y + 107, 'a fault that appears is presumed present on delivery (s19(14), (15))', { size: 15, weight: 700, anchor: 'middle', fill: C.olive });
    s += `<line x1="${X[0]}" y1="${y + 128}" x2="840" y2="${y + 128}" stroke="${C.ink}" stroke-width="4"/>`;
    s += T(840, y + 160, 'not to scale', { size: 15, anchor: 'end', fill: C.muted, italic: true });
    return { s, h: 164 };
  };
  F('05-goods-remedy-timeline', 'Three time rules that score marks', '', [tl,
    (y) => grid(y, [
      { kicker: 'WAITING TIME', title: 'The 30-day clock stops', body: 'while a repair or replacement asked for within the 30 days is awaited; if fewer than seven days are left, it extends to seven' },
      { kicker: 'SIX-MONTH PRESUMPTION', title: 'Fault within six months', body: 'presumed to have existed on delivery unless the trader proves otherwise' },
      { kicker: 'DEDUCTION FOR USE', title: 'Final right to reject', body: 'refund may be reduced for use, but not within six months of delivery (except motor vehicles)' },
    ], 3, { gap: 14, vcenter: false, card: { size: 16, tsize: 18 } })],
  'A timeline from delivery: the short-term right to reject runs for 30 days, and a fault appearing within six months is presumed to have existed on delivery. Three rules: the 30-day clock stops while a repair or replacement is awaited, with at least seven days left afterwards; the six-month presumption; and no deduction for use under the final right to reject within six months, except for motor vehicles.',
  'Thirty days to reject; six months in which faults are presumed present from delivery.', H2.rem);
}

// 06 Services
F('06-services-terms-remedies', 'Services: two terms and two remedies', '', [
  (y) => row(y, [
    { kicker: 'SECTION 49', title: 'Reasonable care and skill', body: 'Of a reasonably competent member of the trade: about **how** the work is done, not a guaranteed result', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'SECTION 52', title: 'Performance within a reasonable time', body: 'Where no time is fixed; a question of fact. *Charnock v Liverpool Corporation* (1968): eight weeks where five was reasonable', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 16, vcenter: false, card: { size: 16, tsize: 19, bfill: C.ink } }),
  (y) => {
    let s = '';
    const a = card(30, y + 40, 405, { kicker: 'SECTION 55', title: 'Repeat performance', body: 'To make it conform: reasonable time, no significant inconvenience, at the trader’s cost. Not if impossible', size: 16, tsize: 19, minH: 150 });
    const b = card(465, y + 40, 405, { kicker: 'SECTION 56', title: 'Price reduction', body: 'If repeat performance is impossible or not done properly; up to the full price', size: 16, tsize: 19, minH: 150, fill: C.cream, edge: C.olive });
    s += a.s + b.s + arrow(438, y + 115, 462, y + 115, { w: 3.5 });
    s += arrow(232, y + 2, 232, y + 34, { w: 3.5 }) + T(244, y + 24, 'breach of s49', { size: 15, weight: 700 });
    s += arrow(668, y + 2, 668, y + 34, { w: 3.5, color: C.rust, marker: 'ahR' }) + T(680, y + 24, 'lateness (s52): straight to s56', { size: 15, weight: 700, fill: C.rust });
    return { s, h: 40 + Math.max(a.h, b.h) };
  },
],
'Two services terms: section 49, reasonable care and skill, about how the work is done; section 52, performance within a reasonable time where none is fixed (Charnock v Liverpool Corporation). Remedies: section 55 repeat performance at the trader’s cost, then section 56 price reduction up to the full price. Lateness under section 52 goes straight to a price reduction.',
'Poor work: repeat performance, then a price reduction. Lateness: a price reduction.', H2.srem);

// 07 Worked example
F('07-rhian-worked-example', 'Worked example: Rhian’s laptop and bathroom', '', [
  (y) => card(30, y, 840, { kicker: 'FACTS', body: 'Rhian buys a £900 laptop, telling the assistant it is for video editing. After 40 days it overheats when editing; a repair fails a week later. A builder paid £2,000 tiles her bathroom unevenly and takes four months.', size: 17, bfill: C.ink, fill: C.tealLight, edge: C.tealDark }),
  (y) => row(y, [
    { kicker: 'THE LAPTOP (GOODS)', title: '', body: ['**Consumer contract:** individual, personal use; retailer is a trader (s2)', '**s9** arguably not satisfactory; **s10** purpose made known and relied on', '**40 days:** past the 30-day right, but fault within six months is presumed present (s19(14))', '**Remedy:** one repair failed, so s24: price reduction or final rejection, no deduction for use'] },
    { kicker: 'THE BATHROOM (SERVICES)', title: '', body: ['**s49** uneven tiling: no reasonable care and skill', '**s52** four months may be unreasonable if no time was fixed', '**s55** re-lay the tiles at the builder’s cost; if not, **s56** price reduction', '**Delay:** remedied by s56, not repeat work'] },
  ], { gap: 14, vcenter: false, card: { size: 16, bullets: true, gap: 8, bfill: C.ink } }),
],
'Rhian’s laptop: a consumer contract; arguably breaches sections 9 and 10; at 40 days the short-term right has gone but the six-month presumption applies; after one failed repair she can use section 24. Her bathroom: uneven tiling breaches section 49 and four months may breach section 52; she can require repeat performance under section 55, then a price reduction under section 56, which is also the remedy for delay.',
'Goods and services follow separate terms and separate remedy ladders.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
