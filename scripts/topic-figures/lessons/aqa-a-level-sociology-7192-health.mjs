import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-sociology-7192-health';
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

// 02 Parsons' sick role
{
  let s = '', y = 120;
  s += `<rect x="300" y="${y}" width="300" height="58" rx="14" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + t(450, y + 37, 'The sick role', { size: 22, weight: 700, anchor: 'middle' });
  s += arrow(330, y + 62, 230, y + 104) + arrow(570, y + 62, 670, y + 104);
  y += 112;
  const r = cardRow(y, [
    { head: 'Two rights', body: ['Exemption from normal duties', 'Not being blamed for the illness'], fill: C.teal },
    { head: 'Two obligations', body: ['Wanting to get well', 'Seeking technically competent help and cooperating with it'], fill: C.cream },
  ], { size: 17 });
  s += r.svg; y += r.h + 14;
  s += `<rect x="30" y="${y}" width="840" height="54" rx="12" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + t(450, y + 34, 'The doctor acts as gatekeeper to the sick role', { size: 18, weight: 700, anchor: 'middle' });
  y += 54 + 16;
  const n = note(y, 'Evaluation', ['Fits short, acute illness; fits chronic illness badly, as the person may never "get well"', 'Ignores stigmatised conditions where people are blamed (Goffman)']);
  s += n.svg; y += n.h;
  add('02-sick-role', svg(900, y + 26, 'Parsons (1951): illness as deviance', s, 'functionalism'),
    'Parsons’ sick role gives the sick person two rights, exemption from duties and freedom from blame, and two obligations, wanting to get well and seeking competent help, with the doctor as gatekeeper.',
    'The sick role manages illness as a form of temporary, approved deviance.',
    '## Point 1: social construction of health, illness, disability and the body');
}

// 03 The illness iceberg
{
  let s = '';
  const wl = 250;
  s += `<rect x="30" y="${wl}" width="840" height="360" fill="${C.teal}"/>` + `<line x1="30" y1="${wl}" x2="870" y2="${wl}" stroke="${C.tealDark}" stroke-width="3"/>`;
  s += `<path d="M300,${wl} L370,150 L420,128 L470,160 L520,${wl} Z" fill="#ffffff" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  s += `<path d="M300,${wl} L520,${wl} L640,330 L690,450 L620,560 L420,590 L250,540 L170,420 L210,320 Z" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round" stroke-dasharray="10 7"/>`;
  s += tl(560, 150, ['Reaches health services', 'the visible tip: recorded illness'], { size: 18, weight: 700 }, 24);
  s += arrow(555, 170, 505, 195, { w: 3 });
  s += tl(430, 400, ['Illness that never', 'comes to the attention', 'of health services'], { size: 19, weight: 700, anchor: 'middle' }, 26);
  s += t(860, wl + 26, 'water line', { size: 15, anchor: 'end', fill: C.tealDark, weight: 600 });
  let y = 630;
  const n = note(y, 'Why it matters', 'Recorded illness is only the visible tip, so official health figures understate how much illness there is. Lay definitions (Blaxter and Paterson, 1982) shape who goes to a doctor.');
  s += n.svg; y += n.h;
  add('03-illness-iceberg', svg(900, y + 26, 'The illness iceberg (Last, 1963)', s),
    'An iceberg: the small tip above the water is illness that reaches health services and is recorded; the much larger mass below is illness that never comes to their attention.',
    'Only a small share of illness ever reaches a doctor.',
    '## Point 1: social construction of health, illness, disability and the body');
}

// 04 Explaining class inequalities in health
{
  add('04-class-explanations', cardsFig('Why does health follow class?', {
    sub: 'four explanations, plus a psychosocial one',
    ncol: 2, size: 16, badges: true,
    cards: [
      { head: 'Artefact', body: 'The gap is a product of how class and death are measured.', fill: C.panel },
      { head: 'Social selection', body: 'Ill people drift down the class scale.', fill: C.panel },
      { head: 'Cultural / behavioural', body: 'Lower classes smoke, drink and eat in less healthy ways. Risks blaming the victim.', fill: C.cream },
      { head: 'Material / structural', body: 'Poverty, poor housing and hazardous work cause ill health. Favoured by the Black Report (1980) and Acheson (1998).', fill: C.teal },
    ],
    foot: { head: 'Psychosocial: the Whitehall studies (Marmot)', text: 'Lowest-grade civil servants had three times the death rate of the highest; risk factors explained only part. Low status and control cause harmful stress, which explains a gradient even among people who are not poor.' },
  }),
    'Four explanations of class inequalities in health: artefact, social selection, cultural or behavioural, and material or structural, which the Black Report favoured. The Whitehall studies add a psychosocial explanation based on low control and stress.',
    'Material explanations dominate, but the Whitehall gradient needs a psychosocial account too.',
    '## Point 2: unequal health chances by class, gender, ethnicity and region');
}

