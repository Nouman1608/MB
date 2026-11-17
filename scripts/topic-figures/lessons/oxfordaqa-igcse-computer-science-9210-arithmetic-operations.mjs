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

// Monospace code text (JetBrains Mono, advance 0.6 em)
const MONO = "'DejaVu Sans Mono', 'Liberation Mono', monospace";
const code = (x, y, s, o = {}) => { const lead = (String(s).match(/^ */) || [''])[0].length; const sz = o.size || 18; return `<text x="${x + ((o.anchor || 'start') === 'start' ? lead * sz * 0.6 : 0)}" y="${y}" font-family="${MONO}" style="font-variant-ligatures:none;font-feature-settings:'liga' 0,'calt' 0" font-size="${sz}" font-weight="${o.weight || 400}" fill="${o.fill || C.ink}" text-anchor="${o.anchor || 'start'}">${X(String(s).replace(/^ +/, '')).replace(/ /g, '\u00a0')}</text>`; };
const cw = (s, size = 18) => String(s).length * size * 0.6;
// Variable box: name above, value inside, type tag
const varBox = (x, y, name, type, val, o = {}) => {
  const w = o.w || 120, h = o.h || 64;
  return T(x + w / 2, y - 12, name, { size: 17, weight: 700, anchor: 'middle' }) +
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${o.fill || '#ffffff'}" stroke="${o.edge || C.ink}" stroke-width="${o.sw || 3}"/>` +
    code(x + w / 2, y + h / 2 + 8, val, { size: o.vsize || 24, weight: 700, anchor: 'middle', fill: o.vfill || C.ink }) +
    (type ? T(x + w / 2, y + h + 22, type, { size: 15, anchor: 'middle', fill: C.muted }) : '');
};
// Trace table: vars, rows [stmt, [values], changedIndex, note]
function traceTable(x, y, vars, rows, o = {}) {
  const sw = o.sw || 330, vw = o.vw || 92, nw = 840 - sw - vars.length * vw, hh = 48, size = 17;
  let s = `<rect x="${x}" y="${y}" width="840" height="${hh}" rx="10" fill="${C.ink}"/>`;
  s += T(x + 14, y + 31, 'After statement', { size: 17, weight: 700, fill: '#ffffff' });
  vars.forEach(([v, ty], i) => { s += code(x + sw + i * vw + vw / 2, y + 24, v, { size: 17, weight: 700, anchor: 'middle', fill: '#ffffff' }) + T(x + sw + i * vw + vw / 2, y + 42, ty, { size: 15, anchor: 'middle', fill: C.teal }); });
  if (nw > 40) s += T(x + sw + vars.length * vw + 14, y + 31, 'Working', { size: 17, weight: 700, fill: '#ffffff' });
  let cy = y + hh;
  rows.forEach(([stmt, vals, ch, note], ri) => {
    const nl = note ? wrap(note, nw - 24, 15) : [];
    const rh = Math.max(46, nl.length * 20 + 22);
    s += `<rect x="${x}" y="${cy}" width="840" height="${rh}" fill="${ri % 2 ? C.panel : '#f8faf9'}" stroke="${C.panelEdge}" stroke-width="2"/>`;
    s += code(x + 14, cy + rh / 2 + 6, stmt, { size: o.csize || 16 });
    vals.forEach((v, i) => {
      const cx = x + sw + i * vw;
      if (i === ch) s += `<rect x="${cx + 6}" y="${cy + 6}" width="${vw - 12}" height="${rh - 12}" rx="8" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>`;
      s += code(cx + vw / 2, cy + rh / 2 + 7, v, { size: 18, weight: i === ch ? 700 : 400, anchor: 'middle', fill: v === '-' ? C.muted : C.ink });
      s += `<line x1="${cx}" y1="${cy}" x2="${cx}" y2="${cy + rh}" stroke="${C.panelEdge}" stroke-width="2"/>`;
    });
    if (nl.length) { const nx = x + sw + vars.length * vw; s += `<line x1="${nx}" y1="${cy}" x2="${nx}" y2="${cy + rh}" stroke="${C.panelEdge}" stroke-width="2"/>`; nl.forEach((l, li) => { s += T(nx + 12, cy + (rh - nl.length * 20) / 2 + 15 + li * 20, l, { size: 15, fill: C.muted }); }); }
    cy += rh;
  });
  return { s, h: cy - y };
}
const codePanel = (x, y, w, lines, o = {}) => {
  const lh = o.lh || 28, h = lines.length * lh + 26;
  let s = `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${C.ink}"/>`;
  lines.forEach((l, i) => { s += code(x + 18, y + 30 + i * lh, l, { size: o.size || 17, fill: o.hl?.includes(i) ? C.mustard : '#e8eef0', weight: o.hl?.includes(i) ? 700 : 400 }); });
  return { s, h };
};

