import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-law-7162-fatal-offences-against-the-person';
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
  mur: '## Murder',
  vol: '## Voluntary manslaughter: the partial defences',
  inv: '## Involuntary manslaughter',
  we: '## Worked example',
};

// 01 Murder actus reus
F('01-murder-actus-reus', 'Murder: the actus reus', 'The unlawful killing of a reasonable creature in being under the King’s peace', [
  (y) => grid(y, [
    { kicker: 'REASONABLE CREATURE IN BEING', title: 'A human born alive', body: 'Not a foetus; but injury before birth, born alive, then death can be manslaughter (*A-G’s Ref (No 3 of 1994)*)' },
    { kicker: 'DEATH', title: 'Brain-stem death', body: 'Switching off life support afterwards does not break the chain (*Malcherek and Steel*, 1981)' },
    { kicker: 'UNLAWFUL', title: 'Not lawful self-defence', body: 'A killing in lawful self-defence is not murder' },
    { kicker: 'NO TIME LIMIT', title: '“Year and a day” rule abolished', body: 'Law Reform (Year and a Day Rule) Act 1996' },
  ], 2, { gap: 14, vcenter: false, card: { size: 16, tsize: 18 } }),
  (y) => card(30, y, 840, { kicker: 'CAUSATION', title: 'Factual (“but for”, R v White, 1910) and legal', body: 'Medical treatment: *Smith* (1959), *Cheshire* (1991); “palpably wrong” treatment: *Jordan* (1956). Thin skull: *Blaue* (1975). Foreseeable escape: *Roberts* (1971). Reasonable third-party acts: *Pagett* (1983).', size: 16, tsize: 18, fill: C.tealLight, edge: C.tealDark, bfill: C.ink }),
],
'The actus reus of murder: a reasonable creature in being, meaning a human born alive (A-G’s Reference No 3 of 1994); brain-stem death (Malcherek and Steel); an unlawful killing, not lawful self-defence; no time limit since the 1996 Act. Causation must be factual (White) and legal, with cases on medical treatment (Smith, Cheshire, Jordan), thin skull (Blaue), escape (Roberts) and third parties (Pagett).',
'A human being, killed unlawfully, with factual and legal causation.', H2.mur);

// 02 Malice aforethought
{
  const tree = (y) => {
    let s = '';
    const top = card(250, y, 400, { title: 'Malice aforethought', body: 'Express or implied', align: 'middle', tsize: 21, size: 16, fill: C.cream, edge: C.olive, bfill: C.ink });
    s += top.s;
    const y2 = y + top.h + 46;
    const L = card(30, y2, 405, { kicker: 'EXPRESS', title: 'Intention to kill', size: 16, tsize: 19, minH: 96, vcenter: true });
    const R = card(465, y2, 405, { kicker: 'IMPLIED', title: 'Intention to cause GBH', body: '*R v Vickers* (1957); *R v Cunningham* (1981)', size: 16, tsize: 19, minH: 96, vcenter: true });
    s += arrow(380, y + top.h + 4, 232, y2 - 6, { w: 3.5 }) + arrow(520, y + top.h + 4, 668, y2 - 6, { w: 3.5 }) + L.s + R.s;
    const y3 = y2 + Math.max(L.h, R.h) + 30;
    s += T(450, y3 + 10, 'Either intention may be…', { size: 18, weight: 700, anchor: 'middle' });
    const y4 = y3 + 30;
    const D = card(30, y4, 300, { kicker: 'DIRECT', title: 'The defendant’s aim or purpose', size: 16, tsize: 19, fill: C.tealLight, edge: C.tealDark, minH: 190, vcenter: true });
    const O = card(350, y4, 520, { kicker: 'OBLIQUE: NEDRICK (1986) AS MODIFIED BY WOOLLIN (1998)', title: 'Jury entitled to find intention where:', body: ['death or serious injury was a **virtual certainty** from the defendant’s actions, and', 'the defendant **appreciated** that this was the case', '*Matthews and Alleyne* (2003): a rule of evidence, not intention itself'], bullets: true, gap: 4, size: 16, tsize: 18, fill: C.tealLight, edge: C.tealDark, bfill: C.ink, minH: 190 });
    s += D.s + O.s;
    return { s, h: y4 + Math.max(D.h, O.h) - y };
  };
  F('02-malice-aforethought', 'The mens rea of murder', '', [tree],
    'Malice aforethought is either express, an intention to kill, or implied, an intention to cause GBH (Vickers; Cunningham). Either may be direct, the defendant’s aim, or oblique: under Nedrick as modified by Woollin, the jury is entitled to find intention where death or serious injury was a virtual certainty and the defendant appreciated it; Matthews and Alleyne treats this as a rule of evidence.',
    'Intent to kill or to cause GBH, found directly or from foresight of virtual certainty.', H2.mur);
}

