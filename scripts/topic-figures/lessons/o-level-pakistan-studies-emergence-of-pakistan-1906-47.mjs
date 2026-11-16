import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'o-level-pakistan-studies-emergence-of-pakistan-1906-47';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- local helpers ----
const CW = 0.5; // approx. average Inter glyph width as a share of font size
const wrap = (s, size, width) => {
  const max = Math.floor(width / (size * CW)); const out = [''];
  for (const w of s.split(' ')) { const cur = out[out.length - 1]; if (cur && (cur + ' ' + w).length > max) out.push(w); else out[out.length - 1] = cur ? cur + ' ' + w : w; }
  return out;
};
const para = (x, y, s, width, opts = {}, lh) => tl(x, y, wrap(s, opts.size || 17, width), opts, lh || (opts.size || 17) * 1.3);
const lines = (s, size, width) => wrap(s, size, width).length;
const rect = (x, y, w, h, fill, edge = C.ink, sw = 2.5, rx = 12, extra = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}" ${extra}/>`;
const box = (x, y, w, h, fill = '#ffffff', edge = C.panelEdge) => rect(x, y, w, h, fill, edge, 2.5, 12);
// Box with bold head and wrapped body, returns svg; height computed by caller via boxH
const boxH = (head, body, w, size = 17) => (head ? 34 : 14) + (body ? lines(body, size, w - 32) * (size * 1.3) : 0) + 14;
const tbox = (x, y, w, head, body, { fill = '#ffffff', edge = C.panelEdge, size = 17, headColor = C.ink, h } = {}) => {
  const hh = h || boxH(head, body, w, size);
  return box(x, y, w, hh, fill, edge) + (head ? t(x + 16, y + 28, head, { size: 18, weight: 700, fill: headColor }) : '') +
    (body ? para(x + 16, y + (head ? 54 : 30), body, w - 32, { size, fill: head ? C.muted : C.ink }, size * 1.3) : '');
};

