import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-igcse-islamiyat-rightly-guided-caliphs';
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

// 01 Narrating vs explaining
{
  let b = rect(30, 110, 400, 300, C.panel, C.panelEdge, 2.5, 14) + t(56, 148, 'Narrating', { size: 23, weight: 700, fill: C.rust }) + t(56, 174, 'states what happened', { size: 17, fill: C.muted }) +
    rect(56, 200, 348, 90, '#f3dccd', C.rust, 2.5, 12) + ctext(230, 245, 'Abu Bakr fought the Wars of Apostasy (Ridda wars).', 320, { size: 18, weight: 600 }, 24) +
    para(56, 330, 'Accurate, but on its own it does not answer a significance question.', 348, { size: 17, fill: C.muted }, 23);
  b += rect(470, 110, 400, 300, C.panel, C.tealDark, 3, 14) + t(496, 148, 'Explaining', { size: 23, weight: 700, fill: C.tealDark }) + t(496, 174, 'says why it mattered', { size: 17, fill: C.muted }) +
    rect(496, 200, 348, 56, C.tealLight, C.tealDark, 2.5, 12) + ctext(670, 228, 'Held the early community together', 340, { size: 17, weight: 600 }) +
    arrow(670, 258, 670, 284, { w: 3 }) +
    rect(496, 290, 348, 96, C.teal, C.tealDark, 2.5, 12) + ctext(670, 338, 'Islam survived as a unified faith and political community after the Prophet\'s death', 320, { size: 17, weight: 600 }, 22);
  b += arrow(432, 245, 466, 245, { w: 4 });
  add('01-narrate-vs-explain',
    svg(900, 434, 'Narrating versus explaining', b),
    'Two panels. Narrating states only that Abu Bakr fought the Ridda wars. Explaining adds why it mattered: he held the early community together, so Islam survived as a unified faith and political community after the Prophet\'s death.',
    'Marks come from saying why an event mattered, not just that it happened.',
    '## How to approach it');
}

// 02 Timeline 632-661 with main events
{
  const cal = [
    ['Abu Bakr', 632, 634, ['Ridda wars: tribes renounced allegiance to Madinah', 'Held the community together'], C.cream, C.mustard],
    ['Umar ibn al-Khattab', 634, 644, ['Rapid territorial expansion', 'Built the administration: taxation, the diwan, treatment of non-Muslim subjects'], C.tealLight, C.tealDark],
    ['Uthman ibn Affan', 644, 656, ['Standardised written Qur\'an sent to the major centres', 'Growing unrest; assassinated'], C.cream, C.mustard],
    ['Ali ibn Abi Talib', 656, 661, ['First Fitna: Battles of the Camel and Siffin', 'Shaped the later Sunni-Shi\'a division'], C.tealLight, C.tealDark],
  ];
  const X = (yr) => 50 + ((yr - 632) / 29) * 800;
  let b = '';
  cal.forEach(([n, a, z, ev, f, e], i) => {
    b += rect(X(a), 130, X(z) - X(a), 44, f, e, 2.5, 6);
  });
  [632, 634, 644, 656, 661].forEach((y) => { b += `<line x1="${X(y)}" y1="124" x2="${X(y)}" y2="182" stroke="${C.ink}" stroke-width="2.5"/>` + t(X(y) + (y === 632 ? -4 : y === 634 ? 4 : 0), 112, String(y), { size: 17, weight: 700, anchor: y === 632 ? 'end' : y === 634 ? 'start' : 'middle' }); });
  b += t(450, 556, 'Bar lengths show years of rule (CE), drawn to scale.', { size: 15, anchor: 'middle', fill: C.muted });
  const cw = 202, gx = 11;
  cal.forEach(([n, a, z, ev, f, e], i) => {
    const x = 30 + i * (cw + gx), mid = (X(a) + X(z)) / 2;
    b += pline(`M${mid},176 L${mid},190 L${x + cw / 2},236 L${x + cw / 2},246`, { w: 2.5, color: e, marker: '' });
    b += rect(x, 246, cw, 282, C.panel, e, 2.5, 14) + rect(x, 246, cw, 86, f, e, 2.5, 14) +
      ctext(x + cw / 2, 280, n, cw - 20, { size: 19, weight: 700 }, 23) + t(x + cw / 2, 320, `${a}–${z}`, { size: 16, anchor: 'middle', fill: C.muted, weight: 600 });
    let y = 362;
    ev.forEach((s) => { b += `<circle cx="${x + 18}" cy="${y - 6}" r="5" fill="${e}"/>` + para(x + 32, y, s, cw - 44, { size: 16 }, 21); y += nl(s, 16, cw - 44) * 21 + 16; });
  });
  add('02-rightly-guided-caliphs-timeline',
    svg(900, 578, 'The Rightly Guided Caliphs, 632–661', b),
    'A scaled timeline from 632 to 661 CE divided into Abu Bakr (632–634), Umar (634–644), Uthman (644–656) and Ali (656–661), with a card of main events for each: the Ridda wars; expansion and the diwan; the standardised Qur\'an and Uthman\'s assassination; and the First Fitna with the Battles of the Camel and Siffin.',
    'Four Caliphs in order, each with the events that define his rule.',
    '## The four Caliphs, one at a time');
}

