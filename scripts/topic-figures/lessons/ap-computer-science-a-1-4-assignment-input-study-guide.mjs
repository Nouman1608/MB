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

export const slug = 'ap-computer-science-a-1-4-assignment-input-study-guide';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// Monospace code text (JetBrains Mono, advance 0.6 em)
const MONO = "'JetBrains Mono', 'DejaVu Sans Mono', monospace";
const code = (x, y, s, o = {}) => `<text x="${x}" y="${y}" font-family="${MONO}" font-size="${o.size || 18}" font-weight="${o.weight || 400}" fill="${o.fill || C.ink}" text-anchor="${o.anchor || 'start'}">${X(s)}</text>`;
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

// 01 Evaluate right, then store left
{
  let b = '';
  const y0 = 140;
  const st = 'a = a * b;';
  const sx = 450 - cw(st, 34) / 2;
  b += `<rect x="${sx - 30}" y="${y0 - 40}" width="${cw(st, 34) + 60}" height="62" rx="12" fill="${C.ink}"/>`;
  b += code(sx, y0 + 2, st, { size: 34, weight: 700, fill: '#ffffff' });
  // underline parts
  const lx = sx, rx = sx + cw('a = ', 34), rw = cw('a * b', 34);
  b += `<line x1="${lx}" y1="${y0 + 36}" x2="${lx + cw('a', 34)}" y2="${y0 + 36}" stroke="${C.olive}" stroke-width="5"/>`;
  b += `<line x1="${rx}" y1="${y0 + 36}" x2="${rx + rw}" y2="${y0 + 36}" stroke="${C.tealDark}" stroke-width="5"/>`;
  b += T(lx + 10, y0 + 66, '2  store here', { size: 17, weight: 700, fill: C.olive, anchor: 'middle' });
  b += T(rx + rw / 2, y0 + 66, '1  evaluate first', { size: 17, weight: 700, fill: C.tealDark, anchor: 'middle' });
  // before memory
  const yb = 290;
  b += panel(30, yb, 260, 200) + T(160, yb + 34, 'Before', { size: 20, weight: 700, anchor: 'middle' });
  b += varBox(55, yb + 80, 'a', '', '3', { w: 90 }) + varBox(175, yb + 80, 'b', '', '5', { w: 90 });
  // evaluation
  b += arrow(296, yb + 112, 340, yb + 112, { w: 4 });
  b += panel(346, yb, 210, 200, C.tealLight, C.tealDark) + T(451, yb + 34, 'Right side', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += code(451, yb + 92, 'a * b', { size: 22, anchor: 'middle', weight: 700 }) + code(451, yb + 126, '3 * 5', { size: 22, anchor: 'middle' }) + code(451, yb + 168, '15', { size: 30, anchor: 'middle', weight: 700, fill: C.tealDark });
  b += T(451, yb + 186, 'one value, type int', { size: 15, anchor: 'middle', fill: C.muted });
  b += arrow(562, yb + 112, 606, yb + 112, { w: 4 });
  b += panel(612, yb, 258, 200) + T(741, yb + 34, 'After', { size: 20, weight: 700, anchor: 'middle' });
  b += varBox(637, yb + 80, 'a', '', '15', { w: 90, fill: C.cream, edge: C.olive }) + varBox(757, yb + 80, 'b', '', '5', { w: 90 });
  const yq = yb + 230;
  b += `<rect x="30" y="${yq}" width="840" height="84" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
  b += T(450, yq + 34, 'Not an equation: an instruction', { size: 19, weight: 700, anchor: 'middle' });
  b += T(450, yq + 62, '"take the current a, multiply by b, and put the result back in a"', { size: 17, anchor: 'middle', italic: true });
  add('01-evaluate-then-store',
    svg(900, yq + 114, 'Assignment: right side first, then store', b),
    'The statement a = a * b; with the right side marked "evaluate first" and the left variable marked "store here". Before, a holds 3 and b holds 5; the right side 3 * 5 evaluates to the int 15; after, a holds 15 and b still holds 5.',
    'The right side is evaluated with the current values, then the result replaces the left variable.',
    '## Assignment: evaluate on the right, store on the left');
}

// 02 Trace table for the first segment
{
  let b = '';
  const cp = codePanel(30, 110, 400, ['int a = 3;', 'int b = a + 2;', 'a = a * b;', 'b = b - a;', 'System.out.println(a + " " + b);'], { size: 16 });
  b += cp.s;
  b += `<rect x="460" y="110" width="410" height="${cp.h}" rx="12" fill="#ffffff" stroke="${C.panelEdge}" stroke-width="2.5"/>`;
  b += T(480, 146, 'Output', { size: 17, weight: 700, fill: C.tealDark });
  b += code(480, 186, '15 -10', { size: 28, weight: 700 });
  b += para(480, 222, 'b uses the new a (15), not the old one (3)', 370, { size: 16, fill: C.muted }).s;
  const y = 110 + cp.h + 24;
  const tt = traceTable(30, y, [['a', 'int'], ['b', 'int']], [
    ['int a = 3;', ['3', '-'], 0, 'the literal 3 is stored'],
    ['int b = a + 2;', ['3', '5'], 1, 'a + 2 is 5'],
    ['a = a * b;', ['15', '5'], 0, 'current a (3) and b (5): 15'],
    ['b = b - a;', ['15', '-10'], 1, 'uses the new a (15): 5 - 15 is -10'],
  ], { sw: 230, vw: 100 });
  b += tt.s;
  b += T(30, y + tt.h + 30, 'Highlighted cell: the only variable each statement changes', { size: 16, fill: C.muted, italic: true });
  add('02-trace-table',
    svg(900, y + tt.h + 56, 'Tracing four assignments', b),
    'A four-line Java segment and its trace table. a is set to 3, b to a + 2 = 5, then a becomes a * b = 15, and finally b becomes b - a = 5 - 15 = -10, so the program prints 15 -10. In each row only the left-hand variable changes.',
    'One row per statement, and each statement changes only the variable on its left.',
    '## Assignment: evaluate on the right, store on the left');
}

// 03 Value types and compatibility
{
  let b = '';
  const x0 = 30, c0 = 270, cwd = 190, rh = 96, y0 = 110;
  b += T(x0 + c0 + 1.5 * cwd, y0 + 22, 'STORED IN A VARIABLE OF TYPE', { size: 15, weight: 700, anchor: 'middle', fill: C.muted });
  ['int', 'double', 'boolean'].forEach((v, j) => {
    const x = x0 + c0 + j * cwd;
    b += `<rect x="${x + 4}" y="${y0 + 34}" width="${cwd - 8}" height="54" rx="10" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + code(x + cwd / 2, y0 + 68, v, { size: 22, weight: 700, anchor: 'middle' });
  });
  b += T(x0 + 10, y0 + 68, 'VALUE OF TYPE', { size: 15, weight: 700, fill: C.muted });
  const vals = [['int', '3 + 2  is  5'], ['double', '3 + 2.0  is  5.0'], ['boolean', 'true']];
  const grid = [[['ok', ''], ['ok', 'stored as 5.0'], ['no', '']], [['no', 'even if it looks whole'], ['ok', ''], ['no', '']], [['no', ''], ['no', ''], ['ok', '']]];
  vals.forEach(([ty, ex], i) => {
    const y = y0 + 100 + i * (rh + 8);
    b += `<rect x="${x0}" y="${y}" width="${c0 - 12}" height="${rh}" rx="12" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/>`;
    b += code(x0 + 18, y + 40, ty, { size: 22, weight: 700 }) + code(x0 + 18, y + 72, ex, { size: 16, fill: C.muted });
    grid[i].forEach(([k, note], j) => {
      const x = x0 + c0 + j * cwd, cx = x + cwd / 2, cy = y + (note ? 36 : rh / 2);
      const okc = k === 'ok';
      b += `<rect x="${x + 4}" y="${y}" width="${cwd - 8}" height="${rh}" rx="12" fill="${okc ? C.tealLight : '#ffffff'}" stroke="${okc ? C.tealDark : C.panelEdge}" stroke-width="2"/>`;
      if (okc) b += `<circle cx="${cx}" cy="${cy}" r="18" fill="${C.tealDark}"/>` + path(`M${cx - 9},${cy} l6,7 l12,-14`, { stroke: '#ffffff', w: 4 });
      else b += `<circle cx="${cx}" cy="${cy}" r="18" fill="#ffffff" stroke="${C.rust}" stroke-width="3"/>` + path(`M${cx - 8},${cy - 8} l16,16 M${cx + 8},${cy - 8} l-16,16`, { stroke: C.rust, w: 3.5 });
      if (note) b += T(cx, y + 80, note, { size: 15, anchor: 'middle', fill: okc ? C.tealDark : C.rust, weight: 600 });
    });
  });
  const y = y0 + 100 + 3 * (rh + 8) + 16;
  const r = row(y, [
    { kicker: 'COMPILES', title: 'double d = a + 2;', body: 'an int value in a double variable: holds 5.0', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'DOES NOT COMPILE', kfill: C.rust, title: 'int n = 2.5 * 2;', body: 'the value is a double, even though 5.0 looks whole', edge: C.rust },
  ], { card: { size: 16, tsize: 19 } });
  b += r.s;
  add('03-type-compatibility',
    svg(900, y + r.h + 30, 'Which values fit which variables', b),
    'A grid of value types against variable types. An int value can be stored in an int or a double variable, where 5 becomes 5.0; a double value only in a double variable, even if it looks whole; a boolean value only in a boolean variable. Below: double d = a + 2; compiles, int n = 2.5 * 2; does not.',
    'The compiler checks the type of the value, not whether it looks like a whole number.',
    '### An expression has a value and a type');
}

