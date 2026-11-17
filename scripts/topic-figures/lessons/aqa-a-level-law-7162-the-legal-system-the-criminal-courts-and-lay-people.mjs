import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-law-7162-the-legal-system-the-criminal-courts-and-lay-people';
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
  cls: '## Classification of offences',
  app: '## The appeal system',
  sent: '## Criminal court powers and sentencing adults',
  mag: '## Magistrates',
  jury: '## Juries',
  eval: '## Evaluating juries',
};

// 01 Classification and route to trial
F('01-classification-route', 'Which court tries the case?', 'Every adult defendant first appears in the magistrates’ court', [
  (y) => card(250, y, 400, { title: 'First appearance: magistrates’ court', align: 'middle', fill: C.mustard, edge: C.ink, tsize: 19, pad: 16 }),
  (y) => {
    const r = row(y + 30, [
      { kicker: 'SUMMARY', title: 'Magistrates’ court only', body: 'Common assault and battery; most driving offences', fill: C.tealLight, edge: C.tealDark },
      { kicker: 'TRIABLE EITHER WAY', title: 'Magistrates’ or Crown Court', body: 'Theft; s47 and s20 OAPA 1861', fill: C.cream, edge: C.olive },
      { kicker: 'INDICTABLE ONLY', title: 'Sent straight to the Crown Court', body: 'Murder; manslaughter; robbery; s18', fill: C.panel },
    ], { gap: 16, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink } });
    const ar = r.xs.map((x, i) => arrow(450 + (i - 1) * 80, y - 18, x + r.ws[i] / 2, y + 26)).join('');
    return { s: ar + r.s, h: 30 + r.h };
  },
  (y) => {
    const ex = 30 + (840 - 32) / 3 + 16, ew = (840 - 32) / 3;
    const H = 250; let s = `<rect x="30" y="${y}" width="840" height="${H}" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
    s += arrow(ex + ew / 2, y - 18, ex + ew / 2, y + 2, { color: C.olive, marker: 'ahO' });
    s += T(50, y + 32, 'EITHER-WAY: PLEA BEFORE VENUE', { size: 15, weight: 700, fill: C.olive });
    const bx = (x, yy, w, lab, fill) => `<rect x="${x}" y="${yy}" width="${w}" height="52" rx="10" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>` + para(x + w / 2, yy + 22, lab, w - 20, { size: 16, weight: 700, anchor: 'middle', fill: C.ink, lh: 19 }).s;
    s += bx(60, y + 56, 250, 'Guilty plea', C.panel) + bx(60, y + 160, 250, 'Magistrates sentence, or commit to Crown Court', C.tealLight);
    s += arrow(185, y + 110, 185, y + 156);
    s += bx(360, y + 56, 230, 'Not-guilty plea', C.panel) + bx(360, y + 160, 230, 'Allocation: suitable for summary trial?', C.tealLight);
    s += arrow(475, y + 110, 475, y + 156);
    s += bx(640, y + 56, 210, 'Yes: defendant may still elect jury trial', C.mustard) + bx(640, y + 160, 210, 'No: Crown Court', C.panel);
    s += arrow(592, y + 175, 636, y + 92) + arrow(592, y + 192, 636, y + 188);
    return { s, h: H };
  },
],
'Every adult defendant first appears before magistrates. Summary offences (common assault, most driving offences) stay there; indictable-only offences (murder, manslaughter, robbery, s18) are sent to the Crown Court. For either-way offences (theft, s47, s20) the defendant indicates a plea: on a guilty plea magistrates sentence or commit for sentence; on a not-guilty plea, allocation decides suitability for summary trial, and even if accepted the defendant may elect jury trial.',
'The class of offence decides the court; either-way defendants can elect a jury.', H2.cls, { gap: 26 });

// 02 Two appeal routes
F('02-appeal-routes', 'Criminal appeals: two routes', 'Appeals follow the court of trial', [
  (y) => {
    const H = 470; let s = '';
    const bx = (x, yy, w, a, b, fill) => `<rect x="${x}" y="${yy}" width="${w}" height="64" rx="12" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x + w / 2, yy + (b ? 28 : 39), a, { size: 18, weight: 700, anchor: 'middle' }) + (b ? T(x + w / 2, yy + 51, b, { size: 15, anchor: 'middle' }) : '');
    // Supreme court on top centre
    s += bx(225, y, 450, 'Supreme Court', 'point of law of general public importance; permission', C.mustard);
    // left: magistrates
    s += T(225, y + 120, 'FROM THE MAGISTRATES’ COURT', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
    s += bx(30, y + 200, 200, 'Crown Court', 'rehearing; or sentence', C.tealLight) + bx(250, y + 200, 200, 'High Court', 'case stated: law only', C.tealLight);
    s += bx(90, y + 380, 300, 'Magistrates’ court', '', C.panel);
    s += arrow(170, y + 376, 130, y + 268) + arrow(310, y + 376, 350, y + 268);
    s += T(116, y + 330, 'defendant', { size: 15, anchor: 'end', fill: C.muted }) + T(362, y + 330, 'either side', { size: 15, fill: C.muted });
    s += arrow(350, y + 196, 330, y + 68);
    // right: crown court
    s += T(765, y + 120, 'FROM THE CROWN COURT', { size: 15, weight: 700, anchor: 'middle', fill: C.olive });
    s += bx(540, y + 200, 330, 'Court of Appeal (Criminal)', 'with leave; quash only if unsafe', C.cream);
    s += bx(555, y + 380, 300, 'Crown Court', '', C.panel);
    s += arrow(705, y + 376, 705, y + 268) + arrow(680, y + 196, 600, y + 68);
    s += `<line x1="470" y1="${y + 110}" x2="470" y2="${y + 450}" stroke="${C.panelEdge}" stroke-width="2.5" stroke-dasharray="8 6"/>`;
    return { s, h: H - 6 };
  },
  (y) => row(y, [
    { kicker: 'COURT OF APPEAL POWERS', body: 'Quash, order a retrial or dismiss. Unsafe test: s2 Criminal Appeal Act 1968, amended 1995. A sentence can be reduced, not increased.' },
    { kicker: 'HIGH COURT ON CASE STATED', body: 'A Divisional Court of the King’s Bench Division: confirm, reverse, vary, or send the case back.' },
  ], { gap: 16, vcenter: false, card: { size: 16, pad: 18, bfill: C.ink } }),
],
'Two appeal routes. From the magistrates’ court, the defendant may appeal to the Crown Court by rehearing or against sentence, and either side may appeal by case stated on law to the High Court, then to the Supreme Court. From the Crown Court, the defendant appeals with leave to the Court of Appeal (Criminal Division), which quashes only unsafe convictions, then to the Supreme Court on a point of law of general public importance.',
'Magistrates’ appeals go to the Crown Court or High Court; Crown Court appeals go to the Court of Appeal.', H2.app);

