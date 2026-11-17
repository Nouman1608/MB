import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-language-acquisition-multimodal-texts-and-visuals';
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

// 01 Five modes
{
  const m = [['Written', 'headlines, body text, captions, labels', 'the slogan on a poster', C.tealLight], ['Spoken', 'voice, tone, pace, accent, pauses', 'a presenter in a video', C.teal], ['Visual', 'photos, drawings, colour, icons, logos', 'a photo of a crowded beach', C.cream], ['Spatial', 'layout, position, size, white space, order', 'a headline placed above a photo', C.mustard], ['Aural', 'music, sound effects, silence', 'traffic noise under a voice-over', C.tealLight]];
  let b = '';
  m.forEach(([h, d, e, f], i) => {
    const x = 30 + i * 172, w = 158;
    b += box(x, 110, w, 260, f, C.ink, 2.5, 12) + t(x + w / 2, 148, h, { size: 20, weight: 700, anchor: 'middle' });
    b += tl(x + w / 2, 186, wrap(d, 17), { size: 15, anchor: 'middle' }, 20) + `<line x1="${x + 14}" y1="268" x2="${x + w - 14}" y2="268" stroke="${C.ink}" stroke-width="1.2" opacity="0.4"/>` + tl(x + w / 2, 296, wrap('e.g. ' + e, 17), { size: 14.5, anchor: 'middle', italic: true }, 19);
  });
  b += panel(30, 390, 840, 92, C.cream, C.olive) + t(450, 428, 'Multimodal = two or more modes combined', { size: 20, weight: 700, anchor: 'middle' }) + t(450, 458, 'posters, leaflets, web pages, infographics, adverts, video clips, comics', { size: 16, anchor: 'middle' });
  b += panel(30, 500, 840, 96, '#eaf3f1', C.tealDark) + t(55, 534, 'In the brief', { size: 16, weight: 700, fill: C.tealDark }) +
    t(55, 564, 'A: images and spatial aspects with oral text · B: written, spatial and visual aspects', { size: 16.5 });
  add('01-five-modes',
    svg(900, 620, 'Five modes that carry meaning', b),
    'Five modes: written (headlines, captions), spoken (voice, tone, pace), visual (photos, colour, icons), spatial (layout, position, size, white space) and aural (music, sound effects, silence). A text is multimodal when it combines two or more. Criteria A and B both include visual and spatial aspects.',
    'Visuals and layout are part of the meaning, not decoration.',
    '## 1. What makes a text multimodal');
}

// 02 Visual checklist
{
  const el = [['Subject', 'who is the focus? what are they doing?'], ['Foreground / background', 'what is placed first?'], ['Shot distance', 'close-up, mid or long: why?'], ['Angle', 'high, eye-level, low: powerful or small?'], ['Gaze', 'invited in, or watching from outside?'], ['Colour', 'what does it suggest in this culture?'], ['Typography', 'which words shout, which whisper?'], ['Layout', 'what does the eye see first, second, third?'], ['Symbols', 'what does each icon or sign stand for?']];
  let b = '';
  el.forEach(([h, q], i) => {
    const col = i % 3, row = Math.floor(i / 3);
    const x = 30 + col * 285, y = 110 + row * 124, w = 270;
    b += panel(x, y, w, 110, row === 1 ? C.panel : C.panel, C.panelEdge) + t(x + 20, y + 38, h, { size: 18, weight: 700 }) + tl(x + 20, y + 66, wrap(q, 28), { size: 15, fill: C.muted }, 19);
  });
  // denotation -> connotation
  b += panel(30, 490, 840, 180, '#eaf3f1', C.tealDark);
  b += box(55, 516, 300, 130, C.panel, C.tealDark, 2, 12) + t(205, 548, 'Denotation', { size: 19, weight: 700, anchor: 'middle' }) + t(205, 572, 'what is literally there', { size: 15, anchor: 'middle', fill: C.muted }) + t(205, 612, '“a green headline”', { size: 17, italic: true, anchor: 'middle' });
  b += arrow(360, 581, 420, 581, { w: 4, color: C.tealDark, marker: 'ahT' }) + t(390, 566, 'then', { size: 15, anchor: 'middle', weight: 700, fill: C.tealDark });
  b += box(425, 516, 420, 130, C.cream, C.olive, 2, 12) + t(635, 548, 'Connotation', { size: 19, weight: 700, anchor: 'middle' }) + t(635, 572, 'what it suggests: depends on culture', { size: 15, anchor: 'middle', fill: C.muted }) + t(635, 612, 'nature, recycling or “go”', { size: 17, italic: true, anchor: 'middle' });
  add('02-describing-visuals',
    svg(900, 695, 'Describing a visual: what to notice', b),
    'Nine elements to check: subject, foreground and background, shot distance, angle, gaze, colour, typography, layout and symbols, each with a question. Then state the denotation, what is literally there (a green headline), before the connotation, what it suggests (nature, recycling or “go”), which depends on culture.',
    'Describe precisely first; connotation without a named detail is just opinion.',
    '## 2. Describing visual elements');
}

