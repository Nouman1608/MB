import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-3';
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
const code = (x, y, w, lines, size = 15) => box(x, y, w, 24 + lines.length * (size + 7), C.ink, C.ink, 10) + lines.map((s, i) => mono(x + 16, y + 26 + i * (size + 7), s, { size, fill: '#f2f4f4' })).join('');
// table: cols = [[name, width]], rows = [[...]], opts.hl = (ri, ci) => fill, opts.dim = ri => bool
const table = (x, y, cols, rows, { rh = 34, hl = () => null, dim = () => false, head = C.ink, size = 15 } = {}) => {
  let s = '', cx = x;
  cols.forEach(([n, w]) => { s += `<rect x="${cx}" y="${y}" width="${w}" height="${rh}" fill="${head}" stroke="${C.panel}" stroke-width="1.5"/>` + t(cx + w / 2, y + rh / 2 + 5, n, { size, weight: 700, anchor: 'middle', fill: C.panel }); cx += w; });
  rows.forEach((r, ri) => {
    let xx = x;
    r.forEach((v, ci) => {
      const w = cols[ci][1], f = hl(ri, ci) || (ri % 2 ? C.bg : C.panel);
      s += `<rect x="${xx}" y="${y + rh * (ri + 1)}" width="${w}" height="${rh}" fill="${f}" stroke="${C.panelEdge}" stroke-width="1.5"/>` + t(xx + w / 2, y + rh * (ri + 1) + rh / 2 + 5, String(v), { size, anchor: 'middle', fill: dim(ri) ? '#9aa3ad' : C.ink, weight: hl(ri, ci) ? 700 : 400 });
      xx += w;
    });
    if (dim(ri)) s += `<line x1="${x + 6}" y1="${y + rh * (ri + 1.5)}" x2="${xx - 6}" y2="${y + rh * (ri + 1.5)}" stroke="${C.rust}" stroke-width="2" opacity="0.7"/>`;
  });
  return s;
};
const STU = [[1, 'Aisha', 'Khan', 'Blue'], [2, 'Ben', 'Lee', 'Red'], [3, 'Chen', 'Wu', 'Blue'], [4, 'Dara', 'Mills', 'Green']];
const RES = [[1, 1, 'Maths', 82], [2, 1, 'Physics', 74], [3, 2, 'Maths', 65], [4, 3, 'Maths', 91], [5, 3, 'Physics', 58], [6, 4, 'Physics', 70]];
const JOINED = RES.map(([rid, sid, sub, sc]) => { const st = STU.find((s) => s[0] === sid); return [st[2], st[3], sub, sc]; });

// 01 Flat file problems
{
  let b = '';
  b += t(52, 128, 'A flat file: one table holds everything', { size: 18, weight: 700 });
  const flat = JOINED.map(([sn, h, sub, sc], i) => [sn, i === 1 ? 'Red' : h, sub, sc]);
  b += table(52, 142, [['Surname', 150], ['House', 130], ['Subject', 150], ['Score', 110]], flat, {
    hl: (ri, ci) => (ri === 1 && ci === 1 ? PINK : ci === 1 ? C.cream : ci === 0 ? C.cream : null),
  });
  b += t(52, 452, 'Name and house are repeated on every result row (illustrative: Khan’s house updated in one row only).', { size: 15, fill: C.muted, italic: true });
  b += apath('M600,196 L720,196', C.olive, 'ahO', 3);
  const probs = [['Redundancy', 'the same details stored many times, wasting space', C.cream, C.olive], ['Inconsistency', 'a change in only some rows: the data contradicts itself', PINK, C.rust], ['Weak control', 'hard to show results without personal details', C.panel, C.panelEdge]];
  probs.forEach(([h, d, f, e], i) => {
    const y = 142 + i * 94;
    b += box(612, y, 258, 86, f, e, 10) + t(630, y + 28, h, { size: 17, weight: 700, fill: e === C.panelEdge ? C.ink : e }) + para(630, y + 50, d, 30, { size: 15 }, 18);
  });
  b += box(30, 470, 840, 118, C.tealLight, C.tealDark);
  b += t(52, 504, 'A relational database stores each fact once and links tables through keys.', { size: 17, weight: 700, fill: C.tealDark });
  b += t(52, 534, 'The DBMS can then enforce rules (validation, referential integrity)', { size: 16 });
  b += t(52, 560, 'and give different users different access rights.', { size: 16 });
  add('01-flat-file-problems',
    svg(900, 612, 'Why not one flat file?', b),
    'A flat file built from the school example repeats each student’s surname and house on every result row; one of Khan’s rows shows a different house (illustrative), so the data contradicts itself. The problems are redundancy, inconsistency and weak access control, which a relational database solves by storing each fact once and linking tables with keys.',
    'Repeated data wastes space and lets copies disagree; related tables store each fact once.',
    '## Why use a database instead of a flat file?');
}