// 01 Timeline 1905-47
{
  const KQ = { 6: [C.tealDark, 'KQ6 Early development'], 7: [C.mustard, 'KQ7 Khilafat'], 8: [C.blue, 'KQ8 1927–39'], 9: [C.rust, 'KQ9 1940–47'], 10: [C.olive, 'KQ10 Leaders'] };
  const ev = [
    ['1905', 'Partition of Bengal; Hindu agitation against it', 6],
    ['1906', 'Simla Deputation (1 Oct) asks for separate electorates', 6],
    ['1906', 'All-India Muslim League founded at Dhaka (Dec)', 6, 1],
    ['1909', 'Morley–Minto Reforms: separate electorates', 6],
    ['1916', 'Lucknow Pact: Congress accepts separate electorates', 6],
    ['1919', 'Rowlatt Act; Amritsar Massacre; Montagu–Chelmsford Reforms', 6],
    ['1920', 'Hijrat to Afghanistan ends in hardship', 7],
    ['1922', 'Chauri Chaura: Gandhi suspends Non-Cooperation', 7],
    ['1924', 'Turkey abolishes the caliphate', 7],
    ['1927', 'Delhi Proposals', 6],
    ['1928', 'Nehru Report', 8],
    ['1929', 'Jinnah’s 14 Points (March)', 8],
    ['1930', 'First Round Table Conference; Iqbal’s idea of a Muslim homeland', 8],
    ['1931', 'Second Round Table Conference', 8],
    ['1932', 'Third Round Table Conference; Communal Award', 8],
    ['1933', 'Rahmat Ali’s pamphlet: the name “Pakistan”', 10],
    ['1935', 'Government of India Act', 8],
    ['1937', 'Elections: Congress ministries in most provinces', 8],
    ['1939', 'Congress ministries resign: Day of Deliverance', 8],
    ['1940', 'Pakistan Resolution (23 March)', 9, 1],
    ['1942', 'Cripps Mission', 9],
    ['', 'Quit India: Congress leaders arrested', 9],
    ['1944', 'Gandhi–Jinnah talks', 9],
    ['1945', 'Simla Conference', 9],
    ['1945–46', 'Elections: League wins every Muslim seat in the central assembly', 9],
    ['1946', 'Cabinet Mission; Direct Action Day (16 August)', 9],
    ['1947', '3 June Plan; Indian Independence Act (July)', 9, 1],
  ];
  const y0 = 140, rh = 32, ax = 190;
  let b = `<line x1="${ax}" y1="${y0 - 16}" x2="${ax}" y2="${y0 + (ev.length - 1) * rh + 14}" stroke="${C.ink}" stroke-width="4"/>`;
  ev.forEach(([yr, s, k, hi], i) => {
    const y = y0 + i * rh;
    if (hi) b += `<rect x="${ax + 14}" y="${y - 20}" width="${666}" height="30" rx="8" fill="${C.cream}"/>`;
    b += t(ax - 22, y + 6, yr, { size: 18, weight: 700, anchor: 'end' });
    b += yr ? `<circle cx="${ax}" cy="${y}" r="8" fill="${KQ[k][0]}" stroke="${C.ink}" stroke-width="2"/>` : `<circle cx="${ax}" cy="${y}" r="7" fill="${C.bg}" stroke="${KQ[k][0]}" stroke-width="3"/>`;
    b += t(ax + 24, y + 6, s, { size: 18, weight: hi ? 700 : 400 });
  });
  const ly = y0 + ev.length * rh + 16;
  let lx = 40;
  Object.values(KQ).forEach(([c, l]) => { b += `<circle cx="${lx + 8}" cy="${ly}" r="8" fill="${c}" stroke="${C.ink}" stroke-width="2"/>` + t(lx + 22, ly + 6, l, { size: 15 }); lx += l.length * 7.6 + 50; });
  b += t(450, ly + 36, 'Events in order; spacing is not to scale. Hollow dot: no date given in the lesson.', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  add('01-timeline-1905-47',
    svg(900, ly + 60, 'The road to Pakistan, 1905–47', b),
    'A vertical timeline of the events in this section, from the 1905 Partition of Bengal and the founding of the Muslim League in 1906 to the Pakistan Resolution of 1940 and the Indian Independence Act of July 1947, with each event coloured by its Key Question.',
    'Forty years of events in one sequence: learn the order before the detail.',
    '## Syllabus coverage');
}

// 02 Paper structure
{
  let b = panel(30, 110, 840, 110, C.tealLight, C.tealDark) + t(60, 152, 'Section A', { size: 23, weight: 700 }) + t(220, 152, 'compulsory', { size: 18, weight: 700, fill: C.tealDark }) +
    t(60, 186, 'Source-based question: use and interpret the source alongside your own knowledge.', { size: 17, fill: C.muted });
  b += panel(30, 240, 840, 350) + t(60, 282, 'Section B', { size: 23, weight: 700 }) + t(220, 282, 'answer 2 of 4 questions', { size: 18, weight: 700, fill: C.olive });
  const parts = [['4', 'marks', 'Knowledge', '', C.cream, 110], ['7', 'marks', 'Explanation', '', C.tealLight, 170], ['14', 'marks', 'Evaluation essay', '', C.teal, 240]];
  let x = 60;
  parts.forEach(([n, m, h, s, f, hgt]) => {
    const w = 240, base = 560;
    b += rect(x, base - hgt, w, hgt, f, C.ink, 2.5, 12) + t(x + w / 2, base - hgt + 44, n, { size: 34, weight: 700, anchor: 'middle' }) + t(x + w / 2, base - hgt + 68, m, { size: 16, anchor: 'middle', fill: C.muted }) +
      t(x + w / 2, base - 20, h, { size: 19, weight: 700, anchor: 'middle' });
    x += w + 30;
  });
  b += panel(30, 610, 840, 210, C.cream, C.olive) + t(60, 648, 'Building the 14-mark answer', { size: 21, weight: 700 });
  const steps = ['Factor named in the question', 'Second factor', 'Third factor', 'Reasoned judgement'];
  steps.forEach((s, i) => {
    const bx = 60 + i * 200, w = 170;
    b += rect(bx, 670, w, 80, i === 3 ? C.mustard : '#ffffff', C.ink, 2.5, 10) + tl(bx + w / 2, 702, wrap(s, 17, w - 20), { size: 17, weight: 700, anchor: 'middle' }, 22);
    if (i < 3) b += arrow(bx + w + 3, 710, bx + w + 26, 710, { w: 3 });
  });
  b += t(60, 790, 'Explain at least three factors with accurate detail, then finish with a judgement.', { size: 17, fill: C.muted });
  add('02-paper-1-structure',
    svg(900, 840, 'Paper 1: 1 hour 30 minutes', b),
    'Section A is a compulsory source-based question. In Section B candidates answer two of four questions, each split into 4-, 7- and 14-mark parts. The 14-mark answer explains the named factor and at least two others before reaching a reasoned judgement.',
    'The 14-mark essay carries the most marks: three explained factors and a judgement.',
    '## What is the paper structure?');
}

// 03 Why the League was founded
{
  const causes = [
    ['Sir Syed’s advice', 'Muslims should stay out of Congress'],
    ['Partition of Bengal', 'Hindu agitation against the 1905 partition'],
    ['Simla Deputation', '1 October 1906: the Aga Khan asks Lord Minto for separate electorates, with success'],
  ];
  let b = t(450, 132, 'CAUSES', { size: 18, weight: 700, anchor: 'middle', fill: C.muted });
  causes.forEach(([h, s], i) => { b += tbox(30 + i * 285, 148, 270, h, s, { h: 130, fill: C.tealLight, edge: C.tealDark }); b += arrow(165 + i * 285, 282, 450 + (i - 1) * 60, 352, { w: 3.5 }); });
  b += rect(220, 360, 460, 96, C.mustard, C.ink, 3, 14) + t(450, 398, 'All-India Muslim League founded', { size: 22, weight: 700, anchor: 'middle' }) + t(450, 428, 'Dhaka, December 1906', { size: 18, anchor: 'middle' });
  b += arrow(450, 460, 450, 498, { w: 3.5 });
  b += t(450, 522, 'AIMS', { size: 18, weight: 700, anchor: 'middle', fill: C.muted });
  const aims = ['Protect Muslim political rights', 'Encourage loyalty to the British', 'Promote good relations with other communities'];
  aims.forEach((s, i) => { b += tbox(30 + i * 285, 538, 270, '', s, { h: 84, size: 18 }); });
  b += panel(30, 646, 840, 112, C.cream, C.olive) + t(60, 682, 'Judgement', { size: 19, weight: 700 }) +
    para(60, 710, 'Bengal was the trigger, but the deeper cause was the need to protect Muslim interests as elected councils expanded.', 670, { size: 17 }, 23);
  add('03-league-founded-1906',
    svg(900, 778, 'Why the Muslim League was founded', b),
    'Three causes (Sir Syed’s advice to stay out of Congress, Hindu agitation against the 1905 Partition of Bengal, and the successful Simla Deputation of 1 October 1906) lead to the founding of the League at Dhaka in December 1906, which had three aims.',
    'Bengal was the trigger; protecting Muslim interests as councils grew was the deeper cause.',
    '## Focus point: why was the Muslim League founded in 1906?');
}

// 04 Muslim-Hindu relations 1916-27
{
  const pts = [[170, 230], [390, 262], [600, 470], [800, 400]];
  let b = panel(30, 110, 840, 490);
  b += t(54, 160, 'closer', { size: 16, fill: C.tealDark, weight: 700 }) + t(54, 548, 'further', { size: 16, fill: C.rust, weight: 700 }) + t(54, 568, 'apart', { size: 16, fill: C.rust, weight: 700 });
  b += arrow(76, 528, 76, 176, { w: 2.5, color: C.muted });
  b += `<path d="M${pts.map((p) => p.join(',')).join(' L')}" fill="none" stroke="${C.ink}" stroke-width="4" stroke-linejoin="round"/>`;
  const cols = [C.tealDark, C.mustard, C.rust, C.mustard];
  pts.forEach(([x, y], i) => { b += `<circle cx="${x}" cy="${y}" r="10" fill="${cols[i]}" stroke="${C.ink}" stroke-width="2.5"/>`; });
  const lab = (x, y, an, rows) => rows.map(([s, o], i) => t(x, y + i * 22, s, { size: 16, anchor: an, ...o })).join('');
  const Y = { fill: C.muted, weight: 700 }, H = { size: 18, weight: 700 }, M = { fill: C.muted };
  b += lab(140, 286, 'start', [['1916', Y], ['Lucknow Pact', H], ['Congress accepts', M], ['separate electorates', M]]);
  b += lab(390, 196, 'middle', [['Khilafat and Non-Cooperation', H], ['co-operation continues', M]]);
  b += lab(600, 512, 'middle', [['After 1922: breakdown', H], ['communal riots; shuddhi and sangathan;', M], ['tabligh and tanzim responses', M]]);
  b += lab(850, 296, 'end', [['1927', Y], ['Delhi Proposals', H], ['final Muslim offer: joint', M], ['electorates for safeguards', M]]);
  b += t(450, 626, 'Schematic: the line shows the direction of change, not a measured value.', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  add('04-relations-1916-27',
    svg(900, 650, 'Muslim–Hindu relations, 1916–27', b),
    'A line falls from the Lucknow Pact of 1916, the high point of co-operation, through the Khilafat and Non-Cooperation campaigns, to a breakdown after 1922 marked by communal riots and rival revival movements, ending with the Delhi Proposals of 1927 as a final Muslim offer.',
    'Co-operation peaked in 1916 and broke down after 1922.',
    '## Focus point: how did Muslim–Hindu relations change, 1916–27?');
}

// 05 Khilafat movement: why it failed
{
  let b = panel(30, 110, 840, 130, C.tealLight, C.tealDark) + t(60, 148, 'Aim', { size: 20, weight: 700, fill: C.tealDark }) +
    para(120, 148, 'The Ottoman caliph should keep control of the holy places after Turkey’s defeat in the First World War.', 720, { size: 17 }, 23) +
    t(60, 214, 'Led by Maulana Muhammad Ali Jauhar and Maulana Shaukat Ali', { size: 16, fill: C.muted, italic: true });
  const blows = [
    ['', 'Delegations to Britain rejected', 'Britain rejected the appeal.'],
    ['1920', 'Hijrat to Afghanistan', 'Ended in hardship when Afghanistan closed its border.'],
    ['1922', 'Chauri Chaura', 'Gandhi suspended Non-Cooperation, breaking the joint campaign.'],
    ['', 'Moplah uprising', 'Soured Muslim–Hindu relations.'],
    ['1924', 'Turkey abolished the caliphate', 'The cause itself was gone.'],
  ];
  const y0 = 270, rh = 92;
  b += `<line x1="120" y1="${y0}" x2="120" y2="${y0 + 4 * rh + 40}" stroke="${C.ink}" stroke-width="4"/>`;
  blows.forEach(([yr, h, s], i) => {
    const y = y0 + i * rh;
    b += badge(120, y + 36, 22, String(i + 1), i === 4 || i === 2 ? C.mustard : C.cream);
    b += t(70, y + 42, yr, { size: 17, weight: 700, anchor: 'end' });
    b += box(160, y, 710, 76) + t(180, y + 32, h, { size: 19, weight: 700 }) + t(180, y + 60, s, { size: 17, fill: C.muted });
  });
  const by = y0 + 5 * rh + 10;
  b += panel(30, by, 840, 110, C.cream, C.olive) + t(60, by + 38, 'Weighing the causes', { size: 19, weight: 700 }) +
    para(60, by + 68, 'Turkey’s decision ended the cause itself, but Gandhi’s withdrawal had already broken the movement’s strength.', 780, { size: 17 }, 23);
  add('05-khilafat-failure',
    svg(900, by + 130, 'Why the Khilafat Movement failed', b),
    'The aim of the Khilafat Movement sits above five blows in order: delegations to Britain rejected, the Hijrat of 1920, Gandhi’s suspension of Non-Cooperation after Chauri Chaura in 1922, the Moplah uprising, and Turkey’s abolition of the caliphate in 1924.',
    'Five blows ended the movement; 1922 and 1924 are the two to weigh against each other.',
    '## Focus point: why did the Khilafat Movement fail?');
}

// 06 Nehru Report vs 14 Points
{
  const chain = [['Simon Commission', 'no Indian members'], ['Nehru Report', '1928'], ['Jinnah’s amendments', 'rejected at the All-Parties Convention'], ['14 Points', 'March 1929']];
  let b = '';
  chain.forEach(([h, s], i) => {
    const x = 30 + i * 215, w = 195;
    b += rect(x, 116, w, 96, i === 3 ? C.mustard : C.tealLight, C.ink, 2.5, 12) + t(x + w / 2, 148, h, { size: 17, weight: 700, anchor: 'middle' }) + tl(x + w / 2, 174, wrap(s, 15, w - 20), { size: 15, anchor: 'middle', fill: C.muted }, 19);
    if (i < 3) b += arrow(x + w + 2, 164, x + w + 18, 164, { w: 3 });
  });
  const rows = [
    ['Electorates', 'Rejected separate electorates', 'Separate electorates'],
    ['Muslim share of central seats', 'Rejected the one-third Muslim share', 'One-third Muslim representation in the central legislature'],
    ['Power', 'A strong centre', 'Federal system; residual powers for the provinces'],
    ['Muslim culture', '', 'Protection of Muslim culture, religion and personal law'],
  ];
  const cx = [30, 260, 565], cw = [220, 295, 305];
  let y = 250;
  b += rect(cx[1], y, cw[1], 46, C.rust, C.ink, 2.5, 10) + t(cx[1] + cw[1] / 2, y + 30, 'Nehru Report (1928)', { size: 18, weight: 700, anchor: 'middle', fill: '#ffffff' });
  b += rect(cx[2], y, cw[2], 46, C.tealDark, C.ink, 2.5, 10) + t(cx[2] + cw[2] / 2, y + 30, '14 Points (1929)', { size: 18, weight: 700, anchor: 'middle', fill: '#ffffff' });
  y += 58;
  rows.forEach(([k, n, f]) => {
    const h = Math.max(lines(n || '-', 17, cw[1] - 28), lines(f, 17, cw[2] - 28), lines(k, 17, cw[0] - 28)) * 22 + 30;
    b += rect(cx[0], y, cw[0], h, C.cream, C.olive, 2, 10) + para(cx[0] + 14, y + 28, k, cw[0] - 28, { size: 17, weight: 700 }, 22);
    b += rect(cx[1], y, cw[1], h, '#ffffff', C.panelEdge, 2, 10) + (n ? para(cx[1] + 14, y + 28, n, cw[1] - 28, { size: 17 }, 22) : t(cx[1] + cw[1] / 2, y + 28, '–', { size: 17, anchor: 'middle', fill: C.muted }));
    b += rect(cx[2], y, cw[2], h, C.tealLight, C.panelEdge, 2, 10) + para(cx[2] + 14, y + 28, f, cw[2] - 28, { size: 17 }, 22);
    y += h + 10;
  });
  add('06-nehru-report-14-points',
    svg(900, y + 14, 'From the Nehru Report to the 14 Points', b),
    'A chain runs from the all-British Simon Commission to the Nehru Report of 1928, the rejection of Jinnah’s amendments and the 14 Points of March 1929. A grid compares the two documents on electorates, the Muslim share of central seats, the balance of power and the protection of Muslim culture.',
    'The 14 Points answered the Nehru Report point by point.',
    '## Focus point: why did Jinnah produce his 14 Points in 1929?');
}

// 07 1940-47: failures that strengthened the League
{
  const steps = [
    ['1940', 'Pakistan Resolution', '23 March'],
    ['1942', 'Cripps Mission', 'rejected by both parties'],
    ['', 'Quit India', 'Congress leaders arrested; League grows'],
    ['1944', 'Gandhi–Jinnah talks', 'failed'],
    ['1945', 'Simla Conference', 'failed'],
    ['1945–46', 'Elections', 'League wins every Muslim seat in the central assembly'],
  ];
  const x0 = 40, sw = 136, base = 600, sh = 62;
  let b = '';
  steps.forEach(([yr, h, s], i) => {
    const x = x0 + i * (sw + 2), top = base - (i + 1) * sh - 60;
    b += rect(x, top, sw, base - top, i === 5 ? C.mustard : i % 2 ? C.tealLight : C.teal, C.ink, 2.5, 8);
    b += t(x + sw / 2, top + 28, yr, { size: 17, weight: 700, anchor: 'middle', fill: C.ink });
    b += tl(x + sw / 2, top + 54, wrap(h, 16, sw - 14), { size: 16, weight: 700, anchor: 'middle' }, 20);
    const hl = wrap(h, 16, sw - 14).length;
    b += tl(x + sw / 2, top + 58 + hl * 20, wrap(s, 15, sw - 14), { size: 15, anchor: 'middle', fill: C.muted }, 19);
  });
  b += t(40, 150, 'League strength', { size: 19, weight: 700, fill: C.olive }) + t(40, 174, 'grows with each failure', { size: 17, fill: C.olive });
  b += arrow(40, base + 22, 860, base + 22, { w: 3 }) + t(450, base + 50, 'Each failed solution strengthened the League’s position (heights are schematic)', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  // after elections
  const after = [['1946', 'Cabinet Mission', 'Three-tier federation; broke down when the League withdrew'], ['16 Aug 1946', 'Direct Action Day', 'Violence followed'], ['1947', '3 June Plan', 'Mountbatten accepts partition'], ['July 1947', 'Indian Independence Act', 'Boundaries drawn by the Radcliffe Commission']];
  let y = 710;
  b += t(450, y - 16, 'British policy changes: the League can no longer be treated as one party among many', { size: 17, weight: 700, anchor: 'middle' });
  after.forEach(([yr, h, s], i) => {
    const x = 30 + i * 213, w = 200;
    b += rect(x, y, w, 162, i === 3 ? C.cream : '#ffffff', i === 3 ? C.olive : C.panelEdge, 2.5, 12) + t(x + 14, y + 28, yr, { size: 16, weight: 700, fill: C.rust }) +
      tl(x + 14, y + 54, wrap(h, 17, w - 28), { size: 17, weight: 700 }, 21);
    const hl = wrap(h, 17, w - 28).length;
    b += tl(x + 14, y + 60 + hl * 21, wrap(s, 15, w - 28), { size: 15, fill: C.muted }, 19);
    if (i < 3) b += arrow(x + w + 1, y + 75, x + 212, y + 75, { w: 3 });
  });
  add('07-solutions-1940-47',
    svg(900, 892, 'From the Pakistan Resolution to partition', b),
    'A staircase of six steps from the Pakistan Resolution of 1940 through the Cripps Mission, Quit India, the Gandhi–Jinnah talks and the Simla Conference to the League’s victory in the 1945–46 elections. Below, four boxes run from the Cabinet Mission of 1946 to the Indian Independence Act of July 1947.',
    'Every failed solution left the League stronger, until Britain accepted partition.',
    '## Focus point: how did the 1945–46 elections change British policy?');
}

// 08 Three leaders
{
  const cols = [
    ['Jinnah', C.tealDark, ['Reorganised the League after 1934', 'The 14 Points', 'The 1940 Resolution', 'Leadership in the 1945–46 elections', 'Negotiations of 1946–47'], 'Made it a political reality'],
    ['Allama Iqbal', C.blue, ['The idea of a Muslim homeland in 1930', 'Letters urging Jinnah to lead'], 'Shaped the idea'],
    ['Rahmat Ali', C.olive, ['The name “Pakistan”', 'The 1933 pamphlet', 'But little political influence'], 'Shaped the idea'],
  ];
  let b = '';
  cols.forEach(([n, c, items, verdict], i) => {
    const x = 30 + i * 285, w = 270;
    b += panel(x, 110, w, 400) + `<rect x="${x}" y="110" width="${w}" height="56" rx="14" fill="${c}"/>` + `<rect x="${x}" y="150" width="${w}" height="16" fill="${c}"/>` + t(x + w / 2, 147, n, { size: 22, weight: 700, anchor: 'middle', fill: '#ffffff' });
    let y = 200;
    items.forEach((s) => { const L = wrap(s, 17, w - 50); b += `<circle cx="${x + 22}" cy="${y - 6}" r="5" fill="${c}"/>` + tl(x + 36, y, L, { size: 17, italic: s.startsWith('But') }, 22); y += L.length * 22 + 14; });
    b += rect(x + 16, 430, w - 32, 62, i === 0 ? C.mustard : C.cream, C.ink, 2, 10) + tl(x + w / 2, 468, [verdict], { size: 17, weight: 700, anchor: 'middle' });
  });
  b += panel(30, 530, 840, 74, C.cream, C.olive) + t(450, 575, 'Iqbal and Rahmat Ali shaped the idea; Jinnah made it a political reality.', { size: 18, weight: 700, anchor: 'middle' });
  add('08-jinnah-iqbal-rahmat-ali',
    svg(900, 624, 'Three contributors to the Pakistan Movement', b),
    'Three columns list each leader’s contribution: Jinnah reorganised the League, wrote the 14 Points, led the 1940 Resolution, the 1945–46 elections and the 1946–47 negotiations; Iqbal gave the idea of a Muslim homeland in 1930; Rahmat Ali gave the name “Pakistan” in his 1933 pamphlet but had little political influence.',
    'Two men shaped the idea; one turned it into a state.',
    '## Focus point: how important were Jinnah, Iqbal and Rahmat Ali?');
}
