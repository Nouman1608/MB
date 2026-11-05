/**
 * D-438 -- flashcards for OCR A Level Mathematics A H240
 * (Version 3.1 (August 2026), for first assessment in 2018).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs H240); origin 'revision-notes'.
 *
 * H240 is not tiered, so no card is marked upper tier. Mechanics uses g = 9.8 m s⁻²,
 * as the specification and Marlbridge's H240 notes do.
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

const PURE = 'pure-mathematics-ocr-alevel-maths';
const STATS = 'statistics-ocr-alevel-maths';
const MECH = 'mechanics-ocr-alevel-maths';

const INTB = 'ocr-a-level-mathematics-integration-basics-fundamental-theorem-indefinite-and-revision-notes';
const HYP = 'ocr-a-level-mathematics-hypothesis-testing-language-binomial-tests-and-the-revision-notes';

export const DECK_OCR_A_LEVEL_MATHEMATICS: FlashcardDeck = {
  boardSlug: 'ocr',
  qualificationSlug: 'a-level',
  subjectSlug: 'mathematics',
  syllabusCode: 'H240',
  syllabusSeries: 'Version 3.1 (August 2026), for first assessment in 2018',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  cards: [
    // 1 Pure mathematics
    ...sub(PURE, 'proof-ocr-alevel-maths', '1.01', [
      { n: 1, f: 'Proof by deduction', b: 'Start from known facts and apply valid logical steps to reach the result. Example: (2m + 1) + 2n = 2(m + n) + 1, which is odd because m + n is an integer.' },
      { n: 2, f: 'Proof by exhaustion', b: 'Split the statement into a finite list of cases, prove each one, and say that the cases cover every possibility. Example: checking n = 0, 1, 2, 3, 4 shows n⁴ leaves remainder 0 or 1 on division by 5.' },
      { n: 3, f: 'Disproof by counter-example', b: 'Find one value that satisfies the condition but makes the conclusion false, and check it. Example: "if a > b then 1/a < 1/b" fails for a = 2, b = −1, since 1/2 > −1.' },
      { n: 4, f: 'Proof by contradiction', b: 'Assume the statement is false, then deduce something impossible. So the assumption is wrong and the statement is true. Used for "is irrational" and "there is no …" results, such as √2 is irrational.' },
      { n: 5, f: 'What do ⇒, ⇐ and ⇔ mean?', b: 'P ⇒ Q: if P then Q (P implies Q).\nP ⇐ Q: Q implies P.\nP ⇔ Q: P ⇒ Q and Q ⇒ P (if and only if). To prove ⇔, prove both directions.' },
      { n: 6, f: 'The converse and the contrapositive of P ⇒ Q', b: 'Converse: Q ⇒ P. It may be false even when P ⇒ Q is true.\nContrapositive: not Q ⇒ not P. It is equivalent to P ⇒ Q.' },
      { n: 7, f: 'How do you write an even integer, an odd integer and a rational number in a proof?', b: 'Even: 2n. Odd: 2n + 1 (n an integer).\nRational: a/b with a and b integers, b ≠ 0.\nAlways define the letters, and finish with a sentence stating what has been proved.' },
    ]),
    ...sub(PURE, 'algebra-and-functions-ocr-alevel-maths', '1.02', [
      { n: 1, f: 'What does x^(m/n) mean? Evaluate 16^(−3/4).', b: 'x^(m/n) = (ⁿ√x)ᵐ = ⁿ√(xᵐ). A negative index means the reciprocal.\n16^(−3/4): ⁴√16 = 2, 2³ = 8, so the value is 1/8.' },
      { n: 2, f: 'Rationalise 6/(√7 − 1).', b: 'Multiply top and bottom by the conjugate √7 + 1: 6(√7 + 1)/(7 − 1) = √7 + 1.' },
      { n: 3, f: 'Write x² + 8x + 3 in completed-square form and state the vertex.', b: '(x + 4)² − 16 + 3 = (x + 4)² − 13.\nVertex (−4, −13), a minimum because the x² coefficient is positive.' },
      { n: 4, f: 'Factor theorem (including factors of the form ax − b)', b: '(x − a) is a factor of f(x) ⇔ f(a) = 0.\n(ax − b) is a factor of f(x) ⇔ f(b/a) = 0. For (2x + 1), substitute x = −1/2.' },
      { n: 5, f: 'Find the remainder when 3x³ − 2x + 1 is divided by (x + 2).', b: 'f(−2) = 3(−8) − 2(−2) + 1 = −24 + 4 + 1 = −19. (Long division gives quotient 3x² − 6x + 10, remainder −19.)' },
      { n: 6, f: 'Partial fractions: the forms for (x + p)(x + q), (x + p)² and (x + p)(x + q)²', b: 'A/(x + p) + B/(x + q)\nA/(x + p) + B/(x + p)²\nA/(x + p) + B/(x + q) + C/(x + q)²\nIf the top degree is not less than the bottom degree, divide first.' },
      { n: 7, f: 'Rewrite |x − c| < d and |x − c| > d without the modulus (d > 0).', b: '|x − c| < d ⇔ c − d < x < c + d.\n|x − c| > d ⇔ x < c − d or x > c + d (two regions joined by "or").' },
      { n: 8, f: 'Solve |3x + 5| = x + 1.', b: 'Case 1: 3x + 5 = x + 1 gives x = −2, but then x + 1 = −1 < 0: reject.\nCase 2: −(3x + 5) = x + 1 gives x = −3/2, but x + 1 = −1/2 < 0: reject.\nNo solutions.' },
      { n: 9, f: 'Function, one-one and many-one', b: 'Function: every x in the domain has exactly one image f(x).\nOne-one: each output comes from exactly one input.\nMany-one: two or more inputs share an output (still a function).\nState a range in terms of f(x), not x.' },
      { n: 10, f: 'The inverse function f⁻¹: when it exists, its domain and range, and its graph', b: 'It exists only if f is one-one. Domain of f⁻¹ = range of f; range of f⁻¹ = domain of f. The graph of y = f⁻¹(x) is the reflection of y = f(x) in y = x.' },
      { n: 11, f: 'Describe y = f(x) + a, y = f(x + a), y = af(x) and y = f(ax).', b: 'f(x) + a: translation by (0, a).\nf(x + a): translation by (−a, 0).\naf(x): stretch parallel to the y-axis, scale factor a.\nf(ax): stretch parallel to the x-axis, scale factor 1/a.' },
      { n: 12, f: 'Sketching a factorised polynomial: what happens at a root with an odd power, and with an even power?', b: 'Odd power: the curve crosses the x-axis (flattening as it crosses if the power is 3 or more).\nEven power: the curve touches the axis and turns back.\nThe sign of the highest-power term fixes the ends.' },
      { n: 13, f: 'Asymptotes and shape of y = a/x and y = a/x² for a > 0', b: 'Both have asymptotes x = 0 and y = 0.\ny = a/x: in the first and third quadrants.\ny = a/x²: above the x-axis on both sides, symmetrical in the y-axis.' },
    ]),
    ...sub(PURE, 'coordinate-geometry-in-the-xy-plane-ocr-alevel-maths', '1.03', [
      { n: 1, f: 'Gradient of the line ax + by + c = 0', b: '−a/b. For example 4x + 6y − 9 = 0 gives y = −(2/3)x + 3/2: gradient −2/3, y-intercept 3/2.' },
      { n: 2, f: 'Conditions for parallel and perpendicular lines', b: 'Parallel: m₁ = m₂.\nPerpendicular: m₁ × m₂ = −1, so the perpendicular gradient is −1/m.' },
      { n: 3, f: 'Find the centre and radius of x² + y² + 10x − 2y + 10 = 0.', b: 'Complete the square: (x + 5)² − 25 + (y − 1)² − 1 + 10 = 0, so (x + 5)² + (y − 1)² = 16.\nCentre (−5, 1), radius 4.' },
      { n: 4, f: 'Three circle properties used in coordinate geometry', b: 'The angle in a semicircle is 90°.\nThe perpendicular from the centre to a chord bisects the chord.\nA tangent is perpendicular to the radius at the point of contact.' },
      { n: 5, f: 'How do you convert parametric equations to a Cartesian equation?', b: '1. Rearrange the simpler equation for the parameter, or use an identity such as sin²θ + cos²θ ≡ 1.\n2. Eliminate the parameter.\n3. State any restriction on x or y that the parameter range causes.' },
      { n: 6, f: 'Parametric equations of the circle with centre (a, b) and radius r', b: 'x = a + r cos θ, y = b + r sin θ, for 0 ≤ θ < 2π. Parametric forms are not unique.' },
      { n: 7, f: 'x = 3 − 2 cos θ. What values can x take?', b: 'Since −1 ≤ cos θ ≤ 1, 1 ≤ x ≤ 5. The parameter range restricts the part of the Cartesian curve that exists.' },
      { n: 8, f: 'Convert x = 2 − 5t, y = t² + 1 to a Cartesian equation.', b: 't = (2 − x)/5, so y = (2 − x)²/25 + 1. If t ≥ 0 is stated, then x ≤ 2.' },
    ]),
    ...sub(PURE, 'sequences-and-series-ocr-alevel-maths', '1.04', [
      { n: 1, f: 'Find the coefficient of x² in (2 − x)⁶.', b: '⁶C₂ × 2⁴ × (−1)² = 15 × 16 = 240.' },
      { n: 2, f: 'Binomial expansion of (1 + x)ⁿ for rational n, and its validity', b: '(1 + x)ⁿ = 1 + nx + n(n − 1)x²/2! + n(n − 1)(n − 2)x³/3! + …\nValid for |x| < 1. For (a + bx)ⁿ, take out aⁿ first; valid for |bx/a| < 1.' },
      { n: 3, f: 'Expand (1 + 2x)⁻³ up to x³ and state the validity.', b: '1 + (−3)(2x) + (−3)(−4)(2x)²/2 + (−3)(−4)(−5)(2x)³/6 + …\n= 1 − 6x + 24x² − 80x³ + …, valid for |x| < 1/2.' },
      { n: 4, f: 'Arithmetic series: nth term and sum of n terms', b: 'uₙ = a + (n − 1)d\nSₙ = (n/2)(2a + (n − 1)d) = (n/2)(a + l), where l is the last term.' },
      { n: 5, f: 'Geometric series: nth term, sum of n terms and sum to infinity', b: 'uₙ = arⁿ⁻¹\nSₙ = a(1 − rⁿ)/(1 − r)\nS∞ = a/(1 − r), only when |r| < 1.' },
      { n: 6, f: 'How many terms are in Σ from r = m to k, and what is Σ c over those terms?', b: 'There are k − m + 1 terms, so Σ c = c(k − m + 1), not c.' },
      { n: 7, f: 'xₙ₊₁ = 0.4xₙ + 9 converges. Find its limit.', b: 'If xₙ → L, then L = 0.4L + 9, so 0.6L = 9 and L = 15.' },
      { n: 8, f: 'Increasing, decreasing and periodic sequences', b: 'Increasing: uₙ₊₁ > uₙ for all n.\nDecreasing: uₙ₊₁ < uₙ for all n.\nPeriodic: the terms repeat in a cycle; the order is the cycle length.' },
    ]),
    ...sub(PURE, 'trigonometry-ocr-alevel-maths', '1.05', [
      { n: 1, f: 'Sine rule, cosine rule and area of a triangle', b: 'a/sin A = b/sin B = c/sin C\na² = b² + c² − 2bc cos A\nArea = ½ab sin C (C is the angle between a and b)' },
      { n: 2, f: 'Small-angle approximations (θ in radians)', b: 'sin θ ≈ θ\ncos θ ≈ 1 − θ²/2\ntan θ ≈ θ' },
      { n: 3, f: 'Find the exact value of tan 300°.', b: 'Fourth quadrant, reference angle 60°, tangent negative there: tan 300° = −√3.' },
      { n: 4, f: 'Domains and ranges (principal values) of arcsin x, arccos x and arctan x', b: 'arcsin: −1 ≤ x ≤ 1, −π/2 ≤ y ≤ π/2.\narccos: −1 ≤ x ≤ 1, 0 ≤ y ≤ π.\narctan: all real x, −π/2 < y < π/2.' },
      { n: 5, f: 'sec θ, cosec θ, cot θ and the two identities that use them', b: 'sec θ = 1/cos θ, cosec θ = 1/sin θ, cot θ = 1/tan θ.\nsec²θ ≡ 1 + tan²θ\ncosec²θ ≡ 1 + cot²θ' },
      { n: 6, f: 'Find the exact value of tan 15°.', b: 'tan(45° − 30°) = (1 − 1/√3)/(1 + 1/√3) = (√3 − 1)/(√3 + 1) = 2 − √3.' },
      { n: 7, f: 'sin A = 3/5 with A acute. Find sin 2A and cos 2A.', b: 'cos A = 4/5.\nsin 2A = 2(3/5)(4/5) = 24/25.\ncos 2A = 1 − 2(9/25) = 7/25.' },
      { n: 8, f: 'Write a cos θ + b sin θ as R cos(θ − α).', b: 'Expand: R cos θ cos α + R sin θ sin α. Match R cos α = a and R sin α = b.\nR = √(a² + b²), tan α = b/a. Greatest value R, least −R.' },
      { n: 9, f: 'Solve sin 2x = sin x for 0 ≤ x ≤ 2π.', b: '2 sin x cos x − sin x = 0, so sin x(2 cos x − 1) = 0.\nsin x = 0: x = 0, π, 2π. cos x = 1/2: x = π/3, 5π/3.\nFive solutions; dividing by sin x would lose three.' },
    ]),
    ...sub(PURE, 'exponentials-and-logarithms-ocr-alevel-maths', '1.06', [
      { n: 1, f: 'Definition of a logarithm', b: 'y = aˣ ⇔ x = logₐ y (a > 0, a ≠ 1). Also logₐ a = 1 and logₐ 1 = 0.' },
      { n: 2, f: 'Laws of logarithms', b: 'logₐ x + logₐ y = logₐ(xy)\nlogₐ x − logₐ y = logₐ(x/y)\nk logₐ x = logₐ(xᵏ)\nlog(x + y) cannot be split.' },
      { n: 3, f: 'Graph of y = aˣ (a > 0), and the effect of adding c', b: 'Passes through (0, 1), always positive, asymptote y = 0. Increasing if a > 1, decreasing if 0 < a < 1.\ny = aˣ + c has asymptote y = c and y-intercept 1 + c.' },
      { n: 4, f: 'Gradient of y = e^(kx), and why it matters in models', b: 'dy/dx = k e^(kx). The rate of change is proportional to the current value: k > 0 gives growth, k < 0 gives decay.' },
      { n: 5, f: 'Solve aˣ = b.', b: 'Take logs: x ln a = ln b, so x = ln b/ln a. Isolate the power first and round only at the end.' },
      { n: 6, f: 'Which graph gives a straight line for y = axⁿ, and which for y = kbˣ?', b: 'y = axⁿ: plot log y against log x; gradient n, intercept log a.\ny = kbˣ: plot log y against x; gradient log b, intercept log k.' },
      { n: 7, f: 'N = N₀e^(kt): what do the constants mean, and what is the doubling time or half-life?', b: 'N₀ is the initial value (t = 0); k > 0 is growth, k < 0 is decay.\nDoubling time or half-life = ln 2/|k|.' },
      { n: 8, f: 'Is (log x)² equal to 2 log x?', b: 'No. The power law applies only to the input of the log: log(x²) = 2 log x, but (log x)² is log x multiplied by itself.' },
    ]),
    ...sub(PURE, 'differentiation-ocr-alevel-maths', '1.07', [
      { n: 1, f: 'Differentiation from first principles', b: 'f′(x) = lim (h → 0) [f(x + h) − f(x)]/h: the limit of the chord gradient as the chord shrinks to a tangent.' },
      { n: 2, f: 'Derivatives of e^(kx), a^(kx), ln x, sin kx, cos kx and tan kx', b: 'k e^(kx)\nk ln a × a^(kx)\n1/x\nk cos kx\n−k sin kx\nk sec² kx\n(radians)' },
      { n: 3, f: 'Convex, concave and point of inflection', b: 'Convex on an interval: f″(x) > 0 there.\nConcave: f″(x) < 0.\nPoint of inflection: f″(x) = 0 and the curve changes between concave and convex (f″ changes sign).' },
      { n: 4, f: 'How do you classify a stationary point?', b: 'Solve dy/dx = 0. Then d²y/dx² > 0: minimum; d²y/dx² < 0: maximum. If d²y/dx² = 0, check the sign of dy/dx either side (− to + is a minimum, + to − a maximum).' },
      { n: 5, f: 'Product rule and quotient rule', b: 'y = uv: dy/dx = uv′ + vu′.\ny = u/v: dy/dx = (vu′ − uv′)/v².' },
      { n: 6, f: 'Chain rule, connected rates, and dy/dx from dx/dy', b: 'dy/dx = (dy/du) × (du/dx).\nConnected rates: dV/dt = (dV/dr) × (dr/dt).\ndy/dx = 1/(dx/dy).' },
      { n: 7, f: 'Implicit and parametric differentiation', b: 'Implicit: differentiate each term with respect to x; d/dx(yⁿ) = nyⁿ⁻¹ dy/dx.\nParametric: dy/dx = (dy/dt) ÷ (dx/dt).' },
      { n: 8, f: 'Differentiate y = (2x + 1)e^(−3x).', b: 'Product rule: 2e^(−3x) − 3(2x + 1)e^(−3x) = −(6x + 1)e^(−3x).' },
      { n: 9, f: 'Increasing and decreasing functions', b: 'Increasing on an interval where dy/dx > 0; decreasing where dy/dx < 0. Factorise the derivative and use a sign table or sketch.' },
    ]),
    ...sub(PURE, 'integration-ocr-alevel-maths', '1.08', [
      { n: 1, f: 'Indefinite vs definite integral', b: 'Indefinite: no limits, answer is a function plus c. Definite: limits, answer is a number.', src: INTB },
      { n: 2, f: '∫ e^(kx) dx, ∫ 1/x dx, ∫ sin kx dx and ∫ cos kx dx', b: '(1/k)e^(kx) + c\nln|x| + c\n−(1/k) cos kx + c\n(1/k) sin kx + c' },
      { n: 3, f: 'Area between two curves', b: '∫ₐᵇ (upper − lower) dx, where a and b are the x-coordinates of the intersections. Regions below the x-axis give negative integrals, so split at the roots for an area.' },
      { n: 4, f: 'Find ∫ 5x²/(x³ + 2) dx.', b: 'The derivative of x³ + 2 is 3x², so the top is (5/3) × 3x².\nAnswer: (5/3) ln|x³ + 2| + c.' },
      { n: 5, f: '∫ k f′(x)/f(x) dx and ∫ f′(x)[f(x)]ⁿ dx', b: '∫ k f′(x)/f(x) dx = k ln|f(x)| + c\n∫ f′(x)[f(x)]ⁿ dx = [f(x)]ⁿ⁺¹/(n + 1) + c, n ≠ −1' },
      { n: 6, f: 'Integration by parts', b: '∫ u (dv/dx) dx = uv − ∫ v (du/dx) dx. Choose u to be the part that simplifies when differentiated (for example x in x eˣ, or ln x).' },
      { n: 7, f: 'Integration by substitution u = g(x): what must you replace?', b: 'Replace every x, replace dx using du/dx, and change the limits to u-values (or substitute back before using x-limits).' },
      { n: 8, f: 'How do you solve a separable differential equation dy/dx = f(x)g(y)?', b: '1. Separate: ∫ (1/g(y)) dy = ∫ f(x) dx.\n2. Integrate, adding one constant.\n3. Use the initial condition to find it.\n4. Make y the subject if asked: ln|y − a| = g(x) + c gives y − a = Ae^(g(x)).' },
      { n: 9, f: 'Solve dy/dx = 2xy + 6x with y = 1 when x = 0.', b: 'dy/dx = 2x(y + 3), so ∫ 1/(y + 3) dy = ∫ 2x dx and ln|y + 3| = x² + c.\ny + 3 = Ae^(x²); at x = 0, A = 4.\ny = 4e^(x²) − 3.' },
      { n: 10, f: 'Area as the limit of a sum', b: 'Area = lim (δx → 0) Σ f(x)δx = ∫ f(x) dx. Each strip has area about f(x)δx.' },
    ]),
    ...sub(PURE, 'numerical-methods-ocr-alevel-maths', '1.09', [
      { n: 1, f: 'Locating a root by a change of sign', b: 'If f is continuous on [a, b] and f(a), f(b) have opposite signs, then f(x) = 0 has a root between a and b. Quote both values and state the continuity.' },
      { n: 2, f: 'How do you show that a root is 1.76 to 2 decimal places?', b: 'Show a sign change of f between 1.755 and 1.765 (half a unit either side of 1.76).' },
      { n: 3, f: 'When can the change-of-sign method fail?', b: 'When the curve touches the axis (a repeated root), when there is an even number of roots in the interval, or when there is a vertical asymptote (a sign change with no root).' },
      { n: 4, f: 'Fixed-point iteration xₙ₊₁ = g(xₙ): when does it converge, and how is it drawn?', b: 'It converges to α if |g′(α)| < 1 and x₁ is close enough to α.\nDiagram: draw y = x and y = g(x); go vertically to the curve, then horizontally to the line, repeatedly (a staircase or a cobweb).' },
      { n: 5, f: 'Newton–Raphson formula', b: 'xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ)' },
      { n: 6, f: 'Use Newton–Raphson on f(x) = x² − 2 with x₁ = 1 to find x₂ and x₃.', b: 'f′(x) = 2x.\nx₂ = 1 − (−1)/2 = 1.5.\nx₃ = 1.5 − 0.25/3 = 1.4167 (4 d.p.), approaching √2.' },
      { n: 7, f: 'When does Newton–Raphson fail?', b: 'When f′(xₙ) = 0 (division by zero). A starting value near a stationary point can send the next value far from the root.' },
      { n: 8, f: 'Trapezium rule: when is it an overestimate, and when an underestimate?', b: '(h/2)[y₀ + yₙ + 2(y₁ + … + yₙ₋₁)], h = (b − a)/n.\nConvex curve (f″ > 0): overestimate.\nConcave curve (f″ < 0): underestimate.' },
      { n: 9, f: 'Bounding an integral with rectangles for an increasing function', b: 'Left-edge heights give a lower bound; right-edge heights give an upper bound. For a decreasing function they swap.' },
    ]),
    ...sub(PURE, 'vectors-ocr-alevel-maths', '1.10', [
      { n: 1, f: 'Scalar vs vector', b: 'Scalar: size only (mass, time, speed, distance).\nVector: size and direction (displacement, velocity, acceleration, force).' },
      { n: 2, f: 'Magnitude of xi + yj and of xi + yj + zk', b: '|xi + yj| = √(x² + y²)\n|xi + yj + zk| = √(x² + y² + z²)' },
      { n: 3, f: 'Position vectors a and b of A and B: find →AB, the distance AB and the midpoint.', b: '→AB = b − a.\nAB = |b − a|.\nMidpoint: (a + b)/2.' },
      { n: 4, f: 'When are two vectors parallel?', b: 'When b = ka for some non-zero scalar k.' },
      { n: 5, f: 'Find the components of a vector with magnitude r at angle θ to the positive x-axis.', b: 'x = r cos θ, y = r sin θ, so the vector is r cos θ i + r sin θ j.' },
      { n: 6, f: 'Find the magnitude and direction of 3i − 4j.', b: 'Magnitude √(9 + 16) = 5.\nIt points into the fourth quadrant, at tan⁻¹(4/3) = 53.1° below the positive x-axis (306.9° measured anticlockwise).' },
      { n: 7, f: 'Unit vector in the direction of a', b: 'â = a/|a|. For 3i − 4j it is (3/5)i − (4/5)j.' },
    ]),

    // 2 Statistics
    ...sub(STATS, 'statistical-sampling-ocr-alevel-maths', '2.01', [
      { n: 1, f: 'Population, sample and census', b: 'Population: everything you want information about.\nSample: the part actually observed.\nCensus: observing every member of the population.' },
      { n: 2, f: 'Sampling frame', b: 'A complete list of the population from which a sample is drawn.' },
      { n: 3, f: 'Bias in sampling', b: 'A systematic tendency for a sample to differ from the population, for example because some members could never be chosen.' },
      { n: 4, f: 'How do you take a simple random sample?', b: '1. Make a frame and number it 1 to N.\n2. Generate random numbers in range.\n3. Ignore repeats and out-of-range values.\n4. Stop at n members.' },
      { n: 5, f: 'Opportunity sampling: method and main weakness', b: 'Use whoever is available. It is not random, so it is biased to the place and time of sampling.' },
      { n: 6, f: 'Systematic sampling: method, with a population of 600 and a sample of 40', b: 'Choose every kth member from a random start. Here k = 600/40 = 15, with a random start from 1 to 15. A pattern in the list can clash with k.' },
      { n: 7, f: 'Stratified, cluster and quota sampling in one line each', b: 'Stratified: a proportional random sample from each group.\nCluster: whole groups chosen at random.\nQuota: fixed numbers from each group, chosen by the interviewer (not random).' },
    ]),
    ...sub(STATS, 'data-presentation-and-interpretation-ocr-alevel-maths', '2.02', [
      { n: 1, f: 'Histogram: what is plotted on the vertical axis?', b: 'Frequency density = frequency ÷ class width. The area of each bar is proportional to the frequency.' },
      { n: 2, f: 'Two definitions of a possible outlier', b: 'More than 1.5 × IQR below Q₁ or above Q₃.\nMore than 2 standard deviations from the mean.' },
      { n: 3, f: 'Q₁ = 22 and Q₃ = 30. Is 45 a possible outlier (1.5 × IQR rule)?', b: 'IQR = 8, so 1.5 × IQR = 12 and the upper fence is 30 + 12 = 42. 45 > 42, so yes.' },
      { n: 4, f: 'Which measures resist extreme values?', b: 'The median and the IQR. The mean and standard deviation are affected by extreme values.' },
      { n: 5, f: 'How do you describe a scatter diagram?', b: 'Direction (positive, negative, none), strength (strong, weak), shape (linear or curved), and unusual features (outliers, separate groups), all in context.' },
      { n: 6, f: 'Explanatory and response variables', b: 'Explanatory: plotted on x, thought to influence the other.\nResponse: plotted on y, the variable you predict.' },
      { n: 7, f: 'Interpolation vs extrapolation', b: 'Interpolation: predicting for x inside the range of the data (more reliable).\nExtrapolation: predicting outside the range (unreliable).' },
      { n: 8, f: 'Does strong correlation show that one variable causes the other?', b: 'No. Correlation does not imply causation; a third (confounding) variable may influence both.' },
    ]),
    ...sub(STATS, 'probability-ocr-alevel-maths', '2.03', [
      { n: 1, f: 'Mutually exclusive vs independent', b: 'Mutually exclusive: cannot happen together, P(A ∩ B) = 0.\nIndependent: one does not affect the other, P(A ∩ B) = P(A) × P(B).\nEvents with non-zero probabilities cannot be both.' },
      { n: 2, f: 'Addition rule for any two events', b: 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B).' },
      { n: 3, f: 'Conditional probability', b: 'P(A | B) = P(A ∩ B)/P(B). Along a tree: P(A ∩ B) = P(A) × P(B | A).' },
      { n: 4, f: 'How do you test whether A and B are independent?', b: 'Compare P(A ∩ B) with P(A) × P(B) (or P(B | A) with P(B)). Equal means independent. State the conclusion in a sentence.' },
      { n: 5, f: 'The quickest way to find P(at least one)', b: '1 − P(none).' },
      { n: 6, f: 'With and without replacement on a tree diagram', b: 'Without replacement, the second-stage probabilities depend on the first outcome. With replacement (or from a very large population) they stay the same.' },
    ]),
    ...sub(STATS, 'statistical-distributions-ocr-alevel-maths', '2.04', [
      { n: 1, f: 'P(X = x) = k(2x − 1) for x = 1, 2, 3. Find k and P(X ≥ 2).', b: 'k + 3k + 5k = 1, so k = 1/9.\nP(X ≥ 2) = (3 + 5)/9 = 8/9.' },
      { n: 2, f: 'Conditions for a binomial model B(n, p)', b: 'A fixed number of trials n; each trial has two outcomes; the trials are independent; the probability of success p is constant.' },
      { n: 3, f: 'Binomial: P(X = x), mean and variance', b: 'P(X = x) = ⁿCₓ pˣ qⁿ⁻ˣ, q = 1 − p.\nMean np; variance npq; standard deviation √(npq).' },
      { n: 4, f: 'Shape and key features of the normal distribution N(μ, σ²)', b: 'Bell-shaped and symmetrical about μ, total area 1. Points of inflection at μ ± σ. P(X = a) = 0, so P(X < a) = P(X ≤ a).' },
      { n: 5, f: 'Roughly what proportion of a normal distribution lies within 1, 2 and 3 standard deviations of the mean?', b: 'Within μ ± σ: about two-thirds.\nWithin μ ± 2σ: about 95%.\nWithin μ ± 3σ: almost all.' },
      { n: 6, f: 'Standardising, and how to find x from a probability', b: 'Z = (X − μ)/σ, so X = μ + zσ, with Z ~ N(0, 1).\nInverse normal: enter the area to the left of x.' },
      { n: 7, f: 'Effect of changing μ and σ on the normal curve', b: 'Changing μ moves the curve left or right without changing its shape. A larger σ gives a wider, lower curve; the area stays 1.' },
      { n: 8, f: 'X ~ B(n, p) with n large. Which normal distribution could approximate X?', b: 'N(np, npq). For example B(200, 0.3) is approximately N(60, 42).' },
    ]),
    ...sub(STATS, 'statistical-hypothesis-testing-ocr-alevel-maths', '2.05', [
      { n: 1, f: 'H₀ and H₁', b: 'H₀ always has "=". The direction of H₁ comes from the wording of the question, not the data.', src: HYP },
      { n: 2, f: 'Significance level and p-value', b: 'The level is chosen before; the p-value comes from the data.', src: HYP },
      { n: 3, f: 'Critical value and test statistic', b: 'The critical value is a boundary; the test statistic is the sample result.', src: HYP },
      { n: 4, f: 'Type I and Type II', b: 'Type I is wrongly rejecting a true H₀. Type II is failing to reject a false H₀.', src: HYP },
      { n: 5, f: 'σ and σ/√n', b: 'Use σ for individual values, σ/√n for sample means.', src: HYP },
      { n: 6, f: 'Binomial test: which tail probability is the p-value for H₁: p > p₀, p < p₀ and p ≠ p₀?', b: 'p > p₀: P(X ≥ x) = 1 − P(X ≤ x − 1).\np < p₀: P(X ≤ x).\np ≠ p₀: compare each tail with half the level (or double the smaller tail).' },
      { n: 7, f: 'Normal test for a mean: distribution under H₀ and test statistic', b: 'X̄ ~ N(μ₀, σ²/n), so z = (x̄ − μ₀)/(σ/√n).' },
      { n: 8, f: 'H₀: μ = 60, H₁: μ < 60, σ = 5, n = 25, 5% level. Find the critical region for X̄.', b: 'Under H₀, X̄ ~ N(60, 1²). Critical region: X̄ < 60 − 1.645 × 1 = 58.36 (2 d.p.).' },
      { n: 9, f: 'Testing for correlation with the product moment correlation coefficient', b: 'H₀: ρ = 0; H₁: ρ > 0, ρ < 0 or ρ ≠ 0 (ρ is the population coefficient). Compare the sample r with the critical value for n pairs and the significance level, then conclude in context.' },
      { n: 10, f: 'What does the value of r tell you?', b: '−1 ≤ r ≤ 1. The sign gives the direction; the size gives how close the points lie to a straight line (not the gradient). r near 0 means no linear pattern, though a curve is still possible.' },
    ]),

    // 3 Mechanics
    ...sub(MECH, 'quantities-and-units-in-mechanics-ocr-alevel-maths', '3.01', [
      { n: 1, f: 'The three base quantities in mechanics and their SI units', b: 'Length: metre (m).\nTime: second (s).\nMass: kilogram (kg).' },
      { n: 2, f: 'SI units of velocity, acceleration, force, weight and moment', b: 'Velocity m s⁻¹; acceleration m s⁻²; force newton N = kg m s⁻²; weight N (a force); moment N m.' },
      { n: 3, f: 'Convert 72 km h⁻¹ to m s⁻¹.', b: 'Divide by 3.6: 72 ÷ 3.6 = 20 m s⁻¹.' },
      { n: 4, f: 'How can units show that a formula is wrong?', b: 'Every term must have the same units. In s = ut + ½at² each term is a length (m s⁻¹ × s and m s⁻² × s²). s = u + at² fails, because u is a velocity but at² is a length.' },
      { n: 5, f: 'A runner covers 450 m in 3 minutes. Find the average speed in m s⁻¹.', b: 'Convert first: 3 minutes = 180 s.\n450 ÷ 180 = 2.5 m s⁻¹.' },
    ]),
    ...sub(MECH, 'kinematics-ocr-alevel-maths', '3.02', [
      { n: 1, f: 'The constant-acceleration (suvat) formulae', b: 'v = u + at\ns = ut + ½at²\ns = vt − ½at²\ns = ½(u + v)t\nv² = u² + 2as' },
      { n: 2, f: 'What do the gradient and the area of a velocity–time graph represent?', b: 'Gradient = acceleration.\nArea between the graph and the t-axis = displacement.' },
      { n: 3, f: 'Variable acceleration in one dimension: differentiation and integration', b: 'v = ds/dt, a = dv/dt = d²s/dt².\ns = ∫ v dt, v = ∫ a dt, each with a constant from a given condition.\nAt rest: v = 0. Maximum velocity: a = 0.' },
      { n: 4, f: 'How do you find the distance travelled when the velocity changes sign?', b: 'Find when v = 0, split the time interval there, and add the magnitudes of the displacements for each part.' },
      { n: 5, f: 'Motion under gravity', b: 'Acceleration g = 9.8 m s⁻² downwards, so a = −g taking up as positive (in vectors a = −gj).' },
      { n: 6, f: 'Projectile launched at speed u at angle α above the horizontal: components and equations', b: 'Horizontal: u cos α, constant, so x = (u cos α)t.\nVertical: u sin α, acceleration −g, so y = (u sin α)t − ½gt².' },
      { n: 7, f: 'Time of flight, range and greatest height of a projectile landing at its launch level', b: 'T = 2u sin α/g\nR = u² sin 2α/g\nH = u² sin²α/(2g)' },
      { n: 8, f: 'Vector kinematics with calculus', b: 'v = dr/dt and a = dv/dt; r = ∫ v dt and v = ∫ a dt. Work with the i and j components separately; the constant of integration is a vector.' },
    ]),
    ...sub(MECH, 'forces-and-newtons-laws-ocr-alevel-maths', '3.03', [
      { n: 1, f: 'Newton’s first law', b: 'A body stays at rest or moves with constant velocity unless a resultant force acts on it: constant velocity means zero resultant force.' },
      { n: 2, f: 'Newton’s second law', b: 'Resultant force = ma, in the direction of the acceleration. In vector form F = ma, component by component.' },
      { n: 3, f: 'Newton’s third law', b: 'When two bodies interact, the forces on each are equal in size and opposite in direction, acting on different bodies.' },
      { n: 4, f: 'A 25 kg passenger is in a lift accelerating upwards at 0.4 m s⁻² (g = 9.8). Find the normal reaction.', b: 'R − 25 × 9.8 = 25 × 0.4, so R = 245 + 10 = 255 N.' },
      { n: 5, f: 'Modelling terms: smooth, light and inextensible', b: 'Smooth: no friction, only a normal contact force.\nLight: mass ignored.\nInextensible string: same speed and acceleration at both ends; a light string has the same tension throughout.' },
      { n: 6, f: 'Friction: the inequality and when it is limiting', b: 'F ≤ μR, where μ is the coefficient of friction (no units). F = μR when the body is on the point of moving (limiting) or sliding.' },
      { n: 7, f: 'Magnitude of the total contact force from a rough surface', b: 'S = √(R² + F²), combining the normal reaction R and the friction F.' },
      { n: 8, f: 'Components of a force F at angle θ to a line', b: 'Along the line: F cos θ.\nAt right angles to the line: F sin θ.\nOn a slope at α, the weight has mg sin α down the plane and mg cos α into it.' },
      { n: 9, f: 'How do you solve an equilibrium problem with several forces on a particle?', b: '1. Draw every force.\n2. Resolve in two perpendicular directions chosen to remove unknowns.\n3. Set each total to zero and solve.\nA negative answer means the force acts the other way.' },
      { n: 10, f: 'Why is the normal reaction not always mg?', b: 'R comes from resolving perpendicular to the surface. On a slope, or when a pulling force has a vertical component, R ≠ mg.' },
    ]),
    ...sub(MECH, 'moments-ocr-alevel-maths', '3.04', [
      { n: 1, f: 'Moment of a force about a point', b: 'Force × perpendicular distance from the point to the line of action of the force. Unit N m. A force through the point has zero moment.' },
      { n: 2, f: 'An 18 N force acts 0.5 m from O along a rod, at 60° to the rod. Find its moment about O.', b: '18 × 0.5 × sin 60° = 7.79 N m (3 s.f.).' },
      { n: 3, f: 'Conditions for a rigid body to be in equilibrium', b: 'The resultant force is zero (resolve horizontally and vertically) and the resultant moment about any point is zero.' },
      { n: 4, f: 'Where does the weight act on a uniform rod and on a uniform rectangular lamina?', b: 'Uniform rod: at its midpoint.\nRectangular lamina: at its centre (the point of symmetry).\nFor a non-uniform rod the point is given, or found by moments.' },
      { n: 5, f: 'A beam on two supports is about to tilt about one of them. What does that tell you?', b: 'The reaction at the other support is zero. Take moments about the support still in contact.' },
      { n: 6, f: 'A uniform beam AB of length 4 m and weight 100 N rests on supports at A and B. A 50 N load is 1 m from A. Find the reactions.', b: 'Moments about A: 4R_B = 100 × 2 + 50 × 1 = 250, so R_B = 62.5 N.\nVertically: R_A = 150 − 62.5 = 87.5 N.' },
    ]),
  ],
};
