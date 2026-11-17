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

export const slug = 'oxfordaqa-igcse-computer-science-9210-classification-of-programming-languages-and-translators';

const chipBox = (x, y, w, h, label, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 12}" fill="${o.fill || '#ffffff'}" stroke="${o.edge || C.ink}" stroke-width="${o.sw || 2.5}"/>` +
  (o.mono ? code(x + w / 2, y + h / 2 + 7, label, { size: o.size || 18, weight: 700, anchor: 'middle', fill: o.tf || C.ink }) : T(x + w / 2, y + h / 2 + 6, label, { size: o.size || 18, weight: 700, anchor: 'middle', fill: o.tf || C.ink }));
const cpu = (cx, cy, label, o = {}) => {
  let s = '';
  for (let i = -2; i <= 2; i++) {
    s += `<line x1="${cx + i * 14}" y1="${cy - 46}" x2="${cx + i * 14}" y2="${cy - 36}" stroke="${C.ink}" stroke-width="3"/><line x1="${cx + i * 14}" y1="${cy + 36}" x2="${cx + i * 14}" y2="${cy + 46}" stroke="${C.ink}" stroke-width="3"/>`;
    s += `<line x1="${cx - 46}" y1="${cy + i * 14}" x2="${cx - 36}" y2="${cy + i * 14}" stroke="${C.ink}" stroke-width="3"/><line x1="${cx + 36}" y1="${cy + i * 14}" x2="${cx + 46}" y2="${cy + i * 14}" stroke="${C.ink}" stroke-width="3"/>`;
  }
  s += `<rect x="${cx - 36}" y="${cy - 36}" width="72" height="72" rx="8" fill="${o.fill || C.teal}" stroke="${C.ink}" stroke-width="3"/>`;
  s += T(cx, cy + 7, label, { size: 18, weight: 700, anchor: 'middle' });
  return s;
};

