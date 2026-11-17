import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-sociology-7192-beliefs-in-society';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- Local layout helpers (sociology figures: wrapped text, tables, flows, cards) ----
const esc = (s) => String(s).replace(/&(?![a-z]+;|#\d+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const CW = 0.51, CWB = 0.56; // average glyph width / font size for Inter (regular, bold)
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

// 01 How Paper 2 works (generic: reusable across Paper 2 topic guides)
{
  let s = '', y = 104;
  const tiles = [['2 hours', 'written exam'], ['80 marks', 'in total'], ['33.3%', 'of the A-level']];
  const tw = (840 - 2 * 16) / 3;
  tiles.forEach(([a, b], i) => {
    const x = 30 + i * (tw + 16);
    s += panel(x, y, tw, 84) + t(x + tw / 2, y + 42, a, { size: 27, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(x + tw / 2, y + 68, b, { size: 16, anchor: 'middle', fill: C.muted });
  });
  y += 84 + 24;
  const r = cardRow(y, [
    { head: 'Section A: option 1', sub: 'answer on one topic', body: ['4.2.1 Culture and Identity', '4.2.2 Families and Households', '4.2.3 Health', '4.2.4 Work, Poverty and Welfare'], fill: C.teal },
    { head: 'Section B: option 2', sub: 'answer on one topic', body: ['4.2.5 Beliefs in Society', '4.2.6 Global Development', '4.2.7 The Media', '4.2.8 Stratification and Differentiation'], fill: C.cream },
  ], { size: 17 });
  s += r.svg; y += r.h + 14;
  [0, 1].forEach((i) => {
    const x = 30 + i * (412 + 16);
    s += `<rect x="${x}" y="${y}" width="412" height="56" rx="12" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + t(x + 206, y + 36, 'Extended writing: 40 marks', { size: 19, weight: 700, anchor: 'middle' });
  });
  y += 56;
  add('01-paper-2-structure', svg(900, y + 28, 'How Paper 2: Topics in Sociology works', s),
    'Paper 2 is a 2-hour written exam worth 80 marks and 33.3% of the A-level. Section A offers Culture and Identity, Families and Households, Health, or Work, Poverty and Welfare; Section B offers Beliefs in Society, Global Development, The Media, or Stratification and Differentiation. Each section is 40 marks of extended writing.',
    'One topic from each option, 40 marks of extended writing in each section.',
    '## How Paper 2 works');
}

// 02 Open and closed belief systems
{
  add('02-open-closed', versusFig('Open and closed belief systems', {
    left: { head: 'Open: science', sub: 'can be changed by evidence', items: ['**Popper:** theories must be falsifiable, so knowledge grows as false ideas are rejected', '**Merton (1942):** communism, universalism, disinterestedness, organised scepticism', '**Horton:** scientific belief systems are open'] },
    right: { head: 'Closed: e.g. Azande witchcraft', sub: 'explains away contrary evidence', items: ['**Evans-Pritchard:** belief in the poison oracle survived contrary evidence', 'A failed oracle was blamed on the wrong kind of poison or a broken taboo', '**Horton:** traditional belief systems are closed'] },
    foot: { head: 'Polanyi: science can behave like a closed system too', text: 'Kuhn (1962): in "normal science" scientists work inside a paradigm and set aside anomalies until a scientific revolution replaces it.' },
  }),
    'Science as an open belief system (Popper’s falsification, Merton’s four norms) compared with the Azande’s closed belief in the poison oracle, which explained away failures. Polanyi and Kuhn argue science can also defend itself.',
    'Open systems change with evidence; closed systems explain it away.',
    '## 1. Ideology, science and religion');
}

// 03 Conservative force or force for change
{
  add('03-stability-or-change', versusFig('Religion: stability or change?', {
    size: 16,
    left: { head: 'A conservative force', items: ['**Durkheim:** Arunta totemism; worshipping the totem is worshipping society, reinforcing the collective conscience', '**Malinowski:** rituals for dangerous ocean fishing, not safe lagoon fishing; coping with stress and life crises', '**Parsons:** legitimates core values; makes sense of suffering', '**Bellah:** US civil religion integrates many faiths', '**Marx:** "opium of the people"; divine right of kings; karma and caste', '**Feminism:** male-dominated organisations (Woodhead disagrees)'] },
    right: { head: 'A force for change', items: ['**Weber:** the Protestant ethic helped produce the spirit of capitalism', '**Bruce:** Black churches in the US civil rights movement; the New Christian Right largely unsuccessful', '**Maduro:** religion can be relatively autonomous; liberation theology in Latin America', '**Bloch:** religion’s "dual character": protest as well as acceptance', '**Worsley:** cargo cults in Melanesia as early anti-colonial protest'] },
  }),
    'Two columns. Durkheim, Malinowski, Parsons, Bellah, Marx and feminists see religion supporting stability. Weber, Bruce, Maduro, Bloch and Worsley show ways religion can help bring social change.',
    'A strong essay weighs the conservative-force view against evidence of religion driving change.',
    '## 2. Religion, social change and social stability');
}

// 04 Weber's Protestant ethic
{
  let s = '', y = 120;
  const c = hchain(y, [
    { head: 'Predestination', body: 'Calvinist belief that only some are chosen', fill: C.teal },
    { head: 'Anxiety', body: 'about whether one is saved', fill: C.panel },
    { head: 'Signs of being chosen', body: 'hard work in a calling and ascetic saving', fill: C.panel },
    { head: 'Spirit of capitalism', body: 'this-worldly work plus self-denial', fill: C.mustard },
  ], { ag: 46, size: 16 });
  s += c.svg; y += c.h + 22;
  const r = cardRow(y, [
    { head: 'Weber’s comparison', body: 'Hinduism and Confucianism lacked this combination of this-worldly work and self-denial.', fill: C.tealLight },
    { head: 'Evaluation', body: ['Kautsky (Marxist): capitalism came before Calvinism', 'Some Calvinist societies did not develop capitalism quickly'], fill: C.cream },
  ], { size: 16 });
  s += r.svg; y += r.h + 18;
  const n = note(y, 'Common error', 'Weber did not say Calvinism caused capitalism on its own. He called it one cause among others.');
  s += n.svg; y += n.h;
  add('04-protestant-ethic', svg(900, y + 26, 'Weber: The Protestant Ethic (1905)', s, 'religion as a force for change'),
    'A chain from the Calvinist belief in predestination, to anxiety about salvation, to hard work and ascetic saving as signs of being chosen, to the spirit of capitalism. Below are Weber’s comparison with Hinduism and Confucianism and Kautsky’s criticism.',
    'For Weber, Calvinist beliefs were one cause of the spirit of capitalism.',
    '## 2. Religion, social change and social stability');
}

// 05 Wallis's typology of religious organisations
{
  let s = '';
  const x0 = 220, y0 = 172, cw = 316, ch = 170, g = 12;
  s += label(x0 + cw + g / 2, 112, 'How the organisation sees itself', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += `<rect x="${x0}" y="128" width="${cw}" height="36" rx="10" fill="${C.teal}"/>` + t(x0 + cw / 2, 152, 'Uniquely legitimate', { size: 18, weight: 700, anchor: 'middle' });
  s += `<rect x="${x0 + cw + g}" y="128" width="${cw}" height="36" rx="10" fill="${C.teal}"/>` + t(x0 + cw + g + cw / 2, 152, 'One of many legitimate routes', { size: 18, weight: 700, anchor: 'middle' });
  s += `<text transform="translate(58,${y0 + ch + g / 2}) rotate(-90)" text-anchor="middle" font-size="19" font-weight="700" fill="${C.olive}">How society sees it</text>`;
  [['Respectable', 0], ['Deviant', 1]].forEach(([l, j]) => { const yy = y0 + j * (ch + g); s += `<rect x="78" y="${yy}" width="134" height="${ch}" rx="10" fill="${C.cream}"/>` + t(145, yy + ch / 2 + 7, l, { size: 18, weight: 700, anchor: 'middle' }); });
  const cells = [
    ['Church', 'Large, bureaucratic, monopoly of truth, often linked to the state, recruits from all classes'],
    ['Denomination', 'Niebuhr’s middle type, e.g. Methodism; mainly accepts society, lighter demands'],
    ['Sect', 'Small, exclusive, monopoly of truth, often hostile to society, high commitment, charismatic leader'],
    ['Cult', 'Loose, individualistic, tolerant of other beliefs; members act more like customers'],
  ];
  cells.forEach(([h, b], k) => {
    const i = k % 2, j = Math.floor(k / 2), x = x0 + i * (cw + g), yy = y0 + j * (ch + g);
    s += `<rect x="${x}" y="${yy}" width="${cw}" height="${ch}" rx="12" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += t(x + 18, yy + 38, h, { size: 23, weight: 700 }) + para(x + 18, yy + 70, cw - 36, b, { size: 16, fill: C.muted }).svg;
  });
  const yb = y0 + 2 * ch + g + 22;
  const n = note(yb, 'Troeltsch and Niebuhr', 'The classic types describe each organisation’s features; Wallis adds how each sees itself and how society sees it.');
  s += n.svg;
  add('05-wallis-typology', svg(900, yb + n.h + 26, 'Churches, denominations, sects and cults', s),
    'A two-by-two grid from Wallis. Churches are respectable and uniquely legitimate, denominations respectable and pluralistic, sects deviant and uniquely legitimate, and cults deviant and pluralistic, each with its classic features.',
    'Wallis sorts religious organisations by self-image and public image.',
    '## 3. Religious organisations and New Age movements');
}

// 06 Wallis's NRMs and why they grow
{
  let s = '', y = 116;
  s += arrow(60, y, 840, y, { w: 3.5 }) + `<line x1="60" y1="${y}" x2="80" y2="${y}" stroke="${C.ink}" stroke-width="3.5" marker-start="url(#ah)"/>`;
  s += label(60, y - 12, 'critical of the world', { size: 16, weight: 600, fill: C.muted }) + label(840, y - 12, 'helps success in ordinary life', { size: 16, weight: 600, fill: C.muted, anchor: 'end' });
  y += 22;
  const r = cardRow(y, [
    { head: 'World-rejecting', sub: 'e.g. the Unification Church', body: 'Sect-like, demanding, critical of the world.', fill: C.cream },
    { head: 'World-accommodating', sub: 'e.g. neo-Pentecostalism', body: 'Often breakaways from mainstream churches, aiming to restore spiritual purity.', fill: C.tealLight },
    { head: 'World-affirming', sub: 'e.g. Scientology, Transcendental Meditation', body: 'Cult-like, offering spiritual powers that help people succeed in ordinary life.', fill: C.teal },
  ], { size: 16 });
  s += r.svg; y += r.h + 20;
  s += label(450, y + 10, 'Why do sects and NRMs grow?', { size: 20, weight: 700, anchor: 'middle' });
  y += 26;
  const r2 = cardRow(y, [
    { head: 'Weber', body: 'Theodicy of disprivilege: sects explain and promise to reward the suffering of marginal groups.', fill: C.panel },
    { head: 'Stark and Bainbridge', body: 'Relative deprivation, and the compensators religion offers.', fill: C.panel },
    { head: 'Wilson', body: 'Rapid social change creates anomie; sects offer certainty and community.', fill: C.panel },
  ], { size: 16, headSize: 18 });
  s += r2.svg; y += r2.h;
  add('06-wallis-nrms', svg(900, y + 26, 'Wallis’s new religious movements (1984)', s),
    'Wallis’s three types of new religious movement on a line: world-rejecting (such as the Unification Church), world-accommodating (such as neo-Pentecostalism) and world-affirming (such as Scientology). Below, three explanations of growth from Weber, Stark and Bainbridge, and Wilson.',
    'Not every NRM is a sect: Wallis distinguishes three relationships with the world.',
    '## 3. Religious organisations and New Age movements');
}

// 07 Ethnicity: cultural defence and cultural transition
{
  let s = '', y = 146;
  const row = (head, items, fill) => {
    s += label(30, y + 4, head, { size: 21, weight: 700, fill: C.ink });
    y += 18;
    const c = hchain(y, items, { ag: 50, size: 16 });
    s += c.svg; y += c.h + 30;
  };
  row('Cultural defence (Bruce)', [
    { head: 'A community under threat', fill: C.panel },
    { head: 'Religion unites it', fill: C.teal },
  ]);
  row('Cultural transition (Bruce; Herberg on US immigrants)', [
    { head: 'Migrants arrive', body: 'newcomers need support', fill: C.panel },
    { head: 'Religion helps them adjust', body: 'a mosque, gurdwara or Pentecostal church gives support and contacts', fill: C.teal },
    { head: 'Religion declines', body: 'as the group integrates', fill: C.cream },
  ]);
  y -= 8;
  const n = note(y, 'Evaluation', ['**Pryce (1979):** Pentecostalism helped African-Caribbeans in Bristol cope with and adapt to life in Britain', '**Modood et al. (1997):** later generations were generally less religious, which fits transition', '**O’Beirne (2004):** religion was central to many minority groups’ identity, so its role may shift rather than fade']);
  s += n.svg; y += n.h;
  add('07-defence-transition', svg(900, y + 26, 'Ethnicity and religiosity', s, 'why many minority ethnic groups show higher religiosity'),
    'Two chains from Bruce. Cultural defence: a community under threat is united by religion. Cultural transition: religion helps migrants adjust, then declines as they integrate. Pryce, Modood and O’Beirne are used to evaluate them.',
    'Religion may defend a community, ease its transition, or become a source of identity.',
    '## 4. Social groups and religion');
}

// 08 Secularisation: census evidence and debate
{
  let s = '', y = 116;
  const bx = 120, bw = 700, scale = bw / 70;
  const bars = [['Christian', 59.3, 46.2], ['No religion', 25.2, 37.2]];
  s += label(30, y + 4, 'England and Wales census, % of people', { size: 17, weight: 700, fill: C.tealDark });
  y += 22;
  bars.forEach(([n, a, b], i) => {
    const yy = y + i * 116;
    s += tl(30, yy + 44, n === 'No religion' ? ['No', 'religion'] : ['Christian'], { size: 18, weight: 700 }, 22);
    s += `<rect x="${bx + 30}" y="${yy + 12}" width="${a * scale}" height="34" rx="4" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + t(bx + 40 + a * scale, yy + 36, `${a}% (2011)`, { size: 17, weight: 600 });
    s += `<rect x="${bx + 30}" y="${yy + 54}" width="${b * scale}" height="34" rx="4" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` + t(bx + 40 + b * scale, yy + 78, `${b}% (2021)`, { size: 17, weight: 600 });
  });
  y += 2 * 116 + 6;
  const r = cardRow(y, [
    { head: 'Explaining decline', body: ['**Weber:** rationalisation, disenchantment', '**Parsons:** structural differentiation', '**Berger:** diversity undermines the "sacred canopy"', '**Bruce:** technological worldview; diversity'], fill: C.teal },
    { head: 'Arguments against', body: ['**Davie:** believing without belonging', '**Lyon:** religion relocated into consumption and media', '**Stark and Bainbridge:** religious market theory', '**Norris and Inglehart:** existential security'], fill: C.cream },
  ], { size: 16 });
  s += r.svg; y += r.h + 18;
  const n = note(y, 'Common error', 'Do not use church attendance as the only measure. Discuss belief, belonging and identity.');
  s += n.svg; y += n.h;
  add('08-secularisation', svg(900, y + 26, 'Is Britain secularising?', s),
    'Bars show people in England and Wales describing themselves as Christian falling from 59.3% in 2011 to 46.2% in 2021, while no religion rose from 25.2% to 37.2%. Below, explanations of decline set against arguments that religion is changing rather than declining.',
    'Census figures show decline, but sociologists dispute what it means.',
    '## 5. Religion in the contemporary world: secularisation and globalisation');
}
