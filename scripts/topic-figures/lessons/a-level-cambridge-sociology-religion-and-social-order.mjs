import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'a-level-cambridge-sociology-religion-and-social-order';
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

// 01 Glock and Stark dimensions + measurement problems
{
  const cx = 250, cy = 340;
  const dims = ['Belief', 'Practice', 'Experience', 'Knowledge', 'Consequences'];
  let s = '';
  dims.forEach((d, i) => {
    const a = (-90 + i * 72) * Math.PI / 180, x = cx + 165 * Math.cos(a), y = cy + 165 * Math.sin(a);
    s += `<line x1="${cx + 70 * Math.cos(a)}" y1="${cy + 62 * Math.sin(a)}" x2="${x - 50 * Math.cos(a)}" y2="${y - 22 * Math.sin(a)}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += `<rect x="${x - 72}" y="${y - 22}" width="144" height="44" rx="22" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + label(x, y + 6, d, { size: 17, weight: 700, anchor: 'middle' });
  });
  s += `<ellipse cx="${cx}" cy="${cy}" rx="82" ry="64" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + label(cx, cy + 7, 'Religiosity', { size: 19, weight: 700, anchor: 'middle' });
  s += label(cx, 560, 'Glock and Stark (1968): five dimensions', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  const probs = [
    ['Attendance figures', 'depend on who counts; people may attend for social reasons'],
    ['Survey wording', '“belong to a religion?” versus “believe in God?” give different answers'],
    ['Social desirability', 'over-reporting in religious societies, under-reporting in secular ones'],
    ['Private belief', 'cannot be observed directly'],
  ];
  let y = 110;
  s += label(670, y + 14, 'Why measurement is hard', { size: 20, weight: 700, anchor: 'middle' });
  y += 34;
  for (const [h, b] of probs) {
    const bp = para(0, 0, 360, b, { size: 16 });
    const hh = 44 + bp.h + 6;
    s += `<rect x="480" y="${y}" width="390" height="${hh}" rx="12" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2.5"/><rect x="480" y="${y}" width="10" height="${hh}" rx="4" fill="${C.rust}"/>` +
      label(504, y + 30, h, { size: 18, weight: 700 }) + para(504, y + 54, 352, b, { size: 16, fill: C.muted }).svg;
    y += hh + 12;
  }
  add('01-measuring-religiosity',
    svg(900, Math.max(590, y + 14), 'Measuring religious belief', s),
    'Religiosity at the centre with five dimensions from Glock and Stark: belief, practice, experience, knowledge and consequences. Beside it, four reasons measurement is hard: attendance figures, survey wording, social desirability and private belief.',
    'Religiosity has several dimensions, and each is measured imperfectly.',
    '## Why is religious belief hard to measure?');
}

// 02 Religiosity by social group
add('02-religiosity-groups',
  cardsFig('Who is more religious, and why?', {
    cards: [
      { head: 'Gender', fill: C.teal, sub: 'Women often report higher belief and attendance', body: 'Socialisation into caring roles, greater involvement in child-rearing, the life course.' },
      { head: 'Age', fill: C.teal, sub: 'Older people often more religious in the West', body: '**Ageing:** approaching death, or **generation:** socialised in more religious times.' },
      { head: 'Ethnicity', fill: C.cream, sub: 'Minority and migrant groups often highly religious', body: 'Community support, **cultural defence** (Bruce, 1996) or easing **cultural transition**.' },
      { head: 'Class', fill: C.cream, sub: 'Different groups, different religions', body: 'Weber: the disadvantaged drawn to a **theodicy of disprivilege**; the middle class to world-affirming movements.' },
    ],
  }),
  'Four cards. Women often report higher belief because of socialisation, child-rearing and the life course; older people may be more religious through ageing or generation; minority ethnic groups through community, cultural defence and cultural transition; and class groups differ, with Weber’s theodicy of disprivilege for the disadvantaged.',
  'Religiosity varies by gender, age, ethnicity and class, each with its own explanations.',
  '## How does religiosity vary between social groups?');

// 03 Malinowski: lagoon vs ocean
{
  const scene = (x, title, sub, wave, ritual) => {
    let s = panel(x, 108, 410, 312) + label(x + 205, 146, title, { size: 22, weight: 700, anchor: 'middle' }) + label(x + 205, 172, sub, { size: 17, anchor: 'middle', fill: C.muted });
    s += `<rect x="${x + 20}" y="240" width="370" height="110" fill="${wave ? C.teal : C.tealLight}"/>`;
    s += wave ? path(`M${x + 20},240 q30,-34 60,0 q30,-34 60,0 q30,-34 60,0 q30,-34 60,0 q30,-34 60,0 q30,-34 60,0`, { stroke: C.tealDark, w: 4, fill: C.teal }) : `<line x1="${x + 20}" y1="240" x2="${x + 390}" y2="240" stroke="${C.tealDark}" stroke-width="3"/>`;
    s += `<path d="M${x + 150},${wave ? 220 : 234} L${x + 260},${wave ? 210 : 234} L${x + 245},${wave ? 240 : 256} L${x + 165},${wave ? 246 : 256} Z" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
    s += `<rect x="${x + 20}" y="362" width="370" height="44" rx="10" fill="${ritual ? C.mustard : C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + label(x + 205, 391, ritual ? 'Magic and ritual performed' : 'No ritual needed', { size: 18, weight: 700, anchor: 'middle' });
    return s;
  };
  const n = note(440, 'Function of religion', 'Religion helps people cope with uncertainty and life crises (Malinowski, Trobriand Islanders).');
  add('03-malinowski-fishing',
    svg(900, Math.round(440 + n.h + 24), 'Malinowski: religion and uncertainty',
      scene(30, 'Safe lagoon', 'predictable, low risk', false, false) + scene(460, 'Open ocean', 'dangerous, uncertain', true, true) + n.svg),
    'Two fishing scenes from Malinowski’s study of the Trobriand Islanders: in the safe lagoon no ritual is needed, but before dangerous open-ocean fishing they perform magic and ritual.',
    'Ritual appears where outcomes are dangerous and uncertain.',
    '## How does religion maintain social order? Functionalist views');
}

