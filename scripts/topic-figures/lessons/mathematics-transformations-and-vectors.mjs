// Board-neutral redraws of the transformation and vector-proof figures. Same shapes, coordinates and
// labels as the earlier set, with the tier badges ("Core", "Extended") removed.
import { C, svg, t, arrow } from '../style.mjs';

export const slug = 'mathematics-transformations-and-vectors';
const W = 900;
const OBJ = C.tealDark, OBJF = '#dde9e6', IMG = C.olive, IMGF = '#f3e6b4';
const halo = (x, y, s, o) => t(x, y, s, o).replace('<text ', '<text paint-order="stroke" stroke="#f4f6f6" stroke-width="5" stroke-linejoin="round" ');

// Square grid with unit u; returns mapping and drawing.
function grid(cx, top, x0, x1, y0, y1, u, { axes = true } = {}) {
  const left = cx - ((x1 - x0) * u) / 2;
  const X = (x) => left + (x - x0) * u, Y = (y) => top + (y1 - y) * u;
  const s = [`<rect x="${X(x0)}" y="${Y(y1)}" width="${(x1 - x0) * u}" height="${(y1 - y0) * u}" fill="#fff" stroke="${C.panelEdge}" stroke-width="1.5"/>`];
  for (let x = x0 + 1; x < x1; x++) s.push(`<line x1="${X(x)}" y1="${Y(y0)}" x2="${X(x)}" y2="${Y(y1)}" stroke="#d6e2e0" stroke-width="1.5"/>`);
  for (let y = y0 + 1; y < y1; y++) s.push(`<line x1="${X(x0)}" y1="${Y(y)}" x2="${X(x1)}" y2="${Y(y)}" stroke="#d6e2e0" stroke-width="1.5"/>`);
  const ax = Math.max(x0, 0), ay = Math.max(y0, 0);
  if (axes) {
    s.push(`<line x1="${X(x0)}" y1="${Y(ay)}" x2="${X(x1)}" y2="${Y(ay)}" stroke="${C.muted}" stroke-width="2.5"/>`);
    s.push(`<line x1="${X(ax)}" y1="${Y(y0)}" x2="${X(ax)}" y2="${Y(y1)}" stroke="${C.muted}" stroke-width="2.5"/>`);
  }
  for (let x = x0; x <= x1; x++) if (x !== 0) s.push(t(X(x), Y(y0) + 26, x < 0 ? '−' + -x : String(x), { size: 16, fill: C.muted, anchor: 'middle' }));
  for (let y = y0; y <= y1; y++) if (y !== 0) s.push(t(X(x0) - 10, Y(y) + 6, y < 0 ? '−' + -y : String(y), { size: 16, fill: C.muted, anchor: 'end' }));
  return { X, Y, bottom: Y(y0), draw: s.join('') };
}
const tri = (G, pts, stroke, fill) =>
  `<polygon points="${pts.map(([x, y]) => `${G.X(x)},${G.Y(y)}`).join(' ')}" fill="${fill}" stroke="${stroke}" stroke-width="3.5" stroke-linejoin="round"/>`;
const dot = (G, x, y, r = 6, fill = C.ink) => `<circle cx="${G.X(x)}" cy="${G.Y(y)}" r="${r}" fill="${fill}"/>`;
const dash = (G, a, b, col = C.rust) => `<line x1="${G.X(a[0])}" y1="${G.Y(a[1])}" x2="${G.X(b[0])}" y2="${G.Y(b[1])}" stroke="${col}" stroke-width="2.2" stroke-dasharray="8 6"/>`;
const lab = (G, x, y, s, dx, dy, col) => halo(G.X(x) + dx, G.Y(y) + dy, s, { size: 20, weight: 700, fill: col, anchor: 'middle' });
function legend(y, third) {
  const items = [['Object', OBJF, OBJ], ['Image', IMGF, IMG], [third, '#fff', C.rust]];
  return items.map(([s, f, e], i) => {
    const x = 90 + i * 270;
    return `<rect x="${x}" y="${y - 18}" width="26" height="22" rx="4" fill="${f}" stroke="${e}" stroke-width="2.5"/>` + t(x + 38, y, s, { size: 19 });
  }).join('');
}
// Draw object + image with vertex labels
function shapes(G, obj, img, names, offs) {
  const o = [tri(G, obj, OBJ, OBJF), tri(G, img, IMG, IMGF)];
  obj.forEach(([x, y], i) => o.push(dot(G, x, y), lab(G, x, y, names[i], offs[i][0], offs[i][1], OBJ)));
  img.forEach(([x, y], i) => o.push(dot(G, x, y), lab(G, x, y, names[i] + '′', offs[i + 3][0], offs[i + 3][1], IMG)));
  return o.join('');
}

