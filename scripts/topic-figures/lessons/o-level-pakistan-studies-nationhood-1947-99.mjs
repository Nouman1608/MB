import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'o-level-pakistan-studies-nationhood-1947-99';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText.replace(/(viewBox="0 0 \d+ |height=")([\d.]+)/g, (m, a, n) => a + Math.round(+n)), alt, caption, after });

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
// bullet list: returns { svg, h }
const blist = (x, y, items, width, { size = 17, color = C.ink, dot = C.tealDark, gap = 10, lh } = {}) => {
  let s = '', yy = y; const L = lh || size * 1.3;
  items.forEach((it) => { const ls = wrap(it, size, width - 22); s += `<circle cx="${x + 6}" cy="${yy - size * 0.33}" r="5" fill="${dot}"/>` + tl(x + 22, yy, ls, { size, fill: color }, L); yy += ls.length * L + gap; });
  return { svg: s, h: yy - y };
};

// 01 Leaders 1947-99 (Gantt)
{
  const X0 = 260, X1 = 850, Y0 = 1947, Y1 = 2000;
  const X = (y) => X0 + ((y - Y0) * (X1 - X0)) / (Y1 - Y0);
  const rows = [
    ['Jinnah', 'to Sept 1948', [[1947, 1948.7]], C.mustard],
    ['Liaquat Ali Khan', 'PM 1947–51', [[1947, 1951.8]], C.teal],
    ['Unstable ministries', '1951–58', [[1951.8, 1958]], C.rock],
    ['Ayub Khan', '1958–69', [[1958, 1969]], C.blue],
    ['Zulfikar Ali Bhutto', '1971–77', [[1971, 1977]], C.tealDark],
    ['Zia-ul-Haq', '1977–88', [[1977, 1988]], C.olive],
    ['Benazir Bhutto', '1988–90, 1993–96', [[1988, 1990], [1993, 1996]], C.rust],
    ['Nawaz Sharif', '1990–93, 1997–99', [[1990, 1993], [1997, 1999.8]], C.blue],
    ['Musharraf', 'takeover Oct 1999', [[1999.8, 2000]], C.ink],
  ];
  const rt = 140, rh = 52;
  let b = '';
  for (let y = 1950; y <= 2000; y += 10) b += `<line x1="${X(y)}" y1="${rt - 10}" x2="${X(y)}" y2="${rt + rows.length * rh + 4}" stroke="${C.panelEdge}" stroke-width="1.5"/>` + t(X(y), rt - 18, String(y), { size: 16, weight: 700, anchor: 'middle', fill: C.muted });
  rows.forEach(([n, yrs, bars, c], i) => {
    const y = rt + i * rh;
    if (i % 2 === 0) b += `<rect x="30" y="${y}" width="840" height="${rh}" fill="#ffffff" opacity="0.7"/>`;
    b += t(40, y + 24, n, { size: 18, weight: 700 }) + t(40, y + 44, yrs, { size: 15, fill: C.muted });
    bars.forEach(([a, z]) => { b += rect(X(a), y + 12, Math.max(6, X(z) - X(a)), rh - 24, c, C.ink, 1.5, 5); });
  });
  // constitutions
  const cy = rt + rows.length * rh + 34;
  b += t(40, cy + 6, 'Constitutions', { size: 18, weight: 700 });
  [1956, 1962, 1973].forEach((yr) => { b += `<path d="M${X(yr)},${cy - 12} l12,12 l-12,12 l-12,-12 z" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` + t(X(yr), cy + 36, String(yr), { size: 16, weight: 700, anchor: 'middle' }); });
  add('01-leaders-timeline',
    svg(900, cy + 64, 'Who governed Pakistan, 1947–99', b),
    'A bar chart of leaders against a 1947–2000 time axis: Jinnah to September 1948, Liaquat Ali Khan to 1951, unstable ministries to 1958, Ayub Khan 1958–69, Zulfikar Ali Bhutto 1971–77, Zia-ul-Haq 1977–88, then Benazir Bhutto and Nawaz Sharif alternating until Musharraf’s takeover in October 1999. Diamonds mark the constitutions of 1956, 1962 and 1973.',
    'Attach every policy to the right leader on this timeline.',
    '## How does this section appear in the exam?');
}

