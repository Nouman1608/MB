import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-dp-language-b-conceptual-understanding';
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
    if (lines[lines.length - 1].length && cur + sp + ww > width) { lines.push([]); cur = 0; lines[lines.length - 1].push({ ...k, sp: false }); cur = ww; }
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

const H2 = {
  five: '## The five concepts',
  reg: '## Register and tone',
  w1: '## Worked example 1: reading a text through the five concepts',
  w2: '## Worked example 2: one message, three audiences',
  w3: '## Worked example 3: decoding a writing task',
  p2: '## Using the concepts in Paper 2 and the oral',
};

// 01 Five concepts around a text
F('01-five-concepts', 'Five concepts behind every text', 'Ask these questions of anything you read or write', [
  (y) => {
    const o = { gap: 210, card: { size: 17, tsize: 21, kfill: C.tealDark } };
    const r1 = row(y, [
      { kicker: 'CONTEXT', title: 'Where, when, in what medium?', body: 'A printed leaflet, a post or a speech; the culture it comes from.' },
      { kicker: 'AUDIENCE', title: 'Who is it for?', body: 'Friend, stranger, official or a whole community: the writer–reader relationship.' },
    ], o);
    const y2 = y + r1.h + 40;
    const r2 = row(y2, [
      { kicker: 'PURPOSE', title: 'Why does it exist?', body: 'What should the reader know, feel or do? Look for a second purpose.' },
      { kicker: 'MEANING', title: 'What is said, and what is suggested?', body: 'Explicit: stated in words. Implicit: word choice, tone, what is left out.' },
    ], o);
    const cy = y + r1.h + 20, R = 88;
    let s = '';
    for (const [px, py] of [[350, y + r1.h / 2], [550, y + r1.h / 2], [350, y2 + r2.h / 2], [550, y2 + r2.h / 2]])
      s += `<line x1="450" y1="${cy}" x2="${px}" y2="${py}" stroke="${C.ink}" stroke-width="2.5" stroke-dasharray="6 5"/>`;
    s += r1.s + r2.s + `<circle cx="450" cy="${cy}" r="${R}" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` +
      T(450, cy - 4, 'Your', { size: 21, weight: 700, anchor: 'middle' }) + T(450, cy + 22, 'text', { size: 21, weight: 700, anchor: 'middle' });
    const yb = y2 + r2.h;
    s += arrow(450, yb + 6, 450, yb + 46, { w: 4 });
    const v = card(30, yb + 52, 840, { kicker: 'VARIATION', kfill: C.olive, title: 'Language changes with the other four', body: '**Register** (how formal) · **tone** (what attitude) · **medium** (spoken, written, text message) · **regional variety** (vocabulary, pronunciation, some grammar)', fill: C.cream, edge: C.olive, size: 17, tsize: 21, bfill: C.ink });
    return { s: s + v.s, h: yb + 52 + v.h - y };
  },
],
'Four cards around a central circle labelled Your text: context asks where, when and in what medium; audience asks who it is for; purpose asks what the reader should know, feel or do; meaning asks what is said and what is suggested. An arrow leads to variation, how register, tone, medium and regional variety change with the other four.',
'Context, audience, purpose and meaning decide how the language varies.', H2.five);

// 02 Explicit vs implicit meaning
F('02-explicit-implicit', 'What is said, and what is suggested', '', [
  (y) => {
    const s1 = 'Residents are ', s2 = 'reminded', s3 = ' that bins must be inside by 8 p.m.';
    const size = 24, w = tw(s1 + s2 + s3, size, 400), x0 = 450 - w / 2, hx = x0 + tw(s1, size), hw = tw(s2, size, 700);
    let s = panel(30, y, 840, 104) +
      `<rect x="${hx - 6}" y="${y + 32}" width="${hw + 12}" height="40" rx="8" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` +
      `<text x="${x0}" y="${y + 61}" font-size="${size}" fill="${C.ink}">${X(s1)}<tspan font-weight="700">${s2}</tspan>${X(s3)}</text>`;
    const yy = y + 160;
    s += path(`M${hx + hw / 2 - 60},${y + 104} C${hx + hw / 2 - 60},${y + 130} 250,${y + 130} 250,${yy - 8}`, { w: 3, extra: 'marker-end="url(#ah)"' });
    s += path(`M${hx + hw / 2 + 20},${y + 104} C${hx + hw / 2 + 20},${y + 130} 660,${y + 130} 660,${yy - 8}`, { w: 3, stroke: C.olive, extra: 'marker-end="url(#ahO)"' });
    const r = row(yy, [
      { kicker: 'EXPLICIT: STATED IN WORDS', title: 'States a rule', body: 'Bins must be inside by 8 p.m.', fill: C.tealLight, edge: C.tealDark },
      { kicker: 'IMPLICIT: SUGGESTED', kfill: C.olive, title: 'Some people have been breaking it', body: 'The word **reminded** carries the suggestion.', fill: C.cream, edge: C.olive },
    ], { gap: 40, card: { size: 18, tsize: 21, bfill: C.ink } });
    const n = P('Write **this suggests** or **this implies** for anything not stated.', { anchor: 'middle', size: 18, fill: C.ink })(yy + r.h + 24);
    return { s: s + r.s + n.s, h: yy + r.h + 24 + n.h - y };
  },
],
'The sentence Residents are reminded that bins must be inside by 8 p.m. with the word reminded highlighted. Explicitly it states a rule; implicitly the word reminded suggests that some people have been breaking it.',
'One word can carry a meaning the sentence never states.', H2.five);