// 03 Loss of control
F('03-loss-of-control', 'Loss of control: ss54–56 Coroners and Justice Act 2009', 'All three elements are required; murder becomes manslaughter', [
  (y) => steps(y, [
    { title: 'Loss of self-control (s54(1)(a))', body: 'Need not be sudden (s54(2)). Excluded for a **considered desire for revenge** (s54(4)); *R v Jewell* (2014): a planned shooting.' },
    { title: 'A qualifying trigger (s55)', body: '**Fear** of serious violence from the victim against D or another identified person (s55(3)), and/or **anger**: things done or said, extremely grave, giving a justifiable sense of being seriously wronged (s55(4)).' },
    { title: 'The normal person test (s54(1)(c))', body: 'A person of D’s sex and age, with normal tolerance and self-restraint, in D’s circumstances, might have reacted in the same or a similar way. Circumstances relevant only to general capacity for self-restraint are excluded (s54(3)).' },
  ], { size: 16, tsize: 19 }),
  (y) => row(y, [
    { kicker: 'EXCLUDED TRIGGERS: s55(6)', kfill: C.rust, title: 'Incited as an excuse for violence; sexual infidelity', body: '*R v Clinton* (2012): infidelity can still be context for other triggers', fill: C.cream, edge: C.rust },
    { kicker: 'BURDEN: s54(5)–(6)', title: 'Once there is sufficient evidence', body: 'The prosecution must disprove it beyond reasonable doubt', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, bfill: C.ink } }),
],
'Loss of control has three elements: a loss of self-control, which need not be sudden but excludes considered revenge (Jewell); a qualifying trigger of fear of serious violence or anger at extremely grave circumstances; and the normal person test. Triggers incited as an excuse and sexual infidelity are excluded, though Clinton allows infidelity as context. Once there is sufficient evidence, the prosecution must disprove the defence.',
'Lost control, a qualifying trigger, and a normal person might have done the same.', H2.vol);

// 04 Diminished responsibility
F('04-diminished-responsibility', 'Diminished responsibility: s2 Homicide Act 1957', 'As amended in 2009. D proves it on the balance of probabilities', [
  (y) => card(30, y, 840, { title: 'An abnormality of mental functioning which…', align: 'middle', tsize: 20, fill: C.cream, edge: C.olive }),
  (y) => row(y, [
    { kicker: '1', title: 'Arose from a recognised medical condition', body: 'Psychiatric or physical: depression, schizophrenia, alcohol dependency syndrome' },
    { kicker: '2', title: 'Substantially impaired his ability (s2(1A))', body: 'To understand his conduct, form a rational judgment or exercise self-control' },
    { kicker: '3', title: 'Provides an explanation (s2(1B))', body: 'Caused, or was a significant contributory factor in causing, his acts' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, fill: C.tealLight, edge: C.tealDark } }),
  (y) => grid(y, [
    { title: 'R v Golds (2016)', body: '“Substantially” means important or weighty, not merely more than trivial' },
    { title: 'R v Dowds (2012)', body: 'Voluntary acute intoxication is not a recognised medical condition' },
    { title: 'R v Dietschmann (2003)', body: 'Drunk plus an abnormality: did the abnormality impair him despite the drink?' },
    { title: 'R v Wood (2008)', body: 'Alcohol dependency syndrome can found the defence' },
  ], 2, { gap: 12, vcenter: false, card: { size: 16, tsize: 17, pad: 16 } }),
],
'Diminished responsibility requires an abnormality of mental functioning that arose from a recognised medical condition, substantially impaired the defendant’s ability to understand, judge rationally or exercise self-control, and provides an explanation for the acts. Cases: Golds (substantially means important or weighty), Dowds (voluntary intoxication is not a condition), Dietschmann (drink plus abnormality) and Wood (alcohol dependency syndrome).',
'A recognised condition that substantially impaired the defendant and explains the killing.', H2.vol);

