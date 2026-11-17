import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-law-7162-capacity-defences';
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
  ins: '## Insanity',
  aut: '## Automatism',
  intox: '## Intoxication',
  cause: '## The cause decides the defence',
  we: '## Worked example',
  ev: '## Evaluation',
};

// 01 M'Naghten Rules
F('01-mnaghten-rules', 'Insanity: the M’Naghten Rules (1843)', 'Presumed sane: the defendant must prove all three, on the balance of probabilities', [
  (y) => steps(y, [
    { title: 'A defect of reason', body: 'Reasoning impaired, not merely unused. *R v Clarke* (1972): absent-mindedness from depression was not enough.' },
    { title: 'From a disease of the mind', body: 'A legal concept: an **internal** cause. Arteriosclerosis (*Kemp*), epilepsy (*Sullivan*), hyperglycaemia (*Hennessy*), sleepwalking (*Burgess*). *Bratty*: disorder manifested in violence and prone to recur.' },
    { title: 'So that he did not know…', body: 'the **nature and quality** of the act (what he was physically doing), **or** that it was **legally** wrong. *R v Windle* (1952): “I suppose they will hang me for this” showed he knew; insanity failed.' },
  ], { size: 16, tsize: 19 }),
  (y) => row(y, [
    { kicker: 'SPECIAL VERDICT', title: 'Not guilty by reason of insanity', fill: C.cream, edge: C.olive },
    { kicker: 'DISPOSAL: CRIMINAL PROCEDURE (INSANITY) ACT 1964', title: 'Hospital order (with or without restrictions), supervision order or absolute discharge', body: 'Murder: a hospital order with restrictions must be made where the conditions are met', fill: C.cream, edge: C.olive },
  ], { arrows: true, gap: 44, fr: [1, 2], card: { size: 16, tsize: 18, bfill: C.ink } }),
],
'The M’Naghten Rules in three parts: a defect of reason (not mere absent-mindedness, Clarke); from a disease of the mind, an internal cause such as arteriosclerosis, epilepsy, hyperglycaemia or sleepwalking; so that the defendant did not know the nature and quality of the act or that it was legally wrong (Windle). The verdict is not guilty by reason of insanity, followed by a hospital order, supervision order or absolute discharge.',
'Defect of reason, disease of the mind, and not knowing what or that it was wrong.', H2.ins);

// 02 Automatism and self-induced automatism
F('02-automatism-route', 'Automatism: requirements and self-induced cases', '', [
  (y) => row(y, [
    { kicker: 'REQUIREMENT 1', title: 'An external cause', body: 'A blow to the head; a reflex after a swarm of bees (*Hill v Baxter*); hypoglycaemia from insulin (*Quick*); PTSD after a rape (*R v T*)' },
    { kicker: 'REQUIREMENT 2', title: 'A total loss of voluntary control', body: '“Driving without awareness” with some control is not enough (*A-G’s Ref (No 2 of 1992)*; *Broome v Perkins*)' },
  ], { gap: 16, vcenter: false, card: { size: 16, tsize: 19, fill: C.tealLight, edge: C.tealDark } }),
  (y) => ({ s: T(450, y + 20, 'If the defendant caused his own automatic state:', { size: 19, weight: 700, anchor: 'middle' }), h: 24 }),
  (y) => grid(y, [
    { kicker: 'ALCOHOL OR ILLEGAL DRUGS', title: 'Intoxication rules apply instead', body: '*R v Lipman* (1970)', fill: C.cream, edge: C.olive },
    { kicker: 'SPECIFIC INTENT OFFENCE', title: 'Can be a defence', body: 'He lacks the intent' },
    { kicker: 'BASIC INTENT, KNEW THE RISK', kfill: C.rust, title: 'No defence: reckless', body: 'Knew skipping food after insulin could make him aggressive or unpredictable (*R v Bailey*, 1983)', fill: C.cream, edge: C.rust },
    { kicker: 'BASIC INTENT, DID NOT KNOW', title: 'May succeed', body: '*Bailey*; *R v Hardie* (1984): Valium, not known to cause unpredictability', fill: C.tealLight, edge: C.tealDark },
  ], 2, { gap: 14, vcenter: false, card: { size: 16, tsize: 18, bfill: C.ink } }),
],
'Automatism needs an external cause, such as a blow, a reflex (Hill v Baxter), hypoglycaemia from insulin (Quick) or PTSD after a rape (R v T), and a total loss of voluntary control (A-G’s Reference No 2 of 1992). If self-induced: alcohol or illegal drugs bring in the intoxication rules (Lipman); for specific intent it can be a defence; for basic intent it fails if the defendant knew the risk (Bailey) but may succeed if not (Hardie).',
'External cause and total loss of control; if self-induced, recklessness defeats it for basic intent.', H2.aut);