// 03 Prosecution rights and CCRC
F('03-prosecution-ccrc', 'After the verdict: prosecution rights and the CCRC', '', [
  (y) => grid(y, [
    { kicker: 'ATTORNEY GENERAL’S REFERENCE', title: 'Point of law after an acquittal', body: 'The acquittal still stands' },
    { kicker: 'ATTORNEY GENERAL’S REFERENCE', title: 'Unduly lenient sentence', body: 'Referred for review' },
    { kicker: 'PART 10 CRIMINAL JUSTICE ACT 2003', title: 'Retrial for a serious offence', body: '**New and compelling evidence**: *R v Dobson* (2011), the murder of Stephen Lawrence', fill: C.cream, edge: C.olive },
    { kicker: 'CRIMINAL APPEAL ACT 1995', title: 'Criminal Cases Review Commission', body: 'Can refer a case back to the appeal courts after normal appeals have failed', fill: C.tealLight, edge: C.tealDark },
  ], 2, { gap: 16, vgap: 14, vcenter: false, card: { size: 16, tsize: 18, pad: 18, bfill: C.ink } }),
],
'Four routes after the verdict. The Attorney General may refer a point of law after an acquittal, which still stands, or an unduly lenient sentence. Part 10 of the Criminal Justice Act 2003 allows a retrial for a serious offence on new and compelling evidence, as in R v Dobson. The Criminal Cases Review Commission can refer a case back after normal appeals fail.',
'The prosecution’s rights are narrow; the CCRC is the safety net for defendants.', H2.app);