// ---------- 01 Reflection ----------
function reflection() {
  const G = grid(W / 2 + 10, 130, 0, 9, 0, 6, 84);
  const obj = [[1, 2], [1, 4], [3, 2]], img = [[7, 2], [7, 4], [5, 2]];
  const o = [G.draw];
  obj.forEach((p, i) => o.push(dash(G, p, img[i], C.ink)));
  o.push(`<line x1="${G.X(4)}" y1="${G.Y(0)}" x2="${G.X(4)}" y2="${G.Y(6)}" stroke="${C.rust}" stroke-width="4" stroke-dasharray="12 7"/>`);
  o.push(halo(G.X(4) + 12, G.Y(5.6), 'mirror: x = 4', { size: 20, weight: 700, fill: C.rust }));
  o.push(shapes(G, obj, img, ['A', 'B', 'C'], [[-18, 26], [-14, -14], [20, 24], [20, 26], [14, -14], [-20, 26]]));
  const y = G.bottom + 74;
  o.push(legend(y, 'Mirror line'));
  o.push(t(W / 2, y + 48, 'Name it: reflection + the equation of the mirror line', { size: 20, weight: 700, anchor: 'middle' }));
  return svg(W, y + 84, 'Reflection', o.join('\n'), 'Each point is the same distance from the mirror');
}

// ---------- 02 Rotation ----------
function rotation() {
  const G = grid(W / 2, 130, -1, 5, -4, 5, 64);
  const obj = [[1, 1], [1, 4], [3, 1]], img = [[1, -1], [4, -1], [1, -3]];
  const o = [G.draw];
  o.push(dash(G, [0, 0], [1, 4]), dash(G, [0, 0], [4, -1]));
  // right-angle mark at O between OB (dir (1,4)) and OB' (dir (4,-1))
  const n = (v) => { const l = Math.hypot(v[0], v[1]); return [v[0] / l, v[1] / l]; };
  const u1 = n([1, 4]), u2 = n([4, -1]), k = 0.28;
  const p1 = [u1[0] * k, u1[1] * k], p2 = [u2[0] * k, u2[1] * k], p3 = [p1[0] + p2[0], p1[1] + p2[1]];
  o.push(`<polyline points="${G.X(p1[0])},${G.Y(p1[1])} ${G.X(p3[0])},${G.Y(p3[1])} ${G.X(p2[0])},${G.Y(p2[1])}" fill="none" stroke="${C.rust}" stroke-width="2.5"/>`);
  // arc from B to B' (radius sqrt 17), clockwise
  const r = Math.hypot(1, 4) * 64;
  o.push(`<path d="M${G.X(1)} ${G.Y(4)} A${r} ${r} 0 0 1 ${G.X(4)} ${G.Y(-1)}" fill="none" stroke="${C.rust}" stroke-width="3.5" marker-end="url(#ahR)"/>`);
  o.push(shapes(G, obj, img, ['A', 'B', 'C'], [[-14, 30], [-10, -14], [20, 22], [-22, -10], [34, 24], [-18, 28]]));
  o.push(`<circle cx="${G.X(0)}" cy="${G.Y(0)}" r="8" fill="${C.rust}"/>`);
  o.push(lab(G, 0, 0, 'O', -22, -14, C.rust), halo(G.X(0.5), G.Y(0.25), '90°', { size: 19, weight: 700, fill: C.rust }));
  const y = G.bottom + 74;
  o.push(legend(y, 'Turn'));
  o.push(t(W / 2, y + 48, 'Name it: rotation + centre + angle + direction', { size: 20, weight: 700, anchor: 'middle' }));
  return svg(W, y + 84, 'Rotation', o.join('\n'), '90° clockwise about the origin O');
}

