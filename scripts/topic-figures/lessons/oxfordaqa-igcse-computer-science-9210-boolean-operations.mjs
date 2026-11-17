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

export const slug = 'oxfordaqa-igcse-computer-science-9210-boolean-operations';

// True/False cell
const tfCell = (x, y, w, h, v, o = {}) => {
  const tr = v === 'True' || v === 'Allowed';
  return `<rect x="${x + 3}" y="${y + 3}" width="${w - 6}" height="${h - 6}" rx="8" fill="${tr ? C.tealLight : '#ffffff'}" stroke="${tr ? C.tealDark : C.panelEdge}" stroke-width="2"/>` +
    T(x + w / 2, y + h / 2 + 6, v, { size: o.size || 17, weight: tr ? 700 : 400, anchor: 'middle', fill: tr ? C.tealDark : C.muted });
};
// Logic gate symbols (width 90, height 64)
const gate = (type, x, y) => {
  const w = 90, h = 64, st = `fill="${C.cream}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"`;
  if (type === 'AND') return `<path d="M${x},${y} H${x + w / 2} A${h / 2},${h / 2} 0 0 1 ${x + w / 2},${y + h} H${x} Z" ${st}/>`;
  if (type === 'OR') return `<path d="M${x - 6},${y} Q${x + 18},${y + h / 2} ${x - 6},${y + h} Q${x + w * 0.62},${y + h} ${x + w},${y + h / 2} Q${x + w * 0.62},${y} ${x - 6},${y} Z" ${st}/>`;
  return `<path d="M${x},${y + 4} L${x + w - 20},${y + h / 2} L${x},${y + h - 4} Z" ${st}/><circle cx="${x + w - 12}" cy="${y + h / 2}" r="8" fill="#ffffff" stroke="${C.ink}" stroke-width="3"/>`;
};
const wire = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${C.ink}" stroke-width="3"/>`;

