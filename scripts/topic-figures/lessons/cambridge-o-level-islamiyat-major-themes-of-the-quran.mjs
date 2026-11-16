import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-islamiyat-major-themes-of-the-quran';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText.replace(/viewBox="0 0 (\d+) ([\d.]+)" width="(\d+)" height="([\d.]+)"/, (m, w, h, w2) => `viewBox="0 0 ${w} ${Math.ceil(h)}" width="${w2}" height="${Math.ceil(h)}"`), alt, caption, after });

// ---- local helpers (kept in this file so style.mjs stays shared and unchanged) ----
const wrap = (s, size, width, bold = false) => {
  const max = Math.floor(width / (size * (bold ? 0.56 : 0.5))); const out = [''];
  for (const w of s.split(' ')) { const cur = out[out.length - 1]; if (cur && (cur + ' ' + w).length > max) out.push(w); else out[out.length - 1] = cur ? cur + ' ' + w : w; }
  return out;
};
const isBold = (o) => (o.weight || 400) >= 600;
const para = (x, y, s, width, opts = {}, lh) => { const size = opts.size || 17; return tl(x, y, wrap(s, size, width, isBold(opts)), opts, lh || size * 1.3); };
const nl = (s, size, width, bold = false) => wrap(s, size, width, bold).length;
const rect = (x, y, w, h, fill, edge = C.ink, sw = 2.5, rx = 12) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
// centred, wrapped text block around (cx, cy)
const ctext = (cx, cy, s, width, opts = {}, lh) => {
  const size = opts.size || 17; const L = wrap(s, size, width, isBold(opts)); const h = lh || size * 1.28;
  return tl(cx, cy - ((L.length - 1) * h) / 2 + size * 0.35, L, { ...opts, anchor: 'middle' }, h);
};
// card with bold head and wrapped body; cardH gives the height it needs
const cardH = (head, body, w, { headSize = 19, size = 17, pad = 16 } = {}) =>
  pad * 2 + (head ? nl(head, headSize, w - 2 * pad, true) * headSize * 1.3 : 0) + (head && body ? 6 : 0) + (body ? nl(body, size, w - 2 * pad) * size * 1.32 : 0) - 4;
