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

export const slug = 'ap-english-literature-and-composition-7-8-selecting-relevant-sufficient-evidence-study-guide';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// 01 Selection funnel
{
  let b = '';
  b += `<path d="M60,130 L840,130 L560,330 L560,400 L340,400 L340,330 Z" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="3" stroke-linejoin="round"/>`;
  b += T(450, 162, 'Every detail the story offers', { size: 19, weight: 700, anchor: 'middle' });
  const pts = [[150, 200], [210, 182], [280, 205], [350, 190], [420, 215], [500, 195], [560, 210], [640, 190], [720, 200], [260, 245], [340, 255], [430, 262], [520, 250], [600, 240], [390, 300], [470, 296]];
  pts.forEach(([x, y]) => { b += `<rect x="${x - 15}" y="${y - 9}" width="30" height="18" rx="5" fill="#ffffff" stroke="${C.tealDark}" stroke-width="2"/>`; });
  b += T(450, 360, 'THE AUDIT', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += arrow(450, 404, 450, 446, { w: 4 });
  [400, 450, 500].forEach((x) => { b += `<rect x="${x - 20}" y="455" width="40" height="24" rx="6" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`; });
  b += T(450, 510, 'the details you use', { size: 18, weight: 700, anchor: 'middle' });
  b += T(450, 534, 'tell the reader what you think matters', { size: 16, anchor: 'middle', fill: C.muted });
  // left-out pile
  b += arrow(720, 260, 790, 330, { w: 3, dash: '7 6' });
  [[770, 360], [810, 372], [790, 392]].forEach(([x, y]) => { b += `<rect x="${x - 15}" y="${y - 9}" width="30" height="18" rx="5" fill="#ffffff" stroke="${C.rust}" stroke-width="2" stroke-dasharray="4 3"/>`; });
  b += para(860, 430, 'left out: may be what would complicate your case', 200, { size: 15, anchor: 'end', fill: C.rust, weight: 600 }).s.replace(/text-anchor="end"/g, 'text-anchor="end"');
  const y = 570;
  const r = row(y, [
    { kicker: 'EFFECTIVE', body: 'when commentary explains its relationship to the claim' },
    { kicker: 'SUFFICIENT', body: 'when its quantity and quality give apt support for the line of reasoning', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { card: { size: 17 } });
  b += r.s;
  add('01-evidence-is-chosen',
    svg(900, y + r.h + 30, 'Evidence is chosen, not found', b),
    'A funnel: the many details a story offers pass through an audit, and only a few chosen details come out, showing what the writer thinks matters. Some details are left out, and they may be the ones that would complicate the case. Evidence is effective when commentary explains it and sufficient when its quantity and quality support the reasoning.',
    'Selecting evidence is already part of the argument.',
    '## Evidence is chosen, not found');
}

// 02 The five-question audit
{
  let b = '';
  const qs = [
    ['Relevant?', 'Does it bear on the claim, or only on the topic?', 'Interesting but irrelevant evidence distracts'],
    ['What job does it do?', 'Illustrate, clarify, exemplify, associate, amplify or qualify?', 'A piece with no job is decoration'],
    ['Where is it?', 'Beginning, turning point, ending?', 'Several points show a pattern'],
    ['Does it complicate?', 'Does it conflict with the claim in any way?', 'Honest handling of counter-evidence strengthens the argument'],
    ['Does the set cover the claim?', 'Is every part of the claim supported?', 'Sufficiency depends on coverage, not count'],
  ];
  b += T(110, 124, 'CANDIDATE DETAIL', { size: 15, weight: 700, anchor: 'middle', fill: C.muted });
  b += `<rect x="80" y="134" width="60" height="30" rx="6" fill="#ffffff" stroke="${C.tealDark}" stroke-width="2.5"/>`;
  let y = 182;
  b += arrow(110, 166, 110, y - 4, { w: 3 });
  qs.forEach(([q, ask, why], i) => {
    const h = Math.max(86, 66 + para(0, 0, ask, 400, { size: 16 }).h, 46 + para(0, 0, why, 290, { size: 16 }).h);
    const f = i === 4 ? C.tealLight : C.panel, e = i === 4 ? C.tealDark : C.panelEdge;
    b += `<rect x="30" y="${y}" width="840" height="${h}" rx="14" fill="${f}" stroke="${e}" stroke-width="2.5"/>`;
    b += badge(70, y + h / 2, 22, String(i + 1), i === 4 ? C.mustard : C.cream);
    b += T(110, y + 36, q, { size: 20, weight: 700 }) + para(110, y + 62, ask, 400, { size: 16, fill: C.muted }).s;
    b += `<line x1="540" y1="${y + 16}" x2="540" y2="${y + h - 16}" stroke="${C.panelEdge}" stroke-width="2"/>`;
    b += T(560, y + 30, 'WHY IT MATTERS', { size: 15, weight: 700, fill: C.tealDark });
    b += para(560, y + 54, why, 290, { size: 16 }).s;
    y += h;
    if (i < 4) { b += arrow(70, y + 2, 70, y + 18, { w: 3 }); y += 22; }
  });
  add('02-five-question-audit',
    svg(900, y + 30, 'The evidence audit', b),
    'Five questions asked of each candidate detail: is it relevant to the claim; what job does it do; where in the story is it; does it complicate the claim; and does the whole set cover every part of the claim. Each has a reason, such as "sufficiency depends on coverage, not count".',
    'Audit each detail for relevance, job, position and complication, then check coverage.',
    '## The evidence audit');
}

// 03 Balance: breadth of claim vs amount of evidence
{
  let b = '';
  const x0 = 200, y0 = 140, s = 260;
  const cells = [
    [0, 0, 'Thin', 'a broad claim on a single detail', '#ffffff', C.rust],
    [1, 0, 'Apt', 'a broad or pattern claim with evidence from several places', C.tealLight, C.tealDark],
    [0, 1, 'Apt', 'a narrow point: one quotation may be enough', C.tealLight, C.tealDark],
    [1, 1, 'Repetitive', 'many details for a narrow claim', '#ffffff', C.olive],
  ];
  cells.forEach(([cx, cy, ti, d, f, e]) => {
    const x = x0 + cx * (s + 14), y = y0 + cy * (s * 0.62 + 14), h = s * 0.62;
    b += `<rect x="${x}" y="${y}" width="${s}" height="${h}" rx="14" fill="${f}" stroke="${e}" stroke-width="3"/>`;
    b += T(x + s / 2, y + 48, ti, { size: 24, weight: 700, anchor: 'middle', fill: e });
    b += para(x + s / 2, y + 84, d, s - 40, { size: 16, anchor: 'middle' }).s;
  });
  const h2 = 2 * (s * 0.62) + 14;
  b += T(x0 - 20, y0 + s * 0.31 + 6, 'Broad claim', { size: 18, weight: 700, anchor: 'end' }) + T(x0 - 20, y0 + s * 0.31 + 28, 'or a pattern', { size: 16, anchor: 'end', fill: C.muted });
  b += T(x0 - 20, y0 + s * 0.62 + 14 + s * 0.31 + 6, 'Narrow claim', { size: 18, weight: 700, anchor: 'end' });
  b += T(x0 + s / 2, y0 + h2 + 34, 'One detail', { size: 18, weight: 700, anchor: 'middle' });
  b += T(x0 + s * 1.5 + 14, y0 + h2 + 34, 'Many details', { size: 18, weight: 700, anchor: 'middle' });
  b += arrow(x0, y0 + h2 + 50, x0 + 2 * s + 14, y0 + h2 + 50, { w: 3, color: C.muted });
  b += T(x0 + s + 7, y0 + h2 + 76, 'quantity of evidence', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  const y = y0 + h2 + 100;
  const c = card(30, y, 840, { kicker: 'QUALITY', body: 'Specific words and details that carry the meaning, not plot summary; short, embedded quotations; details that can bear a close reading.', size: 17, bfill: C.ink, fill: C.cream, edge: C.olive, kfill: C.olive });
  b += c.s;
  add('03-quality-and-quantity',
    svg(900, Math.round(y + c.h + 30), 'Sufficient: quality and quantity', b),
    'A two-by-two grid. A broad claim or pattern with one detail is thin; with evidence from several places it is apt. A narrow point with one quotation can be apt; with many details it is repetitive. Below, quality means specific words, short embedded quotations and details that bear close reading.',
    'Match the amount of evidence to the size of the claim, and choose details that carry meaning.',
    '## Quality as well as quantity');
}

// 04 Recursive loop
{
  let b = '';
  const yc = 260;
  b += card(80, yc - 70, 270, { title: 'Claim', body: 'what you argue', align: 'middle', minH: 140, vcenter: true, tsize: 24, fill: C.cream, edge: C.olive }).s;
  b += card(550, yc - 70, 270, { title: 'Evidence', body: 'details from the text', align: 'middle', minH: 140, vcenter: true, tsize: 24, fill: C.tealLight, edge: C.tealDark }).s;
  b += path(`M360,${yc - 40} Q450,${yc - 120} 540,${yc - 40}`, { w: 3.5, extra: 'marker-end="url(#ah)"' });
  b += path(`M540,${yc + 40} Q450,${yc + 120} 360,${yc + 40}`, { w: 3.5, extra: 'marker-end="url(#ah)"' });
  b += para(450, yc - 128, 'if the claim opens new questions: look for new evidence', 300, { size: 16, anchor: 'middle', weight: 600, fill: C.tealDark }).s;
  b += para(450, yc + 112, 'if the evidence does not support it: revise the claim', 300, { size: 16, anchor: 'middle', weight: 600, fill: C.olive }).s;
  b += T(450, yc + 6, 'start', { size: 16, anchor: 'middle', fill: C.muted, italic: true }) + T(450, yc + 26, 'at either end', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  add('04-recursive-loop',
    svg(900, yc + 190, 'Claim and evidence: a loop', b),
    'A loop between claim and evidence. You can start at either end. If the claim opens new questions, look for new evidence; if the evidence does not support the claim, revise the claim.',
    'Interpretation goes back and forth between claim and evidence.',
    '## The recursive loop');
}

// 05 Montresor: coverage of a three-part claim
{
  let b = '';
  b += card(30, 110, 840, { kicker: 'CLAIM', body: 'Montresor presents his revenge as justified, but the omissions in his account and the pleasure he takes in the deed undermine his reliability.', size: 17, bfill: C.ink, bweight: 600, fill: C.cream, edge: C.olive, kfill: C.olive }).s;
  const parts = ['1  presents revenge as justified', '2  omits key information', '3  reveals pleasure'];
  const det = [
    ['a', 'opening', '"The thousand injuries..."', [1, 1, 0], true],
    ['b', 'early', '"neither by word nor deed..."', [0, 0, 0], false, 'partly: can qualify'],
    ['c', 'middle', '"...at the thought of his immolation"', [0, 0, 1], true],
    ['d', 'middle', "Fortunato's jester costume", [0, 0, 0], false, 'weakly: irony, not reliability'],
    ['e', 'ending', '"My heart grew sick—on account of the dampness..."', [0, 0, 1], true],
  ];
  const gx = 290, cw = 116, y0 = 240;
  det.forEach(([k, pos, q, cov, use], j) => {
    const x = gx + j * cw;
    b += `<rect x="${x + 4}" y="${y0}" width="${cw - 8}" height="96" rx="10" fill="${use ? C.mustard : '#ffffff'}" stroke="${C.ink}" stroke-width="${use ? 3 : 2}"/>`;
    b += T(x + cw / 2, y0 + 34, `(${k})`, { size: 20, weight: 700, anchor: 'middle' }) + T(x + cw / 2, y0 + 62, pos, { size: 15, anchor: 'middle', fill: C.ink });
    b += T(x + cw / 2, y0 + 84, use ? 'USE' : 'set aside', { size: 15, anchor: 'middle', weight: 700, fill: use ? C.ink : C.muted });
  });
  parts.forEach((p, i) => {
    const y = y0 + 110 + i * 64;
    b += `<rect x="30" y="${y}" width="840" height="56" rx="10" fill="${i % 2 ? C.panel : '#f8faf9'}" stroke="${C.panelEdge}" stroke-width="2"/>`;
    b += T(46, y + 34, p, { size: 17, weight: 700 });
    det.forEach(([, , , cov, use], j) => {
      const x = gx + j * cw + cw / 2;
      if (cov[i]) b += `<circle cx="${x}" cy="${y + 28}" r="16" fill="${C.tealDark}"/>` + path(`M${x - 8},${y + 28} l6,6 l11,-12`, { stroke: '#ffffff', w: 3.5 });
      else b += `<circle cx="${x}" cy="${y + 28}" r="6" fill="${C.panelEdge}"/>`;
    });
  });
  let y = y0 + 110 + 3 * 64 + 16;
  const notes = [
    ['(b)', 'can qualify: he admits his deceit, which makes his silence about the injuries more striking'],
    ['(d)', 'relevant to another argument (irony), not to this claim: leave it out'],
    ['(a) alone', 'covers parts 1 and 2 only: insufficient'],
  ];
  notes.forEach(([k, n]) => { b += T(46, y + 20, k, { size: 16, weight: 700 }) + T(146, y + 20, n, { size: 16, fill: C.muted }); y += 30; });
  y += 10;
  b += `<rect x="30" y="${y}" width="840" height="64" rx="14" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>`;
  b += T(450, y + 39, '(a) + (c) + (e): all three parts, from three positions in the story', { size: 18, weight: 700, anchor: 'middle' });
  add('05-montresor-coverage',
    svg(900, y + 94, 'Worked example: auditing Montresor', b),
    'A coverage grid for a three-part claim about Montresor. Detail (a), from the opening, covers parts 1 and 2; (c), from the middle, and (e), from the ending, cover part 3. Detail (b) can qualify and (d) is set aside. Using (a), (c) and (e) covers every part from three positions.',
    'Sufficiency is coverage: every part of the claim, from more than one place.',
    '## Worked example 1: auditing evidence for a claim');
}

// 06 Mr Pike's scales: revising the claim
{
  let b = '';
  const scale = (cx, tilt, title, who, note, thumb) => {
    const by = 225, half = 120;
    let s = panel(cx - 200, 110, 400, 280);
    s += T(cx, 146, title, { size: 20, weight: 700, anchor: 'middle' }) + T(cx, 170, who, { size: 16, anchor: 'middle', fill: C.muted });
    s += `<rect x="${cx - 8}" y="${by}" width="16" height="90" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5"/><rect x="${cx - 50}" y="${by + 86}" width="100" height="14" rx="4" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += `<line x1="${cx - half}" y1="${by - tilt}" x2="${cx + half}" y2="${by + tilt}" stroke="${C.ink}" stroke-width="6" stroke-linecap="round"/><circle cx="${cx}" cy="${by}" r="8" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
    [[cx - half, by - tilt], [cx + half, by + tilt]].forEach(([px, py], i) => {
      s += `<line x1="${px}" y1="${py}" x2="${px - 30}" y2="${py + 40}" stroke="${C.ink}" stroke-width="2"/><line x1="${px}" y1="${py}" x2="${px + 30}" y2="${py + 40}" stroke="${C.ink}" stroke-width="2"/>`;
      s += `<path d="M${px - 40},${py + 40} Q${px},${py + 66} ${px + 40},${py + 40} Z" fill="${i === 0 ? C.cream : '#ffffff'}" stroke="${C.ink}" stroke-width="2.5"/>`;
    });
    s += T(cx - half - 48, by - tilt + 50, thumb ? 'sugar' : 'tea', { size: 16, anchor: 'end', weight: 700 });
    if (thumb) s += `<ellipse cx="${cx - half + 10}" cy="${by - tilt + 36}" rx="18" ry="11" fill="${C.sand}" stroke="${C.ink}" stroke-width="2.5"/>` + T(cx - half + 40, by - tilt + 30, 'thumb', { size: 15, weight: 700, fill: C.rust });
    s += para(cx, 348, note, 360, { size: 16, anchor: 'middle', italic: true }).s;
    return s;
  };
  b += scale(240, -22, 'Widow Lamb', 'pays in coppers', 'pan "tipped a little in her favour"', false);
  b += scale(660, -22, "Sir Anthony's steward", 'buys for the Hall', 'thumb rests "a moment longer than a thumb needs to"', true);
  let y = 420;
  const r = row(y, [
    { kicker: 'FIRST CLAIM', kfill: C.rust, title: '"Mr Pike is an honest trader."', body: 'Generous is not exact, and the thumb contradicts it', edge: C.rust },
    { kicker: 'REVISED CLAIM', title: 'His scales serve loyalty, not honesty', body: 'He gives to the poor what he takes from the powerful: a selective, in its way moral, fairness', fill: C.tealLight, edge: C.tealDark },
  ], { arrows: true, gap: 50, card: { size: 16, tsize: 18 } });
  b += r.s;
  y += r.h + 20;
  b += `<rect x="30" y="${y}" width="840" height="64" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
  b += T(450, y + 39, 'The evidence did not support the first claim: it changed it', { size: 18, weight: 700, anchor: 'middle' });
  add('06-pike-revising-the-claim',
    svg(900, y + 94, "Worked example: Mr Pike's scales", b),
    'Two scales. For Widow Lamb the pan of tea is tipped a little in her favour; for Sir Anthony\'s steward Pike\'s thumb rests on the sugar-pan, making it seem heavier. The first claim, that Pike is honest, fails; the revised claim says his scales serve loyalty, giving to the poor what they take from the powerful.',
    'When the evidence pushes back, revise the claim to account for all of it.',
    '## Worked example 2: revising a claim when the evidence pushes back');
}

// 07 Stems for introducing evidence
{
  let b = '';
  const st = [
    ['ILLUSTRATE', 'The narrator shows ... when ...', 'The narrator shows his composure when he "said that it was very healthy".'],
    ['EXEMPLIFY', 'One example is ...', 'One example is her repeated deflection, "a dull note from the agent".'],
    ['AMPLIFY', 'This is intensified when ...', 'This is intensified when she holds the letter to the lamp.'],
    ['QUALIFY', 'Yet ... / Although ...', 'Yet the "low voice" suggests that the cheer is partly private encouragement.'],
  ];
  let y = 110;
  st.forEach(([job, stem, ex], i) => {
    const eh = para(0, 0, ex, 366, { size: 16, italic: true }).h, h = Math.max(84, eh + 34);
    b += `<rect x="30" y="${y}" width="170" height="${h}" rx="12" fill="${i === 3 ? C.cream : C.tealLight}" stroke="${i === 3 ? C.olive : C.tealDark}" stroke-width="2.5"/>`;
    b += T(115, y + h / 2 + 6, job, { size: 17, weight: 700, anchor: 'middle' });
    b += arrow(204, y + h / 2, 232, y + h / 2, { w: 3 });
    b += `<rect x="236" y="${y}" width="214" height="${h}" rx="12" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/>`;
    b += para(343, y + h / 2 + 6 - (wrap(stem, 190, 17, 700).length - 1) * 11, stem, 190, { size: 17, weight: 700, anchor: 'middle' }).s;
    b += arrow(454, y + h / 2, 474, y + h / 2, { w: 3 });
    b += `<rect x="478" y="${y}" width="392" height="${h}" rx="12" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2"/>`;
    b += para(492, y + (h - eh) / 2 + 16, ex, 366, { size: 16, italic: true }).s;
    y += h + 12;
  });
  b += T(450, y + 26, 'The stem shows the reader what each piece of evidence is doing', { size: 17, anchor: 'middle', fill: C.muted, italic: true });
  add('07-stems-for-evidence',
    svg(900, y + 52, 'Stems that signal the job', b),
    'Four jobs, each with a stem and an example: illustrate with "The narrator shows ... when ...", exemplify with "One example is ...", amplify with "This is intensified when ...", and qualify with "Yet ..." or "Although ...".',
    'Choose a lead-in that matches the job the evidence is doing.',
    '## Stems for introducing evidence');
}
