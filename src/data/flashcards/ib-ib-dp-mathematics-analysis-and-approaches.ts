/**
 * D-438 -- flashcards for IB DP Mathematics: Analysis and Approaches
 * (first assessment 2021).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 *   u: true     Upper tier: HL only (AHL) content. Every card on an AHL subtopic
 *               (1.10-1.16, 2.12-2.16, 3.9-3.18, 4.13-4.14, 5.12-5.19) carries it,
 *               following the syllabus record and Marlbridge's own AA revision
 *               notes. SL students can hide these cards.
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs); origin 'revision-notes'.
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

const P = 'ib-dp-mathematics-analysis-and-approaches-';
/** Subtopic slug from its number, e.g. '1.10' → '...-1-10'. */
const ss = (number: string) => P + number.replace('.', '-');

const T1 = `${P}number-and-algebra`;
const T2 = `${P}functions`;
const T3 = `${P}geometry-and-trigonometry`;
const T4 = `${P}statistics-and-probability`;
const T5 = `${P}calculus`;

const CPX = 'ib-dp-mathematics-aa-hl-complex-numbers-revision-notes';
const VEC = 'ib-dp-mathematics-aa-hl-vectors-lines-planes-revision-notes';
const PROB = 'ib-dp-mathematics-aa-probability-distributions-revision-notes';
const STAT = 'ib-dp-mathematics-aa-statistics-correlation-regression-revision-notes';