// 01 The three operators: symbols and truth table
{
  let b = '';
  const cards = [
    ['AND', 'True only when both are True'],
    ['OR', 'True when at least one is True'],
    ['NOT', 'Reverses one value'],
  ];
  cards.forEach(([g, d], i) => {
    const y = 110 + i * 150;
    b += panel(30, y, 330, 136);
    const gx = 90, gy = y + 22;
    if (g === 'NOT') { b += wire(46, gy + 32, gx, gy + 32) + T(44, gy + 26, 'A', { size: 16, weight: 700 }); }
    else { b += wire(46, gy + 16, gx + 4, gy + 16) + wire(46, gy + 48, gx + 4, gy + 48) + T(44, gy + 10, 'A', { size: 16, weight: 700 }) + T(44, gy + 70, 'B', { size: 16, weight: 700 }); }
    b += gate(g, gx, gy) + wire(gx + 90, gy + 32, gx + 130, gy + 32);
    b += code(240, gy + 40, g, { size: 24, weight: 700 });
    b += T(50, y + 118, d, { size: 17, fill: C.muted });
  });
  // truth table
  const x0 = 384, y0 = 110, cw2 = 97, hh = 56, rh = 82;
  const heads = ['A', 'B', 'A AND B', 'A OR B', 'NOT A'];
  b += `<rect x="${x0}" y="${y0}" width="${cw2 * 5}" height="${hh}" rx="10" fill="${C.ink}"/>`;
  heads.forEach((h, i) => { b += code(x0 + i * cw2 + cw2 / 2, y0 + 35, h, { size: h.length > 5 ? 15 : 18, weight: 700, anchor: 'middle', fill: '#ffffff' }); });
  const rows = [['False', 'False', 'False', 'False', 'True'], ['False', 'True', 'False', 'True', 'True'], ['True', 'False', 'False', 'True', 'False'], ['True', 'True', 'True', 'True', 'False']];
  rows.forEach((r, ri) => {
    const y = y0 + hh + 8 + ri * rh;
    r.forEach((v, ci) => { b += tfCell(x0 + ci * cw2, y, cw2, rh - 6, v); });
  });
  b += `<line x1="${x0 + 2 * cw2 - 2}" y1="${y0 + hh + 6}" x2="${x0 + 2 * cw2 - 2}" y2="${y0 + hh + 6 + 4 * rh}" stroke="${C.ink}" stroke-width="2.5"/>`;
  const yb = 110 + 3 * 150 + 4;
  b += `<rect x="30" y="${yb}" width="840" height="58" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
  b += T(450, yb + 36, 'OR is also True when both sides are True; it does not mean "one but not both".', { size: 17, weight: 600, anchor: 'middle' });
  add('01-and-or-not-truth-table',
    svg(900, yb + 88, 'NOT, AND and OR', b),
    'Logic symbols for AND, OR and NOT beside a truth table for inputs A and B. A AND B is True only in the row where both are True; A OR B is True in every row except False, False; NOT A is True when A is False.',
    'AND needs both, OR needs at least one, NOT flips a single value.',
    '## The three operators');
}

// 02 AND versus OR in selection: Venn view
{
  let b = '';
  const venn = (x, mode) => {
    const cy = 290, r = 92, c1 = x + 150, c2 = x + 262, id = 'v' + mode;
    let s = panel(x, 110, 411, 370);
    s += code(x + 205, 150, mode === 'and' ? 'hot AND humid' : 'hot OR humid', { size: 22, weight: 700, anchor: 'middle' });
    s += `<defs><clipPath id="${id}"><circle cx="${c1}" cy="${cy}" r="${r}"/></clipPath></defs>`;
    if (mode === 'or') s += `<circle cx="${c1}" cy="${cy}" r="${r}" fill="${C.teal}"/><circle cx="${c2}" cy="${cy}" r="${r}" fill="${C.teal}"/>`;
    else s += `<circle cx="${c2}" cy="${cy}" r="${r}" fill="${C.teal}" clip-path="url(#${id})"/>`;
    s += `<circle cx="${c1}" cy="${cy}" r="${r}" fill="none" stroke="${C.ink}" stroke-width="3"/><circle cx="${c2}" cy="${cy}" r="${r}" fill="none" stroke="${C.ink}" stroke-width="3"/>`;
    s += code(c1 - 38, cy - 6, 'temp', { size: 16, anchor: 'middle', weight: 700 }) + code(c1 - 38, cy + 16, '> 30', { size: 16, anchor: 'middle', weight: 700 });
    s += code(c2 + 38, cy - 6, 'humidity', { size: 16, anchor: 'middle', weight: 700 }) + code(c2 + 38, cy + 16, '> 70', { size: 16, anchor: 'middle', weight: 700 });
    s += T(x + 205, 420, mode === 'and' ? 'Warning only when both hold' : 'Warning on every hot day', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
    if (mode === 'or') s += T(x + 205, 446, 'and every humid day', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
    return s;
  };
  b += venn(30, 'and') + venn(459, 'or');
  const cp = codePanel(30, 504, 840, ['IF temperature > 30 AND humidity > 70 THEN', '  OUTPUT "Heat warning"', 'ENDIF'], { size: 18, lh: 30 });
  b += cp.s;
  const y = 504 + cp.h + 20;
  b += `<rect x="30" y="${y}" width="840" height="92" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
  b += T(54, y + 36, 'Read the rule, not the word', { size: 18, weight: 700 });
  b += T(54, y + 66, '"A discount for students and pensioners" means a person who is either: that needs OR.', { size: 17 });
  add('02-and-versus-or',
    svg(900, y + 122, 'AND or OR? It changes the program', b),
    'Two overlapping circles for temperature > 30 and humidity > 70. With AND only the overlap is shaded, so the warning shows only when both hold; with OR both circles are shaded, so it warns on every hot day and every humid day. A note says "students and pensioners" needs OR.',
    'Choose AND or OR from the meaning of the rule; the English word "and" can mean either.',
    '## Compound conditions in selection');
}

