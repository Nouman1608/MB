import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-law-7162-law-making-parliamentary-law-making';
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
  pre: '## Before a Bill: Green and White Papers',
  kinds: '## Kinds of Bill in more detail',
  proc: '## The formal legislative process: the detail',
  inf: '## Influences on Parliament: new examples and evaluation',
  sup: '## Parliamentary supremacy and its limits',
};

// 01 Green to White to Bill
F('01-green-white-papers', 'Before a Bill: from options to proposals', 'Consultation is normal for significant reform, but not legally required', [
  (y) => row(y, [
    { kicker: 'GREEN PAPER', title: 'Options', body: 'Invites comment from anyone: professional bodies, pressure groups, businesses, the public. Genuinely open.', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'WHITE PAPER', title: 'Settled proposals', body: 'The government’s firm plans, usually after consultation; often followed directly by a Bill.' },
    { kicker: 'DRAFT BILL (MAY BE)', title: 'Pre-legislative scrutiny', body: 'A parliamentary committee checks it before formal introduction, so technical problems are fixed early.', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { arrows: true, gap: 40, vcenter: false, card: { size: 16, tsize: 19, pad: 16, bfill: C.ink } }),
  (y) => row(y, [
    { kicker: 'FOR', body: 'Consultation improves quality and legitimacy' },
    { kicker: 'AGAINST', kfill: C.rust, body: 'Government decides whether to consult, for how long, and whether to take any notice of responses' },
  ], { gap: 16, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } }),
],
'A Green Paper sets out options and invites comment from anyone; a White Paper sets out the government’s settled proposals and is often followed by a Bill; a draft Bill may be published for pre-legislative scrutiny by a committee. Consultation improves quality and legitimacy, but government controls whether and how it consults.',
'Green means options, White means settled proposals.', H2.pre, { gap: 24 });

// 02 Private members' Bills
F('02-private-members-bills', 'Private members’ Bills: three routes in', 'Few succeed without government support, which controls most parliamentary time', [
  (y) => row(y, [
    { kicker: 'BALLOT', title: 'Most debating time', body: 'Held at the start of each session', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'TEN MINUTE RULE', title: 'A short speech', body: 'Mainly a way of raising an issue' },
    { kicker: 'PRESENTATION', title: 'No speech', body: 'Bill simply presented' },
  ], { gap: 16, vcenter: false, card: { size: 16, tsize: 19, pad: 16, bfill: C.ink } }),
  (y) => {
    const head = T(30, y + 20, 'Example: the Voyeurism (Offences) Act 2019 (“upskirting”)', { size: 19, weight: 700 });
    const r = row(y + 38, [
      { title: 'Private member’s Bill' },
      { title: 'Blocked by a single objection', fill: C.panel, edge: C.rust },
      { title: 'Government adopts it as its own Bill', fill: C.cream, edge: C.olive },
      { title: 'Act 2019', fill: C.tealLight, edge: C.tealDark },
    ], { arrows: true, gap: 36, card: { tsize: 17, pad: 14, align: 'middle' } });
    return { s: head + r.s, h: 38 + r.h };
  },
  (y) => note(y, '', 'Another private member’s Bill: the Murder (Abolition of Death Penalty) Act 1965, introduced by Sydney Silverman.', { size: 17, align: 'middle', fill: C.panel, edge: C.panelEdge }),
],
'Private members’ Bills enter the Commons by the ballot, which gives most debating time, the Ten Minute Rule, a short speech mainly raising an issue, or presentation with no speech. The upskirting Bill was blocked by one objection and then adopted by the government, becoming the Voyeurism (Offences) Act 2019. The Murder (Abolition of Death Penalty) Act 1965 was a private member’s Bill by Sydney Silverman.',
'Backbench Bills usually need government time to become law.', H2.kinds, { gap: 24 });

// 03 Formal legislative process
{
  const st = [
    ['First reading', 'Formal: title read; no debate'],
    ['Second reading', 'Main debate on principle; vote'],
    ['Committee stage', 'Public Bill Committee of about 16 to 50 MPs, or a Committee of the whole House'],
    ['Report stage', 'The amended Bill considered; further amendments'],
    ['Third reading', 'Final debate; no substantive amendments in the Commons'],
  ];
  F('03-legislative-process', 'From Bill to Act in force', '', [
    (y) => {
      let s = '', cy = y;
      st.forEach(([a, b], i) => {
        const c = card(110, cy, 500, { title: a, body: b, size: 15, tsize: 18, pad: 12, bfill: C.ink, fill: i === 1 || i === 2 ? C.tealLight : C.panel, edge: i === 1 || i === 2 ? C.tealDark : C.panelEdge });
        s += c.s + badge(62, cy + c.h / 2, 21, String(i + 1), C.cream);
        cy += c.h + 8;
      });
      const H = cy - y - 8;
      s += `<rect x="636" y="${y}" width="234" height="${H}" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
      s += T(753, y + 40, 'Then the same', { size: 18, weight: 700, anchor: 'middle' }) + T(753, y + 64, 'five stages in the', { size: 18, weight: 700, anchor: 'middle' }) + T(753, y + 88, 'other House', { size: 18, weight: 700, anchor: 'middle' });
      s += para(656, y + 124, '**In the Lords:** rarely vote against a government Bill at second reading; committee usually of the whole House or a Grand Committee; amendments still possible at third reading', 196, { size: 15, fill: C.ink }).s;
      s += arrow(612, y + H / 2, 632, y + H / 2, { w: 3 });
      return { s, h: H };
    },
    (y) => {
      const pp = card(30, y, 400, { kicker: 'PING-PONG', body: 'If the second House amends the Bill, it goes back to the first, back and forth until both agree the text', size: 16, pad: 16, bfill: C.ink });
      const ra = card(470, y, 400, { kicker: 'ROYAL ASSENT', body: 'Normally notified to each House (Royal Assent Act 1967). Not refused since 1708: a formality by convention', size: 16, pad: 16, bfill: C.ink, fill: C.tealLight, edge: C.tealDark, minH: pp.h });
      return { s: pp.s + ra.s + arrow(434, y + pp.h / 2, 466, y + pp.h / 2, { w: 3 }), h: Math.max(pp.h, ra.h) };
    },
    (y) => ({ s: arrow(670, y - 18, 670, y + 2), h: 0 }),
    (y) => {
      const head = T(30, y + 22, 'Commencement: the Act comes into force', { size: 19, weight: 700 });
      const r = row(y + 38, [{ title: 'on Royal Assent' }, { title: 'on a date stated in the Act' }, { title: 'by a minister’s commencement order (a statutory instrument)' }], { gap: 14, card: { tsize: 16, pad: 14, align: 'middle' } });
      return { s: head + r.s + T(450, y + 38 + r.h + 28, 'Some provisions are never brought into force.', { size: 16, anchor: 'middle', fill: C.rust, weight: 600 }), h: 38 + r.h + 34 };
    },
  ],
  'Five stages in the first House: first reading (formal), second reading (main debate and vote), committee stage (a Public Bill Committee of about 16 to 50 MPs or a Committee of the whole House), report stage and third reading; then the same five in the other House. Ping-pong resolves amendments, Royal Assent is notified under the 1967 Act, and commencement may be on assent, on a stated date or by commencement order.',
  'Debate on principle, detailed scrutiny, agreement of both Houses, assent, then commencement.', H2.proc, { gap: 22 });
}

// 04 Parliament Acts
F('04-parliament-acts', 'When the Lords and Commons disagree', '', [
  (y) => row(y, [
    { kicker: 'PARLIAMENT ACT 1911', title: 'Lords lose their veto over most public Bills', body: ['Money Bills: delay of **one month**', 'Other Bills: delay of **two years**'], bullets: true },
    { kicker: 'PARLIAMENT ACT 1949', title: 'Delay cut further', body: ['Non-money Bills: delay of **one year**'], bullets: true, fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { arrows: true, gap: 40, vcenter: false, card: { size: 16, tsize: 19, pad: 18, bfill: C.ink } }),
  (y) => {
    const head = T(450, y + 22, 'Used rarely: Acts passed under the Parliament Acts', { size: 19, weight: 700, anchor: 'middle' });
    const c = chips(y + 40, ['War Crimes Act 1991', 'European Parliamentary Elections Act 1999', 'Sexual Offences (Amendment) Act 2000', 'Hunting Act 2004'], { size: 16, fill: C.tealLight, edge: C.tealDark });
    return { s: head + c.s, h: 40 + c.h };
  },
  (y) => note(y, 'Salisbury Convention', 'The Lords do not usually block, at second reading, a government Bill delivering a manifesto commitment.', { size: 17 }),
],
'The Parliament Act 1911 removed the Lords’ veto over most public Bills, allowing a delay of one month for money Bills and two years for others; the Parliament Act 1949 cut the delay for non-money Bills to one year. The Acts were used for the War Crimes Act 1991, European Parliamentary Elections Act 1999, Sexual Offences (Amendment) Act 2000 and Hunting Act 2004. Under the Salisbury Convention the Lords do not usually block manifesto Bills at second reading.',
'The Lords can delay, not veto, most public Bills.', H2.proc, { gap: 24 });

// 05 Influences evaluated
{
  const inf = [
    ['Pressure groups', 'Insider (British Medical Association, Law Society) and outsider groups; Gina Martin’s campaign; “Finn’s Law” 2019', 'Expertise; a voice for the unheard', 'Money and contacts; narrow interest as opinion; law too narrow'],
    ['Media', 'Newspapers, broadcasters and social media publicise issues', 'Fast, wide reach, exposes failures', 'Owners’ agendas; rushed, badly drafted law'],
    ['Parties and manifestos', 'Manifesto sets the programme; King’s Speech announces it', 'Democratic mandate; voters know what to expect', 'Large majority, little opposition; policies bundled'],
    ['Law Commission', 'Reports with draft Bills, e.g. Fraud Act 2006', 'Independence and expertise; consultation', 'Depends on government time; many delayed'],
    ['Public opinion', 'Constituents, petitions and polls', 'Keeps law in line with social attitudes', 'Volatile, poorly informed or hostile to minorities'],
  ];
  F('05-influences-evaluated', 'Five influences on Parliament, weighed', '', [
    (y) => table(y, [
      { w: 0.75, head: 'Influence' },
      { w: 1.25, head: 'How it works' },
      { w: 1, head: '+ Advantage', hfill: C.tealLight },
      { w: 1, head: '− Disadvantage', hfill: C.cream },
    ], inf, { size: 15, hsize: 17, pad: 12 }),
  ],
  'A table of five influences, each with how it works, an advantage and a disadvantage: pressure groups (insider and outsider, Gina Martin, Finn’s Law), the media, political parties and manifestos, the Law Commission (Fraud Act 2006) and public opinion.',
  'Each influence needs an example plus its own advantage and disadvantage.', H2.inf);
}

// 06 Supremacy and limits
F('06-supremacy-limits', 'Parliamentary supremacy and its limits', '', [
  (y) => {
    const r = row(y + 46, [
      { title: 'Can make or unmake any law' },
      { title: 'Cannot bind its successors', body: 'Later Act impliedly repeals: *Vauxhall Estates* (1932); *Ellen Street Estates* (1934)' },
      { title: 'No court can set aside an Act', body: '*British Railways Board v Pickin* (1974)' },
    ], { x: 46, w: 808, gap: 12, vcenter: false, card: { size: 15, tsize: 18, pad: 14, bfill: C.ink } });
    const H = 46 + r.h + 16;
    return { s: `<rect x="30" y="${y}" width="840" height="${H}" rx="14" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + T(50, y + 30, 'THE DOCTRINE', { size: 15, weight: 700, fill: C.tealDark }) + r.s, h: H };
  },
  (y) => ({ s: T(450, y + 4, 'limited by', { size: 18, weight: 700, anchor: 'middle', fill: C.rust }), h: 6 }),
  (y) => grid(y, [
    { kicker: 'CONSTITUTIONAL STATUTES', body: '*Thoburn* (2002): e.g. European Communities Act 1972, HRA 1998 need express repeal' },
    { kicker: 'HUMAN RIGHTS ACT 1998', body: 's3 compatible reading; s4 declaration; s19 statement of compatibility' },
    { kicker: 'DEVOLUTION', body: 'Scotland Act, Government of Wales Act, Northern Ireland Act 1998. Sewel Convention not enforceable: *Miller* (2017)' },
    { kicker: 'EU MEMBERSHIP (HISTORICAL)', body: '*Factortame*: courts could disapply conflicting Acts; removed by withdrawal' },
    { kicker: 'PRACTICAL AND POLITICAL', body: 'Electorate, public opinion and international obligations' },
  ], 3, { gap: 12, vgap: 12, vcenter: false, card: { size: 15, pad: 14, bfill: C.ink, kfill: C.rust } }),
],
'The doctrine has three parts: Parliament can make or unmake any law; it cannot bind its successors (Vauxhall Estates; Ellen Street Estates); and no court can set aside an Act (Pickin). Limits: constitutional statutes (Thoburn), the Human Rights Act sections 3, 4 and 19, devolution and the unenforceable Sewel Convention (Miller), historical EU membership (Factortame), and practical and political limits.',
'Legally supreme, but constrained by constitutional statutes, the HRA, devolution and politics.', H2.sup, { gap: 18 });

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
