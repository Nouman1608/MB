import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-design-key-and-related-concepts';
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

// 01 Topic vs concept
{
  let b = panel(30, 110, 280, 300, C.cream, C.olive) + t(170, 150, 'Topic', { size: 22, weight: 700, anchor: 'middle', fill: C.olive }) + t(170, 176, 'one subject area', { size: 16, anchor: 'middle', fill: C.muted });
  b += chip(70, 230, 200, 70, '“Chairs”', C.panel, { size: 22 });
  b += t(170, 360, 'stays with one product', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  b += panel(330, 110, 540, 300, '#eaf3f1', C.tealDark) + t(600, 150, 'Concept', { size: 22, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(600, 176, 'applies across many topics', { size: 16, anchor: 'middle', fill: C.muted });
  b += chip(500, 200, 200, 60, 'Ergonomics', C.mustard, { size: 20 });
  const items = ['chairs', 'keyboards', 'door handles', 'phone apps'];
  items.forEach((s, i) => { const x = 352 + i * 128; b += arrow(600, 262, x + 58, 320, { w: 2.5, color: C.tealDark, marker: 'ahT' }) + chip(x, 326, 118, 46, s, C.panel, { size: 15, weight: 600, edge: C.tealDark }); });
  b += panel(30, 430, 840, 92, C.cream, C.olive) + t(450, 466, 'Concepts let you transfer what you learn in one project to the next,', { size: 17, weight: 700, anchor: 'middle' }) +
    t(450, 494, 'which is why the course asks factual, conceptual and debatable questions.', { size: 17, anchor: 'middle' });
  add('01-topic-vs-concept',
    svg(900, 548, 'A concept is not a topic', b),
    '“Chairs” is a topic tied to one kind of product. “Ergonomics” is a concept that applies to chairs, keyboards, door handles and phone apps alike, so what you learn transfers to the next project.',
    'Concepts travel between projects; topics do not.',
    '## Why MYP Design uses concepts');
}

// 02 Four key concepts
{
  const k = [
    ['Communication', 'exchange of information', ['the product communicates: a kettle light,', 'a loading bar, airport pictograms', 'the designer communicates: folder,', 'sketches, specification, client'], 'Ask: what must it tell the user, when, through which sense?'],
    ['Communities', 'groups sharing a place, need, interest or identity', ['a park seating area for older visitors,', 'parents with pushchairs and teenagers', 'a school app for students, staff, parents'], 'Ask: who is included and who is left out?'],
    ['Development', 'growth, progress or change over time', ['of a product over generations:', 'calls-only phone → pocket computer', 'of your own solution: sketch → model', '→ prototype, tested each round'], 'Show what changed and why.'],
    ['Systems', 'parts working together for a function', ['input → process → output,', 'often with feedback', 'websites and bike-sharing schemes'], 'One failed part can stop the whole thing.'],
  ];
  let b = '';
  k.forEach(([h, d, lines, ask], i) => {
    const x = 30 + (i % 2) * 425, y = 110 + Math.floor(i / 2) * 290, w = 415;
    b += panel(x, y, w, 274) + `<rect x="${x}" y="${y}" width="${w}" height="70" rx="14" fill="${i % 2 ? C.cream : C.tealLight}"/>` + `<rect x="${x}" y="${y + 50}" width="${w}" height="20" fill="${i % 2 ? C.cream : C.tealLight}"/>` + `<rect x="${x}" y="${y}" width="${w}" height="274" rx="14" fill="none" stroke="${C.panelEdge}" stroke-width="2.5"/>`;
    b += t(x + 22, y + 34, h, { size: 21, weight: 700 }) + t(x + 22, y + 58, d, { size: 15, fill: C.ink });
    b += tl(x + 22, y + 100, lines, { size: 16 }, 23);
    b += t(x + 22, y + 252, ask, { size: 15, weight: 700, fill: C.tealDark });
  });
  add('02-four-key-concepts',
    svg(900, 700, 'The four key concepts in design', b),
    'Four cards. Communication: the product communicates with its user and the designer communicates through the folder. Communities: design for groups and ask who is left out. Development: a product changes over generations, and your own solution develops from sketch to prototype. Systems: parts work together as input, process and output, often with feedback.',
    'Each key concept prompts a different question about a design.',
    '## The four key concepts');
}

// 03 Systems: input-process-output with feedback
{
  const st = [['Input', 'soil moisture', 'sensor reading', C.tealLight], ['Process', 'microcontroller compares', 'with a set level', C.mustard], ['Output', 'valve opens,', 'water flows', C.teal]];
  let b = '';
  st.forEach(([h, a, c, f], i) => {
    const x = 40 + i * 290, w = 240;
    b += box(x, 160, w, 150, f, C.ink, 2.5, 14) + t(x + w / 2, 205, h, { size: 24, weight: 700, anchor: 'middle' }) + t(x + w / 2, 245, a, { size: 17, anchor: 'middle' }) + t(x + w / 2, 270, c, { size: 17, anchor: 'middle' });
    if (i < 2) b += arrow(x + w + 4, 235, x + 286, 235, { w: 4.5 });
  });
  b += path('M740,312 L740,390 L160,390 L160,316', { stroke: C.olive, w: 4, extra: 'stroke-dasharray="12 8" marker-end="url(#ahO)"' });
  b += box(260, 362, 380, 56, C.cream, C.olive, 2.5, 10) + t(450, 397, 'Feedback: reading rises, valve closes', { size: 18, weight: 700, anchor: 'middle' });
  b += t(450, 135, 'A plant-watering system for a school garden', { size: 18, weight: 600, anchor: 'middle', fill: C.muted });
  b += panel(30, 450, 840, 90, '#fbeee6', C.rust) + t(55, 486, 'Systems thinking', { size: 18, weight: 700, fill: C.rust }) +
    t(55, 516, 'one failed part, such as a flat sensor battery, stops the whole system', { size: 17 });
  add('03-systems-watering',
    svg(900, 565, 'Systems: input, process, output, feedback', b),
    'A plant-watering system: the input is a soil moisture sensor reading, a microcontroller compares it with a set level, and the output opens a valve so water flows. Feedback: as the reading rises the valve closes. A flat sensor battery would stop the whole system.',
    'Describe a system as input, process and output, then trace the feedback.',
    '## The four key concepts');
}

// 04 Percentiles: clearance and reach
{
  const x0 = 100, x1 = 800, base = 400, top = 170;
  const N = (u) => Math.exp(-u * u / 2);
  let d = `M${x0},${base}`;
  for (let i = 0; i <= 100; i++) { const u = -3 + (6 * i) / 100; d += ` L${x0 + ((x1 - x0) * i) / 100},${base - (base - top) * N(u)}`; }
  const X = (u) => x0 + ((u + 3) / 6) * (x1 - x0);
  const u5 = -1.645, u95 = 1.645;
  let fill = `M${X(u5)},${base}`;
  for (let i = 0; i <= 60; i++) { const u = u5 + ((u95 - u5) * i) / 60; fill += ` L${X(u)},${base - (base - top) * N(u)}`; }
  fill += ` L${X(u95)},${base} Z`;
  let b = panel(30, 110, 840, 360);
  b += `<path d="${fill}" fill="${C.tealLight}"/>` + path(d, { w: 3 });
  b += `<line x1="${x0 - 20}" y1="${base}" x2="${x1 + 20}" y2="${base}" stroke="${C.ink}" stroke-width="2.5"/>`;
  [[u5, '5th percentile', C.olive], [u95, '95th percentile', C.rust]].forEach(([u, l, c]) => {
    b += `<line x1="${X(u)}" y1="${top - 20}" x2="${X(u)}" y2="${base}" stroke="${c}" stroke-width="3" stroke-dasharray="8 6"/>` + t(X(u), top - 30, l, { size: 17, weight: 700, anchor: 'middle', fill: c });
  });
  b += t(450, 330, 'middle 90% of users', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += t(450, 440, 'body measurement (e.g. hand breadth, reach)  →', { size: 16, anchor: 'middle', fill: C.muted });
  b += t(X(u5) - 30, 380, '5% at or below', { size: 15, anchor: 'end', fill: C.muted }) + t(X(u95) + 30, 380, '5% above', { size: 15, fill: C.muted });
  const cards = [['Reach', 'shelf, switch', 'design for the SMALL user: 5th', C.olive, '#fbf6e0'], ['Clearance', 'doorway, handle opening', 'design for the LARGE user: 95th', C.rust, '#fbeee6'], ['Adjustable', 'office chair', 'cover the full 5th–95th range', C.tealDark, '#eaf3f1']];
  cards.forEach(([h, e, r, c, f], i) => {
    const x = 30 + i * 285;
    b += panel(x, 490, 270, 130, f, c) + t(x + 20, 526, h, { size: 20, weight: 700, fill: c }) + t(x + 20, 552, e, { size: 15, fill: C.muted }) + tl(x + 20, 584, wrap(r, 26), { size: 16, weight: 600 }, 21);
  });
  b += lowTop(30, 640, 840, 80, 'low', 'Designing for the 50th percentile fits almost no one well', []);
  add('04-percentiles-reach-clearance',
    svg(900, 745, 'Anthropometric data: which percentile?', b),
    'A bell-shaped distribution of a body measurement with the 5th and 95th percentiles marked and the middle 90% of users shaded. Reach problems such as a shelf use the 5th percentile, clearance problems such as a doorway use the 95th, and adjustable products cover the full range. Designing for the 50th percentile fits almost no one well.',
    'Reach: design for the small user. Clearance: design for the large user.',
    '## The four related concepts');
}

// 05 Stool and handle worked example
{
  let b = panel(30, 110, 520, 470);
  // stool side view
  const fl = 520;
  b += `<line x1="60" y1="${fl}" x2="520" y2="${fl}" stroke="${C.ink}" stroke-width="3"/>`;
  b += box(150, 300, 200, 22, C.rock, C.ink, 2.5, 4) + box(176, 322, 18, fl - 322, C.rockDark, C.ink, 2, 2) + box(306, 322, 18, fl - 322, C.rockDark, C.ink, 2, 2);
  b += box(150, 230, 200, 22, C.rock, C.ink, 2, 4).replace('fill="' + C.rock + '"', 'fill="none" stroke-dasharray="8 6"');
  b += path(`M400,${fl} L400,324`, { w: 2.5, stroke: C.olive, extra: 'marker-end="url(#ahO)" marker-start="url(#ahO)"' }) + t(412, 420, '405 mm', { size: 18, weight: 700, fill: C.olive }) + t(412, 444, 'lowest', { size: 15, fill: C.muted });
  b += path(`M470,${fl} L470,254`, { w: 2.5, stroke: C.rust, extra: 'marker-end="url(#ahR)" marker-start="url(#ahR)"' }) + t(470, 244, '485 mm highest', { size: 17, weight: 700, fill: C.rust, anchor: 'middle' });
  b += path('M250,252 L250,298', { w: 2.5, extra: 'marker-end="url(#ah)" marker-start="url(#ah)"' }) + t(262, 282, '80 mm travel', { size: 16, weight: 700 });
  b += t(55, 146, 'Adjustable stool (students 14–16)', { size: 19, weight: 700 });
  b += t(55, 556, 'drawing not to scale', { size: 15, fill: C.muted, italic: true });
  b += panel(570, 110, 300, 470, '#eaf3f1', C.tealDark) + t(590, 146, 'Popliteal height', { size: 18, weight: 700, fill: C.tealDark }) +
    tl(590, 178, ['5th: 380 mm', '95th: 460 mm', 'shoes: + 25 mm'], { size: 17 }, 25) +
    `<line x1="590" y1="262" x2="850" y2="262" stroke="${C.tealDark}" stroke-width="2"/>` +
    tl(590, 292, ['380 + 25 = 405 mm', '460 + 25 = 485 mm', '485 − 405 = 80 mm'], { size: 17, weight: 700 }, 27) +
    tl(590, 390, ['fits the middle 90%', 'of that group'], { size: 16, fill: C.muted }, 22);
  b += box(590, 450, 260, 112, C.panel, C.olive) + t(605, 478, 'Handle (clearance):', { size: 16, weight: 700, fill: C.olive }) + t(605, 504, '95th hand breadth 88 mm', { size: 15 }) + t(605, 528, '+ 10 mm allowance', { size: 15 }) + t(605, 552, '= 98 mm grip length', { size: 16, weight: 700 });
  add('05-stool-worked-example',
    svg(900, 605, 'Worked example: sizing from percentiles', b),
    'An adjustable stool set from fictional popliteal heights of 380 mm (5th percentile) and 460 mm (95th), plus 25 mm for shoes: it adjusts from 405 mm to 485 mm, a travel of 80 mm. A handle is a clearance problem: the 95th-percentile hand breadth of 88 mm plus a 10 mm allowance gives a 98 mm grip.',
    'Add allowances to the percentile values to turn body data into design sizes.',
    '## The four related concepts');
}

// 06 Related concepts: adaptation and innovation
{
  let b = panel(30, 110, 840, 230) + t(55, 148, 'Adaptation', { size: 21, weight: 700 }) + t(200, 148, 'name the original, the new need and the change', { size: 16, fill: C.muted });
  const ad = [['plant burrs cling to fur', 'a fastening', 'hook-and-loop'], ['standard cutlery', 'limited grip', 'thick, soft handles'], ['desktop website', 'small screen', 'layout rearranges']];
  ['Original', 'New need or use', 'Change'].forEach((h, i) => { b += t(150 + i * 270, 184, h, { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark }); });
  ad.forEach((r, j) => {
    r.forEach((s, i) => { b += chip(50 + i * 270, 196 + j * 46, 200, 38, s, i === 2 ? C.cream : C.tealLight, { size: 15, weight: 600 }); if (i < 2) b += arrow(252 + i * 270, 215 + j * 46, 316 + i * 270, 215 + j * 46, { w: 2.5 }); });
  });
  b += panel(30, 360, 840, 330) + t(55, 398, 'Invention or innovation?', { size: 21, weight: 700 });
  b += box(55, 420, 250, 150, '#e6e8ea', C.muted, 2.2, 12) + t(180, 456, 'Invention', { size: 19, weight: 700, anchor: 'middle' }) + tl(180, 486, ['creating something', 'new that may never', 'be adopted'], { size: 16, anchor: 'middle', fill: C.muted }, 21);
  b += arrow(310, 495, 350, 495, { w: 3.5 });
  b += box(355, 420, 490, 150, '#eaf3f1', C.tealDark, 2.5, 12) + t(600, 456, 'Innovation', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark }) + tl(600, 486, ['a new idea, or new combination of', 'ideas, put into successful use'], { size: 16, anchor: 'middle' }, 21);
  b += box(55, 590, 385, 84, C.cream, C.olive) + t(75, 620, 'Incremental', { size: 18, weight: 700 }) + t(75, 648, 'suitcase gains wheels and a handle', { size: 15 });
  b += box(460, 590, 385, 84, C.mustard, C.ink) + t(480, 620, 'Radical', { size: 18, weight: 700 }) + t(480, 648, 'touchscreens replace phone keypads', { size: 15 });
  b += t(450, 716, 'For innovation, say what was new, what it solved and why people adopted it.', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 });
  add('06-adaptation-and-innovation',
    svg(900, 740, 'Adaptation, invention and innovation', b),
    'Adaptation examples, each from original to new need to change: plant burrs to hook-and-loop fastening, standard cutlery to thick soft handles for limited grip, and a website rearranging for a small screen. Invention creates something new that may never be adopted; innovation puts a new idea into successful use, either incrementally (a suitcase gains wheels) or radically (touchscreens replace keypads).',
    'Adaptation reworks an existing design; innovation is a new idea that gets used.',
    '## The four related concepts');
}

// 07 Building a statement of inquiry
{
  const parts = [['Key concept', 'systems', C.mustard], ['Related concepts', 'ergonomics, sustainability', C.cream], ['Global context', 'globalization and sustainability', C.teal]];
  let b = t(450, 132, 'Unit: redesigning a school’s lunch-queue system', { size: 17, anchor: 'middle', fill: C.muted, weight: 600 });
  parts.forEach(([h, v, f], i) => {
    const x = 30 + i * 285;
    b += box(x, 150, 270, 96, f, C.ink, 2.5, 12) + t(x + 135, 186, h, { size: 16, weight: 700, anchor: 'middle' }) + tl(x + 135, 214, wrap(v, 22), { size: 17, anchor: 'middle' }, 21);
    if (i < 2) b += t(x + 277, 205, '+', { size: 24, weight: 700, anchor: 'middle', fill: C.muted });
    b += arrow(x + 135, 250, 450 + (i - 1) * 60, 290, { w: 2.5 });
  });
  b += lowTop(30, 300, 840, 92, 'low', 'Weak', ['“We will design a better lunch queue.”  No concept; not transferable.']);
  b += panel(30, 410, 840, 190, '#eaf3f1', C.tealDark) + t(52, 446, '✓ Stronger', { size: 19, weight: 700, fill: C.tealDark });
  b += tl(52, 480, ['“Systems designed around how people actually move and wait', 'use space, time and resources more efficiently.”'], { size: 19, italic: true }, 27);
  b += t(52, 568, 'systems ✓   ergonomics: how people move and wait ✓   sustainability: resources ✓', { size: 16, weight: 600, fill: C.tealDark });
  b += panel(30, 620, 840, 100, C.cream, C.olive) + t(55, 656, 'Checks', { size: 18, weight: 700 }) +
    t(55, 686, 'a statement, not a question · transfers (hospital waiting room, train station) ·', { size: 16 }) + t(55, 708, 'specific enough to guide research · names no product or brand', { size: 16 });
  add('07-statement-of-inquiry',
    svg(900, 745, 'Building a statement of inquiry', b),
    'For a lunch-queue unit, the key concept systems, related concepts ergonomics and sustainability, and the global context globalization and sustainability combine into a statement of inquiry. “We will design a better lunch queue” is weak; “Systems designed around how people actually move and wait use space, time and resources more efficiently” is stronger and transfers to other settings.',
    'One sentence that links the concepts and context and would hold for other products.',
    '## Statements of inquiry');
}

// 08 Inquiry question types
{
  const rows = [
    ['Factual', 'has a checkable answer', 'What is the 95th percentile of hand breadth for my users?', 'feeds the research plan (criterion A)', C.tealLight],
    ['Conceptual', 'how or why an idea works; links concepts', 'How does ergonomic data change who can use a product?', 'gives analysis depth', C.teal],
    ['Debatable', 'reasonable people disagree', 'Should a public bench be designed for comfort or to stop people lying down on it?', 'gives evaluation depth', C.mustard],
  ];
  let b = '';
  rows.forEach(([h, d, ex, use, f], i) => {
    const y = 110 + i * 150;
    b += box(30, y, 220, 134, f, C.ink, 2.5, 12) + t(140, y + 58, h, { size: 22, weight: 700, anchor: 'middle' }) + tl(140, y + 86, wrap(d, 20), { size: 15, anchor: 'middle' }, 19);
    b += panel(265, y, 605, 134) + tl(287, y + 40, wrap('“' + ex + '”', 58), { size: 17, italic: true }, 24) + t(287, y + 116, '→ ' + use, { size: 15, weight: 600, fill: C.tealDark });
  });
  b += panel(30, 570, 840, 130, C.cream, C.olive) + t(55, 606, 'Debatable test: could two well-informed people disagree, both with evidence?', { size: 17, weight: 700 }) +
    t(55, 640, '✗ “Is plastic bad?”  too vague', { size: 17, fill: C.rust, weight: 600 }) + t(55, 672, '✓ “Should single-use cutlery be banned from school canteens?”', { size: 17, fill: C.tealDark, weight: 600 });
  add('08-inquiry-question-types',
    svg(900, 725, 'Factual, conceptual and debatable questions', b),
    'Three question types for a seating unit: factual questions have a checkable answer, such as a 95th-percentile hand breadth; conceptual questions ask how ideas connect, such as how ergonomic data changes who can use a product; debatable questions invite disagreement, such as whether a public bench should prioritise comfort. A debatable question must be arguable both ways with evidence.',
    'Write two or three of each type: factual for research, conceptual and debatable for depth.',
    '## Inquiry questions');
}
