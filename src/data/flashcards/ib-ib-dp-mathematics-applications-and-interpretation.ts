/**
 * D-444 -- flashcards for IB DP Mathematics: Applications and Interpretation
 * (first assessments for SL and HL 2021).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 *   u: true     Upper tier: HL only. Every card on an AHL subtopic (1.9-1.15,
 *               2.7-2.10, 3.7-3.16, 4.12-4.19, 5.9-5.18) carries it, following
 *               the "(AHL only)" marks in the syllabus record and on Marlbridge's
 *               own AI revision notes. SL students can hide these cards.
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 'DP Mathematics: Applications
 *               and Interpretation'); origin 'revision-notes'.
 *
 * Plain text only (see types.ts). Unicode for maths.
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

const P = 'ib-dp-mathematics-applications-and-interpretation-';
const NUM = `${P}number-and-algebra`;
const FUN = `${P}functions`;
const GEO = `${P}geometry-and-trigonometry`;
const STA = `${P}statistics-and-probability`;
const CAL = `${P}calculus`;

const CPLX = 'ib-dp-mathematics-ai-hl-logarithms-complex-numbers-revision-notes';
const SAMP = 'ib-dp-mathematics-ai-sl-sampling-data-summary-statistics-revision-notes';
const PROB = 'ib-dp-mathematics-ai-sl-probability-binomial-normal-revision-notes';
const CORR = 'ib-dp-mathematics-ai-correlation-hypothesis-testing-revision-notes';
const HLDATA = 'ib-dp-mathematics-ai-hl-data-regression-tests-markov-revision-notes';
const RV = 'ib-dp-mathematics-ai-hl-random-variables-poisson-confidence-revision-notes';
const CALC = 'ib-dp-mathematics-ai-calculus-sl-revision-notes';
const DE = 'ib-dp-mathematics-ai-hl-differential-equations-revision-notes';

export const DECK_IB_IB_DP_MATHEMATICS_APPLICATIONS_AND_INTERPRETATION: FlashcardDeck = {
  boardSlug: 'ib',
  qualificationSlug: 'ib-dp',
  subjectSlug: 'mathematics-applications-and-interpretation',
  syllabusCode: 'DP Mathematics: Applications and Interpretation',
  syllabusSeries: 'First assessments for SL and HL—2021',
  tierScheme: 'sl-hl',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'muhammad-ghazali-siddiqui', reviewedOn: '2026-11-05' },
  cards: [
    // 1 Number and algebra
    ...sub(NUM, `${P}1-1`, '1.1', [
      { n: 1, f: "Standard form", b: "a × 10ᵏ, where 1 ≤ a < 10 and k is an integer." },
      { n: 2, f: "Your GDC shows 6.1E−4. How do you write it in an answer?", b: "6.1 × 10⁻⁴. Never write calculator notation such as 6.1E−4 as a final answer." },
      { n: 3, f: "Calculate (6 × 10⁵) × (3 × 10⁻²) in standard form", b: "Multiply the numbers and add the powers: 18 × 10³ = 1.8 × 10⁴." },
      { n: 4, f: "Why estimate before accepting a GDC answer such as (4.8 × 10⁶) ÷ (1.6 × 10⁻³)?", b: "To catch keying errors. 4.8 ÷ 1.6 = 3 and 10⁶ ÷ 10⁻³ = 10⁹, so the answer should be about 3 × 10⁹, not 3 × 10³." },
    ]),
    ...sub(NUM, `${P}1-2`, '1.2', [
      { n: 1, f: "Arithmetic sequence: nth term formula", b: "uₙ = u₁ + (n − 1)d\nu₁ is the first term, d the common difference, n the term number." },
      { n: 2, f: "Arithmetic series: sum of the first n terms", b: "Sₙ = (n/2)(2u₁ + (n − 1)d) = (n/2)(u₁ + uₙ)" },
      { n: 3, f: "How do you find d and u₁ when you are given u₅ and u₁₂?", b: "1. Subtract: u₁₂ − u₅ = 7d, so find d.\n2. Back-substitute: u₁ = u₅ − 4d.\n3. Use the nth term or sum formula." },
      { n: 4, f: "What does Σ (from r = 1 to n) of an expression in r mean?", b: "Substitute r = 1, 2, …, n into the expression and add the results. Example: Σ (5r + 2) from r = 1 to 16 has u₁ = 7, u₁₆ = 82, so the sum is 8(7 + 82) = 712." },
      { n: 5, f: "Find S₁₂ for an arithmetic sequence with u₁ = 9 and d = −2", b: "S₁₂ = 6(2 × 9 + 11 × (−2)) = 6 × (−4) = −24." },
      { n: 6, f: "Simple interest vs compound interest: which is arithmetic and which is geometric?", b: "Simple interest adds the same amount each year: arithmetic.\nCompound interest adds the same percentage each year: geometric." },
    ]),
    ...sub(NUM, `${P}1-3`, '1.3', [
      { n: 1, f: "Geometric sequence: nth term formula", b: "uₙ = u₁rⁿ⁻¹\nu₁ is the first term, r the common ratio." },
      { n: 2, f: "Geometric series: sum of the first n terms", b: "Sₙ = u₁(rⁿ − 1)/(r − 1), for r ≠ 1." },
      { n: 3, f: "A salary starts at £30 000 and rises 4% a year. Which power of 1.04 gives the salary in year 10?", b: "1.04⁹: u₁₀ = 30 000 × 1.04⁹ = £42 699.35. Using 1.04¹⁰ puts the answer one year out." },
      { n: 4, f: "Find S₆ for the geometric sequence with u₁ = 3 and r = 2", b: "S₆ = 3(2⁶ − 1)/(2 − 1) = 3 × 63 = 189." },
    ]),
    ...sub(NUM, `${P}1-4`, '1.4', [
      { n: 1, f: "Compound interest formula, and what each letter means", b: "FV = PV × (1 + r/(100k))^(kn)\nPV present value, FV future value, r the annual rate (%), k compounding periods per year (1, 2, 4 or 12), n the number of years." },
      { n: 2, f: "Depreciation by i% per year: formula", b: "V = V₀ × (1 − i/100)ⁿ\nExample: £18 000 depreciating 15% a year for 3 years: 18 000 × 0.85³ = £11 054.25." },
      { n: 3, f: "Real value of an amount after n years of inflation at i% per year", b: "Real value = FV ÷ (1 + i/100)ⁿ. Example: €5627.54 after 4 years of 2% inflation is worth 5627.54 ÷ 1.02⁴ = €5198.98 in today's money." },
      { n: 4, f: "TVM solver settings for compound interest on a lump sum", b: "N = years × k, I% = annual rate, PV = −amount invested (money out is negative), PMT = 0, P/Y = C/Y = k. Solve for FV." },
      { n: 5, f: "Interest is compounded monthly for 5 years. What is N in the TVM solver?", b: "N = 12 × 5 = 60 periods, not 5." },
    ]),
    ...sub(NUM, `${P}1-5`, '1.5', [
      { n: 1, f: "Laws of exponents (integer powers)", b: "aᵐ × aⁿ = aᵐ⁺ⁿ\naᵐ ÷ aⁿ = aᵐ⁻ⁿ\n(aᵐ)ⁿ = aᵐⁿ\na⁻ⁿ = 1/aⁿ" },
      { n: 2, f: "What is a logarithm? State the link with exponents", b: "aˣ = b is equivalent to x = log_a b (for b > 0). A logarithm answers ‘what power?’. At SL the base is 10 (log) or e (ln), evaluated with technology." },
      { n: 3, f: "Solve 10ˣ = 350", b: "x = log 350 = 2.54 (3 s.f.)." },
      { n: 4, f: "Simplify (2x⁻²)³", b: "2³x⁻⁶ = 8x⁻⁶ = 8/x⁶." },
    ]),
    ...sub(NUM, `${P}1-6`, '1.6', [
      { n: 1, f: "A mass is 8.6 kg to 1 d.p. State its bounds", b: "8.55 ≤ m < 8.65. The upper bound uses <, not ≤ and not 8.649…" },
      { n: 2, f: "Percentage error formula", b: "ε = |(v_A − v_E)/v_E| × 100%\nv_A is the approximate value, v_E the exact value. Divide by the exact value." },
      { n: 3, f: "Find the percentage error when π is approximated by 3.14", b: "|3.14 − π|/π × 100% = 0.0507% (3 s.f.)." },
      { n: 4, f: "How do you find the maximum percentage error from a rounded measurement?", b: "1. Write the bounds of the measurement.\n2. Calculate the quantity with the measured value and with each bound.\n3. Find the percentage error with each bound as the exact value.\n4. The larger one is the maximum percentage error." },
      { n: 5, f: "y = 2600 to the nearest 100. State its bounds", b: "2550 ≤ y < 2650." },
    ]),
    ...sub(NUM, `${P}1-7`, '1.7', [
      { n: 1, f: "Amortization and annuity", b: "Amortization: repaying a loan with equal regular payments.\nAnnuity: equal regular payments into or out of an account.\nIn exams, payments are made at the end of each period." },
      { n: 2, f: "TVM solver settings to find a loan's regular payment", b: "N = total number of payments, I% = annual rate, PV = +loan (you receive it), FV = 0, P/Y = C/Y = payments per year. Solve PMT; it comes out negative." },
      { n: 3, f: "How do you find the total interest paid on a loan?", b: "Total interest = (number of payments × payment) − amount borrowed. Example: 48 payments of £352.28 on a £15 000 loan: 16 909.44 − 15 000 = £1909.44." },
      { n: 4, f: "How do you find the balance outstanding on a loan after m payments?", b: "In the TVM solver set N = m and PMT = −payment, keep PV = +loan, I% and P/Y = C/Y, and solve for FV." },
      { n: 5, f: "TVM solver trap: the signs of PV and PMT", b: "Money you receive is positive and money you pay out is negative, so PV and PMT must have opposite signs. Same signs give a wrong answer." },
    ]),
    ...sub(NUM, `${P}1-8`, '1.8', [
      { n: 1, f: "Zeros and roots", b: "The x-values where f(x) = 0 are the zeros of the function f and the roots of the equation f(x) = 0." },
      { n: 2, f: "How do you solve a system of linear equations or a polynomial equation in AI?", b: "1. Write the equations in full (method mark).\n2. Use the GDC simultaneous-equation or polynomial solver.\n3. Reject roots outside the context's domain (for example a negative length)." },
      { n: 3, f: "Solve 2x³ − 5x² − 4x + 3 = 0, where x is a length", b: "GDC polynomial solver: x = −1, 0.5 or 3. As a length cannot be negative, reject x = −1, leaving x = 0.5 or x = 3." },
      { n: 4, f: "What do exam systems of linear equations look like at SL?", b: "Up to 3 equations in 3 unknowns, always with a unique solution, solved with technology. Write the system down before quoting the answer." },
    ]),
    ...sub(NUM, `${P}1-9`, '1.9', [
      { n: 1, f: "The three laws of logarithms", b: "Product: log_a xy = log_a x + log_a y\nQuotient: log_a (x/y) = log_a x − log_a y\nPower: log_a xᵐ = m log_a x\n(a, x, y > 0)", u: true },
      { n: 2, f: "Evaluate 2 log 5 + log 8 − log 2", b: "log (5² × 8 ÷ 2) = log 100 = 2.", u: true },
      { n: 3, f: "How do you solve an equation with logarithms on both sides?", b: "1. Use the laws to collect each side into a single log.\n2. Remove the log: log A = log B gives A = B; log A = k gives A = 10ᵏ.\n3. Solve.\n4. Substitute back and reject any root that makes a log argument zero or negative.", u: true },
      { n: 4, f: "Log trap: can log (x + 3) be split into log x + log 3?", b: "No. Only a product splits: log (xy) = log x + log y. There is no rule for log (x + 3), and log (xy) is not log x × log y.", u: true },
      { n: 5, f: "Simplify ln (e³/√e)", b: "ln e^(3 − 1/2) = 5/2.", u: true },
    ]),
    ...sub(NUM, `${P}1-10`, '1.10', [
      { n: 1, f: "Rational exponent", b: "a^(m/n) = (ⁿ√a)ᵐ, and a^(−p) = 1/aᵖ.", u: true, src: CPLX },
      { n: 2, f: "Evaluate 243^(2/5) and 64^(−2/3)", b: "243^(2/5): the fifth root of 243 is 3, then 3² = 9.\n64^(−2/3) = 1/(cube root of 64)² = 1/4² = 1/16.", u: true },
      { n: 3, f: "Simplify (4x^(1/2))³ ÷ 2x", b: "64x^(3/2) ÷ 2x = 32x^(1/2).", u: true },
      { n: 4, f: "Why take the root first when evaluating 81^(3/4) by hand?", b: "The numbers stay small: the fourth root of 81 is 3, then 3³ = 27. Cubing 81 first gives a large number and invites slips.", u: true },
    ]),
    ...sub(NUM, `${P}1-11`, '1.11', [
      { n: 1, f: "Sum to infinity of a geometric series, and when it exists", b: "S∞ = u₁/(1 − r). It exists only when |r| < 1. State this condition when asked to justify that the sum exists.", u: true },
      { n: 2, f: "Find the sum to infinity of 12 + 4 + 4/3 + …", b: "r = 4/12 = 1/3, and |r| < 1, so S∞ = 12/(1 − 1/3) = 12 ÷ (2/3) = 18.", u: true },
      { n: 3, f: "A ball is dropped from height h and each bounce reaches a fraction r of the previous height. Total distance travelled?", b: "h + 2 × hr/(1 − r). The first drop counts once; every rebound counts twice (up and down).", u: true },
      { n: 4, f: "Write 0.272727… as a fraction using a geometric series", b: "0.27 + 0.0027 + … has u₁ = 0.27 and r = 0.01, so S∞ = 0.27/(1 − 0.01) = 27/99 = 3/11.", u: true },
      { n: 5, f: "For which x does 1 + 2x + 4x² + … have a sum to infinity?", b: "r = 2x, so you need |2x| < 1, which gives −1/2 < x < 1/2.", u: true },
    ]),
    ...sub(NUM, `${P}1-12`, '1.12', [
      { n: 1, f: "Cartesian form of a complex number, Re and Im", b: "z = a + bi, where i² = −1. Re(z) = a, Im(z) = b. Note Im(4 − 7i) = −7, not −7i.", u: true, src: CPLX },
      { n: 2, f: "Conjugate", b: "z* = a − bi (reflection in the real axis).", u: true, src: CPLX },
      { n: 3, f: "How do you divide complex numbers by hand?", b: "Multiply top and bottom by the conjugate of the denominator, expand with i² = −1, then split into a + bi.\nExample: (3 + i)/(1 − i) = (3 + i)(1 + i)/2 = (2 + 4i)/2 = 1 + 2i.", u: true },
      { n: 4, f: "Solve x² + 2x + 10 = 0", b: "x = (−2 ± √(4 − 40))/2 = (−2 ± √(−36))/2 = −1 ± 3i.", u: true },
      { n: 5, f: "What does a negative discriminant tell you about a quadratic?", b: "b² − 4ac < 0: the parabola does not meet the x-axis and the roots are a complex conjugate pair, a ± bi.", u: true },
    ]),
    ...sub(NUM, `${P}1-13`, '1.13', [
      { n: 1, f: "Modulus of z = a + bi", b: "|z| = √(a² + b²). It is a length, never negative.", u: true, src: CPLX },
      { n: 2, f: "Argument of z", b: "arg z = θ, the angle from the positive real axis. The Marlbridge notes use radians, −π < θ ≤ π. Check the quadrant from a sketch; do not read arctan(b/a) straight off the GDC.", u: true, src: CPLX },
      { n: 3, f: "Polar and exponential (Euler) forms", b: "Polar: z = r(cos θ + i sin θ) = r cis θ.\nExponential: z = re^(iθ).\nSame r and θ, different notation.", u: true, src: CPLX },
      { n: 4, f: "Multiplying and dividing in exponential form", b: "r₁e^(iθ₁) × r₂e^(iθ₂) = r₁r₂e^(i(θ₁ + θ₂))\nr₁e^(iθ₁) ÷ r₂e^(iθ₂) = (r₁/r₂)e^(i(θ₁ − θ₂))\nMultiply moduli and add arguments; divide moduli and subtract arguments.", u: true },
      { n: 5, f: "Write 2e^(iπ/6) in Cartesian form", b: "2(cos π/6 + i sin π/6) = 2(√3/2 + i/2) = √3 + i.", u: true },
      { n: 6, f: "How do you add two sinusoids of the same frequency with complex numbers?", b: "1. Write A cos(ωt + α) as Ae^(iα).\n2. Add the complex numbers.\n3. The modulus is the new amplitude and the argument the new phase.\n4. Answer as R cos(ωt + β). Do not add the amplitudes directly.", u: true },
    ]),
    ...sub(NUM, `${P}1-14`, '1.14', [
      { n: 1, f: "Order of a matrix, and the order of a product", b: "m × n means m rows and n columns (rows first). (m × n)(n × p) gives m × p: the inner numbers must match.", u: true },
      { n: 2, f: "Is matrix multiplication commutative?", b: "No. AB ≠ BA in general, and a product may exist one way only. It is associative, (AB)C = A(BC), and distributive, A(B + C) = AB + AC.", u: true },
      { n: 3, f: "Determinant and inverse of the 2 × 2 matrix with rows (a, b) and (c, d)", b: "det A = ad − bc.\nA⁻¹ = (1/(ad − bc)) × rows (d, −b) and (−c, a): swap a and d, change the signs of b and c, divide by the determinant. Only if ad − bc ≠ 0.", u: true },
      { n: 4, f: "Singular matrix", b: "A square matrix with determinant 0. It has no inverse.", u: true },
      { n: 5, f: "How do you solve a system of linear equations with matrices?", b: "Write it as Ax = b, check det A ≠ 0, then x = A⁻¹b (A⁻¹ on the left, never bA⁻¹). Use technology for 3 × 3 systems.\nExample: 5x + 3y = 19, 3x + 2y = 12 gives x = 2, y = 3.", u: true },
      { n: 6, f: "Identity matrix I", b: "A square matrix with 1s on the leading diagonal and 0s elsewhere. AI = IA = A.", u: true },
    ]),
    ...sub(NUM, `${P}1-15`, '1.15', [
      { n: 1, f: "Eigenvector and eigenvalue of a matrix M", b: "An eigenvector is a non-zero vector v with Mv = λv. The scalar λ is its eigenvalue. Any non-zero multiple of v is also an eigenvector.", u: true },
      { n: 2, f: "Characteristic polynomial of a 2 × 2 matrix M", b: "det(M − λI). For M with rows (a, b), (c, d) it is (a − λ)(d − λ) − bc. Its roots are the eigenvalues.", u: true },
      { n: 3, f: "Find the eigenvalues and eigenvectors of M with rows (2, 1) and (1, 2)", b: "(2 − λ)² − 1 = λ² − 4λ + 3 = (λ − 1)(λ − 3), so λ = 1 or 3.\nλ = 3: −x + y = 0, v = (1, 1).\nλ = 1: x + y = 0, v = (1, −1).", u: true },
      { n: 4, f: "Diagonalization: how do you find a formula for Mⁿ?", b: "M = PDP⁻¹, so Mⁿ = PDⁿP⁻¹. P has the eigenvectors as columns; D has the matching eigenvalues on its diagonal in the same order. Dⁿ: raise each diagonal entry to n. Check n = 1 gives M.", u: true },
      { n: 5, f: "In xₙ = Tⁿx₀, the eigenvalues of T are 1 and λ₂ with |λ₂| < 1. What happens in the long term?", b: "Write x₀ = αv₁ + βv₂. Then xₙ = α(1)ⁿv₁ + β(λ₂)ⁿv₂. The λ₂ⁿ term shrinks to 0, so xₙ approaches αv₁.", u: true },
    ]),

    // 2 Functions
    ...sub(FUN, `${P}2-1`, '2.1', [
      { n: 1, f: "Three forms of the equation of a straight line", b: "Gradient-intercept: y = mx + c\nGeneral: ax + by + d = 0 (gradient −a/b)\nPoint-gradient: y − y₁ = m(x − x₁)" },
      { n: 2, f: "Gradient from two points; parallel and perpendicular lines", b: "m = (y₂ − y₁)/(x₂ − x₁).\nParallel: m₁ = m₂.\nPerpendicular: m₁ × m₂ = −1." },
      { n: 3, f: "Find the gradient of 4x − 2y + 7 = 0", b: "2y = 4x + 7, so y = 2x + 3.5 and the gradient is 2." },
      { n: 4, f: "A line has equation y = −3x + 1. State the gradient of any line perpendicular to it", b: "1/3, the negative reciprocal of −3." },
      { n: 5, f: "Find the line through (0, 3) and (4, 11) in the form y = mx + c", b: "m = (11 − 3)/4 = 2 and c = 3, so y = 2x + 3." },
    ]),
    ...sub(FUN, `${P}2-2`, '2.2', [
      { n: 1, f: "Function, domain and range", b: "Function: a rule giving exactly one output for each input.\nDomain: the set of inputs (in a model, also limited by the context).\nRange: the set of outputs, written in terms of f(x) or y." },
      { n: 2, f: "Inverse function f⁻¹: when it exists and its graph", b: "It exists only when f is one-to-one. Its graph is the reflection of y = f(x) in y = x, and the domain of f⁻¹ is the range of f." },
      { n: 3, f: "How do you find an inverse function? Use f(x) = 4x − 7", b: "1. Write y = 4x − 7.\n2. Make x the subject: x = (y + 7)/4.\n3. Swap: f⁻¹(x) = (x + 7)/4.\n4. State the domain of f⁻¹ (the range of f)." },
      { n: 4, f: "f⁻¹(x) vs 1/f(x)", b: "f⁻¹(x) is the inverse function, which undoes f. It is not the reciprocal 1/f(x)." },
      { n: 5, f: "State the domain and range of f(x) = 3 + √(x − 1)", b: "Domain x ≥ 1 (the square root needs x − 1 ≥ 0). Range f(x) ≥ 3." },
    ]),
    ...sub(FUN, `${P}2-3`, '2.3', [
      { n: 1, f: "Command terms: sketch vs draw", b: "Sketch: the general shape with key features (intercepts, turning points, asymptotes) labelled in roughly the right places.\nDraw: plotted accurately and to scale, usually on given axes." },
      { n: 2, f: "Copying a graph from your GDC to paper: what must you include?", b: "Labelled axes, the viewing window you used marked on the axes, and every key feature labelled with its coordinates or equation." },
      { n: 3, f: "How do you graph a profit function from revenue R(x) and cost C(x)?", b: "Profit P(x) = R(x) − C(x). Graph y = R(x) − C(x) directly on the GDC. Example: R = 30x − 0.1x², C = 200 + 4x gives P = −0.1x² + 26x − 200." },
      { n: 4, f: "You are asked to sketch a function not named in the syllabus. What do you do?", b: "The same as for any function: graph it on the GDC over a suitable window, then sketch the shape and label its key features." },
    ]),
    ...sub(FUN, `${P}2-4`, '2.4', [
      { n: 1, f: "How do you find the key features of a graph on a GDC?", b: "1. Choose a window that shows every feature.\n2. Zero/root for x-intercepts; evaluate at x = 0 for the y-intercept.\n3. Max/min for turning points (and the vertex).\n4. Trace to large |x| and near excluded values for asymptotes." },
      { n: 2, f: "How do you find where two curves meet using technology?", b: "Graph y = f(x) and y = g(x), use intersect once for each point, and write ‘f(x) = g(x) solved on GDC’ with both coordinates. Widen the window so no point is missed." },
      { n: 3, f: "Horizontal and vertical asymptotes, and how to write them", b: "Horizontal: a line y = k approached as |x| gets large. Vertical: a line x = k where the graph grows without bound. Always write them as equations, such as y = 20 or x = 2." },
      { n: 4, f: "Find the vertex of y = 2x² − 12x + 5", b: "x = −b/(2a) = 12/4 = 3; y = 18 − 36 + 5 = −13. Vertex (3, −13)." },
      { n: 5, f: "Find where y = x² meets y = 2x + 3", b: "x² − 2x − 3 = 0, so x = 3 or x = −1. Points (3, 9) and (−1, 1)." },
    ]),
    ...sub(FUN, `${P}2-5`, '2.5', [
      { n: 1, f: "Quadratic model f(x) = ax² + bx + c: key facts", b: "a ≠ 0. Axis of symmetry x = −b/(2a), with the vertex on it. y-intercept c. One turning point." },
      { n: 2, f: "Exponential model kaˣ + c: asymptote and value at x = 0", b: "Horizontal asymptote y = c; value at x = 0 is k + c. With a > 1, kaˣ + c grows and ka⁻ˣ + c decays (for k > 0)." },
      { n: 3, f: "Direct and inverse variation model", b: "f(x) = axⁿ, n an integer. n > 0: y grows as x grows. n < 0: y shrinks as x grows, and the y-axis is a vertical asymptote." },
      { n: 4, f: "Sinusoidal model a sin(bx) + d (degrees): amplitude, period, principal axis", b: "Amplitude |a|; period 360°/b; principal axis y = d; max d + |a|, min d − |a|.\nExample: h(t) = −12 cos(18t) + 15 has amplitude 12, period 20, max 27, min 3." },
      { n: 5, f: "Which model fits: steady change, one turning point, constant factor, two turning points, repeating?", b: "Steady increase or decrease: linear. One symmetric turning point: quadratic. Constant growth or decay factor, levelling off: exponential. Two turning points: cubic. Repeating pattern: sinusoidal." },
    ]),
    ...sub(FUN, `${P}2-6`, '2.6', [
      { n: 1, f: "The three stages of modelling in the AI guide", b: "1. Develop and fit the model (choose a type, find its parameters, state a domain).\n2. Test and reflect (is it appropriate and reasonable?).\n3. Use it (read values, interpret, predict)." },
      { n: 2, f: "How do you fit a model's parameters at SL?", b: "Use initial conditions first (the value at x = 0 often gives k or c), substitute other points to get equations, and solve them simultaneously on the GDC (up to three unknowns). Write the model in full and check one point." },
      { n: 3, f: "N(t) = k·aᵗ with N(0) = 120 and N(5) = 300. Find k and a", b: "k = 120. 120a⁵ = 300, so a⁵ = 2.5 and a = 2.5^(1/5) = 1.20 (3 s.f.). Keep the unrounded a for predictions." },
      { n: 4, f: "Extrapolation, and why it is risky", b: "Using a model outside the range of the data used to build it. It assumes the pattern continues, which it often does not." },
      { n: 5, f: "How do you check data to choose between a linear and an exponential model?", b: "Linear: constant differences between successive values. Exponential: constant ratios. Check the data both ways." },
    ]),
    ...sub(FUN, `${P}2-7`, '2.7', [
      { n: 1, f: "Composite function (f ∘ g)(x)", b: "(f ∘ g)(x) = f(g(x)): apply g first, then f.\nExample: f(x) = 2x + 1, g(x) = x² gives (f ∘ g)(3) = f(9) = 19, but (g ∘ f)(3) = g(7) = 49.", u: true },
      { n: 2, f: "Inverse function: identity and domain/range swap", b: "(f ∘ f⁻¹)(x) = (f⁻¹ ∘ f)(x) = x. Domain of f⁻¹ = range of f; range of f⁻¹ = domain of f.", u: true },
      { n: 3, f: "Domain restriction", b: "Limiting the domain of a many-to-one function so that it becomes one-to-one and has an inverse. Example: f(x) = (x − 2)² + 1, x ≥ 2 has f⁻¹(x) = 2 + √(x − 1), x ≥ 1.", u: true },
      { n: 4, f: "Finding an inverse that needs a square root: which sign?", b: "Choose the sign that matches the restricted domain of f. Do not leave ± in the answer.", u: true },
      { n: 5, f: "A conversion c(d) = 0.92d is followed by a fee k(e) = 0.98e − 2. Find the single function", b: "(k ∘ c)(d) = 0.98(0.92d) − 2 = 0.9016d − 2. c is applied first, so it goes inside.", u: true },
    ]),
    ...sub(FUN, `${P}2-8`, '2.8', [
      { n: 1, f: "y = f(x − a) + b: what transformation?", b: "Translation a units right and b units up, by the vector (a, b). Note y = f(x + 3) moves the graph 3 units left.", u: true },
      { n: 2, f: "y = −f(x) and y = f(−x)", b: "y = −f(x): reflection in the x-axis.\ny = f(−x): reflection in the y-axis.", u: true },
      { n: 3, f: "y = p f(x) and y = f(qx)", b: "y = p f(x): vertical stretch, scale factor p.\ny = f(qx): horizontal stretch, scale factor 1/q. So f(2x) is a horizontal stretch by 1/2.", u: true },
      { n: 4, f: "Order of steps from y = f(x) to y = p f(q(x − a)) + b", b: "1. Horizontal stretch, factor 1/q.\n2. Horizontal translation by a.\n3. Vertical stretch, factor p.\n4. Vertical translation by b.\nThe vertical stretch must come before the vertical translation.", u: true },
      { n: 5, f: "(4, 6) lies on y = f(x). Find its image on y = 3f(x + 2) − 1", b: "x: 4 − 2 = 2. y: 3 × 6 − 1 = 17. Image (2, 17).", u: true },
    ]),
    ...sub(FUN, `${P}2-9`, '2.9', [
      { n: 1, f: "Half-life model", b: "A = A₀e^(−kt) with k = ln 2 ÷ half-life, or A = A₀(0.5)^(t/half-life).\nExample: A = A₀e^(−0.0462t) has half-life ln 2/0.0462 = 15.0 (3 s.f.).", u: true },
      { n: 2, f: "Logistic model: form and key features", b: "f(x) = L/(1 + Ce^(−kx)) with L, C, k > 0. Horizontal asymptote y = L (the carrying capacity). f(0) = L/(1 + C), so C = L/f(0) − 1.", u: true },
      { n: 3, f: "Sinusoidal model in radians: f(x) = a sin(b(x − c)) + d", b: "Amplitude |a|, period 2π/b, phase shift c, principal axis y = d. HL models are in radians unless a degree sign appears.", u: true },
      { n: 4, f: "How do you find a and d of a sinusoidal model from its maximum and minimum?", b: "a = (max − min)/2 and d = (max + min)/2. Example: max 15, min 3 gives |a| = 6, d = 9.", u: true },
      { n: 5, f: "Logarithmic model vs logistic model", b: "f(x) = a + b ln x (b > 0) keeps increasing without a bound, only more and more slowly. A logistic curve levels off towards y = L.", u: true },
      { n: 6, f: "Piecewise model: f(x) = 3x for x < 2 and ax − 4 for x ≥ 2. Find a so that f is continuous", b: "Make the pieces agree at x = 2: 3(2) = 2a − 4, so a = 5.", u: true },
    ]),
    ...sub(FUN, `${P}2-10`, '2.10', [
      { n: 1, f: "Semi-log and log-log graphs: what does a straight line show?", b: "Semi-log (log y against x) straight: an exponential model y = kaˣ.\nLog-log (log y against log x) straight: a power model y = axᵇ.", u: true },
      { n: 2, f: "Linearize y = kaˣ and y = axᵇ", b: "y = kaˣ ⇒ ln y = ln k + x ln a.\ny = axᵇ ⇒ ln y = ln a + b ln x.", u: true },
      { n: 3, f: "How do you choose between an exponential and a power model by linearizing?", b: "1. Find r for (x, ln y) and for (ln x, ln y).\n2. The pair with |r| closer to 1 is the better linear fit.\n3. Regress that pair, then convert: exponential k = e^(intercept), a = e^(gradient); power a = e^(intercept), b = gradient.", u: true },
      { n: 4, f: "Data satisfy log₁₀ y = 0.25x + 0.9. Write y in the form kaˣ", b: "k = 10^0.9 = 7.94 and a = 10^0.25 = 1.78, so y = 7.94 × 1.78ˣ.", u: true },
      { n: 5, f: "Data satisfy ln y = 0.7 ln x + 1.2. Write y in the form axᵇ", b: "a = e^1.2 = 3.32 and b = 0.7 (the gradient itself, not e^0.7), so y = 3.32x^0.7.", u: true },
      { n: 6, f: "Why use a logarithmic scale for very large or very small numbers?", b: "Taking logs turns each power of 10 into a step of 1, so values spread over many orders of magnitude fit on one scale. Example: log₁₀ 0.00025 = −3.60.", u: true },
    ]),

    // 3 Geometry and trigonometry
    ...sub(GEO, `${P}3-1`, '3.1', [
      { n: 1, f: "Distance and midpoint in 3D", b: "d = √((x₂ − x₁)² + (y₂ − y₁)² + (z₂ − z₁)²)\nMidpoint ((x₁ + x₂)/2, (y₁ + y₂)/2, (z₁ + z₂)/2)\nExample: (1, 2, 3) to (4, 6, 15) is √(9 + 16 + 144) = 13." },
      { n: 2, f: "Volumes of a right pyramid, right cone and sphere", b: "Pyramid V = (1/3)Ah, A = base area.\nCone V = (1/3)πr²h.\nSphere V = (4/3)πr³; hemisphere (2/3)πr³." },
      { n: 3, f: "Surface areas of a cone, sphere and hemisphere", b: "Cone curved surface πrl, slant height l = √(r² + h²).\nSphere 4πr².\nHemisphere curved 2πr², plus πr² for the flat face (3πr² in total)." },
      { n: 4, f: "How do you find the angle between a line and a plane?", b: "1. Drop a perpendicular from a point on the line to the plane.\n2. Join its foot to where the line meets the plane (the projection).\n3. Solve the right-angled triangle: line = hypotenuse, perpendicular = opposite." },
      { n: 5, f: "Surface area of a combined solid: the key rule", b: "List every face, cross out faces that are joined together, and add the rest. Use slant height for cones and triangular faces." },
    ]),
    ...sub(GEO, `${P}3-2`, '3.2', [
      { n: 1, f: "Sine rule", b: "a/sin A = b/sin B = c/sin C" },
      { n: 2, f: "Cosine rule, and its form for finding an angle", b: "c² = a² + b² − 2ab cos C\ncos C = (a² + b² − c²)/(2ab)" },
      { n: 3, f: "Area of a triangle from two sides and the included angle", b: "Area = (1/2)ab sin C" },
      { n: 4, f: "Which rule? Two angles and a side / two sides and the included angle / three sides", b: "Two angles and a side: sine rule.\nTwo sides and the included angle: cosine rule.\nThree sides: cosine rule rearranged for cos.\nRight angle present: SOH CAH TOA or Pythagoras." },
      { n: 5, f: "A triangle has sides 7, 9 and 12. Find the largest angle", b: "cos C = (49 + 81 − 144)/(2 × 7 × 9) = −14/126, so C = 96.4°. A negative cosine means an obtuse angle." },
    ]),
    ...sub(GEO, `${P}3-3`, '3.3', [
      { n: 1, f: "Angles of elevation and depression", b: "Both measured from the horizontal: elevation looking up, depression looking down. The angle of depression from A to B equals the angle of elevation from B to A (alternate angles)." },
      { n: 2, f: "How is a bearing measured and written?", b: "Clockwise from north, written as three figures, such as 077°." },
      { n: 3, f: "The bearing of B from A is 062°. Find the bearing of A from B", b: "Back bearing = 062° + 180° = 242°." },
      { n: 4, f: "A ship sails on 070°, then turns onto 150°. Find the interior angle at the turn", b: "Back bearing at the turn = 070° + 180° = 250°. Interior angle = 250° − 150° = 100°. Draw a north line at every point first." },
      { n: 5, f: "From the top of a 60 m cliff the angle of depression of a buoy is 25°. How far is the buoy from the foot of the cliff?", b: "tan 25° = 60/d, so d = 60/tan 25° = 129 m (3 s.f.)." },
    ]),
    ...sub(GEO, `${P}3-4`, '3.4', [
      { n: 1, f: "Arc length and sector area (θ in degrees)", b: "Arc length = (θ/360) × 2πr\nSector area = (θ/360) × πr²" },
      { n: 2, f: "Perimeter of a sector", b: "Arc length + 2r. Do not forget the two radii." },
      { n: 3, f: "Area of a segment", b: "Sector area − triangle area, where the triangle area is (1/2)r² sin θ." },
      { n: 4, f: "A sector has radius 6 cm and angle 120°. Find its arc length and area", b: "Arc = (120/360) × 12π = 4π = 12.6 cm.\nArea = (120/360) × 36π = 12π = 37.7 cm²." },
    ]),
    ...sub(GEO, `${P}3-5`, '3.5', [
      { n: 1, f: "Perpendicular bisector of AB", b: "The line through the midpoint of AB at right angles to AB. Every point on it is equidistant from A and B." },
      { n: 2, f: "How do you find the perpendicular bisector of two points?", b: "1. Find the midpoint M.\n2. Find the gradient m of AB.\n3. Perpendicular gradient = −1/m.\n4. y − y_M = (−1/m)(x − x_M), then rearrange." },
      { n: 3, f: "Find the perpendicular bisector of (1, −2) and (5, 6) in the form ax + by + d = 0", b: "M = (3, 2), gradient 2, so m⊥ = −1/2. y − 2 = −(1/2)(x − 3) gives x + 2y − 7 = 0." },
      { n: 4, f: "Perpendicular bisector of a horizontal or a vertical segment", b: "Horizontal segment: a vertical bisector x = x_M.\nVertical segment: a horizontal bisector y = y_M.\nNo −1/m needed." },
      { n: 5, f: "A segment lies on 3x + y = 11 with midpoint (2, 5). Find its perpendicular bisector", b: "The segment's gradient is −3, so m⊥ = 1/3. y − 5 = (1/3)(x − 2) gives x − 3y + 13 = 0." },
    ]),
    ...sub(GEO, `${P}3-6`, '3.6', [
      { n: 1, f: "Voronoi diagram: site and cell", b: "Site: a given point the diagram is built around.\nCell: all points closer to that site than to any other. One cell per site." },
      { n: 2, f: "Voronoi diagram: edge and vertex", b: "Edge: the boundary between two cells, part of the perpendicular bisector of their sites.\nVertex: where edges meet; where three edges meet, it is equidistant from three sites." },
      { n: 3, f: "Nearest neighbour interpolation", b: "Estimating a value at a point by the value at the nearest site. The estimate is constant in each cell and jumps at the edges." },
      { n: 4, f: "Toxic waste dump problem: where does the dump go?", b: "At the vertex that is furthest from its nearest sites. List the vertices, find each vertex's distance to one of its three sites, and choose the largest. In exams it is at an intersection of three edges." },
      { n: 5, f: "How do you add a new site to a Voronoi diagram?", b: "1. Find the cell containing the new site.\n2. Draw the bisector of the new site and that cell's site to the cell's edges.\n3. Cross into the next cell and repeat.\n4. Stop when the new cell closes or reaches the boundary.\n5. Delete old edges inside it." },
      { n: 6, f: "How do you show which site is closest to a point P?", b: "Either calculate the distance from P to each nearby site and take the smallest, or substitute P into the edge equation and compare its side with each site's." },
    ]),
    ...sub(GEO, `${P}3-7`, '3.7', [
      { n: 1, f: "Radian", b: "The angle at the centre of a circle subtended by an arc equal in length to the radius. 2π rad = 360°.", u: true },
      { n: 2, f: "Converting between degrees and radians", b: "Degrees to radians: × π/180 (150° = 5π/6).\nRadians to degrees: × 180/π (2.4 rad = 137.5°).", u: true },
      { n: 3, f: "Arc length and sector area with θ in radians", b: "l = rθ and A = ½r²θ. Example: r = 8, θ = 1.2 gives l = 9.6, A = 38.4, perimeter 9.6 + 16 = 25.6.", u: true },
      { n: 4, f: "Which angle unit do HL papers assume?", b: "Radians, unless the question says otherwise. Check the GDC mode before every HL question with angles.", u: true },
    ]),
    ...sub(GEO, `${P}3-8`, '3.8', [
      { n: 1, f: "Definition of cos θ, sin θ and tan θ using the unit circle", b: "The point at angle θ, measured anticlockwise from the positive x-axis, is (cos θ, sin θ). tan θ = sin θ/cos θ.", u: true },
      { n: 2, f: "Pythagorean identity, and a use of it", b: "cos²θ + sin²θ = 1.\nExample: sin θ = 0.6 with θ obtuse gives cos θ = −0.8 (negative in the second quadrant) and tan θ = −0.75.", u: true },
      { n: 3, f: "How do you handle the ambiguous case of the sine rule?", b: "1. Find sin B with the sine rule.\n2. Take the GDC value B₁ and also B₂ = 180° − B₁.\n3. Keep B₂ only if B₂ + the given angle < 180°.\n4. Finish each triangle separately.", u: true },
      { n: 4, f: "a = 7, b = 9, A = 40°. Find the possible values of B", b: "sin B = 9 sin 40°/7, so B = 55.7° or 180° − 55.7° = 124.3°. Both are possible, as 124.3° + 40° < 180°.", u: true },
      { n: 5, f: "How do you solve a trigonometric equation graphically?", b: "Set the GDC to the unit of the interval (usually radians), graph both sides over exactly that interval, and read off every intersection inside it.", u: true },
    ]),
    ...sub(GEO, `${P}3-9`, '3.9', [
      { n: 1, f: "Quick check: what are the columns of a 2 × 2 transformation matrix?", b: "The images of (1, 0) and (0, 1).", u: true },
      { n: 2, f: "Matrix for a rotation by θ anticlockwise about the origin", b: "Rows (cos θ, −sin θ) and (sin θ, cos θ). Determinant 1. For 90°: rows (0, −1) and (1, 0).", u: true },
      { n: 3, f: "Matrices for reflections in the x-axis, the y-axis and y = x", b: "x-axis: rows (1, 0), (0, −1).\ny-axis: rows (−1, 0), (0, 1).\ny = x: rows (0, 1), (1, 0).\nEach has determinant −1.", u: true },
      { n: 4, f: "Matrices for stretches and an enlargement (centre O)", b: "Horizontal stretch factor k: rows (k, 0), (0, 1).\nVertical stretch factor k: rows (1, 0), (0, k).\nEnlargement factor k: rows (k, 0), (0, k), determinant k².", u: true },
      { n: 5, f: "Transformation A is followed by transformation B. Which single matrix?", b: "BA: the first transformation goes on the right.", u: true },
      { n: 6, f: "Area of the image under a matrix transformation", b: "Area of image = |det A| × area of object. Example: rows (2, 1), (1, 3) has det 5, so an area of 5 becomes 25. A translation never changes area.", u: true },
    ]),
    ...sub(GEO, `${P}3-10`, '3.10', [
      { n: 1, f: "Scalar vs vector; base vectors", b: "A scalar has size only; a vector has size and direction. i, j, k are vectors of length 1 along the x-, y- and z-axes, so v = v₁i + v₂j + v₃k.", u: true },
      { n: 2, f: "Magnitude of a vector; vector from A to B", b: "|v| = √(v₁² + v₂² + v₃²).\nAB = b − a, where a and b are the position vectors of A and B.", u: true },
      { n: 3, f: "Normalising a vector", b: "Dividing by its magnitude: v/|v| is the unit vector in the direction of v.\nExample: (6, −2, 3) has magnitude 7, so the unit vector is (6/7, −2/7, 3/7).", u: true },
      { n: 4, f: "A drone moves at 15 m s⁻¹ in the direction 2i − 2j + k. Find its velocity vector", b: "|2i − 2j + k| = 3, so v = 15 × (2i − 2j + k)/3 = 10i − 10j + 5k m s⁻¹. A vector of length L along v is L × v/|v|.", u: true },
    ]),
    ...sub(GEO, `${P}3-11`, '3.11', [
      { n: 1, f: "Vector equation of a line", b: "r = a + λb, where a is the position vector of a point on the line, b is a direction vector and λ is a parameter.", u: true },
      { n: 2, f: "Parametric form of the line through (x₀, y₀, z₀) with direction (l, m, n)", b: "x = x₀ + λl, y = y₀ + λm, z = z₀ + λn.", u: true },
      { n: 3, f: "Does (7, −1, 4) lie on r = (1, 2, −2) + λ(2, −1, 2)?", b: "x: 1 + 2λ = 7 gives λ = 3. y: 2 − 3 = −1 ✓. z: −2 + 6 = 4 ✓. The same λ fits all three, so yes.", u: true },
      { n: 4, f: "How do you test whether two lines intersect?", b: "1. Write both in parametric form (λ for one, μ for the other).\n2. Solve two of the equations for λ and μ.\n3. Check the third. If it holds, substitute to find the point; if not, they do not meet.", u: true },
    ]),
    ...sub(GEO, `${P}3-12`, '3.12', [
      { n: 1, f: "Motion with constant velocity: vector equation", b: "r = r₀ + vt, where r₀ is the position at t = 0 and v is the velocity (the change in position per unit time).", u: true },
      { n: 2, f: "Speed vs velocity in vector kinematics", b: "Velocity is the vector v; speed is its magnitude |v|, a scalar. Example: speed 10 m s⁻¹ in direction 3i − 4j (length 5) gives v = 6i − 8j m s⁻¹.", u: true },
      { n: 3, f: "How do you find the closest approach of two objects?", b: "1. Write r_A and r_B in terms of t.\n2. Form AB = r_B − r_A.\n3. Find |AB|² as a quadratic in t.\n4. Minimise it (differentiate or graph |AB|).\n5. State the time and the distance, with units.", u: true },
      { n: 4, f: "How do you find position from a variable velocity vector?", b: "Integrate each component of v with respect to t, and use the position at t = 0 to find the constants.", u: true },
    ]),
    ...sub(GEO, `${P}3-13`, '3.13', [
      { n: 1, f: "Scalar product: two forms", b: "v · w = v₁w₁ + v₂w₂ + v₃w₃ = |v||w| cos θ. The answer is a number.", u: true },
      { n: 2, f: "Angle between two vectors, and the test for perpendicular", b: "cos θ = (v · w)/(|v||w|). Non-zero vectors are perpendicular if and only if v · w = 0.", u: true },
      { n: 3, f: "Vector product v × w", b: "(v₂w₃ − v₃w₂, v₃w₁ − v₁w₃, v₁w₂ − v₂w₁). A vector perpendicular to both v and w.", u: true },
      { n: 4, f: "|v × w| and its geometric meaning", b: "|v × w| = |v||w| sin θ = the area of the parallelogram with sides v and w. Example: (2, 0, 1) × (1, 3, 0) = (−3, 1, 6), area √46 = 6.78.", u: true },
      { n: 5, f: "Component of a in the direction of b, and perpendicular to b", b: "Along b: (a · b)/|b| = |a| cos θ.\nPerpendicular to b: |a × b|/|b| = |a| sin θ.", u: true },
      { n: 6, f: "Angle between two lines vs angle between two vectors", b: "Vectors can give an obtuse angle. For the acute angle between two lines, use |v · w| with their direction vectors.", u: true },
    ]),
    ...sub(GEO, `${P}3-14`, '3.14', [
      { n: 1, f: "Degree of a vertex, and the handshake result", b: "Degree: the number of edges at a vertex (a loop counts 2). Sum of degrees = 2 × number of edges, so there is always an even number of odd vertices.", u: true },
      { n: 2, f: "Simple graph and complete graph Kₙ", b: "Simple: no loops and no multiple edges.\nKₙ: simple, with every pair of its n vertices joined; it has n(n − 1)/2 edges (K₇ has 21).", u: true },
      { n: 3, f: "Weighted graph and directed graph", b: "Weighted: edges carry values (distance, cost, time).\nDirected: edges have directions; in degree = arrows in, out degree = arrows out.", u: true },
      { n: 4, f: "Subgraph and tree", b: "Subgraph: some of the vertices and edges of a graph.\nTree: connected with no cycles. A tree with n vertices has n − 1 edges.", u: true },
      { n: 5, f: "Connected vs strongly connected", b: "Connected: a route exists between every pair of vertices.\nStrongly connected (directed graphs): every vertex can reach every other along the arrows.", u: true },
    ]),
    ...sub(GEO, `${P}3-15`, '3.15', [
      { n: 1, f: "Adjacency matrix", b: "Entry aᵢⱼ is the number of edges from vertex i to vertex j. Symmetric for an undirected graph. For a directed graph, row sum = out degree and column sum = in degree.", u: true },
      { n: 2, f: "Number of walks of length k, and of length up to k, from i to j", b: "Length k: the (i, j)th entry of Aᵏ.\nLength up to k: the (i, j)th entry of A + A² + … + Aᵏ.", u: true },
      { n: 3, f: "How do you build the transition matrix for a random walk on a graph?", b: "1. Find the degree (or out degree) of each vertex j.\n2. In column j, put 1/degree in the row of each vertex j leads to, 0 elsewhere.\n3. Check every column sums to 1.", u: true },
      { n: 4, f: "Steady state of a graph's transition matrix, and PageRank", b: "s with Ts = s and entries summing to 1: raise T to a high power on the GDC, or solve the equations. PageRank ranks pages (vertices) by their steady-state probabilities.", u: true },
      { n: 5, f: "Adjacency matrix vs transition matrix", b: "A counts edges, with rows = from. T holds probabilities, with columns = from, each column summing to 1.", u: true },
    ]),
    ...sub(GEO, `${P}3-16`, '3.16', [
      { n: 1, f: "Walk, trail, path, circuit, cycle", b: "Walk: any sequence of adjacent edges.\nTrail: no edge repeated.\nPath: no vertex repeated.\nCircuit: a trail that returns to its start.\nCycle: a circuit with no vertex repeated except start/end.", u: true },
      { n: 2, f: "Eulerian test for a connected graph", b: "0 odd vertices: an Eulerian circuit.\n2 odd vertices: an Eulerian trail from one odd vertex to the other.\nOtherwise: neither.", u: true },
      { n: 3, f: "Eulerian vs Hamiltonian", b: "Eulerian: every edge exactly once. Hamiltonian: every vertex exactly once. There is no simple degree test for Hamiltonian; show one exists by writing it down.", u: true },
      { n: 4, f: "Kruskal's algorithm", b: "1. Order the edges by weight.\n2. Add the next cheapest edge unless it forms a cycle.\n3. Stop at n − 1 edges.\nWrite down the order, including rejected edges.", u: true },
      { n: 5, f: "Prim's algorithm (matrix method)", b: "1. Choose a start vertex: delete its row, label its column.\n2. Find the smallest undeleted entry in the labelled columns; its row is the new vertex.\n3. Delete that row, label that column.\n4. Repeat until every column is labelled.", u: true },
      { n: 6, f: "Chinese postman problem: method", b: "1. Total weight of all edges.\n2. Find the odd vertices.\n3. Two odd: add the shortest path between them. Four odd: check all three pairings and add the least total.\n4. State which edges are repeated.", u: true },
      { n: 7, f: "Travelling salesman: upper and lower bounds", b: "Upper bound: nearest neighbour tour from a start vertex, returning to it.\nLower bound: delete a vertex, find the MST of the rest, add the two shortest edges from the deleted vertex.\nBest interval: largest lower bound ≤ optimal ≤ smallest upper bound.", u: true },
      { n: 8, f: "Table of least distances: when and why?", b: "When the graph is not complete, or a direct edge is not the shortest route. Each entry is the shortest route between the two vertices (for example A–C–B = 9 replaces a direct AB of 12).", u: true },
    ]),

    // 4 Statistics and probability
    ...sub(STA, `${P}4-1`, '4.1', [
      { n: 1, f: "Population and sample", b: "Population: the whole group you want to know about.\nSample: the part of the population you collect data from.", src: SAMP },
      { n: 2, f: "Random sample", b: "Each member of the population has an equal chance of selection.", src: SAMP },
      { n: 3, f: "Discrete vs continuous data", b: "Discrete: separate values, usually counted (number of pets).\nContinuous: any value in a range, measured (reaction time, mass).", src: SAMP },
      { n: 4, f: "Bias", b: "The sample systematically over- or under-represents part of the population.", src: SAMP },
      { n: 5, f: "Stratified vs quota sampling", b: "Both take set numbers from each group, but stratified chooses at random within each group; quota does not.", src: SAMP },
      { n: 6, f: "Systematic vs simple random sampling", b: "Systematic picks at a fixed interval (every k-th item, k = population ÷ sample size) after one random start; simple random picks every member at random.", src: SAMP },
      { n: 7, f: "Outlier", b: "A value more than 1.5 × IQR below Q₁ or above Q₃. Whether it is an error depends on the context.", src: SAMP },
    ]),
    ...sub(STA, `${P}4-2`, '4.2', [
      { n: 1, f: "Drawing a cumulative frequency graph: where are the points plotted?", b: "Each running total at the upper boundary of its class (not the mid-interval value), starting from (lower boundary of the first class, 0)." },
      { n: 2, f: "Reading the median, quartiles and percentiles from a cumulative frequency graph", b: "Read across at n/2 (median), n/4 (Q₁), 3n/4 (Q₃), and (p/100) × n for the p-th percentile, then down to the x-axis." },
      { n: 3, f: "Percentile", b: "The p-th percentile is the value below which p% of the data lie. Q₁ is the 25th, the median the 50th, Q₃ the 75th.", src: SAMP },
      { n: 4, f: "Box and whisker diagram with outliers", b: "Box from Q₁ to Q₃ with a line at the median. Whiskers go to the smallest and largest values that are not outliers. Mark each outlier with a cross." },
      { n: 5, f: "How do you compare two distributions from box plots?", b: "Compare the medians in context (‘on average, group A took longer’), then the IQRs or ranges in context (‘group B’s times were more consistent’). Numbers alone are not enough." },
    ]),
    ...sub(STA, `${P}4-3`, '4.3', [
      { n: 1, f: "Mean of a frequency table, and the estimate for grouped data", b: "x̄ = Σfx/Σf. For grouped data use the mid-interval value as x; the result is an estimate because the actual values are unknown." },
      { n: 2, f: "Mode vs modal class", b: "Mode is a value; modal class is the class with the highest frequency, and the guide uses it only for equal class intervals.", src: SAMP },
      { n: 3, f: "Effect on summary statistics of adding k to every value", b: "Mean, median and quartiles increase by k. Standard deviation, variance, IQR and range do not change." },
      { n: 4, f: "Effect on summary statistics of multiplying every value by k (k > 0)", b: "Mean, median, quartiles, standard deviation, IQR and range are multiplied by k. Variance is multiplied by k².\nExample: sd 6, ×3 then +2: sd 18, variance 324." },
      { n: 5, f: "Standard deviation vs variance", b: "Variance is the square of the standard deviation, so its units are squared. Both are found with technology; at SL treat the data as the population and use σx.", src: SAMP },
      { n: 6, f: "Hand quartiles vs technology quartiles", b: "Different methods exist, so a GDC or spreadsheet may give slightly different values from a hand method.", src: SAMP },
    ]),
    ...sub(STA, `${P}4-4`, '4.4', [
      { n: 1, f: "Bivariate data", b: "Pairs of values (x, y) from the same individual or item.", src: CORR },
      { n: 2, f: "Pearson's r", b: "Strength and direction of a linear relationship, −1 ≤ r ≤ 1. Find it with technology. Describe it with both direction and strength, and the word ‘linear’.", src: CORR },
      { n: 3, f: "Regression line of y on x", b: "y = ax + b, found with technology. Use it to predict y from x, never x from y. a is the change in y per unit increase in x; b is y when x = 0.", src: CORR },
      { n: 4, f: "Mean point", b: "(x̄, ȳ). A line of best fit by eye passes through it, and so does the regression line.", src: CORR },
      { n: 5, f: "Interpolation vs extrapolation", b: "Inside the data range is reasonable; outside is unreliable.", src: CORR },
      { n: 6, f: "Correlation vs causation", b: "A strong correlation does not show that one variable causes the other.", src: CORR },
    ]),
    ...sub(STA, `${P}4-5`, '4.5', [
      { n: 1, f: "Trial and outcome", b: "Trial: one repetition of an experiment.\nOutcome: one possible result.", src: PROB },
      { n: 2, f: "Sample space U and event A", b: "Sample space: the set of all outcomes.\nEvent: a set of outcomes. For equally likely outcomes, P(A) = n(A)/n(U).", src: PROB },
      { n: 3, f: "Relative frequency", b: "(Times A occurred) ÷ (number of trials). An experimental estimate of P(A); more trials bring it closer to the theoretical probability.", src: PROB },
      { n: 4, f: "Complementary event A′", b: "A does not occur. P(A′) = 1 − P(A).", src: PROB },
      { n: 5, f: "Expected number of occurrences", b: "n × P(A). Example: a 0.04 chance of a false alarm per run gives 350 × 0.04 = 14 expected false alarms in 350 runs. It need not be a whole number." },
    ]),
    ...sub(STA, `${P}4-6`, '4.6', [
      { n: 1, f: "Probability of A or B (combined events)", b: "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)." },
      { n: 2, f: "Mutually exclusive events", b: "A and B cannot both occur, so P(A ∩ B) = 0 and P(A ∪ B) = P(A) + P(B).", src: PROB },
      { n: 3, f: "Independent events, and how to test for independence", b: "The occurrence of one does not change the probability of the other: P(A ∩ B) = P(A)P(B). To test, write P(A ∩ B) and P(A) × P(B) side by side: equal means independent.", src: PROB },
      { n: 4, f: "Conditional probability", b: "P(A | B) = P(A ∩ B)/P(B). The ‘given’ event B is the denominator.\nExample: P(A ∩ B) = 0.12, P(B) = 0.4 gives P(A | B) = 0.3." },
      { n: 5, f: "Rain on 30% of days; a bus is late with probability 0.4 if it rains, 0.1 if dry. Find P(rain | late)", b: "P(late) = 0.3 × 0.4 + 0.7 × 0.1 = 0.19.\nP(rain | late) = 0.12/0.19 = 0.632 (3 s.f.)." },
      { n: 6, f: "Tree diagrams with vs without replacement", b: "With replacement: second-stage probabilities are unchanged (independent draws). Without: the denominator drops by 1, and the numerator may too." },
    ]),
    ...sub(STA, `${P}4-7`, '4.7', [
      { n: 1, f: "Discrete random variable", b: "Takes separate values, each with a probability; the probabilities sum to 1.", src: PROB },
      { n: 2, f: "Expected value of a discrete random variable", b: "E(X) = Σ x P(X = x). Example: values 1, 2, 3 with probabilities 0.5, 0.3, 0.2 give E(X) = 0.5 + 0.6 + 0.6 = 1.7." },
      { n: 3, f: "Fair game", b: "E(X) = 0, where X is the player's gain.", src: PROB },
      { n: 4, f: "P(X = 1, 2, 3, 4) = 0.2, 0.35, k, 0.15. Find k", b: "The probabilities sum to 1: 0.2 + 0.35 + k + 0.15 = 1, so k = 0.3." },
      { n: 5, f: "Expected gain for a game with a cost to play: the trap", b: "Subtract the cost from each payout first, so X is the gain, then find E(X). Example: pay 2, win 10 (p 0.1) or 5 (p 0.2): gains 8, 3, −2 give E(X) = 0.8 + 0.6 − 1.4 = 0, a fair game." },
    ]),
    ...sub(STA, `${P}4-8`, '4.8', [
      { n: 1, f: "Conditions for a binomial model X ~ B(n, p)", b: "A fixed number n of trials, two outcomes, constant probability p of success, independent trials." },
      { n: 2, f: "Mean and variance of X ~ B(n, p)", b: "E(X) = np, Var(X) = np(1 − p).\nExample: B(12, 0.4) has E(X) = 4.8 and Var(X) = 2.88." },
      { n: 3, f: "Binomial on the GDC: pdf or cdf?", b: "P(X = r): binomial pdf. P(X ≤ r): binomial cdf. Rewrite others first, for example P(X ≥ 3) = 1 − P(X ≤ 2) and P(X < 5) = P(X ≤ 4)." },
      { n: 4, f: "Is the number of successes when drawing without replacement from a small group binomial?", b: "No: p changes after each draw, so the trials are not independent. Use a tree diagram." },
    ]),
    ...sub(STA, `${P}4-9`, '4.9', [
      { n: 1, f: "Normal distribution: the 68–95–99.7 facts", b: "For X ~ N(μ, σ²): about 68% of values lie in μ ± σ, 95% in μ ± 2σ and 99.7% in μ ± 3σ." },
      { n: 2, f: "X ~ N(μ, σ²): which parameter goes into the GDC?", b: "σ, the standard deviation, not σ². N(60, 25) has σ = 5." },
      { n: 3, f: "Normal probability vs inverse normal on the GDC", b: "Probability P(a < X < b): normal cdf(a, b, μ, σ).\nValue x with P(X < x) = q: inverse normal(q, μ, σ). For P(X > x) = q, enter 1 − q (the area to the left)." },
      { n: 4, f: "X ~ N(60, 5²). Find P(X < 52) and a with P(X < a) = 0.8", b: "P(X < 52) = 0.0548.\na = inverse normal(0.8, 60, 5) = 64.2 (3 s.f.)." },
      { n: 5, f: "P(X < 5) vs P(X ≤ 5): binomial and normal", b: "Binomial (discrete): P(X < 5) = P(X ≤ 4).\nNormal (continuous): P(X < 5) = P(X ≤ 5)." },
    ]),
    ...sub(STA, `${P}4-10`, '4.10', [
      { n: 1, f: "Spearman's rₛ", b: "Pearson's r applied to ranks. Measures a monotonic relationship. Find it with technology; average tied ranks.", src: CORR },
      { n: 2, f: "Pearson vs Spearman", b: "Pearson tests only for linearity; Spearman tests for any monotonic relationship and is less sensitive to outliers.", src: CORR },
      { n: 3, f: "Rank 12, 15, 15, 18, 20 for Spearman's rₛ", b: "1, 2.5, 2.5, 4, 5. The two 15s share positions 2 and 3, so each gets the average rank 2.5." },
      { n: 4, f: "x = 1 to 6, y = 2, 3, 5, 9, 17, 33. Compare rₛ and r", b: "rₛ = 1, because y always increases with x. r = 0.906, because the relationship is curved, not linear. Spearman describes it better." },
      { n: 5, f: "A scatter diagram shows a clear U-shape and r = 0.12. What can you conclude?", b: "Only that there is no linear correlation. The variables are clearly related, but not linearly (nor monotonically), so neither r nor rₛ describes the relationship." },
    ]),
    ...sub(STA, `${P}4-11`, '4.11', [
      { n: 1, f: "H₀ and H₁", b: "H₀: the null hypothesis (‘independent’, ‘fits the distribution’, ‘means equal’).\nH₁: the alternative hypothesis (what you want evidence for).", src: CORR },
      { n: 2, f: "p-value", b: "The probability of a result at least as extreme as the one observed, assuming H₀ is true. Reject H₀ if the p-value is less than the significance level (1%, 5% or 10% in exams).", src: CORR },
      { n: 3, f: "χ² statistic and expected frequency in a contingency table", b: "χ²calc = Σ (f_o − f_e)²/f_e.\nExpected frequency = (row total × column total)/grand total. In exams every expected frequency is greater than 5." },
      { n: 4, f: "Independence vs goodness of fit: degrees of freedom", b: "Independence uses a contingency table and df = (r − 1)(c − 1); goodness of fit compares one row of data with a claimed distribution and at SL uses df = n − 1.", src: CORR },
      { n: 5, f: "p-value vs critical value", b: "Small p-value means reject; large χ²calc means reject. Compare the p-value with the significance level, or χ²calc with the critical value, never across.", src: CORR },
      { n: 6, f: "One-tailed vs two-tailed", b: "‘Greater’, ‘higher’, ‘less’ → one-tailed; ‘different’, ‘differ’ → two-tailed.", src: CORR },
      { n: 7, f: "The t-test at SL: conditions", b: "Two unpaired samples, population variance unknown, populations normal; assume equal variances and use the pooled two-sample t-test on the GDC. H₀: μ₁ = μ₂." },
      { n: 8, f: "‘Do not reject H₀’ vs ‘accept H₀’", b: "A test never proves H₀. Say there is insufficient evidence, and finish with a sentence in context.", src: CORR },
    ]),
    ...sub(STA, `${P}4-12`, '4.12', [
      { n: 1, f: "Biased question", b: "Wording leads towards an answer. Unbiased: neutral wording.", u: true, src: HLDATA },
      { n: 2, f: "Personal question", b: "Sensitive (income, health). Risk of refusal or dishonest answers.", u: true, src: HLDATA },
      { n: 3, f: "Unstructured vs structured question", b: "Unstructured: open answer. Structured question: fixed, consistent answer choices.", u: true, src: HLDATA },
      { n: 4, f: "Precise question", b: "Clear time frame, units and categories that do not overlap. Example: ‘How many hours did you spend on homework last week?’", u: true, src: HLDATA },
      { n: 5, f: "Reliability, and the two reliability tests", b: "Reliability: the method gives consistent results when repeated.\nTest-retest: same test, same group, two different times.\nParallel forms: two equivalent versions, same group.", u: true, src: HLDATA },
      { n: 6, f: "Validity, and the two kinds of validity", b: "Validity: the method measures what it claims to.\nContent validity: covers the whole topic.\nCriterion-related validity: agrees with an established measure.", u: true, src: HLDATA },
      { n: 7, f: "χ² goodness of fit with estimated parameters: degrees of freedom", b: "df = number of categories − 1 − number of parameters estimated from the data. Merge categories first until every expected frequency is greater than 5. Example: 7 categories, p estimated: df = 5.", u: true },
    ]),
    ...sub(STA, `${P}4-13`, '4.13', [
      { n: 1, f: "Residual and SSres", b: "Residual = observed y − predicted y. SSres = Σ(yᵢ − ŷᵢ)², the sum of the squared residuals. Smaller means a closer fit.", u: true, src: HLDATA },
      { n: 2, f: "R², the coefficient of determination", b: "Proportion of the variability in y accounted for by the model. 0 ≤ R² ≤ 1.", u: true, src: HLDATA },
      { n: 3, f: "R² vs r", b: "R² = r² only for a linear model. r has a sign; R² does not.", u: true, src: HLDATA },
      { n: 4, f: "SSres vs R²", b: "SSres depends on the units of y. R² is a proportion, so it has no units.", u: true, src: HLDATA },
      { n: 5, f: "Which regression models are used in AI HL examinations?", b: "Linear, quadratic, cubic, exponential, power and sine, fitted with technology. Choose using R² together with the context, not R² alone.", u: true },
      { n: 6, f: "A model's residuals are 0.3, −0.5, 0.1 and 0.4. Find SSres", b: "0.09 + 0.25 + 0.01 + 0.16 = 0.51.", u: true },
    ]),
    ...sub(STA, `${P}4-14`, '4.14', [
      { n: 1, f: "E(aX + b) and Var(aX + b)", b: "E(aX + b) = aE(X) + b.\nVar(aX + b) = a²Var(X).\nExample: E(X) = 12, Var(X) = 4, Y = 3X − 5 gives E(Y) = 31, Var(Y) = 36.", u: true },
      { n: 2, f: "Mean and variance of a linear combination a₁X₁ + … + aₙXₙ", b: "Mean: a₁E(X₁) + … + aₙE(Xₙ) (any variables).\nVariance: a₁²Var(X₁) + … + aₙ²Var(Xₙ), only if the variables are independent.", u: true },
      { n: 3, f: "Var(X − Y) for independent X and Y", b: "Var(X) + Var(Y). Variances always add, even when the variables are subtracted.", u: true },
      { n: 4, f: "X₁ + X₂ vs 2X", b: "Two independent observations: Var(X₁ + X₂) = 2Var(X). One observation doubled: Var(2X) = 4Var(X). The total of n items is X₁ + … + Xₙ, not nX.", u: true },
      { n: 5, f: "Unbiased estimate", b: "A sample statistic whose expected value equals the population parameter. x̄ estimates μ; s²ₙ₋₁ estimates σ².", u: true, src: RV },
      { n: 6, f: "s²ₙ vs s²ₙ₋₁", b: "s²ₙ: the sample variance (divide by n). s²ₙ₋₁: the unbiased estimate of the population variance (divide by n − 1). s²ₙ₋₁ = (n/(n − 1))s²ₙ; on many GDCs σx is sₙ and Sx is sₙ₋₁.", u: true, src: RV },
    ]),
    ...sub(STA, `${P}4-15`, '4.15', [
      { n: 1, f: "Distribution of the sample mean from a normal population", b: "X ~ N(μ, σ²) ⇒ X̄ ~ N(μ, σ²/n), exactly, for any n. Enter σ/√n as the standard deviation on the GDC.", u: true },
      { n: 2, f: "Central limit theorem (CLT)", b: "For large n, X̄ is approximately normal whatever the distribution of X. In examinations, n > 30 counts as large.", u: true, src: RV },
      { n: 3, f: "How do you find a probability for a combination of normal variables, such as P(A₁ + A₂ > B)?", b: "1. Define T = A₁ + A₂ − B.\n2. Find E(T).\n3. Find Var(T): square each coefficient and add every term.\n4. T is normal, so find P(T > 0) on the GDC with SD √Var(T).", u: true },
      { n: 4, f: "Saying why X̄ is normal: the two reasons", b: "‘The population is normal’ (exact, any n), or ‘n > 30, so by the central limit theorem’ (approximate). State which one applies.", u: true },
    ]),
    ...sub(STA, `${P}4-16`, '4.16', [
      { n: 1, f: "Confidence interval", b: "A range, built from one sample, that would contain μ in the stated percentage of repeated samples.", u: true, src: RV },
      { n: 2, f: "Z-interval or T-interval?", b: "σ known: Z-interval. σ unknown: T-interval using sₙ₋₁, whatever the sample size. A large sample does not let you switch to z.", u: true },
      { n: 3, f: "σ = 3 is known, n = 25 and x̄ = 48.6. Find the 95% confidence interval for μ", b: "x̄ ± 1.96 × σ/√n = 48.6 ± 1.96 × 3/5 = 48.6 ± 1.176, giving [47.4, 49.8].", u: true },
      { n: 4, f: "How do you interpret a 95% confidence interval?", b: "‘We are 95% confident that the mean [quantity] lies between … and ….’ About 95% of intervals built this way would contain μ. It is not a 95% probability that μ is in this one interval.", u: true },
      { n: 5, f: "Width of a confidence interval, and what its midpoint is", b: "A higher confidence level widens it; a larger sample narrows it. The midpoint is x̄: [12.1, 13.5] has x̄ = 12.8.", u: true },
    ]),
    ...sub(STA, `${P}4-17`, '4.17', [
      { n: 1, f: "Po(m)", b: "The Poisson distribution with mean m. X ~ Po(m) means X has this distribution. P(X = x) = e⁻ᵐmˣ/x!, x = 0, 1, 2, …", u: true, src: RV },
      { n: 2, f: "Mean and variance of X ~ Po(m)", b: "E(X) = m and Var(X) = m.", u: true },
      { n: 3, f: "Conditions for a Poisson model, and changing the interval", b: "Events occur independently at a uniform average rate. Scale m to the interval asked about: 2.4 calls per 10 minutes gives Po(4.8) for 20 minutes.", u: true },
      { n: 4, f: "Sum of independent Poisson variables", b: "X ~ Po(m₁) and Y ~ Po(m₂) independent ⇒ X + Y ~ Po(m₁ + m₂).", u: true },
      { n: 5, f: "Emails arrive at 0.6 per minute. Find P(at least one in a given minute)", b: "X ~ Po(0.6). P(X ≥ 1) = 1 − P(X = 0) = 1 − e^(−0.6) = 0.451 (3 s.f.).", u: true },
      { n: 6, f: "Binomial vs Poisson", b: "Binomial: a fixed number of trials and a maximum value n. Poisson: counts events in an interval, with no fixed maximum.", u: true },
    ]),
    ...sub(STA, `${P}4-18`, '4.18', [
      { n: 1, f: "Critical region and critical value", b: "Critical region: values of the test statistic that lead to rejecting H₀. Critical value: its boundary.", u: true, src: HLDATA },
      { n: 2, f: "Type I and Type II errors", b: "Type I error: reject H₀ when H₀ is true.\nType II error: accept H₀ when H₀ is false.", u: true, src: HLDATA },
      { n: 3, f: "P(Type I error): continuous vs discrete tests", b: "For the normal test P(Type I) equals the significance level. For binomial and Poisson tests it is at most the significance level.", u: true, src: HLDATA },
      { n: 4, f: "z vs t test for a mean", b: "σ known vs σ unknown. Use the t-test whenever σ is unknown, whatever the sample size. z = (x̄ − μ)/(σ/√n).", u: true, src: HLDATA },
      { n: 5, f: "Binomial critical region: H₀: p = 0.3, H₁: p < 0.3, n = 20, 5%", b: "P(X ≤ 2) = 0.0355 and P(X ≤ 3) = 0.107, so the critical region is X ≤ 2.", u: true, src: HLDATA },
      { n: 6, f: "How do you find P(Type II error) for a discrete test?", b: "P(X not in the critical region), using the stated true value of the parameter, not the H₀ value.", u: true },
      { n: 7, f: "Matched pairs test", b: "Find the differences for each pair, then do a one-sample test (usually t) on the differences. H₀: μ_d = 0.", u: true },
      { n: 8, f: "Testing for correlation in bivariate normal data", b: "H₀: ρ = 0 against H₁: ρ > 0, ρ < 0 or ρ ≠ 0. The GDC gives r and the p-value to compare with the significance level.", u: true },
    ]),
    ...sub(STA, `${P}4-19`, '4.19', [
      { n: 1, f: "Transition matrix T", b: "Tᵢⱼ = P(moving from state j to state i). Columns sum to 1.", u: true, src: HLDATA },
      { n: 2, f: "Initial state matrix and the state after n steps", b: "s₀ is a column of starting probabilities, and sₙ = Tⁿs₀ (not s₀T).", u: true },
      { n: 3, f: "Regular Markov chain", b: "Some power of T has all entries positive.", u: true, src: HLDATA },
      { n: 4, f: "Steady state s", b: "Ts = s, entries sum to 1. It is the eigenvector for eigenvalue 1, scaled so its entries add to 1.", u: true, src: HLDATA },
      { n: 5, f: "How do you find the exact steady state by equations?", b: "1. Write Ts = s as equations and drop one (they are dependent).\n2. Add ‘entries sum to 1’.\n3. Solve, giving fractions if exact answers are asked for.", u: true },
      { n: 6, f: "T has columns (0.8, 0.2) and (0.3, 0.7), s₀ = (0.5, 0.5)ᵀ. Find s₁ and the steady state", b: "s₁ = (0.55, 0.45)ᵀ. Steady state: 0.2a = 0.3b with a + b = 1, so (3/5, 2/5)ᵀ.", u: true },
    ]),

    // 5 Calculus
    ...sub(CAL, `${P}5-1`, '5.1', [
      { n: 1, f: "Limit", b: "The value a function approaches as x approaches a number. At this level you estimate it from a table or graph only.", src: CALC },
      { n: 2, f: "Derivative", b: "The gradient function of a curve, and the rate of change of one variable with respect to another. Notation: dy/dx, f′(x), dV/dr, ds/dt.", src: CALC },
      { n: 3, f: "Gradient of a curve at a point", b: "The limit of the gradients of chords through that point as the chords shrink.", src: CALC },
      { n: 4, f: "Limit vs value", b: "A function may have a limit at a point where it cannot be evaluated (for example, a chord gradient with h = 0).", src: CALC },
      { n: 5, f: "V is in cm³ and r is in cm. What are the units of dV/dr?", b: "cm³ per cm. A derivative is a rate of change, so its units are (units of V) per (unit of r)." },
    ]),
    ...sub(CAL, `${P}5-2`, '5.2', [
      { n: 1, f: "Increasing and decreasing functions", b: "Increasing: f′(x) > 0. Decreasing: f′(x) < 0.", src: CALC },
      { n: 2, f: "For f(x) = x² − 8x + 3, state where f is increasing", b: "f′(x) = 2x − 8 > 0, so x > 4." },
      { n: 3, f: "Reading the graph of y = f′(x): what does it tell you about f?", b: "Where f′ is above the x-axis, f is increasing; below, f is decreasing. Where f′ crosses zero, f has a stationary point." },
      { n: 4, f: "Common error when stating where a function is increasing", b: "Giving points instead of intervals, or the wrong inequality direction. Answer with an interval such as x > 4." },
    ]),
    ...sub(CAL, `${P}5-3`, '5.3', [
      { n: 1, f: "Derivative of f(x) = axⁿ", b: "f′(x) = anxⁿ⁻¹, for integer n. The derivative of a constant is 0, and sums are differentiated term by term." },
      { n: 2, f: "Differentiate y = 3x² + 6/x", b: "Rewrite as 3x² + 6x⁻¹, then dy/dx = 6x − 6x⁻² = 6x − 6/x²." },
      { n: 3, f: "Find f′(x) when f(x) = 3/x", b: "f(x) = 3x⁻¹, so f′(x) = −3x⁻² = −3/x². The power drops from −1 to −2." },
      { n: 4, f: "Differentiate y = 5x⁴ − 3x + 2", b: "dy/dx = 20x³ − 3." },
    ]),
    ...sub(CAL, `${P}5-4`, '5.4', [
      { n: 1, f: "Tangent and normal to a curve", b: "Tangent: line touching the curve with the same gradient as the curve at that point.\nNormal: line through the same point, perpendicular to the tangent.", src: CALC },
      { n: 2, f: "How do you find the tangent and normal at x = a?", b: "1. Find y = f(a).\n2. Find m = f′(a).\n3. Tangent: y − y₁ = m(x − x₁).\n4. Normal: gradient −1/m through the same point." },
      { n: 3, f: "f(a) vs f′(a)", b: "f(a) is a y-coordinate; f′(a) is a gradient.", src: CALC },
      { n: 4, f: "Find the tangent and normal to y = x² − 3x + 2/x at x = 2", b: "y = 4 − 6 + 1 = −1. dy/dx = 2x − 3 − 2x⁻² = 0.5.\nTangent: y = 0.5x − 2.\nNormal: gradient −2, so y = −2x + 3." },
    ]),
    ...sub(CAL, `${P}5-5`, '5.5', [
      { n: 1, f: "Anti-derivative", b: "A function whose derivative is the given function. Always includes + C.", src: CALC },
      { n: 2, f: "Integral of axⁿ", b: "∫ axⁿ dx = (a/(n + 1))xⁿ⁺¹ + C, for integer n ≠ −1.\nExample: ∫ 6x⁻² dx = −6x⁻¹ + C = −6/x + C." },
      { n: 3, f: "Boundary condition", b: "A known point (x, y) used to find C.", src: CALC },
      { n: 4, f: "dy/dx = 2x + 1 and y = 7 when x = 2. Find y", b: "y = x² + x + C. 4 + 2 + C = 7, so C = 1 and y = x² + x + 1." },
      { n: 5, f: "Indefinite vs definite integral", b: "Indefinite gives a function + C; definite gives a number (found with technology at SL).", src: CALC },
      { n: 6, f: "Area under a curve at SL", b: "A = ∫ₐᵇ f(x) dx when f(x) > 0 on a ≤ x ≤ b. Write the integral with its limits, then evaluate on the GDC. Example: ∫₁³ 3x² dx = 26." },
    ]),
    ...sub(CAL, `${P}5-6`, '5.6', [
      { n: 1, f: "Stationary point", b: "Where f′(x) = 0 (gradient zero).", src: CALC },
      { n: 2, f: "Local maximum/minimum", b: "A stationary point that is higher/lower than the points close to it. It need not be the greatest/least value on the whole domain.", src: CALC },
      { n: 3, f: "How do you classify a stationary point at SL?", b: "Test the sign of f′(x) either side (or use the GDC graph). + to − is a local maximum; − to + is a local minimum. The second derivative test is HL only." },
      { n: 4, f: "f(x) = x³ − 12x. Find and classify the stationary points", b: "f′(x) = 3x² − 12 = 0 gives x = ±2. f′(−3) = 15, f′(0) = −12, f′(3) = 15, so x = −2 is a local maximum and x = 2 a local minimum." },
      { n: 5, f: "Local vs global maximum", b: "A local maximum can be beaten by an end-point value. f(x) = x³ − 6x² + 9x + 1 has a local maximum at (1, 5), but on 0 ≤ x ≤ 5 the greatest value is f(5) = 21." },
    ]),
    ...sub(CAL, `${P}5-7`, '5.7', [
      { n: 1, f: "How do you solve an optimisation problem?", b: "1. Write the quantity to optimise.\n2. Use the constraint to reduce it to one variable.\n3. Differentiate, set equal to 0, solve.\n4. Justify max or min.\n5. Answer in context, with units." },
      { n: 2, f: "P(x) = −2x² + 120x − 1000. Find the maximum profit", b: "P′(x) = −4x + 120 = 0 gives x = 30. P′ changes from + to −, so it is a maximum: P(30) = 800." },
      { n: 3, f: "Optimisation: two checks before you give the answer", b: "Justify that the stationary point is a maximum or minimum (sign of the derivative or a graph), and compare with the end points of the domain if one is given." },
      { n: 4, f: "Optimisation: when should you round?", b: "Only at the end. Keep x unrounded (store it in the GDC) when substituting to find the optimal value." },
    ]),
    ...sub(CAL, `${P}5-8`, '5.8', [
      { n: 1, f: "Trapezoidal rule", b: "Area ≈ (h/2)[y₀ + yₙ + 2(y₁ + … + yₙ₋₁)], where h = (b − a)/n and n is the number of equal strips." },
      { n: 2, f: "Strips vs points", b: "6 x-values means 5 strips in the trapezoidal rule.", src: CALC },
      { n: 3, f: "Use the trapezoidal rule with h = 1 and y-values 2, 3, 5, 6", b: "(1/2)[2 + 6 + 2(3 + 5)] = (1/2)(24) = 12." },
      { n: 4, f: "Widths of a pond are 0, 6.2, 8.4, 9.0, 7.1, 0 m at 5 m spacing. Estimate its area", b: "6 values, so 5 strips and h = 5. Area ≈ 2.5[0 + 0 + 2(30.7)] = 153.5 m²." },
    ]),
    ...sub(CAL, `${P}5-9`, '5.9', [
      { n: 1, f: "Derivatives of sin x, cos x, tan x, eˣ and ln x", b: "sin x → cos x\ncos x → −sin x\ntan x → 1/cos²x\neˣ → eˣ\nln x → 1/x\n(x in radians)", u: true },
      { n: 2, f: "Chain rule", b: "dy/dx = (dy/du)(du/dx). Example: y = ln(3x² + 1) gives dy/dx = 6x/(3x² + 1). Do not forget the inner derivative.", u: true },
      { n: 3, f: "Product rule", b: "d/dx(uv) = u(dv/dx) + v(du/dx). Example: y = x²e⁻ˣ gives 2xe⁻ˣ − x²e⁻ˣ = xe⁻ˣ(2 − x).", u: true },
      { n: 4, f: "Quotient rule", b: "d/dx(u/v) = (v(du/dx) − u(dv/dx))/v². The order in the numerator matters: swapping it flips the sign.", u: true },
      { n: 5, f: "How do you solve a related rates problem?", b: "1. Write the equation linking the quantities.\n2. Differentiate with respect to t (chain rule).\n3. Substitute the known rate and values at that instant (only after differentiating).\n4. Solve, with units.\nExample: dA/dt = 2πr(dr/dt).", u: true },
      { n: 6, f: "Differentiate y = 5x^(2/5)", b: "dy/dx = 5 × (2/5)x^(−3/5) = 2x^(−3/5). The power rule holds for rational n at HL.", u: true },
    ]),
    ...sub(CAL, `${P}5-10`, '5.10', [
      { n: 1, f: "Second derivative and concavity", b: "f′′(x) or d²y/dx², the derivative of the derivative. Concave-up: f′′(x) > 0. Concave-down: f′′(x) < 0.", u: true },
      { n: 2, f: "Point of inflexion, and how to show one", b: "A point where the concavity changes. Solve f′′(x) = 0 and show that f′′ changes sign there; f′′ = 0 alone is not proof.", u: true },
      { n: 3, f: "Second derivative test for a stationary point", b: "At f′(x) = 0: f′′ < 0 → maximum; f′′ > 0 → minimum; f′′ = 0 → test fails, so check the sign of f′ either side.", u: true },
      { n: 4, f: "Find the x-coordinates of the points of inflexion of f(x) = x⁴ − 4x³", b: "f′′(x) = 12x² − 24x = 12x(x − 2). f′′ changes sign at both roots, so x = 0 and x = 2.", u: true },
      { n: 5, f: "Can a stationary point also be a point of inflexion?", b: "Yes. On y = x³, (0, 0) has f′(0) = 0 and the concavity changes there.", u: true },
    ]),
    ...sub(CAL, `${P}5-11`, '5.11', [
      { n: 1, f: "Standard integrals of 1/x, sin x, cos x, 1/cos²x and eˣ", b: "∫ 1/x dx = ln|x| + C\n∫ sin x dx = −cos x + C\n∫ cos x dx = sin x + C\n∫ 1/cos²x dx = tan x + C\n∫ eˣ dx = eˣ + C", u: true },
      { n: 2, f: "Integrate sin(5x + 2) by inspection", b: "−(1/5) cos(5x + 2) + C. Divide by the coefficient of x.", u: true },
      { n: 3, f: "∫ 3x²/(x³ + 4) dx", b: "ln|x³ + 4| + C, because the numerator is the derivative of the denominator.", u: true },
      { n: 4, f: "How do you integrate by substitution?", b: "1. Spot g(x) whose derivative g′(x) appears (up to a constant).\n2. Let u = g(x), du = g′(x) dx.\n3. Rewrite everything in u, including the limits if definite.\n4. Integrate, then substitute back or use the u-limits.", u: true },
      { n: 5, f: "Find ∫ x e^(x²) dx", b: "u = x², du = 2x dx, so the integral is (1/2)∫ eᵘ du = (1/2)e^(x²) + C.", u: true },
    ]),
    ...sub(CAL, `${P}5-12`, '5.12', [
      { n: 1, f: "Definite integral vs area when the curve goes below the x-axis", b: "A definite integral is negative where the curve is below the axis; an area is always positive. Integrate each piece separately and add the absolute values, or use ∫|f(x)| dx on the GDC.", u: true },
      { n: 2, f: "Find ∫₀² (x − 1)³ dx and the area between y = (x − 1)³ and the x-axis for 0 ≤ x ≤ 2", b: "The integral is 0, because the two halves cancel. The area is 1/4 + 1/4 = 1/2.", u: true },
      { n: 3, f: "Volume of revolution about the x-axis", b: "V = ∫ₐᵇ πy² dx, with x-limits. Example: y = √x for 0 ≤ x ≤ 4 gives V = π∫₀⁴ x dx = 8π.", u: true },
      { n: 4, f: "Volume of revolution about the y-axis", b: "V = ∫ₐᵇ πx² dy, with y-limits. Example: y = x² (so x² = y) for 0 ≤ y ≤ 4 gives V = π∫₀⁴ y dy = 8π.", u: true },
      { n: 5, f: "Area between a curve and the y-axis", b: "Rearrange to x in terms of y, convert the limits to y-values, and integrate x with respect to y: A = ∫ x dy (taking |x| where the curve is left of the y-axis).", u: true },
    ]),
    ...sub(CAL, `${P}5-13`, '5.13', [
      { n: 1, f: "Displacement, velocity and acceleration: how are they linked?", b: "v = ds/dt and a = dv/dt = d²s/dt². Displacement is position from a fixed origin and can be negative. Notation: ẋ = dx/dt, ẍ = d²x/dt².", u: true },
      { n: 2, f: "Acceleration when v is given in terms of s", b: "a = v(dv/ds). Example: v = 2s + 3 at s = 1 gives a = 5 × 2 = 10 m s⁻².", u: true },
      { n: 3, f: "Displacement vs total distance travelled", b: "Displacement = ∫ v dt from t₁ to t₂ (can be negative or zero). Distance = ∫ |v| dt (never negative): find where v = 0 and add the absolute values of each piece.", u: true },
      { n: 4, f: "v = 4 − t² m s⁻¹ for 0 ≤ t ≤ 3. Find the displacement and the distance travelled", b: "Displacement = ∫₀³ (4 − t²) dt = 3 m. v = 0 at t = 2, so distance = 16/3 + 7/3 = 23/3 ≈ 7.67 m.", u: true },
      { n: 5, f: "Speeding up or slowing down?", b: "Same signs of v and a: speeding up. Opposite signs: slowing down. Speed is |v|, never negative.", u: true },
    ]),
    ...sub(CAL, `${P}5-14`, '5.14', [
      { n: 1, f: "Differential equation", b: "An equation linking a function and its derivatives, for example dy/dx = ky.", u: true, src: DE },
      { n: 2, f: "General vs particular solution", b: "The general solution keeps the constant; the particular solution does not (the constant is fixed by an initial condition).", u: true, src: DE },
      { n: 3, f: "How do you solve dy/dx = g(x)h(y) by separating variables?", b: "1. Rearrange to (1/h(y)) dy = g(x) dx.\n2. Integrate both sides; add one constant.\n3. Use the initial condition to find it.\n4. Rearrange to y = … if asked.", u: true },
      { n: 4, f: "Solve dy/dx = 2y/x for x > 0, given y = 3 when x = 1", b: "∫ (1/y) dy = ∫ (2/x) dx, so ln y = 2 ln x + c and y = Ax². y(1) = 3 gives y = 3x².", u: true },
      { n: 5, f: "dy/dx = ky: general solution, and the common slip", b: "y = Ae^(kx). From ln y = kx + c, y = e^c × e^(kx) = Ae^(kx), not e^(kx) + c.", u: true },
    ]),
    ...sub(CAL, `${P}5-15`, '5.15', [
      { n: 1, f: "Slope field", b: "Short segments at grid points, each with gradient equal to dy/dx there.", u: true, src: DE },
      { n: 2, f: "How does a solution curve relate to a slope field?", b: "It follows the segments and never crosses them at an angle. Different starting points give different curves; to sketch one, start at the given point and follow the segments both ways.", u: true },
      { n: 3, f: "Find the gradient of the slope field of dy/dx = xy − 1 at (2, 1)", b: "(2)(1) − 1 = 1.", u: true },
      { n: 4, f: "Slope field of dy/dx = x − y: where are segments horizontal, and which line is a solution?", b: "Horizontal on y = x (where x − y = 0). On y = x − 1 every segment has gradient 1, the line's own gradient, so y = x − 1 is itself a solution curve.", u: true },
    ]),
    ...sub(CAL, `${P}5-16`, '5.16', [
      { n: 1, f: "Euler's method for dy/dx = f(x, y)", b: "A step-by-step numerical approximation using the gradient at the start of each step:\nxₙ₊₁ = xₙ + h, yₙ₊₁ = yₙ + h f(xₙ, yₙ).", u: true, src: DE },
      { n: 2, f: "One Euler step with h = 0.1: dy/dx = x + y, y(0) = 1", b: "y₁ = 1 + 0.1(0 + 1) = 1.1.", u: true },
      { n: 3, f: "Coupled system", b: "Two equations dx/dt and dy/dt that each depend on x and y.", u: true, src: DE },
      { n: 4, f: "Euler's method for a coupled system: the key rule", b: "xₙ₊₁ = xₙ + h f₁(xₙ, yₙ, tₙ), yₙ₊₁ = yₙ + h f₂(xₙ, yₙ, tₙ), tₙ₊₁ = tₙ + h. Both updates use the old values; never update y with the new x.", u: true },
      { n: 5, f: "Euler estimate vs exact value", b: "Euler is an approximation; a smaller h usually reduces the error.", u: true, src: DE },
      { n: 6, f: "Euler's method on a GDC or spreadsheet: what must you write?", b: "The formula, h and starting values, and at least the first step by hand. Keep full accuracy in the table and round only the final answer to 3 s.f.", u: true },
    ]),
    ...sub(CAL, `${P}5-17`, '5.17', [
      { n: 1, f: "Phase portrait", b: "A sketch of trajectories in the (x, y) plane, with arrows showing the direction of motion as t increases.", u: true, src: DE },
      { n: 2, f: "Equilibrium point", b: "A point where dx/dt = 0 and dy/dt = 0. For dx/dt = ax + by, dy/dt = cx + dy it is the origin.", u: true, src: DE },
      { n: 3, f: "Real eigenvalues of M: what does the phase portrait look like?", b: "Both positive: all trajectories move away from the origin.\nBoth negative: all move towards it.\nOpposite signs: a saddle point at the origin.", u: true },
      { n: 4, f: "Complex vs imaginary eigenvalues", b: "Complex with non-zero real part gives a spiral (outwards if the real part is positive, inwards if negative); purely imaginary gives a closed orbit (circles or ellipses).", u: true, src: DE },
      { n: 5, f: "How do you find the direction of rotation of a spiral or ellipse?", b: "Use a test point such as (1, 0): if dy/dt > 0 there, the motion is anticlockwise; if dy/dt < 0, clockwise. The real part only decides in or out.", u: true },
      { n: 6, f: "Exact solution of a coupled linear system with real distinct eigenvalues", b: "(x, y) = Ae^(λ₁t)p₁ + Be^(λ₂t)p₂, where p₁, p₂ are eigenvectors. Put t = 0 to find A and B.", u: true },
      { n: 7, f: "Characteristic polynomial for M with rows (a, b) and (c, d)", b: "λ² − (a + d)λ + (ad − bc) = 0. Example: rows (1, 2), (2, 1) gives λ² − 2λ − 3 = 0, λ = 3 or −1: a saddle.", u: true },
    ]),
    ...sub(CAL, `${P}5-18`, '5.18', [
      { n: 1, f: "How do you write d²x/dt² = f(x, dx/dt, t) as a coupled system?", b: "Let y = dx/dt. Then dx/dt = y and dy/dt = f(x, y, t). Solve with the coupled Euler method.", u: true },
      { n: 2, f: "y in a second order system", b: "y means dx/dt, the velocity, not a second unknown function.", u: true, src: DE },
      { n: 3, f: "Matrix for d²x/dt² + a dx/dt + bx = 0", b: "M = [0 1; −b −a], with x across and y = dx/dt up. Above the x-axis dx/dt > 0, so trajectories move right.", u: true },
      { n: 4, f: "d²x/dt² + 4x = 0: eigenvalues and phase portrait", b: "M = [0 1; −4 0], λ = ±2i: ellipses (undamped oscillation). At (1, 0), dy/dt = −4, so the motion is clockwise.", u: true },
      { n: 5, f: "Write d²x/dt² + 4 dx/dt − 5x = 0 as a system and find the eigenvalues", b: "dx/dt = y, dy/dt = 5x − 4y. M = [0 1; 5 −4], λ² + 4λ − 5 = 0, so λ = 1 or −5: a saddle.", u: true },
    ]),
  ],
};
