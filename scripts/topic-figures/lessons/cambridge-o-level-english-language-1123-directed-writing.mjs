import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-english-language-1123-directed-writing';
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

// 01 The task at a glance
{
  let b = '';
  // sources
  b += panel(30, 110, 250, 250) + t(155, 146, 'Read', { size: 21, weight: 700, anchor: 'middle' });
  b += box(60, 166, 90, 112, C.cream, C.olive, 6) + box(160, 166, 90, 112, C.cream, C.olive, 6);
  [0, 1].forEach((k) => [0, 1, 2, 3].forEach((i) => { b += `<line x1="${74 + k * 100}" y1="${186 + i * 17}" x2="${136 + k * 100 - (i === 3 ? 24 : 0)}" y2="${186 + i * 17}" stroke="${C.olive}" stroke-width="3"/>`; }));
  b += t(105, 268, 'Text 1', { size: 15, anchor: 'middle', weight: 600 }) + t(205, 268, 'Text 2', { size: 15, anchor: 'middle', weight: 600 });
  b += t(155, 312, 'one or two texts', { size: 17, anchor: 'middle' }) + t(155, 336, 'about 400–450 words', { size: 17, anchor: 'middle', weight: 700 });
  b += arrow(284, 235, 316, 235, { w: 4 });
  // verbs
  b += panel(320, 110, 250, 250) + t(445, 146, 'Work on the ideas', { size: 21, weight: 700, anchor: 'middle' });
  ['use', 'develop', 'evaluate'].forEach((v, i) => { b += pill(360, 168 + i * 60, 170, 46, v, { fill: [C.cream, C.tealLight, C.mustard][i], edge: C.ink, size: 19, weight: 700 }); });
  b += arrow(574, 235, 606, 235, { w: 4 });
  // write
  b += panel(610, 110, 260, 250) + t(740, 146, 'Write', { size: 21, weight: 700, anchor: 'middle' });
  b += t(740, 178, 'a discursive / argumentative /', { size: 15, anchor: 'middle', fill: C.muted }) + t(740, 197, 'persuasive piece as a:', { size: 15, anchor: 'middle', fill: C.muted });
  ['speech', 'email', 'report', 'letter', 'article'].forEach((f, i) => {
    const x = 628 + (i % 3) * 78 + (i >= 3 ? 39 : 0), y = 212 + Math.floor(i / 3) * 46;
    b += pill(x, y, 72, 36, f, { fill: C.tealLight, edge: C.tealDark, size: 15 });
  });
  b += t(740, 336, 'about 250–350 words', { size: 17, anchor: 'middle', weight: 700 });
  // marks
  b += t(450, 404, 'One compulsory question: 25 marks', { size: 21, weight: 700, anchor: 'middle' });
  const tot = 840, x0 = 30, wW = (tot * 15) / 25;
  b += `<rect x="${x0}" y="424" width="${wW}" height="70" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += `<rect x="${x0 + wW}" y="424" width="${tot - wW}" height="70" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += t(x0 + wW / 2, 456, 'Writing: 15 marks', { size: 20, weight: 700, anchor: 'middle' }) + t(x0 + wW / 2, 481, 'W1–W5', { size: 17, anchor: 'middle' });
  b += t(x0 + wW + (tot - wW) / 2, 456, 'Reading: 10 marks', { size: 20, weight: 700, anchor: 'middle' }) + t(x0 + wW + (tot - wW) / 2, 481, 'R3, R5', { size: 17, anchor: 'middle' });
  b += box(30, 518, 413, 112) + t(50, 550, 'R3', { size: 19, weight: 700, fill: C.olive });
  b += para(50, 576, '“analyse, evaluate and develop facts, ideas and opinions, using appropriate support from the text”', 44, { size: 15, fill: C.muted }, 20);
  b += box(457, 518, 413, 112) + t(477, 550, 'R5', { size: 19, weight: 700, fill: C.olive });
  b += para(477, 576, '“select and use information for specific purposes”', 44, { size: 15, fill: C.muted }, 20);
  add('01-task-at-a-glance',
    svg(900, 656, 'Directed writing at a glance', b),
    'Candidates read one or two texts of about 400 to 450 words, use, develop and evaluate their ideas, and write about 250 to 350 words as a speech, email, report, letter or article. The one compulsory question carries 25 marks: 15 for writing (W1 to W5) and 10 for reading (R3 and R5).',
    'Read, work on the ideas, write in the set form: 15 marks for writing, 10 for reading.',
    '## Use, develop, evaluate');
}

