import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-law-7162-nuisance-and-the-escape-of-dangerous-things';
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
  p1: '## Part 1: private nuisance',
  p2: '## Part 2: the rule in Rylands v Fletcher',
  we: '## Worked problem',
};
const AR = (x1, y1, x2, y2, o) => arrow(x1, y1, x2, y2, { w: 3.5, ...o });

// 01 Three types of nuisance
F('01-types-of-nuisance', 'Three forms of private nuisance', 'Interference with use or enjoyment of land, judged by its result', [
  (y) => {
    const W = 270, gap = 15, H = 230;
    const scene = (x, kind) => {
      let s = `<rect x="${x}" y="${y}" width="${W}" height="${H}" rx="14" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2.5"/>`;
      const gy = y + 170;
      s += `<rect x="${x + 12}" y="${gy}" width="${W / 2 - 16}" height="44" fill="#d8e3c6"/><rect x="${x + W / 2 + 4}" y="${gy}" width="${W / 2 - 16}" height="44" fill="#d8e3c6"/>`;
      s += `<line x1="${x + W / 2}" y1="${y + 50}" x2="${x + W / 2}" y2="${gy + 44}" stroke="${C.ink}" stroke-width="3" stroke-dasharray="8 6"/>`;
      s += T(x + 60, gy + 30, 'D', { size: 17, weight: 700, anchor: 'middle' }) + T(x + W - 60, gy + 30, 'C', { size: 17, weight: 700, anchor: 'middle' });
      if (kind === 0) {
        s += `<rect x="${x + 64}" y="${gy - 70}" width="14" height="70" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/><circle cx="${x + 71}" cy="${gy - 92}" r="42" fill="${C.grass}" stroke="${C.ink}" stroke-width="2.5"/>`;
        s += path(`M${x + 100},${gy - 100} Q${x + 150},${gy - 110} ${x + 190},${gy - 92}`, { stroke: C.olive, w: 6 }) + path(`M${x + 78},${gy + 10} Q${x + 150},${gy + 30} ${x + 200},${gy + 20}`, { stroke: C.olive, w: 4 });
      }
      if (kind === 1) {
        s += `<rect x="${x + 40}" y="${gy - 70}" width="60" height="70" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5"/><rect x="${x + 82}" y="${gy - 96}" width="14" height="26" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>`;
        [0, 1, 2].forEach((i) => { s += path(`M${x + 96 + i * 8},${gy - 100 + i * 10} q30,-10 60,0 t60,0`, { stroke: C.muted, w: 3 }); });
        [0, 1, 2, 3].forEach((i) => { s += path(`M${x + 165 + i * 22},${gy} l0,-26 m0,10 l-8,-8 m8,2 l8,-8`, { stroke: C.rust, w: 3 }); });
      }
      if (kind === 2) {
        s += `<rect x="${x + 36}" y="${gy - 64}" width="70" height="64" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5"/><path d="M${x + 186},${gy} l0,-50 l30,-24 l30,24 l0,50 z" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>`;
        [0, 1, 2].forEach((i) => { s += path(`M${x + 116 + i * 16},${gy - 60 + i * 2} a${14 + i * 8},${18 + i * 10} 0 0 1 0,${32 + i * 16}`, { stroke: C.rust, w: 3 }); });
      }
      const lab = [['Encroachment', 'roots or branches cross the boundary'], ['Physical damage', 'fumes damaging crops or buildings'], ['Comfort and enjoyment', 'noise, smells, vibration, dust']][kind];
      s += T(x + W / 2, y + 30, lab[0], { size: 19, weight: 700, anchor: 'middle' });
      return { s, lab };
    };
    let s = '';
    [0, 1, 2].forEach((k) => { s += scene(30 + k * (W + gap), k).s; });
    const r = row(y + H + 12, [
      { body: 'Roots or branches crossing the boundary: usually straightforward' },
      { body: 'Locality **not relevant** (*St Helen’s Smelting v Tipping*, 1865)', fill: C.cream, edge: C.olive },
      { body: 'Noise, smells, vibration, dust: the **balancing factors** decide' },
    ], { gap: 15, vcenter: false, card: { size: 15, pad: 14, bfill: C.ink } });
    return { s: s + r.s, h: H + 12 + r.h };
  },
  (y) => ({ s: T(450, y + 8, 'D: defendant’s land    ·    C: claimant’s land', { size: 15, anchor: 'middle', fill: C.muted }), h: 10 }),
],
'Three plan sketches across a boundary between the defendant’s and claimant’s land: encroachment by tree roots and branches; physical damage from fumes damaging crops, where locality is irrelevant (St Helen’s Smelting v Tipping); and interference with comfort and enjoyment from noise, where the balancing factors decide.',
'Physical damage is a nuisance anywhere; comfort claims depend on balancing.', H2.p1, { gap: 14 });

