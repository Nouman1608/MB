import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'a-level-edexcel-urdu-translation-and-reading';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- local helpers (shared look across the OxfordAQA / Edexcel Urdu set) ----
const wrap = (s, n) => { const out = ['']; for (const w of s.split(' ')) { const c = out[out.length - 1]; if (c && (c + ' ' + w).length > n) out.push(w); else out[out.length - 1] = c ? c + ' ' + w : w; } return out; };
const wt = (x, y, s, n, opts = {}, lh) => tl(x, y, wrap(s, n), opts, lh || (opts.size || 18) * 1.3);
const box = (x, y, w, h, fill, edge, sw = 2.5, rx = 12) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;

// Urdu text: always its own <text>, right-aligned or centred, Nastaliq
const u = (x, y, s, { size = 26, anchor = 'end', fill = C.ink, weight = 400 } = {}) =>
  `<text x="${x}" y="${y}" font-family="Noto Nastaliq Urdu" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}">\u200F${s}\u200F</text>`; // RLM marks keep leading/trailing punctuation on the correct side
// Urdu-over-English vocabulary chip
const vchip = (x, y, w, ur, en, fill = C.panel, edge = C.panelEdge) => box(x, y, w, 100, fill, edge, 2.5, 12) + u(x + w / 2, y + 46, ur, { size: 24, anchor: 'middle' }) + t(x + w / 2, y + 84, en, { size: 15, anchor: 'middle', fill: C.muted });
// Sentence row (stacked): English label top-left (+ extra markup), Urdu example right-aligned on its own line, English gloss beneath
const srow = (y, label, ur, gloss, { extra = '', fill = C.panel, edge = C.panelEdge, size = 24, h = 140 } = {}) =>
  box(30, y, 840, h, fill, edge, 2.5, 14) + t(52, y + 38, label, { size: 19, weight: 700 }) + extra +
  u(846, y + h - 52, ur, { size }) + t(846, y + h - 16, gloss, { size: 16, anchor: 'end', fill: C.muted, italic: true });