// 03 Four relationships
{
  const r = [
    ['Anchor', 'words fix the meaning of an open image', 'empty beach + “Escape the crowds” = peace; + “Where did the tourists go?” = loss', C.mustard],
    ['Reinforce', 'words and image say the same thing', 'the message gets stronger', C.tealLight],
    ['Extend', 'one mode adds what the other does not give', 'infographic chart shows the scale; text gives the reason', C.teal],
    ['Contrast', 'words and image pull against each other', 'often for humour, irony or shock', '#f4d9c8'],
  ];
  let b = '';
  r.forEach(([h, d, e, f], i) => {
    const y = 110 + i * 134;
    b += box(30, y, 210, 118, f, C.ink, 2.5, 12) + t(135, y + 68, h, { size: 23, weight: 700, anchor: 'middle' });
    b += panel(254, y, 616, 118) + t(276, y + 40, d, { size: 18, weight: 700 }) + tl(276, y + 72, wrap(e, 66), { size: 16, italic: true, fill: C.tealDark }, 21);
  });
  add('03-word-image-relationships',
    svg(900, 660, 'Four ways words and images work together', b),
    'Four relationships: anchor, where words fix an open image’s meaning (an empty beach reads as peace or loss depending on the caption); reinforce, where both say the same thing; extend, where one mode adds information the other lacks; and contrast, where they pull against each other for humour, irony or shock.',
    'Name the relationship before you explain its effect.',
    '## 3. How words and images work together');
}

// 04 Charity run leaflet
{
  const lx = 60, ly = 130, lw = 330;
  let b = panel(30, 110, 390, 560);
  b += box(lx, ly, lw, 520, '#fff', C.ink, 2.5, 6);
  b += `<rect x="${lx + 16}" y="${ly + 16}" width="${lw - 32}" height="48" fill="${C.muted}"/>` + t(lx + lw / 2, ly + 47, 'YOU ARE NOT RUNNING ALONE.', { size: 17, anchor: 'middle', weight: 400, fill: '#fff' });
  b += `<rect x="${lx + 16}" y="${ly + 70}" width="${lw - 32}" height="280" fill="#9aa5ad"/>`;
  b += `<path d="M${lx + 16},${ly + 350} L${lx + 140},${ly + 200} L${lx + 190},${ly + 200} L${lx + lw - 16},${ly + 350} Z" fill="#7d8792"/>`;
  [0, 1, 2, 3, 4, 5].forEach((k) => { b += `<line x1="${lx + 40 + k * 50}" y1="${ly + 80}" x2="${lx + 30 + k * 50}" y2="${ly + 110}" stroke="#cfd6db" stroke-width="2"/>`; });
  b += `<circle cx="${lx + 165}" cy="${ly + 228}" r="10" fill="${C.ink}"/>` + path(`M${lx + 165},${ly + 238} L${lx + 162},${ly + 270} M${lx + 162},${ly + 270} L${lx + 150},${ly + 296} M${lx + 162},${ly + 270} L${lx + 176},${ly + 294} M${lx + 164},${ly + 248} L${lx + 150},${ly + 262} M${lx + 164},${ly + 248} L${lx + 180},${ly + 258}`, { w: 4 });
  for (let k = 0; k < 40; k++) { const x = lx + 26 + (k % 20) * 14.8, y = ly + 380 + Math.floor(k / 20) * 34; b += `<circle cx="${x}" cy="${y}" r="4" fill="${C.rust}"/><rect x="${x - 4}" y="${y + 5}" width="8" height="14" rx="3" fill="${C.rust}"/>`; }
  b += t(lx + lw / 2, ly + 480, 'Join 40 neighbours this Sunday.', { size: 16, anchor: 'middle', weight: 600 });
  const steps = [
    ['1 Describe', 'long shot, one runner, wet road, low light, low angle; thin white capitals; 40 orange icons', '#fff', C.panelEdge],
    ['2 Relationship', 'headline CONTRASTS with the lone runner; icons EXTEND it by showing the 40 others', C.cream, C.olive],
    ['3 Interpret', 'loneliness first, then the solution: a group; warm orange against grey links the group to energy', '#eaf3f1', C.tealDark],
    ['4 Values and attitudes', 'values community and mutual support; encouraging to a reader who may feel isolated', '#eaf3f1', C.tealDark],
  ];
  steps.forEach(([h, d, f, e], i) => {
    const y = 110 + i * 142;
    b += box(440, y, 430, 128, f, e, 2, 12) + t(460, y + 34, h, { size: 18, weight: 700 }) + tl(460, y + 62, wrap(d, 46), { size: 15.5 }, 20);
  });
  add('04-charity-run-leaflet',
    svg(900, 700, 'Worked example: the charity run leaflet', b),
    'A schematic leaflet: a lone runner on a rainy road photographed from a low angle, the headline “YOU ARE NOT RUNNING ALONE.” in thin white capitals, and forty orange runner icons with “Join 40 neighbours this Sunday.” The analysis describes it, names the relationships (the headline contrasts with the photo; the icons extend it), interprets the move from loneliness to a group, and identifies values of community and support.',
    'Describe, name the relationship, interpret, then identify values and attitudes.',
    '### Worked example');
}

