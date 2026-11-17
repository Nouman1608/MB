import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-law-9084-elements-of-a-crime';
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
  ar: '## 2.1.1 Actus reus',
  mr: '## 2.1.2 Mens rea',
  we: '## Worked example',
};

// 01 Parts of actus reus
F('01-actus-reus-parts', 'What the actus reus can be made of', 'Every element of the offence other than the mental element', [
  (y) => row(y, [
    { kicker: 'CONDUCT', title: 'The act itself', body: 'Appropriating property in theft' },
    { kicker: 'RESULT', title: 'A consequence that must follow', body: 'Damage in criminal damage' },
    { kicker: 'CIRCUMSTANCES', title: 'Surrounding facts', body: 'Property “belonging to another”' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, bfill: C.muted, fill: C.tealLight, edge: C.tealDark } }),
  (y) => row(y, [
    { kicker: 'MUST BE VOLUNTARY', title: 'Involuntary movement is not an act', body: '*Hill v Baxter* (1958): a driver attacked by a swarm of bees', fill: C.cream, edge: C.olive },
    { kicker: 'EXCEPTION: STATE OF AFFAIRS', kfill: C.rust, title: '“Being found”', body: ['*R v Larsonneur* (1933): brought into the UK against her will', '*Winzar v Chief Constable of Kent* (1983): placed on the highway by police', 'Criticised as liability without real fault'], gap: 4 },
  ], { gap: 16, vcenter: false, card: { size: 16, tsize: 18, bfill: C.ink } }),
],
'Three cards show the actus reus as conduct, a result or circumstances, with the lesson’s examples. Below, the conduct must be voluntary (Hill v Baxter, the swarm of bees), except in state of affairs offences such as Larsonneur and Winzar, which are criticised as liability without real fault.',
'Conduct, result and circumstances; voluntary, except in state of affairs cases.', H2.ar);

// 02 Omissions duties
F('02-omission-duties', 'No liability for omissions, unless there is a duty', '', [
  (y) => note(y, '', '**General rule:** no liability for failing to act, even where a moral duty exists.', { size: 18, align: 'middle' }),
  (y) => grid(y, [
    { kicker: 'STATUTE', title: 'Road Traffic Act 1988', body: 'Failing to provide a breath specimen' },
    { kicker: 'CONTRACT', title: 'R v Pittwood (1902)', body: 'Level-crossing keeper left the gate open; a cart was hit by a train' },
    { kicker: 'PUBLIC OFFICE', title: 'R v Dytham (1979)', body: 'Police officer watched a man being beaten and did nothing' },
    { kicker: 'ASSUMING CARE', title: 'R v Stone and Dobinson (1977)', body: 'Couple took in a sick relative and failed to get help' },
    { kicker: 'SPECIAL RELATIONSHIP', title: 'R v Gibbins and Proctor (1918)', body: 'Father and partner starved his child' },
    { kicker: 'CREATING DANGER', title: 'R v Miller (1983)', body: 'Squatter started a fire accidentally and left. Extended in *R v Evans* (2009): supplied heroin, then failed to get help', fill: C.cream, edge: C.olive },
  ], 3, { gap: 14, vgap: 14, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink } }),
  (y) => row(y, [
    { kicker: 'WITHDRAWING TREATMENT', body: '*Airedale NHS Trust v Bland* (1993): an omission, lawful because continued treatment was no longer in the patient’s best interests.' },
    { kicker: 'EVALUATION', body: 'Protects autonomy and avoids vague duties, but can let morally blameworthy bystanders escape liability.', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 14, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } }),
],
'The general rule of no liability for omissions, then six legal duties to act with their cases: statute (Road Traffic Act 1988), contract (Pittwood), public office (Dytham), voluntary assumption of care (Stone and Dobinson), special relationship (Gibbins and Proctor) and creating a dangerous situation (Miller, extended in Evans). Bland treats withdrawing treatment as a lawful omission.',
'An omission is criminal only where the defendant was under a legal duty to act.', H2.ar);

