import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-language-acquisition-global-contexts-and-topics';
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

const GC = ['Identities and relationships', 'Orientation in space and time', 'Personal and cultural expression', 'Scientific and technical innovation', 'Globalization and sustainability', 'Fairness and development'];

// 01 Six contexts with example topics
{
  const tp = [
    'friendship, family roles, healthy routines, online life',
    'moving house, my town then and now, travel, migration stories',
    'music, festivals, fashion, hobbies, celebrations',
    'phones, social media, online learning, transport inventions',
    'food waste, recycling, fast fashion, tourism',
    'access to education, volunteering, school rules, fair trade',
  ];
  let b = '';
  GC.forEach((g, i) => {
    const x = 30 + (i % 2) * 425, y = 110 + Math.floor(i / 2) * 150, w = 415;
    b += panel(x, y, w, 136) + badge(x + 30, y + 34, 17, String(i + 1), i % 2 ? C.cream : C.mustard) + tl(x + 58, y + 40, wrap(g, 34), { size: 18, weight: 700 }, 22);
    b += tl(x + 22, y + 86, wrap(tp[i], 42), { size: 15.5, fill: C.tealDark }, 21);
  });
  b += t(450, 580, 'Example topics are Marlbridge suggestions, not an IB list; ask your teacher for the topic list.', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  add('01-six-contexts-topics',
    svg(900, 605, 'Six global contexts, many topics', b),
    'Six cards, one per global context, with example topics: friendship and online life; moving house and travel; music, festivals and hobbies; phones, social media and online learning; food waste, recycling and tourism; access to education, volunteering and fair trade.',
    'A context is a lens; topics are what you actually talk about.',
    '## The six contexts as vocabulary organisers');
}

// 02 One topic, several lenses
{
  const cx = 450, cy = 330;
  let b = box(cx - 110, cy - 50, 220, 100, C.mustard, C.ink, 3, 50) + t(cx, cy - 4, 'Tourism', { size: 24, weight: 700, anchor: 'middle' }) + t(cx, cy + 24, 'one word bank', { size: 15, anchor: 'middle' });
  const lens = [[30, 120, 'Orientation in space and time', 'journeys'], [600, 120, 'Globalization and sustainability', 'impact on places'], [315, 470, 'Fairness and development', 'who benefits']];
  lens.forEach(([x, y, g, a]) => {
    b += panel(x, y, 270, 110, '#eaf3f1', C.tealDark) + tl(x + 20, y + 36, wrap(g, 26), { size: 17, weight: 700 }, 22) + t(x + 20, y + 36 + wrap(g, 26).length * 22 + 14, 'angle: ' + a, { size: 16, fill: C.tealDark, weight: 600 });
  });
  b += arrow(cx - 110, cy - 20, 302, 210, { w: 3, color: C.tealDark, marker: 'ahT' }) + arrow(cx + 110, cy - 20, 598, 210, { w: 3, color: C.tealDark, marker: 'ahT' }) + arrow(cx, cy + 52, cx, 466, { w: 3, color: C.tealDark, marker: 'ahT' });
  b += panel(30, 600, 840, 74, C.cream, C.olive) + t(450, 643, 'You need well-built banks you can angle, not six separate vocabularies.', { size: 18, weight: 700, anchor: 'middle' });
  add('02-one-topic-several-lenses',
    svg(900, 700, 'One topic, several contexts', b),
    'Tourism sits at the centre with arrows to three contexts: orientation in space and time (journeys), globalization and sustainability (impact on places) and fairness and development (who benefits). One word bank can be angled towards each.',
    'Build a bank once and angle it towards different contexts.',
    '## The six contexts as vocabulary organisers');
}

// 03 Five-layer word bank: food waste
{
  const L = [
    ['Core nouns', 'leftovers, packaging, sell-by date, compost, landfill, portion, canteen', C.tealLight],
    ['Verbs', 'throw away food, reduce waste, recycle packaging, donate surplus food, plan meals', C.teal],
    ['Describing words', 'wasteful, fresh, out of date, avoidable, harmful, extremely, slightly', C.tealLight],
    ['Opinion and linking', 'in my view, I am convinced that, as a result, whereas, above all', C.cream],
    ['Chunks', 'make a difference, it is a shame that, the problem is that, on the other hand', C.cream],
  ];
  let b = t(450, 130, 'Topic: food waste (Globalization and sustainability). Aim for 8–10 items per layer.', { size: 16, weight: 600, anchor: 'middle', fill: C.muted });
  L.forEach(([h, d, f], i) => {
    const y = 148 + i * 84;
    b += box(30, y, 230, 72, f, C.ink, 2.2, 10) + badge(58, y + 36, 15, String(i + 1), '#fff') + t(82, y + 42, h, { size: 16, weight: 700 });
    b += box(274, y, 596, 72, C.panel, C.panelEdge, 2, 10) + tl(292, y + 32 - (wrap(d, 72).length - 1) * 10 + 10, wrap(d, 72), { size: 15.5, italic: true }, 20);
  });
  const y6 = 148 + 5 * 84 + 6;
  b += panel(30, y6, 840, 150, '#eaf3f1', C.tealDark) + t(52, y6 + 34, '6  Scale (from the Criterion C wording)', { size: 17, weight: 700, fill: C.tealDark });
  [['Personal', 'I plan my lunch so I finish it.'], ['Local', 'our canteen gives unsold bread to a food bank'], ['Global', 'food waste links to wider environmental harm']].forEach(([h, d], i) => {
    const x = 52 + i * 272;
    b += box(x, y6 + 50, 258, 86, C.panel, C.tealDark, 1.8, 10) + t(x + 14, y6 + 76, h, { size: 16, weight: 700 }) + tl(x + 14, y6 + 100, wrap(d, 30), { size: 15 }, 18);
  });
  add('03-five-layer-word-bank',
    svg(900, 750, 'A layered word bank: food waste', b),
    'A word bank for food waste in six layers: core nouns (leftovers, packaging, compost), verbs in phrases (reduce waste, donate surplus food), describing words, opinion and linking phrases, chunks such as “make a difference”, and a scale row with one idea at personal, local and global level.',
    'Nouns alone will not carry you: add verbs, describers, linkers, chunks and scale.',
    '## Building a thematic word bank');
}

// 04 Receptive vs productive
{
  let b = `<circle cx="450" cy="300" r="190" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="3"/>` + `<circle cx="450" cy="380" r="100" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
  b += t(450, 160, 'Receptive (R)', { size: 21, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(450, 186, 'words you recognise', { size: 16, anchor: 'middle' }) + t(450, 216, 'listening A, reading B', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600 });
  b += t(450, 370, 'Productive (P)', { size: 19, weight: 700, anchor: 'middle' }) + t(450, 394, 'words you can use', { size: 15, anchor: 'middle' }) + t(450, 418, 'speaking C, writing D', { size: 15, anchor: 'middle', weight: 600 });
  b += panel(30, 510, 410, 130, '#eaf3f1', C.tealDark) + t(52, 546, 'For A and B: breadth', { size: 18, weight: 700, fill: C.tealDark }) + tl(52, 576, ['many words, including synonyms,', 'to spot an idea however it is put'], { size: 16 }, 22);
  b += panel(460, 510, 410, 130, C.cream, C.olive) + t(482, 546, 'For C and D: depth', { size: 18, weight: 700, fill: C.olive }) + tl(482, 576, ['fewer words, with correct gender,', 'spelling, forms and collocations'], { size: 16 }, 22);
  b += t(450, 672, 'Test both ways: target language → English checks R; English → target language checks P.', { size: 16, anchor: 'middle', weight: 600 });
  add('04-receptive-productive',
    svg(900, 695, 'Receptive and productive vocabulary', b),
    'A small circle of productive vocabulary, the words you can use in speaking and writing, sits inside a larger circle of receptive vocabulary, the words you recognise in listening and reading. Listening and reading need breadth, including synonyms; speaking and writing need depth and accuracy.',
    'Your receptive bank is always bigger; practise producing to close the gap.',
    '## Receptive and productive vocabulary');
}

// 05 One bank, four skills
{
  const sk = [
    ['A Listening', 'predict words and synonyms: “throw away” → waste, get rid of, bin'],
    ['B Reading', 'word families (waste → wasteful); context; watch for false friends'],
    ['C Speaking', 'recycle chunks; move personal → local → global; describe a lost word'],
    ['D Writing', 'opinion and linking layer for structure; precise verbs; steady register'],
  ];
  let b = box(330, 290, 240, 110, C.mustard, C.ink, 3, 16) + t(450, 334, 'One word bank', { size: 21, weight: 700, anchor: 'middle' }) + t(450, 362, 'e.g. “keep in touch with”', { size: 15, anchor: 'middle', italic: true });
  const pos = [[30, 110], [470, 110], [30, 460], [470, 460]];
  sk.forEach(([h, d], i) => {
    const [x, y] = pos[i];
    b += panel(x, y, 400, 130, i % 2 ? C.cream : '#eaf3f1', i % 2 ? C.olive : C.tealDark) + t(x + 22, y + 38, h, { size: 19, weight: 700 }) + tl(x + 22, y + 68, wrap(d, 44), { size: 15.5 }, 21);
  });
  b += arrow(380, 288, 300, 244, { w: 3 }) + arrow(520, 288, 600, 244, { w: 3 }) + arrow(380, 402, 300, 456, { w: 3 }) + arrow(520, 402, 600, 456, { w: 3 });
  b += panel(30, 610, 840, 106) + t(55, 644, 'Speaking with one chunk at three scales', { size: 17, weight: 700 }) +
    tl(55, 672, ['“Personally, I keep in touch with my cousin by video call. … Globally, it means', 'people can have friends in other countries.”'], { size: 15.5, italic: true }, 21);
  add('05-one-bank-four-skills',
    svg(900, 740, 'One bank, four skills', b),
    'One word bank feeds all four criteria: in listening, predict words and synonyms; in reading, use word families and context and watch for false friends; in speaking, recycle chunks and move from personal to local to global; in writing, use linking phrases, precise verbs and a steady register. The chunk “keep in touch with” is used across them.',
    'The same chunks reused in every skill move from recognised to usable.',
    '## Transferring a bank between skills');
}

// 06 Spaced review routine
{
  const days = [1, 2, 4, 8, 15];
  const x0 = 80, x1 = 830, X = (d) => x0 + ((d - 1) / 14) * (x1 - x0);
  let b = panel(30, 110, 840, 260) + t(55, 146, 'Space your reviews', { size: 19, weight: 700 });
  b += `<line x1="${x0}" y1="260" x2="${x1}" y2="260" stroke="${C.ink}" stroke-width="2.5"/>`;
  for (let d = 1; d <= 15; d++) b += `<line x1="${X(d)}" y1="255" x2="${X(d)}" y2="265" stroke="${C.muted}" stroke-width="1.5"/>`;
  days.forEach((d, i) => {
    b += `<circle cx="${X(d)}" cy="260" r="${i === 0 ? 22 : 18}" fill="${i === 0 ? C.mustard : C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + t(X(d), 266, String(d), { size: 16, weight: 700, anchor: 'middle' });
    b += t(X(d), 222, i === 0 ? 'learn' : 'review', { size: 15, anchor: 'middle', weight: 600, fill: i === 0 ? C.olive : C.tealDark });
  });
  b += t(455, 316, 'day', { size: 15, anchor: 'middle', fill: C.muted }) + t(455, 348, 'words fade if you meet them only once', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  b += panel(30, 390, 410, 140, '#eaf3f1', C.tealDark) + t(52, 426, 'Each review', { size: 18, weight: 700, fill: C.tealDark }) + tl(52, 456, ['test from English first', '(productive), then check;', 'missed items go in a “tricky” column'], { size: 16 }, 22);
  b += panel(460, 390, 410, 140, C.cream, C.olive) + t(482, 426, 'Before an assessed task', { size: 18, weight: 700, fill: C.olive }) + tl(482, 456, ['five minutes rebuilding the', 'bank for that topic from', 'memory'], { size: 16 }, 22);
  add('06-spaced-review',
    svg(900, 555, 'A review routine that works', b),
    'A timeline from day 1 to day 15: learn a set on day 1, then review on days 2, 4, 8 and 15. Each review tests from English first and keeps missed words in a “tricky” column; before an assessed task, rebuild the topic bank from memory for five minutes.',
    'Learn on day 1, then review on days 2, 4, 8 and 15.',
    '## A review routine that works');
}