// 02 Worked design: two tables and keys
{
  let b = '';
  b += t(52, 128, 'Students', { size: 19, weight: 700 }) + pill(150, 110, 128, 26, 'PK StudentID', { fill: C.mustard, edge: C.ink, size: 15, weight: 700 });
  b += table(52, 146, [['StudentID', 110], ['FirstName', 110], ['Surname', 100], ['House', 90]], STU, { hl: (ri, ci) => (ci === 0 ? C.mustard : null) });
  b += t(52, 368, 'Results', { size: 19, weight: 700 }) + pill(140, 350, 128, 26, 'FK StudentID', { fill: C.tealLight, edge: C.tealDark, size: 15, weight: 700, color: C.tealDark });
  b += table(52, 386, [['ResultID', 100], ['StudentID', 110], ['Subject', 110], ['Score', 90]], RES, { hl: (ri, ci) => (ci === 1 ? C.tealLight : ci === 0 ? C.cream : null) });
  // link lines from Students IDs to Results FK
  const sY = (i) => 146 + 34 * (i + 1) + 17, rY = (i) => 386 + 34 * (i + 1) + 17;
  // ER on right
  b += box(530, 130, 340, 300, C.panel, C.panelEdge);
  b += t(700, 162, 'One-to-many relationship', { size: 18, weight: 700, anchor: 'middle' });
  b += box(552, 200, 112, 60, C.cream, C.ink, 8) + t(608, 236, 'Students', { size: 17, weight: 700, anchor: 'middle' });
  b += box(740, 200, 112, 60, C.tealLight, C.ink, 8) + t(796, 236, 'Results', { size: 17, weight: 700, anchor: 'middle' });
  b += `<line x1="664" y1="230" x2="740" y2="230" stroke="${C.ink}" stroke-width="3"/>` + path('M722,230 L740,216 M722,230 L740,244', { w: 3 });
  b += t(678, 220, '1', { size: 16, weight: 700, anchor: 'middle' }) + t(714, 214, 'many', { size: 15, weight: 700, anchor: 'middle' });
  b += para(552, 296, 'One student can have many results. StudentID is the primary key of Students and a foreign key in Results.', 34, { size: 15 }, 20);
  b += para(552, 380, 'A change of house is now made in one place.', 34, { size: 15, weight: 700, fill: C.tealDark }, 20);
  b += box(530, 450, 340, 180, C.cream, C.olive);
  b += t(552, 482, 'Referential integrity', { size: 17, weight: 700 });
  b += para(552, 510, 'Every StudentID in Results must match an existing StudentID in Students.', 32, { size: 15 }, 20);
  b += t(552, 590, 'e.g. Result 6 → Student 4 (Mills)', { size: 15, fill: C.olive, weight: 600 });
  b += t(552, 612, 'Normalisation: each fact stored once.', { size: 15, fill: C.olive, weight: 600 });
  add('02-two-related-tables',
    svg(900, 654, 'The worked design: two related tables', b),
    'The Students table (StudentID, FirstName, Surname, House) holds four students with StudentID as primary key. The Results table (ResultID, StudentID, Subject, Score) holds six results, with StudentID as a foreign key. One student can have many results, every foreign key must match an existing student, and a change of house is made in one place.',
    'The primary key in Students becomes a foreign key in Results, linking one student to many results.',
    '## A worked design');
}