// 02 Use, develop, evaluate staircase
{
  let b = '';
  const steps = [
    ['Use', 'the minimum', 'Take relevant ideas from the source(s) and put them in your answer. Used alone, restating points in order, it reads like a summary.', C.cream],
    ['Develop', 'take an idea further', 'Draw out a consequence, give a fresh example, connect two points from different sources, or apply an idea to your audience.', C.tealLight],
    ['Evaluate', 'judge the ideas', 'Is a claim backed by evidence? Is the writer biased? Which argument is stronger, and why? What has a source left out?', C.mustard],
  ];
  steps.forEach(([h, s, d, f], i) => {
    const x = 30 + i * 285, y = 380 - i * 90, hgt = 220 + i * 90;
    b += box(x, y, 270, hgt, f, C.ink, 12);
    b += t(x + 20, y + 40, h, { size: 26, weight: 700 }) + t(x + 20, y + 68, s, { size: 17, weight: 600, fill: i === 2 ? C.ink : C.tealDark });
    b += para(x + 20, y + 104, d, 28, { size: 16 }, 22);
  });
  b += apath('M110,366 C150,310 230,292 312,290', C.ink) + apath('M395,276 C435,220 515,202 597,200', C.ink);
  b += t(205, 334, 'harder', { size: 16, fill: C.muted, italic: true }) + t(490, 244, 'harder', { size: 16, fill: C.muted, italic: true });
  b += box(30, 620, 840, 100, C.panel, C.tealDark);
  b += t(50, 652, 'Develop, in the guide’s example:', { size: 17, weight: 700, fill: C.tealDark });
  b += t(50, 680, '“The article says the new road would cut journey times;', { size: 16, italic: true });
  b += t(50, 703, 'for our students, that could mean twenty minutes more sleep each morning.”', { size: 16, italic: true });
  b += box(30, 736, 840, 54, C.cream, C.olive) + t(450, 770, 'High reading marks come from develop and evaluate, not from use.', { size: 18, weight: 700, anchor: 'middle' });
  add('02-use-develop-evaluate',
    svg(900, 744, 'Three verbs that climb in difficulty', `<g transform="translate(0,-70)">${b}</g>`),
    'Three steps of rising height: use (take relevant ideas, the minimum), develop (consequences, fresh examples, connections, applying ideas to the audience) and evaluate (judge evidence, bias, strength and gaps). An example shows a road’s shorter journey times developed into more sleep for students.',
    'Using the sources is the minimum; high reading marks come from developing and evaluating them.',
    '## Use, develop, evaluate');
}