// 04 Initialization and null
{
  let b = '';
  b += T(30, 132, 'Not initialized', { size: 20, weight: 700 });
  const cp = codePanel(30, 148, 400, ['int y;', 'int z = y + 1;'], { size: 17, hl: [1] });
  b += cp.s;
  b += varBox(510, 176, 'y', 'declared, no value', '?', { w: 120, fill: '#ffffff', edge: C.rust, vfill: C.rust });
  b += `<rect x="30" y="${148 + cp.h + 14}" width="840" height="44" rx="10" fill="#ffffff" stroke="${C.rust}" stroke-width="2" stroke-dasharray="7 5"/>`;
  b += code(46, 148 + cp.h + 43, 'error: variable y might not have been initialized', { size: 16, fill: C.rust });
  b += T(680, 200, 'Fix:', { size: 17, weight: 700, fill: C.tealDark }) + code(722, 200, 'int y = 0;', { size: 17, weight: 700, fill: C.tealDark }) + T(680, 226, 'assign before any use', { size: 16, fill: C.muted });
  const y2 = 148 + cp.h + 100;
  b += T(30, y2, 'Reference variables', { size: 20, weight: 700 });
  const cp2 = codePanel(30, y2 + 16, 400, ['String title = "Dune";', 'String empty = null;'], { size: 17 });
  b += cp2.s;
  const vy = y2 + 150;
  b += varBox(60, vy, 'title', 'String', '', { w: 120 }) + `<circle cx="120" cy="${vy + 32}" r="7" fill="${C.ink}"/>`;
  b += arrow(127, vy + 32, 336, vy + 32, { w: 3.5 });
  b += `<rect x="342" y="${vy - 6}" width="200" height="76" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="3"/>` + T(442, vy + 18, 'String object', { size: 15, anchor: 'middle', fill: C.olive, weight: 700 }) + code(442, vy + 50, '"Dune"', { size: 22, weight: 700, anchor: 'middle' });
  b += varBox(60, vy + 150, 'empty', 'String', 'null', { w: 120, vfill: C.muted, vsize: 22 });
  b += T(200, vy + 188, 'refers to no object at all', { size: 17, fill: C.muted, italic: true });
  const notes = [['int n = null;', 'does not compile: primitives cannot hold null'], ['""', 'an actual empty String object, not null'], ['empty.length()', 'calling a method on null: NullPointerException']];
  let ny = vy - 4;
  notes.forEach(([c2, n]) => {
    const nh = 50 + para(0, 0, n, 260, { size: 15 }).h;
    b += `<rect x="580" y="${ny}" width="290" height="${nh}" rx="12" fill="#ffffff" stroke="${C.panelEdge}" stroke-width="2.5"/>`;
    b += code(596, ny + 28, c2, { size: 16, weight: 700 }) + para(596, ny + 52, n, 260, { size: 15, fill: C.muted }).s;
    ny += nh + 10;
  });
  const H = Math.max(vy + 150 + 64 + 50, ny + 20);
  add('04-initialization-and-null',
    svg(900, H, 'Uninitialized variables and null', b),
    'Top: int y; declares y with no value, so int z = y + 1; fails with "variable y might not have been initialized". Bottom: the String variable title holds an arrow to a String object "Dune", while empty holds null and refers to no object; primitives cannot hold null, and "" is a real empty String.',
    'A variable must be given a value before use, and null means no object at all.',
    '### Initialization: a variable must have a value before it is used');
}

