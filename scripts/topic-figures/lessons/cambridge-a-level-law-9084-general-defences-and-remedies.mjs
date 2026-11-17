import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-law-9084-general-defences-and-remedies';
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
  def: '## 4.4.1 Defences',
  rem: '## 4.4.2 Remedies',
  we: '## Worked example',
};

// 01 Volenti
F('01-volenti', 'Volenti non fit injuria', 'A complete defence: “to one who is willing, no harm is done”', [
  (y) => row(y, [
    { kicker: 'TEST', title: 'Full knowledge and understanding of the risk', fill: C.tealLight, edge: C.tealDark, align: 'middle' },
    { kicker: 'AND', title: 'Freely agreed to accept it', fill: C.tealLight, edge: C.tealDark, align: 'middle' },
    { kicker: 'NOT ENOUGH', kfill: C.rust, title: 'Knowledge alone', body: '*Smith v Baker* (1891): stones swung overhead', align: 'middle' },
  ], { gap: 14, vcenter: true, card: { size: 16, tsize: 18, bfill: C.ink } }),
  (y) => grid(y, [
    { kicker: 'EMPLOYMENT', title: 'Rarely succeeds: no real choice', body: '*Bowater v Rowley Regis* (1944). Exception: *ICI v Shatwell* (1965), shotfirers broke rules together' },
    { kicker: 'MEDICAL TREATMENT', title: 'Consent stops a battery claim', body: 'But consent to treatment is not consent to negligent treatment' },
    { kicker: 'SPORT', title: 'Risks inherent in the game only', body: 'Not a reckless tackle: *Condon v Basi* (1985). Spectators: error of judgement, not reckless disregard (*Wooldridge v Sumner*, 1963)' },
    { kicker: 'LIMITS', kfill: C.rust, title: 'Where volenti fails', body: 'Rescuers (*Haynes v Harwood*; *Baker v TE Hopkins*); driving instructor (*Nettleship v Weston*); car passengers, s149 Road Traffic Act 1988. Succeeded: *Morris v Murray* (1991), very drunk pilot', fill: C.cream, edge: C.olive },
  ], 2, { gap: 14, vgap: 14, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink } }),
],
'Volenti requires full knowledge and understanding of the risk and free agreement to accept it; knowledge alone is not enough (Smith v Baker). Four panels apply it to employment (Bowater; ICI v Shatwell), medical treatment, sport (Condon v Basi; Wooldridge v Sumner), and its limits for rescuers, Nettleship, car passengers under s149, with Morris v Murray where it succeeded.',
'Knowing of a risk is not the same as agreeing to run it.', H2.def);

// 02 Contributory negligence
{
  const sc = 480 / 100;
  F('02-contributory-negligence', 'Contributory negligence: a partial defence', 'Law Reform (Contributory Negligence) Act 1945 s1(1)', [
    (y) => {
      let s = T(30, y + 16, 'Damages reduced to the extent that is just and equitable, given the claimant’s share in the responsibility', { size: 17, weight: 600 });
      const by = y + 36, bx = 150;
      s += T(bx - 16, by + 34, 'Damages', { size: 17, weight: 700, anchor: 'end' });
      s += `<rect x="${bx}" y="${by}" width="${sc * 70}" height="52" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + `<rect x="${bx + sc * 70}" y="${by}" width="${sc * 30}" height="52" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5" stroke-dasharray="7 5"/>`;
      s += T(bx + sc * 35, by + 33, 'claimant recovers', { size: 17, weight: 600, anchor: 'middle' }) + T(bx + sc * 85, by + 33, 'reduction', { size: 17, weight: 600, anchor: 'middle', fill: C.olive });
      s += arrow(bx + sc * 100 + 60, by + 26, bx + sc * 100 + 8, by + 26, { color: C.rust, marker: 'ahR', w: 3 });
      s += T(bx + sc * 100 + 66, by + 20, 'never 100%', { size: 15, weight: 700, fill: C.rust }) + T(bx + sc * 100 + 66, by + 40, '(Pitts v Hunt)', { size: 15, fill: C.rust, italic: true });
      return { s, h: 36 + 52 };
    },
    (y) => grid(y, [
      { kicker: 'CONTRIBUTES TO THE DAMAGE', body: 'Need not cause the accident: *Froom v Butcher* (1976), seat belt; *O’Connell v Jackson* (1972), no crash helmet' },
      { kicker: 'OBJECTIVE TEST', body: 'Failed to take reasonable care for own safety: *Jones v Livox Quarries* (1952)' },
      { kicker: 'CHILDREN', body: 'Judged by their age: *Gough v Thorne* (1966), a 13-year-old girl was not contributorily negligent' },
      { kicker: 'DRUNK DRIVER', body: 'Accepting a lift from a driver known to be drunk can count: *Owens v Brimmell* (1977)' },
    ], 2, { gap: 14, vgap: 14, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } }),
  ],
  'A damages bar split into the part the claimant recovers and the part removed for their own fault, with a note that the reduction can never be 100 per cent (Pitts v Hunt). Four panels: the fault need only contribute to the damage (Froom v Butcher; O’Connell v Jackson); the test is objective (Jones v Livox); children are judged by age (Gough v Thorne); accepting a lift from a drunk driver can count (Owens v Brimmell).',
  'The claimant still wins, but damages fall by their share of responsibility.', H2.def);
}

