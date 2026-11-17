import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-law-7162-remedies-tort';
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
  aim: '## Compensatory damages: the aim',
  inj: '## Damages for physical injury',
  prop: '## Damages for damage to property',
  mit: '## Mitigation of loss',
  injn: '## Injunctions',
};

// 01 Backwards (tort) vs forwards (contract)
F('01-tort-looks-backwards', 'Compensatory damages: which position?', '', [
  (y) => {
    const H = 270; let s = panel(30, y, 840, H);
    const ly = y + 172;
    s += `<line x1="70" y1="${ly}" x2="830" y2="${ly}" stroke="${C.ink}" stroke-width="3"/>`;
    // points
    const pt = (x, lab, sub, fill) => `<circle cx="${x}" cy="${ly}" r="13" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + T(x, ly + 44, lab, { size: 18, weight: 700, anchor: 'middle' }) + (sub ? T(x, ly + 68, sub, { size: 16, anchor: 'middle', fill: C.muted }) : '');
    s += pt(170, 'Before the tort', 'claimant’s position', C.tealLight) + pt(450, 'Tort committed', 'loss suffered', C.cream) + pt(730, 'Contract performed', 'position if promised', C.cream);
    s += path(`M440,${ly - 22} Q305,${ly - 100} 182,${ly - 26}`, { stroke: C.tealDark, w: 4, extra: 'marker-end="url(#ahT)"' });
    s += T(310, ly - 90, 'TORT: look backwards', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
    s += path(`M460,${ly - 22} Q595,${ly - 100} 718,${ly - 26}`, { stroke: C.olive, w: 4, extra: 'stroke-dasharray="9 7" marker-end="url(#ahO)"' });
    s += T(590, ly - 90, 'CONTRACT: look forwards', { size: 18, weight: 700, anchor: 'middle', fill: C.olive });
    s += T(450, y + 38, 'Damages put the claimant, so far as money can, in a position …', { size: 17, anchor: 'middle', fill: C.muted });
    return { s, h: H };
  },
  (y) => row(y, [
    { kicker: 'LIVINGSTONE v RAWYARDS COAL CO (1880)', body: 'Lord Blackburn: the sum that puts the injured party in the same position as if they had not sustained the wrong.', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'ONCE AND FOR ALL', body: 'Usually a **lump sum**: the claimant cannot return because their condition turns out worse, except under provisional damages or periodical payments.' },
  ], { gap: 16, vcenter: false, card: { size: 16, pad: 18, bfill: C.ink } }),
  (y) => note(y, '', '**Common mistake:** describing contract-style “expectation” damages in a tort answer.', { size: 17, align: 'middle', fill: C.panel, edge: C.panelEdge }),
],
'A timeline with three points: before the tort, the tort, and the position if a contract had been performed. Tort damages look back to the claimant’s position before the tort (Livingstone v Rawyards Coal Co); contract damages look forward to the position if the contract had been performed. Damages are usually one lump sum.',
'Tort damages restore the position before the wrong; contract damages look forward.', H2.aim);

// 02 Heads of personal injury damages
F('02-personal-injury-heads', 'Personal injury damages: two ways to divide them', '', [
  (y) => {
    const lab = T(450, y + 18, 'BY TYPE OF LOSS', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
    const r = row(y + 32, [
      { title: 'Pecuniary (financial)', body: ['Earnings lost before trial', 'Future loss of earnings', 'Medical and care costs', 'Adapting a home or buying equipment'], bullets: true, fill: C.tealLight, edge: C.tealDark },
      { title: 'Non-pecuniary (non-financial)', body: ['Pain and suffering', 'Loss of amenity: inability to enjoy life as before, such as sport or hobbies'], bullets: true, fill: C.cream, edge: C.olive },
    ], { gap: 16, vcenter: false, card: { size: 16, tsize: 19, pad: 18, bfill: C.ink, gap: 4 } });
    return { s: lab + r.s, h: 32 + r.h };
  },
  (y) => {
    const lab = T(450, y + 18, 'BY HOW THEY ARE PROVED', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
    const r = row(y + 32, [
      { title: 'Special damages', body: ['Calculated precisely up to the date of trial: wages lost, receipts for treatment', 'Must be specifically pleaded and proved'], bullets: true },
      { title: 'General damages', body: ['Assessed by the court: pain, suffering, loss of amenity, future losses', 'Guidelines and previous awards keep amounts consistent (*Heil v Rankin*, 2000)'], bullets: true },
    ], { gap: 16, vcenter: false, card: { size: 16, tsize: 19, pad: 18, bfill: C.ink, gap: 4 } });
    return { s: lab + r.s, h: 32 + r.h };
  },
  (y) => {
    const H = 120; let s = panel(30, y, 840, H) + T(50, y + 34, 'FUTURE LOSSES', { size: 15, weight: 700, fill: C.tealDark });
    const bx = (x, w, lab, fill) => `<rect x="${x}" y="${y + 52}" width="${w}" height="48" rx="10" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x + w / 2, y + 82, lab, { size: 17, weight: 700, anchor: 'middle' });
    s += bx(50, 190, 'Annual loss', C.tealLight) + T(262, y + 84, '×', { size: 26, weight: 700, anchor: 'middle' }) + bx(285, 250, 'Years it will continue', C.tealLight) + arrow(545, y + 76, 585, y + 76, { w: 3 }) + bx(595, 255, 'Adjusted for investment', C.cream);
    return { s, h: H };
  },
],
'Personal injury damages split two ways. By type: pecuniary losses (earnings before trial, future earnings, medical and care costs, adapting a home) and non-pecuniary losses (pain and suffering, loss of amenity). By proof: special damages, calculated precisely to trial and pleaded, and general damages, assessed by the court (Heil v Rankin). Future losses are the annual loss multiplied by the years it will continue, adjusted because a lump sum can be invested.',
'Every head of damages is both a type of loss and either special or general.', H2.inj);

