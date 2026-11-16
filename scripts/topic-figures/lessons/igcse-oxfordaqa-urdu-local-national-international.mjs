import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-oxfordaqa-urdu-local-national-international';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- local helpers (shared look across the OxfordAQA / Edexcel Urdu set) ----
const wrap = (s, n) => { const out = ['']; for (const w of s.split(' ')) { const c = out[out.length - 1]; if (c && (c + ' ' + w).length > n) out.push(w); else out[out.length - 1] = c ? c + ' ' + w : w; } return out; };
const wt = (x, y, s, n, opts = {}, lh) => tl(x, y, wrap(s, n), opts, lh || (opts.size || 18) * 1.3);
const box = (x, y, w, h, fill, edge, sw = 2.5, rx = 12) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;

// 01 Theme 2 map
{
  let b = box(150, 110, 600, 76, C.cream, C.olive, 3, 14) + t(450, 142, 'Theme 2: Local, National, International', { size: 22, weight: 700, anchor: 'middle' }) + t(450, 170, 'and Global Areas of Interest', { size: 22, weight: 700, anchor: 'middle' });
  const cols = [
    ['Topic 1', ['Home, town,', 'neighbourhood', 'and region'], null, ['where you live,', 'local amenities,', 'directions']],
    ['Topic 2', ['Social issues'], ['Charity / voluntary work', 'Healthy / unhealthy living'], null],
    ['Topic 3', ['Global issues'], ['The environment', 'Poverty'], null],
    ['Topic 4', ['Travel and', 'tourism'], null, ['holidays, transport,', 'travel experiences']],
  ];
  cols.forEach(([n, name, subs, note], i) => {
    const x = 30 + i * 214, w = 198, cx = x + w / 2;
    b += path(`M450,186 V210 H${cx} V232`, { w: 3 });
    b += box(x, 236, w, 116, C.teal, C.tealDark, 2.5, 14) + t(x + 16, 266, n, { size: 18, weight: 700, fill: C.tealDark }) + tl(x + 16, 292, name, { size: 18, weight: 600 }, 22);
    if (subs) {
      b += t(x + 16, 384, 'sub-topics', { size: 15, weight: 600, fill: C.muted });
      subs.forEach((s, j) => {
        const y = 396 + j * 96;
        const ls = wrap(s, 20);
        b += panel(x, y, w, 80) + tl(x + 16, y + (ls.length === 1 ? 46 : 34), ls, { size: 17 }, 22);
      });
    } else {
      b += `<rect x="${x}" y="396" width="${w}" height="176" rx="12" fill="none" stroke="${C.panelEdge}" stroke-width="2.5" stroke-dasharray="8 6"/>` +
        t(x + 16, 384, 'covers', { size: 15, weight: 600, fill: C.muted }) + tl(x + 16, 432, note, { size: 16, fill: C.muted }, 22);
    }
  });
  b += box(30, 600, 840, 56, C.tealLight, C.tealDark, 2) + t(450, 635, 'Poverty sits under Global issues in the specification, not Social issues', { size: 18, weight: 600, anchor: 'middle' });
  add('01-theme-2-map',
    svg(900, 680, 'Theme 2 at a glance', b),
    'Theme 2 has four topics: home, town, neighbourhood and region; social issues (charity and voluntary work, healthy and unhealthy living); global issues (the environment, poverty); and travel and tourism.',
    'Four topics; sub-topics are set under Social issues and Global issues only.',
    '## Syllabus coverage');
}

// 02 Problem-and-solution language frame
{
  const steps = [
    ['The problem', 'the issue is ...', C.panel, C.panelEdge],
    ['Cause and effect', 'because of this ... / as a result ... / this leads to ...', C.panel, C.panelEdge],
    ['A solution', 'a possible solution would be ... / if we ..., ... would ...', C.cream, C.olive],
    ['Why it helps', 'this would help because ...', C.tealLight, C.tealDark],
  ];
  let b = t(450, 128, 'Core vocabulary for Theme 2, not an optional extra', { size: 19, weight: 600, fill: C.muted, anchor: 'middle' });
  steps.forEach(([h, s, fill, edge], i) => {
    const y = 156 + i * 120;
    b += box(110, y, 760, 92, fill, edge, 2.5, 14) + badge(62, y + 46, 26, String(i + 1), i === 2 ? C.mustard : C.cream) +
      t(134, y + 38, h, { size: 21, weight: 700 }) + t(134, y + 70, s, { size: 19, italic: true });
    if (i < 3) b += arrow(62, y + 74, 62, y + 116);
  });
  add('02-problem-solution-frame',
    svg(900, 650, 'Problem-and-solution language', b),
    'Four linked steps for issue-based writing: name the problem (the issue is), link cause and effect (because of this, as a result, this leads to), propose a solution (a possible solution would be, if we ... would) and justify it (this would help because).',
    'Treat problem-and-solution phrases as core vocabulary for this theme.',
    '## Vocabulary you need in place');
}