// 05 Inverse care law
{
  let s = '';
  const x0 = 120, x1 = 840, y0 = 140, y1 = 420;
  s += panel(30, 110, 840, 380);
  s += `<line x1="${x0}" y1="${y1}" x2="${x1}" y2="${y1}" stroke="${C.ink}" stroke-width="3"/>` + `<line x1="${x0}" y1="${y0}" x2="${x0}" y2="${y1}" stroke="${C.ink}" stroke-width="3"/>`;
  s += `<line x1="${x0 + 20}" y1="${y0 + 30}" x2="${x1 - 20}" y2="${y1 - 40}" stroke="${C.rust}" stroke-width="6"/>`;
  s += `<line x1="${x0 + 20}" y1="${y1 - 40}" x2="${x1 - 20}" y2="${y0 + 30}" stroke="${C.tealDark}" stroke-width="6"/>`;
  s += t(x0 + 40, y0 + 18, 'Need for care', { size: 19, weight: 700, fill: C.rust });
  s += t(x1 - 20, y0 + 18, 'Availability of good care', { size: 19, weight: 700, fill: C.tealDark, anchor: 'end' });
  s += t(x0, y1 + 30, 'Most deprived areas', { size: 17, weight: 600 }) + t(x1, y1 + 30, 'Least deprived areas', { size: 17, weight: 600, anchor: 'end' });
  s += t(450, y1 + 58, 'schematic: no data plotted', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  let y = 510;
  const n = note(y, 'Tudor Hart (1971)', '"The availability of good medical care tends to vary inversely with the need for it in the population served." He said it works most fully under market forces, so without the free NHS (1948) the gap could be wider.');
  s += n.svg; y += n.h;
  add('05-inverse-care-law', svg(900, y + 26, 'The inverse care law', s),
    'A schematic with two crossing lines: need for care is highest in the most deprived areas, while the availability of good care is highest in the least deprived areas.',
    'Good care tends to be least available where it is most needed.',
    '## Point 3: inequalities in provision of and access to health care');
}

// 06 Mental illness: realist vs social constructionist
{
  add('06-mental-illness-approaches', versusFig('What is mental illness?', {
    left: { head: 'Realist approach', items: ['Real conditions causing genuine distress', 'Identifiable, often social, causes', '**Brown and Harris (1978):** depression linked to life events and vulnerability'] },
    right: { head: 'Social constructionist approach', items: ['What counts as illness reflects the judgements of those with power to define it', '**Szasz (1961):** psychiatry turns difficulties of living into "illness"', '**Scheff (1966):** a label can reinforce the behaviour it describes', '**Goffman (1961):** total institutions strip away the former self'] },
    foot: { head: 'Use with care', text: 'Rosenhan (1973) reported "pseudopatients" admitted to hospital, but Cahalan (2019) found inconsistent data and misleading descriptions. Labelling explains the effect of diagnosis, not the original behaviour.' },
  }),
    'The realist approach treats mental illness as real distress with social causes; the social constructionist approach, from Szasz, Scheff and Goffman, sees it as defined and reinforced by those with power to label.',
    'Realists study causes of distress; constructionists study the power to define it.',
    '## Point 4: the nature and social distribution of mental illness');
}

// 07 Brown and Harris
{
  let s = '', y = 104;
  const r = cardRow(y, [
    { head: 'Life events and difficulties', body: ['Severe life events, such as a bereavement', 'Long-term difficulties'], fill: C.cream },
    { head: 'Vulnerability factors', body: ['No intimate, confiding relationship', 'No paid work outside the home', 'Lost mother before age 11'], fill: C.tealLight },
  ], { size: 17, gap: 80 });
  s += r.svg;
  s += `<circle cx="450" cy="${y + r.h / 2}" r="24" fill="${C.ink}"/>` + t(450, y + r.h / 2 + 9, '+', { size: 28, weight: 700, fill: '#ffffff', anchor: 'middle' });
  y += r.h;
  s += arrow(450, y + 8, 450, y + 50);
  y += 58;
  s += `<rect x="290" y="${y}" width="320" height="58" rx="14" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + t(450, y + 37, 'Depression', { size: 22, weight: 700, anchor: 'middle' });
  y += 58 + 22;
  const r2 = cardRow(y, [
    { head: 'Finding', body: 'Working-class women were much more likely to become depressed once a severe event had occurred.', fill: C.teal },
    { head: 'Evaluation', body: 'Relied on recall of past events, and studied women only.', fill: C.cream },
  ], { size: 16, headSize: 18 });
  s += r2.svg; y += r2.h;
  add('07-brown-harris', svg(900, y + 26, 'Brown and Harris (1978): depression in Camberwell', s, 'a realist, structural explanation'),
    'Severe life events and long-term difficulties, combined with vulnerability factors such as having no one to confide in, no paid work outside the home or losing one’s mother before 11, lead to depression.',
    'Depression arises from life events acting on social vulnerability.',
    '## Point 4: the nature and social distribution of mental illness');
}

// 08 Illich's iatrogenesis
{
  add('08-iatrogenesis', cardsFig('Illich (1975): medicine as a cause of harm', {
    sub: 'three kinds of iatrogenesis',
    ncol: 3, size: 16,
    cards: [
      { head: 'Clinical', body: 'Injury from unsafe or wrong treatment.', fill: C.cream },
      { head: 'Social', body: 'Medicalisation of life and dependence on medical care.', fill: C.cream },
      { head: 'Cultural', body: 'Loss of traditional ways of coping with suffering and death.', fill: C.cream },
    ],
    foot: { head: 'Did medicine cut death rates?', text: ['**McKeown (1976):** death rates since the late 18th century fell mainly through better living standards, especially nutrition', '**Szreter:** McKeown underplayed public health such as clean water and sanitation'] },
  }),
    'Illich’s three kinds of iatrogenesis: clinical harm from treatment, social harm from medicalisation, and cultural harm from losing traditional ways of coping. McKeown and Szreter debate why death rates fell.',
    'Critics question how much medicine itself improves health.',
    '## Point 5: medicine, the health professions and the globalised health industry');
}
