// Board-neutral redraws of six index-law and algebraic-fraction figures shared by Cambridge, Edexcel,
// OCR and OxfordAQA maths pages. The old pictures carried "Core" / "Extended" tier pills; the maths
// and every number are unchanged.
import { C, svg, panel, t } from '../style.mjs';

export const slug = 'mathematics-algebraic-fractions-and-indices-ii';
const W = 900;
const RUST = '#c0643a';
// Inline maths: "x^{3} × x^{2}" -> superscripts as tspans (spaces after a superscript kept with dx).
const m = (s) => s.split(/(\^\{[^}]*\})/).map((seg, i, a) => {
  if (seg.startsWith('^{')) return `<tspan font-size="65%" dy="-0.6em">${seg.slice(2, -1)}</tspan>`;
  if (!(i > 0 && a[i - 1].startsWith('^{'))) return seg;
  if (!seg) return '';
  const sp = seg.startsWith(' ');
  return `<tspan dy="0.39em"${sp ? ' dx="0.28em"' : ''}>${sp ? seg.slice(1) : seg}</tspan>`;
}).join('');
const M = (x, y, s, o) => t(x, y, m(s), o);
const box = (x, y, w, h, s, { fill = C.teal, edge = C.ink, size = 20, color = C.ink, weight = 700, rx = 8, sw = 2.5 } = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>` +
  t(x + w / 2, y + h / 2 + size * 0.36, s, { size, weight, fill: color, anchor: 'middle' });
const frac = (x, y, top, bot, w, { size = 30, color = C.tealDark } = {}) =>
  t(x, y, top, { size, weight: 700, fill: color, anchor: 'middle' }) +
  `<line x1="${x - w / 2}" y1="${y + 14}" x2="${x + w / 2}" y2="${y + 14}" stroke="${C.ink}" stroke-width="3"/>` +
  t(x, y + 14 + size * 1.15, bot, { size, weight: 700, fill: color, anchor: 'middle' });

// ---------- 1. Index rules with tiles ----------
function tiles() {
  const o = [];
  const dy = -40, Y = (y) => y + dy;
  const tile = (x, y, fill) => box(x, y, 60, 60, 'x', { fill, size: 20 });
  // multiply
  o.push(panel(30, Y(170), 840, 230, '#ffffff', C.ink));
  o.push(M(60, Y(214), 'x^{3} × x^{2}', { size: 21, weight: 700 }));
  for (let i = 0; i < 5; i++) o.push(tile(60 + i * 72, Y(238), i < 3 ? C.teal : C.cream));
  o.push(M(520, Y(292), '= x^{5}', { size: 44, weight: 700, fill: C.tealDark }));
  o.push(t(60, Y(360), 'Multiply: add the indices 3 + 2 = 5', { size: 22, weight: 700, fill: C.olive }));
  // divide
  o.push(panel(30, Y(420), 840, 330, '#ffffff', C.ink));
  o.push(M(60, Y(463), 'x^{5} ÷ x^{2}', { size: 21, weight: 700 }));
  for (let i = 0; i < 5; i++) o.push(tile(60 + i * 72, Y(480), i < 2 ? '#e6e8e8' : C.teal));
  o.push(`<line x1="50" y1="${Y(559)}" x2="418" y2="${Y(559)}" stroke="${C.ink}" stroke-width="3.5"/>`);
  for (let i = 0; i < 2; i++) o.push(tile(60 + i * 72, Y(576), '#e6e8e8'));
  for (const x of [90, 162]) o.push(`<line x1="${x}" y1="${Y(472)}" x2="${x}" y2="${Y(645)}" stroke="${RUST}" stroke-width="5"/>`);
  o.push(M(520, Y(568), '= x^{3}', { size: 44, weight: 700, fill: C.tealDark }));
  o.push(t(520, Y(619), 'cancelled pairs', { size: 20, weight: 700, fill: RUST }));
  o.push(t(60, Y(704), 'Divide: subtract 5 − 2 = 3', { size: 22, weight: 700, fill: C.olive }));
  // power of a power
  o.push(panel(30, Y(770), 840, 270, '#ffffff', C.ink));
  o.push(M(60, Y(814), '(x^{2})^{3}', { size: 21, weight: 700 }));
  for (let g = 0; g < 3; g++) {
    const gx = 50 + g * 170;
    o.push(`<rect x="${gx}" y="${Y(832)}" width="152" height="78" rx="12" fill="none" stroke="${C.olive}" stroke-width="3"/>`);
    o.push(tile(gx + 10, Y(841), C.cream), tile(gx + 82, Y(841), C.cream));
  }
  o.push(M(600, Y(890), '= x^{6}', { size: 44, weight: 700, fill: C.tealDark }));
  o.push(t(60, Y(975), 'Power of a power: multiply 2 × 3 = 6', { size: 22, weight: 700, fill: C.olive }));
  o.push(t(60, Y(1008), '3 groups of 2 tiles', { size: 19, fill: C.muted }));
  return svg(W, 1030, 'Index rules, shown with tiles', o.join('\n'), 'Each tile is one factor of x');
}

// ---------- 2. Zero and negative indices ----------
function zeroNeg() {
  const o = [];
  const rows = [['3', '8', 8], ['2', '4', 4], ['1', '2', 2], ['0', '1', 1], ['−1', '1/2', 0.5], ['−2', '1/4', 0.25], ['−3', '1/8', 0.125]];
  const y0 = 162, gap = 96;
  // highlight the zero row first, so arrows sit on top of it
  o.push(`<rect x="30" y="${y0 + 3 * gap - 31}" width="840" height="62" rx="12" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`);
  rows.forEach(([p, v, val], i) => {
    const y = y0 + i * gap;
    const neg = val < 1, zero = val === 1;
    o.push(M(60, y + 10, `2^{${p}}`, { size: 30, weight: 700 }));
    const w = Math.max(6, val * 36);
    o.push(`<rect x="360" y="${y - 24}" width="${w}" height="48" rx="6" fill="${neg ? C.cream : C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`);
    o.push(t(360 + w + 14, y + 10, `= ${v}`, { size: 26, weight: 700, fill: zero ? C.olive : C.ink }));
    if (i < rows.length - 1) {
      const ay = y + 36;
      o.push(`<line x1="250" y1="${ay}" x2="250" y2="${ay + 22}" stroke="${C.tealDark}" stroke-width="3.5"/><path d="M239 ${ay + 12} L250 ${ay + 24} L261 ${ay + 12}" fill="none" stroke="${C.tealDark}" stroke-width="3.5" stroke-linecap="round"/>`);
      o.push(t(272, ay + 18, '÷ 2', { size: 18, weight: 700, fill: C.tealDark }));
    }
  });
  const yb = y0 + 7 * gap + 20;
  o.push(M(60, yb, 'x^{0} = 1', { size: 34, weight: 700, fill: C.olive }));
  o.push(M(380, yb, 'x^{−n} = 1 / x^{n}', { size: 34, weight: 700, fill: C.tealDark }));
  o.push(t(60, yb + 50, 'Negative index: "one over", not a negative number', { size: 20, fill: C.muted }));
  return svg(W, yb + 84, 'Zero and negative indices', o.join('\n'), 'Each step down: ÷ 2');
}

