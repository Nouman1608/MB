import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-english-language-1123-narrative-composition';
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

// 01 Connected events
{
  let b = '';
  b += box(30, 110, 840, 230, C.panel, C.panelEdge);
  b += t(55, 146, 'A sequence, but not a story', { size: 21, weight: 700, fill: C.rust });
  const L = ['We went to the beach.', 'We swam.', 'We had lunch.', 'We went home.'];
  const lw = [196, 120, 150, 160];
  let x = 55;
  L.forEach((s, i) => {
    b += box(x, 172, lw[i], 56, C.bg, C.panelEdge, 10) + t(x + lw[i] / 2, 206, s, { size: 16, anchor: 'middle' });
    if (i < 3) b += t(x + lw[i] + 18, 207, '·', { size: 28, anchor: 'middle', fill: C.muted, weight: 700 });
    x += lw[i] + 36;
  });
  b += t(55, 270, 'Events sit side by side: nothing causes, complicates or changes the next.', { size: 17, fill: C.muted });
  b += t(55, 304, 'Reads as “and then … and then …”', { size: 17, fill: C.rust, weight: 600, italic: true });

  b += box(30, 362, 840, 300, C.tealLight, C.tealDark);
  b += t(55, 398, 'Connected: each event leads into the next', { size: 21, weight: 700, fill: C.tealDark });
  const E = [['We went to the beach', C.panel], ['my brother swam out too far', C.cream], ['the lifeguard was looking the other way', C.mustard]];
  E.forEach(([s, f], i) => {
    const bx = 55 + i * 275, w = 240;
    b += box(bx, 424, w, 96, f, C.ink, 10) + para(bx + w / 2, 464, s, 22, { size: 17, weight: 600, anchor: 'middle' }, 22);
    if (i < 2) b += arrow(bx + w + 4, 472, bx + 270, 472, { w: 3.5, color: C.tealDark, marker: 'ahT' });
  });
  // tension line
  b += path('M70,620 C300,615 520,590 830,548', { stroke: C.rust, w: 4, extra: 'marker-end="url(#ahR)"' });
  b += t(70, 600, 'tension', { size: 17, fill: C.rust, weight: 700 });
  b += t(845, 590, 'appears at once', { size: 16, fill: C.rust, anchor: 'end', italic: true });
  b += box(30, 682, 840, 56, C.cream, C.olive) + t(450, 717, 'The key word in the definition is “connected”.', { size: 18, weight: 700, anchor: 'middle' });
  add('01-connected-events',
    svg(900, 762, 'Connected events make a story', b),
    'Four unlinked events at the beach form a sequence but not a story. Three connected events (we went to the beach, my brother swam out too far, the lifeguard was looking the other way) each lead into the next, and tension appears at once.',
    'A story is events that cause, complicate or change each other, not a list.',
    '## What "connected events" means');
}

// 02 Small is better
{
  let b = panel(30, 110, 840, 118);
  b += t(55, 146, 'In 350–450 words, the most successful stories have:', { size: 19, weight: 700 });
  [['one main character', 195], ['one setting or two', 180], ['a short span of time', 200], ['one central problem', 195]].forEach(([s, w], i, a) => {
    const x = 55 + a.slice(0, i).reduce((q, [, ww]) => q + ww + 10, 0);
    b += pill(x, 166, w - 10, 42, s, { fill: C.tealLight, edge: C.tealDark, size: 16 });
  });
  b += t(260, 270, 'Too big', { size: 21, weight: 700, anchor: 'middle', fill: C.rust }) + t(680, 270, 'Right size', { size: 21, weight: 700, anchor: 'middle', fill: C.tealDark });
  const rows = [['a whole holiday', 'the hour the ferry was delayed'], ['a war', 'one evening when a letter arrived'], ['a life story', 'the day a grandmother taught you to bake'], ['a heist with six characters', 'two friends and one locked door']];
  rows.forEach(([a, c], i) => {
    const y = 290 + i * 84;
    b += box(30, y, 420, 70, PINK, C.rust) + t(240, y + 42, a, { size: 18, weight: 600, anchor: 'middle', fill: C.rust });
    b += path(`M455,${y + 6} L505,${y + 22} L505,${y + 48} L455,${y + 64} Z`, { fill: C.cream, stroke: C.olive, w: 2.5 });
    b += box(510, y + 8, 360, 54, C.tealLight, C.tealDark) + t(690, y + 41, c, { size: 16, weight: 600, anchor: 'middle', fill: C.tealDark });
  });
  b += box(30, 638, 840, 80, C.panel, C.rust);
  b += t(450, 670, 'Years, many characters or several dramatic events become summaries,', { size: 17, anchor: 'middle' });
  b += t(450, 696, 'and summaries cannot show feeling.', { size: 17, anchor: 'middle', weight: 700, fill: C.rust });
  add('02-small-is-better',
    svg(900, 742, 'Shrink the story to fit', b),
    'The best stories in 350 to 450 words have one main character, one or two settings, a short span of time and one central problem. Four big ideas shrink to right-sized ones: a whole holiday becomes the hour the ferry was delayed, a war one evening when a letter arrived, a life story the day a grandmother taught you to bake, and a heist with six characters two friends and one locked door.',
    'Narrow the story to one problem in a short span, so there is room to show feeling.',
    '## Small is better');
}

