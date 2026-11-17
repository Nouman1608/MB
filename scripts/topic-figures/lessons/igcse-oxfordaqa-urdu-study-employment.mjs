import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-oxfordaqa-urdu-study-employment';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- local helpers (shared look across the OxfordAQA / Edexcel Urdu set) ----
const wrap = (s, n) => { const out = ['']; for (const w of s.split(' ')) { const c = out[out.length - 1]; if (c && (c + ' ' + w).length > n) out.push(w); else out[out.length - 1] = c ? c + ' ' + w : w; } return out; };
const wt = (x, y, s, n, opts = {}, lh) => tl(x, y, wrap(s, n), opts, lh || (opts.size || 18) * 1.3);
const box = (x, y, w, h, fill, edge, sw = 2.5, rx = 12) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;


// 01 Three themes: inward, outward, forward
{
  let b = '';
  const cards = [
    [30, 'Theme 1', 'Identity and Culture', 'looks inward', 'personal and family life', C.panel, C.panelEdge],
    [317, 'Theme 2', 'Local, National, International and Global Areas of Interest', 'looks outward', 'the wider world', C.panel, C.panelEdge],
    [604, 'Theme 3', 'Current and Future Study and Employment', 'looks forward', 'education and career', C.cream, C.olive],
  ];
  cards.forEach(([x, h, name, dir, what, fill, edge], i) => {
    b += box(x, 110, 266, 250, fill, edge, i === 2 ? 3 : 2.5, 14) + t(x + 20, 146, h, { size: 22, weight: 700 }) + wt(x + 20, 176, name, 25, { size: 17 }, 22);
    // direction icon
    const cy = 282, cx = x + 133;
    if (i === 0) b += `<circle cx="${cx}" cy="${cy}" r="10" fill="${C.ink}"/>` + arrow(cx - 60, cy, cx - 18, cy, { w: 3.5 }) + arrow(cx + 60, cy, cx + 18, cy, { w: 3.5 });
    if (i === 1) b += `<circle cx="${cx}" cy="${cy}" r="10" fill="${C.ink}"/>` + arrow(cx - 16, cy, cx - 60, cy, { w: 3.5 }) + arrow(cx + 16, cy, cx + 60, cy, { w: 3.5 });
    if (i === 2) b += `<circle cx="${cx - 50}" cy="${cy}" r="10" fill="${C.ink}"/>` + arrow(cx - 34, cy, cx + 60, cy, { w: 5, color: C.olive, marker: 'ahO' });
    b += t(cx, 322, dir, { size: 18, weight: 700, anchor: 'middle', fill: i === 2 ? C.olive : C.tealDark }) + t(cx, 344, what, { size: 16, anchor: 'middle', fill: C.muted });
  });
  b += arrow(163, 372, 380, 414) + arrow(450, 372, 450, 410) + arrow(737, 372, 520, 414);
  b += box(150, 420, 600, 120, C.tealLight, C.tealDark, 2.5, 14) + t(450, 456, 'Paper 1 (Reading, Grammar and Meaning)', { size: 19, weight: 700, anchor: 'middle' }) +
    t(450, 484, 'Paper 2 (Writing)', { size: 19, weight: 700, anchor: 'middle' }) + t(450, 518, 'each 1 hour 45 minutes, 70 marks, 50%', { size: 17, anchor: 'middle', fill: C.muted });
  b += t(450, 578, 'No separate paper for Theme 3, so it cannot be skipped', { size: 18, weight: 600, anchor: 'middle' });
  add('01-three-themes-direction',
    svg(900, 610, 'Theme 3 looks forward', b),
    'Theme 1 looks inward to personal life, Theme 2 outward to the wider world and Theme 3 forward to education and career. All three feed Paper 1 and Paper 2, each 1 hour 45 minutes, 70 marks and 50%.',
    'All three themes feed both papers, so Theme 3 cannot be left out.',
    '## Where this fits in 9264');
}

