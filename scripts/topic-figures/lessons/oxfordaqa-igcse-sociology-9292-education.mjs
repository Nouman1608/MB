import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-sociology-9292-education';
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
const vcenter = (x, yTop, h, w, s, o = {}) => { const size = o.size || 17; const p = para(0, 0, w, s, o); return para(x, yTop + (h - p.h) / 2 + size * 0.95, w, s, o).svg; };

// 01 Formal/informal and levels
{
  let s = '';
  const r = cardRow(108, [
    { head: 'Formal education', fill: C.teal, body: 'In institutions, with a planned curriculum and qualifications' },
    { head: 'Informal education', fill: C.cream, body: 'Through everyday life: families, peers and the media' },
  ], { size: 17, headSize: 20 });
  s += r.svg;
  let y = 108 + r.h + 40;
  s += label(450, y, 'Levels of formal education', { size: 20, weight: 700, anchor: 'middle' });
  const lv = [['Nursery or pre-school', C.tealLight], ['Primary', C.teal], ['Secondary', C.cream], ['Tertiary', C.mustard]];
  lv.forEach(([l, f], i) => {
    const x = 30 + i * 214, h = 70 + i * 40, yy = y + 30 + (3 - i) * 40;
    s += box(x, yy, 198, h, { fill: f }) + vcenter(x + 99, yy, 60, 180, l, { size: 18, weight: 700, anchor: 'middle' });
  });
  s += label(30 + 3 * 214 + 99, y + 30 + 95, 'colleges and', { size: 15, anchor: 'middle' }) + label(30 + 3 * 214 + 99, y + 30 + 115, 'universities', { size: 15, anchor: 'middle' });
  y += 30 + 3 * 40 + 70 + 20;
  const r2 = cardRow(y, [
    { head: 'Official curriculum', fill: C.panel, body: 'What is formally taught' },
    { head: 'Hidden curriculum', fill: C.panel, body: 'What is learned from how school is run. Not the same as informal education.' },
    { head: 'Online learning', fill: C.panel, body: 'Widens access for some, but depends on devices and connection; less social' },
  ], { size: 16, headSize: 18 });
  s += r2.svg;
  add('01-education-and-schooling',
    svg(900, y + r2.h + 24, 'Education and schooling', s),
    'Formal education happens in institutions with a curriculum and qualifications; informal education happens through families, peers and media. A staircase shows the levels: nursery, primary, secondary and tertiary. Cards contrast the official and hidden curriculum and note the limits of online learning.',
    'Formal education climbs from nursery to tertiary; informal education happens everywhere.',
    '## Education and schooling');
}

// 02 Four perspectives on education
{
  add('02-perspectives-on-education',
    cardsFig('Four perspectives on education', {
      ncol: 2, size: 16,
      cards: [
        { head: 'Functionalism', fill: C.teal, body: ['**Durkheim:** passes on shared values', '**Parsons:** a bridge from particularistic (family) to universalistic (society) standards', '**Davis and Moore:** role allocation', 'Develops human capital'] },
        { head: 'Marxism', fill: C.tealLight, body: ['**Bowles and Gintis:** prepares pupils for work; obeying teachers mirrors obeying bosses; the myth of meritocracy', '**Bourdieu:** cultural capital lets schools reproduce and legitimise class inequality'] },
        { head: 'Radical critics', fill: C.sand, body: ['**Illich:** schools teach dependence on institutions; calls for deschooling', '**Freire:** rejects “banking” education; wants critical consciousness'] },
        { head: 'Feminisms', fill: C.cream, body: ['Gender roles reinforced by subject choices, careers advice, textbooks and teacher expectations', '**Sharpe:** girls’ priorities shifted from marriage and family (1970s) to careers (1990s)'] },
      ],
    }),
    'Four cards. Functionalism: shared values, a bridge to universalistic standards, role allocation and human capital. Marxism: Bowles and Gintis on preparation for work and the myth of meritocracy; Bourdieu on cultural capital. Radical critics: Illich on deschooling, Freire on banking education. Feminisms: gender roles reinforced in school, and Sharpe’s finding that girls’ priorities shifted towards careers.',
    'Each perspective asks whose interests education serves.',
    '## Perspectives on education');
}

// 03 Bourdieu: reproduce and legitimise
{
  let s = '';
  const ch = hchain(108, [
    { head: 'Middle-class home', body: 'Knowledge, language and tastes', fill: C.cream },
    { head: 'Cultural capital', body: 'What schools value and reward', fill: C.mustard },
    { head: 'Higher attainment', body: 'Better results for middle-class pupils', fill: C.teal },
  ], { size: 16, ag: 44 });
  s += ch.svg;
  const y = 108 + ch.h + 30;
  s += box(30, y, 404, 130, { fill: C.panel }) + label(52, y + 36, 'Reproduces', { size: 21, weight: 700, fill: C.tealDark }) + para(52, y + 66, 360, 'Class inequality is passed on to the next generation', { size: 17 }).svg;
  s += box(466, y, 404, 130, { fill: C.panel }) + label(488, y + 36, 'Legitimises', { size: 21, weight: 700, fill: C.olive }) + para(488, y + 66, 360, 'It looks like the result of individual merit, so it seems fair', { size: 17 }).svg;
  const n = note(y + 150, 'Common mistake', 'Cultural capital is not money. It is knowledge, language and tastes valued by schools.');
  add('03-bourdieu-cultural-capital',
    svg(900, Math.round(y + 150 + n.h + 24), 'Bourdieu: cultural capital', s + n.svg),
    'A chain: a middle-class home gives knowledge, language and tastes; this cultural capital is what schools value; so middle-class pupils attain more. Schools therefore reproduce class inequality and legitimise it by making it look like individual merit. A note warns that cultural capital is not money.',
    'Schools reward middle-class culture, then call the result merit.',
    '## Perspectives on education');
}

