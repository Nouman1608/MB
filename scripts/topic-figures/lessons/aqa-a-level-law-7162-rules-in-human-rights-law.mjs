import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-law-7162-rules-in-human-rights-law';
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
  src: '## Where the rules come from',
  five: '## The five rights at a glance',
  pr: '## Principles that apply to every right',
  method: '## A method for any human rights problem',
  we: '## Worked example',
};

// 01 Layers of sources
F('01-layers-of-sources', 'Where human rights rules come from', 'Name the layer you are using', [
  (y) => {
    const L = [
      ['The Convention text', 'The rights and their permitted limits', 'Article 10.1 and 10.2', C.teal],
      ['Strasbourg case law', 'The meaning and scope of each right', '*Handyside v UK* (1976): expression that offends', C.tealLight],
      ['Human Rights Act 1998', 'The domestic route to rely on Convention rights', 'Section 6 duty on public authorities', C.cream],
      ['Statute', 'Specific powers that protect or restrict rights', 'PACE 1984 on arrest and detention', C.panel],
      ['Common law', 'Rights and liberties recognised by English judges', '*Entick v Carrington* (1765); *Derbyshire CC v Times Newspapers* (1993)', C.panel],
    ];
    let s = '', cy = y; const h = 86;
    L.forEach(([a, b, c], i) => {
      const fill = L[i][3];
      s += `<rect x="30" y="${cy}" width="840" height="${h}" rx="14" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>`;
      s += T(52, cy + 36, a, { size: 20, weight: 700 }) + T(52, cy + 64, b, { size: 16, fill: C.ink });
      s += `<line x1="500" y1="${cy + 16}" x2="500" y2="${cy + h - 16}" stroke="${C.ink}" stroke-width="1.5" opacity="0.4"/>`;
      s += T(516, cy + 28, 'EXAMPLE', { size: 15, weight: 700, fill: C.tealDark });
      s += para(516, cy + 52, c, 336, { size: 16, fill: C.ink }).s;
      cy += h + 10;
    });
    return { s, h: cy - 10 - y };
  },
  (y) => row(y, [
    { kicker: 'COMMON LAW: DERBYSHIRE CC v TIMES (1993)', body: 'A local authority cannot sue for defamation: it would chill free speech about government.' },
    { kicker: 'PRINCIPLE OF LEGALITY: SIMMS (1999)', body: 'Parliament must use clear words to override fundamental rights; general words do not.', fill: C.cream, edge: C.olive },
  ], { gap: 16, vcenter: false, card: { size: 16, pad: 18, bfill: C.ink } }),
],
'Five layers of human rights rules, each with an example: the Convention text (Article 10.1 and 10.2), Strasbourg case law (Handyside v UK), the Human Rights Act 1998 (the section 6 duty), statute (PACE 1984) and common law (Entick v Carrington; Derbyshire CC v Times Newspapers). Below: Derbyshire stops a council suing for defamation, and Simms sets out the principle of legality.',
'Convention, case law, the HRA, statute and common law each supply part of the rules.', H2.src);