// 02 Theme 3 map with the studies / school-life distinction
{
  let b = box(200, 110, 500, 64, C.cream, C.olive, 3, 14) + t(450, 150, 'Theme 3: Study and Employment', { size: 22, weight: 700, anchor: 'middle' });
  const tops = [
    ['Topic 1', 'My studies', ['school subjects,', 'opinions on them,', 'the school day']],
    ['Topic 2', 'Life at school/college', ['facilities, rules,', 'routines, school', 'life more broadly']],
    ['Topic 3', 'Education post-16', ['further study', 'options and', 'qualifications']],
    ['Topic 4', 'Jobs, career choices and ambitions', ['part-time work,', 'aspirations,', 'future plans']],
  ];
  tops.forEach(([n, name, lines], i) => {
    const x = 30 + i * 214, w = 198, cx = x + w / 2;
    b += path(`M450,174 V198 H${cx} V222`, { w: 3 });
    const ns = wrap(name, 16);
    b += box(x, 226, w, 120, C.teal, C.tealDark, 2.5, 14) + t(x + 16, 256, n, { size: 18, weight: 700, fill: C.tealDark }) + tl(x + 16, 282, ns, { size: 18, weight: 600 }, 22);
    b += panel(x, 360, w, 106) + tl(x + 16, 392, lines, { size: 16, fill: C.muted }, 22);
  });
  // bracket topics 1 and 2
  b += path('M40,482 V498 H442 V482', { w: 3, stroke: C.rust }) + `<line x1="241" y1="498" x2="241" y2="518" stroke="${C.rust}" stroke-width="3"/>`;
  b += box(30, 522, 840, 90, '#f6ece4', C.rust, 2.5, 12) + t(54, 556, 'Keep these two apart', { size: 20, weight: 700, fill: C.rust }) +
    t(54, 586, 'My studies = subjects and opinions on them;  Life at school = facilities, routine, rules', { size: 17 });
  add('02-theme-3-map',
    svg(900, 640, 'Theme 3 at a glance', b),
    'Theme 3 has four topics: my studies, life at school or college, education post-16, and jobs, career choices and ambitions. My studies (subjects and opinions) and life at school (facilities, routine, rules) are flagged as two topics to keep separate.',
    'Four topics; do not confuse my studies with life at school.',
    '## Syllabus coverage');
}

// 03 Tense timeline for this theme
{
  const ty = 250;
  let b = `<line x1="60" y1="${ty}" x2="840" y2="${ty}" stroke="${C.ink}" stroke-width="3.5" marker-end="url(#ah)"/>`;
  const pts = [
    [135, 'Past', 'reflect on past', 'school experience', C.panel, C.panelEdge],
    [345, 'Present', 'describe current', 'studies', C.panel, C.panelEdge],
    [555, 'Future', 'state plans directly', 'I will study ...', C.cream, C.olive],
    [765, 'Conditional', 'tentative ambitions', 'I would like to become ...', C.cream, C.olive],
  ];
  pts.forEach(([x, h, a, c, fill, edge]) => {
    b += `<circle cx="${x}" cy="${ty}" r="12" fill="${fill === C.cream ? C.mustard : C.panel}" stroke="${C.ink}" stroke-width="3"/>` + t(x, ty - 28, h, { size: 21, weight: 700, anchor: 'middle' });
    b += box(x - 100, ty + 30, 200, 92, fill, edge, 2.5, 12) + t(x, ty + 64, a, { size: 16, anchor: 'middle' }) + t(x, ty + 90, c, { size: 15, anchor: 'middle', italic: true, fill: C.muted });
  });
  b += t(450, 140, 'The theme is about the future, so future and conditional forms are core', { size: 18, weight: 600, anchor: 'middle', fill: C.muted });
  b += box(30, 410, 840, 150, C.tealLight, C.tealDark, 2) + t(54, 446, 'Also expected', { size: 20, weight: 700 }) +
    t(54, 478, 'Opinion + justification: my favourite subject is ..., because ...', { size: 17 }) +
    t(54, 506, 'Comparatives: this subject is more useful than ...', { size: 17 }) +
    t(54, 534, 'Condition + result: if I passed my exams, I would ...', { size: 17 });
  add('03-tense-timeline',
    svg(900, 590, 'Time frames in Theme 3', b),
    'A timeline from past reflection on school, through present description of studies, to future plans (I will study) and conditional ambitions (I would like to become). Opinion with justification, comparatives and condition-result sentences are also expected.',
    'Move from present description to future plans within one response.',
    '## Structures that raise the grade');
}