// 03 Switching registers in one piece
{
  let b = '';
  const col = (x, head, sub, lines, fill, edge) => box(x, 110, 380, 330, fill, edge, 2.5, 14) + t(x + 24, 150, head, { size: 24, weight: 700 }) + t(x + 24, 178, sub, { size: 17, fill: C.muted }) +
    lines.map(([a, c], i) => t(x + 24, 232 + i * 70, a, { size: 18, weight: 700, fill: C.tealDark }) + t(x + 24, 256 + i * 70, c, { size: 17 })).join('');
  b += col(30, 'Describe', 'a place, factually', [
    ['Present tense', 'what the place is like'],
    ['Comparatives', 'this town is quieter than the city'],
    ['Past narrative', 'recounting a specific trip'],
  ], C.panel, C.panelEdge);
  b += col(490, 'Evaluate', 'a problem, opinion-led', [
    ['Impersonal constructions', 'general social or global problems'],
    ['Cause and effect', 'as a result, this leads to'],
    ['Conditionals', 'if we recycled more, ... would improve'],
  ], C.cream, C.olive);
  b += arrow(414, 290, 486, 290, { w: 5 });
  b += t(450, 480, 'Practise moving from description to argument within a single piece of writing', { size: 18, weight: 600, anchor: 'middle' });
  add('03-describe-then-evaluate',
    svg(900, 520, 'Switching register in one answer', b),
    'Two halves of one piece of writing. Describing a place uses the present tense, comparatives and past narrative; evaluating a problem uses impersonal constructions, cause-and-effect connectives and conditionals.',
    'Theme 2 mixes description and argument, so practise switching between them.',
    '## Structures that raise the grade');
}

// 04 Reading text functions and the travel tense switch
{
  let b = panel(30, 110, 840, 220) + t(54, 148, 'Reading on social and global issues: what is this part doing?', { size: 21, weight: 700 });
  [['Describing', 'a problem'], ['Proposing', 'a solution'], ['Evaluating', 'how well a', 'solution worked']].forEach(([h, ...ls], i) => {
    const x = 60 + i * 270, fill = i === 2 ? C.cream : C.tealLight, edge = i === 2 ? C.olive : C.tealDark;
    b += box(x, 172, 240, 136, fill, edge, 2.5, 12) + t(x + 120, 214, h, { size: 22, weight: 700, anchor: 'middle' }) + tl(x + 120, 248, ls, { size: 18, anchor: 'middle' }, 24);
    if (i < 2) b += arrow(x + 242, 240, x + 266, 240, { w: 3 });
  });
  b += panel(30, 350, 840, 250) + t(54, 388, 'Writing on travel: two time frames in one response', { size: 21, weight: 700 });
  b += box(60, 416, 360, 150, C.panel, C.panelEdge, 2.5, 12) + t(84, 454, 'Past-tense recount', { size: 20, weight: 700, fill: C.tealDark }) + t(84, 486, 'what you did', { size: 18 });
  b += box(480, 416, 360, 150, C.cream, C.olive, 2.5, 12) + t(504, 454, 'Present-tense evaluation', { size: 20, weight: 700, fill: C.olive }) + t(504, 486, 'what you think of it now', { size: 18 });
  b += arrow(424, 491, 476, 491, { w: 4 });
  b += t(84, 534, 'avoid a pure narrative with no comment', { size: 16, fill: C.muted }) + t(504, 534, 'shows opinion-giving language', { size: 16, fill: C.muted });
  add('04-approaching-the-tasks',
    svg(900, 630, 'Approaching the tasks', b),
    'In reading, sort each part of an issues text into describing a problem, proposing a solution or evaluating how well a solution worked. In travel writing, move from a past-tense recount of what you did to a present-tense evaluation of what you think now.',
    'Separate problem, solution and evaluation in reading; switch tenses in travel writing.',
    '## Approaching the tasks');
}

// 05 Worked example: environmental problem chain
{
  let b = t(450, 128, 'Task: an environmental problem in your area, and what could be done', { size: 17, italic: true, anchor: 'middle', fill: C.muted });
  b += box(30, 150, 840, 64, '#f6ece4', C.rust, 2.5, 12) + t(54, 190, 'Weak', { size: 21, weight: 700, fill: C.rust }) + t(140, 190, '"there is a lot of pollution": no detail, no solution, one tense', { size: 18 });
  const steps = [
    ['Specific problem', 'present tense', 'traffic pollution near local schools', C.panel, C.panelEdge],
    ['Cause', 'cause-and-effect connective', 'because of this, more cars drive through residential streets', C.panel, C.panelEdge],
    ['Solution', 'conditional', 'if the town introduced a bicycle scheme, this would reduce ...', C.cream, C.olive],
    ['Opinion + reason', 'justified close', 'I believe this matters because children’s health is affected', C.tealLight, C.tealDark],
  ];
  b += t(54, 252, 'Strong', { size: 21, weight: 700, fill: C.tealDark });
  steps.forEach(([h, s, ex, fill, edge], i) => {
    const y = 270 + i * 104;
    b += box(110, y, 760, 82, fill, edge, 2.5, 12) + badge(62, y + 41, 24, String(i + 1), i === 2 ? C.mustard : C.cream) +
      t(134, y + 34, h, { size: 20, weight: 700 }) + t(860 - 12, y + 34, s, { size: 16, fill: C.muted, anchor: 'end' }) + t(134, y + 63, ex, { size: 17, italic: true });
    if (i < 3) b += arrow(62, y + 66, 62, y + 100, { w: 3 });
  });
  add('05-problem-cause-solution-opinion',
    svg(900, 710, 'From problem to justified opinion', b),
    'A weak answer only says there is a lot of pollution. A strong answer names a specific local problem, gives its cause, proposes a conditional solution and closes with an opinion and a reason.',
    'Problem, cause, conditional solution, justified opinion: a reliable structure for this theme.',
    '## Worked example');
}
