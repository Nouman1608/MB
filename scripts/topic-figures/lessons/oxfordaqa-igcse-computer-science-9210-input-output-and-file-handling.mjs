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

export const slug = 'oxfordaqa-igcse-computer-science-9210-input-output-and-file-handling';

const box = (x, y, w, h, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 12}" fill="${o.fill || '#ffffff'}" stroke="${o.edge || C.ink}" stroke-width="${o.sw || 2.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
const strTag = (x, y, s, o = {}) => box(x, y, cw(s, o.size || 20) + 28, 46, { fill: o.fill || '#ffffff', edge: o.edge || C.ink, rx: 10 }) + code(x + 14, y + 30, s, { size: o.size || 20, weight: 700, fill: o.tf || C.ink });
// text file icon with lines
const fileIcon = (x, y, w, h, name, lines, o = {}) => {
  let s = `<path d="M${x},${y} H${x + w - 28} L${x + w},${y + 28} V${y + h} H${x} Z" fill="${o.fill || '#ffffff'}" stroke="${o.edge || C.ink}" stroke-width="2.5" stroke-linejoin="round"/>` +
    `<path d="M${x + w - 28},${y} V${y + 28} H${x + w}" fill="none" stroke="${o.edge || C.ink}" stroke-width="2.5" stroke-linejoin="round"/>`;
  s += code(x + 14, y + 26, name, { size: 16, weight: 700, fill: C.tealDark });
  lines.forEach((l, i) => { s += code(x + 14, y + 58 + i * (o.lh || 26), l.t ?? l, { size: o.size || 16, fill: l.c || C.ink, weight: l.c ? 700 : 400 }); });
  return s;
};

// 01 Keyboard input: prompt, string, convert
{
  let b = '';
  const y = 130;
  // screen
  b += box(30, y, 250, 150, { fill: C.ink, edge: C.ink }) + `<rect x="120" y="${y + 150}" width="70" height="20" fill="${C.muted}"/><rect x="95" y="${y + 170}" width="120" height="10" rx="4" fill="${C.muted}"/>`;
  b += T(50, y + 34, 'DISPLAY', { size: 15, weight: 700, fill: C.mustard });
  b += code(50, y + 74, 'Enter your age', { size: 18, fill: '#ffffff' });
  b += code(50, y + 110, '16', { size: 20, weight: 700, fill: C.teal }) + `<rect x="78" y="${y + 92}" width="12" height="22" fill="${C.teal}"/>`;
  b += T(155, y + 216, '1  Prompt first', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += T(155, y + 240, 'say what to type', { size: 16, anchor: 'middle', fill: C.muted });
  b += arrow(290, y + 100, 340, y + 100);
  b += T(470, y - 6, 'USERINPUT', { size: 16, weight: 700, anchor: 'middle', fill: C.muted });
  b += box(350, y + 20, 240, 150, { fill: C.cream, edge: C.olive });
  b += T(470, y + 56, 'arrives as a String', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  b += code(470, y + 112, '"16"', { size: 34, weight: 700, anchor: 'middle' });
  b += T(470, y + 150, 'characters, not a number', { size: 15, anchor: 'middle', fill: C.muted });
  b += arrow(596, y + 100, 646, y + 100);
  b += box(656, y + 20, 214, 150, { fill: C.tealLight, edge: C.tealDark });
  b += T(763, y + 56, 'converted: Integer', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += code(763, y + 112, '16', { size: 34, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += T(763, y + 150, 'ready for arithmetic', { size: 15, anchor: 'middle', fill: C.muted });
  b += T(621, y + 216, '2  Convert numbers before arithmetic', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  const cp = codePanel(30, y + 270, 840, ['OUTPUT "Enter your age"', 'age ← STRING_TO_INT(USERINPUT)'], { size: 19, lh: 32 });
  b += cp.s;
  const yp = y + 270 + cp.h + 16;
  b += T(30, yp + 20, 'Python:', { size: 17, weight: 700 }) + code(110, yp + 20, 'age = int(input("Enter your age: "))', { size: 18, weight: 700, fill: C.tealDark });
  b += T(30, yp + 50, 'For a real number, use STRING_TO_REAL(USERINPUT).', { size: 16, fill: C.muted });
  add('01-keyboard-input',
    svg(900, yp + 80, 'Keyboard input: prompt, then convert', b),
    'The display shows the prompt "Enter your age" and the user types 16. USERINPUT arrives as the string "16", which STRING_TO_INT converts to the integer 16, ready for arithmetic. The pseudocode is OUTPUT "Enter your age" followed by age ← STRING_TO_INT(USERINPUT); in Python, age = int(input("Enter your age: ")).',
    'Prompt the user, then convert the string that arrives before doing arithmetic.',
    '## Keyboard input');
}

// 02 Output: data versus information
{
  let b = '';
  const scr = (x, title, txt, ok) => {
    let s = panel(x, 110, 411, 220) + T(x + 205, 148, title, { size: 19, weight: 700, anchor: 'middle', fill: ok ? C.tealDark : C.rust });
    s += box(x + 30, 170, 351, 100, { fill: C.ink, edge: C.ink }) + code(x + 205, 232, txt, { size: 26, weight: 700, anchor: 'middle', fill: '#ffffff' });
    s += T(x + 205, 306, ok ? 'the user knows what the number means' : 'what is this number?', { size: 16, anchor: 'middle', fill: C.muted });
    return s;
  };
  b += scr(30, 'Just data', '14.5', false) + scr(459, 'Information', 'Total cost: 14.5', true);
  const y = 354, ex = 'OUTPUT "Total cost: " + REAL_TO_STRING(total)', sz = 20;
  b += box(30, y, 840, 160, { fill: '#ffffff', edge: C.panelEdge });
  const sx = 54;
  b += code(sx, y + 52, ex, { size: sz, weight: 700 });
  const p1 = sx + cw('OUTPUT ', sz), w1 = cw('"Total cost: "', sz), p2 = sx + cw('OUTPUT "Total cost: " + ', sz), w2 = cw('REAL_TO_STRING(total)', sz), pp = sx + cw('OUTPUT "Total cost: " ', sz);
  b += `<line x1="${p1}" y1="${y + 66}" x2="${p1 + w1}" y2="${y + 66}" stroke="${C.olive}" stroke-width="4"/>`;
  b += `<line x1="${p2}" y1="${y + 66}" x2="${p2 + w2}" y2="${y + 66}" stroke="${C.tealDark}" stroke-width="4"/>`;
  b += T(p1 + w1 / 2, y + 94, 'fixed text', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  b += T(p2 + w2 / 2, y + 94, 'number converted to a string', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += T(54, y + 136, 'Many languages also accept items separated by commas, which avoids the conversion.', { size: 16, fill: C.muted });
  add('02-output-data-information',
    svg(900, y + 190, 'Output: data or information?', b),
    'Two displays: 14.5 on its own is just data, while "Total cost: 14.5" is information because the user knows what the number means. The statement OUTPUT "Total cost: " + REAL_TO_STRING(total) joins fixed text to the number after converting it to a string.',
    'Label every value you output so it becomes information.',
    '## Output to the display');
}

// 03 Why text files: persistence
{
  let b = '';
  b += panel(30, 110, 400, 300) + T(230, 148, 'Variables (in the running program)', { size: 18, weight: 700, anchor: 'middle' });
  ['score', 'name', 'level'].forEach((v, i) => { b += box(60 + i * 120, 176, 100, 60, { fill: C.tealLight, edge: C.tealDark }) + code(110 + i * 120, 212, v, { size: 17, weight: 700, anchor: 'middle' }); });
  b += box(60, 268, 340, 110, { fill: '#ffffff', edge: C.rust, dash: '9 7' });
  b += T(230, 312, 'Program ends:', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  b += T(230, 342, 'the values are lost', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  b += arrow(440, 260, 500, 260, { w: 4 }) + T(470, 240, 'save', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += panel(510, 110, 360, 300, C.tealLight, C.tealDark) + T(690, 148, 'Text file on secondary storage', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += fileIcon(560, 170, 260, 170, 'scores.txt', ['lines of characters', '…', '…']);
  b += T(690, 380, 'still there next time; can be shared', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  const r = row(434, [{ title: 'High scores' }, { title: 'Event logs' }, { title: 'Settings' }, { title: 'Word or question lists' }], { card: { size: 16, tsize: 18, align: 'middle' } });
  b += r.s;
  const y = 434 + r.h + 16;
  b += `<rect x="30" y="${y}" width="840" height="60" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
  b += T(450, y + 38, 'Numbers read from a text file are strings until converted, just like keyboard input.', { size: 17, weight: 600, anchor: 'middle' });
  add('03-why-text-files',
    svg(900, y + 90, 'Why use a text file?', b),
    'Variables in a running program lose their values when it ends, but data saved to a text file on secondary storage is still there next time and can be shared with other programs. Typical uses are high scores, event logs, settings and lists of words or questions. Numbers read from a file are strings until converted.',
    'A text file makes data persist after the program ends.',
    '## Why use text files?');
}

// 04 Reading a file: flowchart + code
{
  let b = '';
  const step = (cx, cy, w, s, o = {}) => box(cx - w / 2, cy - 28, w, 56, { fill: o.fill || '#ffffff', edge: o.edge || C.ink, rx: o.rx ?? 10 }) + T(cx, cy + 6, s, { size: 17, weight: 700, anchor: 'middle', fill: o.tf || C.ink });
  const cx = 210;
  b += panel(30, 110, 360, 560);
  b += step(cx, 168, 240, '1  Open for reading', { fill: C.tealLight, edge: C.tealDark });
  b += arrow(cx, 196, cx, 236);
  b += `<path d="M${cx},${242} L${cx + 120},${312} L${cx},${382} L${cx - 120},${312} Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  b += T(cx, 306, '2  End of', { size: 17, weight: 700, anchor: 'middle' }) + T(cx, 328, 'file?', { size: 17, weight: 700, anchor: 'middle' });
  b += arrow(cx, 382, cx, 430, { color: C.tealDark, marker: 'ahT' }) + T(cx + 14, 414, 'no', { size: 16, weight: 700, fill: C.tealDark });
  b += step(cx, 458, 240, '3  Read a line, process it');
  b += path(`M${cx - 120},458 L56,458 L56,212 L${cx - 6},212`, { extra: 'marker-end="url(#ah)"' });
  b += path(`M${cx + 120},312 L364,312 L364,560 L${cx + 128},560`, { stroke: C.rust, extra: 'marker-end="url(#ahR)"' }) + T(342, 300, 'yes', { size: 16, weight: 700, fill: C.rust, anchor: 'middle' });
  b += step(cx, 560, 240, '4  Close the file', { fill: C.tealLight, edge: C.tealDark });
  b += T(cx, 630, 'an empty file: zero reads', { size: 15, anchor: 'middle', fill: C.muted });
  const cp = codePanel(410, 110, 460, ['total ← 0', 'count ← 0', 'file ← OPEN_FILE_READ("scores.txt")', 'WHILE NOT END_OF_FILE(file)', '  line ← READ_LINE(file)', '  total ← total + STRING_TO_INT(line)', '  count ← count + 1', 'ENDWHILE', 'CLOSE_FILE(file)', 'OUTPUT total / count'], { size: 16, lh: 30, hl: [2, 3, 4, 8] });
  b += cp.s;
  const yn = 110 + cp.h + 16;
  b += box(410, yn, 460, 560 + 110 - yn, { fill: '#ffffff', edge: C.panelEdge });
  b += para(430, yn + 30, 'Command names are illustrative: the exam judges the logic.', 420, { size: 16, fill: C.muted }).s;
  b += para(430, yn + 84, 'Robust version: check count > 0 before dividing, or an empty file divides by zero.', 420, { size: 16, weight: 600, fill: C.rust }).s;
  add('04-reading-a-file',
    svg(900, 700, 'Reading a text file in four steps', b),
    'A flowchart: open the file for reading, test for the end of the file, and while it is not reached read a line, process it and test again; at the end, close the file. Beside it, pseudocode that totals and counts the numbers in scores.txt and outputs total / count, with a note to check count > 0 so an empty file does not divide by zero.',
    'Open, loop until end of file reading one line at a time, then close.',
    '## The pattern for reading a file');
}

// 05 Write versus append
{
  let b = '';
  const old = [{ t: 'existing line 1', c: C.muted }, { t: 'existing line 2', c: C.muted }];
  b += T(150, 140, 'Before', { size: 18, weight: 700, anchor: 'middle' });
  b += fileIcon(40, 160, 220, 140, 'log.txt', ['existing line 1', 'existing line 2']);
  // write
  b += arrow(270, 230, 330, 200) + arrow(270, 230, 330, 420);
  b += panel(340, 110, 530, 210, '#ffffff', C.rust);
  b += T(364, 146, 'Write mode', { size: 20, weight: 700, fill: C.rust }) + code(520, 146, 'OPEN_FILE_WRITE   Python "w"', { size: 15, weight: 700, fill: C.muted });
  b += fileIcon(364, 166, 220, 130, 'log.txt', [{ t: 'new line', c: C.rust }]);
  b += para(610, 200, 'Replaces everything in the file', 240, { size: 17, weight: 700 }).s;
  b += para(610, 256, 'For saving the current state, e.g. a whole settings file', 240, { size: 15, fill: C.muted }).s;
  b += panel(340, 334, 530, 230, C.tealLight, C.tealDark);
  b += T(364, 370, 'Append mode', { size: 20, weight: 700, fill: C.tealDark }) + code(520, 370, 'OPEN_FILE_APPEND  Python "a"', { size: 15, weight: 700, fill: C.muted });
  b += fileIcon(364, 390, 220, 150, 'log.txt', ['existing line 1', 'existing line 2', { t: 'new line', c: C.tealDark }]);
  b += para(610, 424, 'Adds new lines to the end', 240, { size: 17, weight: 700 }).s;
  b += para(610, 470, 'For logs, or adding one new high score', 240, { size: 15, fill: C.muted }).s;
  const cp = codePanel(30, 588, 840, ['file ← OPEN_FILE_APPEND("log.txt")', 'WRITE_LINE(file, "Login by " + username)', 'CLOSE_FILE(file)'], { size: 18, lh: 30 });
  b += cp.s;
  const y = 588 + cp.h + 16;
  b += T(30, y + 20, 'End each line with a newline ("\\n" in Python), and close the file so the data is saved.', { size: 16, fill: C.muted });
  add('05-write-versus-append',
    svg(900, y + 46, 'Write or append?', b),
    'A log file holds two existing lines. Opened in write mode, it is replaced and holds only the new line. Opened in append mode, the new line is added after the two existing lines. The pseudocode opens log.txt for appending, writes "Login by " + username and closes the file.',
    'Write mode replaces the file; append mode adds to the end.',
    '## The pattern for writing a file');
}

// 06 High-score worked example: the sequence
{
  let b = '';
  const cp = codePanel(30, 110, 500, ['OUTPUT "Enter your score"', 'newScore ← STRING_TO_INT(USERINPUT)', '', 'file ← OPEN_FILE_APPEND("highscores.txt")', 'WRITE_LINE(file, INT_TO_STRING(newScore))', 'CLOSE_FILE(file)', '', 'best ← 0', 'file ← OPEN_FILE_READ("highscores.txt")', 'WHILE NOT END_OF_FILE(file)', '  score ← STRING_TO_INT(READ_LINE(file))', '  IF score > best THEN', '    best ← score', '  ENDIF', 'ENDWHILE', 'CLOSE_FILE(file)', 'OUTPUT "Best score: " + INT_TO_STRING(best)'], { size: 15, lh: 30 });
  b += cp.s;
  const L = (i) => 110 + 12 + i * 30;
  const stages = [
    [0, 2, 'Input and convert', 'string to integer', C.cream, C.olive],
    [3, 3, 'Append and close', 'earlier scores kept; integer back to string', C.tealLight, C.tealDark],
    [7, 8, 'Read every line', 'loop to end of file; convert each line', '#dfe7f3', C.blue],
    [15, 2, 'Close, then output', 'with a label', C.cream, C.olive],
  ];
  stages.forEach(([i0, n, h, d, f, e]) => {
    const yy = L(i0), hh = n * 30;
    b += `<rect x="536" y="${yy}" width="6" height="${hh}" rx="3" fill="${e}"/>`;
    const by = Math.min(yy + (hh - 76) / 2, 640 - 76);
    b += box(552, Math.max(by, yy - 6), 318, 76, { fill: f, edge: e });
    const yb = Math.max(by, yy - 6);
    b += T(570, yb + 30, h, { size: 17, weight: 700 });
    b += T(570, yb + 56, d, { size: 15, fill: C.muted });
  });
  const y = 110 + cp.h + 18;
  b += `<rect x="30" y="${y}" width="840" height="64" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
  b += T(450, y + 40, 'The file is closed before it is opened again for reading.', { size: 17, weight: 600, anchor: 'middle' });
  add('06-high-score-sequence',
    svg(900, y + 94, 'Worked example: a high-score file', b),
    'The high-score pseudocode in four stages: input the score and convert it to an integer; open highscores.txt in append mode, write the score as a string and close; open the file for reading and loop to the end, converting each line and keeping the best; close the file and output "Best score: " with the result.',
    'Convert, append, close, read every line, close, output: each step earns a mark.',
    '## Worked example: a high-score table');
}

// 07 Open once, outside the loop
{
  let b = '';
  const left = codePanel(30, 110, 840, ['file ← OPEN_FILE_WRITE("seven.txt")', 'FOR i ← 1 TO 12', '  WRITE_LINE(file, INT_TO_STRING(i) + " x 7 = " + INT_TO_STRING(i * 7))', 'ENDFOR', 'CLOSE_FILE(file)'], { size: 16, lh: 30, hl: [0, 4] });
  b += left.s;
  const y = 110 + left.h + 24;
  b += panel(30, y, 411, 420, C.tealLight, C.tealDark) + T(54, y + 36, 'Open once before, close once after', { size: 17, weight: 700, fill: C.tealDark });
  b += fileIcon(70, y + 56, 330, 340, 'seven.txt', ['1 x 7 = 7', '2 x 7 = 14', '3 x 7 = 21', '4 x 7 = 28', '…', '11 x 7 = 77', '12 x 7 = 84'], { lh: 38, size: 18 });
  b += T(380, y + 384, '12 lines', { size: 16, weight: 700, anchor: 'end', fill: C.tealDark });
  b += panel(459, y, 411, 420, '#ffffff', C.rust) + T(483, y + 36, 'Open in write mode inside the loop', { size: 17, weight: 700, fill: C.rust });
  b += fileIcon(499, y + 56, 330, 140, 'seven.txt', [{ t: '12 x 7 = 84', c: C.rust }], { size: 18 });
  b += para(483, y + 240, 'Each pass wipes the file, so only the last line survives.', 360, { size: 17, weight: 600 }).s;
  add('07-open-once-outside-loop',
    svg(900, y + 450, 'Worked example: writing a table', b),
    'Pseudocode opens seven.txt in write mode, writes i x 7 = i * 7 for i from 1 to 12, then closes the file, giving 12 lines from 1 x 7 = 7 to 12 x 7 = 84. If the file were opened in write mode inside the loop, each pass would wipe it and only 12 x 7 = 84 would remain.',
    'Open once before the loop and close once after it.',
    '## Worked example: writing a table');
}
