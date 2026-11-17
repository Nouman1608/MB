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

export const slug = 'oxfordaqa-igcse-computer-science-9210-programming-concepts';

const box = (x, y, w, h, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 10}" fill="${o.fill || '#ffffff'}" stroke="${o.edge || C.ink}" stroke-width="${o.sw || 2.5}"/>`;
const step = (cx, cy, w, s, o = {}) => box(cx - w / 2, cy - (o.h || 44) / 2, w, o.h || 44, o) + (o.mono ? code(cx, cy + 6, s, { size: o.size || 16, weight: 700, anchor: 'middle', fill: o.tf || C.ink }) : T(cx, cy + 6, s, { size: o.size || 16, weight: 700, anchor: 'middle', fill: o.tf || C.ink }));
const dia = (cx, cy, w, h, lines, o = {}) => `<path d="M${cx},${cy - h / 2} L${cx + w / 2},${cy} L${cx},${cy + h / 2} L${cx - w / 2},${cy} Z" fill="${o.fill || C.cream}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>` +
  lines.map((l, i) => code(cx, cy + 6 + (i - (lines.length - 1) / 2) * 20, l, { size: o.size || 15, weight: 700, anchor: 'middle' })).join('');
const lab = (x, y, s, f = C.tealDark, anchor = 'middle') => T(x, y, s, { size: 15, weight: 700, fill: f, anchor });

// 01 Three combining principles
{
  let b = '';
  const w = 268, g = 18, y = 110, h = 380;
  const heads = [['Sequence', 'one statement after another'], ['Selection', 'choose which block runs'], ['Iteration', 'repeat a block']];
  heads.forEach(([n, d], i) => {
    const x = 30 + i * (w + g);
    b += panel(x, y, w, h) + T(x + w / 2, y + 38, n, { size: 21, weight: 700, anchor: 'middle' }) + T(x + w / 2, y + 64, d, { size: 16, anchor: 'middle', fill: C.muted });
  });
  // sequence
  let cx = 30 + w / 2;
  ['statement 1', 'statement 2', 'statement 3'].forEach((s, i) => { b += step(cx, y + 120 + i * 92, 180, s); if (i < 2) b += arrow(cx, y + 142 + i * 92, cx, y + 190 + i * 92); });
  // selection
  cx = 30 + (w + g) + w / 2;
  b += dia(cx, y + 130, 170, 90, ['condition?']);
  b += path(`M${cx - 85},${y + 130} L${cx - 70 - 14},${y + 130} L${cx - 70},${y + 130} L${cx - 70},${y + 210}`, { stroke: C.tealDark, extra: 'marker-end="url(#ahT)"' }) + lab(cx - 92, y + 120, 'True', C.tealDark);
  b += path(`M${cx + 85},${y + 130} L${cx + 70},${y + 130} L${cx + 70},${y + 210}`, { stroke: C.rust, w: 0 });
  b += path(`M${cx + 85},${y + 130} L${cx + 75},${y + 130}`, { w: 0 });
  b += path(`M${cx + 70},${y + 152} L${cx + 70},${y + 210}`, { stroke: C.rust, w: 3, extra: 'marker-end="url(#ahR)"' }) + lab(cx + 96, y + 120, 'False', C.rust);
  b += step(cx - 70, y + 236, 110, 'block A') + step(cx + 70, y + 236, 110, 'block B');
  b += path(`M${cx - 70},${y + 258} L${cx - 70},${y + 290} L${cx},${y + 290} L${cx},${y + 316}`, { extra: 'marker-end="url(#ah)"' }) + path(`M${cx + 70},${y + 258} L${cx + 70},${y + 290} L${cx},${y + 290}`);
  b += T(cx, y + 344, 'then carry on', { size: 15, anchor: 'middle', fill: C.muted });
  // iteration
  cx = 30 + 2 * (w + g) + w / 2;
  b += dia(cx, y + 140, 170, 90, ['repeat?']);
  b += arrow(cx, y + 185, cx, y + 230, { color: C.tealDark, marker: 'ahT' }) + lab(cx + 22, y + 214, 'yes', C.tealDark, 'start');
  b += step(cx, y + 256, 150, 'loop body');
  b += path(`M${cx - 75},${y + 256} L${cx - 108},${y + 256} L${cx - 108},${y + 88} L${cx},${y + 88} L${cx},${y + 92}`, { extra: 'marker-end="url(#ah)"' });
  b += path(`M${cx + 85},${y + 140} L${cx + 112},${y + 140} L${cx + 112},${y + 330} L${cx + 20},${y + 330}`, { stroke: C.rust, extra: 'marker-end="url(#ahR)"' }) + lab(cx + 100, y + 128, 'no', C.rust);
  b += T(cx - 30, y + 336, 'carry on', { size: 15, anchor: 'middle', fill: C.muted });
  const yb = y + h + 20;
  const r = row(yb, [
    { kicker: 'STORE', title: 'Declaration, constant, assignment' },
    { kicker: 'CONTROL', title: 'Selection, iteration' },
    { kicker: 'REUSE', title: 'Subroutine call, e.g. ShowMenu()' },
  ], { card: { size: 16, tsize: 18 } });
  b += r.s;
  add('01-three-combining-principles',
    svg(900, yb + r.h + 30, 'Sequence, selection and iteration', b),
    'Three small flowcharts: sequence runs statements one after another; selection tests a condition and runs block A if True or block B if False; iteration repeats a loop body while the answer to "repeat?" is yes. Below, the six statement types are grouped: declaration, constant and assignment store values; selection and iteration control flow; a subroutine call reuses named code.',
    'Every program combines the six statement types using sequence, selection and iteration.',
    '## The six statement types');
}