// 03 Intoxication tree
{
  const tree = (y) => {
    let s = '';
    const top = card(300, y, 300, { title: 'Was the intoxication voluntary?', align: 'middle', tsize: 20, fill: C.cream, edge: C.olive, pad: 16 });
    s += top.s;
    const y2 = y + top.h + 52;
    s += arrow(380, y + top.h + 4, 232, y2 - 6, { w: 3.5 }) + arrow(520, y + top.h + 4, 668, y2 - 6, { w: 3.5 });
    s += T(262, y + top.h + 18, 'yes', { size: 16, weight: 700, fill: C.tealDark, anchor: 'end' }) + T(640, y + top.h + 18, 'no: spiked drink, sedative', { size: 16, weight: 700, fill: C.tealDark });
    const L = stack(y2, [
      { kicker: 'SPECIFIC INTENT', title: 'Defence if no intent formed', body: 'Murder, s18, theft, robbery, attempt (*DPP v Beard*). Often convicted of a basic intent alternative', fill: C.tealLight, edge: C.tealDark },
      { kicker: 'BASIC INTENT', kfill: C.rust, title: 'No defence', body: 'Manslaughter, s20, s47, assault, battery: getting intoxicated is itself reckless (*DPP v Majewski*)', fill: C.cream, edge: C.rust },
      { kicker: 'DUTCH COURAGE', kfill: C.rust, title: 'Intent formed, then drinks', body: 'Guilty even of specific intent (*Gallagher*)', fill: C.cream, edge: C.rust },
    ], { x: 30, w: 405, gap: 12, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink } });
    const R = stack(y2, [
      { kicker: 'NO MENS REA FORMED', title: 'A defence to specific and basic intent', fill: C.tealLight, edge: C.tealDark },
      { kicker: 'MENS REA FORMED', kfill: C.rust, title: 'No defence', body: '“A drugged intent is still an intent” (*R v Kingston*, 1994)', fill: C.cream, edge: C.rust },
      { kicker: 'SEDATIVES TAKEN NORMALLY', title: 'Treated as involuntary', body: 'Unless he knew of the risk of unpredictable behaviour (*Hardie*)' },
    ], { x: 465, w: 405, gap: 12, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink } });
    s += L.s + R.s;
    return { s, h: y2 - y + Math.max(L.h, R.h) };
  };
  F('03-intoxication-tree', 'Intoxication: evidence of no mens rea', '', [tree,
    (y) => note(y, '', 'Underestimating a drink’s strength is still voluntary (*R v Allen*). Intoxicated mistakes cannot support self-defence (*O’Grady*; *Hatton*; s76(5) Criminal Justice and Immigration Act 2008).', { size: 16 })],
  'A decision tree. Voluntary intoxication: a defence to specific intent offences if no intent was formed (Beard); no defence to basic intent offences (Majewski); no defence after Dutch courage (Gallagher). Involuntary intoxication: a defence to any offence if no mens rea formed, but none if it was formed (Kingston); sedatives taken normally count as involuntary unless the risk was known (Hardie). Allen and the rule on intoxicated mistakes are noted below.',
  'Voluntary intoxication helps only with specific intent; involuntary only if no mens rea was formed.', H2.intox);
}

// 04 Two diabetics
F('04-two-diabetics', 'Two diabetics, two different defences', 'The cause of the blood-sugar problem decides the label', [
  (y) => row(y, [
    { kicker: 'HIGH BLOOD SUGAR', title: 'Hyperglycaemia: failing to take insulin', body: ['The diabetes itself: an **internal** cause', '*R v Hennessy* (1989)', '**Insanity**: special verdict and disposal'], fill: C.cream, edge: C.olive, gap: 6 },
    { kicker: 'LOW BLOOD SUGAR', title: 'Hypoglycaemia: insulin without enough food', body: ['The insulin: an **external** cause', '*R v Quick* (1973)', '**Automatism**: acquittal'], fill: C.tealLight, edge: C.tealDark, gap: 6 },
  ], { gap: 16, vcenter: false, card: { size: 17, tsize: 19, bfill: C.ink, bullets: true } }),
  (y) => note(y, 'Criticism', 'The legal definition labels diabetics and epileptics “insane”, stigmatises them and may discourage them from raising the defence.', { size: 17 }),
],
'Two panels. Hyperglycaemia from failing to take insulin has an internal cause, so it is insanity (Hennessy). Hypoglycaemia from taking insulin without eating enough has an external cause, so it is automatism and an acquittal (Quick). A note records the criticism that diabetics and epileptics are labelled insane.',
'High blood sugar is insanity; low blood sugar from insulin is automatism.', H2.ev);

// 05 Worked example
F('05-ria-worked-example', 'Worked example: Ria and the insulin', '', [
  (y) => card(30, y, 840, { kicker: 'FACTS', body: 'Ria, a diabetic, injects insulin and skips breakfast. At work she becomes confused and pushes a colleague down stairs, breaking his arm. She knew skipping meals after insulin could make her unpredictable.', size: 17, bfill: C.ink, fill: C.tealLight, edge: C.tealDark }),
  (y) => steps(y, [
    { title: 'Charge', body: 's20 GBH (broken arm): a basic intent offence.' },
    { title: 'Cause', body: 'Hypoglycaemia from insulin is external (*Quick*): automatism, not insanity (contrast *Hennessy*).' },
    { title: 'Control', body: 'Confused: was it a total loss of control (*A-G’s Ref No 2 of 1992*)? If only reduced, the defence fails anyway.' },
    { title: 'Self-induced', body: 'She knew the risk, so she was reckless (*Bailey*): no defence to basic intent.' },
    { title: 'Conclusion', body: 'Automatism is unlikely to succeed; she may be guilty of s20.' },
  ], { highlight: 4 }),
],
'Ria’s case in five steps: s20 is a basic intent offence; hypoglycaemia from insulin is an external cause, so automatism not insanity (Quick, contrast Hennessy); it must be a total loss of control; she knew the risk, so self-induced automatism is no defence (Bailey); so she may be guilty of s20.',
'Identify the cause, check total loss of control, then ask whether it was self-induced.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
