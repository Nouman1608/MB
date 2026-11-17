import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-law-7162-occupiers-liability';
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
  s1: '## Step 1: who is the occupier?',
  s3: '## Step 3: is the claimant a visitor or a trespasser?',
  s4: '## Step 4: the 1957 Act duty to visitors',
  s5: '## Step 5: the 1984 Act duty to trespassers',
  we: '## Worked problem',
};
const AR = (x1, y1, x2, y2, o) => arrow(x1, y1, x2, y2, { w: 3.5, ...o });

// 01 Five-step route
F('01-five-step-route', 'Occupiers’ liability in five steps', 'Work through them in the order you meet them in a problem', [
  (y) => steps(y, [
    { kicker: 'STEP 1', title: 'Who is the occupier?', body: 'Control of the premises (*Wheat v Lacon*, 1966): the brewery **and** the manager were both occupiers' },
    { kicker: 'STEP 2', title: 'Are these premises?', body: 'Land, buildings and any fixed or movable structure, including vessels, vehicles, aircraft (s1(3)(a)): ladders, scaffolding, lifts' },
    { kicker: 'STEP 3', title: 'Visitor or trespasser, at the moment of injury?', body: 'Express or implied permission, or none', fill: C.cream },
  ], { size: 16, tsize: 18, gap: 10, pad: 14, highlight: 2 }),
  (y) => ({ s: AR(330, y - 6, 230, y + 24) + AR(570, y - 6, 670, y + 24) + T(214, y + 16, 'visitor', { size: 16, weight: 700, fill: C.tealDark, anchor: 'end' }) + T(686, y + 16, 'trespasser', { size: 16, weight: 700, fill: C.rust }), h: 22 }),
  (y) => row(y, [
    { kicker: 'STEP 4: 1957 ACT', title: 'Common duty of care (s2(2))', body: 'Make the visitor reasonably safe. Personal injury **and** property damage', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'STEP 5: 1984 ACT', title: 'Duty only if s1(3) is met', body: 'Take reasonable care against injury from the danger. Personal injury **only** (s1(8))', edge: C.rust, kfill: C.rust },
  ], { gap: 20, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink } }),
],
'Five steps: identify the occupier by control (Wheat v Lacon, where brewery and manager were both occupiers); check the premises, including movable structures; classify the claimant as visitor or trespasser at the moment of injury; then apply the 1957 Act common duty of care to visitors, covering injury and property, or the 1984 Act to trespassers, covering personal injury only if the s1(3) conditions are met.',
'Occupier, premises, status, then the right Act.', H2.s1, { gap: 14 });

// 02 Permission and its limits
F('02-visitor-to-trespasser', 'When does a visitor become a trespasser?', 'Permission is limited by area, time and purpose', [
  (y) => row(y, [
    { kicker: 'IMPLIED PERMISSION', body: '*Lowery v Walker* (1911): years of crossing a field as a short cut without objection made the claimant a licensee', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'LEGAL RIGHT', body: 'Entering under a legal right, such as police with a warrant: treated as visitors (s2(6))', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 18, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } }),
  (y) => {
    const r = row(y, [{ title: 'Area' }, { title: 'Time' }, { title: 'Purpose' }], { x: 200, w: 500, gap: 14, card: { tsize: 19, pad: 14, align: 'middle', fill: C.cream, edge: C.olive } });
    return { s: T(30, y + 30, 'Exceed', { size: 19, weight: 700, fill: C.rust }) + T(30, y + 52, 'any limit:', { size: 17, fill: C.rust }) + r.s + T(870, y + 30, 'trespasser', { size: 19, weight: 700, anchor: 'end', fill: C.rust }) + T(870, y + 52, 'from then', { size: 17, anchor: 'end', fill: C.rust }), h: r.h };
  },
  (y) => note(y, 'The Calgarth (1927), Scrutton LJ', '“When you invite a person into your house to use the staircase, you do not invite him to slide down the banisters.”', { size: 17 }),
  (y) => card(30, y, 840, { kicker: 'TOMLINSON v CONGLETON BC (2003)', body: 'A lawful visitor to a park became a **trespasser** when he dived into a lake where swimming was prohibited: classify at the moment of injury.', size: 16, pad: 16, bfill: C.ink, kfill: C.rust, edge: C.rust }),
],
'Permission can be implied by long acquiescence (Lowery v Walker), and those entering under a legal right are visitors (s2(6)). Permission is limited by area, time and purpose; exceeding any limit makes a visitor a trespasser, as Scrutton LJ’s banisters remark in The Calgarth shows. In Tomlinson a park visitor became a trespasser by diving into a lake where swimming was banned.',
'Status is fixed at the moment of injury, and permission has limits.', H2.s3, { gap: 18 });