// 04 Five purposes of sentencing
F('04-sentencing-purposes', 'Five purposes of sentencing', 'Section 57 Sentencing Act 2020: offenders aged 18 or over', [
  (y) => {
    const H = 380, cx = 450, cy = y + 190; let s = panel(30, y, 840, H);
    s += `<circle cx="${cx}" cy="${cy}" r="82" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + T(cx, cy - 4, 'The court', { size: 20, weight: 700, anchor: 'middle' }) + T(cx, cy + 20, 'must have regard to', { size: 15, anchor: 'middle' });
    const P = [['1', 'Punishment of offenders'], ['2', 'Reduction of crime, including by deterrence'], ['3', 'Reform and rehabilitation'], ['4', 'Protection of the public'], ['5', 'Reparation to persons affected']];
    const pos = [[cx, y + 54], [cx + 270, cy - 50], [cx + 200, cy + 130], [cx - 200, cy + 130], [cx - 270, cy - 50]];
    P.forEach(([n, lab], i) => {
      const [px, py] = pos[i], w = 230;
      const ang = Math.atan2(py - cy, px - cx), ex = cx + Math.cos(ang) * 86, ey = cy + Math.sin(ang) * 86;
      s += `<line x1="${ex}" y1="${ey}" x2="${px}" y2="${py}" stroke="${C.ink}" stroke-width="2.5"/>`;
      const c = card(px - w / 2, py - 32, w, { title: lab, tsize: 17, pad: 14, align: 'middle', fill: i === 2 ? C.tealLight : C.panel, edge: i === 2 ? C.tealDark : C.panelEdge, minH: 64, vcenter: true, indent: 0 });
      s += c.s + badge(px - w / 2 + 2, py - 30, 16, n, C.cream);
    });
    return { s, h: H };
  },
],
'Five purposes the court must have regard to when sentencing adults, under section 57 of the Sentencing Act 2020: punishment, reduction of crime including by deterrence, reform and rehabilitation, protection of the public, and reparation to persons affected by the offence.',
'Sentencing serves five purposes, which can pull in different directions.', H2.sent);

// 05 How sentence is decided
F('05-sentencing-steps', 'How the court reaches a sentence', 'Follow Sentencing Council guidelines unless contrary to the interests of justice', [
  (y) => steps(y, [
    { title: 'Assess culpability and harm', body: 'Finds the starting point and range' },
    { title: 'Adjust for aggravating factors', body: 'e.g. relevant previous convictions, offending on bail' },
    { title: 'Adjust for mitigating factors', body: 'e.g. genuine remorse, good character' },
    { title: 'Credit for a guilty plea', body: 'Up to one third at the first stage; less for later pleas' },
  ], { size: 16, tsize: 19, highlight: 3, gap: 10 }),
  (y) => {
    const lab = T(450, y + 18, 'TYPES OF SENTENCE', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
    const c = chips(y + 32, ['Immediate custody', 'Suspended sentence order', 'Community order (unpaid work, curfew, treatment)', 'Fine', 'Absolute or conditional discharge'], { size: 16, weight: 600, fill: C.panel });
    return { s: lab + c.s, h: 32 + c.h };
  },
  (y) => row(y, [
    { kicker: 'MAGISTRATES', body: 'Limited custodial powers set by statute (check the current limit); most fines unlimited since 2015' },
    { kicker: 'CROWN COURT', body: 'Any sentence up to the statutory maximum; murder: mandatory life with a minimum term' },
  ], { gap: 16, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } }),
],
'Four steps in sentencing: assess culpability and harm to find a starting point and range; adjust for aggravating factors such as previous convictions; adjust for mitigating factors such as remorse; give credit for a guilty plea of up to one third. Sentence types range from custody to discharges. Magistrates have limited custodial powers; the Crown Court can sentence up to the statutory maximum.',
'Culpability and harm set the starting point; factors and plea credit move it.', H2.sent);

// 06 Magistrates
F('06-magistrates', 'Magistrates', '', [
  (y) => row(y, [
    { kicker: 'LAY MAGISTRATES (JPs)', title: 'Unpaid volunteers', body: ['No legal qualification required', 'Sit as a bench of two or three', 'Advised by a qualified legal adviser'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'DISTRICT JUDGES (MAGISTRATES’ COURTS)', title: 'Paid, legally qualified', body: ['Sit alone'], bullets: true, fill: C.cream, edge: C.olive },
  ], { gap: 16, vcenter: false, card: { size: 16, tsize: 19, pad: 18, bfill: C.ink, gap: 4 } }),
  (y) => card(30, y, 840, { kicker: 'ROLE AND POWERS OF LAY MAGISTRATES', body: ['Try summary and either-way offences kept for summary trial: **verdict and sentence**', 'Preliminary matters in all cases: bail or remand, legal aid, allocation, sending to the Crown Court', 'Issue search and arrest warrants', 'Sit with a judge in the Crown Court on appeals from the magistrates’ court', 'Sit in the youth court after extra training'], bullets: true, gap: 4, size: 16, pad: 18, bfill: C.ink }),
  (y) => note(y, 'The legal adviser', 'Advises on law and procedure, but must not take part in deciding guilt or sentence.', { size: 16, align: 'middle' }),
],
'Lay magistrates are unpaid volunteers without legal qualifications who sit in benches of two or three; district judges (magistrates’ courts) are paid lawyers who sit alone. Lay magistrates try summary and either-way cases, handle preliminary matters such as bail and allocation, issue warrants, sit on Crown Court appeals and in the youth court. A legal adviser advises on law but takes no part in decisions.',
'Lay magistrates decide verdict and sentence, with a legal adviser on the law.', H2.mag);

// 07 Juries: judge v jury
F('07-judge-and-jury', 'Judge and jury in the Crown Court', '', [
  (y) => {
    const r = row(y, [
      { kicker: 'JURY OF 12', title: 'Decides the verdict', body: 'Guilty or not guilty', fill: C.tealLight, edge: C.tealDark },
      { kicker: 'JUDGE', title: 'Decides the law', body: ['Points of law and admissibility of evidence', 'Sums up; directs the jury on the law', 'Passes sentence', 'May direct an acquittal; **never** a conviction (*R v Wang*, 2005)'], bullets: true, fill: C.cream, edge: C.olive },
    ], { gap: 16, vcenter: false, fr: [1, 1.5], card: { size: 16, tsize: 19, pad: 18, bfill: C.ink, gap: 4 } });
    return r;
  },
  (y) => row(y, [
    { kicker: 'QUALIFICATION: JURIES ACT 1974', body: ['Aged 18 to 75', 'On the electoral register', 'Resident in the UK 5+ years since age 13', 'Some disqualified; some excused', 'Police, lawyers and judges can serve since 2003: bias questions in *Abdroikov* (2007), *Hanif and Khan v UK* (2011)'], bullets: true },
    { kicker: 'VERDICTS: s17 JURIES ACT 1974', body: ['Unanimous verdict asked for first', 'After at least two hours: majority of 11–1 or 10–2', 'Deliberations secret; researching the case or disclosing deliberations an offence since 2015'], bullets: true },
  ], { gap: 16, vcenter: false, card: { size: 16, pad: 18, bfill: C.ink, gap: 4 } }),
],
'In the Crown Court a jury of 12 decides guilty or not guilty, while the judge rules on law and evidence, sums up, directs the jury and sentences; the judge may direct an acquittal but never a conviction (R v Wang). Jurors must be 18 to 75, registered and resident for five years since 13. A unanimous verdict is sought first; after two hours a majority of 11–1 or 10–2 may be accepted.',
'The jury decides the facts and verdict; the judge decides the law and sentence.', H2.jury);

// 08 Evaluating juries
F('08-jury-evaluation', 'Evaluating juries', 'Weigh the points, then reach a judgement', [
  (y) => row(y, [
    { kicker: 'ADVANTAGES', body: ['**Public confidence:** citizens decide guilt in serious cases', '**Jury equity:** *Bushell’s Case* (1670)', '**Random selection:** a cross-section; not case-hardened', '**Open justice:** law explained in open court', '**Research:** Thomas (2010), no evidence of discrimination against ethnic minority defendants'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'DISADVANTAGES', kfill: C.rust, body: ['**Perverse verdicts:** *Ponting* (1985), *Kronlid* (1996)', '**Secrecy:** no reasons can be checked (*Mirza*, 2004)', '**Misconduct:** *Young* (1995) ouija board; *Fraill* (2011) internet', '**Media:** *Taylor and Taylor* (1993)', '**Bias:** *Sander v UK* (2000); some jurors misunderstood directions'], bullets: true, fill: C.panel, edge: C.rust },
  ], { gap: 16, vcenter: false, card: { size: 16, pad: 18, bfill: C.ink, gap: 6 } }),
  (y) => note(y, 'Exceptions already exist', 's44 Criminal Justice Act 2003: judge alone where there is a real danger of jury tampering, first used in *R v Twomey* (2009).', { size: 16, align: 'middle' }),
],
'Advantages and disadvantages of juries side by side, each with authority. For: public confidence, jury equity (Bushell’s Case), random selection, open justice and Thomas’s 2010 research. Against: perverse verdicts (Ponting, Kronlid), secrecy (Mirza), misconduct (Young, Fraill), media influence (Taylor and Taylor) and bias (Sander v UK). Section 44 CJA 2003 already allows judge-alone trials where there is a danger of tampering (Twomey).',
'Every advantage of juries has a matching risk; s44 shows the limits already accepted.', H2.eval);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