const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });
export const figures = [];

export const slug = 'oxfordaqa-igcse-computer-science-9210-arithmetic-operations';

const dot = (cx, cy, r = 11, fill = C.teal, edge = C.tealDark) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>`;
const resBox = (x, y, w, h, expr, val, type, o = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="${o.fill || '#ffffff'}" stroke="${o.edge || C.ink}" stroke-width="2.5"/>` +
  code(x + w / 2, y + 42, expr, { size: 24, weight: 700, anchor: 'middle' }) +
  arrow(x + w / 2, y + 58, x + w / 2, y + 92, { w: 3 }) +
  code(x + w / 2, y + 134, val, { size: 38, weight: 700, anchor: 'middle', fill: o.vfill || C.ink }) +
  T(x + w / 2, y + 168, type, { size: 17, weight: 600, anchor: 'middle', fill: C.muted });

// 01 One division, three operators
{
  let b = '';
  b += T(450, 132, 'Share 8 into groups of 5', { size: 19, weight: 700, anchor: 'middle' });
  // 8 dots: one group of 5 + 3 left over
  b += `<rect x="232" y="150" width="270" height="62" rx="14" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>`;
  for (let i = 0; i < 5; i++) b += dot(262 + i * 52, 181, 14);
  b += `<rect x="532" y="150" width="166" height="62" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
  for (let i = 0; i < 3; i++) b += dot(563 + i * 52, 181, 14, C.mustard, C.olive);
  b += T(367, 238, '1 full group', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += T(615, 238, '3 left over', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  const y = 268, w = 264, g = 24;
  b += resBox(30, y, w, 184, '8 / 5', '1.6', 'Real');
  b += resBox(30 + w + g, y, w, 184, '8 DIV 5', '1', 'Integer: whole groups', { fill: C.tealLight, edge: C.tealDark, vfill: C.tealDark });
  b += resBox(30 + 2 * (w + g), y, w, 184, '8 MOD 5', '3', 'Integer: remainder', { fill: C.cream, edge: C.olive, vfill: C.olive });
  const yn = y + 210;
  b += `<rect x="30" y="${yn}" width="840" height="96" rx="14" fill="#ffffff" stroke="${C.panelEdge}" stroke-width="2.5"/>`;
  b += T(54, yn + 38, 'In the exam pseudocode, / is always real division:', { size: 18, weight: 700 });
  b += code(560, yn + 38, '7 / 2 = 3.5', { size: 20, weight: 700, fill: C.tealDark });
  b += T(54, yn + 72, 'Python writes DIV as // and MOD as %. In C#, int / int gives a whole number.', { size: 17, fill: C.muted });
  add('01-real-div-mod',
    svg(900, yn + 126, 'One division, three operators', b),
    'Eight counters shared into groups of 5 make one full group with 3 left over. 8 / 5 gives the real number 1.6, 8 DIV 5 gives the integer 1 and 8 MOD 5 gives the integer remainder 3. In the exam pseudocode 7 / 2 is 3.5.',
    '/ gives a real answer; DIV counts the whole groups and MOD gives what is left.',
    '## The operators');
}

// 02 Integer division as a two-stage process: 23 by 4
{
  let b = '';
  const y = 120, bw = 112, gap = 14;
  for (let gI = 0; gI < 5; gI++) {
    const x = 30 + gI * (bw + gap);
    b += `<rect x="${x}" y="${y}" width="${bw}" height="96" rx="14" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>`;
    for (let k = 0; k < 4; k++) b += dot(x + 34 + (k % 2) * 44, y + 27 + Math.floor(k / 2) * 42, 13);
  }
  const lx = 30 + 5 * (bw + gap);
  b += `<rect x="${lx}" y="${y}" width="${870 - lx}" height="96" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
  for (let k = 0; k < 3; k++) b += dot(lx + 34 + (k % 2) * 44, y + 27 + Math.floor(k / 2) * 42, 13, C.mustard, C.olive);
  b += T(30 + (5 * bw + 4 * gap) / 2, y + 128, '23 counters: 5 full groups of 4', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += T(lx + (870 - lx) / 2, y + 128, '3 left', { size: 18, weight: 700, anchor: 'middle', fill: C.olive });
  const ys = y + 160;
  b += `<rect x="30" y="${ys}" width="408" height="84" rx="14" fill="#ffffff" stroke="${C.tealDark}" stroke-width="2.5"/>`;
  b += T(54, ys + 32, 'Stage 1', { size: 16, weight: 700, fill: C.tealDark });
  b += code(54, ys + 64, '23 DIV 4 → 5', { size: 22, weight: 700 });
  b += `<rect x="462" y="${ys}" width="408" height="84" rx="14" fill="#ffffff" stroke="${C.olive}" stroke-width="2.5"/>`;
  b += T(486, ys + 32, 'Stage 2', { size: 16, weight: 700, fill: C.olive });
  b += code(486, ys + 64, '23 MOD 4 → 3', { size: 22, weight: 700 });
  const yc = ys + 108;
  b += `<rect x="30" y="${yc}" width="840" height="92" rx="14" fill="${C.ink}"/>`;
  b += T(54, yc + 34, 'CHECK ANY PAIR', { size: 15, weight: 700, fill: C.mustard });
  b += code(54, yc + 70, '(23 DIV 4) * 4 + (23 MOD 4) = 5 * 4 + 3 = 23', { size: 20, weight: 700, fill: '#ffffff' });
  const yx = yc + 116;
  const r = row(yx, [
    { kicker: 'FIRST NUMBER SMALLER', title: '3 DIV 8 = 0, 3 MOD 8 = 3', body: 'DIV is 0 and MOD is the first number.' },
    { kicker: 'EXACT DIVISION', title: '24 MOD 6 = 0', body: 'Nothing is left over, so the remainder is 0.' },
  ], { card: { size: 17, tsize: 20 } });
  b += r.s;
  add('02-div-mod-two-stages',
    svg(900, yx + r.h + 30, 'Integer division in two stages', b),
    '23 counters are split into 5 full groups of 4 with 3 left over, so 23 DIV 4 is 5 and 23 MOD 4 is 3; the check (23 DIV 4) * 4 + (23 MOD 4) gives 5 * 4 + 3 = 23. Two special cases: 3 DIV 8 = 0 and 3 MOD 8 = 3, and 24 MOD 6 = 0.',
    'DIV and MOD are two halves of one division: quotient times divisor plus remainder gives the number back.',
    '## Integer division as a two-stage process');
}

// 03 DIV and MOD as tools
{
  let b = '';
  // Digit peeling
  const y = 112;
  b += panel(30, y, 840, 170);
  b += T(54, y + 38, 'Last digit and the rest of a number', { size: 20, weight: 700 });
  const digs = ['4', '7', '2'];
  digs.forEach((d, i) => {
    const x = 70 + i * 62, last = i === 2;
    b += `<rect x="${x}" y="${y + 62}" width="54" height="66" rx="10" fill="${last ? C.cream : C.tealLight}" stroke="${last ? C.olive : C.tealDark}" stroke-width="2.5"/>`;
    b += code(x + 27, y + 107, d, { size: 32, weight: 700, anchor: 'middle' });
  });
    b += arrow(275, y + 82, 420, y + 82, { w: 3.5 });
  b += arrow(275, y + 118, 420, y + 118, { w: 3.5 });
  b += code(436, y + 90, '472 MOD 10 = 2', { size: 21, weight: 700, fill: C.olive });
  b += T(660, y + 89, 'the last digit', { size: 17, fill: C.muted });
  b += code(436, y + 126, '472 DIV 10 = 47', { size: 21, weight: 700, fill: C.tealDark });
  b += T(660, y + 125, 'the last digit removed', { size: 17, fill: C.muted });
  // Two side panels: units, groups
  const y2 = y + 192, w2 = 411;
  const unit = (x, title, a, aLab, bTxt, bLab) => panel(x, y2, w2, 196) + T(x + 24, y2 + 38, title, { size: 20, weight: 700 }) +
    code(x + 24, y2 + 84, a, { size: 19, weight: 700, fill: C.tealDark }) + T(x + 24, y2 + 110, aLab, { size: 16, fill: C.muted }) +
    code(x + 24, y2 + 148, bTxt, { size: 19, weight: 700, fill: C.olive }) + T(x + 24, y2 + 174, bLab, { size: 16, fill: C.muted });
  b += unit(30, 'Convert units: 200 minutes', '200 DIV 60 = 3', 'DIV gives the large unit: 3 hours', '200 MOD 60 = 20', 'MOD gives the rest: 20 minutes');
  b += unit(459, 'Share into groups: 50 eggs', '50 DIV 6 = 8', 'DIV gives full boxes of 6: 8 boxes', '50 MOD 6 = 2', 'MOD gives the leftovers: 2 eggs');
  // Tests
  const y3 = y2 + 218;
  const r = row(y3, [
    { kicker: 'EVEN?', title: 'n MOD 2 = 0', body: '14 MOD 2 = 0, so 14 is even' },
    { kicker: 'A FACTOR?', title: 'a MOD b = 0', body: '35 MOD 7 = 0, so 7 is a factor of 35' },
    { kicker: 'REPEAT A PATTERN', title: 'day MOD 7', body: 'cycles through 0 to 6: a weekday number' },
  ], { card: { size: 16, tsize: 19 } });
  b += r.s;
  add('03-div-mod-toolkit',
    svg(900, y3 + r.h + 30, 'DIV and MOD as tools in algorithms', b),
    '472 MOD 10 gives the last digit 2 and 472 DIV 10 gives 47. 200 minutes is 200 DIV 60 = 3 hours and 200 MOD 60 = 20 minutes; 50 eggs in boxes of 6 is 8 full boxes and 2 left. n MOD 2 = 0 tests for even, a MOD b = 0 tests for a factor, and day MOD 7 repeats a weekly pattern.',
    'DIV counts whole units or groups; MOD gives the remainder, the last digit or a repeating cycle.',
    '## Where DIV and MOD are used');
}

// 04 Worked example 1: 437 seconds on a number line
{
  let b = '';
  const cp = codePanel(30, 110, 840, ['totalSeconds ← 437', 'minutes ← totalSeconds DIV 60', 'seconds ← totalSeconds MOD 60', 'OUTPUT minutes, " min ", seconds, " s"'], { size: 18, lh: 30 });
  b += cp.s;
  const y = 110 + cp.h + 84, x0 = 60, sc = 1.55; // px per second
  const X0 = (s) => x0 + s * sc;
  for (let m = 0; m < 7; m++) b += `<rect x="${X0(m * 60) + 1}" y="${y - 26}" width="${60 * sc - 2}" height="26" fill="${m % 2 ? C.teal : C.tealLight}" stroke="${C.tealDark}" stroke-width="1.5"/>`;
  b += `<rect x="${X0(420)}" y="${y - 26}" width="${17 * sc}" height="26" fill="${C.mustard}" stroke="${C.olive}" stroke-width="1.5"/>`;
  b += `<line x1="${X0(0)}" y1="${y}" x2="${X0(500)}" y2="${y}" stroke="${C.ink}" stroke-width="3"/>`;
  [0, 60, 120, 180, 240, 300, 360, 420, 480].forEach((s) => {
    b += `<line x1="${X0(s)}" y1="${y}" x2="${X0(s)}" y2="${y + 12}" stroke="${C.ink}" stroke-width="2.5"/>`;
    b += T(X0(s), y + 34, String(s), { size: 16, anchor: 'middle', fill: s === 420 ? C.ink : C.muted, weight: s === 420 ? 700 : 400 });
  });
  b += `<line x1="${X0(437)}" y1="${y - 46}" x2="${X0(437)}" y2="${y + 12}" stroke="${C.rust}" stroke-width="3"/>`;
  b += T(X0(437) + 4, y - 54, '437', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  b += T(X0(480), y + 58, '480 too big', { size: 15, anchor: 'middle', fill: C.rust });
  b += path(`M${X0(0)},${y + 52} L${X0(0)},${y + 62} L${X0(420)},${y + 62} L${X0(420)},${y + 52}`, { stroke: C.tealDark, w: 2.5 });
  b += T(X0(210), y + 88, '7 full minutes: 437 DIV 60 = 7', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  const yr = y + 116;
  b += `<rect x="30" y="${yr}" width="408" height="108" rx="14" fill="#ffffff" stroke="${C.olive}" stroke-width="2.5"/>`;
  b += T(54, yr + 34, 'Leftover seconds', { size: 16, weight: 700, fill: C.olive });
  b += code(54, yr + 70, '437 MOD 60 = 17', { size: 22, weight: 700 });
  b += T(54, yr + 96, '437 − 420 = 17', { size: 16, fill: C.muted });
  b += `<rect x="462" y="${yr}" width="408" height="108" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
  b += T(486, yr + 34, 'Output', { size: 16, weight: 700, fill: C.olive });
  b += code(486, yr + 72, '7 min 17 s', { size: 28, weight: 700 });
  b += T(486, yr + 96, 'with / it would be 7.283..., not whole minutes', { size: 15, fill: C.muted });
  add('04-seconds-to-minutes',
    svg(900, yr + 138, 'Worked example: 437 seconds', b),
    'The pseudocode sets totalSeconds to 437, then uses DIV 60 and MOD 60. On a number line marked every 60 seconds, 437 lies after 420 (7 × 60) and before 480, so there are 7 full minutes and 17 seconds left. The output is 7 min 17 s.',
    'DIV 60 counts the full minutes; MOD 60 is the seconds left after them.',
    '## Worked example 1: converting seconds');
}

// 05 Worked example 2: digit sum trace
{
  let b = '';
  const cp = codePanel(30, 110, 420, ['number ← 4827', 'digitSum ← 0', 'WHILE number > 0', '  digitSum ← digitSum + (number MOD 10)', '  number ← number DIV 10', 'ENDWHILE', 'OUTPUT digitSum'], { size: 15, lh: 27, hl: [3, 4] });
  b += cp.s;
  b += panel(470, 110, 400, cp.h);
  b += T(494, 148, 'Each pass of the loop', { size: 19, weight: 700 });
  b += `<rect x="494" y="168" width="352" height="54" rx="10" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>`;
  b += code(512, 202, 'MOD 10', { size: 19, weight: 700, fill: C.olive }) + T(600, 201, 'peels off the last digit', { size: 17 });
  b += `<rect x="494" y="234" width="352" height="54" rx="10" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2"/>`;
  b += code(512, 268, 'DIV 10', { size: 19, weight: 700, fill: C.tealDark }) + T(600, 267, 'removes it', { size: 17 });
  b += para(494, 304, 'The loop stops when number reaches 0.', 352, { size: 17, fill: C.muted }).s;
  const y = 110 + cp.h + 26;
  const cols = [{ w: 250, head: 'number (start of pass)' }, { w: 200, head: 'number MOD 10' }, { w: 180, head: 'digitSum' }, { w: 210, head: 'number DIV 10' }];
  const tb = table(30, y, cols, [['4827', '7', '7', '482'], ['482', '2', '9', '48'], ['48', '8', '17', '4'], ['4', '4', '21', '0']], { size: 19 });
  b += tb.s;
  const yo = y + tb.h + 20;
  b += `<rect x="30" y="${yo}" width="840" height="60" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
  b += T(54, yo + 38, 'Output:', { size: 19, weight: 700 }) + code(140, yo + 39, '21', { size: 24, weight: 700 }) + T(190, yo + 38, '(7 + 2 + 8 + 4)', { size: 18, fill: C.muted });
  add('05-digit-sum-trace',
    svg(900, yo + 90, 'Worked example: adding the digits', b),
    'Pseudocode that adds the digits of 4827 with a WHILE loop, and its trace table. Each pass, number MOD 10 gives the last digit (7, 2, 8, 4), digitSum grows to 7, 9, 17 and 21, and number DIV 10 gives 482, 48, 4 and 0. The loop stops at 0 and outputs 21.',
    'MOD 10 peels off the last digit and DIV 10 removes it, pass by pass.',
    '## Worked example 2: adding the digits of a number');
}

// 06 Order of operations: expression trees
{
  let b = '';
  const node = (cx, cy, s, o = {}) => `<circle cx="${cx}" cy="${cy}" r="${o.r || 26}" fill="${o.fill || '#ffffff'}" stroke="${o.edge || C.ink}" stroke-width="2.5"/>` + code(cx, cy + 8, s, { size: 22, weight: 700, anchor: 'middle', fill: o.tf || C.ink });
  const edge = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${C.ink}" stroke-width="2.5"/>`;
  const tree = (x, title, val, first, rootOp, leftLeaf, isLeftSub) => {
    let s = panel(x, 110, 411, 380);
    s += code(x + 205, 156, title, { size: 24, weight: 700, anchor: 'middle' });
    const rx = x + 205, ry = 220;
    const subX = isLeftSub ? rx - 90 : rx + 90, leafX = isLeftSub ? rx + 90 : rx - 90;
    s += edge(rx, ry, subX, ry + 90) + edge(rx, ry, leafX, ry + 90) + edge(subX, ry + 90, subX - 55, ry + 170) + edge(subX, ry + 90, subX + 55, ry + 170);
    s += node(rx, ry, rootOp) + node(leafX, ry + 90, leftLeaf);
    s += node(subX, ry + 90, first[0], { fill: C.cream, edge: C.olive }) + node(subX - 55, ry + 170, first[1]) + node(subX + 55, ry + 170, first[2]);
    s += T(subX, ry + 140, 'first', { size: 15, weight: 700, anchor: 'middle', fill: C.olive });
    s += code(x + 205, 470, '= ' + val, { size: 24, weight: 700, anchor: 'middle', fill: C.tealDark });
    return s;
  };
  b += tree(30, '2 + 3 * 4', '14', ['*', '3', '4'], '+', '2', false);
  b += tree(459, '(2 + 3) * 4', '20', ['+', '2', '3'], '*', '4', true);
  const y = 514;
  b += panel(30, y, 840, 166);
  b += T(54, y + 38, 'Averaging three values', { size: 20, weight: 700 });
  b += path(`M58,${y + 62} l16,16 M74,${y + 62} l-16,16`, { stroke: C.rust, w: 4 });
  b += code(96, y + 79, 'average ← a + b + c / 3', { size: 20, weight: 700 });
  b += T(500, y + 78, 'divides only c by 3', { size: 17, fill: C.rust, weight: 600 });
  b += `<circle cx="66" cy="${y + 120}" r="12" fill="${C.tealDark}"/>` + path(`M60,${y + 120} l5,6 l9,-11`, { stroke: '#ffffff', w: 3 });
  b += code(96, y + 127, 'average ← (a + b + c) / 3', { size: 20, weight: 700 });
  b += T(500, y + 126, 'brackets first, then divide', { size: 17, fill: C.tealDark, weight: 600 });
  add('06-order-of-operations',
    svg(900, y + 196, 'Order of operations', b),
    'Two expression trees. In 2 + 3 * 4 the multiplication 3 * 4 is done first, giving 14; in (2 + 3) * 4 the bracketed addition is done first, giving 20. Below, average ← a + b + c / 3 divides only c by 3, while average ← (a + b + c) / 3 is correct.',
    'Multiplication and division (including DIV and MOD) come before + and −, unless brackets say otherwise.',
    '## Order of operations');
}