// 01 Levels of language
{
  let b = '';
  const lv = [
    ['HIGH-LEVEL', 'Python, C#, Visual Basic', 'Close to English and maths; one statement becomes many machine code instructions', C.tealLight, C.tealDark],
    ['LOW-LEVEL', 'Assembly language', 'Mnemonics and named memory locations; 1:1 with machine code', C.cream, C.olive],
    ['LOW-LEVEL', 'Machine code', 'Binary instructions from one processor’s instruction set', '#ffffff', C.ink],
  ];
  lv.forEach(([k, n, d, f, e], i) => {
    const y = 110 + i * 150, x = 30, w = 560;
    b += `<rect x="${x}" y="${y}" width="${w}" height="124" rx="14" fill="${f}" stroke="${e}" stroke-width="2.5"/>`;
    b += T(x + 22, y + 32, k, { size: 15, weight: 700, fill: e });
    b += T(x + 22, y + 62, n, { size: 22, weight: 700 });
    b += para(x + 22, y + 90, d, w - 44, { size: 16, fill: C.muted }).s;
  });
  b += path('M592,172 L780,172 L780,500 L598,500', { stroke: C.tealDark, w: 3.5, extra: 'marker-end="url(#ahT)"' });
  b += path('M592,322 L640,322 L640,452 L598,452', { stroke: C.olive, w: 3.5, extra: 'marker-end="url(#ahO)"' });
  b += chipBox(660, 230, 200, 64, '', { fill: C.tealLight, edge: C.tealDark }) + T(760, 256, 'compiler or', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(760, 280, 'interpreter', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += chipBox(656, 366, 112, 44, 'assembler', { size: 16, fill: C.cream, edge: C.olive, tf: C.olive });
  const y = 572;
  b += `<rect x="30" y="${y}" width="840" height="62" rx="14" fill="${C.ink}"/>`;
  b += T(450, y + 39, 'A processor runs only machine code, so all other code must be translated.', { size: 18, weight: 700, anchor: 'middle', fill: '#ffffff' });
  add('01-levels-of-language',
    svg(900, y + 92, 'Levels of programming language', b),
    'Three stacked levels: high-level languages such as Python, C# and Visual Basic; assembly language with mnemonics and a 1:1 match to machine code; and binary machine code from one processor’s instruction set. High-level code reaches machine code through a compiler or interpreter and assembly through an assembler, because the processor runs only machine code.',
    'Whatever the language, the processor only ever runs machine code.',
    '## Machine code: the only language a processor runs');
}

// 02 One statement versus three instructions (1:1)
{
  let b = '';
  const y = 140;
  b += T(170, y - 8, 'High-level', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += T(500, y - 8, 'Assembly language', { size: 18, weight: 700, anchor: 'middle', fill: C.olive });
  b += T(770, y - 8, 'Machine code', { size: 18, weight: 700, anchor: 'middle' });
  b += chipBox(30, y + 104, 280, 64, 'total ← price + tax', { mono: true, fill: C.tealLight, edge: C.tealDark, size: 19 });
  const asm = ['LOAD price', 'ADD tax', 'STORE total'], mc = ['0001 1010', '0011 1011', '0010 1100'];
  asm.forEach((a, i) => {
    const yy = y + 16 + i * 88;
    b += chipBox(390, yy, 220, 64, a, { mono: true, fill: C.cream, edge: C.olive, size: 19 });
    b += chipBox(680, yy, 180, 64, mc[i], { mono: true, size: 19 });
    b += arrow(614, yy + 32, 674, yy + 32, { w: 3 });
    b += path(`M312,${y + 136} C350,${y + 136} 350,${yy + 32} 384,${yy + 32}`, { stroke: C.tealDark, w: 3, extra: 'marker-end="url(#ahT)"' });
  });
  b += T(644, y + 296, '1 : 1', { size: 20, weight: 700, anchor: 'middle', fill: C.olive });
  b += T(348, y + 296, 'one : many', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
  const r = row(y + 324, [
    { title: 'Machine code', body: ['Binary', 'Executed directly', 'Processor-specific'], bullets: true },
    { title: 'Assembly language', body: ['Mnemonics, easier to read and write', 'Must be assembled before it runs', 'Processor-specific'], bullets: true, fill: C.cream, edge: C.olive },
  ], { card: { size: 17, tsize: 20 } });
  b += r.s;
  const yn = y + 324 + r.h + 16;
  b += T(450, yn + 10, 'Mnemonics and bit patterns are illustrative; real instruction sets differ.', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  add('02-one-to-one-correspondence',
    svg(900, yn + 34, 'One statement, three instructions', b),
    'The high-level statement total ← price + tax becomes three assembly instructions, LOAD price, ADD tax and STORE total, and each assembly line becomes exactly one machine code instruction shown as an illustrative bit pattern. Below, machine code and assembly language are compared: both are processor-specific, but assembly uses mnemonics and must be assembled.',
    'High-level to machine code is one-to-many; assembly to machine code is exactly 1:1.',
    '## Assembly language');
}

// 03 Portability
{
  let b = '';
  const lane = (y, title, src, srcFill, srcEdge, rows) => {
    let s = panel(30, y, 840, 250) + T(54, y + 38, title, { size: 20, weight: 700 });
    s += chipBox(54, y + 100, 220, 70, src, { fill: srcFill, edge: srcEdge, size: 17 });
    rows.forEach(([lab, cp, ok], i) => {
      const yy = y + 70 + i * 110;
      s += path(`M276,${y + 135} C330,${y + 135} 330,${yy + 36} 380,${yy + 36}`, { stroke: ok ? C.tealDark : C.rust, w: 3, extra: `marker-end="url(#${ok ? 'ahT' : 'ahR'})"` + (ok ? '' : ' stroke-dasharray="9 7"') });
      s += chipBox(390, yy + 8, 230, 56, lab, { size: 16, fill: ok ? '#ffffff' : '#ffffff', edge: ok ? C.ink : C.rust, tf: ok ? C.ink : C.rust });
      s += cpu(700, yy + 36, cp, { fill: ok ? C.teal : '#ffffff' });
      s += ok ? '' : T(770, yy + 42, 'rewrite', { size: 16, weight: 700, fill: C.rust });
    });
    return s;
  };
  b += lane(110, 'High-level: portable', 'One source program', C.tealLight, C.tealDark, [['translate for A', 'A', true], ['translate for B', 'B', true]]);
  b += lane(380, 'Assembly: tied to one instruction set', 'Assembly for A', C.cream, C.olive, [['assemble', 'A', true], ['will not run on B', 'B', false]]);
  b += T(450, 664, 'A and B: processors from different families, each with its own instruction set', { size: 16, anchor: 'middle', fill: C.muted });
  add('03-portability',
    svg(900, 690, 'Why high-level code is portable', b),
    'One high-level source program is translated separately for processor A and processor B. An assembly program written for processor A is assembled for A but will not run on processor B, which has a different instruction set, so it must be rewritten.',
    'High-level source can be translated for any processor; assembly must be rewritten for each instruction set.',
    '## High-level languages');
}

// 04 Low-level: when it pays off
{
  let b = '';
  const colW = 411;
  b += panel(30, 110, colW, 410, C.tealLight, C.tealDark);
  b += T(54, 148, 'Advantages of low-level', { size: 20, weight: 700, fill: C.tealDark });
  const adv = [['Direct control of the hardware', 'work with specific memory locations and device components'], ['Very efficient code', 'small and fast: suits limited memory or processing power'], ['Precise control of what runs', 'each instruction chosen by the programmer, nothing added by a translator']];
  adv.forEach(([h, d], i) => {
    const y = 178 + i * 112;
    b += `<rect x="50" y="${y}" width="${colW - 40}" height="98" rx="10" fill="#ffffff" stroke="${C.tealDark}" stroke-width="2"/>`;
    b += T(68, y + 30, h, { size: 17, weight: 700 }) + para(68, y + 56, d, colW - 76, { size: 16, fill: C.muted }).s;
  });
  b += panel(459, 110, colW, 410, '#ffffff', C.rust);
  b += T(483, 148, 'Disadvantages', { size: 20, weight: 700, fill: C.rust });
  const dis = [['Harder and slower to write', ''], ['Harder to read, debug and maintain', ''], ['Not portable', 'tied to one processor’s instruction set']];
  dis.forEach(([h, d], i) => {
    const y = 178 + i * 112;
    b += `<rect x="479" y="${y}" width="${colW - 40}" height="98" rx="10" fill="#ffffff" stroke="${C.panelEdge}" stroke-width="2"/>`;
    b += d ? T(497, y + 40, h, { size: 17, weight: 700 }) + para(497, y + 66, d, colW - 76, { size: 16, fill: C.muted }).s : T(497, y + 56, h, { size: 17, weight: 700 });
  });
  const y = 544;
  b += `<rect x="30" y="${y}" width="840" height="96" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
  b += T(54, y + 38, 'So assembly is used for:', { size: 18, weight: 700 });
  b += T(54, y + 70, 'embedded systems and controlling specific hardware components', { size: 18, fill: C.ink });
  b += T(846, y + 70, 'not for most software', { size: 17, weight: 700, anchor: 'end', fill: C.olive });
  add('04-low-level-trade-offs',
    svg(900, y + 126, 'When low-level code is worth it', b),
    'Advantages of low-level languages: direct control of the hardware, very efficient code and precise control of what runs. Disadvantages: harder and slower to write, harder to read, debug and maintain, and not portable. So assembly is used for embedded systems and controlling specific hardware, not for most software.',
    'Control and efficiency win for embedded systems and hardware; ease and portability win everywhere else.',
    '## Why low-level languages are still used');
}

// 05 The three translators
{
  let b = '';
  const lane = (y, h, title, kick, edge, fill, body) => panel(30, y, 840, h) + `<rect x="30" y="${y}" width="12" height="${h}" rx="6" fill="${edge}"/>` +
    T(60, y + 36, title, { size: 21, weight: 700 }) + T(60 + tw(title, 21, 700) + 14, y + 36, kick, { size: 16, weight: 600, fill: edge }) + body;
  // Compiler
  let y = 110;
  b += lane(y, 190, 'Compiler', 'high-level language', C.tealDark, C.tealLight,
    chipBox(60, y + 62, 170, 64, 'whole program', { size: 17, fill: C.tealLight, edge: C.tealDark }) + arrow(234, y + 94, 274, y + 94) +
    chipBox(280, y + 62, 150, 64, 'Compiler', { size: 18, fill: C.ink, edge: C.ink, tf: '#ffffff' }) + arrow(434, y + 94, 474, y + 94) +
    chipBox(480, y + 62, 170, 64, 'executable file', { size: 17, fill: C.cream, edge: C.olive }) + arrow(654, y + 94, 694, y + 94) +
    chipBox(700, y + 62, 150, 64, 'run, again', { size: 17 }) +
    T(60, y + 166, 'Translates everything before it runs; machine code generated directly; run again without translating.', { size: 16, fill: C.muted }));
  // Interpreter
  y = 320;
  b += lane(y, 262, 'Interpreter', 'high-level language', C.blue, C.tealLight,
    [0, 1, 2].map((i) => chipBox(60, y + 58 + i * 52, 170, 44, `statement ${i + 1}`, { size: 16, edge: i === 0 ? C.blue : C.panelEdge })).join('') +
    arrow(234, y + 80, 274, y + 108) +
    `<rect x="280" y="${y + 58}" width="320" height="140" rx="12" fill="${C.ink}"/>` + T(440, y + 90, 'Interpreter', { size: 18, weight: 700, anchor: 'middle', fill: '#ffffff' }) +
    T(440, y + 114, 'itself a machine code program', { size: 15, anchor: 'middle', fill: C.teal }) +
    [0, 1, 2].map((i) => `<rect x="${300 + i * 98}" y="${y + 132}" width="86" height="46" rx="8" fill="${C.tealLight}"/>` + T(343 + i * 98, y + 161, 'routine', { size: 15, weight: 600, anchor: 'middle' })).join('') +
    arrow(604, y + 128, 644, y + 128) + chipBox(650, y + 96, 200, 64, 'statement carried out', { size: 16 }) +
    T(60, y + 244, 'Each statement in turn, using its own machine code routines: no machine code generated, no executable.', { size: 16, fill: C.muted }));
  // Assembler
  y = 602;
  b += lane(y, 190, 'Assembler', 'assembly language', C.olive, C.cream,
    chipBox(60, y + 62, 220, 64, 'assembly instruction', { size: 17, fill: C.cream, edge: C.olive }) + arrow(284, y + 94, 344, y + 94) +
    chipBox(350, y + 62, 160, 64, 'Assembler', { size: 18, fill: C.ink, edge: C.ink, tf: '#ffffff' }) + arrow(514, y + 94, 574, y + 94) +
    chipBox(580, y + 62, 270, 64, 'one machine code instruction', { size: 17 }) +
    T(60, y + 166, 'Converts each assembly instruction into exactly one machine code instruction.', { size: 16, fill: C.muted }));
  add('05-three-translators',
    svg(900, 822, 'Compiler, interpreter and assembler', b),
    'A compiler translates a whole high-level program into an executable file that can be run again without translating. An interpreter takes each statement in turn and carries it out by calling machine code routines within its own code, generating no machine code and no executable. An assembler converts each assembly instruction into one machine code instruction.',
    'Only the interpreter does not generate machine code: it carries out each statement with its own routines.',
    '## The three translators');
}

// 06 When to use each translator
{
  let b = '';
  const cards = [
    ['DEVELOPMENT', 'Interpreter', C.blue, ['Run as soon as a statement is written', 'Stops at the statement with the error, so it is easy to locate', 'Changes can be tested immediately']],
    ['DISTRIBUTION', 'Compiler', C.tealDark, ['Executable runs without the translator', 'Usually runs faster: translation already done', 'Customers do not get the source code']],
    ['ASSEMBLY CODE', 'Assembler', C.olive, ['Needed whenever any part is written in assembly', 'For example, a routine that controls a device’s hardware']],
  ];
  const w = 268, g = 18;
  cards.forEach(([k, n, e, pts], i) => {
    const x = 30 + i * (w + g);
    b += panel(x, 110, w, 310);
    b += `<rect x="${x}" y="110" width="${w}" height="92" rx="14" fill="${e}"/><rect x="${x}" y="180" width="${w}" height="22" fill="${e}"/>`;
    b += T(x + w / 2, 144, k, { size: 15, weight: 700, anchor: 'middle', fill: '#ffffff' });
    b += T(x + w / 2, 180, n, { size: 24, weight: 700, anchor: 'middle', fill: '#ffffff' });
    let cy = 236;
    pts.forEach((p) => { const pp = para(x + 20, cy, p, w - 40, { size: 16, bullet: true }); b += pp.s; cy += pp.h + 12; });
  });
  const y = 444;
  b += `<rect x="30" y="${y}" width="840" height="64" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
  b += T(450, y + 40, 'In an answer, tie the choice to the situation and give the benefit.', { size: 18, weight: 600, anchor: 'middle' });
  add('06-choosing-a-translator',
    svg(900, y + 94, 'Which translator, when?', b),
    'Three cards. Interpreter for development: run statements straight away, stop at the error and test changes immediately. Compiler for distribution: an executable that runs without the translator, usually faster, without giving away source code. Assembler whenever part of a program is in assembly language, such as a routine that controls hardware.',
    'Interpreter while developing, compiler for distribution, assembler for anything in assembly language.',
    '## When to use each translator');
}
