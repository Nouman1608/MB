import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-language-acquisition-criterion-a-listening';
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

// 01 Spoken multimodal text: speech plus other modes
{
  const modes = [
    ['Images', 'photos, video, close-ups, maps, icons'],
    ['Words on screen', 'captions, subtitles, titles, logo, price banner'],
    ['Sound', 'music, sound effects, background noise, silence'],
    ['Delivery', 'tone, speed, stress, pauses, laughter'],
    ['Body language', 'gesture, facial expression, where the speaker stands'],
  ];
  const cx = 450, cy = 380;
  let b = box(cx - 120, cy - 60, 240, 120, C.mustard, C.ink, 3, 60) + t(cx, cy - 8, 'Speech', { size: 24, weight: 700, anchor: 'middle' }) + t(cx, cy + 22, 'only half the task', { size: 15, anchor: 'middle' });
  const pos = [[30, 110], [600, 110], [30, 420], [600, 420], [315, 560]];
  modes.forEach(([h, d], i) => {
    const [x, y] = pos[i], w = 270, hh = 100;
    b += panel(x, y, w, hh, i % 2 ? '#eaf3f1' : C.panel, i % 2 ? C.tealDark : C.panelEdge) + t(x + 20, y + 36, h, { size: 19, weight: 700 }) + tl(x + 20, y + 62, wrap(d, 30), { size: 15, fill: C.muted }, 19);
    const ends = [[355, 340, 200, 212], [545, 340, 700, 212], [335, 400, 200, 418], [565, 400, 700, 418], [450, 442, 450, 558]];
    const [sx, sy, ex, ey] = ends[i];
    b += `<line x1="${sx}" y1="${sy}" x2="${ex}" y2="${ey}" stroke="${C.tealDark}" stroke-width="2.5" stroke-dasharray="6 5"/>`;
  });
  b += t(450, 700, 'e.g. video adverts, podcasts, news reports, interviews, vlogs, announcements, voicemails', { size: 15.5, anchor: 'middle', fill: C.muted });
  add('01-spoken-multimodal-text',
    svg(900, 725, 'What makes a spoken text multimodal', b),
    'Speech sits at the centre, linked to five other modes that also carry meaning: images, words on screen, sound, the speaker’s delivery and body language. Examples include video adverts, podcasts, news reports, interviews, vlogs, announcements and voicemails.',
    'Listening is only half the task: every other mode carries meaning too.',
    '## What a spoken multimodal text is');
}

// 02 Explicit information: method and traps
{
  const steps = [['Before', 'read every question; underline the key word; predict the answer type'], ['Listen 1', 'short notes in the order you hear them'], ['Listen 2', 'check anything marked “?”']];
  let b = '';
  steps.forEach(([h, d], i) => {
    const x = 30 + i * 285, w = 265;
    b += box(x, 110, w, 120, i === 0 ? C.mustard : C.tealLight, C.ink, 2.5, 12) + t(x + 20, 146, h, { size: 20, weight: 700 }) + tl(x + 20, 176, wrap(d, 28), { size: 15 }, 20);
    if (i < 2) b += arrow(x + w + 2, 170, x + 283, 170, { w: 3 });
  });
  b += t(450, 270, 'Three traps', { size: 21, weight: 700, anchor: 'middle', fill: C.rust });
  const traps = [
    ['Paraphrase', 'question: “cost”', 'speaker: “you’ll pay”', 'the answer is rarely in the question’s words'],
    ['Self-correction', '“We meet on Tuesday –', 'no, sorry, Wednesday.”', 'the last version is the answer'],
    ['Distractors', 'two times or two prices', 'are mentioned', 'only one answers the question'],
  ];
  traps.forEach(([h, a, c, d], i) => {
    const x = 30 + i * 285, w = 265;
    b += panel(x, 290, w, 230, '#fbeee6', C.rust) + t(x + 20, 326, h, { size: 19, weight: 700, fill: C.rust });
    b += box(x + 16, 344, w - 32, 76, '#fff', C.panelEdge, 2, 10) + t(x + w / 2, 376, a, { size: 15, anchor: 'middle', italic: true }) + t(x + w / 2, 402, c, { size: 15, anchor: 'middle', italic: true });
    b += tl(x + 20, 452, wrap(d, 26), { size: 16, weight: 600 }, 21);
  });
  add('02-explicit-information',
    svg(900, 550, 'Explicit information: method and traps', b),
    'Before listening, read the questions, underline key words and predict the answer type; on the first listen take notes in order; on the second, check anything marked with a question mark. Three traps: paraphrase (the speaker says “you’ll pay” for “cost”), self-correction (Tuesday, then Wednesday) and distractors (two times or prices).',
    'Expect paraphrase, corrections and distractors, not the question’s exact words.',
    '## Skill 1: explicit information');
}

