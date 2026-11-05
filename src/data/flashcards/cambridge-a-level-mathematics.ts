/**
 * D-438 -- flashcards for Cambridge International AS & A Level Mathematics 9709 (2026-2027).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 9709); origin 'revision-notes'.
 *
 * 9709 is not tiered, so no card is marked upper tier. Mechanics uses g = 10 m s⁻²,
 * as the syllabus and Marlbridge's 9709 notes do.
 *
 * Plain text only (see types.ts). Unicode for formulae.
 */
import type { Flashcard, FlashcardDeck } from './types.ts';

interface Spec { n: number; f: string; b: string; u?: true; src?: string }

const sub = (topic: string, subtopic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b, u, src }) => ({
    id: `${number}-${n}`,
    topic,
    subtopic,
    front: f,
    back: b,
    ...(u ? { tier: 'upper' as const } : {}),
    origin: src ? 'revision-notes' as const : 'authored' as const,
    ...(src ? { source: src } : {}),
  }));

const P1 = 'pure-mathematics-1-cambridge-alevel';
const P2 = 'pure-mathematics-2-cambridge-alevel';
const P3 = 'pure-mathematics-3-cambridge-alevel';
const MECH = 'mechanics-cambridge-alevel-maths';
const S1 = 'probability-and-statistics-1-cambridge-alevel';
const S2 = 'probability-and-statistics-2-cambridge-alevel';

const P3N = 'a-level-maths-9709-pure-mathematics-3-revision-notes';
const MECHN = 'a-level-maths-9709-mechanics-revision-notes';

