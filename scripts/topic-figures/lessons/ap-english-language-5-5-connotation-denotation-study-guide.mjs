import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

// ---------- local helpers (AP English Language figures) ----------
const _CH = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~’‘“”—–…é·•→×✓✗";
const _W = {"r":[281,288,466,633,642,982,644,300,365,365,501,662,288,460,288,360,631,407,610,618,646,608,620,566,619,620,288,302,662,662,662,511,966,690,654,730,722,601,590,746,743,269,571,672,565,903,753,765,639,765,644,642,646,744,690,985,682,679,629,365,360,365,471,456,323,562,612,571,612,583,370,613,591,242,242,549,242,876,591,600,612,612,376,528,327,591,562,818,546,562,552,426,333,426,662,261,261,440,440,1000,500,864,583,288,562,954,662,884,886],"b":[237,338,552,649,655,1016,672,339,377,377,559,679,334,468,334,388,674,431,630,646,676,639,649,582,651,649,334,343,679,679,679,560,1016,747,662,740,722,607,587,750,747,281,584,719,565,932,762,771,648,777,657,655,667,732,747,1038,738,731,664,377,388,377,487,476,365,581,630,588,630,596,398,632,623,271,271,580,271,913,623,613,630,630,407,560,366,623,600,850,580,602,573,469,372,469,679,311,311,540,532,1000,500,1002,596,334,474,954,679,882,883]};
const _M = { r: {}, b: {} };
for (const k of ['r', 'b']) [..._CH].forEach((c, i) => { _M[k][c] = _W[k][i]; });
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
// estimated rendered width of plain text
const tw = (s, size = 18, bold = false) => { const m = _M[bold ? 'b' : 'r']; let n = 0; for (const c of String(s)) n += m[c] ?? 620; return (n / 1000) * size * 1.03; };
// rich text: **bold**  __italic__  {{teal bold}}  [[rust bold]]  ((olive bold))
function words(s) {
  const segs = []; let b = false, it = false, c = null, buf = '';
  const push = () => { if (buf) { segs.push({ s: buf, b, it, c }); buf = ''; } };
  for (let k = 0; k < s.length;) {
    const two = s.slice(k, k + 2);
    if (two === '**') { push(); b = !b; k += 2; continue; }
    if (two === '__') { push(); it = !it; k += 2; continue; }
    if (two === '{{') { push(); c = 'T'; k += 2; continue; }
    if (two === '[[') { push(); c = 'R'; k += 2; continue; }
    if (two === '((') { push(); c = 'O'; k += 2; continue; }
    if (two === '}}' || two === ']]' || two === '))') { push(); c = null; k += 2; continue; }
    buf += s[k]; k++;
  }
  push();
  const out = []; let cur = [];
  for (const g of segs) for (const p of g.s.split(/( )/)) {
    if (p === ' ') { if (cur.length) { out.push(cur); cur = []; } } else if (p) cur.push({ ...g, s: p });
  }
  if (cur.length) out.push(cur);
  return out;
}
const wordW = (wd, size, baseBold) => wd.reduce((a, p) => a + tw(p.s, size, baseBold || p.b || !!p.c), 0);
function wrapRich(s, maxW, size, baseBold) {
  const lines = [];
  for (const para of String(s).split('\n')) {
    const ws = words(para); let line = [], lw = 0; const sp = size * 0.28;
    for (const wd of ws) {
      const w = wordW(wd, size, baseBold);
      if (line.length && lw + sp + w > maxW) { lines.push(line); line = [wd]; lw = w; } else { lw += (line.length ? sp : 0) + w; line.push(wd); }
    }
    lines.push(line);
  }
  return lines;
}
const COL = { T: C.tealDark, R: C.rust, O: C.olive };
function lineSvg(x, y, line, { size, fill, weight, anchor, italic }) {
  let inner = '';
  line.forEach((wd, i) => {
    if (i) inner += ' ';
    for (const p of wd) {
      const a = [];
      if (p.b || p.c) a.push('font-weight="700"');
      if (p.c) a.push(`fill="${COL[p.c]}"`);
      if (p.it) a.push('font-style="italic"');
      inner += a.length ? `<tspan ${a.join(' ')}>${esc(p.s)}</tspan>` : esc(p.s);
    }
  });
  return `<text x="${x}" y="${y}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}"${italic ? ' font-style="italic"' : ''} xml:space="preserve">${inner}</text>`;
}
// Paragraph. y = baseline of first line. Returns {s, h, n}
function P(x, y, s, o = {}) {
  const size = o.size || 18, w = o.w || 800, lh = o.lh || size * 1.32;
  const opts = { size, fill: o.fill || C.ink, weight: o.weight || 400, anchor: o.anchor || 'start', italic: !!o.italic };
  const lines = wrapRich(s, w, size, (o.weight || 400) >= 600);
  return { s: lines.map((ln, i) => lineSvg(x, y + i * lh, ln, opts)).join(''), h: lines.length * lh, n: lines.length };
}
const T = (x, y, s, o = {}) => P(x, y, s, { w: 5000, ...o }).s;
const rect = (x, y, w, h, fill = C.panel, edge = C.panelEdge, rx = 14, sw = 2.5, extra = '') =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}" ${extra}/>`;
// Box with optional heading + body; auto height unless h given. Returns {s,h}
function box(x, y, w, o = {}) {
  const pad = o.pad ?? 18, hs = o.headSize || 20, bs = o.size || 17, align = o.align || 'start';
  const ind = o.indent || 0;
  const tx = align === 'middle' ? x + w / 2 : x + pad + ind;
  const nat = o.vc && o.h ? box(x, y, w, { ...o, h: 0, vc: false }).h : 0;
  let inner = '', cy = y + pad + (o.vc && o.h ? Math.max(0, (o.h - nat) / 2) : 0);
  if (o.head) {
    const hp = P(tx + (o.headIndent || 0), cy + hs * 0.8, o.head, { size: hs, weight: 700, w: w - 2 * pad - ind - (o.headIndent || 0), anchor: align, fill: o.headColor || C.ink });
    inner += hp.s; cy += hp.h + (o.body ? 4 : 0);
  }
  if (o.body) {
    const bp = P(tx, cy + bs * 0.85, o.body, { size: bs, w: w - 2 * pad - ind, anchor: align, fill: o.bodyColor || C.ink, lh: o.lh });
    inner += bp.s; cy += bp.h;
  }
  const h = o.h || (cy - y + pad - 4);
  let band = '';
  if (o.bar) band = `<rect x="${x}" y="${y}" width="10" height="${h}" rx="5" fill="${o.bar}"/>`;
  return { s: rect(x, y, w, h, o.fill || C.panel, o.edge || C.panelEdge, o.rx ?? 14, o.sw ?? 2.5, o.dash ? `stroke-dasharray="${o.dash}"` : '') + band + inner, h };
}
// Row of equal-height boxes. items: array of box options. Returns {s,h,xs,w}
function row(x, y, totalW, gap, items) {
  const n = items.length, w = (totalW - gap * (n - 1)) / n;
  const h = Math.max(...items.map((it) => box(0, 0, it.w || w, it).h));
  const xs = items.map((_, i) => x + i * (w + gap));
  return { s: items.map((it, i) => box(xs[i], y, w, { ...it, h }).s).join(''), h, xs, w };
}
// Stack of full-width boxes with gap. Returns {s,h,ys,hs}
function stack(x, y, w, gap, items) {
  let s = '', cy = y; const ys = [], hs = [];
  for (const it of items) { const b = box(it.x ?? x, cy, it.w || w, it); s += b.s; ys.push(cy); hs.push(b.h); cy += b.h + gap; }
  return { s, h: cy - gap - y, ys, hs };
}
// Chip / pill label centred vertically on cy. Returns {s,w}
function chip(x, cy, text, o = {}) {
  const size = o.size || 16, padX = o.padX ?? 12, h = o.h || size + 14;
  const w = tw(text.replace(/\*\*|__|\{\{|\}\}|\[\[|\]\]|\(\(|\)\)/g, ''), size, true) + 2 * padX;
  const x0 = o.anchor === 'middle' ? x - w / 2 : o.anchor === 'end' ? x - w : x;
  return { s: rect(x0, cy - h / 2, w, h, o.fill || C.cream, o.edge || C.ink, h / 2, o.sw ?? 2) + T(x0 + w / 2, cy + size * 0.36, text, { size, weight: 700, anchor: 'middle', fill: o.color || C.ink }), w };
}
// Table with wrapped cells. cols = widths; rows = array of arrays; first row is header if o.head !== false. Returns {s,h}
function table(x, y, cols, rows, o = {}) {
  const size = o.size || 16, pad = o.pad || 12, W = cols.reduce((a, b) => a + b, 0);
  let s = '', cy = y;
  rows.forEach((r, ri) => {
    const isHead = ri === 0 && o.head !== false;
    const hs = r.map((c, ci) => P(0, 0, c, { size, w: cols[ci] - 2 * pad, weight: isHead ? 700 : 400 }).h);
    const rh = Math.max(...hs) + 2 * pad - 2;
    const fill = isHead ? (o.headFill || C.tealLight) : (o.rowFills && o.rowFills[ri]) || (ri % 2 && o.zebra ? '#f8faf9' : C.panel);
    s += `<rect x="${x}" y="${cy}" width="${W}" height="${rh}" fill="${fill}"/>`;
    let cx = x;
    r.forEach((c, ci) => {
      const cf = o.cellFill && o.cellFill(ri, ci);
      if (cf) s += `<rect x="${cx}" y="${cy}" width="${cols[ci]}" height="${rh}" fill="${cf}"/>`;
      s += P(cx + pad, cy + pad + size * 0.82, c, { size, w: cols[ci] - 2 * pad, weight: isHead || (o.boldFirst && ci === 0) ? 700 : 400 }).s;
      cx += cols[ci];
    });
    if (ri) s += `<line x1="${x}" y1="${cy}" x2="${x + W}" y2="${cy}" stroke="${C.panelEdge}" stroke-width="1.5"/>`;
    cy += rh;
  });
  let cx = x;
  cols.slice(0, -1).forEach((c) => { cx += c; s += `<line x1="${cx}" y1="${y}" x2="${cx}" y2="${cy}" stroke="${C.panelEdge}" stroke-width="1.5"/>`; });
  s += rect(x, y, W, cy - y, 'none', C.ink, 12, 2.5);
  return { s, h: cy - y };
}
// Annotated sentence strip: items [{text, label, fill}] laid left-to-right, wrapping. Returns {s,h}
function chunks(x, y, maxW, items, o = {}) {
  const size = o.size || 18, ls = o.labelSize || 15, gap = o.gap ?? 10, ch = size + 18, rowGap = o.rowGap ?? 22;
  let cx = x, cy = y, s = '', rowH = 0;
  for (const it of items) {
    const tW = tw(it.text, size, false) + 20;
    const labW = it.label ? Math.min(tw(it.label, ls, true) + 10, o.minLabelW || 120) : 0;
    const w = Math.max(tW, labW);
    if (cx > x && cx + w > x + maxW) { cx = x; cy += rowH + rowGap; rowH = 0; }
    const fill = it.fill || C.panel;
    s += rect(cx, cy, w, ch, fill, it.fill ? C.ink : C.panelEdge, 8, it.fill ? 2 : 1.5);
    s += T(cx + w / 2, cy + ch / 2 + size * 0.35, it.text, { size, anchor: 'middle', italic: !!it.italic });
    let h = ch;
    if (it.label) {
      const lp = P(cx + w / 2, cy + ch + 8 + ls * 0.9, it.label, { size: ls, w: w, anchor: 'middle', weight: 700, fill: it.labelColor || C.tealDark, lh: ls * 1.22 });
      s += lp.s; h += 8 + lp.h + 2;
    }
    rowH = Math.max(rowH, h); cx += w + gap;
  }
  return { s, h: cy + rowH - y };
}
const line = (x1, y1, x2, y2, color = C.ink, w = 2.5, dash = '') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const curve = (d, color = C.ink, w = 3.5, marker = 'ah', dash = '') => `<path d="${d}" fill="none" stroke="${color}" stroke-width="${w}"${marker ? ` marker-end="url(#${marker})"` : ''}${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const circ = (cx, cy, r, fill = C.panel, edge = C.ink, sw = 2.5) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
const num = (cx, cy, n, fill = C.cream, r = 20) => badge(cx, cy, r, String(n), fill);
// Figure wrapper: body is a function (y0) => {s, h} or a string with explicit height
export const figures = [];
function fig(name, title, sub, build, alt, caption, after) {
  const y0 = sub ? 122 : 96;
  const r = build(y0);
  const H = Math.ceil(y0 + r.h + 30);
  figures.push({ name, svg: svg(900, H, esc(title), r.s, sub ? esc(sub) : ''), alt, caption, after });
}
// ---------- end helpers ----------

export const slug = 'ap-english-language-5-5-connotation-denotation-study-guide';
const LESSON = 'src/content/ap-resources/english-language-and-composition/5-5-connotation-denotation-study-guide.md';

// 01 Two layers: home vs house
fig('01-two-layers-of-meaning', 'Two layers of meaning', '', (y0) => {
  let s = '';
  const word = (x, w, conn, f) => {
    let r = rect(x, y0 + 150, 340, 70, C.panel, C.ink, 10, 2.5) + T(x + 170, y0 + 183, 'DENOTATION', { size: 15, weight: 700, anchor: 'middle', fill: C.muted }) + T(x + 170, y0 + 207, 'a place where a person lives', { size: 16, anchor: 'middle' });
    r += `<path d="M${x},${y0 + 150} L${x + 30},${y0 + 60} L${x + 310},${y0 + 60} L${x + 340},${y0 + 150} Z" fill="${f}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>`;
    r += T(x + 170, y0 + 92, 'CONNOTATION', { size: 15, weight: 700, anchor: 'middle', fill: C.muted }) + P(x + 170, y0 + 118, conn, { size: 16, anchor: 'middle', w: 260 }).s;
    r += T(x + 170, y0 + 40, w, { size: 26, weight: 700, anchor: 'middle' });
    return r;
  };
  s += word(60, 'home', 'warmth, safety, belonging', C.cream);
  s += word(500, 'house', 'little of that feeling', C.panel);
  s += box(30, y0 + 250, 840, { body: '**Denotation:** the literal, dictionary meaning. **Connotation:** the feelings, associations and judgements a word carries beyond it. Choosing between words with the same denotation is choosing an attitude.', size: 16, align: 'middle', fill: C.panel, edge: C.olive }).s;
  return { s, h: 250 + 86 };
}, 'Two words, home and house, drawn as two-layer blocks. Both share the denotation “a place where a person lives”; home adds a connotation layer of warmth, safety and belonging, while house carries little of that feeling.',
'Words that share a literal meaning can carry very different feelings.', '## Two layers of meaning');

