import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'a-level-oxfordaqa-sociology-exploring-sociology';
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

// 01 Units of 9690
{
  let s = '', y = 116;
  const cw = (840 - 4 * 12) / 5;
  const units = [['Unit 1', 'Introducing Sociology', C.teal], ['Unit 2', 'Exploring Sociology', C.mustard], ['Unit 3', 'People and Development', C.cream], ['Unit 4', 'People and the Environment', C.cream], ['Unit 5', 'People and Technology', C.cream]];
  s += `<rect x="30" y="${y}" width="${2 * cw + 12}" height="40" rx="10" fill="${C.tealLight}"/>` + t(30 + cw + 6, y + 27, 'International AS', { size: 18, weight: 700, anchor: 'middle' });
  s += `<rect x="30" y="${y + 50}" width="840" height="40" rx="10" fill="${C.tealLight}"/>` + t(450, y + 77, 'Full International A-level: Units 1 to 5', { size: 18, weight: 700, anchor: 'middle' });
  y += 106;
  units.forEach(([u, n, f], i) => {
    const x = 30 + i * (cw + 12);
    s += `<rect x="${x}" y="${y}" width="${cw}" height="130" rx="12" fill="${f}" stroke="${C.ink}" stroke-width="${i === 1 ? 3.5 : 2.5}"/>`;
    s += t(x + cw / 2, y + 36, u, { size: 20, weight: 700, anchor: 'middle' }) + para(x + cw / 2, y + 70, cw - 20, n, { size: 16, anchor: 'middle' }).svg;
  });
  y += 130 + 14;
  s += label(450, y + 14, 'Units 3 to 5 apply the perspectives and methods built in Units 1 and 2 to applied, contemporary topics', { size: 16, italic: true, anchor: 'middle', fill: C.muted });
  y += 56;
  s += label(450, y + 4, 'Unit 2 assessment (60 marks)', { size: 19, weight: 700, anchor: 'middle' });
  const r2 = cardRow(y + 22, [
    { head: 'Section A: Socialisation and social control', sub: '40 of 60 marks', body: 'Short and extended-response questions on 3.1.2.', fill: C.teal },
    { head: 'Section B: Research methods and theory', sub: '20 marks', body: 'One extended-response question on 3.1.3, the same content examined in Unit 1.', fill: C.cream },
  ], { size: 16 });
  s += r2.svg; y += 22 + r2.h;
  add('01-where-unit-2-fits', svg(900, y + 26, 'Where Unit 2 fits in 9690', s, 'OxfordAQA International A-level Sociology'),
    'Units 1 and 2 make up the International AS; the full A-level adds Units 3 to 5 on development, environment and technology. Unit 2 has 60 marks: Section A on socialisation and social control (40 marks) and Section B on research methods and theory (20 marks).',
    'Unit 2 completes the International AS and is split 40:20 between two sections.',
    '## Where this fits in 9690');
}

// 02 Five sub-sections of 3.1.2
{
  add('02-five-subsections', cardsFig('3.1.2 Socialisation and Social Control', {
    sub: 'five sub-sections: revise against all of them',
    ncol: 2, size: 16, badges: true, headSize: 19,
    cards: [
      { head: 'Individuals and society', body: 'Culture, norms, values, roles, status, stereotypes, subcultures; Mills’s sociological imagination.', fill: C.teal },
      { head: 'Socialisation', body: 'Primary, secondary, re-socialisation, inadequate socialisation; family, school, peers, media, religion, workplace.', fill: C.teal },
      { head: 'Identities and social change', body: 'Age, gender, ethnicity, class, religion, disability, nationality; hybrid and online identities.', fill: C.tealLight },
      { head: 'Social control', body: 'Formal and informal control; sanctions; stigma, othering, punishment, state apparatuses, hegemony.', fill: C.tealLight },
      { head: 'Deviance, harm and crime', body: 'Social construction; crime types; social harms; measurement; patterns by gender, class, age and ethnicity.', fill: C.mustard },
      { head: 'Named sociologists', body: 'Stanley Cohen, Fanon, Goffman, Mead, Mills, Zuboff: all directly assessable.', fill: C.cream },
    ],
  }),
    'Five numbered sub-sections of 3.1.2: individuals and society, socialisation, social identities and social change, social control, and deviance, harm and crime, plus the six named sociologists for Unit 2.',
    'Deviance, harm and crime is a full sub-section, not a footnote.',
    '## How to approach it');
}