// 03 Causation
{
  F('03-causation-chain', 'Causation: from act to result', 'Where the offence needs a result, prove both kinds', [
    (y) => stack(y, [
      { kicker: 'FACTUAL CAUSATION', title: 'But for the act, would the result have happened?', body: '*R v White* (1910): mother died of a heart attack before the poison worked; not murder (attempt only)', fill: C.tealLight, edge: C.tealDark },
      { kicker: 'LEGAL CAUSATION', title: 'An operating and substantial cause, more than minimal', body: 'Not necessarily the only cause: *R v Smith* (1959), the wound was still operating', fill: C.tealLight, edge: C.tealDark },
    ], { arrows: true, card: { size: 16, tsize: 19, bfill: C.ink, align: 'middle' } }),
    (y) => ({ s: T(450, y + 10, 'HAS AN INTERVENING ACT BROKEN THE CHAIN?', { size: 16, weight: 700, anchor: 'middle', fill: C.muted }), h: 10 }),
    (y) => table(y, [
      { w: 0.75, head: 'Intervening act' },
      { w: 1.6, head: 'Chain NOT broken', hfill: C.teal },
      { w: 1.35, head: 'Chain broken', hfill: C.mustard },
    ], [
      ['Third party', '*R v Pagett* (1983): police returning fire was a reasonable response', ''],
      ['Medical treatment', '*R v Cheshire* (1991): negligent treatment, not so independent and potent as to make the wound insignificant', '*R v Jordan* (1956): “palpably wrong” treatment of an almost healed wound'],
      ['Victim’s own act', '*R v Roberts* (1971): jumping from the car was foreseeable, not “so daft”', '*R v Kennedy (No 2)* (2007): free, deliberate and informed self-injection'],
    ], { size: 16, hsize: 17 }),
    (y) => note(y, 'Thin skull rule', 'Take the victim as you find them: *R v Blaue* (1975), refusing a blood transfusion on religious grounds did not break the chain.', { size: 16 }),
  ],
  'Causation as a chain: factual causation by the but for test (White), then legal causation as an operating and substantial cause (Smith). A table shows when intervening acts break the chain: not by a reasonable third-party response (Pagett), negligent treatment (Cheshire) or a foreseeable reaction (Roberts); broken by palpably wrong treatment (Jordan) or a free, deliberate and informed act (Kennedy). The thin skull rule applies (Blaue).',
  'But for, then operating and substantial, then ask whether anything broke the chain.', H2.ar);
}

// 04 Oblique intention timeline
{
  const cases = [
    ['1985', 'Moloney', 'Foresight of consequences is only evidence of intention'],
    ['1986', 'Hancock and Shankland', 'The greater the probability, the more likely it was foreseen and intended'],
    ['1986', 'Nedrick', 'The “virtual certainty” test'],
    ['1998', 'Woollin', 'Virtual certainty barring some unforeseen intervention, AND the defendant appreciated it'],
    ['2003', 'Matthews and Alleyne', 'A rule of evidence: the jury may find intention but is not obliged to'],
  ];
  F('04-oblique-intention', 'How oblique intention developed', 'A consequence that was a by-product, not the aim', [
    (y) => {
      const lx = 120; let s = '', cy = y;
      const items = cases.map(([yr, name, body], i) => {
        const c = card(lx + 50, cy, 870 - lx - 50, { title: `R v ${name} (${yr})`, body, size: 17, tsize: 19, pad: 16, bfill: C.ink, fill: i === 3 ? C.cream : C.panel, edge: i === 3 ? C.olive : C.panelEdge });
        const r = { s: c.s, mid: cy + c.h / 2, yr, i }; cy += c.h + 14; return r;
      });
      s += `<line x1="${lx}" y1="${y + 10}" x2="${lx}" y2="${cy - 24}" stroke="${C.tealDark}" stroke-width="4"/>`;
      items.forEach((it) => { s += it.s + `<circle cx="${lx}" cy="${it.mid}" r="11" fill="${it.i === 3 ? C.mustard : C.teal}" stroke="${C.ink}" stroke-width="3"/>` + `<line x1="${lx + 11}" y1="${it.mid}" x2="${lx + 50}" y2="${it.mid}" stroke="${C.ink}" stroke-width="2.5"/>` + T(lx - 22, it.mid + 7, it.yr, { size: 19, weight: 700, anchor: 'end' }); });
      return { s, h: cy - 14 - y };
    },
    (y) => note(y, '', '**Common mistake:** writing that foresight of virtual certainty *is* intention. It is evidence from which the jury is *entitled* to find it.', { size: 17 }),
  ],
  'A timeline of oblique intention: Moloney (1985) foresight is only evidence; Hancock and Shankland (1986) probability; Nedrick (1986) the virtual certainty test; Woollin (1998) virtual certainty and the defendant’s appreciation of it; Matthews and Alleyne (2003) a rule of evidence, not of law.',
  'Foresight of virtual certainty lets the jury find intention; it does not make it intention.', H2.mr);
}