// 05 Unlawful act manslaughter
F('05-unlawful-act-manslaughter', 'Unlawful act manslaughter', 'Involuntary manslaughter: no malice aforethought; maximum life', [
  (y) => steps(y, [
    { title: 'An unlawful act: a crime, not a civil wrong', body: '*Franklin* (1883); *Lamb* (1967): pointing a gun as a joke was no assault. Must be an act, not an omission (*Lowe*, 1973).' },
    { title: 'Dangerous, judged objectively', body: 'Sober and reasonable people would recognise a risk of some harm (*Church*, 1966), knowing what D knew or would have learned (*Dawson*, 1985; *Watson*, 1989). The harm need not be the harm that killed (*JM and SM*, 2012).' },
    { title: 'Causes death', body: 'Chain broken by the victim’s free, deliberate, informed act (*Kennedy (No 2)*, 2007); contrast *Cato* (1976), where D injected the victim.' },
    { title: 'Mens rea of the unlawful act only', body: 'No need to foresee harm (*DPP v Newbury and Jones*, 1977). The act need not be aimed at the victim (*Goodfellow*, 1986; *Mitchell*, 1983).' },
  ], { size: 16, tsize: 18 }),
],
'Four elements of unlawful act manslaughter: a criminal act, not an omission (Franklin, Lamb, Lowe); dangerous on the objective Church test, with the reasonable person knowing what the defendant knew (Dawson, Watson, JM and SM); causing death, with the chain broken by the victim’s free and informed act (Kennedy) but not in Cato; and only the mens rea of the unlawful act (Newbury and Jones), even if not aimed at the victim (Goodfellow, Mitchell).',
'A dangerous criminal act that causes death, with only the mens rea of that act.', H2.inv);

// 06 Gross negligence manslaughter
F('06-gross-negligence-manslaughter', 'Gross negligence manslaughter', 'R v Adomako (1995), building on R v Bateman (1925)', [
  (y) => row(y, [
    { kicker: '1', title: 'Duty of care', body: 'Even in an illegal enterprise (*Wacker*); or a dangerous state of affairs (*Evans*)' },
    { kicker: '2', title: 'Breach', body: 'of that duty' },
    { kicker: '3', title: 'Serious and obvious risk of death', body: 'Not serious injury (*Misra*); judged on information at the time (*Rose*)' },
    { kicker: '4', title: 'Causes death', body: '' },
    { kicker: '5', title: 'Gross', body: 'So bad as to amount to a crime', fill: C.cream, edge: C.olive },
  ], { gap: 10, vcenter: false, card: { size: 15, tsize: 17, pad: 14 } }),
  (y) => note(y, 'The jury’s question', 'Did the conduct show such disregard for the life and safety of others as to deserve criminal punishment?', { size: 17, align: 'middle' }),
],
'Five elements of gross negligence manslaughter from Adomako: a duty of care, which can arise in an illegal enterprise (Wacker) or from creating a dangerous situation (Evans); breach; a serious and obvious risk of death, not injury (Misra and Srivastava), judged on information at the time (Rose); causation of death; and negligence so gross as to be criminal. The jury asks whether the conduct deserves criminal punishment.',
'Duty, breach, obvious risk of death, causation, and negligence bad enough to be a crime.', H2.inv);

// 07 Worked example
F('07-kai-leo-worked-example', 'Worked example: one punch outside a pub', 'Test murder first, then the partial defence, then involuntary manslaughter', [
  (y) => card(30, y, 840, { kicker: 'FACTS', body: 'Kai and Leo argue outside a pub. Leo says Kai’s sister is a thief. Kai, furious, punches Leo once in the face. Leo falls, hits his head on the kerb and dies.', size: 17, bfill: C.ink, fill: C.tealLight, edge: C.tealDark }),
  (y) => steps(y, [
    { title: 'Murder? Unlikely', body: 'Kai caused death. But one punch suggests no intention to kill or to cause GBH; at most some harm (*Vickers* needs GBH).' },
    { title: 'Loss of control? Not needed', body: 'Only if murder is proved; an insult about a sister is unlikely to be “extremely grave” (s55(4)).' },
    { title: 'Unlawful act manslaughter? Likely', body: 'Battery (or s47) is the unlawful act; dangerous (*Church*); the fall is a foreseeable result; mens rea of battery present.' },
  ], { highlight: 2, size: 16, tsize: 19 }),
],
'Kai punches Leo once and Leo dies after hitting his head. Murder is unlikely because one punch shows no intention to kill or cause GBH. Loss of control is not needed, and an insult about a sister is unlikely to be extremely grave. Unlawful act manslaughter is likely: battery is a dangerous unlawful act that caused death.',
'Murder fails on mens rea; a single punch that kills is classic unlawful act manslaughter.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