// 04 Social control grid
{
  let s = '', y = 104;
  const r = cardRow(y, [
    { head: 'Formal social control', body: ['Government and law', 'Police', 'The criminal justice system'], fill: C.teal },
    { head: 'Informal social control', body: ['Families, schools, peers', 'Media, religion', 'The workplace'], fill: C.cream },
  ], { size: 17 });
  s += r.svg; y += r.h + 14;
  s += `<rect x="30" y="${y}" width="840" height="56" rx="12" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + t(450, y + 35, 'Both use positive sanctions (rewards) and negative sanctions (punishments)', { size: 18, weight: 700, anchor: 'middle' });
  y += 56 + 34;
  s += label(450, y, 'Key concepts', { size: 20, weight: 700, anchor: 'middle' });
  y += 20;
  const r2 = cardRow(y, [
    { head: 'Stigma and othering', body: '**Goffman:** stigma and "spoiled" identity. Othering: treating a group as different from, and inferior to, "us".', fill: C.tealLight },
    { head: 'Althusser (Marxist)', body: 'Repressive and ideological state apparatuses; interpellation.', fill: C.cream },
    { head: 'Gramsci (Marxist)', body: 'Hegemony: rule through the consent of the governed to ruling-class ideas.', fill: C.cream },
  ], { size: 16, headSize: 18 });
  s += r2.svg; y += r2.h + 16;
  const n = note(y, 'Also in 3.1.2.4', 'Aims and types of punishment; crime prevention (types of policing, surveillance). Read through functionalist, Marxist, feminist and interactionist perspectives.');
  s += n.svg; y += n.h;
  add('04-social-control', svg(900, y + 26, 'Social control', s),
    'Formal social control through government, police and courts is compared with informal control through families, schools, peers, media, religion and work. Key concepts are stigma and othering, Althusser’s state apparatuses and interpellation, and Gramsci’s hegemony.',
    'Control can be formal or informal, and every agency uses sanctions.',
    '## Social control (3.1.2.4)');
}

// 05 Measuring crime
{
  add('05-crime-types-measurement', compareFig('Deviance, harm and crime', {
    cols: [{ head: 'What the specification names', fill: C.tealLight }],
    labelW: 200, size: 17,
    rows: [
      { label: 'Social construction', fill: C.teal, cells: ['What counts as crime and deviance is defined by society.'] },
      { label: 'Crime types', fill: C.teal, cells: ['Violent, property, white-collar, corporate, state, environmental, "victimless" and cyber.'] },
      { label: 'Social harms', fill: C.cream, cells: ['Behaviour that is harmful but not criminal.'] },
      { label: 'Measurement', fill: C.cream, cells: ['Official/police statistics, self-report studies, victim surveys.'] },
      { label: 'Patterns', fill: C.mustard, cells: ['Offending and victimisation by gender, social class, age and ethnicity.'] },
    ],
  }),
    'The content of 3.1.2.5: the social construction of crime and deviance, eight named crime types, social harms that are not crimes, three ways of measuring crime, and patterns by gender, class, age and ethnicity.',
    'Crime is socially constructed, measured in several ways and unevenly distributed.',
    '## Deviance, harm and crime (3.1.2.5)');
}

// 06 Positivism vs interpretivism, triangulation
{
  add('06-positivism-interpretivism', versusFig('Positivist and interpretivist methods', {
    left: { head: 'Positivist', sub: 'model sociology on the natural sciences', items: ['Quantifiable, comparable data', 'Structured questionnaires, official statistics, structured observation', 'Identify patterns across large populations'] },
    right: { head: 'Interpretivist', sub: 'behaviour cannot be reduced to countable variables', items: ['Meaning and lived experience', 'Unstructured interviews, participant observation, personal documents'] },
    foot: { head: 'Triangulation', text: 'Most research does not sit purely in one camp: combine quantitative and qualitative methods to offset the weaknesses of each.' },
  }),
    'Positivists favour quantifiable methods such as questionnaires and official statistics to find patterns; interpretivists favour unstructured interviews and participant observation to capture meaning. Triangulation combines the two.',
    'Strong answers recognise that triangulation can combine both traditions.',
    '## Research methods and theory, revisited');
}

// 07 Worked example
{
  add('07-worked-example', compareFig('Why do some working-class students underachieve?', {
    cols: [{ head: 'Positivist approach', fill: C.teal }, { head: 'Interpretivist approach', fill: C.cream }],
    labelW: 140, size: 16,
    rows: [
      { label: 'Method', cells: ['Large-scale official statistics on exam results by social class.', 'Unstructured interviews or classroom observation with a small number of students.'] },
      { label: 'Strength', cells: ['Representative; reveals broad patterns.', 'Reveals lived experience of labelling, teacher expectation or subcultural pressure.'] },
      { label: 'Limitation', cells: ['Limited in explaining why the pattern exists.', 'Limited in how far findings can be generalised.'] },
    ],
    foot: { head: 'What makes it strong', text: 'Explain that the choice reflects a real theoretical disagreement about valid knowledge, and consider triangulating both to capture pattern and meaning together.' },
  }),
    'Positivist and interpretivist approaches to working-class underachievement compared: official statistics show broad patterns but not causes, while interviews and observation reveal experience but are hard to generalise.',
    'Justify the method choice theoretically, not only practically.',
    '## Worked example: applying theory to method choice');
}
