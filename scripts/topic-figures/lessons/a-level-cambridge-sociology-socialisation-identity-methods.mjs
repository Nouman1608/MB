import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'a-level-cambridge-sociology-socialisation-identity-methods';
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

// 01 Paper 1 as the foundation
{
  const top = [['Paper 2', 'The Family', 'AS Level', C.tealLight], ['Paper 3', 'Education', 'A Level', C.cream], ['Paper 4', 'Globalisation, Media and Religion', 'A Level', C.cream]];
  let s = '';
  top.forEach(([p, n, lv, f], i) => {
    const x = 30 + i * 286;
    s += `<rect x="${x}" y="120" width="268" height="120" rx="14" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` +
      label(x + 134, 154, p, { size: 22, weight: 700, anchor: 'middle' }) + para(x + 134, 182, 240, n, { size: 17, anchor: 'middle' }).svg + label(x + 134, 228, lv, { size: 15, anchor: 'middle', fill: C.muted, weight: 600 });
    s += arrow(x + 134, 340, x + 134, 248, { w: 4, color: C.tealDark, marker: 'ahT' });
  });
  s += label(307, 286, 'concepts and methods', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600, italic: true }) + label(307, 307, 'resurface in later papers', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600, italic: true });
  s += `<rect x="30" y="346" width="840" height="150" rx="14" fill="${C.ink}"/>` +
    label(450, 384, 'Paper 1: Socialisation, Identity and Methods of Research', { size: 22, weight: 700, anchor: 'middle', fill: '#ffffff' });
  ['Socialisation', 'Structure and agency', 'Positivism / interpretivism', 'Research methods'].forEach((c, i) => {
    const x = 50 + i * 205;
    s += `<rect x="${x}" y="410" width="190" height="64" rx="10" fill="${C.teal}"/>` + para(x + 95, 436 + (c.length > 20 ? 0 : 10), 170, c, { size: 16, weight: 700, anchor: 'middle' }).svg;
  });
  add('01-paper-1-foundation',
    svg(900, 524, 'Paper 1: the foundation of 9699', s),
    'Paper 1 is drawn as the foundation, holding socialisation, structure and agency, positivism and interpretivism, and research methods. Arrows lead up to Paper 2 The Family at AS Level and Papers 3 Education and 4 Globalisation, Media and Religion at A Level.',
    'Paper 1’s concepts and methods are examined again, implicitly, in every later paper.',
    '## Where this fits in 9699');
}

// 02 Two halves of Paper 1
{
  const L = [['1.1', 'Learning and socialisation', 'culture, roles, norms, values, status; nature v nurture; agencies'], ['1.2', 'Social control, conformity and resistance', 'structure and agency; deviance'], ['1.3', 'Social identity and change', 'class, gender, ethnicity, age; hybrid identities']];
  const R = [['2.1', 'Types of data, methods and research design', 'primary/secondary; quantitative/qualitative; stages'], ['2.2', 'Approaches to research', 'case studies, surveys, ethnography, mixed methods; positivism and interpretivism'], ['2.3', 'Research issues', 'practical, ethical and theoretical']];
  const col = (x, head, f, items) => {
    let s = `<rect x="${x}" y="108" width="380" height="56" rx="12" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + label(x + 190, 144, head, { size: 21, weight: 700, anchor: 'middle' });
    items.forEach(([n, h, b], i) => {
      const y = 180 + i * 130;
      s += `<rect x="${x}" y="${y}" width="380" height="116" rx="12" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2.5"/>` + badge(x + 36, y + 40, 22, '', f) + label(x + 36, y + 46, n, { size: 16, weight: 700, anchor: 'middle' }) +
        para(x + 70, y + 34, 296, h, { size: 18, weight: 700 }).svg + para(x + 70, y + 34 + para(0, 0, 296, h, { size: 18, weight: 700 }).h + 2, 296, b, { size: 16, fill: C.muted }).svg;
    });
    return s;
  };
  let s = col(30, 'Socialisation and identity', C.teal, L) + col(490, 'Methods of research', C.cream, R);
  s += arrow(488, 360, 414, 360, { w: 4, color: C.olive, marker: 'ahO' }) + label(450, 330, 'evaluate', { size: 15, weight: 700, anchor: 'middle', fill: C.olive }) + label(450, 395, 'the', { size: 15, weight: 700, anchor: 'middle', fill: C.olive }) + label(450, 413, 'evidence', { size: 15, weight: 700, anchor: 'middle', fill: C.olive });
  add('02-two-halves',
    svg(900, 590, 'Paper 1: two paired halves', s),
    'Two columns. Socialisation and identity covers 1.1 learning and socialisation, 1.2 social control, conformity and resistance, and 1.3 social identity and change. Methods of research covers 2.1 types of data and research design, 2.2 approaches to research and 2.3 research issues. An arrow shows methods being used to evaluate the evidence behind claims about socialisation.',
    'The methods half exists to evaluate the evidence behind the socialisation half.',
    '## Syllabus coverage');
}

