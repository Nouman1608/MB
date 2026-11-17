import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-english-language-9093-skills-and-techniques';
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
const rect = (x, y, w, h, fill, stroke = C.ink, sw = 2.5, rx = 12) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;

// 01 Paper 1 structure
{
  let b = '';
  // Section 1
  b += panel(40, 115, 400, 380) + t(240, 150, 'Section A: Question 1', { size: 19, weight: 700, anchor: 'middle' }) + t(240, 174, '25 marks, one unseen text', { size: 15, anchor: 'middle', fill: C.muted });
  b += rect(64, 195, 352, 120, C.cream, C.mustard, 2.5, 10) + t(80, 225, '1(a)  10 marks', { size: 18, weight: 700 }) +
    tl(80, 252, ['directed response, 150-200 words, for a', 'set form, purpose and audience'], { size: 15 }, 20) + t(80, 300, 'AO1, AO2', { size: 15, weight: 700, fill: C.olive });
  b += arrow(240, 317, 240, 345, { w: 3 }) + t(254, 337, 'compare with the source', { size: 15, fill: C.muted });
  b += rect(64, 350, 352, 125, C.teal, C.ink, 2.5, 10) + t(80, 380, '1(b)  15 marks', { size: 18, weight: 700 }) +
    tl(80, 407, ['compare form, structure and language of', 'your 1(a) response with the original'], { size: 15 }, 20) + t(80, 458, 'AO1, AO3', { size: 15, weight: 700, fill: C.tealDark });
  b += panel(460, 115, 400, 380) + t(660, 150, 'Section B: Question 2', { size: 19, weight: 700, anchor: 'middle' }) + t(660, 174, '25 marks, a second unseen text', { size: 15, anchor: 'middle', fill: C.muted });
  b += rect(484, 195, 352, 280, C.tealLight, C.tealDark, 2.5, 10) + t(500, 225, 'Question 2  25 marks', { size: 18, weight: 700 }) +
    tl(500, 252, ['comment on the form, structure and', 'language of the text'], { size: 15 }, 20) + t(500, 300, 'AO1, AO3', { size: 15, weight: 700, fill: C.tealDark }) +
    tl(500, 350, ['Analyse: examine in detail to show', 'meaning, identifying elements and', 'the relationship between them', '(the syllabus definition)'], { size: 15, fill: C.muted }, 21);
  b += t(450, 520, 'Each unseen text is about 550-750 words.', { size: 16, anchor: 'middle', fill: C.muted });
  const aos = [['AO1', 'reading and understanding a wide variety of texts'], ['AO2', 'writing effectively for audiences and purposes'], ['AO3', 'analysing how choices produce meaning and style']];
  aos.forEach(([a, d], i) => {
    const x = 40 + i * 280;
    b += panel(x, 540, 260, 86) + rect(x + 12, 561, 64, 44, C.mustard, C.ink, 2, 8) + t(x + 44, 590, a, { size: 17, weight: 700, anchor: 'middle' }) +
      tl(x + 88, 566, wrap(d, 20), { size: 15 }, 19);
  });
  add('01-paper-1-structure',
    svg(900, 650, 'Where the skills are tested: Paper 1', b),
    'Paper 1 has two 25-mark sections, each on an unseen text of about 550 to 750 words. Question 1(a), 10 marks, is a 150 to 200 word directed response (AO1, AO2); Question 1(b), 15 marks, compares it with the original (AO1, AO3); Question 2, 25 marks, comments on the form, structure and language of a second text (AO1, AO3).',
    'Question 1(b) carries more marks than 1(a), so plan the comparison while you write.',
    '## Where the skills are tested');
}

