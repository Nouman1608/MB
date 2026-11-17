import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-law-7162-necessity-defences';
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
  sd: '## Self-defence and prevention of crime',
  dur: '## Duress by threats',
  doc: '## Duress of circumstances',
  we: '## Worked example',
};
const AR = (x1, y1, x2, y2, o) => arrow(x1, y1, x2, y2, { w: 3.5, ...o });

// 01 Self-defence two questions
F('01-self-defence-questions', 'Self-defence: two questions for the jury', 'Common law; s3(1) Criminal Law Act 1967; s76 of the 2008 Act', [
  (y) => {
    const q1 = card(30, y, 520, { kicker: 'QUESTION 1', title: 'Was force necessary?', body: 'On the facts **as the defendant honestly believed them**, even if mistaken and unreasonable: *Williams (Gladstone)* (1984); *Beckford* (1988)', size: 16, tsize: 19, pad: 16, bfill: C.ink, fill: C.tealLight, edge: C.tealDark });
    const side = stack(y, [
      { kicker: 'NOT IF', body: 'Mistake from **voluntary intoxication**: *O’Grady*; *Hatton*', kfill: C.rust },
      { kicker: 'STILL NECESSARY', body: '**Pre-emptive** force (*Beckford*; A-G’s Ref No 2 of 1983). **No duty to retreat** (*Bird*)' },
    ], { x: 580, w: 290, gap: 10, card: { size: 15, pad: 13, bfill: C.ink } });
    return { s: q1.s + side.s + AR(554, y + q1.h / 2, 576, y + q1.h / 2, { w: 3 }), h: Math.max(q1.h, side.h) };
  },
  (y) => ({ s: AR(290, y - 16, 290, y + 4) + T(302, y - 2, 'yes', { size: 15, weight: 700, fill: C.tealDark }), h: 0 }),
  (y) => {
    const q2 = card(30, y, 520, { kicker: 'QUESTION 2', title: 'Was the degree of force reasonable?', body: 'Objective, but in the circumstances as he believed them (s76(3)). **Disproportionate force is not reasonable** (s76(6)). Heat of the moment allowed for (s76(7); *Palmer*)', size: 16, tsize: 19, pad: 16, bfill: C.ink, fill: C.cream, edge: C.olive, kfill: C.olive });
    const side = stack(y, [
      { kicker: 'HOUSEHOLDER, s76(5A)', body: 'Unreasonable only if **grossly** disproportionate (*Collins*, 2016)' },
      { kicker: 'CHARACTERISTICS IRRELEVANT', body: '*Martin (Anthony)* (2001); *Oye* (2013)' },
    ], { x: 580, w: 290, gap: 10, card: { size: 15, pad: 13, bfill: C.ink } });
    return { s: q2.s + side.s + AR(554, y + q2.h / 2, 576, y + q2.h / 2, { w: 3 }), h: Math.max(q2.h, side.h) };
  },
  (y) => ({ s: AR(160, y - 16, 160, y + 4) + AR(470, y - 16, 560, y + 4, { color: C.rust, marker: 'ahR' }) + T(172, y - 2, 'yes', { size: 15, weight: 700, fill: C.tealDark }) + T(458, y + 2, 'no to either', { size: 15, weight: 700, fill: C.rust, anchor: 'end' }), h: 0 }),
  (y) => row(y, [
    { title: 'Complete defence', body: 'Covers any offence of force, including murder', fill: C.tealLight, edge: C.tealDark },
    { title: 'No defence at all', body: '*Clegg* (1995): fourth shot at a car that had passed: murder. No partial defence for excessive force', edge: C.rust },
  ], { gap: 20, vcenter: false, card: { size: 16, tsize: 19, pad: 16, align: 'middle', bfill: C.ink } }),
],
'Question 1: was force necessary, judged on the facts as the defendant honestly believed them (Williams; Beckford), except where the mistake came from voluntary intoxication; pre-emptive force can be necessary and there is no duty to retreat. Question 2: was the degree of force reasonable, objectively but on the believed facts, with allowance for the heat of the moment; householders lose the defence only for grossly disproportionate force; characteristics are irrelevant. Both yes: a complete defence. Otherwise no defence (Clegg).',
'Necessity on the honest belief; reasonableness objectively; all or nothing.', H2.sd, { gap: 20 });

