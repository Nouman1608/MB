import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-design-global-contexts-and-design-situations';
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

// 01 Concepts explored through contexts
{
  let b = panel(30, 110, 410, 200) + t(55, 146, 'Key concepts', { size: 20, weight: 700 }) + t(55, 170, 'frame the curriculum (brief’s examples)', { size: 15, fill: C.muted });
  ['communication', 'communities', 'development', 'systems'].forEach((c, i) => { b += chip(55 + (i % 2) * 185, 190 + Math.floor(i / 2) * 56, 170, 44, c, C.tealLight, { size: 16, weight: 600 }); });
  b += panel(460, 110, 410, 200) + t(485, 146, 'Related concepts', { size: 20, weight: 700 }) + t(485, 170, 'ground it in design (brief’s examples)', { size: 15, fill: C.muted });
  ['adaptation', 'ergonomics', 'sustainability', 'innovation'].forEach((c, i) => { b += chip(485 + (i % 2) * 185, 190 + Math.floor(i / 2) * 56, 170, 44, c, C.cream, { size: 16, weight: 600 }); });
  b += arrow(235, 314, 380, 352, { w: 3 }) + arrow(665, 314, 520, 352, { w: 3 });
  b += t(450, 345, 'explored through', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  b += panel(30, 360, 840, 250, '#eaf3f1', C.tealDark) + t(450, 396, 'Six global contexts', { size: 21, weight: 700, anchor: 'middle', fill: C.tealDark });
  GC.forEach((g, i) => { const x = 55 + (i % 2) * 400, y = 416 + Math.floor(i / 2) * 62; b += box(x, y, 390, 50, C.panel, C.tealDark, 2, 10) + badge(x + 28, y + 25, 16, String(i + 1), C.mustard) + t(x + 56, y + 31, g, { size: 17, weight: 600 }); });
  b += panel(30, 630, 840, 76, C.cream, C.olive) + t(450, 664, 'The context is a lens, not a cover-page label: it picks the problem,', { size: 17, weight: 700, anchor: 'middle' }) + t(450, 688, 'who you research, and what success means when you test.', { size: 17, weight: 700, anchor: 'middle' });
  add('01-concepts-and-contexts',
    svg(900, 730, 'Concepts explored through global contexts', b),
    'Key concepts (examples: communication, communities, development, systems) and related concepts (examples: adaptation, ergonomics, sustainability, innovation) are explored through six global contexts: identities and relationships; orientation in space and time; personal and cultural expression; scientific and technical innovation; globalization and sustainability; fairness and development.',
    'The global context decides the problem, the research and the tests.',
    '## What the brief says');
}

// 02 Six contexts as lenses
{
  const qs = [
    ['Who is the user? How does it affect how', 'they see themselves or connect?'],
    ['How do people move through a place', 'or process? How has the need changed?'],
    ['What does it say about its user or', 'community? Whose style does it carry?'],
    ['What technology or material could', 'solve this better than now?'],
    ['What does it use and waste across its', 'life? Who else in the world is affected?'],
    ['Who is excluded by current solutions?', 'Who can afford or access it?'],
  ];
  const ev = ['interviews, user profiles', 'route maps, timings, history', 'product aesthetics, feedback', 'materials and software research', 'sources, energy, waste data', 'accessibility tests, cost comparisons'];
  let b = '';
  GC.forEach((g, i) => {
    const x = 30 + (i % 2) * 425, y = 110 + Math.floor(i / 2) * 196, w = 415;
    b += panel(x, y, w, 182, i % 2 ? C.panel : C.panel, C.panelEdge) + badge(x + 32, y + 34, 18, String(i + 1), i % 2 ? C.cream : C.mustard);
    b += t(x + 62, y + 41, g, { size: 18, weight: 700 });
    b += tl(x + 22, y + 82, qs[i], { size: 16 }, 22);
    b += `<line x1="${x + 22}" y1="${y + 128}" x2="${x + w - 22}" y2="${y + 128}" stroke="${C.panelEdge}" stroke-width="2"/>`;
    b += t(x + 22, y + 156, 'evidence: ' + ev[i], { size: 15, fill: C.tealDark, weight: 600 });
  });
  b += t(450, 720, 'Marlbridge’s plain-English summary; the brief lists the contexts but does not define them.', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  add('02-six-contexts-as-lenses',
    svg(900, 745, 'Six global contexts as design lenses', b),
    'Six cards, one per global context, each with the questions it raises in a design project and the evidence it calls for: for example, scientific and technical innovation asks what technology or material could solve the problem better and needs materials or software research; fairness and development asks who is excluded and needs accessibility testing and cost comparisons.',
    'Each context raises different questions and needs different evidence.',
    '## The six contexts as design lenses');
}

// 03 Concept or context? Naming traps
{
  const pairs = [['sustainability', 'related concept', 'Globalization and sustainability'], ['innovation', 'related concept', 'Scientific and technical innovation'], ['development', 'key concept', 'Fairness and development']];
  let b = t(250, 135, 'Concept', { size: 20, weight: 700, anchor: 'middle', fill: C.olive }) + t(660, 135, 'Global context', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
  pairs.forEach(([c, k, g], i) => {
    const y = 155 + i * 110;
    b += box(100, y, 300, 86, C.cream, C.olive, 2.5, 12) + t(250, y + 40, c, { size: 20, weight: 700, anchor: 'middle' }) + t(250, y + 66, k + ' example', { size: 15, anchor: 'middle', fill: C.muted });
    b += t(452, y + 52, '≠', { size: 32, weight: 700, anchor: 'middle', fill: C.rust });
    b += box(500, y, 320, 86, '#eaf3f1', C.tealDark, 2.5, 12) + tl(660, y + (wrap(g, 22).length > 1 ? 38 : 50), wrap(g, 22), { size: 18, weight: 700, anchor: 'middle' }, 24);
  });
  b += panel(30, 500, 840, 70, C.cream, C.olive) + t(450, 542, 'When you write about your project, say which one you mean.', { size: 18, weight: 700, anchor: 'middle' });
  add('03-concept-or-context',
    svg(900, 595, 'Concept or context? Three naming traps', b),
    'Three pairs that are easy to confuse: sustainability (a related concept example) is not the global context globalization and sustainability; innovation (a related concept example) is not scientific and technical innovation; development (a key concept example) is not fairness and development.',
    'A shared word does not make a concept and a context the same thing.',
    '## The six contexts as design lenses');
}

// 04 Problem statement pattern
{
  const parts = [
    ['Who', 'client or target audience', 'Students at Kestrel Hill School', C.mustard],
    ['Need', 'a way to do what they cannot do well now', 'need a way to get their lunch faster,', C.teal],
    ['Evidence', 'why it is real', 'because 45% of 120 students surveyed named queue time as the biggest problem,', C.tealLight],
    ['Constraints', 'limits already known', 'within a budget the school sets and without extra staff.', C.cream],
  ];
  let b = panel(30, 110, 410, 120, C.cream, C.olive) + t(52, 146, 'Design situation', { size: 19, weight: 700, fill: C.olive }) + tl(52, 176, ['open and wide: a setting and a', 'difficulty, not what to make'], { size: 16 }, 22);
  b += arrow(445, 170, 485, 170, { w: 4 });
  b += panel(490, 110, 380, 120, '#eaf3f1', C.tealDark) + t(512, 146, 'Problem statement', { size: 19, weight: 700, fill: C.tealDark }) + tl(512, 176, ['narrow: one need, with evidence;', 'never names the solution'], { size: 16 }, 22);
  parts.forEach(([h, d, ex, f], i) => {
    const y = 255 + i * 104;
    b += box(30, y, 230, 90, f, C.ink, 2.5, 12) + t(145, y + 40, h, { size: 20, weight: 700, anchor: 'middle' }) + t(145, y + 66, d.length > 26 ? 'what they cannot do well' : d, { size: 14.5, anchor: 'middle' });
    b += box(275, y, 595, 90, C.panel, C.panelEdge, 2.2, 12) + tl(297, y + (wrap(ex, 56).length > 1 ? 38 : 52), wrap(ex, 56), { size: 17, italic: true }, 24);
  });
  b += lowTop(30, 680, 840, 96, 'low', 'Not a problem statement', ['“Design an app for the canteen.” It names the solution and skips inquiry.']);
  add('04-problem-statement-pattern',
    svg(900, 800, 'From design situation to problem statement', b),
    'An open design situation is narrowed to a problem statement with four parts: who (students at Kestrel Hill School), the need (a way to get lunch faster), the evidence (45% of 120 students named queue time) and constraints (a school budget, no extra staff). “Design an app for the canteen” is not a problem statement because it names the solution.',
    'Who, need, evidence, constraints: and no solution yet.',
    '## From design situation to problem statement');
}

// 05 Survey evidence
{
  const rows = [['Queue time', 54, 45, 'Scientific and technical innovation'], ['Food waste', 30, 25, 'Globalization and sustainability'], ['Nowhere to sit with friends', 24, 20, 'Identities and relationships'], ['Menu does not reflect my food', 12, 10, 'Personal and cultural expression']];
  let b = panel(30, 110, 840, 400) + t(55, 146, 'Biggest lunchtime problem (120 students surveyed)', { size: 19, weight: 700 });
  const x0 = 300, k = 10;
  rows.forEach(([n, c, p, g], i) => {
    const y = 170 + i * 82;
    b += tl(285, y + 26, wrap(n, 18), { size: 16, weight: 600, anchor: 'end' }, 20);
    b += `<rect x="${x0}" y="${y + 6}" width="${p * k}" height="36" rx="4" fill="${i === 0 ? C.mustard : C.teal}" stroke="${C.ink}" stroke-width="2"/>`;
    b += t(x0 + p * k + 10, y + 31, `${c} (${p}%)`, { size: 17, weight: 700 });
    b += t(x0, y + 64, '→ ' + g, { size: 15, fill: C.tealDark, weight: 600 });
  });
  b += t(450, 495, 'percentage = students ÷ 120 × 100, e.g. 54 ÷ 120 × 100 = 45%', { size: 16, anchor: 'middle', fill: C.muted });
  b += panel(30, 530, 840, 90, C.cream, C.olive) + t(55, 566, 'Choice: queue time is the top complaint,', { size: 18, weight: 700 }) +
    t(55, 594, 'so the main lens is Scientific and technical innovation.', { size: 18, weight: 700 });
  add('05-canteen-survey-evidence',
    svg(900, 645, 'Kestrel Hill canteen: the first evidence', b),
    'Bar chart of a survey of 120 students: queue time 54 (45%), food waste 30 (25%), nowhere to sit with friends 24 (20%), menu does not reflect my food 12 (10%). Each problem points to a context; queue time, the top complaint, leads to scientific and technical innovation.',
    'Let the evidence point to the context that drives the need.',
    '## From design situation to problem statement');
}

// 06 One situation, six lenses
{
  const probs = [
    ['Identities and relationships', 'friends split up by queue and seating'],
    ['Orientation in space and time', 'queue and exit cross at one door in a 40-minute break'],
    ['Personal and cultural expression', 'food cultures missing from the menu display'],
    ['Scientific and technical innovation', 'slow ordering: the top complaint'],
    ['Globalization and sustainability', 'plate waste'],
    ['Fairness and development', 'counter too high for wheelchair users'],
  ];
  const cx = 450, cy = 420;
  let b = '';
  // layout: three left, three right; centre situation
  probs.forEach(([g, p], i) => {
    const left = i % 2 === 0, row = Math.floor(i / 2);
    const x = left ? 30 : 590, y = 120 + row * 200, w = 280;
    const hi = i === 3, nw = i === 5;
    b += panel(x, y, w, 170, hi ? C.cream : nw ? '#fbeee6' : C.panel, hi ? C.olive : nw ? C.rust : C.panelEdge);
    b += tl(x + 18, y + 34, wrap(g, 24), { size: 17, weight: 700, fill: hi ? C.olive : C.tealDark }, 22);
    b += tl(x + 18, y + 90, wrap(p, 27), { size: 16 }, 22);
    const ax = left ? x + w + 4 : x - 4, ay = y + 85;
    b += `<line x1="${left ? cx - 130 : cx + 130}" y1="${cy + (row - 1) * 60}" x2="${ax}" y2="${ay}" stroke="${hi ? C.olive : C.muted}" stroke-width="${hi ? 4 : 2.5}"/>`;
  });
  b += box(cx - 130, cy - 120, 260, 240, C.tealLight, C.ink, 2.5, 18) + t(cx, cy - 78, 'Design situation', { size: 18, weight: 700, anchor: 'middle' }) +
    tl(cx, cy - 40, ['Kestrel Hill canteen:', 'crowded at lunch, long', 'queues, food thrown', 'away, lunch the worst', 'part of the day'], { size: 16, anchor: 'middle' }, 22);
  b += t(450, 745, 'Chosen lens highlighted. The access problem needs new evidence: the survey never asked about it.', { size: 15.5, anchor: 'middle', fill: C.rust, weight: 600 });
  add('06-one-situation-six-lenses',
    svg(900, 770, 'One situation, six different problems', b),
    'The crowded Kestrel Hill canteen sits in the centre, with six global contexts around it, each picking out a different problem: friends split up, crossing routes at one door, missing food cultures on the menu, slow ordering (the chosen lens), plate waste, and a counter too high for wheelchair users, which needs new evidence.',
    'Change the lens and you change the problem; a context can send you back for new evidence.',
    '## From design situation to problem statement');
}

// 07 Four checks for choosing a context
{
  const checks = [
    ['Does it change who I research?', 'e.g. excluded users, or groups of friends rather than individuals'],
    ['Does it change what I will test?', 'if not, it is a label, not a lens'],
    ['Can I get the evidence in time?', 'full life-cycle data for imported parts may be too big: narrow it'],
    ['Is it at the heart of the need?', 'pick what the evidence points to, not a context added at the end'],
  ];
  let b = '';
  checks.forEach(([q, d], i) => {
    const y = 110 + i * 104;
    b += panel(30, y, 840, 90) + `<rect x="54" y="${y + 25}" width="40" height="40" rx="8" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + t(74, y + 55, '✓', { size: 26, weight: 700, anchor: 'middle', fill: C.tealDark });
    b += t(118, y + 40, q, { size: 20, weight: 700 }) + t(118, y + 68, d, { size: 16, fill: C.muted });
  });
  b += panel(30, 530, 410, 100, '#eaf3f1', C.tealDark) + t(52, 566, '✓ Two contexts fit?', { size: 19, weight: 700, fill: C.tealDark }) + tl(52, 594, ['one main lens; mention', 'the other briefly'], { size: 16 }, 22);
  b += lowTop(460, 530, 410, 100, 'low', 'All six at once', ['spreads research too thin']);
  add('07-choosing-a-context',
    svg(900, 655, 'Four checks for a context that does real work', b),
    'Four checks for choosing a global context: does it change who you research, does it change what you will test, can you get the evidence in the time available, and is it at the heart of the need? If two fit, choose one main lens; trying to serve all six spreads research too thin.',
    'A context earns its place by changing your research and your tests.',
    '## Choosing a context that does real work');
}

// 08 Same canteen, different research and tests
{
  let b = panel(30, 110, 410, 520, '#eaf3f1', C.tealDark) + t(235, 146, 'Scientific and', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(235, 170, 'technical innovation', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += panel(460, 110, 410, 520, C.cream, C.olive) + t(665, 146, 'Fairness and development /', { size: 19, weight: 700, anchor: 'middle', fill: C.olive }) + t(665, 170, 'Globalization and sustainability', { size: 19, weight: 700, anchor: 'middle', fill: C.olive });
  const lab = (x, y, s) => t(x, y, s, { size: 15, weight: 700, fill: C.muted });
  b += lab(55, 210, 'RESEARCH QUESTIONS');
  b += tl(55, 238, ['• ordering technologies elsewhere and', '  time per student (secondary)', '• time each queue stage: choose, pay,', '  collect; 30 students (primary)', '• what can technology change within', '  budget? (canteen manager interview)'], { size: 16 }, 22);
  b += lab(485, 210, 'RESEARCH QUESTIONS');
  b += tl(485, 238, ['• what counter height suits a', '  wheelchair user?', '• who cannot use a phone-based', '  system?'], { size: 16 }, 22);
  b += `<line x1="55" y1="390" x2="415" y2="390" stroke="${C.tealDark}" stroke-width="2"/><line x1="485" y1="390" x2="845" y2="390" stroke="${C.olive}" stroke-width="2"/>`;
  b += lab(55, 420, 'SUCCESS CRITERION AND TEST');
  b += tl(55, 448, ['At least 90% of 30 testers served', 'within 4 minutes (= 27 testers)'], { size: 16, weight: 600 }, 22);
  b += box(55, 500, 360, 110, C.panel, C.tealDark) + t(235, 532, 'average wait 11 → 7 min', { size: 17, weight: 700, anchor: 'middle' }) + t(235, 562, '4 ÷ 11 × 100 = 36.4% shorter', { size: 17, anchor: 'middle', fill: C.tealDark, weight: 600 }) + t(235, 590, 'report target and result', { size: 15, anchor: 'middle', fill: C.muted });
  b += lab(485, 420, 'SUCCESS CRITERION AND TEST');
  b += tl(485, 448, ['Globalization and sustainability:', 'measure plate waste before and after,', 'not waiting time'], { size: 16, weight: 600 }, 22);
  b += box(485, 530, 360, 80, C.panel, C.olive) + tl(665, 563, ['same situation, different context,', 'different test'], { size: 17, weight: 700, anchor: 'middle' }, 22);
  add('08-context-shapes-research-and-tests',
    svg(900, 655, 'The context decides the questions and the tests', b),
    'For the canteen under scientific and technical innovation, research times each queue stage and studies ordering technologies, and the test is whether 90% of 30 testers (27) are served within 4 minutes; a fall in average wait from 11 to 7 minutes is 36.4%. Under fairness and development the questions are about counter height and phone access; under globalization and sustainability the test measures plate waste.',
    'Same situation, different context: different research questions and different tests.',
    '## How the context shapes evaluation');
}
