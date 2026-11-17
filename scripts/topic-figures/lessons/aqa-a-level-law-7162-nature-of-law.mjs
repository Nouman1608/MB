import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-law-7162-nature-of-law';
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
  rules: '## Legal rules and other rules and norms',
  cc: '## Criminal law and civil law',
  src: '## Sources of law: custom, statute and common law',
  we: '## Worked example: a short-answer question',
};

// 01 Enforceability test
F('01-legal-or-other-rule', 'What makes a rule a legal rule?', 'The decisive feature: enforceability by the state', [
  (y) => row(y, [
    { kicker: 'LEGAL RULES', body: ['Made by a recognised state authority', 'Bind everyone in the jurisdiction', 'Enforced by the state through the courts: punishment, damages, injunctions', 'Change at an identifiable moment', 'Challenged only through legal processes'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'OTHER RULES AND NORMS', body: ['Made by families, clubs, schools, employers, faiths', 'Bind only members, or those who accept them', 'Enforced by disapproval, conscience, exclusion or group penalties', 'Usually change gradually', 'Challenged by leaving or ignoring them'], bullets: true, fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { gap: 18, vcenter: false, card: { size: 16, pad: 18, bfill: C.ink, gap: 6 } }),
  (y) => {
    const head = T(30, y + 20, 'A golf member cheats', { size: 19, weight: 700 });
    const r = row(y + 36, [
      { kicker: 'CLUB RULE', body: 'The club can **expel** the member, but cannot fine or imprison them' },
      { kicker: 'IF IT AMOUNTS TO FRAUD', body: 'The **state’s law** allows a prosecution', fill: C.tealLight, edge: C.tealDark },
    ], { gap: 18, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } });
    return { s: head + r.s, h: 36 + r.h };
  },
  (y) => ({ s: T(30, y + 14, 'The line can move', { size: 19, weight: 700 }), h: 0 }),
  (y) => {
    y += 4;
    const r = row(y, [
      { title: 'Norm: manners', body: 'Not smoking in enclosed workplaces' },
      { title: 'Legal rule: offence', body: 'Health Act 2006 (England)', fill: C.tealLight, edge: C.tealDark },
    ], { arrows: true, gap: 60, card: { size: 16, tsize: 18, pad: 14, align: 'middle', bfill: C.ink } });
    return { s: r.s, h: r.h + 4 };
  },
],
'Legal rules are made by a state authority, bind everyone, are enforced by the courts, change at an identifiable moment and are challenged through legal processes; other rules are made by groups, bind members, are enforced socially and change gradually. A golf club can expel a cheat, but only the state’s law can prosecute fraud. Smoking in enclosed workplaces moved from manners to an offence under the Health Act 2006.',
'Importance or obedience does not make a rule legal; enforcement by the state does.', H2.rules, { gap: 26 });

// 02 Rules, principles, Austin and Hart
F('02-austin-hart', 'Rules, principles and what law is', '', [
  (y) => row(y, [
    { kicker: 'RULE', title: 'Specific', body: 'A speed limit of 30 miles per hour', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'PRINCIPLE', title: 'Broad: guides how rules are applied or developed', body: '“No one may profit from their own wrong”; presumption of innocence. Used when the rules run out.', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { gap: 18, fr: [0.8, 1.2], vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink } }),
  (y) => card(30, y, 840, { kicker: 'JOHN AUSTIN', title: 'Law is a command of the sovereign, backed by a sanction', body: 'Captures enforceability, but struggles with power-granting laws, such as the rules on making a valid will', size: 16, tsize: 18, pad: 16, bfill: C.ink }),
  (y) => {
    let s = `<rect x="30" y="${y}" width="840" height="244" rx="14" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2.5"/>`;
    s += T(50, y + 32, 'H. L. A. HART, THE CONCEPT OF LAW (1961): A UNION OF TWO KINDS OF RULE', { size: 15, weight: 700, fill: C.tealDark });
    const p = card(50, y + 50, 250, { title: 'Primary rules', body: 'Rules of conduct: “do not steal”', size: 16, tsize: 18, pad: 14, bfill: C.ink, fill: C.tealLight, edge: C.tealDark, minH: 120, vcenter: true });
    s += p.s;
    s += T(585, y + 70, 'Secondary rules: rules about rules', { size: 18, weight: 700, anchor: 'middle' });
    const r = row(y + 84, [{ title: 'Recognition', body: 'what counts as law' }, { title: 'Change' }, { title: 'Adjudication' }], { x: 336, w: 520, gap: 10, card: { size: 15, tsize: 17, pad: 12, align: 'middle', fill: C.cream, edge: C.olive, bfill: C.ink } });
    s += r.s + T(315, y + 118, '+', { size: 26, weight: 700, anchor: 'middle' });
    s += para(50, y + 222, 'A school rule is not law: the rule of recognition does not recognise the school as a law-maker.', 800, { size: 16, fill: C.ink, italic: true }).s;
    return { s, h: 244 };
  },
],
'A rule is specific, like a 30 mph limit; a principle is broad, like “no one may profit from their own wrong”, and guides judges when rules run out. Austin saw law as a sovereign’s command backed by a sanction. Hart saw a legal system as primary rules of conduct united with secondary rules of recognition, change and adjudication, so a school rule is not law.',
'Hart’s rule of recognition explains why a school rule is not law.', H2.rules, { gap: 20 });

// 03 One event, two cases
F('03-one-event-two-cases', 'One event, two cases', 'A driver carelessly injures a cyclist', [
  (y) => card(250, y, 400, { title: 'Careless driving injures a cyclist', align: 'middle', fill: C.cream, edge: C.olive, tsize: 19, pad: 16 }),
  (y) => ({ s: arrow(360, y - 18, 230, y + 6) + arrow(540, y - 18, 670, y + 6), h: 6 }),
  (y) => row(y, [
    { kicker: 'CRIMINAL CASE', title: 'Cited as R v the driver', body: ['Brought by the **Crown Prosecution Service** for the state', 'Victim does not control the case', 'Verdict: **guilty** or **not guilty**', 'Court decides the sentence', 'Protects society as a whole'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'CIVIL CLAIM', title: 'The cyclist sues the driver', body: ['Started by the **claimant**, who may settle at any time', 'Claim in negligence for compensation', 'Outcome: **liable** or **not liable**', 'Remedy for the claimant: damages or an injunction', 'Protects private rights'], bullets: true, fill: C.panel, edge: C.tealDark },
  ], { gap: 20, vcenter: false, card: { size: 16, tsize: 19, pad: 18, bfill: C.ink, gap: 6 } }),
  (y) => note(y, '', 'The standards of proof differ, so the driver could be **acquitted** in the criminal court yet found **liable** in the civil one.', { size: 17, align: 'middle' }),
],
'A careless driver who injures a cyclist can face a criminal prosecution by the Crown Prosecution Service, with a verdict of guilty or not guilty and a sentence decided by the court, and a separate civil claim in negligence by the cyclist, who decides whether to sue and may settle, with an outcome of liable or not liable and damages. Because the standards of proof differ, the outcomes can differ.',
'Same facts, two cases, different language and possibly different results.', H2.cc, { gap: 22 });

// 04 Custom tests
F('04-custom-tests', 'When is a local custom legally binding?', 'Every test must be met; successful claims are now rare', [
  (y) => row(y, [
    { kicker: '1', title: 'Since time immemorial', body: 'Fixed by law at 1189', fill: C.cream, edge: C.olive },
    { kicker: '2', title: 'Peaceably, openly, as of right', body: 'Not by permission' },
    { kicker: '3', title: 'Reasonable and certain', body: 'As to the locality and who benefits' },
    { kicker: '4', title: 'Consistent with statute', body: '' },
  ], { gap: 12, vcenter: false, card: { size: 15, tsize: 17, pad: 14, bfill: C.ink } }),
  (y) => row(y, [
    { kicker: '✓ MERCER v DENNE (1905)', body: 'Fishermen’s customary right to dry nets on private land by the beach', fill: C.tealLight, edge: C.tealDark },
    { kicker: '✗ SIMPSON v WELLS (1872)', body: 'Stall at a fair: traced only to 14th-century “statute sessions”, so **not time immemorial**', kfill: C.rust, edge: C.rust },
    { kicker: '✗ WOLSTANTON (1940)', body: 'Lord of the manor taking minerals without compensation: **unreasonable**', kfill: C.rust, edge: C.rust },
  ], { gap: 12, vcenter: false, card: { size: 15, pad: 15, bfill: C.ink } }),
],
'Four tests for a local custom: existence since time immemorial (1189); exercise peaceably, openly and as of right; reasonableness and certainty; and consistency with statute. Mercer v Denne succeeded (drying nets); Simpson v Wells failed on time immemorial; Wolstanton failed as unreasonable.',
'A custom must pass all four tests, and most modern claims fail.', H2.src, { gap: 20 });

// 05 Ranking of sources
F('05-sources-ranking', 'How the sources of law rank', '', [
  (y) => {
    const lv = [
      ['STATUTE', 'Acts of Parliament, and delegated legislation within its powers. Highest, because of parliamentary supremacy', C.mustard, 560],
      ['COMMON LAW', 'Judge-made, through cases and precedent. Murder is a common law offence; negligence from *Donoghue v Stevenson* (1932)', C.tealLight, 680],
      ['CUSTOM', 'Only if it passes every test, and only locally', C.panel, 800],
    ];
    let s = '', cy = y;
    lv.forEach(([n, b, f, w], i) => {
      const x = 450 - w / 2;
      const c = card(x, cy, w, { title: n, body: b, align: 'middle', size: 16, tsize: 20, pad: 16, bfill: C.ink, fill: f, edge: C.ink, minH: 100, vcenter: true });
      s += c.s;
      cy += c.h;
      if (i < 2) { s += arrow(450, cy + 6, 450, cy + 40, { w: 4 }) + T(466, cy + 30, 'overrides', { size: 16, weight: 700, fill: C.rust }); cy += 46; }
    });
    return { s, h: cy - y };
  },
  (y) => note(y, 'Example', 'The Law Reform (Year and a Day Rule) Act 1996 abolished the common law rule that a death more than a year and a day after the act could not be murder.', { size: 16 }),
],
'Statute, including delegated legislation within its powers, is highest because of parliamentary supremacy and overrides the common law, which is made by judges through precedent (murder; Donoghue v Stevenson). The common law overrides custom, which survives only locally if every test is met. Example: the Law Reform (Year and a Day Rule) Act 1996 abolished a common law rule.',
'Statute beats common law; common law beats custom.', H2.src, { gap: 20 });

// 06 Short answer anatomy
F('06-short-answer-anatomy', 'A short answer in four moves', 'Explain the difference between a legal rule and a moral or social rule', [
  (y) => steps(y, [
    { kicker: 'SOURCE AND SCOPE', title: 'Made by a state authority; binds everyone', body: 'e.g. Parliament' },
    { kicker: 'ENFORCEABILITY', title: 'Enforced by the state through the courts', body: 'Sanctions such as a fine or imprisonment' },
    { kicker: 'CONTRAST', title: 'A club’s dress code binds only members', body: 'Disapproval or expulsion, not a court-imposed sanction' },
    { kicker: 'EXAMPLE: THE LINE CAN MOVE', title: 'Smoking in enclosed workplaces', body: 'Became an offence under the Health Act 2006' },
  ], { size: 16, tsize: 18, gap: 10, pad: 14, highlight: 3 }),
],
'The model answer in four moves: the source and scope of a legal rule, its enforceability by the state, a contrast with a club’s dress code, and an example of a social rule becoming law under the Health Act 2006.',
'Name a feature, explain it, contrast it, then ground it in an example.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
