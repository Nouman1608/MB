import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'a-level-edexcel-urdu-listening-reading-writing';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- local helpers (shared look across the OxfordAQA / Edexcel Urdu set) ----
const wrap = (s, n) => { const out = ['']; for (const w of s.split(' ')) { const c = out[out.length - 1]; if (c && (c + ' ' + w).length > n) out.push(w); else out[out.length - 1] = c ? c + ' ' + w : w; } return out; };
const wt = (x, y, s, n, opts = {}, lh) => tl(x, y, wrap(s, n), opts, lh || (opts.size || 18) * 1.3);
const box = (x, y, w, h, fill, edge, sw = 2.5, rx = 12) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;

// Urdu text: always its own <text>, right-aligned or centred, Nastaliq
const u = (x, y, s, { size = 26, anchor = 'end', fill = C.ink, weight = 400 } = {}) =>
  `<text x="${x}" y="${y}" font-family="Noto Nastaliq Urdu" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}">\u200F${s}\u200F</text>`; // RLM marks keep leading/trailing punctuation on the correct side
// Urdu-over-English vocabulary chip
const vchip = (x, y, w, ur, en, fill = C.panel, edge = C.panelEdge) => box(x, y, w, 100, fill, edge, 2.5, 12) + u(x + w / 2, y + 46, ur, { size: 24, anchor: 'middle' }) + t(x + w / 2, y + 84, en, { size: 15, anchor: 'middle', fill: C.muted });
// Sentence row (stacked): English label top-left (+ extra markup), Urdu example right-aligned on its own line, English gloss beneath
const srow = (y, label, ur, gloss, { extra = '', fill = C.panel, edge = C.panelEdge, size = 24, h = 140 } = {}) =>
  box(30, y, 840, h, fill, edge, 2.5, 14) + t(52, y + 38, label, { size: 19, weight: 700 }) + extra +
  u(846, y + h - 52, ur, { size }) + t(846, y + h - 16, gloss, { size: 16, anchor: 'end', fill: C.muted, italic: true });