// 03 Revision triad
{
  const slots = [['1', 'One achievement', 'Held the community together after the Prophet\'s death', C.tealLight, C.tealDark], ['2', 'One difficulty', 'The Ridda wars: tribes renounced allegiance to Madinah', '#f3dccd', C.rust], ['3', 'One sentence linking it to leadership', 'His firmness is seen as critical to Islam\'s survival as a unified community', C.cream, C.mustard]];
  let b = t(450, 128, 'Example: Abu Bakr', { size: 20, weight: 700, anchor: 'middle', fill: C.muted });
  slots.forEach(([n, h, d, f, e], i) => {
    const y = 148 + i * 116;
    b += rect(30, y, 840, 100, f, e, 2.5, 14) + badge(76, y + 50, 24, n, C.panel) + t(120, y + 40, h, { size: 21, weight: 700 }) + t(120, y + 72, d, { size: 18, fill: C.ink });
  });
  b += rect(30, 506, 840, 64, C.panel, C.panelEdge, 2.5, 14) + t(450, 546, 'Repeat for Umar, Uthman and Ali before the exam.', { size: 19, weight: 600, anchor: 'middle' });
  add('03-abu-bakr-revision-triad',
    svg(900, 594, 'One achievement, one difficulty, one link', b),
    'A three-slot revision card filled in for Abu Bakr: achievement, holding the community together; difficulty, the Ridda wars; and a linking sentence, that his firmness was critical to Islam\'s survival as a unified community. A note says to repeat it for the other three Caliphs.',
    'Prepare the same three slots for each Caliph so comparisons come easily.',
    '## Achievements and difficulties: a comparative approach');
}

// 04 Legacy themes
{
  const cx = 450, cy = 360;
  const th = [['Just governance', 260, 190], ['Consultation (shura)', 640, 190], ['Ruler and community', 260, 530], ['Relations with other states', 640, 530]];
  let b = '';
  th.forEach(([s, x, y]) => { b += `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="${C.tealDark}" stroke-width="3.5"/>`; });
  b += rect(cx - 170, cy - 62, 340, 124, C.cream, C.mustard, 3.5, 18) + ctext(cx, cy - 14, 'The Rightly Guided Caliphate', 300, { size: 21, weight: 700 }) + t(cx, cy + 34, 'a reference point for...', { size: 17, anchor: 'middle', fill: C.muted, italic: true });
  th.forEach(([s, x, y]) => { b += rect(x - 150, y - 42, 300, 84, C.tealLight, C.tealDark, 2.5, 14) + ctext(x, y, s, 270, { size: 20, weight: 700 }); });
  b += rect(30, 600, 840, 66, C.panel, C.panelEdge, 2.5, 14) + t(450, 641, 'Significant at the time and since, not only in the seventh century.', { size: 19, weight: 600, anchor: 'middle' });
  add('04-caliphs-as-models',
    svg(900, 690, 'Why the Caliphs still matter', b),
    'The Rightly Guided Caliphate sits at the centre as a reference point for four themes: just governance, consultation (shura), the relationship between ruler and community, and relations with other states.',
    'Islamic political thought looks back to this period as a model of leadership.',
    '## Achievements and difficulties: a comparative approach');
}

// 05 Four-step significance answer
{
  const st = [
    ['State a specific action or policy', 'Umar established administrative systems, including the diwan (register) for state finances and military pay.'],
    ['Explain the problem it solved', 'Rapid expansion created a need for organised governance across a much larger and more diverse state.'],
    ['Explain the lasting significance', 'These structures provided a model for governance used and adapted by later Islamic states.'],
    ['Connect to leadership qualities', 'It reflects Umar\'s reputation for justice and practical governance.'],
  ];
  let y = 146, b = t(180, 130, 'The step', { size: 17, weight: 700, anchor: 'middle', fill: C.muted }) + t(618, 130, 'Worked example: Umar', { size: 17, weight: 700, anchor: 'middle', fill: C.muted });
  st.forEach(([h, d], i) => {
    const hh = 100;
    b += rect(30, y, 300, hh, i === 2 ? C.cream : C.tealLight, i === 2 ? C.mustard : C.tealDark, 2.5, 14) + badge(70, y + hh / 2, 22, String(i + 1), i === 2 ? C.mustard : C.panel) + para(106, y + hh / 2 - (nl(h, 19, 220, true) - 1) * 12 + 6, h, 220, { size: 19, weight: 700 }, 24);
    b += arrow(332, y + hh / 2, 362, y + hh / 2, { w: 3 }) + rect(366, y, 504, hh, C.panel, C.panelEdge, 2.5, 14) + para(386, y + hh / 2 - (nl(d, 17, 464) - 1) * 11 + 6, d, 464, { size: 17, fill: C.muted }, 22);
    y += hh + 14;
  });
  add('05-significance-answer-steps',
    svg(900, y + 10, 'Four steps to a significance answer', b),
    'Four numbered steps with a worked example on Umar: state the action (the diwan and administrative systems), explain the problem it solved (governing a larger, more diverse state), explain its lasting significance (a model for later Islamic states) and connect it to leadership qualities (justice and practical governance).',
    'Action, problem solved, lasting significance, leadership quality.',
    '## Worked example: structuring a significance answer');
}
