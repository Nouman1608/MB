import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-law-7162-the-legal-system-legal-personnel-and-the-judiciary';
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
  prof: '## The three branches of the profession',
  reg: '## Regulation of legal personnel',
  types: '## Types of judge',
  role: '## The role of judges',
  ind: '## Judicial independence',
};

// 01 Three branches compared
F('01-three-branches', 'Three branches of the legal profession', '', [
  (y) => table(y, [
    { w: 0.72, head: '' },
    { w: 1.1, head: 'Solicitors' },
    { w: 1.1, head: 'Barristers' },
    { w: 1.1, head: 'Chartered legal executives' },
  ], [
    ['Typical work', 'First point of contact; advice, drafting, conveyancing, wills, family, commercial, litigation', 'Specialist advocacy and written opinions; drafting court documents', 'Specialist work in one area, such as conveyancing, family, probate or litigation'],
    ['Instructed by', 'Clients directly', 'Usually a solicitor; some public access work', 'Clients, usually within a firm'],
    ['Rights of audience', 'Magistrates’ and county courts; higher courts with a higher rights qualification', 'All courts', 'Limited; extended with further qualification'],
    ['Organisation', 'Firms, partnerships, companies, or in-house', 'Mostly self-employed in chambers; some employed (e.g. CPS)', 'Employed, often in solicitors’ firms; can become partners'],
    ['Professional body', 'Law Society', 'Bar Council; four Inns of Court', 'CILEx'],
  ], { size: 16, hsize: 18, cellFill: (ri, ci) => (ri === 2 && ci === 2 ? C.cream : null) }),
],
'A table comparing solicitors, barristers and chartered legal executives by typical work, who instructs them, rights of audience, how they are organised and their professional body (Law Society; Bar Council and four Inns of Court; CILEx). Only barristers have rights of audience in all courts as standard.',
'Solicitors advise and prepare; barristers specialise in advocacy; legal executives specialise early.', H2.prof);

// 02 Training routes
F('02-training-routes', 'Routes into the profession', '', [
  (y) => {
    const lane = (yy, title, fill, edge, stepsL, foot) => {
      const lab = T(40, yy + 22, title, { size: 19, weight: 700 });
      const r = row(yy + 36, stepsL.map((st) => ({ title: st })), { x: 30, w: 840, gap: 34, arrows: true, card: { tsize: 16, pad: 12, align: 'middle', fill, edge } });
      const f = foot ? T(40, yy + 36 + r.h + 24, foot, { size: 16, fill: C.muted }) : '';
      return { s: lab + r.s + f, h: 36 + r.h + (foot ? 32 : 0) };
    };
    const a = lane(y, 'Solicitors (standard route since September 2021)', C.tealLight, C.tealDark, ['Degree or equivalent', 'SQE1 and SQE2', 'Two years’ qualifying work experience', 'Character and suitability']);
    const b = lane(y + a.h + 24, 'Barristers', C.cream, C.olive, ['Degree', 'Vocational Bar course', 'Join an Inn of Court', 'Call to the Bar', 'Pupillage'], 'Inns: Lincoln’s Inn, Gray’s Inn, Inner Temple, Middle Temple. Senior barristers may become King’s Counsel.');
    const c = lane(y + a.h + 24 + b.h + 24, 'Chartered legal executives', C.panel, C.panelEdge, ['CILEx qualifications', 'Qualifying employment', 'Specialise from the start'], 'No degree needed: often described as widening access. Many later qualify as solicitors.');
    return { s: a.s + b.s + c.s, h: a.h + 24 + b.h + 24 + c.h };
  },
],
'Three qualification routes. Solicitors: degree or equivalent, SQE1 and SQE2, two years’ qualifying work experience, and character and suitability. Barristers: degree, vocational Bar course, membership of an Inn of Court, call to the Bar and pupillage. Chartered legal executives: CILEx qualifications with qualifying employment, specialising from the start and needing no degree.',
'Three routes in; only the legal executive route needs no degree.', H2.prof);

