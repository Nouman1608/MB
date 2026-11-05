/**
 * D-438 -- flashcards for Pearson Edexcel International Advanced Level
 * Mathematics YMA01 (Specification Issue 3, April 2019).
 *
 * One block per subtopic, in syllabus order: Pure P1-P4, Mechanics M1-M2,
 * Statistics S1-S2 and Decision D1. Card ids are `<subtopic number>-<n>` and
 * are permanent (browser progress is keyed by them): add a new card with the
 * next unused n, never renumber.
 *
 *   No tierScheme: the syllabus record is not tiered, so no card is marked u.
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs YMA01); origin 'revision-notes'.
 *
 * Written from Marlbridge's own YMA01 revision notes and study guides. Plain
 * text only (see types.ts). Unicode for maths symbols.
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

const PURE1 = 'edexcel-a-level-mathematics-pure1-revision-notes';
const STATS = 'edexcel-ial-mathematics-statistical-models-and-the-representation-and-summary-revision-notes';

const P1 = 'unit-p1-pure-mathematics-1-edexcel-alevel-maths';
const P2 = 'unit-p2-pure-mathematics-2-edexcel-alevel-maths';
const P3 = 'unit-p3-pure-mathematics-3-edexcel-alevel-maths';
const P4 = 'unit-p4-pure-mathematics-4-edexcel-alevel-maths';
const M1 = 'unit-m1-mechanics-1-edexcel-alevel-maths';
const M2 = 'unit-m2-mechanics-2-edexcel-alevel-maths';
const S1 = 'unit-s1-statistics-1-edexcel-alevel-maths';
const S2 = 'unit-s2-statistics-2-edexcel-alevel-maths';
const D1 = 'unit-d1-decision-mathematics-1-edexcel-alevel-maths';

export const DECK_EDEXCEL_A_LEVEL_MATHEMATICS: FlashcardDeck = {
  boardSlug: 'edexcel',
  qualificationSlug: 'a-level',
  subjectSlug: 'mathematics',
  syllabusCode: 'YMA01',
  syllabusSeries: 'Specification Issue 3, April 2019',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'sajawal-zahid', reviewedOn: '2026-11-05' },
  cards: [
    // Unit P1: Pure Mathematics 1
    ...sub(P1, 'p1-algebra-and-functions-edexcel-alevel-maths', 'P1.1', [
      { n: 1, f: 'Laws of indices, and the meaning of a⁰, a⁻ⁿ and a^(m/n)', b: 'aᵐ × aⁿ = aᵐ⁺ⁿ, aᵐ ÷ aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐⁿ (same base).\na⁰ = 1 (a ≠ 0). a⁻ⁿ = 1/aⁿ, a reciprocal, not a negative number.\na^(m/n) = (ⁿ√a)ᵐ: root first, then power. Example: 16^(3/4) = 2³ = 8.' },
      { n: 2, f: 'How do you rationalise the denominator of k/(p + q√r)?', b: 'Multiply top and bottom by the conjugate (p − q√r). The denominator becomes p² − q²r, a rational number.\nExample: 10/(√7 − √2) = 10(√7 + √2)/5 = 2√7 + 2√2.' },
      { n: 3, f: 'Completed-square form of ax² + bx + c, and the turning point of a(x + p)² + q', b: 'ax² + bx + c = a(x + b/(2a))² + (c − b²/(4a)).\nThe turning point of a(x + p)² + q is (−p, q): a minimum if a > 0, a maximum if a < 0.\nExample: x² − 12x + 29 = (x − 6)² − 7, minimum (6, −7).' },
      { n: 4, f: 'The discriminant of ax² + bx + c = 0 and what each sign means', b: 'b² − 4ac > 0: two different real roots. = 0: one repeated root (graph touches the x-axis). < 0: no real roots.\nax² + bx + c is positive for all x only if a > 0 and b² − 4ac < 0 (both conditions are needed).' },
      { n: 5, f: 'Solve x² + 4x − 21 > 0', b: '(x + 7)(x − 3) > 0. The parabola opens upwards, so the region is outside the roots:\nx < −7 or x > 3.\n(For "< 0" with a positive x² coefficient, the answer is between the roots.)' },
      { n: 6, f: 'Describe y = f(x + a), y = f(x) + a, y = af(x) and y = f(ax)', b: 'f(x + a): translation a to the left.\nf(x) + a: translation a up.\naf(x): stretch in the y-direction, scale factor a.\nf(ax): stretch in the x-direction, scale factor 1/a.\nInside the bracket acts in reverse; outside acts as written.' },
    ]),
    ...sub(P1, 'p1-coordinate-geometry-edexcel-alevel-maths', 'P1.2', [
      { n: 1, f: 'Gradient of the line through (x₁, y₁) and (x₂, y₂), and the equation of a line through (x₁, y₁) with gradient m', b: 'm = (y₂ − y₁)/(x₂ − x₁).\nLine: y − y₁ = m(x − x₁).' },
      { n: 2, f: 'Gradient conditions for parallel and perpendicular lines', b: 'Parallel lines have equal gradients.\nPerpendicular gradients multiply to −1, so the new gradient is the negative reciprocal: −1/m.', src: PURE1 },
      { n: 3, f: 'Distance between two points and the midpoint of the segment joining them', b: 'Distance = √((x₂ − x₁)² + (y₂ − y₁)²).\nMidpoint = ((x₁ + x₂)/2, (y₁ + y₂)/2).' },
      { n: 4, f: 'Gradient and y-intercept of the line ax + by + c = 0', b: 'Rearrange to y = −(a/b)x − c/b.\nGradient −a/b, y-intercept −c/b.' },
      { n: 5, f: 'Find the line perpendicular to 2x + 3y = 6 through (2, 1), in the form ax + by + c = 0', b: 'Given gradient −2/3, so the perpendicular gradient is 3/2.\ny − 1 = (3/2)(x − 2) → 2y − 2 = 3x − 6 → 3x − 2y − 4 = 0.\nCheck (2, 1): 6 − 2 − 4 = 0.' },
    ]),
    ...sub(P1, 'p1-trigonometry-edexcel-alevel-maths', 'P1.3', [
      { n: 1, f: 'The sine rule, and the ambiguous case', b: 'a/sin A = b/sin B = c/sin C. Use it when a side and its opposite angle are known.\nWhen finding an angle, sin B = k also gives 180° − B (since sin(180° − θ) = sin θ). Keep the obtuse value only if the angles still total less than 180°.' },
      { n: 2, f: 'The cosine rule for a side and for an angle', b: 'a² = b² + c² − 2bc cos A (two sides and the included angle).\ncos A = (b² + c² − a²)/(2bc) (all three sides).' },
      { n: 3, f: 'Area of a triangle from two sides and an angle', b: 'Area = ½ab sin C, where C is the angle between sides a and b (the included angle).' },
      { n: 4, f: 'What is one radian, and how do you convert between degrees and radians?', b: 'One radian is the angle at the centre when the arc length equals the radius (about 57.3°).\nπ radians = 180°. Degrees to radians: × π/180. Radians to degrees: × 180/π.' },
      { n: 5, f: 'Arc length, sector area and segment area (θ in radians)', b: 'Arc s = rθ.\nSector area = ½r²θ; sector perimeter = 2r + rθ.\nSegment area = sector − triangle = ½r²(θ − sin θ).\nThese need θ in radians.' },
      { n: 6, f: 'Exact values of sin, cos and tan at π/6, π/4 and π/3', b: 'π/6 (30°): sin ½, cos √3/2, tan 1/√3.\nπ/4 (45°): sin √2/2, cos √2/2, tan 1.\nπ/3 (60°): sin √3/2, cos ½, tan √3.' },
    ]),
    ...sub(P1, 'p1-differentiation-edexcel-alevel-maths', 'P1.4', [
      { n: 1, f: 'Differentiation from first principles: the limit definition of f′(x)', b: 'f′(x) = lim (h → 0) [f(x + h) − f(x)]/h.\nThe mark is for writing the limit notation, not just the algebra.' },
      { n: 2, f: 'Differentiate axⁿ', b: 'd/dx (axⁿ) = anxⁿ⁻¹, for any rational n. A constant differentiates to 0. Differentiate sums term by term.' },
      { n: 3, f: 'Differentiate y = (x² − 1)/x', b: 'Split first: y = x − x⁻¹.\ndy/dx = 1 + x⁻² = 1 + 1/x².\nAlways rewrite roots, reciprocals and single-term fractions as powers before differentiating.' },
      { n: 4, f: 'How do you find the tangent and normal to y = f(x) at x = a?', b: '1. Find y at x = a.\n2. Find m = dy/dx at x = a.\n3. Tangent: y − y₁ = m(x − a).\n4. Normal: gradient −1/m through the same point.' },
      { n: 5, f: 'Find the tangent to y = x³ − 5x at x = 2', b: 'y = 8 − 10 = −2. dy/dx = 3x² − 5 = 7.\ny + 2 = 7(x − 2), so y = 7x − 16.' },
      { n: 6, f: 'What does the second derivative d²y/dx² measure?', b: 'The rate of change of the gradient: the derivative of dy/dx. Example: y = x⁴/2 − 3x² + x gives dy/dx = 2x³ − 6x + 1 and d²y/dx² = 6x² − 6.' },
    ]),
    ...sub(P1, 'p1-integration-edexcel-alevel-maths', 'P1.5', [
      { n: 1, f: 'Integrate xⁿ (indefinite)', b: '∫ xⁿ dx = xⁿ⁺¹/(n + 1) + c, for n ≠ −1.\nRaise the power by one and divide by the new power. The + c is a mark.' },
      { n: 2, f: 'Find ∫ (4x³ − 6√x + 2/x²) dx', b: 'Write as 4x³ − 6x^(1/2) + 2x⁻².\n= x⁴ − 6x^(3/2)/(3/2) + 2x⁻¹/(−1) + c\n= x⁴ − 4x^(3/2) − 2/x + c.' },
      { n: 3, f: 'How do you find the equation of a curve from f′(x) and one point on it?', b: '1. Rewrite f′(x) as powers of x.\n2. Integrate term by term and add + c.\n3. Substitute the point to find c.\n4. State y = f(x) in full.' },
      { n: 4, f: 'f′(x) = 12x³ − 6x^(−1/2) and the curve passes through (1, 5). Find f(x).', b: 'f(x) = 3x⁴ − 12x^(1/2) + c.\nAt (1, 5): 3 − 12 + c = 5, so c = 14.\nf(x) = 3x⁴ − 12√x + 14.' },
      { n: 5, f: 'How can you check an indefinite integral?', b: 'Differentiate your answer. You should get back the original integrand exactly. If not, look for a slip such as dividing by the old power instead of the new one.' },
    ]),

    // Unit P2: Pure Mathematics 2
    ...sub(P2, 'p2-proof-edexcel-alevel-maths', 'P2.1', [
      { n: 1, f: 'How do you write a general even integer, a general odd integer and three consecutive integers?', b: 'Even: 2n. Odd: 2n + 1. Consecutive: n, n + 1, n + 2, where n is an integer.' },
      { n: 2, f: 'Proof by exhaustion', b: 'Split the statement into a set of cases that covers every possibility, prove each case, and say that the cases are complete.' },
      { n: 3, f: 'Disproof by counter-example', b: 'Give one value that meets the stated conditions, work out both sides, and say clearly why the statement fails. One counter-example is enough to disprove; many confirming cases never prove.' },
      { n: 4, f: 'Prove that n² + n is even for every integer n', b: 'n² + n = n(n + 1).\nIf n is even, n(n + 1) is even × odd = even.\nIf n is odd, n + 1 is even, so n(n + 1) is odd × even = even.\nBoth cases give an even number.' },
      { n: 5, f: 'What should the first and last lines of a proof by deduction contain?', b: 'First: say what the letters stand for, such as "let n be an integer".\nLast: a sentence linking back to the claim, such as "so the expression is a multiple of 4". Each step must follow from the one before.' },
    ]),
    ...sub(P2, 'p2-algebra-and-functions-edexcel-alevel-maths', 'P2.2', [
      { n: 1, f: 'The remainder theorem', b: 'When f(x) is divided by (ax + b), the remainder is f(−b/a).\nFor a divisor (x − a), the remainder is f(a).' },
      { n: 2, f: 'The factor theorem', b: '(ax + b) is a factor of f(x) exactly when f(−b/a) = 0.' },
      { n: 3, f: 'Factorise f(x) = x³ − 4x² + x + 6 fully', b: 'f(−1) = −1 − 4 − 1 + 6 = 0, so (x + 1) is a factor.\nDividing gives x² − 5x + 6 = (x − 2)(x − 3).\nf(x) = (x + 1)(x − 2)(x − 3).' },
      { n: 4, f: 'Find the remainder when x³ − 5x + 2 is divided by (x + 3)', b: 'Use x = −3: f(−3) = −27 + 15 + 2 = −10. The remainder is −10.' },
      { n: 5, f: 'f(x) = x³ + kx² − x − 10 has a factor (x − 2). Find k.', b: 'f(2) = 8 + 4k − 2 − 10 = 4k − 4 = 0, so k = 1.' },
      { n: 6, f: 'Which values should you try when looking for a factor of a cubic?', b: 'If the leading coefficient is 1, try the factors of the constant term, positive and negative. Otherwise try fractions p/q with p dividing the constant and q dividing the leading coefficient.' },
    ]),
    ...sub(P2, 'p2-coordinate-geometry-edexcel-alevel-maths', 'P2.3', [
      { n: 1, f: 'Equation of a circle with centre (a, b) and radius r', b: '(x − a)² + (y − b)² = r².\nExample: centre (−2, 4), radius 3 gives (x + 2)² + (y − 4)² = 9.' },
      { n: 2, f: 'Find the centre and radius of x² + y² − 2x + 6y − 6 = 0', b: 'Complete the square in x and in y:\n(x − 1)² − 1 + (y + 3)² − 9 − 6 = 0\n(x − 1)² + (y + 3)² = 16.\nCentre (1, −3), radius 4.' },
      { n: 3, f: 'Three circle properties used in coordinate geometry', b: 'The angle in a semicircle is 90°.\nThe perpendicular from the centre to a chord bisects the chord.\nThe tangent at a point is perpendicular to the radius there.' },
      { n: 4, f: 'How do you find the tangent to a circle at a point P on it?', b: '1. Check P is on the circle.\n2. Find the gradient of the radius from the centre to P.\n3. The tangent gradient is its negative reciprocal.\n4. Use y − y₁ = m(x − x₁) through P.' },
      { n: 5, f: 'How do you decide whether a line meets a circle, touches it, or misses it?', b: 'Substitute the line into the circle equation to get a quadratic.\nTwo real roots: meets at two points. One repeated root: tangent. No real roots: misses the circle.' },
      { n: 6, f: 'A diameter has endpoints (1, 2) and (7, 10). Find the centre and radius.', b: 'Centre = midpoint = (4, 6).\nRadius = half the length = ½√(6² + 8²) = ½ × 10 = 5.' },
    ]),
    ...sub(P2, 'p2-sequences-and-series-edexcel-alevel-maths', 'P2.4', [
      { n: 1, f: 'Arithmetic sequence: nth term and sum of the first n terms', b: 'uₙ = a + (n − 1)d.\nSₙ = (n/2)(2a + (n − 1)d) = (n/2)(a + l), where l is the last term.' },
      { n: 2, f: 'Geometric sequence: nth term and sum of the first n terms', b: 'uₙ = arⁿ⁻¹.\nSₙ = a(1 − rⁿ)/(1 − r), for r ≠ 1.' },
      { n: 3, f: 'Sum to infinity of a geometric series, and when it exists', b: 'S∞ = a/(1 − r), valid only for |r| < 1 (a convergent series).\nExample: a = 9, r = 1/3 gives S∞ = 13.5.' },
      { n: 4, f: 'Sum of the first n natural numbers, and Σ (r = 1 to 12) of (2r + 1)', b: '1 + 2 + … + n = n(n + 1)/2.\nΣ (2r + 1) = 2 × (12 × 13/2) + 12 = 156 + 12 = 168.' },
      { n: 5, f: 'Binomial expansion of (a + bx)ⁿ for a positive integer n', b: '(a + bx)ⁿ = Σ ⁿCᵣ aⁿ⁻ʳ(bx)ʳ for r = 0 to n, which has n + 1 terms.\nⁿCᵣ = n!/(r!(n − r)!). Bracket the whole of bx, including its sign.' },
      { n: 6, f: 'Find the coefficient of x² in (1 + 3x)⁵', b: 'Term in x²: ⁵C₂ × (3x)² = 10 × 9x² = 90x². The coefficient is 90.' },
    ]),
    ...sub(P2, 'p2-exponentials-and-logarithms-edexcel-alevel-maths', 'P2.5', [
      { n: 1, f: 'Key features of the graph of y = aˣ (a > 0, a ≠ 1)', b: 'Passes through (0, 1). Asymptote y = 0. Range y > 0.\nIncreasing if a > 1; decreasing if 0 < a < 1.\naˣ is never zero or negative.' },
      { n: 2, f: 'What does log_a x = y mean?', b: 'It is the same statement as aʸ = x, for a > 0, a ≠ 1 and x > 0.\nSo log_a a = 1 and log_a 1 = 0.' },
      { n: 3, f: 'The three laws of logarithms', b: 'log_a(xy) = log_a x + log_a y\nlog_a(x/y) = log_a x − log_a y\nlog_a(xᵏ) = k log_a x\nTraps: log_a(x + y) is not log_a x + log_a y.' },
      { n: 4, f: 'Solve 5^(2x + 1) = 40', b: '(2x + 1) ln 5 = ln 40\n2x + 1 = ln 40/ln 5 = 2.2920\nx = 0.646 (3 s.f.)' },
      { n: 5, f: 'Change of base formula for logarithms', b: 'log_a b = log_c b / log_c a.\nAlso log_a b = 1/log_b a.\nExample: log₄ 8 = log₂ 8 / log₂ 4 = 3/2.' },
      { n: 6, f: 'Find the smallest whole n with 1.5ⁿ ≥ 100', b: 'n ln 1.5 ≥ ln 100, so n ≥ ln 100/ln 1.5 = 11.36. The smallest whole n is 12.\nWhen the base is between 0 and 1 its log is negative, so dividing by it reverses the inequality.' },
    ]),
    ...sub(P2, 'p2-trigonometry-edexcel-alevel-maths', 'P2.6', [
      { n: 1, f: 'The two identities needed in Unit P2 trigonometry', b: 'tan θ = sin θ / cos θ (cos θ ≠ 0).\nsin²θ + cos²θ = 1, so sin²θ = 1 − cos²θ and cos²θ = 1 − sin²θ.' },
      { n: 2, f: 'Second solutions in 0° to 360° for sin u = k, cos u = k and tan u = k (principal value α)', b: 'sin u = k: α and 180° − α, repeating every 360°.\ncos u = k: α and 360° − α (that is, −α), repeating every 360°.\ntan u = k: α, then add 180° each time.' },
      { n: 3, f: 'Which trig ratios are positive in each quadrant (0° to 360°)?', b: 'First (0° to 90°): all. Second (90° to 180°): sine. Third (180° to 270°): tangent. Fourth (270° to 360°): cosine.' },
      { n: 4, f: 'Solve cos 3x = 1/2 for 0° ≤ x < 180°', b: 'Interval for 3x: 0° ≤ 3x < 540°.\ncos u = 1/2: u = 60°, 300°, 420°.\nx = 20°, 100°, 140°.' },
      { n: 5, f: 'How do you solve an equation like a cos²x + b sin x + c = 0?', b: 'Replace cos²x by 1 − sin²x to get a quadratic in sin x. Factorise, reject any value outside −1 to 1, then find all angles in the interval.' },
      { n: 6, f: 'Why should you factorise rather than divide by sin x when solving sin x = k tan x?', b: 'Dividing by sin x loses the solutions where sin x = 0. Write tan x = sin x/cos x, collect on one side, take out sin x as a factor, then solve each factor.' },
    ]),
    ...sub(P2, 'p2-differentiation-edexcel-alevel-maths', 'P2.7', [
      { n: 1, f: 'Stationary point', b: 'A point where dy/dx = 0. Find the y-coordinate by substituting the x-value back into the curve.' },
      { n: 2, f: 'Classify a stationary point with the second derivative', b: 'd²y/dx² > 0: minimum.\nd²y/dx² < 0: maximum.\nd²y/dx² = 0: inconclusive, so test the sign of dy/dx on each side.' },
      { n: 3, f: 'Classify a stationary point using the sign of dy/dx on each side', b: '− then +: minimum.\n+ then −: maximum.\nSame sign on both sides: point of inflection.' },
      { n: 4, f: 'Increasing and decreasing functions', b: 'f is increasing where f′(x) > 0 and decreasing where f′(x) < 0.' },
      { n: 5, f: 'Find and classify the stationary points of y = x³ + 3x² − 24x + 1', b: 'dy/dx = 3x² + 6x − 24 = 3(x + 4)(x − 2).\nx = 2: y = −27, d²y/dx² = 6x + 6 = 18 > 0, minimum (2, −27).\nx = −4: y = 81, d²y/dx² = −18 < 0, maximum (−4, 81).' },
      { n: 6, f: 'How do you solve an optimisation problem?', b: '1. Write the quantity to optimise.\n2. Use the constraint to leave one variable.\n3. Differentiate and set equal to zero.\n4. Prove it is a maximum or minimum.\n5. Answer in the words of the question, with units.' },
    ]),
    ...sub(P2, 'p2-integration-edexcel-alevel-maths', 'P2.8', [
      { n: 1, f: 'Evaluating a definite integral', b: '∫ from a to b of f(x) dx = F(b) − F(a), where F is an antiderivative. No constant is needed.' },
      { n: 2, f: 'Area between a curve and the x-axis when part of the curve is below the axis', b: 'A definite integral is signed: a region below the axis gives a negative value. Split the integral at each root, find each part, make every part positive, then add.' },
      { n: 3, f: 'Area enclosed between two graphs', b: 'Find the intersections, decide which graph is higher, then integrate (upper − lower) between the intersections. Split wherever the graphs cross.' },
      { n: 4, f: 'Find the area enclosed by y = x² and y = 4x + 5', b: 'x² = 4x + 5 gives x = −1 or 5.\n∫ from −1 to 5 of (4x + 5 − x²) dx = [2x² + 5x − x³/3] = 100/3 − (−8/3) = 36.' },
      { n: 5, f: 'The trapezium rule', b: 'Area ≈ (h/2)[y₀ + yₙ + 2(y₁ + … + yₙ₋₁)], where h = (b − a)/n.\nn strips need n + 1 y-values.' },
      { n: 6, f: 'When does the trapezium rule over-estimate, and how can it be improved?', b: 'It over-estimates when the curve bends upwards (the chords lie above the curve) and under-estimates when it bends downwards. More strips (smaller h) give a better estimate.' },
    ]),

    // Unit P3: Pure Mathematics 3
    ...sub(P3, 'p3-algebra-and-functions-edexcel-alevel-maths', 'P3.1', [
      { n: 1, f: 'One-one and many-one functions, and which ones have an inverse', b: 'One-one: each output comes from exactly one input. Many-one: two or more inputs give the same output.\nOnly a one-one function has an inverse, so a many-one function needs its domain restricted first.' },
      { n: 2, f: 'What does fg(x) mean?', b: 'fg(x) = f(g(x)): apply g first, then f. In general fg ≠ gf.' },
      { n: 3, f: 'How do you find f⁻¹(x), and how are f and f⁻¹ related?', b: 'Put y = f(x), rearrange for x, then rename y as x.\nDomain of f⁻¹ = range of f; range of f⁻¹ = domain of f.\nThe graph of f⁻¹ is the reflection of f in y = x.' },
      { n: 4, f: 'y = |f(x)| compared with y = f(|x|)', b: 'y = |f(x)|: reflect every part below the x-axis in the x-axis.\ny = f(|x|): keep the part for x ≥ 0, delete x < 0, and reflect the kept part in the y-axis.' },
      { n: 5, f: 'Solve |2x + 1| = 5', b: '2x + 1 = 5 gives x = 2; 2x + 1 = −5 gives x = −3. Both check in the original. When the other side is not a constant, test every answer in the original equation.' },
      { n: 6, f: 'Divide 2x² + x − 1 by x + 2', b: '2x² + x − 1 = (x + 2)(2x − 3) + 5, so\n(2x² + x − 1)/(x + 2) = 2x − 3 + 5/(x + 2).' },
    ]),
    ...sub(P3, 'p3-trigonometry-edexcel-alevel-maths', 'P3.2', [
      { n: 1, f: 'Define sec θ, cosec θ and cot θ', b: 'sec θ = 1/cos θ\ncosec θ = 1/sin θ\ncot θ = 1/tan θ = cos θ/sin θ' },
      { n: 2, f: 'Ranges (outputs) of arcsin x, arccos x and arctan x in radians', b: 'arcsin x: −π/2 ≤ y ≤ π/2 (input −1 to 1).\narccos x: 0 ≤ y ≤ π (input −1 to 1).\narctan x: −π/2 < y < π/2 (any real input).' },
      { n: 3, f: 'Identities linking sec² with tan², and cosec² with cot²', b: 'sec²θ ≡ 1 + tan²θ\ncosec²θ ≡ 1 + cot²θ\nBoth come from dividing sin²θ + cos²θ ≡ 1 by cos²θ or by sin²θ.' },
      { n: 4, f: 'Compound angle formulae for sin(A ± B), cos(A ± B) and tan(A ± B)', b: 'sin(A ± B) ≡ sin A cos B ± cos A sin B (signs match).\ncos(A ± B) ≡ cos A cos B ∓ sin A sin B (signs opposite).\ntan(A ± B) ≡ (tan A ± tan B)/(1 ∓ tan A tan B).' },
      { n: 5, f: 'Double angle formulae', b: 'sin 2A ≡ 2 sin A cos A\ncos 2A ≡ cos²A − sin²A ≡ 2cos²A − 1 ≡ 1 − 2sin²A\ntan 2A ≡ 2 tan A/(1 − tan²A)' },
      { n: 6, f: 'How do you write a cos θ + b sin θ in the form R cos(θ − α)?', b: 'Expand: R cos α = a and R sin α = b. Then R = √(a² + b²) and tan α = b/a (α acute when a, b > 0).\nGreatest value R, least value −R.\nExample: √3 cos θ + sin θ = 2 cos(θ − π/6).' },
    ]),
    ...sub(P3, 'p3-exponentials-and-logarithms-edexcel-alevel-maths', 'P3.3', [
      { n: 1, f: 'Key features of y = eˣ and y = ln x', b: 'y = eˣ: through (0, 1), range y > 0, asymptote y = 0, increasing.\ny = ln x: through (1, 0), domain x > 0, asymptote x = 0.\nEach is the reflection of the other in y = x.' },
      { n: 2, f: 'Inverse relations between eˣ and ln x', b: 'e^(ln x) = x for x > 0.\nln(eˣ) = x for all x.' },
      { n: 3, f: 'Solve e^(4 − 3x) = 9 exactly, then to 3 s.f.', b: '4 − 3x = ln 9, so x = (4 − ln 9)/3 = 0.601 (3 s.f.).' },
      { n: 4, f: 'Asymptote and y-intercept of y = e^(ax + b) + c', b: 'Asymptote y = c. y-intercept (0, eᵇ + c). The curve is increasing if a > 0 and decreasing if a < 0.' },
      { n: 5, f: 'How do you turn y = axⁿ into a straight-line graph?', b: 'Take logs: log y = n log x + log a.\nPlot log y against log x: gradient n, intercept log a, so a = 10^(intercept) with base-10 logs.' },
      { n: 6, f: 'How do you turn y = kbˣ into a straight-line graph?', b: 'Take logs: log y = (log b)x + log k.\nPlot log y against x (not log x): gradient log b, intercept log k.' },
    ]),
    ...sub(P3, 'p3-differentiation-edexcel-alevel-maths', 'P3.4', [
      { n: 1, f: 'Derivatives of eᵏˣ, ln kx, sin kx, cos kx, tan kx and aˣ (x in radians)', b: 'eᵏˣ → keᵏˣ\nln kx → 1/x\nsin kx → k cos kx\ncos kx → −k sin kx\ntan kx → k sec² kx\naˣ → aˣ ln a (not xaˣ⁻¹)' },
      { n: 2, f: 'Derivatives of sec x, cosec x and cot x', b: 'sec x → sec x tan x\ncosec x → −cosec x cot x\ncot x → −cosec²x' },
      { n: 3, f: 'The product rule', b: 'If y = uv, then dy/dx = u′v + uv′.\nExample: y = x² cos 3x gives dy/dx = 2x cos 3x − 3x² sin 3x.' },
      { n: 4, f: 'The quotient rule', b: 'If y = u/v, then dy/dx = (vu′ − uv′)/v².' },
      { n: 5, f: 'The chain rule', b: 'dy/dx = (dy/du) × (du/dx).\nExamples: d/dx e^f(x) = f′(x)e^f(x); d/dx ln f(x) = f′(x)/f(x); d/dx (f(x))ⁿ = n(f(x))ⁿ⁻¹ f′(x).' },
      { n: 6, f: 'How do you find dy/dx when x is given in terms of y?', b: 'Use dy/dx = 1/(dx/dy).\nExample: x = y³ + 2y gives dx/dy = 3y² + 2, so dy/dx = 1/(3y² + 2).' },
    ]),
    ...sub(P3, 'p3-integration-edexcel-alevel-maths', 'P3.5', [
      { n: 1, f: 'Integrals of eᵏˣ, 1/x, sin kx and cos kx', b: '∫ eᵏˣ dx = (1/k)eᵏˣ + c\n∫ 1/x dx = ln|x| + c\n∫ sin kx dx = −(1/k) cos kx + c\n∫ cos kx dx = (1/k) sin kx + c' },
      { n: 2, f: 'Integrate f′(x)/f(x)', b: '∫ f′(x)/f(x) dx = ln|f(x)| + c. The numerator must be the derivative of the denominator, or a constant multiple of it.' },
      { n: 3, f: 'Find ∫ 5/(2x + 1) dx', b: 'The derivative of 2x + 1 is 2, so write 5/(2x + 1) = (5/2) × 2/(2x + 1).\nAnswer: (5/2) ln|2x + 1| + c.' },
      { n: 4, f: 'Integrals of tan x and sec² kx', b: '∫ tan x dx = −ln|cos x| + c = ln|sec x| + c.\n∫ sec² kx dx = (1/k) tan kx + c.' },
      { n: 5, f: 'How do you integrate sin²x and cos²x?', b: 'Use the double angle identities first:\nsin²x = ½(1 − cos 2x), cos²x = ½(1 + cos 2x).\nSo ∫ sin²x dx = x/2 − (sin 2x)/4 + c and ∫ cos²x dx = x/2 + (sin 2x)/4 + c.' },
      { n: 6, f: 'Evaluate ∫ from 0 to π/16 of sec² 4x dx', b: '[(1/4) tan 4x] from 0 to π/16 = (1/4) tan(π/4) − 0 = 1/4.' },
    ]),
    ...sub(P3, 'p3-numerical-methods-edexcel-alevel-maths', 'P3.6', [
      { n: 1, f: 'How do you show that f(x) = 0 has a root between a and b?', b: 'Calculate f(a) and f(b). State that f is continuous on [a, b]. If f(a) and f(b) have opposite signs, there is a root between a and b.' },
      { n: 2, f: 'When can a change of sign mislead you?', b: 'A vertical asymptote (such as tan x between 1 and 2) can give a sign change with no root.\nA repeated root touches the axis without a sign change.\nTwo roots in one interval give the same sign at both ends.' },
      { n: 3, f: 'How do you justify that a root is 2.543 to 3 decimal places?', b: 'Show that f(2.5425) and f(2.5435) have opposite signs, and state that f is continuous, so the root lies in [2.5425, 2.5435).' },
      { n: 4, f: 'Iteration xₙ₊₁ = g(xₙ): what does the limit of the sequence tell you?', b: 'If the terms converge to α, then α = g(α), so α is a root of x = g(x), the rearranged equation. Carry full accuracy between steps and stop when terms agree to the accuracy needed.' },
      { n: 5, f: 'What does a staircase or cobweb diagram show?', b: 'It is drawn with y = g(x) and y = x. The steps show whether successive iterates move towards the root (convergence) or away from it (divergence) for that rearrangement and starting value.' },
    ]),

    // Unit P4: Pure Mathematics 4
    ...sub(P4, 'p4-proof-edexcel-alevel-maths', 'P4.1', [
      { n: 1, f: 'Proof by contradiction: the four steps', b: '1. Assume the opposite of the statement.\n2. Make valid deductions.\n3. Reach something impossible.\n4. Conclude the assumption is false, so the statement is true.' },
      { n: 2, f: 'Opening assumption when proving √2 is irrational', b: 'Assume √2 is rational, so √2 = p/q with p and q integers having no common factor (lowest terms). Then p² = 2q², so p is even; then q is even too, contradicting lowest terms.' },
      { n: 3, f: 'Outline the proof that there are infinitely many primes', b: 'Assume there is a finite list of all the primes. Let N = (product of all of them) + 1. N leaves remainder 1 on division by every listed prime, so it has a prime factor not on the list. Contradiction.' },
      { n: 4, f: 'Key fact used when proving a square root is irrational', b: 'n² is even if and only if n is even. More generally, if a prime p divides n², then p divides n.' },
      { n: 5, f: 'Why is the product of a non-zero rational r and an irrational s irrational?', b: 'Assume rs = a/b is rational, with r = c/d and c ≠ 0. Then s = ad/(bc), a ratio of integers, so s would be rational. This contradicts s being irrational.' },
    ]),
    ...sub(P4, 'p4-algebra-and-functions-edexcel-alevel-maths', 'P4.2', [
      { n: 1, f: 'Partial fraction form for a denominator (ax + b)(cx + d)', b: 'A/(ax + b) + B/(cx + d).\nThree distinct linear factors give three such terms.' },
      { n: 2, f: 'Partial fraction form for a denominator (ax + b)(cx + d)²', b: 'A/(ax + b) + B/(cx + d) + C/(cx + d)².\nA repeated factor needs a term for each power.' },
      { n: 3, f: 'What must you do first if the numerator degree is at least the denominator degree?', b: 'Divide first, to get a polynomial plus a proper fraction, then split the proper fraction into partial fractions.' },
      { n: 4, f: 'Express (13x + 5)/((x + 2)(3x − 1)) in partial fractions', b: '13x + 5 = A(3x − 1) + B(x + 2).\nx = −2: −21 = −7A, A = 3.\nx = 1/3: 28/3 = 7B/3, B = 4.\nResult: 3/(x + 2) + 4/(3x − 1).' },
      { n: 5, f: 'Quick way to find partial fraction constants', b: 'Multiply through by the whole denominator, then substitute the root of each factor to get one constant at a time. For a repeated factor, compare coefficients (such as x²) for the last one. A constant of 0 is a valid answer.' },
    ]),
    ...sub(P4, 'p4-coordinate-geometry-edexcel-alevel-maths', 'P4.3', [
      { n: 1, f: 'Parametric equations', b: 'x = f(t) and y = g(t), with both coordinates given in terms of a parameter t. Eliminating t gives the cartesian equation.' },
      { n: 2, f: 'How do you convert trig parametric equations to cartesian form?', b: 'Write sin t and cos t (or tan t and sec t) in terms of x and y, then use sin²t + cos²t = 1 or 1 + tan²t = sec²t. If the angles are t and 2t, use a double angle formula first.' },
      { n: 3, f: 'Find the cartesian equation of x = sin t, y = cos²t', b: 'cos²t = 1 − sin²t, so y = 1 − x².\nBecause x = sin t, the curve is only the part with −1 ≤ x ≤ 1.' },
      { n: 4, f: 'Find the cartesian equation of x = 1/t, y = t² + t (t > 0)', b: 't = 1/x, so y = 1/x² + 1/x, for x > 0 (since t > 0).' },
    ]),
    ...sub(P4, 'p4-binomial-expansion-edexcel-alevel-maths', 'P4.4', [
      { n: 1, f: 'The binomial series for (1 + x)ⁿ, n any rational number', b: '(1 + x)ⁿ = 1 + nx + n(n − 1)x²/2! + n(n − 1)(n − 2)x³/3! + …\nValid for |x| < 1 when n is not a positive integer. For a positive integer n it stops and is valid for all x.' },
      { n: 2, f: 'How do you expand (a + bx)ⁿ for a negative or fractional n?', b: 'Take out aⁿ: (a + bx)ⁿ = aⁿ(1 + (b/a)x)ⁿ. Expand with u = (b/a)x, then multiply by aⁿ.\nValid for |bx/a| < 1, that is |x| < |a/b|.' },
      { n: 3, f: 'Expansion of (1 + x)⁻¹ and of (1 + x)^(1/2) up to x³', b: '(1 + x)⁻¹ = 1 − x + x² − x³ + …\n(1 + x)^(1/2) = 1 + x/2 − x²/8 + x³/16 − …\nBoth valid for |x| < 1.' },
      { n: 4, f: 'Expand (2 − 3x)⁻² up to x² and state the validity', b: '2⁻²(1 − 3x/2)⁻² = ¼(1 + 3x + 27x²/4 + …)\n= 1/4 + 3x/4 + 27x²/16.\nValid for |3x/2| < 1, so |x| < 2/3.' },
      { n: 5, f: 'Range of validity when a rational function is expanded using partial fractions', b: 'Expand each partial fraction separately and add. The whole series is valid only where every part is valid: take the narrowest range.' },
    ]),
    ...sub(P4, 'p4-differentiation-edexcel-alevel-maths', 'P4.5', [
      { n: 1, f: 'Implicit differentiation: d/dx of f(y), and of xy', b: 'd/dx [f(y)] = f′(y) dy/dx, for example d/dx (y³) = 3y² dy/dx.\nd/dx (xy) = y + x dy/dx (product rule).' },
      { n: 2, f: 'Find the gradient of y³ + 2xy = 12 at (1, 2)', b: '3y² dy/dx + 2y + 2x dy/dx = 0, so dy/dx = −2y/(2x + 3y²).\nAt (1, 2): −4/14 = −2/7.' },
      { n: 3, f: 'Gradient of a parametric curve', b: 'dy/dx = (dy/dt) ÷ (dx/dt).\nHorizontal tangent where dy/dt = 0; vertical tangent where dx/dt = 0.' },
      { n: 4, f: 'Connected rates of change: the chain rule link', b: 'dy/dt = (dy/dx) × (dx/dt).\nExample: A = πr², so dA/dt = 2πr × dr/dt. With r = 7 and dr/dt = 0.4 cm s⁻¹, dA/dt = 5.6π cm² s⁻¹.' },
      { n: 5, f: 'Form a differential equation: "the rate of decrease of h is proportional to √h"', b: 'dh/dt = −k√h, with k > 0. A decreasing quantity needs the minus sign.' },
    ]),
    ...sub(P4, 'p4-integration-edexcel-alevel-maths', 'P4.6', [
      { n: 1, f: 'Integration by substitution: the steps', b: '1. Choose u and find du/dx; rewrite dx.\n2. Replace every x (solve for x if needed).\n3. For a definite integral, change the limits to u-values.\n4. Integrate, then substitute back if indefinite.' },
      { n: 2, f: 'The integration by parts formula, and how to choose u', b: '∫ u (dv/dx) dx = uv − ∫ v (du/dx) dx.\nChoose u to simplify when differentiated: u = x for x eᵏˣ, x sin kx or x cos kx; u = ln x for xⁿ ln x.' },
      { n: 3, f: 'Evaluate ∫ from 0 to 1 of x e^(3x) dx', b: '[⅓x e^(3x) − ⅑e^(3x)] from 0 to 1\n= (⅓e³ − ⅑e³) − (0 − ⅑)\n= (2e³ + 1)/9.' },
      { n: 4, f: 'Volume of revolution about the x-axis', b: 'V = π ∫ y² dx between x-limits (rotation through 360°).\nExample: y = x + 1 from 0 to 2: V = π[(x + 1)³/3] = π(27/3 − 1/3) = 26π/3.' },
      { n: 5, f: 'Area and volume for a parametric curve', b: 'Area = ∫ y (dx/dt) dt.\nVolume about the x-axis = π ∫ y² (dx/dt) dt.\nConvert the limits to values of t first.' },
      { n: 6, f: 'Solving a separable differential equation dy/dx = f(x)g(y)', b: 'Separate: ∫ 1/g(y) dy = ∫ f(x) dx, with one constant, then use given values to find it.\nExample: dy/dx = 3y, y = 2 at x = 0: ln y = 3x + c, so y = Ae^(3x) and A = 2, giving y = 2e^(3x). Note ln y = x + c gives y = Aeˣ, not eˣ + c.' },
    ]),
    ...sub(P4, 'p4-vectors-edexcel-alevel-maths', 'P4.7', [
      { n: 1, f: 'Magnitude of a = a₁i + a₂j + a₃k, and the unit vector in its direction', b: '|a| = √(a₁² + a₂² + a₃²).\nUnit vector â = a/|a|. Example: v = i − 2j + 2k has |v| = 3, so v̂ = (i − 2j + 2k)/3.' },
      { n: 2, f: 'Vector from A to B in terms of position vectors', b: 'AB = OB − OA = b − a: "end minus start". Writing a − b gives BA.' },
      { n: 3, f: 'Vector equation of a line', b: 'r = a + tb, where a is the position vector of a point on the line and b is a direction vector.\nThrough points C and D: r = c + t(d − c).' },
      { n: 4, f: 'The scalar product and the angle between two vectors', b: 'a·b = a₁b₁ + a₂b₂ + a₃b₃, and cos θ = (a·b)/(|a||b|).\nFor non-zero vectors, a·b = 0 means perpendicular.\nFor the angle between two lines use only the direction vectors, and give the acute angle.' },
      { n: 5, f: 'Find the angle between i − 2j + 2k and 2i + 3j + 6k', b: 'Scalar product = 2 − 6 + 12 = 8. Magnitudes 3 and 7.\ncos θ = 8/21, θ = 67.6° (1 d.p.).' },
      { n: 6, f: 'How do you decide whether two lines in 3D are parallel, intersecting or skew?', b: '1. Directions are multiples: parallel.\n2. Otherwise use different parameters, equate components, solve two equations and test the third.\n3. Third holds: they intersect. Third fails: skew.' },
    ]),

    // Unit M1: Mechanics 1
    ...sub(M1, 'm1-mathematical-models-in-mechanics-edexcel-alevel-maths', 'M1.1', [
      { n: 1, f: 'Modelling assumption: particle', b: 'The object is treated as a mass at a single point, so its size and any rotation are ignored.' },
      { n: 2, f: 'Modelling assumptions: light, and inextensible (for a string)', b: 'Light: negligible mass, so the tension is the same all along the string.\nInextensible: does not stretch, so connected objects have the same speed and the same size of acceleration.' },
      { n: 3, f: 'Modelling assumptions: smooth and rough surfaces', b: 'Smooth: no friction.\nRough: friction can act, opposing motion.' },
      { n: 4, f: 'Modelling assumptions: lamina, rigid body, rod and uniform', b: 'Lamina: flat, negligible thickness.\nRigid body: does not bend or deform.\nRod: thin and rigid, one-dimensional.\nUniform: mass spread evenly, so the weight acts at the middle.' },
      { n: 5, f: 'Light smooth pulley: what can you assume?', b: 'It has no mass and no friction, so the tension in the string is the same on both sides of the pulley.' },
      { n: 6, f: 'How should you state a modelling assumption in an answer?', b: 'Pair the assumption with its effect, for example "the string is inextensible, so both particles have the same acceleration". Also state "air resistance ignored" or "g constant" where relevant.' },
    ]),
    ...sub(M1, 'm1-vectors-in-mechanics-edexcel-alevel-maths', 'M1.2', [
      { n: 1, f: 'Magnitude and direction of the vector ai + bj', b: 'Magnitude √(a² + b²).\nAngle with i: tan θ = b/a, then place it in the right quadrant from the signs.' },
      { n: 2, f: 'Resolve a vector of magnitude R at angle θ above the horizontal', b: 'R cos θ i + R sin θ j: adjacent side R cos θ, opposite side R sin θ.' },
      { n: 3, f: 'Find the resultant of (6i + 2j), (−3i + 7j) and (4i − j), and its magnitude', b: 'Add components: 7i + 8j.\nMagnitude √(49 + 64) = √113 = 10.6 (3 s.f.).' },
      { n: 4, f: 'Position vector of a particle moving with constant velocity v', b: 'r = r₀ + vt, where r₀ is the position at t = 0.' },
      { n: 5, f: 'A particle is due north of O at some time. What does that tell you?', b: 'With i east and j north, its i-component is zero at that time. Solve for t, then find the j-component. "Due east" means the j-component is zero.' },
      { n: 6, f: 'Speed compared with velocity', b: 'Velocity is a vector (size and direction). Speed is its magnitude: for v = pi + qj, speed = √(p² + q²).' },
    ]),
    ...sub(M1, 'm1-kinematics-straight-line-edexcel-alevel-maths', 'M1.3', [
      { n: 1, f: 'The five constant acceleration (suvat) equations', b: 'v = u + at\ns = ut + ½at²\ns = vt − ½at²\nv² = u² + 2as\ns = ½(u + v)t\nThey apply only when acceleration is constant.' },
      { n: 2, f: 'How do you choose which suvat equation to use?', b: 'List s, u, v, a, t. Note the three you know and the one you want, then choose the equation that leaves out the fifth one.' },
      { n: 3, f: 'Vertical motion under gravity: value and sign of a', b: 'a = −9.8 m s⁻² if up is positive, or +9.8 if down is positive. Keep to one choice. At the highest point v = 0.' },
      { n: 4, f: 'Velocity-time graph: what do the gradient and the area give?', b: 'Gradient: acceleration.\nArea under the graph: displacement. Area below the axis is negative displacement; count it as positive for distance.' },
      { n: 5, f: 'A car slows uniformly from 28 to 12 m s⁻¹ in 5 s. Find its acceleration and the distance.', b: 'a = (12 − 28)/5 = −3.2 m s⁻².\ns = ½(28 + 12)(5) = 100 m.' },
      { n: 6, f: 'A ball lands below its start point. How do you find the time?', b: 'Use s = ut + ½at² with s negative (taking up as positive). This gives a quadratic in t. Reject the negative root.' },
    ]),
    ...sub(M1, 'm1-dynamics-edexcel-alevel-maths', 'M1.4', [
      { n: 1, f: 'Newton\'s second law, weight, and friction on a sliding particle', b: 'Resultant force = mass × acceleration: F = ma.\nWeight W = mg, vertically downwards.\nFriction on a sliding particle: F = μR, along the surface, opposing the motion.' },
      { n: 2, f: 'Particle on a plane inclined at α: components of weight, and acceleration sliding down a rough plane', b: 'mg sin α down the slope, mg cos α into it, so R = mg cos α when nothing else acts perpendicular to the plane.\nSliding down a rough plane: a = g(sin α − μ cos α).' },
      { n: 3, f: 'Connected particles over a smooth pulley: method', b: 'Draw each particle with its own forces. Write one F = ma equation for each, taking its direction of motion as positive. Add the equations to remove T, find a, then substitute back for T.' },
      { n: 4, f: 'Masses 5 kg and 3 kg hang over a smooth pulley. Find a and T (g = 9.8).', b: '5g − T = 5a and T − 3g = 3a. Adding: 2g = 8a, so a = 2.45 m s⁻².\nT = 3(g + a) = 36.75 N.' },
      { n: 5, f: 'Momentum, impulse and conservation of momentum', b: 'Momentum = mv (N s). Impulse = mv − mu = Ft for a constant force.\nDirect collision: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂, with signed velocities. If the particles join, use one common velocity.' },
      { n: 6, f: 'A 0.2 kg ball at 6.5 m s⁻¹ is hit straight back at 2 m s⁻¹. Find the impulse.', b: 'Original direction positive: I = 0.2(−2) − 0.2(6.5) = −1.7.\nMagnitude 1.7 N s, opposite to the original motion.' },
    ]),
    ...sub(M1, 'm1-statics-of-a-particle-edexcel-alevel-maths', 'M1.5', [
      { n: 1, f: 'Condition for a particle to be in equilibrium, and the method', b: 'The resultant force is zero. Resolve in two perpendicular directions and set each total to zero.' },
      { n: 2, f: 'Components of a force F at angle θ to the vertical', b: 'Vertical component F cos θ; horizontal component F sin θ.\n(At θ above the horizontal it is the other way round: horizontal F cos θ, vertical F sin θ.)' },
      { n: 3, f: 'Friction on a particle at rest compared with limiting equilibrium', b: 'At rest: F ≤ μR, and F is whatever balances the other forces.\nOn the point of slipping (limiting): F = μR.' },
      { n: 4, f: 'A block of weight 80 N stays at rest under a horizontal pull of 25 N. What can you say about μ?', b: 'R = 80 N and F = 25 N. Since F ≤ μR, 25 ≤ 80μ, so μ ≥ 0.3125. The friction force is 25 N.' },
      { n: 5, f: 'Tension compared with thrust', b: 'Tension pulls along a string or rod. Thrust pushes along a rod. A string can only pull; a rod can do either.' },
      { n: 6, f: 'How does a pull at an angle above the horizontal affect the normal reaction?', b: 'Its upward component reduces R (R = mg − P sin θ), which reduces the friction available. A downward component increases R.' },
    ]),
    ...sub(M1, 'm1-moments-edexcel-alevel-maths', 'M1.6', [
      { n: 1, f: 'Moment of a force about a point', b: 'Force × perpendicular distance from the point to the line of action of the force. Unit N m. State the sense: clockwise or anticlockwise.' },
      { n: 2, f: 'Conditions for a rigid body (such as a rod) to be in equilibrium', b: 'The forces balance (resultant force zero), and clockwise moments equal anticlockwise moments about any point.' },
      { n: 3, f: 'A beam rests on two supports and is about to tilt about one of them. What do you use?', b: 'The reaction at the other support is zero. Take moments about the support it is tilting about.' },
      { n: 4, f: 'Where does the weight act for a light, a uniform and a non-uniform rod?', b: 'Light: no weight. Uniform: at the midpoint. Non-uniform: at the centre of mass given (or to be found).' },
      { n: 5, f: 'A light rod of length 3 m rests on supports at its ends A and B, with 45 N at 1 m from A. Find the reactions.', b: 'Moments about B: R_A × 3 = 45 × 2, so R_A = 30 N.\nResolving vertically: R_B = 45 − 30 = 15 N.' },
    ]),

    // Unit M2: Mechanics 2
    ...sub(M2, 'm2-kinematics-edexcel-alevel-maths', 'M2.1', [
      { n: 1, f: 'Projectile launched at speed U, angle α above the horizontal: velocity and displacement components', b: 'Horizontal: velocity U cos α, displacement (U cos α)t.\nVertical (up positive): velocity U sin α − gt, displacement (U sin α)t − ½gt².' },
      { n: 2, f: 'Time of flight, range and greatest height on level ground', b: 'Time of flight T = 2U sin α/g.\nRange = (U cos α)T.\nGreatest height H = (U sin α)²/(2g), reached at T/2.' },
      { n: 3, f: 'A particle is launched horizontally at 15 m s⁻¹ from 19.6 m above level ground. Find the time and the horizontal distance (g = 9.8).', b: '19.6 = 4.9t², so t = 2 s.\nHorizontal distance = 15 × 2 = 30 m.' },
      { n: 4, f: 'Variable acceleration: how are x, v and a linked by calculus?', b: 'v = dx/dt, a = dv/dt.\nx = ∫ v dt and v = ∫ a dt, each with a constant found from a given condition. suvat does not apply.\nVelocity is greatest or least when a = 0.' },
      { n: 5, f: 'How do you find the distance travelled when v changes sign?', b: 'Solve v = 0 to find the turning times, find x at the start, at each turning time and at the end, and add the sizes of the changes. A single definite integral of v gives only displacement.' },
      { n: 6, f: 'r = 2t³ i − 5t j. Find v, a and the speed at t = 1.', b: 'v = 6t² i − 5j, a = 12t i.\nAt t = 1: v = 6i − 5j, speed √(36 + 25) = √61 = 7.81 (3 s.f.).' },
    ]),
    ...sub(M2, 'm2-centres-of-mass-edexcel-alevel-maths', 'M2.2', [
      { n: 1, f: 'Centre of mass of a system of particles', b: 'x̄ = Σ(mx)/Σm and ȳ = Σ(my)/Σm.' },
      { n: 2, f: 'Centre of mass of a composite uniform lamina', b: 'Use areas in place of masses: x̄ = Σ(Ax)/ΣA. A hole counts as a negative area. Measure every coordinate from the same origin.' },
      { n: 3, f: 'Centre of mass of a uniform triangular lamina and of a uniform semicircular lamina', b: 'Triangle: on a median, one third of the way from the side to the opposite vertex.\nSemicircle of radius r: on the axis of symmetry, 4r/(3π) from the diameter.' },
      { n: 4, f: 'Centre of mass of a uniform sector of radius r and half-angle α', b: 'On the axis of symmetry, 2r sin α/(3α) from the centre (α in radians).' },
      { n: 5, f: 'A lamina hangs freely from a point. Where is its centre of mass?', b: 'Directly below the point of suspension. Use the right-angled triangle formed by the suspension point, G and an edge to find the angle asked for.' },
      { n: 6, f: 'Body on a rough slope: conditions for sliding and for toppling', b: 'Slips when tan α > μ.\nTopples when the vertical through G passes beyond the lowest point of contact, at tan α = (half the base)/(height of G).\nWhichever angle is smaller happens first.' },
    ]),
    ...sub(M2, 'm2-work-and-energy-edexcel-alevel-maths', 'M2.3', [
      { n: 1, f: 'Kinetic energy and gravitational potential energy', b: 'KE = ½mv² (J).\nGPE = mgh (J), where h is the vertical height above a chosen zero level. Moving a distance d up a slope at angle α raises it by d sin α.' },
      { n: 2, f: 'Work done by a constant force', b: 'Work = Fd cos θ, where θ is the angle between the force and the direction of motion. A force at right angles to the motion (such as a normal reaction) does no work.' },
      { n: 3, f: 'The work-energy principle', b: 'Initial energy + work done by driving forces − work done against resistances = final energy.' },
      { n: 4, f: 'Power', b: 'Power is the rate of doing work, in watts. For a vehicle, P = Fv, where F is the driving force and v the speed.' },
      { n: 5, f: 'A lorry with engine power 30 kW has resistance 1500 N on level ground. Find its maximum speed.', b: 'At maximum speed a = 0, so driving force = resistance = 1500 N.\nv = P/F = 30 000/1500 = 20 m s⁻¹.' },
      { n: 6, f: 'A 1200 kg car at 20 m s⁻¹ coasts against a constant 400 N resistance. How far does it go before stopping?', b: 'Work-energy: ½ × 1200 × 20² = 400d, so 240 000 = 400d and d = 600 m.' },
    ]),
    ...sub(M2, 'm2-collisions-edexcel-alevel-maths', 'M2.4', [
      { n: 1, f: "Newton's law of restitution", b: 'Speed of separation = e × speed of approach, with 0 ≤ e ≤ 1.\nFor particle 1 behind particle 2: v₂ − v₁ = e(u₁ − u₂).' },
      { n: 2, f: 'What do e = 1 and e = 0 mean?', b: 'e = 1: no loss of mechanical energy (perfectly elastic).\ne = 0: the particles move on together after impact.\n0 < e < 1: some kinetic energy is lost.' },
      { n: 3, f: 'A (1 kg, 6 m s⁻¹) hits B (2 kg, at rest) with e = 0.5. Find the speeds after.', b: 'Momentum: v_A + 2v_B = 6.\nRestitution: v_B − v_A = 0.5 × 6 = 3.\nAdding: 3v_B = 9, so v_B = 3 m s⁻¹ and v_A = 0.' },
      { n: 4, f: 'Direct impact with a fixed wall', b: 'Speed after = e × speed before, with the direction reversed. Momentum of the particle is not conserved, because the wall gives an impulse. A ball dropped from height h rebounds to e²h.' },
      { n: 5, f: 'Kinetic energy and momentum in a collision between two particles', b: 'Momentum is conserved whatever e is (no external impulse along the line). Kinetic energy is conserved only when e = 1. Loss of KE = KE before − KE after, always ≥ 0.' },
      { n: 6, f: 'Successive impacts: how do you decide whether there is another collision?', b: 'After each impact update every velocity. If the particle behind is moving faster in the same direction as the one in front (or they are moving towards each other), they collide again.' },
    ]),
    ...sub(M2, 'm2-statics-of-rigid-bodies-edexcel-alevel-maths', 'M2.5', [
      { n: 1, f: 'Conditions for a rigid body to be in equilibrium', b: 'The resultant force is zero (resolve in two directions) and the sum of the moments about any point is zero.' },
      { n: 2, f: 'Moment of a force F at angle θ to a rod, acting a distance d along the rod from the pivot', b: 'Moment = F d sin θ (force × perpendicular distance).' },
      { n: 3, f: 'Ladder resting against a smooth wall on rough ground: method', b: 'Forces: weight at the centre of mass, wall reaction S (horizontal), ground reaction R (vertical), friction F at the foot. Resolve: F = S and R = total weight. Take moments about the foot. Then F ≤ μR.' },
      { n: 4, f: 'A uniform ladder rests at 50° to rough ground against a smooth wall. Find the least μ.', b: 'Moments about the foot: S L sin 50° = W (L/2) cos 50°, so S = W/(2 tan 50°) = 0.420W.\nF = S and R = W, so μ ≥ 0.420 (3 s.f.).' },
      { n: 5, f: 'Smooth wall compared with rough wall', b: 'A smooth wall gives only a reaction perpendicular to the wall. A rough wall also gives friction along the wall, which must be included in the vertical equation.' },
    ]),

    // Unit S1: Statistics 1
    ...sub(S1, 's1-mathematical-models-edexcel-alevel-maths', 'S1.1', [
      { n: 1, f: 'Statistical model', b: 'A simplified mathematical description of a real situation, used to make predictions. A model gives a prediction, never a certainty.' },
      { n: 2, f: 'The stages of the modelling cycle', b: '1. Define the real problem.\n2. Make assumptions to simplify it.\n3. Build the model and predict.\n4. Compare predictions with data.\n5. Revise the assumptions and repeat.' },
      { n: 3, f: 'How do you comment on a statistical model?', b: 'Name an assumption, say why it may fail in this context, and suggest how to improve the model.' },
    ]),
    ...sub(S1, 's1-representation-and-summary-of-data-edexcel-alevel-maths', 'S1.2', [
      { n: 1, f: 'Histogram with unequal class widths', b: 'Unequal widths mean you must use frequency density (frequency ÷ class width) for the bar height. To find a frequency from a bar, multiply height by width.', src: STATS },
      { n: 2, f: 'Box plot', b: 'Whisker ends, Q1, the median and Q3 give the five key values. Outliers are marked separately with a cross; a common rule is more than 1.5 × IQR above Q3 or below Q1.', src: STATS },
      { n: 3, f: 'Comparing two data sets', b: 'Make one point about location and one about spread, with numbers and context.', src: STATS },
      { n: 4, f: 'Variance and standard deviation from a frequency table', b: 'Variance = Σfx²/Σf − (mean)², with mean = Σfx/Σf.\nStandard deviation = √variance. Variance is in squared units.' },
      { n: 5, f: 'Coding y = (x − a)/b: how do you recover the mean and SD of x?', b: 'Mean of x = b × (mean of y) + a.\nSD of x = b × (SD of y). The a does not affect the spread.\nExample: y = (x − 300)/20 with mean 2.5, SD 0.8 gives mean 350, SD 16.' },
      { n: 6, f: 'Positive and negative skew from quartiles and from mean and median', b: 'Positive skew: Q2 − Q1 < Q3 − Q2 and mean > median (tail to the right).\nNegative skew: Q2 − Q1 > Q3 − Q2 and mean < median.\nQuote the numbers that support your choice.' },
    ]),
    ...sub(S1, 's1-probability-edexcel-alevel-maths', 'S1.3', [
      { n: 1, f: 'The addition (sum) law for two events', b: 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B).' },
      { n: 2, f: 'Conditional probability P(B | A)', b: 'P(B | A) = P(A ∩ B)/P(A). Rearranged: P(A ∩ B) = P(A) × P(B | A).' },
      { n: 3, f: 'Mutually exclusive events compared with independent events', b: 'Mutually exclusive: cannot both happen, P(A ∩ B) = 0.\nIndependent: one happening does not change the probability of the other, P(A ∩ B) = P(A)P(B).' },
      { n: 4, f: 'How do you test whether A and B are independent?', b: 'Compare P(A) × P(B) with P(A ∩ B). Equal means independent. Example: P(A) = 0.5, P(B) = 0.4, P(A ∪ B) = 0.8 gives P(A ∩ B) = 0.1, but P(A)P(B) = 0.2, so not independent.' },
      { n: 5, f: 'P(A) = 0.45, P(B) = 0.3 and P(neither) = 0.4. Find P(A ∩ B).', b: 'P(A ∪ B) = 1 − 0.4 = 0.6.\nP(A ∩ B) = 0.45 + 0.3 − 0.6 = 0.15.' },
      { n: 6, f: 'Bag A (probability 0.5) gives red with probability 0.2; bag B (0.5) gives red with 0.6. Find P(bag A | red).', b: 'P(red) = 0.5 × 0.2 + 0.5 × 0.6 = 0.4.\nP(A | red) = 0.1/0.4 = 0.25.' },
    ]),
    ...sub(S1, 's1-correlation-and-regression-edexcel-alevel-maths', 'S1.4', [
      { n: 1, f: 'Formulae for Sxx, Syy and Sxy', b: 'Sxx = Σx² − (Σx)²/n\nSyy = Σy² − (Σy)²/n\nSxy = Σxy − (Σx)(Σy)/n' },
      { n: 2, f: 'The product moment correlation coefficient r', b: 'r = Sxy/√(Sxx Syy), with −1 ≤ r ≤ 1. Near 1: strong positive linear correlation; near −1: strong negative; near 0: no linear relationship.\nCorrelation does not prove causation, and outliers can distort r.' },
      { n: 3, f: 'Least squares regression line of y on x', b: 'y = a + bx, with b = Sxy/Sxx and a = ȳ − b x̄. The line passes through (x̄, ȳ).' },
      { n: 4, f: 'How do you interpret the gradient b of a regression line?', b: 'The change in y for each one-unit increase in x, in context and with units.' },
      { n: 5, f: 'Interpolation compared with extrapolation', b: 'Interpolation (x inside the data range) is reasonably reliable. Extrapolation (outside the range) is unreliable because the pattern may change. Do not use the y on x line to predict x from y.' },
      { n: 6, f: 'How does coding affect r?', b: 'Adding constants or multiplying by positive constants leaves r unchanged. Multiplying one variable by a negative number changes the sign of r.' },
    ]),
    ...sub(S1, 's1-discrete-random-variables-edexcel-alevel-maths', 'S1.5', [
      { n: 1, f: 'Conditions for a valid probability function', b: 'Each p(x) lies between 0 and 1, and Σ p(x) = 1.' },
      { n: 2, f: 'Cumulative distribution function, and P(X ≥ a) for a whole-number variable', b: 'F(x₀) = P(X ≤ x₀).\nP(X ≥ a) = 1 − F(a − 1); P(X > a) = 1 − F(a); P(X < a) = F(a − 1).' },
      { n: 3, f: 'E(X) and Var(X) for a discrete random variable', b: 'E(X) = Σ x p(x).\nE(X²) = Σ x² p(x).\nVar(X) = E(X²) − (E(X))².' },
      { n: 4, f: 'E(aX + b) and Var(aX + b)', b: 'E(aX + b) = aE(X) + b.\nVar(aX + b) = a²Var(X). Adding b does not change the variance.' },
      { n: 5, f: 'X takes 0, 1, 2, 3 with probabilities 0.1, 0.2, 0.4, 0.3. Find E(X) and Var(X).', b: 'E(X) = 0.2 + 0.8 + 0.9 = 1.9.\nE(X²) = 0.2 + 1.6 + 2.7 = 4.5.\nVar(X) = 4.5 − 1.9² = 0.89.' },
      { n: 6, f: 'p(x) = k(x + 1) for x = 0, 1, 2, 3. Find k.', b: 'k(1 + 2 + 3 + 4) = 10k = 1, so k = 1/10.' },
    ]),
    ...sub(S1, 's1-discrete-distributions-edexcel-alevel-maths', 'S1.6', [
      { n: 1, f: 'Discrete uniform distribution on 1, 2, …, n: probability, mean and variance', b: 'P(X = x) = 1/n.\nE(X) = (n + 1)/2.\nVar(X) = (n² − 1)/12.' },
      { n: 2, f: 'When is a discrete uniform model suitable?', b: 'When a variable takes n separate values and each is equally likely, such as the score on a fair die.' },
      { n: 3, f: 'X is uniform on the whole numbers 3 to 8. Find E(X) and Var(X).', b: 'Let Y = X − 2, uniform on 1 to 6: E(Y) = 3.5, Var(Y) = 35/12.\nE(X) = 5.5, Var(X) = 35/12 (a shift does not change the variance).' },
      { n: 4, f: 'X is uniform on 1 to 6 and Y = 3X + 1. Find E(Y) and Var(Y).', b: 'E(X) = 3.5, Var(X) = 35/12.\nE(Y) = 3(3.5) + 1 = 11.5.\nVar(Y) = 9 × 35/12 = 26.25.' },
      { n: 5, f: 'X is uniform on 1 to n and Var(X) = 4. Find n.', b: '(n² − 1)/12 = 4, so n² = 49 and n = 7. Then E(X) = 4.' },
    ]),
    ...sub(S1, 's1-normal-distribution-edexcel-alevel-maths', 'S1.7', [
      { n: 1, f: 'What does X ~ N(μ, σ²) mean, and what shape does it have?', b: 'Normal with mean μ and variance σ² (the second value is the variance, so divide by σ when standardising).\nBell-shaped and symmetric about μ; mean = median = mode = μ; total area 1.' },
      { n: 2, f: 'Standardising, and writing P(Z > z) and P(Z < −z) using Φ', b: 'Z = (X − μ)/σ, with Z ~ N(0, 1), and Φ(z) = P(Z ≤ z).\nFor z > 0: P(Z > z) = 1 − Φ(z), P(Z < −z) = 1 − Φ(z), P(Z > −z) = Φ(z).' },
      { n: 3, f: 'X ~ N(40, 25). Find P(X < 46), given Φ(1.2) = 0.8849.', b: 'σ = 5. z = (46 − 40)/5 = 1.2.\nP(X < 46) = Φ(1.2) = 0.8849.' },
      { n: 4, f: 'How do you find a value k from a probability (inverse normal)?', b: 'Sketch and shade. Write the probability as Φ(z) = p, find z from the table (negative if the left tail is below 0.5), then k = μ + zσ.' },
      { n: 5, f: 'How do you find μ and σ from two probability statements?', b: 'Find the z-value for each, with the correct sign. Write x₁ = μ + z₁σ and x₂ = μ + z₂σ, subtract to find σ, then substitute for μ.' },
      { n: 6, f: 'Symmetry shortcut: P(X < a) = P(X > b)', b: 'Then μ is halfway between them: μ = (a + b)/2.' },
    ]),

    // Unit S2: Statistics 2
    ...sub(S2, 's2-binomial-and-poisson-distributions-edexcel-alevel-maths', 'S2.1', [
      { n: 1, f: 'Binomial B(n, p): conditions, probability, mean and variance', b: 'Fixed number of trials n; two outcomes; constant probability p; independent trials.\nP(X = r) = ⁿCᵣ pʳ(1 − p)ⁿ⁻ʳ. Mean np, variance np(1 − p).' },
      { n: 2, f: 'Poisson Po(λ): conditions, probability, mean and variance', b: 'Events occur singly, independently, at random and at a constant average rate.\nP(X = r) = e^(−λ) λʳ/r! for r = 0, 1, 2, …\nMean λ and variance λ.' },
      { n: 3, f: 'Events occur at 1.2 per 4 minutes. What is the distribution for 10 minutes?', b: 'Scale the mean: 1.2 ÷ 4 × 10 = 3, so X ~ Po(3). Scale the mean, never the probability.' },
      { n: 4, f: 'Poisson approximation to the binomial', b: 'When n is large and p is small, B(n, p) ≈ Po(np).\nExample: B(300, 0.01) ≈ Po(3), so P(X = 2) ≈ e⁻³ × 3²/2 = 0.2240.' },
      { n: 5, f: 'Sum of independent Poisson variables', b: 'If X ~ Po(a) and Y ~ Po(b) are independent, then X + Y ~ Po(a + b).' },
      { n: 6, f: 'X ~ Po(λ) and P(X = 0) = 0.2. Find λ.', b: 'e^(−λ) = 0.2, so λ = −ln 0.2 = ln 5.' },
    ]),
    ...sub(S2, 's2-continuous-random-variables-edexcel-alevel-maths', 'S2.2', [
      { n: 1, f: 'Conditions for a valid probability density function f(x)', b: 'f(x) ≥ 0 everywhere and the total area under f is 1. Outside the stated interval f(x) = 0.' },
      { n: 2, f: 'Probabilities for a continuous random variable', b: 'P(a < X ≤ b) = ∫ from a to b of f(x) dx (area under the pdf).\nP(X = a) = 0 for every a, so < and ≤ give the same probability.' },
      { n: 3, f: 'Link between the cdf F(x) and the pdf f(x)', b: 'F(x₀) = P(X ≤ x₀) = ∫ from −∞ to x₀ of f(x) dx.\nf(x) = dF(x)/dx.' },
      { n: 4, f: 'E(X) and Var(X) for a continuous random variable', b: 'E(X) = ∫ x f(x) dx.\nVar(X) = ∫ x² f(x) dx − [E(X)]².' },
      { n: 5, f: 'Median, quartiles and mode of a continuous random variable', b: 'Median m: F(m) = 1/2. Lower and upper quartiles: F(x) = 1/4 and 3/4.\nMode: the value of x where f(x) is greatest (it may be an end of the interval).' },
      { n: 6, f: 'f(x) = kx³ for 0 ≤ x ≤ 2 (0 otherwise). Find k and the median.', b: '∫ kx³ dx from 0 to 2 = 4k = 1, so k = 1/4.\nF(x) = x⁴/16. Median: m⁴/16 = 1/2, m⁴ = 8, m = 8^(1/4) ≈ 1.68.' },
    ]),
    ...sub(S2, 's2-continuous-distributions-edexcel-alevel-maths', 'S2.3', [
      { n: 1, f: 'Continuous uniform X ~ U[a, b]: pdf, mean and variance', b: 'f(x) = 1/(b − a) for a ≤ x ≤ b, and 0 otherwise.\nMean (a + b)/2. Variance (b − a)²/12.' },
      { n: 2, f: 'cdf of U[a, b]', b: 'F(x) = 0 for x < a; (x − a)/(b − a) for a ≤ x ≤ b; 1 for x > b.' },
      { n: 3, f: 'X ~ U[1, 7]. Find P(X > 5.5) and the 90th percentile.', b: 'P(X > 5.5) = (7 − 5.5)/6 = 0.25.\n90th percentile: 1 + 0.9 × 6 = 6.4.' },
      { n: 4, f: 'Normal approximations to B(n, p) and to Po(λ)', b: 'B(n, p) ≈ N(np, np(1 − p)) when n is large and p is not near 0 or 1.\nPo(λ) ≈ N(λ, λ) when λ is large.\nBoth need a continuity correction.' },
      { n: 5, f: 'Continuity corrections for P(X ≤ r), P(X < r), P(X ≥ r) and P(X > r)', b: 'P(X ≤ r) → P(Y < r + 0.5)\nP(X < r) → P(Y < r − 0.5)\nP(X ≥ r) → P(Y > r − 0.5)\nP(X > r) → P(Y > r + 0.5)' },
      { n: 6, f: 'X ~ B(150, 0.2). Which normal distribution and corrected event are used for P(X ≤ 24)?', b: 'Mean 30, variance 24, so Y ~ N(30, 24).\nP(X ≤ 24) ≈ P(Y < 24.5), z = −5.5/√24 = −1.123, probability about 0.131.' },
    ]),
    ...sub(S2, 's2-samples-edexcel-alevel-maths', 'S2.4', [
      { n: 1, f: 'Population, census and sample', b: 'Population: every item or person of interest.\nCensus: every member of the population is observed.\nSample: a subset of the population.' },
      { n: 2, f: 'Advantages and disadvantages of a census compared with a sample', b: 'Census: exact, but slow and costly, and impossible if testing destroys the item.\nSample: cheaper and faster, but results vary and a poor frame causes bias.' },
      { n: 3, f: 'Sampling unit and sampling frame', b: 'Sampling unit: one individual member that can be selected.\nSampling frame: the list of all sampling units the sample is chosen from.' },
      { n: 4, f: 'Statistic', b: 'A quantity calculated from the sample only, with no unknown parameter in it. For a sample X₁, X₂, X₃ with unknown mean μ, the sample mean is a statistic but X₁ − μ is not.' },
      { n: 5, f: 'Sampling distribution', b: 'The distribution of a statistic over all possible samples of a given size.\nExample: population {0, 2} equally likely, samples of 2 with replacement: sample mean 0, 1, 2 with probabilities 1/4, 1/2, 1/4.' },
    ]),
    ...sub(S2, 's2-hypothesis-tests-edexcel-alevel-maths', 'S2.5', [
      { n: 1, f: 'Null and alternative hypotheses', b: 'H₀: the assumed value of the parameter, written with an equals sign (p = p₀ or λ = λ₀).\nH₁: how the parameter differs: >, < (one-tailed) or ≠ (two-tailed).' },
      { n: 2, f: 'Critical region and critical value', b: 'Critical region: the values of the test statistic for which H₀ is rejected.\nCritical value: the boundary of the critical region.' },
      { n: 3, f: 'Actual significance level', b: 'P(test statistic in the critical region | H₀ true). For a discrete test it is usually below the nominal level.' },
      { n: 4, f: 'How is a two-tailed test at the 5% level set up?', b: 'H₁ uses ≠ and each tail is given at most 2.5%. Choose each tail of the critical region so its probability is as large as possible without exceeding 2.5%.' },
      { n: 5, f: 'X ~ B(14, 0.5), H₁: p < 0.5, 5% level. P(X ≤ 3) = 0.0287, P(X ≤ 4) = 0.0898. Find the critical region.', b: 'X ≤ 3, because 0.0287 < 0.05 but 0.0898 > 0.05. Actual significance level 2.87%.' },
      { n: 6, f: 'How should a hypothesis test conclusion be written?', b: 'State the decision with the comparison ("0.0374 < 0.05, so reject H₀"), then say there is sufficient (or insufficient) evidence at the stated level, in context. Never say H₀ is "accepted" or "proved".' },
    ]),

    // Unit D1: Decision Mathematics 1
    ...sub(D1, 'd1-algorithms-edexcel-alevel-maths', 'D1.1', [
      { n: 1, f: 'Middle item of a list of N items (D1 convention)', b: 'Position (N + 1)/2 if N is odd; (N + 2)/2 if N is even. Example: N = 12 gives the 7th item.' },
      { n: 2, f: 'Bubble sort', b: 'Compare neighbours from the left and swap any pair in the wrong order. Each pass sends the largest remaining item to the end. Stop after a pass with no swaps.' },
      { n: 3, f: 'Quick sort', b: 'Choose the middle item as the pivot. Put smaller items to its left and larger to its right, keeping their order. The pivot is fixed; repeat on each sublist until every sublist has one item or none.' },
      { n: 4, f: 'Binary search', b: 'The list must be ordered. Test the middle item: if the target is larger keep the items after it, if smaller keep those before it; discard the middle item. If the list empties, the target is absent.' },
      { n: 5, f: 'First-fit and first-fit decreasing bin packing', b: 'First-fit: take items in the order given; each goes in the first bin with room.\nFirst-fit decreasing: sort into decreasing order first, then use first-fit.' },
      { n: 6, f: 'Lower bound for the number of bins', b: 'Total size of all items ÷ bin capacity, rounded up. If a packing uses that many bins, it is optimal.' },
    ]),
    ...sub(D1, 'd1-algorithms-on-graphs-edexcel-alevel-maths', 'D1.2', [
      { n: 1, f: 'Spanning tree and minimum spanning tree', b: 'A spanning tree connects all n vertices with n − 1 edges and no cycles. A minimum spanning tree (minimum connector) is the one of least total weight.' },
      { n: 2, f: "Kruskal's algorithm", b: 'Sort all edges by weight. Repeatedly take the cheapest edge that does not form a cycle. Stop when n − 1 edges are chosen. The tree may grow in separate pieces that join up.' },
      { n: 3, f: "Prim's algorithm", b: 'Start from one vertex. Repeatedly add the cheapest edge joining a vertex in the tree to a vertex not yet in it. Stop when all vertices are in. It grows as one tree.' },
      { n: 4, f: "Prim's algorithm in matrix form", b: '1. Number the start column 1 and cross out its row.\n2. In the numbered columns, circle the smallest entry in an uncrossed row.\n3. Number that row\'s vertex column next and cross out its row.\n4. Repeat until all rows are crossed out.' },
      { n: 5, f: "Dijkstra's algorithm", b: 'Give the start label 0 and order 1. From the latest final vertex, update working values (final label + edge) if smaller. Make the smallest working value final with the next order number. Stop when the target is final.' },
      { n: 6, f: "How do you find the route after Dijkstra's algorithm?", b: 'Work back from the target: an edge is on the route if (final label at its end) − (edge weight) = (final label at its start).' },
    ]),
    ...sub(D1, 'd1-algorithms-on-graphs-ii-edexcel-alevel-maths', 'D1.3', [
      { n: 1, f: 'Route inspection (Chinese postman) algorithm', b: '1. List the odd nodes.\n2. List all pairings of them.\n3. Find the shortest path for each pair; add for each pairing.\n4. Route length = total edge weight + smallest pairing total.' },
      { n: 2, f: 'Rectangle ABCD: AB = 6, BC = 4, CD = 6, DA = 4, diagonal AC = 8. Find the route inspection length.', b: 'Odd nodes A and C (degree 3). Shortest A to C is 8.\nTotal weight 28, so the route length is 28 + 8 = 36, repeating AC.' },
      { n: 3, f: 'Classical compared with practical travelling salesman problem', b: 'Classical: visit every vertex exactly once and return, minimum length.\nPractical: visit every vertex and return, revisits allowed.' },
      { n: 4, f: 'Nearest neighbour algorithm for the TSP', b: 'Start at the given vertex, move to the nearest unvisited vertex each time, then return to the start. The tour length is an upper bound. Use it on a complete network.' },
      { n: 5, f: 'Lower bound for the TSP by deleting a vertex', b: 'Remove one vertex and its edges, find the minimum spanning tree of what is left, then add the two shortest edges at the removed vertex. Keep the largest such value as the best lower bound.' },
      { n: 6, f: 'Upper bound by doubling a minimum spanning tree', b: 'Double the MST to get a walk visiting every vertex, then replace revisits by direct short cuts. The result is a tour, so it is an upper bound. Keep the smallest upper bound.' },
    ]),
    ...sub(D1, 'd1-critical-path-analysis-edexcel-alevel-maths', 'D1.4', [
      { n: 1, f: 'Activity, event and dummy in an activity network', b: 'Activity: a job with a duration, drawn as an arc.\nEvent: a node where activities finish and others start.\nDummy: a dashed arc of duration 0, used to show dependence or keep arcs unique.' },
      { n: 2, f: 'Forward and backward passes', b: 'Forward pass: earliest event time = largest (eᵢ + duration) over the arriving arcs.\nBackward pass: latest event time = smallest (lⱼ − duration) over the leaving arcs.' },
      { n: 3, f: 'Critical activity and critical path', b: 'A critical activity has total float 0. A critical path is a path of critical activities from start to end; its length is the minimum project time.' },
      { n: 4, f: 'Total float of activity (i, j)', b: 'Total float = lⱼ − eᵢ − duration, where i is the start event and j the end event.' },
      { n: 5, f: 'Lower bound for the number of workers', b: 'Total of all durations ÷ minimum project time, rounded up. It is only a minimum: a valid schedule must still be shown.' },
      { n: 6, f: 'What goes in a precedence table?', b: 'Each activity with its immediate predecessors only, not every earlier activity.' },
    ]),
    ...sub(D1, 'd1-linear-programming-edexcel-alevel-maths', 'D1.5', [
      { n: 1, f: 'Formulating a linear programming problem', b: '1. Define the decision variables, with units.\n2. Write the objective function to maximise or minimise.\n3. Write one linear inequality per constraint.\n4. State x ≥ 0, y ≥ 0, and integers if required.' },
      { n: 2, f: 'Vertex method for a linear programme', b: 'The feasible region is the set of points satisfying every constraint. List its vertices (where boundary lines meet), work out the objective at each, and choose the largest to maximise or the smallest to minimise.' },
      { n: 3, f: 'Objective line (ruler) method', b: 'Draw ax + by = k for a convenient k and slide a ruler parallel to it. To maximise, the last point of the region touched is optimal; to minimise, the first point touched.' },
      { n: 4, f: 'Write "at least twice as many shelves (y) as tables (x)" as an inequality', b: 'y ≥ 2x. The larger quantity goes on the greater side.' },
      { n: 5, f: 'How do you find an integer solution?', b: 'Solve without the integer condition to get a bound, then test integer points near the optimal vertex against every constraint and choose the best feasible one. Rounding the vertex is not a method.' },
      { n: 6, f: 'Maximise P = 3x + 4y with vertices (1, 0), (1, 7.5), (4, 6), (6, 0)', b: 'P values: 3, 33, 36, 18. Maximum P = 36 at (4, 6).' },
    ]),
  ],
};