export const DECK_IB_IB_DP_MATHEMATICS_ANALYSIS_AND_APPROACHES: FlashcardDeck = {
  boardSlug: 'ib',
  qualificationSlug: 'ib-dp',
  subjectSlug: 'mathematics-analysis-and-approaches',
  syllabusCode: 'DP Mathematics: Analysis and Approaches',
  syllabusSeries: 'First assessment 2021',
  tierScheme: 'sl-hl',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'muhammad-ghazali-siddiqui', reviewedOn: '2026-11-05' },
  cards: [
    // 1 Number and algebra
    ...sub(T1, ss('1.1'), '1.1', [
      { n: 1, f: 'A number in the form a × 10ᵏ: what are the conditions on a and k?', b: '1 ≤ a < 10 and k is an integer.\nCalculator notation such as 2.4E−6 is not acceptable: write 2.4 × 10⁻⁶.' },
      { n: 2, f: 'How do you multiply or divide two numbers in the form a × 10ᵏ?', b: 'Multiply (or divide) the a values and add (or subtract) the powers of 10. Then adjust so that 1 ≤ a < 10.\nExample: (6 × 10⁴)(4 × 10⁻⁹) = 24 × 10⁻⁵ = 2.4 × 10⁻⁴.' },
      { n: 3, f: 'How do you add 4.3 × 10⁵ + 2.1 × 10⁴ without a calculator?', b: 'First write both with the same power of 10:\n4.3 × 10⁵ + 0.21 × 10⁵ = 4.51 × 10⁵.' },
      { n: 4, f: 'Write 0.000 407 in the form a × 10ᵏ', b: '4.07 × 10⁻⁴\n(40.7 × 10⁻⁵ is not in the required form, because 40.7 is not less than 10.)' },
    ]),
    ...sub(T1, ss('1.2'), '1.2', [
      { n: 1, f: 'nth term of an arithmetic sequence', b: 'uₙ = u₁ + (n − 1)d\nu₁ is the first term and d is the common difference (d = u₂ − u₁).' },
      { n: 2, f: 'Sum of the first n terms of an arithmetic sequence (two forms)', b: 'Sₙ = (n/2)(2u₁ + (n − 1)d)\nSₙ = (n/2)(u₁ + uₙ)' },
      { n: 3, f: 'How do you evaluate a sigma sum such as Σ (2r + 1) from r = 5 to r = 20?', b: '1. Count the terms: top − bottom + 1 = 16 (not 15).\n2. First term (r = 5) is 11; last term (r = 20) is 41.\n3. It is arithmetic, so S = (16/2)(11 + 41) = 416.' },
      { n: 4, f: 'An arithmetic sequence has u₃ = 11 and u₈ = 31. Find d and u₁.', b: 'Write both with the nth term formula and subtract: 5d = 20, so d = 4.\nThen u₁ = 11 − 2 × 4 = 3.' },
      { n: 5, f: 'Why does simple interest give an arithmetic sequence?', b: 'The same amount is added each year. £2000 at 3% simple interest gains £60 a year: £2060, £2120, … After 10 years: 2000 + 10 × 60 = £2600.' },
    ]),
    ...sub(T1, ss('1.3'), '1.3', [
      { n: 1, f: 'nth term of a geometric sequence', b: 'uₙ = u₁rⁿ⁻¹\nu₁ is the first term and r is the common ratio (r = u₂/u₁, not u₁/u₂).' },
      { n: 2, f: 'Sum of the first n terms of a geometric sequence', b: 'Sₙ = u₁(rⁿ − 1)/(r − 1) = u₁(1 − rⁿ)/(1 − r), for r ≠ 1.' },
      { n: 3, f: 'Find u₈ for the geometric sequence 3, −6, 12, …', b: 'r = −6/3 = −2, so u₈ = 3 × (−2)⁷ = −384.' },
      { n: 4, f: 'How do you find the least n for which Sₙ exceeds a given value?', b: '1. Write the inequality using the Sₙ formula.\n2. Solve it with logs (or a GDC table).\n3. Round UP to the next integer and check Sₙ either side.\nExample: 5(3ⁿ − 1)/2 > 10 000 gives n > 7.55, so n = 8.' },
      { n: 5, f: 'How do you test whether a sequence is arithmetic or geometric?', b: 'Arithmetic: constant difference, u₂ − u₁ = u₃ − u₂.\nGeometric: constant ratio, u₂/u₁ = u₃/u₂.' },
    ]),
    ...sub(T1, ss('1.4'), '1.4', [
      { n: 1, f: 'Compound interest formula', b: 'FV = PV × (1 + r/(100k))^(kn)\nPV = amount invested, r = annual rate in %, k = compounding periods per year (1, 2, 4 or 12), n = number of years.' },
      { n: 2, f: '£2500 is invested at 4% a year, compounded half-yearly, for 5 years. Find its value.', b: '2% per period over 10 periods:\n2500 × 1.02¹⁰ = £3047.49' },
      { n: 3, f: 'Annual depreciation formula, and the value of an £18 000 car after 3 years at 20% a year', b: 'Value = initial value × (1 − r/100)ⁿ\n18 000 × 0.8³ = £9216\n(The multiplier is 0.8, not −0.2 or 0.2.)' },
      { n: 4, f: 'Real value of a future amount after n years of inflation at i% a year', b: 'Real value = FV ÷ (1 + i/100)ⁿ\nIt expresses the future amount in today’s money.' },
      { n: 5, f: 'Compound interest on a GDC finance (TVM) solver: what do you enter?', b: 'N = number of periods (years × k), not years.\nI% = annual rate; P/Y = C/Y = k.\nPV negative (money paid in), PMT = 0.\nWrite your inputs on the page.' },
    ]),
    ...sub(T1, ss('1.5'), '1.5', [
      { n: 1, f: 'Laws of exponents: aᵐ × aⁿ, aᵐ ÷ aⁿ, (aᵐ)ⁿ', b: 'aᵐ × aⁿ = aᵐ⁺ⁿ\naᵐ ÷ aⁿ = aᵐ⁻ⁿ\n(aᵐ)ⁿ = aᵐⁿ' },
      { n: 2, f: 'a⁰ and a⁻ⁿ (a ≠ 0)', b: 'a⁰ = 1 and a⁻ⁿ = 1/aⁿ.\nSo 2⁻³ = 1/8, which is not the same as −2³ = −8.' },
      { n: 3, f: 'Definition of a logarithm', b: 'aˣ = b is equivalent to logₐ b = x, for a > 0, a ≠ 1, b > 0.\nA logarithm answers the question "what power?".' },
      { n: 4, f: 'What do log x and ln x mean?', b: 'log x means log₁₀ x (common logarithm).\nln x means logₑ x (natural logarithm), where e ≈ 2.718.' },
      { n: 5, f: 'Solve 10ˣ = 50 and eˣ = 7 (calculator allowed)', b: 'x = log 50 = 1.70 (3 s.f.)\nx = ln 7 = 1.95 (3 s.f.)' },
      { n: 6, f: 'logₐ a and logₐ 1', b: 'logₐ a = 1 and logₐ 1 = 0, because a¹ = a and a⁰ = 1.' },
    ]),
    ...sub(T1, ss('1.6'), '1.6', [
      { n: 1, f: 'Equation (=) vs identity (≡)', b: 'An equation is true only for particular values: x² − 9 = 0 gives x = ±3.\nAn identity is true for every value: x² − 9 ≡ (x − 3)(x + 3).' },
      { n: 2, f: 'How do you lay out an LHS to RHS proof?', b: '1. Write "LHS =" and start from the left-hand side only.\n2. Transform it one algebraic step per line.\n3. Finish with "= RHS".\nDo not work on both sides at once or start from the result. Check with a numerical value.' },
      { n: 3, f: 'Show that (2x + 1)² − (2x − 1)² ≡ 8x', b: 'LHS = (4x² + 4x + 1) − (4x² − 4x + 1)\n= 4x² + 4x + 1 − 4x² + 4x − 1\n= 8x = RHS' },
      { n: 4, f: 'Numerical proof vs algebraic proof', b: 'A numerical proof shows one case, such as 1/3 − 1/5 = 2/15.\nAn algebraic proof shows the general case for all allowed values, such as 1/n − 1/(n + 2) ≡ 2/(n(n + 2)).' },
    ]),
    ...sub(T1, ss('1.7'), '1.7', [
      { n: 1, f: 'Rational exponents: a^(1/m) and a^(n/m)', b: 'a^(1/m) = ᵐ√a and a^(n/m) = (ᵐ√a)ⁿ.\nTake the root first: 16^(3/4) = (⁴√16)³ = 2³ = 8.' },
      { n: 2, f: 'Evaluate 8^(−2/3) without a calculator', b: '8^(2/3) = (∛8)² = 4, so 8^(−2/3) = 1/4.' },
      { n: 3, f: 'Laws of logarithms: product, quotient and power', b: 'logₐ xy = logₐ x + logₐ y\nlogₐ (x/y) = logₐ x − logₐ y\nlogₐ xᵐ = m logₐ x\n(a, x, y > 0)' },
      { n: 4, f: 'Change of base formula', b: 'logₐ x = (log_b x)/(log_b a)\nExample: log₃ 20 = ln 20 / ln 3 = 2.73 (3 s.f.).' },
      { n: 5, f: 'How do you solve 5^(x+1) = 3^(2x)?', b: 'Take ln of both sides: (x + 1) ln 5 = 2x ln 3.\nCollect the x terms: x(2 ln 3 − ln 5) = ln 5.\nx = ln 5 / (2 ln 3 − ln 5) = 2.74 (3 s.f.)' },
      { n: 6, f: 'Solve 9ˣ − 4(3ˣ) + 3 = 0', b: 'Let y = 3ˣ, so 9ˣ = y²: y² − 4y + 3 = 0, (y − 1)(y − 3) = 0.\n3ˣ = 1 or 3ˣ = 3, so x = 0 or x = 1.\n(Reject any y ≤ 0, since 3ˣ > 0.)' },
      { n: 7, f: 'Exam trap: can log(x + y) or log x × log y be simplified with the log laws?', b: 'No. log(x + y) is not log x + log y, and log x × log y is not log xy. Only log xy splits, into log x + log y.' },
    ]),
    ...sub(T1, ss('1.8'), '1.8', [
      { n: 1, f: 'Sum to infinity of a geometric series, and when it exists', b: 'S∞ = u₁/(1 − r), only when |r| < 1 (a convergent series). State the condition when you use it.' },
      { n: 2, f: 'Find S∞ for 81 + 27 + 9 + …', b: 'r = 1/3, so S∞ = 81/(1 − 1/3) = 81/(2/3) = 121.5' },
      { n: 3, f: 'Write 0.888… as a fraction using a geometric series', b: '0.8 + 0.08 + 0.008 + …: u₁ = 0.8, r = 0.1\nS∞ = 0.8/(1 − 0.1) = 8/9' },
      { n: 4, f: 'For what values of x does the geometric series with r = x − 2 converge?', b: '|x − 2| < 1, so −1 < x − 2 < 1, giving 1 < x < 3. The inequality is strict.' },
    ]),
    ...sub(T1, ss('1.9'), '1.9', [
      { n: 1, f: 'The binomial theorem for n ∈ ℕ', b: '(a + b)ⁿ = Σ ⁿCᵣ aⁿ⁻ʳ bʳ, summed from r = 0 to n.\nGeneral term: ⁿCᵣ aⁿ⁻ʳ bʳ.' },
      { n: 2, f: 'ⁿCᵣ: formula and link to Pascal’s triangle', b: 'ⁿCᵣ = n!/(r!(n − r)!)\nIt is entry r of row n of Pascal’s triangle, counting from r = 0. Example: ⁵C₂ = 120/12 = 10.' },
      { n: 3, f: 'How do you find a specific term in a binomial expansion?', b: '1. Write the general term ⁿCᵣ aⁿ⁻ʳ bʳ with a and b in full, signs included.\n2. Simplify the power of x as an expression in r.\n3. Set it equal to the power you want and solve for r.\n4. Substitute r and evaluate.' },
      { n: 4, f: 'Find the term independent of x in (x² − 2/x)⁶', b: 'General term: ⁶Cᵣ (x²)⁶⁻ʳ (−2/x)ʳ = ⁶Cᵣ (−2)ʳ x^(12 − 3r).\n12 − 3r = 0 gives r = 4: 15 × 16 = 240.' },
      { n: 5, f: 'Find the coefficient of x² in (1 + 2x)⁶', b: '⁶C₂ × 2² = 15 × 4 = 60\n(The coefficient includes the power of the number in the bracket, not just ⁶C₂.)' },
    ]),
    ...sub(T1, ss('1.10'), '1.10', [
      { n: 1, f: 'Permutation vs combination, with formulas', b: 'Permutation: an ordered selection. ⁿPᵣ = n!/(n − r)!\nCombination: an unordered selection. ⁿCᵣ = n!/(r!(n − r)!)\nn different objects in a line: n! ways (0! = 1).', u: true },
      { n: 2, f: 'Choose a president and a secretary from 5 people, vs choose 2 representatives from 5', b: 'President and secretary (order matters): ⁵P₂ = 20.\nTwo representatives (order does not matter): ⁵C₂ = 10.', u: true },
      { n: 3, f: '4 different red cards and 3 different blue cards are put in a row with the blue cards together. How many arrangements?', b: 'Glue the blues into one block: arrange 5 items in 5! = 120 ways, then order the blues in 3! = 6 ways.\n120 × 6 = 720', u: true },
      { n: 4, f: 'Extended binomial theorem for n ∈ ℚ', b: '(1 + x)ⁿ = 1 + nx + (n(n − 1)/2!)x² + (n(n − 1)(n − 2)/3!)x³ + …\nInfinite unless n ∈ ℕ; valid for |x| < 1.', u: true },
      { n: 5, f: 'Expand √(9 − x) as far as the x² term and state when it is valid', b: '√(9 − x) = 3(1 − x/9)^(1/2) = 3(1 − x/18 − x²/648 + …)\n= 3 − x/6 − x²/216 + …\nValid for |x/9| < 1, so |x| < 9.', u: true },
      { n: 6, f: 'How do you count "at least one" selections without double-counting?', b: 'Either add the cases with exactly 1, exactly 2, … or use total − the cases you do not want (for example, total − none).', u: true },
    ]),
    ...sub(T1, ss('1.11'), '1.11', [
      { n: 1, f: 'Partial fractions: the form for two distinct linear factors', b: '(px + q)/((ax + b)(cx + d)) ≡ A/(ax + b) + B/(cx + d)\nThe numerator must be of lower degree than the denominator.', u: true },
      { n: 2, f: 'How do you find A and B in partial fractions?', b: '1. Factorise the denominator.\n2. Multiply both sides by it.\n3. Substitute each root of the denominator, or equate coefficients.\n4. Check with one value of x. It is an identity, so any x works.', u: true },
      { n: 3, f: 'Express 5/((x − 2)(x + 3)) in partial fractions', b: '5 ≡ A(x + 3) + B(x − 2). x = 2 gives A = 1; x = −3 gives B = −1.\n1/(x − 2) − 1/(x + 3)', u: true },
      { n: 4, f: 'Express 3x/((x + 1)(x − 2)) in partial fractions', b: '3x ≡ A(x − 2) + B(x + 1). x = −1 gives A = 1; x = 2 gives B = 2.\n1/(x + 1) + 2/(x − 2)', u: true },
    ]),
    ...sub(T1, ss('1.12'), '1.12', [
      { n: 1, f: 'i', b: 'The number with i² = −1. Powers cycle: i, −1, −i, 1.', u: true, src: CPX },
      { n: 2, f: 'Conjugate', b: 'z* = a − bi. Reflection of z in the real axis.', u: true, src: CPX },
      { n: 3, f: 'Modulus', b: '|z| = √(a² + b²). Distance from the origin.', u: true, src: CPX },
      { n: 4, f: 'Equality', b: 'a + bi = c + di means a = c and b = d.', u: true, src: CPX },
      { n: 5, f: 'How do you divide complex numbers in Cartesian form?', b: 'Multiply top and bottom by the conjugate of the denominator. The denominator becomes c² + d², a real number. Then split into real and imaginary parts.', u: true },
      { n: 6, f: 'Re z and Im z for z = 2 − 7i', b: 'Re z = 2 and Im z = −7 (not −7i). Both are real numbers.', u: true },
      { n: 7, f: 'Solve z² − 6z + 13 = 0', b: 'z = (6 ± √(36 − 52))/2 = (6 ± √(−16))/2 = 3 ± 2i', u: true },
    ]),
    ...sub(T1, ss('1.13'), '1.13', [
      { n: 1, f: 'Polar (modulus-argument) form and Euler form of z', b: 'z = r(cos θ + i sin θ) = r cis θ = re^(iθ), where r = |z| and θ = arg z.\nBack to Cartesian: a = r cos θ, b = r sin θ.', u: true },
      { n: 2, f: 'Argument', b: 'arg z, the angle from the positive real axis. These notes use −π < arg z ≤ π unless a question states another range.', u: true, src: CPX },
      { n: 3, f: 'Multiplying and dividing in polar form', b: 'r₁ cis θ₁ × r₂ cis θ₂ = r₁r₂ cis(θ₁ + θ₂)\nr₁ cis θ₁ ÷ r₂ cis θ₂ = (r₁/r₂) cis(θ₁ − θ₂)', u: true },
      { n: 4, f: 'How do you find arg z without a quadrant error?', b: '1. Sketch z on the Argand diagram.\n2. Reference angle α from tan α = |b|/|a|.\n3. First quadrant θ = α; second θ = π − α; third θ = −(π − α); fourth θ = −α.', u: true },
      { n: 5, f: 'Write 1 − i in Euler form', b: '|1 − i| = √2 and arg(1 − i) = −π/4 (fourth quadrant), so 1 − i = √2 e^(−iπ/4).', u: true },
      { n: 6, f: 'Geometric effect of multiplying a complex number by r cis θ, and by i', b: 'Multiplying by r cis θ scales by r and rotates anticlockwise by θ about the origin.\nMultiplying by i is a rotation of π/2 anticlockwise; the modulus is unchanged.', u: true },
    ]),
    ...sub(T1, ss('1.14'), '1.14', [
      { n: 1, f: 'Conjugate root theorem', b: 'If a polynomial has real coefficients and a + bi is a root, then a − bi is also a root. The pair gives the real quadratic factor z² − 2az + a² + b².', u: true },
      { n: 2, f: 'De Moivre’s theorem', b: '(r cis θ)ⁿ = rⁿ cis nθ, that is (r(cos θ + i sin θ))ⁿ = rⁿ(cos nθ + i sin nθ).', u: true },
      { n: 3, f: 'Find (1 + √3 i)⁶', b: '1 + √3 i = 2 cis(π/3), so (1 + √3 i)⁶ = 2⁶ cis(6π/3) = 64 cis 2π = 64.', u: true },
      { n: 4, f: 'How do you solve zⁿ = w?', b: '1. Write w = R cis(φ + 2kπ).\n2. z = R^(1/n) cis((φ + 2kπ)/n), for k = 0, 1, …, n − 1.\nThe n roots form a regular n-gon centred at the origin, spaced 2π/n apart.', u: true },
      { n: 5, f: 'The three cube roots of 1', b: 'cis(2kπ/3) for k = 0, 1, 2:\n1, −1/2 + (√3/2)i, −1/2 − (√3/2)i', u: true },
      { n: 6, f: 'A cubic with real coefficients and leading coefficient 1 has roots 1 and 2i. Find it.', b: '−2i is also a root, giving the factor z² + 4.\n(z − 1)(z² + 4) = z³ − z² + 4z − 4', u: true },
    ]),
    ...sub(T1, ss('1.15'), '1.15', [
      { n: 1, f: 'Layout of a proof by mathematical induction', b: 'Basis: show P(1) is true.\nAssumption: assume P(k) is true for some k ∈ ℤ⁺.\nStep: show P(k + 1) is true, using P(k).\nConclusion: P(1) is true and P(k) ⇒ P(k + 1), so P(n) is true for all n ∈ ℤ⁺.', u: true },
      { n: 2, f: 'Layout of a proof by contradiction (for example, √7 is irrational)', b: '1. "Assume, for a contradiction, that √7 = p/q, where p, q ∈ ℤ, q ≠ 0, with no common factor."\n2. Rearrange to a statement about integers.\n3. Show p and q share a factor (or another impossibility).\n4. State the contradiction, so the original statement is true.', u: true },
      { n: 3, f: 'Disprove: "if p is prime then 2p + 1 is prime"', b: 'Counterexample: p = 7 is prime, but 2(7) + 1 = 15 = 3 × 5, which is not prime. Show the working that breaks the statement.', u: true },
      { n: 4, f: 'Induction for divisibility: the key rewrite for 9ⁿ − 1', b: 'Write 9ᵏ⁺¹ − 1 = 9(9ᵏ − 1) + 8, then use the assumption that 9ᵏ − 1 is divisible by 8 (so both terms are multiples of 8).', u: true },
      { n: 5, f: 'Does checking n = 1, 2 and 3 prove a statement for all n?', b: 'No. Examples never prove a "for all" statement; the inductive step does the work. One counterexample is enough to disprove one.', u: true },
    ]),
    ...sub(T1, ss('1.16'), '1.16', [
      { n: 1, f: 'How do you solve three linear equations in x, y, z by elimination?', b: '1. Use equation (1) to remove x from (2) and (3).\n2. Use the new pair to remove y.\n3. Solve the last line for z and back-substitute.\nOn Papers 2 and 3 a GDC solver can do the arithmetic.', u: true },
      { n: 2, f: 'After elimination the last line is cz = d. What does it tell you?', b: 'c ≠ 0: a unique solution.\nc = 0, d ≠ 0: no solution (inconsistent).\nc = 0, d = 0: infinitely many solutions; let z = λ and back-substitute.', u: true },
      { n: 3, f: 'Find the general solution of x + y + z = 2, y − z = 1', b: 'Let z = λ. Then y = 1 + λ and x = 2 − y − z = 1 − 2λ.\nx = 1 − 2λ, y = 1 + λ, z = λ, λ ∈ ℝ', u: true },
      { n: 4, f: 'Solve x + y = 3, 2x + 2y = 7', b: 'Doubling the first gives 2x + 2y = 6, which contradicts 2x + 2y = 7. The system is inconsistent: no solution.', u: true },
    ]),

    // 2 Functions
    ...sub(T2, ss('2.1'), '2.1', [
      { n: 1, f: 'Gradient of the line through (x₁, y₁) and (x₂, y₂)', b: 'm = (y₂ − y₁)/(x₂ − x₁)\nExample: (3, −1) and (7, 11) give m = 12/4 = 3.' },
      { n: 2, f: 'Three forms of the equation of a straight line', b: 'Gradient-intercept: y = mx + c\nGeneral: ax + by + d = 0 (gradient −a/b)\nPoint-gradient: y − y₁ = m(x − x₁)' },
      { n: 3, f: 'Gradients of parallel and perpendicular lines', b: 'Parallel: m₁ = m₂.\nPerpendicular: m₁ × m₂ = −1, so the gradient is the negative reciprocal (−4/5 → 5/4).' },
      { n: 4, f: 'Find the line through (2, −1) perpendicular to y = 4x + 3, in the form ax + by + d = 0', b: 'm = −1/4, so y + 1 = −(1/4)(x − 2).\nMultiply by 4: 4y + 4 = −x + 2, giving x + 4y + 2 = 0.' },
      { n: 5, f: 'State the gradient and y-intercept of 4x − 2y + 7 = 0', b: 'Rearrange: y = 2x + 7/2. Gradient 2, y-intercept (0, 7/2). (Not 4 or −2.)' },
    ]),
    ...sub(T2, ss('2.2'), '2.2', [
      { n: 1, f: 'Function', b: 'A rule that gives exactly one output for each input in its domain.' },
      { n: 2, f: 'Domain and range of a function', b: 'Domain: the allowed inputs (by default, the largest set of real numbers for which the rule works).\nRange: the set of outputs produced from the domain. Write it with f(x) or y, not x.' },
      { n: 3, f: 'How do you find the domain of a function given by a formula?', b: 'Look for what is not allowed: the expression under a square root must be ≥ 0, and a denominator must be ≠ 0. (For a logarithm, the argument must be > 0.)' },
      { n: 4, f: 'Inverse function f⁻¹: graph, and link between domain and range', b: 'f⁻¹ reverses f. Its graph is the reflection of y = f(x) in the line y = x.\nDomain of f⁻¹ = range of f, and range of f⁻¹ = domain of f.' },
      { n: 5, f: 'f(x) = 5x − 3. Find f⁻¹(12) without finding f⁻¹(x).', b: 'Solve f(x) = 12: 5x − 3 = 12, so x = 3. Hence f⁻¹(12) = 3.' },
      { n: 6, f: 'State the range of f(x) = 7 − x², x ∈ ℝ', b: 'The maximum value is 7 (at x = 0), so the range is f(x) ≤ 7.' },
    ]),
    ...sub(T2, ss('2.3'), '2.3', [
      { n: 1, f: '"Draw" vs "sketch" a graph', b: 'Draw: accurate, to scale, with plotted points joined smoothly (ruler for straight lines).\nSketch: the correct general shape with the relevant features labelled.' },
      { n: 2, f: 'What must you label on a sketch of a graph?', b: 'The axes and every key feature: intercepts, maxima and minima, the vertex and any asymptotes (as equations). Mark end points if the domain is restricted.' },
      { n: 3, f: 'How do you copy a graph from a GDC screen correctly?', b: 'Match the viewing window: note where the curve enters and leaves the window, and mark end points if the domain is restricted. Label the key features you found.' },
      { n: 4, f: 'Which graphs does the course expect you to produce with technology?', b: 'Graphs of functions, including sums and differences of functions such as y = f(x) + g(x), and graphs of two functions together to find where they meet.' },
    ]),
    ...sub(T2, ss('2.4'), '2.4', [
      { n: 1, f: 'Key features of a graph you should be able to identify', b: 'Maximum and minimum values, intercepts, symmetry, vertex, zeros of functions (roots of equations), and vertical and horizontal asymptotes.' },
      { n: 2, f: 'Zeros, roots and x-intercepts: how are they linked?', b: 'The zeros of f are the roots of the equation f(x) = 0, which are the x-intercepts of the graph y = f(x).' },
      { n: 3, f: 'How do you find key features and intersections with a GDC?', b: '1. Graph in a window showing all turning points and intercepts.\n2. Use the zero, maximum, minimum and intersect tools; f(0) gives the y-intercept.\n3. Give values to 3 s.f. and points as coordinates.' },
      { n: 4, f: 'A GDC graph of y = 3 + 2/(x − 1). How do you state its asymptotes?', b: 'As equations, not numbers: vertical asymptote x = 1 and horizontal asymptote y = 3.' },
    ]),
    ...sub(T2, ss('2.5'), '2.5', [
      { n: 1, f: 'Composite function (f ∘ g)(x)', b: '(f ∘ g)(x) = f(g(x)). Apply g first, then f. Usually (f ∘ g)(x) ≠ (g ∘ f)(x).' },
      { n: 2, f: 'f(x) = 2x + 3 and g(x) = x − 4. Find (g ∘ f)(x) and (f ∘ g)(x).', b: '(g ∘ f)(x) = (2x + 3) − 4 = 2x − 1\n(f ∘ g)(x) = 2(x − 4) + 3 = 2x − 5' },
      { n: 3, f: 'How do you find f⁻¹(x)?', b: '1. Check f is one-to-one on its domain.\n2. Write y = f(x) and make x the subject (choose the root sign the domain of f allows).\n3. Swap x and y.\n4. State the domain of f⁻¹ as the range of f.' },
      { n: 4, f: 'Find f⁻¹(x) for f(x) = (x − 6)/4', b: 'y = (x − 6)/4, so x = 4y + 6. Swap: f⁻¹(x) = 4x + 6.' },
      { n: 5, f: 'Which functions have inverses, and what is (f ∘ f⁻¹)(x)?', b: 'Only one-to-one functions (each output from exactly one input) have inverses.\n(f ∘ f⁻¹)(x) = (f⁻¹ ∘ f)(x) = x, the identity function.' },
    ]),
    ...sub(T2, ss('2.6'), '2.6', [
      { n: 1, f: 'The three forms of a quadratic and what each shows', b: 'ax² + bx + c: y-intercept (0, c); axis x = −b/(2a).\na(x − p)(x − q): x-intercepts (p, 0) and (q, 0).\na(x − h)² + k: vertex (h, k); axis x = h.' },
      { n: 2, f: 'Write x² − 10x + 18 in the form (x − h)² + k and state the vertex', b: 'x² − 10x + 18 = (x − 5)² − 25 + 18 = (x − 5)² − 7.\nVertex (5, −7).' },
      { n: 3, f: 'Vertex of y = −3(x − 2)² + 7: maximum or minimum?', b: 'Vertex (2, 7). It is a maximum, because a = −3 < 0.' },
      { n: 4, f: 'Exam trap: the vertex of y = a(x + h)² + k', b: 'The vertex is (−h, k), not (h, k).' },
      { n: 5, f: 'x-intercepts and axis of symmetry of y = 2(x + 1)(x − 5)', b: 'x-intercepts (−1, 0) and (5, 0). The axis is midway between them: x = 2.' },
    ]),
    ...sub(T2, ss('2.7'), '2.7', [
      { n: 1, f: 'Quadratic formula and discriminant', b: 'For ax² + bx + c = 0: x = (−b ± √(b² − 4ac))/(2a).\nDiscriminant Δ = b² − 4ac.' },
      { n: 2, f: 'What does the discriminant tell you about the roots?', b: 'Δ > 0: two distinct real roots.\nΔ = 0: two equal real roots (one repeated root).\nΔ < 0: no real roots.\nΔ ≥ 0 means "real roots".' },
      { n: 3, f: 'How do you solve a quadratic inequality?', b: '1. Rearrange so one side is 0.\n2. Find the critical values (roots).\n3. Sketch the parabola and read off where it is above (> 0) or below (< 0) the x-axis.\n4. Use ≤ or ≥ if the roots are included.' },
      { n: 4, f: 'Solve x² + 2x − 15 ≤ 0', b: '(x + 5)(x − 3) ≤ 0. The parabola is below the axis between the roots: −5 ≤ x ≤ 3.' },
      { n: 5, f: 'Discriminant problems with a parameter k: method and trap', b: 'Write a, b, c in terms of k, form Δ, then set Δ > 0, = 0 or < 0 and solve for k.\nTrap: if a contains k, exclude the value that makes a = 0 (the equation is then linear).' },
    ]),
    ...sub(T2, ss('2.8'), '2.8', [
      { n: 1, f: 'Reciprocal function f(x) = 1/x: key features', b: 'Domain x ≠ 0, range y ≠ 0. Asymptotes x = 0 and y = 0. Branches in quadrants 1 and 3. It is self-inverse, so its graph is symmetric about y = x.' },
      { n: 2, f: 'Asymptotes of y = (ax + b)/(cx + d)', b: 'Vertical: x = −d/c (where the denominator is 0).\nHorizontal: y = a/c.' },
      { n: 3, f: 'Axis intercepts of y = (ax + b)/(cx + d)', b: 'y-intercept (0, b/d); x-intercept (−b/a, 0), from the numerator = 0.' },
      { n: 4, f: 'State the asymptotes of f(x) = (5x − 1)/(2x + 6)', b: 'Vertical x = −3; horizontal y = 5/2.' },
      { n: 5, f: 'Exam trap: the horizontal asymptote of (ax + b)/(cx + d)', b: 'It is y = a/c, not y = b/d (b/d is the y-intercept). Give it as an equation, and do not let a branch cross it on the sketch.' },
    ]),
    ...sub(T2, ss('2.9'), '2.9', [
      { n: 1, f: 'Graph of y = aˣ (a > 0, a ≠ 1): domain, range, asymptote, intercept', b: 'Domain: all real x. Range: y > 0. Asymptote y = 0. Passes through (0, 1).\nIncreasing if a > 1, decreasing if 0 < a < 1.' },
      { n: 2, f: 'Graph of y = ln x (or logₐ x): domain, range, asymptote, intercept', b: 'Domain: x > 0. Range: all real y. Asymptote x = 0. Passes through (1, 0).' },
      { n: 3, f: 'Write 3ˣ in the form e^(kx)', b: 'aˣ = e^(x ln a), so 3ˣ = e^(x ln 3): k = ln 3 ≈ 1.10.' },
      { n: 4, f: 'How are y = aˣ and y = logₐ x related?', b: 'They are inverse functions: logₐ aˣ = x and a^(logₐ x) = x. Their graphs are reflections of each other in y = x. Example: f(x) = 5ˣ has f⁻¹(x) = log₅ x.' },
      { n: 5, f: 'When does e^(kx) model growth, and when decay?', b: 'Growth if k > 0, decay if k < 0. For example y = 2⁻ˣ = (1/2)ˣ is a decay curve: the reflection of y = 2ˣ in the y-axis.' },
    ]),
    ...sub(T2, ss('2.10'), '2.10', [
      { n: 1, f: 'How do you solve a disguised quadratic in eˣ or aˣ?', b: '1. Spot a²ˣ = (aˣ)² and substitute u = aˣ.\n2. Solve the quadratic in u.\n3. Reject any u ≤ 0, saying why (aˣ > 0).\n4. Take logs of the positive root(s).' },
      { n: 2, f: 'Solve e²ˣ − 9eˣ + 20 = 0 exactly', b: 'Let u = eˣ: u² − 9u + 20 = 0, (u − 4)(u − 5) = 0.\neˣ = 4 or 5, so x = ln 4 or x = ln 5.' },
      { n: 3, f: 'How do you solve an equation with technology (Paper 2)?', b: '1. Graph both sides (or left side minus right side).\n2. Use intersect or zero.\n3. Check the whole domain, especially near asymptotes, for extra roots.\n4. Write the equation you solved, then the answer to 3 s.f.' },
      { n: 4, f: 'P = 500e^(0.03t). Find t when P = 800.', b: 'e^(0.03t) = 1.6, so 0.03t = ln 1.6 and t = 15.7 years (3 s.f.).' },
      { n: 5, f: '"Solve" vs "find the exact value" or "show that"', b: 'On Paper 2, "solve" allows a GDC. "Find the exact value" or "show that" needs algebra, with an exact answer such as x = ln 5, not 1.61.' },
    ]),
    ...sub(T2, ss('2.11'), '2.11', [
      { n: 1, f: 'Effect of y = f(x) + b and y = f(x − a)', b: 'f(x) + b: vertical translation by b, (x, y) → (x, y + b).\nf(x − a): horizontal translation by a, (x, y) → (x + a, y). Inside the bracket moves the opposite way to the sign.' },
      { n: 2, f: 'Effect of y = −f(x) and y = f(−x)', b: '−f(x): reflection in the x-axis, (x, y) → (x, −y).\nf(−x): reflection in the y-axis, (x, y) → (−x, y).' },
      { n: 3, f: 'Effect of y = p f(x) and y = f(qx)', b: 'p f(x): vertical stretch, scale factor p, (x, y) → (x, py).\nf(qx): horizontal stretch, scale factor 1/q, (x, y) → (x/q, y). Divide x-coordinates by q.' },
      { n: 4, f: 'In what order do you apply y = p f(x − a) + b?', b: '1. Horizontal translation by a.\n2. Vertical stretch by p (reflect too if p < 0).\n3. Vertical translation by b.\nMove key points and every asymptote at each step.' },
      { n: 5, f: '(6, −2) lies on y = f(x). Find its image on y = f(x/2) and on y = 2f(x) − 1.', b: 'f(x/2) is a horizontal stretch, factor 2: (12, −2).\n2f(x) − 1: (6, 2 × (−2) − 1) = (6, −5).' },
    ]),
    ...sub(T2, ss('2.12'), '2.12', [
      { n: 1, f: 'Remainder theorem and factor theorem', b: 'Remainder: p(x) ÷ (x − r) leaves remainder p(r); p(x) ÷ (ax − b) leaves p(b/a).\nFactor: (x − r) is a factor of p(x) ⇔ p(r) = 0.', u: true },
      { n: 2, f: 'Sum and product of the roots of aₙxⁿ + aₙ₋₁xⁿ⁻¹ + … + a₀ = 0', b: 'Sum = −aₙ₋₁/aₙ\nProduct = (−1)ⁿ a₀/aₙ\nCubic ax³ + bx² + cx + d = 0: sum −b/a, product −d/a.', u: true },
      { n: 3, f: 'Find the remainder when x³ − 2x + 5 is divided by (x + 2)', b: 'p(−2) = −8 + 4 + 5 = 1', u: true },
      { n: 4, f: 'How does a repeated factor show on the graph of a polynomial?', b: '(x − r)²: the graph touches the x-axis at r.\n(x − r)³: it crosses the x-axis at r with a point of inflexion.', u: true },
      { n: 5, f: 'Polynomial of degree n: maximum number of real zeros and of turning points', b: 'At most n real zeros and at most n − 1 turning points.', u: true },
      { n: 6, f: 'How do you factorise a cubic without a calculator?', b: '1. Try small factors of a₀/aₙ until p(r) = 0.\n2. Divide by (x − r) (long division or comparing coefficients).\n3. Factorise the quadratic quotient, or show its discriminant is negative.', u: true },
    ]),
    ...sub(T2, ss('2.13'), '2.13', [
      { n: 1, f: 'Rational function: how do the degrees decide the non-vertical asymptote?', b: 'Numerator of lower degree than denominator: y = 0.\nNumerator one degree higher: an oblique asymptote y = mx + k, found by division.\nNever both.', u: true },
      { n: 2, f: 'Find the asymptotes of y = (x² + 2x)/(x − 1)', b: 'x² + 2x = (x − 1)(x + 3) + 3, so y = x + 3 + 3/(x − 1).\nVertical asymptote x = 1; oblique asymptote y = x + 3.', u: true },
      { n: 3, f: 'State the asymptotes of y = (x + 5)/(x² − 9)', b: 'Vertical x = 3 and x = −3 (denominator zero); horizontal y = 0 (numerator of lower degree).', u: true },
      { n: 4, f: 'How do you sketch a rational function of higher degree?', b: '1. Factorise the denominator: vertical asymptotes.\n2. Compare degrees for y = 0 or y = mx + k.\n3. Intercepts: x = 0, and numerator = 0.\n4. Check signs between critical values to place each branch.', u: true },
    ]),
    ...sub(T2, ss('2.14'), '2.14', [
      { n: 1, f: 'Odd and even functions: definitions and graph symmetry', b: 'Even: f(−x) = f(x); symmetric in the y-axis (for example cos x).\nOdd: f(−x) = −f(x); rotational symmetry of order 2 about the origin (for example sin x, tan x).', u: true },
      { n: 2, f: 'Is f(x) = x² sin x odd, even or neither?', b: 'f(−x) = (−x)² sin(−x) = −x² sin x = −f(x), so f is odd.', u: true },
      { n: 3, f: 'Self-inverse function: definition and standard families', b: 'f(f(x)) = x, so f⁻¹ = f; the graph is symmetric in y = x.\nFamilies: c − x, k/x, (ax + b)/(cx − a).', u: true },
      { n: 4, f: 'Find f⁻¹(x) for f(x) = x² − 4x + 1, x ≥ 2', b: 'f(x) = (x − 2)² − 3, range f(x) ≥ −3. Solve: x = 2 + √(y + 3) (positive root, since x ≥ 2).\nf⁻¹(x) = 2 + √(x + 3), x ≥ −3.', u: true },
      { n: 5, f: 'Showing a function is odd, even or neither: what counts as proof?', b: 'Odd or even: algebra for a general x. Substituting x = 2 and x = −2 is not enough.\nNeither: one counterexample is enough.', u: true },
    ]),
    ...sub(T2, ss('2.15'), '2.15', [
      { n: 1, f: 'How do you solve g(x) ≥ f(x)?', b: '1. Rearrange to h(x) = g(x) − f(x) ≥ 0. Never divide by an expression of unknown sign.\n2. Factorise h (or find intersections on a GDC).\n3. Use a sketch or sign table. Use ≤/≥ at zeros, strict signs at asymptotes.', u: true },
      { n: 2, f: 'Solve x³ ≥ 2x² + 5x − 6', b: 'x³ − 2x² − 5x + 6 = (x − 1)(x + 2)(x − 3) ≥ 0.\nSo −2 ≤ x ≤ 1 or x ≥ 3.', u: true },
      { n: 3, f: 'Solve x² ≤ 4x', b: 'x² − 4x ≤ 0, so x(x − 4) ≤ 0, giving 0 ≤ x ≤ 4. (Dividing by x would lose solutions.)', u: true },
      { n: 4, f: 'Solve eˣ ≥ x + 2 with a GDC', b: 'The graphs meet at x = −1.84 and x = 1.15 (3 s.f.), so x ≤ −1.84 or x ≥ 1.15.', u: true },
    ]),
    ...sub(T2, ss('2.16'), '2.16', [
      { n: 1, f: 'Graph of y = |f(x)| vs y = f(|x|)', b: '|f(x)|: parts below the x-axis are reflected up (sharp corners where the graph crossed).\nf(|x|): keep the part for x ≥ 0 and mirror it in the y-axis; always even.', u: true },
      { n: 2, f: 'Key features of y = 1/f(x) from y = f(x)', b: 'Zeros of f become vertical asymptotes. A maximum (p, q) becomes a minimum (p, 1/q), q ≠ 0. Points with y = ±1 stay fixed. Signs are unchanged. Where |f| → ∞, 1/f → 0.', u: true },
      { n: 3, f: 'How do you solve |f(x)| = g(x)?', b: 'Solve f(x) = g(x) and f(x) = −g(x), then reject any solution where g(x) < 0.\nExample: |2x − 3| = x + 1 gives x = 4 or x = 2/3, both kept.', u: true },
      { n: 4, f: 'Solve |x − 2| < |2x + 1|', b: 'Both sides are non-negative, so square: x² − 4x + 4 < 4x² + 4x + 1, giving (3x − 1)(x + 3) > 0.\nx < −3 or x > 1/3', u: true },
      { n: 5, f: 'Solve |2x + 1| > 3', b: '2x + 1 > 3 or 2x + 1 < −3, so x > 1 or x < −2.', u: true },
      { n: 6, f: '(3, −2) lies on y = f(x). Find the corresponding point on y = f(2x − 1).', b: 'In general (p, q) → ((p − b)/a, q) for f(ax + b). Here 2x − 1 = 3, so x = 2: the point is (2, −2).', u: true },
    ]),

    // 3 Geometry and trigonometry
    ...sub(T3, ss('3.1'), '3.1', [
      { n: 1, f: 'Distance between two points in 3D, and their midpoint', b: 'd = √((x₁ − x₂)² + (y₁ − y₂)² + (z₁ − z₂)²)\nMidpoint ((x₁ + x₂)/2, (y₁ + y₂)/2, (z₁ + z₂)/2)' },
      { n: 2, f: 'A(0, 3, −1) and B(4, 5, 3). Find AB and the midpoint of AB.', b: 'AB = √(16 + 4 + 16) = √36 = 6. Midpoint (2, 4, 1).' },
      { n: 3, f: 'Right cone: volume, curved surface area and slant height', b: 'V = (1/3)πr²h; curved surface area = πrl; l² = r² + h².\nExample: r = 5, h = 12 gives l = 13, curved area 65π, V = 100π.' },
      { n: 4, f: 'Sphere and hemisphere: volume and surface area', b: 'Sphere: V = (4/3)πr³, S = 4πr².\nHemisphere: V = (2/3)πr³; curved surface 2πr²; total with the flat face 3πr².' },
      { n: 5, f: 'Volume of a right pyramid', b: 'V = (1/3)Ah, where A is the base area and h the perpendicular height (apex directly above the centre of the base).' },
      { n: 6, f: 'Angle between a line and a plane', b: 'The angle between the line and its projection onto the plane. Drop a perpendicular from a point on the line to the plane, join to where the line meets the plane, and use the right-angled triangle.' },
    ]),
    ...sub(T3, ss('3.2'), '3.2', [
      { n: 1, f: 'Sine rule', b: 'a/sin A = b/sin B = c/sin C\nUse it when you know a side and its opposite angle.' },
      { n: 2, f: 'Cosine rule, for a side and for an angle', b: 'c² = a² + b² − 2ab cos C\ncos C = (a² + b² − c²)/(2ab)' },
      { n: 3, f: 'Area of a triangle from two sides and the included angle', b: 'Area = ½ab sin C, where C is the angle between sides a and b.' },
      { n: 4, f: 'How do you choose a rule for a non-right-angled triangle?', b: 'Side and its opposite angle known: sine rule.\nTwo sides and the included angle: cosine rule for the third side.\nAll three sides: cosine rule for an angle.\nArea: ½ab sin C.' },
      { n: 5, f: 'A triangle has sides 3, 5 and 7. Find its largest angle.', b: 'Largest angle is opposite 7: cos C = (9 + 25 − 49)/30 = −1/2, so C = 120°. (The cosine rule handles an obtuse angle safely.)' },
    ]),
    ...sub(T3, ss('3.3'), '3.3', [
      { n: 1, f: 'Angle of elevation vs angle of depression', b: 'Both are measured from the horizontal: elevation upwards, depression downwards to the line of sight. They are equal for the same two points.' },
      { n: 2, f: 'Bearing', b: 'A three-figure angle measured clockwise from north, such as 007° or 245°.' },
      { n: 3, f: 'A cliff is 80 m high. The angle of depression to a boat is 14°. How far is the boat from the foot of the cliff?', b: 'tan 14° = 80/d, so d = 80/tan 14° = 321 m (3 s.f.).' },
      { n: 4, f: 'How do you set up a bearings problem?', b: '1. Draw a north line at every point used.\n2. Mark each bearing clockwise from north.\n3. Use back bearing = bearing ± 180° for angles inside the triangle.\n4. Solve the triangle, then convert back to a bearing.' },
      { n: 5, f: '3D trigonometry: what does SL set, compared with HL?', b: 'The guide says SL examinations set only right-angled trigonometry on 3D shapes. Find a right-angled triangle inside the solid and use SOH CAH TOA or Pythagoras.' },
    ]),
    ...sub(T3, ss('3.4'), '3.4', [
      { n: 1, f: 'Radian', b: 'The angle at the centre of a circle subtended by an arc equal in length to the radius. 2π rad = 360°, so π rad = 180° and 1 rad ≈ 57.3°.' },
      { n: 2, f: 'Arc length and sector area (θ in radians)', b: 'Arc length l = rθ\nSector area A = ½r²θ' },
      { n: 3, f: 'Sector perimeter vs arc length', b: 'Arc alone: rθ. Sector perimeter: rθ + 2r (include the two radii).' },
      { n: 4, f: 'Area of a segment cut off by a chord', b: 'Segment = sector − triangle = ½r²θ − ½r² sin θ (θ in radians).' },
      { n: 5, f: 'Convert 135° to radians, and 2 radians to degrees', b: '135 × π/180 = 3π/4\n2 × 180/π = 115° (3 s.f.)' },
    ]),
    ...sub(T3, ss('3.5'), '3.5', [
      { n: 1, f: 'Unit circle definitions of cos θ, sin θ and tan θ', b: 'The point at angle θ, anticlockwise from the positive x-axis, is (cos θ, sin θ). tan θ = sin θ/cos θ.' },
      { n: 2, f: 'Exact values of sin and cos at π/6, π/4 and π/3', b: 'sin: 1/2, √2/2, √3/2\ncos: √3/2, √2/2, 1/2\n(tan: √3/3, 1, √3)' },
      { n: 3, f: 'Signs of sin, cos and tan in each quadrant', b: 'First: all positive. Second: sin only. Third: tan only. Fourth: cos only.' },
      { n: 4, f: 'Ambiguous case of the sine rule: how do you find both possible angles?', b: '1. Find sin of the unknown angle with the sine rule.\n2. Take θ = arcsin(value) and also 180° − θ.\n3. Keep 180° − θ only if it plus the given angle is less than 180°.' },
      { n: 5, f: 'Equation of the line through the origin at 120° to the positive x-axis', b: 'y = x tan θ, and tan 120° = −√3, so y = −√3 x.' },
      { n: 6, f: 'Exact values of sin(4π/3) and cos(−5π/4)', b: 'sin(4π/3) = −√3/2 (third quadrant).\ncos(−5π/4) = −√2/2 (second quadrant).' },
    ]),
    ...sub(T3, ss('3.6'), '3.6', [
      { n: 1, f: 'Pythagorean identity', b: 'cos²θ + sin²θ = 1' },
      { n: 2, f: 'Double angle identities for sin 2θ and cos 2θ', b: 'sin 2θ = 2 sin θ cos θ\ncos 2θ = cos²θ − sin²θ = 2cos²θ − 1 = 1 − 2sin²θ' },
      { n: 3, f: 'cos θ = −1/3 and θ is in the second quadrant. Find sin θ and tan θ exactly.', b: 'sin²θ = 1 − 1/9 = 8/9, and sin is positive in the second quadrant, so sin θ = 2√2/3.\ntan θ = (2√2/3) ÷ (−1/3) = −2√2' },
      { n: 4, f: 'Given sin x = 1/3, find cos 2x', b: 'cos 2x = 1 − 2sin²x = 1 − 2/9 = 7/9' },
    ]),
    ...sub(T3, ss('3.7'), '3.7', [
      { n: 1, f: 'f(x) = a sin(b(x + c)) + d: amplitude, period, principal axis', b: 'Amplitude |a|; maximum d + |a|, minimum d − |a|.\nPeriod 2π/b (b is not the period).\nPrincipal axis y = d. Horizontal shift −c.' },
      { n: 2, f: 'Period of tan(bx), and of y = tan(x/2)', b: 'Period of tan(bx) is π/b, so tan(x/2) has period π ÷ (1/2) = 2π.' },
      { n: 3, f: 'Amplitude, period and range of f(x) = 5 cos 4x − 2', b: 'Amplitude 5, period 2π/4 = π/2, range −7 ≤ f(x) ≤ 3.' },
      { n: 4, f: 'Horizontal shift of y = sin(2x − π/2)', b: 'Factorise b first: sin(2(x − π/4)), so a shift of π/4 to the right (not π/2).' },
      { n: 5, f: 'Symmetry results for the circular functions: cos(−x), sin(−x), sin(π + x)', b: 'cos(−x) = cos x (cos is even)\nsin(−x) = −sin x (sin is odd)\nsin(π + x) = −sin x' },
      { n: 6, f: 'A wheel of radius 6 m, centre 8 m above the ground, turns once every 30 s, starting at the bottom. Model the height.', b: 'h(t) = 8 − 6 cos(πt/15), since b = 2π/30 = π/15.\nMinimum 2 m, maximum 14 m.' },
    ]),
    ...sub(T3, ss('3.8'), '3.8', [
      { n: 1, f: 'How do you solve sin(bx + c) = k in a given interval?', b: '1. Isolate the trig function.\n2. Change the interval to match bx + c.\n3. List every angle in that interval with the right sign.\n4. Solve for x and check each value is in the original interval.' },
      { n: 2, f: 'Solve 2sin²x = sin x for 0 ≤ x ≤ 2π', b: 'Factorise, do not divide: sin x(2 sin x − 1) = 0.\nsin x = 0: x = 0, π, 2π. sin x = 1/2: x = π/6, 5π/6.' },
      { n: 3, f: 'How do you solve a quadratic in one trig ratio?', b: '1. Use cos²x = 1 − sin²x (or a cos 2x form) so only one ratio remains.\n2. Rearrange to = 0 and factorise.\n3. Reject any value of sin or cos outside [−1, 1].\n4. Solve each remaining equation in the interval.' },
      { n: 4, f: 'Solve 2 cos x = −1 for 0 ≤ x ≤ 2π', b: 'cos x = −1/2, so x = 2π/3 or x = 4π/3.' },
      { n: 5, f: 'Solve tan²x = 3 for 0 ≤ x ≤ π', b: 'tan x = ±√3, so x = π/3 or x = 2π/3.' },
    ]),
    ...sub(T3, ss('3.9'), '3.9', [
      { n: 1, f: 'Reciprocal trigonometric ratios', b: 'sec θ = 1/cos θ\ncosec θ = 1/sin θ\ncot θ = 1/tan θ', u: true },
      { n: 2, f: 'Pythagorean identities with tan and cot', b: '1 + tan²θ = sec²θ\n1 + cot²θ = cosec²θ', u: true },
      { n: 3, f: 'Domains and ranges of arcsin, arccos and arctan', b: 'arcsin x: domain [−1, 1], range [−π/2, π/2]\narccos x: domain [−1, 1], range [0, π]\narctan x: domain ℝ, range ]−π/2, π/2[', u: true },
      { n: 4, f: 'Find arccos(−1/2)', b: '2π/3, not −π/3, because the range of arccos is [0, π].', u: true },
      { n: 5, f: 'Given tan θ = 2, find sec²θ', b: 'sec²θ = 1 + tan²θ = 1 + 4 = 5', u: true },
    ]),
    ...sub(T3, ss('3.10'), '3.10', [
      { n: 1, f: 'Compound angle identities for sin(A ± B)', b: 'sin(A ± B) = sin A cos B ± cos A sin B', u: true },
      { n: 2, f: 'Compound angle identities for cos(A ± B)', b: 'cos(A ± B) = cos A cos B ∓ sin A sin B\nThe sign in the middle is the opposite: cos(A + B) has a minus.', u: true },
      { n: 3, f: 'Compound angle identity for tan(A ± B)', b: 'tan(A ± B) = (tan A ± tan B)/(1 ∓ tan A tan B)', u: true },
      { n: 4, f: 'Double angle identity for tan 2θ, and tan 2A when tan A = 3', b: 'tan 2θ = 2 tan θ/(1 − tan²θ) (put B = A in tan(A + B)).\ntan 2A = 6/(1 − 9) = −3/4', u: true },
      { n: 5, f: 'Find the exact value of cos 15°', b: 'cos(45° − 30°) = cos 45° cos 30° + sin 45° sin 30° = (√2/2)(√3/2) + (√2/2)(1/2) = (√6 + √2)/4', u: true },
    ]),
    ...sub(T3, ss('3.11'), '3.11', [
      { n: 1, f: 'sin(π − θ), cos(π − θ) and tan(π − θ)', b: 'sin(π − θ) = sin θ\ncos(π − θ) = −cos θ\ntan(π − θ) = −tan θ', u: true },
      { n: 2, f: 'sin x = 0.4 has the solution α in [0, π/2]. Find the other solution in [0, π].', b: 'π − α, because sin(π − θ) = sin θ.', u: true },
      { n: 3, f: 'sin(π/2 − θ) and cos(π/2 − θ)', b: 'sin(π/2 − θ) = cos θ and cos(π/2 − θ) = sin θ. The graph of cos x is the graph of sin x translated π/2 to the left.', u: true },
      { n: 4, f: 'What symmetry of the graph of y = sin x does sin(π − x) = sin x show?', b: 'The graph is symmetric about the line x = π/2: points at equal distances either side of π/2 have the same height.', u: true },
    ]),
    ...sub(T3, ss('3.12'), '3.12', [
      { n: 1, f: 'Displacement vector', b: 'AB = b − a ("end minus start").', u: true, src: VEC },
      { n: 2, f: 'Base vectors', b: 'i, j, k are unit vectors along the axes; (v₁, v₂, v₃) = v₁i + v₂j + v₃k.', u: true, src: VEC },
      { n: 3, f: 'Parallel', b: 'w = kv for some scalar k (non-zero vectors).', u: true, src: VEC },
      { n: 4, f: 'Magnitude', b: '|v| = √(v₁² + v₂² + v₃²). Distance AB = |AB|.', u: true, src: VEC },
      { n: 5, f: 'Find the unit vector in the direction of (2, −6, 3)', b: '|v| = √(4 + 36 + 9) = 7, so the unit vector is v/|v| = (2/7, −6/7, 3/7).', u: true },
      { n: 6, f: 'How do you write a vector proof?', b: '1. Name the given vectors, for example OA = a, OC = c.\n2. Write other vectors in terms of them, using AB = b − a.\n3. Show the fact: a scalar multiple (parallel), zero scalar product (perpendicular) or equal magnitudes.\n4. State the result in words.', u: true },
    ]),
    ...sub(T3, ss('3.13'), '3.13', [
      { n: 1, f: 'Scalar product: component form and geometric form', b: 'v · w = v₁w₁ + v₂w₂ + v₃w₃ = |v||w| cos θ, where θ is the angle between v and w. The result is a number.', u: true },
      { n: 2, f: 'Find t so that (t, 2, −1) is perpendicular to (3, t, 4)', b: 'Perpendicular ⇔ scalar product 0: 3t + 2t − 4 = 0, so t = 4/5.', u: true },
      { n: 3, f: 'Find the angle between lines with directions (1, 2, 2) and (2, −1, 2)', b: 'cos θ = |2 − 2 + 4|/(3 × 3) = 4/9, so θ = 63.6°. For lines take the acute angle, using the modulus.', u: true },
      { n: 4, f: 'Properties of the scalar product to quote', b: 'v · w = w · v; v · v = |v|²; v · (w + u) = v · w + v · u; (kv) · w = k(v · w). For non-zero vectors, v · w = 0 means perpendicular.', u: true },
    ]),
    ...sub(T3, ss('3.14'), '3.14', [
      { n: 1, f: 'Vector equation of a line', b: 'r = a + λb, where a is the position vector of a point on the line and b is a direction vector. For a line through A and B, use b = AB.', u: true },
      { n: 2, f: 'Parametric and Cartesian forms of a line through (x₀, y₀, z₀) with direction (l, m, n)', b: 'Parametric: x = x₀ + λl, y = y₀ + λm, z = z₀ + λn\nCartesian: (x − x₀)/l = (y − y₀)/m = (z − z₀)/n', u: true },
      { n: 3, f: 'Write r = (3, −1, 0) + λ(2, 5, −4) in Cartesian form', b: '(x − 3)/2 = (y + 1)/5 = z/(−4)', u: true },
      { n: 4, f: 'An object has position r = (4, 1) + t(6, −8). What are its velocity and speed?', b: 'Velocity (6, −8) (the direction vector); speed |(6, −8)| = 10 units per unit time. The start position is (4, 1).', u: true },
    ]),
    ...sub(T3, ss('3.15'), '3.15', [
      { n: 1, f: 'Skew lines', b: 'Non-parallel lines that do not intersect (three dimensions only).', u: true, src: VEC },
      { n: 2, f: 'How do you decide whether two lines are coincident, parallel, intersecting or skew?', b: '1. Directions multiples: parallel or coincident; test one point of L₁ in L₂.\n2. Otherwise set a + λb = c + μd (different parameters).\n3. Solve two component equations for λ and μ.\n4. Third equation true: intersect. False: skew.', u: true },
      { n: 3, f: 'Two lines have directions (1, −2, 3) and (−2, 4, −6). Can they be skew?', b: 'No. The second direction is −2 times the first, so the lines are parallel or coincident.', u: true },
      { n: 4, f: 'Two objects move along lines with time t. Collision vs paths crossing: what is the difference in method?', b: 'Collision: use the same t for both objects (same place at the same time).\nPaths crossing: use different parameters for the two lines.', u: true },
    ]),
    ...sub(T3, ss('3.16'), '3.16', [
      { n: 1, f: 'Vector product of v and w in components', b: 'v × w = (v₂w₃ − v₃w₂, v₃w₁ − v₁w₃, v₁w₂ − v₂w₁)\nThe result is a vector perpendicular to both v and w. Check with scalar products.', u: true },
      { n: 2, f: 'Magnitude of v × w, and the areas it gives', b: '|v × w| = |v||w| sin θ.\nParallelogram with sides v and w: area |v × w|.\nTriangle ABC: area ½|AB × AC|.', u: true },
      { n: 3, f: 'Find (1, 0, 2) × (0, 1, 3) and the area of the parallelogram with these sides', b: '(0 × 3 − 2 × 1, 2 × 0 − 1 × 3, 1 × 1 − 0 × 0) = (−2, −3, 1)\nArea = √(4 + 9 + 1) = √14', u: true },
      { n: 4, f: 'Properties of the vector product', b: 'v × w = −w × v; v × v = 0; it distributes over addition; (kv) × w = k(v × w). A zero vector product means the vectors are parallel.', u: true },
    ]),
    ...sub(T3, ss('3.17'), '3.17', [
      { n: 1, f: 'Normal to a plane', b: 'A vector perpendicular to every direction in the plane.', u: true, src: VEC },
      { n: 2, f: 'Three forms of the equation of a plane', b: 'Vector: r = a + λb + μc\nNormal (scalar product): r · n = a · n\nCartesian: ax + by + cz = d, with normal (a, b, c)', u: true },
      { n: 3, f: 'How do you find the plane through three points A, B and C?', b: '1. Find AB and AC.\n2. n = AB × AC (simplify by a common factor).\n3. d = a · n; write ax + by + cz = d.\n4. Check the other two points.', u: true },
      { n: 4, f: 'Find the Cartesian equation of the plane through (1, −2, 4) with normal (3, 1, −2)', b: 'd = 3(1) + 1(−2) − 2(4) = −7, so 3x + y − 2z = −7.', u: true },
    ]),
    ...sub(T3, ss('3.18'), '3.18', [
      { n: 1, f: 'How do you find where a line meets a plane?', b: '1. Write the line in parametric form.\n2. Substitute x, y, z into the plane equation.\n3. Solve for the parameter and substitute back for the point.', u: true },
      { n: 2, f: 'How do you find the line of intersection of two planes?', b: '1. Direction = n₁ × n₂.\n2. Set one coordinate to 0 and solve the two equations for a point.\n3. Write r = point + t(direction). Check the point in both planes.', u: true },
      { n: 3, f: 'Angle between a line and a plane, and between two planes', b: 'Line–plane: sin φ = |b · n|/(|b||n|) (sin, because n is at 90° to the plane).\nPlane–plane: cos θ = |n₁ · n₂|/(|n₁||n₂|).', u: true },
      { n: 4, f: 'Three planes: what can the solution set be?', b: 'A single point, a line, a plane, or no solution. With no solution, either at least two planes are parallel or they form a triangular prism: check the normals.', u: true },
      { n: 5, f: 'Find the angle between planes with normals (1, 1, 0) and (0, 1, 1)', b: 'cos θ = 1/(√2 × √2) = 1/2, so θ = 60°.', u: true },
    ]),

    // 4 Statistics and probability
    ...sub(T4, ss('4.1'), '4.1', [
      { n: 1, f: 'Population', b: 'Every item of interest. Sample: the part you measure. Random sample: every item has an equal chance of selection.', src: STAT },
      { n: 2, f: 'Discrete data', b: 'Separate values, usually counts. Continuous data: any value in a range, usually measurements.', src: STAT },
      { n: 3, f: 'Bias', b: 'Some members of the population are more likely to be chosen than others, so the sample does not represent it.', src: STAT },
      { n: 4, f: 'Outlier', b: 'A data item more than 1.5 × IQR from the nearest quartile.', src: STAT },
      { n: 5, f: 'Quota vs stratified', b: 'Both use groups, but only stratified chooses at random within each group.', src: STAT },
      { n: 6, f: 'A gym has 1200 members, 450 of them under 30. How many under-30s go in a stratified sample of 80?', b: '(450/1200) × 80 = 30\nFor each group: (group size ÷ N) × sample size; check the numbers add up to the sample size.' },
    ]),
    ...sub(T4, ss('4.2'), '4.2', [
      { n: 1, f: 'Box and whisker diagram', b: 'Minimum, Q₁, median, Q₃, maximum. Outliers are crosses, and the whisker ends at the most extreme value that is not an outlier.', src: STAT },
      { n: 2, f: 'Comparing two box plots', b: 'One comment on the median, one on the IQR or range, both in context.', src: STAT },
      { n: 3, f: 'How do you draw and use a cumulative frequency graph?', b: '1. Add a running-total column.\n2. Plot each total at the UPPER class boundary, starting at zero at the lowest boundary.\n3. Join with a smooth curve or straight lines.\n4. Read across at n/2 (median), n/4 (Q₁), 3n/4 (Q₃).' },
      { n: 4, f: 'Frequency histograms in this course', b: 'Equal class widths, with bar height equal to frequency. Frequency density is not required. Class intervals have no gaps, such as 20 ≤ t < 30.' },
      { n: 5, f: 'Data: 2, 3, 5, 6, 8, 9, 11, 20. Is 20 an outlier?', b: 'Q₁ = 4, Q₃ = 10, IQR = 6. Upper fence = 10 + 1.5 × 6 = 19. 20 > 19, so yes, 20 is an outlier.' },
    ]),
    ...sub(T4, ss('4.3'), '4.3', [
      { n: 1, f: 'Mean of a frequency table, and an estimate of the mean for grouped data', b: 'x̄ = Σfx/Σf. For grouped data use the mid-interval value of each class as x (not the class boundaries).' },
      { n: 2, f: 'Modal class', b: 'The class with the highest frequency (equal class intervals only).', src: STAT },
      { n: 3, f: 'Variance', b: 'The square of the standard deviation.', src: STAT },
      { n: 4, f: 'Effect on the statistics of adding c to every item, or multiplying every item by k > 0', b: '+ c: mean, median and quartiles increase by c; SD, IQR, range and variance unchanged.\n× k: mean, median, quartiles, SD, IQR and range multiply by k; variance multiplies by k².' },
      { n: 5, f: 'Mean 50, SD 8. Every item becomes 3x − 10. Find the new mean, SD and variance.', b: 'Mean 3(50) − 10 = 140. SD 3 × 8 = 24. Variance 24² = 576.' },
      { n: 6, f: 'σx vs sx on the GDC', b: 'Use σx unless the question says otherwise.', src: STAT },
    ]),
    ...sub(T4, ss('4.4'), '4.4', [
      { n: 1, f: 'Pearson’s product-moment correlation coefficient r: range and meaning', b: '−1 ≤ r ≤ 1, found with technology. Its sign gives the direction and its size the strength of LINEAR correlation. A clear curve can give r near 0.' },
      { n: 2, f: 'Correlation vs causation', b: 'r measures association, not cause.', src: STAT },
      { n: 3, f: 'Mean point', b: '(x̄, ȳ). Lines of best fit by eye and both regression lines pass through it.', src: STAT },
      { n: 4, f: 'In the regression line y = ax + b, what do a and b mean?', b: 'a: the change in y for each increase of 1 in x.\nb: the value of y when x = 0, which may have no sensible meaning in context.' },
      { n: 5, f: 'Interpolation vs extrapolation', b: 'Inside the data range is reasonable when correlation is strong; outside it is unreliable.', src: STAT },
      { n: 6, f: 'The regression line of y on x is y = 2.5x + 3 and x̄ = 6. Find ȳ.', b: 'The line passes through (x̄, ȳ), so ȳ = 2.5(6) + 3 = 18.' },
    ]),
    ...sub(T4, ss('4.5'), '4.5', [
      { n: 1, f: 'Trial', b: 'One run of an experiment. Outcome: one possible result.', src: PROB },
      { n: 2, f: 'Sample space U', b: 'All possible outcomes. Event A: a subset of U.', src: PROB },
      { n: 3, f: 'Relative frequency', b: 'Number of times A occurred ÷ number of trials (experimental probability).', src: PROB },
      { n: 4, f: 'Complement A′', b: '"Not A". P(A′) = 1 − P(A).', src: PROB },
      { n: 5, f: 'Probability with equally likely outcomes, and expected number of occurrences', b: 'P(A) = n(A)/n(U).\nExpected number = n × P(A). Example: a fair die rolled 150 times gives 150 × 1/6 = 25 expected fives.' },
    ]),
    ...sub(T4, ss('4.6'), '4.6', [
      { n: 1, f: 'Probability of A or B (union)', b: 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B). For mutually exclusive events P(A ∩ B) = 0.' },
      { n: 2, f: 'Mutually exclusive', b: 'A and B cannot both happen, so P(A ∩ B) = 0.', src: PROB },
      { n: 3, f: 'Independent', b: 'One event does not affect the other, so P(A ∩ B) = P(A)P(B).', src: PROB },
      { n: 4, f: 'Tree diagram without replacement: how do the second branches change?', b: 'Reduce the count and the total by one on the branch already taken. Multiply along branches; add the branches that give the event.' },
      { n: 5, f: 'Can two events be both mutually exclusive and independent?', b: 'Not if P(A) and P(B) are both non-zero: exclusive means P(A ∩ B) = 0, but independent needs P(A ∩ B) = P(A)P(B) > 0.' },
    ]),
    ...sub(T4, ss('4.7'), '4.7', [
      { n: 1, f: 'Discrete random variable', b: 'Takes separate values, each with a probability; Σ P(X = x) = 1.', src: PROB },
      { n: 2, f: 'Expected value of a discrete random variable', b: 'E(X) = Σ x P(X = x)' },
      { n: 3, f: 'P(X = x) = x/10 for x = 1, 2, 3, 4. Find E(X).', b: 'E(X) = (1 + 4 + 9 + 16)/10 = 30/10 = 3' },
      { n: 4, f: 'Fair game', b: 'E(X) = 0, where X is the player’s gain.', src: PROB },
      { n: 5, f: 'How do you find an unknown constant k in a discrete probability distribution?', b: 'Set the sum of all the probabilities equal to 1 and solve for k.' },
    ]),
    ...sub(T4, ss('4.8'), '4.8', [
      { n: 1, f: 'Conditions for a binomial model X ~ B(n, p)', b: 'A fixed number of trials n; two outcomes per trial; constant probability p of success; independent trials.' },
      { n: 2, f: 'Mean and variance of X ~ B(n, p), and their values for B(10, 0.3)', b: 'E(X) = np and Var(X) = np(1 − p).\nB(10, 0.3): E(X) = 3, Var(X) = 2.1.' },
      { n: 3, f: 'How do you rewrite P(X ≥ 4) and P(X < 4) for a binomial cdf?', b: 'P(X ≥ 4) = 1 − P(X ≤ 3)\nP(X < 4) = P(X ≤ 3)\nUse binomial pdf for "=" and binomial cdf for "≤".' },
      { n: 4, f: 'Why does sampling without replacement not give a binomial model?', b: 'The probability changes from one trial to the next and the trials are not independent.' },
    ]),
    ...sub(T4, ss('4.9'), '4.9', [
      { n: 1, f: 'Normal distribution N(μ, σ²)', b: 'Symmetric about μ; mean = median = mode. About 68% of values lie within μ ± σ, 95% within μ ± 2σ and 99.7% within μ ± 3σ. The z-value gives the number of standard deviations from the mean.', src: PROB },
      { n: 2, f: 'Normal cdf vs inverse normal on the GDC', b: 'Given a value, find a probability with normal cdf.\nGiven a probability, find a value with inverse normal.' },
      { n: 3, f: 'X ~ N(70, 5²). What do you enter for the standard deviation?', b: '5. N(μ, σ²) gives the variance, but the GDC asks for σ. Entering 25 is a common error.' },
      { n: 4, f: 'X ~ N(50, 4²) and P(X < a) = 0.9. Find a.', b: 'Inverse normal with area 0.9 to the left: a = 55.1 (3 s.f.).' },
      { n: 5, f: 'For a continuous variable such as a normal one, how do P(X < a) and P(X ≤ a) compare?', b: 'They are equal, because P(X = a) = 0.' },
    ]),
    ...sub(T4, ss('4.10'), '4.10', [
      { n: 1, f: 'y on x vs x on y', b: 'Predict y from x with the y on x line; predict x from y with the x on y line. Never rearrange one to get the other. The lines are different unless r = ±1.', src: STAT },
      { n: 2, f: 'You are given a value of y and need to estimate x. Which regression line do you use?', b: 'The regression line of x on y, x = cy + d.' },
      { n: 3, f: 'How do you find the regression line of x on y with a GDC?', b: 'Run linear regression with the lists swapped (y as the independent list), and write it as x = cy + d. Predict with unrounded coefficients.' },
    ]),
    ...sub(T4, ss('4.11'), '4.11', [
      { n: 1, f: 'Formal definition of conditional probability', b: 'P(A | B) = P(A ∩ B)/P(B), for P(B) > 0.' },
      { n: 2, f: 'Formal test for independence', b: 'A and B are independent if P(A | B) = P(A) = P(A | B′), equivalently P(A ∩ B) = P(A)P(B).' },
      { n: 3, f: 'P(A) = 0.45, P(B) = 0.3, P(A ∩ B) = 0.12. Find P(A | B). Are A and B independent?', b: 'P(A | B) = 0.12/0.3 = 0.4 ≠ 0.45 = P(A), so not independent (also 0.45 × 0.3 = 0.135 ≠ 0.12).' },
      { n: 4, f: 'Is P(A | B) the same as P(B | A)?', b: 'No, in general they are different. P(A | B) = P(A ∩ B)/P(B), while P(B | A) = P(A ∩ B)/P(A).' },
    ]),
    ...sub(T4, ss('4.12'), '4.12', [
      { n: 1, f: 'Standardized value z', b: 'z = (x − μ)/σ: the number of standard deviations x is from the mean. Z ~ N(0, 1).' },
      { n: 2, f: 'X ~ N(70, 5²). Find the z-value of x = 62.', b: 'z = (62 − 70)/5 = −1.6' },
      { n: 3, f: 'How do you find an unknown μ or σ of a normal distribution?', b: '1. Use inverse normal on N(0, 1) with the area to the LEFT to get z.\n2. Solve x = μ + zσ.\nTwo unknowns need two equations.' },
      { n: 4, f: 'X ~ N(120, σ²) and P(X > 130) = 0.2. Find σ.', b: 'Area to the left of 130 is 0.8, so z = 0.8416.\nσ = (130 − 120)/0.8416 = 11.9 (3 s.f.)' },
    ]),
    ...sub(T4, ss('4.13'), '4.13', [
      { n: 1, f: 'Bayes’ theorem for two events', b: 'P(B | A) = P(B)P(A | B) / [P(B)P(A | B) + P(B′)P(A | B′)]', u: true },
      { n: 2, f: 'How do you set up a Bayes’ theorem problem?', b: '1. Tree diagram: the "cause" events first, the observed event second.\n2. P(observed) = sum of all branches ending in it.\n3. P(cause | observed) = that cause’s branch ÷ P(observed).', u: true },
      { n: 3, f: 'P(B) = 0.4, P(A | B) = 0.5, P(A | B′) = 0.2. Find P(B | A).', b: 'P(A) = 0.4 × 0.5 + 0.6 × 0.2 = 0.2 + 0.12 = 0.32\nP(B | A) = 0.2/0.32 = 0.625', u: true },
      { n: 4, f: 'Bayes’ theorem with three mutually exclusive causes B₁, B₂, B₃', b: 'P(Bᵢ | A) = P(Bᵢ)P(A | Bᵢ) / [P(B₁)P(A | B₁) + P(B₂)P(A | B₂) + P(B₃)P(A | B₃)]', u: true },
    ]),
    ...sub(T4, ss('4.14'), '4.14', [
      { n: 1, f: 'Variance of a random variable in terms of expectations', b: 'Var(X) = E(X²) − [E(X)]²', u: true },
      { n: 2, f: 'E(aX + b) and Var(aX + b)', b: 'E(aX + b) = aE(X) + b\nVar(aX + b) = a²Var(X)\nExample: E(X) = 4, Var(X) = 3 gives E(2X + 1) = 9 and Var(2X + 1) = 12.', u: true },
      { n: 3, f: 'Continuous random variable: conditions on the pdf f(x), and the mean', b: 'f(x) ≥ 0 and the integral of f(x) over its whole domain is 1.\nE(X) = ∫ x f(x) dx over the domain.', u: true },
      { n: 4, f: 'Median and mode of a continuous random variable', b: 'Median m: the integral of f(x) from the lower end of the domain to m equals 1/2.\nMode: where f(x) is largest. Check the end points as well as stationary points.', u: true },
      { n: 5, f: 'f(x) = x²/9 for 0 ≤ x ≤ 3. Find E(X), Var(X) and the median.', b: 'E(X) = ∫₀³ x³/9 dx = 9/4. E(X²) = ∫₀³ x⁴/9 dx = 27/5.\nVar(X) = 27/5 − 81/16 = 27/80.\nMedian: m³/27 = 1/2, so m = 3/∛2 = 2.38 (3 s.f.).', u: true },
    ]),

    // 5 Calculus
    ...sub(T5, ss('5.1'), '5.1', [
      { n: 1, f: 'Limit (informal, SL)', b: 'The value f(x) approaches as x approaches a given value. At SL, estimate it from a table or a graph; formal methods are not required.' },
      { n: 2, f: 'Derivative as a gradient function', b: 'f′(x) is the gradient function. f′(a) is the gradient of the tangent at x = a, found as the limit of the gradients of chords as they shrink towards that point.' },
      { n: 3, f: 'Table: (x⁴ − 1)/(x − 1) is 3.940399 at x = 0.99 and 4.060401 at x = 1.01. Estimate the limit as x → 1.', b: 'The values approach 4 from both sides, so the limit is 4.' },
      { n: 4, f: 'The derivative as a rate of change: what do dV/dr and ds/dt mean?', b: 'dV/dr is the rate of change of V with respect to r; ds/dt is the rate of change of s with respect to time t.' },
    ]),
    ...sub(T5, ss('5.2'), '5.2', [
      { n: 1, f: 'Increasing and decreasing functions in terms of f′(x)', b: 'Increasing on an interval where f′(x) > 0; decreasing where f′(x) < 0.' },
      { n: 2, f: 'How do you find the intervals where a function is increasing or decreasing?', b: '1. Find f′(x) and factorise it.\n2. Solve f′(x) = 0.\n3. Test the sign of f′ in each interval.\n4. State the intervals with strict inequalities.' },
      { n: 3, f: 'For what values of x is g(x) = 2x³ − 9x² + 12x decreasing?', b: 'g′(x) = 6x² − 18x + 12 = 6(x − 1)(x − 2) < 0 for 1 < x < 2.' },
      { n: 4, f: 'Reading a graph of y = f′(x): where is f increasing, and where are its stationary points?', b: 'f is increasing where the graph of f′ is above the x-axis and decreasing where it is below. The zeros of f′ are the stationary points of f.' },
    ]),
    ...sub(T5, ss('5.3'), '5.3', [
      { n: 1, f: 'Derivative of f(x) = axⁿ', b: 'f′(x) = anxⁿ⁻¹. The derivative of a constant is 0, and a sum is differentiated term by term.' },
      { n: 2, f: 'Differentiate y = 7/x³ − 2√x', b: 'Rewrite first: y = 7x⁻³ − 2x^(1/2).\ndy/dx = −21x⁻⁴ − x^(−1/2)' },
      { n: 3, f: 'Differentiate y = 6x⁻² + x³/3', b: 'dy/dx = −12x⁻³ + x²' },
      { n: 4, f: 'Exam trap: differentiating 3/x or 1/√x', b: 'Rewrite as 3x⁻¹ or x^(−1/2) before using the power rule: d/dx(3x⁻¹) = −3x⁻², d/dx(x^(−1/2)) = −½x^(−3/2).' },
    ]),
    ...sub(T5, ss('5.4'), '5.4', [
      { n: 1, f: 'How do you find the tangent and normal to y = f(x) at x = a?', b: '1. Point: y₁ = f(a).\n2. Tangent gradient m = f′(a).\n3. Tangent: y − y₁ = m(x − a).\n4. Normal gradient −1/m; normal: y − y₁ = (−1/m)(x − a).' },
      { n: 2, f: 'Find the tangent and normal to y = e²ˣ at x = 0', b: 'Point (0, 1); dy/dx = 2e²ˣ, so m = 2.\nTangent y = 2x + 1. Normal y = −x/2 + 1.' },
      { n: 3, f: 'Find the equation of the tangent to y = √x at x = 9', b: 'Point (9, 3). dy/dx = 1/(2√x) = 1/6 at x = 9.\ny − 3 = (1/6)(x − 9), so y = x/6 + 3/2.' },
      { n: 4, f: 'Exam trap: the y-coordinate of the point of contact', b: 'Substitute into f(x), not f′(x). And the normal gradient is −1/m, not 1/m or m.' },
    ]),
    ...sub(T5, ss('5.5'), '5.5', [
      { n: 1, f: 'Anti-derivative and indefinite integral', b: 'F is an anti-derivative of f if F′(x) = f(x).\n∫ f(x) dx = F(x) + C: a family of functions, so include + C.' },
      { n: 2, f: 'Integral of xⁿ', b: '∫ xⁿ dx = xⁿ⁺¹/(n + 1) + C, for n ≠ −1.' },
      { n: 3, f: 'dy/dx = 3x² + 2 and y = 1 when x = 1. Find y.', b: 'y = x³ + 2x + C. Substitute: 1 = 1 + 2 + C, so C = −2.\ny = x³ + 2x − 2 (write the full function).' },
      { n: 4, f: 'How do you find the area between a curve and the x-axis with technology, where f(x) > 0?', b: 'Area = ∫ₐᵇ f(x) dx. Write the integral with its limits on the page, then evaluate it with the GDC and give 3 s.f.' },
    ]),
    ...sub(T5, ss('5.6'), '5.6', [
      { n: 1, f: 'Derivatives of sin x, cos x, eˣ and ln x', b: 'sin x → cos x\ncos x → −sin x\neˣ → eˣ\nln x → 1/x\n(Trig results need x in radians.)' },
      { n: 2, f: 'Chain rule', b: 'If y = f(u) and u = g(x), dy/dx = (dy/du)(du/dx).\nExample: d/dx(x² + 1)⁵ = 5(x² + 1)⁴ × 2x = 10x(x² + 1)⁴.' },
      { n: 3, f: 'Product rule', b: 'For y = uv: dy/dx = u(dv/dx) + v(du/dx).\nExample: d/dx(x ln x) = ln x + 1.' },
      { n: 4, f: 'Quotient rule', b: 'For y = u/v: dy/dx = (v(du/dx) − u(dv/dx))/v².\nExample: d/dx(x/(x + 2)) = ((x + 2) − x)/(x + 2)² = 2/(x + 2)².' },
      { n: 5, f: 'Derivatives of e^(kx), sin(kx + b) and ln(g(x))', b: 'd/dx e^(kx) = ke^(kx)\nd/dx sin(kx + b) = k cos(kx + b)\nd/dx ln(g(x)) = g′(x)/g(x), so d/dx ln(3x − 2) = 3/(3x − 2)' },
      { n: 6, f: 'Product or composite? x² sin x and sin(x²)', b: 'x² sin x is a product: use the product rule.\nsin(x²) is a composite: use the chain rule, giving 2x cos(x²).' },
    ]),
    ...sub(T5, ss('5.7'), '5.7', [
      { n: 1, f: 'Second derivative', b: 'd²y/dx² or f″(x): the derivative of f′(x), the rate of change of the gradient.' },
      { n: 2, f: 'At a local maximum of f, what does the graph of f′ do? And at a local minimum?', b: 'Local maximum: f′ crosses the x-axis from + to −.\nLocal minimum: f′ crosses from − to +.' },
      { n: 3, f: 'Concave-up and concave-down: what do f′ and f″ do?', b: 'Concave-up: f′ increasing, f″(x) > 0.\nConcave-down: f′ decreasing, f″(x) < 0.' },
      { n: 4, f: 'A point of inflexion on f: what does it look like on the graphs of f′ and f″?', b: 'f′ has a turning point there, and f″ crosses the x-axis.' },
    ]),
    ...sub(T5, ss('5.8'), '5.8', [
      { n: 1, f: 'How do you find and classify stationary points?', b: '1. Solve f′(x) = 0.\n2. Find y from f(x), not f′(x).\n3. f″(x) > 0: minimum; f″(x) < 0: maximum; f″(x) = 0: use the sign of f′ either side.' },
      { n: 2, f: 'Point of inflexion: the full condition', b: 'f″(x) = 0 AND f″ changes sign. Its gradient can be zero (horizontal inflexion, like (0, 0) on y = x³) or non-zero.' },
      { n: 3, f: 'Exam trap: y = x⁴ has f″(0) = 0. Is (0, 0) a point of inflexion?', b: 'No. f″ does not change sign, and (0, 0) is a minimum. f″(x) = 0 is necessary but not sufficient.' },
      { n: 4, f: 'Find the point of inflexion of y = x³ − 6x² + 5', b: 'y″ = 6x − 12 = 0 at x = 2, and y″ changes from − to +.\ny = 8 − 24 + 5 = −11, so the point is (2, −11).' },
      { n: 5, f: 'f′(x) = (x − 1)²(x + 2). Classify the stationary points of f.', b: 'x = −2: f′ goes from − to +, a minimum.\nx = 1: f′ is positive on both sides, so a point of inflexion with zero gradient.' },
      { n: 6, f: 'How do you solve an optimisation problem?', b: '1. Write the quantity Q in terms of the variables.\n2. Use the constraint to make Q a function of one variable.\n3. Solve dQ/dx = 0.\n4. Justify max or min; check end points if the domain is restricted.\n5. Answer the question, with units.' },
    ]),
    ...sub(T5, ss('5.9'), '5.9', [
      { n: 1, f: 'Links between displacement s, velocity v and acceleration a', b: 'v = ds/dt and a = dv/dt = d²s/dt².\nGoing back: integrate a to get v, and v to get s, adding + C each time and using known values such as v(0) or s(0).' },
      { n: 2, f: 'Velocity vs speed', b: 'Velocity has a sign (direction). Speed = |v|, never negative.' },
      { n: 3, f: 'Displacement vs total distance travelled between t₁ and t₂', b: 'Displacement = ∫ v(t) dt (can be negative).\nDistance = ∫ |v(t)| dt (never negative). They differ when the particle turns round.' },
      { n: 4, f: 'v(t) = 4 − 2t for 0 ≤ t ≤ 3. Find the displacement and the total distance.', b: 'Displacement = [4t − t²]₀³ = 3 m.\nv = 0 at t = 2: ∫₀² v dt = 4, ∫₂³ v dt = −1, so distance = 4 + 1 = 5 m.' },
    ]),
    ...sub(T5, ss('5.10'), '5.10', [
      { n: 1, f: 'Standard integrals of 1/x, sin x, cos x and eˣ', b: '∫ 1/x dx = ln x + C\n∫ sin x dx = −cos x + C\n∫ cos x dx = sin x + C\n∫ eˣ dx = eˣ + C' },
      { n: 2, f: 'Integrating a linear composite f(ax + b)', b: '∫ f(ax + b) dx = (1/a)F(ax + b) + C. Divide by a, never multiply.\nExample: ∫ 3 sin(2x) dx = −(3/2) cos(2x) + C.' },
      { n: 3, f: 'Reverse chain rule (integration by inspection)', b: '∫ k g′(x) f(g(x)) dx = k F(g(x)) + C.\nFind the inner function g, check g′(x) is a factor (up to a constant), guess, differentiate to adjust the constant, add + C.' },
      { n: 4, f: 'Find ∫ x² e^(x³) dx', b: 'Inner function x³ with derivative 3x², so ∫ x² e^(x³) dx = (1/3)e^(x³) + C.' },
      { n: 5, f: 'Find ∫ x(x² − 1)³ dx', b: 'Inner function x² − 1 with derivative 2x: (1/8)(x² − 1)⁴ + C.' },
      { n: 6, f: 'Find ∫ 1/(5x + 2) dx', b: '(1/5) ln(5x + 2) + C. Do not forget the 1/a factor.' },
    ]),
    ...sub(T5, ss('5.11'), '5.11', [
      { n: 1, f: 'Definite integral', b: '∫ₐᵇ f(x) dx = F(b) − F(a). It is a number, so there is no + C.' },
      { n: 2, f: 'Area between two curves', b: 'Area = ∫ₐᵇ (top − bottom) dx. Solve f(x) = g(x) for the limits, test which curve is on top, and split where the curves cross.' },
      { n: 3, f: 'How do you find the area of a region that lies partly below the x-axis (no GDC)?', b: '1. Find the roots in the interval.\n2. Split the integral at each root.\n3. Evaluate each part.\n4. Add the absolute values.\nExample: y = x² − 4x + 3 on [0, 3] has integral 0 but area 8/3.' },
      { n: 4, f: 'Find the area enclosed by y = x² and y = 2x', b: 'They meet at x = 0 and x = 2, with 2x on top.\n∫₀² (2x − x²) dx = 4 − 8/3 = 4/3' },
      { n: 5, f: 'Evaluate ∫₀^(ln 2) e²ˣ dx', b: '[½e²ˣ] from 0 to ln 2 = ½(e^(2 ln 2) − 1) = ½(4 − 1) = 3/2' },
    ]),
    ...sub(T5, ss('5.12'), '5.12', [
      { n: 1, f: 'Continuity and differentiability (informal)', b: 'Continuous: no break in the graph. Differentiable: no break and no sharp corner. The guide says you will not be asked to test for either.', u: true },
      { n: 2, f: 'Derivative from first principles', b: 'f′(x) = lim (h→0) [f(x + h) − f(x)]/h\nIn this course, for polynomials only.', u: true },
      { n: 3, f: 'Find f′(x) from first principles for f(x) = 2x² − 3x', b: 'f(x + h) − f(x) = 4xh + 2h² − 3h.\nDivide by h: 4x + 2h − 3.\nLet h → 0: f′(x) = 4x − 3.\n(Divide by h before letting h → 0.)', u: true },
      { n: 4, f: 'Convergence and divergence', b: 'A sequence or expression converges if it tends to a finite limit; otherwise it diverges. Example: rⁿ → 0 when |r| < 1.', u: true },
      { n: 5, f: 'Higher derivatives: notation, and the pattern for y = xeˣ', b: 'dⁿy/dxⁿ or f⁽ⁿ⁾(x). For y = xeˣ: y′ = (x + 1)eˣ, y″ = (x + 2)eˣ, suggesting f⁽ⁿ⁾(x) = (x + n)eˣ, which is proved by induction.', u: true },
    ]),
    ...sub(T5, ss('5.13'), '5.13', [
      { n: 1, f: 'l’Hôpital’s rule', b: 'If lim f(x)/g(x) is of the form 0/0 or ∞/∞, then lim f(x)/g(x) = lim f′(x)/g′(x). Differentiate top and bottom separately (not the quotient rule).', u: true },
      { n: 2, f: 'How do you apply l’Hôpital’s rule correctly?', b: '1. Substitute to confirm 0/0 or ∞/∞, and say which.\n2. Differentiate numerator and denominator separately.\n3. Substitute again; if still indeterminate, repeat.', u: true },
      { n: 3, f: 'Find lim (x→0) (1 − cos 2x)/x²', b: '0/0. Differentiate: (2 sin 2x)/(2x), still 0/0.\nAgain: (4 cos 2x)/2 → 4/2 = 2.', u: true },
      { n: 4, f: 'Find lim (x→∞) (2x² − x)/(5x² + 3)', b: '∞/∞. l’Hôpital twice: (4x − 1)/(10x), then 4/10 = 2/5.', u: true },
      { n: 5, f: 'Standard limit for sin θ/θ, and lim (x→0) (sin 3x)/x', b: 'lim (θ→0) (sin θ)/θ = 1.\n(sin 3x)/x = 3 × (sin 3x)/(3x) → 3.', u: true },
      { n: 6, f: 'Use a Maclaurin series to find lim (x→0) (eˣ − 1 − x)/x²', b: 'eˣ − 1 − x = x²/2 + x³/6 + …, so the expression = 1/2 + x/6 + … → 1/2.', u: true },
    ]),
    ...sub(T5, ss('5.14'), '5.14', [
      { n: 1, f: 'How do you differentiate implicitly?', b: '1. Differentiate each term with respect to x; terms in y pick up a factor dy/dx.\n2. Use the product rule on mixed terms such as xy or x²y.\n3. Collect the dy/dx terms and factorise.', u: true },
      { n: 2, f: 'Find dy/dx for x³ + y³ = 9 at (1, 2)', b: '3x² + 3y² dy/dx = 0, so dy/dx = −x²/y² = −1/4.', u: true },
      { n: 3, f: 'Find dy/dx for x² + xy + y² = 7 at (1, 2)', b: '2x + y + x dy/dx + 2y dy/dx = 0, so dy/dx = −(2x + y)/(x + 2y) = −4/5.', u: true },
      { n: 4, f: 'How do you solve a related rates problem?', b: '1. Write the formula linking the quantities.\n2. Differentiate with respect to t, or use the chain rule, e.g. dA/dt = (dA/dr)(dr/dt).\n3. Substitute the values at the instant LAST (not before differentiating).', u: true },
      { n: 5, f: 'Optimisation on a closed interval: where can the optimum be?', b: 'At a stationary point inside the interval or at an end point. Keep only solutions inside the interval, evaluate at them and at both end points, and compare.', u: true },
    ]),
    ...sub(T5, ss('5.15'), '5.15', [
      { n: 1, f: 'Derivatives of tan x, sec x, cosec x and cot x', b: 'tan x → sec²x\nsec x → sec x tan x\ncosec x → −cosec x cot x\ncot x → −cosec²x', u: true },
      { n: 2, f: 'Derivatives of aˣ and logₐ x', b: 'd/dx aˣ = aˣ ln a (so 3ˣ → 3ˣ ln 3)\nd/dx logₐ x = 1/(x ln a)', u: true },
      { n: 3, f: 'Derivatives of arcsin x, arccos x and arctan x', b: 'arcsin x → 1/√(1 − x²)\narccos x → −1/√(1 − x²)\narctan x → 1/(1 + x²)', u: true },
      { n: 4, f: 'Standard integrals giving arctan and arcsin', b: '∫ 1/(a² + x²) dx = (1/a) arctan(x/a) + C\n∫ 1/√(a² − x²) dx = arcsin(x/a) + C', u: true },
      { n: 5, f: 'Find ∫ 1/(x² + 6x + 13) dx', b: 'Complete the square: x² + 6x + 13 = (x + 3)² + 4.\n∫ = (1/2) arctan((x + 3)/2) + C', u: true },
      { n: 6, f: 'Find ∫ (x + 7)/((x − 2)(x + 1)) dx', b: 'Partial fractions: 3/(x − 2) − 2/(x + 1).\n∫ = 3 ln|x − 2| − 2 ln|x + 1| + C (modulus signs needed).', u: true },
    ]),
    ...sub(T5, ss('5.16'), '5.16', [
      { n: 1, f: 'Integration by parts', b: '∫ u (dv/dx) dx = uv − ∫ v (du/dx) dx\nChoose u to get simpler when differentiated: ln x, arcsin x, arctan x first, then polynomials.', u: true },
      { n: 2, f: 'Find ∫ ln x dx', b: 'Parts with u = ln x, dv/dx = 1: x ln x − ∫ x(1/x) dx = x ln x − x + C.', u: true },
      { n: 3, f: 'Find ∫ x e³ˣ dx', b: 'u = x, dv/dx = e³ˣ, v = (1/3)e³ˣ:\n(x/3)e³ˣ − ∫ (1/3)e³ˣ dx = (x/3)e³ˣ − (1/9)e³ˣ + C', u: true },
      { n: 4, f: 'How do you integrate eˣ sin x or eˣ cos x?', b: 'Use integration by parts twice. The original integral reappears, so collect it on one side and solve for it.', u: true },
      { n: 5, f: 'How do you integrate by substitution?', b: '1. Use the given u; find dx in terms of du.\n2. Change the limits to u-values (or substitute back at the end).\n3. Simplify fully before integrating.\nA substitution is given unless the integral has the form ∫ k g′(x) f(g(x)) dx.', u: true },
    ]),
    ...sub(T5, ss('5.17'), '5.17', [
      { n: 1, f: 'Area between a curve and the y-axis', b: 'Area = ∫ₐᵇ |x| dy, with the curve written as x in terms of y and limits as y-values.', u: true },
      { n: 2, f: 'Volume of revolution about the x-axis and about the y-axis', b: 'About the x-axis: V = π ∫ₐᵇ y² dx (x-limits).\nAbout the y-axis: V = π ∫ₐᵇ x² dy (y-limits).', u: true },
      { n: 3, f: 'Find the area between y = x³ and the y-axis for 1 ≤ y ≤ 8', b: 'x = y^(1/3), so area = ∫₁⁸ y^(1/3) dy = [(3/4)y^(4/3)]₁⁸ = (3/4)(16 − 1) = 45/4.', u: true },
      { n: 4, f: 'The region under y = √x from x = 0 to x = 4 is rotated 2π about the x-axis. Find the volume.', b: 'V = π ∫₀⁴ (√x)² dx = π ∫₀⁴ x dx = π[x²/2]₀⁴ = 8π', u: true },
    ]),
    ...sub(T5, ss('5.18'), '5.18', [
      { n: 1, f: 'Euler’s method for dy/dx = f(x, y) with step h', b: 'xₙ₊₁ = xₙ + h\nyₙ₊₁ = yₙ + h f(xₙ, yₙ)\nKeep full calculator values; round only the final answer. A smaller h usually gives a better estimate.', u: true },
      { n: 2, f: 'One Euler step, h = 0.1, for dy/dx = xy with y(1) = 2', b: 'y(1.1) ≈ 2 + 0.1 × (1 × 2) = 2.2', u: true },
      { n: 3, f: 'How do you solve a separable differential equation?', b: '1. Rearrange to g(y) dy = f(x) dx.\n2. Integrate both sides; add one constant.\n3. Use the initial condition, then rearrange for y.\nTrap: ln|y| = f(x) + C gives y = Ae^(f(x)), not e^(f(x)) + C.', u: true },
      { n: 4, f: 'Homogeneous differential equation dy/dx = f(y/x): method', b: 'Substitute y = vx, so dy/dx = v + x dv/dx. Separate the variables v and x, integrate, then replace v with y/x.', u: true },
      { n: 5, f: 'Integrating factor method for dy/dx + P(x)y = Q(x)', b: '1. Make the coefficient of dy/dx equal to 1.\n2. I(x) = e^(∫P(x) dx), no constant needed.\n3. d/dx(I y) = I Q; integrate, then divide by I.', u: true },
      { n: 6, f: 'Solve dy/dx + (2/x)y = 3x', b: 'I = e^(∫2/x dx) = x². d/dx(x²y) = 3x³, so x²y = (3/4)x⁴ + C.\ny = (3/4)x² + C/x²', u: true },
    ]),
    ...sub(T5, ss('5.19'), '5.19', [
      { n: 1, f: 'Maclaurin series of f(x)', b: 'f(x) = f(0) + x f′(0) + (x²/2!) f″(0) + (x³/3!) f‴(0) + …', u: true },
      { n: 2, f: 'Maclaurin series of eˣ, sin x and cos x', b: 'eˣ = 1 + x + x²/2! + x³/3! + …\nsin x = x − x³/3! + x⁵/5! − …\ncos x = 1 − x²/2! + x⁴/4! − …', u: true },
      { n: 3, f: 'Maclaurin series of ln(1 + x) and arctan x', b: 'ln(1 + x) = x − x²/2 + x³/3 − …\narctan x = x − x³/3 + x⁵/5 − …', u: true },
      { n: 4, f: 'Maclaurin series of ln(1 + 2x) up to x³', b: 'Replace x with 2x: 2x − (2x)²/2 + (2x)³/3 = 2x − 2x² + (8/3)x³', u: true },
      { n: 5, f: 'Find the series of eˣ sin x up to x³', b: '(1 + x + x²/2 + …)(x − x³/6 + …) = x + x² + x³/2 − x³/6 + … = x + x² + x³/3 + …\n(Do not miss cross terms such as (x²/2) × x.)', u: true },
      { n: 6, f: 'How do you find a Maclaurin series from a differential equation?', b: '1. Find y′(0) from the equation.\n2. Differentiate the equation (implicitly) to get y″, y‴.\n3. Substitute x = 0 each time.\n4. Build the series from y(0), y′(0), y″(0), …', u: true },
    ]),
  ],
};