// 03 Regulation map
F('03-regulation-map', 'Who regulates lawyers?', 'Who sets the rules, who investigates misconduct, where a client complains', [
  (y) => {
    const top = card(250, y, 400, { kicker: 'LEGAL SERVICES ACT 2007', title: 'Legal Services Board', body: 'Oversees front-line regulators; requires them to be independent of the professional bodies', align: 'middle', fill: C.mustard, edge: C.ink, size: 16, tsize: 20, pad: 16, bfill: C.ink, kfill: C.ink });
    const ya = y + top.h + 46;
    const r = row(ya, [
      { kicker: 'SOLICITORS', title: 'Solicitors Regulation Authority', body: 'Sets standards, authorises firms, investigates misconduct', fill: C.tealLight, edge: C.tealDark },
      { kicker: 'BARRISTERS', title: 'Bar Standards Board', body: 'BSB Handbook and core duties; brings disciplinary charges', fill: C.tealLight, edge: C.tealDark },
      { kicker: 'LEGAL EXECUTIVES', title: 'CILEx Regulation', body: 'The regulatory arm of CILEx', fill: C.tealLight, edge: C.tealDark },
    ], { gap: 16, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink } });
    const ar = r.xs.map((x, i) => arrow(450 + (i - 1) * 110, y + top.h + 4, x + r.ws[i] / 2, ya - 4)).join('');
    const yb = ya + r.h + 40;
    const r2 = row(yb, [
      { title: 'Solicitors Disciplinary Tribunal', body: 'Fine, suspend or strike off the roll', fill: C.panel, edge: C.rust },
      { title: 'Independent disciplinary tribunals', body: 'Reprimand, fine, suspend or disbar', fill: C.panel, edge: C.rust },
    ], { x: 30, w: 554, gap: 16, vcenter: false, card: { size: 16, tsize: 17, pad: 16, bfill: C.ink } });
    const ar2 = [0, 1].map((i) => arrow(r.xs[i] + r.ws[i] / 2, ya + r.h + 4, r2.xs[i] + r2.ws[i] / 2, yb - 4, { color: C.rust, marker: 'ahR', w: 3 })).join('') + T(r.xs[0] + r.ws[0] / 2 + 16, ya + r.h + 28, 'serious cases', { size: 15, fill: C.rust, weight: 600 });
    const yc = yb + r2.h + 22;
    const r3 = row(yc, [
      { kicker: 'SERVICE COMPLAINTS', title: 'Legal Ombudsman', body: 'Any regulated lawyer, after the firm’s own procedure: apology, refund or compensation', fill: C.cream, edge: C.olive },
      { kicker: 'NEGLIGENCE', title: 'Sue the lawyer', body: 'Advocates’ immunity (*Rondel v Worsley*, 1969) removed in *Arthur JS Hall v Simons* (2000)', fill: C.cream, edge: C.olive },
    ], { gap: 16, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink } });
    return { s: top.s + ar + r.s + ar2 + r2.s + r3.s, h: yc + r3.h - y };
  },
],
'The Legal Services Board, created by the Legal Services Act 2007, oversees three front-line regulators: the Solicitors Regulation Authority, the Bar Standards Board and CILEx Regulation. Serious solicitor cases go to the Solicitors Disciplinary Tribunal; barristers face independent disciplinary tribunals. Clients complain about service to the Legal Ombudsman, and can sue in negligence since Hall v Simons removed advocates’ immunity.',
'Misconduct goes to the regulators; poor service goes to the Legal Ombudsman.', H2.reg);

