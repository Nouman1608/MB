import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-language-acquisition-criterion-c-speaking';
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

// 01 The speaking task at a glance
{
  let b = panel(30, 110, 410, 250, '#eaf3f1', C.tealDark) + t(55, 148, 'On-screen examination', { size: 20, weight: 700, fill: C.tealDark });
  ['A Listening', 'B Reading', 'D Writing'].forEach((s, i) => { b += chip(55, 168 + i * 58, 360, 46, s, C.panel, { size: 17, edge: C.tealDark }); });
  b += panel(460, 110, 410, 250, C.cream, C.olive) + t(485, 148, 'Speaking examination', { size: 20, weight: 700, fill: C.olive });
  b += chip(485, 168, 360, 46, 'C Speaking: 24 marks', C.mustard, { size: 17 });
  b += t(485, 250, '• interactive: a conversation,', { size: 16 }) + t(499, 274, 'not a speech', { size: 16 }) + t(485, 298, '• responds to multimodal texts', { size: 16 });
  const fl = [['Classroom teacher marks it', 'against the MYP year 5 speaking criteria'], ['IB moderates a sample', 'from each school, each session'], ['Grades adjusted', 'where needed']];
  fl.forEach(([h, d], i) => {
    const x = 30 + i * 285, w = 265;
    b += box(x, 390, w, 104, C.panel, C.panelEdge, 2, 12) + t(x + 18, 426, h, { size: 17, weight: 700 }) + tl(x + 18, 454, wrap(d, 28), { size: 15, fill: C.muted }, 19);
    if (i < 2) b += arrow(x + w + 2, 442, x + 283, 442, { w: 3 });
  });
  b += t(450, 530, 'Assessed at one level: emergent, capable or proficient. Four criteria, equally weighted, levels 1–8.', { size: 15.5, anchor: 'middle', fill: C.muted });
  add('01-speaking-task-overview',
    svg(900, 555, 'The speaking examination at a glance', b),
    'Criteria A, B and D are assessed in the on-screen examination; criterion C, speaking, is a separate interactive examination worth 24 marks that responds to multimodal texts. The classroom teacher marks it against the MYP year 5 criteria, the IB moderates a sample from each school and grades are adjusted where needed.',
    'Speaking is a separate, teacher-marked, IB-moderated conversation worth 24 marks.',
    '## What the brief says about Criterion C');
}