// 02 Who can sue and be sued
F('02-who-sues-who', 'Who can sue, and who can be sued?', '', [
  (y) => {
    const y0 = y; y += 40;
    const L = stack(y, [
      { kicker: 'CAN SUE', title: 'A proprietary interest in the land', body: 'An owner or tenant', fill: C.tealLight, edge: C.tealDark },
      { kicker: 'CANNOT SUE', title: 'No interest in the land', body: '*Hunter v Canary Wharf* (1997): family members of the owner could not sue; TV interference by a building’s presence not actionable', kfill: C.rust, edge: C.rust },
    ], { x: 30, w: 380, gap: 12, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink } });
    const R = stack(y, [
      { kicker: 'THE CREATOR', body: 'Whether or not they still occupy the land' },
      { kicker: 'THE OCCUPIER', body: 'Even for a trespasser’s or natural nuisance, if they know or ought to know and fail to act. *Sedleigh-Denfield* (1940): “adopted and continued” a trespasser’s pipe. *Leakey v National Trust* (1980): natural mound' },
      { kicker: 'A LANDLORD', body: 'Who authorised it, e.g. by letting for a purpose bound to cause it' },
    ], { x: 490, w: 380, gap: 12, card: { size: 16, pad: 16, bfill: C.ink } });
    const H = Math.max(L.h, R.h);
    return { s: L.s + R.s + T(220, y0 + 24, 'CLAIMANT', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(680, y0 + 24, 'DEFENDANT', { size: 19, weight: 700, anchor: 'middle', fill: C.rust }) + `<line x1="450" y1="${y0}" x2="450" y2="${y + H}" stroke="${C.ink}" stroke-width="3" stroke-dasharray="10 8"/>`, h: H + 40 };
  },
],
'Claimants need a proprietary interest in the land, as an owner or tenant; in Hunter v Canary Wharf family members without an interest could not sue. Defendants can be the creator of the nuisance, the occupier where they adopt or continue a trespasser’s or natural nuisance (Sedleigh-Denfield; Leakey v National Trust), or a landlord who authorised it.',
'Only those with an interest in land can sue; creators, occupiers and authorising landlords can be sued.', H2.p1);

// 03 Balancing factors
F('03-unreasonableness-factors', 'Is the interference unreasonable?', 'What is reasonable for ordinary people living in that locality', [
  (y) => grid(y, [
    { kicker: 'LOCALITY', body: '*Sturges v Bridgman* (1879): confectioner’s machinery disturbing a doctor in a medical area', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'DURATION AND TIMING', body: '*Halsey v Esso Petroleum* (1961): acid smuts, smell and night-time lorry noise in a residential area', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'SENSITIVITY', body: '*Robinson v Kilvert* (1889): unusually sensitive paper. Now foreseeability: *Network Rail v Morris* (2004), recording studio', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'MALICE', body: '*Christie v Davey* (1893): banging to disrupt music lessons. *Hollywood Silver Fox Farm v Emmett* (1936): guns fired near vixens', edge: C.rust, kfill: C.rust },
    { kicker: 'NEW FORMS', body: '*Fearn v Tate Gallery* (2023): constant viewing into flats from a public platform', fill: C.panel },
    { kicker: 'NOT AN ANSWER', body: 'Taking care: liability turns on the **result** for the neighbour, not careless conduct', fill: C.panel },
  ], 2, { gap: 14, vgap: 12, vcenter: false, card: { size: 15, pad: 15, bfill: C.ink } }),
],
'Factors deciding unreasonableness: locality (Sturges v Bridgman), duration and timing (Halsey v Esso), sensitivity (Robinson v Kilvert, now foreseeability in Network Rail v Morris), malice (Christie v Davey; Hollywood Silver Fox Farm) and new forms (Fearn v Tate Gallery). Taking care is not an answer: the result for the neighbour matters.',
'Locality, timing, sensitivity and malice tip the balance.', H2.p1);

