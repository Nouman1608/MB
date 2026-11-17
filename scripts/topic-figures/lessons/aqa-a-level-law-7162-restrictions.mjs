import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-law-7162-restrictions';
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
  common: '## The common structure of the second paragraphs',
  law: '## Requirement 1: prescribed by law',
  nec: '## Requirement 3: necessary in a democratic society',
  moa: '## The margin of appreciation',
  conflict: '## When two qualified rights conflict',
  we: '## Worked example',
};

// 01 Three requirements as gates
F('01-three-requirements', 'Can the state justify the interference?', 'Articles 8.2, 10.2 and 11.2: the burden is on the state', [
  (y) => card(250, y, 400, { title: 'Interference with a right in 8.1, 10.1 or 11.1', align: 'middle', fill: C.tealLight, edge: C.tealDark, tsize: 18, pad: 16 }),
  (y) => {
    const qs = [
      ['1', 'In accordance with the law / prescribed by law', 'Basis in domestic law, of sufficient quality'],
      ['2', 'Pursues a legitimate aim', 'One of the aims listed in that paragraph'],
      ['3', 'Necessary in a democratic society', 'Pressing social need; proportionate to the aim'],
    ];
    let s = '', cy = y; const bw = 560, bx = 30;
    qs.forEach(([n, a, b], i) => {
      const c = card(bx + 70, cy, bw - 70, { title: a, body: b, size: 16, tsize: 18, pad: 16, bfill: C.ink, minH: 92, vcenter: true });
      s += c.s + badge(bx + 30, cy + c.h / 2, 24, n, C.cream);
      // fail branch
      const my = cy + c.h / 2;
      s += arrow(bx + bw + 6, my, 676, my, { color: C.rust, marker: 'ahR', w: 3 }) + T(640, my - 10, 'no', { size: 16, weight: 700, fill: C.rust, anchor: 'middle' });
      if (i < 2) s += arrow(bx + 30 + 0, cy + c.h / 2 + 26, bx + 30, cy + c.h + 26 + 18, { w: 3 }) + T(bx + 44, cy + c.h + 28, 'yes', { size: 16, weight: 700, fill: C.tealDark });
      cy += c.h + 46;
    });
    const bh = cy - 46 - y;
    s += `<rect x="684" y="${y}" width="186" height="${bh}" rx="14" fill="${C.cream}" stroke="${C.rust}" stroke-width="2.5"/>` + T(777, y + bh / 2 - 6, 'Right', { size: 22, weight: 700, anchor: 'middle', fill: C.rust }) + T(777, y + bh / 2 + 22, 'breached', { size: 22, weight: 700, anchor: 'middle', fill: C.rust });
    return { s: arrow(450, y - 20, 450, y - 4).replace('x1="450"', 'x1="450"') + s, h: bh };
  },
  (y) => ({ s: arrow(60, y - 18, 60, y + 4) + T(74, y - 4, 'yes', { size: 16, weight: 700, fill: C.tealDark }), h: 4 }),
  (y) => card(30, y, 560, { title: 'Interference justified: no breach', align: 'middle', fill: C.tealLight, edge: C.tealDark, tsize: 19, pad: 16 }),
],
'A flow chart. An interference with a right under Article 8.1, 10.1 or 11.1 must pass three requirements in turn: in accordance with or prescribed by law, a legitimate aim from the listed aims, and necessary in a democratic society. Failing any one means the right is breached; passing all three means the interference is justified.',
'All three requirements must be met, and the burden of showing them is on the state.', H2.common, { gap: 24 });