// 02 Two-pass reading
{
  let b = rect(40, 120, 380, 230, C.tealLight, C.tealDark, 3) + badge(80, 160, 22, '1', C.mustard) + t(115, 168, 'First pass', { size: 21, weight: 700 }) +
    t(64, 210, 'read for gist and situation', { size: 17, weight: 600, fill: C.tealDark }) +
    tl(64, 245, ['• what form is this?', '• who wrote it, for whom?', '• and why?'], { size: 16 }, 26);
  b += arrow(422, 235, 476, 235, { w: 4 });
  b += rect(480, 120, 380, 230, C.cream, C.mustard, 3) + badge(520, 160, 22, '2', C.mustard) + t(555, 168, 'Second pass', { size: 21, weight: 700 }) +
    t(504, 210, 'read with a pen, marking shifts', { size: 17, weight: 600, fill: C.olive }) +
    tl(504, 245, ['• in tone', '• in time or focus', '• in sentence pattern'], { size: 16 }, 26);
  b += panel(40, 375, 820, 120) + t(64, 410, 'Before annotating, write one sentence:', { size: 18, weight: 700 }) +
    t(64, 446, 'This [form] for [audience] aims to [purpose].', { size: 19, italic: true, weight: 600, fill: C.tealDark }) +
    t(64, 478, 'Everything you later say about language must connect to that sentence.', { size: 16, fill: C.muted });
  add('02-two-pass-reading',
    svg(900, 520, 'Reading the unseen text in two passes', b),
    'The first pass reads for gist and situation: form, writer, audience and purpose. The second pass, with a pen, marks shifts in tone, time or focus, and sentence pattern. Before annotating, state the text\'s form, audience and purpose in one sentence.',
    'Establish form, audience and purpose before annotating features.',
    '## Family 1: reading the unseen text');
}

// 03 Features come together; overall style
{
  let b = '';
  const f = ['second-person address', 'present tense', 'short imperatives'];
  f.forEach((s, i) => {
    b += rect(40, 125 + i * 80, 280, 60, C.tealLight, C.tealDark, 2.5, 10) + t(180, 162 + i * 80, s, { size: 18, weight: 600, anchor: 'middle' }) +
      path(`M320,${155 + i * 80} C380,${155 + i * 80} 390,235 440,235`, { stroke: C.tealDark, w: 2.5 });
  });
  b += arrow(440, 235, 480, 235, { w: 4 });
  b += rect(486, 175, 374, 120, C.mustard, C.ink, 3) + t(673, 222, 'one effect:', { size: 17, anchor: 'middle' }) + t(673, 258, 'urgency directed at the reader', { size: 19, weight: 700, anchor: 'middle' });
  b += t(450, 395, 'Overall style: a summary judgement you can defend', { size: 19, weight: 700, anchor: 'middle' });
  ['conversational but authoritative', 'detached and clinical', 'warm, nostalgic and gently comic'].forEach((s, i) => {
    b += rect(40 + i * 275, 415, 270, 54, C.cream, C.mustard, 2, 27) + t(175 + i * 275, 448, s, { size: 15, italic: true, anchor: 'middle' });
  });
  b += panel(40, 490, 400, 90) + t(64, 525, 'Judgement without examples', { size: 17, weight: 700, fill: C.rust }) + t(64, 555, 'is assertion', { size: 16 });
  b += panel(460, 490, 400, 90) + t(484, 525, 'Examples without a judgement', { size: 17, weight: 700, fill: C.rust }) + t(484, 555, 'are a list', { size: 16 });
  add('03-features-together-style',
    svg(900, 605, 'Features work together', b),
    'Second-person address, present tense and short imperatives in one paragraph combine into a single effect: urgency directed at the reader. Below, examples of overall style judgements, such as "detached and clinical", with the reminder that a judgement needs examples and examples need a judgement.',
    'Show features combining into one effect, and prove a stated overall style.',
    '## Family 2: analysing and writing about effects');
}

