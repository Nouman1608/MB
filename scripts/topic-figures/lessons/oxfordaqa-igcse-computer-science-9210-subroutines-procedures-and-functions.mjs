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

export const slug = 'oxfordaqa-igcse-computer-science-9210-subroutines-procedures-and-functions';

const box = (x, y, w, h, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 10}" fill="${o.fill || '#ffffff'}" stroke="${o.edge || C.ink}" stroke-width="${o.sw || 2.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
const slot = (x, y, w, name, val, o = {}) => T(x + w / 2, y - 10, name, { size: 16, weight: 700, anchor: 'middle', fill: o.nf || C.ink }) + box(x, y, w, 52, { fill: o.fill || '#ffffff', edge: o.edge || C.ink }) + code(x + w / 2, y + 34, val, { size: 20, weight: 700, anchor: 'middle', fill: o.vf || C.ink });

// 01 Out of line: jump and return
{
  let b = '';
  // subroutine block (right)
  const sx = 520;
  b += box(sx, 130, 350, 200, { fill: C.tealLight, edge: C.tealDark, rx: 14 });
  ['SUBROUTINE ShowBanner()', '  OUTPUT "=========="', '  OUTPUT " QUIZ TIME"', '  OUTPUT "=========="', 'ENDSUBROUTINE'].forEach((l, i) => { b += code(sx + 18, 166 + i * 34, l, { size: 16, weight: i === 0 || i === 4 ? 700 : 400, fill: C.ink }); });
  b += T(sx + 175, 118, 'written separately, out of line', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
  // main program
  b += box(30, 180, 330, 160, { fill: C.ink, edge: C.ink, rx: 14 });
  b += T(50, 168, 'Main program', { size: 16, weight: 700, fill: C.muted });
  const ml = ['ShowBanner()', 'OUTPUT "Question 1"', 'ShowBanner()'];
  ml.forEach((l, i) => { b += code(52, 222 + i * 44, l, { size: 18, weight: 700, fill: i === 1 ? '#e8eef0' : C.mustard }); if (i !== 1) b += badge(336, 216 + i * 44, 14, i === 0 ? '1' : '2', C.cream); });
  // jumps
  b += path(`M352,216 C430,216 440,166 ${sx - 6},166`, { stroke: C.tealDark, w: 3, extra: 'marker-end="url(#ahT)"' });
  b += path(`M${sx - 6},300 C450,300 430,260 366,260`, { stroke: C.olive, w: 3, extra: 'marker-end="url(#ahO)"' });
  b += T(440, 156, 'jump', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += T(452, 322, 'return', { size: 15, weight: 700, anchor: 'middle', fill: C.olive });
  // output
  const y = 380;
  b += panel(30, y, 840, 250);
  b += T(54, y + 36, 'Output', { size: 17, weight: 700, fill: C.muted });
  const out = ['==========', ' QUIZ TIME', '==========', 'Question 1', '==========', ' QUIZ TIME', '=========='];
  out.forEach((l, i) => { b += code(80, y + 70 + i * 25, l, { size: 17, weight: 700, fill: i === 3 ? C.ink : C.tealDark }); });
  b += path(`M260,${y + 52} l10,0 l0,64 l-10,0`, { stroke: C.tealDark, w: 2.5 }) + T(284, y + 90, 'first call', { size: 15, weight: 700, fill: C.tealDark });
  b += path(`M260,${y + 152} l10,0 l0,64 l-10,0`, { stroke: C.tealDark, w: 2.5 }) + T(284, y + 190, 'second call', { size: 15, weight: 700, fill: C.tealDark });
  b += box(460, y + 56, 386, 170, { fill: C.cream, edge: C.olive, rx: 12 });
  ['1  Jump to the start of the subroutine', '2  Run its statements', '3  Return to just after the call'].forEach((l, i) => { b += T(480, y + 94 + i * 30, l, { size: 16, weight: 700 }); });
  b += para(480, y + 196, 'Defined once, printed twice.', 340, { size: 15, fill: C.muted }).s;
  add('01-call-jump-return',
    svg(900, y + 280, 'A call jumps out and comes back', b),
    'The main program calls ShowBanner(), outputs "Question 1", then calls ShowBanner() again. Each call jumps to the separately written subroutine, runs its three OUTPUT statements, and returns to just after the call, so the banner appears before and after Question 1.',
    'A subroutine runs only when called: jump, run, return to just after the call.',
    '## What "out of line" means');
}

// 02 Procedure vs function
{
  let b = '';
  const col = (x, title, kind, callTxt, does, back, e, f) => {
    let s = panel(x, 110, 411, 400, f, e);
    s += T(x + 205, 148, title, { size: 22, weight: 700, anchor: 'middle', fill: e });
    s += T(x + 205, 174, kind, { size: 16, anchor: 'middle', fill: C.muted });
    s += box(x + 30, 196, 351, 56, { fill: C.ink, edge: C.ink }) + code(x + 205, 231, callTxt, { size: 19, weight: 700, anchor: 'middle', fill: C.mustard });
    s += arrow(x + 205, 256, x + 205, 290, { w: 3 });
    s += box(x + 90, 296, 230, 70, { fill: '#ffffff', edge: e, rx: 14 }) + T(x + 205, 338, does, { size: 17, weight: 700, anchor: 'middle' });
    s += back;
    return s;
  };
  b += col(30, 'Procedure', 'carries out a task', 'ShowBanner()', 'outputs a banner',
    T(235, 410, 'nothing comes back', { size: 17, weight: 700, anchor: 'middle', fill: C.rust }) + T(235, 440, 'called as a statement on its own', { size: 16, anchor: 'middle', fill: C.muted }) + T(235, 480, 'e.g. output a receipt, draw a board', { size: 15, anchor: 'middle', fill: C.muted }), C.tealDark, C.tealLight);
  b += col(459, 'Function', 'calculates and returns a value', 'area ← Area(4, 3)', 'calculates',
    path('M784,331 L850,331 L850,224 L842,224', { stroke: C.olive, w: 3, extra: 'marker-end="url(#ahO)"' }) + T(820, 280, 'RETURN', { size: 15, weight: 700, anchor: 'middle', fill: C.olive }) +
    T(664, 410, 'a value comes back', { size: 17, weight: 700, anchor: 'middle', fill: C.olive }) + T(664, 440, 'called as part of an expression', { size: 16, anchor: 'middle', fill: C.muted }) + T(664, 480, 'e.g. calculate a total, check a password', { size: 15, anchor: 'middle', fill: C.muted }), C.olive, C.cream);
  b += T(450, 540, 'Built-in subroutines such as LEN, RANDOM_INT and STRING_TO_INT work the same way.', { size: 16, anchor: 'middle', fill: C.muted });
  add('02-procedure-vs-function',
    svg(900, 570, 'Procedure or function?', b),
    'A procedure such as ShowBanner() carries out a task, returns nothing and is called as a statement on its own. A function such as Area in area ← Area(4, 3) calculates a value and sends it back with RETURN, so it is called as part of an expression.',
    'Both are subroutines; only a function returns a value to its caller.',
    '## Procedures and functions');
}

// 03 Parameters matched in order
{
  let b = '';
  const cp = codePanel(30, 110, 840, ['SUBROUTINE ShowLine(symbol, length)', '  line ← ""', '  FOR i ← 1 TO length', '    line ← line + symbol', '  ENDFOR', '  OUTPUT line', 'ENDSUBROUTINE'], { size: 17, lh: 28, hl: [0] });
  b += cp.s;
  const call = (y, callTxt, a, c, out, ok) => {
    let s = panel(30, y, 840, 150, ok ? '#ffffff' : '#ffffff', ok ? C.panelEdge : C.rust);
    s += code(54, y + 44, callTxt, { size: 22, weight: 700, fill: ok ? C.tealDark : C.rust });
    s += slot(370, y + 58, 140, 'symbol', a, ok ? { fill: C.tealLight, edge: C.tealDark } : { fill: C.cream, edge: C.rust, vf: C.rust });
    s += slot(530, y + 58, 140, 'length', c, ok ? { fill: C.tealLight, edge: C.tealDark } : { fill: C.cream, edge: C.rust, vf: C.rust });
    s += T(846, y + 92, out, { size: 16, weight: 700, anchor: 'end', fill: ok ? C.ink : C.rust });
    return s;
  };
  const y0 = 110 + cp.h + 24;
  b += call(y0, 'ShowLine("*", 5)', '"*"', '5', 'outputs *****', true);
  b += path(`M${54 + 9 * 10.8},${y0 + 52} C200,${y0 + 90} 300,${y0 + 84} 364,${y0 + 84}`, { stroke: C.tealDark, w: 2.5, extra: 'marker-end="url(#ahT)"' });
  b += call(y0 + 166, 'ShowLine("-", 3)', '"-"', '3', 'outputs ---', true);
  b += call(y0 + 332, 'ShowLine(5, "*")', '5', '"*"', 'breaks the loop', false);
  b += T(54, y0 + 332 + 128, 'swapped: a number in symbol, a string in length', { size: 15, weight: 700, fill: C.rust });
  b += T(54, y0 + 128, 'values are copied in order: first to first, second to second', { size: 15, weight: 700, fill: C.tealDark });
  add('03-parameters-in-order',
    svg(900, y0 + 332 + 180, 'Parameters are matched in order', b),
    'ShowLine(symbol, length) is called with ShowLine("*", 5): "*" is copied into symbol and 5 into length, so it outputs *****. ShowLine("-", 3) outputs ---. Swapping the values, ShowLine(5, "*"), puts a number in symbol and a string in length, which breaks the loop.',
    'Each value in the call is copied into the parameter in the same position.',
    '## Parameters: passing data in');
}

// 04 Return value replaces the call
{
  let b = '';
  const cp = codePanel(30, 110, 840, ['SUBROUTINE PriceAfterDiscount(price, percent)', '  RETURN price - price * percent / 100', 'ENDSUBROUTINE'], { size: 18, lh: 30, hl: [1] });
  b += cp.s;
  const y = 110 + cp.h + 50;
  b += code(54, y + 10, 'cost ← PriceAfterDiscount(80.0, 25)', { size: 22, weight: 700 });
  b += slot(100, y + 60, 150, 'price', '80.0', { fill: C.tealLight, edge: C.tealDark });
  b += slot(280, y + 60, 150, 'percent', '25', { fill: C.tealLight, edge: C.tealDark });
  b += arrow(440, y + 86, 490, y + 86, { w: 3 });
  b += box(500, y + 50, 370, 72, { fill: '#ffffff', edge: C.ink }) + code(685, y + 94, '80.0 - 80.0 * 25 / 100', { size: 18, weight: 700, anchor: 'middle' });
  b += arrow(685, y + 126, 685, y + 160, { w: 3, color: C.olive, marker: 'ahO' }) + T(700, y + 150, 'RETURN', { size: 15, weight: 700, fill: C.olive });
  b += box(30, y + 168, 840, 64, { fill: C.cream, edge: C.olive, rx: 12 });
  b += code(54, y + 208, 'cost ← 60.0', { size: 22, weight: 700 }) + T(260, y + 207, 'the call is replaced by the returned value; RETURN also ends the subroutine', { size: 16 });
  const y2 = y + 256;
  const r = row(y2, [
    { kicker: 'RETURNS', title: 'The caller decides', body: 'store it, compare it, output it or pass it to another subroutine', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'ONLY OUTPUTS', kfill: C.rust, title: 'Shown on screen', body: 'the calling program cannot use the answer', edge: C.rust },
  ], { card: { size: 16, tsize: 20 } });
  b += r.s;
  add('04-return-value',
    svg(900, y2 + r.h + 30, 'Return values: passing data out', b),
    'cost ← PriceAfterDiscount(80.0, 25) copies 80.0 into price and 25 into percent; the function calculates 80.0 - 80.0 * 25 / 100 and RETURN sends back 60.0, which replaces the call, so cost becomes 60.0. A returned value can be stored or reused; a value that is only output cannot be used by the caller.',
    'RETURN sends the value back to the call, which is replaced by it.',
    '## Return values: passing data out');
}

// 05 Tracing calls
{
  let b = '';
  const cp = codePanel(30, 110, 840, ['best ← Larger(14, 9)', 'best ← Larger(best, 21)', 'ShowResult("Mo", best)'], { size: 19, lh: 32 });
  b += cp.s;
  const steps = [
    ['Larger(14, 9)', [['a', '14'], ['b', '9']], 'a > b: RETURN a', '14', '14'],
    ['Larger(best, 21)', [['a', '14'], ['b', '21']], 'a > b is False: RETURN b', '21', '21'],
    ['ShowResult("Mo", best)', [['name', '"Mo"'], ['score', '21']], 'procedure: outputs only', '–', '21'],
  ];
  steps.forEach(([c, ps, logic, ret, best], i) => {
    const y = 110 + cp.h + 30 + i * 140;
    b += panel(30, y, 840, 124, i === 2 ? C.cream : '#ffffff', i === 2 ? C.olive : C.panelEdge);
    b += code(54, y + 38, c, { size: 19, weight: 700, fill: C.tealDark });
    ps.forEach(([n, v], k) => { b += slot(54 + k * 140, y + 64, 120, '', v, { fill: C.tealLight, edge: C.tealDark }); b += code(54 + k * 140 + 6, y + 58, n, { size: 15, weight: 700, fill: C.muted }); });
    b += T(350, y + 96, logic, { size: 16, fill: C.muted });
    b += T(640, y + 38, 'Returned', { size: 15, weight: 700, fill: C.muted, anchor: 'middle' }) + code(640, y + 84, ret, { size: 24, weight: 700, anchor: 'middle', fill: C.olive });
    b += T(780, y + 38, 'best', { size: 15, weight: 700, fill: C.muted, anchor: 'middle' }) + box(735, y + 54, 90, 48, { fill: '#ffffff', edge: C.ink }) + code(780, y + 86, best, { size: 22, weight: 700, anchor: 'middle' });
  });
  const y = 110 + cp.h + 30 + 3 * 140;
  b += box(30, y, 840, 64, { fill: C.ink, edge: C.ink, rx: 14 });
  b += T(54, y + 40, 'Output:', { size: 18, weight: 700, fill: C.mustard }) + code(140, y + 41, 'Mo scored 21', { size: 22, weight: 700, fill: '#ffffff' });
  b += T(846, y + 40, 'the current value of best (14) is passed, not the name', { size: 15, anchor: 'end', fill: C.teal });
  add('05-tracing-calls',
    svg(900, y + 94, 'Worked example: tracing calls', b),
    'Larger(14, 9) receives a = 14, b = 9 and returns 14, so best is 14. Larger(best, 21) receives the current value 14 and 21 and returns 21, so best is 21. ShowResult("Mo", best) is a procedure that receives name "Mo" and score 21 and outputs Mo scored 21.',
    'Record the parameters each call receives and what it returns, one call at a time.',
    '## Worked example: tracing calls');
}

// 06 Model answer: keep input and output in the caller
{
  let b = '';
  const cp = codePanel(30, 110, 400, ['SUBROUTINE Grade(mark)', '  IF mark ≥ 40 THEN', '    RETURN "Pass"', '  ELSE', '    RETURN "Fail"', '  ENDIF', 'ENDSUBROUTINE'], { size: 17, lh: 28, hl: [1] });
  b += cp.s;
  b += panel(450, 110, 420, cp.h);
  b += T(472, 146, 'Why it scores', { size: 18, weight: 700 });
  ['mark is a parameter: no input inside', '≥ so that 40 passes', 'returns the result, does not output it', 'caller converts input and outputs'].forEach((l, i) => { b += T(472, 182 + i * 34, `• ${l}`, { size: 16 }); });
  const y = 110 + cp.h + 34;
  b += code(450, y + 10, 'OUTPUT Grade(STRING_TO_INT(USERINPUT))', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  const yy = y + 40;
  const stg = [['USERINPUT', 'a string'], ['STRING_TO_INT', 'an integer'], ['Grade', '"Pass" / "Fail"'], ['OUTPUT', 'shown on screen']];
  stg.forEach(([n, d], i) => {
    const x = 30 + i * 216;
    b += box(x, yy, 190, 70, { fill: i === 2 ? C.cream : C.tealLight, edge: i === 2 ? C.olive : C.tealDark }) + code(x + 95, yy + 32, n, { size: 16, weight: 700, anchor: 'middle' }) + T(x + 95, yy + 56, d, { size: 15, anchor: 'middle', fill: C.muted });
    if (i < 3) b += arrow(x + 194, yy + 35, x + 212, yy + 35, { w: 3 });
  });
  const y2 = yy + 96;
  b += box(30, y2, 840, 92, { fill: C.cream, edge: C.olive, rx: 14 });
  b += T(54, y2 + 36, 'Input and output stay in the calling routine,', { size: 17, weight: 700 });
  b += T(54, y2 + 66, 'so Grade can be reused for marks that come from a file or an array.', { size: 17 });
  add('06-grade-function',
    svg(900, y2 + 122, 'Annotated model answer: Grade(mark)', b),
    'The function Grade(mark) returns "Pass" if mark ≥ 40 and "Fail" otherwise. The call OUTPUT Grade(STRING_TO_INT(USERINPUT)) passes the user’s input, converted from a string to an integer, into Grade and outputs the returned grade. Keeping input and output in the caller lets Grade be reused for marks from a file or an array.',
    'Pass data in as a parameter and return the result; leave input and output to the caller.',
    '## Annotated model answer');
}