// 02 See, read, think, relate
{
  const st = [
    ['See', 'describe the image: people, place, action, mood', '“A teenager and an older man fix a bike wheel; both smiling.”', C.tealLight],
    ['Read', 'key words, slogan or data and what they mean', '“Don’t bin it – fix it!”; icons: bike, lamp, shirt', C.tealLight],
    ['Think', 'interpret: audience, aim, how image and words work together', 'repair, not throw away; two generations learning from each other', C.mustard],
    ['Relate', 'link to you, your community, the world; give a view and a reason', 'old phones and clothes thrown away; “some might say it’s quicker to buy new”', C.mustard],
  ];
  let b = t(450, 132, 'Stimulus: a Repair Café poster (original, fictional)', { size: 17, weight: 600, anchor: 'middle', fill: C.muted });
  st.forEach(([h, d, ex, f], i) => {
    const y = 150 + i * 128;
    b += box(30, y, 170, 112, f, C.ink, 2.5, 12) + badge(64, y + 38, 18, String(i + 1), '#fff') + t(92, y + 46, h, { size: 22, weight: 700 });
    b += panel(214, y, 656, 112) + tl(236, y + 34, wrap(d, 64), { size: 16, weight: 600 }, 21) + tl(236, y + 82 - (wrap(ex, 70).length - 1) * 10, wrap(ex, 70), { size: 15.5, italic: true, fill: C.tealDark }, 20);
  });
  b += t(115, 680, 'steps 1–2: safe ground', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(450, 680, 'steps 3–4: show range and thinking', { size: 15, weight: 700, anchor: 'middle', fill: C.olive });
  b += t(450, 708, 'Learn a sentence frame for each step, not whole answers.', { size: 16, weight: 600, anchor: 'middle' });
  add('02-see-read-think-relate',
    svg(900, 730, 'Responding to a stimulus: see, read, think, relate', b),
    'Four steps applied to a Repair Café poster: see (a teenager and an older man fixing a bike wheel, smiling), read (the headline “Don’t bin it – fix it!” and the icons), think (repair rather than throw away; two generations learning from each other) and relate (things thrown away locally, with a counter-view). Steps 1 and 2 are safe ground; 3 and 4 show range and thinking.',
    'Describe, read, interpret, then relate it to your world with a view.',
    '## Responding to a multimodal text');
}

// 03 Extending a flat answer
{
  let b = box(30, 110, 840, 60, C.tealLight, C.tealDark, 2, 30) + t(60, 147, 'Teacher: “Would you volunteer at a Repair Café?”', { size: 18, weight: 600 });
  b += lowTop(30, 190, 840, 58, 'low', 'Flat: “Yes, I would.”', []);
  b += t(55, 310, 'Extended with the chain:', { size: 18, weight: 700, fill: C.tealDark });
  const ch = [
    ['Answer', '“Yes, I would,”', C.mustard, 'present'],
    ['Reason', '“because I’m quite good with my hands and I like helping people.”', C.cream, ''],
    ['Example', '“Last month I fixed my grandmother’s radio with my dad.”', C.cream, 'past'],
    ['Consequence', '“If I volunteered, I’d practise more and maybe teach younger children too.”', C.teal, 'conditional'],
  ];
  ch.forEach(([h, q, f, tense], i) => {
    const y = 328 + i * 86;
    b += chip(30, y, 180, 70, h, f, { size: 18 }) + box(226, y, 520, 70, C.panel, C.panelEdge, 2, 10) + tl(244, y + 30 - (wrap(q, 52).length - 2) * 10, wrap(q, 52), { size: 16, italic: true }, 21);
    if (tense) b += chip(760, y + 16, 110, 38, tense, '#eaf3f1', { size: 15, edge: C.tealDark, color: C.tealDark });
    if (i < 3) b += arrow(120, y + 71, 120, y + 85, { w: 2.5 });
  });
  b += t(450, 690, 'Three tenses used naturally, and two new threads for the teacher to follow.', { size: 16, weight: 600, anchor: 'middle', fill: C.tealDark });
  add('03-extending-an-answer',
    svg(900, 715, 'Extending a flat answer', b),
    'Asked whether they would volunteer at a Repair Café, a flat answer is “Yes, I would.” The extended answer adds a reason, a past example (fixing a grandmother’s radio) and a conditional consequence (practising more and teaching younger children), using present, past and conditional forms.',
    'Answer, reason, example, consequence: one line becomes four.',
    '### Worked example: extending a flat answer');
}

// 04 Interaction strategies
{
  const rows = [
    ['Ask for repetition', '“Sorry, could you repeat that, please?”', 'better than guessing'],
    ['Check meaning', '“Do you mean … ?”', 'shows listening, buys time'],
    ['Paraphrase a missing word', '“It’s the thing you use to …”', 'keeps you going'],
    ['Give a view, invite one', '“I think … What do you think?”', 'makes it two-way'],
    ['Self-correct', '“She go – sorry, she goes …”', 'shows control'],
    ['Hold the turn', '“Let me think …”', 'fills a pause naturally'],
  ];
  let b = '';
  rows.forEach(([h, q, w], i) => {
    const y = 110 + i * 82;
    b += panel(30, y, 840, 70) + t(52, y + 43, h, { size: 17, weight: 700 }) + t(320, y + 43, q, { size: 16, italic: true, fill: C.tealDark }) + t(850, y + 43, w, { size: 15, anchor: 'end', fill: C.muted });
  });
  b += panel(30, 610, 840, 120, C.cream, C.olive) + t(55, 644, 'Unexpected question? Three moves', { size: 18, weight: 700 });
  ['Buy time', 'Narrow the question', 'Link back to stimulus words'].forEach((s, i) => {
    const x = 55 + i * 272;
    b += chip(x, 662, 250, 50, s, i === 1 ? C.mustard : C.panel, { size: 15, edge: C.olive });
    if (i < 2) b += arrow(x + 252, 687, x + 270, 687, { w: 2.5, color: C.olive, marker: 'ahO' });
  });
  add('04-interaction-strategies',
    svg(900, 755, 'Strategies that keep a conversation alive', b),
    'Six interaction strategies with English models: ask for repetition, check meaning, paraphrase a missing word, give a view and invite one, self-correct, and hold the turn. For an unexpected question: buy time, narrow it to something you can answer, and link back to vocabulary from the stimulus.',
    'Never switch to a memorised paragraph that does not answer the question.',
    '## Interaction strategies');
}

// 05 4-3-2 drill and fluency
{
  const rounds = [[4, 'same content', C.tealLight], [3, 'smoother', C.teal], [2, 'smoothest', C.mustard]];
  let b = panel(30, 110, 840, 250) + t(55, 146, 'The 4-3-2 drill: one stimulus, 9 minutes in all', { size: 19, weight: 700 });
  let x = 60;
  rounds.forEach(([m, d, f], i) => {
    const w = m * 86.5;
    b += box(x, 180, w - 10, 80, f, C.ink, 2.5, 10) + t(x + (w - 10) / 2, 220, `${m} min`, { size: 24, weight: 700, anchor: 'middle' }) + t(x + (w - 10) / 2, 246, d, { size: 15, anchor: 'middle' });
    x += w;
  });
  b += t(450, 300, 'each round forces you to say the same ideas more smoothly', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 });
  b += t(450, 336, 'Fluency is flow: steady pace, pauses in natural places, little restarting. It is not speed.', { size: 15.5, anchor: 'middle', fill: C.muted });
  const tips = [['Chunks, not single words', '“It depends on …”, “On the one hand …”'], ['Pause at phrase boundaries', 'after “In my opinion,”, not mid-verb'], ['Target-language fillers', 'not “um” or your home language']];
  tips.forEach(([h, d], i) => {
    const xx = 30 + i * 285, w = 270;
    b += panel(xx, 380, w, 110, '#eaf3f1', C.tealDark) + t(xx + 18, 416, h, { size: 17, weight: 700 }) + tl(xx + 18, 444, wrap(d, 30), { size: 15, italic: true }, 19);
  });
  b += panel(30, 510, 840, 100, C.cream, C.olive) + t(55, 546, 'Accuracy: safe, then stretch', { size: 18, weight: 700 }) +
    t(55, 576, 'open with a structure you control, then try one complex form (a conditional, a relative clause).', { size: 16 });
  add('05-fluency-drill',
    svg(900, 635, 'Building fluency: the 4-3-2 drill', b),
    'Three bars of 4, 3 and 2 minutes for the same stimulus, nine minutes in all, so the same ideas come out more smoothly each round. Tips: learn chunks, pause at phrase boundaries and use target-language fillers. For accuracy, open with a safe structure, then stretch to one more complex form.',
    'Say the same ideas in less time to make them flow.',
    '## Fluency');
}