// 03 Lump sum and its alternatives
F('03-lump-sum-alternatives', 'Paying for the future: three routes', '', [
  (y) => {
    const r = row(y, [
      { title: 'Lump sum', body: 'The usual form. Paid once and for all. Cannot return to court if the condition turns out worse than expected.', fill: C.panel },
      { title: 'Provisional damages', body: 'Under s32A Senior Courts Act 1981 the claimant may return to court if a specified serious deterioration, such as epilepsy, later develops.', fill: C.tealLight, edge: C.tealDark },
      { title: 'Periodical payments', body: 'Under the Damages Act 1996 future losses are paid regularly over time, reducing the risk that a lump sum runs out or proves too large.', fill: C.cream, edge: C.olive },
    ], { gap: 14, vcenter: false, card: { size: 16, tsize: 19, pad: 18, bfill: C.ink } });
    // mini timelines
    const ty = y + r.h + 26, H = 92; let s = '';
    const xs = r.xs, ws = r.ws;
    xs.forEach((x, i) => {
      s += panel(x, ty, ws[i], H);
      const x1 = x + 22, x2 = x + ws[i] - 22, ly = ty + 56;
      s += `<line x1="${x1}" y1="${ly}" x2="${x2}" y2="${ly}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x2, ly + 26, 'time', { size: 15, anchor: 'end', fill: C.muted });
      if (i === 0) s += `<rect x="${x1 + 4}" y="${ly - 40}" width="34" height="40" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` + T(x1 + 50, ly - 12, 'one payment', { size: 15, fill: C.muted });
      if (i === 1) s += `<rect x="${x1 + 4}" y="${ly - 30}" width="30" height="30" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` + `<rect x="${x2 - 70}" y="${ly - 30}" width="30" height="30" fill="${C.tealDark}" stroke="${C.ink}" stroke-width="2"/>` + T(x2 - 82, ly - 12, 'if it worsens', { size: 15, anchor: 'end', fill: C.muted });
      if (i === 2) for (let k = 0; k < 8; k++) s += `<rect x="${x1 + 4 + k * 28}" y="${ly - 18}" width="18" height="18" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`;
    });
    return { s: r.s + s, h: r.h + 26 + H };
  },
],
'Three ways to pay for future loss. A lump sum is paid once and for all. Provisional damages under s32A Senior Courts Act 1981 let the claimant return if a specified serious deterioration such as epilepsy develops. Periodical payments under the Damages Act 1996 spread future losses over time.',
'Provisional damages and periodical payments soften the once-and-for-all lump sum.', H2.inj);

// 04 Property damage measure
F('04-property-damage', 'Damage to property: the measure', '', [
  (y) => {
    const q = card(250, y, 400, { title: 'Is repair reasonable?', align: 'middle', fill: C.cream, edge: C.olive, tsize: 20, pad: 16 });
    const ya = y + q.h + 54;
    const a = card(30, ya, 400, { kicker: 'YES', title: 'Cost of repair', fill: C.tealLight, edge: C.tealDark, tsize: 20, pad: 18, align: 'middle' });
    const b = card(470, ya, 400, { kicker: 'NO: DESTROYED OR UNECONOMIC', kfill: C.rust, title: 'Diminution in value, or market value of a replacement', tsize: 19, pad: 18, align: 'middle' });
    const h = Math.max(a.h, b.h);
    const a2 = card(30, ya, 400, { kicker: 'YES', title: 'Cost of repair', fill: C.tealLight, edge: C.tealDark, tsize: 20, pad: 18, align: 'middle', minH: h, vcenter: true });
    const b2 = card(470, ya, 400, { kicker: 'NO: DESTROYED OR UNECONOMIC', kfill: C.rust, title: 'Diminution in value, or market value of a replacement', tsize: 19, pad: 18, align: 'middle', minH: h, vcenter: true });
    const ar = arrow(370, y + q.h + 4, 240, ya - 6) + arrow(530, y + q.h + 4, 660, ya - 6);
    const yp = ya + h + 30;
    const plus = T(450, yp + 4, '+', { size: 34, weight: 700, anchor: 'middle' });
    const c = card(30, yp + 20, 840, { kicker: 'PLUS CONSEQUENTIAL LOSSES', body: ['Hiring a replacement car while yours is repaired', 'Profit lost while a damaged machine is out of use', '*Lagden v O’Connor* (2003): a claimant who could not afford ordinary hire recovered the higher cost of a credit hire car; his lack of money was a consequence of the situation the defendant must take as found'], bullets: true, gap: 4, size: 16, pad: 18, bfill: C.ink });
    return { s: q.s + a2.s + b2.s + ar + plus + c.s, h: yp + 20 + c.h - y };
  },
],
'If repair is reasonable the measure is the cost of repair; if the item is destroyed or repair is uneconomic, the measure is the diminution in value or the market value of a replacement. Consequential losses such as hire charges or lost profit are added; in Lagden v O’Connor a claimant who could not afford ordinary hire recovered credit hire costs.',
'Repair or replacement value, plus consequential losses.', H2.prop);

// 05 Mitigation: Ria's van
F('05-mitigation-ria', 'Mitigation: Ria’s van', 'Invented figures from the lesson’s example', [
  (y) => {
    const H = 360; let s = panel(30, y, 840, H);
    const base = y + 300, sc = 0.058; // px per £
    const bar = (x, v, fill, lab, top, dash) => `<rect x="${x}" y="${base - v * sc}" width="120" height="${v * sc}" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"${dash ? ' stroke-dasharray="8 6"' : ''}/>` + T(x + 60, base - v * sc - 12, top, { size: 18, weight: 700, anchor: 'middle' }) + T(x + 60, base + 26, lab, { size: 16, anchor: 'middle', fill: C.muted });
    s += `<line x1="60" y1="${base}" x2="840" y2="${base}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += bar(90, 3000, C.tealLight, 'Repairs', '£3,000');
    s += bar(300, 2000, C.panel, 'Lost earnings claimed', '£2,000', true);
    s += bar(480, 800, C.cream, 'Hire at £80 × 10 days', '£800');
    s += bar(680, 3800, C.tealLight, 'Total recoverable', '£3,800');
    s += `<line x1="300" y1="${base - 2000 * sc}" x2="420" y2="${base}" stroke="${C.rust}" stroke-width="4"/><line x1="420" y1="${base - 2000 * sc}" x2="300" y2="${base}" stroke="${C.rust}" stroke-width="4"/>`;
    s += `<line x1="680" y1="${base - 800 * sc}" x2="800" y2="${base - 800 * sc}" stroke="${C.ink}" stroke-width="2" stroke-dasharray="6 5"/>`;
    s += T(740, base - 400 * sc + 6, '£800', { size: 15, weight: 700, anchor: 'middle' }) + T(740, base - 2400 * sc + 6, '£3,000', { size: 15, weight: 700, anchor: 'middle' });
    s += T(450, y + 34, 'Van out of use for 10 days; she hires nothing', { size: 17, anchor: 'middle', fill: C.muted });
    return { s, h: H };
  },
  (y) => row(y, [
    { kicker: 'THE RULE', body: 'Take **reasonable steps** to limit the loss. The avoidable part is lost, but the reasonable cost of the steps is recoverable.', fill: C.cream, edge: C.olive },
    { title: 'Darbishire v Warran (1963)', body: 'Repairs far above market value: only the market value was recovered.' },
    { title: 'Geest plc v Lansiquot (2002)', body: 'The **defendant** bears the burden of proving a failure to mitigate.' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 17, pad: 16, bfill: C.ink } }),
],
'Bar chart of Ria’s claim: repairs £3,000 are recoverable; the £2,000 of lost earnings is struck out because hiring a van at £80 a day for 10 days (£800) would have avoided it; the total recoverable is £3,800. Below: the mitigation rule, Darbishire v Warran (only market value recovered) and Geest v Lansiquot (burden on the defendant).',
'Failing to mitigate loses only the avoidable part, not the whole claim.', H2.mit);

// 06 Types of injunction
F('06-injunction-types', 'Five types of injunction', 'An equitable remedy: not available as of right', [
  (y) => {
    const lab1 = T(450, y + 18, 'WHAT IT ORDERS', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
    const r1 = row(y + 32, [
      { title: 'Prohibitory', body: 'Stop doing something; the usual form in nuisance', fill: C.tealLight, edge: C.tealDark },
      { title: 'Mandatory', body: 'Do something, such as remove an obstruction' },
    ], { gap: 16, vcenter: false, card: { size: 16, tsize: 20, pad: 18, bfill: C.ink, align: 'middle' } });
    const y2 = y + 32 + r1.h + 26;
    const lab2 = T(450, y2 + 18, 'WHEN IT IS GRANTED', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
    const r2 = row(y2 + 32, [
      { title: 'Quia timet', body: 'Prevents a threatened wrong that has not yet occurred', fill: C.cream, edge: C.olive },
      { title: 'Interim', body: 'Temporary, before trial: balance of convenience (*American Cyanamid v Ethicon*, 1975)' },
      { title: 'Final', body: 'Granted after trial' },
    ], { gap: 46, arrows: true, vcenter: false, card: { size: 16, tsize: 20, pad: 16, bfill: C.ink, align: 'middle' } });
    const ty = y2 + 32 + r2.h + 14;
    const tline = `<line x1="40" y1="${ty + 16}" x2="850" y2="${ty + 16}" stroke="${C.muted}" stroke-width="2" marker-end="url(#ah)"/>` + T(170, ty + 44, 'before the wrong', { size: 15, anchor: 'middle', fill: C.muted }) + T(450, ty + 44, 'before trial', { size: 15, anchor: 'middle', fill: C.muted }) + T(730, ty + 44, 'after trial', { size: 15, anchor: 'middle', fill: C.muted });
    return { s: lab1 + r1.s + lab2 + r2.s + tline, h: ty + 50 - y };
  },
],
'Injunctions sorted two ways. By what they order: prohibitory (stop, the usual form in nuisance) and mandatory (do something). By timing: quia timet before a threatened wrong occurs, interim before trial on the balance of convenience (American Cyanamid v Ethicon), and final after trial.',
'Prohibitory or mandatory in content; quia timet, interim or final in timing.', H2.injn);

// 07 Injunction or damages?
F('07-injunction-or-damages', 'Injunction or damages instead?', 'The court’s discretion once a nuisance is proved', [
  (y) => card(30, y, 840, { kicker: 'THE COURT MAY REFUSE AN INJUNCTION WHERE', body: ['damages are adequate', 'the claimant has delayed or acted unfairly', 'it would be oppressive'], bullets: true, gap: 3, size: 16, pad: 18, bfill: C.ink }),
  (y) => row(y, [
    { kicker: 'LIMITED', title: 'Kennaway v Thompson (1981)', body: 'Powerboat racing restricted in number and noise of events, not stopped', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'REFUSED: PUBLIC INTEREST', kfill: C.rust, title: 'Miller v Jackson (1977)', body: 'Cricket continued; damages instead' },
    { kicker: 'DAMAGES INSTEAD', kfill: C.rust, title: 'Dennis v MoD (2003)', body: 'Military jet noise was a nuisance; the public interest in training pilots meant damages instead' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink } }),
  (y) => {
    const r = row(y + 74, [
      { title: 'Injury is small' }, { title: 'Can be estimated in money' }, { title: 'A small payment compensates' }, { title: 'Injunction would be oppressive' },
    ], { x: 50, w: 800, gap: 12, card: { tsize: 16, pad: 12, align: 'middle' } });
    const subP = para(50, y + 60, '*Shelfer* (1895), A.L. Smith LJ: damages should replace an injunction only if', 800, { size: 16, fill: C.ink });
    const yc = y + 74 + r.h + 16;
    const cov = para(50, yc + 18, '**Coventry v Lawrence (2014):** this working rule must not be applied mechanically; wide discretion, including public benefit and planning permission.', 800, { size: 16, fill: C.ink });
    const H = yc + 18 + cov.h + 6 - y;
    const box = `<rect x="30" y="${y}" width="840" height="${H}" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + T(50, y + 30, 'DAMAGES IN LIEU: s50 SENIOR COURTS ACT 1981 (ORIGINALLY LORD CAIRNS’ ACT 1858)', { size: 15, weight: 700, fill: C.tealDark });
    return { s: box + subP.s + r.s + `<line x1="50" y1="${yc}" x2="850" y2="${yc}" stroke="${C.olive}" stroke-width="1.5"/>` + cov.s, h: H };
  },
],
'The court may refuse an injunction where damages are adequate, the claimant delayed or acted unfairly, or it would be oppressive. Kennaway v Thompson limited powerboat racing; Miller v Jackson refused an injunction for cricket; Dennis v MoD gave damages for jet noise. Damages in lieu (s50 Senior Courts Act 1981) followed the four Shelfer conditions, but Coventry v Lawrence says they must not be applied mechanically.',
'An injunction is discretionary: it can be limited, refused, or replaced by damages.', H2.injn, { gap: 24 });

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