// 03 Inference needs evidence
{
  const ev = [['Word choice', '“finally”, “just a small fee”'], ['Tone', 'enthusiastic rise, flat or sarcastic'], ['What is left out', 'an advert that never gives the price'], ['Visuals', 'a smiling crowd: the event is popular']];
  let b = t(450, 132, 'Evidence an inference can rest on', { size: 18, weight: 600, anchor: 'middle', fill: C.muted });
  ev.forEach(([h, d], i) => {
    const x = 30 + i * 213, w = 200;
    b += box(x, 150, w, 110, C.tealLight, C.tealDark, 2.2, 12) + t(x + w / 2, 186, h, { size: 18, weight: 700, anchor: 'middle' }) + tl(x + w / 2, 214, wrap(d, 22), { size: 15, anchor: 'middle' }, 19);
    b += arrow(x + w / 2, 264, 450 + (i - 1.5) * 50, 300, { w: 2.5, color: C.tealDark, marker: 'ahT' });
  });
  b += box(250, 306, 400, 56, C.mustard, C.ink, 2.5, 12) + t(450, 341, 'inference = claim + evidence', { size: 20, weight: 700, anchor: 'middle' });
  b += lowTop(30, 385, 410, 150, 'low', 'Earns little', ['“The speaker is worried.”', '', 'a claim with no evidence']);
  b += lowTop(460, 385, 410, 150, 'top', 'Earns much more', ['“She is worried because she repeats', '‘I really hope’ and her voice drops.”', '', 'words + tone as evidence']);
  b += t(450, 565, 'Signal words in questions: infer, suggest, interpret, what does the speaker think', { size: 16, anchor: 'middle', fill: C.muted });
  add('03-implicit-information',
    svg(900, 590, 'Implicit information needs evidence', b),
    'Inferences rest on evidence from word choice, tone, what is left out and the visuals. “The speaker is worried” earns little; “she is worried because she repeats ‘I really hope’ and her voice drops” earns much more because it quotes words and describes tone.',
    'Every inference needs a quoted or described piece of evidence.',
    '## Skill 2: implicit information');
}

// 04 Reinforce, add, contrast
{
  const rel = [
    ['Reinforce', 'the image shows what the speech says', '“the park is quiet”', 'empty path', C.tealLight, C.tealDark],
    ['Add', 'the image gives information the speech does not', 'speaker gives no date', 'caption shows a date', C.cream, C.olive],
    ['Contrast', 'image and speech disagree, often for humour or criticism', '“relaxing holiday”', 'queue in the rain', '#fbeee6', C.rust],
  ];
  let b = '';
  rel.forEach(([h, d, sp, im, f, e], i) => {
    const x = 30 + i * 285, w = 270;
    b += panel(x, 110, w, 420, f, e) + t(x + w / 2, 150, h, { size: 23, weight: 700, anchor: 'middle', fill: e });
    b += tl(x + w / 2, 180, wrap(d, 26), { size: 15, anchor: 'middle' }, 19);
    b += box(x + 20, 250, w - 40, 100, '#fff', C.panelEdge, 2, 10) + t(x + 36, 278, 'SPEECH', { size: 15, weight: 700, fill: C.muted }) + t(x + w / 2, 318, sp, { size: 16, anchor: 'middle', italic: true });
    b += t(x + w / 2, 380, i === 0 ? '=' : i === 1 ? '+' : '≠', { size: 34, weight: 700, anchor: 'middle', fill: e });
    b += box(x + 20, 400, w - 40, 100, '#fff', C.panelEdge, 2, 10) + t(x + 36, 428, 'IMAGE', { size: 15, weight: 700, fill: C.muted }) + t(x + w / 2, 468, im, { size: 16, anchor: 'middle', weight: 600 });
  });
  b += panel(30, 550, 840, 80, '#eaf3f1', C.tealDark) + t(450, 584, 'In an answer: name the relationship, give the specific image and words,', { size: 17, weight: 700, anchor: 'middle' }) + t(450, 610, 'and explain the effect on the audience.', { size: 17, weight: 700, anchor: 'middle' });
  add('04-reinforce-add-contrast',
    svg(900, 655, 'How speech and images work together', b),
    'Three relationships between speech and image. Reinforce: the speaker says the park is quiet and footage shows an empty path. Add: a caption shows a date the speaker never says. Contrast: the speaker says “relaxing holiday” while footage shows a queue in the rain.',
    'Name the relationship, cite the image and words, explain the effect.',
    '## Skill 5: how speech and images work together');
}

