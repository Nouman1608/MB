import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-language-acquisition-criterion-d-writing';
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

// 01 Decode the task
{
  let b = panel(30, 110, 840, 104, C.cream, C.olive) + t(55, 144, 'Task', { size: 16, weight: 700, fill: C.olive }) +
    tl(55, 172, ['Email your head of school proposing a school repair café for sustainability', 'week, using ideas from the Repair Café poster.'], { size: 17 }, 23);
  const q = [
    ['Purpose', 'persuade (propose with reasons) and request support', C.mustard],
    ['Audience', 'head of school, an adult in authority, so FORMAL register', C.teal],
    ['Text type', 'email: subject line, greeting, paragraphs, closing request, sign-off', C.tealLight],
    ['Stimulus', 'free repairs, volunteers, everyday objects, 40 items saved; hands stitching together; crossed-out bin', C.cream],
  ];
  q.forEach(([h, d, f], i) => {
    const y = 234 + i * 100;
    b += box(30, y, 200, 86, f, C.ink, 2.5, 12) + t(130, y + 50, h, { size: 20, weight: 700, anchor: 'middle' });
    b += box(244, y, 626, 86, C.panel, C.panelEdge, 2, 12) + tl(264, y + 36 - (wrap(d, 62).length - 2) * 11, wrap(d, 62), { size: 16 }, 22);
  });
  b += t(450, 660, 'You must add yourself: why it suits a school, and how it would run.', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('01-decode-the-task',
    svg(900, 685, 'Step 1: decode the task', b),
    'The repair café email task decoded with four questions: the purpose is to persuade and request support; the audience is the head of school, so the register is formal; the text type is an email with a subject line, greeting, paragraphs, request and sign-off; the stimulus gives free repairs, volunteers, everyday objects, 40 items saved and images of shared work and less waste.',
    'Purpose, audience, text type and stimulus decide everything you write next.',
    '## Step 1: decode the task');
}

// 02 Plan: one job per paragraph
{
  const rows = [
    ['Opening', 'state why you are writing', 'sustainability week; you have an idea'],
    ['1', 'explain the idea', 'what a repair café is; the Eastfield poster'],
    ['2', 'give reasons', 'less waste; practical skills; brings year groups and families together'],
    ['3', 'answer an objection', 'cost and safety: free volunteers, teachers supervise, nothing electrical'],
    ['Close', 'make the request', 'ask for a meeting or a trial date'],
  ];
  let b = box(150, 110, 600, 600, '#fff', C.ink, 2.5, 10) + `<rect x="150" y="110" width="600" height="44" rx="10" fill="${C.teal}"/>` + t(172, 139, 'Email plan: one job per paragraph', { size: 17, weight: 700 });
  rows.forEach(([n, job, c], i) => {
    const y = 172 + i * 104;
    const obj = i === 3;
    b += box(172, y, 556, 90, obj ? C.cream : C.panel, obj ? C.olive : C.panelEdge, 2, 10);
    b += chip(186, y + 22, 96, 46, n, i === 0 || i === 4 ? C.tealLight : C.mustard, { size: 16 });
    b += t(300, y + 38, job, { size: 18, weight: 700 }) + tl(300, y + 64, wrap(c, 46), { size: 15, fill: C.muted }, 18);
  });
  b += tl(762, 470, ['shows you', 'thought about', 'the reader'], { size: 15, weight: 700, fill: C.olive }, 19) + arrow(800, 530, 760, 560, { w: 2.5, color: C.olive, marker: 'ahO' });
  add('02-plan-one-job-per-paragraph',
    svg(900, 735, 'Step 2: plan one job per paragraph', b),
    'An email plan in five parts: an opening that states why you are writing, paragraph 1 explaining the idea, paragraph 2 giving reasons, paragraph 3 answering an objection about cost and safety, and a close that makes the request. Answering an objection shows awareness of the reader.',
    'Give every paragraph one job; answer the reader’s likely doubt.',
    '## Step 2: plan');
}

// 03 Cohesion: weak vs strong
{
  let b = lowTop(30, 110, 840, 130, 'low', 'Weak cohesion: a list of separate facts', ['The café would be free. Volunteers would help. Students would learn skills.', 'Families could come.'], 24);
  b += panel(30, 260, 840, 230, '#eaf3f1', C.tealDark) + t(52, 296, '✓ Stronger cohesion: same ideas, now linked', { size: 19, weight: 700, fill: C.tealDark });
  const hl = (s) => `<tspan font-weight="700" fill="${C.olive}">${s}</tspan>`;
  const lines = [
    `The café would be free, ${hl('because')} volunteers would do the repairs.`,
    `${hl('This')} would ${hl('also')} give students a chance to learn practical skills.`,
    `${hl('Furthermore')}, families could come along, ${hl('so')} the event would bring`,
    'the whole school community together.',
  ];
  lines.forEach((s, i) => { b += `<text x="52" y="${336 + i * 30}" font-size="18" fill="${C.ink}">${s}</text>`; });
  b += t(52, 470, 'highlighted: connectives and a reference word', { size: 15, fill: C.muted, italic: true });
  const fn = [['Adding', 'furthermore, also'], ['Contrasting', 'however'], ['Result', 'therefore'], ['Example', 'for example'], ['Sequencing', 'first, finally']];
  fn.forEach(([h, e], i) => {
    const x = 30 + i * 170, w = 160;
    b += box(x, 512, w, 84, i === 1 ? C.cream : C.panel, i === 1 ? C.olive : C.panelEdge, 2, 10) + t(x + w / 2, 544, h, { size: 16, weight: 700, anchor: 'middle' }) + t(x + w / 2, 572, e, { size: 15, anchor: 'middle', italic: true });
  });
  b += t(450, 628, 'A connective must match the logic: however introduces a contrast, not an extra point.', { size: 16, anchor: 'middle', weight: 600, fill: C.rust });
  add('03-cohesion',
    svg(900, 655, 'Step 3: linking ideas with cohesive devices', b),
    'Four short separate sentences about the café are rewritten with the same ideas linked by “because”, “this”, “also”, “furthermore” and “so”. Below, connectives grouped by function: adding, contrasting, result, example and sequencing. A connective must match the logic of the ideas it joins.',
    'Connectives and reference words show how ideas relate.',
    '## Step 3: organisation and cohesive devices');
}

// 04 Register scale
{
  let b = `<defs><linearGradient id="reg" x1="0" x2="1"><stop offset="0" stop-color="${C.cream}"/><stop offset="1" stop-color="${C.teal}"/></linearGradient></defs>`;
  b += `<rect x="40" y="130" width="820" height="30" rx="15" fill="url(#reg)" stroke="${C.ink}" stroke-width="2"/>` + t(56, 151, 'informal', { size: 16, weight: 700 }) + t(844, 151, 'formal', { size: 16, weight: 700, anchor: 'end' });
  const pts = [[170, 'Message to a friend', '“We should totally do a repair café at school – it’d be so fun!”'], [450, 'School newsletter', '“A repair café at school would be a fun and useful event.”'], [730, 'Email to the head', '“I would like to propose that the school hosts a repair café during sustainability week.”']];
  pts.forEach(([x, h, q], i) => {
    b += `<circle cx="${x}" cy="145" r="11" fill="${C.ink}"/>` + `<line x1="${x}" y1="156" x2="${x}" y2="180" stroke="${C.ink}" stroke-width="2.5"/>`;
    b += panel(x - 140, 182, 280, 150) + t(x, 214, h, { size: 17, weight: 700, anchor: 'middle' }) + tl(x, 244, wrap(q, 30), { size: 15.5, italic: true, anchor: 'middle' }, 21);
  });
  const rows = [['Greeting / sign-off', '“Hi Sam” / “See you soon”', '“Dear Ms Okafor” / “Yours sincerely”'], ['Address', 'familiar form', 'polite form, kept throughout'], ['Contractions', 'common (“I’d”)', 'avoided (“I would”)'], ['Vocabulary', '“stop chucking stuff out”', '“reduce waste”'], ['Sentences', 'short, exclamations', 'complete, often longer']];
  b += chip(270, 356, 290, 40, 'Informal', C.cream, { size: 16, edge: C.olive }) + chip(575, 356, 295, 40, 'Formal', C.teal, { size: 16 });
  rows.forEach(([f, a, c], i) => {
    const y = 406 + i * 52;
    b += box(30, y, 225, 44, C.panel, C.panelEdge, 1.8, 8) + t(44, y + 28, f, { size: 15.5, weight: 700 });
    b += box(270, y, 290, 44, '#fbf6e0', C.olive, 1.5, 8) + t(284, y + 28, a, { size: 15.5 });
    b += box(575, y, 295, 44, '#eaf3f1', C.tealDark, 1.5, 8) + t(589, y + 28, c, { size: 15.5 });
  });
  b += lowTop(30, 676, 840, 92, 'low', 'Register drift', ['a formal email that ends “Anyway, let me know, thanks!”']);
  add('04-register-scale',
    svg(900, 790, 'Step 4: register is a scale', b),
    'One idea at three points on a scale from informal to formal: a message to a friend, a school newsletter line and a formal proposal to the head. A table contrasts informal and formal greetings, forms of address, contractions, vocabulary and sentences. Register drift, such as a formal email ending “Anyway, let me know, thanks!”, is the commonest error.',
    'Choose the register when you decode the task, then keep it in every paragraph.',
    '## Step 4: register');
}

// 05 Range across levels and checking order
{
  const lv = [['Emergent', ['short, accurate sentences', 'basic connectives'], C.tealLight, 150], ['Capable', ['reasons; more than one', 'time frame; some complex', 'sentences'], C.teal, 200], ['Proficient', ['precise word choice; varied', 'structures; idiom used', 'naturally'], C.mustard, 250]];
  let b = t(450, 132, 'Use range you can control', { size: 19, weight: 700, anchor: 'middle' });
  lv.forEach(([n, lines, f, h], i) => {
    const x = 40 + i * 280, w = 260, base = 410;
    b += box(x, base - h, w, h, f, C.ink, 2.5, 12) + t(x + w / 2, base - h + 34, n, { size: 20, weight: 700, anchor: 'middle' }) + tl(x + w / 2, base - h + 66, lines, { size: 15.5, anchor: 'middle' }, 21);
  });
  b += `<line x1="30" y1="412" x2="870" y2="412" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += panel(30, 440, 840, 250) + t(55, 476, 'Checking order at the end', { size: 19, weight: 700 });
  const ck = ['Verbs: endings, tense, agreement', 'Agreement: gender and number', 'Word order: especially after connectives', 'Spelling and accents', 'Register: read it as the audience would'];
  ck.forEach((s, i) => {
    const y = 496 + i * 37;
    b += badge(76, y + 13, 14, String(i + 1), i === 0 ? C.mustard : C.cream) + t(104, y + 19, s, { size: 16.5 });
  });
  b += box(560, 500, 290, 170, C.cream, C.olive, 2, 12) + t(578, 534, 'Personal error list', { size: 17, weight: 700 }) + tl(578, 564, ['note your three most', 'frequent errors and', 'check for those first'], { size: 16 }, 23);
  add('05-range-and-checking',
    svg(900, 715, 'Step 5: range, accuracy and a checking order', b),
    'Rising columns show the range to aim for: emergent, short accurate sentences with basic connectives; capable, reasons, more than one time frame and some complex sentences; proficient, precise word choice, varied structures and natural idiom. Then a checking order: verbs, agreement, word order, spelling and accents, and register, plus a personal error list.',
    'Stretch your range only as far as you can keep it accurate.',
    '## Step 5: accuracy and range');
}

// 06 Model email annotated
{
  const paras = [
    ['Subject: Proposal: a repair café for sustainability week', 'subject line', C.teal],
    ['Dear Ms Okafor,  I am writing to propose an idea …', 'formal greeting; purpose stated', C.teal],
    ['Last month I visited the Repair Café … forty items were saved from the bin.', 'past tense; stimulus ideas reused, not copied', C.cream],
    ['First … Second … Finally, such an event would bring students, parents and staff together …', 'sequencing + reference word; uses the image', C.cream],
    ['I understand that you may be concerned about cost and safety. However …', 'answers an objection; contrast connective', C.mustard],
    ['Would it be possible to meet next week …?  Yours sincerely,', 'polite request; formal sign-off', C.teal],
  ];
  let b = box(30, 110, 520, 620, '#fff', C.ink, 2.5, 10);
  paras.forEach(([s, note, f], i) => {
    const y = 128 + i * 98;
    const ls = wrap(s, 50);
    b += `<rect x="46" y="${y}" width="8" height="${ls.length * 22 + 8}" rx="4" fill="${f === C.cream ? C.mustard : f === C.mustard ? C.rust : C.tealDark}"/>`;
    b += tl(66, y + 20, ls, { size: 15.5, italic: i !== 0, weight: i === 0 ? 700 : 400 }, 22);
    b += `<line x1="552" y1="${y + 18}" x2="576" y2="${y + 18}" stroke="${C.muted}" stroke-width="2"/>`;
    b += box(580, y - 4, 290, 64, f === C.mustard ? '#fbeee6' : f === C.cream ? '#fbf6e0' : '#eaf3f1', C.panelEdge, 1.8, 10) + tl(596, y + 33 - (wrap(note, 30).length - 1) * 10, wrap(note, 30), { size: 15, weight: 600 }, 20);
  });
  b += t(450, 760, 'One job per paragraph, linked ideas, formal throughout, past to conditional.', { size: 16, weight: 600, anchor: 'middle', fill: C.tealDark });
  add('06-model-email-annotated',
    svg(900, 785, 'The model email, annotated', b),
    'Extracts from the model email to the head of school, each annotated: a subject line; a formal greeting with the purpose stated; a past-tense paragraph reusing ideas from the poster; sequencing connectives and a reference word using the poster image; a paragraph answering an objection with “however”; and a polite request with a formal sign-off.',
    'Each paragraph has one job, the ideas are linked, and the register stays formal.',
    '## Model response (English)');
}