// 04 Types of judge
F('04-types-of-judge', 'Types of judge', 'Lord Chief Justice: head of the judiciary of England and Wales (CRA 2005)', [
  (y) => {
    const rowsJ = [
      ['Justices of the Supreme Court', 'Final appeals on points of law of general public importance', C.mustard, 1],
      ['Lord and Lady Justices of Appeal', 'Court of Appeal, Civil and Criminal Divisions', C.mustard, 1],
      ['High Court judges', 'King’s Bench, Chancery, Family; most serious Crown Court cases', C.mustard, 1],
      ['Circuit judges', 'Crown Court and County Court', C.tealLight, 0],
      ['Recorders', 'Part-time, Crown Court and County Court; often practising lawyers', C.tealLight, 0],
      ['District judges', 'County Court, including small claims', C.tealLight, 0],
      ['District judges (magistrates’ courts)', 'Summary criminal cases, sitting alone', C.tealLight, 0],
    ];
    let s = ''; const h = 58, gap = 8;
    rowsJ.forEach(([a, b, f], i) => {
      const yy = y + i * (h + gap) + (i >= 3 ? 18 : 0);
      s += `<rect x="150" y="${yy}" width="720" height="${h}" rx="10" fill="${f === C.mustard ? C.cream : C.panel}" stroke="${f === C.mustard ? C.olive : C.panelEdge}" stroke-width="2"/>`;
      s += T(170, yy + 25, a, { size: 18, weight: 700 }) + T(170, yy + 47, b, { size: 16, fill: C.muted });
    });
    const sup = 3 * (h + gap) - gap, inf = 4 * (h + gap) - gap;
    s += `<rect x="30" y="${y}" width="106" height="${sup}" rx="12" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + T(83, y + sup / 2 + 6, 'SUPERIOR', { size: 17, weight: 700, anchor: 'middle' });
    const yi = y + sup + gap + 18;
    s += `<rect x="30" y="${yi}" width="106" height="${inf}" rx="12" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + T(83, yi + inf / 2 + 6, 'INFERIOR', { size: 17, weight: 700, anchor: 'middle' });
    return { s, h: yi + inf - y };
  },
  (y) => note(y, '', 'The Lord Chief Justice presides over the Criminal Division of the Court of Appeal; the **Master of the Rolls** heads the Civil Division.', { size: 16, align: 'middle', fill: C.panel, edge: C.panelEdge }),
],
'Judges listed from the top. Superior judges: Justices of the Supreme Court, Lord and Lady Justices of Appeal, and High Court judges. Inferior judges: circuit judges, recorders (part-time), district judges and district judges (magistrates’ courts). The Lord Chief Justice heads the judiciary and the Criminal Division; the Master of the Rolls heads the Civil Division.',
'Superior judges sit in the senior courts; inferior judges handle most everyday cases.', H2.types);

// 05 Roles of judges
F('05-role-of-judges', 'What judges do', '', [
  (y) => row(y, [
    { kicker: 'CIVIL COURTS', title: 'Decide facts and law', body: ['Manage cases under the Civil Procedure Rules', 'Almost all cases tried without a jury', 'Give reasoned judgments', 'Award damages or injunctions'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'CRIMINAL COURTS', title: 'Control the trial', body: ['Rule on law and admissibility of evidence', 'Sum up and direct the jury on the law', 'May direct an acquittal if no case to answer; **never** to convict', 'Pass sentence'], bullets: true, fill: C.cream, edge: C.olive },
    { kicker: 'APPEAL COURTS', title: 'Shape the law', body: ['Correct errors', 'Interpret statutes', 'Develop the common law through precedent'], bullets: true },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink, gap: 5 } }),
  (y) => table(y, [{ w: 1, head: 'Civil judge' }, { w: 2.2, head: 'Typical cases' }], [
    ['District judges', 'Small claims and many fast-track cases'],
    ['Circuit judges', 'Larger County Court cases'],
    ['High Court judges', 'The highest-value and most complex claims'],
  ], { size: 16, hsize: 17 }),
],
'Three columns. Civil judges manage cases under the Civil Procedure Rules, decide facts and law without a jury and award remedies. Crown Court judges rule on law and evidence, sum up, direct the jury, may direct an acquittal but never a conviction, and sentence. Appeal judges correct errors, interpret statutes and develop precedent. A table shows which civil judges hear small claims, larger County Court cases and complex High Court claims.',
'Civil judges decide the case; criminal judges guide the jury; appeal judges shape the law.', H2.role);

