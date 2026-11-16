import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'a-level-cambridge-sociology-research-methods-design-and-issues';
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

// 01 Types of data: 2x2 grid
{
  const X0 = 210, cw = 322, ch = 170, Y0 = 170;
  const cells = [
    [0, 0, C.teal, ['Closed-question questionnaire', 'Structured interview', 'Experiment']],
    [1, 0, C.cream, ['Unstructured interview', 'Participant observation']],
    [0, 1, C.tealLight, ['Official statistics', 'Existing survey data']],
    [1, 1, C.sand, ['Diaries, letters', 'Social media posts', 'News articles']],
  ];
  let s = '';
  s += `<rect x="${X0}" y="108" width="${cw}" height="54" rx="12" fill="${C.ink}"/>` + label(X0 + cw / 2, 136, 'Quantitative', { size: 20, weight: 700, anchor: 'middle', fill: '#ffffff' }) + label(X0 + cw / 2, 155, 'numbers', { size: 15, anchor: 'middle', fill: '#ffffff' });
  s += `<rect x="${X0 + cw + 8}" y="108" width="${cw}" height="54" rx="12" fill="${C.ink}"/>` + label(X0 + cw * 1.5 + 8, 136, 'Qualitative', { size: 20, weight: 700, anchor: 'middle', fill: '#ffffff' }) + label(X0 + cw * 1.5 + 8, 155, 'words, images, meanings', { size: 15, anchor: 'middle', fill: '#ffffff' });
  [['Primary', 'collected by the researcher'], ['Secondary', 'already exists']].forEach(([h, b], j) => {
    const y = Y0 + j * (ch + 8);
    s += `<rect x="30" y="${y}" width="172" height="${ch}" rx="12" fill="${C.ink}"/>` + label(116, y + ch / 2 - 4, h, { size: 20, weight: 700, anchor: 'middle', fill: '#ffffff' }) + para(116, y + ch / 2 + 20, 150, b, { size: 15, anchor: 'middle', fill: '#ffffff' }).svg;
  });
  for (const [i, j, f, items] of cells) {
    const x = X0 + i * (cw + 8), y = Y0 + j * (ch + 8);
    s += `<rect x="${x}" y="${y}" width="${cw}" height="${ch}" rx="12" fill="${f}" stroke="${C.ink}" stroke-width="2"/>` + bullets(x + 22, y + 42 + (3 - items.length) * 15, cw - 40, items, { size: 18, gap: 10, dot: C.ink }).svg;
  }
  const n = note(Y0 + 2 * ch + 30, null, 'Quantitative data suits measuring patterns and testing hypotheses; qualitative data suits understanding meanings. Many studies combine both.');
  add('01-types-of-data',
    svg(900, Math.round(Y0 + 2 * ch + 30 + n.h + 24), 'Four types of data', s + n.svg),
    'A two-by-two grid. Primary quantitative: questionnaires, structured interviews, experiments. Primary qualitative: unstructured interviews, participant observation. Secondary quantitative: official statistics, existing survey data. Secondary qualitative: diaries, letters, social media posts, news articles.',
    'Any data is primary or secondary, and quantitative or qualitative.',
    '## What is the difference between primary, secondary, quantitative and qualitative data?');
}

// 02 Secondary sources: strengths and limitations
{
  const src = [
    ['Official statistics', 'Cheap, large-scale, comparable over time', 'Reflect agencies’ definitions and recording; Atkinson (1978): coroners decide what counts as suicide'],
    ['Personal documents', 'Rich insight into meaning', 'May be unrepresentative and written for an audience'],
    ['Digital content', 'Plentiful and often unprompted', 'Authenticity; who is online; ethics of using public posts without consent'],
    ['Media sources', 'Reveal how issues are framed', 'Show the media’s agenda as much as the event (Bad News, 1976)'],
  ];
  let y = 150, s = label(375, 136, 'Strength', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark }) + label(705, 136, 'Limitation', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  for (const [h, a, b] of src) {
    const pa = para(0, 0, 250, a, { size: 17 }), pb = para(0, 0, 290, b, { size: 17 });
    const rh = Math.max(pa.h, pb.h) + 32;
    s += `<rect x="30" y="${y}" width="200" height="${rh}" rx="10" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>` + para(130, y + rh / 2 + 6 - (para(0, 0, 180, h, { size: 18, weight: 700 }).n - 1) * 12, 180, h, { size: 18, weight: 700, anchor: 'middle' }).svg;
    s += `<rect x="240" y="${y}" width="270" height="${rh}" rx="10" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2"/>` + `<rect x="240" y="${y}" width="8" height="${rh}" rx="3" fill="${C.tealDark}"/>` + para(260, y + (rh - pa.h) / 2 + 16, 240, a, { size: 17 }).svg;
    s += `<rect x="520" y="${y}" width="350" height="${rh}" rx="10" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2"/>` + `<rect x="520" y="${y}" width="8" height="${rh}" rx="3" fill="${C.rust}"/>` + para(540, y + (rh - pb.h) / 2 + 16, 315, b, { size: 17 }).svg;
    y += rh + 10;
  }
  add('02-secondary-sources',
    svg(900, Math.round(y + 16), 'How useful are secondary sources?', s),
    'Four secondary sources with a strength and a limitation each: official statistics are cheap and comparable but socially constructed; personal documents are rich but unrepresentative; digital content is plentiful but raises authenticity and consent issues; media sources show framing but reflect the media’s agenda.',
    'Every secondary source trades convenience against questions of construction and representativeness.',
    '## How useful are secondary sources?');
}

