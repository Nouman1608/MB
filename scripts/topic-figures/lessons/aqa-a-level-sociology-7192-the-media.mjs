import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-sociology-7192-the-media';
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

// (Propaganda model and encoding/decoding figures are reused from the Cambridge 9699 media guides; see figures.html)

// 01 New media: optimists and pessimists
{
  add('01-new-media-debate', versusFig('New media: optimists and pessimists', {
    left: { head: 'Cultural optimists', sub: 'new media are democratic', items: ['**Jenkins (2006):** participatory culture; audiences make, remix and share', '**Castells (1996):** a network society organised around information', 'Users bypass traditional gatekeepers; citizen journalism'] },
    right: { head: 'Cultural pessimists', sub: 'control has moved, not disappeared', items: ['**Keen (2007):** amateur content lowers quality', '**Morozov (2011):** "slacktivism"', '**Zuboff (2019):** surveillance capitalism turns data into predictions', '**Pariser (2011):** the filter bubble', '**Marxists:** a few corporations own the platforms'] },
    foot: { head: 'Evaluation', text: 'The digital divide by class, age and place means participation and benefits are unequal. Pessimists may overstate passivity, and the filter bubble idea is debated.' },
  }),
    'Cultural optimists Jenkins and Castells see new media as participatory and democratic. Pessimists Keen, Morozov, Zuboff, Pariser and Marxists argue quality falls, activism weakens and a few platforms hold control.',
    'New media widen participation, but unequally and on platforms owned by a few.',
    '## The new media and their role in contemporary society');
}

// 02 Ownership and control
{
  add('02-ownership-control', compareFig('Who controls media content?', {
    cols: [{ head: 'Instrumentalist Marxism', fill: C.cream }, { head: 'Neo-Marxism (hegemonic)', fill: C.tealLight }, { head: 'Pluralism', fill: C.teal }],
    labelW: 130, size: 16,
    rows: [
      { label: 'Who controls', cells: ['Owners.', 'Dominant ideas, through journalists’ shared outlook.', 'Consumers, through market demand; the state regulates.'] },
      { label: 'How', cells: ['Owners spread ruling-class ideology and shape what is reported.', 'Mostly middle-class journalists under commercial pressure reflect mainstream ideas without orders.', 'Competing media must give audiences what they want. Ofcom regulates; the BBC must stay impartial.'] },
      { label: 'Evidence', cells: ['**Miliband (1969)**; Harold Evans leaving The Times (1982) after Murdoch bought it.', '**Glasgow University Media Group**, Bad News (1976).', 'Readers who dislike coverage switch titles.'] },
    ],
    foot: { head: 'Evaluation', text: 'Marxists reply that the market itself favours large firms and advertisers. The Leveson Inquiry (2011 to 2012) showed public concern about press power, and tech platforms are themselves highly concentrated.' },
  }),
    'A grid comparing instrumentalist Marxism, neo-Marxism and pluralism on who controls media content, how control works, and the evidence each uses.',
    'Owners, dominant ideas or audiences: three answers to who controls the media.',
    '## Ownership and control of the media');
}

// 03 Globalisation and popular culture
{
  add('03-global-culture', versusFig('Global media: imperialism or contra-flow?', {
    left: { head: 'Cultural imperialism', sub: 'one-way flow from the West', items: ['**Adorno and Horkheimer:** a "culture industry" keeps people passive', '**Schiller (1969):** global media spread American values and consumerism', 'Fits the global reach of US film and streaming'] },
    right: { head: 'Contra-flow and hybridity', sub: 'flows in more than one direction', items: ['**Thussu (2007):** contra-flows such as Indian film', 'Glocalisation: global and local forms mix', '**Postmodernists; Strinati:** more choice; high and popular culture blur', 'Reception studies: audiences are not passive'] },
    foot: { head: 'Neo-Marxist reply', text: 'Hybrid culture is still sold by transnational corporations.' },
  }),
    'Cultural imperialism, from Adorno and Horkheimer and Schiller, sees Western media spreading one way. Thussu’s contra-flows, glocalisation and postmodern views show flows in several directions and active audiences.',
    'Global media flows are more complex than a one-way spread of Western culture.',
    '## The media, globalisation and popular culture');
}