// 05 Worked example storyboard
{
  const fr = [
    ['Traffic queue', 'low, slow music', '“Stuck again? … the same wait.”', 'reinforce: frustration', C.teal],
    ['Green bike, phone app', 'fast guitar beat', '“200 bikes, 40 docking stations, first 30 minutes free.”', 'explicit facts', C.tealLight],
    ['On-screen prices', '', '“Day pass 3 euros – Year pass 40 euros”', 'add: prices never said', C.cream],
    ['Teen rides past the queue', 'she is smiling', '“I get to school before my brother gets out of the car park.”', 'implied: cycling is faster', C.tealLight],
    ['Logo and web address', 'address read twice', '“Ride your own way.”', 'persuade: call to action', C.mustard],
  ];
  let b = '';
  fr.forEach(([vis, snd, sp, note, f], i) => {
    const y = 110 + i * 112;
    const vl = wrap(vis, 18), sl = wrap(sp, 40), nl = wrap(note, 20);
    b += box(30, y, 200, 98, f, C.ink, 2.2, 10) + tl(46, y + 30, vl, { size: 16, weight: 700 }, 20) + (snd ? t(46, y + 84, (i === 0 || i === 1 ? '♪ ' : '') + snd, { size: 15, fill: C.ink, italic: true }) : '');
    b += box(245, y, 400, 98, C.panel, C.panelEdge, 2, 10) + tl(262, y + 55 - (sl.length - 1) * 11, sl, { size: 16, italic: true }, 22);
    b += box(660, y, 210, 98, '#eaf3f1', C.tealDark, 2, 10) + tl(676, y + 55 - (nl.length - 1) * 10.5, nl, { size: 15.5, weight: 700, fill: C.tealDark }, 21);
  });
  b += `<line x1="30" y1="${110 + 112 - 7}" x2="870" y2="${110 + 112 - 7}" stroke="${C.rust}" stroke-width="3" stroke-dasharray="10 6"/>` + `<rect x="352" y="208" width="186" height="14" rx="6" fill="${C.bg}"/>` + t(445, 220, 'music and mood change', { size: 15, weight: 700, anchor: 'middle', fill: C.rust });
  b += panel(30, 680, 840, 80, C.cream, C.olive) + t(450, 714, 'The contrast between the slow first half and the fast second half', { size: 17, weight: 700, anchor: 'middle' }) + t(450, 740, 'is the main persuasive device.', { size: 17, weight: 700, anchor: 'middle' });
  add('05-worked-example-bike-advert',
    svg(900, 785, 'Worked example: the Rivermead Wheels advert', b),
    'A storyboard of a 40-second bike-share advert in five frames: a traffic queue with slow music, a green bike with fast music and the scheme’s facts, on-screen prices that add information, a teenager riding past the queue implying cycling is faster, and the logo with the web address read twice as a call to action.',
    'Track speech, visuals and music frame by frame to see how the advert persuades.',
    '## Worked example');
}

// 06 Levels progression
{
  const lv = [
    ['Emergent', ['short, clear texts on', 'familiar topics', 'mostly explicit questions', 'visuals strongly support', 'the speech'], C.tealLight],
    ['Capable', ['longer texts, more than', 'one speaker', 'some inference', 'visuals add information'], C.teal],
    ['Proficient', ['less familiar topics, natural', 'speed, opinions, humour', 'more inference; contrast', 'between modes; attitudes', 'and values'], C.mustard],
  ];
  let b = `<defs><linearGradient id="lvg" x1="0" x2="1"><stop offset="0" stop-color="${C.tealLight}"/><stop offset="1" stop-color="${C.mustard}"/></linearGradient></defs>`;
  b += `<path d="M40,140 L820,140 L820,124 L860,152 L820,180 L820,164 L40,164 Z" fill="url(#lvg)" stroke="${C.ink}" stroke-width="2"/>`;
  b += t(60, 158, 'texts get longer, faster and less familiar; more inference', { size: 15, weight: 700 });
  lv.forEach(([n, lines, f], i) => {
    const x = 30 + i * 285, w = 270;
    b += panel(x, 200, w, 250) + `<rect x="${x}" y="200" width="${w}" height="56" rx="14" fill="${f}"/><rect x="${x}" y="236" width="${w}" height="20" fill="${f}"/>` + `<rect x="${x}" y="200" width="${w}" height="250" rx="14" fill="none" stroke="${C.panelEdge}" stroke-width="2.5"/>`;
    b += t(x + w / 2, 237, n, { size: 21, weight: 700, anchor: 'middle' }) + tl(x + 20, 290, lines, { size: 16 }, 26);
  });
  b += t(450, 485, 'The brief names the three levels but does not describe the texts; check your level with your teacher.', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  add('06-listening-across-levels',
    svg(900, 510, 'Listening across the three levels', b),
    'Three columns. Emergent: short, clear texts on familiar topics, mostly explicit questions and strongly supporting visuals. Capable: longer texts with more than one speaker, some inference and visuals that add information. Proficient: less familiar topics at natural speed with opinions and humour, more inference, contrast between modes and questions on attitudes.',
    'As levels rise, texts get harder and questions lean more on inference and contrast.',
    '## Across the three proficiency levels');
}
