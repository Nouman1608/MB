import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-4';
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
const apath = (d, color = C.ink, marker = 'ah', w = 3.5) => path(d, { stroke: color, w, extra: `marker-end="url(#${marker})"` });
const PINK = '#f6e3d6';
const MONO = "'DejaVu Sans Mono', monospace";
const mono = (x, y, s, { size = 15, fill = C.ink, weight = 400, anchor = 'start' } = {}) =>
  `<text x="${x}" y="${y}" font-family="${MONO}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}" xml:space="preserve">${s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</text>`;
const dot = (x, y, f, r = 9, shape = 'c') => shape === 'c' ? `<circle cx="${x}" cy="${y}" r="${r}" fill="${f}" stroke="${C.ink}" stroke-width="2"/>` : `<rect x="${x - r}" y="${y - r}" width="${2 * r}" height="${2 * r}" rx="2" fill="${f}" stroke="${C.ink}" stroke-width="2"/>`;

// 01 Rule-based vs machine learning
{
  let b = '';
  const flow = (y, title, f, e, a, c, mid, out, note) => {
    let s = box(30, y, 840, 170, f, e) + t(52, y + 34, title, { size: 20, weight: 700, fill: e });
    s += box(52, y + 56, 170, 50, C.panel, C.ink, 8) + t(137, y + 87, a, { size: 16, weight: 700, anchor: 'middle' });
    s += box(52, y + 112, 170, 44, C.panel, C.ink, 8) + t(137, y + 140, c, { size: 16, weight: 700, anchor: 'middle' });
    s += arrow(226, y + 81, 300, y + 100, { w: 3 }) + arrow(226, y + 134, 300, y + 114, { w: 3 });
    s += box(306, y + 76, 230, 60, C.mustard, C.ink, 10) + t(421, y + 112, mid, { size: 17, weight: 700, anchor: 'middle' });
    s += arrow(540, y + 106, 590, y + 106, { w: 3 });
    s += box(596, y + 76, 252, 60, C.panel, C.ink, 10) + t(722, y + 112, out, { size: 17, weight: 700, anchor: 'middle' });
    s += t(848, y + 34, note, { size: 15, anchor: 'end', fill: C.muted, italic: true });
    return s;
  };
  b += flow(110, 'Rule-based programming', C.cream, C.olive, 'rules (by a person)', 'data', 'program', 'answers', 'does exactly what it is told');
  b += flow(296, 'Machine learning', C.tealLight, C.tealDark, 'examples (data)', 'learning method', 'learning system', 'a model → predictions', 'finds the patterns itself');
  const rows = [['Rules come from', 'the programmer', 'patterns found in data'], ['Needs', 'expert knowledge of the rules', 'large, representative data sets'], ['Explaining a decision', 'usually straightforward', 'can be difficult'], ['Adapting to change', 'rewrite the rules', 'retrain on new data'], ['Suits', 'clear, stable rules (tax calculation)', 'complex patterns (image recognition)']];
  b += box(30, 484, 840, 40, C.ink, C.ink, 0) + t(400, 510, 'Rule-based', { size: 16, weight: 700, anchor: 'middle', fill: C.cream }) + t(720, 510, 'Machine learning', { size: 16, weight: 700, anchor: 'middle', fill: C.teal });
  rows.forEach(([k, a, c], i) => {
    const y = 524 + i * 46;
    b += `<rect x="30" y="${y}" width="840" height="46" fill="${i % 2 ? C.bg : C.panel}" stroke="${C.panelEdge}" stroke-width="1.5"/>`;
    b += t(44, y + 29, k, { size: 15, weight: 700 }) + t(400, y + 29, a, { size: 15, anchor: 'middle' }) + t(720, y + 29, c, { size: 15, anchor: 'middle' });
  });
  b += `<line x1="240" y1="524" x2="240" y2="754" stroke="${C.panelEdge}" stroke-width="1.5"/><line x1="560" y1="484" x2="560" y2="754" stroke="${C.panelEdge}" stroke-width="1.5"/>`;
  add('01-rules-vs-learning',
    svg(900, 778, 'Rule-based programming or machine learning?', b),
    'In rule-based programming, rules written by a person and data go into a program that produces answers. In machine learning, examples and a learning method go into a learning system that produces a model, which makes predictions. A table compares where the rules come from, what each needs, how easily decisions are explained, how each adapts to change and what each suits.',
    'A programmer writes the rules, or the system finds them in the data.',
    '## Rule-based programming or machine learning?');
}