// 04 How news is made
{
  add('04-news-selection', flowFig('From events to the news agenda', {
    sub: 'news is a social product, not a mirror of events (Cohen and Young, 1973)',
    size: 16,
    steps: [
      { head: 'Gatekeeping', body: 'Deciding which stories get through. **White (1950):** one wire editor’s personal choices shaped what was printed.' },
      { head: 'News values', body: '**Galtung and Ruge (1965):** negativity, unexpectedness, elite nations and persons, personalisation. **Harcup and O’Neill:** celebrity, entertainment, shareability.' },
      { head: 'Practical factors', body: 'Deadlines, cost and reliance on press releases: "churnalism" (Davies, 2008).' },
      { head: 'Framing', body: 'Presenting a story from an angle, e.g. disputes framed to favour management (Glasgow University Media Group). Becker: the hierarchy of credibility.' },
      { head: 'Agenda setting', body: '**McCombs and Shaw (1972):** issues voters ranked important matched those the media emphasised.', fill: C.cream, edge: C.olive },
    ],
    foot: { head: 'Who benefits?', text: 'Marxists see ideological bias; pluralists say news values reflect audience interest; postmodernists note audiences now pick from many sources.' },
  }),
    'Five steps in making news: gatekeeping, news values, practical factors such as deadlines and press releases, framing, and agenda setting, which shapes the issues the public thinks about.',
    'Each stage filters and shapes what reaches the audience as news.',
    '## Selection and presentation of the news');
}

// 05 Representations of six groups
{
  add('05-representations', cardsFig('Media representations of six groups', {
    ncol: 2, size: 16, headSize: 19,
    cards: [
      { head: 'Gender', body: '**Tuchman (1978):** symbolic annihilation. **Mulvey (1975):** the male gaze. **Ferguson (1983):** cult of femininity. **Gauntlett (2002):** more varied images.', fill: C.teal },
      { head: 'Ethnicity', body: '**Van Dijk (1991):** minority ethnic groups often linked in news to crime, conflict or problems.', fill: C.teal },
      { head: 'Social class', body: '**Jones (2011):** the working class demonised as "chavs". **Jensen (2014):** "poverty porn" frames poverty as individual failure.', fill: C.cream },
      { head: 'Age', body: '**Cohen (1972):** mods and rockers as folk devils. **Pearson (1983):** fears about youth repeat over generations.', fill: C.cream },
      { head: 'Sexuality', body: '**Batchelor, Kitzinger and Burtney (2004):** few positive images of lesbian and gay teenagers.', fill: C.tealLight },
      { head: 'Disability', body: '**Barnes (1992):** stereotypes of the pitiable, the sinister and the "super cripple".', fill: C.tealLight },
    ],
    foot: { head: 'Evaluate the evidence', text: 'Many studies are dated, so say so. Content analysis shows what is in the media, not what audiences take from it.' },
  }),
    'Key studies of media representation for gender, ethnicity, social class, age, sexuality and disability, from Tuchman and Mulvey to van Dijk, Jones, Cohen and Barnes.',
    'Each group has its own body of evidence on stereotyping and absence.',
    '## Media representations');
}

// 06 Effects models: passive to active
{
  let s = '', y = 124;
  const r1 = cardRow(y, [
    { head: 'Hypodermic syringe', body: 'Messages "injected" into a passive audience. Bandura\u2019s Bobo doll experiments (early 1960s).', fill: C.cream },
    { head: 'Two-step flow', body: '**Katz and Lazarsfeld (1955):** opinion leaders interpret messages for others.', fill: C.cream },
    { head: 'Uses and gratifications', body: '**McQuail, Blumler and Brown (1972):** diversion, relationships, identity, surveillance.', fill: C.teal },
  ], { size: 16, headSize: 18 });
  s += r1.svg; y += r1.h + 14;
  const r2 = cardRow(y, [
    { head: 'Cultivation', body: '**Gerbner:** heavy TV viewing builds a "mean world" view.', fill: C.tealLight },
    { head: 'Cultural effects', body: '**Philo (1990):** people reproduced news themes about the miners\u2019 strike.', fill: C.tealLight },
    { head: 'Reception and postmodern', body: '**Hall (1973); Morley (1980):** different decodings. **Fiske; Baudrillard.**', fill: C.teal },
  ], { size: 16, headSize: 18 });
  s += r2.svg; y += r2.h + 18;
  const n = note(y, 'Models and methods', 'Laboratory experiments lack ecological validity; focus groups and interviews give rich but less generalisable data. Cultural effects researchers argue long-term influence still exists.');
  s += n.svg; y += n.h;
  add('06-effects-models', svg(900, y + 26, 'Models of media effects', s, 'the field has moved from passive to active views of the audience'),
    'Six models of media effects arranged from passive to active audiences: hypodermic syringe, cultivation, cultural effects, two-step flow, uses and gratifications, and reception and postmodern views.',
    'Effects models range from a passive audience to one that actively makes meaning.',
    '## The media and audiences');
}
