import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'a-level-cambridge-sociology-influence-of-religion';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- Local layout helpers (sociology figures: wrapped text, tables, flows, cards) ----
const esc = (s) => String(s).replace(/&(?![a-z]+;|#\d+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const CW = 0.505, CWB = 0.555; // average glyph width / font size for Inter (regular, bold)
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

// 01 Secularisation thesis + evidence for decline
{
  const forces = hchain(108, [{ head: 'Industrialisation' }, { head: 'Urbanisation' }, { head: 'Science' }, { head: 'Education' }].map((x) => ({ ...x, fill: C.tealLight })), { ag: 16, arrows: false });
  const y1 = 108 + forces.h;
  const fy = y1 + 70;
  let s = forces.svg + [135, 345, 555, 765].map((x) => arrow(x, y1 + 4, 450 + (x - 450) * 0.25, fy - 4, { w: 3 })).join('');
  s += `<rect x="150" y="${fy}" width="600" height="80" rx="14" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` +
    label(450, fy + 34, 'Religious thinking, practice and institutions', { size: 20, weight: 700, anchor: 'middle' }) + label(450, fy + 62, 'lose social significance (Wilson, 1966)', { size: 18, anchor: 'middle' });
  const ey = fy + 146;
  s += label(450, ey - 20, 'Evidence for decline', { size: 21, weight: 700, anchor: 'middle' });
  const r1 = cardRow(ey, [
    { head: 'Practice', fill: C.cream, body: 'Falling church attendance and membership in much of Western Europe.' },
    { head: 'Belief', fill: C.cream, body: 'Fewer say they believe in God or identify with a religion, especially the young.' },
    { head: 'Institutions', fill: C.cream, body: 'Fewer clergy, religious marriages and baptisms in many Western societies.' },
  ]);
  const r2 = cardRow(ey + r1.h + 14, [
    { head: 'Generational decline', fill: C.cream, body: 'Bruce (2002): each generation is less religious than its parents.' },
    { head: 'Disengagement', fill: C.cream, body: 'The state, not the church, now runs education, welfare and law.' },
  ]);
  add('01-secularisation-thesis',
    svg(900, Math.round(ey + r1.h + 14 + r2.h + 26), 'The secularisation thesis',
      s + r1.svg + r2.svg),
    'Industrialisation, urbanisation, science and education lead to religious thinking, practice and institutions losing social significance. Five kinds of evidence for decline: practice, belief, institutions, generational decline and disengagement of religion from society.',
    'Secularisation theory links modernisation to religion’s loss of social significance.',
    '## What is the secularisation thesis?');
}

// 02 Rationalisation and counter-arguments
add('02-rationalisation',
  versusFig('Is rationalisation causing decline?', {
    left: { head: 'Rationalisation weakens religion', items: [
      '**Weber:** rational, scientific thinking leads to **disenchantment**; science replaces magic and the supernatural',
      '**Berger (1967):** pluralism removed the single “sacred canopy”, making belief less certain',
      '**Bruce:** technology gives practical control, reducing reliance on religion'] },
    right: { head: 'Counter-arguments', items: [
      'Berger later revised his view: much of the world is as religious as ever (“desecularisation”, 1999)',
      'Science and religion can coexist',
      'Rationalisation has not removed interest in spirituality'] },
  }),
  'Left: Weber’s disenchantment, Berger’s loss of the sacred canopy and Bruce’s point about technology argue rationalisation weakens religion. Right: Berger’s later desecularisation view, the coexistence of science and religion, and continuing interest in spirituality.',
  'Even Berger changed his mind: rationalisation has not removed religion.',
  '## Is rationalisation causing decline?');

// 03 Has religion lost social significance? arguments against
add('03-not-secularised',
  cardsFig('Has religion really lost its significance?', {
    sub: 'Four arguments that it has not',
    cards: [
      { head: 'Believing without belonging', fill: C.teal, sub: 'Davie (1994)', body: 'Belief persists even where attendance declines.' },
      { head: 'Religious market theory', fill: C.teal, sub: 'Stark and Bainbridge (1985)', body: 'Demand is constant; decline in one organisation is matched by growth elsewhere, and competition revitalises religion (the USA).' },
      { head: 'Existential security', fill: C.teal, sub: 'Norris and Inglehart (2004)', body: 'Religion declines where life is secure and persists where it is insecure; high birth rates make the world more religious.' },
      { head: 'Public religion', fill: C.teal, sub: 'Casanova (1994)', body: '**Deprivatisation**: faiths re-entered politics.' },
    ],
    foot: { head: 'Problems of measurement', text: 'Definitions and data shape conclusions; a “golden age” of past religiosity may be a myth.' },
  }),
  'Four arguments against secularisation: Davie’s believing without belonging, Stark and Bainbridge’s religious market theory, Norris and Inglehart’s existential security, and Casanova’s deprivatisation of religion. A note warns that definitions and data shape conclusions.',
  'Belief, competition, insecurity and politics all keep religion significant.',
  '## Has religion lost its social significance?');

// 04 Feminist explanations of gender inequality in religion
add('04-feminism-religion',
  cardsFig('Why is religion patriarchal?', {
    ncol: 3, size: 16, headSize: 18,
    cards: [
      { head: 'Male leadership', fill: C.cream, body: 'Male-dominated organisations and leadership.' },
      { head: 'Sacred texts', fill: C.cream, body: 'Written and interpreted by men.' },
      { head: 'Female impurity', fill: C.cream, body: 'Ideas of impurity restrict women’s participation.' },
      { head: 'Religious laws', fill: C.cream, body: 'Rules on marriage, divorce and dress.' },
      { head: 'History', fill: C.cream, body: 'Armstrong (1993): early religions often had female deities before male-dominated monotheism.' },
      { head: 'False compensation', fill: C.cream, body: 'de Beauvoir (1949): religion compensates women for second-class status.' },
    ],
    foot: { head: 'Feminists disagree', text: ['**Radical feminists:** religion is fundamentally patriarchal', '**Liberal feminists:** reform is possible', '**El Saadawi (1980):** patriarchal interpretations, not religion itself, oppress women'] },
  }),
  'Six explanations of gender inequality in religion: male leadership, sacred texts written by men, ideas of female impurity, religious laws on marriage, divorce and dress, Armstrong’s history of female deities, and de Beauvoir’s false compensation. Radical feminists, liberal feminists and El Saadawi differ on whether religion itself is the problem.',
  'Feminists locate patriarchy in leaders, texts, rules and interpretation.',
  '## What do feminists say about religion?');

// 05 Moves towards equality and benefits to women
{
  const tl0 = 200, tx = (y) => 130 + ((y - 1994) / (2015 - 1994)) * 230;
  let s = label(60, 132, 'Change in organisations', { size: 21, weight: 700 }) +
    `<line x1="70" y1="${tl0}" x2="430" y2="${tl0}" stroke="${C.ink}" stroke-width="4"/>` +
    [[1994, 'first women priests'], [2015, 'first woman bishop']].map(([y, h]) => `<circle cx="${tx(y)}" cy="${tl0}" r="12" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + label(tx(y), tl0 - 22, String(y), { size: 19, weight: 700, anchor: 'middle' }) + label(tx(y), tl0 + 36, h, { size: 16, anchor: 'middle' })).join('') +
    label(245, tl0 + 66, 'Church of England', { size: 16, anchor: 'middle', fill: C.muted, italic: true }) +
    bullets(60, tl0 + 112, 400, ['Women serve as rabbis in Reform Judaism', 'Female leadership in many NRMs and New Age groups'], { size: 17 }).svg;
  s = panel(30, 104, 440, 300) + s;
  const r = headPanel(490, 104, 380, 300, 'Can religion benefit women?', { fill: C.teal, size: 20 });
  s += r.svg + bullets(510, 104 + r.hh + 34, 340, [
    '**Watson (1994):** some Muslim women chose the veil to express identity and avoid the male gaze',
    'Participation can bring community, status and support',
    '**Woodhead:** women use religion for their own ends (“religious forms of feminism”)'], { size: 17, gap: 12 }).svg;
  const n = note(424, 'Evaluation', 'Change is uneven between and within faiths, and choice and constraint are difficult to separate.');
  add('05-towards-equality',
    svg(900, Math.round(424 + n.h + 24), 'Towards equality? Religion and women', s + n.svg),
    'Left: the Church of England ordained its first women priests in 1994 and its first woman bishop in 2015; Reform Judaism has women rabbis and many NRMs have female leaders. Right: Watson’s study of veiling, community and support, and Woodhead’s religious forms of feminism. Change is uneven.',
    'Religious organisations are changing unevenly, and some women use religion for their own ends.',
    '## Are religions moving towards gender equality, and can religion benefit women?');
}

// 06 Decline, change of form or revival?
{
  const top = `<rect x="300" y="110" width="300" height="70" rx="14" fill="${C.ink}"/>` + label(450, 153, 'Congregational religion', { size: 20, weight: 700, anchor: 'middle', fill: '#ffffff' });
  const r = cardRow(260, [
    { head: 'Decline', fill: C.cream, sub: 'Secularisation', body: 'Religion loses significance as attendance and belief fall.' },
    { head: 'Change of form', fill: C.tealLight, sub: 'Privatisation and choice', body: ['**Privatised:** belief practised at home or alone', '**Spiritual shopping:** pick-and-mix beliefs (Lyon, 2000)', '**Pilgrims** and **converts** (Hervieu-Léger)'] },
    { head: 'Revival', fill: C.teal, sub: 'Resacralisation', body: 'The sacred returns through NRMs, New Age, charismatic and Pentecostal growth and fundamentalism.' },
  ]);
  const arr = [165, 450, 735].map((x) => arrow(450 + (x - 450) * 0.3, 184, x, 254, { w: 3.5 })).join('');
  const n = note(260 + r.h + 20, 'The Kendal Project (Heelas and Woodhead, 2005)', 'Holistic spirituality grew in a small English town while congregational religion declined, but not enough to replace it.');
  add('06-decline-change-revival',
    svg(900, Math.round(260 + r.h + 20 + n.h + 24), 'Declining, changing or reviving?', top + arr + r.svg + n.svg),
    'From congregational religion, three paths: decline through secularisation, a change of form through privatised religion and spiritual shopping, or revival through resacralisation. The Kendal Project found holistic spirituality growing but not replacing congregational religion.',
    'Post-modern theorists argue religion is changing form, not simply disappearing.',
    '## Is religion becoming privatised and chosen?');
}

// 07 Wallis typology of NRMs
{
  const sp = arrow(80, 140, 840, 140, { w: 4 }) + arrow(830, 140, 70, 140, { w: 4 }) +
    label(60, 124, 'turns away from the world', { size: 17, weight: 600, fill: C.muted }) + label(840, 124, 'embraces the world', { size: 17, weight: 600, fill: C.muted, anchor: 'end' });
  const r = cardRow(170, [
    { head: 'World-rejecting', fill: C.cream, body: 'Separate from society.' },
    { head: 'World-accommodating', fill: C.tealLight, body: 'Enrich religious life.' },
    { head: 'World-affirming', fill: C.teal, body: 'Offer techniques for success.' },
  ], { size: 19, headSize: 20 });
  const n = note(170 + r.h + 22, 'Why do NRMs grow?', ['Relative deprivation', 'Rapid social change', 'A search for meaning']);
  const n2 = note(170 + r.h + 22 + n.h + 14, 'New Age', 'Beliefs focused on the self, spirituality and wellbeing: Heelas’s “spirituality of life” suited to consumer societies.', { bg: C.panel, edgeC: C.panelEdge });
  add('07-wallis-nrms',
    svg(900, Math.round(170 + r.h + 22 + n.h + 14 + n2.h + 24), 'Wallis’s three types of new religious movement', sp + r.svg + n.svg + n2.svg),
    'Wallis classified new religious movements on a line from world-rejecting (separating from society) through world-accommodating (enriching religious life) to world-affirming (offering techniques for success). Their growth may reflect relative deprivation, rapid social change or a search for meaning; New Age beliefs focus on the self and wellbeing.',
    'NRMs differ in how they relate to the wider world.',
    '## Why do NRMs, New Age ideas and fundamentalism matter?');
}