// 06 Pillars of independence
F('06-independence-pillars', 'How judicial independence is achieved', '', [
  (y) => {
    const roof = `<path d="M50,${y + 80} L450,${y} L850,${y + 80} Z" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>` + T(450, y + 64, 'Judicial independence', { size: 23, weight: 700, anchor: 'middle' });
    const beam = `<rect x="50" y="${y + 80}" width="800" height="16" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>`;
    const P = [
      ['Security of tenure', 'Superior judges removed only by the monarch on an address of both Houses'],
      ['Immunity from suit', 'Acts in judicial capacity in good faith: *Sirros v Moore* (1975)'],
      ['Independence from the Executive', 'CRA 2005 s3; JAC appointments; Supreme Court from 2009'],
      ['Financial security', 'Salaries from the Consolidated Fund, no annual vote'],
      ['Political neutrality', 'Cannot sit in the Commons; no party politics'],
    ];
    const pw = 150, gap = 12, x0 = 50 + (800 - (5 * pw + 4 * gap)) / 2;
    let s = ''; const ph = 215;
    P.forEach(([a, b], i) => {
      const x = x0 + i * (pw + gap), hl = i < 3;
      s += `<rect x="${x}" y="${y + 96}" width="${pw}" height="${ph}" fill="${hl ? C.tealLight : C.panel}" stroke="${C.ink}" stroke-width="2.5"/>`;
      s += para(x + pw / 2, y + 128, a, pw - 20, { size: 17, weight: 700, anchor: 'middle', fill: C.ink, lh: 21 }).s;
      s += para(x + pw / 2, y + 200, b, pw - 22, { size: 15, anchor: 'middle', fill: C.ink, lh: 19 }).s;
    });
    const base = `<rect x="50" y="${y + 96 + ph}" width="800" height="16" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>`;
    const fy = y + 96 + ph + 16;
    const found = `<rect x="30" y="${fy}" width="840" height="82" rx="10" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + T(450, fy + 30, 'WHY: decide without pressure from ministers, Parliament, the parties or the media', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(450, fy + 60, 'Rule of law  ·  Separation of powers  ·  Article 6 ECHR fair hearing  ·  Public confidence', { size: 17, anchor: 'middle' });
    return { s: roof + beam + s + base + found, h: fy + 82 - y };
  },
  (y) => note(y, '', '**Careful:** inferior judges can be removed for incapacity or misbehaviour by the Lord Chancellor with the agreement of the Lord Chief Justice.', { size: 16, align: 'middle' }),
],
'A building whose roof is judicial independence, held up by five pillars: security of tenure, immunity from suit (Sirros v Moore), independence from the Executive (CRA 2005 s3, the JAC, the Supreme Court), financial security and political neutrality. Its foundation is the reasons for independence: the rule of law, separation of powers, the Article 6 right to a fair hearing and public confidence. The three specification methods are highlighted.',
'Five methods hold up independence; the rule of law is why it matters.', H2.ind);

// 07 Independence in action / impartiality
F('07-independence-impartiality', 'Independence and impartiality', '', [
  (y) => row(y, [
    { kicker: 'INDEPENDENCE', title: 'Freedom from outside pressure', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'IMPARTIALITY', title: 'No bias in a particular case', fill: C.cream, edge: C.olive },
  ], { gap: 16, card: { tsize: 20, pad: 18, align: 'middle' } }),
  (y) => {
    const xs = [30, 458], w = 412;
    const a = card(30, y, w, { kicker: 'R (MILLER) v SECRETARY OF STATE (2017)', body: 'Government needed an Act of Parliament to give notice of withdrawal from the EU', size: 16, pad: 16, bfill: C.ink });
    const b = card(30, y + a.h + 12, w, { kicker: 'R (MILLER) v THE PRIME MINISTER (2019)', body: 'Prorogation of Parliament held unlawful', size: 16, pad: 16, bfill: C.ink });
    const tot = a.h + 12 + b.h;
    const c = card(458, y, w, { kicker: 'RE PINOCHET (1999)', title: 'Own earlier decision set aside', body: 'Lord Hoffmann had links with Amnesty International, an intervener: justice must be seen to be done', size: 16, tsize: 18, pad: 16, bfill: C.ink, minH: tot, vcenter: true });
    return { s: a.s + b.s + c.s, h: tot };
  },
  (y) => note(y, '', 'Both Miller decisions went against the government of the day.', { size: 17, align: 'middle', fill: C.panel, edge: C.panelEdge }),
],
'Independence is freedom from outside pressure; impartiality is the absence of bias in a particular case. The Supreme Court ruled against the government in R (Miller) 2017 (an Act was needed to give notice of EU withdrawal) and R (Miller) 2019 (prorogation unlawful). In Re Pinochet the House of Lords set aside its own decision because of Lord Hoffmann’s links with Amnesty International.',
'The Miller cases show independence; Pinochet shows impartiality.', H2.ind);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
