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

export const slug = 'oxfordaqa-igcse-computer-science-9210-relational-operations';

const box = (x, y, w, h, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 10}" fill="${o.fill || '#ffffff'}" stroke="${o.edge || C.ink}" stroke-width="${o.sw || 2.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
const tf = (x, y, w, h, v) => { const tr = v === 'True'; return box(x + 3, y + 3, w - 6, h - 6, { fill: tr ? C.tealLight : '#ffffff', edge: tr ? C.tealDark : C.panelEdge, rx: 8, sw: 2 }) + T(x + w / 2, y + h / 2 + 6, v, { size: 17, weight: tr ? 700 : 400, anchor: 'middle', fill: tr ? C.tealDark : C.muted }); };
// number line helper: returns {s, X}
const nline = (x0, x1, y, v0, v1, ticks) => {
  const X = (v) => x0 + ((v - v0) * (x1 - x0)) / (v1 - v0);
  let s = `<line x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" stroke="${C.ink}" stroke-width="2.5"/>`;
  ticks.forEach((v) => { s += `<line x1="${X(v)}" y1="${y - 7}" x2="${X(v)}" y2="${y + 7}" stroke="${C.ink}" stroke-width="2"/>`; });
  return { s, X };
};
const dotAt = (cx, cy, filled, col) => `<circle cx="${cx}" cy="${cy}" r="9" fill="${filled ? col : '#ffffff'}" stroke="${col}" stroke-width="3.5"/>`;

// 01 Comparison grid
{
  let b = '';
  const x0 = 30, y0 = 110, c0 = 300, cw0 = 180, hh = 70, rh = 58;
  b += `<rect x="${x0}" y="${y0}" width="${c0 + 3 * cw0}" height="${hh}" rx="10" fill="${C.ink}"/>`;
  b += T(x0 + 18, y0 + 43, 'Operator', { size: 18, weight: 700, fill: '#ffffff' });
  ['7 ? 7', '5 ? 9', '9 ? 5'].forEach((h, i) => { b += code(x0 + c0 + i * cw0 + cw0 / 2, y0 + 34, h, { size: 20, weight: 700, anchor: 'middle', fill: i === 0 ? C.mustard : '#ffffff' }); b += T(x0 + c0 + i * cw0 + cw0 / 2, y0 + 58, ['equal', 'first smaller', 'first bigger'][i], { size: 15, anchor: 'middle', fill: C.teal }); });
  const rows = [['=', 'equal to', 'True', 'False', 'False'], ['≠', 'not equal to', 'False', 'True', 'True'], ['<', 'less than', 'False', 'True', 'False'], ['>', 'greater than', 'False', 'False', 'True'], ['≤', 'less than or equal to', 'True', 'True', 'False'], ['≥', 'greater than or equal to', 'True', 'False', 'True']];
  b += `<rect x="${x0 + c0}" y="${y0 + hh + 4}" width="${cw0}" height="${rows.length * rh + 4}" rx="12" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
  rows.forEach((r, i) => {
    const y = y0 + hh + 6 + i * rh;
    b += code(x0 + 26, y + rh / 2 + 9, r[0], { size: 26, weight: 700, anchor: 'middle' }) + T(x0 + 56, y + rh / 2 + 6, r[1], { size: 17 });
    r.slice(2).forEach((v, j) => { b += tf(x0 + c0 + j * cw0 + 8, y, cw0 - 16, rh, v); });
  });
  const y = y0 + hh + 10 + rows.length * rh + 20;
  b += box(30, y, 840, 64, { fill: C.cream, edge: C.olive, rx: 14 });
  b += T(450, y + 40, 'When the values are equal, only =, ≤ and ≥ give True: that is where errors happen.', { size: 17, weight: 600, anchor: 'middle' });
  add('01-relational-truth-grid',
    svg(900, y + 94, 'Six comparisons, one Boolean answer', b),
    'A grid of the six relational operators applied to 7 and 7, 5 and 9, and 9 and 5. For equal values only =, ≤ and ≥ are True. For 5 and 9, ≠, < and ≤ are True; for 9 and 5, ≠, > and ≥ are True.',
    'Each comparison gives True or False; the equal case is where the operators differ most.',
    '## What a relational operator does');
}

// 02 English to conditions on a number line
{
  let b = '';
  const rows = [
    ['"at least 50"', 'mark ≥ 50', true, 'right'],
    ['"more than 50", "over 50"', 'mark > 50', false, 'right'],
    ['"no more than", "at most", "up to 50"', 'mark ≤ 50', true, 'left'],
    ['"less than 50", "under 50"', 'mark < 50', false, 'left'],
    ['"exactly 50"', 'mark = 50', true, 'point'],
    ['"anything except 50"', 'mark ≠ 50', false, 'both'],
  ];
  rows.forEach(([w, c, inc, dir], i) => {
    const y = 110 + i * 92;
    b += box(30, y, 840, 80, { fill: '#ffffff', edge: C.panelEdge, rx: 12 });
    b += T(50, y + 32, w, { size: 16, weight: 700, fill: C.olive }) + code(50, y + 62, c, { size: 20, weight: 700 });
    const nl = nline(480, 850, y + 44, 40, 60, [40, 45, 50, 55, 60]), X = nl.X, col = C.tealDark;
    let sh = '';
    if (dir === 'right') sh = `<line x1="${X(50)}" y1="${y + 44}" x2="${X(60) - 4}" y2="${y + 44}" stroke="${col}" stroke-width="8" marker-end="url(#ahT)"/>`;
    if (dir === 'left') sh = `<line x1="${X(50)}" y1="${y + 44}" x2="${X(40) + 4}" y2="${y + 44}" stroke="${col}" stroke-width="8" marker-end="url(#ahT)"/>`;
    if (dir === 'both') sh = `<line x1="${X(50)}" y1="${y + 44}" x2="${X(60) - 4}" y2="${y + 44}" stroke="${col}" stroke-width="8" marker-end="url(#ahT)"/><line x1="${X(50)}" y1="${y + 44}" x2="${X(40) + 4}" y2="${y + 44}" stroke="${col}" stroke-width="8" marker-end="url(#ahT)"/>`;
    b += nl.s + sh + dotAt(X(50), y + 44, inc, col);
    b += T(X(50), y + 72, '50', { size: 15, weight: 700, anchor: 'middle' });
    b += T(470, y + 50, inc ? 'includes 50' : 'excludes 50', { size: 15, weight: 700, anchor: 'end', fill: inc ? C.tealDark : C.rust });
  });
  const y = 110 + 6 * 92 + 4;
  b += T(450, y + 18, 'Filled dot: 50 is included. Open dot: 50 is not. "Between 1 and 10": state whether it is inclusive.', { size: 15, anchor: 'middle', fill: C.muted });
  add('02-words-to-operators',
    svg(900, y + 44, 'From words to an operator', b),
    'Six phrases and their conditions on a number line around 50. "At least 50" is mark ≥ 50 and "no more than 50" is mark ≤ 50, both including 50. "More than 50" is mark > 50 and "less than 50" is mark < 50, both excluding 50. "Exactly 50" is mark = 50 and "anything except 50" is mark ≠ 50.',
    'The boundary words decide whether 50 itself is included.',
    '## Translating English into conditions');
}

// 03 Opposite operators
{
  let b = '';
  const pair = (y, a, bOp, aDir) => {
    let s = panel(30, y, 840, 132);
    const nl = nline(260, 840, y + 76, 0, 20, [0, 5, 10, 15, 20]), X = nl.X;
    const left = `<line x1="${X(10) - 12}" y1="${y + 76}" x2="${X(0) + 2}" y2="${y + 76}" stroke="${C.olive}" stroke-width="9" marker-end="url(#ahO)"/>`;
    const right = `<line x1="${X(10) + 12}" y1="${y + 76}" x2="${X(20) - 2}" y2="${y + 76}" stroke="${C.tealDark}" stroke-width="9" marker-end="url(#ahT)"/>`;
    s += nl.s + left + right;
    s += code(54, y + 56, a, { size: 22, weight: 700, fill: C.olive }) + code(54, y + 96, bOp, { size: 22, weight: 700, fill: C.tealDark });
    s += dotAt(X(10), y + 76, true, aDir === 'left' ? C.olive : C.tealDark);
    s += T(X(10), y + 112, '10', { size: 15, weight: 700, anchor: 'middle' });
    s += T(X(10), y + 46, `10 goes with ${aDir === 'left' ? a.split(' ')[1] : bOp.split(' ')[1]}`, { size: 15, weight: 700, anchor: 'middle', fill: C.muted });
    return s;
  };
  b += pair(110, 'count < 10', 'count ≥ 10', 'right');
  b += pair(256, 'count ≤ 10', 'count > 10', 'left');
  b += panel(30, 402, 840, 84);
  b += code(54, 452, 'count = 10', { size: 22, weight: 700, fill: C.olive }) + T(240, 451, 'is the opposite of', { size: 17, fill: C.muted }) + code(400, 452, 'count ≠ 10', { size: 22, weight: 700, fill: C.tealDark });
  const y = 506;
  b += box(30, y, 411, 120, { fill: C.ink, edge: C.ink, rx: 14 });
  b += code(54, y + 44, 'WHILE count < 10', { size: 19, weight: 700, fill: '#ffffff' }) + T(54, y + 80, 'keeps going while True', { size: 16, fill: C.teal });
  b += arrow(447, y + 60, 455, y + 60, { w: 3 });
  b += box(459, y, 411, 120, { fill: C.tealLight, edge: C.tealDark, rx: 14 });
  b += code(483, y + 44, 'UNTIL count ≥ 10', { size: 19, weight: 700, fill: C.tealDark }) + T(483, y + 80, 'stops when the opposite is True', { size: 16, fill: C.muted });
  b += T(483, y + 104, 'not UNTIL count > 10: that drops the equal case', { size: 15, weight: 700, fill: C.rust });
  add('03-opposite-operators',
    svg(900, y + 150, 'Opposite operators', b),
    'Number lines split at 10. count < 10 covers everything below 10 and its opposite count ≥ 10 covers 10 and above; count ≤ 10 and count > 10 split the line the other way. count = 10 is the opposite of count ≠ 10. So WHILE count < 10 becomes UNTIL count ≥ 10, not UNTIL count > 10.',
    'Opposites split the line with no gap: < with ≥, > with ≤, = with ≠.',
    '## Opposite operators');
}

// 04 String comparison is case-sensitive
{
  let b = '';
  const cmp = (y, s1, s2, res) => {
    let s = panel(30, y, 840, 170);
    const n = Math.max(s1.length, s2.length);
    for (let i = 0; i < n; i++) {
      const a = s1[i] || '', c = s2[i] || '', same = a === c;
      const x = 60 + i * 64;
      s += box(x, y + 26, 54, 50, { fill: same ? C.tealLight : C.cream, edge: same ? C.tealDark : C.rust }) + code(x + 27, y + 59, a, { size: 24, weight: 700, anchor: 'middle' });
      s += box(x, y + 90, 54, 50, { fill: same ? C.tealLight : C.cream, edge: same ? C.tealDark : C.rust }) + code(x + 27, y + 123, c, { size: 24, weight: 700, anchor: 'middle' });
    }
    s += code(330, y + 76, `"${s1}" = "${s2}"`, { size: 20, weight: 700 });
    s += T(330, y + 112, res ? 'True: every character matches' : 'False: case differs', { size: 17, weight: 700, fill: res ? C.tealDark : C.rust });
    return s;
  };
  b += cmp(110, 'yes', 'Yes', false);
  b += cmp(296, 'yes', 'yes', true);
  const y = 486;
  const r = row(y, [
    { kicker: 'MENU INPUT', title: 'Expecting "Y"', body: '"y" is not accepted unless the condition allows both, using a Boolean operator' },
    { kicker: 'TYPE MISMATCH', kfill: C.rust, title: '"12" and 12', body: 'a string and an integer: convert first, then compare', edge: C.rust },
  ], { card: { size: 16, tsize: 20 } });
  b += r.s;
  add('04-string-comparison-case',
    svg(900, y + r.h + 30, 'Comparing strings: every character counts', b),
    'The strings "yes" and "Yes" are compared character by character; the first characters differ in case, so "yes" = "Yes" is False, while "yes" = "yes" is True. A menu expecting "Y" will not accept "y" unless the condition allows both, and "12" must be converted before it is compared with the integer 12.',
    'String comparison checks every character, including case.',
    '## Comparing strings and other types');
}

// 05 Band from a value: ordered tests on a number line
{
  let b = '';
  const cp = codePanel(30, 110, 380, ['IF time < 20 THEN', '  band ← "Fast"', 'ELSE IF time < 30 THEN', '  band ← "Steady"', 'ELSE', '  band ← "Starter"', 'ENDIF'], { size: 17, lh: 30 });
  b += cp.s;
  b += panel(430, 110, 440, cp.h);
  b += T(452, 146, 'Tests are checked in order', { size: 18, weight: 700 });
  b += para(452, 176, 'Any time that reaches the second test has already failed time < 20, so it does not need "and at least 20".', 396, { size: 16, fill: C.muted }).s;
  b += para(452, 262, 'The boundary values 20 and 30 show whether < or ≤ was right.', 396, { size: 16, weight: 700, fill: C.olive }).s;
  const y = 110 + cp.h + 70;
  const nl = nline(60, 840, y, 10, 40, [10, 15, 20, 25, 30, 35, 40]), X = nl.X;
  b += `<rect x="${X(10)}" y="${y - 30}" width="${X(20) - X(10)}" height="24" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2"/>`;
  b += `<rect x="${X(20)}" y="${y - 30}" width="${X(30) - X(20)}" height="24" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>`;
  b += `<rect x="${X(30)}" y="${y - 30}" width="${X(40) - X(30)}" height="24" fill="#dfe7f3" stroke="${C.blue}" stroke-width="2"/>`;
  b += T((X(10) + X(20)) / 2, y - 40, 'Fast', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += T((X(20) + X(30)) / 2, y - 40, 'Steady', { size: 18, weight: 700, anchor: 'middle', fill: C.olive });
  b += T((X(30) + X(40)) / 2, y - 40, 'Starter', { size: 18, weight: 700, anchor: 'middle', fill: C.blue });
  [10, 15, 20, 25, 30, 35, 40].forEach((v) => { b += T(X(v), y + 28, String(v), { size: 15, anchor: 'middle', fill: C.muted }); });
  b += T(X(40), y + 50, 'minutes', { size: 15, anchor: 'end', fill: C.muted });
  const yt = y + 70;
  const cols = [{ w: 110, head: 'time' }, { w: 230, head: 'time < 20' }, { w: 230, head: 'time < 30' }, { w: 270, head: 'band' }];
  const tb = table(30, yt, cols, [['18', 'True', 'not reached', 'Fast'], ['20', 'False', 'True', 'Steady'], ['29', 'False', 'True', 'Steady'], ['30', 'False', 'False', 'Starter']], { size: 18, rowFill: ['#ffffff', C.cream, '#ffffff', C.cream] });
  b += tb.s;
  b += T(30, yt + tb.h + 28, 'Highlighted rows are boundary values. Boundaries are invented for the example.', { size: 15, fill: C.muted, italic: true });
  add('05-band-boundaries',
    svg(900, yt + tb.h + 52, 'Worked example: choosing a band', b),
    'An IF … ELSE IF chain puts times under 20 in Fast, times from 20 up to under 30 in Steady, and 30 or more in Starter. On a number line the boundaries are at 20 and 30. A trace of 18, 20, 29 and 30 gives Fast, Steady, Steady and Starter; 20 and 30 are the boundary values.',
    'Tests run in order, and boundary values reveal whether < or ≤ was the right choice.',
    '## Worked example: choosing a band from a value');
}

// 06 Loop boundaries: < vs ≤
{
  let b = '';
  const lane = (x, title, op, vals, n) => {
    let s = panel(x, 110, 411, 420);
    s += codePanel(x + 20, 130, 371, ['count ← 0', `WHILE count ${op} 5`, '  OUTPUT count', '  count ← count + 1', 'ENDWHILE'], { size: 18, lh: 30, hl: [1] }).s;
    s += T(x + 24, 352, 'Output', { size: 16, weight: 700, fill: C.muted });
    vals.forEach((v, i) => { s += box(x + 24 + i * 60, 366, 50, 54, { fill: i === 5 ? C.cream : C.tealLight, edge: i === 5 ? C.olive : C.tealDark }) + code(x + 49 + i * 60, 401, String(v), { size: 22, weight: 700, anchor: 'middle' }); });
    s += T(x + 24, 470, title, { size: 20, weight: 700, fill: n === 5 ? C.tealDark : C.olive });
    s += T(x + 24, 500, n === 5 ? 'stops when count reaches 5' : 'also runs when count is 5', { size: 16, fill: C.muted });
    return s;
  };
  b += lane(30, 'Five values', '<', [0, 1, 2, 3, 4], 5);
  b += lane(459, 'Six values', '≤', [0, 1, 2, 3, 4, 5], 6);
  b += box(30, 550, 840, 60, { fill: C.cream, edge: C.olive, rx: 14 });
  b += T(450, 588, 'One symbol changes the number of repetitions.', { size: 18, weight: 600, anchor: 'middle' });
  add('06-loop-boundary',
    svg(900, 640, 'One symbol, one extra repetition', b),
    'Two WHILE loops start count at 0 and output it before adding 1. With WHILE count < 5 the output is 0, 1, 2, 3, 4: five values. With WHILE count ≤ 5 the output is 0, 1, 2, 3, 4, 5: six values.',
    'Changing < to ≤ adds one more pass of the loop.',
    '## Worked example: counting loop boundaries');
}
