import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-language-acquisition-criteria-in-practice';
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

// 01 Four criteria overview
{
  const rows = [
    ['A', 'Listening', 'interpret spoken multimodal text: what the images add, not just the words heard'],
    ['B', 'Reading', 'read layout, images and formatting as meaning, not decoration'],
    ['C', 'Speaking', 'interact spontaneously; answer what was actually asked'],
    ['D', 'Writing', 'match register, vocabulary and structure to audience and purpose'],
  ];
  let b = '';
  rows.forEach(([L, n, d], i) => {
    const y = 110 + i * 120;
    b += panel(30, y, 840, 106) + badge(88, y + 53, 32, L, i % 2 ? C.cream : C.mustard);
    b += t(145, y + 44, n, { size: 23, weight: 700 }) + t(145, y + 70, 'top-band evidence:', { size: 16, weight: 600, fill: C.tealDark });
    b += t(300, y + 70, d, { size: 16, fill: C.muted }).replace('x="300"', 'x="300"');
  });
  b += panel(30, 600, 840, 70, C.cream, C.olive) + t(450, 642, 'All four are judged against your own proficiency level.', { size: 19, weight: 700, anchor: 'middle' });
  add('01-four-criteria',
    svg(900, 695, 'The four Language Acquisition criteria', b),
    'Four rows: A listening (interpret what images add to spoken text), B reading (treat layout, images and formatting as meaning), C speaking (interact spontaneously and answer what was asked) and D writing (match register, vocabulary and structure to audience and purpose). All are judged against the student’s own proficiency level.',
    'Each criterion rewards a skill beyond literal comprehension or rehearsed language.',
    '## Where this fits in the subject');
}

// 02 Top band depends on level
{
  const lv = [['Emergent', ['short, simple but', 'accurate response', 'basic vocabulary and', 'structures'], C.tealLight, 170], ['Capable', ['judged against the', 'capable-level', 'descriptors'], C.teal, 240], ['Proficient', ['nuanced, extended,', 'spontaneous', 'language use'], C.mustard, 310]];
  let b = t(450, 130, 'What top-band evidence looks like at each level', { size: 18, weight: 600, anchor: 'middle', fill: C.muted });
  lv.forEach(([n, lines, f, h], i) => {
    const x = 60 + i * 270, w = 240, base = 500;
    b += box(x, base - h, w, h, f, C.ink, 2.5, 12) + t(x + w / 2, base - h + 36, n, { size: 21, weight: 700, anchor: 'middle' });
    b += tl(x + w / 2, base - h + 70, lines, { size: 16, anchor: 'middle' }, 21);
  });
  b += `<line x1="40" y1="502" x2="860" y2="502" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += lowTop(30, 530, 410, 120, 'low', 'Common mistake', ['comparing your work with a more', 'advanced level’s standard']);
  b += lowTop(460, 530, 410, 120, 'top', 'Instead', ['identify your level first, then use', 'your own level’s descriptors']);
  add('02-top-band-by-level',
    svg(900, 675, 'Top band means different things at each level', b),
    'Three columns of rising height for the emergent, capable and proficient levels. Top-band evidence at the emergent level can be a short, simple but accurate response with basic vocabulary; at the proficient level it needs nuanced, extended, spontaneous language. Judge your work against your own level’s descriptors.',
    'The same response can be top band at one level and mid band at a higher one.',
    '## Where this fits in the subject');
}

// 03 Criterion A: multimodal listening
{
  let b = panel(30, 110, 840, 220);
  // speaker + sound waves
  b += `<path d="M70,190 L100,190 L130,160 L130,260 L100,230 L70,230 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>`;
  [0, 1, 2].forEach((k) => { b += path(`M${150 + k * 18},${180 - k * 8} Q${170 + k * 22},210 ${150 + k * 18},${240 + k * 8}`, { stroke: C.tealDark, w: 3 }); });
  b += box(230, 150, 300, 120, C.tealLight, C.ink, 2, 12) + t(380, 186, 'Spoken announcement', { size: 18, weight: 700, anchor: 'middle' }) + t(380, 216, 'temporary closure', { size: 16, anchor: 'middle' }) + t(380, 244, 'time · place', { size: 16, anchor: 'middle', fill: C.muted });
  b += t(560, 218, '+', { size: 30, weight: 700, anchor: 'middle', fill: C.muted });
  // closed sign
  b += box(600, 150, 240, 120, C.cream, C.olive, 2, 12) + path('M690,175 L720,160 L750,175', { w: 2.5 }) + box(660, 178, 120, 50, '#fbeee6', C.rust, 3, 6) + t(720, 211, 'CLOSED', { size: 18, weight: 700, anchor: 'middle', fill: C.rust }) + t(720, 254, 'image shown with it', { size: 15, anchor: 'middle', fill: C.muted });
  b += lowTop(30, 350, 410, 190, 'low', 'Audio only', ['identifies facts stated aloud,', 'such as the time or place;', 'transcribes words heard']);
  b += lowTop(460, 350, 410, 190, 'top', 'Multimodal', ['facts heard, PLUS how the image', 'of a closed sign reinforces the', 'message about a temporary', 'closure']);
  add('03-criterion-a-multimodal-listening',
    svg(900, 565, 'Criterion A: what does the image add?', b),
    'A spoken announcement about a temporary closure is played with an image of a closed sign. A lower response only identifies facts heard, such as time and place; a top-band response also explains how the closed-sign image reinforces the spoken message.',
    'Top-band listening explains how the visuals support or add to what is said.',
    '## Criterion A: Listening');
}

