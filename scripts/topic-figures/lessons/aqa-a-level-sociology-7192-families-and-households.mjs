import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-sociology-7192-families-and-households';
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

// 02 Functionalist and Marxist views of the family
{
  add('02-functionalist-marxist', compareFig('Who does the family serve?', {
    cols: [{ head: 'Functionalism', fill: C.teal }, { head: 'Marxism', fill: C.cream }],
    labelW: 150, size: 16,
    rows: [
      { label: 'Main claim', cells: ['The family performs functions for society and fits the needs of the economy.', 'The family serves capitalism and private property.'] },
      { label: 'Key studies', cells: [['**Murdock (1949):** 250 societies; four functions: sexual, reproductive, economic, educational', '**Parsons (1955):** two "irreducible" functions: primary socialisation and stabilising adult personalities'], ['**Engels (1884):** monogamy lets men know their heirs', '**Zaretsky (1976):** an illusory "refuge" from alienating work; a unit of consumption']] },
      { label: 'Criticisms', cells: [['Feminists: ignores who does the work; "functions" can mean exploitation for women', 'Laslett; Young and Willmott (below)'], ['Ignores family diversity', 'Feminists: gender, not class, is the main inequality']] },
    ],
  }),
    'A grid comparing functionalist and Marxist views of the family: their main claims, key studies from Murdock, Parsons, Engels and Zaretsky, and the criticisms made of each.',
    'Functionalists see the family serving society; Marxists see it serving capitalism.',
    '## 1. The family, social structure, the economy and the state');
}

// 03 Parsons' functional fit and Laslett's challenge
{
  let s = '', y = 120;
  s += label(30, y, 'Parsons: the family follows the economy', { size: 20, weight: 700, fill: C.tealDark });
  y += 16;
  const a = hchain(y, [
    { head: 'Industrial society', fill: C.panel },
    { head: 'Needs a mobile workforce', body: 'geographically and socially', fill: C.panel },
    { head: 'Isolated nuclear family', body: 'replaces the extended family', fill: C.teal },
  ], { ag: 50, size: 16 });
  s += a.svg; y += a.h + 40;
  s += label(30, y, 'Laslett: cause and effect may be reversed', { size: 20, weight: 700, fill: C.olive });
  y += 16;
  const b = hchain(y, [
    { head: 'Nuclear households', body: 'already common in pre-industrial England', fill: C.cream },
    { head: 'May have helped', body: 'industrialisation happen', fill: C.panel },
    { head: 'Industrial society', fill: C.panel },
  ], { ag: 50, size: 16 });
  s += b.svg; y += b.h + 20;
  const n = note(y, 'Also against Parsons', 'Young and Willmott (1957) found strong extended kin networks in Bethnal Green, an industrial city.');
  s += n.svg; y += n.h;
  add('03-functional-fit', svg(900, y + 26, 'Functional fit: which came first?', s),
    'Top chain: for Parsons, industrial society needs a mobile workforce, so the isolated nuclear family replaces the extended family. Bottom chain: Laslett found nuclear households already common before industrialisation, suggesting they may have helped it happen.',
    'Laslett’s evidence suggests Parsons may reverse cause and effect.',
    '## 1. The family, social structure, the economy and the state');
}

