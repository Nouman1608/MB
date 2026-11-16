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
  const tx = align === 'middle' ? x + w / 2 : x + pad;
  const nat = o.vc && o.h ? box(x, y, w, { ...o, h: 0, vc: false }).h : 0;
  let inner = '', cy = y + pad + (o.vc && o.h ? Math.max(0, (o.h - nat) / 2) : 0);
  if (o.head) {
    const hp = P(tx + (o.headIndent || 0), cy + hs * 0.8, o.head, { size: hs, weight: 700, w: w - 2 * pad - (o.headIndent || 0), anchor: align, fill: o.headColor || C.ink });
    inner += hp.s; cy += hp.h + (o.body ? 4 : 0);
  }
  if (o.body) {
    const bp = P(tx, cy + bs * 0.85, o.body, { size: bs, w: w - 2 * pad, anchor: align, fill: o.bodyColor || C.ink, lh: o.lh });
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

export const slug = 'ap-english-language-2-2-audience-emotions-values-study-guide';
const LESSON = 'src/content/ap-resources/english-language-and-composition/2-2-audience-emotions-values-study-guide.md';

// 01 True and matters
fig('01-true-and-matters', 'True, and it matters to me', 'What evidence does and what emotion and values do', (y0) => {
  let s = '';
  const cy = y0 + 170;
  s += `<circle cx="340" cy="${cy}" r="160" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="3" opacity="0.95"/>`;
  s += `<circle cx="560" cy="${cy}" r="160" fill="${C.cream}" stroke="${C.olive}" stroke-width="3" opacity="0.85"/>`;
  s += `<path d="M450,${cy - 116} A160,160 0 0 1 450,${cy + 116} A160,160 0 0 1 450,${cy - 116} Z" fill="${C.mustard}" opacity="0.55"/>`;
  s += T(270, cy - 40, 'Evidence', { size: 22, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += P(270, cy - 6, 'tells the audience the claim is **true**', { size: 17, anchor: 'middle', w: 170 }).s;
  s += P(630, cy - 64, 'Emotion and values', { size: 21, weight: 700, anchor: 'middle', fill: C.olive, w: 150 }).s;
  s += P(630, cy + 4, 'tell the audience it **matters to them**', { size: 17, anchor: 'middle', w: 170 }).s;
  s += P(450, cy - 10, '**Strong arguments connect the two**', { size: 17, anchor: 'middle', w: 90 }).s;
  const y = cy + 190;
  const r = row(30, y, 840, 40, [
    { head: 'Only evidence', body: 'Can be correct and still be ignored.', align: 'middle', size: 17, edge: C.tealDark },
    { head: 'Only emotion', body: 'Can move people and still be unsound.', align: 'middle', size: 17, edge: C.olive },
  ]);
  s += r.s;
  return { s, h: y + r.h - y0 };
}, 'Two overlapping circles. Evidence tells the audience a claim is true; emotion and values tell the audience it matters to them; the overlap is where strong arguments connect the two. Below, evidence alone can be ignored and emotion alone can be unsound.',
'Evidence shows a claim is true; emotion and values show why it matters.', '## Why feelings belong in an argument');

// 02 Seven sources of emotion
fig('02-sources-of-emotion', 'Where emotion comes from', 'Writers build feeling from language and content', (y0) => {
  const k = [
    ['Connotation', '“squatting” vs “occupying” vs “sheltering in”'],
    ['Imagery', '“The swing still turns in the wind, but no child has touched it since March.”'],
    ['Narrative and anecdote', '“Mrs Okafor has queued at the clinic door at five each morning...”'],
    ['Shared experience', '“...the smell of the school library on a wet Monday.”'],
    ['Values language', '“It is simply not fair that the children who most need the bus are the ones who lose it.”'],
    ['Rhythm and repetition', '“We have waited. We have written. We have signed. We will not wait again.”'],
    ['Direct address', '“You know this road.”'],
  ];
  let s = '', y = y0;
  for (const [h, ex] of k) {
    const b = box(270, y, 600, { body: ex, size: 16, pad: 12, fill: C.panel });
    const hh = Math.max(b.h, 48);
    s += rect(30, y, 220, hh, C.tealLight, C.tealDark, hh / 2 > 24 ? 24 : hh / 2, 2.5) + T(140, y + hh / 2 + 6, h, { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
    s += box(270, y, 600, { body: ex, size: 16, pad: 12, h: hh, vc: true }).s;
    y += hh + 10;
  }
  s += P(450, y + 18, 'An emotion rarely comes from one device alone; several often work together.', { size: 17, anchor: 'middle', w: 820, fill: C.muted }).s;
  return { s, h: y + 30 - y0 };
}, 'Seven sources of emotion with the lesson’s examples: connotation, imagery, narrative and anecdote, shared experience, values language, rhythm and repetition, and direct address.',
'Emotion is built from words and content, usually several devices at once.', '## Where emotion comes from in a text');

// 03 Framing one proposal
fig('03-framing-a-proposal', 'One proposal, two frames', 'The frame shows which audience the writer has in mind', (y0) => {
  let s = '';
  s += box(300, y0, 300, { head: 'Proposal', body: 'charge for parking', align: 'middle', fill: C.panel, edge: C.ink, sw: 3, h: 84, vc: true }).s;
  const y = y0 + 150;
  s += curve(`M380,${y0 + 86} C340,${y0 + 120} 260,${y0 + 110} 230,${y - 6}`, C.tealDark, 4, 'ahT');
  s += curve(`M520,${y0 + 86} C560,${y0 + 120} 640,${y0 + 110} 670,${y - 6}`, C.olive, 4, 'ahO');
  s += box(30, y, 400, { head: 'Framed as fairness', body: 'Those who use the road should pay for it.', align: 'middle', fill: C.tealLight, edge: C.tealDark, headColor: C.tealDark, size: 17, h: 100, vc: true }).s;
  s += box(470, y, 400, { head: 'Framed as thrift', body: 'the same plan, put to another audience', align: 'middle', fill: C.cream, edge: C.olive, headColor: C.olive, size: 17, h: 100, vc: true }).s;
  let yy = y + 130;
  s += T(450, yy, 'Three ways to relate to values', { size: 19, weight: 700, anchor: 'middle' });
  yy += 18;
  const r = row(30, yy, 840, 18, [
    { head: '1  Name it', body: '“This is a question of fairness.”', size: 16 },
    { head: '2  Frame it', body: 'Put the proposal in terms of a value the audience holds.', size: 16 },
    { head: '3  Link feeling to value', body: 'A pensioner left in the cold: pity plus care for the elderly.', size: 16 },
  ]);
  s += r.s;
  return { s, h: yy + r.h - y0 };
}, 'A plan to charge for parking branches into two frames: fairness, because those who use the road should pay for it, and thrift, for a different audience. Below, three ways writers relate to values: naming the value, framing a proposal in its terms, and linking a feeling to a value.',
'The same facts can be framed differently; the frame reveals the intended audience.', '## Relating to values');

// 04 Four tests of an emotional appeal
fig('04-four-tests-of-emotion', 'When emotion persuades', 'Four tests for an emotional appeal', (y0) => {
  let s = '';
  const k = [
    ['Relevant?', 'arises from something that bears on the claim', 'a tearful story about an unrelated topic'],
    ['Proportionate?', 'the feeling fits the situation', 'extreme language about a minor matter'],
    ['Supported?', 'a moving story plus a verifiable fact', 'feeling with no evidence behind it'],
    ['Respectful?', 'treats the audience as capable of judgement', 'playing on fear without evidence; mocking opponents'],
  ];
  s += T(400, y0 + 8, 'Persuades', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += T(715, y0 + 8, 'Backfires', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  let y = y0 + 24;
  for (const [q, ok, bad] of k) {
    const h = 74;
    s += T(30, y + h / 2 + 7, q, { size: 20, weight: 700 });
    s += box(230, y, 340, { body: `✓ ${ok}`, size: 16, fill: C.tealLight, edge: C.tealDark, h, vc: true, pad: 14 }).s;
    s += box(590, y, 280, { body: `✗ ${bad}`, size: 16, fill: C.panel, edge: C.rust, h, vc: true, pad: 14, dash: '6 5' }).s;
    y += h + 12;
  }
  s += P(450, y + 18, 'On the exam: explain what an appeal does and whether it suits the audience and purpose.', { size: 17, anchor: 'middle', w: 820, fill: C.muted }).s;
  return { s, h: y + 30 - y0 };
}, 'Four tests for an emotional appeal, each with a persuasive and a backfiring version: relevant (not an unrelated tearful story), proportionate (not extreme language about a minor matter), supported (story plus verifiable fact) and respectful (not fear without evidence or mockery).',
'Emotion helps when it is relevant, proportionate, supported and respectful.', '## When emotion is persuasive and when it is not');

// 05 Chief Joseph
fig('05-chief-joseph-annotated', 'Restraint and feeling', 'Chief Joseph, Bear Paw, 5 October 1877 (as recorded and translated)', (y0) => {
  let s = '';
  const c = chunks(30, y0 + 6, 840, [
    { text: 'Hear me, my chiefs!', label: 'direct address and imperative: authority, attention', fill: C.tealLight },
    { text: 'I am tired; my heart is sick and sad.', label: 'plain statements of feeling: credible, moving', fill: C.cream },
    { text: 'From where the sun now stands', label: 'imagery: a natural, timeless frame', fill: C.tealLight },
    { text: 'I will fight no more forever.', label: 'finality: dignity, not triumph or defeat alone', fill: C.cream },
  ], { size: 20, minLabelW: 250, gap: 14, rowGap: 30 });
  s += c.s;
  const y = y0 + c.h + 40;
  const r = row(30, y, 840, 24, [
    { head: 'Audience', body: 'His own people, the army officers, and soon a wider American public.', size: 16 },
    { head: 'Effect', body: 'The feeling is restrained and authority never slips: often more powerful than extravagant language.', size: 16, fill: C.cream, edge: C.olive },
  ]);
  s += r.s;
  return { s, h: y + r.h - y0 };
}, 'Chief Joseph’s words split into four parts with labels: “Hear me, my chiefs!” is direct address; “I am tired; my heart is sick and sad” is a plain statement of feeling; “From where the sun now stands” is imagery; “I will fight no more forever” gives finality and dignity.',
'Plain, restrained statements of feeling can move more than extravagant language.', '## A public-domain example: Chief Joseph\'s surrender speech (1877)');

// 06 Device -> feeling -> value -> effect
fig('06-okafor-appeal-chain', 'From device to effect', 'Worked example 1: Mrs Okafor’s walk to the clinic', (y0) => {
  let s = '';
  const dev = [['Narrative detail', 'one named, elderly person; her routine'], ['Imagery', '“a wall that was never meant for resting”'], ['Contrast of voices', '“The council calls this a saving. She calls it Tuesday.”']];
  let y = y0 + 26;
  s += T(165, y0 + 8, 'DEVICES', { size: 16, weight: 700, anchor: 'middle', fill: C.muted });
  s += T(450, y0 + 8, 'FEELING', { size: 16, weight: 700, anchor: 'middle', fill: C.muted });
  s += T(720, y0 + 8, 'VALUE', { size: 16, weight: 700, anchor: 'middle', fill: C.muted });
  const ys = [];
  dev.forEach(([h, b]) => { const bx = box(30, y, 270, { head: h, body: b, size: 15, headSize: 17, pad: 12 }); s += bx.s; ys.push(y + bx.h / 2); y += bx.h + 12; });
  const mid = (y0 + 26 + y - 12) / 2;
  ys.forEach((yy) => { s += arrow(304, yy, 364, mid, { w: 2.5 }); });
  s += box(370, mid - 60, 160, { head: 'Sympathy', body: 'and indignation', align: 'middle', fill: C.cream, edge: C.olive, h: 120, vc: true }).s;
  s += arrow(534, mid, 594, mid, { w: 4 });
  s += box(600, mid - 70, 270, { head: 'Fairness in public services', body: 'care for the elderly', align: 'middle', fill: C.tealLight, edge: C.tealDark, headColor: C.tealDark, h: 140, vc: true }).s;
  y += 10;
  const e = box(30, y, 840, { head: 'Effect on the argument', body: 'An abstract budget decision becomes personal: the bus cut is a human cost, not a line in a report.', size: 17, fill: C.panel, edge: C.ink, sw: 3 });
  s += e.s;
  return { s, h: y + e.h - y0 };
}, 'Three devices in the Mrs Okafor passage, narrative detail, imagery and a contrast of voices, feed into sympathy and indignation, which connect to the residents’ values of fairness in public services and care for the elderly. The effect is to make a budget decision feel like a human cost.',
'Name the device, tie it to a feeling and a value, then say what it does to the argument.', '## Worked example 1: explaining an emotional appeal');

// 07 Flat to earned
fig('07-flat-to-earned', 'Emotion earned by detail', 'Worked example 2: the playing field', (y0) => {
  let s = '';
  const a = box(30, y0 + 30, 840, { body: '“The playing field is being sold to developers. This will reduce green space. People will have fewer places to exercise.”', size: 18, fill: C.panel, edge: C.rust, dash: '7 5' });
  s += T(30, y0 + 16, 'Flat draft: accurate but inert', { size: 18, weight: 700, fill: C.rust });
  s += a.s;
  let y = y0 + 30 + a.h + 26;
  s += arrow(450, y - 20, 450, y + 6, { w: 4 });
  s += T(30, y + 22, 'Revision', { size: 18, weight: 700, fill: C.tealDark });
  const b = box(30, y + 36, 840, { body: 'The {{Marsh Lane field}}, where {{Saturday football}} has been played for **sixty years**, **is being sold to developers**. If it goes, the nearest open space for the **300 children** at {{Marsh Lane Primary}} will be {{a car-park-sized lawn two miles away}}. ((A community that cares for its children)) does not trade their playing field for a row of houses.', size: 18, fill: C.panel, edge: C.tealDark });
  s += b.s;
  y += 36 + b.h + 20;
  const r = row(30, y, 840, 16, [
    { body: '**Facts kept:** the sale, sixty years, 300 children', size: 16, pad: 12 },
    { body: '{{Added:}} a concrete place and a human group', size: 16, pad: 12 },
    { body: '((Added:)) a shared value', size: 16, pad: 12 },
  ]);
  s += r.s;
  s += P(450, y + r.h + 30, 'No adjectives such as “terrible” or “shocking”: the detail carries the feeling.', { size: 17, anchor: 'middle', w: 820, fill: C.muted }).s;
  return { s, h: y + r.h + 42 - y0 };
}, 'A flat draft about the playing field sale is revised. The revision keeps the facts (the sale, sixty years, 300 children), adds a concrete place and a human group (Marsh Lane field, Saturday football, Marsh Lane Primary) and appeals to a shared value: a community that cares for its children.',
'The emotion is earned by concrete detail, not asserted by adjectives.', '## Worked example 2: adding emotion and values to a flat paragraph');
