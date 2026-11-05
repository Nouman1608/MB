/**
 * D-438 -- flashcards for OxfordAQA International AS and A-level Mathematics
 * 9660 (Version 5.2).
 *
 * One block per subtopic, in syllabus order: Unit P1, Unit PSM1 (PP1, S1, M1),
 * Unit P2, Unit S2 and Unit M2. Card ids are `<subtopic number>-<n>` and are
 * permanent (browser progress is keyed by them): add a new card with the next
 * unused n, never renumber.
 *
 *   No tierScheme: the syllabus record is not tiered, so no card is marked u.
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 9660); origin 'revision-notes'.
 *
 * Written from Marlbridge's own 9660 revision notes and study guides, using
 * g = 9.8 m s⁻² as they do. Plain text only (see types.ts).
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

const SCALAR = 'oxfordaqa-a-level-mathematics-the-scalar-product-angles-between-lines-and-revision-notes';

const P1 = 'unit-p1-pure-maths-oxfordaqa-alevel-maths';
const PP1 = 'unit-psm1-pp1-pure-maths-oxfordaqa-alevel-maths';
const S1 = 'unit-psm1-s1-statistics-oxfordaqa-alevel-maths';
const M1 = 'unit-psm1-m1-mechanics-oxfordaqa-alevel-maths';
const P2 = 'unit-p2-pure-maths-oxfordaqa-alevel-maths';
const S2 = 'unit-s2-statistics-oxfordaqa-alevel-maths';
const M2 = 'unit-m2-mechanics-oxfordaqa-alevel-maths';

export const DECK_OXFORDAQA_A_LEVEL_MATHEMATICS: FlashcardDeck = {
  boardSlug: 'oxfordaqa',
  qualificationSlug: 'a-level',
  subjectSlug: 'mathematics',
  syllabusCode: '9660',
  syllabusSeries: 'International AS exams from May/June 2018, International A-level exams from May/June 2019, Version 5.2',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'sajawal-zahid', reviewedOn: '2026-11-05' },
  cards: [
    // Unit P1: Pure Maths (International AS)
    ...sub(P1, 'p1-algebra-oxfordaqa-alevel-maths', 'P1.1', [
      { n: 1, f: 'Index laws, and the meaning of a⁰, a⁻ⁿ and a^(m/n)', b: 'Add powers to multiply, subtract to divide, multiply for a power of a power.\na⁰ = 1, a⁻ⁿ = 1/aⁿ, a^(m/n) = (ⁿ√a)ᵐ.\nExample: (1/4)^(−3/2) = 4^(3/2) = (√4)³ = 8.' },
      { n: 2, f: 'Rationalise 6/(2 + √3)', b: 'Multiply top and bottom by the conjugate 2 − √3:\n6(2 − √3)/(4 − 3) = 12 − 6√3.' },
      { n: 3, f: 'Complete the square on x² + 14x + 10 and state the vertex', b: 'x² + 14x + 10 = (x + 7)² − 39.\nVertex (−7, −39), line of symmetry x = −7, minimum value −39.\nFor a(x + p)² + q the vertex is (−p, q).' },
      { n: 4, f: 'Discriminant conditions, and the values of k for which x² − 4x + k = 0 has equal roots', b: 'b² − 4ac > 0: two distinct real roots; = 0: equal roots; < 0: no real roots.\nHere 16 − 4k: equal roots when k = 4, distinct when k < 4, none when k > 4.' },
      { n: 5, f: 'The Remainder Theorem and the Factor Theorem', b: 'Remainder Theorem: dividing f(x) by (x − a) leaves remainder f(a).\nFactor Theorem: (x − a) is a factor of f(x) exactly when f(a) = 0.\nFor a divisor (x + 3), test f(−3).' },
      { n: 6, f: 'Describe the transformations y = f(x) + a, y = f(x + a), y = af(x), y = f(ax), y = −f(x), y = f(−x)', b: 'f(x) + a: translation by vector (0, a).\nf(x + a): translation by (−a, 0).\naf(x): stretch parallel to the y-axis, factor a.\nf(ax): stretch parallel to the x-axis, factor 1/a.\n−f(x): reflection in the x-axis. f(−x): reflection in the y-axis.' },
    ]),
    ...sub(P1, 'p1-coordinate-geometry-oxfordaqa-alevel-maths', 'P1.2', [
      { n: 1, f: 'Gradient, mid-point and distance for the points (x₁, y₁) and (x₂, y₂)', b: 'm = (y₂ − y₁)/(x₂ − x₁).\nMid-point ((x₁ + x₂)/2, (y₁ + y₂)/2).\nDistance √[(x₂ − x₁)² + (y₂ − y₁)²].' },
      { n: 2, f: 'Gradient conditions for parallel and perpendicular lines, and the gradient of ax + by + c = 0', b: 'Parallel: m₁ = m₂. Perpendicular: m₁m₂ = −1.\nax + by + c = 0 has gradient −a/b and y-intercept −c/b.' },
      { n: 3, f: 'Find the perpendicular bisector of A(2, −3) and B(10, 3)', b: 'Gradient AB = 6/8 = 3/4; mid-point (6, 0).\nPerpendicular gradient −4/3: y = −(4/3)(x − 6).\nSo 4x + 3y − 24 = 0.' },
      { n: 4, f: 'Substituting a line into a curve gives a quadratic. What does its discriminant tell you?', b: 'b² − 4ac > 0: two points of intersection.\n= 0: one point; the line is a tangent.\n< 0: the line and curve do not meet.' },
      { n: 5, f: 'The line y = 5x + c touches y = x² − x + 6. Find c and the point of contact.', b: 'x² − 6x + (6 − c) = 0. Tangent: 36 − 4(6 − c) = 0, so 12 + 4c = 0 and c = −3.\nEqual roots at x = 3, y = 5(3) − 3 = 12. Contact point (3, 12).' },
    ]),
    ...sub(P1, 'p1-differentiation-oxfordaqa-alevel-maths', 'P1.3', [
      { n: 1, f: 'What does the derivative dy/dx represent?', b: 'The gradient of the tangent to y = f(x) at that x-value: the rate at which y changes per unit of x. Its unit is (unit of y) per (unit of x).' },
      { n: 2, f: 'Differentiate y = (x³ + 4)/x', b: 'Rewrite first: y = x² + 4x⁻¹.\ndy/dx = 2x − 4x⁻² = 2x − 4/x².\nPower rule: axⁿ → anxⁿ⁻¹ for rational n.' },
      { n: 3, f: 'Find the tangent and normal to y = x² − 6x at x = 5', b: 'y = −5 and dy/dx = 2x − 6 = 4.\nTangent: y + 5 = 4(x − 5), so y = 4x − 25.\nNormal: gradient −1/4, y + 5 = −(1/4)(x − 5), so x + 4y + 15 = 0.' },
      { n: 4, f: 'How do you find and classify stationary points?', b: '1. Solve dy/dx = 0.\n2. Substitute each x into y for the coordinates.\n3. d²y/dx² < 0: maximum; > 0: minimum.\n4. If d²y/dx² = 0, test the sign of dy/dx on each side.' },
      { n: 5, f: 'Increasing and decreasing functions', b: 'f is increasing where f′(x) > 0 and decreasing where f′(x) < 0. To show f is increasing everywhere, show f′(x) > 0 for all x (for a quadratic f′, complete the square).' },
      { n: 6, f: 'Steps for an optimisation problem', b: '1. Define variables and write the constraint.\n2. Write the quantity as a function of one variable.\n3. Differentiate, set to 0, solve.\n4. Prove maximum or minimum.\n5. Answer the question with units.' },
    ]),
    ...sub(P1, 'p1-integration-oxfordaqa-alevel-maths', 'P1.4', [
      { n: 1, f: 'Integrate xⁿ', b: '∫ xⁿ dx = xⁿ⁺¹/(n + 1) + c, for rational n ≠ −1. Integrate term by term; constants multiply through.' },
      { n: 2, f: 'Find ∫ (x + 2)/x^(1/2) dx', b: 'Split: x^(1/2) + 2x^(−1/2).\nIntegral: (2/3)x^(3/2) + 4x^(1/2) + c.' },
      { n: 3, f: 'Evaluate ∫ from 1 to 8 of x^(−1/3) dx', b: '[(3/2)x^(2/3)] from 1 to 8 = (3/2)(4) − (3/2)(1) = 9/2.\nA definite integral is F(b) − F(a), with no + c.' },
      { n: 4, f: 'Find the area between y = x³ − 4x and the x-axis for 0 ≤ x ≤ 2', b: '∫ from 0 to 2 of (x³ − 4x) dx = [x⁴/4 − 2x²] = 4 − 8 = −4.\nThe region is below the axis, so the integral is negative and the area is 4.' },
      { n: 5, f: 'Find the area enclosed by y = 3x² and y = 12', b: 'They meet where 3x² = 12, x = ±2. The line is above.\n∫ from −2 to 2 of (12 − 3x²) dx = [12x − x³] = 16 − (−16) = 32.' },
      { n: 6, f: 'The trapezium rule, and when it over-estimates', b: '(h/2)[y₀ + yₙ + 2(y₁ + … + yₙ₋₁)], h = (b − a)/n, using n + 1 ordinates.\nCurve bends upwards (convex): chords above, over-estimate. Bends downwards (concave): under-estimate.' },
    ]),
    ...sub(P1, 'p1-sequences-and-series-oxfordaqa-alevel-maths', 'P1.5', [
      { n: 1, f: 'Arithmetic series: nth term and sum of n terms', b: 'nth term a + (n − 1)d.\nS(n) = n/2 × (2a + (n − 1)d) = n/2 × (a + l), where l is the last term.' },
      { n: 2, f: 'Geometric series: nth term, sum of n terms and sum to infinity', b: 'nth term arⁿ⁻¹.\nS(n) = a(1 − rⁿ)/(1 − r), r ≠ 1.\nS∞ = a/(1 − r), only when −1 < r < 1.' },
      { n: 3, f: 'Find the limit of the sequence x(n + 1) = 0.75x(n) + 7', b: 'Replace both terms by L: L = 0.75L + 7, so 0.25L = 7 and L = 28.' },
      { n: 4, f: 'A geometric sequence has 3rd term 20 and 6th term 160. Find r, a and S(8).', b: 'ar² = 20 and ar⁵ = 160, so r³ = 8 and r = 2; a = 5.\nS(8) = 5(2⁸ − 1)/(2 − 1) = 1275.' },
      { n: 5, f: 'Binomial expansion of (a + b)ⁿ for a positive integer n, and the expansion of (x − 2)⁴', b: '(a + b)ⁿ = Σ ⁿCᵣ aⁿ⁻ʳbʳ, r = 0 to n, with ⁿCᵣ = n!/(r!(n − r)!).\n(x − 2)⁴ = x⁴ − 8x³ + 24x² − 32x + 16.' },
      { n: 6, f: 'Evaluate Σ from r = 1 to 10 of (3r + 2)', b: '3Σr + 2 × 10 = 3 × 55 + 20 = 185, using Σr = n(n + 1)/2.' },
    ]),

    // Unit PSM1 -- PP1: Pure Maths (International AS)
    ...sub(PP1, 'pp1-circle-oxfordaqa-alevel-maths', 'PP1.1', [
      { n: 1, f: 'Circle equation, and the centre and radius of x² + y² + px + qy + c = 0', b: 'Centre (a, b), radius r: (x − a)² + (y − b)² = r².\nExpanded form: centre (−p/2, −q/2), r² = p²/4 + q²/4 − c (from completing the square).' },
      { n: 2, f: 'Find the centre and radius of x² + y² − 12x + 6y + 9 = 0', b: '(x − 6)² − 36 + (y + 3)² − 9 + 9 = 0\n(x − 6)² + (y + 3)² = 36.\nCentre (6, −3), radius 6.' },
      { n: 3, f: 'How do you tell whether a point is inside, on or outside a circle?', b: 'Work out (x − a)² + (y − b)² for the point and compare with r²: less means inside, equal means on the circle, greater means outside.' },
      { n: 4, f: 'Three circle properties used in PP1.1', b: 'The angle in a semicircle is 90°.\nThe perpendicular from the centre to a chord bisects the chord.\nThe tangent is perpendicular to the radius at the point of contact.' },
      { n: 5, f: 'Find the tangent to (x − 2)² + (y − 3)² = 52 at (8, 7)', b: 'Check: 36 + 16 = 52. Radius gradient 4/6 = 2/3, so tangent gradient −3/2.\ny − 7 = −(3/2)(x − 8), which gives 3x + 2y = 38.' },
      { n: 6, f: 'Translating a circle by the vector (s, t)', b: 'The centre (a, b) moves to (a + s, b + t); the radius is unchanged.\nExample: (x + 3)² + (y − 1)² = 49 translated by (2, −5) gives (x + 1)² + (y + 4)² = 49.' },
    ]),
    ...sub(PP1, 'pp1-trigonometry-oxfordaqa-alevel-maths', 'PP1.2', [
      { n: 1, f: 'Sine rule, cosine rule and the area of a triangle', b: 'a/sin A = b/sin B = c/sin C.\na² = b² + c² − 2bc cos A, or cos A = (b² + c² − a²)/(2bc).\nArea = ½ab sin C, with C between sides a and b.' },
      { n: 2, f: 'a = 5, b = 8, A = 30°. Find the possible values of B.', b: 'sin B = 8 sin 30°/5 = 0.8, so B = 53.1° or 180° − 53.1° = 126.9°.\nBoth leave room for a third angle, so there are two triangles (the ambiguous case).' },
      { n: 3, f: 'Radians, arc length, sector area and segment area', b: 'π rad = 180°.\nArc l = rθ; sector area A = ½r²θ (θ in radians).\nSegment area = ½r²(θ − sin θ).\nExample: r = 6, θ = 2.5 gives arc 15 and area 45.' },
      { n: 4, f: 'Periods of y = sin x, cos x and tan x, and the period of y = cos 4x', b: 'sin x and cos x: 360° (2π). tan x: 180° (π), with asymptotes at 90° and 270°.\nFor sin kx, cos kx and tan kx divide the period by k, so cos 4x has period 90°.' },
      { n: 5, f: 'cos θ = −12/13 and θ is in the second quadrant. Find sin θ and tan θ.', b: 'sin²θ = 1 − 144/169 = 25/169. Sine is positive in the second quadrant, so sin θ = 5/13.\ntan θ = sin θ/cos θ = −5/12.' },
      { n: 6, f: 'Solve 2sin²θ + 5cos θ = 4 for 0° ≤ θ < 360°', b: 'Use sin²θ = 1 − cos²θ: 2cos²θ − 5cos θ + 2 = 0.\n(2cos θ − 1)(cos θ − 2) = 0. cos θ = 2 is impossible, so cos θ = 1/2.\nθ = 60° or 300°.' },
    ]),
    ...sub(PP1, 'pp1-exponential-and-logarithms-oxfordaqa-alevel-maths', 'PP1.3', [
      { n: 1, f: 'Key features of the graph of y = aˣ', b: 'Passes through (0, 1); always above the x-axis; asymptote y = 0.\nIncreasing if a > 1; decreasing if 0 < a < 1. y = (1/a)ˣ is y = aˣ reflected in the y-axis.' },
      { n: 2, f: 'Link between index form and logarithm form, and two special values', b: 'y = aˣ ⇔ x = log_a y. The log is the index.\nlog_a 1 = 0 and log_a a = 1. log_a x is defined only for x > 0.' },
      { n: 3, f: 'Laws of logarithms (same base)', b: 'log_a x + log_a y = log_a(xy)\nlog_a x − log_a y = log_a(x/y)\nk log_a x = log_a(xᵏ)\nlog(x + y) is not log x + log y.' },
      { n: 4, f: 'Solve 2ˣ = 11', b: 'Take logs: x log 2 = log 11, so x = log 11/log 2 = 3.46 (3 s.f.). Check: 2³ = 8 and 2⁴ = 16, so x lies between 3 and 4.' },
      { n: 5, f: 'Solve log₂(x + 1) + log₂(x − 1) = 3', b: 'log₂(x² − 1) = 3, so x² − 1 = 8 and x = ±3.\nx = −3 makes x − 1 negative, so reject it. Answer x = 3.' },
      { n: 6, f: 'Solve 3^(x + 1) = 2^(x + 4)', b: '(x + 1) log 3 = (x + 4) log 2\nx(log 3 − log 2) = 4 log 2 − log 3\nx = (4 log 2 − log 3)/(log 3 − log 2) = 4.13 (3 s.f.).' },
    ]),

    // Unit PSM1 -- S1: Statistics (International AS)
    ...sub(S1, 's1-further-probability-oxfordaqa-alevel-maths', 'S1.1', [
      { n: 1, f: 'Addition law for two events, and for mutually exclusive events', b: 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B).\nIf A and B are mutually exclusive, P(A ∩ B) = 0, so P(A ∪ B) = P(A) + P(B).' },
      { n: 2, f: 'Multiplication law and conditional probability', b: 'P(A ∩ B) = P(A) × P(B | A) = P(B) × P(A | B).\nP(B | A) = P(A ∩ B)/P(A).' },
      { n: 3, f: 'P(A) = 0.45, P(B) = 0.35 and P(A ∩ B) = 0.2. Are A and B independent?', b: 'P(A) × P(B) = 0.45 × 0.35 = 0.1575, but P(A ∩ B) = 0.2. These differ, so A and B are not independent.' },
      { n: 4, f: 'Can two events with non-zero probabilities be both mutually exclusive and independent?', b: 'No. If they are mutually exclusive, one happening rules out the other (P(A ∩ B) = 0), but independence needs P(A ∩ B) = P(A)P(B) > 0.' },
      { n: 5, f: 'A bag has 5 red and 3 blue counters. Two are taken without replacement. Find P(both red).', b: '5/8 × 4/7 = 20/56 = 5/14. Without replacement, reduce the numerator and denominator after each pick.' },
      { n: 6, f: 'Three independent switches work with probabilities 0.9, 0.8 and 0.7. Find P(at least one fails).', b: 'P(all work) = 0.9 × 0.8 × 0.7 = 0.504.\nP(at least one fails) = 1 − 0.504 = 0.496.' },
    ]),
    ...sub(S1, 's1-discrete-random-variables-oxfordaqa-alevel-maths', 'S1.2', [
      { n: 1, f: 'Valid discrete distribution, and the mean E(X)', b: '0 ≤ P(X = x) ≤ 1 and Σ P(X = x) = 1.\nE(X) = μ = Σ x p. For a function, E(g(X)) = Σ g(x) p (never put E(X) into g).' },
      { n: 2, f: 'Variance of a discrete random variable', b: 'Var(X) = E((X − μ)²) = E(X²) − μ², where E(X²) = Σ x² p. Standard deviation σ = √Var(X).' },
      { n: 3, f: 'E(aX + b) and Var(aX + b)', b: 'E(aX + b) = aE(X) + b.\nVar(aX + b) = a²Var(X). So Var(−X) = Var(X).' },
      { n: 4, f: 'E(aX ± bY) and Var(aX ± bY) for independent X and Y', b: 'E(aX ± bY) = aE(X) ± bE(Y).\nVar(aX ± bY) = a²Var(X) + b²Var(Y). Variances always add; the variance formula needs independence.' },
      { n: 5, f: 'W takes 10, 20, 30 with probabilities 0.2, 0.5, 0.3. Find E(W) and Var(W).', b: 'E(W) = 2 + 10 + 9 = 21.\nE(W²) = 20 + 200 + 270 = 490.\nVar(W) = 490 − 441 = 49, so σ = 7.' },
      { n: 6, f: 'Total of n independent copies of X compared with nX: means and variances', b: 'X₁ + … + Xₙ: mean nE(X), variance nVar(X).\nnX (one value scaled): mean nE(X), variance n²Var(X).' },
    ]),
    ...sub(S1, 's1-bernoulli-and-binomial-distributions-oxfordaqa-alevel-maths', 'S1.3', [
      { n: 1, f: 'Bernoulli trial and Bernoulli distribution', b: 'A single trial with exactly two outcomes: success (probability p) and failure (1 − p). Mean p, variance p(1 − p).' },
      { n: 2, f: 'Binomial distribution B(n, p) and why its mean and variance are np and np(1 − p)', b: 'X ~ B(n, p) is the number of successes in n independent, identical Bernoulli trials. It is a sum of n Bernoulli variables, so its mean is n × p and its variance is n × p(1 − p).' },
      { n: 3, f: 'Four conditions for a binomial model', b: '1. A fixed number of trials n.\n2. Two possible outcomes per trial.\n3. A constant probability of success p.\n4. Independent trials.\nSampling without replacement from a small population breaks independence.' },
      { n: 4, f: 'Components are defective with probability 0.1. In a sample of 8, find P(exactly 2 defective).', b: 'P(X = 2) = ⁸C₂ (0.1)²(0.9)⁶ = 28 × 0.01 × 0.531441 ≈ 0.149.' },
      { n: 5, f: 'Using cumulative binomial tables for P(X ≥ r)', b: 'Tables give P(X ≤ x). Use P(X ≥ r) = 1 − P(X ≤ r − 1).\nExample: X ~ B(10, 0.3) has P(X ≤ 3) = 0.6496, so P(X ≥ 4) = 0.3504.' },
    ]),

    // Unit PSM1 -- M1: Mechanics (International AS)
    ...sub(M1, 'm1-motion-constant-acceleration-oxfordaqa-alevel-maths', 'M1.1', [
      { n: 1, f: 'Distance compared with displacement, and speed compared with velocity', b: 'Distance: total path length, always ≥ 0. Displacement: change in position, + or −.\nSpeed: distance ÷ time, ≥ 0. Velocity: displacement ÷ time, + or −.' },
      { n: 2, f: 'The constant acceleration equations', b: 'v = u + at\ns = ut + ½at²\ns = vt − ½at²\ns = ½(u + v)t\nv² = u² + 2as\nUse the one that leaves out the quantity you neither know nor want.' },
      { n: 3, f: 'Displacement-time and velocity-time graphs: what do gradient and area give?', b: 's–t graph: gradient is velocity.\nv–t graph: gradient is acceleration; area is displacement (below the axis negative; add sizes for distance).' },
      { n: 4, f: 'Vertical motion from launch speed u (up positive, g = 9.8)', b: 'a = −9.8 m/s². At the top v = 0.\nMaximum height u²/19.6. Time to return to launch level 2u/9.8. Same speed at the same height going up and down.' },
      { n: 5, f: 'A train slows uniformly from 25 m/s to 10 m/s in 6 s. Find a and s.', b: 'a = (10 − 25)/6 = −2.5 m/s².\ns = ½(25 + 10) × 6 = 105 m.' },
      { n: 6, f: 'A pebble is thrown up at 10 m/s from 3 m above the ground. When does it land?', b: 'Up positive, s = −3: −3 = 10t − 4.9t², so 4.9t² − 10t − 3 = 0.\nt = (10 + √158.8)/9.8 ≈ 2.31 s. Reject the negative root.' },
    ]),
    ...sub(M1, 'm1-motion-variable-acceleration-oxfordaqa-alevel-maths', 'M1.2', [
      { n: 1, f: 'Calculus links between s, v and a', b: 'v = ds/dt, a = dv/dt = d²s/dt².\ns = ∫ v dt and v = ∫ a dt, each with a constant from a boundary condition. suvat applies only when a is constant.' },
      { n: 2, f: 'Variable acceleration: conditions for "at rest" and for maximum or minimum velocity', b: 'At rest: v = 0.\nMaximum or minimum velocity: a = 0, then test. These usually happen at different times.' },
      { n: 3, f: 'How do you find the distance travelled when a particle turns round?', b: 'Find when v = 0 in the interval. Find s at the start, each turning time and the end, then add the sizes of the changes. A definite integral of v gives displacement, not distance.' },
      { n: 4, f: 'v = t² − 4t, with s = 0 at t = 0. Find the least velocity and the distance travelled in the first 4 s.', b: 'a = 2t − 4 = 0 at t = 2, where v = −4 (least).\ns = t³/3 − 2t², s(4) = −32/3. v < 0 throughout 0 < t < 4, so the distance is 32/3 m.' },
      { n: 5, f: 's = t³ − 6t². Find v and a at t = 1.', b: 'v = 3t² − 12t = −9 m/s at t = 1.\na = 6t − 12 = −6 m/s² at t = 1.' },
    ]),
    ...sub(M1, 'm1-forces-and-newtons-laws-oxfordaqa-alevel-maths', 'M1.3', [
      { n: 1, f: "Newton's three laws of motion", b: 'First: zero resultant force means rest or constant velocity.\nSecond: resultant force = ma.\nThird: when two bodies interact, the forces are equal in size and opposite in direction, acting on different bodies.' },
      { n: 2, f: 'Forces in M1: weight, normal reaction, tension, thrust and friction', b: 'Weight mg downwards. Normal reaction perpendicular to the surface (found from the vertical forces). Tension pulls; thrust pushes (rods only). Sliding friction F = μR opposes motion. In M1 all forces are horizontal or vertical.' },
      { n: 3, f: 'A person of mass 70 kg stands in a lift accelerating upwards at 0.6 m/s². Find the normal reaction.', b: 'R − 70g = 70 × 0.6, so R = 70(9.8 + 0.6) = 728 N.' },
      { n: 4, f: 'A 6 kg block is pushed by 40 N across a rough floor with μ = 0.3. Find a.', b: 'R = 6 × 9.8 = 58.8 N, friction 0.3 × 58.8 = 17.64 N.\n40 − 17.64 = 6a, so a = 3.73 m/s² (3 s.f.).' },
      { n: 5, f: 'Two particles m₁ > m₂ hang over a smooth pulley. Acceleration and tension?', b: 'a = (m₁ − m₂)g/(m₁ + m₂) and T = m₂(g + a).\nIn an exam, write one F = ma equation per particle and show the working.' },
      { n: 6, f: 'Car towing a trailer: how do you find the tension in the tow bar?', b: 'Whole system: driving force − all resistances = (total mass)a.\nTrailer alone: T − trailer resistance = (trailer mass)a.\nWith a rigid bar, a negative T means a thrust.' },
    ]),
    ...sub(M1, 'm1-momentum-and-impulse-oxfordaqa-alevel-maths', 'M1.4', [
      { n: 1, f: 'Momentum and impulse', b: 'Momentum p = mv, signed in a straight line.\nImpulse = mv − mu (change in momentum), unit N s; equals Ft for a constant force.' },
      { n: 2, f: 'Conservation of momentum for two particles in a straight line', b: 'm₁u₁ + m₂u₂ = m₁v₁ + m₂v₂, with signed velocities. If they coalesce, use (m₁ + m₂)v. If they move apart from rest, the total momentum is zero.' },
      { n: 3, f: 'A 5 kg particle at 4 m/s meets a 3 kg particle moving the other way at 2 m/s, and they join. Find the velocity.', b: '5 × 4 + 3 × (−2) = 8v, so 14 = 8v and v = 1.75 m/s in the direction the 5 kg particle was moving.' },
      { n: 4, f: 'A 0.5 kg ball hits a wall at 8 m/s and rebounds at 6 m/s. Find the impulse, and the average force if contact lasts 0.01 s.', b: 'Impulse = 0.5 × (6 + 8) = 7 N s away from the wall.\nAverage force = 7/0.01 = 700 N.' },
      { n: 5, f: 'Why is momentum not conserved when a ball hits a fixed wall?', b: 'The wall gives the ball an impulse, an external force on the ball. In a collision between two particles the impulses on them are equal and opposite, so their total momentum is conserved.' },
    ]),

    // Unit P2: Pure Maths (International A-level)
    ...sub(P2, 'p2-algebra-and-functions-oxfordaqa-alevel-maths', 'P2.1', [
      { n: 1, f: 'When does a function have an inverse, and how are f and f⁻¹ related?', b: 'Only when f is one-one (restrict the domain if needed).\nDomain of f⁻¹ = range of f; range of f⁻¹ = domain of f.\ny = f⁻¹(x) is the reflection of y = f(x) in y = x.' },
      { n: 2, f: 'f(x) = 3x − 5 and g(x) = x² + 2. Find fg(x).', b: 'fg(x) = f(g(x)): g acts first.\nfg(x) = 3(x² + 2) − 5 = 3x² + 1.\n(gf(x) = (3x − 5)² + 2 is different.)' },
      { n: 3, f: 'Find the inverse of f(x) = (4x + 1)/(x − 2), x ≠ 2', b: 'y(x − 2) = 4x + 1, so x(y − 4) = 2y + 1.\nf⁻¹(x) = (2x + 1)/(x − 4), x ≠ 4.' },
      { n: 4, f: 'Solve |x − 4| = 2x + 1', b: 'x − 4 = 2x + 1 gives x = −5, but then the right side is −9: reject.\n4 − x = 2x + 1 gives x = 1: both sides equal 3. Answer x = 1.' },
      { n: 5, f: '(3, 4) lies on y = f(x). Find its image on y = 2f(x − 1) + 5.', b: 'Inside: solve x − 1 = 3, so x = 4.\nOutside: y = 2 × 4 + 5 = 13.\nImage (4, 13).' },
      { n: 6, f: 'Express (3x² − 14x − 1)/((x + 1)(x − 3)²) in partial fractions', b: 'Form A/(x + 1) + B/(x − 3) + C/(x − 3)².\nx = −1: 16 = 16A, A = 1. x = 3: −16 = 4C, C = −4. x² terms: 3 = A + B, B = 2.\nResult: 1/(x + 1) + 2/(x − 3) − 4/(x − 3)².' },
    ]),
    ...sub(P2, 'p2-sequences-and-series-oxfordaqa-alevel-maths', 'P2.2', [
      { n: 1, f: 'The binomial series for (1 + x)ⁿ with n rational', b: '(1 + x)ⁿ = 1 + nx + n(n − 1)x²/2! + n(n − 1)(n − 2)x³/3! + …\nValid for |x| < 1 when n is negative or a fraction. For a positive integer n the series stops and holds for all x.' },
      { n: 2, f: 'How do you expand (a + bx)ⁿ and state its validity?', b: 'Take out aⁿ: aⁿ(1 + (b/a)x)ⁿ. Expand with u = (b/a)x, then multiply by aⁿ.\nValid for |u| < 1, that is |x| < |a/b|.' },
      { n: 3, f: 'Series for (1 + u)^(−1/2) up to u³', b: '1 − u/2 + 3u²/8 − 5u³/16 + …, valid for |u| < 1.\nWith u = 4x: 1 − 2x + 6x² − 20x³.' },
      { n: 4, f: 'Expand (7 − x)/((1 − x)(1 + 2x)) up to x² and state where it is valid', b: '= 2/(1 − x) + 5/(1 + 2x)\n= 2(1 + x + x²) + 5(1 − 2x + 4x²) + …\n= 7 − 8x + 22x² + …, valid for |x| < 1/2 (the narrower range).' },
      { n: 5, f: 'State where the expansions of (2 + x)^(1/2) and (3 − 2x)⁻² are valid', b: '(2 + x)^(1/2) = √2(1 + x/2)^(1/2): valid for |x| < 2.\n(3 − 2x)⁻² = (1/9)(1 − 2x/3)⁻²: valid for |x| < 3/2.' },
    ]),
    ...sub(P2, 'p2-coordinate-geometry-oxfordaqa-alevel-maths', 'P2.3', [
      { n: 1, f: 'How do you convert parametric equations to a Cartesian equation?', b: 'Rearrange the easier equation for the parameter and substitute; or, for trig, use sin²θ + cos²θ = 1 or a double angle identity. Then state any restriction on x or y.' },
      { n: 2, f: 'Cartesian equations of x = t², y = 2t and of x = a cos θ, y = b sin θ', b: 'x = t², y = 2t: y² = 4x (a parabola).\nx = a cos θ, y = b sin θ: x²/a² + y²/b² = 1 (an ellipse; a circle if a = b).' },
      { n: 3, f: 'Cartesian equations of x = 1/t, y = 3t and of x = t + 1/t, y = t − 1/t', b: 'x = 1/t, y = 3t: xy = 3 (a rectangular hyperbola, t ≠ 0).\nx = t + 1/t, y = t − 1/t: x² − y² = 4 (for t > 0, only x ≥ 2).' },
      { n: 4, f: 'Parametric equations for the circle (x − p)² + (y − q)² = r²', b: 'x = p + r cos θ, y = q + r sin θ.' },
      { n: 5, f: 'Find the Cartesian equation of x = 3 sin θ, y = 1 − cos 2θ', b: 'cos 2θ = 1 − 2sin²θ, so y = 2sin²θ = 2(x/3)² = 2x²/9, with −3 ≤ x ≤ 3.' },
    ]),
    ...sub(P2, 'p2-trigonometry-oxfordaqa-alevel-maths', 'P2.4', [
      { n: 1, f: 'sec x, cosec x and cot x: definitions and where each is undefined', b: 'sec x = 1/cos x, undefined at x = π/2 + nπ.\ncosec x = 1/sin x, undefined at x = nπ.\ncot x = cos x/sin x, undefined at x = nπ.\n|sec x| ≥ 1 and |cosec x| ≥ 1.' },
      { n: 2, f: 'The two identities that come from sin²x + cos²x = 1', b: 'Divide by cos²x: tan²x + 1 = sec²x.\nDivide by sin²x: 1 + cot²x = cosec²x.' },
      { n: 3, f: 'Domains and ranges of sin⁻¹x, cos⁻¹x and tan⁻¹x', b: 'sin⁻¹x: domain [−1, 1], range [−π/2, π/2].\ncos⁻¹x: domain [−1, 1], range [0, π].\ntan⁻¹x: all real x, range (−π/2, π/2).' },
      { n: 4, f: 'Compound angle formulae (sin, cos and tan of A ± B)', b: 'sin(A ± B) = sin A cos B ± cos A sin B\ncos(A ± B) = cos A cos B ∓ sin A sin B\ntan(A ± B) = (tan A ± tan B)/(1 ∓ tan A tan B)' },
      { n: 5, f: 'Double angle formulae, including all three forms of cos 2x', b: 'sin 2x = 2 sin x cos x\ncos 2x = cos²x − sin²x = 2cos²x − 1 = 1 − 2sin²x\ntan 2x = 2 tan x/(1 − tan²x)' },
      { n: 6, f: 'Write 5 cos θ − 3 sin θ in the form r cos(θ + α)', b: 'r cos α = 5 and r sin α = 3, so r = √34 and tan α = 3/5, α = 31.0°.\n5 cos θ − 3 sin θ = √34 cos(θ + 31.0°).' },
    ]),
    ...sub(P2, 'p2-exponentials-and-logarithms-oxfordaqa-alevel-maths', 'P2.5', [
      { n: 1, f: 'Compare the graphs of y = eˣ and y = ln x', b: 'eˣ: all real x, y > 0, through (0, 1) and (1, e), asymptote y = 0.\nln x: x > 0 only, all real y, through (1, 0) and (e, 1), asymptote x = 0.\nEach is the reflection of the other in y = x.' },
      { n: 2, f: 'Inverse identities for e and ln', b: 'ln(eˣ) = x for all x; e^(ln x) = x for x > 0.\nln 1 = 0 and ln e = 1.' },
      { n: 3, f: 'Solve e²ˣ − 7eˣ + 10 = 0', b: 'Let u = eˣ: u² − 7u + 10 = 0, (u − 2)(u − 5) = 0.\neˣ = 2 or 5, so x = ln 2 or x = ln 5.' },
      { n: 4, f: 'Exponential growth and decay models: doubling time and half-life', b: 'Growth N = Ae^(kt), k > 0; decay N = Ae^(−kt), k > 0. A is the value at t = 0.\nDoubling time and half-life are both ln 2/k.' },
      { n: 5, f: 'Find the inverse of f(x) = 3eˣ + 2', b: 'y = 3eˣ + 2, so x = ln((y − 2)/3).\nf⁻¹(x) = ln((x − 2)/3), with domain x > 2 (the range of f).' },
      { n: 6, f: 'Asymptote and y-intercept of y = 2eˣ − 5', b: 'Asymptote y = −5; y-intercept (0, −3).' },
    ]),
    ...sub(P2, 'p2-differentiation-oxfordaqa-alevel-maths', 'P2.6', [
      { n: 1, f: 'Derivatives of e^(kx), ln x, ln(ax + b), sin kx, cos kx and tan kx', b: 'e^(kx) → ke^(kx)\nln x → 1/x\nln(ax + b) → a/(ax + b)\nsin kx → k cos kx\ncos kx → −k sin kx\ntan kx → k sec²kx\n(x in radians)' },
      { n: 2, f: 'The chain, product and quotient rules', b: 'Chain: dy/dx = (dy/du)(du/dx).\nProduct: y = uv gives dy/dx = uv′ + vu′.\nQuotient: y = u/v gives dy/dx = (vu′ − uv′)/v².' },
      { n: 3, f: 'Differentiate y = (5 − x)/(2x + 3)', b: 'dy/dx = [(−1)(2x + 3) − (5 − x)(2)]/(2x + 3)² = −13/(2x + 3)².' },
      { n: 4, f: 'Find the gradient of x³ − 2xy + y² = 4 at (1, 3)', b: '3x² − 2y − 2x dy/dx + 2y dy/dx = 0\ndy/dx = (2y − 3x²)/(2y − 2x)\nAt (1, 3): (6 − 3)/(6 − 2) = 3/4.' },
      { n: 5, f: 'x = 1 + 2t², y = t³ − 6t. Find dy/dx and the point when t = 2.', b: 'dy/dx = (dy/dt)/(dx/dt) = (3t² − 6)/(4t).\nAt t = 2: 6/8 = 3/4, at the point (9, −4).' },
      { n: 6, f: 'x = y² + 7y. Find dy/dx where y = 2.', b: 'dx/dy = 2y + 7 = 11, so dy/dx = 1/(dx/dy) = 1/11.' },
    ]),
    ...sub(P2, 'p2-integration-oxfordaqa-alevel-maths', 'P2.7', [
      { n: 1, f: 'Integrals of e^(kx), 1/x, 1/(ax + b), sin kx and cos kx', b: 'e^(kx) → e^(kx)/k\n1/x → ln|x|\n1/(ax + b) → (1/a) ln|ax + b|\nsin kx → −cos(kx)/k\ncos kx → sin(kx)/k\nAdd + c in each case.' },
      { n: 2, f: 'Evaluate ∫ from 0 to 2 of 3x²/(x³ + 1) dx', b: 'The numerator is the derivative of the denominator, so the integral is ln(x³ + 1).\n[ln(x³ + 1)] from 0 to 2 = ln 9 − ln 1 = ln 9 = 2 ln 3.' },
      { n: 3, f: 'Integration by substitution for a definite integral', b: 'Choose u, find du/dx and replace dx. Replace any remaining x using u. Change the limits to u-values at the same time, integrate in u, and evaluate in u (no need to return to x).' },
      { n: 4, f: 'Integration by parts, and the choice of u for x e^(4x) and for x ln x', b: '∫ u v′ dx = uv − ∫ u′ v dx.\nx e^(4x): u = x, giving ¼x e^(4x) − (1/16)e^(4x) + c.\nx ln x: u = ln x, giving (x²/2) ln x − x²/4 + c.' },
      { n: 5, f: 'Find ∫ 7/((x − 2)(x + 5)) dx', b: '7/((x − 2)(x + 5)) = 1/(x − 2) − 1/(x + 5).\nIntegral: ln|x − 2| − ln|x + 5| + c = ln|(x − 2)/(x + 5)| + c.' },
      { n: 6, f: 'Volumes of revolution about the x-axis and about the y-axis', b: 'About the x-axis: V = π ∫ y² dx with x-limits.\nAbout the y-axis: V = π ∫ x² dy with y-limits.\nExample: y = x² from y = 0 to 4 about the y-axis: π ∫ y dy = 8π.' },
    ]),
    ...sub(P2, 'p2-differential-equations-oxfordaqa-alevel-maths', 'P2.8', [
      { n: 1, f: 'Turn into differential equations: "decreasing at a rate proportional to the amount m", and "cooling of T in surroundings at S"', b: 'dm/dt = −km, k > 0.\ndT/dt = −k(T − S), k > 0.\nState what k is and match the sign to the words.' },
      { n: 2, f: 'How do you solve a separable differential equation?', b: 'Write dy/dx = f(x)g(y), separate to (1/g(y)) dy = f(x) dx, integrate each side with a single + c, use the initial condition for c, then rearrange for y if asked.' },
      { n: 3, f: 'General solutions of dy/dt = ky and of dT/dt = −k(T − S)', b: 'dy/dt = ky: y = Ae^(kt), A = y at t = 0.\ndT/dt = −k(T − S): T − S = Be^(−kt), so T tends to S.' },
      { n: 4, f: 'Solve dy/dx = 2x/(y + 1) with y = 1 when x = 0 (y > −1)', b: '(y + 1) dy = 2x dx, so (y + 1)²/2 = x² + c. At x = 0, y = 1: c = 2.\n(y + 1)² = 2x² + 4, so y = −1 + √(2x² + 4).' },
      { n: 5, f: 'A body at 70 °C in a room at 18 °C reaches 46 °C after 10 minutes. Find k and the temperature at 20 minutes.', b: 'T − 18 = 52e^(−kt). 28 = 52e^(−10k), so k = (1/10) ln(52/28) = 0.0619.\nAt t = 20: T = 18 + 52e^(−20k) = 33.1 °C (3 s.f.).' },
    ]),
    ...sub(P2, 'p2-numerical-methods-oxfordaqa-alevel-maths', 'P2.9', [
      { n: 1, f: 'Locating a root by a change of sign', b: 'If f is continuous on [a, b] and f(a) and f(b) differ in sign, there is at least one root in (a, b). State the values, the signs, continuity and the conclusion.' },
      { n: 2, f: 'Iteration xₙ₊₁ = g(xₙ): when does it converge to the root α?', b: 'Rearrange f(x) = 0 as x = g(x). The iteration converges near α when |g′(α)| < 1 and the start value is close enough. Different rearrangements may converge or diverge.' },
      { n: 3, f: 'Staircase compared with cobweb diagrams', b: 'Staircase: 0 < g′(α) < 1, values approach α from one side.\nCobweb: −1 < g′(α) < 0, values alternate either side of α.' },
      { n: 4, f: 'The mid-ordinate rule, and whether it over- or under-estimates', b: '∫ from a to b of y dx ≈ h × (sum of the heights at the n strip midpoints), h = (b − a)/n.\nConvex curve: too low. Concave curve: too high.' },
      { n: 5, f: "Simpson's rule", b: '(h/3)[first + last + 4(odd ordinates) + 2(even interior ordinates)], with an even number of strips. It is exact for polynomials up to cubic.' },
      { n: 6, f: 'When can a change of sign mislead you?', b: 'An asymptote in the interval can give a sign change with no root; a repeated root (touching the axis) gives no sign change; two roots in one interval can leave the end signs equal.' },
    ]),
    ...sub(P2, 'p2-vectors-oxfordaqa-alevel-maths', 'P2.10', [
      { n: 1, f: 'Magnitude of (x, y, z), the vector AB, and the mid-point of AB', b: '|(x, y, z)| = √(x² + y² + z²).\nAB = OB − OA ("end minus start").\nMid-point: (OA + OB)/2.\nExample: |(3, 4, 12)| = 13.' },
      { n: 2, f: 'Vector equation of a line', b: 'r = a + tb, where a is a point on the line, b is a direction vector and t is any real number. Through A and B: a = OA, b = AB.' },
      { n: 3, f: 'How do you test whether two lines in 3D intersect?', b: 'Use different parameters. If the directions are parallel, check for a common point. Otherwise equate components, solve two equations, and test the third: if it holds they intersect, if not they are skew.' },
      { n: 4, f: 'Scalar product', b: 'The number xa + yb + zc found from two vectors (x, y, z) and (a, b, c); also called the dot product. Geometric form: u.v = |u||v| cos θ, so u.v = 0 for perpendicular non-zero vectors.', src: SCALAR },
      { n: 5, f: 'Skew lines', b: 'Lines in three dimensions that are neither parallel nor intersecting. They still have an angle between them.', src: SCALAR },
      { n: 6, f: 'Foot of the perpendicular from P to a line, and the perpendicular distance', b: 'The foot X is the point on the line nearest to P, where PX meets the line at a right angle: solve PX.d = 0 for t. The perpendicular distance is |PX|, the shortest distance from P to the line.', src: SCALAR },
    ]),

    // Unit S2: Statistics (International A-level)
    ...sub(S2, 's2-poisson-distribution-oxfordaqa-alevel-maths', 'S2.1', [
      { n: 1, f: 'Poisson distribution Po(λ): probability, mean and variance', b: 'P(X = r) = e^(−λ) λʳ/r!, r = 0, 1, 2, …\nMean λ, variance λ, standard deviation √λ.' },
      { n: 2, f: 'Conditions for a Poisson model', b: 'Events occur singly, at random, independently of each other, and at a constant average rate. Link each condition to the context.' },
      { n: 3, f: 'Faults occur at 12 per hour. What distribution models faults in 30 minutes and in 5 minutes?', b: 'New λ = rate × length: 30 minutes gives Po(6); 5 minutes gives Po(1).' },
      { n: 4, f: 'Poisson approximation to the binomial', b: 'B(n, p) ≈ Po(np) when n is large and p is small.\nExample: B(80, 0.025) ≈ Po(2), so P(X = 3) ≈ e⁻² × 8/6 = 0.1804 (exact 0.1827).' },
      { n: 5, f: 'Sum of independent Poisson variables', b: 'If X ~ Po(a) and Y ~ Po(b) are independent, X + Y ~ Po(a + b). Add the rates, not the standard deviations. A difference of Poisson variables is not Poisson.' },
      { n: 6, f: 'How can data suggest that a Poisson model is a poor fit?', b: 'For a Poisson model the mean and variance should be close. A variance much larger than the mean suggests clustering or a changing rate. Comment in context.' },
    ]),
    ...sub(S2, 's2-continuous-random-variables-oxfordaqa-alevel-maths', 'S2.2', [
      { n: 1, f: 'Conditions for a valid pdf, and the probability that X equals a single value', b: 'f(x) ≥ 0 everywhere and the total area is 1. f(x) is a height, not a probability, and can exceed 1.\nP(X = a) = 0, so P(X < a) = P(X ≤ a).' },
      { n: 2, f: 'Link between the pdf f and the cdf F', b: 'F(x) = P(X ≤ x) = ∫ from −∞ to x of f(t) dt; f(x) = dF/dx.\nP(a < X < b) = F(b) − F(a); P(X > a) = 1 − F(a).' },
      { n: 3, f: 'Median and quartiles of a continuous random variable', b: 'Median m: F(m) = 1/2. Lower quartile: F = 1/4. Upper quartile: F = 3/4.\nFor a piecewise pdf, compare the target with F at each break point to choose the piece.' },
      { n: 4, f: 'E(X), E(g(X)) and Var(X) for a continuous random variable', b: 'E(X) = ∫ x f(x) dx.\nE(g(X)) = ∫ g(x) f(x) dx.\nVar(X) = E(X²) − μ².\nIntegrate over the range where f is non-zero.' },
      { n: 5, f: 'f(x) = 3(1 − x)² for 0 ≤ x ≤ 1. Find E(X) and Var(X).', b: 'E(X) = 3 ∫ (x − 2x² + x³) dx = 3(1/2 − 2/3 + 1/4) = 1/4.\nE(X²) = 3(1/3 − 1/2 + 1/5) = 1/10.\nVar(X) = 1/10 − 1/16 = 3/80.' },
      { n: 6, f: 'f(x) = 2(1 − x) for 0 ≤ x ≤ 1. Find the median.', b: 'F(x) = 2x − x². Solve 2m − m² = 1/2: m² − 2m + 1/2 = 0, m = 1 ± 1/√2.\nOnly m = 1 − 1/√2 ≈ 0.293 lies in [0, 1].' },
    ]),
    ...sub(S2, 's2-exponential-distribution-oxfordaqa-alevel-maths', 'S2.3', [
      { n: 1, f: 'When does an exponential distribution arise?', b: 'When events occur singly, independently, at random and at a constant average rate λ (a Poisson process), the length of the interval between events has an exponential distribution Exp(λ).' },
      { n: 2, f: 'Exponential Exp(λ): pdf, cdf and upper tail (x ≥ 0)', b: 'f(x) = λe^(−λx)\nF(x) = 1 − e^(−λx)\nP(X > x) = e^(−λx)\nP(a < X < b) = e^(−λa) − e^(−λb)' },
      { n: 3, f: 'Mean, variance and median of Exp(λ)', b: 'Mean 1/λ. Variance 1/λ² (so the standard deviation is also 1/λ). Median ln 2/λ.\nIf the mean m is given, λ = 1/m.' },
      { n: 4, f: 'X ~ Exp(0.25). Find P(X > 3), the mean and E(X²).', b: 'P(X > 3) = e^(−0.75) = 0.472.\nMean 4 (and standard deviation 4).\nE(X²) = Var(X) + (E(X))² = 16 + 16 = 32.' },
      { n: 5, f: 'Link between Exp(λ) and the Poisson distribution', b: 'The number of events in time t is Po(λt), so P(no events in time t) = e^(−λt) = P(X > t). Both routes give the same value.' },
    ]),
    ...sub(S2, 's2-normal-distribution-oxfordaqa-alevel-maths', 'S2.4', [
      { n: 1, f: 'Normal distribution: notation, standardising and the proportions within 1, 2 and 3 standard deviations', b: 'X ~ N(μ, σ²); the second parameter is the variance. Z = (X − μ)/σ ~ N(0, 1).\nAbout 0.6827 within μ ± σ, 0.9545 within μ ± 2σ, 0.9973 within μ ± 3σ.' },
      { n: 2, f: 'Distribution of X + Y, X − Y and aX + bY for independent normal X and Y', b: 'X + Y ~ N(μ₁ + μ₂, σ₁² + σ₂²)\nX − Y ~ N(μ₁ − μ₂, σ₁² + σ₂²)\naX + bY ~ N(aμ₁ + bμ₂, a²σ₁² + b²σ₂²)\nVariances always add.' },
      { n: 3, f: 'X ~ N(μ, σ²), P(X < 10) = 0.05 and P(X > 22) = 0.20. Find μ and σ (z-values 1.6449 and 0.8416).', b: 'μ − 1.6449σ = 10 and μ + 0.8416σ = 22.\nSubtract: 2.4865σ = 12, σ = 4.83.\nμ = 10 + 1.6449 × 4.826 = 17.9 (3 s.f.).' },
      { n: 4, f: 'X ~ N(5, 1²) and Y ~ N(8, 2²) are independent. Find P(2X + Y > 21), given Φ(1.06) = 0.8554.', b: '2X + Y ~ N(18, 4 × 1 + 4) = N(18, 8).\nz = 3/√8 = 1.06, so P = 1 − 0.8554 = 0.1446.' },
      { n: 5, f: 'Total of three independent copies of X compared with 3X', b: 'X₁ + X₂ + X₃: mean 3μ, variance 3σ².\n3X: mean 3μ, variance 9σ².' },
      { n: 6, f: 'How do you find the probability that one normal quantity exceeds another, such as a book fitting a gap?', b: 'Use the difference: it fits when G − B > 0. G − B is normal with mean μ_G − μ_B and variance σ_G² + σ_B² (independent). Standardise 0 and find the probability.' },
    ]),
    ...sub(S2, 's2-estimation-oxfordaqa-alevel-maths', 'S2.5', [
      { n: 1, f: 'Parameter compared with statistic', b: 'Parameter: a fixed (usually unknown) number describing the population, such as μ or σ².\nStatistic: a number calculated from a sample, such as x̄ or s²; it varies from sample to sample.' },
      { n: 2, f: 'Unbiased estimator, and the unbiased estimate of σ²', b: 'T is an unbiased estimator of θ if E(T) = θ.\ns² = Σ(x − x̄)²/(n − 1) = (Σx² − n x̄²)/(n − 1). Dividing by n − 1, not n, makes it unbiased.' },
      { n: 3, f: 'Distribution of the sample mean from a normal population, and the standard error', b: 'X̄ ~ N(μ, σ²/n), exactly, for any n.\nStandard error = σ/√n, estimated by s/√n.' },
      { n: 4, f: 'The Central Limit Theorem', b: 'For a large random sample from any population with mean μ and variance σ², X̄ is approximately N(μ, σ²/n). The total is approximately N(nμ, nσ²). It does not make single values normal.' },
      { n: 5, f: 'n = 20, Σx = 164, Σx² = 1420. Find x̄ and s².', b: 'x̄ = 164/20 = 8.2.\ns² = (1420 − 20 × 8.2²)/19 = 75.2/19 = 3.958 (3 d.p.).' },
      { n: 6, f: 'σ = 10. Find the smallest sample size for a standard error below 1.5.', b: '10/√n < 1.5, so √n > 6.667 and n > 44.4. Round up: n = 45.' },
    ]),
    ...sub(S2, 's2-hypothesis-testing-oxfordaqa-alevel-maths', 'S2.6', [
      { n: 1, f: 'H₀, H₁, and one-tailed compared with two-tailed tests', b: 'H₀ gives the parameter one value (p = p₀, λ = λ₀ or μ = μ₀). H₁ says it is greater, less or different.\n> or <: one-tailed. ≠: two-tailed, with the level shared between the tails.' },
      { n: 2, f: 'Critical region and actual significance level', b: 'Critical region: values of the test statistic that lead to rejecting H₀. Take the biggest region that does not exceed the stated level (half of it per tail if two-tailed).\nActual significance level: the true probability of the critical region under H₀.' },
      { n: 3, f: 'Type I and Type II errors', b: 'Type I: rejecting H₀ when H₀ is true. P(Type I error) = the actual significance level.\nType II: not rejecting H₀ when H₀ is false.\nDescribe each in the context of the question.' },
      { n: 4, f: 'X ~ B(15, 0.6) under H₀, H₁: p < 0.6, observed 5, 5% level. P(X ≤ 5) = 0.0338. Conclusion?', b: '0.0338 ≤ 0.05, so reject H₀. There is sufficient evidence at the 5% level that the proportion is less than 0.6.' },
      { n: 5, f: 'Test statistics for a population mean: z or t?', b: 'Normal population, σ known (or large n): z = (x̄ − μ₀)/(σ/√n), compared with N(0, 1); for large n with σ unknown, use s.\nNormal population, σ unknown, small n: t = (x̄ − μ₀)/(s/√n) with n − 1 degrees of freedom.' },
      { n: 6, f: 'z critical values for one-tailed 5%, one-tailed 1% and two-tailed 5% tests', b: 'One-tailed 5%: 1.645.\nOne-tailed 1%: 2.326.\nTwo-tailed 5%: ±1.960.' },
    ]),

    // Unit M2: Mechanics (International A-level)
    ...sub(M2, 'm2-mathematical-modelling-oxfordaqa-alevel-maths', 'M2.1', [
      { n: 1, f: 'The mathematical modelling cycle', b: '1. Simplify and state assumptions.\n2. Write the mathematics and solve.\n3. Interpret in context.\n4. Compare with evidence and judge validity.\n5. Refine the assumptions if needed.' },
      { n: 2, f: 'Modelling a body as a particle', b: 'Its size and rotation are ignored and all forces act at one point. A large body can be a point mass when its size is small compared with the distances involved.' },
      { n: 3, f: 'Modelling words: light, inextensible, smooth, and motion under gravity', b: 'Light: negligible mass, same tension all along a string.\nInextensible: fixed length, so connected objects share speed and acceleration.\nSmooth: no friction.\nMotion under gravity: only gravity acts, g constant, no air resistance.' },
      { n: 4, f: 'How do you comment on the validity of a model?', b: 'Name the assumption, say which way the prediction shifts, and suggest an improvement. Example: ignoring air resistance makes a predicted fall time too short and the impact speed too large.' },
    ]),
    ...sub(M2, 'm2-kinematics-oxfordaqa-alevel-maths', 'M2.2', [
      { n: 1, f: 'Vector kinematics: links between r, v and a', b: 'v = dr/dt and a = dv/dt, component by component.\nr = ∫ v dt and v = ∫ a dt, each with a constant vector.\nSpeed = |v|.' },
      { n: 2, f: 'a = 6t i − 2j and v = 4i when t = 0. Find v and the speed at t = 1.', b: 'v = (3t² + 4)i − 2t j (the j constant is 0).\nAt t = 1: v = 7i − 2j, speed √53 ≈ 7.28.' },
      { n: 3, f: 'Conditions for "at rest" and for "moving parallel to i"', b: 'At rest: every component of v is zero at the same time.\nParallel to i: only the other component(s) of v are zero.' },
      { n: 4, f: 'How do you show that two particles collide?', b: 'Equate the i components and the j components of their position vectors. They collide only if one value of t satisfies every component; then substitute to give the position.' },
      { n: 5, f: 'Direction of motion when v = 3i − 4j', b: 'tan⁻¹(4/3) = 53.1° below the direction of i. State the axis the angle is measured from.' },
    ]),
    ...sub(M2, 'm2-statics-and-forces-oxfordaqa-alevel-maths', 'M2.3', [
      { n: 1, f: 'Friction in equilibrium, and the condition to rest on a rough slope with no other force', b: 'F ≤ μR; F = μR only when on the point of slipping (limiting).\nA particle rests on a slope at angle α with no other force if μ ≥ tan α.' },
      { n: 2, f: 'A 6 kg particle is on a rough slope at 30° with μ = 0.2. Find the range of a force P up the slope that keeps it at rest.', b: 'R = 6g cos 30° = 50.92, so maximum friction 10.18; weight component 6g sin 30° = 29.4.\nAbout to slide down: P = 29.4 − 10.18 = 19.2. About to slide up: P = 29.4 + 10.18 = 39.6.\n19.2 N ≤ P ≤ 39.6 N.' },
      { n: 3, f: 'Moment of a force, including a force at angle θ to a rod', b: 'Moment = force × perpendicular distance from the point to its line of action (N m).\nForce F at angle θ to a rod, a distance d along it: moment F d sin θ.' },
      { n: 4, f: 'Conditions for a rigid body in equilibrium, and the tilting condition for a beam', b: 'Resultant force zero and resultant moment zero about any point.\nA beam about to tilt about one support has zero reaction at the other support.' },
      { n: 5, f: 'Centre of mass of particles and of a composite lamina with a hole', b: 'X Σm = Σ mx and Y Σm = Σ my.\nUniform lamina: use areas in place of masses; a removed piece has negative area:\nX = (A_whole x_whole − A_hole x_hole)/(A_whole − A_hole).' },
      { n: 6, f: 'A lamina has centre of mass (3.5, 1.5) and hangs from the origin. Find the angle between the x-axis edge and the vertical.', b: 'The line from the origin to G is vertical. tan α = 1.5/3.5, so α = 23.2° (3 s.f.) between the edge and the vertical.' },
    ]),
    ...sub(M2, 'm2-newtons-law-of-motion-oxfordaqa-alevel-maths', 'M2.4', [
      { n: 1, f: 'Acceleration of a particle sliding down a smooth slope and down a rough slope at angle θ', b: 'Smooth: a = g sin θ, independent of mass.\nRough, sliding down: a = g(sin θ − μ cos θ).\nR = mg cos θ when no other force acts perpendicular to the slope.' },
      { n: 2, f: 'Particle projected up a rough slope: deceleration going up, acceleration coming back down', b: 'Going up, friction acts down the slope: deceleration g(sin θ + μ cos θ).\nComing down, friction acts up the slope: a = g(sin θ − μ cos θ). It slides back only if tan θ > μ.' },
      { n: 3, f: 'A force F = 6t N acts on a 3 kg particle starting from rest. Find v and r.', b: 'a = F/m = 2t.\nv = ∫ 2t dt = t² (constant 0, since it starts from rest).\nr = t³/3 + constant.' },
      { n: 4, f: 'r = (t³ − t)i + 3t² j for a particle of mass 3 kg. Find the force.', b: 'a = d²r/dt² = 6t i + 6j.\nF = ma = 18t i + 18j.' },
      { n: 5, f: 'A 6 kg particle on a rough slope at 20° (μ = 0.3) is pushed up the slope by 50 N parallel to it. Find a.', b: 'R = 6(9.8) cos 20° = 55.25 N; friction 0.3R = 16.58 N down; weight component 20.11 N down.\n50 − 20.11 − 16.58 = 6a, so a = 2.22 m s⁻² up the slope.' },
    ]),
    ...sub(M2, 'm2-projectiles-oxfordaqa-alevel-maths', 'M2.5', [
      { n: 1, f: 'Projectile equations for launch speed V at angle α (origin at the launch point, y up)', b: 'x = (V cos α)t\ny = (V sin α)t − ½gt²\nHorizontal velocity V cos α; vertical velocity V sin α − gt.' },
      { n: 2, f: 'Time of flight, greatest height and range on level ground, and how to get them', b: 'Derive them in answers, do not quote:\ny = 0 gives time of flight 2V sin α/g.\nVertical velocity 0 gives greatest height (V sin α)²/(2g).\nx at landing gives range V² sin 2α/g.' },
      { n: 3, f: 'Which launch angle gives the greatest range, and which angles give equal ranges?', b: 'The range is greatest at 45°. Angles α and 90° − α give the same range on level ground, with different heights and times.' },
      { n: 4, f: 'Equation of the trajectory', b: 'Eliminate t using t = x/(V cos α):\ny = x tan α − gx²/(2V² cos²α) = x tan α − gx²(1 + tan²α)/(2V²).\nThe second form gives a quadratic in tan α when the angle is unknown.' },
      { n: 5, f: 'V = 15 m/s at 60° on level ground. Find the time of flight, greatest height and range.', b: 'Components 7.5 and 12.99 m/s.\nTime = 2 × 12.99/9.8 = 2.65 s.\nHeight = 12.99²/19.6 = 8.61 m.\nRange = 7.5 × 2.651 = 19.9 m.' },
      { n: 6, f: 'Assumptions in the projectile model, and the effect of air resistance', b: 'Particle (size and spin ignored), no air resistance or wind, constant g downwards, motion in a vertical plane.\nAir resistance would normally make the real range and greatest height smaller.' },
    ]),
    ...sub(M2, 'm2-work-and-energy-oxfordaqa-alevel-maths', 'M2.6', [
      { n: 1, f: 'Work done by a constant force', b: 'Work = Fd cos θ (J), where θ is the angle between the force and the motion. A normal reaction does no work; friction and drag do negative work.' },
      { n: 2, f: 'Kinetic energy, gravitational potential energy, and the work-energy principle', b: 'KE = ½mv². GPE = mgh, using vertical height only (h = s sin α on a slope).\nTotal work done = final KE − initial KE.' },
      { n: 3, f: 'A bead slides from rest down a smooth wire, dropping 1.8 m. Find its speed.', b: 'Only gravity does work, so KE + GPE is constant:\nv² = 2 × 9.8 × 1.8 = 35.28, v = 5.94 m s⁻¹ (3 s.f.).' },
      { n: 4, f: 'Power', b: 'Power is the rate of doing work: P = work/time = Fv, where F is the driving force. 1 W = 1 J s⁻¹; convert kW to W.' },
      { n: 5, f: 'A 1500 kg van has power 45 kW and resistance 1000 N. Find its maximum speed on level ground and its acceleration at 20 m s⁻¹.', b: 'Maximum speed: 45 000/1000 = 45 m s⁻¹.\nAt 20 m s⁻¹: driving force 45 000/20 = 2250 N, so a = (2250 − 1000)/1500 = 0.833 m s⁻².' },
      { n: 6, f: 'A 5000 kg lorry climbs at constant speed where sin α = 1/25, resistance 1500 N, power 60 kW. Find its speed.', b: 'F = 1500 + 5000 × 9.8/25 = 1500 + 1960 = 3460 N.\nv = 60 000/3460 = 17.3 m s⁻¹ (3 s.f.).' },
    ]),
    ...sub(M2, 'm2-uniform-circular-motion-oxfordaqa-alevel-maths', 'M2.7', [
      { n: 1, f: 'Formulae for uniform circular motion', b: 'v = rω.\nAcceleration towards the centre a = rω² = v²/r.\nω = 2π/T for a period T. ω in rad s⁻¹.' },
      { n: 2, f: 'Convert n rev/min to rad s⁻¹, and 30 rev/min', b: 'ω = n × 2π/60.\n30 rev/min = π rad s⁻¹.' },
      { n: 3, f: 'Is there a separate "centripetal force" to add to a force diagram?', b: 'No. Draw only the real forces (tension, friction, normal reaction, weight, gravity). Their resultant points to the centre and equals ma, with a = v²/r or rω².' },
      { n: 4, f: 'Conical pendulum: the two resolving equations and the tension', b: 'Vertically: T cos θ = mg.\nTowards the centre: T sin θ = mrω² with r = L sin θ.\nDividing by sin θ gives T = mLω².' },
      { n: 5, f: 'Conical pendulum with L = 0.75 m and θ = 40°. Find the period.', b: 'Depth h = L cos θ = 0.5745 m and ω² = g/h.\nPeriod = 2π√(h/g) = 2π√(0.5745/9.8) = 1.52 s (3 s.f.).' },
      { n: 6, f: 'Vector form of circular motion with centre O, radius r, angular speed ω', b: 'r = r cos(ωt) i + r sin(ωt) j\nv = −rω sin(ωt) i + rω cos(ωt) j\na = −ω² r (towards the centre); |v| = rω and v.r = 0.' },
    ]),
  ],
};