// 02 Training data, features, labels, testing
{
  let b = '';
  b += t(52, 130, 'Training data from the worked example: eight labelled emails', { size: 17, weight: 700 });
  const W = [9, 1, 7, 2, 8, 0, 6, 3];
  const cw = 92, x0 = 168;
  b += `<rect x="52" y="146" width="116" height="44" fill="${C.ink}"/>` + t(110, 174, 'email', { size: 15, weight: 700, anchor: 'middle', fill: C.panel });
  b += `<rect x="52" y="190" width="116" height="48" fill="${C.tealDark}"/>` + t(110, 212, 'feature:', { size: 15, weight: 700, anchor: 'middle', fill: C.panel }) + t(110, 230, 'susp. words', { size: 15, anchor: 'middle', fill: C.panel });
  b += `<rect x="52" y="238" width="116" height="44" fill="${C.olive}"/>` + t(110, 266, 'label', { size: 15, weight: 700, anchor: 'middle', fill: C.panel });
  W.forEach((w, i) => {
    const x = x0 + i * 85, spam = i % 2 === 0;
    b += `<rect x="${x}" y="146" width="85" height="44" fill="${C.bg}" stroke="${C.panelEdge}" stroke-width="1.5"/>` + t(x + 42, 174, String(i), { size: 15, anchor: 'middle' });
    b += `<rect x="${x}" y="190" width="85" height="48" fill="${C.tealLight}" stroke="${C.panelEdge}" stroke-width="1.5"/>` + t(x + 42, 221, String(w), { size: 18, weight: 700, anchor: 'middle' });
    b += `<rect x="${x}" y="238" width="85" height="44" fill="${spam ? C.cream : C.panel}" stroke="${C.panelEdge}" stroke-width="1.5"/>` + t(x + 42, 266, spam ? 'spam' : 'not', { size: 15, weight: 700, anchor: 'middle', fill: spam ? C.olive : C.ink });
  });
  b += t(52, 312, 'Other features an email model might use: number of links, sender’s domain, certain words.', { size: 15, fill: C.muted, italic: true });
  // learn -> model -> new
  b += box(52, 336, 230, 70, C.tealLight, C.tealDark, 10) + t(167, 366, 'features + labels', { size: 16, weight: 700, anchor: 'middle' }) + t(167, 390, 'train', { size: 15, anchor: 'middle', fill: C.tealDark });
  b += arrow(286, 371, 330, 371, { w: 3.5 });
  b += box(336, 336, 200, 70, C.mustard, C.ink, 10) + t(436, 366, 'model', { size: 17, weight: 700, anchor: 'middle' }) + t(436, 390, 'threshold 4.5', { size: 15, anchor: 'middle' });
  b += arrow(540, 371, 584, 371, { w: 3.5 });
  b += box(590, 336, 280, 70, C.panel, C.ink, 10) + t(730, 366, 'new email, 5 words → spam', { size: 15, weight: 600, anchor: 'middle' }) + t(730, 390, 'new email, 4 words → not', { size: 15, weight: 600, anchor: 'middle' });
  const cards = [['Training data', 'the examples a model learns from: large enough, accurate and representative', C.tealLight, C.tealDark], ['Features and labels', 'features are measurable properties; labels are the correct answers (supervised)', C.cream, C.olive], ['Testing', 'check on data not seen in training: does it work on new cases, or has it memorised?', PINK, C.rust]];
  cards.forEach(([h, d, f, e2], i) => {
    const xx = 30 + i * 285;
    b += box(xx, 428, 270, 140, f, e2) + t(xx + 18, 460, h, { size: 17, weight: 700, fill: e2 }) + para(xx + 18, 488, d, 29, { size: 15 }, 20);
  });
  add('02-training-data-features-labels',
    svg(900, 592, 'Training data, features and labels', b),
    'The eight training emails from the worked example, each with one feature (number of suspicious words: 9, 1, 7, 2, 8, 0, 6, 3) and a label (spam or not). Training on features and labels produces a model, the threshold 4.5, which classifies a new email with 5 words as spam and one with 4 as not. Training data must be representative, and testing uses data not seen in training.',
    'Features are the inputs, labels the correct answers; testing uses examples the model has not seen.',
    '## Training data, features and labels');
}

