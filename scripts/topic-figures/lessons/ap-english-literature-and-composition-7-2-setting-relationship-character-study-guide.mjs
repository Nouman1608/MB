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

export const slug = 'ap-english-literature-and-composition-7-2-setting-relationship-character-study-guide';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// 01 Three jobs of setting
{
  let b = '';
  b += card(200, 110, 500, { title: 'Setting', body: 'depicts a time and place, and conveys values', align: 'middle', tsize: 24, fill: C.cream, edge: C.olive }).s;
  const yR = 270;
  [0, 1, 2].forEach((i) => { b += arrow(450, 200, 30 + i * 288 + 132, yR - 8, { w: 3.5 }); });
  const r = row(yR, [
    { kicker: '1  CONVEYS VALUES', title: 'What the place values, and what it costs', body: ['crowded boarding house: thrift, noise, loss of privacy', 'empty shore: exposure, a chance for reflection'], bullets: true },
    { kicker: '2  MARKS CHANGE', title: 'A change of setting', body: 'may suggest other movements, changes or shifts in the narrative' },
    { kicker: '3  RELATES TO CHARACTER', title: 'How characters interact with surroundings', body: 'gives insight into the characters and the settings they inhabit', fill: C.tealLight, edge: C.tealDark },
  ], { card: { size: 16, tsize: 18 } });
  b += r.s;
  add('01-three-jobs-of-setting',
    svg(900, yR + r.h + 30, 'More than a backdrop', b),
    'Setting depicts a time and place and conveys values. Three branches: it conveys values, as a crowded boarding house suggests thrift and lost privacy; it marks change when the setting shifts; and the way characters interact with it reveals both them and the place.',
    'A setting conveys values, marks change and reveals character.',
    '## More than a backdrop');
}

// 02 Four-column grid as a flow
{
  let b = '';
  const heads = ['Detail', 'What it depicts', 'What it suggests or values', 'How the character relates'];
  const xs = [30, 245, 460, 675], w = 195;
  heads.forEach((h, j) => {
    b += `<rect x="${xs[j]}" y="110" width="${w}" height="54" rx="10" fill="${C.ink}"/>` + para(xs[j] + w / 2, 132 - (wrap(h, w - 20, 17, 700).length - 1) * 10 + 4, h, w - 20, { size: 17, weight: 700, anchor: 'middle', fill: '#ffffff' }).s;
    if (j < 3) b += arrow(xs[j] + w + 2, 137, xs[j + 1] - 2, 137, { w: 3 });
  });
  const rowsD = [
    ['Sensory', 'sound, smell, light, space', 'The literal place', 'Feelings, rules or priorities attached to it', 'Fits, resists, avoids, is trapped, escapes'],
    ['Social', 'who is there, what they do', 'The community, or lack of one', 'Norms and expectations', 'Included, excluded, watched'],
    ['Temporal', 'season, hour, era', 'The time', 'Mood, stage of life, pressure of time', 'Rushed, delayed, out of step'],
    ['Changes', 'in the details', 'The movement of the story', 'A turning point or shift of attitude', "A change in the character's perception"],
  ];
  let y = 180;
  rowsD.forEach(([k, sub, a, c, d], i) => {
    const hs = [a, c, d].map((s) => para(0, 0, s, w - 28, { size: 16 }).h);
    const h = Math.max(...hs, 46) + 30;
    b += `<rect x="30" y="${y}" width="${w}" height="${h}" rx="10" fill="${i === 3 ? C.cream : C.tealLight}" stroke="${i === 3 ? C.olive : C.tealDark}" stroke-width="2"/>`;
    b += T(46, y + 30, k, { size: 18, weight: 700 }) + para(46, y + 54, sub, w - 30, { size: 15, fill: C.muted }).s;
    [a, c, d].forEach((s, j) => {
      const x = xs[j + 1];
      b += `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="#ffffff" stroke="${C.panelEdge}" stroke-width="2"/>`;
      b += para(x + 14, y + (h - hs[j]) / 2 + 16, s, w - 28, { size: 16 }).s;
    });
    y += h + 10;
  });
  add('02-setting-grid',
    svg(900, y + 20, 'Reading a setting: detail to character', b),
    'A four-column grid read left to right. Sensory, social and temporal details, and changes in the details, each lead to what they depict, what they suggest or value, and how the character relates to them, for example fitting, resisting, being excluded or feeling rushed.',
    'Move from each kind of detail to what it depicts, what it values and how the character relates to it.',
    '## Reading a setting: a four-column grid');
}