// 03 Register and tone are separate dials
F('03-register-vs-tone', 'Register and tone are not the same thing', '', [
  (y) => {
    const lw = 400, rx = 450;
    let s = panel(30, y, lw, 380) + T(55, y + 42, 'REGISTER = how formal', { size: 21, weight: 700, fill: C.tealDark });
    const lv = [['Formal', 'Officials, strangers, the public', C.teal], ['Semi-formal', 'Teachers, a school magazine, a club', C.tealLight], ['Informal', 'Friends, family, peers online', C.panel]];
    s += `<line x1="80" y1="${y + 84}" x2="80" y2="${y + 330}" stroke="${C.ink}" stroke-width="4"/>`;
    lv.forEach(([n, a, f], i) => {
      const yy = y + 76 + i * 100;
      s += `<circle cx="80" cy="${yy + 30}" r="13" fill="${f === C.panel ? C.panel : f}" stroke="${C.ink}" stroke-width="3"/>`;
      s += `<rect x="108" y="${yy}" width="300" height="68" rx="10" fill="${f}" stroke="${C.panelEdge}" stroke-width="2"/>`;
      s += T(124, yy + 28, n, { size: 19, weight: 700 }) + T(124, yy + 54, a, { size: 16, fill: C.muted });
    });
    s += T(80, y + 360, 'more formal at the top', { size: 15, fill: C.muted, italic: true });
    s += panel(rx, y, 420, 380) + T(rx + 25, y + 42, 'TONE = what attitude', { size: 21, weight: 700, fill: C.olive });
    const tones = ['urgent', 'reassuring', 'enthusiastic', 'critical', 'sympathetic', 'humorous', 'ironic', 'neutral'];
    let cx = rx + 25, cyy = y + 70;
    tones.forEach((w) => { const c = chip(0, 0, w, { size: 17, weight: 600 }); if (cx + c.w > rx + 400) { cx = rx + 25; cyy += 50; } s += chip(cx, cyy, w, { size: 17, weight: 600, fill: C.cream }).s; cx += c.w + 12; });
    s += para(rx + 25, cyy + 84, 'Tone comes from choices you can point to:', 370, { size: 17, weight: 700 }).s;
    s += tl(rx + 25, cyy + 116, ['• intensifiers ("absolutely")', '• modal verbs ("must" vs "could")', '• punctuation', '• the balance of facts and feelings'].map(X), { size: 17, fill: C.muted }, 25);
    return { s, h: 380 };
  },
  (y) => {
    const r = row(y, [
      { title: 'Formal letter', body: 'can be angry, grateful or cold' },
      { title: 'Text message', body: 'can be cheerful or annoyed' },
    ], { gap: 20, card: { fill: C.tealLight, edge: C.tealDark, size: 18, tsize: 20, align: 'middle', bfill: C.ink } });
    return r;
  },
  (y) => note(y, 'Common error: calling an angry formal complaint "informal".', 'Anger is the tone; the register is still formal.', { align: 'middle' }),
],
'Two panels. Register, how formal a text is, runs from formal (officials, strangers, the public) through semi-formal (teachers, a school magazine, a club) to informal (friends, family, peers online). Tone, the attitude a text shows, includes urgent, reassuring, enthusiastic, critical, sympathetic, humorous, ironic and neutral, and comes from intensifiers, modal verbs, punctuation and the balance of facts and feelings.',
'Register is how formal; tone is what attitude. Any register can carry many tones.', H2.reg);

