import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-language-acquisition-text-types-and-conventions';
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

// 01 Four decisions before you write
{
  const d = [['Text type', 'what form does the task ask for?', C.tealLight], ['Audience', 'who reads it?', C.teal], ['Purpose', 'inform, persuade, describe, recount, advise, complain, thank?', C.tealLight]];
  let b = '';
  d.forEach(([h, q, f], i) => {
    const x = 30 + i * 285, w = 270;
    b += box(x, 110, w, 130, f, C.ink, 2.5, 12) + badge(x + 32, 146, 18, String(i + 1), '#fff') + t(x + 60, 153, h, { size: 20, weight: 700 }) + tl(x + 20, 192, wrap(q, 30), { size: 15.5 }, 20);
    b += arrow(x + w / 2, 244, 450 + (i - 1) * 70, 290, { w: 3 });
  });
  b += box(250, 296, 400, 90, C.mustard, C.ink, 3, 14) + badge(290, 341, 18, '4', '#fff') + t(470, 334, 'Register', { size: 22, weight: 700, anchor: 'middle' }) + t(470, 362, 'follows from 1–3, not from the topic', { size: 15.5, anchor: 'middle' });
  b += arrow(450, 390, 450, 420, { w: 3 });
  b += panel(30, 426, 840, 150) + t(55, 462, 'Same topic, school uniform:', { size: 18, weight: 700 });
  b += box(55, 482, 380, 74, '#eaf3f1', C.tealDark, 2, 10) + t(75, 512, 'email to the head teacher', { size: 16, weight: 600 }) + t(75, 538, '→ formal', { size: 16, weight: 700, fill: C.tealDark });
  b += box(465, 482, 380, 74, C.cream, C.olive, 2, 10) + t(485, 512, 'message to a cousin', { size: 16, weight: 600 }) + t(485, 538, '→ informal', { size: 16, weight: 700, fill: C.olive });
  b += t(450, 608, 'Once you choose a register, hold it from the first line to the last.', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('01-four-decisions',
    svg(900, 635, 'Four decisions before you write', b),
    'Text type, audience and purpose together decide the fourth choice, register, which follows from them rather than from the topic. The same topic, school uniform, is formal in an email to the head teacher and informal in a message to a cousin.',
    'Decide text type, audience and purpose; the register follows.',
    '## Four decisions before you write');
}

// 02 Register features
{
  const rows = [['Address', 'title and surname, or a role', 'first name or nickname'], ['“You”', 'polite form, where it exists', 'familiar form'], ['Contractions', 'avoided', 'common (“I’m”, “can’t”)'], ['Vocabulary', 'precise, neutral: inform, request', 'everyday: tell, ask'], ['Idiom and slang', 'rare', 'welcome, if natural'], ['Sentences', 'complete, often complex', 'shorter; fragments allowed'], ['Punctuation', 'restrained', 'exclamation marks, dashes'], ['Closing', 'fixed polite formula', 'friendly sign-off']];
  let b = `<defs><linearGradient id="rg2" x1="0" x2="1"><stop offset="0" stop-color="${C.teal}"/><stop offset="1" stop-color="${C.cream}"/></linearGradient></defs>`;
  b += `<rect x="250" y="110" width="620" height="44" rx="10" fill="url(#rg2)" stroke="${C.ink}" stroke-width="2"/>` + t(270, 139, 'Formal', { size: 18, weight: 700 }) + t(560, 139, 'semi-formal', { size: 16, weight: 600, anchor: 'middle', fill: C.muted }) + t(850, 139, 'Informal', { size: 18, weight: 700, anchor: 'end' });
  rows.forEach(([f, a, c], i) => {
    const y = 166 + i * 56;
    b += box(30, y, 205, 46, C.panel, C.panelEdge, 1.8, 8) + t(46, y + 30, f, { size: 16, weight: 700 });
    b += box(250, y, 300, 46, '#eaf3f1', C.tealDark, 1.5, 8) + t(264, y + 30, a, { size: 15.5 });
    b += box(570, y, 300, 46, '#fbf6e0', C.olive, 1.5, 8) + t(584, y + 30, c, { size: 15.5 });
  });
  b += panel(30, 626, 840, 76, C.cream, C.olive) + t(55, 658, 'Semi-formal: a school blog post or a speech to your year group', { size: 16.5, weight: 700 }) + t(55, 684, 'friendly but careful, with no slang', { size: 16 });
  add('02-register-features',
    svg(900, 725, 'Register: what changes', b),
    'Eight features compared for formal and informal register: address, the form of “you”, contractions, vocabulary, idiom and slang, sentence length, punctuation and the closing. A semi-formal register, as in a school blog post or a speech to your year group, is friendly but careful, with no slang.',
    'Register shows in every feature, from greeting to closing.',
    '## Register: what changes');
}

// helper: mini layout skeleton lines
const bar = (x, y, w, h = 9, f = C.panelEdge) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${f}"/>`;
const lab = (x, y, s, col = C.tealDark) => t(x, y, s, { size: 14.5, weight: 700, fill: col });

// 03 Four written text types: layouts
{
  const card = (x, y, title, purpose, sk, slip) => panel(x, y, 410, 330) + t(x + 20, y + 34, title, { size: 20, weight: 700 }) + t(x + 20, y + 58, purpose, { size: 15, fill: C.muted }) +
    box(x + 20, y + 72, 370, 196, '#fff', C.ink, 2, 6) + sk + t(x + 20, y + 300, '✗ ' + slip, { size: 15, fill: C.rust, weight: 600 });
  const email = (x, y) => box(x + 34, y + 84, 342, 26, C.tealLight, C.tealDark, 1.5, 4) + lab(x + 44, y + 102, 'Subject: states the point') + lab(x + 40, y + 132, 'Greeting', C.ink) + bar(x + 40, y + 142, 300) + lab(x + 40, y + 168, 'why I am writing (1st sentence)', C.olive) + bar(x + 40, y + 176, 280) + bar(x + 40, y + 192, 250) + lab(x + 40, y + 222, 'clear request / next step', C.olive) + lab(x + 40, y + 250, 'Closing formula, name, role', C.ink);
  const blog = (x, y) => lab(x + 40, y + 102, 'Catchy title', C.ink) + lab(x + 260, y + 102, 'date · author', C.muted) + lab(x + 40, y + 128, '“Have you ever…?” direct address', C.olive) + bar(x + 40, y + 138, 300) + lab(x + 40, y + 166, 'Subheading', C.ink) + bar(x + 40, y + 176, 280) + bar(x + 40, y + 192, 220) + box(x + 40, y + 214, 330, 40, C.tealLight, C.tealDark, 1.5, 6) + lab(x + 52, y + 239, 'question / call for comments');
  const article = (x, y) => lab(x + 40, y + 104, 'HEADLINE', C.ink) + lab(x + 40, y + 124, 'subheading · byline', C.muted) + lab(x + 40, y + 150, 'opening: hook + summary', C.olive) + bar(x + 40, y + 160, 310) + bar(x + 40, y + 182, 150) + bar(x + 210, y + 182, 150) + bar(x + 40, y + 198, 150) + bar(x + 210, y + 198, 150) + lab(x + 40, y + 226, 'facts, examples, quoted comments', C.tealDark) + lab(x + 40, y + 252, 'ending returns to the headline', C.olive);
  const diary = (x, y) => lab(x + 40, y + 102, 'Date', C.ink) + lab(x + 40, y + 128, 'Dear Diary, (if your language uses it)', C.muted) + lab(x + 40, y + 156, 'I…: past tenses for events', C.olive) + bar(x + 40, y + 166, 290) + lab(x + 40, y + 194, 'present for feelings; reflective', C.olive) + bar(x + 40, y + 204, 260) + lab(x + 40, y + 240, 'thoughts about what happens next', C.tealDark);
  let b = card(30, 110, 'Email', 'ask, thank, inform or complain to one reader', email(30, 110), 'vague subject line; request hidden at the end');
  b += card(460, 110, 'Blog post', 'share experience and opinion with online readers', blog(460, 110), 'a diary entry called a blog');
  b += card(30, 456, 'Article', 'inform or persuade magazine or newspaper readers', article(30, 456), 'no headline or byline');
  b += card(460, 456, 'Diary entry', 'record and reflect, for the writer alone', diary(460, 456), 'writing to an audience: “Hi, readers!”');
  add('03-written-text-layouts',
    svg(900, 810, 'Layouts a reader recognises: four written types', b),
    'Four layout skeletons. Email: subject line, greeting, purpose in the first sentence, a clear request, closing formula, name and role. Blog post: title, date and author, direct address, subheadings and a call for comments. Article: headline, byline, a hook-and-summary opening, facts and quoted comments, an ending that returns to the headline. Diary entry: date, past tenses for events, present for feelings, thoughts about what comes next.',
    'A reader should recognise the text type from its layout alone.',
    '## The seven text types');
}

// 04 Speech, brochure, review
{
  const col = (x, title, purpose, items, slip, f, e) => {
    let o = panel(x, 110, 270, 560, f, e) + t(x + 20, 146, title, { size: 21, weight: 700, fill: e }) + tl(x + 20, 172, wrap(purpose, 30), { size: 15, fill: C.muted }, 19);
    items.forEach((s, i) => { const y = 226 + i * 56; o += box(x + 16, y, 238, 46, '#fff', C.panelEdge, 1.8, 8) + tl(x + 30, y + (wrap(s, 26).length > 1 ? 19 : 28), wrap(s, 26), { size: 14.5 }, 17); });
    o += tl(x + 20, 630, wrap('✗ ' + slip, 30), { size: 15, weight: 600, fill: C.rust }, 19);
    return o;
  };
  let b = col(30, 'Speech', 'persuade, inform or celebrate; heard only once', ['greet: “Good morning, everyone”', 'introduce yourself and your point', 'signposts: First… Next… Finally…', 'rhetorical questions', 'repetition; lists of three', '“you” and “we”', 'memorable last line and thanks'], 'an essay with a greeting on top', '#eaf3f1', C.tealDark);
  b += col(315, 'Brochure / leaflet', 'inform and persuade the public about a place, service or event', ['title and slogan', 'headings, short sections', 'bullet points', 'imperatives: “Visit”, “Book now”', 'times, prices, contact', 'space marked for images', 'call to action'], 'long, unbroken paragraphs: it is scanned', C.cream, C.olive);
  b += col(600, 'Review', 'judge something and advise the reader', ['title naming what is reviewed', 'key facts: what, where, who', 'short description, no spoilers', 'strengths with evidence', 'weaknesses with evidence', 'clear recommendation', 'often a rating'], 'retelling the plot without judging it', '#fbf6e0', C.olive);
  add('04-speech-brochure-review',
    svg(900, 695, 'Conventions of a speech, a brochure and a review', b),
    'Three columns of conventions. Speech: greet the audience, introduce your point, signposts, rhetorical questions, repetition and lists of three, “you” and “we”, a memorable ending. Brochure or leaflet: title and slogan, headings, bullet points, imperatives, practical details, image space, a call to action. Review: title, key facts, description without spoilers, strengths and weaknesses with evidence, a recommendation and often a rating.',
    'Each text type has conventions its readers or listeners expect.',
    '## The seven text types');
}

// 05 One topic, three text types
{
  const cols = [
    ['Formal email', 'Mr Brennan, Festival Coordinator', 'ask for a stall', 'Formal', '“Dear Mr Brennan,”', 'no contractions; “We would be grateful if…”', '“Yours sincerely,” + name and role', '#eaf3f1', C.tealDark],
    ['Blog post', 'readers of the student blog', 'persuade students to volunteer', 'Semi-formal', '“Picture this: a sunny Saturday…”', 'contractions; rhetorical questions; no slang', '“Who’s in? Tell me in the comments.”', C.cream, C.olive],
    ['Diary entry', 'yourself', 'reflect on your feelings', 'Informal', '“Dear Diary, They said yes!”', 'short, emotional; questions to yourself', 'a private worry: “I just hope people sign up.”', '#fbf6e0', C.olive],
  ];
  let b = box(150, 110, 600, 56, C.mustard, C.ink, 2.5, 12) + t(450, 145, 'Same facts: Harwick Food Festival stall, 8 June', { size: 18, weight: 700, anchor: 'middle' });
  const rl = ['Audience', 'Purpose', 'Register', 'Opening', 'Language', 'Ending'];
  rl.forEach((r, j) => { b += t(30, 250 + j * 74 + (j === 0 ? 0 : 0), r, { size: 15, weight: 700, fill: C.muted }); });
  cols.forEach(([h, aud, pur, reg, op, lang, end, f, e], i) => {
    const x = 130 + i * 250, w = 236;
    b += arrow(450 + (i - 1) * 60, 168, x + w / 2, 186, { w: 2.5 });
    b += panel(x, 190, w, 470, f, e) + t(x + w / 2, 220, h, { size: 19, weight: 700, anchor: 'middle', fill: e });
    [aud, pur, reg, op, lang, end].forEach((v, j) => {
      const y = 232 + j * 74;
      b += box(x + 10, y, w - 20, 64, '#fff', C.panelEdge, 1.5, 8) + tl(x + 22, y + (wrap(v, 24).length > 1 ? 26 : 38), wrap(v, 24), { size: 14.5, italic: j >= 3, weight: j === 2 ? 700 : 400 }, 18);
    });
  });
  b += t(450, 690, 'If two endings could be swapped unnoticed, your conventions are too weak.', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
  add('05-one-topic-three-texts',
    svg(900, 715, 'One topic, three text types', b),
    'The same food-festival facts written three ways. A formal email to the festival coordinator asks for a stall, opens “Dear Mr Brennan,” avoids contractions and ends with “Yours sincerely” and a role. A semi-formal blog post persuades students to volunteer and ends by asking for comments. An informal diary entry reflects on feelings and ends with a private worry.',
    'The facts stay the same; audience, purpose, register and endings all change.',
    '## Worked example: one topic, three text types');
}