// 03 Other general defences
F('03-other-defences', 'Five more general defences', '', [
  (y) => table(y, [
    { w: 0.8, head: 'Defence' },
    { w: 1.35, head: 'Meaning and case', hfill: C.teal },
    { w: 1.25, head: 'Limit or contrast', hfill: C.mustard },
  ], [
    ['Inevitable accident', 'Could not be avoided by reasonable care: *Stanley v Powell* (1891), pellet glanced off a tree', 'In negligence, simply a finding of no breach'],
    ['Act of God', 'Natural event no human foresight could guard against: *Nichols v Marsland* (1876)', '*Greenock Corporation v Caledonian Railway* (1917): rain not exceptional enough'],
    ['Statutory authority', 'Inevitable result of an activity Parliament authorised: *Allen v Gulf Oil Refining* (1981)', 'Does not cover carrying out the activity negligently'],
    ['Illegality (ex turpi causa)', 'Claim from the claimant’s own serious wrongdoing: *Pitts v Hunt*; *Gray v Thames Trains* (2009)', 'Not automatic: *Revill v Newbery* (1996). *Patel v Mirza* (2016): range of factors'],
    ['Necessity', 'Acting to prevent greater harm: *Cope v Sharpe* (1912), firebreak', '*Rigby v CC of Northamptonshire* (1985): CS gas necessary, but negligent to have no fire-fighting equipment'],
  ], { size: 16, hsize: 17 }),
],
'A table of five general defences, each with its meaning, case and limit: inevitable accident (Stanley v Powell), Act of God (Nichols v Marsland against Greenock), statutory authority (Allen v Gulf Oil, not negligent performance), illegality (Pitts v Hunt, Gray v Thames Trains; not automatic, Revill v Newbery, Patel v Mirza) and necessity (Cope v Sharpe; Rigby).',
'Each defence has a limit: learn the contrasting case with the leading one.', H2.def);

// 04 Types of damages tree
{
  F('04-types-of-damages', 'Types of damages', '', [
    (y) => {
      let s = '';
      const top = card(300, y, 300, { title: 'Damages', align: 'middle', fill: C.mustard, edge: C.ink, tsize: 22, pad: 14 });
      s += top.s;
      const yb = y + top.h + 50;
      const L = card(30, yb, 330, { kicker: 'COMPENSATORY', title: 'Restore the claimant, as far as money can', body: '*Livingstone v Rawyards Coal Co* (1880)', fill: C.tealLight, edge: C.tealDark, size: 16, tsize: 18, bfill: C.ink, align: 'middle' });
      const R = card(390, yb, 480, { kicker: 'NON-COMPENSATORY', title: 'Mark a right, show disapproval, or punish', fill: C.cream, edge: C.olive, size: 16, tsize: 18, align: 'middle', minH: L.h, vcenter: true });
      s += L.s + R.s;
      s += path(`M450,${y + top.h} L450,${y + top.h + 22} M195,${y + top.h + 22} L630,${y + top.h + 22}`, { w: 3 }) + arrow(195, y + top.h + 22, 195, yb - 4) + arrow(630, y + top.h + 22, 630, yb - 4);
      const yc = yb + L.h + 40;
      const l2 = stack(yc, [
        { title: 'Special damages', body: 'Quantifiable losses to trial: medical expenses, repairs, lost earnings' },
        { title: 'General damages', body: 'Not precisely calculable: pain, suffering, loss of amenity, future losses' },
      ], { x: 30, w: 330, gap: 12, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink } });
      const r2 = grid(yc, [
        { title: 'Nominal', body: 'Infringement of a right, no loss; common in trespass' },
        { title: 'Contemptuous', body: 'Tiny sum, claim had no merit: *Grobbelaar* (2002), £1' },
        { title: 'Aggravated', body: 'Extra injury to feelings from the manner of the tort' },
        { title: 'Exemplary', body: 'Punish; only the *Rookes v Barnard* (1964) categories' },
      ], 2, { x: 390, w: 480, gap: 12, vgap: 12, vcenter: false, card: { size: 16, tsize: 18, pad: 14, bfill: C.ink } });
      s += arrow(195, yb + L.h + 6, 195, yc - 6) + arrow(630, yb + R.h + 6, 630, yc - 6);
      s += l2.s + r2.s;
      const yd = yc + Math.max(l2.h, r2.h) + 18;
      const n = card(30, yd, 840, { kicker: 'ROOKES v BARNARD: EXEMPLARY DAMAGES ONLY FOR', body: ['oppressive, arbitrary or unconstitutional action by government servants', 'conduct calculated to make a profit exceeding the compensation payable', 'where statute authorises them'], bullets: true, size: 16, bfill: C.ink, gap: 4, pad: 18 });
      return { s: s + n.s, h: yd + n.h - y };
    },
  ],
  'A tree. Compensatory damages restore the claimant (Livingstone v Rawyards) and divide into special damages, quantifiable losses to trial, and general damages such as pain, suffering, loss of amenity and future losses. Non-compensatory damages are nominal, contemptuous (Grobbelaar, £1), aggravated and exemplary, the last only in the three Rookes v Barnard categories.',
  'Most damages compensate; exemplary damages punish, and only in three categories.', H2.rem);
}