// 04 Explaining divorce
{
  let s = '', y = 104;
  const causes = [
    ['Legal change', 'Divorce Reform Act 1969 (in force 1971); no-fault divorce from 6 April 2022'],
    ['Secularisation and declining stigma', 'less social pressure to stay married'],
    ['Rising expectations', 'Fletcher (1966): less willing to accept an unhappy marriage'],
    ['Women’s financial independence', 'women can afford to leave'],
    ['Inequality inside marriage', 'feminists: divorce partly a response to it'],
  ];
  const bw = 520, bh = 90, g = 12;
  causes.forEach(([h, b], i) => {
    const yy = y + i * (bh + g);
    s += `<rect x="30" y="${yy}" width="${bw}" height="${bh}" rx="12" fill="${i < 2 ? C.panel : i < 4 ? C.tealLight : C.cream}" stroke="${C.panelEdge}" stroke-width="2.5"/>`;
    const dp = para(0, 0, bw - 36, b, { size: 16 }); const top = yy + (bh - (26 + dp.h)) / 2 + 16;
    s += t(48, top, esc(h), { size: 18, weight: 700 }) + para(48, top + 26, bw - 36, b, { size: 16, fill: C.muted }).svg;
    s += path(`M${30 + bw + 4},${yy + bh / 2} C${630},${yy + bh / 2} ${620},${y + 2.5 * (bh + g)} ${662},${y + 2.5 * (bh + g) - g / 2}`, { stroke: C.ink, w: 2.5, extra: 'marker-end="url(#ah)"' });
  });
  const cy = y + 2.5 * (bh + g) - g / 2;
  s += `<rect x="670" y="${cy - 60}" width="200" height="120" rx="14" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + tl(770, cy - 6, ['More', 'divorce'], { size: 23, weight: 700, anchor: 'middle' }, 30);
  y += 5 * (bh + g) + 8;
  const n = note(y, 'Recent figures (ONS)', '80,057 divorces in England and Wales in 2022, the lowest since 1971. In 2019, 62% of opposite-sex divorces were petitioned by wives.');
  s += n.svg; y += n.h;
  add('04-explaining-divorce', svg(900, y + 26, 'Why did divorce rise?', s),
    'Five explanations lead to more divorce: legal change, secularisation and declining stigma, rising expectations of marriage, women’s financial independence, and inequality inside marriage. A note gives the 2022 total of 80,057 divorces.',
    'Legal, cultural and economic changes all help explain rising divorce.',
    '## 2. Marriage, cohabitation, divorce, childbearing, the life course and diversity');
}

// 05 Views of family diversity
{
  add('05-family-diversity', compareFig('How should we read family diversity?', {
    cols: [{ head: 'New Right', fill: C.cream }, { head: 'Chester (1985)', fill: C.tealLight }, { head: 'Diversity and choice', fill: C.teal }],
    labelW: 0, size: 16,
    rows: [
      { cells: [
        ['The married nuclear family is the best setting for raising children', 'Growth of lone-parent families linked to social problems'],
        ['The main change is the "neo-conventional family": both partners work', 'Diversity is overstated: snapshots catch people between stages'],
        ['**Rapoports (1982):** organisational, cultural, class, life-stage and cohort diversity', '**Giddens:** the "pure relationship"', '**Beck and Beck-Gernsheim:** individualisation', '**Stacey:** divorce-extended families'],
      ] },
      { cells: [
        '**Critics:** low income, not family type, explains much disadvantage; this view stigmatises lone parents.',
        '**Critics:** the Rapoports show cultural and class diversity the model misses.',
        '**Critics:** may exaggerate choice and underplay income and law.',
      ], cellFill: [C.panel, C.panel, C.panel] },
    ],
  }),
    'Three readings of family diversity. The New Right see the married nuclear family as best; Chester argues diversity is overstated; the Rapoports, Giddens, Beck and Stacey stress diversity and choice. Each has a criticism beneath it.',
    'Whether families are "diverse" depends on how you measure and judge it.',
    '## 2. Marriage, cohabitation, divorce, childbearing, the life course and diversity');
}

// 06 Domestic labour: march of progress vs feminist critique
{
  add('06-domestic-labour', versusFig('Are conjugal roles becoming equal?', {
    sub: 'Bott (1957): segregated roles versus joint roles',
    left: { head: 'March of progress', items: ['**Young and Willmott (1973):** the symmetrical family', '**Gershuny (1994):** lagged adaptation, as men slowly do more', '**Sullivan (2000):** a trend towards more equal division'] },
    right: { head: 'Feminist critique', items: ['**Oakley (1974):** 40 housewives, little symmetry; "helping" counted if done once a week', '**Duncombe and Marsden (1995):** the triple shift, adding emotion work', '**Edgell; Pahl:** men hold power over big decisions and money'] },
    foot: { head: 'Why does inequality persist? (Crompton and Lyonette, 2008)', text: ['**Cultural:** norms tell women to do housework', '**Material:** women earn less, so it is "rational" for them to do more'] },
  }),
    'March of progress writers, Young and Willmott, Gershuny and Sullivan, see roles becoming more equal; feminists Oakley, Duncombe and Marsden, Edgell and Pahl find persistent inequality. Crompton and Lyonette offer cultural and material explanations.',
    'Evidence of change is set against evidence that women still do more.',
    '## 3. Gender roles, domestic labour and power');
}

// 07 Childhood since 1900
{
  let s = '', y = 116;
  const ev = [['1944', 'Education Act: free secondary education for all'], ['1972', 'School leaving age raised to 16'], ['1989', 'Children Act; UN Convention on the Rights of the Child']];
  const x1 = 175, x2 = 725, ly = y + 30;
  s += `<line x1="${x1 - 40}" y1="${ly}" x2="${x2 + 40}" y2="${ly}" stroke="${C.ink}" stroke-width="4"/>`;
  ev.forEach(([yr, txt], i) => {
    const x = x1 + i * ((x2 - x1) / 2);
    s += `<circle cx="${x}" cy="${ly}" r="12" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
    s += t(x, ly - 22, yr, { size: 20, weight: 700, anchor: 'middle' });
    s += para(x, ly + 40, 250, txt, { size: 16, anchor: 'middle' }).svg;
  });
  y = ly + 126;
  s += label(450, y, 'Laws separated children from adults (Pilcher: the "separateness" of childhood)', { size: 17, italic: true, anchor: 'middle', fill: C.tealDark, weight: 600 });
  y += 24;
  const r = cardRow(y, [
    { head: 'Childhood is disappearing', body: ['**Postman (1982):** television removed the "information hierarchy"', '**Palmer (2006):** "toxic childhood" from technology and consumerism'], fill: C.cream },
    { head: 'Childhood persists', body: ['**Opie (1993):** a lively children’s culture of games and rhymes', 'Laws on schooling and protection have legally extended childhood'], fill: C.teal },
  ], { size: 16 });
  s += r.svg; y += r.h + 16;
  const n = note(y, 'March of progress or control?', 'Children are better cared for than ever, or (Gittins; Firestone) "protection" is also control, and childhood varies by gender, class and ethnicity.');
  s += n.svg; y += n.h;
  add('07-childhood', svg(900, y + 26, 'Childhood since 1900', s),
    'A timeline of laws that separated children from adults: the 1944 Education Act, the school leaving age raised to 16 in 1972, and the 1989 Children Act and UN Convention. Below, Postman and Palmer argue childhood is disappearing while Opie argues it persists.',
    'Laws have lengthened childhood even as media may blur its boundary.',
    '## 4. The nature of childhood and the status of children');
}