// 04 Evidence process
{
  const st = [['Select', 'the smallest piece of text that carries the effect'], ['Embed', 'in your own grammatical sentence'], ['Link', 'with a precise analytical verb'], ['Interpret', 'what it does for this reader in this context'], ['Integrate', 'back to your overall reading of the text']];
  let b = '';
  st.forEach(([h, d], i) => {
    const x = 40 + i * 166;
    b += rect(x, 120, 152, 190, [C.tealLight, C.tealLight, C.teal, C.teal, C.mustard][i], C.ink, 2.5) + badge(x + 76, 152, 18, String(i + 1), C.panel) +
      t(x + 76, 198, h, { size: 19, weight: 700, anchor: 'middle' }) + tl(x + 76, 226, wrap(d, 16), { size: 15, anchor: 'middle' }, 19);
    if (i < 4) b += arrow(x + 153, 205, x + 165, 205, { w: 3 });
  });
  b += panel(40, 335, 820, 160) + t(64, 370, 'Linking verbs that name the type of effect', { size: 18, weight: 700 });
  ['suggests', 'implies', 'foregrounds', 'undercuts', 'positions', 'intensifies', 'softens', 'distances'].forEach((v, i) => {
    const x = 64 + (i % 4) * 196, y = 390 + Math.floor(i / 4) * 50;
    b += rect(x, y, 180, 40, C.tealLight, C.tealDark, 2, 20) + t(x + 90, y + 27, v, { size: 16, italic: true, weight: 600, anchor: 'middle' });
  });
  b += t(450, 525, 'Avoid "shows" every time: it tells the examiner nothing about the type of effect.', { size: 16, anchor: 'middle', fill: C.rust, weight: 600 });
  add('04-evidence-process',
    svg(900, 550, 'From quotation to argument', b),
    'Five steps: select the smallest piece of text that carries the effect, embed it in your own sentence, link it with a precise analytical verb, interpret it for this reader and context, and integrate it into your overall reading. Eight analytical verbs are offered instead of "shows".',
    'Select, embed, link, interpret, integrate: five skills that form one process.',
    '## Family 3: evidence and argument');
}

// 05 Weak vs strong
{
  let b = panel(40, 115, 820, 130, C.panel, C.rust) + t(64, 150, 'Weak', { size: 19, weight: 700, fill: C.rust }) +
    tl(64, 182, ['The writer says "the council has once again failed residents".', 'This shows the writer is angry.'], { size: 17, italic: true }, 26);
  let sb = t(64, 300, 'Strong', { size: 19, weight: 700, fill: C.tealDark });
  const parts = [
    ['NAMES', 'The adverbial "once again"', C.teal],
    ['EFFECT', 'turns a single decision into a pattern, so the council\'s "failure" reads as characteristic rather than accidental;', C.cream],
    ['ARGUMENT', 'this supports the article\'s wider strategy of presenting residents as long-suffering and officials as indifferent.', C.sand],
  ];
  let y = 318;
  parts.forEach(([lab, s, fill]) => {
    const l = wrap(s, 66);
    const h = 18 + l.length * 23;
    sb += rect(64, y, 110, h, fill, C.ink, 2, 8) + t(119, y + h / 2 + 6, lab, { size: 15, weight: 700, anchor: 'middle' }) +
      tl(190, y + h / 2 + 6 - (l.length - 1) * 11.5, l, { size: 16, italic: true }, 23);
    y += h + 10;
  });
  b += panel(40, 265, 820, y - 265 + 10, C.tealLight, C.tealDark) + sb;
  add('05-weak-and-strong',
    svg(900, y + 40, 'Two treatments of the same evidence', b),
    'A weak answer quotes a whole clause and says it "shows the writer is angry". The strong version names the adverbial "once again", explains that it turns a single decision into a pattern, and links this to the article\'s wider strategy of presenting residents as long-suffering and officials as indifferent.',
    'Select two words, name the feature, explain the effect and link it to the argument.',
    '## Family 3: evidence and argument');
}

