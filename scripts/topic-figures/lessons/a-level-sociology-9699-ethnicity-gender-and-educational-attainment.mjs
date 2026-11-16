import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'a-level-sociology-9699-ethnicity-gender-and-educational-attainment';
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

// 01 Educational triage (Gillborn and Youdell, 2000)
{
  const grp = [
    ['Will pass anyway', 'little extra help', C.tealLight, 1],
    ['Can be helped to pass', 'teaching rationed towards them', C.mustard, 3],
    ['Seen as hopeless', 'lower sets, foundation tiers', C.cream, 1],
  ];
  let s = `<rect x="250" y="108" width="400" height="70" rx="14" fill="${C.ink}"/>` + label(450, 140, 'League-table pressure', { size: 20, weight: 700, anchor: 'middle', fill: '#ffffff' }) + label(450, 164, 'the “A-to-C economy”', { size: 16, anchor: 'middle', fill: '#ffffff' });
  s += [165, 450, 735].map((x) => arrow(450 + (x - 450) * 0.4, 182, x, 222, { w: 3 })).join('');
  grp.forEach(([h, b, f, w], i) => {
    const x = 30 + i * 286;
    s += `<rect x="${x}" y="228" width="268" height="150" rx="14" fill="${f}" stroke="${C.ink}" stroke-width="${i === 1 ? 3.5 : 2.5}"/>` + para(x + 134, 268, 240, h, { size: 20, weight: 700, anchor: 'middle' }).svg + para(x + 134, 330, 240, b, { size: 16, anchor: 'middle' }).svg;
    const bw = 40 + w * 70;
    s += `<rect x="${x + 134 - bw / 2}" y="398" width="${bw}" height="22" rx="11" fill="${C.tealDark}"/>`;
  });
  s += label(450, 446, 'share of teaching effort (illustrative)', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  const n = note(466, 'Result', 'Sets, exam tiers and triage cap the grades some pupils can reach and reproduce inequalities of class, ethnicity and gender. Limitation: only two schools were studied.');
  add('01-educational-triage',
    svg(900, Math.round(466 + n.h + 24), 'Educational triage', s + n.svg),
    'League-table pressure creates an A-to-C economy. Pupils are sorted into those who will pass anyway, those who can be helped to pass, who receive most teaching effort, and those seen as hopeless, who are placed in lower sets and foundation tiers.',
    'Rationing teaching towards borderline pupils reproduces class, ethnic and gender inequality.',
    '## 6.3 Racism in schools');
}

// 02 Ethnic subcultures: Sewell and Mirza
{
  const ty = ['Conformists', 'Innovators', 'Retreators', 'Rebels'];
  let s = label(30, 132, 'Sewell (1997): African-Caribbean boys’ responses to school', { size: 19, weight: 700, fill: C.tealDark });
  ty.forEach((t2, i) => { const x = 30 + i * 213; s += `<rect x="${x}" y="150" width="201" height="64" rx="32" fill="${i === 3 ? C.cream : C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + label(x + 100, 189, t2, { size: 19, weight: 700, anchor: 'middle' }); });
  s += bullets(40, 250, 820, ['Same ethnicity, different responses: challenges simple labelling theory', 'Black boys received a disproportionate amount of punishment; teachers could not escape wider perceptions of young Black men', 'The pull of a street-fashion peer culture'], { size: 17, gap: 8 }).svg;
  const y2 = 390;
  s += label(30, y2, 'Mirza (1992): culture is not enough', { size: 19, weight: 700, fill: C.olive });
  const ch = hchain(y2 + 18, [
    { head: '62 young African-Caribbean women', body: 'working-class, south London', fill: C.panel },
    { head: 'Did well at school', body: 'a pro-education outlook', fill: C.tealLight },
    { head: 'Jobs limited', body: 'labour market segregated by race and gender', fill: C.cream },
  ], { ag: 44 });
  add('02-ethnic-subcultures',
    svg(900, Math.round(y2 + 18 + ch.h + 26), 'Ethnicity and school subcultures', s + ch.svg),
    'Sewell found African-Caribbean boys responded to school as conformists, innovators, retreators or rebels, and received disproportionate punishment. Mirza found young African-Caribbean women did well at school, but a labour market segregated by race and gender limited their jobs.',
    'Pupils of the same ethnicity respond differently, and success at school does not guarantee a fair outcome.',
    '## 6.3 Cultural explanations and ethnic subcultures');
}

// 03 Intersectionality Venn
{
  const c = [[360, 270, C.teal], [540, 270, C.cream], [450, 425, C.tealLight]];
  let s = c.map(([x, y, f]) => `<circle cx="${x}" cy="${y}" r="150" fill="${f}" fill-opacity="0.6" stroke="${C.ink}" stroke-width="3"/>`).join('');
  s += label(290, 220, 'Ethnicity', { size: 22, weight: 700, anchor: 'middle' }) + label(610, 220, 'Class', { size: 22, weight: 700, anchor: 'middle' }) + label(450, 520, 'Gender', { size: 22, weight: 700, anchor: 'middle' });
  const tag = (x, y, n, txt) => badge(x, y, 15, n, C.panel);
  s += tag(450, 205, '1') + tag(450, 330, '2') + tag(385, 395, '3') + tag(515, 395, '4');
  const key = [
    ['1', 'Vincent et al. (2012–13): race changes how class works for Black Caribbean middle-class parents'],
    ['2', 'Gillborn and Mirza (2000): class and gender cannot account for persistent ethnic inequalities'],
    ['3', 'Connolly (2006): young boys’ masculinities in a multi-ethnic school'],
    ['4', 'Willis (1977): working-class boys’ counter-school culture'],
  ];
  let y = 610;
  for (const [n, txt] of key) { const p = para(80, y, 780, txt, { size: 17 }); s += badge(52, y - 6, 15, n, C.panel) + p.svg; y += p.h + 12; }
  const n = note(y + 6, 'Intersectionality', 'Class, ethnicity and gender combine, so they cannot be studied one at a time. Hill, who stresses class, offers a counter-view.');
  add('03-intersectionality',
    svg(900, Math.round(y + 6 + n.h + 24), 'Ethnicity, class and gender combined', s + n.svg),
    'Three overlapping circles for ethnicity, class and gender with studies placed in the overlaps: Vincent and colleagues between ethnicity and class, Connolly between ethnicity and gender, Willis between class and gender, and Gillborn and Mirza’s national review at the centre.',
    'Class, ethnicity and gender combine, so no single factor explains attainment.',
    '## 6.3 Ethnicity, social class and gender');
}

// 04 Why girls' results improved / crisis of masculinity
{
  const row = (y, head, f, items) => { const ch = hchain(y + 16, items, { ag: 40 }); return { svg: label(30, y, head, { size: 19, weight: 700, fill: f }) + ch.svg, h: ch.h + 16 }; };
  const a = row(132, 'Girls: rising expectations', C.tealDark, [
    { head: 'Feminism and equal opportunities laws', body: 'Equal Pay Act 1970; Sex Discrimination Act 1975', fill: C.tealLight },
    { head: 'Girls’ sense of what is possible rises', fill: C.panel },
    { head: 'More ambitious careers', body: 'Francis (2002), though still a gender divide', fill: C.teal },
  ]);
  const b = row(132 + a.h + 40, 'Girls: changing employment', C.tealDark, [
    { head: 'Growth in service jobs and women’s paid work', fill: C.tealLight },
    { head: 'Role models', fill: C.panel },
    { head: 'A reason to gain qualifications', fill: C.teal },
  ]);
  const y3 = 132 + a.h + 40 + b.h + 40;
  const c = row(y3, 'Boys: the crisis of masculinity (a debated argument)', C.rust, [
    { head: 'Decline of manual jobs and the breadwinner role', fill: C.cream },
    { head: 'Uncertain identity', fill: C.panel },
    { head: 'Less point in school', fill: C.cream },
  ]);
  const n = note(y3 + c.h + 26, '“Which boys?”', 'Epstein et al. (1998) call the reaction to boys’ underachievement simplistic; Francis (2006) describes a moral panic. Class and ethnicity differences within each sex matter.');
  add('04-gender-social-change',
    svg(900, Math.round(y3 + c.h + 26 + n.h + 24), 'Gender and wider social change', a.svg + b.svg + c.svg + n.svg),
    'Three chains. Feminism and equal opportunities laws raised girls’ sense of what is possible and their career ambitions. Growth in service jobs and women’s work gave girls role models and reasons to gain qualifications. For boys, the decline of manual jobs led to an uncertain identity and less point in school, a debated crisis of masculinity.',
    'Social change raised girls’ ambitions, while the decline of manual work may have unsettled some boys.',
    '## 6.4 Gender socialisation and wider social changes');
}

// 05 Self-worth protection loop
{
  const cx = 450, cy = 340, R = 175;
  const nodes = [['Avoid visible effort', C.cream], ['Fail or do badly', C.panel], ['Blame not trying,', C.panel, 'not lack of ability'], ['Self-worth protected', C.teal, 'status in laddish culture']];
  const ang = [-90, 0, 90, 180].map((a) => (a * Math.PI) / 180);
  const g = [0.55, 0.38, 0.55, 0.38];
  let s = '';
  for (let i = 0; i < 4; i++) {
    const a1 = ang[i] + g[i], a2 = ang[(i + 1) % 4] - g[(i + 1) % 4] + (i === 3 ? 2 * Math.PI : 0);
    s += `<path d="M${cx + R * Math.cos(a1)},${cy + R * Math.sin(a1)} A${R},${R} 0 0 1 ${cx + R * Math.cos(a2)},${cy + R * Math.sin(a2)}" fill="none" stroke="${C.ink}" stroke-width="3.5" marker-end="url(#ah)"/>`;
  }
  nodes.forEach(([a, f, b], i) => {
    const x = cx + R * Math.cos(ang[i]) * 1.25, y = cy + R * Math.sin(ang[i]);
    s += `<rect x="${x - 120}" y="${y - 36}" width="240" height="72" rx="14" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + label(x, y + (b ? -4 : 7), a, { size: 18, weight: 700, anchor: 'middle' }) + (b ? label(x, y + 20, b, { size: 16, anchor: 'middle' }) : '');
  });
  s += label(cx, cy - 4, 'Jackson (2002)', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark }) + label(cx, cy + 20, 'laddishness', { size: 17, anchor: 'middle', fill: C.tealDark });
  const r = cardRow(584, [
    { head: 'Ladettes', fill: C.cream, body: 'Jackson (2006); Archer et al. (2007): some working-class girls also disengage.' },
    { head: 'Teacher attention', fill: C.tealLight, body: 'French (1984): boys got more, partly by attention-seeking. Spender (1978): girls kept quiet.' },
    { head: 'Hegemonic masculinity', fill: C.tealLight, body: 'Connell: the dominant, most valued form of masculinity; visible effort seen as feminine.' },
  ], { size: 16 });
  add('05-self-worth-protection',
    svg(900, Math.round(584 + r.h + 24), 'Laddishness as self-worth protection', s + r.svg),
    'A loop: avoiding visible effort leads to failing, which can be blamed on not trying rather than lack of ability, which protects self-worth and status in laddish culture. Below, ladette cultures among girls, unequal teacher attention and hegemonic masculinity.',
    'If you never try, failure cannot be blamed on lack of ability.',
    '## 6.4 Gender subcultures and teacher expectations');
}