// 04 Reading for two layers; justifying a choice
{
  let b = panel(30, 110, 840, 210) + t(54, 148, 'Reading: two layers in the same passage', { size: 21, weight: 700 });
  b += box(60, 172, 370, 124, C.panel, C.panelEdge, 2.5, 12) + t(84, 210, 'Stated fact', { size: 21, weight: 700, fill: C.tealDark }) + tl(84, 244, ['a specific subject or', 'job that is mentioned'], { size: 17 }, 23);
  b += box(470, 172, 370, 124, C.cream, C.olive, 2.5, 12) + t(494, 210, 'Opinion or aspiration', { size: 21, weight: 700, fill: C.olive }) + tl(494, 244, ['why they like a subject,', 'what they hope to do'], { size: 17 }, 23);
  b += panel(30, 340, 840, 220) + t(54, 378, 'Writing: justify a career choice, do not just name it', { size: 21, weight: 700 });
  [['Ambition', 'I would like to become ...'], ['Reason', 'because ...'], ['Personal link', 'an interest or skill of yours']].forEach(([h, s], i) => {
    const x = 60 + i * 270;
    b += box(x, 406, 240, 120, i === 0 ? C.panel : i === 1 ? C.tealLight : C.cream, i === 0 ? C.panelEdge : i === 1 ? C.tealDark : C.olive, 2.5, 12) +
      t(x + 120, 448, h, { size: 21, weight: 700, anchor: 'middle' }) + t(x + 120, 480, s, { size: 16, anchor: 'middle', italic: true, fill: C.muted });
    if (i < 2) b += arrow(x + 242, 466, x + 266, 466, { w: 3 });
  });
  add('04-fact-opinion-justify',
    svg(900, 590, 'Approaching the tasks', b),
    'In reading, separate stated facts (a subject or job mentioned) from opinions and aspirations (why someone likes a subject, what they hope to do). In writing, state an ambition, give a reason and link it to a personal interest or skill.',
    'Read for fact and opinion; in writing, justify every choice.',
    '## Approaching the tasks');
}

// 05 Worked example: studies and plans
{
  let b = t(450, 128, 'Task: your studies and your plans for after you finish school', { size: 17, italic: true, anchor: 'middle', fill: C.muted });
  b += box(30, 150, 840, 64, '#f6ece4', C.rust, 2.5, 12) + t(54, 190, 'Weak', { size: 21, weight: 700, fill: C.rust }) + t(140, 190, '"I study many subjects. I want a good job." No opinion, no reason, one tense', { size: 17 });
  const steps = [
    ['Subject + opinion + reason', 'present', 'my favourite subject is science because I find experiments interesting', C.panel, C.panelEdge],
    ['Post-16 plan', 'future', 'after school, I will continue my studies at college', C.panel, C.panelEdge],
    ['Justified ambition', 'would like to / because', 'I would like to become a doctor because I want to help people', C.cream, C.olive],
    ['Conditional reflection', 'if ... will', 'if I study hard, I will achieve my goal', C.tealLight, C.tealDark],
  ];
  b += t(54, 252, 'Strong', { size: 21, weight: 700, fill: C.tealDark });
  steps.forEach(([h, s, ex, fill, edge], i) => {
    const y = 270 + i * 104;
    b += box(110, y, 760, 82, fill, edge, 2.5, 12) + badge(62, y + 41, 24, String(i + 1), i === 2 ? C.mustard : C.cream) +
      t(134, y + 34, h, { size: 20, weight: 700 }) + t(848, y + 34, s, { size: 16, fill: C.muted, anchor: 'end' }) + t(134, y + 63, ex, { size: 17, italic: true });
    if (i < 3) b += arrow(62, y + 66, 62, y + 100, { w: 3 });
  });
  add('05-studies-and-plans-answer',
    svg(900, 710, 'Studies now, plans next', b),
    'A weak answer lists subjects and wants a good job. A strong answer gives a subject with an opinion and reason, a future post-16 plan, a career ambition with a reason and a conditional reflection.',
    'Justified opinion, concrete plan, justified ambition: the strongest structure here.',
    '## Worked example');
}