// 02 Problems of 1947-48
{
  const probs = [
    ['Boundaries', 'Radcliffe Award gave most of Gurdaspur to India', 'Lasting grievance', 0],
    ['Water', 'Supply to Pakistani canals cut in 1948', 'Solved later: Indus Waters Treaty, 1960', 1],
    ['Assets', 'Share of cash and military stores delayed and reduced', 'Weak start for treasury and army', 0],
    ['Princely states', 'Junagadh, Hyderabad and the Kashmir war, 1947–48', 'UN ceasefire 1949; Kashmir unresolved', 0],
    ['Refugees', 'Millions arrived amid violence', 'Huge relief effort; strain on cities', 2],
    ['Administration', 'New capital at Karachi; few trained officials', 'Government built almost from scratch', 1],
    ['Language', 'Urdu declared the state language', 'Opposition in East Pakistan', 0],
  ];
  let b = '';
  const rh = 78;
  b += t(155, 128, 'PROBLEM', { size: 16, weight: 700, anchor: 'middle', fill: C.muted }) + t(620, 128, 'OUTCOME', { size: 16, weight: 700, anchor: 'middle', fill: C.muted });
  probs.forEach(([h, s, o, ok], i) => {
    const y = 140 + i * (rh + 10);
    b += rect(30, y, 470, rh, '#ffffff', C.panelEdge, 2.5, 12) + t(50, y + 30, h, { size: 19, weight: 700 }) + para(50, y + 56, s, 440, { size: 16, fill: C.muted }, 20);
    b += arrow(504, y + rh / 2, 536, y + rh / 2, { w: 3 });
    b += rect(542, y, 328, rh, ok === 2 ? C.cream : ok ? C.tealLight : '#f6e4d8', ok === 2 ? C.olive : ok ? C.tealDark : C.rust, 2.5, 12) + tl(562, y + (lines(o, 17, 290) > 1 ? 32 : 44), wrap(o, 17, 290), { size: 17, weight: 600 }, 22);
  });
  const y = 140 + 7 * (rh + 10) + 6;
  b += `<rect x="430" y="${y}" width="18" height="18" rx="4" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2"/>` + t(456, y + 15, 'dealt with', { size: 15 }) + `<rect x="565" y="${y}" width="18" height="18" rx="4" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>` + t(591, y + 15, 'mixed', { size: 15 }) +
    `<rect x="700" y="${y}" width="18" height="18" rx="4" fill="#f6e4d8" stroke="${C.rust}" stroke-width="2"/>` + t(726, y + 15, 'lasting damage', { size: 15 });
  b += panel(30, y + 34, 840, 104, C.cream, C.olive) + t(54, y + 68, 'Judgement', { size: 19, weight: 700 }) +
    para(54, y + 96, 'The state survived, a real success, but Kashmir and the language issue were left unresolved; Jinnah’s death in September 1948 removed the one leader accepted across the country.', 790, { size: 17 }, 22);
  add('02-problems-1947-48',
    svg(900, y + 158, 'The new state’s problems, 1947–48', b),
    'Seven problems facing Pakistan in 1947–48 (boundaries, water, assets, princely states, refugees, administration and language), each linked to its outcome and marked as dealt with or causing lasting damage.',
    'The state survived, but Kashmir and language were left unresolved.',
    '## Key Question 11: how successful was the new state in 1947–48?');
}

