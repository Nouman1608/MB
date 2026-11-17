import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-cambridge-pakistan-studies-emergence-of-pakistan-1906-47';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- local helpers (kept in this file so style.mjs stays shared and untouched) ----
const X = (s) => String(s).replace(/&(?!amp;|lt;|gt;|#\d+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const GW = { ' ': .28, a: .55, b: .6, c: .55, d: .6, e: .57, f: .35, g: .6, h: .59, i: .25, j: .25, k: .53, l: .25, m: .88, n: .59, o: .59, p: .6, q: .6, r: .38, s: .5, t: .36, u: .59, v: .53, w: .79, x: .52, y: .53, z: .52, I: .28, M: .85, W: .95, '.': .27, ',': .27, ';': .27, ':': .27, '(': .35, ')': .35, "'": .25, '’': .25, '‘': .25, '"': .4, '–': .6, '—': 1, '-': .4, '/': .38, '•': .4, '%': .8, '&': .7 };
const tw = (s, size, weight = 400) => [...String(s)].reduce((a, ch) => a + (GW[ch] ?? (/[A-Z]/.test(ch) ? .68 : /[0-9]/.test(ch) ? .6 : .6)), 0) * size * (weight >= 600 ? 1.06 : 1);
const wrap = (s, width, size, weight) => {
  const out = [];
  for (const p of String(s).split('\n')) {
    let line = '';
    for (const w of p.split(' ')) { const c = line ? line + ' ' + w : w; if (line && tw(c, size, weight) > width) { out.push(line); line = w; } else line = c; }
    out.push(line);
  }
  return out;
};
const T = (x, y, s, o = {}) => t(x, y, X(s), o);
// wrapped paragraph, y = first baseline; returns {s, h}
const para = (x, y, s, width, o = {}) => {
  const size = o.size || 17, lh = o.lh || Math.round(size * 1.32);
  const L = wrap(s, width, size, o.weight || 400);
  return { s: L.map((l, i) => T(x, y + i * lh, l, o)).join(''), h: L.length * lh, n: L.length };
};
const R = (x, y, w, h, fill = C.panel, edge = C.panelEdge, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 12}" fill="${fill}" stroke="${edge}" stroke-width="${o.sw ?? 2.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
// card: title + body (string or array; bullets) -> {s, h}. Fixed height via o.h.
const card = (x, y, w, o = {}) => {
  const { title, body, fill = C.panel, edge = C.panelEdge, ts = 20, bs = 17, tfill = C.ink, bfill = C.muted, pad = 18, align = 'start', bullets = false, sub } = o;
  let inner = '', cy = y + pad - 2;
  const tx = align === 'middle' ? x + w / 2 : x + pad, iw = w - 2 * pad;
  if (title) { const p = para(tx, cy + ts * 0.85, title, iw, { size: ts, weight: 700, fill: tfill, anchor: align }); inner += p.s; cy += p.h + 2; }
  if (sub) { const p = para(tx, cy + 15 * 0.85, sub, iw, { size: 15, fill: o.subfill || C.muted, anchor: align, weight: 600 }); inner += p.s; cy += p.h + 2; }
  if (body) {
    if (title || sub) cy += 4;
    const items = Array.isArray(body) ? body : [body];
    for (const it of items) {
      if (bullets) { const p = para(tx + 16, cy + bs * 0.85, it, iw - 16, { size: bs, fill: bfill }); inner += T(tx, cy + bs * 0.85, '•', { size: bs, fill: bfill, weight: 700 }) + p.s; cy += p.h + 3; }
      else { const p = para(tx, cy + bs * 0.85, it, iw, { size: bs, fill: bfill, anchor: align }); inner += p.s; cy += p.h + 3; }
    }
  }
  const h = o.h || Math.round(cy - y + pad - 6);
  return { s: R(x, y, w, h, fill, edge, o) + inner, h };
};
const cardH = (w, o) => card(0, 0, w, o).h;
// vertical timeline: items [{d, title, body, hi}] -> {s, h}
const timeline = (x, y, w, items, o = {}) => {
  const dw = o.dw || 130, gap = o.gap || 14, cx = x + dw / 2;
  let s = '', cy = y; const mids = [];
  for (const it of items) {
    const c = card(x + dw + 22, cy, w - dw - 22, { title: it.title, body: it.body, ts: o.ts || 19, bs: o.bs || 16, fill: it.hi ? C.cream : C.panel, edge: it.hi ? C.olive : C.panelEdge, bullets: it.bullets });
    const ph = 40, py = cy + Math.min(c.h / 2, 34) - ph / 2;
    s += c.s; mids.push([py, ph, it]);
    cy += c.h + gap;
  }
  const line = `<line x1="${cx}" y1="${y + 10}" x2="${cx}" y2="${cy - gap - 10}" stroke="${C.ink}" stroke-width="4"/>`;
  const pills = mids.map(([py, ph, it]) => R(x, py, dw, ph, it.hi ? C.mustard : C.cream, C.ink, { rx: 20, sw: 2.5 }) + T(cx, py + 27, it.d, { size: tw(it.d, 19, 700) > dw - 14 ? 16 : 19, weight: 700, anchor: 'middle' }) +
    `<line x1="${x + dw}" y1="${py + ph / 2}" x2="${x + dw + 22}" y2="${py + ph / 2}" stroke="${C.ink}" stroke-width="2.5"/>`).join('');
  return { s: line + s + pills, h: cy - gap - y };
};
// grid table: cols [{label, w}], rows [[cells]] -> {s, h}
const grid = (x, y, cols, rows, o = {}) => {
  const size = o.size || 16, hs = o.hs || 17, pad = 12, lh = Math.round(size * 1.32);
  const W = cols.reduce((a, c) => a + c.w, 0);
  const hh = Math.max(...cols.map((c) => wrap(c.label, c.w - 2 * pad, hs, 700).length)) * Math.round(hs * 1.3) + 22;
  let s = '', cy = y + hh, body = '';
  const head = cols.map((c, i) => { const xx = x + cols.slice(0, i).reduce((a, k) => a + k.w, 0); return para(xx + pad, y + 15 + hs * 0.85, c.label, c.w - 2 * pad, { size: hs, weight: 700 }).s; }).join('');
  rows.forEach((r, ri) => {
    const cells = r.map((cell, i) => wrap(cell, cols[i].w - 2 * pad, size, i === 0 && o.firstBold !== false ? 700 : 400));
    const rh = Math.max(...cells.map((L) => L.length)) * lh + 20;
    const hi = o.hiRows && o.hiRows.includes(ri);
    body += `<rect x="${x}" y="${cy}" width="${W}" height="${rh}" fill="${hi ? C.cream : ri % 2 ? C.tealLight : C.panel}"/>`;
    cells.forEach((L, i) => { const xx = x + cols.slice(0, i).reduce((a, k) => a + k.w, 0); body += L.map((l, k) => T(xx + pad, cy + 12 + size * 0.85 + k * lh, l, { size, weight: i === 0 && o.firstBold !== false ? 700 : 400, fill: i === 0 ? C.ink : C.ink })).join(''); });
    body += `<line x1="${x}" y1="${cy}" x2="${x + W}" y2="${cy}" stroke="${C.panelEdge}" stroke-width="1.5"/>`;
    cy += rh;
  });
  let vx = x; const vl = cols.slice(0, -1).map((c) => { vx += c.w; return `<line x1="${vx}" y1="${y}" x2="${vx}" y2="${cy}" stroke="${C.panelEdge}" stroke-width="1.5"/>`; }).join('');
  s = `<rect x="${x}" y="${y}" width="${W}" height="${cy - y}" rx="12" fill="${C.panel}"/>` + `<path d="M${x},${y + hh} L${x},${y + 12} Q${x},${y} ${x + 12},${y} L${x + W - 12},${y} Q${x + W},${y} ${x + W},${y + 12} L${x + W},${y + hh} Z" fill="${C.teal}"/>` +
    body + vl + head + `<rect x="${x}" y="${y}" width="${W}" height="${cy - y}" rx="12" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`;
  return { s, h: cy - y };
};
// elbow connector with arrow head: points [[x,y],...]
const elbow = (pts, o = {}) => path('M' + pts.map((p) => p.join(',')).join(' L'), { stroke: o.color || C.ink, w: o.w || 3.5, extra: `marker-end="url(#${o.marker || 'ah'})"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}` });
const note = (x, y, w, s, o = {}) => card(x, y, w, { body: s, fill: C.cream, edge: C.olive, bfill: C.ink, bs: o.bs || 17, title: o.title, ts: o.ts || 19, ...o });
// ---- end helpers ----

// 01 Key Questions on one time axis
{
  const x0 = 70, x1 = 850, Y0 = 1905, Y1 = 1947;
  const X1 = (y) => x0 + ((y - Y0) * (x1 - x0)) / (Y1 - Y0);
  const bands = [
    ['KQ6', 'How far did the movement develop?', 1905, 1927, C.cream, C.olive],
    ['KQ7', 'Khilafat Movement', 1919, 1924, C.sand, C.olive],
    ['KQ8', 'Pakistan Movement 1927–39', 1927, 1939, C.tealLight, C.tealDark],
    ['KQ9', 'Solutions 1940–47', 1940, 1947, C.teal, C.tealDark],
  ];
  let b = panel(30, 112, 840, 492);
  bands.forEach(([k, lab, a, z, f, e], i) => {
    const y = 140 + i * 70, xa = X1(a), xb = X1(z);
    b += R(xa, y, xb - xa, 50, f, e, { rx: 10 });
    const txt = `${k}  ${lab}`;
    const inside = tw(txt, 17, 700) < xb - xa - 24;
    if (inside) b += T(xa + 14, y + 32, k, { size: 17, weight: 700 }) + T(xa + 14 + tw(k + '  ', 17, 700), y + 32, lab, { size: 17 });
    else if (xb + 12 + tw(txt, 17, 700) < 860) b += T(xb + 12, y + 32, k, { size: 17, weight: 700 }) + T(xb + 12 + tw(k + '  ', 17, 700), y + 32, lab, { size: 17 });
    else b += T(xa - 12, y + 32, lab, { size: 17, anchor: 'end' }) + T(xa - 18 - tw(lab, 17), y + 32, k, { size: 17, weight: 700, anchor: 'end' });
  });
  const ay = 440;
  b += `<line x1="${x0}" y1="${ay}" x2="${x1}" y2="${ay}" stroke="${C.ink}" stroke-width="4"/>`;
  for (let y = 1905; y <= 1945; y += 5) b += `<line x1="${X1(y)}" y1="${ay - 8}" x2="${X1(y)}" y2="${ay + 8}" stroke="${C.ink}" stroke-width="2.5"/>` + T(X1(y), ay - 16, String(y), { size: 15, fill: C.muted, anchor: 'middle' });
  const marks = [[1906, ['1906', 'Muslim League', 'founded'], 0], [1916, ['1916', 'Lucknow', 'Pact'], 0], [1928, ['1928', 'Nehru', 'Report'], 0], [1940, ['1940', 'Lahore', 'Resolution'], 0], [1947, ['1947', 'Independence'], 1, 1]];
  marks.forEach(([y, L, right, low]) => {
    const dy = low ? 64 : 0;
    b += `<circle cx="${X1(y)}" cy="${ay}" r="8" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + `<line x1="${X1(y)}" y1="${ay + 10}" x2="${X1(y)}" y2="${ay + 30 + dy}" stroke="${C.ink}" stroke-width="2"/>`;
    L.forEach((s, i) => { b += T(X1(y) + (right ? 6 : 0), ay + 50 + dy + i * 20, s, { size: i ? 15 : 17, weight: i ? 400 : 700, anchor: right ? 'end' : 'middle' }); });
  });
  const n = note(30, 622, 840, 'KQ10 (Jinnah, Allama Iqbal and Rahmat Ali) runs across the whole period: link each leader to the events above.', { bs: 17 });
  add('01-key-questions-timeline',
    svg(900, 622 + n.h + 30, 'Section 2 at a glance: 1905–1947', b + n.s),
    'A time axis from 1905 to 1947 with bars for each Key Question: KQ6 from 1905 to 1927, the Khilafat Movement (KQ7) from 1919 to 1924, KQ8 from 1927 to 1939 and KQ9 from 1940 to 1947. Markers show the League founded in 1906, the Lucknow Pact in 1916, the Nehru Report in 1928, the Lahore Resolution in 1940 and independence in 1947.',
    'Five Key Questions cover four overlapping periods and the three leaders who link them.',
    '## Syllabus coverage');
}

// 02 Section B question parts
{
  const parts = [
    ['4', 'marks', 'Knowledge', 'One short paragraph of accurate facts: dates, names, events.', C.panel],
    ['7', 'marks', 'Explanation', 'At least two developed paragraphs explaining why.', C.tealLight],
    ['14', 'marks', 'Evaluation', 'An essay of about two pages ending in a balanced judgement: how far, how successful.', C.cream],
  ];
  let b = '', y = 120;
  const hs = parts.map(([, , ti, d]) => Math.max(96, cardH(620, { title: ti, body: d, bs: 18, ts: 22 })));
  parts.forEach(([n, m, ti, d, f], i) => {
    const h = hs[i];
    b += R(30, y, 170, h, i === 2 ? C.mustard : C.cream, C.ink, { rx: 14 }) + T(115, y + h / 2 + 6, n, { size: 40, weight: 700, anchor: 'middle' }) + T(115, y + h / 2 + 32, m, { size: 17, anchor: 'middle', fill: C.ink });
    b += card(220, y, 650, { title: ti, body: d, bs: 18, ts: 22, fill: f, edge: i === 2 ? C.olive : C.panelEdge, bfill: C.ink, h }).s;
    y += h + 16;
  });
  const n = card(30, y + 6, 840, { title: 'Section A', body: 'A compulsory source-based question.', fill: C.panel, edge: C.ink, ts: 19 });
  add('02-section-b-question-parts',
    svg(900, y + 6 + n.h + 30, 'How a Paper 1 Section B question is built', b + n.s),
    'Three stacked bars show the parts of a Section B question: a 4-mark knowledge part of one short paragraph, a 7-mark explanation part of at least two developed paragraphs, and a 14-mark evaluation essay of about two pages. Section A is a compulsory source-based question.',
    'Marks rise from recall to explanation to judgement, so answers must grow with them.',
    '## How are Section 2 questions examined?');
}

// 03 KQ6 timeline 1905–27
{
  const tlx = timeline(30, 120, 840, [
    { d: '1905', title: 'Partition of Bengal', body: 'Curzon creates Muslim-majority East Bengal and Assam; Muslims welcome it.' },
    { d: 'Oct 1906', title: 'Simla Deputation', body: 'Led by the Aga Khan; asks Viceroy Minto for separate electorates and weightage.' },
    { d: 'Dec 1906', title: 'All-India Muslim League founded at Dhaka', body: 'To protect Muslim political rights, promote loyalty to the British and avoid hostility to other communities.', hi: true },
    { d: '1909', title: 'Morley–Minto Reforms', body: 'Separate electorates granted: a major early success.', hi: true },
    { d: '1911', title: 'Partition of Bengal reversed', body: 'After Hindu-led agitation. Many Muslims conclude they need their own political voice.' },
    { d: '1916', title: 'Lucknow Pact', body: 'Congress accepts separate electorates and one-third of central seats for Muslims.', hi: true },
    { d: '1919', title: 'Rowlatt Act, Amritsar, Montagu–Chelmsford', body: 'Detention without trial; troops fire at Jallianwala Bagh; dyarchy disappoints both parties.' },
    { d: 'mid-1920s', title: 'Divisions widen', body: 'Communal riots, shuddhi and sangathan, splits in Congress.' },
    { d: '1927', title: 'Delhi Proposals', body: 'Muslims offer to accept joint electorates in return for one-third of central seats and other demands.' },
  ], { dw: 140, bs: 16, ts: 18, gap: 10 });
  const n = note(30, 120 + tlx.h + 20, 840, 'Judgement: by 1927 the League had won separate electorates but was still small and divided, so the movement had developed only partly.', { bs: 17 });
  add('03-kq6-timeline-1905-27',
    svg(900, 120 + tlx.h + 20 + n.h + 30, 'KQ6: Muslim politics, 1905–1927', tlx.s + n.s),
    'A vertical timeline from the 1905 Partition of Bengal through the Simla Deputation and founding of the Muslim League in 1906, the Morley–Minto Reforms of 1909, the reversal of partition in 1911, the Lucknow Pact of 1916, the events of 1919 and the divisions of the mid-1920s to the Delhi Proposals of 1927. Gains for the League are highlighted.',
    'Separate electorates were won early, but co-operation with Congress did not last.',
    '## How did Muslim politics develop between 1905 and 1927? (Key Question 6)');
}

// 04 Khilafat: aim, events, failure, impact
{
  let b = '';
  const aim = card(30, 112, 840, { title: 'Aim', body: 'Stop the Allies breaking up the Ottoman Empire and removing the Sultan as caliph, guardian of the holy places. Led by the Ali brothers, Muhammad Ali Jauhar and Shaukat Ali.', fill: C.tealLight, edge: C.tealDark, bfill: C.ink });
  b += aim.s;
  let y = 112 + aim.h + 44;
  b += arrow(450, 112 + aim.h + 4, 450, y - 6, { w: 4 });
  const ev = [
    ['1920', 'Delegations to Britain fail to change policy'],
    ['1920', 'Hijrat: many migrate to Afghanistan; the border is closed and many return impoverished'],
    ['Non-Cooperation', 'Gandhi links it to the Khilafat cause: a brief high point of Hindu–Muslim unity'],
  ];
  const ew = 266, eh = Math.max(...ev.map(([d, s]) => cardH(ew, { title: d, body: s, bs: 16, ts: 19 })));
  ev.forEach(([d, s], i) => { b += card(30 + i * 287, y, ew, { title: d, body: s, bs: 16, ts: 19, h: eh, bfill: C.ink }).s; });
  b += T(30, y - 14, 'WHAT HAPPENED', { size: 16, weight: 700, fill: C.muted });
  y += eh + 54;
  b += T(30, y - 14, 'WHY IT FAILED', { size: 16, weight: 700, fill: C.rust }) + arrow(450, y - 48, 450, y - 6, { w: 4 });
  const fl = [
    ['1921', 'Moplah uprising damages Hindu–Muslim trust'],
    ['1922', 'Gandhi calls off Non-Cooperation after Chauri Chaura'],
    ['1924', 'The Turks, under Mustafa Kemal, abolish the caliphate'],
  ];
  const fh = Math.max(...fl.map(([d, s]) => cardH(ew, { title: d, body: s, bs: 16, ts: 19 })));
  fl.forEach(([d, s], i) => { b += card(30 + i * 287, y, ew, { title: d, body: s, bs: 16, ts: 19, h: fh, fill: '#f6e3d6', edge: C.rust, bfill: C.ink }).s; });
  y += fh + 54;
  b += arrow(450, y - 48, 450, y - 6, { w: 4 });
  const im = [['Loss', 'Muslims lost faith in Congress leadership.'], ['Gain', 'Ordinary Muslims were mobilised politically and a generation of leaders was trained.']];
  const ih = Math.max(...im.map(([a, c]) => cardH(410, { title: a, body: c })));
  b += T(30, y - 14, 'IMPACT ON MUSLIMS', { size: 16, weight: 700, fill: C.olive });
  im.forEach(([a, c], i) => { b += card(30 + i * 430, y, 410, { title: a, body: c, h: ih, fill: C.cream, edge: C.olive, bfill: C.ink }).s; });
  add('04-khilafat-movement',
    svg(900, y + ih + 30, 'The Khilafat Movement: aim, failure, impact', b),
    'The aim of the Khilafat Movement, to protect the Ottoman caliph, sits above three events: failed delegations in 1920, the Hijrat to Afghanistan in 1920 and Gandhi’s Non-Cooperation link. Three reasons for failure follow: the Moplah uprising in 1921, Chauri Chaura in 1922 and the abolition of the caliphate in 1924. The impact was a loss of faith in Congress but a politically mobilised Muslim population.',
    'The movement failed in its aim but changed Muslim politics.',
    '## Why did the Khilafat Movement fail? (Key Question 7)');
}

// 05 Simon Commission -> Nehru Report -> 14 Points
{
  let b = '';
  const ch = [
    ['1927', 'Simon Commission', 'All-British; boycotted by most Indian leaders'],
    ['1928', 'Nehru Report', 'Rejected key Muslim safeguards'],
    ['1929', 'Jinnah’s 14 Points', 'The League’s reply'],
  ];
  const cw = 250, chh = Math.max(...ch.map(([d, ti, s]) => cardH(cw, { title: ti, sub: d, body: s, bs: 16 })));
  ch.forEach(([d, ti, s], i) => {
    b += card(30 + i * 295, 112, cw, { title: ti, sub: d, body: s, bs: 16, h: chh, fill: i === 2 ? C.cream : C.panel, edge: i === 2 ? C.olive : C.panelEdge, subfill: C.olive }).s;
    if (i < 2) b += arrow(30 + i * 295 + cw + 6, 112 + chh / 2, 30 + (i + 1) * 295 - 8, 112 + chh / 2, { w: 4 });
  });
  const gy = 112 + chh + 30;
  const g = grid(30, gy, [{ label: 'Issue', w: 240 }, { label: 'Nehru Report (1928)', w: 300 }, { label: '14 Points (1929)', w: 300 }], [
    ['Separate electorates', 'Rejected', 'Demanded'],
    ['Muslim share of central seats', 'One-third rejected', 'One-third demanded'],
  ], { size: 17 });
  const n = note(30, gy + g.h + 20, 840, 'The 14 Points also asked for a federal constitution and provincial autonomy. Many Muslims, including Jinnah, saw the Nehru Report as evidence that Congress would not protect them.', { bs: 17 });
  add('05-nehru-report-14-points',
    svg(900, gy + g.h + 20 + n.h + 30, 'From the Simon Commission to the 14 Points', b + g.s + n.s),
    'A chain from the all-British Simon Commission of 1927 to the Nehru Report of 1928 and Jinnah’s 14 Points of 1929. A table compares them: the Nehru Report rejected separate electorates and one-third Muslim representation at the centre; the 14 Points kept both and asked for a federal constitution with provincial autonomy.',
    'The Nehru Report’s rejection of Muslim safeguards led directly to the 14 Points.',
    '## How successful was the Pakistan Movement between 1927 and 1939? (Key Question 8)');
}

// 06 Congress rule 1937–39 chain
{
  let b = '';
  const steps = [
    ['1937 elections', 'Congress wins most provinces; the League does poorly, even in Muslim-majority areas.', C.panel, C.panelEdge],
    ['Congress rule, 1937–39', null, C.tealLight, C.tealDark],
    ['1939: Congress ministries resign', 'Jinnah calls for a Day of Deliverance on 22 December 1939.', C.panel, C.panelEdge],
    ['Result', 'Many Muslims are convinced they need a separate homeland.', C.cream, C.olive],
  ];
  let y = 112;
  steps.forEach(([ti, d, f, e], i) => {
    let c;
    if (i === 1) {
      const top = 112;
      const items = ['Singing of Bande Mataram', 'Wardha and Vidya Mandir education schemes', 'Refusal to share power with the League in the United Provinces'];
      const iw = 252, ih = Math.max(...items.map((s) => cardH(iw, { body: s, bs: 16 })));
      const hh = 52 + ih + 18;
      b += R(30, y, 840, hh, f, e, { rx: 14 }) + T(48, y + 34, ti + ': what alienated Muslims', { size: 20, weight: 700 });
      items.forEach((s, k) => { b += card(48 + k * 274, y + 52, iw, { body: s, bs: 16, h: ih, bfill: C.ink }).s; });
      c = { h: hh };
    } else { c = card(30, y, 840, { title: ti, body: d, fill: f, edge: e, bfill: C.ink }); b += c.s; }
    if (i < steps.length - 1) b += arrow(450, y + c.h + 4, 450, y + c.h + 30, { w: 4 });
    y += c.h + 36;
  });
  add('06-congress-rule-1937-39',
    svg(900, y - 36 + 30, 'Congress rule, 1937–39: from defeat to a demand', b),
    'A chain from the 1937 elections, where the League did poorly, to Congress rule from 1937 to 1939, which alienated Muslims through Bande Mataram, the Wardha and Vidya Mandir schemes and refusing to share power in the United Provinces. The ministries resigned in 1939, Jinnah called a Day of Deliverance on 22 December, and many Muslims became convinced they needed a separate homeland.',
    'A poor start in 1937 turned, through Congress rule, into support for a homeland.',
    '## How successful was the Pakistan Movement between 1927 and 1939? (Key Question 8)');
}

// 07 1940–47 timeline
{
  const tlx = timeline(30, 120, 840, [
    { d: '23 Mar 1940', title: 'Lahore (Pakistan) Resolution', body: 'Demands independent states in the Muslim-majority north-west and east.', hi: true },
    { d: '1942', title: 'Cripps Mission rejected; Quit India (Aug)', body: 'Congress leaders imprisoned while the League strengthens.' },
    { d: '1944', title: 'Gandhi–Jinnah talks fail', body: 'Gandhi saw India as one nation.' },
    { d: '1945', title: 'Simla Conference collapses', body: 'Congress rejects the League’s claim to nominate all Muslim members.' },
    { d: '1945–46', title: 'Elections', body: 'League wins every Muslim seat in the central assembly and most Muslim provincial seats.', hi: true },
    { d: '1946', title: 'Cabinet Mission Plan', body: 'League accepts the loose federation, then withdraws after Nehru’s statements.' },
    { d: '16 Aug 1946', title: 'Direct Action Day', body: 'Followed by severe rioting in Calcutta.' },
    { d: '3 Jun 1947', title: '3 June Plan', body: 'Mountbatten’s plan provides for partition.' },
    { d: 'Jul 1947', title: 'Indian Independence Act', body: 'Two dominions created on 14–15 August; the Radcliffe Award is announced after independence.', hi: true },
  ], { dw: 150, bs: 16, ts: 18, gap: 10 });
  add('07-solutions-1940-47',
    svg(900, 120 + tlx.h + 30, 'KQ9: from resolution to independence, 1940–47', tlx.s),
    'A vertical timeline from the Lahore Resolution of 23 March 1940 through the Cripps Mission and Quit India in 1942, the Gandhi–Jinnah talks of 1944, the Simla Conference of 1945, the 1945–46 elections, the Cabinet Mission and Direct Action Day in 1946 and the 3 June Plan to the Indian Independence Act of July 1947.',
    'Each failed solution after 1940 strengthened the case for partition.',
    '## How was independence achieved between 1940 and 1947? (Key Question 9)');
}

// 08 Jinnah, Iqbal, Rahmat Ali
{
  const cols = [
    ['Jinnah', 'Leader and negotiator', ['Began as an “ambassador of Hindu–Muslim unity” in Congress and the Lucknow Pact', 'Led the League from the 1930s', 'Negotiated with the British and Congress', 'Turned the 1940 Resolution into a state'], 'Most historians see his leadership as decisive.', C.cream, C.olive],
    ['Allama Iqbal', 'Thinker', ['Gave Muslim nationhood its philosophical basis', '1930 Allahabad address: a North-Western Indian Muslim state', 'Encouraged Jinnah to lead the League'], 'Died in 1938, before the 1940 Resolution.', C.tealLight, C.tealDark],
    ['Rahmat Ali', 'Name-giver', ['1933 pamphlet Now or Never proposed the name “Pakstan”', 'Campaigned from Britain', 'Demanded complete separation'], 'Had little influence on League policy.', C.panel, C.panelEdge],
  ];
  const w = 270;
  const hb = Math.max(...cols.map(([a, s, items]) => cardH(w, { title: a, sub: s, body: items, bullets: true, bs: 16, ts: 22 })));
  let b = '';
  cols.forEach(([a, s, items, v, f, e], i) => {
    const x = 30 + i * 285;
    b += card(x, 112, w, { title: a, sub: s, body: items, bullets: true, bs: 16, ts: 22, h: hb, fill: f, edge: e, bfill: C.ink }).s;
  });
  const vh = Math.max(...cols.map(([, , , v]) => cardH(w, { body: v, bs: 16 })));
  cols.forEach(([, , , v], i) => { b += card(30 + i * 285, 112 + hb + 14, w, { body: v, bs: 16, h: vh, fill: '#ffffff', edge: C.ink, bfill: C.ink, rx: 10 }).s; });
  const ny = 112 + hb + 14 + vh + 22;
  const n = note(30, ny, 840, 'Iqbal vs Rahmat Ali: Iqbal wanted a Muslim state within a framework of the subcontinent; Rahmat Ali demanded complete separation.', { bs: 17 });
  add('08-jinnah-iqbal-rahmat-ali',
    svg(900, ny + n.h + 30, 'KQ10: three contributions compared', b + n.s),
    'Three columns. Jinnah moved from Hindu–Muslim unity to leading the League and turning the 1940 Resolution into a state. Iqbal gave Muslim nationhood its philosophical basis and proposed a North-Western Muslim state in 1930 but died in 1938. Rahmat Ali coined the name in 1933 and demanded complete separation but had little influence on League policy.',
    'Iqbal supplied the idea, Rahmat Ali the name, and Jinnah the leadership that made the state.',
    '## How important were Jinnah, Iqbal and Rahmat Ali? (Key Question 10)');
}