const card = (x, y, w, h, { head, body, fill = C.panel, edge = C.panelEdge, headSize = 19, size = 17, pad = 16, headFill = C.ink, bodyFill = C.muted } = {}) => {
  const hl = head ? nl(head, headSize, w - 2 * pad, true) : 0;
  return rect(x, y, w, h, fill, edge, 2.5, 12) +
    (head ? para(x + pad, y + pad + headSize * 0.82, head, w - 2 * pad, { size: headSize, weight: 700, fill: headFill }) : '') +
    (body ? para(x + pad, y + pad + (head ? hl * headSize * 1.3 + 6 : 0) + size * 0.82, body, w - 2 * pad, { size, fill: bodyFill }, size * 1.32) : '');
};
// cream takeaway box like the reference
const note = (x, y, w, head, body, size = 17) => {
  const h = cardH(head, body, w, { headSize: 19, size, pad: 20 });
  return { h, s: card(x, y, w, h, { head, body, fill: C.cream, edge: C.mustard, headSize: 19, size, pad: 20 }) };
};
const pline = (d, { color = C.ink, w = 3.5, marker = 'ah', dash = '' } = {}) =>
  `<path d="${d}" fill="none" stroke="${color}" stroke-width="${w}" stroke-linejoin="round"${marker ? ` marker-end="url(#${marker})"` : ''}${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const chip = (x, y, w, h, label, { fill = C.tealLight, edge = C.tealDark, size = 18, weight = 700, color = C.ink } = {}) =>
  rect(x, y, w, h, fill, edge, 2.5, h / 2 > 14 ? 14 : h / 2) + ctext(x + w / 2, y + h / 2, label, w - 16, { size, weight, fill: color });

// 01 Three theme categories on a foundation of tawhid
{
  const cols = [
    ['God in Himself', 'His nature and attributes', ['Oneness (tawhid)', 'Power', 'Knowledge', 'Mercy'], C.cream, C.mustard],
    ['God and the created world', 'how He relates to creation', ['Humanity\'s purpose and responsibility', 'Guidance for individual and communal life', 'Accountability in the afterlife (akhirah)'], C.tealLight, C.tealDark],
    ['God\'s Messengers', 'why prophets are sent', ['Their role and significance', 'The guidance and revelation they brought', 'Their relationship with their communities'], C.cream, C.mustard],
  ];
  let b = '';
  cols.forEach(([h, sub, items, f, e], i) => {
    const x = 30 + i * 284, w = 272;
    b += rect(x, 110, w, 304, C.panel, e, 2.5, 14) + rect(x, 110, w, 104, f, e, 2.5, 14) + badge(x + 32, 156, 18, String(i + 1), C.panel) +
      para(x + 60, 150, h, w - 72, { size: 19, weight: 700 }, 23) + t(x + 60, 152 + nl(h, 19, w - 72, true) * 23, sub, { size: 15, fill: C.muted });
    let y = 248;
    items.forEach((it) => { b += `<circle cx="${x + 22}" cy="${y - 6}" r="5" fill="${e}"/>` + para(x + 36, y, it, w - 52, { size: 17 }, 22); y += nl(it, 17, w - 52) * 22 + 14; });
  });
  b += rect(30, 430, 840, 76, C.ink, C.ink, 0, 14) + t(450, 464, 'Tawhid: the oneness of God', { size: 21, weight: 700, anchor: 'middle', fill: '#ffffff' }) + t(450, 490, 'the foundation that frames how every other theme is understood', { size: 16, anchor: 'middle', fill: C.cream });
  add('01-three-theme-categories',
    svg(900, 530, 'Three categories of Qur\'anic themes', b),
    'Three columns stand on a base labelled tawhid. God in Himself covers His oneness, power, knowledge and mercy. God and the created world covers humanity\'s purpose, guidance for life and accountability in the akhirah. God\'s Messengers covers their role, the revelation they brought and their relationship with their communities.',
    'Every set passage fits one of three categories, all resting on tawhid.',
    '## Syllabus coverage');
}

// 02 Question 1 at a glance
{
  let b = '';
  ['A', 'B', 'C'].forEach((n, i) => {
    const x = 90 + i * 250, pick = i < 2;
    b += rect(x, 120, 220, 110, pick ? C.cream : C.panel, pick ? C.mustard : C.panelEdge, pick ? 3.5 : 2.5, 14) + t(x + 110, 166, 'Passage ' + n, { size: 21, weight: 700, anchor: 'middle', fill: pick ? C.ink : C.muted }) +
      t(x + 110, 198, pick ? 'chosen' : 'not chosen', { size: 16, anchor: 'middle', fill: pick ? C.olive : C.muted, weight: 600 });
  });
  b += t(450, 266, 'Three passages set in Arabic and English: choose any two', { size: 18, weight: 700, anchor: 'middle', fill: C.muted });
  b += rect(30, 290, 410, 130, C.tealLight, C.tealDark, 2.5, 14) + t(56, 330, 'Its themes', { size: 22, weight: 700 }) + t(844 - 430, 330, '4 marks', { size: 19, weight: 700, anchor: 'end', fill: C.tealDark }) +
    para(56, 364, 'Name the category and support it with a phrase from the passage.', 360, { size: 17, fill: C.ink }, 22);
  b += rect(460, 290, 410, 130, C.tealLight, C.tealDark, 2.5, 14) + t(486, 330, 'Its importance today', { size: 22, weight: 700 }) + t(844, 330, '4 marks', { size: 19, weight: 700, anchor: 'end', fill: C.tealDark }) +
    para(486, 364, 'Explain why it matters for Muslims today.', 360, { size: 17, fill: C.ink }, 22);
  b += rect(30, 444, 840, 92, '#f3dccd', C.rust, 2.5, 14) + t(56, 480, 'Compulsory, so prepare all three categories', { size: 20, weight: 700 }) +
    t(56, 510, 'Revising only one category risks finding none of the three passages accessible.', { size: 17, fill: C.ink });
  add('02-question-1-at-a-glance',
    svg(900, 560, 'Question 1 at a glance', b),
    'Three passages are set and two are chosen. The answer explains the passage\'s themes (4 marks) and its importance for Muslims today (4 marks). A warning box notes that Question 1 is compulsory, so passages from all three categories should be prepared.',
    'Choose two of three passages: themes, then importance today.',
    '## Where this fits in 2058');
}

// 03 Guidance paired with accountability
{
  let b = rect(30, 120, 340, 200, C.cream, C.mustard, 3, 14) + t(200, 162, 'Guidance', { size: 25, weight: 700, anchor: 'middle' }) + t(200, 190, 'how to live', { size: 17, anchor: 'middle', fill: C.olive, weight: 600 });
  ['honesty', 'charity', 'patience'].forEach((w, i) => { b += rect(56 + i * 100, 222, 92, 40, C.panel, C.mustard, 2, 20) + t(102 + i * 100, 248, w, { size: 16, anchor: 'middle', weight: 600 }); });
  b += rect(530, 120, 340, 200, C.tealLight, C.tealDark, 3, 14) + t(700, 162, 'Accountability', { size: 25, weight: 700, anchor: 'middle' }) + t(700, 190, 'conduct will be judged', { size: 17, anchor: 'middle', fill: C.tealDark, weight: 600 }) +
    ctext(700, 248, 'The afterlife (akhirah) gives moral choices their ultimate meaning', 300, { size: 17 }, 22);
  b += pline('M376,200 L524,200', { marker: 'ah', w: 4 }) + pline('M524,240 L376,240', { marker: 'ah', w: 4 });
  b += t(450, 190, 'linked to', { size: 15, anchor: 'middle', fill: C.muted, italic: true }) + t(450, 266, 'gives meaning', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  b += arrow(450, 324, 450, 358, { w: 4 });
  b += rect(150, 364, 600, 90, C.panel, C.ink, 2.5, 14) + t(450, 400, 'Your answer explains what it teaches', { size: 19, weight: 700, anchor: 'middle' }) + t(450, 430, 'and why it matters', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('03-guidance-and-accountability',
    svg(900, 478, 'Guidance and accountability, together', b),
    'Guidance on conduct such as honesty, charity and patience is linked to accountability: conduct will be judged and the afterlife gives choices their meaning. Using the pair lets an answer explain both what a passage teaches and why it matters.',
    'Qur\'anic guidance is rarely given without its consequence in the hereafter.',
    '## Guidance and accountability, together');
}

// 04 Messengers as a connected chain
{
  let b = '';
  for (let i = 0; i < 5; i++) {
    const x = 70 + i * 160;
    b += `<circle cx="${x + 40}" cy="170" r="38" fill="${i === 4 ? C.cream : C.tealLight}" stroke="${i === 4 ? C.mustard : C.tealDark}" stroke-width="3"/>` + t(x + 40, 177, i === 4 ? '...' : 'prophet', { size: 15, anchor: 'middle', weight: 600 });
    if (i < 4) b += `<line x1="${x + 80}" y1="170" x2="${x + 158}" y2="170" stroke="${C.ink}" stroke-width="4" stroke-dasharray="2 8" stroke-linecap="round"/>`;
  }
  b += t(450, 240, 'A connected chain with one consistent core message across times and communities', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  const why = [['Deliver guidance', ''], ['Warn communities', 'of the consequences of rejecting it'], ['Model righteous conduct', 'for others to follow']];
  why.forEach(([h, d], i) => {
    const x = 30 + i * 284;
    b += rect(x, 268, 272, 96, C.panel, C.panelEdge, 2.5, 14) + t(x + 136, d ? 304 : 322, h, { size: 19, weight: 700, anchor: 'middle' }) + (d ? ctext(x + 136, 336, d, 250, { size: 16, fill: C.muted }, 20) : '');
  });
  b += t(450, 404, 'An answer on a prophet passage needs both:', { size: 18, weight: 700, anchor: 'middle', fill: C.muted });
  b += rect(70, 424, 340, 84, C.panel, C.panelEdge, 2.5, 14) + ctext(240, 466, 'The account of the prophet\'s mission', 300, { size: 17, weight: 600 });
  b += t(450, 476, '+', { size: 30, weight: 700, anchor: 'middle' });
  b += rect(490, 424, 340, 84, C.cream, C.mustard, 3, 14) + ctext(660, 466, 'The wider lesson: faith, patience or the people\'s response', 300, { size: 17, weight: 600 }, 21);
  add('04-messengers-as-a-chain',
    svg(900, 532, 'God\'s Messengers as a theme', b),
    'Prophets are shown as linked circles in a chain carrying one consistent message. Three cards give why messengers are sent: to deliver guidance, warn communities and model righteous conduct. A strong answer adds the wider lesson to the account of the prophet\'s mission.',
    'Narrate the mission, then draw out the wider lesson.',
    '## The role of God\'s Messengers as a theme');
}

// 05 Categorising a passage
{
  const st = [
    ['Read the whole passage', 'Do not judge the theme from the first line alone.'],
    ['Ask what it establishes about God', ''],
    ['Note any secondary themes', 'Many passages touch more than one category: name the primary one, acknowledge the others.'],
    ['Support it with the text', 'Name a specific phrase or idea from the passage.'],
  ];
  let b = '', y = 112;
  st.forEach(([h, d], i) => {
    const hh = i === 1 ? 188 : i === 2 ? 112 : 92;
    b += rect(30, y, 840, hh, i === 1 ? C.cream : C.panel, i === 1 ? C.mustard : C.panelEdge, 2.5, 14) + badge(76, y + 46, 22, String(i + 1), i === 1 ? C.mustard : C.tealLight) + t(116, y + 40, h, { size: 21, weight: 700 });
    if (d) b += para(116, y + 70, d, 720, { size: 17, fill: C.muted }, 22);
    if (i === 1) {
      ['His nature', 'His relationship with creation', 'The role of a messenger'].forEach((c, j) => {
        const x = 116 + j * 250;
        b += rect(x, y + 80, 232, 90, C.panel, C.mustard, 2, 12) + t(x + 116, y + 112, ['God in Himself', 'God and creation', 'God\'s Messengers'][j], { size: 17, weight: 700, anchor: 'middle', fill: C.olive }) + ctext(x + 116, y + 145, c, 210, { size: 16 }, 20);
      });
    }
    y += hh + 14;
  });
  add('05-categorising-a-passage',
    svg(900, y + 10, 'Identifying a passage\'s theme', b),
    'Four steps: read the whole passage; ask what it establishes about God, choosing between God in Himself, God and creation, or God\'s Messengers; note any secondary themes; and support the choice with a specific phrase from the passage.',
    'Read fully, categorise, note secondary themes, then quote the text.',
    '## Worked example: identifying a passage\'s theme category');
}
