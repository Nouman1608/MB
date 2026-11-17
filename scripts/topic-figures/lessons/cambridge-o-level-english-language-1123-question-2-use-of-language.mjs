import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-english-language-1123-question-2-use-of-language';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });


// local helpers
const wrap = (s, n) => {
  const out = [''];
  for (const w of s.split(' ')) {
    const cur = out[out.length - 1];
    if (cur && (cur + ' ' + w).length > n) out.push(w); else out[out.length - 1] = cur ? cur + ' ' + w : w;
  }
  return out;
};
const para = (x, y, s, n, opts = {}, lh) => tl(x, y, wrap(s, n), opts, lh || (opts.size || 18) * 1.32);
const box = (x, y, w, h, fill = C.panel, edge = C.panelEdge, rx = 12) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>`;
const kbadge = (cx, cy, r, label, fill = C.cream) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + t(cx, cy + 7, label, { size: 19, weight: 700, anchor: 'middle' });
const pill = (x, y, w, h, s, { fill = C.cream, edge = C.olive, size = 17, weight = 600, color = C.ink } = {}) =>
  box(x, y, w, h, fill, edge, h / 2) + t(x + w / 2, y + h / 2 + size * 0.36, s, { size, weight, anchor: 'middle', fill: color });
const apath = (d, color = C.ink, marker = 'ah', w = 3.5) => path(d, { stroke: color, w, extra: `marker-end="url(#${marker})"` });
const PINK = '#f6e3d6';

// 01 Meaning and effect
{
  let b = '';
  b += box(200, 110, 500, 60, C.cream, C.olive) + t(450, 148, '“The streets were choked with traffic”', { size: 20, weight: 700, anchor: 'middle', italic: true });
  b += arrow(450, 172, 450, 204, { w: 3.5 });
  b += box(30, 210, 840, 120, C.panel, C.panelEdge);
  b += t(55, 246, 'Layer 1: Meaning', { size: 21, weight: 700 }) + t(845, 246, 'what the words say, in plain terms', { size: 16, anchor: 'end', fill: C.muted, italic: true });
  b += t(55, 296, 'The streets were very crowded.', { size: 19 });
  b += box(30, 346, 840, 196, C.tealLight, C.tealDark);
  b += t(55, 382, 'Layer 2: Effect', { size: 21, weight: 700, fill: C.tealDark }) + t(845, 382, 'what the choice makes the reader see, feel or think', { size: 16, anchor: 'end', fill: C.tealDark, italic: true });
  b += pill(55, 404, 120, 44, '“choked”', { fill: C.mustard, edge: C.ink, size: 18, weight: 700 });
  b += arrow(180, 426, 214, 426, { w: 3.5, color: C.tealDark, marker: 'ahT' });
  b += t(224, 432, 'the city struggling to breathe, as if strangled by traffic', { size: 18 });
  b += t(55, 486, 'The reader senses discomfort and something close to danger,', { size: 18 });
  b += t(55, 514, 'not just inconvenience.', { size: 18 });
  b += box(30, 560, 410, 92, C.panel, C.panelEdge) + t(52, 594, 'Meaning only', { size: 18, weight: 700, fill: C.muted }) + t(52, 624, '= a comprehension answer (Question 1)', { size: 16, fill: C.muted });
  b += box(460, 560, 410, 92, C.cream, C.olive) + t(482, 594, 'Effect', { size: 18, weight: 700, fill: C.olive }) + t(482, 624, '= what Question 2 rewards (R4)', { size: 16 });
  add('01-meaning-and-effect',
    svg(900, 676, 'Two layers: meaning and effect', b),
    '“The streets were choked with traffic” read in two layers. Its meaning is that the streets were very crowded; its effect is that “choked” makes the city seem to struggle to breathe, as if strangled, so the reader senses discomfort and something close to danger. Meaning alone answers Question 1; Question 2 rewards effect.',
    'Question 2 rewards the second layer: what the word choice makes the reader see or feel.',
    '## Meaning and effect');
}

// 02 Connotation
{
  let b = panel(30, 110, 840, 260);
  b += t(55, 146, 'Same denotation, different connotations', { size: 20, weight: 700 });
  b += `<rect x="370" y="200" width="160" height="90" rx="8" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` + path('M360,206 L450,164 L540,206', { fill: C.rust, w: 2.5 });
  b += ` <rect x="430" y="246" width="40" height="44" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += t(450, 314, 'the same building', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  b += pill(80, 210, 200, 54, 'house', { fill: C.panel, edge: C.panelEdge, size: 22, weight: 700, color: C.muted });
  b += t(180, 290, 'dictionary meaning', { size: 16, anchor: 'middle', fill: C.muted });
  b += pill(620, 210, 200, 54, 'home', { fill: C.mustard, edge: C.ink, size: 22, weight: 700 });
  b += t(720, 290, 'warmth, belonging, family', { size: 16, anchor: 'middle', weight: 600, fill: C.olive });
  b += arrow(286, 237, 356, 237, { w: 3 }) + arrow(614, 237, 546, 237, { w: 3 });
  b += t(450, 346, 'Writers choose words for their connotations.', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });

  b += panel(30, 390, 840, 220);
  b += t(55, 426, 'Same action, three verbs', { size: 20, weight: 700 });
  ['walked', 'drifted', 'stormed'].forEach((v, i) => {
    const x = 55 + i * 275;
    b += box(x, 448, 250, 70, [C.panel, C.tealLight, PINK][i], [C.panelEdge, C.tealDark, C.rust][i], 10);
    b += t(x + 125, 490, `She ${v} into the room`, { size: 17, anchor: 'middle', weight: 600 });
  });
  b += t(450, 560, 'Each verb gives a different character and mood.', { size: 18, anchor: 'middle' });
  b += t(450, 588, 'Explaining that difference is the whole of the skill.', { size: 18, anchor: 'middle', weight: 700, fill: C.tealDark });
  b += box(30, 630, 840, 90, C.cream, C.olive);
  b += t(450, 664, 'Ask: what else does this word bring with it?', { size: 18, weight: 700, anchor: 'middle' });
  b += t(450, 694, 'What would be lost if a plainer word were used?', { size: 18, weight: 700, anchor: 'middle' });
  add('02-connotation',
    svg(900, 744, 'Connotation: the engine of effect', b),
    'House and home can denote the same building, but home carries warmth, belonging and family. “She walked”, “drifted” and “stormed” into the room describe the same action, yet each verb gives a different character and mood.',
    'Effects come from what a word brings with it beyond its dictionary meaning.',
    '## Connotation: the engine of effect');
}