// 08 Ageing population
{
  let s = '', y = 104;
  const r = cardRow(y, [
    { head: 'Fewer births', body: ['Women’s education, careers, contraception', 'Lower infant mortality', 'Children an economic cost', 'Child-centredness'], fill: C.teal },
    { head: 'Longer lives', body: ['Better nutrition (McKeown, 1976)', 'Public health and housing', 'The NHS (1948)'], fill: C.teal },
  ], { size: 16, gap: 80 });
  s += r.svg; y += r.h;
  s += arrow(235, y + 6, 390, y + 50) + arrow(665, y + 6, 510, y + 50);
  y += 56;
  s += `<rect x="250" y="${y}" width="400" height="56" rx="14" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + t(450, y + 36, 'An ageing population', { size: 21, weight: 700, anchor: 'middle' });
  y += 56;
  const cw = (840 - 32) / 3;
  [0, 1, 2].forEach((i) => s += arrow(450 + (i - 1) * 100, y + 4, 30 + i * (cw + 16) + cw / 2, y + 44));
  y += 50;
  const r2 = cardRow(y, [
    { head: 'Households', body: 'More one-person pensioner households.', fill: C.cream },
    { head: 'Care', body: 'More care by relatives, often women.', fill: C.cream },
    { head: 'Dependency ratio', body: 'More dependants per working-age person.', fill: C.cream },
  ], { size: 16, headSize: 18 });
  s += r2.svg; y += r2.h + 16;
  const n = note(y, 'Evaluation', 'Phillipson: older people are marginalised under capitalism. Yet many older people also give care, such as grandparents doing childcare.');
  s += n.svg; y += n.h;
  add('08-ageing-population', svg(900, y + 26, 'Why the population is ageing', s),
    'Fewer births and longer lives combine to produce an ageing population, which brings more one-person pensioner households, more care by relatives and a rising dependency ratio.',
    'Lower fertility and longer lives together reshape households and care.',
    '## 5. Demographic trends since 1900');
}
