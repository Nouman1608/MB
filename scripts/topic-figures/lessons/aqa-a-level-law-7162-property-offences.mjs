import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-law-7162-property-offences';
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
  def: '## Theft: the definition',
  s3: '## Appropriation (s3)',
  s4: '## Property (s4)',
  s5: '## Belonging to another (s5)',
  s2: '## Dishonesty (s2 and *Ivey*)',
  s6: '## Intention to permanently deprive (s6)',
  s8: '## Robbery (s8)',
  we: '## Worked example',
};
const AR = (x1, y1, x2, y2, o) => arrow(x1, y1, x2, y2, { w: 3.5, ...o });

// 01 Appropriation
F('01-appropriation', 'Appropriation: any assumption of an owner’s rights', 's3(1) Theft Act 1968', [
  (y) => grid(y, [
    { kicker: 'ANY ONE RIGHT', body: '*R v Morris* (1984): switching supermarket price labels' },
    { kicker: 'CONSENT IRRELEVANT', body: '*Lawrence v MPC* (1972): taxi driver took too much from an open wallet. *R v Gomez* (1993): consent obtained by deception', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'EVEN A VALID GIFT', body: '*R v Hinks* (2000): large sums from a man of limited intelligence', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'OFFERING TO SELL', body: '*R v Pitham and Hehl* (1977): offering another’s property for sale' },
    { kicker: 'LATER ASSUMPTION', body: 'Finding a wallet, later deciding to keep it: appropriation at that moment' },
    { kicker: 'NOT: BONA FIDE PURCHASER, s3(2)', body: 'Paid in good faith for goods later found stolen: keeping them is not theft', kfill: C.rust, edge: C.rust },
  ], 2, { gap: 14, vgap: 12, vcenter: false, card: { size: 15, pad: 15, bfill: C.ink } }),
],
'Six points on appropriation: assuming any one right is enough (Morris); consent is irrelevant (Lawrence; Gomez); even a valid gift can be appropriated (Hinks); offering to sell is enough (Pitham and Hehl); keeping found property is a later appropriation; but a good-faith purchaser who keeps stolen goods does not steal (s3(2)).',
'After Gomez and Hinks, almost any dealing with property is an appropriation.', H2.s3);

