import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-law-9084-torts-affecting-the-person';
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
  shared: '## Features shared by all three torts',
  ass: '## 4.3.1 Assault',
  bat: '## 4.3.2 Battery',
  fi: '## 4.3.3 False imprisonment',
  model: '## Annotated model answer',
};

// 01 Trespass or negligence?
F('01-trespass-or-negligence', 'Trespass to the person or negligence?', 'Assault, battery and false imprisonment share four features', [
  (y) => {
    const q1 = card(250, y, 400, { title: 'Did the harm follow directly from the act?', align: 'middle', fill: C.cream, edge: C.olive, tsize: 18, pad: 16 });
    const y2 = y + q1.h + 44;
    const q2 = card(250, y2, 400, { title: 'Was the act intentional or reckless?', align: 'middle', fill: C.cream, edge: C.olive, tsize: 18, pad: 16 });
    const y3 = y2 + q2.h + 44;
    const tr = card(30, y3, 400, { kicker: 'TRESPASS TO THE PERSON', title: 'Actionable per se', body: 'No damage need be proved: nominal damages even without injury; aggravated or exemplary in serious cases', fill: C.tealLight, edge: C.tealDark, size: 16, tsize: 19, bfill: C.ink });
    const ng = card(470, y3, 400, { kicker: 'NEGLIGENCE (THE ALTERNATIVE ACTION)', title: 'Damage must be proved', body: '*Letang v Cooper* (1965): an unintentional act lies in negligence, not trespass', size: 16, tsize: 19, bfill: C.ink, minH: tr.h });
    let s = q1.s + q2.s + tr.s + ng.s;
    s += arrow(450, y + q1.h + 4, 450, y2 - 4) + T(462, y + q1.h + 28, 'yes', { size: 16, weight: 700, fill: C.tealDark });
    s += arrow(380, y2 + q2.h + 4, 230, y3 - 4) + T(290, y2 + q2.h + 22, 'yes', { size: 16, weight: 700, fill: C.tealDark, anchor: 'end' });
    s += arrow(520, y2 + q2.h + 4, 670, y3 - 4) + T(610, y2 + q2.h + 22, 'no', { size: 16, weight: 700, fill: C.rust });
    s += path(`M650,${y + q1.h / 2} L800,${y + q1.h / 2}`, { w: 3 }) + arrow(800, y + q1.h / 2, 800, y3 - 4) + T(812, y + q1.h / 2 - 10, 'no', { size: 16, weight: 700, fill: C.rust }) + T(788, y + q1.h / 2 + 50, 'indirect:', { size: 15, fill: C.muted, anchor: 'end' }) + T(788, y + q1.h / 2 + 68, 'negligence', { size: 15, fill: C.muted, anchor: 'end' }) + T(788, y + q1.h / 2 + 86, 'or other torts', { size: 15, fill: C.muted, anchor: 'end' });
    return { s, h: y3 + Math.max(tr.h, ng.h) - y };
  },
  (y) => note(y, '', '**Standard of proof:** the balance of probabilities, even where the same facts are also crimes.', { size: 17, align: 'middle', fill: C.panel, edge: C.panelEdge }),
],
'A flow chart: if the harm followed directly from an intentional or reckless act, the claim is trespass to the person, actionable without proof of damage. If the act was unintentional, the claim lies in negligence and damage must be proved (Letang v Cooper). All are proved on the balance of probabilities.',
'Direct and intentional: trespass, no damage needed. Unintentional: negligence, damage needed.', H2.shared, { gap: 26 });