// 04 Planning permission
F('04-planning-permission', 'Planning permission and the locality', '', [
  (y) => card(170, y, 560, { title: 'Did the permission change the character of the locality?', align: 'middle', fill: C.cream, edge: C.olive, tsize: 19, pad: 16 }),
  (y) => ({ s: AR(330, y - 18, 230, y + 18) + AR(570, y - 18, 670, y + 18) + T(214, y + 12, 'yes', { size: 17, weight: 700, fill: C.tealDark, anchor: 'end' }) + T(686, y + 12, 'no', { size: 17, weight: 700, fill: C.rust }), h: 14 }),
  (y) => row(y, [
    { kicker: 'GILLINGHAM v MEDWAY DOCK (1993)', title: 'No nuisance', body: 'Naval dockyard became a commercial port: night-time lorry noise acceptable in the new locality', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'WHEELER v JJ SAUNDERS (1996)', title: 'Nuisance', body: 'Pig units did not change the locality: the smell was a nuisance', edge: C.rust, kfill: C.rust },
  ], { gap: 30, vcenter: false, card: { size: 16, tsize: 19, pad: 18, bfill: C.ink } }),
  (y) => note(y, 'Coventry v Lawrence (2014)', 'Planning permission is generally of **limited relevance to liability**, though it can matter to the **remedy**.', { size: 17 }),
],
'Planning permission is not a defence, but it may change the locality. In Gillingham v Medway Dock it did, so night-time lorry noise was not a nuisance; in Wheeler v JJ Saunders pig units did not change the locality and the smell was a nuisance. Coventry v Lawrence: limited relevance to liability, possible relevance to remedy.',
'Ask whether the permission changed the neighbourhood, not whether the activity was permitted.', H2.p1, { gap: 22 });

// 05 Rylands elements
F('05-rylands-elements', 'Rylands v Fletcher (1868): five elements', 'Strict liability: the defendants were not personally at fault', [
  (y) => {
    const els = [
      ['Brought onto land and accumulated', 'Not naturally occurring', '✗ *Giles v Walker* (1890): thistles grew naturally'],
      ['Likely to do mischief if it escapes', 'High risk on escape, not necessarily dangerous in itself', '✗ *Transco* (2003): council water pipe to flats'],
      ['Non-natural use', 'Extraordinary and unusual, exceptionally high risk (*Transco*)', '✗ *Rickards v Lothian* (1913): domestic water. ✓ *Cambridge Water*: industrial chemicals'],
      ['Escape', 'From land the defendant controls to land outside it', '✗ *Read v J Lyons* (1947): shell exploded inside the factory'],
      ['Damage of a foreseeable type', 'To land or property; no personal injury', '✗ *Cambridge Water* (1994): borehole contamination not foreseeable'],
    ];
    let s = '', cy = y;
    els.forEach(([t1, b1, c1], i) => {
      const c = card(110, cy, 400, { title: t1, body: b1, size: 15, tsize: 17, pad: 13, bfill: C.ink, minH: 74, vcenter: true });
      const d = card(526, cy, 344, { body: c1, size: 15, pad: 13, bfill: C.ink, minH: c.h, vcenter: true, fill: '#f8faf9' });
      const hh = Math.max(c.h, d.h);
      s += card(110, cy, 400, { title: t1, body: b1, size: 15, tsize: 17, pad: 13, bfill: C.ink, minH: hh, vcenter: true, fill: i === 2 ? C.cream : C.panel, edge: i === 2 ? C.olive : C.panelEdge }).s + card(526, cy, 344, { body: c1, size: 15, pad: 13, bfill: C.ink, minH: hh, vcenter: true, fill: '#f8faf9' }).s + badge(62, cy + hh / 2, 22, String(i + 1), i === 2 ? C.mustard : C.cream);
      cy += hh + 9;
    });
    return { s: `<line x1="62" y1="${y + 20}" x2="62" y2="${cy - 30}" stroke="${C.panelEdge}" stroke-width="4"/>` + s, h: cy - y - 9 };
  },
  (y) => row(y, [
    { kicker: 'AFTER TRANSCO', body: 'A sub-species of private nuisance: claimant needs an interest in land; no personal injury', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'STANNARD v GORE (2012)', body: 'Fire spread from a tyre business: tyres not exceptionally dangerous, and the fire, not the tyres, escaped', kfill: C.rust },
  ], { gap: 16, vcenter: false, card: { size: 15, pad: 15, bfill: C.ink } }),
],
'Five elements of Rylands v Fletcher, each with a case where it failed or was met: accumulation (Giles v Walker), something likely to do mischief (Transco), non-natural use (Rickards v Lothian; Cambridge Water), escape (Read v J Lyons) and damage of a foreseeable type (Cambridge Water). After Transco the claimant needs an interest in land and cannot recover for personal injury; Stannard v Gore shows fire cases rarely fit.',
'All five elements are needed; most claims fail on one of them.', H2.p2, { gap: 18 });

