import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-sociology-7192-culture-and-identity';
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

// (01 Paper 2 structure is reused from the Beliefs in Society guide; see figures.html)

// 02 Conceptions of culture
{
  let s = '', y = 104;
  const groups = [
    ['Judged by artistic value', [
      { head: 'High culture', body: 'Works seen as having lasting artistic value; Arnold’s "the best which has been thought and said"; linked to elites.', fill: C.teal },
      { head: 'Low culture', body: 'Entertainment seen as having less artistic worth. The label itself is a value judgement.', fill: C.teal },
    ]],
    ['Who makes it, and for whom', [
      { head: 'Folk culture', body: 'Made by ordinary people in pre-industrial communities; passed on by word of mouth.', fill: C.cream },
      { head: 'Mass culture', body: 'Standardised, commercial, for large audiences in industrial societies.', fill: C.cream },
      { head: 'Popular culture', body: 'What most people enjoy; need not imply passive audiences.', fill: C.cream },
    ]],
    ['Group and scale', [
      { head: 'Subculture', body: 'A group sharing some norms and values that differ from the wider culture, such as a youth style.', fill: C.tealLight },
      { head: 'Global culture', body: 'Products, brands, images and styles circulating across many societies.', fill: C.tealLight },
    ]],
  ];
  groups.forEach(([g, cards]) => {
    const r = cardRow(y, cards, { x: 200, w: 670, gap: 12, size: 16, headSize: 18 });
    s += `<rect x="30" y="${y}" width="158" height="${r.h}" rx="12" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>`;
    const lp = para(0, 0, 130, g, { size: 17, weight: 700 });
    s += para(109, y + (r.h - lp.h) / 2 + 15, 130, g, { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark }).svg;
    s += r.svg; y += r.h + 14;
  });
  add('02-conceptions-of-culture', svg(900, y + 12, 'Seven conceptions of culture', s),
    'Seven conceptions of culture in three groups: high and low culture, judged by artistic value; folk, mass and popular culture, by who makes them and for whom; and subculture and global culture, by group and scale.',
    'Each conception of culture carries its own assumptions about value and audiences.',
    '## Conceptions of culture');
}

// 03 Mass culture debate
{
  add('03-mass-culture-debate', versusFig('Is mass culture a problem?', {
    left: { head: 'Mass culture theory', sub: 'commercial culture makes audiences passive', items: ['**Adorno and Horkheimer (Frankfurt School):** a "culture industry" produces standardised products that distract people from exploitation', '**Leavis:** mass culture threatens high culture'] },
    right: { head: 'Critics', sub: 'audiences choose and reinterpret', items: ['**Strinati (1995):** the theory is elitist and treats audiences as passive', '**Gans (1974):** different "taste cultures", none simply better', '**Postmodernists:** the high/popular boundary has broken down'] },
    foot: { head: 'Youth subcultures', text: 'The Birmingham CCCS saw them as symbolic resistance (Hall and Jefferson, 1976; Hebdige, 1979, on punk). Critics say this reads too much into style; later writers prefer loose "neo-tribes".' },
  }),
    'Mass culture theorists, Adorno, Horkheimer and Leavis, see commercial culture as making audiences passive. Critics Strinati, Gans and postmodernists argue audiences are active and that the boundary between high and popular culture has broken down.',
    'The debate turns on whether audiences are passive or active.',
    '## Conceptions of culture');
}

// 04 Socialisation
{
  let s = '', y = 104;
  const c = hchain(y, [
    { head: 'Primary socialisation', body: 'early childhood, mainly in the family', fill: C.teal },
    { head: 'Secondary socialisation', body: 'education, peer groups, the media, religion, the workplace', fill: C.cream },
  ], { ag: 60, size: 17 });
  s += c.svg; y += c.h + 10;
  s += label(450, y + 18, 'a lifelong process; agencies use rewards and sanctions to encourage conformity', { size: 16, italic: true, anchor: 'middle', fill: C.muted });
  y += 36;
  const r1 = cardRow(y, [
    { head: 'Functionalist', body: 'Passes on a value consensus. **Parsons:** the family is the main agency of primary socialisation.', fill: C.teal },
    { head: 'Marxist', body: 'Agencies, especially education and the media, pass on ruling-class ideology.', fill: C.teal },
  ], { size: 16, headSize: 18 });
  s += r1.svg; y += r1.h + 14;
  const r2 = cardRow(y, [
    { head: 'Feminist', body: '**Oakley:** manipulation and canalisation. **Sharpe:** girls’ priorities shifted from love and marriage (1970s) to careers (1990s).', fill: C.cream },
    { head: 'Interactionist', body: 'Socialisation is active. **Mead:** play, then games, then the "generalised other". **Cooley:** the looking-glass self.', fill: C.cream },
  ], { size: 16, headSize: 18 });
  s += r2.svg; y += r2.h + 16;
  const n = note(y, 'Evaluation', 'Wrong (1961) criticised the "oversocialised" view of people. Postmodernists say media and peers now compete with the family.');
  s += n.svg; y += n.h;
  add('04-socialisation', svg(900, y + 26, 'Socialisation: four perspectives', s),
    'Primary socialisation in the family leads to secondary socialisation through education, peers, media, religion and work. Functionalists, Marxists, feminists and interactionists each explain the process differently.',
    'Perspectives differ on what socialisation passes on and how active people are in it.',
    '## Socialisation and its agencies');
}

