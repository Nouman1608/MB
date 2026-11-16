import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-language-acquisition-key-and-related-concepts';
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

// 01 Concept layers
{
  let b = panel(30, 110, 840, 160) + t(55, 146, 'Key concepts', { size: 20, weight: 700 }) + t(230, 146, 'broadly frame the whole MYP curriculum', { size: 16, fill: C.muted });
  ['communication', 'connections', 'creativity', 'culture'].forEach((c, i) => { b += chip(55 + i * 200, 172, 185, 64, c, C.mustard, { size: 18 }); });
  b += panel(30, 290, 840, 150) + t(55, 326, 'Related concepts', { size: 20, weight: 700 }) + t(250, 326, 'narrower, grounded in the subject (examples)', { size: 16, fill: C.muted });
  ['word choice', 'conventions', 'idiom'].forEach((c, i) => { b += chip(55 + i * 200, 352, 185, 60, c, C.cream, { size: 18, edge: C.olive }); });
  b += t(700, 388, '+ more in the full guide', { size: 15, fill: C.muted, italic: true });
  b += panel(30, 460, 840, 110, '#eaf3f1', C.tealDark) + t(55, 496, 'explored through six global contexts', { size: 18, weight: 700, fill: C.tealDark }) +
    tl(55, 526, ['identities and relationships · orientation in space and time · personal and cultural expression ·', 'scientific and technical innovation · globalization and sustainability · fairness and development'], { size: 15 }, 21);
  b += lowTop(30, 590, 410, 100, 'low', 'Topic', ['“food”, “holidays”']);
  b += lowTop(460, 590, 410, 100, 'top', 'Concept', ['“culture”: applies to food, festivals, slang']);
  add('01-concept-layers',
    svg(900, 715, 'Key concepts, related concepts and contexts', b),
    'The four key concepts for language acquisition are communication, connections, creativity and culture; the brief’s related-concept examples are word choice, conventions and idiom. Both are explored through the six global contexts. A topic such as food is not a concept; culture is a concept that applies to food, festivals and slang alike.',
    'Key concepts frame, related concepts ground, contexts give the setting.',
    '## How concepts work in an MYP unit');
}

// 02 Communication: audience, purpose, mode
{
  let b = '';
  [['Audience', 'who receives it'], ['Purpose', 'what it is for'], ['Mode', 'spoken, written or visual']].forEach(([h, d], i) => {
    const x = 30 + i * 285;
    b += box(x, 110, 270, 84, i === 0 ? C.mustard : C.teal, C.ink, 2.5, 12) + t(x + 135, 145, h, { size: 20, weight: 700, anchor: 'middle' }) + t(x + 135, 173, d, { size: 15, anchor: 'middle' });
  });
  b += t(450, 232, 'Task: cancel a meeting, same message, two audiences', { size: 18, weight: 700, anchor: 'middle' });
  const col = (x, title, rows, f, e) => {
    let o = panel(x, 250, 410, 260, f, e) + t(x + 22, 286, title, { size: 19, weight: 700, fill: e });
    rows.forEach(([k, v], i) => { o += t(x + 22, 326 + i * 50, k, { size: 15, weight: 700, fill: C.muted }) + t(x + 130, 326 + i * 50, v, { size: 17 }); });
    return o;
  };
  b += col(30, 'Voicemail to a friend', [['audience', 'a friend'], ['purpose', 'cancel the meeting'], ['mode', 'spoken'], ['register', 'informal']], '#eaf3f1', C.tealDark);
  b += col(460, 'Email to a teacher', [['audience', 'a teacher'], ['purpose', 'cancel the meeting'], ['mode', 'written'], ['register', 'formal']], C.cream, C.olive);
  b += panel(30, 530, 840, 92) + t(55, 566, 'Statement of inquiry', { size: 16, weight: 700, fill: C.tealDark }) +
    t(55, 596, '“The way we adapt our words to an audience shapes whether a message is understood and accepted.”', { size: 15.5, italic: true });
  add('02-communication-audience-purpose-mode',
    svg(900, 645, 'Communication: audience, purpose, mode', b),
    'Communication has three checkable parts: audience, purpose and mode. The same cancellation becomes an informal spoken voicemail to a friend and a formal written email to a teacher. Statement of inquiry: the way we adapt our words to an audience shapes whether a message is understood and accepted.',
    'Same message, different audience: the language has to change.',
    '### Communication');
}

