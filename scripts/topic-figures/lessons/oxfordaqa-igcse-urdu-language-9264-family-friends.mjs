import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-urdu-language-9264-family-friends';
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

// 01 Paternal and maternal relatives
{
  let b = t(260, 132, 'Father’s side', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(640, 132, 'Mother’s side', { size: 20, weight: 700, anchor: 'middle', fill: C.olive });
  const kin = (x, y, w, ur, en, fill, edge) => box(x, y, w, 96, fill, edge, 2.5, 12) + u(x + w / 2, y + 48, ur, { size: 26, anchor: 'middle' }) + t(x + w / 2, y + 82, en, { size: 15, anchor: 'middle', fill: C.muted });
  b += kin(130, 148, 260, 'دادا / دادی', 'father’s father / father’s mother', C.tealLight, C.tealDark);
  b += kin(510, 148, 260, 'نانا / نانی', 'mother’s father / mother’s mother', C.cream, C.olive);
  b += path('M260,244 V268 M130,268 H350 M130,268 V292 M350,268 V292', { w: 3 }) + path('M640,244 V268 M550,268 H770 M550,268 V292 M770,268 V292', { w: 3 });
  b += kin(30, 292, 200, 'چچا / پھوپھی', 'father’s brother / sister', C.tealLight, C.tealDark);
  b += kin(270, 292, 160, 'والد', 'father', C.panel, C.panelEdge);
  b += kin(470, 292, 160, 'والدہ', 'mother', C.panel, C.panelEdge);
  b += kin(670, 292, 200, 'ماموں / خالہ', 'mother’s brother / sister', C.cream, C.olive);
  b += `<line x1="430" y1="340" x2="470" y2="340" stroke="${C.ink}" stroke-width="3"/>` + path('M450,340 V418', { w: 3 });
  b += box(370, 420, 160, 50, C.mustard, C.ink, 2.5, 25) + t(450, 452, 'you', { size: 19, weight: 700, anchor: 'middle' });
  b += t(52, 520, 'Also useful', { size: 18, weight: 700 });
  [['والدین', 'parents (plural verb)'], ['رشتہ دار', 'relative'], ['مشترکہ خاندان', 'joint family'], ['اکلوتا / اکلوتی', 'only (child)']].forEach(([ur, en], i) => { b += vchip(30 + i * 212, 536, 204, ur, en); });
  b += box(30, 656, 840, 52, '#f6ece4', C.rust, 2) + t(450, 689, 'In translation, read family words twice: grandmother may be either side', { size: 18, weight: 600, anchor: 'middle' });
  add('01-paternal-maternal-relatives',
    svg(900, 730, 'Father’s side, mother’s side', b),
    'A family tree with Urdu terms. On the father’s side: دادا / دادی (grandparents) and چچا / پھوپھی (uncle and aunt). On the mother’s side: نانا / نانی and ماموں / خالہ. Parents are والد and والدہ; useful extras are والدین, رشتہ دار, مشترکہ خاندان and اکلوتا / اکلوتی.',
    'Urdu names relatives by side of the family, and translation tasks test it.',
    '## Vocabulary you need to produce, not just recognise');
}

// 02 Agreement table
{
  const cols = [['Masculine', 260], ['Feminine', 470], ['Plural', 680]];
  let b = cols.map(([h, x]) => box(x, 110, 190, 46, C.teal, C.tealDark, 2, 10) + t(x + 95, 140, h, { size: 18, weight: 700, anchor: 'middle' })).join('');
  const rows = [
    ['Possessive', 'agrees with the noun,', ['میرا بھائی', 'میری بہن', 'میرے والدین'], 'not the speaker'],
    ['Marked adjective', 'ends in alif: changes', ['شرمیلا لڑکا', 'شرمیلی لڑکی', 'شرمیلے بچے'], ''],
    ['Unmarked adjective', 'does not change', ['مہربان استاد', 'مہربان استانی', ''], ''],
  ];
  rows.forEach(([h, n1, cells, n2], i) => {
    const y = 170 + i * 110;
    b += panel(30, y, 220, 96) + t(48, y + 36, h, { size: 18, weight: 700 }) + t(48, y + 62, n1, { size: 15, fill: C.muted }) + (n2 ? t(48, y + 82, n2, { size: 15, fill: C.muted }) : '');
    cells.forEach((c, j) => {
      const x = cols[j][1];
      b += c ? box(x, y, 190, 96, j === 1 ? C.cream : C.panel, j === 1 ? C.olive : C.panelEdge, 2.5, 12) + u(x + 95, y + 60, c, { size: 26, anchor: 'middle' })
        : `<rect x="${x}" y="${y}" width="190" height="96" rx="12" fill="none" stroke="${C.panelEdge}" stroke-width="2.5" stroke-dasharray="8 6"/>`;
    });
  });
  b += box(30, 510, 840, 100, C.tealLight, C.tealDark, 2, 12) + t(52, 546, 'Same rule for', { size: 19, weight: 700 }) + u(240, 550, 'کا / کی / کے', { size: 24, anchor: 'middle', fill: C.tealDark }) + t(52, 576, 'my friend’s sister: feminine because sister is feminine', { size: 16, fill: C.muted }) +
    u(846, 568, 'میرے دوست کی بہن', { size: 28 });
  add('02-agreement-table',
    svg(900, 640, 'Agreement follows the noun', b),
    'A table of agreement: the possessive changes with the noun (میرا بھائی, میری بہن, میرے والدین), a marked adjective changes (شرمیلا لڑکا, شرمیلی لڑکی, شرمیلے بچے), and an unmarked adjective stays the same (مہربان استاد, مہربان استانی). میرے دوست کی بہن follows the same rule.',
    'A boy and a girl both say میرا بھائی: agreement follows the noun.',
    '## Grammar that carries this topic');
}

// 03 Two slips examiners notice: respect and ملنا
{
  const line = (y, ok, ur, gloss) => (ok ? tick(70, y - 10) : cross(70, y - 10)) + u(846, y, ur, { size: 26 }) + t(100, y - 4, gloss, { size: 16, fill: ok ? C.muted : C.rust, italic: true });
  let b = panel(30, 110, 840, 290) + t(54, 146, 'Elders take the plural verb as respect', { size: 21, weight: 700 }) + t(54, 172, 'parents, grandparents, teachers: even for one person', { size: 16, fill: C.muted });
  b += line(232, true, 'میرے دادا بہت مہربان ہیں', 'my grandfather is very kind');
  b += line(298, true, 'میری والدہ ڈاکٹر ہیں', 'my mother is a doctor');
  b += line(364, true, 'میری نانی ہمیں کہانیاں سناتی ہیں', 'my grandmother tells us stories');
  b += panel(30, 420, 840, 290) + t(54, 456, 'Meeting someone: use', { size: 21, weight: 700 }) + u(318, 460, 'سے', { size: 26, anchor: 'middle', fill: C.tealDark }) + t(352, 456, 'and no', { size: 21, weight: 700 }) + u(450, 460, 'نے', { size: 26, anchor: 'middle', fill: C.rust }) + t(54, 482, 'the verb is intransitive', { size: 16, fill: C.muted });
  b += line(540, true, 'میں اپنے دوست سے ملا', 'I met my friend');
  b += line(606, false, 'میں نے اپنے دوست کو ملا', 'a very common error');
  b += line(672, true, 'ہماری ملاقات اسکول میں ہوئی', 'we met at school (first meeting)');
  add('03-respect-and-milna',
    svg(900, 730, 'Two slips examiners notice', b),
    'Elders take the plural verb ہیں as a mark of respect: میرے دادا بہت مہربان ہیں, میری والدہ ڈاکٹر ہیں. To say you met someone, use سے and no نے: میں اپنے دوست سے ملا is correct, میں نے اپنے دوست کو ملا is wrong, and ہماری ملاقات اسکول میں ہوئی is an alternative.',
    'Plural of respect for elders; ملنا takes سے, never نے.',
    '## Common mistakes');
}

// 04 Translation in three steps
{
  let b = box(30, 108, 840, 70, C.tealLight, C.tealDark, 2, 12) + t(450, 138, '"My older brother is very kind, but sometimes we argue.', { size: 18, italic: true, anchor: 'middle' }) + t(450, 162, 'My grandmother lives with us."', { size: 18, italic: true, anchor: 'middle' });
  const pair = (y, en, ur) => t(110, y, en, { size: 17 }) + arrow(330, y - 6, 470, y - 6, { w: 3 }) + u(650, y + 2, ur, { size: 25, anchor: 'middle' });
  b += panel(30, 196, 840, 236) + badge(66, 230, 20, '1') + t(100, 237, 'Find the verb and put it last', { size: 19, weight: 700 }) +
    pair(292, '"is kind"', 'مہربان ہے') + pair(350, '"argue"', 'جھگڑا ہو جاتا ہے') + pair(408, '"lives"', 'رہتی ہیں');
  b += panel(30, 448, 840, 182) + badge(66, 482, 20, '2') + t(100, 489, 'Check agreement and respect', { size: 19, weight: 700 }) +
    pair(544, 'brother is masculine', 'میرا بڑا بھائی') + pair(602, 'grandmother is an elder', 'رہتی ہیں');
  b += t(728, 600, 'not', { size: 17, anchor: 'middle', fill: C.rust, weight: 700 }) + u(846, 604, 'رہتی ہے', { size: 22, anchor: 'end', fill: C.rust });
  b += panel(30, 646, 840, 124) + badge(66, 680, 20, '3') + t(100, 687, 'Translate the sense, not each word', { size: 19, weight: 700 }) +
    pair(742, '"we argue"', 'ہمارا جھگڑا ہو جاتا ہے');
  b += box(30, 786, 840, 140, C.cream, C.olive, 2.5, 12) + t(54, 818, 'Answer', { size: 19, weight: 700, fill: C.olive }) +
    u(846, 860, 'میرا بڑا بھائی بہت مہربان ہے، لیکن کبھی کبھی ہمارا جھگڑا ہو جاتا ہے۔', { size: 26 }) + u(846, 910, 'میری دادی ہمارے ساتھ رہتی ہیں۔', { size: 26 });
  add('04-translation-steps',
    svg(900, 950, 'Translating into Urdu in three steps', b),
    'Three steps translate a sentence about a kind older brother and a grandmother: put each verb last (مہربان ہے, جھگڑا ہو جاتا ہے, رہتی ہیں), check agreement and respect (میرا بڑا بھائی, رہتی ہیں for an elder), and translate the sense (ہمارا جھگڑا ہو جاتا ہے).',
    'Verb last, agreement and respect checked, then the sense rather than each word.',
    '## Worked example 1: translation into Urdu');
}

// 05 Model paragraph, line by line
{
  const lines = [
    ['name and identity', 'present', 'میری سب سے اچھی سہیلی کا نام عائشہ ہے۔'],
    ['how you met', 'past event', 'ہماری ملاقات تین سال پہلے اسکول میں ہوئی۔'],
    ['what she is like', 'present', 'وہ بہت خوش مزاج اور مددگار ہے۔'],
    ['complex sentence', 'when ... then', 'جب مجھے ریاضی کا کوئی سوال سمجھ میں نہیں آتا تو وہ میری مدد کرتی ہے۔'],
    ['justified opinion', 'a true friend is ...', 'میرے خیال میں سچا دوست وہی ہے جو مشکل وقت میں ساتھ دے۔'],
    ['future plan', 'feminine plural', 'اگلی گرمیوں میں ہم دونوں ایک ساتھ کمپیوٹر کورس کریں گی۔'],
  ];
  let b = t(450, 128, 'Task: describe your best friend, how you met, and future plans together', { size: 17, italic: true, anchor: 'middle', fill: C.muted });
  lines.forEach(([h, s, ur], i) => {
    const y = 148 + i * 84, hi = i === 3 || i === 4;
    b += box(30, y, 840, 72, hi ? C.cream : C.panel, hi ? C.olive : C.panelEdge, 2.5, 12) +
      t(48, y + 32, h, { size: 16, weight: 700 }) + t(48, y + 54, s, { size: 15, fill: C.muted }) + u(852, y + 46, ur, { size: 23 });
  });
  b += box(30, 660, 840, 56, C.tealLight, C.tealDark, 2) + t(450, 694, 'Three time frames, one complex sentence, one justified opinion, accurate agreement', { size: 17, weight: 600, anchor: 'middle' });
  add('05-model-paragraph',
    svg(900, 740, 'A best-friend paragraph, line by line', b),
    'The six sentences of the model answer, each labelled: name and identity (present), how they met (past), what she is like, a complex جب ... تو sentence, a justified opinion about a true friend, and a future plan with feminine plural کریں گی.',
    'Present, past and future, plus a complex sentence and a justified opinion.',
    '## Worked example 2: a short piece of writing');
}

// 06 Exam technique: question words and a writing plan
{
  let b = t(54, 138, 'Reading: know the question words', { size: 21, weight: 700 });
  [['کون', 'who'], ['کیا', 'what'], ['کب', 'when'], ['کہاں', 'where'], ['کیوں', 'why'], ['کیسے', 'how'], ['کتنے', 'how many']].forEach(([ur, en], i) => {
    b += vchip(30 + i * 121, 156, 112, ur, en, i === 4 ? C.cream : C.panel, i === 4 ? C.olive : C.panelEdge);
  });
  b += box(30, 274, 840, 76, C.cream, C.olive, 2.5, 12) + t(54, 318, 'A why-question needs a reason, often after', { size: 18, weight: 600 }) +
    u(530, 322, 'کیونکہ', { size: 26, anchor: 'middle', fill: C.olive }) + t(600, 318, 'or', { size: 18, weight: 600, anchor: 'middle' }) + u(670, 322, 'اس لیے', { size: 26, anchor: 'middle', fill: C.olive });
  b += t(54, 400, 'Writing: a reliable plan for this topic', { size: 21, weight: 700 });
  const steps = [['Who', 'the person is'], ['What they', 'are like, with', 'an example'], ['How you', 'get on'], ['A past', 'memory'], ['A future plan', 'or a view on', 'relationships']];
  steps.forEach((ls, i) => {
    const x = 30 + i * 172;
    b += box(x, 420, 152, 130, i === 4 ? C.tealLight : C.panel, i === 4 ? C.tealDark : C.panelEdge, 2.5, 12) + badge(x + 28, 448, 17, String(i + 1), C.cream) +
      t(x + 14, 494, ls[0], { size: 17, weight: 700 }) + tl(x + 14, 518, ls.slice(1), { size: 16, fill: C.muted }, 20);
    if (i < 4) b += arrow(x + 153, 485, x + 170, 485, { w: 3 });
  });
  add('06-question-words-and-plan',
    svg(900, 580, 'Exam technique for this topic', b),
    'Seven Urdu question words with meanings: کون who, کیا what, کب when, کہاں where, کیوں why, کیسے how, کتنے how many; a why-question needs a reason, often after کیونکہ or اس لیے. A five-step writing plan runs from who the person is to a future plan.',
    'Know the question word; plan writing from person to past memory to future.',
    '## Exam technique');
}
