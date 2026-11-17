import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-english-language-1123-descriptive-composition';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// local helpers
const wrap = (s, n) => {
  const out = [''];
  for (const w of s.split(' ')) {
    const cur = out[out.length - 1];
    if (cur && (cur + ' ' + w).length > n) out.push(w); else out[out.length - 1] = cur ? cur + ' ' + w : w;
  }
  return out;
};
const para = (x, y, s, n, opts = {}, lh) => tl(x, y, wrap(s, n), opts, lh || (opts.size || 18) * 1.32);
const box = (x, y, w, h, fill = C.panel, edge = C.panelEdge, rx = 12) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>`;
const kbadge = (cx, cy, r, label, fill = C.cream) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + t(cx, cy + 7, label, { size: 19, weight: 700, anchor: 'middle' });
const pill = (x, y, w, h, s, { fill = C.cream, edge = C.olive, size = 17, weight = 600, color = C.ink } = {}) =>
  box(x, y, w, h, fill, edge, h / 2) + t(x + w / 2, y + h / 2 + size * 0.36, s, { size, weight, anchor: 'middle', fill: color });

// 01 What the task asks
{
  let b = panel(30, 110, 840, 128);
  b += t(55, 146, 'Section B: answer ONE question from a choice of four', { size: 20, weight: 700 });
  [['Descriptive', true], ['Descriptive', true], ['Narrative', false], ['Narrative', false]].forEach(([s, on], i) => {
    b += pill(55 + i * 150, 168, 136, 44, s, on ? { fill: C.mustard, edge: C.ink, size: 17, weight: 700 } : { fill: C.panel, edge: C.panelEdge, size: 17, weight: 500, color: C.muted });
  });
  b += box(680, 160, 168, 60, C.tealLight, C.tealDark) + t(764, 185, 'about 350–450', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(764, 208, 'words · 25 marks', { size: 16, weight: 600, anchor: 'middle', fill: C.tealDark });

  b += t(450, 284, 'The syllabus definition, broken into targets', { size: 21, weight: 700, anchor: 'middle' });
  const rows = [
    ['“a person, place or situation”', 'the subject of the piece'],
    ['“including atmosphere”', 'the mood of the scene, not just its contents'],
    ['“in detail”', 'specific, chosen details, not general statements'],
    ['“so that the reader can picture it”', 'the test of every sentence'],
  ];
  rows.forEach(([q, g], i) => {
    const y = 306 + i * 70;
    b += box(30, y, 360, 56, C.cream, C.olive) + t(210, y + 34, q, { size: 18, weight: 700, anchor: 'middle' });
    b += arrow(398, y + 28, 436, y + 28, { w: 3.5 });
    b += box(446, y, 424, 56) + t(464, y + 34, g, { size: 17 });
  });

  b += t(450, 618, 'Marked on four writing objectives', { size: 21, weight: 700, anchor: 'middle' });
  const obj = [
    ['W1', 'articulate experience and express', 'what is thought, felt and imagined'],
    ['W2', 'organise and structure ideas and', 'opinions for deliberate effect'],
    ['W3', 'a range of vocabulary and sentence', 'structures appropriate to context'],
    ['W5', 'accurate spelling, punctuation', 'and grammar'],
  ];
  obj.forEach(([k, a, c], i) => {
    const x = 30 + (i % 2) * 425, y = 640 + Math.floor(i / 2) * 96;
    b += panel(x, y, 415, 84) + kbadge(x + 44, y + 42, 26, k, C.cream);
    b += tl(x + 84, y + 36, [a, c], { size: 16, fill: C.ink }, 22);
  });
  b += box(30, 840, 840, 50, C.bg, C.panelEdge) + t(450, 871, 'W4 (register) is not assessed in Section B.', { size: 17, fill: C.muted, anchor: 'middle', weight: 600 });
  add('01-task-and-definition',
    svg(900, 915, 'The descriptive composition: what is asked', b),
    'Section B offers four questions, two descriptive and two narrative, and one is answered in about 350 to 450 words for 25 marks. The definition splits into four targets: the subject, the atmosphere, specific detail and the reader picturing it; the piece is marked on W1, W2, W3 and W5, with W4 not assessed.',
    'Every phrase of the definition is a target, and four writing objectives carry the 25 marks.',
    '## What the definition asks of you');
}

// 02 Description is not a story
{
  let b = '';
  b += box(270, 112, 360, 64, C.cream, C.olive) + t(450, 151, 'You find yourself writing “and then”', { size: 18, weight: 700, anchor: 'middle' });
  b += arrow(450, 176, 450, 214, { w: 3.5 });
  b += `<path d="M450,218 L600,278 L450,338 L300,278 Z" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  b += t(450, 274, 'Am I still', { size: 19, weight: 700, anchor: 'middle' }) + t(450, 298, 'describing?', { size: 19, weight: 700, anchor: 'middle' });
  b += path('M300,278 L190,278 L190,370', { w: 3.5, stroke: C.tealDark, extra: 'marker-end="url(#ahT)"' });
  b += path('M600,278 L710,278 L710,370', { w: 3.5, stroke: C.rust, extra: 'marker-end="url(#ahR)"' });
  b += t(245, 266, 'yes', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(655, 266, 'no', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  // left
  b += box(30, 378, 405, 290, C.tealLight, C.tealDark);
  b += t(55, 414, 'A small event serves the picture', { size: 20, weight: 700, fill: C.tealDark });
  b += para(55, 446, 'Events are allowed, but they are not the point. If something happens, it should be small.', 40, { size: 17 }, 23);
  b += pill(55, 520, 220, 42, 'a gust of wind', { fill: C.panel, edge: C.tealDark });
  b += pill(55, 574, 220, 42, 'a stall closing', { fill: C.panel, edge: C.tealDark });
  b += t(55, 650, 'The scene stays the subject.', { size: 17, weight: 600, fill: C.tealDark });
  // right
  b += box(465, 378, 405, 290, C.panel, C.rust);
  b += t(490, 414, 'Drift into narrative', { size: 20, weight: 700, fill: C.rust });
  b += para(490, 446, 'The commonest weakness in descriptive answers: a plot takes over.', 40, { size: 17 }, 23);
  b += t(565, 524, 'starts at', { size: 16, fill: C.muted, anchor: 'middle' }) + t(771, 524, 'ends with', { size: 16, fill: C.muted, anchor: 'middle' });
  b += box(490, 536, 150, 64, C.cream, C.olive) + t(565, 574, 'a market', { size: 17, weight: 700, anchor: 'middle' });
  b += arrow(648, 568, 688, 568, { w: 3.5, color: C.rust, marker: 'ahR' });
  b += box(696, 536, 150, 64, '#f6e3d6', C.rust) + t(771, 574, 'a chase', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  b += t(490, 650, 'The story has replaced the picture.', { size: 17, weight: 600, fill: C.rust });
  add('02-description-not-story',
    svg(900, 700, 'Description is not a story', b),
    'A check for the words “and then”: if you are still describing, a small event such as a gust of wind or a stall closing serves the picture; if not, the piece has drifted into narrative, like an answer that starts at a market and ends with a chase.',
    'Small events can serve a description; a plot that takes over cannot.',
    '## Description is not a story');
}

// 03 Six structures without plot
{
  const cw = 410, ch = 232;
  const card = (i, title, suits, art) => {
    const x = 30 + (i % 2) * 430, y = 110 + Math.floor(i / 2) * (ch + 16);
    return panel(x, y, cw, ch) + t(x + 22, y + 36, title, { size: 21, weight: 700 }) + art(x, y) +
      t(x + 22, y + ch - 20, 'Suits: ' + suits, { size: 16, fill: C.muted, italic: true });
  };
  const lab = (x, y, s, o = {}) => t(x, y, s, { size: 15, anchor: 'middle', fill: C.ink, ...o });
  const zoom = (x, y) => {
    let s = box(x + 30, y + 58, 150, 112, C.tealLight, C.tealDark, 6) + lab(x + 105, y + 190, 'wide view');
    s += arrow(x + 186, y + 114, x + 214, y + 114, { w: 3 });
    s += box(x + 222, y + 80, 86, 68, C.tealLight, C.tealDark, 6) + lab(x + 265, y + 168, 'closer');
    s += arrow(x + 314, y + 114, x + 338, y + 114, { w: 3 });
    s += box(x + 346, y + 98, 36, 32, C.mustard, C.ink, 4) + lab(x + 364, y + 150, 'one');
    return s + lab(x + 364, y + 168, 'detail');
  };
  const timel = (x, y) => {
    const sky = [['dawn', C.cream, 'sun', 150], ['noon', C.tealLight, 'sun', 82], ['night', C.blue, 'moon', 92]];
    return sky.map(([n, f, k, sy], i) => {
      const bx = x + 22 + i * 130;
      return box(bx, y + 60, 100, 108, f, C.ink, 6) +
        (k === 'sun' ? `<circle cx="${bx + 50}" cy="${y + (sy === 150 ? 130 : sy)}" r="16" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` : `<circle cx="${bx + 66}" cy="${y + sy}" r="12" fill="#ffffff"/>`) +
        `<rect x="${bx}" y="${y + 144}" width="100" height="24" fill="${C.rock}" stroke="${C.ink}" stroke-width="2"/>` +
        lab(bx + 50, y + 188, n) + (i < 2 ? arrow(bx + 103, y + 114, bx + 127, y + 114, { w: 2.5 }) : '');
    }).join('');
  };
  const journey = (x, y) => {
    let s = box(x + 40, y + 56, 330, 116, C.cream, C.ink, 4);
    s += `<rect x="${x + 70}" y="${y + 162}" width="44" height="14" fill="${C.panel}"/>`;
    s += path(`M${x + 92},${y + 160} L${x + 205},${y + 114} L${x + 322},${y + 76}`, { w: 3, stroke: C.tealDark, extra: 'stroke-dasharray="7 6"' });
    s += [[92, 160], [205, 114], [330, 74]].map(([a, c]) => `<circle cx="${x + a}" cy="${y + c}" r="8" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`).join('');
    s += lab(x + 92, y + 192, 'entrance') + t(x + 218, y + 140, 'centre', { size: 15 }) + lab(x + 316, y + 108, 'far corner');
    return s;
  };
  const senses = (x, y) => ['sight', 'sound', 'smell', 'touch'].map((n, i) => {
    const cx = x + 62 + i * 96;
    return `<circle cx="${cx}" cy="${y + 112}" r="36" fill="${i === 0 ? C.mustard : C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` +
      lab(cx, y + 118, n, { size: 16, weight: 600 }) + (i < 3 ? arrow(cx + 38, y + 112, cx + 57, y + 112, { w: 2.5 }) : '');
  }).join('');
  const before = (x, y) => {
    const st = [[['the scene'], C.tealLight], [['interruption'], C.mustard], [['the scene', 'changed'], C.teal]];
    return st.map(([n, f], i) => {
      const bx = x + 20 + i * 130;
      const tx = n.length === 1 ? lab(bx + 52, y + 125, n[0], { size: 15, weight: 600 }) : lab(bx + 52, y + 115, n[0], { size: 15, weight: 600 }) + lab(bx + 52, y + 134, n[1], { size: 15, weight: 600 });
      return box(bx, y + 86, 104, 66, f, C.ink, 8) + tx + (i < 2 ? arrow(bx + 106, y + 119, bx + 128, y + 119, { w: 2.5 }) : '');
    }).join('');
  };
  const circ = (x, y) => {
    const cx = x + 205, cy = y + 114, r = 54;
    let s = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${C.tealDark}" stroke-width="3.5" stroke-dasharray="1 0"/>`;
    s += path(`M${cx - 8},${cy - r} L${cx + 6},${cy - r}`, { w: 3.5, stroke: C.tealDark, extra: 'marker-end="url(#ahT)"' });
    s += `<circle cx="${cx - r}" cy="${cy}" r="9" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += t(cx - r - 18, cy - 4, 'begin and', { size: 15, anchor: 'end' }) + t(cx - r - 18, cy + 15, 'end here', { size: 15, anchor: 'end' });
    s += t(cx + r + 18, cy - 4, 'mood has', { size: 15, fill: C.tealDark, weight: 600 }) + t(cx + r + 18, cy + 15, 'changed', { size: 15, fill: C.tealDark, weight: 600 });
    return s;
  };
  let b = '';
  b += card(0, 'Zoom', 'places, crowds', zoom);
  b += card(1, 'Time-lapse', 'a street, a beach, a school', timel);
  b += card(2, 'Journey through space', 'a building, a market, a garden', journey);
  b += card(3, 'Senses in turn', 'a kitchen, a festival', senses);
  b += card(4, 'Before and after', 'a storm, an arrival', before);
  b += card(5, 'Circular', 'any title', circ);
  b += box(30, 862, 840, 54, C.tealLight, C.tealDark) + t(450, 896, 'Each paragraph is one stage, so the reader always knows where they are.', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('03-six-structures',
    svg(900, 940, 'Six structures that work without plot', b),
    'Six ways to shape a description: zoom from a wide view to one detail, time-lapse of one place at dawn, noon and night, a journey from entrance to far corner, the senses in turn, before and after an interruption, and a circular piece that ends where it began with the mood changed.',
    'Pick a structure before you write; each paragraph becomes one stage of it.',
    '## Structures that work without plot');
}

// 04 Detail that does work
{
  let b = panel(30, 110, 840, 124);
  b += t(55, 146, 'General words give the reader nothing to picture', { size: 19, weight: 700 });
  [['nice', 70], ['busy', 76], ['beautiful', 108], ['lots of', 86]].forEach(([s, w], i, a) => {
    const x = 55 + a.slice(0, i).reduce((q, [, ww]) => q + ww + 12, 0);
    b += pill(x, 166, w, 42, s, { fill: '#f6e3d6', edge: C.rust, size: 16, color: C.rust });
  });
  b += t(470, 194, '→ replace them with specific words', { size: 17, fill: C.tealDark, weight: 600 });
  const swaps = [
    ['Specific noun', 'food', 'skewers of charred corn'],
    ['Specific noun', 'a bird', 'a crow'],
    ['Precise verb', 'the smoke went up', 'the smoke unravelled into the dark'],
  ];
  swaps.forEach(([k, a, c], i) => {
    const y = 254 + i * 84;
    b += panel(30, y, 840, 70);
    b += t(55, y + 42, k, { size: 17, weight: 700, fill: C.olive });
    b += t(220, y + 42, a, { size: 18, fill: C.rust });
    b += `<line x1="218" y1="${y + 36}" x2="${222 + a.length * 9}" y2="${y + 36}" stroke="${C.rust}" stroke-width="2"/>`;
    b += arrow(395, y + 36, 440, y + 36, { w: 3.5, color: C.tealDark, marker: 'ahT' });
    b += box(452, y + 12, 400, 46, C.tealLight, C.tealDark, 10) + t(470, y + 42, a === 'food' || a === 'a bird' ? c : c, { size: 18, weight: 700, fill: C.tealDark });
  });
  const tips = [
    ['Selected senses', 'One striking sound or smell is worth more than five listed ones.'],
    ['Figurative language', 'Use it sparingly: one fresh simile per paragraph is plenty; three in one sentence is clutter.'],
    ['People in the scene', 'A single figure doing something characteristic brings a place alive.'],
  ];
  tips.forEach(([h, d], i) => {
    const x = 30 + i * 285, y = 522;
    b += panel(x, y, 270, 160) + t(x + 20, y + 36, h, { size: 18, weight: 700 });
    b += para(x + 20, y + 72, d, 27, { size: 16, fill: C.muted }, 22);
  });
  add('04-specific-detail',
    svg(900, 708, 'Detail that does work', b),
    'General words such as nice, busy, beautiful and lots of are replaced with specific nouns and precise verbs: food becomes skewers of charred corn, a bird becomes a crow, and the smoke went up becomes the smoke unravelled into the dark. Three further tools: selected senses, sparing figurative language and a single person in the scene.',
    'Swap the general word for the specific one the reader can see.',
    '## Detail that does work');
}

// 05 Building atmosphere
{
  let b = '';
  b += box(300, 110, 300, 60, C.cream, C.olive) + t(450, 147, 'A market at dawn', { size: 21, weight: 700, anchor: 'middle' });
  b += t(450, 204, 'Decide the mood first, then select details that point that way.', { size: 17, anchor: 'middle', fill: C.muted });
  b += path('M300,140 L110,140 L110,236', { w: 3.5, stroke: C.tealDark, extra: 'marker-end="url(#ahT)"' });
  b += path('M600,140 L790,140 L790,236', { w: 3.5, stroke: C.rust, extra: 'marker-end="url(#ahR)"' });
  b += box(30, 244, 405, 230, C.tealLight, C.tealDark);
  b += t(55, 282, 'Peaceful', { size: 22, weight: 700, fill: C.tealDark });
  b += pill(55, 304, 355, 46, 'the first stallholder yawning', { fill: C.panel, edge: C.tealDark });
  b += pill(55, 364, 355, 46, 'a cat stretching on a sack of rice', { fill: C.panel, edge: C.tealDark });
  b += t(55, 450, 'Selection → a calm, gentle mood', { size: 17, fill: C.tealDark, weight: 600 });
  b += box(465, 244, 405, 230, C.panel, C.rust);
  b += t(490, 282, 'Unsettling', { size: 22, weight: 700, fill: C.rust });
  b += pill(490, 304, 355, 46, 'shutters half-raised', { fill: '#f6e3d6', edge: C.rust });
  b += pill(490, 364, 355, 46, 'a single light swinging', { fill: '#f6e3d6', edge: C.rust });
  b += t(490, 450, 'Selection → an uneasy mood', { size: 17, fill: C.rust, weight: 600 });
  b += t(450, 520, 'The strongest atmosphere tools', { size: 21, weight: 700, anchor: 'middle' });
  const ic = {
    light: (cx, cy) => `<circle cx="${cx}" cy="${cy}" r="18" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + [0, 45, 90, 135, 180, 225, 270, 315].map((a) => { const r = (a * Math.PI) / 180; return `<line x1="${cx + 25 * Math.cos(r)}" y1="${cy + 25 * Math.sin(r)}" x2="${cx + 33 * Math.cos(r)}" y2="${cy + 33 * Math.sin(r)}" stroke="${C.ink}" stroke-width="2.5" stroke-linecap="round"/>`; }).join(''),
    weather: (cx, cy) => path(`M${cx - 30},${cy + 8} a14,14 0 0 1 10,-24 a18,18 0 0 1 34,-4 a13,13 0 0 1 16,22 z`, { fill: C.panel, w: 2.5 }) + [-14, 0, 14].map((d) => path(`M${cx + d},${cy + 16} l-5,12`, { stroke: C.blue, w: 3 })).join(''),
    colour: (cx, cy) => [[C.rust, -18], [C.mustard, 0], [C.tealDark, 18]].map(([f, d]) => `<circle cx="${cx + d}" cy="${cy + (d === 0 ? -8 : 6)}" r="15" fill="${f}" stroke="${C.ink}" stroke-width="2" opacity="0.9"/>`).join(''),
    sound: (cx, cy) => path(`M${cx - 28},${cy - 9} h10 l14,-12 v42 l-14,-12 h-10 z`, { fill: C.cream, w: 2.5 }) + path(`M${cx + 6},${cy - 10} q9,10 0,20 M${cx + 14},${cy - 18} q17,18 0,36`, { w: 2.5 }),
  };
  ['light', 'weather', 'colour', 'sound'].forEach((k, i) => {
    const x = 30 + i * 213;
    b += panel(x, 540, 200, 130) + ic[k](x + 100, 588) + t(x + 100, 650, k, { size: 19, weight: 700, anchor: 'middle' });
  });
  b += box(30, 690, 840, 54, C.cream, C.olive) + t(450, 724, 'A change in any of them can give the piece its shape.', { size: 18, weight: 700, anchor: 'middle' });
  add('05-building-atmosphere',
    svg(900, 770, 'Same place, different atmosphere', b),
    'A market at dawn described two ways: peaceful, with the first stallholder yawning and a cat stretching on a sack of rice, or unsettling, with shutters half-raised and a single light swinging. Light, weather, colour and sound are the strongest atmosphere tools.',
    'The place stays the same; the details you select make the mood.',
    '## Building atmosphere');
}

// 06 Model passage anatomy
{
  let b = '';
  const stages = [
    ['1', 'One detail', 'a pigeon under the last working light', 'Opens on a precise image, not a general statement.'],
    ['2', 'The departure board', 'every line reads Cancelled', '“has stopped pretending”: light personification, a weary mood.'],
    ['3', 'The people', 'a man asleep upright · two students sharing headphones · an old woman peeling an orange', 'Each person is a precise picture; the orange’s smell is the one chosen sense, warm against the cold.'],
    ['4', '“Then the cleaner arrives.”', 'a one-line paragraph', 'A small event that serves the description and opens the next stage.'],
  ];
  const ws = [520, 490, 460, 430];
  let y = 112;
  stages.forEach(([n, h, d, note], i) => {
    const hgt = i === 2 ? 132 : 98;
    const w = ws[i], x = 30 + (520 - w) / 2;
    b += box(x, y, w, hgt, i === 0 || i === 3 ? C.cream : C.tealLight, i === 0 || i === 3 ? C.olive : C.tealDark, 12);
    b += badge(x + 30, y + 32, 18, n, i === 0 || i === 3 ? C.mustard : C.panel);
    b += t(x + 58, y + 39, h, { size: 19, weight: 700 });
    b += para(x + 22, y + 74, d, Math.floor((w - 40) / 8.4), { size: 16, fill: C.ink, italic: i !== 3 }, 21);
    b += panel(580, y, 290, hgt) + para(598, y + 32, note, 29, { size: 16, fill: C.muted }, 21);
    b += `<line x1="${x + w}" y1="${y + hgt / 2}" x2="578" y2="${y + hgt / 2}" stroke="${C.panelEdge}" stroke-width="2.5" stroke-dasharray="6 5"/>`;
    if (i < 3) b += arrow(290, y + hgt + 2, 290, y + hgt + 20, { w: 3 });
    y += hgt + 22;
  });
  b += t(290, y + 18, 'a zoom structure: one detail → the board → the people → next stage', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 });
  add('06-model-passage-anatomy',
    svg(900, y + 44, 'How the model passage is built', b),
    'The railway station model moves in stages: one detail (a pigeon under the last light), the departure board reading Cancelled, the people on the benches, and the one-line paragraph “Then the cleaner arrives.” Notes beside each stage give the commentary’s points on precise pictures, the single chosen sense and light personification.',
    'A zoom structure: each stage is a paragraph, and the final small event opens the next.',
    '## Model passage');
}

// 07 Planning frame and timing
{
  let b = '';
  const steps = [
    ['Plan', 'about five minutes', 'atmosphere, structure, specific details per stage', C.mustard],
    ['Write', 'four or five paragraphs', 'aim for the middle of 350–450 words; open on a precise image', C.tealLight],
    ['Proofread', 'a few minutes', 'W5: spelling, punctuation, grammar', C.cream],
  ];
  steps.forEach(([h, s, d, f], i) => {
    const x = 30 + i * 285;
    b += box(x, 120, 270, 170, f, C.ink, 12);
    b += t(x + 20, 156, h, { size: 22, weight: 700 }) + t(x + 20, 184, s, { size: 17, weight: 600, fill: C.ink });
    b += para(x + 20, 216, d, 27, { size: 16, fill: C.ink }, 21);
    if (i < 2) b += arrow(x + 271, 205, x + 284, 205, { w: 3 });
  });
  b += t(450, 336, 'A five-minute plan, filled in from the model passage', { size: 20, weight: 700, anchor: 'middle' });
  const rows = [
    ['Title', 'Describe a railway station late at night.'],
    ['Atmosphere', 'weary, cold; one warm detail against it'],
    ['Structure', 'zoom'],
    ['Stage 1', 'a pigeon under the last working light'],
    ['Stage 2', 'the departure board: every line Cancelled'],
    ['Stage 3', 'travellers on the benches; the smell of an orange'],
    ['Stage 4', 'Then the cleaner arrives.'],
  ];
  rows.forEach(([k, v], i) => {
    const y = 356 + i * 54;
    b += box(30, y, 200, 46, i < 3 ? C.cream : C.tealLight, i < 3 ? C.olive : C.tealDark, 8) + t(130, y + 29, k, { size: 17, weight: 700, anchor: 'middle' });
    b += box(242, y, 628, 46, C.panel, C.panelEdge, 8) + t(262, y + 29, v, { size: 17, italic: i === 0 || i === 6 });
  });
  b += box(30, 744, 840, 56, '#f6e3d6', C.rust) + t(450, 779, 'Not this opening: “The station was very quiet.” Begin with a precise image.', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  add('07-plan-and-timing',
    svg(900, 826, 'Plan, write, proofread', b),
    'Spend about five minutes planning atmosphere, structure and details per stage, write four or five paragraphs aiming for the middle of 350 to 450 words, then proofread for W5. A sample plan built from the railway station model lists the atmosphere, a zoom structure and four stages.',
    'Five minutes of planning gives every paragraph its stage and its details.',
    '## Exam technique');
}