// 05 Library video: heard / saw
{
  let b = '';
  const tl0 = 150, tl1 = 850, ty = 200;
  b += `<line x1="${tl0}" y1="${ty}" x2="${tl1}" y2="${ty}" stroke="${C.ink}" stroke-width="3" marker-end="url(#ah)"/>` + t(tl1, ty - 14, 'time', { size: 15, anchor: 'end', fill: C.muted });
  const rows = [['HEARD', ['“Our library is quiet.” (calm)', '“But it’s never boring.”'], C.tealLight], ['SAW', ['teenagers laughing round a game table', '–'], C.cream], ['MUSIC', ['–', 'upbeat music starts on “but”'], C.teal]];
  rows.forEach(([h, cells, f], j) => {
    const y = 230 + j * 100;
    b += chip(30, y, 105, 80, h, f, { size: 16 });
    cells.forEach((c, i) => { const x = 150 + i * 355; b += box(x, y, 340, 80, C.panel, C.panelEdge, 2, 10) + tl(x + 18, y + 34 + (wrap(c, 34).length === 1 ? 10 : 0), wrap(c, 34), { size: 16, italic: j === 0 }, 21); });
  });
  b += `<line x1="497" y1="${ty - 20}" x2="497" y2="525" stroke="${C.rust}" stroke-width="3" stroke-dasharray="8 6"/>` + t(497, ty - 28, 'the turn', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
  b += panel(30, 545, 840, 120, '#eaf3f1', C.tealDark) + t(55, 580, 'Interpretation', { size: 18, weight: 700, fill: C.tealDark }) +
    tl(55, 610, ['The image contrasts with “quiet”; the music marks the turn. Aimed at young people who think', 'libraries are dull: it keeps quiet study and adds a social space.'], { size: 16 }, 22);
  b += t(450, 140, 'Note what you SAW at the moment you HEARD a key phrase', { size: 18, weight: 600, anchor: 'middle', fill: C.muted });
  add('05-library-video-heard-saw',
    svg(900, 690, 'Spoken multimodal text: heard, saw, music', b),
    'A timeline of a library video in rows for what is heard, seen and played. A calm voice says “Our library is quiet” while teenagers laugh around a game table; upbeat music starts on “but”: “But it’s never boring.” The image contrasts with the words and the music marks the turn, aiming the video at young people who think libraries are dull.',
    'Pair what you heard with what was on screen at the same moment.',
    '## 4. Sound and image in spoken multimodal texts');
}

// 06 Notice, connect, explain by level
{
  const st = [['Notice', 'one specific detail (denotation)', '“In the foreground …”', C.tealLight], ['Connect', 'to the words or the sound', '“This contrasts with …”', C.teal], ['Explain', 'effect on the audience; idea, value or attitude', '“This suggests … because …”', C.mustard]];
  let b = '';
  st.forEach(([h, d, f2, f], i) => {
    const x = 30 + i * 285, w = 265;
    b += box(x, 110, w, 150, f, C.ink, 2.5, 12) + t(x + w / 2, 148, h, { size: 22, weight: 700, anchor: 'middle' }) + tl(x + w / 2, 178, wrap(d, 28), { size: 15 }, 19).replace(/text-anchor="start"/g, 'text-anchor="middle"') + t(x + w / 2, 238, f2, { size: 15, italic: true, anchor: 'middle' });
    if (i < 2) b += arrow(x + w + 2, 185, x + 283, 185, { w: 3 });
  });
  const lv = [['Emergent', 'describe and give one simple reason', '“There is a man. He is happy. The poster is positive.”'], ['Capable', 'link the visual to the words; explain the purpose', '“The man is smiling because the poster wants to show that repairing is fun.”'], ['Proficient', 'implicit attitudes, effect on an audience, compare modes', '“The smiling faces soften the command in the headline, so the message feels like an invitation rather than a rule.”']];
  b += t(450, 300, 'How far you take it depends on your level (a rough guide)', { size: 17, weight: 700, anchor: 'middle' });
  lv.forEach(([h, d, e], i) => {
    const y = 318 + i * 116;
    b += box(30, y, 190, 102, [C.tealLight, C.teal, C.mustard][i], C.ink, 2.2, 12) + t(125, y + 58, h, { size: 19, weight: 700, anchor: 'middle' });
    b += panel(234, y, 636, 102) + t(254, y + 32, d, { size: 16, weight: 700 }) + tl(254, y + 60, wrap(e, 72), { size: 15.5, italic: true, fill: C.tealDark }, 20);
  });
  add('06-notice-connect-explain',
    svg(900, 690, 'Notice, connect, explain', b),
    'A three-step method: notice one specific detail, connect it to the words or sound, and explain its effect and the values behind it. Below, model sentences at each level: emergent describes with one simple reason; capable links the visual to the words and the purpose; proficient interprets implicit attitudes and compares modes.',
    'The method is the same at every level; the depth of explanation grows.',
    '## 5. From description to interpretation: a method');
}