// 03 A simple shape
{
  let b = panel(30, 110, 840, 420);
  const pts = [[110, 405], [270, 360], [450, 270], [620, 170], [790, 330]];
  b += `<line x1="70" y1="470" x2="850" y2="470" stroke="${C.panelEdge}" stroke-width="2.5"/>`;
  b += t(70, 150, 'tension', { size: 16, fill: C.muted, italic: true });
  b += `<line x1="62" y1="456" x2="62" y2="162" stroke="${C.panelEdge}" stroke-width="2.5" marker-end="url(#ah)"/>`;
  b += path(`M${pts.map((p) => p.join(',')).join(' L')}`, { stroke: C.rust, w: 5 });
  const names = ['Opening', 'Complication', 'Rising tension', 'Turning point', 'Resolution'];
  pts.forEach(([x, y], i) => {
    b += badge(x, y, 20, String(i + 1), i === 3 ? C.mustard : C.cream);
    const ly = i === 3 ? y - 34 : y + 52;
    b += t(x, ly, names[i], { size: 17, weight: 700, anchor: 'middle' });
  });
  const desc = ['a character in a situation, with a hint of what is at stake', 'something goes wrong, changes, or is discovered', 'the problem deepens; choices are made', 'the moment of decision, revelation or crisis', 'answers the problem, or leaves a deliberate, meaningful question'];
  desc.forEach((d, i) => {
    const x = 30 + i * 170;
    b += box(x, 548, 160, 162, i === 3 ? C.cream : C.panel, i === 3 ? C.olive : C.panelEdge);
    b += badge(x + 26, 576, 15, String(i + 1), i === 3 ? C.mustard : C.cream);
    b += para(x + 14, 618, d, 18, { size: 15, fill: C.muted }, 19);
  });
  // out of order
  b += t(450, 754, 'You do not have to tell events in order', { size: 20, weight: 700, anchor: 'middle' });
  const chip = (x, y, s, f = C.cream) => box(x, y, 46, 46, f, C.ink, 8) + t(x + 23, y + 30, s, { size: 18, weight: 700, anchor: 'middle' });
  b += panel(30, 774, 410, 150) + t(52, 806, 'Flashback', { size: 19, weight: 700 });
  b += t(52, 830, 'start at the turning point, then go back', { size: 15, fill: C.muted });
  b += chip(60, 852, '4', C.mustard) + apath('M110,875 L150,875') + chip(160, 852, '1') + chip(214, 852, '2') + chip(268, 852, '3');
  b += panel(460, 774, 410, 150) + t(482, 806, 'Frame', { size: 19, weight: 700 });
  b += t(482, 830, 'a present-day scene around the story', { size: 15, fill: C.muted });
  b += box(482, 848, 366, 58, C.tealLight, C.tealDark, 8) + t(564, 882, 'present', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600 }) + t(766, 882, 'present', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600 });
  b += box(612, 856, 106, 42, C.cream, C.olive, 6) + t(665, 883, 'story', { size: 16, anchor: 'middle', weight: 700 });
  b += t(450, 954, 'W2 can reward either choice, provided the reader can follow.', { size: 17, anchor: 'middle', fill: C.tealDark, weight: 600 });
  add('03-story-shape',
    svg(900, 980, 'A simple shape in five stages', b),
    'A tension line rises through opening, complication and rising tension to a peak at the turning point, then falls to the resolution, with a short description of each stage. Below, two ways to tell events out of order: a flashback that starts at the turning point and goes back, and a frame of present-day scenes around the story.',
    'Plan four or five stages; telling them out of order is a structural choice W2 can reward.',
    '## A simple shape');
}