// 03 Word choice: fixing a complaint
{
  let b = lowTop(30, 110, 840, 92, 'low', 'Original', ['“Hey! Your room was rubbish and I want my cash back.”']);
  b += t(55, 238, 'Audience: a hotel manager, a stranger in a formal role. Purpose: complain and get a refund.', { size: 16, weight: 600, fill: C.tealDark });
  const sw = [['Hey!', 'Dear Sir or Madam'], ['rubbish', 'not of the standard advertised'], ['cash back', 'a refund'], ['(no detail)', 'the shower did not work for the whole of my three-night stay']];
  sw.forEach(([a, c], i) => {
    const y = 258 + i * 70;
    b += box(30, y, 230, 56, '#fbeee6', C.rust, 2, 10) + t(145, y + 35, a, { size: 17, anchor: 'middle', italic: true, fill: C.rust });
    b += arrow(264, y + 28, 300, y + 28, { w: 3 });
    b += box(305, y, 565, 56, '#eaf3f1', C.tealDark, 2, 10) + tl(323, y + (wrap(c, 58).length > 1 ? 24 : 35), wrap(c, 58), { size: 16.5, italic: true }, 20);
  });
  b += panel(30, 548, 840, 120, '#eaf3f1', C.tealDark) + t(52, 582, '✓ Result', { size: 18, weight: 700, fill: C.tealDark }) +
    tl(52, 612, ['“Dear Sir or Madam, I am writing to request a refund. The room was not of the standard', 'advertised: the shower did not work for the whole of my three-night stay.”'], { size: 16, italic: true }, 22);
  b += t(450, 698, 'Check register, connotation and precision; add the formal “you” if your language has one.', { size: 15.5, anchor: 'middle', fill: C.muted, weight: 600 });
  add('03-word-choice-complaint',
    svg(900, 720, 'Word choice: rewriting a complaint', b),
    'An informal complaint to a hotel, “Hey! Your room was rubbish and I want my cash back”, is rewritten for a formal audience: “Hey!” becomes “Dear Sir or Madam”, “rubbish” becomes “not of the standard advertised”, “cash back” becomes “a refund”, and a precise detail about the broken shower is added.',
    'Match words to the audience, then add precision.',
    '### Word choice');
}

// 04 Decoding an idiom
{
  const st = [
    ['Notice', 'the literal meaning makes no sense in context', 'word for word: “he put a rabbit on me”'],
    ['Use the context', 'what is happening around it', 'the writer waited an hour at a café'],
    ['Infer the meaning', 'match the meaning, not the words', '“he stood me up”'],
    ['Record it', 'idiom + meaning + an example sentence', 'not a literal translation'],
  ];
  let b = t(450, 132, 'A French blog post uses an idiom (shown here in English)', { size: 17, weight: 600, anchor: 'middle', fill: C.muted });
  st.forEach(([h, d, ex], i) => {
    const y = 150 + i * 116;
    b += panel(30, y, 840, 100) + badge(80, y + 50, 26, String(i + 1), i === 2 ? C.mustard : C.cream);
    b += t(130, y + 38, h, { size: 20, weight: 700 }) + t(130, y + 68, d, { size: 16, fill: C.muted }) + t(845, y + 56, ex, { size: 16.5, italic: true, anchor: 'end', fill: C.tealDark, weight: 600 });
    if (i < 3) b += arrow(80, y + 78, 80, y + 114, { w: 2.5 });
  });
  b += panel(30, 625, 840, 80, C.cream, C.olive) + t(450, 671, 'Use idioms sparingly: one correct idiom shows range; a literal one confuses.', { size: 17, weight: 700, anchor: 'middle' });
  add('04-decoding-an-idiom',
    svg(900, 730, 'Idiom: match the meaning, not the words', b),
    'Four steps for an idiom met in a French blog: notice the literal meaning (“he put a rabbit on me”) makes no sense; use the context (the writer waited an hour at a café); infer the meaning (“he stood me up”); and record the idiom with its meaning and an example, not a literal translation.',
    'Idioms are decoded from context and learned as whole expressions.',
    '### Idiom');
}