// 03 Compound conditions in loops: WHILE vs REPEAT flowcharts
{
  let b = '';
  const diamond = (cx, cy, w, h, lines, fill = C.cream) => `<path d="M${cx},${cy - h / 2} L${cx + w / 2},${cy} L${cx},${cy + h / 2} L${cx - w / 2},${cy} Z" fill="${fill}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>` +
    lines.map((l, i) => code(cx, cy + 6 + (i - (lines.length - 1) / 2) * 22, l, { size: 16, weight: 700, anchor: 'middle' })).join('');
  const box = (cx, cy, w, s, o = {}) => `<rect x="${cx - w / 2}" y="${cy - 26}" width="${w}" height="52" rx="${o.rx ?? 10}" fill="${o.fill || '#ffffff'}" stroke="${C.ink}" stroke-width="3"/>` + code(cx, cy + 6, s, { size: 17, weight: 700, anchor: 'middle' });
  const lab = (x, y, s, f) => T(x, y, s, { size: 16, weight: 700, fill: f, anchor: 'middle' });
  // WHILE panel
  b += panel(30, 110, 411, 560) + T(235, 146, 'WHILE: test first', { size: 20, weight: 700, anchor: 'middle' });
  b += box(200, 196, 110, 'Start', { rx: 26, fill: C.tealLight });
  b += arrow(200, 222, 200, 262);
  b += diamond(200, 330, 260, 130, ['lives > 0', 'AND NOT won']);
  b += arrow(200, 395, 200, 442, { color: C.tealDark, marker: 'ahT' }) + lab(222, 426, 'True', C.tealDark);
  b += box(200, 470, 170, 'PlayTurn()');
  b += path('M115,470 L50,470 L50,250 L194,250', { extra: `marker-end="url(#ah)"` });
  b += lab(364, 316, 'False', C.rust);
  b += path('M330,330 L410,330 L410,600 L262,600', { stroke: C.rust, extra: `marker-end="url(#ahR)"` });
  b += box(200, 600, 110, 'End', { rx: 26, fill: C.tealLight });
  b += T(235, 652, 'May play zero turns', { size: 16, fill: C.muted, anchor: 'middle' });
  // REPEAT panel
  b += panel(459, 110, 411, 560) + T(664, 146, 'REPEAT: test at the end', { size: 20, weight: 700, anchor: 'middle' });
  b += box(640, 196, 110, 'Start', { rx: 26, fill: C.tealLight });
  b += arrow(640, 222, 640, 262);
  b += box(640, 290, 170, 'PlayTurn()');
  b += arrow(640, 316, 640, 354);
  b += diamond(640, 430, 320, 150, ['NOT (lives > 0', 'AND NOT won)']);
  b += path('M480,430 L480,290 L549,290', { stroke: C.rust, extra: `marker-end="url(#ahR)"` }) + lab(510, 400, 'False', C.rust);
  b += arrow(640, 505, 640, 570, { color: C.tealDark, marker: 'ahT' }) + lab(664, 546, 'True', C.tealDark);
  b += box(640, 600, 110, 'End', { rx: 26, fill: C.tealLight });
  b += T(664, 652, 'Always plays at least one turn', { size: 16, fill: C.muted, anchor: 'middle' });
  const y = 694;
  b += `<rect x="30" y="${y}" width="840" height="64" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
  b += T(450, y + 40, 'The loop ends as soon as either part fails: lives reach 0, or won becomes True.', { size: 17, weight: 600, anchor: 'middle' });
  add('03-compound-loop-conditions',
    svg(900, y + 94, 'Two reasons to stop a loop', b),
    'Two flowcharts. WHILE lives > 0 AND NOT won tests before each turn and loops back while True. REPEAT PlayTurn() UNTIL NOT (lives > 0 AND NOT won) plays a turn first, then stops when the reversed condition is True, so it always plays at least one turn.',
    'Putting NOT around the whole WHILE condition gives the matching UNTIL condition.',
    '## Compound conditions in iteration');
}

// 04 Range checks on a number line
{
  let b = '';
  const x0 = 250, x1 = 830, X0 = (v) => x0 + 70 + (v * (x1 - x0 - 140)) / 100; // 0 at x0+70, 100 at x1-70
  const rowFn = (y, title, cond, kind, note, ok) => {
    let s = panel(30, y, 840, 150);
    s += code(54, y + 42, cond, { size: 18, weight: 700 });
    s += T(54, y + 76, title, { size: 17, weight: 700, fill: ok ? C.tealDark : C.rust });
    s += para(54, y + 104, note, 180, { size: 15, fill: C.muted }).s;
    const ly = y + 100;
    if (kind === 'in') s += `<rect x="${X0(0)}" y="${ly - 12}" width="${X0(100) - X0(0)}" height="24" rx="6" fill="${C.teal}"/>`;
    if (kind === 'out') s += `<rect x="${x0}" y="${ly - 12}" width="${X0(0) - x0 - 10}" height="24" rx="6" fill="${C.mustard}"/>` + `<rect x="${X0(100) + 10}" y="${ly - 12}" width="${x1 - X0(100) - 10}" height="24" rx="6" fill="${C.mustard}"/>`;
    s += `<line x1="${x0}" y1="${ly}" x2="${x1}" y2="${ly}" stroke="${C.ink}" stroke-width="3"/>`;
    [0, 100].forEach((v) => { s += `<line x1="${X0(v)}" y1="${ly - 18}" x2="${X0(v)}" y2="${ly + 18}" stroke="${C.ink}" stroke-width="3"/>` + T(X0(v), ly - 26, String(v), { size: 17, weight: 700, anchor: 'middle' }); });
    if (kind === 'never') s += T((X0(0) + X0(100)) / 2, ly - 22, 'no number is below 0 and above 100', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
    return s;
  };
  b += rowFn(110, 'Inside: both limits hold', 'mark ≥ 0 AND mark ≤ 100', 'in', 'Join the two limits with AND.', true);
  b += rowFn(276, 'Outside: one limit broken', 'mark < 0 OR mark > 100', 'out', 'Join the two limits with OR.', true);
  b += rowFn(442, 'Never True', 'mark < 0 AND mark > 100', 'never', 'A common error in out-of-range tests.', false);
  add('04-range-checks',
    svg(900, 622, 'Range checks: AND inside, OR outside', b),
    'Three number lines marked 0 and 100. mark ≥ 0 AND mark ≤ 100 shades the range between the limits. mark < 0 OR mark > 100 shades both ends beyond the limits. mark < 0 AND mark > 100 shades nothing, because no number is both below 0 and above 100.',
    'Inside a range needs both limits (AND); outside needs either one broken (OR).',
    '## Range checks: AND inside, OR outside');
}

// 05 Boolean flag
{
  let b = '';
  const cp = codePanel(30, 110, 400, ['found ← False', 'FOR i ← 0 TO 9', '  IF codes[i] = target THEN', '    found ← True', '  ENDIF', 'ENDFOR', 'IF NOT found THEN', '  OUTPUT "Code not recognised"', 'ENDIF'], { size: 16, lh: 32, hl: [0, 3, 6] });
  b += cp.s;
  const px = 452;
  b += panel(px, 110, 418, cp.h);
  b += T(px + 209, 146, 'The flag only switches one way', { size: 19, weight: 700, anchor: 'middle' });
  const sw = (x, y, v, on) => `<rect x="${x}" y="${y}" width="150" height="66" rx="33" fill="${on ? C.tealLight : '#ffffff'}" stroke="${on ? C.tealDark : C.ink}" stroke-width="3"/>` + code(x + 75, y + 41, v, { size: 22, weight: 700, anchor: 'middle', fill: on ? C.tealDark : C.ink });
  b += sw(px + 24, 178, 'False', false) + sw(px + 244, 178, 'True', true);
  b += arrow(px + 178, 211, px + 238, 211, { color: C.tealDark, marker: 'ahT' });
  b += T(px + 99, 270, 'before the loop', { size: 15, anchor: 'middle', fill: C.muted });
  b += T(px + 319, 270, 'a match on any pass', { size: 15, anchor: 'middle', fill: C.muted });
  b += `<rect x="${px + 24}" y="290" width="370" height="54" rx="10" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>`;
  b += T(px + 209, 323, 'Never set back to False in the loop', { size: 16, weight: 700, anchor: 'middle' });
  b += para(px + 24, 374, 'After the loop, NOT found is True only when no item matched.', 370, { size: 17 }).s;
  const y = 110 + cp.h + 20;
  b += `<rect x="30" y="${y}" width="840" height="64" rx="14" fill="#ffffff" stroke="${C.rust}" stroke-width="2.5"/>`;
  b += T(450, y + 40, 'Resetting found to False on a mismatch would mean only the last comparison counted.', { size: 17, weight: 600, anchor: 'middle', fill: C.rust });
  add('05-boolean-flag',
    svg(900, y + 94, 'A Boolean flag remembers a result', b),
    'Pseudocode that sets found to False, loops through codes[0] to codes[9] setting found to True on a match, then outputs "Code not recognised" if NOT found. Beside it, the flag switches from False to True on any match and is never switched back inside the loop.',
    'A flag starts False, can only be switched to True in the loop, and is tested after it.',
    '## Boolean variables as flags');
}

// 06 Order of evaluation: two bracketings
{
  let b = '';
  const nd = (cx, cy, op, val) => {
    const tr = val === 'True';
    return `<rect x="${cx - 62}" y="${cy - 30}" width="124" height="60" rx="12" fill="${tr ? C.tealLight : '#ffffff'}" stroke="${tr ? C.tealDark : C.ink}" stroke-width="3"/>` +
      code(cx, cy - 4, op, { size: 17, weight: 700, anchor: 'middle' }) + T(cx, cy + 20, val, { size: 15, weight: 700, anchor: 'middle', fill: tr ? C.tealDark : C.rust });
  };
  const leaf = (cx, cy, name, val) => {
    const tr = val === 'True';
    return code(cx, cy, name, { size: 16, weight: 700, anchor: 'middle' }) + T(cx, cy + 22, val, { size: 15, weight: 700, anchor: 'middle', fill: tr ? C.tealDark : C.rust });
  };
  const ln = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += `<rect x="30" y="110" width="840" height="56" rx="14" fill="${C.ink}"/>`;
  b += T(54, 145, 'Applied in order:', { size: 17, weight: 700, fill: C.mustard });
  b += code(250, 145, 'NOT  →  AND  →  OR', { size: 20, weight: 700, fill: '#ffffff' });
  b += T(846, 145, 'like × before +', { size: 16, fill: C.teal, anchor: 'end' });
  // Tree A: hasKey OR (isAdmin AND isLoggedIn)
  const yA = 190;
  b += panel(30, yA, 411, 380);
  b += code(235, yA + 40, 'hasKey OR', { size: 18, weight: 700, anchor: 'middle' }) + code(235, yA + 66, '(isAdmin AND isLoggedIn)', { size: 18, weight: 700, anchor: 'middle' });
  b += ln(235, yA + 140, 120, yA + 236) + ln(235, yA + 140, 320, yA + 220) + ln(320, yA + 220, 255, yA + 300) + ln(320, yA + 220, 385, yA + 300);
  b += nd(235, yA + 130, 'OR', 'True') + nd(320, yA + 220, 'AND', 'False');
  b += `<rect x="62" y="${yA + 228}" width="116" height="52" rx="10" fill="${C.panel}"/>` + leaf(120, yA + 250, 'hasKey', 'True');
  b += `<rect x="200" y="${yA + 302}" width="112" height="52" rx="10" fill="${C.panel}"/>` + leaf(250, yA + 322, 'isAdmin', 'False');
  b += `<rect x="330" y="${yA + 302}" width="106" height="52" rx="10" fill="${C.panel}"/>` + leaf(385, yA + 322, 'isLoggedIn', 'False');
  // Tree B: (hasKey OR isAdmin) AND isLoggedIn
  const xB = 459;
  b += panel(xB, yA, 411, 380);
  b += code(xB + 205, yA + 40, '(hasKey OR isAdmin)', { size: 18, weight: 700, anchor: 'middle' }) + code(xB + 205, yA + 66, 'AND isLoggedIn', { size: 18, weight: 700, anchor: 'middle' });
  b += ln(xB + 205, yA + 140, xB + 110, yA + 220) + ln(xB + 205, yA + 140, xB + 320, yA + 236) + ln(xB + 110, yA + 220, xB + 50, yA + 300) + ln(xB + 110, yA + 220, xB + 170, yA + 300);
  b += nd(xB + 205, yA + 130, 'AND', 'False') + nd(xB + 110, yA + 220, 'OR', 'True');
  b += `<rect x="${xB + 262}" y="${yA + 228}" width="116" height="52" rx="10" fill="${C.panel}"/>` + leaf(xB + 320, yA + 250, 'isLoggedIn', 'False');
  b += `<rect x="${xB + 4}" y="${yA + 302}" width="96" height="52" rx="10" fill="${C.panel}"/>` + leaf(xB + 50, yA + 322, 'hasKey', 'True');
  b += `<rect x="${xB + 118}" y="${yA + 302}" width="106" height="52" rx="10" fill="${C.panel}"/>` + leaf(xB + 170, yA + 322, 'isAdmin', 'False');
  const y = yA + 404;
  b += `<rect x="30" y="${y}" width="840" height="64" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
  b += T(450, y + 40, 'Same values, different answers: always bracket a condition that mixes AND and OR.', { size: 17, weight: 600, anchor: 'middle' });
  add('06-order-of-evaluation',
    svg(900, y + 94, 'Order of evaluation: NOT, AND, OR', b),
    'With hasKey True, isAdmin False and isLoggedIn False, two evaluation trees are compared. hasKey OR (isAdmin AND isLoggedIn), the default reading, evaluates the AND to False and the OR to True. (hasKey OR isAdmin) AND isLoggedIn evaluates the OR to True and the AND to False.',
    'hasKey OR isAdmin AND isLoggedIn means hasKey OR (isAdmin AND isLoggedIn); brackets remove the doubt.',
    '## Order of evaluation');
}