// 05 Socially caused vs socially constructed
{
  add('05-caused-constructed', versusFig('Identity: caused or constructed?', {
    left: { head: 'Socially caused', sub: 'structural view: functionalists, Marxists', items: ['Identity is shaped by social structures such as class, the economy and the family', '**Strength:** explains patterns, such as class still predicting life chances', '**Limit:** can make people seem passive'] },
    right: { head: 'Socially constructed', sub: 'action view: interactionists, postmodernists', items: ['**Goffman:** front stage and backstage; managing a "spoiled identity"', '**Giddens:** identity as a reflexive project', '**Hall:** "becoming" as well as "being"', '**Limit:** can ignore money, discrimination and power'] },
    foot: { head: 'Combining both', text: 'Jenkins: identity has an internal side (how we see ourselves) and an external side (how others label us), and each shapes the other.' },
  }),
    'The structural view sees identity caused by structures such as class and the family; the action view, from Goffman, Giddens and Hall, sees it constructed through interaction. Jenkins links internal and external sides of identity.',
    'Many sociologists combine structure and action when explaining identity.',
    '## The self, identity and difference: socially caused or socially constructed?');
}

// 06 Sources of identity
{
  add('06-sources-of-identity', cardsFig('Seven sources of identity', {
    ncol: 2, size: 16, headSize: 19,
    cards: [
      { head: 'Age', body: 'Age stages carry different meanings in different societies. **Featherstone and Hepworth:** the "mask of ageing".', fill: C.teal },
      { head: 'Disability', body: 'Medical model vs social model (**Oliver, 1990**): disabled by social barriers. **Shakespeare (2006):** impairment still matters.', fill: C.teal },
      { head: 'Ethnicity', body: '**Modood (1997):** diversity between groups. **Gilroy:** the "Black Atlantic". **Back (1996):** hybrid identities.', fill: C.cream },
      { head: 'Gender', body: '**Connell:** hegemonic masculinity. **Mac an Ghaill:** crisis of masculinity. **Butler:** gender is performative.', fill: C.cream },
      { head: 'Nationality', body: '**Anderson:** nations as "imagined communities". **Billig:** banal nationalism.', fill: C.tealLight },
      { head: 'Sexuality', body: '**Weeks:** sexual identities are historically specific. **Foucault**; heteronormativity.', fill: C.tealLight },
      { head: 'Social class', body: '**Bourdieu:** tastes mark class. **Skeggs:** respectability. **Pakulski and Waters:** class identity has faded.', fill: C.panel },
      { head: 'Exam tip', body: 'Answer on the source of identity the question names, and test postmodern claims of free choice against class, income or disability.', fill: C.mustard },
    ],
  }),
    'Cards for age, disability, ethnicity, gender, nationality, sexuality and class, each with its key concepts and sociologists, and a tip to answer on the source the question names.',
    'Each source of identity has its own key concepts and sociologists.',
    '## Identity and age, disability, ethnicity, gender, nationality, sexuality and class');
}

// 07 From production to consumption
{
  let s = '', y = 104;
  const c = hchain(y, [
    { head: 'Identity from production', body: 'tied to work and community; Coal is Our Life (1956)', fill: C.teal },
    { head: 'De-industrialisation', body: 'weakened such identities', fill: C.panel },
    { head: 'Identity from consumption', body: 'chosen through brands, styles and leisure (postmodernists)', fill: C.cream },
  ], { ag: 50, size: 17 });
  s += c.svg; y += c.h + 22;
  const r = cardRow(y, [
    { head: 'Supporting ideas', body: ['**Veblen (1899):** conspicuous consumption displays status', '**Pakulski and Waters:** consumption replaces production as the basis of identity'], fill: C.tealLight },
    { head: 'Limits', body: ['**Bauman (1998):** "flawed consumers" who cannot afford to take part are excluded', 'Choice is shaped by advertising and income'], fill: C.cream },
  ], { size: 16 });
  s += r.svg; y += r.h;
  add('07-production-consumption', svg(900, y + 26, 'From production to consumption', s),
    'A chain from identity based on work and community, through de-industrialisation, to identity built through consumption. Veblen and Pakulski and Waters support the shift; Bauman’s flawed consumers and the role of income show its limits.',
    'Consumer identities are chosen, but choice depends on money.',
    '## Identity, production, consumption and globalisation');
}

// 08 Hall: globalisation and national identity
{
  let s = '', y = 120;
  s += `<rect x="200" y="${y}" width="500" height="60" rx="14" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + t(450, y + 38, 'Globalisation', { size: 22, weight: 700, anchor: 'middle' });
  const cw = (840 - 32) / 3;
  [0, 1, 2].forEach((i) => s += arrow(450 + (i - 1) * 140, y + 64, 30 + i * (cw + 16) + cw / 2, y + 114));
  y += 122;
  const r = cardRow(y, [
    { head: 'Erosion', body: 'Through cultural homogenisation, e.g. Ritzer’s McDonaldisation (1993).', fill: C.cream },
    { head: 'Strengthening', body: 'National identity is reasserted as a form of resistance.', fill: C.teal },
    { head: 'New hybrid identities', body: 'Global media and migration can also create diasporic identities across borders.', fill: C.tealLight },
  ], { size: 17 });
  s += r.svg; y += r.h + 18;
  const n = note(y, 'Glocalisation', 'Global products adapted to local tastes.');
  s += n.svg; y += n.h;
  add('08-hall-globalisation', svg(900, y + 26, 'Three outcomes for national identity', s, 'Hall (1992)'),
    'Globalisation leads to three possible outcomes for national identities according to Hall: erosion through homogenisation, strengthening as resistance, and new hybrid identities.',
    'Hall saw globalisation eroding, strengthening or hybridising national identity.',
    '## Identity, production, consumption and globalisation');
}