// 04 Openings that work
{
  let b = box(30, 110, 840, 120, PINK, C.rust);
  b += t(55, 146, 'Avoid', { size: 20, weight: 700, fill: C.rust });
  b += t(55, 180, '✗  waking up', { size: 17, fill: C.rust, weight: 600 });
  b += t(55, 210, '✗  a summary: “This is the story of the worst day of my life”', { size: 17, fill: C.rust, weight: 600 });
  const ops = [
    ['In the middle of action', '“The rope slipped through my fingers before I understood it was moving.”'],
    ['A line of dialogue', '“‘Don’t open it,’ my sister said, which was, of course, the moment I did.”'],
    ['A precise setting with a hint of unease', '“The bus stop was empty, which was strange for a Monday.”'],
    ['A character’s thought', '“I had been lying for three weeks, and today it was going to catch up with me.”'],
  ];
  ops.forEach(([h, q], i) => {
    const x = 30 + (i % 2) * 430, y = 250 + Math.floor(i / 2) * 182;
    b += panel(x, y, 410, 166) + box(x, y, 410, 52, C.tealLight, C.tealDark, 14) + t(x + 22, y + 34, h, { size: 18, weight: 700, fill: C.tealDark });
    b += para(x + 22, y + 86, q, 40, { size: 17, italic: true }, 24);
  });
  add('04-openings',
    svg(900, 640, 'Openings that work', b),
    'Openings to avoid, waking up or a summary of the story, set against four that work: starting in the middle of action, a line of dialogue, a precise setting with a hint of unease, and a character’s thought, each with an example line.',
    'Start inside the story, not before it.',
    '## Openings that work');
}