// 07 Worked example: cinema condition evaluated column by column
{
  let b = '';
  const cp = codePanel(30, 110, 840, ['IF age ≥ 15 OR (withAdult AND age ≥ 12) THEN', '  OUTPUT "Allowed"', 'ELSE', '  OUTPUT "Not allowed"', 'ENDIF'], { size: 18, lh: 29 });
  b += cp.s;
  const y0 = 110 + cp.h + 22;
  const cols = [[70, 'age'], [124, 'withAdult'], [124, 'age ≥ 15'], [214, 'withAdult AND age ≥ 12'], [138, 'Whole condition'], [170, 'Output']];
  let cx = 30;
  b += `<rect x="30" y="${y0}" width="840" height="70" rx="10" fill="${C.ink}"/>`;
  const xs = [];
  cols.forEach(([w, h], i) => {
    xs.push(cx);
    const lines = i === 3 ? ['withAdult AND', 'age ≥ 12'] : i === 4 ? ['Whole', 'condition'] : [h];
    lines.forEach((l, li) => { b += code(cx + w / 2, y0 + 42 + (li - (lines.length - 1) / 2) * 22, l, { size: i >= 4 ? 16 : 16, weight: 700, anchor: 'middle', fill: i === 4 || i === 5 ? C.mustard : '#ffffff' }); });
    cx += w;
  });
  const rows = [['16', 'False', 'True', 'False', 'True', 'Allowed'], ['13', 'True', 'False', 'True', 'True', 'Allowed'], ['13', 'False', 'False', 'False', 'False', 'Not allowed'], ['10', 'True', 'False', 'False', 'False', 'Not allowed']];
  const rh = 58;
  rows.forEach((r, ri) => {
    const y = y0 + 76 + ri * rh;
    r.forEach((v, ci) => {
      const w = cols[ci][0];
      if (ci === 0) b += `<rect x="${xs[ci] + 3}" y="${y + 3}" width="${w - 6}" height="${rh - 6}" rx="8" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/>` + code(xs[ci] + w / 2, y + rh / 2 + 7, v, { size: 20, weight: 700, anchor: 'middle' });
      else if (ci === 1) b += `<rect x="${xs[ci] + 3}" y="${y + 3}" width="${w - 6}" height="${rh - 6}" rx="8" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/>` + T(xs[ci] + w / 2, y + rh / 2 + 6, v, { size: 17, weight: 600, anchor: 'middle' });
      else b += tfCell(xs[ci], y, w, rh, v);
    });
  });
  const yb = y0 + 76 + 4 * rh;
  b += `<line x1="${xs[2] - 1}" y1="${y0 + 74}" x2="${xs[2] - 1}" y2="${yb}" stroke="${C.ink}" stroke-width="2.5" stroke-dasharray="6 5"/>`;
  b += T(xs[0] + 97, yb + 30, 'inputs', { size: 16, weight: 700, anchor: 'middle', fill: C.muted });
  b += T(xs[2] + 170, yb + 30, 'one column for each part of the condition', { size: 16, weight: 700, anchor: 'middle', fill: C.muted });
  b += T(xs[4] + 154, yb + 30, 'then combine with OR', { size: 16, weight: 700, anchor: 'middle', fill: C.muted });
  add('07-cinema-condition-table',
    svg(900, yb + 60, 'Evaluating a condition, part by part', b),
    'The condition age ≥ 15 OR (withAdult AND age ≥ 12) evaluated for four inputs. Age 16 without an adult and age 13 with an adult are Allowed; age 13 without an adult and age 10 with an adult are Not allowed, because neither part is True.',
    'Give each part of the condition its own column, then combine them.',
    '## Worked example: evaluating a condition for several inputs');
}
