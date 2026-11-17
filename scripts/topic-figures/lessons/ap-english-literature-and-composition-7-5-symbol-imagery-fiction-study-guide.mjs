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

export const slug = 'ap-english-literature-and-composition-7-5-symbol-imagery-fiction-study-guide';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// 01 Image, motif, symbolic setting
{
  let b = '';
  const tiers = [
    ['IMAGE', 'A sensory detail', 'what we see, hear, smell, taste or feel; builds the world and its mood', C.panel, C.panelEdge],
    ['MOTIF', 'A unified pattern of recurring objects or images', 'emphasises a significant idea across large parts of the text', C.cream, C.olive],
    ['SYMBOLIC SETTING', 'A place associated with abstractions', 'emotions, ideologies and beliefs', C.tealLight, C.tealDark],
  ];
  let y = 110;
  tiers.forEach(([k, ti, d, f, e], i) => {
    const x = 30 + i * 40, w = 840 - i * 80;
    const c = card(x, y, w, { kicker: k, title: ti, body: d, fill: f, edge: e, tsize: 20, size: 17, kfill: i === 1 ? C.olive : C.tealDark });
    b += c.s;
    if (i === 0) {
      ['see', 'hear', 'smell', 'taste', 'feel'].forEach((s2, j) => { b += chip(560 + j * 60, y + 18, 52, 30, s2, { size: 15, weight: 600, fill: '#ffffff', edge: C.panelEdge, rx: 15 }); });
    }
    y += c.h;
    if (i < 2) { b += arrow(450, y + 4, 450, y + 30, { w: 3.5 }); b += T(462, y + 23, i === 0 ? 'images recur and converge on an idea' : 'a place gathers associations', { size: 15, fill: C.muted, italic: true }); y += 36; }
  });
  y += 30;
  b += T(450, y, 'Settings with near-universal associations: a starting point only', { size: 18, weight: 700, anchor: 'middle' });
  const assoc = [['desert', 'emptiness or testing'], ['garden', 'innocence or retreat'], ['storm', 'upheaval']];
  assoc.forEach(([a, m], i) => {
    const x = 30 + i * 288;
    b += `<rect x="${x}" y="${y + 18}" width="264" height="70" rx="12" fill="#ffffff" stroke="${C.panelEdge}" stroke-width="2.5"/>`;
    b += T(x + 132, y + 46, a, { size: 19, weight: 700, anchor: 'middle' }) + T(x + 132, y + 72, m, { size: 16, anchor: 'middle', fill: C.muted });
  });
  add('01-image-motif-setting',
    svg(900, y + 118, 'Image, motif and symbolic setting', b),
    'Three related tools: an image is a sensory detail; a motif is a pattern of recurring images that emphasises an idea; a symbolic setting is a place associated with emotions, ideologies or beliefs. Below, some settings carry near-universal associations: desert with emptiness or testing, garden with innocence or retreat, storm with upheaval.',
    'Images recur into motifs, and places can gather symbolic meaning.',
    '## Image, motif and symbolic setting');
}

// 02 What images do
{
  let b = '';
  const fn = [
    ['Create mood', 'sets an atmosphere through sensory detail', '"The sound of dripping water builds a mood of neglect"'],
    ['Make the abstract concrete', 'gives an idea a physical form', '"The cold light makes loneliness visible"'],
    ['Characterise', 'shows how a character perceives the world', '"She notices only the stains on the cloth"'],
    ['Link and repeat', 'ties scenes together by echo', '"The recurring smell of smoke connects each warning"'],
  ];
  const w = 411;
  const h1 = Math.max(...fn.map(([ti, d]) => cardH(w, { kicker: 'X', title: ti, body: d, size: 17, tsize: 20 })));
  const hc = h1 + 74;
  fn.forEach(([ti, d, ex], i) => {
    const x = 30 + (i % 2) * (w + 18), y = 110 + Math.floor(i / 2) * (hc + 16);
    b += card(x, y, w, { kicker: `FUNCTION ${i + 1}`, title: ti, body: d, size: 17, tsize: 20, minH: hc }).s;
    const ey = y + h1 - 4;
    b += `<rect x="${x + 18}" y="${ey}" width="${w - 36}" height="62" rx="10" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>`;
    const eh = para(0, 0, ex, w - 64, { size: 16, italic: true }).h;
    b += para(x + 32, ey + (62 - eh) / 2 + 15, ex, w - 64, { size: 16, italic: true }).s;
  });
  const y = 110 + 2 * (hc + 16) + 8;
  b += `<rect x="30" y="${y}" width="840" height="64" rx="14" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>`;
  b += T(450, y + 39, 'Ask: what does this detail suggest, and why this one and not another?', { size: 18, weight: 700, anchor: 'middle' });
  add('02-what-images-do',
    svg(900, y + 94, 'Four things an image can do', b),
    'Four functions of imagery, each with a sample comment: create mood, as dripping water builds neglect; make the abstract concrete, as cold light makes loneliness visible; characterise, as she notices only the stains; and link scenes, as the smell of smoke connects each warning.',
    'Imagery creates mood, makes ideas concrete, characterises and links scenes.',
    '## What images do');
}