// 03 Query 1 step by step
{
  let b = '';
  b += code(30, 106, 840, ['SELECT Students.Surname, Results.Score', 'FROM Students', 'JOIN Results ON Students.StudentID = Results.StudentID', "WHERE Results.Subject = 'Maths' AND Results.Score BETWEEN 70 AND 100", 'ORDER BY Results.Score DESC;'], 14.5);
  const cols = [['Surname', 92], ['House', 70], ['Subject', 88], ['Score', 64]];
  b += badge(52, 294, 16, '1', C.cream) + t(76, 300, 'JOIN on StudentID', { size: 16, weight: 700 });
  b += table(30, 316, cols, JOINED, { size: 15, rh: 32 });
  b += arrow(348, 430, 374, 430, { w: 3.5 });
  b += badge(398, 294, 16, '2', C.cream) + t(422, 300, 'WHERE Maths, 70–100', { size: 16, weight: 700 });
  const keep = (r) => r[2] === 'Maths' && r[3] >= 70 && r[3] <= 100;
  b += table(378, 316, [['Surname', 92], ['Subject', 88], ['Score', 64]], JOINED.map((r) => [r[0], r[2], r[3]]), { size: 15, rh: 32, dim: (ri) => !keep(JOINED[ri]), hl: (ri) => (keep(JOINED[ri]) ? C.tealLight : null) });
  b += arrow(626, 430, 652, 430, { w: 3.5 });
  b += badge(680, 294, 16, '3', C.mustard) + t(704, 300, 'ORDER BY DESC', { size: 16, weight: 700 });
  const out = JOINED.filter(keep).sort((a, c) => c[3] - a[3]).map((r) => [r[0], r[3]]);
  b += table(670, 316, [['Surname', 110], ['Score', 90]], out, { size: 16, rh: 36, hl: () => C.mustard });
  b += t(770, 450, 'Result', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  b += box(30, 556, 840, 84, C.cream, C.olive);
  b += t(52, 588, 'BETWEEN is inclusive. Lee’s 65 in Maths fails the score test; Physics rows fail the subject test.', { size: 15 });
  b += t(52, 614, 'JOIN matches each result to its student through the key.', { size: 15, weight: 700 });
  add('03-query-step-by-step',
    svg(900, 664, 'Query 1, one clause at a time', b),
    'Query 1 run step by step on the worked tables. JOIN on StudentID gives six rows of surname, house, subject and score. WHERE keeps Maths scores between 70 and 100, leaving Khan 82 and Wu 91. ORDER BY Score DESC gives the result Wu 91, then Khan 82.',
    'JOIN, then WHERE, then ORDER BY: the result is Wu 91 and Khan 82.',
    '## Querying two tables');
}

// 04 Queries 2-4 at a glance
{
  let b = '';
  const qs = [
    [["SELECT FirstName, Surname", "FROM Students", "WHERE Surname LIKE 'M%' OR House = 'Red';"], 'Ben Lee; Dara Mills', ['LIKE \'M%\': % matches any sequence of characters → Mills', 'OR House = \'Red\' → Lee']],
    [["SELECT DISTINCT Subject FROM Results ORDER BY Subject ASC;"], 'Maths; Physics', ['DISTINCT removes repeats from six rows', 'ASC sorts A to Z']],
    [["SELECT Students.Surname", "FROM Students", "JOIN Results ON Students.StudentID = Results.StudentID", "WHERE Results.Subject = 'Physics' AND NOT Students.House = 'Blue';"], 'Mills', ['Physics rows: Khan (Blue), Wu (Blue), Mills (Green)', 'NOT Blue leaves Mills']],
  ];
  let y = 110;
  qs.forEach(([c, res, notes], i) => {
    const h = 24 + c.length * 21;
    b += t(30, y + 18, `Query ${i + 2}`, { size: 17, weight: 700, fill: C.tealDark });
    b += code(30, y + 28, 840, c, 14);
    const ny = y + 28 + h + 10;
    b += box(30, ny, 250, 70, C.mustard, C.ink, 10) + t(48, ny + 28, 'Result', { size: 15, fill: C.ink, weight: 600 }) + t(48, ny + 54, res, { size: 18, weight: 700 });
    b += box(294, ny, 576, 70, C.panel, C.panelEdge, 10) + tl(312, ny + 28, notes, { size: 15 }, 22);
    y = ny + 90;
  });
  add('04-more-queries',
    svg(900, y + 4, 'Queries 2 to 4 and their results', b),
    'Three further queries on the worked tables. LIKE ’M%’ OR House = ’Red’ returns Ben Lee and Dara Mills. SELECT DISTINCT Subject returns Maths and Physics. A join keeping Physics results where the house is NOT Blue returns Mills, since Khan and Wu are in Blue house.',
    'Each condition narrows the rows: LIKE with %, DISTINCT, and NOT.',
    '## Querying two tables');
}

// 05 UPDATE with and without WHERE
{
  let b = '';
  b += code(30, 106, 400, ['UPDATE Results', 'SET Score = 68', 'WHERE ResultID = 3;'], 15);
  b += box(470, 106, 400, 90, PINK, C.rust, 10) + t(670, 144, 'The same statement', { size: 17, weight: 700, anchor: 'middle', fill: C.rust }) + t(670, 172, 'without its WHERE clause', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  b += t(230, 222, 'one row changes', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += t(670, 222, 'every score becomes 68', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  const cols = [['ResultID', 90], ['StudentID', 100], ['Subject', 100], ['Score', 80]];
  b += table(45, 240, cols, RES.map((r) => [r[0], r[1], r[2], r[0] === 3 ? '65 → 68' : r[3]]), { hl: (ri, ci) => (ri === 2 && ci === 3 ? C.mustard : null) });
  b += table(485, 240, cols, RES.map((r) => [r[0], r[1], r[2], '68']), { hl: (ri, ci) => (ci === 3 ? PINK : null) });
  b += box(30, 520, 840, 92, C.cream, C.olive);
  b += t(52, 552, 'Add records:', { size: 16, weight: 700 }) + mono(170, 553, 'INSERT INTO ... VALUES (...)', { size: 15 });
  b += t(52, 584, 'Remove records:', { size: 16, weight: 700 }) + mono(190, 585, 'DELETE FROM ... WHERE ...', { size: 15 });
  add('05-update-where',
    svg(900, 636, 'UPDATE: why WHERE matters', b),
    'Two runs of UPDATE Results SET Score = 68. With WHERE ResultID = 3, only that row changes, from 65 to 68. Without a WHERE clause, every score in the table becomes 68. INSERT INTO adds records and DELETE FROM ... WHERE removes them.',
    'Without WHERE, UPDATE changes every row in the table.',
    '## Updating data');
}

// 06 GROUP BY and HAVING (HL)
{
  let b = pill(30, 100, 70, 30, 'HL', { fill: C.cream, edge: C.olive, size: 15, color: C.olive });
  b += code(120, 96, 750, ['SELECT Students.House, AVG(Results.Score)', 'FROM Students', 'JOIN Results ON Students.StudentID = Results.StudentID', 'GROUP BY Students.House', 'HAVING COUNT(*) >= 2;'], 14);
  b += t(30, 276, 'GROUP BY House', { size: 18, weight: 700 });
  const groups = [['Blue', [['Khan', 82], ['Khan', 74], ['Wu', 91], ['Wu', 58]], true], ['Red', [['Lee', 65]], false], ['Green', [['Mills', 70]], false]];
  let y = 292;
  groups.forEach(([h, rows, keep]) => {
    const hh = 40 + rows.length * 30;
    b += box(30, y, 300, hh, keep ? C.tealLight : C.bg, keep ? C.tealDark : C.panelEdge, 10) + t(48, y + 28, h, { size: 17, weight: 700, fill: keep ? C.tealDark : C.muted });
    rows.forEach(([n, s], i) => { b += t(140, y + 30 + i * 30, n, { size: 16, fill: keep ? C.ink : C.muted }) + t(300, y + 30 + i * 30, String(s), { size: 16, anchor: 'end', fill: keep ? C.ink : C.muted }); });
    b += arrow(336, y + hh / 2, 370, y + hh / 2, { w: 3 });
    b += box(378, y + hh / 2 - 26, 230, 52, keep ? C.panel : C.bg, keep ? C.tealDark : C.panelEdge, 8) + t(493, y + hh / 2 + 6, `COUNT(*) = ${rows.length}`, { size: 16, weight: 700, anchor: 'middle', fill: keep ? C.ink : C.muted });
    b += arrow(614, y + hh / 2, 648, y + hh / 2, { w: 3, color: keep ? C.tealDark : C.rust, marker: keep ? 'ahT' : 'ahR' });
    b += keep ? box(656, y + hh / 2 - 34, 214, 68, C.mustard, C.ink, 10) + t(763, y + hh / 2 - 6, 'Blue', { size: 17, weight: 700, anchor: 'middle' }) + t(763, y + hh / 2 + 20, 'AVG = 76.25', { size: 17, weight: 700, anchor: 'middle' })
      : t(670, y + hh / 2 + 6, 'removed by HAVING', { size: 16, weight: 600, fill: C.rust });
    y += hh + 14;
  });
  b += t(493, 278, 'HAVING ≥ 2?', { size: 16, weight: 700, anchor: 'middle' });
  b += t(493, y + 4, '(82 + 74 + 91 + 58) ÷ 4 = 305 ÷ 4 = 76.25', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 });
  b += box(30, y + 24, 410, 76, C.panel, C.ink) + t(52, y + 54, 'WHERE', { size: 17, weight: 700 }) + t(52, y + 80, 'filters individual rows before grouping', { size: 15 });
  b += box(460, y + 24, 410, 76, C.cream, C.olive) + t(482, y + 54, 'HAVING', { size: 17, weight: 700 }) + t(482, y + 80, 'filters groups after aggregation', { size: 15 });
  add('06-group-by-having',
    svg(900, y + 124, 'GROUP BY and HAVING', b),
    'The joined rows are grouped by house. Blue has four results (82, 74, 91 and 58), so COUNT(*) is 4 and it passes HAVING COUNT(*) >= 2, giving an average of 305 ÷ 4 = 76.25. Red and Green each have one result and are removed by HAVING. WHERE filters rows before grouping; HAVING filters groups after.',
    'Only Blue has at least two results, so the query returns Blue 76.25.',
    '## HL: aggregate functions with GROUP BY and HAVING');
}

// 07 Views (HL)
{
  let b = pill(30, 100, 70, 30, 'HL', { fill: C.cream, edge: C.olive, size: 15, color: C.olive });
  b += t(120, 122, 'A view is a saved query that users can treat like a table.', { size: 17, weight: 600 });
  const drawTables = (x, y) => box(x, y, 90, 60, C.panel, C.ink, 6) + t(x + 45, y + 36, 'tables', { size: 15, anchor: 'middle', weight: 600 });
  // virtual
  b += box(30, 150, 410, 280, C.tealLight, C.tealDark) + t(52, 184, 'Virtual view', { size: 20, weight: 700, fill: C.tealDark });
  b += drawTables(60, 240) + arrow(154, 270, 200, 270, { w: 3, color: C.tealDark, marker: 'ahT' }) + box(206, 240, 100, 60, C.mustard, C.ink, 6) + t(256, 266, 'query', { size: 15, weight: 700, anchor: 'middle' }) + t(256, 286, 'runs now', { size: 15, anchor: 'middle' });
  b += arrow(310, 270, 350, 270, { w: 3, color: C.tealDark, marker: 'ahT' }) + t(388, 276, 'user', { size: 16, anchor: 'middle', weight: 600 });
  b += path('M256,304 C256,336 120,336 110,306', { stroke: C.tealDark, w: 2.5, extra: 'marker-end="url(#ahT)" stroke-dasharray="6 5"' });
  b += t(182, 350, 'rerun on every use', { size: 15, anchor: 'middle', fill: C.tealDark });
  b += tl(52, 384, ['recalculated each time it is used', '+ always current'], { size: 16 }, 26);
  // materialised
  b += box(460, 150, 410, 280, C.cream, C.olive) + t(482, 184, 'Materialised (snapshot) view', { size: 20, weight: 700, fill: C.olive });
  b += drawTables(490, 240) + arrow(584, 270, 620, 270, { w: 3, color: C.olive, marker: 'ahO' }) + box(626, 236, 110, 68, C.panel, C.ink, 6) + t(681, 264, 'stored', { size: 15, weight: 700, anchor: 'middle' }) + t(681, 284, 'result', { size: 15, weight: 700, anchor: 'middle' });
  b += arrow(740, 270, 780, 270, { w: 3, color: C.olive, marker: 'ahO' }) + t(818, 276, 'user', { size: 16, anchor: 'middle', weight: 600 });
  b += t(602, 222, 'refresh', { size: 15, anchor: 'middle', fill: C.olive, weight: 600 });
  b += tl(482, 358, ['stores the result', '+ faster to read', '− must be refreshed'], { size: 16 }, 26);
  b += box(30, 450, 840, 110, C.panel, C.panelEdge);
  b += t(52, 482, 'Why use views', { size: 17, weight: 700 });
  b += t(52, 510, 'hide complexity · simplify repeated queries · show users only certain fields (security)', { size: 15 });
  b += t(52, 536, '· keep applications working if the underlying tables change. Some views are read-only.', { size: 15 });
  add('07-views',
    svg(900, 584, 'Virtual and materialised views', b),
    'A virtual view reruns its query against the tables every time it is used, so it is always current. A materialised, or snapshot, view stores the result, so it is faster to read but must be refreshed. Views hide complexity, simplify repeated queries, limit which fields users see and keep applications working when tables change.',
    'A virtual view is always current; a materialised view is faster but must be refreshed.',
    '## HL: views');
}