// 03 Stability 1948-69
{
  const X0 = 80, X1 = 830, Y0 = 1948, Y1 = 1970;
  const X = (y) => X0 + ((y - Y0) * (X1 - X0)) / (Y1 - Y0);
  const ay = 400;
  let b = `<rect x="${X(1958)}" y="146" width="${X(1969) - X(1958)}" height="520" rx="8" fill="${C.tealLight}" opacity="0.6"/>` + t((X(1958) + X(1969)) / 2, 134, 'Ayub Khan: Decade of Progress', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += t((X(1948) + X(1958)) / 2, 134, 'Ministries, 1948–58', { size: 17, weight: 700, anchor: 'middle', fill: C.muted });
  b += `<line x1="${X0 - 20}" y1="${ay}" x2="${X1 + 20}" y2="${ay}" stroke="${C.ink}" stroke-width="4"/>`;
  for (let y = 1948; y <= 1970; y += 2) b += `<line x1="${X(y)}" y1="${ay - 6}" x2="${X(y)}" y2="${ay + 6}" stroke="${C.ink}" stroke-width="2"/>` + t(X(y), ay + 26, String(y), { size: 15, anchor: 'middle', fill: C.muted });
  b += t(40, 176, 'GAINS', { size: 17, weight: 700, fill: C.tealDark }) + t(40, 650, 'SETBACKS', { size: 17, weight: 700, fill: C.rust });
  const T1 = 330, T2 = 260, T3 = 190, B1 = 470, B2 = 540, B3 = 610;
  const up = [[1949, 'Objectives', 'Resolution', T1, 95], [1950, 'Liaquat–Nehru', 'Pact', T1, 212], [1956, 'First', 'constitution', T1, 352], [1959, 'Land', 'reforms', T1, 450], [1960, 'Indus Waters', 'Treaty', T2, 545], [1961, 'Muslim Family', 'Laws Ordinance', T1, 662]];
  const dn = [[1951, 'Liaquat', 'assassinated', B1, 150], [1953, 'Nazimuddin', 'dismissed', B3, 228], [1954, 'Assembly', 'dissolved', B2, 322], [1955, 'One Unit', '', B1, 420], [1958, 'Martial law', '(Mirza)', B1, 525], [1965, 'War and', 'Tashkent', B1, 660], [1968.5, 'Mass protests', '1968–69', B1, 780]];
  const lab = (yr, a, c, y, lx, col, upward) => {
    const x = X(yr);
    return `<line x1="${x}" y1="${ay}" x2="${lx}" y2="${upward ? y + 8 : y - 20}" stroke="${col}" stroke-width="2.5"/>` + `<circle cx="${x}" cy="${ay}" r="7" fill="${col}" stroke="${C.ink}" stroke-width="2"/>` +
      t(lx, upward ? y - 20 : y, a, { size: 16, weight: 700, anchor: 'middle' }) + (c ? t(lx, upward ? y : y + 20, c, { size: 16, anchor: 'middle' }) : '');
  };
  up.forEach(([yr, a, c, y, lx]) => { b += lab(yr, a, c, y, lx, C.tealDark, true); });
  dn.forEach(([yr, a, c, y, lx]) => { b += lab(yr, a, c, y, lx, C.rust, false); });
  b += panel(30, 690, 410, 130, '#ffffff', C.tealDark) + t(50, 722, 'Ayub: other gains', { size: 18, weight: 700, fill: C.tealDark }) + blist(50, 752, ['Economic growth, industrialisation, Green Revolution', 'Islamabad built as capital'], 380, { size: 16, gap: 6 }).svg;
  b += panel(460, 690, 410, 130, '#ffffff', C.rust) + t(480, 722, 'Ayub: other setbacks', { size: 18, weight: 700, fill: C.rust }) + blist(480, 752, ['Wealth concentrated among a few families', 'Neglect of East Pakistan; restrictive Basic Democracies'], 380, { size: 16, gap: 6, dot: C.rust }).svg;
  add('03-stability-1948-69',
    svg(900, 840, 'Gains and setbacks, 1948–69', b),
    'A timeline from 1948 to 1970 with gains above the line (Objectives Resolution 1949, Liaquat–Nehru Pact 1950, first constitution 1956, land reforms 1959, Indus Waters Treaty 1960, Muslim Family Laws Ordinance 1961) and setbacks below it (Liaquat’s assassination 1951, dismissals and dissolution 1953–54, One Unit 1955, martial law 1958, the 1965 war and mass protests in 1968–69). The Ayub years are shaded.',
    'Gains and setbacks alternated: stability was never secure for long.',
    '## Key Question 12: how far did Pakistan achieve stability, 1948–71?');
}

// 04 Bangladesh
{
  const causes = ['Political domination by the West despite the East’s larger population', 'Economic disparity', 'The language movement', 'Army and civil service recruited mainly from the West', 'Slow relief after the 1970 cyclone'];
  let b = t(170, 128, 'LONG-TERM CAUSES', { size: 16, weight: 700, anchor: 'middle', fill: C.muted });
  let y = 140;
  causes.forEach((c) => { const n = lines(c, 16, 250); const h = n * 20 + 24; b += rect(30, y, 280, h, '#f6e4d8', C.rust, 2, 10) + para(44, y + 26, c, 250, { size: 16 }, 20); y += h + 10; });
  const cBottom = y;
  b += t(600, 128, 'HOW INDEPENDENCE CAME', { size: 16, weight: 700, anchor: 'middle', fill: C.muted });
  const steps = [
    ['1966', 'Six Points', 'Awami League under Sheikh Mujib-ur-Rahman demands maximum provincial autonomy; rejected'],
    ['1970', 'Election', 'Awami League wins, but power is not transferred'],
    ['1971', 'Talks fail', 'Mujib, Bhutto and Yahya Khan; military action begins in March'],
    ['Dec 1971', 'Indian intervention', 'Pakistani forces surrender in Dhaka on 16 December'],
  ];
  let sy = 140;
  steps.forEach(([yr, h, s], i) => {
    const n = lines(s, 16, 380); const hh = 56 + n * 20;
    b += rect(350, sy, 520, hh, i === 3 ? C.mustard : '#ffffff', C.ink, 2.5, 12) + t(370, sy + 30, yr, { size: 17, weight: 700, fill: i === 3 ? C.ink : C.rust }) + t(460, sy + 30, h, { size: 19, weight: 700 }) + para(460, sy + 54, s, 380, { size: 16, fill: i === 3 ? C.ink : C.muted }, 20);
    if (i < 3) b += arrow(610, sy + hh + 2, 610, sy + hh + 22, { w: 3.5 });
    sy += hh + 26;
  });
  b += arrow(312, 300, 346, 300, { w: 4, color: C.rust, marker: 'ahR' });
  const H = Math.max(cBottom, sy) + 10;
  add('04-bangladesh-1971',
    svg(900, H, 'Why East Pakistan became Bangladesh', b),
    'Five long-term causes (political domination by the West, economic disparity, the language movement, recruitment of the army and civil service from the West, slow relief after the 1970 cyclone) feed a sequence: the Six Points of 1966, the Awami League’s 1970 election win without a transfer of power, failed talks and military action in 1971, and Indian intervention ending in surrender in Dhaka on 16 December 1971.',
    'Long-standing grievances turned into a crisis when the 1970 result was not honoured.',
    '## Key Question 13: why did Bangladesh become independent?');
}

// 05 1988-99 governments
{
  const govs = [
    ['Benazir Bhutto', '1988–90', 'First woman PM of a Muslim-majority country; conflict with Nawaz Sharif in Punjab; dispute with the president', 'Dismissed 1990'],
    ['Nawaz Sharif', '1990–93', 'Privatisation; BCCI collapse; loss of US aid over the nuclear programme', 'Dismissed 1993, restored, then resigned'],
    ['Benazir Bhutto', '1993–96', 'Kashmir tensions; rupee devaluation, IMF pressure', 'Dismissed by President Leghari, 1996'],
    ['Nawaz Sharif', '1997–99', 'Thirteenth Amendment (1997); nuclear tests 1998; Lahore Declaration; Kargil', 'Removed by Musharraf, Oct 1999'],
  ];
  let b = '';
  govs.forEach(([n, yr, s, end], i) => {
    const y = 110 + i * 140;
    const c = n.startsWith('Benazir') ? C.rust : C.blue;
    b += panel(30, y, 600, 124) + `<rect x="30" y="${y}" width="12" height="124" rx="6" fill="${c}"/>` + t(60, y + 36, n, { size: 21, weight: 700, fill: c }) + t(600, y + 36, yr, { size: 19, weight: 700, anchor: 'end' }) + para(60, y + 68, s, 550, { size: 17, fill: C.muted }, 22);
    b += arrow(634, y + 62, 662, y + 62, { w: 3.5 }) + rect(668, y + 17, 202, 90, '#f6e4d8', C.rust, 2.5, 12) + tl(769, y + 62 - (lines(end, 16, 180) - 1) * 10 + 6, wrap(end, 16, 180), { size: 16, weight: 700, anchor: 'middle' }, 20);
  });
  b += t(769, 100, 'HOW IT ENDED', { size: 16, weight: 700, anchor: 'middle', fill: C.muted });
  b += panel(30, 676, 840, 84, C.cream, C.olive) + t(450, 710, 'No government in this period completed its term.', { size: 19, weight: 700, anchor: 'middle' }) +
    t(450, 738, 'In 1997 the Thirteenth Amendment removed the president’s power to dismiss.', { size: 17, anchor: 'middle' });
  add('05-governments-1988-99',
    svg(900, 780, 'Four governments, four early endings, 1988–99', b),
    'Four stacked cards show the governments of Benazir Bhutto (1988–90, 1993–96) and Nawaz Sharif (1990–93, 1997–99), each with its main events and how it ended: dismissed, dismissed and restored then resigned, dismissed by President Leghari, and removed by General Musharraf in October 1999.',
    'Power alternated between two leaders, and every government ended early.',
    '## Key Question 15: how effective were the governments of 1988–99?');
}

// 06 World affairs
{
  const X0 = 210, X1 = 850, Y0 = 1947, Y1 = 2000;
  const X = (y) => X0 + ((y - Y0) * (X1 - X0)) / (Y1 - Y0);
  const rt = 150, rh = 80;
  let b = '';
  for (let y = 1950; y <= 2000; y += 10) b += `<line x1="${X(y)}" y1="${rt - 10}" x2="${X(y)}" y2="${rt + 5 * rh}" stroke="${C.panelEdge}" stroke-width="1.5"/>` + t(X(y), rt - 18, String(y), { size: 16, weight: 700, anchor: 'middle', fill: C.muted });
  const bar = (a, z, y, c, lab) => rect(X(a), y + 18, X(z) - X(a), 30, c, C.ink, 2, 6) + (lab ? t((X(a) + X(z)) / 2, y + 39, lab, { size: 15, weight: 700, anchor: 'middle', fill: '#ffffff' }) : '');
  const mk = (yr, y, s, col = C.ink, above = false) => `<circle cx="${X(yr)}" cy="${y + 33}" r="8" fill="${col}" stroke="${C.ink}" stroke-width="2"/>` + t(X(yr), y + (above ? 14 : 64), s, { size: 15, weight: 700, anchor: 'middle', fill: col });
  const rows = ['SEATO', 'CENTO', 'Non-Aligned', 'Commonwealth', 'Nuclear'];
  rows.forEach((r, i) => { const y = rt + i * rh; if (i % 2 === 0) b += `<rect x="30" y="${y}" width="840" height="${rh}" fill="#ffffff" opacity="0.7"/>`; b += t(40, y + 40, r, { size: 18, weight: 700 }); });
  b += bar(1954, 1972, rt, C.blue, '1954–72') + bar(1955, 1979, rt + rh, C.blue, '1955–79') + bar(1979, 2000, rt + 2 * rh, C.tealDark, 'joined 1979');
  b += mk(1972, rt + 3 * rh, 'left 1972', C.rust) + mk(1989, rt + 3 * rh, 'rejoined 1989', C.tealDark);
  b += mk(1972, rt + 4 * rh, 'programme 1972', C.ink, true) + mk(1974, rt + 4 * rh, 'India tests 1974', C.rust) + mk(1998, rt + 4 * rh, 'Pakistan tests 1998', C.ink, true).replace('text-anchor="middle"', 'text-anchor="end"').replace(/x="([\d.]+)" y="(\d+)" font-size/, (m, x, y) => `x="${+x + 12}" y="${y}" font-size`);
  const y = rt + 5 * rh + 24;
  b += tbox(30, y, 410, 'Why leave SEATO and CENTO?', 'Western allies had not supported Pakistan in its wars with India, especially in 1971.', { h: 110, fill: C.cream, edge: C.olive });
  b += tbox(460, y, 410, 'Why leave the Commonwealth?', 'Over recognition of Bangladesh in 1972.', { h: 110, fill: C.cream, edge: C.olive });
  add('06-alliances-and-nuclear',
    svg(900, y + 130, 'Pakistan’s alignments, 1947–99', b),
    'Bars show Pakistan’s membership of SEATO (1954–72) and CENTO (1955–79) and of the Non-Aligned Movement from 1979. Markers show it leaving the Commonwealth in 1972 and rejoining in 1989, and the nuclear milestones: programme 1972, Indian test 1974, Pakistani tests 1998.',
    'Pakistan moved from Western alliances to non-alignment as it felt let down over India.',
    '## Key Question 16: how important has Pakistan been in world affairs?');
}