// 05 Recklessness swing
F('05-recklessness-tests', 'Recklessness: subjective, objective, subjective again', '', [
  (y) => row(y, [
    { kicker: 'SUBJECTIVE', title: 'R v Cunningham (1957)', body: 'Tore a gas meter from a wall; gas seeped next door. Reckless only if he foresaw the risk and took it.', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'OBJECTIVE', kfill: C.rust, title: 'MPC v Caldwell (1982)', body: 'A risk obvious to a reasonable person: convicted those incapable of seeing the risk.' },
    { kicker: 'SUBJECTIVE: TODAY’S LAW', title: 'R v G (2003)', body: 'Boys set fire to newspapers behind a shop; had not foreseen the risk. *Caldwell* overruled.', fill: C.cream, edge: C.olive },
  ], { arrows: true, gap: 40, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink } }),
  (y) => card(30, y, 840, { kicker: 'THE R v G TEST', body: ['**Aware of a risk** that the result will occur, and', 'it is, in the circumstances known to the defendant, **unreasonable to take** that risk.'], size: 18, bfill: C.ink, gap: 4, pad: 20, fill: C.panel, edge: C.ink }),
  (y) => note(y, '', 'Intention is the higher level of fault; recklessness is lower but still needs awareness of risk. Criminal damage (Criminal Damage Act 1971) can be committed intentionally or recklessly.', { size: 16, fill: C.tealLight, edge: C.tealDark }),
],
'Three stages in the test for recklessness: subjective in Cunningham, objective in Caldwell, and subjective again when R v G overruled Caldwell. The R v G test asks whether the defendant was aware of a risk and whether taking it was unreasonable in the circumstances known to them.',
'Since R v G, recklessness again depends on what this defendant foresaw.', H2.mr);

// 06 Jade worked example
F('06-jade-worked-example', 'Worked example: Jade’s brick', '', [
  (y) => card(30, y, 840, { kicker: 'FACTS', body: 'Jade throws a brick at Omar’s car to frighten him, knowing he is inside with the window down. It hits his head. In hospital a doctor gives the wrong drug, which delays his recovery.', size: 17, bfill: C.ink, fill: C.tealLight, edge: C.tealDark }),
  (y) => steps(y, [
    { title: 'Actus reus: conduct and result', body: 'A voluntary throw; the injury and the damage are results.' },
    { title: 'Factual causation', body: 'But for the throw, no injury (*White*).' },
    { title: 'Legal causation', body: 'The head wound is still operating and substantial (*Smith*); the doctor’s error was not so independent and potent (*Cheshire*). Chain unbroken.' },
    { title: 'Intention?', body: 'Aim was to frighten, so no direct intention. Injury likely, but perhaps not a virtual certainty (*Woollin*).' },
    { title: 'Recklessness', body: 'She knew Omar was inside: aware of the risk, and taking it was unreasonable (*R v G*).' },
    { title: 'Conclusion', body: 'Actus reus and mens rea coincide at the throw: at least reckless as to both harms.' },
  ], { highlight: 5, size: 17 }),
],
'The Jade scenario in six steps: voluntary conduct with results; factual causation (White); legal causation unbroken despite the doctor’s error (Smith, Cheshire); no direct intention and doubtful oblique intention (Woollin); recklessness proved (R v G); so actus reus and mens rea coincide at the moment of the throw.',
'Each element in turn, each with an authority, then a conclusion.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