const tick = (x, y) => `<circle cx="${x}" cy="${y}" r="15" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + path(`M${x - 7},${y} l5,6 l10,-12`, { stroke: C.tealDark, w: 3.5 });
const cross = (x, y) => `<circle cx="${x}" cy="${y}" r="15" fill="#f6ece4" stroke="${C.rust}" stroke-width="2.5"/>` + path(`M${x - 6},${y - 6} l12,12 m0,-12 l-12,12`, { stroke: C.rust, w: 3.5 });

// 01 Paper 3 structure and timing
{
  let b = box(30, 110, 840, 70, C.cream, C.olive, 2.5, 14) + t(54, 154, 'Paper 3 (9UR0/03)', { size: 22, weight: 700 }) +
    t(846, 154, '2 hours 15 minutes  ·  60 marks', { size: 20, weight: 700, anchor: 'end', fill: C.olive });
  // proportional time bar: 135 min over 840 px
  const W = 840, x0 = 30, aW = Math.round(W * 45 / 135);
  b += t(54, 222, 'Recommended time', { size: 17, weight: 600, fill: C.muted });
  b += box(x0, 236, aW, 64, C.teal, C.tealDark, 2.5, 10) + t(x0 + aW / 2, 276, '45 min', { size: 20, weight: 700, anchor: 'middle' });
  b += box(x0 + aW + 6, 236, W - aW - 6, 64, C.tealLight, C.tealDark, 2.5, 10) + t(x0 + aW + 6 + (W - aW - 6) / 2, 276, '1 hour 30 minutes', { size: 20, weight: 700, anchor: 'middle' });
  b += t(54, 340, 'Marks', { size: 17, weight: 600, fill: C.muted });
  b += box(x0, 354, 417, 54, C.panel, C.panelEdge, 2.5, 10) + t(x0 + 208, 389, '30 marks', { size: 19, weight: 700, anchor: 'middle' });
  b += box(x0 + 423, 354, 417, 54, C.panel, C.panelEdge, 2.5, 10) + t(x0 + 423 + 208, 389, '30 marks', { size: 19, weight: 700, anchor: 'middle' });
  const card = (x, w, head, sub, lines, fill, edge) => box(x, 430, w, 210, fill, edge, 2.5, 14) + t(x + 20, 466, head, { size: 21, weight: 700 }) + t(x + 20, 492, sub, { size: 17, weight: 600, fill: C.tealDark }) + tl(x + 20, 528, lines, { size: 16, fill: C.muted }, 22);
  b += card(30, 410, 'Section A', 'Listening Comprehension', ['understand spoken Urdu and answer', 'questions on what was heard', 'no translation or extended writing', 'students may stop and replay'], C.panel, C.panelEdge);
  b += card(460, 410, 'Section B', 'Listening, Reading and Writing', ['three skills combined in', 'one section', 'the longer, more demanding', 'section: give it matching practice'], C.cream, C.olive);
  b += t(450, 680, 'Equal marks, unequal time: plan practice to match', { size: 18, weight: 600, anchor: 'middle' });
  add('01-paper-3-structure',
    svg(900, 710, 'Paper 3 at a glance', b),
    'Paper 3 lasts 2 hours 15 minutes for 60 marks. Section A, Listening Comprehension, has 30 marks and a recommended 45 minutes; Section B, Listening, Reading and Writing, has 30 marks and a recommended 1 hour 30 minutes. The time bar is drawn to scale.',
    'Two sections with equal marks, but Section B gets twice the recommended time.',
    '## Where this fits in 9UR0');
}

// 02 Three papers, four skills
{
  let b = '';
  const papers = [
    ['Paper 1', ['Translation into English', 'Reading comprehension', 'Writing: research question'], C.panel, C.panelEdge],
    ['Paper 2', ['Translation into Urdu', 'Written response to works'], C.panel, C.panelEdge],
    ['Paper 3', ['Listening', 'Reading', 'Writing'], C.cream, C.olive],
  ];
  papers.forEach(([h, lines, fill, edge], i) => {
    const x = 30 + i * 287;
    b += box(x, 110, 266, 230, fill, edge, i === 2 ? 3 : 2.5, 14) + t(x + 133, 148, h, { size: 23, weight: 700, anchor: 'middle' });
    if (i === 1) b += t(x + 133, 300, 'literary texts and films', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
    lines.forEach((s, j) => {
      const y = 172 + j * 54;
      b += box(x + 16, y, 234, 44, i === 2 ? C.panel : C.tealLight, i === 2 ? C.olive : C.tealDark, 2, 10) + t(x + 133, y + 28, s, { size: 16, weight: 600, anchor: 'middle' });
    });
  });
  b += t(450, 384, 'Paper 3 has no translation; it integrates listening with reading and writing', { size: 18, weight: 600, anchor: 'middle' });
  b += box(30, 410, 410, 120, C.tealLight, C.tealDark, 2.5, 14) + t(52, 446, 'Strong at translation', { size: 20, weight: 700 }) + tl(52, 478, ['in Papers 1 and 2 ...'], { size: 16, fill: C.muted }, 21);
  b += box(460, 410, 410, 120, C.cream, C.olive, 2.5, 14) + t(482, 446, '... is not automatically strong', { size: 20, weight: 700 }) + tl(482, 478, ['at understanding spoken Urdu,', 'which needs a different', 'processing speed and skill'], { size: 16, fill: C.muted }, 21);
  b += arrow(440, 470, 458, 470, { w: 3 });
  add('02-three-papers-skills',
    svg(900, 556, 'How the three papers divide the skills', b),
    'Paper 1 tests translation into English, reading comprehension and research-question writing; Paper 2 tests translation into Urdu and written response to works; Paper 3 combines listening, reading and writing without translation. Strength at translation does not transfer automatically to listening.',
    'Paper 3 completes the four skills; translation practice alone will not prepare you for it.',
    '## How Paper 3 complements Papers 1 and 2');
}

// 03 Listening across registers
{
  let b = `<defs><linearGradient id="reg" x1="0" x2="1"><stop offset="0" stop-color="${C.teal}"/><stop offset="1" stop-color="${C.cream}"/></linearGradient></defs>`;
  b += `<rect x="60" y="176" width="780" height="40" rx="20" fill="url(#reg)" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += t(60, 162, 'Formal, news-style Urdu', { size: 19, weight: 700 }) + t(840, 162, 'Conversational spoken Urdu', { size: 19, weight: 700, anchor: 'end' });
  b += t(450, 122, 'Practise across speed and register, not one course voice', { size: 17, weight: 600, anchor: 'middle', fill: C.muted });
  [['News broadcasts', 150], ['Interviews', 450], ['Spoken narrative', 750]].forEach(([s, x]) => {
    b += `<circle cx="${x}" cy="196" r="9" fill="${C.ink}"/>` + box(x - 120, 270, 240, 56, C.panel, C.panelEdge, 2.5, 12) + t(x, 304, s, { size: 18, weight: 600, anchor: 'middle' }) + path(`M${x},206 V266`, { w: 2, stroke: C.muted, extra: 'stroke-dasharray="5 5"' });
  });
  b += box(30, 350, 840, 92, C.tealLight, C.tealDark, 2, 12) + t(54, 386, 'Read the question before the audio plays', { size: 19, weight: 700 }) +
    t(54, 416, 'wherever the format allows: you then know what specific information to listen for', { size: 16, fill: C.muted });
  add('03-listening-registers',
    svg(900, 470, 'Building listening stamina', b),
    'A scale from formal, news-style Urdu to conversational spoken Urdu, with news broadcasts, interviews and spoken narrative along it. Practise across speed and register, and read each question before the audio plays where the format allows.',
    'Listen across registers, and read the question first so you know what to listen for.',
    '## Building listening stamina and technique');
}

