import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-law-9084-sentencing-in-england-and-wales';
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
  ad: '## 2.3.1 Adult offenders',
  yo: '## 2.3.2 Young offenders',
  aims: '## 2.3.3 Aims of sentencing',
  we: '## Worked example',
};

// 01 Adult sentence ladder
F('01-adult-sentence-ladder', 'Adult sentences, from least to most severe', 'Sentencing Act 2020 (the Sentencing Code)', [
  (y) => {
    const tiers = [
      { k: 'DISCHARGES', t: 'Absolute: no penalty, barely blameworthy. Conditional: no penalty unless a further offence within up to three years', fill: C.panel },
      { k: 'FINES', t: 'The most common sentence. Reflect seriousness and means; standard scale levels 1 to 5, top level unlimited since 2015. A compensation order takes priority if both cannot be afforded', fill: C.tealLight },
      { k: 'COMMUNITY ORDER', t: 'Up to three years with one or more requirements, normally at least one for punishment (or combined with a fine)', fill: C.teal },
      { k: 'CUSTODY', t: 'Suspended sentence order (up to two years, suspended six months to two years); determinate; life (mandatory for murder); extended; minimum sentences for some repeat offences', fill: C.mustard },
    ];
    let s = '', cy = y; const out = [];
    tiers.forEach((tr, i) => {
      const indent = i * 40;
      const c = card(30 + indent, cy, 840 - indent, { kicker: tr.k, body: tr.t, size: 16, pad: 16, bfill: C.ink, fill: tr.fill, edge: C.ink, kfill: C.ink });
      out.push({ c, cy, indent }); cy += c.h + (i === 1 || i === 2 ? 40 : 10);
    });
    out.forEach(({ c }) => { s += c.s; });
    // thresholds
    const th = (yy, txt) => `<line x1="30" y1="${yy}" x2="870" y2="${yy}" stroke="${C.rust}" stroke-width="2.5" stroke-dasharray="8 6"/>` + `<rect x="${450 - tw(txt, 16, 700) / 2 - 12}" y="${yy - 15}" width="${tw(txt, 16, 700) + 24}" height="30" rx="15" fill="${C.bg}" stroke="${C.rust}" stroke-width="2"/>` + T(450, yy + 6, txt, { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
    s += th(out[2].cy - 20, 'threshold: serious enough to warrant a community sentence');
    s += th(out[3].cy - 20, 'threshold: so serious that neither a fine nor a community sentence is justified');
    return { s, h: cy - 10 - y };
  },
],
'Four tiers of adult sentence rising in severity: discharges (absolute and conditional), fines (levels 1 to 5, top level unlimited since 2015, with compensation orders taking priority), community orders of up to three years with requirements, and custody (suspended, determinate, life, extended and minimum sentences). Dashed lines mark the community and custody thresholds.',
'Each step up needs the offence to cross a seriousness threshold.', H2.ad);

// 02 Guideline steps and plea reduction
F('02-guideline-steps', 'How a sentencing guideline works', 'Sentencing Council guidelines, followed unless contrary to the interests of justice', [
  (y) => steps(y, [
    { title: 'Seriousness: culpability and harm', body: 'Planning, a weapon, a leading role; harm caused, intended or foreseeable. Gives a category, starting point and range.' },
    { title: 'Aggravating factors', body: 'Previous convictions, offending on bail, hostility based on a protected characteristic, targeting a vulnerable victim.' },
    { title: 'Mitigating factors', body: 'No previous convictions, genuine remorse, youth or lack of maturity, a minor role, mental illness.' },
    { title: 'Reduction for a guilty plea', body: 'See the scale below.' },
    { title: 'Totality, ancillary orders and reasons', body: 'Just overall; compensation or disqualification; the court explains its sentence.' },
  ], { size: 16, highlight: 3 }),
  (y) => {
    const k = 1500; let s = T(30, y + 16, 'MAXIMUM PLEA REDUCTION, to scale', { size: 16, weight: 700, fill: C.muted });
    [['First opportunity', 1 / 3, 'up to one-third', C.mustard], ['After that', 1 / 4, 'one-quarter', C.cream], ['First day of trial', 1 / 10, 'towards one-tenth', C.panel]].forEach(([l, f, lab, fill], i) => {
      const yy = y + 32 + i * 46;
      s += T(230, yy + 26, l, { size: 17, weight: 700, anchor: 'end' }) + `<rect x="245" y="${yy + 4}" width="${f * k}" height="32" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>` + T(255 + f * k, yy + 27, lab, { size: 17, weight: 600 });
    });
    return { s, h: 32 + 3 * 46 };
  },
],
'Five guideline steps: seriousness by culpability and harm, aggravating factors, mitigating factors, the guilty plea reduction and totality with ancillary orders and reasons. Bars to scale show the plea reduction falling from up to one-third at the first opportunity to one-quarter after that and towards one-tenth on the first day of trial.',
'Seriousness sets the starting point; factors and an early plea move it.', H2.ad);

// 03 Youth sentences and parents
F('03-young-offenders', 'Sentencing young offenders (10–17)', 'Usually in the youth court; custody is a last resort', [
  (y) => row(y, [
    { kicker: 'COMMUNITY', title: 'Referral order', body: 'Most first-time offenders who plead guilty; contract with a youth offender panel for three to twelve months; spent once completed' },
    { kicker: 'COMMUNITY', title: 'Youth rehabilitation order', body: 'CJIA 2008; up to three years; supervision, activity, curfew, exclusion, unpaid work (16–17), intensive supervision and surveillance' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink, fill: C.tealLight, edge: C.tealDark } }),
  (y) => row(y, [
    { kicker: 'CUSTODY', title: 'Detention and training order', body: 'Ages 12–17; four months to two years, half in custody; under-15s only if persistent' },
    { kicker: 'CUSTODY', title: 'Long-term detention', body: '“Grave crimes” carrying at least fourteen years for an adult' },
    { kicker: 'CUSTODY', title: 'At His Majesty’s pleasure', body: 'Mandatory for murder committed under 18, with a minimum term' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink, fill: C.cream, edge: C.olive } }),
  (y) => card(30, y, 840, { kicker: 'PARENTAL RESPONSIBILITY', body: ['**Attendance:** parents of under-16s must normally attend court', '**Fines, costs, compensation:** parent must normally pay for under-16s; may for 16–17', '**Parenting order** (Crime and Disorder Act 1998): counselling or guidance; e.g. ensure school attendance', '**Binding over** to take proper care and control'], bullets: true, gap: 4, size: 16, pad: 18, bfill: C.ink }),
],
'Youth sentences: community options are the referral order and the youth rehabilitation order; custodial options are the detention and training order (12 to 17), long-term detention for grave crimes and detention at His Majesty’s pleasure for murder. Parental responsibility covers attendance at court, paying fines and compensation, parenting orders and binding over.',
'Community options first; custody is a last resort, and parents share responsibility.', H2.yo);

// 04 Aims of sentencing
F('04-aims-of-sentencing', 'Aims of sentencing: adults and young offenders', '', [
  (y) => table(y, [
    { w: 0.9, head: 'Aim (adults, 18+)' },
    { w: 1.25, head: 'Meaning', hfill: C.teal },
    { w: 1.25, head: 'Sentences that serve it', hfill: C.teal },
  ], [
    ['Punishment (retribution)', 'Just deserts proportionate to seriousness', 'Custody; guideline categories; unpaid work'],
    ['Reduction of crime, incl. deterrence', 'Individual: this offender; general: warns others (*R v Blackshaw*, 2011)', 'Suspended sentences; exemplary custodial terms'],
    ['Reform and rehabilitation', 'Changing behaviour so the offender stops offending', 'Drug, alcohol and mental health requirements'],
    ['Protection of the public', 'Preventing the offender causing harm', 'Life and extended sentences; curfews; disqualification'],
    ['Reparation', 'Making amends to victim or community', 'Compensation orders; unpaid work; restorative justice'],
  ], { size: 16, hsize: 17 }),
  (y) => card(30, y, 840, { kicker: 'YOUNG OFFENDERS', title: 'Principal aim: to prevent offending (s37 Crime and Disorder Act 1998)', body: 'With regard to the child’s welfare (Children and Young Persons Act 1933): rehabilitation and reparation weigh more than punishment; avoid unnecessary criminalisation.', fill: C.cream, edge: C.olive, size: 16, tsize: 18, pad: 18, bfill: C.ink }),
  (y) => note(y, '', '**Common mistake:** listing sentences without linking them to an aim.', { size: 17, align: 'middle', fill: C.panel, edge: C.panelEdge }),
],
'A table of the five adult aims in the Sentencing Code, each with its meaning and the sentences that serve it: punishment, reduction of crime including deterrence (R v Blackshaw), reform and rehabilitation, protection of the public, and reparation. For young offenders the principal aim is preventing offending, with regard to welfare.',
'Every sentence should be linked to an aim; for children the aim is prevention.', H2.aims);

// 05 Priya worked example
F('05-priya-worked-example', 'Worked example: sentencing Priya', 'Theft of £400 from her employer; guilty plea at first appearance', [
  (y) => row(y, [
    { kicker: 'AGGRAVATING', kfill: C.rust, body: ['Abuse of a position of trust'], bullets: true },
    { kicker: 'MITIGATING', body: ['No previous convictions', 'Remorse', 'Repaid the money'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'PLEA', body: 'First opportunity: up to one-third reduction', fill: C.cream, edge: C.olive },
  ], { gap: 14, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink, gap: 4 } }),
  (y) => card(30, y, 840, { kicker: 'SERIOUSNESS', body: 'Breach of trust raises culpability; harm relatively low and repaired', size: 16, pad: 16, bfill: C.ink }),
  (y) => {
    const a = arrow(450, y - 14, 450, y + 6);
    const r = row(y + 12, [
      { title: 'Community order with unpaid work', body: 'Punishment and reparation', fill: C.mustard, edge: C.ink },
      { title: 'Or a fine', body: 'Rather than custody' },
      { title: 'Conditional discharge possible', body: 'If little need for punishment' },
    ], { gap: 14, vcenter: true, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink, align: 'middle' } });
    return { s: a + r.s, h: 12 + r.h };
  },
  (y) => note(y, '', 'No custody supports **rehabilitation**: she keeps her family life and can find new work.', { size: 17, align: 'middle', fill: C.tealLight, edge: C.tealDark }),
],
'Priya’s case: abuse of trust aggravates; no previous convictions, remorse and repayment mitigate; an early plea earns up to one-third off. The likely outcome is a community order with unpaid work, serving punishment and reparation, or a fine, with a conditional discharge possible; avoiding custody supports rehabilitation.',
'Weigh the factors, apply the plea, then name the sentence and the aim it serves.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