// 06 Weekly preparation routine
{
  const st = [['Collect stimuli', 'posters, adverts, infographics linked to the global contexts'], ['Two-minute read', 'five words for the image, five for the text'], ['Speak with a partner', 'one interprets; the other asks three follow-ups; swap'], ['Record and review', 'play back for content, errors, pauses; note three fixes'], ['4-3-2 drill', 'one stimulus a week'], ['Refresh the phrase bank', 'interaction strategies in your target language']];
  const cx = 450, cy = 400, R = 230;
  let b = `<ellipse cx="${cx}" cy="${cy}" rx="${R + 60}" ry="${R}" fill="none" stroke="${C.teal}" stroke-width="12"/>`;
  st.forEach(([h, d], i) => {
    const a = (-90 + i * 60) * Math.PI / 180, x = cx + (R + 60) * Math.cos(a), y = cy + R * Math.sin(a);
    b += box(x - 140, y - 46, 280, 92, C.panel, C.ink, 2.5, 12) + badge(x - 112, y - 18, 17, String(i + 1), C.mustard) + t(x - 86, y - 11, h, { size: 17, weight: 700 }) + tl(x - 124, y + 18, wrap(d, 34), { size: 14.5, fill: C.muted }, 18);
  });
  b += box(cx - 100, cy - 44, 200, 88, C.cream, C.olive, 2.5, 44) + t(cx, cy - 6, 'every week,', { size: 18, weight: 700, anchor: 'middle' }) + t(cx, cy + 20, 'last term', { size: 18, weight: 700, anchor: 'middle' });
  add('06-weekly-routine',
    svg(900, 700, 'A weekly speaking routine', b),
    'A six-step weekly cycle for the last term: collect stimuli linked to the global contexts, a two-minute read listing words for the image and text, speak with a partner who asks follow-ups, record and review, do the 4-3-2 drill, and refresh the phrase bank in the target language.',
    'Train spontaneous speaking every week, not recitation.',
    '## How to prepare');
}
