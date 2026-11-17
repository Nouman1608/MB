import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

// ---- Local layout helpers for AP figures (self-contained; house style only) ----
const X = (s) => String(s).replace(/&(?!amp;|lt;|gt;|#\d+;)/g, '&amp;').replace(/</g, '&lt;');
const T = (x, y, s, o = {}) => t(x, y, X(s), o);
// Inter advance widths (em) for measuring text
const FW = {"r":{" ":0.281,"!":0.288,"\"":0.466,"#":0.633,"$":0.642,"%":0.982,"&":0.644,"'":0.3,"(":0.365,")":0.365,"*":0.501,"+":0.662,",":0.288,"-":0.46,".":0.288,"/":0.36,"0":0.631,"1":0.407,"2":0.61,"3":0.618,"4":0.646,"5":0.608,"6":0.62,"7":0.566,"8":0.619,"9":0.62,":":0.288,";":0.302,"<":0.662,"=":0.662,">":0.662,"?":0.511,"@":0.966,"A":0.69,"B":0.654,"C":0.73,"D":0.722,"E":0.601,"F":0.59,"G":0.746,"H":0.743,"I":0.269,"J":0.571,"K":0.672,"L":0.565,"M":0.903,"N":0.753,"O":0.765,"P":0.639,"Q":0.765,"R":0.644,"S":0.642,"T":0.646,"U":0.744,"V":0.69,"W":0.985,"X":0.682,"Y":0.679,"Z":0.629,"[":0.365,"\\":0.36,"]":0.365,"^":0.471,"_":0.456,"`":0.323,"a":0.562,"b":0.612,"c":0.571,"d":0.612,"e":0.583,"f":0.37,"g":0.613,"h":0.591,"i":0.242,"j":0.242,"k":0.549,"l":0.242,"m":0.876,"n":0.591,"o":0.6,"p":0.612,"q":0.612,"r":0.376,"s":0.528,"t":0.327,"u":0.591,"v":0.562,"w":0.818,"x":0.546,"y":0.562,"z":0.552,"{":0.426,"|":0.333,"}":0.426,"~":0.662,"—":1.0,"–":0.5,"→":0.954,"←":0.954,"…":0.864,"“":0.44,"”":0.44,"‘":0.261,"’":0.261,"é":0.583,"•":0.562,"×":0.662},"b":{" ":0.237,"!":0.338,"\"":0.552,"#":0.649,"$":0.655,"%":1.016,"&":0.672,"'":0.339,"(":0.377,")":0.377,"*":0.559,"+":0.679,",":0.334,"-":0.468,".":0.334,"/":0.388,"0":0.674,"1":0.431,"2":0.63,"3":0.646,"4":0.676,"5":0.639,"6":0.649,"7":0.582,"8":0.651,"9":0.649,":":0.334,";":0.343,"<":0.679,"=":0.679,">":0.679,"?":0.56,"@":1.016,"A":0.747,"B":0.662,"C":0.74,"D":0.722,"E":0.607,"F":0.587,"G":0.75,"H":0.747,"I":0.281,"J":0.584,"K":0.719,"L":0.565,"M":0.932,"N":0.762,"O":0.771,"P":0.648,"Q":0.777,"R":0.657,"S":0.655,"T":0.667,"U":0.732,"V":0.747,"W":1.038,"X":0.738,"Y":0.731,"Z":0.664,"[":0.377,"\\":0.388,"]":0.377,"^":0.487,"_":0.476,"`":0.365,"a":0.581,"b":0.63,"c":0.588,"d":0.63,"e":0.596,"f":0.398,"g":0.632,"h":0.623,"i":0.271,"j":0.271,"k":0.58,"l":0.271,"m":0.913,"n":0.623,"o":0.613,"p":0.63,"q":0.63,"r":0.407,"s":0.56,"t":0.366,"u":0.623,"v":0.6,"w":0.85,"x":0.58,"y":0.602,"z":0.573,"{":0.469,"|":0.372,"}":0.469,"~":0.679,"—":1.0,"–":0.5,"→":0.954,"←":0.954,"…":1.002,"“":0.54,"”":0.532,"‘":0.311,"’":0.311,"é":0.596,"•":0.474,"×":0.679},"s":{" ":0.252,"!":0.321,"\"":0.523,"#":0.644,"$":0.65,"%":1.004,"&":0.663,"'":0.326,"(":0.373,")":0.373,"*":0.54,"+":0.673,",":0.319,"-":0.465,".":0.319,"/":0.379,"0":0.66,"1":0.423,"2":0.623,"3":0.636,"4":0.666,"5":0.629,"6":0.64,"7":0.576,"8":0.64,"9":0.64,":":0.319,";":0.329,"<":0.673,"=":0.673,">":0.673,"?":0.543,"@":0.999,"A":0.728,"B":0.659,"C":0.737,"D":0.722,"E":0.605,"F":0.588,"G":0.749,"H":0.746,"I":0.277,"J":0.58,"K":0.703,"L":0.565,"M":0.922,"N":0.759,"O":0.769,"P":0.645,"Q":0.773,"R":0.652,"S":0.65,"T":0.66,"U":0.736,"V":0.728,"W":1.02,"X":0.72,"Y":0.713,"Z":0.652,"[":0.373,"\\":0.379,"]":0.373,"^":0.481,"_":0.469,"`":0.351,"a":0.574,"b":0.624,"c":0.583,"d":0.624,"e":0.591,"f":0.389,"g":0.625,"h":0.612,"i":0.262,"j":0.262,"k":0.569,"l":0.262,"m":0.9,"n":0.612,"o":0.609,"p":0.624,"q":0.624,"r":0.397,"s":0.549,"t":0.353,"u":0.612,"v":0.587,"w":0.839,"x":0.569,"y":0.588,"z":0.566,"{":0.455,"|":0.359,"}":0.455,"~":0.673,"—":1.0,"–":0.5,"→":0.954,"←":0.954,"…":0.956,"“":0.507,"”":0.501,"‘":0.294,"’":0.294,"é":0.591,"•":0.503,"×":0.673},"i":{" ":0.281,"!":0.288,"\"":0.466,"#":0.633,"$":0.641,"%":0.982,"&":0.689,"'":0.3,"(":0.365,")":0.364,"*":0.501,"+":0.662,",":0.288,"-":0.461,".":0.288,"/":0.36,"0":0.63,"1":0.407,"2":0.61,"3":0.617,"4":0.647,"5":0.606,"6":0.619,"7":0.567,"8":0.617,"9":0.619,":":0.288,";":0.301,"<":0.662,"=":0.662,">":0.662,"?":0.511,"@":0.964,"A":0.69,"B":0.654,"C":0.73,"D":0.721,"E":0.602,"F":0.59,"G":0.746,"H":0.743,"I":0.269,"J":0.571,"K":0.672,"L":0.565,"M":0.903,"N":0.753,"O":0.765,"P":0.639,"Q":0.765,"R":0.644,"S":0.641,"T":0.646,"U":0.744,"V":0.69,"W":0.985,"X":0.682,"Y":0.679,"Z":0.63,"[":0.365,"\\":0.359,"]":0.365,"^":0.471,"_":0.456,"`":0.322,"a":0.614,"b":0.613,"c":0.572,"d":0.613,"e":0.576,"f":0.373,"g":0.613,"h":0.591,"i":0.243,"j":0.242,"k":0.549,"l":0.242,"m":0.876,"n":0.591,"o":0.6,"p":0.613,"q":0.613,"r":0.377,"s":0.527,"t":0.328,"u":0.592,"v":0.562,"w":0.818,"x":0.546,"y":0.562,"z":0.552,"{":0.427,"|":0.333,"}":0.427,"~":0.662,"—":1.001,"–":0.501,"→":0.954,"←":0.954,"…":0.863,"“":0.48,"”":0.48,"‘":0.3,"’":0.3,"é":0.576,"•":0.562,"×":0.662},"bi":{" ":0.237,"!":0.337,"\"":0.552,"#":0.649,"$":0.654,"%":1.016,"&":0.691,"'":0.339,"(":0.377,")":0.373,"*":0.559,"+":0.679,",":0.334,"-":0.468,".":0.334,"/":0.388,"0":0.674,"1":0.432,"2":0.63,"3":0.646,"4":0.677,"5":0.639,"6":0.649,"7":0.582,"8":0.65,"9":0.649,":":0.334,";":0.342,"<":0.679,"=":0.679,">":0.679,"?":0.559,"@":1.015,"A":0.747,"B":0.662,"C":0.74,"D":0.722,"E":0.613,"F":0.587,"G":0.75,"H":0.747,"I":0.281,"J":0.584,"K":0.719,"L":0.565,"M":0.932,"N":0.762,"O":0.771,"P":0.648,"Q":0.771,"R":0.657,"S":0.654,"T":0.668,"U":0.732,"V":0.747,"W":1.038,"X":0.738,"Y":0.731,"Z":0.665,"[":0.377,"\\":0.386,"]":0.377,"^":0.487,"_":0.476,"`":0.365,"a":0.631,"b":0.63,"c":0.588,"d":0.63,"e":0.59,"f":0.41,"g":0.632,"h":0.623,"i":0.271,"j":0.271,"k":0.58,"l":0.271,"m":0.913,"n":0.623,"o":0.614,"p":0.63,"q":0.63,"r":0.408,"s":0.56,"t":0.367,"u":0.623,"v":0.6,"w":0.85,"x":0.58,"y":0.602,"z":0.573,"{":0.469,"|":0.372,"}":0.469,"~":0.679,"—":1.0,"–":0.5,"→":0.954,"←":0.954,"…":1.001,"“":0.581,"”":0.573,"‘":0.351,"’":0.351,"é":0.59,"•":0.474,"×":0.679}};
const tw = (s, size = 17, weight = 400, italic = false) => { const k = weight >= 650 ? (italic ? 'bi' : 'b') : weight >= 550 ? 's' : italic ? 'i' : 'r'; let w = 0; for (const ch of String(s)) w += FW[k][ch] ?? 0.6; return w * size; };
function wrap(s, width, size = 17, weight = 400, italic = false) {
  const out = []; let cur = '';
  for (const w of String(s).split(/\s+/).filter(Boolean)) {
    if (!cur) cur = w; else if (tw(cur + ' ' + w, size, weight, italic) <= width) cur += ' ' + w; else { out.push(cur); cur = w; }
  }
  if (cur) out.push(cur);
  return out;
}
// Wrapped text block; x is left edge (or centre with anchor middle). Returns {s, h}.
function para(x, y, s, width, o = {}) {
  const size = o.size || 17, lh = o.lh || Math.round(size * 1.32), weight = o.weight || 400;
  if (o.bullet) {
    const ind = size * 0.95;
    const w1 = wrap(s, width - ind, size, weight, o.italic);
    return { s: T(x, y, '•', { ...o, weight: 700 }) + w1.map((l, i) => T(x + ind, y + i * lh, l, o)).join(''), h: w1.length * lh };
  }
  const lines = wrap(s, width, size, weight, o.italic);
  return { s: lines.map((l, i) => T(x, y + i * lh, l, o)).join(''), h: lines.length * lh };
}
// Card: panel with optional kicker, title and body (string or array). Returns {s, h}.
function card(x, y, w, o = {}) {
  const pad = o.pad ?? 20, ts = o.tsize ?? 20, bs = o.size ?? 17, mid = o.align === 'middle';
  const tx = mid ? x + w / 2 : x + pad, anchor = mid ? 'middle' : 'start';
  const measure = (y0) => {
    let cy = y0 + pad, inner = '';
    if (o.kicker) { inner += T(tx, cy + 13, o.kicker, { size: 15, weight: 700, anchor, fill: o.kfill || C.tealDark }); cy += 25; }
    if (o.title) { const p = para(tx, cy + ts * 0.8, o.title, w - 2 * pad, { size: ts, weight: 700, anchor, fill: o.tfill || C.ink }); inner += p.s; cy += p.h; }
    if (o.body) {
      const items = Array.isArray(o.body) ? o.body : [o.body];
      if (o.title || o.kicker) cy += 6;
      items.forEach((it, i) => {
        const p = para(tx, cy + bs * 0.8, it, w - 2 * pad, { size: bs, anchor, fill: o.bfill || C.muted, bullet: o.bullets, weight: o.bweight, italic: o.italic });
        inner += p.s; cy += p.h + (i < items.length - 1 ? (o.gap ?? 5) : 0);
      });
    }
    return { inner, h: cy - y0 + pad - 4 };
  };
  let m = measure(y);
  const h = Math.max(o.minH || 0, m.h);
  if (o.vcenter && h > m.h) m = measure(y + (h - m.h) / 2);
  return { s: panel(x, y, w, h, o.fill || C.panel, o.edge || C.panelEdge) + m.inner, h };
}
const cardH = (w, o) => card(0, 0, w, o).h;
// A row of n equal-height cards, optional arrows between. Returns {s, h, xs, w}.
function row(y, items, o = {}) {
  const x0 = o.x ?? 30, W0 = o.w ?? 840, gap = o.gap ?? (o.arrows ? 46 : 18), n = items.length;
  const w = (W0 - gap * (n - 1)) / n;
  const h = Math.max(o.minH || 0, ...items.map((it) => cardH(w, { ...o.card, ...it })));
  let s = ''; const xs = [];
  items.forEach((it, i) => {
    const x = x0 + i * (w + gap); xs.push(x);
    s += card(x, y, w, { vcenter: !(it.kicker || o.card?.kicker), ...o.card, ...it, minH: h }).s;
    if (o.arrows && i < n - 1) s += arrow(x + w + 6, y + h / 2, x + w + gap - 6, y + h / 2, { w: 3.5 });
  });
  return { s, h, xs, w };
}
// Vertical stack of full-width cards with down arrows. Returns {s, h}.
function stack(y, items, o = {}) {
  const x = o.x ?? 30, w = o.w ?? 840, gap = o.gap ?? 40; let s = '', cy = y;
  items.forEach((it, i) => {
    const c = card(x, cy, w, { ...o.card, ...it }); s += c.s; cy += c.h;
    if (i < items.length - 1) { if (o.arrows !== false) s += arrow(x + w / 2, cy + 4, x + w / 2, cy + gap - 6, { w: 3.5 }); cy += gap; }
  });
  return { s, h: cy - y };
}
// Table: cols [{w, head}], rows [[cell strings]]. First column bold by default. Returns {s, h}.
function table(x, y, cols, rows, o = {}) {
  const size = o.size ?? 17, pad = 14, lh = Math.round(size * 1.32), hh = o.headH ?? 50;
  let s = '', cy = y;
  const W = cols.reduce((a, c) => a + c.w, 0);
  s += `<rect x="${x}" y="${y}" width="${W}" height="${hh}" rx="10" fill="${C.ink}"/>`;
  let cx = x; cols.forEach((c) => { s += T(cx + pad, y + hh / 2 + 6, c.head, { size: o.hsize ?? 18, weight: 700, fill: '#ffffff' }); cx += c.w; });
  cy += hh;
  rows.forEach((r, ri) => {
    const cells = r.map((cell, ci) => wrap(cell, cols[ci].w - 2 * pad, size, ci === 0 && o.boldFirst !== false ? 700 : 400, o.italicCols?.includes(ci)));
    const rh = Math.max(...cells.map((l) => l.length)) * lh + 2 * pad - 2;
    s += `<rect x="${x}" y="${cy}" width="${W}" height="${rh}" fill="${o.rowFill?.[ri] || (ri % 2 ? C.panel : '#f8faf9')}" stroke="${C.panelEdge}" stroke-width="2"/>`;
    let ccx = x;
    cells.forEach((lines, ci) => {
      const bold = ci === 0 && o.boldFirst !== false;
      lines.forEach((l, li) => { s += T(ccx + pad, cy + pad + size * 0.85 + li * lh, l, { size, weight: bold ? 700 : 400, fill: ci === 0 ? C.ink : (o.colFill?.[ci] || C.ink), italic: o.italicCols?.includes(ci) }); });
      if (ci > 0) s += `<line x1="${ccx}" y1="${cy}" x2="${ccx}" y2="${cy + rh}" stroke="${C.panelEdge}" stroke-width="2"/>`;
      ccx += cols[ci].w;
    });
    cy += rh;
  });
  return { s, h: cy - y };
}
// Numbered step rows inside one panel. steps: [[title, desc]]. Returns {s, h}.
function steps(x, y, w, items, o = {}) {
  const size = o.size ?? 17, lh = Math.round(size * 1.32), r = o.r ?? 20, gap = o.gap ?? 14;
  let s = '', cy = y;
  items.forEach(([title, desc, hi], i) => {
    const tx = x + 2 * r + 22;
    const tw = wrap(title, w - (tx - x) - 10, o.tsize ?? 19, 700);
    const dw = desc ? wrap(desc, w - (tx - x) - 10, size) : [];
    const h = Math.max(2 * r + 6, tw.length * 25 + dw.length * lh + 8);
    s += badge(x + r + 6, cy + r + 4, r, String(i + 1), hi ? C.mustard : C.cream);
    tw.forEach((l, li) => { s += T(tx, cy + 22 + li * 25, l, { size: o.tsize ?? 19, weight: 700 }); });
    dw.forEach((l, li) => { s += T(tx, cy + 22 + tw.length * 25 + 2 + li * lh, l, { size, fill: C.muted }); });
    cy += h + gap;
  });
  return { s, h: cy - y - gap };
}
// Highlighted chip (cream/olive by default).
const chip = (x, y, w, h, label, o = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 12}" fill="${o.fill || C.cream}" stroke="${o.edge || C.olive}" stroke-width="2.5"/>` +
  para(x + w / 2, y + h / 2 + (o.size ?? 17) * 0.35 - ((wrap(label, w - 20, o.size ?? 17, o.weight ?? 700).length - 1) * Math.round((o.size ?? 17) * 1.32)) / 2, label, w - 20, { size: o.size ?? 17, weight: o.weight ?? 700, anchor: 'middle', fill: o.tfill || C.ink }).s;
const elbow = (pts, o = {}) => path('M' + pts.map((p) => p.join(',')).join(' L'), { stroke: o.color || C.ink, w: o.w ?? 3.5, extra: `marker-end="url(#${o.marker || 'ah'})"` + (o.dash ? ` stroke-dasharray="${o.dash}"` : '') });

export const slug = 'ap-english-literature-and-composition-7-6-simile-personification-fiction-study-guide';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// Two overlapping circles: described thing, compared thing, shared traits in the lens.
const venn = (cx, cy, r, left, right, traits, o = {}) => {
  const d = r * 0.55;
  let s = `<circle cx="${cx - d}" cy="${cy}" r="${r}" fill="${C.tealLight}" fill-opacity="0.85" stroke="${C.tealDark}" stroke-width="3"/>`;
  s += `<circle cx="${cx + d}" cy="${cy}" r="${r}" fill="${C.cream}" fill-opacity="0.7" stroke="${C.olive}" stroke-width="3"/>`;
  s += `<circle cx="${cx - d}" cy="${cy}" r="${r}" fill="none" stroke="${C.tealDark}" stroke-width="3"/>`;
  const lx = cx - d - r * 0.42, rx = cx + d + r * 0.42;
  s += T(lx, cy - r * 0.42, o.lk || 'DESCRIBED', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += para(lx, cy - r * 0.12, left, r * 0.8, { size: o.size || 18, weight: 700, anchor: 'middle' }).s;
  s += T(rx, cy - r * 0.42, o.rk || 'COMPARED TO', { size: 15, weight: 700, anchor: 'middle', fill: C.olive });
  s += para(rx, cy - r * 0.12, right, r * 0.8, { size: o.size || 18, weight: 700, anchor: 'middle' }).s;
  s += T(cx, cy - r * 0.46, 'TRAIT', { size: 15, weight: 700, anchor: 'middle', fill: C.ink });
  traits.forEach((tr, i) => { s += T(cx, cy - r * 0.18 + i * 24, tr, { size: 16, anchor: 'middle', weight: 600 }); });
  return s;
};

// 01 The effect is in the pair and the trait
{
  let b = '';
  b += venn(450, 350, 170, 'a voice', 'a cart on a gravel drive', ['repetition', 'grinding', 'no arrival']);
  b += chip(70, 110, 260, 52, '"like" is only the hinge', { fill: '#ffffff', edge: C.panelEdge, size: 17, weight: 600 });
  b += chip(570, 110, 260, 52, 'the pair + the trait = effect', { fill: C.cream, edge: C.olive, size: 17 });
  const y = 545;
  b += `<rect x="30" y="${y}" width="840" height="92" rx="14" fill="#ffffff" stroke="${C.rust}" stroke-width="2.5" stroke-dasharray="8 6"/>`;
  b += T(50, y + 34, 'WHAT IS LEFT OUT ALSO COUNTS', { size: 15, weight: 700, fill: C.rust });
  b += para(50, y + 62, 'A comparison chooses what to emphasise and what to leave out. A plain statement says only that the voice is loud.', 800, { size: 17 }).s;
  add('01-pair-and-trait',
    svg(900, y + 122, 'What a simile chooses', b),
    'Two overlapping circles: a voice and a cart on a gravel drive. The overlap holds the traits that link them: repetition, grinding and no arrival. The effect of a simile lies in the pair and the linking trait, not in the word "like", and in what the comparison leaves out.',
    'The effect of a simile lies in the pair chosen and the trait that links them.',
    '## What figurative comparison does');
}

// 02 Five steps on the wafer simile
{
  let b = '';
  b += `<rect x="30" y="110" width="840" height="60" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
  b += T(450, 148, '"the red sun was pasted in the sky like a wafer"', { size: 20, italic: true, weight: 600, anchor: 'middle' });
  const st = [
    ['Parts', 'What is described, and what is it compared to?', 'The sun, compared to a wafer'],
    ['Trait', 'Which quality links them?', 'Thinness, flatness, redness, being stuck on'],
    ['Connotations', 'What else does the comparison bring in?', 'A small, mass-produced, bland object; something pressed or stuck'],
    ['Attitude', 'What tone or feeling results?', 'A diminished, unimpressive sun; a detached, ironic view'],
    ['Function', 'What does it do in this passage?', 'Presents the world as if emptied of grandeur: chilling and strange'],
  ];
  let y = 196;
  st.forEach(([k, q, a], i) => {
    const ah = para(0, 0, a, 400, { size: 17 }).h, qh = para(0, 0, q, 250, { size: 15 }).h;
    const h = Math.max(ah + 34, qh + 52, 72);
    const f = i === 4 ? C.tealLight : C.panel, e = i === 4 ? C.tealDark : C.panelEdge;
    b += `<rect x="30" y="${y}" width="840" height="${h}" rx="14" fill="${f}" stroke="${e}" stroke-width="2.5"/>`;
    b += badge(66, y + h / 2, 20, String(i + 1), i === 4 ? C.mustard : C.cream);
    b += T(100, y + 32, k, { size: 19, weight: 700 }) + para(100, y + 56, q, 250, { size: 15, fill: C.muted }).s;
    b += `<line x1="380" y1="${y + 14}" x2="380" y2="${y + h - 14}" stroke="${C.panelEdge}" stroke-width="2"/>`;
    b += para(400, y + (h - ah) / 2 + 17, a, 450, { size: 17 }).s;
    y += h + 10;
  });
  b += T(450, y + 22, 'Left out: a wafer is not hot or bright, and that absence is part of the effect', { size: 16, anchor: 'middle', fill: C.rust, italic: true, weight: 600 });
  add('02-five-steps-wafer',
    svg(900, y + 50, 'Analysing a simile in five steps', b),
    'Crane\'s simile "the red sun was pasted in the sky like a wafer" analysed in five steps: the parts are the sun and a wafer; the traits are thinness, flatness, redness and being stuck on; the connotations are of a small mass-produced object; the attitude is detached and ironic; the function empties the scene of grandeur.',
    'Parts, trait, connotations, attitude, function: and notice what the comparison leaves out.',
    '## Analysing a simile');
}

// 03 Personification: two directions across the boundary
{
  let b = '';
  b += panel(30, 110, 360, 320, C.cream, C.olive) + panel(510, 110, 360, 320, C.tealLight, C.tealDark);
  b += T(210, 146, 'HUMAN', { size: 20, weight: 700, anchor: 'middle', fill: C.olive }) + T(690, 146, 'NON-HUMAN', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += T(210, 170, 'moods, will, feelings', { size: 16, anchor: 'middle', fill: C.muted }) + T(690, 170, 'objects, animals, machines', { size: 16, anchor: 'middle', fill: C.muted });
  b += `<line x1="450" y1="110" x2="450" y2="430" stroke="${C.ink}" stroke-width="3" stroke-dasharray="10 7"/>`;
  const pill = (y, s2, col) => { const w = tw(s2, 16, 700) + 28; return `<rect x="${450 - w / 2}" y="${y - 20}" width="${w}" height="30" rx="15" fill="#ffffff" stroke="${col}" stroke-width="2"/>` + T(450, y, s2, { size: 16, weight: 700, anchor: 'middle', fill: col }); };
  b += arrow(300, 228, 600, 228, { w: 5, color: C.olive, marker: 'ahO' }) + pill(206, 'human qualities given to things', C.olive);
  b += card(530, 252, 320, { body: ['"The house sulked"', '"the fog crept"'], italic: true, size: 17, bfill: C.ink, pad: 14 }).s;
  b += arrow(600, 390, 300, 390, { w: 5, color: C.tealDark, marker: 'ahT' }) + pill(368, 'non-human qualities given to people', C.tealDark);
  b += card(50, 252, 320, { body: ['a man "loaded to the muzzle with facts"', 'children as "little vessels"'], italic: true, size: 17, bfill: C.ink, pad: 14 }).s;
  const y = 470;
  const r = row(y, [
    { kicker: 'EFFECT', title: 'Gives a thing a mood or will', body: 'shapes atmosphere and the character\'s relation to it', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'EFFECT', title: 'Communicates an attitude about the person', body: 'dehumanising, mocking, admiring, pitying', fill: C.tealLight, edge: C.tealDark },
  ], { card: { size: 16, tsize: 19 } });
  b += r.s;
  b += T(450, y + r.h + 36, 'Ask: what attitude does the writer reveal by crossing the line?', { size: 18, weight: 700, anchor: 'middle' });
  add('03-personification-two-ways',
    svg(900, y + r.h + 64, 'Personification works in two directions', b),
    'A dashed line separates human and non-human. One arrow gives human qualities to things, as in "the house sulked" or "the fog crept", giving them mood or will. The other gives non-human qualities to people, as in a man "loaded to the muzzle with facts", which communicates an attitude about the person.',
    'Crossing the line between human and non-human reveals the writer\'s attitude.',
    '## Personification: two directions');
}

// 04 Classic comparisons
{
  const tb = table(30, 110, [
    { w: 150, head: 'Work' }, { w: 180, head: 'Described' }, { w: 230, head: 'Compared to' }, { w: 280, head: 'Effect or attitude' },
  ], [
    ['The Red Badge of Courage', 'the red sun', '"pasted in the sky like a wafer"', 'A world stripped of grandeur and glory; a detached view of war'],
    ['Hard Times', "the steam-engine's piston", '"the head of an elephant in a state of melancholy madness"', 'Gives a machine an animal\'s sadness: a human cost in the industrial town'],
    ['Hard Times', 'Mr Gradgrind', '"a kind of cannon loaded to the muzzle with facts"', 'A person given the qualities of a weapon'],
    ['Hard Times', 'the children', '"little vessels" ready to be filled', 'Minds treated as containers: the narrator\'s attitude to the system'],
  ], { size: 16, italicCols: [2] });
  add('04-classic-comparisons',
    svg(900, 110 + tb.h + 30, 'Comparisons in Crane and Dickens', tb.s),
    'Table of four comparisons. Crane\'s sun "pasted in the sky like a wafer" strips a battle of grandeur. In Hard Times a piston is like a melancholy, mad elephant\'s head, Mr Gradgrind is a cannon loaded with facts, and the children are little vessels, showing a system that treats minds as things.',
    'Each comparison carries an attitude to what it describes.',
    '## Public-domain examples to learn from');
}

// 05 Mr Fenn's sermon: two similes
{
  let b = '';
  b += venn(230, 335, 130, "Mr Fenn's voice", 'a cart on a gravel drive', ['steady, loud', 'grinding', 'slow, heavy'], { size: 16 });
  b += venn(670, 335, 130, 'the congregation', 'stones in a field', ['inert, heavy', 'passive', 'scattered'], { size: 16 });
  b += chip(55, 116, 370, 64, 'twist: "always about to arrive": the sermon never reaches its point', { fill: '#ffffff', edge: C.rust, size: 15, weight: 600 });
  b += chip(475, 116, 370, 64, 'aware of each other "only as a weight"', { fill: '#ffffff', edge: C.rust, size: 15, weight: 600 });
  const y = 490;
  const r = row(y, [
    { kicker: 'ATTITUDE', title: 'Gently satirical and weary', body: 'towards the preacher' },
    { kicker: 'ATTITUDE', title: 'Unreceptive and isolated', body: 'how the narrator regards the listeners' },
  ], { card: { size: 16, tsize: 19 } });
  b += r.s;
  const y2 = y + r.h + 16;
  b += `<rect x="30" y="${y2}" width="840" height="64" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
  b += T(450, y2 + 39, 'Function: a service that is loud and lifeless: noise without progress, listeners who offer only mass', { size: 16, weight: 700, anchor: 'middle' });
  add('05-fenn-two-similes',
    svg(900, y2 + 94, 'Worked example: the cart and the stones', b),
    'Two pairs of overlapping circles. Mr Fenn\'s voice and a cart on gravel share steadiness, loudness and grinding, and the cart is "always about to arrive". The congregation and stones in a field share inertness and passivity. Together they show a loud, lifeless service and a weary, satirical narrator.',
    'The chosen traits, monotony and inertness, carry the narrator\'s amusement.',
    '## Worked example 1: analysing similes');
}

// 06 House and Mrs Quill: an inverted household
{
  let b = '';
  // house
  const hx = 120, hy = 230;
  b += `<rect x="${hx}" y="${hy}" width="170" height="120" fill="${C.rock}" stroke="${C.ink}" stroke-width="3"/><path d="M${hx - 12},${hy} L${hx + 85},${hy - 50} L${hx + 182},${hy} Z" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  b += path(`M${hx + 40},${hy + 36} l24,6 M${hx + 106},${hy + 42} l24,-6`, { w: 4 }) + path(`M${hx + 60},${hy + 78} q25,-14 50,0`, { w: 4 });
  b += `<rect x="${hx - 40}" y="${hy + 96}" width="250" height="34" rx="17" fill="${C.grass}" opacity="0.8"/>`;
  [0, 1, 2, 3, 4, 5].forEach((i) => { b += `<line x1="${hx - 20 + i * 45}" y1="${hy - 70}" x2="${hx - 30 + i * 45}" y2="${hy - 40}" stroke="${C.blue}" stroke-width="2.5"/>`; });
  // clock-woman
  const cx = 660, cy = 255;
  b += `<circle cx="${cx}" cy="${cy}" r="72" fill="#ffffff" stroke="${C.ink}" stroke-width="4"/>`;
  for (let i = 0; i < 12; i++) { const a = (i / 12) * 2 * Math.PI; b += `<line x1="${cx + Math.sin(a) * 60}" y1="${cy - Math.cos(a) * 60}" x2="${cx + Math.sin(a) * 68}" y2="${cy - Math.cos(a) * 68}" stroke="${C.ink}" stroke-width="3"/>`; }
  b += `<line x1="${cx}" y1="${cy}" x2="${cx + 36}" y2="${cy + 12}" stroke="${C.ink}" stroke-width="5" stroke-linecap="round"/><line x1="${cx}" y1="${cy}" x2="${cx}" y2="${cy + 52}" stroke="${C.rust}" stroke-width="4" stroke-linecap="round"/><circle cx="${cx}" cy="${cy}" r="6" fill="${C.ink}"/>`;
  b += T(cx, cy + 100, 'a quarter to six', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  b += T(205, 130, 'The house', { size: 22, weight: 700, anchor: 'middle' }) + T(660, 130, 'Mrs Quill', { size: 22, weight: 700, anchor: 'middle' });
  const y = 380;
  const r = row(y, [
    { kicker: 'THING → HUMAN QUALITIES', title: '"sulked behind its hedge and refused to notice the rain"', body: 'a mood and a stubborn will: resentful isolation, faint comedy; wry affection mixed with gloom', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'PERSON → CLOCK QUALITIES', title: '"a handsome clock in her day" who "ticked down the passage"', body: 'regular, precise, rigid, a lost beauty: affectionate mockery with sympathy', fill: C.tealLight, edge: C.tealDark },
  ], { card: { size: 16, tsize: 17 } });
  b += r.s;
  const y2 = y + r.h + 16;
  b += `<rect x="30" y="${y2}" width="840" height="64" rx="14" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += T(450, y2 + 39, 'An inverted household: objects have moods, people have mechanisms', { size: 18, weight: 700, anchor: 'middle' });
  add('06-house-and-mrs-quill',
    svg(900, y2 + 94, 'Worked example: a sulking house, a ticking woman', b),
    'A frowning house in the rain beside a clock face. The house "sulked" and "refused to notice the rain", given a human mood and will. Mrs Quill "had been a handsome clock in her day" and "ticked down the passage", given a clock\'s regularity. Together they make an inverted household of moody objects and mechanical people.',
    'Personification in both directions turns the household upside down.',
    '## Worked example 2: personification in both directions');
}

// 07 Weak to strong comments
{
  let b = '';
  const ex = [
    ['"The simile paints a picture of the sun."', 'sun + pasted wafer', 'flat, small, manufactured', 'the scene loses its grandeur'],
    ['"The house is personified."', 'house + a person', 'a stubborn will', 'a wry, gloomy mood'],
    ['"The narrator compares the clerk to a stamp, which shows he is a clerk."', 'clerk + rubber stamp', 'repetition, impersonality', "weary contempt for routine"],
  ];
  const cols = [['PAIR', C.tealLight, C.tealDark], ['TRAIT', C.cream, C.olive], ['EFFECT OR ATTITUDE', '#ffffff', C.ink]];
  let y = 110;
  ex.forEach(([weak, ...parts]) => {
    const wh = para(0, 0, weak, 780, { size: 17, italic: true }).h;
    b += `<rect x="30" y="${y}" width="840" height="${wh + 22}" rx="12" fill="#ffffff" stroke="${C.rust}" stroke-width="2" stroke-dasharray="7 5"/>`;
    b += T(50, y + 29, 'WEAK', { size: 15, weight: 700, fill: C.rust }) + para(110, y + 30, weak, 740, { size: 17, italic: true }).s;
    y += wh + 22 + 8;
    b += arrow(80, y - 4, 80, y + 14, { w: 3 });
    y += 18;
    parts.forEach((p, j) => {
      const x = 30 + j * 290;
      b += `<rect x="${x}" y="${y}" width="260" height="70" rx="12" fill="${cols[j][1]}" stroke="${cols[j][2]}" stroke-width="2.5"/>`;
      b += T(x + 16, y + 24, cols[j][0], { size: 15, weight: 700, fill: cols[j][2] === C.ink ? C.ink : cols[j][2] }) + T(x + 16, y + 52, p, { size: 17, weight: 600 });
      if (j < 2) b += T(x + 275, y + 42, '+', { size: 20, weight: 700, anchor: 'middle' });
    });
    y += 70 + 28;
  });
  add('07-weak-to-strong-comments',
    svg(900, y + 10, 'What a strong comment adds', b),
    'Three weak comments rebuilt into strong ones. Each strong comment names the pair (sun and wafer, house and a person who refuses, clerk and rubber stamp), the trait that links them, and the effect or attitude, such as lost grandeur, a wry gloomy mood or weary contempt for routine.',
    'A strong comment names the pair, the trait and the effect.',
    '## Weak and strong comments side by side');
}