// 02 Proportionality: ordinary v householder
F('02-householder-force', 'How much force? Ordinary cases and householders', 's76(6) and s76(5A); R (Collins) v Secretary of State for Justice (2016)', [
  (y) => {
    const x0 = 230, W = 640, seg = W / 3;
    let s = '';
    ['Proportionate', 'Disproportionate', 'Grossly disproportionate'].forEach((l, i) => { s += `<rect x="${x0 + i * seg}" y="${y}" width="${seg}" height="54" fill="${[C.tealLight, C.cream, '#f3d9c9'][i]}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x0 + i * seg + seg / 2, y + 33, l, { size: 16, weight: 700, anchor: 'middle' }); });
    s += AR(x0, y + 74, x0 + W - 4, y + 74, { w: 3 }) + T(x0 + W / 2, y + 98, 'more force relative to the threat', { size: 15, anchor: 'middle', fill: C.muted });
    const cen = (cx, yy, H, txt, w, o) => { const h = para(0, 0, txt, w, o).h; return para(cx, yy + (H - h) / 2 + o.size * 0.8, txt, w, o).s; };
    const rowF = (yy, label, cells) => {
      const H = 84;
      let r = `<rect x="30" y="${yy}" width="186" height="${H}" rx="12" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2.5"/>` + cen(123, yy, H, label, 166, { size: 16, weight: 700, anchor: 'middle' });
      cells.forEach(([txt, ok], i) => { const col = ok === 1 ? C.tealDark : ok === 0 ? C.rust : C.olive; r += `<rect x="${x0 + i * seg + 6}" y="${yy}" width="${seg - 12}" height="${H}" rx="12" fill="${ok === 1 ? C.tealLight : ok === 0 ? C.panel : C.cream}" stroke="${col}" stroke-width="2.5"/>` + cen(x0 + i * seg + seg / 2, yy, H, txt, seg - 34, { size: 16, weight: 700, anchor: 'middle', fill: col }); });
      return r;
    };
    s += rowF(y + 120, 'Ordinary case', [['Reasonable', 1], ['Not reasonable', 0], ['Not reasonable', 0]]);
    s += rowF(y + 216, 'Householder v intruder in a dwelling', [['Reasonable', 1], ['May or may not be: all the circumstances', 2], ['Never reasonable', 0]]);
    return { s, h: 300 };
  },
  (y) => note(y, '', 'The householder rule applies only to an intruder **in a dwelling**; applying it elsewhere is a common mistake.', { size: 17, align: 'middle', fill: C.panel, edge: C.panelEdge }),
],
'A scale from proportionate to grossly disproportionate force. In an ordinary case only proportionate force is reasonable. For a householder defending against an intruder in a dwelling, proportionate force is reasonable, disproportionate force may or may not be depending on all the circumstances, and grossly disproportionate force is never reasonable (Collins).',
'Householders get extra latitude, but grossly disproportionate force is never reasonable.', H2.sd, { gap: 20 });

// 03 Duress: Graham test and the threat
F('03-duress-graham', 'Duress by threats: the Graham test', 'R v Graham (1982), approved in Howe (1987) and restated in Hasan (2005)', [
  (y) => row(y, [
    { kicker: 'STAGE 1: SUBJECTIVE, BUT REASONABLE', title: 'Compelled to act by a reasonably believed threat of death or serious injury?', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'STAGE 2: OBJECTIVE', title: 'Would a sober person of reasonable firmness, sharing his characteristics, have done the same?', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { arrows: true, gap: 40, vcenter: false, card: { tsize: 17, pad: 16 } }),
  (y) => {
    const head = T(30, y + 20, 'The threat must be', { size: 19, weight: 700 });
    const g = grid(y + 36, [
      { kicker: 'SERIOUS', body: 'Death or serious injury (*Hasan*); not property or exposure' },
      { kicker: 'AGAINST', body: 'Him, his family, or someone he reasonably regards as his responsibility (*Hasan*)' },
      { kicker: 'NOMINATING THE OFFENCE', body: 'To commit the particular offence: *Cole* (1994), debt threat, robbed a building society' },
      { kicker: 'IMMEDIATE', body: 'Immediate or almost immediate, no evasive action such as going to the police (*Hasan*, not *Hudson and Taylor*)' },
    ], 2, { gap: 14, vgap: 12, vcenter: false, card: { size: 15, pad: 14, bfill: C.ink } });
    return { s: head + g.s, h: 36 + g.h };
  },
  (y) => card(30, y, 840, { kicker: 'RELEVANT CHARACTERISTICS: R v BOWEN (1996)', body: '**Yes:** age, sex, pregnancy, serious physical disability, recognised mental illness. **No:** low IQ short of mental impairment; being unusually vulnerable to pressure.', size: 16, pad: 16, bfill: C.ink }),
],
'The Graham test has a subjective stage, a reasonably believed threat of death or serious injury, and an objective stage, whether a sober person of reasonable firmness sharing the defendant’s characteristics would have responded the same way. The threat must be of death or serious injury, against the defendant or someone he is responsible for, aimed at the particular offence (Cole), and immediate with no evasive action (Hasan). Bowen sets out relevant characteristics.',
'Two stages, plus strict requirements about the threat itself.', H2.dur, { gap: 20 });

// 04 When duress is unavailable
F('04-duress-barriers', 'Three ways duress is shut out', '', [
  (y) => row(y, [
    { kicker: 'BARRIER 1', title: 'Murder', body: 'No defence: *Howe* (1987), overruling *Lynch*. Even a 13-year-old under his father’s threats: *Wilson* (2007)', edge: C.rust, kfill: C.rust },
    { kicker: 'BARRIER 2', title: 'Attempted murder', body: 'No defence: *Gotts* (1992)', edge: C.rust, kfill: C.rust },
    { kicker: 'BARRIER 3', title: 'Self-induced duress', body: 'Voluntary association with people he foresaw, or ought to have foreseen, might threaten violence (*Hasan*)', edge: C.rust, kfill: C.rust },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 19, pad: 16, bfill: C.ink } }),
  (y) => {
    const head = T(670, y + 20, 'Barrier 3 in practice', { size: 18, weight: 700, anchor: 'middle' });
    const r = row(y + 36, [
      { kicker: '✗ SHARP (1987)', body: 'Joined a violent gang: defence fails', kfill: C.rust },
      { kicker: '✓ SHEPHERD (1987)', body: 'Group not known for violence: may not defeat it', fill: C.tealLight, edge: C.tealDark },
    ], { x: 462, w: 408, gap: 10, vcenter: false, card: { size: 15, pad: 14, bfill: C.ink } });
    const ev = card(30, y + 36, 420, { kicker: 'EVALUATION', body: 'Excluding murder protects the sanctity of life but can be harsh (*Wilson*). *Hasan* narrowed the defence to stop offenders exploiting it.', size: 15, pad: 14, bfill: C.ink, fill: C.cream, edge: C.olive, kfill: C.olive, minH: r.h });
    return { s: head + r.s + ev.s, h: 36 + Math.max(r.h, ev.h) };
  },
],
'Duress is unavailable for murder (Howe; Wilson), for attempted murder (Gotts), and where the defendant voluntarily associated with people he foresaw might threaten violence (Hasan): joining a violent gang defeats it (Sharp), a group not known for violence may not (Shepherd). Excluding murder protects life but can be harsh.',
'Check the offence and the defendant’s associations before applying the Graham test.', H2.dur, { gap: 20 });

// 05 Duress of circumstances
F('05-duress-of-circumstances', 'Duress of circumstances: a threat from the situation', 'Same Graham test and same exclusions for murder and attempted murder (Pommell)', [
  (y) => row(y, [
    { kicker: 'DURESS BY THREATS', title: 'A person demands that a crime be committed', body: 'e.g. Zac: drive to the bank or his girlfriend is shot', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'DURESS OF CIRCUMSTANCES', title: 'The situation creates the threat', body: 'Escaping a gang by driving on the pavement', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { gap: 18, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink } }),
  (y) => grid(y, [
    { kicker: 'WILLER (1986)', body: 'Drove on a pavement to escape a gang: defence recognised' },
    { kicker: 'CONWAY (1988)', body: 'Drove recklessly to escape men he believed would kill his passenger' },
    { kicker: 'MARTIN (COLIN) (1989)', body: 'Drove while disqualified: wife threatened suicide' },
    { kicker: 'POMMELL (1995)', body: 'Took a gun to stop someone shooting others: all crimes except murder, attempted murder, some treason' },
    { kicker: 'ABDUL-HUSSAIN (1999)', body: 'Hijacked a plane to escape execution: peril imminent, not necessarily immediate' },
    { kicker: 'DPP v BELL (1992)', body: 'Drove after drinking to escape: covered only while the threat continues', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], 3, { gap: 12, vgap: 12, vcenter: false, card: { size: 15, pad: 14, bfill: C.ink } }),
  (y) => note(y, 'Necessity and murder', '*R v Dudley and Stephens* (1884): shipwrecked sailors who killed and ate the cabin boy had no defence.', { size: 16 }),
],
'Duress by threats involves a person demanding a crime; duress of circumstances arises from the situation. Cases: Willer (pavement driving), Conway (reckless driving to save a passenger), Martin (Colin) (driving while disqualified), Pommell (all crimes except murder, attempted murder and some treason), Abdul-Hussain (imminent peril) and DPP v Bell (only while the threat continues). Dudley and Stephens: necessity is no defence to murder.',
'Who or what makes the threat decides which form of duress applies.', H2.doc, { gap: 20 });

// 06 Zac
F('06-zac-worked-example', 'Worked example: Zac drives through red lights', 'An armed man threatens to shoot Zac’s girlfriend unless Zac drives him to a bank', [
  (y) => {
    const rows = [
      ['Defence', 'Duress by threats: a person demands the offence', ''],
      ['Threat', 'Death of his girlfriend, someone he is responsible for', '*Hasan*'],
      ['Nominated', 'The threat is linked to the driving offence', '*Cole*'],
      ['Immediacy', 'Gun present; no realistic chance to go to the police', '*Hasan*'],
      ['Graham test', 'Reasonable belief; a sober person of reasonable firmness would do the same', '*Graham*'],
      ['Association', 'Never met the man: no voluntary association', '*Hasan*'],
      ['Offence', 'A driving offence, not murder', '*Howe*'],
    ];
    let s = '', cy = y;
    rows.forEach(([k, v, a]) => {
      const c = card(220, cy, 560, { body: v + (a ? ` (${a})` : ''), size: 16, pad: 12, bfill: C.ink, minH: 50, vcenter: true });
      s += `<rect x="30" y="${cy}" width="176" height="${c.h}" rx="12" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + T(118, cy + c.h / 2 + 6, k, { size: 17, weight: 700, anchor: 'middle' }) + c.s;
      s += `<circle cx="826" cy="${cy + c.h / 2}" r="20" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + T(826, cy + c.h / 2 + 7, '✓', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
      cy += c.h + 8;
    });
    return { s, h: cy - y - 8 };
  },
  (y) => note(y, 'Conclusion', 'Duress is likely to succeed: acquittal.', { size: 18 }),
],
'A checklist for Zac: duress by threats; a threat to kill his girlfriend (Hasan); linked to the driving offence (Cole); immediate, with no chance to go to the police; the Graham test met; no voluntary association; and a driving offence, not murder. Duress is likely to succeed.',
'Name the defence, then tick off each stage with an authority.', H2.we, { gap: 18 });

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