// 02 Assignment works right to left
{
  let b = '';
  const st = 'total ← total + price', sz = 34, ew = cw(st, sz), sx = 450 - ew / 2, y0 = 160;
  b += box(sx - 30, y0 - 46, ew + 60, 66, { fill: C.ink, edge: C.ink, rx: 12 });
  b += code(sx, y0, st, { size: sz, weight: 700, fill: '#ffffff' });
  const lw = cw('total', sz), rx = sx + cw('total ← ', sz), rw = cw('total + price', sz);
  b += `<line x1="${sx}" y1="${y0 + 36}" x2="${sx + lw}" y2="${y0 + 36}" stroke="${C.olive}" stroke-width="5"/>`;
  b += `<line x1="${rx}" y1="${y0 + 36}" x2="${rx + rw}" y2="${y0 + 36}" stroke="${C.tealDark}" stroke-width="5"/>`;
  b += T(sx + lw / 2, y0 + 68, '2  store here', { size: 18, weight: 700, anchor: 'middle', fill: C.olive });
  b += T(rx + rw / 2, y0 + 68, '1  work this out first', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += path(`M${rx + rw / 2},${y0 + 84} C${rx + rw / 2},${y0 + 140} ${sx + lw / 2},${y0 + 140} ${sx + lw / 2},${y0 + 86}`, { stroke: C.ink, w: 3, extra: 'marker-end="url(#ah)"' });
  b += T(450, y0 + 160, 'using the current value of total', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  const y = y0 + 190;
  const r = row(y, [
    { kicker: 'DECLARATION', title: 'Gives the name', body: 'and in C# or Visual Basic also a data type, before it is used' },
    { kicker: 'ASSIGNMENT', title: 'Stores a value', body: 'Python creates the variable at its first assignment' },
  ], { card: { size: 16, tsize: 20 } });
  b += r.s;
  const yc = y + r.h + 18;
  b += box(30, yc, 840, 64, { fill: C.cream, edge: C.olive, rx: 14 });
  b += code(54, yc + 40, 'count ← count + 1', { size: 20, weight: 700 }) + T(300, yc + 39, 'makes sense in a program, though impossible in algebra', { size: 17 });
  add('02-assignment-right-to-left',
    svg(900, yc + 94, 'Assignment works right to left', b),
    'In total ← total + price, the right-hand side total + price is worked out first using the current value of total, and the answer is then stored back in total on the left. Declaration gives a variable its name (and in C# or Visual Basic a type); assignment stores a value in it.',
    'Work out the right-hand side first, then store the answer on the left.',
    '## Declaration and assignment are different');
}

// 03 Named constants: one change, everywhere
{
  let b = '';
  const half = (x, title, decl, uses, ok) => {
    let s = panel(x, 110, 411, 400, ok ? C.tealLight : '#ffffff', ok ? C.tealDark : C.rust) + T(x + 24, 148, title, { size: 19, weight: 700, fill: ok ? C.tealDark : C.rust });
    if (decl) s += box(x + 24, 168, 363, 56, { fill: C.ink, edge: C.ink }) + code(x + 205, 204, decl, { size: 19, weight: 700, anchor: 'middle', fill: C.mustard });
    uses.forEach((u, i) => {
      const yy = 270 + i * 66;
      s += box(x + 24, yy, 363, 50, { fill: '#ffffff', edge: C.panelEdge }) + code(x + 40, yy + 32, u, { size: 18, weight: 700 });
      if (ok) s += path(`M${x + 380},${196} L${x + 396},196 L${x + 396},${yy + 25} L${x + 389},${yy + 25}`, { stroke: C.tealDark, w: 2.5 });
    });
    return s;
  };
  b += half(30, 'Literal values scattered through code', '', ['… price * 0.2 …', '… cost * 0.2 …', '… fee * 0.2 …'], false);
  b += T(235, 488, 'What is 0.2? Change it in every place.', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
  b += half(459, 'A named constant', 'CONSTANT VatRate ← 0.2', ['… price * VatRate …', '… cost * VatRate …', '… fee * VatRate …'], true);
  b += T(664, 488, 'Edit one declaration; nothing missed.', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  const r = row(534, [
    { kicker: 'ONE CHANGE, EVERYWHERE', title: 'Edit one line', body: 'no hunting for every 0.2' },
    { kicker: 'READABILITY', title: 'price * VatRate', body: 'explains what the number is' },
    { kicker: 'SAFETY', title: 'Cannot be reassigned', body: 'not changed by accident while running' },
  ], { card: { size: 16, tsize: 19 } });
  b += r.s;
  add('03-named-constants',
    svg(900, 534 + r.h + 30, 'Why use a named constant?', b),
    'Left: the literal 0.2 appears in several calculations, so its meaning is unclear and every copy must be changed. Right: CONSTANT VatRate ← 0.2 is declared once and used as price * VatRate and in other calculations. Benefits: one change updates every use, the code explains itself, and the value cannot be changed accidentally while the program runs.',
    'A named constant is declared once, explains itself and cannot change while the program runs.',
    '## Why named constants and variables are used');
}

// 04 WHILE vs REPEAT: zero runs or at least one
{
  let b = '';
  const col = (x, title, lines, steps, out, note, ok) => {
    let s = panel(x, 110, 411, 534) + T(x + 205, 148, title, { size: 20, weight: 700, anchor: 'middle' });
    s += codePanel(x + 24, 166, 363, lines, { size: 18, lh: 30 }).s;
    steps.forEach(([a, bTxt, c], i) => {
      const yy = 362 + i * 60;
      s += badge(x + 46, yy + 22, 16, String(i + 1), C.cream);
      s += code(x + 74, yy + 18, a, { size: 17, weight: 700, fill: c || C.ink }) + T(x + 74, yy + 42, bTxt, { size: 15, fill: C.muted });
    });
    s += box(x + 24, 554, 363, 70, { fill: C.cream, edge: C.olive, rx: 12 });
    s += T(x + 44, 582, 'Output', { size: 15, weight: 700, fill: C.olive }) + code(x + 44, 612, out, { size: 26, weight: 700 });
    s += T(x + 367, 606, note, { size: 16, weight: 700, anchor: 'end', fill: ok ? C.tealDark : C.olive });
    return s;
  };
  b += col(30, 'Condition at the start', ['n ← 10', 'WHILE n < 5', '  n ← n + 1', 'ENDWHILE', 'OUTPUT n'],
    [['n ← 10', 'store 10'], ['n < 5 is False', 'body skipped', C.rust], ['OUTPUT n', 'n is still 10']], '10', 'body ran 0 times');
  b += col(459, 'Condition at the end', ['n ← 10', 'REPEAT', '  n ← n + 1', 'UNTIL n ≥ 5', 'OUTPUT n'],
    [['n ← n + 1', 'body runs first: n is 11'], ['n ≥ 5 is True', 'stop repeating', C.tealDark], ['OUTPUT n', 'n is 11']], '11', 'body ran once');
  const y = 660;
  b += box(30, y, 840, 64, { fill: '#ffffff', edge: C.panelEdge, rx: 14 });
  b += T(450, y + 40, 'WHILE repeats while its condition is True; UNTIL repeats until its condition becomes True.', { size: 17, weight: 600, anchor: 'middle' });
  add('04-while-versus-repeat',
    svg(900, y + 94, 'Where the condition sits matters', b),
    'Both programs start with n ← 10. The WHILE loop tests n < 5 first, which is False, so the body never runs and 10 is output. The REPEAT loop runs the body once, making n 11, then tests n ≥ 5, which is True, so it stops and outputs 11.',
    'A condition at the start allows zero runs; a condition at the end guarantees at least one.',
    '## Definite and indefinite iteration');
}

// 05 Choosing a loop
{
  let b = '';
  const w = 268, g = 18;
  const cards = [
    ['FOR', 'Definite', 'The count is known when the loop starts', 'process 30 students; run 10 rounds', C.tealDark, C.tealLight],
    ['WHILE', 'Indefinite, test at start', 'The loop might not need to run at all', 'keep reading while there is data', C.blue, '#dfe7f3'],
    ['REPEAT … UNTIL', 'Indefinite, test at end', 'The body must run once before you can test', 'ask a question, then check the answer', C.olive, C.cream],
  ];
  cards.forEach(([k, kind, when, ex, e, f], i) => {
    const x = 30 + i * (w + g);
    b += box(x, 110, w, 300, { fill: '#ffffff', edge: C.panelEdge, rx: 14 });
    b += `<rect x="${x}" y="110" width="${w}" height="90" rx="14" fill="${f}" stroke="${e}" stroke-width="2.5"/>`;
    b += code(x + w / 2, 152, k, { size: 22, weight: 700, anchor: 'middle', fill: e }) + T(x + w / 2, 182, kind, { size: 15, weight: 700, anchor: 'middle', fill: C.muted });
    b += para(x + 20, 236, when, w - 40, { size: 17, weight: 700 }).s;
    b += T(x + 20, 320, 'e.g.', { size: 15, weight: 700, fill: e });
    b += para(x + 20, 344, ex, w - 40, { size: 16, fill: C.muted }).s;
  });
  b += box(30, 430, 840, 60, { fill: C.cream, edge: C.olive, rx: 14 });
  b += T(450, 467, 'Using FOR when the number of repetitions depends on user input is a common mistake.', { size: 17, weight: 600, anchor: 'middle' });
  add('05-choosing-a-loop',
    svg(900, 520, 'Which loop?', b),
    'FOR is definite iteration, for when the count is known, such as processing 30 students. WHILE is indefinite with the test at the start, for when the loop might not need to run, such as reading while there is data. REPEAT … UNTIL tests at the end, for when the body must run once first, such as asking a question then checking the answer.',
    'Known count: FOR. Might not run: WHILE. Must run once: REPEAT … UNTIL.',
    '## Definite and indefinite iteration');
}

// 06 Nested iteration: stars, correct and bugged
{
  let b = '';
  const cp = codePanel(30, 110, 420, ['CONSTANT MaxRows ← 3', 'FOR row ← 1 TO MaxRows', '  line ← ""', '  FOR col ← 1 TO row', '    line ← line + "*"', '  ENDFOR', '  OUTPUT line', 'ENDFOR'], { size: 17, lh: 30, hl: [2] });
  b += cp.s;
  // trace grid
  const tx = 470;
  b += panel(tx, 110, 400, cp.h);
  b += T(tx + 24, 146, 'row', { size: 16, weight: 700, fill: C.muted }) + T(tx + 90, 146, 'inner loop: col', { size: 16, weight: 700, fill: C.muted }) + T(tx + 300, 146, 'output', { size: 16, weight: 700, fill: C.muted });
  [1, 2, 3].forEach((r, i) => {
    const yy = 166 + i * 58;
    b += code(tx + 36, yy + 32, String(r), { size: 22, weight: 700, anchor: 'middle' });
    for (let c = 1; c <= r; c++) b += box(tx + 84 + (c - 1) * 52, yy + 6, 44, 40, { fill: C.tealLight, edge: C.tealDark, rx: 8 }) + code(tx + 106 + (c - 1) * 52, yy + 33, String(c), { size: 18, weight: 700, anchor: 'middle' });
    b += code(tx + 300, yy + 34, '*'.repeat(r), { size: 24, weight: 700, fill: C.olive });
  });
  b += T(tx + 24, 166 + 3 * 58 + 22, 'inner loop runs 1 + 2 + 3 = 6 times', { size: 16, weight: 700, fill: C.tealDark });
  const y = 110 + cp.h + 22;
  b += panel(30, y, 840, 150, '#ffffff', C.rust);
  b += T(54, y + 38, 'Bug: line ← "" moved above the outer loop', { size: 18, weight: 700, fill: C.rust });
  b += T(54, y + 66, 'The line is never reset, so each row keeps the stars from before.', { size: 16, fill: C.muted });
  ['*', '***', '******'].forEach((s2, i) => { b += code(720, y + 48 + i * 32, s2, { size: 24, weight: 700, fill: C.rust }); });
  b += T(54, y + 120, 'Outputs * then *** then ******', { size: 16, weight: 700 });
  const yc = y + 170;
  b += box(30, yc, 840, 60, { fill: C.cream, edge: C.olive, rx: 14 });
  b += T(450, yc + 38, 'Change MaxRows to 5 and it draws five rows: no other line changes.', { size: 17, weight: 600, anchor: 'middle' });
  add('06-nested-loop-trace',
    svg(900, yc + 90, 'Tracing nested loops', b),
    'Nested FOR loops with MaxRows set to 3. For row 1 the inner loop runs once, for row 2 twice and for row 3 three times, 6 times in all, outputting *, ** and ***. If line ← "" were moved above the outer loop, the line would never reset and the outputs would be *, *** and ******.',
    'The inner loop finishes completely for each pass of the outer loop; reset the line inside the outer loop.',
    '## Worked example: tracing nested iteration');
}

// 07 Nested selection
{
  let b = '';
  const cx = 300;
  b += dia(cx, 170, 220, 100, ['age ≥ 18?'], { size: 18 });
  b += path(`M${cx + 110},170 L${cx + 300},170 L${cx + 300},300`, { stroke: C.rust, extra: 'marker-end="url(#ahR)"' }) + lab(cx + 150, 158, 'False', C.rust);
  b += step(cx + 300, 330, 200, 'OUTPUT "Too young"', { mono: true, h: 52, fill: '#ffffff', edge: C.rust });
  b += arrow(cx, 220, cx, 272, { color: C.tealDark, marker: 'ahT' }) + lab(cx + 30, 252, 'True');
  b += dia(cx, 330, 220, 100, ['hasTicket?'], { size: 18, fill: C.tealLight });
  b += T(cx - 150, 336, 'inner IF', { size: 15, weight: 700, anchor: 'end', fill: C.tealDark });
  b += path(`M${cx - 110},330 L${cx - 170},330`, { w: 0 });
  b += arrow(cx - 60, 362, cx - 120, 430, { color: C.tealDark, marker: 'ahT' }) + lab(cx - 112, 392, 'True');
  b += arrow(cx + 60, 362, cx + 120, 430, { color: C.rust, marker: 'ahR' }) + lab(cx + 116, 392, 'False', C.rust);
  b += step(cx - 130, 460, 180, 'OUTPUT "Enter"', { mono: true, h: 52 });
  b += step(cx + 130, 460, 240, 'OUTPUT "Buy a ticket"', { mono: true, h: 52 });
  const y = 520;
  const r = row(y, [
    { kicker: 'age ← 20, hasTicket ← False', title: 'Buy a ticket', body: 'outer True, inner False', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'age ← 15, hasTicket ← True', kfill: C.rust, title: 'Too young', body: 'inner IF never reached, so the ticket does not matter', edge: C.rust },
  ], { card: { size: 16, tsize: 21 } });
  b += r.s;
  add('07-nested-selection',
    svg(900, y + r.h + 30, 'Nested selection', b),
    'A decision flow: if age ≥ 18 is False, the output is "Too young"; if True, the inner test hasTicket decides between "Enter" and "Buy a ticket". With age 20 and no ticket the output is "Buy a ticket"; with age 15 and a ticket it is "Too young", because the inner IF is never reached.',
    'The inner condition is only tested when the outer condition is True.',
    '## Worked example: nested selection');
}