// ---------- 03 Translation ----------
function translation() {
  const G = grid(W / 2 + 10, 130, 0, 9, -2, 5, 80);
  const obj = [[1, 2], [1, 4], [3, 2]], img = [[5, -1], [5, 1], [7, -1]];
  const o = [G.draw];
  obj.forEach((p, i) => o.push(`<line x1="${G.X(p[0])}" y1="${G.Y(p[1])}" x2="${G.X(img[i][0]) - 8}" y2="${G.Y(img[i][1]) - 6}" stroke="${C.rust}" stroke-width="3" marker-end="url(#ahR)"/>`));
  o.push(shapes(G, obj, img, ['A', 'B', 'C'], [[-18, 26], [-12, -14], [22, -12], [-22, 30], [-22, -14], [22, 28]]));
  const y = G.bottom + 74;
  o.push(legend(y, 'Slide'));
  const vy = y + 66;
  o.push(t(150, vy + 8, 'Translation vector:', { size: 21, weight: 700 }));
  o.push(`<path d="M392 ${vy - 30} q-14 30 0 60 M444 ${vy - 30} q14 30 0 60" fill="none" stroke="${C.rust}" stroke-width="3"/>`);
  o.push(t(418, vy - 4, '4', { size: 21, weight: 700, fill: C.rust, anchor: 'middle' }), t(418, vy + 24, '−3', { size: 21, weight: 700, fill: C.rust, anchor: 'middle' }));
  o.push(t(466, vy + 8, '= 4 right, 3 down', { size: 21, weight: 700, fill: C.rust }));
  return svg(W, vy + 56, 'Translation', o.join('\n'), 'Every point slides the same way');
}

// ---------- Enlargements ----------
function enlargement(title, sub, box, P, obj, k, offs, lines) {
  const G = grid(W / 2 + 10, 130, ...box);
  const img = obj.map(([x, y]) => [P[0] + k * (x - P[0]), P[1] + k * (y - P[1])]);
  const o = [G.draw];
  obj.forEach((p, i) => {
    if (k < 0) o.push(dash(G, p, img[i]));
    else o.push(dash(G, P, k >= 1 ? img[i] : p));
  });
  o.push(shapes(G, obj, img, ['A', 'B', 'C'], offs));
  o.push(`<circle cx="${G.X(P[0])}" cy="${G.Y(P[1])}" r="9" fill="${C.rust}"/>`, lab(G, P[0], P[1], 'P', 18, 26, C.rust));
  const y = G.bottom + 74;
  o.push(legend(y, 'Centre P'));
  o.push(t(W / 2, y + 48, lines[0], { size: 20, weight: 700, fill: C.rust, anchor: 'middle' }));
  o.push(t(W / 2, y + 82, lines[1], { size: 19, weight: 700, anchor: 'middle' }));
  return svg(W, y + 116, title, o.join('\n'), sub);
}