const tick = (x, y) => `<circle cx="${x}" cy="${y}" r="15" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + path(`M${x - 7},${y} l5,6 l10,-12`, { stroke: C.tealDark, w: 3.5 });
const cross = (x, y) => `<circle cx="${x}" cy="${y}" r="15" fill="#f6ece4" stroke="${C.rust}" stroke-width="2.5"/>` + path(`M${x - 6},${y - 6} l12,12 m0,-12 l-12,12`, { stroke: C.rust, w: 3.5 });

// 01 Three skills, three kinds of preparation
{
  let b = box(250, 108, 400, 60, C.cream, C.olive, 2.5, 14) + t(450, 146, 'Paper 1 (9UR0/01)', { size: 22, weight: 700, anchor: 'middle' });
  const cols = [
    ['Translation', 'into English', ['translate a passage from', 'Urdu into accurate,', 'fluent English'], 'rewards precision and register'],
    ['Reading', 'comprehension in Urdu', ['answer questions in Urdu', 'on an Urdu source text'], 'rewards close, detailed understanding'],
    ['Writing', 'research question', ['extended response in Urdu', 'from independent research'], 'rewards depth of knowledge and argument'],
  ];
  cols.forEach(([h, s, lines, rew], i) => {
    const x = 30 + i * 287, cx = x + 133;
    b += path(`M450,168 V190 H${cx} V208`, { w: 3, extra: 'marker-end="url(#ah)"' });
    b += box(x, 214, 266, 250, i === 2 ? C.tealLight : C.panel, i === 2 ? C.tealDark : C.panelEdge, 2.5, 14) + t(x + 20, 250, h, { size: 22, weight: 700 }) + t(x + 20, 276, s, { size: 17, weight: 600, fill: C.tealDark }) +
      tl(x + 20, 312, lines, { size: 16 }, 22) + wt(x + 20, 400, rew, 26, { size: 15, fill: C.muted, italic: true }, 20);
  });
  b += box(30, 484, 840, 92, '#f6ece4', C.rust, 2.5, 12) + t(54, 520, 'Commonest strategic error: treating it as one "language paper"', { size: 18, weight: 700, fill: C.rust }) +
    t(54, 550, 'translation demands fidelity to a source; free writing demands independent expression', { size: 17 });
  b += t(450, 612, 'Revise them as separate strands; prepare the research well before the exam', { size: 17, weight: 600, anchor: 'middle' });
  add('01-three-skills',
    svg(900, 640, 'Paper 1: three skills in one paper', b),
    'Paper 1 combines translation from Urdu into English, reading comprehension in Urdu, and an extended Urdu response to an independent research question. Each rewards different preparation, and translation and free writing pull in opposite directions.',
    'Three distinct skills: revise them as separate strands.',
    '## Where this fits in 9UR0');
}

// 02 Translation: between literal and too free
{
  let b = t(450, 128, 'Urdu sentence whose literal English is "On him anger came"', { size: 17, italic: true, anchor: 'middle', fill: C.muted });
  const opts = [
    ['Literal', '"On him anger came"', 'unnatural English', '#f6ece4', C.rust, false],
    ['Balanced', '"He became angry"', 'accurate and natural', C.tealLight, C.tealDark, true],
    ['Too free', '"He lost his temper"', 'idiomatic but loses register', '#f6ece4', C.rust, false],
  ];
  opts.forEach(([h, en, note, fill, edge, ok], i) => {
    const x = 30 + i * 287;
    b += box(x, 150, 266, 170, fill, edge, ok ? 3 : 2.5, 14) + t(x + 133, 190, h, { size: 21, weight: 700, anchor: 'middle', fill: ok ? C.tealDark : C.rust }) +
      t(x + 133, 236, en, { size: 19, italic: true, anchor: 'middle' }) + t(x + 133, 280, note, { size: 16, anchor: 'middle', fill: C.muted });
  });
  b += `<line x1="60" y1="352" x2="840" y2="352" stroke="${C.muted}" stroke-width="2.5" marker-end="url(#ah)" marker-start="url(#ah)"/>` +
    t(60, 380, 'faithful to the words', { size: 15, fill: C.muted }) + t(840, 380, 'free with the meaning', { size: 15, fill: C.muted, anchor: 'end' });
  b += panel(30, 400, 840, 170) + t(54, 436, 'Check every sentence', { size: 19, weight: 700 });
  ['Is every element present? Omission costs more than awkwardness.', 'Does it read as English a native speaker would write?', 'Is the register (formal or informal) preserved from the source?'].forEach((s, i) => {
    b += tick(70, 470 + i * 34) + t(98, 476 + i * 34, s, { size: 17 });
  });
  add('02-translation-balance',
    svg(900, 600, 'Translating into natural English', b),
    'Three versions of one Urdu sentence: literal ("On him anger came", unnatural), too free ("He lost his temper", loses register) and balanced ("He became angry", accurate and natural), with three checks: nothing omitted, natural English, register preserved.',
    'Aim between literal and free: everything present, natural, and in the same register.',
    '## Worked example');
}

// 03 Reading comprehension: what is the question asking?
{
  let b = '';
  const q = [
    ['What ...?', 'located detail', 'find it in the text', C.panel, C.panelEdge],
    ['Why ...?', 'inference', 'read between the lines', C.cream, C.olive],
    ['Writer’s attitude?', 'tone', 'word choice, irony, emphasis', C.tealLight, C.tealDark],
  ];
  q.forEach(([h, s, how, fill, edge], i) => {
    const x = 30 + i * 287;
    b += box(x, 110, 266, 190, fill, edge, 2.5, 14) + t(x + 133, 156, h, { size: 23, weight: 700, anchor: 'middle' }) + arrow(x + 133, 172, x + 133, 204, { w: 3 }) +
      t(x + 133, 236, s, { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(x + 133, 270, how, { size: 16, anchor: 'middle', fill: C.muted });
  });
  b += panel(30, 320, 840, 150);
  ['Answer in your own words where required, not copied from the passage', 'Match the length of the answer to the marks', 'Meaning of a phrase in context: the clue is in the surrounding sentences'].forEach((s, i) => {
    b += tick(66, 356 + i * 40) + t(94, 362 + i * 40, s, { size: 17 });
  });
  add('03-question-types',
    svg(900, 500, 'Reading comprehension question types', b),
    'What-questions want located detail, why-questions want inference, and questions on the writer’s attitude want evidence of tone such as word choice, irony and emphasis. Use your own words, match length to marks, and look around a phrase for its meaning.',
    'Name the question type first: detail, inference or tone.',
    '## Reading comprehension');
}

// 04 Section C writing: three grids
{
  let b = box(30, 110, 840, 64, C.cream, C.olive, 2.5, 14) + t(54, 150, 'Section C: writing in Urdu', { size: 21, weight: 700 }) + t(846, 150, '40 marks  ·  approx. 320–370 words', { size: 19, weight: 700, anchor: 'end', fill: C.olive });
  // proportional bar 840 px for 40 marks
  const segs = [['AO4', 20, 'knowledge and understanding of society and culture via your research', C.teal], ['AO2', 10, 'use of the unseen text', C.tealLight], ['AO3', 10, 'accuracy and range of language', C.sand]];
  let x = 30;
  segs.forEach(([ao, m, d, fill]) => {
    const w = 840 * m / 40 - (ao === 'AO3' ? 0 : 6);
    b += box(x, 196, w, 70, fill, C.ink, 2.5, 10) + t(x + w / 2, 226, ao, { size: 20, weight: 700, anchor: 'middle' }) + t(x + w / 2, 252, m + ' marks', { size: 17, anchor: 'middle' });
    x += w + 6;
  });
  b += tl(54, 300, ['AO4: knowledge and understanding of society and culture via your research (20)', 'AO2: use of the unseen text (10)', 'AO3: accuracy and range of language (10)'], { size: 16, fill: C.muted }, 24);
  b += panel(30, 384, 410, 220) + t(52, 420, 'Research rules', { size: 19, weight: 700 }) +
    tl(52, 452, ['cover all three aspects of one', 'research subject', 'one country or area only:', 'Pakistan for Themes 1, 3 and 4;', 'Pakistan or one Urdu-official', 'area of India for Theme 2'], { size: 16 }, 22);
  b += panel(460, 384, 410, 220) + t(482, 420, 'Plan the structure', { size: 19, weight: 700 });
  ['Introduction', '3–4 paragraphs, one idea each', 'Conclusion'].forEach((s, i) => {
    b += box(482, 440 + i * 52, 366, 42, i === 1 ? C.tealLight : C.panel, i === 1 ? C.tealDark : C.panelEdge, 2, 10) + t(665, 467 + i * 52, s, { size: 17, weight: 600, anchor: 'middle' });
  });
  add('04-section-c-grids',
    svg(900, 630, 'How the research essay is marked', b),
    'Section C is worth 40 marks for about 320 to 370 words: AO4 knowledge and understanding of society and culture via research (20), AO2 use of the unseen text (10) and AO3 accuracy and range of language (10). Research covers all three aspects of one subject in one country or area, and a planned structure prevents drift.',
    'Half the essay marks come from your research; plan before you write.',
    '## Writing in Urdu');
}

// 05 Accuracy checklist for extended writing
{
  let b = '';
  const items = [
    ['Gender agreement', 'across noun, adjective and verb'],
    ['Tense and person', 'consistent throughout'],
    ['Postpositions', 'especially the ergative with transitive perfective verbs'],
    ['Izafat', 'in formal register'],
    ['Script', 'a misplaced dot changes the word'],
  ];
  items.forEach(([h, s], i) => {
    const y = 110 + i * 82;
    b += box(30, y, 840, 70, C.panel, C.panelEdge, 2.5, 12) + badge(68, y + 35, 19, String(i + 1), C.cream) + t(104, y + 42, h, { size: 19, weight: 700 }) + t(320, y + 42, s, { size: 17, fill: C.muted });
  });
  b += box(30, 528, 840, 70, C.cream, C.olive, 2.5, 12) + t(54, 570, 'Range matters, but an ambitious word used wrongly scores below a simple word used correctly', { size: 16, weight: 600 });
  add('05-accuracy-checklist',
    svg(900, 624, 'Five accuracy checks', b),
    'Five recurring accuracy features for extended Urdu writing: gender agreement across noun, adjective and verb; consistent tense and person; postpositions, especially the ergative with transitive perfective verbs; izafat in formal register; and accurate script.',
    'Leave time to check agreement, postpositions and script.',
    '## Common mistakes');
}
