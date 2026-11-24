// Board-neutral redraws of six vector figures shared by Cambridge, Edexcel, OCR and OxfordAQA maths
// pages. The old pictures carried an "Extended" tier badge; the vectors, grids and numbers are unchanged.
import { C, svg, t } from '../style.mjs';

export const slug = 'mathematics-vectors-and-magnitude';
const W = 900;
const RUST = '#c0643a', SLATE = '#4a5a78', NAVY = '#1e2a44', GRID = '#cfdcda', AX = '#4a5a78';
const mk = (id, col) => `<marker id="${id}" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="30" markerHeight="30" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="${col}"/></marker>`;
const markers = `<defs>${mk('vN', NAVY)}${mk('vT', C.tealDark)}${mk('vO', C.olive)}${mk('vR', RUST)}</defs>`;
const S = (w, h, title, body, sub) => svg(w, h, title, markers + body, sub);
const MK = { [NAVY]: 'vN', [C.tealDark]: 'vT', [C.olive]: 'vO', [RUST]: 'vR' };

// coordinate frame
function frame({ x0, y0, unit, xmin, xmax, ymin, ymax, xlab = [], ylab = [] }) {
  const X = (x) => x0 + (x - xmin) * unit, Y = (y) => y0 + (ymax - y) * unit;
  const o = [`<rect x="${X(xmin)}" y="${Y(ymax)}" width="${(xmax - xmin) * unit}" height="${(ymax - ymin) * unit}" fill="#ffffff"/>`];
  const step = unit < 30 ? 2 : 1;
  for (let x = Math.ceil(xmin / step) * step; x <= xmax; x += step) o.push(`<line x1="${X(x)}" y1="${Y(ymax)}" x2="${X(x)}" y2="${Y(ymin)}" stroke="${GRID}" stroke-width="1.5"/>`);
  for (let y = Math.ceil(ymin / step) * step; y <= ymax; y += step) o.push(`<line x1="${X(xmin)}" y1="${Y(y)}" x2="${X(xmax)}" y2="${Y(y)}" stroke="${GRID}" stroke-width="1.5"/>`);
  o.push(`<rect x="${X(xmin)}" y="${Y(ymax)}" width="${(xmax - xmin) * unit}" height="${(ymax - ymin) * unit}" fill="none" stroke="${GRID}" stroke-width="2"/>`);
  if (ymin <= 0 && ymax >= 0) o.push(`<line x1="${X(xmin)}" y1="${Y(0)}" x2="${X(xmax)}" y2="${Y(0)}" stroke="${AX}" stroke-width="2.5"/>`);
  if (xmin <= 0 && xmax >= 0) o.push(`<line x1="${X(0)}" y1="${Y(ymax)}" x2="${X(0)}" y2="${Y(ymin)}" stroke="${AX}" stroke-width="2.5"/>`);
  const neg = (v) => (v < 0 ? `−${-v}` : String(v));
  for (const v of xlab) o.push(t(X(v), Y(ymin) + 30, neg(v), { size: 19, fill: SLATE, anchor: 'middle' }));
  for (const v of ylab) o.push(t(X(xmin) - 12, Y(v) + 7, neg(v), { size: 19, fill: SLATE, anchor: 'end' }));
  return { X, Y, svg: o.join('') };
}
const vec = (F, a, b, col, w = 4.5) => {
  const [x1, y1, x2, y2] = [F.X(a[0]), F.Y(a[1]), F.X(b[0]), F.Y(b[1])];
  const L = Math.hypot(x2 - x1, y2 - y1), k = (L - 6) / L; // stop just short of the end dot
  return `<line x1="${x1}" y1="${y1}" x2="${(x1 + (x2 - x1) * k).toFixed(1)}" y2="${(y1 + (y2 - y1) * k).toFixed(1)}" stroke="${col}" stroke-width="${w}" marker-end="url(#${MK[col]})"/>`;
};
const dot = (F, p, col = NAVY) => `<circle cx="${F.X(p[0])}" cy="${F.Y(p[1])}" r="7.5" fill="${col}" stroke="#ffffff" stroke-width="2.5"/>`;
// column vector (a over b) with round brackets
const col = (x, y, a, b, color = NAVY, size = 25) => {
  const h = size * 2.5;
  return `<path d="M${x + 10} ${y - h / 2} q-16 ${h / 2} 0 ${h}" fill="none" stroke="${color}" stroke-width="3"/>` +
    `<path d="M${x + 58} ${y - h / 2} q16 ${h / 2} 0 ${h}" fill="none" stroke="${color}" stroke-width="3"/>` +
    t(x + 34, y - 6, a, { size, weight: 700, fill: color, anchor: 'middle' }) + t(x + 34, y + size + 2, b, { size, weight: 700, fill: color, anchor: 'middle' });
};