// 02 Assault
F('02-assault', 'Assault: apprehending immediate force', 'No contact is needed', [
  (y) => row(y, [
    { kicker: 'APPREHENSION, NOT FEAR', body: 'The claimant must expect force; someone asleep, unaware of the threat, is not assaulted' },
    { kicker: 'IMMEDIACY AND MEANS', body: '*Stephens v Myers* (1830): fist raised, stopped before reaching him: liable. *Thomas v NUM* (1985): pickets held back by police: no' },
    { kicker: 'REASONABLENESS', body: '*Read v Coker* (1853): workmen surrounded him, threatening to break his neck' },
  ], { gap: 14, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink, fill: C.tealLight, edge: C.tealDark } }),
  (y) => ({ s: T(450, y + 12, 'WORDS AND SILENCE', { size: 16, weight: 700, anchor: 'middle', fill: C.muted }), h: 12 }),
  (y) => row(y, [
    { kicker: 'WORDS CAN CREATE', title: 'An assault', body: 'Where they lead the claimant to expect immediate force', fill: C.cream, edge: C.olive },
    { kicker: 'WORDS CAN NEGATE', kfill: C.rust, title: 'An assault', body: '*Tuberville v Savage* (1669): hand on sword, but “If it were not assize-time, I would not take such language from you”' },
    { kicker: 'SILENCE CAN BE ENOUGH', title: 'Silent telephone calls', body: '*R v Ireland* (1998), a criminal case usually cited on this point', fill: C.cream, edge: C.olive },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink } }),
],
'Assault requires the claimant to apprehend immediate unlawful force, not to feel fear. Stephens v Myers and Thomas v NUM show immediacy and means; Read v Coker shows reasonableness. Words can create an assault or negate one (Tuberville v Savage), and silence can be enough (R v Ireland).',
'The test is reasonable apprehension of immediate force; words can make or unmake it.', H2.ass);

// 03 Battery: force and hostility
F('03-battery-force', 'Battery: what counts as force?', 'The intentional and direct application of unlawful force', [
  (y) => row(y, [
    { kicker: 'ANY TOUCHING', body: '“The least touching of another in anger”: *Cole v Turner* (1704). No injury needed' },
    { kicker: 'THROUGH AN OBJECT', body: 'Such as throwing water' },
    { kicker: 'CONTINUING ACT', body: '*Fagan v MPC* (1969): car left on an officer’s foot' },
  ], { gap: 14, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink, fill: C.tealLight, edge: C.tealDark } }),
  (y) => card(30, y, 840, { kicker: 'NOT A BATTERY: EVERYDAY CONTACT', title: 'Collins v Wilcock (1984)', body: 'Taken to consent to ordinary contacts of daily life: jostling in a crowd, a tap on the shoulder. But an officer who held a woman’s arm to detain her, without arresting her, committed a battery.', size: 16, tsize: 18, pad: 18, bfill: C.ink, fill: C.cream, edge: C.olive }),
  (y) => {
    const lab = T(450, y + 14, 'MUST THE TOUCHING BE HOSTILE?', { size: 16, weight: 700, anchor: 'middle', fill: C.muted });
    const r = row(y + 28, [
      { kicker: 'YES', title: 'Wilson v Pringle (1987)', body: 'An unlawful interference the claimant would object to' },
      { kicker: 'NO', title: 'F v West Berkshire HA (1989)', body: 'Lord Goff: a well-meant but unwanted touching, such as surgery without consent, is a battery' },
    ], { arrows: true, gap: 50, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink } });
    const n = para(450, y + 28 + r.h + 28, 'Better view: is the touching outside the generally accepted conduct of everyday life?', 840, { size: 17, weight: 600, anchor: 'middle', fill: C.tealDark });
    return { s: lab + r.s + n.s, h: 28 + r.h + 12 + n.h };
  },
],
'Battery covers any touching (Cole v Turner), force through an object and continuing acts (Fagan). Everyday contact is not a battery (Collins v Wilcock), though holding a woman’s arm without arrest was. On hostility, Wilson v Pringle required it but F v West Berkshire said it is not needed; the better view asks whether the touching is outside generally accepted everyday conduct.',
'The least unwanted touching can be a battery; everyday contact is not.', H2.bat);