// 03 Three-step answer
{
  let b = '';
  const steps = [
    ['1', 'Quote precisely', 'the word or short phrase, not the whole sentence', '“Sagged”', C.cream, C.olive],
    ['2', 'Explain the meaning or image', 'what is being said or pictured', 'bodies collapsing under their own weight', C.tealLight, C.tealDark],
    ['3', 'Explain the effect in context', 'what it suggests about the character, place or situation, and how the reader responds', 'the people have lost all their energy and drop wherever they are, which emphasises how long they have been waiting', C.mustard, C.ink],
  ];
  b += t(240, 130, 'The step', { size: 18, weight: 700, anchor: 'middle', fill: C.muted }) + t(680, 130, 'In the worked answer to (b)', { size: 18, weight: 700, anchor: 'middle', fill: C.muted });
  let y = 148;
  steps.forEach(([n, h, d, ex, f, e], i) => {
    const hgt = i === 2 ? 148 : 112;
    b += box(30, y, 430, hgt, f, e) + badge(68, y + 38, 22, n, C.panel);
    b += t(102, y + 46, h, { size: 19, weight: 700 }) + para(52, y + 80, d, 44, { size: 16, fill: C.ink }, 21);
    b += arrow(464, y + hgt / 2, 494, y + hgt / 2, { w: 3.5 });
    b += panel(500, y, 370, hgt) + para(520, y + 38, ex, 37, { size: 17, italic: i === 0, weight: i === 0 ? 700 : 400 }, 23);
    y += hgt + 18;
  });
  b += box(30, y, 840, 58, C.panel, C.tealDark) + t(450, y + 36, 'Moving words: suggests · implies · emphasises · conveys', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('03-three-step-answer',
    svg(900, y + 82, 'The three-step answer', b),
    'Three steps beside the worked answer on “sagged”: quote precisely, explain the meaning or image (bodies collapsing under their own weight) and explain the effect in context (the people have lost all their energy, which shows how long they have waited).',
    'Quote, explain the image, then say what it does in this moment of the text.',
    '## The three-step answer');
}

// 04 Worked example part (c)
{
  let b = '';
  b += box(30, 110, 840, 78, C.cream, C.olive);
  b += t(52, 142, '(c) How does the language in the last three sentences create a sense', { size: 17, weight: 700 });
  b += t(52, 168, 'of oppressive discomfort?', { size: 17, weight: 700 }) + pill(760, 132, 80, 36, '[3]', { fill: C.mustard, edge: C.ink, size: 18, weight: 700 });
  const rows = [
    ['“Heat pressed down through the glass roof like a hand.”', 'simile: “like a hand”', 'the heat feels physical and heavy, as if pushing the people down'],
    ['“Somewhere a baby wailed, stopped, began again.”', 'broken, repetitive rhythm', 'mirrors the endless, wearing noise'],
    ['“… was swallowed by the hum of a thousand electric fans.”', '“swallowed”', 'even official information is lost; the travellers are left helpless'],
  ];
  rows.forEach(([q, f, e], i) => {
    const y = 210 + i * 150;
    b += box(30, y, 300, 132, C.panel, C.panelEdge) + para(48, y + 34, q, 30, { size: 16, italic: true }, 21);
    b += arrow(334, y + 66, 360, y + 66, { w: 3 });
    b += box(366, y + 20, 190, 92, C.tealLight, C.tealDark, 10) + para(380, y + 58, f, 19, { size: 16, weight: 700, fill: C.tealDark }, 21);
    b += arrow(560, y + 66, 586, y + 66, { w: 3 });
    b += box(592, y, 220, 132, C.panel, C.olive) + para(608, y + 34, e, 23, { size: 16 }, 21);
    b += `<circle cx="842" cy="${y + 66}" r="22" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + t(842, y + 72, '1', { size: 18, weight: 700, anchor: 'middle' });
  });
  b += t(810, 680, 'three features,', { size: 16, anchor: 'end', fill: C.muted }) + t(810, 702, 'three effects =', { size: 16, anchor: 'end', fill: C.muted });
  b += `<circle cx="842" cy="${686}" r="24" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + t(842, 693, '3', { size: 20, weight: 700, anchor: 'middle' });
  add('04-three-marks-three-choices',
    svg(900, 730, 'Three marks, three language choices', b),
    'For a three-mark question on the station extract, each of the last three sentences gives one choice: the simile “like a hand” makes the heat physical and heavy, the broken rhythm of the baby’s wail mirrors endless noise, and “swallowed” shows information lost and travellers helpless. Each feature with its effect earns one mark.',
    'In a three-mark question, choose three different features, each with its own effect.',
    '## Worked example');
}

// 05 Sentence structure
{
  let b = '';
  const bars = (x, y, ws, f) => ws.map((w, i) => `<rect x="${x}" y="${y + i * 16}" width="${w}" height="10" rx="5" fill="${f}"/>`).join('');
  const rows = [
    ['A very short sentence after long ones', 'a sudden stop, shock or emphasis', (x, y) => bars(x, y, [230, 250, 220], C.teal) + `<rect x="${x}" y="${y + 52}" width="50" height="12" rx="6" fill="${C.rust}"/>`],
    ['A long sentence built from a list', 'abundance, chaos, breathlessness', (x, y) => [0, 1, 2, 3, 4, 5].map((i) => `<rect x="${x + i * 44}" y="${y + 18}" width="36" height="12" rx="6" fill="${C.mustard}"/>`).join('') + t(x + 268, y + 30, '…', { size: 18, weight: 700 })],
    ['Repetition at the start of clauses', 'insistence, rhythm', (x, y) => [0, 1, 2].map((i) => `<rect x="${x}" y="${y + i * 22}" width="40" height="12" rx="6" fill="${C.tealDark}"/><rect x="${x + 46}" y="${y + i * 22}" width="${150 - i * 30}" height="12" rx="6" fill="${C.teal}"/>`).join('')],
    ['A question', 'doubt, a character’s inner voice', (x, y) => `<rect x="${x}" y="${y + 18}" width="180" height="12" rx="6" fill="${C.teal}"/>` + t(x + 196, y + 34, '?', { size: 28, weight: 700, fill: C.rust })],
  ];
  rows.forEach(([h, e, art], i) => {
    const y = 110 + i * 128;
    b += panel(30, y, 840, 112) + art(56, y + 26);
    b += t(350, y + 46, h, { size: 19, weight: 700 }) + t(350, y + 78, e, { size: 17, fill: C.tealDark, weight: 600 });
  });
  b += box(30, 626, 840, 58, C.cream, C.olive) + t(450, 662, 'Say what the shape does in this moment of the story, not just what it is.', { size: 17, weight: 700, anchor: 'middle' });
  add('05-sentence-structure',
    svg(900, 708, 'Sentence shapes and what they do', b),
    'Four sentence shapes and their typical effects: a very short sentence after long ones gives a sudden stop, shock or emphasis; a long list sentence suggests abundance, chaos or breathlessness; repetition at the start of clauses gives insistence and rhythm; a question suggests doubt or a character’s inner voice.',
    'Sentence form is language too; explain what its shape does here.',
    '## Writing about sentence structure');
}

// 06 Empty effects
{
  let b = '';
  b += t(450, 112, 'These fit any text, so they earn nothing', { size: 18, anchor: 'middle', fill: C.rust, weight: 700 });
  const empty = ['“It makes the reader want to read on.”', '“It creates a vivid image in the reader’s mind.”', '“It makes the writing more interesting.”', '“It helps the reader imagine the scene.”'];
  empty.forEach((s, i) => {
    const x = 30 + (i % 2) * 430, y = 130 + Math.floor(i / 2) * 76;
    b += box(x, y, 410, 62, PINK, C.rust, 10) + t(x + 205, y + 37, s, { size: 16, anchor: 'middle', fill: C.rust, italic: true });
    b += `<line x1="${x + 18}" y1="${y + 31}" x2="${x + 392}" y2="${y + 31}" stroke="${C.rust}" stroke-width="2" opacity="0.45"/>`;
  });
  b += arrow(450, 290, 450, 330, { w: 4, color: C.tealDark, marker: 'ahT' });
  b += t(470, 318, 'replace with the specific image or feeling', { size: 16, fill: C.tealDark, weight: 600 });
  b += box(30, 340, 840, 130, C.tealLight, C.tealDark);
  b += t(52, 374, 'Not “a vivid image”, but:', { size: 18, weight: 700, fill: C.tealDark });
  b += t(450, 428, '“the reader pictures people collapsing like emptied sacks”', { size: 20, weight: 700, anchor: 'middle', italic: true });
  add('06-empty-effects',
    svg(900, 494, 'Swap empty effects for specific ones', b),
    'Four stock phrases, such as “it makes the reader want to read on” and “it creates a vivid image”, are crossed out because they fit any text. The replacement names the specific picture: the reader pictures people collapsing like emptied sacks.',
    'If a sentence about effect could fit any text, replace it with the picture this text creates.',
    '## Avoid empty effects');
}