// 04 Reading the notice through the five concepts
F('04-notice-five-concepts', 'Reading a notice through the five concepts', 'Notice to residents: Riverside Road', [
  (y) => row(y, [
    { kicker: 'CONTEXT', title: 'Printed notice from a local authority', body: 'Before a change to a road' },
    { kicker: 'AUDIENCE', title: 'People who live on or use the road', body: 'No personal link to the writer' },
  ], { gap: 18, card: { size: 17, tsize: 19 } }),
  (y) => {
    const rows = [
      ['"will be closed to motor vehicles"', 'PURPOSE', 'Inform', C.tealLight, C.tealDark],
      ['"Its aim is to reduce air pollution"', 'PURPOSE', 'Justify: a second purpose', C.tealLight, C.tealDark],
      ['"Your views are welcome"', 'PURPOSE', 'Reassure', C.tealLight, C.tealDark],
      ['"trial" … "before any permanent decision"', 'IMPLICIT MEANING', 'The closure may become permanent; the authority expects objections', C.cream, C.olive],
      ['"will be considered", "Residents who require"', 'VARIATION', 'Formal register: passive forms, impersonal phrasing; neutral tone', C.panel, C.ink],
    ];
    let s = T(30, y + 16, 'WORDS IN THE NOTICE', { size: 15, weight: 700, fill: C.muted }) + T(500, y + 16, 'WHAT THEY DO', { size: 15, weight: 700, fill: C.muted });
    let cy = y + 30;
    rows.forEach(([q, k, d, f, e]) => {
      const a = card(30, cy, 410, { body: q, size: 17, bfill: C.ink, bweight: 600, pad: 16, fill: '#ffffff', edge: C.panelEdge });
      const b = card(500, cy, 370, { kicker: k, kfill: e === C.ink ? C.muted : e, body: d, size: 17, bfill: C.ink, pad: 16, fill: f, edge: e === C.ink ? C.panelEdge : e });
      const h = Math.max(a.h, b.h);
      s += card(30, cy, 410, { body: q, size: 17, bfill: C.ink, bweight: 600, pad: 16, minH: h, vcenter: true, italic: true }).s +
        card(500, cy, 370, { kicker: k, kfill: e === C.ink ? C.muted : e, body: d, size: 17, bfill: C.ink, pad: 16, fill: f, edge: e === C.ink ? C.panelEdge : e, minH: h, vcenter: true }).s +
        arrow(446, cy + h / 2, 494, cy + h / 2, { w: 3 });
      cy += h + 12;
    });
    return { s, h: cy - 12 - y };
  },
],
'Context and audience cards sit above five rows linking words in the notice to what they do. Will be closed informs; its aim is to reduce air pollution justifies; your views are welcome reassures; trial and before any permanent decision imply the closure may become permanent; passive and impersonal phrasing make the register formal.',
'Point to the words: each purpose, implication and register choice is visible in the text.', H2.w1);