// 02 Thrifty to stingy scale
fig('02-thrifty-to-stingy', 'Same meaning, different attitude', 'Denotation: careful with money', (y0) => {
  let s = '';
  const W = [['thrifty', 'admiring: wise, responsible', C.teal], ['frugal', 'neutral to admiring: disciplined', C.tealLight], ['economical', 'neutral: practical', C.panel], ['cheap', 'critical: unwilling to pay fairly', C.cream], ['stingy', 'strongly critical: mean', '#f6e3d8']];
  const w = 160, g = 10;
  W.forEach(([word, c, f], i) => {
    const x = 30 + i * (w + g);
    s += rect(x, y0 + 10, w, 60, f, C.ink, 30, 2.5) + T(x + w / 2, y0 + 47, word, { size: 20, weight: 700, anchor: 'middle' });
    s += P(x + w / 2, y0 + 96, c, { size: 15, anchor: 'middle', w: w - 10, fill: C.muted }).s;
  });
  s += arrow(40, y0 + 150, 860, y0 + 150, { w: 3 }) + arrow(860, y0 + 150, 40, y0 + 150, { w: 3 });
  s += T(40, y0 + 178, 'invites the reader to admire', { size: 15, weight: 700, fill: C.tealDark }) + T(860, y0 + 178, 'invites the reader to disapprove', { size: 15, weight: 700, fill: C.rust, anchor: 'end' });
  let y = y0 + 210;
  const t1 = table(30, y, [280, 280, 280], [['Neutral', 'Positive', 'Negative'], ['walk', 'stroll', 'trudge'], ['determined', 'resolute', 'stubborn'], ['unusual', 'distinctive', 'peculiar'], ['crowd', 'gathering', 'mob'], ['old', 'seasoned', 'outdated']], { size: 16, cellFill: (r, c) => (r && c === 1 ? C.tealLight : r && c === 2 ? '#fbf3ee' : null) });
  s += t1.s;
  s += P(450, y + t1.h + 30, 'Connotation also depends on context, audience and culture: “ambitious” praises in a job reference, criticises a friend who steps on others.', { size: 15, anchor: 'middle', w: 820, fill: C.muted }).s;
  return { s, h: y + t1.h + 44 - y0 };
}, 'Five words for a person careful with money arranged from admiring to critical: thrifty, frugal, economical, cheap and stingy. A table gives neutral, positive and negative versions of walk, determined, unusual, crowd and old.',
'Same denotation, different connotation: the word decides whether readers admire or disapprove.', '## Same meaning, different attitude');

