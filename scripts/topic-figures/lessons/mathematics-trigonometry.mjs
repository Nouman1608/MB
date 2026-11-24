// Board-neutral redraws of six trigonometry figures shared by Cambridge, Edexcel, OCR and OxfordAQA
// maths pages. The old pictures carried an "Extended" tier pill; triangles are still drawn to scale
// from the lesson numbers, and every value is unchanged.
import { C, svg, t } from '../style.mjs';

export const slug = 'mathematics-trigonometry';
const W = 900;
const RUST = '#c0643a', SLATE = '#4a5a78';
const rad = (d) => (d * Math.PI) / 180;
const f1 = (v) => v.toFixed(1);
// Inline maths: "x^{3}" superscripts as tspans.
const m = (s) => s.split(/(\^\{[^}]*\})/).map((seg, i, a) => {
  if (seg.startsWith('^{')) return `<tspan font-size="65%" dy="-0.6em">${seg.slice(2, -1)}</tspan>`;
  if (!(i > 0 && a[i - 1].startsWith('^{'))) return seg;
  if (!seg) return '';
  const sp = seg.startsWith(' ');
  return `<tspan dy="0.39em"${sp ? ' dx="0.28em"' : ''}>${sp ? seg.slice(1) : seg}</tspan>`;
}).join('');
const M = (x, y, s, o) => t(x, y, m(s), o);
const halo = (s) => s.replace('<text ', '<text stroke="#ffffff" stroke-width="5" paint-order="stroke" ');
const L = (x, y, s, o) => halo(t(x, y, s, o));
const line = (a, b, col = C.ink, w = 3, dash = '') => `<line x1="${f1(a[0])}" y1="${f1(a[1])}" x2="${f1(b[0])}" y2="${f1(b[1])}" stroke="${col}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''} stroke-linecap="round"/>`;
// angle arc at vertex p from direction a1 to a2 (degrees, SVG y-down, measured anticlockwise on screen)
const arcAt = (p, r, b1, b2, col, w = 3.5) => {
  const a1 = Math.min(b1, b2), a2 = Math.max(b1, b2);
  const P = (a) => [p[0] + r * Math.cos(rad(a)), p[1] - r * Math.sin(rad(a))];
  const [x1, y1] = P(a1), [x2, y2] = P(a2);
  return `<path d="M${f1(x1)} ${f1(y1)} A${r} ${r} 0 ${Math.abs(a2 - a1) > 180 ? 1 : 0} 0 ${f1(x2)} ${f1(y2)}" fill="none" stroke="${col}" stroke-width="${w}"/>`;
};
const ang = (p, q) => (Math.atan2(-(q[1] - p[1]), q[0] - p[0]) * 180) / Math.PI;