// 05 One message, three audiences
F('05-three-audiences', 'One message, three audiences', 'Class 12B has built a solar-powered phone-charging bench', [
  (y) => {
    const meter = (n) => (x, yy, w, h) => [0, 1, 2].map((i) => `<rect x="${x + w - 20 - (3 - i) * 26}" y="${yy + 20}" width="20" height="14" rx="3" fill="${i < n ? C.tealDark : C.panel}" stroke="${C.tealDark}" stroke-width="2"/>`).join('');
    const r = row(y, [
      { kicker: 'FORMAL EMAIL', title: 'To the head of school', body: ['*"I am writing on behalf of Class 12B to ask whether we may install…"*', '**Purpose:** request', '**Opening:** formal greeting and title', '**Sentences:** complete, polite conditionals', '**Relationship:** pupil to authority'], extra: meter(3) },
      { kicker: 'SEMI-FORMAL ARTICLE', title: 'To the school magazine', body: ['*"Ever run out of battery before the bus home?"*', '**Purpose:** inform and interest', '**Opening:** question to hook readers', '**Sentences:** mix of question and statement', '**Relationship:** writer to peers'], extra: meter(2) },
      { kicker: 'TEXT MESSAGE', title: 'To a friend', body: ['*"Bench is DONE!! … Come see it tomorrow?"*', '**Purpose:** share news', '**Opening:** none', '**Sentences:** fragments, exclamations', '**Relationship:** friend to friend'], extra: meter(1) },
    ], { gap: 16, vcenter: false, card: { size: 16, tsize: 19, gap: 9, pad: 18 } });
    return r;
  },
  (y) => {
    let s = T(450, y + 20, 'Formality', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
    s += arrow(390, y + 14, 270, y + 14, { color: C.tealDark, marker: 'ahT', w: 3 }) + `<line x1="510" y1="${y + 14}" x2="630" y2="${y + 14}" stroke="${C.tealDark}" stroke-width="3"/>` + T(170, y + 20, 'more formal', { size: 15, fill: C.tealDark, anchor: 'middle' }) + T(720, y + 20, 'less formal', { size: 15, fill: C.tealDark, anchor: 'middle' });
    return { s, h: 26 };
  },
  (y) => note(y, 'The content barely changes; register, tone and structure all move.', 'That is variation: language appropriate to contexts and audiences.', { align: 'middle' }),
],
'Three cards tell the same news about a charging bench. A formal email to the head of school makes a request with a formal greeting and polite conditionals; a semi-formal magazine article informs and interests with a hook question; a text message to a friend shares news in fragments and exclamations. Meters show formality falling from left to right.',
'Same news, three audiences: the register, opening and sentences change to fit each reader.', H2.w2);

// 06 Decoding a writing task
F('06-decoding-a-task', 'Decode the task before you plan', '', [
  (y) => note(y, '', '*"Your town plans to replace its weekly street market with a large supermarket. Write a text for your local newspaper\'s letters page giving your view."*', { fill: C.panel, edge: C.ink, size: 19, bfill: C.ink }),
  (y) => steps(y, [
    { title: 'Context', body: 'A letters page in a local newspaper; a public debate about community life.' },
    { title: 'Audience', body: 'The newspaper\'s readers (adults, local, many undecided) and, indirectly, the town council.' },
    { title: 'Purpose', body: 'To persuade, and to show you understand the other side.' },
    { title: 'Text type', body: 'Letter to the editor: formal opening and closing, a clear position early, reasons with examples.' },
    { title: 'Register and tone', body: 'Formal; firm but polite. Sarcasm would weaken your case with undecided readers.' },
  ], { size: 17, tsize: 19, gap: 10, pad: 14 }),
  (y) => { const a = arrow(450, y - 8, 450, y + 26, { w: 4 }); const c = note(y + 32, 'Only then write the points', ['Small traders and local jobs · the market as a meeting place for older residents', 'Counterpoint: a supermarket offers longer opening hours and lower prices'], { bullets: true }); return { s: a + c.s, h: 32 + c.h }; },
],
'A writing task about replacing a street market with a supermarket is decoded in five numbered steps: context (a newspaper letters page), audience (local readers and the council), purpose (persuade and show the other side), text type (letter to the editor) and register and tone (formal, firm but polite). Only then are the points planned.',
'Extract context, audience, purpose, text type and register before you plan content.', H2.w3);

// 07 Concepts across the components
F('07-concepts-in-components', 'Using the concepts in each component', '', [
  (y) => row(y, [
    { kicker: 'PAPER 1 · WRITING', title: 'Match register to audience', body: ['**SL:** aim first for accuracy and a clear register–audience match.', '**HL:** more complex language and structures, higher-order thinking, a higher word range.'] },
    { kicker: 'PAPER 2 · RECEPTIVE', title: 'Fix text type, audience and purpose first', body: ['Reading 40 marks, listening 25 marks; each 25% of the course.', 'In listening, register is often audible; tone words such as "surprised" or "relieved" often decide an answer.'] },
    { kicker: 'INDIVIDUAL ORAL · 25%', title: 'Treat the stimulus as a text', body: ['**SL:** a visual image. **HL:** an excerpt from a literary work.', 'Who made it, for whom, and why? Saying so moves you from describing to interpreting.'] },
  ], { gap: 16, vcenter: false, card: { size: 16, tsize: 19, gap: 8, pad: 18 } }),
],
'Three cards. Paper 1: match register to audience, with more complex language and a higher word range at HL. Paper 2: reading carries 40 marks and listening 25, each 25 percent, and fixing text type, audience and purpose first speeds reading. Individual oral, 25 percent: treat the visual image (SL) or literary excerpt (HL) as a text with a maker, audience and purpose.',
'The same five concepts are how every component judges your reading, writing and speaking.', H2.p2);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
