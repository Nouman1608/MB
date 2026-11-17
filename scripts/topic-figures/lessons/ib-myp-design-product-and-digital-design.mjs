import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-design-product-and-digital-design';
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

// 01 Three assessed types
{
  let b = `<circle cx="330" cy="330" r="190" fill="${C.cream}" fill-opacity="0.85" stroke="${C.olive}" stroke-width="3"/>` + `<circle cx="570" cy="330" r="190" fill="${C.tealLight}" fill-opacity="0.75" stroke="${C.tealDark}" stroke-width="3"/>`;
  b += `<path d="M450,183 A190,190 0 0 1 450,477 A190,190 0 0 1 450,183 Z" fill="${C.mustard}" fill-opacity="0.55"/>`;
  b += t(272, 230, 'Product design', { size: 21, weight: 700, anchor: 'middle', fill: C.olive }) + t(272, 256, 'a physical object', { size: 16, anchor: 'middle' });
  b += tl(265, 300, ['storage unit', 'wearable', 'packaging', 'toy, lamp'], { size: 16, anchor: 'middle', fill: C.muted }, 24);
  b += t(632, 230, 'Digital design', { size: 21, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(632, 256, 'on a screen or in software', { size: 16, anchor: 'middle' });
  b += tl(640, 300, ['website, app', 'game, animation', 'interactive presentation', 'digital poster campaign'], { size: 16, anchor: 'middle', fill: C.muted }, 24);
  b += tl(450, 290, ['Combined', 'both parts', 'work', 'together'], { size: 17, weight: 700, anchor: 'middle' }, 23);
  b += panel(30, 540, 840, 140) + t(55, 576, 'Combined examples', { size: 18, weight: 700 }) +
    tl(55, 606, ['• a board game with a companion scoring app', '• a sensor housing linked to a web page showing the readings', '• packaging with a code that opens an instruction video you made'], { size: 16 }, 23);
  b += t(450, 712, 'Same design cycle and criteria for all three; the evidence, tools and tests change.', { size: 17, weight: 600, anchor: 'middle', fill: C.tealDark });
  add('01-three-design-types',
    svg(900, 740, 'Three assessed types of design course', b),
    'Two overlapping circles: product design, a physical object such as a storage unit or lamp, and digital design, a solution on screen such as a website, app or game. The overlap is combined design, where a physical part and a digital part work together, such as a board game with a scoring app. The design cycle and criteria are the same for all three.',
    'Product, digital or combined: same criteria, different evidence, tools and tests.',
    '## The three types in plain terms');
}

// 02 Evidence by stage
{
  const rows = [
    ['A', 'Inquiring and analysing', ['client interview; existing products;', 'materials research;', 'anthropometric data'], ['client interview; existing apps', 'or sites; target devices and', 'screen sizes; accessibility needs']],
    ['B', 'Developing ideas', ['spec: sizes, materials, cost,', 'safety; annotated sketches;', 'CAD; working drawings'], ['spec: platform, load time, content,', 'accessibility; wireframes;', 'flowcharts; site maps; storyboards']],
    ['C', 'Creating the solution', ['cutting list; sequence of operations;', 'tools; safety notes; build photos;', 'justified changes'], ['development plan; asset list; file', 'structure; version saves;', 'screenshots; justified changes']],
    ['D', 'Evaluating', ['measurements against the spec;', 'load, drop or durability tests;', 'user trials'], ['usability tests with set tasks;', 'device and browser tests;', 'functional checklists']],
  ];
  let b = chip(250, 110, 300, 46, 'Product design', C.cream, { size: 18, edge: C.olive }) + chip(565, 110, 305, 46, 'Digital design', C.tealLight, { size: 18, edge: C.tealDark });
  rows.forEach(([L, n, p, d], i) => {
    const y = 170 + i * 124;
    b += panel(30, y, 840, 112) + badge(68, y + 40, 22, L, i % 2 ? C.cream : C.mustard) + tl(40, y + 86, wrap(n, 14), { size: 15, weight: 700 }, 18).replace(/x="40"/g, 'x="44"');
    b += box(250, y + 8, 300, 96, '#fbf6e0', C.olive, 1.8, 10) + tl(264, y + 34, p, { size: 15 }, 21);
    b += box(565, y + 8, 295, 96, '#eaf3f1', C.tealDark, 1.8, 10) + tl(579, y + 34, d, { size: 15 }, 21);
  });
  b += t(450, 680, 'Both types record changes to the plan and give a reason for each.', { size: 16, anchor: 'middle', fill: C.muted, weight: 600 });
  add('02-evidence-by-stage',
    svg(900, 705, 'Evidence at each stage: product vs digital', b),
    'For each criterion, product and digital evidence side by side. A: research into materials and body sizes versus devices and accessibility. B: specification with sizes and materials plus sketches and CAD versus platform and load time plus wireframes and site maps. C: cutting list and build photos versus file structure and version saves. D: load and durability tests versus usability and device tests.',
    'The stages are the same; what counts as evidence depends on the type.',
    '## Evidence at each stage of the design cycle');
}

// 03 Prototype fidelity
{
  let b = '';
  const x0 = 220, x1 = 850;
  b += `<defs><linearGradient id="fid" x1="0" x2="1"><stop offset="0" stop-color="${C.tealLight}"/><stop offset="1" stop-color="${C.mustard}"/></linearGradient></defs>`;
  b += `<rect x="${x0}" y="120" width="${x1 - x0}" height="34" rx="17" fill="url(#fid)" stroke="${C.ink}" stroke-width="2"/>`;
  b += t(x0 + 16, 143, 'low fidelity: quick, cheap', { size: 16, weight: 700 }) + t(x1 - 16, 143, 'high fidelity: real properties', { size: 16, weight: 700, anchor: 'end' });
  const rows = [['Product', ['card or foam model', 'scale model'], ['full-size, real materials', '3D print'], C.cream, C.olive], ['Digital', ['paper prototype', 'static wireframe'], ['clickable mock-up', 'working build'], C.tealLight, C.tealDark]];
  rows.forEach(([h, lo, hi, f, e], i) => {
    const y = 176 + i * 120;
    b += box(30, y, 175, 104, f, e, 2.5, 12) + t(117, y + 60, h, { size: 20, weight: 700, anchor: 'middle' });
    b += box(220, y, 300, 104, C.panel, C.panelEdge, 2, 12) + tl(240, y + 44, lo, { size: 17 }, 26);
    b += arrow(525, y + 52, 545, y + 52, { w: 3 });
    b += box(550, y, 300, 104, C.panel, C.panelEdge, 2, 12) + tl(570, y + 44, hi, { size: 17 }, 26);
  });
  b += t(450, 440, 'Go high fidelity when a test depends on strength, weight, load time or a working button.', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 });
  // scale model worked example
  b += panel(30, 465, 840, 250, C.panel, C.panelEdge) + t(55, 501, 'Worked example: a 1:5 card model of a display stand', { size: 18, weight: 700 });
  const k = 0.2;
  void k;
  b += box(100, 522, 70, 180, C.tealLight, C.ink, 2, 4) + t(135, 618, '1:5', { size: 15, weight: 700, anchor: 'middle' }) + t(180, 618, '180 mm', { size: 15, fill: C.muted }) + t(135, 714 - 4, '', {});
  b += tl(250, 560, ['full size: 900 × 350 mm', 'model height = 900 ÷ 5 = 180 mm', 'model width = 350 ÷ 5 = 70 mm'], { size: 17, weight: 600 }, 30);
  b += box(560, 520, 290, 180, '#fbeee6', C.rust, 2, 12) + t(580, 552, 'Tests proportions', { size: 17, weight: 700, fill: C.tealDark }) + t(580, 576, 'with the client ✓', { size: 16, fill: C.tealDark }) +
    t(580, 616, 'Says nothing about', { size: 17, weight: 700, fill: C.rust }) + tl(580, 640, ['how full-size plywood', 'carries a load ✗'], { size: 16, fill: C.rust }, 22);
  add('03-prototype-fidelity',
    svg(900, 740, 'Prototypes: sufficient for testing', b),
    'A scale from low to high fidelity. Product prototypes range from card, foam or scale models to full-size prototypes in real materials or 3D prints; digital prototypes range from paper prototypes and static wireframes to clickable mock-ups and working builds. A 1:5 card model of a 900 by 350 mm stand is 180 by 70 mm: it tests proportions but not strength.',
    'Choose the lowest fidelity that can still run the test you need.',
    '## Prototyping in each type');
}

// 04 Usability results
{
  const tm = [12, 18, 9, 25, 14, 31, 11, 16];
  const x0 = 90, x1 = 830, lo = 5, hi = 35, ax = 320;
  const X = (v) => x0 + ((v - lo) * (x1 - x0)) / (hi - lo);
  let b = panel(30, 110, 840, 320) + t(55, 146, 'Time for 8 first-time users to find the timetable page (s)', { size: 18, weight: 700 });
  b += `<rect x="${X(20)}" y="170" width="${X(35) - X(20)}" height="${ax - 170}" fill="#fbeee6"/>`;
  b += `<line x1="${x0}" y1="${ax}" x2="${x1}" y2="${ax}" stroke="${C.ink}" stroke-width="2.5"/>`;
  for (let v = 5; v <= 35; v += 5) b += `<line x1="${X(v)}" y1="${ax}" x2="${X(v)}" y2="${ax + 7}" stroke="${C.ink}" stroke-width="2"/>` + t(X(v), ax + 28, String(v), { size: 15, anchor: 'middle', fill: C.muted });
  tm.forEach((v) => { b += `<circle cx="${X(v)}" cy="${ax - 22}" r="13" fill="${v < 20 ? C.teal : C.rust}" stroke="${C.ink}" stroke-width="2"/>`; });
  b += `<line x1="${X(20)}" y1="170" x2="${X(20)}" y2="${ax}" stroke="${C.rust}" stroke-width="3"/>` + t(X(20) + 10, 196, '20 s target', { size: 16, weight: 700, fill: C.rust });
  b += `<line x1="${X(17)}" y1="225" x2="${X(17)}" y2="${ax - 40}" stroke="${C.olive}" stroke-width="3" stroke-dasharray="8 6"/>` + t(X(17) - 8, 245, 'mean 17.0 s', { size: 16, weight: 700, anchor: 'end', fill: C.olive });
  b += t(450, 410, '12, 18, 9, 25, 14, 31, 11, 16: total 136, mean 136 ÷ 8 = 17.0 s', { size: 15, anchor: 'middle', fill: C.muted });
  b += panel(30, 450, 840, 130, '#fbeee6', C.rust) + t(55, 488, 'Spec: at least 90% of first-time users under 20 s', { size: 18, weight: 700 }) +
    t(55, 520, '6 of 8 = 75% under 20 s; 90% of 8 = 7.2, so all 8 were needed.', { size: 17 }) + t(55, 552, '✗ Not met, even though the mean is under 20 s.', { size: 17, weight: 700, fill: C.rust });
  add('04-usability-results',
    svg(900, 605, 'Digital test: reading usability results', b),
    'Dot plot of eight users’ times to find a timetable page, from 9 to 31 seconds, against a 20-second target. The mean is 17.0 seconds, but only 6 of 8 users (75%) were under 20 seconds, while the specification needed at least 90%, so the point is not met.',
    'Check the proportion the specification asks for, not just the mean.',
    '## Testing in each type');
}

// 05 Load test graph
{
  const pts = [[0, 0], [2, 0.6], [4, 1.3], [6, 2.1], [8, 3.4]];
  const gx0 = 130, gx1 = 560, gy0 = 470, gy1 = 160;
  const X = (v) => gx0 + (v / 8) * (gx1 - gx0), Y = (v) => gy0 - (v / 4) * (gy0 - gy1);
  let b = panel(30, 110, 840, 450) + t(55, 146, 'Shelf: sag at the centre under load', { size: 18, weight: 700 });
  b += `<line x1="${gx0}" y1="${gy0}" x2="${gx1 + 20}" y2="${gy0}" stroke="${C.ink}" stroke-width="2.5"/><line x1="${gx0}" y1="${gy0}" x2="${gx0}" y2="${gy1 - 10}" stroke="${C.ink}" stroke-width="2.5"/>`;
  [0, 2, 4, 6, 8].forEach((v) => { b += t(X(v), gy0 + 26, String(v), { size: 15, anchor: 'middle', fill: C.muted }); });
  [0, 1, 2, 3, 4].forEach((v) => { b += t(gx0 - 10, Y(v) + 5, String(v), { size: 15, anchor: 'end', fill: C.muted }); });
  b += t((gx0 + gx1) / 2, gy0 + 52, 'load (kg)', { size: 15, anchor: 'middle', fill: C.muted }) + `<text transform="translate(80 ${(gy0 + gy1) / 2}) rotate(-90)" font-size="15" fill="${C.muted}" text-anchor="middle">sag (mm)</text>`;
  b += `<line x1="${gx0}" y1="${Y(3)}" x2="${gx1 + 20}" y2="${Y(3)}" stroke="${C.rust}" stroke-width="3" stroke-dasharray="9 6"/>` + t(gx0 + 8, Y(3) - 10, 'limit 3 mm', { size: 16, weight: 700, fill: C.rust });
  b += path('M' + pts.map(([a, c]) => `${X(a)},${Y(c)}`).join(' L'), { w: 3, stroke: C.tealDark });
  pts.slice(1).forEach(([a, c]) => { b += `<circle cx="${X(a)}" cy="${Y(c)}" r="8" fill="${c > 3 ? C.rust : C.teal}" stroke="${C.ink}" stroke-width="2"/>` + t(X(a) + (a === 8 ? -12 : 12), Y(c) + (a === 8 ? -12 : 20), String(c), { size: 15, weight: 600, anchor: a === 8 ? 'end' : 'start' }); });
  b += `<line x1="${X(7.4)}" y1="${Y(3)}" x2="${X(7.4)}" y2="${gy0}" stroke="${C.olive}" stroke-width="2.5" stroke-dasharray="6 5"/>` + t(X(7.4), gy0 - 10, '≈ 7.4', { size: 15, weight: 700, anchor: 'end', fill: C.olive });
  b += box(600, 160, 250, 300, C.cream, C.olive, 2, 12) + t(620, 192, 'Estimate safe load', { size: 17, weight: 700 }) +
    tl(620, 226, ['allowed after 6 kg:', '3 − 2.1 = 0.9 mm', 'per extra 2 kg:', '3.4 − 2.1 = 1.3 mm', 'safe load ≈', '6 + 2 × (0.9 ÷ 1.3)', '≈ 7.4 kg'], { size: 16 }, 31);
  b += panel(30, 580, 840, 110, '#fbeee6', C.rust) + t(55, 616, '✗ Spec (8 kg, 3 mm or less) not met: passes at 6 kg, fails at 8 kg', { size: 17, weight: 700, fill: C.rust }) +
    t(55, 648, 'Improve: thicker board, a bracket nearer the centre or a stiffer material,', { size: 16 }) + t(55, 672, 'then test again.', { size: 16 });
  add('05-load-test-results',
    svg(900, 715, 'Product test: reading load-test results', b),
    'Line graph of shelf sag against load: 0.6 mm at 2 kg, 1.3 at 4 kg, 2.1 at 6 kg and 3.4 at 8 kg, with a 3 mm limit. Assuming a steady rise between 6 and 8 kg, the safe load is about 6 + 2 × (0.9 ÷ 1.3) ≈ 7.4 kg, so the 8 kg specification is not met.',
    'Read where the results cross the limit, then plan an improvement and a re-test.',
    '## Testing in each type');
}

// 06 Combined project: two strands
{
  const st = [
    ['A', ['interview the teacher; observe', 'pupils aged 7–8: pictures, little text'], ['research soil-moisture sensors', 'and simple web dashboards']],
    ['B', ['housing fits a 120 mm pot', 'and survives splashes'], ['“water me” picture within one', 'minute of a dry reading']],
    ['C', ['make the housing: 3D print,', 'fit test, seal'], ['build the page: layout, image,', 'link to readings']],
    ['D', ['splash it; check the sensor', 'still reads'], ['dry the soil 10 times:', '9 reminders = 90%']],
  ];
  let b = chip(140, 110, 340, 46, 'Product strand: sensor housing', C.cream, { size: 17, edge: C.olive }) + chip(520, 110, 350, 46, 'Digital strand: web page', C.tealLight, { size: 17, edge: C.tealDark });
  st.forEach(([L, p, d], i) => {
    const y = 172 + i * 118;
    b += badge(70, y + 50, 24, L, i % 2 ? C.cream : C.mustard);
    b += box(140, y, 340, 100, '#fbf6e0', C.olive, 2, 12) + tl(160, y + 42, p, { size: 16 }, 23);
    b += box(520, y, 350, 100, '#eaf3f1', C.tealDark, 2, 12) + tl(540, y + 42, d, { size: 16 }, 23);
    if (i < 3) b += arrow(70, y + 78, 70, y + 140, { w: 2.5 });
  });
  b += `<line x1="482" y1="${172 + 2 * 118 + 50}" x2="518" y2="${172 + 2 * 118 + 50}" stroke="${C.rust}" stroke-width="4"/>`;
  b += box(250, 650, 520, 50, '#fbeee6', C.rust, 2, 10) + t(510, 682, 'Where they meet: the housing must leave room for the cable', { size: 16, weight: 600, anchor: 'middle', fill: C.rust });
  b += path(`M500,646 L500,${172 + 2 * 118 + 54}`, { w: 2.5, stroke: C.rust, extra: 'marker-end="url(#ahR)"' });
  b += t(450, 735, 'A combined project needs both kinds of evidence at every stage.', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('06-combined-project-strands',
    svg(900, 760, 'Combined design: two strands, one project', b),
    'A plant-watering reminder for a primary classroom runs as two strands through stages A to D: a product strand for the sensor housing (fits a 120 mm pot, survives splashes, 3D printed, splash-tested) and a digital strand for the web page (shows a “water me” picture within a minute; 9 reminders from 10 dry readings is 90%). The strands meet where the housing must leave room for the cable.',
    'Plan, build and test both the physical and the digital part.',
    '## Worked example: a combined project');
}

// 07 Related concepts across the types
{
  const rows = [
    ['Ergonomics', 'fit the handle to hand sizes from anthropometric data', 'touch targets big enough for fingertips; text readable at arm’s length'],
    ['Sustainability', 'material choice; can be taken apart and recycled', 'small file sizes; works on older devices'],
    ['Adaptation', 'adapt an existing product for a new user', 'a layout that adapts to different screen sizes'],
    ['Innovation', 'a new combination of known parts: a digital reminder for an ordinary plant pot', null],
  ];
  let b = chip(250, 110, 300, 44, 'Product', C.cream, { size: 17, edge: C.olive }) + chip(565, 110, 305, 44, 'Digital', C.tealLight, { size: 17, edge: C.tealDark });
  rows.forEach(([h, p, d], i) => {
    const y = 168 + i * 112;
    b += box(30, y, 205, 98, C.mustard, C.ink, 2.5, 12) + t(132, y + 56, h, { size: 18, weight: 700, anchor: 'middle' });
    if (d) {
      b += box(250, y, 300, 98, '#fbf6e0', C.olive, 1.8, 10) + tl(266, y + 42 - (wrap(p, 32).length - 2) * 11, wrap(p, 32), { size: 16 }, 22);
      b += box(565, y, 305, 98, '#eaf3f1', C.tealDark, 1.8, 10) + tl(581, y + 42 - (wrap(d, 32).length - 2) * 11, wrap(d, 32), { size: 16 }, 22);
    } else {
      b += box(250, y, 620, 98, C.cream, C.olive, 1.8, 10) + tl(560, y + 42, wrap(p, 62), { size: 16, anchor: 'middle' }, 22);
    }
  });
  b += t(450, 640, 'The same plant project could sit in Globalization and sustainability (saving water)', { size: 16, anchor: 'middle', fill: C.muted }) +
    t(450, 664, 'or Identities and relationships (pupils taking responsibility).', { size: 16, anchor: 'middle', fill: C.muted });
  add('07-related-concepts-by-type',
    svg(900, 690, 'Related concepts in product and digital design', b),
    'Ergonomics, sustainability and adaptation compared for product and digital design: fitting a handle to hand sizes versus touch targets and readable text; recyclable materials versus small files that run on older devices; adapting a product for a new user versus a layout that adapts to screen size. Innovation can combine both, as in a digital reminder for an ordinary plant pot.',
    'Each related concept shows up differently in product and digital work.',
    '## Related concepts across the types');
}