// ---------- 1. Vector between points ----------
function between() {
  const F = frame({ x0: 70, y0: 120, unit: 72, xmin: -5, xmax: 6, ymin: -3, ymax: 7, xlab: [-4, -2, 2, 4, 6], ylab: [-2, 2, 4, 6] });
  const o = [F.svg];
  const P = [-3, 5], Q = [4, -1];
  o.push(`<polyline points="${F.X(-3)},${F.Y(5)} ${F.X(4)},${F.Y(5)}" fill="none" stroke="${C.olive}" stroke-width="3" stroke-dasharray="10 6"/>`);
  o.push(`<polyline points="${F.X(4)},${F.Y(5)} ${F.X(4)},${F.Y(-1)}" fill="none" stroke="${C.tealDark}" stroke-width="3" stroke-dasharray="10 6"/>`);
  o.push(t(F.X(0.5) + 20, F.Y(5) - 14, '7 right', { size: 21, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(F.X(4) - 14, F.Y(2.5) + 7, '6 down', { size: 21, weight: 700, fill: C.tealDark, anchor: 'end' }));
  // QP drawn parallel, offset below-left
  const off = [-0.42, -0.5];
  o.push(vec(F, [Q[0] + off[0], Q[1] + off[1]], [P[0] + off[0], P[1] + off[1]], RUST, 3.5));
  o.push(vec(F, P, Q, NAVY, 4.5), dot(F, P), dot(F, Q));
  o.push(t(F.X(-3) - 14, F.Y(5) - 14, 'P', { size: 23, weight: 700, anchor: 'end' }), t(F.X(4) + 16, F.Y(-1) + 8, 'Q', { size: 23, weight: 700 }));
  const yb = 948;
  o.push(t(60, yb + 8, 'PQ =', { size: 26, weight: 700 }), col(146, yb - 8, '7', '−6', NAVY));
  o.push(t(330, yb + 8, 'QP =', { size: 26, weight: 700, fill: RUST }), col(414, yb - 8, '−7', '6', RUST));
  o.push(t(598, yb + 8, 'QP = −PQ', { size: 26, weight: 700, fill: SLATE }));
  return S(W, 1020, 'Finish minus start', o.join('\n'), 'P(−3, 5) moves to Q(4, −1)');
}

// ---------- 2. Adding vectors ----------
function adding() {
  const F = frame({ x0: 70, y0: 120, unit: 80, xmin: -2, xmax: 7, ymin: -3, ymax: 6, xlab: [-2, 2, 4, 6], ylab: [-2, 2, 4, 6] });
  const o = [F.svg];
  const O = [0, 0], A = [5, -2], B = [4, 5];
  o.push(vec(F, O, B, C.olive, 5), vec(F, A, B, C.tealDark, 4.5), vec(F, O, A, NAVY, 4.5));
  o.push(dot(F, O), dot(F, A), dot(F, B, C.olive));
  o.push(t(F.X(1.5), F.Y(2.6), 'p + q', { size: 25, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(F.X(4.85), F.Y(1.4), 'q', { size: 25, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(F.X(2.5), F.Y(-1.5), 'p', { size: 25, weight: 700, anchor: 'middle' }));
  const yb = 932;
  o.push(col(80, yb, '5', '−2', NAVY), t(206, yb + 18, '+', { size: 28, weight: 700, fill: SLATE, anchor: 'middle' }), col(254, yb, '−1', '7', C.tealDark));
  o.push(t(376, yb + 18, '=', { size: 28, weight: 700, fill: SLATE, anchor: 'middle' }), col(426, yb, '4', '5', C.olive));
  o.push(t(560, yb - 2, 'add the tops,', { size: 21, fill: C.muted }), t(560, yb + 28, 'add the bottoms', { size: 21, fill: C.muted }));
  return S(W, 1010, 'Adding: one move after the other', o.join('\n'), 'p + q means do p, then q');
}

// ---------- 3. Subtracting vectors ----------
function subtracting() {
  const F = frame({ x0: 80, y0: 120, unit: 66, xmin: -1, xmax: 8, ymin: -10, ymax: 1, xlab: [2, 4, 6, 8], ylab: [-2, -4, -6, -8, -10] });
  const o = [F.svg];
  const O = [0, 0], A = [5, -2], B = [6, -9];
  o.push(vec(F, O, B, C.olive, 5), vec(F, A, B, RUST, 4), vec(F, O, A, NAVY, 4.5));
  o.push(dot(F, O), dot(F, A), dot(F, B, C.olive));
  o.push(t(F.X(2.5), F.Y(-0.5), 'p', { size: 25, weight: 700, anchor: 'middle' }));
  o.push(t(F.X(6), F.Y(-5.6), '−q', { size: 25, weight: 700, fill: RUST, anchor: 'middle' }));
  o.push(t(F.X(1.9), F.Y(-6), 'p − q', { size: 25, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(704, 200, 'q', { size: 26, weight: 700, fill: C.tealDark }), col(738, 186, '−1', '7', C.tealDark, 23));
  o.push(t(704, 334, '−q', { size: 26, weight: 700, fill: RUST }), col(752, 320, '1', '−7', RUST, 23));
  o.push(t(704, 460, 'flip both', { size: 21, fill: C.muted }), t(704, 494, 'signs of q', { size: 21, fill: C.muted }));
  const yb = 932;
  o.push(col(80, yb, '5', '−2', NAVY), t(206, yb + 18, '−', { size: 28, weight: 700, fill: SLATE, anchor: 'middle' }), col(254, yb, '−1', '7', C.tealDark));
  o.push(t(376, yb + 18, '=', { size: 28, weight: 700, fill: SLATE, anchor: 'middle' }), col(446, yb, '6', '−9', C.olive));
  return S(W, 1010, 'Subtracting: add the opposite', o.join('\n'), 'p − q = p + (−q)');
}

// ---------- 4. Scalar multiples ----------
function scalar() {
  const F = frame({ x0: 60, y0: 120, unit: 24, xmin: -14, xmax: 20, ymin: -14, ymax: 10, xlab: [-12, -8, -4, 4, 8, 12, 16, 20], ylab: [-12, -8, -4, 4, 8] });
  const o = [F.svg];
  const O = [0, 0];
  o.push(vec(F, O, [-12, 8], C.tealDark, 3.5), vec(F, O, [18, -12], C.olive, 3.5), vec(F, O, [6, -4], NAVY, 5), vec(F, O, [3, -2], RUST, 6));
  o.push(dot(F, O));
  o.push(t(F.X(-9.5), F.Y(8.5), '−2r', { size: 25, weight: 700, fill: C.tealDark }));
  o.push(t(F.X(15.5), F.Y(-9.8), '3r', { size: 25, weight: 700, fill: C.olive }));
  o.push(t(F.X(6.6), F.Y(-5.6), 'r', { size: 25, weight: 700 }));
  o.push(t(F.X(0.8), F.Y(-3.8), '½r', { size: 23, weight: 700, fill: RUST }));
  const yb = 792;
  o.push(t(30, yb + 8, '3r =', { size: 21, weight: 700, fill: C.olive }), col(80, yb - 6, '18', '−12', C.olive, 22));
  o.push(t(244, yb + 8, 'r =', { size: 21, weight: 700 }), col(286, yb - 6, '6', '−4', NAVY, 22));
  o.push(t(430, yb + 8, '½r =', { size: 21, weight: 700, fill: RUST }), col(484, yb - 6, '3', '−2', RUST, 22));
  o.push(t(640, yb + 8, '−2r =', { size: 21, weight: 700, fill: C.tealDark }), col(706, yb - 6, '−12', '8', C.tealDark, 22));
  return S(W, 866, 'Scalar: stretch, shrink or flip', o.join('\n'), 'every multiple is parallel to r');
}

// ---------- 5. Magnitude by Pythagoras ----------
function magnitude() {
  const F = frame({ x0: 70, y0: 130, unit: 42, xmin: -10, xmax: 2, ymin: -2, ymax: 17, xlab: [-8, -4], ylab: [4, 8, 12, 16] });
  const o = [F.svg];
  const O = [0, 0], V = [-8, 15];
  o.push(`<line x1="${F.X(-8)}" y1="${F.Y(0)}" x2="${F.X(0)}" y2="${F.Y(0)}" stroke="${C.olive}" stroke-width="4" stroke-dasharray="12 6"/>`);
  o.push(`<line x1="${F.X(-8)}" y1="${F.Y(0)}" x2="${F.X(-8)}" y2="${F.Y(15)}" stroke="${C.tealDark}" stroke-width="4" stroke-dasharray="12 6"/>`);
  o.push(`<path d="M${F.X(-8)} ${F.Y(0) - 20} h20 v20" fill="none" stroke="${SLATE}" stroke-width="2.5"/>`);
  o.push(vec(F, O, V, NAVY, 5), dot(F, O), dot(F, V));
  o.push(t(F.X(-4), F.Y(0) - 14, '8', { size: 25, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(F.X(-8) + 18, F.Y(7.5) + 8, '15', { size: 25, weight: 700, fill: C.tealDark }));
  o.push(t(F.X(-3.2), F.Y(7.5) + 8, '17', { size: 27, weight: 700, anchor: 'middle' }));
  const tx = 614;
  o.push(t(tx, 222, '|v| = √((−8)² + 15²)', { size: 21, weight: 700 }));
  o.push(t(tx + 20, 280, '= √(64 + 225)', { size: 21 }), t(tx + 20, 338, '= √289', { size: 21 }), t(tx + 20, 398, '= 17', { size: 25, weight: 700 }));
  o.push(t(tx, 500, 'Squares are never', { size: 20, fill: C.muted }), t(tx, 533, 'negative, so the', { size: 20, fill: C.muted }), t(tx, 566, 'length is too.', { size: 20, fill: C.muted }));
  o.push(col(tx, 650, '−8', '15', NAVY, 25));
  return S(W, 1000, 'Magnitude is the length', o.join('\n'), '|v| = √(x² + y²)');
}

// ---------- 6. Magnitude of a sum ----------
function magSum() {
  const F = frame({ x0: 70, y0: 130, unit: 100, xmin: -1, xmax: 4, ymin: -2, ymax: 4, xlab: [-1, 1, 2, 3, 4], ylab: [-2, -1, 1, 2, 3, 4] });
  const o = [F.svg];
  const O = [0, 0], A = [3, -1], B = [1, 3];
  o.push(vec(F, O, B, C.olive, 5), vec(F, A, B, C.tealDark, 4.5), vec(F, O, A, NAVY, 4.5));
  o.push(dot(F, O), dot(F, A), dot(F, B, C.olive));
  o.push(t(F.X(-0.5), F.Y(1.5), 'a + b', { size: 25, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(F.X(2.3), F.Y(1.25), 'b', { size: 25, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(F.X(1.5), F.Y(-1), 'a', { size: 25, weight: 700, anchor: 'middle' }));
  const tx = 610;
  o.push(t(tx, 218, 'Detour a then b:', { size: 22, weight: 700, fill: C.tealDark }), t(tx, 262, '3.16 + 4.47', { size: 22 }), t(tx, 304, '= 7.63', { size: 23, weight: 700, fill: C.tealDark }));
  o.push(t(tx, 398, 'Shortcut a + b:', { size: 22, weight: 700, fill: C.olive }), t(tx, 442, '|(1, 3)| = √10', { size: 22 }), t(tx, 484, '= 3.16', { size: 23, weight: 700, fill: C.olive }));
  o.push(t(tx, 580, '7.63 ≠ 3.16', { size: 29, weight: 700, fill: RUST }));
  return S(W, 800, 'Add the vectors first', o.join('\n'), '|a + b| is not |a| + |b|');
}

export const figures = [
  { name: '01-vector-between-points', after: '### Magnitude and direction', svg: between(),
    alt: 'Grid with P(-3,5) and Q(4,-1). Going from P to Q is 7 right and 6 down, so PQ is the column vector (7, -6). QP goes the other way, (-7, 6), so QP = -PQ.',
    caption: 'Finish minus start gives the column vector; the reverse vector has both signs changed.' },
  { name: '02-adding-vectors', after: '### Scalar multiples, addition and subtraction', svg: adding(),
    alt: 'p = (5,-2) is drawn from the origin, then q = (-1,7) from where p ends. The single arrow from the origin to (4,5) is p + q, found by adding tops and adding bottoms.',
    caption: 'p + q means do p, then q; add the tops and add the bottoms.' },
  { name: '03-subtracting-vectors', after: '### Scalar multiples, addition and subtraction', svg: subtracting(),
    alt: 'p = (5,-2), then -q = (1,-7) from the end of p. The arrow from the origin to (6,-9) is p - q, the same as subtracting entry by entry.',
    caption: 'p − q is p plus the opposite of q.' },
  { name: '04-scalar-multiples', after: '### Scalar multiples, addition and subtraction', svg: scalar(),
    alt: 'r = (6,-4) with 3r = (18,-12) three times as long, half r = (3,-2) half as long, and -2r = (-12,8) twice as long and reversed. All lie along the same line.',
    caption: 'Multiplying by k scales both entries and keeps the arrow parallel to r.' },
  { name: '05-magnitude-pythagoras', after: '### Modulus', svg: magnitude(),
    alt: 'The vector (-8,15) is the hypotenuse of a right-angled triangle with sides 8 and 15. Pythagoras gives square root of (64 + 225) = 17.',
    caption: 'The magnitude is the hypotenuse of the right-angled triangle with sides x and y.' },
  { name: '06-magnitude-of-sum', after: '### Modulus', svg: magSum(),
    alt: 'a = (3,-1) then b = (-2,4) gives a + b = (1,3). |a| + |b| = 7.63 but |a + b| = 3.16, so magnitudes cannot be added separately.',
    caption: 'Add the vectors first, then find the magnitude; |a + b| is not |a| + |b|.' },
];