// 03 Four-step analysis
fig('03-four-step-word-analysis', 'Analysing word choice in four steps', 'From connotation to tone and style', (y0) => {
  let s = '';
  const st = [['Pick out', 'significant words and phrases'], ['Name the connotation', 'positive, negative or neutral, and what kind'], ['Compare', 'with what the writer might have said'], ['Link', 'the choice to tone and to purpose']];
  st.forEach(([h, b], i) => {
    const x = 30 + i * 215;
    s += box(x, y0, 195, { head: h, body: b, size: 15, headSize: 18, align: 'middle', h: 140, vc: true, fill: i === 3 ? C.tealLight : C.panel, edge: i === 3 ? C.tealDark : C.panelEdge }).s + num(x + 97, y0, i + 1, i === 3 ? C.mustard : C.cream, 16);
    if (i < 3) s += arrow(x + 197, y0 + 70, x + 213, y0 + 70, { w: 3 });
  });
  let y = y0 + 170;
  const r = row(30, y, 840, 24, [
    { head: 'Tone', body: 'the writer’s attitude: “a gathering of residents” vs “a mob of agitators” for the same event', size: 16, fill: C.cream, edge: C.olive },
    { head: 'Style', body: 'the overall pattern: formal “endeavour, commence” vs plain “try, start”, same denotations', size: 16 },
  ]);
  s += r.s;
  return { s, h: 170 + r.h };
}, 'Four steps for analysing word choice: pick out significant words, name the connotation, compare with alternatives, and link the choice to tone and purpose. Below, tone (a gathering of residents or a mob of agitators) and style (endeavour and commence or try and start).',
'Name the connotation, compare it with an alternative, then link it to tone and purpose.', '## How connotation builds tone and style');