// 05 Building a statement of inquiry
{
  const st = [
    ['Key concept', 'communication', 'the unit is about how people talk online', C.mustard],
    ['Related concepts', 'conventions, word choice', 'online messages have their own rules and short forms', C.cream],
    ['Global context', 'identities and relationships', 'friendship: who we are and how we relate', C.teal],
  ];
  let b = t(450, 132, 'Unit: social media and friendship', { size: 17, weight: 600, anchor: 'middle', fill: C.muted });
  st.forEach(([h, v, why, f], i) => {
    const x = 30 + i * 285;
    b += box(x, 150, 270, 170, f, C.ink, 2.5, 12) + badge(x + 30, 180, 16, String(i + 1), '#fff') + t(x + 56, 186, h, { size: 17, weight: 700 }) + tl(x + 135, 222, wrap(v, 24), { size: 18, weight: 700, anchor: 'middle' }, 22) + tl(x + 135, 284, wrap(why, 30), { size: 15, anchor: 'middle' }, 19);
    b += arrow(x + 135, 324, 450 + (i - 1) * 60, 356, { w: 2.5 });
  });
  b += panel(30, 362, 840, 96, '#eaf3f1', C.tealDark) + t(52, 394, '4  General claim', { size: 16, weight: 700, fill: C.tealDark }) +
    t(450, 434, '“The conventions of online communication shape how we build and keep friendships.”', { size: 18, italic: true, anchor: 'middle' });
  b += panel(30, 476, 840, 100) + t(52, 510, '5  Test it', { size: 16, weight: 700, fill: C.tealDark });
  ['works in another language ✓', 'a claim, not a question ✓', 'names no single app ✓'].forEach((s, i) => { b += chip(52 + i * 272, 522, 256, 40, s, C.tealLight, { size: 15, weight: 600, edge: C.tealDark }); });
  b += panel(30, 594, 840, 140) + t(52, 626, '6  Add inquiry questions', { size: 16, weight: 700, fill: C.tealDark });
  [['Factual', 'common text-message abbreviations?'], ['Conceptual', 'how does a short message change tone?'], ['Debatable', 'is online friendship as real?']].forEach(([h, q], i) => {
    const x = 52 + i * 272;
    b += box(x, 640, 256, 80, i === 2 ? C.cream : C.panel, i === 2 ? C.olive : C.panelEdge, 2, 10) + t(x + 14, 666, h, { size: 15, weight: 700 }) + tl(x + 14, 690, wrap(q, 30), { size: 14.5, italic: true }, 18);
  });
  add('05-statement-of-inquiry',
    svg(900, 760, 'Building a statement of inquiry', b),
    'For a unit on social media and friendship: choose the key concept communication, the related concepts conventions and word choice, and the global context identities and relationships; write the claim “The conventions of online communication shape how we build and keep friendships”; test that it transfers, is a claim and names no app; then add factual, conceptual and debatable questions.',
    'Concept + related concepts + context = one general, transferable claim.',
    '## Worked example: building a statement of inquiry');
}

// 06 Question types
{
  const q = [['Factual', 'has a checkable answer', '“How do you open a formal letter in Spanish?”', C.tealLight], ['Conceptual', 'how or why an idea works', '“Why do languages have different levels of politeness?”', C.teal], ['Debatable', 'reasonable people disagree', '“Should young people use slang in a job interview?”', C.mustard]];
  let b = '';
  q.forEach(([h, d, ex, f], i) => {
    const y = 110 + i * 130;
    b += box(30, y, 230, 112, f, C.ink, 2.5, 12) + t(145, y + 50, h, { size: 22, weight: 700, anchor: 'middle' }) + t(145, y + 80, d, { size: 15, anchor: 'middle' });
    b += panel(274, y, 596, 112) + tl(296, y + 62 - (wrap(ex, 56).length - 1) * 12, wrap(ex, 56), { size: 18, italic: true }, 24);
  });
  b += lowTop(30, 510, 840, 92, 'low', 'Not a statement of inquiry', ['“How do people make friends online?” is an inquiry question.']);
  add('06-inquiry-question-types',
    svg(900, 625, 'Factual, conceptual and debatable questions', b),
    'Three question types in language acquisition: factual (how do you open a formal letter in Spanish?), conceptual (why do languages have different levels of politeness?) and debatable (should young people use slang in a job interview?). A question such as “How do people make friends online?” is an inquiry question, not a statement of inquiry.',
    'The curriculum explores all three kinds of question.',
    '## How concepts work in an MYP unit');
}