// 03 Six evaluation questions
{
  let b = t(450, 104, 'Influence may include facts, ideas, perspectives, opinions and bias', { size: 18, anchor: 'middle', fill: C.muted, italic: true });
  const qs = [
    ['Fact or opinion?', 'numbers and verifiable events versus judgements (“disastrous”, “obviously”)'],
    ['Whose perspective?', 'who wrote it and what they stand to gain or lose'],
    ['Bias?', 'one side only, loaded words, missing counter-arguments'],
    ['Evidence?', 'is a claim supported, and by what: data, examples, one anecdote?'],
    ['Conflict?', 'where two sources disagree, which is more convincing and why'],
    ['Gaps?', 'what neither source mentions that your audience would want to know'],
  ];
  qs.forEach(([q, d], i) => {
    const x = 30 + (i % 2) * 430, y = 128 + Math.floor(i / 2) * 150;
    b += panel(x, y, 410, 136);
    b += `<circle cx="${x + 40}" cy="${y + 38}" r="20" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + t(x + 40, y + 46, '?', { size: 22, weight: 700, anchor: 'middle' });
    b += t(x + 74, y + 45, q, { size: 21, weight: 700 });
    b += para(x + 24, y + 84, d, 42, { size: 16, fill: C.muted }, 22);
  });
  b += box(30, 590, 840, 138, C.tealLight, C.tealDark);
  b += t(50, 622, 'Evaluation inside your own writing:', { size: 17, weight: 700, fill: C.tealDark });
  b += tl(50, 652, ['“Although the developer claims the scheme will ‘transform the town’, it offers', 'no figures to support this, and as the company building the road, it can hardly', 'be called neutral.”'], { size: 16, italic: true }, 23);
  add('03-evaluate-a-source',
    svg(900, 752, 'Six questions to evaluate a source', b),
    'Six questions for judging a source: fact or opinion, whose perspective, bias, evidence, conflict between sources and gaps, each with what to look for. An example sentence questions a developer’s unsupported claim and its neutrality.',
    'Turn the syllabus words into questions and ask them of every source.',
    '## How to evaluate a source');
}

// 04 Five forms
{
  let b = '';
  const cols = [[190, 'Opening'], [420, 'Shape'], [660, 'Register']];
  cols.forEach(([x, h]) => { b += t(x, 132, h, { size: 18, weight: 700, fill: C.tealDark }); });
  const rows = [
    ['Speech', 'address the audience directly (“Good morning, everyone”)', 'spoken signposts, rhetorical questions, a memorable close', 'set by the audience: peers, parents, a committee'],
    ['Email', 'greeting, purpose in first lines', 'short paragraphs, clear request or recommendation', 'formal or semi-formal; set by the recipient'],
    ['Report', 'title, purpose or terms of reference', 'headings or clearly marked sections, findings, recommendation', 'impersonal, objective'],
    ['Letter', 'appropriate salutation', 'purpose, argument, request or call to action, sign-off', 'formal for officials and editors'],
    ['Article', 'headline, engaging opening', 'developed paragraphs, a viewpoint, a strong ending', 'suited to the publication’s readers'],
  ];
  rows.forEach(([f, o, s, r], i) => {
    const y = 148 + i * 110;
    b += panel(30, y, 840, 98);
    b += box(30, y, 140, 98, C.cream, C.olive, 14) + t(100, y + 56, f, { size: 21, weight: 700, anchor: 'middle' });
    b += para(190, y + 34, o, 23, { size: 16 }, 21) + para(420, y + 34, s, 25, { size: 16 }, 21) + para(660, y + 34, r, 22, { size: 16, fill: C.muted }, 21);
  });
  b += box(30, 708, 840, 60, C.tealLight, C.tealDark) + t(450, 745, 'W4, “use register appropriate to context”, is assessed in this task.', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('04-five-forms',
    svg(900, 792, 'Five forms and their conventions', b),
    'A grid of the five forms (speech, email, report, letter, article) showing how each opens, how it is shaped and what register it uses, from a speech that addresses its audience directly to an impersonal, objective report. W4, register, is assessed in directed writing.',
    'The form and audience in the question decide the opening, the shape and the register.',
    '## The five forms and their conventions');
}

// 05 Discursive / argumentative / persuasive
{
  let b = '';
  const cards = [
    ['Discursive', 'weigh both sides fairly and reach a judgement', '“consider the views…”', C.tealLight, C.tealDark],
    ['Argumentative', 'take a position and defend it with reasons, answering counter-arguments', '“argue for or against…”', C.cream, C.olive],
    ['Persuasive', 'move the audience to agree or act: appeals to their interests and feelings as well as reasons', '“persuade the council…”', PINK, C.rust],
  ];
  cards.forEach(([h, d, cue, f, e], i) => {
    const x = 30 + i * 285, y = 110;
    b += box(x, y, 270, 420, f, e);
    b += t(x + 135, y + 40, h, { size: 22, weight: 700, anchor: 'middle', fill: e });
    const cx = x + 135, cy = y + 140;
    if (i === 0) {
      b += `<line x1="${cx}" y1="${cy - 50}" x2="${cx}" y2="${cy + 50}" stroke="${C.ink}" stroke-width="4"/>` + `<line x1="${cx - 80}" y1="${cy - 40}" x2="${cx + 80}" y2="${cy - 40}" stroke="${C.ink}" stroke-width="4"/>`;
      b += path(`M${cx - 80},${cy - 40} l-26,46 h52 z`, { fill: C.panel, w: 2.5 }) + path(`M${cx + 80},${cy - 40} l-26,46 h52 z`, { fill: C.panel, w: 2.5 });
      b += t(cx - 80, cy + 30, 'side A', { size: 15, anchor: 'middle' }) + t(cx + 80, cy + 30, 'side B', { size: 15, anchor: 'middle' });
      b += `<rect x="${cx - 40}" y="${cy + 50}" width="80" height="12" fill="${C.ink}"/>`;
    } else if (i === 1) {
      b += box(cx - 62, cy - 56, 124, 40, C.mustard, C.ink, 8) + t(cx, cy - 30, 'position', { size: 16, weight: 700, anchor: 'middle' });
      [-70, 0, 70].forEach((d) => { b += `<line x1="${cx + d}" y1="${cy + 22}" x2="${cx + d * 0.6}" y2="${cy - 14}" stroke="${C.ink}" stroke-width="3"/>` + box(cx + d - 30, cy + 22, 60, 30, C.panel, C.ink, 6) + t(cx + d, cy + 43, 'reason', { size: 15, anchor: 'middle' }); });
      b += apath(`M${cx + 92},${cy - 70} L${cx + 68},${cy - 44}`, C.rust, 'ahR', 3) + t(cx + 96, cy - 78, 'counter', { size: 15, fill: C.rust, anchor: 'middle' });
    } else {
      b += `<circle cx="${cx - 60}" cy="${cy}" r="26" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + t(cx - 60, cy + 5, 'you', { size: 15, weight: 700, anchor: 'middle' });
      b += apath(`M${cx - 30},${cy} L${cx + 28},${cy}`, C.rust, 'ahR', 4);
      [-26, 0, 26].forEach((d) => { b += `<circle cx="${cx + 60 + (d === 0 ? 14 : 0)}" cy="${cy + d}" r="12" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>`; });
      b += t(cx + 66, cy + 56, 'audience', { size: 15, anchor: 'middle' });
      b += t(cx, cy - 44, 'agree or act', { size: 15, anchor: 'middle', fill: C.rust, weight: 600 });
    }
    b += para(x + 22, y + 238, d, 27, { size: 17 }, 23);
    b += t(x + 22, y + 350, 'Cue in the question:', { size: 15, fill: C.muted });
    b += box(x + 20, y + 362, 230, 40, C.panel, e, 20) + t(x + 135, y + 388, cue, { size: 16, weight: 600, anchor: 'middle', italic: true });
  });
  b += box(30, 550, 840, 56, C.cream, C.olive) + t(450, 585, '“Consider” in the syllabus means “review and respond to given information”.', { size: 17, weight: 700, anchor: 'middle' });
  add('05-three-purposes',
    svg(900, 630, 'Discursive, argumentative, persuasive', b),
    'Three purposes compared: discursive writing weighs both sides and reaches a judgement, argumentative writing defends a position with reasons and answers counter-arguments, and persuasive writing moves the audience to agree or act. Each shows a cue word from a question.',
    'The question’s wording tells you whether to weigh, argue or persuade.',
    '## Discursive, argumentative, persuasive');
}