// 04 Douglass flattering vs harsh
fig('04-douglass-connotation', 'Turning flattering words against themselves', 'Douglass, Rochester, 1852', (y0) => {
  let s = '';
  s += box(30, y0, 840, { body: '“To him, your celebration is a sham; your boasted liberty, an unholy license; your national greatness, swelling vanity.”', size: 19, align: 'middle', fill: C.panel, pad: 18 }).s;
  const R = [['your celebration', 'a sham', 'a pretence'], ['your boasted liberty', 'an unholy license', '“boasted”: empty bragging; “unholy license”: excess and abuse of freedom'], ['your national greatness', 'swelling vanity', '“swelling”: inflation and rot, not strength']];
  let y = y0 + 110;
  s += T(200, y, 'FLATTERING (to his audience)', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(500, y, 'HARSH', { size: 15, weight: 700, anchor: 'middle', fill: C.rust });
  y += 14;
  R.forEach(([a, b, n]) => {
    s += box(70, y, 260, { body: a, size: 17, align: 'middle', h: 62, vc: true, fill: C.tealLight, edge: C.tealDark }).s;
    s += arrow(334, y + 31, 380, y + 31, { w: 3.5, color: C.rust, marker: 'ahR' });
    s += box(384, y, 230, { body: `**${b}**`, size: 17, align: 'middle', h: 62, vc: true, fill: '#f6e3d8', edge: C.rust }).s;
    s += P(634, y + 24, n, { size: 15, w: 236, fill: C.muted }).s;
    y += 74;
  });
  s += box(30, y + 6, 840, { body: 'Every key word’s connotation says the same thing: from the enslaved person’s view, the celebration is false.', size: 16, align: 'middle', fill: C.cream, edge: C.olive }).s;
  return { s, h: y + 60 - y0 };
}, 'Douglass pairs three flattering phrases with harsh ones: your celebration with a sham, your boasted liberty with an unholy license, and your national greatness with swelling vanity. Notes explain the connotations of “boasted”, “unholy license” and “swelling”.',
'Douglass attaches negative connotations to his audience’s proudest words.', '## Connotation in a published text');

// 05 Draft sentence revised for audience
fig('05-lunchtime-revision', 'Choosing connotation for an audience', 'Worked example 1: leaving the grounds at lunchtime', (y0) => {
  let s = '';
  s += T(30, y0 + 12, 'Draft: suggests escape from a prison', { size: 18, weight: 700, fill: C.rust });
  const a = chunks(30, y0 + 28, 840, [{ text: 'Students', fill: C.panel }, { text: 'want', fill: '#f6e3d8', label: 'mere desire', labelColor: C.rust }, { text: 'to', fill: C.panel }, { text: 'get out of', fill: '#f6e3d8', label: 'escape', labelColor: C.rust }, { text: 'school at lunch.', fill: C.panel }], { size: 19, gap: 8, minLabelW: 90 });
  s += a.s;
  let y = y0 + 28 + a.h + 30;
  s += T(30, y, 'Revision: students as responsible', { size: 18, weight: 700, fill: C.tealDark });
  const b = chunks(30, y + 16, 840, [{ text: 'Students', fill: C.panel }, { text: 'ask for', fill: C.tealLight, label: 'polite, mature' }, { text: 'the', fill: C.panel }, { text: 'responsibility', fill: C.teal, label: 'privilege as obligation' }, { text: 'of', fill: C.panel }, { text: 'leaving the grounds', fill: C.tealLight, label: 'neutral, exact' }, { text: 'at lunchtime.', fill: C.panel }], { size: 19, gap: 8, minLabelW: 100 });
  s += b.s;
  y += 16 + b.h + 26;
  const r = row(30, y, 840, 20, [
    { head: 'Audience', body: 'parents and teachers who may fear misbehaviour', size: 15 },
    { head: 'Earned?', body: '“responsibility” needs evidence that older students already manage their time well', size: 15, fill: C.cream, edge: C.olive },
  ]);
  s += r.s;
  return { s, h: y + r.h - y0 };
}, 'The draft “Students want to get out of school at lunch” is marked for “want” (mere desire) and “get out of” (escape). The revision “Students ask for the responsibility of leaving the grounds at lunchtime” is marked for polite “ask for”, “responsibility” as an obligation and neutral “leaving the grounds”.',
'Choose words whose associations fit the audience, and make sure the evidence earns them.', '## Worked example 1: choosing connotation for an audience');

// 06 Loaded vs neutral orchard passage
fig('06-orchard-loaded-vs-neutral', 'Loaded words, neutral words', 'Worked example 2: the old orchard', (y0) => {
  let s = '';
  const pairs = [['swarmed', 'arrived', 'insects; an unwelcome invasion'], ['machines', 'equipment', 'cold and impersonal'], ['tearing out', 'removing', 'violence'], ['stood', 'grown', 'steady, dignified trees'], ['quiet hillside', 'hillside', 'peace, against the noise'], ['scar of mud', 'cleared', 'a wound']];
  s += T(180, y0 + 10, 'The writer chose', { size: 17, weight: 700, anchor: 'middle', fill: C.rust }) + T(430, y0 + 10, 'Neutral version', { size: 17, weight: 700, anchor: 'middle', fill: C.muted }) + T(700, y0 + 10, 'Connotation', { size: 17, weight: 700, anchor: 'middle' });
  let y = y0 + 26;
  pairs.forEach(([l, n, c]) => {
    s += rect(80, y, 200, 46, '#f6e3d8', C.rust, 23, 2.5) + T(180, y + 30, l, { size: 18, weight: 700, anchor: 'middle' });
    s += rect(330, y, 200, 46, C.panel, C.panelEdge, 23, 2) + T(430, y + 30, n, { size: 17, anchor: 'middle', fill: C.muted });
    s += T(580, y + 30, c, { size: 16 });
    y += 56;
  });
  s += box(30, y + 6, 840, { body: 'Developers seem aggressive and the orchard a victim: the writer’s attitude is critical, and the reader is led to sympathise with the orchard.', size: 16, align: 'middle', fill: C.cream, edge: C.olive }).s;
  return { s, h: y + 60 - y0 };
}, 'Six words from the orchard passage set against neutral alternatives with their connotations: swarmed (arrived) suggests invasion; machines (equipment) is impersonal; tearing out (removing) suggests violence; stood (grown) gives the trees dignity; quiet hillside suggests peace; scar of mud (cleared) suggests a wound.',
'Comparing loaded words with neutral ones reveals the writer’s attitude.', '## Worked example 2: analysing connotation in a passage');