// 05 Scanner: input becomes values in variables
{
  let b = '';
  b += T(30, 132, 'Input typed, one item per line:', { size: 17, weight: 700 }) + code(318, 132, 'Ada Lovelace⏎ 36⏎ 1.65⏎', { size: 17, fill: C.tealDark });
  const calls = [['Ada Lovelace', 'String name = in.nextLine();', 'name', 'String', '"Ada Lovelace"'], ['36', 'int age = in.nextInt();', 'age', 'int', '36'], ['1.65', 'double height = in.nextDouble();', 'height', 'double', '1.65']];
  b += T(110, 172, 'INPUT ITEM', { size: 15, weight: 700, anchor: 'middle', fill: C.muted }) + T(430, 172, 'ASSIGNMENT', { size: 15, weight: 700, anchor: 'middle', fill: C.muted }) + T(760, 172, 'VARIABLE', { size: 15, weight: 700, anchor: 'middle', fill: C.muted });
  const yC = 190;
  calls.forEach(([tok, c2, v, ty, val], i) => {
    const y = yC + i * 96;
    b += `<rect x="30" y="${y}" width="160" height="56" rx="10" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/>` + code(110, y + 35, tok, { size: 18, anchor: 'middle' });
    b += arrow(194, y + 28, 222, y + 28, { w: 3.5, color: C.tealDark, marker: 'ahT' });
    b += `<rect x="228" y="${y}" width="402" height="56" rx="10" fill="${C.ink}"/>` + code(244, y + 35, c2, { size: 17, fill: '#e8eef0' });
    b += arrow(634, y + 28, 664, y + 28, { w: 3.5 });
    b += `<rect x="670" y="${y}" width="200" height="56" rx="10" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + code(770, y + 26, val, { size: 18, weight: 700, anchor: 'middle' }) + T(770, y + 47, `${v} (${ty})`, { size: 15, anchor: 'middle', fill: C.muted });
  });
  const yT = yC + 3 * 96 + 14;
  const tb = table(30, yT, [{ w: 230, head: 'Method' }, { w: 610, head: 'Returns' }], [
    ['nextInt()', 'the next int'], ['nextDouble()', 'the next double'], ['nextBoolean()', 'the next boolean'], ['next()', 'the next word, as a String'], ['nextLine()', 'the rest of the line, as a String'],
  ], { size: 17 });
  b += tb.s;
  const yW = yT + tb.h + 16;
  b += `<rect x="30" y="${yW}" width="840" height="56" rx="12" fill="#ffffff" stroke="${C.rust}" stroke-width="2.5" stroke-dasharray="8 6"/>`;
  b += T(450, yW + 35, 'Typing abc when nextInt() is called throws an InputMismatchException at run time', { size: 16, anchor: 'middle', fill: C.rust, weight: 600 });
  add('05-scanner-input-to-variables',
    svg(900, yW + 86, 'Input becomes values in variables', b),
    'Three lines of keyboard input, "Ada Lovelace", 36 and 1.65, each followed by an end-of-line marker. Each Scanner call reads one item and its value is assigned to a variable: name holds "Ada Lovelace", age holds 36 and height holds 1.65. A table lists nextInt, nextDouble, nextBoolean, next and nextLine.',
    'Each Scanner call is an expression whose value is stored by an assignment.',
    '## Input: getting values from a user');
}

// 06 The nextLine pitfall: where the read position stops
{
  let b = '';
  const toks = [['5', '#ffffff', C.ink], ['⏎', C.tealLight, C.tealDark], ['hello', '#ffffff', C.ink], ['⏎', C.tealLight, C.tealDark]];
  const steps = [
    ['int n = in.nextInt();', 'reads 5, leaves the ⏎ unread', 'n = 5', [0], 1],
    ['String rest = in.nextLine();', 'reads the empty rest of the same line', 'rest = ""', [1], 2],
    ['String line = in.nextLine();', 'reads the next line', 'line = "hello"', [2, 3], 4],
  ];
  let y = 120;
  steps.forEach(([c2, d, res, used, pos], i) => {
    const h = 170;
    b += panel(30, y, 840, h, i === 1 ? C.cream : C.panel, i === 1 ? C.olive : C.panelEdge);
    b += badge(64, y + 36, 20, String(i + 1), i === 1 ? C.mustard : C.cream);
    b += code(98, y + 43, c2, { size: 18, weight: 700 });
    // stream
    let x = 98; const sy = y + 70; const xs = [];
    toks.forEach(([tk, f, e], j) => {
      const w = tk === '⏎' ? 40 : cw(tk, 20) + 26;
      xs.push(x);
      const done = j < pos, cur = used.includes(j);
      b += `<rect x="${x}" y="${sy}" width="${w}" height="44" rx="8" fill="${cur ? C.mustard : done ? '#e6eaea' : f}" stroke="${e}" stroke-width="${cur ? 3 : 2}" ${done && !cur ? 'opacity="0.6"' : ''}/>`;
      b += (tk === '⏎' ? T(x + w / 2, sy + 29, tk, { size: 20, anchor: 'middle', fill: C.tealDark }) : code(x + 13, sy + 29, tk, { size: 20 }));
      x += w + 6;
    });
    xs.push(x);
    const px = xs[pos] - 3;
    b += `<line x1="${px}" y1="${sy - 8}" x2="${px}" y2="${sy + 52}" stroke="${C.rust}" stroke-width="4"/>` + `<path d="M${px - 8},${sy + 62} L${px + 8},${sy + 62} L${px},${sy + 52} Z" fill="${C.rust}"/>`;
    b += T(px, sy + 82, 'read position', { size: 15, anchor: 'middle', fill: C.rust, weight: 600 });
    b += para(470, y + 92, d, 205, { size: 16, fill: C.muted }).s;
    b += `<rect x="690" y="${y + 70}" width="168" height="44" rx="10" fill="#ffffff" stroke="${C.olive}" stroke-width="2.5"/>` + code(774, y + 98, res, { size: 16, weight: 700, anchor: 'middle' });
    y += h + 12;
  });
  b += T(30, y + 22, 'Output:', { size: 17, weight: 700 }) + code(110, y + 22, '[]', { size: 18, weight: 700 }) + T(150, y + 22, 'then', { size: 17, fill: C.muted }) + code(196, y + 22, '[hello]', { size: 18, weight: 700 });
  b += T(870, y + 22, 'Input typed: 5 ⏎ hello ⏎', { size: 16, anchor: 'end', fill: C.muted });
  add('06-nextline-pitfall',
    svg(900, y + 52, 'The nextLine pitfall', b),
    'The input 5, end-of-line, hello, end-of-line, with a read position marker. nextInt() reads 5 and stops before the end-of-line. The first nextLine() reads the empty rest of that line, so rest is the empty string. The second nextLine() reads hello. The program prints [] then [hello].',
    'nextInt() leaves the end-of-line behind, so the next nextLine() returns an empty string.',
    '### The `nextLine` pitfall');
}

// 07 Four-move tracing method on worked example 1
{
  let b = '';
  const mv = [['Column per variable', 'with its type above'], ['One statement at a time', 'top to bottom, never skip'], ['Right side first', 'value and its type, from current values'], ['Overwrite only the left', 'copy the rest down; int into double gets .0']];
  const r = row(110, mv.map(([ti, d], i) => ({ kicker: `MOVE ${i + 1}`, title: ti, body: d, ...(i === 3 ? { fill: C.cream, edge: C.olive, kfill: C.olive } : {}) })), { arrows: true, gap: 24, card: { size: 15, tsize: 17, pad: 14 } });
  b += r.s;
  const y = 110 + r.h + 24;
  const tt = traceTable(30, y, [['items', 'int'], ['price', 'double'], ['cost', 'double']], [
    ['int items = 4;', ['4', '-', '-'], 0, ''],
    ['double price = 2.5;', ['4', '2.5', '-'], 1, ''],
    ['double cost = items * price;', ['4', '2.5', '10.0'], 2, '4 * 2.5 is the double 10.0'],
    ['items = items + 1;', ['5', '2.5', '10.0'], 0, 'uses the old items, 4'],
    ['cost = cost + items * price;', ['5', '2.5', '22.5'], 2, '5 * 2.5 = 12.5; 10.0 + 12.5 = 22.5'],
    ['price = items;', ['5', '5.0', '22.5'], 1, 'int 5 stored in a double: 5.0'],
  ], { sw: 320, vw: 82, csize: 15 });
  b += tt.s;
  const yo = y + tt.h + 20;
  b += `<rect x="30" y="${yo}" width="410" height="64" rx="12" fill="${C.ink}"/>` + T(50, yo + 40, 'Prints', { size: 17, weight: 700, fill: C.teal }) + code(120, yo + 41, '5 5.0 22.5', { size: 22, weight: 700, fill: '#ffffff' });
  b += `<rect x="460" y="${yo}" width="410" height="64" rx="12" fill="#ffffff" stroke="${C.rust}" stroke-width="2.5" stroke-dasharray="8 6"/>`;
  b += code(476, yo + 28, 'items = price;', { size: 16, weight: 700, fill: C.rust }) + T(476, yo + 52, 'would not compile: double into int', { size: 15, fill: C.muted });
  add('07-tracing-mixed-types',
    svg(900, yo + 94, 'Tracing assignments with mixed types', b),
    'Four tracing moves: a column per variable with its type, one statement at a time, right side first, overwrite only the left. Applied to worked example 1, items goes 4 then 5, price goes 2.5 then 5.0, and cost goes 10.0 then 22.5, so the program prints 5 5.0 22.5.',
    'Columns, one row per statement, right side first: the output is 5 5.0 22.5.',
    '## A reliable method for tracing assignments');
}

// 08 Rectangle program as a flowchart
{
  let b = '';
  const xL = 60, w = 380;
  const nodes = [
    ['io', 'double length = in.nextDouble();', 'input 4.5  →  4.5'],
    ['io', 'double width = in.nextDouble();', 'input 3  →  3.0'],
    ['p', 'double area = length * width;', '4.5 * 3.0  =  13.5'],
    ['p', 'double perimeter = 2 * (length + width);', '(4.5 + 3.0) = 7.5; 2 * 7.5 = 15.0'],
    ['io', 'print area and perimeter', 'Area: 13.5   Perimeter: 15.0'],
  ];
  let y = 120;
  b += `<rect x="${xL + w / 2 - 70}" y="${y}" width="140" height="44" rx="22" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="3"/>` + T(xL + w / 2, y + 29, 'start', { size: 17, weight: 700, anchor: 'middle' });
  y += 44;
  nodes.forEach(([k, c2, note], i) => {
    b += arrow(xL + w / 2, y + 2, xL + w / 2, y + 28, { w: 3 });
    y += 32;
    const h = 62;
    if (k === 'io') b += `<path d="M${xL + 20},${y} L${xL + w + 20},${y} L${xL + w - 20},${y + h} L${xL - 20},${y + h} Z" fill="${C.cream}" stroke="${C.olive}" stroke-width="3" stroke-linejoin="round"/>`;
    else b += `<rect x="${xL}" y="${y}" width="${w}" height="${h}" rx="6" fill="#ffffff" stroke="${C.ink}" stroke-width="3"/>`;
    const sz = cw(c2, 16) > w - 40 ? 14.6 : 16;
    b += i === 4 ? T(xL + w / 2, y + 37, c2, { size: 17, weight: 700, anchor: 'middle' }) : code(xL + w / 2, y + 37, c2, { size: Math.max(15, sz), anchor: 'middle', weight: 700 });
    b += `<line x1="${xL + w + 24}" y1="${y + h / 2}" x2="${xL + w + 50}" y2="${y + h / 2}" stroke="${C.muted}" stroke-width="2" stroke-dasharray="4 4"/>`;
    b += i === 4 ? code(xL + w + 58, y + h / 2 + 6, note, { size: 16, weight: 700, fill: C.tealDark }) : code(xL + w + 58, y + h / 2 + 6, note, { size: 16, fill: C.tealDark });
    y += h;
  });
  b += arrow(xL + w / 2, y + 2, xL + w / 2, y + 28, { w: 3 });
  y += 32;
  b += `<rect x="${xL + w / 2 - 70}" y="${y}" width="140" height="44" rx="22" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="3"/>` + T(xL + w / 2, y + 29, 'end', { size: 17, weight: 700, anchor: 'middle' });
  y += 70;
  b += chip(30, y, 300, 46, 'input / output', { fill: C.cream, edge: C.olive, size: 16 }) + chip(350, y, 300, 46, 'process (assignment)', { fill: '#ffffff', edge: C.ink, size: 16 });
  y += 66;
  b += `<rect x="30" y="${y}" width="840" height="56" rx="12" fill="#ffffff" stroke="${C.rust}" stroke-width="2.5" stroke-dasharray="8 6"/>`;
  b += T(450, y + 35, 'Typing abc for the length: nextDouble() throws an InputMismatchException (run-time error)', { size: 16, anchor: 'middle', fill: C.rust, weight: 600 });
  add('08-rectangle-flowchart',
    svg(900, y + 86, 'Worked example: the rectangle program', b),
    'Flowchart of the rectangle program. Two input steps read 4.5 into length and 3 into width as 3.0; area = length * width gives 13.5; perimeter = 2 * (length + width) evaluates the bracket to 7.5 then gives 15.0; the program prints Area: 13.5 and Perimeter: 15.0.',
    'Read, compute, print: every variable is assigned before it is used.',
    '## Worked example 2: A program driven by input');
}
