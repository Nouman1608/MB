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

export const slug = 'oxfordaqa-igcse-computer-science-9210-string-handling-operations';

const box = (x, y, w, h, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 10}" fill="${o.fill || '#ffffff'}" stroke="${o.edge || C.ink}" stroke-width="${o.sw || 2.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
// String as a row of character cells. hl: map index -> [fill, edge]
const strip = (x, y, s, o = {}) => {
  const w = o.w || 56, h = o.h || 58, sz = o.size || 26;
  let out = '';
  [...s].forEach((ch, i) => {
    const [f, e] = (o.hl && o.hl[i]) || ['#ffffff', C.ink];
    out += box(x + i * w, y, w - 6, h, { fill: f, edge: e, rx: 8 });
    out += code(x + i * w + (w - 6) / 2, y + h / 2 + sz * 0.36, ch === ' ' ? '' : ch, { size: sz, weight: 700, anchor: 'middle' });
    if (ch === ' ') out += T(x + i * w + (w - 6) / 2, y + h / 2 + 5, 'space', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
    if (o.idx !== false) out += code(x + i * w + (w - 6) / 2, y + h + 26, String(i), { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  });
  return out;
};
const span = (x, y, w, i0, i1, col, label, below = false) => {
  const xa = x + i0 * w - 2, xb = x + (i1 + 1) * w - 8;
  const yy = below ? y : y;
  return path(`M${xa},${yy + (below ? -8 : 8)} L${xa},${yy} L${xb},${yy} L${xb},${yy + (below ? -8 : 8)}`, { stroke: col, w: 3 }) +
    T((xa + xb) / 2, yy + (below ? 22 : -10), label, { size: 16, weight: 700, anchor: 'middle', fill: col });
};
const HL = (idxs, f, e) => Object.fromEntries(idxs.map((i) => [i, [f, e]]));

// 01 Conventions: Accra
{
  let b = '';
  const x0 = 310, y0 = 160;
  b += code(60, y0 + 40, 's = "Accra"', { size: 22, weight: 700 });
  b += strip(x0, y0, 'Accra', { w: 92, h: 64, size: 30, hl: { ...HL([1, 2, 3], C.tealLight, C.tealDark), 3: [C.cream, C.olive] } });
  b += T(x0 - 20, y0 + 92, 'position', { size: 15, weight: 700, anchor: 'end', fill: C.tealDark });
  b += span(x0, y0 - 12, 92, 1, 3, C.tealDark, 'SUBSTRING(1, 3, s) = "ccr": both ends included');
  const y = y0 + 130;
  const r = row(y, [
    { kicker: 'LENGTH', title: 'LEN("Accra") = 5', body: 'last position is LEN(s) − 1 = 4' },
    { kicker: 'POSITION', title: 'POSITION("Accra", "r") = 3', body: 'where "r" first appears' },
  ], { card: { size: 16, tsize: 19 } });
  b += r.s;
  const y2 = y + r.h + 16;
  b += box(30, y2, 840, 96, { fill: C.cream, edge: C.olive, rx: 14 });
  b += T(54, y2 + 36, 'Python counts slices differently', { size: 17, weight: 700, fill: C.olive });
  b += code(54, y2 + 72, '"Accra"[1:4]', { size: 20, weight: 700 }) + T(230, y2 + 71, 'also gives "ccr": the end position 4 is excluded. State your convention.', { size: 16 });
  add('01-string-positions',
    svg(900, y2 + 126, 'Positions in a string, counting from 0', b),
    'The string "Accra" with its characters at positions 0 to 4. LEN("Accra") is 5, so the last position is 4. POSITION("Accra", "r") is 3. SUBSTRING(1, 3, s) includes both ends and returns "ccr", while Python’s "Accra"[1:4] gives the same result by excluding the end.',
    'Positions start at 0, so the last character is at LEN(s) − 1.',
    '## Conventions used here');
}

// 02 Length and first position
{
  let b = '';
  b += panel(30, 110, 840, 200);
  b += code(54, 150, 'LEN("New York") = 8', { size: 21, weight: 700 }) + T(846, 150, 'the space counts', { size: 16, weight: 700, anchor: 'end', fill: C.olive });
  b += strip(70, 172, 'New York', { w: 90, h: 56, size: 26, hl: { 3: [C.cream, C.olive] } });
  b += panel(30, 330, 840, 230);
  b += code(54, 370, 'POSITION("banana", "a") = 1', { size: 21, weight: 700 }) + T(846, 370, 'first appearance only', { size: 16, weight: 700, anchor: 'end', fill: C.tealDark });
  b += strip(140, 402, 'banana', { w: 100, h: 58, size: 28, hl: { 1: [C.mustard, C.olive], 3: [C.cream, C.panelEdge], 5: [C.cream, C.panelEdge] } });
  b += T(140 + 100 + 47, 532, 'found here', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  b += T(140 + 400, 532, 'not 3 or 5', { size: 16, weight: 700, anchor: 'middle', fill: C.muted });
  b += T(450, 590, 'Some languages return −1 when the character is not present: check the question.', { size: 16, anchor: 'middle', fill: C.muted });
  add('02-length-and-position',
    svg(900, 620, 'Length and position', b),
    '"New York" has 8 characters, because the space counts. In "banana", the letter a appears at positions 1, 3 and 5, but POSITION("banana", "a") returns 1, the first appearance.',
    'LEN counts every character; POSITION finds only the first match.',
    '## Length and position');
}

// 03 Vowel-counting loop
{
  let b = '';
  const cp = codePanel(30, 110, 840, ['word ← "programming"', 'vowels ← 0', 'FOR i ← 0 TO LEN(word) - 1', '  letter ← SUBSTRING(i, i, word)', '  IF letter = "a" OR letter = "e" OR letter = "i" OR letter = "o" OR letter = "u" THEN', '    vowels ← vowels + 1', '  ENDIF', 'ENDFOR', 'OUTPUT vowels'], { size: 15, lh: 27, hl: [3] });
  b += cp.s;
  const y = 110 + cp.h + 60;
  const vow = HL([2, 5, 8], C.mustard, C.olive);
  b += strip(70, y, 'programming', { w: 70, h: 56, size: 26, hl: vow });
  b += T(70, y - 16, 'i runs from 0 to LEN(word) − 1 = 10; SUBSTRING(i, i, word) is one character', { size: 16, weight: 600, fill: C.tealDark });
  [2, 5, 8].forEach((i, k) => { b += badge(70 + i * 70 + 32, y + 110, 15, String(k + 1), C.cream); });
  const yo = y + 144;
  b += box(30, yo, 840, 60, { fill: C.cream, edge: C.olive, rx: 14 });
  b += T(54, yo + 38, 'Output:', { size: 19, weight: 700 }) + code(140, yo + 39, '3', { size: 24, weight: 700 }) + T(176, yo + 38, '(o, a, i)', { size: 18, fill: C.muted });
  b += T(846, yo + 38, 'same loop: reverse, count spaces, find a digit', { size: 15, anchor: 'end', fill: C.muted });
  add('03-character-loop',
    svg(900, yo + 90, 'One character at a time', b),
    'A FOR loop runs i from 0 to LEN(word) - 1 over "programming", taking one character each pass with SUBSTRING(i, i, word). The vowels o, a and i at positions 2, 5 and 8 are counted, so the output is 3.',
    'Loop over every position and take one character with SUBSTRING(i, i, s).',
    '## Processing a string one character at a time');
}

// 04 Split a full name at the space
{
  let b = '';
  const cp = codePanel(30, 110, 840, ['fullName ← "Amara Diallo"', 'gap ← POSITION(fullName, " ")', 'first ← SUBSTRING(0, gap - 1, fullName)', 'last ← SUBSTRING(gap + 1, LEN(fullName) - 1, fullName)'], { size: 18, lh: 30 });
  b += cp.s;
  const y = 110 + cp.h + 70, w = 68, x0 = 50;
  b += strip(x0, y, 'Amara Diallo', { w, h: 58, size: 26, hl: { ...HL([0, 1, 2, 3, 4], C.tealLight, C.tealDark), 5: [C.cream, C.olive], ...HL([6, 7, 8, 9, 10, 11], '#dfe7f3', C.blue) } });
  b += span(x0, y - 12, w, 0, 4, C.tealDark, 'first: 0 to gap − 1 = 4');
  b += span(x0, y - 12, w, 6, 11, C.blue, 'last: gap + 1 = 6 to 11');
  b += T(x0 + 5 * w + 31, y + 118, 'gap = 5', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  const yr = y + 146;
  b += box(30, yr, 411, 64, { fill: C.tealLight, edge: C.tealDark, rx: 12 }) + code(54, yr + 40, 'first = "Amara"', { size: 20, weight: 700 });
  b += box(459, yr, 411, 64, { fill: '#dfe7f3', edge: C.blue, rx: 12 }) + code(483, yr + 40, 'last = "Diallo"', { size: 20, weight: 700 });
  b += T(450, yr + 96, 'The − 1 and + 1 leave out the space. The same pattern splits at "@" or ":".', { size: 16, anchor: 'middle', fill: C.muted });
  add('04-split-at-space',
    svg(900, yr + 124, 'POSITION finds where, SUBSTRING cuts', b),
    'In "Amara Diallo" the space is at position 5, so gap is 5. first is SUBSTRING(0, 4), giving "Amara", and last is SUBSTRING(6, 11), giving "Diallo"; the − 1 and + 1 leave out the space.',
    'Find the separator with POSITION, then cut either side of it with SUBSTRING.',
    '## Position and substring together');
}

// 05 Character codes
{
  let b = '';
  const band = (y, label, first, last, f, e, c0, c1) => {
    let s = box(30, y, 840, 84, { fill: '#ffffff', edge: C.panelEdge, rx: 12 });
    s += T(54, y + 50, label, { size: 18, weight: 700, fill: e });
    s += box(240, y + 16, 90, 52, { fill: f, edge: e }) + code(285, y + 51, first, { size: 24, weight: 700, anchor: 'middle' });
    s += code(380, y + 50, '…', { size: 24, weight: 700, anchor: 'middle', fill: C.muted });
    s += box(430, y + 16, 90, 52, { fill: f, edge: e }) + code(475, y + 51, last, { size: 24, weight: 700, anchor: 'middle' });
    s += code(590, y + 51, c0, { size: 24, weight: 700, fill: e }) + T(660, y + 49, 'to', { size: 17, anchor: 'middle', fill: C.muted }) + code(700, y + 51, c1, { size: 24, weight: 700, fill: e });
    s += T(846, y + 50, 'in sequence', { size: 15, anchor: 'end', fill: C.muted });
    return s;
  };
  b += T(450, 132, 'ASCII character codes', { size: 18, weight: 700, anchor: 'middle', fill: C.muted });
  b += band(150, 'Capital letters', 'A', 'Z', C.tealLight, C.tealDark, '65', '90');
  b += band(246, 'Lower case', 'a', 'z', C.cream, C.olive, '97', '122');
  b += band(342, 'Digits', '0', '9', '#dfe7f3', C.blue, '48', '57');
  const r = row(450, [
    { kicker: 'NEXT LETTER', title: 'D → E', body: 'CODE_TO_CHAR(CHAR_TO_CODE("D") + 1)' },
    { kicker: 'UPPER TO LOWER', title: 'G → g', body: 'CODE_TO_CHAR(CHAR_TO_CODE("G") + 32)' },
  ], { card: { size: 16, tsize: 22 } });
  b += r.s;
  const y = 450 + r.h + 16;
  const r2 = row(y, [
    { kicker: 'CAPITAL LETTER?', title: 'code ≥ 65 AND code ≤ 90' },
    { kicker: 'DIGIT?', title: 'code ≥ 48 AND code ≤ 57' },
  ], { card: { size: 16, tsize: 19, fill: C.tealLight, edge: C.tealDark } });
  b += r2.s;
  add('05-character-codes',
    svg(900, y + r2.h + 30, 'Character codes run in sequence', b),
    'In ASCII, A to Z have codes 65 to 90, a to z have 97 to 122 and the digits 0 to 9 have 48 to 57. Because they run in sequence, adding 1 to the code of D gives E, adding 32 to the code of G gives g, and range tests on the code check for a capital letter or a digit.',
    'Codes run in sequence, so arithmetic on them moves through the alphabet.',
    '## Character codes');
}

// 06 Shift cipher: wrap with MOD 26
{
  let b = '';
  const cp = codePanel(30, 110, 840, ['plain ← "ZOO"', 'secret ← ""', 'FOR i ← 0 TO LEN(plain) - 1', '  code ← CHAR_TO_CODE(SUBSTRING(i, i, plain))', '  newCode ← ((code - 65 + 3) MOD 26) + 65', '  secret ← secret + CODE_TO_CHAR(newCode)', 'ENDFOR', 'OUTPUT secret'], { size: 16, lh: 28, hl: [4] });
  b += cp.s;
  // alphabet strip 0-25
  const y = 110 + cp.h + 56, w = 32, x0 = 34;
  const L = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  [...L].forEach((ch, i) => {
    const hi = ch === 'Z' || ch === 'C', hi2 = ch === 'O' || ch === 'R';
    b += box(x0 + i * w, y, w - 3, 40, { fill: hi ? C.cream : hi2 ? C.tealLight : '#ffffff', edge: hi ? C.olive : hi2 ? C.tealDark : C.panelEdge, rx: 5, sw: 2 });
    b += code(x0 + i * w + 14.5, y + 27, ch, { size: 17, weight: 700, anchor: 'middle' });
    if (i % 5 === 0 || i === 25 || i === 2) b += code(x0 + i * w + 14.5, y + 62, String(i), { size: 15, anchor: 'middle', fill: C.muted });
  });
  b += T(x0, y - 14, 'code − 65 turns A–Z into 0–25', { size: 16, weight: 700, fill: C.muted });
  b += path(`M${x0 + 14 * w + 14},${y - 4} C${x0 + 15 * w},${y - 30} ${x0 + 16 * w},${y - 30} ${x0 + 17 * w + 14},${y - 6}`, { stroke: C.tealDark, w: 3, extra: 'marker-end="url(#ahT)"' });
  b += T(x0 + 15.5 * w + 14, y - 30, '+3', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += path(`M${x0 + 25 * w + 14},${y + 44} C${x0 + 25 * w + 14},${y + 96} ${x0 + 2 * w + 14},${y + 96} ${x0 + 2 * w + 14},${y + 46}`, { stroke: C.olive, w: 3, extra: 'marker-end="url(#ahO)"' });
  b += T(x0 + 13 * w, y + 102, 'Z: 25 + 3 = 28, and 28 MOD 26 = 2, which is C', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  const yt = y + 126;
  const cols = [{ w: 110, head: 'Letter' }, { w: 110, head: 'code' }, { w: 170, head: 'code − 65 + 3' }, { w: 130, head: 'MOD 26' }, { w: 110, head: '+ 65' }, { w: 210, head: 'New letter' }];
  const tb = table(30, yt, cols, [['Z', '90', '28', '2', '67', 'C'], ['O', '79', '17', '17', '82', 'R'], ['O', '79', '17', '17', '82', 'R']], { size: 18 });
  b += tb.s;
  const yo = yt + tb.h + 16;
  b += box(30, yo, 840, 58, { fill: C.cream, edge: C.olive, rx: 14 });
  b += T(54, yo + 37, 'Output:', { size: 19, weight: 700 }) + code(140, yo + 38, 'CRR', { size: 24, weight: 700 }) + T(226, yo + 37, 'secret starts empty and grows by concatenation each pass', { size: 16, fill: C.muted });
  add('06-shift-cipher',
    svg(900, yo + 88, 'Worked example: a shift cipher', b),
    'The cipher subtracts 65 to turn A to Z into 0 to 25, adds 3, wraps with MOD 26 and adds 65 back. Z (90) becomes 28, then 2, then 67, which is C; each O (79) becomes 17, then 82, which is R. "ZOO" is output as CRR.',
    'Subtract 65, shift, MOD 26 to wrap from Z to A, then add 65 back.',
    '## Worked example: a shift cipher');
}

// 07 Building a username
{
  let b = '';
  const cp = codePanel(30, 110, 840, ['surname ← "Okafor"', 'year ← 2009', 'yearText ← INT_TO_STRING(year)', 'username ← SUBSTRING(0, 2, surname) + SUBSTRING(2, 3, yearText)', 'OUTPUT username'], { size: 16, lh: 28 });
  b += cp.s;
  const y = 110 + cp.h + 64;
  b += strip(60, y, 'Okafor', { w: 58, h: 54, size: 24, hl: HL([0, 1, 2], C.tealLight, C.tealDark) });
  b += span(60, y - 12, 58, 0, 2, C.tealDark, 'SUBSTRING(0, 2, surname)');
  b += strip(500, y, '2009', { w: 58, h: 54, size: 24, hl: HL([2, 3], C.cream, C.olive) });
  b += span(500, y - 12, 58, 2, 3, C.olive, 'SUBSTRING(2, 3, yearText)');
  b += T(500 + 116, y + 110, 'yearText = "2009"', { size: 16, weight: 700, anchor: 'middle', fill: C.muted });
  const yr = y + 132;
  b += box(250, yr, 400, 66, { fill: C.ink, edge: C.ink, rx: 14 });
  b += code(450, yr + 43, '"Oka" + "09" = "Oka09"', { size: 22, weight: 700, anchor: 'middle', fill: '#ffffff' });
  const yw = yr + 90;
  b += panel(30, yw, 840, 96, '#ffffff', C.rust);
  b += code(54, yw + 40, 'INT_TO_STRING(year MOD 100)', { size: 19, weight: 700, fill: C.rust }) + T(400, yw + 39, 'gives "9": the leading zero is lost', { size: 17, weight: 700, fill: C.rust });
  b += T(54, yw + 74, 'So convert the year to a string first, then take its last two characters.', { size: 16, fill: C.muted });
  add('07-building-a-username',
    svg(900, yw + 126, 'Worked example: building a username', b),
    'The username takes SUBSTRING(0, 2) of "Okafor", which is "Oka", and SUBSTRING(2, 3) of the year converted to the string "2009", which is "09", joining them as "Oka09". Using INT_TO_STRING(year MOD 100) instead would give "9" and lose the leading zero.',
    'Convert the year to a string first, so the substring keeps the leading zero.',
    '## Worked example: building a username');
}
