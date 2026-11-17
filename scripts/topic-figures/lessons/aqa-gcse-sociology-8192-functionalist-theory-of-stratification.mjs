import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-sociology-8192-functionalist-theory-of-stratification';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- Local layout helpers (sociology figures: wrapped text, tables, flows, cards) ----
const esc = (s) => String(s).replace(/&(?![a-z]+;|#\d+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const CW = 0.495, CWB = 0.55; // average glyph width / font size for Inter (regular, bold)
function wrap(s, maxPx, size = 17, bold = false) {
  const maxCh = Math.floor(maxPx / (size * (bold ? CWB : CW)));
  const lines = [''];
  for (const w of String(s).split(/\s+/)) {
    const cur = lines[lines.length - 1];
    if (cur && (cur + ' ' + w).replace(/\*\*/g, '').length > maxCh) lines.push(w);
    else lines[lines.length - 1] = cur ? cur + ' ' + w : w;
  }
  return lines;
}
// **bold** spans inside a wrapped paragraph
function rich(lines) {
  let open = false;
  return lines.map((l) => {
    let out = open ? '<tspan font-weight="700">' : '';
    l.split('**').forEach((p, i) => { if (i > 0) { open = !open; out += open ? '<tspan font-weight="700">' : '</tspan>'; } out += esc(p); });
    return out + (open ? '</tspan>' : '');
  });
}
// paragraph: y is first baseline; returns {svg, h} where h = lines * lh
function para(x, y, w, s, o = {}) {
  const size = o.size || 17, lh = o.lh || Math.round(size * 1.32);
  const lines = rich(wrap(s, w, size, (o.weight || 400) >= 600));
  return { svg: tl(x, y, lines, { size, weight: o.weight || 400, fill: o.fill || C.ink, anchor: o.anchor || 'start', italic: o.italic }, lh), h: lines.length * lh, n: lines.length };
}
function bullets(x, y, w, items, o = {}) {
  const size = o.size || 17, lh = o.lh || Math.round(size * 1.32), gap = o.gap ?? 8;
  let s = '', h = 0;
  for (const it of items) {
    s += `<circle cx="${x + 5}" cy="${y + h - size * 0.33}" r="4.5" fill="${o.dot || C.tealDark}"/>`;
    const p = para(x + 18, y + h, w - 18, it, { size, lh, fill: o.fill || C.ink });
    s += p.svg; h += p.h + gap;
  }
  return { svg: s, h: h - gap };
}
const roundTop = (x, y, w, h, r = 14) => `M${x},${y + h} L${x},${y + r} Q${x},${y} ${x + r},${y} L${x + w - r},${y} Q${x + w},${y} ${x + w},${y + r} L${x + w},${y + h} Z`;
// panel with a coloured header band
function headPanel(x, y, w, h, head, o = {}) {
  const size = o.size || 20, hp = para(x + w / 2, 0, w - 28, head, { size, weight: 700, anchor: 'middle' });
  const hh = o.hh || Math.max(50, hp.h + 22);
  const hp2 = para(x + w / 2, y + (hh - hp.h) / 2 + size * 0.95, w - 28, head, { size, weight: 700, anchor: 'middle', fill: o.headInk || C.ink });
  return { svg: panel(x, y, w, h, o.body || C.panel, o.edge || C.panelEdge) + `<path d="${roundTop(x + 1.25, y + 1.25, w - 2.5, hh - 1.25, 13)}" fill="${o.fill || C.teal}"/>` + `<line x1="${x + 1.25}" y1="${y + hh}" x2="${x + w - 1.25}" y2="${y + hh}" stroke="${o.edge || C.panelEdge}" stroke-width="2"/>` + hp2.svg, hh };
}
const headH = (w, head, size = 20) => Math.max(50, para(0, 0, w - 28, head, { size, weight: 700 }).h + 22);
// content block measured: kind 'text' | 'bullets'
function block(x, y, w, c, o = {}) { return Array.isArray(c) ? bullets(x, y, w, c, o) : para(x, y, w, c, o); }
// note strip (cream) full width
function note(y, head, text, o = {}) {
  const x = o.x ?? 30, w = o.w ?? 840, size = o.size || 17;
  const hp = head ? para(x + 26, y + 36, w - 52, head, { size: 19, weight: 700, fill: o.headFill || C.ink }) : { svg: '', h: 0 };
  const bp = text ? block(x + 26, y + 36 + hp.h + (head ? 4 : 0), w - 52, text, { size, fill: o.fill || C.ink, dot: C.olive }) : { svg: '', h: 0 };
  const lh = Math.round(size * 1.32), h = 36 + hp.h + (head && text ? 4 : 0) + (text ? bp.h - lh : -25) + 24;
  return { svg: panel(x, y, w, h, o.bg || C.cream, o.edgeC || C.olive) + hp.svg + bp.svg, h };
}
// Comparison grid: cols [{head, fill}], rows [{label, cells:[text|[bullets]]}]
function compareFig(title, { sub, cols, rows, labelW = 150, size = 16, foot, headSize = 19, y0 }) {
  let y = y0 ?? (sub ? 120 : 104); const gap = 8, n = cols.length;
  const x0 = 30 + (labelW ? labelW + gap : 0), cw = (870 - x0 - gap * (n - 1)) / n;
  const hh = Math.max(...cols.map((c) => headH(cw, c.head, headSize) - 6));
  let s = '';
  cols.forEach((c, i) => {
    const x = x0 + i * (cw + gap), hp = para(x + cw / 2, 0, cw - 20, c.head, { size: headSize, weight: 700, anchor: 'middle' });
    s += `<rect x="${x}" y="${y}" width="${cw}" height="${hh}" rx="12" fill="${c.fill || C.teal}" stroke="${C.ink}" stroke-width="2"/>` + para(x + cw / 2, y + (hh - hp.h) / 2 + headSize * 0.93, cw - 20, c.head, { size: headSize, weight: 700, anchor: 'middle', fill: c.ink || C.ink }).svg;
  });
  y += hh + gap;
  for (const r of rows) {
    const ms = r.cells.map((c) => block(0, 0, cw - 28, c, { size }).h);
    const lp = labelW ? para(0, 0, labelW - 24, r.label, { size: 17, weight: 700 }) : { h: 0 };
    const rh = Math.max(...ms, lp.h) + 30;
    if (labelW) s += `<rect x="30" y="${y}" width="${labelW}" height="${rh}" rx="10" fill="${r.fill || C.cream}" stroke="${C.olive}" stroke-width="2"/>` + para(42, y + (rh - lp.h) / 2 + 17 * 0.95, labelW - 24, r.label, { size: 17, weight: 700 }).svg;
    r.cells.forEach((c, i) => {
      const x = x0 + i * (cw + gap);
      s += `<rect x="${x}" y="${y}" width="${cw}" height="${rh}" rx="10" fill="${r.cellFill?.[i] || C.panel}" stroke="${C.panelEdge}" stroke-width="2"/>` + block(x + 14, y + 15 + size * 0.95, cw - 28, c, { size }).svg;
    });
    y += rh + gap;
  }
  if (foot) { const f = note(y + 8, foot.head, foot.text); s += f.svg; y += f.h + 8; }
  return svg(900, Math.round(y + 24), esc(title), s, sub && esc(sub));
}
// Card grid: cards [{head, sub, body, fill}] in ncol columns, equal heights per row
function cardsFig(title, { sub, cards, ncol = 2, size = 16, foot, y0, headSize = 20, badges = false }) {
  let y = y0 ?? (sub ? 120 : 104); const gap = 16, cw = (840 - gap * (ncol - 1)) / ncol;
  let s = '';
  for (let r = 0; r < cards.length; r += ncol) {
    const row = cards.slice(r, r + ncol);
    const hhs = row.map((c) => headH(cw - (badges ? 50 : 0), c.head, headSize));
    const hh = Math.max(...hhs);
    const bodies = row.map((c) => (c.sub ? para(0, 0, cw - 32, c.sub, { size, weight: 600 }).h + 8 : 0) + block(0, 0, cw - 32, c.body, { size }).h);
    const ch = hh + Math.max(...bodies) + 36;
    row.forEach((c, i) => {
      const x = 30 + i * (cw + gap);
      const hp = headPanel(x, y, cw, ch, c.head, { fill: c.fill || C.teal, hh, size: headSize });
      s += hp.svg;
      if (badges) s += badge(x + 34, y + hh / 2, 18, String(r + i + 1), C.cream);
      let yy = y + hh + 18 + size * 0.95;
      if (c.sub) { const sp = para(x + 16, yy, cw - 32, c.sub, { size, fill: C.tealDark, weight: 600 }); s += sp.svg; yy += sp.h + 8; }
      s += block(x + 16, yy, cw - 32, c.body, { size, dot: c.dot }).svg;
    });
    y += ch + gap;
  }
  if (foot) { const f = note(y - gap + 16, foot.head, foot.text); s += f.svg; y += f.h; }
  return svg(900, Math.round(y + 14), esc(title), s, sub && esc(sub));
}
// Vertical flow: steps [{head, body, fill}] joined by arrows; optional side labels
function flowFig(title, { sub, steps, size = 17, foot, y0, numbered = true, arrowLabels = [] }) {
  let y = y0 ?? (sub ? 120 : 104); const ag = 46; let s = '';
  steps.forEach((st, i) => {
    const tx = numbered ? 104 : 56, tw = 870 - tx - 26;
    const hp = para(tx, 0, tw, st.head, { size: 20, weight: 700 });
    const bp = st.body ? block(tx, 0, tw, st.body, { size }) : { h: 0 };
    const h = 26 + hp.h + (st.body ? 6 + bp.h : 0) + 16;
    s += panel(30, y, 840, h, st.fill || C.panel, st.edge || C.panelEdge);
    if (numbered) s += badge(67, y + h / 2, 21, String(st.n ?? i + 1), st.badge || (i === steps.length - 1 ? C.mustard : C.cream));
    s += para(tx, y + 24 + 20 * 0.78, tw, st.head, { size: 20, weight: 700, fill: st.ink || C.ink }).svg;
    if (st.body) s += block(tx, y + 24 + hp.h + 6 + size * 0.78, tw, st.body, { size, fill: C.ink }).svg;
    y += h;
    if (i < steps.length - 1) {
      s += arrow(450, y + 4, 450, y + ag - 6, { w: 3.5 });
      if (arrowLabels[i]) s += t(470, y + ag / 2 + 6, esc(arrowLabels[i]), { size: 16, fill: C.tealDark, weight: 600, italic: true });
      y += ag;
    }
  });
  if (foot) { const f = note(y + 18, foot.head, foot.text); s += f.svg; y += f.h + 18; }
  return svg(900, Math.round(y + 26), esc(title), s, sub && esc(sub));
}
// Two-sided debate: left/right {head, sub, items, fill}, optional verdict note
function versusFig(title, { sub, left, right, foot, size = 17, y0 }) {
  let y = y0 ?? (sub ? 120 : 104); const w = 404, xs = [30, 466]; let s = '';
  const sides = [left, right];
  const hh = Math.max(...sides.map((d) => headH(w, d.head, 21)));
  const hs = sides.map((d) => (d.sub ? para(0, 0, w - 36, d.sub, { size: 16 }).h + 10 : 0) + block(0, 0, w - 36, d.items, { size }).h);
  const ph = hh + Math.max(...hs) + 40;
  sides.forEach((d, i) => {
    const x = xs[i];
    s += headPanel(x, y, w, ph, d.head, { fill: d.fill || (i ? C.cream : C.teal), hh, size: 21 }).svg;
    let yy = y + hh + 22 + 16 * 0.9;
    if (d.sub) { const sp = para(x + 18, yy, w - 36, d.sub, { size: 16, fill: C.muted, italic: true }); s += sp.svg; yy += sp.h + 10; }
    s += block(x + 18, yy, w - 36, d.items, { size, dot: i ? C.olive : C.tealDark }).svg;
  });
  s += `<circle cx="450" cy="${y + ph / 2}" r="24" fill="${C.ink}"/>` + t(450, y + ph / 2 + 7, 'vs', { size: 19, weight: 700, fill: '#ffffff', anchor: 'middle' });
  y += ph;
  if (foot) { const f = note(y + 18, foot.head, foot.text); s += f.svg; y += f.h + 18; }
  return svg(900, Math.round(y + 26), esc(title), s, sub && esc(sub));
}
// Horizontal chain of 2-5 boxes with arrows between; returns {svg,h}
function hchain(y, items, o = {}) {
  const n = items.length, ag = o.ag || 40, w = (840 - ag * (n - 1)) / n, size = o.size || 16;
  const hs = items.map((it) => (it.head ? para(0, 0, w - 24, it.head, { size: 18, weight: 700 }).h + 6 : 0) + (it.body ? para(0, 0, w - 24, it.body, { size }).h : 0));
  const h = Math.max(...hs) + 34; let s = '';
  items.forEach((it, i) => {
    const x = 30 + i * (w + ag);
    s += `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${it.fill || C.panel}" stroke="${it.edge || C.ink}" stroke-width="2.5"/>`;
    let yy = y + (h - hs[i]) / 2 + 18 * 0.85;
    if (it.head) { const hp = para(x + w / 2, yy, w - 24, it.head, { size: 18, weight: 700, anchor: 'middle' }); s += hp.svg; yy += hp.h + 6; }
    if (it.body) s += para(x + w / 2, yy, w - 24, it.body, { size, anchor: 'middle', fill: it.head && (!it.fill || it.fill === C.panel) ? C.muted : C.ink }).svg;
    if (i < n - 1 && o.arrows !== false) s += arrow(x + w + 4, y + h / 2, x + w + ag - 4, y + h / 2, { w: 3.5 });
  });
  return { svg: s, h };
}
const label = (x, y, s, o = {}) => t(x, y, esc(s), o);
// One row of header cards across a given x-range; returns {svg, h}
function cardRow(y, cards, o = {}) {
  const x0 = o.x ?? 30, W = o.w ?? 840, gap = o.gap ?? 16, n = cards.length, cw = (W - gap * (n - 1)) / n, size = o.size || 16, hs = o.headSize || 19;
  const hh = Math.max(...cards.map((c) => headH(cw, c.head, hs)));
  const bodies = cards.map((c) => (c.sub ? para(0, 0, cw - 28, c.sub, { size, weight: 600 }).h + 6 : 0) + block(0, 0, cw - 28, c.body, { size }).h);
  const ch = hh + Math.max(...bodies) + 34; let s = '';
  cards.forEach((c, i) => {
    const x = x0 + i * (cw + gap);
    s += headPanel(x, y, cw, ch, c.head, { fill: c.fill || C.teal, hh, size: hs }).svg;
    let yy = y + hh + 16 + size * 0.95;
    if (c.sub) { const sp = para(x + 14, yy, cw - 28, c.sub, { size, fill: C.tealDark, weight: 600 }); s += sp.svg; yy += sp.h + 6; }
    s += block(x + 14, yy, cw - 28, c.body, { size, dot: c.dot }).svg;
  });
  return { svg: s, h: ch };
}
// ---- end helpers ----

const box = (x, y, w, h, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.r ?? 12}" fill="${o.fill || C.panel}" stroke="${o.edge || C.ink}" stroke-width="${o.sw || 2.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
const pill = (x, y, w, h, s, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${o.fill || C.tealLight}" stroke="${o.edge || C.ink}" stroke-width="2"/>` + label(x + w / 2, y + h / 2 + (o.size || 17) * 0.36, s, { size: o.size || 17, weight: o.weight ?? 700, anchor: 'middle', fill: o.ink || C.ink });
const vcenter = (x, yTop, h, w, s, o = {}) => { const size = o.size || 17; const p = para(0, 0, w, s, o); return para(x, yTop + (h - p.h) / 2 + size * 0.95, w, s, o).svg; };

// 01 What functionalism asks
{
  let s = '';
  s += box(30, 112, 840, 96, { fill: C.tealLight, sw: 2 }) + label(450, 148, 'Every known society ranks people unequally…', { size: 20, weight: 700, anchor: 'middle' }) + label(450, 180, 'so inequality must do something useful for society as a whole', { size: 18, anchor: 'middle' });
  s += arrow(450, 212, 450, 244, { w: 3.5 });
  s += box(30, 250, 400, 120, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + label(230, 284, 'Not this question', { size: 17, weight: 700, anchor: 'middle', fill: C.rust }) + label(230, 324, '“Is inequality fair?”', { size: 22, weight: 700, anchor: 'middle', fill: C.muted });
  s += `<line x1="110" y1="314" x2="350" y2="314" stroke="${C.rust}" stroke-width="3"/>`;
  s += box(470, 250, 400, 120, { fill: C.mustard, sw: 2.5 }) + label(670, 284, 'The functionalist question', { size: 17, weight: 700, anchor: 'middle' }) + label(670, 324, '“What does inequality', { size: 22, weight: 700, anchor: 'middle' }) + label(670, 352, 'do for society?”', { size: 22, weight: 700, anchor: 'middle' });
  const items = [
    { head: 'Parsons: school', body: 'Meritocratic; selects people for future roles', fill: C.tealLight },
    { head: 'Davis and Moore: rewards', body: 'Finish the job schools start: the reward system sorts people into roles', fill: C.teal },
  ];
  const c = hchain(430, items, { size: 17, ag: 60 });
  s += label(450, 414, 'Linking topics', { size: 18, weight: 700, anchor: 'middle' }) + c.svg;
  const n = note(430 + c.h + 18, null, 'Functionalism sees society as a system of connected parts, like the organs of a body; stratification is one of those parts.');
  add('01-functionalist-question',
    svg(900, Math.round(430 + c.h + 18 + n.h + 24), 'What functionalism is trying to explain', s + n.svg),
    'Because every known society ranks people unequally, functionalists ask what inequality does for society, not whether it is fair. Below, Parsons’ view that schools select people for roles links to Davis and Moore, for whom the reward system finishes the job schools start.',
    'Functionalists ask what inequality does for society, not whether it is fair.',
    '## What functionalism is trying to explain');
}

// 02 Applying the theory: two roles
{
  const f = versusFig('Applying the theory: two roles compared', {
    left: { head: 'Air traffic controller', fill: C.teal, items: ['Needs **rare skills**', 'Carries responsibility for many lives', 'Long, selective training', '**High pay and prestige** attract able candidates, make training worthwhile and encourage careful work'] },
    right: { head: 'A role almost anyone could learn quickly', fill: C.cream, items: ['Common skills', 'Short training', '**Lower rewards** are enough to fill it'] },
    foot: { head: 'When you apply it', text: 'Name the four needs or functional importance and show how the example fits. Do not stop at “doctors earn a lot”.' },
  });
  add('02-applying-the-theory', f,
    'Two panels. An air traffic controller needs rare skills, carries responsibility for many lives and trains for a long time, so high pay and prestige attract and motivate able people. A role almost anyone could learn quickly can be filled with lower rewards.',
    'Higher rewards go where skills are rare and responsibility is high, according to Davis and Moore.',
    '## How to apply the theory to an example');
}

// 03 Five criticisms with examples
{
  const rows = [
    ['Low-paid roles can be vital', 'Are lawyers more important than nurses?'],
    ['Pay may reflect power, not importance', 'Bargaining power: are MPs worth more than nurses?'],
    ['No proof exceptional talent is needed', 'No agreed way to measure talent; no formal educational requirement for government ministers'],
    ['The pool of talent may be larger', 'Unequal rewards may not be the best way to harness it'],
    ['Reward and importance do not match', 'The Prime Minister is paid far less than a typical major corporation’s chief executive'],
  ];
  let s = '';
  let y = 108;
  rows.forEach(([a, b], i) => {
    const bp = para(0, 0, 440, b, { size: 17 }), rh = Math.max(70, bp.h + 30);
    s += box(30, y, 360, rh, { fill: C.cream, edge: C.olive, sw: 2 }) + badge(64, y + rh / 2, 18, String(i + 1), C.panel) + vcenter(96, y, rh, 280, a, { size: 18, weight: 700 });
    s += label(408, y + rh / 2 + 7, 'e.g.', { size: 16, weight: 700, fill: C.muted });
    s += box(446, y, 424, rh, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + vcenter(462, y, rh, 396, b, { size: 17 });
    y += rh + 10;
  });
  const n = note(y + 8, 'Learn them as separate points', 'Each criticism needs its own example, such as nurses, ministers or the Prime Minister’s pay.');
  add('03-five-criticisms',
    svg(900, Math.round(y + 8 + n.h + 24), 'Five criticisms of Davis and Moore', s + n.svg),
    'Five criticisms, each with an example: low-paid roles such as nursing can be vital; pay may reflect bargaining power, as with MPs; there is no proof exceptional talent is needed, since ministers need no formal qualifications; the pool of talent may be larger; and the Prime Minister is paid far less than a major chief executive.',
    'Each criticism needs its own example.',
    '## Criticisms: the core evaluation');
}

// 04 Tumin: stratification can be dysfunctional
{
  const items = [
    { head: 'Unequal access', body: 'to education and training', fill: C.tealLight },
    { head: 'Able people', body: 'never get the chance to compete', fill: C.cream },
    { head: 'Talent wasted', body: 'rather than discovered', fill: C.mustard },
  ];
  const c = hchain(150, items, { size: 17, ag: 50 });
  let s = label(450, 132, 'The mechanism fails on its own terms', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark }) + c.svg;
  const y = 150 + c.h + 30;
  const r = cardRow(y, [
    { head: 'Is training a sacrifice?', fill: C.panel, body: 'Tumin questioned whether training really needs large rewards' },
    { head: 'Hostility, not unity', fill: C.panel, body: 'Stratification can create hostility and distrust between groups instead of binding society together' },
  ], { size: 17, headSize: 19 });
  s += r.svg;
  const n = note(y + r.h + 18, 'Common mistake', 'Do not call Tumin a Marxist: use him simply as a critic of Davis and Moore.');
  add('04-tumin',
    svg(900, Math.round(y + r.h + 18 + n.h + 24), 'Tumin (1953): stratification can be dysfunctional', s + n.svg),
    'A chain: unequal access to education and training means able people never get the chance to compete, so talent is wasted rather than discovered. Two more points: training may not be a sacrifice needing large rewards, and stratification can create hostility and distrust between groups.',
    'For Tumin, stratification can waste talent instead of finding it.',
    '## Criticisms: the core evaluation');
}

// 05 PAAE model paragraph
{
  const rows = [
    ['Point', C.teal, 'Davis and Moore argue that unequal rewards make sure functionally important roles are filled by the most able people.', 'names the theory accurately'],
    ['Application', C.tealLight, 'A hospital consultant trains for many years, so high pay is the incentive that makes the training worthwhile.', 'a specific example'],
    ['Analysis', C.cream, 'Without the reward fewer able people would train, and the health service would suffer, so stratification is functional.', 'explains why the mechanism matters'],
    ['Evaluation', C.mustard, 'Feminists note nurses and care workers are also essential but paid much less, and most are women: rewards follow gender and bargaining power too.', 'a named perspective, not “some disagree”'],
  ];
  let s = '', y = 108;
  rows.forEach(([h, f, b, why]) => {
    const bp = para(0, 0, 470, b, { size: 17 }), rh = Math.max(80, bp.h + 30);
    s += box(30, y, 170, rh, { fill: f, sw: 2.5 }) + label(115, y + rh / 2 + 7, h, { size: 19, weight: 700, anchor: 'middle' });
    s += box(212, y, 490, rh, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + vcenter(226, y, rh, 466, b, { size: 17 });
    s += vcenter(716, y, rh, 154, why, { size: 15, fill: C.tealDark, weight: 600, italic: true });
    y += rh + 10;
  });
  add('05-model-paragraph',
    svg(900, Math.round(y + 16), 'Anatomy of a strong paragraph', s),
    'Four rows build a paragraph. Point: Davis and Moore’s claim about unequal rewards. Application: a hospital consultant’s long training. Analysis: why the reward matters for the health service. Evaluation: feminists note nurses and care workers are essential but low paid and mostly women.',
    'Point, application, analysis, then evaluation from a named perspective.',
    '## Annotated model paragraph');
}
