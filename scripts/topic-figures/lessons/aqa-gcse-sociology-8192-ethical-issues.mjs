import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-sociology-8192-ethical-issues';
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
const pill = (x, y, w, h, s, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${o.fill || C.tealLight}" stroke="${o.edge || C.ink}" stroke-width="2"/>` + label(x + w / 2, y + h / 2 + (o.size || 17) * 0.36, s, { size: o.size || 17, weight: o.weight ?? 700, anchor: 'middle', fill: o.ink || C.ink });
const vcenter = (x, yTop, h, w, s, o = {}) => { const size = o.size || 17; const p = para(0, 0, w, s, o); return para(x, yTop + (h - p.h) / 2 + size * 0.95, w, s, o).svg; };

// 01 Why ethics matter
{
  let s = '';
  s += box(250, 112, 400, 70, { fill: C.mustard, sw: 3 }) + label(450, 145, 'Ethical guidelines', { size: 22, weight: 700, anchor: 'middle' }) + label(450, 170, 'protect three things', { size: 16, anchor: 'middle' });
  const r = cardRow(226, [
    { head: 'Participants', fill: C.teal, body: 'Their wellbeing, reputations and relationships, often in private, painful or illegal parts of life' },
    { head: 'The reputation of research', fill: C.tealLight, body: 'So that people continue to take part' },
    { head: 'Researchers', fill: C.cream, body: 'Who may also face risks' },
  ], { size: 17, headSize: 19 });
  s += arrow(360, 186, 170, 222, { w: 3 }) + arrow(450, 186, 450, 222, { w: 3 }) + arrow(540, 186, 730, 222, { w: 3 });
  s += r.svg;
  const n = note(226 + r.h + 18, 'In the UK', ['Sociologists follow the British Sociological Association’s **Statement of Ethical Practice**', 'Universities usually require an **ethics committee** to approve research plans before work begins']);
  add('01-why-ethics',
    svg(900, Math.round(226 + r.h + 18 + n.h + 24), 'Why ethics matter', s + n.svg),
    'Ethical guidelines protect three things: participants, the reputation of research so people keep taking part, and researchers themselves. Below, UK sociologists follow the British Sociological Association’s Statement of Ethical Practice, and ethics committees approve plans first.',
    'Ethics protect participants, the reputation of research and researchers.',
    '## Why ethics matter in sociology');
}

// 02 Three issues matrix
{
  const f = compareFig('Consent, confidentiality, harm', {
    sub: 'Name the issue, say where it is hard, say how to address it',
    cols: [{ head: 'Consent', fill: C.teal }, { head: 'Confidentiality', fill: C.tealLight }, { head: 'Harm', fill: C.cream }],
    rows: [
      { label: 'What it means', cells: ['Agreeing freely, knowing the aims, tasks, use of data and right to withdraw', 'Information kept private; not shared in a way that identifies people', 'No physical, emotional, social or legal damage'] },
      { label: 'Hardest with', cells: ['Children; vulnerable people; covert research; institutions; newcomers to observed groups', 'Small communities; focus groups; data storage; disclosures of serious harm', 'Sensitive topics; criminal groups; labelling; covert research'] },
      { label: 'How to address', cells: ['Information sheets; written consent; parental consent for under-18s; right to withdraw; check again if research changes', 'Pseudonyms; secure storage under data protection law; anonymous questionnaires; explain limits first', 'Pilot questions; let people skip or stop; debrief; support contacts; protect identities'] },
    ],
    labelW: 130, size: 16, headSize: 19,
  });
  add('02-three-issues', f,
    'A grid of the three ethical issues in the specification. For consent, confidentiality and harm it shows what each means, where it is hardest to manage, and practical ways to address it, such as information sheets, pseudonyms and debriefing.',
    'For each issue, know where it is hard and what a researcher would actually do.',
    '## Why ethics matter in sociology');
}

// 03 Confidentiality vs anonymity
{
  const f = versusFig('Confidentiality is not the same as anonymity', {
    left: { head: 'Confidentiality', fill: C.teal, sub: 'About not REVEALING information', items: ['The researcher may know who said what', 'But does not share it in a way that identifies anyone', 'Use pseudonyms; change identifying details; combine small groups when reporting'] },
    right: { head: 'Anonymity', fill: C.cream, sub: 'About not RECORDING identity', items: ['Identity is not recorded or is hidden', 'Sometimes not even the researcher can link answers to a person', 'Use anonymous questionnaires that do not ask for names'] },
    foot: { head: 'A limit to explain in advance', text: 'If a child reveals they are being abused, the researcher may have a duty to pass this on.' },
  });
  add('03-confidentiality-anonymity', f,
    'Two panels. Confidentiality means not revealing information in a way that identifies people, for example by using pseudonyms. Anonymity means identity is not recorded at all, so not even the researcher can link answers to a person, as with anonymous questionnaires. Below, the limit for disclosures of abuse.',
    'Confidentiality hides what people said; anonymity means their identity is never recorded.',
    '## Confidentiality');
}

// 04 Four kinds of harm
{
  const r = cardRow(108, [
    { head: 'Physical', fill: C.teal, body: 'Danger, for example if an abusive partner finds out about a domestic violence study' },
    { head: 'Emotional', fill: C.tealLight, body: 'Distressing memories on sensitive topics: bereavement, divorce, bullying, self-harm' },
    { head: 'Social', fill: C.cream, body: 'Harm to relationships or reputation, e.g. a study labelling “bottom set” pupils as failures' },
    { head: 'Legal', fill: C.mustard, body: 'Exposure to arrest, e.g. criminal groups identified and punished' },
  ], { size: 16, headSize: 19, gap: 12 });
  const n = note(108 + r.h + 18, 'How harm can be reduced', ['Avoid unnecessary distressing questions; pilot questions first', 'Let participants skip questions or stop at any time', '**Debrief** at the end; give contacts for helplines or counsellors', 'Protect identities; consider harm to the researcher too']);
  add('04-four-harms',
    svg(900, Math.round(108 + r.h + 18 + n.h + 24), 'Four kinds of harm to participants', r.svg + n.svg),
    'Four cards: physical harm, emotional harm from distressing topics, social harm to relationships or reputation, and legal harm such as exposure to arrest. Below, ways to reduce harm: piloting, letting people skip or stop, debriefing, support contacts and protecting identities.',
    'Harm can be physical, emotional, social or legal; each has practical safeguards.',
    '## Harm to participants');
}

// 05 Covert research debate
{
  let s = '';
  // balance beam
  const cx = 450, py = 210;
  s += `<path d="M${cx - 40},300 L${cx},${py + 6} L${cx + 40},300 Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  s += `<rect x="150" y="${py - 7}" width="600" height="14" rx="6" fill="${C.ink}"/>`;
  s += label(250, py - 20, 'Value of the knowledge', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark }) + label(650, py - 20, 'Ethical costs', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  s += label(450, 130, 'Covert observation breaks informed consent and often involves deception', { size: 17, anchor: 'middle', fill: C.muted, italic: true });
  const r = cardRow(320, [
    { head: 'For', fill: C.teal, body: ['Some groups would never allow open study: it may be the only way', 'People behave naturally: high validity, no observer effect', 'Knowledge may benefit society, e.g. revealing harmful practices'] },
    { head: 'Against', fill: C.cream, body: ['Deception breaks trust and ignores the right to choose', 'Researcher may witness or be drawn into illegal acts', 'Participants may be harmed if identified or feel betrayed', 'Can make other groups less willing to take part'] },
  ], { size: 16, headSize: 20, gap: 30 });
  s += r.svg;
  const n = note(320 + r.h + 18, 'Possible compromises', ['Protect identities carefully', 'Seek consent after the observation ends, before publishing', 'Use covert methods only when no open method could work and the benefits are significant (many ethics committees allow it only in exceptional cases)']);
  add('05-covert-debate',
    svg(900, Math.round(320 + r.h + 18 + n.h + 24), 'Covert research: the central debate', s + n.svg),
    'A balance weighs the value of the knowledge against the ethical costs. For covert research: it may be the only way to study some groups, behaviour is natural and the knowledge may benefit society. Against: deception, illegal acts, harm and damage to research’s reputation. Below, compromises such as consent before publishing.',
    'Weigh the value of the knowledge against the ethical cost; never just say “unethical”.',
    '## Covert research: the central debate');
}

// 06 Explain-how answer structure
{
  const rows = [
    ['Consent', 'Information sheet for teenagers and parents; written consent from both; can withdraw at any time'],
    ['Confidentiality', 'Pseudonyms; do not name the school; store recordings securely under data protection law; explain she must pass on a serious risk'],
    ['Harm', 'Let them skip painful questions; debrief at the end; give contacts for support services'],
  ];
  let s = label(450, 96, 'Interviewing teenagers about cyberbullying', { size: 20, anchor: 'middle', fill: C.muted });
  let y = 122;
  rows.forEach(([h, b], i) => {
    const bp = para(0, 0, 560, b, { size: 17 }), rh = Math.max(84, bp.h + 34);
    s += box(30, y, 230, rh, { fill: [C.teal, C.tealLight, C.cream][i], sw: 2.5 }) + label(145, y + rh / 2 + 7, h, { size: 20, weight: 700, anchor: 'middle' });
    s += arrow(264, y + rh / 2, 290, y + rh / 2, { w: 3 });
    s += box(294, y, 576, rh, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + vcenter(310, y, rh, 550, b, { size: 17 });
    y += rh + 12;
  });
  const n = note(y + 8, 'Why it works', ['Covers all three issues the specification names', 'Gives specific actions, not just the issue', 'Fits each action to the topic and the group (under-18s)']);
  add('06-explain-how-answer',
    svg(900, Math.round(y + 8 + n.h + 24), 'An “explain how” answer, mapped', s + n.svg),
    'Three rows map a model answer about interviewing teenagers on cyberbullying. Consent: information sheets, written consent from teenagers and parents and the right to withdraw. Confidentiality: pseudonyms, not naming the school and secure storage. Harm: skipping questions, debriefing and support contacts.',
    'Name each issue, then give a specific action that fits the topic.',
    '## Worked example: an "explain how" answer');
}