// ---------- 3. Solving index equations ----------
function solving() {
  const o = [];
  const dy = -35, Y = (y) => y + dy;
  o.push(panel(30, Y(150), 840, 488, '#ffffff', C.ink));
  const X = (x) => 437 + (x * 654) / 10, Yv = (v) => Y(570) - v * 9.5;
  for (const v of [8, 16, 24, 32, 40]) o.push(`<line x1="110" y1="${Yv(v)}" x2="830" y2="${Yv(v)}" stroke="#c9d6d4" stroke-width="2"/>`);
  for (const v of [0, 8, 16, 24, 32, 40]) o.push(t(96, Yv(v) + 7, String(v), { size: 19, anchor: 'end' }));
  for (let x = -5; x <= 6; x++) o.push(t(X(x), Y(604), x < 0 ? `−${-x}` : String(x), { size: 19, anchor: 'middle' }));
  o.push(`<line x1="110" y1="${Yv(0)}" x2="830" y2="${Yv(0)}" stroke="${C.ink}" stroke-width="3.5"/>`);
  o.push(`<line x1="${X(0)}" y1="${Yv(0)}" x2="${X(0)}" y2="${Y(178)}" stroke="${C.ink}" stroke-width="3.5"/>`);
  o.push(t(855, Y(578), 'x', { size: 21, weight: 700 }));
  o.push(M(X(0) + 16, Y(186), 'y = 2^{x}', { size: 21, weight: 700, fill: C.tealDark }));
  const pts = [];
  for (let x = -5; x <= 5.32; x += 0.05) pts.push(`${X(x).toFixed(1)},${Yv(2 ** x).toFixed(1)}`);
  o.push(`<polyline points="${pts.join(' ')}" fill="none" stroke="${C.tealDark}" stroke-width="4"/>`);
  // x = 5
  o.push(`<polyline points="${X(0)},${Yv(32)} ${X(5)},${Yv(32)} ${X(5)},${Yv(0)}" fill="none" stroke="${C.olive}" stroke-width="2.5" stroke-dasharray="9 6"/>`);
  o.push(`<circle cx="${X(5)}" cy="${Yv(32)}" r="9" fill="${C.olive}" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(t(X(0) - 12, Yv(32) + 8, '32', { size: 21, weight: 700, fill: C.olive, anchor: 'end' }));
  o.push(M(X(0) + 28, Yv(32) - 18, '2^{x} = 32 = 2^{5}', { size: 21, weight: 700, fill: C.olive }));
  o.push(t(X(5) - 14, Yv(0) - 20, 'x = 5', { size: 21, weight: 700, fill: C.olive, anchor: 'end' }));
  // x = -4
  o.push(`<line x1="${X(-4)}" y1="${Yv(0)}" x2="${X(-4)}" y2="${Yv(14)}" stroke="${RUST}" stroke-width="2.5" stroke-dasharray="9 6"/>`);
  o.push(`<circle cx="${X(-4)}" cy="${Yv(1 / 16)}" r="9" fill="${RUST}" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(M(126, Yv(20), '2^{x} = 1/16 = 2^{−4}', { size: 21, weight: 700, fill: RUST }));
  o.push(t(126, Yv(20) + 32, 'x = −4', { size: 21, weight: 700, fill: RUST }));
  // examples
  o.push(panel(30, Y(660), 840, 230, '#ffffff', C.ink));
  o.push(t(60, Y(705), 'Rewrite as one base, then equate indices', { size: 22, weight: 700 }));
  o.push(M(60, Y(767), '3^{x} = 81 = 3^{4} → x = 4', { size: 24, weight: 700, fill: C.tealDark }));
  o.push(M(60, Y(818), '5^{x−1} = 125 = 5^{3} → x − 1 = 3 → x = 4', { size: 24, weight: 700, fill: C.olive }));
  o.push(M(60, Y(869), '2^{x} = 1/16 = 2^{−4} → x = −4', { size: 24, weight: 700, fill: C.tealDark }));
  return svg(W, 880, m('Solving 2^{x} = a number'), o.join('\n'), 'Match the powers: same base, equal indices');
}

// ---------- 4. Fractional index ----------
function fractional() {
  const o = [];
  const dy = -40, Y = (y) => y + dy;
  o.push(panel(30, Y(170), 840, 130, '#ffffff', C.ink));
  // x^(m/n) = (n-th root of x)^m
  const fy = Y(246);
  o.push(M(300, fy, 'x^{m/n} =', { size: 40, weight: 700, fill: C.tealDark }));
  o.push(t(420, fy, '(', { size: 40, weight: 700, fill: C.tealDark }));
  o.push(t(444, fy - 16, 'n', { size: 22, weight: 700, fill: C.tealDark }));
  o.push(`<path d="M448 ${fy - 10} L458 ${fy - 2} L468 ${fy - 30} L512 ${fy - 30}" fill="none" stroke="${C.tealDark}" stroke-width="3.5"/>`);
  o.push(t(474, fy, 'x', { size: 40, weight: 700, fill: C.tealDark }));
  o.push(M(520, fy, ')^{m}', { size: 40, weight: 700, fill: C.tealDark }));
  o.push(t(450, Y(284), 'n is the root, m is the power', { size: 20, fill: C.muted, anchor: 'middle' }));
  // worked example
  o.push(panel(30, Y(330), 840, 500, '#ffffff', C.ink));
  o.push(M(60, Y(384), '64^{2/3}', { size: 36, weight: 700 }));
  o.push(t(60, Y(428), 'root first keeps numbers small', { size: 20, fill: C.muted }));
  // isometric 4x4x4 cube
  const s = 38, ox = 70, oy = Y(560), dx = 19, dyy = -19; // front face top-left at (ox, oy)
  const F = (i, j) => [ox + i * s, oy + j * s], D = (k) => [k * dx, k * dyy];
  const front = `M${ox} ${oy} h${4 * s} v${4 * s} h${-4 * s} z`;
  const top = `M${ox} ${oy} l${4 * dx} ${4 * dyy} h${4 * s} l${-4 * dx} ${-4 * dyy} z`;
  const side = `M${ox + 4 * s} ${oy} l${4 * dx} ${4 * dyy} v${4 * s} l${-4 * dx} ${-4 * dyy} z`;
  o.push(`<path d="${top}" fill="#dfeceb" stroke="${C.ink}" stroke-width="3"/><path d="${side}" fill="${C.teal}" stroke="${C.ink}" stroke-width="3"/><path d="${front}" fill="#ffffff" stroke="${C.ink}" stroke-width="3"/>`);
  const g = [];
  for (let k = 1; k < 4; k++) {
    g.push(`M${ox + k * s} ${oy} v${4 * s}`, `M${ox} ${oy + k * s} h${4 * s}`); // front
    g.push(`M${ox + k * s} ${oy} l${4 * dx} ${4 * dyy}`, `M${ox + k * dx} ${oy + k * dyy} h${4 * s}`); // top
    g.push(`M${ox + 4 * s + k * dx} ${oy + k * dyy} v${4 * s}`, `M${ox + 4 * s} ${oy + k * s} l${4 * dx} ${4 * dyy}`); // side
  }
  o.push(`<path d="${g.join(' ')}" fill="none" stroke="#5f9c95" stroke-width="2"/>`);
  o.push(`<path d="${top}" fill="none" stroke="${C.ink}" stroke-width="3"/><path d="${side}" fill="none" stroke="${C.ink}" stroke-width="3"/><path d="${front}" fill="none" stroke="${C.ink}" stroke-width="3"/>`);
  o.push(t(ox + 2 * s + 2 * dx, Y(470), 'edge = 4', { size: 21, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(ox + 2 * s, Y(752), '64 small cubes', { size: 20, fill: C.muted, anchor: 'middle' }));
  o.push(M(60, Y(792), '(∛64)^{2} = 4^{2} = 16', { size: 24, weight: 700 }));
  // arrow
  o.push(`<line x1="330" y1="${Y(630)}" x2="414" y2="${Y(630)}" stroke="${C.olive}" stroke-width="5"/><polygon points="446,${Y(630)} 412,${Y(614)} 412,${Y(646)}" fill="${C.olive}"/>`);
  o.push(t(386, Y(598), '∛', { size: 34, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(386, Y(674), 'cube root', { size: 20, weight: 700, fill: C.olive, anchor: 'middle' }));
  // 4x4 square
  o.push(`<rect x="470" y="${Y(490)}" width="144" height="144" fill="${C.cream}" stroke="${C.ink}" stroke-width="3"/>`);
  for (let k = 1; k < 4; k++) o.push(`<path d="M${470 + k * 36} ${Y(490)} v144 M470 ${Y(490) + k * 36} h144" stroke="${C.olive}" stroke-width="2"/>`);
  o.push(t(542, Y(474), '4 × 4', { size: 21, weight: 700, anchor: 'middle' }));
  o.push(t(542, Y(672), 'squared = 16', { size: 22, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(654, Y(578), '= 16', { size: 50, weight: 700, fill: C.tealDark }));
  // negative
  o.push(panel(30, Y(860), 840, 170, '#ffffff', C.ink));
  o.push(M(60, Y(930), '64^{−2/3} = 1 / 64^{2/3} = 1/16', { size: 34, weight: 700, fill: C.tealDark }));
  o.push(t(60, Y(984), 'The negative index means "one over"', { size: 21, fill: C.muted }));
  return svg(W, 1020, 'Fractional index: root, then power', o.join('\n'), 'Denominator = root, numerator = power');
}

// ---------- 5. Cancel an algebraic fraction ----------
function cancel() {
  const o = [];
  const dy = -40, Y = (y) => y + dy;
  const Y1 = { fill: C.cream, edge: C.olive, size: 22 }, T1 = { fill: C.teal, edge: C.ink, size: 22 };
  o.push(panel(30, Y(170), 840, 330, '#ffffff', C.ink));
  o.push(t(60, Y(214), '1 Factorise top and bottom', { size: 22, weight: 700 }));
  o.push(M(60, Y(300), '2x^{2} + 5x − 3', { size: 25, weight: 700 }));
  o.push(`<line x1="60" y1="${Y(340)}" x2="290" y2="${Y(340)}" stroke="${C.ink}" stroke-width="3"/>`);
  o.push(M(60, Y(418), '4x^{2} − 1', { size: 25, weight: 700 }));
  o.push(t(310, Y(300), '=', { size: 30, weight: 700, anchor: 'middle' }), t(310, Y(418), '=', { size: 30, weight: 700, anchor: 'middle' }));
  o.push(box(340, Y(248), 150, 64, '(2x − 1)', Y1), box(510, Y(248), 130, 64, '(x + 3)', T1));
  o.push(`<line x1="340" y1="${Y(340)}" x2="640" y2="${Y(340)}" stroke="${C.ink}" stroke-width="3"/>`);
  o.push(box(340, Y(360), 150, 64, '(2x − 1)', Y1), box(510, Y(360), 150, 64, '(2x + 1)', T1));
  o.push(t(690, Y(404), 'difference of', { size: 19, fill: C.muted }), t(690, Y(432), 'two squares', { size: 19, fill: C.muted }));
  o.push(panel(30, Y(520), 840, 250, '#ffffff', C.ink));
  o.push(t(60, Y(564), '2 Cancel the matching bracket', { size: 22, weight: 700 }));
  const ghost = { fill: '#faf3dc', edge: '#d8c98f', size: 22, color: '#9aa1ab' };
  o.push(box(60, Y(596), 150, 64, '(2x − 1)', ghost), box(60, Y(670), 150, 64, '(2x − 1)', ghost));
  o.push(`<line x1="135" y1="${Y(588)}" x2="135" y2="${Y(742)}" stroke="${RUST}" stroke-width="5"/>`);
  o.push(box(230, Y(596), 130, 64, '(x + 3)', T1), box(230, Y(670), 150, 64, '(2x + 1)', T1));
  o.push(t(444, Y(666), '=', { size: 36, weight: 700, anchor: 'middle' }));
  o.push(frac(565, Y(640), 'x + 3', '2x + 1', 154, { size: 36 }));
  o.push(panel(30, Y(790), 840, 130, '#ffffff', C.ink));
  o.push(t(60, Y(842), 'Check x = 5:', { size: 23, weight: 700 }));
  o.push(t(278, Y(842), '72/99 = 8/11 and 8/11 ✓', { size: 23, weight: 700, fill: C.tealDark }));
  o.push(t(60, Y(890), 'Both forms give the same value', { size: 19, fill: C.muted }));
  o.push(panel(30, Y(940), 840, 160, '#ffffff', RUST));
  o.push(M(60, Y(1004), '(x^{2} + 3) / (x^{2} − 1)', { size: 26, weight: 700 }));
  o.push(`<path d="M648 ${Y(972)} L672 ${Y(1004)} M676 ${Y(970)} L650 ${Y(1006)}" stroke="${RUST}" stroke-width="3.5" stroke-linecap="round" fill="none"/>`);
  o.push(M(60, Y(1060), 'Cannot cancel x^{2}: it is added, not a factor', { size: 21, weight: 700, fill: RUST }));
  return svg(W, 1090, 'Simplify by cancelling brackets', o.join('\n'), 'Factorise first, then cancel whole factors');
}

// ---------- 6. Common denominator ----------
function common() {
  const o = [];
  const dy = -40, Y = (y) => y + dy;
  o.push(panel(30, Y(170), 840, 410, '#ffffff', C.ink));
  o.push(t(60, Y(214), 'Cut both into twelfths', { size: 22, weight: 700 }));
  const bar = (y, groups, dark, light, edge, lab) => {
    const cw = 60, per = 12 / groups;
    for (let i = 0; i < 12; i++) {
      const g = Math.floor(i / per);
      o.push(`<rect x="${90 + i * cw}" y="${Y(y)}" width="${cw}" height="54" fill="${g % 2 ? light : dark}" stroke="${edge}" stroke-width="1.5"/>`);
    }
    for (let g = 0; g < groups; g++) {
      o.push(`<rect x="${90 + g * per * cw}" y="${Y(y)}" width="${per * cw}" height="54" rx="4" fill="none" stroke="${C.ink}" stroke-width="3"/>`);
      o.push(t(90 + (g + 0.5) * per * cw, Y(y) + 80, lab, { size: 19, weight: 700, anchor: 'middle' }));
    }
  };
  o.push(t(90, Y(270), 'One quarter = 3 twelfths', { size: 22, weight: 700, fill: C.tealDark }));
  bar(282, 4, C.teal, '#dfeceb', '#5f7f7b', '1/4');
  o.push(t(90, Y(420), 'One sixth = 2 twelfths', { size: 22, weight: 700, fill: C.olive }));
  bar(432, 6, C.cream, '#fbf5dc', '#a89a5c', '1/6');
  o.push(t(450, Y(560), 'Lowest common denominator: 12', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(panel(30, Y(600), 840, 390, '#ffffff', C.ink));
  o.push(t(60, Y(642), 'Then combine the numerators', { size: 22, weight: 700 }));
  o.push(t(60, Y(714), '3(2x + 1) − 2(x − 3)', { size: 28, weight: 700 }));
  o.push(t(60, Y(776), '= 6x + 3 − 2x + 6', { size: 28, weight: 700 }));
  o.push(t(480, Y(776), '(−2) × (−3) = +6', { size: 21, weight: 700, fill: RUST }));
  o.push(t(60, Y(838), '= 4x + 9', { size: 28, weight: 700, fill: C.tealDark }));
  o.push(t(60, Y(920), 'Answer:', { size: 23, weight: 700 }));
  o.push(frac(250, Y(902), '4x + 9', '12', 140, { size: 30 }));
  return svg(W, 980, 'Add and subtract: common denominator', o.join('\n'), '(2x + 1)/4 − (x − 3)/6');
}

export const figures = [
  { name: '01-index-rules-tiles', after: '### Negative and fractional powers (Higher tier only)', svg: tiles(),
    alt: 'Tiles each represent one factor of x. x^3 times x^2 is five tiles, x^5. x^5 divided by x^2 cancels two pairs leaving x^3. (x^2)^3 is three groups of two tiles, x^6.',
    caption: 'Multiply adds indices, divide subtracts, power of a power multiplies.' },
  { name: '02-zero-negative-indices', after: '### Negative and fractional powers (Higher tier only)', svg: zeroNeg(),
    alt: 'A ladder of powers of 2 from 2^3=8 down to 2^-3=1/8, each step dividing by 2, so 2^0=1 and negative indices give one over the positive power.',
    caption: 'Each step down divides by 2, which makes x^0 = 1 and x^-n = 1/x^n.' },
  { name: '03-solving-index-equations', after: '## N6: Index laws', svg: solving(),
    alt: 'Graph of y=2^x: y=32 meets the curve at x=5 and y=1/16 at x=-4. Three solved examples write both sides as one base and equate the indices.',
    caption: 'Write both sides as powers of one base, then equate indices.' },
  { name: '04-fractional-index', after: '### Negative and fractional powers (Higher tier only)', svg: fractional(),
    alt: '64 is a 4 by 4 by 4 cube, so its cube root is 4; squaring gives 16, so 64^(2/3)=16 and 64^(-2/3)=1/16.',
    caption: 'Take the root first, then the power; a negative index means one over.' },
  { name: '05-cancel-algebraic-fraction', after: '### Algebraic fractions', svg: cancel(),
    alt: '(2x^2+5x-3)/(4x^2-1) factorises to (2x-1)(x+3) over (2x-1)(2x+1); cancelling (2x-1) leaves (x+3)/(2x+1), checked at x=5 as 8/11. Terms that are added, such as x^2 in (x^2+3)/(x^2-1), cannot be cancelled.',
    caption: 'Factorise, then cancel whole brackets only.' },
  { name: '06-common-denominator', after: '### Algebraic fractions', svg: common(),
    alt: 'Bars of twelve cells show 1/4 = 3/12 and 1/6 = 2/12. Then 3(2x+1)-2(x-3) = 6x+3-2x+6 = 4x+9, so the answer is (4x+9)/12.',
    caption: 'Rewrite over the common denominator, then combine numerators carefully.' },
];