// 04 Criterion B: reading a poster
{
  let b = panel(30, 110, 400, 470, C.panel, C.panelEdge) + t(230, 146, 'Public information poster', { size: 17, weight: 700, anchor: 'middle', fill: C.muted });
  b += box(60, 166, 340, 390, '#fff', C.ink, 2.5, 6);
  b += `<rect x="60" y="166" width="340" height="60" rx="6" fill="${C.rust}"/>` + `<polygon points="100,212 120,176 140,212" fill="#fff"/>` + t(130, 206, '!', { size: 22, weight: 700, anchor: 'middle', fill: C.rust }).replace('x="130"', 'x="120"');
  b += `<rect x="160" y="186" width="200" height="12" rx="6" fill="#fff"/>`;
  [0, 1, 2].forEach((k) => { b += `<rect x="90" y="${250 + k * 30}" width="${280 - k * 50}" height="12" rx="6" fill="${C.panelEdge}"/>`; });
  const icons = [[110, C.rust], [230, C.mustard], [350, C.tealDark]];
  icons.forEach(([x, c]) => { b += `<circle cx="${x}" cy="390" r="36" fill="${c}" stroke="${C.ink}" stroke-width="2.5"/>` + `<rect x="${x - 40}" y="440" width="80" height="10" rx="5" fill="${C.panelEdge}"/>`; });
  b += `<rect x="90" y="480" width="280" height="12" rx="6" fill="${C.panelEdge}"/><rect x="90" y="510" width="200" height="12" rx="6" fill="${C.panelEdge}"/>`;
  b += arrow(440, 196, 470, 196, { w: 2.5, color: C.rust, marker: 'ahR' }) + arrow(440, 390, 470, 390, { w: 2.5 }) + arrow(440, 270, 470, 270, { w: 2.5 });
  const notes = [[150, 'Colour and icon', 'a red icon signals urgency or warning', '#fbeee6', C.rust], [236, 'Written text', 'comprehended correctly', C.tealLight, C.tealDark], [340, 'Icons and colour coding', 'what each one communicates in its own right', C.cream, C.olive]];
  notes.forEach(([y, h, d, f, e]) => { b += box(475, y, 395, 92, f, e, 2.2, 12) + t(495, y + 36, h, { size: 18, weight: 700 }) + tl(495, y + 62, wrap(d, 40), { size: 15 }, 20); });
  b += lowTop(475, 452, 395, 128, 'low', 'Not top band', ['reads the words but treats the', 'visuals as irrelevant decoration']);
  add('04-criterion-b-reading-visuals',
    svg(900, 605, 'Criterion B: layout and visuals carry meaning', b),
    'A schematic public information poster with a red warning banner, short text and colour-coded icons. Top-band reading comprehends the written text and also explains what the icons and colours communicate, such as a red icon signalling urgency or warning. Treating the visuals as decoration is not top band.',
    'Read the layout, icons and colours as part of the message.',
    '## Criterion B: Reading');
}