// 04 Labelling: worked 4-mark answer
{
  add('04-labelling-four-marks',
    flowFig('Teacher expectations: a four-mark chain', {
      sub: 'Each step is one mark',
      steps: [
        { head: 'Label', body: 'A teacher labels a pupil as less able, perhaps because of their accent or background.' },
        { head: 'Treatment', body: 'The teacher gives them easier work and less attention.' },
        { head: 'Self-image', body: 'The pupil comes to see themselves as less able and stops trying.' },
        { head: 'Self-fulfilling prophecy', body: 'Low attainment fulfils the original expectation.' },
      ],
      foot: { head: 'Evidence and limits', text: ['**Rosenthal and Jacobson:** pupils randomly described as about to “spurt” often made greater gains', '**Becker:** teachers judge pupils against an “ideal pupil”, which middle-class pupils fitted most closely', 'Labelling does not always work: pupils can reject labels'] },
    }),
    'Four numbered steps: a teacher labels a pupil as less able; gives them easier work and less attention; the pupil sees themselves as less able and stops trying; low attainment fulfils the expectation. A note adds Rosenthal and Jacobson’s field experiment, Becker’s ideal pupil and the point that pupils can reject labels.',
    'Label, treatment, self-image, outcome: one mark for each link.',
    '## Worked example: applying labelling');
}

// 05 Processes in the classroom
{
  add('05-classroom-processes',
    cardsFig('Inside the classroom', {
      ncol: 3, size: 16,
      cards: [
        { head: 'Ideal pupil', fill: C.teal, body: 'Becker: the image teachers judge pupils against; middle-class pupils fitted it most closely' },
        { head: 'Stereotyping', fill: C.tealLight, body: 'Judging a pupil by assumptions about their group' },
        { head: 'Halo effect', fill: C.cream, body: 'One positive impression colours how the teacher sees the pupil in general' },
        { head: 'Sanctions', fill: C.panel, body: ['**Positive:** praise, merits, prizes', '**Negative:** detentions, exclusion'] },
        { head: 'Pro-school subculture', fill: C.teal, body: 'Values achievement' },
        { head: 'Anti-school subculture', fill: C.sand, body: 'Rejects school values. Willis’s “lads” saw schoolwork as pointless, which led them into manual jobs' },
      ],
      foot: { head: 'Racism and sexism', text: 'Can work through labelling, low expectations and harsher sanctions; an ethnocentric curriculum centres one culture.' },
    }),
    'Six cards: the ideal pupil (Becker), stereotyping, the halo effect, positive and negative sanctions, pro-school subcultures that value achievement, and anti-school subcultures such as Willis’s lads. A note adds that racism and sexism work through labelling, low expectations, harsher sanctions and an ethnocentric curriculum.',
    'Interactionists look at the small, everyday processes that shape pupils.',
    '## Relationships and processes in schools');
}

// 06 Four explanations for attainment
{
  let s = '';
  s += box(30, 108, 840, 420, { fill: C.cream, edge: C.olive, r: 20 }) + label(52, 142, 'OUTSIDE SCHOOL', { size: 16, weight: 700, fill: C.olive });
  s += box(300, 230, 300, 220, { fill: C.teal, r: 16 }) + label(450, 266, 'INSIDE SCHOOL', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += label(450, 302, 'In-school', { size: 21, weight: 700, anchor: 'middle' }) + para(450, 332, 260, 'Labelling, setting and streaming, subcultures, ethnocentric curricula', { size: 16, anchor: 'middle' }).svg;
  const out = [[52, 172, 'Material', 'Poverty: less money for books, devices, tuition and quiet study space'], [612, 172, 'Cultural', 'Cultural capital, language and attitudes to education (Bourdieu)'], [52, 380, 'Home and community', 'Parents’ education, expectations and support; local job opportunities']];
  out.forEach(([x, y, h, b]) => { s += box(x, y, 236, 134, { fill: C.panel, sw: 2 }) + label(x + 16, y + 30, h, { size: 19, weight: 700 }) + para(x + 16, y + 56, 206, b, { size: 15 }).svg; });
  s += box(612, 380, 236, 134, { fill: C.mustard, sw: 2 }) + label(628, 410, 'They intersect', { size: 19, weight: 700 }) + para(628, 436, 206, 'Class, gender and ethnicity combine, so disadvantages can add up', { size: 15 }).svg;
  const n = note(548, 'Common mistake', 'Explaining gaps only by in-school factors. Use material and cultural explanations too.');
  add('06-attainment-explanations',
    svg(900, Math.round(548 + n.h + 24), 'Explaining differences in attainment', s + n.svg),
    'Nested boxes. Inside school: labelling, setting and streaming, subcultures and ethnocentric curricula. Outside school: material factors such as poverty, cultural factors such as cultural capital, and home and community factors such as parents’ support. Class, gender and ethnicity intersect.',
    'Explain attainment gaps from both inside and outside the school gates.',
    '## Educational attainment');
}