// 05 Personal injury, future loss and death
F('05-future-loss-and-death', 'Personal injury, future losses and death', '', [
  (y) => {
    const bx = [30, 330, 600], bw = [250, 220, 270];
    let s = '';
    const a = card(bx[0], y, bw[0], { kicker: 'MULTIPLICAND', title: 'Annual loss', body: 'earnings or care', align: 'middle', fill: C.tealLight, edge: C.tealDark, size: 16, tsize: 20, minH: 120, vcenter: true });
    const b = card(bx[1], y, bw[1], { kicker: 'MULTIPLIER', title: 'Period of loss', body: 'actuarial tables', align: 'middle', fill: C.tealLight, edge: C.tealDark, size: 16, tsize: 20, minH: 120, vcenter: true });
    const c = card(bx[2], y, bw[2], { kicker: 'FUTURE LOSS', title: 'Lump sum', body: 'adjusted by a discount rate for investing it', align: 'middle', fill: C.mustard, edge: C.ink, size: 16, tsize: 20, minH: 120, vcenter: true, bfill: C.ink });
    s += a.s + b.s + c.s + T(305, y + 74, '×', { size: 34, weight: 700, anchor: 'middle' }) + T(575, y + 72, '=', { size: 34, weight: 700, anchor: 'middle' });
    return { s, h: 120 };
  },
  (y) => row(y, [
    { kicker: 'LUMP SUM', title: 'Final', body: 'Must guess the future' },
    { kicker: 'PERIODICAL PAYMENTS', title: 'Damages Act 1996', body: 'Paid over time instead' },
    { kicker: 'PROVISIONAL DAMAGES', title: 'Chance of serious deterioration', body: 'Can return to court' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink, align: 'middle' } }),
  (y) => note(y, '', 'Pain, suffering and loss of amenity are awarded even if the claimant cannot appreciate the loss (*H West and Son v Shephard*, 1964).', { size: 16, fill: C.panel, edge: C.panelEdge }),
  (y) => row(y, [
    { kicker: 'DEATH: THE ESTATE', title: 'Law Reform (Miscellaneous Provisions) Act 1934', body: 'Continues claims the deceased had' },
    { kicker: 'DEATH: DEPENDANTS AND RELATIVES', title: 'Fatal Accidents Act 1976', body: 'Loss of financial support; fixed bereavement award for certain relatives' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink, fill: C.cream, edge: C.olive } }),
],
'Future loss is calculated as the multiplicand (annual loss of earnings or care) times the multiplier (the period of loss), adjusted by a discount rate. Alternatives to a final lump sum are periodical payments under the Damages Act 1996 and provisional damages. On death, the 1934 Act lets the estate continue claims and the Fatal Accidents Act 1976 compensates dependants and certain relatives.',
'Annual loss times period of loss; the lump sum is final unless the court orders otherwise.', H2.rem);