// 06 Same style vs different style
{
  const col = (x, title, keep, change, fill, edge, items) =>
    panel(x, 115, 400, 320) + rect(x + 14, 129, 372, 54, fill, edge, 2.5, 10) + t(x + 200, 164, title, { size: 20, weight: 700, anchor: 'middle' }) +
    rect(x + 24, 200, 170, 76, C.teal, C.ink, 2, 10) + t(x + 109, 230, 'KEEP', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(x + 109, 258, keep, { size: 18, weight: 700, anchor: 'middle' }) +
    rect(x + 206, 200, 170, 76, C.panel, C.rust, 2, 10) + t(x + 291, 230, 'CHANGE', { size: 15, weight: 700, anchor: 'middle', fill: C.rust }) + t(x + 291, 258, change, { size: 18, weight: 700, anchor: 'middle' }) +
    tl(x + 24, 316, items, { size: 15 }, 22);
  let b = col(40, 'Writing in the same style', 'features', 'the words', C.cream, C.mustard,
    ['List the source\'s fingerprints first:', '• sentence length and type', '• register, person, tense', '• characteristic devices', 'then write new sentences that share them.']);
  b += col(460, 'Writing in a different style', 'content', 'the style', C.tealLight, C.tealDark,
    ['Fit a new form, purpose and audience.', 'The test is transformation: readers get', 'the relevant information in a form that', 'suits them, not a paraphrase of the', 'original.']);
  b += panel(40, 455, 820, 70, C.cream, C.mustard) +
    t(450, 496, 'Plan 1(b) while writing 1(a): each deliberate choice becomes a point of comparison.', { size: 16, weight: 600, anchor: 'middle' });
  add('06-same-or-different-style',
    svg(900, 550, 'Same style or different style?', b),
    'Writing in the same style keeps the source\'s features (sentence types, register, person, tense, devices) but not its words. Writing in a different style keeps the content but changes the style to fit a new form, purpose and audience, a transformation rather than a paraphrase.',
    'Same style borrows features; different style keeps content and transforms the form.',
    '## Family 4: directed writing and comparison');
}

// 07 Worked comparison
{
  const rows = [
    ['Purpose', 'evoke a mood', 'inform users of new hours'],
    ['Structure', 'builds a scene', 'headline, then dates and times first'],
    ['Sentences', 'lengthen into a cumulative final clause: "as though reluctant to let the day end"', 'short declaratives and one polite imperative: "Please return"'],
    ['Devices', 'sensory detail ("the radiators tick"); personified silence that "settles"', 'plain, practical lexis'],
    ['Attitude to quiet', 'an experience to feel', 'a practical benefit: "ideal for focused study"'],
  ];
  let b = rect(220, 112, 310, 52, C.cream, C.mustard, 2.5, 10) + t(375, 136, 'Source', { size: 17, weight: 700, anchor: 'middle' }) + t(375, 156, 'reflective magazine column', { size: 15, anchor: 'middle', fill: C.muted }) +
    rect(550, 112, 310, 52, C.tealLight, C.tealDark, 2.5, 10) + t(705, 136, 'My response', { size: 17, weight: 700, anchor: 'middle' }) + t(705, 156, 'library website notice', { size: 15, anchor: 'middle', fill: C.muted });
  let y = 176;
  rows.forEach(([p, a, c]) => {
    const al = wrap(a, 32), cl = wrap(c, 32);
    const h = Math.max(al.length, cl.length) * 21 + 26;
    b += t(40, y + h / 2 + 6, p, { size: 16, weight: 700 }) +
      panel(220, y, 310, h) + tl(236, y + h / 2 + 6 - (al.length - 1) * 10.5, al, { size: 15 }, 21) +
      panel(550, y, 310, h) + tl(566, y + h / 2 + 6 - (cl.length - 1) * 10.5, cl, { size: 15 }, 21);
    y += h + 10;
  });
  b += panel(40, y + 4, 820, 64, C.panel, C.tealDark) +
    t(450, y + 43, 'Compare point by point, quote both texts, and tie each difference to audience and purpose.', { size: 16, weight: 600, anchor: 'middle' });
  add('07-worked-comparison',
    svg(900, y + 90, 'Same content, different style: comparing', b),
    'The lesson\'s reflective column about a library\'s last hour is compared with a website notice about new evening hours on five points: purpose, structure, sentence style, devices and attitude to the quiet. The column evokes a mood with sensory detail and a cumulative final clause; the notice informs with a headline, dates first and short declaratives.',
    'A 1(b) comparison works point by point and explains each difference through audience and purpose.',
    '## Worked example: same content, different style');
}