export const DECK_CAMBRIDGE_A_LEVEL_MATHEMATICS: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'a-level',
  subjectSlug: 'mathematics',
  syllabusCode: '9709',
  syllabusSeries: '2026-2027',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'sajawal-zahid', reviewedOn: '2026-11-05' },
  cards: [
    // 1 Pure Mathematics 1
    ...sub(P1, 'quadratics-cambridge-alevel-maths', '1.1', [
      { n: 1, f: 'ax² + bx + c = a(x + p)² + q: what are the vertex and the line of symmetry?', b: 'Vertex (−p, q); line of symmetry x = −p.\nIf a > 0, q is the minimum value; if a < 0, q is the maximum value.' },
      { n: 2, f: 'Write 2x² − 12x + 5 in completed-square form and state its minimum point.', b: '2(x² − 6x) + 5 = 2[(x − 3)² − 9] + 5 = 2(x − 3)² − 13.\nMinimum point (3, −13). The classic slip is not multiplying the −9 by 2.' },
      { n: 3, f: 'The quadratic formula for ax² + bx + c = 0', b: 'x = (−b ± √(b² − 4ac)) / (2a)\nIt always works, even when the quadratic does not factorise.' },
      { n: 4, f: 'What does the discriminant b² − 4ac tell you about the roots?', b: '> 0: two distinct real roots.\n= 0: one repeated root (the curve touches the x-axis).\n< 0: no real roots.' },
      { n: 5, f: 'A line y = mx + k and a curve: how do you find k for which the line is a tangent?', b: '1. Substitute the line into the curve to get one quadratic.\n2. Set its discriminant b² − 4ac = 0 and solve for k.\n(Two points of intersection: > 0. No intersection: < 0.)' },
      { n: 6, f: 'Which two conditions make ax² + bx + c positive for all x?', b: 'a > 0 and b² − 4ac < 0. Both are needed; giving only the discriminant loses a mark.' },
      { n: 7, f: 'Solve (x − 2)(x − 5) < 0 and (x − 2)(x − 5) > 0.', b: '< 0: 2 < x < 5 (below the axis, between the roots).\n> 0: x < 2 or x > 5 (above the axis, outside the roots).\nAlways sketch the parabola first.' },
      { n: 8, f: 'Solve x − 7√x + 12 = 0.', b: 'Let u = √x: u² − 7u + 12 = 0, so u = 3 or u = 4 (both positive, so both valid).\nx = 9 or x = 16.\nAlways substitute back, and reject u < 0 when u = √x.' },
    ]),
    ...sub(P1, 'functions-cambridge-alevel-maths', '1.2', [
      { n: 1, f: 'One-one function, and when does f⁻¹ exist?', b: 'A one-one function gives different outputs for different inputs. f⁻¹ exists only when f is one-one on its domain (test: a horizontal line meets the graph at most once).' },
      { n: 2, f: 'When can the composite gf be formed, and what does gf(x) mean?', b: 'Only when the range of f lies within the domain of g.\ngf(x) = g(f(x)): apply f first, then g.' },
      { n: 3, f: 'How are the domain and range of f⁻¹ related to f?', b: 'Domain of f⁻¹ = range of f.\nRange of f⁻¹ = domain of f.' },
      { n: 4, f: 'How do you find f⁻¹(x)?', b: '1. Check f is one-one.\n2. Write y = f(x) and make x the subject (choose the square-root sign that matches the domain of f).\n3. Swap letters to give f⁻¹(x).\n4. State its domain: the range of f.' },
      { n: 5, f: 'How is the graph of y = f⁻¹(x) related to y = f(x)?', b: 'It is the reflection of y = f(x) in the line y = x. A point (a, b) on f becomes (b, a) on f⁻¹. Draw and label y = x on the sketch.' },
      { n: 6, f: 'Describe the transformations y = f(x) + a, y = f(x + a), y = af(x) and y = f(ax).', b: 'f(x) + a: translation by the vector (0, a).\nf(x + a): translation by the vector (−a, 0).\naf(x): stretch parallel to the y-axis, scale factor a.\nf(ax): stretch parallel to the x-axis, scale factor 1/a.' },
      { n: 7, f: '(2, 5) lies on y = f(x). Where does it move to on y = 3f(2x) − 1?', b: 'Halve the x-coordinate; multiply the y-coordinate by 3, then subtract 1.\nThe image is (1, 14).' },
      { n: 8, f: 'f(x) = 2x² − 12x + 7 for x ≥ 4. Find the range of f.', b: 'f(x) = 2(x − 3)² − 11. The vertex x = 3 is outside the domain and f is increasing for x ≥ 4, so the least value is f(4) = −9.\nRange: f(x) ≥ −9.' },
    ]),
    ...sub(P1, 'coordinate-geometry-cambridge-alevel-maths', '1.3', [
      { n: 1, f: 'Gradient, midpoint and length of the line joining (x₁, y₁) and (x₂, y₂)', b: 'Gradient m = (y₂ − y₁)/(x₂ − x₁).\nMidpoint ((x₁ + x₂)/2, (y₁ + y₂)/2).\nLength √((x₂ − x₁)² + (y₂ − y₁)²).' },
      { n: 2, f: 'Gradients of parallel and perpendicular lines', b: 'Parallel: m₁ = m₂.\nPerpendicular: m₁m₂ = −1, so m₂ = −1/m₁ (the negative reciprocal, not just −m₁).' },
      { n: 3, f: 'Equation of a circle with centre (a, b) and radius r, and the centre and radius of x² + y² + 2gx + 2fy + c = 0', b: '(x − a)² + (y − b)² = r².\nExpanded form: centre (−g, −f), radius √(g² + f² − c). If g² + f² − c ≤ 0 it is not a real circle.' },
      { n: 4, f: 'Find the centre and radius of x² + y² − 10x + 4y + 13 = 0.', b: '(x − 5)² − 25 + (y + 2)² − 4 + 13 = 0, so (x − 5)² + (y + 2)² = 16.\nCentre (5, −2), radius 4.' },
      { n: 5, f: 'How do you find the tangent to a circle at a point P on it?', b: '1. Find the centre C.\n2. Find the gradient of the radius CP.\n3. Tangent gradient = −1/(gradient of CP), because a tangent is perpendicular to the radius.\n4. Use y − y₁ = m(x − x₁) through P.' },
      { n: 6, f: 'How do you find the perpendicular bisector of AB?', b: '1. Find the midpoint M of AB.\n2. Find the gradient of AB, then the perpendicular gradient −1/m.\n3. Write the line through M with that gradient.' },
      { n: 7, f: 'A line and a curve give a quadratic after substitution. What do "two distinct points", "meets" and "touches" each need?', b: 'Two distinct points: b² − 4ac > 0.\nMeets (at least once): b² − 4ac ≥ 0.\nTouches (tangent): b² − 4ac = 0.' },
    ]),
    ...sub(P1, 'circular-measure-cambridge-alevel-maths', '1.4', [
      { n: 1, f: 'Radian', b: 'The angle at the centre of a circle subtended by an arc equal in length to the radius.\nπ radians = 180°, so 1 radian ≈ 57.3°.' },
      { n: 2, f: 'How do you convert between degrees and radians?', b: 'Degrees to radians: × π/180 (for example 72° = 2π/5).\nRadians to degrees: × 180/π (for example 1.5 rad ≈ 85.9°).' },
      { n: 3, f: 'Arc length and sector area for radius r and angle θ', b: 'Arc length s = rθ.\nSector area A = ½r²θ.\nθ must be in radians.' },
      { n: 4, f: 'Area of a segment cut off by a chord that subtends θ at the centre', b: 'Segment = sector − triangle = ½r²θ − ½r² sin θ = ½r²(θ − sin θ), with θ in radians (and the calculator in radian mode).' },
      { n: 5, f: 'Length of a chord that subtends θ at the centre of a circle of radius r', b: '2r sin(θ/2), or from the cosine rule: AB² = r² + r² − 2r² cos θ.' },
      { n: 6, f: 'A sector has radius 12 cm and angle 0.75 rad. Find its arc length, area and perimeter.', b: 'Arc = 12 × 0.75 = 9 cm.\nArea = ½ × 144 × 0.75 = 54 cm².\nPerimeter = 2 × 12 + 9 = 33 cm (include both radii).' },
    ]),
    ...sub(P1, 'trigonometry-cambridge-alevel-maths-1', '1.5', [
      { n: 1, f: 'Exact values of sin, cos and tan for π/6, π/4 and π/3', b: 'sin: 1/2, √2/2, √3/2.\ncos: √3/2, √2/2, 1/2.\ntan: 1/√3 (= √3/3), 1, √3.' },
      { n: 2, f: 'Principal value ranges of sin⁻¹x, cos⁻¹x and tan⁻¹x', b: 'sin⁻¹x: −π/2 ≤ y ≤ π/2.\ncos⁻¹x: 0 ≤ y ≤ π.\ntan⁻¹x: −π/2 < y < π/2.' },
      { n: 3, f: 'After the calculator value x₁, how do you find the second solution of sin x = k, cos x = k and tan x = k?', b: 'sin x = k: 180° − x₁ (π − x₁).\ncos x = k: 360° − x₁ (2π − x₁).\ntan x = k: x₁ + 180° (x₁ + π).\nThen add or subtract 360° (2π) to find every value in the interval.' },
      { n: 4, f: 'The two identities in Pure Mathematics 1 trigonometry', b: 'tan θ ≡ sin θ / cos θ\nsin²θ + cos²θ ≡ 1' },
      { n: 5, f: 'Greatest value, least value and period of y = a sin bx + c (a, b > 0)', b: 'Greatest c + a; least c − a; period 360°/b (2π/b).\nFor tan bx the period is 180°/b.' },
      { n: 6, f: 'Why must you not cancel sin x in 7 sin x cos x = 2 sin x?', b: 'Cancelling loses the solutions of sin x = 0. Factorise instead: sin x(7 cos x − 2) = 0. For 0° ≤ x ≤ 360° this gives x = 0°, 180°, 360°, 73.4° and 286.6°: five solutions.' },
    ]),
    ...sub(P1, 'series-cambridge-alevel-maths', '1.6', [
      { n: 1, f: 'Binomial coefficient ⁿCᵣ, and the general term of (a + b)ⁿ', b: 'ⁿCᵣ = n!/(r!(n − r)!).\nThe general term ⁿCᵣ aⁿ⁻ʳ bʳ is the (r + 1)th term, so the third term uses ⁿC₂.' },
      { n: 2, f: 'Find the coefficient of x³ in (1 + 2x)⁶.', b: '⁶C₃ × 2³ = 20 × 8 = 160. Raise the whole of 2x to the power, not just x.' },
      { n: 3, f: 'nth term and sum of an arithmetic progression (first term a, common difference d)', b: 'uₙ = a + (n − 1)d\nSₙ = ½n(a + l) = ½n{2a + (n − 1)d}, where l is the last term.' },
      { n: 4, f: 'nth term, sum and sum to infinity of a geometric progression (first term a, ratio r)', b: 'uₙ = arⁿ⁻¹\nSₙ = a(1 − rⁿ)/(1 − r), r ≠ 1\nS∞ = a/(1 − r), only when |r| < 1.' },
      { n: 5, f: 'Three-term tests: when are a, b, c in AP, and when in GP?', b: 'AP: 2b = a + c.\nGP: b² = ac.' },
      { n: 6, f: 'Show that the GP 12, 8, 16/3, … converges and find its sum to infinity.', b: 'r = 8/12 = 2/3 and |2/3| < 1, so it converges.\nS∞ = 12/(1 − 2/3) = 36.' },
    ]),
    ...sub(P1, 'differentiation-cambridge-alevel-maths-1', '1.7', [
      { n: 1, f: 'd/dx (xⁿ), and what must you do first with terms like 6/x⁴ or ∛x?', b: 'd/dx (xⁿ) = nxⁿ⁻¹ for rational n.\nRewrite every term as a single power first: 6/x⁴ = 6x⁻⁴, ∛x = x^(1/3).' },
      { n: 2, f: 'Chain rule, with an example', b: 'dy/dx = (dy/du) × (du/dx).\nd/dx (x² + 1)⁴ = 4(x² + 1)³ × 2x = 8x(x² + 1)³.' },
      { n: 3, f: 'Gradient of the tangent and of the normal at x = a', b: 'Tangent: m = dy/dx at x = a.\nNormal: −1/m.\nThen use y − y₁ = m(x − x₁).' },
      { n: 4, f: 'How do you find and classify stationary points?', b: '1. Solve dy/dx = 0 and find each y.\n2. Find d²y/dx² at each point: negative → maximum, positive → minimum.\n3. If d²y/dx² = 0, test the sign of dy/dx either side.' },
      { n: 5, f: 'Connected rates of change: the rule, and the side of a square, x cm, grows at 0.2 cm s⁻¹. Rate of change of area at x = 6?', b: 'dA/dt = (dA/dx) × (dx/dt).\nA = x², dA/dx = 2x = 12, so dA/dt = 12 × 0.2 = 2.4 cm² s⁻¹.\nDifferentiate before substituting the value.' },
      { n: 6, f: 'Increasing and decreasing functions', b: 'f is increasing where f′(x) > 0 and decreasing where f′(x) < 0. To show f is increasing, prove f′(x) > 0 for all x in the domain (often by completing the square) and say so.' },
    ]),
    ...sub(P1, 'integration-cambridge-alevel-maths-1', '1.8', [
      { n: 1, f: '∫ xⁿ dx and ∫ (ax + b)ⁿ dx', b: '∫ xⁿ dx = xⁿ⁺¹/(n + 1) + c, n ≠ −1.\n∫ (ax + b)ⁿ dx = (ax + b)ⁿ⁺¹/(a(n + 1)) + c, n ≠ −1: divide by a as well as by the new power.' },
      { n: 2, f: 'How do you find a curve from its gradient function and a point on it?', b: '1. Integrate dy/dx, including + c.\n2. Substitute the given point to find c.\n3. Write y = … in full.' },
      { n: 3, f: 'Area between two graphs', b: '∫ (upper − lower) dx between the x-coordinates of the intersection points. Sketch first to see which graph is on top.' },
      { n: 4, f: 'Volume of revolution about the x-axis and about the y-axis', b: 'About the x-axis: V = π ∫ y² dx (x-limits).\nAbout the y-axis: V = π ∫ x² dy (y-limits).\nWith a hole: π ∫ (outer² − inner²), never π ∫ (outer − inner)².' },
      { n: 5, f: 'Evaluate ∫₁^∞ 2/x² dx.', b: '[−2/x]₁^∞. As x → ∞, −2/x → 0.\nValue = 0 − (−2) = 2.\nState the limit in words; do not substitute ∞ as a number.' },
      { n: 6, f: 'Why is ∫ y dx not always the area between a curve and the x-axis?', b: 'Parts of the curve below the x-axis give negative values. Split the integral at each root, find each part, and add their sizes. An area is never negative.' },
    ]),

    // 2 Pure Mathematics 2
    ...sub(P2, 'algebra-cambridge-alevel-maths-2', '2.1', [
      { n: 1, f: 'Rewrite |x − a| < b and |x − a| > b without the modulus (b > 0).', b: '|x − a| < b ⇔ a − b < x < a + b.\n|x − a| > b ⇔ x < a − b or x > a + b.' },
      { n: 2, f: 'How do you solve |a| = |b| when both sides are moduli?', b: 'Square both sides: |a| = |b| ⇔ a² = b². When one side is not a modulus, solve the two cases separately and check each answer instead.' },
      { n: 3, f: 'Remainder theorem', b: 'The remainder when p(x) is divided by (x − a) is p(a). When divided by (ax + b) it is p(−b/a).' },
      { n: 4, f: 'Factor theorem', b: '(ax + b) is a factor of p(x) ⇔ p(−b/a) = 0. For (3x + 1), substitute x = −1/3.' },
      { n: 5, f: 'What form does the remainder take when you divide by a linear polynomial, and by a quadratic?', b: 'Linear divisor: a constant.\nQuadratic divisor: Ax + B (A or B may be zero).\nIdentity: p(x) ≡ divisor × quotient + remainder.' },
      { n: 6, f: 'Find the remainder when 9x³ − 3x + 5 is divided by (3x + 1).', b: 'p(−1/3) = 9(−1/27) − 3(−1/3) + 5 = −1/3 + 1 + 5 = 17/3.' },
    ]),
    ...sub(P2, 'logarithmic-and-exponential-functions-cambridge-2', '2.2', [
      { n: 1, f: 'Definition of a logarithm', b: 'logₐ b = x ⇔ aˣ = b, with a > 0, a ≠ 1 and b > 0. lg x = log₁₀ x; ln x = logₑ x.' },
      { n: 2, f: 'The three laws of logarithms', b: 'log(xy) = log x + log y\nlog(x/y) = log x − log y\nlog(xⁿ) = n log x\nlog(x + y) cannot be split.' },
      { n: 3, f: 'eˣ and ln x as inverses: the key facts and how their graphs are related', b: 'e^(ln x) = x for x > 0; ln(eˣ) = x for all x.\ny = eˣ passes through (0, 1), asymptote y = 0; y = ln x passes through (1, 0), asymptote x = 0. They are reflections in y = x.' },
      { n: 4, f: 'Solve 6ˣ = 11.', b: 'Take logs: x ln 6 = ln 11, so x = ln 11/ln 6 = 1.34 (3 s.f.).' },
      { n: 5, f: 'Which graph is a straight line for y = kxⁿ, and which for y = k(aˣ)?', b: 'y = kxⁿ: ln y = ln k + n ln x, so plot ln y against ln x (gradient n).\ny = k(aˣ): ln y = ln k + x ln a, so plot ln y against x (gradient ln a).\nIn both, the intercept is ln k, so k = e^(intercept).' },
      { n: 6, f: 'Solving an inequality such as 0.6ⁿ < 0.01 with logs: what is the trap?', b: 'n ln 0.6 < ln 0.01. ln 0.6 is negative, so dividing by it reverses the inequality: n > ln 0.01/ln 0.6 = 9.02, so the least integer is n = 10.' },
    ]),
    ...sub(P2, 'trigonometry-cambridge-alevel-maths-2', '2.3', [
      { n: 1, f: 'Define sec θ, cosec θ and cot θ.', b: 'sec θ = 1/cos θ\ncosec θ = 1/sin θ\ncot θ = 1/tan θ = cos θ/sin θ\nEach has the same sign as its parent function.' },
      { n: 2, f: 'The two Pythagorean identities involving sec, cosec, tan and cot', b: '1 + tan²θ ≡ sec²θ\n1 + cot²θ ≡ cosec²θ' },
      { n: 3, f: 'Compound angle formulae for sin(A ± B) and cos(A ± B)', b: 'sin(A ± B) ≡ sin A cos B ± cos A sin B\ncos(A ± B) ≡ cos A cos B ∓ sin A sin B (the sign changes).' },
      { n: 4, f: 'sin 2A and the three forms of cos 2A', b: 'sin 2A ≡ 2 sin A cos A\ncos 2A ≡ cos²A − sin²A ≡ 2cos²A − 1 ≡ 1 − 2sin²A' },
      { n: 5, f: 'How do you write a sin θ + b cos θ as R sin(θ + α)?', b: '1. Expand: R sin θ cos α + R cos θ sin α.\n2. Match: R cos α = a, R sin α = b.\n3. R = √(a² + b²), tan α = b/a.\nGreatest value R, least value −R.' },
      { n: 6, f: 'Express 5 sin θ + 2 cos θ in the form R sin(θ + α), 0° < α < 90°.', b: 'R = √(25 + 4) = √29; tan α = 2/5, α = 21.80°.\n5 sin θ + 2 cos θ = √29 sin(θ + 21.80°).' },
    ]),
    ...sub(P2, 'differentiation-cambridge-alevel-maths-2', '2.4', [
      { n: 1, f: 'Derivatives of eˣ, ln x, sin x, cos x and tan x', b: 'eˣ → eˣ\nln x → 1/x\nsin x → cos x\ncos x → −sin x\ntan x → sec²x\n(x in radians)' },
      { n: 2, f: 'Product rule, with an example', b: 'd/dx (uv) = u dv/dx + v du/dx.\nd/dx (x e⁻ˣ) = −x e⁻ˣ + e⁻ˣ = e⁻ˣ(1 − x).' },
      { n: 3, f: 'Quotient rule', b: 'd/dx (u/v) = (v du/dx − u dv/dx)/v². The minus sign makes the order matter: v du/dx comes first.' },
      { n: 4, f: 'Gradient of a parametric curve x = f(t), y = g(t)', b: 'dy/dx = (dy/dt) ÷ (dx/dt), usually left in terms of t. Horizontal tangent where dy/dt = 0; vertical tangent where dx/dt = 0.' },
      { n: 5, f: 'Implicit differentiation: how do you differentiate y² and xy with respect to x?', b: 'd/dx (y²) = 2y dy/dx.\nd/dx (xy) = x dy/dx + y (product rule).\nThen collect the dy/dx terms on one side and factorise.' },
      { n: 6, f: 'Differentiate e^(kx), ln(ax + b) and sin(kx).', b: 'e^(kx) → k e^(kx)\nln(ax + b) → a/(ax + b)\nsin(kx) → k cos(kx)' },
    ]),
    ...sub(P2, 'integration-cambridge-alevel-maths-2', '2.5', [
      { n: 1, f: '∫ e^(ax + b) dx and ∫ 1/(ax + b) dx', b: '∫ e^(ax + b) dx = (1/a) e^(ax + b) + c\n∫ 1/(ax + b) dx = (1/a) ln|ax + b| + c' },
      { n: 2, f: '∫ sin(ax + b) dx, ∫ cos(ax + b) dx and ∫ sec²(ax + b) dx', b: '−(1/a) cos(ax + b) + c\n(1/a) sin(ax + b) + c\n(1/a) tan(ax + b) + c\n(radians)' },
      { n: 3, f: 'How do you integrate sin²x and cos²x?', b: 'Use the double-angle formula:\nsin²x = ½(1 − cos 2x), integral ½x − ¼ sin 2x + c.\ncos²x = ½(1 + cos 2x), integral ½x + ¼ sin 2x + c.' },
      { n: 4, f: 'The trapezium rule', b: '∫ₐᵇ y dx ≈ ½h{y₀ + 2(y₁ + … + yₙ₋₁) + yₙ}, where h = (b − a)/n. n strips need n + 1 ordinates. It is not printed in MF19.' },
      { n: 5, f: 'When does the trapezium rule over-estimate, and when does it under-estimate?', b: 'Curve bends upward (chords above the curve, e.g. eˣ): over-estimate.\nCurve bends downward (chords below the curve, e.g. ln x, √x): under-estimate.\nGive the reason from a sketch.' },
      { n: 6, f: 'Find the exact value of ∫₀² 3/(4 − x) dx.', b: '[−3 ln|4 − x|]₀² = −3 ln 2 + 3 ln 4 = 3 ln 2.\nHere a = −1, so the minus sign comes out in front.' },
    ]),
    ...sub(P2, 'numerical-solution-of-equations-cambridge-2', '2.6', [
      { n: 1, f: 'How do you show that f(x) = 0 has a root between a and b?', b: 'Work out f(a) and f(b) and show they have opposite signs. State: "sign change and f is continuous, so a root lies between a and b".' },
      { n: 2, f: 'When can the sign-change method mislead you?', b: 'A repeated (touching) root, or two roots close together, gives no sign change. A discontinuity, such as an asymptote of 1/x or tan x, can give a sign change with no root.' },
      { n: 3, f: 'An iteration xₙ₊₁ = F(xₙ) converges to α. What equation does α satisfy?', b: 'α = F(α), so α is a root of x = F(x). To find α exactly, replace xₙ₊₁ and xₙ by α and solve.' },
      { n: 4, f: 'When do you stop iterating, and how can you confirm a root is 2.66 to 2 d.p.?', b: 'Stop when two successive iterates round to the same value (use the stored calculator value each time).\nConfirm by a sign change of f on [2.655, 2.665].' },
      { n: 5, f: 'xₙ₊₁ = 6/(xₙ + 1), x₁ = 1, converges to α. Find α exactly.', b: 'α = 6/(α + 1) gives α² + α − 6 = 0, so (α + 3)(α − 2) = 0.\nAll iterates are positive, so α = 2.' },
    ]),

    // 3 Pure Mathematics 3
    ...sub(P3, 'algebra-cambridge-alevel-maths-3', '3.1', [
      { n: 1, f: 'Partial fractions: what form do you use for a linear factor, a repeated factor (cx + d)² and a quadratic factor cx² + d?', b: 'Linear (ax + b): A/(ax + b).\nRepeated: B/(cx + d) + C/(cx + d)².\nQuadratic: (Bx + C)/(cx² + d).\nThe numerator must have lower degree than the denominator.' },
      { n: 2, f: 'Express 1/((x + 1)(x + 2)) in partial fractions.', b: '1/(x + 1) − 1/(x + 2).\nCheck: ((x + 2) − (x + 1))/((x + 1)(x + 2)) = 1/((x + 1)(x + 2)).' },
      { n: 3, f: 'Binomial expansion of (1 + x)ⁿ for rational n, and when is it valid?', b: '(1 + x)ⁿ = 1 + nx + n(n − 1)x²/2! + n(n − 1)(n − 2)x³/3! + …\nValid for |x| < 1.' },
      { n: 4, f: 'Expand √(1 + x) up to the term in x².', b: '(1 + x)^(1/2) = 1 + ½x + (½)(−½)x²/2 + … = 1 + ½x − ⅛x² + …, for |x| < 1.' },
      { n: 5, f: 'How do you expand (a + bx)ⁿ when n is not a positive integer?', b: 'Take out aⁿ: (a + bx)ⁿ = aⁿ(1 + bx/a)ⁿ, then expand. Valid for |bx/a| < 1, that is |x| < |a/b|.' },
    ]),
    ...sub(P3, 'logarithmic-and-exponential-functions-cambridge-3', '3.2', [
      { n: 1, f: 'Solve 3^(2x) − 5 × 3ˣ + 6 = 0.', b: 'Let u = 3ˣ: u² − 5u + 6 = 0, so u = 2 or u = 3.\n3ˣ = 2 gives x = ln 2/ln 3 = 0.631 (3 s.f.); 3ˣ = 3 gives x = 1.' },
      { n: 2, f: 'How do you solve an equation with the unknown in an index, such as 5^(2x − 1) = 3^(x + 2)?', b: '1. Take ln of both sides.\n2. Bring the indices down: (2x − 1) ln 5 = (x + 2) ln 3.\n3. Expand, collect the x terms, factorise out x and divide.' },
      { n: 3, f: 'A graph of ln y against x is a line with gradient 0.2 and intercept 1.5, for y = k(aˣ). Find a and k.', b: 'ln y = ln k + x ln a, so ln a = 0.2 and ln k = 1.5.\na = e^0.2 = 1.22, k = e^1.5 = 4.48 (3 s.f.).' },
      { n: 4, f: 'In a hidden quadratic in eˣ, why must you reject a root such as eˣ = −3?', b: 'eˣ > 0 for every real x (and aˣ > 0 for a > 0), so eˣ = −3 has no solution. Say why you reject it.' },
      { n: 5, f: 'Sketch y = e^(kx) for k > 0 and for k < 0.', b: 'Both pass through (0, 1) with asymptote y = 0 and lie above the x-axis.\nk > 0: growth (steeper for larger k).\nk < 0: decay towards the x-axis.' },
    ]),
    ...sub(P3, 'trigonometry-cambridge-alevel-maths-3', '3.3', [
      { n: 1, f: 'sec x vs cos⁻¹ x', b: 'sec x = 1/cos x; cos⁻¹ x is the inverse function.', src: P3N },
      { n: 2, f: 'Find the exact value of tan 75°.', b: 'tan(45° + 30°) = (1 + 1/√3)/(1 − 1/√3) = (√3 + 1)/(√3 − 1) = 2 + √3.' },
      { n: 3, f: 'tan(A ± B) and tan 2A', b: 'tan(A ± B) ≡ (tan A ± tan B)/(1 ∓ tan A tan B)\ntan 2A ≡ 2 tan A/(1 − tan²A)' },
      { n: 4, f: 'cos²A and sin²A in terms of cos 2A', b: 'cos²A ≡ ½(1 + cos 2A)\nsin²A ≡ ½(1 − cos 2A)' },
      { n: 5, f: 'Key features of y = sec θ, y = cosec θ and y = cot θ', b: 'sec and cosec: |y| ≥ 1, period 360°; asymptotes where cos θ = 0 (sec) or sin θ = 0 (cosec).\ncot: period 180°, asymptotes where sin θ = 0.' },
      { n: 6, f: 'To solve R sin(θ + α) = c for 0° ≤ θ ≤ 360°, what must you do before finding the angles?', b: 'Shift the interval: 0° + α ≤ θ + α ≤ 360° + α. Find every value of θ + α in that range, then subtract α.' },
    ]),
    ...sub(P3, 'differentiation-cambridge-alevel-maths-3', '3.4', [
      { n: 1, f: 'd/dx tan⁻¹x, and d/dx tan⁻¹(2x)', b: 'd/dx tan⁻¹x = 1/(1 + x²).\nd/dx tan⁻¹(2x) = 2/(1 + 4x²): do not forget the inner derivative 2.' },
      { n: 2, f: 'd/dx ln(f(x)) and d/dx e^(f(x))', b: 'd/dx ln(f(x)) = f′(x)/f(x)\nd/dx e^(f(x)) = f′(x) e^(f(x))' },
      { n: 3, f: 'For y = eˣ/(x − 2), find the stationary point.', b: 'Quotient rule: dy/dx = ((x − 2)eˣ − eˣ)/(x − 2)² = eˣ(x − 3)/(x − 2)².\neˣ > 0, so dy/dx = 0 only at x = 3. Stationary point (3, e³).' },
      { n: 4, f: 'x = t² + 1, y = t³ − 3t. Where is the tangent horizontal, and where vertical?', b: 'dx/dt = 2t, dy/dt = 3t² − 3.\nHorizontal: t = ±1, at (2, −2) and (2, 2).\nVertical: t = 0, at (1, 0).' },
      { n: 5, f: 'What must you substitute to find the gradient of an implicit curve at a point?', b: 'Both the x- and the y-coordinate of the point, after making dy/dx the subject.' },
    ]),
    ...sub(P3, 'integration-cambridge-alevel-maths-3', '3.5', [
      { n: 1, f: 'ln|x| vs ln x', b: 'The modulus is needed when x may be negative.', src: P3N },
      { n: 2, f: '∫ f′(x)/f(x) dx', b: 'ln|f(x)| + c. Use it when the numerator is a constant multiple of the derivative of the denominator, e.g. ∫ 2x/(x² + 1) dx = ln(x² + 1) + c.' },
      { n: 3, f: 'Integration by parts: the formula and how to choose u', b: '∫ u (dv/dx) dx = uv − ∫ v (du/dx) dx.\nChoose u as the part that becomes simpler when differentiated (a power of x, or ln x).' },
      { n: 4, f: 'Find ∫ x eˣ dx and ∫ ln x dx.', b: '∫ x eˣ dx = x eˣ − eˣ + c (u = x).\n∫ ln x dx = x ln x − x + c (u = ln x, dv/dx = 1).' },
      { n: 5, f: '∫ 1/(x² + a²) dx', b: '(1/a) tan⁻¹(x/a) + c' },
      { n: 6, f: 'Integration by substitution: what must change besides the integrand?', b: 'Replace dx using du/dx, and change the limits to values of the new variable (or substitute back before using x-limits).' },
    ]),
    ...sub(P3, 'numerical-solution-of-equations-cambridge-3', '3.6', [
      { n: 1, f: 'Show that 3 sin x = x has a root between 2 and 3.', b: 'f(x) = 3 sin x − x (radians). f(2) = 0.728 > 0, f(3) = −2.58 < 0.\nSign change and f is continuous, so a root lies between 2 and 3.' },
      { n: 2, f: 'Iterating to a given accuracy: three rules for the working', b: 'Use the full stored value (Ans) each time, not a rounded one.\nWrite each iterate to at least one more decimal place than the answer needs.\nStop when two successive iterates round to the same value.' },
      { n: 3, f: 'How do you show the limit α of xₙ₊₁ = F(xₙ) is a root of a given equation?', b: 'Put xₙ₊₁ = xₙ = α, so α = F(α), then rearrange this to the given equation, showing every step.' },
      { n: 4, f: 'How can you tell from the numbers that an iteration is failing?', b: 'The iterates move away from the root, or oscillate with growing size, instead of settling down. A different rearrangement of the same equation may converge.' },
    ]),
    ...sub(P3, 'vectors-cambridge-alevel-maths', '3.7', [
      { n: 1, f: 'Parallel vs skew', b: 'Parallel lines have direction vectors that are multiples of each other; skew lines are not parallel and do not meet.', src: P3N },
      { n: 2, f: 'Scalar product and the angle between two vectors', b: 'a.b = a₁b₁ + a₂b₂ + a₃b₃ = |a||b| cos θ, so cos θ = a.b/(|a||b|).\na.b = 0 means the vectors are perpendicular.' },
      { n: 3, f: 'Vector equation of a line', b: 'r = a + tb, where a is the position vector of a point on the line, b is a direction vector and t is a scalar parameter.' },
      { n: 4, f: 'How do you find the angle between two lines?', b: 'Use the scalar product of their direction vectors only, not the position vectors.' },
      { n: 5, f: 'How do you decide whether two lines in 3D intersect?', b: '1. Equate the general points: a + sb = c + td.\n2. Solve two of the three component equations for s and t.\n3. Check the third. If it holds, they meet; if not (and they are not parallel), they are skew.' },
      { n: 6, f: 'Magnitude and unit vector of a = xi + yj + zk', b: '|a| = √(x² + y² + z²).\nUnit vector â = a/|a|.' },
      { n: 7, f: 'How do you find the foot of the perpendicular from a point C to a line?', b: '1. Write a general point P on the line in terms of t.\n2. Form CP.\n3. Solve CP . (direction vector) = 0 for t.\n4. Substitute t to get P; |CP| is the shortest distance.' },
    ]),
    ...sub(P3, 'differential-equations-cambridge-alevel-maths', '3.8', [
      { n: 1, f: 'How do you solve a first-order differential equation by separating the variables?', b: '1. Rearrange so all y terms are with dy and all x terms with dx.\n2. Integrate both sides, with one constant c.\n3. Use the given condition to find c.\n4. Rearrange if asked, and interpret in context.' },
      { n: 2, f: 'Translate "the rate of decrease of x is proportional to x" into a differential equation.', b: 'dx/dt = −kx, where k is a positive constant.' },
      { n: 3, f: 'Solve dy/dx = ky.', b: '∫ (1/y) dy = ∫ k dx, so ln|y| = kx + c, giving y = Ae^(kx) (A a constant).' },
      { n: 4, f: 'Solve dy/dx = 2xy given y = 1 when x = 0.', b: '∫ (1/y) dy = ∫ 2x dx, so ln y = x² + c. At x = 0, y = 1: c = 0.\ny = e^(x²).' },
      { n: 5, f: 'When must the constant of integration be added?', b: 'At the integration step, before you take exponentials or rearrange. Adding it afterwards gives the wrong general solution.' },
    ]),
    ...sub(P3, 'complex-numbers-cambridge-alevel-maths', '3.9', [
      { n: 1, f: '|z − a| = k vs |z − a| = |z − b|', b: 'A circle vs a perpendicular bisector.', src: P3N },
      { n: 2, f: 'arg(z − a) = α', b: 'A half-line from a, not a full line.', src: P3N },
      { n: 3, f: 'Complex conjugate of z = x + iy, and zz*', b: 'z* = x − iy.\nzz* = x² + y² = |z|², which is real.' },
      { n: 4, f: 'Express (3 + 4i)/(1 + 2i) in the form x + iy.', b: 'Multiply top and bottom by 1 − 2i: (3 − 6i + 4i + 8)/5 = (11 − 2i)/5 = 2.2 − 0.4i.' },
      { n: 5, f: 'Modulus-argument (polar) form, and the range of the principal argument', b: 'z = r(cos θ + i sin θ) = re^(iθ), where r = |z| and θ = arg z.\nPrincipal argument: −π < θ ≤ π. Place z in the correct quadrant; do not just use tan⁻¹(y/x).' },
      { n: 6, f: 'Multiplying and dividing in polar form', b: '|z₁z₂| = |z₁||z₂| and arg(z₁z₂) = arg z₁ + arg z₂.\n|z₁/z₂| = |z₁|/|z₂| and arg(z₁/z₂) = arg z₁ − arg z₂.\nAdjust the argument into −π < θ ≤ π if needed.' },
      { n: 7, f: 'How do you find the square roots of a complex number z?', b: 'Set (a + ib)² = z. Compare real parts (a² − b² = Re z) and imaginary parts (2ab = Im z), then solve for real a and b.' },
      { n: 8, f: 'Non-real roots of a polynomial equation with real coefficients', b: 'They occur in conjugate pairs: if a + ib is a root, so is a − ib.' },
    ]),

    // 4 Mechanics
    ...sub(MECH, 'forces-and-equilibrium-cambridge-alevel-maths', '4.1', [
      { n: 1, f: 'Limiting vs not limiting', b: 'F = μR only at the point of slipping or while sliding.', src: MECHN },
      { n: 2, f: 'Components of the weight of a particle on a plane inclined at α', b: 'mg sin α down the slope (along the plane).\nmg cos α into the slope (perpendicular to the plane).' },
      { n: 3, f: 'Condition for a particle to be in equilibrium', b: 'The resultant force is zero: the sum of the components in every direction is zero (resolve in two perpendicular directions).' },
      { n: 4, f: 'Friction: the inequality, and which way it acts', b: 'F ≤ μR, with F = μR when limiting or sliding.\nFriction opposes the motion that would happen (or is happening). A smooth surface has no friction.' },
      { n: 5, f: 'A particle is about to slip down a rough plane inclined at α, with no other forces. Find μ.', b: 'Perpendicular: R = mg cos α. Along: mg sin α = μR = μmg cos α.\nSo μ = tan α.' },
      { n: 6, f: 'Newton’s third law', b: 'When two bodies interact, the forces they exert on each other are equal in magnitude and opposite in direction.' },
    ]),
    ...sub(MECH, 'kinematics-of-motion-in-a-straight-line-cambridge', '4.2', [
      { n: 1, f: 'Distance vs displacement', b: 'Distance adds all motion; displacement is the net change in position.', src: MECHN },
      { n: 2, f: 'Speed vs velocity', b: 'Velocity has a sign; speed does not.', src: MECHN },
      { n: 3, f: 'The constant-acceleration (suvat) equations', b: 'v = u + at\ns = ½(u + v)t\ns = ut + ½at²\nv² = u² + 2as\nOnly for constant acceleration.' },
      { n: 4, f: 'What do the gradient and area of a displacement–time and a velocity–time graph give?', b: 's–t graph: gradient = velocity.\nv–t graph: gradient = acceleration; area under the graph = displacement.' },
      { n: 5, f: 'Variable acceleration (a function of t): how do you move between s, v and a?', b: 'Differentiate: v = ds/dt, a = dv/dt.\nIntegrate: v = ∫ a dt, s = ∫ v dt (with a constant from the initial conditions).\nMaximum velocity: a = 0. Instantaneous rest: v = 0.' },
      { n: 6, f: 'P starts from rest at O with acceleration 2 m s⁻². At the same moment Q passes O at a constant 12 m s⁻¹ in the same direction. When does P catch Q?', b: 'P: s = ½ × 2 × t² = t². Q: s = 12t.\nt² = 12t gives t = 12 s, at 144 m from O.' },
    ]),
    ...sub(MECH, 'momentum-cambridge-alevel-maths', '4.3', [
      { n: 1, f: 'Momentum vs kinetic energy', b: 'Momentum is conserved in impacts; kinetic energy is generally not.', src: MECHN },
      { n: 2, f: 'Momentum: definition and unit', b: 'Momentum = mass × velocity = mv. Unit: kg m s⁻¹ (equivalently N s). It is a vector, so its sign shows direction.' },
      { n: 3, f: 'Principle of conservation of momentum (direct impact in one dimension)', b: 'Total momentum before = total momentum after: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂. Choose a positive direction first.' },
      { n: 4, f: 'Two particles coalesce. What does that mean for the equation?', b: 'They join and move with one common velocity v: m₁u₁ + m₂u₂ = (m₁ + m₂)v.' },
      { n: 5, f: 'A 0.4 kg ball at 5 m s⁻¹ hits a stationary 0.6 kg ball and rebounds at 1 m s⁻¹. Find the speed of the 0.6 kg ball.', b: '0.4 × 5 = 0.4 × (−1) + 0.6v, so 2 = −0.4 + 0.6v and v = 4 m s⁻¹.\nThe rebound velocity is −1, not +1.' },
    ]),
    ...sub(MECH, 'newtons-laws-of-motion-cambridge-alevel-maths', '4.4', [
      { n: 1, f: 'Mass vs weight', b: 'Mass in kg; weight mg in newtons.', src: MECHN },
      { n: 2, f: 'Tension vs thrust', b: 'A string can only pull; a rod or tow-bar can pull (tension) or push (thrust).', src: MECHN },
      { n: 3, f: 'Newton’s second law', b: 'Resultant force = mass × acceleration (F = ma), applied in the direction of the acceleration.' },
      { n: 4, f: 'How do you solve a connected-particles problem?', b: '1. Draw a separate force diagram for each particle.\n2. Write F = ma for each in its own direction of motion; both have the same acceleration.\n3. Add the equations to eliminate the tension.\n4. Find the tension from one equation.' },
      { n: 5, f: 'Particles of 3 kg and 2 kg hang either side of a smooth pulley (g = 10). Find the acceleration and the tension.', b: 'System: 30 − 20 = 5a, so a = 2 m s⁻².\n2 kg particle: T − 20 = 2 × 2, so T = 24 N.\nCheck: 30 − 24 = 3 × 2.' },
      { n: 6, f: 'Acceleration of a particle sliding down a smooth plane inclined at α', b: 'a = g sin α (5 m s⁻² at 30° with g = 10). On a rough plane, the acceleration going up differs from coming down, because friction reverses.' },
    ]),
    ...sub(MECH, 'energy-work-and-power-cambridge-alevel-maths', '4.5', [
      { n: 1, f: 'Driving force vs resultant force', b: 'P = Fv uses the driving force, not the resultant.', src: MECHN },
      { n: 2, f: 'Work done by a constant force F moving through distance d at angle θ to the force', b: 'Work done = Fd cos θ, in joules (J).' },
      { n: 3, f: 'Kinetic energy and gravitational potential energy', b: 'KE = ½mv²\nGPE = mgh (h is the height gained)' },
      { n: 4, f: 'The work–energy principle', b: 'Initial energy + work done by driving forces = final energy + work done against resistances (resistance × distance).' },
      { n: 5, f: 'Power: the definitions, and what happens at maximum (steady) speed', b: 'Power = work done ÷ time, and P = Fv where F is the driving force. At maximum speed a = 0, so the driving force equals the total resistance.' },
      { n: 6, f: 'A 50 kg load is raised 6 m at constant speed in 4 s (g = 10). Find the average power.', b: 'Work = 50 × 10 × 6 = 3000 J.\nPower = 3000 ÷ 4 = 750 W.' },
    ]),

    // 5 Probability & Statistics 1
    ...sub(S1, 'representation-of-data-cambridge-alevel-maths', '5.1', [
      { n: 1, f: 'Histogram: what does the height of each bar show?', b: 'Frequency density = frequency ÷ class width. The area of each bar is proportional to the frequency.' },
      { n: 2, f: 'Mean and standard deviation of raw data', b: 'x̄ = Σx/n\nσ = √(Σx²/n − x̄²)\nGrouped: use mid-points, x̄ = Σxf/Σf and σ = √(Σx²f/Σf − x̄²).' },
      { n: 3, f: 'Coded data: if y = x − a, how are the mean and standard deviation of x found from y?', b: 'x̄ = a + ȳ.\nThe standard deviation of x equals the standard deviation of y (subtracting a constant does not change the spread).' },
      { n: 4, f: 'Cumulative frequency graph: where do you plot points, and how do you read the median and quartiles for n values?', b: 'Plot at upper class boundaries.\nMedian at n/2, Q₁ at n/4, Q₃ at 3n/4 on the cumulative frequency axis.' },
      { n: 5, f: 'How do you compare two data sets?', b: 'One comment on centre (median or mean) and one on spread (IQR or standard deviation), both in the context of the data.' },
      { n: 6, f: 'How do you find the mean and standard deviation of two data sets combined?', b: 'Add n, Σx and Σx² across the two sets, then use the formulas once. Do not average the two means unless the sets are the same size.' },
    ]),
    ...sub(S1, 'permutations-and-combinations-cambridge-alevel-maths', '5.2', [
      { n: 1, f: 'Permutation vs combination', b: 'Permutation: order matters, ⁿPᵣ = n!/(n − r)!.\nCombination: order does not matter, ⁿCᵣ = n!/(r!(n − r)!).' },
      { n: 2, f: 'How many arrangements are there of the letters of LETTER?', b: '6 letters with E twice and T twice: 6!/(2! × 2!) = 720/4 = 180.' },
      { n: 3, f: 'Arrangements where certain items must be together', b: 'Glue the items into one block, arrange the blocks, then multiply by the number of arrangements inside the block.' },
      { n: 4, f: '7 people stand in a line. In how many ways can A and B not be next to each other?', b: 'Total − together = 7! − 2 × 6! = 5040 − 1440 = 3600.' },
      { n: 5, f: 'How do you handle "at least one" or "at most" in a selection?', b: 'List the exact cases (for example exactly 1, exactly 2, …), count each with combinations, and add. A single product usually double-counts.' },
    ]),
    ...sub(S1, 'probability-cambridge-alevel-maths', '5.3', [
      { n: 1, f: 'Mutually exclusive events', b: 'They cannot happen together: P(A ∩ B) = 0, so P(A or B) = P(A) + P(B).' },
      { n: 2, f: 'Independent events: definition and test', b: 'One does not affect the probability of the other.\nTest: P(A ∩ B) = P(A) × P(B). Compare the numbers to justify it.' },
      { n: 3, f: 'Conditional probability formula', b: 'P(A | B) = P(A ∩ B)/P(B).' },
      { n: 4, f: 'Can two events with non-zero probabilities be both mutually exclusive and independent?', b: 'No. Exclusive gives P(A ∩ B) = 0, but independence needs P(A ∩ B) = P(A)P(B) > 0.' },
      { n: 5, f: 'How do you find P(A | B) from a tree diagram?', b: 'Numerator: the probability of the branches where both A and B happen.\nDenominator: the total probability of all branches where B happens.\nDivide.' },
    ]),
    ...sub(S1, 'discrete-random-variables-cambridge-alevel-maths', '5.4', [
      { n: 1, f: 'Discrete random variable: the probability rule, E(X) and Var(X)', b: 'Σp = 1.\nE(X) = Σxp.\nVar(X) = Σx²p − {E(X)}².' },
      { n: 2, f: 'Conditions for a binomial distribution B(n, p)', b: 'A fixed number n of independent trials, each with two outcomes (success or failure), and a constant probability p of success. X is the number of successes.' },
      { n: 3, f: 'Binomial B(n, p): P(X = r), mean and variance', b: 'P(X = r) = ⁿCᵣ pʳ(1 − p)ⁿ⁻ʳ.\nMean np; variance np(1 − p).' },
      { n: 4, f: 'Geometric Geo(p): P(X = r), mean, and P(X > r)', b: 'P(X = r) = p(1 − p)ʳ⁻¹, r = 1, 2, 3, …\nMean 1/p.\nP(X > r) = (1 − p)ʳ (the first r trials all fail).' },
      { n: 5, f: 'Binomial or geometric?', b: 'Binomial: fixed number of trials; X counts the successes (0 to n).\nGeometric: trials continue until the first success; X is the trial on which it occurs (1, 2, 3, …).' },
      { n: 6, f: 'X takes the values 1, 2, 3, 4 with probabilities 0.1, a, b, 0.3, and E(X) = 2.7. Find a and b.', b: 'Σp = 1: a + b = 0.6.\nE(X): 0.1 + 2a + 3b + 1.2 = 2.7, so 2a + 3b = 1.4.\nb = 0.2, a = 0.4.' },
    ]),
    ...sub(S1, 'the-normal-distribution-cambridge-alevel-maths', '5.5', [
      { n: 1, f: 'Standardising X ~ N(μ, σ²)', b: 'Z = (X − μ)/σ, where Z ~ N(0, 1). Then P(X < x) = Φ((x − μ)/σ).' },
      { n: 2, f: 'How do you find Φ(−z), and P(Z > z)?', b: 'Φ(−z) = 1 − Φ(z).\nP(Z > z) = 1 − Φ(z).\nBetween two values: Φ(z₂) − Φ(z₁).' },
      { n: 3, f: 'Normal approximation to B(n, p): conditions and parameters', b: 'Use when np > 5 and nq > 5 (q = 1 − p).\nApproximate by N(np, npq), with a continuity correction.' },
      { n: 4, f: 'Continuity corrections for P(X ≤ 15), P(X < 15), P(X ≥ 15) and P(X = 15)', b: 'P(X ≤ 15) → P(Y < 15.5)\nP(X < 15) → P(Y < 14.5)\nP(X ≥ 15) → P(Y > 14.5)\nP(X = 15) → P(14.5 < Y < 15.5)' },
      { n: 5, f: 'What z-value marks the top 10% of a normal distribution?', b: 'z = +1.282 (the area to its left is 0.9). The bottom 10% is z = −1.282.' },
      { n: 6, f: 'P(X < 40) = 0.05 and P(X > 70) = 0.1 for X ~ N(μ, σ²). Find μ and σ.', b: '(40 − μ)/σ = −1.645 and (70 − μ)/σ = 1.282.\nSubtract: 30 = 2.927σ, so σ = 10.2 and μ = 40 + 1.645σ = 56.9 (3 s.f.).\nKeep σ unrounded when finding μ.' },
    ]),

    // 6 Probability & Statistics 2
    ...sub(S2, 'the-poisson-distribution-cambridge-alevel-maths', '6.1', [
      { n: 1, f: 'Poisson Po(λ): P(X = r), mean and variance', b: 'P(X = r) = e^(−λ) λʳ/r!, r = 0, 1, 2, …\nMean = variance = λ.' },
      { n: 2, f: 'Conditions for a Poisson model', b: 'Events occur singly, independently, at random and at a constant mean rate.' },
      { n: 3, f: 'Faults occur at a mean rate of 0.8 per metre. What is the distribution for 3 metres?', b: 'Scale λ with the interval: λ = 3 × 0.8 = 2.4, so X ~ Po(2.4).' },
      { n: 4, f: 'When can B(n, p) be approximated by a Poisson distribution?', b: 'When n is large and np is small: the syllabus guide is n > 50 and np < 5. Use Po(np), with no continuity correction.' },
      { n: 5, f: 'When can Po(λ) be approximated by a normal distribution?', b: 'When λ > 15 (approximately). Use N(λ, λ) with a continuity correction.' },
      { n: 6, f: 'X ~ Po(λ₁) and Y ~ Po(λ₂) are independent. What is the distribution of X + Y?', b: 'X + Y ~ Po(λ₁ + λ₂). This holds only for sums: 2X is not Poisson.' },
    ]),
    ...sub(S2, 'linear-combinations-of-random-variables-cambridge', '6.2', [
      { n: 1, f: 'E(aX + b) and Var(aX + b)', b: 'E(aX + b) = aE(X) + b\nVar(aX + b) = a²Var(X)\nAdding a constant does not change the variance.' },
      { n: 2, f: 'E(aX ± bY) and Var(aX ± bY) for independent X and Y', b: 'E(aX ± bY) = aE(X) ± bE(Y)\nVar(aX ± bY) = a²Var(X) + b²Var(Y)\nVariances always add, even for a difference.' },
      { n: 3, f: 'X₁ + X₂ + X₃ (three separate items) vs 3X (one item tripled)', b: 'Both have mean 3μ.\nX₁ + X₂ + X₃ has variance 3σ².\n3X has variance 9σ².' },
      { n: 4, f: 'Var(X) = 3. Find Var(5 − 2X).', b: '(−2)² × 3 = 12. The constant 5 does not change the variance.' },
      { n: 5, f: 'What is the distribution of a linear combination of independent normal variables?', b: 'It is also normal, with mean and variance found from the rules for linear combinations.' },
    ]),
    ...sub(S2, 'continuous-random-variables-cambridge-alevel-maths', '6.3', [
      { n: 1, f: 'Properties of a probability density function f(x)', b: 'f(x) ≥ 0 for all x, and the total area under f is 1: ∫ f(x) dx = 1 over the whole range. P(a < X < b) = ∫ₐᵇ f(x) dx.' },
      { n: 2, f: 'E(X) and Var(X) for a continuous random variable', b: 'E(X) = ∫ x f(x) dx\nVar(X) = ∫ x² f(x) dx − {E(X)}²' },
      { n: 3, f: 'How do you find the median of a continuous random variable?', b: 'Solve ∫ f(x) dx = ½, integrating from the lower end of the range up to m. Quartiles use ¼ and ¾.' },
      { n: 4, f: 'f(x) = (3/8)x² for 0 ≤ x ≤ 2. Find E(X) and Var(X).', b: 'E(X) = (3/8)∫₀² x³ dx = (3/8)(4) = 1.5.\nE(X²) = (3/8)∫₀² x⁴ dx = (3/8)(32/5) = 2.4.\nVar(X) = 2.4 − 1.5² = 0.15.' },
      { n: 5, f: 'For a continuous random variable, what is P(X = a)?', b: '0, because a single value has no area. So P(X < a) = P(X ≤ a).' },
    ]),
    ...sub(S2, 'sampling-and-estimation-cambridge-alevel-maths', '6.4', [
      { n: 1, f: 'Unbiased estimate of the population variance', b: 's² = (1/(n − 1))(Σx² − (Σx)²/n). Dividing by n would, on average, underestimate the population variance.' },
      { n: 2, f: 'Why must a sample be random?', b: 'A random sample gives every member of the population an equal chance of selection, so the results are not biased. A method that leaves out part of the population (one time, one place, volunteers only) is unsatisfactory.' },
      { n: 3, f: 'Distribution of the sample mean X̄', b: 'Normal population: X̄ ~ N(μ, σ²/n) exactly, for any n.\nOther or unknown population, large n: X̄ ~ N(μ, σ²/n) approximately, by the Central Limit Theorem.' },
      { n: 4, f: 'Confidence interval for a population mean', b: 'x̄ ± z × σ/√n (or s/√n for a large sample).\nInterpretation: about 95% of intervals built this way contain the true mean (for a 95% interval).' },
      { n: 5, f: 'z-values for 90%, 95%, 98% and 99% confidence intervals', b: '90%: 1.645\n95%: 1.960\n98%: 2.326\n99%: 2.576' },
      { n: 6, f: 'Approximate confidence interval for a population proportion', b: 'p̂ ± z √(p̂(1 − p̂)/n), where p̂ is the sample proportion.' },
      { n: 7, f: 'σ = 5. What is the smallest n for which a 95% confidence interval for μ has width less than 2?', b: '2 × 1.96 × 5/√n < 2, so √n > 9.8 and n > 96.04.\nSmallest n = 97.' },
    ]),
    ...sub(S2, 'hypothesis-tests-cambridge-alevel-maths', '6.5', [
      { n: 1, f: 'Steps of a hypothesis test', b: '1. State H₀ and H₁ in terms of the parameter (p, λ or μ).\n2. State the distribution under H₀.\n3. Find the tail probability or test statistic.\n4. Compare with the significance level.\n5. Conclude in context, without overstating.' },
      { n: 2, f: 'Type I and Type II errors', b: 'Type I: rejecting H₀ when it is true.\nType II: accepting H₀ when it is false.' },
      { n: 3, f: 'P(Type I error) for a normal test and for a binomial or Poisson test', b: 'Normal test: equals the significance level.\nBinomial or Poisson test: the actual probability of the rejection region under H₀, usually less than the significance level.' },
      { n: 4, f: 'How do you compare in a two-tailed test?', b: 'Compare each tail probability with half the significance level (for example 2.5% in each tail at the 5% level).' },
      { n: 5, f: 'H₀: p = 0.4, H₁: p > 0.4, n = 15, 5% level. P(X ≥ 9) = 0.0950 and P(X ≥ 10) = 0.0338. Find the rejection region.', b: 'The first upper tail below 0.05 starts at 10, so the rejection region is X ≥ 10. P(Type I error) = 0.0338.' },
      { n: 6, f: 'How do you find P(Type II error)?', b: 'Find the probability of landing in the acceptance region, using the stated alternative value of the parameter (not the H₀ value).' },
      { n: 7, f: 'Test statistic for a population mean with σ known (normal population)', b: 'z = (x̄ − μ)/(σ/√n), using the H₀ value of μ. For a large sample with σ unknown, use s in place of σ.' },
    ]),
  ],
};