// 04 Defences to battery
F('04-battery-defences', 'Defences to battery', '', [
  (y) => row(y, [
    { kicker: 'CONSENT', title: 'Express or implied', body: ['**Medical:** real if informed in broad terms (*Chatterton v Gerson*, 1981); failure to explain risks is negligence', 'A competent adult may refuse treatment, even if fatal (*Re T*, 1992)', '**Sport:** contact within the rules and spirit, not deliberate foul play'], gap: 6, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'SELF-DEFENCE', title: 'Honest and reasonable belief; reasonable, proportionate force', body: ['*Lane v Holloway* (1968): serious eye injury for a minor blow was excessive', '*Ashley v CC of Sussex* (2008): a mistaken belief must be reasonable in a civil claim'], gap: 6, fill: C.cream, edge: C.olive },
    { kicker: 'NECESSITY', title: 'To prevent greater harm', body: ['*Leigh v Gladstone* (1909): force-feeding a hunger striker; now doubted', '*F v West Berkshire*: sterilisation in the best interests of a patient unable to consent'], gap: 6 },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink } }),
],
'Three defences to battery. Consent, express or implied: in medical treatment if informed in broad terms (Chatterton v Gerson), with a right to refuse (Re T), and in sport for contact within the rules. Self-defence needs an honest and reasonable belief and proportionate force (Lane v Holloway; Ashley). Necessity covers preventing greater harm (Leigh v Gladstone, now doubted; F v West Berkshire).',
'Consent, self-defence and necessity, each with its limit.', H2.bat);

// 05 False imprisonment
{
  const person = (x, y, c = C.tealLight) => `<circle cx="${x}" cy="${y}" r="9" fill="${c}" stroke="${C.ink}" stroke-width="2.5"/>` + path(`M${x},${y + 9} L${x},${y + 32} M${x - 12},${y + 17} L${x + 12},${y + 17} M${x},${y + 32} L${x - 10},${y + 48} M${x},${y + 32} L${x + 10},${y + 48}`, { w: 2.5 });
  F('05-false-imprisonment', 'False imprisonment: total restraint', 'Unlawful total restraint of liberty, for any time, however short', [
    (y) => {
      let s = panel(30, y, 410, 210) + panel(460, y, 410, 210);
      // locked room
      s += T(50, y + 32, 'Total restraint: imprisoned', { size: 18, weight: 700, fill: C.tealDark });
      s += `<rect x="90" y="${y + 60}" width="290" height="120" fill="${C.panel}" stroke="${C.ink}" stroke-width="5"/>` + person(235, y + 92) + `<rect x="370" y="${y + 100}" width="10" height="44" fill="${C.rust}"/>` + T(360, y + 172, 'locked', { size: 15, weight: 700, anchor: 'end', fill: C.rust });
      // bridge
      s += T(480, y + 32, 'Partial obstruction: Bird v Jones (1845)', { size: 18, weight: 700, fill: C.rust });
      s += `<rect x="490" y="${y + 90}" width="350" height="60" fill="${C.sand}" stroke="${C.ink}" stroke-width="2.5"/>` + `<rect x="700" y="${y + 84}" width="12" height="72" fill="${C.rust}"/>` + T(706, y + 76, 'blocked', { size: 15, weight: 700, anchor: 'middle', fill: C.rust }) + person(640, y + 72, C.cream) + arrow(610, y + 135, 510, y + 135, { color: C.tealDark, marker: 'ahT', w: 3.5 }) + T(620, y + 182, 'could go back the other way', { size: 15, weight: 600, anchor: 'middle', fill: C.tealDark });
      return { s, h: 210 };
    },
    (y) => grid(y, [
      { kicker: 'MEANS OF ESCAPE', body: 'Must be reasonable: a dangerous route such as a high window does not count' },
      { kicker: 'REASONABLE CONDITIONS', body: '*Robinson v Balmain Ferry* (1910): small turnstile charge. *Herd v Weardale* (1915): miners not brought up before the end of the shift' },
      { kicker: 'KNOWLEDGE NOT NEEDED', body: '*Meering v Grahame-White* (1920). *Murray v MoD* (1988): but damages may be nominal if unaware and unharmed', fill: C.tealLight, edge: C.tealDark },
      { kicker: 'LAWFUL RESTRAINT', body: 'Lawful arrest (PACE 1984) or sentence. Unlawful once authority ends: *ex parte Evans* (2001). *Austin v MPC* (2009): containment not contrary to Article 5', fill: C.cream, edge: C.olive },
    ], 2, { gap: 14, vgap: 14, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } }),
  ],
  'Two pictures: a person in a locked room is totally restrained, while in Bird v Jones a claimant blocked on part of a bridge could go back the other way, so was not imprisoned. Four panels: escape routes must be reasonable; reasonable conditions on leaving are allowed (Robinson v Balmain; Herd v Weardale); knowledge is not needed (Meering; Murray); and restraint must be lawful (PACE; ex parte Evans; Austin).',
  'Restraint must be total; partial obstruction is not false imprisonment.', H2.fi);
}