// 03 Construction - maintenance - change
add('03-identity-chain',
  flowFig('One argument: construction, maintenance, change', {
    steps: [
      { n: '1.1', head: 'Construction', body: 'Identity is not innate: family, education, peer group, media and religion transmit norms and values, sometimes reinforcing and sometimes contradicting one another.', fill: C.tealLight },
      { n: '1.2', head: 'Maintenance', body: 'Formal and informal social control maintain conformity; theories of deviance explain when conformity breaks down.' },
      { n: '1.3', head: 'Change', body: 'Class, gender, ethnicity and age identities shift over time; globalisation creates new, hybrid identities.', fill: C.cream, edge: C.olive },
    ],
    foot: { head: 'Why revise it as a chain?', text: 'Paper 1 questions often span two or more sub-topics, so a continuous argument beats three separate lists of definitions.' },
  }).replace(/font-size="21"([^>]*)>(1\.\d)</g, 'font-size="16"$1>$2<'),
  'Three linked steps: 1.1 construction, where agencies of socialisation transmit norms and values; 1.2 maintenance, where social control keeps conformity and deviance theories explain breakdowns; 1.3 change, where identities shift and globalisation creates hybrid identities.',
  'Socialisation builds identity, social control maintains it, and social change reshapes it.',
  '## The socialisation-to-identity argument, traced through');

// 04 Positivism vs interpretivism
add('04-positivism-interpretivism',
  compareFig('Positivism and interpretivism', {
    labelW: 160, size: 17,
    cols: [{ head: 'Positivist', fill: C.teal }, { head: 'Interpretivist', fill: C.cream }],
    rows: [
      { label: 'Data', cells: ['Quantitative', 'Qualitative'] },
      { label: 'Methods', cells: ['Structured: social surveys, official statistics', 'Less structured: unstructured interviews, participant observation'] },
      { label: 'Aims for', cells: ['Objectivity, reliability, generalisation across a population', 'Validity: rich, authentic understanding of meaning from the subjects’ own perspective, even at some cost to reliability and generalisability'] },
      { label: 'Roots', cells: ['Models sociology on the natural sciences', 'Human behaviour cannot be fully understood by natural-science methods'] },
    ],
    foot: { head: 'Exam skill', text: 'Given an unfamiliar scenario, decide which approach a described method sits closer to, and explain why.' },
  }),
  'Positivists use quantitative, structured methods such as surveys and official statistics to aim for objectivity, reliability and generalisation, modelling sociology on the natural sciences. Interpretivists use qualitative, less structured methods such as unstructured interviews and participant observation to aim for validity and understanding of meaning.',
  'Positivists aim for reliability and generalisation; interpretivists aim for validity and meaning.',
  '## Applying positivism and interpretivism');

// 05 Generic vs method-specific evaluation
add('05-specific-evaluation',
  versusFig('Evaluating a method: generic or specific?', {
    left: { head: 'Generic (scores lower)', fill: C.cream, items: [
      '“Strengths and weaknesses of interviews” in general',
      'Defines positivism and interpretivism in the abstract',
      'Treats 1.1, 1.2 and 1.3 as separate lists'] },
    right: { head: 'Specific (scores higher)', fill: C.teal, items: [
      'Explains why an **unstructured interview** suits a sensitive or hard-to-access topic',
      'Applies positivism and interpretivism to a new research scenario',
      'Uses structure and agency as a lens on specific examples'] },
  }),
  'Generic answers list strengths and weaknesses of interviews in general, define approaches in the abstract and treat sub-topics separately. Specific answers explain why a named method suits a particular research context and apply the approaches to new scenarios.',
  'Mark schemes reward applying a named method to a specific research context.',
  '## How to approach it');