// 02 Five rights by type
F('02-rights-by-type', 'The type of right decides the test', '', [
  (y) => {
    const cols = [
      { x: 30, w: 250, head: 'ABSOLUTE', sub: 'for contrast', fill: C.panel, arts: [['3', 'Torture, inhuman or degrading treatment']], test: 'No balancing at all' },
      { x: 295, w: 260, head: 'LIMITED', fill: C.tealLight, arts: [['2', 'Life'], ['5', 'Liberty and security']], test: 'Only in the ways the Article itself lists (2.2; 5.1 with safeguards in 5.2 to 5.5)' },
      { x: 570, w: 300, head: 'QUALIFIED', fill: C.cream, arts: [['8', 'Private and family life'], ['10', 'Expression'], ['11', 'Assembly and association']], test: 'Prescribed by law, legitimate aim, necessary in a democratic society' },
    ];
    let s = ''; const H = 420;
    cols.forEach((c) => {
      s += `<rect x="${c.x}" y="${y}" width="${c.w}" height="${H}" rx="14" fill="${c.fill}" stroke="${C.ink}" stroke-width="2.5"/>`;
      s += T(c.x + c.w / 2, y + 36, c.head, { size: 20, weight: 700, anchor: 'middle' });
      if (c.sub) s += T(c.x + c.w / 2, y + 58, c.sub, { size: 15, anchor: 'middle', fill: C.muted });
      let yy = y + 80;
      c.arts.forEach(([n, lab]) => {
        const ph = para(0, 0, lab, c.w - 100, { size: 16, weight: 600, lh: 19 }).h, bh = Math.max(56, ph + 22);
        s += `<rect x="${c.x + 14}" y="${yy}" width="${c.w - 28}" height="${bh}" rx="10" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2"/>`;
        s += badge(c.x + 42, yy + bh / 2, 19, n, C.mustard);
        s += para(c.x + 72, yy + bh / 2 - ph / 2 + 14, lab, c.w - 100, { size: 16, weight: 600, fill: C.ink, lh: 19 }).s;
        yy += bh + 10;
      });
      s += `<line x1="${c.x + 14}" y1="${y + 290}" x2="${c.x + c.w - 14}" y2="${y + 290}" stroke="${C.ink}" stroke-width="1.5" opacity="0.4"/>`;
      s += T(c.x + 18, y + 316, 'LIMITS', { size: 15, weight: 700, fill: C.tealDark });
      s += para(c.x + 18, y + 342, c.test, c.w - 36, { size: 16, fill: C.ink }).s;
    });
    return { s, h: H };
  },
  (y) => note(y, '', '**Common mistake:** applying “necessary in a democratic society” to Articles 2 or 5, which are limited rights.', { size: 17, align: 'middle', fill: C.panel, edge: C.panelEdge }),
],
'Three columns. Absolute rights, such as Article 3, allow no balancing. Limited rights, Article 2 (life) and Article 5 (liberty and security), can be restricted only in the ways the Article lists. Qualified rights, Articles 8, 10 and 11, can be restricted if prescribed by law, for a legitimate aim, and necessary in a democratic society.',
'Limited rights use the Article’s own list; qualified rights use the three-part test.', H2.five);