// 06 Injunctions
F('06-injunctions', 'Injunctions and damages in lieu', 'An equitable, discretionary order', [
  (y) => row(y, [
    { kicker: 'PROHIBITORY', title: 'Stop doing something', body: '*Kennaway v Thompson* (1981): powerboat racing restricted to certain days, not banned' },
    { kicker: 'MANDATORY', title: 'Do something positive', body: 'Onerous, so strict conditions: *Redland Bricks v Morris* (1970)' },
    { kicker: 'INTERLOCUTORY', title: 'Preserve the position until trial', body: '*American Cyanamid* (1975): serious question to be tried? Balance of convenience?' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink } }),
  16,
  (y) => {
    const c1 = card(30, y, 400, { kicker: 'SHELFER (1895)', title: 'Damages only if the injury is', body: ['small', 'measurable in money', 'and an injunction would be oppressive'], bullets: true, size: 16, tsize: 18, bfill: C.ink, gap: 3 });
    const c2 = card(470, y, 400, { kicker: 'COVENTRY v LAWRENCE (2014)', title: 'Not applied mechanically', body: 'Public interest can be weighed. *Miller v Jackson* (1977); *Dennis v MoD* (2003), RAF jet noise', size: 16, tsize: 18, bfill: C.ink, fill: C.cream, edge: C.olive, minH: c1.h });
    const lab = T(450, y - 12, 'DAMAGES IN LIEU (power first given by Lord Cairns’ Act 1858)', { size: 16, weight: 700, anchor: 'middle', fill: C.muted });
    return { s: lab + c1.s + c2.s + arrow(434, y + c1.h / 2, 466, y + c1.h / 2), h: c1.h };
  },
  (y) => row(y, [
    { kicker: '+ INJUNCTIONS', body: 'Stop continuing wrongs, which damages cannot', fill: C.tealLight, edge: C.tealDark },
    { kicker: '− INJUNCTIONS', kfill: C.rust, body: 'Blunt; can harm third parties and the public interest; hard to enforce' },
    { kicker: '− DAMAGES IN LIEU', kfill: C.rust, body: 'Can let a defendant buy the right to commit a tort' },
  ], { gap: 14, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } }),
],
'Three kinds of injunction: prohibitory (Kennaway v Thompson), mandatory (Redland Bricks v Morris) and interlocutory (American Cyanamid). Damages in lieu moved from the strict Shelfer test to Coventry v Lawrence, where public interest can be weighed (Miller v Jackson; Dennis v MoD). The evaluation row weighs stopping continuing wrongs against bluntness and buying the right to commit a tort.',
'Injunctions are discretionary; since Coventry v Lawrence damages in lieu are weighed more flexibly.', H2.rem, { gap: 34 });

// 07 Tariq worked example
{
  const sc = 840 / 60000;
  F('07-tariq-worked-example', 'Worked example: Tariq’s damages', 'A passenger injured by a driver he knew had drunk heavily', [
    (y) => row(y, [
      { kicker: 'VOLENTI?', title: 'Excluded', body: 's149 Road Traffic Act 1988 for car passengers', fill: C.panel },
      { kicker: 'CONTRIBUTORY NEGLIGENCE', title: 'Yes, two grounds', body: 'Lift from a drunk driver (*Owens v Brimmell*); no seat belt (*Froom v Butcher*)', fill: C.cream, edge: C.olive },
    ], { gap: 14, fr: [1, 1.5], vcenter: false, card: { size: 16, tsize: 19, pad: 16, bfill: C.ink } }),
    (y) => {
      let s = T(30, y + 16, 'TOTAL LOSS £60,000', { size: 16, weight: 700, fill: C.muted });
      s += segbar(y + 26, [{ label: 'Special £18,000', frac: 18000, fill: C.tealLight }, { label: 'General £42,000', frac: 42000, fill: C.teal }], { h: 60 }).s;
      const y2 = y + 26 + 60 + 50;
      s += T(30, y2 - 12, 'COMBINED REDUCTION OF 30 PER CENT: £60,000 × 0.30 = £18,000', { size: 16, weight: 700, fill: C.muted });
      s += segbar(y2, [{ label: 'Award £42,000', frac: 42000, fill: C.mustard }, { label: '−£18,000', frac: 18000, fill: C.cream }], { h: 60 }).s;
      return { s, h: y2 + 60 - y };
    },
    (y) => note(y, '', '**Award:** £60,000 − £18,000 = **£42,000**', { size: 19, align: 'middle' }),
  ],
  'Volenti is excluded by s149 of the Road Traffic Act 1988, but contributory negligence applies twice (Owens v Brimmell; Froom v Butcher). Bars to scale show the £60,000 total loss (£18,000 special, £42,000 general) and a 30 per cent reduction of £18,000, leaving an award of £42,000.',
  'Total the losses, apply the reduction, state the award.', H2.we);
}

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