// 06 Ten-minute plan
{
  let b = '';
  const steps = [
    ['Read the question', 'form, audience, purpose, and any bullet points it asks you to cover'],
    ['Read the source(s) twice and annotate', null],
    ['Decide your position or judgement', ''],
    ['Plan four or five paragraphs', 'for each: the source point and your development or evaluation'],
    ['Plan your opening and closing', 'in the form’s conventions'],
  ];
  let y = 110;
  steps.forEach(([h, d], i) => {
    const hgt = d === null ? 150 : d ? 92 : 64;
    b += panel(100, y, 770, hgt) + badge(56, y + hgt / 2, 24, String(i + 1), i === 1 ? C.mustard : C.cream);
    b += t(124, y + 38, h, { size: 20, weight: 700 });
    if (d) b += t(124, y + 68, d, { size: 16, fill: C.muted });
    if (d === null) {
      [['U', 'useful point', C.cream, C.olive], ['D', 'could develop', C.tealLight, C.tealDark], ['E', 'needs evaluating', PINK, C.rust]].forEach(([k, s, f, e], j) => {
        const x = 124 + j * 245;
        b += box(x, y + 58, 52, 52, f, e, 8) + t(x + 26, y + 92, k, { size: 24, weight: 700, anchor: 'middle', fill: e }) + t(x + 64, y + 90, s, { size: 17, weight: 600 });
      });
      b += t(124, y + 136, 'E = bias, weak evidence, conflict', { size: 16, fill: C.muted });
    }
    if (i < 4) b += `<line x1="56" y1="${y + hgt / 2 + 26}" x2="56" y2="${y + hgt + 12 + (steps[i + 1][1] === null ? 75 : steps[i + 1][1] ? 46 : 32) - 26}" stroke="${C.ink}" stroke-width="3"/>`;
    y += hgt + 12;
  });
  add('06-ten-minute-plan',
    svg(900, y + 14, 'Planning in ten minutes', b),
    'Five planning steps: read the question for form, audience, purpose and bullet points; read the sources twice, marking U for useful points, D for points to develop and E for points needing evaluation; decide a position; plan four or five paragraphs; plan the opening and closing.',
    'Annotate the sources U, D and E so every paragraph has something to develop or judge.',
    '## Planning in ten minutes');
}