// 06 Kemi worked problem
F('06-kemi-worked-problem', 'Worked problem: Kemi’s repair shop', 'Mixed area of shops and flats', [
  (y) => {
    let s = `<rect x="30" y="${y}" width="840" height="240" rx="14" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2.5"/>`;
    s += `<rect x="60" y="${y + 50}" width="300" height="140" rx="8" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5"/>` + T(210, y + 40, 'Kemi’s shop and yard', { size: 17, weight: 700, anchor: 'middle' });
    [0, 1, 2].forEach((i) => { s += `<ellipse cx="${250 + i * 34}" cy="${y + 160}" rx="14" ry="20" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2"/>`; });
    s += T(284, y + 132, 'thinner drums', { size: 15, anchor: 'middle', weight: 600 });
    s += `<rect x="80" y="${y + 70}" width="120" height="50" rx="6" fill="${C.panel}" stroke="${C.ink}" stroke-width="2"/>` + T(140, y + 101, 'compressors', { size: 15, anchor: 'middle' });
    s += `<line x1="450" y1="${y + 40}" x2="450" y2="${y + 210}" stroke="${C.ink}" stroke-width="4" stroke-dasharray="10 7"/>` + T(450, y + 30, 'fence', { size: 15, anchor: 'middle', fill: C.muted });
    s += `<rect x="540" y="${y + 50}" width="300" height="100" rx="8" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` + T(690, y + 40, 'Leo’s flat', { size: 17, weight: 700, anchor: 'middle' }) + T(690, y + 92, 'Leo (owner)', { size: 16, anchor: 'middle', weight: 600 }) + T(690, y + 120, 'Ana (lodger)', { size: 16, anchor: 'middle', weight: 600 });
    s += `<rect x="540" y="${y + 160}" width="300" height="34" fill="#d8e3c6"/>` + T(690, y + 183, 'garden plants', { size: 15, anchor: 'middle', weight: 600 });
    [0, 1, 2].forEach((i) => { s += path(`M${370 + i * 22},${y + 80} a${12 + i * 8},${18 + i * 8} 0 0 1 0,${36 + i * 16}`, { stroke: C.rust, w: 3 }); });
    s += T(405, y + 156, 'noise to', { size: 15, weight: 700, anchor: 'middle', fill: C.rust }) + T(405, y + 174, 'midnight', { size: 15, weight: 700, anchor: 'middle', fill: C.rust });
    s += path(`M330,${y + 182} Q450,${y + 205} 560,${y + 178}`, { stroke: C.olive, w: 5, extra: 'stroke-dasharray="4 7"' }) + T(450, y + 226, 'leak seeps under the fence', { size: 15, weight: 700, anchor: 'middle', fill: C.olive });
    return { s, h: 242 };
  },
  (y) => grid(y, [
    { kicker: 'NUISANCE: LEO ✓', body: 'Owner, so can sue. Noise to midnight near flats, continuing: likely unreasonable (*Halsey*). Running a trade is no defence', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'NUISANCE: ANA ✗', body: 'A lodger has no proprietary interest: cannot sue (*Hunter v Canary Wharf*)', kfill: C.rust, edge: C.rust },
    { kicker: 'RYLANDS: LEO ✓', body: 'Thinner accumulated; mischief if it escapes; bulk chemicals arguably non-natural (*Cambridge Water*; *Transco*); escape; plant damage foreseeable', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'REMEDIES', body: 'Damages for the plants; injunction limiting hours of noisy work', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], 2, { gap: 14, vgap: 12, vcenter: false, card: { size: 15, pad: 15, bfill: C.ink } }),
],
'A plan of Kemi’s repair shop, with compressors and drums of paint thinner, next to Leo’s flat, where Leo owns and Ana lodges. Noise until midnight crosses the fence and thinner seeps under it into Leo’s garden. Leo can sue in nuisance (Halsey) and under Rylands; Ana cannot sue (Hunter v Canary Wharf). Remedies: damages and an injunction limiting hours.',
'Same facts, two torts: deal with each separately and check who can sue.', H2.we, { gap: 16 });

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