// 04 Functionalism vs Marxism
add('04-functionalism-marxism',
  compareFig('Religion and social order: two views', {
    labelW: 150, size: 16,
    cols: [{ head: 'Functionalism', fill: C.teal }, { head: 'Marxism', fill: C.cream }],
    rows: [
      { label: 'What religion does', cells: ['Creates collective conscience and social solidarity; gives core values and meaning; helps people cope', 'Acts as ideology legitimating inequality; “the opium of the people”; offers compensation in an afterlife'] },
      { label: 'Key ideas', cells: ['Durkheim (1912): the sacred symbolises society; Malinowski; Parsons; Bellah’s civil religion (1967)', 'Marx (1844); divine right of kings; caste; Maduro (1982): relative autonomy'] },
      { label: 'Strengths', cells: ['Explains the persistence of ritual and religion’s role in crises and national ceremonies', 'Explains religion’s link to power and inequality'] },
      { label: 'Limitations', cells: ['Ignores conflict between and within religions; struggles with diversity; based on small-scale societies', 'Ignores religion’s role in social change; assumes false consciousness; less relevant where religion has declined'] },
    ],
  }),
  'A comparison grid. Functionalists say religion creates solidarity, values and coping; Marxists say it is ideology that legitimates inequality and offers compensation. Each view’s key thinkers, strengths and limitations are listed.',
  'Both see religion as conservative: functionalists call it integration, Marxists call it ideology.',
  '## Does religion support oppression? Marxist views');

// 05 Weber vs Tawney/Marxists: direction of causation
{
  const r1 = hchain(160, [
    { head: 'Calvinist ideas', body: 'predestination, the calling, ascetic self-denial', fill: C.teal },
    { head: 'Disciplined work ethic', body: 'and reinvestment of profit', fill: C.panel },
    { head: 'Rise of capitalism', body: 'in Northern Europe', fill: C.mustard },
  ], { ag: 50 });
  const y2 = 160 + r1.h + 90;
  const r2 = hchain(y2, [
    { head: 'Economic change', body: 'changes in the mode of production', fill: C.mustard },
    { head: 'Capitalism develops', fill: C.panel },
    { head: 'Protestantism adapts', body: 'religion follows', fill: C.teal },
  ], { ag: 50 });
  const n = note(y2 + r2.h + 24, 'Further criticism', 'Capitalism developed in some Catholic areas and not in some Calvinist ones.');
  add('05-protestant-ethic',
    svg(900, Math.round(y2 + r2.h + 24 + n.h + 24), 'Did religion cause capitalism?',
      label(30, 140, 'Weber, The Protestant Ethic (1905): religion causes economic change', { size: 19, weight: 700, fill: C.tealDark }) + r1.svg +
      label(30, y2 - 20, 'Tawney (1926) and Marxists: economic change comes first', { size: 19, weight: 700, fill: C.olive }) + r2.svg + n.svg),
    'Top chain, Weber: Calvinist ideas produced a disciplined work ethic and reinvestment, which helped capitalism rise in Northern Europe. Bottom chain, Tawney and Marxists: economic change came first and Protestantism adapted to it.',
    'Weber and his critics disagree about which came first: religious ideas or economic change.',
    '## Can religion cause social change?');
}

// 06 Religion as a force for change: three cases
add('06-religion-and-change',
  cardsFig('Religion as a force for change', {
    ncol: 3, size: 16, headSize: 19,
    cards: [
      { head: 'Liberation theology', fill: C.teal, sub: 'Latin America, from the 1960s', body: ['Catholic clergy committed to the poor', 'Gutiérrez (1971)', 'Archbishop Romero assassinated (1980)', 'Religion opposing an unjust order'] },
      { head: 'Evangelicals in US politics', fill: C.cream, sub: 'Moral Majority, 1979', body: ['Founded by Jerry Falwell', 'Mobilised conservative Christians on abortion and school prayer', 'Bruce (2003): attention but limited policy change'] },
      { head: 'Iranian revolution', fill: C.tealLight, sub: 'Ayatollah Khomeini, 1979', body: ['Mass movement overthrew the Shah', 'Established an Islamic republic', 'Religion as a revolutionary force'] },
    ],
    foot: { head: 'A challenge to Marx', text: 'These cases show religion can oppose the existing order rather than only legitimate it.' },
  }),
  'Three case studies of religion and change: liberation theology in Latin America, the Moral Majority in US politics from 1979, and the 1979 Iranian revolution led by Ayatollah Khomeini.',
  'Religion can drive change as well as maintain order, though its success varies.',
  '## Can religion cause social change?');