// ---------- 2. Elevation and depression ----------
function elevation() {
  const o = [];
  const dy = -80, Y = (y) => y + dy;
  const k = 520 / 55; // px per metre
  const P = [130, Y(700)], foot = [650, Y(700)], top = [650, Y(700) - 40 * k];
  o.push(`<rect x="40" y="${Y(700)}" width="820" height="8" fill="#c9d6d4"/>`);
  o.push(`<rect x="650" y="${f1(top[1])}" width="55" height="${f1(40 * k)}" fill="${C.teal}" stroke="${C.ink}" stroke-width="3"/>`);
  o.push(line([130, top[1]], top, SLATE, 2.5, '10 7'), line(P, foot, SLATE, 2.5, '10 7'));
  o.push(line(P, top, RUST, 4));
  const e = (Math.atan(40 / 55) * 180) / Math.PI;
  o.push(arcAt(P, 120, 0, e, C.tealDark), arcAt(top, 130, 180 + e, 180, C.olive));
  o.push(`<line x1="130" y1="${Y(696)}" x2="130" y2="${Y(664)}" stroke="${C.ink}" stroke-width="5"/><circle cx="130" cy="${Y(648)}" r="14" fill="${C.ink}"/>`);
  o.push(t(276, Y(652), '36.0°', { size: 21, weight: 700, fill: C.tealDark }));
  o.push(t(444, Y(386), '36.0°', { size: 21, weight: 700, fill: C.olive }));
  o.push(t(140, Y(305), 'Angle of depression', { size: 22, weight: 700, fill: C.olive }));
  o.push(t(60, Y(757), 'Angle of elevation', { size: 22, weight: 700, fill: C.tealDark }));
  o.push(t(720, Y(520), '40 m', { size: 22, weight: 700 }));
  o.push(`<path d="M130 ${Y(788)} v24 M130 ${Y(800)} H650 M650 ${Y(788)} v24" fill="none" stroke="${C.ink}" stroke-width="3"/>`);
  o.push(t(390, Y(782), '55 m', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(t(455, Y(870), 'tan x = 40 ÷ 55 so x = 36.0°', { size: 25, weight: 700, anchor: 'middle' }));
  o.push(t(450, Y(915), 'Alternate angles: depression = elevation', { size: 21, fill: C.muted, anchor: 'middle' }));
  return svg(W, 870, 'Elevation and depression', o.join('\n'), 'Both angles are measured from the horizontal');
}

// ---------- 3. Sine rule ----------
function sineRule() {
  const o = [];
  const k = 358 / 9;
  const B = [270, 550], Cc = [628, 550];
  const A = [Cc[0] - 11.0 * k * Math.cos(rad(67)), Cc[1] - 11.0 * k * Math.sin(rad(67))];
  o.push(`<polygon points="${B.join(',')} ${Cc.join(',')} ${A.map(f1).join(',')}" fill="#ffffff"/>`);
  o.push(line(A, B, C.ink, 3), line(B, Cc, C.tealDark, 6), line(A, Cc, C.olive, 6));
  o.push(arcAt(A, 64, ang(A, Cc), ang(A, B), C.tealDark), arcAt(B, 70, 0, 65, C.olive), arcAt(Cc, 68, 113, 180, SLATE));
  o.push(L(A[0], A[1] - 22, 'A', { size: 22, weight: 700, anchor: 'middle' }), L(B[0] - 26, B[1] + 28, 'B', { size: 22, weight: 700, anchor: 'middle' }), L(Cc[0] + 26, Cc[1] + 28, 'C', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(t(A[0], A[1] + 116, '48°', { size: 20, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(340, 503, '65°', { size: 20, weight: 700, fill: C.olive }));
  o.push(t(560, 503, '67°', { size: 20, weight: 700, fill: SLATE, anchor: 'end' }));
  o.push(t(338, 342, 'c', { size: 20, weight: 700, anchor: 'middle' }));
  o.push(t(568, 339, 'b = ?', { size: 20, weight: 700, fill: C.olive }));
  o.push(t(449, 593, 'a = 9 cm', { size: 20, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(450, 659, 'a ÷ sin A = b ÷ sin B', { size: 28, weight: 700, anchor: 'middle' }));
  o.push(t(450, 715, '9 ÷ sin 48° = b ÷ sin 65°', { size: 23, anchor: 'middle' }));
  o.push(t(450, 773, 'b = 9 × sin 65° ÷ sin 48° = 11.0 cm', { size: 25, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(450, 826, 'Needs a side and its opposite angle', { size: 21, fill: C.muted, anchor: 'middle' }));
  return svg(W, 860, 'The sine rule', o.join('\n'), 'Each side over the sine of its opposite angle');
}

// ---------- 4. Ambiguous case ----------
function ambiguous() {
  const o = [];
  const dy = -40, Y = (y) => y + dy;
  const k = 54.8, A = [100, Y(558)];
  const Cc = [A[0] + 10 * k * Math.cos(rad(30)), A[1] - 10 * k * Math.sin(rad(30))];
  const d = Math.sqrt(36 - 25);
  const B1 = [A[0] + (10 * Math.cos(rad(30)) + d) * k, A[1]], B2 = [A[0] + (10 * Math.cos(rad(30)) - d) * k, A[1]];
  o.push(`<polygon points="${A.join(',')} ${B2.map(f1).join(',')} ${Cc.map(f1).join(',')}" fill="${C.cream}"/>`);
  o.push(`<polygon points="${B2.map(f1).join(',')} ${B1.map(f1).join(',')} ${Cc.map(f1).join(',')}" fill="#dfeceb"/>`);
  o.push(line(A, B1, C.ink, 4), line(A, Cc, C.ink, 4), line(B1, Cc, C.tealDark, 4.5), line(B2, Cc, C.olive, 4.5));
  o.push(arcAt(A, 70, 0, 30, C.ink), arcAt(B2, 44, ang(B2, Cc), 180, C.olive), arcAt(B1, 44, ang(B1, Cc), 180, C.tealDark));
  o.push(t(192, Y(540), '30°', { size: 20, weight: 700 }));
  o.push(L(Cc[0], Cc[1] - 22, 'C', { size: 22, weight: 700, anchor: 'middle' }), L(A[0] - 8, A[1] + 42, 'A', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(t(295, Y(408), '10', { size: 21, weight: 700, anchor: 'middle' }));
  o.push(L(452, Y(430), '6', { size: 21, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(700, Y(430), '6', { size: 21, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(B2[0], Y(612), 'B = 123.6°', { size: 22, weight: 700, fill: C.olive, anchor: 'middle' }), t(B2[0], Y(647), 'obtuse', { size: 20, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(B1[0], Y(612), 'B = 56.4°', { size: 22, weight: 700, fill: C.tealDark, anchor: 'middle' }), t(B1[0], Y(647), 'acute', { size: 20, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(450, Y(718), 'sin B = 10 × sin 30° ÷ 6 = 0.833', { size: 25, weight: 700, anchor: 'middle' }));
  o.push(t(450, Y(768), 'B = 56.4° or 180° − 56.4° = 123.6°', { size: 25, weight: 700, anchor: 'middle' }));
  o.push(t(450, Y(816), 'Two angles share the same sine', { size: 21, fill: C.muted, anchor: 'middle' }));
  return svg(W, 810, 'The ambiguous case', o.join('\n'), 'Same A, AC and BC: two different triangles');
}

// ---------- 5. Cosine rule ----------
function cosineRule() {
  const o = [];
  const dy = -30, Y = (y) => y + dy;
  const k = 30.2, A = [248, Y(430)], Cc = [A[0] + 10 * k, A[1]];
  const B = [A[0] + 7 * k * Math.cos(rad(110)), A[1] - 7 * k * Math.sin(rad(110))];
  o.push(`<polygon points="${A.join(',')} ${Cc.join(',')} ${B.map(f1).join(',')}" fill="#ffffff"/>`);
  o.push(line(B, Cc, C.tealDark, 6), line(A, B, C.olive, 5), line(A, Cc, C.olive, 5));
  o.push(arcAt(A, 58, 0, 110, C.ink, 4));
  o.push(L(B[0] - 20, B[1] - 12, 'B', { size: 22, weight: 700, anchor: 'middle' }), L(A[0] - 20, A[1] + 28, 'A', { size: 22, weight: 700, anchor: 'middle' }), L(Cc[0] + 28, Cc[1] + 14, 'C', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(t(306, Y(358), '110°', { size: 20, weight: 700, anchor: 'middle' }));
  o.push(t(180, Y(330), '7', { size: 20, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(436, Y(458), '10', { size: 20, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(428, Y(316), 'BC = ?', { size: 20, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  // bar to scale: 3.6 px per unit
  const s = 3.6, x0 = 95;
  o.push(`<rect x="${x0}" y="${Y(532)}" width="${149 * s}" height="64" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(`<rect x="${x0 + 149 * s}" y="${Y(532)}" width="${47.9 * s}" height="64" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(M(x0 + (149 * s) / 2, Y(572), '7^{2} + 10^{2} = 149', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(t(x0 + 149 * s + (47.9 * s) / 2, Y(572), '+47.9', { size: 22, weight: 700, anchor: 'middle' }));
  const xe = x0 + 196.9 * s;
  o.push(`<path d="M${x0} ${Y(604)} v24 M${x0} ${Y(616)} H${f1(xe)} M${f1(xe)} ${Y(604)} v24" fill="none" stroke="${C.ink}" stroke-width="3"/>`);
  o.push(M(450, Y(662), 'BC^{2} = 196.9', { size: 23, weight: 700, anchor: 'middle' }));
  o.push(t(450, Y(722), 'cos 110° is negative, so the term adds', { size: 21, fill: C.muted, anchor: 'middle' }));
  o.push(M(450, Y(773), 'BC^{2} = 7^{2} + 10^{2} − 2 × 7 × 10 × cos 110°', { size: 23, anchor: 'middle' }));
  o.push(t(450, Y(826), 'BC = √196.9 = 14.0 cm', { size: 28, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  return svg(W, 830, 'The cosine rule', o.join('\n'), 'Two sides and the angle between them');
}

// ---------- 6. Area = 1/2 ab sin C ----------
function areaSine() {
  const o = [];
  const dy = -40, Y = (y) => y + dy;
  const k = 50.2, Cc = [108, Y(478)], A = [Cc[0] + 10 * k, Cc[1]];
  const B = [Cc[0] + 8 * k * Math.cos(rad(40)), Cc[1] - 8 * k * Math.sin(rad(40))];
  o.push(`<polygon points="${Cc.join(',')} ${A.join(',')} ${B.map(f1).join(',')}" fill="#dfeceb"/>`);
  o.push(line(B, A, C.ink, 3), line(Cc, A, C.tealDark, 6), line(Cc, B, C.tealDark, 6));
  o.push(line(B, [B[0], Cc[1]], C.olive, 3.5, '9 6'));
  o.push(`<path d="M${f1(B[0] - 22)} ${Cc[1]} v-22 h22" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(arcAt(Cc, 72, 0, 40, C.ink, 4));
  o.push(L(B[0], B[1] - 24, 'B', { size: 22, weight: 700, anchor: 'middle' }), L(Cc[0] - 28, Cc[1] + 18, 'C', { size: 22, weight: 700, anchor: 'middle' }), L(A[0] + 28, A[1] + 22, 'A', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(t(202, Y(446), '40°', { size: 20, weight: 700 }));
  o.push(L(208, Y(348), 'a = 8', { size: 20, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(L(353, Y(530), 'b = 10', { size: 20, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(B[0] + 14, Y(358), 'h', { size: 23, weight: 700, fill: C.olive }));
  o.push(t(450, Y(609), 'h = 8 × sin 40° = 5.14 cm', { size: 25, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(450, Y(661), 'Area = ½ × 10 × 5.14', { size: 24, anchor: 'middle' }));
  o.push(M(450, Y(714), '½ ab sin C = ½ × 8 × 10 × sin 40° = 25.7 cm^{2}', { size: 25, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(450, Y(765), 'C is the angle between sides a and b', { size: 21, fill: C.muted, anchor: 'middle' }));
  return svg(W, 760, 'Area from two sides and an angle', o.join('\n'), 'Area = ½ ab sin C');
}

// ---------- 7. Trigonometry in 3D ----------
function trig3d() {
  const o = [];
  const k = 45, A = [70, 480], dep = [102 / 6, -87 / 6]; // receding direction per cm
  const P = (x, d, h) => [A[0] + x * k + d * dep[0], A[1] + d * dep[1] - h * k];
  const v = {
    A: P(0, 0, 0), B: P(8, 0, 0), Cc: P(8, 6, 0), D: P(0, 6, 0),
    E: P(0, 0, 5), F: P(8, 0, 5), G: P(8, 6, 5), H: P(0, 6, 5),
  };
  // hidden edges
  o.push(line(v.D, v.H, SLATE, 2.5, '8 6'), line(v.D, v.A, SLATE, 2.5, '8 6'), line(v.D, v.Cc, '#c8c8b8', 2.5, '8 6'));
  // triangle A C G
  o.push(`<polygon points="${[v.A, v.Cc, v.G].map((p) => p.map(f1).join(',')).join(' ')}" fill="${C.cream}" fill-opacity="0.85"/>`);
  // visible edges
  const vis = [[v.A, v.B], [v.B, v.F], [v.F, v.E], [v.E, v.A], [v.E, v.H], [v.H, v.G], [v.B, v.Cc]];
  for (const [p, q] of vis) o.push(line(p, q, C.ink, 3));
  o.push(line(v.F, v.G, '#c8c8b8', 3));
  o.push(line(v.A, v.Cc, C.olive, 4.5), line(v.Cc, v.G, C.olive, 4.5), line(v.A, v.G, C.olive, 4.5));
  o.push(arcAt(v.A, 62, ang(v.A, v.Cc), ang(v.A, v.G), RUST, 3.5));
  o.push(L(v.A[0] - 18, v.A[1] + 12, 'A', { size: 21, weight: 700, anchor: 'middle' }), L(v.Cc[0] + 24, v.Cc[1] + 4, 'C', { size: 21, weight: 700, anchor: 'middle' }), L(v.G[0] + 24, v.G[1] - 10, 'G', { size: 21, weight: 700, anchor: 'middle' }));
  o.push(t(250, 520, '8 cm', { size: 20, weight: 700, anchor: 'middle' }), t(498, 467, '6 cm', { size: 20, weight: 700 }), t(550, 290, '5 cm', { size: 20, weight: 700 }));
  o.push(M(655, 200, 'AC^{2} = 8^{2} + 6^{2}', { size: 21 }), t(655, 238, 'AC = 10 cm', { size: 22, weight: 700, fill: C.olive }));
  o.push(t(655, 302, 'tan x = 5 ÷ 10', { size: 21 }), t(655, 340, 'x = 26.6°', { size: 22, weight: 700, fill: RUST }));
  // flat triangle
  o.push(t(450, 594, 'The same triangle, flat', { size: 23, weight: 700, fill: C.muted, anchor: 'middle' }));
  const a = [120, 880], c = [620, 880], g = [620, 630];
  o.push(`<polygon points="${a.join(',')} ${c.join(',')} ${g.join(',')}" fill="${C.cream}" stroke="${C.olive}" stroke-width="4"/>`);
  o.push(`<path d="M596 880 v-24 h24" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(arcAt(a, 90, 0, (Math.atan(0.5) * 180) / Math.PI, RUST, 4));
  o.push(t(252, 858, 'x', { size: 22, weight: 700, fill: RUST, anchor: 'middle' }));
  o.push(t(290, 750, 'AG = 11.2', { size: 21, weight: 700, anchor: 'middle' }));
  o.push(t(648, 754, 'CG = 5', { size: 21, weight: 700 }));
  o.push(t(305, 908, 'AC = 10', { size: 21, weight: 700, anchor: 'middle' }));
  return svg(W, 940, '3D: angle between a line and a plane', o.join('\n'), 'Find the right-angled triangle inside the box');
}

export const figures = [
  { name: '02-elevation-depression', after: '## Official syllabus', svg: elevation(),
    alt: 'A person 55 m from a 40 m tower. The angle of elevation to the top is 36.0 degrees since tan x = 40/55. From the top, the angle of depression to the person is also 36.0 degrees, measured from a horizontal line, as they are alternate angles.',
    caption: 'Elevation and depression are both measured from the horizontal and are equal for the same line of sight.' },
  { name: '03-sine-rule', after: '### Finding a length', svg: sineRule(),
    alt: 'Triangle ABC with A = 48, B = 65, C = 67 degrees and a = 9 cm drawn to scale. a over sin A equals b over sin B gives b = 9 sin 65 over sin 48 = 11.0 cm. The rule needs a side and its opposite angle.',
    caption: 'Pair each side with the angle opposite it.' },
  { name: '04-ambiguous-case', after: '### When there are two possible angles', svg: ambiguous(),
    alt: 'Angle A = 30 degrees, AC = 10, BC = 6. BC can meet the base at two points, giving two triangles with B = 56.4 degrees (acute) or 123.6 degrees (obtuse), both with sin B = 0.833.',
    caption: 'Two different triangles can fit the same sine rule data.' },
  { name: '05-cosine-rule', after: '### Finding a length', svg: cosineRule(),
    alt: 'The lesson worked example drawn to scale: AB = 7, AC = 10, angle A = 110 degrees. A bar shows BC squared = 149 + 47.9 = 196.9, so BC = 14.0 cm. The extra 47.9 is added because cos 110 degrees is negative.',
    caption: 'With an obtuse angle the cosine term adds, so BC is longer than the right-angle case.' },
  { name: '06-area-sine', after: '## Area of a triangle: ½ab sin C', svg: areaSine(),
    alt: 'Triangle with a = 8, b = 10 and C = 40 degrees. Height h = 8 sin 40 = 5.14 cm, so area = half of 10 times 5.14 = 25.7 cm squared, which is half a b sin C.',
    caption: 'The area formula comes from base times height with h = a sin C.' },
  { name: '07-trig-3d', after: '### Angles between a line and a plane', svg: trig3d(),
    alt: 'A cuboid 8 by 6 by 5 cm. The base diagonal AC = 10 cm, and with CG = 5 and AG = 11.2 it forms a right-angled triangle. The angle between AG and the base has tan x = 5/10, so x = 26.6 degrees. The triangle is also shown flat.',
    caption: 'Pull the right-angled triangle out of the solid, then use ordinary trigonometry.' },
];
