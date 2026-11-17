import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-language-acquisition-criterion-b-reading';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

const wrap = (s, n) => { const out = ['']; for (const w of s.split(' ')) { if ((out[out.length - 1] + ' ' + w).trim().length > n) out.push(w); else out[out.length - 1] = (out[out.length - 1] + ' ' + w).trim(); } return out; };
const box = (x, y, w, h, fill = C.panel, edge = C.ink, sw = 2.2, rx = 10) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
const chip = (x, y, w, h, s, fill, { size = 17, weight = 700, edge = C.ink, color = C.ink } = {}) =>
  box(x, y, w, h, fill, edge) + t(x + w / 2, y + h / 2 + size * 0.35, s, { size, weight, anchor: 'middle', fill: color });
const lowTop = (x, y, w, h, kind, title, lines, lh = 22) => {
  const top = kind === 'top';
  return panel(x, y, w, h, top ? '#eaf3f1' : '#fbeee6', top ? C.tealDark : C.rust) +
    t(x + 22, y + 36, (top ? '✓ ' : '✗ ') + title, { size: 19, weight: 700, fill: top ? C.tealDark : C.rust }) + tl(x + 22, y + 66, lines, { size: 16, fill: C.ink }, lh);
};

// 01 Three-pass reading routine
{
  const p = [
    ['Skim', '1–2 minutes', ['title, headings, images,', 'captions, first and last lines'], 'What type? For whom? Mainly about?', C.tealLight],
    ['Scan', 'for the question', ['key words in the question,', 'or their synonyms, in the text'], 'question “worried” = text “nervous”', C.teal],
    ['Read closely', 'around the match', ['negatives: not, never, hardly', 'contrast: but, however', 'time: at first, by week three'], 'these often decide the answer', C.mustard],
  ];
  let b = '';
  p.forEach(([h, s, lines, q, f], i) => {
    const y = 110 + i * 170;
    b += panel(30, y, 840, 150) + box(30, y, 220, 150, f, C.ink, 2.5, 14) + badge(70, y + 44, 22, String(i + 1), '#fff') + t(102, y + 52, h, { size: 21, weight: 700 }) + t(52, y + 104, s, { size: 16 });
    b += tl(275, y + 44, lines, { size: 17 }, 25) + t(275, y + 132, q, { size: 16, weight: 600, fill: C.tealDark, italic: true });
    if (i < 2) b += arrow(140, y + 152, 140, y + 168, { w: 3 });
  });
  b += t(450, 640, 'Answering too early causes most slips.', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  add('01-three-pass-reading',
    svg(900, 665, 'A reading routine in three passes', b),
    'Three passes: skim for one to two minutes (title, headings, images, captions, first and last lines) to find the text type, audience and topic; scan for the question’s key words or synonyms; then read closely around the match, checking negatives, contrast words and time words.',
    'Skim, scan, then read closely before you answer.',
    '## A reading routine in three passes');
}

// 02 Main idea and supporting details (Source A)
{
  let b = box(110, 110, 680, 110, C.mustard, C.ink, 2.5, 14) + t(450, 144, 'Main idea', { size: 18, weight: 700, anchor: 'middle' }) +
    tl(450, 172, ['helping with everyday jobs, especially cooking with her host', 'family, improved Mira’s language more than sightseeing'], { size: 17, anchor: 'middle' }, 23);
  const sd = [['learnt words through need', '“the word for ‘pan’”'], ['by week three: follows a recipe,', 'jokes, asks for seconds'], ['her advice sums it up:', '“say yes to the boring jobs”']];
  sd.forEach(([a, c], i) => {
    const x = 30 + i * 285;
    b += arrow(x + 135, 300, 300 + i * 150, 226, { w: 2.5 });
    b += panel(x, 306, 270, 110, '#eaf3f1', C.tealDark) + t(x + 20, 334, 'supporting detail', { size: 15, weight: 700, fill: C.tealDark }) + t(x + 20, 362, a, { size: 16 }) + t(x + 20, 388, c, { size: 16, italic: true });
  });
  b += lowTop(30, 440, 840, 92, 'low', 'Not the main idea', ['“I pictured museums and markets” only sets up a contrast with what actually helped.']);
  b += panel(30, 552, 840, 110) + t(55, 588, 'Blog conventions are clues', { size: 18, weight: 700 }) +
    t(55, 618, '“week 3” label: looks back over the trip', { size: 16 }) + t(55, 644, '“12 comments”: written for a public audience, not a private diary', { size: 16 });
  add('02-main-idea-and-details',
    svg(900, 685, 'Source A: main idea and supporting details', b),
    'The main idea of Mira’s exchange blog is that helping with everyday jobs, especially cooking, improved her language more than sightseeing. Three supporting details back it up: learning words through need, what she could do by week three, and her advice to say yes to the boring jobs. “I pictured museums and markets” only sets up a contrast.',
    'The main idea is the point the whole text makes; details hold it up.',
    '## Worked text A: a blog post');
}

// 03 Name, describe, explain
{
  const a = [['Visual', 'photos, drawings, icons, charts, logos, colour', 'repeat, add to or contrast with the words?'], ['Spatial', 'position, size, columns, boxes, white space', 'what do you notice first; what is grouped?'], ['Typographic', 'capitals, bold, font size, bullet points', 'which words stand out, and why?']];
  let b = '';
  a.forEach(([h, e, q], i) => {
    const x = 30 + i * 285, w = 270;
    b += panel(x, 110, w, 170, i === 1 ? C.cream : C.panel, i === 1 ? C.olive : C.panelEdge) + t(x + 20, 146, h, { size: 20, weight: 700 }) + tl(x + 20, 174, wrap(e, 28), { size: 15, fill: C.muted }, 19) + tl(x + 20, 236, wrap(q, 28), { size: 15, weight: 700, fill: C.tealDark }, 19);
  });
  const st = [['Name', 'the photo'], ['Describe', 'Mira and her hosts laughing over a chopping board'], ['Explain', 'the kitchen became a social place, not a chore']];
  b += t(450, 322, 'A strong answer does three things', { size: 19, weight: 700, anchor: 'middle' });
  st.forEach(([h, d], i) => {
    const y = 342 + i * 76;
    b += chip(30, y, 170, 62, h, i === 2 ? C.mustard : C.tealLight, { size: 19 }) + box(215, y, 655, 62, C.panel, C.panelEdge, 2, 10) + t(235, y + 38, d, { size: 17 });
    if (i < 2) b += arrow(115, y + 63, 115, y + 75, { w: 2.5 });
  });
  b += t(235, 600, '+ the caption “finally trusted with the big knife” adds humour and shows progress', { size: 15.5, fill: C.muted, italic: true });
  b += lowTop(30, 620, 840, 58, 'low', 'Weak: “There is a photo of people cooking.”', []);
  add('03-name-describe-explain',
    svg(900, 702, 'Visual and spatial elements: name, describe, explain', b),
    'Visual, spatial and typographic aspects each prompt a question. A strong answer names the element (the photo), describes it precisely (Mira and her hosts laughing over a chopping board) and explains its effect (the kitchen became a social place, not a chore). “There is a photo of people cooking” is weak.',
    'Name it, describe it precisely, and explain what it does to the message.',
    '## Visual and spatial elements');
}

// 04 Poster annotated
{
  const px = 60, py = 130, pw = 330;
  let b = panel(30, 110, 390, 560, C.panel, C.panelEdge);
  b += box(px, py, pw, 520, '#fff', C.ink, 2.5, 6);
  b += `<rect x="${px}" y="${py}" width="${pw}" height="80" rx="6" fill="${C.tealDark}"/>` + t(px + pw / 2, py + 50, 'GROW IT. SHARE IT.', { size: 24, weight: 700, anchor: 'middle', fill: '#fff' });
  b += box(px + 20, py + 96, pw - 40, 150, C.tealLight, C.ink, 2, 6);
  b += `<circle cx="${px + 120}" cy="${py + 150}" r="18" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/><circle cx="${px + 210}" cy="${py + 158}" r="15" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/>` + path(`M${px + 90},${py + 230} Q${px + 120},${py + 180} ${px + 150},${py + 230} M${px + 185},${py + 230} Q${px + 210},${py + 185} ${px + 235},${py + 230}`, { w: 2.5 });
  b += path(`M${px + 40},${py + 236} l10,-20 l10,20 M${px + 260},${py + 236} l10,-20 l10,20`, { stroke: C.grass, w: 3 });
  [0, 1, 2].forEach((k) => { b += `<circle cx="${px + 70 + k * 95}" cy="${py + 290}" r="24" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/>`; });
  b += t(px + 70, py + 336, 'trowel', { size: 15, anchor: 'middle', fill: C.muted }) + t(px + 165, py + 336, 'watering can', { size: 15, anchor: 'middle', fill: C.muted }) + t(px + 260, py + 336, 'basket', { size: 15, anchor: 'middle', fill: C.muted });
  [0, 1, 2].forEach((k) => { b += `<rect x="${px + 30}" y="${py + 356 + k * 22}" width="${pw - 60 - k * 40}" height="10" rx="5" fill="${C.panelEdge}"/>`; });
  b += t(px + pw / 2, py + 432, '312 kg', { size: 22, weight: 700, anchor: 'middle', fill: C.olive });
  b += `<rect x="${px}" y="${py + 456}" width="${pw}" height="64" rx="6" fill="${C.grass}"/>` + `<rect x="${px + 20}" y="${py + 476}" width="${pw - 80}" height="10" rx="5" fill="#fff"/><rect x="${px + 20}" y="${py + 496}" width="${pw - 140}" height="10" rx="5" fill="#fff"/>`;
  const notes = [
    [py + 40, 'Headline: largest, at the top', 'read first; two short balanced commands are easy to remember'],
    [py + 170, 'Photo: two generations, smiling', 'friendly and open to everyone; supports “No experience”'],
    [py + 290, 'Three icons', 'match the three jobs: dig, water, harvest'],
    [py + 420, '“312 kg” and a question', 'invite the reader to join in'],
    [py + 488, 'Green strip at the bottom', 'time and place grouped; green suggests nature'],
  ];
  notes.forEach(([y, h, d], i) => {
    const ny = 120 + i * 112;
    b += `<line x1="${px + pw + 4}" y1="${y}" x2="460" y2="${ny + 44}" stroke="${C.tealDark}" stroke-width="2"/><circle cx="${px + pw + 4}" cy="${y}" r="5" fill="${C.tealDark}"/>`;
    b += box(460, ny, 410, 96, i === 0 ? C.cream : '#eaf3f1', i === 0 ? C.olive : C.tealDark, 2, 10) + t(478, ny + 32, h, { size: 17, weight: 700 }) + tl(478, ny + 58, wrap(d, 44), { size: 15 }, 20);
  });
  b += t(450, 700, 'Each point links a feature to a specific effect on the reader.', { size: 16, weight: 600, anchor: 'middle', fill: C.tealDark });
  add('04-poster-annotated',
    svg(900, 725, 'Source B: how the poster persuades', b),
    'A schematic community-garden poster with five annotations: the large headline at the top is read first; the photo of two smiling generations suggests the event is open to everyone; three icons match the jobs of digging, watering and harvesting; “312 kg” and a question invite readers to join; the green strip groups the practical details and suggests nature.',
    'Link each visual or spatial feature to a specific effect.',
    '### Worked text B: a poster');
}

// 05 Purpose, audience, perspective, attitudes
{
  const q = [
    ['Purpose', 'why the text exists', 'entertains and advises', 'informs and persuades'],
    ['Audience', 'who it is for: register, vocabulary, where it appears', 'people thinking of going on an exchange', 'open to everyone: no garden or experience needed; children welcome'],
    ['Perspective', 'whose point of view', 'Blog: one visitor’s view; the hosts might tell the pan-fire story differently', ''],
    ['Values and attitudes', 'what the writer believes or feels', 'Blog: Mira values everyday contact; relaxed, self-mocking about mistakes', ''],
  ];
  let b = chip(330, 110, 260, 44, 'Source A: blog', C.tealLight, { size: 17, edge: C.tealDark }) + chip(610, 110, 260, 44, 'Source B: poster', C.cream, { size: 17, edge: C.olive });
  q.forEach(([h, d, a, c], i) => {
    const y = 168 + i * 112;
    b += box(30, y, 285, 100, C.mustard, C.ink, 2.2, 12) + t(48, y + 36, h, { size: 19, weight: 700 }) + tl(48, y + 62, wrap(d, 30), { size: 15 }, 19);
    if (c) {
      b += box(330, y, 260, 100, '#eaf3f1', C.tealDark, 1.8, 10) + tl(346, y + 44 - (wrap(a, 26).length - 2) * 10, wrap(a, 26), { size: 16 }, 21);
      b += box(610, y, 260, 100, '#fbf6e0', C.olive, 1.8, 10) + tl(626, y + 44 - (wrap(c, 26).length - 2) * 10, wrap(c, 26), { size: 16 }, 21);
    } else {
      b += box(330, y, 540, 100, '#eaf3f1', C.tealDark, 1.8, 10) + tl(346, y + 44 - (wrap(a, 56).length - 2) * 10, wrap(a, 56), { size: 16 }, 21);
    }
  });
  b += panel(30, 620, 840, 84, C.cream, C.olive) + t(55, 655, 'Word choice is often the best evidence of attitude:', { size: 17, weight: 700 }) +
    t(55, 683, '“finally trusted” shows pride in progress, which “allowed” would not.', { size: 16 });
  add('05-purpose-audience-attitude',
    svg(900, 728, 'Purpose, audience, perspective and attitudes', b),
    'For the blog and the poster: purpose (the blog entertains and advises; the poster informs and persuades), audience (people considering an exchange; local people of any age), perspective (one visitor’s view of the exchange) and attitudes (Mira values everyday contact and is relaxed about her mistakes). Word choice such as “finally trusted” is evidence of attitude.',
    'Label each one, then back it with evidence from words and visuals.',
    '## Purpose, audience, perspective and attitudes');
}

// 06 Question types
{
  const rows = [
    ['Find the word or phrase that means…', 'the exact words from the text, no extras'],
    ['True or false, with justification', 'right choice + shortest proving quotation'],
    ['Choose the correct statements', 'check every option against the text'],
    ['Answer in your own words', 'rephrase; do not lift whole sentences'],
    ['Explain the effect of a visual', 'name it, describe it, link it to the message'],
    ['Identify purpose or attitude', 'a clear label + evidence from words and visuals'],
  ];
  let b = '';
  rows.forEach(([q, c], i) => {
    const y = 110 + i * 74;
    b += box(30, y, 380, 62, C.tealLight, C.tealDark, 2, 10) + t(48, y + 38, q, { size: 16, weight: 700 });
    b += arrow(412, y + 31, 444, y + 31, { w: 2.5 });
    b += box(450, y, 420, 62, C.panel, C.panelEdge, 2, 10) + t(468, y + 38, c, { size: 16 });
  });
  b += panel(30, 570, 840, 130, C.cream, C.olive) + t(55, 606, '“Mira felt confident on her first night.” True or false?', { size: 18, weight: 700 }) +
    t(55, 640, '✓ False – “I was nervous.”', { size: 18, weight: 700, fill: C.tealDark }) + t(55, 674, '✗ a tick alone, or a whole copied paragraph', { size: 17, fill: C.rust, weight: 600 });
  add('06-question-types',
    svg(900, 725, 'What each question type rewards', b),
    'Six reading question types and what earns credit: exact words for “find the word”; the right choice plus the shortest proving quotation for true or false; checking every option; rephrasing for “your own words”; name, describe and link for visuals; a label plus evidence for purpose or attitude. Example: “Mira felt confident on her first night” is false, proved by “I was nervous.”',
    'Match your answer to what the question type rewards.',
    '## Answering the question types');
}