// 03 From image to motif
{
  let b = '';
  b += panel(30, 110, 840, 230);
  const dots = [[90, 175, 'light'], [215, 180, 'birds'], [150, 228, 'cold'], [265, 240, 'light'], [90, 280, 'water'], [210, 300, 'cold'], [140, 175 + 150, 'locks']];
  dots.forEach(([x, y, s]) => { b += chip(x - 36, y - 16, 72, 32, s, { size: 15, weight: 600, fill: ['light', 'cold'].includes(s) ? C.cream : '#ffffff', edge: ['light', 'cold'].includes(s) ? C.olive : C.panelEdge, rx: 16 }); });
  b += T(165, 140, 'scattered images', { size: 16, anchor: 'middle', fill: C.muted, weight: 600 });
  b += arrow(310, 225, 380, 225, { w: 4 });
  b += `<rect x="390" y="160" width="190" height="130" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
  b += T(485, 145, 'a group', { size: 16, anchor: 'middle', fill: C.muted, weight: 600 });
  [['light', 410, 180], ['light', 495, 180], ['cold', 410, 235], ['cold', 495, 235]].forEach(([s, x, y]) => { b += chip(x, y, 72, 32, s, { size: 15, weight: 600, fill: '#ffffff', edge: C.olive, rx: 16 }); });
  b += arrow(590, 225, 660, 225, { w: 4 });
  b += `<rect x="670" y="170" width="180" height="110" rx="14" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="3"/>`;
  b += T(760, 145, 'the idea', { size: 16, anchor: 'middle', fill: C.muted, weight: 600 }) + T(760, 218, 'MOTIF', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(760, 246, 'one idea', { size: 19, weight: 700, anchor: 'middle' });
  const st = [['Collect', 'the recurring objects or images'], ['Group', 'by what they have in common'], ['State the idea', 'they emphasise'], ['Track change', 'intensify, shift or reverse?'], ['Explain function', 'across the work']];
  const r = row(370, st.map(([ti, d], i) => ({ kicker: `STEP ${i + 1}`, title: ti, body: d, ...(i === 4 ? { fill: C.tealLight, edge: C.tealDark } : {}) })), { gap: 14, card: { size: 15, tsize: 17, pad: 14 } });
  b += r.s;
  add('03-image-to-motif',
    svg(900, 370 + r.h + 30, 'From image to motif', b),
    'Scattered images such as light, cold, water, birds and locks are sorted; the recurring light and cold images are grouped, and the group converges on one idea, the motif. Five steps: collect, group, state the idea, track change and explain function.',
    'A motif appears when recurring images converge on one idea.',
    '## From image to motif');
}

// 04 Usher and Goodman Brown
{
  let b = '';
  const yP = 110, H = 400;
  b += panel(30, yP, 411, H) + T(50, yP + 36, 'The Fall of the House of Usher', { size: 19, weight: 700 });
  // house drawing
  const hx = 120, hy = yP + 90;
  b += `<rect x="${hx}" y="${hy}" width="200" height="120" fill="${C.rock}" stroke="${C.ink}" stroke-width="3"/><path d="M${hx - 10},${hy} L${hx + 100},${hy - 40} L${hx + 210},${hy} Z" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  [0, 1, 2].forEach((i) => { b += `<rect x="${hx + 22 + i * 60}" y="${hy + 24}" width="34" height="40" fill="${C.ink}" opacity="0.7"/>`; });
  b += `<rect x="${hx - 60}" y="${hy + 128}" width="320" height="36" rx="18" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2"/>` + T(hx + 100, hy + 152, 'the tarn', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600 });
  b += path(`M${hx + 150},${hy - 22} l-8,22 l10,20 l-12,24 l9,22 l-10,26 l8,24 l-6,30`, { stroke: C.rust, w: 3.5 });
  b += `<line x1="${hx + 160}" y1="${hy + 70}" x2="${hx + 232}" y2="${hy + 50}" stroke="${C.rust}" stroke-width="2"/>` + T(hx + 236, hy + 55, 'fissure', { size: 15, fill: C.rust, weight: 700 });
  const yt = yP + 284;
  b += para(50, yt, '"the House of Usher" is both the building and the family line', 370, { size: 16 }).s;
  b += para(50, yt + 50, 'A crack runs down the wall to the tarn: decay in the family. The house falls into the tarn, and building and family end together.', 370, { size: 16, fill: C.muted }).s;
  // Goodman Brown
  b += panel(459, yP, 411, H, C.panel) + T(479, yP + 36, 'Young Goodman Brown', { size: 19, weight: 700 });
  b += `<rect x="479" y="${yP + 60}" width="160" height="150" rx="12" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + T(559, yP + 125, 'Salem', { size: 19, weight: 700, anchor: 'middle' }) + T(559, yP + 150, 'faith', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 });
  b += `<rect x="690" y="${yP + 60}" width="160" height="150" rx="12" fill="#cfdcc0" stroke="${C.grass}" stroke-width="2.5"/>`;
  [[715, 95], [760, 80], [805, 100], [735, 150], [790, 145]].forEach(([x, y]) => { b += `<path d="M${x},${yP + y + 30} L${x - 14},${yP + y + 30} L${x},${yP + y} L${x + 14},${yP + y + 30} Z" fill="${C.grass}" stroke="${C.ink}" stroke-width="2"/>`; });
  b += T(770, yP + 200, 'forest: doubt', { size: 16, anchor: 'middle', weight: 700 });
  b += arrow(645, yP + 135, 684, yP + 135, { w: 3 }) + arrow(684, yP + 135, 645, yP + 135, { w: 3 });
  b += path(`M560,${yP + 232} q12,-10 24,0 q12,10 24,0`, { stroke: C.rust, w: 4 }) + path(`M745,${yP + 232} q12,-10 24,0 q12,10 24,0`, { stroke: C.rust, w: 4 });
  b += T(584, yP + 258, "on Faith's cap", { size: 15, anchor: 'middle', fill: C.muted }) + T(769, yP + 258, 'falls in the forest', { size: 15, anchor: 'middle', fill: C.muted });
  b += para(479, yP + 296, 'The pink ribbon recurs and is tied to her innocence: "My Faith is gone!" Name and ribbon work together.', 370, { size: 16 }).s;
  add('04-usher-and-brown',
    svg(900, yP + H + 30, 'Symbolic settings in two stories', b),
    'Left: the House of Usher, with a fissure running down the wall to the tarn; the house is both building and family line, and both end when it collapses. Right: Salem, a place of faith, set against the forest of doubt, with Faith\'s pink ribbon appearing first on her cap and then falling in the forest.',
    'A crack in a wall and a pink ribbon carry each story\'s central idea.',
    '## Public-domain examples to learn from');
}

// 05 Mr Alder: a motif of absent warmth across the day
{
  let b = '';
  const st = [
    ['Morning', 'light "thin and white, like milk held up to a window"', 'hands held out "as to a fire that was not there"'],
    ['Noon', 'light "like a sheet of ice that nobody dared to step on"', 'children eat "in silence"'],
    ['Three o\'clock', 'the light "had thinned further"', ''],
    ['Dismissal', '"letting go of a last warm coin"', 'the children were his only warmth'],
  ];
  const w = 195, gap = 20;
  const hs = st.map(([, a, c]) => cardH(w, { body: c ? [a, c] : [a], size: 15, pad: 14, italic: true, gap: 10 }));
  const H = Math.max(...hs) + 44;
  st.forEach(([t1, a, c], i) => {
    const x = 30 + i * (w + gap);
    b += T(x + w / 2, 130, t1, { size: 19, weight: 700, anchor: 'middle' });
    const hi = i === 3 ? { fill: C.cream, edge: C.olive } : {};
    b += card(x, 146, w, { kicker: i === 3 ? 'REVERSAL' : 'COLD LIGHT', kfill: i === 3 ? C.olive : C.tealDark, body: c ? [a, c] : [a], size: 15, pad: 14, italic: true, bfill: C.ink, gap: 10, minH: H, ...hi }).s;
    if (i < 3) b += arrow(x + w + 2, 146 + H / 2, x + w + gap - 2, 146 + H / 2, { w: 3 });
  });
  // light bar thinning
  const yb = 146 + H + 30;
  b += T(30, yb + 4, 'light', { size: 15, weight: 700, fill: C.muted });
  b += `<path d="M90,${yb - 14} L860,${yb - 2} L860,${yb + 2} L90,${yb + 14} Z" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>`;
  b += T(860, yb + 30, 'thins and intensifies through the day', { size: 15, anchor: 'end', fill: C.muted, italic: true });
  const y2 = yb + 52;
  const r = row(y2, [
    { kicker: 'THE MOTIF', title: 'Absent warmth', body: 'cold, thin light against a missing fire', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'FUNCTION', title: 'Makes an emotional state visible', body: "characterises the room and Mr Alder's isolation; prepares a story about loneliness" },
  ], { card: { size: 16, tsize: 19 } });
  b += r.s;
  add('05-alder-light-motif',
    svg(900, y2 + r.h + 30, 'Worked example: a motif of cold light', b),
    'Four moments in the schoolroom. Morning light is thin and white like milk; at noon it lies like ice; by three it has thinned further; at dismissal Mr Alder lets go of "a last warm coin", reversing the feeling. The motif is absent warmth, and it makes his isolation visible.',
    'Thin, cold light recurs until the last image shows what warmth Mr Alder had.',
    '## Worked example 1: a motif built from images');
}

// 06 The marsh as a symbolic setting
{
  let b = '';
  const yM = 110, H = 260;
  b += `<rect x="30" y="${yM}" width="300" height="${H}" rx="14" fill="#e3e8d6" stroke="${C.panelEdge}" stroke-width="2.5"/>`;
  b += `<rect x="330" y="${yM}" width="540" height="${H}" rx="14" fill="${C.teal}" opacity="0.55"/>`;
  const reeds = [[360, 60], [400, 40], [360, 160], [395, 190], [740, 70], [790, 90], [830, 120], [760, 140], [820, 175], [370, 250], [430, 252], [500, 250], [560, 252], [620, 250], [690, 252], [750, 250], [810, 252]];
  for (const [x, y0] of reeds) { const y = yM + y0 - 20; b += path(`M${x},${y + 24} l-4,-24 M${x},${y + 24} l5,-20`, { stroke: C.grass, w: 2.5 }); }
  [0, 1, 2].forEach((i) => { const x = 70 + i * 80; b += `<rect x="${x}" y="${yM + 60}" width="54" height="40" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/><path d="M${x - 4},${yM + 60} L${x + 27},${yM + 38} L${x + 58},${yM + 60} Z" fill="${C.rust}" stroke="${C.ink}" stroke-width="2"/>`; });
  b += T(180, yM + 140, 'SALTBY', { size: 20, weight: 700, anchor: 'middle' });
  b += T(180, yM + 168, 'nobody speaks of the marsh,', { size: 15, anchor: 'middle', italic: true }) + T(180, yM + 188, 'everybody knows its depth', { size: 15, anchor: 'middle', italic: true });
  b += T(180, yM + 222, 'mothers: "the marsh was patient"', { size: 15, anchor: 'middle', italic: true, fill: C.tealDark, weight: 600 });
  for (let y = yM + 10; y < yM + H - 10; y += 26) b += `<line x1="330" y1="${y}" x2="330" y2="${y + 16}" stroke="${C.ink}" stroke-width="5"/>`;
  b += T(330, yM + H + 24, 'the last fence: a boundary', { size: 15, anchor: 'middle', weight: 700 });
  b += `<circle cx="470" cy="${yM + 110}" r="14" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/><path d="M450,${yM + 152} Q470,${yM + 120} 490,${yM + 152} Z" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
  b += arrow(280, yM + 130, 444, yM + 130, { w: 3.5, dash: '8 6' });
  b += T(510, yM + 112, 'Joss, "good boots in his hand"', { size: 16, weight: 700 }) + T(510, yM + 136, 'on the evening of the fair', { size: 15, fill: C.ink });
  b += T(600, yM + 210, 'reeds close "like a long exhaled breath"', { size: 16, italic: true, weight: 600, anchor: 'middle' });
  b += T(840, yM + 40, 'THE MARSH', { size: 20, weight: 700, anchor: 'end', fill: C.tealDark });
  let y = yM + H + 50;
  const r = row(y, [
    { kicker: 'COMMON ASSOCIATIONS', body: 'decay, danger, the edge between solid ground and dissolution' },
    { kicker: 'ADDED BY THIS TEXT', body: 'the fence as boundary, a shared taboo, "patient" as an inevitable reckoning', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { card: { size: 16 } });
  b += r.s; y += r.h + 16;
  const c = card(30, y, 840, { kicker: 'A READING', body: 'The marsh stands for what the community will not name: fear, death, or the consequences of leaving its rules. Joss\'s walk crosses that boundary.', size: 17, bfill: C.ink, fill: C.tealLight, edge: C.tealDark });
  b += c.s;
  add('06-marsh-symbolic-setting',
    svg(900, y + c.h + 30, 'Worked example: the marsh beyond the fence', b),
    'A map of Saltby, a fence, and the marsh beyond. The villagers never speak of the marsh yet know its depth, and mothers call it patient. Joss crosses the fence barefoot, carrying his good boots, and the reeds close like an exhaled breath. The marsh can be read as what the village will not name.',
    'The fence turns Joss\'s walk into a crossing of what the village cannot say.',
    '## Worked example 2: a setting that becomes symbolic');
}

// 07 Strong claims: evidence + idea + function
{
  let b = '';
  const cols = [{ w: 210, head: 'Weak claim' }, { w: 210, head: 'Evidence' }, { w: 200, head: 'Idea' }, { w: 220, head: 'Function' }];
  const tb = table(30, 110, cols, [
    ['"The author uses imagery."', 'the repeated images of thin, cold light', 'lack of warmth', 'makes the schoolroom\'s lack of warmth visible'],
    ['"The marsh is a symbol of death."', "the village's silence: unspoken yet universally known", 'the unsaid', 'marks a boundary around what the village cannot say'],
    ['"The house symbolises the family."', 'the crack in the wall running down to the tarn', 'decay', "links the building's decay to the family's end"],
  ], { size: 16, boldFirst: false, italicCols: [0], colFill: [C.rust, C.ink, C.ink, C.ink], rowFill: [] });
  b += tb.s;
  const y = 110 + tb.h + 24;
  b += `<rect x="30" y="${y}" width="840" height="64" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
  b += T(450, y + 39, 'Strong claim = evidence + idea + function', { size: 20, weight: 700, anchor: 'middle' });
  add('07-evidence-idea-function',
    svg(900, y + 94, 'Turning weak claims into strong ones', b),
    'Three weak claims about imagery, the marsh and the house, each rebuilt from three parts: evidence such as the repeated cold light, the village\'s silence or the crack in the wall; an idea such as lack of warmth, the unsaid or decay; and a function such as making something visible or marking a boundary.',
    'Every strong claim combines evidence, an idea and a function.',
    '## Weak and strong claims side by side');
}
