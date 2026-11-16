import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-a-level-sociology-9690-people-and-development';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- Local layout helpers (sociology figures: wrapped text, tables, flows, cards) ----
const esc = (s) => String(s).replace(/&(?![a-z]+;|#\d+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const CW = 0.525, CWB = 0.575; // average glyph width / font size for Inter (regular, bold)
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
    const bodies = row.map((c) => (c.sub ? para(0, 0, cw - 32, c.sub, { size: size, italic: true }).h + 8 : 0) + block(0, 0, cw - 32, c.body, { size }).h);
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

// 01 Why Europe industrialised first
{
  add('01-why-europe', compareFig('Why did Europe industrialise first?', {
    cols: [{ head: 'Explanation', fill: C.tealLight }, { head: 'Evaluation', fill: C.cream }],
    labelW: 200, size: 16,
    rows: [
      { label: 'Modernisation (Rostow, 1960)', fill: C.teal, cells: ['Five stages from traditional society through "take-off" to high mass consumption; Europe’s values favoured enterprise and science.', 'Ethnocentric: assumes all societies must copy the Western route.'] },
      { label: 'Protestant work ethic (Weber, 1905)', fill: C.teal, cells: ['Calvinist belief in predestination drove disciplined work and reinvestment: the "spirit of capitalism".', 'Catholic northern Italy had early capitalism; East Asian growth shows other values can support it.'] },
      { label: 'Dependency (Frank; Rodney, 1972)', fill: C.cream, cells: ['The metropolis grew by extracting surplus from satellites; Europe underdeveloped Africa.', 'Struggles to explain fast growth in South Korea and Singapore.'] },
      { label: 'Enslavement (Williams, 1944)', fill: C.cream, cells: ['Profits from slavery and the plantation trade helped finance British industrialisation.', 'Used to argue that value-based accounts such as Weber\u2019s leave out exploitation.'] },
    ],
    foot: { head: 'Pomeranz (2000): the Great Divergence', text: 'Advanced regions of China and Europe were broadly comparable around 1750; Britain’s lead owed much to cheap coal and colonial land and resources. Braudel’s longue durée stresses slow change over centuries.' },
  }),
    'A grid of four explanations for why Europe industrialised first: Rostow’s modernisation stages, Weber’s Protestant work ethic, dependency theory from Frank and Rodney, and Williams on slavery, each with a criticism. Pomeranz stresses coal and colonial resources.',
    'Values, exploitation and resources offer competing accounts of the Great Divergence.',
    '## 3.2.1.1 The Great Divergence');
}

// 02 Imperialism to neocolonialism
{
  let s = '', y = 120;
  const c = hchain(y, [
    { head: 'Exploration and trade', body: 'European states build empires', fill: C.cream },
    { head: 'Enslavement', body: 'Atlantic trade forced millions to work plantations in the Americas', fill: C.cream },
    { head: 'Colonialism', body: 'political control plus extraction of raw materials', fill: C.teal },
    { head: 'Neocolonialism', body: 'control through debt, trade terms and investment after independence (Nkrumah, 1965)', fill: C.mustard },
  ], { ag: 36, size: 16 });
  s += c.svg; y += c.h + 18;
  s += arrow(60, y + 10, 840, y + 10, { color: C.olive, marker: 'ahO', w: 4 });
  s += label(450, y + 40, 'from direct rule to indirect control', { size: 17, weight: 600, fill: C.olive, anchor: 'middle' });
  y += 50;
  add('02-imperialism', svg(900, y + 26, 'Imperialism and its legacies', s),
    'A sequence from European exploration and trade, through the Atlantic trade in enslaved Africans and colonial rule with extraction of raw materials, to neocolonial control through debt, trade terms and investment after independence.',
    'Control shifted from direct rule to debt, trade and investment.',
    '## 3.2.1.1 The Great Divergence');
}

// 03 Three views of globalisation
{
  add('03-globalisation-views', cardsFig('Three views of globalisation', {
    ncol: 3, size: 16,
    cards: [
      { head: 'Neo-liberal (positive globalist)', sub: 'Ohmae (1990)', body: 'Free markets and open borders spread prosperity and weaken the nation state. Falls in extreme poverty in China and India.', fill: C.teal },
      { head: 'Negative globalist', sub: 'Bello; Polanyi (1944)', body: 'Deepens inequality and serves rich states and TNCs. Bello: "deglobalisation". Polanyi: markets "disembed" the economy; the double movement.', fill: C.cream },
      { head: 'Transformationalist', sub: 'Held et al. (1999)', body: 'Real but reshapes, rather than ends, states and cultures; outcomes are mixed. Glocalisation (Robertson).', fill: C.tealLight },
    ],
    foot: { head: 'Say which type', text: 'Economic globalisation is the most advanced, political is uneven, and cultural flows run in several directions (Bollywood, K-pop, anime).' },
  }),
    'Neo-liberals such as Ohmae see globalisation spreading prosperity; negative globalists Bello and Polanyi see it deepening inequality; transformationalists such as Held see real but mixed change, including glocalisation.',
    'Each view links globalisation to different winners and losers.',
    '## 3.2.1.2 What is meant by globalisation?');
}

// 04 Actors in globalisation
{
  add('04-actors', cardsFig('Who is involved in globalisation?', {
    ncol: 3, size: 16, headSize: 18,
    cards: [
      { head: 'Nation states', body: 'More developed states shape trade rules; less developed states compete for investment, or direct development (China, Vietnam).', fill: C.teal },
      { head: 'TNCs', body: 'Investment, jobs, technology; critics: profit repatriation, tax avoidance, weak labour protection.', fill: C.teal },
      { head: 'Transnational and UN agencies', body: 'World Bank, IMF (structural adjustment), WTO; UNICEF, WHO, UNHCR; the SDGs (2015).', fill: C.teal },
      { head: 'NGOs', body: 'Deliver aid and lobby; flexible, but may answer to Northern donors.', fill: C.cream },
      { head: 'Grassroots movements', body: 'Action from below: Chipko (India, 1970s); Maathai’s Green Belt Movement (Kenya).', fill: C.cream },
      { head: 'Indigenous peoples', body: 'Affected by mining, dams and logging; UN Declaration on their rights (2007).', fill: C.cream },
    ],
  }),
    'Six groups involved in globalisation: nation states, TNCs, transnational and UN agencies, NGOs, grassroots movements and indigenous peoples, each with its role and an example or criticism.',
    'Power in globalisation runs from top-down agencies to grassroots action.',
    '## 3.2.1.3 Who is involved in globalisation?');
}

// 05 Aid debate
{
  add('05-aid-debate', versusFig('Does development aid help?', {
    left: { head: 'For', items: ['**Sachs (2005):** the poorest countries are stuck in a poverty trap', 'A targeted "big push" of aid for health, farming and infrastructure can lift them out'] },
    right: { head: 'Against', items: ['**Moyo (2009):** aid breeds dependency and corruption', '**Easterly:** top-down plans ignore local knowledge', '**Marxists:** tied aid is a tool of donor interests'] },
    foot: { head: 'Evaluation', text: 'The type of aid matters: targeted health aid has stronger support than large budget transfers.' },
  }),
    'Sachs argues a targeted big push of aid can break a poverty trap; Moyo, Easterly and Marxists argue aid breeds dependency, ignores local knowledge or serves donors.',
    'The debate turns on what kind of aid, not aid in general.',
    '## 3.2.1.3 Who is involved in globalisation?');
}

// 06 Push-pull and intervening obstacles
{
  let s = '', y = 110;
  const w = 250;
  const p1 = headPanel(30, y, w, 260, 'Push factors', { fill: C.cream, size: 20, hh: 74 });
  s += p1.svg + bullets(48, y + p1.hh + 32, w - 36, ['Poverty', 'Conflict', 'Persecution', 'Climate change: drought, sea-level rise, storms'], { size: 16, dot: C.olive }).svg;
  const p2 = headPanel(325, y, w, 260, 'Intervening obstacles', { fill: C.mustard, size: 20, hh: 74 });
  s += p2.svg + bullets(343, y + p2.hh + 32, w - 36, ['Distance', 'Cost', 'Law: borders, passports and visas'], { size: 16 }).svg;
  const p3 = headPanel(620, y, w, 260, 'Pull factors', { fill: C.teal, size: 20, hh: 74 });
  s += p3.svg + bullets(638, y + p3.hh + 32, w - 36, ['Jobs', 'Safety', 'Family'], { size: 16 }).svg;
  s += arrow(284, y + 130, 320, y + 130) + arrow(579, y + 130, 615, y + 130);
  s += label(155, y + 288, 'origin', { size: 17, weight: 700, anchor: 'middle', fill: C.olive }) + label(745, y + 288, 'destination', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += label(450, y + 288, 'Lee (1966)', { size: 17, italic: true, anchor: 'middle', fill: C.muted });
  y += 312;
  const n = note(y, 'Criticisms', ['Treats migrants as rational individuals', 'Ignores structures: colonial ties, labour recruitment, state schemes and visa rules', 'People follow relatives, so flows run along diaspora networks']);
  s += n.svg; y += n.h;
  add('06-push-pull', svg(900, y + 26, 'Why people migrate', s),
    'Lee’s model: push factors at the origin such as poverty, conflict, persecution and climate change; intervening obstacles such as distance, cost and border law; and pull factors at the destination such as jobs, safety and family.',
    'Push, pull and intervening obstacles, but structures and networks also matter.',
    '## 3.2.1.4 Migration and diasporas');
}

// 07 Obstacles to progress
{
  add('07-obstacles', compareFig('Obstacles to progress: three views', {
    cols: [{ head: 'Modernisation', fill: C.teal }, { head: 'Marxist', fill: C.cream }, { head: 'Feminist', fill: C.tealLight }],
    labelW: 120, size: 16,
    rows: [
      { label: 'Main obstacle', cells: ['Traditional values and practices: fatalism, kinship obligations, ascribed status.', 'Capitalism and globalisation keep periphery nations poor.', 'Globalisation can reinforce patriarchy.'] },
      { label: 'Key ideas', cells: ['Rostow’s route to take-off.', '**Frank:** satellites grew most when ties were weakest. **Wallerstein (1974):** core, semi-periphery, periphery. **Bello:** WTO and IMF rules.', '**Mies (1986):** housewifisation. **Elson and Pearson (1981):** "nimble fingers". **Hochschild:** global care chains.'] },
      { label: 'Criticism', cells: ['Blames poor societies for their own poverty.', 'Struggles to explain fast-growing former colonies.', 'Factory jobs can raise women’s independence.'] },
    ],
    foot: { head: 'Other obstacles in 3.2.1.5', text: 'Persistent health and education gaps; the climate crisis (Brundtland, 1987: sustainable development); wars and Collier’s conflict trap; Kaldor’s "new wars".' },
  }),
    'A grid comparing modernisation, Marxist and feminist views of obstacles to development: the main obstacle each identifies, key thinkers such as Frank, Wallerstein, Mies and Hochschild, and a criticism of each.',
    'Each perspective places the obstacle somewhere different: values, capitalism or patriarchy.',
    '## 3.2.1.5 Obstacles to progress');
}