// 03 1957 duty: children, specialists, warnings
F('03-1957-duty-factors', 'The 1957 Act: who the duty is owed to shapes it', 's2(2): the visitor reasonably safe, not the premises perfectly safe', [
  (y) => {
    const r = row(y + 46, [
      { kicker: '✓ LIABLE', body: '*Glasgow Corporation v Taylor* (1922): poisonous berries an “allurement” to a seven-year-old', fill: C.tealLight, edge: C.tealDark },
      { kicker: '✓ LIABLE', body: '*Jolley v Sutton LBC* (2000): boys jacking up an abandoned boat: type of risk foreseeable', fill: C.tealLight, edge: C.tealDark },
      { kicker: '✗ NOT LIABLE', body: '*Phipps v Rochester* (1955): five-year-old in a trench: parents expected to accompany', kfill: C.rust },
    ], { x: 46, w: 808, gap: 12, vcenter: false, card: { size: 15, pad: 13, bfill: C.ink } });
    const H = 46 + r.h + 16;
    return { s: `<rect x="30" y="${y}" width="840" height="${H}" rx="14" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2.5"/>` + T(50, y + 30, 'CHILDREN, s2(3)(a): BE PREPARED FOR THEM TO BE LESS CAREFUL', { size: 15, weight: 700, fill: C.tealDark }) + r.s, h: H };
  },
  (y) => row(y, [
    { kicker: 'SPECIALISTS, s2(3)(b)', body: 'Expected to guard against risks of their calling. *Roles v Nathan* (1963): chimney sweeps who ignored warnings. Not a rotten floorboard for an electrician' },
    { kicker: 'WARNINGS, s2(4)(a)', body: 'Must enable the visitor to be reasonably safe. Obvious dangers need none: *Staples v West Dorset* (1995), algae on a sea wall; *Darby v National Trust* (2001), a pond', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { gap: 16, vcenter: false, card: { size: 15, pad: 16, bfill: C.ink } }),
],
'The common duty of care adjusts to the visitor. Children: occupiers must expect less care, so Glasgow Corporation v Taylor and Jolley v Sutton found liability, but in Phipps parents were expected to accompany a five-year-old. Specialists guard against risks of their calling (Roles v Nathan). Warnings must enable safety, and obvious dangers need none (Staples; Darby).',
'Expect more from occupiers towards children, less towards specialists and obvious risks.', H2.s4, { gap: 18 });

// 04 Independent contractors
F('04-independent-contractors', 'Faulty work by an independent contractor: s2(4)(b)', '', [
  (y) => steps(y, [
    { title: 'Was it reasonable to entrust the work to a contractor?' },
    { title: 'Did the occupier take reasonable steps to check the contractor was competent?' },
    { title: 'Where the work allows, did the occupier check it had been properly done?' },
  ], { size: 16, tsize: 18, gap: 10, pad: 16 }),
  (y) => ({ s: T(450, y + 4, 'All yes: occupier not liable for the contractor’s faulty work', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark }), h: 6 }),
  (y) => row(y, [
    { kicker: 'HASELDINE v DAW (1941)', title: 'Not liable', body: 'Lift negligently repaired by specialists: occupier could not check technical work', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'WOODWARD (1945)', title: 'Liable', body: 'Cleaner left a step icy: checking needed no expertise', edge: C.rust, kfill: C.rust },
    { kicker: 'BOTTOMLEY (2003)', title: 'Liable', body: 'Amateur fireworks team hired without checking insurance or competence', edge: C.rust, kfill: C.rust },
  ], { gap: 12, vcenter: false, card: { size: 15, tsize: 18, pad: 14, bfill: C.ink } }),
],
'Three checks under s2(4)(b): reasonable to entrust the work, reasonable steps to check competence, and where possible a check that the work was done properly. Haseldine v Daw: not liable for a specialist lift repair. Woodward v Hastings: liable for an icy step anyone could check. Bottomley v Todmorden: liable for hiring an unchecked amateur fireworks team.',
'Technical work can be left to experts; simple work and unchecked hires cannot.', H2.s4, { gap: 18 });

// 05 1984 Act conditions
F('05-1984-act-conditions', 'The 1984 Act: does a duty to the trespasser arise?', 'All three s1(3) conditions; replaced Herrington’s “common duty of humanity”', [
  (y) => {
    const conds = [
      ['s1(3)(a)', 'Aware of the danger, or reasonable grounds to believe it exists', '✗ *Rhind v Astbury Water Park* (2004): hidden container unknown'],
      ['s1(3)(b)', 'Knows or has reasonable grounds to believe the trespasser is or may come into the vicinity', '✗ *Donoghue v Folkestone Properties* (2003): midnight swim in winter'],
      ['s1(3)(c)', 'A risk the occupier may reasonably be expected to protect against', '✗ *Ratcliff* (1999); *Tomlinson* (2003): obvious risks adults choose. *Keown* (2006): danger from what he chose to do'],
    ];
    let s = '', cy = y;
    conds.forEach(([k, t1, c1], i) => {
      const a = card(150, cy, 420, { title: t1, size: 15, tsize: 17, pad: 14, minH: 80, vcenter: true, fill: C.tealLight, edge: C.tealDark });
      const b = card(586, cy, 284, { body: c1, size: 15, pad: 13, bfill: C.ink, minH: a.h, vcenter: true });
      const h = Math.max(a.h, b.h);
      s += `<rect x="30" y="${cy}" width="106" height="${h}" rx="12" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + T(83, cy + h / 2 + 7, k, { size: 18, weight: 700, anchor: 'middle' });
      s += card(150, cy, 420, { title: t1, size: 15, tsize: 17, pad: 14, minH: h, vcenter: true, fill: C.tealLight, edge: C.tealDark }).s + card(586, cy, 284, { body: c1, size: 15, pad: 13, bfill: C.ink, minH: h, vcenter: true }).s;
      cy += h + 10;
    });
    return { s, h: cy - y - 10 };
  },
  (y) => ({ s: AR(450, y - 14, 450, y + 4), h: 0 }),
  (y) => row(y, [
    { kicker: 'CONTENT, s1(4)', body: 'Reasonable care to see the trespasser is not injured by the danger' },
    { kicker: 'WARNINGS, s1(5)', body: 'Reasonable steps to warn or discourage can discharge it' },
    { kicker: 'DAMAGE, s1(8)', body: 'Personal injury only: **no property damage**', kfill: C.rust, edge: C.rust },
  ], { gap: 12, vcenter: false, card: { size: 15, pad: 14, bfill: C.ink } }),
],
'Three conditions under s1(3), each with a case where it failed: awareness of the danger (Rhind v Astbury Water Park), knowledge that the trespasser may be in the vicinity (Donoghue v Folkestone Properties), and a risk the occupier can reasonably be expected to protect against (Ratcliff; Tomlinson; Keown). If met, the duty under s1(4) can be discharged by warnings (s1(5)) and covers personal injury only (s1(8)).',
'No duty unless all three conditions are met; even then, no property damage.', H2.s5, { gap: 20 });

// 06 Ivy worked problem
F('06-ivy-worked-problem', 'Worked problem: Ivy’s flooded quarry', 'Rob, 15, swims and is injured by a submerged trolley; his phone is ruined', [
  (y) => {
    const rows = [
      ['Occupier', 'Ivy controls the quarry (*Wheat v Lacon*)', 1],
      ['Status', 'No permission: trespasser, so the 1984 Act', 1],
      ['s1(3)(a)', 'She knew of the dumped trolley', 1],
      ['s1(3)(b)', 'She knew teenagers came to swim', 1],
      ['s1(3)(c)', 'A hidden hazard, not an obvious risk like deep water (contrast *Tomlinson*); cheap to remove', 1],
      ['Breach', 'One small sign may not be enough warning under s1(5)', 1],
      ['Damage', 'Injury recoverable; **the phone is not** (s1(8))', 2],
      ['Defence', 'Contributory negligence may reduce damages', 3],
    ];
    let s = '', cy = y;
    rows.forEach(([k, v, st]) => {
      const c = card(196, cy, 590, { body: v, size: 16, pad: 11, bfill: C.ink, minH: 48, vcenter: true });
      s += `<rect x="30" y="${cy}" width="152" height="${c.h}" rx="12" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + T(106, cy + c.h / 2 + 6, k, { size: 17, weight: 700, anchor: 'middle' }) + c.s;
      const col = st === 1 ? C.tealDark : st === 2 ? C.olive : C.rust, sym = st === 1 ? '✓' : st === 2 ? 'part' : '−';
      s += `<circle cx="828" cy="${cy + c.h / 2}" r="20" fill="${st === 1 ? C.tealLight : st === 2 ? C.cream : C.panel}" stroke="${col}" stroke-width="2.5"/>` + T(828, cy + c.h / 2 + (st === 2 ? 5 : 7), sym, { size: st === 2 ? 15 : 20, weight: 700, anchor: 'middle', fill: col });
      cy += c.h + 7;
    });
    return { s, h: cy - y - 7 };
  },
],
'A checklist for Ivy’s quarry: Ivy is the occupier; Rob is a trespasser under the 1984 Act; she knew of the trolley and that teenagers swam there; a hidden hazard is one she could be expected to protect against; one small sign may not be enough. Rob recovers for injury but not for his phone (s1(8)); contributory negligence may reduce damages.',
'Status and the s1(3) conditions usually decide the claim.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