// ---------- 07 Vector proof ----------
function vectorProof() {
  const o = [];
  const O = [110, 620], s = 75;
  const P = (v) => [O[0] + v[0] * s, O[1] - v[1] * s];
  const A = P([8, 2]), B = P([2, 6]), M = P([4, 1]), N = P([1, 3]);
  o.push(`<polygon points="${O} ${A} ${B}" fill="${C.tealLight}" stroke="none"/>`);
  o.push(arrow(...O, A[0] - 6, A[1] + 2, { color: C.ink, w: 4 }));
  o.push(arrow(...O, B[0] - 2, B[1] + 6, { color: C.tealDark, w: 4, marker: 'ahT' }));
  o.push(arrow(...A, B[0] + 6, B[1] + 4, { color: C.rust, w: 4, marker: 'ahR' }));
  o.push(arrow(...M, N[0] + 6, N[1] + 4, { color: C.olive, w: 5, marker: 'ahO' }));
  for (const p of [O, A, B, M, N]) o.push(`<circle cx="${p[0]}" cy="${p[1]}" r="7" fill="${C.ink}" stroke="#fff" stroke-width="2"/>`);
  o.push(t(O[0] - 18, O[1] + 8, 'O', { size: 22, weight: 700, anchor: 'end' }));
  o.push(t(A[0] + 18, A[1] + 8, 'A', { size: 22, weight: 700 }));
  o.push(t(B[0], B[1] - 18, 'B', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(t(M[0], M[1] + 40, 'M', { size: 21, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(N[0] - 20, N[1] + 6, 'N', { size: 21, weight: 700, fill: C.olive, anchor: 'end' }));
  o.push(t(M[0], M[1] + 72, 'a', { size: 24, weight: 700, anchor: 'middle' }));
  o.push(t(O[0] + 0.5 * s - 14, O[1] - 1.6 * s, 'b', { size: 24, weight: 700, fill: C.tealDark, anchor: 'end' }));
  o.push(t((A[0] + B[0]) / 2 + 40, (A[1] + B[1]) / 2 - 18, 'b − a', { size: 22, weight: 700, fill: C.rust }));
  o.push(t((M[0] + N[0]) / 2 + 10, (M[1] + N[1]) / 2 - 30, '½(b − a)', { size: 21, weight: 700, fill: C.olive }));
  const y = 720;
  o.push(t(60, y, 'OM = ½a, ON = ½b', { size: 22, weight: 700 }));
  o.push(t(60, y + 46, 'MN = ON − OM = ½b − ½a = ½(b − a)', { size: 22, weight: 700, fill: C.olive }));
  o.push(t(60, y + 92, 'AB = b − a', { size: 22, weight: 700, fill: C.rust }));
  o.push(t(60, y + 146, 'So MN = ½AB: parallel, half the length.', { size: 22, weight: 700 }));
  return svg(W, y + 186, 'Vector proof', o.join('\n'), 'M and N are midpoints');
}

export const figures = [
  { name: '01-reflection-mirror-line', after: '## Official syllabus', svg: reflection(),
    alt: "Triangle ABC is reflected in the vertical line x = 4. Dashed lines join each corner to its image and cross the mirror at their midpoints. Image corners are A'(7,2), B'(7,4), C'(5,2).",
    caption: 'A reflection puts each image point the same distance behind the mirror line, and is described by its mirror line.' },
  { name: '02-rotation-about-origin', after: '## Official syllabus', svg: rotation(),
    alt: "Triangle ABC is rotated 90 degrees clockwise about the origin. B(1,4) moves to B'(4,-1); the lines OB and OB' are equal and meet at a right angle. A rotation needs centre, angle and direction.",
    caption: 'A rotation is described by its centre, angle and direction.' },
  { name: '04-enlargement-scale-factor-2', after: '## Official syllabus',
    svg: enlargement('Enlargement', 'Scale factor 2 from centre P', [0, 8, 0, 6, 90], [1, 1], [[2, 2], [2, 3], [4, 2]], 2,
      [[-20, 12], [-16, -12], [22, 24], [-4, -14], [-16, -16], [24, 14]], ['Image sides ×2, distances from P ×2', 'Name it: enlargement + centre + scale factor']),
    alt: 'Triangle ABC is enlarged by scale factor 2 from P(1,1). Dashed lines from P pass through each corner to its image, which is twice as far from P. Every side doubles.',
    caption: 'An enlargement multiplies every distance from the centre, and every side, by the scale factor.' },
  { name: '03-translation-column-vector', after: '## Official syllabus', svg: translation(),
    alt: "Triangle ABC is translated by (4, -3): 4 right and 3 down. Every corner moves by the same arrow to A'(5,-1), B'(5,1), C'(7,-1).",
    caption: 'A translation slides every point by the same column vector without turning or resizing the shape.' },
  { name: '05-enlargement-fractional', after: '## Official syllabus',
    svg: enlargement('Fractional scale factor', 'Scale factor ½ from centre P: smaller image', [0, 8, 0, 8, 70], [1, 1], [[3, 3], [3, 7], [7, 3]], 0.5,
      [[16, -12], [-12, -16], [20, 26], [-14, 28], [-14, -14], [24, 18]], ['Image sides ×½, distances from P ×½', 'Scale factor between 0 and 1 shrinks the shape']),
    alt: "Triangle ABC is enlarged by scale factor one half from P(1,1). Each image corner is half as far from P, giving a smaller image A'(2,2), B'(2,4), C'(4,2).",
    caption: 'A scale factor between 0 and 1 makes the image smaller.' },
  { name: '06-enlargement-negative', after: '## Methods in steps',
    svg: enlargement('Negative scale factor', 'Scale factor −2 from centre P', [-4, 7, -2, 6, 68], [3, 3], [[4, 4], [4, 5], [6, 4]], -2,
      [[-18, 26], [-16, -12], [22, 22], [22, -6], [22, 28], [-24, 0]], ['Image on the opposite side, upside down', 'Image is 2 × as big, 2 × as far from P']),
    alt: "Triangle ABC is enlarged by scale factor -2 from P(3,3). Each image corner is twice as far from P but on the opposite side, so the image is upside down: A'(1,1), B'(1,-1), C'(-3,1).",
    caption: 'A negative scale factor puts the image on the opposite side of the centre, inverted.' },
  { name: '07-vector-proof-midpoints', after: '### Vector proof', svg: vectorProof(),
    alt: 'In triangle OAB, M and N are midpoints of OA and OB. MN = ON - OM = half of (b - a), and AB = b - a, so MN is half of AB and parallel to it. Shown with a = (8,2), b = (2,6).',
    caption: 'Writing every vector in terms of a and b shows MN = half of AB, so the lines are parallel.' },
];