// 06 Nora model answer
F('06-nora-model-answer', 'Model answer: Nora and the security guard', 'Nora had not stolen anything', [
  (y) => {
    const ly = y + 70, cw = (840 - 28) / 3, xs = [0, 1, 2].map((i) => 30 + cw / 2 + i * (cw + 14));
    let s = `<line x1="60" y1="${ly}" x2="840" y2="${ly}" stroke="${C.ink}" stroke-width="4" marker-end="url(#ah)"/>`;
    [['“Stop or I’ll make you!”', '1'], ['Grabs her arm', '2'], ['Locked in a room, 40 minutes', '3']].forEach(([e, n], i) => { s += badge(xs[i], ly, 22, n, C.cream) + para(xs[i], y + 22, e, 260, { size: 17, weight: 700, anchor: 'middle', fill: C.ink }).s; });
    const yc = ly + 50;
    const r = row(yc, [
      { kicker: 'ASSAULT', body: 'Shout plus approach: reasonable apprehension of immediate force (*Stephens v Myers*)' },
      { kicker: 'BATTERY', body: 'Direct, intentional force beyond everyday contact (*Collins v Wilcock*); no consent' },
      { kicker: 'FALSE IMPRISONMENT', body: 'Locked room. An unknown, unlocked fire exit does not prevent total restraint' },
    ], { gap: 14, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink, fill: C.tealLight, edge: C.tealDark } });
    s += r.xs.map((x, i) => `<line x1="${xs[i]}" y1="${ly + 24}" x2="${xs[i]}" y2="${yc}" stroke="${C.ink}" stroke-width="2.5" stroke-dasharray="5 4"/>`).join('');
    return { s: s + r.s, h: yc + r.h - y };
  },
  (y) => row(y, [
    { kicker: 'LAWFUL RESTRAINT?', body: 'A citizen’s arrest under s24A PACE 1984 has strict conditions, including that a constable could not reasonably make it. Locking her in for 40 minutes instead of calling the police likely exceeds any authority.' },
    { kicker: 'CONCLUSION', body: 'Nora can sue for all three torts without proving damage; damages may include compensation for humiliation.', fill: C.cream, edge: C.olive },
  ], { gap: 14, fr: [1.4, 1], vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } }),
],
'A timeline of Ali’s three acts: the shout is an assault (Stephens v Myers), grabbing Nora’s arm is a battery (Collins v Wilcock), and locking her in a room for 40 minutes is false imprisonment despite an unknown unlocked fire exit. A citizen’s arrest under s24A PACE probably does not justify it, so Nora can sue for all three without proving damage.',
'Three acts, three torts; then ask whether the restraint was lawful.', H2.model);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