// 07 Worked example map
{
  let b = '';
  const src = (x, h, pts, f, e) => {
    let s = box(x, 110, 330, 250, f, e) + t(x + 20, 142, h, { size: 18, weight: 700, fill: e });
    pts.forEach((p, i) => { s += para(x + 20, 174 + i * 60, '• ' + p, 33, { size: 15 }, 19); });
    return s;
  };
  b += src(30, 'Text 1: council leaflet', ['Closing Market Street on Saturdays: safer, cleaner', 'Similar schemes “popular” with families', 'Park on the edge of town; free shuttle bus'], C.tealLight, C.tealDark);
  b += src(540, 'Text 2: shopkeeper’s letter', ['“This plan will kill small businesses”', 'Elderly customers will not wait for shuttle buses', 'Council has not asked a single shopkeeper'], C.cream, C.olive);
  b += box(370, 160, 160, 150, C.panel, C.ink) + t(450, 196, 'Task', { size: 18, weight: 700, anchor: 'middle' });
  b += tl(450, 224, ['a letter to the', 'council giving', 'your views', '250–350 words'], { size: 15, anchor: 'middle' }, 20);
  const moves = [
    ['USE', 'A car-free street would be safer, especially for families.', 'point from Text 1', C.cream, C.olive],
    ['EVALUATE', '“Popular” is vague: popular with whom, and for how long?', 'weak evidence in Text 1', PINK, C.rust],
    ['EVALUATE', 'The shopkeeper’s concern deserves more weight than the leaflet gives it.', 'Text 2 treated as fair', PINK, C.rust],
    ['DEVELOP', 'Elderly shoppers who find the bus difficult could leave the street empty of the customers small shops rely on.', 'a consequence', C.tealLight, C.tealDark],
    ['DEVELOP', 'Consult traders first; try alternate Saturdays so the effect on trade is measured.', 'a solution neither text offered', C.tealLight, C.tealDark],
  ];
  b += t(450, 398, 'Moves in the model paragraph', { size: 20, weight: 700, anchor: 'middle' });
  moves.forEach(([k, s, n, f, e], i) => {
    const y = 418 + i * 84;
    b += panel(30, y, 840, 72) + box(30, y, 150, 72, f, e, 14) + t(105, y + 42, k, { size: 17, weight: 700, anchor: 'middle', fill: e });
    b += para(200, y + 30, s, 62, { size: 16 }, 20);
    b += t(850, y + 60, n, { size: 15, anchor: 'end', fill: C.muted, italic: true });
  });
  b += box(30, 846, 840, 58, C.cream, C.olive) + t(450, 882, 'The proposal is the candidate’s own, but it grows from the conflict between sources.', { size: 17, weight: 700, anchor: 'middle' });
  add('07-worked-example-moves',
    svg(900, 928, 'Worked example: Market Street', b),
    'Points from a council leaflet and a shopkeeper’s letter feed a letter to the council. The model paragraph uses the safety point, evaluates the vague claim that schemes were “popular” and the shopkeeper’s complaint, then develops a consequence and a solution: consult traders and trial alternate Saturdays.',
    'Development grows from the sources’ conflict, which is what makes it development rather than invention.',
    '## Worked example');
}