// 03 Negative and positive obligations
F('03-negative-positive', 'Negative and positive obligations', '', [
  (y) => {
    const fig = (x, yy, c) => `<circle cx="${x}" cy="${yy}" r="12" fill="${c}" stroke="${C.ink}" stroke-width="2.5"/>` + path(`M${x},${yy + 12} L${x},${yy + 44} M${x - 16},${yy + 24} L${x + 16},${yy + 24} M${x},${yy + 44} L${x - 13},${yy + 66} M${x},${yy + 44} L${x + 13},${yy + 66}`, { w: 2.5 });
    const state = (x, yy) => `<path d="M${x - 46},${yy + 70} L${x - 46},${yy + 20} L${x},${yy - 6} L${x + 46},${yy + 20} L${x + 46},${yy + 70} Z" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x, yy + 50, 'STATE', { size: 15, weight: 700, anchor: 'middle' });
    const H = 250; let s = panel(30, y, 410, H) + panel(460, y, 410, H);
    s += T(235, y + 36, 'Negative', { size: 21, weight: 700, anchor: 'middle' }) + T(235, y + 60, 'do not interfere without justification', { size: 16, anchor: 'middle', fill: C.muted });
    s += state(120, y + 110) + fig(350, y + 110, C.tealLight);
    s += arrow(180, y + 145, 315, y + 145, { color: C.rust, marker: 'ahR', w: 3.5 }) + `<line x1="232" y1="${y + 124}" x2="262" y2="${y + 166}" stroke="${C.rust}" stroke-width="4"/>` + `<line x1="262" y1="${y + 124}" x2="232" y2="${y + 166}" stroke="${C.rust}" stroke-width="4"/>`;
    s += T(350, y + 210, 'individual', { size: 15, anchor: 'middle', fill: C.muted }) + T(120, y + 210, 'every right', { size: 15, anchor: 'middle', fill: C.muted });
    s += T(665, y + 36, 'Positive', { size: 21, weight: 700, anchor: 'middle' }) + T(665, y + 60, 'take steps to protect the right', { size: 16, anchor: 'middle', fill: C.muted });
    s += state(520, y + 110) + fig(630, y + 110, C.tealLight) + fig(810, y + 110, C.cream);
    s += `<rect x="694" y="${y + 92}" width="12" height="100" rx="4" fill="${C.tealDark}"/>`;
    s += path(`M548,${y + 112} Q620,${y + 50} 696,${y + 86}`, { stroke: C.tealDark, w: 3.5, extra: 'marker-end="url(#ahT)"' });
    s += arrow(788, y + 145, 714, y + 145, { color: C.rust, marker: 'ahR', w: 3, dash: '7 6' });
    s += T(630, y + 210, 'individual', { size: 15, anchor: 'middle', fill: C.muted }) + T(810, y + 210, 'private person', { size: 15, anchor: 'middle', fill: C.muted }) + T(520, y + 210, 'many rights', { size: 15, anchor: 'middle', fill: C.muted });
    return { s, h: H };
  },
  (y) => row(y, [
    { kicker: 'ARTICLE 8', title: 'X and Y v Netherlands (1985)', body: 'A gap in Dutch criminal law meant no prosecution for a sexual assault: breach for failing to provide effective protection.' },
    { kicker: 'ARTICLE 2', title: 'Osman v UK (1998)', body: 'Protect from a real and immediate risk to life the authorities knew or ought to have known about; investigate deaths.' },
    { kicker: 'ARTICLE 11', title: 'Counter-protesters', body: 'The state may need to protect a lawful demonstration from violent counter-protesters.' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 17, pad: 16, bfill: C.ink } }),
],
'Two panels. Negative obligation: the state must not interfere with an individual’s right without justification. Positive obligation: the state must step in to protect an individual, including against a private person. Examples: X and Y v Netherlands (Article 8), Osman v UK (Article 2) and protecting a lawful demonstration from counter-protesters (Article 11).',
'Every right restrains the state; many also require it to protect people from others.', H2.pr);

// 04 Interpretation principles
F('04-interpretation-principles', 'How the European Court reads the Convention', '', [
  (y) => grid(y, [
    { kicker: 'LIVING INSTRUMENT', title: 'Tyrer v UK (1978)', body: 'Birching a juvenile on the Isle of Man was degrading; read “in the light of present-day conditions”.', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'PRACTICAL AND EFFECTIVE', title: 'Airey v Ireland (1979)', body: 'Not “theoretical or illusory”: a woman who could not afford a lawyer for judicial separation had no real access to court.', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'AUTONOMOUS MEANING', title: 'Engel v Netherlands (1976)', body: 'Words such as “criminal charge” have a Convention meaning, whatever label a state uses.' },
    { kicker: 'MARGIN OF APPRECIATION', title: 'Some discretion for states', body: 'Wider on moral or social questions; narrower where an especially important right is at stake.' },
  ], 2, { gap: 16, vgap: 14, vcenter: false, card: { size: 16, tsize: 18, pad: 18, bfill: C.ink } }),
  (y) => note(y, 'Proportionality', 'Any restriction must go no further than needed to meet its aim.', { size: 17, align: 'middle' }),
],
'Five interpretation principles: living instrument (Tyrer v UK, birching), practical and effective rights (Airey v Ireland, access to court), autonomous meaning (Engel v Netherlands, “criminal charge”), the margin of appreciation, and proportionality.',
'The Convention is read as a living, practical document with its own meanings.', H2.pr);

// 05 Vertical and horizontal effect + Article 14
F('05-vertical-horizontal', 'Vertical and horizontal effect', '', [
  (y) => {
    const H = 300; let s = panel(30, y, 840, H);
    const box = (x, yy, w, lab, fill) => `<rect x="${x}" y="${yy}" width="${w}" height="54" rx="12" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x + w / 2, yy + 34, lab, { size: 18, weight: 700, anchor: 'middle' });
    // vertical
    s += T(200, y + 38, 'VERTICAL', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
    s += box(90, y + 60, 220, 'State / public authority', C.mustard) + box(90, y + 210, 220, 'Individual', C.tealLight);
    s += arrow(200, y + 210, 200, y + 122, { color: C.tealDark, marker: 'ahT', w: 4 }) + T(214, y + 170, 'HRA s6', { size: 16, weight: 700, fill: C.tealDark });
    s += `<line x1="400" y1="${y + 30}" x2="400" y2="${y + H - 30}" stroke="${C.panelEdge}" stroke-width="2.5"/>`;
    // indirect horizontal
    s += T(640, y + 38, 'INDIRECT HORIZONTAL', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
    s += box(500, y + 60, 280, 'Court (a public authority)', C.mustard);
    s += box(440, y + 210, 170, 'Model', C.tealLight) + box(680, y + 210, 170, 'Newspaper', C.cream);
    s += arrow(612, y + 237, 676, y + 237, { w: 3 }) + arrow(678, y + 237, 614, y + 237, { w: 3 });
    s += arrow(640, y + 122, 525, y + 204, { color: C.olive, marker: 'ahO', w: 3 }) + arrow(640, y + 122, 765, y + 204, { color: C.olive, marker: 'ahO', w: 3 });
    s += T(640, y + 188, 'develops the law', { size: 15, anchor: 'middle', fill: C.olive, weight: 600 });
    return { s, h: H };
  },
  (y) => row(y, [
    { kicker: 'CAMPBELL v MGN (2004)', body: 'The House of Lords developed misuse of private information between a model and a newspaper by balancing Articles 8 and 10.', fill: C.cream, edge: C.olive },
    { kicker: 'ARTICLE 14: NOT FREE-STANDING', kfill: C.rust, body: 'Discrimination must be argued with another Article: *A v Home Secretary* (2004), detaining foreign nationals only, Article 14 with Article 5.' },
  ], { gap: 16, vcenter: false, card: { size: 16, pad: 18, bfill: C.ink } }),
],
'Left: vertical effect, where an individual relies on Convention rights against the state or a public authority under HRA section 6. Right: indirect horizontal effect, where a court, itself a public authority, develops the law between private parties such as a model and a newspaper (Campbell v MGN). Article 14 on discrimination must be argued with another Article (A v Home Secretary, with Article 5).',
'Rights bind the state directly and reach private disputes through the courts.', H2.pr);

// 06 Six-step method
F('06-six-step-method', 'A method for any human rights problem', 'Repeat for each right the facts raise', [
  (y) => steps(y, [
    { title: 'Identify the right and the Article', body: 'Death, detention, surveillance, a ban on speech, a ban on a march' },
    { title: 'Classify it: limited or qualified', body: 'This tells you which test to apply' },
    { title: 'Is the right engaged?', body: 'A deprivation of liberty? A reasonable expectation of privacy?' },
    { title: 'Interference, or failure to protect?', body: 'Name the public authority, or the positive obligation in issue' },
    { title: 'Is it justified?', body: 'Listed exceptions for a limited right; three-part test for a qualified right' },
    { title: 'Enforcement and remedy', body: 'Who can claim, in which court, and what they can obtain' },
  ], { size: 16, tsize: 19, highlight: 4, gap: 10 }),
],
'Six numbered steps: identify the right and Article; classify it as limited or qualified; ask whether it is engaged; identify the interference or failure to protect; test justification by the listed exceptions or the three-part test; then enforcement and remedy.',
'Identify, classify, engaged, interference, justified, remedy.', H2.method);

// 07 Worked example: Sam
F('07-worked-example-sam', 'Worked example: Sam, the anti-war organiser', '', [
  (y) => {
    const r = grid(y, [
      { kicker: 'PHONE CALLS INTERCEPTED', title: 'Article 8: qualified', body: 'Interference. A vague local by-law power may not be “in accordance with the law” (accessible, foreseeable rules); if not, the analysis stops there.' },
      { kicker: 'MARCH BANNED; ARRESTED FOR SPEAKING', title: 'Articles 10 and 11: qualified', body: 'Aim: preventing disorder. A total ban on a peaceful group needs strong evidence; conditions on route or time are less restrictive.' },
      { kicker: 'HELD 40 HOURS BEFORE A JUDGE', title: 'Article 5: limited', body: 'Arrest needs a 5.1(c) ground (reasonable suspicion) and prompt appearance before a judge (5.3).', fill: C.tealLight, edge: C.tealDark },
      { kicker: 'REMEDY', title: 'Human Rights Act 1998', body: 'Police are a public authority (s6); Sam is a victim (s7); damages or a declaration (s8).', fill: C.cream, edge: C.olive },
    ], 2, { gap: 16, vgap: 14, vcenter: false, card: { size: 16, tsize: 18, pad: 18, bfill: C.ink } });
    return r;
  },
],
'Sam’s facts mapped to rights. Intercepting his calls engages Article 8, where a vague by-law may fail “in accordance with the law”. Banning the march and arresting him engage Articles 10 and 11, where a total ban is hard to justify. Holding him 40 hours engages Article 5, needing a 5.1(c) ground and prompt appearance under 5.3. Remedy under HRA sections 6 to 8.',
'Each fact engages its own Article, and each Article has its own test.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