// 03 Observation choices
{
  const r = cardRow(176, [
    { head: 'Non-participant', fill: C.tealLight, sub: 'watches without joining in', body: ['**Strength:** less risk of “going native”', '**Limitation:** less insight into meaning'] },
    { head: 'Overt participant', fill: C.teal, sub: 'joins in; the group knows', body: ['**Strength:** ethical', '**Limitation:** the group may change its behaviour', 'Whyte (1943): key informant “Doc”'] },
    { head: 'Covert participant', fill: C.cream, sub: 'joins in secretly', body: ['**Strength:** access to closed or deviant groups; natural behaviour', '**Limitation:** deception and risk', 'Humphreys (1970): ethical controversy'] },
  ], { size: 16 });
  const ax = arrow(60, 146, 840, 146, { w: 4 }) + label(60, 130, 'less involvement', { size: 16, fill: C.muted, weight: 600 }) + label(840, 130, 'more involvement and more ethical risk', { size: 16, fill: C.muted, weight: 600, anchor: 'end' });
  add('03-observation-types',
    svg(900, Math.round(176 + r.h + 26), 'Choosing a type of observation', ax + r.svg),
    'Three types of observation along a line of increasing involvement: non-participant observation has less risk of going native but less insight; overt participant observation is ethical but people may change their behaviour; covert participant observation gives access and natural behaviour but involves deception and risk.',
    'More involvement brings more insight, and more ethical risk.',
    '## What are the strengths and limitations of qualitative methods?');
}

// 04 Interview continuum
{
  const types = [
    ['Structured', 'fixed questions in a fixed order', 'Clarification possible; interviewer effect; limited depth', C.teal],
    ['Semi-structured', 'core questions plus follow-ups', 'Combines comparability with flexibility', C.tealLight],
    ['Unstructured', 'a guided conversation', 'Rapport and depth (Oakley, 1981); time, cost, small samples, hard to compare', C.cream],
  ];
  let s = '';
  types.forEach(([h, sub, b, f], i) => {
    const x = 30 + i * 286;
    s += `<rect x="${x}" y="200" width="268" height="230" rx="14" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2.5"/>` + `<path d="${roundTop(x + 1.25, 201.25, 265.5, 60)}" fill="${f}"/>` +
      label(x + 134, 240, h, { size: 21, weight: 700, anchor: 'middle' }) + para(x + 134, 290, 236, sub, { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 }).svg + para(x + 18, 336, 232, b, { size: 17 }).svg;
  });
  const gx = 30, gw = 840;
  s += `<defs><linearGradient id="rv" x1="0" x2="1"><stop offset="0" stop-color="${C.teal}"/><stop offset="1" stop-color="${C.cream}"/></linearGradient></defs>` +
    `<rect x="${gx}" y="110" width="${gw}" height="64" rx="32" fill="url(#rv)" stroke="${C.ink}" stroke-width="2.5"/>` +
    label(60, 150, 'More comparable, more reliable', { size: 18, weight: 700 }) + label(840, 150, 'More depth, more valid', { size: 18, weight: 700, anchor: 'end' });
  const n = note(450, 'Group interviews', 'Reveal how views are formed in interaction, but dominant voices and peer pressure can distort answers.');
  add('04-interview-continuum',
    svg(900, Math.round(450 + n.h + 24), 'From structured to unstructured interviews', s + n.svg),
    'Interviews on a continuum from structured, which are more comparable and reliable, through semi-structured, to unstructured, which give more depth and validity but take time and use small samples. Group interviews show views forming in interaction.',
    'The less structured the interview, the more depth it gains and the less comparable it becomes.',
    '## What are the strengths and limitations of qualitative methods?');
}