// 02 Comparing the second paragraphs
F('02-second-paragraphs', 'The three second paragraphs compared', '', [
  (y) => table(y, [
    { w: 0.75, head: '' },
    { w: 1.1, head: 'Article 8.2' },
    { w: 1.3, head: 'Article 10.2' },
    { w: 1.1, head: 'Article 11.2' },
  ], [
    ['Opening words', '“There shall be no interference by a public authority ... except”', 'Carries with it “duties and responsibilities”; “formalities, conditions, restrictions or penalties”', '“No restrictions shall be placed ... other than”'],
    ['Extra aims', 'Economic well-being of the country', 'Territorial integrity; information received in confidence; authority and impartiality of the judiciary', 'None, but lawful restrictions on the armed forces, police or administration of the state'],
  ], { size: 16, hsize: 18 }),
  (y) => {
    const c = chips(y + 52, ['National security', 'Public safety', 'Prevention of disorder or crime', 'Protection of health or morals', 'Protection of the rights and freedoms of others'], { size: 16, weight: 600, fill: C.panel, w: 800, x: 50 });
    const foot = para(450, y + 52 + c.h + 30, '10.2 phrases the last as protection of the reputation or rights of others', 800, { size: 16, anchor: 'middle', fill: C.ink });
    const H = 52 + c.h + 30 + foot.h + 4;
    return { s: `<rect x="30" y="${y}" width="840" height="${H}" rx="14" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + T(450, y + 32, 'AIMS SHARED BY ALL THREE', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark }) + c.s + foot.s, h: H };
  },
  (y) => note(y, '', 'The list of aims is **exhaustive**. Article 18: restrictions only for the purposes for which they are prescribed.', { size: 17, align: 'middle' }),
],
'A table comparing Articles 8.2, 10.2 and 11.2: their opening words and their extra aims (economic well-being for 8.2; territorial integrity, confidential information and the judiciary for 10.2; restrictions on armed forces, police and state administration in 11.2). Five aims are shared by all three, from national security to protection of the rights of others. The list is exhaustive, and Article 18 limits restrictions to their prescribed purposes.',
'Five aims are common to all three; each paragraph then adds its own.', H2.common);

// 03 Prescribed by law
F('03-prescribed-by-law', 'Requirement 1: prescribed by law', '', [
  (y) => {
    const inner = card(30, y, 840, { kicker: 'SUNDAY TIMES v UNITED KINGDOM (1979)', title: 'A basis in domestic law, of a certain quality', pad: 18, tsize: 20, nobox: true });
    const r = row(y + inner.h - 6, [
      { title: 'Adequately accessible', fill: C.panel },
      { title: 'Sufficiently precise', body: 'so a citizen can regulate their conduct, if need be with advice', fill: C.panel },
    ], { x: 50, w: 800, gap: 16, card: { tsize: 18, size: 16, pad: 14, align: 'middle', bfill: C.ink } });
    const H = inner.h - 6 + r.h + 18;
    const box = `<rect x="30" y="${y}" width="840" height="${H}" rx="14" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>`;
    const cl = T(850, y + 34, 'common law can satisfy it', { size: 15, anchor: 'end', fill: C.tealDark, weight: 600 });
    return { s: box + inner.s + cl + r.s, h: H };
  },
  (y) => {
    const lab = T(450, y + 16, 'WHEN IT FAILS', { size: 15, weight: 700, anchor: 'middle', fill: C.rust });
    const r = row(y + 30, [
      { kicker: 'NO LEGAL BASIS', kfill: C.rust, title: 'Malone v UK (1984)', body: 'Telephone tapping' },
      { kicker: 'TOO BROAD', kfill: C.rust, title: 'Gillan and Quinton v UK (2010)', body: 'Stop and search under ss44–47 Terrorism Act 2000 with no reasonable suspicion: insufficiently circumscribed, no adequate safeguards against abuse' },
    ], { gap: 16, vcenter: false, card: { size: 16, tsize: 18, pad: 18, bfill: C.ink }, fr: [1, 1.5] });
    return { s: lab + r.s, h: 30 + r.h };
  },
  (y) => {
    const xr = 30 + (840 - 16) * (1 / 2.5) + 16, wr = 840 - (xr - 30);
    const c = card(xr, y + 34, wr, { body: 'Power repealed; replaced by a narrower one under the **Protection of Freedoms Act 2012**', size: 16, pad: 16, bfill: C.ink, fill: C.cream, edge: C.olive });
    return { s: arrow(xr + wr / 2, y - 16, xr + wr / 2, y + 30) + c.s, h: 34 + c.h };
  },
],
'Sunday Times v UK requires a basis in domestic law that is adequately accessible and precise enough for a citizen to regulate their conduct; common law can satisfy this. The requirement fails with no legal basis (Malone v UK, telephone tapping) or a law too broad to protect against arbitrary use (Gillan and Quinton v UK, stop and search without reasonable suspicion), which led to a narrower power under the Protection of Freedoms Act 2012.',
'The law must exist, be accessible and be precise enough to guard against arbitrary use.', H2.law, { gap: 24 });

// 04 Handyside: what "necessary" means
F('04-necessary-scale', 'What does “necessary” mean?', 'Handyside v United Kingdom (1976)', [
  (y) => {
    const H = 210; let s = panel(30, y, 840, H);
    const ly = y + 110, x1 = 90, x2 = 810;
    s += `<line x1="${x1}" y1="${ly}" x2="${x2}" y2="${ly}" stroke="${C.ink}" stroke-width="4"/>`;
    s += T(x1, ly + 54, 'stricter', { size: 15, fill: C.muted }) + T(x2, ly + 54, 'looser', { size: 15, fill: C.muted, anchor: 'end' });
    const mk = (x, lab, fill, tick, col) => `<circle cx="${x}" cy="${ly}" r="16" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + T(x, ly - 32, lab, { size: 19, weight: 700, anchor: 'middle', fill: col || C.ink }) + T(x, ly + 7, tick, { size: 18, weight: 700, anchor: 'middle', fill: col || C.ink });
    s += mk(170, '“Indispensable”', C.panel, '✗', C.rust) + mk(450, '“Necessary”', C.mustard, '', C.ink) + mk(730, '“Reasonable” / “useful”', C.panel, '✗', C.rust);
    s += T(450, ly + 50, 'implies a pressing social need', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
    return { s, h: H };
  },
  (y) => row(y, [
    { title: 'Pressing social need' },
    { title: 'Reasons relevant and sufficient' },
    { title: 'Proportionate to the legitimate aim' },
  ], { gap: 14, card: { tsize: 18, pad: 18, align: 'middle', fill: C.tealLight, edge: C.tealDark } }),
  (y) => note(y, '', '**Common mistake:** using “necessary” to mean merely “useful” or “sensible”.', { size: 17, align: 'middle', fill: C.panel, edge: C.panelEdge }),
],
'A scale from stricter to looser. Handyside v UK placed “necessary” between “indispensable” and “reasonable” or “useful”: it implies a pressing social need. The state’s reasons must be relevant and sufficient and the interference proportionate to the aim.',
'“Necessary” is less than indispensable but more than useful.', H2.nec);

// 05 Bank Mellat
F('05-bank-mellat', 'Proportionality: the four Bank Mellat questions', 'Bank Mellat v HM Treasury (No 2) (2013), Lord Reed', [
  (y) => steps(y, [
    { title: 'Is the objective sufficiently important to justify limiting a fundamental right?' },
    { title: 'Is the measure rationally connected to the objective?' },
    { title: 'Could a less intrusive measure have been used without unacceptably compromising the objective?', body: 'Often where a ban fails: conditions, a warning or a narrower order may achieve the same aim.' },
    { title: 'Balancing the severity of the effects on the persons affected against the importance of the objective, does the measure strike a fair balance?' },
  ], { size: 16, tsize: 18, highlight: 2 }),
],
'Four numbered questions from Bank Mellat v HM Treasury: sufficiently important objective; rational connection; whether a less intrusive measure could have been used, highlighted as the usual point where a ban fails; and whether the measure strikes a fair balance.',
'Question 3, a less intrusive alternative, is where most measures fail.', H2.nec);

// 06 Margin of appreciation
F('06-margin-of-appreciation', 'The margin of appreciation', 'How much room the European Court leaves the state', [
  (y) => {
    const H = 130; let s = panel(30, y, 840, H);
    const x1 = 70, x2 = 830, by = y + 54;
    s += `<polygon points="170,${by} 170,${by + 60} 715,${by + 30}" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += T(55, by + 38, 'WIDE', { size: 22, weight: 700 }) + T(845, by + 38, 'NARROW', { size: 22, weight: 700, anchor: 'end' });
    s += T(450, y + 28, 'national authorities are often better placed to judge local needs', { size: 16, anchor: 'middle', fill: C.muted });
    return { s, h: H };
  },
  (y) => row(y, [
    { kicker: 'WIDE WHERE', title: 'No European consensus; moral, social or economic issues', body: ['*Handyside* (morals)', '*A, B and C v Ireland* (2010): abortion law', '*Hatton v UK* (2003): night flights'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'NARROW WHERE', kfill: C.rust, title: 'An important aspect of identity or existence; political speech', body: ['*Dudgeon v UK* (1981): intimate private life', 'Restrictions on political speech'], bullets: true },
  ], { gap: 16, vcenter: false, card: { size: 16, tsize: 18, pad: 18, bfill: C.ink, gap: 4 } }),
  (y) => note(y, 'An international doctrine', 'English courts do not apply it as such, but give weight to Parliament’s judgment in social policy: a **discretionary area of judgment**.', { size: 16, align: 'middle' }),
],
'A wedge from wide to narrow. The margin is wide where there is no European consensus or the issue is moral, social or economic (Handyside; A, B and C v Ireland; Hatton v UK) and narrow for intimate private life (Dudgeon v UK) or political speech. English courts instead use a discretionary area of judgment.',
'No consensus means a wide margin; core identity or political speech means a narrow one.', H2.moa);

// 07 Re S balancing
F('07-re-s-balance', 'When Article 8 meets Article 10', 'Re S (A Child) (2004), Lord Steyn’s four propositions', [
  (y) => {
    const H = 210; let s = panel(30, y, 840, H);
    const cx = 450, by = y + 70;
    s += `<polygon points="${cx},${by + 10} ${cx - 34},${by + 120} ${cx + 34},${by + 120}" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
    s += `<line x1="${cx - 290}" y1="${by + 10}" x2="${cx + 290}" y2="${by + 10}" stroke="${C.ink}" stroke-width="5"/>`;
    const pan = (x, lab, sub, fill) => path(`M${x},${by + 10} L${x - 70},${by + 70} M${x},${by + 10} L${x + 70},${by + 70}`, { w: 2.5 }) + `<path d="M${x - 95},${by + 70} L${x + 95},${by + 70} Q${x},${by + 150} ${x - 95},${by + 70} Z" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + T(x, by - 22, lab, { size: 21, weight: 700, anchor: 'middle' }) + T(x, by + 96, sub, { size: 16, anchor: 'middle' });
    s += pan(cx - 250, 'Article 8', 'privacy', C.tealLight) + pan(cx + 250, 'Article 10', 'the press', C.cream);
    s += T(cx, y + 34, 'Neither has automatic priority', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
    return { s, h: H };
  },
  (y) => grid(y, [
    { title: '1  Neither Article has precedence' },
    { title: '2  Intense focus on the comparative importance of the specific rights claimed' },
    { title: '3  Consider the justifications for interfering with each' },
    { title: '4  Apply the proportionality test to each' },
  ], 2, { gap: 16, vgap: 14, card: { tsize: 17, pad: 16 } }),
  (y) => note(y, '', '*Campbell v MGN* (2004) applied this balancing.', { size: 17, align: 'middle', fill: C.panel, edge: C.panelEdge }),
],
'A balance with Article 8 (privacy) on one side and Article 10 (the press) on the other, level because neither has automatic priority. Below, Lord Steyn’s four propositions from Re S: no precedence, intense focus on comparative importance, consider the justifications for each, and apply proportionality to each. Campbell v MGN applied this.',
'Privacy and expression are weighed case by case; neither wins automatically.', H2.conflict);

// 08 Worked example
F('08-worked-example-march', 'Worked example: the banned march', 'A council bans a march against an incinerator because the route passes a hospital', [
  (y) => steps(y, [
    { kicker: 'RIGHT', title: 'Article 11.1 (and 10.1)', body: 'Peaceful assembly and expression' },
    { kicker: 'PRESCRIBED BY LAW?', title: 'Likely satisfied', body: 'A statutory power under a local Act that is published and clear (*Sunday Times* test)' },
    { kicker: 'LEGITIMATE AIM?', title: 'Yes', body: 'Public safety; protection of the rights of others (patients)' },
    { kicker: 'NECESSARY?', title: 'Fails Bank Mellat question 3', body: 'Pressing social need: some disruption near a hospital, yes. Less intrusive means: re-routing was offered, so a total ban fails' },
    { kicker: 'CONCLUSION', title: 'Likely breach of Article 11', body: 'The ban was disproportionate when a condition would have met the aim' },
  ], { size: 16, tsize: 19, highlight: 3, gap: 10 }),
],
'The march scenario worked through in five steps: the right is Article 11.1 and 10.1; the statutory power is likely prescribed by law; the aims are public safety and the rights of patients; the total ban fails the less-intrusive-means question because re-routing was offered; so Article 11 is likely breached.',
'Take the requirements in order and say which one decides the case.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