// 03 Contrasted settings
{
  let b = '';
  b += panel(30, 110, 300, 300, C.tealLight, C.tealDark) + panel(570, 110, 300, 300, C.cream, C.olive);
  b += T(180, 150, 'SETTING A', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(720, 150, 'SETTING B', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  const pairs = [['city', 'country'], ['house', 'street'], ['home', 'exile'], ['a garden', 'the lane below']];
  pairs.forEach(([a, c], i) => {
    const y = 190 + i * 54;
    b += chip(65, y, 230, 42, a, { fill: '#ffffff', edge: C.tealDark, size: 17, weight: 600 }) + chip(605, y, 230, 42, c, { fill: '#ffffff', edge: C.olive, size: 17, weight: 600 });
    b += `<line x1="330" y1="${y + 21}" x2="570" y2="${y + 21}" stroke="${C.panelEdge}" stroke-width="2" stroke-dasharray="5 6"/>`;
  });
  const cx = 450, cy = 260;
  b += `<circle cx="${cx}" cy="${cy - 30}" r="24" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/><path d="M${cx - 34},${cy + 34} Q${cx},${cy - 18} ${cx + 34},${cy + 34} Z" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
  b += arrow(cx - 42, cy + 6, 340, cy + 6, { w: 4, color: C.tealDark, marker: 'ahT' }) + arrow(cx + 42, cy + 6, 560, cy + 6, { w: 4, color: C.olive, marker: 'ahO' });
  b += T(cx, cy + 66, 'a character', { size: 17, weight: 700, anchor: 'middle' }) + T(cx, cy + 88, 'caught between', { size: 17, weight: 700, anchor: 'middle' });
  const yV = 440;
  b += T(450, yV, 'The contrast can establish a conflict of values', { size: 20, weight: 700, anchor: 'middle' });
  [['security', 'freedom'], ['comfort', 'conscience'], ['privacy', 'belonging']].forEach(([a, c], i) => {
    const x = 30 + i * 288;
    b += `<rect x="${x}" y="${yV + 20}" width="264" height="60" rx="12" fill="#ffffff" stroke="${C.panelEdge}" stroke-width="2.5"/>`;
    b += T(x + 132, yV + 57, `${a}  ⟷  ${c}`, { size: 19, weight: 700, anchor: 'middle' });
  });
  add('03-contrasted-settings',
    svg(900, yV + 110, 'Two settings, one conflict', b),
    'A character stands between two contrasted settings, pulled towards each: city and country, house and street, home and exile, a garden and the lane below. Such contrasts can set up conflicts of values: security against freedom, comfort against conscience, privacy against belonging.',
    'A character caught between two settings is a character in conflict.',
    '## Contrasted settings');
}

// 04 Four questions about behaviour in a setting
{
  let b = '';
  const icons = [
    (x, y) => `<ellipse cx="${x}" cy="${y}" rx="28" ry="16" fill="#ffffff" stroke="${C.ink}" stroke-width="3"/><circle cx="${x}" cy="${y}" r="8" fill="${C.tealDark}"/>`,
    (x, y) => `<path d="M${x - 16},${y + 20} L${x - 16},${y - 6} Q${x - 16},${y - 12} ${x - 10},${y - 12} L${x - 10},${y - 22} Q${x - 4},${y - 28} ${x + 2},${y - 22} L${x + 2},${y - 10} L${x + 14},${y - 8} Q${x + 20},${y - 6} ${x + 18},${y + 2} L${x + 12},${y + 20} Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`,
    (x, y) => `<path d="M${x - 28},${y - 18} h56 a8,8 0 0 1 8,8 v20 a8,8 0 0 1 -8,8 h-32 l-12,12 v-12 h-12 a8,8 0 0 1 -8,-8 v-20 a8,8 0 0 1 8,-8 z" fill="#ffffff" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>` + T(x, y + 4, '"..."', { size: 16, weight: 700, anchor: 'middle' }),
    (x, y) => `<rect x="${x - 30}" y="${y - 14}" width="22" height="28" rx="4" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3"/>` + arrow(x - 4, y, x + 6, y, { w: 3 }) + `<rect x="${x + 10}" y="${y - 14}" width="22" height="28" rx="4" fill="${C.cream}" stroke="${C.ink}" stroke-width="3"/>`,
  ];
  const qs = [
    ['What do they notice?', 'a dripping tap, the sky, the neighbours'],
    ['What do they do?', 'smooth a dress, avoid a corridor, prop a window open'],
    ['What do they call it?', 'the words they choose for the place'],
    ['What changes about them as the setting changes?', ''],
  ];
  qs.forEach(([q, ex], i) => {
    const x = 30 + (i % 2) * 429, y = 110 + Math.floor(i / 2) * 170;
    b += panel(x, y, 411, 154) + `<circle cx="${x + 56}" cy="${y + 77}" r="40" fill="${C.bg}" stroke="${C.panelEdge}" stroke-width="2"/>` + icons[i](x + 56, y + 77);
    const qh = para(0, 0, q, 280, { size: 19, weight: 700 }).h, eh = ex ? para(0, 0, ex, 280, { size: 16, italic: true }).h + 8 : 0;
    const ty = y + (154 - qh - eh) / 2 + 18;
    b += para(x + 112, ty, q, 280, { size: 19, weight: 700 }).s;
    if (ex) b += para(x + 112, ty + qh + 4, ex, 280, { size: 16, italic: true, fill: C.muted }).s;
  });
  const y = 110 + 2 * 170;
  b += `<rect x="30" y="${y}" width="840" height="64" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
  b += T(450, y + 39, 'Behaviour in a place reveals an attitude to it, and develops the character', { size: 18, weight: 700, anchor: 'middle' });
  add('04-behaviour-in-a-setting',
    svg(900, y + 94, 'How characters behave in a setting', b),
    'Four questions to ask: what do characters notice, such as a dripping tap; what do they do, such as smoothing a dress or propping a window open; what do they call the place; and what changes about them as the setting changes.',
    'What a character notices, does and calls a place reveals an attitude to it.',
    '## How characters behave in a setting');
}

// 05 Three classic openings
{
  const tb = table(30, 110, [
    { w: 180, head: 'Story' }, { w: 230, head: 'Setting' }, { w: 220, head: 'Values it conveys' }, { w: 210, head: 'The character in it' },
  ], [
    ['The Open Boat (Crane)', '"None of them knew the colour of the sky." The sea and a dinghy', 'Nature is indifferent; the men are small against it', 'Absorbed in survival, watching the waves'],
    ['To Build a Fire (London)', 'A bitterly cold, grey Yukon morning', 'A place that does not allow error', 'Confident, unwilling to heed warning'],
    ['The Garden Party (Mansfield)', '"And after all the weather was ideal." A sunny garden; poor cottages in the lane below', 'Comfort against compassion', 'A young woman who passes between them'],
  ], { size: 16 });
  add('05-classic-openings',
    svg(900, 110 + tb.h + 30, 'Setting in three stories', tb.s),
    'Table of three stories. In The Open Boat the indifferent sea makes the men small; in To Build a Fire the Yukon cold allows no error and the man ignores warnings; in The Garden Party a sunny garden is set against poor cottages, a conflict between comfort and compassion.',
    'Each opening uses setting to convey values before the character acts.',
    '## Public-domain examples to learn from');
}

// 06 Rosa: confinement against remembered space
{
  let b = '';
  const yP = 110, H = 300;
  b += panel(30, yP, 411, H) + panel(459, yP, 411, H, C.tealLight, C.tealDark);
  b += T(50, yP + 36, 'Number Nine, Cutler\'s Row', { size: 20, weight: 700 }) + T(50, yP + 60, 'the lodging: confinement', { size: 16, fill: C.muted });
  // window onto brick wall
  const wx = 60, wy = yP + 80;
  b += `<rect x="${wx}" y="${wy}" width="120" height="140" fill="${C.rust}" opacity="0.85" stroke="${C.ink}" stroke-width="3"/>`;
  for (let r = 0; r < 7; r++) for (let c = 0; c < 5; c++) { const ox = (r % 2) * 15; b += `<rect x="${wx + c * 30 - ox}" y="${wy + r * 20}" width="30" height="20" fill="none" stroke="${C.cream}" stroke-width="1.5" clip-path="url(#cw)"/>`; }
  b += `<clipPath id="cw"><rect x="${wx}" y="${wy}" width="120" height="140"/></clipPath>`;
  b += `<rect x="${wx - 6}" y="${wy - 6}" width="132" height="152" fill="none" stroke="${C.ink}" stroke-width="6"/><line x1="${wx + 60}" y1="${wy}" x2="${wx + 60}" y2="${wy + 140}" stroke="${C.ink}" stroke-width="4"/>`;
  b += T(wx + 60, wy + 168, 'brick wall "a yard off"', { size: 15, anchor: 'middle', italic: true, weight: 600 });
  ['"narrow hall"', 'stairs for "one person and a half"', 'a cough through "the thin wall"', '"boiled cabbage and wet wool"', '"The front\'s let"'].forEach((s, i) => { b += para(210, yP + 98 + i * 38, s, 215, { size: 15, italic: true, bullet: true }).s; });
  b += T(479, yP + 36, "Her father's field", { size: 20, weight: 700 }) + T(479, yP + 60, 'the memory: space and freedom', { size: 16, fill: C.tealDark });
  const fy = yP + 220;
  b += `<path d="M479,${fy} Q620,${fy - 30} 850,${fy - 10} L850,${fy + 60} L479,${fy + 60} Z" fill="${C.grass}" opacity="0.55"/>`;
  b += `<rect x="760" y="${fy - 74}" width="70" height="60" fill="${C.rust}" stroke="${C.ink}" stroke-width="3"/><path d="M752,${fy - 74} L795,${fy - 108} L838,${fy - 74} Z" fill="${C.rust}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  [[540, 130], [600, 110], [655, 145], [700, 115], [580, 160]].forEach(([x, y]) => { b += path(`M${x - 12},${yP + y - 6} Q${x - 6},${yP + y - 2} ${x},${yP + y + 4} Q${x + 6},${yP + y - 2} ${x + 12},${yP + y - 6}`, { w: 3 }); });
  b += T(600, fy + 40, 'she once "counted the swallows"', { size: 15, anchor: 'middle', italic: true, weight: 600 });
  b += `<rect x="410" y="${yP + H / 2 - 22}" width="80" height="44" rx="22" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + T(450, yP + H / 2 + 7, 'versus', { size: 16, weight: 700, anchor: 'middle' });
  let y = yP + H + 20;
  const r = row(y, [
    { kicker: "ROSA'S BEHAVIOUR", body: ['"held her breath" until the smell "had made its peace with her"', 'smooths each dress "as if it might otherwise take offence"'], bullets: true, size: 16 },
    { kicker: 'CONFLICT OF VALUES', title: 'Freedom and space against necessity and confinement', body: 'Her endurance, longing and dignity are measured by the contrast', size: 16, tsize: 18, fill: C.cream, edge: C.olive, kfill: C.olive },
  ], {});
  b += r.s;
  add('06-rosa-lodging-and-field',
    svg(900, y + r.h + 30, 'Worked example: Rosa\'s back room', b),
    'Left: Rosa\'s lodging, with a window onto a brick wall a yard off, a narrow hall, thin walls and the smell of boiled cabbage. Right: her memory of her father\'s field, where she counted swallows. Below: she holds her breath and smooths each dress, and the contrast sets freedom against confinement.',
    'The brick wall and the remembered field measure what Rosa has lost.',
    '## Worked example 1: setting that conveys values and tests a character');
}

// 07 Tomas: kitchen to shore
{
  let b = '';
  const yP = 110, H = 270;
  const sc = (x, title, sub, lines, f, e) => panel(x, yP, 360, H, f, e) + T(x + 20, yP + 38, title, { size: 22, weight: 700 }) + T(x + 20, yP + 62, sub, { size: 16, fill: C.muted, weight: 600 }) +
    lines.map((s, i) => para(x + 20, yP + 100 + i * 40, s, 320, { size: 16, italic: true, bullet: true }).s).join('');
  b += sc(30, 'The kitchen', 'noisy, crowded, busy', ['"a roar of pans and gossip"', 'the kettle\'s "long argument with the fire"', 'constant demands and talk'], C.panel, C.panelEdge);
  b += sc(510, 'The shore', 'quiet, exposed', ['"the tide had gone far out"', 'boats "leaning on their sides"', 'a gull: "one note, over and over"'], C.tealLight, C.tealDark);
  // noise bars
  [0, 1, 2, 3, 4, 5, 6].forEach((i) => { const h = [40, 62, 50, 70, 46, 66, 54][i]; b += `<rect x="${60 + i * 22}" y="${yP + H - 20 - h}" width="14" height="${h}" rx="3" fill="${C.rust}" opacity="0.8"/>`; });
  b += `<rect x="540" y="${yP + H - 34}" width="14" height="14" rx="3" fill="${C.tealDark}"/>`;
  b += T(220, yP + H - 26, 'noise', { size: 15, fill: C.muted }) + T(566, yP + H - 22, 'one note', { size: 15, fill: C.muted });
  // boats
  b += `<path d="M700,${yP + H - 30} Q740,${yP + H - 24} 770,${yP + H - 58} L760,${yP + H - 64} Q735,${yP + H - 40} 700,${yP + H - 40} Z" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += `<path d="M780,${yP + H - 30} Q815,${yP + H - 22} 845,${yP + H - 50} L836,${yP + H - 58} Q812,${yP + H - 36} 780,${yP + H - 40} Z" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += `<line x1="690" y1="${yP + H - 28}" x2="855" y2="${yP + H - 28}" stroke="${C.olive}" stroke-width="3"/>`;
  b += arrow(398, yP + 110, 502, yP + 110, { w: 5 });
  b += T(450, yP + 90, '"slipped out"', { size: 16, anchor: 'middle', italic: true, weight: 700 });
  b += tl(450, yP + 146, ['noise "closed', 'behind him', 'like water"'], { size: 15, anchor: 'middle', italic: true, fill: C.muted }, 19);
  let y = yP + H + 24;
  const r = row(y, [
    { kicker: 'TOMAS BEFORE', title: 'A week of obligation', fill: C.panel },
    { kicker: 'TOMAS AFTER', title: 'For the first time, "did not know what he ought to be doing next"', fill: C.tealLight, edge: C.tealDark },
  ], { arrows: true, gap: 60, card: { tsize: 18 } });
  b += r.s;
  y += r.h + 20;
  b += `<rect x="30" y="${y}" width="840" height="64" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
  b += T(450, y + 39, 'The change of setting marks a turn from outward duty to inward reflection', { size: 18, weight: 700, anchor: 'middle' });
  add('07-tomas-kitchen-to-shore',
    svg(900, y + 94, 'Worked example: from kitchen to shore', b),
    'Two scenes joined by an arrow. The kitchen is a roar of pans, gossip and the kettle\'s argument with the fire. Tomas slips out to a quiet shore where the tide is far out, boats lean on their sides and a gull calls one note. He moves from a week of obligation to not knowing what to do next.',
    'Moving from kitchen to shore marks Tomas\'s turn from duty to reflection.',
    '## Worked example 2: a change of setting that marks a shift');
}