// 03 Supervised vs unsupervised
{
  let b = '';
  const axes = (x, y, w, h, xl, yl) => `<line x1="${x}" y1="${y + h}" x2="${x + w}" y2="${y + h}" stroke="${C.ink}" stroke-width="2.5" marker-end="url(#ah)"/><line x1="${x}" y1="${y + h}" x2="${x}" y2="${y}" stroke="${C.ink}" stroke-width="2.5" marker-end="url(#ah)"/>` + t(x + w / 2, y + h + 26, xl, { size: 15, anchor: 'middle', fill: C.muted }) + `<text x="${x - 14}" y="${y + h / 2}" font-size="15" fill="${C.muted}" text-anchor="middle" transform="rotate(-90 ${x - 14} ${y + h / 2})">${yl}</text>`;
  b += box(30, 110, 840, 330, C.tealLight, C.tealDark);
  b += t(52, 144, 'Supervised learning: labelled data', { size: 20, weight: 700, fill: C.tealDark });
  // classification
  b += box(52, 160, 390, 266, C.panel, C.panelEdge, 10) + t(70, 188, 'Classification: predicts a category', { size: 16, weight: 700 });
  b += axes(90, 202, 320, 170, 'feature 1', 'feature 2');
  [[130, 330], [150, 300], [180, 340], [120, 290], [170, 310]].forEach(([x, y]) => { b += dot(x, y, C.panel); });
  [[300, 230], [330, 260], [360, 240], [320, 220], [370, 280]].forEach(([x, y]) => { b += dot(x, y, C.rust, 8, 's'); });
  b += `<line x1="200" y1="210" x2="290" y2="370" stroke="${C.tealDark}" stroke-width="3" stroke-dasharray="8 6"/>`;
  b += dot(262, 236, C.mustard, 10) + t(250, 214, 'new ?', { size: 15, weight: 700, anchor: 'end' });
  b += t(110, 412, 'e.g. spam or not, cat or not', { size: 15, fill: C.muted, italic: true });
  // regression
  b += box(458, 160, 390, 266, C.panel, C.panelEdge, 10) + t(476, 188, 'Regression: predicts a number', { size: 16, weight: 700 });
  b += axes(500, 202, 320, 170, 'size', 'price');
  [[530, 352], [560, 334], [600, 330], [630, 300], [670, 286], [700, 262], [740, 250], [770, 222]].forEach(([x, y]) => { b += dot(x, y, C.tealLight); });
  b += `<line x1="515" y1="362" x2="800" y2="214" stroke="${C.tealDark}" stroke-width="3"/>`;
  b += t(520, 412, 'e.g. a house price from its size', { size: 15, fill: C.muted, italic: true });
  // unsupervised
  b += box(30, 456, 840, 330, C.cream, C.olive);
  b += t(52, 490, 'Unsupervised learning: unlabelled data', { size: 20, weight: 700, fill: C.olive });
  b += box(52, 506, 390, 236, C.panel, C.panelEdge, 10) + t(70, 534, 'Before: no labels', { size: 16, weight: 700 });
  const pts = [[110, 600], [130, 630], [150, 590], [125, 660], [260, 570], [285, 600], [300, 565], [270, 625], [360, 680], [390, 700], [370, 650], [400, 670]];
  pts.forEach(([x, y]) => { b += dot(x, y, C.bg, 8); });
  b += arrow(444, 624, 474, 624, { w: 3.5 });
  b += box(476, 506, 372, 236, C.panel, C.panelEdge, 10) + t(494, 534, 'After: clusters found', { size: 16, weight: 700 });
  const cf = [C.teal, C.mustard, C.rust];
  pts.forEach(([x, y], i) => { b += dot(x + 380, y, cf[Math.floor(i / 4)], 8); });
  [0, 1, 2].forEach((g) => {
    const gp = pts.slice(g * 4, g * 4 + 4), xs = gp.map((q) => q[0] + 380), ys = gp.map((q) => q[1]);
    const cx = (Math.min(...xs) + Math.max(...xs)) / 2, cy = (Math.min(...ys) + Math.max(...ys)) / 2;
    b += `<ellipse cx="${cx}" cy="${cy}" rx="${(Math.max(...xs) - Math.min(...xs)) / 2 + 22}" ry="${(Math.max(...ys) - Math.min(...ys)) / 2 + 22}" fill="none" stroke="${C.olive}" stroke-width="2.5" stroke-dasharray="6 5"/>`;
  });
  b += t(450, 768, 'e.g. a shop finding groups of customers with similar buying habits', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  b += box(30, 802, 840, 80, C.panel, C.ink);
  b += t(52, 834, 'In a question: does the training data include the correct outcome for each example?', { size: 16, weight: 700 });
  b += t(52, 862, 'Yes → supervised.   No, the system must find groupings itself → unsupervised.', { size: 16, fill: C.tealDark, weight: 600 });
  add('03-supervised-unsupervised',
    svg(900, 906, 'Supervised and unsupervised learning', b),
    'Supervised learning uses labelled data: classification separates two labelled categories with a boundary and places a new point in one, and regression fits a line to predict a number such as a house price from its size. Unsupervised learning uses unlabelled points and finds clusters, such as groups of customers with similar buying habits.',
    'Labelled data means supervised; finding groups without answers means unsupervised.',
    '## Supervised and unsupervised learning');
}

// 04 Code and trace table
{
  let b = '';
  const lines = ['words  <- [9, 1, 7, 2, 8, 0, 6, 3]', 'labels <- ["spam", "not", "spam", "not", "spam", "not", "spam", "not"]', 'spamTotal <- 0', 'spamCount <- 0', 'notTotal <- 0', 'notCount <- 0', 'FOR i FROM 0 TO 7', '    IF labels[i] = "spam" THEN', '        spamTotal <- spamTotal + words[i]', '        spamCount <- spamCount + 1', '    ELSE', '        notTotal <- notTotal + words[i]', '        notCount <- notCount + 1', '    ENDIF', 'ENDFOR', 'threshold <- (spamTotal / spamCount + notTotal / notCount) / 2', 'OUTPUT threshold'];
  const lh = 21;
  b += box(30, 106, 840, 26 + lines.length * lh, C.ink, C.ink, 10) + lines.map((s, i) => mono(48, 130 + i * lh, s, { size: 15, fill: '#f2f4f4' })).join('');
  let y = 106 + 26 + lines.length * lh + 20;
  const cols = [['i', 60], ['words[i]', 110], ['labels[i]', 120], ['spamTotal', 140], ['spamCount', 140], ['notTotal', 130], ['notCount', 140]];
  const rows = [[0, 9, 'spam', 9, 1, 0, 0], [1, 1, 'not', 9, 1, 1, 1], [2, 7, 'spam', 16, 2, 1, 1], [3, 2, 'not', 16, 2, 3, 2], [4, 8, 'spam', 24, 3, 3, 2], [5, 0, 'not', 24, 3, 3, 3], [6, 6, 'spam', 30, 4, 3, 3], [7, 3, 'not', 30, 4, 6, 4]];
  let x = 30;
  cols.forEach(([n, w]) => { b += `<rect x="${x}" y="${y}" width="${w}" height="36" fill="${C.ink}" stroke="${C.panel}" stroke-width="1.5"/>` + mono(x + w / 2, y + 24, n, { size: 15, weight: 700, anchor: 'middle', fill: C.panel }); x += w; });
  rows.forEach((r, ri) => {
    let xx = 30;
    const spam = r[2] === 'spam';
    r.forEach((v, ci) => {
      const w = cols[ci][1];
      const changed = spam ? ci === 3 || ci === 4 : ci === 5 || ci === 6;
      const f = changed ? (spam ? C.cream : C.tealLight) : ri % 2 ? C.bg : C.panel;
      b += `<rect x="${xx}" y="${y + 36 + ri * 32}" width="${w}" height="32" fill="${f}" stroke="${C.panelEdge}" stroke-width="1.5"/>` + mono(xx + w / 2, y + 58 + ri * 32, String(v), { size: 15, anchor: 'middle', weight: changed ? 700 : 400 });
      xx += w;
    });
  });
  y += 36 + rows.length * 32 + 18;
  b += box(30, y, 840, 96, C.mustard, C.ink);
  b += t(52, y + 34, 'Averages: 30 ÷ 4 = 7.5 (spam) and 6 ÷ 4 = 1.5 (not)', { size: 17, weight: 600 });
  b += t(52, y + 70, 'threshold = (7.5 + 1.5) ÷ 2 =', { size: 19, weight: 700 }) + mono(352, y + 71, '4.5', { size: 22, weight: 700 });
  b += t(848, y + 70, 'OUTPUT 4.5', { size: 16, weight: 700, anchor: 'end' });
  add('04-threshold-trace',
    svg(900, y + 120, 'Learning a threshold: code and trace', b),
    'The lesson’s pseudocode loops over eight emails, adding each word count to spamTotal or notTotal and counting each class. The trace table shows spamTotal reaching 30 over 4 spam emails and notTotal reaching 6 over 4 others. The averages are 7.5 and 1.5, so the output threshold is (7.5 + 1.5) ÷ 2 = 4.5.',
    'The loop totals each class; halfway between the two averages gives the threshold 4.5.',
    '## Worked example: learning a rule from data');
}

// 05 Threshold on a number line
{
  let b = panel(30, 110, 840, 330);
  const X = (v) => 80 + v * 80;
  b += `<line x1="${X(0)}" y1="300" x2="${X(9.6)}" y2="300" stroke="${C.ink}" stroke-width="3" marker-end="url(#ah)"/>`;
  for (let v = 0; v <= 9; v++) b += `<line x1="${X(v)}" y1="294" x2="${X(v)}" y2="306" stroke="${C.ink}" stroke-width="2.5"/>` + t(X(v), 330, String(v), { size: 16, anchor: 'middle' });
  b += t(860, 362, 'number of suspicious words', { size: 15, anchor: 'end', fill: C.muted });
  b += `<rect x="${X(4.5)}" y="150" width="${X(9.6) - X(4.5)}" height="140" fill="${C.cream}" opacity="0.7"/>` + `<rect x="${X(0)}" y="150" width="${X(4.5) - X(0)}" height="140" fill="${C.tealLight}" opacity="0.7"/>`;
  b += t(X(2.25), 176, 'not spam', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(X(7), 176, 'spam', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  [1, 2, 0, 3].forEach((v) => { b += dot(X(v), 272, C.panel, 10); });
  [9, 7, 8, 6].forEach((v) => { b += dot(X(v), 272, C.rust, 9, 's'); });
  b += `<line x1="${X(4.5)}" y1="140" x2="${X(4.5)}" y2="306" stroke="${C.ink}" stroke-width="3.5" stroke-dasharray="8 5"/>` + t(X(4.5), 132, 'threshold 4.5', { size: 17, weight: 700, anchor: 'middle' });
  b += `<line x1="${X(1.5)}" y1="236" x2="${X(1.5)}" y2="256" stroke="${C.tealDark}" stroke-width="3"/>` + t(X(1.5), 228, 'avg 1.5', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600 });
  b += `<line x1="${X(7.5)}" y1="236" x2="${X(7.5)}" y2="256" stroke="${C.olive}" stroke-width="3"/>` + t(X(7.5), 228, 'avg 7.5', { size: 15, anchor: 'middle', fill: C.olive, weight: 600 });
  b += dot(X(4), 404, C.mustard, 10) + t(X(4), 432, '', {});
  b += apath(`M${X(4)},392 L${X(4)},342`, C.ink, 'ah', 2.5) + apath(`M${X(5)},392 L${X(5)},342`, C.ink, 'ah', 2.5);
  b += dot(X(5), 404, C.mustard, 10);
  b += t(X(4) - 18, 410, 'new email, 4 words → not spam', { size: 15, anchor: 'end', weight: 600, fill: C.tealDark });
  b += t(X(5) + 18, 410, 'new email, 5 words → spam', { size: 15, weight: 600, fill: C.olive });
  b += box(30, 460, 840, 92, C.tealLight, C.tealDark);
  b += t(52, 494, 'No programmer chose 4.5: it came from the labelled data,', { size: 17, weight: 700, fill: C.tealDark });
  b += t(52, 524, 'and it would change if the system were retrained on different emails.', { size: 17, fill: C.tealDark });
  add('05-threshold-number-line',
    svg(900, 576, 'The learned rule in use', b),
    'A number line of suspicious words. The four not-spam training emails (0 to 3 words) average 1.5 and the four spam emails (6 to 9 words) average 7.5; the threshold 4.5 lies halfway. A new email with 5 suspicious words is classified as spam and one with 4 is not.',
    'The threshold comes from the data, so retraining on new emails would move it.',
    '## Worked example: learning a rule from data');
}

// 06 Ethical issues
{
  let b = '';
  const issues = [
    ['Bias in training data', 'Data under-represents some groups, or reflects past unfair decisions.', 'The model learns and repeats the unfairness: a recruitment model could favour the kinds of applicants hired before.', 'check data for balance · test results for different groups · human review'],
    ['Transparency of automated decisions', 'Some models are difficult to explain, even for their designers.', 'People affected by a loan, medical or job decision may not find out why or challenge it.', 'raises accountability: who is responsible when a model is wrong?'],
    ['Environmental cost', 'Training large models uses a great deal of computing power.', 'Energy, hardware and cooling are needed.', 'weigh the benefit of a larger model against the cost'],
  ];
  b += t(220, 130, 'Cause', { size: 17, weight: 700, anchor: 'middle', fill: C.muted }) + t(500, 130, 'Effect', { size: 17, weight: 700, anchor: 'middle', fill: C.muted }) + t(760, 130, 'Response / question', { size: 17, weight: 700, anchor: 'middle', fill: C.muted });
  let y = 146;
  issues.forEach(([h, c, e, r]) => {
    const hh = 172;
    b += t(30, y + 22, h, { size: 19, weight: 700, fill: C.rust });
    b += box(30, y + 36, 340, hh - 40, PINK, C.rust, 10) + para(48, y + 66, c, 36, { size: 15 }, 20);
    b += arrow(374, y + 36 + (hh - 40) / 2, 392, y + 36 + (hh - 40) / 2, { w: 3 });
    b += box(396, y + 36, 250, hh - 40, C.panel, C.ink, 10) + para(412, y + 66, e, 27, { size: 15 }, 20);
    b += arrow(650, y + 36 + (hh - 40) / 2, 668, y + 36 + (hh - 40) / 2, { w: 3 });
    b += box(672, y + 36, 198, hh - 40, C.tealLight, C.tealDark, 10) + para(688, y + 66, r, 21, { size: 15 }, 20);
    y += hh + 14;
  });
  b += box(30, y, 840, 84, C.cream, C.olive);
  b += t(52, y + 34, 'In an evaluation: weigh benefits (speed, accuracy at scale, patterns humans miss)', { size: 16, weight: 600 });
  b += t(52, y + 62, 'against these risks, and reach a judgement about the application in the scenario.', { size: 16, weight: 700 });
  add('06-ethical-issues',
    svg(900, y + 108, 'Ethical issues in machine learning', b),
    'Three ethical issues traced from cause to effect to response: biased training data leads a model to repeat unfairness, answered by balanced data, testing across groups and human review; hard-to-explain models leave people unable to challenge decisions, raising accountability; and training large models costs energy, hardware and cooling, to be weighed against the benefit.',
    'Link each ethical issue to the scenario’s data and users, then weigh it against the benefits.',
    '## What ethical issues does machine learning raise?');
}