// 02 Property
F('02-is-it-property', 'Is it property? s4', 'Money, real or personal property, things in action, intangibles', [
  (y) => row(y, [
    { kicker: '✓ PROPERTY', body: ['Money and personal property', '**Things in action**: a bank balance', '**Body parts** with skill applied (*Kelly and Lindsay*, 1998)'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: '✗ NOT PROPERTY', body: ['**Confidential information** (*Oxford v Moss*, 1979: an exam paper read and returned)', '**Electricity**: separate offence, s13 (*Low v Blease*, 1975)'], bullets: true, kfill: C.rust, edge: C.rust },
  ], { gap: 18, vcenter: false, card: { size: 16, pad: 18, bfill: C.ink, gap: 6 } }),
  (y) => {
    const head = T(30, y + 20, 'Only in some cases', { size: 19, weight: 700, fill: C.olive });
    const r = row(y + 36, [
      { kicker: 'LAND, s4(2)', body: 'Generally cannot be stolen, with exceptions' },
      { kicker: 'WILD PLANTS, s4(3)', body: 'Not stolen if picked for personal use; can be if picked for sale' },
      { kicker: 'WILD CREATURES, s4(4)', body: 'Only if tamed, kept in captivity or reduced into possession' },
    ], { gap: 12, vcenter: false, card: { size: 15, pad: 14, bfill: C.ink, fill: C.cream, edge: C.olive, kfill: C.olive } });
    return { s: head + r.s, h: 36 + r.h };
  },
],
'Property includes money, personal property, things in action such as a bank balance, and body parts with skill applied (Kelly and Lindsay). Confidential information (Oxford v Moss) and electricity (Low v Blease) are not property. Land, wild plants and wild creatures can be stolen only in limited cases under s4(2) to s4(4).',
'Most things are property; information and electricity are not.', H2.s4, { gap: 18 });

// 03 Belonging to another
F('03-belonging-to-another', 'Belonging to another: s5', 'Anyone with possession or control, or any proprietary right or interest', [
  (y) => grid(y, [
    { kicker: 'YOUR OWN PROPERTY', body: '*R v Turner (No 2)* (1971): took his own car from the garage that had repaired it' },
    { kicker: 'CONTROL WITHOUT KNOWLEDGE', body: '*R v Woodman* (1974): scrap metal on a sold site still controlled by the owner' },
    { kicker: 'NOT ABANDONED', body: '*Ricketts v Basildon* (2010): bags left outside a charity shop belonged to the charity' },
    { kicker: 'MISTAKE, s5(4)', body: 'Legal obligation to restore, e.g. overpaid wages: A-G’s Ref (No 1 of 1983)' },
  ], 2, { gap: 14, vgap: 12, vcenter: false, card: { size: 15, pad: 15, bfill: C.ink } }),
  (y) => {
    const head = T(450, y + 20, 's5(3): an obligation to deal with the property in a particular way?', { size: 18, weight: 700, anchor: 'middle' });
    const r = row(y + 36, [
      { kicker: 'YES: STILL BELONGS TO ANOTHER', body: '*Davidge v Bunnett* (1984): gas-bill money spent on herself', fill: C.tealLight, edge: C.tealDark },
      { kicker: 'NO: NOT THEFT', body: '*R v Hall* (1972): travel agent’s deposits, no duty to keep them separate', kfill: C.rust, edge: C.rust },
    ], { gap: 18, vcenter: false, card: { size: 15, pad: 15, bfill: C.ink } });
    return { s: head + r.s, h: 36 + r.h };
  },
],
'Property belongs to anyone with possession, control or a proprietary interest: an owner can steal from a repairer in possession (Turner), control can exist without knowledge (Woodman), donated bags are not abandoned (Ricketts), and mistaken payments with a duty to restore count (s5(4)). Under s5(3), money held for a purpose still belongs to another (Davidge v Bunnett), but not without such an obligation (Hall).',
'Possession or control is enough, even against the owner.', H2.s5, { gap: 20 });

// 04 Dishonesty
F('04-dishonesty', 'Dishonesty: check s2(1) first, then Ivey', '', [
  (y) => {
    const r = row(y + 50, [
      { kicker: 's2(1)(a)', body: 'Belief in a **legal right** to deprive (*Robinson*, 1977)' },
      { kicker: 's2(1)(b)', body: 'Belief the owner **would consent** if they knew' },
      { kicker: 's2(1)(c)', body: 'Belief the owner **cannot be discovered** by reasonable steps' },
    ], { x: 46, w: 808, gap: 12, vcenter: false, card: { size: 15, pad: 13, bfill: C.ink } });
    const H = 50 + r.h + 16;
    return { s: `<rect x="30" y="${y}" width="840" height="${H}" rx="14" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + T(50, y + 32, 'NOT DISHONEST IF HE HONESTLY BELIEVED (need not be reasonable):', { size: 16, weight: 700, fill: C.tealDark }) + r.s, h: H };
  },
  (y) => ({ s: AR(450, y - 16, 450, y + 4) + T(462, y - 2, 'none applies', { size: 15, weight: 700, fill: C.olive }), h: 0 }),
  (y) => row(y, [
    { kicker: 'IVEY STEP 1: SUBJECTIVE', title: 'What did he actually know or believe about the facts?', body: 'Need not be reasonable; reasonableness is evidence' },
    { kicker: 'IVEY STEP 2: OBJECTIVE', title: 'Dishonest by the standards of ordinary decent people?', body: 'Whether he realised it does not matter', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { arrows: true, gap: 40, vcenter: false, card: { size: 15, tsize: 17, pad: 16, bfill: C.ink } }),
  (y) => row(y, [
    { body: '*Ivey v Genting Casinos* (2017), confirmed in *Barton and Booth* (2020); replaced *Ghosh* (1982)' },
    { body: 's2(2): willingness to pay does not stop it being dishonest' },
  ], { gap: 16, card: { size: 15, pad: 14, bfill: C.ink, align: 'middle' } }),
],
'Dishonesty starts with s2(1): no dishonesty if the defendant honestly believed in a legal right (Robinson), in the owner’s consent, or that the owner could not be found. If none applies, the Ivey test asks what he actually believed, then whether that was dishonest by the standards of ordinary decent people. Ivey was confirmed in Barton and Booth and replaced Ghosh; willingness to pay does not prevent dishonesty.',
'Statutory beliefs first; then Ivey’s subjective facts and objective standard.', H2.s2, { gap: 20 });

// 05 Intention to permanently deprive
F('05-itpd', 'Intention to permanently deprive: s6', 'Including treating property “as his own to dispose of regardless of the other’s rights”', [
  (y) => grid(y, [
    { kicker: '✗ BORROWING', body: '*R v Lloyd* (1985): films copied and reels returned. Theft only if returned with “goodness, virtue and practical value” gone', kfill: C.rust, edge: C.rust },
    { kicker: '✓ DISPOSAL', body: '*DPP v Lavender* (1994): swapping council doors', fill: C.tealLight, edge: C.tealDark },
    { kicker: '✓ RANSOM', body: '*R v Raphael* (2008): demanding payment for a car’s return', fill: C.tealLight, edge: C.tealDark },
    { kicker: '✓ MONEY', body: '*R v Velumyl* (1989): intending to repay with different notes', fill: C.tealLight, edge: C.tealDark },
    { kicker: '✗ CONDITIONAL INTENTION', body: '*R v Easom* (1971): searched a handbag, took nothing', kfill: C.rust, edge: C.rust },
  ], 3, { gap: 12, vgap: 12, vcenter: false, card: { size: 15, pad: 14, bfill: C.ink } }),
],
'Cases on s6: borrowing is not theft unless the property’s value is gone (Lloyd); swapping council doors (Lavender), demanding payment for a car’s return (Raphael) and taking cash to repay with other notes (Velumyl) are intention to permanently deprive; searching a handbag and taking nothing is not (Easom).',
'Borrowing is not enough unless the thing comes back worthless.', H2.s6);

// 06 Robbery
F('06-robbery-timing', 'Robbery: theft plus force, at the right time', 's8(1): maximum life, indictable only', [
  (y) => {
    const x0 = 60, x1 = 840, yy = y + 70;
    let s = `<line x1="${x0}" y1="${yy}" x2="${x1}" y2="${yy}" stroke="${C.ink}" stroke-width="3"/>`;
    s += `<rect x="${x0}" y="${yy - 18}" width="500" height="36" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2"/>` + T(310, yy + 6, 'force before or at the time, in order to steal: ROBBERY', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
    s += `<rect x="560" y="${yy - 18}" width="${x1 - 560}" height="36" fill="${C.panel}" stroke="${C.rust}" stroke-width="2"/>` + T(700, yy + 6, 'theft over: not robbery', { size: 15, weight: 700, anchor: 'middle', fill: C.rust });
    s += `<line x1="400" y1="${y + 10}" x2="400" y2="${yy - 18}" stroke="${C.ink}" stroke-width="2.5"/>` + T(400, y + 2, 'appropriation: theft complete', { size: 15, weight: 700, anchor: 'middle' });
    s += path(`M400,${yy + 24} L400,${yy + 40} L560,${yy + 40} L560,${yy + 24}`, { stroke: C.olive, w: 2.5 }) + T(480, yy + 62, 'continuing appropriation', { size: 15, weight: 700, anchor: 'middle', fill: C.olive }) + T(480, yy + 82, '(Hale, 1979; Lockley, 1995)', { size: 15, anchor: 'middle', fill: C.olive });
    return { s, h: 170 };
  },
  (y) => grid(y, [
    { kicker: 'COMPLETED THEFT', body: 'No theft, no robbery (*Robinson*). Theft complete on appropriation: tugging a bag (*Corcoran v Anderton*, 1980)' },
    { kicker: 'FORCE', body: 'An ordinary word for the jury; a slight push can be enough (*Dawson and James*, 1976)' },
    { kicker: 'ON A PERSON', body: 'Through a bag if transmitted (*Clouden*, 1987); not snatching a cigarette without touching (*P v DPP*, 2012)' },
    { kicker: 'ANY PERSON, IN ORDER TO STEAL', body: 'Need not be the owner. Force for another reason, then a decision to steal, is not robbery' },
  ], 2, { gap: 14, vgap: 12, vcenter: false, card: { size: 15, pad: 15, bfill: C.ink } }),
],
'A timeline: force used immediately before or at the time of stealing, in order to steal, makes theft robbery; force after the theft is over does not, though appropriation can be continuing (Hale; Lockley). Elements: a completed theft (Robinson; Corcoran v Anderton), force as an ordinary word (Dawson and James), force on a person, possibly through a bag (Clouden; contrast P v DPP), on any person, in order to steal.',
'Robbery needs a completed theft and force tied to it in time and purpose.', H2.s8, { gap: 16 });

// 07 Mo
F('07-mo-worked-example', 'Worked example: Mo snatches Nina’s phone', 'He pushes her shoulder as he snatches it, and sells it the next day', [
  (y) => {
    const rows = [
      ['s3', 'Appropriation', 'Snatching: assuming the owner’s rights'],
      ['s4', 'Property', 'A phone: personal property'],
      ['s5', 'Belonging to another', 'Nina possesses and owns it'],
      ['s2', 'Dishonest', 'No s2(1) belief; dishonest to ordinary decent people (*Ivey*)'],
      ['s6', 'Intention to deprive permanently', 'Selling it: treating it as his own to dispose of'],
      ['s8', 'Robbery', 'Theft plus a push on Nina, at the time, in order to steal (*Dawson and James*)'],
    ];
    let s = '', cy = y;
    rows.forEach(([sec, el, why], i) => {
      const last = i === 5;
      const c = card(250, cy, 540, { body: why, size: 16, pad: 12, bfill: C.ink, minH: 64, vcenter: true, fill: last ? C.cream : C.panel, edge: last ? C.olive : C.panelEdge });
      s += `<rect x="30" y="${cy}" width="66" height="${c.h}" rx="12" fill="${last ? C.mustard : C.tealLight}" stroke="${C.ink}" stroke-width="2"/>` + T(63, cy + c.h / 2 + 7, sec, { size: 18, weight: 700, anchor: 'middle' });
      const ph = para(0, 0, el, 136, { size: 16, weight: 700 }).h;
      s += para(110, cy + c.h / 2 - ph / 2 + 15, el, 136, { size: 16, weight: 700 }).s + c.s;
      s += `<circle cx="830" cy="${cy + c.h / 2}" r="20" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + T(830, cy + c.h / 2 + 7, '✓', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
      if (i === 4) s += `<line x1="30" y1="${cy + c.h + 7}" x2="870" y2="${cy + c.h + 7}" stroke="${C.olive}" stroke-width="2" stroke-dasharray="8 6"/>`;
      cy += c.h + 14;
    });
    return { s, h: cy - y - 14 };
  },
],
'A checklist for Mo: appropriation by snatching (s3), property (s4), belonging to Nina (s5), dishonest under Ivey (s2), intention to permanently deprive shown by selling it (s6); then robbery (s8) because he pushed Nina at the time and in order to steal (Dawson and James).',
'Five theft elements in order, then force for robbery.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
