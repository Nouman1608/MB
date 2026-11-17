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

export const slug = 'oxfordaqa-igcse-computer-science-9210-structured-programming';

const box = (x, y, w, h, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 10}" fill="${o.fill || '#ffffff'}" stroke="${o.edge || C.ink}" stroke-width="${o.sw || 2.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
const mod = (cx, y, w, name, sub, o = {}) => box(cx - w / 2, y, w, o.h || 64, { fill: o.fill || '#ffffff', edge: o.edge || C.ink }) +
  code(cx, y + (sub ? 28 : 38), name, { size: o.size || 16, weight: 700, anchor: 'middle', fill: o.tf || C.ink }) + (sub ? T(cx, y + 52, sub, { size: 15, anchor: 'middle', fill: o.sf || C.muted }) : '');

// 01 Anatomy of a module
{
  let b = '';
  // module box
  b += box(250, 140, 400, 290, { fill: C.tealLight, edge: C.tealDark, rx: 18, sw: 3 });
  b += T(450, 176, 'Module (subroutine)', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += T(450, 202, 'one clearly defined task', { size: 16, anchor: 'middle', fill: C.muted });
  b += box(290, 226, 320, 120, { fill: '#ffffff', edge: C.tealDark, dash: '8 6', rx: 12 });
  b += T(450, 256, 'Local variables', { size: 18, weight: 700, anchor: 'middle' });
  b += para(310, 284, 'exist only while it runs; no other part of the program can see or change them', 280, { size: 15, fill: C.muted }).s;
  b += box(290, 360, 320, 52, { fill: C.cream, edge: C.olive }) + T(450, 392, 'Documented interface', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  // params in
  b += arrow(70, 250, 244, 250, { w: 5, color: C.tealDark, marker: 'ahT' });
  b += T(60, 224, 'Parameters', { size: 19, weight: 700, fill: C.tealDark }) + T(60, 284, 'data in', { size: 16, fill: C.muted });
  b += arrow(656, 250, 830, 250, { w: 5, color: C.olive, marker: 'ahO' });
  b += T(840, 224, 'Return value', { size: 19, weight: 700, fill: C.olive, anchor: 'end' }) + T(840, 284, 'result out', { size: 16, fill: C.muted, anchor: 'end' });
  // main program
  const y = 470;
  b += panel(30, y, 840, 150);
  b += T(54, y + 36, 'Main program: a short sequence of calls', { size: 18, weight: 700 });
  ['Module A', 'Module B', 'Module C'].forEach((m, i) => {
    const x = 70 + i * 270;
    b += box(x, y + 62, 220, 56, { fill: C.tealLight, edge: C.tealDark }) + T(x + 110, y + 97, `call ${m}`, { size: 17, weight: 700, anchor: 'middle' });
    if (i < 2) b += arrow(x + 224, y + 90, x + 266, y + 90, { w: 3 });
  });
  add('01-module-anatomy',
    svg(900, y + 180, 'The structured approach', b),
    'A module carries out one clearly defined task. Data goes in through parameters and the result comes out as a return value; working data is kept in local variables that nothing else can see or change; and the interface is documented. The main program becomes a short sequence of calls to modules.',
    'Modules with one task, parameters in, a return value out, local variables inside and a documented interface.',
    '## The structured approach in one paragraph');
}

// 02 Library structure chart
{
  let b = '';
  const top = 120;
  b += mod(450, top, 300, 'Main program', 'show a menu, call the option', { fill: C.ink, edge: C.ink, tf: '#ffffff', sf: C.teal, h: 66 });
  const y2 = 250;
  const l2 = [[175, 290, 'LoanBook(memberID, bookID)', 'record a loan'], [470, 250, 'ReturnBook(bookID)', 'record a return'], [745, 230, 'ShowOverdue()', 'list overdue books']];
  l2.forEach(([cx, w, n, d]) => { b += path(`M450,${top + 66} L450,${top + 96} L${cx},${top + 96} L${cx},${y2}`, { w: 2.5 }); b += mod(cx, y2, w, n, d, { fill: C.tealLight, edge: C.tealDark, size: 15 }); });
  const kids = (px, xL, w, items) => {
    let s2 = path(`M${px},${y2 + 64} L${px},${y2 + 84} L${xL - 14},${y2 + 84} L${xL - 14},${y2 + 150 + (items.length - 1) * 88}`, { w: 2.5 });
    items.forEach(([n, d], i) => { const yy = y2 + 118 + i * 88; s2 += path(`M${xL - 14},${yy + 32} L${xL},${yy + 32}`, { w: 2.5 }) + mod(xL + w / 2, yy, w, n, d, { fill: C.cream, edge: C.olive, size: 15 }); });
    return s2;
  };
  b += kids(175, 60, 260, [['IsMemberValid(memberID)', 'returns True/False'], ['IsBookAvailable(bookID)', 'returns True/False']]);
  b += kids(470, 370, 240, [['DaysLate(dueDate, today)', 'returns an integer'], ['Fine(daysLate)', 'returns a real']]);
  b += box(640, 370, 220, 100, { fill: '#ffffff', edge: C.panelEdge });
  b += para(658, 400, 'Each module is small enough to understand completely.', 190, { size: 15, fill: C.muted }).s;
  add('02-library-structure-chart',
    svg(900, 560, 'Decomposing a library program', b),
    'A structure chart. The main program shows a menu and calls LoanBook, ReturnBook or ShowOverdue. LoanBook uses IsMemberValid and IsBookAvailable, which return True or False; ReturnBook uses DaysLate, which returns an integer, and Fine, which returns a real.',
    'Decomposition: each sub-problem becomes a small module with one job.',
    '## Modularised programming');
}

// 03 Interface as a black box
{
  let b = '';
  const cp = codePanel(30, 110, 840, ['-- Fine', '-- Calculates the fine for a book returned late.', '-- Parameter: daysLate (integer), number of days after the due date', '-- Returns: real, the fine in dollars (0.0 if not late)', 'SUBROUTINE Fine(daysLate)', '  …'], { size: 16, lh: 28, hl: [0, 1, 2, 3] });
  b += cp.s;
  const labels = [['name', 0], ['what it does', 1], ['parameter: type and meaning', 2], ['return value: type', 3]];
  const y = 110 + cp.h + 50;
  // black box usage
  b += code(150, y + 60, 'Fine(8)', { size: 26, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += arrow(230, y + 52, 320, y + 52, { w: 4 });
  b += box(330, y, 240, 104, { fill: C.ink, edge: C.ink, rx: 14 });
  b += code(450, y + 46, 'Fine', { size: 24, weight: 700, anchor: 'middle', fill: '#ffffff' });
  b += T(450, y + 78, 'code not needed', { size: 15, anchor: 'middle', fill: C.teal });
  b += arrow(580, y + 52, 670, y + 52, { w: 4, color: C.olive, marker: 'ahO' });
  b += code(750, y + 60, '2.0', { size: 30, weight: 700, anchor: 'middle', fill: C.olive });
  b += T(150, y + 100, 'daysLate = 8', { size: 15, anchor: 'middle', fill: C.muted });
  b += T(750, y + 100, 'a real', { size: 15, anchor: 'middle', fill: C.muted });
  const yb = y + 136;
  b += box(30, yb, 840, 92, { fill: C.cream, edge: C.olive, rx: 14 });
  b += T(54, yb + 36, 'A clear interface: all data in through parameters, all results out through the return value,', { size: 16, weight: 600 });
  b += T(54, yb + 64, 'not by reading or changing variables elsewhere in the program.', { size: 16, weight: 600 });
  add('03-documented-interface',
    svg(900, yb + 122, 'A documented interface', b),
    'The comment block for the Fine subroutine gives its name, what it does, its parameter daysLate (integer, days after the due date) and its return value (real, the fine in dollars, 0.0 if not late). Treated as a black box, Fine(8) returns 2.0 without the caller reading its code.',
    'The interface tells a caller everything needed to use a module without reading its code.',
    '## Interfaces');
}

// 04 Local variables: separate scopes, and the global-counter bug
{
  let b = '';
  b += panel(30, 110, 840, 270);
  b += T(54, 146, 'Two variables called total, no interference', { size: 19, weight: 700 });
  b += box(54, 170, 360, 186, { fill: '#ffffff', edge: C.ink, rx: 14 }) + T(74, 200, 'Main program', { size: 17, weight: 700 });
  b += box(74, 220, 150, 58, { fill: C.cream, edge: C.olive }) + code(149, 256, 'total', { size: 19, weight: 700, anchor: 'middle' });
  b += T(74, 312, 'its own variable', { size: 15, fill: C.muted });
  b += box(486, 170, 360, 186, { fill: C.tealLight, edge: C.tealDark, rx: 14, dash: '8 6' }) + code(506, 200, 'SumArray(values)', { size: 17, weight: 700, fill: C.tealDark });
  b += box(506, 220, 150, 58, { fill: '#ffffff', edge: C.tealDark }) + code(581, 256, 'total', { size: 19, weight: 700, anchor: 'middle' });
  b += box(676, 220, 90, 58, { fill: '#ffffff', edge: C.tealDark }) + code(721, 256, 'i', { size: 19, weight: 700, anchor: 'middle' });
  b += para(506, 312, 'local: exist only while SumArray runs, then discarded', 320, { size: 15, fill: C.muted }).s;
  b += T(450, 268, '≠', { size: 34, weight: 700, anchor: 'middle', fill: C.rust });
  const y = 400;
  b += panel(30, y, 840, 250, '#ffffff', C.rust);
  b += T(54, y + 36, 'Without locals: one program-wide counter i', { size: 19, weight: 700, fill: C.rust });
  b += box(54, y + 60, 300, 120, { fill: '#ffffff', edge: C.ink, rx: 12 }) + T(74, y + 90, 'Subroutine A', { size: 17, weight: 700 });
  b += code(74, y + 124, 'loop using i', { size: 16, weight: 700 }) + code(94, y + 152, 'call B', { size: 16, weight: 700, fill: C.tealDark });
  b += box(546, y + 60, 300, 120, { fill: '#ffffff', edge: C.ink, rx: 12 }) + T(566, y + 90, 'Subroutine B', { size: 17, weight: 700 });
  b += code(566, y + 124, 'loop using i', { size: 16, weight: 700 }) + T(566, y + 156, 'changes i', { size: 16, weight: 700, fill: C.rust });
  b += box(390, y + 100, 120, 60, { fill: C.cream, edge: C.rust }) + code(450, y + 138, 'i', { size: 24, weight: 700, anchor: 'middle', fill: C.rust });
  b += arrow(356, y + 130, 384, y + 130, { color: C.rust, marker: 'ahR', w: 3 }) + arrow(544, y + 130, 516, y + 130, { color: C.rust, marker: 'ahR', w: 3 });
  b += T(450, y + 216, 'B breaks A’s loop: hard to find by reading either one alone', { size: 15, weight: 700, anchor: 'middle', fill: C.rust });
  add('04-local-variables',
    svg(900, y + 280, 'Local variables keep modules independent', b),
    'The main program and SumArray each have their own variable called total; SumArray’s total and i are local and are discarded when it finishes, so they do not interfere. Below, if subroutines A and B share one program-wide counter i and A calls B inside its loop, B changes i and breaks A’s loop.',
    'Local variables stop one module accidentally changing another module’s data.',
    '## Local variables');
}

// 05 Restructuring: before and after
{
  let b = '';
  b += panel(30, 110, 330, 420, '#ffffff', C.panelEdge);
  b += T(54, 146, 'Before: one block', { size: 18, weight: 700, fill: C.muted });
  const before = ['total ← 0', 'FOR i ← 1 TO 5', '  OUTPUT "Enter mark"', '  m ← STRING_TO_INT(USERINPUT)', '  WHILE m < 0 OR m > 100', '    OUTPUT "Enter mark"', '    m ← STRING_TO_INT(USERINPUT)', '  ENDWHILE', '  total ← total + m', 'ENDFOR', 'OUTPUT total / 5'];
  before.forEach((l, i) => { b += code(46, 184 + i * 26, l, { size: 15, fill: C.ink }); });
  b += para(46, 486, 'checking, adding and averaging all in one block', 300, { size: 15, fill: C.muted, italic: true }).s;
  b += arrow(366, 320, 400, 320, { w: 4 });
  // after
  b += panel(410, 110, 460, 420, C.tealLight, C.tealDark);
  b += T(434, 146, 'After: main program reads as a plan', { size: 18, weight: 700, fill: C.tealDark });
  const main = ['CONSTANT NumMarks ← 5', 'sum ← 0', 'FOR i ← 1 TO NumMarks', '  sum ← sum + GetMark()', 'ENDFOR', 'OUTPUT Mean(sum, NumMarks)'];
  b += box(430, 164, 420, main.length * 26 + 24, { fill: C.ink, edge: C.ink });
  main.forEach((l, i) => { b += code(446, 190 + i * 26, l, { size: 15, fill: i === 3 || i === 5 ? C.mustard : '#e8eef0', weight: i === 3 || i === 5 ? 700 : 400 }); });
  const yM = 164 + main.length * 26 + 44;
  b += box(430, yM, 200, 130, { fill: '#ffffff', edge: C.ink }) + code(446, yM + 30, 'GetMark()', { size: 17, weight: 700, fill: C.tealDark });
  b += para(446, yM + 56, 'asks until 0 to 100; returns an integer; mark is local', 172, { size: 15, fill: C.muted }).s;
  b += box(650, yM, 200, 130, { fill: '#ffffff', edge: C.ink }) + code(666, yM + 30, 'Mean(total, count)', { size: 15, weight: 700, fill: C.tealDark });
  b += para(666, yM + 56, 'returns total / count (real); count must be greater than 0', 172, { size: 15, fill: C.muted }).s;
  const y = 550;
  b += panel(30, y, 840, 110);
  b += T(54, y + 36, 'Test GetMark on its own', { size: 18, weight: 700 });
  ['−1', '0', '100', '101'].forEach((v, i) => {
    const ok = v === '0' || v === '100';
    b += box(300 + i * 140, y + 20, 120, 50, { fill: ok ? C.tealLight : C.cream, edge: ok ? C.tealDark : C.rust }) + code(360 + i * 140, y + 53, v, { size: 20, weight: 700, anchor: 'middle' });
    b += T(360 + i * 140, y + 94, ok ? 'accepted' : 'asks again', { size: 15, weight: 700, anchor: 'middle', fill: ok ? C.tealDark : C.rust });
  });
  b += T(54, y + 70, 'and reuse it anywhere', { size: 16, fill: C.muted }) + T(54, y + 94, 'a mark is needed', { size: 16, fill: C.muted });
  add('05-restructuring-marks',
    svg(900, y + 140, 'Worked example: restructuring a program', b),
    'Before, input checking, adding and averaging are mixed in one block. After, input checking lives in GetMark, which asks until a mark from 0 to 100 is entered and returns it, and Mean returns total / count; the main program just loops NumMarks times adding GetMark() and outputs Mean(sum, NumMarks). GetMark can be tested alone with −1, 0, 100 and 101.',
    'Pull each job into its own module and the main program becomes a readable plan.',
    '## Worked example: restructuring a program');
}

// 06 Features to advantages
{
  let b = '';
  const feats = [['Modules with one job', 180, C.tealDark, C.tealLight], ['Documented interfaces', 360, C.olive, C.cream], ['Local variables', 540, C.blue, '#dfe7f3']];
  const advs = [
    ['Easier to understand', 'short modules; main program reads like an outline', [0]],
    ['Easier to test and debug', 'test modules alone; trace an error to one module', [0]],
    ['Easier to maintain', 'change one module; same interface, rest unaffected', [1]],
    ['Reuse', 'use a module again in this or other programs', [1]],
    ['Team development', 'write different modules at the same time', [0, 1]],
    ['Fewer side effects', 'one module cannot change another’s data', [2]],
  ];
  feats.forEach(([f, y, e, fl]) => { b += box(30, y - 34, 250, 68, { fill: fl, edge: e, rx: 14 }) + T(155, y + 6, f, { size: 17, weight: 700, anchor: 'middle', fill: e }); });
  advs.forEach(([a, d, links], i) => {
    const y = 120 + i * 88;
    b += box(440, y, 430, 74, { fill: '#ffffff', edge: C.panelEdge, rx: 12 });
    b += T(458, y + 30, a, { size: 17, weight: 700 }) + T(458, y + 56, d, { size: 15, fill: C.muted });
    links.forEach((li) => { const [, fy, e] = feats[li]; b += path(`M282,${fy} C360,${fy} 360,${y + 37} 434,${y + 37}`, { stroke: e, w: 2.5, extra: `marker-end="url(#${li === 0 ? 'ahT' : li === 1 ? 'ahO' : 'ah'})"` }); });
  });
  add('06-features-to-advantages',
    svg(900, 120 + 6 * 88 + 20, 'Why the structured approach helps', b),
    'Three features linked to six advantages. Modules with one job make a program easier to understand, easier to test and debug, and suit team development. Documented interfaces make it easier to maintain, allow reuse and let a team rely on agreed interfaces. Local variables mean fewer side effects.',
    'For each advantage, say which feature causes it and what it allows or prevents.',
    '## Advantages of the structured approach');
}