// 05 Criterion C: the unexpected follow-up
{
  let b = box(250, 110, 400, 70, C.tealLight, C.ink, 2.5, 30) + t(450, 140, 'Examiner', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(450, 164, 'an unexpected follow-up question', { size: 18, weight: 600, anchor: 'middle' });
  b += arrow(380, 184, 240, 228, { w: 3 }) + arrow(520, 184, 660, 228, { w: 3 });
  b += lowTop(30, 236, 410, 230, 'low', 'Rehearsed recitation', ['falls back to a memorised,', 'prepared answer that does not', 'fit what was asked']);
  b += box(60, 370, 350, 70, '#fff', C.rust, 2, 30) + t(235, 412, '“As I prepared earlier …”', { size: 17, italic: true, anchor: 'middle', fill: C.rust });
  b += lowTop(460, 236, 410, 230, 'top', 'Real interaction', ['responds directly and coherently', 'to the actual question, with a', 'genuine range of vocabulary and', 'structures for the level']);
  b += panel(30, 490, 840, 90, C.cream, C.olive) + t(450, 526, 'Practise with genuinely unexpected follow-up questions,', { size: 18, weight: 700, anchor: 'middle' }) + t(450, 554, 'not only prepared answers.', { size: 18, weight: 700, anchor: 'middle' });
  add('05-criterion-c-follow-up',
    svg(900, 605, 'Criterion C: answer what was actually asked', b),
    'An examiner asks an unexpected follow-up question. Falling back on a memorised, unrelated prepared answer cannot show top-band criterion C. A top-band response answers the actual question directly and coherently, with a range of vocabulary and structures suited to the level.',
    'Spontaneous, relevant interaction beats a rehearsed speech.',
    '## Criterion C: Speaking');
}

// 06 Criterion D: two registers
{
  let b = t(450, 132, 'Same topic, two audiences', { size: 18, weight: 600, anchor: 'middle', fill: C.muted });
  // phone
  b += box(70, 150, 250, 400, '#fff', C.ink, 3, 30) + `<rect x="160" y="166" width="70" height="10" rx="5" fill="${C.panelEdge}"/>`;
  b += box(90, 200, 200, 56, C.tealLight, C.tealDark, 2, 18) + t(110, 234, 'hey! r u free?', { size: 16 });
  b += box(110, 270, 190, 56, C.cream, C.olive, 2, 18) + t(130, 304, 'yes!! c u at 4', { size: 16 });
  b += t(195, 400, 'Text message', { size: 20, weight: 700, anchor: 'middle' }) + t(195, 428, 'to a friend', { size: 16, anchor: 'middle', fill: C.muted });
  b += tl(95, 470, ['• informal', '• abbreviated language'], { size: 16, weight: 600, fill: C.tealDark }, 24);
  // email
  b += box(400, 150, 440, 400, '#fff', C.ink, 3, 10) + `<rect x="400" y="150" width="440" height="40" rx="10" fill="${C.teal}"/>` + t(420, 176, 'Formal email to a school administrator', { size: 15, weight: 700 });
  b += tl(425, 222, ['Dear …,', '', 'I am writing to ask whether …', 'Would it be possible to …?', '', 'Thank you for your help.', 'Yours sincerely, …'], { size: 16, italic: true }, 23);
  b += tl(425, 430, ['• formal greeting and sign-off', '• complete sentences', '• polite requests', '• different vocabulary and structure'], { size: 16, weight: 600, fill: C.tealDark }, 24);
  b += lowTop(30, 570, 840, 92, 'low', 'Not top band', ['the same content with only the greeting or sign-off changed']);
  add('06-criterion-d-registers',
    svg(900, 685, 'Criterion D: two registers, side by side', b),
    'A text message to a friend uses informal, abbreviated language, while a formal email to a school administrator on a related topic uses a formal greeting and sign-off, complete sentences and polite requests. Writing the same content with only the greeting changed is not top band.',
    'Top-band writing changes register, vocabulary and structure, not just the greeting.',
    '## Criterion D: Writing');
}