// 05 Research design stages (two-row snake)
{
  const st = [
    ['Research strategy', 'survey, case study, ethnography'], ['Questions and hypotheses', 'a hypothesis is a testable prediction'],
    ['Operationalisation', 'make a concept measurable'], ['Sampling frame', 'the list the sample is drawn from'],
    ['Sampling technique', 'random, systematic, stratified, quota, snowball, opportunity'], ['Pilot study', 'small trial run of questions, timing, access'],
    ['Conducting research', 'collect data; manage access and ethics'], ['Interpreting results', 'analyse, check for bias, conclude'],
  ];
  const w = 192, h = 198, gap = 24;
  let s = '';
  st.forEach(([hd, b], i) => {
    const row = Math.floor(i / 4), col = row === 0 ? i % 4 : 3 - (i % 4);
    const x = 30 + col * (w + gap), y = 120 + row * (h + 70);
    s += `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${i === 5 ? C.cream : C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + badge(x + 28, y + 30, 17, String(i + 1), i === 7 ? C.mustard : C.teal) +
      para(x + 14, y + 74, w - 28, hd, { size: 17, weight: 700 }).svg + para(x + 14, y + 74 + para(0, 0, w - 28, hd, { size: 17, weight: 700 }).h + 4, w - 28, b, { size: 16, fill: C.muted }).svg;
    if (i < 7 && i !== 3) s += row === 0 ? arrow(x + w + 2, y + h / 2, x + w + gap - 2, y + h / 2, { w: 3 }) : arrow(x - 2, y + h / 2, x - gap + 2, y + h / 2, { w: 3 });
    if (i === 3) s += arrow(x + w / 2, y + h + 4, x + w / 2, y + h + 66, { w: 3 });
  });
  const n = note(120 + 2 * h + 70 + 24, 'Link each stage to a concept', 'A pilot study improves validity; a stratified sample improves representativeness. Linking stages to concepts turns description into analysis.');
  add('05-research-design-stages',
    svg(900, Math.round(120 + 2 * h + 94 + n.h + 24), 'Eight stages of research design', s + n.svg),
    'Eight stages in order: research strategy, research questions and hypotheses, operationalisation, sampling frame, sampling technique, pilot study, conducting research and interpreting results.',
    'Research design runs from choosing a strategy to interpreting results.',
    '## What are the stages of research design?');
}

// 06 Theoretical, practical, ethical factors
{
  const r = cardRow(108, [
    { head: 'Theoretical', fill: C.teal, body: ['Positivists prefer reliable, quantitative methods', 'Interpretivists prefer valid, qualitative methods'] },
    { head: 'Practical', fill: C.tealLight, body: ['Time and cost', 'Access', 'The researcher’s skills and personal characteristics'] },
    { head: 'Ethical', fill: C.cream, body: ['Informed consent', 'Confidentiality', 'Avoiding harm and deception', 'Vulnerable participants'] },
  ], { size: 17 });
  const y2 = 108 + r.h;
  let s = r.svg + [165, 450, 735].map((x) => arrow(x, y2 + 4, 450 + (x - 450) * 0.3, y2 + 60, { w: 3.5 })).join('');
  s += `<rect x="230" y="${y2 + 66}" width="440" height="70" rx="14" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + label(450, y2 + 109, 'Choice of topic and method', { size: 21, weight: 700, anchor: 'middle' });
  const n = note(y2 + 160, 'Topic choice also depends on', 'Values, funding, and what is fashionable or newsworthy.');
  add('06-tpe-factors',
    svg(900, Math.round(y2 + 160 + n.h + 24), 'What shapes the choice of method?', s + n.svg),
    'Theoretical factors (positivist or interpretivist preferences), practical factors (time, cost, access, skills) and ethical factors (consent, confidentiality, harm, vulnerable participants) all feed into the choice of topic and method.',
    'Theory, practicalities and ethics together shape how research is done.',
    '## What influences a sociologist\'s choice of topic and method?');
}

// 07 Reliability vs validity map of methods
{
  const left = ['Questionnaires', 'Structured interviews', 'Official statistics', 'Large random or stratified surveys'];
  const right = ['Unstructured interviews', 'Participant observation'];
  let s = `<defs><linearGradient id="rv2" x1="0" x2="1"><stop offset="0" stop-color="${C.teal}"/><stop offset="1" stop-color="${C.cream}"/></linearGradient></defs>` +
    `<rect x="30" y="110" width="840" height="64" rx="32" fill="url(#rv2)" stroke="${C.ink}" stroke-width="2.5"/>` +
    label(60, 150, 'Positivist: quantitative', { size: 18, weight: 700 }) + label(840, 150, 'Interpretivist: qualitative', { size: 18, weight: 700, anchor: 'end' });
  const col = (x, head, sub, items, f) => headPanel(x, 196, 410, 300, head, { fill: f, size: 21 }).svg + label(x + 205, 196 + 82, sub, { size: 16, anchor: 'middle', fill: C.muted, italic: true }) + bullets(x + 24, 196 + 120, 370, items, { size: 18, gap: 12 }).svg;
  s += col(30, 'Higher reliability', 'same results if repeated; representativeness', left, C.teal) + col(460, 'Higher validity', 'a true picture of what is measured', right, C.cream);
  const n = note(516, 'Objectivity', 'Freedom from the researcher’s own values: claimed for standardised methods, though this is contested. Ethics: is the research morally acceptable?');
  add('07-reliability-validity',
    svg(900, Math.round(516 + n.h + 24), 'Assessing the value of a method', s + n.svg),
    'Quantitative methods such as questionnaires, structured interviews, official statistics and large sampled surveys score higher on reliability and representativeness; qualitative methods such as unstructured interviews and participant observation score higher on validity. Objectivity and ethics are noted below.',
    'Methods tend to gain reliability or validity, rarely both.',
    '## How do you assess the value of a research method?');
}