// 05 Tension and pace
{
  let b = panel(30, 110, 840, 340);
  b += t(55, 146, 'Story time against words on the page', { size: 20, weight: 700 });
  b += t(55, 186, 'in the story', { size: 16, fill: C.muted, weight: 600 }) + t(55, 386, 'on the page', { size: 16, fill: C.muted, weight: 600 });
  b += `<path d="M180,200 L180,366 L228,366 L680,200 Z" fill="${C.tealLight}" opacity="0.55"/>`;
  b += `<path d="M680,200 L702,200 L702,366 L228,366 Z" fill="${C.cream}" opacity="0.8"/>`;
  b += `<rect x="180" y="166" width="500" height="34" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>` + t(430, 189, 'the journey', { size: 16, anchor: 'middle', weight: 600 });
  b += `<rect x="680" y="166" width="22" height="34" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += t(714, 189, 'a few seconds', { size: 16, fill: C.olive, weight: 700 });
  b += `<rect x="180" y="366" width="48" height="34" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += `<rect x="228" y="366" width="474" height="34" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + t(465, 389, 'the key moment', { size: 16, anchor: 'middle', weight: 700 });
  b += t(200, 424, 'one sentence', { size: 15, fill: C.tealDark, weight: 600, anchor: 'middle' });
  b += t(465, 428, 'a paragraph, with detail and thought', { size: 16, fill: C.olive, weight: 600, anchor: 'middle' });
  b += t(310, 300, 'speed up', { size: 19, weight: 700, fill: C.tealDark, anchor: 'middle' });
  b += t(590, 300, 'slow down', { size: 19, weight: 700, fill: C.olive, anchor: 'middle' });
  // sentences
  b += panel(30, 470, 410, 220) + t(52, 506, 'Sentence length', { size: 19, weight: 700 });
  b += t(52, 540, 'build-up: longer sentences', { size: 16, fill: C.muted });
  [300, 340, 280].forEach((w, i) => { b += `<rect x="52" y="${554 + i * 18}" width="${w}" height="10" rx="5" fill="${C.teal}"/>`; });
  b += t(52, 632, 'shock: short sentences', { size: 16, fill: C.muted });
  [70, 50, 90].forEach((w, i, a) => { const x = 52 + a.slice(0, i).reduce((q, v) => q + v + 14, 0); b += `<rect x="${x}" y="648" width="${w}" height="10" rx="5" fill="${C.rust}"/>`; });
  b += panel(460, 470, 410, 220) + t(482, 506, 'Withhold information', { size: 19, weight: 700 });
  b += para(482, 540, 'Let the reader know something is wrong before they know what.', 36, { size: 16, fill: C.muted }, 22);
  b += box(482, 602, 170, 64, C.cream, C.olive, 10) + t(567, 640, 'something is wrong', { size: 15, anchor: 'middle', weight: 600 });
  b += arrow(656, 634, 686, 634, { w: 3 });
  b += box(690, 602, 160, 64, C.mustard, C.ink, 10) + t(770, 640, 'what it is', { size: 15, anchor: 'middle', weight: 700 });
  add('05-tension-and-pace',
    svg(900, 714, 'Tension and pace', b),
    'A long journey in story time takes one sentence on the page, while a few seconds at the key moment stretch to a paragraph with detail and thought. Longer sentences build up, short ones mark shock, and the reader learns that something is wrong before learning what.',
    'Spend words on the key moment and race through the rest.',
    '## Tension and pace');
}

// 06 Endings
{
  let b = '';
  b += t(240, 130, 'Avoid: endings from outside the story', { size: 19, weight: 700, anchor: 'middle', fill: C.rust });
  const bad = [['“It was all a dream”', 'cancels everything before it'], ['Sudden rescue', 'by a character or event never mentioned before'], ['A moral stated outright', '“I learned never to lie again”']];
  bad.forEach(([h, d], i) => {
    const y = 150 + i * 116;
    b += box(30, y, 420, 102, PINK, C.rust) + t(56, y + 38, '✗', { size: 22, weight: 700, fill: C.rust }) + t(86, y + 38, h, { size: 19, weight: 700, fill: C.rust });
    b += para(86, y + 68, d, 36, { size: 16, fill: C.ink }, 21);
  });
  b += t(665, 130, 'Better: show what has changed', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  const good = ['A closed door now open', 'A message finally sent', 'The narrator noticing something they ignored at the start'];
  // door icon
  const ic = [
    (x, y) => `<rect x="${x}" y="${y}" width="44" height="66" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` + path(`M${x},${y} L${x + 26},${y + 10} L${x + 26},${y + 74} L${x},${y + 66} Z`, { fill: C.mustard, w: 2.5 }),
    (x, y) => path(`M${x},${y + 12} h58 v40 h-58 z M${x},${y + 12} l29,22 l29,-22`, { fill: C.panel, w: 2.5 }) + apath(`M${x + 46},${y + 66} l18,-12`, C.tealDark, 'ahT', 3),
    (x, y) => path(`M${x},${y + 34} q29,-30 58,0 q-29,30 -58,0 z`, { fill: C.panel, w: 2.5 }) + `<circle cx="${x + 29}" cy="${y + 34}" r="10" fill="${C.tealDark}"/>`,
  ];
  good.forEach((s, i) => {
    const y = 150 + i * 116;
    b += box(470, y, 400, 102, C.tealLight, C.tealDark) + ic[i](494, y + 16);
    b += para(580, y + (wrap(s, 26).length > 2 ? 34 : 46), s, 26, { size: 17, weight: 600 }, 22);
  });
  b += box(30, 506, 840, 56, C.cream, C.olive) + t(450, 541, 'The ending should come from the story, not from outside it.', { size: 18, weight: 700, anchor: 'middle' });
  add('06-endings',
    svg(900, 586, 'Endings that come from the story', b),
    'Three endings to avoid: it was all a dream, a sudden rescue by something never mentioned, and a moral stated outright. Better endings show change through an action or image: a closed door now open, a message finally sent, or the narrator noticing something ignored at the start.',
    'End on an action or image that shows what has changed.',
    '## Endings');
}

// 07 Model opening
{
  let b = '';
  const parts = [
    ['“The phone rang at 2.14 … and I did not move. Nobody calls at 2.14 with good news.”', 'In the middle of the situation: tension from the first line. The precise time and the narrator’s stillness slow the moment down.', C.cream, C.olive],
    ['“… my mother was in the doorway … She just held out her hand, as if I could pass her the sound.”', 'Her silent gesture shows fear without stating it.', C.tealLight, C.tealDark],
    ['I picked it up. “Hello?”', 'A short line of dialogue, punctuated correctly.', C.panel, C.panelEdge],
    ['“Then a voice I had not heard for six years said my name.”', 'A complication that connects to a past the story can now explore.', C.mustard, C.ink],
  ];
  let y = 110;
  parts.forEach(([q, n, f, e], i) => {
    const ql = wrap(q, 45), nl = wrap(n, 34);
    const h = Math.max(ql.length * 23, nl.length * 22) + 40;
    b += box(30, y, 440, h, f, e) + tl(52, y + 32, ql, { size: 16, italic: true }, 23);
    b += arrow(474, y + h / 2, 506, y + h / 2, { w: 3 });
    b += panel(510, y, 360, h) + tl(530, y + 32, nl, { size: 16, fill: C.muted }, 22);
    y += h + 16;
  });
  b += box(30, y + 4, 840, 56, C.tealLight, C.tealDark) + t(450, y + 39, 'Tension, character and a complication, all in under 100 words.', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('07-model-opening',
    svg(900, y + 84, 'How the model opening works', b),
    'Four parts of the model opening matched to the commentary: the phone ringing at 2.14 starts in the middle of the situation and slows the moment, the mother’s silent gesture shows fear, a short line of dialogue is punctuated correctly, and a voice not heard for six years adds a complication.',
    'Every line of the opening does a job: tension, character, dialogue, complication.',
    '## Model opening');
}