// 04 Section B: from source to writing
{
  let b = '';
  const steps = [['Listen or read', 'the source'], ['Take accurate', 'notes'], ['Use the notes', 'to build the answer'], ['Write the', 'response']];
  steps.forEach(([a, c], i) => {
    const x = 30 + i * 216, hi = i === 1 || i === 2;
    b += box(x, 130, 192, 130, hi ? C.cream : C.panel, hi ? C.olive : C.panelEdge, 2.5, 14) + badge(x + 30, 160, 18, String(i + 1), C.cream) +
      t(x + 96, 210, a, { size: 18, weight: 700, anchor: 'middle' }) + t(x + 96, 234, c, { size: 18, weight: 700, anchor: 'middle' });
    if (i < 3) b += arrow(x + 194, 195, x + 214, 195, { w: 3 });
  });
  b += path('M222,278 V300 H654 V278', { w: 3, stroke: C.olive }) + t(438, 326, 'one connected skill, not two disconnected stages', { size: 17, weight: 600, anchor: 'middle', fill: C.olive });
  b += box(30, 356, 840, 110, '#f6ece4', C.rust, 2.5, 12) + t(54, 392, 'Common trap', { size: 19, weight: 700, fill: C.rust }) +
    t(54, 420, 'spending most revision on Section A and treating Section B as an afterthought', { size: 17 }) +
    t(54, 446, 'leaves half the marks under-practised in the longest section', { size: 17 });
  add('04-section-b-notes-to-writing',
    svg(900, 494, 'Section B: from source to answer', b),
    'Four linked steps for Section B: listen to or read the source, take accurate notes, use those notes to build the answer, and write the response. Treating Section B as an afterthought leaves half the marks under-practised.',
    'Practise note-taking and writing as one skill, under the same timing.',
    "## Approaching Section B's combined tasks");
}

// 05 Using replay control inside 45 minutes
{
  let b = t(450, 128, 'Section A: students "may stop, revisit and replay sections of the recording"', { size: 17, italic: true, anchor: 'middle', fill: C.muted });
  const steps = [
    ['Missed a detail?', 'note roughly where it fell'],
    ['Keep going', 'finish the passage'],
    ['Go back', 'replay just that section'],
  ];
  steps.forEach(([a, c], i) => {
    const x = 30 + i * 290;
    b += box(x, 150, 260, 120, i === 2 ? C.tealLight : C.panel, i === 2 ? C.tealDark : C.panelEdge, 2.5, 14) + t(x + 130, 198, a, { size: 20, weight: 700, anchor: 'middle' }) + t(x + 130, 228, c, { size: 17, anchor: 'middle', fill: C.muted });
    if (i < 2) b += arrow(x + 262, 210, x + 288, 210, { w: 3.5 });
  });
  b += box(30, 290, 840, 70, '#f6ece4', C.rust, 2.5, 12) + cross(66, 325) + t(96, 332, 'Replaying whole passages from the start: every replay uses time', { size: 18, weight: 600 });
  b += box(30, 380, 840, 70, C.cream, C.olive, 2.5, 12) + t(54, 422, 'Rehearse with audio you can pause and replay, inside a 45-minute limit', { size: 18, weight: 600 });
  b += t(450, 490, 'Then practise full timed sittings: 2 hours 15 minutes across both sections', { size: 17, weight: 600, anchor: 'middle' });
  add('05-replay-control',
    svg(900, 516, 'Replaying without losing time', b),
    'For Section A: when a detail is missed, note roughly where it fell, finish the passage, then replay just that section, rather than replaying whole passages. Rehearse with pausable audio inside 45 minutes, then practise full timed sittings.',
    'Replay just the section you missed, and keep inside the 45 minutes.',
    '## How to approach it');
}
